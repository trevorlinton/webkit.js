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
H_BASE = parentModule["_malloc"](152 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 152;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_fi(index,a1) {
  try {
    return Module["dynCall_fi"](index,a1);
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
function invoke_vii(index,a1,a2) {
  try {
    Module["dynCall_vii"](index,a1,a2);
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
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
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
function invoke_viff(index,a1,a2,a3) {
  try {
    Module["dynCall_viff"](index,a1,a2,a3);
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
function invoke_iii(index,a1,a2) {
  try {
    return Module["dynCall_iii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiif(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiif"](index,a1,a2,a3);
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
  var __ZTVN7WebCore13InlineFlowBoxE=(H_BASE+8)|0;
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
  var invoke_fi=env.invoke_fi;
  var invoke_v=env.invoke_v;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_fiifffii=env.invoke_fiifffii;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_viff=env.invoke_viff;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_iiif=env.invoke_iiif;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _ceilf=env._ceilf;
  var ___setErrNo=env.___setErrNo;
  var _malloc=env._malloc;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var _round=env._round;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore13InlineFlowBox26placeBoxesInBlockDirectionENS_10LayoutUnitES1_ibRS1_S2_RbS2_S2_S3_S3_NS_12FontBaselineE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13) {
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
 var i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, d44 = +0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, d66 = +0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, d92 = +0, d93 = +0, i94 = 0, i95 = 0, i96 = 0, i97 = 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i15 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i15 >> 2];
 i15 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i15 >> 2];
 i15 = i14 | 0;
 i16 = i14 + 8 | 0;
 i17 = i14 + 16 | 0;
 i18 = i14 + 24 | 0;
 i19 = i14 + 32 | 0;
 i20 = i14 + 40 | 0;
 i21 = i14 + 48 | 0;
 i22 = i14 + 56 | 0;
 i23 = i14 + 64 | 0;
 i24 = i14 + 72 | 0;
 i25 = i14 + 80 | 0;
 i26 = i14 + 88 | 0;
 i27 = i14 + 96 | 0;
 i28 = i14 + 104 | 0;
 i29 = i14 + 112 | 0;
 i30 = i14 + 120 | 0;
 i31 = i14 + 128 | 0;
 i32 = i14 + 136 | 0;
 i33 = i14 + 144 | 0;
 i34 = i1 | 0;
 i35 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 48 >> 2] & 31](i34) | 0;
 do {
  if (i35) {
   i36 = i1 + 32 | 0;
   i37 = HEAP32[i1 + 16 >> 2] | 0;
   i38 = i37;
   do {
    if ((HEAP32[i36 >> 2] & 1 | 0) == 0) {
     i39 = HEAP32[i37 + 36 >> 2] | 0;
    } else {
     if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i37 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
      i39 = HEAP32[i37 + 36 >> 2] | 0;
      break;
     } else {
      i39 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i38) | 0;
      break;
     }
    }
   } while (0);
   i38 = __ZNK7WebCore11RenderStyle11fontMetricsEv(i39) | 0;
   i37 = (HEAP32[i2 >> 2] | 0) + i4 | 0;
   i40 = i38 + 4 | 0;
   i41 = _round(+(+HEAPF32[i40 >> 2])) | 0;
   if ((i13 | 0) == 0) {
    i42 = i41;
   } else {
    i43 = i38 + 8 | 0;
    i38 = (_round(+(+HEAPF32[i43 >> 2])) | 0) + i41 | 0;
    i41 = _round(+(+HEAPF32[i40 >> 2])) | 0;
    i42 = i38 + (((_round(+(+HEAPF32[i43 >> 2])) | 0) + i41 | 0) / -2 & -1) | 0;
   }
   d44 = +(i37 - i42 | 0);
   if ((HEAP32[i36 >> 2] & 2048 | 0) == 0) {
    HEAPF32[i1 + 20 >> 2] = d44;
    break;
   } else {
    HEAPF32[i1 + 24 >> 2] = d44;
    break;
   }
  }
 } while (0);
 i42 = i1 + 56 | 0;
 do {
  if ((HEAP32[i42 >> 2] & 16 | 0) == 0) {
   i45 = 0;
  } else {
   d44 = +HEAPF32[((HEAP32[i1 + 32 >> 2] & 2048 | 0) == 0 ? i1 + 20 | 0 : i1 + 24 | 0) >> 2];
   do {
    if (d44 < +2147483647) {
     if (d44 <= +-2147483648) {
      i46 = -2147483648;
      break;
     }
     i46 = ~~d44;
    } else {
     i46 = 2147483647;
    }
   } while (0);
   if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
    i45 = i46;
    break;
   }
   i36 = HEAP32[i1 + 16 >> 2] | 0;
   i39 = i36;
   i37 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i36 >> 2] | 0) + 752 >> 2] & 31](i39) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i36 >> 2] | 0) + 720 >> 2] & 7](i17, i39);
   i45 = i37 + i46 + (HEAP32[i17 >> 2] | 0) | 0;
  }
 } while (0);
 i17 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i17 | 0) != 0) {
  i46 = i2 | 0;
  i2 = i23 | 0;
  i37 = i24 | 0;
  i39 = (i13 | 0) == 0;
  i36 = i22 | 0;
  i41 = i21 | 0;
  i43 = i1 + 16 | 0;
  i38 = i6 | 0;
  i40 = i20;
  i47 = i9 | 0;
  i48 = i7 | 0;
  i49 = i26;
  i50 = i10 | 0;
  i51 = i27;
  i52 = i19;
  i53 = i28 | 0;
  i54 = i3 | 0;
  i3 = i29 | 0;
  i55 = i18 | 0;
  i56 = i15 | 0;
  i57 = i16 | 0;
  d44 = +(i45 | 0);
  i45 = i17;
  while (1) {
   i17 = i45 + 16 | 0;
   do {
    if ((HEAP32[(HEAP32[i17 >> 2] | 0) + 20 >> 2] & 25165824 | 0) != 16777216) {
     if ((HEAP32[i42 >> 2] & 16 | 0) != 0) {
      i58 = HEAP32[(HEAP32[i45 >> 2] | 0) + 24 >> 2] | 0;
      if ((HEAP32[i45 + 32 >> 2] & 2048 | 0) == 0) {
       FUNCTION_TABLE_viff[i58 & 3](i45, d44, +0);
       break;
      } else {
       FUNCTION_TABLE_viff[i58 & 3](i45, +0, d44);
       break;
      }
     }
     i58 = i45;
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i58 >> 2] | 0) + 40 >> 2] & 31](i45) | 0) {
      i59 = i45;
     } else {
      i59 = 0;
     }
     i60 = i45 + 32 | 0;
     i61 = HEAP32[i17 >> 2] | 0;
     i62 = (HEAP32[i61 + 20 >> 2] & 768 | 0) == 256;
     do {
      if ((HEAP32[i60 >> 2] & 1 | 0) == 0) {
       if (i62) {
        i63 = HEAP32[(HEAP32[i61 + 8 >> 2] | 0) + 36 >> 2] | 0;
        break;
       } else {
        i63 = HEAP32[i61 + 36 >> 2] | 0;
        break;
       }
      } else {
       if (i62) {
        i64 = HEAP32[i61 + 8 >> 2] | 0;
        if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i64 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
         i63 = HEAP32[i64 + 36 >> 2] | 0;
         break;
        } else {
         i63 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i64) | 0;
         break;
        }
       } else {
        if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i61 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
         i63 = HEAP32[i61 + 36 >> 2] | 0;
         break;
        } else {
         i63 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i61) | 0;
         break;
        }
       }
      }
     } while (0);
     L56 : do {
      if ((HEAP32[i63 + 48 >> 2] & 983040 | 0) == 393216) {
       i61 = HEAP32[i17 >> 2] | 0;
       do {
        if ((HEAP32[i61 + 20 >> 2] & 768 | 0) == 256) {
         i62 = HEAP32[i61 + 8 >> 2] | 0;
         if ((HEAP32[i62 + 20 >> 2] & 1024 | 0) != 0) {
          break;
         }
         if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i62 >> 2] | 0) + 188 >> 2] & 31](i62 | 0) | 0)) {
          i65 = 45;
          break L56;
         }
        }
       } while (0);
       i61 = HEAP32[i46 >> 2] | 0;
       d66 = +(i61 | 0);
       i62 = HEAP32[i60 >> 2] | 0;
       if ((i62 & 2048 | 0) == 0) {
        HEAPF32[i45 + 20 >> 2] = d66;
        i67 = 1;
        i68 = i62;
        i69 = i61;
        break;
       } else {
        HEAPF32[i45 + 24 >> 2] = d66;
        i67 = 1;
        i68 = i62;
        i69 = i61;
        break;
       }
      } else {
       i65 = 45;
      }
     } while (0);
     L65 : do {
      if ((i65 | 0) == 45) {
       i65 = 0;
       i61 = HEAP32[i17 >> 2] | 0;
       i62 = (HEAP32[i61 + 20 >> 2] & 768 | 0) == 256;
       do {
        if ((HEAP32[i60 >> 2] & 1 | 0) == 0) {
         if (i62) {
          i70 = HEAP32[(HEAP32[i61 + 8 >> 2] | 0) + 36 >> 2] | 0;
          break;
         } else {
          i70 = HEAP32[i61 + 36 >> 2] | 0;
          break;
         }
        } else {
         if (i62) {
          i64 = HEAP32[i61 + 8 >> 2] | 0;
          if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i64 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
           i70 = HEAP32[i64 + 36 >> 2] | 0;
           break;
          } else {
           i70 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i64) | 0;
           break;
          }
         } else {
          if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i61 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
           i70 = HEAP32[i61 + 36 >> 2] | 0;
           break;
          } else {
           i70 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i61) | 0;
           break;
          }
         }
        }
       } while (0);
       L83 : do {
        if ((HEAP32[i70 + 48 >> 2] & 983040 | 0) == 458752) {
         i61 = HEAP32[i17 >> 2] | 0;
         do {
          if ((HEAP32[i61 + 20 >> 2] & 768 | 0) == 256) {
           i62 = HEAP32[i61 + 8 >> 2] | 0;
           if ((HEAP32[i62 + 20 >> 2] & 1024 | 0) != 0) {
            break;
           }
           if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i62 >> 2] | 0) + 188 >> 2] & 31](i62 | 0) | 0)) {
            break L83;
           }
          }
         } while (0);
         i61 = HEAP32[i46 >> 2] | 0;
         i62 = (HEAP32[i54 >> 2] | 0) + i61 | 0;
         FUNCTION_TABLE_vii[HEAP32[(HEAP32[i45 >> 2] | 0) + 84 >> 2] & 7](i18, i45);
         d66 = +(i62 - (HEAP32[i55 >> 2] | 0) | 0);
         i62 = HEAP32[i60 >> 2] | 0;
         if ((i62 & 2048 | 0) == 0) {
          HEAPF32[i45 + 20 >> 2] = d66;
          i67 = 1;
          i68 = i62;
          i69 = i61;
          break L65;
         } else {
          HEAPF32[i45 + 24 >> 2] = d66;
          i67 = 1;
          i68 = i62;
          i69 = i61;
          break L65;
         }
        }
       } while (0);
       do {
        if ((i59 | 0) == 0 | i5) {
         i71 = 1;
        } else {
         i61 = i59 + 56 | 0;
         if ((HEAP32[i61 >> 2] & 4 | 0) != 0) {
          i71 = 1;
          break;
         }
         i62 = HEAP32[i59 + 16 >> 2] | 0;
         i64 = i62;
         i72 = i62;
         if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i72 >> 2] | 0) + 760 >> 2] & 31](i64) | 0) != 0) {
          i71 = 1;
          break;
         }
         if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i72 >> 2] | 0) + 764 >> 2] & 31](i64) | 0) != 0) {
          i71 = 1;
          break;
         }
         i72 = i62;
         FUNCTION_TABLE_vii[HEAP32[(HEAP32[i72 >> 2] | 0) + 728 >> 2] & 7](i15, i64);
         if ((HEAP32[i56 >> 2] | 0) != 0) {
          i71 = 1;
          break;
         }
         FUNCTION_TABLE_vii[HEAP32[(HEAP32[i72 >> 2] | 0) + 732 >> 2] & 7](i16, i64);
         if ((HEAP32[i57 >> 2] | 0) != 0) {
          i71 = 1;
          break;
         }
         i71 = (HEAP32[i61 >> 2] & 24 | 0) == 24;
        }
       } while (0);
       i61 = i4 - (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i45 >> 2] | 0) + 80 >> 2] & 3](i45, i13) | 0) | 0;
       i64 = HEAP32[i60 >> 2] | 0;
       i72 = (i64 & 2048 | 0) == 0;
       i62 = i45 + 24 | 0;
       i73 = i45 + 20 | 0;
       i74 = HEAP32[i46 >> 2] | 0;
       d66 = +(i61 | 0) + (+HEAPF32[(i72 ? i73 : i62) >> 2] + +(i74 | 0));
       if (i72) {
        HEAPF32[i73 >> 2] = d66;
        i67 = i71;
        i68 = i64;
        i69 = i74;
        break;
       } else {
        HEAPF32[i62 >> 2] = d66;
        i67 = i71;
        i68 = i64;
        i69 = i74;
        break;
       }
      }
     } while (0);
     i74 = i45 + 24 | 0;
     i64 = i45 + 20 | 0;
     d66 = +HEAPF32[((i68 & 2048 | 0) == 0 ? i64 : i74) >> 2];
     do {
      if (d66 < +2147483647) {
       if (d66 <= +-2147483648) {
        i75 = -2147483648;
        break;
       }
       i75 = ~~d66;
      } else {
       i75 = 2147483647;
      }
     } while (0);
     HEAP32[i19 >> 2] = i75;
     HEAP32[i20 >> 2] = i75;
     d66 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i45);
     do {
      if (d66 < +2147483647) {
       if (d66 <= +-2147483648) {
        i76 = -2147483648;
        break;
       }
       i76 = ~~d66;
      } else {
       i76 = 2147483647;
      }
     } while (0);
     i62 = HEAP32[i17 >> 2] | 0;
     i73 = (HEAP32[i62 + 20 >> 2] & 768 | 0) == 256;
     do {
      if ((HEAP32[i60 >> 2] & 1 | 0) == 0) {
       if (i73) {
        i77 = HEAP32[(HEAP32[i62 + 8 >> 2] | 0) + 36 >> 2] | 0;
        break;
       } else {
        i77 = HEAP32[i62 + 36 >> 2] | 0;
        break;
       }
      } else {
       if (i73) {
        i72 = HEAP32[i62 + 8 >> 2] | 0;
        if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i72 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
         i77 = HEAP32[i72 + 36 >> 2] | 0;
         break;
        } else {
         i77 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i72) | 0;
         break;
        }
       } else {
        if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i62 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
         i77 = HEAP32[i62 + 36 >> 2] | 0;
         break;
        } else {
         i77 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i62) | 0;
         break;
        }
       }
      }
     } while (0);
     do {
      if ((HEAP32[i60 >> 2] & 131072 | 0) == 0) {
       if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i58 >> 2] | 0) + 40 >> 2] & 31](i45) | 0) {
        i65 = 92;
        break;
       }
       i62 = HEAP32[i17 >> 2] | 0;
       if ((HEAP32[i62 + 20 >> 2] & 4096 | 0) == 0) {
        i78 = i62;
       } else {
        if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i62 >> 2] | 0) + 620 >> 2] & 31](i62) | 0)) {
         i79 = i76;
         i80 = i75;
         i81 = i75;
         break;
        }
        i78 = HEAP32[i17 >> 2] | 0;
       }
       i62 = i78;
       HEAP32[i20 >> 2] = i75;
       i73 = i78;
       i72 = HEAP32[i73 >> 2] | 0;
       if ((HEAP32[i60 >> 2] & 2048 | 0) == 0) {
        FUNCTION_TABLE_vii[HEAP32[i72 + 780 >> 2] & 7](i23, i62);
       } else {
        FUNCTION_TABLE_vii[HEAP32[i72 + 768 >> 2] & 7](i23, i62);
       }
       i72 = HEAP32[i73 >> 2] | 0;
       if ((HEAP32[i60 >> 2] & 2048 | 0) == 0) {
        FUNCTION_TABLE_vii[HEAP32[i72 + 776 >> 2] & 7](i24, i62);
       } else {
        FUNCTION_TABLE_vii[HEAP32[i72 + 772 >> 2] & 7](i24, i62);
       }
       i62 = HEAP32[i2 >> 2] | 0;
       i72 = i62 + i75 | 0;
       HEAP32[i19 >> 2] = i72;
       i79 = i62 + i76 + (HEAP32[i37 >> 2] | 0) | 0;
       i80 = i72;
       i81 = i75;
      } else {
       i65 = 92;
      }
     } while (0);
     if ((i65 | 0) == 92) {
      i65 = 0;
      i72 = __ZNK7WebCore11RenderStyle11fontMetricsEv(i77) | 0;
      i62 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i45 >> 2] | 0) + 80 >> 2] & 3](i45, i13) | 0;
      i73 = i72 + 4 | 0;
      i61 = _round(+(+HEAPF32[i73 >> 2])) | 0;
      if (i39) {
       i82 = i61;
      } else {
       i83 = i72 + 8 | 0;
       i72 = (_round(+(+HEAPF32[i83 >> 2])) | 0) + i61 | 0;
       i61 = _round(+(+HEAPF32[i73 >> 2])) | 0;
       i82 = i72 + (((_round(+(+HEAPF32[i83 >> 2])) | 0) + i61 | 0) / -2 & -1) | 0;
      }
      i61 = i62 - i82 + i75 | 0;
      HEAP32[i19 >> 2] = i61;
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i58 >> 2] | 0) + 40 >> 2] & 31](i45) | 0) {
       i62 = HEAP32[i17 >> 2] | 0;
       i83 = i62;
       i72 = (HEAP32[i77 + 44 >> 2] | 0) >>> 13 & 3;
       i73 = HEAP32[i62 >> 2] | 0;
       if ((i72 | 0) == 3 | (i72 | 0) == 0) {
        i72 = FUNCTION_TABLE_ii[HEAP32[i73 + 736 >> 2] & 31](i83) | 0;
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i62 >> 2] | 0) + 704 >> 2] & 7](i21, i83);
        i84 = (HEAP32[i41 >> 2] | 0) + i72 | 0;
       } else {
        i72 = FUNCTION_TABLE_ii[HEAP32[i73 + 748 >> 2] & 31](i83) | 0;
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i62 >> 2] | 0) + 716 >> 2] & 7](i22, i83);
        i84 = (HEAP32[i36 >> 2] | 0) + i72 | 0;
       }
       i72 = i61 - i84 | 0;
       HEAP32[i19 >> 2] = i72;
       i85 = i72;
      } else {
       i85 = i61;
      }
      HEAP32[i20 >> 2] = i85;
      i79 = i76;
      i80 = i85;
      i81 = i85;
     }
     d66 = +(i80 | 0);
     if ((HEAP32[i60 >> 2] & 2048 | 0) == 0) {
      HEAPF32[i64 >> 2] = d66;
     } else {
      HEAPF32[i74 >> 2] = d66;
     }
     if (i67) {
      i61 = HEAP32[i17 >> 2] | 0;
      do {
       if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i61 >> 2] | 0) + 168 >> 2] & 31](i61) | 0) {
        i72 = HEAP32[i17 >> 2] | 0;
        if ((HEAP32[i72 + 20 >> 2] & 768 | 0) == 256) {
         i86 = HEAP32[(HEAP32[i72 + 8 >> 2] | 0) + 36 >> 2] | 0;
        } else {
         i86 = HEAP32[i72 + 36 >> 2] | 0;
        }
        if ((((HEAP32[(HEAP32[(HEAP32[i43 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3) - 2 | 0) >>> 0 < 2 >>> 0 ^ (HEAP32[(HEAP32[i86 + 24 >> 2] | 0) + 92 >> 2] & 1048576 | 0) != 0) {
         HEAP8[i12] = 1;
        } else {
         HEAP8[i11] = 1;
        }
        i72 = __ZNK7WebCore13RenderRubyRun8rubyBaseEv(HEAP32[i17 >> 2] | 0) | 0;
        if ((i72 | 0) == 0) {
         i87 = i76;
         i88 = i80;
         break;
        }
        d66 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i45);
        i83 = (HEAP32[(HEAP32[i72 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
        if ((i83 | 0) == 3 | (i83 | 0) == 0) {
         i89 = i72 + 48 | 0;
        } else {
         i89 = i72 + 44 | 0;
        }
        if ((i83 | 0) == 3 | (i83 | 0) == 0) {
         i90 = i72 + 56 | 0;
        } else {
         i90 = i72 + 52 | 0;
        }
        if ((i83 | 0) == 3 | (i83 | 0) == 0) {
         i91 = i72 + 56 | 0;
        } else {
         i91 = i72 + 52 | 0;
        }
        i62 = HEAP32[i72 + 108 >> 2] | 0;
        if ((i62 | 0) == 0) {
         d92 = +0;
        } else {
         d92 = +(HEAP32[i62 + 76 >> 2] | 0);
        }
        d93 = d66 - +((HEAP32[i90 >> 2] | 0) + (HEAP32[i89 >> 2] | 0) | 0) + +(HEAP32[i91 >> 2] | 0) - d92;
        do {
         if (d93 < +2147483647) {
          if (d93 <= +-2147483648) {
           i94 = -2147483648;
           break;
          }
          i94 = ~~d93;
         } else {
          i94 = 2147483647;
         }
        } while (0);
        if ((i83 | 0) == 3 | (i83 | 0) == 0) {
         i95 = i72 + 48 | 0;
        } else {
         i95 = i72 + 44 | 0;
        }
        i62 = HEAP32[i72 + 104 >> 2] | 0;
        if ((i62 | 0) == 0) {
         i96 = 0;
        } else {
         i96 = HEAP32[i62 + 72 >> 2] | 0;
        }
        i62 = i96 + (HEAP32[i95 >> 2] | 0) | 0;
        i73 = ((((HEAP32[(HEAP32[(HEAP32[i43 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3) - 2 | 0) >>> 0 < 2 >>> 0 ? i94 : i62) + i80 | 0;
        HEAP32[i19 >> 2] = i73;
        i87 = i76 - i94 - i62 | 0;
        i88 = i73;
       } else {
        i87 = i76;
        i88 = i80;
       }
      } while (0);
      do {
       if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i58 >> 2] | 0) + 44 >> 2] & 31](i45) | 0) {
        if (!(__ZNK7WebCore13InlineTextBox23getEmphasisMarkPositionERKNS_11RenderStyleERNS_20TextEmphasisPositionE(i45, i77, i25) | 0)) {
         break;
        }
        if ((HEAP32[i25 >> 2] | 0) == 0 ^ (((HEAP32[i77 + 44 >> 2] | 0) >>> 13 & 3) - 2 | 0) >>> 0 < 2 >>> 0) {
         HEAP8[i11] = 1;
         break;
        } else {
         HEAP8[i12] = 1;
         break;
        }
       }
      } while (0);
      if ((HEAP8[i8] & 1) == 0) {
       HEAP8[i8] = 1;
       HEAP32[i38 >> 2] = i88;
       i97 = (i81 | 0) < (i88 | 0) ? i40 : i6;
      } else {
       i58 = HEAP32[((i88 | 0) < (HEAP32[i38 >> 2] | 0) ? i52 : i6) >> 2] | 0;
       HEAP32[i38 >> 2] = i58;
       i61 = (i81 | 0) < (HEAP32[i47 >> 2] | 0) ? i40 : i9;
       i97 = (HEAP32[i61 >> 2] | 0) < (i58 | 0) ? i61 : i6;
      }
      HEAP32[i47 >> 2] = HEAP32[i97 >> 2];
      i61 = i88 + i87 | 0;
      HEAP32[i26 >> 2] = i61;
      i58 = HEAP32[((HEAP32[i48 >> 2] | 0) < (i61 | 0) ? i49 : i7) >> 2] | 0;
      HEAP32[i48 >> 2] = i58;
      i61 = i81 + i79 | 0;
      HEAP32[i27 >> 2] = i61;
      i74 = (HEAP32[i50 >> 2] | 0) < (i61 | 0) ? i51 : i10;
      HEAP32[i50 >> 2] = HEAP32[((i58 | 0) < (HEAP32[i74 >> 2] | 0) ? i74 : i7) >> 2];
     }
     if ((i59 | 0) == 0) {
      break;
     }
     HEAP32[i53 >> 2] = i69;
     HEAP32[i3 >> 2] = HEAP32[i54 >> 2];
     __ZN7WebCore13InlineFlowBox26placeBoxesInBlockDirectionENS_10LayoutUnitES1_ibRS1_S2_RbS2_S2_S3_S3_NS_12FontBaselineE(i59, i28, i29, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13);
    }
   } while (0);
   i45 = HEAP32[i45 + 4 >> 2] | 0;
   if ((i45 | 0) == 0) {
    break;
   }
  }
 }
 if (!i35) {
  STACKTOP = i14;
  return;
 }
 if (i5) {
  i65 = 157;
 } else {
  i5 = HEAP32[i42 >> 2] | 0;
  if ((i5 & 4 | 0) != 0 | (i5 & 24 | 0) == 24) {
   i65 = 157;
  }
 }
 if ((i65 | 0) == 157) {
  if ((HEAP8[i8] & 1) == 0) {
   HEAP8[i8] = 1;
   i8 = ~~+HEAPF32[((HEAP32[i1 + 32 >> 2] & 2048 | 0) == 0 ? i1 + 20 | 0 : i1 + 24 | 0) >> 2];
   HEAP32[i6 >> 2] = i8;
   HEAP32[i9 >> 2] = i8;
  } else {
   i8 = ~~+HEAPF32[((HEAP32[i1 + 32 >> 2] & 2048 | 0) == 0 ? i1 + 20 | 0 : i1 + 24 | 0) >> 2];
   HEAP32[i30 >> 2] = i8;
   i65 = i6 | 0;
   i5 = HEAP32[((i8 | 0) < (HEAP32[i65 >> 2] | 0) ? i30 : i6) >> 2] | 0;
   HEAP32[i65 >> 2] = i5;
   i65 = i9 | 0;
   HEAP32[i65 >> 2] = HEAP32[((HEAP32[i65 >> 2] | 0) < (i5 | 0) ? i9 : i6) >> 2];
  }
  d92 = +HEAPF32[((HEAP32[i1 + 32 >> 2] & 2048 | 0) == 0 ? i1 + 20 | 0 : i1 + 24 | 0) >> 2];
  i6 = ~~+Math_ceil(d92 + +__ZNK7WebCore9InlineBox13logicalHeightEv(i34));
  HEAP32[i31 >> 2] = i6;
  i34 = i7 | 0;
  i5 = HEAP32[((HEAP32[i34 >> 2] | 0) < (i6 | 0) ? i31 : i7) >> 2] | 0;
  HEAP32[i34 >> 2] = i5;
  i34 = i10 | 0;
  HEAP32[i34 >> 2] = HEAP32[((i5 | 0) < (HEAP32[i34 >> 2] | 0) ? i10 : i7) >> 2];
 }
 if ((((HEAP32[(HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3) - 2 | 0) >>> 0 >= 2 >>> 0) {
  STACKTOP = i14;
  return;
 }
 HEAP32[i32 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i33 >> 2] = HEAP32[i10 >> 2];
 __ZN7WebCore13InlineFlowBox25flipLinesInBlockDirectionENS_10LayoutUnitES1_(i1, i32, i33);
 STACKTOP = i14;
 return;
}
function __ZN7WebCore13InlineFlowBox9addToLineEPNS_9InlineBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, d30 = +0, d31 = +0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, d40 = +0, d41 = +0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 HEAP32[i2 + 12 >> 2] = i1;
 i8 = i1 + 40 | 0;
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  HEAP32[i8 >> 2] = i2;
  HEAP32[i1 + 44 >> 2] = i2;
 } else {
  i8 = i1 + 44 | 0;
  HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] = i2;
  HEAP32[i2 + 8 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i8 >> 2] = i2;
 }
 i8 = i1 | 0;
 i9 = i1 + 32 | 0;
 i10 = i2 + 32 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = i11 & -2 | HEAP32[i9 >> 2] & 1;
 HEAP32[i10 >> 2] = i12;
 HEAP32[i10 >> 2] = i12 & -2049 | HEAP32[i9 >> 2] & 2048;
 L5 : do {
  if ((i11 & 131072 | 0) == 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 40 >> 2] & 31](i2) | 0)) {
    break;
   }
   if ((HEAP32[i2 + 56 >> 2] & 8 | 0) == 0 | (i1 | 0) == 0) {
    break;
   } else {
    i13 = i1;
   }
   while (1) {
    i12 = i13 + 56 | 0;
    i14 = HEAP32[i12 >> 2] | 0;
    if ((i14 & 8 | 0) != 0) {
     break L5;
    }
    HEAP32[i12 >> 2] = i14 | 8;
    i13 = HEAP32[i13 + 12 >> 2] | 0;
    if ((i13 | 0) == 0) {
     break;
    }
   }
  } else {
   if ((HEAP32[(HEAP32[i2 + 16 >> 2] | 0) + 8 >> 2] | 0) == (HEAP32[i1 + 16 >> 2] | 0)) {
    i14 = i1 + 56 | 0;
    HEAP32[i14 >> 2] = HEAP32[i14 >> 2] | 4;
   }
   if ((i1 | 0) == 0) {
    break;
   } else {
    i15 = i1;
   }
   while (1) {
    i14 = i15 + 56 | 0;
    i12 = HEAP32[i14 >> 2] | 0;
    if ((i12 & 8 | 0) != 0) {
     break L5;
    }
    HEAP32[i14 >> 2] = i12 | 8;
    i15 = HEAP32[i15 + 12 >> 2] | 0;
    if ((i15 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 i15 = i1 + 56 | 0;
 i13 = i2 + 16 | 0;
 L19 : do {
  if ((HEAP32[i15 >> 2] & 16 | 0) != 0) {
   i11 = HEAP32[i13 >> 2] | 0;
   i12 = HEAP32[i11 + 20 >> 2] | 0;
   if ((i12 & 25165824 | 0) == 16777216) {
    break;
   }
   i14 = i1 + 16 | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   i17 = i16;
   do {
    if ((HEAP32[i9 >> 2] & 1 | 0) == 0) {
     i18 = HEAP32[i16 + 36 >> 2] | 0;
     i19 = i11;
     i20 = i12;
    } else {
     if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i16 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
      i18 = HEAP32[i16 + 36 >> 2] | 0;
      i19 = i11;
      i20 = i12;
      break;
     } else {
      i21 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i17) | 0;
      i22 = HEAP32[i13 >> 2] | 0;
      i18 = i21;
      i19 = i22;
      i20 = HEAP32[i22 + 20 >> 2] | 0;
      break;
     }
    }
   } while (0);
   i17 = (i20 & 768 | 0) == 256;
   do {
    if ((HEAP32[i10 >> 2] & 1 | 0) == 0) {
     if (i17) {
      i23 = HEAP32[(HEAP32[i19 + 8 >> 2] | 0) + 36 >> 2] | 0;
      break;
     } else {
      i23 = HEAP32[i19 + 36 >> 2] | 0;
      break;
     }
    } else {
     if (i17) {
      i12 = HEAP32[i19 + 8 >> 2] | 0;
      if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i12 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
       i23 = HEAP32[i12 + 36 >> 2] | 0;
       break;
      } else {
       i23 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i12) | 0;
       break;
      }
     } else {
      if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i19 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
       i23 = HEAP32[i19 + 36 >> 2] | 0;
       break;
      } else {
       i23 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i19) | 0;
       break;
      }
     }
    }
   } while (0);
   i17 = HEAP32[i13 >> 2] | 0;
   i12 = HEAP32[i17 + 20 >> 2] | 0;
   do {
    if ((i12 & 2048 | 0) == 0) {
     i11 = (i12 & 4096 | 0) != 0;
     if ((HEAP32[i10 >> 2] & 131072 | 0) != 0) {
      if (i11) {
       i24 = 36;
      } else {
       if ((HEAP32[i17 + 8 >> 2] | 0) == (HEAP32[i14 >> 2] | 0)) {
        i25 = 0;
       } else {
        i24 = 36;
       }
      }
      do {
       if ((i24 | 0) == 36) {
        i16 = __ZNK7WebCore11RenderStyle4fontEv(i18) | 0;
        i22 = HEAP32[i16 + 24 >> 2] | 0;
        i21 = i22 + 44 | 0;
        i26 = HEAP32[i21 >> 2] | 0;
        if ((i26 | 0) == 0) {
         i27 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i22, i16 | 0, 0) | 0;
         i16 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i27 >> 2] | 0) + 8 >> 2] & 3](i27, 32) | 0;
         HEAP32[i21 >> 2] = i16;
         i28 = i16;
        } else {
         i28 = i26;
        }
        i26 = __ZNK7WebCore11RenderStyle4fontEv(i23) | 0;
        i16 = HEAP32[i26 + 24 >> 2] | 0;
        i21 = i16 + 44 | 0;
        i27 = HEAP32[i21 >> 2] | 0;
        if ((i27 | 0) == 0) {
         i22 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i16, i26 | 0, 0) | 0;
         i26 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i22 >> 2] | 0) + 8 >> 2] & 3](i22, 32) | 0;
         HEAP32[i21 >> 2] = i26;
         i29 = i26;
        } else {
         i29 = i27;
        }
        i27 = _round(+(+HEAPF32[i28 + 16 >> 2])) | 0;
        if ((i27 | 0) != (_round(+(+HEAPF32[i29 + 16 >> 2])) | 0)) {
         i25 = 1;
         break;
        }
        i27 = _round(+(+HEAPF32[i28 + 20 >> 2])) | 0;
        if ((i27 | 0) != (_round(+(+HEAPF32[i29 + 20 >> 2])) | 0)) {
         i25 = 1;
         break;
        }
        i27 = _round(+(+HEAPF32[i28 + 24 >> 2])) | 0;
        if ((i27 | 0) != (_round(+(+HEAPF32[i29 + 24 >> 2])) | 0)) {
         i25 = 1;
         break;
        }
        __ZNK7WebCore11RenderStyle10lineHeightEv(i4, i18);
        __ZNK7WebCore11RenderStyle10lineHeightEv(i5, i23);
        i27 = i4 + 5 | 0;
        i26 = HEAP8[i27] | 0;
        i21 = i5 + 5 | 0;
        i22 = HEAP8[i21] | 0;
        if (i26 << 24 >> 24 == i22 << 24 >> 24) {
         L64 : do {
          if (((HEAP8[i5 + 4 | 0] ^ HEAP8[i4 + 4 | 0]) & 1) == 0) {
           do {
            if (i26 << 24 >> 24 != 15) {
             if ((HEAP8[i4 + 6 | 0] & 1) == 0) {
              d30 = +(HEAP32[i4 >> 2] | 0);
             } else {
              d30 = +HEAPF32[i4 >> 2];
             }
             if ((HEAP8[i5 + 6 | 0] & 1) == 0) {
              d31 = +(HEAP32[i5 >> 2] | 0);
             } else {
              d31 = +HEAPF32[i5 >> 2];
             }
             if (d30 == d31) {
              break;
             }
             if (!(__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i4, i5) | 0)) {
              i32 = 1;
              break L64;
             }
            }
           } while (0);
           if ((HEAP32[i18 + 48 >> 2] & 983040 | 0) != 0) {
            if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 48 >> 2] & 31](i8) | 0)) {
             i32 = 1;
             break;
            }
           }
           i32 = (HEAP32[i23 + 48 >> 2] & 983040 | 0) != 0;
          } else {
           i32 = 1;
          }
         } while (0);
         i33 = i32;
         i34 = HEAP8[i21] | 0;
        } else {
         i33 = 1;
         i34 = i22;
        }
        if (i34 << 24 >> 24 == 10) {
         __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
        }
        if ((HEAP8[i27] | 0) != 10) {
         i25 = i33;
         break;
        }
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i4);
        i25 = i33;
       }
      } while (0);
      if ((HEAP32[(HEAP32[i23 + 20 >> 2] | 0) + 296 >> 2] & 128 | 0) != 0) {
       break;
      }
      if ((__ZNK7WebCore11RenderStyle16textEmphasisMarkEv(i23) | 0) != 0 | i25) {
       break;
      } else {
       break L19;
      }
     }
     if (i11) {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 620 >> 2] & 31](i17) | 0) {
       break L19;
      } else {
       break;
      }
     }
     if ((HEAP32[i2 + 56 >> 2] & 16 | 0) == 0) {
      break;
     }
     i26 = __ZNK7WebCore11RenderStyle4fontEv(i18) | 0;
     i16 = HEAP32[i26 + 24 >> 2] | 0;
     i35 = i16 + 44 | 0;
     i36 = HEAP32[i35 >> 2] | 0;
     if ((i36 | 0) == 0) {
      i37 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i16, i26 | 0, 0) | 0;
      i26 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i37 >> 2] | 0) + 8 >> 2] & 3](i37, 32) | 0;
      HEAP32[i35 >> 2] = i26;
      i38 = i26;
     } else {
      i38 = i36;
     }
     i36 = __ZNK7WebCore11RenderStyle4fontEv(i23) | 0;
     i26 = HEAP32[i36 + 24 >> 2] | 0;
     i35 = i26 + 44 | 0;
     i37 = HEAP32[i35 >> 2] | 0;
     if ((i37 | 0) == 0) {
      i16 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i26, i36 | 0, 0) | 0;
      i36 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] & 3](i16, 32) | 0;
      HEAP32[i35 >> 2] = i36;
      i39 = i36;
     } else {
      i39 = i37;
     }
     i37 = _round(+(+HEAPF32[i38 + 16 >> 2])) | 0;
     if ((i37 | 0) != (_round(+(+HEAPF32[i39 + 16 >> 2])) | 0)) {
      break;
     }
     i37 = _round(+(+HEAPF32[i38 + 20 >> 2])) | 0;
     if ((i37 | 0) != (_round(+(+HEAPF32[i39 + 20 >> 2])) | 0)) {
      break;
     }
     i37 = _round(+(+HEAPF32[i38 + 24 >> 2])) | 0;
     if ((i37 | 0) != (_round(+(+HEAPF32[i39 + 24 >> 2])) | 0)) {
      break;
     }
     __ZNK7WebCore11RenderStyle10lineHeightEv(i6, i18);
     __ZNK7WebCore11RenderStyle10lineHeightEv(i7, i23);
     i37 = i6 + 5 | 0;
     i36 = HEAP8[i37] | 0;
     i35 = i7 + 5 | 0;
     i16 = HEAP8[i35] | 0;
     if (i36 << 24 >> 24 == i16 << 24 >> 24) {
      L105 : do {
       if (((HEAP8[i7 + 4 | 0] ^ HEAP8[i6 + 4 | 0]) & 1) == 0) {
        do {
         if (i36 << 24 >> 24 != 15) {
          if ((HEAP8[i6 + 6 | 0] & 1) == 0) {
           d40 = +(HEAP32[i6 >> 2] | 0);
          } else {
           d40 = +HEAPF32[i6 >> 2];
          }
          if ((HEAP8[i7 + 6 | 0] & 1) == 0) {
           d41 = +(HEAP32[i7 >> 2] | 0);
          } else {
           d41 = +HEAPF32[i7 >> 2];
          }
          if (d40 == d41) {
           break;
          }
          if (!(__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i6, i7) | 0)) {
           i42 = 1;
           break L105;
          }
         }
        } while (0);
        if ((HEAP32[i18 + 48 >> 2] & 983040 | 0) != 0) {
         if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 48 >> 2] & 31](i8) | 0)) {
          i42 = 1;
          break;
         }
        }
        if ((HEAP32[i23 + 48 >> 2] & 983040 | 0) != 0) {
         i42 = 1;
         break;
        }
        i27 = HEAP32[i23 + 16 >> 2] | 0;
        i22 = (HEAP32[(HEAP32[i27 + 132 >> 2] | 0) + 8 >> 2] | 0) != 0;
        i21 = HEAP32[i27 + 104 >> 2] | 0;
        i26 = (i21 & 134217726 | 0) == 0;
        if (i26 | i22) {
         if (!i26) {
          i42 = 1;
          break;
         }
        } else {
         if ((i21 & 2013265920 | 0) != 0) {
          i42 = 1;
          break;
         }
        }
        i21 = HEAP32[i27 + 112 >> 2] | 0;
        i26 = (i21 & 134217726 | 0) == 0;
        if (i26 | i22) {
         if (!i26) {
          i42 = 1;
          break;
         }
        } else {
         if ((i21 & 2013265920 | 0) != 0) {
          i42 = 1;
          break;
         }
        }
        i21 = HEAP32[i27 + 120 >> 2] | 0;
        i26 = (i21 & 134217726 | 0) == 0;
        if (i26 | i22) {
         if (!i26) {
          i42 = 1;
          break;
         }
        } else {
         if ((i21 & 2013265920 | 0) != 0) {
          i42 = 1;
          break;
         }
        }
        i21 = HEAP32[i27 + 128 >> 2] | 0;
        i26 = (i21 & 134217726 | 0) == 0;
        if (i26 | i22) {
         if (!i26) {
          i42 = 1;
          break;
         }
        } else {
         if ((i21 & 2013265920 | 0) != 0) {
          i42 = 1;
          break;
         }
        }
        i21 = i27 + 68 | 0;
        if ((HEAP8[i27 + 73 | 0] | 0) == 10) {
         i42 = 1;
         break;
        }
        if ((HEAP8[i27 + 74 | 0] & 1) == 0) {
         if ((HEAP32[i21 >> 2] | 0) != 0) {
          i42 = 1;
          break;
         }
        } else {
         if (+HEAPF32[i21 >> 2] != +0) {
          i42 = 1;
          break;
         }
        }
        i21 = i27 + 76 | 0;
        if ((HEAP8[i27 + 81 | 0] | 0) == 10) {
         i42 = 1;
         break;
        }
        if ((HEAP8[i27 + 82 | 0] & 1) == 0) {
         if ((HEAP32[i21 >> 2] | 0) != 0) {
          i42 = 1;
          break;
         }
        } else {
         if (+HEAPF32[i21 >> 2] != +0) {
          i42 = 1;
          break;
         }
        }
        i21 = i27 + 84 | 0;
        if ((HEAP8[i27 + 89 | 0] | 0) == 10) {
         i42 = 1;
         break;
        }
        if ((HEAP8[i27 + 90 | 0] & 1) == 0) {
         if ((HEAP32[i21 >> 2] | 0) != 0) {
          i42 = 1;
          break;
         }
        } else {
         if (+HEAPF32[i21 >> 2] != +0) {
          i42 = 1;
          break;
         }
        }
        i21 = i27 + 92 | 0;
        if ((HEAP8[i27 + 97 | 0] | 0) == 10) {
         i42 = 1;
         break;
        }
        if ((HEAP8[i27 + 98 | 0] & 1) == 0) {
         if ((HEAP32[i21 >> 2] | 0) != 0) {
          i42 = 1;
          break;
         }
        } else {
         if (+HEAPF32[i21 >> 2] != +0) {
          i42 = 1;
          break;
         }
        }
        i42 = (HEAP32[(HEAP32[i23 + 20 >> 2] | 0) + 296 >> 2] & 128 | 0) != 0;
       } else {
        i42 = 1;
       }
      } while (0);
      i43 = i42;
      i44 = HEAP8[i35] | 0;
     } else {
      i43 = 1;
      i44 = i16;
     }
     if (i44 << 24 >> 24 == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
     }
     if ((HEAP8[i37] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i6);
     }
     if (!i43) {
      break L19;
     }
    }
   } while (0);
   i17 = i1;
   i14 = HEAP32[i15 >> 2] | 0;
   while (1) {
    HEAP32[i17 + 56 >> 2] = i14 & -17;
    i17 = HEAP32[i17 + 12 >> 2] | 0;
    if ((i17 | 0) == 0) {
     break L19;
    }
    i14 = HEAP32[i17 + 56 >> 2] | 0;
    if ((i14 & 16 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 i15 = HEAP32[i13 >> 2] | 0;
 i1 = HEAP32[i15 + 20 >> 2] | 0;
 if ((i1 & 25165824 | 0) == 16777216) {
  STACKTOP = i3;
  return;
 }
 i43 = (i1 & 768 | 0) == 256;
 do {
  if ((HEAP32[i10 >> 2] & 1 | 0) == 0) {
   if (i43) {
    i45 = HEAP32[(HEAP32[i15 + 8 >> 2] | 0) + 36 >> 2] | 0;
    break;
   } else {
    i45 = HEAP32[i15 + 36 >> 2] | 0;
    break;
   }
  } else {
   if (i43) {
    i1 = HEAP32[i15 + 8 >> 2] | 0;
    if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
     i45 = HEAP32[i1 + 36 >> 2] | 0;
     break;
    } else {
     i45 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i1) | 0;
     break;
    }
   } else {
    if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i15 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
     i45 = HEAP32[i15 + 36 >> 2] | 0;
     break;
    } else {
     i45 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i15) | 0;
     break;
    }
   }
  }
 } while (0);
 i15 = HEAP32[i10 >> 2] | 0;
 L191 : do {
  if ((i15 & 131072 | 0) == 0) {
   i43 = HEAP32[i13 >> 2] | 0;
   i1 = HEAP32[i43 + 20 >> 2] | 0;
   if ((i1 & 2048 | 0) != 0) {
    if ((HEAP32[i43 + 88 >> 2] | 0) == 0) {
     if (!(__ZNK7WebCore22RenderLayerModelObject20hasSelfPaintingLayerEv(i43) | 0)) {
      break;
     }
    }
    __ZN7WebCore9InlineBox26clearKnownToHaveNoOverflowEv(i2);
    break;
   }
   if ((i1 & 4096 | 0) != 0) {
    break;
   }
   do {
    if ((HEAP32[(HEAP32[i45 + 20 >> 2] | 0) + 100 >> 2] | 0) == 0) {
     if ((i1 & 768 | 0) == 256) {
      i46 = 0;
     } else {
      i46 = i43;
     }
     if (__ZNK7WebCore22RenderLayerModelObject20hasSelfPaintingLayerEv(i46 | 0) | 0) {
      break;
     }
     i6 = HEAP32[i13 >> 2] | 0;
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 108 >> 2] & 31](i6) | 0) {
      if (!(__ZNK7WebCore16RenderListMarker8isInsideEv(HEAP32[i13 >> 2] | 0) | 0)) {
       break;
      }
     }
     if (!(__ZNK7WebCore11RenderStyle21hasBorderImageOutsetsEv(i45) | 0)) {
      break L191;
     }
    }
   } while (0);
   __ZN7WebCore9InlineBox26clearKnownToHaveNoOverflowEv(i2);
  } else {
   i43 = HEAP32[i13 >> 2] | 0;
   i1 = (HEAP32[i43 + 20 >> 2] & 768 | 0) == 256;
   do {
    if ((i15 & 1 | 0) == 0) {
     if (i1) {
      i47 = HEAP32[(HEAP32[i43 + 8 >> 2] | 0) + 36 >> 2] | 0;
      break;
     } else {
      i47 = HEAP32[i43 + 36 >> 2] | 0;
      break;
     }
    } else {
     if (i1) {
      i6 = HEAP32[i43 + 8 >> 2] | 0;
      if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i6 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
       i47 = HEAP32[i6 + 36 >> 2] | 0;
       break;
      } else {
       i47 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i6) | 0;
       break;
      }
     } else {
      if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i43 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
       i47 = HEAP32[i43 + 36 >> 2] | 0;
       break;
      } else {
       i47 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i43) | 0;
       break;
      }
     }
    }
   } while (0);
   do {
    if (+__ZNK7WebCore11RenderStyle13letterSpacingEv(i47) >= +0) {
     i43 = i47 + 24 | 0;
     if ((HEAP32[(HEAP32[i43 >> 2] | 0) + 60 >> 2] | 0) != 0) {
      break;
     }
     if ((__ZNK7WebCore11RenderStyle16textEmphasisMarkEv(i47) | 0) != 0) {
      break;
     }
     if (+HEAPF32[(HEAP32[i43 >> 2] | 0) + 16 >> 2] == +0) {
      break L191;
     }
    }
   } while (0);
   __ZN7WebCore9InlineBox26clearKnownToHaveNoOverflowEv(i2);
  }
 } while (0);
 if ((HEAP32[i9 >> 2] & 16384 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 40 >> 2] & 31](i2) | 0)) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i10 >> 2] & 16384 | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore9InlineBox26clearKnownToHaveNoOverflowEv(i8);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13InlineFlowBox11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_10LayoutUnitESC_(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, d29 = +0, d30 = +0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, d50 = +0, i51 = 0, i52 = 0, d53 = +0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
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
 i10 = i8 + 16 | 0;
 i11 = i8 + 32 | 0;
 i12 = i8 + 40 | 0;
 i13 = i8 + 48 | 0;
 i14 = i8 + 56 | 0;
 i15 = i8 + 72 | 0;
 i16 = i15 | 0;
 i17 = i15;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i19 = i18 | 0;
 i20 = i18;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i23 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i25 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i26 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i27 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i28 = HEAP32[i6 >> 2] | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 i7 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i7 | 0) == 0) {
  if ((HEAP32[i1 + 32 >> 2] & 2048 | 0) == 0) {
   d29 = +HEAPF32[i1 + 24 >> 2];
   d30 = +HEAPF32[i1 + 28 >> 2];
   HEAPF32[i9 >> 2] = +(i28 | 0);
   HEAPF32[i9 + 4 >> 2] = d29;
   HEAPF32[i9 + 8 >> 2] = +(i6 - i28 | 0);
   HEAPF32[i9 + 12 >> 2] = d30;
  } else {
   d30 = +HEAPF32[i1 + 28 >> 2];
   HEAPF32[i9 >> 2] = +HEAPF32[i1 + 20 >> 2];
   HEAPF32[i9 + 4 >> 2] = +(i28 | 0);
   HEAPF32[i9 + 8 >> 2] = d30;
   HEAPF32[i9 + 12 >> 2] = +(i6 - i28 | 0);
  }
  __ZN7WebCore19enclosingLayoutRectERKNS_9FloatRectE(i10, i9);
 } else {
  i9 = i10;
  i31 = i7 + 20 | 0;
  HEAP32[i9 >> 2] = HEAP32[i31 >> 2];
  HEAP32[i9 + 4 >> 2] = HEAP32[i31 + 4 >> 2];
  HEAP32[i9 + 8 >> 2] = HEAP32[i31 + 8 >> 2];
  HEAP32[i9 + 12 >> 2] = HEAP32[i31 + 12 >> 2];
 }
 i31 = i1 | 0;
 __ZN7WebCore9InlineBox18flipForWritingModeERNS_10LayoutRectE(i31, i10);
 i9 = i5 | 0;
 i7 = i5 + 4 | 0;
 i32 = HEAP32[i7 >> 2] | 0;
 i33 = i10 | 0;
 HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + (HEAP32[i9 >> 2] | 0);
 i33 = i10 + 4 | 0;
 HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + i32;
 if (!(__ZNK7WebCore15HitTestLocation10intersectsERKNS_10LayoutRectE(i4, i10) | 0)) {
  i34 = 0;
  STACKTOP = i8;
  return i34 | 0;
 }
 i10 = HEAP32[i1 + 44 >> 2] | 0;
 L12 : do {
  if ((i10 | 0) == 0) {
   i35 = 11;
  } else {
   i32 = i4 + 68 | 0;
   i33 = i11 | 0;
   i36 = i12 | 0;
   i37 = i1 + 16 | 0;
   i38 = 0;
   i39 = i10;
   L14 : while (1) {
    i40 = i39 + 16 | 0;
    i41 = HEAP32[i40 >> 2] | 0;
    if ((HEAP32[i41 + 20 >> 2] & 768 | 0) == 256) {
     i35 = 15;
    } else {
     if (__ZNK7WebCore22RenderLayerModelObject20hasSelfPaintingLayerEv(i41) | 0) {
      i42 = i38;
     } else {
      i35 = 15;
     }
    }
    if ((i35 | 0) == 15) {
     i35 = 0;
     if ((HEAP8[i32] & 1) == 0) {
      i43 = 0;
     } else {
      i41 = HEAP32[(HEAP32[i40 >> 2] | 0) + 8 >> 2] | 0;
      i43 = (i41 | 0) == (HEAP32[i37 >> 2] | 0) ? 0 : i41;
     }
     L23 : do {
      if ((i43 | 0) == (i38 | 0)) {
       i44 = i38;
      } else {
       if ((i43 | 0) == 0) {
        i45 = i38;
        i35 = 20;
       } else {
        if ((i38 | 0) != 0 & ((__ZNK7WebCore12RenderObject14isDescendantOfEPKS0_(i43 | 0, i38 | 0) | 0) ^ 1)) {
         i46 = i38;
        } else {
         i44 = i43;
         break;
        }
       }
       while (1) {
        if ((i35 | 0) == 20) {
         i35 = 0;
         if ((i45 | 0) == 0) {
          i44 = i43;
          break;
         } else {
          i46 = i45;
         }
        }
        if ((i46 | 0) == (HEAP32[i37 >> 2] | 0) | (i46 | 0) == (i43 | 0)) {
         i44 = i43;
         break L23;
        }
        if ((HEAP32[i46 + 24 >> 2] & 4 | 0) != 0) {
         if (__ZN7WebCore12RenderInline19hitTestCulledInlineERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointE(i46, i2, i3, i4, i5) | 0) {
          i34 = 1;
          i35 = 76;
          break L14;
         }
        }
        i45 = HEAP32[i46 + 8 >> 2] | 0;
        i35 = 20;
       }
      }
     } while (0);
     i41 = HEAP32[(HEAP32[i39 >> 2] | 0) + 32 >> 2] | 0;
     HEAP32[i33 >> 2] = i28;
     HEAP32[i36 >> 2] = i6;
     if (FUNCTION_TABLE_iiiiiiii[i41 & 3](i39, i2, i3, i4, i5, i11, i12) | 0) {
      i35 = 26;
      break;
     } else {
      i42 = i44;
     }
    }
    i41 = HEAP32[i39 + 8 >> 2] | 0;
    if ((i41 | 0) == 0) {
     i35 = 10;
     break;
    } else {
     i38 = i42;
     i39 = i41;
    }
   }
   if ((i35 | 0) == 26) {
    i39 = HEAP32[i37 >> 2] | 0;
    i38 = HEAP32[(HEAP32[i39 >> 2] | 0) + 456 >> 2] | 0;
    i36 = (HEAP32[i4 + 4 >> 2] | 0) - (HEAP32[i7 >> 2] | 0) | 0;
    HEAP32[i13 >> 2] = (HEAP32[i4 >> 2] | 0) - (HEAP32[i9 >> 2] | 0);
    HEAP32[i13 + 4 >> 2] = i36;
    FUNCTION_TABLE_viii[i38 & 1](i39, i3, i13);
    i34 = 1;
    STACKTOP = i8;
    return i34 | 0;
   } else if ((i35 | 0) == 10) {
    if ((i42 | 0) == 0) {
     i35 = 11;
     break;
    }
    i39 = i1 + 16 | 0;
    i38 = i42;
    while (1) {
     if ((i38 | 0) == (HEAP32[i39 >> 2] | 0)) {
      i47 = i39;
      break L12;
     }
     if ((HEAP32[i38 + 24 >> 2] & 4 | 0) != 0) {
      if (__ZN7WebCore12RenderInline19hitTestCulledInlineERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointE(i38, i2, i3, i4, i5) | 0) {
       i34 = 1;
       break;
      }
     }
     i36 = HEAP32[i38 + 8 >> 2] | 0;
     if ((i36 | 0) == 0) {
      i47 = i39;
      break L12;
     } else {
      i38 = i36;
     }
    }
    STACKTOP = i8;
    return i34 | 0;
   } else if ((i35 | 0) == 76) {
    STACKTOP = i8;
    return i34 | 0;
   }
  }
 } while (0);
 if ((i35 | 0) == 11) {
  i47 = i1 + 16 | 0;
 }
 i35 = HEAP32[i47 >> 2] | 0;
 i5 = (HEAP32[i35 + 20 >> 2] & 768 | 0) == 256;
 if (i5) {
  i48 = HEAP32[(HEAP32[i35 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i48 = HEAP32[i35 + 36 >> 2] | 0;
 }
 if ((HEAP32[i48 + 40 >> 2] & 6144 | 0) != 0) {
  i34 = 0;
  STACKTOP = i8;
  return i34 | 0;
 }
 if (i5) {
  i49 = HEAP32[(HEAP32[i35 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i49 = HEAP32[i35 + 36 >> 2] | 0;
 }
 if ((HEAP32[i49 + 44 >> 2] & 1920 | 0) == 0) {
  i34 = 0;
  STACKTOP = i8;
  return i34 | 0;
 }
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 48 >> 2] & 31](i31) | 0) {
   i49 = i1 + 32 | 0;
   if ((HEAP32[i49 >> 2] & 32768 | 0) == 0) {
    break;
   }
   i35 = __ZNK7WebCore13RootInlineBox11ellipsisBoxEv(__ZN7WebCore9InlineBox4rootEv(i31) | 0) | 0;
   __ZNK7WebCore13InlineFlowBox16roundedFrameRectEv(i17, i1);
   i5 = HEAP32[i16 + 4 >> 2] | 0;
   i48 = i14 | 0;
   HEAP32[i48 >> 2] = HEAP32[i16 >> 2];
   i42 = i14 + 4 | 0;
   HEAP32[i42 >> 2] = i5;
   i5 = i15 + 8 | 0;
   i13 = HEAP32[i5 + 4 >> 2] | 0;
   i44 = i14 + 8 | 0;
   HEAP32[i44 >> 2] = HEAP32[i5 >> 2];
   i5 = i14 + 12 | 0;
   HEAP32[i5 >> 2] = i13;
   do {
    if ((HEAP32[i49 >> 2] & 2048 | 0) == 0) {
     d30 = +HEAPF32[i35 + 20 >> 2];
     if ((HEAP32[i35 + 32 >> 2] & 2048 | 0) == 0) {
      d50 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i35 | 0);
     } else {
      d50 = +HEAPF32[i35 + 28 >> 2];
     }
     d29 = d30 + d50;
     do {
      if (d29 < +2147483647) {
       if (d29 <= +-2147483648) {
        i51 = -2147483648;
        break;
       }
       i51 = ~~d29;
      } else {
       i51 = 2147483647;
      }
     } while (0);
     i13 = HEAP32[i42 >> 2] | 0;
     HEAP32[i42 >> 2] = i51;
     i12 = (HEAP32[i5 >> 2] | 0) + (i13 - i51) | 0;
     HEAP32[i5 >> 2] = (i12 | 0) > 0 ? i12 : 0;
    } else {
     i12 = i35 | 0;
     d29 = +HEAPF32[i35 + 20 >> 2];
     if ((HEAP32[(HEAP32[(HEAP32[i47 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) == 0) {
      d30 = d29 - +HEAPF32[i1 + 20 >> 2];
      do {
       if (d30 < +2147483647) {
        if (d30 <= +-2147483648) {
         i52 = -2147483648;
         break;
        }
        i52 = ~~d30;
       } else {
        i52 = 2147483647;
       }
      } while (0);
      HEAP32[i44 >> 2] = i52;
      break;
     }
     if ((HEAP32[i35 + 32 >> 2] & 2048 | 0) == 0) {
      d53 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i12);
     } else {
      d53 = +HEAPF32[i35 + 28 >> 2];
     }
     d30 = d29 + d53;
     do {
      if (d30 < +2147483647) {
       if (d30 <= +-2147483648) {
        i54 = -2147483648;
        break;
       }
       i54 = ~~d30;
      } else {
       i54 = 2147483647;
      }
     } while (0);
     i12 = HEAP32[i48 >> 2] | 0;
     HEAP32[i48 >> 2] = i54;
     i13 = (HEAP32[i44 >> 2] | 0) + (i12 - i54) | 0;
     HEAP32[i44 >> 2] = (i13 | 0) > 0 ? i13 : 0;
    }
   } while (0);
   __ZN7WebCore9InlineBox18flipForWritingModeERNS_10LayoutRectE(i31, i14);
   i44 = HEAP32[i7 >> 2] | 0;
   HEAP32[i48 >> 2] = (HEAP32[i48 >> 2] | 0) + (HEAP32[i9 >> 2] | 0);
   HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + i44;
   if (__ZNK7WebCore15HitTestLocation10intersectsERKNS_10LayoutRectE(i4, i14) | 0) {
    i34 = 0;
   } else {
    break;
   }
   STACKTOP = i8;
   return i34 | 0;
  }
 } while (0);
 __ZNK7WebCore13InlineFlowBox16roundedFrameRectEv(i20, i1);
 i20 = HEAP32[i19 >> 2] | 0;
 i14 = HEAP32[i19 + 4 >> 2] | 0;
 i19 = i18 + 8 | 0;
 i18 = HEAP32[i19 >> 2] | 0;
 i54 = HEAP32[i19 + 4 >> 2] | 0;
 HEAP32[i21 >> 2] = i20;
 HEAP32[i22 >> 2] = i14;
 HEAP32[i23 >> 2] = i18;
 HEAP32[i24 >> 2] = i54;
 do {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i47 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 664 >> 2] | 0) == 2) {
   i55 = i20;
   i56 = i14;
   i57 = i18;
   i58 = i54;
  } else {
   i19 = HEAP32[i1 + 56 >> 2] | 0;
   if ((i19 & 4 | 0) != 0 | (i19 & 24 | 0) == 24) {
    i55 = i20;
    i56 = i14;
    i57 = i18;
    i58 = i54;
    break;
   }
   i19 = __ZN7WebCore9InlineBox4rootEv(i31) | 0;
   i52 = (HEAP32[i1 + 32 >> 2] & 2048 | 0) != 0;
   i51 = i52 ? i22 : i21;
   i15 = i52 ? i24 : i23;
   i52 = HEAP32[i19 + 76 >> 2] | 0;
   i16 = HEAP32[i51 >> 2] | 0;
   i17 = (HEAP32[i15 >> 2] | 0) + i16 | 0;
   i44 = HEAP32[i19 + 72 >> 2] | 0;
   i19 = (i44 | 0) < (i16 | 0) ? i16 : i44;
   HEAP32[i51 >> 2] = i19;
   HEAP32[i15 >> 2] = ((i17 | 0) < (i52 | 0) ? i17 : i52) - i19;
   i55 = HEAP32[i21 >> 2] | 0;
   i56 = HEAP32[i22 >> 2] | 0;
   i57 = HEAP32[i23 >> 2] | 0;
   i58 = HEAP32[i24 >> 2] | 0;
  }
 } while (0);
 i24 = i25 | 0;
 HEAP32[i24 >> 2] = i55;
 i55 = i25 + 4 | 0;
 HEAP32[i55 >> 2] = i56;
 HEAP32[i25 + 8 >> 2] = i57;
 HEAP32[i25 + 12 >> 2] = i58;
 __ZN7WebCore9InlineBox18flipForWritingModeERNS_10LayoutRectE(i31, i25);
 i58 = HEAP32[i7 >> 2] | 0;
 HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + (HEAP32[i9 >> 2] | 0);
 HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + i58;
 do {
  if (__ZNK7WebCore15HitTestLocation10intersectsERKNS_10LayoutRectE(i4, i25) | 0) {
   i58 = HEAP32[i47 >> 2] | 0;
   i55 = HEAP32[(HEAP32[i58 >> 2] | 0) + 456 >> 2] | 0;
   i24 = (HEAP32[i4 + 4 >> 2] | 0) - (HEAP32[i7 >> 2] | 0) | 0;
   HEAP32[i27 >> 2] = (HEAP32[i4 >> 2] | 0) - (HEAP32[i9 >> 2] | 0);
   HEAP32[i27 + 4 >> 2] = i24;
   __ZN7WebCore9InlineBox18flipForWritingModeERKNS_11LayoutPointE(i26, i31, i27);
   FUNCTION_TABLE_viii[i55 & 1](i58, i3, i26);
   i58 = HEAP32[i47 >> 2] | 0;
   if ((HEAP32[i58 + 20 >> 2] & 128 | 0) == 0) {
    i59 = HEAP32[i58 + 4 >> 2] | 0;
   } else {
    i59 = 0;
   }
   if (__ZN7WebCore13HitTestResult28addNodeToRectBasedTestResultEPNS_4NodeERKNS_14HitTestRequestERKNS_15HitTestLocationERKNS_10LayoutRectE(i3, i59 | 0, i2, i4, i25) | 0) {
    break;
   } else {
    i34 = 1;
   }
   STACKTOP = i8;
   return i34 | 0;
  }
 } while (0);
 i34 = 0;
 STACKTOP = i8;
 return i34 | 0;
}
function __ZN7WebCore13InlineFlowBox14paintFillLayerERKNS_9PaintInfoERKNS_5ColorEPKNS_9FillLayerERKNS_10LayoutRectENS_17CompositeOperatorE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, d32 = +0, i33 = 0, i34 = 0, d35 = +0, i36 = 0, i37 = 0, d38 = +0, d39 = +0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, d54 = +0, i55 = 0, i56 = 0, d57 = +0, i58 = 0, i59 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 i9 = i8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i11 = i10 | 0;
 i12 = i10;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = i13;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i16 = i15 | 0;
 i17 = i15;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i20 = i19;
 i21 = HEAP32[i4 + 4 >> 2] | 0;
 if ((i21 | 0) == 0) {
  i22 = i1 + 16 | 0;
  i23 = 4;
 } else {
  i24 = i1 + 16 | 0;
  i25 = HEAP32[i24 >> 2] | 0;
  if (FUNCTION_TABLE_iiif[HEAP32[(HEAP32[i21 >> 2] | 0) + 12 >> 2] & 1](i21, i25, +HEAPF32[(HEAP32[(HEAP32[i25 + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2]) | 0) {
   i23 = 20;
  } else {
   i22 = i24;
   i23 = 4;
  }
 }
 do {
  if ((i23 | 0) == 4) {
   i24 = HEAP32[(HEAP32[(HEAP32[i22 >> 2] | 0) + 36 >> 2] | 0) + 16 >> 2] | 0;
   i25 = i24;
   i21 = i24 + 136 | 0;
   if ((HEAP8[i24 + 141 | 0] | 0) == 10) {
    i23 = 20;
    break;
   }
   if ((HEAP8[i24 + 142 | 0] & 1) == 0) {
    if ((HEAP32[i21 >> 2] | 0) != 0) {
     i23 = 20;
     break;
    }
   } else {
    if (+HEAPF32[i21 >> 2] != +0) {
     i23 = 20;
     break;
    }
   }
   i21 = i24 + 152 | 0;
   if ((HEAP8[i25 + 157 | 0] | 0) == 10) {
    i23 = 20;
    break;
   }
   if ((HEAP8[i25 + 158 | 0] & 1) == 0) {
    if ((HEAP32[i21 >> 2] | 0) != 0) {
     i23 = 20;
     break;
    }
   } else {
    if (+HEAPF32[i21 >> 2] != +0) {
     i23 = 20;
     break;
    }
   }
   i21 = i24 + 168 | 0;
   if ((HEAP8[i25 + 173 | 0] | 0) == 10) {
    i23 = 20;
    break;
   }
   if ((HEAP8[i25 + 174 | 0] & 1) == 0) {
    if ((HEAP32[i21 >> 2] | 0) != 0) {
     i23 = 20;
     break;
    }
   } else {
    if (+HEAPF32[i21 >> 2] != +0) {
     i23 = 20;
     break;
    }
   }
   i21 = i24 + 184 | 0;
   if ((HEAP8[i24 + 189 | 0] | 0) == 10) {
    i23 = 20;
    break;
   }
   if ((HEAP8[i24 + 190 | 0] & 1) == 0) {
    if ((HEAP32[i21 >> 2] | 0) == 0) {
     break;
    } else {
     i23 = 20;
     break;
    }
   } else {
    if (+HEAPF32[i21 >> 2] != +0) {
     i23 = 20;
     break;
    } else {
     break;
    }
   }
  }
 } while (0);
 do {
  if ((i23 | 0) == 20) {
   i22 = HEAP32[i1 + 48 >> 2] | 0;
   i21 = (i22 | 0) == 0;
   if (i21) {
    if ((HEAP32[i1 + 52 >> 2] | 0) == 0) {
     break;
    }
   }
   i24 = i1 | 0;
   if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
    break;
   }
   i25 = i1 + 16 | 0;
   i26 = HEAP32[(HEAP32[i25 >> 2] | 0) + 36 >> 2] | 0;
   if ((HEAP32[(HEAP32[i26 + 4 >> 2] | 0) + 64 >> 2] & 4 | 0) != 0) {
    i27 = i2 | 0;
    i28 = HEAP32[i27 >> 2] | 0;
    __ZN7WebCore15GraphicsContext4saveEv(i28);
    i29 = HEAP32[i27 >> 2] | 0;
    i27 = HEAP32[i5 >> 2] | 0;
    i30 = HEAP32[i5 + 4 >> 2] | 0;
    i31 = i1 + 32 | 0;
    if ((HEAP32[i31 >> 2] & 2048 | 0) == 0) {
     d32 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i24);
    } else {
     d32 = +HEAPF32[i1 + 28 >> 2];
    }
    do {
     if (d32 < +2147483647) {
      if (d32 <= +-2147483648) {
       i33 = 0;
       i34 = -822083584;
       break;
      }
      i33 = 0;
      i34 = (HEAPF32[tempDoublePtr >> 2] = +(~~d32 | 0), HEAP32[tempDoublePtr >> 2] | 0);
     } else {
      i33 = 0;
      i34 = 1325400064;
     }
    } while (0);
    if ((HEAP32[i31 >> 2] & 2048 | 0) == 0) {
     d35 = +HEAPF32[i1 + 28 >> 2];
    } else {
     d35 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i24);
    }
    do {
     if (d35 < +2147483647) {
      if (d35 <= +-2147483648) {
       i36 = -822083584;
       i37 = 0;
       break;
      }
      i36 = (HEAPF32[tempDoublePtr >> 2] = +(~~d35 | 0), HEAP32[tempDoublePtr >> 2] | 0);
      i37 = 0;
     } else {
      i36 = 1325400064;
      i37 = 0;
     }
    } while (0);
    d38 = +(+(i27 | 0));
    d39 = +(+(i30 | 0));
    HEAPF32[i11 >> 2] = d38;
    HEAPF32[i11 + 4 >> 2] = d39;
    i31 = i10 + 8 | 0;
    HEAP32[i31 >> 2] = i37 | i34;
    HEAP32[i31 + 4 >> 2] = i36 | i33;
    __ZN7WebCore15GraphicsContext4clipERKNS_9FloatRectE(i29, i12);
    i31 = HEAP32[i25 >> 2] | 0;
    i40 = i5 + 8 | 0;
    i41 = HEAP32[i40 + 4 >> 2] | 0;
    HEAP32[i13 >> 2] = HEAP32[i40 >> 2];
    HEAP32[i13 + 4 >> 2] = i41;
    __ZN7WebCore20RenderBoxModelObject22paintFillLayerExtendedERKNS_9PaintInfoERKNS_5ColorEPKNS_9FillLayerERKNS_10LayoutRectENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxERKNS_10LayoutSizeENS_17CompositeOperatorEPNS_13RenderElementE(i31, i2, i3, i4, i5, 0, i1, i14, i6, 0);
    __ZN7WebCore15GraphicsContext7restoreEv(i28);
    STACKTOP = i7;
    return;
   }
   do {
    if ((HEAP32[i26 + 40 >> 2] & 1073741824 | 0) == 0) {
     i31 = HEAP32[i1 + 52 >> 2] | 0;
     if ((i31 | 0) == 0) {
      i42 = 0;
     } else {
      i41 = 0;
      i40 = i31;
      while (1) {
       d39 = +(i41 | 0) + +HEAPF32[i40 + 28 >> 2];
       do {
        if (d39 < +2147483647) {
         if (d39 <= +-2147483648) {
          i43 = -2147483648;
          break;
         }
         i43 = ~~d39;
        } else {
         i43 = 2147483647;
        }
       } while (0);
       i31 = HEAP32[i40 + 52 >> 2] | 0;
       if ((i31 | 0) == 0) {
        break;
       } else {
        i41 = i43;
        i40 = i31;
       }
      }
      if ((i1 | 0) == 0) {
       i44 = i43;
       i45 = i43;
       break;
      } else {
       i42 = i43;
      }
     }
     i40 = i42;
     i41 = i1;
     while (1) {
      d39 = +(i40 | 0) + +HEAPF32[i41 + 28 >> 2];
      do {
       if (d39 < +2147483647) {
        if (d39 <= +-2147483648) {
         i46 = -2147483648;
         break;
        }
        i46 = ~~d39;
       } else {
        i46 = 2147483647;
       }
      } while (0);
      i31 = HEAP32[i41 + 48 >> 2] | 0;
      if ((i31 | 0) == 0) {
       i44 = i46;
       i45 = i42;
       break;
      } else {
       i40 = i46;
       i41 = i31;
      }
     }
    } else {
     if (i21) {
      i47 = 0;
     } else {
      i41 = 0;
      i40 = i22;
      while (1) {
       d39 = +(i41 | 0) + +HEAPF32[i40 + 28 >> 2];
       do {
        if (d39 < +2147483647) {
         if (d39 <= +-2147483648) {
          i48 = -2147483648;
          break;
         }
         i48 = ~~d39;
        } else {
         i48 = 2147483647;
        }
       } while (0);
       i31 = HEAP32[i40 + 48 >> 2] | 0;
       if ((i31 | 0) == 0) {
        i47 = i48;
        break;
       } else {
        i41 = i48;
        i40 = i31;
       }
      }
     }
     if ((i1 | 0) == 0) {
      i44 = i47;
      i45 = i47;
      break;
     } else {
      i49 = i47;
      i50 = i1;
     }
     while (1) {
      d39 = +(i49 | 0) + +HEAPF32[i50 + 28 >> 2];
      do {
       if (d39 < +2147483647) {
        if (d39 <= +-2147483648) {
         i51 = -2147483648;
         break;
        }
        i51 = ~~d39;
       } else {
        i51 = 2147483647;
       }
      } while (0);
      i40 = HEAP32[i50 + 52 >> 2] | 0;
      if ((i40 | 0) == 0) {
       i44 = i51;
       i45 = i47;
       break;
      } else {
       i49 = i51;
       i50 = i40;
      }
     }
    }
   } while (0);
   i22 = i5 | 0;
   i21 = i1 + 32 | 0;
   i26 = HEAP32[i21 >> 2] & 2048;
   i28 = (i26 | 0) != 0;
   i29 = (HEAP32[i22 >> 2] | 0) - (i28 ? i45 : 0) | 0;
   i30 = i5 + 4 | 0;
   i27 = (HEAP32[i30 >> 2] | 0) - (i28 ? 0 : i45) | 0;
   do {
    if ((i26 | 0) == 0) {
     d39 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i24);
     if (d39 >= +2147483647) {
      i52 = 2147483647;
      break;
     }
     if (d39 <= +-2147483648) {
      i52 = -2147483648;
      break;
     }
     i52 = ~~d39;
    } else {
     i52 = i44;
    }
   } while (0);
   do {
    if ((HEAP32[i21 >> 2] & 2048 | 0) == 0) {
     i53 = i44;
    } else {
     d39 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i24);
     if (d39 >= +2147483647) {
      i53 = 2147483647;
      break;
     }
     if (d39 <= +-2147483648) {
      i53 = -2147483648;
      break;
     }
     i53 = ~~d39;
    }
   } while (0);
   i26 = i2 | 0;
   i28 = HEAP32[i26 >> 2] | 0;
   __ZN7WebCore15GraphicsContext4saveEv(i28);
   i40 = HEAP32[i26 >> 2] | 0;
   i26 = HEAP32[i22 >> 2] | 0;
   i41 = HEAP32[i30 >> 2] | 0;
   if ((HEAP32[i21 >> 2] & 2048 | 0) == 0) {
    d54 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i24);
   } else {
    d54 = +HEAPF32[i1 + 28 >> 2];
   }
   do {
    if (d54 < +2147483647) {
     if (d54 <= +-2147483648) {
      i55 = 0;
      i56 = -822083584;
      break;
     }
     i55 = 0;
     i56 = (HEAPF32[tempDoublePtr >> 2] = +(~~d54 | 0), HEAP32[tempDoublePtr >> 2] | 0);
    } else {
     i55 = 0;
     i56 = 1325400064;
    }
   } while (0);
   if ((HEAP32[i21 >> 2] & 2048 | 0) == 0) {
    d57 = +HEAPF32[i1 + 28 >> 2];
   } else {
    d57 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i24);
   }
   do {
    if (d57 < +2147483647) {
     if (d57 <= +-2147483648) {
      i58 = -822083584;
      i59 = 0;
      break;
     }
     i58 = (HEAPF32[tempDoublePtr >> 2] = +(~~d57 | 0), HEAP32[tempDoublePtr >> 2] | 0);
     i59 = 0;
    } else {
     i58 = 1325400064;
     i59 = 0;
    }
   } while (0);
   d39 = +(+(i26 | 0));
   d38 = +(+(i41 | 0));
   HEAPF32[i16 >> 2] = d39;
   HEAPF32[i16 + 4 >> 2] = d38;
   i24 = i15 + 8 | 0;
   HEAP32[i24 >> 2] = i59 | i56;
   HEAP32[i24 + 4 >> 2] = i58 | i55;
   __ZN7WebCore15GraphicsContext4clipERKNS_9FloatRectE(i40, i17);
   i24 = HEAP32[i25 >> 2] | 0;
   HEAP32[i18 >> 2] = i29;
   HEAP32[i18 + 4 >> 2] = i27;
   HEAP32[i18 + 8 >> 2] = i52;
   HEAP32[i18 + 12 >> 2] = i53;
   i21 = i5 + 8 | 0;
   i30 = HEAP32[i21 + 4 >> 2] | 0;
   HEAP32[i19 >> 2] = HEAP32[i21 >> 2];
   HEAP32[i19 + 4 >> 2] = i30;
   __ZN7WebCore20RenderBoxModelObject22paintFillLayerExtendedERKNS_9PaintInfoERKNS_5ColorEPKNS_9FillLayerERKNS_10LayoutRectENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxERKNS_10LayoutSizeENS_17CompositeOperatorEPNS_13RenderElementE(i24, i2, i3, i4, i18, 0, i1, i20, i6, 0);
   __ZN7WebCore15GraphicsContext7restoreEv(i28);
   STACKTOP = i7;
   return;
  }
 } while (0);
 i20 = HEAP32[i1 + 16 >> 2] | 0;
 i18 = i5 + 8 | 0;
 i19 = HEAP32[i18 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i18 >> 2];
 HEAP32[i8 + 4 >> 2] = i19;
 __ZN7WebCore20RenderBoxModelObject22paintFillLayerExtendedERKNS_9PaintInfoERKNS_5ColorEPKNS_9FillLayerERKNS_10LayoutRectENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxERKNS_10LayoutSizeENS_17CompositeOperatorEPNS_13RenderElementE(i20, i2, i3, i4, i5, 0, i1, i9, i6, 0);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore13InlineFlowBox19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, d37 = +0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, d43 = +0, d44 = +0, d45 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i5 | 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i11 = i10 | 0;
 i12 = i10;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i16 = i15 | 0;
 i17 = i15;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i19 = i1 + 16 | 0;
 i20 = HEAP32[i19 >> 2] | 0;
 i21 = HEAP32[i2 + 28 >> 2] | 0;
 if (!((i21 | 0) == 0 | (i21 | 0) == (i20 | 0))) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[(HEAP32[i20 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i2 + 20 >> 2] | 0) != 4) {
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore13InlineFlowBox16roundedFrameRectEv(i5, i1);
 i20 = HEAP32[i6 >> 2] | 0;
 i21 = HEAP32[i6 + 4 >> 2] | 0;
 i6 = i5 + 8 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 i22 = HEAP32[i6 + 4 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 664 >> 2] | 0) == 2) {
   i23 = i20;
   i24 = i21;
   i25 = i22;
   i26 = i5;
  } else {
   i6 = HEAP32[i1 + 56 >> 2] | 0;
   if ((i6 & 4 | 0) != 0 | (i6 & 24 | 0) == 24) {
    i23 = i20;
    i24 = i21;
    i25 = i22;
    i26 = i5;
    break;
   }
   i6 = __ZNK7WebCore9InlineBox4rootEv(i1 | 0) | 0;
   i27 = (HEAP32[i1 + 32 >> 2] & 2048 | 0) == 0;
   i28 = i27 ? i20 : i21;
   i29 = 0;
   i30 = i27 ? i5 : i22;
   i27 ? i22 : i29;
   i29 = HEAP32[i6 + 76 >> 2] | 0;
   i31 = i30 + i28 | 0;
   i30 = HEAP32[i6 + 72 >> 2] | 0;
   i6 = (i30 | 0) < (i28 | 0) ? i28 : i30;
   i30 = ((i31 | 0) < (i29 | 0) ? i31 : i29) - i6 | 0;
   if (i27) {
    i23 = i6;
    i24 = i21;
    i25 = i22 & -1 | 0;
    i26 = i30 | i5 & 0;
    break;
   } else {
    i23 = i20;
    i24 = i6;
    i25 = i30 | i22 & 0;
    i26 = i5 & -1 | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = i23;
 HEAP32[i9 + 4 >> 2] = i24;
 i24 = i7 + 8 | 0;
 HEAP32[i24 >> 2] = i26;
 HEAP32[i24 + 4 >> 2] = i25;
 __ZN7WebCore9InlineBox18flipForWritingModeERNS_10LayoutRectE(i1 | 0, i9);
 i9 = i1 + 12 | 0;
 i24 = HEAP32[i9 >> 2] | 0;
 i7 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i24 | 0) != 0) {
   if ((HEAP32[i7 + 20 >> 2] | 0) >>> 0 > 1073741823 >>> 0) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i23 = i1 + 32 | 0;
 i5 = i7;
 do {
  if ((HEAP32[i23 >> 2] & 1 | 0) == 0) {
   i32 = HEAP32[i7 + 36 >> 2] | 0;
   i33 = i24;
  } else {
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i7 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
    i32 = HEAP32[i7 + 36 >> 2] | 0;
    i33 = i24;
    break;
   } else {
    i22 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i5) | 0;
    i32 = i22;
    i33 = HEAP32[i9 >> 2] | 0;
    break;
   }
  }
 } while (0);
 do {
  if ((i33 | 0) == 0) {
   if ((HEAP32[i23 >> 2] & 1 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i5 = HEAP32[i19 >> 2] | 0;
   if ((i32 | 0) != (HEAP32[i5 + 36 >> 2] | 0)) {
    i34 = i5;
    break;
   }
   STACKTOP = i4;
   return;
  } else {
   i34 = HEAP32[i19 >> 2] | 0;
  }
 } while (0);
 i33 = (HEAP32[i8 >> 2] | 0) + (HEAP32[i3 >> 2] | 0) | 0;
 i5 = (HEAP32[i8 + 4 >> 2] | 0) + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i11 >> 2] = i33;
 HEAP32[i11 + 4 >> 2] = i5;
 i11 = i10 + 8 | 0;
 HEAP32[i11 >> 2] = i26;
 HEAP32[i11 + 4 >> 2] = i25;
 i11 = i1 + 48 | 0;
 L36 : do {
  if (!(FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i34 >> 2] | 0) + 808 >> 2] & 1](i34, 0, i1) | 0)) {
   if ((HEAP32[i11 >> 2] | 0) == 0) {
    if ((HEAP32[i1 + 52 >> 2] | 0) != 0) {
     i35 = 23;
    }
   } else {
    i35 = 23;
   }
   do {
    if ((i35 | 0) == 23) {
     if ((HEAP32[i9 >> 2] | 0) == 0) {
      break;
     }
     i10 = HEAP32[i1 + 56 >> 2] | 0;
     __ZN7WebCore20RenderBoxModelObject14paintBoxShadowERKNS_9PaintInfoERKNS_10LayoutRectEPKNS_11RenderStyleENS_11ShadowStyleEbb(HEAP32[i19 >> 2] | 0, i2, i12, i32, 0, (i10 & 1 | 0) != 0, (i10 & 2 | 0) != 0);
     break L36;
    }
   } while (0);
   __ZN7WebCore20RenderBoxModelObject14paintBoxShadowERKNS_9PaintInfoERKNS_10LayoutRectEPKNS_11RenderStyleENS_11ShadowStyleEbb(HEAP32[i19 >> 2] | 0, i2, i12, i32, 0, 1, 1);
  }
 } while (0);
 __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i13, i32, 23);
 __ZN7WebCore13InlineFlowBox15paintFillLayersERKNS_9PaintInfoERKNS_5ColorEPKNS_9FillLayerERKNS_10LayoutRectENS_17CompositeOperatorE(i1, i2, i13, (HEAP32[i32 + 12 >> 2] | 0) + 4 | 0, i12, 2);
 if ((HEAP32[i11 >> 2] | 0) == 0) {
  if ((HEAP32[i1 + 52 >> 2] | 0) == 0) {
   i35 = 29;
  } else {
   i35 = 28;
  }
 } else {
  i35 = 28;
 }
 do {
  if ((i35 | 0) == 28) {
   if ((HEAP32[i9 >> 2] | 0) == 0) {
    i35 = 29;
    break;
   }
   i13 = HEAP32[i1 + 56 >> 2] | 0;
   __ZN7WebCore20RenderBoxModelObject14paintBoxShadowERKNS_9PaintInfoERKNS_10LayoutRectEPKNS_11RenderStyleENS_11ShadowStyleEbb(HEAP32[i19 >> 2] | 0, i2, i12, i32, 1, (i13 & 1 | 0) != 0, (i13 & 2 | 0) != 0);
  }
 } while (0);
 if ((i35 | 0) == 29) {
  __ZN7WebCore20RenderBoxModelObject14paintBoxShadowERKNS_9PaintInfoERKNS_10LayoutRectEPKNS_11RenderStyleENS_11ShadowStyleEbb(HEAP32[i19 >> 2] | 0, i2, i12, i32, 1, 1, 1);
 }
 if ((HEAP32[i9 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = HEAP32[i19 >> 2] | 0;
 i13 = HEAP32[(HEAP32[i9 + 36 >> 2] | 0) + 16 >> 2] | 0;
 i34 = i13 + 132 | 0;
 i10 = HEAP32[(HEAP32[i34 >> 2] | 0) + 8 >> 2] | 0;
 i8 = (i10 | 0) != 0;
 i24 = HEAP32[i13 + 104 >> 2] | 0;
 i7 = (i24 & 134217726 | 0) == 0;
 if (i7 | i8) {
  if (i7) {
   i35 = 35;
  }
 } else {
  if ((i24 & 2013265920 | 0) == 0) {
   i35 = 35;
  }
 }
 do {
  if ((i35 | 0) == 35) {
   i24 = HEAP32[i13 + 112 >> 2] | 0;
   i7 = (i24 & 134217726 | 0) == 0;
   if (i7 | i8) {
    if (!i7) {
     break;
    }
   } else {
    if ((i24 & 2013265920 | 0) != 0) {
     break;
    }
   }
   i24 = HEAP32[i13 + 120 >> 2] | 0;
   i7 = (i24 & 134217726 | 0) == 0;
   if (i7 | i8) {
    if (!i7) {
     break;
    }
   } else {
    if ((i24 & 2013265920 | 0) != 0) {
     break;
    }
   }
   i24 = HEAP32[i13 + 128 >> 2] | 0;
   i7 = (i24 & 134217726 | 0) == 0;
   if (i7 | i8) {
    if (!i7) {
     break;
    }
    STACKTOP = i4;
    return;
   } else {
    if ((i24 & 2013265920 | 0) != 0) {
     break;
    }
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 i8 = i34;
 i34 = i10;
 do {
  if ((i10 | 0) != 0) {
   if (!(FUNCTION_TABLE_iiif[HEAP32[(HEAP32[i10 >> 2] | 0) + 12 >> 2] & 1](i34, i9, +HEAPF32[(HEAP32[i32 + 24 >> 2] | 0) + 80 >> 2]) | 0)) {
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 16 >> 2] & 31](i34) | 0)) {
    STACKTOP = i4;
    return;
   }
   i13 = HEAP32[i11 >> 2] | 0;
   if ((i13 | 0) == 0) {
    if ((HEAP32[i1 + 52 >> 2] | 0) == 0) {
     break;
    } else {
     i36 = 0;
     i35 = 51;
    }
   } else {
    i24 = 0;
    i7 = i13;
    while (1) {
     d37 = +(i24 | 0) + +HEAPF32[i7 + 28 >> 2];
     do {
      if (d37 < +2147483647) {
       if (d37 <= +-2147483648) {
        i38 = -2147483648;
        break;
       }
       i38 = ~~d37;
      } else {
       i38 = 2147483647;
      }
     } while (0);
     i13 = HEAP32[i7 + 48 >> 2] | 0;
     if ((i13 | 0) == 0) {
      break;
     } else {
      i24 = i38;
      i7 = i13;
     }
    }
    if ((i1 | 0) == 0) {
     i39 = i38;
     i40 = i38;
    } else {
     i36 = i38;
     i35 = 51;
    }
   }
   if ((i35 | 0) == 51) {
    i7 = i36;
    i24 = i1;
    while (1) {
     d37 = +(i7 | 0) + +HEAPF32[i24 + 28 >> 2];
     do {
      if (d37 < +2147483647) {
       if (d37 <= +-2147483648) {
        i41 = -2147483648;
        break;
       }
       i41 = ~~d37;
      } else {
       i41 = 2147483647;
      }
     } while (0);
     i13 = HEAP32[i24 + 52 >> 2] | 0;
     if ((i13 | 0) == 0) {
      i39 = i41;
      i40 = i36;
      break;
     } else {
      i7 = i41;
      i24 = i13;
     }
    }
   }
   i24 = HEAP32[i23 >> 2] & 2048;
   i7 = (i24 | 0) != 0;
   if ((i24 | 0) == 0) {
    i42 = i39;
   } else {
    i42 = i25;
   }
   __ZN7WebCoreL30clipRectForNinePieceImageStripEPNS_13InlineFlowBoxERKNS_14NinePieceImageERKNS_10LayoutRectE(i14, i1, i8, i12);
   __ZN7WebCore15GraphicsContext4saveEv(i3);
   d37 = +(HEAP32[i14 + 8 >> 2] | 0);
   d43 = +(HEAP32[i14 + 12 >> 2] | 0);
   d44 = +(+(HEAP32[i14 >> 2] | 0));
   d45 = +(+(HEAP32[i14 + 4 >> 2] | 0));
   HEAPF32[i16 >> 2] = d44;
   HEAPF32[i16 + 4 >> 2] = d45;
   i24 = i15 + 8 | 0;
   d45 = +d37;
   d37 = +d43;
   HEAPF32[i24 >> 2] = d45;
   HEAPF32[i24 + 4 >> 2] = d37;
   __ZN7WebCore15GraphicsContext4clipERKNS_9FloatRectE(i3, i17);
   i24 = HEAP32[i19 >> 2] | 0;
   HEAP32[i18 >> 2] = i33 - (i7 ? i40 : 0);
   HEAP32[i18 + 4 >> 2] = i5 - (i7 ? 0 : i40);
   HEAP32[i18 + 8 >> 2] = i7 ? i39 : i26;
   HEAP32[i18 + 12 >> 2] = i42;
   __ZN7WebCore20RenderBoxModelObject11paintBorderERKNS_9PaintInfoERKNS_10LayoutRectEPKNS_11RenderStyleENS_24BackgroundBleedAvoidanceEbb(i24, i2, i18, i32, 0, 1, 1);
   __ZN7WebCore15GraphicsContext7restoreEv(i3);
   STACKTOP = i4;
   return;
  }
 } while (0);
 i3 = HEAP32[i1 + 56 >> 2] | 0;
 __ZN7WebCore20RenderBoxModelObject11paintBorderERKNS_9PaintInfoERKNS_10LayoutRectEPKNS_11RenderStyleENS_24BackgroundBleedAvoidanceEbb(HEAP32[i19 >> 2] | 0, i2, i12, i32, 0, (i3 & 1 | 0) != 0, (i3 & 2 | 0) != 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore13InlineFlowBox24computeLogicalBoxHeightsEPNS_13RootInlineBoxERNS_10LayoutUnitES4_RiS5_RbS6_bRN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS7_6VectorIPKNS_14SimpleFontDataELj0ENS7_15CrashOnOverflowEEENS_13GlyphOverflowEEENS7_7PtrHashISB_EENS7_10HashTraitsISB_EENSO_ISL_EEEENS_12FontBaselineERNS_21VerticalPositionCacheE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12) {
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
 var i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, d30 = +0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i14 = i13 | 0;
 i15 = i13 + 8 | 0;
 i16 = i13 + 16 | 0;
 i17 = i13 + 24 | 0;
 i18 = i13 + 32 | 0;
 i19 = i13 + 40 | 0;
 i20 = i13 + 48 | 0;
 i21 = i13 + 56 | 0;
 i22 = i13 + 64 | 0;
 i23 = i13 + 72 | 0;
 i24 = i13 + 80 | 0;
 HEAP8[i16] = 0;
 HEAP8[i17] = 0;
 i25 = i1 + 56 | 0;
 i26 = (HEAP32[i25 >> 2] & 16 | 0) != 0;
 L1 : do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 48 >> 2] & 31](i1 | 0) | 0) {
   HEAP32[i18 >> 2] = 0;
   HEAP32[i19 >> 2] = 0;
   __ZNK7WebCore13RootInlineBox22ascentAndDescentForBoxEPNS_9InlineBoxERN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS3_6VectorIPKNS_14SimpleFontDataELj0ENS3_15CrashOnOverflowEEENS_13GlyphOverflowEEENS3_7PtrHashIS7_EENS3_10HashTraitsIS7_EENSK_ISH_EEEERiSP_RbSQ_(i2, i2 | 0, i10, i18, i19, i16, i17);
   do {
    if (!i9) {
     i27 = HEAP32[i25 >> 2] | 0;
     if ((i27 & 4 | 0) != 0) {
      break;
     }
     if (!i26) {
      break L1;
     }
     if ((i27 & 8 | 0) != 0) {
      break;
     }
     STACKTOP = i13;
     return;
    }
   } while (0);
   i27 = HEAP32[i18 >> 2] | 0;
   if ((HEAP32[i5 >> 2] | 0) < (i27 | 0)) {
    i28 = 8;
   } else {
    if ((HEAP8[i7] & 1) == 0) {
     i28 = 8;
    }
   }
   if ((i28 | 0) == 8) {
    HEAP32[i5 >> 2] = i27;
    HEAP8[i7] = 1;
   }
   i27 = HEAP32[i19 >> 2] | 0;
   if ((HEAP32[i6 >> 2] | 0) >= (i27 | 0)) {
    if ((HEAP8[i8] & 1) != 0) {
     i28 = 12;
     break;
    }
   }
   HEAP32[i6 >> 2] = i27;
   HEAP8[i8] = 1;
   i28 = 12;
  } else {
   i28 = 12;
  }
 } while (0);
 do {
  if ((i28 | 0) == 12) {
   if (!i26) {
    break;
   }
   STACKTOP = i13;
   return;
  }
 } while (0);
 i26 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i26 | 0) == 0) {
  STACKTOP = i13;
  return;
 }
 i1 = i22 | 0;
 i19 = i3 | 0;
 i18 = i4 | 0;
 i25 = i14 | 0;
 i17 = i15 | 0;
 i16 = i26;
 while (1) {
  i26 = i16 + 16 | 0;
  do {
   if ((HEAP32[(HEAP32[i26 >> 2] | 0) + 20 >> 2] & 25165824 | 0) != 16777216) {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 40 >> 2] & 31](i16) | 0) {
     i29 = i16;
    } else {
     i29 = 0;
    }
    HEAP8[i20] = 0;
    HEAP8[i21] = 0;
    __ZN7WebCore13RootInlineBox22verticalPositionForBoxEPNS_9InlineBoxERNS_21VerticalPositionCacheE(i22, i2, i16, i12);
    d30 = +(HEAP32[i1 >> 2] | 0);
    i27 = i16 + 32 | 0;
    if ((HEAP32[i27 >> 2] & 2048 | 0) == 0) {
     HEAPF32[i16 + 20 >> 2] = d30;
    } else {
     HEAPF32[i16 + 24 >> 2] = d30;
    }
    HEAP32[i23 >> 2] = 0;
    HEAP32[i24 >> 2] = 0;
    __ZNK7WebCore13RootInlineBox22ascentAndDescentForBoxEPNS_9InlineBoxERN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS3_6VectorIPKNS_14SimpleFontDataELj0ENS3_15CrashOnOverflowEEENS_13GlyphOverflowEEENS3_7PtrHashIS7_EENS3_10HashTraitsIS7_EENSK_ISH_EEEERiSP_RbSQ_(i2, i16, i10, i23, i24, i20, i21);
    i31 = (HEAP32[i24 >> 2] | 0) + (HEAP32[i23 >> 2] | 0) | 0;
    i32 = HEAP32[i26 >> 2] | 0;
    i33 = (HEAP32[i32 + 20 >> 2] & 768 | 0) == 256;
    do {
     if ((HEAP32[i27 >> 2] & 1 | 0) == 0) {
      if (i33) {
       i34 = HEAP32[(HEAP32[i32 + 8 >> 2] | 0) + 36 >> 2] | 0;
       break;
      } else {
       i34 = HEAP32[i32 + 36 >> 2] | 0;
       break;
      }
     } else {
      if (i33) {
       i35 = HEAP32[i32 + 8 >> 2] | 0;
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i35 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i34 = HEAP32[i35 + 36 >> 2] | 0;
        break;
       } else {
        i34 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i35) | 0;
        break;
       }
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i32 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i34 = HEAP32[i32 + 36 >> 2] | 0;
        break;
       } else {
        i34 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i32) | 0;
        break;
       }
      }
     }
    } while (0);
    L51 : do {
     if ((HEAP32[i34 + 48 >> 2] & 983040 | 0) == 393216) {
      i32 = HEAP32[i26 >> 2] | 0;
      do {
       if ((HEAP32[i32 + 20 >> 2] & 768 | 0) == 256) {
        i33 = HEAP32[i32 + 8 >> 2] | 0;
        if ((HEAP32[i33 + 20 >> 2] & 1024 | 0) != 0) {
         break;
        }
        if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i33 >> 2] | 0) + 188 >> 2] & 31](i33 | 0) | 0)) {
         i28 = 38;
         break L51;
        }
       }
      } while (0);
      if ((HEAP32[i19 >> 2] | 0) >= (i31 | 0)) {
       break;
      }
      HEAP32[i19 >> 2] = i31;
     } else {
      i28 = 38;
     }
    } while (0);
    L58 : do {
     if ((i28 | 0) == 38) {
      i28 = 0;
      i32 = HEAP32[i26 >> 2] | 0;
      i33 = (HEAP32[i32 + 20 >> 2] & 768 | 0) == 256;
      do {
       if ((HEAP32[i27 >> 2] & 1 | 0) == 0) {
        if (i33) {
         i36 = HEAP32[(HEAP32[i32 + 8 >> 2] | 0) + 36 >> 2] | 0;
         break;
        } else {
         i36 = HEAP32[i32 + 36 >> 2] | 0;
         break;
        }
       } else {
        if (i33) {
         i35 = HEAP32[i32 + 8 >> 2] | 0;
         if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i35 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
          i36 = HEAP32[i35 + 36 >> 2] | 0;
          break;
         } else {
          i36 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i35) | 0;
          break;
         }
        } else {
         if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i32 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
          i36 = HEAP32[i32 + 36 >> 2] | 0;
          break;
         } else {
          i36 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i32) | 0;
          break;
         }
        }
       }
      } while (0);
      L76 : do {
       if ((HEAP32[i36 + 48 >> 2] & 983040 | 0) == 458752) {
        i32 = HEAP32[i26 >> 2] | 0;
        do {
         if ((HEAP32[i32 + 20 >> 2] & 768 | 0) == 256) {
          i33 = HEAP32[i32 + 8 >> 2] | 0;
          if ((HEAP32[i33 + 20 >> 2] & 1024 | 0) != 0) {
           break;
          }
          if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i33 >> 2] | 0) + 188 >> 2] & 31](i33 | 0) | 0)) {
           break L76;
          }
         }
        } while (0);
        if ((HEAP32[i18 >> 2] | 0) >= (i31 | 0)) {
         break L58;
        }
        HEAP32[i18 >> 2] = i31;
        break L58;
       }
      } while (0);
      do {
       if (!((i29 | 0) == 0 | i9)) {
        i32 = HEAP32[i29 + 56 >> 2] | 0;
        if ((i32 & 4 | 0) != 0 | (i32 & 24 | 0) == 24) {
         break;
        }
        i32 = HEAP32[i29 + 16 >> 2] | 0;
        i33 = i32;
        i35 = i32;
        if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i35 >> 2] | 0) + 760 >> 2] & 31](i33) | 0) != 0) {
         break;
        }
        if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i35 >> 2] | 0) + 764 >> 2] & 31](i33) | 0) != 0) {
         break;
        }
        i35 = i32;
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i35 >> 2] | 0) + 728 >> 2] & 7](i14, i33);
        if ((HEAP32[i25 >> 2] | 0) != 0) {
         break;
        }
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i35 >> 2] | 0) + 732 >> 2] & 7](i15, i33);
        if ((HEAP32[i17 >> 2] | 0) == 0) {
         break L58;
        }
       }
      } while (0);
      i33 = i16 + 24 | 0;
      i35 = i16 + 20 | 0;
      i32 = ~~(+(HEAP32[i23 >> 2] | 0) - +HEAPF32[((HEAP32[i27 >> 2] & 2048 | 0) == 0 ? i35 : i33) >> 2]);
      HEAP32[i23 >> 2] = i32;
      i37 = ~~(+HEAPF32[((HEAP32[i27 >> 2] & 2048 | 0) == 0 ? i35 : i33) >> 2] + +(HEAP32[i24 >> 2] | 0));
      HEAP32[i24 >> 2] = i37;
      do {
       if ((HEAP8[i20] & 1) != 0) {
        if ((HEAP32[i5 >> 2] | 0) >= (i32 | 0)) {
         if ((HEAP8[i7] & 1) != 0) {
          break;
         }
        }
        HEAP32[i5 >> 2] = i32;
        HEAP8[i7] = 1;
       }
      } while (0);
      if ((HEAP8[i21] & 1) == 0) {
       break;
      }
      if ((HEAP32[i6 >> 2] | 0) >= (i37 | 0)) {
       if ((HEAP8[i8] & 1) != 0) {
        break;
       }
      }
      HEAP32[i6 >> 2] = i37;
      HEAP8[i8] = 1;
     }
    } while (0);
    if ((i29 | 0) == 0) {
     break;
    }
    __ZN7WebCore13InlineFlowBox24computeLogicalBoxHeightsEPNS_13RootInlineBoxERNS_10LayoutUnitES4_RiS5_RbS6_bRN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS7_6VectorIPKNS_14SimpleFontDataELj0ENS7_15CrashOnOverflowEEENS_13GlyphOverflowEEENS7_7PtrHashISB_EENS7_10HashTraitsISB_EENSO_ISL_EEEENS_12FontBaselineERNS_21VerticalPositionCacheE(i29, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12);
   }
  } while (0);
  i16 = HEAP32[i16 + 4 >> 2] | 0;
  if ((i16 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i13;
 return;
}
function __ZN7WebCore13InlineFlowBox15computeOverflowENS_10LayoutUnitES1_RN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS2_6VectorIPKNS_14SimpleFontDataELj0ENS2_15CrashOnOverflowEEENS_13GlyphOverflowEEENS2_7PtrHashIS6_EENS2_10HashTraitsIS6_EENSJ_ISG_EEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, d27 = +0, d28 = +0, d29 = +0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, d60 = +0, d61 = +0, d62 = +0, d63 = +0, d64 = +0, d65 = +0, i66 = 0, i67 = 0, d68 = +0, d69 = +0, d70 = +0, d71 = +0, i72 = 0, i73 = 0, d74 = +0, d75 = +0, d76 = +0, d77 = +0, i78 = 0, i79 = 0, i80 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i6 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 32 | 0;
 i9 = i5 + 40 | 0;
 i10 = i5 + 56 | 0;
 i11 = i5 + 72 | 0;
 i12 = i5 + 88 | 0;
 i13 = i5 + 104 | 0;
 i14 = i5 + 120 | 0;
 i15 = i5 + 128 | 0;
 i16 = i5 + 136 | 0;
 i17 = i16 | 0;
 i18 = i16;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i20 = i19 | 0;
 i21 = i19;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i23 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i25 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i25 & 16384 | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 i26 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 d27 = +(i26 | 0);
 d28 = +HEAPF32[i1 + 28 >> 2];
 d29 = +(i2 - i26 | 0);
 HEAPF32[i10 >> 2] = +HEAPF32[((i25 & 2048 | 0) == 0 ? i1 + 24 | 0 : i1 + 20 | 0) >> 2];
 HEAPF32[i10 + 4 >> 2] = d27;
 HEAPF32[i10 + 8 >> 2] = d28;
 HEAPF32[i10 + 12 >> 2] = d29;
 __ZN7WebCore19enclosingLayoutRectERKNS_9FloatRectE(i9, i10);
 i10 = i11;
 i25 = i9;
 HEAP32[i10 >> 2] = HEAP32[i25 >> 2];
 HEAP32[i10 + 4 >> 2] = HEAP32[i25 + 4 >> 2];
 HEAP32[i10 + 8 >> 2] = HEAP32[i25 + 8 >> 2];
 HEAP32[i10 + 12 >> 2] = HEAP32[i25 + 12 >> 2];
 __ZN7WebCore13InlineFlowBox26addBoxShadowVisualOverflowERNS_10LayoutRectE(i1, i11);
 __ZN7WebCore13InlineFlowBox29addBorderOutsetVisualOverflowERNS_10LayoutRectE(i1, i11);
 i25 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i25 | 0) != 0) {
  i10 = i13 | 0;
  i3 = i13 + 4 | 0;
  i30 = i13 + 8 | 0;
  i31 = i13 + 12 | 0;
  i32 = i14 | 0;
  i33 = i15 | 0;
  i34 = i7 | 0;
  i35 = i7 + 4 | 0;
  i36 = i7 + 8 | 0;
  i37 = i7 + 12 | 0;
  i38 = i21 + 4 | 0;
  i39 = i19;
  i40 = i21 + 12 | 0;
  i41 = i19 + 8 | 0;
  i42 = i41;
  i43 = i8 + 4 | 0;
  i44 = i8 | 0;
  i45 = i22 | 0;
  i46 = i22 + 4 | 0;
  i47 = i19;
  i19 = i6 | 0;
  i48 = i6 + 4 | 0;
  i49 = i6 + 8 | 0;
  i50 = i6 + 12 | 0;
  i51 = i18 + 4 | 0;
  i52 = i16;
  i53 = i18 + 12 | 0;
  i54 = i16 + 8 | 0;
  i55 = i54;
  i56 = i16;
  i16 = i25;
  while (1) {
   i25 = i16 + 16 | 0;
   i57 = HEAP32[i25 >> 2] | 0;
   i58 = HEAP32[i57 + 20 >> 2] | 0;
   do {
    if (!((i58 & 25165824 | 0) == 16777216 | (i58 & 4096 | 0) != 0)) {
     if ((i58 & 768 | 0) == 256) {
      i59 = i16 + 20 | 0;
      if ((HEAP32[i16 + 32 >> 2] & 2048 | 0) == 0) {
       d28 = +HEAPF32[i16 + 24 >> 2];
       d60 = +HEAPF32[i59 >> 2];
       d61 = +HEAPF32[i16 + 28 >> 2];
       d62 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i16);
       d63 = d61;
       d64 = d60;
       d65 = d28;
      } else {
       d28 = +HEAPF32[i59 >> 2];
       d60 = +HEAPF32[i16 + 24 >> 2];
       d61 = +HEAPF32[i16 + 28 >> 2];
       d62 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i16);
       d63 = d61;
       d64 = d60;
       d65 = d28;
      }
      HEAPF32[i10 >> 2] = d65;
      HEAPF32[i3 >> 2] = d64;
      HEAPF32[i30 >> 2] = d63;
      HEAPF32[i31 >> 2] = d62;
      __ZN7WebCore19enclosingLayoutRectERKNS_9FloatRectE(i12, i13);
      __ZN7WebCore13InlineFlowBox24addTextBoxVisualOverflowEPNS_13InlineTextBoxERN3WTF7HashMapIPKS1_NSt3__14pairINS3_6VectorIPKNS_14SimpleFontDataELj0ENS3_15CrashOnOverflowEEENS_13GlyphOverflowEEENS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EENSJ_ISG_EEEERNS_10LayoutRectE(i1, i16, i4, i12);
      __ZN7WebCore10LayoutRect5uniteERKS0_(i11, i12);
      break;
     }
     if ((HEAP32[i57 + 24 >> 2] & 4 | 0) == 0) {
      __ZN7WebCore13InlineFlowBox24addReplacedChildOverflowEPKNS_9InlineBoxERNS_10LayoutRectES5_(i1, i16, i9, i11);
      break;
     }
     HEAP32[i32 >> 2] = i26;
     HEAP32[i33 >> 2] = i2;
     __ZN7WebCore13InlineFlowBox15computeOverflowENS_10LayoutUnitES1_RN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS2_6VectorIPKNS_14SimpleFontDataELj0ENS2_15CrashOnOverflowEEENS_13GlyphOverflowEEENS2_7PtrHashIS6_EENS2_10HashTraitsIS6_EENSJ_ISG_EEEE(i16, i14, i15, i4);
     if (__ZNK7WebCore22RenderLayerModelObject20hasSelfPaintingLayerEv(HEAP32[i25 >> 2] | 0) | 0) {
      i66 = i16 + 36 | 0;
     } else {
      i59 = i16 + 36 | 0;
      i67 = HEAP32[i59 >> 2] | 0;
      if ((i67 | 0) == 0) {
       if ((HEAP32[i16 + 32 >> 2] & 2048 | 0) == 0) {
        d68 = +HEAPF32[i16 + 28 >> 2];
        d69 = d29;
        d70 = +HEAPF32[i16 + 24 >> 2];
        d71 = d27;
       } else {
        d68 = d29;
        d69 = +HEAPF32[i16 + 28 >> 2];
        d70 = d27;
        d71 = +HEAPF32[i16 + 20 >> 2];
       }
       HEAPF32[i19 >> 2] = d71;
       HEAPF32[i48 >> 2] = d70;
       HEAPF32[i49 >> 2] = d69;
       HEAPF32[i50 >> 2] = d68;
       __ZN7WebCore19enclosingLayoutRectERKNS_9FloatRectE(i18, i6);
      } else {
       i72 = i67 + 20 | 0;
       HEAP32[i56 >> 2] = HEAP32[i72 >> 2];
       HEAP32[i56 + 4 >> 2] = HEAP32[i72 + 4 >> 2];
       HEAP32[i56 + 8 >> 2] = HEAP32[i72 + 8 >> 2];
       HEAP32[i56 + 12 >> 2] = HEAP32[i72 + 12 >> 2];
      }
      if ((HEAP32[(HEAP32[i25 >> 2] | 0) + 20 >> 2] & 8192 | 0) == 0) {
       i72 = HEAP32[i52 >> 2] | 0;
       i67 = HEAP32[i53 >> 2] | 0;
       i73 = HEAP32[i55 >> 2] | 0;
       HEAP32[i17 >> 2] = HEAP32[i51 >> 2];
       HEAP32[i17 + 4 >> 2] = i72;
       HEAP32[i54 >> 2] = i67;
       HEAP32[i54 + 4 >> 2] = i73;
      }
      __ZN7WebCore10LayoutRect5uniteERKS0_(i11, i18);
      i66 = i59;
     }
     i59 = HEAP32[i66 >> 2] | 0;
     if ((i59 | 0) == 0) {
      if ((HEAP32[i16 + 32 >> 2] & 2048 | 0) == 0) {
       d74 = +HEAPF32[i16 + 28 >> 2];
       d75 = d29;
       d76 = +HEAPF32[i16 + 24 >> 2];
       d77 = d27;
      } else {
       d74 = d29;
       d75 = +HEAPF32[i16 + 28 >> 2];
       d76 = d27;
       d77 = +HEAPF32[i16 + 20 >> 2];
      }
      HEAPF32[i34 >> 2] = d77;
      HEAPF32[i35 >> 2] = d76;
      HEAPF32[i36 >> 2] = d75;
      HEAPF32[i37 >> 2] = d74;
      __ZN7WebCore19enclosingLayoutRectERKNS_9FloatRectE(i21, i7);
     } else {
      i73 = i59 + 4 | 0;
      HEAP32[i47 >> 2] = HEAP32[i73 >> 2];
      HEAP32[i47 + 4 >> 2] = HEAP32[i73 + 4 >> 2];
      HEAP32[i47 + 8 >> 2] = HEAP32[i73 + 8 >> 2];
      HEAP32[i47 + 12 >> 2] = HEAP32[i73 + 12 >> 2];
     }
     i73 = HEAP32[i25 >> 2] | 0;
     if ((HEAP32[i73 + 20 >> 2] & 8192 | 0) == 0) {
      i59 = HEAP32[i39 >> 2] | 0;
      i67 = HEAP32[i40 >> 2] | 0;
      i72 = HEAP32[i42 >> 2] | 0;
      HEAP32[i20 >> 2] = HEAP32[i38 >> 2];
      HEAP32[i20 + 4 >> 2] = i59;
      HEAP32[i41 >> 2] = i67;
      HEAP32[i41 + 4 >> 2] = i72;
      i78 = HEAP32[i25 >> 2] | 0;
     } else {
      i78 = i73;
     }
     i73 = i78;
     i72 = (HEAP32[(HEAP32[i78 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
     if ((i72 | 0) == 3 | (i72 | 0) == 0) {
      __ZNK7WebCore20RenderBoxModelObject22relativePositionOffsetEv(i22, i73);
      i79 = HEAP32[i45 >> 2] | 0;
      i80 = HEAP32[i46 >> 2] | 0;
     } else {
      __ZNK7WebCore20RenderBoxModelObject22relativePositionOffsetEv(i8, i73);
      i73 = HEAP32[i43 >> 2] | 0;
      i72 = HEAP32[i44 >> 2] | 0;
      HEAP32[i45 >> 2] = i73;
      HEAP32[i46 >> 2] = i72;
      i79 = i73;
      i80 = i72;
     }
     HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + i79;
     HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + i80;
     __ZN7WebCore10LayoutRect5uniteERKS0_(i9, i21);
    }
   } while (0);
   i16 = HEAP32[i16 + 4 >> 2] | 0;
   if ((i16 | 0) == 0) {
    break;
   }
  }
 }
 HEAP32[i23 >> 2] = i26;
 HEAP32[i24 >> 2] = i2;
 __ZN7WebCore13InlineFlowBox27setOverflowFromLogicalRectsERKNS_10LayoutRectES3_NS_10LayoutUnitES4_(i1, i9, i11, i23, i24);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore13InlineFlowBox9paintMaskERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, d41 = +0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, d47 = +0, d48 = +0, d49 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i5 | 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i11 = i10 | 0;
 i12 = i10;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i15 = i14 | 0;
 i16 = i14;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i19 = i18 | 0;
 i20 = i18;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i22 = i1 + 16 | 0;
 i23 = HEAP32[i22 >> 2] | 0;
 i24 = HEAP32[i2 + 28 >> 2] | 0;
 if (!((i24 | 0) == 0 | (i24 | 0) == (i23 | 0))) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[(HEAP32[i23 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i2 + 20 >> 2] | 0) != 11) {
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore13InlineFlowBox16roundedFrameRectEv(i5, i1);
 i23 = HEAP32[i6 >> 2] | 0;
 i24 = HEAP32[i6 + 4 >> 2] | 0;
 i6 = i5 + 8 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 i25 = HEAP32[i6 + 4 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 664 >> 2] | 0) == 2) {
   i26 = i23;
   i27 = i24;
   i28 = i25;
   i29 = i5;
  } else {
   i6 = HEAP32[i1 + 56 >> 2] | 0;
   if ((i6 & 4 | 0) != 0 | (i6 & 24 | 0) == 24) {
    i26 = i23;
    i27 = i24;
    i28 = i25;
    i29 = i5;
    break;
   }
   i6 = __ZNK7WebCore9InlineBox4rootEv(i1 | 0) | 0;
   i30 = (HEAP32[i1 + 32 >> 2] & 2048 | 0) == 0;
   i31 = i30 ? i23 : i24;
   i32 = 0;
   i33 = i30 ? i5 : i25;
   i30 ? i25 : i32;
   i32 = HEAP32[i6 + 76 >> 2] | 0;
   i34 = i33 + i31 | 0;
   i33 = HEAP32[i6 + 72 >> 2] | 0;
   i6 = (i33 | 0) < (i31 | 0) ? i31 : i33;
   i33 = ((i34 | 0) < (i32 | 0) ? i34 : i32) - i6 | 0;
   if (i30) {
    i26 = i6;
    i27 = i24;
    i28 = i25 & -1 | 0;
    i29 = i33 | i5 & 0;
    break;
   } else {
    i26 = i23;
    i27 = i6;
    i28 = i33 | i25 & 0;
    i29 = i5 & -1 | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = i26;
 HEAP32[i9 + 4 >> 2] = i27;
 i27 = i7 + 8 | 0;
 HEAP32[i27 >> 2] = i29;
 HEAP32[i27 + 4 >> 2] = i28;
 __ZN7WebCore9InlineBox18flipForWritingModeERNS_10LayoutRectE(i1 | 0, i9);
 i9 = (HEAP32[i8 >> 2] | 0) + (HEAP32[i3 >> 2] | 0) | 0;
 i27 = (HEAP32[i8 + 4 >> 2] | 0) + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i22 >> 2] | 0;
 i8 = (HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 20 >> 2] | 0) + 164 | 0;
 i7 = HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP32[i3 + 20 >> 2] & 32768 | 0) == 0) {
  i35 = 0;
  i36 = i3;
 } else {
  i26 = __ZNK7WebCore11RenderLayer17hasCompositedMaskEv(HEAP32[i3 + 40 >> 2] | 0) | 0;
  i35 = i26;
  i36 = HEAP32[i22 >> 2] | 0;
 }
 i26 = __ZNK7WebCore9FrameView13paintBehaviorEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i36 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) | 0;
 if (i35) {
  if ((i26 & 4 | 0) == 0) {
   i37 = 0;
   i38 = 2;
  } else {
   i39 = 13;
  }
 } else {
  i39 = 13;
 }
 do {
  if ((i39 | 0) == 13) {
   i26 = HEAP32[(HEAP32[(HEAP32[i22 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0;
   L24 : do {
    if ((i7 | 0) == 0) {
     i39 = 17;
    } else {
     i35 = i26 + 116 | 0;
     while (1) {
      if ((HEAP32[i35 + 4 >> 2] | 0) != 0) {
       break L24;
      }
      i36 = HEAP32[i35 >> 2] | 0;
      if ((i36 | 0) == 0) {
       i39 = 17;
       break;
      } else {
       i35 = i36;
      }
     }
    }
   } while (0);
   if ((i39 | 0) == 17) {
    if ((HEAP32[i26 + 116 >> 2] | 0) == 0) {
     i37 = 0;
     i38 = 7;
     break;
    }
   }
   i35 = i2 | 0;
   __ZN7WebCore15GraphicsContext21setCompositeOperationENS_17CompositeOperatorENS_9BlendModeE(HEAP32[i35 >> 2] | 0, 7, 0);
   __ZN7WebCore15GraphicsContext22beginTransparencyLayerEf(HEAP32[i35 >> 2] | 0, +1);
   i37 = 1;
   i38 = 2;
  }
 } while (0);
 i35 = i9 | 0;
 i36 = i27 | 0;
 HEAP32[i11 >> 2] = i35;
 HEAP32[i11 + 4 >> 2] = i36;
 i11 = i10 + 8 | 0;
 HEAP32[i11 >> 2] = i29;
 HEAP32[i11 + 4 >> 2] = i28;
 HEAP32[i13 >> 2] = 0;
 HEAP8[i13 + 4 | 0] = 0;
 __ZN7WebCore13InlineFlowBox15paintFillLayersERKNS_9PaintInfoERKNS_5ColorEPKNS_9FillLayerERKNS_10LayoutRectENS_17CompositeOperatorE(i1, i2, i13, (HEAP32[(HEAP32[(HEAP32[i22 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 116 | 0, i12, i38);
 do {
  if ((i7 | 0) != 0) {
   i13 = HEAP32[i22 >> 2] | 0;
   if (!(FUNCTION_TABLE_iiif[HEAP32[(HEAP32[i7 >> 2] | 0) + 12 >> 2] & 1](i7, i13, +HEAPF32[(HEAP32[(HEAP32[i13 + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2]) | 0)) {
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 16 >> 2] & 31](i7) | 0)) {
    break;
   }
   i13 = HEAP32[i1 + 48 >> 2] | 0;
   do {
    if ((i13 | 0) == 0) {
     if ((HEAP32[i1 + 52 >> 2] | 0) != 0) {
      i40 = 0;
      i39 = 28;
      break;
     }
     i11 = HEAP32[i22 >> 2] | 0;
     i10 = HEAP32[i2 >> 2] | 0;
     HEAP32[i15 >> 2] = i35;
     HEAP32[i15 + 4 >> 2] = i36;
     i3 = i14 + 8 | 0;
     HEAP32[i3 >> 2] = i29;
     HEAP32[i3 + 4 >> 2] = i28;
     __ZN7WebCore20RenderBoxModelObject19paintNinePieceImageEPNS_15GraphicsContextERKNS_10LayoutRectEPKNS_11RenderStyleERKNS_14NinePieceImageENS_17CompositeOperatorE(i11, i10, i16, HEAP32[i11 + 36 >> 2] | 0, i8, i38) | 0;
    } else {
     i11 = 0;
     i10 = i13;
     while (1) {
      d41 = +(i11 | 0) + +HEAPF32[i10 + 28 >> 2];
      do {
       if (d41 < +2147483647) {
        if (d41 <= +-2147483648) {
         i42 = -2147483648;
         break;
        }
        i42 = ~~d41;
       } else {
        i42 = 2147483647;
       }
      } while (0);
      i3 = HEAP32[i10 + 48 >> 2] | 0;
      if ((i3 | 0) == 0) {
       break;
      } else {
       i11 = i42;
       i10 = i3;
      }
     }
     if ((i1 | 0) == 0) {
      i43 = i42;
      i44 = i42;
      i39 = 37;
     } else {
      i40 = i42;
      i39 = 28;
     }
    }
   } while (0);
   if ((i39 | 0) == 28) {
    i13 = i40;
    i26 = i1;
    while (1) {
     d41 = +(i13 | 0) + +HEAPF32[i26 + 28 >> 2];
     do {
      if (d41 < +2147483647) {
       if (d41 <= +-2147483648) {
        i45 = -2147483648;
        break;
       }
       i45 = ~~d41;
      } else {
       i45 = 2147483647;
      }
     } while (0);
     i10 = HEAP32[i26 + 52 >> 2] | 0;
     if ((i10 | 0) == 0) {
      i43 = i45;
      i44 = i40;
      i39 = 37;
      break;
     } else {
      i13 = i45;
      i26 = i10;
     }
    }
   }
   if ((i39 | 0) == 37) {
    i26 = HEAP32[i1 + 32 >> 2] & 2048;
    i13 = (i26 | 0) != 0;
    if ((i26 | 0) == 0) {
     i46 = i43;
    } else {
     i46 = i28;
    }
    __ZN7WebCoreL30clipRectForNinePieceImageStripEPNS_13InlineFlowBoxERKNS_14NinePieceImageERKNS_10LayoutRectE(i17, i1, i8, i12);
    i26 = i2 | 0;
    i10 = HEAP32[i26 >> 2] | 0;
    __ZN7WebCore15GraphicsContext4saveEv(i10);
    i11 = HEAP32[i26 >> 2] | 0;
    d41 = +(HEAP32[i17 + 8 >> 2] | 0);
    d47 = +(HEAP32[i17 + 12 >> 2] | 0);
    d48 = +(+(HEAP32[i17 >> 2] | 0));
    d49 = +(+(HEAP32[i17 + 4 >> 2] | 0));
    HEAPF32[i19 >> 2] = d48;
    HEAPF32[i19 + 4 >> 2] = d49;
    i3 = i18 + 8 | 0;
    d49 = +d41;
    d41 = +d47;
    HEAPF32[i3 >> 2] = d49;
    HEAPF32[i3 + 4 >> 2] = d41;
    __ZN7WebCore15GraphicsContext4clipERKNS_9FloatRectE(i11, i20);
    i11 = HEAP32[i22 >> 2] | 0;
    i3 = HEAP32[i26 >> 2] | 0;
    HEAP32[i21 >> 2] = i9 - (i13 ? i44 : 0);
    HEAP32[i21 + 4 >> 2] = i27 - (i13 ? 0 : i44);
    HEAP32[i21 + 8 >> 2] = i13 ? i43 : i29;
    HEAP32[i21 + 12 >> 2] = i46;
    __ZN7WebCore20RenderBoxModelObject19paintNinePieceImageEPNS_15GraphicsContextERKNS_10LayoutRectEPKNS_11RenderStyleERKNS_14NinePieceImageENS_17CompositeOperatorE(i11, i3, i21, HEAP32[i11 + 36 >> 2] | 0, i8, i38) | 0;
    __ZN7WebCore15GraphicsContext7restoreEv(i10);
   }
   if (!i37) {
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore15GraphicsContext20endTransparencyLayerEv(HEAP32[i2 >> 2] | 0);
   STACKTOP = i4;
   return;
  }
 } while (0);
 if (!i37) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore15GraphicsContext20endTransparencyLayerEv(HEAP32[i2 >> 2] | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore13InlineFlowBox30placeBoxRangeInInlineDirectionEPNS_9InlineBoxES2_RfS3_S3_RbRN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS5_6VectorIPKNS_14SimpleFontDataELj0ENS5_15CrashOnOverflowEEENS_13GlyphOverflowEEENS5_7PtrHashIS9_EENS5_10HashTraitsIS9_EENSM_ISJ_EEEE(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, d30 = +0, i31 = 0, i32 = 0, i33 = 0, d34 = +0, i35 = 0, d36 = +0, i37 = 0, d38 = +0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i10 = i9 | 0;
 i11 = i9 + 8 | 0;
 i12 = i9 + 16 | 0;
 i13 = i9 + 24 | 0;
 if ((i2 | 0) == 0 | (i2 | 0) == (i3 | 0)) {
  d14 = +HEAPF32[i4 >> 2];
  STACKTOP = i9;
  return +d14;
 }
 i15 = i1 + 32 | 0;
 i16 = i1 | 0;
 i1 = i12 | 0;
 i17 = i13 | 0;
 i18 = i10 | 0;
 i19 = i11 | 0;
 i20 = i2;
 while (1) {
  i2 = i20 + 16 | 0;
  i21 = HEAP32[i2 >> 2] | 0;
  i22 = HEAP32[i21 + 20 >> 2] | 0;
  do {
   if ((i22 & 768 | 0) == 256) {
    i23 = i21 + 44 | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((HEAP32[i24 + 4 >> 2] | 0) != 0) {
     i25 = i20 + 44 | 0;
     do {
      if ((HEAP8[i7] & 1) != 0) {
       i26 = HEAP32[i25 >> 2] | 0;
       if ((HEAP32[i24 + 16 >> 2] & 32 | 0) == 0) {
        i27 = HEAP16[(HEAP32[i24 + 8 >> 2] | 0) + (i26 << 1) >> 1] | 0;
       } else {
        i27 = HEAPU8[(HEAP32[i24 + 8 >> 2] | 0) + i26 | 0] | 0;
       }
       if ((i27 & 65535) >>> 0 < 128 >>> 0) {
        if ((i27 & 65535) >>> 0 >= 33 >>> 0) {
         break;
        }
        if (i27 << 16 >> 16 == 32 | (i27 - 9 & 65535) >>> 0 < 5 >>> 0) {
         i28 = i21;
        } else {
         break;
        }
       } else {
        if ((_u_charDirection(i27 & 65535) | 0) != 9) {
         break;
        }
        i28 = HEAP32[i2 >> 2] | 0;
       }
       i26 = HEAP32[i28 + 8 >> 2] | 0;
       do {
        if ((HEAP32[i20 + 32 >> 2] & 1 | 0) == 0) {
         i29 = HEAP32[i26 + 36 >> 2] | 0;
        } else {
         if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i26 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
          i29 = HEAP32[i26 + 36 >> 2] | 0;
          break;
         } else {
          i29 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i26) | 0;
          break;
         }
        }
       } while (0);
       d30 = +HEAPF32[(__ZNK7WebCore11RenderStyle4fontEv(i29) | 0) + 32 >> 2];
       HEAPF32[i4 >> 2] = d30 + +HEAPF32[i4 >> 2];
      }
     } while (0);
     i24 = HEAP16[i20 + 48 >> 1] | 0;
     i26 = HEAP32[i25 >> 2] | 0;
     if (i24 << 16 >> 16 == 0) {
      i31 = i26;
     } else {
      i31 = (i24 & 65535) - 1 + i26 | 0;
     }
     i26 = HEAP32[i23 >> 2] | 0;
     if ((HEAP32[i26 + 16 >> 2] & 32 | 0) == 0) {
      i32 = HEAP16[(HEAP32[i26 + 8 >> 2] | 0) + (i31 << 1) >> 1] | 0;
     } else {
      i32 = HEAPU8[(HEAP32[i26 + 8 >> 2] | 0) + i31 | 0] | 0;
     }
     do {
      if ((i32 & 65535) >>> 0 < 128 >>> 0) {
       if ((i32 & 65535) >>> 0 >= 33 >>> 0) {
        i33 = 0;
        break;
       }
       if (i32 << 16 >> 16 == 32) {
        i33 = 1;
        break;
       }
       i33 = (i32 - 9 & 65535) >>> 0 < 5 >>> 0;
      } else {
       i33 = (_u_charDirection(i32 & 65535) | 0) == 9;
      }
     } while (0);
     HEAP8[i7] = i33 & 1 ^ 1;
    }
    d30 = +HEAPF32[i4 >> 2];
    if ((HEAP32[i20 + 32 >> 2] & 2048 | 0) == 0) {
     HEAPF32[i20 + 24 >> 2] = d30;
    } else {
     HEAPF32[i20 + 20 >> 2] = d30;
    }
    if ((HEAP32[i15 >> 2] & 16384 | 0) != 0) {
     d30 = +HEAPF32[i5 >> 2];
     d34 = +HEAPF32[i4 >> 2];
     HEAPF32[i5 >> 2] = d30 < d34 ? d30 : d34;
    }
    d34 = +HEAPF32[i20 + 28 >> 2] + +HEAPF32[i4 >> 2];
    HEAPF32[i4 >> 2] = d34;
    if ((HEAP32[i15 >> 2] & 16384 | 0) == 0) {
     break;
    }
    d30 = +HEAPF32[i6 >> 2];
    HEAPF32[i6 >> 2] = d34 < d30 ? d30 : d34;
   } else {
    if ((i22 & 25165824 | 0) == 16777216) {
     if ((HEAP32[(HEAP32[(HEAP32[i21 + 8 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) != 0) {
      d34 = +HEAPF32[i4 >> 2];
      if ((HEAP32[i20 + 32 >> 2] & 2048 | 0) == 0) {
       HEAPF32[i20 + 24 >> 2] = d34;
       break;
      } else {
       HEAPF32[i20 + 20 >> 2] = d34;
       break;
      }
     }
     i23 = __ZNK7WebCore13RootInlineBox9blockFlowEv(__ZN7WebCore9InlineBox4rootEv(i16) | 0) | 0;
     i25 = (HEAP32[(HEAP32[i23 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
     if ((i25 | 0) == 3 | (i25 | 0) == 0) {
      i35 = i23 + 52 | 0;
     } else {
      i35 = i23 + 56 | 0;
     }
     d34 = +(HEAP32[i35 >> 2] | 0) - +HEAPF32[i4 >> 2];
     if ((HEAP32[i20 + 32 >> 2] & 2048 | 0) == 0) {
      HEAPF32[i20 + 24 >> 2] = d34;
      break;
     } else {
      HEAPF32[i20 + 20 >> 2] = d34;
      break;
     }
    }
    if ((HEAP32[i21 + 24 >> 2] & 4 | 0) != 0) {
     i23 = i20;
     i25 = i20 + 56 | 0;
     do {
      if ((HEAP32[i25 >> 2] & 1 | 0) == 0) {
       HEAP32[i18 >> 2] = 0;
      } else {
       i26 = i21;
       i24 = HEAP32[i21 >> 2] | 0;
       if ((HEAP32[i20 + 32 >> 2] & 2048 | 0) == 0) {
        FUNCTION_TABLE_vii[HEAP32[i24 + 768 >> 2] & 7](i10, i26);
        break;
       } else {
        FUNCTION_TABLE_vii[HEAP32[i24 + 776 >> 2] & 7](i10, i26);
        break;
       }
      }
     } while (0);
     d34 = +HEAPF32[i4 >> 2] + +(HEAP32[i18 >> 2] | 0);
     HEAPF32[i4 >> 2] = d34;
     if ((HEAP32[i15 >> 2] & 16384 | 0) == 0) {
      d36 = d34;
     } else {
      d30 = +HEAPF32[i5 >> 2];
      HEAPF32[i5 >> 2] = d30 < d34 ? d30 : d34;
      d36 = +HEAPF32[i4 >> 2];
     }
     d34 = +__ZN7WebCore13InlineFlowBox27placeBoxesInInlineDirectionEfRbRN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS2_6VectorIPKNS_14SimpleFontDataELj0ENS2_15CrashOnOverflowEEENS_13GlyphOverflowEEENS2_7PtrHashIS6_EENS2_10HashTraitsIS6_EENSJ_ISG_EEEE(i23, d36, i7, i8);
     HEAPF32[i4 >> 2] = d34;
     if ((HEAP32[i15 >> 2] & 16384 | 0) != 0) {
      d30 = +HEAPF32[i6 >> 2];
      HEAPF32[i6 >> 2] = d34 < d30 ? d30 : d34;
     }
     do {
      if ((HEAP32[i25 >> 2] & 2 | 0) == 0) {
       HEAP32[i19 >> 2] = 0;
      } else {
       i26 = HEAP32[i2 >> 2] | 0;
       i24 = i26;
       i37 = HEAP32[i26 >> 2] | 0;
       if ((HEAP32[i20 + 32 >> 2] & 2048 | 0) == 0) {
        FUNCTION_TABLE_vii[HEAP32[i37 + 772 >> 2] & 7](i11, i24);
        break;
       } else {
        FUNCTION_TABLE_vii[HEAP32[i37 + 780 >> 2] & 7](i11, i24);
        break;
       }
      }
     } while (0);
     HEAPF32[i4 >> 2] = +HEAPF32[i4 >> 2] + +(HEAP32[i19 >> 2] | 0);
     break;
    }
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 108 >> 2] & 31](i21) | 0) {
     if (!(__ZNK7WebCore16RenderListMarker8isInsideEv(HEAP32[i2 >> 2] | 0) | 0)) {
      break;
     }
    }
    i25 = HEAP32[i2 >> 2] | 0;
    i23 = i25;
    i24 = HEAP32[i25 >> 2] | 0;
    if ((HEAP32[i15 >> 2] & 2048 | 0) == 0) {
     FUNCTION_TABLE_vii[HEAP32[i24 + 768 >> 2] & 7](i12, i23);
    } else {
     FUNCTION_TABLE_vii[HEAP32[i24 + 776 >> 2] & 7](i12, i23);
    }
    i23 = HEAP32[i2 >> 2] | 0;
    i24 = i23;
    i25 = HEAP32[i23 >> 2] | 0;
    if ((HEAP32[i15 >> 2] & 2048 | 0) == 0) {
     FUNCTION_TABLE_vii[HEAP32[i25 + 772 >> 2] & 7](i13, i24);
    } else {
     FUNCTION_TABLE_vii[HEAP32[i25 + 780 >> 2] & 7](i13, i24);
    }
    d34 = +HEAPF32[i4 >> 2] + +(HEAP32[i1 >> 2] | 0);
    HEAPF32[i4 >> 2] = d34;
    if ((HEAP32[i20 + 32 >> 2] & 2048 | 0) == 0) {
     HEAPF32[i20 + 24 >> 2] = d34;
    } else {
     HEAPF32[i20 + 20 >> 2] = d34;
    }
    if ((HEAP32[i15 >> 2] & 16384 | 0) != 0) {
     d34 = +HEAPF32[i5 >> 2];
     d30 = +HEAPF32[i4 >> 2];
     HEAPF32[i5 >> 2] = d34 < d30 ? d34 : d30;
    }
    d30 = +HEAPF32[i20 + 28 >> 2] + +HEAPF32[i4 >> 2];
    HEAPF32[i4 >> 2] = d30;
    if ((HEAP32[i15 >> 2] & 16384 | 0) == 0) {
     d38 = d30;
    } else {
     d34 = +HEAPF32[i6 >> 2];
     HEAPF32[i6 >> 2] = d30 < d34 ? d34 : d30;
     d38 = +HEAPF32[i4 >> 2];
    }
    HEAPF32[i4 >> 2] = d38 + +(HEAP32[i17 >> 2] | 0);
    HEAP8[i7] = 1;
   }
  } while (0);
  i20 = HEAP32[i20 + 4 >> 2] | 0;
  if ((i20 | 0) == 0 | (i20 | 0) == (i3 | 0)) {
   break;
  }
 }
 d14 = +HEAPF32[i4 >> 2];
 STACKTOP = i9;
 return +d14;
}
function __ZN7WebCore13InlineFlowBox5paintERNS_9PaintInfoERKNS_11LayoutPointENS_10LayoutUnitES6_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0, d18 = +0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
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
 i8 = i6 + 16 | 0;
 i9 = i6 + 24 | 0;
 i10 = i6 + 40 | 0;
 i11 = i6 + 56 | 0;
 i12 = i6 + 72 | 0;
 i13 = i6 + 80 | 0;
 i14 = i6 + 128 | 0;
 i15 = i6 + 136 | 0;
 i16 = HEAP32[i4 >> 2] | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 i5 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i5 | 0) == 0) {
  if ((HEAP32[i1 + 32 >> 2] & 2048 | 0) == 0) {
   d17 = +HEAPF32[i1 + 24 >> 2];
   d18 = +HEAPF32[i1 + 28 >> 2];
   HEAPF32[i9 >> 2] = +(i16 | 0);
   HEAPF32[i9 + 4 >> 2] = d17;
   HEAPF32[i9 + 8 >> 2] = +(i4 - i16 | 0);
   HEAPF32[i9 + 12 >> 2] = d18;
  } else {
   d18 = +HEAPF32[i1 + 28 >> 2];
   HEAPF32[i9 >> 2] = +HEAPF32[i1 + 20 >> 2];
   HEAPF32[i9 + 4 >> 2] = +(i16 | 0);
   HEAPF32[i9 + 8 >> 2] = d18;
   HEAPF32[i9 + 12 >> 2] = +(i4 - i16 | 0);
  }
  __ZN7WebCore19enclosingLayoutRectERKNS_9FloatRectE(i10, i9);
 } else {
  i9 = i10;
  i19 = i5 + 20 | 0;
  HEAP32[i9 >> 2] = HEAP32[i19 >> 2];
  HEAP32[i9 + 4 >> 2] = HEAP32[i19 + 4 >> 2];
  HEAP32[i9 + 8 >> 2] = HEAP32[i19 + 8 >> 2];
  HEAP32[i9 + 12 >> 2] = HEAP32[i19 + 12 >> 2];
 }
 i19 = i1 + 16 | 0;
 i9 = i2 + 20 | 0;
 i5 = __ZNK7WebCore12RenderObject18maximalOutlineSizeENS_10PaintPhaseE(HEAP32[i19 >> 2] | 0, HEAP32[i9 >> 2] | 0) | 0;
 i20 = i10 | 0;
 HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - i5;
 i21 = i10 + 8 | 0;
 i22 = i5 << 1;
 HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + i22;
 i21 = i10 + 4 | 0;
 HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) - i5;
 i5 = i10 + 12 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + i22;
 i22 = i1 | 0;
 __ZN7WebCore9InlineBox18flipForWritingModeERNS_10LayoutRectE(i22, i10);
 i5 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + (HEAP32[i3 >> 2] | 0);
 HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + i5;
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i11, i10);
 if (!(__ZNK7WebCore7IntRect10intersectsERKS0_(i2 + 4 | 0, i11) | 0)) {
  STACKTOP = i6;
  return;
 }
 i11 = HEAP32[i9 >> 2] | 0;
 L12 : do {
  if ((i11 | 0) == 5 | (i11 | 0) == 7) {
   i10 = HEAP32[i19 >> 2] | 0;
   i5 = HEAP32[i10 + 36 >> 2] | 0;
   if ((HEAP32[i5 + 40 >> 2] & 6144 | 0) != 0) {
    i23 = 49;
    break;
   }
   if ((HEAP32[i10 + 20 >> 2] & 768 | 0) == 256) {
    i24 = HEAP32[(HEAP32[i10 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i24 = i5;
   }
   i5 = HEAP32[(HEAP32[i24 + 12 >> 2] | 0) + 64 >> 2] | 0;
   if (!((i5 & 131070 | 0) != 0 & (i5 & 2013265920 | 0) != 0 & (i5 & 1879048192) >>> 0 > 134217728 >>> 0)) {
    if (!(__ZNK7WebCore12RenderObject20hasOutlineAnnotationEv(i10) | 0)) {
     i23 = 49;
     break;
    }
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 48 >> 2] & 31](i22) | 0) {
    i23 = 49;
    break;
   }
   i10 = HEAP32[i19 >> 2] | 0;
   i5 = i10;
   do {
    if ((__ZNK7WebCore20RenderBoxModelObject12continuationEv(i10) | 0) == 0) {
     i21 = HEAP32[i10 + 20 >> 2] | 0;
     if ((i21 & 128 | 0) != 0) {
      break;
     }
     i20 = HEAP32[i10 + 4 >> 2] | 0;
     if ((i20 | 0) == 0) {
      break;
     }
     i25 = i20 + 32 | 0;
     if ((HEAP32[i20 + 12 >> 2] & 2048 | 0) == 0) {
      i26 = i25 | 0;
     } else {
      i26 = HEAP32[i25 >> 2] | 0;
     }
     if ((HEAP32[i26 >> 2] | 0) == (i10 | 0)) {
      break;
     }
     if ((i21 & 1024 | 0) != 0) {
      i23 = 24;
     }
    } else {
     i23 = 24;
    }
   } while (0);
   L32 : do {
    if ((i23 | 0) == 24) {
     i21 = __ZNK7WebCore12RenderObject15containingBlockEv(HEAP32[i19 >> 2] | 0) | 0;
     if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i21) | 0)) {
      break;
     }
     i25 = __ZNK7WebCore12RenderObject15containingBlockEv(i21) | 0;
     i21 = HEAP32[i19 >> 2] | 0;
     i20 = i21;
     i27 = i25 | 0;
     if ((i20 | 0) == (i27 | 0)) {
      i28 = i21;
     } else {
      i21 = i20;
      while (1) {
       if (__ZNK7WebCore22RenderLayerModelObject20hasSelfPaintingLayerEv(i21 | 0) | 0) {
        break L32;
       }
       i21 = __ZNK7WebCore12RenderObject23enclosingBoxModelObjectEv(HEAP32[i21 + 8 >> 2] | 0) | 0;
       if ((i21 | 0) == (i27 | 0)) {
        break;
       }
      }
      i28 = HEAP32[i19 >> 2] | 0;
     }
     if ((HEAP32[i28 + 20 >> 2] & 128 | 0) == 0) {
      i29 = HEAP32[i28 + 4 >> 2] | 0;
     } else {
      i29 = 0;
     }
     i27 = i29 + 32 | 0;
     if ((HEAP32[i29 + 12 >> 2] & 2048 | 0) == 0) {
      i30 = i27 | 0;
     } else {
      i30 = HEAP32[i27 >> 2] | 0;
     }
     __ZN7WebCore11RenderBlock26addContinuationWithOutlineEPNS_12RenderInlineE(i25, HEAP32[i30 >> 2] | 0);
     i23 = 49;
     break L12;
    }
   } while (0);
   i27 = HEAP32[i10 + 20 >> 2] | 0;
   do {
    if ((i27 & 128 | 0) == 0) {
     i21 = HEAP32[i10 + 4 >> 2] | 0;
     if ((i21 | 0) == 0) {
      break;
     }
     i20 = i21 + 32 | 0;
     if ((HEAP32[i21 + 12 >> 2] & 2048 | 0) == 0) {
      i31 = i20 | 0;
     } else {
      i31 = HEAP32[i20 >> 2] | 0;
     }
     if ((HEAP32[i31 >> 2] | 0) == (i10 | 0)) {
      break;
     }
     if ((i27 & 1024 | 0) != 0) {
      i23 = 49;
      break L12;
     }
    }
   } while (0);
   i27 = HEAP32[i2 + 36 >> 2] | 0;
   HEAP32[i12 >> 2] = i5;
   HEAP32[i8 >> 2] = HEAP32[i27 + 28 >> 2];
   __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore12RenderInlineELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E3addINS_21ListHashSetTranslatorISA_EES4_PNS_24ListHashSetNodeAllocatorIS4_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS6_S6_S7_SB_SD_SD_EEEEOT0_OT1_(i7, i27 | 0, i12, i8);
   if ((HEAP8[i7 + 8 | 0] & 1) == 0) {
    i23 = 49;
    break;
   }
   i10 = HEAP32[HEAP32[i7 >> 2] >> 2] | 0;
   i20 = i27 + 24 | 0;
   HEAP32[i10 + 4 >> 2] = HEAP32[i20 >> 2];
   HEAP32[i10 + 8 >> 2] = 0;
   i21 = HEAP32[i20 >> 2] | 0;
   if ((i21 | 0) == 0) {
    HEAP32[i27 + 20 >> 2] = i10;
   } else {
    HEAP32[i21 + 8 >> 2] = i10;
   }
   HEAP32[i20 >> 2] = i10;
   i23 = 49;
  } else if ((i11 | 0) == 11) {
   __ZN7WebCore13InlineFlowBox9paintMaskERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3);
   STACKTOP = i6;
   return;
  } else if ((i11 | 0) == 6) {
   i32 = 5;
  } else {
   __ZN7WebCore13InlineFlowBox19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3);
   i23 = 49;
  }
 } while (0);
 do {
  if ((i23 | 0) == 49) {
   i11 = HEAP32[i9 >> 2] | 0;
   if ((i11 | 0) == 11) {
    STACKTOP = i6;
    return;
   } else if ((i11 | 0) == 6) {
    i32 = 5;
    break;
   } else {
    i32 = i11;
    break;
   }
  }
 } while (0);
 _memcpy(i13 | 0, i2 | 0, 48) | 0;
 HEAP32[i13 + 20 >> 2] = i32;
 i2 = i13 + 28 | 0;
 i9 = HEAP32[i2 >> 2] | 0;
 if ((i9 | 0) != 0 & (i9 | 0) == (HEAP32[i19 >> 2] | 0)) {
  HEAP32[i2 >> 2] = 0;
 }
 if ((i32 | 0) == 7) {
  STACKTOP = i6;
  return;
 }
 i32 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i32 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i1 = i14 | 0;
 i2 = i15 | 0;
 i19 = i32;
 while (1) {
  i32 = HEAP32[i19 + 16 >> 2] | 0;
  if ((HEAP32[i32 + 20 >> 2] & 768 | 0) == 256) {
   i23 = 58;
  } else {
   if (!(__ZNK7WebCore22RenderLayerModelObject20hasSelfPaintingLayerEv(i32) | 0)) {
    i23 = 58;
   }
  }
  if ((i23 | 0) == 58) {
   i23 = 0;
   i32 = HEAP32[(HEAP32[i19 >> 2] | 0) + 28 >> 2] | 0;
   HEAP32[i1 >> 2] = i16;
   HEAP32[i2 >> 2] = i4;
   FUNCTION_TABLE_viiiii[i32 & 3](i19, i13, i3, i14, i15);
  }
  i19 = HEAP32[i19 + 4 >> 2] | 0;
  if ((i19 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore13InlineFlowBox32computeUnderAnnotationAdjustmentENS_10LayoutUnitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, d31 = +0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, d36 = +0, i37 = 0, i38 = 0, i39 = 0, d40 = +0, i41 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i1 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = HEAP32[i2 + 40 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = i6 | 0;
 i13 = i5 | 0;
 i14 = i10;
 i15 = i9;
 i16 = i7;
 i17 = i8;
 i18 = i12;
 i12 = 0;
 while (1) {
  i19 = i18 + 16 | 0;
  L6 : do {
   if ((HEAP32[(HEAP32[i19 >> 2] | 0) + 20 >> 2] & 25165824 | 0) == 16777216) {
    i20 = i12;
   } else {
    i21 = i18;
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 40 >> 2] & 31](i18) | 0) {
     HEAP32[i3 >> 2] = i2;
     __ZNK7WebCore13InlineFlowBox32computeUnderAnnotationAdjustmentENS_10LayoutUnitE(i5, i18, i6);
     i22 = HEAP32[((i12 | 0) < (HEAP32[i13 >> 2] | 0) ? i5 : i1) >> 2] | 0;
     HEAP32[i11 >> 2] = i22;
     i23 = i22;
    } else {
     i23 = i12;
    }
    i22 = HEAP32[i19 >> 2] | 0;
    do {
     if ((HEAP32[i22 + 20 >> 2] & 2048 | 0) == 0) {
      i24 = i23;
     } else {
      if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 168 >> 2] & 31](i22) | 0)) {
       i24 = i23;
       break;
      }
      i25 = HEAP32[i19 >> 2] | 0;
      if ((HEAP32[i25 + 20 >> 2] & 768 | 0) == 256) {
       i26 = HEAP32[(HEAP32[i25 + 8 >> 2] | 0) + 36 >> 2] | 0;
      } else {
       i26 = HEAP32[i25 + 36 >> 2] | 0;
      }
      if ((HEAP32[(HEAP32[i26 + 24 >> 2] | 0) + 92 >> 2] & 1048576 | 0) == 0) {
       i24 = i23;
       break;
      }
      i27 = __ZNK7WebCore13RenderRubyRun8rubyTextEv(i25) | 0;
      if ((i27 | 0) == 0) {
       i20 = i23;
       break L6;
      }
      i28 = (HEAP32[(HEAP32[i27 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
      if ((((HEAP32[(HEAP32[i25 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3) - 2 | 0) >>> 0 < 2 >>> 0) {
       if ((i28 | 0) == 3 | (i28 | 0) == 0) {
        i29 = i27 + 48 | 0;
       } else {
        i29 = i27 + 44 | 0;
       }
       i25 = HEAP32[i27 + 104 >> 2] | 0;
       if ((i25 | 0) == 0) {
        i30 = 0;
       } else {
        i30 = HEAP32[i25 + 72 >> 2] | 0;
       }
       i25 = i30 + (HEAP32[i29 >> 2] | 0) | 0;
       if ((i25 | 0) > -1) {
        i20 = i23;
        break L6;
       }
       d31 = +(i25 | 0) + +HEAPF32[((HEAP32[i18 + 32 >> 2] & 2048 | 0) == 0 ? i18 + 20 | 0 : i18 + 24 | 0) >> 2];
       do {
        if (d31 < +2147483647) {
         if (d31 <= +-2147483648) {
          i32 = -2147483648;
          break;
         }
         i32 = ~~d31;
        } else {
         i32 = 2147483647;
        }
       } while (0);
       i25 = i2 - i32 | 0;
       HEAP32[i7 >> 2] = i25;
       i33 = HEAP32[((i23 | 0) < (i25 | 0) ? i16 : i1) >> 2] | 0;
       HEAP32[i11 >> 2] = i33;
       i24 = i33;
       break;
      }
      if ((i28 | 0) == 3 | (i28 | 0) == 0) {
       i34 = i27 + 48 | 0;
      } else {
       i34 = i27 + 44 | 0;
      }
      i33 = HEAP32[i34 >> 2] | 0;
      i25 = HEAP32[i27 + 108 >> 2] | 0;
      do {
       if ((i25 | 0) == 0) {
        if ((i28 | 0) == 3 | (i28 | 0) == 0) {
         i35 = i27 + 56 | 0;
         break;
        } else {
         i35 = i27 + 52 | 0;
         break;
        }
       } else {
        i35 = i25 + 76 | 0;
       }
      } while (0);
      i25 = (HEAP32[i35 >> 2] | 0) + i33 | 0;
      d31 = +(i25 | 0);
      if (d31 <= +__ZNK7WebCore9InlineBox13logicalHeightEv(i18)) {
       i20 = i23;
       break L6;
      }
      d36 = d31 + +HEAPF32[((HEAP32[i18 + 32 >> 2] & 2048 | 0) == 0 ? i18 + 20 | 0 : i18 + 24 | 0) >> 2];
      do {
       if (d36 < +2147483647) {
        if (d36 <= +-2147483648) {
         i37 = -2147483648;
         break;
        }
        i37 = ~~d36;
       } else {
        i37 = 2147483647;
       }
      } while (0);
      i33 = i37 - i2 | 0;
      HEAP32[i8 >> 2] = i33;
      i25 = HEAP32[((i23 | 0) < (i33 | 0) ? i17 : i1) >> 2] | 0;
      HEAP32[i11 >> 2] = i25;
      i24 = i25;
     }
    } while (0);
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 44 >> 2] & 31](i18) | 0)) {
     i20 = i24;
     break;
    }
    i22 = i18 + 32 | 0;
    i25 = HEAP32[i19 >> 2] | 0;
    i33 = (HEAP32[i25 + 20 >> 2] & 768 | 0) == 256;
    do {
     if ((HEAP32[i22 >> 2] & 1 | 0) == 0) {
      if (i33) {
       i38 = HEAP32[(HEAP32[i25 + 8 >> 2] | 0) + 36 >> 2] | 0;
       break;
      } else {
       i38 = HEAP32[i25 + 36 >> 2] | 0;
       break;
      }
     } else {
      if (i33) {
       i27 = HEAP32[i25 + 8 >> 2] | 0;
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i27 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i38 = HEAP32[i27 + 36 >> 2] | 0;
        break;
       } else {
        i38 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i27) | 0;
        break;
       }
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i25 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i38 = HEAP32[i25 + 36 >> 2] | 0;
        break;
       } else {
        i38 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i25) | 0;
        break;
       }
      }
     }
    } while (0);
    if ((__ZNK7WebCore11RenderStyle16textEmphasisMarkEv(i38) | 0) == 0) {
     i20 = i24;
     break;
    }
    if ((HEAP32[(HEAP32[i38 + 24 >> 2] | 0) + 88 >> 2] & 134217728 | 0) == 0) {
     i20 = i24;
     break;
    }
    d36 = +HEAPF32[((HEAP32[i22 >> 2] & 2048 | 0) == 0 ? i18 + 20 | 0 : i18 + 24 | 0) >> 2];
    if ((((HEAP32[i38 + 44 >> 2] | 0) >>> 13 & 3) - 2 | 0) >>> 0 < 2 >>> 0) {
     i25 = __ZNK7WebCore11RenderStyle4fontEv(i38) | 0;
     d31 = d36 - +(__ZNK7WebCore4Font18emphasisMarkHeightERKN3WTF12AtomicStringE(i25, __ZNK7WebCore11RenderStyle22textEmphasisMarkStringEv(i38) | 0) | 0);
     do {
      if (d31 < +2147483647) {
       if (d31 <= +-2147483648) {
        i39 = -2147483648;
        break;
       }
       i39 = ~~d31;
      } else {
       i39 = 2147483647;
      }
     } while (0);
     i22 = i2 - i39 | 0;
     HEAP32[i10 >> 2] = i22;
     i25 = HEAP32[((i24 | 0) < (i22 | 0) ? i14 : i1) >> 2] | 0;
     HEAP32[i11 >> 2] = i25;
     i20 = i25;
     break;
    } else {
     d31 = d36 + +__ZNK7WebCore9InlineBox13logicalHeightEv(i18);
     i25 = __ZNK7WebCore11RenderStyle4fontEv(i38) | 0;
     d40 = d31 + +(__ZNK7WebCore4Font18emphasisMarkHeightERKN3WTF12AtomicStringE(i25, __ZNK7WebCore11RenderStyle22textEmphasisMarkStringEv(i38) | 0) | 0);
     do {
      if (d40 < +2147483647) {
       if (d40 <= +-2147483648) {
        i41 = -2147483648;
        break;
       }
       i41 = ~~d40;
      } else {
       i41 = 2147483647;
      }
     } while (0);
     i25 = i41 - i2 | 0;
     HEAP32[i9 >> 2] = i25;
     i22 = HEAP32[((i24 | 0) < (i25 | 0) ? i15 : i1) >> 2] | 0;
     HEAP32[i11 >> 2] = i22;
     i20 = i22;
     break;
    }
   }
  } while (0);
  i19 = HEAP32[i18 + 4 >> 2] | 0;
  if ((i19 | 0) == 0) {
   break;
  } else {
   i18 = i19;
   i12 = i20;
  }
 }
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore13InlineFlowBox31computeOverAnnotationAdjustmentENS_10LayoutUnitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, d32 = +0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, d37 = +0, i38 = 0, i39 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i1 | 0;
 HEAP32[i12 >> 2] = 0;
 i13 = HEAP32[i2 + 40 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i2 = i3 | 0;
 i3 = i6 | 0;
 i14 = i5 | 0;
 i15 = i11;
 i16 = i10;
 i17 = i8;
 i18 = i7;
 i19 = i13;
 i13 = 0;
 while (1) {
  i20 = i19 + 16 | 0;
  L6 : do {
   if ((HEAP32[(HEAP32[i20 >> 2] | 0) + 20 >> 2] & 25165824 | 0) == 16777216) {
    i21 = i13;
   } else {
    i22 = i19;
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 40 >> 2] & 31](i19) | 0) {
     HEAP32[i3 >> 2] = HEAP32[i2 >> 2];
     __ZNK7WebCore13InlineFlowBox31computeOverAnnotationAdjustmentENS_10LayoutUnitE(i5, i19, i6);
     i23 = HEAP32[((i13 | 0) < (HEAP32[i14 >> 2] | 0) ? i5 : i1) >> 2] | 0;
     HEAP32[i12 >> 2] = i23;
     i24 = i23;
    } else {
     i24 = i13;
    }
    i23 = HEAP32[i20 >> 2] | 0;
    do {
     if ((HEAP32[i23 + 20 >> 2] & 2048 | 0) == 0) {
      i25 = i24;
     } else {
      if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i23 >> 2] | 0) + 168 >> 2] & 31](i23) | 0)) {
       i25 = i24;
       break;
      }
      i26 = HEAP32[i20 >> 2] | 0;
      if ((HEAP32[i26 + 20 >> 2] & 768 | 0) == 256) {
       i27 = HEAP32[(HEAP32[i26 + 8 >> 2] | 0) + 36 >> 2] | 0;
      } else {
       i27 = HEAP32[i26 + 36 >> 2] | 0;
      }
      if ((HEAP32[(HEAP32[i27 + 24 >> 2] | 0) + 92 >> 2] & 1048576 | 0) != 0) {
       i25 = i24;
       break;
      }
      i28 = __ZNK7WebCore13RenderRubyRun8rubyTextEv(i26) | 0;
      if ((i28 | 0) == 0) {
       i21 = i24;
       break L6;
      }
      i29 = (HEAP32[(HEAP32[i28 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
      if ((((HEAP32[(HEAP32[i26 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3) - 2 | 0) >>> 0 >= 2 >>> 0) {
       if ((i29 | 0) == 3 | (i29 | 0) == 0) {
        i30 = i28 + 48 | 0;
       } else {
        i30 = i28 + 44 | 0;
       }
       i26 = HEAP32[i28 + 104 >> 2] | 0;
       if ((i26 | 0) == 0) {
        i31 = 0;
       } else {
        i31 = HEAP32[i26 + 72 >> 2] | 0;
       }
       i26 = i31 + (HEAP32[i30 >> 2] | 0) | 0;
       if ((i26 | 0) > -1) {
        i21 = i24;
        break L6;
       }
       d32 = +(i26 | 0) + +HEAPF32[((HEAP32[i19 + 32 >> 2] & 2048 | 0) == 0 ? i19 + 20 | 0 : i19 + 24 | 0) >> 2];
       do {
        if (d32 < +2147483647) {
         if (d32 <= +-2147483648) {
          i33 = -2147483648;
          break;
         }
         i33 = ~~d32;
        } else {
         i33 = 2147483647;
        }
       } while (0);
       i26 = (HEAP32[i2 >> 2] | 0) - i33 | 0;
       HEAP32[i7 >> 2] = i26;
       i34 = HEAP32[((i24 | 0) < (i26 | 0) ? i18 : i1) >> 2] | 0;
       HEAP32[i12 >> 2] = i34;
       i25 = i34;
       break;
      }
      if ((i29 | 0) == 3 | (i29 | 0) == 0) {
       i35 = i28 + 48 | 0;
      } else {
       i35 = i28 + 44 | 0;
      }
      i34 = HEAP32[i35 >> 2] | 0;
      i26 = HEAP32[i28 + 108 >> 2] | 0;
      do {
       if ((i26 | 0) == 0) {
        if ((i29 | 0) == 3 | (i29 | 0) == 0) {
         i36 = i28 + 56 | 0;
         break;
        } else {
         i36 = i28 + 52 | 0;
         break;
        }
       } else {
        i36 = i26 + 76 | 0;
       }
      } while (0);
      i26 = (HEAP32[i36 >> 2] | 0) + i34 | 0;
      d32 = +(i26 | 0);
      if (d32 <= +__ZNK7WebCore9InlineBox13logicalHeightEv(i19)) {
       i21 = i24;
       break L6;
      }
      d37 = d32 + +HEAPF32[((HEAP32[i19 + 32 >> 2] & 2048 | 0) == 0 ? i19 + 20 | 0 : i19 + 24 | 0) >> 2];
      do {
       if (d37 < +2147483647) {
        if (d37 <= +-2147483648) {
         i38 = -2147483648;
         break;
        }
        i38 = ~~d37;
       } else {
        i38 = 2147483647;
       }
      } while (0);
      i34 = i38 - (HEAP32[i2 >> 2] | 0) | 0;
      HEAP32[i8 >> 2] = i34;
      i26 = HEAP32[((i24 | 0) < (i34 | 0) ? i17 : i1) >> 2] | 0;
      HEAP32[i12 >> 2] = i26;
      i25 = i26;
     }
    } while (0);
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 44 >> 2] & 31](i19) | 0)) {
     i21 = i25;
     break;
    }
    i23 = i19 + 32 | 0;
    i26 = HEAP32[i20 >> 2] | 0;
    i34 = (HEAP32[i26 + 20 >> 2] & 768 | 0) == 256;
    do {
     if ((HEAP32[i23 >> 2] & 1 | 0) == 0) {
      if (i34) {
       i39 = HEAP32[(HEAP32[i26 + 8 >> 2] | 0) + 36 >> 2] | 0;
       break;
      } else {
       i39 = HEAP32[i26 + 36 >> 2] | 0;
       break;
      }
     } else {
      if (i34) {
       i28 = HEAP32[i26 + 8 >> 2] | 0;
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i28 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i39 = HEAP32[i28 + 36 >> 2] | 0;
        break;
       } else {
        i39 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i28) | 0;
        break;
       }
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i26 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i39 = HEAP32[i26 + 36 >> 2] | 0;
        break;
       } else {
        i39 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i26) | 0;
        break;
       }
      }
     }
    } while (0);
    if ((__ZNK7WebCore11RenderStyle16textEmphasisMarkEv(i39) | 0) == 0) {
     i21 = i25;
     break;
    }
    i26 = __ZNK7WebCore13InlineTextBox23getEmphasisMarkPositionERKNS_11RenderStyleERNS_20TextEmphasisPositionE(i19, i39, i9) | 0;
    if (!(i26 & (HEAP32[i9 >> 2] | 0) == 0)) {
     i21 = i25;
     break;
    }
    d37 = +HEAPF32[((HEAP32[i23 >> 2] & 2048 | 0) == 0 ? i19 + 20 | 0 : i19 + 24 | 0) >> 2];
    if ((((HEAP32[i39 + 44 >> 2] | 0) >>> 13 & 3) - 2 | 0) >>> 0 < 2 >>> 0) {
     d32 = d37 + +__ZNK7WebCore9InlineBox13logicalHeightEv(i19);
     i26 = __ZNK7WebCore11RenderStyle4fontEv(i39) | 0;
     i34 = ~~(d32 + +(__ZNK7WebCore4Font18emphasisMarkHeightERKN3WTF12AtomicStringE(i26, __ZNK7WebCore11RenderStyle22textEmphasisMarkStringEv(i39) | 0) | 0));
     i26 = i34 - (HEAP32[i2 >> 2] | 0) | 0;
     HEAP32[i11 >> 2] = i26;
     i34 = HEAP32[((i25 | 0) < (i26 | 0) ? i15 : i1) >> 2] | 0;
     HEAP32[i12 >> 2] = i34;
     i21 = i34;
     break;
    } else {
     i34 = __ZNK7WebCore11RenderStyle4fontEv(i39) | 0;
     i26 = ~~(d37 - +(__ZNK7WebCore4Font18emphasisMarkHeightERKN3WTF12AtomicStringE(i34, __ZNK7WebCore11RenderStyle22textEmphasisMarkStringEv(i39) | 0) | 0));
     i34 = (HEAP32[i2 >> 2] | 0) - i26 | 0;
     HEAP32[i10 >> 2] = i34;
     i26 = HEAP32[((i25 | 0) < (i34 | 0) ? i16 : i1) >> 2] | 0;
     HEAP32[i12 >> 2] = i26;
     i21 = i26;
     break;
    }
   }
  } while (0);
  i20 = HEAP32[i19 + 4 >> 2] | 0;
  if ((i20 | 0) == 0) {
   break;
  } else {
   i19 = i20;
   i13 = i21;
  }
 }
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore13InlineFlowBox27requiresIdeographicBaselineERKN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS1_6VectorIPKNS_14SimpleFontDataELj0ENS1_15CrashOnOverflowEEENS_13GlyphOverflowEEENS1_7PtrHashIS5_EENS1_10HashTraitsIS5_EENSI_ISF_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i3 & 2048 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i1 + 16 >> 2] | 0;
 i6 = i5;
 do {
  if ((i3 & 1 | 0) == 0) {
   i7 = HEAP32[i5 + 36 >> 2] | 0;
  } else {
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i5 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
    i7 = HEAP32[i5 + 36 >> 2] | 0;
    break;
   } else {
    i7 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i6) | 0;
    break;
   }
  }
 } while (0);
 if ((HEAP32[(__ZNK7WebCore11RenderStyle15fontDescriptionEv(i7) | 0) + 16 >> 2] & 2 | 0) != 0) {
  i4 = 1;
  return i4 | 0;
 }
 i6 = __ZNK7WebCore11RenderStyle4fontEv(i7) | 0;
 i7 = HEAP32[i6 + 24 >> 2] | 0;
 i5 = i7 + 44 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i8 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i7, i6 | 0, 0) | 0;
  i6 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] & 3](i8, 32) | 0;
  HEAP32[i5 >> 2] = i6;
  i9 = i6;
 } else {
  i9 = i3;
 }
 if ((HEAP8[i9 + 1121 | 0] & 1) != 0) {
  i4 = 1;
  return i4 | 0;
 }
 i9 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = i2 | 0;
 i3 = i2 + 4 | 0;
 i6 = i2 + 8 | 0;
 i5 = i9;
 L23 : while (1) {
  i9 = i5 + 16 | 0;
  L25 : do {
   if ((HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] & 25165824 | 0) != 16777216) {
    i8 = i5;
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 40 >> 2] & 31](i5) | 0) {
     if (__ZNK7WebCore13InlineFlowBox27requiresIdeographicBaselineERKN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS1_6VectorIPKNS_14SimpleFontDataELj0ENS1_15CrashOnOverflowEEENS_13GlyphOverflowEEENS1_7PtrHashIS5_EENS1_10HashTraitsIS5_EENSI_ISF_EEEE(i5, i2) | 0) {
      i4 = 1;
      i10 = 49;
      break L23;
     } else {
      break;
     }
    }
    i7 = HEAP32[i9 >> 2] | 0;
    i11 = (HEAP32[i7 + 20 >> 2] & 768 | 0) == 256;
    do {
     if ((HEAP32[i5 + 32 >> 2] & 1 | 0) == 0) {
      if (i11) {
       i12 = HEAP32[(HEAP32[i7 + 8 >> 2] | 0) + 36 >> 2] | 0;
       break;
      } else {
       i12 = HEAP32[i7 + 36 >> 2] | 0;
       break;
      }
     } else {
      if (i11) {
       i13 = HEAP32[i7 + 8 >> 2] | 0;
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i13 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i12 = HEAP32[i13 + 36 >> 2] | 0;
        break;
       } else {
        i12 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i13) | 0;
        break;
       }
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i7 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i12 = HEAP32[i7 + 36 >> 2] | 0;
        break;
       } else {
        i12 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i7) | 0;
        break;
       }
      }
     }
    } while (0);
    i7 = __ZNK7WebCore11RenderStyle4fontEv(i12) | 0;
    i11 = HEAP32[i7 + 24 >> 2] | 0;
    i13 = i11 + 44 | 0;
    i14 = HEAP32[i13 >> 2] | 0;
    if ((i14 | 0) == 0) {
     i15 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i11, i7 | 0, 0) | 0;
     i7 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] & 3](i15, 32) | 0;
     HEAP32[i13 >> 2] = i7;
     i16 = i7;
    } else {
     i16 = i14;
    }
    if ((HEAP8[i16 + 1121 | 0] & 1) != 0) {
     i4 = 1;
     i10 = 50;
     break L23;
    }
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 44 >> 2] & 31](i5) | 0)) {
     break;
    }
    i14 = i5;
    i7 = HEAP32[i1 >> 2] | 0;
    if ((i7 | 0) == 0) {
     i13 = HEAP32[i3 >> 2] | 0;
     i17 = i13 * 36 & -1 | 0;
     i18 = 0;
     i19 = i13;
    } else {
     i13 = HEAP32[i6 >> 2] | 0;
     i15 = i5;
     i11 = i15 + ~(i15 << 15) | 0;
     i15 = (i11 >>> 10 ^ i11) * 9 & -1;
     i11 = i15 >>> 6 ^ i15;
     i15 = i11 + ~(i11 << 11) | 0;
     i11 = i15 >>> 16 ^ i15;
     i15 = i13 & i11;
     i20 = i7 + (i15 * 36 & -1) | 0;
     i21 = HEAP32[i20 >> 2] | 0;
     L54 : do {
      if ((i21 | 0) == (i14 | 0)) {
       i22 = i20;
      } else {
       i23 = (i11 >>> 23) + ~i11 | 0;
       i24 = i23 << 12 ^ i23;
       i23 = i24 >>> 7 ^ i24;
       i24 = i23 << 2 ^ i23;
       i23 = i24 >>> 20 ^ i24 | 1;
       i24 = 0;
       i25 = i15;
       i26 = i21;
       while (1) {
        if ((i26 | 0) == 0) {
         i22 = 0;
         break L54;
        }
        i27 = (i24 | 0) == 0 ? i23 : i24;
        i28 = i27 + i25 & i13;
        i29 = i7 + (i28 * 36 & -1) | 0;
        i30 = HEAP32[i29 >> 2] | 0;
        if ((i30 | 0) == (i14 | 0)) {
         i22 = i29;
         break;
        } else {
         i24 = i27;
         i25 = i28;
         i26 = i30;
        }
       }
      }
     } while (0);
     i14 = HEAP32[i3 >> 2] | 0;
     i17 = (i22 | 0) == 0 ? i7 + (i14 * 36 & -1) | 0 : i22;
     i18 = i7;
     i19 = i14;
    }
    if ((i17 | 0) == (i18 + (i19 * 36 & -1) | 0)) {
     break;
    }
    i14 = i17 + 4 | 0;
    if ((i14 | 0) == 0) {
     break;
    }
    i13 = HEAP32[i17 + 12 >> 2] | 0;
    i21 = i14 | 0;
    i14 = 0;
    while (1) {
     if (i14 >>> 0 >= i13 >>> 0) {
      break L25;
     }
     if ((HEAP8[(HEAP32[(HEAP32[i21 >> 2] | 0) + (i14 << 2) >> 2] | 0) + 1121 | 0] & 1) == 0) {
      i14 = i14 + 1 | 0;
     } else {
      i4 = 1;
      i10 = 51;
      break L23;
     }
    }
   }
  } while (0);
  i9 = HEAP32[i5 + 4 >> 2] | 0;
  if ((i9 | 0) == 0) {
   i4 = 0;
   i10 = 52;
   break;
  } else {
   i5 = i9;
  }
 }
 if ((i10 | 0) == 49) {
  return i4 | 0;
 } else if ((i10 | 0) == 50) {
  return i4 | 0;
 } else if ((i10 | 0) == 51) {
  return i4 | 0;
 } else if ((i10 | 0) == 52) {
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore13InlineFlowBox24addTextBoxVisualOverflowEPNS_13InlineTextBoxERN3WTF7HashMapIPKS1_NSt3__14pairINS3_6VectorIPKNS_14SimpleFontDataELj0ENS3_15CrashOnOverflowEEENS_13GlyphOverflowEEENS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EENSJ_ISG_EEEERNS_10LayoutRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, d39 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i2 | 0;
 i12 = i2 + 32 | 0;
 if ((HEAP32[i12 >> 2] & 16384 | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 i13 = HEAP32[i1 + 16 >> 2] | 0;
 i14 = i13;
 do {
  if ((HEAP32[i1 + 32 >> 2] & 1 | 0) == 0) {
   i15 = HEAP32[i13 + 36 >> 2] | 0;
  } else {
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i13 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
    i15 = HEAP32[i13 + 36 >> 2] | 0;
    break;
   } else {
    i15 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i14) | 0;
    break;
   }
  }
 } while (0);
 i14 = HEAP32[i3 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i13 = HEAP32[i3 + 4 >> 2] | 0;
  i16 = i13 * 36 & -1 | 0;
  i17 = 0;
  i18 = i13;
 } else {
  i13 = HEAP32[i3 + 8 >> 2] | 0;
  i1 = i2;
  i19 = i1 + ~(i1 << 15) | 0;
  i1 = (i19 >>> 10 ^ i19) * 9 & -1;
  i19 = i1 >>> 6 ^ i1;
  i1 = i19 + ~(i19 << 11) | 0;
  i19 = i1 >>> 16 ^ i1;
  i1 = i13 & i19;
  i20 = i14 + (i1 * 36 & -1) | 0;
  i21 = HEAP32[i20 >> 2] | 0;
  L13 : do {
   if ((i21 | 0) == (i2 | 0)) {
    i22 = i20;
   } else {
    i23 = (i19 >>> 23) + ~i19 | 0;
    i24 = i23 << 12 ^ i23;
    i23 = i24 >>> 7 ^ i24;
    i24 = i23 << 2 ^ i23;
    i23 = i24 >>> 20 ^ i24 | 1;
    i24 = 0;
    i25 = i1;
    i26 = i21;
    while (1) {
     if ((i26 | 0) == 0) {
      i22 = 0;
      break L13;
     }
     i27 = (i24 | 0) == 0 ? i23 : i24;
     i28 = i27 + i25 & i13;
     i29 = i14 + (i28 * 36 & -1) | 0;
     i30 = HEAP32[i29 >> 2] | 0;
     if ((i30 | 0) == (i2 | 0)) {
      i22 = i29;
      break;
     } else {
      i24 = i27;
      i25 = i28;
      i26 = i30;
     }
    }
   }
  } while (0);
  i13 = HEAP32[i3 + 4 >> 2] | 0;
  i16 = (i22 | 0) == 0 ? i14 + (i13 * 36 & -1) | 0 : i22;
  i17 = i14;
  i18 = i13;
 }
 i13 = (i16 | 0) == (i17 + (i18 * 36 & -1) | 0) ? 0 : i16 + 16 | 0;
 i16 = i15 + 44 | 0;
 if ((i13 | 0) == 0) {
  i31 = 0;
  i32 = 0;
  i33 = 0;
  i34 = 0;
 } else {
  if ((((HEAP32[i16 >> 2] | 0) >>> 13 & 3) - 2 | 0) >>> 0 < 2 >>> 0) {
   i35 = i13 + 8 | 0;
   i36 = i13 + 12 | 0;
  } else {
   i35 = i13 + 12 | 0;
   i36 = i13 + 8 | 0;
  }
  i31 = HEAP32[i13 + 4 >> 2] | 0;
  i32 = HEAP32[i35 >> 2] | 0;
  i33 = HEAP32[i36 >> 2] | 0;
  i34 = HEAP32[i13 >> 2] | 0;
 }
 i13 = i15 + 24 | 0;
 i36 = ~~+Math_ceil(+HEAPF32[(HEAP32[i13 >> 2] | 0) + 16 >> 2] * +.5);
 i35 = (-i36 | 0) - i33 | 0;
 i33 = i36 + i32 | 0;
 i32 = i36 + i34 | 0;
 i34 = i36 + i31 | 0;
 do {
  if ((__ZNK7WebCore11RenderStyle16textEmphasisMarkEv(i15) | 0) == 0) {
   i37 = i35;
   i38 = i33;
  } else {
   if (!(__ZNK7WebCore13InlineTextBox23getEmphasisMarkPositionERKNS_11RenderStyleERNS_20TextEmphasisPositionE(i2, i15, i6) | 0)) {
    i37 = i35;
    i38 = i33;
    break;
   }
   i31 = __ZNK7WebCore11RenderStyle4fontEv(i15) | 0;
   i36 = __ZNK7WebCore4Font18emphasisMarkHeightERKN3WTF12AtomicStringE(i31, __ZNK7WebCore11RenderStyle22textEmphasisMarkStringEv(i15) | 0) | 0;
   if ((HEAP32[i6 >> 2] | 0) == 0 ^ (((HEAP32[i16 >> 2] | 0) >>> 13 & 3) - 2 | 0) >>> 0 > 1 >>> 0) {
    i37 = i35;
    i38 = (i33 | 0) < (i36 | 0) ? i36 : i33;
    break;
   } else {
    i31 = -i36 | 0;
    i37 = (i35 | 0) > (i31 | 0) ? i31 : i35;
    i38 = i33;
    break;
   }
  }
 } while (0);
 i33 = ~~+HEAPF32[(__ZNK7WebCore11RenderStyle4fontEv(i15) | 0) + 28 >> 2];
 i35 = i7 | 0;
 HEAP32[i35 >> 2] = 0;
 i6 = i8 | 0;
 HEAP32[i6 >> 2] = 0;
 i31 = HEAP32[(HEAP32[i13 >> 2] | 0) + 60 >> 2] | 0;
 i36 = (HEAP32[i16 >> 2] | 0) >>> 13 & 3;
 if ((i36 | 0) == 3 | (i36 | 0) == 0) {
  __ZNK7WebCore11RenderStyle23getShadowVerticalExtentEPKNS_10ShadowDataERNS_10LayoutUnitES5_(i15, i31, i7, i8);
 } else {
  __ZNK7WebCore11RenderStyle25getShadowHorizontalExtentEPKNS_10ShadowDataERNS_10LayoutUnitES5_(i15, i31, i7, i8);
 }
 i8 = HEAP32[i35 >> 2] | 0;
 i35 = HEAP32[i6 >> 2] | 0;
 i6 = i9 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i10 | 0;
 HEAP32[i7 >> 2] = 0;
 i31 = HEAP32[(HEAP32[i13 >> 2] | 0) + 60 >> 2] | 0;
 i13 = (HEAP32[i16 >> 2] | 0) >>> 13 & 3;
 if ((i13 | 0) == 3 | (i13 | 0) == 0) {
  __ZNK7WebCore11RenderStyle25getShadowHorizontalExtentEPKNS_10ShadowDataERNS_10LayoutUnitES5_(i15, i31, i9, i10);
 } else {
  __ZNK7WebCore11RenderStyle23getShadowVerticalExtentEPKNS_10ShadowDataERNS_10LayoutUnitES5_(i15, i31, i9, i10);
 }
 i10 = HEAP32[i6 >> 2] | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 i7 = i2 + 24 | 0;
 i9 = i2 + 20 | 0;
 d39 = +HEAPF32[((HEAP32[i12 >> 2] & 2048 | 0) == 0 ? i9 : i7) >> 2];
 i31 = ((i8 | 0) > 0 ? 0 : i8) + i37 + ~~d39 | 0;
 i37 = i4 + 4 | 0;
 i8 = HEAP32[i37 >> 2] | 0;
 i15 = (i8 | 0) < (i31 | 0) ? i8 : i31;
 i31 = ((i35 | 0) < 0 ? 0 : i35) + i38 + ~~+Math_ceil(d39 + +__ZNK7WebCore9InlineBox13logicalHeightEv(i11)) | 0;
 i11 = i4 + 12 | 0;
 i38 = (HEAP32[i11 >> 2] | 0) + (HEAP32[i37 >> 2] | 0) | 0;
 d39 = +HEAPF32[((HEAP32[i12 >> 2] & 2048 | 0) == 0 ? i7 : i9) >> 2];
 i9 = ((i10 | 0) > 0 ? 0 : i10) - i32 + ~~d39 | 0;
 i32 = i4 | 0;
 i10 = HEAP32[i32 >> 2] | 0;
 i7 = (i10 | 0) < (i9 | 0) ? i10 : i9;
 i9 = i34 + ((i33 | 0) < 0 ? -i33 | 0 : 0) + ((i6 | 0) < 0 ? 0 : i6) + ~~+Math_ceil(d39 + +HEAPF32[i2 + 28 >> 2]) | 0;
 i6 = i4 + 8 | 0;
 i33 = (HEAP32[i6 >> 2] | 0) + i10 | 0;
 HEAP32[i32 >> 2] = i7;
 HEAP32[i37 >> 2] = i15;
 HEAP32[i6 >> 2] = ((i9 | 0) < (i33 | 0) ? i33 : i9) - i7;
 HEAP32[i11 >> 2] = ((i31 | 0) < (i38 | 0) ? i38 : i31) - i15;
 __ZN7WebCore13InlineTextBox22setLogicalOverflowRectERKNS_10LayoutRectE(i2, i4);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore13InlineFlowBox25adjustMaxAscentAndDescentERiS1_ii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i1 = i7 | 0;
 i9 = (i4 | 0) < (i5 | 0) ? i5 : i4;
 i10 = i8;
 L4 : while (1) {
  i8 = i10 + 16 | 0;
  i11 = HEAP32[i8 >> 2] | 0;
  i12 = HEAP32[i11 + 20 >> 2] | 0;
  do {
   if ((i12 & 25165824 | 0) != 16777216) {
    i13 = i10 + 32 | 0;
    i14 = (i12 & 768 | 0) == 256;
    do {
     if ((HEAP32[i13 >> 2] & 1 | 0) == 0) {
      if (i14) {
       i15 = HEAP32[(HEAP32[i11 + 8 >> 2] | 0) + 36 >> 2] | 0;
       break;
      } else {
       i15 = HEAP32[i11 + 36 >> 2] | 0;
       break;
      }
     } else {
      if (i14) {
       i16 = HEAP32[i11 + 8 >> 2] | 0;
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i16 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i15 = HEAP32[i16 + 36 >> 2] | 0;
        break;
       } else {
        i15 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i16) | 0;
        break;
       }
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i11 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i15 = HEAP32[i11 + 36 >> 2] | 0;
        break;
       } else {
        i15 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i11) | 0;
        break;
       }
      }
     }
    } while (0);
    if ((HEAP32[i15 + 48 >> 2] & 983040 | 0) == 393216) {
     i17 = 28;
    } else {
     i14 = HEAP32[i8 >> 2] | 0;
     i16 = (HEAP32[i14 + 20 >> 2] & 768 | 0) == 256;
     do {
      if ((HEAP32[i13 >> 2] & 1 | 0) == 0) {
       if (i16) {
        i18 = HEAP32[(HEAP32[i14 + 8 >> 2] | 0) + 36 >> 2] | 0;
        break;
       } else {
        i18 = HEAP32[i14 + 36 >> 2] | 0;
        break;
       }
      } else {
       if (i16) {
        i19 = HEAP32[i14 + 8 >> 2] | 0;
        if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i19 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
         i18 = HEAP32[i19 + 36 >> 2] | 0;
         break;
        } else {
         i18 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i19) | 0;
         break;
        }
       } else {
        if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i14 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
         i18 = HEAP32[i14 + 36 >> 2] | 0;
         break;
        } else {
         i18 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i14) | 0;
         break;
        }
       }
      }
     } while (0);
     if ((HEAP32[i18 + 48 >> 2] & 983040 | 0) == 458752) {
      i17 = 28;
     }
    }
    L42 : do {
     if ((i17 | 0) == 28) {
      i17 = 0;
      i14 = HEAP32[i8 >> 2] | 0;
      do {
       if ((HEAP32[i14 + 20 >> 2] & 768 | 0) == 256) {
        i16 = HEAP32[i14 + 8 >> 2] | 0;
        if ((HEAP32[i16 + 20 >> 2] & 1024 | 0) != 0) {
         break;
        }
        if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 188 >> 2] & 31](i16 | 0) | 0)) {
         break L42;
        }
       }
      } while (0);
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 84 >> 2] & 7](i7, i10);
      i14 = HEAP32[i1 >> 2] | 0;
      i16 = HEAP32[i8 >> 2] | 0;
      i19 = (HEAP32[i16 + 20 >> 2] & 768 | 0) == 256;
      do {
       if ((HEAP32[i13 >> 2] & 1 | 0) == 0) {
        if (i19) {
         i20 = HEAP32[(HEAP32[i16 + 8 >> 2] | 0) + 36 >> 2] | 0;
         break;
        } else {
         i20 = HEAP32[i16 + 36 >> 2] | 0;
         break;
        }
       } else {
        if (i19) {
         i21 = HEAP32[i16 + 8 >> 2] | 0;
         if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i21 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
          i20 = HEAP32[i21 + 36 >> 2] | 0;
          break;
         } else {
          i20 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i21) | 0;
          break;
         }
        } else {
         if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i16 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
          i20 = HEAP32[i16 + 36 >> 2] | 0;
          break;
         } else {
          i20 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i16) | 0;
          break;
         }
        }
       }
      } while (0);
      i16 = HEAP32[i2 >> 2] | 0;
      i19 = HEAP32[i3 >> 2] | 0;
      i21 = (i19 + i16 | 0) < (i14 | 0);
      do {
       if ((HEAP32[i20 + 48 >> 2] & 983040 | 0) == 393216) {
        if (!i21) {
         i22 = i16;
         i23 = i19;
         break;
        }
        i24 = i14 - i16 | 0;
        HEAP32[i3 >> 2] = i24;
        i22 = HEAP32[i2 >> 2] | 0;
        i23 = i24;
       } else {
        if (!i21) {
         i22 = i16;
         i23 = i19;
         break;
        }
        i24 = i14 - i19 | 0;
        HEAP32[i2 >> 2] = i24;
        i22 = i24;
        i23 = HEAP32[i3 >> 2] | 0;
       }
      } while (0);
      if ((i23 + i22 | 0) >= (i9 | 0)) {
       i17 = 53;
       break L4;
      }
     }
    } while (0);
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 40 >> 2] & 31](i10) | 0)) {
     break;
    }
    __ZN7WebCore13InlineFlowBox25adjustMaxAscentAndDescentERiS1_ii(i10, i2, i3, i4, i5);
   }
  } while (0);
  i8 = HEAP32[i10 + 4 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i17 = 54;
   break;
  } else {
   i10 = i8;
  }
 }
 if ((i17 | 0) == 53) {
  STACKTOP = i6;
  return;
 } else if ((i17 | 0) == 54) {
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore13InlineFlowBox27placeBoxesInInlineDirectionEfRbRN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS2_6VectorIPKNS_14SimpleFontDataELj0ENS2_15CrashOnOverflowEEENS_13GlyphOverflowEEENS2_7PtrHashIS6_EENS2_10HashTraitsIS6_EENSJ_ISG_EEEE(i1, d2, i3, i4) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, d21 = +0, i22 = 0, i23 = 0, i24 = 0, d25 = +0, d26 = +0, d27 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 HEAPF32[i8 >> 2] = d2;
 i11 = i1 + 32 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = (i12 & 2048 | 0) == 0;
 if (i13) {
  HEAPF32[i1 + 24 >> 2] = d2;
 } else {
  HEAPF32[i1 + 20 >> 2] = d2;
 }
 i14 = i1 + 56 | 0;
 do {
  if ((HEAP32[i14 >> 2] & 1 | 0) == 0) {
   i15 = 0;
  } else {
   i16 = HEAP32[i1 + 16 >> 2] | 0;
   i17 = i16;
   do {
    if ((i12 & 1 | 0) == 0) {
     i18 = HEAP32[i16 + 36 >> 2] | 0;
    } else {
     if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i16 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
      i18 = HEAP32[i16 + 36 >> 2] | 0;
      break;
     } else {
      i18 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i17) | 0;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i18 + 16 >> 2] | 0;
   i16 = (HEAP32[(HEAP32[i17 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0;
   if (i13) {
    i19 = HEAP32[i17 + 120 >> 2] | 0;
    if (i16) {
     if ((i19 & 1879048192) >>> 0 < 268435456 >>> 0) {
      i15 = 0;
      break;
     }
    }
    i15 = i19 >>> 1 & 67108863;
    break;
   } else {
    i19 = HEAP32[i17 + 104 >> 2] | 0;
    if (i16) {
     if ((i19 & 1879048192) >>> 0 < 268435456 >>> 0) {
      i15 = 0;
      break;
     }
    }
    i15 = i19 >>> 1 & 67108863;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i14 >> 2] & 1 | 0) == 0) {
  i20 = 0;
 } else {
  i13 = HEAP32[i1 + 16 >> 2] | 0;
  i18 = i13;
  i12 = HEAP32[i13 >> 2] | 0;
  if ((HEAP32[i11 >> 2] & 2048 | 0) == 0) {
   FUNCTION_TABLE_vii[HEAP32[i12 + 704 >> 2] & 7](i7, i18);
  } else {
   FUNCTION_TABLE_vii[HEAP32[i12 + 712 >> 2] & 7](i7, i18);
  }
  i20 = HEAP32[i7 >> 2] | 0;
 }
 d21 = +HEAPF32[i8 >> 2] + +(i20 + i15 | 0);
 HEAPF32[i8 >> 2] = d21;
 HEAPF32[i9 >> 2] = d2;
 HEAPF32[i10 >> 2] = d21;
 +__ZN7WebCore13InlineFlowBox30placeBoxRangeInInlineDirectionEPNS_9InlineBoxES2_RfS3_S3_RbRN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS5_6VectorIPKNS_14SimpleFontDataELj0ENS5_15CrashOnOverflowEEENS_13GlyphOverflowEEENS5_7PtrHashIS9_EENS5_10HashTraitsIS9_EENSM_ISJ_EEEE(i1, HEAP32[i1 + 40 >> 2] | 0, 0, i8, i9, i10, i3, i4);
 do {
  if ((HEAP32[i14 >> 2] & 2 | 0) == 0) {
   i22 = 0;
  } else {
   i4 = HEAP32[i11 >> 2] | 0;
   i3 = (i4 & 2048 | 0) == 0;
   i15 = HEAP32[i1 + 16 >> 2] | 0;
   i20 = i15;
   do {
    if ((i4 & 1 | 0) == 0) {
     i23 = HEAP32[i15 + 36 >> 2] | 0;
    } else {
     if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i15 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
      i23 = HEAP32[i15 + 36 >> 2] | 0;
      break;
     } else {
      i23 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i20) | 0;
      break;
     }
    }
   } while (0);
   i20 = HEAP32[i23 + 16 >> 2] | 0;
   i15 = (HEAP32[(HEAP32[i20 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0;
   if (i3) {
    i4 = HEAP32[i20 + 128 >> 2] | 0;
    if (i15) {
     if ((i4 & 1879048192) >>> 0 < 268435456 >>> 0) {
      i22 = 0;
      break;
     }
    }
    i22 = i4 >>> 1 & 67108863;
    break;
   } else {
    i4 = HEAP32[i20 + 112 >> 2] | 0;
    if (i15) {
     if ((i4 & 1879048192) >>> 0 < 268435456 >>> 0) {
      i22 = 0;
      break;
     }
    }
    i22 = i4 >>> 1 & 67108863;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i14 >> 2] & 2 | 0) == 0) {
  i24 = 0;
 } else {
  i14 = HEAP32[i1 + 16 >> 2] | 0;
  i23 = i14;
  i4 = HEAP32[i14 >> 2] | 0;
  if ((HEAP32[i11 >> 2] & 2048 | 0) == 0) {
   FUNCTION_TABLE_vii[HEAP32[i4 + 708 >> 2] & 7](i6, i23);
  } else {
   FUNCTION_TABLE_vii[HEAP32[i4 + 716 >> 2] & 7](i6, i23);
  }
  i24 = HEAP32[i6 >> 2] | 0;
 }
 d21 = +HEAPF32[i8 >> 2] + +(i24 + i22 | 0);
 HEAPF32[i8 >> 2] = d21;
 d25 = +HEAPF32[i9 >> 2];
 d26 = +HEAPF32[i10 >> 2];
 HEAPF32[i1 + 28 >> 2] = d21 - d2;
 if ((HEAP32[i11 >> 2] & 16384 | 0) == 0) {
  d27 = d21;
  STACKTOP = i5;
  return +d27;
 }
 if (!(d25 < d2 | d26 > d21)) {
  d27 = d21;
  STACKTOP = i5;
  return +d27;
 }
 __ZN7WebCore9InlineBox26clearKnownToHaveNoOverflowEv(i1 | 0);
 d27 = +HEAPF32[i8 >> 2];
 STACKTOP = i5;
 return +d27;
}
function __ZN7WebCore13InlineFlowBox28determineSpacingForFlowBoxesEbbPNS_12RenderObjectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 do {
  if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
   i5 = 0;
   i6 = 0;
  } else {
   i7 = HEAP32[i1 + 16 >> 2] | 0;
   i8 = HEAP32[i7 + 36 >> 2] | 0;
   i9 = (HEAP32[i8 + 40 >> 2] & 1073741824 | 0) != 0;
   i10 = i7 + 44 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   L3 : do {
    if ((HEAP32[i11 + 32 >> 2] & 2 | 0) == 0) {
     i12 = HEAP32[i7 + 20 >> 2] | 0;
     do {
      if ((i12 & 128 | 0) == 0) {
       i13 = HEAP32[i7 + 4 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       }
       i14 = i13 + 32 | 0;
       if ((HEAP32[i13 + 12 >> 2] & 2048 | 0) == 0) {
        i15 = i14 | 0;
       } else {
        i15 = HEAP32[i14 >> 2] | 0;
       }
       if ((HEAP32[i15 >> 2] | 0) == (i7 | 0)) {
        break;
       }
       if ((i12 & 1024 | 0) != 0) {
        i16 = 0;
        i17 = 0;
        break L3;
       }
      }
     } while (0);
     if ((HEAP32[(HEAP32[i8 + 4 >> 2] | 0) + 64 >> 2] & 4 | 0) != 0) {
      i16 = 1;
      i17 = 1;
      break;
     }
     if (i9) {
      i16 = (i11 | 0) == (i1 | 0);
      i17 = 0;
      break;
     } else {
      i16 = 0;
      i17 = (HEAP32[i10 + 4 >> 2] | 0) == (i1 | 0);
      break;
     }
    } else {
     i16 = 0;
     i17 = 0;
    }
   } while (0);
   if ((HEAP32[(HEAP32[i10 + 4 >> 2] | 0) + 32 >> 2] & 2 | 0) != 0) {
    i5 = i16;
    i6 = i17;
    break;
   }
   L20 : do {
    if ((i4 | 0) == 0) {
     i18 = 1;
    } else {
     i11 = i4;
     while (1) {
      i12 = HEAP32[i11 + 20 >> 2] | 0;
      do {
       if ((i12 & 768 | 0) != 256) {
        if ((HEAP32[i11 + 24 >> 2] & 16 | 0) == 0) {
         break;
        }
        if ((i12 & 1024 | 0) == 0) {
         i18 = 1;
         break L20;
        }
       }
      } while (0);
      if ((i11 | 0) == (i7 | 0)) {
       break;
      }
      i12 = HEAP32[i11 + 8 >> 2] | 0;
      if ((i12 | 0) == 0) {
       i18 = 1;
       break L20;
      } else {
       i11 = i12 | 0;
      }
     }
     i11 = i7;
     L29 : do {
      if ((i7 | 0) == (i4 | 0)) {
       i19 = 1;
      } else {
       i12 = HEAP32[i4 + 8 >> 2] | 0;
       if ((i12 | 0) == 0) {
        i19 = 1;
        break;
       } else {
        i20 = i4;
        i21 = i12;
       }
       while (1) {
        if ((HEAP32[i21 + 24 >> 2] & 16 | 0) != 0) {
         if ((HEAP32[i21 + 20 >> 2] & 1024 | 0) == 0) {
          i19 = 1;
          break L29;
         }
        }
        if ((HEAP32[i21 + 32 >> 2] | 0) != (i20 | 0)) {
         i19 = 0;
         break L29;
        }
        if ((i21 | 0) == (i11 | 0)) {
         i19 = 1;
         break L29;
        }
        i12 = HEAP32[i21 + 8 >> 2] | 0;
        if ((i12 | 0) == 0) {
         i19 = 1;
         break;
        } else {
         i20 = i21 | 0;
         i21 = i12;
        }
       }
      }
     } while (0);
     i18 = i19 & (i3 ^ 1);
    }
   } while (0);
   if ((HEAP32[(HEAP32[i8 + 4 >> 2] | 0) + 64 >> 2] & 4 | 0) != 0) {
    i5 = 1;
    i6 = 1;
    break;
   }
   if (i9) {
    if (!((HEAP32[i1 + 52 >> 2] | 0) == 0 & (i18 | i2))) {
     i5 = i16;
     i6 = i17;
     break;
    }
    i5 = i16;
    i6 = (__ZNK7WebCore20RenderBoxModelObject12continuationEv(i7) | 0) == 0 | i17;
    break;
   }
   i10 = HEAP32[i1 + 48 >> 2] | 0;
   if ((i10 | 0) == 0) {
    if (!(i18 | i2)) {
     i5 = i16;
     i6 = i17;
     break;
    }
   } else {
    if (!((HEAP32[i10 + 32 >> 2] & 2 | 0) != 0 & (i18 | i2))) {
     i5 = i16;
     i6 = i17;
     break;
    }
   }
   i5 = (__ZNK7WebCore20RenderBoxModelObject12continuationEv(i7) | 0) == 0 | i16;
   i6 = i17;
  }
 } while (0);
 i17 = i1 + 56 | 0;
 HEAP32[i17 >> 2] = (i6 & 1) << 1 | i5 & 1 | HEAP32[i17 >> 2] & -4;
 i17 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i17 | 0) == 0) {
  return;
 } else {
  i22 = i17;
 }
 while (1) {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 40 >> 2] & 31](i22) | 0) {
   __ZN7WebCore13InlineFlowBox28determineSpacingForFlowBoxesEbbPNS_12RenderObjectE(i22, i2, i3, i4);
  }
  i22 = HEAP32[i22 + 4 >> 2] | 0;
  if ((i22 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZNK7WebCore13InlineFlowBox30collectLeafBoxesInLogicalOrderERN3WTF6VectorIPNS_9InlineBoxELj0ENS1_15CrashOnOverflowEEEPFvPvPS4_S9_ES8_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = __ZNK7WebCore13InlineFlowBox14firstLeafChildEv(i1) | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) == 0) {
  i8 = 0;
  i9 = -128;
 } else {
  i10 = i2 + 8 | 0;
  i11 = i2 + 4 | 0;
  i12 = i2 | 0;
  i13 = i6;
  i14 = i7;
  i7 = 0;
  i15 = -128;
  while (1) {
   i16 = (HEAP32[i14 + 32 >> 2] | 0) >>> 2 & 63;
   i17 = (i16 & 255) >>> 0 < (i15 & 255) >>> 0 ? i16 : i15;
   i18 = (i7 & 255) >>> 0 < (i16 & 255) >>> 0 ? i16 : i7;
   i16 = HEAP32[i10 >> 2] | 0;
   if ((i16 | 0) == (HEAP32[i11 >> 2] | 0)) {
    i19 = i16 + 1 | 0;
    i20 = HEAP32[i12 >> 2] | 0;
    do {
     if (i20 >>> 0 > i6 >>> 0) {
      i21 = 7;
     } else {
      if ((i20 + (i16 << 2) | 0) >>> 0 <= i6 >>> 0) {
       i21 = 7;
       break;
      }
      __ZN3WTF6VectorIPN7WebCore9InlineBoxELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i19);
      i22 = HEAP32[i12 >> 2] | 0;
      i23 = i22 + (i13 - i20 >> 2 << 2) | 0;
      i24 = i22;
     }
    } while (0);
    if ((i21 | 0) == 7) {
     i21 = 0;
     __ZN3WTF6VectorIPN7WebCore9InlineBoxELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i19);
     i23 = i6;
     i24 = HEAP32[i12 >> 2] | 0;
    }
    HEAP32[i24 + (HEAP32[i10 >> 2] << 2) >> 2] = HEAP32[i23 >> 2];
   } else {
    HEAP32[(HEAP32[i12 >> 2] | 0) + (i16 << 2) >> 2] = i14;
   }
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   i20 = __ZNK7WebCore9InlineBox13nextLeafChildEv(HEAP32[i6 >> 2] | 0) | 0;
   HEAP32[i6 >> 2] = i20;
   if ((i20 | 0) == 0) {
    i8 = i18;
    i9 = i17;
    break;
   } else {
    i14 = i20;
    i7 = i18;
    i15 = i17;
   }
  }
 }
 if ((HEAP32[(HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] & 32 | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 i1 = (i9 & 1 ^ 1) + i9 & 255;
 i9 = i2 | 0;
 i15 = HEAP32[i9 >> 2] | 0;
 i7 = i15 + (HEAP32[i2 + 8 >> 2] << 2) | 0;
 if ((i1 & 255) >>> 0 > (i8 & 255) >>> 0) {
  STACKTOP = i5;
  return;
 }
 i2 = (i3 | 0) == 0;
 i14 = i1;
 i1 = i15;
 while (1) {
  if ((i1 | 0) != (i7 | 0)) {
   i15 = i1;
   while (1) {
    if ((i15 | 0) == (i7 | 0)) {
     i25 = i7;
    } else {
     if (((HEAP32[(HEAP32[i15 >> 2] | 0) + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0 < (i14 & 255) >>> 0) {
      i15 = i15 + 4 | 0;
      continue;
     } else {
      i25 = i15;
     }
    }
    i6 = i25;
    while (1) {
     if ((i6 | 0) == (i7 | 0)) {
      i26 = i7;
      break;
     }
     if (((HEAP32[(HEAP32[i6 >> 2] | 0) + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0 < (i14 & 255) >>> 0) {
      i26 = i6;
      break;
     } else {
      i6 = i6 + 4 | 0;
     }
    }
    do {
     if (i2) {
      if ((i25 | 0) == (i26 | 0)) {
       break;
      }
      i6 = i26 - 4 | 0;
      if (i25 >>> 0 < i6 >>> 0) {
       i27 = i25;
       i28 = i6;
      } else {
       break;
      }
      while (1) {
       i6 = HEAP32[i27 >> 2] | 0;
       HEAP32[i27 >> 2] = HEAP32[i28 >> 2];
       HEAP32[i28 >> 2] = i6;
       i27 = i27 + 4 | 0;
       i28 = i28 - 4 | 0;
       if (i27 >>> 0 >= i28 >>> 0) {
        break;
       }
      }
     } else {
      FUNCTION_TABLE_viii[i3 & 1](i4, i25, i26);
     }
    } while (0);
    if ((i26 | 0) == (i7 | 0)) {
     break;
    } else {
     i15 = i26;
    }
   }
  }
  i15 = i14 + 1 & 255;
  if ((i15 & 255) >>> 0 > (i8 & 255) >>> 0) {
   break;
  }
  i14 = i15;
  i1 = HEAP32[i9 >> 2] | 0;
 }
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore12RenderInlineELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E3addINS_21ListHashSetTranslatorISA_EES4_PNS_24ListHashSetNodeAllocatorIS4_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS6_S6_S7_SB_SD_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore12RenderInlineELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6expandEPS6_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8;
 i10 = i9 + ~(i9 << 15) | 0;
 i9 = (i10 >>> 10 ^ i10) * 9 & -1;
 i10 = i9 >>> 6 ^ i9;
 i9 = i10 + ~(i10 << 11) | 0;
 i10 = i9 >>> 16 ^ i9;
 i9 = (i10 >>> 23) + ~i10 | 0;
 i11 = i9 << 12 ^ i9;
 i9 = i11 >>> 7 ^ i11;
 i11 = i9 << 2 ^ i9;
 i9 = i11 >>> 20 ^ i11 | 1;
 i11 = 0;
 i12 = i10;
 i10 = 0;
 while (1) {
  i13 = i12 & i6;
  i14 = i7 + (i13 << 2) | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  i16 = i15;
  if ((i16 | 0) == (-1 | 0)) {
   i17 = i14;
  } else if ((i16 | 0) == 0) {
   break;
  } else {
   if ((HEAP32[i15 >> 2] | 0) == (i8 | 0)) {
    i18 = 6;
    break;
   } else {
    i17 = i11;
   }
  }
  i15 = (i10 | 0) == 0 ? i9 : i10;
  i11 = i17;
  i12 = i15 + i13 | 0;
  i10 = i15;
 }
 if ((i18 | 0) == 6) {
  i18 = i7 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
  i7 = i1;
  HEAP32[i7 >> 2] = i14;
  HEAP32[i7 + 4 >> 2] = i18;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i11 | 0) == 0) {
  i19 = i14;
 } else {
  HEAP32[i11 >> 2] = 0;
  i14 = i2 + 16 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) - 1;
  i19 = i11;
 }
 i11 = HEAP32[i4 >> 2] | 0;
 i4 = i11 | 0;
 i14 = HEAP32[i4 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i20 = __ZN3WTF10fastMallocEj(12) | 0;
 } else {
  i18 = HEAP32[i14 + 8 >> 2] | 0;
  do {
   if ((i18 | 0) == 0) {
    i7 = i11 + 4 | 0;
    if ((HEAP8[i7] & 1) != 0) {
     i21 = 0;
     break;
    }
    i10 = i14 + 12 | 0;
    if ((i10 | 0) != (i11 + 3080 | 0)) {
     i21 = i10;
     break;
    }
    HEAP8[i7] = 1;
    i21 = 0;
   } else {
    i21 = i18;
   }
  } while (0);
  HEAP32[i4 >> 2] = i21;
  i20 = i14;
 }
 HEAP32[i20 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i20 + 4 >> 2] = 0;
 HEAP32[i20 + 8 >> 2] = 0;
 HEAP32[i19 >> 2] = i20;
 i20 = i2 + 12 | 0;
 i3 = (HEAP32[i20 >> 2] | 0) + 1 | 0;
 HEAP32[i20 >> 2] = i3;
 i20 = i2 + 4 | 0;
 i14 = HEAP32[i20 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i3 << 1 | 0) < (i14 | 0)) {
  i22 = i19;
  i23 = i14;
 } else {
  i14 = __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore12RenderInlineELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6expandEPS6_(i2, i19) | 0;
  i22 = i14;
  i23 = HEAP32[i20 >> 2] | 0;
 }
 i20 = (HEAP32[i5 >> 2] | 0) + (i23 << 2) | 0;
 i23 = i1;
 HEAP32[i23 >> 2] = i22;
 HEAP32[i23 + 4 >> 2] = i20;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore13InlineFlowBox26addBoxShadowVisualOverflowERNS_10LayoutRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, d19 = +0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i1 | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i1 + 32 | 0;
 i10 = HEAP32[i1 + 16 >> 2] | 0;
 i11 = i10;
 do {
  if ((HEAP32[i9 >> 2] & 1 | 0) == 0) {
   i12 = HEAP32[i10 + 36 >> 2] | 0;
  } else {
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i10 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
    i12 = HEAP32[i10 + 36 >> 2] | 0;
    break;
   } else {
    i12 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i11) | 0;
    break;
   }
  }
 } while (0);
 i11 = i12 + 20 | 0;
 if ((HEAP32[(HEAP32[i11 >> 2] | 0) + 100 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i10 = i4 | 0;
 HEAP32[i10 >> 2] = 0;
 i13 = i5 | 0;
 HEAP32[i13 >> 2] = 0;
 i14 = HEAP32[(HEAP32[i11 >> 2] | 0) + 100 >> 2] | 0;
 i15 = i12 + 44 | 0;
 i16 = (HEAP32[i15 >> 2] | 0) >>> 13 & 3;
 if ((i16 | 0) == 3 | (i16 | 0) == 0) {
  __ZNK7WebCore11RenderStyle23getShadowVerticalExtentEPKNS_10ShadowDataERNS_10LayoutUnitES5_(i12, i14, i4, i5);
 } else {
  __ZNK7WebCore11RenderStyle25getShadowHorizontalExtentEPKNS_10ShadowDataERNS_10LayoutUnitES5_(i12, i14, i4, i5);
 }
 if ((((HEAP32[i15 >> 2] | 0) >>> 13 & 3) - 2 | 0) >>> 0 < 2 >>> 0) {
  i17 = -(HEAP32[i10 >> 2] | 0) | 0;
  i18 = -(HEAP32[i13 >> 2] | 0) | 0;
 } else {
  i17 = HEAP32[i13 >> 2] | 0;
  i18 = HEAP32[i10 >> 2] | 0;
 }
 i10 = i1 + 24 | 0;
 i13 = i1 + 20 | 0;
 d19 = +HEAPF32[((HEAP32[i9 >> 2] & 2048 | 0) == 0 ? i13 : i10) >> 2];
 i5 = ~~d19 + i18 | 0;
 i18 = i2 + 4 | 0;
 i4 = HEAP32[i18 >> 2] | 0;
 i14 = (i4 | 0) < (i5 | 0) ? i4 : i5;
 i5 = ~~+Math_ceil(d19 + +__ZNK7WebCore9InlineBox13logicalHeightEv(i8)) + i17 | 0;
 i17 = i2 + 12 | 0;
 i8 = (HEAP32[i17 >> 2] | 0) + (HEAP32[i18 >> 2] | 0) | 0;
 i4 = i6 | 0;
 HEAP32[i4 >> 2] = 0;
 i16 = i7 | 0;
 HEAP32[i16 >> 2] = 0;
 i20 = HEAP32[(HEAP32[i11 >> 2] | 0) + 100 >> 2] | 0;
 i11 = (HEAP32[i15 >> 2] | 0) >>> 13 & 3;
 if ((i11 | 0) == 3 | (i11 | 0) == 0) {
  __ZNK7WebCore11RenderStyle25getShadowHorizontalExtentEPKNS_10ShadowDataERNS_10LayoutUnitES5_(i12, i20, i6, i7);
 } else {
  __ZNK7WebCore11RenderStyle23getShadowVerticalExtentEPKNS_10ShadowDataERNS_10LayoutUnitES5_(i12, i20, i6, i7);
 }
 d19 = +HEAPF32[((HEAP32[i9 >> 2] & 2048 | 0) == 0 ? i10 : i13) >> 2];
 i13 = (HEAP32[i4 >> 2] | 0) + ~~d19 | 0;
 i4 = i2 | 0;
 i10 = HEAP32[i4 >> 2] | 0;
 i9 = (i10 | 0) < (i13 | 0) ? i10 : i13;
 i13 = ~~+Math_ceil(d19 + +HEAPF32[i1 + 28 >> 2]);
 i1 = (HEAP32[i16 >> 2] | 0) + i13 | 0;
 i13 = i2 + 8 | 0;
 i2 = (HEAP32[i13 >> 2] | 0) + i10 | 0;
 HEAP32[i4 >> 2] = i9;
 HEAP32[i18 >> 2] = i14;
 HEAP32[i13 >> 2] = ((i1 | 0) < (i2 | 0) ? i2 : i1) - i9;
 HEAP32[i17 >> 2] = ((i5 | 0) < (i8 | 0) ? i8 : i5) - i14;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13InlineFlowBox29addBorderOutsetVisualOverflowERNS_10LayoutRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 40 | 0;
 i9 = i1 | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i10 = i1 + 32 | 0;
 i11 = HEAP32[i1 + 16 >> 2] | 0;
 i12 = i11;
 do {
  if ((HEAP32[i10 >> 2] & 1 | 0) == 0) {
   i13 = HEAP32[i11 + 36 >> 2] | 0;
  } else {
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i11 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
    i13 = HEAP32[i11 + 36 >> 2] | 0;
    break;
   } else {
    i13 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i12) | 0;
    break;
   }
  }
 } while (0);
 if (!(__ZNK7WebCore11RenderStyle21hasBorderImageOutsetsEv(i13) | 0)) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore11RenderStyle12imageOutsetsERKNS_14NinePieceImageE(i4, i13, (HEAP32[i13 + 16 >> 2] | 0) + 132 | 0);
 i12 = i13 + 44 | 0;
 __ZNK7WebCore15LayoutBoxExtent10logicalTopENS_11WritingModeE(i5, i4, (HEAP32[i12 >> 2] | 0) >>> 13 & 3);
 __ZNK7WebCore15LayoutBoxExtent13logicalBottomENS_11WritingModeE(i6, i4, (HEAP32[i12 >> 2] | 0) >>> 13 & 3);
 __ZNK7WebCore15LayoutBoxExtent11logicalLeftENS_11WritingModeE(i7, i4, (HEAP32[i12 >> 2] | 0) >>> 13 & 3);
 __ZNK7WebCore15LayoutBoxExtent12logicalRightENS_11WritingModeE(i8, i4, (HEAP32[i12 >> 2] | 0) >>> 13 & 3);
 i4 = (((HEAP32[i12 >> 2] | 0) >>> 13 & 3) - 2 | 0) >>> 0 < 2 >>> 0;
 i12 = HEAP32[(i4 ? i5 : i6) >> 2] | 0;
 i13 = i1 + 24 | 0;
 i11 = i1 + 20 | 0;
 d14 = +HEAPF32[((HEAP32[i10 >> 2] & 2048 | 0) == 0 ? i11 : i13) >> 2];
 i15 = ~~d14 - (HEAP32[(i4 ? i6 : i5) >> 2] | 0) | 0;
 i5 = i2 + 4 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i4 = (i6 | 0) < (i15 | 0) ? i6 : i15;
 i15 = ~~+Math_ceil(d14 + +__ZNK7WebCore9InlineBox13logicalHeightEv(i9)) + i12 | 0;
 i12 = i2 + 12 | 0;
 i9 = (HEAP32[i12 >> 2] | 0) + (HEAP32[i5 >> 2] | 0) | 0;
 i6 = HEAP32[i1 + 56 >> 2] | 0;
 if ((i6 & 1 | 0) == 0) {
  i16 = 0;
 } else {
  i16 = HEAP32[i7 >> 2] | 0;
 }
 if ((i6 & 2 | 0) == 0) {
  i17 = 0;
 } else {
  i17 = HEAP32[i8 >> 2] | 0;
 }
 d14 = +HEAPF32[((HEAP32[i10 >> 2] & 2048 | 0) == 0 ? i13 : i11) >> 2];
 i11 = ~~d14 - i16 | 0;
 i16 = i2 | 0;
 i13 = HEAP32[i16 >> 2] | 0;
 i10 = (i13 | 0) < (i11 | 0) ? i13 : i11;
 i11 = ~~+Math_ceil(d14 + +HEAPF32[i1 + 28 >> 2]) + i17 | 0;
 i17 = i2 + 8 | 0;
 i2 = (HEAP32[i17 >> 2] | 0) + i13 | 0;
 HEAP32[i16 >> 2] = i10;
 HEAP32[i5 >> 2] = i4;
 HEAP32[i17 >> 2] = ((i11 | 0) < (i2 | 0) ? i2 : i11) - i10;
 HEAP32[i12 >> 2] = ((i15 | 0) < (i9 | 0) ? i9 : i15) - i4;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13InlineFlowBox27setOverflowFromLogicalRectsERKNS_10LayoutRectES3_NS_10LayoutUnitES4_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
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
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i11 = i10 | 0;
 i12 = i10;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i15 = i1 + 32 | 0;
 if ((HEAP32[i15 >> 2] & 2048 | 0) == 0) {
  i16 = i7 | 0;
  i17 = HEAP32[i2 + 12 >> 2] | 0;
  i18 = HEAP32[i2 + 8 >> 2] | 0;
  i19 = HEAP32[i2 >> 2] | 0;
  HEAP32[i16 >> 2] = HEAP32[i2 + 4 >> 2];
  HEAP32[i16 + 4 >> 2] = i19;
  i19 = i7 + 8 | 0;
  HEAP32[i19 >> 2] = i17;
  HEAP32[i19 + 4 >> 2] = i18;
 } else {
  i18 = i7;
  i19 = i2;
  HEAP32[i18 >> 2] = HEAP32[i19 >> 2];
  HEAP32[i18 + 4 >> 2] = HEAP32[i19 + 4 >> 2];
  HEAP32[i18 + 8 >> 2] = HEAP32[i19 + 8 >> 2];
  HEAP32[i18 + 12 >> 2] = HEAP32[i19 + 12 >> 2];
 }
 i19 = HEAP32[i4 >> 2] | 0;
 HEAP32[i8 >> 2] = i19;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i9 >> 2] = i4;
 __ZN7WebCore13InlineFlowBox17setLayoutOverflowERKNS_10LayoutRectENS_10LayoutUnitES4_(i1, i7, i8, i9);
 if ((HEAP32[i15 >> 2] & 2048 | 0) == 0) {
  i15 = HEAP32[i3 + 12 >> 2] | 0;
  i9 = HEAP32[i3 + 8 >> 2] | 0;
  i8 = HEAP32[i3 >> 2] | 0;
  HEAP32[i11 >> 2] = HEAP32[i3 + 4 >> 2];
  HEAP32[i11 + 4 >> 2] = i8;
  i8 = i10 + 8 | 0;
  HEAP32[i8 >> 2] = i15;
  HEAP32[i8 + 4 >> 2] = i9;
  i20 = i13 | 0;
  HEAP32[i20 >> 2] = i19;
  i21 = i14 | 0;
  HEAP32[i21 >> 2] = i4;
  __ZN7WebCore13InlineFlowBox17setVisualOverflowERKNS_10LayoutRectENS_10LayoutUnitES4_(i1, i12, i13, i14);
  STACKTOP = i6;
  return;
 } else {
  i9 = i10;
  i10 = i3;
  HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i9 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
  HEAP32[i9 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
  HEAP32[i9 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
  i20 = i13 | 0;
  HEAP32[i20 >> 2] = i19;
  i21 = i14 | 0;
  HEAP32[i21 >> 2] = i4;
  __ZN7WebCore13InlineFlowBox17setVisualOverflowERKNS_10LayoutRectENS_10LayoutUnitES4_(i1, i12, i13, i14);
  STACKTOP = i6;
  return;
 }
}
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore12RenderInlineELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6expandEPS6_(i1, i2) {
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
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 2) | 0;
 if ((i6 | 0) == 0) {
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
  i5 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i5 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i14 = HEAP32[i4 >> 2] | 0;
   i16 = HEAP32[i3 >> 2] | 0;
   i17 = HEAP32[i13 >> 2] | 0;
   i18 = i17;
   i19 = i18 + ~(i18 << 15) | 0;
   i18 = (i19 >>> 10 ^ i19) * 9 & -1;
   i19 = i18 >>> 6 ^ i18;
   i18 = i19 + ~(i19 << 11) | 0;
   i19 = i18 >>> 16 ^ i18;
   i18 = (i19 >>> 23) + ~i19 | 0;
   i20 = i18 << 12 ^ i18;
   i18 = i20 >>> 7 ^ i20;
   i20 = i18 << 2 ^ i18;
   i18 = i20 >>> 20 ^ i20 | 1;
   i20 = i19;
   i19 = 0;
   i21 = 0;
   while (1) {
    i22 = i20 & i16;
    i23 = i14 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    i25 = i24;
    if ((i25 | 0) == 0) {
     i26 = 7;
     break;
    } else if ((i25 | 0) == (-1 | 0)) {
     i27 = i23;
    } else {
     if ((HEAP32[i24 >> 2] | 0) == (i17 | 0)) {
      i28 = i23;
      break;
     } else {
      i27 = i21;
     }
    }
    i24 = (i19 | 0) == 0 ? i18 : i19;
    i20 = i24 + i22 | 0;
    i19 = i24;
    i21 = i27;
   }
   if ((i26 | 0) == 7) {
    i26 = 0;
    i28 = (i21 | 0) != 0 ? i21 : i23;
   }
   HEAP32[i28 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i28 : i12;
  }
  i19 = i11 + 1 | 0;
  if ((i19 | 0) == (i6 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i19;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN7WebCore13InlineFlowBox17setVisualOverflowERKNS_10LayoutRectENS_10LayoutUnitES4_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, d10 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i1 + 32 >> 2] & 2048 | 0) == 0) {
  d9 = +HEAPF32[i1 + 24 >> 2];
  d10 = +HEAPF32[i1 + 28 >> 2];
  HEAPF32[i7 >> 2] = +(i8 | 0);
  HEAPF32[i7 + 4 >> 2] = d9;
  HEAPF32[i7 + 8 >> 2] = +(i3 - i8 | 0);
  HEAPF32[i7 + 12 >> 2] = d10;
 } else {
  d10 = +HEAPF32[i1 + 28 >> 2];
  HEAPF32[i7 >> 2] = +HEAPF32[i1 + 20 >> 2];
  HEAPF32[i7 + 4 >> 2] = +(i8 | 0);
  HEAPF32[i7 + 8 >> 2] = d10;
  HEAPF32[i7 + 12 >> 2] = +(i3 - i8 | 0);
 }
 __ZN7WebCore19enclosingLayoutRectERKNS_9FloatRectE(i6, i7);
 if (__ZNK7WebCore10LayoutRect8containsERKS0_(i6, i2) | 0) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) < 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i2 + 12 >> 2] | 0) < 1) {
  STACKTOP = i5;
  return;
 }
 i7 = i1 + 36 | 0;
 do {
  if ((HEAP32[i7 >> 2] | 0) == 0) {
   i1 = __ZN3WTF10fastMallocEj(40) | 0;
   HEAP32[i1 >> 2] = 1;
   i8 = i1 + 4 | 0;
   i3 = i6;
   HEAP32[i8 >> 2] = HEAP32[i3 >> 2];
   HEAP32[i8 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
   HEAP32[i8 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
   HEAP32[i8 + 12 >> 2] = HEAP32[i3 + 12 >> 2];
   i8 = i1 + 20 | 0;
   HEAP32[i8 >> 2] = HEAP32[i3 >> 2];
   HEAP32[i8 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
   HEAP32[i8 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
   HEAP32[i8 + 12 >> 2] = HEAP32[i3 + 12 >> 2];
   HEAP32[i1 + 36 >> 2] = 0;
   i3 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i1;
   if ((i3 | 0) == 0) {
    break;
   }
   i1 = i3 | 0;
   i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i1 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i6 = (HEAP32[i7 >> 2] | 0) + 20 | 0;
 i7 = i2;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 STACKTOP = i5;
 return;
}
function __ZN7WebCore13InlineFlowBox17setLayoutOverflowERKNS_10LayoutRectENS_10LayoutUnitES4_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, d10 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i1 + 32 >> 2] & 2048 | 0) == 0) {
  d9 = +HEAPF32[i1 + 24 >> 2];
  d10 = +HEAPF32[i1 + 28 >> 2];
  HEAPF32[i7 >> 2] = +(i8 | 0);
  HEAPF32[i7 + 4 >> 2] = d9;
  HEAPF32[i7 + 8 >> 2] = +(i3 - i8 | 0);
  HEAPF32[i7 + 12 >> 2] = d10;
 } else {
  d10 = +HEAPF32[i1 + 28 >> 2];
  HEAPF32[i7 >> 2] = +HEAPF32[i1 + 20 >> 2];
  HEAPF32[i7 + 4 >> 2] = +(i8 | 0);
  HEAPF32[i7 + 8 >> 2] = d10;
  HEAPF32[i7 + 12 >> 2] = +(i3 - i8 | 0);
 }
 __ZN7WebCore19enclosingLayoutRectERKNS_9FloatRectE(i6, i7);
 if (__ZNK7WebCore10LayoutRect8containsERKS0_(i6, i2) | 0) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) < 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i2 + 12 >> 2] | 0) < 1) {
  STACKTOP = i5;
  return;
 }
 i7 = i1 + 36 | 0;
 do {
  if ((HEAP32[i7 >> 2] | 0) == 0) {
   i1 = __ZN3WTF10fastMallocEj(40) | 0;
   HEAP32[i1 >> 2] = 1;
   i8 = i1 + 4 | 0;
   i3 = i6;
   HEAP32[i8 >> 2] = HEAP32[i3 >> 2];
   HEAP32[i8 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
   HEAP32[i8 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
   HEAP32[i8 + 12 >> 2] = HEAP32[i3 + 12 >> 2];
   i8 = i1 + 20 | 0;
   HEAP32[i8 >> 2] = HEAP32[i3 >> 2];
   HEAP32[i8 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
   HEAP32[i8 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
   HEAP32[i8 + 12 >> 2] = HEAP32[i3 + 12 >> 2];
   HEAP32[i1 + 36 >> 2] = 0;
   i3 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i1;
   if ((i3 | 0) == 0) {
    break;
   }
   i1 = i3 | 0;
   i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i1 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i6 = (HEAP32[i7 >> 2] | 0) + 4 | 0;
 i7 = i2;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore13InlineFlowBox31marginBorderPaddingLogicalRightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 + 56 | 0;
 do {
  if ((HEAP32[i6 >> 2] & 2 | 0) == 0) {
   HEAP32[i5 >> 2] = 0;
  } else {
   i7 = HEAP32[i2 + 16 >> 2] | 0;
   i8 = i7;
   i9 = HEAP32[i7 >> 2] | 0;
   if ((HEAP32[i2 + 32 >> 2] & 2048 | 0) == 0) {
    FUNCTION_TABLE_vii[HEAP32[i9 + 772 >> 2] & 7](i5, i8);
    break;
   } else {
    FUNCTION_TABLE_vii[HEAP32[i9 + 780 >> 2] & 7](i5, i8);
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP32[i6 >> 2] & 2 | 0) == 0) {
   i10 = 0;
  } else {
   i8 = HEAP32[i2 + 32 >> 2] | 0;
   i9 = (i8 & 2048 | 0) == 0;
   i7 = HEAP32[i2 + 16 >> 2] | 0;
   i11 = i7;
   do {
    if ((i8 & 1 | 0) == 0) {
     i12 = HEAP32[i7 + 36 >> 2] | 0;
    } else {
     if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i7 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
      i12 = HEAP32[i7 + 36 >> 2] | 0;
      break;
     } else {
      i12 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i11) | 0;
      break;
     }
    }
   } while (0);
   i11 = HEAP32[i12 + 16 >> 2] | 0;
   i7 = (HEAP32[(HEAP32[i11 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0;
   if (i9) {
    i8 = HEAP32[i11 + 128 >> 2] | 0;
    if (i7) {
     if ((i8 & 1879048192) >>> 0 < 268435456 >>> 0) {
      i10 = 0;
      break;
     }
    }
    i10 = i8 >>> 1 & 67108863;
    break;
   } else {
    i8 = HEAP32[i11 + 112 >> 2] | 0;
    if (i7) {
     if ((i8 & 1879048192) >>> 0 < 268435456 >>> 0) {
      i10 = 0;
      break;
     }
    }
    i10 = i8 >>> 1 & 67108863;
    break;
   }
  }
 } while (0);
 i12 = (HEAP32[i5 >> 2] | 0) + i10 | 0;
 if ((HEAP32[i6 >> 2] & 2 | 0) == 0) {
  i13 = 0;
  i14 = i1 | 0;
  i15 = i12 + i13 | 0;
  HEAP32[i14 >> 2] = i15;
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[i2 + 16 >> 2] | 0;
 i10 = i6;
 i5 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i2 + 32 >> 2] & 2048 | 0) == 0) {
  FUNCTION_TABLE_vii[HEAP32[i5 + 708 >> 2] & 7](i4, i10);
 } else {
  FUNCTION_TABLE_vii[HEAP32[i5 + 716 >> 2] & 7](i4, i10);
 }
 i13 = HEAP32[i4 >> 2] | 0;
 i14 = i1 | 0;
 i15 = i12 + i13 | 0;
 HEAP32[i14 >> 2] = i15;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore13InlineFlowBox30marginBorderPaddingLogicalLeftEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 + 56 | 0;
 do {
  if ((HEAP32[i6 >> 2] & 1 | 0) == 0) {
   HEAP32[i5 >> 2] = 0;
  } else {
   i7 = HEAP32[i2 + 16 >> 2] | 0;
   i8 = i7;
   i9 = HEAP32[i7 >> 2] | 0;
   if ((HEAP32[i2 + 32 >> 2] & 2048 | 0) == 0) {
    FUNCTION_TABLE_vii[HEAP32[i9 + 768 >> 2] & 7](i5, i8);
    break;
   } else {
    FUNCTION_TABLE_vii[HEAP32[i9 + 776 >> 2] & 7](i5, i8);
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP32[i6 >> 2] & 1 | 0) == 0) {
   i10 = 0;
  } else {
   i8 = HEAP32[i2 + 32 >> 2] | 0;
   i9 = (i8 & 2048 | 0) == 0;
   i7 = HEAP32[i2 + 16 >> 2] | 0;
   i11 = i7;
   do {
    if ((i8 & 1 | 0) == 0) {
     i12 = HEAP32[i7 + 36 >> 2] | 0;
    } else {
     if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i7 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
      i12 = HEAP32[i7 + 36 >> 2] | 0;
      break;
     } else {
      i12 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i11) | 0;
      break;
     }
    }
   } while (0);
   i11 = HEAP32[i12 + 16 >> 2] | 0;
   i7 = (HEAP32[(HEAP32[i11 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0;
   if (i9) {
    i8 = HEAP32[i11 + 120 >> 2] | 0;
    if (i7) {
     if ((i8 & 1879048192) >>> 0 < 268435456 >>> 0) {
      i10 = 0;
      break;
     }
    }
    i10 = i8 >>> 1 & 67108863;
    break;
   } else {
    i8 = HEAP32[i11 + 104 >> 2] | 0;
    if (i7) {
     if ((i8 & 1879048192) >>> 0 < 268435456 >>> 0) {
      i10 = 0;
      break;
     }
    }
    i10 = i8 >>> 1 & 67108863;
    break;
   }
  }
 } while (0);
 i12 = (HEAP32[i5 >> 2] | 0) + i10 | 0;
 if ((HEAP32[i6 >> 2] & 1 | 0) == 0) {
  i13 = 0;
  i14 = i1 | 0;
  i15 = i12 + i13 | 0;
  HEAP32[i14 >> 2] = i15;
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[i2 + 16 >> 2] | 0;
 i10 = i6;
 i5 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i2 + 32 >> 2] & 2048 | 0) == 0) {
  FUNCTION_TABLE_vii[HEAP32[i5 + 704 >> 2] & 7](i4, i10);
 } else {
  FUNCTION_TABLE_vii[HEAP32[i5 + 712 >> 2] & 7](i4, i10);
 }
 i13 = HEAP32[i4 >> 2] | 0;
 i14 = i1 | 0;
 i15 = i12 + i13 | 0;
 HEAP32[i14 >> 2] = i15;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13InlineFlowBox24addReplacedChildOverflowEPKNS_9InlineBoxERNS_10LayoutRectES5_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = HEAP32[i2 + 16 >> 2] | 0;
 i9 = i8;
 i10 = i1 + 16 | 0;
 if (__ZNK7WebCore22RenderLayerModelObject20hasSelfPaintingLayerEv(i8) | 0) {
  i11 = i2 + 32 | 0;
  i12 = i2 + 20 | 0;
  i13 = i2 + 24 | 0;
 } else {
  __ZNK7WebCore9RenderBox39logicalVisualOverflowRectForPropagationEPNS_11RenderStyleE(i6, i9, HEAP32[(HEAP32[i10 >> 2] | 0) + 36 >> 2] | 0);
  i8 = i2 + 32 | 0;
  i1 = (HEAP32[i8 >> 2] & 2048 | 0) == 0;
  i14 = i2 + 20 | 0;
  i15 = i2 + 24 | 0;
  d16 = +HEAPF32[(i1 ? i15 : i14) >> 2];
  do {
   if (d16 < +2147483647) {
    if (d16 <= +-2147483648) {
     i17 = -2147483648;
     break;
    }
    i17 = ~~d16;
   } else {
    i17 = 2147483647;
   }
  } while (0);
  d16 = +HEAPF32[(i1 ? i14 : i15) >> 2];
  do {
   if (d16 < +2147483647) {
    if (d16 <= +-2147483648) {
     i18 = -2147483648;
     break;
    }
    i18 = ~~d16;
   } else {
    i18 = 2147483647;
   }
  } while (0);
  i1 = i6 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + i17;
  i17 = i6 + 4 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + i18;
  __ZN7WebCore10LayoutRect5uniteERKS0_(i4, i6);
  i11 = i8;
  i12 = i14;
  i13 = i15;
 }
 __ZNK7WebCore9RenderBox39logicalLayoutOverflowRectForPropagationEPNS_11RenderStyleE(i7, i9, HEAP32[(HEAP32[i10 >> 2] | 0) + 36 >> 2] | 0);
 i10 = (HEAP32[i11 >> 2] & 2048 | 0) == 0;
 d16 = +HEAPF32[(i10 ? i13 : i12) >> 2];
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
 d16 = +HEAPF32[(i10 ? i12 : i13) >> 2];
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
 i13 = i7 | 0;
 HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + i19;
 i19 = i7 + 4 | 0;
 HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + i20;
 __ZN7WebCore10LayoutRect5uniteERKS0_(i3, i7);
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore13InlineFlowBox33boxShadowCanBeAppliedToBackgroundERKNS_9FillLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = i1 + 16 | 0;
  i5 = 4;
 } else {
  i2 = i1 + 16 | 0;
  i6 = HEAP32[i2 >> 2] | 0;
  if (!(FUNCTION_TABLE_iiif[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 1](i3, i6, +HEAPF32[(HEAP32[(HEAP32[i6 + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2]) | 0)) {
   i4 = i2;
   i5 = 4;
  }
 }
 do {
  if ((i5 | 0) == 4) {
   i2 = HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 36 >> 2] | 0) + 16 >> 2] | 0;
   i6 = i2;
   i3 = i2 + 136 | 0;
   if ((HEAP8[i2 + 141 | 0] | 0) == 10) {
    break;
   }
   if ((HEAP8[i2 + 142 | 0] & 1) == 0) {
    if ((HEAP32[i3 >> 2] | 0) != 0) {
     break;
    }
   } else {
    if (+HEAPF32[i3 >> 2] != +0) {
     break;
    }
   }
   i3 = i2 + 152 | 0;
   if ((HEAP8[i6 + 157 | 0] | 0) == 10) {
    break;
   }
   if ((HEAP8[i6 + 158 | 0] & 1) == 0) {
    if ((HEAP32[i3 >> 2] | 0) != 0) {
     break;
    }
   } else {
    if (+HEAPF32[i3 >> 2] != +0) {
     break;
    }
   }
   i3 = i2 + 168 | 0;
   if ((HEAP8[i6 + 173 | 0] | 0) == 10) {
    break;
   }
   if ((HEAP8[i6 + 174 | 0] & 1) == 0) {
    if ((HEAP32[i3 >> 2] | 0) != 0) {
     break;
    }
   } else {
    if (+HEAPF32[i3 >> 2] != +0) {
     break;
    }
   }
   i3 = i2 + 184 | 0;
   if ((HEAP8[i2 + 189 | 0] | 0) == 10) {
    break;
   }
   if ((HEAP8[i2 + 190 | 0] & 1) == 0) {
    if ((HEAP32[i3 >> 2] | 0) == 0) {
     i7 = 1;
    } else {
     break;
    }
    return i7 | 0;
   } else {
    if (+HEAPF32[i3 >> 2] != +0) {
     break;
    } else {
     i7 = 1;
    }
    return i7 | 0;
   }
  }
 } while (0);
 do {
  if ((HEAP32[i1 + 48 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 52 >> 2] | 0) == 0) {
    i7 = 1;
   } else {
    break;
   }
   return i7 | 0;
  }
 } while (0);
 i7 = (HEAP32[i1 + 12 >> 2] | 0) == 0;
 return i7 | 0;
}
function __ZN7WebCore13InlineFlowBox25flipLinesInBlockDirectionENS_10LayoutUnitES1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, d12 = +0, d13 = +0, d14 = +0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 + 32 | 0;
 i8 = i1 + 24 | 0;
 i9 = i1 + 20 | 0;
 i10 = HEAP32[i2 >> 2] | 0;
 d11 = +(i10 | 0);
 i2 = HEAP32[i3 >> 2] | 0;
 d12 = +(i2 | 0);
 d13 = d12 - (+HEAPF32[((HEAP32[i7 >> 2] & 2048 | 0) == 0 ? i9 : i8) >> 2] - d11);
 d14 = d13 - +__ZNK7WebCore9InlineBox13logicalHeightEv(i1 | 0);
 if ((HEAP32[i7 >> 2] & 2048 | 0) == 0) {
  HEAPF32[i9 >> 2] = d14;
 } else {
  HEAPF32[i8 >> 2] = d14;
 }
 i8 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i5 | 0;
 i9 = i6 | 0;
 i7 = i8;
 while (1) {
  do {
   if ((HEAP32[(HEAP32[i7 + 16 >> 2] | 0) + 20 >> 2] & 25165824 | 0) != 16777216) {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 40 >> 2] & 31](i7) | 0) {
     HEAP32[i1 >> 2] = i10;
     HEAP32[i9 >> 2] = i2;
     __ZN7WebCore13InlineFlowBox25flipLinesInBlockDirectionENS_10LayoutUnitES1_(i7, i5, i6);
     break;
    }
    i8 = i7 + 32 | 0;
    i3 = i7 + 24 | 0;
    i15 = i7 + 20 | 0;
    d14 = d12 - (+HEAPF32[((HEAP32[i8 >> 2] & 2048 | 0) == 0 ? i15 : i3) >> 2] - d11);
    d13 = d14 - +__ZNK7WebCore9InlineBox13logicalHeightEv(i7);
    if ((HEAP32[i8 >> 2] & 2048 | 0) == 0) {
     HEAPF32[i15 >> 2] = d13;
     break;
    } else {
     HEAPF32[i3 >> 2] = d13;
     break;
    }
   }
  } while (0);
  i7 = HEAP32[i7 + 4 >> 2] | 0;
  if ((i7 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreL30clipRectForNinePieceImageStripEPNS_13InlineFlowBoxERKNS_14NinePieceImageERKNS_10LayoutRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i1;
 i8 = i4;
 HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
 HEAP32[i7 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
 HEAP32[i7 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
 __ZNK7WebCore11RenderStyle12imageOutsetsERKNS_14NinePieceImageE(i6, HEAP32[(HEAP32[i2 + 16 >> 2] | 0) + 36 >> 2] | 0, i3);
 if ((HEAP32[i2 + 32 >> 2] & 2048 | 0) == 0) {
  i3 = HEAP32[i6 + 12 >> 2] | 0;
  HEAP32[i1 >> 2] = (HEAP32[i4 >> 2] | 0) - i3;
  HEAP32[i1 + 8 >> 2] = i3 + (HEAP32[i4 + 8 >> 2] | 0) + (HEAP32[i6 + 4 >> 2] | 0);
  i3 = HEAP32[i2 + 56 >> 2] | 0;
  if ((i3 & 1 | 0) != 0) {
   i8 = HEAP32[i6 >> 2] | 0;
   HEAP32[i1 + 4 >> 2] = (HEAP32[i4 + 4 >> 2] | 0) - i8;
   HEAP32[i1 + 12 >> 2] = i8 + (HEAP32[i4 + 12 >> 2] | 0);
  }
  if ((i3 & 2 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  i3 = i1 + 12 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i6 + 8 >> 2] | 0) + (HEAP32[i3 >> 2] | 0);
  STACKTOP = i5;
  return;
 } else {
  i3 = HEAP32[i6 >> 2] | 0;
  HEAP32[i1 + 4 >> 2] = (HEAP32[i4 + 4 >> 2] | 0) - i3;
  HEAP32[i1 + 12 >> 2] = i3 + (HEAP32[i4 + 12 >> 2] | 0) + (HEAP32[i6 + 8 >> 2] | 0);
  i3 = HEAP32[i2 + 56 >> 2] | 0;
  if ((i3 & 1 | 0) != 0) {
   i2 = HEAP32[i6 + 12 >> 2] | 0;
   HEAP32[i1 >> 2] = (HEAP32[i4 >> 2] | 0) - i2;
   HEAP32[i1 + 8 >> 2] = i2 + (HEAP32[i4 + 8 >> 2] | 0);
  }
  if ((i3 & 2 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  i3 = i1 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i6 + 4 >> 2] | 0) + (HEAP32[i3 >> 2] | 0);
  STACKTOP = i5;
  return;
 }
}
function __ZNK7WebCore12RenderObject16isAnonymousBlockEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 20 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 & 128 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = (i3 & 768 | 0) == 256;
 if (i5) {
  i6 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i6 = HEAP32[i1 + 36 >> 2] | 0;
 }
 do {
  if ((HEAP32[i6 + 48 >> 2] & 31 | 0) != 1) {
   if (i5) {
    i7 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i7 = HEAP32[i1 + 36 >> 2] | 0;
   }
   if ((HEAP32[i7 + 48 >> 2] & 31 | 0) == 16) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  }
 } while (0);
 if (i5) {
  i8 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i8 = HEAP32[i1 + 36 >> 2] | 0;
 }
 if ((HEAP32[i8 + 52 >> 2] & 4032 | 0) != 0 | i5) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i1 + 24 >> 2] & 16 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = i1;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 108 >> 2] & 31](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 248 >> 2] & 31](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i2 >> 2] & 768 | 0) == 768) {
  i4 = 0;
  return i4 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 236 >> 2] & 31](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 240 >> 2] & 31](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 272 >> 2] & 31](i1) | 0) ^ 1;
 return i4 | 0;
}
function __ZNK7WebCore11RenderStyle21hasBorderImageOutsetsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 132 >> 2] | 0;
 if ((HEAP32[i2 + 8 >> 2] | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = i2 + 76 | 0;
 if ((HEAP8[i2 + 81 | 0] | 0) == 10) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if ((HEAP8[i2 + 82 | 0] & 1) == 0) {
   if ((HEAP32[i1 >> 2] | 0) == 0) {
    break;
   } else {
    i3 = 1;
   }
   return i3 | 0;
  } else {
   if (+HEAPF32[i1 >> 2] != +0) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i1 = i2 + 84 | 0;
 if ((HEAP8[i2 + 89 | 0] | 0) == 10) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if ((HEAP8[i2 + 90 | 0] & 1) == 0) {
   if ((HEAP32[i1 >> 2] | 0) == 0) {
    break;
   } else {
    i3 = 1;
   }
   return i3 | 0;
  } else {
   if (+HEAPF32[i1 >> 2] != +0) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i1 = i2 + 92 | 0;
 if ((HEAP8[i2 + 97 | 0] | 0) == 10) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if ((HEAP8[i2 + 98 | 0] & 1) == 0) {
   if ((HEAP32[i1 >> 2] | 0) == 0) {
    break;
   } else {
    i3 = 1;
   }
   return i3 | 0;
  } else {
   if (+HEAPF32[i1 >> 2] != +0) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i1 = i2 + 100 | 0;
 if ((HEAP8[i2 + 105 | 0] | 0) == 10) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP8[i2 + 106 | 0] & 1) == 0) {
  i3 = (HEAP32[i1 >> 2] | 0) != 0;
  return i3 | 0;
 } else {
  i3 = +HEAPF32[i1 >> 2] != +0;
  return i3 | 0;
 }
 return 0;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_viff + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_iiiiiiii + 2;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_fi + 2;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_fiifffii + 2;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_vi + 16;
}
function __ZN7WebCore13InlineFlowBox16placeEllipsisBoxEbfffRfRb(i1, i2, d3, d4, d5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, d11 = +0, i12 = 0, d13 = +0, d14 = +0;
 i8 = ~~d3;
 i9 = ~~d4;
 i10 = HEAP32[(i2 ? i1 + 40 | 0 : i1 + 44 | 0) >> 2] | 0;
 if ((i10 | 0) == 0) {
  d11 = +-1;
  return +d11;
 }
 if (i2) {
  i2 = i8;
  d4 = +-1;
  i1 = i10;
  while (1) {
   d3 = +(i2 | 0);
   i12 = ~~+FUNCTION_TABLE_fiifffii[HEAP32[(HEAP32[i1 >> 2] | 0) + 116 >> 2] & 3](i1, 1, d3, +(i9 | 0), d5, i6, i7);
   if ((i12 | 0) != -1 & d4 == +-1) {
    d13 = +(i12 | 0);
   } else {
    d13 = d4;
   }
   i12 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i12 | 0) == 0) {
    d11 = d13;
    break;
   } else {
    i2 = ~~(d3 + +HEAPF32[i1 + 28 >> 2]);
    d4 = d13;
    i1 = i12;
   }
  }
  return +d11;
 }
 d13 = +(i8 | 0);
 i8 = i9;
 d4 = +-1;
 i9 = i10;
 while (1) {
  d3 = +(i8 | 0);
  i10 = ~~+FUNCTION_TABLE_fiifffii[HEAP32[(HEAP32[i9 >> 2] | 0) + 116 >> 2] & 3](i9, 0, d13, d3, d5, i6, i7);
  if ((i10 | 0) != -1 & d4 == +-1) {
   d14 = +(i10 | 0);
  } else {
   d14 = d4;
  }
  i10 = HEAP32[i9 + 8 >> 2] | 0;
  if ((i10 | 0) == 0) {
   d11 = d14;
   break;
  } else {
   i8 = ~~(d3 - +HEAPF32[i9 + 28 >> 2]);
   d4 = d14;
   i9 = i10;
  }
 }
 return +d11;
}
function __ZN7WebCore13InlineFlowBox14adjustPositionEff(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 __ZN7WebCore9InlineBox14adjustPositionEff(i1 | 0, d2, d3);
 i4 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i5 = i4;
  while (1) {
   FUNCTION_TABLE_viff[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 3](i5, d2, d3);
   i5 = HEAP32[i5 + 4 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
  }
 }
 i5 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 do {
  if (d2 < +2147483647) {
   if (d2 <= +-2147483648) {
    i6 = -2147483648;
    break;
   }
   i6 = ~~d2;
  } else {
   i6 = 2147483647;
  }
 } while (0);
 do {
  if (d3 < +2147483647) {
   if (d3 <= +-2147483648) {
    i7 = -2147483648;
    break;
   }
   i7 = ~~d3;
  } else {
   i7 = 2147483647;
  }
 } while (0);
 i1 = i5 + 4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + i6;
 i1 = i5 + 8 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + i7;
 i1 = i5 + 20 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + i6;
 i6 = i5 + 24 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + i7;
 return;
}
function __ZNK7WebCore13InlineFlowBox20computeMaxLogicalTopERf(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0, d8 = +0, d9 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i1 + 56 | 0;
 i1 = i5;
 while (1) {
  do {
   if ((HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 20 >> 2] & 25165824 | 0) != 16777216) {
    if ((HEAP32[i6 >> 2] & 16 | 0) != 0) {
     break;
    }
    d7 = +HEAPF32[i1 + 24 >> 2];
    d8 = +HEAPF32[i2 >> 2];
    HEAPF32[i2 >> 2] = d8 < d7 ? d7 : d8;
    HEAPF32[i4 >> 2] = +0;
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 40 >> 2] & 31](i1) | 0) {
     __ZNK7WebCore13InlineFlowBox20computeMaxLogicalTopERf(i1, i4);
     d9 = +HEAPF32[i4 >> 2];
    } else {
     d9 = +0;
    }
    d8 = +HEAPF32[i2 >> 2];
    HEAPF32[i2 >> 2] = d8 < d9 ? d9 : d8;
   }
  } while (0);
  i1 = HEAP32[i1 + 4 >> 2] | 0;
  if ((i1 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13InlineFlowBox26getFlowSpacingLogicalWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 __ZNK7WebCore13InlineFlowBox30marginBorderPaddingLogicalLeftEv(i4, i2);
 __ZNK7WebCore13InlineFlowBox31marginBorderPaddingLogicalRightEv(i5, i2);
 i7 = i1 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i4 >> 2] | 0) | 0;
 HEAP32[i7 >> 2] = i1;
 i4 = HEAP32[i2 + 40 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i6 | 0;
 i5 = i4;
 i4 = i1;
 while (1) {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 40 >> 2] & 31](i5) | 0) {
   __ZN7WebCore13InlineFlowBox26getFlowSpacingLogicalWidthEv(i6, i5);
   i1 = (HEAP32[i2 >> 2] | 0) + i4 | 0;
   HEAP32[i7 >> 2] = i1;
   i8 = i1;
  } else {
   i8 = i4;
  }
  i1 = HEAP32[i5 + 4 >> 2] | 0;
  if ((i1 | 0) == 0) {
   break;
  } else {
   i5 = i1;
   i4 = i8;
  }
 }
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore13InlineFlowBox35constrainToLineTopAndBottomIfNeededERNS_10LayoutRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 664 >> 2] | 0) == 2) {
  return;
 }
 i3 = HEAP32[i1 + 56 >> 2] | 0;
 if ((i3 & 4 | 0) != 0 | (i3 & 24 | 0) == 24) {
  return;
 }
 i3 = __ZNK7WebCore9InlineBox4rootEv(i1 | 0) | 0;
 i4 = (HEAP32[i1 + 32 >> 2] & 2048 | 0) == 0;
 i1 = i2 + 4 | 0;
 i5 = i2 | 0;
 i6 = HEAP32[(i4 ? i5 : i1) >> 2] | 0;
 i7 = i2 + 8 | 0;
 i8 = i2 + 12 | 0;
 i2 = HEAP32[i3 + 76 >> 2] | 0;
 i9 = i6 + (HEAP32[(i4 ? i7 : i8) >> 2] | 0) | 0;
 i10 = HEAP32[i3 + 72 >> 2] | 0;
 i3 = (i10 | 0) < (i6 | 0) ? i6 : i10;
 i10 = ((i9 | 0) < (i2 | 0) ? i9 : i2) - i3 | 0;
 if (i4) {
  HEAP32[i5 >> 2] = i3;
  HEAP32[i7 >> 2] = i10;
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  HEAP32[i8 >> 2] = i10;
  return;
 }
}
function __ZN7WebCore13InlineFlowBox11removeChildEPNS_9InlineBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 | 0;
 if ((HEAP32[i1 + 32 >> 2] & 256 | 0) == 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 104 >> 2] & 31](i3);
 }
 __ZN7WebCore13RootInlineBox12childRemovedEPNS_9InlineBoxE(__ZN7WebCore9InlineBox4rootEv(i3) | 0, i2);
 i3 = i1 + 40 | 0;
 if ((HEAP32[i3 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i3 >> 2] = HEAP32[i2 + 4 >> 2];
 }
 i3 = i1 + 44 | 0;
 if ((HEAP32[i3 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i3 >> 2] = HEAP32[i2 + 8 >> 2];
 }
 i3 = i2 + 4 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i4 = i2 + 8 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i1 + 8 >> 2] = HEAP32[i4 >> 2];
 }
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i5 = i2 + 12 | 0;
  HEAP32[i5 >> 2] = 0;
  return;
 }
 HEAP32[i1 + 4 >> 2] = HEAP32[i3 >> 2];
 i5 = i2 + 12 | 0;
 HEAP32[i5 >> 2] = 0;
 return;
}
function __ZN7WebCore13InlineFlowBox14paintBoxShadowERKNS_9PaintInfoERKNS_11RenderStyleENS_11ShadowStyleERKNS_10LayoutRectE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0;
 if ((HEAP32[i1 + 48 >> 2] | 0) == 0) {
  if ((HEAP32[i1 + 52 >> 2] | 0) != 0) {
   i6 = 3;
  }
 } else {
  i6 = 3;
 }
 do {
  if ((i6 | 0) == 3) {
   if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
    break;
   }
   i7 = HEAP32[i1 + 56 >> 2] | 0;
   __ZN7WebCore20RenderBoxModelObject14paintBoxShadowERKNS_9PaintInfoERKNS_10LayoutRectEPKNS_11RenderStyleENS_11ShadowStyleEbb(HEAP32[i1 + 16 >> 2] | 0, i2, i5, i3, i4, (i7 & 1 | 0) != 0, (i7 & 2 | 0) != 0);
   return;
  }
 } while (0);
 __ZN7WebCore20RenderBoxModelObject14paintBoxShadowERKNS_9PaintInfoERKNS_10LayoutRectEPKNS_11RenderStyleENS_11ShadowStyleEbb(HEAP32[i1 + 16 >> 2] | 0, i2, i5, i3, i4, 1, 1);
 return;
}
function __ZNK7WebCore13InlineFlowBox16roundedFrameRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, d9 = +0, i10 = 0, d11 = +0;
 i3 = i2 | 0;
 i4 = i2 + 20 | 0;
 i5 = _round(+(+HEAPF32[i4 >> 2])) | 0;
 i6 = i2 + 24 | 0;
 i7 = _round(+(+HEAPF32[i6 >> 2])) | 0;
 d8 = +HEAPF32[i4 >> 2];
 i4 = i2 + 32 | 0;
 if ((HEAP32[i4 >> 2] & 2048 | 0) == 0) {
  d9 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i3);
 } else {
  d9 = +HEAPF32[i2 + 28 >> 2];
 }
 i10 = _round(+(d8 + d9)) | 0;
 d9 = +HEAPF32[i6 >> 2];
 if ((HEAP32[i4 >> 2] & 2048 | 0) == 0) {
  d11 = +HEAPF32[i2 + 28 >> 2];
 } else {
  d11 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i3);
 }
 i3 = (_round(+(d9 + d11)) | 0) - i7 | 0;
 HEAP32[i1 >> 2] = i5;
 HEAP32[i1 + 4 >> 2] = i7;
 HEAP32[i1 + 8 >> 2] = i10 - i5;
 HEAP32[i1 + 12 >> 2] = i3;
 return;
}
function __ZN3WTF6VectorIPN7WebCore9InlineBoxELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore13InlineFlowBox15paintFillLayersERKNS_9PaintInfoERKNS_5ColorEPKNS_9FillLayerERKNS_10LayoutRectENS_17CompositeOperatorE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 if ((i4 | 0) == 0) {
  return;
 } else {
  __ZN7WebCore13InlineFlowBox15paintFillLayersERKNS_9PaintInfoERKNS_5ColorEPKNS_9FillLayerERKNS_10LayoutRectENS_17CompositeOperatorE(i1, i2, i3, HEAP32[i4 >> 2] | 0, i5, i6);
  __ZN7WebCore13InlineFlowBox14paintFillLayerERKNS_9PaintInfoERKNS_5ColorEPKNS_9FillLayerERKNS_10LayoutRectENS_17CompositeOperatorE(i1, i2, i3, i4, i5, i6);
  return;
 }
}
function __ZNK7WebCore13InlineFlowBox22canAccommodateEllipsisEbii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i5 = i1 + 40 | 0;
 while (1) {
  i1 = HEAP32[i5 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i6 = 1;
   i7 = 6;
   break;
  }
  if (FUNCTION_TABLE_iiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 112 >> 2] & 3](i1, i2, i3, i4) | 0) {
   i5 = i1 + 4 | 0;
  } else {
   i6 = 0;
   i7 = 5;
   break;
  }
 }
 if ((i7 | 0) == 6) {
  return i6 | 0;
 } else if ((i7 | 0) == 5) {
  return i6 | 0;
 }
 return 0;
}
function __ZNK7WebCore13InlineFlowBox14firstLeafChildEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 } else {
  i4 = i2;
 }
 while (1) {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 76 >> 2] & 31](i4) | 0) {
   i5 = i4;
  } else {
   i5 = __ZNK7WebCore13InlineFlowBox14firstLeafChildEv(i4) | 0;
  }
  i2 = HEAP32[i4 + 4 >> 2] | 0;
  if ((i2 | 0) != 0 & (i5 | 0) == 0) {
   i4 = i2;
  } else {
   i3 = i5;
   break;
  }
 }
 return i3 | 0;
}
function __ZN7WebCore13InlineFlowBox10deleteLineEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = i2;
  while (1) {
   i2 = HEAP32[i3 + 4 >> 2] | 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 31](i3);
   if ((i2 | 0) == 0) {
    break;
   } else {
    i3 = i2;
   }
  }
 }
 i3 = i1;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 128 >> 2] & 31](i1);
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i1);
 return;
}
function __ZNK7WebCore13InlineFlowBox13lastLeafChildEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 } else {
  i4 = i2;
 }
 while (1) {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 76 >> 2] & 31](i4) | 0) {
   i5 = i4;
  } else {
   i5 = __ZNK7WebCore13InlineFlowBox13lastLeafChildEv(i4) | 0;
  }
  i2 = HEAP32[i4 + 8 >> 2] | 0;
  if ((i2 | 0) != 0 & (i5 | 0) == 0) {
   i4 = i2;
  } else {
   i3 = i5;
   break;
  }
 }
 return i3 | 0;
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
function __ZN7WebCore13InlineFlowBox11extractLineEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP32[i1 + 32 >> 2] & 512 | 0) == 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 120 >> 2] & 31](i1);
 }
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  i3 = i2;
 }
 while (1) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 31](i3);
  i3 = HEAP32[i3 + 4 >> 2] | 0;
  if ((i3 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore13InlineFlowBox10attachLineEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP32[i1 + 32 >> 2] & 512 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 124 >> 2] & 31](i1);
 }
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  i3 = i2;
 }
 while (1) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 31](i3);
  i3 = HEAP32[i3 + 4 >> 2] | 0;
  if ((i3 | 0) == 0) {
   break;
  }
 }
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
function __ZN7WebCore13InlineFlowBox14setConstructedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 32 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 2;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  i3 = i2;
 }
 while (1) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 72 >> 2] & 31](i3);
  i3 = HEAP32[i3 + 4 >> 2] | 0;
  if ((i3 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore13InlineFlowBoxD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i2);
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
function __ZN7WebCore13InlineFlowBox15clearTruncationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  i3 = i2;
 }
 while (1) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 96 >> 2] & 31](i3);
  i3 = HEAP32[i3 + 4 >> 2] | 0;
  if ((i3 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore13InlineFlowBoxD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
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
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore13InlineFlowBox30extractLineBoxFromRenderObjectEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17RenderLineBoxList14extractLineBoxEPNS_13InlineFlowBoxE((HEAP32[i1 + 16 >> 2] | 0) + 44 | 0, i1);
 return;
}
function iii___ZNK7WebCore9InlineBox16baselinePositionENS_12FontBaselineE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore9InlineBox16baselinePositionENS_12FontBaselineE(i1 | 0, i2 | 0) | 0;
}
function __ZN7WebCore13InlineFlowBox29removeLineBoxFromRenderObjectEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17RenderLineBoxList13removeLineBoxEPNS_13InlineFlowBoxE((HEAP32[i1 + 16 >> 2] | 0) + 44 | 0, i1);
 return;
}
function __ZN7WebCore13InlineFlowBox27attachLineBoxToRenderObjectEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17RenderLineBoxList13attachLineBoxEPNS_13InlineFlowBoxE((HEAP32[i1 + 16 >> 2] | 0) + 44 | 0, i1);
 return;
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
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function dynCall_iiif(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 return FUNCTION_TABLE_iiif[i1 & 1](i2 | 0, i3 | 0, +d4) | 0;
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
function b11(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(11);
 return 0;
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
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZNK7WebCore9InlineBox20virtualLogicalHeightEv(i1) {
 i1 = i1 | 0;
 return +(+0);
}
function b8(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(8);
 return 0;
}
function b13(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 abort(13);
 return 0;
}
function __ZNK7WebCore13InlineFlowBox15isInlineFlowBoxEv(i1) {
 i1 = i1 | 0;
 return 1;
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
function __ZNK7WebCore9InlineBox18isInlineElementBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore13InlineFlowBox14selectionStateEv(i1) {
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
function b9(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(9);
}
function __ZNK7WebCore13InlineFlowBox6isLeafEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b10(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 abort(10);
}
function b12(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(12);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
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
function b2() {
 abort(2);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiiiiiii = [b0,b0,__ZN7WebCore13InlineFlowBox11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_10LayoutUnitESC_,b0];
  var FUNCTION_TABLE_fi = [b1,b1,__ZNK7WebCore9InlineBox20virtualLogicalHeightEv,b1];
  var FUNCTION_TABLE_v = [b2,b2];
  var FUNCTION_TABLE_viiiii = [b3,b3,__ZN7WebCore13InlineFlowBox5paintERNS_9PaintInfoERKNS_11LayoutPointENS_10LayoutUnitES6_,b3];
  var FUNCTION_TABLE_vi = [b4,b4,__ZN7WebCore13InlineFlowBox11extractLineEv,b4,vi___ZN7WebCore9InlineBox14dirtyLineBoxesEv__wrapper,b4,__ZN7WebCore13InlineFlowBox10deleteLineEv,b4,__ZN7WebCore13InlineFlowBox30extractLineBoxFromRenderObjectEv,b4,__ZN7WebCore13InlineFlowBox10attachLineEv,b4,__ZN7WebCore13InlineFlowBox14setConstructedEv,b4,__ZN7WebCore13InlineFlowBoxD1Ev,b4,__ZN7WebCore13InlineFlowBox29removeLineBoxFromRenderObjectEv,b4,__ZN7WebCore13InlineFlowBox15clearTruncationEv,b4,__ZN7WebCore13InlineFlowBoxD0Ev,b4,__ZN7WebCore13InlineFlowBox27attachLineBoxToRenderObjectEv,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4];
  var FUNCTION_TABLE_vii = [b5,b5,__ZN7WebCore9InlineBox9markDirtyEb,b5,__ZNK7WebCore9InlineBox19calculateBoundariesEv,b5,vii___ZNK7WebCore9InlineBox10lineHeightEv__wrapper,b5];
  var FUNCTION_TABLE_fiifffii = [b6,b6,__ZN7WebCore13InlineFlowBox16placeEllipsisBoxEbfffRfRb,b6];
  var FUNCTION_TABLE_ii = [b7,b7,__ZNK7WebCore9InlineBox15isRootInlineBoxEv,b7,__ZNK7WebCore9InlineBox18isSVGInlineFlowBoxEv,b7,ii___ZNK7WebCore9InlineBox14caretMaxOffsetEv__wrapper,b7,__ZNK7WebCore9InlineBox18isSVGRootInlineBoxEv,b7,__ZNK7WebCore9InlineBox15isInlineTextBoxEv,b7,__ZNK7WebCore9InlineBox18isSVGInlineTextBoxEv,b7,__ZNK7WebCore13InlineFlowBox15isInlineFlowBoxEv,b7,ii___ZNK7WebCore9InlineBox14caretMinOffsetEv__wrapper,b7,__ZNK7WebCore13InlineFlowBox6isLeafEv,b7,__ZNK7WebCore9InlineBox11isLineBreakEv,b7,__ZN7WebCore13InlineFlowBox14selectionStateEv,b7,__ZNK7WebCore9InlineBox18isInlineElementBoxEv,b7,b7,b7,b7
  ,b7,b7,b7];
  var FUNCTION_TABLE_iiii = [b8,b8];
  var FUNCTION_TABLE_viii = [b9,b9];
  var FUNCTION_TABLE_viff = [b10,b10,__ZN7WebCore13InlineFlowBox14adjustPositionEff,b10];
  var FUNCTION_TABLE_iiiii = [b11,b11,__ZNK7WebCore13InlineFlowBox22canAccommodateEllipsisEbii,b11];
  var FUNCTION_TABLE_iii = [b12,b12,iii___ZNK7WebCore9InlineBox16baselinePositionENS_12FontBaselineE__wrapper,b12];
  var FUNCTION_TABLE_iiif = [b13,b13];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiiiiii: dynCall_iiiiiiii, dynCall_fi: dynCall_fi, dynCall_v: dynCall_v, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_fiifffii: dynCall_fiifffii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_viff: dynCall_viff, dynCall_iiiii: dynCall_iiiii, dynCall_iii: dynCall_iii, dynCall_iiif: dynCall_iiif };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiiiiii": invoke_iiiiiiii, "invoke_fi": invoke_fi, "invoke_v": invoke_v, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_fiifffii": invoke_fiifffii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_viff": invoke_viff, "invoke_iiiii": invoke_iiiii, "invoke_iii": invoke_iii, "invoke_iiif": invoke_iiif, "_llvm_lifetime_end": _llvm_lifetime_end, "_ceilf": _ceilf, "___setErrNo": ___setErrNo, "_malloc": _malloc, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "_round": _round, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] = asm["dynCall_iiiiiiii"];
var dynCall_fi = Module["dynCall_fi"] = asm["dynCall_fi"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_fiifffii = Module["dynCall_fiifffii"] = asm["dynCall_fiifffii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_viff = Module["dynCall_viff"] = asm["dynCall_viff"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_iiif = Module["dynCall_iiif"] = asm["dynCall_iiif"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore13InlineFlowBox17setVisualOverflowERKNS_10LayoutRectENS_10LayoutUnitES4_","__ZN7WebCore13InlineFlowBox27placeBoxesInInlineDirectionEfRbRN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS2_6VectorIPKNS_14SimpleFontDataELj0ENS2_15CrashOnOverflowEEENS_13GlyphOverflowEEENS2_7PtrHashIS6_EENS2_10HashTraitsIS6_EENSJ_ISG_EEEE","__ZNK7WebCore13InlineFlowBox31marginBorderPaddingLogicalRightEv","__ZN7WebCore13InlineFlowBox14setConstructedEv","__ZN7WebCore13InlineFlowBox9addToLineEPNS_9InlineBoxE","__ZNK7WebCore12RenderObject16isAnonymousBlockEv","__ZNK7WebCore13InlineFlowBox30collectLeafBoxesInLogicalOrderERN3WTF6VectorIPNS_9InlineBoxELj0ENS1_15CrashOnOverflowEEEPFvPvPS4_S9_ES8_","__ZN7WebCoreL30clipRectForNinePieceImageStripEPNS_13InlineFlowBoxERKNS_14NinePieceImageERKNS_10LayoutRectE","__ZN7WebCore13InlineFlowBox15paintFillLayersERKNS_9PaintInfoERKNS_5ColorEPKNS_9FillLayerERKNS_10LayoutRectENS_17CompositeOperatorE","__ZNK7WebCore13InlineFlowBox20computeMaxLogicalTopERf","__ZNK7WebCore13InlineFlowBox13lastLeafChildEv","__ZN7WebCore13InlineFlowBox26addBoxShadowVisualOverflowERNS_10LayoutRectE","__ZN7WebCore13InlineFlowBox17setLayoutOverflowERKNS_10LayoutRectENS_10LayoutUnitES4_","__ZN7WebCore13InlineFlowBox11extractLineEv","__ZN7WebCore13InlineFlowBox30placeBoxRangeInInlineDirectionEPNS_9InlineBoxES2_RfS3_S3_RbRN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS5_6VectorIPKNS_14SimpleFontDataELj0ENS5_15CrashOnOverflowEEENS_13GlyphOverflowEEENS5_7PtrHashIS9_EENS5_10HashTraitsIS9_EENSM_ISJ_EEEE","__ZN7WebCore13InlineFlowBox5paintERNS_9PaintInfoERKNS_11LayoutPointENS_10LayoutUnitES6_","__ZNK7WebCore9InlineBox18isSVGInlineTextBoxEv","__ZNK7WebCore13InlineFlowBox15isInlineFlowBoxEv","__ZN7WebCore13InlineFlowBox14selectionStateEv","__ZN7WebCore13InlineFlowBox14paintBoxShadowERKNS_9PaintInfoERKNS_11RenderStyleENS_11ShadowStyleERKNS_10LayoutRectE","__ZN7WebCore13InlineFlowBox10deleteLineEv","__ZN7WebCore13InlineFlowBox25flipLinesInBlockDirectionENS_10LayoutUnitES1_","_memset","__ZNK7WebCore13InlineFlowBox27requiresIdeographicBaselineERKN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS1_6VectorIPKNS_14SimpleFontDataELj0ENS1_15CrashOnOverflowEEENS_13GlyphOverflowEEENS1_7PtrHashIS5_EENS1_10HashTraitsIS5_EENSI_ISF_EEEE","__ZNK7WebCore13InlineFlowBox33boxShadowCanBeAppliedToBackgroundERKNS_9FillLayerE","__ZN7WebCore13InlineFlowBox27setOverflowFromLogicalRectsERKNS_10LayoutRectES3_NS_10LayoutUnitES4_","__ZNK7WebCore13InlineFlowBox35constrainToLineTopAndBottomIfNeededERNS_10LayoutRectE","__ZN7WebCore13InlineFlowBox25adjustMaxAscentAndDescentERiS1_ii","__ZNK7WebCore13InlineFlowBox6isLeafEv","__ZN7WebCore13InlineFlowBox15computeOverflowENS_10LayoutUnitES1_RN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS2_6VectorIPKNS_14SimpleFontDataELj0ENS2_15CrashOnOverflowEEENS_13GlyphOverflowEEENS2_7PtrHashIS6_EENS2_10HashTraitsIS6_EENSJ_ISG_EEEE","__ZN7WebCore13InlineFlowBox26placeBoxesInBlockDirectionENS_10LayoutUnitES1_ibRS1_S2_RbS2_S2_S3_S3_NS_12FontBaselineE","__ZNK7WebCore13InlineFlowBox30marginBorderPaddingLogicalLeftEv","__ZN7WebCore13InlineFlowBox30extractLineBoxFromRenderObjectEv","__ZNK7WebCore11RenderStyle21hasBorderImageOutsetsEv","__ZN7WebCore13InlineFlowBox10attachLineEv","__ZNK7WebCore9InlineBox20virtualLogicalHeightEv","__ZNK7WebCore13InlineFlowBox16roundedFrameRectEv","__ZN7WebCore13InlineFlowBox26getFlowSpacingLogicalWidthEv","__ZNK7WebCore9InlineBox11isLineBreakEv","__ZN7WebCore13InlineFlowBoxD1Ev","__ZNK7WebCore13InlineFlowBox31computeOverAnnotationAdjustmentENS_10LayoutUnitE","__ZN7WebCore13InlineFlowBox14paintFillLayerERKNS_9PaintInfoERKNS_5ColorEPKNS_9FillLayerERKNS_10LayoutRectENS_17CompositeOperatorE","__ZNK7WebCore13InlineFlowBox14firstLeafChildEv","__ZNK7WebCore13InlineFlowBox22canAccommodateEllipsisEbii","__ZN7WebCore13InlineFlowBox29removeLineBoxFromRenderObjectEv","__ZN7WebCore13InlineFlowBox24computeLogicalBoxHeightsEPNS_13RootInlineBoxERNS_10LayoutUnitES4_RiS5_RbS6_bRN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS7_6VectorIPKNS_14SimpleFontDataELj0ENS7_15CrashOnOverflowEEENS_13GlyphOverflowEEENS7_7PtrHashISB_EENS7_10HashTraitsISB_EENSO_ISL_EEEENS_12FontBaselineERNS_21VerticalPositionCacheE","__ZN7WebCore13InlineFlowBox14adjustPositionEff","__ZN7WebCore13InlineFlowBox15clearTruncationEv","__ZN7WebCore13InlineFlowBox24addReplacedChildOverflowEPKNS_9InlineBoxERNS_10LayoutRectES5_","__ZN7WebCore13InlineFlowBox28determineSpacingForFlowBoxesEbbPNS_12RenderObjectE","__ZN7WebCore13InlineFlowBoxD0Ev","_strlen","__ZN7WebCore13InlineFlowBox16placeEllipsisBoxEbfffRfRb","_memcpy","__ZNK7WebCore9InlineBox18isSVGRootInlineBoxEv","__ZN7WebCore13InlineFlowBox27attachLineBoxToRenderObjectEv","__ZN7WebCore13InlineFlowBox19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE","__ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore12RenderInlineELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E3addINS_21ListHashSetTranslatorISA_EES4_PNS_24ListHashSetNodeAllocatorIS4_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS6_S6_S7_SB_SD_SD_EEEEOT0_OT1_","__ZN7WebCore9InlineBox9markDirtyEb","__ZN7WebCore13InlineFlowBox11removeChildEPNS_9InlineBoxE","__ZNK7WebCore9InlineBox15isRootInlineBoxEv","__ZN3WTF6VectorIPN7WebCore9InlineBoxELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore13InlineFlowBox29addBorderOutsetVisualOverflowERNS_10LayoutRectE","__ZNK7WebCore9InlineBox19calculateBoundariesEv","__ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore12RenderInlineELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6expandEPS6_","__ZN7WebCore13InlineFlowBox24addTextBoxVisualOverflowEPNS_13InlineTextBoxERN3WTF7HashMapIPKS1_NSt3__14pairINS3_6VectorIPKNS_14SimpleFontDataELj0ENS3_15CrashOnOverflowEEENS_13GlyphOverflowEEENS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EENSJ_ISG_EEEERNS_10LayoutRectE","__ZNK7WebCore9InlineBox18isInlineElementBoxEv","__ZNK7WebCore9InlineBox15isInlineTextBoxEv","__ZN7WebCore13InlineFlowBox11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_10LayoutUnitESC_","__ZN7WebCore13InlineFlowBox9paintMaskERNS_9PaintInfoERKNS_11LayoutPointE","__ZNK7WebCore13InlineFlowBox32computeUnderAnnotationAdjustmentENS_10LayoutUnitE","__ZNK7WebCore9InlineBox18isSVGInlineFlowBoxEv"]

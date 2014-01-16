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
var Math_min = Math.min;
function invoke_iiiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    return Module["dynCall_iiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
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
  var invoke_iiiiiiii=env.invoke_iiiiiiii;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore17RenderLineBoxList5paintEPNS_20RenderBoxModelObjectERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, d25 = +0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 24 | 0;
 i9 = i5 + 72 | 0;
 i10 = i5 + 104 | 0;
 i11 = i5 + 112 | 0;
 i12 = HEAP32[i3 + 20 >> 2] | 0;
 switch (i12 | 0) {
 case 4:
 case 8:
 case 5:
 case 7:
 case 6:
 case 10:
 case 11:
  {
   break;
  }
 default:
  {
   STACKTOP = i5;
   return;
  }
 }
 i13 = i1 | 0;
 if ((HEAP32[i13 >> 2] | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i14 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
 if ((HEAP32[i14 + 164 >> 2] | 0) < 1) {
  i15 = 1;
 } else {
  i15 = (HEAP32[i14 + 168 >> 2] | 0) < 1;
 }
 i16 = __ZNK7WebCore12RenderObject18maximalOutlineSizeENS_10PaintPhaseE(i2 | 0, i12) | 0;
 i12 = i3 + 4 | 0;
 i17 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i6 + 4 >> 2] = i17;
 i17 = i3 + 12 | 0;
 i12 = HEAP32[i17 + 4 >> 2] | 0;
 HEAP32[i6 + 8 >> 2] = HEAP32[i17 >> 2];
 HEAP32[i6 + 12 >> 2] = i12;
 HEAP32[i7 >> 2] = i16;
 if (!(__ZNK7WebCore17RenderLineBoxList21anyLineIntersectsRectEPNS_20RenderBoxModelObjectERKNS_10LayoutRectERKNS_11LayoutPointEbNS_10LayoutUnitE(i1, i2, i6, i4, i15 ^ 1, i7) | 0)) {
  STACKTOP = i5;
  return;
 }
 _memcpy(i8 | 0, i3 | 0, 48) | 0;
 _memset(i9 | 0, 0, 28) | 0;
 i3 = __Znwj(3080) | 0;
 i7 = i3 + 8 | 0;
 HEAP32[i3 >> 2] = i7;
 HEAP8[i3 + 4 | 0] = 0;
 _memset(i7 | 0, 0, 3072) | 0;
 i7 = i9 + 28 | 0;
 HEAP32[i7 >> 2] = i3;
 i3 = i8 + 36 | 0;
 HEAP32[i3 >> 2] = i9;
 i6 = HEAP32[i13 >> 2] | 0;
 L13 : do {
  if ((i6 | 0) != 0) {
   i13 = i10 | 0;
   i1 = i11 | 0;
   i16 = i14 + 168 | 0;
   i12 = i4 + 4 | 0;
   i17 = i14 + 160 | 0;
   i18 = i14 + 148 | 0;
   i19 = i6;
   while (1) {
    do {
     if (!i15) {
      i20 = __ZN7WebCore9InlineBox4rootEv(i19 | 0) | 0;
      i21 = i20 + 72 | 0;
      i22 = HEAP32[i19 + 36 >> 2] | 0;
      i23 = HEAP32[i19 + 32 >> 2] | 0;
      do {
       if ((i22 | 0) == 0) {
        i24 = HEAP32[i21 >> 2] | 0;
        d25 = +HEAPF32[((i23 & 2048 | 0) == 0 ? i19 + 24 | 0 : i19 + 20 | 0) >> 2];
        if (d25 >= +2147483647) {
         i26 = 2147483647;
         i27 = i24;
         break;
        }
        if (d25 <= +-2147483648) {
         i26 = -2147483648;
         i27 = i24;
         break;
        }
        i26 = ~~d25;
        i27 = i24;
       } else {
        if ((i23 & 2048 | 0) == 0) {
         i24 = HEAP32[i22 + 20 >> 2] | 0;
         if ((i23 & 2048 | 0) == 0) {
          i28 = i24;
          i29 = 14;
         } else {
          i30 = i24;
          i29 = 13;
         }
        } else {
         i24 = HEAP32[i22 + 24 >> 2] | 0;
         if ((i23 & 2048 | 0) == 0) {
          i28 = i24;
          i29 = 14;
         } else {
          i30 = i24;
          i29 = 13;
         }
        }
        if ((i29 | 0) == 13) {
         i29 = 0;
         i26 = HEAP32[i22 + 20 >> 2] | 0;
         i27 = i30;
         break;
        } else if ((i29 | 0) == 14) {
         i29 = 0;
         i26 = HEAP32[i22 + 24 >> 2] | 0;
         i27 = i28;
         break;
        }
       }
      } while (0);
      if ((HEAP32[i19 + 12 >> 2] | 0) == 0) {
       i22 = HEAP32[i21 >> 2] | 0;
       i23 = HEAP32[i20 + 76 >> 2] | 0;
       i31 = (i26 | 0) < (i23 | 0) ? i23 : i26;
       i32 = (i22 | 0) < (i27 | 0) ? i22 : i27;
      } else {
       i31 = i26;
       i32 = i27;
      }
      i22 = HEAP32[i16 >> 2] | 0;
      if ((i31 - i32 | 0) > (i22 | 0)) {
       break;
      }
      i23 = HEAP32[i12 >> 2] | 0;
      i24 = (HEAP32[i17 >> 2] | 0) + i22 | 0;
      do {
       if ((i23 + i31 | 0) > (i24 | 0)) {
        i22 = HEAP32[i20 + 52 >> 2] | 0;
        if ((i22 | 0) == 0) {
         i33 = i31;
         break;
        }
        i34 = HEAP32[i22 + 36 >> 2] | 0;
        do {
         if ((i34 | 0) == 0) {
          i35 = i22 + 72 | 0;
         } else {
          if ((HEAP32[i22 + 32 >> 2] & 2048 | 0) == 0) {
           i35 = i34 + 20 | 0;
           break;
          } else {
           i35 = i34 + 24 | 0;
           break;
          }
         }
        } while (0);
        i34 = HEAP32[i35 >> 2] | 0;
        i36 = HEAP32[i22 + 72 >> 2] | 0;
        i37 = (i36 | 0) < (i34 | 0) ? i36 : i34;
        i33 = (i37 | 0) < (i31 | 0) ? i37 : i31;
       } else {
        i33 = i31;
       }
      } while (0);
      if ((i33 + i23 | 0) <= (i24 | 0)) {
       break;
      }
      i20 = i32 + i23 | 0;
      i21 = HEAP32[i18 >> 2] | 0;
      if ((i20 | 0) < (i21 | 0)) {
       __ZN7WebCore10RenderView18setBestTruncatedAtEiPNS_20RenderBoxModelObjectEb(i14, i20, i2, 0);
       i38 = HEAP32[i12 >> 2] | 0;
       i39 = HEAP32[i18 >> 2] | 0;
      } else {
       i38 = i23;
       i39 = i21;
      }
      if ((i32 + i38 | 0) >= (i39 | 0)) {
       break L13;
      }
     }
    } while (0);
    if (__ZNK7WebCore17RenderLineBoxList23lineIntersectsDirtyRectEPNS_20RenderBoxModelObjectEPNS_13InlineFlowBoxERKNS_9PaintInfoERKNS_11LayoutPointE(0, i2, i19, i8, i4) | 0) {
     i21 = __ZN7WebCore9InlineBox4rootEv(i19 | 0) | 0;
     i20 = HEAP32[(HEAP32[i19 >> 2] | 0) + 28 >> 2] | 0;
     HEAP32[i13 >> 2] = HEAP32[i21 + 72 >> 2];
     HEAP32[i1 >> 2] = HEAP32[i21 + 76 >> 2];
     FUNCTION_TABLE_viiiii[i20 & 1](i19, i8, i4, i10, i11);
    }
    i19 = HEAP32[i19 + 52 >> 2] | 0;
    if ((i19 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 if (((HEAP32[i8 + 20 >> 2] | 0) - 5 | 0) >>> 0 < 3 >>> 0) {
  i11 = HEAP32[i3 >> 2] | 0;
  i10 = HEAP32[i11 + 20 >> 2] | 0;
  do {
   if ((i10 | 0) == 0) {
    i40 = i11;
    i41 = i11 + 20 | 0;
   } else {
    i2 = i10;
    while (1) {
     __ZN7WebCore12RenderInline12paintOutlineERNS_9PaintInfoERKNS_11LayoutPointE(HEAP32[i2 >> 2] | 0, i8, i4);
     i2 = HEAP32[i2 + 8 >> 2] | 0;
     if ((i2 | 0) == 0) {
      break;
     }
    }
    i2 = HEAP32[i3 >> 2] | 0;
    i39 = HEAP32[i2 + 20 >> 2] | 0;
    i38 = i2 + 20 | 0;
    if ((i39 | 0) == 0) {
     i40 = i2;
     i41 = i38;
     break;
    }
    i32 = i2 + 28 | 0;
    i14 = i39;
    while (1) {
     i39 = i14 + 8 | 0;
     i33 = HEAP32[i39 >> 2] | 0;
     i31 = HEAP32[i32 >> 2] | 0;
     i35 = i31 + 8 | 0;
     do {
      if (i35 >>> 0 > i14 >>> 0) {
       i29 = 45;
      } else {
       if ((i35 + 3072 | 0) >>> 0 <= i14 >>> 0) {
        i29 = 45;
        break;
       }
       i27 = i31 | 0;
       HEAP32[i39 >> 2] = HEAP32[i27 >> 2];
       HEAP32[i27 >> 2] = i14;
      }
     } while (0);
     if ((i29 | 0) == 45) {
      i29 = 0;
      __ZN3WTF8fastFreeEPv(i14);
     }
     if ((i33 | 0) == 0) {
      i40 = i2;
      i41 = i38;
      break;
     } else {
      i14 = i33;
     }
    }
   }
  } while (0);
  i3 = HEAP32[i40 >> 2] | 0;
  if ((i3 | 0) != 0) {
   __ZN3WTF8fastFreeEPv(i3);
   _memset(i40 | 0, 0, 16) | 0;
  }
  HEAP32[i41 >> 2] = 0;
  HEAP32[i40 + 24 >> 2] = 0;
 }
 i40 = HEAP32[i9 + 20 >> 2] | 0;
 if ((i40 | 0) != 0) {
  i41 = i40;
  while (1) {
   i40 = i41 + 8 | 0;
   i3 = HEAP32[i40 >> 2] | 0;
   i4 = HEAP32[i7 >> 2] | 0;
   i8 = i4 + 8 | 0;
   do {
    if (i8 >>> 0 > i41 >>> 0) {
     i29 = 54;
    } else {
     if ((i8 + 3072 | 0) >>> 0 <= i41 >>> 0) {
      i29 = 54;
      break;
     }
     i10 = i4 | 0;
     HEAP32[i40 >> 2] = HEAP32[i10 >> 2];
     HEAP32[i10 >> 2] = i41;
    }
   } while (0);
   if ((i29 | 0) == 54) {
    i29 = 0;
    __ZN3WTF8fastFreeEPv(i41);
   }
   if ((i3 | 0) == 0) {
    break;
   } else {
    i41 = i3;
   }
  }
 }
 i41 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 if ((i41 | 0) != 0) {
  __ZdlPv(i41);
 }
 i41 = HEAP32[i9 >> 2] | 0;
 if ((i41 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZN3WTF8fastFreeEPv(i41);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore17RenderLineBoxList26dirtyLinesFromChangedChildEPNS_20RenderBoxModelObjectEPNS_12RenderObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = i2 | 0;
 i5 = i2 + 8 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  return;
 }
 i6 = i2 + 24 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 & 32 | 0) != 0) {
   if ((HEAP32[i2 + 20 >> 2] & 1 | 0) == 0) {
    break;
   }
   return;
  }
 } while (0);
 do {
  if ((i7 & 4 | 0) == 0) {
   i8 = 9;
  } else {
   i9 = i2;
   if ((i2 | 0) == 0) {
    i8 = 9;
    break;
   }
   if ((HEAP8[i2 + 25 | 0] & 1) == 0) {
    i10 = __ZNK7WebCore12RenderInline24culledInlineFirstLineBoxEv(i9) | 0;
    i11 = i9;
    i12 = 1;
    break;
   } else {
    i10 = HEAP32[i2 + 44 >> 2] | 0;
    i11 = i9;
    i12 = 1;
    break;
   }
  }
 } while (0);
 if ((i8 | 0) == 9) {
  i10 = HEAP32[i1 >> 2] | 0;
  i11 = 0;
  i12 = 0;
 }
 if ((i10 | 0) == 0) {
  i1 = i2 + 20 | 0;
  if ((HEAP32[i1 >> 2] & 1024 | 0) == 0) {
   return;
  }
  if ((HEAP8[i6] & 64) != 0) {
   return;
  }
  i2 = HEAP32[i5 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 644 >> 2] & 1](i2, i4);
  HEAP8[i6] = HEAP8[i6] | 64;
  i6 = HEAP32[i1 >> 2] | 0;
  if ((i6 & 1 | 0) != 0) {
   return;
  }
  HEAP32[i1 >> 2] = i6 | 1;
  __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i4, 1, 0);
  if ((HEAP32[i1 >> 2] & 32768 | 0) == 0) {
   return;
  }
  __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i4);
  return;
 }
 i4 = i3 + 12 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 L33 : do {
  if ((i1 | 0) == 0) {
   i8 = 35;
  } else {
   i6 = i1;
   while (1) {
    i2 = i6 + 20 | 0;
    i5 = HEAP32[i2 >> 2] | 0;
    if (!((i5 & 64 | 0) != 0 | (i5 & 25165824 | 0) == 16777216)) {
     do {
      if ((i5 & 2048 | 0) == 0) {
       i13 = 0;
       i14 = i5;
      } else {
       i7 = HEAP32[i6 + 84 >> 2] | 0;
       if ((i7 | 0) == 0) {
        i13 = 0;
        i14 = i5;
        break;
       }
       i9 = __ZN7WebCore9InlineBox4rootEv(i7) | 0;
       i13 = i9;
       i14 = HEAP32[i2 >> 2] | 0;
      }
     } while (0);
     do {
      if ((i14 & 4096 | 0) == 0) {
       if ((i14 & 768 | 0) == 256) {
        i2 = HEAP32[i6 + 52 >> 2] | 0;
        if ((i2 | 0) == 0) {
         i15 = i13;
         break;
        }
        i15 = __ZN7WebCore9InlineBox4rootEv(i2) | 0;
        break;
       }
       if ((HEAP32[i6 + 24 >> 2] & 4 | 0) == 0) {
        i15 = i13;
        break;
       }
       i2 = i6;
       if ((HEAP8[i2 + 25 | 0] & 1) == 0) {
        i16 = __ZNK7WebCore12RenderInline23culledInlineLastLineBoxEv(i2) | 0;
       } else {
        i16 = HEAP32[i6 + 48 >> 2] | 0;
       }
       if ((i16 | 0) == 0) {
        i15 = i13;
        break;
       }
       i15 = __ZN7WebCore9InlineBox4rootEv(i16) | 0;
      } else {
       i2 = HEAP32[i6 + 44 >> 2] | 0;
       if ((i2 | 0) == 0) {
        i15 = i13;
        break;
       }
       i15 = __ZN7WebCore9InlineBox4rootEv(i2 | 0) | 0;
      }
     } while (0);
     if ((i15 | 0) != 0) {
      i17 = i15;
      i18 = i6;
      i19 = 1;
      break L33;
     }
    }
    i2 = HEAP32[i6 + 12 >> 2] | 0;
    if ((i2 | 0) == 0) {
     i8 = 35;
     break;
    } else {
     i6 = i2;
    }
   }
  }
 } while (0);
 do {
  if ((i8 | 0) == 35) {
   do {
    if (i12) {
     if ((HEAP8[i11 + 25 | 0] & 1) != 0) {
      break;
     }
     i15 = i11 + 24 | 0;
     if ((HEAP8[i15] & 64) != 0) {
      return;
     }
     i13 = i11 | 0;
     i16 = HEAP32[i11 + 8 >> 2] | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i16 >> 2] | 0) + 644 >> 2] & 1](i16, i13);
     HEAP8[i15] = HEAP8[i15] | 64;
     i15 = i11 + 20 | 0;
     i16 = HEAP32[i15 >> 2] | 0;
     if ((i16 & 1 | 0) != 0) {
      return;
     }
     HEAP32[i15 >> 2] = i16 | 1;
     __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i13, 1, 0);
     if ((HEAP32[i15 >> 2] & 32768 | 0) == 0) {
      return;
     }
     __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i13);
     return;
    }
   } while (0);
   i13 = __ZN7WebCore9InlineBox4rootEv(i10) | 0;
   if ((i13 | 0) != 0) {
    i17 = i13;
    i18 = 0;
    i19 = 0;
    break;
   }
   return;
  }
 } while (0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 100 >> 2] & 1](i17 | 0, 1);
 i10 = HEAP32[i17 + 48 >> 2] | 0;
 if ((i10 | 0) != 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 100 >> 2] & 1](i10 | 0, 1);
 }
 i10 = HEAP32[i17 + 52 >> 2] | 0;
 i11 = (HEAP32[i17 + 64 >> 2] | 0) == (HEAP32[i4 >> 2] | 0);
 if ((i10 | 0) == 0) {
  return;
 }
 do {
  if ((HEAP32[i10 + 64 >> 2] | 0) != (i3 | 0)) {
   if ((HEAP32[i3 + 20 >> 2] & 4096 | 0) != 0) {
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 620 >> 2] & 1](i3) | 0)) {
     break;
    }
   }
   if (!i19) {
    if (i11) {
     break;
    }
    return;
   }
   if ((HEAP32[i18 + 20 >> 2] & 4096 | 0) == 0) {
    i20 = 0;
   } else {
    i20 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 620 >> 2] & 1](i18) | 0) ^ 1;
   }
   if (i20 | i11) {
    break;
   }
   return;
  }
 } while (0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 100 >> 2] & 1](i10 | 0, 1);
 return;
}
function __ZNK7WebCore17RenderLineBoxList7hitTestEPNS_20RenderBoxModelObjectERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i9 = i8 | 0;
 i10 = i8 + 16 | 0;
 i11 = i8 + 24 | 0;
 i12 = i8 + 32 | 0;
 i13 = i8 + 40 | 0;
 i14 = i8 + 48 | 0;
 i15 = i8 + 56 | 0;
 if ((i7 | 0) != 4) {
  i16 = 0;
  STACKTOP = i8;
  return i16 | 0;
 }
 i7 = HEAP32[i1 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i16 = 0;
  STACKTOP = i8;
  return i16 | 0;
 }
 i17 = i5;
 i18 = HEAP32[i17 >> 2] | 0;
 i19 = HEAP32[i17 + 4 >> 2] | 0;
 if ((HEAP32[i7 + 32 >> 2] & 2048 | 0) == 0) {
  i7 = HEAP32[i5 + 8 >> 2] | 0;
  i20 = i19;
  i21 = i7;
  i22 = 1;
  i23 = i7 - i18 + (HEAP32[i5 + 16 >> 2] | 0) + (i18 - i7) | 0;
 } else {
  i7 = HEAP32[i5 + 4 >> 2] | 0;
  i17 = HEAP32[i5 + 12 >> 2] | 0;
  i24 = i7 - i17 | 0;
  i20 = i19 - i24 | 0;
  i21 = i18;
  i22 = i17 - i7 + (HEAP32[i5 + 20 >> 2] | 0) + i24 | 0;
  i23 = 1;
 }
 HEAP32[i9 >> 2] = i21;
 HEAP32[i9 + 4 >> 2] = i20;
 HEAP32[i9 + 8 >> 2] = i23;
 HEAP32[i9 + 12 >> 2] = i22;
 HEAP32[i10 >> 2] = 0;
 if (!(__ZNK7WebCore17RenderLineBoxList21anyLineIntersectsRectEPNS_20RenderBoxModelObjectERKNS_10LayoutRectERKNS_11LayoutPointEbNS_10LayoutUnitE(i1, i2, i9, i6, 0, i10) | 0)) {
  i16 = 0;
  STACKTOP = i8;
  return i16 | 0;
 }
 i10 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i16 = 0;
  STACKTOP = i8;
  return i16 | 0;
 }
 i1 = i11 | 0;
 i22 = i12 | 0;
 i23 = i13 | 0;
 i20 = i14 | 0;
 i21 = i10;
 while (1) {
  i10 = __ZN7WebCore9InlineBox4rootEv(i21 | 0) | 0;
  i24 = i10 + 72 | 0;
  i7 = HEAP32[i21 + 36 >> 2] | 0;
  do {
   if ((i7 | 0) == 0) {
    HEAP32[i1 >> 2] = HEAP32[i24 >> 2];
    i17 = i10 + 76 | 0;
    HEAP32[i22 >> 2] = HEAP32[i17 >> 2];
    i25 = i17;
   } else {
    if ((HEAP32[i21 + 32 >> 2] & 2048 | 0) == 0) {
     i26 = i7 + 20 | 0;
    } else {
     i26 = i7 + 24 | 0;
    }
    HEAP32[i1 >> 2] = HEAP32[i26 >> 2];
    i17 = i10 + 76 | 0;
    if ((HEAP32[i21 + 32 >> 2] & 2048 | 0) == 0) {
     HEAP32[i22 >> 2] = (HEAP32[i7 + 28 >> 2] | 0) + (HEAP32[i7 + 20 >> 2] | 0);
     i25 = i17;
     break;
    } else {
     HEAP32[i22 >> 2] = (HEAP32[i7 + 32 >> 2] | 0) + (HEAP32[i7 + 24 >> 2] | 0);
     i25 = i17;
     break;
    }
   }
  } while (0);
  if (__ZNK7WebCore17RenderLineBoxList19rangeIntersectsRectEPNS_20RenderBoxModelObjectENS_10LayoutUnitES3_RKNS_10LayoutRectERKNS_11LayoutPointE(0, i2, i11, i12, i9, i6) | 0) {
   i7 = HEAP32[(HEAP32[i21 >> 2] | 0) + 32 >> 2] | 0;
   HEAP32[i23 >> 2] = HEAP32[i24 >> 2];
   HEAP32[i20 >> 2] = HEAP32[i25 >> 2];
   if (FUNCTION_TABLE_iiiiiiii[i7 & 1](i21, i3, i4, i5, i6, i13, i14) | 0) {
    break;
   }
  }
  i7 = HEAP32[i21 + 48 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i16 = 0;
   i27 = 27;
   break;
  } else {
   i21 = i7;
  }
 }
 if ((i27 | 0) == 27) {
  STACKTOP = i8;
  return i16 | 0;
 }
 i27 = HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] | 0;
 i21 = (HEAP32[i5 + 4 >> 2] | 0) - (HEAP32[i6 + 4 >> 2] | 0) | 0;
 HEAP32[i15 >> 2] = (HEAP32[i5 >> 2] | 0) - (HEAP32[i6 >> 2] | 0);
 HEAP32[i15 + 4 >> 2] = i21;
 FUNCTION_TABLE_viii[i27 & 1](i2 | 0, i4, i15);
 i16 = 1;
 STACKTOP = i8;
 return i16 | 0;
}
function __ZNK7WebCore17RenderLineBoxList21anyLineIntersectsRectEPNS_20RenderBoxModelObjectERKNS_10LayoutRectERKNS_11LayoutPointEbNS_10LayoutUnitE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i8 >> 2];
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i1 | 0;
 i11 = __ZN7WebCore9InlineBox4rootEv(HEAP32[i10 >> 2] | 0) | 0;
 i12 = i1 + 4 | 0;
 i1 = __ZN7WebCore9InlineBox4rootEv(HEAP32[i12 >> 2] | 0) | 0;
 i13 = HEAP32[i10 >> 2] | 0;
 i10 = i11 + 72 | 0;
 i11 = HEAP32[i13 + 36 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i14 = i10;
  } else {
   if ((HEAP32[i13 + 32 >> 2] & 2048 | 0) == 0) {
    i14 = i11 + 20 | 0;
    break;
   } else {
    i14 = i11 + 24 | 0;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i14 >> 2] | 0;
 do {
  if (i5) {
   if ((HEAP32[i13 + 12 >> 2] | 0) == 0) {
    i14 = HEAP32[i10 >> 2] | 0;
    i15 = (i14 | 0) < (i11 | 0) ? i14 : i11;
   } else {
    i15 = i11;
   }
   i14 = HEAP32[i12 >> 2] | 0;
   i16 = i1 + 76 | 0;
   i17 = HEAP32[i14 + 36 >> 2] | 0;
   do {
    if ((i17 | 0) == 0) {
     i18 = HEAP32[i16 >> 2] | 0;
    } else {
     if ((HEAP32[i14 + 32 >> 2] & 2048 | 0) == 0) {
      i18 = (HEAP32[i17 + 28 >> 2] | 0) + (HEAP32[i17 + 20 >> 2] | 0) | 0;
      break;
     } else {
      i18 = (HEAP32[i17 + 32 >> 2] | 0) + (HEAP32[i17 + 24 >> 2] | 0) | 0;
      break;
     }
    }
   } while (0);
   if ((HEAP32[i14 + 12 >> 2] | 0) != 0) {
    i19 = i15;
    i20 = i18;
    break;
   }
   i17 = HEAP32[i16 >> 2] | 0;
   i19 = i15;
   i20 = (i18 | 0) < (i17 | 0) ? i17 : i18;
  } else {
   i17 = HEAP32[i12 >> 2] | 0;
   i21 = HEAP32[i17 + 36 >> 2] | 0;
   if ((i21 | 0) == 0) {
    i19 = i11;
    i20 = HEAP32[i1 + 76 >> 2] | 0;
    break;
   }
   if ((HEAP32[i17 + 32 >> 2] & 2048 | 0) == 0) {
    i19 = i11;
    i20 = (HEAP32[i21 + 28 >> 2] | 0) + (HEAP32[i21 + 20 >> 2] | 0) | 0;
    break;
   } else {
    i19 = i11;
    i20 = (HEAP32[i21 + 32 >> 2] | 0) + (HEAP32[i21 + 24 >> 2] | 0) | 0;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i6 >> 2] | 0;
 HEAP32[i8 >> 2] = i19 - i11;
 HEAP32[i9 >> 2] = i20 + i11;
 i11 = __ZNK7WebCore17RenderLineBoxList19rangeIntersectsRectEPNS_20RenderBoxModelObjectENS_10LayoutUnitES3_RKNS_10LayoutRectERKNS_11LayoutPointE(0, i2, i8, i9, i3, i4) | 0;
 STACKTOP = i7;
 return i11 | 0;
}
function __ZNK7WebCore17RenderLineBoxList23lineIntersectsDirtyRectEPNS_20RenderBoxModelObjectEPNS_13InlineFlowBoxERKNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i1 | 0;
 i7 = i1 + 8 | 0;
 i8 = i1 + 16 | 0;
 i9 = i1 + 24 | 0;
 i10 = i1 + 32 | 0;
 i11 = __ZN7WebCore9InlineBox4rootEv(i3 | 0) | 0;
 i12 = i3 + 36 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i13 | 0) == 0) {
   i14 = HEAP32[i11 + 72 >> 2] | 0;
   HEAP32[i6 >> 2] = i14;
   i15 = i14;
  } else {
   if ((HEAP32[i3 + 32 >> 2] & 2048 | 0) == 0) {
    i14 = HEAP32[i13 + 20 >> 2] | 0;
    HEAP32[i6 >> 2] = i14;
    i15 = i14;
    break;
   } else {
    i14 = HEAP32[i13 + 24 >> 2] | 0;
    HEAP32[i6 >> 2] = i14;
    i15 = i14;
    break;
   }
  }
 } while (0);
 __ZNK7WebCore13RootInlineBox12selectionTopEv(i7, i11);
 i13 = (HEAP32[i7 >> 2] | 0) < (i15 | 0) ? i7 : i6;
 i6 = i2 | 0;
 i7 = i4 + 20 | 0;
 i15 = __ZNK7WebCore12RenderObject18maximalOutlineSizeENS_10PaintPhaseE(i6, HEAP32[i7 >> 2] | 0) | 0;
 i14 = (HEAP32[i13 >> 2] | 0) - i15 | 0;
 i15 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i15 | 0) == 0) {
   i16 = HEAP32[i11 + 76 >> 2] | 0;
  } else {
   if ((HEAP32[i3 + 32 >> 2] & 2048 | 0) == 0) {
    i16 = (HEAP32[i15 + 28 >> 2] | 0) + (HEAP32[i15 + 20 >> 2] | 0) | 0;
    break;
   } else {
    i16 = (HEAP32[i15 + 32 >> 2] | 0) + (HEAP32[i15 + 24 >> 2] | 0) | 0;
    break;
   }
  }
 } while (0);
 i15 = (__ZNK7WebCore12RenderObject18maximalOutlineSizeENS_10PaintPhaseE(i6, HEAP32[i7 >> 2] | 0) | 0) + i16 | 0;
 HEAP32[i8 >> 2] = i14;
 HEAP32[i9 >> 2] = i15;
 i15 = i4 + 4 | 0;
 i14 = HEAP32[i15 + 4 >> 2] | 0;
 HEAP32[i10 >> 2] = HEAP32[i15 >> 2];
 HEAP32[i10 + 4 >> 2] = i14;
 i14 = i4 + 12 | 0;
 i4 = HEAP32[i14 + 4 >> 2] | 0;
 HEAP32[i10 + 8 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i10 + 12 >> 2] = i4;
 i4 = __ZNK7WebCore17RenderLineBoxList19rangeIntersectsRectEPNS_20RenderBoxModelObjectENS_10LayoutUnitES3_RKNS_10LayoutRectERKNS_11LayoutPointE(0, i2, i8, i9, i10, i5) | 0;
 STACKTOP = i1;
 return i4 | 0;
}
function __ZNK7WebCore17RenderLineBoxList19rangeIntersectsRectEPNS_20RenderBoxModelObjectENS_10LayoutUnitES3_RKNS_10LayoutRectERKNS_11LayoutPointE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i7 >> 2];
 i7 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i7 >> 2];
 i7 = i1 | 0;
 i8 = i1 + 8 | 0;
 i9 = i1 + 16 | 0;
 i10 = i1 + 24 | 0;
 if ((HEAP32[i2 + 20 >> 2] & 512 | 0) == 0) {
  i11 = __ZNK7WebCore12RenderObject15containingBlockEv(i2 | 0) | 0;
 } else {
  i11 = i2;
 }
 HEAP32[i8 >> 2] = HEAP32[i3 >> 2];
 __ZNK7WebCore9RenderBox18flipForWritingModeENS_10LayoutUnitE(i7, i11, i8);
 HEAP32[i10 >> 2] = HEAP32[i4 >> 2];
 __ZNK7WebCore9RenderBox18flipForWritingModeENS_10LayoutUnitE(i9, i11, i10);
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = i7 | 0;
 i4 = HEAP32[i11 >> 2] | 0;
 i8 = i10 - i4 | 0;
 i3 = (i8 | 0) > -1 ? i8 : -i8 | 0;
 i8 = HEAP32[((i10 | 0) < (i4 | 0) ? i9 : i7) >> 2] | 0;
 HEAP32[i11 >> 2] = i8;
 i7 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 do {
  if ((i7 | 0) == 3 | (i7 | 0) == 0) {
   i2 = (HEAP32[i6 + 4 >> 2] | 0) + i8 | 0;
   HEAP32[i11 >> 2] = i2;
   i9 = HEAP32[i5 + 4 >> 2] | 0;
   if ((i2 | 0) >= ((HEAP32[i5 + 12 >> 2] | 0) + i9 | 0)) {
    i12 = 0;
    STACKTOP = i1;
    return i12 | 0;
   }
   if ((i2 + i3 | 0) > (i9 | 0)) {
    break;
   } else {
    i12 = 0;
   }
   STACKTOP = i1;
   return i12 | 0;
  } else {
   i9 = (HEAP32[i6 >> 2] | 0) + i8 | 0;
   HEAP32[i11 >> 2] = i9;
   i2 = HEAP32[i5 >> 2] | 0;
   if ((i9 | 0) >= ((HEAP32[i5 + 8 >> 2] | 0) + i2 | 0)) {
    i12 = 0;
    STACKTOP = i1;
    return i12 | 0;
   }
   if ((i9 + i3 | 0) > (i2 | 0)) {
    break;
   } else {
    i12 = 0;
   }
   STACKTOP = i1;
   return i12 | 0;
  }
 } while (0);
 i12 = 1;
 STACKTOP = i1;
 return i12 | 0;
}
function __ZN7WebCore17RenderLineBoxList13attachLineBoxEPNS_13InlineFlowBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   HEAP32[i1 >> 2] = i2;
   if ((i2 | 0) == 0) {
    i5 = 0;
   } else {
    i6 = i2;
    break;
   }
   HEAP32[i3 >> 2] = i5;
   return;
  } else {
   HEAP32[i4 + 52 >> 2] = i2;
   HEAP32[i2 + 48 >> 2] = HEAP32[i3 >> 2];
   i6 = i2;
  }
 } while (0);
 while (1) {
  i2 = i6 + 32 | 0;
  HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -513;
  i2 = HEAP32[i6 + 52 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i5 = i6;
   break;
  } else {
   i6 = i2;
  }
 }
 HEAP32[i3 >> 2] = i5;
 return;
}
function __ZN7WebCore17RenderLineBoxList14extractLineBoxEPNS_13InlineFlowBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i2 + 48 | 0;
 HEAP32[i1 + 4 >> 2] = HEAP32[i3 >> 2];
 i4 = i1 | 0;
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
 }
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i4 + 52 >> 2] = 0;
 }
 HEAP32[i3 >> 2] = 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  i5 = i2;
 }
 while (1) {
  i2 = i5 + 32 | 0;
  HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 512;
  i5 = HEAP32[i5 + 52 >> 2] | 0;
  if ((i5 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore17RenderLineBoxList13removeLineBoxEPNS_13InlineFlowBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 | 0;
 if ((HEAP32[i3 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i3 >> 2] = HEAP32[i2 + 52 >> 2];
 }
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i3 >> 2] = HEAP32[i2 + 48 >> 2];
 }
 i3 = i2 + 52 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i4 = i2 + 48 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i1 + 48 >> 2] = HEAP32[i4 >> 2];
 }
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 HEAP32[i1 + 52 >> 2] = HEAP32[i3 >> 2];
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
function __ZN7WebCore17RenderLineBoxList13appendLineBoxENSt3__110unique_ptrINS_13InlineFlowBoxENS1_14default_deleteIS3_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  HEAP32[i3 >> 2] = i2;
  HEAP32[i1 + 4 >> 2] = i2;
  return;
 } else {
  i3 = i1 + 4 | 0;
  HEAP32[(HEAP32[i3 >> 2] | 0) + 52 >> 2] = i2;
  HEAP32[i2 + 48 >> 2] = HEAP32[i3 >> 2];
  HEAP32[i3 >> 2] = i2;
  return;
 }
}
function __ZN7WebCore17RenderLineBoxList15deleteLineBoxesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 } else {
  i4 = i3;
 }
 while (1) {
  i3 = HEAP32[i4 + 52 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  if ((i3 | 0) == 0) {
   break;
  } else {
   i4 = i3;
  }
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
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
function __ZN7WebCore17RenderLineBoxList17deleteLineBoxTreeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3;
  while (1) {
   i3 = HEAP32[i4 + 52 >> 2] | 0;
   __ZN7WebCore13InlineFlowBox10deleteLineEv(i4);
   if ((i3 | 0) == 0) {
    break;
   } else {
    i4 = i3;
   }
  }
 }
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i2 >> 2] = 0;
 return;
}
function __ZN7WebCore17RenderLineBoxList14dirtyLineBoxesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  i3 = i2;
 }
 while (1) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 104 >> 2] & 1](i3 | 0);
  i3 = HEAP32[i3 + 52 >> 2] | 0;
  if ((i3 | 0) == 0) {
   break;
  }
 }
 return;
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
 return FUNCTION_TABLE_iiiiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
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
 FUNCTION_TABLE_vii[i1 & 1](i2 | 0, i3 | 0);
}
function b1(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(1);
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
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
}
function b7(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(7);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function b3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(3);
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
function b4(i1) {
 i1 = i1 | 0;
 abort(4);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
}
function b6() {
 abort(6);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiiiiiii = [b0,b0];
  var FUNCTION_TABLE_viiiii = [b1,b1];
  var FUNCTION_TABLE_vi = [b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3];
  var FUNCTION_TABLE_ii = [b4,b4];
  var FUNCTION_TABLE_viii = [b5,b5];
  var FUNCTION_TABLE_v = [b6,b6];
  var FUNCTION_TABLE_iii = [b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiiiiii: dynCall_iiiiiiii, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiiiiii": invoke_iiiiiiii, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] = asm["dynCall_iiiiiiii"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore17RenderLineBoxList13appendLineBoxENSt3__110unique_ptrINS_13InlineFlowBoxENS1_14default_deleteIS3_EEEE","__ZN7WebCore17RenderLineBoxList15deleteLineBoxesEv","__ZNK7WebCore17RenderLineBoxList5paintEPNS_20RenderBoxModelObjectERNS_9PaintInfoERKNS_11LayoutPointE","__ZN7WebCore17RenderLineBoxList13attachLineBoxEPNS_13InlineFlowBoxE","__ZN7WebCore17RenderLineBoxList26dirtyLinesFromChangedChildEPNS_20RenderBoxModelObjectEPNS_12RenderObjectE","__ZNK7WebCore17RenderLineBoxList23lineIntersectsDirtyRectEPNS_20RenderBoxModelObjectEPNS_13InlineFlowBoxERKNS_9PaintInfoERKNS_11LayoutPointE","_memset","__ZN7WebCore17RenderLineBoxList17deleteLineBoxTreeEv","__ZNK7WebCore17RenderLineBoxList19rangeIntersectsRectEPNS_20RenderBoxModelObjectENS_10LayoutUnitES3_RKNS_10LayoutRectERKNS_11LayoutPointE","_memcpy","_strlen","__ZNK7WebCore17RenderLineBoxList7hitTestEPNS_20RenderBoxModelObjectERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE","__ZN7WebCore17RenderLineBoxList13removeLineBoxEPNS_13InlineFlowBoxE","__ZN7WebCore17RenderLineBoxList14extractLineBoxEPNS_13InlineFlowBoxE","__ZN7WebCore17RenderLineBoxList14dirtyLineBoxesEv","__ZNK7WebCore17RenderLineBoxList21anyLineIntersectsRectEPNS_20RenderBoxModelObjectERKNS_10LayoutRectERKNS_11LayoutPointEbNS_10LayoutUnitE"]

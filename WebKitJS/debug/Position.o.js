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
H_BASE = parentModule["_malloc"](56 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 56;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE;
var __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE;
var __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE;
var __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4TextEEEj;
/* memory initializer */ allocate([80,111,115,105,116,105,111,110,32,91,37,115,93,58,32,37,115,32,91,37,112,93,32,97,116,32,37,100,10,0,0,0,80,111,115,105,116,105,111,110,32,91,37,115,93,58,32,110,117,108,108,10,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore9HTMLNames5brTagE=env.__ZN7WebCore9HTMLNames5brTagE|0;
  var __ZN7WebCore9HTMLNames8tableTagE=env.__ZN7WebCore9HTMLNames8tableTagE|0;
  var __ZN7WebCore9HTMLNames7htmlTagE=env.__ZN7WebCore9HTMLNames7htmlTagE|0;
  var __ZN7WebCore9HTMLNames7bodyTagE=env.__ZN7WebCore9HTMLNames7bodyTagE|0;
  var _stderr=env._stderr|0;
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
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var _pwrite=env._pwrite;
  var ___setErrNo=env.___setErrNo;
  var _fwrite=env._fwrite;
  var __reallyNegative=env.__reallyNegative;
  var __formatString=env.__formatString;
  var _send=env._send;
  var _write=env._write;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fprintf=env._fprintf;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore8Position21getInlineBoxAndOffsetENS_9EAffinityENS_13TextDirectionERPNS_9InlineBoxERi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i6 + 32 | 0;
 i10 = i6 + 48 | 0;
 i11 = i6 + 64 | 0;
 i12 = i6 + 80 | 0;
 i13 = i1 + 8 | 0;
 do {
  if ((HEAP8[i13] & 8) == 0) {
   i14 = HEAP32[i13 >> 2] & 7;
   if (!((i14 | 0) == 2 | (i14 | 0) == 4)) {
    i15 = 3;
    break;
   }
   i14 = i1 | 0;
   i16 = __ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(HEAP32[i14 >> 2] | 0) | 0;
   i17 = i14;
  } else {
   i15 = 3;
  }
 } while (0);
 if ((i15 | 0) == 3) {
  i16 = HEAP32[i1 + 4 >> 2] | 0;
  i17 = i1 | 0;
 }
 HEAP32[i5 >> 2] = i16;
 i16 = HEAP32[i17 >> 2] | 0;
 i14 = i16 + 32 | 0;
 if ((HEAP32[i16 + 12 >> 2] & 2048 | 0) == 0) {
  i18 = i14 | 0;
 } else {
  i18 = HEAP32[i14 >> 2] | 0;
 }
 i14 = HEAP32[i18 >> 2] | 0;
 i18 = i14 + 20 | 0;
 i16 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i16 & 4096 | 0) == 0) {
   i19 = i16;
   i15 = 14;
  } else {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 620 >> 2] & 1](i14) | 0) {
    i19 = HEAP32[i18 >> 2] | 0;
    i15 = 14;
    break;
   }
   if ((HEAP32[i5 >> 2] | 0) == 0) {
    i20 = HEAP32[i14 + 44 >> 2] | 0;
   } else {
    i20 = 0;
   }
   i21 = i20 | 0;
   HEAP32[i4 >> 2] = i21;
   i22 = i21;
  }
 } while (0);
 do {
  if ((i15 | 0) == 14) {
   if ((i19 & 768 | 0) == 256) {
    __ZN7WebCore10RenderText15ensureLineBoxesEv(i14);
    i20 = HEAP32[i14 + 48 >> 2] | 0;
    L23 : do {
     if ((i20 | 0) == 0) {
      i23 = 0;
      i24 = 0;
     } else {
      i16 = (i2 | 0) == 1;
      i21 = (i2 | 0) == 0;
      i25 = 0;
      i26 = i20;
      L25 : while (1) {
       i27 = __ZNK7WebCore13InlineTextBox14caretMinOffsetEv(i26) | 0;
       i28 = __ZNK7WebCore13InlineTextBox14caretMaxOffsetEv(i26) | 0;
       i29 = HEAP32[i5 >> 2] | 0;
       do {
        if ((i29 | 0) < (i27 | 0) | (i29 | 0) > (i28 | 0)) {
         i30 = i25;
        } else {
         if ((i29 | 0) == (i28 | 0)) {
          if (__ZNK7WebCore13InlineTextBox11isLineBreakEv(i26) | 0) {
           i30 = i25;
           break;
          }
          i31 = HEAP32[i5 >> 2] | 0;
         } else {
          i31 = i29;
         }
         if ((i31 | 0) > (i27 | 0) & (i31 | 0) < (i28 | 0)) {
          i15 = 22;
          break L25;
         }
         i32 = (i31 | 0) == (i28 | 0);
         if (i32 ^ i16) {
          i33 = i25;
          i34 = i26;
          break L25;
         }
         if ((i31 | 0) == (i27 | 0) ^ i21) {
          i33 = i25;
          i34 = i26;
          break L25;
         }
         if (!i32) {
          i30 = i26;
          break;
         }
         i32 = i26 | 0;
         if ((__ZNK7WebCore9InlineBox13nextLeafChildEv(i32) | 0) == 0) {
          i30 = i26;
          break;
         }
         i35 = __ZNK7WebCore9InlineBox13nextLeafChildEv(i32) | 0;
         if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i35 >> 2] | 0) + 20 >> 2] & 1](i35) | 0) {
          i33 = i25;
          i34 = i26;
          break L25;
         } else {
          i30 = i26;
         }
        }
       } while (0);
       i27 = HEAP32[i26 + 40 >> 2] | 0;
       if ((i27 | 0) == 0) {
        i33 = i30;
        i34 = 0;
        break;
       } else {
        i25 = i30;
        i26 = i27;
       }
      }
      if ((i15 | 0) == 22) {
       HEAP32[i4 >> 2] = i26;
       STACKTOP = i6;
       return;
      }
      if ((i33 | 0) == 0) {
       i23 = i34;
       i24 = 0;
       break;
      }
      if (!((i33 | 0) == (HEAP32[i14 + 52 >> 2] | 0) & (i2 | 0) == 1)) {
       i23 = i34;
       i24 = i33;
       break;
      }
      i25 = __ZNK7WebCore12RenderObject15containingBlockEv(i14) | 0;
      i21 = __ZNK7WebCore12RenderObject14nextInPreOrderEPKS0_(i14, i25) | 0;
      if ((i21 | 0) == 0) {
       i23 = 0;
       i24 = i33;
       break;
      } else {
       i36 = i21;
      }
      L45 : while (1) {
       i21 = i36 + 20 | 0;
       i16 = HEAP32[i21 >> 2] | 0;
       if ((i16 & 768 | 0) != 256) {
        if ((HEAP32[i36 + 24 >> 2] & 16 | 0) != 0) {
         i23 = 0;
         i24 = i33;
         break L23;
        }
       }
       if ((i16 & 4096 | 0) == 0) {
        i37 = i16;
       } else {
        if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i36 >> 2] | 0) + 620 >> 2] & 1](i36) | 0)) {
         i23 = 0;
         i24 = i33;
         break L23;
        }
        i37 = HEAP32[i21 >> 2] | 0;
       }
       do {
        if ((i37 & 768 | 0) == 256) {
         i21 = HEAP32[i36 + 48 >> 2] | 0;
         if ((i21 | 0) == 0) {
          break;
         } else {
          i38 = 0;
          i39 = 2147483647;
          i40 = i21;
         }
         while (1) {
          i21 = __ZNK7WebCore13InlineTextBox14caretMinOffsetEv(i40) | 0;
          i16 = (i21 | 0) < (i39 | 0);
          i41 = i16 ? i40 : i38;
          i27 = HEAP32[i40 + 40 >> 2] | 0;
          if ((i27 | 0) == 0) {
           break;
          } else {
           i38 = i41;
           i39 = i16 ? i21 : i39;
           i40 = i27;
          }
         }
         if ((i41 | 0) != 0) {
          break L45;
         }
        } else {
         if ((HEAP32[i36 + 28 >> 2] | 0) == 0) {
          i23 = 0;
          i24 = i33;
          break L23;
         }
        }
       } while (0);
       i27 = __ZNK7WebCore12RenderObject14nextInPreOrderEPKS0_(i36, i25) | 0;
       if ((i27 | 0) == 0) {
        i23 = 0;
        i24 = i33;
        break L23;
       } else {
        i36 = i27;
       }
      }
      HEAP32[i5 >> 2] = __ZNK7WebCore13InlineTextBox14caretMinOffsetEv(i41) | 0;
      i23 = i41;
      i24 = i33;
     }
    } while (0);
    i20 = ((i23 | 0) != 0 ? i23 : i24) | 0;
    HEAP32[i4 >> 2] = i20;
    i22 = i20;
    break;
   }
   HEAP32[i4 >> 2] = 0;
   i20 = HEAP32[i17 >> 2] | 0;
   do {
    if ((HEAP32[i20 + 12 >> 2] & 1 | 0) == 0) {
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 132 >> 2] & 1](i20) | 0)) {
      break;
     }
     if ((HEAP32[i18 >> 2] & 768 | 0) == 256) {
      break;
     }
     if ((HEAP32[i14 + 24 >> 2] & 32 | 0) == 0) {
      break;
     }
     if (!(__ZN7WebCore8Position44hasRenderedNonAnonymousDescendantsWithHeightERKNS_13RenderElementE(i14) | 0)) {
      break;
     }
     i25 = i9 | 0;
     i26 = HEAP32[i17 >> 2] | 0;
     HEAP32[i25 >> 2] = i26;
     if ((i26 | 0) != 0) {
      i27 = i26 + 8 | 0;
      HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
     }
     i27 = i1 + 4 | 0;
     HEAP32[i9 + 4 >> 2] = HEAP32[i27 >> 2];
     i26 = i13;
     i21 = HEAP32[i26 >> 2] | 0;
     i16 = i21 & 7;
     i28 = i9 + 8 | 0;
     HEAP32[i28 >> 2] = i16;
     HEAP8[i28] = i16 & 255 | i21 & 8;
     __ZN7WebCoreL35downstreamIgnoringEditingBoundariesENS_8PositionE(i8, i9);
     i21 = HEAP32[i25 >> 2] | 0;
     do {
      if ((i21 | 0) != 0) {
       i25 = i21 + 8 | 0;
       i16 = i25 | 0;
       i28 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
       HEAP32[i16 >> 2] = i28;
       if ((i28 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
      }
     } while (0);
     i21 = i8 | 0;
     i25 = HEAP32[i21 >> 2] | 0;
     L78 : do {
      if ((i25 | 0) == (HEAP32[i17 >> 2] | 0)) {
       i28 = i8 + 8 | 0;
       do {
        if ((HEAP8[i28] & 8) == 0) {
         i16 = HEAP32[i28 >> 2] & 7;
         if (!((i16 | 0) == 2 | (i16 | 0) == 4)) {
          i15 = 59;
          break;
         }
         i42 = __ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(i25) | 0;
        } else {
         i15 = 59;
        }
       } while (0);
       if ((i15 | 0) == 59) {
        i42 = HEAP32[i8 + 4 >> 2] | 0;
       }
       do {
        if ((HEAP8[i13] & 8) == 0) {
         i16 = HEAP32[i26 >> 2] & 7;
         if (!((i16 | 0) == 2 | (i16 | 0) == 4)) {
          i15 = 63;
          break;
         }
         i43 = __ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(HEAP32[i17 >> 2] | 0) | 0;
        } else {
         i15 = 63;
        }
       } while (0);
       if ((i15 | 0) == 63) {
        i43 = HEAP32[i27 >> 2] | 0;
       }
       if ((i42 | 0) != (i43 | 0)) {
        i15 = 137;
        break;
       }
       i16 = i28;
       i29 = HEAP32[i26 >> 2] | 0;
       if (((i29 ^ HEAP32[i16 >> 2]) & 7 | 0) != 0) {
        i15 = 137;
        break;
       }
       i35 = i10 | 0;
       i32 = HEAP32[i17 >> 2] | 0;
       HEAP32[i35 >> 2] = i32;
       if ((i32 | 0) == 0) {
        i44 = i29;
        i45 = i29 & 255;
       } else {
        i29 = i32 + 8 | 0;
        HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
        i29 = HEAP32[i26 >> 2] | 0;
        i44 = i29;
        i45 = i29 & 255;
       }
       i29 = i10 + 4 | 0;
       i46 = HEAP32[i27 >> 2] | 0;
       HEAP32[i29 >> 2] = i46;
       i47 = i44 & 7;
       i48 = i10 + 8 | 0;
       i49 = i48;
       HEAP32[i49 >> 2] = i47;
       i50 = i47 & 255 | i45 & 8;
       HEAP8[i48] = i50;
       i47 = i7 | 0;
       i51 = i7 + 4 | 0;
       i52 = i7 + 8 | 0;
       i53 = 0;
       i54 = 0;
       i55 = 0;
       i56 = i32;
       i32 = i50;
       i50 = i46;
       L97 : while (1) {
        do {
         if ((i56 | 0) == (i53 | 0)) {
          do {
           if ((i32 & 8) == 0) {
            i46 = HEAP32[i49 >> 2] & 7;
            if (!((i46 | 0) == 2 | (i46 | 0) == 4)) {
             i57 = i50;
             break;
            }
            i57 = __ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(i56) | 0;
           } else {
            i57 = i50;
           }
          } while (0);
          do {
           if ((i55 & 8 | 0) == 0) {
            i46 = i55 & 7;
            if (!((i46 | 0) == 2 | (i46 | 0) == 4)) {
             i58 = i54;
             break;
            }
            i58 = __ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(i56) | 0;
           } else {
            i58 = i54;
           }
          } while (0);
          if ((i57 | 0) != (i58 | 0)) {
           break;
          }
          i59 = HEAP32[i49 >> 2] | 0;
          if (((i59 ^ i55) & 7 | 0) == 0) {
           break L97;
          }
         }
        } while (0);
        if ((i56 | 0) != 0) {
         i46 = i56 + 8 | 0;
         HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 1;
        }
        do {
         if ((i53 | 0) != 0) {
          i46 = i53 + 8 | 0;
          i60 = i46 | 0;
          i61 = (HEAP32[i60 >> 2] | 0) - 1 | 0;
          HEAP32[i60 >> 2] = i61;
          if ((i61 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
         }
        } while (0);
        i46 = HEAP32[i29 >> 2] | 0;
        i61 = HEAP32[i49 >> 2] | 0;
        i60 = ((i61 & 7 | i55 & 240) & 255 & -9 | i61 & 8) & 255 | i55 & -256;
        __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i7, i10, 0);
        i61 = HEAP32[i47 >> 2] | 0;
        HEAP32[i47 >> 2] = 0;
        i62 = HEAP32[i35 >> 2] | 0;
        HEAP32[i35 >> 2] = i61;
        do {
         if ((i62 | 0) != 0) {
          i63 = i62 + 8 | 0;
          i64 = i63 | 0;
          i65 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
          HEAP32[i64 >> 2] = i65;
          if ((i65 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i63 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i63 - 8 | 0);
         }
        } while (0);
        i62 = HEAP32[i51 >> 2] | 0;
        HEAP32[i29 >> 2] = i62;
        i63 = HEAP32[i52 >> 2] | 0;
        i65 = HEAP32[i49 >> 2] & -8 | i63 & 7;
        HEAP32[i49 >> 2] = i65;
        i64 = i65 & 255 & -9 | i63 & 8;
        HEAP8[i48] = i64;
        i63 = HEAP32[i47 >> 2] | 0;
        if ((i63 | 0) == 0) {
         i53 = i56;
         i54 = i46;
         i55 = i60;
         i56 = i61;
         i32 = i64;
         i50 = i62;
         continue;
        }
        i65 = i63 + 8 | 0;
        i63 = i65 | 0;
        i66 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
        HEAP32[i63 >> 2] = i66;
        if ((i66 | 0) >= 1) {
         i53 = i56;
         i54 = i46;
         i55 = i60;
         i56 = i61;
         i32 = i64;
         i50 = i62;
         continue;
        }
        if ((HEAP32[i65 + 8 >> 2] | 0) != 0) {
         i53 = i56;
         i54 = i46;
         i55 = i60;
         i56 = i61;
         i32 = i64;
         i50 = i62;
         continue;
        }
        __ZN7WebCore4Node14removedLastRefEv(i65 - 8 | 0);
        i53 = i56;
        i54 = i46;
        i55 = i60;
        i56 = i61;
        i32 = i64;
        i50 = i62;
       }
       HEAP32[i35 >> 2] = 0;
       i32 = i59 & 8;
       i55 = (i56 | 0) == 0;
       do {
        if (!i55) {
         i54 = i56 + 8 | 0;
         i53 = i54 | 0;
         i47 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
         HEAP32[i53 >> 2] = i47;
         if ((i47 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
        }
       } while (0);
       i54 = HEAP32[i21 >> 2] | 0;
       HEAP32[i21 >> 2] = i56;
       do {
        if ((i54 | 0) != 0) {
         i47 = i54 + 8 | 0;
         i53 = i47 | 0;
         i48 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
         HEAP32[i53 >> 2] = i48;
         if ((i48 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
        }
       } while (0);
       HEAP32[i8 + 4 >> 2] = i50;
       i54 = HEAP32[i16 >> 2] & -8 | i59 & 7;
       HEAP32[i16 >> 2] = i54;
       HEAP8[i28] = i54 & 255 & -9 | i32;
       i54 = HEAP32[i35 >> 2] | 0;
       do {
        if ((i54 | 0) != 0) {
         i47 = i54 + 8 | 0;
         i48 = i47 | 0;
         i53 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
         HEAP32[i48 >> 2] = i53;
         if ((i53 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
        }
       } while (0);
       do {
        if ((i56 | 0) == (HEAP32[i17 >> 2] | 0)) {
         do {
          if (i32 << 24 >> 24 == 0) {
           i54 = HEAP32[i16 >> 2] & 7;
           if (!((i54 | 0) == 2 | (i54 | 0) == 4)) {
            i67 = i50;
            break;
           }
           i67 = __ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(i56) | 0;
          } else {
           i67 = i50;
          }
         } while (0);
         do {
          if ((HEAP8[i13] & 8) == 0) {
           i61 = HEAP32[i26 >> 2] & 7;
           if (!((i61 | 0) == 2 | (i61 | 0) == 4)) {
            i15 = 111;
            break;
           }
           i68 = __ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(HEAP32[i17 >> 2] | 0) | 0;
          } else {
           i15 = 111;
          }
         } while (0);
         if ((i15 | 0) == 111) {
          i68 = HEAP32[i27 >> 2] | 0;
         }
         if ((i67 | 0) != (i68 | 0)) {
          break;
         }
         if (((HEAP32[i26 >> 2] ^ HEAP32[i16 >> 2]) & 7 | 0) == 0) {
          i69 = i56;
          break L78;
         }
        }
       } while (0);
       i32 = i12 | 0;
       HEAP32[i32 >> 2] = i56;
       if (!i55) {
        i61 = i56 + 8 | 0;
        HEAP32[i61 >> 2] = (HEAP32[i61 >> 2] | 0) + 1;
       }
       HEAP32[i12 + 4 >> 2] = i50;
       i61 = HEAP32[i16 >> 2] | 0;
       i60 = i12 + 8 | 0;
       i46 = i60;
       i54 = HEAP32[i46 >> 2] & -8 | i61 & 7;
       HEAP32[i46 >> 2] = i54;
       HEAP8[i60] = i54 & 255 & -9 | i61 & 8;
       __ZN7WebCoreL35downstreamIgnoringEditingBoundariesENS_8PositionE(i11, i12);
       i61 = HEAP32[i11 >> 2] | 0;
       do {
        if ((i61 | 0) == (HEAP32[i17 >> 2] | 0)) {
         i54 = i11 + 8 | 0;
         do {
          if ((HEAP8[i54] & 8) == 0) {
           i60 = HEAP32[i54 >> 2] & 7;
           if (!((i60 | 0) == 2 | (i60 | 0) == 4)) {
            i15 = 120;
            break;
           }
           i70 = __ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(i61) | 0;
          } else {
           i15 = 120;
          }
         } while (0);
         if ((i15 | 0) == 120) {
          i70 = HEAP32[i11 + 4 >> 2] | 0;
         }
         do {
          if ((HEAP8[i13] & 8) == 0) {
           i60 = HEAP32[i26 >> 2] & 7;
           if (!((i60 | 0) == 2 | (i60 | 0) == 4)) {
            i15 = 124;
            break;
           }
           i71 = __ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(HEAP32[i17 >> 2] | 0) | 0;
          } else {
           i15 = 124;
          }
         } while (0);
         if ((i15 | 0) == 124) {
          i71 = HEAP32[i27 >> 2] | 0;
         }
         if ((i70 | 0) != (i71 | 0)) {
          i72 = 0;
          break;
         }
         i72 = ((HEAP32[i26 >> 2] ^ HEAP32[i54 >> 2]) & 7 | 0) == 0;
        } else {
         i72 = 0;
        }
       } while (0);
       do {
        if ((i61 | 0) != 0) {
         i16 = i61 + 8 | 0;
         i50 = i16 | 0;
         i55 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
         HEAP32[i50 >> 2] = i55;
         if ((i55 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
        }
       } while (0);
       i61 = HEAP32[i32 >> 2] | 0;
       do {
        if ((i61 | 0) != 0) {
         i16 = i61 + 8 | 0;
         i55 = i16 | 0;
         i50 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
         HEAP32[i55 >> 2] = i50;
         if ((i50 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
         if (i72) {
          i69 = i56;
          break L78;
         } else {
          i15 = 137;
          break L78;
         }
        }
       } while (0);
       if (i72) {
        i69 = i56;
       } else {
        i15 = 137;
       }
      } else {
       i15 = 137;
      }
     } while (0);
     if ((i15 | 0) == 137) {
      __ZNK7WebCore8Position21getInlineBoxAndOffsetENS_9EAffinityENS_13TextDirectionERPNS_9InlineBoxERi(i8, 0, i3, i4, i5);
      i69 = HEAP32[i21 >> 2] | 0;
     }
     if ((i69 | 0) == 0) {
      STACKTOP = i6;
      return;
     }
     i26 = i69 + 8 | 0;
     i27 = i26 | 0;
     i25 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
     HEAP32[i27 >> 2] = i25;
     if ((i25 | 0) >= 1) {
      STACKTOP = i6;
      return;
     }
     if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
      STACKTOP = i6;
      return;
     }
     __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
     STACKTOP = i6;
     return;
    }
   } while (0);
   do {
    if ((HEAP32[i18 >> 2] & 512 | 0) != 0) {
     i20 = HEAP32[i14 + 84 >> 2] | 0;
     i26 = i20;
     HEAP32[i4 >> 2] = i26;
     if ((i20 | 0) == 0) {
      STACKTOP = i6;
      return;
     }
     i25 = HEAP32[i5 >> 2] | 0;
     if ((i25 | 0) <= (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 88 >> 2] & 1](i26) | 0)) {
      break;
     }
     i26 = HEAP32[i5 >> 2] | 0;
     i20 = HEAP32[i4 >> 2] | 0;
     if ((i26 | 0) >= (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 92 >> 2] & 1](i20) | 0)) {
      break;
     }
     STACKTOP = i6;
     return;
    }
   } while (0);
   i22 = HEAP32[i4 >> 2] | 0;
  }
 } while (0);
 if ((i22 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i14 = HEAP32[i22 + 32 >> 2] | 0;
 i18 = i14 >>> 2;
 i69 = i18 & 63;
 i8 = HEAP32[i5 >> 2] | 0;
 i72 = (i14 & 4 | 0) == 0;
 i14 = HEAP32[i22 >> 2] | 0;
 if ((i18 & 1 ^ 1 | 0) == (i3 | 0)) {
  if (i72) {
   i73 = FUNCTION_TABLE_ii[HEAP32[i14 + 92 >> 2] & 1](i22) | 0;
  } else {
   i73 = FUNCTION_TABLE_ii[HEAP32[i14 + 88 >> 2] & 1](i22) | 0;
  }
  i3 = HEAP32[i4 >> 2] | 0;
  if ((i8 | 0) == (i73 | 0)) {
   i73 = __ZNK7WebCore9InlineBox13nextLeafChildEv(i3) | 0;
   if ((i73 | 0) == 0) {
    STACKTOP = i6;
    return;
   }
   i18 = (HEAP32[i73 + 32 >> 2] | 0) >>> 2 & 63;
   if ((i18 & 255) >>> 0 >= (i69 & 255) >>> 0) {
    STACKTOP = i6;
    return;
   }
   i73 = HEAP32[i4 >> 2] | 0;
   while (1) {
    i71 = __ZNK7WebCore9InlineBox13prevLeafChildEv(i73) | 0;
    if ((i71 | 0) == 0) {
     break;
    }
    i74 = (HEAP32[i71 + 32 >> 2] | 0) >>> 2 & 63;
    if ((i74 & 255) >>> 0 > (i18 & 255) >>> 0) {
     i73 = i71;
    } else {
     i15 = 158;
     break;
    }
   }
   do {
    if ((i15 | 0) == 158) {
     if (i74 << 24 >> 24 != i18 << 24 >> 24) {
      break;
     }
     STACKTOP = i6;
     return;
    }
   } while (0);
   i74 = __ZNK7WebCore9InlineBox13nextLeafChildEv(HEAP32[i4 >> 2] | 0) | 0;
   L257 : do {
    if ((i74 | 0) != 0) {
     i73 = i74;
     while (1) {
      if (((HEAP32[i73 + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0 < (i18 & 255) >>> 0) {
       break L257;
      }
      HEAP32[i4 >> 2] = i73;
      i73 = __ZNK7WebCore9InlineBox13nextLeafChildEv(i73) | 0;
      if ((i73 | 0) == 0) {
       break;
      }
     }
    }
   } while (0);
   i18 = HEAP32[i4 >> 2] | 0;
   i74 = HEAP32[i18 >> 2] | 0;
   if ((HEAP32[i18 + 32 >> 2] & 4 | 0) == 0) {
    i75 = FUNCTION_TABLE_ii[HEAP32[i74 + 92 >> 2] & 1](i18) | 0;
   } else {
    i75 = FUNCTION_TABLE_ii[HEAP32[i74 + 88 >> 2] & 1](i18) | 0;
   }
   HEAP32[i5 >> 2] = i75;
   STACKTOP = i6;
   return;
  } else {
   i75 = __ZNK7WebCore9InlineBox13prevLeafChildEv(i3) | 0;
   if ((i75 | 0) == 0) {
    STACKTOP = i6;
    return;
   }
   i3 = (HEAP32[i75 + 32 >> 2] | 0) >>> 2 & 63;
   if ((i3 & 255) >>> 0 >= (i69 & 255) >>> 0) {
    STACKTOP = i6;
    return;
   }
   i75 = HEAP32[i4 >> 2] | 0;
   while (1) {
    i18 = __ZNK7WebCore9InlineBox13nextLeafChildEv(i75) | 0;
    if ((i18 | 0) == 0) {
     break;
    }
    i76 = (HEAP32[i18 + 32 >> 2] | 0) >>> 2 & 63;
    if ((i76 & 255) >>> 0 > (i3 & 255) >>> 0) {
     i75 = i18;
    } else {
     i15 = 171;
     break;
    }
   }
   do {
    if ((i15 | 0) == 171) {
     if (i76 << 24 >> 24 != i3 << 24 >> 24) {
      break;
     }
     STACKTOP = i6;
     return;
    }
   } while (0);
   i76 = __ZNK7WebCore9InlineBox13prevLeafChildEv(HEAP32[i4 >> 2] | 0) | 0;
   L233 : do {
    if ((i76 | 0) != 0) {
     i15 = i76;
     while (1) {
      if (((HEAP32[i15 + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0 < (i3 & 255) >>> 0) {
       break L233;
      }
      HEAP32[i4 >> 2] = i15;
      i15 = __ZNK7WebCore9InlineBox13prevLeafChildEv(i15) | 0;
      if ((i15 | 0) == 0) {
       break;
      }
     }
    }
   } while (0);
   i3 = HEAP32[i4 >> 2] | 0;
   i76 = HEAP32[i3 >> 2] | 0;
   if ((HEAP32[i3 + 32 >> 2] & 4 | 0) == 0) {
    i77 = FUNCTION_TABLE_ii[HEAP32[i76 + 88 >> 2] & 1](i3) | 0;
   } else {
    i77 = FUNCTION_TABLE_ii[HEAP32[i76 + 92 >> 2] & 1](i3) | 0;
   }
   HEAP32[i5 >> 2] = i77;
   STACKTOP = i6;
   return;
  }
 }
 if (i72) {
  i78 = FUNCTION_TABLE_ii[HEAP32[i14 + 88 >> 2] & 1](i22) | 0;
 } else {
  i78 = FUNCTION_TABLE_ii[HEAP32[i14 + 92 >> 2] & 1](i22) | 0;
 }
 i22 = HEAP32[i4 >> 2] | 0;
 if ((i8 | 0) == (i78 | 0)) {
  i78 = __ZNK7WebCore9InlineBox30prevLeafChildIgnoringLineBreakEv(i22) | 0;
  do {
   if ((i78 | 0) != 0) {
    i8 = (HEAP32[i78 + 32 >> 2] | 0) >>> 2 & 63;
    if ((i8 & 255) >>> 0 < (i69 & 255) >>> 0) {
     break;
    }
    if ((i8 & 255) >>> 0 <= (i69 & 255) >>> 0) {
     STACKTOP = i6;
     return;
    }
    i8 = __ZNK7WebCore9InlineBox30prevLeafChildIgnoringLineBreakEv(HEAP32[i4 >> 2] | 0) | 0;
    L280 : do {
     if ((i8 | 0) != 0) {
      i14 = i8;
      while (1) {
       if (((HEAP32[i14 + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0 <= (i69 & 255) >>> 0) {
        break L280;
       }
       HEAP32[i4 >> 2] = i14;
       i14 = __ZNK7WebCore9InlineBox30prevLeafChildIgnoringLineBreakEv(i14) | 0;
       if ((i14 | 0) == 0) {
        break;
       }
      }
     }
    } while (0);
    i8 = HEAP32[i4 >> 2] | 0;
    i14 = HEAP32[i8 >> 2] | 0;
    if ((HEAP32[i8 + 32 >> 2] & 4 | 0) == 0) {
     i79 = FUNCTION_TABLE_ii[HEAP32[i14 + 88 >> 2] & 1](i8) | 0;
    } else {
     i79 = FUNCTION_TABLE_ii[HEAP32[i14 + 92 >> 2] & 1](i8) | 0;
    }
    HEAP32[i5 >> 2] = i79;
    STACKTOP = i6;
    return;
   }
  } while (0);
  i79 = __ZNK7WebCore9InlineBox30nextLeafChildIgnoringLineBreakEv(HEAP32[i4 >> 2] | 0) | 0;
  L291 : do {
   if ((i79 | 0) != 0) {
    i78 = i79;
    while (1) {
     if (((HEAP32[i78 + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0 < (i69 & 255) >>> 0) {
      break L291;
     }
     HEAP32[i4 >> 2] = i78;
     i78 = __ZNK7WebCore9InlineBox30nextLeafChildIgnoringLineBreakEv(i78) | 0;
     if ((i78 | 0) == 0) {
      break;
     }
    }
   }
  } while (0);
  i79 = HEAP32[i4 >> 2] | 0;
  i78 = HEAP32[i79 >> 2] | 0;
  if ((HEAP32[i79 + 32 >> 2] & 4 | 0) == 0) {
   i80 = FUNCTION_TABLE_ii[HEAP32[i78 + 92 >> 2] & 1](i79) | 0;
  } else {
   i80 = FUNCTION_TABLE_ii[HEAP32[i78 + 88 >> 2] & 1](i79) | 0;
  }
  HEAP32[i5 >> 2] = i80;
  STACKTOP = i6;
  return;
 } else {
  i80 = __ZNK7WebCore9InlineBox30nextLeafChildIgnoringLineBreakEv(i22) | 0;
  do {
   if ((i80 | 0) != 0) {
    i22 = (HEAP32[i80 + 32 >> 2] | 0) >>> 2 & 63;
    if ((i22 & 255) >>> 0 < (i69 & 255) >>> 0) {
     break;
    }
    if ((i22 & 255) >>> 0 <= (i69 & 255) >>> 0) {
     STACKTOP = i6;
     return;
    }
    i22 = __ZNK7WebCore9InlineBox30nextLeafChildIgnoringLineBreakEv(HEAP32[i4 >> 2] | 0) | 0;
    L308 : do {
     if ((i22 | 0) != 0) {
      i79 = i22;
      while (1) {
       if (((HEAP32[i79 + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0 <= (i69 & 255) >>> 0) {
        break L308;
       }
       HEAP32[i4 >> 2] = i79;
       i79 = __ZNK7WebCore9InlineBox30nextLeafChildIgnoringLineBreakEv(i79) | 0;
       if ((i79 | 0) == 0) {
        break;
       }
      }
     }
    } while (0);
    i22 = HEAP32[i4 >> 2] | 0;
    i79 = HEAP32[i22 >> 2] | 0;
    if ((HEAP32[i22 + 32 >> 2] & 4 | 0) == 0) {
     i81 = FUNCTION_TABLE_ii[HEAP32[i79 + 92 >> 2] & 1](i22) | 0;
    } else {
     i81 = FUNCTION_TABLE_ii[HEAP32[i79 + 88 >> 2] & 1](i22) | 0;
    }
    HEAP32[i5 >> 2] = i81;
    STACKTOP = i6;
    return;
   }
  } while (0);
  i81 = __ZNK7WebCore9InlineBox30prevLeafChildIgnoringLineBreakEv(HEAP32[i4 >> 2] | 0) | 0;
  L319 : do {
   if ((i81 | 0) != 0) {
    i80 = i81;
    while (1) {
     if (((HEAP32[i80 + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0 < (i69 & 255) >>> 0) {
      break L319;
     }
     HEAP32[i4 >> 2] = i80;
     i80 = __ZNK7WebCore9InlineBox30prevLeafChildIgnoringLineBreakEv(i80) | 0;
     if ((i80 | 0) == 0) {
      break;
     }
    }
   }
  } while (0);
  i69 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i69 >> 2] | 0;
  if ((HEAP32[i69 + 32 >> 2] & 4 | 0) == 0) {
   i82 = FUNCTION_TABLE_ii[HEAP32[i4 + 88 >> 2] & 1](i69) | 0;
  } else {
   i82 = FUNCTION_TABLE_ii[HEAP32[i4 + 92 >> 2] & 1](i69) | 0;
  }
  HEAP32[i5 >> 2] = i82;
  STACKTOP = i6;
  return;
 }
}
function __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i9 = i1 + 8 | 0;
  i10 = i9;
  i11 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = i11 & -8;
  HEAP8[i9] = i11 & 255 & -16;
  STACKTOP = i4;
  return;
 } else {
  i12 = i8;
 }
 while (1) {
  if (__ZN7WebCoreL38endsOfNodeAreVisuallyDistinctPositionsEPNS_4NodeE(i12) | 0) {
   i13 = i12;
   break;
  }
  i11 = HEAP32[i12 + 16 >> 2] | 0;
  i9 = i11 | 0;
  if ((i11 | 0) == 0) {
   i13 = i9;
   break;
  } else {
   i12 = i9;
  }
 }
 i12 = i2 + 8 | 0;
 i9 = HEAP32[i12 >> 2] | 0;
 L8 : do {
  if ((i9 & 7 | 0) == 2) {
   i11 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i11 | 0) == 0) {
     i14 = 0;
     i15 = __ZN7WebCore14caretMaxOffsetEPKNS_4NodeE(0) | 0;
    } else {
     i10 = i11 + 8 | 0;
     HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
     i10 = __ZN7WebCore14caretMaxOffsetEPKNS_4NodeE(HEAP32[i7 >> 2] | 0) | 0;
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 132 >> 2] & 1](i11) | 0) {
      i14 = i11;
      i15 = i10;
      break;
     }
     i16 = 0;
     i17 = 1;
     i18 = i11;
     i19 = i10;
     i20 = (i10 | 0) == 0 ? 9 : 10;
     i21 = 14;
     break L8;
    }
   } while (0);
   HEAP32[i5 >> 2] = i14;
   i22 = i15;
   i23 = i15;
   i24 = i14;
   i25 = 1;
   i26 = 0;
   i27 = 8;
   i28 = i5 + 4 | 0;
   i29 = 0;
  } else {
   i11 = HEAP32[i7 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i30 = i9 & 255;
    i31 = i9 & 255;
   } else {
    i10 = i11 + 8 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
    i10 = HEAP32[i12 >> 2] | 0;
    i30 = i10 & 255;
    i31 = i10 & 255;
   }
   i16 = 1;
   i17 = 0;
   i18 = i11;
   i19 = HEAP32[i2 + 4 >> 2] | 0;
   i20 = i30 & 7 | i31 & 8;
   i21 = 14;
  }
 } while (0);
 do {
  if ((i21 | 0) == 14) {
   i31 = i20 & 255;
   HEAP32[i5 >> 2] = i18;
   i30 = i5 + 4 | 0;
   if ((i20 & 8) != 0) {
    i22 = i19;
    i23 = i19;
    i24 = i18;
    i25 = i17;
    i26 = i16;
    i27 = i31;
    i28 = i30;
    i29 = 0;
    break;
   }
   i2 = i31 & 7;
   if (!((i2 | 0) == 2 | (i2 | 0) == 4)) {
    i22 = i19;
    i23 = i19;
    i24 = i18;
    i25 = i17;
    i26 = i16;
    i27 = i31;
    i28 = i30;
    i29 = 1;
    break;
   }
   i22 = __ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(i18) | 0;
   i23 = i19;
   i24 = i18;
   i25 = i17;
   i26 = i16;
   i27 = i31;
   i28 = i30;
   i29 = 1;
  }
 } while (0);
 if ((HEAP32[i24 + 12 >> 2] & 2 | 0) == 0) {
  HEAP32[i28 >> 2] = 0;
  i32 = i5 + 8 | 0;
  i21 = 20;
 } else {
  i16 = __ZNK7WebCore13ContainerNode9childNodeEj(i24, i22) | 0;
  HEAP32[i28 >> 2] = i16;
  i28 = i5 + 8 | 0;
  if ((i16 | 0) == 0) {
   i32 = i28;
   i21 = 20;
  } else {
   i33 = 0;
   i34 = i28;
  }
 }
 do {
  if ((i21 | 0) == 20) {
   if (!i29) {
    i33 = i23;
    i34 = i32;
    break;
   }
   i28 = i27 & 7;
   if (!((i28 | 0) == 2 | (i28 | 0) == 4)) {
    i33 = i23;
    i34 = i32;
    break;
   }
   i33 = __ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(i24) | 0;
   i34 = i32;
  }
 } while (0);
 HEAP32[i34 >> 2] = i33;
 i33 = (i24 | 0) == 0;
 do {
  if (!(i25 | i33)) {
   i34 = i24 + 8 | 0;
   i32 = i34 | 0;
   i23 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
   HEAP32[i32 >> 2] = i23;
   if ((i23 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
  }
 } while (0);
 do {
  if (!(i26 | i33)) {
   i25 = i24 + 8 | 0;
   i34 = i25 | 0;
   i23 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
   HEAP32[i34 >> 2] = i23;
   if ((i23 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
  }
 } while (0);
 i24 = i6;
 i33 = i5;
 HEAP32[i24 >> 2] = HEAP32[i33 >> 2];
 HEAP32[i24 + 4 >> 2] = HEAP32[i33 + 4 >> 2];
 HEAP32[i24 + 8 >> 2] = HEAP32[i33 + 8 >> 2];
 i26 = __ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i8, 0, 1) | 0;
 L42 : do {
  if (!(__ZNK7WebCore16PositionIterator5atEndEv(i6) | 0)) {
   i25 = i6 | 0;
   i23 = (i13 | 0) == 0;
   i34 = (i3 | 0) != 0;
   i32 = i6 + 8 | 0;
   i27 = i13 + 16 | 0;
   i29 = 0;
   i28 = i8;
   L44 : while (1) {
    i35 = HEAP32[i25 >> 2] | 0;
    if ((i35 | 0) == (i28 | 0)) {
     i36 = i28;
     i37 = i29;
    } else {
     i16 = __ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i35, 0, 1) | 0;
     if ((i3 | 0) != 1 | i26 ^ i16 ^ 1) {
      i36 = i35;
      i37 = i29 | i26 ^ i16;
     } else {
      break L42;
     }
    }
    i16 = i35 + 12 | 0;
    do {
     if ((HEAP32[i16 >> 2] & 4 | 0) != 0) {
      i22 = HEAP32[i35 + 44 >> 2] | 0;
      i17 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
      if ((i22 | 0) != (i17 | 0)) {
       if ((HEAP32[i22 + 12 >> 2] | 0) != (HEAP32[i17 + 12 >> 2] | 0)) {
        break;
       }
       if ((HEAP32[i22 + 16 >> 2] | 0) != (HEAP32[i17 + 16 >> 2] | 0)) {
        break;
       }
      }
      if (__ZNK7WebCore16PositionIterator11atEndOfNodeEv(i6) | 0) {
       break L42;
      }
     }
    } while (0);
    if (!((i35 | 0) == (i13 | 0) | (__ZN7WebCoreL38endsOfNodeAreVisuallyDistinctPositionsEPNS_4NodeE(i35) | 0) ^ 1)) {
     i21 = 41;
     break;
    }
    if (!i23) {
     if ((HEAP32[i27 >> 2] | 0) == (i35 | 0)) {
      i21 = 44;
      break;
     }
    }
    i17 = i35 + 32 | 0;
    if ((HEAP32[i16 >> 2] & 2048 | 0) == 0) {
     i38 = i17 | 0;
    } else {
     i38 = HEAP32[i17 >> 2] | 0;
    }
    i39 = HEAP32[i38 >> 2] | 0;
    L64 : do {
     if ((i39 | 0) != 0) {
      i17 = i39 + 20 | 0;
      if ((HEAP32[i17 >> 2] & 768 | 0) == 256) {
       i40 = HEAP32[(HEAP32[i39 + 8 >> 2] | 0) + 36 >> 2] | 0;
      } else {
       i40 = HEAP32[i39 + 36 >> 2] | 0;
      }
      if ((HEAP32[i40 + 40 >> 2] & 6144 | 0) != 0) {
       break;
      }
      if (!(i34 | i37 ^ 1)) {
       i21 = 54;
       break L44;
      }
      i22 = HEAP32[i25 >> 2] | 0;
      do {
       if ((i22 | 0) == 0) {
        i21 = 58;
       } else {
        if (__ZN7WebCore12isAtomicNodeEPKNS_4NodeE(i22) | 0) {
         i21 = 58;
         break;
        }
        if (__ZNK7WebCore16PositionIterator13atStartOfNodeEv(i6) | 0) {
         i21 = 58;
        }
       }
      } while (0);
      if ((i21 | 0) == 58) {
       i21 = 0;
       HEAP32[i33 >> 2] = HEAP32[i24 >> 2];
       HEAP32[i33 + 4 >> 2] = HEAP32[i24 + 4 >> 2];
       HEAP32[i33 + 8 >> 2] = HEAP32[i24 + 8 >> 2];
      }
      i41 = i35;
      do {
       if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i41 >> 2] | 0) + 132 >> 2] & 1](i35) | 0) {
        if (__ZN7WebCore14isTableElementEPNS_4NodeE(i35) | 0) {
         break;
        }
        if ((HEAP32[i17 >> 2] & 768 | 0) != 256) {
         break L64;
        }
        __ZN7WebCore10RenderText15ensureLineBoxesEv(i39);
        i22 = HEAP32[i39 + 48 >> 2] | 0;
        if ((i22 | 0) == 0) {
         break L64;
        }
        if ((i35 | 0) != (i8 | 0)) {
         i21 = 71;
         break L44;
        }
        i18 = HEAP32[i32 >> 2] | 0;
        i19 = HEAP32[i39 + 52 >> 2] | 0;
        i20 = i19;
        i30 = i19;
        i19 = i22;
        while (1) {
         i22 = HEAP16[i19 + 48 >> 1] | 0;
         i31 = HEAP32[i19 + 44 >> 2] | 0;
         if (i22 << 16 >> 16 == 0) {
          i42 = i31;
         } else {
          i42 = (i22 & 65535) - 1 + i31 | 0;
         }
         L89 : do {
          if (i18 >>> 0 > i42 >>> 0) {
           if ((i19 | 0) == (i20 | 0)) {
            break;
           }
           if ((i18 | 0) != ((i22 & 65535) + i31 | 0)) {
            break;
           }
           i2 = i19 | 0;
           i12 = i2;
           while (1) {
            i9 = __ZNK7WebCore9InlineBox13nextLeafChildEv(i12) | 0;
            if ((i9 | 0) == 0) {
             i43 = i2;
             break;
            }
            if ((i9 | 0) == (i30 | 0)) {
             break L89;
            }
            if ((HEAP32[i9 + 16 >> 2] | 0) != (i39 | 0)) {
             i12 = i9;
             continue;
            }
            if ((HEAP32[i9 + 44 >> 2] | 0) >>> 0 < i18 >>> 0) {
             i12 = i9;
            } else {
             break L89;
            }
           }
           while (1) {
            i12 = __ZNK7WebCore9InlineBox13prevLeafChildEv(i43) | 0;
            if ((i12 | 0) == 0) {
             i21 = 94;
             break L44;
            }
            if ((i12 | 0) == (i30 | 0)) {
             break L89;
            }
            if ((HEAP32[i12 + 16 >> 2] | 0) != (i39 | 0)) {
             i43 = i12;
             continue;
            }
            if ((HEAP32[i12 + 44 >> 2] | 0) >>> 0 < i18 >>> 0) {
             i43 = i12;
            } else {
             break;
            }
           }
          } else {
           if (i18 >>> 0 >= i31 >>> 0) {
            i21 = 82;
            break L44;
           }
          }
         } while (0);
         i19 = HEAP32[i19 + 40 >> 2] | 0;
         if ((i19 | 0) == 0) {
          break L64;
         }
        }
       }
      } while (0);
      i17 = HEAP32[i32 >> 2] | 0;
      i44 = i39;
      if ((i17 | 0) <= (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i44 >> 2] | 0) + 564 >> 2] & 1](i39) | 0)) {
       i21 = 62;
       break L44;
      }
     }
    } while (0);
    __ZN7WebCore16PositionIterator9incrementEv(i6);
    if (__ZNK7WebCore16PositionIterator5atEndEv(i6) | 0) {
     break L42;
    } else {
     i29 = i37;
     i28 = i36;
    }
   }
   if ((i21 | 0) == 54) {
    HEAP32[i33 >> 2] = HEAP32[i24 >> 2];
    HEAP32[i33 + 4 >> 2] = HEAP32[i24 + 4 >> 2];
    HEAP32[i33 + 8 >> 2] = HEAP32[i24 + 8 >> 2];
    break;
   } else if ((i21 | 0) == 82) {
    __ZNK7WebCore16PositionIteratorcvNS_8PositionEEv(i1, i6);
    STACKTOP = i4;
    return;
   } else if ((i21 | 0) == 71) {
    i28 = (i35 | 0) == 0;
    if (!i28) {
     i29 = i35 + 8 | 0;
     HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
    }
    i29 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i39 >> 2] | 0) + 564 >> 2] & 1](i39) | 0;
    HEAP32[i1 >> 2] = i35;
    HEAP32[i1 + 4 >> 2] = i29;
    do {
     if (i28) {
      i45 = 0;
     } else {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i41 >> 2] | 0) + 132 >> 2] & 1](i35) | 0) {
       i45 = 0;
       break;
      }
      i45 = (i29 | 0) == 0 ? 1 : 2;
     }
    } while (0);
    i29 = i1 + 8 | 0;
    i28 = i29;
    i32 = HEAP32[i28 >> 2] & -8 | i45;
    HEAP32[i28 >> 2] = i32;
    HEAP8[i29] = i32 & 255 | 8;
    STACKTOP = i4;
    return;
   } else if ((i21 | 0) == 41) {
    __ZNK7WebCore16PositionIteratorcvNS_8PositionEEv(i1, i5);
    STACKTOP = i4;
    return;
   } else if ((i21 | 0) == 44) {
    __ZNK7WebCore16PositionIteratorcvNS_8PositionEEv(i1, i5);
    STACKTOP = i4;
    return;
   } else if ((i21 | 0) == 62) {
    i32 = (i35 | 0) == 0;
    if (!i32) {
     i29 = i35 + 8 | 0;
     HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
    }
    i29 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i44 >> 2] | 0) + 564 >> 2] & 1](i39) | 0;
    HEAP32[i1 >> 2] = i35;
    HEAP32[i1 + 4 >> 2] = i29;
    do {
     if (i32) {
      i46 = 0;
     } else {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i41 >> 2] | 0) + 132 >> 2] & 1](i35) | 0) {
       i46 = 0;
       break;
      }
      i46 = (i29 | 0) == 0 ? 1 : 2;
     }
    } while (0);
    i29 = i1 + 8 | 0;
    i32 = i29;
    i28 = HEAP32[i32 >> 2] & -8 | i46;
    HEAP32[i32 >> 2] = i28;
    HEAP8[i29] = i28 & 255 | 8;
    STACKTOP = i4;
    return;
   } else if ((i21 | 0) == 94) {
    __ZNK7WebCore16PositionIteratorcvNS_8PositionEEv(i1, i6);
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 __ZNK7WebCore16PositionIteratorcvNS_8PositionEEv(i1, i5);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore8Position11isCandidateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = i3 + 32 | 0;
 if ((HEAP32[i3 + 12 >> 2] & 2048 | 0) == 0) {
  i6 = i5 | 0;
 } else {
  i6 = HEAP32[i5 >> 2] | 0;
 }
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i6 = i5 + 20 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 & 768 | 0) == 256) {
  i7 = HEAP32[(HEAP32[i5 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i7 = HEAP32[i5 + 36 >> 2] | 0;
 }
 if ((HEAP32[i7 + 40 >> 2] & 6144 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 do {
  if ((i3 & 4096 | 0) == 0) {
   i8 = i3;
  } else {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 620 >> 2] & 1](i5) | 0) {
    i8 = HEAP32[i6 >> 2] | 0;
    break;
   }
   if ((HEAP32[i1 + 4 >> 2] | 0) != 0) {
    i4 = 0;
    return i4 | 0;
   }
   if ((HEAP32[i1 + 8 >> 2] & 7 | 0) == 2) {
    i4 = 0;
    return i4 | 0;
   }
   i7 = HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i4 = 1;
    return i4 | 0;
   }
   i9 = (HEAP32[i7 + 12 >> 2] & 2048 | 0) == 0;
   i10 = i7 + 32 | 0;
   if (i9) {
    i11 = i10 | 0;
   } else {
    i11 = HEAP32[i10 >> 2] | 0;
   }
   if ((HEAP32[i11 >> 2] | 0) == 0) {
    i4 = 1;
    return i4 | 0;
   }
   if (i9) {
    i12 = i10 | 0;
   } else {
    i12 = HEAP32[i10 >> 2] | 0;
   }
   i10 = HEAP32[i12 >> 2] | 0;
   if ((HEAP32[i10 + 20 >> 2] & 768 | 0) == 256) {
    i13 = HEAP32[(HEAP32[i10 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i13 = HEAP32[i10 + 36 >> 2] | 0;
   }
   i4 = (HEAP32[(HEAP32[i13 + 24 >> 2] | 0) + 88 >> 2] & 98304 | 0) != 0;
   return i4 | 0;
  }
 } while (0);
 do {
  if ((i8 & 512 | 0) == 0) {
   i13 = HEAP32[i2 >> 2] | 0;
   if ((i8 & 256 | 0) == 0) {
    i14 = i13;
    break;
   }
   do {
    if ((i13 | 0) != 0) {
     i12 = (HEAP32[i13 + 12 >> 2] & 2048 | 0) == 0;
     i11 = i13 + 32 | 0;
     if (i12) {
      i15 = i11 | 0;
     } else {
      i15 = HEAP32[i11 >> 2] | 0;
     }
     if ((HEAP32[i15 >> 2] | 0) == 0) {
      break;
     }
     if (i12) {
      i16 = i11 | 0;
     } else {
      i16 = HEAP32[i11 >> 2] | 0;
     }
     i11 = HEAP32[i16 >> 2] | 0;
     if ((HEAP32[i11 + 20 >> 2] & 768 | 0) == 256) {
      i17 = HEAP32[(HEAP32[i11 + 8 >> 2] | 0) + 36 >> 2] | 0;
     } else {
      i17 = HEAP32[i11 + 36 >> 2] | 0;
     }
     if ((HEAP32[(HEAP32[i17 + 24 >> 2] | 0) + 88 >> 2] & 98304 | 0) == 0) {
      i4 = 0;
     } else {
      break;
     }
     return i4 | 0;
    }
   } while (0);
   i4 = __ZNK7WebCore10RenderText19containsCaretOffsetEj(i5, HEAP32[i1 + 4 >> 2] | 0) | 0;
   return i4 | 0;
  } else {
   i14 = HEAP32[i2 >> 2] | 0;
  }
 } while (0);
 do {
  if (!(__ZN7WebCore14isTableElementEPNS_4NodeE(i14) | 0)) {
   i17 = HEAP32[i2 >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 132 >> 2] & 1](i17) | 0)) {
    break;
   }
   i17 = HEAP32[i2 >> 2] | 0;
   do {
    if ((HEAP32[i17 + 12 >> 2] & 4 | 0) != 0) {
     i16 = HEAP32[i17 + 44 >> 2] | 0;
     i15 = HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0;
     if ((i16 | 0) == (i15 | 0)) {
      i4 = 0;
      return i4 | 0;
     }
     if ((HEAP32[i16 + 12 >> 2] | 0) != (HEAP32[i15 + 12 >> 2] | 0)) {
      break;
     }
     if ((HEAP32[i16 + 16 >> 2] | 0) == (HEAP32[i15 + 16 >> 2] | 0)) {
      i4 = 0;
     } else {
      break;
     }
     return i4 | 0;
    }
   } while (0);
   if (__ZN7WebCore25isRendererReplacedElementEPNS_12RenderObjectE(i5) | 0) {
    i17 = HEAP32[i2 >> 2] | 0;
    if ((i17 | 0) == 0) {
     i4 = 1;
     return i4 | 0;
    }
    i15 = (HEAP32[i17 + 12 >> 2] & 2048 | 0) == 0;
    i16 = i17 + 32 | 0;
    if (i15) {
     i18 = i16 | 0;
    } else {
     i18 = HEAP32[i16 >> 2] | 0;
    }
    do {
     if ((HEAP32[i18 >> 2] | 0) != 0) {
      if (i15) {
       i19 = i16 | 0;
      } else {
       i19 = HEAP32[i16 >> 2] | 0;
      }
      i8 = HEAP32[i19 >> 2] | 0;
      if ((HEAP32[i8 + 20 >> 2] & 768 | 0) == 256) {
       i20 = HEAP32[(HEAP32[i8 + 8 >> 2] | 0) + 36 >> 2] | 0;
      } else {
       i20 = HEAP32[i8 + 36 >> 2] | 0;
      }
      if ((HEAP32[(HEAP32[i20 + 24 >> 2] | 0) + 88 >> 2] & 98304 | 0) == 0) {
       i4 = 0;
      } else {
       break;
      }
      return i4 | 0;
     }
    } while (0);
    switch (HEAP32[i1 + 8 >> 2] & 7 | 0) {
    case 0:
     {
      i4 = (HEAP32[i1 + 4 >> 2] | 0) < 1;
      return i4 | 0;
     }
    case 4:
    case 2:
     {
      i4 = (__ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(i17) | 0) == 0;
      return i4 | 0;
     }
    case 3:
    case 1:
     {
      i4 = 1;
      return i4 | 0;
     }
    default:
     {
      i4 = 0;
      return i4 | 0;
     }
    }
   }
   do {
    if ((HEAP32[i6 >> 2] & 768 | 0) != 256) {
     if ((HEAP32[i5 + 24 >> 2] & 32 | 0) == 0) {
      break;
     }
     i16 = (HEAP32[(HEAP32[i5 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
     if ((i16 | 0) == 3 | (i16 | 0) == 0) {
      i21 = i5 + 56 | 0;
     } else {
      i21 = i5 + 52 | 0;
     }
     do {
      if ((HEAP32[i21 >> 2] | 0) == 0) {
       i16 = HEAP32[i2 >> 2] | 0;
       if ((HEAP32[i16 + 12 >> 2] & 4 | 0) == 0) {
        i4 = 0;
        return i4 | 0;
       }
       i15 = HEAP32[i16 + 44 >> 2] | 0;
       i16 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
       if ((i15 | 0) == (i16 | 0)) {
        break;
       }
       if ((HEAP32[i15 + 12 >> 2] | 0) != (HEAP32[i16 + 12 >> 2] | 0)) {
        i4 = 0;
        return i4 | 0;
       }
       if ((HEAP32[i15 + 16 >> 2] | 0) == (HEAP32[i16 + 16 >> 2] | 0)) {
        break;
       } else {
        i4 = 0;
       }
       return i4 | 0;
      }
     } while (0);
     i16 = __ZN7WebCore8Position44hasRenderedNonAnonymousDescendantsWithHeightERKNS_13RenderElementE(i5) | 0;
     i15 = HEAP32[i2 >> 2] | 0;
     if (i16) {
      if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i15, 0, 1) | 0)) {
       i4 = 0;
       return i4 | 0;
      }
      i16 = HEAP32[i2 >> 2] | 0;
      do {
       if ((i16 | 0) != 0) {
        i8 = (HEAP32[i16 + 12 >> 2] & 2048 | 0) == 0;
        i13 = i16 + 32 | 0;
        if (i8) {
         i22 = i13 | 0;
        } else {
         i22 = HEAP32[i13 >> 2] | 0;
        }
        if ((HEAP32[i22 >> 2] | 0) == 0) {
         break;
        }
        if (i8) {
         i23 = i13 | 0;
        } else {
         i23 = HEAP32[i13 >> 2] | 0;
        }
        i13 = HEAP32[i23 >> 2] | 0;
        if ((HEAP32[i13 + 20 >> 2] & 768 | 0) == 256) {
         i24 = HEAP32[(HEAP32[i13 + 8 >> 2] | 0) + 36 >> 2] | 0;
        } else {
         i24 = HEAP32[i13 + 36 >> 2] | 0;
        }
        if ((HEAP32[(HEAP32[i24 + 24 >> 2] | 0) + 88 >> 2] & 98304 | 0) == 0) {
         i4 = 0;
        } else {
         break;
        }
        return i4 | 0;
       }
      } while (0);
      i4 = __ZNK7WebCore8Position17atEditingBoundaryEv(i1) | 0;
      return i4 | 0;
     }
     if ((i15 | 0) == 0) {
      i4 = 1;
      return i4 | 0;
     }
     L158 : do {
      switch (HEAP32[i1 + 8 >> 2] & 7 | 0) {
      case 3:
      case 1:
       {
        i25 = i15;
        break;
       }
      case 4:
      case 2:
       {
        if ((__ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(i15) | 0) != 0) {
         i4 = 0;
         return i4 | 0;
        }
        i16 = HEAP32[i2 >> 2] | 0;
        if ((i16 | 0) == 0) {
         i4 = 1;
        } else {
         i25 = i16;
         break L158;
        }
        return i4 | 0;
       }
      case 0:
       {
        if ((HEAP32[i1 + 4 >> 2] | 0) < 1) {
         i25 = i15;
         break L158;
        } else {
         i4 = 0;
        }
        return i4 | 0;
       }
      default:
       {
        i4 = 0;
        return i4 | 0;
       }
      }
     } while (0);
     i15 = (HEAP32[i25 + 12 >> 2] & 2048 | 0) == 0;
     i16 = i25 + 32 | 0;
     if (i15) {
      i26 = i16 | 0;
     } else {
      i26 = HEAP32[i16 >> 2] | 0;
     }
     if ((HEAP32[i26 >> 2] | 0) == 0) {
      i4 = 1;
      return i4 | 0;
     }
     if (i15) {
      i27 = i16 | 0;
     } else {
      i27 = HEAP32[i16 >> 2] | 0;
     }
     i16 = HEAP32[i27 >> 2] | 0;
     if ((HEAP32[i16 + 20 >> 2] & 768 | 0) == 256) {
      i28 = HEAP32[(HEAP32[i16 + 8 >> 2] | 0) + 36 >> 2] | 0;
     } else {
      i28 = HEAP32[i16 + 36 >> 2] | 0;
     }
     i4 = (HEAP32[(HEAP32[i28 + 24 >> 2] | 0) + 88 >> 2] & 98304 | 0) != 0;
     return i4 | 0;
    }
   } while (0);
   if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(HEAP32[i2 >> 2] | 0, 0, 1) | 0)) {
    i4 = 0;
    return i4 | 0;
   }
   i17 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i16 = (HEAP32[i17 + 12 >> 2] & 2048 | 0) == 0;
     i15 = i17 + 32 | 0;
     if (i16) {
      i29 = i15 | 0;
     } else {
      i29 = HEAP32[i15 >> 2] | 0;
     }
     if ((HEAP32[i29 >> 2] | 0) == 0) {
      break;
     }
     if (i16) {
      i30 = i15 | 0;
     } else {
      i30 = HEAP32[i15 >> 2] | 0;
     }
     i15 = HEAP32[i30 >> 2] | 0;
     if ((HEAP32[i15 + 20 >> 2] & 768 | 0) == 256) {
      i31 = HEAP32[(HEAP32[i15 + 8 >> 2] | 0) + 36 >> 2] | 0;
     } else {
      i31 = HEAP32[i15 + 36 >> 2] | 0;
     }
     if ((HEAP32[(HEAP32[i31 + 24 >> 2] | 0) + 88 >> 2] & 98304 | 0) == 0) {
      i4 = 0;
     } else {
      break;
     }
     return i4 | 0;
    }
   } while (0);
   i4 = __ZNK7WebCore8Position17atEditingBoundaryEv(i1) | 0;
   return i4 | 0;
  }
 } while (0);
 i31 = HEAP32[i2 >> 2] | 0;
 L207 : do {
  if ((i31 | 0) != 0) {
   i30 = i1 + 8 | 0;
   switch (HEAP32[i30 >> 2] & 7 | 0) {
   case 0:
    {
     if ((HEAP32[i1 + 4 >> 2] | 0) < 1) {
      break L207;
     } else {
      i32 = i31;
     }
     break;
    }
   case 3:
   case 1:
    {
     break L207;
     break;
    }
   case 4:
   case 2:
    {
     if ((__ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(i31) | 0) == 0) {
      break L207;
     }
     i29 = HEAP32[i2 >> 2] | 0;
     if ((i29 | 0) == 0) {
      break L207;
     } else {
      i32 = i29;
     }
     break;
    }
   default:
    {
     i32 = i31;
    }
   }
   i29 = HEAP32[i30 >> 2] & 7;
   if ((i29 | 0) == 2 | (i29 | 0) == 4) {
    break;
   }
   i29 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i29 | 0) < (__ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(i32) | 0)) {
    i4 = 0;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i32 = HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] | 0;
 if ((i32 | 0) == 0) {
  i4 = 1;
  return i4 | 0;
 }
 i2 = (HEAP32[i32 + 12 >> 2] & 2048 | 0) == 0;
 i1 = i32 + 32 | 0;
 if (i2) {
  i33 = i1 | 0;
 } else {
  i33 = HEAP32[i1 >> 2] | 0;
 }
 if ((HEAP32[i33 >> 2] | 0) == 0) {
  i4 = 1;
  return i4 | 0;
 }
 if (i2) {
  i34 = i1 | 0;
 } else {
  i34 = HEAP32[i1 >> 2] | 0;
 }
 i1 = HEAP32[i34 >> 2] | 0;
 if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
  i35 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i35 = HEAP32[i1 + 36 >> 2] | 0;
 }
 i4 = (HEAP32[(HEAP32[i35 + 24 >> 2] | 0) + 88 >> 2] & 98304 | 0) != 0;
 return i4 | 0;
}
function __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i9 = i1 + 8 | 0;
  i10 = i9;
  i11 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = i11 & -8;
  HEAP8[i9] = i11 & 255 & -16;
  STACKTOP = i4;
  return;
 } else {
  i12 = i8;
 }
 while (1) {
  if (__ZN7WebCoreL38endsOfNodeAreVisuallyDistinctPositionsEPNS_4NodeE(i12) | 0) {
   i13 = i12;
   break;
  }
  i11 = HEAP32[i12 + 16 >> 2] | 0;
  i9 = i11 | 0;
  if ((i11 | 0) == 0) {
   i13 = i9;
   break;
  } else {
   i12 = i9;
  }
 }
 i12 = i2 + 8 | 0;
 i9 = HEAP32[i12 >> 2] | 0;
 L8 : do {
  if ((i9 & 7 | 0) == 2) {
   i11 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i11 | 0) == 0) {
     i14 = 0;
     i15 = __ZN7WebCore14caretMaxOffsetEPKNS_4NodeE(0) | 0;
    } else {
     i10 = i11 + 8 | 0;
     HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
     i10 = __ZN7WebCore14caretMaxOffsetEPKNS_4NodeE(HEAP32[i7 >> 2] | 0) | 0;
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 132 >> 2] & 1](i11) | 0) {
      i14 = i11;
      i15 = i10;
      break;
     }
     i16 = 0;
     i17 = 1;
     i18 = i11;
     i19 = i10;
     i20 = (i10 | 0) == 0 ? 9 : 10;
     i21 = 14;
     break L8;
    }
   } while (0);
   HEAP32[i5 >> 2] = i14;
   i22 = i15;
   i23 = i15;
   i24 = i14;
   i25 = 1;
   i26 = 0;
   i27 = 8;
   i28 = i5 + 4 | 0;
   i29 = 0;
  } else {
   i11 = HEAP32[i7 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i30 = i9 & 255;
    i31 = i9 & 255;
   } else {
    i10 = i11 + 8 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
    i10 = HEAP32[i12 >> 2] | 0;
    i30 = i10 & 255;
    i31 = i10 & 255;
   }
   i16 = 1;
   i17 = 0;
   i18 = i11;
   i19 = HEAP32[i2 + 4 >> 2] | 0;
   i20 = i30 & 7 | i31 & 8;
   i21 = 14;
  }
 } while (0);
 do {
  if ((i21 | 0) == 14) {
   i31 = i20 & 255;
   HEAP32[i5 >> 2] = i18;
   i30 = i5 + 4 | 0;
   if ((i20 & 8) != 0) {
    i22 = i19;
    i23 = i19;
    i24 = i18;
    i25 = i17;
    i26 = i16;
    i27 = i31;
    i28 = i30;
    i29 = 0;
    break;
   }
   i2 = i31 & 7;
   if (!((i2 | 0) == 2 | (i2 | 0) == 4)) {
    i22 = i19;
    i23 = i19;
    i24 = i18;
    i25 = i17;
    i26 = i16;
    i27 = i31;
    i28 = i30;
    i29 = 1;
    break;
   }
   i22 = __ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(i18) | 0;
   i23 = i19;
   i24 = i18;
   i25 = i17;
   i26 = i16;
   i27 = i31;
   i28 = i30;
   i29 = 1;
  }
 } while (0);
 if ((HEAP32[i24 + 12 >> 2] & 2 | 0) == 0) {
  HEAP32[i28 >> 2] = 0;
  i32 = i5 + 8 | 0;
  i21 = 20;
 } else {
  i16 = __ZNK7WebCore13ContainerNode9childNodeEj(i24, i22) | 0;
  HEAP32[i28 >> 2] = i16;
  i28 = i5 + 8 | 0;
  if ((i16 | 0) == 0) {
   i32 = i28;
   i21 = 20;
  } else {
   i33 = 0;
   i34 = i28;
  }
 }
 do {
  if ((i21 | 0) == 20) {
   if (!i29) {
    i33 = i23;
    i34 = i32;
    break;
   }
   i28 = i27 & 7;
   if (!((i28 | 0) == 2 | (i28 | 0) == 4)) {
    i33 = i23;
    i34 = i32;
    break;
   }
   i33 = __ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(i24) | 0;
   i34 = i32;
  }
 } while (0);
 HEAP32[i34 >> 2] = i33;
 i33 = (i24 | 0) == 0;
 do {
  if (!(i25 | i33)) {
   i34 = i24 + 8 | 0;
   i32 = i34 | 0;
   i23 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
   HEAP32[i32 >> 2] = i23;
   if ((i23 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
  }
 } while (0);
 do {
  if (!(i26 | i33)) {
   i25 = i24 + 8 | 0;
   i34 = i25 | 0;
   i23 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
   HEAP32[i34 >> 2] = i23;
   if ((i23 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
  }
 } while (0);
 i24 = i6;
 i33 = i5;
 HEAP32[i24 >> 2] = HEAP32[i33 >> 2];
 HEAP32[i24 + 4 >> 2] = HEAP32[i33 + 4 >> 2];
 HEAP32[i24 + 8 >> 2] = HEAP32[i33 + 8 >> 2];
 i26 = __ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i8, 0, 1) | 0;
 L42 : do {
  if (!(__ZNK7WebCore16PositionIterator7atStartEv(i6) | 0)) {
   i25 = i6 | 0;
   i23 = (i3 | 0) != 0;
   i34 = i6 + 8 | 0;
   i32 = 0;
   i27 = i8;
   L44 : while (1) {
    i35 = HEAP32[i25 >> 2] | 0;
    if ((i35 | 0) == (i27 | 0)) {
     i36 = i27;
     i37 = i32;
    } else {
     i29 = __ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i35, 0, 1) | 0;
     if ((i3 | 0) != 1 | i26 ^ i29 ^ 1) {
      i36 = i35;
      i37 = i32 | i26 ^ i29;
     } else {
      break L42;
     }
    }
    if (!((i35 | 0) == (i13 | 0) | (__ZN7WebCoreL38endsOfNodeAreVisuallyDistinctPositionsEPNS_4NodeE(i35) | 0) ^ 1)) {
     i21 = 36;
     break;
    }
    i29 = i35 + 32 | 0;
    if ((HEAP32[i35 + 12 >> 2] & 2048 | 0) == 0) {
     i38 = i29 | 0;
    } else {
     i38 = HEAP32[i29 >> 2] | 0;
    }
    i39 = HEAP32[i38 >> 2] | 0;
    L54 : do {
     if ((i39 | 0) != 0) {
      i29 = i39 + 20 | 0;
      if ((HEAP32[i29 >> 2] & 768 | 0) == 256) {
       i40 = HEAP32[(HEAP32[i39 + 8 >> 2] | 0) + 36 >> 2] | 0;
      } else {
       i40 = HEAP32[i39 + 36 >> 2] | 0;
      }
      if ((HEAP32[i40 + 40 >> 2] & 6144 | 0) != 0) {
       break;
      }
      if (!(i23 | i37 ^ 1)) {
       i21 = 46;
       break L44;
      }
      i28 = HEAP32[i25 >> 2] | 0;
      do {
       if ((i28 | 0) == 0) {
        i21 = 50;
       } else {
        if (__ZN7WebCore12isAtomicNodeEPKNS_4NodeE(i28) | 0) {
         i21 = 50;
         break;
        }
        if (__ZNK7WebCore16PositionIterator13atStartOfNodeEv(i6) | 0) {
         i21 = 50;
        }
       }
      } while (0);
      if ((i21 | 0) == 50) {
       i21 = 0;
       HEAP32[i33 >> 2] = HEAP32[i24 >> 2];
       HEAP32[i33 + 4 >> 2] = HEAP32[i24 + 4 >> 2];
       HEAP32[i33 + 8 >> 2] = HEAP32[i24 + 8 >> 2];
      }
      if (__ZN7WebCoreL38endsOfNodeAreVisuallyDistinctPositionsEPNS_4NodeE(i35) | 0) {
       if (__ZNK7WebCore16PositionIterator13atStartOfNodeEv(i6) | 0) {
        i21 = 53;
        break L44;
       }
      }
      i41 = i35;
      do {
       if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i41 >> 2] | 0) + 132 >> 2] & 1](i35) | 0) {
        if (__ZN7WebCore14isTableElementEPNS_4NodeE(i35) | 0) {
         break;
        }
        if ((HEAP32[i29 >> 2] & 768 | 0) != 256) {
         break L54;
        }
        __ZN7WebCore10RenderText15ensureLineBoxesEv(i39);
        i28 = HEAP32[i39 + 48 >> 2] | 0;
        if ((i28 | 0) == 0) {
         break L54;
        }
        if ((i35 | 0) != (i8 | 0)) {
         i21 = 63;
         break L44;
        }
        i16 = HEAP32[i34 >> 2] | 0;
        i22 = HEAP32[i39 + 52 >> 2] | 0;
        i17 = i22;
        i18 = i22;
        i22 = i28;
        while (1) {
         i28 = HEAP32[i22 + 44 >> 2] | 0;
         i19 = (HEAPU16[i22 + 48 >> 1] | 0) + i28 | 0;
         L79 : do {
          if (i16 >>> 0 > i19 >>> 0) {
           if ((i22 | 0) == (i17 | 0)) {
            break;
           }
           if ((i16 | 0) != (i19 + 1 | 0)) {
            break;
           }
           i20 = i22 | 0;
           i30 = i20;
           while (1) {
            i31 = __ZNK7WebCore9InlineBox13nextLeafChildEv(i30) | 0;
            if ((i31 | 0) == 0) {
             i42 = i20;
             break;
            }
            if ((i31 | 0) == (i18 | 0)) {
             break L79;
            }
            if ((HEAP32[i31 + 16 >> 2] | 0) != (i39 | 0)) {
             i30 = i31;
             continue;
            }
            if ((HEAP32[i31 + 44 >> 2] | 0) >>> 0 > i16 >>> 0) {
             break L79;
            } else {
             i30 = i31;
            }
           }
           while (1) {
            i30 = __ZNK7WebCore9InlineBox13prevLeafChildEv(i42) | 0;
            if ((i30 | 0) == 0) {
             i21 = 84;
             break L44;
            }
            if ((i30 | 0) == (i18 | 0)) {
             break L79;
            }
            if ((HEAP32[i30 + 16 >> 2] | 0) != (i39 | 0)) {
             i42 = i30;
             continue;
            }
            if ((HEAP32[i30 + 44 >> 2] | 0) >>> 0 > i16 >>> 0) {
             break;
            } else {
             i42 = i30;
            }
           }
          } else {
           if (i16 >>> 0 > i28 >>> 0) {
            i21 = 72;
            break L44;
           }
          }
         } while (0);
         i22 = HEAP32[i22 + 40 >> 2] | 0;
         if ((i22 | 0) == 0) {
          break L54;
         }
        }
       }
      } while (0);
      if (__ZNK7WebCore16PositionIterator11atEndOfNodeEv(i6) | 0) {
       i21 = 57;
       break L44;
      }
     }
    } while (0);
    __ZN7WebCore16PositionIterator9decrementEv(i6);
    if (__ZNK7WebCore16PositionIterator7atStartEv(i6) | 0) {
     break L42;
    } else {
     i32 = i37;
     i27 = i36;
    }
   }
   if ((i21 | 0) == 53) {
    __ZNK7WebCore16PositionIteratorcvNS_8PositionEEv(i1, i5);
    STACKTOP = i4;
    return;
   } else if ((i21 | 0) == 57) {
    if ((i35 | 0) != 0) {
     i27 = i35 + 8 | 0;
     HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
    }
    HEAP32[i1 >> 2] = i35;
    HEAP32[i1 + 4 >> 2] = 0;
    i27 = i1 + 8 | 0;
    i32 = i27;
    i34 = HEAP32[i32 >> 2] & -8 | 2;
    HEAP32[i32 >> 2] = i34;
    HEAP8[i27] = i34 & 255 & -14;
    STACKTOP = i4;
    return;
   } else if ((i21 | 0) == 84) {
    __ZNK7WebCore16PositionIteratorcvNS_8PositionEEv(i1, i6);
    STACKTOP = i4;
    return;
   } else if ((i21 | 0) == 46) {
    HEAP32[i33 >> 2] = HEAP32[i24 >> 2];
    HEAP32[i33 + 4 >> 2] = HEAP32[i24 + 4 >> 2];
    HEAP32[i33 + 8 >> 2] = HEAP32[i24 + 8 >> 2];
    break;
   } else if ((i21 | 0) == 72) {
    __ZNK7WebCore16PositionIteratorcvNS_8PositionEEv(i1, i6);
    STACKTOP = i4;
    return;
   } else if ((i21 | 0) == 63) {
    i34 = (i35 | 0) == 0;
    if (!i34) {
     i27 = i35 + 8 | 0;
     HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
    }
    i27 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i39 >> 2] | 0) + 568 >> 2] & 1](i39) | 0;
    HEAP32[i1 >> 2] = i35;
    HEAP32[i1 + 4 >> 2] = i27;
    do {
     if (i34) {
      i43 = 0;
     } else {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i41 >> 2] | 0) + 132 >> 2] & 1](i35) | 0) {
       i43 = 0;
       break;
      }
      i43 = (i27 | 0) == 0 ? 1 : 2;
     }
    } while (0);
    i27 = i1 + 8 | 0;
    i34 = i27;
    i32 = HEAP32[i34 >> 2] & -8 | i43;
    HEAP32[i34 >> 2] = i32;
    HEAP8[i27] = i32 & 255 | 8;
    STACKTOP = i4;
    return;
   } else if ((i21 | 0) == 36) {
    __ZNK7WebCore16PositionIteratorcvNS_8PositionEEv(i1, i5);
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 __ZNK7WebCore16PositionIteratorcvNS_8PositionEEv(i1, i5);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore8Position26rendersInDifferentPositionERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 i10 = i2 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 i12 = HEAP32[i8 + 12 >> 2] | 0;
 i13 = i8 + 32 | 0;
 if ((i12 & 2048 | 0) == 0) {
  i14 = i13 | 0;
 } else {
  i14 = HEAP32[i13 >> 2] | 0;
 }
 i13 = HEAP32[i14 >> 2] | 0;
 if ((i13 | 0) == 0) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 i14 = i11 + 32 | 0;
 if ((HEAP32[i11 + 12 >> 2] & 2048 | 0) == 0) {
  i15 = i14 | 0;
 } else {
  i15 = HEAP32[i14 >> 2] | 0;
 }
 i14 = HEAP32[i15 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 i15 = i13 + 20 | 0;
 if ((HEAP32[i15 >> 2] & 768 | 0) == 256) {
  i16 = HEAP32[(HEAP32[i13 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i16 = HEAP32[i13 + 36 >> 2] | 0;
 }
 if ((HEAP32[i16 + 40 >> 2] & 6144 | 0) != 0) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 i16 = i14 + 20 | 0;
 if ((HEAP32[i16 >> 2] & 768 | 0) == 256) {
  i17 = HEAP32[(HEAP32[i14 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i17 = HEAP32[i14 + 36 >> 2] | 0;
 }
 if ((HEAP32[i17 + 40 >> 2] & 6144 | 0) != 0) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 do {
  if ((i8 | 0) == (i11 | 0)) {
   do {
    if ((i12 & 4 | 0) != 0) {
     i17 = HEAP32[i8 + 44 >> 2] | 0;
     i18 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
     if ((i17 | 0) == (i18 | 0)) {
      i9 = 0;
      STACKTOP = i3;
      return i9 | 0;
     }
     if ((HEAP32[i17 + 12 >> 2] | 0) != (HEAP32[i18 + 12 >> 2] | 0)) {
      break;
     }
     if ((HEAP32[i17 + 16 >> 2] | 0) == (HEAP32[i18 + 16 >> 2] | 0)) {
      i9 = 0;
     } else {
      break;
     }
     STACKTOP = i3;
     return i9 | 0;
    }
   } while (0);
   i18 = i1 + 4 | 0;
   i17 = HEAP32[i18 >> 2] | 0;
   i19 = i2 + 8 | 0;
   do {
    if ((HEAP8[i19] & 8) == 0) {
     i20 = HEAP32[i19 >> 2] & 7;
     if (!((i20 | 0) == 2 | (i20 | 0) == 4)) {
      i21 = 26;
      break;
     }
     i22 = __ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(i8) | 0;
    } else {
     i21 = 26;
    }
   } while (0);
   if ((i21 | 0) == 26) {
    i22 = HEAP32[i2 + 4 >> 2] | 0;
   }
   if ((i17 | 0) == (i22 | 0)) {
    i9 = 0;
    STACKTOP = i3;
    return i9 | 0;
   }
   i20 = HEAP32[i7 >> 2] | 0;
   i23 = HEAP32[i20 + 12 >> 2] | 0;
   if ((i23 & 1 | 0) != 0) {
    i24 = i20;
    i25 = i23;
    break;
   }
   i26 = HEAP32[i10 >> 2] | 0;
   if ((HEAP32[i26 + 12 >> 2] & 1 | 0) != 0) {
    i24 = i20;
    i25 = i23;
    break;
   }
   i23 = HEAP32[i18 >> 2] | 0;
   do {
    if ((HEAP8[i19] & 8) == 0) {
     i20 = HEAP32[i19 >> 2] & 7;
     if (!((i20 | 0) == 2 | (i20 | 0) == 4)) {
      i21 = 33;
      break;
     }
     i27 = __ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(i26) | 0;
    } else {
     i21 = 33;
    }
   } while (0);
   if ((i21 | 0) == 33) {
    i27 = HEAP32[i2 + 4 >> 2] | 0;
   }
   if ((i23 | 0) == (i27 | 0)) {
    i26 = HEAP32[i7 >> 2] | 0;
    i24 = i26;
    i25 = HEAP32[i26 + 12 >> 2] | 0;
    break;
   } else {
    i9 = 1;
    STACKTOP = i3;
    return i9 | 0;
   }
  } else {
   i24 = i8;
   i25 = i12;
  }
 } while (0);
 do {
  if ((i25 & 4 | 0) != 0) {
   i12 = HEAP32[i24 + 44 >> 2] | 0;
   i8 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
   if ((i12 | 0) != (i8 | 0)) {
    if ((HEAP32[i12 + 12 >> 2] | 0) != (HEAP32[i8 + 12 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i12 + 16 >> 2] | 0) != (HEAP32[i8 + 16 >> 2] | 0)) {
     break;
    }
   }
   if (__ZNK7WebCore8Position11isCandidateEv(i2) | 0) {
    i9 = 1;
   } else {
    break;
   }
   STACKTOP = i3;
   return i9 | 0;
  }
 } while (0);
 i24 = HEAP32[i10 >> 2] | 0;
 do {
  if ((HEAP32[i24 + 12 >> 2] & 4 | 0) == 0) {
   i28 = i24;
  } else {
   i25 = HEAP32[i24 + 44 >> 2] | 0;
   i8 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
   if ((i25 | 0) != (i8 | 0)) {
    if ((HEAP32[i25 + 12 >> 2] | 0) != (HEAP32[i8 + 12 >> 2] | 0)) {
     i28 = i24;
     break;
    }
    if ((HEAP32[i25 + 16 >> 2] | 0) != (HEAP32[i8 + 16 >> 2] | 0)) {
     i28 = i24;
     break;
    }
   }
   if (__ZNK7WebCore8Position11isCandidateEv(i1) | 0) {
    i9 = 1;
    STACKTOP = i3;
    return i9 | 0;
   } else {
    i28 = HEAP32[i10 >> 2] | 0;
    break;
   }
  }
 } while (0);
 i24 = HEAP32[i7 >> 2] | 0;
 if ((i24 | 0) == 0 | (i28 | 0) == 0) {
  i9 = 1;
  STACKTOP = i3;
  return i9 | 0;
 }
 i8 = __ZN7WebCore35deprecatedEnclosingBlockFlowElementEPNS_4NodeE(i24) | 0;
 if ((i8 | 0) != (__ZN7WebCore35deprecatedEnclosingBlockFlowElementEPNS_4NodeE(i28) | 0)) {
  i9 = 1;
  STACKTOP = i3;
  return i9 | 0;
 }
 do {
  if ((HEAP32[i15 >> 2] & 768 | 0) == 256) {
   if (__ZNK7WebCore10RenderText19containsCaretOffsetEj(i13, HEAP32[i1 + 4 >> 2] | 0) | 0) {
    break;
   } else {
    i9 = 0;
   }
   STACKTOP = i3;
   return i9 | 0;
  }
 } while (0);
 do {
  if ((HEAP32[i16 >> 2] & 768 | 0) == 256) {
   if (__ZNK7WebCore10RenderText19containsCaretOffsetEj(i14, HEAP32[i2 + 4 >> 2] | 0) | 0) {
    break;
   } else {
    i9 = 0;
   }
   STACKTOP = i3;
   return i9 | 0;
  }
 } while (0);
 if ((HEAP32[i15 >> 2] & 768 | 0) == 256) {
  i29 = __ZNK7WebCore10RenderText34countRenderedCharacterOffsetsUntilEj(i13, HEAP32[i1 + 4 >> 2] | 0) | 0;
 } else {
  i29 = HEAP32[i1 + 4 >> 2] | 0;
 }
 if ((HEAP32[i16 >> 2] & 768 | 0) == 256) {
  i30 = __ZNK7WebCore10RenderText34countRenderedCharacterOffsetsUntilEj(i14, HEAP32[i2 + 4 >> 2] | 0) | 0;
 } else {
  i30 = HEAP32[i2 + 4 >> 2] | 0;
 }
 if ((i13 | 0) == (i14 | 0) & (i29 | 0) == (i30 | 0)) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 i14 = HEAP32[i7 >> 2] | 0;
 i13 = i14 + 32 | 0;
 if ((HEAP32[i14 + 12 >> 2] & 2048 | 0) == 0) {
  i31 = i13 | 0;
 } else {
  i31 = HEAP32[i13 >> 2] | 0;
 }
 i13 = HEAP32[i31 >> 2] | 0;
 L113 : do {
  if ((i13 | 0) == 0) {
   i32 = 1;
  } else {
   i31 = i13;
   while (1) {
    if ((HEAP32[i31 + 20 >> 2] & 768 | 0) != 256) {
     if ((HEAP32[i31 + 24 >> 2] & 32 | 0) != 0) {
      break;
     }
    }
    i14 = HEAP32[i31 + 8 >> 2] | 0;
    if ((i14 | 0) == 0) {
     i32 = 1;
     break L113;
    } else {
     i31 = i14 | 0;
    }
   }
   i32 = (HEAP32[(HEAP32[i31 + 36 >> 2] | 0) + 40 >> 2] | 0) >>> 30 & 1;
  }
 } while (0);
 __ZNK7WebCore8Position21getInlineBoxAndOffsetENS_9EAffinityENS_13TextDirectionERPNS_9InlineBoxERi(i1, 1, i32, i5, i4);
 i32 = HEAP32[i10 >> 2] | 0;
 i1 = i32 + 32 | 0;
 if ((HEAP32[i32 + 12 >> 2] & 2048 | 0) == 0) {
  i33 = i1 | 0;
 } else {
  i33 = HEAP32[i1 >> 2] | 0;
 }
 i1 = HEAP32[i33 >> 2] | 0;
 L125 : do {
  if ((i1 | 0) == 0) {
   i34 = 1;
  } else {
   i33 = i1;
   while (1) {
    if ((HEAP32[i33 + 20 >> 2] & 768 | 0) != 256) {
     if ((HEAP32[i33 + 24 >> 2] & 32 | 0) != 0) {
      break;
     }
    }
    i32 = HEAP32[i33 + 8 >> 2] | 0;
    if ((i32 | 0) == 0) {
     i34 = 1;
     break L125;
    } else {
     i33 = i32 | 0;
    }
   }
   i34 = (HEAP32[(HEAP32[i33 + 36 >> 2] | 0) + 40 >> 2] | 0) >>> 30 & 1;
  }
 } while (0);
 __ZNK7WebCore8Position21getInlineBoxAndOffsetENS_9EAffinityENS_13TextDirectionERPNS_9InlineBoxERi(i2, 1, i34, i6, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 i5 = __ZN7WebCore9InlineBox4rootEv(i4) | 0;
 if ((i5 | 0) != (__ZN7WebCore9InlineBox4rootEv(HEAP32[i6 >> 2] | 0) | 0)) {
  i9 = 1;
  STACKTOP = i3;
  return i9 | 0;
 }
 i6 = __ZN7WebCore12nextLeafNodeEPKNS_4NodeE(HEAP32[i7 >> 2] | 0) | 0;
 L142 : do {
  if ((i6 | 0) == 0) {
   i35 = 0;
  } else {
   i5 = i6;
   while (1) {
    i4 = i5 + 32 | 0;
    if ((HEAP32[i5 + 12 >> 2] & 2048 | 0) == 0) {
     i36 = i4 | 0;
    } else {
     i36 = HEAP32[i4 >> 2] | 0;
    }
    i4 = HEAP32[i36 >> 2] | 0;
    do {
     if ((i4 | 0) != 0) {
      if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i5, 0, 1) | 0)) {
       break;
      }
      i34 = HEAP32[i4 + 20 >> 2] | 0;
      if ((i34 & 512 | 0) != 0) {
       if ((HEAP32[i4 + 84 >> 2] | 0) != 0) {
        i35 = i5;
        break L142;
       }
      }
      if ((i34 & 768 | 0) == 256) {
       if ((HEAP32[i4 + 48 >> 2] | 0) != 0) {
        i35 = i5;
        break L142;
       }
      }
      if ((i34 & 4096 | 0) == 0) {
       break;
      }
      if ((HEAP32[i4 + 44 >> 2] | 0) != 0) {
       i35 = i5;
       break L142;
      }
     }
    } while (0);
    i4 = __ZN7WebCore12nextLeafNodeEPKNS_4NodeE(i5) | 0;
    if ((i4 | 0) == 0) {
     i35 = 0;
     break;
    } else {
     i5 = i4;
    }
   }
  }
 } while (0);
 do {
  if ((i35 | 0) == (HEAP32[i10 >> 2] | 0)) {
   if ((i29 | 0) == (__ZN7WebCore14caretMaxOffsetEPKNS_4NodeE(HEAP32[i7 >> 2] | 0) | 0) & (i30 | 0) == 0) {
    i9 = 0;
   } else {
    break;
   }
   STACKTOP = i3;
   return i9 | 0;
  }
 } while (0);
 i35 = __ZN7WebCore16previousLeafNodeEPKNS_4NodeE(HEAP32[i7 >> 2] | 0) | 0;
 L165 : do {
  if ((i35 | 0) == 0) {
   i37 = 0;
  } else {
   i7 = i35;
   while (1) {
    i36 = i7 + 32 | 0;
    if ((HEAP32[i7 + 12 >> 2] & 2048 | 0) == 0) {
     i38 = i36 | 0;
    } else {
     i38 = HEAP32[i36 >> 2] | 0;
    }
    i36 = HEAP32[i38 >> 2] | 0;
    do {
     if ((i36 | 0) != 0) {
      if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i7, 0, 1) | 0)) {
       break;
      }
      i6 = HEAP32[i36 + 20 >> 2] | 0;
      if ((i6 & 512 | 0) != 0) {
       if ((HEAP32[i36 + 84 >> 2] | 0) != 0) {
        i37 = i7;
        break L165;
       }
      }
      if ((i6 & 768 | 0) == 256) {
       if ((HEAP32[i36 + 48 >> 2] | 0) != 0) {
        i37 = i7;
        break L165;
       }
      }
      if ((i6 & 4096 | 0) == 0) {
       break;
      }
      if ((HEAP32[i36 + 44 >> 2] | 0) != 0) {
       i37 = i7;
       break L165;
      }
     }
    } while (0);
    i36 = __ZN7WebCore16previousLeafNodeEPKNS_4NodeE(i7) | 0;
    if ((i36 | 0) == 0) {
     i37 = 0;
     break;
    } else {
     i7 = i36;
    }
   }
  }
 } while (0);
 do {
  if ((i37 | 0) == (HEAP32[i10 >> 2] | 0) & (i29 | 0) == 0) {
   if ((i30 | 0) == (__ZN7WebCore14caretMaxOffsetEPKNS_4NodeE(i37) | 0)) {
    i9 = 0;
   } else {
    break;
   }
   STACKTOP = i3;
   return i9 | 0;
  }
 } while (0);
 i9 = 1;
 STACKTOP = i3;
 return i9 | 0;
}
function __ZNK7WebCore8Position25leadingWhitespacePositionENS_9EAffinityEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i2 | 0;
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i9 = i1 + 8 | 0;
  i10 = i9;
  i11 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = i11 & -8;
  HEAP8[i9] = i11 & 255 & -16;
  STACKTOP = i5;
  return;
 }
 __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i6, i2, 1);
 i11 = HEAP32[i6 >> 2] | 0;
 do {
  if ((HEAP32[i11 + 12 >> 2] & 4 | 0) == 0) {
   i12 = 0;
  } else {
   i6 = HEAP32[i11 + 44 >> 2] | 0;
   i9 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
   if ((i6 | 0) == (i9 | 0)) {
    i12 = 1;
    break;
   }
   if ((HEAP32[i6 + 12 >> 2] | 0) != (HEAP32[i9 + 12 >> 2] | 0)) {
    i12 = 0;
    break;
   }
   i12 = (HEAP32[i6 + 16 >> 2] | 0) == (HEAP32[i9 + 16 >> 2] | 0);
  }
 } while (0);
 do {
  if ((i11 | 0) != 0) {
   i9 = i11 + 8 | 0;
   i6 = i9 | 0;
   i10 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 if (i12) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i12 = i1 + 8 | 0;
  i11 = i12;
  i9 = HEAP32[i11 >> 2] | 0;
  HEAP32[i11 >> 2] = i9 & -8;
  HEAP8[i12] = i9 & 255 & -16;
  STACKTOP = i5;
  return;
 }
 __ZNK7WebCore8Position25previousCharacterPositionENS_9EAffinityE(i7, i2, i3);
 i3 = i7 | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i9 | 0) == (HEAP32[i8 >> 2] | 0)) {
   i12 = i7 + 8 | 0;
   do {
    if ((HEAP8[i12] & 8) == 0) {
     i11 = HEAP32[i12 >> 2] & 7;
     if (!((i11 | 0) == 2 | (i11 | 0) == 4)) {
      i13 = 16;
      break;
     }
     i14 = __ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(i9) | 0;
    } else {
     i13 = 16;
    }
   } while (0);
   if ((i13 | 0) == 16) {
    i14 = HEAP32[i7 + 4 >> 2] | 0;
   }
   i11 = i2 + 8 | 0;
   do {
    if ((HEAP8[i11] & 8) == 0) {
     i10 = HEAP32[i11 >> 2] & 7;
     if (!((i10 | 0) == 2 | (i10 | 0) == 4)) {
      i13 = 20;
      break;
     }
     i15 = __ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(HEAP32[i8 >> 2] | 0) | 0;
    } else {
     i13 = 20;
    }
   } while (0);
   if ((i13 | 0) == 20) {
    i15 = HEAP32[i2 + 4 >> 2] | 0;
   }
   if ((i14 | 0) != (i15 | 0)) {
    i13 = 24;
    break;
   }
   if (((HEAP32[i11 >> 2] ^ HEAP32[i12 >> 2]) & 7 | 0) == 0) {
    i13 = 53;
   } else {
    i13 = 24;
   }
  } else {
   i13 = 24;
  }
 } while (0);
 do {
  if ((i13 | 0) == 24) {
   i15 = HEAP32[i8 >> 2] | 0;
   i14 = HEAP32[i3 >> 2] | 0;
   if ((i15 | 0) == 0 | (i14 | 0) == 0) {
    i13 = 53;
    break;
   }
   i2 = __ZN7WebCore35deprecatedEnclosingBlockFlowElementEPNS_4NodeE(i15) | 0;
   if ((i2 | 0) != (__ZN7WebCore35deprecatedEnclosingBlockFlowElementEPNS_4NodeE(i14) | 0)) {
    i13 = 53;
    break;
   }
   if ((HEAP32[i14 + 12 >> 2] & 1 | 0) == 0) {
    i13 = 53;
    break;
   }
   i2 = HEAP32[i14 + 36 >> 2] | 0;
   i14 = (i2 | 0) == 0;
   if (!i14) {
    i15 = i2 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
   }
   i15 = i7 + 8 | 0;
   do {
    if ((HEAP8[i15] & 8) == 0) {
     i9 = HEAP32[i15 >> 2] & 7;
     if (!((i9 | 0) == 2 | (i9 | 0) == 4)) {
      i13 = 31;
      break;
     }
     i16 = __ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(HEAP32[i3 >> 2] | 0) | 0;
    } else {
     i13 = 31;
    }
   } while (0);
   if ((i13 | 0) == 31) {
    i16 = HEAP32[i7 + 4 >> 2] | 0;
   }
   do {
    if (i14) {
     i17 = 0;
    } else {
     if ((HEAP32[i2 + 4 >> 2] | 0) >>> 0 <= i16 >>> 0) {
      i17 = 0;
      break;
     }
     i12 = i2 + 8 | 0;
     if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
      i17 = HEAP16[(HEAP32[i12 >> 2] | 0) + (i16 << 1) >> 1] | 0;
      break;
     } else {
      i17 = HEAPU8[(HEAP32[i12 >> 2] | 0) + i16 | 0] | 0;
      break;
     }
    }
   } while (0);
   L55 : do {
    if (i4) {
     do {
      if ((i17 & 65535) >>> 0 < 128 >>> 0) {
       if ((i17 & 65535) >>> 0 >= 33 >>> 0) {
        i18 = 0;
        break;
       }
       if (i17 << 16 >> 16 == 32) {
        i13 = 46;
        break L55;
       }
       i18 = (i17 - 9 & 65535) >>> 0 < 5 >>> 0;
      } else {
       i18 = (_u_charDirection(i17 & 65535) | 0) == 9;
      }
     } while (0);
     if (i18 | i17 << 16 >> 16 == 160) {
      i13 = 46;
     } else {
      i19 = 0;
     }
    } else {
     i12 = i17 & 65535;
     if ((i12 | 0) == 32 | (i12 | 0) == 10) {
      i13 = 46;
     } else {
      i19 = 0;
     }
    }
   } while (0);
   do {
    if ((i13 | 0) == 46) {
     if (!(__ZN7WebCore18isEditablePositionERKNS_8PositionENS_12EditableTypeENS_12EUpdateStyleE(i7, 0, 0) | 0)) {
      i19 = 0;
      break;
     }
     i12 = HEAP32[i3 >> 2] | 0;
     HEAP32[i3 >> 2] = 0;
     HEAP32[i1 >> 2] = i12;
     HEAP32[i1 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
     i12 = HEAP32[i15 >> 2] | 0;
     i11 = i1 + 8 | 0;
     i9 = i11;
     i10 = HEAP32[i9 >> 2] & -8 | i12 & 7;
     HEAP32[i9 >> 2] = i10;
     HEAP8[i11] = i10 & 255 & -9 | i12 & 8;
     i19 = 1;
    }
   } while (0);
   do {
    if (!i14) {
     i15 = i2 | 0;
     i12 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i2);
      break;
     } else {
      HEAP32[i15 >> 2] = i12;
      break;
     }
    }
   } while (0);
   if ((i19 | 0) == 0) {
    i13 = 53;
   }
  }
 } while (0);
 if ((i13 | 0) == 53) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i13 = i1 + 8 | 0;
  i1 = i13;
  i19 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = i19 & -8;
  HEAP8[i13] = i19 & 255 & -16;
 }
 i19 = HEAP32[i3 >> 2] | 0;
 if ((i19 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i3 = i19 + 8 | 0;
 i19 = i3 | 0;
 i13 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
 HEAP32[i19 >> 2] = i13;
 if ((i13 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore8Position8previousENS_16PositionMoveTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
  i6 = i2 + 8 | 0;
  i7 = i1 + 8 | 0;
  i8 = i7;
  i9 = HEAP32[i8 >> 2] & -8 | HEAP32[i6 >> 2] & 7;
  HEAP32[i8 >> 2] = i9;
  HEAP8[i7] = i9 & 255 & -9 | HEAP8[i6] & 8;
  return;
 }
 i6 = i2 + 8 | 0;
 do {
  if ((HEAP8[i6] & 8) == 0) {
   i9 = HEAP32[i6 >> 2] & 7;
   if (!((i9 | 0) == 2 | (i9 | 0) == 4)) {
    i10 = 5;
    break;
   }
   i11 = __ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(i5) | 0;
  } else {
   i10 = 5;
  }
 } while (0);
 if ((i10 | 0) == 5) {
  i11 = HEAP32[i2 + 4 >> 2] | 0;
 }
 do {
  if ((i11 | 0) > 0) {
   i10 = i11 - 1 | 0;
   i9 = i5 + 12 | 0;
   do {
    if ((HEAP32[i9 >> 2] & 2 | 0) != 0) {
     i7 = __ZNK7WebCore13ContainerNode9childNodeEj(i5, i10) | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     i8 = i7;
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 132 >> 2] & 1](i7) | 0)) {
      i12 = i7 + 8 | 0;
      HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
      HEAP32[i1 >> 2] = i7;
      HEAP32[i1 + 4 >> 2] = 0;
      i12 = i1 + 8 | 0;
      i13 = i12;
      i14 = HEAP32[i13 >> 2] & -8 | 2;
      HEAP32[i13 >> 2] = i14;
      HEAP8[i12] = i14 & 255 & -14;
      return;
     }
     i14 = i7 + 12 | 0;
     i12 = (HEAP32[i14 >> 2] & 1 | 0) == 0;
     i13 = i7 + 8 | 0;
     HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
     if (i12) {
      HEAP32[i1 >> 2] = i7;
      HEAP32[i1 + 4 >> 2] = 0;
      i12 = i1 + 8 | 0;
      i13 = i12;
      i15 = HEAP32[i13 >> 2] & -8 | 4;
      HEAP32[i13 >> 2] = i15;
      HEAP8[i12] = i15 & 255 & -12;
      return;
     }
     do {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 164 >> 2] & 1](i7) | 0) {
       i16 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 168 >> 2] & 1](i7) | 0;
      } else {
       if ((HEAP32[i14 >> 2] & 2 | 0) == 0) {
        i16 = 0;
        break;
       }
       i16 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i7) | 0;
      }
     } while (0);
     HEAP32[i1 >> 2] = i7;
     HEAP32[i1 + 4 >> 2] = i16;
     i14 = i1 + 8 | 0;
     i8 = i14;
     i15 = HEAP32[i8 >> 2] | 0;
     HEAP32[i8 >> 2] = i15 & -8;
     HEAP8[i14] = i15 & 255 & -16;
     return;
    }
   } while (0);
   if ((i3 | 0) == 1) {
    i15 = i5 + 8 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
    i15 = (HEAP32[i9 >> 2] & 2048 | 0) == 0;
    i14 = i5 + 32 | 0;
    if (i15) {
     i17 = i14 | 0;
    } else {
     i17 = HEAP32[i14 >> 2] | 0;
    }
    if ((HEAP32[i17 >> 2] | 0) == 0) {
     i18 = i10;
    } else {
     if (i15) {
      i19 = i14 | 0;
     } else {
      i19 = HEAP32[i14 >> 2] | 0;
     }
     i14 = HEAP32[i19 >> 2] | 0;
     i18 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i14 >> 2] | 0) + 572 >> 2] & 1](i14, i11) | 0;
    }
    HEAP32[i1 >> 2] = i5;
    HEAP32[i1 + 4 >> 2] = i18;
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 132 >> 2] & 1](i5) | 0) {
     i20 = 0;
    } else {
     i20 = (i18 | 0) == 0 ? 1 : 2;
    }
    i14 = i1 + 8 | 0;
    i15 = i14;
    i8 = HEAP32[i15 >> 2] & -8 | i20;
    HEAP32[i15 >> 2] = i8;
    HEAP8[i14] = i8 & 255 | 8;
    return;
   } else if ((i3 | 0) == 0) {
    i8 = i5 + 8 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
    HEAP32[i1 >> 2] = i5;
    HEAP32[i1 + 4 >> 2] = i10;
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 132 >> 2] & 1](i5) | 0) {
     i21 = 0;
    } else {
     i21 = (i10 | 0) == 0 ? 1 : 2;
    }
    i8 = i1 + 8 | 0;
    i14 = i8;
    i15 = HEAP32[i14 >> 2] & -8 | i21;
    HEAP32[i14 >> 2] = i15;
    HEAP8[i8] = i15 & 255 | 8;
    return;
   } else if ((i3 | 0) == 2) {
    i15 = i5 + 8 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
    i15 = (HEAP32[i9 >> 2] & 2048 | 0) == 0;
    i8 = i5 + 32 | 0;
    if (i15) {
     i22 = i8 | 0;
    } else {
     i22 = HEAP32[i8 >> 2] | 0;
    }
    if ((HEAP32[i22 >> 2] | 0) == 0) {
     i23 = i10;
    } else {
     if (i15) {
      i24 = i8 | 0;
     } else {
      i24 = HEAP32[i8 >> 2] | 0;
     }
     i8 = HEAP32[i24 >> 2] | 0;
     i23 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i8 >> 2] | 0) + 576 >> 2] & 1](i8, i11) | 0;
    }
    HEAP32[i1 >> 2] = i5;
    HEAP32[i1 + 4 >> 2] = i23;
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 132 >> 2] & 1](i5) | 0) {
     i25 = 0;
    } else {
     i25 = (i23 | 0) == 0 ? 1 : 2;
    }
    i8 = i1 + 8 | 0;
    i15 = i8;
    i14 = HEAP32[i15 >> 2] & -8 | i25;
    HEAP32[i15 >> 2] = i14;
    HEAP8[i8] = i14 & 255 | 8;
    return;
   } else {
    break;
   }
  }
 } while (0);
 i25 = __ZNK7WebCore4Node27nonShadowBoundaryParentNodeEv(i5) | 0;
 if ((i25 | 0) == 0) {
  i23 = HEAP32[i4 >> 2] | 0;
  HEAP32[i1 >> 2] = i23;
  if ((i23 | 0) != 0) {
   i4 = i23 + 8 | 0;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
  }
  HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
  i2 = i1 + 8 | 0;
  i4 = i2;
  i23 = HEAP32[i4 >> 2] & -8 | HEAP32[i6 >> 2] & 7;
  HEAP32[i4 >> 2] = i23;
  HEAP8[i2] = i23 & 255 & -9 | HEAP8[i6] & 8;
  return;
 } else {
  i6 = i25 | 0;
  i23 = i25 + 8 | 0;
  HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
  i23 = __ZNK7WebCore4Node9nodeIndexEv(i5) | 0;
  HEAP32[i1 >> 2] = i6;
  HEAP32[i1 + 4 >> 2] = i23;
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 132 >> 2] & 1](i6) | 0) {
   i26 = 0;
  } else {
   i26 = (i23 | 0) == 0 ? 1 : 2;
  }
  i23 = i1 + 8 | 0;
  i1 = i23;
  i6 = HEAP32[i1 >> 2] & -8 | i26;
  HEAP32[i1 >> 2] = i6;
  HEAP8[i23] = i6 & 255 | 8;
  return;
 }
}
function __ZNK7WebCore8Position21nextCharacterPositionENS_9EAffinityE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i2 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i10 = i1 + 8 | 0;
  i11 = i10;
  i12 = HEAP32[i11 >> 2] | 0;
  HEAP32[i11 >> 2] = i12 & -8;
  HEAP8[i10] = i12 & 255 & -16;
  STACKTOP = i4;
  return;
 }
 i12 = __ZNK7WebCore4Node19rootEditableElementEv(i9) | 0;
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i5, i2, i3);
 i3 = __ZN7WebCore11isEndOfLineERKNS_15VisiblePositionE(i5) | 0;
 i9 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i5 = i9 + 8 | 0;
   i10 = i5 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i9 = __ZNK7WebCore8Position11isCandidateEv(i2) | 0;
 i5 = i6 | 0;
 i11 = HEAP32[i8 >> 2] | 0;
 HEAP32[i5 >> 2] = i11;
 if ((i11 | 0) == 0) {
  i13 = 0;
 } else {
  i10 = i11 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  i13 = HEAP32[i5 >> 2] | 0;
 }
 i10 = i6 + 4 | 0;
 i11 = i2 + 4 | 0;
 HEAP32[i10 >> 2] = HEAP32[i11 >> 2];
 i14 = i2 + 8 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 i16 = i6 + 8 | 0;
 i17 = i16;
 i18 = HEAP32[i17 >> 2] & -8 | i15 & 7;
 HEAP32[i17 >> 2] = i18;
 HEAP8[i16] = i18 & 255 & -9 | i15 & 8;
 L13 : do {
  if ((i13 | 0) == 0) {
   i19 = 31;
  } else {
   i15 = i7 | 0;
   i18 = i7 + 4 | 0;
   i20 = i7 + 8 | 0;
   i21 = i3 | i9 ^ 1;
   i22 = i13;
   while (1) {
    if ((__ZNK7WebCore4Node27nonShadowBoundaryParentNodeEv(i22) | 0) == 0) {
     i23 = HEAP32[i10 >> 2] | 0;
     if ((i23 | 0) >= (__ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(i22) | 0)) {
      i19 = 31;
      break L13;
     }
    }
    __ZNK7WebCore8Position4nextENS_16PositionMoveTypeE(i7, i6, 0);
    i23 = HEAP32[i15 >> 2] | 0;
    HEAP32[i15 >> 2] = 0;
    i24 = HEAP32[i5 >> 2] | 0;
    HEAP32[i5 >> 2] = i23;
    do {
     if ((i24 | 0) != 0) {
      i23 = i24 + 8 | 0;
      i25 = i23 | 0;
      i26 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
      HEAP32[i25 >> 2] = i26;
      if ((i26 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
     }
    } while (0);
    HEAP32[i10 >> 2] = HEAP32[i18 >> 2];
    i24 = HEAP32[i20 >> 2] | 0;
    i23 = HEAP32[i17 >> 2] & -8 | i24 & 7;
    HEAP32[i17 >> 2] = i23;
    HEAP8[i16] = i23 & 255 & -9 | i24 & 8;
    i24 = HEAP32[i15 >> 2] | 0;
    do {
     if ((i24 | 0) != 0) {
      i23 = i24 + 8 | 0;
      i26 = i23 | 0;
      i25 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
      HEAP32[i26 >> 2] = i25;
      if ((i25 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
     }
    } while (0);
    if ((__ZNK7WebCore4Node19rootEditableElementEv(HEAP32[i5 >> 2] | 0) | 0) != (i12 | 0)) {
     i19 = 22;
     break;
    }
    if (i21) {
     if (__ZNK7WebCore8Position11isCandidateEv(i6) | 0) {
      i19 = 27;
      break;
     }
    } else {
     if (__ZNK7WebCore8Position26rendersInDifferentPositionERKS0_(i2, i6) | 0) {
      i19 = 30;
      break;
     }
    }
    i24 = HEAP32[i5 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i19 = 31;
     break L13;
    } else {
     i22 = i24;
    }
   }
   if ((i19 | 0) == 30) {
    i22 = HEAP32[i5 >> 2] | 0;
    HEAP32[i5 >> 2] = 0;
    HEAP32[i1 >> 2] = i22;
    HEAP32[i1 + 4 >> 2] = HEAP32[i10 >> 2];
    i22 = HEAP32[i17 >> 2] | 0;
    i21 = i1 + 8 | 0;
    i15 = i21;
    i20 = HEAP32[i15 >> 2] & -8 | i22 & 7;
    HEAP32[i15 >> 2] = i20;
    HEAP8[i21] = i20 & 255 & -9 | i22 & 8;
    break;
   } else if ((i19 | 0) == 27) {
    i22 = HEAP32[i5 >> 2] | 0;
    HEAP32[i5 >> 2] = 0;
    HEAP32[i1 >> 2] = i22;
    HEAP32[i1 + 4 >> 2] = HEAP32[i10 >> 2];
    i22 = HEAP32[i17 >> 2] | 0;
    i20 = i1 + 8 | 0;
    i21 = i20;
    i15 = HEAP32[i21 >> 2] & -8 | i22 & 7;
    HEAP32[i21 >> 2] = i15;
    HEAP8[i20] = i15 & 255 & -9 | i22 & 8;
    break;
   } else if ((i19 | 0) == 22) {
    i22 = HEAP32[i8 >> 2] | 0;
    HEAP32[i1 >> 2] = i22;
    if ((i22 | 0) != 0) {
     i15 = i22 + 8 | 0;
     HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
    }
    HEAP32[i1 + 4 >> 2] = HEAP32[i11 >> 2];
    i15 = HEAP32[i14 >> 2] | 0;
    i22 = i1 + 8 | 0;
    i20 = i22;
    i21 = HEAP32[i20 >> 2] & -8 | i15 & 7;
    HEAP32[i20 >> 2] = i21;
    HEAP8[i22] = i21 & 255 & -9 | i15 & 8;
    break;
   }
  }
 } while (0);
 if ((i19 | 0) == 31) {
  i19 = HEAP32[i8 >> 2] | 0;
  HEAP32[i1 >> 2] = i19;
  if ((i19 | 0) != 0) {
   i8 = i19 + 8 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  }
  HEAP32[i1 + 4 >> 2] = HEAP32[i11 >> 2];
  i11 = HEAP32[i14 >> 2] | 0;
  i14 = i1 + 8 | 0;
  i1 = i14;
  i8 = HEAP32[i1 >> 2] & -8 | i11 & 7;
  HEAP32[i1 >> 2] = i8;
  HEAP8[i14] = i8 & 255 & -9 | i11 & 8;
 }
 i11 = HEAP32[i5 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i11 + 8 | 0;
 i11 = i5 | 0;
 i8 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 HEAP32[i11 >> 2] = i8;
 if ((i8 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore8Position25previousCharacterPositionENS_9EAffinityE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i2 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i10 = i1 + 8 | 0;
  i11 = i10;
  i12 = HEAP32[i11 >> 2] | 0;
  HEAP32[i11 >> 2] = i12 & -8;
  HEAP8[i10] = i12 & 255 & -16;
  STACKTOP = i4;
  return;
 }
 i12 = __ZNK7WebCore4Node19rootEditableElementEv(i9) | 0;
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i5, i2, i3);
 i3 = __ZN7WebCore13isStartOfLineERKNS_15VisiblePositionE(i5) | 0;
 i9 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i5 = i9 + 8 | 0;
   i10 = i5 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i9 = __ZNK7WebCore8Position11isCandidateEv(i2) | 0;
 i5 = i6 | 0;
 i11 = HEAP32[i8 >> 2] | 0;
 HEAP32[i5 >> 2] = i11;
 if ((i11 | 0) == 0) {
  i13 = 0;
 } else {
  i10 = i11 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  i13 = HEAP32[i5 >> 2] | 0;
 }
 i10 = i6 + 4 | 0;
 i11 = i2 + 4 | 0;
 HEAP32[i10 >> 2] = HEAP32[i11 >> 2];
 i14 = i2 + 8 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 i16 = i6 + 8 | 0;
 i17 = i16;
 i18 = HEAP32[i17 >> 2] & -8 | i15 & 7;
 HEAP32[i17 >> 2] = i18;
 HEAP8[i16] = i18 & 255 & -9 | i15 & 8;
 L13 : do {
  if ((i13 | 0) == 0) {
   i19 = 31;
  } else {
   i15 = i7 | 0;
   i18 = i7 + 4 | 0;
   i20 = i7 + 8 | 0;
   i21 = i3 | i9 ^ 1;
   i22 = i13;
   while (1) {
    if ((__ZNK7WebCore4Node27nonShadowBoundaryParentNodeEv(i22) | 0) == 0) {
     if ((HEAP32[i10 >> 2] | 0) < 1) {
      i19 = 31;
      break L13;
     }
    }
    __ZNK7WebCore8Position8previousENS_16PositionMoveTypeE(i7, i6, 0);
    i23 = HEAP32[i15 >> 2] | 0;
    HEAP32[i15 >> 2] = 0;
    i24 = HEAP32[i5 >> 2] | 0;
    HEAP32[i5 >> 2] = i23;
    do {
     if ((i24 | 0) != 0) {
      i23 = i24 + 8 | 0;
      i25 = i23 | 0;
      i26 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
      HEAP32[i25 >> 2] = i26;
      if ((i26 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
     }
    } while (0);
    HEAP32[i10 >> 2] = HEAP32[i18 >> 2];
    i24 = HEAP32[i20 >> 2] | 0;
    i23 = HEAP32[i17 >> 2] & -8 | i24 & 7;
    HEAP32[i17 >> 2] = i23;
    HEAP8[i16] = i23 & 255 & -9 | i24 & 8;
    i24 = HEAP32[i15 >> 2] | 0;
    do {
     if ((i24 | 0) != 0) {
      i23 = i24 + 8 | 0;
      i26 = i23 | 0;
      i25 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
      HEAP32[i26 >> 2] = i25;
      if ((i25 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
     }
    } while (0);
    if ((__ZNK7WebCore4Node19rootEditableElementEv(HEAP32[i5 >> 2] | 0) | 0) != (i12 | 0)) {
     i19 = 22;
     break;
    }
    if (i21) {
     if (__ZNK7WebCore8Position11isCandidateEv(i6) | 0) {
      i19 = 27;
      break;
     }
    } else {
     if (__ZNK7WebCore8Position26rendersInDifferentPositionERKS0_(i2, i6) | 0) {
      i19 = 30;
      break;
     }
    }
    i24 = HEAP32[i5 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i19 = 31;
     break L13;
    } else {
     i22 = i24;
    }
   }
   if ((i19 | 0) == 27) {
    i22 = HEAP32[i5 >> 2] | 0;
    HEAP32[i5 >> 2] = 0;
    HEAP32[i1 >> 2] = i22;
    HEAP32[i1 + 4 >> 2] = HEAP32[i10 >> 2];
    i22 = HEAP32[i17 >> 2] | 0;
    i21 = i1 + 8 | 0;
    i15 = i21;
    i20 = HEAP32[i15 >> 2] & -8 | i22 & 7;
    HEAP32[i15 >> 2] = i20;
    HEAP8[i21] = i20 & 255 & -9 | i22 & 8;
    break;
   } else if ((i19 | 0) == 30) {
    i22 = HEAP32[i5 >> 2] | 0;
    HEAP32[i5 >> 2] = 0;
    HEAP32[i1 >> 2] = i22;
    HEAP32[i1 + 4 >> 2] = HEAP32[i10 >> 2];
    i22 = HEAP32[i17 >> 2] | 0;
    i20 = i1 + 8 | 0;
    i21 = i20;
    i15 = HEAP32[i21 >> 2] & -8 | i22 & 7;
    HEAP32[i21 >> 2] = i15;
    HEAP8[i20] = i15 & 255 & -9 | i22 & 8;
    break;
   } else if ((i19 | 0) == 22) {
    i22 = HEAP32[i8 >> 2] | 0;
    HEAP32[i1 >> 2] = i22;
    if ((i22 | 0) != 0) {
     i15 = i22 + 8 | 0;
     HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
    }
    HEAP32[i1 + 4 >> 2] = HEAP32[i11 >> 2];
    i15 = HEAP32[i14 >> 2] | 0;
    i22 = i1 + 8 | 0;
    i20 = i22;
    i21 = HEAP32[i20 >> 2] & -8 | i15 & 7;
    HEAP32[i20 >> 2] = i21;
    HEAP8[i22] = i21 & 255 & -9 | i15 & 8;
    break;
   }
  }
 } while (0);
 if ((i19 | 0) == 31) {
  i19 = HEAP32[i8 >> 2] | 0;
  HEAP32[i1 >> 2] = i19;
  if ((i19 | 0) != 0) {
   i8 = i19 + 8 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  }
  HEAP32[i1 + 4 >> 2] = HEAP32[i11 >> 2];
  i11 = HEAP32[i14 >> 2] | 0;
  i14 = i1 + 8 | 0;
  i1 = i14;
  i8 = HEAP32[i1 >> 2] & -8 | i11 & 7;
  HEAP32[i1 >> 2] = i8;
  HEAP8[i14] = i8 & 255 & -9 | i11 & 8;
 }
 i11 = HEAP32[i5 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i11 + 8 | 0;
 i11 = i5 | 0;
 i8 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 HEAP32[i11 >> 2] = i8;
 if ((i8 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = i2 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i5 = i1 + 8 | 0;
  i6 = i5;
  i7 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = i7 & -8;
  HEAP8[i5] = i7 & 255 & -16;
  return;
 }
 i7 = i2 + 4 | 0;
 do {
  if ((HEAP32[i7 >> 2] | 0) < 1) {
   i5 = HEAP32[i2 + 8 >> 2] & 7;
   if ((i5 | 0) == 2 | (i5 | 0) == 4) {
    break;
   }
   do {
    if ((__ZNK7WebCore4Node27nonShadowBoundaryParentNodeEv(i4) | 0) != 0) {
     i5 = HEAP32[i3 >> 2] | 0;
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 132 >> 2] & 1](i5) | 0) {
      if (!(__ZN7WebCore14isTableElementEPNS_4NodeE(HEAP32[i3 >> 2] | 0) | 0)) {
       break;
      }
     }
     i5 = HEAP32[i3 >> 2] | 0;
     i6 = __ZNK7WebCore4Node27nonShadowBoundaryParentNodeEv(i5) | 0;
     if ((i6 | 0) != 0) {
      i8 = i6 + 8 | 0;
      HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
     }
     i8 = __ZNK7WebCore4Node9nodeIndexEv(i5) | 0;
     HEAP32[i1 >> 2] = i6;
     HEAP32[i1 + 4 >> 2] = i8;
     i8 = i1 + 8 | 0;
     i6 = i8;
     i5 = HEAP32[i6 >> 2] | 0;
     HEAP32[i6 >> 2] = i5 & -8;
     HEAP8[i8] = i5 & 255 & -16;
     return;
    }
   } while (0);
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) != 0) {
    i8 = i5 + 8 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   }
   HEAP32[i1 >> 2] = i5;
   HEAP32[i1 + 4 >> 2] = 0;
   i5 = i1 + 8 | 0;
   i8 = i5;
   i6 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i6 & -8;
   HEAP8[i5] = i6 & 255 & -16;
   return;
  }
 } while (0);
 L23 : do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 164 >> 2] & 1](i4) | 0) {
   i9 = 28;
  } else {
   i6 = i2 + 8 | 0;
   i5 = HEAP32[i6 >> 2] & 7;
   if (!((i5 | 0) == 2 | (i5 | 0) == 4)) {
    i5 = HEAP32[i7 >> 2] | 0;
    i8 = HEAP32[i3 >> 2] | 0;
    if ((HEAP32[i8 + 12 >> 2] & 2 | 0) == 0) {
     i10 = 0;
    } else {
     i10 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i8) | 0;
    }
    if ((i5 | 0) != (i10 | 0)) {
     i9 = 28;
     break;
    }
   }
   i5 = HEAP32[i3 >> 2] | 0;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 132 >> 2] & 1](i5) | 0) {
    if (!(__ZN7WebCore14isTableElementEPNS_4NodeE(HEAP32[i3 >> 2] | 0) | 0)) {
     i9 = 28;
     break;
    }
   }
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i11 = 0;
    break;
   }
   switch (HEAP32[i6 >> 2] & 7 | 0) {
   case 1:
   case 2:
    {
     if ((__ZNK7WebCore4Node27nonShadowBoundaryParentNodeEv(i5) | 0) == 0) {
      i9 = 28;
      break L23;
     }
     i12 = HEAP32[i3 >> 2] | 0;
     break;
    }
   case 3:
   case 4:
   case 0:
    {
     i12 = i5;
     break;
    }
   default:
    {
     i9 = 28;
     break L23;
    }
   }
   i5 = __ZNK7WebCore4Node27nonShadowBoundaryParentNodeEv(i12) | 0;
   if ((i5 | 0) != 0) {
    i6 = i5 + 8 | 0;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
   }
   i6 = (__ZNK7WebCore4Node9nodeIndexEv(i12) | 0) + 1 | 0;
   HEAP32[i1 >> 2] = i5;
   HEAP32[i1 + 4 >> 2] = i6;
   i6 = i1 + 8 | 0;
   i5 = i6;
   i8 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = i8 & -8;
   HEAP8[i6] = i8 & 255 & -16;
   return;
  }
 } while (0);
 L43 : do {
  if ((i9 | 0) == 28) {
   i12 = HEAP32[i3 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i11 = 0;
    break;
   }
   switch (HEAP32[i2 + 8 >> 2] & 7 | 0) {
   case 1:
   case 2:
    {
     i10 = __ZNK7WebCore4Node27nonShadowBoundaryParentNodeEv(i12) | 0;
     if ((i10 | 0) == 0) {
      i11 = 0;
      break L43;
     } else {
      i13 = i10 | 0;
     }
     break;
    }
   case 3:
   case 4:
   case 0:
    {
     i13 = i12;
     break;
    }
   default:
    {
     i11 = 0;
     break L43;
    }
   }
   i12 = i13 + 8 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   i11 = i13;
  }
 } while (0);
 i13 = __ZNK7WebCore8Position28computeOffsetInContainerNodeEv(i2) | 0;
 HEAP32[i1 >> 2] = i11;
 HEAP32[i1 + 4 >> 2] = i13;
 i13 = i1 + 8 | 0;
 i1 = i13;
 i11 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i11 & -8;
 HEAP8[i13] = i11 & 255 & -16;
 return;
}
function __ZNK7WebCore8Position4nextENS_16PositionMoveTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
  i6 = HEAP32[i2 + 8 >> 2] | 0;
  i7 = i1 + 8 | 0;
  i8 = i7;
  i9 = HEAP32[i8 >> 2] & -8 | i6 & 7;
  HEAP32[i8 >> 2] = i9;
  HEAP8[i7] = i9 & 255 & -9 | i6 & 8;
  return;
 }
 i6 = i2 + 8 | 0;
 do {
  if ((HEAP8[i6] & 8) == 0) {
   i9 = HEAP32[i6 >> 2] & 7;
   if (!((i9 | 0) == 2 | (i9 | 0) == 4)) {
    i10 = 5;
    break;
   }
   i11 = __ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(i5) | 0;
  } else {
   i10 = 5;
  }
 } while (0);
 if ((i10 | 0) == 5) {
  i11 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i9 = i5 + 12 | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i7 & 2 | 0) == 0) {
   i12 = i7;
  } else {
   i8 = __ZNK7WebCore13ContainerNode9childNodeEj(i5, i11) | 0;
   if ((i8 | 0) == 0) {
    i12 = HEAP32[i9 >> 2] | 0;
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 132 >> 2] & 1](i8) | 0)) {
    i13 = i8 + 8 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
    HEAP32[i1 >> 2] = i8;
    HEAP32[i1 + 4 >> 2] = 0;
    i13 = i1 + 8 | 0;
    i14 = i13;
    i15 = HEAP32[i14 >> 2] & -8 | 1;
    HEAP32[i14 >> 2] = i15;
    HEAP8[i13] = i15 & 255 & -15;
    return;
   }
   i15 = (HEAP32[i8 + 12 >> 2] & 1 | 0) == 0;
   i13 = i8 + 8 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   HEAP32[i1 >> 2] = i8;
   HEAP32[i1 + 4 >> 2] = 0;
   i8 = i1 + 8 | 0;
   i13 = i8;
   i14 = HEAP32[i13 >> 2] | 0;
   i16 = i14 & -8;
   if (i15) {
    i15 = i16 | 3;
    HEAP32[i13 >> 2] = i15;
    i17 = i15 & 255 & -13;
   } else {
    HEAP32[i13 >> 2] = i16;
    i17 = i14 & 255 & -16;
   }
   HEAP8[i8] = i17;
   return;
  }
 } while (0);
 if ((i12 & 2 | 0) == 0) {
  i10 = 12;
 } else {
  if ((HEAP32[i5 + 36 >> 2] | 0) == 0) {
   i10 = 12;
  }
 }
 do {
  if ((i10 | 0) == 12) {
   if ((i11 | 0) >= (__ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(i5) | 0)) {
    break;
   }
   i12 = i5 + 8 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   do {
    if ((i3 | 0) == 1) {
     i12 = (HEAP32[i9 >> 2] & 2048 | 0) == 0;
     i17 = i5 + 32 | 0;
     if (i12) {
      i18 = i17 | 0;
     } else {
      i18 = HEAP32[i17 >> 2] | 0;
     }
     if ((HEAP32[i18 >> 2] | 0) == 0) {
      i19 = i11 + 1 | 0;
      break;
     }
     if (i12) {
      i20 = i17 | 0;
     } else {
      i20 = HEAP32[i17 >> 2] | 0;
     }
     i17 = HEAP32[i20 >> 2] | 0;
     i19 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i17 >> 2] | 0) + 580 >> 2] & 1](i17, i11) | 0;
    } else {
     i19 = i11 + 1 | 0;
    }
   } while (0);
   HEAP32[i1 >> 2] = i5;
   HEAP32[i1 + 4 >> 2] = i19;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 132 >> 2] & 1](i5) | 0) {
    i21 = 0;
   } else {
    i21 = (i19 | 0) == 0 ? 1 : 2;
   }
   i17 = i1 + 8 | 0;
   i12 = i17;
   i7 = HEAP32[i12 >> 2] & -8 | i21;
   HEAP32[i12 >> 2] = i7;
   HEAP8[i17] = i7 & 255 | 8;
   return;
  }
 } while (0);
 i21 = __ZNK7WebCore4Node27nonShadowBoundaryParentNodeEv(i5) | 0;
 if ((i21 | 0) == 0) {
  i19 = HEAP32[i4 >> 2] | 0;
  HEAP32[i1 >> 2] = i19;
  if ((i19 | 0) != 0) {
   i4 = i19 + 8 | 0;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
  }
  HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
  i2 = HEAP32[i6 >> 2] | 0;
  i6 = i1 + 8 | 0;
  i4 = i6;
  i19 = HEAP32[i4 >> 2] & -8 | i2 & 7;
  HEAP32[i4 >> 2] = i19;
  HEAP8[i6] = i19 & 255 & -9 | i2 & 8;
  return;
 } else {
  i2 = i21 | 0;
  i19 = i21 + 8 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
  i19 = (__ZNK7WebCore4Node9nodeIndexEv(i5) | 0) + 1 | 0;
  HEAP32[i1 >> 2] = i2;
  HEAP32[i1 + 4 >> 2] = i19;
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 132 >> 2] & 1](i2) | 0) {
   i22 = 0;
  } else {
   i22 = (i19 | 0) == 0 ? 1 : 2;
  }
  i19 = i1 + 8 | 0;
  i1 = i19;
  i2 = HEAP32[i1 >> 2] & -8 | i22;
  HEAP32[i1 >> 2] = i2;
  HEAP8[i19] = i2 & 255 | 8;
  return;
 }
}
function __ZN7WebCore8Position44hasRenderedNonAnonymousDescendantsWithHeightERKNS_13RenderElementE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 32 | 0;
 i6 = __ZNK7WebCore12RenderObject27nextInPreOrderAfterChildrenEv(i1 | 0) | 0;
 i7 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i7 | 0) == 0 | (i7 | 0) == (i6 | 0)) {
  i8 = 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 i1 = i3 + 8 | 0;
 i9 = i3 + 12 | 0;
 i10 = i5 + 8 | 0;
 i11 = i5 + 12 | 0;
 i12 = i4 + 8 | 0;
 i13 = i4 + 12 | 0;
 i14 = i7;
 L4 : while (1) {
  i7 = i14 + 20 | 0;
  i15 = HEAP32[i7 >> 2] | 0;
  do {
   if ((i15 & 128 | 0) == 0) {
    i16 = HEAP32[i14 + 4 >> 2] | 0;
    if ((i16 | 0) == 0) {
     i17 = i15;
     i18 = 8;
     break;
    }
    if ((HEAP32[i16 + 12 >> 2] & 1048580 | 0) != 1048580) {
     i17 = i15;
     i18 = 8;
     break;
    }
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 232 >> 2] & 1](i16) | 0) != 0) {
     break;
    }
    i17 = HEAP32[i7 >> 2] | 0;
    i18 = 8;
   } else {
    i17 = i15;
    i18 = 8;
   }
  } while (0);
  do {
   if ((i18 | 0) == 8) {
    i18 = 0;
    if ((i17 & 128 | 0) != 0) {
     break;
    }
    if ((HEAP32[i14 + 4 >> 2] | 0) == 0) {
     break;
    }
    if ((i17 & 768 | 0) == 256) {
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 640 >> 2] & 1](i3, i14);
     if ((HEAP32[i7 >> 2] & 768 | 0) == 256) {
      i19 = HEAP32[(HEAP32[i14 + 8 >> 2] | 0) + 36 >> 2] | 0;
     } else {
      i19 = HEAP32[i14 + 36 >> 2] | 0;
     }
     i15 = (HEAP32[i19 + 44 >> 2] | 0) >>> 13 & 3;
     if ((i15 | 0) == 3 | (i15 | 0) == 0) {
      i20 = HEAP32[i9 >> 2] | 0;
     } else {
      i20 = HEAP32[i1 >> 2] | 0;
     }
     if ((i20 | 0) == 0) {
      break;
     } else {
      i8 = 1;
      i18 = 43;
      break L4;
     }
    }
    if ((i17 & 4096 | 0) != 0) {
     __ZNK7WebCore15RenderLineBreak16linesBoundingBoxEv(i4, i14);
     if ((HEAP32[i7 >> 2] & 768 | 0) == 256) {
      i21 = HEAP32[(HEAP32[i14 + 8 >> 2] | 0) + 36 >> 2] | 0;
     } else {
      i21 = HEAP32[i14 + 36 >> 2] | 0;
     }
     i15 = (HEAP32[i21 + 44 >> 2] | 0) >>> 13 & 3;
     if ((i15 | 0) == 3 | (i15 | 0) == 0) {
      i22 = HEAP32[i13 >> 2] | 0;
     } else {
      i22 = HEAP32[i12 >> 2] | 0;
     }
     if ((i22 | 0) == 0) {
      break;
     } else {
      i8 = 1;
      i18 = 39;
      break L4;
     }
    }
    if ((i17 & 512 | 0) != 0) {
     i15 = (HEAP32[(HEAP32[i14 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
     if ((i15 | 0) == 3 | (i15 | 0) == 0) {
      i23 = i14 + 56 | 0;
     } else {
      i23 = i14 + 52 | 0;
     }
     if ((HEAP32[i23 >> 2] | 0) == 0) {
      break;
     } else {
      i8 = 1;
      i18 = 41;
      break L4;
     }
    }
    if ((HEAP32[i14 + 24 >> 2] & 4 | 0) == 0) {
     break;
    }
    i15 = i14;
    if (!(__ZN7WebCoreL13isEmptyInlineERKNS_12RenderInlineE(i15) | 0)) {
     break;
    }
    __ZNK7WebCore12RenderInline16linesBoundingBoxEv(i5, i15);
    if ((HEAP32[i7 >> 2] & 768 | 0) == 256) {
     i24 = HEAP32[(HEAP32[i14 + 8 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i24 = HEAP32[i14 + 36 >> 2] | 0;
    }
    i15 = (HEAP32[i24 + 44 >> 2] | 0) >>> 13 & 3;
    if ((i15 | 0) == 3 | (i15 | 0) == 0) {
     i25 = HEAP32[i11 >> 2] | 0;
    } else {
     i25 = HEAP32[i10 >> 2] | 0;
    }
    if ((i25 | 0) != 0) {
     i8 = 1;
     i18 = 44;
     break L4;
    }
   }
  } while (0);
  i7 = __ZNK7WebCore12RenderObject14nextInPreOrderEv(i14) | 0;
  if ((i7 | 0) == 0 | (i7 | 0) == (i6 | 0)) {
   i8 = 0;
   i18 = 40;
   break;
  } else {
   i14 = i7;
  }
 }
 if ((i18 | 0) == 43) {
  STACKTOP = i2;
  return i8 | 0;
 } else if ((i18 | 0) == 44) {
  STACKTOP = i2;
  return i8 | 0;
 } else if ((i18 | 0) == 41) {
  STACKTOP = i2;
  return i8 | 0;
 } else if ((i18 | 0) == 39) {
  STACKTOP = i2;
  return i8 | 0;
 } else if ((i18 | 0) == 40) {
  STACKTOP = i2;
  return i8 | 0;
 }
 return 0;
}
function __ZN7WebCoreL35downstreamIgnoringEditingBoundariesENS_8PositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i2 + 8 | 0;
 i6 = i5;
 i7 = i2 | 0;
 i8 = i2 + 4 | 0;
 i9 = i4 | 0;
 i10 = i4 + 4 | 0;
 i11 = i4 + 8 | 0;
 i12 = 0;
 i13 = 0;
 i14 = 0;
 while (1) {
  i15 = HEAP32[i7 >> 2] | 0;
  if ((i15 | 0) == (i12 | 0)) {
   do {
    if ((HEAP8[i5] & 8) == 0) {
     i16 = HEAP32[i6 >> 2] & 7;
     if (!((i16 | 0) == 2 | (i16 | 0) == 4)) {
      i17 = 5;
      break;
     }
     i18 = __ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(i12) | 0;
    } else {
     i17 = 5;
    }
   } while (0);
   if ((i17 | 0) == 5) {
    i17 = 0;
    i18 = HEAP32[i8 >> 2] | 0;
   }
   do {
    if ((i14 & 8 | 0) == 0) {
     i16 = i14 & 7;
     if (!((i16 | 0) == 2 | (i16 | 0) == 4)) {
      i19 = i13;
      break;
     }
     i19 = __ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(i12) | 0;
    } else {
     i19 = i13;
    }
   } while (0);
   if ((i18 | 0) == (i19 | 0)) {
    i20 = HEAP32[i6 >> 2] | 0;
    if (((i20 ^ i14) & 7 | 0) == 0) {
     break;
    }
   }
   i21 = HEAP32[i7 >> 2] | 0;
  } else {
   i21 = i15;
  }
  if ((i21 | 0) != 0) {
   i16 = i21 + 8 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
  }
  do {
   if ((i12 | 0) != 0) {
    i16 = i12 + 8 | 0;
    i22 = i16 | 0;
    i23 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
    HEAP32[i22 >> 2] = i23;
    if ((i23 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
   }
  } while (0);
  i15 = HEAP32[i8 >> 2] | 0;
  i16 = HEAP32[i6 >> 2] | 0;
  i23 = ((i16 & 7 | i14 & 240) & 255 & -9 | i16 & 8) & 255 | i14 & -256;
  __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i4, i2, 0);
  i16 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = 0;
  i22 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i16;
  do {
   if ((i22 | 0) != 0) {
    i16 = i22 + 8 | 0;
    i24 = i16 | 0;
    i25 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
    HEAP32[i24 >> 2] = i25;
    if ((i25 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
   }
  } while (0);
  HEAP32[i8 >> 2] = HEAP32[i10 >> 2];
  i22 = HEAP32[i11 >> 2] | 0;
  i16 = HEAP32[i6 >> 2] & -8 | i22 & 7;
  HEAP32[i6 >> 2] = i16;
  HEAP8[i5] = i16 & 255 & -9 | i22 & 8;
  i22 = HEAP32[i9 >> 2] | 0;
  if ((i22 | 0) == 0) {
   i12 = i21;
   i13 = i15;
   i14 = i23;
   continue;
  }
  i16 = i22 + 8 | 0;
  i22 = i16 | 0;
  i25 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
  HEAP32[i22 >> 2] = i25;
  if ((i25 | 0) >= 1) {
   i12 = i21;
   i13 = i15;
   i14 = i23;
   continue;
  }
  if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
   i12 = i21;
   i13 = i15;
   i14 = i23;
   continue;
  }
  __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
  i12 = i21;
  i13 = i15;
  i14 = i23;
 }
 i14 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 >> 2] = i14;
 HEAP32[i1 + 4 >> 2] = HEAP32[i8 >> 2];
 i8 = i1 + 8 | 0;
 i1 = i8;
 i14 = HEAP32[i1 >> 2] & -8 | i20 & 7;
 HEAP32[i1 >> 2] = i14;
 HEAP8[i8] = i14 & 255 & -9 | i20 & 8;
 if ((i12 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i20 = i12 + 8 | 0;
 i12 = i20 | 0;
 i14 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
 HEAP32[i12 >> 2] = i14;
 if ((i14 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore8Position17atEditingBoundaryEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i3, i1, 0);
 i5 = i1 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 L1 : do {
  if ((i6 | 0) == 0) {
   i7 = 5;
  } else {
   switch (HEAP32[i1 + 8 >> 2] & 7 | 0) {
   case 4:
   case 2:
    {
     if ((__ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(i6) | 0) == 0) {
      i7 = 5;
      break L1;
     } else {
      i7 = 7;
      break L1;
     }
     break;
    }
   case 0:
    {
     if ((HEAP32[i1 + 4 >> 2] | 0) < 1) {
      i7 = 5;
      break L1;
     } else {
      i7 = 7;
      break L1;
     }
     break;
    }
   case 3:
   case 1:
    {
     i7 = 5;
     break L1;
     break;
    }
   default:
    {
     i7 = 7;
     break L1;
    }
   }
  }
 } while (0);
 do {
  if ((i7 | 0) == 5) {
   i6 = HEAP32[i3 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i7 = 7;
    break;
   }
   if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i6, 0, 1) | 0) {
    i7 = 7;
   } else {
    i8 = 1;
   }
  }
 } while (0);
 do {
  if ((i7 | 0) == 7) {
   __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i4, i1, 0);
   i6 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i6 | 0) == 0) {
     i7 = 10;
    } else {
     i9 = HEAP32[i1 + 8 >> 2] & 7;
     if ((i9 | 0) == 2 | (i9 | 0) == 4) {
      i7 = 10;
      break;
     }
     i9 = HEAP32[i1 + 4 >> 2] | 0;
     if ((i9 | 0) < (__ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(i6) | 0)) {
      i7 = 12;
     } else {
      i7 = 10;
     }
    }
   } while (0);
   do {
    if ((i7 | 0) == 10) {
     i6 = HEAP32[i4 >> 2] | 0;
     if ((i6 | 0) == 0) {
      i7 = 12;
      break;
     }
     if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i6, 0, 1) | 0) {
      i7 = 12;
     } else {
      i10 = 1;
     }
    }
   } while (0);
   do {
    if ((i7 | 0) == 12) {
     i6 = HEAP32[i3 >> 2] | 0;
     if ((i6 | 0) == 0) {
      i10 = 0;
      break;
     }
     if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i6, 0, 1) | 0) {
      i10 = 0;
      break;
     }
     i6 = HEAP32[i4 >> 2] | 0;
     if ((i6 | 0) == 0) {
      i10 = 0;
      break;
     }
     i10 = (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i6, 0, 1) | 0) ^ 1;
    }
   } while (0);
   i6 = HEAP32[i4 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i8 = i10;
    break;
   }
   i9 = i6 + 8 | 0;
   i6 = i9 | 0;
   i11 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    i8 = i10;
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    i8 = i10;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
   i8 = i10;
  }
 } while (0);
 i10 = HEAP32[i3 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i2;
  return i8 | 0;
 }
 i3 = i10 + 8 | 0;
 i10 = i3 | 0;
 i4 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 HEAP32[i10 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  STACKTOP = i2;
  return i8 | 0;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return i8 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 STACKTOP = i2;
 return i8 | 0;
}
function __ZNK7WebCore8Position26trailingWhitespacePositionENS_9EAffinityEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i3 | 0;
 i6 = i3 + 16 | 0;
 i7 = i2 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i8 = i1 + 8 | 0;
  i9 = i8;
  i10 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = i10 & -8;
  HEAP8[i8] = i10 & 255 & -16;
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i5, i2, 1);
 i10 = __ZNK7WebCore15VisiblePosition14characterAfterEv(i5) | 0;
 i8 = i10 & 65535;
 L5 : do {
  if (__ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i5, 1) | 0) {
   i11 = 20;
  } else {
   __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i6, i5, 1);
   i9 = HEAP32[i6 >> 2] | 0;
   i12 = (i9 | 0) == 0;
   if ((i9 | 0) == 0) {
    i11 = 20;
    break;
   }
   i13 = i9 + 8 | 0;
   i9 = i13 - 8 | 0;
   i14 = i13 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i15;
   do {
    if ((i15 | 0) < 1) {
     if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
      i11 = 8;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i9);
    } else {
     i11 = 8;
    }
   } while (0);
   if ((i11 | 0) == 8) {
    if (i12) {
     i11 = 20;
     break;
    }
   }
   L14 : do {
    if (i4) {
     do {
      if ((i8 & 65535) >>> 0 < 128 >>> 0) {
       if ((i8 & 65535) >>> 0 >= 33 >>> 0) {
        i16 = 0;
        break;
       }
       if (i8 << 16 >> 16 == 32) {
        break L14;
       }
       i16 = (i8 - 9 & 65535) >>> 0 < 5 >>> 0;
      } else {
       i16 = (_u_charDirection(i10 & 65535) | 0) == 9;
      }
     } while (0);
     if (!(i16 | (i10 & 65535 | 0) == 160)) {
      i11 = 20;
      break L5;
     }
    } else {
     i9 = i10 & 65535;
     if (!((i9 | 0) == 32 | (i9 | 0) == 10)) {
      i11 = 20;
      break L5;
     }
    }
   } while (0);
   i12 = HEAP32[i7 >> 2] | 0;
   HEAP32[i1 >> 2] = i12;
   if ((i12 | 0) != 0) {
    i9 = i12 + 8 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   }
   HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
   i9 = HEAP32[i2 + 8 >> 2] | 0;
   i12 = i1 + 8 | 0;
   i13 = i12;
   i15 = HEAP32[i13 >> 2] & -8 | i9 & 7;
   HEAP32[i13 >> 2] = i15;
   HEAP8[i12] = i15 & 255 & -9 | i9 & 8;
  }
 } while (0);
 if ((i11 | 0) == 20) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i11 = i1 + 8 | 0;
  i1 = i11;
  i2 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = i2 & -8;
  HEAP8[i11] = i2 & 255 & -16;
 }
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i2 + 8 | 0;
 i2 = i5 | 0;
 i11 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i11;
 if ((i11 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore8Position24rootUserSelectAllForNodeEPNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = (HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0;
 i4 = i1 + 32 | 0;
 if (i3) {
  i5 = i4 | 0;
 } else {
  i5 = HEAP32[i4 >> 2] | 0;
 }
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if (i3) {
  i6 = i4 | 0;
 } else {
  i6 = HEAP32[i4 >> 2] | 0;
 }
 i4 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i4 + 20 >> 2] & 768 | 0) == 256) {
  i7 = HEAP32[(HEAP32[i4 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i7 = HEAP32[i4 + 36 >> 2] | 0;
 }
 if ((HEAP32[(HEAP32[i7 + 24 >> 2] | 0) + 88 >> 2] & 98304 | 0) != 65536) {
  i2 = 0;
  return i2 | 0;
 }
 i7 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i2 = i1;
  return i2 | 0;
 } else {
  i8 = i7;
  i9 = i1;
 }
 L24 : while (1) {
  i1 = i8;
  while (1) {
   i10 = i1 | 0;
   i11 = (HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0;
   i12 = i1 + 32 | 0;
   if (i11) {
    i13 = i12 | 0;
   } else {
    i13 = HEAP32[i12 >> 2] | 0;
   }
   if ((HEAP32[i13 >> 2] | 0) != 0) {
    break;
   }
   i7 = HEAP32[i1 + 16 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i2 = i9;
    i14 = 38;
    break L24;
   } else {
    i1 = i7;
   }
  }
  if (i11) {
   i15 = i12 | 0;
  } else {
   i15 = HEAP32[i12 >> 2] | 0;
  }
  if ((HEAP32[i15 >> 2] | 0) == 0) {
   i2 = i9;
   i14 = 39;
   break;
  }
  if (i11) {
   i16 = i12 | 0;
  } else {
   i16 = HEAP32[i12 >> 2] | 0;
  }
  i7 = HEAP32[i16 >> 2] | 0;
  if ((HEAP32[i7 + 20 >> 2] & 768 | 0) == 256) {
   i17 = HEAP32[(HEAP32[i7 + 8 >> 2] | 0) + 36 >> 2] | 0;
  } else {
   i17 = HEAP32[i7 + 36 >> 2] | 0;
  }
  if ((HEAP32[(HEAP32[i17 + 24 >> 2] | 0) + 88 >> 2] & 98304 | 0) != 65536) {
   i2 = i9;
   i14 = 33;
   break;
  }
  i7 = HEAP32[i1 + 16 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i2 = i10;
   i14 = 34;
   break;
  } else {
   i8 = i7;
   i9 = i10;
  }
 }
 if ((i14 | 0) == 34) {
  return i2 | 0;
 } else if ((i14 | 0) == 33) {
  return i2 | 0;
 } else if ((i14 | 0) == 38) {
  return i2 | 0;
 } else if ((i14 | 0) == 39) {
  return i2 | 0;
 }
 return 0;
}
function __ZNK7WebCore8Position28computeOffsetInContainerNodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 8 >> 2] & 7;
 if ((i4 | 0) == 4) {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 164 >> 2] & 1](i2) | 0) {
   i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 168 >> 2] & 1](i2) | 0;
   return i3 | 0;
  }
  if ((HEAP32[i2 + 12 >> 2] & 2 | 0) == 0) {
   i3 = 0;
   return i3 | 0;
  }
  i3 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i2) | 0;
  return i3 | 0;
 } else if ((i4 | 0) == 2) {
  i3 = (__ZNK7WebCore4Node9nodeIndexEv(i2) | 0) + 1 | 0;
  return i3 | 0;
 } else if ((i4 | 0) == 1) {
  i3 = __ZNK7WebCore4Node9nodeIndexEv(i2) | 0;
  return i3 | 0;
 } else if ((i4 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 164 >> 2] & 1](i2) | 0) {
   i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 168 >> 2] & 1](i2) | 0;
   i3 = (i1 | 0) < (i4 | 0) ? i1 : i4;
   return i3 | 0;
  }
  if ((HEAP32[i2 + 12 >> 2] & 2 | 0) == 0) {
   i3 = 0;
   return i3 | 0;
  }
  i1 = HEAP32[i2 + 36 >> 2] | 0;
  if ((i4 | 0) > 0 & (i1 | 0) != 0) {
   i5 = 0;
   i6 = i1;
  } else {
   i3 = 0;
   return i3 | 0;
  }
  while (1) {
   i1 = i5 + 1 | 0;
   i2 = HEAP32[i6 + 28 >> 2] | 0;
   if ((i1 | 0) < (i4 | 0) & (i2 | 0) != 0) {
    i5 = i1;
    i6 = i2;
   } else {
    i3 = i1;
    break;
   }
  }
  return i3 | 0;
 } else {
  i3 = 0;
  return i3 | 0;
 }
 return 0;
}
function __ZNK7WebCore8Position13debugPositionEPKc(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[_stderr >> 2] | 0;
 if ((i7 | 0) == 0) {
  _fprintf(i8 | 0, H_BASE + 40 | 0, (i9 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i9 >> 2] = i2, i9) | 0) | 0;
  STACKTOP = i9;
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 64 >> 2] & 1](i5, i7);
 __ZNK3WTF6String4utf8ENS_14ConversionModeE(i4, i5, 0);
 i7 = i4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i10 = 0;
 } else {
  i10 = i4 + 8 | 0;
 }
 i4 = HEAP32[i6 >> 2] | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 _fprintf(i8 | 0, H_BASE + 8 | 0, (i9 = STACKTOP, STACKTOP = STACKTOP + 32 | 0, HEAP32[i9 >> 2] = i2, HEAP32[i9 + 8 >> 2] = i10, HEAP32[i9 + 16 >> 2] = i4, HEAP32[i9 + 24 >> 2] = i6, i9) | 0) | 0;
 STACKTOP = i9;
 i9 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i7 = i9 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i9);
    break;
   } else {
    HEAP32[i7 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i5 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i9 | 0;
 i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i9);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCoreL38endsOfNodeAreVisuallyDistinctPositionsEPNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = i1 + 12 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = (i4 & 2048 | 0) == 0;
 i6 = i1 + 32 | 0;
 if (i5) {
  i7 = i6 | 0;
 } else {
  i7 = HEAP32[i6 >> 2] | 0;
 }
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if (i5) {
  i8 = i6 | 0;
 } else {
  i8 = HEAP32[i6 >> 2] | 0;
 }
 if ((HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] & 1024 | 0) == 0) {
  i2 = 1;
  return i2 | 0;
 }
 do {
  if ((i4 & 16 | 0) != 0) {
   if ((HEAP32[(HEAP32[i1 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i2 = 0;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 if (i5) {
  i9 = i6 | 0;
 } else {
  i9 = HEAP32[i6 >> 2] | 0;
 }
 if ((HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] & 2048 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((i4 & 1 | 0) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 132 >> 2] & 1](i1) | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 & 2048 | 0) == 0) {
  i10 = i6 | 0;
 } else {
  i10 = HEAP32[i6 >> 2] | 0;
 }
 if ((HEAP32[(HEAP32[i10 >> 2] | 0) + 56 >> 2] | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((i4 & 2 | 0) == 0) {
  i2 = 1;
  return i2 | 0;
 }
 i2 = (HEAP32[i1 + 36 >> 2] | 0) == 0;
 return i2 | 0;
}
function __ZNK7WebCore8Position21parentEditingBoundaryEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0;
 i5 = i4 | 0;
 if ((i4 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((i1 | 0) == (i5 | 0)) {
  i3 = i1;
  return i3 | 0;
 } else {
  i6 = i1;
 }
 while (1) {
  if ((__ZNK7WebCore4Node27nonShadowBoundaryParentNodeEv(i6) | 0) == 0) {
   i3 = i6;
   i7 = 12;
   break;
  }
  i1 = __ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(HEAP32[i2 >> 2] | 0, 0, 1) | 0;
  if (i1 ^ (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(HEAP32[i6 + 16 >> 2] | 0, 0, 1) | 0)) {
   i3 = i6;
   i7 = 10;
   break;
  }
  i1 = __ZNK7WebCore4Node27nonShadowBoundaryParentNodeEv(i6) | 0;
  if ((i1 | 0) == (i5 | 0)) {
   i3 = i5;
   i7 = 11;
   break;
  } else {
   i6 = i1;
  }
 }
 if ((i7 | 0) == 11) {
  return i3 | 0;
 } else if ((i7 | 0) == 12) {
  return i3 | 0;
 } else if ((i7 | 0) == 10) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCoreL13isEmptyInlineERKNS_12RenderInlineE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 } else {
  i4 = i2;
 }
 L3 : while (1) {
  i2 = HEAP32[i4 + 20 >> 2] | 0;
  do {
   if (!((i2 & 64 | 0) != 0 | (i2 & 25165824 | 0) == 16777216)) {
    if ((i2 & 768 | 0) == 256) {
     if (__ZNK7WebCore10RenderText26isAllCollapsibleWhitespaceEv(i4) | 0) {
      break;
     } else {
      i3 = 0;
      i5 = 9;
      break L3;
     }
    }
    if ((HEAP32[i4 + 24 >> 2] & 4 | 0) == 0) {
     i3 = 0;
     i5 = 10;
     break L3;
    }
    if (!(__ZN7WebCoreL13isEmptyInlineERKNS_12RenderInlineE(i4) | 0)) {
     i3 = 0;
     i5 = 11;
     break L3;
    }
   }
  } while (0);
  i2 = HEAP32[i4 + 16 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i3 = 1;
   i5 = 13;
   break;
  } else {
   i4 = i2;
  }
 }
 if ((i5 | 0) == 10) {
  return i3 | 0;
 } else if ((i5 | 0) == 13) {
  return i3 | 0;
 } else if ((i5 | 0) == 11) {
  return i3 | 0;
 } else if ((i5 | 0) == 9) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore8Position14moveToPositionEN3WTF10PassRefPtrINS_4NodeEEEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 do {
  if ((i5 | 0) != 0) {
   i2 = i5 + 8 | 0;
   i6 = i2 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 4 >> 2] = i3;
 i5 = i1 + 8 | 0;
 if ((HEAP8[i5] & 8) == 0) {
  return;
 }
 i1 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i8 = 0;
  } else {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 132 >> 2] & 1](i1) | 0) {
    i8 = 0;
    break;
   }
   i8 = (i3 | 0) == 0 ? 1 : 2;
  }
 } while (0);
 i3 = i5;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -8 | i8;
 return;
}
function __ZNK7WebCore8Position21getInlineBoxAndOffsetENS_9EAffinityERPNS_9InlineBoxERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = HEAP32[i1 >> 2] | 0;
 i6 = i5 + 32 | 0;
 if ((HEAP32[i5 + 12 >> 2] & 2048 | 0) == 0) {
  i7 = i6 | 0;
 } else {
  i7 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i7 >> 2] | 0;
 L5 : do {
  if ((i6 | 0) == 0) {
   i8 = 1;
  } else {
   i7 = i6;
   while (1) {
    if ((HEAP32[i7 + 20 >> 2] & 768 | 0) != 256) {
     if ((HEAP32[i7 + 24 >> 2] & 32 | 0) != 0) {
      break;
     }
    }
    i5 = HEAP32[i7 + 8 >> 2] | 0;
    if ((i5 | 0) == 0) {
     i8 = 1;
     break L5;
    } else {
     i7 = i5 | 0;
    }
   }
   i8 = (HEAP32[(HEAP32[i7 + 36 >> 2] | 0) + 40 >> 2] | 0) >>> 30 & 1;
  }
 } while (0);
 __ZNK7WebCore8Position21getInlineBoxAndOffsetENS_9EAffinityENS_13TextDirectionERPNS_9InlineBoxERi(i1, i2, i8, i3, i4);
 return;
}
function __ZN7WebCore8PositionC2EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i1 >> 2] = i2;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i5;
 do {
  if ((i2 | 0) == 0) {
   i6 = 0;
  } else {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 132 >> 2] & 1](i2) | 0) {
    i6 = 0;
    break;
   }
   i6 = (i5 | 0) == 0 ? 1 : 2;
  }
 } while (0);
 i5 = i1 + 8 | 0;
 i1 = i5;
 i2 = HEAP32[i1 >> 2] & -8 | i6;
 HEAP32[i1 >> 2] = i2;
 HEAP8[i5] = i2 & 255 | 8;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i1 >> 2] = i2;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i5;
 do {
  if ((i2 | 0) == 0) {
   i6 = 0;
  } else {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 132 >> 2] & 1](i2) | 0) {
    i6 = 0;
    break;
   }
   i6 = (i5 | 0) == 0 ? 1 : 2;
  }
 } while (0);
 i5 = i1 + 8 | 0;
 i1 = i5;
 i2 = HEAP32[i1 >> 2] & -8 | i6;
 HEAP32[i1 >> 2] = i2;
 HEAP8[i5] = i2 & 255 | 8;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore8Position25computeNodeBeforePositionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = 0;
  } else {
   i4 = HEAP32[i1 + 8 >> 2] & 7;
   if ((i4 | 0) == 0) {
    if ((HEAP32[i2 + 12 >> 2] & 2 | 0) == 0) {
     i3 = 0;
     break;
    }
    i3 = __ZNK7WebCore13ContainerNode9childNodeEj(i2, (HEAP32[i1 + 4 >> 2] | 0) - 1 | 0) | 0;
    break;
   } else if ((i4 | 0) == 2) {
    i3 = i2;
    break;
   } else if ((i4 | 0) == 4) {
    if ((HEAP32[i2 + 12 >> 2] & 2 | 0) == 0) {
     i3 = 0;
     break;
    }
    i3 = HEAP32[i2 + 40 >> 2] | 0;
    break;
   } else if ((i4 | 0) == 1) {
    i3 = HEAP32[i2 + 24 >> 2] | 0;
    break;
   } else {
    i3 = 0;
    break;
   }
  }
 } while (0);
 return i3 | 0;
}
function __ZNK7WebCore8Position24computeNodeAfterPositionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = 0;
  } else {
   i4 = HEAP32[i1 + 8 >> 2] & 7;
   if ((i4 | 0) == 0) {
    if ((HEAP32[i2 + 12 >> 2] & 2 | 0) == 0) {
     i3 = 0;
     break;
    }
    i3 = __ZNK7WebCore13ContainerNode9childNodeEj(i2, HEAP32[i1 + 4 >> 2] | 0) | 0;
    break;
   } else if ((i4 | 0) == 3) {
    if ((HEAP32[i2 + 12 >> 2] & 2 | 0) == 0) {
     i3 = 0;
     break;
    }
    i3 = HEAP32[i2 + 36 >> 2] | 0;
    break;
   } else if ((i4 | 0) == 1) {
    i3 = i2;
    break;
   } else if ((i4 | 0) == 2) {
    i3 = HEAP32[i2 + 28 >> 2] | 0;
    break;
   } else {
    i3 = 0;
    break;
   }
  }
 } while (0);
 return i3 | 0;
}
function __ZNK7WebCore8Position16primaryDirectionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i1 = i2 + 32 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
  i3 = i1 | 0;
 } else {
  i3 = HEAP32[i1 >> 2] | 0;
 }
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i4 = 1;
  return i4 | 0;
 } else {
  i5 = i1;
 }
 while (1) {
  if ((HEAP32[i5 + 20 >> 2] & 768 | 0) != 256) {
   if ((HEAP32[i5 + 24 >> 2] & 32 | 0) != 0) {
    break;
   }
  }
  i1 = HEAP32[i5 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i4 = 1;
   i6 = 10;
   break;
  } else {
   i5 = i1 | 0;
  }
 }
 if ((i6 | 0) == 10) {
  return i4 | 0;
 }
 i4 = (HEAP32[(HEAP32[i5 + 36 >> 2] | 0) + 40 >> 2] | 0) >>> 30 & 1;
 return i4 | 0;
}
function __ZN7WebCore8Position19nodeIsUserSelectAllEPKNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = (HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0;
 i4 = i1 + 32 | 0;
 if (i3) {
  i5 = i4 | 0;
 } else {
  i5 = HEAP32[i4 >> 2] | 0;
 }
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if (i3) {
  i6 = i4 | 0;
 } else {
  i6 = HEAP32[i4 >> 2] | 0;
 }
 i4 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i4 + 20 >> 2] & 768 | 0) == 256) {
  i7 = HEAP32[(HEAP32[i4 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i7 = HEAP32[i4 + 36 >> 2] | 0;
 }
 i2 = (HEAP32[(HEAP32[i7 + 24 >> 2] | 0) + 88 >> 2] & 98304 | 0) == 65536;
 return i2 | 0;
}
function __ZN7WebCore8Position20nodeIsUserSelectNoneEPNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = (HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0;
 i4 = i1 + 32 | 0;
 if (i3) {
  i5 = i4 | 0;
 } else {
  i5 = HEAP32[i4 >> 2] | 0;
 }
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if (i3) {
  i6 = i4 | 0;
 } else {
  i6 = HEAP32[i4 >> 2] | 0;
 }
 i4 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i4 + 20 >> 2] & 768 | 0) == 256) {
  i7 = HEAP32[(HEAP32[i4 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i7 = HEAP32[i4 + 36 >> 2] | 0;
 }
 i2 = (HEAP32[(HEAP32[i7 + 24 >> 2] | 0) + 88 >> 2] & 98304 | 0) == 0;
 return i2 | 0;
}
function __ZNK7WebCore8Position29atFirstEditingPositionForNodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 L1 : do {
  if ((i2 | 0) == 0) {
   i3 = 1;
  } else {
   switch (HEAP32[i1 + 8 >> 2] & 7 | 0) {
   case 0:
    {
     i3 = (HEAP32[i1 + 4 >> 2] | 0) < 1;
     break L1;
     break;
    }
   case 3:
   case 1:
    {
     i3 = 1;
     break L1;
     break;
    }
   case 4:
   case 2:
    {
     i3 = (__ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(i2) | 0) == 0;
     break L1;
     break;
    }
   default:
    {
     i3 = 0;
     break L1;
    }
   }
  }
 } while (0);
 return i3 | 0;
}
function __ZNK7WebCore8Position19isRenderedCharacterEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i2 + 12 >> 2] | 0;
 if ((i4 & 1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i5 = i2 + 32 | 0;
 if ((i4 & 2048 | 0) == 0) {
  i6 = i5 | 0;
 } else {
  i6 = HEAP32[i5 >> 2] | 0;
 }
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore10RenderText31containsRenderedCharacterOffsetEj(i5, HEAP32[i1 + 4 >> 2] | 0) | 0;
 return i3 | 0;
}
function __ZN7WebCore8Position42uncheckedPreviousOffsetForBackwardDeletionEPKNS_4NodeEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = (HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0;
 i4 = i1 + 32 | 0;
 if (i3) {
  i5 = i4 | 0;
 } else {
  i5 = HEAP32[i4 >> 2] | 0;
 }
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  i6 = i2 - 1 | 0;
  return i6 | 0;
 }
 if (i3) {
  i7 = i4 | 0;
 } else {
  i7 = HEAP32[i4 >> 2] | 0;
 }
 i4 = HEAP32[i7 >> 2] | 0;
 i6 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i4 >> 2] | 0) + 576 >> 2] & 1](i4, i2) | 0;
 return i6 | 0;
}
function __ZN7WebCore8Position23uncheckedPreviousOffsetEPKNS_4NodeEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = (HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0;
 i4 = i1 + 32 | 0;
 if (i3) {
  i5 = i4 | 0;
 } else {
  i5 = HEAP32[i4 >> 2] | 0;
 }
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  i6 = i2 - 1 | 0;
  return i6 | 0;
 }
 if (i3) {
  i7 = i4 | 0;
 } else {
  i7 = HEAP32[i4 >> 2] | 0;
 }
 i4 = HEAP32[i7 >> 2] | 0;
 i6 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i4 >> 2] | 0) + 572 >> 2] & 1](i4, i2) | 0;
 return i6 | 0;
}
function __ZN7WebCore8Position19uncheckedNextOffsetEPKNS_4NodeEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = (HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0;
 i4 = i1 + 32 | 0;
 if (i3) {
  i5 = i4 | 0;
 } else {
  i5 = HEAP32[i4 >> 2] | 0;
 }
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  i6 = i2 + 1 | 0;
  return i6 | 0;
 }
 if (i3) {
  i7 = i4 | 0;
 } else {
  i7 = HEAP32[i4 >> 2] | 0;
 }
 i4 = HEAP32[i7 >> 2] | 0;
 i6 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i4 >> 2] | 0) + 580 >> 2] & 1](i4, i2) | 0;
 return i6 | 0;
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
function __ZNK7WebCore8Position13containerNodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 L1 : do {
  if ((i2 | 0) == 0) {
   i3 = 0;
  } else {
   switch (HEAP32[i1 + 8 >> 2] & 7 | 0) {
   case 3:
   case 4:
   case 0:
    {
     i3 = i2;
     break L1;
     break;
    }
   case 1:
   case 2:
    {
     i3 = __ZNK7WebCore4Node27nonShadowBoundaryParentNodeEv(i2) | 0;
     break L1;
     break;
    }
   default:
    {
     i3 = 0;
     break L1;
    }
   }
  }
 } while (0);
 return i3 | 0;
}
function __ZN7WebCore8Position12moveToOffsetEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 + 4 >> 2] = i2;
 i3 = i1 + 8 | 0;
 if ((HEAP8[i3] & 8) == 0) {
  return;
 }
 i4 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = 0;
  } else {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 132 >> 2] & 1](i4) | 0) {
    i5 = 0;
    break;
   }
   i5 = (i2 | 0) == 0 ? 1 : 2;
  }
 } while (0);
 i2 = i3;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -8 | i5;
 return;
}
function __ZNK7WebCore8Position7elementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 L1 : do {
  if ((i2 | 0) == 0) {
   i3 = 0;
  } else {
   i1 = i2;
   while (1) {
    if ((HEAP32[i1 + 12 >> 2] & 4 | 0) != 0) {
     i3 = i1;
     break L1;
    }
    i4 = HEAP32[i1 + 16 >> 2] | 0;
    i5 = i4 | 0;
    if ((i4 | 0) == 0) {
     i3 = i5;
     break;
    } else {
     i1 = i5;
    }
   }
  }
 } while (0);
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
function __ZNK7WebCore8Position11atEndOfTreeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 1;
  return i4 | 0;
 }
 if ((__ZNK7WebCore4Node27nonShadowBoundaryParentNodeEv(i3) | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = (i3 | 0) >= (__ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(HEAP32[i2 >> 2] | 0) | 0);
 return i4 | 0;
}
function __ZNK7WebCore8Position28atLastEditingPositionForNodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 8 >> 2] & 7;
 if ((i4 | 0) == 2 | (i4 | 0) == 4) {
  i3 = 1;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i3 = (i4 | 0) >= (__ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(i2) | 0);
 return i3 | 0;
}
function __ZN7WebCore8PositionC2EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = i3;
 i3 = i1 + 8 | 0;
 i1 = i3;
 i2 = HEAP32[i1 >> 2] & -8 | i4 & 7;
 HEAP32[i1 >> 2] = i2;
 HEAP8[i3] = i2 & 255 & -9;
 return;
}
function __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = i3;
 i3 = i1 + 8 | 0;
 i1 = i3;
 i2 = HEAP32[i1 >> 2] & -8 | i4 & 7;
 HEAP32[i1 >> 2] = i2;
 HEAP8[i3] = i2 & 255 & -9;
 return;
}
function __ZN7WebCore8PositionC2EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = 0;
 i2 = i1 + 8 | 0;
 i1 = i2;
 i4 = HEAP32[i1 >> 2] & -8 | i3 & 7;
 HEAP32[i1 >> 2] = i4;
 HEAP8[i2] = i4 & 255 & -9;
 return;
}
function __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = 0;
 i2 = i1 + 8 | 0;
 i1 = i2;
 i4 = HEAP32[i1 >> 2] & -8 | i3 & 7;
 HEAP32[i1 >> 2] = i4;
 HEAP8[i2] = i4 & 255 & -9;
 return;
}
function __ZN7WebCore8PositionC2EN3WTF10PassRefPtrINS_4TextEEEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = i3;
 i3 = i1 + 8 | 0;
 i1 = i3;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i2 & -8;
 HEAP8[i3] = i2 & 255 & -16;
 return;
}
function __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4TextEEEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = i3;
 i3 = i1 + 8 | 0;
 i1 = i3;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i2 & -8;
 HEAP8[i3] = i2 & 255 & -16;
 return;
}
function __ZNK7WebCore8Position13containerTextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 do {
  if ((HEAP32[i1 + 8 >> 2] & 7 | 0) == 0) {
   i2 = HEAP32[i1 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i3 = 0;
    break;
   }
   if ((HEAP32[i2 + 12 >> 2] & 1 | 0) == 0) {
    i3 = 0;
    break;
   }
   i3 = i2;
  } else {
   i3 = 0;
  }
 } while (0);
 return i3 | 0;
}
function __ZN7WebCore8Position34anchorTypeForLegacyEditingPositionEPNS_4NodeEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 132 >> 2] & 1](i1) | 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (i2 | 0) == 0 ? 1 : 2;
 return i3 | 0;
}
function __ZNK7WebCore8Position13atStartOfTreeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((__ZNK7WebCore4Node27nonShadowBoundaryParentNodeEv(i2) | 0) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i1 + 4 >> 2] | 0) < 1;
 return i3 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(HEAP32[i1 >> 2] | 0) | 0;
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
function __ZN7WebCore8Position10findParentEPKNS_4NodeE(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node27nonShadowBoundaryParentNodeEv(i1) | 0;
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
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function b6(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(6);
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
  var FUNCTION_TABLE_vii = [b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZN7WebCore8PositionC2EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE,b3,__ZN7WebCore8PositionC2EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE,b3,__ZN7WebCore8PositionC2EN3WTF10PassRefPtrINS_4TextEEEj,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  var FUNCTION_TABLE_viiii = [b6,b6,__ZN7WebCore8PositionC2EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "_pwrite": _pwrite, "___setErrNo": ___setErrNo, "_fwrite": _fwrite, "__reallyNegative": __reallyNegative, "__formatString": __formatString, "_send": _send, "_write": _write, "_llvm_lifetime_start": _llvm_lifetime_start, "_fprintf": _fprintf, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames5brTagE": __ZN7WebCore9HTMLNames5brTagE, "__ZN7WebCore9HTMLNames8tableTagE": __ZN7WebCore9HTMLNames8tableTagE, "__ZN7WebCore9HTMLNames7htmlTagE": __ZN7WebCore9HTMLNames7htmlTagE, "__ZN7WebCore9HTMLNames7bodyTagE": __ZN7WebCore9HTMLNames7bodyTagE, "_stderr": _stderr }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore8Position25computeNodeBeforePositionEv","__ZN7WebCore8Position24rootUserSelectAllForNodeEPNS_4NodeE","__ZNK7WebCore8Position24computeNodeAfterPositionEv","__ZNK7WebCore8Position26trailingWhitespacePositionENS_9EAffinityEb","__ZNK7WebCore8Position28computeOffsetInContainerNodeEv","__ZN7WebCore8Position19nodeIsUserSelectAllEPKNS_4NodeE","__ZNK7WebCore8Position13containerTextEv","__ZN7WebCore8Position44hasRenderedNonAnonymousDescendantsWithHeightERKNS_13RenderElementE","__ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE","__ZNK7WebCore8Position25previousCharacterPositionENS_9EAffinityE","__ZN7WebCoreL13isEmptyInlineERKNS_12RenderInlineE","__ZN7WebCore8PositionC2EN3WTF10PassRefPtrINS_4TextEEEj","__ZNK7WebCore8Position4nextENS_16PositionMoveTypeE","_memset","__ZNK7WebCore8Position25leadingWhitespacePositionENS_9EAffinityEb","__ZNK7WebCore8Position11isCandidateEv","__ZNK7WebCore8Position19isRenderedCharacterEv","__ZNK7WebCore8Position16primaryDirectionEv","__ZNK7WebCore8Position21parentEditingBoundaryEv","__ZNK7WebCore8Position21getInlineBoxAndOffsetENS_9EAffinityENS_13TextDirectionERPNS_9InlineBoxERi","__ZNK7WebCore8Position13debugPositionEPKc","__ZN7WebCore8Position14moveToPositionEN3WTF10PassRefPtrINS_4NodeEEEi","__ZNK7WebCore8Position21nextCharacterPositionENS_9EAffinityE","__ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE","__ZN7WebCore8Position19uncheckedNextOffsetEPKNS_4NodeEi","__ZN7WebCore8Position12moveToOffsetEi","__ZN7WebCore8PositionC2EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE","__ZN7WebCore8PositionC2EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE","__ZN7WebCore8Position20nodeIsUserSelectNoneEPNS_4NodeE","__ZNK7WebCore8Position26rendersInDifferentPositionERKS0_","__ZNK7WebCore8Position17atEditingBoundaryEv","__ZN7WebCore8Position10findParentEPKNS_4NodeE","__ZN7WebCore8Position34anchorTypeForLegacyEditingPositionEPNS_4NodeEi","__ZNK7WebCore8Position11atEndOfTreeEv","__ZN7WebCore8Position42uncheckedPreviousOffsetForBackwardDeletionEPKNS_4NodeEi","_strlen","__ZNK7WebCore8Position21getInlineBoxAndOffsetENS_9EAffinityERPNS_9InlineBoxERi","__ZNK7WebCore8Position8previousENS_16PositionMoveTypeE","__ZNK7WebCore8Position13atStartOfTreeEv","__ZN7WebCore8Position23uncheckedPreviousOffsetEPKNS_4NodeEi","__ZNK7WebCore8Position24parentAnchoredEquivalentEv","__ZNK7WebCore8Position13containerNodeEv","_memcpy","__ZN7WebCore8PositionC2EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE","__ZNK7WebCore8Position28atLastEditingPositionForNodeEv","__ZNK7WebCore8Position28offsetForPositionAfterAnchorEv","__ZN7WebCoreL35downstreamIgnoringEditingBoundariesENS_8PositionE","__ZN7WebCoreL38endsOfNodeAreVisuallyDistinctPositionsEPNS_4NodeE","__ZNK7WebCore8Position7elementEv","__ZNK7WebCore8Position29atFirstEditingPositionForNodeEv"]

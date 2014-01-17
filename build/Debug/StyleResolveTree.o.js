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
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_vii(index,a1,a2) {
  try {
    Module["dynCall_vii"](index,a1,a2);
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
  var __ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE=env.__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE|0;
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
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiii=env.invoke_iiii;
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
function __ZN7WebCore5StyleL11resolveTreeERNS_7ElementENS0_6ChangeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 40 | 0;
 i9 = i3 + 48 | 0;
 i10 = i3 + 56 | 0;
 i11 = i1 | 0;
 i12 = i1 + 12 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i13 & 1048576 | 0) == 0) {
   i14 = i13;
  } else {
   if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 520 >> 2] & 1](i1, i2) | 0) {
    i14 = HEAP32[i12 >> 2] | 0;
    break;
   } else {
    STACKTOP = i3;
    return;
   }
  }
 } while (0);
 do {
  if ((i14 & 4194304 | 0) == 0) {
   do {
    if ((i14 & 4096 | 0) == 0) {
     i15 = 8;
    } else {
     if ((HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i11 | 0)) {
      i15 = 8;
      break;
     }
     i16 = HEAP32[i11 + 92 >> 2] | 0;
    }
   } while (0);
   if ((i15 | 0) == 8) {
    i16 = HEAP32[i1 + 16 >> 2] | 0;
   }
   if ((i16 | 0) != 0) {
    if ((HEAP32[i16 + 12 >> 2] & 4194304 | 0) != 0) {
     i15 = 11;
     break;
    }
   }
   i17 = HEAP32[i1 + 16 >> 2] | 0;
  } else {
   i15 = 11;
  }
 } while (0);
 if ((i15 | 0) == 11) {
  i17 = __ZN7WebCore22NodeRenderingTraversal10parentSlowEPKNS_4NodeE(i11) | 0;
 }
 if ((i17 | 0) == 0) {
  i18 = 0;
 } else {
  i16 = i17 + 32 | 0;
  if ((HEAP32[i17 + 12 >> 2] & 2048 | 0) == 0) {
   i19 = i16 | 0;
  } else {
   i19 = HEAP32[i16 >> 2] | 0;
  }
  i16 = HEAP32[i19 >> 2] | 0;
  do {
   if ((i16 | 0) == 0) {
    i20 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 236 >> 2] & 1](i17 | 0) | 0;
   } else {
    if ((HEAP32[i16 + 20 >> 2] & 768 | 0) == 256) {
     i20 = HEAP32[(HEAP32[i16 + 8 >> 2] | 0) + 36 >> 2] | 0;
     break;
    } else {
     i20 = HEAP32[i16 + 36 >> 2] | 0;
     break;
    }
   }
  } while (0);
  i18 = (i20 | 0) != 0;
 }
 i20 = HEAP32[i12 >> 2] | 0;
 i16 = (i20 & 134217728 | 0) != 0;
 if ((i20 & 2048 | 0) == 0) {
  i21 = 0;
 } else {
  i21 = __ZNK7WebCore7Element48rareDataChildrenAffectedByForwardPositionalRulesEv(i1) | 0;
 }
 if ((i2 | 0) > 0) {
  i15 = 27;
 } else {
  if ((HEAP32[i12 >> 2] & 114688 | 0) != 0) {
   i15 = 27;
  }
 }
 if ((i15 | 0) == 27) {
  __ZN7WebCore7Element18resetComputedStyleEv(i1);
 }
 do {
  if (i18) {
   i20 = HEAP32[i12 >> 2] | 0;
   if ((i2 | 0) <= 1) {
    if ((i20 & 114688 | 0) == 0) {
     i22 = i2;
     i15 = 109;
     break;
    }
   }
   i17 = i1 + 32 | 0;
   if ((i20 & 2048 | 0) == 0) {
    i23 = i17 | 0;
   } else {
    i23 = HEAP32[i17 >> 2] | 0;
   }
   i20 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i20 | 0) == 0) {
     i24 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 236 >> 2] & 1](i11) | 0;
    } else {
     if ((HEAP32[i20 + 20 >> 2] & 768 | 0) == 256) {
      i24 = HEAP32[(HEAP32[i20 + 8 >> 2] | 0) + 36 >> 2] | 0;
      break;
     } else {
      i24 = HEAP32[i20 + 36 >> 2] | 0;
      break;
     }
    }
   } while (0);
   i20 = (i24 | 0) == 0;
   do {
    if (i20) {
     i25 = 3;
     i26 = 0;
     i27 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
    } else {
     i19 = i24 | 0;
     HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
     i19 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
     if ((HEAP32[i12 >> 2] & 114688 | 0) == 65536) {
      i25 = 3;
      i26 = 0;
      i27 = i19;
      break;
     }
     __ZN7WebCore7Element16styleForRendererEv(i8, i1);
     i14 = HEAP32[i8 >> 2] | 0;
     i25 = __ZN7WebCore5Style15determineChangeEPKNS_11RenderStyleES3_PNS_8SettingsE(i24, i14, __ZNK7WebCore8Document8settingsEv(i19) | 0) | 0;
     i26 = i14;
     i27 = i19;
    }
   } while (0);
   i19 = HEAP32[i12 >> 2] | 0;
   if ((i19 & 2048 | 0) == 0) {
    i28 = i17 | 0;
   } else {
    i28 = HEAP32[i17 >> 2] | 0;
   }
   i14 = HEAP32[i28 >> 2] | 0;
   i13 = i14;
   i29 = (i14 | 0) == 0;
   L68 : do {
    if ((i25 | 0) == 3) {
     if (i29) {
      if ((i19 & 262144 | 0) != 0) {
       i15 = 49;
      }
     } else {
      i15 = 49;
     }
     if ((i15 | 0) == 49) {
      __ZN7WebCore5StyleL16detachRenderTreeERNS_7ElementENS0_10DetachTypeE(i1, 1);
     }
     i30 = i9 | 0;
     HEAP32[i30 >> 2] = i26;
     __ZN7WebCore5StyleL16attachRenderTreeERNS_7ElementEN3WTF10PassRefPtrINS_11RenderStyleEEE(i1, i9);
     i31 = HEAP32[i30 >> 2] | 0;
     do {
      if ((i31 | 0) != 0) {
       i30 = i31 | 0;
       i32 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
       if ((i32 | 0) == 0) {
        __ZN7WebCore11RenderStyleD2Ev(i31);
        __ZN3WTF8fastFreeEPv(i31);
        break;
       } else {
        HEAP32[i30 >> 2] = i32;
        break;
       }
      }
     } while (0);
     __ZN7WebCore5StyleL65reattachTextRenderersForWhitespaceOnlySiblingsAfterAttachIfNeededERNS_4NodeE(i11);
     i33 = 3;
     i34 = 0;
    } else {
     L82 : do {
      if (!i29) {
       L84 : do {
        if ((i25 | 0) == 0) {
         i31 = i14 + 36 | 0;
         i32 = HEAP32[(HEAP32[i31 >> 2] | 0) + 32 >> 2] | 0;
         L86 : do {
          if ((i32 | 0) != 0) {
           i30 = i32 + 8 | 0;
           i35 = HEAP32[i30 >> 2] | 0;
           i36 = i32;
           i37 = i6 | 0;
           i38 = i6 + 4 | 0;
           i39 = i6 + 8 | 0;
           i40 = i5 | 0;
           i41 = i26 + 52 | 0;
           i42 = i7 | 0;
           i43 = i14 + 20 | 0;
           i44 = i4 | 0;
           i45 = 0;
           while (1) {
            if (i45 >>> 0 >= i35 >>> 0) {
             break L86;
            }
            if ((HEAP32[i30 >> 2] | 0) >>> 0 <= i45 >>> 0) {
             i15 = 61;
             break;
            }
            i46 = (HEAP32[(HEAP32[(HEAP32[i36 >> 2] | 0) + (i45 << 2) >> 2] | 0) + 52 >> 2] | 0) >>> 6 & 63;
            if ((i46 | 0) == 6 | (i46 | 0) == 1) {
             __ZNK7WebCore13RenderElement22uncachedFirstLineStyleEPNS_11RenderStyleE(i4, i13, i26);
             i47 = HEAP32[i44 >> 2] | 0;
             HEAP32[i44 >> 2] = 0;
             i48 = i47;
            } else {
             HEAP32[i37 >> 2] = i46;
             HEAP32[i38 >> 2] = 0;
             HEAP32[i39 >> 2] = 0;
             __ZNK7WebCore12RenderObject22getUncachedPseudoStyleERKNS_18PseudoStyleRequestEPNS_11RenderStyleES5_(i5, i14, i6, i26, i26);
             i47 = HEAP32[i40 >> 2] | 0;
             HEAP32[i40 >> 2] = 0;
             i48 = i47;
            }
            if ((i48 | 0) == 0) {
             break L84;
            }
            if ((HEAP32[i30 >> 2] | 0) >>> 0 <= i45 >>> 0) {
             i15 = 67;
             break;
            }
            do {
             if (__ZNK7WebCore11RenderStyleeqERKS0_(i48, HEAP32[(HEAP32[i36 >> 2] | 0) + (i45 << 2) >> 2] | 0) | 0) {
              i49 = 0;
              i50 = i48 | 0;
             } else {
              if (i46 >>> 0 < 8 >>> 0) {
               HEAP32[i41 >> 2] = HEAP32[i41 >> 2] | 4096 << i46 - 1 & 520192;
              }
              HEAP32[i42 >> 2] = i48;
              i47 = i48 | 0;
              HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
              __ZN7WebCore11RenderStyle20addCachedPseudoStyleEN3WTF10PassRefPtrIS0_EE(i26, i7) | 0;
              i51 = HEAP32[i42 >> 2] | 0;
              do {
               if ((i51 | 0) != 0) {
                i52 = i51 | 0;
                i53 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
                if ((i53 | 0) == 0) {
                 __ZN7WebCore11RenderStyleD2Ev(i51);
                 __ZN3WTF8fastFreeEPv(i51);
                 break;
                } else {
                 HEAP32[i52 >> 2] = i53;
                 break;
                }
               }
              } while (0);
              if (!((i46 | 0) == 6 | (i46 | 0) == 1)) {
               i49 = 1;
               i50 = i47;
               break;
              }
              i51 = HEAP32[i43 >> 2] | 0;
              do {
               if ((i51 & 1 | 0) == 0) {
                HEAP32[i43 >> 2] = i51 | 1;
                __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i14, 1, 0);
                if ((HEAP32[i43 >> 2] & 32768 | 0) == 0) {
                 break;
                }
                __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i14);
               }
              } while (0);
              __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i14, 1, 1);
              i49 = 1;
              i50 = i47;
             }
            } while (0);
            i46 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
            if ((i46 | 0) == 0) {
             __ZN7WebCore11RenderStyleD2Ev(i48);
             __ZN3WTF8fastFreeEPv(i48);
            } else {
             HEAP32[i50 >> 2] = i46;
            }
            if ((i49 | 0) == 1) {
             break L84;
            } else {
             i45 = i45 + 1 | 0;
            }
           }
           if ((i15 | 0) == 67) {
            __ZN3WTF15CrashOnOverflow10overflowedEv();
           } else if ((i15 | 0) == 61) {
            __ZN3WTF15CrashOnOverflow10overflowedEv();
           }
          }
         } while (0);
         if ((i2 | 0) == 4) {
          if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 268 >> 2] & 1](i14) | 0) {
           break;
          }
         }
         i32 = HEAP32[i12 >> 2] & 114688;
         if ((i32 | 0) == 49152) {
          break;
         } else if ((i32 | 0) == 0) {
          break L82;
         }
         i32 = i26 | 0;
         HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
         i32 = HEAP32[i31 >> 2] | 0;
         i45 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
         if ((i45 | 0) == 0) {
          __ZN7WebCore11RenderStyleD2Ev(i32);
          __ZN3WTF8fastFreeEPv(i32);
         } else {
          HEAP32[i32 >> 2] = i45;
         }
         HEAP32[i31 >> 2] = i26;
         break L82;
        }
       } while (0);
       HEAP32[i10 >> 2] = i26;
       i45 = i26 | 0;
       HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 1;
       __ZN7WebCore13RenderElement18setAnimatableStyleEN3WTF7PassRefINS_11RenderStyleEEE(i13, i10);
      }
     } while (0);
     do {
      if ((HEAP8[i27 + 918 | 0] & 1) != 0) {
       if ((HEAP32[i27 + 692 >> 2] | 0) != (i1 | 0) | (i25 | 0) == 0 | i20 | (i26 | 0) == 0) {
        break;
       }
       i45 = __ZNK7WebCore11RenderStyle8fontSizeEv(i24) | 0;
       if ((i45 | 0) == (__ZNK7WebCore11RenderStyle8fontSizeEv(i26) | 0)) {
        break;
       }
       i45 = HEAP32[i27 + 320 >> 2] | 0;
       if ((i45 | 0) == 0) {
        i33 = 4;
        i34 = i26;
        break L68;
       }
       __ZN7WebCore13StyleResolver32invalidateMatchedPropertiesCacheEv(i45);
       i33 = 4;
       i34 = i26;
       break L68;
      }
     } while (0);
     if ((i2 | 0) == 4) {
      i33 = 4;
      i34 = i26;
      break;
     }
     i33 = (HEAP32[i12 >> 2] & 98304) >>> 0 > 32767 >>> 0 ? 4 : i25;
     i34 = i26;
    }
   } while (0);
   do {
    if (!i20) {
     i13 = i24 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     if ((i14 | 0) == 0) {
      __ZN7WebCore11RenderStyleD2Ev(i24);
      __ZN3WTF8fastFreeEPv(i24);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   if ((i34 | 0) == 0) {
    i54 = i33;
    i15 = 108;
    break;
   }
   i20 = i34 | 0;
   i14 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i34);
    __ZN3WTF8fastFreeEPv(i34);
    i54 = i33;
    i15 = 108;
    break;
   } else {
    HEAP32[i20 >> 2] = i14;
    i54 = i33;
    i15 = 108;
    break;
   }
  } else {
   i54 = i2;
   i15 = 108;
  }
 } while (0);
 if ((i15 | 0) == 108) {
  if ((i54 | 0) == 3) {
   i55 = 3;
  } else {
   i22 = i54;
   i15 = 109;
  }
 }
 do {
  if ((i15 | 0) == 109) {
   i54 = __ZNK7WebCore7Element10shadowRootEv(i1) | 0;
   do {
    if ((i54 | 0) == 0) {
     i56 = 0;
    } else {
     if ((i22 | 0) <= 1) {
      if ((HEAP32[i54 + 12 >> 2] & 114816 | 0) == 0) {
       i56 = 0;
       break;
      }
     }
     i2 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
     i33 = i2 + 320 | 0;
     i34 = HEAP32[i33 >> 2] | 0;
     if ((i34 | 0) == 0) {
      __ZN7WebCore8Document19createStyleResolverEv(i2);
      i57 = HEAP32[i33 >> 2] | 0;
     } else {
      i57 = i34;
     }
     __ZN7WebCore13StyleResolver17pushParentElementEPNS_7ElementE(i57, i1);
     i34 = HEAP32[(HEAP32[i54 + 20 >> 2] | 0) + 8 >> 2] | 0;
     i33 = i34 + 320 | 0;
     i2 = HEAP32[i33 >> 2] | 0;
     if ((i2 | 0) == 0) {
      __ZN7WebCore8Document19createStyleResolverEv(i34);
      i58 = HEAP32[i33 >> 2] | 0;
     } else {
      i58 = i2;
     }
     __ZN7WebCore13StyleResolver20pushParentShadowRootEPKNS_10ShadowRootE(i58, i54);
     i2 = HEAP32[i54 + 36 >> 2] | 0;
     if ((i2 | 0) != 0) {
      i33 = i2;
      while (1) {
       if ((HEAP32[i33 + 12 >> 2] & 1 | 0) == 0) {
        __ZN7WebCore5StyleL11resolveTreeERNS_7ElementENS0_6ChangeE(i33, i22);
       } else {
        __ZN7WebCore5StyleL15updateTextStyleERNS_4TextE(i33);
       }
       i33 = HEAP32[i33 + 28 >> 2] | 0;
       if ((i33 | 0) == 0) {
        break;
       }
      }
     }
     __ZN7WebCore13StyleResolver19popParentShadowRootEPKNS_10ShadowRootE(i58, i54);
     i33 = i54 + 12 | 0;
     HEAP32[i33 >> 2] = HEAP32[i33 >> 2] & -114817;
     i56 = i57;
    }
   } while (0);
   i54 = __ZNK7WebCore7Element19beforePseudoElementEv(i1) | 0;
   do {
    if ((i54 | 0) == 0) {
     __ZN7WebCore5StyleL40attachBeforeOrAfterPseudoElementIfNeededERNS_7ElementENS_8PseudoIdE(i1, 3);
    } else {
     if (__ZN7WebCore5StyleL18needsPseudeElementERNS_7ElementENS_8PseudoIdE(i1, 3) | 0) {
      __ZN7WebCore5StyleL11resolveTreeERNS_7ElementENS0_6ChangeE(i54 | 0, (HEAP32[i12 >> 2] & 114688 | 0) != 0 ? 4 : i22);
      break;
     } else {
      __ZN7WebCore7Element24clearBeforePseudoElementEv(i1);
      break;
     }
    }
   } while (0);
   i54 = HEAP32[i1 + 36 >> 2] | 0;
   L183 : do {
    if ((i54 | 0) == 0) {
     i59 = i56;
    } else {
     i33 = i1 + 20 | 0;
     if ((i22 | 0) > 1) {
      i2 = i56;
      i34 = 0;
      i24 = 0;
      i26 = i54;
      while (1) {
       i25 = HEAP32[i26 + 12 >> 2] | 0;
       do {
        if ((i25 & 1 | 0) == 0) {
         if ((i25 & 4 | 0) == 0) {
          i60 = i24;
          i61 = i34;
          i62 = i2;
          break;
         }
         i27 = i26;
         i10 = (i25 & 114688 | 0) == 32768;
         if (i24 | i34) {
          __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i26, 32768);
         }
         if ((i2 | 0) == 0) {
          i49 = HEAP32[(HEAP32[i33 >> 2] | 0) + 8 >> 2] | 0;
          i50 = i49 + 320 | 0;
          i48 = HEAP32[i50 >> 2] | 0;
          if ((i48 | 0) == 0) {
           __ZN7WebCore8Document19createStyleResolverEv(i49);
           i63 = HEAP32[i50 >> 2] | 0;
          } else {
           i63 = i48;
          }
          __ZN7WebCore13StyleResolver17pushParentElementEPNS_7ElementE(i63, i1);
          i64 = i63;
         } else {
          i64 = i2;
         }
         __ZN7WebCore5StyleL11resolveTreeERNS_7ElementENS0_6ChangeE(i27, i22);
         i60 = i10 & i16;
         i61 = i34 | i10 & i21;
         i62 = i64;
        } else {
         __ZN7WebCore5StyleL15updateTextStyleERNS_4TextE(i26);
         i60 = i24;
         i61 = i34;
         i62 = i2;
        }
       } while (0);
       i25 = HEAP32[i26 + 28 >> 2] | 0;
       if ((i25 | 0) == 0) {
        i59 = i62;
        break L183;
       } else {
        i2 = i62;
        i34 = i61;
        i24 = i60;
        i26 = i25;
       }
      }
     } else {
      i65 = i56;
      i66 = 0;
      i67 = 0;
      i68 = i54;
     }
     while (1) {
      i26 = i68 + 12 | 0;
      i24 = HEAP32[i26 >> 2] | 0;
      do {
       if ((i24 & 1 | 0) == 0) {
        if ((i24 & 4 | 0) == 0) {
         i69 = i67;
         i70 = i66;
         i71 = i65;
         break;
        }
        i34 = i68;
        i2 = (i24 & 114688 | 0) == 32768;
        if (i67 | i66) {
         __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i68, 32768);
        }
        if ((HEAP32[i26 >> 2] & 114816 | 0) == 0) {
         i72 = i65;
        } else {
         if ((i65 | 0) == 0) {
          i25 = HEAP32[(HEAP32[i33 >> 2] | 0) + 8 >> 2] | 0;
          i10 = i25 + 320 | 0;
          i27 = HEAP32[i10 >> 2] | 0;
          if ((i27 | 0) == 0) {
           __ZN7WebCore8Document19createStyleResolverEv(i25);
           i73 = HEAP32[i10 >> 2] | 0;
          } else {
           i73 = i27;
          }
          __ZN7WebCore13StyleResolver17pushParentElementEPNS_7ElementE(i73, i1);
          i74 = i73;
         } else {
          i74 = i65;
         }
         __ZN7WebCore5StyleL11resolveTreeERNS_7ElementENS0_6ChangeE(i34, i22);
         i72 = i74;
        }
        i69 = i2 & i16;
        i70 = i66 | i2 & i21;
        i71 = i72;
       } else {
        __ZN7WebCore5StyleL15updateTextStyleERNS_4TextE(i68);
        i69 = i67;
        i70 = i66;
        i71 = i65;
       }
      } while (0);
      i26 = HEAP32[i68 + 28 >> 2] | 0;
      if ((i26 | 0) == 0) {
       i59 = i71;
       break;
      } else {
       i65 = i71;
       i66 = i70;
       i67 = i69;
       i68 = i26;
      }
     }
    }
   } while (0);
   i54 = __ZNK7WebCore7Element18afterPseudoElementEv(i1) | 0;
   do {
    if ((i54 | 0) == 0) {
     __ZN7WebCore5StyleL40attachBeforeOrAfterPseudoElementIfNeededERNS_7ElementENS_8PseudoIdE(i1, 4);
    } else {
     if (__ZN7WebCore5StyleL18needsPseudeElementERNS_7ElementENS_8PseudoIdE(i1, 4) | 0) {
      __ZN7WebCore5StyleL11resolveTreeERNS_7ElementENS0_6ChangeE(i54 | 0, (HEAP32[i12 >> 2] & 114688 | 0) != 0 ? 4 : i22);
      break;
     } else {
      __ZN7WebCore7Element23clearAfterPseudoElementEv(i1);
      break;
     }
    }
   } while (0);
   if ((i59 | 0) == 0) {
    i55 = i22;
    break;
   }
   i54 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
   i33 = i54 + 320 | 0;
   i26 = HEAP32[i33 >> 2] | 0;
   if ((i26 | 0) == 0) {
    __ZN7WebCore8Document19createStyleResolverEv(i54);
    i75 = HEAP32[i33 >> 2] | 0;
   } else {
    i75 = i26;
   }
   if ((i59 | 0) != (i75 | 0)) {
    i55 = i22;
    break;
   }
   __ZN7WebCore13StyleResolver16popParentElementEPNS_7ElementE(i59, i1);
   i55 = i22;
  }
 } while (0);
 i22 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = i22 & -114817;
 if ((i22 & 1048576 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 524 >> 2] & 1](i1, i55);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore5StyleL16attachRenderTreeERNS_7ElementEN3WTF10PassRefPtrINS_11RenderStyleEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i1 | 0;
 i12 = i1 + 20 | 0;
 i13 = HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] | 0;
 __ZN7WebCore13ContainerNode26suspendPostAttachCallbacksERNS_8DocumentE(i13);
 HEAP32[__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE >> 2] = (HEAP32[__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE >> 2] | 0) + 1;
 i14 = i1 + 12 | 0;
 if ((HEAP32[i14 >> 2] & 1048576 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 528 >> 2] & 1](i1);
 }
 i15 = i2 | 0;
 i2 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 i15 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i15 & 4194304 | 0) == 0) {
   do {
    if ((i15 & 4096 | 0) == 0) {
     i16 = 7;
    } else {
     if ((HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] | 0) != (i11 | 0)) {
      i16 = 7;
      break;
     }
     i17 = HEAP32[i11 + 92 >> 2] | 0;
    }
   } while (0);
   if ((i16 | 0) == 7) {
    i17 = HEAP32[i1 + 16 >> 2] | 0;
   }
   if ((i17 | 0) != 0) {
    if ((HEAP32[i17 + 12 >> 2] & 4194304 | 0) != 0) {
     i16 = 10;
     break;
    }
   }
   i18 = HEAP32[i1 + 16 >> 2] | 0;
  } else {
   i16 = 10;
  }
 } while (0);
 if ((i16 | 0) == 10) {
  i18 = __ZN7WebCore22NodeRenderingTraversal10parentSlowEPKNS_4NodeE(i11) | 0;
 }
 __ZN7WebCore7Element17setIsInsideRegionEb(i1, 0);
 i17 = (i18 | 0) == 0;
 do {
  if (i17 | (__ZN7WebCore8Document21shouldCreateRenderersEv(HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] | 0) | 0) ^ 1) {
   i16 = 22;
  } else {
   i15 = i18 + 32 | 0;
   if ((HEAP32[i18 + 12 >> 2] & 2048 | 0) == 0) {
    i19 = i15 | 0;
   } else {
    i19 = HEAP32[i15 >> 2] | 0;
   }
   i15 = HEAP32[i19 >> 2] | 0;
   if ((i15 | 0) == 0) {
    i16 = 22;
    break;
   }
   i20 = i15;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 48 >> 2] & 1](i15) | 0)) {
    if ((HEAP32[i14 >> 2] & 1048580 | 0) != 1048580) {
     i16 = 22;
     break;
    }
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 232 >> 2] & 1](i11) | 0) == 0) {
     i16 = 22;
     break;
    }
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 52 >> 2] & 1](i15) | 0)) {
     i16 = 22;
     break;
    }
   }
   if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i18 >> 2] | 0) + 244 >> 2] & 1](i18, i11) | 0) {
    i21 = i2;
    i16 = 40;
   } else {
    i16 = 22;
   }
  }
 } while (0);
 do {
  if ((i16 | 0) == 22) {
   do {
    if (i17) {
     i16 = 31;
    } else {
     i19 = i18 + 32 | 0;
     if ((HEAP32[i18 + 12 >> 2] & 2048 | 0) == 0) {
      i22 = i19 | 0;
     } else {
      i22 = HEAP32[i19 >> 2] | 0;
     }
     i19 = HEAP32[i22 >> 2] | 0;
     if ((i19 | 0) == 0) {
      i16 = 31;
      break;
     }
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 48 >> 2] & 1](i19) | 0) {
      i23 = 0;
      i24 = 0;
      break;
     }
     if ((HEAP32[i19 + 24 >> 2] & 32 | 0) == 0) {
      i23 = 0;
      i24 = 0;
      break;
     }
     i15 = HEAP32[i19 + 100 >> 2] | 0;
     if ((i15 | 0) == 0) {
      i23 = 0;
      i24 = 0;
      break;
     }
     i23 = 0;
     i24 = (HEAP32[i15 + 28 >> 2] | 0) != 0;
    }
   } while (0);
   do {
    if ((i16 | 0) == 31) {
     i15 = HEAP32[i1 + 16 >> 2] | 0;
     if ((i15 | 0) == 0) {
      i23 = 0;
      i24 = 0;
      break;
     }
     if ((HEAP32[i15 + 12 >> 2] & 4 | 0) == 0) {
      i23 = 0;
      i24 = 0;
      break;
     }
     i23 = __ZNK7WebCore7Element14isInsideRegionEv(i15) | 0;
     i24 = 0;
    }
   } while (0);
   if (!(i24 | i23)) {
    i25 = i2;
    i16 = 97;
    break;
   }
   if ((i2 | 0) == 0) {
    __ZN7WebCore7Element16styleForRendererEv(i4, i1);
    i26 = HEAP32[i4 >> 2] | 0;
   } else {
    i26 = i2;
   }
   i15 = i1;
   if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i15 >> 2] | 0) + 324 >> 2] & 1](i1, i26) | 0) {
    __ZN7WebCore7Element17setIsInsideRegionEb(i1, 1);
   }
   if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i15 >> 2] | 0) + 508 >> 2] & 1](i1, i26) | 0) {
    i21 = i26;
    i16 = 40;
   } else {
    i25 = i26;
    i16 = 97;
   }
  }
 } while (0);
 do {
  if ((i16 | 0) == 40) {
   if ((i21 | 0) == 0) {
    __ZN7WebCore7Element16styleForRendererEv(i5, i1);
    i27 = HEAP32[i5 >> 2] | 0;
   } else {
    i27 = i21;
   }
   i26 = i1;
   if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i26 >> 2] | 0) + 508 >> 2] & 1](i1, i27) | 0) {
    i2 = __ZN7WebCore10RenderView20flowThreadControllerEv(HEAP32[(HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0;
    i4 = __ZN7WebCore20FlowThreadController30ensureRenderFlowThreadWithNameERKN3WTF12AtomicStringE(i2, (HEAP32[i27 + 20 >> 2] | 0) + 284 | 0) | 0;
    __ZN7WebCore20FlowThreadController31registerNamedFlowContentElementERNS_7ElementERNS_21RenderNamedFlowThreadE(i2, i1, i4);
    i28 = i4;
   } else {
    i28 = 0;
   }
   if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i26 >> 2] | 0) + 324 >> 2] & 1](i1, i27) | 0)) {
    i25 = i27;
    i16 = 97;
    break;
   }
   L63 : do {
    if ((i28 | 0) == 0) {
     i26 = (HEAP32[i18 + 12 >> 2] & 2048 | 0) == 0;
     i4 = i18 + 32 | 0;
     if (i26) {
      i29 = i4 | 0;
     } else {
      i29 = HEAP32[i4 >> 2] | 0;
     }
     i2 = HEAP32[i29 >> 2] | 0;
     if (!i17) {
      if (i26) {
       i30 = i4 | 0;
      } else {
       i30 = HEAP32[i4 >> 2] | 0;
      }
      if ((HEAP32[i30 >> 2] | 0) == 0) {
       i31 = 0;
       i32 = i2;
       break;
      }
     }
     i4 = HEAP32[i14 >> 2] | 0;
     do {
      if ((i4 & 4194304 | 0) == 0) {
       do {
        if ((i4 & 4096 | 0) == 0) {
         i16 = 59;
        } else {
         if ((HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] | 0) != (i11 | 0)) {
          i16 = 59;
          break;
         }
         i33 = HEAP32[i11 + 92 >> 2] | 0;
        }
       } while (0);
       if ((i16 | 0) == 59) {
        i33 = HEAP32[i1 + 16 >> 2] | 0;
       }
       if ((i33 | 0) != 0) {
        if ((HEAP32[i33 + 12 >> 2] & 4194304 | 0) != 0) {
         i16 = 62;
         break;
        }
       }
       i34 = HEAP32[i1 + 28 >> 2] | 0;
      } else {
       i16 = 62;
      }
     } while (0);
     if ((i16 | 0) == 62) {
      i34 = __ZN7WebCore22NodeRenderingTraversal15nextSiblingSlowEPKNS_4NodeE(i11) | 0;
     }
     if ((i34 | 0) == 0) {
      i31 = 0;
      i32 = i2;
      break;
     } else {
      i35 = i34;
     }
     while (1) {
      i4 = HEAP32[i35 + 12 >> 2] | 0;
      i26 = i35 + 32 | 0;
      if ((i4 & 2048 | 0) == 0) {
       i36 = i26 | 0;
      } else {
       i36 = HEAP32[i26 >> 2] | 0;
      }
      i26 = HEAP32[i36 >> 2] | 0;
      if ((i26 | 0) != 0) {
       if ((HEAP32[(HEAP32[i26 + 4 >> 2] | 0) + 12 >> 2] & 4 | 0) == 0) {
        i31 = i26;
        i32 = i2;
        break L63;
       }
       if ((HEAP32[i26 + 20 >> 2] & 768 | 0) == 256) {
        i37 = HEAP32[(HEAP32[i26 + 8 >> 2] | 0) + 36 >> 2] | 0;
       } else {
        i37 = HEAP32[i26 + 36 >> 2] | 0;
       }
       i23 = HEAP32[(HEAP32[i37 + 20 >> 2] | 0) + 284 >> 2] | 0;
       if ((i23 | 0) == 0) {
        i31 = i26;
        i32 = i2;
        break L63;
       }
       if ((HEAP32[i23 + 4 >> 2] | 0) == 0) {
        i31 = i26;
        i32 = i2;
        break L63;
       }
      }
      do {
       if ((i4 & 4194304 | 0) == 0) {
        do {
         if ((i4 & 4096 | 0) == 0) {
          i16 = 79;
         } else {
          if ((HEAP32[(HEAP32[i35 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i35 | 0)) {
           i16 = 79;
           break;
          }
          i38 = HEAP32[i35 + 92 >> 2] | 0;
         }
        } while (0);
        if ((i16 | 0) == 79) {
         i16 = 0;
         i38 = HEAP32[i35 + 16 >> 2] | 0;
        }
        if ((i38 | 0) != 0) {
         if ((HEAP32[i38 + 12 >> 2] & 4194304 | 0) != 0) {
          i16 = 82;
          break;
         }
        }
        i39 = HEAP32[i35 + 28 >> 2] | 0;
       } else {
        i16 = 82;
       }
      } while (0);
      if ((i16 | 0) == 82) {
       i16 = 0;
       i39 = __ZN7WebCore22NodeRenderingTraversal15nextSiblingSlowEPKNS_4NodeE(i35) | 0;
      }
      if ((i39 | 0) == 0) {
       i31 = 0;
       i32 = i2;
       break;
      } else {
       i35 = i39;
      }
     }
    } else {
     i31 = __ZNK7WebCore21RenderNamedFlowThread19nextRendererForNodeEPNS_4NodeE(i28, i11) | 0;
     i32 = i28 | 0;
    }
   } while (0);
   i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 320 >> 2] | 0;
   HEAP32[i7 >> 2] = i27;
   FUNCTION_TABLE_viii[i2 & 1](i6, i1, i7);
   i2 = i6 | 0;
   i4 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i2 = i4 | 0;
   i26 = i4 + 36 | 0;
   if (!(FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i32 >> 2] | 0) + 624 >> 2] & 1](i32, i2, HEAP32[i26 >> 2] | 0) | 0)) {
    __ZN7WebCore12RenderObject7destroyEv(i2);
    break;
   }
   i23 = i4 + 20 | 0;
   HEAP32[i23 >> 2] = HEAP32[i23 >> 2] & -805306369 | HEAP32[i32 + 20 >> 2] & 805306368;
   if ((HEAP32[i14 >> 2] & 2048 | 0) == 0) {
    HEAP32[i1 + 32 >> 2] = i2;
   } else {
    HEAP32[HEAP32[i1 + 32 >> 2] >> 2] = i2;
   }
   i23 = __ZNK7WebCore12RenderObject9animationEv(i2) | 0;
   i24 = HEAP32[i26 >> 2] | 0;
   HEAP32[i9 >> 2] = i24;
   i22 = i24 | 0;
   HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
   __ZN7WebCore19AnimationController16updateAnimationsERNS_13RenderElementEN3WTF7PassRefINS_11RenderStyleEEE(i8, i23, i4, i9);
   i23 = HEAP32[i8 >> 2] | 0;
   i22 = HEAP32[i26 >> 2] | 0;
   i24 = i22 | 0;
   i15 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i22);
    __ZN3WTF8fastFreeEPv(i22);
   } else {
    HEAP32[i24 >> 2] = i15;
   }
   HEAP32[i26 >> 2] = i23;
   __ZN7WebCore13RenderElement15initializeStyleEv(i4);
   i23 = HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] | 0;
   i26 = HEAP32[i23 + 1688 >> 2] | 0;
   if ((i26 | 0) != 0 & (i26 | 0) == (i1 | 0)) {
    i26 = __ZN7WebCore16RenderFullScreen12wrapRendererEPNS_12RenderObjectEPNS_13RenderElementERNS_8DocumentE(i2, i32, i23) | 0;
    if ((i26 | 0) == 0) {
     break;
    } else {
     i40 = i26 | 0;
    }
   } else {
    i40 = i4;
   }
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i32 >> 2] | 0) + 628 >> 2] & 1](i32, i40 | 0, i31);
  }
 } while (0);
 do {
  if ((i16 | 0) == 97) {
   if ((i25 | 0) == 0) {
    break;
   }
   i31 = i25 | 0;
   i40 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
   if ((i40 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i25);
    __ZN3WTF8fastFreeEPv(i25);
    break;
   } else {
    HEAP32[i31 >> 2] = i40;
    break;
   }
  }
 } while (0);
 i25 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i25 | 0) != 0) {
   if ((HEAP32[i25 + 12 >> 2] & 4 | 0) == 0) {
    break;
   }
   if (!(__ZNK7WebCore7Element17isInCanvasSubtreeEv(i25) | 0)) {
    break;
   }
   __ZN7WebCore7Element20setIsInCanvasSubtreeEb(i1, 1);
  }
 } while (0);
 __ZN7WebCore5StyleL40attachBeforeOrAfterPseudoElementIfNeededERNS_7ElementENS_8PseudoIdE(i1, 3);
 i25 = __ZNK7WebCore7Element10shadowRootEv(i1) | 0;
 do {
  if ((i25 | 0) == 0) {
   if ((HEAP32[i1 + 36 >> 2] | 0) == 0) {
    i41 = 0;
    break;
   }
   i16 = HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] | 0;
   i40 = i16 + 320 | 0;
   i31 = HEAP32[i40 >> 2] | 0;
   if ((i31 | 0) == 0) {
    __ZN7WebCore8Document19createStyleResolverEv(i16);
    i42 = HEAP32[i40 >> 2] | 0;
   } else {
    i42 = i31;
   }
   __ZN7WebCore13StyleResolver17pushParentElementEPNS_7ElementE(i42, i1);
   i41 = i42;
  } else {
   i31 = HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] | 0;
   i40 = i31 + 320 | 0;
   i16 = HEAP32[i40 >> 2] | 0;
   if ((i16 | 0) == 0) {
    __ZN7WebCore8Document19createStyleResolverEv(i31);
    i43 = HEAP32[i40 >> 2] | 0;
   } else {
    i43 = i16;
   }
   __ZN7WebCore13StyleResolver17pushParentElementEPNS_7ElementE(i43, i1);
   i16 = HEAP32[(HEAP32[i25 + 20 >> 2] | 0) + 8 >> 2] | 0;
   i40 = i16 + 320 | 0;
   i31 = HEAP32[i40 >> 2] | 0;
   if ((i31 | 0) == 0) {
    __ZN7WebCore8Document19createStyleResolverEv(i16);
    i44 = HEAP32[i40 >> 2] | 0;
   } else {
    i44 = i31;
   }
   __ZN7WebCore13StyleResolver20pushParentShadowRootEPKNS_10ShadowRootE(i44, i25);
   __ZN7WebCore5StyleL14attachChildrenERNS_13ContainerNodeE(i25 | 0);
   __ZN7WebCore13StyleResolver19popParentShadowRootEPKNS_10ShadowRootE(i44, i25);
   i31 = i25 + 12 | 0;
   HEAP32[i31 >> 2] = HEAP32[i31 >> 2] & -114817;
   i41 = i43;
  }
 } while (0);
 __ZN7WebCore5StyleL14attachChildrenERNS_13ContainerNodeE(i1 | 0);
 HEAP32[i14 >> 2] = HEAP32[i14 >> 2] & -114817;
 __ZNK7WebCore8Document13axObjectCacheEv(HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] | 0) | 0;
 __ZN7WebCore5StyleL40attachBeforeOrAfterPseudoElementIfNeededERNS_7ElementENS_8PseudoIdE(i1, 4);
 __ZN7WebCore7Element40updateFocusAppearanceAfterAttachIfNeededEv(i1);
 if ((HEAP32[i14 >> 2] & 1048576 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 532 >> 2] & 1](i1);
 }
 do {
  if ((i41 | 0) != 0) {
   i14 = HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] | 0;
   i43 = i14 + 320 | 0;
   i25 = HEAP32[i43 >> 2] | 0;
   if ((i25 | 0) == 0) {
    __ZN7WebCore8Document19createStyleResolverEv(i14);
    i45 = HEAP32[i43 >> 2] | 0;
   } else {
    i45 = i25;
   }
   if ((i41 | 0) != (i45 | 0)) {
    break;
   }
   __ZN7WebCore13StyleResolver16popParentElementEPNS_7ElementE(i41, i1);
  }
 } while (0);
 i1 = HEAP32[__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE >> 2] | 0;
 if ((i1 | 0) != 1) {
  i46 = i1;
  i47 = i46 - 1 | 0;
  HEAP32[__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE >> 2] = i47;
  __ZN7WebCore13ContainerNode25resumePostAttachCallbacksERNS_8DocumentE(i13);
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope11moveWidgetsEv(i10);
 i46 = HEAP32[__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE >> 2] | 0;
 i47 = i46 - 1 | 0;
 HEAP32[__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE >> 2] = i47;
 __ZN7WebCore13ContainerNode25resumePostAttachCallbacksERNS_8DocumentE(i13);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore5StyleL20textRendererIsNeededERKNS_4TextERKNS_12RenderObjectERKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i4 = i1 | 0;
 i5 = i1 + 12 | 0;
 if ((HEAP32[i5 >> 2] & 131072 | 0) != 0) {
  i6 = 1;
  return i6 | 0;
 }
 i7 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 if ((HEAP32[i7 + 4 >> 2] | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 if ((HEAP32[i3 + 48 >> 2] & 31 | 0) == 22) {
  i6 = 0;
  return i6 | 0;
 }
 if (!(__ZNK7WebCore13CharacterData22containsOnlyWhitespaceEv(i1 | 0) | 0)) {
  i6 = 1;
  return i6 | 0;
 }
 i7 = i2;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 184 >> 2] & 1](i2) | 0) {
  i6 = 0;
  return i6 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 200 >> 2] & 1](i2) | 0) {
  i6 = 0;
  return i6 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 204 >> 2] & 1](i2) | 0) {
  i6 = 0;
  return i6 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 192 >> 2] & 1](i2) | 0) {
  i6 = 0;
  return i6 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 88 >> 2] & 1](i2) | 0) {
  i6 = 0;
  return i6 | 0;
 }
 i7 = HEAP32[i3 + 44 >> 2] & 7;
 if (!((i7 | 0) == 4 | (i7 | 0) == 0)) {
  i6 = 1;
  return i6 | 0;
 }
 i7 = HEAP32[i5 >> 2] | 0;
 i5 = (i7 & 2048 | 0) == 0;
 i3 = i1 + 32 | 0;
 if (i5) {
  i8 = i3 | 0;
 } else {
  i8 = HEAP32[i3 >> 2] | 0;
 }
 L38 : do {
  if ((HEAP32[i8 >> 2] | 0) == 0) {
   do {
    if ((i7 & 4194304 | 0) == 0) {
     do {
      if ((i7 & 4096 | 0) == 0) {
       i9 = 24;
      } else {
       if ((HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i4 | 0)) {
        i9 = 24;
        break;
       }
       i10 = HEAP32[i4 + 92 >> 2] | 0;
      }
     } while (0);
     if ((i9 | 0) == 24) {
      i10 = HEAP32[i1 + 16 >> 2] | 0;
     }
     if ((i10 | 0) != 0) {
      if ((HEAP32[i10 + 12 >> 2] & 4194304 | 0) != 0) {
       i9 = 27;
       break;
      }
     }
     i11 = HEAP32[i1 + 24 >> 2] | 0;
    } else {
     i9 = 27;
    }
   } while (0);
   if ((i9 | 0) == 27) {
    i11 = __ZN7WebCore22NodeRenderingTraversal19previousSiblingSlowEPKNS_4NodeE(i4) | 0;
   }
   if ((i11 | 0) == 0) {
    i12 = 0;
    i13 = 0;
    break;
   } else {
    i14 = i11;
   }
   while (1) {
    i15 = HEAP32[i14 + 12 >> 2] | 0;
    i16 = i14 + 32 | 0;
    if ((i15 & 2048 | 0) == 0) {
     i17 = i16 | 0;
    } else {
     i17 = HEAP32[i16 >> 2] | 0;
    }
    i16 = HEAP32[i17 >> 2] | 0;
    if ((i16 | 0) != 0) {
     if ((HEAP32[(HEAP32[i16 + 4 >> 2] | 0) + 12 >> 2] & 4 | 0) == 0) {
      i18 = i16;
      i9 = 51;
      break L38;
     }
     if ((HEAP32[i16 + 20 >> 2] & 768 | 0) == 256) {
      i19 = HEAP32[(HEAP32[i16 + 8 >> 2] | 0) + 36 >> 2] | 0;
     } else {
      i19 = HEAP32[i16 + 36 >> 2] | 0;
     }
     i20 = HEAP32[(HEAP32[i19 + 20 >> 2] | 0) + 284 >> 2] | 0;
     if ((i20 | 0) == 0) {
      i21 = i16;
      i9 = 50;
      break L38;
     }
     if ((HEAP32[i20 + 4 >> 2] | 0) == 0) {
      i21 = i16;
      i9 = 50;
      break L38;
     }
    }
    do {
     if ((i15 & 4194304 | 0) == 0) {
      do {
       if ((i15 & 4096 | 0) == 0) {
        i9 = 44;
       } else {
        if ((HEAP32[(HEAP32[i14 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i14 | 0)) {
         i9 = 44;
         break;
        }
        i22 = HEAP32[i14 + 92 >> 2] | 0;
       }
      } while (0);
      if ((i9 | 0) == 44) {
       i9 = 0;
       i22 = HEAP32[i14 + 16 >> 2] | 0;
      }
      if ((i22 | 0) != 0) {
       if ((HEAP32[i22 + 12 >> 2] & 4194304 | 0) != 0) {
        i9 = 47;
        break;
       }
      }
      i23 = HEAP32[i14 + 24 >> 2] | 0;
     } else {
      i9 = 47;
     }
    } while (0);
    if ((i9 | 0) == 47) {
     i9 = 0;
     i23 = __ZN7WebCore22NodeRenderingTraversal19previousSiblingSlowEPKNS_4NodeE(i14) | 0;
    }
    if ((i23 | 0) == 0) {
     i12 = 0;
     i13 = 0;
     break;
    } else {
     i14 = i23;
    }
   }
  } else {
   if (i5) {
    i24 = i3 | 0;
   } else {
    i24 = HEAP32[i3 >> 2] | 0;
   }
   i21 = HEAP32[(HEAP32[i24 >> 2] | 0) + 12 >> 2] | 0;
   i9 = 50;
  }
 } while (0);
 if ((i9 | 0) == 50) {
  if ((i21 | 0) == 0) {
   i12 = 0;
   i13 = 0;
  } else {
   i18 = i21;
   i9 = 51;
  }
 }
 do {
  if ((i9 | 0) == 51) {
   if ((HEAP32[i18 + 20 >> 2] & 4096 | 0) == 0) {
    i12 = i18;
    i13 = 1;
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 620 >> 2] & 1](i18) | 0) {
    i12 = i18;
    i13 = 1;
    break;
   } else {
    i6 = 0;
   }
   return i6 | 0;
  }
 } while (0);
 i18 = HEAP32[i2 + 20 >> 2] | 0;
 do {
  if ((i18 & 768 | 0) == 256) {
   i9 = 61;
  } else {
   if ((HEAP32[i2 + 24 >> 2] & 4 | 0) != 0) {
    if (!i13) {
     break;
    }
    if ((HEAP32[i12 + 20 >> 2] & 1024 | 0) == 0) {
     i6 = 0;
    } else {
     break;
    }
    return i6 | 0;
   }
   if ((HEAP32[i2 + 24 >> 2] & 16 | 0) == 0) {
    i9 = 61;
    break;
   }
   if ((i18 & 2097152 | 0) != 0) {
    i9 = 61;
    break;
   }
   if (!i13) {
    i6 = 0;
    return i6 | 0;
   }
   if ((HEAP32[i12 + 20 >> 2] & 1024 | 0) == 0) {
    i6 = 0;
   } else {
    i9 = 61;
    break;
   }
   return i6 | 0;
  }
 } while (0);
 L108 : do {
  if ((i9 | 0) == 61) {
   i12 = HEAP32[i2 + 28 >> 2] | 0;
   L110 : do {
    if ((i12 | 0) != 0) {
     i13 = i12;
     while (1) {
      i18 = HEAP32[i13 + 20 >> 2] | 0;
      if (!((i18 & 64 | 0) != 0 | (i18 & 25165824 | 0) == 16777216)) {
       break;
      }
      i18 = HEAP32[i13 + 16 >> 2] | 0;
      if ((i18 | 0) == 0) {
       break L110;
      } else {
       i13 = i18;
      }
     }
     if ((__ZN7WebCore5StyleL19nextSiblingRendererERKNS_4TextE(i1) | 0) == (i13 | 0)) {
      i6 = 0;
     } else {
      break L108;
     }
     return i6 | 0;
    }
   } while (0);
   __ZN7WebCore5StyleL19nextSiblingRendererERKNS_4TextE(i1) | 0;
   i6 = 0;
   return i6 | 0;
  }
 } while (0);
 i6 = 1;
 return i6 | 0;
}
function __ZN7WebCore5StyleL65reattachTextRenderersForWhitespaceOnlySiblingsAfterAttachIfNeededERNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 & 4194304 | 0) == 0) {
   i4 = i3;
  } else {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 128 >> 2] & 1](i1) | 0) {
    return;
   } else {
    i4 = HEAP32[i2 >> 2] | 0;
    break;
   }
  }
 } while (0);
 do {
  if ((i4 & 4194304 | 0) == 0) {
   do {
    if ((i4 & 4096 | 0) == 0) {
     i5 = 8;
    } else {
     if ((HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i1 | 0)) {
      i5 = 8;
      break;
     }
     i6 = HEAP32[i1 + 92 >> 2] | 0;
    }
   } while (0);
   if ((i5 | 0) == 8) {
    i6 = HEAP32[i1 + 16 >> 2] | 0;
   }
   if ((i6 | 0) != 0) {
    if ((HEAP32[i6 + 12 >> 2] & 4194304 | 0) != 0) {
     i5 = 11;
     break;
    }
   }
   i7 = HEAP32[i1 + 28 >> 2] | 0;
  } else {
   i5 = 11;
  }
 } while (0);
 if ((i5 | 0) == 11) {
  i7 = __ZN7WebCore22NodeRenderingTraversal15nextSiblingSlowEPKNS_4NodeE(i1) | 0;
 }
 if ((i7 | 0) == 0) {
  return;
 } else {
  i8 = i7;
 }
 L23 : while (1) {
  i7 = i8 + 12 | 0;
  i1 = HEAP32[i7 >> 2] | 0;
  if ((i1 & 114688 | 0) == 65536) {
   i5 = 62;
   break;
  }
  do {
   if ((i1 & 4 | 0) == 0) {
    if ((i1 & 1 | 0) == 0) {
     i9 = i1;
     break;
    }
    i6 = i8;
    i4 = HEAP32[i8 + 36 >> 2] | 0;
    if ((i4 | 0) == 0) {
     i5 = 68;
     break L23;
    }
    if ((HEAP32[i4 + 4 >> 2] | 0) == 0) {
     i5 = 69;
     break L23;
    }
    if (!(__ZNK7WebCore13CharacterData22containsOnlyWhitespaceEv(i8) | 0)) {
     i5 = 59;
     break L23;
    }
    i4 = HEAP32[i7 >> 2] | 0;
    i2 = (i4 & 2048 | 0) == 0;
    i3 = i8 + 32 | 0;
    if (i2) {
     i10 = i3 | 0;
     i11 = i3 | 0;
    } else {
     i12 = HEAP32[i3 >> 2] | 0;
     i10 = i12 | 0;
     i11 = i12 | 0;
    }
    i12 = (HEAP32[i11 >> 2] | 0) != 0;
    if ((HEAP32[i10 >> 2] | 0) == 0) {
     i13 = i4;
    } else {
     if (i2) {
      i14 = i3 | 0;
     } else {
      i14 = HEAP32[i3 >> 2] | 0;
     }
     __ZN7WebCore12RenderObject34destroyAndCleanupAnonymousWrappersEv(HEAP32[i14 >> 2] | 0);
     i13 = HEAP32[i7 >> 2] | 0;
    }
    if ((i13 & 2048 | 0) == 0) {
     HEAP32[i8 + 32 >> 2] = 0;
    } else {
     HEAP32[HEAP32[i3 >> 2] >> 2] = 0;
    }
    __ZN7WebCore5StyleL18attachTextRendererERNS_4TextE(i6);
    i6 = HEAP32[i7 >> 2] | 0;
    if ((i6 & 2048 | 0) == 0) {
     i15 = i3 | 0;
    } else {
     i15 = HEAP32[i3 >> 2] | 0;
    }
    if (i12 ^ (HEAP32[i15 >> 2] | 0) != 0) {
     i9 = i6;
    } else {
     i5 = 60;
     break L23;
    }
   } else {
    i6 = (i1 & 2048 | 0) == 0;
    i12 = i8 + 32 | 0;
    if (i6) {
     i16 = i12 | 0;
    } else {
     i16 = HEAP32[i12 >> 2] | 0;
    }
    if ((HEAP32[i16 >> 2] | 0) == 0) {
     i9 = i1;
     break;
    }
    if (i6) {
     i17 = i12 | 0;
    } else {
     i17 = HEAP32[i12 >> 2] | 0;
    }
    i12 = HEAP32[i17 >> 2] | 0;
    if ((HEAP32[(HEAP32[i12 + 4 >> 2] | 0) + 12 >> 2] & 4 | 0) == 0) {
     i5 = 65;
     break L23;
    }
    if ((HEAP32[i12 + 20 >> 2] & 768 | 0) == 256) {
     i18 = HEAP32[(HEAP32[i12 + 8 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i18 = HEAP32[i12 + 36 >> 2] | 0;
    }
    i12 = HEAP32[(HEAP32[i18 + 20 >> 2] | 0) + 284 >> 2] | 0;
    if ((i12 | 0) == 0) {
     i5 = 66;
     break L23;
    }
    if ((HEAP32[i12 + 4 >> 2] | 0) == 0) {
     i5 = 67;
     break L23;
    } else {
     i9 = i1;
    }
   }
  } while (0);
  do {
   if ((i9 & 4194304 | 0) == 0) {
    do {
     if ((i9 & 4096 | 0) == 0) {
      i5 = 52;
     } else {
      if ((HEAP32[(HEAP32[i8 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i8 | 0)) {
       i5 = 52;
       break;
      }
      i19 = HEAP32[i8 + 92 >> 2] | 0;
     }
    } while (0);
    if ((i5 | 0) == 52) {
     i5 = 0;
     i19 = HEAP32[i8 + 16 >> 2] | 0;
    }
    if ((i19 | 0) != 0) {
     if ((HEAP32[i19 + 12 >> 2] & 4194304 | 0) != 0) {
      i5 = 55;
      break;
     }
    }
    i20 = HEAP32[i8 + 28 >> 2] | 0;
   } else {
    i5 = 55;
   }
  } while (0);
  if ((i5 | 0) == 55) {
   i5 = 0;
   i20 = __ZN7WebCore22NodeRenderingTraversal15nextSiblingSlowEPKNS_4NodeE(i8) | 0;
  }
  if ((i20 | 0) == 0) {
   i5 = 61;
   break;
  } else {
   i8 = i20;
  }
 }
 if ((i5 | 0) == 59) {
  return;
 } else if ((i5 | 0) == 60) {
  return;
 } else if ((i5 | 0) == 61) {
  return;
 } else if ((i5 | 0) == 62) {
  return;
 } else if ((i5 | 0) == 65) {
  return;
 } else if ((i5 | 0) == 66) {
  return;
 } else if ((i5 | 0) == 67) {
  return;
 } else if ((i5 | 0) == 68) {
  return;
 } else if ((i5 | 0) == 69) {
  return;
 }
}
function __ZN7WebCore5StyleL14attachChildrenERNS_13ContainerNodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 do {
  if ((HEAP32[i1 + 12 >> 2] & 4194304 | 0) != 0) {
   i5 = i1 | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 128 >> 2] & 1](i5) | 0)) {
    break;
   }
   i6 = i1;
   i7 = __ZNK7WebCore4Node20containingShadowRootEv(i5) | 0;
   if ((i7 | 0) != 0) {
    __ZN7WebCore18ContentDistributor18ensureDistributionEPNS_10ShadowRootE(i7);
   }
   i7 = __ZNK7WebCore14InsertionPoint16firstDistributedEv(i6) | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i5 = i3 | 0;
   i8 = i7;
   while (1) {
    i7 = HEAP32[i8 + 12 >> 2] | 0;
    do {
     if ((i7 & 1 | 0) == 0) {
      if ((i7 & 4 | 0) == 0) {
       break;
      }
      i9 = i8 + 32 | 0;
      if ((i7 & 2048 | 0) == 0) {
       i10 = i9 | 0;
      } else {
       i10 = HEAP32[i9 >> 2] | 0;
      }
      i9 = i8;
      if ((HEAP32[i10 >> 2] | 0) != 0) {
       __ZN7WebCore5StyleL16detachRenderTreeERNS_7ElementENS0_10DetachTypeE(i9, 0);
      }
      HEAP32[i5 >> 2] = 0;
      __ZN7WebCore5StyleL16attachRenderTreeERNS_7ElementEN3WTF10PassRefPtrINS_11RenderStyleEEE(i9, i3);
      i9 = HEAP32[i5 >> 2] | 0;
      if ((i9 | 0) == 0) {
       break;
      }
      i11 = i9 | 0;
      i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
      if ((i12 | 0) == 0) {
       __ZN7WebCore11RenderStyleD2Ev(i9);
       __ZN3WTF8fastFreeEPv(i9);
       break;
      } else {
       HEAP32[i11 >> 2] = i12;
       break;
      }
     } else {
      i12 = i8 + 32 | 0;
      if ((i7 & 2048 | 0) == 0) {
       i13 = i12 | 0;
      } else {
       i13 = HEAP32[i12 >> 2] | 0;
      }
      if ((HEAP32[i13 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore5StyleL18attachTextRendererERNS_4TextE(i8);
     }
    } while (0);
    i8 = __ZNK7WebCore14InsertionPoint17nextDistributedToEPKNS_4NodeE(i6, i8) | 0;
    if ((i8 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 i13 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i4 | 0;
 i3 = i13;
 while (1) {
  i13 = HEAP32[i3 + 12 >> 2] | 0;
  i10 = i3 + 32 | 0;
  if ((i13 & 2048 | 0) == 0) {
   i14 = i10 | 0;
  } else {
   i14 = HEAP32[i10 >> 2] | 0;
  }
  do {
   if ((HEAP32[i14 >> 2] | 0) == 0) {
    if ((i13 & 1 | 0) != 0) {
     __ZN7WebCore5StyleL18attachTextRendererERNS_4TextE(i3);
     break;
    }
    if ((i13 & 4 | 0) == 0) {
     break;
    }
    HEAP32[i1 >> 2] = 0;
    __ZN7WebCore5StyleL16attachRenderTreeERNS_7ElementEN3WTF10PassRefPtrINS_11RenderStyleEEE(i3, i4);
    i10 = HEAP32[i1 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    }
    i8 = i10 | 0;
    i6 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
    if ((i6 | 0) == 0) {
     __ZN7WebCore11RenderStyleD2Ev(i10);
     __ZN3WTF8fastFreeEPv(i10);
     break;
    } else {
     HEAP32[i8 >> 2] = i6;
     break;
    }
   }
  } while (0);
  i3 = HEAP32[i3 + 28 >> 2] | 0;
  if ((i3 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i2;
 return;
}
function __ZN7WebCore5Style36updateTextRendererAfterContentChangeERNS_4TextEjj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 12 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i1 + 32 | 0;
 if ((i7 & 2048 | 0) == 0) {
  i9 = i8 | 0;
 } else {
  i9 = HEAP32[i8 >> 2] | 0;
 }
 i10 = HEAP32[i9 >> 2] | 0;
 i9 = i10;
 if ((i10 | 0) == 0) {
  __ZN7WebCore5StyleL18attachTextRendererERNS_4TextE(i1);
  __ZN7WebCore5StyleL65reattachTextRenderersForWhitespaceOnlySiblingsAfterAttachIfNeededERNS_4NodeE(i1 | 0);
  STACKTOP = i4;
  return;
 }
 i11 = i1 | 0;
 do {
  if ((i7 & 4194304 | 0) == 0) {
   do {
    if ((i7 & 4096 | 0) == 0) {
     i12 = 10;
    } else {
     if ((HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i11 | 0)) {
      i12 = 10;
      break;
     }
     i13 = HEAP32[i11 + 92 >> 2] | 0;
    }
   } while (0);
   if ((i12 | 0) == 10) {
    i13 = HEAP32[i1 + 16 >> 2] | 0;
   }
   if ((i13 | 0) != 0) {
    if ((HEAP32[i13 + 12 >> 2] & 4194304 | 0) != 0) {
     i12 = 13;
     break;
    }
   }
   i14 = HEAP32[i1 + 16 >> 2] | 0;
  } else {
   i12 = 13;
  }
 } while (0);
 if ((i12 | 0) == 13) {
  i14 = __ZN7WebCore22NodeRenderingTraversal10parentSlowEPKNS_4NodeE(i11) | 0;
 }
 i12 = i14 + 32 | 0;
 if ((HEAP32[i14 + 12 >> 2] & 2048 | 0) == 0) {
  i15 = i12 | 0;
 } else {
  i15 = HEAP32[i12 >> 2] | 0;
 }
 if (__ZN7WebCore5StyleL20textRendererIsNeededERKNS_4TextERKNS_12RenderObjectERKNS_11RenderStyleE(i1, HEAP32[i15 >> 2] | 0, HEAP32[(HEAP32[i10 + 8 >> 2] | 0) + 36 >> 2] | 0) | 0) {
  i10 = HEAP32[i1 + 36 >> 2] | 0;
  i15 = i5 | 0;
  HEAP32[i15 >> 2] = i10;
  if ((i10 | 0) != 0) {
   i12 = i10 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
  }
  __ZN7WebCore10RenderText17setTextWithOffsetERKN3WTF6StringEjjb(i9, i5, i2, i3, 0);
  i3 = HEAP32[i15 >> 2] | 0;
  if ((i3 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i15 = i3 | 0;
  i2 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
  if ((i2 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i3);
   STACKTOP = i4;
   return;
  } else {
   HEAP32[i15 >> 2] = i2;
   STACKTOP = i4;
   return;
  }
 }
 i2 = HEAP32[i6 >> 2] | 0;
 i15 = (i2 & 2048 | 0) == 0;
 if (i15) {
  i16 = i8 | 0;
 } else {
  i16 = HEAP32[i8 >> 2] | 0;
 }
 if ((HEAP32[i16 >> 2] | 0) == 0) {
  i17 = i2;
 } else {
  if (i15) {
   i18 = i8 | 0;
  } else {
   i18 = HEAP32[i8 >> 2] | 0;
  }
  __ZN7WebCore12RenderObject34destroyAndCleanupAnonymousWrappersEv(HEAP32[i18 >> 2] | 0);
  i17 = HEAP32[i6 >> 2] | 0;
 }
 if ((i17 & 2048 | 0) == 0) {
  HEAP32[i1 + 32 >> 2] = 0;
 } else {
  HEAP32[HEAP32[i8 >> 2] >> 2] = 0;
 }
 __ZN7WebCore5StyleL18attachTextRendererERNS_4TextE(i1);
 __ZN7WebCore5StyleL65reattachTextRenderersForWhitespaceOnlySiblingsAfterAttachIfNeededERNS_4NodeE(i11);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore5StyleL19nextSiblingRendererERKNS_4TextE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 i3 = (i2 & 2048 | 0) == 0;
 i4 = i1 + 32 | 0;
 if (i3) {
  i5 = i4 | 0;
 } else {
  i5 = HEAP32[i4 >> 2] | 0;
 }
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  if (i3) {
   i6 = i4 | 0;
  } else {
   i6 = HEAP32[i4 >> 2] | 0;
  }
  i7 = HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] | 0;
  return i7 | 0;
 }
 i6 = i1 | 0;
 do {
  if ((i2 & 4194304 | 0) == 0) {
   do {
    if ((i2 & 4096 | 0) == 0) {
     i8 = 13;
    } else {
     if ((HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i6 | 0)) {
      i8 = 13;
      break;
     }
     i9 = HEAP32[i6 + 92 >> 2] | 0;
    }
   } while (0);
   if ((i8 | 0) == 13) {
    i9 = HEAP32[i1 + 16 >> 2] | 0;
   }
   if ((i9 | 0) != 0) {
    if ((HEAP32[i9 + 12 >> 2] & 4194304 | 0) != 0) {
     i8 = 16;
     break;
    }
   }
   i10 = HEAP32[i1 + 28 >> 2] | 0;
  } else {
   i8 = 16;
  }
 } while (0);
 if ((i8 | 0) == 16) {
  i10 = __ZN7WebCore22NodeRenderingTraversal15nextSiblingSlowEPKNS_4NodeE(i6) | 0;
 }
 if ((i10 | 0) == 0) {
  i7 = 0;
  return i7 | 0;
 } else {
  i11 = i10;
 }
 while (1) {
  i10 = HEAP32[i11 + 12 >> 2] | 0;
  i6 = i11 + 32 | 0;
  if ((i10 & 2048 | 0) == 0) {
   i12 = i6 | 0;
  } else {
   i12 = HEAP32[i6 >> 2] | 0;
  }
  i6 = HEAP32[i12 >> 2] | 0;
  if ((i6 | 0) != 0) {
   if ((HEAP32[(HEAP32[i6 + 4 >> 2] | 0) + 12 >> 2] & 4 | 0) == 0) {
    i7 = i6;
    i8 = 42;
    break;
   }
   if ((HEAP32[i6 + 20 >> 2] & 768 | 0) == 256) {
    i13 = HEAP32[(HEAP32[i6 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i13 = HEAP32[i6 + 36 >> 2] | 0;
   }
   i1 = HEAP32[(HEAP32[i13 + 20 >> 2] | 0) + 284 >> 2] | 0;
   if ((i1 | 0) == 0) {
    i7 = i6;
    i8 = 45;
    break;
   }
   if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
    i7 = i6;
    i8 = 44;
    break;
   }
  }
  do {
   if ((i10 & 4194304 | 0) == 0) {
    do {
     if ((i10 & 4096 | 0) == 0) {
      i8 = 33;
     } else {
      if ((HEAP32[(HEAP32[i11 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i11 | 0)) {
       i8 = 33;
       break;
      }
      i14 = HEAP32[i11 + 92 >> 2] | 0;
     }
    } while (0);
    if ((i8 | 0) == 33) {
     i8 = 0;
     i14 = HEAP32[i11 + 16 >> 2] | 0;
    }
    if ((i14 | 0) != 0) {
     if ((HEAP32[i14 + 12 >> 2] & 4194304 | 0) != 0) {
      i8 = 36;
      break;
     }
    }
    i15 = HEAP32[i11 + 28 >> 2] | 0;
   } else {
    i8 = 36;
   }
  } while (0);
  if ((i8 | 0) == 36) {
   i8 = 0;
   i15 = __ZN7WebCore22NodeRenderingTraversal15nextSiblingSlowEPKNS_4NodeE(i11) | 0;
  }
  if ((i15 | 0) == 0) {
   i7 = 0;
   i8 = 43;
   break;
  } else {
   i11 = i15;
  }
 }
 if ((i8 | 0) == 42) {
  return i7 | 0;
 } else if ((i8 | 0) == 43) {
  return i7 | 0;
 } else if ((i8 | 0) == 44) {
  return i7 | 0;
 } else if ((i8 | 0) == 45) {
  return i7 | 0;
 }
 return 0;
}
function __ZN7WebCore5Style15determineChangeEPKNS_11RenderStyleES3_PNS_8SettingsE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 if ((i1 | 0) == 0 | (i2 | 0) == 0) {
  i4 = 3;
  return i4 | 0;
 }
 if (((HEAP32[i2 + 48 >> 2] ^ HEAP32[i1 + 48 >> 2]) & 31 | 0) != 0) {
  i4 = 3;
  return i4 | 0;
 }
 i5 = i1 + 52 | 0;
 i6 = i2 + 52 | 0;
 if ((HEAP32[i5 >> 2] & 8192 | 0) != 0 ^ (HEAP32[i6 >> 2] & 8192 | 0) != 0) {
  i4 = 3;
  return i4 | 0;
 }
 i7 = i1 + 20 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = HEAP32[(HEAP32[i8 + 68 >> 2] | 0) + 32 >> 2] | 0;
 i10 = i2 + 20 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = HEAP32[(HEAP32[i11 + 68 >> 2] | 0) + 32 >> 2] | 0;
 if (((i12 ^ i9) & 16 | 0) != 0) {
  i4 = 3;
  return i4 | 0;
 }
 do {
  if ((HEAP8[i3 + 189 | 0] & 2) != 0) {
   if ((i9 & 2 | 0) == 0) {
    i13 = 1;
   } else {
    i13 = i9 & 1 ^ 1;
   }
   if ((i12 & 2 | 0) == 0) {
    i14 = 1;
   } else {
    i14 = i12 & 1 ^ 1;
   }
   if ((i13 | 0) == (i14 | 0)) {
    break;
   } else {
    i4 = 3;
   }
   return i4 | 0;
  }
 } while (0);
 if (!(__ZNK7WebCore25StyleRareNonInheritedData21contentDataEquivalentERKS0_(i8, i11) | 0)) {
  i4 = 3;
  return i4 | 0;
 }
 i11 = HEAP32[i7 >> 2] | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 if ((HEAP32[i11 + 296 >> 2] & 128 | 0) != 0 ^ (HEAP32[i7 + 296 >> 2] & 128 | 0) != 0) {
  i4 = 3;
  return i4 | 0;
 }
 if ((HEAP32[i11 + 284 >> 2] | 0) != (HEAP32[i7 + 284 >> 2] | 0)) {
  i4 = 3;
  return i4 | 0;
 }
 if ((HEAP32[i11 + 288 >> 2] | 0) != (HEAP32[i7 + 288 >> 2] | 0)) {
  i4 = 3;
  return i4 | 0;
 }
 if (!(__ZNK7WebCore11RenderStyleeqERKS0_(i1, i2) | 0)) {
  if (__ZNK7WebCore11RenderStyle17inheritedNotEqualEPKS0_(i1, i2) | 0) {
   i4 = 2;
   return i4 | 0;
  }
  if ((HEAP32[i5 >> 2] & 524288 | 0) == 0) {
   return ((HEAP32[i6 >> 2] | 0) >>> 19 & 1) + 1 | 0;
  } else {
   i4 = 2;
   return i4 | 0;
  }
 }
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 & 516096 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 } else {
  i15 = 1;
  i16 = i6;
 }
 while (1) {
  if ((1 << i15 - 1 & 127 & i16 >>> 12 | 0) != 0) {
   i6 = __ZNK7WebCore11RenderStyle20getCachedPseudoStyleENS_8PseudoIdE(i2, i15) | 0;
   if ((i6 | 0) == 0) {
    i4 = 1;
    i17 = 39;
    break;
   }
   i7 = __ZNK7WebCore11RenderStyle20getCachedPseudoStyleENS_8PseudoIdE(i1, i15) | 0;
   if ((i7 | 0) == 0) {
    i4 = 1;
    i17 = 40;
    break;
   }
   if (!(__ZNK7WebCore11RenderStyleeqERKS0_(i7, i6) | 0)) {
    i4 = 1;
    i17 = 41;
    break;
   }
  }
  i6 = i15 + 1 | 0;
  if ((i6 | 0) >= 8) {
   i4 = 0;
   i17 = 42;
   break;
  }
  i15 = i6;
  i16 = HEAP32[i5 >> 2] | 0;
 }
 if ((i17 | 0) == 39) {
  return i4 | 0;
 } else if ((i17 | 0) == 40) {
  return i4 | 0;
 } else if ((i17 | 0) == 41) {
  return i4 | 0;
 } else if ((i17 | 0) == 42) {
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore5StyleL14detachChildrenERNS_13ContainerNodeENS0_10DetachTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = i1 + 12 | 0;
 do {
  if ((HEAP32[i3 >> 2] & 4194304 | 0) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 128 >> 2] & 1](i1 | 0) | 0)) {
    break;
   }
   i4 = i1;
   i5 = __ZNK7WebCore14InsertionPoint16firstDistributedEv(i4) | 0;
   if ((i5 | 0) == 0) {
    break;
   } else {
    i6 = i5;
   }
   while (1) {
    i5 = i6 + 12 | 0;
    i7 = HEAP32[i5 >> 2] | 0;
    do {
     if ((i7 & 1 | 0) == 0) {
      if ((i7 & 4 | 0) == 0) {
       break;
      }
      __ZN7WebCore5StyleL16detachRenderTreeERNS_7ElementENS0_10DetachTypeE(i6, 0);
     } else {
      i8 = (i7 & 2048 | 0) == 0;
      i9 = i6 + 32 | 0;
      if (i8) {
       i10 = i9 | 0;
      } else {
       i10 = HEAP32[i9 >> 2] | 0;
      }
      if ((HEAP32[i10 >> 2] | 0) == 0) {
       i11 = i7;
      } else {
       if (i8) {
        i12 = i9 | 0;
       } else {
        i12 = HEAP32[i9 >> 2] | 0;
       }
       __ZN7WebCore12RenderObject34destroyAndCleanupAnonymousWrappersEv(HEAP32[i12 >> 2] | 0);
       i11 = HEAP32[i5 >> 2] | 0;
      }
      if ((i11 & 2048 | 0) == 0) {
       HEAP32[i6 + 32 >> 2] = 0;
       break;
      } else {
       HEAP32[HEAP32[i9 >> 2] >> 2] = 0;
       break;
      }
     }
    } while (0);
    i6 = __ZNK7WebCore14InsertionPoint17nextDistributedToEPKNS_4NodeE(i4, i6) | 0;
    if ((i6 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 i6 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i13 = HEAP32[i3 >> 2] | 0;
  i14 = i13 & -129;
  HEAP32[i3 >> 2] = i14;
  return;
 } else {
  i15 = i6;
 }
 while (1) {
  i6 = i15 + 12 | 0;
  i1 = HEAP32[i6 >> 2] | 0;
  do {
   if ((i1 & 1 | 0) == 0) {
    if ((i1 & 4 | 0) == 0) {
     break;
    }
    __ZN7WebCore5StyleL16detachRenderTreeERNS_7ElementENS0_10DetachTypeE(i15, i2);
   } else {
    i11 = (i1 & 2048 | 0) == 0;
    i12 = i15 + 32 | 0;
    if (i11) {
     i16 = i12 | 0;
    } else {
     i16 = HEAP32[i12 >> 2] | 0;
    }
    if ((HEAP32[i16 >> 2] | 0) == 0) {
     i17 = i1;
    } else {
     if (i11) {
      i18 = i12 | 0;
     } else {
      i18 = HEAP32[i12 >> 2] | 0;
     }
     __ZN7WebCore12RenderObject34destroyAndCleanupAnonymousWrappersEv(HEAP32[i18 >> 2] | 0);
     i17 = HEAP32[i6 >> 2] | 0;
    }
    if ((i17 & 2048 | 0) == 0) {
     HEAP32[i15 + 32 >> 2] = 0;
     break;
    } else {
     HEAP32[HEAP32[i12 >> 2] >> 2] = 0;
     break;
    }
   }
  } while (0);
  i15 = HEAP32[i15 + 28 >> 2] | 0;
  if ((i15 | 0) == 0) {
   break;
  }
 }
 i13 = HEAP32[i3 >> 2] | 0;
 i14 = i13 & -129;
 HEAP32[i3 >> 2] = i14;
 return;
}
function __ZN7WebCore11RenderStyleD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore14SVGRenderStyleD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i3 = i4 + 8 | 0;
  i2 = HEAP32[i3 >> 2] | 0;
  i5 = i4 | 0;
  if ((i2 | 0) != 0) {
   i6 = HEAP32[i5 >> 2] | 0;
   i7 = i6 + (i2 << 2) | 0;
   i2 = i6;
   while (1) {
    i6 = HEAP32[i2 >> 2] | 0;
    do {
     if ((i6 | 0) != 0) {
      i8 = i6 | 0;
      i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
      if ((i9 | 0) == 0) {
       __ZN7WebCore11RenderStyleD2Ev(i6);
       __ZN3WTF8fastFreeEPv(i6);
       break;
      } else {
       HEAP32[i8 >> 2] = i9;
       break;
      }
     }
    } while (0);
    i2 = i2 + 4 | 0;
    if ((i2 | 0) == (i7 | 0)) {
     break;
    }
   }
   HEAP32[i3 >> 2] = 0;
  }
  i3 = HEAP32[i5 >> 2] | 0;
  if (!((i4 + 12 | 0) == (i3 | 0) | (i3 | 0) == 0)) {
   HEAP32[i5 >> 2] = 0;
   HEAP32[i4 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i3);
  }
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 28 >> 2] | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore18StyleInheritedDataD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i5;
 }
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 i3 = i5 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore22StyleRareInheritedDataD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 20 >> 2] | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i5;
 }
 i5 = HEAP32[i1 + 16 >> 2] | 0;
 i3 = i5 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore17StyleSurroundDataD2Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore9FillLayerD1Ev(i4 + 4 | 0);
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i5;
 }
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i3 = i5 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore15StyleVisualDataD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i4 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore12StyleBoxDataD2Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore5StyleL18attachTextRendererERNS_4TextE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 i5 = i1 + 12 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 & 4194304 | 0) == 0) {
   do {
    if ((i6 & 4096 | 0) == 0) {
     i7 = 5;
    } else {
     if ((HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i4 | 0)) {
      i7 = 5;
      break;
     }
     i8 = HEAP32[i4 + 92 >> 2] | 0;
    }
   } while (0);
   if ((i7 | 0) == 5) {
    i8 = HEAP32[i1 + 16 >> 2] | 0;
   }
   if ((i8 | 0) != 0) {
    if ((HEAP32[i8 + 12 >> 2] & 4194304 | 0) != 0) {
     i7 = 8;
     break;
    }
   }
   i9 = HEAP32[i1 + 16 >> 2] | 0;
  } else {
   i7 = 8;
  }
 } while (0);
 if ((i7 | 0) == 8) {
  i9 = __ZN7WebCore22NodeRenderingTraversal10parentSlowEPKNS_4NodeE(i4) | 0;
 }
 do {
  if ((i9 | 0) != 0) {
   i7 = i9 + 32 | 0;
   if ((HEAP32[i9 + 12 >> 2] & 2048 | 0) == 0) {
    i10 = i7 | 0;
   } else {
    i10 = HEAP32[i7 >> 2] | 0;
   }
   i7 = HEAP32[i10 >> 2] | 0;
   i8 = i7;
   if ((i7 | 0) == 0) {
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 48 >> 2] & 1](i7) | 0)) {
    break;
   }
   if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i9 >> 2] | 0) + 244 >> 2] & 1](i9, i4) | 0)) {
    break;
   }
   i6 = HEAP32[i7 + 36 >> 2] | 0;
   if (!(__ZN7WebCore5StyleL20textRendererIsNeededERKNS_4TextERKNS_12RenderObjectERKNS_11RenderStyleE(i1, i7, i6) | 0)) {
    break;
   }
   __ZN7WebCore4Text18createTextRendererERKNS_11RenderStyleE(i3, i1, i6);
   i11 = i3 | 0;
   if (FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i7 >> 2] | 0) + 624 >> 2] & 1](i8, HEAP32[i11 >> 2] | 0, i6) | 0) {
    i6 = (HEAP32[i11 >> 2] | 0) + 20 | 0;
    HEAP32[i6 >> 2] = HEAP32[i6 >> 2] & -805306369 | HEAP32[i7 + 20 >> 2] & 805306368;
    i6 = __ZN7WebCore5StyleL19nextSiblingRendererERKNS_4TextE(i1) | 0;
    i12 = HEAP32[i11 >> 2] | 0;
    i13 = i12 | 0;
    if ((HEAP32[i5 >> 2] & 2048 | 0) == 0) {
     HEAP32[i1 + 32 >> 2] = i13;
     i14 = i12;
    } else {
     HEAP32[HEAP32[i1 + 32 >> 2] >> 2] = i13;
     i14 = HEAP32[i11 >> 2] | 0;
    }
    i13 = HEAP32[(HEAP32[i7 >> 2] | 0) + 628 >> 2] | 0;
    HEAP32[i11 >> 2] = 0;
    FUNCTION_TABLE_viii[i13 & 1](i8, i14 | 0, i6);
   }
   i6 = HEAP32[i11 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderObject7destroyEv(i6 | 0);
  }
 } while (0);
 HEAP32[i5 >> 2] = HEAP32[i5 >> 2] & -114689;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore5Style11resolveTreeERNS_8DocumentENS0_6ChangeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 if ((i2 | 0) == 4) {
  i7 = 3;
 } else {
  if ((__ZNK7WebCore8Document33shouldDisplaySeamlesslyWithParentEv(i1) | 0) & (i2 | 0) > 1) {
   i7 = 3;
  }
 }
 do {
  if ((i7 | 0) == 3) {
   __ZN7WebCore5Style18resolveForDocumentERKNS_8DocumentE(i4, i1);
   i8 = __ZNK7WebCore8Document8settingsEv(i1) | 0;
   do {
    if ((i8 | 0) != 0) {
     i9 = HEAP32[i1 + 320 >> 2] | 0;
     if ((HEAP8[i8 + 264 | 0] & 4) == 0 | (i9 | 0) == 0) {
      break;
     }
     i10 = __ZNK7WebCore11RenderStyle4fontEv(HEAP32[i4 >> 2] | 0) | 0;
     i11 = HEAP32[i9 + 240 >> 2] | 0;
     i9 = i5 | 0;
     HEAP32[i9 >> 2] = i11;
     if ((i11 | 0) != 0) {
      i12 = i11 + 4 | 0;
      HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
     }
     __ZNK7WebCore4Font6updateEN3WTF10PassRefPtrINS_12FontSelectorEEE(i10, i5);
     i10 = HEAP32[i9 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     i9 = i10 + 4 | 0;
     i10 = i9 | 0;
     i12 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     if ((i12 | 0) != 0) {
      HEAP32[i10 >> 2] = i12;
      break;
     }
     i12 = i9 - 4 | 0;
     if ((i12 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 1](i12);
    }
   } while (0);
   i8 = i4 | 0;
   i12 = HEAP32[i8 >> 2] | 0;
   i9 = i1 + 1584 | 0;
   i10 = HEAP32[(HEAP32[i9 >> 2] | 0) + 36 >> 2] | 0;
   if ((__ZN7WebCore5Style15determineChangeEPKNS_11RenderStyleES3_PNS_8SettingsE(i12, i10, __ZNK7WebCore8Document8settingsEv(i1) | 0) | 0) != 0) {
    i10 = HEAP32[i9 >> 2] | 0;
    HEAP32[i6 >> 2] = HEAP32[i8 >> 2];
    __ZN7WebCore13RenderElement8setStyleEN3WTF7PassRefINS_11RenderStyleEEE(i10, i6);
    break;
   }
   i10 = HEAP32[i8 >> 2] | 0;
   i8 = i10 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i10);
    __ZN3WTF8fastFreeEPv(i10);
    break;
   } else {
    HEAP32[i8 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i1 + 692 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 do {
  if ((i2 | 0) < 2) {
   if ((HEAP32[i6 + 12 >> 2] & 114816 | 0) != 0) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN7WebCore5StyleL11resolveTreeERNS_7ElementENS0_6ChangeE(i6, i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore5StyleL40attachBeforeOrAfterPseudoElementIfNeededERNS_7ElementENS_8PseudoIdE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 if (!(__ZN7WebCore5StyleL18needsPseudeElementERNS_7ElementENS_8PseudoIdE(i1, i2) | 0)) {
  STACKTOP = i3;
  return;
 }
 i7 = __Znwj(60) | 0;
 i8 = i7;
 __ZN7WebCore13PseudoElementC1ERNS_7ElementENS_8PseudoIdE(i8, i1, i2);
 i9 = (i7 | 0) == 0;
 if (!i9) {
  i10 = i7 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 do {
  if ((i2 | 0) == 3) {
   i10 = i4 | 0;
   HEAP32[i10 >> 2] = i8;
   __ZN7WebCore7Element22setBeforePseudoElementEN3WTF10PassRefPtrINS_13PseudoElementEEE(i1, i4);
   i11 = HEAP32[i10 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i10 = i11 + 8 | 0;
   i11 = i10 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  } else {
   i10 = i5 | 0;
   HEAP32[i10 >> 2] = i8;
   __ZN7WebCore7Element21setAfterPseudoElementEN3WTF10PassRefPtrINS_13PseudoElementEEE(i1, i5);
   i12 = HEAP32[i10 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i10 = i12 + 8 | 0;
   i12 = i10 | 0;
   i11 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i5 = i6 | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore5StyleL16attachRenderTreeERNS_7ElementEN3WTF10PassRefPtrINS_11RenderStyleEEE(i7, i6);
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 | 0;
   i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    break;
   } else {
    HEAP32[i5 >> 2] = i1;
    break;
   }
  }
 } while (0);
 if (i9) {
  STACKTOP = i3;
  return;
 }
 i9 = i7 + 8 | 0;
 i6 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 HEAP32[i9 >> 2] = i6;
 if ((i6 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i7 + 16 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore5StyleL16detachRenderTreeERNS_7ElementENS0_10DetachTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE >> 2] = (HEAP32[__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 if ((HEAP32[i5 >> 2] & 1048576 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 536 >> 2] & 1](i1);
 }
 __ZN7WebCore7Element44clearStyleDerivedDataBeforeDetachingRendererEv(i1);
 if ((i2 | 0) != 1) {
  __ZN7WebCore7Element48clearHoverAndActiveStatusBeforeDetachingRendererEv(i1);
 }
 i6 = __ZNK7WebCore7Element10shadowRootEv(i1) | 0;
 if ((i6 | 0) != 0) {
  __ZN7WebCore5StyleL14detachChildrenERNS_13ContainerNodeENS0_10DetachTypeE(i6 | 0, i2);
 }
 __ZN7WebCore5StyleL14detachChildrenERNS_13ContainerNodeENS0_10DetachTypeE(i1 | 0, i2);
 i2 = HEAP32[i5 >> 2] | 0;
 i6 = (i2 & 2048 | 0) == 0;
 i7 = i1 + 32 | 0;
 if (i6) {
  i8 = i7 | 0;
 } else {
  i8 = HEAP32[i7 >> 2] | 0;
 }
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  i9 = i2;
 } else {
  if (i6) {
   i10 = i7 | 0;
  } else {
   i10 = HEAP32[i7 >> 2] | 0;
  }
  __ZN7WebCore12RenderObject34destroyAndCleanupAnonymousWrappersEv(HEAP32[i10 >> 2] | 0);
  i9 = HEAP32[i5 >> 2] | 0;
 }
 if ((i9 & 2048 | 0) == 0) {
  HEAP32[i1 + 32 >> 2] = 0;
  i11 = i9;
 } else {
  HEAP32[HEAP32[i7 >> 2] >> 2] = 0;
  i11 = HEAP32[i5 >> 2] | 0;
 }
 if ((i11 & 1048576 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 540 >> 2] & 1](i1);
 }
 i1 = HEAP32[__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE >> 2] | 0;
 if ((i1 | 0) != 1) {
  i12 = i1;
  i13 = i12 - 1 | 0;
  HEAP32[__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE >> 2] = i13;
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope11moveWidgetsEv(i4);
 i12 = HEAP32[__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE >> 2] | 0;
 i13 = i12 - 1 | 0;
 HEAP32[__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE >> 2] = i13;
 STACKTOP = i3;
 return;
}
function __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 + 76 | 0;
 i2 = i3;
 if ((HEAP8[i2 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 100 | 0);
 }
 if ((HEAP8[i2 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 92 | 0);
 }
 if ((HEAP8[i2 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 84 | 0);
 }
 if ((HEAP8[i2 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
 }
 i3 = i1 + 44 | 0;
 i2 = i3;
 if ((HEAP8[i2 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 68 | 0);
 }
 if ((HEAP8[i2 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 60 | 0);
 }
 if ((HEAP8[i2 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i2 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
 }
 i3 = i1 + 12 | 0;
 i2 = i3;
 if ((HEAP8[i2 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i2 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i2 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i2 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
 }
 i3 = HEAP32[i1 + 8 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore5StyleL18needsPseudeElementERNS_7ElementENS_8PseudoIdE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 do {
  if ((HEAP8[i4 + 916 | 0] & 1) == 0) {
   if ((HEAP8[i4 + 917 | 0] & 1) == 0) {
    i5 = 0;
   } else {
    break;
   }
   return i5 | 0;
  }
 } while (0);
 i4 = i1 + 12 | 0;
 i6 = (HEAP32[i4 >> 2] & 2048 | 0) == 0;
 i7 = i1 + 32 | 0;
 if (i6) {
  i8 = i7 | 0;
 } else {
  i8 = HEAP32[i7 >> 2] | 0;
 }
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 if (i6) {
  i9 = i7 | 0;
 } else {
  i9 = HEAP32[i7 >> 2] | 0;
 }
 i6 = HEAP32[i9 >> 2] | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 52 >> 2] & 1](i6) | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 & 1048580 | 0) == 1048580) {
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 232 >> 2] & 1](i3) | 0) == 0) {
    i10 = HEAP32[i4 >> 2] | 0;
    break;
   } else {
    i5 = 0;
    return i5 | 0;
   }
  } else {
   i10 = i6;
  }
 } while (0);
 if ((i10 & 2048 | 0) == 0) {
  i11 = i7 | 0;
 } else {
  i11 = HEAP32[i7 >> 2] | 0;
 }
 i7 = __ZNK7WebCore12RenderObject20getCachedPseudoStyleENS_8PseudoIdEPNS_11RenderStyleE(HEAP32[i11 >> 2] | 0, i2, 0) | 0;
 if ((i7 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 if ((HEAP32[i7 + 48 >> 2] & 31 | 0) == 22) {
  i5 = 0;
  return i5 | 0;
 }
 i2 = HEAP32[i7 + 20 >> 2] | 0;
 if ((HEAP32[i2 + 88 >> 2] | 0) != 0) {
  i5 = 1;
  return i5 | 0;
 }
 i5 = (HEAP32[i2 + 288 >> 2] | 0) != 0;
 return i5 | 0;
}
function __ZN7WebCore17StyleSurroundDataD2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10BorderDataD2Ev(i1 + 100 | 0);
 if ((HEAP8[i1 + 97 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 92 | 0);
 }
 if ((HEAP8[i1 + 89 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 84 | 0);
 }
 if ((HEAP8[i1 + 81 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 76 | 0);
 }
 if ((HEAP8[i1 + 73 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 68 | 0);
 }
 if ((HEAP8[i1 + 65 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 60 | 0);
 }
 if ((HEAP8[i1 + 57 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i1 + 49 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 44 | 0);
 }
 if ((HEAP8[i1 + 41 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i1 + 33 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i1 + 25 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i1 + 17 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 12 | 0);
 }
 if ((HEAP8[i1 + 9 | 0] | 0) != 10) {
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 4 | 0);
 return;
}
function __ZN7WebCore5StyleL15updateTextStyleERNS_4TextE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 12 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 + 32 | 0;
 if ((i5 & 2048 | 0) == 0) {
  i7 = i6 | 0;
 } else {
  i7 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i7 >> 2] | 0;
 i7 = i6;
 if ((i5 & 114688 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 do {
  if ((i6 | 0) == 0) {
   __ZN7WebCore5StyleL18attachTextRendererERNS_4TextE(i1);
   __ZN7WebCore5StyleL65reattachTextRenderersForWhitespaceOnlySiblingsAfterAttachIfNeededERNS_4NodeE(i1 | 0);
  } else {
   i5 = HEAP32[(HEAP32[i6 >> 2] | 0) + 644 >> 2] | 0;
   i8 = HEAP32[i1 + 36 >> 2] | 0;
   i9 = i3 | 0;
   HEAP32[i9 >> 2] = i8;
   if ((i8 | 0) != 0) {
    i10 = i8 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   }
   FUNCTION_TABLE_viii[i5 & 1](i7, i3, 0);
   i5 = HEAP32[i9 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i9 = i5 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    break;
   }
  }
 } while (0);
 HEAP32[i4 >> 2] = HEAP32[i4 >> 2] & -114689;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore10BorderDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((HEAP8[i1 + 97 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 92 | 0);
 }
 if ((HEAP8[i1 + 89 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 84 | 0);
 }
 if ((HEAP8[i1 + 81 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 76 | 0);
 }
 if ((HEAP8[i1 + 73 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 68 | 0);
 }
 if ((HEAP8[i1 + 65 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 60 | 0);
 }
 if ((HEAP8[i1 + 57 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i1 + 49 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 44 | 0);
 }
 if ((HEAP8[i1 + 41 | 0] | 0) != 10) {
  i2 = i1 + 32 | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  i4 = i3 | 0;
  __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i4);
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 i2 = i1 + 32 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i3 | 0;
 __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i4);
 return;
}
function __ZN7WebCore12StyleBoxDataD2Ev(i1) {
 i1 = i1 | 0;
 if ((HEAP8[i1 + 57 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i1 + 49 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 44 | 0);
 }
 if ((HEAP8[i1 + 41 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i1 + 33 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i1 + 25 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i1 + 17 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 12 | 0);
 }
 if ((HEAP8[i1 + 9 | 0] | 0) != 10) {
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 4 | 0);
 return;
}
function __ZN7WebCore5Style18detachTextRendererERNS_4TextE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = (i3 & 2048 | 0) == 0;
 i5 = i1 + 32 | 0;
 if (i4) {
  i6 = i5 | 0;
 } else {
  i6 = HEAP32[i5 >> 2] | 0;
 }
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  i7 = i3;
 } else {
  if (i4) {
   i8 = i5 | 0;
  } else {
   i8 = HEAP32[i5 >> 2] | 0;
  }
  __ZN7WebCore12RenderObject34destroyAndCleanupAnonymousWrappersEv(HEAP32[i8 >> 2] | 0);
  i7 = HEAP32[i2 >> 2] | 0;
 }
 if ((i7 & 2048 | 0) == 0) {
  HEAP32[i1 + 32 >> 2] = 0;
  return;
 } else {
  HEAP32[HEAP32[i5 >> 2] >> 2] = 0;
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
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore5Style16detachRenderTreeERNS_7ElementE(i1) {
 i1 = i1 | 0;
 __ZN7WebCore5StyleL16detachRenderTreeERNS_7ElementENS0_10DetachTypeE(i1, 0);
 return;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0) | 0;
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
 return 0;
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
}
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
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
function b5() {
 abort(5);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2];
  var FUNCTION_TABLE_iiii = [b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE": __ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore5StyleL16detachRenderTreeERNS_7ElementENS0_10DetachTypeE","_strlen","__ZN7WebCore5StyleL16attachRenderTreeERNS_7ElementEN3WTF10PassRefPtrINS_11RenderStyleEEE","__ZN7WebCore5StyleL40attachBeforeOrAfterPseudoElementIfNeededERNS_7ElementENS_8PseudoIdE","__ZN7WebCore5Style36updateTextRendererAfterContentChangeERNS_4TextEjj","__ZN7WebCore5StyleL14detachChildrenERNS_13ContainerNodeENS0_10DetachTypeE","__ZN7WebCore5Style15determineChangeEPKNS_11RenderStyleES3_PNS_8SettingsE","__ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv","_memset","__ZN7WebCore5StyleL19nextSiblingRendererERKNS_4TextE","__ZN7WebCore5StyleL18needsPseudeElementERNS_7ElementENS_8PseudoIdE","__ZN7WebCore5StyleL65reattachTextRenderersForWhitespaceOnlySiblingsAfterAttachIfNeededERNS_4NodeE","__ZN7WebCore5StyleL11resolveTreeERNS_7ElementENS0_6ChangeE","__ZN7WebCore12StyleBoxDataD2Ev","__ZN7WebCore5StyleL15updateTextStyleERNS_4TextE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore11RenderStyleD2Ev","__ZN7WebCore5Style11resolveTreeERNS_8DocumentENS0_6ChangeE","__ZN7WebCore5Style16detachRenderTreeERNS_7ElementE","__ZN7WebCore10BorderDataD2Ev","__ZN7WebCore5StyleL20textRendererIsNeededERKNS_4TextERKNS_12RenderObjectERKNS_11RenderStyleE","_memcpy","__ZN7WebCore5Style18detachTextRendererERNS_4TextE","__ZN7WebCore5StyleL18attachTextRendererERNS_4TextE","__ZN7WebCore17StyleSurroundDataD2Ev","__ZN7WebCore5StyleL14attachChildrenERNS_13ContainerNodeE"]

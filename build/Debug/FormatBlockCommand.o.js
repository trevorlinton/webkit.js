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
H_BASE = parentModule["_malloc"](104 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 104;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore18FormatBlockCommandC1ERNS_8DocumentERKNS_13QualifiedNameE;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore9HTMLNames5h2TagE=env.__ZN7WebCore9HTMLNames5h2TagE|0;
  var __ZN7WebCore9HTMLNames4pTagE=env.__ZN7WebCore9HTMLNames4pTagE|0;
  var __ZN7WebCore9HTMLNames6preTagE=env.__ZN7WebCore9HTMLNames6preTagE|0;
  var __ZN7WebCore9HTMLNames6navTagE=env.__ZN7WebCore9HTMLNames6navTagE|0;
  var __ZN7WebCore9HTMLNames5h1TagE=env.__ZN7WebCore9HTMLNames5h1TagE|0;
  var __ZN7WebCore9HTMLNames7bodyTagE=env.__ZN7WebCore9HTMLNames7bodyTagE|0;
  var __ZN7WebCore9HTMLNames5h4TagE=env.__ZN7WebCore9HTMLNames5h4TagE|0;
  var __ZN7WebCore9HTMLNames10sectionTagE=env.__ZN7WebCore9HTMLNames10sectionTagE|0;
  var __ZN7WebCore9HTMLNames5h5TagE=env.__ZN7WebCore9HTMLNames5h5TagE|0;
  var __ZTVN7WebCore24ApplyBlockElementCommandE=env.__ZTVN7WebCore24ApplyBlockElementCommandE|0;
  var __ZN7WebCore9HTMLNames7mainTagE=env.__ZN7WebCore9HTMLNames7mainTagE|0;
  var __ZN7WebCore9HTMLNames10addressTagE=env.__ZN7WebCore9HTMLNames10addressTagE|0;
  var __ZN7WebCore9HTMLNames5dtTagE=env.__ZN7WebCore9HTMLNames5dtTagE|0;
  var __ZN7WebCore9HTMLNames8asideTagE=env.__ZN7WebCore9HTMLNames8asideTagE|0;
  var __ZN7WebCore9HTMLNames9footerTagE=env.__ZN7WebCore9HTMLNames9footerTagE|0;
  var __ZN7WebCore9HTMLNames5ddTagE=env.__ZN7WebCore9HTMLNames5ddTagE|0;
  var __ZN7WebCore9HTMLNames9hgroupTagE=env.__ZN7WebCore9HTMLNames9hgroupTagE|0;
  var __ZN7WebCore9HTMLNames9headerTagE=env.__ZN7WebCore9HTMLNames9headerTagE|0;
  var __ZN7WebCore9HTMLNames5h3TagE=env.__ZN7WebCore9HTMLNames5h3TagE|0;
  var __ZN7WebCore9HTMLNames6divTagE=env.__ZN7WebCore9HTMLNames6divTagE|0;
  var __ZN7WebCore9HTMLNames13blockquoteTagE=env.__ZN7WebCore9HTMLNames13blockquoteTagE|0;
  var __ZN7WebCore9HTMLNames5h6TagE=env.__ZN7WebCore9HTMLNames5h6TagE|0;
  var __ZN7WebCore9HTMLNames10articleTagE=env.__ZN7WebCore9HTMLNames10articleTagE|0;
  var __ZN7WebCore9HTMLNames5dlTagE=env.__ZN7WebCore9HTMLNames5dlTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore18FormatBlockCommandE=(H_BASE+8)|0;
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
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore18FormatBlockCommand11formatRangeERKNS_8PositionES3_S3_RN3WTF6RefPtrINS_7ElementEEE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 272 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 40 | 0;
 i12 = i6 + 56 | 0;
 i13 = i6 + 72 | 0;
 i14 = i6 + 88 | 0;
 i15 = i6 + 104 | 0;
 i16 = i6 + 120 | 0;
 i17 = i6 + 136 | 0;
 i18 = i6 + 144 | 0;
 i19 = i6 + 152 | 0;
 i20 = i6 + 160 | 0;
 i21 = i6 + 168 | 0;
 i22 = i6 + 184 | 0;
 i23 = i6 + 200 | 0;
 i24 = i6 + 216 | 0;
 i25 = i6 + 232 | 0;
 i26 = i6 + 248 | 0;
 i27 = i6 + 264 | 0;
 i28 = i2 | 0;
 i29 = HEAP32[i28 >> 2] | 0;
 i30 = i29;
 i31 = i29;
 L1 : while (1) {
  if ((i30 | 0) == 0) {
   i32 = i31;
   break;
  }
  if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i30, 0, 1) | 0)) {
   i32 = i31;
   break;
  }
  if (__ZN7WebCore11isTableCellEPKNS_4NodeE(i30) | 0) {
   i32 = i30;
   break;
  }
  i29 = i30 + 12 | 0;
  do {
   if ((HEAP32[i29 >> 2] & 4 | 0) != 0) {
    i33 = HEAP32[i30 + 44 >> 2] | 0;
    i34 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
    if ((i33 | 0) == (i34 | 0)) {
     i32 = i30;
     break L1;
    }
    if ((HEAP32[i33 + 12 >> 2] | 0) != (HEAP32[i34 + 12 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i33 + 16 >> 2] | 0) == (HEAP32[i34 + 16 >> 2] | 0)) {
     i32 = i30;
     break L1;
    }
   }
  } while (0);
  i35 = i30 + 16 | 0;
  i34 = HEAP32[i35 >> 2] | 0;
  if ((i34 | 0) == 0) {
   i32 = i30;
   break;
  }
  if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i34 | 0, 0, 1) | 0)) {
   i32 = i30;
   break;
  }
  if ((HEAP32[i29 >> 2] & 4 | 0) != 0) {
   if (__ZN7WebCoreL23isElementForFormatBlockERKNS_13QualifiedNameE(i30 + 44 | 0) | 0) {
    i32 = i30;
    break;
   }
  }
  i34 = __ZN7WebCore7isBlockEPKNS_4NodeE(i30) | 0;
  i33 = i34 ? i30 : i31;
  i34 = __ZN7WebCore13isListElementEPNS_4NodeE(i30) | 0;
  i36 = HEAP32[i35 >> 2] | 0;
  if (i34) {
   i37 = 14;
   break;
  } else {
   i30 = i36;
   i31 = i33;
  }
 }
 do {
  if ((i37 | 0) == 14) {
   if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i36, 0, 1) | 0)) {
    i32 = i30;
    break;
   }
   i32 = HEAP32[i35 >> 2] | 0;
  }
 } while (0);
 i35 = HEAP32[i28 >> 2] | 0;
 if ((i35 | 0) == (i32 | 0)) {
  i28 = i8 | 0;
  HEAP32[i28 >> 2] = i32;
  if ((i32 | 0) == 0) {
   i38 = 0;
  } else {
   i30 = i32 + 8 | 0;
   HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
   i38 = HEAP32[i28 >> 2] | 0;
  }
  HEAP32[i28 >> 2] = 0;
  i39 = i38;
 } else {
  __ZN7WebCore20CompositeEditCommand15splitTreeToNodeEPNS_4NodeES2_b(i8, i1 | 0, i35, i32, 0);
  i32 = i8 | 0;
  i8 = HEAP32[i32 >> 2] | 0;
  HEAP32[i32 >> 2] = 0;
  i39 = i8;
 }
 i8 = (i39 | 0) == 0;
 if (!i8) {
  i32 = i39 + 8 | 0;
  HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
 }
 __ZN7WebCore5Range6createERNS_8DocumentERKNS_8PositionES5_(i9, HEAP32[i1 + 8 >> 2] | 0, i2, i4);
 i4 = i9 | 0;
 i9 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i10, i3, 1);
 i4 = __ZN7WebCore25enclosingBlockFlowElementERKNS_15VisiblePositionE(i10) | 0;
 i32 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i32 | 0) != 0) {
   i10 = i32 + 8 | 0;
   i35 = i10 | 0;
   i38 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
   HEAP32[i35 >> 2] = i38;
   if ((i38 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i32 = __ZN7WebCore23editableRootForPositionERKNS_8PositionENS_12EditableTypeE(i2, 0) | 0;
 L35 : do {
  if ((i32 | 0) == 0 | (i4 | 0) == 0) {
   i40 = i39;
   i41 = i39;
  } else {
   L37 : do {
    if (__ZN7WebCoreL23isElementForFormatBlockERKNS_13QualifiedNameE(i4 + 44 | 0) | 0) {
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i11, i2, 1);
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i13, i2, 1);
     __ZN7WebCore12startOfBlockERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i12, i13, 1);
     do {
      if (__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i11, i12) | 0) {
       __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i14, i3, 1);
       __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i16, i3, 1);
       __ZN7WebCore10endOfBlockERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i15, i16, 1);
       do {
        if (__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i14, i15) | 0) {
         if ((i4 | 0) == (i32 | 0)) {
          i42 = 0;
          break;
         }
         i43 = i4 | 0;
         i37 = 34;
        } else {
         i10 = i4 | 0;
         if ((i4 | 0) == (i32 | 0) | (__ZN7WebCore28isNodeVisiblyContainedWithinEPNS_4NodeEPKNS_5RangeE(i10, i9) | 0) ^ 1) {
          i42 = 0;
         } else {
          i43 = i10;
          i37 = 34;
         }
        }
       } while (0);
       if ((i37 | 0) == 34) {
        i42 = (__ZNK7WebCore4Node14isDescendantOfEPKS0_(i32 | 0, i43) | 0) ^ 1;
       }
       i10 = HEAP32[i15 >> 2] | 0;
       do {
        if ((i10 | 0) != 0) {
         i38 = i10 + 8 | 0;
         i35 = i38 | 0;
         i28 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
         HEAP32[i35 >> 2] = i28;
         if ((i28 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
        }
       } while (0);
       i10 = HEAP32[i16 >> 2] | 0;
       do {
        if ((i10 | 0) != 0) {
         i38 = i10 + 8 | 0;
         i28 = i38 | 0;
         i35 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
         HEAP32[i28 >> 2] = i35;
         if ((i35 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
        }
       } while (0);
       i10 = HEAP32[i14 >> 2] | 0;
       if ((i10 | 0) == 0) {
        i44 = i42;
        break;
       }
       i38 = i10 + 8 | 0;
       i10 = i38 | 0;
       i35 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
       HEAP32[i10 >> 2] = i35;
       if ((i35 | 0) >= 1) {
        i44 = i42;
        break;
       }
       if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
        i44 = i42;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
       i44 = i42;
      } else {
       i44 = 0;
      }
     } while (0);
     i38 = HEAP32[i12 >> 2] | 0;
     do {
      if ((i38 | 0) != 0) {
       i35 = i38 + 8 | 0;
       i10 = i35 | 0;
       i28 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
       HEAP32[i10 >> 2] = i28;
       if ((i28 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
      }
     } while (0);
     i38 = HEAP32[i13 >> 2] | 0;
     do {
      if ((i38 | 0) != 0) {
       i35 = i38 + 8 | 0;
       i28 = i35 | 0;
       i10 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
       HEAP32[i28 >> 2] = i10;
       if ((i10 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
      }
     } while (0);
     i38 = HEAP32[i11 >> 2] | 0;
     do {
      if ((i38 | 0) == 0) {
       i37 = 59;
      } else {
       i35 = i38 + 8 | 0;
       i10 = i35 | 0;
       i28 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
       HEAP32[i10 >> 2] = i28;
       if ((i28 | 0) >= 1) {
        i37 = 59;
        break;
       }
       if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
        i37 = 59;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
       if (!i44) {
        i45 = i39;
        i46 = i39;
        break L37;
       }
      }
     } while (0);
     if ((i37 | 0) == 59) {
      if (!i44) {
       i45 = i39;
       i46 = i39;
       break;
      }
     }
     i38 = i17 | 0;
     i35 = HEAP32[i1 + 152 >> 2] | 0;
     HEAP32[i38 >> 2] = i35;
     i28 = i35 | 0;
     HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
     i28 = HEAP32[i4 + 44 >> 2] | 0;
     i35 = HEAP32[i38 >> 2] | 0;
     if ((i28 | 0) == (i35 | 0)) {
      __ZN7WebCore13QualifiedNameD1Ev(i17);
      i40 = i39;
      i41 = i39;
      break L35;
     }
     if ((HEAP32[i28 + 12 >> 2] | 0) == (HEAP32[i35 + 12 >> 2] | 0)) {
      i38 = (HEAP32[i28 + 16 >> 2] | 0) == (HEAP32[i35 + 16 >> 2] | 0);
      __ZN7WebCore13QualifiedNameD1Ev(i17);
      if (i38) {
       i40 = i39;
       i41 = i39;
       break L35;
      }
     } else {
      __ZN7WebCore13QualifiedNameD1Ev(i17);
     }
     i38 = i4 | 0;
     i35 = i4 + 8 | 0;
     HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 1;
     if (i8) {
      i45 = i38;
      i46 = 0;
      break;
     }
     i35 = i39 + 8 | 0;
     i28 = i35 | 0;
     i10 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     HEAP32[i28 >> 2] = i10;
     if ((i10 | 0) >= 1) {
      i45 = i38;
      i46 = i39;
      break;
     }
     if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
      i45 = i38;
      i46 = i39;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
     i45 = i38;
     i46 = i39;
    } else {
     i45 = i39;
     i46 = i39;
    }
   } while (0);
   i29 = i5 | 0;
   do {
    if ((HEAP32[i29 >> 2] | 0) == 0) {
     __ZN7WebCore24ApplyBlockElementCommand18createBlockElementEv(i18, i1 | 0);
     i38 = i18 | 0;
     i35 = HEAP32[i38 >> 2] | 0;
     HEAP32[i38 >> 2] = 0;
     i10 = HEAP32[i29 >> 2] | 0;
     HEAP32[i29 >> 2] = i35;
     do {
      if ((i10 | 0) != 0) {
       i35 = i10 + 8 | 0;
       i28 = i35 | 0;
       i30 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
       HEAP32[i28 >> 2] = i30;
       if ((i30 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
      }
     } while (0);
     i10 = HEAP32[i38 >> 2] | 0;
     do {
      if ((i10 | 0) != 0) {
       i35 = i10 + 8 | 0;
       i30 = i35 | 0;
       i28 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
       HEAP32[i30 >> 2] = i28;
       if ((i28 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
      }
     } while (0);
     i10 = i19 | 0;
     i38 = HEAP32[i29 >> 2] | 0;
     HEAP32[i10 >> 2] = i38;
     if ((i38 | 0) != 0) {
      i35 = i38 + 8 | 0;
      HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 1;
     }
     i35 = i20 | 0;
     HEAP32[i35 >> 2] = i45;
     if ((i45 | 0) != 0) {
      i38 = i45 + 8 | 0;
      HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 1;
     }
     __ZN7WebCore20CompositeEditCommand16insertNodeBeforeEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE(i1 | 0, i19, i20, 1);
     i38 = HEAP32[i35 >> 2] | 0;
     do {
      if ((i38 | 0) != 0) {
       i35 = i38 + 8 | 0;
       i28 = i35 | 0;
       i30 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
       HEAP32[i28 >> 2] = i30;
       if ((i30 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
      }
     } while (0);
     i38 = HEAP32[i10 >> 2] | 0;
     if ((i38 | 0) == 0) {
      break;
     }
     i35 = i38 + 8 | 0;
     i38 = i35 | 0;
     i30 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
     HEAP32[i38 >> 2] = i30;
     if ((i30 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
    }
   } while (0);
   i35 = HEAP32[(HEAP32[i29 >> 2] | 0) + 40 >> 2] | 0;
   do {
    if ((i35 | 0) == 0) {
     HEAP32[i21 >> 2] = 0;
     HEAP32[i21 + 4 >> 2] = 0;
     i30 = i21 + 8 | 0;
     i38 = i30;
     i28 = HEAP32[i38 >> 2] | 0;
     HEAP32[i38 >> 2] = i28 & -8;
     HEAP8[i30] = i28 & 255 & -16;
    } else {
     i28 = i7 | 0;
     HEAP32[i28 >> 2] = i35;
     i30 = i35 + 8 | 0;
     HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i21, i7, 2);
     i30 = HEAP32[i28 >> 2] | 0;
     if ((i30 | 0) == 0) {
      break;
     }
     i28 = i30 + 8 | 0;
     i30 = i28 | 0;
     i38 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
     HEAP32[i30 >> 2] = i38;
     if ((i38 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i22, i21, 1);
   i35 = __ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i22, 1) | 0;
   i28 = HEAP32[i22 >> 2] | 0;
   do {
    if ((i28 | 0) != 0) {
     i38 = i28 + 8 | 0;
     i30 = i38 | 0;
     i36 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
     HEAP32[i30 >> 2] = i36;
     if ((i36 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
    }
   } while (0);
   i28 = i1 | 0;
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i23, i2, 1);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i24, i3, 1);
   __ZN7WebCore20CompositeEditCommand23moveParagraphWithClonesERKNS_15VisiblePositionES3_PNS_7ElementEPNS_4NodeE(i28, i23, i24, HEAP32[i29 >> 2] | 0, i46);
   i38 = HEAP32[i24 >> 2] | 0;
   do {
    if ((i38 | 0) != 0) {
     i36 = i38 + 8 | 0;
     i30 = i36 | 0;
     i31 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
     HEAP32[i30 >> 2] = i31;
     if ((i31 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i36 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i36 - 8 | 0);
    }
   } while (0);
   i38 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i38 | 0) != 0) {
     i29 = i38 + 8 | 0;
     i36 = i29 | 0;
     i31 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
     HEAP32[i36 >> 2] = i31;
     if ((i31 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
    }
   } while (0);
   L139 : do {
    if (i35) {
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i25, i21, 1);
     do {
      if (__ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i25, 1) | 0) {
       i47 = 0;
      } else {
       __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i26, i21, 1);
       i38 = (__ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i26, 1) | 0) ^ 1;
       i29 = HEAP32[i26 >> 2] | 0;
       if ((i29 | 0) == 0) {
        i47 = i38;
        break;
       }
       i31 = i29 + 8 | 0;
       i29 = i31 | 0;
       i36 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
       HEAP32[i29 >> 2] = i36;
       if ((i36 | 0) >= 1) {
        i47 = i38;
        break;
       }
       if ((HEAP32[i31 + 8 >> 2] | 0) != 0) {
        i47 = i38;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i31 - 8 | 0);
       i47 = i38;
      }
     } while (0);
     i10 = HEAP32[i25 >> 2] | 0;
     do {
      if ((i10 | 0) == 0) {
       i37 = 118;
      } else {
       i38 = i10 + 8 | 0;
       i31 = i38 | 0;
       i36 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
       HEAP32[i31 >> 2] = i36;
       if ((i36 | 0) >= 1) {
        i37 = 118;
        break;
       }
       if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
        i37 = 118;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
       if (!i47) {
        break L139;
       }
      }
     } while (0);
     if ((i37 | 0) == 118) {
      if (!i47) {
       break;
      }
     }
     __ZN7WebCore20CompositeEditCommand22insertBlockPlaceholderERKNS_8PositionE(i27, i28, i21);
     i10 = HEAP32[i27 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     i38 = i10 + 8 | 0;
     i10 = i38 | 0;
     i36 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     HEAP32[i10 >> 2] = i36;
     if ((i36 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
    }
   } while (0);
   i28 = HEAP32[i21 >> 2] | 0;
   if ((i28 | 0) == 0) {
    i40 = i45;
    i41 = i46;
    break;
   }
   i35 = i28 + 8 | 0;
   i28 = i35 | 0;
   i38 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
   HEAP32[i28 >> 2] = i38;
   if ((i38 | 0) >= 1) {
    i40 = i45;
    i41 = i46;
    break;
   }
   if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
    i40 = i45;
    i41 = i46;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
   i40 = i45;
   i41 = i46;
  }
 } while (0);
 do {
  if ((i9 | 0) != 0) {
   i46 = i9 | 0;
   i45 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
   if ((i45 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i9);
    __ZN3WTF8fastFreeEPv(i9);
    break;
   } else {
    HEAP32[i46 >> 2] = i45;
    break;
   }
  }
 } while (0);
 do {
  if ((i40 | 0) != 0) {
   i9 = i40 + 8 | 0;
   i45 = i9 | 0;
   i46 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
   HEAP32[i45 >> 2] = i46;
   if ((i46 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 if (i8) {
  STACKTOP = i6;
  return;
 }
 i8 = i41 + 8 | 0;
 i41 = i8 | 0;
 i40 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
 HEAP32[i41 >> 2] = i40;
 if ((i40 | 0) >= 1) {
  STACKTOP = i6;
  return;
 }
 if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
 STACKTOP = i6;
 return;
}
function __ZN7WebCoreL23isElementForFormatBlockERKNS_13QualifiedNameE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 352 | 0;
 if (HEAP8[H_BASE + 96 | 0] | 0) {
  i3 = HEAP32[H_BASE + 104 >> 2] | 0;
 } else {
  i4 = __ZN3WTF10fastMallocEj(20) | 0;
  i5 = i4;
  _memset(i4 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 104 >> 2] = i5;
  HEAP8[H_BASE + 96 | 0] = 1;
  i3 = i5;
 }
 if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 | 0, i3 | 0, __ZN7WebCore9HTMLNames10addressTagE, __ZN7WebCore9HTMLNames10addressTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 16 | 0, HEAP32[H_BASE + 104 >> 2] | 0, __ZN7WebCore9HTMLNames10articleTagE, __ZN7WebCore9HTMLNames10articleTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 32 | 0, HEAP32[H_BASE + 104 >> 2] | 0, __ZN7WebCore9HTMLNames8asideTagE, __ZN7WebCore9HTMLNames8asideTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 48 | 0, HEAP32[H_BASE + 104 >> 2] | 0, __ZN7WebCore9HTMLNames13blockquoteTagE, __ZN7WebCore9HTMLNames13blockquoteTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 64 | 0, HEAP32[H_BASE + 104 >> 2] | 0, __ZN7WebCore9HTMLNames5ddTagE, __ZN7WebCore9HTMLNames5ddTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 80 | 0, HEAP32[H_BASE + 104 >> 2] | 0, __ZN7WebCore9HTMLNames6divTagE, __ZN7WebCore9HTMLNames6divTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 96 | 0, HEAP32[H_BASE + 104 >> 2] | 0, __ZN7WebCore9HTMLNames5dlTagE, __ZN7WebCore9HTMLNames5dlTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 112 | 0, HEAP32[H_BASE + 104 >> 2] | 0, __ZN7WebCore9HTMLNames5dtTagE, __ZN7WebCore9HTMLNames5dtTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 128 | 0, HEAP32[H_BASE + 104 >> 2] | 0, __ZN7WebCore9HTMLNames9footerTagE, __ZN7WebCore9HTMLNames9footerTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 144 | 0, HEAP32[H_BASE + 104 >> 2] | 0, __ZN7WebCore9HTMLNames5h1TagE, __ZN7WebCore9HTMLNames5h1TagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 160 | 0, HEAP32[H_BASE + 104 >> 2] | 0, __ZN7WebCore9HTMLNames5h2TagE, __ZN7WebCore9HTMLNames5h2TagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 176 | 0, HEAP32[H_BASE + 104 >> 2] | 0, __ZN7WebCore9HTMLNames5h3TagE, __ZN7WebCore9HTMLNames5h3TagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 192 | 0, HEAP32[H_BASE + 104 >> 2] | 0, __ZN7WebCore9HTMLNames5h4TagE, __ZN7WebCore9HTMLNames5h4TagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 208 | 0, HEAP32[H_BASE + 104 >> 2] | 0, __ZN7WebCore9HTMLNames5h5TagE, __ZN7WebCore9HTMLNames5h5TagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 224 | 0, HEAP32[H_BASE + 104 >> 2] | 0, __ZN7WebCore9HTMLNames5h6TagE, __ZN7WebCore9HTMLNames5h6TagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 240 | 0, HEAP32[H_BASE + 104 >> 2] | 0, __ZN7WebCore9HTMLNames9headerTagE, __ZN7WebCore9HTMLNames9headerTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 256 | 0, HEAP32[H_BASE + 104 >> 2] | 0, __ZN7WebCore9HTMLNames9hgroupTagE, __ZN7WebCore9HTMLNames9hgroupTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 272 | 0, HEAP32[H_BASE + 104 >> 2] | 0, __ZN7WebCore9HTMLNames7mainTagE, __ZN7WebCore9HTMLNames7mainTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 288 | 0, HEAP32[H_BASE + 104 >> 2] | 0, __ZN7WebCore9HTMLNames6navTagE, __ZN7WebCore9HTMLNames6navTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 304 | 0, HEAP32[H_BASE + 104 >> 2] | 0, __ZN7WebCore9HTMLNames4pTagE, __ZN7WebCore9HTMLNames4pTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 320 | 0, HEAP32[H_BASE + 104 >> 2] | 0, __ZN7WebCore9HTMLNames6preTagE, __ZN7WebCore9HTMLNames6preTagE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i2 + 336 | 0, HEAP32[H_BASE + 104 >> 2] | 0, __ZN7WebCore9HTMLNames10sectionTagE, __ZN7WebCore9HTMLNames10sectionTagE);
  i6 = HEAP32[H_BASE + 104 >> 2] | 0;
 } else {
  i6 = i3;
 }
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i7 = (__ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E6lookupINS_22IdentityHashTranslatorIS4_EES2_EEPS2_RKT0_(i6 | 0, i1) | 0) != 0;
 STACKTOP = i2;
 return i7 | 0;
}
function __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
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
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E6rehashEiPS2_(i2, i10, 0) | 0;
  i12 = HEAP32[i7 >> 2] | 0;
 } else {
  i12 = i8;
 }
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 i11 = i3 + 4 | 0;
 i9 = HEAP32[i11 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i13 = __ZNK7WebCore13QualifiedName17QualifiedNameImpl11computeHashEv(i3) | 0;
  HEAP32[i11 >> 2] = i13;
  i14 = i13;
 } else {
  i14 = i9;
 }
 i9 = i14 & i8;
 i13 = i12 + (i9 << 2) | 0;
 i11 = i6 | 0;
 i3 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
 HEAP32[i11 >> 2] = i3;
 i15 = i3 | 0;
 HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 i15 = i13 | 0;
 i3 = (HEAP32[i15 >> 2] | 0) == (HEAP32[i11 >> 2] | 0);
 __ZN7WebCore13QualifiedNameD1Ev(i6);
 do {
  if (i3) {
   i16 = i13;
   i17 = 14;
  } else {
   i18 = (i14 >>> 23) + ~i14 | 0;
   i19 = i18 << 12 ^ i18;
   i18 = i19 >>> 7 ^ i19;
   i19 = i18 << 2 ^ i18;
   i18 = i19 >>> 20 ^ i19 | 1;
   i19 = 0;
   i20 = 0;
   i21 = i9;
   i22 = i13;
   i23 = i15;
   while (1) {
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == -1) {
     i25 = i22;
    } else {
     if ((i24 | 0) == (HEAP32[i10 >> 2] | 0)) {
      i17 = 11;
      break;
     } else {
      i25 = i20;
     }
    }
    i24 = (i19 | 0) == 0 ? i18 : i19;
    i26 = i24 + i21 & i8;
    i27 = i12 + (i26 << 2) | 0;
    i28 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
    HEAP32[i11 >> 2] = i28;
    i29 = i28 | 0;
    HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
    i29 = i27 | 0;
    i28 = (HEAP32[i29 >> 2] | 0) == (HEAP32[i11 >> 2] | 0);
    __ZN7WebCore13QualifiedNameD1Ev(i6);
    if (i28) {
     i17 = 13;
     break;
    } else {
     i19 = i24;
     i20 = i25;
     i21 = i26;
     i22 = i27;
     i23 = i29;
    }
   }
   if ((i17 | 0) == 11) {
    i23 = (HEAP32[i7 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i21 = i1;
    HEAP32[i21 >> 2] = i22;
    HEAP32[i21 + 4 >> 2] = i23;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i5;
    return;
   } else if ((i17 | 0) == 13) {
    if ((i25 | 0) == 0) {
     i16 = i27;
     i17 = 14;
     break;
    }
    i23 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
    HEAP32[i25 >> 2] = i23;
    i21 = i23 | 0;
    HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
    i21 = i2 + 16 | 0;
    HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) - 1;
    i30 = i25;
    i31 = i21;
    break;
   }
  }
 } while (0);
 if ((i17 | 0) == 14) {
  i30 = i16;
  i31 = i2 + 16 | 0;
 }
 i16 = i4 | 0;
 i4 = HEAP32[i16 >> 2] | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 __ZN7WebCore13QualifiedName5derefEv(i30);
 HEAP32[i30 >> 2] = HEAP32[i16 >> 2];
 i16 = i2 + 12 | 0;
 i4 = (HEAP32[i16 >> 2] | 0) + 1 | 0;
 HEAP32[i16 >> 2] = i4;
 i16 = i2 + 4 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 if (((HEAP32[i31 >> 2] | 0) + i4 << 1 | 0) < (i17 | 0)) {
  i32 = i30;
  i33 = i17;
 } else {
  if ((i17 | 0) == 0) {
   i34 = 8;
  } else {
   i31 = i17 << 1;
   i34 = (i4 * 6 & -1 | 0) < (i31 | 0) ? i17 : i31;
  }
  i31 = __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E6rehashEiPS2_(i2, i34, i30) | 0;
  i32 = i31;
  i33 = HEAP32[i16 >> 2] | 0;
 }
 i16 = (HEAP32[i7 >> 2] | 0) + (i33 << 2) | 0;
 i33 = i1;
 HEAP32[i33 >> 2] = i32;
 HEAP32[i33 + 4 >> 2] = i16;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i4 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) == 0) {
  i8 = i4 + 8 | 0;
  i9 = 0;
  i10 = i8;
  i11 = i8;
 } else {
  i8 = i7 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  i8 = i4 + 8 | 0;
  i7 = i8;
  i9 = HEAP32[i7 >> 2] & -8;
  i10 = i8;
  i11 = i7;
 }
 i7 = i4 + 4 | 0;
 HEAP32[i7 >> 2] = HEAP32[i1 + 4 >> 2];
 i8 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i9 | i8 & 7;
 HEAP32[i11 >> 2] = i1;
 HEAP8[i10] = i1 & 255 & -9 | i8 & 8;
 i8 = i5 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i8 >> 2] = i1;
 if ((i1 | 0) == 0) {
  i12 = 0;
 } else {
  i9 = i1 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i12 = HEAP32[i8 >> 2] | 0;
 }
 i9 = i5 + 4 | 0;
 HEAP32[i9 >> 2] = HEAP32[i2 + 4 >> 2];
 i1 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i5 + 8 | 0;
 i13 = i2;
 i14 = HEAP32[i13 >> 2] & -8 | i1 & 7;
 HEAP32[i13 >> 2] = i14;
 i15 = i14 & 255 & -9 | i1 & 8;
 HEAP8[i2] = i15;
 if ((HEAP32[i6 >> 2] | 0) == (i12 | 0)) {
  do {
   if ((HEAP8[i10] & 8) == 0) {
    i1 = HEAP32[i11 >> 2] & 7;
    if (!((i1 | 0) == 2 | (i1 | 0) == 4)) {
     i16 = 9;
     break;
    }
    i1 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i4) | 0;
    i17 = i1;
    i18 = HEAP8[i2] | 0;
   } else {
    i16 = 9;
   }
  } while (0);
  if ((i16 | 0) == 9) {
   i17 = HEAP32[i7 >> 2] | 0;
   i18 = i15;
  }
  do {
   if ((i18 & 8) == 0) {
    i15 = HEAP32[i13 >> 2] & 7;
    if (!((i15 | 0) == 2 | (i15 | 0) == 4)) {
     i16 = 13;
     break;
    }
    i19 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i5) | 0;
   } else {
    i16 = 13;
   }
  } while (0);
  if ((i16 | 0) == 13) {
   i19 = HEAP32[i9 >> 2] | 0;
  }
  if ((i17 | 0) == (i19 | 0)) {
   i20 = ((HEAP32[i13 >> 2] ^ HEAP32[i11 >> 2]) & 7 | 0) == 0;
  } else {
   i20 = 0;
  }
  i21 = i20;
  i22 = HEAP32[i8 >> 2] | 0;
 } else {
  i21 = 0;
  i22 = i12;
 }
 do {
  if ((i22 | 0) != 0) {
   i12 = i22 + 8 | 0;
   i8 = i12 | 0;
   i20 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i20;
   if ((i20 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 i22 = HEAP32[i6 >> 2] | 0;
 if ((i22 | 0) == 0) {
  STACKTOP = i3;
  return i21 | 0;
 }
 i6 = i22 + 8 | 0;
 i22 = i6 | 0;
 i12 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
 HEAP32[i22 >> 2] = i12;
 if ((i12 | 0) >= 1) {
  STACKTOP = i3;
  return i21 | 0;
 }
 if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return i21 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
 STACKTOP = i3;
 return i21 | 0;
}
function __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E6rehashEiPS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i1 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i7 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 i7 = __ZN3WTF10fastMallocEj(i2 << 2) | 0;
 if ((i2 | 0) > 0) {
  i11 = 0;
  while (1) {
   i12 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
   HEAP32[i7 + (i11 << 2) >> 2] = i12;
   i13 = i12 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   i11 = i11 + 1 | 0;
   if ((i11 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i9 >> 2] = i7;
 if ((i8 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i14 = 0;
  i15 = i10;
  __ZN3WTF8fastFreeEPv(i15);
  STACKTOP = i4;
  return i14 | 0;
 }
 i7 = i6 | 0;
 i9 = i5 | 0;
 i2 = 0;
 i11 = 0;
 while (1) {
  i13 = i10 + (i2 << 2) | 0;
  i12 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
  HEAP32[i7 >> 2] = i12;
  i16 = i12 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
  i16 = i13 | 0;
  i12 = (HEAP32[i16 >> 2] | 0) == (HEAP32[i7 >> 2] | 0);
  __ZN7WebCore13QualifiedNameD1Ev(i6);
  do {
   if (i12) {
    i17 = i11;
   } else {
    if ((HEAP32[i16 >> 2] | 0) == -1) {
     i17 = i11;
     break;
    }
    __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E16lookupForWritingINS_22IdentityHashTranslatorIS4_EES2_EENSt3__14pairIPS2_bEERKT0_(i5, i1, i13);
    i18 = HEAP32[i9 >> 2] | 0;
    __ZN7WebCore13QualifiedNameD1Ev(i18);
    i19 = HEAP32[i16 >> 2] | 0;
    HEAP32[i18 >> 2] = i19;
    i20 = i19 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
    i17 = (i13 | 0) == (i3 | 0) ? i18 : i11;
   }
  } while (0);
  i13 = i2 + 1 | 0;
  if ((i13 | 0) == (i8 | 0)) {
   break;
  } else {
   i2 = i13;
   i11 = i17;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i8 | 0) > 0) {
  i21 = 0;
 } else {
  i14 = i17;
  i15 = i10;
  __ZN3WTF8fastFreeEPv(i15);
  STACKTOP = i4;
  return i14 | 0;
 }
 while (1) {
  i1 = i10 + (i21 << 2) | 0;
  if ((HEAP32[i1 >> 2] | 0) != -1) {
   __ZN7WebCore13QualifiedNameD1Ev(i1);
  }
  i1 = i21 + 1 | 0;
  if ((i1 | 0) < (i8 | 0)) {
   i21 = i1;
  } else {
   i14 = i17;
   break;
  }
 }
 i15 = i10;
 __ZN3WTF8fastFreeEPv(i15);
 STACKTOP = i4;
 return i14 | 0;
}
function __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E16lookupForWritingINS_22IdentityHashTranslatorIS4_EES2_EENSt3__14pairIPS2_bEERKT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i8 = i3 + 4 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZNK7WebCore13QualifiedName17QualifiedNameImpl11computeHashEv(i3) | 0;
  HEAP32[i8 >> 2] = i10;
  i11 = i10;
 } else {
  i11 = i9;
 }
 i9 = i11 & i7;
 i10 = i6 + (i9 << 2) | 0;
 i8 = i5 | 0;
 i3 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
 HEAP32[i8 >> 2] = i3;
 i12 = i3 | 0;
 HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 i12 = i10 | 0;
 i3 = (HEAP32[i12 >> 2] | 0) == (HEAP32[i8 >> 2] | 0);
 __ZN7WebCore13QualifiedNameD1Ev(i5);
 L4 : do {
  if (i3) {
   i13 = 0;
   i14 = i10;
  } else {
   i15 = (i11 >>> 23) + ~i11 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i9;
   i19 = i10;
   i20 = i12;
   while (1) {
    i21 = HEAP32[i20 >> 2] | 0;
    if ((i21 | 0) == -1) {
     i22 = i19;
    } else {
     if ((i21 | 0) == (HEAP32[i2 >> 2] | 0)) {
      break;
     } else {
      i22 = i16;
     }
    }
    i21 = (i17 | 0) == 0 ? i15 : i17;
    i23 = i21 + i18 & i7;
    i24 = i6 + (i23 << 2) | 0;
    i25 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
    HEAP32[i8 >> 2] = i25;
    i26 = i25 | 0;
    HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
    i26 = i24 | 0;
    i25 = (HEAP32[i26 >> 2] | 0) == (HEAP32[i8 >> 2] | 0);
    __ZN7WebCore13QualifiedNameD1Ev(i5);
    if (i25) {
     i13 = i22;
     i14 = i24;
     break L4;
    } else {
     i16 = i22;
     i17 = i21;
     i18 = i23;
     i19 = i24;
     i20 = i26;
    }
   }
   HEAP32[i1 >> 2] = i19;
   HEAP8[i1 + 4 | 0] = 1;
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = (i13 | 0) != 0 ? i13 : i14;
 HEAP8[i1 + 4 | 0] = 0;
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E6lookupINS_22IdentityHashTranslatorIS4_EES2_EEPS2_RKT0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i7 = i2 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = __ZNK7WebCore13QualifiedName17QualifiedNameImpl11computeHashEv(i2) | 0;
  HEAP32[i7 >> 2] = i9;
  i10 = i9;
 } else {
  i10 = i8;
 }
 if ((i6 | 0) == 0) {
  i11 = 0;
  STACKTOP = i3;
  return i11 | 0;
 }
 i8 = i10 & i5;
 i9 = i6 + (i8 << 2) | 0;
 i7 = i4 | 0;
 i2 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
 HEAP32[i7 >> 2] = i2;
 i12 = i2 | 0;
 HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 i12 = i9 | 0;
 i2 = (HEAP32[i12 >> 2] | 0) == (HEAP32[i7 >> 2] | 0);
 __ZN7WebCore13QualifiedNameD1Ev(i4);
 if (i2) {
  i11 = 0;
  STACKTOP = i3;
  return i11 | 0;
 }
 i2 = (i10 >>> 23) + ~i10 | 0;
 i10 = i2 << 12 ^ i2;
 i2 = i10 >>> 7 ^ i10;
 i10 = i2 << 2 ^ i2;
 i2 = i10 >>> 20 ^ i10 | 1;
 i10 = 0;
 i13 = i8;
 i8 = i9;
 i9 = i12;
 while (1) {
  i12 = HEAP32[i9 >> 2] | 0;
  if ((i12 | 0) != -1) {
   if ((i12 | 0) == (HEAP32[i1 >> 2] | 0)) {
    i11 = i8;
    i14 = 12;
    break;
   }
  }
  i12 = (i10 | 0) == 0 ? i2 : i10;
  i15 = i12 + i13 & i5;
  i16 = i6 + (i15 << 2) | 0;
  i17 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
  HEAP32[i7 >> 2] = i17;
  i18 = i17 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
  i18 = i16 | 0;
  i17 = (HEAP32[i18 >> 2] | 0) == (HEAP32[i7 >> 2] | 0);
  __ZN7WebCore13QualifiedNameD1Ev(i4);
  if (i17) {
   i11 = 0;
   i14 = 13;
   break;
  } else {
   i10 = i12;
   i13 = i15;
   i8 = i16;
   i9 = i18;
  }
 }
 if ((i14 | 0) == 12) {
  STACKTOP = i3;
  return i11 | 0;
 } else if ((i14 | 0) == 13) {
  STACKTOP = i3;
  return i11 | 0;
 }
 return 0;
}
function __ZN7WebCore18FormatBlockCommand28elementForFormatBlockCommandEPNS_5RangeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 L1 : do {
  if ((i1 | 0) == 0) {
   i3 = 0;
  } else {
   i4 = i2 | 0;
   HEAP32[i4 >> 2] = 0;
   i5 = __ZNK7WebCore5Range23commonAncestorContainerERi(i1, i4) | 0;
   if ((i5 | 0) == 0) {
    i3 = 0;
    break;
   } else {
    i6 = i5;
   }
   while (1) {
    i7 = i6 + 12 | 0;
    if ((HEAP32[i7 >> 2] & 4 | 0) != 0) {
     if (__ZN7WebCoreL23isElementForFormatBlockERKNS_13QualifiedNameE(i6 + 44 | 0) | 0) {
      break;
     }
    }
    i5 = HEAP32[i6 + 16 >> 2] | 0;
    if ((i5 | 0) == 0) {
     i3 = 0;
     break L1;
    } else {
     i6 = i5 | 0;
    }
   }
   i5 = __ZNK7WebCore4Node19rootEditableElementEv(HEAP32[i1 + 8 >> 2] | 0) | 0;
   if ((i5 | 0) == 0) {
    i3 = 0;
    break;
   }
   if (__ZNK7WebCore4Node8containsEPKS0_(i6, i5 | 0) | 0) {
    i3 = 0;
    break;
   }
   if ((HEAP32[i7 >> 2] & 4 | 0) == 0) {
    i3 = 0;
    break;
   }
   i3 = i6;
  }
 } while (0);
 STACKTOP = i2;
 return i3 | 0;
}
function __ZN7WebCore18FormatBlockCommandD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = __ZTVN7WebCore24ApplyBlockElementCommandE + 8;
 i2 = HEAP32[i1 + 160 >> 2] | 0;
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
 i2 = HEAP32[i1 + 156 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 __ZN7WebCore13QualifiedNameD1Ev(i1 + 152 | 0);
 __ZN7WebCore20CompositeEditCommandD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore18FormatBlockCommandD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = __ZTVN7WebCore24ApplyBlockElementCommandE + 8;
 i2 = HEAP32[i1 + 160 >> 2] | 0;
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
 i2 = HEAP32[i1 + 156 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 __ZN7WebCore13QualifiedNameD1Ev(i1 + 152 | 0);
 __ZN7WebCore20CompositeEditCommandD2Ev(i1 | 0);
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_viiiii + 2;
}
function __ZN7WebCore18FormatBlockCommand15formatSelectionERKNS_15VisiblePositionES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 + 152 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 i7 = __ZN7WebCoreL23isElementForFormatBlockERKNS_13QualifiedNameE(i5) | 0;
 __ZN7WebCore13QualifiedNameD1Ev(i5);
 if (!i7) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore24ApplyBlockElementCommand15formatSelectionERKNS_15VisiblePositionES3_(i1 | 0, i2, i3);
 HEAP8[i1 + 172 | 0] = 1;
 STACKTOP = i4;
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
function viii___ZN7WebCore20CompositeEditCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore20CompositeEditCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE(i1 | 0, i2 | 0, i3 | 0);
}
function viiii___ZN7WebCore20CompositeEditCommand18deleteTextFromNodeEN3WTF10PassRefPtrINS_4TextEEEjj__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore20CompositeEditCommand18deleteTextFromNodeEN3WTF10PassRefPtrINS_4TextEEEjj(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore18FormatBlockCommandC2ERNS_8DocumentERKNS_13QualifiedNameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore24ApplyBlockElementCommandC2ERNS_8DocumentERKNS_13QualifiedNameE(i1 | 0, i2, i3);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP8[i1 + 172 | 0] = 0;
 return;
}
function __ZN7WebCore18FormatBlockCommandC1ERNS_8DocumentERKNS_13QualifiedNameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore24ApplyBlockElementCommandC2ERNS_8DocumentERKNS_13QualifiedNameE(i1 | 0, i2, i3);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP8[i1 + 172 | 0] = 0;
 return;
}
function vii___ZN7WebCore20CompositeEditCommand38setShouldRetainAutocorrectionIndicatorEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore20CompositeEditCommand38setShouldRetainAutocorrectionIndicatorEb(i1 | 0, i2 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function ii___ZNK7WebCore20CompositeEditCommand35shouldRetainAutocorrectionIndicatorEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20CompositeEditCommand35shouldRetainAutocorrectionIndicatorEv(i1 | 0) | 0;
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
function ii___ZNK7WebCore20CompositeEditCommand19isCreateLinkCommandEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20CompositeEditCommand19isCreateLinkCommandEv(i1 | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function ii___ZNK7WebCore20CompositeEditCommand15isTypingCommandEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20CompositeEditCommand15isTypingCommandEv(i1 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 7](i2 | 0, i3 | 0, i4 | 0);
}
function vi___ZN7WebCore24ApplyBlockElementCommand7doApplyEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore24ApplyBlockElementCommand7doApplyEv(i1 | 0);
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
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function __ZNK7WebCore20CompositeEditCommand23shouldStopCaretBlinkingEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore20CompositeEditCommand18isDictationCommandEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore18FormatBlockCommand20preservesTypingStyleEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function b7(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(7);
}
function __ZNK7WebCore11EditCommand24isEditCommandCompositionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function __ZNK7WebCore18FormatBlockCommand13editingActionEv(i1) {
 i1 = i1 | 0;
 return 35;
}
function __ZNK7WebCore11EditCommand19isSimpleEditCommandEv(i1) {
 i1 = i1 | 0;
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
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
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
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore18FormatBlockCommand11formatRangeERKNS_8PositionES3_S3_RN3WTF6RefPtrINS_7ElementEEE,b0];
  var FUNCTION_TABLE_vi = [b1,b1,vi___ZN7WebCore24ApplyBlockElementCommand7doApplyEv__wrapper,b1,__ZN7WebCore18FormatBlockCommandD0Ev,b1,__ZN7WebCore18FormatBlockCommandD1Ev,b1];
  var FUNCTION_TABLE_vii = [b2,b2,vii___ZN7WebCore20CompositeEditCommand38setShouldRetainAutocorrectionIndicatorEb__wrapper,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore20CompositeEditCommand18isDictationCommandEv,b3,ii___ZNK7WebCore20CompositeEditCommand15isTypingCommandEv__wrapper,b3,__ZNK7WebCore18FormatBlockCommand13editingActionEv,b3,ii___ZNK7WebCore20CompositeEditCommand19isCreateLinkCommandEv__wrapper,b3,ii___ZNK7WebCore20CompositeEditCommand35shouldRetainAutocorrectionIndicatorEv__wrapper,b3,__ZNK7WebCore11EditCommand19isSimpleEditCommandEv,b3,__ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv,b3,__ZNK7WebCore11EditCommand24isEditCommandCompositionEv,b3,__ZNK7WebCore18FormatBlockCommand20preservesTypingStyleEv,b3,__ZNK7WebCore20CompositeEditCommand23shouldStopCaretBlinkingEv,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore18FormatBlockCommandC2ERNS_8DocumentERKNS_13QualifiedNameE,b4,__ZN7WebCore18FormatBlockCommand15formatSelectionERKNS_15VisiblePositionES3_,b4,viii___ZN7WebCore20CompositeEditCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE__wrapper,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  var FUNCTION_TABLE_viiii = [b7,b7,viiii___ZN7WebCore20CompositeEditCommand18deleteTextFromNodeEN3WTF10PassRefPtrINS_4TextEEEjj__wrapper,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames5h2TagE": __ZN7WebCore9HTMLNames5h2TagE, "__ZN7WebCore9HTMLNames4pTagE": __ZN7WebCore9HTMLNames4pTagE, "__ZN7WebCore9HTMLNames6preTagE": __ZN7WebCore9HTMLNames6preTagE, "__ZN7WebCore9HTMLNames6navTagE": __ZN7WebCore9HTMLNames6navTagE, "__ZN7WebCore9HTMLNames5h1TagE": __ZN7WebCore9HTMLNames5h1TagE, "__ZN7WebCore9HTMLNames7bodyTagE": __ZN7WebCore9HTMLNames7bodyTagE, "__ZN7WebCore9HTMLNames5h4TagE": __ZN7WebCore9HTMLNames5h4TagE, "__ZN7WebCore9HTMLNames10sectionTagE": __ZN7WebCore9HTMLNames10sectionTagE, "__ZN7WebCore9HTMLNames5h5TagE": __ZN7WebCore9HTMLNames5h5TagE, "__ZTVN7WebCore24ApplyBlockElementCommandE": __ZTVN7WebCore24ApplyBlockElementCommandE, "__ZN7WebCore9HTMLNames7mainTagE": __ZN7WebCore9HTMLNames7mainTagE, "__ZN7WebCore9HTMLNames10addressTagE": __ZN7WebCore9HTMLNames10addressTagE, "__ZN7WebCore9HTMLNames5dtTagE": __ZN7WebCore9HTMLNames5dtTagE, "__ZN7WebCore9HTMLNames8asideTagE": __ZN7WebCore9HTMLNames8asideTagE, "__ZN7WebCore9HTMLNames9footerTagE": __ZN7WebCore9HTMLNames9footerTagE, "__ZN7WebCore9HTMLNames5ddTagE": __ZN7WebCore9HTMLNames5ddTagE, "__ZN7WebCore9HTMLNames9hgroupTagE": __ZN7WebCore9HTMLNames9hgroupTagE, "__ZN7WebCore9HTMLNames9headerTagE": __ZN7WebCore9HTMLNames9headerTagE, "__ZN7WebCore9HTMLNames5h3TagE": __ZN7WebCore9HTMLNames5h3TagE, "__ZN7WebCore9HTMLNames6divTagE": __ZN7WebCore9HTMLNames6divTagE, "__ZN7WebCore9HTMLNames13blockquoteTagE": __ZN7WebCore9HTMLNames13blockquoteTagE, "__ZN7WebCore9HTMLNames5h6TagE": __ZN7WebCore9HTMLNames5h6TagE, "__ZN7WebCore9HTMLNames10articleTagE": __ZN7WebCore9HTMLNames10articleTagE, "__ZN7WebCore9HTMLNames5dlTagE": __ZN7WebCore9HTMLNames5dlTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZNK7WebCore18FormatBlockCommand13editingActionEv","__ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv","__ZNK7WebCore18FormatBlockCommand20preservesTypingStyleEv","__ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E6lookupINS_22IdentityHashTranslatorIS4_EES2_EEPS2_RKT0_","__ZN7WebCore18FormatBlockCommand15formatSelectionERKNS_15VisiblePositionES3_","__ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E6rehashEiPS2_","_memset","__ZN7WebCore18FormatBlockCommandD0Ev","__ZN7WebCore18FormatBlockCommandC2ERNS_8DocumentERKNS_13QualifiedNameE","__ZN7WebCore18FormatBlockCommandD1Ev","__ZNK7WebCore20CompositeEditCommand18isDictationCommandEv","__ZN7WebCoreL23isElementForFormatBlockERKNS_13QualifiedNameE","__ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E16lookupForWritingINS_22IdentityHashTranslatorIS4_EES2_EENSt3__14pairIPS2_bEERKT0_","__ZN7WebCoreeqERKNS_15VisiblePositionES2_","_memcpy","__ZN7WebCore18FormatBlockCommand28elementForFormatBlockCommandEPNS_5RangeE","__ZN7WebCore18FormatBlockCommand11formatRangeERKNS_8PositionES3_S3_RN3WTF6RefPtrINS_7ElementEEE","__ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_","__ZNK7WebCore11EditCommand24isEditCommandCompositionEv","__ZNK7WebCore11EditCommand19isSimpleEditCommandEv","__ZNK7WebCore20CompositeEditCommand23shouldStopCaretBlinkingEv"]

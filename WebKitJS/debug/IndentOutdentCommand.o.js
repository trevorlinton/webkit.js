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
H_BASE = parentModule["_malloc"](136 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 136;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore20IndentOutdentCommandC1ERNS_8DocumentENS0_11EIndentTypeEi;
/* memory initializer */ allocate([109,97,114,103,105,110,58,32,48,32,48,32,48,32,52,48,112,120,59,32,98,111,114,100,101,114,58,32,110,111,110,101,59,32,112,97,100,100,105,110,103,58,32,48,112,120,59,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore9HTMLNames13blockquoteTagE=env.__ZN7WebCore9HTMLNames13blockquoteTagE|0;
  var __ZN7WebCore9HTMLNames5liTagE=env.__ZN7WebCore9HTMLNames5liTagE|0;
  var __ZTVN7WebCore24ApplyBlockElementCommandE=env.__ZTVN7WebCore24ApplyBlockElementCommandE|0;
  var __ZN7WebCore9HTMLNames5ulTagE=env.__ZN7WebCore9HTMLNames5ulTagE|0;
  var __ZN7WebCore9HTMLNames5olTagE=env.__ZN7WebCore9HTMLNames5olTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore20IndentOutdentCommandE=(H_BASE+56)|0;
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
function __ZN7WebCore20IndentOutdentCommand16outdentParagraphEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 464 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 40 | 0;
 i7 = i2 + 56 | 0;
 i8 = i2 + 72 | 0;
 i9 = i2 + 80 | 0;
 i10 = i2 + 88 | 0;
 i11 = i2 + 104 | 0;
 i12 = i2 + 120 | 0;
 i13 = i2 + 136 | 0;
 i14 = i2 + 152 | 0;
 i15 = i2 + 168 | 0;
 i16 = i2 + 184 | 0;
 i17 = i2 + 192 | 0;
 i18 = i2 + 200 | 0;
 i19 = i2 + 208 | 0;
 i20 = i2 + 224 | 0;
 i21 = i2 + 240 | 0;
 i22 = i2 + 256 | 0;
 i23 = i2 + 272 | 0;
 i24 = i2 + 280 | 0;
 i25 = i2 + 288 | 0;
 i26 = i2 + 304 | 0;
 i27 = i2 + 312 | 0;
 i28 = i2 + 320 | 0;
 i29 = i2 + 336 | 0;
 i30 = i2 + 344 | 0;
 i31 = i2 + 360 | 0;
 i32 = i2 + 368 | 0;
 i33 = i2 + 376 | 0;
 i34 = i2 + 384 | 0;
 i35 = i2 + 392 | 0;
 i36 = i2 + 400 | 0;
 i37 = i2 + 416 | 0;
 i38 = i2 + 432 | 0;
 i39 = i2 + 448 | 0;
 if ((HEAP32[i1 + 124 >> 2] | 0) == 2) {
  i40 = 1;
 } else {
  i40 = HEAP32[i1 + 120 >> 2] | 0;
 }
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i5, i1 + 96 | 0, i40);
 __ZN7WebCore16startOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i4, i5, 1);
 i40 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i40 | 0) != 0) {
   i5 = i40 + 8 | 0;
   i41 = i5 | 0;
   i42 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
   HEAP32[i41 >> 2] = i42;
   if ((i42 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i6, i4, 1);
 i40 = i7 | 0;
 i5 = i4 | 0;
 i42 = HEAP32[i5 >> 2] | 0;
 HEAP32[i40 >> 2] = i42;
 if ((i42 | 0) != 0) {
  i41 = i42 + 8 | 0;
  HEAP32[i41 >> 2] = (HEAP32[i41 >> 2] | 0) + 1;
 }
 i41 = i4 + 4 | 0;
 HEAP32[i7 + 4 >> 2] = HEAP32[i41 >> 2];
 i42 = i4 + 8 | 0;
 i43 = i42;
 i44 = HEAP32[i43 >> 2] | 0;
 i45 = i7 + 8 | 0;
 i46 = i45;
 i47 = HEAP32[i46 >> 2] & -8 | i44 & 7;
 HEAP32[i46 >> 2] = i47;
 HEAP8[i45] = i47 & 255 & -9 | i44 & 8;
 i44 = __ZN7WebCore19enclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleE(i7, F_BASE_ii + 6 | 0, 1) | 0;
 i7 = HEAP32[i40 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i40 = i7 + 8 | 0;
   i47 = i40 | 0;
   i45 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
   HEAP32[i47 >> 2] = i45;
   if ((i45 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
  }
 } while (0);
 L17 : do {
  if ((i44 | 0) != 0) {
   if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(HEAP32[i44 + 16 >> 2] | 0, 0, 1) | 0)) {
    break;
   }
   i7 = i44 + 12 | 0;
   i40 = (HEAP32[i7 >> 2] & 4 | 0) == 0;
   L20 : do {
    if (!i40) {
     i45 = HEAP32[i44 + 44 >> 2] | 0;
     i47 = HEAP32[__ZN7WebCore9HTMLNames5olTagE >> 2] | 0;
     do {
      if ((i45 | 0) != (i47 | 0)) {
       if ((HEAP32[i45 + 12 >> 2] | 0) == (HEAP32[i47 + 12 >> 2] | 0)) {
        if ((HEAP32[i45 + 16 >> 2] | 0) == (HEAP32[i47 + 16 >> 2] | 0)) {
         break;
        }
       }
       if (i40) {
        break L20;
       }
       i46 = HEAP32[i44 + 44 >> 2] | 0;
       i48 = HEAP32[__ZN7WebCore9HTMLNames5ulTagE >> 2] | 0;
       if ((i46 | 0) != (i48 | 0)) {
        if ((HEAP32[i46 + 12 >> 2] | 0) != (HEAP32[i48 + 12 >> 2] | 0)) {
         break L20;
        }
        if ((HEAP32[i46 + 16 >> 2] | 0) != (HEAP32[i48 + 16 >> 2] | 0)) {
         break L20;
        }
       }
       i48 = HEAP32[i1 + 8 >> 2] | 0;
       i46 = __ZN3WTF10fastMallocEj(160) | 0;
       __ZN7WebCore17InsertListCommandC1ERNS_8DocumentENS0_4TypeE(i46, i48, 1);
       i48 = i9 | 0;
       HEAP32[i48 >> 2] = i46;
       __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i1 | 0, i9);
       i46 = HEAP32[i48 >> 2] | 0;
       if ((i46 | 0) == 0) {
        break L17;
       }
       i48 = i46 + 4 | 0;
       i46 = i48 | 0;
       i49 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
       if ((i49 | 0) != 0) {
        HEAP32[i46 >> 2] = i49;
        break L17;
       }
       i49 = i48 - 4 | 0;
       if ((i49 | 0) == 0) {
        break L17;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i49 >> 2] | 0) + 4 >> 2] & 7](i49);
       break L17;
      }
     } while (0);
     i47 = HEAP32[i1 + 8 >> 2] | 0;
     i45 = __ZN3WTF10fastMallocEj(160) | 0;
     __ZN7WebCore17InsertListCommandC1ERNS_8DocumentENS0_4TypeE(i45, i47, 0);
     i47 = i8 | 0;
     HEAP32[i47 >> 2] = i45;
     __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i1 | 0, i8);
     i45 = HEAP32[i47 >> 2] | 0;
     if ((i45 | 0) == 0) {
      break L17;
     }
     i47 = i45 + 4 | 0;
     i45 = i47 | 0;
     i49 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
     if ((i49 | 0) != 0) {
      HEAP32[i45 >> 2] = i49;
      break L17;
     }
     i49 = i47 - 4 | 0;
     if ((i49 | 0) == 0) {
      break L17;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i49 >> 2] | 0) + 4 >> 2] & 7](i49);
     break L17;
    }
   } while (0);
   __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i11, i44);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i10, i11, 1);
   i40 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i40 | 0) != 0) {
     i49 = i40 + 8 | 0;
     i47 = i49 | 0;
     i45 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
     HEAP32[i47 >> 2] = i45;
     if ((i45 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i49 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i49 - 8 | 0);
    }
   } while (0);
   i40 = (HEAP32[i7 >> 2] & 2048 | 0) == 0;
   i49 = i44 + 32 | 0;
   if (i40) {
    i50 = i49 | 0;
   } else {
    i50 = HEAP32[i49 >> 2] | 0;
   }
   do {
    if ((HEAP32[i50 >> 2] | 0) == 0) {
     i51 = 48;
    } else {
     if (i40) {
      i52 = i49 | 0;
     } else {
      i52 = HEAP32[i49 >> 2] | 0;
     }
     if ((HEAP32[(HEAP32[i52 >> 2] | 0) + 20 >> 2] & 1024 | 0) == 0) {
      i51 = 48;
      break;
     }
     i45 = HEAP32[i10 >> 2] | 0;
     HEAP32[i12 >> 2] = i45;
     if ((i45 | 0) != 0) {
      i47 = i45 + 8 | 0;
      HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
     }
     HEAP32[i12 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
     i47 = HEAP32[i10 + 8 >> 2] | 0;
     i45 = i12 + 8 | 0;
     i48 = i45;
     i46 = HEAP32[i48 >> 2] & -8 | i47 & 7;
     HEAP32[i48 >> 2] = i46;
     HEAP8[i45] = i46 & 255 & -9 | i47 & 8;
     HEAP32[i12 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
    }
   } while (0);
   if ((i51 | 0) == 48) {
    __ZN7WebCore12startOfBlockERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i12, i10, 1);
   }
   __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i14, i44);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i13, i14, 1);
   i49 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i49 | 0) != 0) {
     i40 = i49 + 8 | 0;
     i7 = i40 | 0;
     i47 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     HEAP32[i7 >> 2] = i47;
     if ((i47 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore10endOfBlockERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i15, i13, 1);
   do {
    if (__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i4, i12) | 0) {
     if (!(__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i6, i15) | 0)) {
      i51 = 138;
      break;
     }
     i49 = HEAP32[i44 + 28 >> 2] | 0;
     i40 = i1 | 0;
     i47 = i16 | 0;
     HEAP32[i47 >> 2] = i44;
     i7 = i44 + 8 | 0;
     HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
     __ZN7WebCore20CompositeEditCommand28removeNodePreservingChildrenEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE(i40, i16, 1);
     i7 = HEAP32[i47 >> 2] | 0;
     do {
      if ((i7 | 0) != 0) {
       i47 = i7 + 8 | 0;
       i46 = i47 | 0;
       i45 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
       HEAP32[i46 >> 2] = i45;
       if ((i45 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
      }
     } while (0);
     L79 : do {
      if ((i49 | 0) != 0) {
       i7 = HEAP32[i49 + 16 >> 2] | 0;
       if ((i7 | 0) == 0) {
        break;
       }
       if ((HEAP32[i7 + 12 >> 2] & 4 | 0) == 0) {
        break;
       }
       i47 = HEAP32[i7 + 44 >> 2] | 0;
       i45 = HEAP32[__ZN7WebCore9HTMLNames13blockquoteTagE >> 2] | 0;
       if ((i47 | 0) != (i45 | 0)) {
        if ((HEAP32[i47 + 12 >> 2] | 0) != (HEAP32[i45 + 12 >> 2] | 0)) {
         break;
        }
        if ((HEAP32[i47 + 16 >> 2] | 0) != (HEAP32[i45 + 16 >> 2] | 0)) {
         break;
        }
       }
       do {
        if ((HEAP32[i49 + 12 >> 2] & 4 | 0) != 0) {
         i47 = HEAP32[i49 + 44 >> 2] | 0;
         if ((i47 | 0) == (i45 | 0)) {
          break L79;
         }
         if ((HEAP32[i47 + 12 >> 2] | 0) != (HEAP32[i45 + 12 >> 2] | 0)) {
          break;
         }
         if ((HEAP32[i47 + 16 >> 2] | 0) == (HEAP32[i45 + 16 >> 2] | 0)) {
          break L79;
         }
        }
       } while (0);
       if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(HEAP32[i7 + 16 >> 2] | 0, 0, 1) | 0)) {
        break;
       }
       i45 = i17 | 0;
       HEAP32[i45 >> 2] = i7;
       i47 = i7 + 8 | 0;
       HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
       i47 = i18 | 0;
       HEAP32[i47 >> 2] = i49;
       i46 = i49 + 8 | 0;
       HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 1;
       __ZN7WebCore20CompositeEditCommand12splitElementEN3WTF10PassRefPtrINS_7ElementEEENS2_INS_4NodeEEE(i40, i17, i18);
       i46 = HEAP32[i47 >> 2] | 0;
       do {
        if ((i46 | 0) != 0) {
         i47 = i46 + 8 | 0;
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
       i46 = HEAP32[i45 >> 2] | 0;
       if ((i46 | 0) == 0) {
        break;
       }
       i7 = i46 + 8 | 0;
       i46 = i7 | 0;
       i47 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
       HEAP32[i46 >> 2] = i47;
       if ((i47 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
      }
     } while (0);
     i49 = i1 + 8 | 0;
     __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[i49 >> 2] | 0);
     i7 = i20 | 0;
     i47 = HEAP32[i5 >> 2] | 0;
     HEAP32[i7 >> 2] = i47;
     if ((i47 | 0) != 0) {
      i46 = i47 + 8 | 0;
      HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 1;
     }
     HEAP32[i20 + 4 >> 2] = HEAP32[i41 >> 2];
     i46 = HEAP32[i43 >> 2] | 0;
     i47 = i20 + 8 | 0;
     i53 = i47;
     i48 = HEAP32[i53 >> 2] & -8 | i46 & 7;
     HEAP32[i53 >> 2] = i48;
     HEAP8[i47] = i48 & 255 & -9 | i46 & 8;
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i19, i20, 1);
     i46 = i19 | 0;
     i48 = HEAP32[i46 >> 2] | 0;
     HEAP32[i46 >> 2] = 0;
     i47 = HEAP32[i5 >> 2] | 0;
     HEAP32[i5 >> 2] = i48;
     do {
      if ((i47 | 0) != 0) {
       i48 = i47 + 8 | 0;
       i53 = i48 | 0;
       i54 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
       HEAP32[i53 >> 2] = i54;
       if ((i54 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i48 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i48 - 8 | 0);
      }
     } while (0);
     HEAP32[i41 >> 2] = HEAP32[i19 + 4 >> 2];
     i47 = HEAP32[i19 + 8 >> 2] | 0;
     i48 = HEAP32[i43 >> 2] & -8 | i47 & 7;
     HEAP32[i43 >> 2] = i48;
     HEAP8[i42] = i48 & 255 & -9 | i47 & 8;
     HEAP32[i4 + 12 >> 2] = HEAP32[i19 + 12 >> 2];
     i47 = HEAP32[i46 >> 2] | 0;
     do {
      if ((i47 | 0) != 0) {
       i48 = i47 + 8 | 0;
       i54 = i48 | 0;
       i53 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
       HEAP32[i54 >> 2] = i53;
       if ((i53 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i48 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i48 - 8 | 0);
      }
     } while (0);
     i47 = HEAP32[i7 >> 2] | 0;
     do {
      if ((i47 | 0) != 0) {
       i46 = i47 + 8 | 0;
       i48 = i46 | 0;
       i53 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
       HEAP32[i48 >> 2] = i53;
       if ((i53 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
      }
     } while (0);
     i47 = i22 | 0;
     i7 = i6 | 0;
     i46 = HEAP32[i7 >> 2] | 0;
     HEAP32[i47 >> 2] = i46;
     if ((i46 | 0) != 0) {
      i53 = i46 + 8 | 0;
      HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + 1;
     }
     i53 = i6 + 4 | 0;
     HEAP32[i22 + 4 >> 2] = HEAP32[i53 >> 2];
     i46 = i6 + 8 | 0;
     i48 = i46;
     i54 = HEAP32[i48 >> 2] | 0;
     i55 = i22 + 8 | 0;
     i56 = i55;
     i57 = HEAP32[i56 >> 2] & -8 | i54 & 7;
     HEAP32[i56 >> 2] = i57;
     HEAP8[i55] = i57 & 255 & -9 | i54 & 8;
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i21, i22, 1);
     i54 = i21 | 0;
     i57 = HEAP32[i54 >> 2] | 0;
     HEAP32[i54 >> 2] = 0;
     i55 = HEAP32[i7 >> 2] | 0;
     HEAP32[i7 >> 2] = i57;
     do {
      if ((i55 | 0) != 0) {
       i57 = i55 + 8 | 0;
       i56 = i57 | 0;
       i58 = (HEAP32[i56 >> 2] | 0) - 1 | 0;
       HEAP32[i56 >> 2] = i58;
       if ((i58 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i57 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i57 - 8 | 0);
      }
     } while (0);
     HEAP32[i53 >> 2] = HEAP32[i21 + 4 >> 2];
     i55 = HEAP32[i21 + 8 >> 2] | 0;
     i57 = HEAP32[i48 >> 2] & -8 | i55 & 7;
     HEAP32[i48 >> 2] = i57;
     HEAP8[i46] = i57 & 255 & -9 | i55 & 8;
     HEAP32[i6 + 12 >> 2] = HEAP32[i21 + 12 >> 2];
     i55 = HEAP32[i54 >> 2] | 0;
     do {
      if ((i55 | 0) != 0) {
       i57 = i55 + 8 | 0;
       i58 = i57 | 0;
       i56 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
       HEAP32[i58 >> 2] = i56;
       if ((i56 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i57 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i57 - 8 | 0);
      }
     } while (0);
     i55 = HEAP32[i47 >> 2] | 0;
     do {
      if ((i55 | 0) != 0) {
       i54 = i55 + 8 | 0;
       i46 = i54 | 0;
       i57 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
       HEAP32[i46 >> 2] = i57;
       if ((i57 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
      }
     } while (0);
     do {
      if ((HEAP32[i5 >> 2] | 0) != 0) {
       if (__ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i4, 1) | 0) {
        break;
       }
       __ZN7WebCore18createBreakElementERNS_8DocumentE(i24, HEAP32[i49 >> 2] | 0);
       i55 = i23 | 0;
       i47 = i24 | 0;
       i54 = HEAP32[i47 >> 2] | 0;
       HEAP32[i47 >> 2] = 0;
       HEAP32[i55 >> 2] = i54;
       i54 = i25 | 0;
       i57 = HEAP32[i5 >> 2] | 0;
       HEAP32[i54 >> 2] = i57;
       if ((i57 | 0) != 0) {
        i46 = i57 + 8 | 0;
        HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 1;
       }
       HEAP32[i25 + 4 >> 2] = HEAP32[i41 >> 2];
       i46 = HEAP32[i43 >> 2] | 0;
       i57 = i25 + 8 | 0;
       i56 = i57;
       i58 = HEAP32[i56 >> 2] & -8 | i46 & 7;
       HEAP32[i56 >> 2] = i58;
       HEAP8[i57] = i58 & 255 & -9 | i46 & 8;
       __ZN7WebCore20CompositeEditCommand12insertNodeAtEN3WTF10PassRefPtrINS_4NodeEEERKNS_8PositionE(i40, i23, i25);
       i46 = HEAP32[i54 >> 2] | 0;
       do {
        if ((i46 | 0) != 0) {
         i54 = i46 + 8 | 0;
         i58 = i54 | 0;
         i57 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
         HEAP32[i58 >> 2] = i57;
         if ((i57 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
        }
       } while (0);
       i46 = HEAP32[i55 >> 2] | 0;
       do {
        if ((i46 | 0) != 0) {
         i45 = i46 + 8 | 0;
         i54 = i45 | 0;
         i57 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
         HEAP32[i54 >> 2] = i57;
         if ((i57 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
        }
       } while (0);
       i46 = HEAP32[i47 >> 2] | 0;
       if ((i46 | 0) == 0) {
        break;
       }
       i55 = i46 + 8 | 0;
       i46 = i55 | 0;
       i45 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
       HEAP32[i46 >> 2] = i45;
       if ((i45 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i55 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i55 - 8 | 0);
      }
     } while (0);
     if ((HEAP32[i7 >> 2] | 0) == 0) {
      break;
     }
     if (__ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i6, 1) | 0) {
      break;
     }
     __ZN7WebCore18createBreakElementERNS_8DocumentE(i27, HEAP32[i49 >> 2] | 0);
     i55 = i26 | 0;
     i45 = i27 | 0;
     i46 = HEAP32[i45 >> 2] | 0;
     HEAP32[i45 >> 2] = 0;
     HEAP32[i55 >> 2] = i46;
     i46 = i28 | 0;
     i57 = HEAP32[i7 >> 2] | 0;
     HEAP32[i46 >> 2] = i57;
     if ((i57 | 0) != 0) {
      i54 = i57 + 8 | 0;
      HEAP32[i54 >> 2] = (HEAP32[i54 >> 2] | 0) + 1;
     }
     HEAP32[i28 + 4 >> 2] = HEAP32[i53 >> 2];
     i54 = HEAP32[i48 >> 2] | 0;
     i57 = i28 + 8 | 0;
     i58 = i57;
     i56 = HEAP32[i58 >> 2] & -8 | i54 & 7;
     HEAP32[i58 >> 2] = i56;
     HEAP8[i57] = i56 & 255 & -9 | i54 & 8;
     __ZN7WebCore20CompositeEditCommand12insertNodeAtEN3WTF10PassRefPtrINS_4NodeEEERKNS_8PositionE(i40, i26, i28);
     i54 = HEAP32[i46 >> 2] | 0;
     do {
      if ((i54 | 0) != 0) {
       i46 = i54 + 8 | 0;
       i56 = i46 | 0;
       i57 = (HEAP32[i56 >> 2] | 0) - 1 | 0;
       HEAP32[i56 >> 2] = i57;
       if ((i57 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
      }
     } while (0);
     i54 = HEAP32[i55 >> 2] | 0;
     do {
      if ((i54 | 0) != 0) {
       i40 = i54 + 8 | 0;
       i48 = i40 | 0;
       i53 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
       HEAP32[i48 >> 2] = i53;
       if ((i53 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
      }
     } while (0);
     i54 = HEAP32[i45 >> 2] | 0;
     if ((i54 | 0) == 0) {
      break;
     }
     i55 = i54 + 8 | 0;
     i54 = i55 | 0;
     i40 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
     HEAP32[i54 >> 2] = i40;
     if ((i40 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i55 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i55 - 8 | 0);
    } else {
     i51 = 138;
    }
   } while (0);
   do {
    if ((i51 | 0) == 138) {
     i55 = HEAP32[i5 >> 2] | 0;
     do {
      if ((i55 | 0) == 0) {
       i59 = __ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(i55, 1) | 0;
      } else {
       i40 = i55 + 8 | 0;
       HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) + 1;
       i40 = __ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(i55, 1) | 0;
       i54 = i55 + 8 | 0;
       i53 = i54 | 0;
       i48 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
       HEAP32[i53 >> 2] = i48;
       if ((i48 | 0) >= 1) {
        i59 = i40;
        break;
       }
       if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
        i59 = i40;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
       i59 = i40;
      }
     } while (0);
     i55 = i44 + 8 | 0;
     HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 1;
     do {
      if ((i59 | 0) == (i44 | 0)) {
       i55 = i30 | 0;
       i45 = HEAP32[i5 >> 2] | 0;
       HEAP32[i55 >> 2] = i45;
       if ((i45 | 0) != 0) {
        i40 = i45 + 8 | 0;
        HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) + 1;
       }
       HEAP32[i30 + 4 >> 2] = HEAP32[i41 >> 2];
       i40 = HEAP32[i43 >> 2] | 0;
       i45 = i30 + 8 | 0;
       i54 = i45;
       i48 = HEAP32[i54 >> 2] & -8 | i40 & 7;
       HEAP32[i54 >> 2] = i48;
       HEAP8[i45] = i48 & 255 & -9 | i40 & 8;
       i40 = __ZN7WebCore26highestEnclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleEPS3_(i30, F_BASE_ii + 20 | 0, 1, i44) | 0;
       i48 = HEAP32[i55 >> 2] | 0;
       do {
        if ((i48 | 0) != 0) {
         i55 = i48 + 8 | 0;
         i45 = i55 | 0;
         i54 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
         HEAP32[i45 >> 2] = i54;
         if ((i54 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i55 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i55 - 8 | 0);
        }
       } while (0);
       i48 = i1 | 0;
       i47 = i31 | 0;
       HEAP32[i47 >> 2] = i44;
       i55 = i44 + 8 | 0;
       HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 1;
       do {
        if ((i40 | 0) == 0) {
         i55 = HEAP32[i5 >> 2] | 0;
         if ((i55 | 0) == 0) {
          i54 = i32 | 0;
          HEAP32[i54 >> 2] = i55;
          i60 = 0;
          i61 = 1;
          i62 = i54;
          break;
         } else {
          i54 = i55 + 8 | 0;
          HEAP32[i54 >> 2] = (HEAP32[i54 >> 2] | 0) + 1;
          i54 = i32 | 0;
          HEAP32[i54 >> 2] = i55;
          i63 = i55;
          i64 = 1;
          i65 = i55;
          i66 = i54;
          i51 = 162;
          break;
         }
        } else {
         i54 = i32 | 0;
         HEAP32[i54 >> 2] = i40;
         i63 = 0;
         i64 = 0;
         i65 = i40;
         i66 = i54;
         i51 = 162;
        }
       } while (0);
       if ((i51 | 0) == 162) {
        i40 = i65 + 8 | 0;
        HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) + 1;
        i60 = i63;
        i61 = i64;
        i62 = i66;
       }
       __ZN7WebCore20CompositeEditCommand12splitElementEN3WTF10PassRefPtrINS_7ElementEEENS2_INS_4NodeEEE(i48, i31, i32);
       i40 = HEAP32[i62 >> 2] | 0;
       do {
        if ((i40 | 0) != 0) {
         i54 = i40 + 8 | 0;
         i55 = i54 | 0;
         i45 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
         HEAP32[i55 >> 2] = i45;
         if ((i45 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
        }
       } while (0);
       do {
        if (!((i60 | 0) == 0 | i61 ^ 1)) {
         i40 = i60 + 8 | 0;
         i48 = i40 | 0;
         i54 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
         HEAP32[i48 >> 2] = i54;
         if ((i54 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
        }
       } while (0);
       i40 = HEAP32[i47 >> 2] | 0;
       if ((i40 | 0) == 0) {
        i67 = i44;
        break;
       }
       i54 = i40 + 8 | 0;
       i40 = i54 | 0;
       i48 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
       HEAP32[i40 >> 2] = i48;
       if ((i48 | 0) >= 1) {
        i67 = i44;
        break;
       }
       if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
        i67 = i44;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
       i67 = i44;
      } else {
       __ZN7WebCore20CompositeEditCommand15splitTreeToNodeEPNS_4NodeES2_b(i29, i1 | 0, i59, i44, 1);
       i54 = i29 | 0;
       i48 = HEAP32[i54 >> 2] | 0;
       HEAP32[i54 >> 2] = 0;
       i40 = i44 + 8 | 0;
       i45 = i40 - 8 | 0;
       i55 = i40 | 0;
       i53 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
       HEAP32[i55 >> 2] = i53;
       do {
        if ((i53 | 0) < 1) {
         if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i45);
        }
       } while (0);
       i45 = HEAP32[i54 >> 2] | 0;
       if ((i45 | 0) == 0) {
        i67 = i48;
        break;
       }
       i40 = i45 + 8 | 0;
       i45 = i40 | 0;
       i53 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
       HEAP32[i45 >> 2] = i53;
       if ((i53 | 0) >= 1) {
        i67 = i48;
        break;
       }
       if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
        i67 = i48;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
       i67 = i48;
      }
     } while (0);
     __ZN7WebCore18createBreakElementERNS_8DocumentE(i33, HEAP32[i1 + 8 >> 2] | 0);
     i40 = i33 | 0;
     i53 = HEAP32[i40 >> 2] | 0;
     HEAP32[i40 >> 2] = 0;
     i40 = i53 | 0;
     i45 = i1 | 0;
     i47 = i34 | 0;
     HEAP32[i47 >> 2] = i40;
     i55 = (i53 | 0) == 0;
     if (!i55) {
      i7 = i53 + 8 | 0;
      HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
     }
     i7 = i35 | 0;
     HEAP32[i7 >> 2] = i67;
     i49 = (i67 | 0) == 0;
     if (!i49) {
      i46 = i67 + 8 | 0;
      HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 1;
     }
     __ZN7WebCore20CompositeEditCommand16insertNodeBeforeEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE(i45, i34, i35, 1);
     i46 = HEAP32[i7 >> 2] | 0;
     do {
      if ((i46 | 0) != 0) {
       i7 = i46 + 8 | 0;
       i57 = i7 | 0;
       i56 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
       HEAP32[i57 >> 2] = i56;
       if ((i56 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
      }
     } while (0);
     i46 = HEAP32[i47 >> 2] | 0;
     do {
      if ((i46 | 0) != 0) {
       i7 = i46 + 8 | 0;
       i56 = i7 | 0;
       i57 = (HEAP32[i56 >> 2] | 0) - 1 | 0;
       HEAP32[i56 >> 2] = i57;
       if ((i57 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore16startOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i36, i4, 1);
     __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i37, i6, 1);
     i46 = i3 | 0;
     HEAP32[i46 >> 2] = i40;
     if (!i55) {
      i47 = i53 + 8 | 0;
      HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
     }
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i39, i3, 1);
     i47 = HEAP32[i46 >> 2] | 0;
     do {
      if ((i47 | 0) != 0) {
       i46 = i47 + 8 | 0;
       i7 = i46 | 0;
       i57 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
       HEAP32[i7 >> 2] = i57;
       if ((i57 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i38, i39, 1);
     __ZN7WebCore20CompositeEditCommand13moveParagraphERKNS_15VisiblePositionES3_S3_bb(i45, i36, i37, i38, 1, 1);
     i47 = HEAP32[i38 >> 2] | 0;
     do {
      if ((i47 | 0) != 0) {
       i40 = i47 + 8 | 0;
       i46 = i40 | 0;
       i57 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
       HEAP32[i46 >> 2] = i57;
       if ((i57 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
      }
     } while (0);
     i47 = HEAP32[i39 >> 2] | 0;
     do {
      if ((i47 | 0) != 0) {
       i45 = i47 + 8 | 0;
       i40 = i45 | 0;
       i57 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
       HEAP32[i40 >> 2] = i57;
       if ((i57 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
      }
     } while (0);
     i47 = HEAP32[i37 >> 2] | 0;
     do {
      if ((i47 | 0) != 0) {
       i45 = i47 + 8 | 0;
       i57 = i45 | 0;
       i40 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
       HEAP32[i57 >> 2] = i40;
       if ((i40 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
      }
     } while (0);
     i47 = HEAP32[i36 >> 2] | 0;
     do {
      if ((i47 | 0) != 0) {
       i45 = i47 + 8 | 0;
       i40 = i45 | 0;
       i57 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
       HEAP32[i40 >> 2] = i57;
       if ((i57 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
      }
     } while (0);
     do {
      if (!i55) {
       i47 = i53 + 8 | 0;
       i45 = i47 | 0;
       i57 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
       HEAP32[i45 >> 2] = i57;
       if ((i57 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
      }
     } while (0);
     if (i49) {
      break;
     }
     i53 = i67 + 8 | 0;
     i55 = i53 | 0;
     i47 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
     HEAP32[i55 >> 2] = i47;
     if ((i47 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i53 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i53 - 8 | 0);
    }
   } while (0);
   i53 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i53 | 0) != 0) {
     i47 = i53 + 8 | 0;
     i55 = i47 | 0;
     i57 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
     HEAP32[i55 >> 2] = i57;
     if ((i57 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
    }
   } while (0);
   i53 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i53 | 0) != 0) {
     i47 = i53 + 8 | 0;
     i57 = i47 | 0;
     i55 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
     HEAP32[i57 >> 2] = i55;
     if ((i55 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
    }
   } while (0);
   i53 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i53 | 0) != 0) {
     i47 = i53 + 8 | 0;
     i55 = i47 | 0;
     i57 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
     HEAP32[i55 >> 2] = i57;
     if ((i57 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
    }
   } while (0);
   i53 = HEAP32[i10 >> 2] | 0;
   if ((i53 | 0) == 0) {
    break;
   }
   i47 = i53 + 8 | 0;
   i53 = i47 | 0;
   i57 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
   HEAP32[i53 >> 2] = i57;
   if ((i57 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
  }
 } while (0);
 i10 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i6 = i10 + 8 | 0;
   i12 = i6 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i10 = HEAP32[i5 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i10 + 8 | 0;
 i10 = i5 | 0;
 i6 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 HEAP32[i10 >> 2] = i6;
 if ((i6 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore20IndentOutdentCommand13outdentRegionERKNS_15VisiblePositionES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 336 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 i9 = i4 + 64 | 0;
 i10 = i4 + 80 | 0;
 i11 = i4 + 96 | 0;
 i12 = i4 + 112 | 0;
 i13 = i4 + 128 | 0;
 i14 = i4 + 144 | 0;
 i15 = i4 + 208 | 0;
 i16 = i4 + 272 | 0;
 i17 = i4 + 288 | 0;
 i18 = i4 + 304 | 0;
 i19 = i4 + 320 | 0;
 __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i5, i3, 1);
 __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i6, i2, 1);
 i20 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i6, i5) | 0;
 i21 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i21 | 0) != 0) {
   i6 = i21 + 8 | 0;
   i22 = i6 | 0;
   i23 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   HEAP32[i22 >> 2] = i23;
   if ((i23 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 do {
  if (i20) {
   __ZN7WebCore20IndentOutdentCommand16outdentParagraphEv(i1);
  } else {
   i21 = i1 | 0;
   i6 = i7 | 0;
   i23 = i1 + 108 | 0;
   i22 = HEAP32[i23 >> 2] | 0;
   HEAP32[i6 >> 2] = i22;
   if ((i22 | 0) != 0) {
    i24 = i22 + 8 | 0;
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
   }
   i24 = i1 + 112 | 0;
   HEAP32[i7 + 4 >> 2] = HEAP32[i24 >> 2];
   i22 = i1 + 116 | 0;
   i25 = HEAP32[i22 >> 2] | 0;
   i26 = i7 + 8 | 0;
   i27 = i26;
   i28 = HEAP32[i27 >> 2] & -8 | i25 & 7;
   HEAP32[i27 >> 2] = i28;
   HEAP8[i26] = i28 & 255 & -9 | i25 & 8;
   __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i8, i2, 1);
   __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i11, i3, 1);
   __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i10, i11, 0);
   __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i9, i10, 1);
   i25 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i25 | 0) != 0) {
     i28 = i25 + 8 | 0;
     i26 = i28 | 0;
     i27 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     HEAP32[i26 >> 2] = i27;
     if ((i27 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
    }
   } while (0);
   i25 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i25 | 0) != 0) {
     i28 = i25 + 8 | 0;
     i27 = i28 | 0;
     i26 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
     HEAP32[i27 >> 2] = i26;
     if ((i26 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
    }
   } while (0);
   L21 : do {
    if (__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i8, i9) | 0) {
     i29 = i9 | 0;
    } else {
     i25 = i13 | 0;
     i28 = i9 | 0;
     i26 = i12 | 0;
     i27 = i8 | 0;
     i30 = i12 + 4 | 0;
     i31 = i8 + 4 | 0;
     i32 = i12 + 8 | 0;
     i33 = i32;
     i34 = i8 + 8 | 0;
     i35 = i34;
     i36 = i12 + 12 | 0;
     i37 = i8 + 12 | 0;
     i38 = i17 | 0;
     i39 = i17 + 4 | 0;
     i40 = i17 + 8 | 0;
     i41 = i40;
     i42 = i16 | 0;
     i43 = i16 + 4 | 0;
     i44 = i16 + 8 | 0;
     i45 = i16 + 12 | 0;
     i46 = i18 | 0;
     i47 = i18 + 4 | 0;
     i48 = i18 + 8 | 0;
     i49 = i18 + 12 | 0;
     i50 = i19 | 0;
     L24 : while (1) {
      __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i13, i8, 0);
      __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i12, i13, 1);
      i51 = HEAP32[i25 >> 2] | 0;
      do {
       if ((i51 | 0) != 0) {
        i52 = i51 + 8 | 0;
        i53 = i52 | 0;
        i54 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
        HEAP32[i53 >> 2] = i54;
        if ((i54 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
       }
      } while (0);
      if (__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i8, i5) | 0) {
       __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionENS_9EAffinityEb(i14, i7, 1, 0);
       __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i21, i14);
       __ZN7WebCore16VisibleSelectionD2Ev(i14);
      } else {
       __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionEb(i15, i8, 0);
       __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i21, i15);
       __ZN7WebCore16VisibleSelectionD2Ev(i15);
      }
      __ZN7WebCore20IndentOutdentCommand16outdentParagraphEv(i1);
      i51 = HEAP32[i28 >> 2] | 0;
      L35 : do {
       if ((i51 | 0) != 0) {
        i52 = i51 + 8 | 0;
        i54 = HEAP32[i52 >> 2] | 0;
        HEAP32[i52 >> 2] = i54 + 1;
        i52 = (HEAP32[i51 + 12 >> 2] & 256 | 0) == 0;
        i53 = i51 + 8 | 0;
        i55 = i53 - 8 | 0;
        HEAP32[i53 >> 2] = i54;
        do {
         if ((i54 | 0) < 1) {
          if ((HEAP32[i53 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i55);
          if (i52) {
           break L24;
          } else {
           break L35;
          }
         }
        } while (0);
        if (i52) {
         break L24;
        }
       }
      } while (0);
      i51 = HEAP32[i26 >> 2] | 0;
      do {
       if ((i51 | 0) == 0) {
        i56 = 0;
       } else {
        i55 = i51 + 8 | 0;
        i53 = HEAP32[i55 >> 2] | 0;
        HEAP32[i55 >> 2] = i53 + 1;
        i55 = (HEAP32[i51 + 12 >> 2] & 256 | 0) == 0;
        i54 = i51 + 8 | 0;
        i57 = i54 - 8 | 0;
        HEAP32[i54 >> 2] = i53;
        do {
         if ((i53 | 0) < 1) {
          if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
           i58 = 36;
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i57);
          if (i55) {
           i58 = 37;
          }
         } else {
          i58 = 36;
         }
        } while (0);
        if ((i58 | 0) == 36) {
         i58 = 0;
         if (i55) {
          i58 = 37;
         }
        }
        do {
         if ((i58 | 0) == 37) {
          i58 = 0;
          i57 = HEAP32[i23 >> 2] | 0;
          HEAP32[i38 >> 2] = i57;
          if ((i57 | 0) != 0) {
           i54 = i57 + 8 | 0;
           HEAP32[i54 >> 2] = (HEAP32[i54 >> 2] | 0) + 1;
          }
          HEAP32[i39 >> 2] = HEAP32[i24 >> 2];
          i54 = HEAP32[i22 >> 2] | 0;
          i57 = HEAP32[i41 >> 2] & -8 | i54 & 7;
          HEAP32[i41 >> 2] = i57;
          HEAP8[i40] = i57 & 255 & -9 | i54 & 8;
          __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i16, i17, 1);
          i54 = HEAP32[i42 >> 2] | 0;
          HEAP32[i42 >> 2] = 0;
          i57 = HEAP32[i27 >> 2] | 0;
          HEAP32[i27 >> 2] = i54;
          do {
           if ((i57 | 0) != 0) {
            i54 = i57 + 8 | 0;
            i53 = i54 | 0;
            i52 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
            HEAP32[i53 >> 2] = i52;
            if ((i52 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
           }
          } while (0);
          HEAP32[i31 >> 2] = HEAP32[i43 >> 2];
          i57 = HEAP32[i44 >> 2] | 0;
          i54 = HEAP32[i35 >> 2] & -8 | i57 & 7;
          HEAP32[i35 >> 2] = i54;
          HEAP8[i34] = i54 & 255 & -9 | i57 & 8;
          HEAP32[i37 >> 2] = HEAP32[i45 >> 2];
          i57 = HEAP32[i42 >> 2] | 0;
          do {
           if ((i57 | 0) != 0) {
            i54 = i57 + 8 | 0;
            i52 = i54 | 0;
            i53 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
            HEAP32[i52 >> 2] = i53;
            if ((i53 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
           }
          } while (0);
          i57 = HEAP32[i38 >> 2] | 0;
          do {
           if ((i57 | 0) != 0) {
            i54 = i57 + 8 | 0;
            i53 = i54 | 0;
            i52 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
            HEAP32[i53 >> 2] = i52;
            if ((i52 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
           }
          } while (0);
          __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i19, i8, 0);
          __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i18, i19, 1);
          i57 = HEAP32[i46 >> 2] | 0;
          HEAP32[i46 >> 2] = 0;
          i54 = HEAP32[i26 >> 2] | 0;
          HEAP32[i26 >> 2] = i57;
          do {
           if ((i54 | 0) != 0) {
            i57 = i54 + 8 | 0;
            i52 = i57 | 0;
            i53 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
            HEAP32[i52 >> 2] = i53;
            if ((i53 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i57 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i57 - 8 | 0);
           }
          } while (0);
          HEAP32[i30 >> 2] = HEAP32[i47 >> 2];
          i54 = HEAP32[i48 >> 2] | 0;
          i57 = HEAP32[i33 >> 2] & -8 | i54 & 7;
          HEAP32[i33 >> 2] = i57;
          HEAP8[i32] = i57 & 255 & -9 | i54 & 8;
          HEAP32[i36 >> 2] = HEAP32[i49 >> 2];
          i54 = HEAP32[i46 >> 2] | 0;
          do {
           if ((i54 | 0) != 0) {
            i57 = i54 + 8 | 0;
            i53 = i57 | 0;
            i52 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
            HEAP32[i53 >> 2] = i52;
            if ((i52 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i57 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i57 - 8 | 0);
           }
          } while (0);
          i54 = HEAP32[i50 >> 2] | 0;
          if ((i54 | 0) == 0) {
           break;
          }
          i57 = i54 + 8 | 0;
          i54 = i57 | 0;
          i52 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
          HEAP32[i54 >> 2] = i52;
          if ((i52 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i57 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i57 - 8 | 0);
         }
        } while (0);
        i55 = HEAP32[i26 >> 2] | 0;
        if ((i55 | 0) == 0) {
         i56 = 0;
         break;
        }
        i57 = i55 + 8 | 0;
        HEAP32[i57 >> 2] = (HEAP32[i57 >> 2] | 0) + 1;
        i56 = i55;
       }
      } while (0);
      i51 = HEAP32[i27 >> 2] | 0;
      HEAP32[i27 >> 2] = i56;
      do {
       if ((i51 | 0) != 0) {
        i55 = i51 + 8 | 0;
        i57 = i55 | 0;
        i52 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
        HEAP32[i57 >> 2] = i52;
        if ((i52 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i55 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i55 - 8 | 0);
       }
      } while (0);
      HEAP32[i31 >> 2] = HEAP32[i30 >> 2];
      i51 = HEAP32[i33 >> 2] | 0;
      i55 = HEAP32[i35 >> 2] & -8 | i51 & 7;
      HEAP32[i35 >> 2] = i55;
      HEAP8[i34] = i55 & 255 & -9 | i51 & 8;
      HEAP32[i37 >> 2] = HEAP32[i36 >> 2];
      i51 = HEAP32[i26 >> 2] | 0;
      do {
       if ((i51 | 0) != 0) {
        i55 = i51 + 8 | 0;
        i52 = i55 | 0;
        i57 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
        HEAP32[i52 >> 2] = i57;
        if ((i57 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i55 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i55 - 8 | 0);
       }
      } while (0);
      if (__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i8, i9) | 0) {
       i29 = i28;
       break L21;
      }
     }
     i36 = HEAP32[i26 >> 2] | 0;
     if ((i36 | 0) == 0) {
      i29 = i28;
      break;
     }
     i37 = i36 + 8 | 0;
     i36 = i37 | 0;
     i34 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
     HEAP32[i36 >> 2] = i34;
     if ((i34 | 0) >= 1) {
      i29 = i28;
      break;
     }
     if ((HEAP32[i37 + 8 >> 2] | 0) != 0) {
      i29 = i28;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i37 - 8 | 0);
     i29 = i28;
    }
   } while (0);
   i22 = HEAP32[i29 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i24 = i22 + 8 | 0;
     i23 = i24 | 0;
     i21 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
     HEAP32[i23 >> 2] = i21;
     if ((i21 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
    }
   } while (0);
   i22 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i24 = i22 + 8 | 0;
     i21 = i24 | 0;
     i23 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     HEAP32[i21 >> 2] = i23;
     if ((i23 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
    }
   } while (0);
   i22 = HEAP32[i6 >> 2] | 0;
   if ((i22 | 0) == 0) {
    break;
   }
   i24 = i22 + 8 | 0;
   i22 = i24 | 0;
   i23 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   HEAP32[i22 >> 2] = i23;
   if ((i23 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
  }
 } while (0);
 i8 = HEAP32[i5 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i8 + 8 | 0;
 i8 = i5 | 0;
 i29 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 HEAP32[i8 >> 2] = i29;
 if ((i29 | 0) >= 1) {
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
function __ZN7WebCore20IndentOutdentCommand20indentIntoBlockquoteERKNS_8PositionES3_RN3WTF6RefPtrINS_7ElementEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 32 | 0;
 i10 = i5 + 40 | 0;
 i11 = i5 + 48 | 0;
 i12 = i5 + 56 | 0;
 i13 = i5 + 64 | 0;
 i14 = i5 + 80 | 0;
 i15 = i5 + 96 | 0;
 i16 = __ZN7WebCore19enclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleE(i2, F_BASE_ii + 18 | 0, 1) | 0;
 do {
  if ((i16 | 0) == 0) {
   if ((__ZN7WebCore13enclosingListEPNS_4NodeE(__ZNK7WebCore8Position13containerNodeEv(i2) | 0) | 0) == 0) {
    i17 = __ZN7WebCore23editableRootForPositionERKNS_8PositionENS_12EditableTypeE(i2, 0) | 0;
   } else {
    i17 = __ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(__ZNK7WebCore8Position13containerNodeEv(i2) | 0, 1) | 0;
   }
   if ((i17 | 0) != 0) {
    i18 = i17 | 0;
    break;
   }
   STACKTOP = i5;
   return;
  } else {
   i18 = i16;
  }
 } while (0);
 i16 = __ZNK7WebCore8Position24computeNodeAfterPositionEv(i2) | 0;
 i17 = (i16 | 0) != 0;
 if (i17) {
  i19 = i16 + 8 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
 }
 if ((__ZNK7WebCore8Position13containerNodeEv(i2) | 0) == (i18 | 0)) {
  i19 = __ZNK7WebCore8Position13containerNodeEv(i2) | 0;
  i20 = i7 | 0;
  HEAP32[i20 >> 2] = i19;
  if ((i19 | 0) == 0) {
   i21 = 0;
  } else {
   i22 = i19 + 8 | 0;
   HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
   i21 = HEAP32[i20 >> 2] | 0;
  }
  HEAP32[i20 >> 2] = 0;
  i23 = i21;
 } else {
  __ZN7WebCore20CompositeEditCommand15splitTreeToNodeEPNS_4NodeES2_b(i7, i1 | 0, __ZNK7WebCore8Position13containerNodeEv(i2) | 0, i18, 0);
  i18 = i7 | 0;
  i7 = HEAP32[i18 >> 2] | 0;
  HEAP32[i18 >> 2] = 0;
  i23 = i7;
 }
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i8, i2, 1);
 i7 = i4 | 0;
 do {
  if ((HEAP32[i7 >> 2] | 0) == 0) {
   __ZN7WebCore24ApplyBlockElementCommand18createBlockElementEv(i9, i1 | 0);
   i4 = i9 | 0;
   i18 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = 0;
   i21 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i18;
   do {
    if ((i21 | 0) != 0) {
     i18 = i21 + 8 | 0;
     i20 = i18 | 0;
     i22 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     HEAP32[i20 >> 2] = i22;
     if ((i22 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
    }
   } while (0);
   i21 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i18 = i21 + 8 | 0;
     i22 = i18 | 0;
     i20 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
     HEAP32[i22 >> 2] = i20;
     if ((i20 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
    }
   } while (0);
   i21 = i1 | 0;
   do {
    if ((i23 | 0) == (__ZNK7WebCore8Position13containerNodeEv(i2) | 0)) {
     i4 = i10 | 0;
     i18 = HEAP32[i7 >> 2] | 0;
     HEAP32[i4 >> 2] = i18;
     if ((i18 | 0) != 0) {
      i20 = i18 + 8 | 0;
      HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
     }
     __ZN7WebCore20CompositeEditCommand12insertNodeAtEN3WTF10PassRefPtrINS_4NodeEEERKNS_8PositionE(i21, i10, i2);
     i20 = HEAP32[i4 >> 2] | 0;
     if ((i20 | 0) == 0) {
      break;
     }
     i4 = i20 + 8 | 0;
     i20 = i4 | 0;
     i18 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     HEAP32[i20 >> 2] = i18;
     if ((i18 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
    } else {
     i4 = i11 | 0;
     i18 = HEAP32[i7 >> 2] | 0;
     HEAP32[i4 >> 2] = i18;
     if ((i18 | 0) != 0) {
      i20 = i18 + 8 | 0;
      HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
     }
     i20 = i12 | 0;
     HEAP32[i20 >> 2] = i23;
     if ((i23 | 0) != 0) {
      i18 = i23 + 8 | 0;
      HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
     }
     __ZN7WebCore20CompositeEditCommand16insertNodeBeforeEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE(i21, i11, i12, 1);
     i18 = HEAP32[i20 >> 2] | 0;
     do {
      if ((i18 | 0) != 0) {
       i20 = i18 + 8 | 0;
       i22 = i20 | 0;
       i19 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
       HEAP32[i22 >> 2] = i19;
       if ((i19 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
      }
     } while (0);
     i18 = HEAP32[i4 >> 2] | 0;
     if ((i18 | 0) == 0) {
      break;
     }
     i20 = i18 + 8 | 0;
     i18 = i20 | 0;
     i19 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     HEAP32[i18 >> 2] = i19;
     if ((i19 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
    }
   } while (0);
   i20 = HEAP32[i7 >> 2] | 0;
   i19 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i20) | 0;
   i18 = i6 | 0;
   HEAP32[i18 >> 2] = i19;
   if ((i19 | 0) != 0) {
    i22 = i19 + 8 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
   }
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i14, i6, (__ZNK7WebCore4Node9nodeIndexEv(i20) | 0) + 1 | 0, 0);
   i20 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i18 = i20 + 8 | 0;
     i22 = i18 | 0;
     i19 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
     HEAP32[i22 >> 2] = i19;
     if ((i19 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i13, i14, 1);
   i20 = i13 | 0;
   i18 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   i19 = i8 | 0;
   i22 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = i18;
   do {
    if ((i22 | 0) != 0) {
     i18 = i22 + 8 | 0;
     i19 = i18 | 0;
     i24 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     HEAP32[i19 >> 2] = i24;
     if ((i24 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
    }
   } while (0);
   HEAP32[i8 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
   i22 = HEAP32[i13 + 8 >> 2] | 0;
   i18 = i8 + 8 | 0;
   i24 = i18;
   i19 = HEAP32[i24 >> 2] & -8 | i22 & 7;
   HEAP32[i24 >> 2] = i19;
   HEAP8[i18] = i19 & 255 & -9 | i22 & 8;
   HEAP32[i8 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
   i22 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i19 = i22 + 8 | 0;
     i18 = i19 | 0;
     i24 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     HEAP32[i18 >> 2] = i24;
     if ((i24 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
    }
   } while (0);
   i22 = HEAP32[i14 >> 2] | 0;
   if ((i22 | 0) == 0) {
    i25 = i21;
    break;
   }
   i20 = i22 + 8 | 0;
   i22 = i20 | 0;
   i19 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   HEAP32[i22 >> 2] = i19;
   if ((i19 | 0) >= 1) {
    i25 = i21;
    break;
   }
   if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
    i25 = i21;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
   i25 = i21;
  } else {
   i25 = i1 | 0;
  }
 } while (0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i15, i3, 1);
 __ZN7WebCore20CompositeEditCommand23moveParagraphWithClonesERKNS_15VisiblePositionES3_PNS_7ElementEPNS_4NodeE(i25, i8, i15, HEAP32[i7 >> 2] | 0, i23);
 i7 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i15 = i7 + 8 | 0;
   i25 = i15 | 0;
   i3 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   HEAP32[i25 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
  }
 } while (0);
 i7 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i8 = i7 + 8 | 0;
   i15 = i8 | 0;
   i3 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   HEAP32[i15 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 do {
  if ((i23 | 0) != 0) {
   i7 = i23 + 8 | 0;
   i8 = i7 | 0;
   i3 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 if (!i17) {
  STACKTOP = i5;
  return;
 }
 i17 = i16 + 8 | 0;
 i16 = i17 | 0;
 i23 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
 HEAP32[i16 >> 2] = i23;
 if ((i23 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore20IndentOutdentCommand22tryIndentingAsListItemERKNS_8PositionES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 40 | 0;
 i10 = i4 + 56 | 0;
 i11 = i4 + 64 | 0;
 i12 = i4 + 72 | 0;
 i13 = i4 + 80 | 0;
 i14 = HEAP32[i2 >> 2] | 0;
 i15 = __ZN7WebCore13enclosingListEPNS_4NodeE(i14) | 0;
 if ((i15 | 0) == 0) {
  i16 = 0;
  STACKTOP = i4;
  return i16 | 0;
 }
 i17 = i15 + 8 | 0;
 HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
 i17 = __ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(i14, 1) | 0;
 i14 = (i17 | 0) == 0;
 if (!i14) {
  i18 = i17 + 8 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
 }
 i18 = HEAP32[i17 + 44 >> 2] | 0;
 i19 = HEAP32[__ZN7WebCore9HTMLNames5liTagE >> 2] | 0;
 do {
  if ((i18 | 0) == (i19 | 0)) {
   i20 = 7;
  } else {
   if ((HEAP32[i18 + 12 >> 2] | 0) != (HEAP32[i19 + 12 >> 2] | 0)) {
    i21 = 0;
    break;
   }
   if ((HEAP32[i18 + 16 >> 2] | 0) == (HEAP32[i19 + 16 >> 2] | 0)) {
    i20 = 7;
   } else {
    i21 = 0;
   }
  }
 } while (0);
 do {
  if ((i20 | 0) == 7) {
   i19 = i17 + 24 | 0;
   while (1) {
    i22 = HEAP32[i19 >> 2] | 0;
    if ((i22 | 0) == 0) {
     i23 = 0;
     i24 = 0;
     i25 = 1;
     break;
    }
    if ((HEAP32[i22 + 12 >> 2] & 4 | 0) == 0) {
     i19 = i22 + 24 | 0;
    } else {
     i20 = 10;
     break;
    }
   }
   if ((i20 | 0) == 10) {
    i19 = i22 + 8 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
    i23 = i22;
    i24 = i22;
    i25 = 0;
   }
   i19 = i17 + 28 | 0;
   while (1) {
    i26 = HEAP32[i19 >> 2] | 0;
    if ((i26 | 0) == 0) {
     i27 = 0;
     i28 = 0;
     i29 = 1;
     break;
    }
    if ((HEAP32[i26 + 12 >> 2] & 4 | 0) == 0) {
     i19 = i26 + 28 | 0;
    } else {
     i20 = 14;
     break;
    }
   }
   if ((i20 | 0) == 14) {
    i19 = i26 + 8 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
    i27 = i26;
    i28 = i26;
    i29 = 0;
   }
   __ZN7WebCore8Document13createElementERKNS_13QualifiedNameEb(i5, HEAP32[i1 + 8 >> 2] | 0, i15 + 44 | 0, 0);
   i19 = i5 | 0;
   i18 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = 0;
   i19 = i1 | 0;
   i30 = i6 | 0;
   HEAP32[i30 >> 2] = i18;
   i31 = (i18 | 0) == 0;
   if (!i31) {
    i32 = i18 + 8 | 0;
    HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
   }
   i32 = i7 | 0;
   i33 = i17 | 0;
   HEAP32[i32 >> 2] = i33;
   if (!i14) {
    i34 = i17 + 8 | 0;
    HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 1;
   }
   __ZN7WebCore20CompositeEditCommand16insertNodeBeforeEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE(i19, i6, i7, 1);
   i34 = HEAP32[i32 >> 2] | 0;
   do {
    if ((i34 | 0) != 0) {
     i32 = i34 + 8 | 0;
     i35 = i32 | 0;
     i36 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
     HEAP32[i35 >> 2] = i36;
     if ((i36 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
    }
   } while (0);
   i34 = HEAP32[i30 >> 2] | 0;
   do {
    if ((i34 | 0) != 0) {
     i32 = i34 + 8 | 0;
     i36 = i32 | 0;
     i35 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
     HEAP32[i36 >> 2] = i35;
     if ((i35 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i8, i2, 1);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i9, i3, 1);
   __ZN7WebCore20CompositeEditCommand23moveParagraphWithClonesERKNS_15VisiblePositionES3_PNS_7ElementEPNS_4NodeE(i19, i8, i9, i18, i33);
   i34 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i34 | 0) != 0) {
     i30 = i34 + 8 | 0;
     i32 = i30 | 0;
     i35 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
     HEAP32[i32 >> 2] = i35;
     if ((i35 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
    }
   } while (0);
   i34 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i34 | 0) != 0) {
     i33 = i34 + 8 | 0;
     i30 = i33 | 0;
     i35 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
     HEAP32[i30 >> 2] = i35;
     if ((i35 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i33 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i33 - 8 | 0);
    }
   } while (0);
   do {
    if (__ZN7WebCore13canMergeListsEPNS_7ElementES1_(i24, i18) | 0) {
     i34 = i10 | 0;
     HEAP32[i34 >> 2] = i24;
     if (!i25) {
      i33 = i23 + 8 | 0;
      HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
     }
     i33 = i11 | 0;
     HEAP32[i33 >> 2] = i18;
     if (!i31) {
      i35 = i18 + 8 | 0;
      HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 1;
     }
     __ZN7WebCore20CompositeEditCommand22mergeIdenticalElementsEN3WTF10PassRefPtrINS_7ElementEEES4_(i19, i10, i11);
     i35 = HEAP32[i33 >> 2] | 0;
     do {
      if ((i35 | 0) != 0) {
       i33 = i35 + 8 | 0;
       i30 = i33 | 0;
       i32 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
       HEAP32[i30 >> 2] = i32;
       if ((i32 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i33 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i33 - 8 | 0);
      }
     } while (0);
     i35 = HEAP32[i34 >> 2] | 0;
     if ((i35 | 0) == 0) {
      break;
     }
     i33 = i35 + 8 | 0;
     i35 = i33 | 0;
     i32 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
     HEAP32[i35 >> 2] = i32;
     if ((i32 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i33 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i33 - 8 | 0);
    }
   } while (0);
   do {
    if (__ZN7WebCore13canMergeListsEPNS_7ElementES1_(i18, i28) | 0) {
     i33 = i12 | 0;
     HEAP32[i33 >> 2] = i18;
     if (!i31) {
      i32 = i18 + 8 | 0;
      HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
     }
     i32 = i13 | 0;
     HEAP32[i32 >> 2] = i28;
     if (!i29) {
      i35 = i27 + 8 | 0;
      HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 1;
     }
     __ZN7WebCore20CompositeEditCommand22mergeIdenticalElementsEN3WTF10PassRefPtrINS_7ElementEEES4_(i19, i12, i13);
     i35 = HEAP32[i32 >> 2] | 0;
     do {
      if ((i35 | 0) != 0) {
       i32 = i35 + 8 | 0;
       i30 = i32 | 0;
       i36 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
       HEAP32[i30 >> 2] = i36;
       if ((i36 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
      }
     } while (0);
     i35 = HEAP32[i33 >> 2] | 0;
     if ((i35 | 0) == 0) {
      break;
     }
     i34 = i35 + 8 | 0;
     i35 = i34 | 0;
     i32 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
     HEAP32[i35 >> 2] = i32;
     if ((i32 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
    }
   } while (0);
   do {
    if (!i31) {
     i19 = i18 + 8 | 0;
     i34 = i19 | 0;
     i32 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
     HEAP32[i34 >> 2] = i32;
     if ((i32 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
    }
   } while (0);
   do {
    if (!i29) {
     i18 = i27 + 8 | 0;
     i31 = i18 | 0;
     i19 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
     HEAP32[i31 >> 2] = i19;
     if ((i19 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
    }
   } while (0);
   if (i25) {
    i21 = 1;
    break;
   }
   i18 = i23 + 8 | 0;
   i19 = i18 | 0;
   i31 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   HEAP32[i19 >> 2] = i31;
   if ((i31 | 0) >= 1) {
    i21 = 1;
    break;
   }
   if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
    i21 = 1;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
   i21 = 1;
  }
 } while (0);
 do {
  if (!i14) {
   i23 = i17 + 8 | 0;
   i25 = i23 | 0;
   i27 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   HEAP32[i25 >> 2] = i27;
   if ((i27 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
  }
 } while (0);
 i17 = i15 + 8 | 0;
 i15 = i17 | 0;
 i14 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
 HEAP32[i15 >> 2] = i14;
 if ((i14 | 0) >= 1) {
  i16 = i21;
  STACKTOP = i4;
  return i16 | 0;
 }
 if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
  i16 = i21;
  STACKTOP = i4;
  return i16 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
 i16 = i21;
 STACKTOP = i4;
 return i16 | 0;
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
function __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 + 12 | 0;
 if ((HEAP32[i6 >> 2] & 1 | 0) == 0) {
  i7 = i5 | 0;
  HEAP32[i7 >> 2] = i2;
  i8 = i2 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i1, i5, 4);
  i5 = HEAP32[i7 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i7 = i5 + 8 | 0;
  i5 = i7 | 0;
  i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  HEAP32[i5 >> 2] = i8;
  if ((i8 | 0) >= 1) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  STACKTOP = i3;
  return;
 }
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = i2;
 i8 = i2 + 8 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 164 >> 2] & 31](i2) | 0) {
   i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 168 >> 2] & 31](i2) | 0;
  } else {
   if ((HEAP32[i6 >> 2] & 2 | 0) == 0) {
    i9 = 0;
    break;
   }
   i9 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i2) | 0;
  }
 } while (0);
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i1, i4, i9, 0);
 i9 = HEAP32[i7 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i9 + 8 | 0;
 i9 = i7 | 0;
 i4 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 HEAP32[i9 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCoreL24isListOrIndentBlockquoteEPKNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = (HEAP32[i1 + 12 >> 2] & 4 | 0) == 0;
 if (i3) {
  i2 = 0;
  return i2 | 0;
 }
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 i5 = HEAP32[__ZN7WebCore9HTMLNames5ulTagE >> 2] | 0;
 if ((i4 | 0) == (i5 | 0)) {
  i2 = 1;
  return i2 | 0;
 }
 do {
  if ((HEAP32[i4 + 12 >> 2] | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   i6 = (HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0);
   if (i6 | i3) {
    i2 = i6;
   } else {
    break;
   }
   return i2 | 0;
  } else {
   if (i3) {
    i2 = 0;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 i5 = HEAP32[i1 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore9HTMLNames5olTagE >> 2] | 0;
 if ((i5 | 0) == (i4 | 0)) {
  i2 = 1;
  return i2 | 0;
 }
 do {
  if ((HEAP32[i5 + 12 >> 2] | 0) == (HEAP32[i4 + 12 >> 2] | 0)) {
   i6 = (HEAP32[i5 + 16 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0);
   if (i6 | i3) {
    i2 = i6;
   } else {
    break;
   }
   return i2 | 0;
  } else {
   if (i3) {
    i2 = 0;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 i3 = HEAP32[i1 + 44 >> 2] | 0;
 i1 = HEAP32[__ZN7WebCore9HTMLNames13blockquoteTagE >> 2] | 0;
 if ((i3 | 0) == (i1 | 0)) {
  i2 = 1;
  return i2 | 0;
 }
 if ((HEAP32[i3 + 12 >> 2] | 0) != (HEAP32[i1 + 12 >> 2] | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP32[i3 + 16 >> 2] | 0) == (HEAP32[i1 + 16 >> 2] | 0);
 return i2 | 0;
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
function __ZN7WebCore20IndentOutdentCommandC2ERNS_8DocumentENS0_11EIndentTypeEi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 __ZN3WTF12AtomicString3addEPKh(i6, H_BASE + 8 | 0);
 i8 = i7 | 0;
 HEAP32[i8 >> 2] = HEAP32[i6 >> 2];
 __ZN7WebCore24ApplyBlockElementCommandC2ERNS_8DocumentERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, i2, __ZN7WebCore9HTMLNames13blockquoteTagE, i7);
 i7 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i8 = i7 | 0;
   i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i8 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = H_BASE + 64;
 HEAP32[i1 + 172 >> 2] = i3;
 HEAP32[i1 + 176 >> 2] = i4;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore20IndentOutdentCommandC1ERNS_8DocumentENS0_11EIndentTypeEi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 __ZN3WTF12AtomicString3addEPKh(i6, H_BASE + 8 | 0);
 i8 = i7 | 0;
 HEAP32[i8 >> 2] = HEAP32[i6 >> 2];
 __ZN7WebCore24ApplyBlockElementCommandC2ERNS_8DocumentERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, i2, __ZN7WebCore9HTMLNames13blockquoteTagE, i7);
 i7 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i8 = i7 | 0;
   i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i8 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = H_BASE + 64;
 HEAP32[i1 + 172 >> 2] = i3;
 HEAP32[i1 + 176 >> 2] = i4;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore20IndentOutdentCommandD0Ev(i1) {
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
function __ZN7WebCore20IndentOutdentCommandD1Ev(i1) {
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
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_viiiii + 2;
}
function __ZN7WebCore20IndentOutdentCommand11formatRangeERKNS_8PositionES3_S3_RN3WTF6RefPtrINS_7ElementEEE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 if (!(__ZN7WebCore20IndentOutdentCommand22tryIndentingAsListItemERKNS_8PositionES3_(i1, i2, i3) | 0)) {
  __ZN7WebCore20IndentOutdentCommand20indentIntoBlockquoteERKNS_8PositionES3_RN3WTF6RefPtrINS_7ElementEEE(i1, i2, i3, i5);
  return;
 }
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i5 | 0) == 0) {
  return;
 }
 i3 = i5 + 8 | 0;
 i5 = i3 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
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
function __ZN7WebCore20IndentOutdentCommand15formatSelectionERKNS_15VisiblePositionES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((HEAP32[i1 + 172 >> 2] | 0) == 0) {
  __ZN7WebCore24ApplyBlockElementCommand15formatSelectionERKNS_15VisiblePositionES3_(i1 | 0, i2, i3);
  return;
 } else {
  __ZN7WebCore20IndentOutdentCommand13outdentRegionERKNS_15VisiblePositionES3_(i1, i2, i3);
  return;
 }
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
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
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
function __ZNK7WebCore20IndentOutdentCommand13editingActionEv(i1) {
 i1 = i1 | 0;
 return ((HEAP32[i1 + 172 >> 2] | 0) == 0 ? 37 : 38) | 0;
}
function ii___ZN7WebCore11isTableCellEPKNS_4NodeE__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11isTableCellEPKNS_4NodeE(i1 | 0) | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function ii___ZN7WebCore8isInlineEPKNS_4NodeE__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore8isInlineEPKNS_4NodeE(i1 | 0) | 0;
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
function __ZNK7WebCore20IndentOutdentCommand20preservesTypingStyleEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore20CompositeEditCommand18isDictationCommandEv(i1) {
 i1 = i1 | 0;
 return 0;
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
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore20IndentOutdentCommand11formatRangeERKNS_8PositionES3_S3_RN3WTF6RefPtrINS_7ElementEEE,b0];
  var FUNCTION_TABLE_vi = [b1,b1,vi___ZN7WebCore24ApplyBlockElementCommand7doApplyEv__wrapper,b1,__ZN7WebCore20IndentOutdentCommandD1Ev,b1,__ZN7WebCore20IndentOutdentCommandD0Ev,b1];
  var FUNCTION_TABLE_vii = [b2,b2,vii___ZN7WebCore20CompositeEditCommand38setShouldRetainAutocorrectionIndicatorEb__wrapper,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore20IndentOutdentCommand20preservesTypingStyleEv,b3,__ZNK7WebCore20IndentOutdentCommand13editingActionEv,b3,__ZN7WebCoreL24isListOrIndentBlockquoteEPKNS_4NodeE,b3,ii___ZNK7WebCore20CompositeEditCommand35shouldRetainAutocorrectionIndicatorEv__wrapper,b3,__ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv,b3,__ZNK7WebCore20CompositeEditCommand18isDictationCommandEv,b3,ii___ZNK7WebCore20CompositeEditCommand15isTypingCommandEv__wrapper,b3,ii___ZNK7WebCore20CompositeEditCommand19isCreateLinkCommandEv__wrapper,b3,ii___ZN7WebCore11isTableCellEPKNS_4NodeE__wrapper,b3,ii___ZN7WebCore8isInlineEPKNS_4NodeE__wrapper,b3,__ZNK7WebCore11EditCommand24isEditCommandCompositionEv,b3,__ZNK7WebCore11EditCommand19isSimpleEditCommandEv,b3,__ZNK7WebCore20CompositeEditCommand23shouldStopCaretBlinkingEv,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,viii___ZN7WebCore20CompositeEditCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE__wrapper,b4,__ZN7WebCore20IndentOutdentCommand15formatSelectionERKNS_15VisiblePositionES3_,b4,b4,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  var FUNCTION_TABLE_viiii = [b7,b7,viiii___ZN7WebCore20CompositeEditCommand18deleteTextFromNodeEN3WTF10PassRefPtrINS_4TextEEEjj__wrapper,b7,__ZN7WebCore20IndentOutdentCommandC2ERNS_8DocumentENS0_11EIndentTypeEi,b7,b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames13blockquoteTagE": __ZN7WebCore9HTMLNames13blockquoteTagE, "__ZN7WebCore9HTMLNames5liTagE": __ZN7WebCore9HTMLNames5liTagE, "__ZTVN7WebCore24ApplyBlockElementCommandE": __ZTVN7WebCore24ApplyBlockElementCommandE, "__ZN7WebCore9HTMLNames5ulTagE": __ZN7WebCore9HTMLNames5ulTagE, "__ZN7WebCore9HTMLNames5olTagE": __ZN7WebCore9HTMLNames5olTagE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore20CompositeEditCommand18isDictationCommandEv","_strlen","__ZN7WebCore20IndentOutdentCommandD1Ev","__ZN7WebCore20IndentOutdentCommand20indentIntoBlockquoteERKNS_8PositionES3_RN3WTF6RefPtrINS_7ElementEEE","__ZN7WebCore18lastPositionInNodeEPNS_4NodeE","_memset","__ZN7WebCore20IndentOutdentCommand11formatRangeERKNS_8PositionES3_S3_RN3WTF6RefPtrINS_7ElementEEE","__ZNK7WebCore20IndentOutdentCommand20preservesTypingStyleEv","__ZN7WebCore20IndentOutdentCommand22tryIndentingAsListItemERKNS_8PositionES3_","__ZN7WebCoreL24isListOrIndentBlockquoteEPKNS_4NodeE","__ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv","_memcpy","__ZN7WebCore19firstPositionInNodeEPNS_4NodeE","__ZN7WebCore20IndentOutdentCommand13outdentRegionERKNS_15VisiblePositionES3_","__ZN7WebCore20IndentOutdentCommandC2ERNS_8DocumentENS0_11EIndentTypeEi","__ZN7WebCoreeqERKNS_15VisiblePositionES2_","__ZN7WebCore16VisibleSelectionD2Ev","__ZN7WebCore20IndentOutdentCommandD0Ev","__ZNK7WebCore20IndentOutdentCommand13editingActionEv","__ZN7WebCore20IndentOutdentCommand16outdentParagraphEv","__ZN7WebCore20IndentOutdentCommand15formatSelectionERKNS_15VisiblePositionES3_","__ZNK7WebCore11EditCommand24isEditCommandCompositionEv","__ZNK7WebCore11EditCommand19isSimpleEditCommandEv","__ZNK7WebCore20CompositeEditCommand23shouldStopCaretBlinkingEv"]

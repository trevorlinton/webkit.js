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
H_BASE = parentModule["_malloc"](768 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 768;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore17HTMLAnchorElementC1ERKNS_13QualifiedNameERNS_8DocumentE;
var __ZN7WebCore17HTMLAnchorElementD1Ev;
/* memory initializer */ allocate([47,0,0,0,0,0,0,0,48,0,0,0,0,0,0,0,58,0,0,0,0,0,0,0,35,0,0,0,0,0,0,0,110,111,114,101,102,101,114,114,101,114,0,0,0,0,0,0,102,97,108,115,101,0,0,0,116,114,117,101,0,0,0,0,47,47,0,0,0,0,0,0,69,110,116,101,114,0,0,0,37,50,51,0,0,0,0,0,63,0,0,0,0,0,0,0,104,116,116,112,115,0,0,0,104,116,116,112,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZN7WebCore9HTMLNames8pingAttrE=env.__ZN7WebCore9HTMLNames8pingAttrE|0;
  var __ZN7WebCore9HTMLNames6imgTagE=env.__ZN7WebCore9HTMLNames6imgTagE|0;
  var __ZTVN7WebCore4NodeE=env.__ZTVN7WebCore4NodeE|0;
  var __ZN7WebCore9HTMLNames10targetAttrE=env.__ZN7WebCore9HTMLNames10targetAttrE|0;
  var __ZN7WebCore9HTMLNames8nameAttrE=env.__ZN7WebCore9HTMLNames8nameAttrE|0;
  var __ZN7WebCore9HTMLNames7relAttrE=env.__ZN7WebCore9HTMLNames7relAttrE|0;
  var __ZN7WebCore9HTMLNames13draggableAttrE=env.__ZN7WebCore9HTMLNames13draggableAttrE|0;
  var __ZTVN7WebCore7ElementE=env.__ZTVN7WebCore7ElementE|0;
  var __ZN7WebCore9HTMLNames4aTagE=env.__ZN7WebCore9HTMLNames4aTagE|0;
  var __ZN7WebCore9HTMLNames9titleAttrE=env.__ZN7WebCore9HTMLNames9titleAttrE|0;
  var __ZN7WebCore9HTMLNames8hrefAttrE=env.__ZN7WebCore9HTMLNames8hrefAttrE|0;
  var __ZN7WebCore17InspectorCounters10s_countersE=env.__ZN7WebCore17InspectorCounters10s_countersE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZZN7WebCore9TreeScope18noDocumentInstanceEvE8instance=(H_BASE+760)|0;
  var __ZTVN7WebCore17HTMLAnchorElementE=(H_BASE+120)|0;
  var __ZGVZN7WebCore9TreeScope18noDocumentInstanceEvE8instance=(H_BASE+768)|0;
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
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var _floorf=env._floorf;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore17HTMLAnchorElement7setHostERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 88 | 0;
 i11 = i3 + 96 | 0;
 i12 = i3 + 104 | 0;
 i13 = i3 + 112 | 0;
 i14 = i3 + 120 | 0;
 i15 = i3 + 128 | 0;
 i16 = i2 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 if ((i17 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i17 + 4 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i17 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i18 = i1 | 0;
 __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i8, __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i18, __ZN7WebCore9HTMLNames8hrefAttrE) | 0);
 __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i9, i17, i8);
 i17 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i8 = i17 | 0;
   i1 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i8 >> 2] = i1;
    break;
   }
  }
 } while (0);
 L13 : do {
  if (__ZNK7WebCore3URL14isHierarchicalEv(i9) | 0) {
   i17 = HEAP32[i16 >> 2] | 0;
   L15 : do {
    if ((i17 | 0) == 0) {
     i19 = 17;
    } else {
     i1 = (HEAP32[i17 + 16 >> 2] & 32 | 0) == 0;
     if (i1) {
      i8 = HEAP32[i17 + 8 >> 2] | 0;
      i20 = HEAP32[i17 + 4 >> 2] | 0;
      i21 = i8;
      i22 = 0;
      while (1) {
       if (i22 >>> 0 >= i20 >>> 0) {
        i19 = 17;
        break L15;
       }
       if ((HEAP16[i8 + (i22 << 1) >> 1] | 0) == 58) {
        i23 = i22;
        i24 = i20;
        i25 = i8;
        i26 = i21;
        break;
       } else {
        i22 = i22 + 1 | 0;
       }
      }
     } else {
      i22 = HEAP32[i17 + 8 >> 2] | 0;
      i21 = HEAP32[i17 + 4 >> 2] | 0;
      i8 = i22;
      i20 = 0;
      while (1) {
       if (i20 >>> 0 >= i21 >>> 0) {
        i19 = 17;
        break L15;
       }
       if ((HEAP8[i22 + i20 | 0] | 0) == 58) {
        i23 = i20;
        i24 = i21;
        i25 = i8;
        i26 = i22;
        break;
       } else {
        i20 = i20 + 1 | 0;
       }
      }
     }
     if ((i23 | 0) == 0) {
      break L13;
     } else if ((i23 | 0) == (-1 | 0)) {
      i19 = 17;
      break;
     }
     i20 = i23 + 1 | 0;
     i22 = i20;
     i8 = i25;
     while (1) {
      if (i24 >>> 0 <= i22 >>> 0) {
       break;
      }
      if (i1) {
       i27 = HEAP16[i8 + (i22 << 1) >> 1] | 0;
       i28 = i8;
      } else {
       i27 = HEAPU8[i26 + i22 | 0] | 0;
       i28 = i26;
      }
      if ((i27 - 48 & 65535) >>> 0 < 10 >>> 0) {
       i22 = i22 + 1 | 0;
       i8 = i28;
      } else {
       break;
      }
     }
     __ZNK3WTF6String9substringEjj(i7, i2, i20, i22 - i20 | 0);
     i8 = __ZNK3WTF6String6toUIntEPb(i7, 0) | 0;
     i1 = HEAP32[i7 >> 2] | 0;
     do {
      if ((i1 | 0) != 0) {
       i21 = i1 | 0;
       i29 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
       if ((i29 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i1);
        break;
       } else {
        HEAP32[i21 >> 2] = i29;
        break;
       }
      }
     } while (0);
     if ((i8 | 0) != 0) {
      __ZNK7WebCore3URL8protocolEv(i12, i9);
      i1 = __ZN7WebCore24isDefaultPortForProtocolEtRKN3WTF6StringE(i8 & 65535, i12) | 0;
      i29 = HEAP32[i12 >> 2] | 0;
      do {
       if ((i29 | 0) != 0) {
        i21 = i29 | 0;
        i30 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
        if ((i30 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i29);
         break;
        } else {
         HEAP32[i21 >> 2] = i30;
         break;
        }
       }
      } while (0);
      if (i1) {
       __ZNK3WTF6String9substringEjj(i13, i2, 0, i23);
       __ZN7WebCore3URL14setHostAndPortERKN3WTF6StringE(i9, i13);
       i29 = HEAP32[i13 >> 2] | 0;
       if ((i29 | 0) == 0) {
        break;
       }
       i8 = i29 | 0;
       i30 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
       if ((i30 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i29);
        break;
       } else {
        HEAP32[i8 >> 2] = i30;
        break;
       }
      } else {
       __ZNK3WTF6String9substringEjj(i14, i2, 0, i22);
       __ZN7WebCore3URL14setHostAndPortERKN3WTF6StringE(i9, i14);
       i30 = HEAP32[i14 >> 2] | 0;
       if ((i30 | 0) == 0) {
        break;
       }
       i8 = i30 | 0;
       i29 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
       if ((i29 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i30);
        break;
       } else {
        HEAP32[i8 >> 2] = i29;
        break;
       }
      }
     }
     __ZNK3WTF6String9substringEjj(i11, i2, 0, i20);
     i29 = i11 | 0;
     i8 = HEAP32[i29 >> 2] | 0;
     do {
      if ((i8 | 0) == 0) {
       i31 = 0;
      } else {
       i30 = i8 | 0;
       i21 = HEAP32[i30 >> 2] | 0;
       i32 = i21 + 2 | 0;
       HEAP32[i30 >> 2] = i21 + 4;
       if ((i32 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i8);
        i31 = i8;
        break;
       } else {
        HEAP32[i30 >> 2] = i32;
        i31 = i8;
        break;
       }
      }
     } while (0);
     i8 = i6 | 0;
     HEAP32[i8 >> 2] = i31;
     i20 = (i31 | 0) == 0;
     if (!i20) {
      i22 = i31 | 0;
      HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
     }
     __ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i5, i6, H_BASE + 16 | 0);
     i22 = i5 | 0;
     i1 = HEAP32[i22 >> 2] | 0;
     HEAP32[i22 >> 2] = 0;
     i22 = HEAP32[i8 >> 2] | 0;
     do {
      if ((i22 | 0) != 0) {
       i8 = i22 | 0;
       i32 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
       if ((i32 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i22);
        break;
       } else {
        HEAP32[i8 >> 2] = i32;
        break;
       }
      }
     } while (0);
     if ((i1 | 0) == 0) {
      _WTFCrash();
     }
     i22 = i10 | 0;
     HEAP32[i22 >> 2] = i1;
     __ZN7WebCore3URL14setHostAndPortERKN3WTF6StringE(i9, i10);
     i32 = HEAP32[i22 >> 2] | 0;
     do {
      if ((i32 | 0) != 0) {
       i22 = i32 | 0;
       i8 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
       if ((i8 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i32);
        break;
       } else {
        HEAP32[i22 >> 2] = i8;
        break;
       }
      }
     } while (0);
     do {
      if (!i20) {
       i32 = i31 | 0;
       i1 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
       if ((i1 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i31);
        break;
       } else {
        HEAP32[i32 >> 2] = i1;
        break;
       }
      }
     } while (0);
     i20 = HEAP32[i29 >> 2] | 0;
     if ((i20 | 0) == 0) {
      break;
     }
     i1 = i20 | 0;
     i32 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
     if ((i32 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i1 >> 2] = i32;
      break;
     }
    }
   } while (0);
   if ((i19 | 0) == 17) {
    __ZN7WebCore3URL14setHostAndPortERKN3WTF6StringE(i9, i2);
   }
   i17 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i17 | 0) == 0) {
     i32 = i4 | 0;
     HEAP32[i32 >> 2] = 0;
     i33 = i32;
    } else {
     if ((HEAP32[i17 + 16 >> 2] & 16 | 0) == 0) {
      __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i17);
      i33 = i4 | 0;
      break;
     } else {
      i32 = i4 | 0;
      HEAP32[i32 >> 2] = i17;
      i1 = i17 | 0;
      HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
      i33 = i32;
      break;
     }
    }
   } while (0);
   i17 = i15 | 0;
   HEAP32[i17 >> 2] = HEAP32[i33 >> 2];
   __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i18, __ZN7WebCore9HTMLNames8hrefAttrE, i15);
   i32 = HEAP32[i17 >> 2] | 0;
   if ((i32 | 0) == 0) {
    break;
   }
   i17 = i32 | 0;
   i1 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i32);
    break;
   } else {
    HEAP32[i17 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i15 = HEAP32[i9 >> 2] | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i15 | 0;
 i18 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i18 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i15);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i9 >> 2] = i18;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore17HTMLAnchorElement11handleClickEPNS_5EventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, d34 = +0, d35 = +0, i36 = 0, i37 = 0, i38 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 56 | 0;
 i10 = i3 + 64 | 0;
 i11 = i3 + 112 | 0;
 i12 = i3 + 120 | 0;
 i13 = i3 + 128 | 0;
 HEAP8[i2 + 21 | 0] = 1;
 i14 = i1 + 20 | 0;
 i15 = HEAP32[(HEAP32[(HEAP32[i14 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i16 = i8 | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = i8 + 4 | 0;
 HEAP32[i17 >> 2] = 0;
 i18 = i8 + 8 | 0;
 HEAP32[i18 >> 2] = 0;
 i19 = i8 + 12 | 0;
 HEAP8[i19] = 1;
 HEAP32[i8 + 16 >> 2] = 0;
 i20 = i8 + 20 | 0;
 HEAP32[i20 >> 2] = 0;
 i21 = HEAP32[i1 + 48 >> 2] | 0;
 L4 : do {
  if ((i21 | 0) == 0) {
   i22 = __ZN3WTF8nullAtomE;
  } else {
   i23 = HEAP32[i21 + 4 >> 2] | 0;
   if ((i23 & 1 | 0) == 0) {
    i24 = i23 >>> 1 & 134217727;
    i25 = i21 + 20 | 0;
   } else {
    i23 = i21 + 24 | 0;
    i24 = HEAP32[i23 + 8 >> 2] | 0;
    i25 = HEAP32[i23 >> 2] | 0;
   }
   if ((i24 | 0) == 0) {
    i22 = __ZN3WTF8nullAtomE;
    break;
   }
   i23 = HEAP32[__ZN7WebCore9HTMLNames8hrefAttrE >> 2] | 0;
   i26 = i23 + 12 | 0;
   i27 = i23 + 16 | 0;
   i28 = 0;
   while (1) {
    i29 = i25 + (i28 << 3) | 0;
    i30 = HEAP32[i29 >> 2] | 0;
    if ((i30 | 0) == (i23 | 0)) {
     break;
    }
    if ((HEAP32[i30 + 12 >> 2] | 0) == (HEAP32[i26 >> 2] | 0)) {
     if ((HEAP32[i30 + 16 >> 2] | 0) == (HEAP32[i27 >> 2] | 0)) {
      break;
     }
    }
    i30 = i28 + 1 | 0;
    if (i30 >>> 0 < i24 >>> 0) {
     i28 = i30;
    } else {
     i22 = __ZN3WTF8nullAtomE;
     break L4;
    }
   }
   i22 = (i29 | 0) == 0 ? __ZN3WTF8nullAtomE : i25 + (i28 << 3) + 4 | 0;
  }
 } while (0);
 __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i9, i22 | 0);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i8, i9);
 i22 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i22 | 0) != 0) {
   i9 = i22 | 0;
   i25 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i25 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i22);
    break;
   } else {
    HEAP32[i9 >> 2] = i25;
    break;
   }
  }
 } while (0);
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2) | 0) {
   i22 = HEAP32[i2 + 32 >> 2] | 0;
   i25 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 8 >> 2] & 255](i22) | 0;
   i22 = i25 + 12 | 0;
   if ((HEAP32[i22 >> 2] & 16 | 0) == 0) {
    break;
   }
   if ((HEAP32[(HEAP32[i25 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6imgTagE >> 2] | 0) + 12 >> 2] | 0) | (i25 | 0) == 0) {
    break;
   }
   if (!(__ZNK7WebCore16HTMLImageElement11isServerMapEv(i25) | 0)) {
    break;
   }
   i9 = (HEAP32[i22 >> 2] & 2048 | 0) == 0;
   i29 = i25 + 32 | 0;
   if (i9) {
    i31 = i29 | 0;
   } else {
    i31 = HEAP32[i29 >> 2] | 0;
   }
   if ((HEAP32[i31 >> 2] | 0) == 0) {
    break;
   }
   if (i9) {
    i32 = i29 | 0;
   } else {
    i32 = HEAP32[i29 >> 2] | 0;
   }
   i9 = HEAP32[i32 >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 144 >> 2] & 255](i9) | 0)) {
    break;
   }
   if ((HEAP32[i22 >> 2] & 2048 | 0) == 0) {
    i33 = i29 | 0;
   } else {
    i33 = HEAP32[i29 >> 2] | 0;
   }
   i29 = HEAP32[i33 >> 2] | 0;
   i22 = i2;
   i9 = i2;
   d34 = +(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 80 >> 2] & 255](i22) | 0);
   d35 = +(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 84 >> 2] & 255](i22) | 0);
   HEAPF32[i7 >> 2] = d34;
   HEAPF32[i7 + 4 >> 2] = d35;
   __ZNK7WebCore12RenderObject15absoluteToLocalERKNS_10FloatPointEj(i6, i29, i7, 0);
   i29 = ~~+HEAPF32[i6 >> 2];
   i22 = ~~+HEAPF32[i6 + 4 >> 2];
   HEAP8[i4] = 63;
   i9 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i9 | 0) == 0) {
     i36 = 38;
    } else {
     i25 = HEAP32[i16 >> 2] | 0;
     if (i25 >>> 0 >= (HEAP32[i9 + 4 >> 2] | 0) >>> 0) {
      i36 = 38;
      break;
     }
     if ((HEAP32[i17 >> 2] | 0) != 0) {
      i36 = 38;
      break;
     }
     i24 = (HEAP8[i19] & 1) == 0;
     HEAP32[i16 >> 2] = i25 + 1;
     if (i24) {
      HEAP16[(HEAP32[i8 + 20 >> 2] | 0) + (i25 << 1) >> 1] = 63;
      break;
     } else {
      HEAP8[(HEAP32[i20 >> 2] | 0) + i25 | 0] = 63;
      break;
     }
    }
   } while (0);
   if ((i36 | 0) == 38) {
    __ZN3WTF13StringBuilder6appendEPKhj(i8, i4, 1);
   }
   __ZN3WTF13StringBuilder12appendNumberEi(i8, i29);
   HEAP8[i5] = 44;
   i9 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i9 | 0) == 0) {
     i36 = 45;
    } else {
     i28 = HEAP32[i16 >> 2] | 0;
     if (i28 >>> 0 >= (HEAP32[i9 + 4 >> 2] | 0) >>> 0) {
      i36 = 45;
      break;
     }
     if ((HEAP32[i17 >> 2] | 0) != 0) {
      i36 = 45;
      break;
     }
     i25 = (HEAP8[i19] & 1) == 0;
     HEAP32[i16 >> 2] = i28 + 1;
     if (i25) {
      HEAP16[(HEAP32[i8 + 20 >> 2] | 0) + (i28 << 1) >> 1] = 44;
      break;
     } else {
      HEAP8[(HEAP32[i20 >> 2] | 0) + i28 | 0] = 44;
      break;
     }
    }
   } while (0);
   if ((i36 | 0) == 45) {
    __ZN3WTF13StringBuilder6appendEPKhj(i8, i5, 1);
   }
   __ZN3WTF13StringBuilder12appendNumberEi(i8, i22);
  }
 } while (0);
 i5 = HEAP32[(HEAP32[i14 >> 2] | 0) + 8 >> 2] | 0;
 __ZN3WTF13StringBuilder11shrinkToFitEv(i8);
 i14 = HEAP32[i17 >> 2] | 0;
 if ((i14 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i8);
  i8 = HEAP32[i17 >> 2] | 0;
  i20 = i11 | 0;
  HEAP32[i20 >> 2] = i8;
  if ((i8 | 0) == 0) {
   i37 = i20;
  } else {
   i38 = i8;
   i36 = 50;
  }
 } else {
  HEAP32[i11 >> 2] = i14;
  i38 = i14;
  i36 = 50;
 }
 if ((i36 | 0) == 50) {
  i36 = i38 | 0;
  HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 2;
  i37 = i11 | 0;
 }
 __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i10, i5, i11);
 i11 = HEAP32[i37 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i37 = i11 | 0;
   i5 = (HEAP32[i37 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i37 >> 2] = i5;
    break;
   }
  }
 } while (0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 388 >> 2] & 63](i12, i1);
 i11 = i13 | 0;
 HEAP32[i11 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i5 = i2 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 __ZN7WebCore11FrameLoader11urlSelectedERKNS_3URLERKN3WTF6StringENS4_10PassRefPtrINS_5EventEEEbbNS_18ShouldSendReferrerE(i15 + 80 | 0, i10, i12, i13, 0, 0, (HEAP32[i1 + 52 >> 2] | 0) >>> 14 & 1);
 i13 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i11 = i13 + 8 | 0;
   i15 = i11 | 0;
   i5 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i15 >> 2] = i5;
    break;
   }
   i5 = i11 - 8 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 i13 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i12 = i13 | 0;
   i5 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i12 >> 2] = i5;
    break;
   }
  }
 } while (0);
 __ZN7WebCore17HTMLAnchorElement9sendPingsERKNS_3URLE(i1, i10);
 i1 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i10 = i1 | 0;
   i13 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i10 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i18 = i1 | 0;
   i13 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i18 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i17 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i17 = i1 | 0;
 i13 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
 if ((i13 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i17 >> 2] = i13;
  STACKTOP = i3;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_v + 8;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_iii + 24;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_v + 10;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_v + 4;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_iii + 22;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 728 >> 2] = F_BASE_ii + 110;
}
function __ZN3WTF13tryMakeStringINS_12StringAppendINS_6StringEPKcEES2_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 + 4 | 0;
 i8 = _strlen(HEAP32[i7 >> 2] | 0) | 0;
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 i10 = (i2 | 0) == 0;
 if (i10) {
  i11 = 0;
 } else {
  i11 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i12 = i3 | 0;
 i3 = HEAP32[i12 >> 2] | 0;
 i13 = (i3 | 0) == 0;
 if (i13) {
  i14 = 0;
 } else {
  i14 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i15 = _llvm_uadd_with_overflow_i32(i11 + i8 | 0, i14 | 0) | 0;
 i14 = i15;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i10) {
  i16 = 9;
 } else {
  if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
   i16 = 9;
  }
 }
 do {
  if ((i16 | 0) == 9) {
   if (!i13) {
    if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i14 | 0) == 0) {
     i2 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i2 | 0) == 0) {
      i16 = 28;
      break;
     }
     i10 = i2 | 0;
     HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
     i17 = i2;
     i18 = 0;
    } else {
     if (i14 >>> 0 > 4294967275 >>> 0) {
      i16 = 28;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i14 + 20 | 0);
     i2 = i6 | 0;
     i10 = HEAP32[i2 >> 2] | 0;
     HEAP32[i2 >> 2] = 0;
     if ((i10 | 0) == 0) {
      i16 = 28;
      break;
     }
     i2 = i10 + 20 | 0;
     HEAP32[i10 >> 2] = 2;
     HEAP32[i10 + 4 >> 2] = i14;
     HEAP32[i10 + 8 >> 2] = i2;
     HEAP32[i10 + 12 >> 2] = 0;
     HEAP32[i10 + 16 >> 2] = 32;
     i17 = i10;
     i18 = i2;
    }
   } while (0);
   if ((i16 | 0) == 28) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i2 = HEAP32[i7 >> 2] | 0;
   i10 = _strlen(i2 | 0) | 0;
   i15 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i15 | 0) == 0) {
     i19 = 0;
    } else {
     i8 = HEAP32[i15 + 4 >> 2] | 0;
     i11 = HEAP32[i15 + 8 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i19 = 0;
      break;
     } else {
      i20 = 0;
     }
     while (1) {
      HEAP8[i18 + i20 | 0] = HEAP8[i11 + i20 | 0] | 0;
      i20 = i20 + 1 | 0;
      if (i20 >>> 0 >= i8 >>> 0) {
       break;
      }
     }
     i8 = HEAP32[i9 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i19 = 0;
      break;
     }
     i19 = HEAP32[i8 + 4 >> 2] | 0;
    }
   } while (0);
   _memcpy(i18 + i19 | 0, i2 | 0, i10) | 0;
   i15 = _strlen(HEAP32[i7 >> 2] | 0) | 0;
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i21 = 0;
   } else {
    i21 = HEAP32[i8 + 4 >> 2] | 0;
   }
   i8 = i21 + i15 | 0;
   i15 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i11 = HEAP32[i15 + 4 >> 2] | 0;
     i22 = HEAP32[i15 + 8 >> 2] | 0;
     if ((i11 | 0) == 0) {
      break;
     } else {
      i23 = 0;
     }
     while (1) {
      HEAP8[i18 + (i8 + i23) | 0] = HEAP8[i22 + i23 | 0] | 0;
      i23 = i23 + 1 | 0;
      if (i23 >>> 0 >= i11 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i17;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i14 | 0) == 0) {
   i17 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i17 | 0) == 0) {
    i16 = 55;
    break;
   }
   i23 = i17 | 0;
   HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
   i24 = i17;
   i25 = 0;
  } else {
   if (i14 >>> 0 > 2147483637 >>> 0) {
    i16 = 55;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i14 << 1) + 20 | 0);
   i17 = i5 | 0;
   i23 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   if ((i23 | 0) == 0) {
    i16 = 55;
    break;
   }
   i17 = i23 + 20 | 0;
   HEAP32[i23 >> 2] = 2;
   HEAP32[i23 + 4 >> 2] = i14;
   HEAP32[i23 + 8 >> 2] = i17;
   HEAP32[i23 + 12 >> 2] = 0;
   HEAP32[i23 + 16 >> 2] = 0;
   i24 = i23;
   i25 = i17;
  }
 } while (0);
 if ((i16 | 0) == 55) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i16 = HEAP32[i7 >> 2] | 0;
 i14 = _strlen(i16 | 0) | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i26 = 0;
   i27 = 0;
  } else {
   i17 = HEAP32[i5 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i5 + 16 >> 2] & 32 | 0) == 0) {
     i23 = HEAP32[i5 + 8 >> 2] | 0;
     if ((i17 | 0) == 0) {
      break;
     } else {
      i28 = 0;
     }
     while (1) {
      HEAP16[i25 + (i28 << 1) >> 1] = HEAP16[i23 + (i28 << 1) >> 1] | 0;
      i28 = i28 + 1 | 0;
      if (i28 >>> 0 >= i17 >>> 0) {
       break;
      }
     }
    } else {
     i23 = HEAP32[i5 + 8 >> 2] | 0;
     if ((i17 | 0) == 0) {
      break;
     } else {
      i29 = 0;
     }
     while (1) {
      HEAP16[i25 + (i29 << 1) >> 1] = HEAPU8[i23 + i29 | 0] | 0;
      i29 = i29 + 1 | 0;
      if (i29 >>> 0 >= i17 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i17 = HEAP32[i9 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i26 = 0;
    i27 = 0;
    break;
   }
   i26 = HEAP32[i17 + 4 >> 2] | 0;
   i27 = i17;
  }
 } while (0);
 if ((i14 | 0) == 0) {
  i30 = i27;
 } else {
  i27 = 0;
  while (1) {
   HEAP16[i25 + (i27 + i26 << 1) >> 1] = HEAPU8[i16 + i27 | 0] | 0;
   i27 = i27 + 1 | 0;
   if (i27 >>> 0 >= i14 >>> 0) {
    break;
   }
  }
  i30 = HEAP32[i9 >> 2] | 0;
 }
 i9 = _strlen(HEAP32[i7 >> 2] | 0) | 0;
 if ((i30 | 0) == 0) {
  i31 = 0;
 } else {
  i31 = HEAP32[i30 + 4 >> 2] | 0;
 }
 i30 = i31 + i9 | 0;
 i9 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i12 = HEAP32[i9 + 4 >> 2] | 0;
   if ((HEAP32[i9 + 16 >> 2] & 32 | 0) == 0) {
    i31 = HEAP32[i9 + 8 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break;
    } else {
     i32 = 0;
    }
    while (1) {
     HEAP16[i25 + (i32 + i30 << 1) >> 1] = HEAP16[i31 + (i32 << 1) >> 1] | 0;
     i32 = i32 + 1 | 0;
     if (i32 >>> 0 >= i12 >>> 0) {
      break;
     }
    }
   } else {
    i31 = HEAP32[i9 + 8 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break;
    } else {
     i33 = 0;
    }
    while (1) {
     HEAP16[i25 + (i33 + i30 << 1) >> 1] = HEAPU8[i31 + i33 | 0] | 0;
     i33 = i33 + 1 | 0;
     if (i33 >>> 0 >= i12 >>> 0) {
      break;
     }
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i24;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore17HTMLAnchorElement4hostEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 56 | 0;
 i7 = i3 + 64 | 0;
 i8 = i3 + 80 | 0;
 i9 = i3 + 88 | 0;
 i10 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i4, __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i2 | 0, __ZN7WebCore9HTMLNames8hrefAttrE) | 0);
 __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i5, i10, i4);
 i10 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i4 = i10 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP32[i5 + 24 >> 2] | 0) == (HEAP32[i5 + 28 >> 2] | 0)) {
   __ZNK7WebCore3URL4hostEv(i1, i5);
  } else {
   i10 = __ZNK7WebCore3URL4portEv(i5) | 0;
   __ZNK7WebCore3URL8protocolEv(i6, i5);
   i2 = __ZN7WebCore24isDefaultPortForProtocolEtRKN3WTF6StringE(i10, i6) | 0;
   i10 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i4 = i10 | 0;
     i11 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i4 >> 2] = i11;
      break;
     }
    }
   } while (0);
   if (i2) {
    __ZNK7WebCore3URL4hostEv(i1, i5);
    break;
   }
   __ZNK7WebCore3URL4hostEv(i8, i5);
   i10 = i8 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i11 | 0) == 0) {
     i12 = 0;
    } else {
     i4 = i11 | 0;
     i13 = HEAP32[i4 >> 2] | 0;
     i14 = i13 + 2 | 0;
     HEAP32[i4 >> 2] = i13 + 4;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      i12 = i11;
      break;
     } else {
      HEAP32[i4 >> 2] = i14;
      i12 = i11;
      break;
     }
    }
   } while (0);
   __ZN3WTF6String6numberEi(i9, (__ZNK7WebCore3URL4portEv(i5) | 0) & 65535);
   i11 = (i12 | 0) == 0;
   if (!i11) {
    i2 = i12 | 0;
    HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
   }
   i2 = i9 | 0;
   i14 = HEAP32[i2 >> 2] | 0;
   i4 = (i14 | 0) == 0;
   if (!i4) {
    i13 = i14 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
   }
   i13 = i7 | 0;
   HEAP32[i13 >> 2] = i12;
   if (!i11) {
    i15 = i12 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
   }
   HEAP32[i7 + 4 >> 2] = H_BASE + 24;
   i15 = i7 + 8 | 0;
   HEAP32[i15 >> 2] = i14;
   do {
    if (!i4) {
     i16 = i14 | 0;
     i17 = HEAP32[i16 >> 2] | 0;
     HEAP32[i16 >> 2] = i17 + 2;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i16 >> 2] = i17;
      break;
     }
    }
   } while (0);
   do {
    if (!i11) {
     i14 = i12 | 0;
     i4 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i4 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i14 >> 2] = i4;
      break;
     }
    }
   } while (0);
   __ZNK3WTF12StringAppendINS0_INS_6StringEPKcEES1_EcvS1_Ev(i1, i7);
   i4 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i14 = i4 | 0;
     i17 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i4);
      break;
     } else {
      HEAP32[i14 >> 2] = i17;
      break;
     }
    }
   } while (0);
   i4 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i15 = i4 | 0;
     i17 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i4);
      break;
     } else {
      HEAP32[i15 >> 2] = i17;
      break;
     }
    }
   } while (0);
   i4 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i13 = i4 | 0;
     i17 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i4);
      break;
     } else {
      HEAP32[i13 >> 2] = i17;
      break;
     }
    }
   } while (0);
   do {
    if (!i11) {
     i4 = i12 | 0;
     i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i2 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i4 >> 2] = i2;
      break;
     }
    }
   } while (0);
   i11 = HEAP32[i10 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i2 = i11 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i2 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i5 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i12);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i7;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore17HTMLAnchorElement11setPathnameERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 80 | 0;
 i10 = i3 + 88 | 0;
 i11 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i12 = i1 | 0;
 __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i7, __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i12, __ZN7WebCore9HTMLNames8hrefAttrE) | 0);
 __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i8, i11, i7);
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i7 = i11 | 0;
   i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i7 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (__ZNK7WebCore3URL14isHierarchicalEv(i8) | 0) {
   i11 = HEAP32[i2 >> 2] | 0;
   L10 : do {
    if ((i11 | 0) == 0) {
     i13 = 0;
     i14 = 17;
    } else {
     do {
      if ((HEAP32[i11 + 4 >> 2] | 0) != 0) {
       i1 = i11 + 8 | 0;
       if ((HEAP32[i11 + 16 >> 2] & 32 | 0) == 0) {
        i15 = HEAP16[HEAP32[i1 >> 2] >> 1] | 0;
       } else {
        i15 = HEAPU8[HEAP32[i1 >> 2] | 0] | 0;
       }
       if (i15 << 16 >> 16 != 47) {
        break;
       }
       __ZN7WebCore3URL7setPathERKN3WTF6StringE(i8, i2);
       break L10;
      }
     } while (0);
     i1 = i11 | 0;
     i7 = HEAP32[i1 >> 2] | 0;
     i16 = i7 + 2 | 0;
     HEAP32[i1 >> 2] = i7 + 4;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      i13 = i11;
      i14 = 17;
      break;
     } else {
      HEAP32[i1 >> 2] = i16;
      i13 = i11;
      i14 = 17;
      break;
     }
    }
   } while (0);
   do {
    if ((i14 | 0) == 17) {
     i11 = i6 | 0;
     HEAP32[i11 >> 2] = i13;
     i16 = (i13 | 0) == 0;
     if (!i16) {
      i1 = i13 | 0;
      HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
     }
     __ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i5, H_BASE + 8 | 0, i6);
     i1 = i5 | 0;
     i7 = HEAP32[i1 >> 2] | 0;
     HEAP32[i1 >> 2] = 0;
     i1 = HEAP32[i11 >> 2] | 0;
     do {
      if ((i1 | 0) != 0) {
       i11 = i1 | 0;
       i17 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
       if ((i17 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i1);
        break;
       } else {
        HEAP32[i11 >> 2] = i17;
        break;
       }
      }
     } while (0);
     if ((i7 | 0) == 0) {
      _WTFCrash();
     }
     i1 = i9 | 0;
     HEAP32[i1 >> 2] = i7;
     __ZN7WebCore3URL7setPathERKN3WTF6StringE(i8, i9);
     i17 = HEAP32[i1 >> 2] | 0;
     do {
      if ((i17 | 0) != 0) {
       i1 = i17 | 0;
       i11 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
       if ((i11 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i17);
        break;
       } else {
        HEAP32[i1 >> 2] = i11;
        break;
       }
      }
     } while (0);
     if (i16) {
      break;
     }
     i17 = i13 | 0;
     i7 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i17 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i7 = i8 | 0;
   i17 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i17 | 0) == 0) {
     i11 = i4 | 0;
     HEAP32[i11 >> 2] = 0;
     i18 = i11;
    } else {
     if ((HEAP32[i17 + 16 >> 2] & 16 | 0) == 0) {
      __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i17);
      i18 = i4 | 0;
      break;
     } else {
      i11 = i4 | 0;
      HEAP32[i11 >> 2] = i17;
      i1 = i17 | 0;
      HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
      i18 = i11;
      break;
     }
    }
   } while (0);
   i17 = i10 | 0;
   HEAP32[i17 >> 2] = HEAP32[i18 >> 2];
   __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i12, __ZN7WebCore9HTMLNames8hrefAttrE, i10);
   i11 = HEAP32[i17 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i19 = i7;
    break;
   }
   i17 = i11 | 0;
   i1 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    i19 = i7;
    break;
   } else {
    HEAP32[i17 >> 2] = i1;
    i19 = i7;
    break;
   }
  } else {
   i19 = i8 | 0;
  }
 } while (0);
 i8 = HEAP32[i19 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i19 = i8 | 0;
 i10 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i19 >> 2] = i10;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i3 | 0) | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 i9 = (i2 | 0) == 0;
 if (i9) {
  i10 = 0;
 } else {
  i10 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i11 = _llvm_uadd_with_overflow_i32(i10 | 0, i7 | 0) | 0;
 i10 = i11;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if (!i9) {
   if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
    break;
   }
   do {
    if ((i10 | 0) == 0) {
     i11 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i11 | 0) == 0) {
      i12 = 37;
      break;
     }
     i13 = i11 | 0;
     HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
     i14 = i11;
     i15 = 0;
    } else {
     if (i10 >>> 0 > 2147483637 >>> 0) {
      i12 = 37;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i5, (i10 << 1) + 20 | 0);
     i11 = i5 | 0;
     i13 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = 0;
     if ((i13 | 0) == 0) {
      i12 = 37;
      break;
     }
     i11 = i13 + 20 | 0;
     HEAP32[i13 >> 2] = 2;
     HEAP32[i13 + 4 >> 2] = i10;
     HEAP32[i13 + 8 >> 2] = i11;
     HEAP32[i13 + 12 >> 2] = 0;
     HEAP32[i13 + 16 >> 2] = 0;
     i14 = i13;
     i15 = i11;
    }
   } while (0);
   if ((i12 | 0) == 37) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i11 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i11 | 0) == 0) {
     i16 = 0;
    } else {
     i13 = HEAP32[i11 + 4 >> 2] | 0;
     do {
      if ((HEAP32[i11 + 16 >> 2] & 32 | 0) == 0) {
       i17 = HEAP32[i11 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i18 = 0;
       }
       while (1) {
        HEAP16[i15 + (i18 << 1) >> 1] = HEAP16[i17 + (i18 << 1) >> 1] | 0;
        i18 = i18 + 1 | 0;
        if (i18 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      } else {
       i17 = HEAP32[i11 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i19 = 0;
       }
       while (1) {
        HEAP16[i15 + (i19 << 1) >> 1] = HEAPU8[i17 + i19 | 0] | 0;
        i19 = i19 + 1 | 0;
        if (i19 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      }
     } while (0);
     i13 = HEAP32[i8 >> 2] | 0;
     if ((i13 | 0) == 0) {
      i16 = 0;
      break;
     }
     i16 = HEAP32[i13 + 4 >> 2] | 0;
    }
   } while (0);
   if ((i7 | 0) != 0) {
    i11 = 0;
    while (1) {
     HEAP16[i15 + (i11 + i16 << 1) >> 1] = HEAPU8[i3 + i11 | 0] | 0;
     i11 = i11 + 1 | 0;
     if (i11 >>> 0 >= i7 >>> 0) {
      break;
     }
    }
   }
   HEAP32[i1 >> 2] = i14;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i10 | 0) == 0) {
   i14 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i14 | 0) == 0) {
    i12 = 19;
    break;
   }
   i16 = i14 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   i20 = i14;
   i21 = 0;
  } else {
   if (i10 >>> 0 > 4294967275 >>> 0) {
    i12 = 19;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i6, i10 + 20 | 0);
   i14 = i6 | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   if ((i16 | 0) == 0) {
    i12 = 19;
    break;
   }
   i14 = i16 + 20 | 0;
   HEAP32[i16 >> 2] = 2;
   HEAP32[i16 + 4 >> 2] = i10;
   HEAP32[i16 + 8 >> 2] = i14;
   HEAP32[i16 + 12 >> 2] = 0;
   HEAP32[i16 + 16 >> 2] = 32;
   i20 = i16;
   i21 = i14;
  }
 } while (0);
 if ((i12 | 0) == 19) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i12 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i22 = 0;
  } else {
   i10 = HEAP32[i12 + 4 >> 2] | 0;
   i6 = HEAP32[i12 + 8 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i23 = i12;
   } else {
    i14 = 0;
    while (1) {
     HEAP8[i21 + i14 | 0] = HEAP8[i6 + i14 | 0] | 0;
     i14 = i14 + 1 | 0;
     if (i14 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
    i10 = HEAP32[i8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i22 = 0;
     break;
    } else {
     i23 = i10;
    }
   }
   i22 = HEAP32[i23 + 4 >> 2] | 0;
  }
 } while (0);
 _memcpy(i21 + i22 | 0, i3 | 0, i7) | 0;
 HEAP32[i1 >> 2] = i20;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore17HTMLAnchorElement19defaultEventHandlerEPNS_5EventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 L1 : do {
  if ((i4 & 512 | 0) != 0) {
   i5 = i1 | 0;
   L3 : do {
    if ((i4 & 1024 | 0) != 0) {
     if (!(__ZNK7WebCore7Element26isUserActionElementFocusedEv(i5) | 0)) {
      break;
     }
     i6 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
     if ((HEAP32[i2 + 12 >> 2] | 0) != (HEAP32[i6 + 196 >> 2] | 0)) {
      break;
     }
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] & 255](i2) | 0)) {
      break;
     }
     if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i2 + 68 >> 2] | 0, H_BASE + 80 | 0) | 0)) {
      break;
     }
     do {
      if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i3, 0, 1) | 0) {
       i6 = __ZNK7WebCore8Document8settingsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
       if ((i6 | 0) == 0) {
        break;
       }
       if ((HEAP32[i6 + 104 >> 2] | 0) >>> 0 >= 2 >>> 0) {
        break L3;
       }
      }
     } while (0);
     HEAP8[i2 + 21 | 0] = 1;
     __ZN7WebCore7Element22dispatchSimulatedClickEPNS_5EventENS_31SimulatedClickMouseEventOptionsENS_27SimulatedClickVisualOptionsE(i5, i2, 0, 1);
     return;
    }
   } while (0);
   i5 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
   i6 = i2 + 12 | 0;
   L15 : do {
    if ((HEAP32[i6 >> 2] | 0) == (HEAP32[i5 + 56 >> 2] | 0)) {
     i7 = i2;
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 16 >> 2] & 255](i2) | 0) {
      if ((HEAP16[i2 + 114 >> 1] | 0) == 2) {
       break;
      }
     }
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 16 >> 2] & 255](i2) | 0) {
      i8 = (HEAPU8[i2 + 60 | 0] | 0) >>> 2 & 1;
     } else {
      i8 = 2;
     }
     do {
      if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i3, 0, 1) | 0) {
       i7 = __ZNK7WebCore8Document8settingsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
       if ((i7 | 0) == 0) {
        break;
       }
       i9 = HEAP32[i7 + 104 >> 2] | 0;
       if ((i9 | 0) == 2) {
        if ((i8 | 0) == 1) {
         break;
        } else {
         break L15;
        }
       } else if ((i9 | 0) == 0 | (i9 | 0) == 1) {
        break;
       } else if ((i9 | 0) != 3) {
        break L15;
       }
       if ((i8 | 0) == 1) {
        break;
       } else if ((i8 | 0) != 0) {
        break L15;
       }
       i9 = __ZNK7WebCore17HTMLAnchorElement42rootEditableElementForSelectionOnMouseDownEv(i1) | 0;
       if ((i9 | 0) == (__ZNK7WebCore4Node19rootEditableElementEv(i3) | 0)) {
        break L15;
       }
      }
     } while (0);
     __ZN7WebCore17HTMLAnchorElement11handleClickEPNS_5EventE(i1, i2);
     return;
    }
   } while (0);
   if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i3, 0, 1) | 0)) {
    break;
   }
   i5 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
   do {
    if ((HEAP32[i6 >> 2] | 0) == (HEAP32[i5 + 232 >> 2] | 0)) {
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2) | 0)) {
      break;
     }
     if ((HEAP16[i2 + 114 >> 1] | 0) == 2) {
      break;
     }
     i9 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     __ZN7WebCore17HTMLAnchorElement45setRootEditableElementForSelectionOnMouseDownEPNS_7ElementE(i1, __ZNK7WebCore16VisibleSelection19rootEditableElementEv((HEAP32[i9 + 468 >> 2] | 0) + 32 | 0) | 0);
     i9 = i1 + 52 | 0;
     HEAP8[i9] = (HEAPU8[i2 + 60 | 0] | 0) >>> 2 << 1 & 2 | HEAP8[i9] & -3;
     break L1;
    }
   } while (0);
   i5 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
   if ((HEAP32[i6 >> 2] | 0) != (HEAP32[i5 + 252 >> 2] | 0)) {
    break;
   }
   __ZN7WebCore17HTMLAnchorElement47clearRootEditableElementForSelectionOnMouseDownEv(i1);
   i5 = i1 + 52 | 0;
   HEAP8[i5] = HEAP8[i5] & -3;
  }
 } while (0);
 __ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE(i3, i2);
 return;
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
  if ((i12 | 0) == 9) {
   i15 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i15 | 0) == 0) {
    i12 = 18;
    break;
   }
   i18 = i15 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
   i19 = i15;
   i20 = 0;
  } else if ((i12 | 0) == 11) {
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
function __ZN3WTF9HashTableIPKN7WebCore17HTMLAnchorElementENS_12KeyValuePairIS4_NS_6RefPtrINS1_7ElementEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EES4_RPS7_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SD_SJ_SG_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = 8;
  } else {
   i9 = i7 << 1;
   i8 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i9 | 0) ? i7 : i9;
  }
  __ZN3WTF9HashTableIPKN7WebCore17HTMLAnchorElementENS_12KeyValuePairIS4_NS_6RefPtrINS1_7ElementEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8;
 i7 = i9 + ~(i9 << 15) | 0;
 i9 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i9 >>> 6 ^ i9;
 i9 = i7 + ~(i7 << 11) | 0;
 i7 = i9 >>> 16 ^ i9;
 i9 = i7 & i6;
 i11 = i10 + (i9 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = i8;
  } else {
   i15 = (i7 >>> 23) + ~i7 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i9;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i21 = 8;
     break;
    }
    i22 = (i20 | 0) == -1 ? i19 : i17;
    i23 = (i16 | 0) == 0 ? i15 : i16;
    i24 = i23 + i18 & i6;
    i25 = i10 + (i24 << 3) | 0;
    i26 = HEAP32[i25 >> 2] | 0;
    if ((i26 | 0) == 0) {
     i21 = 10;
     break;
    } else {
     i16 = i23;
     i17 = i22;
     i18 = i24;
     i19 = i25;
     i20 = i26;
    }
   }
   if ((i21 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i21 | 0) == 10) {
    if ((i22 | 0) == 0) {
     i13 = i25;
     i14 = i8;
     break;
    }
    i20 = i22;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i13 = i22;
    i14 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i13 >> 2] = i14;
 i14 = HEAP32[i4 >> 2] | 0;
 if ((i14 | 0) != 0) {
  i4 = i14 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i13 + 4 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i14;
 do {
  if ((i3 | 0) != 0) {
   i14 = i3 + 8 | 0;
   i4 = i14 | 0;
   i22 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i22;
   if ((i22 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
  }
 } while (0);
 i3 = i2 + 12 | 0;
 i14 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i14;
 i3 = i2 + 4 | 0;
 i22 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i14 << 1 | 0) < (i22 | 0)) {
  i27 = i13;
  i28 = i22;
 } else {
  if ((i22 | 0) == 0) {
   i29 = 8;
  } else {
   i4 = i22 << 1;
   i29 = (i14 * 6 & -1 | 0) < (i4 | 0) ? i22 : i4;
  }
  i4 = __ZN3WTF9HashTableIPKN7WebCore17HTMLAnchorElementENS_12KeyValuePairIS4_NS_6RefPtrINS1_7ElementEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i2, i29, i13) | 0;
  i27 = i4;
  i28 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i5 >> 2] | 0) + (i28 << 3) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZNK7WebCore17HTMLAnchorElement4hashEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i7, __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i2 | 0, __ZN7WebCore9HTMLNames8hrefAttrE) | 0);
 __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i9, i10, i7);
 i10 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i7 = i10 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i7 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZNK7WebCore3URL18fragmentIdentifierEv(i8, i9);
 i10 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i9 = i10 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i9 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i10 = i8 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i11 = 11;
  } else {
   if ((HEAP32[i8 + 4 >> 2] | 0) == 0) {
    i11 = 11;
    break;
   }
   i2 = i8 | 0;
   i9 = HEAP32[i2 >> 2] | 0;
   i7 = i9 + 2 | 0;
   HEAP32[i2 >> 2] = i9 + 4;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
   } else {
    HEAP32[i2 >> 2] = i7;
   }
   i7 = i6 | 0;
   HEAP32[i7 >> 2] = i8;
   i2 = (i8 | 0) == 0;
   if (!i2) {
    i9 = i8 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   }
   __ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i5, H_BASE + 32 | 0, i6);
   i9 = i5 | 0;
   i12 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   i9 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i7 = i9 | 0;
     i13 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i7 >> 2] = i13;
      break;
     }
    }
   } while (0);
   if ((i12 | 0) == 0) {
    _WTFCrash();
   }
   if ((HEAP32[i12 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i12);
    i14 = i4 | 0;
   } else {
    i9 = i4 | 0;
    HEAP32[i9 >> 2] = i12;
    i13 = i12 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
    i14 = i9;
   }
   i9 = HEAP32[i14 >> 2] | 0;
   HEAP32[i1 >> 2] = i9;
   do {
    if ((i9 | 0) != 0) {
     i13 = i9 | 0;
     i7 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = i7 + 2;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i13 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i9 = i12 | 0;
   i7 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
   } else {
    HEAP32[i9 >> 2] = i7;
   }
   if (i2) {
    break;
   }
   i7 = i8 | 0;
   i9 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i7 >> 2] = i9;
    break;
   }
  }
 } while (0);
 do {
  if ((i11 | 0) == 11) {
   i8 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
   HEAP32[i1 >> 2] = i8;
   if ((i8 | 0) == 0) {
    break;
   }
   i14 = i8 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
  }
 } while (0);
 i1 = HEAP32[i10 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i10 = i1 | 0;
 i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
 if ((i11 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i10 >> 2] = i11;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF9HashTableIPKN7WebCore17HTMLAnchorElementENS_12KeyValuePairIS4_NS_6RefPtrINS1_7ElementEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
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
   i17 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 + 8 | 0;
     i20 = i13 | 0;
     i19 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     HEAP32[i20 >> 2] = i19;
     if ((i19 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
    }
   } while (0);
   HEAP32[i30 >> 2] = HEAP32[i12 >> 2];
   i17 = i7 + (i10 << 3) + 4 | 0;
   i13 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i16 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i13 = i10 + 1 | 0;
  if ((i13 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i13;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i36 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i36 << 3) >> 2] | 0) != -1) {
    i1 = HEAP32[i7 + (i36 << 3) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    i11 = i1 + 8 | 0;
    i1 = i11 | 0;
    i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
    HEAP32[i1 >> 2] = i10;
    if ((i10 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
   }
  } while (0);
  i2 = i36 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i36 = i2;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore17HTMLAnchorElement9setSearchERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 72 | 0;
 i9 = i3 + 80 | 0;
 i10 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i11 = i1 | 0;
 __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i5, __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i11, __ZN7WebCore9HTMLNames8hrefAttrE) | 0);
 __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i7, i10, i5);
 i10 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i5 = i10 | 0;
   i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i5 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i2 >> 2] | 0;
 L7 : do {
  if ((i10 | 0) == 0) {
   i1 = i8 | 0;
   HEAP32[i1 >> 2] = 0;
   i12 = i1;
  } else {
   do {
    if ((HEAP32[i10 + 4 >> 2] | 0) != 0) {
     i1 = i10 + 8 | 0;
     if ((HEAP32[i10 + 16 >> 2] & 32 | 0) == 0) {
      i13 = HEAP16[HEAP32[i1 >> 2] >> 1] | 0;
     } else {
      i13 = HEAPU8[HEAP32[i1 >> 2] | 0] | 0;
     }
     if (i13 << 16 >> 16 != 63) {
      break;
     }
     __ZNK3WTF6String9substringEjj(i8, i2, 1, -1);
     i12 = i8 | 0;
     break L7;
    }
   } while (0);
   i1 = i8 | 0;
   HEAP32[i1 >> 2] = i10;
   i5 = i10 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
   i12 = i1;
  }
 } while (0);
 i10 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   __ZN3WTF10StringImpl7replaceEtPKhj(i6, i10, 35, H_BASE + 88 | 0, 3);
   i2 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = HEAP32[i6 >> 2];
   if ((i2 | 0) == 0) {
    break;
   }
   i13 = i2 | 0;
   i1 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i13 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN7WebCore3URL8setQueryERKN3WTF6StringE(i7, i8);
 i8 = i7 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i6 = i4 | 0;
   HEAP32[i6 >> 2] = 0;
   i14 = i6;
  } else {
   if ((HEAP32[i7 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i7);
    i14 = i4 | 0;
    break;
   } else {
    i6 = i4 | 0;
    HEAP32[i6 >> 2] = i7;
    i10 = i7 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
    i14 = i6;
    break;
   }
  }
 } while (0);
 i7 = i9 | 0;
 HEAP32[i7 >> 2] = HEAP32[i14 >> 2];
 __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i11, __ZN7WebCore9HTMLNames8hrefAttrE, i9);
 i9 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i7 = i9 | 0;
   i11 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i7 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i12 = i9 | 0;
   i11 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i12 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i9 | 0;
 i11 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i11 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i9);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i8 >> 2] = i11;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore17HTMLAnchorElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 if ((i8 | 0) != (HEAP32[__ZN7WebCore9HTMLNames8hrefAttrE >> 2] | 0)) {
  if ((i8 | 0) == (HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0) | (i8 | 0) == (HEAP32[__ZN7WebCore9HTMLNames9titleAttrE >> 2] | 0)) {
   STACKTOP = i4;
   return;
  }
  if ((i8 | 0) != (HEAP32[__ZN7WebCore9HTMLNames7relAttrE >> 2] | 0)) {
   __ZN7WebCore11HTMLElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, i2, i3);
   STACKTOP = i4;
   return;
  }
  if (!(__ZN7WebCore16SpaceSplitString29spaceSplitStringContainsValueERKN3WTF6StringEPKcjb(i3 | 0, H_BASE + 40 | 0, 10, 1) | 0)) {
   STACKTOP = i4;
   return;
  }
  i2 = i1 + 52 | 0;
  HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 16384;
  STACKTOP = i4;
  return;
 }
 i2 = i1 + 12 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  i9 = 0;
  i10 = i8;
 } else {
  i11 = (__ZN7WebCore12isInSVGImageEPKNS_7ElementE(i1 | 0) | 0) & 1 ^ 1;
  i9 = i11;
  i10 = HEAP32[i2 >> 2] | 0;
 }
 i11 = -i9 & 512;
 i9 = i10 & -513 | i11;
 HEAP32[i2 >> 2] = i9;
 if ((i8 & 512 | 0) != 0 ^ (i11 | 0) != 0) {
  __ZN7WebCore7Element17didAffectSelectorEi(i1 | 0, 82);
  i12 = HEAP32[i2 >> 2] | 0;
 } else {
  i12 = i9;
 }
 do {
  if ((i12 & 512 | 0) != 0) {
   __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i5, i3 | 0);
   i9 = i1 + 20 | 0;
   L23 : do {
    if ((HEAP8[(HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] | 0) + 1084 | 0] & 1) != 0) {
     do {
      if (!(__ZN7WebCore10protocolIsERKN3WTF6StringEPKc(i5, H_BASE + 112 | 0) | 0)) {
       if (__ZN7WebCore10protocolIsERKN3WTF6StringEPKc(i5, H_BASE + 104 | 0) | 0) {
        break;
       }
       i2 = HEAP32[i5 >> 2] | 0;
       if ((i2 | 0) == 0) {
        break L23;
       }
       if (!(__ZNK3WTF10StringImpl10startsWithEPKcjb(i2, H_BASE + 72 | 0, 2, 1) | 0)) {
        break L23;
       }
      }
     } while (0);
     __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i7, HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] | 0, i5);
     __ZNK7WebCore3URL4hostEv(i6, i7);
     __ZN7WebCore11prefetchDNSERKN3WTF6StringE(i6);
     i2 = HEAP32[i6 >> 2] | 0;
     do {
      if ((i2 | 0) != 0) {
       i11 = i2 | 0;
       i8 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
       if ((i8 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i2);
        break;
       } else {
        HEAP32[i11 >> 2] = i8;
        break;
       }
      }
     } while (0);
     i2 = HEAP32[i7 >> 2] | 0;
     if ((i2 | 0) == 0) {
      break;
     }
     i8 = i2 | 0;
     i11 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i2);
      break;
     } else {
      HEAP32[i8 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i9 = HEAP32[i5 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i11 = i9 | 0;
   i8 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i11 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i5 = i1 + 56 | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i5 + 4 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore17HTMLAnchorElement11setHostnameERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 64 | 0;
 i8 = i3 + 72 | 0;
 i9 = HEAP32[i2 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i10 = i9 + 4 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = i9 + 16 | 0;
 i13 = i9 + 8 | 0;
 i9 = i13;
 i14 = i13 | 0;
 i13 = 0;
 while (1) {
  if ((HEAP32[i10 >> 2] | 0) >>> 0 <= i13 >>> 0) {
   break;
  }
  if ((HEAP32[i12 >> 2] & 32 | 0) == 0) {
   i15 = HEAP16[(HEAP32[i9 >> 2] | 0) + (i13 << 1) >> 1] | 0;
  } else {
   i15 = HEAPU8[(HEAP32[i14 >> 2] | 0) + i13 | 0] | 0;
  }
  if (i15 << 16 >> 16 == 47) {
   i13 = i13 + 1 | 0;
  } else {
   break;
  }
 }
 if ((i13 | 0) == (i11 | 0)) {
  STACKTOP = i3;
  return;
 }
 i11 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i15 = i1 | 0;
 __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i5, __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i15, __ZN7WebCore9HTMLNames8hrefAttrE) | 0);
 __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i6, i11, i5);
 i11 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i5 = i11 | 0;
   i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i5 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (__ZNK7WebCore3URL14isHierarchicalEv(i6) | 0) {
   __ZNK3WTF6String9substringEjj(i7, i2, i13, -1);
   __ZN7WebCore3URL7setHostERKN3WTF6StringE(i6, i7);
   i11 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i1 = i11 | 0;
     i5 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
     if ((i5 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i1 >> 2] = i5;
      break;
     }
    }
   } while (0);
   i11 = i6 | 0;
   i5 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i5 | 0) == 0) {
     i1 = i4 | 0;
     HEAP32[i1 >> 2] = 0;
     i16 = i1;
    } else {
     if ((HEAP32[i5 + 16 >> 2] & 16 | 0) == 0) {
      __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i5);
      i16 = i4 | 0;
      break;
     } else {
      i1 = i4 | 0;
      HEAP32[i1 >> 2] = i5;
      i14 = i5 | 0;
      HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
      i16 = i1;
      break;
     }
    }
   } while (0);
   i5 = i8 | 0;
   HEAP32[i5 >> 2] = HEAP32[i16 >> 2];
   __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i15, __ZN7WebCore9HTMLNames8hrefAttrE, i8);
   i1 = HEAP32[i5 >> 2] | 0;
   if ((i1 | 0) == 0) {
    i17 = i11;
    break;
   }
   i5 = i1 | 0;
   i14 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    i17 = i11;
    break;
   } else {
    HEAP32[i5 >> 2] = i14;
    i17 = i11;
    break;
   }
  } else {
   i17 = i6 | 0;
  }
 } while (0);
 i6 = HEAP32[i17 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i17 = i6 | 0;
 i8 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i17 >> 2] = i8;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore17HTMLAnchorElement6searchEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i6, __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i2 | 0, __ZN7WebCore9HTMLNames8hrefAttrE) | 0);
 __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i8, i9, i6);
 i9 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i6 = i9 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i6 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZNK7WebCore3URL5queryEv(i7, i8);
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i8 = i9 | 0;
   i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i8 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i9 = i7 | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i10 = 11;
  } else {
   if ((HEAP32[i7 + 4 >> 2] | 0) == 0) {
    i10 = 11;
    break;
   }
   i2 = i7 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   i6 = i8 + 2 | 0;
   HEAP32[i2 >> 2] = i8 + 4;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
   } else {
    HEAP32[i2 >> 2] = i6;
   }
   i6 = i5 | 0;
   HEAP32[i6 >> 2] = i7;
   i2 = (i7 | 0) == 0;
   if (!i2) {
    i8 = i7 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   }
   __ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, H_BASE + 96 | 0, i5);
   i8 = i4 | 0;
   i11 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   i8 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i6 = i8 | 0;
     i12 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i6 >> 2] = i12;
      break;
     }
    }
   } while (0);
   if ((i11 | 0) == 0) {
    _WTFCrash();
   }
   HEAP32[i1 >> 2] = i11;
   if (i2) {
    break;
   }
   i8 = i7 | 0;
   i12 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i8 >> 2] = i12;
    break;
   }
  }
 } while (0);
 do {
  if ((i10 | 0) == 11) {
   i7 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
   HEAP32[i1 >> 2] = i7;
   if ((i7 | 0) == 0) {
    break;
   }
   i4 = i7 | 0;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
  }
 } while (0);
 i1 = HEAP32[i9 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i1 | 0;
 i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i9 >> 2] = i10;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore17HTMLAnchorElement7setHashERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 64 | 0;
 i8 = i3 + 72 | 0;
 i9 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i10 = i1 | 0;
 __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i5, __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i10, __ZN7WebCore9HTMLNames8hrefAttrE) | 0);
 __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i6, i9, i5);
 i9 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i5 = i9 | 0;
   i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i5 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i11 = 15;
  } else {
   if ((HEAP32[i9 + 4 >> 2] | 0) == 0) {
    i11 = 15;
    break;
   }
   i1 = i9 + 8 | 0;
   if ((HEAP32[i9 + 16 >> 2] & 32 | 0) == 0) {
    i12 = HEAP16[HEAP32[i1 >> 2] >> 1] | 0;
   } else {
    i12 = HEAPU8[HEAP32[i1 >> 2] | 0] | 0;
   }
   if (i12 << 16 >> 16 != 35) {
    i11 = 15;
    break;
   }
   __ZNK3WTF6String9substringEjj(i7, i2, 1, -1);
   __ZN7WebCore3URL21setFragmentIdentifierERKN3WTF6StringE(i6, i7);
   i1 = HEAP32[i7 >> 2] | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   i5 = i1 | 0;
   i13 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i5 >> 2] = i13;
    break;
   }
  }
 } while (0);
 if ((i11 | 0) == 15) {
  __ZN7WebCore3URL21setFragmentIdentifierERKN3WTF6StringE(i6, i2);
 }
 i2 = i6 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i11 = i4 | 0;
   HEAP32[i11 >> 2] = 0;
   i14 = i11;
  } else {
   if ((HEAP32[i6 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i6);
    i14 = i4 | 0;
    break;
   } else {
    i11 = i4 | 0;
    HEAP32[i11 >> 2] = i6;
    i7 = i6 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
    i14 = i11;
    break;
   }
  }
 } while (0);
 i6 = i8 | 0;
 HEAP32[i6 >> 2] = HEAP32[i14 >> 2];
 __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i10, __ZN7WebCore9HTMLNames8hrefAttrE, i8);
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i6 = i8 | 0;
   i10 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i2 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i8 | 0;
 i10 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i10;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore17HTMLAnchorElement7setPortERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 64 | 0;
 i8 = i3 + 72 | 0;
 i9 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i10 = i1 | 0;
 __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i5, __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i10, __ZN7WebCore9HTMLNames8hrefAttrE) | 0);
 __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i6, i9, i5);
 i9 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i5 = i9 | 0;
   i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i5 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (__ZNK7WebCore3URL14isHierarchicalEv(i6) | 0) {
   i9 = (__ZNK3WTF6String6toUIntEPb(i2, 0) | 0) & 65535;
   __ZNK7WebCore3URL8protocolEv(i7, i6);
   i1 = __ZN7WebCore24isDefaultPortForProtocolEtRKN3WTF6StringE(i9, i7) | 0;
   i5 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i11 = i5 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i11 >> 2] = i12;
      break;
     }
    }
   } while (0);
   if (i1) {
    __ZN7WebCore3URL10removePortEv(i6);
   } else {
    __ZN7WebCore3URL7setPortEt(i6, i9);
   }
   i5 = i6 | 0;
   i12 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i12 | 0) == 0) {
     i11 = i4 | 0;
     HEAP32[i11 >> 2] = 0;
     i13 = i11;
    } else {
     if ((HEAP32[i12 + 16 >> 2] & 16 | 0) == 0) {
      __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i12);
      i13 = i4 | 0;
      break;
     } else {
      i11 = i4 | 0;
      HEAP32[i11 >> 2] = i12;
      i14 = i12 | 0;
      HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
      i13 = i11;
      break;
     }
    }
   } while (0);
   i12 = i8 | 0;
   HEAP32[i12 >> 2] = HEAP32[i13 >> 2];
   __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i10, __ZN7WebCore9HTMLNames8hrefAttrE, i8);
   i9 = HEAP32[i12 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i15 = i5;
    break;
   }
   i12 = i9 | 0;
   i1 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    i15 = i5;
    break;
   } else {
    HEAP32[i12 >> 2] = i1;
    i15 = i5;
    break;
   }
  } else {
   i15 = i6 | 0;
  }
 } while (0);
 i6 = HEAP32[i15 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i15 = i6 | 0;
 i8 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i15 >> 2] = i8;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore17HTMLAnchorElement47clearRootEditableElementForSelectionOnMouseDownEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i2 = i1 + 52 | 0;
 if ((HEAP8[i2] & 1) == 0) {
  return;
 }
 if (HEAP8[H_BASE + 744 | 0] | 0) {
  i3 = HEAP32[H_BASE + 752 >> 2] | 0;
 } else {
  i4 = __ZN3WTF10fastMallocEj(20) | 0;
  i5 = i4;
  _memset(i4 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 752 >> 2] = i5;
  HEAP8[H_BASE + 744 | 0] = 1;
  i3 = i5;
 }
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i4 = HEAP32[i3 + 4 >> 2] | 0;
  i6 = i4 << 3 | 0;
  i7 = 0;
  i8 = i4;
 } else {
  i4 = HEAP32[i3 + 8 >> 2] | 0;
  i9 = i1;
  i10 = i9 + ~(i9 << 15) | 0;
  i9 = (i10 >>> 10 ^ i10) * 9 & -1;
  i10 = i9 >>> 6 ^ i9;
  i9 = i10 + ~(i10 << 11) | 0;
  i10 = i9 >>> 16 ^ i9;
  i9 = i4 & i10;
  i11 = i5 + (i9 << 3) | 0;
  i12 = HEAP32[i11 >> 2] | 0;
  L11 : do {
   if ((i12 | 0) == (i1 | 0)) {
    i13 = i11;
   } else {
    i14 = (i10 >>> 23) + ~i10 | 0;
    i15 = i14 << 12 ^ i14;
    i14 = i15 >>> 7 ^ i15;
    i15 = i14 << 2 ^ i14;
    i14 = i15 >>> 20 ^ i15 | 1;
    i15 = 0;
    i16 = i9;
    i17 = i12;
    while (1) {
     if ((i17 | 0) == 0) {
      i13 = 0;
      break L11;
     }
     i18 = (i15 | 0) == 0 ? i14 : i15;
     i19 = i18 + i16 & i4;
     i20 = i5 + (i19 << 3) | 0;
     i21 = HEAP32[i20 >> 2] | 0;
     if ((i21 | 0) == (i1 | 0)) {
      i13 = i20;
      break;
     } else {
      i15 = i18;
      i16 = i19;
      i17 = i21;
     }
    }
   }
  } while (0);
  i1 = HEAP32[i3 + 4 >> 2] | 0;
  i6 = (i13 | 0) == 0 ? i5 + (i1 << 3) | 0 : i13;
  i7 = i5;
  i8 = i1;
 }
 i1 = i3 | 0;
 i5 = i3 + 4 | 0;
 do {
  if ((i6 | 0) != (i7 + (i8 << 3) | 0)) {
   i13 = HEAP32[i6 + 4 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i4 = i13 + 8 | 0;
     i12 = i4 | 0;
     i9 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     HEAP32[i12 >> 2] = i9;
     if ((i9 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
    }
   } while (0);
   HEAP32[i6 >> 2] = -1;
   i13 = i3 + 16 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   i13 = i3 + 12 | 0;
   i4 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i4;
   i13 = HEAP32[i5 >> 2] | 0;
   if (!((i4 * 6 & -1 | 0) < (i13 | 0) & (i13 | 0) > 8)) {
    break;
   }
   __ZN3WTF9HashTableIPKN7WebCore17HTMLAnchorElementENS_12KeyValuePairIS4_NS_6RefPtrINS1_7ElementEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i1, (i13 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 HEAP8[i2] = HEAP8[i2] & -2;
 return;
}
function __ZNK7WebCore17HTMLAnchorElement8protocolEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i6, __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i2 | 0, __ZN7WebCore9HTMLNames8hrefAttrE) | 0);
 __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i8, i9, i6);
 i9 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i6 = i9 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i6 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZNK7WebCore3URL8protocolEv(i7, i8);
 i9 = i7 | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i10 = 0;
  } else {
   i2 = i7 | 0;
   i6 = HEAP32[i2 >> 2] | 0;
   i11 = i6 + 2 | 0;
   HEAP32[i2 >> 2] = i6 + 4;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    i10 = i7;
    break;
   } else {
    HEAP32[i2 >> 2] = i11;
    i10 = i7;
    break;
   }
  }
 } while (0);
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = i10;
 i11 = (i10 | 0) == 0;
 if (!i11) {
  i2 = i10 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, H_BASE + 24 | 0);
 i5 = i4 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i7 >> 2] = i2;
    break;
   }
  }
 } while (0);
 if ((i4 | 0) == 0) {
  _WTFCrash();
 }
 HEAP32[i1 >> 2] = i4;
 do {
  if (!i11) {
   i4 = i10 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i9 = i10 | 0;
   i11 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i9 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i8 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i10 | 0;
 i11 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i11 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i10);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i8 >> 2] = i11;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore17HTMLAnchorElement19isKeyboardFocusableEPNS_13KeyboardEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 40 | 0;
 i8 = i3 + 48 | 0;
 i9 = i1 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 512 | 0) == 0) {
  i10 = __ZNK7WebCore7Element19isKeyboardFocusableEPNS_13KeyboardEventE(i9, i2) | 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 348 >> 2] & 255](i9) | 0)) {
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 i11 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 if (!(__ZNK7WebCore12EventHandler11tabsToLinksEPNS_13KeyboardEventE(HEAP32[i11 + 472 >> 2] | 0, i2) | 0)) {
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 if (__ZNK7WebCore7Element17isInCanvasSubtreeEv(i9) | 0) {
  i10 = 1;
  STACKTOP = i3;
  return i10 | 0;
 }
 i9 = __ZNK7WebCore4Node20renderBoxModelObjectEv(i1 | 0) | 0;
 if ((i9 | 0) == 0) {
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 700 >> 2] & 63](i4, i9);
 do {
  if ((HEAP32[i4 + 8 >> 2] | 0) >= 1) {
   if ((HEAP32[i4 + 12 >> 2] | 0) < 1) {
    break;
   } else {
    i10 = 1;
   }
   STACKTOP = i3;
   return i10 | 0;
  }
 } while (0);
 i4 = i5 | 0;
 HEAP32[i4 >> 2] = 0;
 i1 = i5 + 4 | 0;
 HEAP32[i1 >> 2] = 0;
 i2 = i5 + 8 | 0;
 HEAP32[i2 >> 2] = 0;
 i11 = i9 | 0;
 i12 = HEAP32[(HEAP32[i9 >> 2] | 0) + 472 >> 2] | 0;
 HEAPF32[i8 >> 2] = +0;
 HEAPF32[i8 + 4 >> 2] = +0;
 __ZNK7WebCore12RenderObject15localToAbsoluteERKNS_10FloatPointEj(i7, i11, i8, 0);
 i8 = ~~+Math_floor(+HEAPF32[i7 >> 2]);
 i9 = ~~+Math_floor(+HEAPF32[i7 + 4 >> 2]);
 HEAP32[i6 >> 2] = i8;
 HEAP32[i6 + 4 >> 2] = i9;
 FUNCTION_TABLE_viii[i12 & 15](i11, i5, i6);
 i6 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i13 = 0;
 } else {
  i11 = 0;
  while (1) {
   if ((HEAP32[i5 + (i11 << 4) + 8 >> 2] | 0) >= 1) {
    if ((HEAP32[i5 + (i11 << 4) + 12 >> 2] | 0) >= 1) {
     i14 = 1;
     break;
    }
   }
   i12 = i11 + 1 | 0;
   if (i12 >>> 0 < i6 >>> 0) {
    i11 = i12;
   } else {
    i14 = 0;
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
  i13 = i14;
 }
 if ((i5 | 0) == 0) {
  i10 = i13;
  STACKTOP = i3;
  return i10 | 0;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i5);
 i10 = i13;
 STACKTOP = i3;
 return i10 | 0;
}
function __ZNK7WebCore17HTMLAnchorElement4portEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 64 | 0;
 i8 = i2 + 20 | 0;
 i9 = HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0;
 i10 = i2 | 0;
 __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i5, __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i10, __ZN7WebCore9HTMLNames8hrefAttrE) | 0);
 __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i6, i9, i5);
 i9 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i5 = i9 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i5 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i9 = (HEAP32[i6 + 24 >> 2] | 0) < (HEAP32[i6 + 28 >> 2] | 0);
 i2 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i5;
    break;
   }
  }
 } while (0);
 if (!i9) {
  i9 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
  HEAP32[i1 >> 2] = i9;
  if ((i9 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i2 = i9 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
  STACKTOP = i3;
  return;
 }
 i2 = HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0;
 __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i4, __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i10, __ZN7WebCore9HTMLNames8hrefAttrE) | 0);
 __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i7, i2, i4);
 i2 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i10 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i10;
    break;
   }
  }
 } while (0);
 __ZN3WTF6String6numberEi(i1, (__ZNK7WebCore3URL4portEv(i7) | 0) & 65535);
 i1 = HEAP32[i7 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i1 | 0;
 i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i7 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore17HTMLAnchorElement9sendPingsERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 | 0;
 if (!(__ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(i6, __ZN7WebCore9HTMLNames8pingAttrE) | 0)) {
  STACKTOP = i3;
  return;
 }
 i7 = i1 + 20 | 0;
 if ((__ZNK7WebCore8Document8settingsEv(HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] | 0) | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP8[(__ZNK7WebCore8Document8settingsEv(HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] | 0) | 0) + 185 | 0] & 32) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i6, __ZN7WebCore9HTMLNames8pingAttrE) | 0;
 i6 = i4 | 0;
 HEAP32[i6 >> 2] = 0;
 __ZN7WebCore16SpaceSplitString3setERKN3WTF12AtomicStringEb(i4, i1, 0);
 i1 = i5 | 0;
 i4 = 0;
 while (1) {
  i8 = HEAP32[i6 >> 2] | 0;
  i9 = (i8 | 0) == 0;
  if (i9) {
   i10 = 0;
  } else {
   i10 = HEAP32[i8 + 8 >> 2] | 0;
  }
  if (i4 >>> 0 >= i10 >>> 0) {
   break;
  }
  i11 = HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] | 0;
  if ((HEAP32[i8 + 8 >> 2] | 0) >>> 0 <= i4 >>> 0) {
   i12 = 9;
   break;
  }
  i13 = HEAP32[i11 + 332 >> 2] | 0;
  __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i5, i11, i8 + 12 + (i4 << 2) | 0);
  __ZN7WebCore10PingLoader8sendPingEPNS_5FrameERKNS_3URLES5_(i13, i5, i2);
  i13 = HEAP32[i1 >> 2] | 0;
  do {
   if ((i13 | 0) != 0) {
    i11 = i13 | 0;
    i14 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
    if ((i14 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i13);
     break;
    } else {
     HEAP32[i11 >> 2] = i14;
     break;
    }
   }
  } while (0);
  i4 = i4 + 1 | 0;
 }
 if ((i12 | 0) == 9) {
  _WTFCrash();
 }
 if (i9) {
  STACKTOP = i3;
  return;
 }
 i9 = i8 + 4 | 0;
 i12 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 if ((i12 | 0) == 0) {
  __ZN7WebCore20SpaceSplitStringData7destroyEPS0_(i8);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i9 >> 2] = i12;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore17HTMLAnchorElement11setProtocolERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 64 | 0;
 i8 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i9 = i1 | 0;
 __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i5, __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i9, __ZN7WebCore9HTMLNames8hrefAttrE) | 0);
 __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i6, i8, i5);
 i8 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i5 = i8 | 0;
   i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i5 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN7WebCore3URL11setProtocolERKN3WTF6StringE(i6, i2) | 0;
 i2 = i6 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i8 = i4 | 0;
   HEAP32[i8 >> 2] = 0;
   i10 = i8;
  } else {
   if ((HEAP32[i6 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i6);
    i10 = i4 | 0;
    break;
   } else {
    i8 = i4 | 0;
    HEAP32[i8 >> 2] = i6;
    i1 = i6 | 0;
    HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
    i10 = i8;
    break;
   }
  }
 } while (0);
 i6 = i7 | 0;
 HEAP32[i6 >> 2] = HEAP32[i10 >> 2];
 __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i9, __ZN7WebCore9HTMLNames8hrefAttrE, i7);
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 | 0;
   i9 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i6 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i7 | 0;
 i9 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i9 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i7);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i9;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore17HTMLAnchorElement45setRootEditableElementForSelectionOnMouseDownEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i2 | 0) == 0) {
  __ZN7WebCore17HTMLAnchorElement47clearRootEditableElementForSelectionOnMouseDownEv(i1);
  STACKTOP = i3;
  return;
 }
 if (HEAP8[H_BASE + 744 | 0] | 0) {
  i7 = HEAP32[H_BASE + 752 >> 2] | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(20) | 0;
  i8 = i2;
  _memset(i2 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 752 >> 2] = i8;
  HEAP8[H_BASE + 744 | 0] = 1;
  i7 = i8;
 }
 HEAP32[i5 >> 2] = i1;
 __ZN3WTF9HashTableIPKN7WebCore17HTMLAnchorElementENS_12KeyValuePairIS4_NS_6RefPtrINS1_7ElementEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EES4_RPS7_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SD_SJ_SG_EEEEOT0_OT1_(i6, i7 | 0, i5, i4);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i5 = HEAP32[i6 >> 2] | 0;
   i7 = HEAP32[i4 >> 2] | 0;
   if ((i7 | 0) != 0) {
    i8 = i7 + 8 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   }
   i8 = i5 + 4 | 0;
   i5 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i7;
   if ((i5 | 0) == 0) {
    break;
   }
   i7 = i5 + 8 | 0;
   i5 = i7 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 i4 = i1 + 52 | 0;
 HEAP8[i4] = HEAP8[i4] | 1;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore17HTMLAnchorElement42rootEditableElementForSelectionOnMouseDownEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 if ((HEAP8[i1 + 52 | 0] & 1) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if (HEAP8[H_BASE + 744 | 0] | 0) {
  i3 = HEAP32[H_BASE + 752 >> 2] | 0;
 } else {
  i4 = __ZN3WTF10fastMallocEj(20) | 0;
  i5 = i4;
  _memset(i4 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 752 >> 2] = i5;
  HEAP8[H_BASE + 744 | 0] = 1;
  i3 = i5;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i3 = i1;
 i6 = i3 + ~(i3 << 15) | 0;
 i3 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i3 >>> 6 ^ i3;
 i3 = i6 + ~(i6 << 11) | 0;
 i6 = i3 >>> 16 ^ i3;
 if ((i4 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = i5 & i6;
 i7 = i4 + (i3 << 3) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L11 : do {
  if ((i8 | 0) == (i1 | 0)) {
   i9 = i7;
  } else {
   i10 = (i6 >>> 23) + ~i6 | 0;
   i11 = i10 << 12 ^ i10;
   i10 = i11 >>> 7 ^ i11;
   i11 = i10 << 2 ^ i10;
   i10 = i11 >>> 20 ^ i11 | 1;
   i11 = 0;
   i12 = i3;
   i13 = i8;
   while (1) {
    if ((i13 | 0) == 0) {
     i2 = 0;
     break;
    }
    i14 = (i11 | 0) == 0 ? i10 : i11;
    i15 = i14 + i12 & i5;
    i16 = i4 + (i15 << 3) | 0;
    i17 = HEAP32[i16 >> 2] | 0;
    if ((i17 | 0) == (i1 | 0)) {
     i9 = i16;
     break L11;
    } else {
     i11 = i14;
     i12 = i15;
     i13 = i17;
    }
   }
   return i2 | 0;
  }
 } while (0);
 if ((i9 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = HEAP32[i9 + 4 >> 2] | 0;
 return i2 | 0;
}
function __ZN7WebCore17HTMLAnchorElement6createERKNS_13QualifiedNameERNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = __Znwj(64) | 0;
 i5 = i4;
 i6 = i4;
 HEAP32[i4 + 4 >> 2] = 0;
 HEAP32[i4 + 8 >> 2] = 1;
 HEAP32[i6 >> 2] = __ZTVN7WebCore4NodeE + 8;
 HEAP32[i4 + 12 >> 2] = 8222;
 HEAP32[i4 + 16 >> 2] = 0;
 i7 = i4 + 20 | 0;
 do {
  if ((i3 | 0) == 0) {
   if ((HEAP8[H_BASE + 768 | 0] | 0) == 0) {
    i8 = __Znwj(44) | 0;
    __ZN7WebCore9TreeScopeC1Ev(i8);
    HEAP32[H_BASE + 760 >> 2] = i8;
    HEAP32[H_BASE + 768 >> 2] = 1;
    HEAP32[H_BASE + 772 >> 2] = 0;
    i9 = i8;
    break;
   } else {
    i9 = HEAP32[H_BASE + 760 >> 2] | 0;
    break;
   }
  } else {
   i9 = i3 + 44 | 0;
  }
 } while (0);
 HEAP32[i7 >> 2] = i9;
 HEAP32[i4 + 24 >> 2] = 0;
 HEAP32[i4 + 28 >> 2] = 0;
 HEAP32[i4 + 32 >> 2] = 0;
 i7 = i9 + 16 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] = (HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] | 0) + 1;
 HEAP32[i4 + 36 >> 2] = 0;
 HEAP32[i4 + 40 >> 2] = 0;
 HEAP32[i6 >> 2] = __ZTVN7WebCore7ElementE + 8;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i4 + 44 >> 2] = i7;
 i2 = i7 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 HEAP32[i4 + 48 >> 2] = 0;
 HEAP32[i6 >> 2] = H_BASE + 128;
 i6 = i4 + 52 | 0;
 HEAP8[i6] = HEAP8[i6] & -4;
 i2 = i6;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & 3;
 i2 = i4 + 56 | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i2 + 4 >> 2] = 0;
 HEAP32[i1 >> 2] = i5;
 return;
}
function __ZN7WebCore17HTMLAnchorElement6createERNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = __Znwj(64) | 0;
 i4 = i3;
 i5 = i3;
 HEAP32[i3 + 4 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = 1;
 HEAP32[i5 >> 2] = __ZTVN7WebCore4NodeE + 8;
 HEAP32[i3 + 12 >> 2] = 8222;
 HEAP32[i3 + 16 >> 2] = 0;
 i6 = i3 + 20 | 0;
 do {
  if ((i2 | 0) == 0) {
   if ((HEAP8[H_BASE + 768 | 0] | 0) == 0) {
    i7 = __Znwj(44) | 0;
    __ZN7WebCore9TreeScopeC1Ev(i7);
    HEAP32[H_BASE + 760 >> 2] = i7;
    HEAP32[H_BASE + 768 >> 2] = 1;
    HEAP32[H_BASE + 772 >> 2] = 0;
    i8 = i7;
    break;
   } else {
    i8 = HEAP32[H_BASE + 760 >> 2] | 0;
    break;
   }
  } else {
   i8 = i2 + 44 | 0;
  }
 } while (0);
 HEAP32[i6 >> 2] = i8;
 HEAP32[i3 + 24 >> 2] = 0;
 HEAP32[i3 + 28 >> 2] = 0;
 HEAP32[i3 + 32 >> 2] = 0;
 i6 = i8 + 16 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] = (HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] | 0) + 1;
 HEAP32[i3 + 36 >> 2] = 0;
 HEAP32[i3 + 40 >> 2] = 0;
 HEAP32[i5 >> 2] = __ZTVN7WebCore7ElementE + 8;
 i6 = HEAP32[__ZN7WebCore9HTMLNames4aTagE >> 2] | 0;
 HEAP32[i3 + 44 >> 2] = i6;
 i8 = i6 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 HEAP32[i3 + 48 >> 2] = 0;
 HEAP32[i5 >> 2] = H_BASE + 128;
 i5 = i3 + 52 | 0;
 HEAP8[i5] = HEAP8[i5] & -4;
 i8 = i5;
 HEAP32[i8 >> 2] = HEAP32[i8 >> 2] & 3;
 i8 = i3 + 56 | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i8 + 4 >> 2] = 0;
 HEAP32[i1 >> 2] = i4;
 return;
}
function __ZNK7WebCore17HTMLAnchorElement6originEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i4, __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i2 | 0, __ZN7WebCore9HTMLNames8hrefAttrE) | 0);
 __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i6, i7, i4);
 i7 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i4 = i7 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN7WebCore14SecurityOrigin6createERKNS_3URLE(i5, i6);
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i6 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZNK7WebCore14SecurityOrigin8toStringEv(i1, i5);
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i5 | 0;
 if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i5);
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17HTMLAnchorElementC2ERKNS_13QualifiedNameERNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = i1 | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 1;
 HEAP32[i4 >> 2] = __ZTVN7WebCore4NodeE + 8;
 HEAP32[i1 + 12 >> 2] = 8222;
 HEAP32[i1 + 16 >> 2] = 0;
 i5 = i1 + 20 | 0;
 do {
  if ((i3 | 0) == 0) {
   if ((HEAP8[H_BASE + 768 | 0] | 0) == 0) {
    i6 = __Znwj(44) | 0;
    __ZN7WebCore9TreeScopeC1Ev(i6);
    HEAP32[H_BASE + 760 >> 2] = i6;
    HEAP32[H_BASE + 768 >> 2] = 1;
    HEAP32[H_BASE + 772 >> 2] = 0;
    i7 = i6;
    break;
   } else {
    i7 = HEAP32[H_BASE + 760 >> 2] | 0;
    break;
   }
  } else {
   i7 = i3 + 44 | 0;
  }
 } while (0);
 HEAP32[i5 >> 2] = i7;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = 0;
 i5 = i7 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] = (HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] | 0) + 1;
 HEAP32[i1 + 36 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = 0;
 HEAP32[i4 >> 2] = __ZTVN7WebCore7ElementE + 8;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 44 >> 2] = i5;
 i2 = i5 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 HEAP32[i1 + 48 >> 2] = 0;
 HEAP32[i4 >> 2] = H_BASE + 128;
 i4 = i1 + 52 | 0;
 HEAP8[i4] = HEAP8[i4] & -4;
 i2 = i4;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & 3;
 i2 = i1 + 56 | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i2 + 4 >> 2] = 0;
 return;
}
function __ZN7WebCore17HTMLAnchorElementC1ERKNS_13QualifiedNameERNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = i1 | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 1;
 HEAP32[i4 >> 2] = __ZTVN7WebCore4NodeE + 8;
 HEAP32[i1 + 12 >> 2] = 8222;
 HEAP32[i1 + 16 >> 2] = 0;
 i5 = i1 + 20 | 0;
 do {
  if ((i3 | 0) == 0) {
   if ((HEAP8[H_BASE + 768 | 0] | 0) == 0) {
    i6 = __Znwj(44) | 0;
    __ZN7WebCore9TreeScopeC1Ev(i6);
    HEAP32[H_BASE + 760 >> 2] = i6;
    HEAP32[H_BASE + 768 >> 2] = 1;
    HEAP32[H_BASE + 772 >> 2] = 0;
    i7 = i6;
    break;
   } else {
    i7 = HEAP32[H_BASE + 760 >> 2] | 0;
    break;
   }
  } else {
   i7 = i3 + 44 | 0;
  }
 } while (0);
 HEAP32[i5 >> 2] = i7;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = 0;
 i5 = i7 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] = (HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] | 0) + 1;
 HEAP32[i1 + 36 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = 0;
 HEAP32[i4 >> 2] = __ZTVN7WebCore7ElementE + 8;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 44 >> 2] = i5;
 i2 = i5 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 HEAP32[i1 + 48 >> 2] = 0;
 HEAP32[i4 >> 2] = H_BASE + 128;
 i4 = i1 + 52 | 0;
 HEAP8[i4] = HEAP8[i4] & -4;
 i2 = i4;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & 3;
 i2 = i1 + 56 | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i2 + 4 >> 2] = 0;
 return;
}
function __ZNK3WTF12StringAppendINS0_INS_6StringEPKcEES1_EcvS1_Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i5 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 HEAP32[i5 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i9 = i6 | 0;
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i2 = i8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_12StringAppendINS_6StringEPKcEES2_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, i6);
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i5;
    break;
   }
  }
 } while (0);
 if ((i4 | 0) == 0) {
  _WTFCrash();
 } else {
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF13StringBuilder6appendERKNS_6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = i1 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   i6 = i2 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   i6 = i1 + 4 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i2;
   do {
    if ((i7 | 0) != 0) {
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i8 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i7 = HEAP32[i3 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i10 = 0;
   } else {
    i10 = HEAP32[i7 + 4 >> 2] | 0;
   }
   HEAP32[i5 >> 2] = i10;
   HEAP8[i1 + 12 | 0] = (HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] | 0) >>> 5 & 1;
   return;
  }
 } while (0);
 if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
  __ZN3WTF13StringBuilder6appendEPKtj(i1, HEAP32[i2 + 8 >> 2] | 0, i4);
  return;
 } else {
  __ZN3WTF13StringBuilder6appendEPKhj(i1, HEAP32[i2 + 8 >> 2] | 0, i4);
  return;
 }
}
function __ZNK7WebCore17HTMLAnchorElement8toStringEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i4, __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i2 | 0, __ZN7WebCore9HTMLNames8hrefAttrE) | 0);
 __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i5, i6, i4);
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i1 >> 2] = i5;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i5 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i1 | 0;
 i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i6 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore17HTMLAnchorElement4nameEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = __ZN3WTF8nullAtomE;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i1 & 268435456 | 0) == 0) {
  i3 = __ZN3WTF8nullAtomE;
  return i3 | 0;
 }
 if ((i1 & 1 | 0) == 0) {
  i4 = i1 >>> 1 & 134217727;
  i5 = i2 + 20 | 0;
 } else {
  i1 = i2 + 24 | 0;
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i5 = HEAP32[i1 >> 2] | 0;
 }
 if ((i4 | 0) == 0) {
  i3 = __ZN3WTF8nullAtomE;
  return i3 | 0;
 }
 i1 = HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0;
 i2 = i1 + 12 | 0;
 i6 = i1 + 16 | 0;
 i7 = 0;
 while (1) {
  i8 = i5 + (i7 << 3) | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  if ((i9 | 0) == (i1 | 0)) {
   break;
  }
  if ((HEAP32[i9 + 12 >> 2] | 0) == (HEAP32[i2 >> 2] | 0)) {
   if ((HEAP32[i9 + 16 >> 2] | 0) == (HEAP32[i6 >> 2] | 0)) {
    break;
   }
  }
  i9 = i7 + 1 | 0;
  if (i9 >>> 0 < i4 >>> 0) {
   i7 = i9;
  } else {
   i3 = __ZN3WTF8nullAtomE;
   i10 = 17;
   break;
  }
 }
 if ((i10 | 0) == 17) {
  return i3 | 0;
 }
 i3 = (i8 | 0) == 0 ? __ZN3WTF8nullAtomE : i5 + (i7 << 3) + 4 | 0;
 return i3 | 0;
}
function __ZNK7WebCore17HTMLAnchorElement10isLiveLinkEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 L1 : do {
  if ((HEAP32[i1 + 12 >> 2] & 512 | 0) == 0) {
   i3 = 0;
  } else {
   i4 = (HEAPU8[i1 + 52 | 0] | 0) >>> 1 & 1;
   if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i2, 0, 1) | 0)) {
    i3 = 1;
    break;
   }
   i5 = __ZNK7WebCore8Document8settingsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
   if ((i5 | 0) == 0) {
    i3 = 1;
    break;
   }
   switch (HEAP32[i5 + 104 >> 2] | 0) {
   case 4:
    {
     i3 = 0;
     break L1;
     break;
    }
   case 0:
   case 1:
    {
     i3 = 1;
     break L1;
     break;
    }
   case 3:
    {
     if (i4 << 24 >> 24 != 0) {
      i3 = 1;
      break L1;
     }
     i3 = (__ZNK7WebCore17HTMLAnchorElement42rootEditableElementForSelectionOnMouseDownEv(i1) | 0) != (__ZNK7WebCore4Node19rootEditableElementEv(i2) | 0);
     break L1;
     break;
    }
   case 2:
    {
     i3 = i4 << 24 >> 24 != 0;
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
function __ZNK7WebCore17HTMLAnchorElement27treatLinkAsLiveForEventTypeENS0_9EventTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 | 0;
 L1 : do {
  if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i3, 0, 1) | 0) {
   i4 = __ZNK7WebCore8Document8settingsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
   if ((i4 | 0) == 0) {
    i5 = 1;
    break;
   }
   switch (HEAP32[i4 + 104 >> 2] | 0) {
   case 4:
    {
     i5 = 0;
     break L1;
     break;
    }
   case 3:
    {
     if ((i2 | 0) == 1) {
      i5 = 1;
      break L1;
     }
     if ((i2 | 0) != 0) {
      i5 = 0;
      break L1;
     }
     i5 = (__ZNK7WebCore17HTMLAnchorElement42rootEditableElementForSelectionOnMouseDownEv(i1) | 0) != (__ZNK7WebCore4Node19rootEditableElementEv(i3) | 0);
     break L1;
     break;
    }
   case 0:
   case 1:
    {
     i5 = 1;
     break L1;
     break;
    }
   case 2:
    {
     i5 = (i2 | 0) == 1;
     break L1;
     break;
    }
   default:
    {
     i5 = 0;
     break L1;
    }
   }
  } else {
   i5 = 1;
  }
 } while (0);
 return i5 | 0;
}
function __ZN7WebCore14SecurityOriginD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
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
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZNK7WebCore17HTMLAnchorElement8pathnameEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i4, __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i2 | 0, __ZN7WebCore9HTMLNames8hrefAttrE) | 0);
 __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i5, i6, i4);
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZNK7WebCore3URL4pathEv(i1, i5);
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i1 | 0;
 i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore17HTMLAnchorElement8hostnameEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i4, __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i2 | 0, __ZN7WebCore9HTMLNames8hrefAttrE) | 0);
 __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i5, i6, i4);
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZNK7WebCore3URL4hostEv(i1, i5);
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i1 | 0;
 i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore17HTMLAnchorElement9setActiveEbb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = i1 | 0;
 do {
  if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i4, 0, 1) | 0) {
   i5 = i1 + 20 | 0;
   i6 = __ZNK7WebCore8Document8settingsEv(HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0) | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i7 = HEAP32[i6 + 104 >> 2] | 0;
   if ((i7 | 0) == 2 | (i7 | 0) == 4) {
    return;
   } else if ((i7 | 0) != 3) {
    break;
   }
   if (!i2) {
    break;
   }
   i7 = HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i5 = __ZNK7WebCore16VisibleSelection19rootEditableElementEv((HEAP32[i7 + 468 >> 2] | 0) + 32 | 0) | 0;
   if ((i5 | 0) != (__ZNK7WebCore4Node19rootEditableElementEv(i4) | 0)) {
    break;
   }
   return;
  }
 } while (0);
 __ZN7WebCore7Element9setActiveEbb(i1 | 0, i2, i3);
 return;
}
function __ZNK7WebCore17HTMLAnchorElement4hrefEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i4, __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i2 | 0, __ZN7WebCore9HTMLNames8hrefAttrE) | 0);
 __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i1, i5, i4);
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i5 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore17HTMLAnchorElement9draggableEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 | 0;
 i1 = __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i2, __ZN7WebCore9HTMLNames13draggableAttrE) | 0;
 if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i1 >> 2] | 0, H_BASE + 64 | 0) | 0) {
  i3 = 1;
  return i3 | 0;
 }
 if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i1 >> 2] | 0, H_BASE + 56 | 0) | 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(i2, __ZN7WebCore9HTMLNames8hrefAttrE) | 0;
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
function __ZN7WebCore22isEnterKeyKeydownEventEPNS_5EventE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) != (HEAP32[i2 + 196 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 255](i1) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i1 + 68 >> 2] | 0, H_BASE + 80 | 0) | 0;
 return i3 | 0;
}
function __ZNK7WebCore17HTMLAnchorElement13supportsFocusEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i1 | 0, 0, 1) | 0) {
  i2 = __ZNK7WebCore11HTMLElement13supportsFocusEv(i1 | 0) | 0;
  return i2 | 0;
 }
 if ((HEAP32[i1 + 12 >> 2] & 512 | 0) != 0) {
  i2 = 1;
  return i2 | 0;
 }
 i2 = __ZNK7WebCore11HTMLElement13supportsFocusEv(i1 | 0) | 0;
 return i2 | 0;
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
function __ZN7WebCore11isLinkClickEPNS_5EventE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) != (HEAP32[i2 + 56 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 255](i1) | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = (HEAP16[i1 + 114 >> 1] | 0) != 2;
 return i3 | 0;
}
function viiii___ZN7WebCore11HTMLElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore11HTMLElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiii___ZN7WebCore13StyledElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore13StyledElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZNK7WebCore17HTMLAnchorElement14isURLAttributeERKNS_9AttributeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8hrefAttrE >> 2] | 0) + 12 >> 2] | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore11HTMLElement14isURLAttributeERKNS_9AttributeE(i1 | 0, i2) | 0;
 return i3 | 0;
}
function __ZNK7WebCore17HTMLAnchorElement17canStartSelectionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 512 | 0) == 0) {
  i3 = __ZNK7WebCore4Node17canStartSelectionEv(i2) | 0;
  return i3 | 0;
 } else {
  i3 = __ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i2, 0, 1) | 0;
  return i3 | 0;
 }
 return 0;
}
function __ZNK7WebCore17HTMLAnchorElement6targetEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[(__ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i2 | 0, __ZN7WebCore9HTMLNames10targetAttrE) | 0) >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 return;
}
function iiiii___ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZNK7WebCore17HTMLAnchorElement16isMouseFocusableEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 12 >> 2] & 512 | 0) == 0) {
  i2 = __ZNK7WebCore7Element16isMouseFocusableEv(i1 | 0) | 0;
  return i2 | 0;
 } else {
  i2 = __ZNK7WebCore11HTMLElement13supportsFocusEv(i1 | 0) | 0;
  return i2 | 0;
 }
 return 0;
}
function __ZN7WebCore17HTMLAnchorElement6setRelERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if (!(__ZN7WebCore16SpaceSplitString29spaceSplitStringContainsValueERKN3WTF6StringEPKcjb(i2, H_BASE + 40 | 0, 10, 1) | 0)) {
  return;
 }
 i2 = i1 + 52 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 16384;
 return;
}
function iiiii___ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function vii___ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE(i1 | 0, i2 | 0);
}
function __ZN7WebCore17HTMLAnchorElement29willRespondToMouseClickEventsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 12 >> 2] & 512 | 0) != 0) {
  i2 = 1;
  return i2 | 0;
 }
 i2 = __ZN7WebCore11HTMLElement29willRespondToMouseClickEventsEv(i1 | 0) | 0;
 return i2 | 0;
}
function __ZN7WebCore17HTMLAnchorElement9eventTypeEPNS_5EventE(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 255](i1) | 0)) {
  i2 = 2;
  return i2 | 0;
 }
 i2 = (HEAPU8[i1 + 60 | 0] | 0) >>> 2 & 1;
 return i2 | 0;
}
function __ZN7WebCore17HTMLAnchorElement15accessKeyActionEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element22dispatchSimulatedClickEPNS_5EventENS_31SimulatedClickMouseEventOptionsENS_27SimulatedClickVisualOptionsE(i1 | 0, 0, i2 & 1, 1);
 return;
}
function __ZN7WebCore17HTMLAnchorElementD0Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 128;
 __ZN7WebCore17HTMLAnchorElement47clearRootEditableElementForSelectionOnMouseDownEv(i1);
 __ZN7WebCore13StyledElementD2Ev(i1 | 0);
 __ZdlPv(i1);
 return;
}
function __ZN7WebCore17HTMLAnchorElement7setHrefERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, __ZN7WebCore9HTMLNames8hrefAttrE, i2);
 return;
}
function __ZN7WebCore17HTMLAnchorElementD2Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 128;
 __ZN7WebCore17HTMLAnchorElement47clearRootEditableElementForSelectionOnMouseDownEv(i1);
 __ZN7WebCore13StyledElementD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore17HTMLAnchorElementD1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 128;
 __ZN7WebCore17HTMLAnchorElement47clearRootEditableElementForSelectionOnMouseDownEv(i1);
 __ZN7WebCore13StyledElementD2Ev(i1 | 0);
 return;
}
function iii___ZNK7WebCore11HTMLElement23isPresentationAttributeERKNS_13QualifiedNameE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore11HTMLElement23isPresentationAttributeERKNS_13QualifiedNameE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore11HTMLElement15childrenChangedERKNS_13ContainerNode11ChildChangeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11HTMLElement15childrenChangedERKNS_13ContainerNode11ChildChangeE(i1 | 0, i2 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function vii___ZN7WebCore7Element10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE(i1 | 0, i2 | 0);
}
function iii___ZNK7WebCore7Element22shouldMoveToFlowThreadERKNS_11RenderStyleE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore7Element22shouldMoveToFlowThreadERKNS_11RenderStyleE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore7Element9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE(i1 | 0, i2 | 0);
}
function viii___ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1 | 0, i2 | 0) | 0;
}
function iii___ZN7WebCore11HTMLElement16rendererIsNeededERKNS_11RenderStyleE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore11HTMLElement16rendererIsNeededERKNS_11RenderStyleE(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK7WebCore7Element25childShouldCreateRendererERKNS_4NodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore7Element25childShouldCreateRendererERKNS_4NodeE(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE(i1 | 0, i2 | 0) | 0;
}
function viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore7Element5focusEbNS_14FocusDirectionE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element5focusEbNS_14FocusDirectionE(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZN7WebCore7Element15willRecalcStyleENS_5Style6ChangeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore7Element15willRecalcStyleENS_5Style6ChangeE(i1 | 0, i2 | 0) | 0;
}
function iii___ZN7WebCore7Element12insertedIntoERNS_13ContainerNodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore7Element12insertedIntoERNS_13ContainerNodeE(i1 | 0, i2 | 0) | 0;
}
function v___ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE__wrapper() {
 __ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE();
}
function v___ZN7WebCore11HTMLElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE__wrapper() {
 __ZN7WebCore11HTMLElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE();
}
function iii___ZN7WebCore7Element13computedStyleENS_8PseudoIdE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore7Element13computedStyleENS_8PseudoIdE(i1 | 0, i2 | 0) | 0;
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZNK7WebCore4Node22scriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 return ((i2 | 0) == 0 ? 0 : i2 + 88 | 0) | 0;
}
function vii___ZN7WebCore7Element14didRecalcStyleENS_5Style6ChangeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element14didRecalcStyleENS_5Style6ChangeE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element11removedFromERNS_13ContainerNodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element11removedFromERNS_13ContainerNodeE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE(i1 | 0, i2 | 0);
}
function ii___ZN7WebCore11HTMLElement29willRespondToMouseWheelEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11HTMLElement29willRespondToMouseWheelEventsEv(i1 | 0) | 0;
}
function ii___ZN7WebCore11HTMLElement28willRespondToMouseMoveEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11HTMLElement28willRespondToMouseMoveEventsEv(i1 | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node17handleLocalEventsERNS_5EventE(i1 | 0, i2 | 0);
}
function vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv(i1 | 0);
}
function viii___ZN7WebCore7Element9cloneNodeEb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element9cloneNodeEb(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZN7WebCore7Element21updateFocusAppearanceEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element21updateFocusAppearanceEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore7Element27matchesReadWritePseudoClassEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element27matchesReadWritePseudoClassEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13ContainerNode11boundingBoxEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore7Element25shouldAppearIndeterminateEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element25shouldAppearIndeterminateEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore11HTMLElement19hasCustomFocusLogicEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11HTMLElement19hasCustomFocusLogicEv(i1 | 0) | 0;
}
function v___ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv__wrapper() {
 __ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv();
}
function ii___ZNK7WebCore7Element22isSpellCheckingEnabledEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element22isSpellCheckingEnabledEv(i1 | 0) | 0;
}
function v___ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE__wrapper() {
 __ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE();
}
function vii___ZNK7WebCore11HTMLElement8nodeNameEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore11HTMLElement8nodeNameEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element13setScrollLeftEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element13setScrollLeftEi(i1 | 0, i2 | 0);
}
function ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node24willRespondToTouchEventsEv(i1 | 0) | 0;
}
function vii___ZN7WebCore7Element12setScrollTopEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element12setScrollTopEi(i1 | 0, i2 | 0);
}
function ii___ZN7WebCore7Element20shouldUseInputMethodEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element20shouldUseInputMethodEv(i1 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 15](i2 | 0, i3 | 0, i4 | 0);
}
function __ZNK7WebCore17HTMLAnchorElement6hasRelEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return ((HEAP32[i1 + 52 >> 2] | 0) >>> 2 & i2 | 0) != 0 | 0;
}
function ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11EventTarget13isMessagePortEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore11HTMLElement5titleEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore11HTMLElement5titleEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element10setHoveredEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element10setHoveredEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node20eventTargetInterfaceEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node21ensureEventTargetDataEv(i1 | 0) | 0;
}
function vi___ZN7WebCore7Element23removeAllEventListenersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element23removeAllEventListenersEv(i1 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function ii___ZNK7WebCore11HTMLElement11virtualFormEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11HTMLElement11virtualFormEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore4Node18offsetInCharactersEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node18offsetInCharactersEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore4Node18maxCharacterOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node18maxCharacterOffsetEv(i1 | 0) | 0;
}
function ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11EventTarget11toDOMWindowEv(i1 | 0) | 0;
}
function vi___ZN7WebCore7Element21finishParsingChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element21finishParsingChildrenEv(i1 | 0);
}
function vii___ZNK7WebCore7Element7baseURIEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore7Element7baseURIEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element8setFocusEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element8setFocusEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore7Element14shadowPseudoIdEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element14shadowPseudoIdEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore7Element14imageSourceURLEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element14imageSourceURLEv(i1 | 0) | 0;
}
function __ZN7WebCore17HTMLAnchorElement4textEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element9innerTextEv(i1, i2 | 0);
 return;
}
function vi___ZN7WebCore7Element20beginParsingChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element20beginParsingChildrenEv(i1 | 0);
}
function vii___ZNK7WebCore4Node9nodeValueEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore4Node9nodeValueEv(i1 | 0, i2 | 0);
}
function vi___ZN7WebCore7Element19willDetachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element19willDetachRenderersEv(i1 | 0);
}
function vi___ZN7WebCore7Element19willAttachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element19willAttachRenderersEv(i1 | 0);
}
function ii___ZN7WebCore7Element13focusDelegateEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element13focusDelegateEv(i1 | 0) | 0;
}
function vi___ZN7WebCore7Element18didDetachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element18didDetachRenderersEv(i1 | 0);
}
function vi___ZN7WebCore7Element18didAttachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element18didAttachRenderersEv(i1 | 0);
}
function ii___ZNK7WebCore7Element11isFocusableEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element11isFocusableEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element12scrollHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element12scrollHeightEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node15eventTargetDataEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node15eventTargetDataEv(i1 | 0) | 0;
}
function __ZN7WebCore19shouldProhibitLinksEPNS_7ElementE(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore12isInSVGImageEPKNS_7ElementE(i1) | 0;
}
function ii___ZN7WebCore7Element11scrollWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element11scrollWidthEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node14toInputElementEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node14toInputElementEv(i1 | 0) | 0;
}
function ii___ZN7WebCore13StyledElement5styleEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore13StyledElement5styleEv(i1 | 0) | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 31](i2 | 0, i3 | 0) | 0;
}
function ii___ZN7WebCore7Element10scrollLeftEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element10scrollLeftEv(i1 | 0) | 0;
}
function vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node18dispatchInputEventEv(i1 | 0);
}
function ii___ZNK7WebCore7Element8nodeTypeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element8nodeTypeEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element9scrollTopEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element9scrollTopEv(i1 | 0) | 0;
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
function vi___ZN7WebCore4Node16derefEventTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node16derefEventTargetEv(i1 | 0);
}
function __ZNK7WebCore17HTMLAnchorElement8tabIndexEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element8tabIndexEv(i1 | 0) | 0;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function ii___ZN7WebCore7Element7onfocusEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element7onfocusEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element7onerrorEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element7onerrorEv(i1 | 0) | 0;
}
function vi___ZN7WebCore4Node14refEventTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node14refEventTargetEv(i1 | 0);
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 63](i2 | 0, i3 | 0);
}
function __ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function v___ZN7WebCore7Element22customStyleForRendererEv__wrapper() {
 __ZN7WebCore7Element22customStyleForRendererEv();
}
function ii___ZN7WebCore7Element6onloadEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element6onloadEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element6onblurEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element6onblurEv(i1 | 0) | 0;
}
function __ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function ii___ZN7WebCore4Node6toNodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node6toNodeEv(i1 | 0) | 0;
}
function __ZNK7WebCore7Element12namespaceURIEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 44 >> 2] | 0) + 16 | 0;
}
function b0(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(0);
 return 0;
}
function __ZNK7WebCore7Element9localNameEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 44 >> 2] | 0) + 12 | 0;
}
function __ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function vi___ZN7WebCore7Element4blurEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element4blurEv(i1 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 255](i2 | 0) | 0;
}
function __ZNK7WebCore7Element6prefixEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 44 >> 2] | 0) + 8 | 0;
}
function __ZNK7WebCore11HTMLElement29isTextControlInnerTextElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv(i1) {
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
function __ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZN7WebCore7Element31documentWillSuspendForPageCacheEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore7Element30willStopBeingFullscreenElementEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore7Element30documentDidResumeFromPageCacheEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore7Element29privateBrowsingStateDidChangeEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore11HTMLElement20isHTMLUnknownElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element25isValidFormControlElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element23canContainRangeEndPointEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore7Element23areAuthorShadowsAllowedEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZN7WebCore7Element26didBecomeFullscreenElementEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore7Element22isDefaultButtonForFormEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element21isRequiredFormControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element21isOptionalFormControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element21isDisabledFormControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element20isFormControlElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element19isSpinButtonElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element22visibilityStateChangedEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore11HTMLElement15asFormNamedItemEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element18isFrameElementBaseEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node21isMediaControlElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore4Node24startLoadingDynamicSheetEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore7Element17isTextFormControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node20isInsertionPointNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element20mediaVolumeDidChangeEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore7Element20buildPendingResourceEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore4Node19isFrameOwnerElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node19isCharacterDataNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore11HTMLElement11isLabelableEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function __ZNK7WebCore4Node16nonRendererStyleEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element12willValidateEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element12isOutOfRangeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node15isPluginElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node15isMediaControlsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node15isAttributeNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node14customPseudoIdEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element9isInRangeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore4Node11sheetLoadedEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 15]();
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
  var FUNCTION_TABLE_iiiii = [b0,b0,iiiii___ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper,b0,iiiii___ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore17HTMLAnchorElementD2Ev,b1,__ZN7WebCore7Element29privateBrowsingStateDidChangeEv,b1,__ZN7WebCore7Element20buildPendingResourceEv,b1,vi___ZN7WebCore4Node16derefEventTargetEv__wrapper,b1,vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper,b1,__ZN7WebCore7Element22visibilityStateChangedEv,b1,vi___ZN7WebCore7Element21finishParsingChildrenEv__wrapper,b1,vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper,b1,vi___ZN7WebCore7Element19willAttachRenderersEv__wrapper,b1,__ZN7WebCore4Node24startLoadingDynamicSheetEv,b1,__ZN7WebCore7Element30willStopBeingFullscreenElementEv,b1,__ZN7WebCore17HTMLAnchorElementD0Ev,b1,vi___ZN7WebCore7Element19willDetachRenderersEv__wrapper,b1,__ZN7WebCore7Element20mediaVolumeDidChangeEv
  ,b1,vi___ZN7WebCore7Element20beginParsingChildrenEv__wrapper,b1,__ZN7WebCore7Element31documentWillSuspendForPageCacheEv,b1,vi___ZN7WebCore4Node14refEventTargetEv__wrapper,b1,vi___ZN7WebCore7Element18didAttachRenderersEv__wrapper,b1,vi___ZN7WebCore7Element4blurEv__wrapper,b1,vi___ZN7WebCore7Element18didDetachRenderersEv__wrapper,b1,vi___ZN7WebCore7Element23removeAllEventListenersEv__wrapper,b1,__ZN7WebCore7Element30documentDidResumeFromPageCacheEv,b1,__ZN7WebCore7Element26didBecomeFullscreenElementEv,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,vii___ZN7WebCore7Element10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,__ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE,b2,vii___ZN7WebCore7Element12setScrollTopEi__wrapper,b2,vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper,b2,vii___ZN7WebCore7Element9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,vii___ZNK7WebCore7Element7baseURIEv__wrapper,b2,vii___ZN7WebCore7Element10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper,b2,vii___ZN7WebCore7Element9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE,b2,vii___ZN7WebCore11HTMLElement15childrenChangedERKNS_13ContainerNode11ChildChangeE__wrapper,b2,__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb,b2,vii___ZN7WebCore7Element11removedFromERNS_13ContainerNodeE__wrapper,b2,vii___ZN7WebCore7Element14didRecalcStyleENS_5Style6ChangeE__wrapper
  ,b2,vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper,b2,vii___ZN7WebCore7Element13setScrollLeftEi__wrapper,b2,vii___ZN7WebCore7Element8setFocusEb__wrapper,b2,__ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_,b2,vii___ZN7WebCore7Element10setHoveredEb__wrapper,b2,__ZN7WebCore17HTMLAnchorElement19defaultEventHandlerEPNS_5EventE,b2,vii___ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE__wrapper,b2,__ZN7WebCore17HTMLAnchorElement15accessKeyActionEb,b2,vii___ZNK7WebCore11HTMLElement8nodeNameEv__wrapper,b2,vii___ZNK7WebCore4Node9nodeValueEv__wrapper,b2,vii___ZNK7WebCore11HTMLElement5titleEv__wrapper,b2,__ZNK7WebCore17HTMLAnchorElement6targetEv,b2,vii___ZN7WebCore7Element21updateFocusAppearanceEb__wrapper,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,ii___ZNK7WebCore7Element14imageSourceURLEv__wrapper,b3,ii___ZN7WebCore4Node15eventTargetDataEv__wrapper,b3,ii___ZN7WebCore7Element7onerrorEv__wrapper,b3,__ZN7WebCore17HTMLAnchorElement29willRespondToMouseClickEventsEv,b3,ii___ZN7WebCore7Element11scrollWidthEv__wrapper,b3,__ZNK7WebCore4Node21isMediaControlElementEv,b3,__ZNK7WebCore4Node19isFrameOwnerElementEv,b3,ii___ZN7WebCore7Element10scrollLeftEv__wrapper,b3,ii___ZN7WebCore7Element9scrollTopEv__wrapper,b3,ii___ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv__wrapper,b3,ii___ZNK7WebCore7Element22isSpellCheckingEnabledEv__wrapper,b3,ii___ZNK7WebCore7Element27matchesReadWritePseudoClassEv__wrapper,b3,__ZNK7WebCore7Element17isTextFormControlEv,b3,ii___ZN7WebCore7Element20shouldUseInputMethodEv__wrapper
  ,b3,ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper,b3,__ZNK7WebCore11HTMLElement20isHTMLUnknownElementEv,b3,__ZNK7WebCore7Element6prefixEv,b3,__ZNK7WebCore7Element21isDisabledFormControlEv,b3,ii___ZNK7WebCore4Node18maxCharacterOffsetEv__wrapper,b3,__ZNK7WebCore7Element12namespaceURIEv,b3,__ZNK7WebCore17HTMLAnchorElement13supportsFocusEv,b3,ii___ZNK7WebCore4Node18offsetInCharactersEv__wrapper,b3,__ZNK7WebCore4Node22scriptExecutionContextEv,b3,__ZNK7WebCore7Element12isOutOfRangeEv,b3,ii___ZNK7WebCore7Element8nodeTypeEv__wrapper,b3,__ZNK7WebCore4Node15isPluginElementEv,b3,ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper,b3,__ZN7WebCore4Node11sheetLoadedEv,b3,__ZN7WebCore11HTMLElement15asFormNamedItemEv
  ,b3,__ZNK7WebCore7Element23canContainRangeEndPointEv,b3,__ZNK7WebCore4Node20isInsertionPointNodeEv,b3,__ZNK7WebCore7Element9isInRangeEv,b3,__ZNK7WebCore7Element20isFormControlElementEv,b3,ii___ZN7WebCore7Element13focusDelegateEv__wrapper,b3,__ZNK7WebCore7Element18isFrameElementBaseEv,b3,ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper,b3,__ZNK7WebCore17HTMLAnchorElement8tabIndexEv,b3,__ZNK7WebCore7Element21isOptionalFormControlEv,b3,ii___ZNK7WebCore7Element25shouldAppearIndeterminateEv__wrapper,b3,__ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv,b3,__ZNK7WebCore4Node16nonRendererStyleEv,b3,ii___ZN7WebCore13StyledElement5styleEv__wrapper,b3,__ZNK7WebCore7Element21isRequiredFormControlEv,b3,ii___ZN7WebCore11HTMLElement28willRespondToMouseMoveEventsEv__wrapper
  ,b3,__ZNK7WebCore7Element22isDefaultButtonForFormEv,b3,ii___ZN7WebCore7Element7onfocusEv__wrapper,b3,ii___ZN7WebCore4Node14toInputElementEv__wrapper,b3,ii___ZNK7WebCore11HTMLElement19hasCustomFocusLogicEv__wrapper,b3,__ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv,b3,ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper,b3,__ZNK7WebCore7Element12willValidateEv,b3,__ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv,b3,__ZN7WebCore7Element25isValidFormControlElementEv,b3,ii___ZN7WebCore7Element12scrollHeightEv__wrapper,b3,ii___ZNK7WebCore11HTMLElement11virtualFormEv__wrapper,b3,__ZNK7WebCore4Node14customPseudoIdEv,b3,__ZNK7WebCore7Element19isSpinButtonElementEv,b3,ii___ZNK7WebCore7Element14shadowPseudoIdEv__wrapper,b3,__ZNK7WebCore17HTMLAnchorElement9draggableEv
  ,b3,__ZNK7WebCore4Node19isCharacterDataNodeEv,b3,__ZNK7WebCore7Element9localNameEv,b3,__ZNK7WebCore17HTMLAnchorElement17canStartSelectionEv,b3,ii___ZN7WebCore7Element6onloadEv__wrapper,b3,ii___ZN7WebCore4Node6toNodeEv__wrapper,b3,ii___ZN7WebCore11HTMLElement29willRespondToMouseWheelEventsEv__wrapper,b3,ii___ZNK7WebCore7Element11isFocusableEv__wrapper,b3,ii___ZN7WebCore7Element6onblurEv__wrapper,b3,__ZNK7WebCore11HTMLElement11isLabelableEv,b3,__ZNK7WebCore4Node15isMediaControlsEv,b3,ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper,b3,__ZNK7WebCore7Element23areAuthorShadowsAllowedEv,b3,__ZNK7WebCore17HTMLAnchorElement16isMouseFocusableEv,b3,__ZNK7WebCore4Node15isAttributeNodeEv,b3,__ZNK7WebCore11HTMLElement29isTextControlInnerTextElementEv
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,viii___ZN7WebCore7Element9cloneNodeEb__wrapper,b4,viii___ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi__wrapper,b4,viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper,b4,viii___ZN7WebCore7Element5focusEbNS_14FocusDirectionE__wrapper,b4,__ZN7WebCore17HTMLAnchorElementC2ERKNS_13QualifiedNameERNS_8DocumentE,b4,__ZN7WebCore17HTMLAnchorElement9setActiveEbb,b4,__ZN7WebCore17HTMLAnchorElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE,b4];
  var FUNCTION_TABLE_v = [b5,b5,v___ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE__wrapper,b5,v___ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv__wrapper,b5,v___ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE__wrapper,b5,v___ZN7WebCore11HTMLElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE__wrapper,b5,v___ZN7WebCore7Element22customStyleForRendererEv__wrapper,b5,b5,b5,b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6,iii___ZN7WebCore7Element13computedStyleENS_8PseudoIdE__wrapper,b6,iii___ZN7WebCore7Element15willRecalcStyleENS_5Style6ChangeE__wrapper,b6,__ZNK7WebCore17HTMLAnchorElement19isKeyboardFocusableEPNS_13KeyboardEventE,b6,iii___ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE__wrapper,b6,iii___ZNK7WebCore7Element25childShouldCreateRendererERKNS_4NodeE__wrapper,b6,iii___ZNK7WebCore7Element22shouldMoveToFlowThreadERKNS_11RenderStyleE__wrapper,b6,iii___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper,b6,iii___ZN7WebCore7Element12insertedIntoERNS_13ContainerNodeE__wrapper,b6,iii___ZN7WebCore11HTMLElement16rendererIsNeededERKNS_11RenderStyleE__wrapper,b6,__ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE,b6,iii___ZNK7WebCore11HTMLElement23isPresentationAttributeERKNS_13QualifiedNameE__wrapper,b6,__ZNK7WebCore17HTMLAnchorElement14isURLAttributeERKNS_9AttributeE,b6,b6,b6,b6
  ,b6,b6,b6];
  var FUNCTION_TABLE_viiii = [b7,b7,viiii___ZN7WebCore13StyledElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE__wrapper,b7,viiii___ZN7WebCore11HTMLElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE__wrapper,b7,b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiii: dynCall_iiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiii": invoke_iiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "_floorf": _floorf, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZN7WebCore9HTMLNames8pingAttrE": __ZN7WebCore9HTMLNames8pingAttrE, "__ZN7WebCore9HTMLNames6imgTagE": __ZN7WebCore9HTMLNames6imgTagE, "__ZTVN7WebCore4NodeE": __ZTVN7WebCore4NodeE, "__ZN7WebCore9HTMLNames10targetAttrE": __ZN7WebCore9HTMLNames10targetAttrE, "__ZN7WebCore9HTMLNames8nameAttrE": __ZN7WebCore9HTMLNames8nameAttrE, "__ZN7WebCore9HTMLNames7relAttrE": __ZN7WebCore9HTMLNames7relAttrE, "__ZN7WebCore9HTMLNames13draggableAttrE": __ZN7WebCore9HTMLNames13draggableAttrE, "__ZTVN7WebCore7ElementE": __ZTVN7WebCore7ElementE, "__ZN7WebCore9HTMLNames4aTagE": __ZN7WebCore9HTMLNames4aTagE, "__ZN7WebCore9HTMLNames9titleAttrE": __ZN7WebCore9HTMLNames9titleAttrE, "__ZN7WebCore9HTMLNames8hrefAttrE": __ZN7WebCore9HTMLNames8hrefAttrE, "__ZN7WebCore17InspectorCounters10s_countersE": __ZN7WebCore17InspectorCounters10s_countersE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore17HTMLAnchorElement9sendPingsERKNS_3URLE","__ZN7WebCore17HTMLAnchorElementD2Ev","__ZN7WebCore7Element29privateBrowsingStateDidChangeEv","__ZN7WebCore17HTMLAnchorElement11handleClickEPNS_5EventE","__ZN7WebCore17HTMLAnchorElement6createERKNS_13QualifiedNameERNS_8DocumentE","__ZN7WebCore7Element20buildPendingResourceEv","__ZNK7WebCore17HTMLAnchorElement19isKeyboardFocusableEPNS_13KeyboardEventE","__ZN7WebCore17HTMLAnchorElement4textEv","__ZN7WebCore17HTMLAnchorElement6setRelERKN3WTF6StringE","_memcpy","__ZN7WebCore17HTMLAnchorElement29willRespondToMouseClickEventsEv","__ZN7WebCore17HTMLAnchorElement6createERNS_8DocumentE","__ZNK7WebCore4Node14customPseudoIdEv","__ZNK7WebCore4Node21isMediaControlElementEv","__ZN3WTF13StringBuilder6appendERKNS_6StringE","__ZNK7WebCore4Node19isFrameOwnerElementEv","__ZN7WebCore7Element22visibilityStateChangedEv","__ZN7WebCore19shouldProhibitLinksEPNS_7ElementE","__ZNK7WebCore17HTMLAnchorElement4portEv","__ZN3WTF9HashTableIPKN7WebCore17HTMLAnchorElementENS_12KeyValuePairIS4_NS_6RefPtrINS1_7ElementEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_","__ZNK7WebCore7Element17isTextFormControlEv","__ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE","__ZN7WebCore17HTMLAnchorElement11setProtocolERKN3WTF6StringE","__ZNK7WebCore17HTMLAnchorElement4hostEv","__ZNK7WebCore11HTMLElement20isHTMLUnknownElementEv","__ZNK7WebCore4Node20isInsertionPointNodeEv","__ZNK7WebCore7Element21isDisabledFormControlEv","__ZNK7WebCore7Element21isRequiredFormControlEv","__ZNK7WebCore17HTMLAnchorElement4nameEv","__ZNK7WebCore7Element12namespaceURIEv","__ZNK3WTF12StringAppendINS0_INS_6StringEPKcEES1_EcvS1_Ev","__ZN7WebCore7Element20mediaVolumeDidChangeEv","__ZNK7WebCore17HTMLAnchorElement8protocolEv","__ZNK7WebCore4Node22scriptExecutionContextEv","__ZNK7WebCore7Element12isOutOfRangeEv","__ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZNK7WebCore7Element12willValidateEv","__ZN7WebCore11HTMLElement15asFormNamedItemEv","__ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv","__ZN7WebCore17HTMLAnchorElement47clearRootEditableElementForSelectionOnMouseDownEv","__ZNK7WebCore7Element6prefixEv","__ZNK7WebCore7Element9isInRangeEv","__ZNK7WebCore7Element20isFormControlElementEv","__ZN7WebCore17HTMLAnchorElement11setPathnameERKN3WTF6StringE","__ZN3WTF9HashTableIPKN7WebCore17HTMLAnchorElementENS_12KeyValuePairIS4_NS_6RefPtrINS1_7ElementEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EES4_RPS7_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SD_SJ_SG_EEEEOT0_OT1_","__ZNK7WebCore7Element18isFrameElementBaseEv","__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE","__ZNK7WebCore17HTMLAnchorElement8tabIndexEv","__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb","__ZNK7WebCore7Element21isOptionalFormControlEv","__ZN7WebCore17HTMLAnchorElement9setSearchERKN3WTF6StringE","__ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv","__ZNK7WebCore17HTMLAnchorElement4hrefEv","__ZN7WebCore17HTMLAnchorElement7setHashERKN3WTF6StringE","__ZN7WebCore22isEnterKeyKeydownEventEPNS_5EventE","__ZNK7WebCore4Node16nonRendererStyleEv","__ZN7WebCore17HTMLAnchorElementC2ERKNS_13QualifiedNameERNS_8DocumentE","__ZNK7WebCore4Node15isPluginElementEv","__ZNK7WebCore17HTMLAnchorElement8hostnameEv","__ZN7WebCore4Node24startLoadingDynamicSheetEv","_memset","__ZN7WebCore7Element30willStopBeingFullscreenElementEv","__ZNK7WebCore7Element22isDefaultButtonForFormEv","__ZN7WebCore11isLinkClickEPNS_5EventE","__ZN7WebCore14SecurityOriginD2Ev","__ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE","__ZN3WTF13tryMakeStringINS_12StringAppendINS_6StringEPKcEES2_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZNK7WebCore17HTMLAnchorElement8pathnameEv","__ZN7WebCore17HTMLAnchorElementD0Ev","__ZN7WebCore17HTMLAnchorElement45setRootEditableElementForSelectionOnMouseDownEPNS_7ElementE","__ZNK7WebCore17HTMLAnchorElement6hasRelEj","__ZN7WebCore17HTMLAnchorElement9setActiveEbb","__ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv","__ZNK7WebCore17HTMLAnchorElement42rootEditableElementForSelectionOnMouseDownEv","__ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore17HTMLAnchorElement9eventTypeEPNS_5EventE","__ZNK7WebCore17HTMLAnchorElement13supportsFocusEv","__ZNK7WebCore17HTMLAnchorElement9draggableEv","__ZN7WebCore4Node11sheetLoadedEv","__ZNK7WebCore7Element23canContainRangeEndPointEv","__ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_","__ZN7WebCore7Element31documentWillSuspendForPageCacheEv","__ZN7WebCore7Element25isValidFormControlElementEv","__ZN7WebCore17HTMLAnchorElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE","__ZNK7WebCore17HTMLAnchorElement10isLiveLinkEv","__ZN7WebCore17HTMLAnchorElement19defaultEventHandlerEPNS_5EventE","__ZNK7WebCore17HTMLAnchorElement27treatLinkAsLiveForEventTypeENS0_9EventTypeE","__ZN7WebCore7Element26didBecomeFullscreenElementEv","__ZN7WebCore17HTMLAnchorElement15accessKeyActionEb","__ZNK7WebCore7Element19isSpinButtonElementEv","__ZNK7WebCore17HTMLAnchorElement6originEv","__ZNK7WebCore4Node19isCharacterDataNodeEv","__ZNK7WebCore7Element9localNameEv","__ZN7WebCore17HTMLAnchorElement11setHostnameERKN3WTF6StringE","__ZNK7WebCore17HTMLAnchorElement17canStartSelectionEv","__ZNK7WebCore17HTMLAnchorElement6searchEv","__ZNK7WebCore17HTMLAnchorElement8toStringEv","__ZNK7WebCore17HTMLAnchorElement6targetEv","__ZN7WebCore17HTMLAnchorElement7setHostERKN3WTF6StringE","__ZNK7WebCore11HTMLElement11isLabelableEv","__ZN7WebCore17HTMLAnchorElement7setPortERKN3WTF6StringE","__ZN7WebCore17HTMLAnchorElement7setHrefERKN3WTF12AtomicStringE","__ZNK7WebCore4Node15isMediaControlsEv","__ZNK7WebCore17HTMLAnchorElement14isURLAttributeERKNS_9AttributeE","__ZNK7WebCore17HTMLAnchorElement4hashEv","__ZNK7WebCore7Element23areAuthorShadowsAllowedEv","__ZNK7WebCore17HTMLAnchorElement16isMouseFocusableEv","__ZNK7WebCore4Node15isAttributeNodeEv","__ZN7WebCore7Element30documentDidResumeFromPageCacheEv","__ZNK7WebCore11HTMLElement29isTextControlInnerTextElementEv"]

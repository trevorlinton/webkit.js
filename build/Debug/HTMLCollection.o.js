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
H_BASE = parentModule["_malloc"](40 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 40;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore14HTMLCollectionC1ERNS_13ContainerNodeENS_14CollectionTypeENS0_20ElementTraversalTypeE;
var __ZN7WebCore14HTMLCollectionD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
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
  var __ZN7WebCore9HTMLNames9scriptTagE=env.__ZN7WebCore9HTMLNames9scriptTagE|0;
  var __ZN7WebCore9HTMLNames7formTagE=env.__ZN7WebCore9HTMLNames7formTagE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZN7WebCore9HTMLNames5thTagE=env.__ZN7WebCore9HTMLNames5thTagE|0;
  var __ZN7WebCore9HTMLNames6imgTagE=env.__ZN7WebCore9HTMLNames6imgTagE|0;
  var __ZN7WebCore9HTMLNames8tbodyTagE=env.__ZN7WebCore9HTMLNames8tbodyTagE|0;
  var __ZN7WebCore9HTMLNames8embedTagE=env.__ZN7WebCore9HTMLNames8embedTagE|0;
  var __ZN7WebCore9HTMLNames8nameAttrE=env.__ZN7WebCore9HTMLNames8nameAttrE|0;
  var __ZN7WebCore9HTMLNames7areaTagE=env.__ZN7WebCore9HTMLNames7areaTagE|0;
  var __ZN7WebCore9HTMLNames9appletTagE=env.__ZN7WebCore9HTMLNames9appletTagE|0;
  var __ZN3WTF8starAtomE=env.__ZN3WTF8starAtomE|0;
  var __ZN7WebCore9HTMLNames9selectTagE=env.__ZN7WebCore9HTMLNames9selectTagE|0;
  var __ZN7WebCore9HTMLNames9objectTagE=env.__ZN7WebCore9HTMLNames9objectTagE|0;
  var __ZN7WebCore9HTMLNames5trTagE=env.__ZN7WebCore9HTMLNames5trTagE|0;
  var __ZN7WebCore9HTMLNames8inputTagE=env.__ZN7WebCore9HTMLNames8inputTagE|0;
  var __ZN7WebCore9HTMLNames9optionTagE=env.__ZN7WebCore9HTMLNames9optionTagE|0;
  var __ZN7WebCore9HTMLNames4aTagE=env.__ZN7WebCore9HTMLNames4aTagE|0;
  var __ZN7WebCore9HTMLNames5tdTagE=env.__ZN7WebCore9HTMLNames5tdTagE|0;
  var __ZN7WebCore9HTMLNames8hrefAttrE=env.__ZN7WebCore9HTMLNames8hrefAttrE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore14HTMLCollectionE=(H_BASE+8)|0;
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
  var invoke_ii=env.invoke_ii;
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
function __ZNK7WebCore14HTMLCollection9namedItemERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i3 = i2 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 if ((HEAP32[i4 + 4 >> 2] | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i6 = i1 + 32 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i7 & 3 | 0) == 1) {
   if ((HEAP32[i8 + 12 >> 2] & 256 | 0) == 0) {
    i9 = i8;
    break;
   }
   i9 = HEAP32[(HEAP32[i8 + 20 >> 2] | 0) + 8 >> 2] | 0;
  } else {
   i9 = i8;
  }
 } while (0);
 L11 : do {
  if ((i7 & 8192 | 0) == 0) {
   i8 = i9 | 0;
   if ((HEAP32[i9 + 12 >> 2] & 8388864 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i9 + 20 >> 2] | 0;
   i11 = i4;
   i12 = HEAP32[i10 + 20 >> 2] | 0;
   L14 : do {
    if ((i12 | 0) == 0) {
     i13 = 22;
    } else {
     i14 = HEAP32[i12 >> 2] | 0;
     if ((i14 | 0) == 0) {
      i13 = 22;
      break;
     }
     i15 = HEAP32[i12 + 8 >> 2] | 0;
     i16 = i4;
     i17 = i16 + ~(i16 << 15) | 0;
     i16 = (i17 >>> 10 ^ i17) * 9 & -1;
     i17 = i16 >>> 6 ^ i16;
     i16 = i17 + ~(i17 << 11) | 0;
     i17 = i16 >>> 16 ^ i16;
     i16 = i15 & i17;
     i18 = i14 + (i16 * 24 & -1) | 0;
     i19 = HEAP32[i18 >> 2] | 0;
     i20 = (i19 | 0) == (i11 | 0);
     if (i20) {
      i21 = i18;
     } else {
      i22 = (i17 >>> 23) + ~i17 | 0;
      i23 = i22 << 12 ^ i22;
      i22 = i23 >>> 7 ^ i23;
      i23 = i22 << 2 ^ i22;
      i22 = i23 >>> 20 ^ i23 | 1;
      i23 = 0;
      i24 = i16;
      i25 = i19;
      while (1) {
       if ((i25 | 0) == 0) {
        i13 = 22;
        break L14;
       }
       i26 = (i23 | 0) == 0 ? i22 : i23;
       i27 = i26 + i24 & i15;
       i28 = i14 + (i27 * 24 & -1) | 0;
       i29 = HEAP32[i28 >> 2] | 0;
       if ((i29 | 0) == (i11 | 0)) {
        i21 = i28;
        break;
       } else {
        i23 = i26;
        i24 = i27;
        i25 = i29;
       }
      }
     }
     if ((i21 | 0) == 0) {
      i13 = 22;
      break;
     }
     L24 : do {
      if (i20) {
       i30 = i18;
      } else {
       i25 = (i17 >>> 23) + ~i17 | 0;
       i24 = i25 << 12 ^ i25;
       i25 = i24 >>> 7 ^ i24;
       i24 = i25 << 2 ^ i25;
       i25 = i24 >>> 20 ^ i24 | 1;
       i24 = 0;
       i23 = i16;
       i22 = i19;
       while (1) {
        if ((i22 | 0) == 0) {
         i30 = 0;
         break L24;
        }
        i29 = (i24 | 0) == 0 ? i25 : i24;
        i27 = i29 + i23 & i15;
        i26 = i14 + (i27 * 24 & -1) | 0;
        i28 = HEAP32[i26 >> 2] | 0;
        if ((i28 | 0) == (i11 | 0)) {
         i30 = i26;
         break;
        } else {
         i24 = i29;
         i23 = i27;
         i22 = i28;
        }
       }
      }
     } while (0);
     i15 = HEAP32[i12 + 4 >> 2] | 0;
     i19 = (i30 | 0) == 0 ? i14 + (i15 * 24 & -1) | 0 : i30;
     if ((i19 | 0) != (i14 + (i15 * 24 & -1) | 0)) {
      if ((HEAP32[i19 + 8 >> 2] | 0) >>> 0 > 1 >>> 0) {
       break L11;
      }
     }
     i31 = __ZNK7WebCore9TreeScope14getElementByIdERKN3WTF12AtomicStringE(i10, i2) | 0;
     i13 = 45;
    }
   } while (0);
   do {
    if ((i13 | 0) == 22) {
     i12 = HEAP32[i10 + 24 >> 2] | 0;
     if ((i12 | 0) == 0) {
      i5 = 0;
      return i5 | 0;
     }
     i19 = HEAP32[i12 >> 2] | 0;
     if ((i19 | 0) == 0) {
      i5 = 0;
      return i5 | 0;
     }
     i15 = HEAP32[i12 + 8 >> 2] | 0;
     i16 = i4;
     i17 = i16 + ~(i16 << 15) | 0;
     i16 = (i17 >>> 10 ^ i17) * 9 & -1;
     i17 = i16 >>> 6 ^ i16;
     i16 = i17 + ~(i17 << 11) | 0;
     i17 = i16 >>> 16 ^ i16;
     i16 = i15 & i17;
     i18 = i19 + (i16 * 24 & -1) | 0;
     i20 = HEAP32[i18 >> 2] | 0;
     i22 = (i20 | 0) == (i11 | 0);
     L41 : do {
      if (i22) {
       i32 = i18;
      } else {
       i23 = (i17 >>> 23) + ~i17 | 0;
       i24 = i23 << 12 ^ i23;
       i23 = i24 >>> 7 ^ i24;
       i24 = i23 << 2 ^ i23;
       i23 = i24 >>> 20 ^ i24 | 1;
       i24 = 0;
       i25 = i16;
       i28 = i20;
       while (1) {
        if ((i28 | 0) == 0) {
         i5 = 0;
         break;
        }
        i27 = (i24 | 0) == 0 ? i23 : i24;
        i29 = i27 + i25 & i15;
        i26 = i19 + (i29 * 24 & -1) | 0;
        i33 = HEAP32[i26 >> 2] | 0;
        if ((i33 | 0) == (i11 | 0)) {
         i32 = i26;
         break L41;
        } else {
         i24 = i27;
         i25 = i29;
         i28 = i33;
        }
       }
       return i5 | 0;
      }
     } while (0);
     if ((i32 | 0) == 0) {
      i5 = 0;
      return i5 | 0;
     }
     L51 : do {
      if (i22) {
       i34 = i18;
      } else {
       i14 = (i17 >>> 23) + ~i17 | 0;
       i28 = i14 << 12 ^ i14;
       i14 = i28 >>> 7 ^ i28;
       i28 = i14 << 2 ^ i14;
       i14 = i28 >>> 20 ^ i28 | 1;
       i28 = 0;
       i25 = i16;
       i24 = i20;
       while (1) {
        if ((i24 | 0) == 0) {
         i34 = 0;
         break L51;
        }
        i23 = (i28 | 0) == 0 ? i14 : i28;
        i33 = i23 + i25 & i15;
        i29 = i19 + (i33 * 24 & -1) | 0;
        i27 = HEAP32[i29 >> 2] | 0;
        if ((i27 | 0) == (i11 | 0)) {
         i34 = i29;
         break;
        } else {
         i28 = i23;
         i25 = i33;
         i24 = i27;
        }
       }
      }
     } while (0);
     i15 = HEAP32[i12 + 4 >> 2] | 0;
     i20 = (i34 | 0) == 0 ? i19 + (i15 * 24 & -1) | 0 : i34;
     if ((i20 | 0) != (i19 + (i15 * 24 & -1) | 0)) {
      if ((HEAP32[i20 + 8 >> 2] | 0) >>> 0 > 1 >>> 0) {
       break L11;
      }
     }
     i20 = __ZNK7WebCore9TreeScope16getElementByNameERKN3WTF12AtomicStringE(i10, i2) | 0;
     if ((i20 | 0) == 0) {
      break L11;
     }
     if ((HEAP32[i6 >> 2] & 7936 | 0) != 1792) {
      i35 = i20;
      break;
     }
     if ((HEAP32[i20 + 12 >> 2] & 16 | 0) == 0) {
      break L11;
     }
     i15 = HEAP32[(HEAP32[i20 + 44 >> 2] | 0) + 12 >> 2] | 0;
     if ((i15 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9appletTagE >> 2] | 0) + 12 >> 2] | 0)) {
      i31 = i20;
      i13 = 45;
      break;
     }
     if ((i15 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8embedTagE >> 2] | 0) + 12 >> 2] | 0)) {
      i31 = i20;
      i13 = 45;
      break;
     }
     if ((i15 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7formTagE >> 2] | 0) + 12 >> 2] | 0)) {
      i31 = i20;
      i13 = 45;
      break;
     }
     if ((i15 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6imgTagE >> 2] | 0) + 12 >> 2] | 0)) {
      i31 = i20;
      i13 = 45;
      break;
     }
     if ((i15 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8inputTagE >> 2] | 0) + 12 >> 2] | 0)) {
      i31 = i20;
      i13 = 45;
      break;
     }
     if ((i15 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9objectTagE >> 2] | 0) + 12 >> 2] | 0)) {
      i31 = i20;
      i13 = 45;
      break;
     }
     if ((i15 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9selectTagE >> 2] | 0) + 12 >> 2] | 0)) {
      i31 = i20;
      i13 = 45;
     } else {
      break L11;
     }
    }
   } while (0);
   if ((i13 | 0) == 45) {
    if ((i31 | 0) == 0) {
     break;
    } else {
     i35 = i31;
    }
   }
   if (!(__ZN7WebCore17isMatchingElementERKNS_14HTMLCollectionERNS_7ElementE(i1, i35) | 0)) {
    break;
   }
   i10 = i35 | 0;
   if ((HEAP32[i6 >> 2] & 64 | 0) == 0) {
    if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(i10, i8) | 0) {
     i5 = i10;
    } else {
     break;
    }
    return i5 | 0;
   } else {
    if ((HEAP32[i35 + 16 >> 2] | 0) == (i9 | 0)) {
     i5 = i10;
    } else {
     break;
    }
    return i5 | 0;
   }
  }
 } while (0);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 15](i1);
 i9 = HEAP32[i3 >> 2] | 0;
 i3 = i9;
 i35 = HEAP32[i1 + 44 >> 2] | 0;
 i6 = HEAP32[i1 + 36 >> 2] | 0;
 i31 = i9;
 i9 = i31 + ~(i31 << 15) | 0;
 i31 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i31 >>> 6 ^ i31;
 i31 = i9 + ~(i9 << 11) | 0;
 i9 = i31 >>> 16 ^ i31;
 L79 : do {
  if ((i6 | 0) != 0) {
   i31 = i9 & i35;
   i13 = i6 + (i31 << 3) | 0;
   i2 = HEAP32[i13 >> 2] | 0;
   if ((i2 | 0) == (i3 | 0)) {
    i36 = i13;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i34 = i13 << 12 ^ i13;
    i13 = i34 >>> 7 ^ i34;
    i34 = i13 << 2 ^ i13;
    i13 = i34 >>> 20 ^ i34 | 1;
    i34 = 0;
    i32 = i31;
    i31 = i2;
    while (1) {
     if ((i31 | 0) == 0) {
      break L79;
     }
     i2 = (i34 | 0) == 0 ? i13 : i34;
     i4 = i2 + i32 & i35;
     i30 = i6 + (i4 << 3) | 0;
     i21 = HEAP32[i30 >> 2] | 0;
     if ((i21 | 0) == (i3 | 0)) {
      i36 = i30;
      break;
     } else {
      i34 = i2;
      i32 = i4;
      i31 = i21;
     }
    }
   }
   if ((i36 | 0) == 0) {
    break;
   }
   i31 = HEAP32[i36 + 4 >> 2] | 0;
   if ((i31 | 0) == 0) {
    break;
   }
   if ((HEAP32[i31 + 8 >> 2] | 0) == 0) {
    break;
   }
   i5 = HEAP32[HEAP32[i31 >> 2] >> 2] | 0;
   return i5 | 0;
  }
 } while (0);
 i36 = HEAP32[i1 + 64 >> 2] | 0;
 i6 = HEAP32[i1 + 56 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i1 = i9 & i36;
 i35 = i6 + (i1 << 3) | 0;
 i31 = HEAP32[i35 >> 2] | 0;
 L95 : do {
  if ((i31 | 0) == (i3 | 0)) {
   i37 = i35;
  } else {
   i32 = (i9 >>> 23) + ~i9 | 0;
   i34 = i32 << 12 ^ i32;
   i32 = i34 >>> 7 ^ i34;
   i34 = i32 << 2 ^ i32;
   i32 = i34 >>> 20 ^ i34 | 1;
   i34 = 0;
   i13 = i1;
   i8 = i31;
   while (1) {
    if ((i8 | 0) == 0) {
     i5 = 0;
     break;
    }
    i21 = (i34 | 0) == 0 ? i32 : i34;
    i4 = i21 + i13 & i36;
    i2 = i6 + (i4 << 3) | 0;
    i30 = HEAP32[i2 >> 2] | 0;
    if ((i30 | 0) == (i3 | 0)) {
     i37 = i2;
     break L95;
    } else {
     i34 = i21;
     i13 = i4;
     i8 = i30;
    }
   }
   return i5 | 0;
  }
 } while (0);
 if ((i37 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i3 = HEAP32[i37 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i5 = HEAP32[HEAP32[i3 >> 2] >> 2] | 0;
 return i5 | 0;
}
function __ZN7WebCore17isMatchingElementERKNS_14HTMLCollectionERNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = (HEAP32[i1 + 32 >> 2] | 0) >>> 8 & 31;
 L1 : do {
  if ((HEAP32[i2 + 12 >> 2] & 16 | 0) == 0) {
   if ((i5 | 0) == 7 | (i5 | 0) == 10) {
    i6 = 51;
    break;
   } else if ((i5 | 0) == 8) {
    i6 = 53;
    break;
   } else {
    i7 = 0;
   }
   STACKTOP = i3;
   return i7 | 0;
  } else {
   switch (i5 | 0) {
   case 16:
    {
     if ((HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9optionTagE >> 2] | 0) + 12 >> 2] | 0)) {
      i7 = 0;
      STACKTOP = i3;
      return i7 | 0;
     }
     i7 = __ZN7WebCore17HTMLOptionElement8selectedEv(i2) | 0;
     STACKTOP = i3;
     return i7 | 0;
    }
   case 7:
   case 10:
    {
     i6 = 51;
     break L1;
     break;
    }
   case 9:
    {
     i7 = __ZN7WebCore22DocumentNameCollection11nodeMatchesEPNS_7ElementEPKN3WTF16AtomicStringImplE(i2, HEAP32[i1 + 76 >> 2] | 0) | 0;
     STACKTOP = i3;
     return i7 | 0;
    }
   case 8:
    {
     i6 = 53;
     break L1;
     break;
    }
   case 4:
    {
     i8 = HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0;
     do {
      if ((i8 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames4aTagE >> 2] | 0) + 12 >> 2] | 0)) {
       if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7areaTagE >> 2] | 0) + 12 >> 2] | 0)) {
        break;
       } else {
        i7 = 0;
       }
       STACKTOP = i3;
       return i7 | 0;
      }
     } while (0);
     i8 = HEAP32[i2 + 48 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      STACKTOP = i3;
      return i7 | 0;
     }
     i9 = HEAP32[i8 + 4 >> 2] | 0;
     if ((i9 & 1 | 0) == 0) {
      i10 = i9 >>> 1 & 134217727;
      i11 = i8 + 20 | 0;
     } else {
      i9 = i8 + 24 | 0;
      i10 = HEAP32[i9 + 8 >> 2] | 0;
      i11 = HEAP32[i9 >> 2] | 0;
     }
     L25 : do {
      if ((i10 | 0) == 0) {
       i12 = 0;
      } else {
       i9 = HEAP32[__ZN7WebCore9HTMLNames8hrefAttrE >> 2] | 0;
       i8 = i9 + 12 | 0;
       i13 = i9 + 16 | 0;
       i14 = 0;
       while (1) {
        i15 = i11 + (i14 << 3) | 0;
        i16 = HEAP32[i15 >> 2] | 0;
        if ((i16 | 0) == (i9 | 0)) {
         i12 = i15;
         break L25;
        }
        if ((HEAP32[i16 + 12 >> 2] | 0) == (HEAP32[i8 >> 2] | 0)) {
         if ((HEAP32[i16 + 16 >> 2] | 0) == (HEAP32[i13 >> 2] | 0)) {
          i12 = i15;
          break L25;
         }
        }
        i15 = i14 + 1 | 0;
        if (i15 >>> 0 < i10 >>> 0) {
         i14 = i15;
        } else {
         i12 = 0;
         break;
        }
       }
      }
     } while (0);
     i7 = (i12 | 0) != 0;
     STACKTOP = i3;
     return i7 | 0;
    }
   case 2:
    {
     i7 = (HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8embedTagE >> 2] | 0) + 12 >> 2] | 0);
     STACKTOP = i3;
     return i7 | 0;
    }
   case 17:
    {
     do {
      if ((HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9optionTagE >> 2] | 0) + 12 >> 2] | 0)) {
       i14 = i2;
       if (__ZNK7WebCore17HTMLOptionElement21isDisabledFormControlEv(i14) | 0) {
        break;
       }
       __ZNK7WebCore17HTMLOptionElement5valueEv(i4, i14);
       i14 = HEAP32[i4 >> 2] | 0;
       if ((i14 | 0) == 0) {
        break;
       }
       i13 = (HEAP32[i14 + 4 >> 2] | 0) != 0;
       i8 = i14 | 0;
       i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
       if ((i9 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i14);
        if (i13) {
         i7 = 1;
        } else {
         break;
        }
        STACKTOP = i3;
        return i7 | 0;
       } else {
        HEAP32[i8 >> 2] = i9;
        if (i13) {
         i7 = 1;
        } else {
         break;
        }
        STACKTOP = i3;
        return i7 | 0;
       }
      }
     } while (0);
     i7 = 0;
     STACKTOP = i3;
     return i7 | 0;
    }
   case 12:
    {
     i7 = (HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0) + 12 >> 2] | 0);
     STACKTOP = i3;
     return i7 | 0;
    }
   case 18:
    {
     i7 = (HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7areaTagE >> 2] | 0) + 12 >> 2] | 0);
     STACKTOP = i3;
     return i7 | 0;
    }
   case 15:
    {
     i7 = (HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9optionTagE >> 2] | 0) + 12 >> 2] | 0);
     STACKTOP = i3;
     return i7 | 0;
    }
   case 5:
    {
     if ((HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames4aTagE >> 2] | 0) + 12 >> 2] | 0)) {
      i7 = 0;
      STACKTOP = i3;
      return i7 | 0;
     }
     i13 = HEAP32[i2 + 48 >> 2] | 0;
     if ((i13 | 0) == 0) {
      i7 = 0;
      STACKTOP = i3;
      return i7 | 0;
     }
     i9 = HEAP32[i13 + 4 >> 2] | 0;
     if ((i9 & 1 | 0) == 0) {
      i17 = i9 >>> 1 & 134217727;
      i18 = i13 + 20 | 0;
     } else {
      i9 = i13 + 24 | 0;
      i17 = HEAP32[i9 + 8 >> 2] | 0;
      i18 = HEAP32[i9 >> 2] | 0;
     }
     L66 : do {
      if ((i17 | 0) == 0) {
       i19 = 0;
      } else {
       i9 = HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0;
       i13 = i9 + 12 | 0;
       i8 = i9 + 16 | 0;
       i14 = 0;
       while (1) {
        i15 = i18 + (i14 << 3) | 0;
        i16 = HEAP32[i15 >> 2] | 0;
        if ((i16 | 0) == (i9 | 0)) {
         i19 = i15;
         break L66;
        }
        if ((HEAP32[i16 + 12 >> 2] | 0) == (HEAP32[i13 >> 2] | 0)) {
         if ((HEAP32[i16 + 16 >> 2] | 0) == (HEAP32[i8 >> 2] | 0)) {
          i19 = i15;
          break L66;
         }
        }
        i15 = i14 + 1 | 0;
        if (i15 >>> 0 < i17 >>> 0) {
         i14 = i15;
        } else {
         i19 = 0;
         break;
        }
       }
      }
     } while (0);
     i7 = (i19 | 0) != 0;
     STACKTOP = i3;
     return i7 | 0;
    }
   case 3:
    {
     i7 = (HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7formTagE >> 2] | 0) + 12 >> 2] | 0);
     STACKTOP = i3;
     return i7 | 0;
    }
   case 1:
    {
     i14 = HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0;
     if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9appletTagE >> 2] | 0) + 12 >> 2] | 0)) {
      i7 = 1;
      STACKTOP = i3;
      return i7 | 0;
     }
     if ((i14 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9objectTagE >> 2] | 0) + 12 >> 2] | 0)) {
      i7 = 0;
      STACKTOP = i3;
      return i7 | 0;
     }
     i7 = __ZNK7WebCore17HTMLObjectElement18containsJavaAppletEv(i2) | 0;
     STACKTOP = i3;
     return i7 | 0;
    }
   case 6:
    {
     i7 = (HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9scriptTagE >> 2] | 0) + 12 >> 2] | 0);
     STACKTOP = i3;
     return i7 | 0;
    }
   case 11:
    {
     i7 = (HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tbodyTagE >> 2] | 0) + 12 >> 2] | 0);
     STACKTOP = i3;
     return i7 | 0;
    }
   case 14:
    {
     i14 = HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0;
     if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0) + 12 >> 2] | 0)) {
      i7 = 1;
      STACKTOP = i3;
      return i7 | 0;
     }
     i7 = (i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0) + 12 >> 2] | 0);
     STACKTOP = i3;
     return i7 | 0;
    }
   case 0:
    {
     i7 = (HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6imgTagE >> 2] | 0) + 12 >> 2] | 0);
     STACKTOP = i3;
     return i7 | 0;
    }
   default:
    {
     i7 = 0;
     STACKTOP = i3;
     return i7 | 0;
    }
   }
  }
 } while (0);
 if ((i6 | 0) == 51) {
  i7 = 1;
  STACKTOP = i3;
  return i7 | 0;
 } else if ((i6 | 0) == 53) {
  i7 = __ZN7WebCore20WindowNameCollection11nodeMatchesEPNS_7ElementEPKN3WTF16AtomicStringImplE(i2, HEAP32[i1 + 76 >> 2] | 0) | 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 return 0;
}
function __ZNK7WebCore14HTMLCollection26collectionTraverseBackwardERNS_7ElementEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i4 = i1 + 32 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 + 12 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 & 3 | 0) == 1) {
   if ((HEAP32[i7 + 12 >> 2] & 256 | 0) == 0) {
    i8 = i7;
    break;
   }
   i8 = HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 8 >> 2] | 0;
  } else {
   i8 = i7;
  }
 } while (0);
 i7 = (i2 | 0) != 0 & (i3 | 0) != 0;
 if ((i5 & 64 | 0) != 0) {
  if (i7) {
   i9 = i3;
   i10 = i2;
  } else {
   i11 = i2;
   return i11 | 0;
  }
  L9 : while (1) {
   i5 = i10 + 24 | 0;
   while (1) {
    i12 = HEAP32[i5 >> 2] | 0;
    if ((i12 | 0) == 0) {
     i13 = 0;
     break;
    }
    if ((HEAP32[i12 + 12 >> 2] & 4 | 0) == 0) {
     i5 = i12 + 24 | 0;
    } else {
     i13 = i12;
     break;
    }
   }
   i5 = HEAP32[i4 >> 2] | 0;
   i12 = (i5 & 64 | 0) == 0;
   i14 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i5 & 3 | 0) == 1) {
     if ((HEAP32[i14 + 12 >> 2] & 256 | 0) == 0) {
      i15 = i14;
      break;
     }
     i15 = HEAP32[(HEAP32[i14 + 20 >> 2] | 0) + 8 >> 2] | 0;
    } else {
     i15 = i14;
    }
   } while (0);
   if ((i13 | 0) == 0) {
    i11 = 0;
    i16 = 63;
    break;
   } else {
    i17 = i13;
   }
   L19 : while (1) {
    i18 = i17;
    if (__ZN7WebCore17isMatchingElementERKNS_14HTMLCollectionERNS_7ElementE(i1, i18) | 0) {
     break;
    }
    i14 = i17 + 24 | 0;
    if (!i12) {
     i5 = i14;
     while (1) {
      i19 = HEAP32[i5 >> 2] | 0;
      if ((i19 | 0) == 0) {
       i11 = 0;
       i16 = 68;
       break L9;
      }
      if ((HEAP32[i19 + 12 >> 2] & 4 | 0) == 0) {
       i5 = i19 + 24 | 0;
      } else {
       i17 = i19;
       continue L19;
      }
     }
    }
    i5 = HEAP32[i14 >> 2] | 0;
    if ((i5 | 0) == 0) {
     i19 = HEAP32[i17 + 16 >> 2] | 0;
     i20 = (i19 | 0) == (i15 | 0) ? 0 : i19 | 0;
    } else {
     i20 = __ZN7WebCore13NodeTraversal13deepLastChildEPNS_4NodeE(i5) | 0;
    }
    if ((i20 | 0) == 0) {
     i11 = 0;
     i16 = 64;
     break L9;
    } else {
     i21 = i20;
    }
    while (1) {
     if ((HEAP32[i21 + 12 >> 2] & 4 | 0) != 0) {
      break;
     }
     i5 = HEAP32[i21 + 24 >> 2] | 0;
     if ((i5 | 0) == 0) {
      i19 = HEAP32[i21 + 16 >> 2] | 0;
      i22 = (i19 | 0) == (i15 | 0) ? 0 : i19 | 0;
     } else {
      i22 = __ZN7WebCore13NodeTraversal13deepLastChildEPNS_4NodeE(i5) | 0;
     }
     if ((i22 | 0) == 0) {
      i11 = 0;
      i16 = 65;
      break L9;
     } else {
      i21 = i22;
     }
    }
    if ((i21 | 0) == 0) {
     i11 = 0;
     i16 = 61;
     break L9;
    } else {
     i17 = i21;
    }
   }
   i12 = i9 - 1 | 0;
   if ((i17 | 0) != 0 & (i12 | 0) != 0) {
    i9 = i12;
    i10 = i18;
   } else {
    i11 = i18;
    i16 = 66;
    break;
   }
  }
  if ((i16 | 0) == 61) {
   return i11 | 0;
  } else if ((i16 | 0) == 63) {
   return i11 | 0;
  } else if ((i16 | 0) == 64) {
   return i11 | 0;
  } else if ((i16 | 0) == 65) {
   return i11 | 0;
  } else if ((i16 | 0) == 66) {
   return i11 | 0;
  } else if ((i16 | 0) == 68) {
   return i11 | 0;
  }
 }
 if (i7) {
  i23 = i3;
  i24 = i2;
 } else {
  i11 = i2;
  return i11 | 0;
 }
 L50 : while (1) {
  i2 = HEAP32[i24 + 24 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i3 = HEAP32[i24 + 16 >> 2] | 0;
   i25 = (i3 | 0) == (i8 | 0) ? 0 : i3 | 0;
  } else {
   i25 = __ZN7WebCore13NodeTraversal13deepLastChildEPNS_4NodeE(i2) | 0;
  }
  L56 : do {
   if ((i25 | 0) == 0) {
    i26 = 0;
   } else {
    i2 = i25;
    while (1) {
     if ((HEAP32[i2 + 12 >> 2] & 4 | 0) != 0) {
      i26 = i2;
      break L56;
     }
     i3 = HEAP32[i2 + 24 >> 2] | 0;
     if ((i3 | 0) == 0) {
      i7 = HEAP32[i2 + 16 >> 2] | 0;
      i27 = (i7 | 0) == (i8 | 0) ? 0 : i7 | 0;
     } else {
      i27 = __ZN7WebCore13NodeTraversal13deepLastChildEPNS_4NodeE(i3) | 0;
     }
     if ((i27 | 0) == 0) {
      i26 = 0;
      break;
     } else {
      i2 = i27;
     }
    }
   }
  } while (0);
  i2 = HEAP32[i4 >> 2] | 0;
  i3 = (i2 & 64 | 0) == 0;
  i7 = HEAP32[i6 >> 2] | 0;
  do {
   if ((i2 & 3 | 0) == 1) {
    if ((HEAP32[i7 + 12 >> 2] & 256 | 0) == 0) {
     i28 = i7;
     break;
    }
    i28 = HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 8 >> 2] | 0;
   } else {
    i28 = i7;
   }
  } while (0);
  i7 = i26;
  if ((i26 | 0) == 0) {
   i11 = 0;
   i16 = 62;
   break;
  }
  L70 : do {
   if (i3) {
    i2 = i26;
    i18 = i7;
    while (1) {
     if (__ZN7WebCore17isMatchingElementERKNS_14HTMLCollectionERNS_7ElementE(i1, i18) | 0) {
      i29 = i18;
      break L70;
     }
     i10 = HEAP32[i2 + 24 >> 2] | 0;
     if ((i10 | 0) == 0) {
      i9 = HEAP32[i2 + 16 >> 2] | 0;
      i30 = (i9 | 0) == (i28 | 0) ? 0 : i9 | 0;
     } else {
      i30 = __ZN7WebCore13NodeTraversal13deepLastChildEPNS_4NodeE(i10) | 0;
     }
     if ((i30 | 0) == 0) {
      i11 = 0;
      i16 = 69;
      break L50;
     } else {
      i31 = i30;
     }
     while (1) {
      if ((HEAP32[i31 + 12 >> 2] & 4 | 0) != 0) {
       break;
      }
      i10 = HEAP32[i31 + 24 >> 2] | 0;
      if ((i10 | 0) == 0) {
       i9 = HEAP32[i31 + 16 >> 2] | 0;
       i32 = (i9 | 0) == (i28 | 0) ? 0 : i9 | 0;
      } else {
       i32 = __ZN7WebCore13NodeTraversal13deepLastChildEPNS_4NodeE(i10) | 0;
      }
      if ((i32 | 0) == 0) {
       i11 = 0;
       i16 = 70;
       break L50;
      } else {
       i31 = i32;
      }
     }
     i2 = i31;
     i18 = i31;
    }
   } else {
    i18 = i26;
    i2 = i7;
    while (1) {
     if (__ZN7WebCore17isMatchingElementERKNS_14HTMLCollectionERNS_7ElementE(i1, i2) | 0) {
      i29 = i2;
      break L70;
     } else {
      i33 = i18;
     }
     while (1) {
      i33 = HEAP32[i33 + 24 >> 2] | 0;
      if ((i33 | 0) == 0) {
       i11 = 0;
       i16 = 71;
       break L50;
      }
      if ((HEAP32[i33 + 12 >> 2] & 4 | 0) != 0) {
       break;
      }
     }
     i18 = i33;
     i2 = i33;
    }
   }
  } while (0);
  i7 = i23 - 1 | 0;
  if ((i29 | 0) != 0 & (i7 | 0) != 0) {
   i23 = i7;
   i24 = i29;
  } else {
   i11 = i29;
   i16 = 72;
   break;
  }
 }
 if ((i16 | 0) == 62) {
  return i11 | 0;
 } else if ((i16 | 0) == 69) {
  return i11 | 0;
 } else if ((i16 | 0) == 70) {
  return i11 | 0;
 } else if ((i16 | 0) == 71) {
  return i11 | 0;
 } else if ((i16 | 0) == 72) {
  return i11 | 0;
 }
 return 0;
}
function __ZNK7WebCore14HTMLCollection15updateNameCacheEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 32 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 & 128 | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 i6 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i5 & 3 | 0) == 1) {
   if ((HEAP32[i6 + 12 >> 2] & 256 | 0) == 0) {
    i7 = i6;
    break;
   }
   i7 = HEAP32[(HEAP32[i6 + 20 >> 2] | 0) + 8 >> 2] | 0;
  } else {
   i7 = i6;
  }
 } while (0);
 i6 = __ZNK7WebCore14HTMLCollection12firstElementERNS_13ContainerNodeE(i1, i7) | 0;
 if ((i6 | 0) != 0) {
  i5 = i1 + 56 | 0;
  i8 = i1 + 36 | 0;
  i9 = i6;
  while (1) {
   i6 = i9 + 48 | 0;
   i10 = HEAP32[i6 >> 2] | 0;
   L12 : do {
    if ((i10 | 0) == 0) {
     i11 = __ZN3WTF8nullAtomE;
    } else {
     if ((HEAP32[i10 + 16 >> 2] | 0) == 0) {
      i11 = __ZN3WTF8nullAtomE;
      break;
     }
     i12 = HEAP32[i10 + 4 >> 2] | 0;
     if ((i12 & 1 | 0) == 0) {
      i13 = i12 >>> 1 & 134217727;
      i14 = i10 + 20 | 0;
     } else {
      i12 = i10 + 24 | 0;
      i13 = HEAP32[i12 + 8 >> 2] | 0;
      i14 = HEAP32[i12 >> 2] | 0;
     }
     if ((i13 | 0) == 0) {
      i11 = __ZN3WTF8nullAtomE;
      break;
     }
     i12 = HEAP32[(HEAP32[(HEAP32[i9 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1680 >> 2] | 0;
     i15 = i12 + 12 | 0;
     i16 = i12 + 16 | 0;
     i17 = 0;
     while (1) {
      i18 = i14 + (i17 << 3) | 0;
      i19 = HEAP32[i18 >> 2] | 0;
      if ((i19 | 0) == (i12 | 0)) {
       break;
      }
      if ((HEAP32[i19 + 12 >> 2] | 0) == (HEAP32[i15 >> 2] | 0)) {
       if ((HEAP32[i19 + 16 >> 2] | 0) == (HEAP32[i16 >> 2] | 0)) {
        break;
       }
      }
      i19 = i17 + 1 | 0;
      if (i19 >>> 0 < i13 >>> 0) {
       i17 = i19;
      } else {
       i11 = __ZN3WTF8nullAtomE;
       break L12;
      }
     }
     i11 = (i18 | 0) == 0 ? __ZN3WTF8nullAtomE : i14 + (i17 << 3) + 4 | 0;
    }
   } while (0);
   i10 = i11 | 0;
   i16 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     if ((HEAP32[i16 + 4 >> 2] | 0) == 0) {
      break;
     }
     __ZN7WebCore14HTMLCollection6appendERN3WTF7HashMapIPNS1_16AtomicStringImplENS1_6OwnPtrINS1_6VectorIPNS_7ElementELj0ENS1_15CrashOnOverflowEEEEENS1_7PtrHashIS4_EENS1_10HashTraitsIS4_EENSE_ISB_EEEERKNS1_12AtomicStringES8_(i8, i11, i9);
    }
   } while (0);
   L32 : do {
    if ((HEAP32[i9 + 12 >> 2] & 16 | 0) != 0) {
     i16 = HEAP32[i6 >> 2] | 0;
     L34 : do {
      if ((i16 | 0) == 0) {
       i20 = __ZN3WTF8nullAtomE;
      } else {
       i15 = HEAP32[i16 + 4 >> 2] | 0;
       if ((i15 & 268435456 | 0) == 0) {
        i20 = __ZN3WTF8nullAtomE;
        break;
       }
       if ((i15 & 1 | 0) == 0) {
        i21 = i15 >>> 1 & 134217727;
        i22 = i16 + 20 | 0;
       } else {
        i15 = i16 + 24 | 0;
        i21 = HEAP32[i15 + 8 >> 2] | 0;
        i22 = HEAP32[i15 >> 2] | 0;
       }
       if ((i21 | 0) == 0) {
        i20 = __ZN3WTF8nullAtomE;
        break;
       }
       i15 = HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0;
       i12 = i15 + 12 | 0;
       i19 = i15 + 16 | 0;
       i23 = 0;
       while (1) {
        i24 = i22 + (i23 << 3) | 0;
        i25 = HEAP32[i24 >> 2] | 0;
        if ((i25 | 0) == (i15 | 0)) {
         break;
        }
        if ((HEAP32[i25 + 12 >> 2] | 0) == (HEAP32[i12 >> 2] | 0)) {
         if ((HEAP32[i25 + 16 >> 2] | 0) == (HEAP32[i19 >> 2] | 0)) {
          break;
         }
        }
        i25 = i23 + 1 | 0;
        if (i25 >>> 0 < i21 >>> 0) {
         i23 = i25;
        } else {
         i20 = __ZN3WTF8nullAtomE;
         break L34;
        }
       }
       i20 = (i24 | 0) == 0 ? __ZN3WTF8nullAtomE : i22 + (i23 << 3) + 4 | 0;
      }
     } while (0);
     i16 = HEAP32[i20 >> 2] | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     if ((HEAP32[i16 + 4 >> 2] | 0) == 0) {
      break;
     }
     if ((HEAP32[i10 >> 2] | 0) == (i16 | 0)) {
      break;
     }
     do {
      if ((HEAP32[i4 >> 2] & 7936 | 0) == 1792) {
       i16 = HEAP32[(HEAP32[i9 + 44 >> 2] | 0) + 12 >> 2] | 0;
       if ((i16 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9appletTagE >> 2] | 0) + 12 >> 2] | 0)) {
        break;
       }
       if ((i16 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8embedTagE >> 2] | 0) + 12 >> 2] | 0)) {
        break;
       }
       if ((i16 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7formTagE >> 2] | 0) + 12 >> 2] | 0)) {
        break;
       }
       if ((i16 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6imgTagE >> 2] | 0) + 12 >> 2] | 0)) {
        break;
       }
       if ((i16 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8inputTagE >> 2] | 0) + 12 >> 2] | 0)) {
        break;
       }
       if ((i16 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9objectTagE >> 2] | 0) + 12 >> 2] | 0)) {
        break;
       }
       if ((i16 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9selectTagE >> 2] | 0) + 12 >> 2] | 0)) {
        break L32;
       }
      }
     } while (0);
     __ZN7WebCore14HTMLCollection6appendERN3WTF7HashMapIPNS1_16AtomicStringImplENS1_6OwnPtrINS1_6VectorIPNS_7ElementELj0ENS1_15CrashOnOverflowEEEEENS1_7PtrHashIS4_EENS1_10HashTraitsIS4_EENSE_ISB_EEEERKNS1_12AtomicStringES8_(i5, i20, i9);
    }
   } while (0);
   i9 = __ZNK7WebCore14HTMLCollection15traverseForwardERNS_7ElementEjRjRNS_13ContainerNodeE(i1, i9, 1, i3, i7) | 0;
   if ((i9 | 0) == 0) {
    break;
   }
  }
 }
 HEAP32[i4 >> 2] = HEAP32[i4 >> 2] | 128;
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore14HTMLCollection10namedItemsERKN3WTF12AtomicStringERNS1_6VectorINS1_3RefINS_7ElementEEELj0ENS1_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 15](i1);
 i2 = HEAP32[i4 >> 2] | 0;
 i4 = i2;
 i5 = HEAP32[i1 + 44 >> 2] | 0;
 i6 = HEAP32[i1 + 36 >> 2] | 0;
 i7 = i2;
 i2 = i7 + ~(i7 << 15) | 0;
 i7 = (i2 >>> 10 ^ i2) * 9 & -1;
 i2 = i7 >>> 6 ^ i7;
 i7 = i2 + ~(i2 << 11) | 0;
 i2 = i7 >>> 16 ^ i7;
 L7 : do {
  if ((i6 | 0) == 0) {
   i8 = 0;
  } else {
   i7 = i2 & i5;
   i9 = i6 + (i7 << 3) | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == (i4 | 0)) {
    i11 = i9;
   } else {
    i9 = (i2 >>> 23) + ~i2 | 0;
    i12 = i9 << 12 ^ i9;
    i9 = i12 >>> 7 ^ i12;
    i12 = i9 << 2 ^ i9;
    i9 = i12 >>> 20 ^ i12 | 1;
    i12 = 0;
    i13 = i7;
    i7 = i10;
    while (1) {
     if ((i7 | 0) == 0) {
      i8 = 0;
      break L7;
     }
     i10 = (i12 | 0) == 0 ? i9 : i12;
     i14 = i10 + i13 & i5;
     i15 = i6 + (i14 << 3) | 0;
     i16 = HEAP32[i15 >> 2] | 0;
     if ((i16 | 0) == (i4 | 0)) {
      i11 = i15;
      break;
     } else {
      i12 = i10;
      i13 = i14;
      i7 = i16;
     }
    }
   }
   if ((i11 | 0) == 0) {
    i8 = 0;
    break;
   }
   i8 = HEAP32[i11 + 4 >> 2] | 0;
  }
 } while (0);
 i11 = HEAP32[i1 + 64 >> 2] | 0;
 i6 = HEAP32[i1 + 56 >> 2] | 0;
 L17 : do {
  if ((i6 | 0) == 0) {
   i17 = 0;
  } else {
   i1 = i2 & i11;
   i5 = i6 + (i1 << 3) | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   if ((i7 | 0) == (i4 | 0)) {
    i18 = i5;
   } else {
    i5 = (i2 >>> 23) + ~i2 | 0;
    i13 = i5 << 12 ^ i5;
    i5 = i13 >>> 7 ^ i13;
    i13 = i5 << 2 ^ i5;
    i5 = i13 >>> 20 ^ i13 | 1;
    i13 = 0;
    i12 = i1;
    i1 = i7;
    while (1) {
     if ((i1 | 0) == 0) {
      i17 = 0;
      break L17;
     }
     i7 = (i13 | 0) == 0 ? i5 : i13;
     i9 = i7 + i12 & i11;
     i16 = i6 + (i9 << 3) | 0;
     i14 = HEAP32[i16 >> 2] | 0;
     if ((i14 | 0) == (i4 | 0)) {
      i18 = i16;
      break;
     } else {
      i13 = i7;
      i12 = i9;
      i1 = i14;
     }
    }
   }
   if ((i18 | 0) == 0) {
    i17 = 0;
    break;
   }
   i17 = HEAP32[i18 + 4 >> 2] | 0;
  }
 } while (0);
 i18 = i8 + 8 | 0;
 L27 : do {
  if ((i8 | 0) != 0) {
   i4 = i8 | 0;
   i6 = i3 + 8 | 0;
   i11 = i3 + 4 | 0;
   i2 = i3 | 0;
   i1 = 0;
   while (1) {
    if (i1 >>> 0 >= (HEAP32[i18 >> 2] | 0) >>> 0) {
     break L27;
    }
    i12 = HEAP32[(HEAP32[i4 >> 2] | 0) + (i1 << 2) >> 2] | 0;
    i13 = HEAP32[i6 >> 2] | 0;
    if ((i13 | 0) == (HEAP32[i11 >> 2] | 0)) {
     __ZN3WTF6VectorINS_3RefIN7WebCore7ElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i13 + 1 | 0);
     HEAP32[(HEAP32[i2 >> 2] | 0) + (HEAP32[i6 >> 2] << 2) >> 2] = i12;
     i5 = i12 + 8 | 0;
     HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
    } else {
     HEAP32[(HEAP32[i2 >> 2] | 0) + (i13 << 2) >> 2] = i12;
     i13 = i12 + 8 | 0;
     HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
    }
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
    i1 = i1 + 1 | 0;
   }
  }
 } while (0);
 i18 = i17 + 8 | 0;
 if ((i17 | 0) == 0) {
  return;
 }
 i8 = i17 | 0;
 i17 = i3 + 8 | 0;
 i1 = i3 + 4 | 0;
 i6 = i3 | 0;
 i2 = 0;
 while (1) {
  if (i2 >>> 0 >= (HEAP32[i18 >> 2] | 0) >>> 0) {
   break;
  }
  i11 = HEAP32[(HEAP32[i8 >> 2] | 0) + (i2 << 2) >> 2] | 0;
  i4 = HEAP32[i17 >> 2] | 0;
  if ((i4 | 0) == (HEAP32[i1 >> 2] | 0)) {
   __ZN3WTF6VectorINS_3RefIN7WebCore7ElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i4 + 1 | 0);
   HEAP32[(HEAP32[i6 >> 2] | 0) + (HEAP32[i17 >> 2] << 2) >> 2] = i11;
   i13 = i11 + 8 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
  } else {
   HEAP32[(HEAP32[i6 >> 2] | 0) + (i4 << 2) >> 2] = i11;
   i4 = i11 + 8 | 0;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
  }
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
  i2 = i2 + 1 | 0;
 }
 return;
}
function __ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore14HTMLCollectionEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E6rehashEiPS9_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 * 12 & -1) | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i8 = 0;
  i9 = i7 | 0;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i2 = i7 + (i10 * 12 & -1) | 0;
  i12 = i2 | 0;
  i13 = HEAP8[i12] | 0;
  if ((i13 << 24 >> 24 | 0) == (-1 | 0)) {
   i14 = i11;
  } else if ((i13 << 24 >> 24 | 0) == 0) {
   i15 = HEAP32[i7 + (i10 * 12 & -1) + 4 >> 2] | 0;
   if ((i15 | 0) == 0) {
    i14 = i11;
   } else {
    i16 = i15;
    i17 = 6;
   }
  } else {
   i16 = HEAP32[i7 + (i10 * 12 & -1) + 4 >> 2] | 0;
   i17 = 6;
  }
  if ((i17 | 0) == 6) {
   i17 = 0;
   i15 = HEAP32[i6 >> 2] | 0;
   i18 = HEAP32[i4 >> 2] | 0;
   i19 = i7 + (i10 * 12 & -1) + 4 | 0;
   i20 = (i13 & 255) + ((HEAP32[i16 + 16 >> 2] | 0) >>> 7) | 0;
   i21 = (i20 >>> 23) + ~i20 | 0;
   i22 = i21 << 12 ^ i21;
   i21 = i22 >>> 7 ^ i22;
   i22 = i21 << 2 ^ i21;
   i21 = i22 >>> 20 ^ i22 | 1;
   i22 = i20;
   i20 = 0;
   i23 = 0;
   L11 : while (1) {
    i24 = i22 & i18;
    i25 = i15 + (i24 * 12 & -1) | 0;
    i26 = HEAP8[i25 | 0] | 0;
    if ((i26 << 24 >> 24 | 0) == (-1 | 0)) {
     i27 = i25;
    } else if ((i26 << 24 >> 24 | 0) == 0) {
     if ((HEAP32[i15 + (i24 * 12 & -1) + 4 >> 2] | 0) == 0) {
      i17 = 9;
      break;
     } else {
      i17 = 10;
     }
    } else {
     i17 = 10;
    }
    do {
     if ((i17 | 0) == 10) {
      i17 = 0;
      if (i26 << 24 >> 24 != i13 << 24 >> 24) {
       i27 = i23;
       break;
      }
      if ((HEAP32[i15 + (i24 * 12 & -1) + 4 >> 2] | 0) == (i16 | 0)) {
       i28 = i25;
       break L11;
      } else {
       i27 = i23;
      }
     }
    } while (0);
    i26 = (i20 | 0) == 0 ? i21 : i20;
    i22 = i26 + i24 | 0;
    i20 = i26;
    i23 = i27;
   }
   if ((i17 | 0) == 9) {
    i17 = 0;
    i28 = (i23 | 0) != 0 ? i23 : i25;
   }
   i20 = i28 + 4 | 0;
   i22 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i21 = i22 | 0;
     i15 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i22);
      break;
     } else {
      HEAP32[i21 >> 2] = i15;
      break;
     }
    }
   } while (0);
   HEAP8[i28 | 0] = HEAP8[i12] | 0;
   i22 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = 0;
   HEAP32[i20 >> 2] = i22;
   HEAP32[i28 + 8 >> 2] = HEAP32[i7 + (i10 * 12 & -1) + 8 >> 2];
   i14 = (i2 | 0) == (i3 | 0) ? i28 : i11;
  }
  i22 = i10 + 1 | 0;
  if ((i22 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i22;
   i11 = i14;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i29 = 0;
 } else {
  i8 = i14;
  i9 = i7 | 0;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP8[i7 + (i29 * 12 & -1) | 0] | 0) != -1) {
    i1 = HEAP32[i7 + (i29 * 12 & -1) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    i11 = i1 | 0;
    i10 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i11 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i2 = i29 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i29 = i2;
  } else {
   i8 = i14;
   break;
  }
 }
 i9 = i7 | 0;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_6OwnPtrINS_6VectorIPN7WebCore7ElementELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS2_EENS_7HashMapIS2_SB_SG_NS_10HashTraitsIS2_EENSI_ISB_EEE18KeyValuePairTraitsESJ_E3addINS_17HashMapTranslatorISM_SG_EES2_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS2_SC_SE_SG_SM_SJ_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i7 = 8;
  } else {
   i8 = i6 << 1;
   i7 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i8 | 0) ? i6 : i8;
  }
  __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_6OwnPtrINS_6VectorIPN7WebCore7ElementELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS2_EENS_7HashMapIS2_SB_SG_NS_10HashTraitsIS2_EENSI_ISB_EEE18KeyValuePairTraitsESJ_E6rehashEiPSC_(i2, i7, 0) | 0;
  i9 = HEAP32[i4 >> 2] | 0;
 } else {
  i9 = i5;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i8 = i7;
 i6 = i8 + ~(i8 << 15) | 0;
 i8 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i8 >>> 6 ^ i8;
 i8 = i6 + ~(i6 << 11) | 0;
 i6 = i8 >>> 16 ^ i8;
 i8 = i6 & i5;
 i10 = i9 + (i8 << 3) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i10;
   i13 = i7;
  } else {
   i14 = (i6 >>> 23) + ~i6 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i8;
   i18 = i10;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i7 | 0)) {
     i20 = 8;
     break;
    }
    i21 = (i19 | 0) == -1 ? i18 : i16;
    i22 = (i15 | 0) == 0 ? i14 : i15;
    i23 = i22 + i17 & i5;
    i24 = i9 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i20 = 10;
     break;
    } else {
     i15 = i22;
     i16 = i21;
     i17 = i23;
     i18 = i24;
     i19 = i25;
    }
   }
   if ((i20 | 0) == 8) {
    i19 = i9 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i20 | 0) == 10) {
    if ((i21 | 0) == 0) {
     i12 = i24;
     i13 = i7;
     break;
    }
    i19 = i21;
    HEAP32[i19 >> 2] = 0;
    HEAP32[i19 + 4 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i12 = i21;
    i13 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i12 >> 2] = i13;
 i13 = i12 + 4 | 0;
 i3 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 if ((i3 | 0) != 0) {
  i13 = i3 + 8 | 0;
  if ((HEAP32[i13 >> 2] | 0) != 0) {
   HEAP32[i13 >> 2] = 0;
  }
  i13 = i3 | 0;
  i21 = HEAP32[i13 >> 2] | 0;
  if ((i21 | 0) != 0) {
   HEAP32[i13 >> 2] = 0;
   HEAP32[i3 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i21);
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i2 + 12 | 0;
 i21 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i21;
 i3 = i2 + 4 | 0;
 i13 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i21 << 1 | 0) < (i13 | 0)) {
  i26 = i12;
  i27 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i28 = 8;
  } else {
   i7 = i13 << 1;
   i28 = (i21 * 6 & -1 | 0) < (i7 | 0) ? i13 : i7;
  }
  i7 = __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_6OwnPtrINS_6VectorIPN7WebCore7ElementELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS2_EENS_7HashMapIS2_SB_SG_NS_10HashTraitsIS2_EENSI_ISB_EEE18KeyValuePairTraitsESJ_E6rehashEiPSC_(i2, i28, i12) | 0;
  i26 = i7;
  i27 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i4 >> 2] | 0) + (i27 << 3) | 0;
 i27 = i1;
 HEAP32[i27 >> 2] = i26;
 HEAP32[i27 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_6OwnPtrINS_6VectorIPN7WebCore7ElementELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS2_EENS_7HashMapIS2_SB_SG_NS_10HashTraitsIS2_EENSI_ISB_EEE18KeyValuePairTraitsESJ_E6rehashEiPSC_(i1, i2, i3) {
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
   i17 = HEAP32[i16 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i36 = i13;
   } else {
    i20 = i17 + 8 | 0;
    if ((HEAP32[i20 >> 2] | 0) != 0) {
     HEAP32[i20 >> 2] = 0;
    }
    i20 = i17 | 0;
    i19 = HEAP32[i20 >> 2] | 0;
    if ((i19 | 0) != 0) {
     HEAP32[i20 >> 2] = 0;
     HEAP32[i17 + 4 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i19);
    }
    __ZN3WTF8fastFreeEPv(i17);
    i36 = HEAP32[i12 >> 2] | 0;
   }
   HEAP32[i30 >> 2] = i36;
   i17 = i7 + (i10 << 3) + 4 | 0;
   i19 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i16 >> 2] = i19;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i19 = i10 + 1 | 0;
  if ((i19 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i19;
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
    i1 = HEAP32[i7 + (i37 << 3) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    i11 = i1 + 8 | 0;
    if ((HEAP32[i11 >> 2] | 0) != 0) {
     HEAP32[i11 >> 2] = 0;
    }
    i11 = i1 | 0;
    i10 = HEAP32[i11 >> 2] | 0;
    if ((i10 | 0) != 0) {
     HEAP32[i11 >> 2] = 0;
     HEAP32[i1 + 4 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i10);
    }
    __ZN3WTF8fastFreeEPv(i1);
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
function __ZNK7WebCore14HTMLCollection15traverseForwardERNS_7ElementEjRjRNS_13ContainerNodeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i6 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i6 & 8192 | 0) != 0) {
  i7 = i1;
  HEAP32[i4 >> 2] = 0;
  if ((i3 | 0) == 0) {
   i8 = i2;
   return i8 | 0;
  } else {
   i9 = i2;
  }
  while (1) {
   i10 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] & 7](i1, i9) | 0;
   if ((i10 | 0) == 0) {
    i8 = 0;
    i11 = 34;
    break;
   }
   i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
   HEAP32[i4 >> 2] = i12;
   if (i12 >>> 0 < i3 >>> 0) {
    i9 = i10;
   } else {
    i8 = i10;
    i11 = 31;
    break;
   }
  }
  if ((i11 | 0) == 31) {
   return i8 | 0;
  } else if ((i11 | 0) == 34) {
   return i8 | 0;
  }
 }
 HEAP32[i4 >> 2] = 0;
 i9 = (i3 | 0) == 0;
 if ((i6 & 64 | 0) != 0) {
  if (i9) {
   i8 = i2;
   return i8 | 0;
  } else {
   i13 = i2;
  }
  L16 : while (1) {
   i6 = i13 + 28 | 0;
   while (1) {
    i14 = HEAP32[i6 >> 2] | 0;
    if ((i14 | 0) == 0) {
     i8 = 0;
     i11 = 32;
     break L16;
    }
    if ((HEAP32[i14 + 12 >> 2] & 4 | 0) == 0) {
     i6 = i14 + 28 | 0;
    } else {
     break;
    }
   }
   i6 = i14;
   if (!(__ZN7WebCore17isMatchingElementERKNS_14HTMLCollectionERNS_7ElementE(i1, i6) | 0)) {
    i13 = i6;
    continue;
   }
   i7 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
   HEAP32[i4 >> 2] = i7;
   if (i7 >>> 0 < i3 >>> 0) {
    i13 = i6;
   } else {
    i8 = i6;
    i11 = 27;
    break;
   }
  }
  if ((i11 | 0) == 27) {
   return i8 | 0;
  } else if ((i11 | 0) == 32) {
   return i8 | 0;
  }
 }
 if (i9) {
  i8 = i2;
  return i8 | 0;
 }
 i9 = i5 | 0;
 i5 = i2;
 L30 : while (1) {
  i2 = HEAP32[i5 + 36 >> 2] | 0;
  do {
   if ((i2 | 0) == 0) {
    i13 = i5 | 0;
    if ((i13 | 0) == (i9 | 0)) {
     i8 = 0;
     i11 = 28;
     break L30;
    }
    i14 = HEAP32[i5 + 28 >> 2] | 0;
    if ((i14 | 0) != 0) {
     i15 = i14;
     break;
    }
    i14 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i13, i9) | 0;
    if ((i14 | 0) == 0) {
     i8 = 0;
     i11 = 29;
     break L30;
    } else {
     i15 = i14;
    }
   } else {
    i15 = i2;
   }
  } while (0);
  if ((HEAP32[i15 + 12 >> 2] & 4 | 0) == 0) {
   i2 = i15;
   while (1) {
    if ((i2 | 0) == (i9 | 0)) {
     i8 = 0;
     i11 = 35;
     break L30;
    }
    i14 = HEAP32[i2 + 28 >> 2] | 0;
    if ((i14 | 0) == 0) {
     i13 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i2, i9) | 0;
     if ((i13 | 0) == 0) {
      i8 = 0;
      i11 = 36;
      break L30;
     } else {
      i16 = i13;
     }
    } else {
     i16 = i14;
    }
    if ((HEAP32[i16 + 12 >> 2] & 4 | 0) == 0) {
     i2 = i16;
    } else {
     i17 = i16;
     break;
    }
   }
  } else {
   i17 = i15;
  }
  i2 = i17;
  if (!(__ZN7WebCore17isMatchingElementERKNS_14HTMLCollectionERNS_7ElementE(i1, i2) | 0)) {
   i5 = i2;
   continue;
  }
  if ((i17 | 0) == 0) {
   i8 = 0;
   i11 = 37;
   break;
  }
  i14 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
  HEAP32[i4 >> 2] = i14;
  if (i14 >>> 0 < i3 >>> 0) {
   i5 = i2;
  } else {
   i8 = i2;
   i11 = 38;
   break;
  }
 }
 if ((i11 | 0) == 28) {
  return i8 | 0;
 } else if ((i11 | 0) == 29) {
  return i8 | 0;
 } else if ((i11 | 0) == 35) {
  return i8 | 0;
 } else if ((i11 | 0) == 36) {
  return i8 | 0;
 } else if ((i11 | 0) == 37) {
  return i8 | 0;
 } else if ((i11 | 0) == 38) {
  return i8 | 0;
 }
 return 0;
}
function __ZNK7WebCore14HTMLCollection14collectionLastEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i2 = i1 + 32 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 12 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i3 & 3 | 0) == 1) {
   if ((HEAP32[i5 + 12 >> 2] & 256 | 0) == 0) {
    i6 = i5;
    break;
   }
   i6 = HEAP32[(HEAP32[i5 + 20 >> 2] | 0) + 8 >> 2] | 0;
  } else {
   i6 = i5;
  }
 } while (0);
 L5 : do {
  if ((i3 & 64 | 0) == 0) {
   i5 = __ZN7WebCore13NodeTraversal4lastEPKNS_13ContainerNodeE(i6) | 0;
   if ((i5 | 0) == 0) {
    i7 = 0;
    break;
   } else {
    i8 = i5;
   }
   while (1) {
    if ((HEAP32[i8 + 12 >> 2] & 4 | 0) != 0) {
     i7 = i8;
     break L5;
    }
    i5 = HEAP32[i8 + 24 >> 2] | 0;
    if ((i5 | 0) == 0) {
     i9 = HEAP32[i8 + 16 >> 2] | 0;
     i10 = (i9 | 0) == (i6 | 0) ? 0 : i9 | 0;
    } else {
     i10 = __ZN7WebCore13NodeTraversal13deepLastChildEPNS_4NodeE(i5) | 0;
    }
    if ((i10 | 0) == 0) {
     i7 = 0;
     break;
    } else {
     i8 = i10;
    }
   }
  } else {
   i5 = i6 + 40 | 0;
   while (1) {
    i9 = HEAP32[i5 >> 2] | 0;
    if ((i9 | 0) == 0) {
     i7 = 0;
     break L5;
    }
    if ((HEAP32[i9 + 12 >> 2] & 4 | 0) == 0) {
     i5 = i9 + 24 | 0;
    } else {
     i7 = i9;
     break;
    }
   }
  }
 } while (0);
 i6 = HEAP32[i2 >> 2] | 0;
 i2 = (i6 & 64 | 0) == 0;
 i10 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 & 3 | 0) == 1) {
   if ((HEAP32[i10 + 12 >> 2] & 256 | 0) == 0) {
    i11 = i10;
    break;
   }
   i11 = HEAP32[(HEAP32[i10 + 20 >> 2] | 0) + 8 >> 2] | 0;
  } else {
   i11 = i10;
  }
 } while (0);
 i10 = i7;
 if ((i7 | 0) == 0) {
  i12 = 0;
  return i12 | 0;
 }
 if (i2) {
  i13 = i7;
  i14 = i10;
 } else {
  i2 = i7;
  i7 = i10;
  L27 : while (1) {
   if (__ZN7WebCore17isMatchingElementERKNS_14HTMLCollectionERNS_7ElementE(i1, i7) | 0) {
    i12 = i7;
    i15 = 39;
    break;
   } else {
    i16 = i2;
   }
   while (1) {
    i16 = HEAP32[i16 + 24 >> 2] | 0;
    if ((i16 | 0) == 0) {
     i12 = 0;
     i15 = 40;
     break L27;
    }
    if ((HEAP32[i16 + 12 >> 2] & 4 | 0) != 0) {
     break;
    }
   }
   i2 = i16;
   i7 = i16;
  }
  if ((i15 | 0) == 39) {
   return i12 | 0;
  } else if ((i15 | 0) == 40) {
   return i12 | 0;
  }
 }
 L36 : while (1) {
  if (__ZN7WebCore17isMatchingElementERKNS_14HTMLCollectionERNS_7ElementE(i1, i14) | 0) {
   i12 = i14;
   i15 = 36;
   break;
  }
  i16 = HEAP32[i13 + 24 >> 2] | 0;
  if ((i16 | 0) == 0) {
   i7 = HEAP32[i13 + 16 >> 2] | 0;
   i17 = (i7 | 0) == (i11 | 0) ? 0 : i7 | 0;
  } else {
   i17 = __ZN7WebCore13NodeTraversal13deepLastChildEPNS_4NodeE(i16) | 0;
  }
  if ((i17 | 0) == 0) {
   i12 = 0;
   i15 = 35;
   break;
  } else {
   i18 = i17;
  }
  while (1) {
   if ((HEAP32[i18 + 12 >> 2] & 4 | 0) != 0) {
    break;
   }
   i16 = HEAP32[i18 + 24 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i7 = HEAP32[i18 + 16 >> 2] | 0;
    i19 = (i7 | 0) == (i11 | 0) ? 0 : i7 | 0;
   } else {
    i19 = __ZN7WebCore13NodeTraversal13deepLastChildEPNS_4NodeE(i16) | 0;
   }
   if ((i19 | 0) == 0) {
    i12 = 0;
    i15 = 38;
    break L36;
   } else {
    i18 = i19;
   }
  }
  i13 = i18;
  i14 = i18;
 }
 if ((i15 | 0) == 35) {
  return i12 | 0;
 } else if ((i15 | 0) == 36) {
  return i12 | 0;
 } else if ((i15 | 0) == 38) {
  return i12 | 0;
 }
 return 0;
}
function __ZNK7WebCore14HTMLCollection12firstElementERNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i3 & 8192 | 0) != 0) {
  i4 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 7](i1, 0) | 0;
  return i4 | 0;
 }
 i5 = i2 + 36 | 0;
 if ((i3 & 64 | 0) == 0) {
  i6 = i5;
 } else {
  i3 = i5;
  while (1) {
   i7 = HEAP32[i3 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i4 = 0;
    i8 = 25;
    break;
   }
   if ((HEAP32[i7 + 12 >> 2] & 4 | 0) == 0) {
    i3 = i7 + 28 | 0;
   } else {
    break;
   }
  }
  if ((i8 | 0) == 25) {
   return i4 | 0;
  }
  i3 = i7;
  if (__ZN7WebCore17isMatchingElementERKNS_14HTMLCollectionERNS_7ElementE(i1, i3) | 0) {
   i4 = i3;
   return i4 | 0;
  } else {
   i9 = i7;
  }
  while (1) {
   i7 = HEAP32[i9 + 28 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i4 = 0;
    i8 = 26;
    break;
   }
   if ((HEAP32[i7 + 12 >> 2] & 4 | 0) == 0) {
    i9 = i7;
    continue;
   }
   i3 = i7;
   if (__ZN7WebCore17isMatchingElementERKNS_14HTMLCollectionERNS_7ElementE(i1, i3) | 0) {
    i4 = i3;
    i8 = 35;
    break;
   } else {
    i9 = i7;
   }
  }
  if ((i8 | 0) == 26) {
   return i4 | 0;
  } else if ((i8 | 0) == 35) {
   return i4 | 0;
  }
 }
 while (1) {
  i10 = HEAP32[i6 >> 2] | 0;
  if ((i10 | 0) == 0) {
   i4 = 0;
   i8 = 31;
   break;
  }
  if ((HEAP32[i10 + 12 >> 2] & 4 | 0) == 0) {
   i6 = i10 + 28 | 0;
  } else {
   break;
  }
 }
 if ((i8 | 0) == 31) {
  return i4 | 0;
 }
 i6 = i2 | 0;
 i2 = i10;
 if (__ZN7WebCore17isMatchingElementERKNS_14HTMLCollectionERNS_7ElementE(i1, i2) | 0) {
  i4 = i2;
  return i4 | 0;
 } else {
  i11 = i10;
 }
 L29 : while (1) {
  i10 = HEAP32[i11 + 36 >> 2] | 0;
  do {
   if ((i10 | 0) == 0) {
    if ((i11 | 0) == (i6 | 0)) {
     i4 = 0;
     i8 = 33;
     break L29;
    }
    i2 = HEAP32[i11 + 28 >> 2] | 0;
    if ((i2 | 0) != 0) {
     i12 = i2;
     break;
    }
    i2 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i11, i6) | 0;
    if ((i2 | 0) == 0) {
     i4 = 0;
     i8 = 34;
     break L29;
    } else {
     i12 = i2;
    }
   } else {
    i12 = i10;
   }
  } while (0);
  if ((HEAP32[i12 + 12 >> 2] & 4 | 0) == 0) {
   i10 = i12;
   while (1) {
    if ((i10 | 0) == (i6 | 0)) {
     i4 = 0;
     i8 = 28;
     break L29;
    }
    i2 = HEAP32[i10 + 28 >> 2] | 0;
    if ((i2 | 0) == 0) {
     i9 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i10, i6) | 0;
     if ((i9 | 0) == 0) {
      i4 = 0;
      i8 = 29;
      break L29;
     } else {
      i13 = i9;
     }
    } else {
     i13 = i2;
    }
    if ((HEAP32[i13 + 12 >> 2] & 4 | 0) == 0) {
     i10 = i13;
    } else {
     i14 = i13;
     break;
    }
   }
  } else {
   i14 = i12;
  }
  i10 = i14;
  if (__ZN7WebCore17isMatchingElementERKNS_14HTMLCollectionERNS_7ElementE(i1, i10) | 0) {
   i4 = i10;
   i8 = 27;
   break;
  } else {
   i11 = i14;
  }
 }
 if ((i8 | 0) == 27) {
  return i4 | 0;
 } else if ((i8 | 0) == 28) {
  return i4 | 0;
 } else if ((i8 | 0) == 29) {
  return i4 | 0;
 } else if ((i8 | 0) == 33) {
  return i4 | 0;
 } else if ((i8 | 0) == 34) {
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore17NodeListsNodeData22removeCachedCollectionEPNS_14HTMLCollectionERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = i1 + 80 | 0;
 if (((HEAP32[i1 + 20 >> 2] | 0) + ((HEAP32[i1 >> 2] | 0) != 0) + ((HEAP32[i1 + 4 >> 2] | 0) != 0) + (HEAP32[i1 + 40 >> 2] | 0) + (HEAP32[i1 + 60 >> 2] | 0) + (HEAP32[i4 >> 2] | 0) | 0) == 1) {
  __ZN7WebCore4Node14clearNodeListsEv(HEAP32[i2 + 12 >> 2] | 0);
  return;
 }
 i5 = i1 + 68 | 0;
 i6 = (HEAP32[i2 + 32 >> 2] | 0) >>> 8 & 31;
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = (i2 | 0) == 0;
 if (!i3) {
  i7 = i2 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = HEAP32[i1 + 72 >> 2] | 0;
  i9 = i8 * 12 & -1 | 0;
  i10 = 0;
  i11 = i8;
 } else {
  i8 = HEAP32[i1 + 76 >> 2] | 0;
  i12 = ((HEAP32[i2 + 16 >> 2] | 0) >>> 7) + (i6 & 255) | 0;
  i13 = (i12 >>> 23) + ~i12 | 0;
  i14 = i13 << 12 ^ i13;
  i13 = i14 >>> 7 ^ i14;
  i14 = i13 << 2 ^ i13;
  i13 = i14 >>> 20 ^ i14 | 1;
  i14 = i12;
  i12 = 0;
  L11 : while (1) {
   i15 = i14 & i8;
   i16 = i7 + (i15 * 12 & -1) | 0;
   i17 = HEAP8[i16 | 0] | 0;
   if ((i17 << 24 >> 24 | 0) == 0) {
    if ((HEAP32[i7 + (i15 * 12 & -1) + 4 >> 2] | 0) == 0) {
     i18 = 0;
     break;
    } else {
     i19 = 10;
    }
   } else if ((i17 << 24 >> 24 | 0) != (-1 | 0)) {
    i19 = 10;
   }
   do {
    if ((i19 | 0) == 10) {
     i19 = 0;
     if (i17 << 24 >> 24 != i6 << 24 >> 24) {
      break;
     }
     if ((HEAP32[i7 + (i15 * 12 & -1) + 4 >> 2] | 0) == (i2 | 0)) {
      i18 = i16;
      break L11;
     }
    }
   } while (0);
   i16 = (i12 | 0) == 0 ? i13 : i12;
   i14 = i16 + i15 | 0;
   i12 = i16;
  }
  i12 = HEAP32[i1 + 72 >> 2] | 0;
  i9 = (i18 | 0) == 0 ? i7 + (i12 * 12 & -1) | 0 : i18;
  i10 = i7;
  i11 = i12;
 }
 i12 = i5 | 0;
 i5 = i1 + 72 | 0;
 do {
  if ((i9 | 0) != (i10 + (i11 * 12 & -1) | 0)) {
   i7 = HEAP32[i9 + 4 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i18 = i7 | 0;
     i14 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i18 >> 2] = i14;
      break;
     }
    }
   } while (0);
   HEAP8[i9 | 0] = -1;
   i7 = i1 + 84 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   i7 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i7;
   i15 = HEAP32[i5 >> 2] | 0;
   if (!((i7 * 6 & -1 | 0) < (i15 | 0) & (i15 | 0) > 8)) {
    break;
   }
   __ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore14HTMLCollectionEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E6rehashEiPS9_(i12, (i15 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 if (i3) {
  return;
 }
 i3 = i2 | 0;
 i12 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i12 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i3 >> 2] = i12;
  return;
 }
}
function __ZN7WebCore14HTMLCollection6appendERN3WTF7HashMapIPNS1_16AtomicStringImplENS1_6OwnPtrINS1_6VectorIPNS_7ElementELj0ENS1_15CrashOnOverflowEEEEENS1_7PtrHashIS4_EENS1_10HashTraitsIS4_EENSE_ISB_EEEERKNS1_12AtomicStringES8_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 HEAP32[i5 >> 2] = i3;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i7 >> 2] = 0;
 __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_6OwnPtrINS_6VectorIPN7WebCore7ElementELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS2_EENS_7HashMapIS2_SB_SG_NS_10HashTraitsIS2_EENSI_ISB_EEE18KeyValuePairTraitsESJ_E3addINS_17HashMapTranslatorISM_SG_EES2_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS2_SC_SE_SG_SM_SJ_EEEEOT0_OT1_(i8, i1 | 0, i6, i7);
 i7 = (HEAP32[i8 >> 2] | 0) + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i6 = __ZN3WTF10fastMallocEj(12) | 0;
   i1 = i6;
   HEAP32[i6 >> 2] = 0;
   HEAP32[i6 + 4 >> 2] = 0;
   HEAP32[i6 + 8 >> 2] = 0;
   i6 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i1;
   if ((i6 | 0) == 0) {
    i9 = i1;
    break;
   }
   i1 = i6 + 8 | 0;
   if ((HEAP32[i1 >> 2] | 0) != 0) {
    HEAP32[i1 >> 2] = 0;
   }
   i1 = i6 | 0;
   i2 = HEAP32[i1 >> 2] | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i1 >> 2] = 0;
    HEAP32[i6 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i2);
   }
   __ZN3WTF8fastFreeEPv(i6);
   i9 = HEAP32[i7 >> 2] | 0;
  } else {
   i9 = i8;
  }
 } while (0);
 i8 = i9 + 8 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 if ((i7 | 0) != (HEAP32[i9 + 4 >> 2] | 0)) {
  HEAP32[(HEAP32[i9 >> 2] | 0) + (i7 << 2) >> 2] = HEAP32[i5 >> 2];
  i10 = HEAP32[i8 >> 2] | 0;
  i11 = i10 + 1 | 0;
  HEAP32[i8 >> 2] = i11;
  STACKTOP = i4;
  return;
 }
 i6 = i7 + 1 | 0;
 i2 = i9 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 do {
  if (i1 >>> 0 > i5 >>> 0) {
   i12 = 12;
  } else {
   if ((i1 + (i7 << 2) | 0) >>> 0 <= i5 >>> 0) {
    i12 = 12;
    break;
   }
   __ZN3WTF6VectorIPN7WebCore7ElementELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i9, i6);
   i3 = HEAP32[i2 >> 2] | 0;
   i13 = i3 + (i5 - i1 >> 2 << 2) | 0;
   i14 = i3;
  }
 } while (0);
 if ((i12 | 0) == 12) {
  __ZN3WTF6VectorIPN7WebCore7ElementELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i9, i6);
  i13 = i5;
  i14 = HEAP32[i2 >> 2] | 0;
 }
 HEAP32[i14 + (HEAP32[i8 >> 2] << 2) >> 2] = HEAP32[i13 >> 2];
 i10 = HEAP32[i8 >> 2] | 0;
 i11 = i10 + 1 | 0;
 HEAP32[i8 >> 2] = i11;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14HTMLCollectionD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 12 | 0;
 __ZN7WebCore8Document20unregisterCollectionERNS_14HTMLCollectionE(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0, i1);
 if ((((HEAP32[i1 + 32 >> 2] | 0) >>> 8 & 31) - 8 | 0) >>> 0 >= 2 >>> 0) {
  __ZN7WebCore17NodeListsNodeData22removeCachedCollectionEPNS_14HTMLCollectionERKN3WTF12AtomicStringE(__ZN7WebCore4Node9nodeListsEv(HEAP32[i2 >> 2] | 0) | 0, i1, __ZN3WTF8starAtomE);
 }
 i3 = HEAP32[i1 + 56 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 60 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i3 + (i5 << 3) >> 2] | 0) != -1) {
      i6 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      i7 = i6 + 8 | 0;
      if ((HEAP32[i7 >> 2] | 0) != 0) {
       HEAP32[i7 >> 2] = 0;
      }
      i7 = i6 | 0;
      i8 = HEAP32[i7 >> 2] | 0;
      if ((i8 | 0) != 0) {
       HEAP32[i7 >> 2] = 0;
       HEAP32[i6 + 4 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i8);
      }
      __ZN3WTF8fastFreeEPv(i6);
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 40 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i3 + (i5 << 3) >> 2] | 0) != -1) {
      i6 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      i8 = i6 + 8 | 0;
      if ((HEAP32[i8 >> 2] | 0) != 0) {
       HEAP32[i8 >> 2] = 0;
      }
      i8 = i6 | 0;
      i7 = HEAP32[i8 >> 2] | 0;
      if ((i7 | 0) != 0) {
       HEAP32[i8 >> 2] = 0;
       HEAP32[i6 + 4 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i7);
      }
      __ZN3WTF8fastFreeEPv(i6);
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = (HEAP32[i2 >> 2] | 0) + 8 | 0;
 i2 = i3 - 8 | 0;
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i5 | 0) < 1) {
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2);
  }
 } while (0);
 i2 = i1 + 4 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 return;
}
function __ZN7WebCore14HTMLCollectionD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 12 | 0;
 __ZN7WebCore8Document20unregisterCollectionERNS_14HTMLCollectionE(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0, i1);
 if ((((HEAP32[i1 + 32 >> 2] | 0) >>> 8 & 31) - 8 | 0) >>> 0 >= 2 >>> 0) {
  __ZN7WebCore17NodeListsNodeData22removeCachedCollectionEPNS_14HTMLCollectionERKN3WTF12AtomicStringE(__ZN7WebCore4Node9nodeListsEv(HEAP32[i2 >> 2] | 0) | 0, i1, __ZN3WTF8starAtomE);
 }
 i3 = HEAP32[i1 + 56 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 60 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i3 + (i5 << 3) >> 2] | 0) != -1) {
      i6 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      i7 = i6 + 8 | 0;
      if ((HEAP32[i7 >> 2] | 0) != 0) {
       HEAP32[i7 >> 2] = 0;
      }
      i7 = i6 | 0;
      i8 = HEAP32[i7 >> 2] | 0;
      if ((i8 | 0) != 0) {
       HEAP32[i7 >> 2] = 0;
       HEAP32[i6 + 4 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i8);
      }
      __ZN3WTF8fastFreeEPv(i6);
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 40 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i3 + (i5 << 3) >> 2] | 0) != -1) {
      i6 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      i8 = i6 + 8 | 0;
      if ((HEAP32[i8 >> 2] | 0) != 0) {
       HEAP32[i8 >> 2] = 0;
      }
      i8 = i6 | 0;
      i7 = HEAP32[i8 >> 2] | 0;
      if ((i7 | 0) != 0) {
       HEAP32[i8 >> 2] = 0;
       HEAP32[i6 + 4 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i7);
      }
      __ZN3WTF8fastFreeEPv(i6);
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = (HEAP32[i2 >> 2] | 0) + 8 | 0;
 i2 = i3 - 8 | 0;
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i5 | 0) < 1) {
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2);
  }
 } while (0);
 i2 = i1 + 4 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 return;
}
function __ZN7WebCore20CollectionIndexCacheINS_14HTMLCollectionENS_7ElementEE6nodeAtERKS1_j(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = (HEAP8[i1 + 12 | 0] & 1) == 0;
 do {
  if (!i4) {
   if ((HEAP32[i1 + 8 >> 2] | 0) >>> 0 > i3 >>> 0) {
    break;
   } else {
    i5 = 0;
   }
   return i5 | 0;
  }
 } while (0);
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  if (i8 >>> 0 < i3 >>> 0) {
   i5 = __ZN7WebCore20CollectionIndexCacheINS_14HTMLCollectionENS_7ElementEE15nodeAfterCachedERKS1_j(i1, i2, i3) | 0;
   return i5 | 0;
  }
  if (i8 >>> 0 <= i3 >>> 0) {
   i5 = i7;
   return i5 | 0;
  }
  i5 = __ZN7WebCore20CollectionIndexCacheINS_14HTMLCollectionENS_7ElementEE16nodeBeforeCachedERKS1_j(i1, i2, i3) | 0;
  return i5 | 0;
 }
 do {
  if (!i4) {
   i7 = i1 + 8 | 0;
   if (((HEAP32[i7 >> 2] | 0) - i3 | 0) >>> 0 >= i3 >>> 0) {
    break;
   }
   if ((HEAP32[i2 + 32 >> 2] & 8192 | 0) != 0) {
    break;
   }
   i8 = __ZNK7WebCore14HTMLCollection14collectionLastEv(i2) | 0;
   HEAP32[i6 >> 2] = i8;
   i9 = HEAP32[i7 >> 2] | 0;
   if ((i9 - 1 | 0) >>> 0 > i3 >>> 0) {
    i7 = __ZNK7WebCore14HTMLCollection26collectionTraverseBackwardERNS_7ElementEj(i2, i8, i9 + ~i3 | 0) | 0;
    HEAP32[i6 >> 2] = i7;
    i10 = i7;
   } else {
    i10 = i8;
   }
   HEAP32[i1 + 4 >> 2] = i3;
   i5 = i10;
   return i5 | 0;
  }
 } while (0);
 i10 = i2 + 32 | 0;
 i4 = i2 + 12 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 do {
  if ((HEAP32[i10 >> 2] & 3 | 0) == 1) {
   if ((HEAP32[i8 + 12 >> 2] & 256 | 0) == 0) {
    i11 = i8;
    break;
   }
   i11 = HEAP32[(HEAP32[i8 + 20 >> 2] | 0) + 8 >> 2] | 0;
  } else {
   i11 = i8;
  }
 } while (0);
 i8 = __ZNK7WebCore14HTMLCollection12firstElementERNS_13ContainerNodeE(i2, i11) | 0;
 HEAP32[i6 >> 2] = i8;
 i11 = i1 + 4 | 0;
 HEAP32[i11 >> 2] = 0;
 if ((i3 | 0) == 0) {
  i5 = i8;
  return i5 | 0;
 }
 if ((i8 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i1 = HEAP32[i4 >> 2] | 0;
 do {
  if ((HEAP32[i10 >> 2] & 3 | 0) == 1) {
   if ((HEAP32[i1 + 12 >> 2] & 256 | 0) == 0) {
    i12 = i1;
    break;
   }
   i12 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
  } else {
   i12 = i1;
  }
 } while (0);
 i1 = __ZNK7WebCore14HTMLCollection15traverseForwardERNS_7ElementEjRjRNS_13ContainerNodeE(i2, i8, i3, i11, i12) | 0;
 HEAP32[i6 >> 2] = i1;
 i5 = i1;
 return i5 | 0;
}
function __ZN7WebCore20CollectionIndexCacheINS_14HTMLCollectionENS_7ElementEE15nodeAfterCachedERKS1_j(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 12 | 0;
 do {
  if ((HEAP8[i6] & 1) == 0) {
   i7 = HEAP32[i1 + 4 >> 2] | 0;
  } else {
   i8 = i1 + 8 | 0;
   i9 = i1 + 4 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if (((HEAP32[i8 >> 2] | 0) - i3 | 0) >>> 0 >= (i3 - i10 | 0) >>> 0) {
    i7 = i10;
    break;
   }
   if ((HEAP32[i2 + 32 >> 2] & 8192 | 0) != 0) {
    i7 = i10;
    break;
   }
   i10 = __ZNK7WebCore14HTMLCollection14collectionLastEv(i2) | 0;
   i11 = i1 | 0;
   HEAP32[i11 >> 2] = i10;
   i12 = HEAP32[i8 >> 2] | 0;
   if ((i12 - 1 | 0) >>> 0 > i3 >>> 0) {
    i8 = __ZNK7WebCore14HTMLCollection26collectionTraverseBackwardERNS_7ElementEj(i2, i10, i12 + ~i3 | 0) | 0;
    HEAP32[i11 >> 2] = i8;
    i13 = i8;
   } else {
    i13 = i10;
   }
   HEAP32[i9 >> 2] = i3;
   i14 = i13;
   STACKTOP = i4;
   return i14 | 0;
  }
 } while (0);
 i13 = i1 | 0;
 i9 = HEAP32[i13 >> 2] | 0;
 i10 = i1 + 4 | 0;
 i8 = i3 - i7 | 0;
 i7 = HEAP32[i2 + 12 >> 2] | 0;
 do {
  if ((HEAP32[i2 + 32 >> 2] & 3 | 0) == 1) {
   if ((HEAP32[i7 + 12 >> 2] & 256 | 0) == 0) {
    i15 = i7;
    break;
   }
   i15 = HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 8 >> 2] | 0;
  } else {
   i15 = i7;
  }
 } while (0);
 i7 = __ZNK7WebCore14HTMLCollection15traverseForwardERNS_7ElementEjRjRNS_13ContainerNodeE(i2, i9, i8, i5, i15) | 0;
 HEAP32[i13 >> 2] = i7;
 i13 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i10 >> 2] | 0) | 0;
 HEAP32[i10 >> 2] = i13;
 if ((i7 | 0) != 0) {
  i14 = i7;
  STACKTOP = i4;
  return i14 | 0;
 }
 if ((HEAP8[i6] & 1) != 0) {
  i14 = 0;
  STACKTOP = i4;
  return i14 | 0;
 }
 HEAP32[i1 + 8 >> 2] = i13 + 1;
 HEAP8[i6] = 1;
 i14 = 0;
 STACKTOP = i4;
 return i14 | 0;
}
function __ZN7WebCore14HTMLCollection6createERNS_13ContainerNodeENS_14CollectionTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = __ZN3WTF10fastMallocEj(76) | 0;
 i5 = i4;
 HEAP32[i4 + 4 >> 2] = 0;
 HEAP32[i4 + 8 >> 2] = 1;
 HEAP32[i4 >> 2] = H_BASE + 16;
 i6 = i4 + 12 | 0;
 HEAP32[i6 >> 2] = i2;
 i7 = i2 + 8 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 _memset(i4 + 16 | 0, 0, 13) | 0;
 switch (i3 | 0) {
 case 10:
 case 11:
 case 12:
 case 13:
 case 14:
 case 15:
 case 16:
 case 17:
 case 18:
  {
   i8 = 0;
   break;
  }
 case 0:
 case 1:
 case 2:
 case 3:
 case 4:
 case 5:
 case 6:
 case 7:
 case 8:
 case 9:
 case 19:
  {
   i8 = 1;
   break;
  }
 default:
  {
   i8 = 0;
  }
 }
 i7 = i4 + 32 | 0;
 i2 = HEAP32[i7 >> 2] & -4 | i8;
 HEAP32[i7 >> 2] = i2;
 switch (i3 | 0) {
 case 17:
 case 16:
 case 1:
  {
   i9 = 28;
   i10 = 11;
   break;
  }
 case 4:
  {
   i11 = 24;
   i10 = 10;
   break;
  }
 case 8:
  {
   i11 = 8;
   i10 = 10;
   break;
  }
 case 9:
  {
   i11 = 8;
   i10 = 10;
   break;
  }
 case 19:
  {
   i11 = 20;
   i10 = 10;
   break;
  }
 case 5:
  {
   i11 = 12;
   i10 = 10;
   break;
  }
 default:
  {
   i9 = 0;
   i10 = 11;
  }
 }
 do {
  if ((i10 | 0) == 10) {
   i8 = i11 | i2 & -63;
   HEAP32[i7 >> 2] = i8;
   i12 = 0;
   i13 = i8;
  } else if ((i10 | 0) == 11) {
   i8 = i9 | i2 & -63;
   HEAP32[i7 >> 2] = i8;
   if (!((i3 | 0) == 11 | (i3 | 0) == 12 | (i3 | 0) == 14 | (i3 | 0) == 10)) {
    i12 = 0;
    i13 = i8;
    break;
   }
   i12 = 64;
   i13 = i8;
  }
 } while (0);
 HEAP32[i7 >> 2] = i12 | i3 << 8 & 7936 | i13 & -32705;
 _memset(i4 + 36 | 0, 0, 40) | 0;
 __ZN7WebCore8Document18registerCollectionERNS_14HTMLCollectionE(HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0, i5);
 HEAP32[i1 >> 2] = i5;
 return;
}
function __ZN7WebCore14HTMLCollectionC2ERNS_13ContainerNodeENS_14CollectionTypeENS0_20ElementTraversalTypeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i5 = i1 + 12 | 0;
 HEAP32[i5 >> 2] = i2;
 i6 = i2 + 8 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 _memset(i1 + 16 | 0, 0, 13) | 0;
 switch (i3 | 0) {
 case 10:
 case 11:
 case 12:
 case 13:
 case 14:
 case 15:
 case 16:
 case 17:
 case 18:
  {
   i7 = 0;
   break;
  }
 case 0:
 case 1:
 case 2:
 case 3:
 case 4:
 case 5:
 case 6:
 case 7:
 case 8:
 case 9:
 case 19:
  {
   i7 = 1;
   break;
  }
 default:
  {
   i7 = 0;
  }
 }
 i6 = i1 + 32 | 0;
 i2 = HEAP32[i6 >> 2] & -4 | i7;
 HEAP32[i6 >> 2] = i2;
 switch (i3 | 0) {
 case 17:
 case 16:
 case 1:
  {
   i8 = 28;
   i9 = 11;
   break;
  }
 case 4:
  {
   i10 = 24;
   i9 = 10;
   break;
  }
 case 8:
  {
   i10 = 8;
   i9 = 10;
   break;
  }
 case 9:
  {
   i10 = 8;
   i9 = 10;
   break;
  }
 case 19:
  {
   i10 = 20;
   i9 = 10;
   break;
  }
 case 5:
  {
   i10 = 12;
   i9 = 10;
   break;
  }
 default:
  {
   i8 = 0;
   i9 = 11;
  }
 }
 do {
  if ((i9 | 0) == 10) {
   i7 = i2 & -63 | i10;
   HEAP32[i6 >> 2] = i7;
   i11 = 0;
   i12 = i7;
  } else if ((i9 | 0) == 11) {
   i7 = i2 & -63 | i8;
   HEAP32[i6 >> 2] = i7;
   if (!((i3 | 0) == 11 | (i3 | 0) == 12 | (i3 | 0) == 14 | (i3 | 0) == 10)) {
    i11 = 0;
    i12 = i7;
    break;
   }
   i11 = 64;
   i12 = i7;
  }
 } while (0);
 HEAP32[i6 >> 2] = ((i4 | 0) == 1) << 13 | i3 << 8 & 7936 | i11 | i12 & -32705;
 _memset(i1 + 36 | 0, 0, 40) | 0;
 __ZN7WebCore8Document18registerCollectionERNS_14HTMLCollectionE(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0, i1);
 return;
}
function __ZN7WebCore14HTMLCollectionC1ERNS_13ContainerNodeENS_14CollectionTypeENS0_20ElementTraversalTypeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i5 = i1 + 12 | 0;
 HEAP32[i5 >> 2] = i2;
 i6 = i2 + 8 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 _memset(i1 + 16 | 0, 0, 13) | 0;
 switch (i3 | 0) {
 case 10:
 case 11:
 case 12:
 case 13:
 case 14:
 case 15:
 case 16:
 case 17:
 case 18:
  {
   i7 = 0;
   break;
  }
 case 0:
 case 1:
 case 2:
 case 3:
 case 4:
 case 5:
 case 6:
 case 7:
 case 8:
 case 9:
 case 19:
  {
   i7 = 1;
   break;
  }
 default:
  {
   i7 = 0;
  }
 }
 i6 = i1 + 32 | 0;
 i2 = HEAP32[i6 >> 2] & -4 | i7;
 HEAP32[i6 >> 2] = i2;
 switch (i3 | 0) {
 case 17:
 case 16:
 case 1:
  {
   i8 = 28;
   i9 = 11;
   break;
  }
 case 4:
  {
   i10 = 24;
   i9 = 10;
   break;
  }
 case 8:
  {
   i10 = 8;
   i9 = 10;
   break;
  }
 case 9:
  {
   i10 = 8;
   i9 = 10;
   break;
  }
 case 19:
  {
   i10 = 20;
   i9 = 10;
   break;
  }
 case 5:
  {
   i10 = 12;
   i9 = 10;
   break;
  }
 default:
  {
   i8 = 0;
   i9 = 11;
  }
 }
 do {
  if ((i9 | 0) == 10) {
   i7 = i2 & -63 | i10;
   HEAP32[i6 >> 2] = i7;
   i11 = 0;
   i12 = i7;
  } else if ((i9 | 0) == 11) {
   i7 = i2 & -63 | i8;
   HEAP32[i6 >> 2] = i7;
   if (!((i3 | 0) == 11 | (i3 | 0) == 12 | (i3 | 0) == 14 | (i3 | 0) == 10)) {
    i11 = 0;
    i12 = i7;
    break;
   }
   i11 = 64;
   i12 = i7;
  }
 } while (0);
 HEAP32[i6 >> 2] = ((i4 | 0) == 1) << 13 | i3 << 8 & 7936 | i11 | i12 & -32705;
 _memset(i1 + 36 | 0, 0, 40) | 0;
 __ZN7WebCore8Document18registerCollectionERNS_14HTMLCollectionE(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0, i1);
 return;
}
function __ZNK7WebCore14HTMLCollection15invalidateCacheEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 HEAP8[i1 + 28 | 0] = 0;
 i2 = i1 + 32 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -16513;
 i2 = i1 + 36 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 40 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i3 + (i5 << 3) >> 2] | 0) != -1) {
      i6 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      i7 = i6 + 8 | 0;
      if ((HEAP32[i7 >> 2] | 0) != 0) {
       HEAP32[i7 >> 2] = 0;
      }
      i7 = i6 | 0;
      i8 = HEAP32[i7 >> 2] | 0;
      if ((i8 | 0) != 0) {
       HEAP32[i7 >> 2] = 0;
       HEAP32[i6 + 4 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i8);
      }
      __ZN3WTF8fastFreeEPv(i6);
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
  _memset(i2 | 0, 0, 16) | 0;
 }
 i2 = i1 + 56 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i4 | 0) > 0) {
  i1 = 0;
  while (1) {
   do {
    if ((HEAP32[i3 + (i1 << 3) >> 2] | 0) != -1) {
     i5 = HEAP32[i3 + (i1 << 3) + 4 >> 2] | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     i6 = i5 + 8 | 0;
     if ((HEAP32[i6 >> 2] | 0) != 0) {
      HEAP32[i6 >> 2] = 0;
     }
     i6 = i5 | 0;
     i8 = HEAP32[i6 >> 2] | 0;
     if ((i8 | 0) != 0) {
      HEAP32[i6 >> 2] = 0;
      HEAP32[i5 + 4 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i8);
     }
     __ZN3WTF8fastFreeEPv(i5);
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i4 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i3);
 _memset(i2 | 0, 0, 16) | 0;
 return;
}
function __ZNK7WebCore14HTMLCollection25invalidateIdNameCacheMapsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 36 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 40 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i3 + (i5 << 3) >> 2] | 0) != -1) {
      i6 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      i7 = i6 + 8 | 0;
      if ((HEAP32[i7 >> 2] | 0) != 0) {
       HEAP32[i7 >> 2] = 0;
      }
      i7 = i6 | 0;
      i8 = HEAP32[i7 >> 2] | 0;
      if ((i8 | 0) != 0) {
       HEAP32[i7 >> 2] = 0;
       HEAP32[i6 + 4 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i8);
      }
      __ZN3WTF8fastFreeEPv(i6);
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
  _memset(i2 | 0, 0, 16) | 0;
 }
 i2 = i1 + 56 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i4 | 0) > 0) {
  i1 = 0;
  while (1) {
   do {
    if ((HEAP32[i3 + (i1 << 3) >> 2] | 0) != -1) {
     i5 = HEAP32[i3 + (i1 << 3) + 4 >> 2] | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     i6 = i5 + 8 | 0;
     if ((HEAP32[i6 >> 2] | 0) != 0) {
      HEAP32[i6 >> 2] = 0;
     }
     i6 = i5 | 0;
     i8 = HEAP32[i6 >> 2] | 0;
     if ((i8 | 0) != 0) {
      HEAP32[i6 >> 2] = 0;
      HEAP32[i5 + 4 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i8);
     }
     __ZN3WTF8fastFreeEPv(i5);
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i4 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i3);
 _memset(i2 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore20CollectionIndexCacheINS_14HTMLCollectionENS_7ElementEE16nodeBeforeCachedERKS1_j(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = i1 + 4 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - i3 | 0;
 i6 = HEAP32[i2 + 32 >> 2] | 0;
 do {
  if (i5 >>> 0 <= i3 >>> 0) {
   if ((i6 & 8192 | 0) != 0) {
    break;
   }
   i7 = i1 | 0;
   i8 = __ZNK7WebCore14HTMLCollection26collectionTraverseBackwardERNS_7ElementEj(i2, HEAP32[i7 >> 2] | 0, i5) | 0;
   HEAP32[i7 >> 2] = i8;
   HEAP32[i4 >> 2] = i3;
   i9 = i8;
   return i9 | 0;
  }
 } while (0);
 i5 = i2 + 32 | 0;
 i8 = i2 + 12 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 & 3 | 0) == 1) {
   if ((HEAP32[i7 + 12 >> 2] & 256 | 0) == 0) {
    i10 = i7;
    break;
   }
   i10 = HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 8 >> 2] | 0;
  } else {
   i10 = i7;
  }
 } while (0);
 i7 = __ZNK7WebCore14HTMLCollection12firstElementERNS_13ContainerNodeE(i2, i10) | 0;
 i10 = i1 | 0;
 HEAP32[i10 >> 2] = i7;
 HEAP32[i4 >> 2] = 0;
 if ((i3 | 0) == 0) {
  i9 = i7;
  return i9 | 0;
 }
 i1 = HEAP32[i8 >> 2] | 0;
 do {
  if ((HEAP32[i5 >> 2] & 3 | 0) == 1) {
   if ((HEAP32[i1 + 12 >> 2] & 256 | 0) == 0) {
    i11 = i1;
    break;
   }
   i11 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
  } else {
   i11 = i1;
  }
 } while (0);
 i1 = __ZNK7WebCore14HTMLCollection15traverseForwardERNS_7ElementEjRjRNS_13ContainerNodeE(i2, i7, i3, i4, i11) | 0;
 HEAP32[i10 >> 2] = i1;
 i9 = i1;
 return i9 | 0;
}
function __ZN7WebCore20CollectionIndexCacheINS_14HTMLCollectionENS_7ElementEE9nodeCountERKS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 12 | 0;
 if ((HEAP8[i5] & 1) != 0) {
  i6 = HEAP32[i1 + 8 >> 2] | 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 i7 = i2 + 32 | 0;
 i8 = i2 + 12 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((HEAP32[i7 >> 2] & 3 | 0) == 1) {
   if ((HEAP32[i9 + 12 >> 2] & 256 | 0) == 0) {
    i10 = i9;
    break;
   }
   i10 = HEAP32[(HEAP32[i9 + 20 >> 2] | 0) + 8 >> 2] | 0;
  } else {
   i10 = i9;
  }
 } while (0);
 i9 = __ZNK7WebCore14HTMLCollection12firstElementERNS_13ContainerNodeE(i2, i10) | 0;
 if ((i9 | 0) == 0) {
  HEAP32[i1 + 8 >> 2] = 0;
  i11 = 0;
 } else {
  i10 = HEAP32[i8 >> 2] | 0;
  do {
   if ((HEAP32[i7 >> 2] & 3 | 0) == 1) {
    if ((HEAP32[i10 + 12 >> 2] & 256 | 0) == 0) {
     i12 = i10;
     break;
    }
    i12 = HEAP32[(HEAP32[i10 + 20 >> 2] | 0) + 8 >> 2] | 0;
   } else {
    i12 = i10;
   }
  } while (0);
  __ZNK7WebCore14HTMLCollection15traverseForwardERNS_7ElementEjRjRNS_13ContainerNodeE(i2, i9, -1, i4, i12) | 0;
  i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
  HEAP32[i1 + 8 >> 2] = i12;
  i11 = i12;
 }
 HEAP8[i5] = 1;
 i6 = i11;
 STACKTOP = i3;
 return i6 | 0;
}
function __ZN7WebCore14HTMLCollection4tagsERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = HEAP32[i2 + 12 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = i5 | 0;
   HEAP32[i3 >> 2] = 0;
   i8 = i3;
  } else {
   if ((HEAP32[i2 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i5, i2);
    i8 = i5 | 0;
    break;
   } else {
    i3 = i5 | 0;
    HEAP32[i3 >> 2] = i2;
    i9 = i2 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
    i8 = i3;
    break;
   }
  }
 } while (0);
 i2 = i6 | 0;
 HEAP32[i2 >> 2] = HEAP32[i8 >> 2];
 __ZN7WebCore13ContainerNode20getElementsByTagNameERKN3WTF12AtomicStringE(i1, i7, i6);
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i2 = i6 | 0;
 i7 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i2 >> 2] = i7;
  STACKTOP = i4;
  return;
 }
}
function __ZN3WTF6VectorINS_3RefIN7WebCore7ElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF6VectorIPN7WebCore7ElementELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZNK7WebCore14HTMLCollection25collectionTraverseForwardERNS_7ElementEjRj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((HEAP32[i1 + 32 >> 2] & 3 | 0) == 1) {
   if ((HEAP32[i5 + 12 >> 2] & 256 | 0) == 0) {
    i6 = i5;
    break;
   }
   i6 = HEAP32[(HEAP32[i5 + 20 >> 2] | 0) + 8 >> 2] | 0;
  } else {
   i6 = i5;
  }
 } while (0);
 return __ZNK7WebCore14HTMLCollection15traverseForwardERNS_7ElementEjRjRNS_13ContainerNodeE(i1, i2, i3, i4, i6) | 0;
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
function __ZNK7WebCore14HTMLCollection15collectionFirstEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((HEAP32[i1 + 32 >> 2] & 3 | 0) == 1) {
   if ((HEAP32[i2 + 12 >> 2] & 256 | 0) == 0) {
    i3 = i2;
    break;
   }
   i3 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
  } else {
   i3 = i2;
  }
 } while (0);
 return __ZNK7WebCore14HTMLCollection12firstElementERNS_13ContainerNodeE(i1, i3) | 0;
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
function __ZNK7WebCore14HTMLCollection8rootNodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((HEAP32[i1 + 32 >> 2] & 3 | 0) != 1) {
  i3 = i2;
  return i3 | 0;
 }
 if ((HEAP32[i2 + 12 >> 2] & 256 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 i3 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 return i3 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_iii + 2;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore14HTMLCollection12hasNamedItemERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 7](i1, i2) | 0) != 0 | 0;
}
function __ZNK7WebCore14HTMLCollection4itemEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore20CollectionIndexCacheINS_14HTMLCollectionENS_7ElementEE6nodeAtERKS1_j(i1 + 16 | 0, i1, i2) | 0;
}
function __ZNK7WebCore14HTMLCollection6lengthEv(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore20CollectionIndexCacheINS_14HTMLCollectionENS_7ElementEE9nodeCountERKS1_(i1 + 16 | 0, i1) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore14HTMLCollectionD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14HTMLCollectionD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 7](i2 | 0, i3 | 0) | 0;
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
function __ZNK7WebCore14HTMLCollection18customElementAfterEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function b4(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(4);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function b3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(3);
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
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
}
function b2() {
 abort(2);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZNK7WebCore14HTMLCollection15updateNameCacheEv,b0,__ZNK7WebCore14HTMLCollection15invalidateCacheEv,b0,__ZN7WebCore14HTMLCollectionD0Ev,b0,__ZN7WebCore14HTMLCollectionD2Ev,b0,b0,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_ii = [b1,b1];
  var FUNCTION_TABLE_v = [b2,b2];
  var FUNCTION_TABLE_iii = [b3,b3,__ZNK7WebCore14HTMLCollection18customElementAfterEPNS_7ElementE,b3,__ZNK7WebCore14HTMLCollection9namedItemERKN3WTF12AtomicStringE,b3,b3,b3];
  var FUNCTION_TABLE_viiii = [b4,b4,__ZN7WebCore14HTMLCollectionC2ERNS_13ContainerNodeENS_14CollectionTypeENS0_20ElementTraversalTypeE,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames9scriptTagE": __ZN7WebCore9HTMLNames9scriptTagE, "__ZN7WebCore9HTMLNames7formTagE": __ZN7WebCore9HTMLNames7formTagE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZN7WebCore9HTMLNames5thTagE": __ZN7WebCore9HTMLNames5thTagE, "__ZN7WebCore9HTMLNames6imgTagE": __ZN7WebCore9HTMLNames6imgTagE, "__ZN7WebCore9HTMLNames8tbodyTagE": __ZN7WebCore9HTMLNames8tbodyTagE, "__ZN7WebCore9HTMLNames8embedTagE": __ZN7WebCore9HTMLNames8embedTagE, "__ZN7WebCore9HTMLNames8nameAttrE": __ZN7WebCore9HTMLNames8nameAttrE, "__ZN7WebCore9HTMLNames7areaTagE": __ZN7WebCore9HTMLNames7areaTagE, "__ZN7WebCore9HTMLNames9appletTagE": __ZN7WebCore9HTMLNames9appletTagE, "__ZN3WTF8starAtomE": __ZN3WTF8starAtomE, "__ZN7WebCore9HTMLNames9selectTagE": __ZN7WebCore9HTMLNames9selectTagE, "__ZN7WebCore9HTMLNames9objectTagE": __ZN7WebCore9HTMLNames9objectTagE, "__ZN7WebCore9HTMLNames5trTagE": __ZN7WebCore9HTMLNames5trTagE, "__ZN7WebCore9HTMLNames8inputTagE": __ZN7WebCore9HTMLNames8inputTagE, "__ZN7WebCore9HTMLNames9optionTagE": __ZN7WebCore9HTMLNames9optionTagE, "__ZN7WebCore9HTMLNames4aTagE": __ZN7WebCore9HTMLNames4aTagE, "__ZN7WebCore9HTMLNames5tdTagE": __ZN7WebCore9HTMLNames5tdTagE, "__ZN7WebCore9HTMLNames8hrefAttrE": __ZN7WebCore9HTMLNames8hrefAttrE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore14HTMLCollection14collectionLastEv","__ZN7WebCore17isMatchingElementERKNS_14HTMLCollectionERNS_7ElementE","__ZNK7WebCore14HTMLCollection4itemEj","__ZNK7WebCore14HTMLCollection15traverseForwardERNS_7ElementEjRjRNS_13ContainerNodeE","_strlen","__ZNK7WebCore14HTMLCollection12hasNamedItemERKN3WTF12AtomicStringE","__ZN7WebCore20CollectionIndexCacheINS_14HTMLCollectionENS_7ElementEE16nodeBeforeCachedERKS1_j","__ZN3WTF6VectorINS_3RefIN7WebCore7ElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore14HTMLCollection6lengthEv","__ZNK7WebCore14HTMLCollection15collectionFirstEv","__ZN3WTF6VectorIPN7WebCore7ElementELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore14HTMLCollection26collectionTraverseBackwardERNS_7ElementEj","__ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore14HTMLCollectionEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E6rehashEiPS9_","__ZN7WebCore14HTMLCollectionC2ERNS_13ContainerNodeENS_14CollectionTypeENS0_20ElementTraversalTypeE","__ZN7WebCore20CollectionIndexCacheINS_14HTMLCollectionENS_7ElementEE15nodeAfterCachedERKS1_j","_memcpy","__ZNK7WebCore14HTMLCollection9namedItemERKN3WTF12AtomicStringE","__ZN7WebCore14HTMLCollection6appendERN3WTF7HashMapIPNS1_16AtomicStringImplENS1_6OwnPtrINS1_6VectorIPNS_7ElementELj0ENS1_15CrashOnOverflowEEEEENS1_7PtrHashIS4_EENS1_10HashTraitsIS4_EENSE_ISB_EEEERKNS1_12AtomicStringES8_","__ZN7WebCore20CollectionIndexCacheINS_14HTMLCollectionENS_7ElementEE6nodeAtERKS1_j","__ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_6OwnPtrINS_6VectorIPN7WebCore7ElementELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS2_EENS_7HashMapIS2_SB_SG_NS_10HashTraitsIS2_EENSI_ISB_EEE18KeyValuePairTraitsESJ_E6rehashEiPSC_","__ZN7WebCore14HTMLCollection6createERNS_13ContainerNodeENS_14CollectionTypeE","_memset","__ZNK7WebCore14HTMLCollection25collectionTraverseForwardERNS_7ElementEjRj","__ZNK7WebCore14HTMLCollection8rootNodeEv","__ZNK7WebCore14HTMLCollection15invalidateCacheEv","__ZNK7WebCore14HTMLCollection12firstElementERNS_13ContainerNodeE","__ZN7WebCore14HTMLCollection4tagsERKN3WTF6StringE","__ZN7WebCore17NodeListsNodeData22removeCachedCollectionEPNS_14HTMLCollectionERKN3WTF12AtomicStringE","__ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_6OwnPtrINS_6VectorIPN7WebCore7ElementELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS2_EENS_7HashMapIS2_SB_SG_NS_10HashTraitsIS2_EENSI_ISB_EEE18KeyValuePairTraitsESJ_E3addINS_17HashMapTranslatorISM_SG_EES2_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS2_SC_SE_SG_SM_SJ_EEEEOT0_OT1_","__ZNK7WebCore14HTMLCollection18customElementAfterEPNS_7ElementE","__ZNK7WebCore14HTMLCollection15updateNameCacheEv","__ZNK7WebCore14HTMLCollection10namedItemsERKN3WTF12AtomicStringERNS1_6VectorINS1_3RefINS_7ElementEEELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore14HTMLCollectionD0Ev","__ZNK7WebCore14HTMLCollection25invalidateIdNameCacheMapsEv","__ZN7WebCore20CollectionIndexCacheINS_14HTMLCollectionENS_7ElementEE9nodeCountERKS1_","__ZN7WebCore14HTMLCollectionD2Ev"]

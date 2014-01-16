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
H_BASE = parentModule["_malloc"](368 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 368;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore4NodeD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore9HTMLNames9classAttrE=env.__ZN7WebCore9HTMLNames9classAttrE|0;
  var __ZN7WebCore9HTMLNames7bodyTagE=env.__ZN7WebCore9HTMLNames7bodyTagE|0;
  var __ZTVN7WebCore13EmptyNodeListE=env.__ZTVN7WebCore13EmptyNodeListE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZN7WebCore9HTMLNames6imgTagE=env.__ZN7WebCore9HTMLNames6imgTagE|0;
  var __ZN7WebCore9HTMLNames7forAttrE=env.__ZN7WebCore9HTMLNames7forAttrE|0;
  var __ZN7WebCore8XMLNames15xmlNamespaceURIE=env.__ZN7WebCore8XMLNames15xmlNamespaceURIE|0;
  var __ZN7WebCore9HTMLNames8nameAttrE=env.__ZN7WebCore9HTMLNames8nameAttrE|0;
  var __ZN3WTF7xmlAtomE=env.__ZN3WTF7xmlAtomE|0;
  var __ZN7WebCore9HTMLNames5brTagE=env.__ZN7WebCore9HTMLNames5brTagE|0;
  var __ZN7WebCore9HTMLNames6idAttrE=env.__ZN7WebCore9HTMLNames6idAttrE|0;
  var __ZN3WTF9xmlnsAtomE=env.__ZN3WTF9xmlnsAtomE|0;
  var __ZN7WebCore9HTMLNames8typeAttrE=env.__ZN7WebCore9HTMLNames8typeAttrE|0;
  var __ZN7WebCore9HTMLNames8formAttrE=env.__ZN7WebCore9HTMLNames8formAttrE|0;
  var __ZN7WebCore9HTMLNames8hrefAttrE=env.__ZN7WebCore9HTMLNames8hrefAttrE|0;
  var __ZN7WebCore17InspectorCounters10s_countersE=env.__ZN7WebCore17InspectorCounters10s_countersE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore15BeforeLoadEventE=(H_BASE+264)|0;
  var __ZTVN7WebCore4NodeE=(H_BASE+8)|0;
  var __ZZN7WebCore9TreeScope18noDocumentInstanceEvE8instance=(H_BASE+360)|0;
  var __ZGVZN7WebCore9TreeScope18noDocumentInstanceEvE8instance=(H_BASE+368)|0;
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
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore4Node23compareDocumentPositionEPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 168 | 0;
 i4 = i3 | 0;
 i5 = i3 + 80 | 0;
 i6 = i3 + 160 | 0;
 if ((i2 | 0) == 0) {
  i7 = 1;
  STACKTOP = i3;
  return i7 | 0;
 }
 if ((i2 | 0) == (i1 | 0)) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 112 >> 2] & 127](i1) | 0) {
  i8 = i1;
 } else {
  i8 = 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 112 >> 2] & 127](i2) | 0) {
  i9 = i2;
 } else {
  i9 = 0;
 }
 i10 = (i8 | 0) == 0;
 if (i10) {
  i11 = i1;
 } else {
  i11 = HEAP32[i8 + 44 >> 2] | 0;
 }
 i12 = (i9 | 0) == 0;
 if (i12) {
  i13 = i2;
 } else {
  i13 = HEAP32[i9 + 44 >> 2] | 0;
 }
 i14 = (i11 | 0) != 0;
 if ((i13 | 0) == 0 | i14 ^ 1) {
  i7 = i1 >>> 0 > i2 >>> 0 ? 35 : 37;
  STACKTOP = i3;
  return i7 | 0;
 }
 i15 = i4 + 12 | 0;
 i16 = i4 | 0;
 HEAP32[i16 >> 2] = i15;
 i17 = i4 + 4 | 0;
 HEAP32[i17 >> 2] = 16;
 i18 = i4 + 8 | 0;
 HEAP32[i18 >> 2] = 0;
 i4 = i5 + 12 | 0;
 i19 = i5 | 0;
 HEAP32[i19 >> 2] = i4;
 i20 = i5 + 4 | 0;
 HEAP32[i20 >> 2] = 16;
 i21 = i5 + 8 | 0;
 HEAP32[i21 >> 2] = 0;
 if (!i10) {
  HEAP32[i15 >> 2] = i8;
  HEAP32[i18 >> 2] = 1;
 }
 L26 : do {
  if (i12) {
   i22 = 46;
  } else {
   i5 = HEAP32[i21 >> 2] | 0;
   if ((i5 | 0) == (HEAP32[i20 >> 2] | 0)) {
    i23 = i5 + 1 | 0;
    i24 = i23 + (i5 >>> 2) | 0;
    i25 = i24 >>> 0 > 16 >>> 0 ? i24 : 16;
    i24 = i25 >>> 0 > i23 >>> 0 ? i25 : i23;
    do {
     if (i5 >>> 0 < i24 >>> 0) {
      i23 = HEAP32[i19 >> 2] | 0;
      do {
       if (i24 >>> 0 > 16 >>> 0) {
        if (i24 >>> 0 > 1073741823 >>> 0) {
         _WTFCrash();
         return 0;
        } else {
         i25 = __ZN3WTF18fastMallocGoodSizeEj(i24 << 2) | 0;
         HEAP32[i20 >> 2] = i25 >>> 2;
         i26 = __ZN3WTF10fastMallocEj(i25) | 0;
         HEAP32[i19 >> 2] = i26;
         i27 = i26;
         break;
        }
       } else {
        HEAP32[i19 >> 2] = i4;
        HEAP32[i20 >> 2] = 16;
        i27 = i4;
       }
      } while (0);
      i26 = i23;
      _memcpy(i27 | 0, i26 | 0, i5 << 2) | 0;
      if ((i4 | 0) == (i23 | 0) | (i23 | 0) == 0) {
       break;
      }
      if ((HEAP32[i19 >> 2] | 0) == (i23 | 0)) {
       HEAP32[i19 >> 2] = 0;
       HEAP32[i20 >> 2] = 0;
      }
      __ZN3WTF8fastFreeEPv(i26);
     }
    } while (0);
    HEAP32[(HEAP32[i19 >> 2] | 0) + (HEAP32[i21 >> 2] << 2) >> 2] = i9;
    i28 = HEAP32[i21 >> 2] | 0;
   } else {
    HEAP32[(HEAP32[i19 >> 2] | 0) + (i5 << 2) >> 2] = i9;
    i28 = HEAP32[i21 >> 2] | 0;
   }
   HEAP32[i21 >> 2] = i28 + 1;
   if (i10 | i12) {
    i22 = 46;
    break;
   }
   if (!((i11 | 0) == (i13 | 0) & i14)) {
    i22 = 46;
    break;
   }
   i24 = HEAP32[i8 + 44 >> 2] | 0;
   __ZNK7WebCore7Element24synchronizeAllAttributesEv(i24);
   i26 = HEAP32[i24 + 48 >> 2] | 0;
   i24 = HEAP32[i26 + 4 >> 2] | 0;
   i25 = (i24 & 1 | 0) == 0;
   if (i25) {
    i29 = i24 >>> 1 & 134217727;
   } else {
    i29 = HEAP32[i26 + 32 >> 2] | 0;
   }
   i30 = i8 + 48 | 0;
   i31 = i9 + 48 | 0;
   i32 = 0;
   while (1) {
    if (i32 >>> 0 >= i29 >>> 0) {
     i33 = 1;
     break L26;
    }
    if (i25) {
     i34 = i24 >>> 1 & 134217727;
    } else {
     i34 = HEAP32[i26 + 32 >> 2] | 0;
    }
    if (i34 >>> 0 <= i32 >>> 0) {
     break;
    }
    if (i25) {
     i35 = i26 + 20 | 0;
    } else {
     i35 = HEAP32[i26 + 24 >> 2] | 0;
    }
    i36 = HEAP32[i35 + (i32 << 3) >> 2] | 0;
    if ((HEAP32[i30 >> 2] | 0) == (i36 | 0)) {
     i33 = 36;
     break L26;
    }
    if ((HEAP32[i31 >> 2] | 0) == (i36 | 0)) {
     i33 = 34;
     break L26;
    } else {
     i32 = i32 + 1 | 0;
    }
   }
   _WTFCrash();
   return 0;
  }
 } while (0);
 L66 : do {
  if ((i22 | 0) == 46) {
   do {
    if (!((HEAP32[i11 + 12 >> 2] & 256 | 0) != 0 ^ (HEAP32[i13 + 12 >> 2] & 256 | 0) != 0)) {
     if ((HEAP32[i11 + 20 >> 2] | 0) != (HEAP32[i13 + 20 >> 2] | 0)) {
      break;
     }
     HEAP32[i6 >> 2] = i11;
     L71 : do {
      if ((i11 | 0) != 0) {
       i35 = i6;
       i34 = i11;
       i29 = HEAP32[i18 >> 2] | 0;
       L73 : while (1) {
        if ((i29 | 0) == (HEAP32[i17 >> 2] | 0)) {
         i9 = i29 + 1 | 0;
         i8 = HEAP32[i16 >> 2] | 0;
         do {
          if (i8 >>> 0 > i6 >>> 0) {
           i22 = 56;
          } else {
           if ((i8 + (i29 << 2) | 0) >>> 0 <= i6 >>> 0) {
            i22 = 56;
            break;
           }
           i14 = i35 - i8 >> 2;
           i12 = i9 + (i29 >>> 2) | 0;
           i10 = i12 >>> 0 > 16 >>> 0 ? i12 : 16;
           i12 = i10 >>> 0 > i9 >>> 0 ? i10 : i9;
           do {
            if (i29 >>> 0 < i12 >>> 0) {
             if (i12 >>> 0 > 16 >>> 0) {
              if (i12 >>> 0 > 1073741823 >>> 0) {
               i22 = 70;
               break L73;
              }
              i10 = __ZN3WTF18fastMallocGoodSizeEj(i12 << 2) | 0;
              HEAP32[i17 >> 2] = i10 >>> 2;
              i28 = __ZN3WTF10fastMallocEj(i10) | 0;
              HEAP32[i16 >> 2] = i28;
              i37 = i28;
             } else {
              HEAP32[i16 >> 2] = i15;
              HEAP32[i17 >> 2] = 16;
              i37 = i15;
             }
             i28 = i8;
             _memcpy(i37 | 0, i28 | 0, i29 << 2) | 0;
             if ((i15 | 0) == (i8 | 0) | (i8 | 0) == 0) {
              break;
             }
             if ((HEAP32[i16 >> 2] | 0) == (i8 | 0)) {
              HEAP32[i16 >> 2] = 0;
              HEAP32[i17 >> 2] = 0;
             }
             __ZN3WTF8fastFreeEPv(i28);
            }
           } while (0);
           i12 = HEAP32[i16 >> 2] | 0;
           i38 = i12 + (i14 << 2) | 0;
           i39 = i12;
          }
         } while (0);
         if ((i22 | 0) == 56) {
          i22 = 0;
          i12 = i9 + (i29 >>> 2) | 0;
          i28 = i12 >>> 0 > 16 >>> 0 ? i12 : 16;
          i12 = i28 >>> 0 > i9 >>> 0 ? i28 : i9;
          do {
           if (i29 >>> 0 < i12 >>> 0) {
            if (i12 >>> 0 > 16 >>> 0) {
             if (i12 >>> 0 > 1073741823 >>> 0) {
              i22 = 59;
              break L73;
             }
             i28 = __ZN3WTF18fastMallocGoodSizeEj(i12 << 2) | 0;
             HEAP32[i17 >> 2] = i28 >>> 2;
             i10 = __ZN3WTF10fastMallocEj(i28) | 0;
             HEAP32[i16 >> 2] = i10;
             i40 = i10;
            } else {
             HEAP32[i16 >> 2] = i15;
             HEAP32[i17 >> 2] = 16;
             i40 = i15;
            }
            i10 = i8;
            _memcpy(i40 | 0, i10 | 0, i29 << 2) | 0;
            if ((i15 | 0) == (i8 | 0) | (i8 | 0) == 0) {
             break;
            }
            if ((HEAP32[i16 >> 2] | 0) == (i8 | 0)) {
             HEAP32[i16 >> 2] = 0;
             HEAP32[i17 >> 2] = 0;
            }
            __ZN3WTF8fastFreeEPv(i10);
           }
          } while (0);
          i38 = i6;
          i39 = HEAP32[i16 >> 2] | 0;
         }
         HEAP32[i39 + (HEAP32[i18 >> 2] << 2) >> 2] = HEAP32[i38 >> 2];
         i41 = HEAP32[i18 >> 2] | 0;
        } else {
         HEAP32[(HEAP32[i16 >> 2] | 0) + (i29 << 2) >> 2] = i34;
         i41 = HEAP32[i18 >> 2] | 0;
        }
        i29 = i41 + 1 | 0;
        HEAP32[i18 >> 2] = i29;
        i8 = HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] | 0;
        i34 = i8 | 0;
        HEAP32[i6 >> 2] = i34;
        if ((i8 | 0) == 0) {
         break L71;
        }
       }
       if ((i22 | 0) == 59) {
        _WTFCrash();
        return 0;
       } else if ((i22 | 0) == 70) {
        _WTFCrash();
        return 0;
       }
      }
     } while (0);
     HEAP32[i6 >> 2] = i13;
     i23 = i6;
     i34 = i13;
     i29 = HEAP32[i21 >> 2] | 0;
     L113 : while (1) {
      if ((i29 | 0) == (HEAP32[i20 >> 2] | 0)) {
       i35 = i29 + 1 | 0;
       i8 = HEAP32[i19 >> 2] | 0;
       do {
        if (i8 >>> 0 > i6 >>> 0) {
         i22 = 84;
        } else {
         if ((i8 + (i29 << 2) | 0) >>> 0 <= i6 >>> 0) {
          i22 = 84;
          break;
         }
         i12 = i23 - i8 >> 2;
         i9 = i35 + (i29 >>> 2) | 0;
         i10 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
         i9 = i10 >>> 0 > i35 >>> 0 ? i10 : i35;
         do {
          if (i29 >>> 0 < i9 >>> 0) {
           if (i9 >>> 0 > 16 >>> 0) {
            if (i9 >>> 0 > 1073741823 >>> 0) {
             i22 = 98;
             break L113;
            }
            i10 = __ZN3WTF18fastMallocGoodSizeEj(i9 << 2) | 0;
            HEAP32[i20 >> 2] = i10 >>> 2;
            i28 = __ZN3WTF10fastMallocEj(i10) | 0;
            HEAP32[i19 >> 2] = i28;
            i42 = i28;
           } else {
            HEAP32[i19 >> 2] = i4;
            HEAP32[i20 >> 2] = 16;
            i42 = i4;
           }
           i28 = i8;
           _memcpy(i42 | 0, i28 | 0, i29 << 2) | 0;
           if ((i4 | 0) == (i8 | 0) | (i8 | 0) == 0) {
            break;
           }
           if ((HEAP32[i19 >> 2] | 0) == (i8 | 0)) {
            HEAP32[i19 >> 2] = 0;
            HEAP32[i20 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i28);
          }
         } while (0);
         i9 = HEAP32[i19 >> 2] | 0;
         i43 = i9 + (i12 << 2) | 0;
         i44 = i9;
        }
       } while (0);
       if ((i22 | 0) == 84) {
        i22 = 0;
        i9 = i35 + (i29 >>> 2) | 0;
        i28 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
        i9 = i28 >>> 0 > i35 >>> 0 ? i28 : i35;
        do {
         if (i29 >>> 0 < i9 >>> 0) {
          if (i9 >>> 0 > 16 >>> 0) {
           if (i9 >>> 0 > 1073741823 >>> 0) {
            i22 = 87;
            break L113;
           }
           i28 = __ZN3WTF18fastMallocGoodSizeEj(i9 << 2) | 0;
           HEAP32[i20 >> 2] = i28 >>> 2;
           i10 = __ZN3WTF10fastMallocEj(i28) | 0;
           HEAP32[i19 >> 2] = i10;
           i45 = i10;
          } else {
           HEAP32[i19 >> 2] = i4;
           HEAP32[i20 >> 2] = 16;
           i45 = i4;
          }
          i10 = i8;
          _memcpy(i45 | 0, i10 | 0, i29 << 2) | 0;
          if ((i4 | 0) == (i8 | 0) | (i8 | 0) == 0) {
           break;
          }
          if ((HEAP32[i19 >> 2] | 0) == (i8 | 0)) {
           HEAP32[i19 >> 2] = 0;
           HEAP32[i20 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i10);
         }
        } while (0);
        i43 = i6;
        i44 = HEAP32[i19 >> 2] | 0;
       }
       HEAP32[i44 + (HEAP32[i21 >> 2] << 2) >> 2] = HEAP32[i43 >> 2];
       i46 = HEAP32[i21 >> 2] | 0;
      } else {
       HEAP32[(HEAP32[i19 >> 2] | 0) + (i29 << 2) >> 2] = i34;
       i46 = HEAP32[i21 >> 2] | 0;
      }
      i47 = i46 + 1 | 0;
      HEAP32[i21 >> 2] = i47;
      i8 = HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] | 0;
      i9 = i8 | 0;
      HEAP32[i6 >> 2] = i9;
      if ((i8 | 0) == 0) {
       i22 = 108;
       break;
      } else {
       i34 = i9;
       i29 = i47;
      }
     }
     if ((i22 | 0) == 87) {
      _WTFCrash();
      return 0;
     } else if ((i22 | 0) == 98) {
      _WTFCrash();
      return 0;
     } else if ((i22 | 0) == 108) {
      i29 = HEAP32[i18 >> 2] | 0;
      i34 = _llvm_uadd_with_overflow_i32(i29 | 0, -1 | 0) | 0;
      if (!tempRet0) {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
       return 0;
      }
      i23 = _llvm_uadd_with_overflow_i32(i47 | 0, -1 | 0) | 0;
      if (!tempRet0) {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
       return 0;
      }
      i9 = HEAP32[i16 >> 2] | 0;
      i8 = HEAP32[i19 >> 2] | 0;
      if ((HEAP32[i9 + (i34 << 2) >> 2] | 0) != (HEAP32[i8 + (i23 << 2) >> 2] | 0)) {
       i33 = i1 >>> 0 > i2 >>> 0 ? 35 : 37;
       break L66;
      }
      i23 = i47 >>> 0 < i29 >>> 0 ? i47 : i29;
      i34 = i47;
      i35 = i29;
      while (1) {
       if ((i23 | 0) == 0) {
        i22 = 127;
        break;
       }
       i10 = i35 - 1 | 0;
       if (i29 >>> 0 <= i10 >>> 0) {
        i22 = 117;
        break;
       }
       i48 = HEAP32[i9 + (i10 << 2) >> 2] | 0;
       i28 = i34 - 1 | 0;
       if (i47 >>> 0 <= i28 >>> 0) {
        i22 = 119;
        break;
       }
       i49 = HEAP32[i8 + (i28 << 2) >> 2] | 0;
       if ((i48 | 0) == (i49 | 0)) {
        i23 = i23 - 1 | 0;
        i34 = i28;
        i35 = i10;
       } else {
        i22 = 121;
        break;
       }
      }
      if ((i22 | 0) == 117) {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
       return 0;
      } else if ((i22 | 0) == 119) {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
       return 0;
      } else if ((i22 | 0) == 121) {
       if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i48 >> 2] | 0) + 76 >> 2] & 127](i48) | 0) == 2) {
        i33 = 4;
        break L66;
       }
       if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i49 >> 2] | 0) + 76 >> 2] & 127](i49) | 0) == 2) {
        i33 = 2;
        break L66;
       }
       if ((HEAP32[i49 + 28 >> 2] | 0) == 0) {
        i33 = 4;
        break L66;
       }
       if ((HEAP32[i48 + 28 >> 2] | 0) == 0) {
        i33 = 2;
        break L66;
       } else {
        i50 = i49;
       }
       while (1) {
        i23 = HEAP32[i50 + 24 >> 2] | 0;
        if ((i23 | 0) == 0) {
         i33 = 2;
         break L66;
        }
        if ((i23 | 0) == (i48 | 0)) {
         i33 = 4;
         break L66;
        } else {
         i50 = i23;
        }
       }
      } else if ((i22 | 0) == 127) {
       i33 = i35 >>> 0 < i34 >>> 0 ? 20 : 10;
       break L66;
      }
     }
    }
   } while (0);
   i33 = i1 >>> 0 > i2 >>> 0 ? 35 : 37;
  }
 } while (0);
 if ((HEAP32[i21 >> 2] | 0) != 0) {
  HEAP32[i21 >> 2] = 0;
 }
 i21 = HEAP32[i19 >> 2] | 0;
 if (!((i4 | 0) == (i21 | 0) | (i21 | 0) == 0)) {
  HEAP32[i19 >> 2] = 0;
  HEAP32[i20 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i21);
 }
 if ((HEAP32[i18 >> 2] | 0) != 0) {
  HEAP32[i18 >> 2] = 0;
 }
 i18 = HEAP32[i16 >> 2] | 0;
 if ((i15 | 0) == (i18 | 0) | (i18 | 0) == 0) {
  i7 = i33;
  STACKTOP = i3;
  return i7 | 0;
 }
 HEAP32[i16 >> 2] = 0;
 HEAP32[i17 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i18);
 i7 = i33;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore17NodeListsNodeData16invalidateCachesEPKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i7 = HEAP32[i1 + 12 >> 2] | 0;
 i8 = i6 + (i7 * 12 & -1) | 0;
 L1 : do {
  if ((HEAP32[i1 + 20 >> 2] | 0) != 0) {
   L3 : do {
    if ((i7 | 0) == 0) {
     i9 = i6;
    } else {
     i10 = i6;
     while (1) {
      i11 = HEAP8[i10 | 0] | 0;
      if ((i11 << 24 >> 24 | 0) == 0) {
       if ((HEAP32[i10 + 4 >> 2] | 0) != 0) {
        i9 = i10;
        break L3;
       }
      } else if ((i11 << 24 >> 24 | 0) != (-1 | 0)) {
       i9 = i10;
       break L3;
      }
      i10 = i10 + 12 | 0;
      if ((i10 | 0) == (i8 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i9 | 0) == (i8 | 0)) {
    break;
   }
   i10 = (i2 | 0) == 0;
   i11 = i2 | 0;
   i12 = i9;
   while (1) {
    i13 = HEAP32[i12 + 8 >> 2] | 0;
    L13 : do {
     if (i10) {
      i14 = 16;
     } else {
      switch ((HEAP32[i13 + 32 >> 2] | 0) >>> 2 & 15 | 0) {
      case 5:
       {
        i15 = HEAP32[i11 >> 2] | 0;
        if ((i15 | 0) == (HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0) | (i15 | 0) == (HEAP32[__ZN7WebCore9HTMLNames6idAttrE >> 2] | 0) | (i15 | 0) == (HEAP32[__ZN7WebCore9HTMLNames7forAttrE >> 2] | 0) | (i15 | 0) == (HEAP32[__ZN7WebCore9HTMLNames8formAttrE >> 2] | 0) | (i15 | 0) == (HEAP32[__ZN7WebCore9HTMLNames8typeAttrE >> 2] | 0)) {
         i14 = 16;
         break L13;
        } else {
         break L13;
        }
        break;
       }
      case 1:
       {
        if ((HEAP32[i11 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames9classAttrE >> 2] | 0)) {
         i14 = 16;
         break L13;
        } else {
         break L13;
        }
        break;
       }
      case 3:
       {
        if ((HEAP32[i11 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0)) {
         i14 = 16;
         break L13;
        } else {
         break L13;
        }
        break;
       }
      case 6:
       {
        if ((HEAP32[i11 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames8hrefAttrE >> 2] | 0)) {
         i14 = 16;
         break L13;
        } else {
         break L13;
        }
        break;
       }
      case 2:
       {
        i15 = HEAP32[i11 >> 2] | 0;
        if ((i15 | 0) == (HEAP32[__ZN7WebCore9HTMLNames6idAttrE >> 2] | 0) | (i15 | 0) == (HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0)) {
         i14 = 16;
         break L13;
        } else {
         break L13;
        }
        break;
       }
      case 7:
       {
        i14 = 16;
        break L13;
        break;
       }
      case 4:
       {
        if ((HEAP32[i11 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames7forAttrE >> 2] | 0)) {
         i14 = 16;
         break L13;
        } else {
         break L13;
        }
        break;
       }
      default:
       {
        break L13;
       }
      }
     }
    } while (0);
    if ((i14 | 0) == 16) {
     i14 = 0;
     __ZNK7WebCore12LiveNodeList15invalidateCacheEv(i13);
    }
    i15 = i12 + 12 | 0;
    if ((i15 | 0) == (i8 | 0)) {
     break L1;
    } else {
     i16 = i15;
    }
    while (1) {
     i15 = HEAP8[i16 | 0] | 0;
     if ((i15 << 24 >> 24 | 0) == 0) {
      if ((HEAP32[i16 + 4 >> 2] | 0) != 0) {
       break;
      }
     } else if ((i15 << 24 >> 24 | 0) != (-1 | 0)) {
      break;
     }
     i15 = i16 + 12 | 0;
     if ((i15 | 0) == (i8 | 0)) {
      break L1;
     } else {
      i16 = i15;
     }
    }
    if ((i16 | 0) == (i8 | 0)) {
     break;
    } else {
     i12 = i16;
    }
   }
  }
 } while (0);
 i16 = i1 + 28 | 0;
 i8 = HEAP32[i16 >> 2] | 0;
 i9 = i1 + 32 | 0;
 i6 = HEAP32[i9 >> 2] | 0;
 i7 = i8 + (i6 * 12 & -1) | 0;
 do {
  if ((HEAP32[i1 + 40 >> 2] | 0) == 0) {
   i17 = i7;
   i18 = i8;
   i19 = i6;
  } else {
   if ((i6 | 0) == 0) {
    i17 = i8;
    i18 = i8;
    i19 = 0;
    break;
   } else {
    i20 = i8;
   }
   while (1) {
    i12 = i20 | 0;
    i11 = HEAP8[i12] | 0;
    do {
     if (i11 << 24 >> 24 == 0) {
      if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i20 + 4 >> 2] | 0, 0) | 0) {
       break;
      }
      i21 = HEAP8[i12] | 0;
      i14 = 27;
     } else {
      i21 = i11;
      i14 = 27;
     }
    } while (0);
    if ((i14 | 0) == 27) {
     i14 = 0;
     if (i21 << 24 >> 24 != -1) {
      i22 = i20;
      break;
     }
    }
    i11 = i20 + 12 | 0;
    if ((i11 | 0) == (i7 | 0)) {
     i22 = i7;
     break;
    } else {
     i20 = i11;
    }
   }
   i17 = i22;
   i18 = HEAP32[i16 >> 2] | 0;
   i19 = HEAP32[i9 >> 2] | 0;
  }
 } while (0);
 i9 = i18 + (i19 * 12 & -1) | 0;
 if ((i17 | 0) != (i9 | 0)) {
  i19 = (i2 | 0) == 0;
  i18 = i2 | 0;
  i16 = i17;
  while (1) {
   i17 = HEAP32[i16 + 8 >> 2] | 0;
   L48 : do {
    if (i19) {
     i14 = 40;
    } else {
     switch ((HEAP32[i17 + 32 >> 2] | 0) >>> 2 & 15 | 0) {
     case 2:
      {
       i22 = HEAP32[i18 >> 2] | 0;
       if ((i22 | 0) == (HEAP32[__ZN7WebCore9HTMLNames6idAttrE >> 2] | 0) | (i22 | 0) == (HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0)) {
        i14 = 40;
        break L48;
       } else {
        break L48;
       }
       break;
      }
     case 4:
      {
       if ((HEAP32[i18 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames7forAttrE >> 2] | 0)) {
        i14 = 40;
        break L48;
       } else {
        break L48;
       }
       break;
      }
     case 5:
      {
       i22 = HEAP32[i18 >> 2] | 0;
       if ((i22 | 0) == (HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0) | (i22 | 0) == (HEAP32[__ZN7WebCore9HTMLNames6idAttrE >> 2] | 0) | (i22 | 0) == (HEAP32[__ZN7WebCore9HTMLNames7forAttrE >> 2] | 0) | (i22 | 0) == (HEAP32[__ZN7WebCore9HTMLNames8formAttrE >> 2] | 0) | (i22 | 0) == (HEAP32[__ZN7WebCore9HTMLNames8typeAttrE >> 2] | 0)) {
        i14 = 40;
        break L48;
       } else {
        break L48;
       }
       break;
      }
     case 6:
      {
       if ((HEAP32[i18 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames8hrefAttrE >> 2] | 0)) {
        i14 = 40;
        break L48;
       } else {
        break L48;
       }
       break;
      }
     case 7:
      {
       i14 = 40;
       break L48;
       break;
      }
     case 1:
      {
       if ((HEAP32[i18 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames9classAttrE >> 2] | 0)) {
        i14 = 40;
        break L48;
       } else {
        break L48;
       }
       break;
      }
     case 3:
      {
       if ((HEAP32[i18 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0)) {
        i14 = 40;
        break L48;
       } else {
        break L48;
       }
       break;
      }
     default:
      {
       break L48;
      }
     }
    }
   } while (0);
   if ((i14 | 0) == 40) {
    i14 = 0;
    __ZNK7WebCore12LiveNodeList15invalidateCacheEv(i17);
   }
   i22 = i16 + 12 | 0;
   L60 : do {
    if ((i22 | 0) == (i7 | 0)) {
     i23 = i7;
    } else {
     i20 = i22;
     while (1) {
      i21 = i20 | 0;
      i8 = HEAP8[i21] | 0;
      do {
       if (i8 << 24 >> 24 == 0) {
        if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i20 + 4 >> 2] | 0, 0) | 0) {
         break;
        }
        i24 = HEAP8[i21] | 0;
        i14 = 46;
       } else {
        i24 = i8;
        i14 = 46;
       }
      } while (0);
      if ((i14 | 0) == 46) {
       i14 = 0;
       if (i24 << 24 >> 24 != -1) {
        i23 = i20;
        break L60;
       }
      }
      i8 = i20 + 12 | 0;
      if ((i8 | 0) == (i7 | 0)) {
       i23 = i7;
       break;
      } else {
       i20 = i8;
      }
     }
    }
   } while (0);
   if ((i23 | 0) == (i9 | 0)) {
    break;
   } else {
    i16 = i23;
   }
  }
 }
 i23 = HEAP32[i1 + 68 >> 2] | 0;
 i16 = HEAP32[i1 + 72 >> 2] | 0;
 i9 = i23 + (i16 * 12 & -1) | 0;
 L71 : do {
  if ((HEAP32[i1 + 80 >> 2] | 0) != 0) {
   L73 : do {
    if ((i16 | 0) == 0) {
     i25 = i23;
    } else {
     i7 = i23;
     while (1) {
      i24 = HEAP8[i7 | 0] | 0;
      if ((i24 << 24 >> 24 | 0) == 0) {
       if ((HEAP32[i7 + 4 >> 2] | 0) != 0) {
        i25 = i7;
        break L73;
       }
      } else if ((i24 << 24 >> 24 | 0) != (-1 | 0)) {
       i25 = i7;
       break L73;
      }
      i7 = i7 + 12 | 0;
      if ((i7 | 0) == (i9 | 0)) {
       break L71;
      }
     }
    }
   } while (0);
   if ((i25 | 0) == (i9 | 0)) {
    break;
   } else {
    i26 = i25;
   }
   while (1) {
    __ZNK7WebCore14HTMLCollection15invalidateCacheEPKNS_13QualifiedNameE(HEAP32[i26 + 8 >> 2] | 0, i2);
    i7 = i26 + 12 | 0;
    if ((i7 | 0) == (i9 | 0)) {
     break L71;
    } else {
     i27 = i7;
    }
    while (1) {
     i7 = HEAP8[i27 | 0] | 0;
     if ((i7 << 24 >> 24 | 0) == 0) {
      if ((HEAP32[i27 + 4 >> 2] | 0) != 0) {
       break;
      }
     } else if ((i7 << 24 >> 24 | 0) != (-1 | 0)) {
      break;
     }
     i7 = i27 + 12 | 0;
     if ((i7 | 0) == (i9 | 0)) {
      break L71;
     } else {
      i27 = i7;
     }
    }
    if ((i27 | 0) == (i9 | 0)) {
     break;
    } else {
     i26 = i27;
    }
   }
  }
 } while (0);
 if ((i2 | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i1 + 48 | 0;
 i27 = HEAP32[i2 >> 2] | 0;
 i26 = i1 + 52 | 0;
 i9 = HEAP32[i26 >> 2] | 0;
 i25 = i27 + (i9 << 3) | 0;
 do {
  if ((HEAP32[i1 + 60 >> 2] | 0) == 0) {
   i28 = i25;
   i29 = i27;
   i30 = i9;
  } else {
   if ((i9 | 0) == 0) {
    i28 = i27;
    i29 = i27;
    i30 = 0;
    break;
   }
   i23 = i4 | 0;
   i16 = i27;
   while (1) {
    i7 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
    HEAP32[i23 >> 2] = i7;
    i24 = i7 | 0;
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
    i24 = i16 | 0;
    i7 = (HEAP32[i24 >> 2] | 0) == (HEAP32[i23 >> 2] | 0);
    __ZN7WebCore13QualifiedNameD1Ev(i4);
    if (!i7) {
     if ((HEAP32[i24 >> 2] | 0) != -1) {
      i31 = i16;
      break;
     }
    }
    i24 = i16 + 8 | 0;
    if ((i24 | 0) == (i25 | 0)) {
     i31 = i25;
     break;
    } else {
     i16 = i24;
    }
   }
   i28 = i31;
   i29 = HEAP32[i2 >> 2] | 0;
   i30 = HEAP32[i26 >> 2] | 0;
  }
 } while (0);
 i26 = i29 + (i30 << 3) | 0;
 if ((i28 | 0) == (i26 | 0)) {
  STACKTOP = i3;
  return;
 }
 i30 = i5 | 0;
 i29 = i28;
 while (1) {
  __ZNK7WebCore12LiveNodeList15invalidateCacheEv(HEAP32[i29 + 4 >> 2] | 0);
  i28 = i29 + 8 | 0;
  L107 : do {
   if ((i28 | 0) == (i25 | 0)) {
    i32 = i25;
   } else {
    i2 = i28;
    while (1) {
     i31 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
     HEAP32[i30 >> 2] = i31;
     i4 = i31 | 0;
     HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
     i4 = i2 | 0;
     i31 = (HEAP32[i4 >> 2] | 0) == (HEAP32[i30 >> 2] | 0);
     __ZN7WebCore13QualifiedNameD1Ev(i5);
     if (!i31) {
      if ((HEAP32[i4 >> 2] | 0) != -1) {
       i32 = i2;
       break L107;
      }
     }
     i4 = i2 + 8 | 0;
     if ((i4 | 0) == (i25 | 0)) {
      i32 = i25;
      break;
     } else {
      i2 = i4;
     }
    }
   }
  } while (0);
  if ((i32 | 0) == (i26 | 0)) {
   break;
  } else {
   i29 = i32;
  }
 }
 STACKTOP = i3;
 return;
}
function __ZN7WebCore4Node9normalizeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 if ((i1 | 0) == 0) {
  i8 = 0;
 } else {
  i9 = i1 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i8 = i1;
 }
 L4 : do {
  if ((HEAP32[i8 + 12 >> 2] & 2 | 0) == 0) {
   i10 = i8;
  } else {
   i9 = i8;
   while (1) {
    i11 = HEAP32[i9 + 36 >> 2] | 0;
    if ((i11 | 0) == 0) {
     i10 = i9;
     break L4;
    }
    i12 = i11 + 8 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
    do {
     if ((i9 | 0) != 0) {
      i12 = i9 + 8 | 0;
      i13 = i12 | 0;
      i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
      HEAP32[i13 >> 2] = i14;
      if ((i14 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
     }
    } while (0);
    if ((HEAP32[i11 + 12 >> 2] & 2 | 0) == 0) {
     i10 = i11;
     break;
    } else {
     i9 = i11;
    }
   }
  }
 } while (0);
 if ((i10 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i8 = i3 | 0;
 i3 = i4 | 0;
 i4 = i5 | 0;
 i9 = i6 | 0;
 i6 = i1 + 20 | 0;
 i12 = i7 | 0;
 i7 = i10;
 while (1) {
  i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 76 >> 2] & 127](i7) | 0;
  if ((i10 | 0) == 1) {
   __ZN7WebCore7Element19normalizeAttributesEv(i7);
  }
  if ((i7 | 0) == (i1 | 0)) {
   break;
  }
  do {
   if ((i10 | 0) == 3) {
    i14 = (i7 | 0) != 0;
    if (i14) {
     i13 = i7 + 8 | 0;
     HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
    }
    i13 = i7;
    i15 = i7 + 36 | 0;
    i16 = HEAP32[i15 >> 2] | 0;
    do {
     if ((i16 | 0) == 0) {
      i17 = 26;
     } else {
      if ((HEAP32[i16 + 4 >> 2] | 0) == 0) {
       i17 = 26;
       break;
      }
      i18 = i7 + 28 | 0;
      i19 = HEAP32[i18 >> 2] | 0;
      L37 : do {
       if ((i19 | 0) != 0) {
        i20 = i19;
        while (1) {
         if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 76 >> 2] & 127](i20) | 0) != 3) {
          break L37;
         }
         i21 = i20;
         i22 = i20 + 8 | 0;
         HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
         i22 = HEAP32[i20 + 36 >> 2] | 0;
         do {
          if ((i22 | 0) == 0) {
           i17 = 36;
          } else {
           if ((HEAP32[i22 + 4 >> 2] | 0) == 0) {
            i17 = 36;
            break;
           }
           i23 = HEAP32[i15 >> 2] | 0;
           if ((i23 | 0) == 0) {
            i24 = 0;
           } else {
            i24 = HEAP32[i23 + 4 >> 2] | 0;
           }
           HEAP32[i4 >> 2] = i22;
           i23 = i22 | 0;
           HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
           HEAP32[i9 >> 2] = 0;
           __ZN7WebCore13CharacterData10appendDataERKN3WTF6StringERi(i13, i5, i9);
           i23 = HEAP32[i4 >> 2] | 0;
           do {
            if ((i23 | 0) != 0) {
             i25 = i23 | 0;
             i26 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
             if ((i26 | 0) == 0) {
              __ZN3WTF10StringImpl7destroyEPS0_(i23);
              break;
             } else {
              HEAP32[i25 >> 2] = i26;
              break;
             }
            }
           } while (0);
           __ZN7WebCore8Document15textNodesMergedEPNS_4TextEj(HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0, i21, i24);
           HEAP32[i12 >> 2] = 0;
           i23 = HEAP32[i20 + 16 >> 2] | 0;
           if ((i23 | 0) == 0) {
            break;
           }
           __ZN7WebCore13ContainerNode11removeChildEPNS_4NodeERi(i23, i20, i12) | 0;
          }
         } while (0);
         do {
          if ((i17 | 0) == 36) {
           i17 = 0;
           HEAP32[i3 >> 2] = 0;
           i21 = HEAP32[i20 + 16 >> 2] | 0;
           if ((i21 | 0) == 0) {
            break;
           }
           __ZN7WebCore13ContainerNode11removeChildEPNS_4NodeERi(i21, i20, i3) | 0;
          }
         } while (0);
         i21 = i20 + 8 | 0;
         i22 = i21 - 8 | 0;
         i23 = i21 | 0;
         i26 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
         HEAP32[i23 >> 2] = i26;
         do {
          if ((i26 | 0) < 1) {
           if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i22);
          }
         } while (0);
         i20 = HEAP32[i18 >> 2] | 0;
         if ((i20 | 0) == 0) {
          break;
         }
        }
       }
      } while (0);
      i18 = __ZN7WebCore13NodeTraversal13nextPostOrderEPKNS_4NodeES3_(i7, 0) | 0;
      if ((i18 | 0) != 0) {
       i19 = i18 + 8 | 0;
       HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
      }
      i19 = i7 + 8 | 0;
      i20 = i19 | 0;
      i22 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
      HEAP32[i20 >> 2] = i22;
      if ((i22 | 0) >= 1) {
       i27 = i18;
       break;
      }
      if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
       i27 = i18;
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
      i27 = i18;
     }
    } while (0);
    do {
     if ((i17 | 0) == 26) {
      i17 = 0;
      i13 = __ZN7WebCore13NodeTraversal13nextPostOrderEPKNS_4NodeES3_(i7, 0) | 0;
      if ((i13 | 0) != 0) {
       i15 = i13 + 8 | 0;
       HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
      }
      i15 = i7 + 8 | 0;
      i16 = i15 - 8 | 0;
      i11 = i15 | 0;
      i18 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
      HEAP32[i11 >> 2] = i18;
      do {
       if ((i18 | 0) < 1) {
        if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i16);
       }
      } while (0);
      HEAP32[i8 >> 2] = 0;
      i16 = HEAP32[i7 + 16 >> 2] | 0;
      if ((i16 | 0) == 0) {
       i27 = i13;
       break;
      }
      __ZN7WebCore13ContainerNode11removeChildEPNS_4NodeERi(i16, i7, i8) | 0;
      i27 = i13;
     }
    } while (0);
    if (!i14) {
     i28 = i27;
     break;
    }
    i16 = i7 + 8 | 0;
    i15 = i16 | 0;
    i18 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
    HEAP32[i15 >> 2] = i18;
    if ((i18 | 0) >= 1) {
     i28 = i27;
     break;
    }
    if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
     i28 = i27;
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
    i28 = i27;
   } else {
    i16 = __ZN7WebCore13NodeTraversal13nextPostOrderEPKNS_4NodeES3_(i7, 0) | 0;
    if ((i16 | 0) != 0) {
     i18 = i16 + 8 | 0;
     HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
    }
    i18 = i7 + 8 | 0;
    i15 = i18 | 0;
    i11 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
    HEAP32[i15 >> 2] = i11;
    if ((i11 | 0) >= 1) {
     i28 = i16;
     break;
    }
    if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
     i28 = i16;
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
    i28 = i16;
   }
  } while (0);
  if ((i28 | 0) == 0) {
   i17 = 65;
   break;
  } else {
   i7 = i28;
  }
 }
 if ((i17 | 0) == 65) {
  STACKTOP = i2;
  return;
 }
 i17 = i1 + 8 | 0;
 i1 = i17 | 0;
 i28 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i28;
 if ((i28 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = __ZN7WebCore4Node15eventTargetDataEv(i1) | 0;
 do {
  if ((i6 | 0) != 0) {
   if ((HEAP32[i6 + 8 >> 2] | 0) == 0) {
    break;
   }
   __ZNK7WebCore16EventListenerMap10eventTypesEv(i4, i6 | 0);
   i7 = i4 + 8 | 0;
   do {
    if ((HEAP32[i7 >> 2] | 0) == 0) {
     i8 = i4 | 0;
    } else {
     i9 = i1 + 20 | 0;
     i10 = i4 | 0;
     i11 = 0;
     while (1) {
      __ZN7WebCore8Document23addListenerTypeIfNeededERKN3WTF12AtomicStringE(HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] | 0, (HEAP32[i10 >> 2] | 0) + (i11 << 2) | 0);
      i11 = i11 + 1 | 0;
      i12 = HEAP32[i7 >> 2] | 0;
      if (i11 >>> 0 >= i12 >>> 0) {
       break;
      }
     }
     if ((i12 | 0) == 0) {
      i8 = i10;
      break;
     }
     i11 = HEAP32[i10 >> 2] | 0;
     i9 = i11 + (i12 << 2) | 0;
     i13 = i11;
     while (1) {
      i11 = HEAP32[i13 >> 2] | 0;
      do {
       if ((i11 | 0) != 0) {
        i14 = i11 | 0;
        i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
        if ((i15 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i11);
         break;
        } else {
         HEAP32[i14 >> 2] = i15;
         break;
        }
       }
      } while (0);
      i13 = i13 + 4 | 0;
      if ((i13 | 0) == (i9 | 0)) {
       break;
      }
     }
     HEAP32[i7 >> 2] = 0;
     i8 = i10;
    }
   } while (0);
   i7 = HEAP32[i8 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   HEAP32[i8 >> 2] = 0;
   HEAP32[i4 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i7);
  }
 } while (0);
 i4 = i1 | 0;
 i8 = (__ZN7WebCore11EventTarget17getEventListenersERKN3WTF12AtomicStringE(i4, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 260 | 0) | 0) + 8 | 0;
 if ((HEAP32[i8 >> 2] | 0) != 0) {
  i12 = i1 + 20 | 0;
  i6 = 0;
  while (1) {
   __ZN7WebCore8Document26didRemoveWheelEventHandlerEv(i2);
   __ZN7WebCore8Document23didAddWheelEventHandlerEv(HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] | 0);
   i6 = i6 + 1 | 0;
   if (i6 >>> 0 >= (HEAP32[i8 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 i8 = (__ZN7WebCore11EventTarget17getEventListenersERKN3WTF12AtomicStringE(i4, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 368 | 0) | 0) + 8 | 0;
 if ((HEAP32[i8 >> 2] | 0) != 0) {
  i6 = i1 + 20 | 0;
  i12 = 0;
  while (1) {
   __ZN7WebCore8Document26didRemoveWheelEventHandlerEv(i2);
   __ZN7WebCore8Document23didAddWheelEventHandlerEv(HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0);
   i12 = i12 + 1 | 0;
   if (i12 >>> 0 >= (HEAP32[i8 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 __ZNK7WebCore10EventNames15touchEventNamesEv(i5, HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0);
 i8 = i5 + 8 | 0;
 if ((HEAP32[i8 >> 2] | 0) != 0) {
  i12 = i5 | 0;
  i6 = i1 + 20 | 0;
  i7 = 0;
  while (1) {
   i9 = (__ZN7WebCore11EventTarget17getEventListenersERKN3WTF12AtomicStringE(i4, (HEAP32[i12 >> 2] | 0) + (i7 << 2) | 0) | 0) + 8 | 0;
   if ((HEAP32[i9 >> 2] | 0) != 0) {
    i13 = 0;
    while (1) {
     __ZN7WebCore8Document26didRemoveTouchEventHandlerEPNS_4NodeE(i2, i1);
     __ZN7WebCore8Document23didAddTouchEventHandlerEPNS_4NodeE(HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0, i1);
     i13 = i13 + 1 | 0;
     if (i13 >>> 0 >= (HEAP32[i9 >> 2] | 0) >>> 0) {
      break;
     }
    }
   }
   i7 = i7 + 1 | 0;
   if (i7 >>> 0 >= (HEAP32[i8 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 i7 = i1 + 12 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 & 2048 | 0) == 0) {
   i16 = i6;
  } else {
   i2 = HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 12 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i16 = i6;
    break;
   }
   i12 = i2 + 8 | 0;
   if ((HEAP32[i12 >> 2] | 0) == 0) {
    i16 = i6;
    break;
   }
   i4 = i1 + 20 | 0;
   i9 = i2 | 0;
   i2 = 0;
   while (1) {
    i13 = (HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0) + 770 | 0;
    HEAP8[i13] = HEAP8[i13] | HEAP8[(HEAP32[(HEAP32[i9 >> 2] | 0) + (i2 << 2) >> 2] | 0) + 16 | 0] & 7;
    i2 = i2 + 1 | 0;
    if (i2 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
     break;
    }
   }
   i16 = HEAP32[i7 >> 2] | 0;
  }
 } while (0);
 L50 : do {
  if ((i16 & 2048 | 0) != 0) {
   i7 = HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 12 >> 2] | 0;
   i6 = (i7 | 0) == 0 ? 0 : i7 + 12 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i7 = i6 | 0;
   i12 = HEAP32[i7 >> 2] | 0;
   i2 = i6 + 4 | 0;
   i9 = HEAP32[i2 >> 2] | 0;
   i4 = i12 + (i9 << 2) | 0;
   if ((HEAP32[i6 + 12 >> 2] | 0) == 0) {
    break;
   }
   L54 : do {
    if ((i9 | 0) == 0) {
     i17 = i12;
    } else {
     i6 = i12;
     while (1) {
      i13 = HEAP32[i6 >> 2] | 0;
      if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
       i17 = i6;
       break L54;
      }
      i6 = i6 + 4 | 0;
      if ((i6 | 0) == (i4 | 0)) {
       break L50;
      }
     }
    }
   } while (0);
   if ((i17 | 0) == (i4 | 0)) {
    break;
   }
   i12 = i1 + 20 | 0;
   i9 = i17;
   while (1) {
    i6 = (HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] | 0) + 770 | 0;
    HEAP8[i6] = HEAP8[i6] | HEAP8[(HEAP32[i9 >> 2] | 0) + 16 | 0] & 7;
    i6 = i9 + 4 | 0;
    L62 : do {
     if ((i6 | 0) == (i4 | 0)) {
      i18 = i4;
     } else {
      i10 = i6;
      while (1) {
       i13 = HEAP32[i10 >> 2] | 0;
       if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
        i18 = i10;
        break L62;
       }
       i13 = i10 + 4 | 0;
       if ((i13 | 0) == (i4 | 0)) {
        i18 = i4;
        break;
       } else {
        i10 = i13;
       }
      }
     }
    } while (0);
    if ((i18 | 0) == ((HEAP32[i7 >> 2] | 0) + (HEAP32[i2 >> 2] << 2) | 0)) {
     break;
    } else {
     i9 = i18;
    }
   }
  }
 } while (0);
 i18 = HEAP32[i8 >> 2] | 0;
 i17 = i5 | 0;
 if ((i18 | 0) != 0) {
  i1 = HEAP32[i17 >> 2] | 0;
  i16 = i1 + (i18 << 2) | 0;
  i18 = i1;
  while (1) {
   i1 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i9 = i1 | 0;
     i2 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i2 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i1);
      break;
     } else {
      HEAP32[i9 >> 2] = i2;
      break;
     }
    }
   } while (0);
   i18 = i18 + 4 | 0;
   if ((i18 | 0) == (i16 | 0)) {
    break;
   }
  }
  HEAP32[i8 >> 2] = 0;
 }
 i8 = HEAP32[i17 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i17 >> 2] = 0;
 HEAP32[i5 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i8);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((HEAP32[i2 + 32 >> 2] | 0) != (i1 | 0)) {
  STACKTOP = i3;
  return;
 }
 i5 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 i6 = i2 + 12 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) != (HEAP32[i5 + 196 >> 2] | 0)) {
   if ((i7 | 0) == (HEAP32[i5 + 200 >> 2] | 0)) {
    break;
   }
   if ((i7 | 0) == (HEAP32[i5 + 56 >> 2] | 0)) {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 127](i2) | 0) {
     i8 = HEAP32[i2 + 56 >> 2] | 0;
     i9 = i4 | 0;
     HEAP32[i9 >> 2] = i2;
     i10 = i8;
     i11 = i9;
     i12 = 11;
    } else {
     i9 = i4 | 0;
     HEAP32[i9 >> 2] = i2;
     if ((i2 | 0) == 0) {
      i13 = 0;
      i14 = i9;
     } else {
      i10 = 0;
      i11 = i9;
      i12 = 11;
     }
    }
    if ((i12 | 0) == 11) {
     i9 = i2 + 8 | 0;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
     i13 = i10;
     i14 = i11;
    }
    i9 = __ZN7WebCore4Node24dispatchDOMActivateEventEiN3WTF10PassRefPtrINS_5EventEEE(i1, i13, i4) | 0;
    i8 = HEAP32[i14 >> 2] | 0;
    do {
     if ((i8 | 0) != 0) {
      i15 = i8 + 8 | 0;
      i16 = i15 | 0;
      i17 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
      if ((i17 | 0) != 0) {
       HEAP32[i16 >> 2] = i17;
       break;
      }
      i17 = i15 - 8 | 0;
      if ((i17 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 31](i17);
     }
    } while (0);
    if (!i9) {
     STACKTOP = i3;
     return;
    }
    HEAP8[i2 + 21 | 0] = 1;
    STACKTOP = i3;
    return;
   }
   if ((i7 | 0) == (HEAP32[i5 + 84 >> 2] | 0)) {
    i8 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
    if ((i8 | 0) == 0) {
     STACKTOP = i3;
     return;
    }
    i17 = HEAP32[i8 + 32 >> 2] | 0;
    if ((i17 | 0) == 0) {
     STACKTOP = i3;
     return;
    }
    __ZN7WebCore21ContextMenuController22handleContextMenuEventEPNS_5EventE(HEAP32[i17 + 36 >> 2] | 0, i2);
    STACKTOP = i3;
    return;
   }
   if ((i7 | 0) == (HEAP32[i5 + 344 >> 2] | 0)) {
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 127](i2) | 0) != 18) {
     STACKTOP = i3;
     return;
    }
    i17 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
    if ((i17 | 0) == 0) {
     STACKTOP = i3;
     return;
    }
    __ZN7WebCore12EventHandler28defaultTextInputEventHandlerEPNS_9TextEventE(HEAP32[i17 + 472 >> 2] | 0, i2);
    STACKTOP = i3;
    return;
   }
   if ((i7 | 0) == (HEAP32[i5 + 368 >> 2] | 0)) {
    i12 = 29;
   } else {
    if ((i7 | 0) == (HEAP32[i5 + 260 >> 2] | 0)) {
     i12 = 29;
    } else {
     i18 = i7;
    }
   }
   do {
    if ((i12 | 0) == 29) {
     if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 127](i2) | 0) != 23) {
      i18 = HEAP32[i6 >> 2] | 0;
      break;
     }
     i17 = i2;
     if ((i1 | 0) == 0) {
      STACKTOP = i3;
      return;
     } else {
      i19 = i1;
     }
     while (1) {
      i8 = HEAP32[i19 + 12 >> 2] | 0;
      i20 = (i8 & 2048 | 0) == 0;
      i21 = i19 + 32 | 0;
      if (i20) {
       i22 = i21 | 0;
      } else {
       i22 = HEAP32[i21 >> 2] | 0;
      }
      if ((HEAP32[i22 >> 2] | 0) != 0) {
       break;
      }
      do {
       if ((i8 & 4096 | 0) == 0) {
        i12 = 39;
       } else {
        if ((HEAP32[(HEAP32[i19 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i19 | 0)) {
         i12 = 39;
         break;
        }
        i23 = HEAP32[i19 + 92 >> 2] | 0;
       }
      } while (0);
      if ((i12 | 0) == 39) {
       i12 = 0;
       i23 = HEAP32[i19 + 16 >> 2] | 0;
      }
      if ((i23 | 0) == 0) {
       i12 = 68;
       break;
      } else {
       i19 = i23 | 0;
      }
     }
     if ((i12 | 0) == 68) {
      STACKTOP = i3;
      return;
     }
     if (i20) {
      i24 = i21 | 0;
     } else {
      i24 = HEAP32[i21 >> 2] | 0;
     }
     if ((HEAP32[i24 >> 2] | 0) == 0) {
      STACKTOP = i3;
      return;
     }
     i8 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
     if ((i8 | 0) == 0) {
      STACKTOP = i3;
      return;
     }
     __ZN7WebCore12EventHandler24defaultWheelEventHandlerEPNS_4NodeEPNS_10WheelEventE(HEAP32[i8 + 472 >> 2] | 0, i19, i17);
     STACKTOP = i3;
     return;
    }
   } while (0);
   if ((i18 | 0) != (HEAP32[(HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 432 >> 2] | 0)) {
    STACKTOP = i3;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 216 >> 2] & 31](i1);
   STACKTOP = i3;
   return;
  }
 } while (0);
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] & 127](i2) | 0)) {
  STACKTOP = i3;
  return;
 }
 i18 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i18 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore12EventHandler27defaultKeyboardEventHandlerEPNS_13KeyboardEventE(HEAP32[i18 + 472 >> 2] | 0, i2);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore10EventNames15touchEventNamesEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i3 = i1 | 0;
 i4 = i1 + 4 | 0;
 i5 = i1 + 8 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = __ZN3WTF18fastMallocGoodSizeEj(16) | 0;
 i7 = i6 >>> 2;
 HEAP32[i4 >> 2] = i7;
 i8 = __ZN3WTF10fastMallocEj(i6) | 0;
 i6 = i8;
 HEAP32[i3 >> 2] = i6;
 i9 = i2 + 632 | 0;
 do {
  if ((i7 | 0) == 0) {
   __ZN3WTF6VectorINS_12AtomicStringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, 1);
   i10 = HEAP32[i3 >> 2] | 0;
   i11 = HEAP32[i5 >> 2] | 0;
   i12 = HEAP32[i9 >> 2] | 0;
   HEAP32[i10 + (i11 << 2) >> 2] = i12;
   if ((i12 | 0) == 0) {
    i13 = i11;
    i14 = i10;
    break;
   }
   i15 = i12 | 0;
   HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
   i13 = i11;
   i14 = i10;
  } else {
   i10 = HEAP32[i9 >> 2] | 0;
   HEAP32[i8 >> 2] = i10;
   if ((i10 | 0) == 0) {
    i13 = 0;
    i14 = i6;
    break;
   }
   i11 = i10 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
   i13 = 0;
   i14 = i6;
  }
 } while (0);
 i6 = i13 + 1 | 0;
 HEAP32[i5 >> 2] = i6;
 i8 = i2 + 636 | 0;
 do {
  if ((i6 | 0) == (HEAP32[i4 >> 2] | 0)) {
   i9 = i13 + 2 | 0;
   do {
    if (i14 >>> 0 > i8 >>> 0) {
     i16 = 11;
    } else {
     if ((i14 + (i6 << 2) | 0) >>> 0 <= i8 >>> 0) {
      i16 = 11;
      break;
     }
     __ZN3WTF6VectorINS_12AtomicStringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i9);
     i7 = HEAP32[i3 >> 2] | 0;
     i17 = i7 + (i8 - i14 >> 2 << 2) | 0;
     i18 = i7;
    }
   } while (0);
   if ((i16 | 0) == 11) {
    __ZN3WTF6VectorINS_12AtomicStringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i9);
    i17 = i8;
    i18 = HEAP32[i3 >> 2] | 0;
   }
   i7 = HEAP32[i5 >> 2] | 0;
   i11 = HEAP32[i17 >> 2] | 0;
   HEAP32[i18 + (i7 << 2) >> 2] = i11;
   if ((i11 | 0) == 0) {
    i19 = i7;
    i20 = i18;
    break;
   }
   i10 = i11 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i19 = i7;
   i20 = i18;
  } else {
   i7 = HEAP32[i8 >> 2] | 0;
   HEAP32[i14 + (i6 << 2) >> 2] = i7;
   if ((i7 | 0) == 0) {
    i19 = i6;
    i20 = i14;
    break;
   }
   i10 = i7 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i19 = i6;
   i20 = i14;
  }
 } while (0);
 i14 = i19 + 1 | 0;
 HEAP32[i5 >> 2] = i14;
 i6 = i2 + 640 | 0;
 do {
  if ((i14 | 0) == (HEAP32[i4 >> 2] | 0)) {
   i8 = i19 + 2 | 0;
   do {
    if (i20 >>> 0 > i6 >>> 0) {
     i16 = 20;
    } else {
     if ((i20 + (i14 << 2) | 0) >>> 0 <= i6 >>> 0) {
      i16 = 20;
      break;
     }
     __ZN3WTF6VectorINS_12AtomicStringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i8);
     i18 = HEAP32[i3 >> 2] | 0;
     i21 = i18 + (i6 - i20 >> 2 << 2) | 0;
     i22 = i18;
    }
   } while (0);
   if ((i16 | 0) == 20) {
    __ZN3WTF6VectorINS_12AtomicStringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i8);
    i21 = i6;
    i22 = HEAP32[i3 >> 2] | 0;
   }
   i9 = HEAP32[i5 >> 2] | 0;
   i18 = HEAP32[i21 >> 2] | 0;
   HEAP32[i22 + (i9 << 2) >> 2] = i18;
   if ((i18 | 0) == 0) {
    i23 = i9;
    i24 = i22;
    break;
   }
   i17 = i18 | 0;
   HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
   i23 = i9;
   i24 = i22;
  } else {
   i9 = HEAP32[i6 >> 2] | 0;
   HEAP32[i20 + (i14 << 2) >> 2] = i9;
   if ((i9 | 0) == 0) {
    i23 = i14;
    i24 = i20;
    break;
   }
   i17 = i9 | 0;
   HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
   i23 = i14;
   i24 = i20;
  }
 } while (0);
 i20 = i23 + 1 | 0;
 HEAP32[i5 >> 2] = i20;
 i14 = i2 + 644 | 0;
 if ((i20 | 0) != (HEAP32[i4 >> 2] | 0)) {
  i4 = HEAP32[i14 >> 2] | 0;
  HEAP32[i24 + (i20 << 2) >> 2] = i4;
  if ((i4 | 0) == 0) {
   i25 = i20;
   i26 = i25 + 1 | 0;
   HEAP32[i5 >> 2] = i26;
   return;
  }
  i2 = i4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
  i25 = i20;
  i26 = i25 + 1 | 0;
  HEAP32[i5 >> 2] = i26;
  return;
 }
 i2 = i23 + 2 | 0;
 do {
  if (i24 >>> 0 > i14 >>> 0) {
   i16 = 29;
  } else {
   if ((i24 + (i20 << 2) | 0) >>> 0 <= i14 >>> 0) {
    i16 = 29;
    break;
   }
   __ZN3WTF6VectorINS_12AtomicStringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2);
   i23 = HEAP32[i3 >> 2] | 0;
   i27 = i23 + (i14 - i24 >> 2 << 2) | 0;
   i28 = i23;
  }
 } while (0);
 if ((i16 | 0) == 29) {
  __ZN3WTF6VectorINS_12AtomicStringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2);
  i27 = i14;
  i28 = HEAP32[i3 >> 2] | 0;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 i14 = HEAP32[i27 >> 2] | 0;
 HEAP32[i28 + (i3 << 2) >> 2] = i14;
 if ((i14 | 0) == 0) {
  i25 = i3;
  i26 = i25 + 1 | 0;
  HEAP32[i5 >> 2] = i26;
  return;
 }
 i28 = i14 | 0;
 HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 2;
 i25 = i3;
 i26 = i25 + 1 | 0;
 HEAP32[i5 >> 2] = i26;
 return;
}
function __ZNK7WebCore4Node11isEqualNodeEPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 if ((i2 | 0) == 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 76 >> 2] & 127](i1) | 0;
 if ((i9 | 0) != (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 76 >> 2] & 127](i2) | 0)) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i10 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 64 >> 2] & 31](i4, i1);
 i11 = i2;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 64 >> 2] & 31](i5, i2);
 i12 = i4 | 0;
 i4 = i5 | 0;
 i5 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i12 >> 2] | 0, HEAP32[i4 >> 2] | 0) | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i4 = i13 | 0;
   i14 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i4 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i12 = i13 | 0;
   i14 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i12 >> 2] = i14;
    break;
   }
  }
 } while (0);
 if (!i5) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i5 = i1;
 i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 88 >> 2] & 127](i1) | 0;
 i14 = i2;
 i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 88 >> 2] & 127](i2) | 0;
 if ((HEAP32[i13 >> 2] | 0) != (HEAP32[i12 >> 2] | 0)) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 92 >> 2] & 127](i1) | 0;
 i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 92 >> 2] & 127](i2) | 0;
 if ((HEAP32[i12 >> 2] | 0) != (HEAP32[i13 >> 2] | 0)) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 96 >> 2] & 127](i1) | 0;
 i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 96 >> 2] & 127](i2) | 0;
 if ((HEAP32[i13 >> 2] | 0) != (HEAP32[i5 >> 2] | 0)) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 68 >> 2] & 31](i6, i1);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 68 >> 2] & 31](i7, i2);
 i11 = i6 | 0;
 i6 = i7 | 0;
 i7 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i11 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0;
 i10 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i6 = i10 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i6 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i11 = i10 | 0;
   i5 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i11 >> 2] = i5;
    break;
   }
  }
 } while (0);
 if (!i7) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i7 = i1 + 12 | 0;
 i10 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i10 & 4 | 0) == 0) {
   i15 = i10;
  } else {
   if (__ZNK7WebCore7Element23hasEquivalentAttributesEPKS0_(i1, i2) | 0) {
    i15 = HEAP32[i7 >> 2] | 0;
    break;
   } else {
    i8 = 0;
    STACKTOP = i3;
    return i8 | 0;
   }
  }
 } while (0);
 if ((i15 & 2 | 0) == 0) {
  i16 = 0;
 } else {
  i16 = HEAP32[i1 + 36 >> 2] | 0;
 }
 if ((HEAP32[i2 + 12 >> 2] & 2 | 0) == 0) {
  i17 = 0;
 } else {
  i17 = HEAP32[i2 + 36 >> 2] | 0;
 }
 L58 : do {
  if ((i16 | 0) == 0) {
   i18 = i17;
  } else {
   i15 = i17;
   i7 = i16;
   while (1) {
    if (!(__ZNK7WebCore4Node11isEqualNodeEPS0_(i7, i15) | 0)) {
     i8 = 0;
     break;
    }
    i10 = HEAP32[i7 + 28 >> 2] | 0;
    i5 = HEAP32[i15 + 28 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i18 = i5;
     break L58;
    } else {
     i15 = i5;
     i7 = i10;
    }
   }
   STACKTOP = i3;
   return i8 | 0;
  }
 } while (0);
 if ((i18 | 0) != 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 do {
  if ((i9 | 0) == 10) {
   if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i1 + 48 >> 2] | 0, HEAP32[i2 + 48 >> 2] | 0) | 0)) {
    i8 = 0;
    STACKTOP = i3;
    return i8 | 0;
   }
   if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i1 + 52 >> 2] | 0, HEAP32[i2 + 52 >> 2] | 0) | 0)) {
    i8 = 0;
    STACKTOP = i3;
    return i8 | 0;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i1 + 56 >> 2] | 0, HEAP32[i2 + 56 >> 2] | 0) | 0) {
    break;
   } else {
    i8 = 0;
   }
   STACKTOP = i3;
   return i8 | 0;
  }
 } while (0);
 i8 = 1;
 STACKTOP = i3;
 return i8 | 0;
}
function __ZN7WebCore4Node24registerMutationObserverEPNS_16MutationObserverEhRKN3WTF7HashSetINS3_12AtomicStringENS3_16AtomicStringHashENS3_10HashTraitsIS5_EEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i1 + 12 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 & 2048 | 0) == 0) {
  i11 = i1 + 32 | 0;
  i12 = HEAP32[i11 >> 2] | 0;
  if ((i10 & 4 | 0) == 0) {
   i10 = __ZN3WTF10fastMallocEj(16) | 0;
   HEAP32[i10 >> 2] = i12;
   i13 = i10 + 4 | 0;
   HEAP32[i13 >> 2] = HEAP32[i13 >> 2] & -1024;
   HEAP32[i10 + 8 >> 2] = 0;
   HEAP32[i10 + 12 >> 2] = 0;
   i14 = i10;
  } else {
   i10 = __ZN3WTF10fastMallocEj(72) | 0;
   HEAP32[i10 >> 2] = i12;
   i12 = i10 + 4 | 0;
   HEAP32[i12 >> 2] = HEAP32[i12 >> 2] & -1024;
   i12 = i10 + 20 | 0;
   _memset(i10 + 8 | 0, 0, 12) | 0;
   HEAP32[i12 >> 2] = HEAP32[i12 >> 2] & -8192;
   HEAP32[i10 + 24 >> 2] = 0;
   HEAP32[i10 + 28 >> 2] = 2147483647;
   HEAP32[i10 + 32 >> 2] = 2147483647;
   _memset(i10 + 36 | 0, 0, 36) | 0;
   i14 = i10;
  }
  HEAP32[i11 >> 2] = i14;
  HEAP32[i9 >> 2] = HEAP32[i9 >> 2] | 2048;
  i15 = i14;
 } else {
  i15 = HEAP32[i1 + 32 >> 2] | 0;
 }
 i14 = i15 + 12 | 0;
 i15 = i14 | 0;
 i9 = HEAP32[i15 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i11 = __ZN3WTF10fastMallocEj(32) | 0;
  _memset(i11 | 0, 0, 32) | 0;
  HEAP32[i6 >> 2] = i11;
  __ZN3WTF6OwnPtrIN7WebCore24NodeMutationObserverDataEEaSERKNS_10PassOwnPtrIS2_EE(i14, i6) | 0;
  __ZN3WTF10PassOwnPtrIN7WebCore24NodeMutationObserverDataEED2Ev(i6);
  i16 = HEAP32[i15 >> 2] | 0;
 } else {
  i16 = i9;
 }
 i9 = i16 | 0;
 i15 = i16 + 8 | 0;
 i6 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i14 = i16 | 0;
   i11 = 0;
   i10 = 0;
   i12 = i6;
   while (1) {
    i13 = HEAP32[(HEAP32[i14 >> 2] | 0) + (i10 << 2) >> 2] | 0;
    if ((HEAP32[i13 >> 2] | 0) == (i2 | 0)) {
     __ZN7WebCore28MutationObserverRegistration16resetObservationEhRKN3WTF7HashSetINS1_12AtomicStringENS1_16AtomicStringHashENS1_10HashTraitsIS3_EEEE(i13, i3, i4);
     i17 = i13;
     i18 = HEAP32[i15 >> 2] | 0;
    } else {
     i17 = i11;
     i18 = i12;
    }
    i13 = i10 + 1 | 0;
    if (i13 >>> 0 < i18 >>> 0) {
     i11 = i17;
     i10 = i13;
     i12 = i18;
    } else {
     break;
    }
   }
   if ((i17 | 0) == 0) {
    break;
   } else {
    i19 = i17;
   }
   i20 = i1 + 20 | 0;
   i21 = HEAP32[i20 >> 2] | 0;
   i22 = i21 + 8 | 0;
   i23 = HEAP32[i22 >> 2] | 0;
   i24 = i19 + 16 | 0;
   i25 = HEAP8[i24] | 0;
   i26 = i25 & 7;
   i27 = i23 + 770 | 0;
   i28 = HEAP8[i27] | 0;
   i29 = i28 | i26;
   HEAP8[i27] = i29;
   STACKTOP = i5;
   return;
  }
 } while (0);
 i17 = i8 | 0;
 HEAP32[i17 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i18 = i2 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
 }
 __ZN7WebCore28MutationObserverRegistration6createEN3WTF10PassRefPtrINS_16MutationObserverEEEPNS_4NodeEhRKNS1_7HashSetINS1_12AtomicStringENS1_16AtomicStringHashENS1_10HashTraitsIS8_EEEE(i7, i8, i1, i3, i4);
 i4 = HEAP32[i15 >> 2] | 0;
 if ((i4 | 0) == (HEAP32[i16 + 4 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6OwnPtrIN7WebCore28MutationObserverRegistrationEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i9, i4 + 1 | 0);
  i9 = (HEAP32[i16 >> 2] | 0) + (HEAP32[i15 >> 2] << 2) | 0;
  i3 = i7 | 0;
  i8 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i9 >> 2] = i8;
 } else {
  i8 = (HEAP32[i16 >> 2] | 0) + (i4 << 2) | 0;
  i4 = i7 | 0;
  i9 = HEAP32[i4 >> 2] | 0;
  HEAP32[i4 >> 2] = 0;
  HEAP32[i8 >> 2] = i9;
 }
 HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 i9 = HEAP32[i7 >> 2] | 0;
 if ((i9 | 0) != 0) {
  __ZN7WebCore28MutationObserverRegistrationD1Ev(i9);
  __ZdlPv(i9);
 }
 i9 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i17 = i9 | 0;
   i7 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) == 0) {
    __ZN7WebCore16MutationObserverD1Ev(i9);
    __ZN3WTF8fastFreeEPv(i9);
    break;
   } else {
    HEAP32[i17 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i9 = _llvm_uadd_with_overflow_i32(HEAP32[i15 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i19 = HEAP32[(HEAP32[i16 >> 2] | 0) + (i9 << 2) >> 2] | 0;
 i20 = i1 + 20 | 0;
 i21 = HEAP32[i20 >> 2] | 0;
 i22 = i21 + 8 | 0;
 i23 = HEAP32[i22 >> 2] | 0;
 i24 = i19 + 16 | 0;
 i25 = HEAP8[i24] | 0;
 i26 = i25 & 7;
 i27 = i23 + 770 | 0;
 i28 = HEAP8[i27] | 0;
 i29 = i28 | i26;
 HEAP8[i27] = i29;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore8Document37invalidateNodeListAndCollectionCachesEPKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = HEAP32[i1 + 1316 >> 2] | 0;
 i4 = HEAP32[i1 + 1320 >> 2] | 0;
 i5 = i3 + (i4 << 2) | 0;
 L1 : do {
  if ((HEAP32[i1 + 1328 >> 2] | 0) != 0) {
   L3 : do {
    if ((i4 | 0) == 0) {
     i6 = i3;
    } else {
     i7 = i3;
     while (1) {
      i8 = HEAP32[i7 >> 2] | 0;
      if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
       i6 = i7;
       break L3;
      }
      i7 = i7 + 4 | 0;
      if ((i7 | 0) == (i5 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i6 | 0) == (i5 | 0)) {
    break;
   }
   i7 = i2 | 0;
   if ((i2 | 0) == 0) {
    i8 = i6;
    while (1) {
     __ZNK7WebCore12LiveNodeList15invalidateCacheEv(HEAP32[i8 >> 2] | 0);
     i9 = i8 + 4 | 0;
     if ((i9 | 0) == (i5 | 0)) {
      break L1;
     } else {
      i10 = i9;
     }
     while (1) {
      i9 = HEAP32[i10 >> 2] | 0;
      if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
       break;
      }
      i9 = i10 + 4 | 0;
      if ((i9 | 0) == (i5 | 0)) {
       break L1;
      } else {
       i10 = i9;
      }
     }
     if ((i10 | 0) == (i5 | 0)) {
      break L1;
     } else {
      i8 = i10;
     }
    }
   } else {
    i11 = i6;
   }
   while (1) {
    i8 = HEAP32[i11 >> 2] | 0;
    switch ((HEAP32[i8 + 32 >> 2] | 0) >>> 2 & 15 | 0) {
    case 5:
     {
      i9 = HEAP32[i7 >> 2] | 0;
      if ((i9 | 0) == (HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0) | (i9 | 0) == (HEAP32[__ZN7WebCore9HTMLNames6idAttrE >> 2] | 0) | (i9 | 0) == (HEAP32[__ZN7WebCore9HTMLNames7forAttrE >> 2] | 0) | (i9 | 0) == (HEAP32[__ZN7WebCore9HTMLNames8formAttrE >> 2] | 0) | (i9 | 0) == (HEAP32[__ZN7WebCore9HTMLNames8typeAttrE >> 2] | 0)) {
       i12 = 18;
      }
      break;
     }
    case 3:
     {
      if ((HEAP32[i7 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0)) {
       i12 = 18;
      }
      break;
     }
    case 2:
     {
      i9 = HEAP32[i7 >> 2] | 0;
      if ((i9 | 0) == (HEAP32[__ZN7WebCore9HTMLNames6idAttrE >> 2] | 0) | (i9 | 0) == (HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0)) {
       i12 = 18;
      }
      break;
     }
    case 7:
     {
      i12 = 18;
      break;
     }
    case 4:
     {
      if ((HEAP32[i7 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames7forAttrE >> 2] | 0)) {
       i12 = 18;
      }
      break;
     }
    case 6:
     {
      if ((HEAP32[i7 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames8hrefAttrE >> 2] | 0)) {
       i12 = 18;
      }
      break;
     }
    case 1:
     {
      if ((HEAP32[i7 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames9classAttrE >> 2] | 0)) {
       i12 = 18;
      }
      break;
     }
    default:
     {}
    }
    if ((i12 | 0) == 18) {
     i12 = 0;
     __ZNK7WebCore12LiveNodeList15invalidateCacheEv(i8);
    }
    i8 = i11 + 4 | 0;
    if ((i8 | 0) == (i5 | 0)) {
     break L1;
    } else {
     i13 = i8;
    }
    while (1) {
     i8 = HEAP32[i13 >> 2] | 0;
     if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
      break;
     }
     i8 = i13 + 4 | 0;
     if ((i8 | 0) == (i5 | 0)) {
      break L1;
     } else {
      i13 = i8;
     }
    }
    if ((i13 | 0) == (i5 | 0)) {
     break L1;
    } else {
     i11 = i13;
    }
   }
  }
 } while (0);
 i13 = HEAP32[i1 + 1336 >> 2] | 0;
 i11 = HEAP32[i1 + 1340 >> 2] | 0;
 i5 = i13 + (i11 << 2) | 0;
 if ((HEAP32[i1 + 1348 >> 2] | 0) == 0) {
  return;
 }
 L36 : do {
  if ((i11 | 0) == 0) {
   i14 = i13;
  } else {
   i1 = i13;
   while (1) {
    i6 = HEAP32[i1 >> 2] | 0;
    if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
     i14 = i1;
     break L36;
    }
    i1 = i1 + 4 | 0;
    if ((i1 | 0) == (i5 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i14 | 0) == (i5 | 0)) {
  return;
 } else {
  i15 = i14;
 }
 L44 : while (1) {
  __ZNK7WebCore14HTMLCollection15invalidateCacheEPKNS_13QualifiedNameE(HEAP32[i15 >> 2] | 0, i2);
  i14 = i15 + 4 | 0;
  if ((i14 | 0) == (i5 | 0)) {
   i12 = 37;
   break;
  } else {
   i16 = i14;
  }
  while (1) {
   i14 = HEAP32[i16 >> 2] | 0;
   if (!((i14 | 0) == (-1 | 0) | (i14 | 0) == 0)) {
    break;
   }
   i14 = i16 + 4 | 0;
   if ((i14 | 0) == (i5 | 0)) {
    i12 = 34;
    break L44;
   } else {
    i16 = i14;
   }
  }
  if ((i16 | 0) == (i5 | 0)) {
   i12 = 38;
   break;
  } else {
   i15 = i16;
  }
 }
 if ((i12 | 0) == 34) {
  return;
 } else if ((i12 | 0) == 37) {
  return;
 } else if ((i12 | 0) == 38) {
  return;
 }
}
function __ZN7WebCore4Node36getRegisteredMutationObserversOfTypeERN3WTF7HashMapIPNS_16MutationObserverEhNS1_7PtrHashIS4_EENS1_10HashTraitsIS4_EENS7_IhEEEENS3_12MutationTypeEPKNS_13QualifiedNameE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 24 | 0;
 i9 = i5 + 32 | 0;
 i10 = i5 + 40 | 0;
 i11 = i5 + 56 | 0;
 i12 = i1 + 12 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 if ((i13 & 2048 | 0) == 0) {
  i14 = 0;
 } else {
  i14 = HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 12 >> 2] | 0;
 }
 do {
  if ((i14 | 0) == 0) {
   i15 = i13;
  } else {
   i16 = i14 | 0;
   i17 = i14 + 8 | 0;
   if ((HEAP32[i17 >> 2] | 0) == 0) {
    i15 = i13;
    break;
   }
   i18 = i2 | 0;
   i19 = i10 + 8 | 0;
   i20 = i10 | 0;
   i21 = HEAP32[i16 >> 2] | 0;
   while (1) {
    i22 = HEAP32[i21 >> 2] | 0;
    do {
     if (__ZNK7WebCore28MutationObserverRegistration25shouldReceiveMutationFromEPNS_4NodeENS_16MutationObserver12MutationTypeEPKNS_13QualifiedNameE(i22, i1, i3, i4) | 0) {
      HEAP8[i9] = HEAP8[i22 + 16 | 0] & 96;
      HEAP32[i11 >> 2] = HEAP32[i22 >> 2];
      __ZN3WTF9HashTableIPN7WebCore16MutationObserverENS_12KeyValuePairIS3_hEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_hS9_NS_10HashTraitsIS3_EENSB_IhEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EES3_RhEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i10, i18, i11, i9);
      if ((HEAP8[i19] & 1) != 0) {
       break;
      }
      i23 = (HEAP32[i20 >> 2] | 0) + 4 | 0;
      HEAP8[i23] = HEAP8[i23] | HEAP8[i9];
     }
    } while (0);
    i21 = i21 + 4 | 0;
    if ((i21 | 0) == ((HEAP32[i16 >> 2] | 0) + (HEAP32[i17 >> 2] << 2) | 0)) {
     break;
    }
   }
   i15 = HEAP32[i12 >> 2] | 0;
  }
 } while (0);
 if ((i15 & 2048 | 0) == 0) {
  i24 = 0;
 } else {
  i15 = HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 12 >> 2] | 0;
  i24 = (i15 | 0) == 0 ? 0 : i15 + 12 | 0;
 }
 __ZN7WebCoreL35collectMatchingObserversForMutationIN3WTF7HashSetIPNS_28MutationObserverRegistrationENS1_7PtrHashIS4_EENS1_10HashTraitsIS4_EEEEEEvRNS1_7HashMapIPNS_16MutationObserverEhNS5_ISC_EENS7_ISC_EENS7_IhEEEEPT_PNS_4NodeENSB_12MutationTypeEPKNS_13QualifiedNameE(i2, i24, i1, i3, i4);
 i24 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i24 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i15 = i2 | 0;
 i12 = i7 + 8 | 0;
 i9 = i7 | 0;
 i11 = i24;
 while (1) {
  i24 = i11 + 12 | 0;
  i10 = HEAP32[i24 >> 2] | 0;
  if ((i10 & 2048 | 0) == 0) {
   i25 = 0;
  } else {
   i25 = HEAP32[(HEAP32[i11 + 32 >> 2] | 0) + 12 >> 2] | 0;
  }
  do {
   if ((i25 | 0) == 0) {
    i26 = i10;
   } else {
    i13 = i25 | 0;
    i14 = i25 + 8 | 0;
    if ((HEAP32[i14 >> 2] | 0) == 0) {
     i26 = i10;
     break;
    }
    i17 = HEAP32[i13 >> 2] | 0;
    while (1) {
     i16 = HEAP32[i17 >> 2] | 0;
     do {
      if (__ZNK7WebCore28MutationObserverRegistration25shouldReceiveMutationFromEPNS_4NodeENS_16MutationObserver12MutationTypeEPKNS_13QualifiedNameE(i16, i1, i3, i4) | 0) {
       HEAP8[i6] = HEAP8[i16 + 16 | 0] & 96;
       HEAP32[i8 >> 2] = HEAP32[i16 >> 2];
       __ZN3WTF9HashTableIPN7WebCore16MutationObserverENS_12KeyValuePairIS3_hEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_hS9_NS_10HashTraitsIS3_EENSB_IhEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EES3_RhEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i7, i15, i8, i6);
       if ((HEAP8[i12] & 1) != 0) {
        break;
       }
       i21 = (HEAP32[i9 >> 2] | 0) + 4 | 0;
       HEAP8[i21] = HEAP8[i21] | HEAP8[i6];
      }
     } while (0);
     i17 = i17 + 4 | 0;
     if ((i17 | 0) == ((HEAP32[i13 >> 2] | 0) + (HEAP32[i14 >> 2] << 2) | 0)) {
      break;
     }
    }
    i26 = HEAP32[i24 >> 2] | 0;
   }
  } while (0);
  if ((i26 & 2048 | 0) == 0) {
   i27 = 0;
  } else {
   i24 = HEAP32[(HEAP32[i11 + 32 >> 2] | 0) + 12 >> 2] | 0;
   i27 = (i24 | 0) == 0 ? 0 : i24 + 12 | 0;
  }
  __ZN7WebCoreL35collectMatchingObserversForMutationIN3WTF7HashSetIPNS_28MutationObserverRegistrationENS1_7PtrHashIS4_EENS1_10HashTraitsIS4_EEEEEEvRNS1_7HashMapIPNS_16MutationObserverEhNS5_ISC_EENS7_ISC_EENS7_IhEEEEPT_PNS_4NodeENSB_12MutationTypeEPKNS_13QualifiedNameE(i2, i27, i1, i3, i4);
  i11 = HEAP32[i11 + 16 >> 2] | 0;
  if ((i11 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore4Node18lookupNamespaceURIERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = i3 | 0;
 i3 = i2;
 L1 : while (1) {
  i2 = HEAP32[i4 >> 2] | 0;
  if ((i2 | 0) != 0) {
   if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
    i5 = 4;
    break;
   }
  }
  switch (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 76 >> 2] & 127](i3) | 0) {
  case 1:
   {
    i2 = i3;
    i6 = i3 + 44 | 0;
    i7 = HEAP32[i6 >> 2] | 0;
    if ((HEAP32[i7 + 16 >> 2] | 0) != 0) {
     if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i7 + 8 >> 2] | 0, HEAP32[i4 >> 2] | 0) | 0) {
      i5 = 8;
      break L1;
     }
    }
    L16 : do {
     if (__ZNK7WebCore7Element13hasAttributesEv(i2) | 0) {
      i7 = i3 + 48 | 0;
      i8 = 0;
      while (1) {
       i9 = HEAP32[i7 >> 2] | 0;
       i10 = HEAP32[i9 + 4 >> 2] | 0;
       i11 = (i10 & 1 | 0) == 0;
       if (i11) {
        i12 = i10 >>> 1 & 134217727;
       } else {
        i12 = HEAP32[i9 + 32 >> 2] | 0;
       }
       if (i8 >>> 0 >= i12 >>> 0) {
        break L16;
       }
       if (i11) {
        i13 = i10 >>> 1 & 134217727;
       } else {
        i13 = HEAP32[i9 + 32 >> 2] | 0;
       }
       if (i13 >>> 0 <= i8 >>> 0) {
        i5 = 20;
        break L1;
       }
       if (i11) {
        i14 = i9 + 20 | 0;
       } else {
        i14 = HEAP32[i9 + 24 >> 2] | 0;
       }
       i9 = i14 + (i8 << 3) | 0;
       i11 = HEAP32[i9 >> 2] | 0;
       i10 = HEAP32[__ZN3WTF9xmlnsAtomE >> 2] | 0;
       if ((HEAP32[i11 + 8 >> 2] | 0) == (i10 | 0)) {
        if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i11 + 12 >> 2] | 0, HEAP32[i4 >> 2] | 0) | 0) {
         i5 = 27;
         break L1;
        }
        i15 = HEAP32[i9 >> 2] | 0;
        i16 = HEAP32[__ZN3WTF9xmlnsAtomE >> 2] | 0;
       } else {
        i15 = i11;
        i16 = i10;
       }
       if ((HEAP32[i15 + 12 >> 2] | 0) == (i16 | 0)) {
        if ((HEAP32[i4 >> 2] | 0) == 0) {
         i5 = 33;
         break L1;
        }
       }
       i8 = i8 + 1 | 0;
      }
     }
    } while (0);
    i2 = i3 + 16 | 0;
    while (1) {
     i17 = HEAP32[i2 >> 2] | 0;
     if ((i17 | 0) == 0) {
      i5 = 42;
      break L1;
     }
     if ((HEAP32[i17 + 12 >> 2] & 4 | 0) == 0) {
      i2 = i17 + 16 | 0;
     } else {
      break;
     }
    }
    i3 = i17 | 0;
    continue L1;
    break;
   }
  case 9:
   {
    i2 = HEAP32[i3 + 692 >> 2] | 0;
    if ((i2 | 0) == 0) {
     i5 = 45;
     break L1;
    }
    i3 = i2 | 0;
    continue L1;
    break;
   }
  case 6:
  case 12:
  case 10:
  case 11:
   {
    i5 = 46;
    break L1;
    break;
   }
  case 2:
   {
    i2 = HEAP32[i3 + 44 >> 2] | 0;
    if ((i2 | 0) == 0) {
     i5 = 49;
     break L1;
    }
    i3 = i2 | 0;
    continue L1;
    break;
   }
  default:
   {
    i2 = i3 + 16 | 0;
    while (1) {
     i18 = HEAP32[i2 >> 2] | 0;
     if ((i18 | 0) == 0) {
      i5 = 54;
      break L1;
     }
     if ((HEAP32[i18 + 12 >> 2] & 4 | 0) == 0) {
      i2 = i18 + 16 | 0;
     } else {
      break;
     }
    }
    i3 = i18 | 0;
    continue L1;
   }
  }
 }
 if ((i5 | 0) == 8) {
  i18 = HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] | 0;
  HEAP32[i1 >> 2] = i18;
  if ((i18 | 0) == 0) {
   return;
  }
  i6 = i18 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
  return;
 } else if ((i5 | 0) == 54) {
  HEAP32[i1 >> 2] = 0;
  return;
 } else if ((i5 | 0) == 4) {
  HEAP32[i1 >> 2] = 0;
  return;
 } else if ((i5 | 0) == 49) {
  HEAP32[i1 >> 2] = 0;
  return;
 } else if ((i5 | 0) == 20) {
  _WTFCrash();
 } else if ((i5 | 0) == 27) {
  i6 = HEAP32[i14 + (i8 << 3) + 4 >> 2] | 0;
  do {
   if ((i6 | 0) != 0) {
    if ((HEAP32[i6 + 4 >> 2] | 0) == 0) {
     break;
    }
    HEAP32[i1 >> 2] = i6;
    i18 = i6 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
    return;
   }
  } while (0);
  HEAP32[i1 >> 2] = 0;
  return;
 } else if ((i5 | 0) == 33) {
  i6 = HEAP32[i14 + (i8 << 3) + 4 >> 2] | 0;
  do {
   if ((i6 | 0) != 0) {
    if ((HEAP32[i6 + 4 >> 2] | 0) == 0) {
     break;
    }
    HEAP32[i1 >> 2] = i6;
    i8 = i6 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
    return;
   }
  } while (0);
  HEAP32[i1 >> 2] = 0;
  return;
 } else if ((i5 | 0) == 42) {
  HEAP32[i1 >> 2] = 0;
  return;
 } else if ((i5 | 0) == 45) {
  HEAP32[i1 >> 2] = 0;
  return;
 } else if ((i5 | 0) == 46) {
  HEAP32[i1 >> 2] = 0;
  return;
 }
}
function __ZNK7WebCore4Node21lookupNamespacePrefixERKN3WTF12AtomicStringEPKNS_7ElementE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i3 | 0;
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 i9 = i4 | 0;
 i10 = i2;
 __ZNK7WebCore4Node18lookupNamespaceURIERKN3WTF6StringE(i6, i9, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 96 >> 2] & 127](i2) | 0);
 i11 = i6 | 0;
 i6 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i11 >> 2] | 0, HEAP32[i8 >> 2] | 0) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i11 = i12 | 0;
   i13 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i11 >> 2] = i13;
    break;
   }
  }
 } while (0);
 if (i6) {
  i6 = HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 96 >> 2] & 127](i2) | 0) >> 2] | 0;
  HEAP32[i1 >> 2] = i6;
  if ((i6 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  i10 = i6 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
  STACKTOP = i5;
  return;
 }
 L18 : do {
  if (__ZNK7WebCore7Element13hasAttributesEv(i2) | 0) {
   i10 = i2 + 48 | 0;
   i6 = i7 | 0;
   i12 = 0;
   L20 : while (1) {
    i13 = HEAP32[i10 >> 2] | 0;
    i11 = HEAP32[i13 + 4 >> 2] | 0;
    i14 = (i11 & 1 | 0) == 0;
    if (i14) {
     i15 = i11 >>> 1 & 134217727;
    } else {
     i15 = HEAP32[i13 + 32 >> 2] | 0;
    }
    if (i12 >>> 0 >= i15 >>> 0) {
     break L18;
    }
    if (i14) {
     i16 = i11 >>> 1 & 134217727;
    } else {
     i16 = HEAP32[i13 + 32 >> 2] | 0;
    }
    if (i16 >>> 0 <= i12 >>> 0) {
     i17 = 20;
     break;
    }
    if (i14) {
     i18 = i13 + 20 | 0;
    } else {
     i18 = HEAP32[i13 + 24 >> 2] | 0;
    }
    i19 = i18 + (i12 << 3) | 0;
    i13 = HEAP32[i19 >> 2] | 0;
    do {
     if ((HEAP32[i13 + 8 >> 2] | 0) == (HEAP32[__ZN3WTF9xmlnsAtomE >> 2] | 0)) {
      if ((HEAP32[i18 + (i12 << 3) + 4 >> 2] | 0) != (HEAP32[i8 >> 2] | 0)) {
       break;
      }
      __ZNK7WebCore4Node18lookupNamespaceURIERKN3WTF6StringE(i7, i9, i13 + 12 | 0);
      i14 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i6 >> 2] | 0, HEAP32[i8 >> 2] | 0) | 0;
      i11 = HEAP32[i6 >> 2] | 0;
      if ((i11 | 0) == 0) {
       if (i14) {
        break L20;
       } else {
        break;
       }
      }
      i20 = i11 | 0;
      i21 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
      if ((i21 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i11);
       if (i14) {
        break L20;
       } else {
        break;
       }
      } else {
       HEAP32[i20 >> 2] = i21;
       if (i14) {
        break L20;
       } else {
        break;
       }
      }
     }
    } while (0);
    i12 = i12 + 1 | 0;
   }
   if ((i17 | 0) == 20) {
    _WTFCrash();
   }
   i12 = HEAP32[(HEAP32[i19 >> 2] | 0) + 12 >> 2] | 0;
   HEAP32[i1 >> 2] = i12;
   if ((i12 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i6 = i12 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   STACKTOP = i5;
   return;
  }
 } while (0);
 i19 = i2 + 16 | 0;
 while (1) {
  i22 = HEAP32[i19 >> 2] | 0;
  if ((i22 | 0) == 0) {
   i17 = 38;
   break;
  }
  if ((HEAP32[i22 + 12 >> 2] & 4 | 0) == 0) {
   i19 = i22 + 16 | 0;
  } else {
   i17 = 37;
   break;
  }
 }
 if ((i17 | 0) == 37) {
  __ZNK7WebCore4Node21lookupNamespacePrefixERKN3WTF12AtomicStringEPKNS_7ElementE(i1, i22 | 0, i3, i4);
  STACKTOP = i5;
  return;
 } else if ((i17 | 0) == 38) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
}
function __ZN3WTF9HashTableIPN7WebCore4NodeENS_12KeyValuePairIS3_NS_6OwnPtrINS1_15EventTargetDataEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EES3_NS_10PassOwnPtrIS6_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore4NodeENS_12KeyValuePairIS3_NS_6OwnPtrINS1_15EventTargetDataEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i8, 0) | 0;
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
 i14 = i13 + 4 | 0;
 i3 = HEAP32[i14 >> 2] | 0;
 i22 = i4 | 0;
 i4 = HEAP32[i22 >> 2] | 0;
 HEAP32[i22 >> 2] = 0;
 HEAP32[i14 >> 2] = i4;
 if ((i3 | 0) != 0) {
  __ZN7WebCore15EventTargetDataD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i2 + 12 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i2 + 4 | 0;
 i14 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i14 | 0)) {
  i27 = i13;
  i28 = i14;
 } else {
  if ((i14 | 0) == 0) {
   i29 = 8;
  } else {
   i22 = i14 << 1;
   i29 = (i4 * 6 & -1 | 0) < (i22 | 0) ? i14 : i22;
  }
  i22 = __ZN3WTF9HashTableIPN7WebCore4NodeENS_12KeyValuePairIS3_NS_6OwnPtrINS1_15EventTargetDataEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i29, i13) | 0;
  i27 = i22;
  i28 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i5 >> 2] | 0) + (i28 << 3) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCoreL17appendTextContentEPKNS_4NodeEbRbRN3WTF13StringBuilderE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 L1 : do {
  switch (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 76 >> 2] & 127](i1) | 0) {
  case 2:
  case 6:
  case 5:
  case 11:
   {
    break;
   }
  case 1:
   {
    if ((HEAP32[i1 + 12 >> 2] & 4 | 0) == 0) {
     break L1;
    }
    i9 = HEAP32[i1 + 44 >> 2] | 0;
    i10 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
    if ((i9 | 0) == (i10 | 0)) {
     i11 = 0;
    } else {
     if ((HEAP32[i9 + 12 >> 2] | 0) != (HEAP32[i10 + 12 >> 2] | 0)) {
      break L1;
     }
     i11 = (HEAP32[i9 + 16 >> 2] | 0) != (HEAP32[i10 + 16 >> 2] | 0);
    }
    if (i11 | i2 ^ 1) {
     break L1;
    }
    HEAP8[i3] = 0;
    HEAP8[i6] = 10;
    i10 = HEAP32[i4 + 8 >> 2] | 0;
    do {
     if ((i10 | 0) != 0) {
      i9 = i4 | 0;
      i12 = HEAP32[i9 >> 2] | 0;
      if (i12 >>> 0 >= (HEAP32[i10 + 4 >> 2] | 0) >>> 0) {
       break;
      }
      if ((HEAP32[i4 + 4 >> 2] | 0) != 0) {
       break;
      }
      i13 = (HEAP8[i4 + 12 | 0] & 1) == 0;
      HEAP32[i9 >> 2] = i12 + 1;
      if (i13) {
       HEAP16[(HEAP32[i4 + 20 >> 2] | 0) + (i12 << 1) >> 1] = 10;
       STACKTOP = i5;
       return;
      } else {
       HEAP8[(HEAP32[i4 + 20 >> 2] | 0) + i12 | 0] = 10;
       STACKTOP = i5;
       return;
      }
     }
    } while (0);
    __ZN3WTF13StringBuilder6appendEPKhj(i4, i6, 1);
    STACKTOP = i5;
    return;
   }
  case 7:
   {
    HEAP8[i3] = 0;
    i10 = i8 | 0;
    i12 = HEAP32[i1 + 36 >> 2] | 0;
    HEAP32[i10 >> 2] = i12;
    if ((i12 | 0) != 0) {
     i13 = i12 | 0;
     HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
    }
    __ZN3WTF13StringBuilder6appendERKNS_6StringE(i4, i8);
    i13 = HEAP32[i10 >> 2] | 0;
    if ((i13 | 0) == 0) {
     STACKTOP = i5;
     return;
    }
    i10 = i13 | 0;
    i12 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i12 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i13);
     STACKTOP = i5;
     return;
    } else {
     HEAP32[i10 >> 2] = i12;
     STACKTOP = i5;
     return;
    }
    break;
   }
  case 3:
  case 4:
  case 8:
   {
    HEAP8[i3] = 0;
    i12 = i7 | 0;
    i10 = HEAP32[i1 + 36 >> 2] | 0;
    HEAP32[i12 >> 2] = i10;
    if ((i10 | 0) != 0) {
     i13 = i10 | 0;
     HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
    }
    __ZN3WTF13StringBuilder6appendERKNS_6StringE(i4, i7);
    i13 = HEAP32[i12 >> 2] | 0;
    if ((i13 | 0) == 0) {
     STACKTOP = i5;
     return;
    }
    i12 = i13 | 0;
    i10 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i13);
     STACKTOP = i5;
     return;
    } else {
     HEAP32[i12 >> 2] = i10;
     STACKTOP = i5;
     return;
    }
    break;
   }
  default:
   {
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 HEAP8[i3] = 0;
 if ((HEAP32[i1 + 12 >> 2] & 2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i7 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i5;
  return;
 } else {
  i14 = i7;
 }
 while (1) {
  i7 = i14;
  do {
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 76 >> 2] & 127](i14) | 0) != 8) {
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 76 >> 2] & 127](i14) | 0) == 7) {
     break;
    }
    __ZN7WebCoreL17appendTextContentEPKNS_4NodeEbRbRN3WTF13StringBuilderE(i14, i2, i3, i4);
   }
  } while (0);
  i14 = HEAP32[i14 + 28 >> 2] | 0;
  if ((i14 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore4Node18isDefaultNamespaceERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = i2;
 i2 = i1;
 L1 : while (1) {
  i1 = HEAP32[i3 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i4 = __ZN3WTF8nullAtomE;
  } else {
   i4 = (HEAP32[i1 + 4 >> 2] | 0) == 0 ? __ZN3WTF8nullAtomE : i3;
  }
  switch (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 76 >> 2] & 127](i2) | 0) {
  case 2:
   {
    i1 = HEAP32[i2 + 44 >> 2] | 0;
    if ((i1 | 0) == 0) {
     i5 = 0;
     i6 = 35;
     break L1;
    }
    i3 = i4;
    i2 = i1 | 0;
    continue L1;
    break;
   }
  case 9:
   {
    i1 = HEAP32[i2 + 692 >> 2] | 0;
    if ((i1 | 0) == 0) {
     i5 = 0;
     i6 = 36;
     break L1;
    }
    i3 = i4;
    i2 = i1 | 0;
    continue L1;
    break;
   }
  case 6:
  case 12:
  case 10:
  case 11:
   {
    i5 = 0;
    i6 = 33;
    break L1;
    break;
   }
  case 1:
   {
    i7 = HEAP32[i2 + 44 >> 2] | 0;
    if ((HEAP32[i7 + 8 >> 2] | 0) == 0) {
     i6 = 6;
     break L1;
    }
    L18 : do {
     if (__ZNK7WebCore7Element13hasAttributesEv(i2) | 0) {
      i1 = HEAP32[i2 + 48 >> 2] | 0;
      i8 = HEAP32[i1 + 4 >> 2] | 0;
      i9 = i8 >>> 1 & 134217727;
      i10 = HEAP32[__ZN3WTF9xmlnsAtomE >> 2] | 0;
      i11 = i1 + 24 | 0;
      i12 = i11 + 8 | 0;
      if ((i8 & 1 | 0) == 0) {
       i8 = 0;
       while (1) {
        if (i8 >>> 0 >= i9 >>> 0) {
         break L18;
        }
        if (i9 >>> 0 <= i8 >>> 0) {
         i6 = 31;
         break L1;
        }
        i13 = i1 + 20 | 0;
        if ((HEAP32[(HEAP32[i13 + (i8 << 3) >> 2] | 0) + 12 >> 2] | 0) == (i10 | 0)) {
         i14 = i8;
         i15 = i13;
         i6 = 16;
         break L1;
        } else {
         i8 = i8 + 1 | 0;
        }
       }
      } else {
       i8 = 0;
       while (1) {
        if (i8 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
         break L18;
        }
        if ((HEAP32[i12 >> 2] | 0) >>> 0 <= i8 >>> 0) {
         i6 = 30;
         break L1;
        }
        i1 = HEAP32[i11 >> 2] | 0;
        if ((HEAP32[(HEAP32[i1 + (i8 << 3) >> 2] | 0) + 12 >> 2] | 0) == (i10 | 0)) {
         i14 = i8;
         i15 = i1;
         i6 = 16;
         break L1;
        } else {
         i8 = i8 + 1 | 0;
        }
       }
      }
     }
    } while (0);
    i8 = i2 + 16 | 0;
    while (1) {
     i16 = HEAP32[i8 >> 2] | 0;
     if ((i16 | 0) == 0) {
      i5 = 0;
      i6 = 32;
      break L1;
     }
     if ((HEAP32[i16 + 12 >> 2] & 4 | 0) == 0) {
      i8 = i16 + 16 | 0;
     } else {
      break;
     }
    }
    i3 = i4;
    i2 = i16 | 0;
    continue L1;
    break;
   }
  default:
   {
    i8 = i2 + 16 | 0;
    while (1) {
     i17 = HEAP32[i8 >> 2] | 0;
     if ((i17 | 0) == 0) {
      i5 = 0;
      i6 = 37;
      break L1;
     }
     if ((HEAP32[i17 + 12 >> 2] & 4 | 0) == 0) {
      i8 = i17 + 16 | 0;
     } else {
      break;
     }
    }
    i3 = i4;
    i2 = i17 | 0;
    continue L1;
   }
  }
 }
 if ((i6 | 0) == 6) {
  i5 = (HEAP32[i7 + 16 >> 2] | 0) == (HEAP32[i4 >> 2] | 0);
  return i5 | 0;
 } else if ((i6 | 0) == 31) {
  _WTFCrash();
  return 0;
 } else if ((i6 | 0) == 32) {
  return i5 | 0;
 } else if ((i6 | 0) == 33) {
  return i5 | 0;
 } else if ((i6 | 0) == 35) {
  return i5 | 0;
 } else if ((i6 | 0) == 36) {
  return i5 | 0;
 } else if ((i6 | 0) == 37) {
  return i5 | 0;
 } else if ((i6 | 0) == 30) {
  _WTFCrash();
  return 0;
 } else if ((i6 | 0) == 16) {
  i5 = (HEAP32[i15 + (i14 << 3) + 4 >> 2] | 0) == (HEAP32[i4 >> 2] | 0);
  return i5 | 0;
 }
 return 0;
}
function __ZN3WTF9HashTableIPN7WebCore4NodeENS_12KeyValuePairIS3_NS_6OwnPtrINS1_15EventTargetDataEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i1, i2, i3) {
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
    __ZN7WebCore15EventTargetDataD1Ev(i17);
    __ZN3WTF8fastFreeEPv(i17);
    i36 = HEAP32[i12 >> 2] | 0;
   }
   HEAP32[i30 >> 2] = i36;
   i17 = i7 + (i10 << 3) + 4 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i16 >> 2] = i20;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i20 = i10 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i20;
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
    __ZN7WebCore15EventTargetDataD1Ev(i1);
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
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_vi + 26;
}
function __ZN3WTF9HashTableIPN7WebCore16MutationObserverENS_12KeyValuePairIS3_hEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_hS9_NS_10HashTraitsIS3_EENSB_IhEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EES3_RhEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPN7WebCore16MutationObserverENS_12KeyValuePairIS3_hEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_hS9_NS_10HashTraitsIS3_EENSB_IhEEE18KeyValuePairTraitsESC_E6expandEPS5_(i2, 0) | 0;
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
 i9 = i10 & i6;
 i11 = i7 + (i9 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = 9;
  } else {
   i15 = (i10 >>> 23) + ~i10 | 0;
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
     i14 = 6;
     break;
    }
    i21 = (i20 | 0) == -1 ? i19 : i17;
    i22 = (i16 | 0) == 0 ? i15 : i16;
    i23 = i22 + i18 & i6;
    i24 = i7 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i14 = 8;
     break;
    } else {
     i16 = i22;
     i17 = i21;
     i18 = i23;
     i19 = i24;
     i20 = i25;
    }
   }
   if ((i14 | 0) == 6) {
    i20 = i7 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i14 | 0) == 8) {
    if ((i21 | 0) == 0) {
     i13 = i24;
     i14 = 9;
     break;
    }
    i20 = i21;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i26 = i21;
    i27 = HEAP32[i3 >> 2] | 0;
    i28 = i20;
    break;
   }
  }
 } while (0);
 if ((i14 | 0) == 9) {
  i26 = i13;
  i27 = i8;
  i28 = i2 + 16 | 0;
 }
 HEAP32[i26 >> 2] = i27;
 HEAP8[i26 + 4 | 0] = HEAP8[i4] | 0;
 i4 = i2 + 12 | 0;
 i27 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i27;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i28 >> 2] | 0) + i27 << 1 | 0) < (i8 | 0)) {
  i29 = i26;
  i30 = i8;
 } else {
  i8 = __ZN3WTF9HashTableIPN7WebCore16MutationObserverENS_12KeyValuePairIS3_hEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_hS9_NS_10HashTraitsIS3_EENSB_IhEEE18KeyValuePairTraitsESC_E6expandEPS5_(i2, i26) | 0;
  i29 = i8;
  i30 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i30 << 3) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore28MutationObserverRegistrationES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore28MutationObserverRegistrationES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i8;
 i9 = i3 + ~(i3 << 15) | 0;
 i3 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i3 >>> 6 ^ i3;
 i3 = i9 + ~(i9 << 11) | 0;
 i9 = i3 >>> 16 ^ i3;
 i3 = i9 & i6;
 i7 = i10 + (i3 << 2) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i7;
   i13 = 11;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i7;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 8;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 10;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 8) {
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i13 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 11;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   }
  }
 } while (0);
 if ((i13 | 0) == 11) {
  i25 = i12;
  i26 = i2 + 16 | 0;
 }
 HEAP32[i25 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i12;
 i4 = i2 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i26 >> 2] | 0) + i12 << 1 | 0) < (i13 | 0)) {
  i27 = i25;
  i28 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i29 = 8;
  } else {
   i26 = i13 << 1;
   i29 = (i12 * 6 & -1 | 0) < (i26 | 0) ? i13 : i26;
  }
  i26 = __ZN3WTF9HashTableIPN7WebCore28MutationObserverRegistrationES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
  i27 = i26;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore4Node21ensureEventTargetDataEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 12 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 & 2097152 | 0) == 0) {
  HEAP32[i6 >> 2] = i7 | 2097152;
  i7 = __ZN3WTF10fastMallocEj(32) | 0;
  __ZN7WebCore15EventTargetDataC1Ev(i7);
  if (HEAP8[H_BASE + 344 | 0] | 0) {
   i8 = HEAP32[H_BASE + 352 >> 2] | 0;
  } else {
   i6 = __ZN3WTF10fastMallocEj(20) | 0;
   i9 = i6;
   _memset(i6 | 0, 0, 20) | 0;
   HEAP32[H_BASE + 352 >> 2] = i9;
   HEAP8[H_BASE + 344 | 0] = 1;
   i8 = i9;
  }
  HEAP32[i3 >> 2] = i1;
  i9 = i4 | 0;
  HEAP32[i9 >> 2] = i7;
  __ZN3WTF9HashTableIPN7WebCore4NodeENS_12KeyValuePairIS3_NS_6OwnPtrINS1_15EventTargetDataEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EES3_NS_10PassOwnPtrIS6_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i5, i8 | 0, i3, i4);
  if ((HEAP8[i5 + 8 | 0] & 1) == 0) {
   i4 = (HEAP32[i5 >> 2] | 0) + 4 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   i3 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   HEAP32[i4 >> 2] = i3;
   if ((i5 | 0) == 0) {
    i10 = i7;
    STACKTOP = i2;
    return i10 | 0;
   }
   __ZN7WebCore15EventTargetDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
   i10 = i7;
   STACKTOP = i2;
   return i10 | 0;
  } else {
   i5 = HEAP32[i9 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i10 = i7;
    STACKTOP = i2;
    return i10 | 0;
   }
   __ZN7WebCore15EventTargetDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
   i10 = i7;
   STACKTOP = i2;
   return i10 | 0;
  }
 }
 if (HEAP8[H_BASE + 344 | 0] | 0) {
  i11 = HEAP32[H_BASE + 352 >> 2] | 0;
 } else {
  i7 = __ZN3WTF10fastMallocEj(20) | 0;
  i5 = i7;
  _memset(i7 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 352 >> 2] = i5;
  HEAP8[H_BASE + 344 | 0] = 1;
  i11 = i5;
 }
 i5 = HEAP32[i11 + 8 >> 2] | 0;
 i7 = HEAP32[i11 >> 2] | 0;
 i11 = i1;
 i9 = i11 + ~(i11 << 15) | 0;
 i11 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i11 >>> 6 ^ i11;
 i11 = i9 + ~(i9 << 11) | 0;
 i9 = i11 >>> 16 ^ i11;
 if ((i7 | 0) == 0) {
  i10 = 0;
  STACKTOP = i2;
  return i10 | 0;
 }
 i11 = i5 & i9;
 i3 = i7 + (i11 << 3) | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 L26 : do {
  if ((i4 | 0) == (i1 | 0)) {
   i12 = i3;
  } else {
   i8 = (i9 >>> 23) + ~i9 | 0;
   i6 = i8 << 12 ^ i8;
   i8 = i6 >>> 7 ^ i6;
   i6 = i8 << 2 ^ i8;
   i8 = i6 >>> 20 ^ i6 | 1;
   i6 = 0;
   i13 = i11;
   i14 = i4;
   while (1) {
    if ((i14 | 0) == 0) {
     i10 = 0;
     break;
    }
    i15 = (i6 | 0) == 0 ? i8 : i6;
    i16 = i15 + i13 & i5;
    i17 = i7 + (i16 << 3) | 0;
    i18 = HEAP32[i17 >> 2] | 0;
    if ((i18 | 0) == (i1 | 0)) {
     i12 = i17;
     break L26;
    } else {
     i6 = i15;
     i13 = i16;
     i14 = i18;
    }
   }
   STACKTOP = i2;
   return i10 | 0;
  }
 } while (0);
 if ((i12 | 0) == 0) {
  i10 = 0;
  STACKTOP = i2;
  return i10 | 0;
 }
 i10 = HEAP32[i12 + 4 >> 2] | 0;
 STACKTOP = i2;
 return i10 | 0;
}
function __ZN7WebCore4Node37notifyMutationObserversNodeWillDetachEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 if ((HEAP8[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 770 | 0] | 0) == 0) {
  return;
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  i3 = i2;
 }
 L6 : while (1) {
  i2 = i3 + 12 | 0;
  i4 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i4 & 2048 | 0) == 0) {
    i5 = i4;
   } else {
    i6 = HEAP32[(HEAP32[i3 + 32 >> 2] | 0) + 12 >> 2] | 0;
    if ((i6 | 0) == 0) {
     i5 = i4;
     break;
    }
    i7 = i6 + 8 | 0;
    i8 = HEAP32[i7 >> 2] | 0;
    if ((i8 | 0) == 0) {
     i5 = i4;
     break;
    }
    i9 = i6 | 0;
    i6 = 0;
    i10 = i8;
    while (1) {
     if (i10 >>> 0 <= i6 >>> 0) {
      i11 = 8;
      break L6;
     }
     __ZN7WebCore28MutationObserverRegistration29observedSubtreeNodeWillDetachEPNS_4NodeE(HEAP32[(HEAP32[i9 >> 2] | 0) + (i6 << 2) >> 2] | 0, i1);
     i12 = i6 + 1 | 0;
     if (i12 >>> 0 >= i8 >>> 0) {
      break;
     }
     i6 = i12;
     i10 = HEAP32[i7 >> 2] | 0;
    }
    i5 = HEAP32[i2 >> 2] | 0;
   }
  } while (0);
  L18 : do {
   if ((i5 & 2048 | 0) != 0) {
    i2 = HEAP32[(HEAP32[i3 + 32 >> 2] | 0) + 12 >> 2] | 0;
    i4 = (i2 | 0) == 0 ? 0 : i2 + 12 | 0;
    if ((i4 | 0) == 0) {
     break;
    }
    i2 = i4 | 0;
    i7 = HEAP32[i2 >> 2] | 0;
    i10 = i4 + 4 | 0;
    i6 = HEAP32[i10 >> 2] | 0;
    i8 = i7 + (i6 << 2) | 0;
    if ((HEAP32[i4 + 12 >> 2] | 0) == 0) {
     break;
    }
    L22 : do {
     if ((i6 | 0) == 0) {
      i13 = i7;
     } else {
      i4 = i7;
      while (1) {
       i9 = HEAP32[i4 >> 2] | 0;
       if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
        i13 = i4;
        break L22;
       }
       i4 = i4 + 4 | 0;
       if ((i4 | 0) == (i8 | 0)) {
        break L18;
       }
      }
     }
    } while (0);
    if ((i13 | 0) == (i8 | 0)) {
     break;
    } else {
     i14 = i13;
    }
    while (1) {
     __ZN7WebCore28MutationObserverRegistration29observedSubtreeNodeWillDetachEPNS_4NodeE(HEAP32[i14 >> 2] | 0, i1);
     i7 = i14 + 4 | 0;
     L29 : do {
      if ((i7 | 0) == (i8 | 0)) {
       i15 = i8;
      } else {
       i6 = i7;
       while (1) {
        i4 = HEAP32[i6 >> 2] | 0;
        if (!((i4 | 0) == (-1 | 0) | (i4 | 0) == 0)) {
         i15 = i6;
         break L29;
        }
        i4 = i6 + 4 | 0;
        if ((i4 | 0) == (i8 | 0)) {
         i15 = i8;
         break;
        } else {
         i6 = i4;
        }
       }
      }
     } while (0);
     if ((i15 | 0) == ((HEAP32[i2 >> 2] | 0) + (HEAP32[i10 >> 2] << 2) | 0)) {
      break;
     } else {
      i14 = i15;
     }
    }
   }
  } while (0);
  i10 = HEAP32[i3 + 16 >> 2] | 0;
  if ((i10 | 0) == 0) {
   i11 = 27;
   break;
  } else {
   i3 = i10;
  }
 }
 if ((i11 | 0) == 8) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i11 | 0) == 27) {
  return;
 }
}
function __ZN7WebCore4Node28dispatchSubtreeModifiedEventEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 8388608 | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP16[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 768 >> 1] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 i8 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 420 | 0;
 do {
  if ((HEAP32[i1 + 16 >> 2] | 0) == 0) {
   i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 48 >> 2] & 127](i1 | 0) | 0;
   if ((i9 | 0) == 0) {
    STACKTOP = i2;
    return;
   }
   if (__ZNK7WebCore16EventListenerMap8containsERKN3WTF12AtomicStringE(i9 | 0, i8) | 0) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 i9 = i5 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i6 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i7 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = __ZN3WTF10fastMallocEj(72) | 0;
 i13 = i3 | 0;
 HEAP32[i13 >> 2] = 0;
 __ZN7WebCore13MutationEventC1ERKN3WTF12AtomicStringEbbNS1_10PassRefPtrINS_4NodeEEERKNS1_6StringESA_SA_t(i12, i8, 1, 0, i3, i5, i6, i7, 0);
 i7 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i13 = i7 + 8 | 0;
   i6 = i13 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
  }
 } while (0);
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = i12;
 __ZN7WebCore15EventDispatcher19dispatchScopedEventERNS_4NodeEN3WTF10PassRefPtrINS_5EventEEE(i1, i4);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 8 | 0;
   i1 = i7 | 0;
   i12 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i1 >> 2] = i12;
    break;
   }
   i12 = i7 - 8 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 31](i12);
  }
 } while (0);
 i4 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i11 = i4 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i10 = i4 | 0;
   i12 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i10 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i9 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i9 = i4 | 0;
 i12 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i12 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i9 >> 2] = i12;
  STACKTOP = i2;
  return;
 }
}
function __ZN3WTF9HashTableIPN7WebCore16MutationObserverENS_12KeyValuePairIS3_hEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_hS9_NS_10HashTraitsIS3_EENSB_IhEEE18KeyValuePairTraitsESC_E6expandEPS5_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
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
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 3) | 0;
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
  i5 = i7 + (i11 << 3) | 0;
  i13 = HEAP32[i5 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = HEAP32[i3 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L10 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 7;
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
       break L10;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 3) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 7;
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
   if ((i23 | 0) == 7) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i16 = i5;
   i17 = i30;
   i13 = HEAP32[i16 + 4 >> 2] | 0;
   HEAP32[i17 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i17 + 4 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i30 : i12;
  }
  i13 = i11 + 1 | 0;
  if ((i13 | 0) == (i6 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i13;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN7WebCore4Node14setTextContentERKN3WTF6StringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 switch (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 76 >> 2] & 127](i1) | 0) {
 case 1:
 case 2:
 case 6:
 case 5:
 case 11:
  {
   i8 = i1;
   i9 = i1 + 8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   __ZN7WebCore22ChildListMutationScopeC2ERNS_13ContainerNodeE(i5, i8);
   __ZN7WebCore13ContainerNode14removeChildrenEv(i8);
   i9 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     if ((HEAP32[i9 + 4 >> 2] | 0) == 0) {
      break;
     }
     __ZN7WebCore8Document14createTextNodeERKN3WTF6StringE(i7, HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0, i2);
     i10 = i6 | 0;
     i11 = i7 | 0;
     i12 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = 0;
     HEAP32[i10 >> 2] = i12;
     __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i8, i6, i3) | 0;
     i12 = HEAP32[i10 >> 2] | 0;
     do {
      if ((i12 | 0) != 0) {
       i10 = i12 + 8 | 0;
       i13 = i10 | 0;
       i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
       HEAP32[i13 >> 2] = i14;
       if ((i14 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
      }
     } while (0);
     i12 = HEAP32[i11 >> 2] | 0;
     if ((i12 | 0) == 0) {
      break;
     }
     i10 = i12 + 8 | 0;
     i12 = i10 | 0;
     i14 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     HEAP32[i12 >> 2] = i14;
     if ((i14 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
    }
   } while (0);
   i6 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i5 = i6 | 0;
     i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) == 0) {
      __ZN7WebCore28ChildListMutationAccumulatorD1Ev(i6);
      __ZN3WTF8fastFreeEPv(i6);
      break;
     } else {
      HEAP32[i5 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i6 = i1 + 8 | 0;
   i8 = i6 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
   STACKTOP = i4;
   return;
  }
 case 3:
 case 4:
 case 8:
 case 7:
  {
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 72 >> 2] & 7](i1, i2, i3);
   STACKTOP = i4;
   return;
  }
 default:
  {
   STACKTOP = i4;
   return;
  }
 }
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
function __ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = HEAP32[i1 + 20 >> 2] | 0;
 i5 = HEAP32[i4 + 8 >> 2] | 0;
 if ((HEAP32[i5 + 1584 >> 2] | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 if ((HEAP8[i5 + 2285 | 0] & 1) != 0) {
  i6 = 0;
  return i6 | 0;
 }
 i7 = HEAP32[i5 + 332 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i5 = HEAP32[i7 + 32 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   if ((HEAP8[i5 + 208 | 0] & 1) == 0) {
    break;
   }
   i5 = HEAP32[i4 + 4 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i6 = 1;
    return i6 | 0;
   }
   if ((HEAP32[i5 + 12 >> 2] & 4096 | 0) == 0) {
    i6 = 1;
    return i6 | 0;
   }
   if ((HEAP32[(HEAP32[i5 + 20 >> 2] | 0) + 4 >> 2] | 0) == (i5 | 0)) {
    break;
   } else {
    i6 = 1;
   }
   return i6 | 0;
  }
 } while (0);
 do {
  if ((HEAP32[i1 + 12 >> 2] & 1048580 | 0) == 1048580) {
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 232 >> 2] & 127](i1) | 0) == 0) {
    i8 = i1;
    break;
   } else {
    i6 = 0;
   }
   return i6 | 0;
  } else {
   if ((i1 | 0) == 0) {
    i6 = 0;
   } else {
    i8 = i1;
    break;
   }
   return i6 | 0;
  }
 } while (0);
 while (1) {
  do {
   if ((HEAP32[(HEAP32[i8 + 20 >> 2] | 0) + 8 >> 2] | 0) == (i8 | 0)) {
    i1 = i8 + 32 | 0;
    if ((HEAP32[i8 + 12 >> 2] & 2048 | 0) == 0) {
     i9 = i1 | 0;
    } else {
     i9 = HEAP32[i1 >> 2] | 0;
    }
    i1 = HEAP32[i9 >> 2] | 0;
    if ((i1 | 0) == 0) {
     i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 236 >> 2] & 127](i8) | 0;
     break;
    }
    if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
     i10 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
     break;
    } else {
     i10 = HEAP32[i1 + 36 >> 2] | 0;
     break;
    }
   } else {
    i10 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i8 >> 2] | 0) + 176 >> 2] & 15](i8, 0) | 0;
   }
  } while (0);
  if ((i10 | 0) != 0) {
   if ((HEAP32[i10 + 48 >> 2] & 31 | 0) != 22) {
    break;
   }
  }
  i1 = HEAP32[i8 + 16 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i6 = 0;
   i11 = 32;
   break;
  }
  i8 = i1 | 0;
 }
 if ((i11 | 0) == 32) {
  return i6 | 0;
 }
 i11 = HEAP32[(HEAP32[i10 + 24 >> 2] | 0) + 88 >> 2] | 0;
 do {
  if ((i3 | 0) == 1) {
   if ((i11 & 98304 | 0) == 65536) {
    i6 = 0;
   } else {
    break;
   }
   return i6 | 0;
  }
 } while (0);
 i3 = i11 >>> 4 & 3;
 if ((i3 | 0) == 1) {
  i6 = 1;
  return i6 | 0;
 } else if ((i3 | 0) == 2) {
  i6 = (i2 | 0) != 1;
  return i6 | 0;
 } else {
  i6 = 0;
  return i6 | 0;
 }
 return 0;
}
function __ZN7WebCoreL35collectMatchingObserversForMutationIN3WTF7HashSetIPNS_28MutationObserverRegistrationENS1_7PtrHashIS4_EENS1_10HashTraitsIS4_EEEEEEvRNS1_7HashMapIPNS_16MutationObserverEhNS5_ISC_EENS7_ISC_EENS7_IhEEEEPT_PNS_4NodeENSB_12MutationTypeEPKNS_13QualifiedNameE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 24 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i10 = i2 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = i2 + 4 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = i11 + (i13 << 2) | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 L7 : do {
  if ((i13 | 0) == 0) {
   i15 = i11;
  } else {
   i2 = i11;
   while (1) {
    i16 = HEAP32[i2 >> 2] | 0;
    if (!((i16 | 0) == (-1 | 0) | (i16 | 0) == 0)) {
     i15 = i2;
     break L7;
    }
    i2 = i2 + 4 | 0;
    if ((i2 | 0) == (i14 | 0)) {
     break;
    }
   }
   STACKTOP = i6;
   return;
  }
 } while (0);
 if ((i15 | 0) == (i14 | 0)) {
  STACKTOP = i6;
  return;
 }
 i11 = i1 | 0;
 i1 = i8 + 8 | 0;
 i13 = i8 | 0;
 i2 = i15;
 while (1) {
  i15 = HEAP32[i2 >> 2] | 0;
  do {
   if (__ZNK7WebCore28MutationObserverRegistration25shouldReceiveMutationFromEPNS_4NodeENS_16MutationObserver12MutationTypeEPKNS_13QualifiedNameE(i15, i3, i4, i5) | 0) {
    HEAP8[i7] = HEAP8[i15 + 16 | 0] & 96;
    HEAP32[i9 >> 2] = HEAP32[i15 >> 2];
    __ZN3WTF9HashTableIPN7WebCore16MutationObserverENS_12KeyValuePairIS3_hEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_hS9_NS_10HashTraitsIS3_EENSB_IhEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EES3_RhEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i8, i11, i9, i7);
    if ((HEAP8[i1] & 1) != 0) {
     break;
    }
    i16 = (HEAP32[i13 >> 2] | 0) + 4 | 0;
    HEAP8[i16] = HEAP8[i16] | HEAP8[i7];
   }
  } while (0);
  i15 = i2 + 4 | 0;
  L22 : do {
   if ((i15 | 0) == (i14 | 0)) {
    i17 = i14;
   } else {
    i16 = i15;
    while (1) {
     i18 = HEAP32[i16 >> 2] | 0;
     if (!((i18 | 0) == (-1 | 0) | (i18 | 0) == 0)) {
      i17 = i16;
      break L22;
     }
     i18 = i16 + 4 | 0;
     if ((i18 | 0) == (i14 | 0)) {
      i17 = i14;
      break;
     } else {
      i16 = i18;
     }
    }
   }
  } while (0);
  if ((i17 | 0) == ((HEAP32[i10 >> 2] | 0) + (HEAP32[i12 >> 2] << 2) | 0)) {
   break;
  } else {
   i2 = i17;
  }
 }
 STACKTOP = i6;
 return;
}
function __ZN7WebCore4Node24dispatchDOMActivateEventEiN3WTF10PassRefPtrINS_5EventEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 388 | 0;
 i9 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 336 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i10 = i9 + 36 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 i10 = __ZN3WTF10fastMallocEj(64) | 0;
 i11 = i5 | 0;
 HEAP32[i11 >> 2] = i9;
 __ZN7WebCore7UIEventC1ERKN3WTF12AtomicStringEbbNS1_10PassRefPtrINS_9DOMWindowEEEi(i10, i8, 1, 1, i5, i2);
 i2 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i11 = i2 + 36 | 0;
   i5 = i11 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i5 >> 2] = i8;
    break;
   }
   i8 = i11 - 36 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 44 >> 2] & 31](i8);
  }
 } while (0);
 i2 = i10;
 i8 = i7 | 0;
 i11 = i3 | 0;
 i3 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i8 >> 2] = i3;
 __ZN7WebCore5Event18setUnderlyingEventEN3WTF10PassRefPtrIS0_EE(i2, i7);
 i7 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i8 = i7 + 8 | 0;
   i3 = i8 | 0;
   i11 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i3 >> 2] = i11;
    break;
   }
   i11 = i8 - 8 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 31](i11);
  }
 } while (0);
 i7 = (i10 | 0) == 0;
 if (!i7) {
  i11 = i10 + 8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 }
 i11 = i6 | 0;
 HEAP32[i11 >> 2] = i2;
 __ZN7WebCore15EventDispatcher19dispatchScopedEventERNS_4NodeEN3WTF10PassRefPtrINS_5EventEEE(i1, i6);
 i6 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 + 8 | 0;
   i1 = i11 | 0;
   i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i1 >> 2] = i8;
    break;
   }
   i8 = i11 - 8 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
  }
 } while (0);
 i6 = (HEAP8[i10 + 21 | 0] & 1) != 0;
 if (i7) {
  STACKTOP = i4;
  return i6 | 0;
 }
 i7 = i10 + 8 | 0;
 i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i8 | 0) == 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i2);
  STACKTOP = i4;
  return i6 | 0;
 } else {
  HEAP32[i7 >> 2] = i8;
  STACKTOP = i4;
  return i6 | 0;
 }
 return 0;
}
function __ZN3WTF9HashTableIPN7WebCore28MutationObserverRegistrationES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
 if ((i5 | 0) == 0) {
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
  i2 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L7 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 5;
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
       break L7;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 2) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 5;
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
   if ((i23 | 0) == 5) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   HEAP32[i30 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i16;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = i3;
 i8 = (i3 | 0) == 0;
 if (!i8) {
  i9 = i3 + 4 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore11EventTarget16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i1 | 0, i2, i6, i4) | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 4 | 0;
   i6 = i7 | 0;
   i10 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i6 >> 2] = i10;
    break;
   }
   i10 = i7 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
  }
 } while (0);
 L11 : do {
  if (i9) {
   i4 = i1 + 20 | 0;
   __ZN7WebCore8Document23addListenerTypeIfNeededERKN3WTF12AtomicStringE(HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0, i2);
   i10 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
   i7 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i7 | 0) != (HEAP32[i10 + 368 >> 2] | 0)) {
     if ((i7 | 0) == (HEAP32[i10 + 260 >> 2] | 0)) {
      break;
     }
     do {
      if ((i7 | 0) != (HEAP32[i10 + 632 >> 2] | 0)) {
       if ((i7 | 0) == (HEAP32[i10 + 636 >> 2] | 0)) {
        break;
       }
       if ((i7 | 0) == (HEAP32[i10 + 640 >> 2] | 0)) {
        break;
       }
       if ((i7 | 0) != (HEAP32[i10 + 644 >> 2] | 0)) {
        i11 = 1;
        break L11;
       }
      }
     } while (0);
     __ZN7WebCore8Document23didAddTouchEventHandlerEPNS_4NodeE(HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0, i1);
     i11 = 1;
     break L11;
    }
   } while (0);
   __ZN7WebCore8Document23didAddWheelEventHandlerEv(HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0);
   i11 = 1;
  } else {
   i11 = 0;
  }
 } while (0);
 if (i8) {
  STACKTOP = i5;
  return i11 | 0;
 }
 i8 = i3 + 4 | 0;
 i3 = i8 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i3 >> 2] = i1;
  STACKTOP = i5;
  return i11 | 0;
 }
 i1 = i8 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return i11 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i5;
 return i11 | 0;
}
function __ZN7WebCore17NodeListsNodeDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = HEAP32[i1 + 68 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 72 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    do {
     if ((HEAP8[i2 + (i4 * 12 & -1) | 0] | 0) != -1) {
      i5 = HEAP32[i2 + (i4 * 12 & -1) + 4 >> 2] | 0;
      if ((i5 | 0) == 0) {
       break;
      }
      i6 = i5 | 0;
      i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
      if ((i7 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i5);
       break;
      } else {
       HEAP32[i6 >> 2] = i7;
       break;
      }
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2 | 0);
 }
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 52 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i7 = i2 + (i4 << 3) | 0;
    if ((HEAP32[i7 >> 2] | 0) != -1) {
     __ZN7WebCore13QualifiedNameD1Ev(i7 | 0);
    }
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 32 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    do {
     if ((HEAP8[i2 + (i4 * 12 & -1) | 0] | 0) != -1) {
      i7 = HEAP32[i2 + (i4 * 12 & -1) + 4 >> 2] | 0;
      if ((i7 | 0) == 0) {
       break;
      }
      i6 = i7 | 0;
      i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
      if ((i5 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i7);
       break;
      } else {
       HEAP32[i6 >> 2] = i5;
       break;
      }
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2 | 0);
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i3 | 0) > 0) {
  i1 = 0;
  while (1) {
   do {
    if ((HEAP8[i2 + (i1 * 12 & -1) | 0] | 0) != -1) {
     i4 = HEAP32[i2 + (i1 * 12 & -1) + 4 >> 2] | 0;
     if ((i4 | 0) == 0) {
      break;
     }
     i5 = i4 | 0;
     i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
     if ((i6 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i4);
      break;
     } else {
      HEAP32[i5 >> 2] = i6;
      break;
     }
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i3 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2 | 0);
 return;
}
function __ZN7WebCore4Node10childNodesEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = i2 + 12 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = (i4 & 2 | 0) == 0;
 if ((i4 & 2048 | 0) == 0) {
  i6 = i2 + 32 | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  if ((i4 & 4 | 0) == 0) {
   i4 = __ZN3WTF10fastMallocEj(16) | 0;
   HEAP32[i4 >> 2] = i7;
   i8 = i4 + 4 | 0;
   HEAP32[i8 >> 2] = HEAP32[i8 >> 2] & -1024;
   HEAP32[i4 + 8 >> 2] = 0;
   HEAP32[i4 + 12 >> 2] = 0;
   i9 = i4;
  } else {
   i4 = __ZN3WTF10fastMallocEj(72) | 0;
   HEAP32[i4 >> 2] = i7;
   i7 = i4 + 4 | 0;
   HEAP32[i7 >> 2] = HEAP32[i7 >> 2] & -1024;
   i7 = i4 + 20 | 0;
   _memset(i4 + 8 | 0, 0, 12) | 0;
   HEAP32[i7 >> 2] = HEAP32[i7 >> 2] & -8192;
   HEAP32[i4 + 24 >> 2] = 0;
   HEAP32[i4 + 28 >> 2] = 2147483647;
   HEAP32[i4 + 32 >> 2] = 2147483647;
   _memset(i4 + 36 | 0, 0, 36) | 0;
   i9 = i4;
  }
  HEAP32[i6 >> 2] = i9;
  HEAP32[i3 >> 2] = HEAP32[i3 >> 2] | 2048;
  i10 = i9;
 } else {
  i10 = HEAP32[i2 + 32 >> 2] | 0;
 }
 i9 = i10 + 8 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i10 | 0) == 0) {
   i3 = __ZN3WTF10fastMallocEj(88) | 0;
   i6 = i3;
   _memset(i3 | 0, 0, 88) | 0;
   i3 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i6;
   if ((i3 | 0) == 0) {
    i11 = i6;
    break;
   }
   __ZN7WebCore17NodeListsNodeDataD2Ev(i3);
   __ZN3WTF8fastFreeEPv(i3);
   i11 = HEAP32[i9 >> 2] | 0;
  } else {
   i11 = i10;
  }
 } while (0);
 if (i5) {
  i5 = i11 + 4 | 0;
  i10 = HEAP32[i5 >> 2] | 0;
  if ((i10 | 0) == 0) {
   i9 = __ZN3WTF10fastMallocEj(16) | 0;
   i3 = i9;
   HEAP32[i9 + 4 >> 2] = 0;
   HEAP32[i9 + 8 >> 2] = 1;
   HEAP32[i9 >> 2] = __ZTVN7WebCore13EmptyNodeListE + 8;
   HEAP32[i9 + 12 >> 2] = i2;
   i9 = i2 + 8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   HEAP32[i5 >> 2] = i3;
   i12 = i3;
  } else {
   i3 = i10 + 8 | 0;
   HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
   i12 = i10;
  }
  HEAP32[i1 >> 2] = i12;
  return;
 } else {
  i12 = i11 | 0;
  i11 = HEAP32[i12 >> 2] | 0;
  if ((i11 | 0) == 0) {
   i10 = __ZN3WTF10fastMallocEj(32) | 0;
   __ZN7WebCore13ChildNodeListC1ERNS_13ContainerNodeE(i10, i2);
   HEAP32[i12 >> 2] = i10;
   i13 = i10;
  } else {
   i10 = i11 + 8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   i13 = i11;
  }
  HEAP32[i1 >> 2] = i13;
  return;
 }
}
function __ZN7WebCore4Node20clearEventTargetDataEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 if (HEAP8[H_BASE + 344 | 0] | 0) {
  i2 = HEAP32[H_BASE + 352 >> 2] | 0;
 } else {
  i3 = __ZN3WTF10fastMallocEj(20) | 0;
  i4 = i3;
  _memset(i3 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 352 >> 2] = i4;
  HEAP8[H_BASE + 344 | 0] = 1;
  i2 = i4;
 }
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i3 = HEAP32[i2 + 4 >> 2] | 0;
  i5 = i3 << 3 | 0;
  i6 = 0;
  i7 = i3;
 } else {
  i3 = HEAP32[i2 + 8 >> 2] | 0;
  i8 = i1;
  i9 = i8 + ~(i8 << 15) | 0;
  i8 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i8 >>> 6 ^ i8;
  i8 = i9 + ~(i9 << 11) | 0;
  i9 = i8 >>> 16 ^ i8;
  i8 = i3 & i9;
  i10 = i4 + (i8 << 3) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L8 : do {
   if ((i11 | 0) == (i1 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i8;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L8;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i3;
     i19 = i4 + (i18 << 3) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i1 | 0)) {
      i12 = i19;
      break;
     } else {
      i14 = i17;
      i15 = i18;
      i16 = i20;
     }
    }
   }
  } while (0);
  i1 = HEAP32[i2 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i4 + (i1 << 3) | 0 : i12;
  i6 = i4;
  i7 = i1;
 }
 if ((i5 | 0) == (i6 + (i7 << 3) | 0)) {
  return;
 }
 i7 = HEAP32[i5 + 4 >> 2] | 0;
 if ((i7 | 0) != 0) {
  __ZN7WebCore15EventTargetDataD1Ev(i7);
  __ZN3WTF8fastFreeEPv(i7);
 }
 HEAP32[i5 >> 2] = -1;
 i5 = i2 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i2 + 12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  return;
 }
 __ZN3WTF9HashTableIPN7WebCore4NodeENS_12KeyValuePairIS3_NS_6OwnPtrINS1_15EventTargetDataEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 return;
}
function __ZN7WebCore4Node33registerTransientMutationObserverEPNS_28MutationObserverRegistrationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 HEAP32[i5 >> 2] = i2;
 i2 = i1 + 12 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i7 & 2048 | 0) == 0) {
  i8 = i1 + 32 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  if ((i7 & 4 | 0) == 0) {
   i7 = __ZN3WTF10fastMallocEj(16) | 0;
   HEAP32[i7 >> 2] = i9;
   i10 = i7 + 4 | 0;
   HEAP32[i10 >> 2] = HEAP32[i10 >> 2] & -1024;
   HEAP32[i7 + 8 >> 2] = 0;
   HEAP32[i7 + 12 >> 2] = 0;
   i11 = i7;
  } else {
   i7 = __ZN3WTF10fastMallocEj(72) | 0;
   HEAP32[i7 >> 2] = i9;
   i9 = i7 + 4 | 0;
   HEAP32[i9 >> 2] = HEAP32[i9 >> 2] & -1024;
   i9 = i7 + 20 | 0;
   _memset(i7 + 8 | 0, 0, 12) | 0;
   HEAP32[i9 >> 2] = HEAP32[i9 >> 2] & -8192;
   HEAP32[i7 + 24 >> 2] = 0;
   HEAP32[i7 + 28 >> 2] = 2147483647;
   HEAP32[i7 + 32 >> 2] = 2147483647;
   _memset(i7 + 36 | 0, 0, 36) | 0;
   i11 = i7;
  }
  HEAP32[i8 >> 2] = i11;
  HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 2048;
  i12 = i11;
 } else {
  i12 = HEAP32[i1 + 32 >> 2] | 0;
 }
 i1 = i12 + 12 | 0;
 i12 = i1 | 0;
 i11 = HEAP32[i12 >> 2] | 0;
 if ((i11 | 0) != 0) {
  i13 = i11;
  i14 = i13 + 12 | 0;
  __ZN3WTF9HashTableIPN7WebCore28MutationObserverRegistrationES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i6, i14, i5, i5);
  STACKTOP = i3;
  return;
 }
 i11 = __ZN3WTF10fastMallocEj(32) | 0;
 _memset(i11 | 0, 0, 32) | 0;
 HEAP32[i4 >> 2] = i11;
 __ZN3WTF6OwnPtrIN7WebCore24NodeMutationObserverDataEEaSERKNS_10PassOwnPtrIS2_EE(i1, i4) | 0;
 __ZN3WTF10PassOwnPtrIN7WebCore24NodeMutationObserverDataEED2Ev(i4);
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = i13 + 12 | 0;
 __ZN3WTF9HashTableIPN7WebCore28MutationObserverRegistrationES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i6, i14, i5, i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore4Node10renderRectEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i5 | 0;
 i7 = i5;
 i8 = i2 + 32 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
  i9 = i8 | 0;
 } else {
  i9 = HEAP32[i8 >> 2] | 0;
 }
 i8 = HEAP32[i9 >> 2] | 0;
 L5 : do {
  if ((i8 | 0) != 0) {
   i9 = i8;
   while (1) {
    i2 = i9 + 20 | 0;
    i10 = HEAP32[i2 >> 2] | 0;
    i11 = HEAP32[i9 + 4 >> 2] | 0;
    do {
     if ((i10 & 128 | 0) == 0) {
      if ((HEAP32[i11 + 12 >> 2] & 4 | 0) == 0) {
       break;
      }
      i12 = HEAP32[i11 + 44 >> 2] | 0;
      i13 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
      if ((i12 | 0) == (i13 | 0)) {
       break L5;
      }
      if ((HEAP32[i12 + 12 >> 2] | 0) != (HEAP32[i13 + 12 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[i12 + 16 >> 2] | 0) == (HEAP32[i13 + 16 >> 2] | 0)) {
       break L5;
      }
     }
    } while (0);
    if ((HEAP32[(HEAP32[(HEAP32[i11 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) == (i11 | 0)) {
     break L5;
    }
    if ((i10 & 768 | 0) != 256) {
     if ((HEAP32[i9 + 24 >> 2] & 16 | 0) != 0) {
      i14 = i10 >>> 11 & 255;
      break;
     }
    }
    i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 96 >> 2] & 127](i9) | 0;
    i15 = HEAP32[i2 >> 2] | 0;
    if (i13) {
     i16 = 14;
     break;
    }
    if ((i15 & 2048 | 0) != 0) {
     i14 = i15 >>> 11 & 255;
     break;
    }
    i13 = HEAP32[i9 + 8 >> 2] | 0;
    if ((i13 | 0) == 0) {
     break L5;
    } else {
     i9 = i13 | 0;
    }
   }
   if ((i16 | 0) == 14) {
    i14 = i15 >>> 11 & 255;
   }
   HEAP8[i3] = i14 & 1;
   __ZNK7WebCore12RenderObject23absoluteBoundingBoxRectEb(i7, i9, 1);
   i13 = HEAP32[i6 + 4 >> 2] | 0;
   HEAP32[i1 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i1 + 4 >> 2] = i13;
   i13 = i5 + 8 | 0;
   i12 = HEAP32[i13 + 4 >> 2] | 0;
   HEAP32[i1 + 8 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i1 + 12 >> 2] = i12;
   STACKTOP = i4;
   return;
  }
 } while (0);
 _memset(i1 | 0, 0, 16) | 0;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore8Document43shouldInvalidateNodeListAndCollectionCachesEPKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  while (1) {
   if ((i3 | 0) >= 8) {
    i4 = 0;
    i5 = 26;
    break;
   }
   if ((HEAP32[i1 + 1356 + (i3 << 2) >> 2] | 0) == 0) {
    i3 = i3 + 1 | 0;
   } else {
    i4 = 1;
    i5 = 18;
    break;
   }
  }
  if ((i5 | 0) == 18) {
   return i4 | 0;
  } else if ((i5 | 0) == 26) {
   return i4 | 0;
  }
 }
 do {
  if ((HEAP32[i1 + 1360 >> 2] | 0) != 0) {
   if ((HEAP32[i2 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames9classAttrE >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 do {
  if ((HEAP32[i1 + 1364 >> 2] | 0) != 0) {
   i5 = HEAP32[i2 >> 2] | 0;
   if ((i5 | 0) == (HEAP32[__ZN7WebCore9HTMLNames6idAttrE >> 2] | 0) | (i5 | 0) == (HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 do {
  if ((HEAP32[i1 + 1368 >> 2] | 0) != 0) {
   if ((HEAP32[i2 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 do {
  if ((HEAP32[i1 + 1372 >> 2] | 0) != 0) {
   if ((HEAP32[i2 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames7forAttrE >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 do {
  if ((HEAP32[i1 + 1376 >> 2] | 0) != 0) {
   i5 = HEAP32[i2 >> 2] | 0;
   if ((i5 | 0) == (HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0) | (i5 | 0) == (HEAP32[__ZN7WebCore9HTMLNames6idAttrE >> 2] | 0) | (i5 | 0) == (HEAP32[__ZN7WebCore9HTMLNames7forAttrE >> 2] | 0) | (i5 | 0) == (HEAP32[__ZN7WebCore9HTMLNames8formAttrE >> 2] | 0) | (i5 | 0) == (HEAP32[__ZN7WebCore9HTMLNames8typeAttrE >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 do {
  if ((HEAP32[i1 + 1380 >> 2] | 0) != 0) {
   if ((HEAP32[i2 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames8hrefAttrE >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i4 = (HEAP32[i1 + 1384 >> 2] | 0) != 0;
 return i4 | 0;
}
function __ZNK7WebCore14HTMLCollection15invalidateCacheEPKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 L1 : do {
  if ((i2 | 0) != 0) {
   switch ((HEAP32[i1 + 32 >> 2] | 0) >>> 2 & 15 | 0) {
   case 6:
    {
     i3 = HEAP32[i2 >> 2] | 0;
     if ((i3 | 0) == (HEAP32[__ZN7WebCore9HTMLNames8hrefAttrE >> 2] | 0)) {
      break L1;
     } else {
      i4 = i3;
     }
     break;
    }
   case 7:
    {
     break L1;
     break;
    }
   case 3:
    {
     i3 = HEAP32[i2 >> 2] | 0;
     if ((i3 | 0) == (HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0)) {
      break L1;
     } else {
      i4 = i3;
     }
     break;
    }
   case 5:
    {
     i3 = HEAP32[i2 >> 2] | 0;
     if ((i3 | 0) == (HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0) | (i3 | 0) == (HEAP32[__ZN7WebCore9HTMLNames6idAttrE >> 2] | 0) | (i3 | 0) == (HEAP32[__ZN7WebCore9HTMLNames7forAttrE >> 2] | 0) | (i3 | 0) == (HEAP32[__ZN7WebCore9HTMLNames8formAttrE >> 2] | 0) | (i3 | 0) == (HEAP32[__ZN7WebCore9HTMLNames8typeAttrE >> 2] | 0)) {
      break L1;
     } else {
      i4 = i3;
     }
     break;
    }
   case 4:
    {
     i3 = HEAP32[i2 >> 2] | 0;
     if ((i3 | 0) == (HEAP32[__ZN7WebCore9HTMLNames7forAttrE >> 2] | 0)) {
      break L1;
     } else {
      i4 = i3;
     }
     break;
    }
   case 2:
    {
     i3 = HEAP32[i2 >> 2] | 0;
     if ((i3 | 0) == (HEAP32[__ZN7WebCore9HTMLNames6idAttrE >> 2] | 0) | (i3 | 0) == (HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0)) {
      break L1;
     } else {
      i4 = i3;
     }
     break;
    }
   case 1:
    {
     i3 = HEAP32[i2 >> 2] | 0;
     if ((i3 | 0) == (HEAP32[__ZN7WebCore9HTMLNames9classAttrE >> 2] | 0)) {
      break L1;
     } else {
      i4 = i3;
     }
     break;
    }
   default:
    {
     i4 = HEAP32[i2 >> 2] | 0;
    }
   }
   if (!((i4 | 0) == (HEAP32[__ZN7WebCore9HTMLNames6idAttrE >> 2] | 0) | (i4 | 0) == (HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0))) {
    return;
   }
   __ZNK7WebCore14HTMLCollection25invalidateIdNameCacheMapsEv(i1);
   return;
  }
 } while (0);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1);
 return;
}
function __ZNK7WebCore4Node32isDescendantOrShadowDescendantOfEPKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i2 + 12 >> 2] | 0;
 i5 = (i4 & 2 | 0) == 0;
 L4 : do {
  if (!i5) {
   if ((HEAP32[i2 + 36 >> 2] | 0) == 0) {
    break;
   }
   i6 = (HEAP32[i1 + 12 >> 2] & 256 | 0) != 0;
   if (i6 ^ (i4 & 256 | 0) != 0) {
    break;
   }
   if ((HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) == (i2 | 0)) {
    i7 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
    if (i6 & ((i7 | 0) != (i1 | 0) & (i7 | 0) == (i2 | 0))) {
     i3 = 1;
    } else {
     break;
    }
    return i3 | 0;
   }
   i7 = i1 + 16 | 0;
   while (1) {
    i6 = HEAP32[i7 >> 2] | 0;
    if ((i6 | 0) == 0) {
     break L4;
    }
    if ((i6 | 0) == (i2 | 0)) {
     i3 = 1;
     break;
    } else {
     i7 = i6 + 16 | 0;
    }
   }
   return i3 | 0;
  }
 } while (0);
 i7 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 4 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i8 = i1;
  } else {
   if ((HEAP32[i7 + 12 >> 2] & 4096 | 0) == 0) {
    i8 = i1;
    break;
   }
   if ((HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i7 | 0)) {
    i8 = i1;
    break;
   }
   i8 = HEAP32[i7 + 92 >> 2] | 0;
  }
 } while (0);
 if ((i8 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i7 = (i8 | 0) == (i2 | 0);
 if (i7 | i5) {
  i3 = i7;
  return i3 | 0;
 }
 if ((HEAP32[i2 + 36 >> 2] | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i7 = (HEAP32[i8 + 12 >> 2] & 256 | 0) != 0;
 if (i7 ^ (i4 & 256 | 0) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) == (i2 | 0)) {
  i4 = HEAP32[(HEAP32[i8 + 20 >> 2] | 0) + 8 >> 2] | 0;
  i3 = i7 & ((i4 | 0) != (i8 | 0) & (i4 | 0) == (i2 | 0));
  return i3 | 0;
 }
 i4 = i8 + 16 | 0;
 while (1) {
  i8 = HEAP32[i4 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i3 = 0;
   i9 = 33;
   break;
  }
  if ((i8 | 0) == (i2 | 0)) {
   i3 = 1;
   i9 = 32;
   break;
  } else {
   i4 = i8 + 16 | 0;
  }
 }
 if ((i9 | 0) == 32) {
  return i3 | 0;
 } else if ((i9 | 0) == 33) {
  return i3 | 0;
 }
 return 0;
}
function __ZNK7WebCore4Node48updateAncestorConnectedSubframeCountForInsertionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 & 2048 | 0) == 0) {
  return;
 }
 i3 = HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 4 >> 2] | 0;
 if ((i3 & 1023 | 0) == 0) {
  return;
 }
 do {
  if ((i2 & 4096 | 0) == 0) {
   i4 = 6;
  } else {
   if ((HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i1 | 0)) {
    i4 = 6;
    break;
   }
   i5 = HEAP32[i1 + 92 >> 2] | 0;
  }
 } while (0);
 if ((i4 | 0) == 6) {
  i5 = HEAP32[i1 + 16 >> 2] | 0;
 }
 if ((i5 | 0) == 0) {
  return;
 } else {
  i6 = i5;
 }
 while (1) {
  i5 = i6 | 0;
  i1 = i6 + 12 | 0;
  i2 = HEAP32[i1 >> 2] | 0;
  if ((i2 & 2048 | 0) == 0) {
   i7 = i6 + 32 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   if ((i2 & 4 | 0) == 0) {
    i2 = __ZN3WTF10fastMallocEj(16) | 0;
    HEAP32[i2 >> 2] = i8;
    i9 = i2 + 4 | 0;
    HEAP32[i9 >> 2] = HEAP32[i9 >> 2] & -1024;
    HEAP32[i2 + 8 >> 2] = 0;
    HEAP32[i2 + 12 >> 2] = 0;
    i10 = i2;
   } else {
    i2 = __ZN3WTF10fastMallocEj(72) | 0;
    HEAP32[i2 >> 2] = i8;
    i8 = i2 + 4 | 0;
    HEAP32[i8 >> 2] = HEAP32[i8 >> 2] & -1024;
    i8 = i2 + 20 | 0;
    _memset(i2 + 8 | 0, 0, 12) | 0;
    HEAP32[i8 >> 2] = HEAP32[i8 >> 2] & -8192;
    HEAP32[i2 + 24 >> 2] = 0;
    HEAP32[i2 + 28 >> 2] = 2147483647;
    HEAP32[i2 + 32 >> 2] = 2147483647;
    _memset(i2 + 36 | 0, 0, 36) | 0;
    i10 = i2;
   }
   HEAP32[i7 >> 2] = i10;
   HEAP32[i1 >> 2] = HEAP32[i1 >> 2] | 2048;
   i11 = i10;
  } else {
   i11 = HEAP32[i6 + 32 >> 2] | 0;
  }
  i7 = i11 + 4 | 0;
  i2 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i2 + i3 & 1023 | i2 & -1024;
  do {
   if ((HEAP32[i1 >> 2] & 4096 | 0) == 0) {
    i4 = 18;
   } else {
    if ((HEAP32[(HEAP32[i6 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i6 | 0)) {
     i4 = 18;
     break;
    }
    i12 = HEAP32[i5 + 92 >> 2] | 0;
   }
  } while (0);
  if ((i4 | 0) == 18) {
   i4 = 0;
   i12 = HEAP32[i6 + 16 >> 2] | 0;
  }
  if ((i12 | 0) == 0) {
   break;
  } else {
   i6 = i12;
  }
 }
 return;
}
function __ZN7WebCore15ElementRareDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 68 >> 2] | 0;
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
 i2 = HEAP32[i1 + 64 >> 2] | 0;
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
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = i2 | 0;
  if ((HEAP32[i3 >> 2] | 0) != 0) {
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i3);
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 56 >> 2] | 0;
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
 i2 = i1 + 52 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
 }
 i3 = i1 + 48 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
 }
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 __ZN3WTF6OwnPtrIN7WebCore24NodeMutationObserverDataEED2Ev(i1 + 12 | 0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore17NodeListsNodeDataD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN3WTF7HashSetIPN7WebCore28MutationObserverRegistrationENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 2 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  i2 = i8;
  i9 = i2 + ~(i2 << 15) | 0;
  i2 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i2 >>> 6 ^ i2;
  i2 = i9 + ~(i9 << 11) | 0;
  i9 = i2 >>> 16 ^ i2;
  i2 = i9 & i4;
  i10 = i3 + (i2 << 2) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L4 : do {
   if ((i11 | 0) == (i8 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i2;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L4;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 << 2) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i8 | 0)) {
      i12 = i19;
      break;
     } else {
      i14 = i17;
      i15 = i18;
      i16 = i20;
     }
    }
   }
  } while (0);
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 2) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 2) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN7WebCore28MutationObserverRegistrationES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore4Node23dispatchBeforeLoadEventERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((HEAP16[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 768 >> 1] & 2048) == 0) {
  i5 = 1;
  STACKTOP = i3;
  return i5 | 0;
 }
 i6 = i1 + 8 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 i6 = __ZN3WTF10fastMallocEj(56) | 0;
 i7 = i6;
 __ZN7WebCore5EventC2ERKN3WTF12AtomicStringEbb(i7, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 16 | 0, 0, 1);
 HEAP32[i6 >> 2] = H_BASE + 272;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i6 + 52 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i2 = i8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 i8 = i4 | 0;
 HEAP32[i8 >> 2] = i7;
 i9 = (i6 | 0) == 0;
 if (!i9) {
  i10 = i6 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 FUNCTION_TABLE_iii[i2 & 15](i1, i4) | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 8 | 0;
   i2 = i8 | 0;
   i10 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i2 >> 2] = i10;
    break;
   }
   i10 = i8 - 8 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
  }
 } while (0);
 i4 = (HEAP8[i6 + 20 | 0] & 1) == 0;
 do {
  if (!i9) {
   i10 = i6 + 8 | 0;
   i8 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i7);
    break;
   } else {
    HEAP32[i10 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i7 = i1 + 8 | 0;
 i1 = i7 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) >= 1) {
  i5 = i4;
  STACKTOP = i3;
  return i5 | 0;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  i5 = i4;
  STACKTOP = i3;
  return i5 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 i5 = i4;
 STACKTOP = i3;
 return i5 | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore4Node29willRespondToMouseClickEventsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 if ((HEAP32[i1 + 12 >> 2] & 4 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 496 >> 2] & 127](i1) | 0) {
  i2 = 0;
  return i2 | 0;
 }
 __ZN7WebCore8Document19updateStyleIfNeededEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0);
 if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i1, 0, 1) | 0) {
  i2 = 1;
  return i2 | 0;
 }
 i3 = i1 | 0;
 i4 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 i5 = i1;
 i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 48 >> 2] & 127](i3) | 0;
 do {
  if ((i1 | 0) != 0) {
   if (__ZNK7WebCore16EventListenerMap8containsERKN3WTF12AtomicStringE(i1 | 0, i4 + 256 | 0) | 0) {
    i2 = 1;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 i4 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 48 >> 2] & 127](i3) | 0;
 do {
  if ((i1 | 0) != 0) {
   if (__ZNK7WebCore16EventListenerMap8containsERKN3WTF12AtomicStringE(i1 | 0, i4 + 232 | 0) | 0) {
    i2 = 1;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 i4 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 48 >> 2] & 127](i3) | 0;
 do {
  if ((i1 | 0) != 0) {
   if (__ZNK7WebCore16EventListenerMap8containsERKN3WTF12AtomicStringE(i1 | 0, i4 + 56 | 0) | 0) {
    i2 = 1;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 i4 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 48 >> 2] & 127](i3) | 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = __ZNK7WebCore16EventListenerMap8containsERKN3WTF12AtomicStringE(i1 | 0, i4 + 388 | 0) | 0;
 return i2 | 0;
}
function __ZNK7WebCore4Node12lookupPrefixERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = i3 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 L1 : do {
  if ((i5 | 0) != 0) {
   i6 = i2;
   i7 = i5;
   L2 : while (1) {
    if ((HEAP32[i7 + 4 >> 2] | 0) == 0) {
     break L1;
    }
    switch (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 76 >> 2] & 127](i6) | 0) {
    case 2:
     {
      i8 = HEAP32[i6 + 44 >> 2] | 0;
      if ((i8 | 0) == 0) {
       i9 = 13;
       break L2;
      }
      i10 = i8 | 0;
      break;
     }
    case 1:
     {
      i9 = 5;
      break L2;
      break;
     }
    case 9:
     {
      i8 = HEAP32[i6 + 692 >> 2] | 0;
      if ((i8 | 0) == 0) {
       i9 = 9;
       break L2;
      }
      i10 = i8 | 0;
      break;
     }
    case 6:
    case 12:
    case 11:
    case 10:
     {
      i9 = 10;
      break L2;
      break;
     }
    default:
     {
      i8 = i6 + 16 | 0;
      while (1) {
       i11 = HEAP32[i8 >> 2] | 0;
       if ((i11 | 0) == 0) {
        i9 = 18;
        break L2;
       }
       if ((HEAP32[i11 + 12 >> 2] & 4 | 0) == 0) {
        i8 = i11 + 16 | 0;
       } else {
        break;
       }
      }
      i10 = i11 | 0;
     }
    }
    i8 = HEAP32[i4 >> 2] | 0;
    if ((i8 | 0) == 0) {
     break L1;
    } else {
     i6 = i10;
     i7 = i8;
    }
   }
   if ((i9 | 0) == 5) {
    __ZNK7WebCore4Node21lookupNamespacePrefixERKN3WTF12AtomicStringEPKNS_7ElementE(i1, i6, i3, i6);
    return;
   } else if ((i9 | 0) == 13) {
    HEAP32[i1 >> 2] = 0;
    return;
   } else if ((i9 | 0) == 10) {
    HEAP32[i1 >> 2] = 0;
    return;
   } else if ((i9 | 0) == 9) {
    HEAP32[i1 >> 2] = 0;
    return;
   } else if ((i9 | 0) == 18) {
    HEAP32[i1 >> 2] = 0;
    return;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore4Node17canStartSelectionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i1, 0, 1) | 0) {
  i2 = 1;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 i4 = (i3 & 2048 | 0) == 0;
 i5 = i1 + 32 | 0;
 if (i4) {
  i6 = i5 | 0;
 } else {
  i6 = HEAP32[i5 >> 2] | 0;
 }
 do {
  if ((HEAP32[i6 >> 2] | 0) != 0) {
   if (i4) {
    i7 = i5 | 0;
   } else {
    i7 = HEAP32[i5 >> 2] | 0;
   }
   i8 = HEAP32[i7 >> 2] | 0;
   if ((HEAP32[i8 + 20 >> 2] & 768 | 0) == 256) {
    i9 = HEAP32[(HEAP32[i8 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i9 = HEAP32[i8 + 36 >> 2] | 0;
   }
   if ((HEAP32[(HEAP32[i9 + 20 >> 2] | 0) + 292 >> 2] & 25165824 | 0) != 16777216) {
    break;
   }
   if ((HEAP32[(HEAP32[i9 + 24 >> 2] | 0) + 88 >> 2] & 98304 | 0) == 0) {
    i2 = 0;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 i9 = (i3 & 4096 | 0) == 0;
 do {
  if (i9) {
   i10 = 17;
  } else {
   if ((HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i1 | 0)) {
    i10 = 17;
    break;
   }
   i11 = HEAP32[i1 + 92 >> 2] | 0;
  }
 } while (0);
 if ((i10 | 0) == 17) {
  i11 = HEAP32[i1 + 16 >> 2] | 0;
 }
 if ((i11 | 0) == 0) {
  i2 = 1;
  return i2 | 0;
 }
 do {
  if (i9) {
   i10 = 22;
  } else {
   if ((HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i1 | 0)) {
    i10 = 22;
    break;
   }
   i12 = HEAP32[i1 + 92 >> 2] | 0;
  }
 } while (0);
 if ((i10 | 0) == 22) {
  i12 = HEAP32[i1 + 16 >> 2] | 0;
 }
 i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 172 >> 2] & 127](i12 | 0) | 0;
 return i2 | 0;
}
function __ZN7WebCore4NodeD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 & 2048 | 0) == 0) {
  i4 = i3;
 } else {
  __ZN7WebCore4Node13clearRareDataEv(i1);
  i4 = HEAP32[i2 >> 2] | 0;
 }
 i2 = i1 + 20 | 0;
 do {
  if ((i4 & 2 | 0) == 0) {
   i3 = HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   if ((i4 & 2097152 | 0) != 0) {
    __ZN7WebCore4Node20clearEventTargetDataEv(i1);
   }
   __ZNK7WebCore8Document21existingAXObjectCacheEv(i3) | 0;
  }
 } while (0);
 i4 = HEAP32[i2 >> 2] | 0;
 i2 = i4 + 16 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i3;
 do {
  if ((i3 | 0) == 0) {
   if ((__ZNK7WebCore9TreeScope8refCountEv(i4) | 0) != 0) {
    break;
   }
   if ((HEAP8[H_BASE + 368 | 0] | 0) == 0) {
    i2 = __Znwj(44) | 0;
    __ZN7WebCore9TreeScopeC1Ev(i2);
    HEAP32[H_BASE + 360 >> 2] = i2;
    HEAP32[H_BASE + 368 >> 2] = 1;
    HEAP32[H_BASE + 372 >> 2] = 0;
    i5 = i2;
   } else {
    i5 = HEAP32[H_BASE + 360 >> 2] | 0;
   }
   if ((i5 | 0) == (i4 | 0) | (i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 31](i4);
  }
 } while (0);
 HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] = (HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] | 0) - 1;
 i4 = i1 + 4 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  i6 = i1 | 0;
  __ZN7WebCore11EventTargetD2Ev(i6);
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i4);
 i6 = i1 | 0;
 __ZN7WebCore11EventTargetD2Ev(i6);
 return;
}
function __ZN7WebCore4NodeD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 & 2048 | 0) == 0) {
  i4 = i3;
 } else {
  __ZN7WebCore4Node13clearRareDataEv(i1);
  i4 = HEAP32[i2 >> 2] | 0;
 }
 i2 = i1 + 20 | 0;
 do {
  if ((i4 & 2 | 0) == 0) {
   i3 = HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   if ((i4 & 2097152 | 0) != 0) {
    __ZN7WebCore4Node20clearEventTargetDataEv(i1);
   }
   __ZNK7WebCore8Document21existingAXObjectCacheEv(i3) | 0;
  }
 } while (0);
 i4 = HEAP32[i2 >> 2] | 0;
 i2 = i4 + 16 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i3;
 do {
  if ((i3 | 0) == 0) {
   if ((__ZNK7WebCore9TreeScope8refCountEv(i4) | 0) != 0) {
    break;
   }
   if ((HEAP8[H_BASE + 368 | 0] | 0) == 0) {
    i2 = __Znwj(44) | 0;
    __ZN7WebCore9TreeScopeC1Ev(i2);
    HEAP32[H_BASE + 360 >> 2] = i2;
    HEAP32[H_BASE + 368 >> 2] = 1;
    HEAP32[H_BASE + 372 >> 2] = 0;
    i5 = i2;
   } else {
    i5 = HEAP32[H_BASE + 360 >> 2] | 0;
   }
   if ((i5 | 0) == (i4 | 0) | (i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 31](i4);
  }
 } while (0);
 HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] = (HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] | 0) - 1;
 i4 = i1 + 4 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  i6 = i1 | 0;
  __ZN7WebCore11EventTargetD2Ev(i6);
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i4);
 i6 = i1 | 0;
 __ZN7WebCore11EventTargetD2Ev(i6);
 return;
}
function __ZN7WebCore4Node38markAncestorsWithChildNeedsStyleRecalcEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 & 1048580 | 0) == 1048580) {
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 232 >> 2] & 127](i1) | 0) == 0) {
    i4 = HEAP32[i2 >> 2] | 0;
    i5 = 5;
    break;
   } else {
    i6 = HEAP32[i1 + 52 >> 2] | 0;
    break;
   }
  } else {
   i4 = i3;
   i5 = 5;
  }
 } while (0);
 L6 : do {
  if ((i5 | 0) == 5) {
   do {
    if ((i4 & 4096 | 0) != 0) {
     if ((HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i1 | 0)) {
      break;
     }
     i6 = HEAP32[i1 + 92 >> 2] | 0;
     break L6;
    }
   } while (0);
   i6 = HEAP32[i1 + 16 >> 2] | 0;
  }
 } while (0);
 L13 : do {
  if ((i6 | 0) != 0) {
   i4 = i6;
   while (1) {
    i3 = i4 | 0;
    i2 = i4 + 12 | 0;
    i7 = HEAP32[i2 >> 2] | 0;
    if ((i7 & 128 | 0) != 0) {
     break L13;
    }
    HEAP32[i2 >> 2] = i7 | 128;
    do {
     if ((i7 & 4096 | 0) == 0) {
      i5 = 15;
     } else {
      if ((HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i4 | 0)) {
       i5 = 15;
       break;
      }
      i8 = HEAP32[i3 + 92 >> 2] | 0;
     }
    } while (0);
    if ((i5 | 0) == 15) {
     i5 = 0;
     i8 = HEAP32[i4 + 16 >> 2] | 0;
    }
    if ((i8 | 0) == 0) {
     break;
    } else {
     i4 = i8;
    }
   }
  }
 } while (0);
 i8 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP32[i8 + 12 >> 2] & 128 | 0) == 0) {
  return;
 }
 __ZN7WebCore8Document19scheduleStyleRecalcEv(i8);
 return;
}
function __ZNK7WebCore4Node19rootEditableElementENS_12EditableTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 do {
  if ((i2 | 0) == 1) {
   if ((__ZNK7WebCore8Document21existingAXObjectCacheEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0) != 0 | (i1 | 0) == 0) {
    i3 = 0;
   } else {
    i4 = 0;
    i5 = i1;
    break;
   }
   return i3 | 0;
  } else {
   if ((i1 | 0) == 0) {
    i3 = 0;
   } else {
    i4 = 0;
    i5 = i1;
    break;
   }
   return i3 | 0;
  }
 } while (0);
 L6 : while (1) {
  if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i5, 0, 1) | 0)) {
   i3 = i4;
   i6 = 16;
   break;
  }
  do {
   if ((HEAP32[i5 + 12 >> 2] & 4 | 0) == 0) {
    i7 = i4;
   } else {
    i1 = i5;
    i2 = HEAP32[i5 + 44 >> 2] | 0;
    i8 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
    if ((i2 | 0) == (i8 | 0)) {
     i3 = i1;
     i6 = 12;
     break L6;
    }
    if ((HEAP32[i2 + 12 >> 2] | 0) != (HEAP32[i8 + 12 >> 2] | 0)) {
     i7 = i1;
     break;
    }
    if ((HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[i8 + 16 >> 2] | 0)) {
     i3 = i1;
     i6 = 11;
     break L6;
    } else {
     i7 = i1;
    }
   }
  } while (0);
  i1 = HEAP32[i5 + 16 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i3 = i7;
   i6 = 14;
   break;
  } else {
   i4 = i7;
   i5 = i1 | 0;
  }
 }
 if ((i6 | 0) == 14) {
  return i3 | 0;
 } else if ((i6 | 0) == 11) {
  return i3 | 0;
 } else if ((i6 | 0) == 16) {
  return i3 | 0;
 } else if ((i6 | 0) == 12) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore4Node15eventTargetDataEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 if ((HEAP32[i1 + 12 >> 2] & 2097152 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if (HEAP8[H_BASE + 344 | 0] | 0) {
  i3 = HEAP32[H_BASE + 352 >> 2] | 0;
 } else {
  i4 = __ZN3WTF10fastMallocEj(20) | 0;
  i5 = i4;
  _memset(i4 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 352 >> 2] = i5;
  HEAP8[H_BASE + 344 | 0] = 1;
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
function __ZNK7WebCore4Node11textContentEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 24 | 0;
 HEAP32[i5 >> 2] = 0;
 i7 = i5 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i5 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP8[i5 + 12 | 0] = 1;
 HEAP32[i5 + 16 >> 2] = 0;
 HEAP32[i5 + 20 >> 2] = 0;
 HEAP8[i6] = 1;
 __ZN7WebCoreL17appendTextContentEPKNS_4NodeEbRbRN3WTF13StringBuilderE(i2, i3, i6, i5);
 do {
  if ((HEAP8[i6] & 1) == 0) {
   __ZN3WTF13StringBuilder11shrinkToFitEv(i5);
   i3 = HEAP32[i7 >> 2] | 0;
   if ((i3 | 0) == 0) {
    __ZNK3WTF13StringBuilder11reifyStringEv(i5);
    i2 = HEAP32[i7 >> 2] | 0;
    HEAP32[i1 >> 2] = i2;
    if ((i2 | 0) == 0) {
     break;
    } else {
     i9 = i2;
    }
   } else {
    HEAP32[i1 >> 2] = i3;
    i9 = i3;
   }
   i3 = i9 | 0;
   HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
  } else {
   HEAP32[i1 >> 2] = 0;
  }
 } while (0);
 i1 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i8 = i1 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i8 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i7 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i1 | 0;
 i9 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i9 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i7 >> 2] = i9;
  STACKTOP = i4;
  return;
 }
}
function __ZNK7WebCore4Node26pseudoAwarePreviousSiblingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 12 | 0;
 do {
  if ((HEAP32[i2 >> 2] & 1048580 | 0) == 1048580) {
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 232 >> 2] & 127](i1) | 0) == 0) {
    i3 = 3;
    break;
   }
   i4 = HEAP32[i1 + 52 >> 2] | 0;
   if ((i4 | 0) != 0) {
    i5 = i4;
    i6 = i4;
    i3 = 7;
   }
  } else {
   i3 = 3;
  }
 } while (0);
 do {
  if ((i3 | 0) == 3) {
   i4 = HEAP32[i1 + 16 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   if ((HEAP32[i4 + 12 >> 2] & 4 | 0) == 0) {
    break;
   }
   i5 = i4;
   i6 = i4;
   i3 = 7;
  }
 } while (0);
 do {
  if ((i3 | 0) == 7) {
   i4 = i6;
   if ((HEAP32[i1 + 24 >> 2] | 0) != 0) {
    break;
   }
   do {
    if ((HEAP32[i2 >> 2] & 1048580 | 0) == 1048580) {
     if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 232 >> 2] & 127](i1) | 0) != 4) {
      break;
     }
     i7 = HEAP32[i5 + 40 >> 2] | 0;
     if ((i7 | 0) == 0) {
      break;
     } else {
      i8 = i7;
     }
     return i8 | 0;
    }
   } while (0);
   if ((HEAP32[i2 >> 2] & 1048580 | 0) == 1048580) {
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 232 >> 2] & 127](i1) | 0) == 3) {
     break;
    }
   }
   i8 = __ZNK7WebCore7Element19beforePseudoElementEv(i4) | 0;
   return i8 | 0;
  }
 } while (0);
 i8 = HEAP32[i1 + 24 >> 2] | 0;
 return i8 | 0;
}
function __ZNK7WebCore4Node22pseudoAwareNextSiblingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 12 | 0;
 do {
  if ((HEAP32[i2 >> 2] & 1048580 | 0) == 1048580) {
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 232 >> 2] & 127](i1) | 0) == 0) {
    i3 = 3;
    break;
   }
   i4 = HEAP32[i1 + 52 >> 2] | 0;
   if ((i4 | 0) != 0) {
    i5 = i4;
    i6 = i4;
    i3 = 7;
   }
  } else {
   i3 = 3;
  }
 } while (0);
 do {
  if ((i3 | 0) == 3) {
   i4 = HEAP32[i1 + 16 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   if ((HEAP32[i4 + 12 >> 2] & 4 | 0) == 0) {
    break;
   }
   i5 = i4;
   i6 = i4;
   i3 = 7;
  }
 } while (0);
 do {
  if ((i3 | 0) == 7) {
   i4 = i6;
   if ((HEAP32[i1 + 28 >> 2] | 0) != 0) {
    break;
   }
   do {
    if ((HEAP32[i2 >> 2] & 1048580 | 0) == 1048580) {
     if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 232 >> 2] & 127](i1) | 0) != 3) {
      break;
     }
     i7 = HEAP32[i5 + 36 >> 2] | 0;
     if ((i7 | 0) == 0) {
      break;
     } else {
      i8 = i7;
     }
     return i8 | 0;
    }
   } while (0);
   if ((HEAP32[i2 >> 2] & 1048580 | 0) == 1048580) {
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 232 >> 2] & 127](i1) | 0) == 4) {
     break;
    }
   }
   i8 = __ZNK7WebCore7Element18afterPseudoElementEv(i4) | 0;
   return i8 | 0;
  }
 } while (0);
 i8 = HEAP32[i1 + 28 >> 2] | 0;
 return i8 | 0;
}
function __ZN7WebCore4Node31incrementConnectedSubframeCountEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = i1 + 12 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 & 2048 | 0) != 0) {
  i5 = HEAP32[i1 + 32 >> 2] | 0;
  i6 = i5 + 4 | 0;
  i7 = i6;
  i8 = HEAP32[i7 >> 2] | 0;
  i9 = i8 + i2 | 0;
  i10 = i9 & 1023;
  i11 = i8 & -1024;
  i12 = i10 | i11;
  HEAP32[i7 >> 2] = i12;
  return;
 }
 i13 = i1 + 32 | 0;
 i1 = HEAP32[i13 >> 2] | 0;
 if ((i4 & 4 | 0) == 0) {
  i4 = __ZN3WTF10fastMallocEj(16) | 0;
  HEAP32[i4 >> 2] = i1;
  i14 = i4 + 4 | 0;
  HEAP32[i14 >> 2] = HEAP32[i14 >> 2] & -1024;
  HEAP32[i4 + 8 >> 2] = 0;
  HEAP32[i4 + 12 >> 2] = 0;
  i15 = i4;
 } else {
  i4 = __ZN3WTF10fastMallocEj(72) | 0;
  HEAP32[i4 >> 2] = i1;
  i1 = i4 + 4 | 0;
  HEAP32[i1 >> 2] = HEAP32[i1 >> 2] & -1024;
  i1 = i4 + 20 | 0;
  _memset(i4 + 8 | 0, 0, 12) | 0;
  HEAP32[i1 >> 2] = HEAP32[i1 >> 2] & -8192;
  HEAP32[i4 + 24 >> 2] = 0;
  HEAP32[i4 + 28 >> 2] = 2147483647;
  HEAP32[i4 + 32 >> 2] = 2147483647;
  _memset(i4 + 36 | 0, 0, 36) | 0;
  i15 = i4;
 }
 HEAP32[i13 >> 2] = i15;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] | 2048;
 i5 = i15;
 i6 = i5 + 4 | 0;
 i7 = i6;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i8 + i2 | 0;
 i10 = i9 & 1023;
 i11 = i8 & -1024;
 i12 = i10 | i11;
 HEAP32[i7 >> 2] = i12;
 return;
}
function __ZN7WebCore4Node48invalidateNodeListAndCollectionCachesInAncestorsEPKNS_13QualifiedNameEPNS_7ElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 do {
  if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) != 0) {
   if ((i2 | 0) != 0) {
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 112 >> 2] & 127](i1) | 0)) {
     break;
    }
   }
   i4 = HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 8 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i5 = HEAP32[i4 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   __ZN7WebCore13ChildNodeList15invalidateCacheEv(i5);
  }
 } while (0);
 if ((i2 | 0) != 0 & (i3 | 0) == 0) {
  return;
 }
 i3 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 if (!(__ZNK7WebCore8Document43shouldInvalidateNodeListAndCollectionCachesEPKNS_13QualifiedNameE(i3, i2) | 0)) {
  return;
 }
 __ZN7WebCore8Document37invalidateNodeListAndCollectionCachesEPKNS_13QualifiedNameE(i3, i2);
 if ((i1 | 0) == 0) {
  return;
 } else {
  i6 = i1;
 }
 while (1) {
  do {
   if ((HEAP32[i6 + 12 >> 2] & 2048 | 0) != 0) {
    i1 = HEAP32[(HEAP32[i6 + 32 >> 2] | 0) + 8 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    __ZN7WebCore17NodeListsNodeData16invalidateCachesEPKNS_13QualifiedNameE(i1, i2);
   }
  } while (0);
  i1 = HEAP32[i6 + 16 >> 2] | 0;
  if ((i1 | 0) == 0) {
   break;
  } else {
   i6 = i1 | 0;
  }
 }
 return;
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
function __ZN7WebCore4Node28willRespondToMouseMoveEventsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 if ((HEAP32[i1 + 12 >> 2] & 4 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 496 >> 2] & 127](i1) | 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = i1 | 0;
 i4 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 i5 = i1;
 i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 48 >> 2] & 127](i3) | 0;
 do {
  if ((i1 | 0) != 0) {
   if (__ZNK7WebCore16EventListenerMap8containsERKN3WTF12AtomicStringE(i1 | 0, i4 + 244 | 0) | 0) {
    i2 = 1;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 i4 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 48 >> 2] & 127](i3) | 0;
 do {
  if ((i1 | 0) != 0) {
   if (__ZNK7WebCore16EventListenerMap8containsERKN3WTF12AtomicStringE(i1 | 0, i4 + 252 | 0) | 0) {
    i2 = 1;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 i4 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 48 >> 2] & 127](i3) | 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = __ZNK7WebCore16EventListenerMap8containsERKN3WTF12AtomicStringE(i1 | 0, i4 + 248 | 0) | 0;
 return i2 | 0;
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
function __ZN7WebCore4Node14checkSetPrefixERKN3WTF12AtomicStringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   if ((HEAP32[i5 + 4 >> 2] | 0) == 0) {
    break;
   }
   if (__ZN7WebCore8Document11isValidNameERKN3WTF6StringE(i2 | 0) | 0) {
    break;
   }
   HEAP32[i3 >> 2] = 5;
   return;
  }
 } while (0);
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 76 >> 2] & 127](i1) | 0) == 5) {
  HEAP32[i3 >> 2] = 7;
  return;
 }
 i2 = HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 92 >> 2] & 127](i1) | 0) >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i6 = 10;
  } else {
   if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
    i6 = 10;
    break;
   }
   i7 = HEAP32[i4 >> 2] | 0;
   i6 = 12;
  }
 } while (0);
 do {
  if ((i6 | 0) == 10) {
   i1 = HEAP32[i4 >> 2] | 0;
   if ((i1 | 0) == 0) {
    i7 = 0;
    i6 = 12;
    break;
   }
   if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
    i7 = i1;
    i6 = 12;
   }
  }
 } while (0);
 do {
  if ((i6 | 0) == 12) {
   if (!((i7 | 0) != (HEAP32[__ZN3WTF7xmlAtomE >> 2] | 0) | (i2 | 0) == (HEAP32[__ZN7WebCore8XMLNames15xmlNamespaceURIE >> 2] | 0))) {
    break;
   }
   return;
  }
 } while (0);
 HEAP32[i3 >> 2] = 14;
 return;
}
function __ZNK7WebCore4Node19rootEditableElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 } else {
  i3 = 0;
  i4 = i1;
 }
 L3 : while (1) {
  if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i4, 0, 1) | 0)) {
   i2 = i3;
   i5 = 12;
   break;
  }
  do {
   if ((HEAP32[i4 + 12 >> 2] & 4 | 0) == 0) {
    i6 = i3;
   } else {
    i1 = i4;
    i7 = HEAP32[i4 + 44 >> 2] | 0;
    i8 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
    if ((i7 | 0) == (i8 | 0)) {
     i2 = i1;
     i5 = 11;
     break L3;
    }
    if ((HEAP32[i7 + 12 >> 2] | 0) != (HEAP32[i8 + 12 >> 2] | 0)) {
     i6 = i1;
     break;
    }
    if ((HEAP32[i7 + 16 >> 2] | 0) == (HEAP32[i8 + 16 >> 2] | 0)) {
     i2 = i1;
     i5 = 10;
     break L3;
    } else {
     i6 = i1;
    }
   }
  } while (0);
  i1 = HEAP32[i4 + 16 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i2 = i6;
   i5 = 13;
   break;
  } else {
   i3 = i6;
   i4 = i1 | 0;
  }
 }
 if ((i5 | 0) == 12) {
  return i2 | 0;
 } else if ((i5 | 0) == 13) {
  return i2 | 0;
 } else if ((i5 | 0) == 11) {
  return i2 | 0;
 } else if ((i5 | 0) == 10) {
  return i2 | 0;
 }
 return 0;
}
function __ZNK7WebCore4Node29containsIncludingHostElementsEPKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 } else {
  i4 = i2;
 }
 while (1) {
  if ((i4 | 0) == (i1 | 0)) {
   i3 = 1;
   i5 = 16;
   break;
  }
  i2 = i4 + 12 | 0;
  i6 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i6 & 4096 | 0) == 0) {
    i7 = i6;
    i5 = 7;
   } else {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 248 >> 2] & 127](i4) | 0) {
     i8 = HEAP32[i4 + 44 >> 2] | 0;
     break;
    } else {
     i7 = HEAP32[i2 >> 2] | 0;
     i5 = 7;
     break;
    }
   }
  } while (0);
  if ((i5 | 0) == 7) {
   i5 = 0;
   do {
    if ((i7 & 4096 | 0) == 0) {
     i5 = 10;
    } else {
     if ((HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i4 | 0)) {
      i5 = 10;
      break;
     }
     i9 = HEAP32[i4 + 92 >> 2] | 0;
    }
   } while (0);
   if ((i5 | 0) == 10) {
    i5 = 0;
    i9 = HEAP32[i4 + 16 >> 2] | 0;
   }
   i8 = i9 | 0;
  }
  if ((i8 | 0) == 0) {
   i3 = 0;
   i5 = 15;
   break;
  } else {
   i4 = i8;
  }
 }
 if ((i5 | 0) == 15) {
  return i3 | 0;
 } else if ((i5 | 0) == 16) {
  return i3 | 0;
 }
 return 0;
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
function __ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 if (!(__ZN7WebCore11EventTarget19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i1 | 0, i2, i3, i4) | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 i4 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != (HEAP32[i4 + 368 >> 2] | 0)) {
   if ((i3 | 0) == (HEAP32[i4 + 260 >> 2] | 0)) {
    break;
   }
   do {
    if ((i3 | 0) != (HEAP32[i4 + 632 >> 2] | 0)) {
     if ((i3 | 0) == (HEAP32[i4 + 636 >> 2] | 0)) {
      break;
     }
     if ((i3 | 0) == (HEAP32[i4 + 640 >> 2] | 0)) {
      break;
     }
     if ((i3 | 0) == (HEAP32[i4 + 644 >> 2] | 0)) {
      break;
     } else {
      i5 = 1;
     }
     return i5 | 0;
    }
   } while (0);
   __ZN7WebCore8Document26didRemoveTouchEventHandlerEPNS_4NodeE(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0, i1);
   i5 = 1;
   return i5 | 0;
  }
 } while (0);
 __ZN7WebCore8Document26didRemoveWheelEventHandlerEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0);
 i5 = 1;
 return i5 | 0;
}
function __ZNK7WebCore4Node46updateAncestorConnectedSubframeCountForRemovalEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 & 2048 | 0) == 0) {
  return;
 }
 i3 = HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 4 >> 2] | 0;
 if ((i3 & 1023 | 0) == 0) {
  return;
 }
 do {
  if ((i2 & 4096 | 0) == 0) {
   i4 = 6;
  } else {
   if ((HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i1 | 0)) {
    i4 = 6;
    break;
   }
   i5 = HEAP32[i1 + 92 >> 2] | 0;
  }
 } while (0);
 if ((i4 | 0) == 6) {
  i5 = HEAP32[i1 + 16 >> 2] | 0;
 }
 if ((i5 | 0) == 0) {
  return;
 } else {
  i6 = i5;
 }
 while (1) {
  i5 = i6 | 0;
  i1 = (HEAP32[i6 + 32 >> 2] | 0) + 4 | 0;
  i2 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = i2 - i3 & 1023 | i2 & -1024;
  do {
   if ((HEAP32[i6 + 12 >> 2] & 4096 | 0) == 0) {
    i4 = 12;
   } else {
    if ((HEAP32[(HEAP32[i6 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i6 | 0)) {
     i4 = 12;
     break;
    }
    i7 = HEAP32[i5 + 92 >> 2] | 0;
   }
  } while (0);
  if ((i4 | 0) == 12) {
   i4 = 0;
   i7 = HEAP32[i6 + 16 >> 2] | 0;
  }
  if ((i7 | 0) == 0) {
   break;
  } else {
   i6 = i7;
  }
 }
 return;
}
function __ZN7WebCore22ChildListMutationScopeC2ERNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 HEAP32[i5 >> 2] = 0;
 if ((HEAP8[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 770 | 0] & 1) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore28ChildListMutationAccumulator11getOrCreateERNS_13ContainerNodeE(i4, i2);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i1 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i4;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore28ChildListMutationAccumulatorD1Ev(i1);
    __ZN3WTF8fastFreeEPv(i1);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i1 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore28ChildListMutationAccumulatorD1Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore4Node14removedLastRefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((HEAP32[i2 + 4 >> 2] | 0) != (i1 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 44 >> 2] & 31](i1);
  return;
 }
 i1 = i2 + 16 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 31](i2);
  return;
 }
 HEAP32[i1 >> 2] = i3 + 1;
 i3 = i2;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 31](i2);
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i4;
 if ((i4 | 0) != 0) {
  return;
 }
 if ((__ZNK7WebCore9TreeScope8refCountEv(i2) | 0) != 0) {
  return;
 }
 if ((HEAP8[H_BASE + 368 | 0] | 0) == 0) {
  i4 = __Znwj(44) | 0;
  __ZN7WebCore9TreeScopeC1Ev(i4);
  HEAP32[H_BASE + 360 >> 2] = i4;
  HEAP32[H_BASE + 368 >> 2] = 1;
  HEAP32[H_BASE + 372 >> 2] = 0;
  i5 = i4;
 } else {
  i5 = HEAP32[H_BASE + 360 >> 2] | 0;
 }
 if ((i5 | 0) == (i2 | 0) | (i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 31](i2);
 return;
}
function __ZNK7WebCore4Node8containsEPKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((i1 | 0) == (i2 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i4 & 2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 36 >> 2] | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i5 = (HEAP32[i2 + 12 >> 2] & 256 | 0) != 0;
 if (i5 ^ (i4 & 256 | 0) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) == (i1 | 0)) {
  i4 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
  i3 = i5 & ((i4 | 0) != (i2 | 0) & (i4 | 0) == (i1 | 0));
  return i3 | 0;
 }
 i4 = i2 + 16 | 0;
 while (1) {
  i2 = HEAP32[i4 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i3 = 0;
   i6 = 21;
   break;
  }
  if ((i2 | 0) == (i1 | 0)) {
   i3 = 1;
   i6 = 20;
   break;
  } else {
   i4 = i2 + 16 | 0;
  }
 }
 if ((i6 | 0) == 20) {
  return i3 | 0;
 } else if ((i6 | 0) == 21) {
  return i3 | 0;
 }
 return 0;
}
function __ZNK7WebCore4Node21isRootEditableElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i1, 0, 1) | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = i1 + 12 | 0;
 if ((HEAP32[i3 >> 2] & 4 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i4 = i1 + 16 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i2 = 1;
  return i2 | 0;
 }
 if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i5 | 0, 0, 1) | 0)) {
  i2 = 1;
  return i2 | 0;
 }
 if ((HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 4 | 0) == 0) {
  i2 = 1;
  return i2 | 0;
 }
 if ((HEAP32[i3 >> 2] & 4 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 44 >> 2] | 0;
 i1 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
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
function __ZN7WebCore4Node26unregisterMutationObserverEPNS_28MutationObserverRegistrationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  return;
 }
 i3 = HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 12 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 i4 = i3 + 8 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i5 = 0;
 while (1) {
  if (i5 >>> 0 >= i3 >>> 0) {
   i6 = 15;
   break;
  }
  i7 = HEAP32[i1 >> 2] | 0;
  i8 = i5 + 1 | 0;
  if ((HEAP32[i7 + (i5 << 2) >> 2] | 0) == (i2 | 0)) {
   break;
  } else {
   i5 = i8;
  }
 }
 if ((i6 | 0) == 15) {
  return;
 }
 if ((i5 | 0) == -1) {
  return;
 }
 if ((i2 | 0) == 0) {
  i9 = i7;
  i10 = i3;
 } else {
  __ZN7WebCore28MutationObserverRegistrationD1Ev(i2);
  __ZdlPv(i2);
  i9 = HEAP32[i1 >> 2] | 0;
  i10 = HEAP32[i4 >> 2] | 0;
 }
 i1 = i7 + (i8 << 2) | 0;
 _memmove(i7 + (i5 << 2) | 0, i1 | 0, i9 + (i10 << 2) - i1 | 0) | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) - 1;
 return;
}
function __ZN7WebCore4Node12replaceChildEN3WTF10PassRefPtrIS0_EEPS0_Ri(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2 | 0) == 0) {
  HEAP32[i4 >> 2] = 3;
  i7 = 0;
  STACKTOP = i5;
  return i7 | 0;
 }
 i8 = i6 | 0;
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i8 >> 2] = i2;
 i2 = __ZN7WebCore13ContainerNode12replaceChildEN3WTF10PassRefPtrINS_4NodeEEEPS3_Ri(i1, i6, i3, i4) | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i7 = i2;
  STACKTOP = i5;
  return i7 | 0;
 }
 i8 = i4 + 8 | 0;
 i4 = i8 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  i7 = i2;
  STACKTOP = i5;
  return i7 | 0;
 }
 if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
  i7 = i2;
  STACKTOP = i5;
  return i7 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
 i7 = i2;
 STACKTOP = i5;
 return i7 | 0;
}
function __ZN7WebCore4Node12insertBeforeEN3WTF10PassRefPtrIS0_EEPS0_Ri(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2 | 0) == 0) {
  HEAP32[i4 >> 2] = 3;
  i7 = 0;
  STACKTOP = i5;
  return i7 | 0;
 }
 i8 = i6 | 0;
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i8 >> 2] = i2;
 i2 = __ZN7WebCore13ContainerNode12insertBeforeEN3WTF10PassRefPtrINS_4NodeEEEPS3_Ri(i1, i6, i3, i4) | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i7 = i2;
  STACKTOP = i5;
  return i7 | 0;
 }
 i8 = i4 + 8 | 0;
 i4 = i8 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  i7 = i2;
  STACKTOP = i5;
  return i7 | 0;
 }
 if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
  i7 = i2;
  STACKTOP = i5;
  return i7 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
 i7 = i2;
 STACKTOP = i5;
 return i7 | 0;
}
function __ZN7WebCore4Node14ensureRareDataEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 & 2048 | 0) != 0) {
  i4 = HEAP32[i1 + 32 >> 2] | 0;
  return i4 | 0;
 }
 i5 = i1 + 32 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i3 & 4 | 0) == 0) {
  i3 = __ZN3WTF10fastMallocEj(16) | 0;
  HEAP32[i3 >> 2] = i1;
  i6 = i3 + 4 | 0;
  HEAP32[i6 >> 2] = HEAP32[i6 >> 2] & -1024;
  HEAP32[i3 + 8 >> 2] = 0;
  HEAP32[i3 + 12 >> 2] = 0;
  i7 = i3;
 } else {
  i3 = __ZN3WTF10fastMallocEj(72) | 0;
  HEAP32[i3 >> 2] = i1;
  i1 = i3 + 4 | 0;
  HEAP32[i1 >> 2] = HEAP32[i1 >> 2] & -1024;
  i1 = i3 + 20 | 0;
  _memset(i3 + 8 | 0, 0, 12) | 0;
  HEAP32[i1 >> 2] = HEAP32[i1 >> 2] & -8192;
  HEAP32[i3 + 24 >> 2] = 0;
  HEAP32[i3 + 28 >> 2] = 2147483647;
  HEAP32[i3 + 32 >> 2] = 2147483647;
  _memset(i3 + 36 | 0, 0, 36) | 0;
  i7 = i3;
 }
 HEAP32[i5 >> 2] = i7;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 2048;
 i4 = i7;
 return i4 | 0;
}
function __ZN3WTF6OwnPtrIN7WebCore24NodeMutationObserverDataEEaSERKNS_10PassOwnPtrIS2_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i3 >> 2] = i2;
 if ((i4 | 0) == 0) {
  return i1 | 0;
 }
 i2 = HEAP32[i4 + 12 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i4 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i5 = i4 | 0;
 if ((i3 | 0) != 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i7 = i6 + (i3 << 2) | 0;
  i3 = i6;
  while (1) {
   i6 = HEAP32[i3 >> 2] | 0;
   if ((i6 | 0) != 0) {
    __ZN7WebCore28MutationObserverRegistrationD1Ev(i6);
    __ZdlPv(i6);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i4 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN3WTF8fastFreeEPv(i4);
 return i1 | 0;
}
function __ZN7WebCore4Node11appendChildEN3WTF10PassRefPtrIS0_EERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2 | 0) == 0) {
  HEAP32[i3 >> 2] = 3;
  i6 = 0;
  STACKTOP = i4;
  return i6 | 0;
 }
 i7 = i5 | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i7 >> 2] = i2;
 i2 = __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i1, i5, i3) | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i6 = i2;
  STACKTOP = i4;
  return i6 | 0;
 }
 i7 = i3 + 8 | 0;
 i3 = i7 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  i6 = i2;
  STACKTOP = i4;
  return i6 | 0;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  i6 = i2;
  STACKTOP = i4;
  return i6 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 i6 = i2;
 STACKTOP = i4;
 return i6 | 0;
}
function __ZNK7WebCore4Node15convertFromPageERKNS_10FloatPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = i2;
 L1 : while (1) {
  i5 = (HEAP32[i4 + 12 >> 2] & 2048 | 0) == 0;
  i6 = i4 + 32 | 0;
  if (i5) {
   i7 = i6 | 0;
  } else {
   i7 = HEAP32[i6 >> 2] | 0;
  }
  if ((HEAP32[i7 >> 2] | 0) != 0) {
   break;
  }
  i2 = i4 + 16 | 0;
  while (1) {
   i8 = HEAP32[i2 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i9 = 14;
    break L1;
   }
   if ((HEAP32[i8 + 12 >> 2] & 4 | 0) == 0) {
    i2 = i8 + 16 | 0;
   } else {
    break;
   }
  }
  i4 = i8 | 0;
 }
 if ((i9 | 0) == 14) {
  i9 = i3;
  i8 = i1;
  i4 = HEAP32[i9 + 4 >> 2] | 0;
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i8 + 4 >> 2] = i4;
  return;
 }
 if (i5) {
  i10 = i6 | 0;
 } else {
  i10 = HEAP32[i6 >> 2] | 0;
 }
 __ZNK7WebCore12RenderObject15absoluteToLocalERKNS_10FloatPointEj(i1, HEAP32[i10 >> 2] | 0, i3, 2);
 return;
}
function __ZNK7WebCore4Node13convertToPageERKNS_10FloatPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = i2;
 L1 : while (1) {
  i5 = (HEAP32[i4 + 12 >> 2] & 2048 | 0) == 0;
  i6 = i4 + 32 | 0;
  if (i5) {
   i7 = i6 | 0;
  } else {
   i7 = HEAP32[i6 >> 2] | 0;
  }
  if ((HEAP32[i7 >> 2] | 0) != 0) {
   break;
  }
  i2 = i4 + 16 | 0;
  while (1) {
   i8 = HEAP32[i2 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i9 = 14;
    break L1;
   }
   if ((HEAP32[i8 + 12 >> 2] & 4 | 0) == 0) {
    i2 = i8 + 16 | 0;
   } else {
    break;
   }
  }
  i4 = i8 | 0;
 }
 if ((i9 | 0) == 14) {
  i9 = i3;
  i8 = i1;
  i4 = HEAP32[i9 + 4 >> 2] | 0;
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i8 + 4 >> 2] = i4;
  return;
 }
 if (i5) {
  i10 = i6 | 0;
 } else {
  i10 = HEAP32[i6 >> 2] | 0;
 }
 __ZNK7WebCore12RenderObject15localToAbsoluteERKNS_10FloatPointEj(i1, HEAP32[i10 >> 2] | 0, i3, 2);
 return;
}
function __ZN7WebCore4Node22dispatchUIRequestEventEN3WTF10PassRefPtrINS_14UIRequestEventEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i5 >> 2] = i2;
 __ZN7WebCore15EventDispatcher13dispatchEventEPNS_4NodeEN3WTF10PassRefPtrINS_5EventEEE(i1, i4) | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 + 8 | 0;
   i1 = i5 | 0;
   i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i1 >> 2] = i2;
    break;
   }
   i2 = i5 - 8 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((HEAP8[i4 + 21 | 0] & 1) != 0) {
  i7 = 1;
  STACKTOP = i3;
  return i7 | 0;
 }
 i7 = (HEAP8[i4 + 20 | 0] & 1) != 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZNK7WebCore4Node14isDescendantOfEPKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i2 + 12 >> 2] | 0;
 if ((i4 & 2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i2 + 36 >> 2] | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i5 = (HEAP32[i1 + 12 >> 2] & 256 | 0) != 0;
 if (i5 ^ (i4 & 256 | 0) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) == (i2 | 0)) {
  i4 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
  return i5 & ((i4 | 0) != (i1 | 0) & (i4 | 0) == (i2 | 0)) | 0;
 }
 i4 = i1 + 16 | 0;
 while (1) {
  i1 = HEAP32[i4 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i3 = 0;
   i6 = 12;
   break;
  }
  if ((i1 | 0) == (i2 | 0)) {
   i3 = 1;
   i6 = 13;
   break;
  } else {
   i4 = i1 + 16 | 0;
  }
 }
 if ((i6 | 0) == 13) {
  return i3 | 0;
 } else if ((i6 | 0) == 12) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore4Node30enclosingLinkEventParentOrSelfEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = (HEAP32[__ZN7WebCore9HTMLNames6imgTagE >> 2] | 0) + 12 | 0;
 i4 = i1;
 while (1) {
  i1 = HEAP32[i4 + 12 >> 2] | 0;
  if ((i1 & 512 | 0) != 0) {
   if ((i1 & 16 | 0) == 0) {
    break;
   }
   if ((HEAP32[(HEAP32[i4 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[i3 >> 2] | 0)) {
    break;
   }
  }
  do {
   if ((i1 & 4096 | 0) == 0) {
    i5 = 10;
   } else {
    if ((HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i4 | 0)) {
     i5 = 10;
     break;
    }
    i6 = HEAP32[i4 + 92 >> 2] | 0;
   }
  } while (0);
  if ((i5 | 0) == 10) {
   i5 = 0;
   i6 = HEAP32[i4 + 16 >> 2] | 0;
  }
  if ((i6 | 0) == 0) {
   i2 = 0;
   i5 = 13;
   break;
  } else {
   i4 = i6 | 0;
  }
 }
 if ((i5 | 0) == 13) {
  return i2 | 0;
 }
 i2 = i4;
 return i2 | 0;
}
function __ZNK7WebCore4Node9textRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 __ZN7WebCore5Range6createERNS_8DocumentE(i4, HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0);
 i5 = i4 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = i3 + 8 | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore5Range18selectNodeContentsEPNS_4NodeERi(i4, i1, i5);
 __ZNK7WebCore5Range9textRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEEbPNS0_20RangeInFixedPositionE(i4, i2, 0, 0);
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore4Node29nonBoundaryShadowTreeRootNodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 } else {
  i3 = i1;
 }
 while (1) {
  if ((HEAP32[i3 + 12 >> 2] & 4096 | 0) != 0) {
   if ((HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 4 >> 2] | 0) == (i3 | 0)) {
    i2 = i3;
    i4 = 8;
    break;
   }
  }
  i1 = HEAP32[i3 + 16 >> 2] | 0;
  i5 = i1 | 0;
  i6 = (i1 | 0) == 0;
  if (i6) {
   i2 = 0;
   i4 = 10;
   break;
  }
  if ((HEAP32[i1 + 12 >> 2] & 4096 | 0) == 0) {
   i3 = i5;
   continue;
  }
  i7 = (HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 4 >> 2] | 0) == (i1 | 0);
  if (i7 | i6) {
   i2 = i7 ? i3 : 0;
   i4 = 11;
   break;
  } else {
   i3 = i5;
  }
 }
 if ((i4 | 0) == 8) {
  return i2 | 0;
 } else if ((i4 | 0) == 10) {
  return i2 | 0;
 } else if ((i4 | 0) == 11) {
  return i2 | 0;
 }
 return 0;
}
function __ZN7WebCore4Node18dispatchInputEventEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 188 | 0;
 i5 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i5, i4, 1, 0);
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i5;
 __ZN7WebCore15EventDispatcher19dispatchScopedEventERNS_4NodeEN3WTF10PassRefPtrINS_5EventEEE(i1, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 + 8 | 0;
 i3 = i4 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i3 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
 i1 = i4 - 8 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i2;
 return;
}
function __ZN3WTF6VectorINS_6OwnPtrIN7WebCore28MutationObserverRegistrationEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF10PassOwnPtrIN7WebCore24NodeMutationObserverDataEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 12 >> 2] | 0;
 if ((i1 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i1);
 }
 i1 = i2 + 8 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = i2 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) != 0) {
    __ZN7WebCore28MutationObserverRegistrationD1Ev(i5);
    __ZdlPv(i5);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i1 >> 2] = 0;
 }
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i2 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i1);
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN3WTF6OwnPtrIN7WebCore24NodeMutationObserverDataEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 12 >> 2] | 0;
 if ((i1 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i1);
 }
 i1 = i2 + 8 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = i2 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) != 0) {
    __ZN7WebCore28MutationObserverRegistrationD1Ev(i5);
    __ZdlPv(i5);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i1 >> 2] = 0;
 }
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i2 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i1);
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN3WTF6VectorINS_12AtomicStringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZNK7WebCore4Node11boundingBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 i6 = (HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0;
 i7 = i2 + 32 | 0;
 if (i6) {
  i8 = i7 | 0;
 } else {
  i8 = HEAP32[i7 >> 2] | 0;
 }
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i3;
  return;
 }
 if (i6) {
  i9 = i7 | 0;
 } else {
  i9 = HEAP32[i7 >> 2] | 0;
 }
 __ZNK7WebCore12RenderObject23absoluteBoundingBoxRectEb(i4, HEAP32[i9 >> 2] | 0, 1);
 i9 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i1 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i1 + 4 >> 2] = i9;
 i9 = i4 + 8 | 0;
 i4 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i1 + 12 >> 2] = i4;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i5 >> 2] = i2;
 i2 = __ZN7WebCore15EventDispatcher13dispatchEventEPNS_4NodeEN3WTF10PassRefPtrINS_5EventEEE(i1, i4) | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return i2 | 0;
 }
 i5 = i4 + 8 | 0;
 i4 = i5 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i3;
  return i2 | 0;
 }
 i1 = i5 - 8 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return i2 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i3;
 return i2 | 0;
}
function __ZN7WebCore4Node13computedStyleENS_8PseudoIdE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 } else {
  i4 = i1;
 }
 while (1) {
  i1 = HEAP32[i4 + 12 >> 2] | 0;
  if ((i1 & 4 | 0) != 0) {
   break;
  }
  do {
   if ((i1 & 4096 | 0) == 0) {
    i5 = 7;
   } else {
    if ((HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i4 | 0)) {
     i5 = 7;
     break;
    }
    i6 = HEAP32[i4 + 92 >> 2] | 0;
   }
  } while (0);
  if ((i5 | 0) == 7) {
   i5 = 0;
   i6 = HEAP32[i4 + 16 >> 2] | 0;
  }
  if ((i6 | 0) == 0) {
   i3 = 0;
   i5 = 10;
   break;
  } else {
   i4 = i6 | 0;
  }
 }
 if ((i5 | 0) == 10) {
  return i3 | 0;
 }
 i3 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i4 >> 2] | 0) + 176 >> 2] & 15](i4, i2) | 0;
 return i3 | 0;
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
function __ZN7WebCore4Node19dispatchScopedEventEN3WTF10PassRefPtrINS_5EventEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i5 >> 2] = i2;
 __ZN7WebCore15EventDispatcher19dispatchScopedEventERNS_4NodeEN3WTF10PassRefPtrINS_5EventEEE(i1, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i4 + 8 | 0;
 i4 = i5 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i5 - 8 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore4Node26containsIncludingShadowDOMEPKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 } else {
  i4 = i2;
 }
 while (1) {
  if ((i4 | 0) == (i1 | 0)) {
   i3 = 1;
   i5 = 11;
   break;
  }
  do {
   if ((HEAP32[i4 + 12 >> 2] & 4096 | 0) == 0) {
    i5 = 6;
   } else {
    if ((HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i4 | 0)) {
     i5 = 6;
     break;
    }
    i6 = HEAP32[i4 + 92 >> 2] | 0;
   }
  } while (0);
  if ((i5 | 0) == 6) {
   i5 = 0;
   i6 = HEAP32[i4 + 16 >> 2] | 0;
  }
  if ((i6 | 0) == 0) {
   i3 = 0;
   i5 = 10;
   break;
  } else {
   i4 = i6 | 0;
  }
 }
 if ((i5 | 0) == 10) {
  return i3 | 0;
 } else if ((i5 | 0) == 11) {
  return i3 | 0;
 }
 return 0;
}
function __ZNK7WebCore4Node25parentOrShadowHostElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 do {
  if ((HEAP32[i1 + 12 >> 2] & 4096 | 0) == 0) {
   i2 = 4;
  } else {
   if ((HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i1 | 0)) {
    i2 = 4;
    break;
   }
   i3 = HEAP32[i1 + 92 >> 2] | 0;
  }
 } while (0);
 if ((i2 | 0) == 4) {
  i3 = HEAP32[i1 + 16 >> 2] | 0;
 }
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = HEAP32[i3 + 12 >> 2] | 0;
 do {
  if ((i1 & 4096 | 0) != 0) {
   if ((HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i3 | 0)) {
    break;
   }
   i4 = HEAP32[i3 + 92 >> 2] | 0;
   return i4 | 0;
  }
 } while (0);
 if ((i1 & 4 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = i3;
 return i4 | 0;
}
function __ZN7WebCore4Node13clearRareDataEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 32 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i1 + 12 | 0;
 i1 = (i3 | 0) == 0;
 do {
  if ((HEAP32[i5 >> 2] & 4 | 0) == 0) {
   if (i1) {
    break;
   }
   __ZN3WTF6OwnPtrIN7WebCore24NodeMutationObserverDataEED2Ev(i3 + 12 | 0);
   i6 = HEAP32[i3 + 8 >> 2] | 0;
   if ((i6 | 0) != 0) {
    __ZN7WebCore17NodeListsNodeDataD2Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
   }
   __ZN3WTF8fastFreeEPv(i3);
  } else {
   if (i1) {
    break;
   }
   __ZN7WebCore15ElementRareDataD2Ev(i3);
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 HEAP32[i2 >> 2] = i4;
 HEAP32[i5 >> 2] = HEAP32[i5 >> 2] & -2049;
 return;
}
function __ZN7WebCore4Node12insertedIntoERNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 + 12 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((HEAP32[i2 + 12 >> 2] & 256 | 0) == 0) {
  i5 = i4;
 } else {
  i2 = i4 | 256;
  HEAP32[i3 >> 2] = i2;
  i5 = i2;
 }
 i2 = i1 + 12 | 0;
 do {
  if ((i5 & 4096 | 0) == 0) {
   i6 = 6;
  } else {
   if ((HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i1 | 0)) {
    i6 = 6;
    break;
   }
   i7 = HEAP32[i1 + 92 >> 2] | 0;
  }
 } while (0);
 if ((i6 | 0) == 6) {
  i7 = HEAP32[i1 + 16 >> 2] | 0;
 }
 if ((HEAP32[i7 + 12 >> 2] & 8388608 | 0) == 0) {
  return 0;
 }
 HEAP32[i2 >> 2] = i5 | 8388608;
 return 0;
}
function __ZN7WebCore4Node11removedFromERNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 + 12 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((HEAP32[i2 + 12 >> 2] & 256 | 0) == 0) {
  i5 = i4;
 } else {
  i2 = i4 & -257;
  HEAP32[i3 >> 2] = i2;
  i5 = i2;
 }
 i2 = i1 + 12 | 0;
 if ((i5 & 8388608 | 0) == 0) {
  return;
 }
 i3 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 4 >> 2] | 0;
 do {
  if ((HEAP32[i3 + 12 >> 2] & 4096 | 0) != 0) {
   if ((HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i3 | 0)) {
    break;
   }
   return;
  }
 } while (0);
 HEAP32[i2 >> 2] = i5 & -8388609;
 return;
}
function __ZN7WebCore4Node35unregisterTransientMutationObserverEPNS_28MutationObserverRegistrationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 12 >> 2] | 0;
 i1 = (i2 | 0) == 0 ? 0 : i2 + 12 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF7HashSetIPN7WebCore28MutationObserverRegistrationENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i4) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 + 12 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 & 256 | 0) == 0) {
  return;
 }
 i5 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP32[i5 + 1584 >> 2] | 0) == 0) {
  return;
 }
 if ((HEAP8[i5 + 2285 | 0] & 1) != 0) {
  return;
 }
 i5 = i4 & 114688;
 if ((i5 | 0) < (i2 | 0)) {
  HEAP32[i3 >> 2] = i4 & -114689 | i2;
 }
 if (!((i5 | 0) == 0 | (i2 | 0) == 65536)) {
  return;
 }
 __ZN7WebCore4Node38markAncestorsWithChildNeedsStyleRecalcEv(i1);
 return;
}
function __ZNK7WebCore4Node21pseudoAwareFirstChildEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 & 4 | 0) == 0) {
  if ((i2 & 2 | 0) == 0) {
   i3 = 0;
   return i3 | 0;
  }
  i3 = HEAP32[i1 + 36 >> 2] | 0;
  return i3 | 0;
 }
 i2 = i1;
 i4 = __ZNK7WebCore7Element19beforePseudoElementEv(i2) | 0;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i3 = i4;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore7Element18afterPseudoElementEv(i2) | 0;
 return i3 | 0;
}
function __ZNK7WebCore4Node20pseudoAwareLastChildEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 & 4 | 0) == 0) {
  if ((i2 & 2 | 0) == 0) {
   i3 = 0;
   return i3 | 0;
  }
  i3 = HEAP32[i1 + 40 >> 2] | 0;
  return i3 | 0;
 }
 i2 = i1;
 i4 = __ZNK7WebCore7Element18afterPseudoElementEv(i2) | 0;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i3 = i4;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore7Element19beforePseudoElementEv(i2) | 0;
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
function __ZN7WebCore4Node17handleLocalEventsERNS_5EventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i3 & 2097152 | 0) == 0) {
  return;
 }
 do {
  if ((i3 & 4 | 0) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 496 >> 2] & 127](i1) | 0)) {
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 127](i2) | 0)) {
    break;
   }
   return;
  }
 } while (0);
 __ZN7WebCore11EventTarget18fireEventListenersEPNS_5EventE(i1 | 0, i2) | 0;
 return;
}
function __ZNK7WebCore4Node20renderBoxModelObjectEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 32 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i3 = i2 | 0;
 } else {
  i3 = HEAP32[i2 >> 2] | 0;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i2 + 20 >> 2] & 768 | 0) == 256) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i2 + 24 >> 2] & 2 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = i2;
 return i4 | 0;
}
function __ZN7WebCore15BeforeLoadEventD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 272;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
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
 __ZN7WebCore5EventD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function __ZNK7WebCore4Node25isEditableToAccessibilityENS0_13EditableLevelE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i1, i2, 1) | 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((i2 | 0) == 1) {
  i3 = 0;
  return i3 | 0;
 }
 __ZNK7WebCore8Document21existingAXObjectCacheEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
 i3 = 0;
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
function __ZNK7WebCore4Node28deprecatedShadowAncestorNodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  return i3 | 0;
 }
 if ((HEAP32[i2 + 12 >> 2] & 4096 | 0) == 0) {
  i3 = i1;
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i2 | 0)) {
  i3 = i1;
  return i3 | 0;
 }
 i3 = HEAP32[i2 + 92 >> 2] | 0;
 return i3 | 0;
}
function __ZN7WebCore15BeforeLoadEventD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 272;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
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
 __ZN7WebCore5EventD2Ev(i1);
 return;
}
function __ZN7WebCore4Node29willRespondToMouseWheelEventsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 48 >> 2] & 127](i1 | 0) | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = __ZNK7WebCore16EventListenerMap8containsERKN3WTF12AtomicStringE(i3 | 0, i2 + 260 | 0) | 0;
 return i4 | 0;
}
function __ZNK7WebCore4Node15firstDescendantEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 L1 : do {
  if ((i1 | 0) == 0) {
   i2 = 0;
  } else {
   i3 = i1;
   while (1) {
    if ((HEAP32[i3 + 12 >> 2] & 2 | 0) == 0) {
     i2 = i3;
     break L1;
    }
    i4 = HEAP32[i3 + 36 >> 2] | 0;
    if ((i4 | 0) == 0) {
     i2 = i3;
     break;
    } else {
     i3 = i4;
    }
   }
  }
 } while (0);
 return i2 | 0;
}
function __ZNK7WebCore4Node14lastDescendantEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 L1 : do {
  if ((i1 | 0) == 0) {
   i2 = 0;
  } else {
   i3 = i1;
   while (1) {
    if ((HEAP32[i3 + 12 >> 2] & 2 | 0) == 0) {
     i2 = i3;
     break L1;
    }
    i4 = HEAP32[i3 + 40 >> 2] | 0;
    if ((i4 | 0) == 0) {
     i2 = i3;
     break;
    } else {
     i3 = i4;
    }
   }
  }
 } while (0);
 return i2 | 0;
}
function __ZNK7WebCore4Node10shadowHostEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i2 + 12 >> 2] & 4096 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i2 | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i2 + 92 >> 2] | 0;
 return i3 | 0;
}
function __ZNK7WebCore4Node20containingShadowRootEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i2 + 12 >> 2] & 4096 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i2 | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = i2;
 return i3 | 0;
}
function __ZNK7WebCore4Node9renderBoxEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 32 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i3 = i2 | 0;
 } else {
  i3 = HEAP32[i2 >> 2] | 0;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i2 + 20 >> 2] & 512 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = i2;
 return i4 | 0;
}
function __ZNK7WebCore4Node15ancestorElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 16 | 0;
 while (1) {
  i3 = HEAP32[i2 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i4 = 0;
   i5 = 6;
   break;
  }
  if ((HEAP32[i3 + 12 >> 2] & 4 | 0) == 0) {
   i2 = i3 + 16 | 0;
  } else {
   break;
  }
 }
 if ((i5 | 0) == 6) {
  return i4 | 0;
 }
 i4 = i3;
 return i4 | 0;
}
function _memmove(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i2 | 0) < (i1 | 0) & (i1 | 0) < (i2 + i3 | 0)) {
  i4 = i1;
  i2 = i2 + i3 | 0;
  i1 = i1 + i3 | 0;
  while ((i3 | 0) > 0) {
   i1 = i1 - 1 | 0;
   i2 = i2 - 1 | 0;
   i3 = i3 - 1 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
  }
  i1 = i4;
 } else {
  _memcpy(i1, i2, i3) | 0;
 }
 return i1 | 0;
}
function __ZN7WebCore4Node7inspectEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 20 | 0;
 if ((__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] | 0) | 0) == 0) {
  return;
 }
 __ZN7WebCore19InspectorController7inspectEPNS_4NodeE(HEAP32[(__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] | 0) | 0) + 40 >> 2] | 0, i1);
 return;
}
function __ZNK7WebCore4Node27nonShadowBoundaryParentNodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i2 + 12 >> 2] & 4096 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 i3 = (HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 4 >> 2] | 0) == (i2 | 0) ? 0 : i2;
 return i3 | 0;
}
function __ZNK7WebCore4Node18inRenderedDocumentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP32[i1 + 12 >> 2] & 256 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP32[i3 + 1584 >> 2] | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP8[i3 + 2285 | 0] & 1) == 0;
 return i2 | 0;
}
function __ZN7WebCore4Node11removeChildEPS0_Ri(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((HEAP32[i1 + 12 >> 2] & 2 | 0) == 0) {
  HEAP32[i3 >> 2] = 8;
  i4 = 0;
  return i4 | 0;
 } else {
  i4 = __ZN7WebCore13ContainerNode11removeChildEPNS_4NodeERi(i1, i2, i3) | 0;
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore4Node16derefEventTargetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 8 | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
 return;
}
function __ZN7WebCore4Node17isContentEditableENS0_22UserSelectAllTreatmentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore8Document19updateStyleIfNeededEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0);
 return __ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i1, 0, i2) | 0;
}
function __ZNK7WebCore4Node7baseURIEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 16 >> 2] | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  __ZN7WebCore3URL10invalidateEv(i1);
  return;
 } else {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 80 >> 2] & 31](i1, i3 | 0);
  return;
 }
}
function __ZN7WebCore4Node17willBeDeletedFromEPNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2097152 | 0) != 0) {
  __ZN7WebCore4Node20clearEventTargetDataEv(i1);
 }
 if ((i2 | 0) == 0) {
  return;
 }
 __ZNK7WebCore8Document21existingAXObjectCacheEv(i2) | 0;
 return;
}
function __ZN7WebCore4Node33transientMutationObserverRegistryEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  return 0;
 } else {
  i2 = HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 12 >> 2] | 0;
  return ((i2 | 0) == 0 ? 0 : i2 + 12 | 0) | 0;
 }
 return 0;
}
function __ZN7WebCore4Node14clearNodeListsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = (HEAP32[i1 + 32 >> 2] | 0) + 8 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore17NodeListsNodeDataD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore4Node23isContentRichlyEditableEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore8Document19updateStyleIfNeededEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0);
 return __ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i1, 1, 1) | 0;
}
function __ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 76 >> 2] & 127](i1) | 0) != 5) {
  return;
 }
 HEAP32[i3 >> 2] = 7;
 return;
}
function __ZNK7WebCore4Node9nodeIndexEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = 0;
 i3 = i1;
 while (1) {
  i1 = HEAP32[i3 + 24 >> 2] | 0;
  if ((i1 | 0) == 0) {
   break;
  } else {
   i2 = i2 + 1 | 0;
   i3 = i1;
  }
 }
 return i2 | 0;
}
function __ZN7WebCore4Node31decrementConnectedSubframeCountEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = (HEAP32[i1 + 32 >> 2] | 0) + 4 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i1 - i2 & 1023 | i1 & -1024;
 return;
}
function __ZNK7WebCore4Node22connectedSubframeCountEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 4 >> 2] & 1023;
 return i2 | 0;
}
function __ZN7WebCore4Node6removeERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore13ContainerNode11removeChildEPNS_4NodeERi(i3, i1, i2) | 0;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore4Node18getSubresourceURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 228 >> 2] & 31](i1, i2);
 return;
}
function __ZN7WebCore4Node9nodeListsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 8 >> 2] | 0;
 return i2 | 0;
}
function __ZN7WebCore4Node24mutationObserverRegistryEv(i1) {
 i1 = i1 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  return 0;
 } else {
  return HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 12 >> 2] | 0;
 }
 return 0;
}
function viii___ZNK7WebCore5Event8cloneForEPNS_17HTMLIFrameElementE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore5Event8cloneForEPNS_17HTMLIFrameElementE(i1 | 0, i2 | 0, i3 | 0);
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
function __ZN7WebCore4Node11isSupportedERKN3WTF6StringES4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore17DOMImplementation10hasFeatureERKN3WTF6StringES4_(i1, i2) | 0;
}
function __ZNK7WebCore4Node13ownerDocumentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 return ((i2 | 0) == (i1 | 0) ? 0 : i2) | 0;
}
function vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv(i1 | 0);
}
function ii___ZNK7WebCore5Event25isBeforeTextInsertedEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event25isBeforeTextInsertedEventEv(i1 | 0) | 0;
}
function vi___ZN7WebCore11EventTarget23removeAllEventListenersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget23removeAllEventListenersEv(i1 | 0);
}
function __ZNK7WebCore4Node27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore4Node14refEventTargetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 8 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 return;
}
function ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11EventTarget13isMessagePortEv(i1 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 7](i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore4Node9setPrefixERKN3WTF12AtomicStringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i3 >> 2] = 14;
 return;
}
function ii___ZNK7WebCore5Event19isBeforeUnloadEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event19isBeforeUnloadEventEv(i1 | 0) | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11EventTarget11toDOMWindowEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore5Event16isClipboardEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event16isClipboardEventEv(i1 | 0) | 0;
}
function __ZN7WebCore37shouldInvalidateNodeListCachesForAttrILj8EEEbPKjRKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZNK7WebCore4Node25insertionParentForBindingEv(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore20findInsertionPointOfEPKNS_4NodeE(i1) | 0;
}
function ii___ZNK7WebCore5Event15isKeyboardEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event15isKeyboardEventEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore5Event12isTouchEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event12isTouchEventEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore5Event12isMouseEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event12isMouseEventEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore5Event12isFocusEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event12isFocusEventEv(i1 | 0) | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 15](i2 | 0, i3 | 0) | 0;
}
function ii___ZNK7WebCore5Event11isDragEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event11isDragEventEv(i1 | 0) | 0;
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
function ii___ZNK7WebCore5Event9isUIEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event9isUIEventEv(i1 | 0) | 0;
}
function vi___ZN7WebCore5Event14receivedTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore5Event14receivedTargetEv(i1 | 0);
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
 FUNCTION_TABLE_vii[i1 & 31](i2 | 0, i3 | 0);
}
function __ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore4Node16childTypeAllowedENS0_8NodeTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZNK7WebCore4Node9nodeValueEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function b0(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(0);
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 127](i2 | 0) | 0;
}
function __ZN7WebCore4NodeD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4NodeD2Ev(i1);
 __ZdlPv(i1);
 return;
}
function __ZNK7WebCore4Node12namespaceURIEv(i1) {
 i1 = i1 | 0;
 return __ZN3WTF8nullAtomE | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZNK7WebCore4Node8rareDataEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 32 >> 2] | 0;
}
function __ZNK7WebCore4Node9localNameEv(i1) {
 i1 = i1 | 0;
 return __ZN3WTF8nullAtomE | 0;
}
function __ZNK7WebCore4Node6prefixEv(i1) {
 i1 = i1 | 0;
 return __ZN3WTF8nullAtomE | 0;
}
function __ZNK7WebCore15BeforeLoadEvent14eventInterfaceEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node23canContainRangeEndPointEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore4Node24willRespondToTouchEventsEv(i1) {
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
function __ZNK7WebCore4Node20isInsertionPointNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node20eventTargetInterfaceEv(i1) {
 i1 = i1 | 0;
 return 5;
}
function __ZNK7WebCore4Node19isFrameOwnerElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node19isCharacterDataNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node18offsetInCharactersEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node18maxCharacterOffsetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore4Node21finishParsingChildrenEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore4Node20beginParsingChildrenEv(i1) {
 i1 = i1 | 0;
 return;
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
function __ZNK7WebCore5Event13relatedTargetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node14customPseudoIdEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore4Node17trackForDebuggingEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore4Node14toInputElementEv(i1) {
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
function __ZNK7WebCore5Event9clipboardEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore4Node6toNodeEv(i1) {
 i1 = i1 | 0;
 return i1 | 0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
}
function __ZN7WebCore4Node18startIgnoringLeaksEv() {
 return;
}
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
}
function __ZN7WebCore4Node17stopIgnoringLeaksEv() {
 return;
}
function stackRestore(i1) {
 i1 = i1 | 0;
 STACKTOP = i1;
}
function __ZN7WebCore4Node14dumpStatisticsEv() {
 return;
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
  var FUNCTION_TABLE_iiiii = [b0,b0,__ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb,b0,__ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore4Node14refEventTargetEv,b1,__ZN7WebCore4NodeD2Ev,b1,__ZN7WebCore4NodeD0Ev,b1,__ZN7WebCore4Node16derefEventTargetEv,b1,__ZN7WebCore15BeforeLoadEventD0Ev,b1,__ZN7WebCore15BeforeLoadEventD1Ev,b1,__ZN7WebCore4Node18dispatchInputEventEv,b1,vi___ZN7WebCore11EventTarget23removeAllEventListenersEv__wrapper,b1,vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper,b1,__ZN7WebCore4Node20beginParsingChildrenEv,b1,__ZN7WebCore4Node21finishParsingChildrenEv,b1,__ZN7WebCore4Node24startLoadingDynamicSheetEv,b1,vi___ZN7WebCore5Event14receivedTargetEv__wrapper,b1,b1
  ,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE,b2,__ZNK7WebCore4Node7baseURIEv,b2,__ZN7WebCore4Node11removedFromERNS_13ContainerNodeE,b2,__ZN7WebCore4Node17handleLocalEventsERNS_5EventE,b2,__ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE,b2,__ZNK7WebCore4Node9nodeValueEv,b2,__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE,b2,__ZNK7WebCore4Node27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE,b2,__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb,b2,__ZNK7WebCore4Node11boundingBoxEv,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,ii___ZNK7WebCore5Event15isKeyboardEventEv__wrapper,b3,__ZNK7WebCore4Node15isMediaControlsEv,b3,__ZNK7WebCore4Node18maxCharacterOffsetEv,b3,__ZN7WebCore4Node28willRespondToMouseMoveEventsEv,b3,__ZNK7WebCore4Node6prefixEv,b3,__ZN7WebCore4Node15eventTargetDataEv,b3,__ZNK7WebCore4Node16nonRendererStyleEv,b3,__ZN7WebCore4Node29willRespondToMouseClickEventsEv,b3,__ZNK7WebCore4Node23canContainRangeEndPointEv,b3,__ZNK7WebCore4Node12namespaceURIEv,b3,__ZNK7WebCore4Node18offsetInCharactersEv,b3,__ZNK7WebCore4Node22scriptExecutionContextEv,b3,__ZNK7WebCore4Node19isCharacterDataNodeEv,b3,__ZNK7WebCore4Node15isPluginElementEv
  ,b3,ii___ZNK7WebCore5Event9isUIEventEv__wrapper,b3,__ZN7WebCore4Node6toNodeEv,b3,ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper,b3,__ZNK7WebCore4Node15isAttributeNodeEv,b3,__ZN7WebCore4Node21ensureEventTargetDataEv,b3,__ZNK7WebCore4Node21isMediaControlElementEv,b3,__ZNK7WebCore4Node20isInsertionPointNodeEv,b3,__ZNK7WebCore4Node19isFrameOwnerElementEv,b3,__ZN7WebCore4Node14toInputElementEv,b3,__ZNK7WebCore5Event9clipboardEv,b3,__ZNK7WebCore4Node9localNameEv,b3,__ZNK7WebCore4Node14customPseudoIdEv,b3,__ZNK7WebCore5Event13relatedTargetEv,b3,ii___ZNK7WebCore5Event11isDragEventEv__wrapper,b3,ii___ZNK7WebCore5Event25isBeforeTextInsertedEventEv__wrapper
  ,b3,ii___ZNK7WebCore5Event16isClipboardEventEv__wrapper,b3,__ZNK7WebCore4Node20eventTargetInterfaceEv,b3,ii___ZNK7WebCore5Event19isBeforeUnloadEventEv__wrapper,b3,ii___ZNK7WebCore5Event12isFocusEventEv__wrapper,b3,__ZN7WebCore4Node24willRespondToTouchEventsEv,b3,__ZNK7WebCore15BeforeLoadEvent14eventInterfaceEv,b3,__ZN7WebCore4Node11sheetLoadedEv,b3,ii___ZNK7WebCore5Event12isMouseEventEv__wrapper,b3,ii___ZNK7WebCore5Event12isTouchEventEv__wrapper,b3,ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper,b3,__ZNK7WebCore4Node17canStartSelectionEv,b3,__ZN7WebCore4Node29willRespondToMouseWheelEventsEv,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,viii___ZNK7WebCore5Event8cloneForEPNS_17HTMLIFrameElementE__wrapper,b4,__ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi,b4,__ZN7WebCore4Node9setPrefixERKN3WTF12AtomicStringERi,b4];
  var FUNCTION_TABLE_v = [b5,b5,v____cxa_pure_virtual__wrapper,b5];
  var FUNCTION_TABLE_iii = [b6,b6,__ZN7WebCore4Node12insertedIntoERNS_13ContainerNodeE,b6,__ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE,b6,__ZNK7WebCore4Node16childTypeAllowedENS0_8NodeTypeE,b6,__ZN7WebCore4Node13computedStyleENS_8PseudoIdE,b6,b6,b6,b6,b6,b6,b6];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiii: dynCall_iiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiii": invoke_iiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames9classAttrE": __ZN7WebCore9HTMLNames9classAttrE, "__ZN7WebCore9HTMLNames7bodyTagE": __ZN7WebCore9HTMLNames7bodyTagE, "__ZTVN7WebCore13EmptyNodeListE": __ZTVN7WebCore13EmptyNodeListE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZN7WebCore9HTMLNames6imgTagE": __ZN7WebCore9HTMLNames6imgTagE, "__ZN7WebCore9HTMLNames7forAttrE": __ZN7WebCore9HTMLNames7forAttrE, "__ZN7WebCore8XMLNames15xmlNamespaceURIE": __ZN7WebCore8XMLNames15xmlNamespaceURIE, "__ZN7WebCore9HTMLNames8nameAttrE": __ZN7WebCore9HTMLNames8nameAttrE, "__ZN3WTF7xmlAtomE": __ZN3WTF7xmlAtomE, "__ZN7WebCore9HTMLNames5brTagE": __ZN7WebCore9HTMLNames5brTagE, "__ZN7WebCore9HTMLNames6idAttrE": __ZN7WebCore9HTMLNames6idAttrE, "__ZN3WTF9xmlnsAtomE": __ZN3WTF9xmlnsAtomE, "__ZN7WebCore9HTMLNames8typeAttrE": __ZN7WebCore9HTMLNames8typeAttrE, "__ZN7WebCore9HTMLNames8formAttrE": __ZN7WebCore9HTMLNames8formAttrE, "__ZN7WebCore9HTMLNames8hrefAttrE": __ZN7WebCore9HTMLNames8hrefAttrE, "__ZN7WebCore17InspectorCounters10s_countersE": __ZN7WebCore17InspectorCounters10s_countersE }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore37shouldInvalidateNodeListCachesForAttrILj8EEEbPKjRKNS_13QualifiedNameE","__ZNK7WebCore4Node10shadowHostEv","_strlen","__ZN7WebCore4Node14dumpStatisticsEv","__ZN3WTF9HashTableIPN7WebCore16MutationObserverENS_12KeyValuePairIS3_hEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_hS9_NS_10HashTraitsIS3_EENSB_IhEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EES3_RhEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_","__ZNK7WebCore5Event13relatedTargetEv","__ZN3WTF6VectorINS_12AtomicStringELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore4Node19dispatchScopedEventEN3WTF10PassRefPtrINS_5EventEEE","__ZN7WebCore4Node15eventTargetDataEv","__ZNK7WebCore4Node22pseudoAwareNextSiblingEv","__ZN7WebCore10BorderDataD2Ev","__ZNK7WebCore4Node19isCharacterDataNodeEv","__ZN7WebCore4Node16derefEventTargetEv","__ZN7WebCore8Document37invalidateNodeListAndCollectionCachesEPKNS_13QualifiedNameE","__ZNK7WebCore4Node23canContainRangeEndPointEv","__ZN7WebCore4Node31decrementConnectedSubframeCountEj","__ZNK7WebCore4Node19rootEditableElementENS_12EditableTypeE","__ZN7WebCore15BeforeLoadEventD1Ev","__ZNK7WebCore4Node21isRootEditableElementEv","_memcpy","__ZNK7WebCore4Node25insertionParentForBindingEv","__ZN7WebCore4Node29nonBoundaryShadowTreeRootNodeEv","__ZNK7WebCore4Node18getSubresourceURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE","__ZNK7WebCore4Node13convertToPageERKNS_10FloatPointE","__ZNK7WebCore4Node21isMediaControlElementEv","__ZN3WTF13StringBuilder6appendERKNS_6StringE","__ZNK7WebCore4Node19isFrameOwnerElementEv","__ZNK7WebCore4Node20pseudoAwareLastChildEv","__ZN3WTF6OwnPtrIN7WebCore24NodeMutationObserverDataEEaSERKNS_10PassOwnPtrIS2_EE","__ZNK7WebCore4Node29containsIncludingHostElementsEPKS0_","__ZNK7WebCore4Node8rareDataEv","__ZN7WebCore4Node13clearRareDataEv","__ZN7WebCore4Node11isSupportedERKN3WTF6StringES4_","__ZN7WebCore4Node17stopIgnoringLeaksEv","__ZN3WTF6OwnPtrIN7WebCore24NodeMutationObserverDataEED2Ev","__ZN7WebCore4Node11appendChildEN3WTF10PassRefPtrIS0_EERi","__ZNK7WebCore4Node48updateAncestorConnectedSubframeCountForInsertionEv","__ZN7WebCore4Node17willBeDeletedFromEPNS_8DocumentE","__ZN7WebCore4Node14toInputElementEv","__ZNK7WebCore4Node27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE","__ZNK7WebCore4Node21pseudoAwareFirstChildEv","__ZN7WebCore17StyleSurroundDataD2Ev","__ZNK7WebCore4Node21lookupNamespacePrefixERKN3WTF12AtomicStringEPKNS_7ElementE","__ZNK7WebCore4Node20isInsertionPointNodeEv","__ZN7WebCore4Node12insertedIntoERNS_13ContainerNodeE","__ZN7WebCore4Node9normalizeEv","__ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE","__ZNK7WebCore4Node18maxCharacterOffsetEv","__ZN7WebCore4Node11removeChildEPS0_Ri","__ZN3WTF9HashTableIPN7WebCore28MutationObserverRegistrationES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZN7WebCore4Node14clearNodeListsEv","__ZN7WebCore4Node12insertBeforeEN3WTF10PassRefPtrIS0_EEPS0_Ri","__ZN7WebCore4Node20beginParsingChildrenEv","__ZN7WebCore4Node26unregisterMutationObserverEPNS_28MutationObserverRegistrationE","__ZN7WebCore4Node9nodeListsEv","__ZN7WebCore4Node23isContentRichlyEditableEv","__ZNK7WebCore4Node18lookupNamespaceURIERKN3WTF6StringE","__ZN7WebCore4Node14checkSetPrefixERKN3WTF12AtomicStringERi","__ZN7WebCore4NodeD2Ev","__ZNK7WebCore4Node20renderBoxModelObjectEv","__ZN7WebCore4Node11removedFromERNS_13ContainerNodeE","__ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE","__ZNK7WebCore4Node12namespaceURIEv","__ZNK7WebCore4Node18offsetInCharactersEv","__ZN7WebCore4Node20clearEventTargetDataEv","__ZN7WebCore4Node17handleLocalEventsERNS_5EventE","__ZNK7WebCore4Node22scriptExecutionContextEv","__ZNK7WebCore4Node25parentOrShadowHostElementEv","__ZNK7WebCore4Node22connectedSubframeCountEv","__ZN7WebCore4Node21ensureEventTargetDataEv","__ZN7WebCore12StyleBoxDataD2Ev","__ZNK7WebCore15BeforeLoadEvent14eventInterfaceEv","__ZNK7WebCore4Node8containsEPKS0_","__ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi","__ZN7WebCore11RenderStyleD2Ev","__ZN7WebCore4Node18dispatchInputEventEv","__ZNK7WebCore4Node11isEqualNodeEPS0_","__ZNK7WebCore4Node20containingShadowRootEv","__ZN7WebCore4Node14removedLastRefEv","__ZNK7WebCore5Event9clipboardEv","__ZNK7WebCore4Node46updateAncestorConnectedSubframeCountForRemovalEv","__ZNK7WebCore4Node28deprecatedShadowAncestorNodeEv","__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE","__ZN7WebCore4Node24dispatchDOMActivateEventEiN3WTF10PassRefPtrINS_5EventEEE","__ZN7WebCore4Node35unregisterTransientMutationObserverEPNS_28MutationObserverRegistrationE","__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE","__ZNK7WebCore4Node9renderBoxEv","__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb","__ZN7WebCore4Node17trackForDebuggingEv","__ZN7WebCore4Node33transientMutationObserverRegistryEv","__ZNK7WebCore4Node16childTypeAllowedENS0_8NodeTypeE","__ZN3WTF9HashTableIPN7WebCore4NodeENS_12KeyValuePairIS3_NS_6OwnPtrINS1_15EventTargetDataEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_","__ZN7WebCore4Node29willRespondToMouseWheelEventsEv","__ZNK7WebCore4Node17canStartSelectionEv","__ZN7WebCore17NodeListsNodeDataD2Ev","__ZN7WebCore15ElementRareDataD2Ev","__ZNK7WebCore4Node11textContentEb","__ZNK7WebCore4Node7baseURIEv","__ZN7WebCore22ChildListMutationScopeC2ERNS_13ContainerNodeE","__ZN3WTF6VectorINS_6OwnPtrIN7WebCore28MutationObserverRegistrationEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore4Node14setTextContentERKN3WTF6StringERi","__ZNK7WebCore4Node6prefixEv","__ZN7WebCore4Node10renderRectEPb","__ZNK7WebCore4Node15firstDescendantEv","__ZNK7WebCore4Node16nonRendererStyleEv","__ZN7WebCore4Node7inspectEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZNK7WebCore4Node15isPluginElementEv","__ZN7WebCore4Node22dispatchUIRequestEventEN3WTF10PassRefPtrINS_14UIRequestEventEEE","__ZN3WTF7HashSetIPN7WebCore28MutationObserverRegistrationENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN7WebCore4Node24startLoadingDynamicSheetEv","__ZNK7WebCore4Node13ownerDocumentEv","__ZNK7WebCore4Node12lookupPrefixERKN3WTF12AtomicStringE","__ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE","__ZNK7WebCore4Node14lastDescendantEv","__ZN7WebCore4Node14ensureRareDataEv","__ZN7WebCore4Node29willRespondToMouseClickEventsEv","__ZNK7WebCore4Node18isDefaultNamespaceERKN3WTF12AtomicStringE","__ZN7WebCore17NodeListsNodeData16invalidateCachesEPKNS_13QualifiedNameE","__ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv","__ZNK7WebCore4Node19rootEditableElementEv","__ZN7WebCore4Node38markAncestorsWithChildNeedsStyleRecalcEv","__ZNK7WebCore4Node9localNameEv","__ZNK7WebCore4Node15convertFromPageERKNS_10FloatPointE","__ZN7WebCore4Node6removeERi","__ZN7WebCore4Node24registerMutationObserverEPNS_16MutationObserverEhRKN3WTF7HashSetINS3_12AtomicStringENS3_16AtomicStringHashENS3_10HashTraitsIS5_EEEE","__ZNK7WebCore4Node27nonShadowBoundaryParentNodeEv","__ZN7WebCore4Node21finishParsingChildrenEv","__ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb","__ZN3WTF9HashTableIPN7WebCore16MutationObserverENS_12KeyValuePairIS3_hEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_hS9_NS_10HashTraitsIS3_EENSB_IhEEE18KeyValuePairTraitsESC_E6expandEPS5_","__ZN7WebCore4Node10childNodesEv","__ZN7WebCore4Node31incrementConnectedSubframeCountEj","__ZN7WebCore4Node24mutationObserverRegistryEv","__ZN7WebCore4Node9setPrefixERKN3WTF12AtomicStringERi","__ZNK7WebCore4Node20eventTargetInterfaceEv","__ZN3WTF9HashTableIPN7WebCore4NodeENS_12KeyValuePairIS3_NS_6OwnPtrINS1_15EventTargetDataEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EES3_NS_10PassOwnPtrIS6_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S8_SA_SC_SI_SF_EEEEOT0_OT1_","__ZN7WebCore4Node48invalidateNodeListAndCollectionCachesInAncestorsEPKNS_13QualifiedNameEPNS_7ElementE","__ZN7WebCore4Node24willRespondToTouchEventsEv","__ZN7WebCore4Node17isContentEditableENS0_22UserSelectAllTreatmentE","__ZN7WebCore4Node11sheetLoadedEv","__ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb","__ZNK7WebCore4Node11boundingBoxEv","__ZN7WebCore4Node37notifyMutationObserversNodeWillDetachEv","__ZN3WTF9HashTableIPN7WebCore28MutationObserverRegistrationES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZNK7WebCore14HTMLCollection15invalidateCacheEPKNS_13QualifiedNameE","__ZN7WebCore4Node14refEventTargetEv","__ZNK7WebCore8Document43shouldInvalidateNodeListAndCollectionCachesEPKNS_13QualifiedNameE","__ZNK7WebCore4Node14customPseudoIdEv","__ZNK7WebCore4Node15ancestorElementEv","__ZN7WebCore4Node36getRegisteredMutationObserversOfTypeERN3WTF7HashMapIPNS_16MutationObserverEhNS1_7PtrHashIS4_EENS1_10HashTraitsIS4_EENS7_IhEEEENS3_12MutationTypeEPKNS_13QualifiedNameE","__ZNK7WebCore4Node9textRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEE","__ZNK7WebCore4Node18inRenderedDocumentEv","__ZNK7WebCore4Node26pseudoAwarePreviousSiblingEv","__ZN7WebCore15BeforeLoadEventD0Ev","__ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE","__ZN7WebCore4NodeD0Ev","__ZN7WebCore4Node12replaceChildEN3WTF10PassRefPtrIS0_EEPS0_Ri","__ZN3WTF10PassOwnPtrIN7WebCore24NodeMutationObserverDataEED2Ev","__ZN7WebCore4Node18startIgnoringLeaksEv","_memset","__ZNK7WebCore4Node9nodeValueEv","__ZN7WebCore4Node6toNodeEv","__ZNK7WebCore4Node25isEditableToAccessibilityENS0_13EditableLevelE","__ZN7WebCore4Node28dispatchSubtreeModifiedEventEv","__ZNK7WebCore4Node32isDescendantOrShadowDescendantOfEPKS0_","__ZN7WebCoreL35collectMatchingObserversForMutationIN3WTF7HashSetIPNS_28MutationObserverRegistrationENS1_7PtrHashIS4_EENS1_10HashTraitsIS4_EEEEEEvRNS1_7HashMapIPNS_16MutationObserverEhNS5_ISC_EENS7_ISC_EENS7_IhEEEEPT_PNS_4NodeENSB_12MutationTypeEPKNS_13QualifiedNameE","__ZN7WebCore4Node28willRespondToMouseMoveEventsEv","__ZN7WebCoreL17appendTextContentEPKNS_4NodeEbRbRN3WTF13StringBuilderE","__ZN7WebCore4Node30enclosingLinkEventParentOrSelfEv","_memmove","__ZNK7WebCore4Node15isMediaControlsEv","__ZN7WebCore4Node23compareDocumentPositionEPS0_","__ZNK7WebCore4Node9nodeIndexEv","__ZN7WebCore4Node33registerTransientMutationObserverEPNS_28MutationObserverRegistrationE","__ZNK7WebCore4Node15isAttributeNodeEv","__ZN7WebCore4Node13computedStyleENS_8PseudoIdE","__ZN7WebCore4Node23dispatchBeforeLoadEventERKN3WTF6StringE","__ZNK7WebCore4Node26containsIncludingShadowDOMEPKS0_","__ZNK7WebCore10EventNames15touchEventNamesEv","__ZNK7WebCore4Node14isDescendantOfEPKS0_"]

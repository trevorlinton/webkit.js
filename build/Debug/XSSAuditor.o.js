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
H_BASE = parentModule["_malloc"](304 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 304;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore10XSSAuditorC1Ev;
/* memory initializer */ allocate([42,47,0,0,0,0,0,0,61,0,0,0,0,0,0,0,106,97,118,97,115,99,114,105,112,116,58,118,111,105,100,40,48,41,0,0,0,0,0,0,46,32,84,104,101,32,100,101,102,97,117,108,116,32,112,114,111,116,101,99,116,105,111,110,115,32,119,105,108,108,32,98,101,32,97,112,112,108,105,101,100,46,0,0,0,0,0,0,37,117,0,0,0,0,0,0,32,97,116,32,99,104,97,114,97,99,116,101,114,32,112,111,115,105,116,105,111,110,32,0,58,32,0,0,0,0,0,0,69,114,114,111,114,32,112,97,114,115,105,110,103,32,104,101,97,100,101,114,32,88,45,88,83,83,45,80,114,111,116,101,99,116,105,111,110,58,32,0,100,97,116,97,0,0,0,0,120,108,105,110,107,58,0,0,115,101,116,45,99,111,111,107,105,101,0,0,0,0,0,0,114,101,102,114,101,115,104,0,105,110,115,101,99,117,114,101,32,114,101,112,111,114,116,105,110,103,32,85,82,76,32,102,111,114,32,115,101,99,117,114,101,32,112,97,103,101,0,0,88,45,88,83,83,45,80,114,111,116,101,99,116,105,111,110,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore9HTMLNames8embedTagE=env.__ZN7WebCore9HTMLNames8embedTagE|0;
  var __ZN7WebCore9HTMLNames9iframeTagE=env.__ZN7WebCore9HTMLNames9iframeTagE|0;
  var __ZN7WebCore9HTMLNames7formTagE=env.__ZN7WebCore9HTMLNames7formTagE|0;
  var __ZN7WebCore9HTMLNames11classidAttrE=env.__ZN7WebCore9HTMLNames11classidAttrE|0;
  var __ZN7WebCore9HTMLNames7baseTagE=env.__ZN7WebCore9HTMLNames7baseTagE|0;
  var __ZN7WebCore9HTMLNames9valueAttrE=env.__ZN7WebCore9HTMLNames9valueAttrE|0;
  var __ZN7WebCore9HTMLNames8dataAttrE=env.__ZN7WebCore9HTMLNames8dataAttrE|0;
  var __ZN7WebCore9HTMLNames10srcdocAttrE=env.__ZN7WebCore9HTMLNames10srcdocAttrE|0;
  var __ZN7WebCore9HTMLNames10actionAttrE=env.__ZN7WebCore9HTMLNames10actionAttrE|0;
  var __ZN7WebCore9HTMLNames9buttonTagE=env.__ZN7WebCore9HTMLNames9buttonTagE|0;
  var __ZN7WebCore9HTMLNames8codeAttrE=env.__ZN7WebCore9HTMLNames8codeAttrE|0;
  var __ZN7WebCore9HTMLNames8nameAttrE=env.__ZN7WebCore9HTMLNames8nameAttrE|0;
  var __ZN7WebCore9HTMLNames7metaTagE=env.__ZN7WebCore9HTMLNames7metaTagE|0;
  var __ZN7WebCore9HTMLNames14formactionAttrE=env.__ZN7WebCore9HTMLNames14formactionAttrE|0;
  var __ZN7WebCore9HTMLNames10objectAttrE=env.__ZN7WebCore9HTMLNames10objectAttrE|0;
  var __ZN7WebCore9HTMLNames9appletTagE=env.__ZN7WebCore9HTMLNames9appletTagE|0;
  var __ZN7WebCore9HTMLNames7srcAttrE=env.__ZN7WebCore9HTMLNames7srcAttrE|0;
  var __ZN7WebCore9HTMLNames9objectTagE=env.__ZN7WebCore9HTMLNames9objectTagE|0;
  var __ZN7WebCore9HTMLNames8paramTagE=env.__ZN7WebCore9HTMLNames8paramTagE|0;
  var __ZN7WebCore10XLinkNames17xlinkNamespaceURIE=env.__ZN7WebCore10XLinkNames17xlinkNamespaceURIE|0;
  var __ZN7WebCore9HTMLNames8inputTagE=env.__ZN7WebCore9HTMLNames8inputTagE|0;
  var __ZN7WebCore9HTMLNames8typeAttrE=env.__ZN7WebCore9HTMLNames8typeAttrE|0;
  var __ZN7WebCore8SVGNames10valuesAttrE=env.__ZN7WebCore8SVGNames10valuesAttrE|0;
  var __ZN7WebCore10XLinkNames8hrefAttrE=env.__ZN7WebCore10XLinkNames8hrefAttrE|0;
  var __ZN7WebCore9HTMLNames8hrefAttrE=env.__ZN7WebCore9HTMLNames8hrefAttrE|0;
  var __ZN7WebCore9HTMLNames14http_equivAttrE=env.__ZN7WebCore9HTMLNames14http_equivAttrE|0;
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
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore10XSSAuditor4initEPNS_8DocumentEPNS_18XSSAuditorDelegateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 440 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 72 | 0;
 i10 = i4 + 80 | 0;
 i11 = i4 + 88 | 0;
 i12 = i4 + 96 | 0;
 i13 = i4 + 104 | 0;
 i14 = i4 + 112 | 0;
 i15 = i4 + 120 | 0;
 i16 = i4 + 128 | 0;
 i17 = i4 + 176 | 0;
 i18 = i4 + 224 | 0;
 i19 = i4 + 232 | 0;
 i20 = i4 + 280 | 0;
 i21 = i4 + 288 | 0;
 i22 = i4 + 320 | 0;
 i23 = i4 + 344 | 0;
 i24 = i4 + 368 | 0;
 i25 = i4 + 376 | 0;
 i26 = i4 + 424 | 0;
 i27 = i4 + 432 | 0;
 i28 = i1 + 72 | 0;
 if ((HEAP32[i28 >> 2] | 0) == 1) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i28 >> 2] = 1;
 i28 = i2 + 332 | 0;
 i29 = HEAP32[i28 >> 2] | 0;
 if ((i29 | 0) == 0) {
  i30 = HEAP8[i1 + 48 | 0] | 0;
 } else {
  i31 = (HEAPU8[(HEAP32[i29 + 36 >> 2] | 0) + 193 | 0] | 0) >>> 7;
  HEAP8[i1 + 48 | 0] = i31;
  i30 = i31;
 }
 i31 = i1 + 48 | 0;
 if ((i30 & 1) == 0) {
  STACKTOP = i4;
  return;
 }
 i30 = i1 | 0;
 __ZNK7WebCore3URL4copyEv(i8, i2 + 356 | 0);
 i29 = i8 | 0;
 i32 = HEAP32[i29 >> 2] | 0;
 HEAP32[i29 >> 2] = 0;
 i33 = i1 | 0;
 i34 = HEAP32[i33 >> 2] | 0;
 HEAP32[i33 >> 2] = i32;
 do {
  if ((i34 | 0) != 0) {
   i32 = i34 | 0;
   i35 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
   if ((i35 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i34);
    break;
   } else {
    HEAP32[i32 >> 2] = i35;
    break;
   }
  }
 } while (0);
 i34 = HEAP8[i8 + 4 | 0] | 0;
 i35 = i1 + 4 | 0;
 HEAP8[i35] = HEAP8[i35] & -4 | i34 & 1 | i34 & 2;
 HEAP32[i1 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
 HEAP32[i1 + 16 >> 2] = HEAP32[i8 + 16 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i8 + 20 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i8 + 24 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i8 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i8 + 32 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i8 + 36 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i8 + 40 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i8 + 44 >> 2];
 i8 = HEAP32[i29 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i29 = i8 | 0;
   i34 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
   if ((i34 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i29 >> 2] = i34;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i28 >> 2] | 0) == 0) {
  HEAP8[i31] = 0;
  STACKTOP = i4;
  return;
 }
 i8 = HEAP32[i33 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   if ((HEAP32[i8 + 4 >> 2] | 0) == 0) {
    break;
   }
   if (__ZNK7WebCore3URL10protocolIsEPKc(i30, H_BASE + 176 | 0) | 0) {
    HEAP8[i31] = 0;
    STACKTOP = i4;
    return;
   }
   i34 = HEAP32[i2 + 1308 >> 2] | 0;
   i29 = i1 + 84 | 0;
   if ((i34 | 0) != 0) {
    i35 = i29;
    i32 = i34 + 8 | 0;
    HEAP32[i35 >> 2] = HEAP32[i32 >> 2];
    HEAP16[i35 + 4 >> 1] = HEAP16[i32 + 4 >> 1] | 0;
   }
   __ZN7WebCoreL17fullyDecodeStringERKN3WTF6StringERKNS_12TextEncodingE(i9, HEAP32[i33 >> 2] | 0, i29);
   i32 = i9 | 0;
   i35 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = 0;
   i34 = i1 + 60 | 0;
   i36 = HEAP32[i34 >> 2] | 0;
   HEAP32[i34 >> 2] = i35;
   do {
    if ((i36 | 0) != 0) {
     i35 = i36 | 0;
     i37 = (HEAP32[i35 >> 2] | 0) - 2 | 0;
     if ((i37 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i36);
      break;
     } else {
      HEAP32[i35 >> 2] = i37;
      break;
     }
    }
   } while (0);
   i36 = HEAP32[i32 >> 2] | 0;
   do {
    if ((i36 | 0) != 0) {
     i37 = i36 | 0;
     i35 = (HEAP32[i37 >> 2] | 0) - 2 | 0;
     if ((i35 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i36);
      break;
     } else {
      HEAP32[i37 >> 2] = i35;
      break;
     }
    }
   } while (0);
   i36 = HEAP32[i34 >> 2] | 0;
   do {
    if ((i36 | 0) == 0) {
     HEAP32[i34 >> 2] = 0;
    } else {
     if ((__ZN3WTF10StringImpl4findEPFbtEj(i36, F_BASE_ii + 6 | 0, 0) | 0) != -1) {
      break;
     }
     i32 = HEAP32[i34 >> 2] | 0;
     HEAP32[i34 >> 2] = 0;
     if ((i32 | 0) == 0) {
      break;
     }
     i35 = i32 | 0;
     i37 = (HEAP32[i35 >> 2] | 0) - 2 | 0;
     if ((i37 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i32);
      break;
     } else {
      HEAP32[i35 >> 2] = i37;
      break;
     }
    }
   } while (0);
   i36 = HEAP32[(HEAP32[i28 >> 2] | 0) + 128 >> 2] | 0;
   do {
    if ((i36 | 0) == 0) {
     i38 = 0;
    } else {
     if (HEAP8[H_BASE + 280 | 0] | 0) {
      i39 = HEAP32[H_BASE + 296 >> 2] | 0;
     } else {
      i37 = __Znwj(4) | 0;
      HEAP32[i10 >> 2] = H_BASE + 256;
      __ZN3WTF6StringC1ENS_12ASCIILiteralE(i37, i10);
      HEAP32[H_BASE + 296 >> 2] = i37;
      HEAP8[H_BASE + 280 | 0] = 1;
      i39 = i37;
     }
     i37 = i36 + 784 | 0;
     i35 = HEAP32[i39 >> 2] | 0;
     do {
      if ((i35 | 0) == 0) {
       i32 = i5 | 0;
       HEAP32[i32 >> 2] = 0;
       i40 = i32;
      } else {
       if ((HEAP32[i35 + 16 >> 2] & 16 | 0) == 0) {
        __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i5, i35);
        i40 = i5 | 0;
        break;
       } else {
        i32 = i5 | 0;
        HEAP32[i32 >> 2] = i35;
        i41 = i35 | 0;
        HEAP32[i41 >> 2] = (HEAP32[i41 >> 2] | 0) + 2;
        i40 = i32;
        break;
       }
      }
     } while (0);
     i35 = i12 | 0;
     HEAP32[i35 >> 2] = HEAP32[i40 >> 2];
     __ZNK7WebCore20ResourceResponseBase15httpHeaderFieldERKN3WTF12AtomicStringE(i11, i37, i12);
     i32 = HEAP32[i35 >> 2] | 0;
     do {
      if ((i32 | 0) != 0) {
       i35 = i32 | 0;
       i41 = (HEAP32[i35 >> 2] | 0) - 2 | 0;
       if ((i41 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i32);
        break;
       } else {
        HEAP32[i35 >> 2] = i41;
        break;
       }
      }
     } while (0);
     i32 = i13 | 0;
     HEAP32[i32 >> 2] = 0;
     HEAP32[i14 >> 2] = 0;
     i37 = i15 | 0;
     HEAP32[i37 >> 2] = 0;
     i41 = i16 | 0;
     HEAP32[i41 >> 2] = 0;
     __ZN7WebCore3URL10invalidateEv(i16);
     i35 = __ZN7WebCore24parseXSSProtectionHeaderERKN3WTF6StringERS1_RjS4_(i11, i13, i14, i15) | 0;
     do {
      if ((i35 | 0) == 0) {
       HEAP8[i1 + 57 | 0] = 0;
       i42 = 0;
      } else {
       HEAP8[i1 + 57 | 0] = (i35 | 0) != 2 | 0;
       do {
        if ((i35 - 3 | 0) >>> 0 < 2 >>> 0) {
         i43 = HEAP32[i37 >> 2] | 0;
         if ((i43 | 0) == 0) {
          i44 = 81;
          break;
         }
         if ((HEAP32[i43 + 4 >> 2] | 0) == 0) {
          i44 = 81;
          break;
         }
         __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i17, i2, i15);
         i43 = i17 | 0;
         i45 = HEAP32[i43 >> 2] | 0;
         HEAP32[i43 >> 2] = 0;
         i46 = HEAP32[i41 >> 2] | 0;
         HEAP32[i41 >> 2] = i45;
         do {
          if ((i46 | 0) != 0) {
           i45 = i46 | 0;
           i47 = (HEAP32[i45 >> 2] | 0) - 2 | 0;
           if ((i47 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i46);
            break;
           } else {
            HEAP32[i45 >> 2] = i47;
            break;
           }
          }
         } while (0);
         i46 = HEAP8[i17 + 4 | 0] | 0;
         i47 = i16 + 4 | 0;
         HEAP8[i47] = HEAP8[i47] & -4 | i46 & 1 | i46 & 2;
         i46 = i16 + 8 | 0;
         HEAP32[i46 >> 2] = HEAP32[i17 + 8 >> 2];
         i45 = i16 + 12 | 0;
         HEAP32[i45 >> 2] = HEAP32[i17 + 12 >> 2];
         i48 = i16 + 16 | 0;
         HEAP32[i48 >> 2] = HEAP32[i17 + 16 >> 2];
         i49 = i16 + 20 | 0;
         HEAP32[i49 >> 2] = HEAP32[i17 + 20 >> 2];
         i50 = i16 + 24 | 0;
         HEAP32[i50 >> 2] = HEAP32[i17 + 24 >> 2];
         i51 = i16 + 28 | 0;
         HEAP32[i51 >> 2] = HEAP32[i17 + 28 >> 2];
         i52 = i16 + 32 | 0;
         HEAP32[i52 >> 2] = HEAP32[i17 + 32 >> 2];
         i53 = i16 + 36 | 0;
         HEAP32[i53 >> 2] = HEAP32[i17 + 36 >> 2];
         i54 = i16 + 40 | 0;
         HEAP32[i54 >> 2] = HEAP32[i17 + 40 >> 2];
         i55 = i16 + 44 | 0;
         HEAP32[i55 >> 2] = HEAP32[i17 + 44 >> 2];
         i56 = HEAP32[i43 >> 2] | 0;
         do {
          if ((i56 | 0) != 0) {
           i57 = i56 | 0;
           i58 = (HEAP32[i57 >> 2] | 0) - 2 | 0;
           if ((i58 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i56);
            break;
           } else {
            HEAP32[i57 >> 2] = i58;
            break;
           }
          }
         } while (0);
         if (!(__ZN7WebCore19MixedContentChecker14isMixedContentEPNS_14SecurityOriginERKNS_3URLE(HEAP32[i2 + 100 >> 2] | 0, i16) | 0)) {
          i44 = 81;
          break;
         }
         __ZN3WTF6StringC1EPKc(i18, H_BASE + 216 | 0);
         i56 = i18 | 0;
         i43 = HEAP32[i56 >> 2] | 0;
         HEAP32[i56 >> 2] = 0;
         i58 = HEAP32[i32 >> 2] | 0;
         HEAP32[i32 >> 2] = i43;
         do {
          if ((i58 | 0) != 0) {
           i43 = i58 | 0;
           i57 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
           if ((i57 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i58);
            break;
           } else {
            HEAP32[i43 >> 2] = i57;
            break;
           }
          }
         } while (0);
         i58 = HEAP32[i56 >> 2] | 0;
         do {
          if ((i58 | 0) != 0) {
           i57 = i58 | 0;
           i43 = (HEAP32[i57 >> 2] | 0) - 2 | 0;
           if ((i43 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i58);
            break;
           } else {
            HEAP32[i57 >> 2] = i43;
            break;
           }
          }
         } while (0);
         i58 = i19 | 0;
         HEAP32[i58 >> 2] = 0;
         __ZN7WebCore3URL10invalidateEv(i19);
         i56 = HEAP32[i58 >> 2] | 0;
         HEAP32[i58 >> 2] = 0;
         i43 = HEAP32[i41 >> 2] | 0;
         HEAP32[i41 >> 2] = i56;
         do {
          if ((i43 | 0) != 0) {
           i56 = i43 | 0;
           i57 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
           if ((i57 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i43);
            break;
           } else {
            HEAP32[i56 >> 2] = i57;
            break;
           }
          }
         } while (0);
         i43 = HEAP8[i19 + 4 | 0] | 0;
         HEAP8[i47] = HEAP8[i47] & -4 | i43 & 1 | i43 & 2;
         HEAP32[i46 >> 2] = HEAP32[i19 + 8 >> 2];
         HEAP32[i45 >> 2] = HEAP32[i19 + 12 >> 2];
         HEAP32[i48 >> 2] = HEAP32[i19 + 16 >> 2];
         HEAP32[i49 >> 2] = HEAP32[i19 + 20 >> 2];
         HEAP32[i50 >> 2] = HEAP32[i19 + 24 >> 2];
         HEAP32[i51 >> 2] = HEAP32[i19 + 28 >> 2];
         HEAP32[i52 >> 2] = HEAP32[i19 + 32 >> 2];
         HEAP32[i53 >> 2] = HEAP32[i19 + 36 >> 2];
         HEAP32[i54 >> 2] = HEAP32[i19 + 40 >> 2];
         HEAP32[i55 >> 2] = HEAP32[i19 + 44 >> 2];
         i43 = HEAP32[i58 >> 2] | 0;
         if ((i43 | 0) == 0) {
          break;
         }
         i57 = i43 | 0;
         i56 = (HEAP32[i57 >> 2] | 0) - 2 | 0;
         if ((i56 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i43);
          break;
         } else {
          HEAP32[i57 >> 2] = i56;
          break;
         }
        } else {
         i44 = 81;
        }
       } while (0);
       if ((i44 | 0) == 81) {
        if ((i35 | 0) != 2) {
         i42 = i35;
         break;
        }
       }
       i56 = HEAP32[(HEAP32[i2 >> 2] | 0) + 316 >> 2] | 0;
       i57 = HEAP32[i11 >> 2] | 0;
       do {
        if ((i57 | 0) == 0) {
         i59 = 0;
         i60 = 1;
        } else {
         i43 = i57 | 0;
         i61 = HEAP32[i43 >> 2] | 0;
         i62 = i61 + 2 | 0;
         HEAP32[i43 >> 2] = i61 + 4;
         if ((i62 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i57);
          i63 = HEAP32[i43 >> 2] | 0;
         } else {
          HEAP32[i43 >> 2] = i62;
          i63 = i62;
         }
         i62 = i63 + 2 | 0;
         HEAP32[i43 >> 2] = i63 + 4;
         if ((i62 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i57);
          i59 = i57;
          i60 = 0;
          break;
         } else {
          HEAP32[i43 >> 2] = i62;
          i59 = i57;
          i60 = 0;
          break;
         }
        }
       } while (0);
       i57 = HEAP32[i32 >> 2] | 0;
       i62 = (i57 | 0) == 0;
       if (!i62) {
        i43 = i57 | 0;
        HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 2;
       }
       i43 = (i59 | 0) == 0;
       if (!i43) {
        i61 = i59 | 0;
        HEAP32[i61 >> 2] = (HEAP32[i61 >> 2] | 0) + 2;
       }
       if (!i62) {
        i61 = i57 | 0;
        HEAP32[i61 >> 2] = (HEAP32[i61 >> 2] | 0) + 2;
       }
       if (!i43) {
        i61 = i59 | 0;
        HEAP32[i61 >> 2] = (HEAP32[i61 >> 2] | 0) + 2;
       }
       do {
        if (!i62) {
         i61 = i57 | 0;
         i64 = HEAP32[i61 >> 2] | 0;
         HEAP32[i61 >> 2] = i64 + 2;
         if ((i64 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i57);
          break;
         } else {
          HEAP32[i61 >> 2] = i64;
          break;
         }
        }
       } while (0);
       if (!i43) {
        i64 = i59 | 0;
        i61 = (HEAP32[i64 >> 2] | 0) - 2 | 0;
        if ((i61 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i59);
         i65 = HEAP32[i64 >> 2] | 0;
        } else {
         HEAP32[i64 >> 2] = i61;
         i65 = i61;
        }
        HEAP32[i64 >> 2] = i65 + 2;
       }
       if (!i62) {
        i64 = i57 | 0;
        HEAP32[i64 >> 2] = (HEAP32[i64 >> 2] | 0) + 2;
       }
       HEAP32[i23 >> 2] = H_BASE + 136;
       i64 = i23 + 4 | 0;
       HEAP32[i64 >> 2] = i59;
       if (!i43) {
        i61 = i59 | 0;
        HEAP32[i61 >> 2] = (HEAP32[i61 >> 2] | 0) + 2;
       }
       HEAP32[i23 + 8 >> 2] = H_BASE + 128;
       i61 = i23 + 12 | 0;
       HEAP32[i61 >> 2] = i57;
       do {
        if (i62) {
         HEAP32[i23 + 16 >> 2] = H_BASE + 104;
        } else {
         i66 = i57 | 0;
         i67 = HEAP32[i66 >> 2] | 0;
         HEAP32[i66 >> 2] = i67 + 2;
         HEAP32[i23 + 16 >> 2] = H_BASE + 104;
         if ((i67 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i57);
          break;
         } else {
          HEAP32[i66 >> 2] = i67;
          break;
         }
        }
       } while (0);
       do {
        if (!i43) {
         i67 = i59 | 0;
         i66 = (HEAP32[i67 >> 2] | 0) - 2 | 0;
         if ((i66 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i59);
          break;
         } else {
          HEAP32[i67 >> 2] = i66;
          break;
         }
        }
       } while (0);
       __ZN3WTF6String6formatEPKcz(i24, H_BASE + 96 | 0, (i66 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i66 >> 2] = HEAP32[i14 >> 2], i66) | 0);
       STACKTOP = i66;
       __ZN3WTFplINS_12StringAppendINS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_S4_EENS1_INS1_IT_T0_EET1_EERKSA_SB_(i22, i23, i24);
       __ZN3WTFplINS_12StringAppendINS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EES4_S3_EENS1_INS1_IT_T0_EET1_EERKSB_SC_(i21, i22, H_BASE + 48 | 0);
       __ZNK3WTF12StringAppendINS0_INS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES3_EES2_EcvS3_Ev(i20, i21);
       FUNCTION_TABLE_viiiii[i56 & 1](i2, 8, 3, i20, 0);
       i66 = HEAP32[i20 >> 2] | 0;
       do {
        if ((i66 | 0) != 0) {
         i67 = i66 | 0;
         i68 = (HEAP32[i67 >> 2] | 0) - 2 | 0;
         if ((i68 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i66);
          break;
         } else {
          HEAP32[i67 >> 2] = i68;
          break;
         }
        }
       } while (0);
       i66 = HEAP32[i21 + 20 >> 2] | 0;
       do {
        if ((i66 | 0) != 0) {
         i56 = i66 | 0;
         i68 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
         if ((i68 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i66);
          break;
         } else {
          HEAP32[i56 >> 2] = i68;
          break;
         }
        }
       } while (0);
       i66 = HEAP32[i21 + 12 >> 2] | 0;
       do {
        if ((i66 | 0) != 0) {
         i68 = i66 | 0;
         i56 = (HEAP32[i68 >> 2] | 0) - 2 | 0;
         if ((i56 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i66);
          break;
         } else {
          HEAP32[i68 >> 2] = i56;
          break;
         }
        }
       } while (0);
       i66 = HEAP32[i21 + 4 >> 2] | 0;
       do {
        if ((i66 | 0) != 0) {
         i56 = i66 | 0;
         i68 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
         if ((i68 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i66);
          break;
         } else {
          HEAP32[i56 >> 2] = i68;
          break;
         }
        }
       } while (0);
       i66 = HEAP32[i22 + 20 >> 2] | 0;
       do {
        if ((i66 | 0) != 0) {
         i68 = i66 | 0;
         i56 = (HEAP32[i68 >> 2] | 0) - 2 | 0;
         if ((i56 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i66);
          break;
         } else {
          HEAP32[i68 >> 2] = i56;
          break;
         }
        }
       } while (0);
       i66 = HEAP32[i22 + 12 >> 2] | 0;
       do {
        if ((i66 | 0) != 0) {
         i56 = i66 | 0;
         i68 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
         if ((i68 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i66);
          break;
         } else {
          HEAP32[i56 >> 2] = i68;
          break;
         }
        }
       } while (0);
       i66 = HEAP32[i22 + 4 >> 2] | 0;
       do {
        if ((i66 | 0) != 0) {
         i68 = i66 | 0;
         i56 = (HEAP32[i68 >> 2] | 0) - 2 | 0;
         if ((i56 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i66);
          break;
         } else {
          HEAP32[i68 >> 2] = i56;
          break;
         }
        }
       } while (0);
       i66 = HEAP32[i24 >> 2] | 0;
       do {
        if ((i66 | 0) != 0) {
         i56 = i66 | 0;
         i68 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
         if ((i68 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i66);
          break;
         } else {
          HEAP32[i56 >> 2] = i68;
          break;
         }
        }
       } while (0);
       i66 = HEAP32[i61 >> 2] | 0;
       do {
        if ((i66 | 0) != 0) {
         i68 = i66 | 0;
         i56 = (HEAP32[i68 >> 2] | 0) - 2 | 0;
         if ((i56 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i66);
          break;
         } else {
          HEAP32[i68 >> 2] = i56;
          break;
         }
        }
       } while (0);
       i66 = HEAP32[i64 >> 2] | 0;
       do {
        if ((i66 | 0) != 0) {
         i61 = i66 | 0;
         i56 = (HEAP32[i61 >> 2] | 0) - 2 | 0;
         if ((i56 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i66);
          break;
         } else {
          HEAP32[i61 >> 2] = i56;
          break;
         }
        }
       } while (0);
       do {
        if (!i62) {
         i66 = i57 | 0;
         i64 = (HEAP32[i66 >> 2] | 0) - 2 | 0;
         if ((i64 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i57);
          break;
         } else {
          HEAP32[i66 >> 2] = i64;
          break;
         }
        }
       } while (0);
       do {
        if (!i43) {
         i64 = i59 | 0;
         i66 = (HEAP32[i64 >> 2] | 0) - 2 | 0;
         if ((i66 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i59);
          break;
         } else {
          HEAP32[i64 >> 2] = i66;
          break;
         }
        }
       } while (0);
       do {
        if (!i62) {
         i66 = i57 | 0;
         i64 = (HEAP32[i66 >> 2] | 0) - 2 | 0;
         if ((i64 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i57);
          break;
         } else {
          HEAP32[i66 >> 2] = i64;
          break;
         }
        }
       } while (0);
       do {
        if (!i43) {
         i57 = i59 | 0;
         i62 = (HEAP32[i57 >> 2] | 0) - 2 | 0;
         if ((i62 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i59);
          break;
         } else {
          HEAP32[i57 >> 2] = i62;
          break;
         }
        }
       } while (0);
       if (i60) {
        i42 = 2;
        break;
       }
       i43 = i59 | 0;
       i62 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
       if ((i62 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i59);
        i42 = 2;
        break;
       } else {
        HEAP32[i43 >> 2] = i62;
        i42 = 2;
        break;
       }
      }
     } while (0);
     i35 = __ZNK7WebCore21ContentSecurityPolicy23reflectedXSSDispositionEv(HEAP32[i2 + 104 >> 2] | 0) | 0;
     if ((i35 | 0) == 0) {
      i69 = 0;
     } else {
      i69 = (i35 | 0) != 2 | 0;
     }
     HEAP8[i1 + 56 | 0] = i69;
     i62 = (i42 | 0) < (i35 | 0) ? i35 : i42;
     HEAP32[i1 + 52 >> 2] = (i62 - 2 | 0) >>> 0 < 2 >>> 0 | (i62 | 0) == 0 ? 3 : i62;
     do {
      if ((i3 | 0) != 0) {
       __ZNK7WebCore3URL4copyEv(i25, i16);
       i62 = i25 | 0;
       i35 = HEAP32[i62 >> 2] | 0;
       if ((i35 | 0) != 0) {
        i43 = i35 | 0;
        HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 2;
       }
       i43 = i3 + 8 | 0;
       i57 = HEAP32[i43 >> 2] | 0;
       HEAP32[i43 >> 2] = i35;
       do {
        if ((i57 | 0) != 0) {
         i35 = i57 | 0;
         i43 = (HEAP32[i35 >> 2] | 0) - 2 | 0;
         if ((i43 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i57);
          break;
         } else {
          HEAP32[i35 >> 2] = i43;
          break;
         }
        }
       } while (0);
       i57 = HEAP8[i25 + 4 | 0] | 0;
       i43 = i3 + 12 | 0;
       HEAP8[i43] = HEAP8[i43] & -4 | i57 & 1 | i57 & 2;
       HEAP32[i3 + 16 >> 2] = HEAP32[i25 + 8 >> 2];
       HEAP32[i3 + 20 >> 2] = HEAP32[i25 + 12 >> 2];
       HEAP32[i3 + 24 >> 2] = HEAP32[i25 + 16 >> 2];
       HEAP32[i3 + 28 >> 2] = HEAP32[i25 + 20 >> 2];
       HEAP32[i3 + 32 >> 2] = HEAP32[i25 + 24 >> 2];
       HEAP32[i3 + 36 >> 2] = HEAP32[i25 + 28 >> 2];
       HEAP32[i3 + 40 >> 2] = HEAP32[i25 + 32 >> 2];
       HEAP32[i3 + 44 >> 2] = HEAP32[i25 + 36 >> 2];
       HEAP32[i3 + 48 >> 2] = HEAP32[i25 + 40 >> 2];
       HEAP32[i3 + 52 >> 2] = HEAP32[i25 + 44 >> 2];
       i57 = HEAP32[i62 >> 2] | 0;
       if ((i57 | 0) == 0) {
        break;
       }
       i43 = i57 | 0;
       i35 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
       if ((i35 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i57);
        break;
       } else {
        HEAP32[i43 >> 2] = i35;
        break;
       }
      }
     } while (0);
     i35 = __ZNK7WebCore19ResourceRequestBase8httpBodyEv(__ZNK7WebCore14DocumentLoader15originalRequestEv(i36) | 0) | 0;
     L284 : do {
      if ((i35 | 0) == 0) {
       i70 = 0;
      } else {
       if ((HEAP32[i35 + 12 >> 2] | 0) == 0) {
        i70 = 0;
        break;
       }
       __ZNK7WebCore8FormData15flattenToStringEv(i26, i35);
       i43 = i26 | 0;
       i57 = HEAP32[i43 >> 2] | 0;
       HEAP32[i43 >> 2] = 0;
       if ((i57 | 0) == 0) {
        i70 = 0;
        break;
       }
       if ((HEAP32[i57 + 4 >> 2] | 0) == 0) {
        i70 = i57;
        break;
       }
       i43 = i1 + 64 | 0;
       __ZN7WebCoreL17fullyDecodeStringERKN3WTF6StringERKNS_12TextEncodingE(i27, i57, i29);
       i64 = i27 | 0;
       i66 = HEAP32[i64 >> 2] | 0;
       HEAP32[i64 >> 2] = 0;
       i56 = i43 | 0;
       i61 = HEAP32[i56 >> 2] | 0;
       HEAP32[i56 >> 2] = i66;
       do {
        if ((i61 | 0) != 0) {
         i66 = i61 | 0;
         i68 = (HEAP32[i66 >> 2] | 0) - 2 | 0;
         if ((i68 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i61);
          break;
         } else {
          HEAP32[i66 >> 2] = i68;
          break;
         }
        }
       } while (0);
       i61 = HEAP32[i64 >> 2] | 0;
       do {
        if ((i61 | 0) != 0) {
         i62 = i61 | 0;
         i68 = (HEAP32[i62 >> 2] | 0) - 2 | 0;
         if ((i68 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i61);
          break;
         } else {
          HEAP32[i62 >> 2] = i68;
          break;
         }
        }
       } while (0);
       i61 = HEAP32[i56 >> 2] | 0;
       if ((i61 | 0) == 0) {
        HEAP32[i56 >> 2] = 0;
        i70 = i57;
        break;
       }
       do {
        if ((__ZN3WTF10StringImpl4findEPFbtEj(i61, F_BASE_ii + 6 | 0, 0) | 0) == -1) {
         i64 = HEAP32[i56 >> 2] | 0;
         HEAP32[i56 >> 2] = 0;
         if ((i64 | 0) == 0) {
          i70 = i57;
          break L284;
         }
         i68 = i64 | 0;
         i62 = (HEAP32[i68 >> 2] | 0) - 2 | 0;
         if ((i62 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i64);
          break;
         } else {
          HEAP32[i68 >> 2] = i62;
          break;
         }
        }
       } while (0);
       i61 = HEAP32[i56 >> 2] | 0;
       if ((i61 | 0) == 0) {
        i70 = i57;
        break;
       }
       if ((HEAP32[i61 + 4 >> 2] | 0) >>> 0 <= 511 >>> 0) {
        i70 = i57;
        break;
       }
       i61 = __Znwj(1060) | 0;
       i62 = i61;
       HEAP32[i61 >> 2] = i61 + 12;
       HEAP32[i61 + 4 >> 2] = 128;
       HEAP32[i61 + 8 >> 2] = 128;
       HEAP32[i7 >> 2] = 0;
       __ZN3WTF6VectorIPN7WebCore10SuffixTreeINS1_13ASCIICodebookEE4NodeELj128ENS_15CrashOnOverflowEE4fillERKS6_j(i61, i7, 128);
       HEAP8[i61 + 524 | 0] = 0;
       HEAP32[i61 + 528 >> 2] = 5;
       i68 = i61 + 532 | 0;
       HEAP32[i68 >> 2] = i61 + 544;
       HEAP32[i61 + 536 >> 2] = 128;
       HEAP32[i61 + 540 >> 2] = 128;
       HEAP32[i6 >> 2] = 0;
       __ZN3WTF6VectorIPN7WebCore10SuffixTreeINS1_13ASCIICodebookEE4NodeELj128ENS_15CrashOnOverflowEE4fillERKS6_j(i68, i6, 128);
       HEAP8[i61 + 1056 | 0] = 1;
       __ZN7WebCore10SuffixTreeINS_13ASCIICodebookEE5buildERKN3WTF6StringE(i62, i43);
       i61 = i1 + 68 | 0;
       i68 = HEAP32[i61 >> 2] | 0;
       HEAP32[i61 >> 2] = i62;
       if ((i68 | 0) == 0) {
        i70 = i57;
        break;
       }
       __ZN7WebCore10SuffixTreeINS_13ASCIICodebookEE4NodeD2Ev(i68 + 532 | 0);
       __ZN7WebCore10SuffixTreeINS_13ASCIICodebookEE4NodeD2Ev(i68 | 0);
       __ZdlPv(i68);
       i70 = i57;
      }
     } while (0);
     i35 = HEAP32[i41 >> 2] | 0;
     do {
      if ((i35 | 0) != 0) {
       i68 = i35 | 0;
       i62 = (HEAP32[i68 >> 2] | 0) - 2 | 0;
       if ((i62 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i35);
        break;
       } else {
        HEAP32[i68 >> 2] = i62;
        break;
       }
      }
     } while (0);
     i35 = HEAP32[i37 >> 2] | 0;
     do {
      if ((i35 | 0) != 0) {
       i41 = i35 | 0;
       i62 = (HEAP32[i41 >> 2] | 0) - 2 | 0;
       if ((i62 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i35);
        break;
       } else {
        HEAP32[i41 >> 2] = i62;
        break;
       }
      }
     } while (0);
     i35 = HEAP32[i32 >> 2] | 0;
     do {
      if ((i35 | 0) != 0) {
       i37 = i35 | 0;
       i62 = (HEAP32[i37 >> 2] | 0) - 2 | 0;
       if ((i62 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i35);
        break;
       } else {
        HEAP32[i37 >> 2] = i62;
        break;
       }
      }
     } while (0);
     i35 = HEAP32[i11 >> 2] | 0;
     if ((i35 | 0) == 0) {
      i38 = i70;
      break;
     }
     i32 = i35 | 0;
     i62 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
     if ((i62 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i35);
      i38 = i70;
      break;
     } else {
      HEAP32[i32 >> 2] = i62;
      i38 = i70;
      break;
     }
    }
   } while (0);
   i29 = HEAP32[i34 >> 2] | 0;
   if ((i29 | 0) == 0) {
    i44 = 233;
   } else {
    if ((HEAP32[i29 + 4 >> 2] | 0) == 0) {
     i44 = 233;
    }
   }
   do {
    if ((i44 | 0) == 233) {
     i29 = HEAP32[i1 + 64 >> 2] | 0;
     if ((i29 | 0) != 0) {
      if ((HEAP32[i29 + 4 >> 2] | 0) != 0) {
       break;
      }
     }
     HEAP8[i31] = 0;
    }
   } while (0);
   if ((i38 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i34 = i38 | 0;
   i29 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
   if ((i29 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i38);
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i34 >> 2] = i29;
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 HEAP8[i31] = 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore10XSSAuditor27decodedSnippetForJavaScriptERKNS_18FilterTokenRequestE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 __ZN7WebCore17HTMLSourceTracker14sourceForTokenERKNS_9HTMLTokenE(i5, HEAP32[i3 + 4 >> 2] | 0, HEAP32[i3 >> 2] | 0);
 i9 = i5 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 L1 : do {
  if ((i10 | 0) == 0) {
   HEAP32[i1 >> 2] = 0;
  } else {
   i11 = HEAP32[i10 + 4 >> 2] | 0;
   L3 : do {
    if ((i11 | 0) == 0) {
     i12 = 0;
     i13 = 0;
    } else {
     i14 = i3 + 8 | 0;
     i15 = i6 | 0;
     i16 = -1;
     i17 = 0;
     i18 = i10;
     while (1) {
      i19 = (HEAP8[i14] & 1) == 0;
      i20 = (i18 | 0) == 0;
      i21 = i18 + 4 | 0;
      i22 = i18 + 16 | 0;
      i23 = i18 + 8 | 0;
      i24 = i23;
      i25 = i23 | 0;
      i23 = i17;
      while (1) {
       L9 : do {
        if (i23 >>> 0 < i11 >>> 0) {
         i26 = i23;
         while (1) {
          if (i20) {
           i27 = i26;
           break L9;
          }
          if ((HEAP32[i21 >> 2] | 0) >>> 0 <= i26 >>> 0) {
           i27 = i26;
           break L9;
          }
          if ((HEAP32[i22 >> 2] & 32 | 0) == 0) {
           i28 = HEAP16[(HEAP32[i24 >> 2] | 0) + (i26 << 1) >> 1] | 0;
          } else {
           i28 = HEAPU8[(HEAP32[i25 >> 2] | 0) + i26 | 0] | 0;
          }
          if ((i28 & 65535) >>> 0 >= 33 >>> 0) {
           i27 = i26;
           break L9;
          }
          switch (i28 << 16 >> 16) {
          case 32:
          case 10:
          case 9:
          case 13:
          case 12:
           {
            break;
           }
          default:
           {
            i27 = i26;
            break L9;
           }
          }
          i29 = i26 + 1 | 0;
          if (i29 >>> 0 < i11 >>> 0) {
           i26 = i29;
          } else {
           i27 = i29;
           break L9;
          }
         }
        } else {
         i27 = i23;
        }
       } while (0);
       if (!i19) {
        i12 = i27;
        i13 = i11;
        break L3;
       }
       i26 = i27 + 3 | 0;
       if (i20) {
        i30 = 0;
       } else {
        i30 = HEAP32[i21 >> 2] | 0;
       }
       do {
        if (i26 >>> 0 < i30 >>> 0) {
         if (i20) {
          i12 = i27;
          i13 = i11;
          break L3;
         }
         i29 = HEAP32[i21 >> 2] | 0;
         if (i29 >>> 0 <= i27 >>> 0) {
          i31 = 42;
          break;
         }
         i32 = HEAP32[i22 >> 2] | 0;
         i33 = (i32 & 32 | 0) == 0;
         if (i33) {
          i34 = HEAP32[i24 >> 2] | 0;
          i35 = HEAP16[i34 + (i27 << 1) >> 1] | 0;
          i36 = i34;
          i37 = i34;
         } else {
          i34 = HEAP32[i25 >> 2] | 0;
          i35 = HEAPU8[i34 + i27 | 0] | 0;
          i36 = i34;
          i37 = i34;
         }
         if (i35 << 16 >> 16 != 60) {
          i31 = 41;
          break;
         }
         i34 = i27 + 1 | 0;
         if (i29 >>> 0 <= i34 >>> 0) {
          i31 = 41;
          break;
         }
         if (i33) {
          i38 = HEAP16[i36 + (i34 << 1) >> 1] | 0;
          i39 = i36;
         } else {
          i38 = HEAPU8[i37 + i34 | 0] | 0;
          i39 = i37;
         }
         if (i38 << 16 >> 16 != 33) {
          i31 = 41;
          break;
         }
         i34 = i27 + 2 | 0;
         if (i29 >>> 0 <= i34 >>> 0) {
          i31 = 41;
          break;
         }
         if (i33) {
          i40 = HEAP16[i39 + (i34 << 1) >> 1] | 0;
          i41 = i39;
         } else {
          i40 = HEAPU8[i37 + i34 | 0] | 0;
          i41 = i37;
         }
         if (!(i40 << 16 >> 16 == 45 & i29 >>> 0 > i26 >>> 0)) {
          i31 = 41;
          break;
         }
         if (i33) {
          i42 = HEAP16[i41 + (i26 << 1) >> 1] | 0;
         } else {
          i42 = HEAPU8[i37 + i26 | 0] | 0;
         }
         if (i42 << 16 >> 16 == 45) {
          i43 = i29;
          i44 = i32;
          i45 = i36;
          i46 = i37;
         } else {
          i31 = 41;
         }
        } else {
         i31 = 41;
        }
       } while (0);
       if ((i31 | 0) == 41) {
        i31 = 0;
        if (i20) {
         i12 = i27;
         i13 = i11;
         break L3;
        } else {
         i31 = 42;
        }
       }
       if ((i31 | 0) == 42) {
        i31 = 0;
        i47 = i27 + 1 | 0;
        i48 = HEAP32[i21 >> 2] | 0;
        i49 = i48 >>> 0 > i27 >>> 0 & i47 >>> 0 < i48 >>> 0;
        if (!i49) {
         i12 = i27;
         i13 = i11;
         break L3;
        }
        i26 = HEAP32[i22 >> 2] | 0;
        i32 = (i26 & 32 | 0) == 0;
        if (i32) {
         i29 = HEAP32[i24 >> 2] | 0;
         i50 = HEAP16[i29 + (i27 << 1) >> 1] | 0;
         i51 = i29;
         i52 = i29;
         i53 = i29;
         i54 = i29;
        } else {
         i29 = HEAP32[i25 >> 2] | 0;
         i50 = HEAPU8[i29 + i27 | 0] | 0;
         i51 = i29;
         i52 = i29;
         i53 = i29;
         i54 = i29;
        }
        if (!(i50 << 16 >> 16 == 47 & i48 >>> 0 > i47 >>> 0)) {
         break;
        }
        if (i32) {
         i55 = HEAP16[i51 + (i47 << 1) >> 1] | 0;
        } else {
         i55 = HEAPU8[i52 + i47 | 0] | 0;
        }
        if (i55 << 16 >> 16 == 47) {
         i43 = i48;
         i44 = i26;
         i45 = i53;
         i46 = i54;
        } else {
         break;
        }
       }
       L67 : do {
        if (i27 >>> 0 < i11 >>> 0) {
         i26 = i27;
         i32 = i45;
         while (1) {
          if (i43 >>> 0 > i26 >>> 0 & (i20 ^ 1)) {
           if ((i44 & 32 | 0) == 0) {
            i56 = HEAP16[i32 + (i26 << 1) >> 1] | 0;
            i57 = i32;
           } else {
            i56 = HEAPU8[i46 + i26 | 0] | 0;
            i57 = i46;
           }
           if ((i56 << 16 >> 16 | 0) == 10 | (i56 << 16 >> 16 | 0) == 13 | (i56 << 16 >> 16 | 0) == 8232 | (i56 << 16 >> 16 | 0) == 8233) {
            i58 = i26;
            break L67;
           } else {
            i59 = i57;
           }
          } else {
           i59 = i32;
          }
          i29 = i26 + 1 | 0;
          if (i29 >>> 0 < i11 >>> 0) {
           i26 = i29;
           i32 = i59;
          } else {
           i58 = i29;
           break;
          }
         }
        } else {
         i58 = i27;
        }
       } while (0);
       if (i58 >>> 0 < i11 >>> 0) {
        i23 = i58;
       } else {
        i12 = i58;
        i13 = i11;
        break L3;
       }
      }
      if (!i49) {
       i12 = i27;
       i13 = i11;
       break L3;
      }
      i23 = (HEAP32[i22 >> 2] & 32 | 0) == 0;
      if (i23) {
       i20 = HEAP32[i24 >> 2] | 0;
       i60 = HEAP16[i20 + (i27 << 1) >> 1] | 0;
       i61 = i20;
       i62 = i20;
      } else {
       i20 = HEAP32[i25 >> 2] | 0;
       i60 = HEAPU8[i20 + i27 | 0] | 0;
       i61 = i20;
       i62 = i20;
      }
      if (!(i60 << 16 >> 16 == 47 & i48 >>> 0 > i47 >>> 0)) {
       i12 = i27;
       i13 = i11;
       break L3;
      }
      if (i23) {
       i63 = HEAP16[i61 + (i47 << 1) >> 1] | 0;
      } else {
       i63 = HEAPU8[i62 + i47 | 0] | 0;
      }
      if (i63 << 16 >> 16 != 42) {
       i12 = i27;
       i13 = i11;
       break L3;
      }
      i23 = i27 + 2 | 0;
      do {
       if (i23 >>> 0 < i11 >>> 0) {
        __ZN3WTF6StringC1EPKc(i6, H_BASE + 8 | 0);
        i20 = HEAP32[i9 >> 2] | 0;
        if ((i20 | 0) == 0) {
         i64 = -1;
        } else {
         i64 = __ZN3WTF10StringImpl4findEPS0_j(i20, HEAP32[i15 >> 2] | 0, i23) | 0;
        }
        i20 = (i64 | 0) != -1;
        i21 = HEAP32[i15 >> 2] | 0;
        if ((i21 | 0) == 0) {
         i65 = i64;
         i66 = i20;
         break;
        }
        i19 = i21 | 0;
        i32 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
        if ((i32 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i21);
         i65 = i64;
         i66 = i20;
         break;
        } else {
         HEAP32[i19 >> 2] = i32;
         i65 = i64;
         i66 = i20;
         break;
        }
       } else {
        i65 = i16;
        i66 = 0;
       }
      } while (0);
      i23 = i66 ? i65 + 2 | 0 : i11;
      if (i23 >>> 0 >= i11 >>> 0) {
       i12 = i23;
       i13 = i11;
       break L3;
      }
      i16 = i65;
      i17 = i23;
      i18 = HEAP32[i9 >> 2] | 0;
     }
    }
   } while (0);
   i11 = i1 | 0;
   HEAP32[i11 >> 2] = 0;
   if (i12 >>> 0 >= i13 >>> 0) {
    break;
   }
   i18 = i2 + 84 | 0;
   i17 = i8 | 0;
   i16 = i7 | 0;
   i15 = i3 + 8 | 0;
   i14 = i12;
   i23 = 0;
   while (1) {
    i25 = (i23 | 0) == 0;
    if (!i25) {
     if ((HEAP32[i23 + 4 >> 2] | 0) != 0) {
      break L1;
     }
    }
    L108 : do {
     if (i14 >>> 0 < i13 >>> 0) {
      i24 = (HEAP8[i15] & 1) == 0;
      i22 = HEAP32[i9 >> 2] | 0;
      i20 = (i22 | 0) == 0;
      i32 = i22 + 4 | 0;
      i19 = i22 + 16 | 0;
      i21 = i22 + 8 | 0;
      i22 = i21;
      i26 = i21 | 0;
      i21 = i14 + 100 | 0;
      i29 = i14;
      L110 : while (1) {
       do {
        if (i24) {
         i33 = i29 + 1 | 0;
         if (i20) {
          break;
         }
         i34 = HEAP32[i32 >> 2] | 0;
         i67 = i34 >>> 0 > i29 >>> 0 & i33 >>> 0 < i34 >>> 0;
         if (i67) {
          i68 = (HEAP32[i19 >> 2] & 32 | 0) == 0;
          if (i68) {
           i69 = HEAP32[i22 >> 2] | 0;
           i70 = HEAP16[i69 + (i29 << 1) >> 1] | 0;
           i71 = i69;
           i72 = i69;
          } else {
           i69 = HEAP32[i26 >> 2] | 0;
           i70 = HEAPU8[i69 + i29 | 0] | 0;
           i71 = i69;
           i72 = i69;
          }
          if (i70 << 16 >> 16 == 47 & i34 >>> 0 > i33 >>> 0) {
           if (i68) {
            i73 = HEAP16[i71 + (i33 << 1) >> 1] | 0;
           } else {
            i73 = HEAPU8[i72 + i33 | 0] | 0;
           }
           if (i73 << 16 >> 16 == 47) {
            i31 = 103;
            break L110;
           }
          }
          do {
           if (i67) {
            i68 = (HEAP32[i19 >> 2] & 32 | 0) == 0;
            if (i68) {
             i69 = HEAP32[i22 >> 2] | 0;
             i74 = HEAP16[i69 + (i29 << 1) >> 1] | 0;
             i75 = i69;
             i76 = i69;
            } else {
             i69 = HEAP32[i26 >> 2] | 0;
             i74 = HEAPU8[i69 + i29 | 0] | 0;
             i75 = i69;
             i76 = i69;
            }
            if (!(i74 << 16 >> 16 == 47 & i34 >>> 0 > i33 >>> 0)) {
             break;
            }
            if (i68) {
             i77 = HEAP16[i75 + (i33 << 1) >> 1] | 0;
            } else {
             i77 = HEAPU8[i76 + i33 | 0] | 0;
            }
            if (i77 << 16 >> 16 == 42) {
             i31 = 103;
             break L110;
            }
           }
          } while (0);
          if (i20) {
           break;
          }
         }
         i34 = i29 + 3 | 0;
         if (i34 >>> 0 >= (HEAP32[i32 >> 2] | 0) >>> 0) {
          i31 = 126;
          break;
         }
         i67 = HEAP32[i32 >> 2] | 0;
         if (i67 >>> 0 <= i29 >>> 0) {
          i31 = 126;
          break;
         }
         i68 = (HEAP32[i19 >> 2] & 32 | 0) == 0;
         if (i68) {
          i69 = HEAP32[i22 >> 2] | 0;
          i78 = HEAP16[i69 + (i29 << 1) >> 1] | 0;
          i79 = i69;
          i80 = i69;
         } else {
          i69 = HEAP32[i26 >> 2] | 0;
          i78 = HEAPU8[i69 + i29 | 0] | 0;
          i79 = i69;
          i80 = i69;
         }
         if (!(i78 << 16 >> 16 == 60 & i67 >>> 0 > i33 >>> 0)) {
          i31 = 125;
          break;
         }
         if (i68) {
          i81 = HEAP16[i79 + (i33 << 1) >> 1] | 0;
          i82 = i79;
         } else {
          i81 = HEAPU8[i80 + i33 | 0] | 0;
          i82 = i80;
         }
         if (i81 << 16 >> 16 != 33) {
          i31 = 125;
          break;
         }
         i69 = i29 + 2 | 0;
         if (i67 >>> 0 <= i69 >>> 0) {
          i31 = 125;
          break;
         }
         if (i68) {
          i83 = HEAP16[i82 + (i69 << 1) >> 1] | 0;
          i84 = i82;
         } else {
          i83 = HEAPU8[i80 + i69 | 0] | 0;
          i84 = i80;
         }
         if (!(i83 << 16 >> 16 == 45 & i67 >>> 0 > i34 >>> 0)) {
          i31 = 125;
          break;
         }
         if (i68) {
          i85 = HEAP16[i84 + (i34 << 1) >> 1] | 0;
         } else {
          i85 = HEAPU8[i80 + i34 | 0] | 0;
         }
         if (i85 << 16 >> 16 == 45) {
          i31 = 124;
          break L110;
         } else {
          i31 = 125;
         }
        } else {
         i31 = 125;
        }
       } while (0);
       if ((i31 | 0) == 125) {
        i31 = 0;
        if (!i20) {
         i31 = 126;
        }
       }
       do {
        if ((i31 | 0) == 126) {
         i31 = 0;
         if ((HEAP32[i32 >> 2] | 0) >>> 0 <= i29 >>> 0) {
          break;
         }
         if ((HEAP32[i19 >> 2] & 32 | 0) == 0) {
          i86 = HEAP16[(HEAP32[i22 >> 2] | 0) + (i29 << 1) >> 1] | 0;
         } else {
          i86 = HEAPU8[(HEAP32[i26 >> 2] | 0) + i29 | 0] | 0;
         }
         if (i86 << 16 >> 16 == 44) {
          i87 = i29;
          break L108;
         }
        }
       } while (0);
       do {
        if (!(i29 >>> 0 <= i21 >>> 0 | i20)) {
         if ((HEAP32[i32 >> 2] | 0) >>> 0 <= i29 >>> 0) {
          break;
         }
         if ((HEAP32[i19 >> 2] & 32 | 0) == 0) {
          i88 = HEAP16[(HEAP32[i22 >> 2] | 0) + (i29 << 1) >> 1] | 0;
         } else {
          i88 = HEAPU8[(HEAP32[i26 >> 2] | 0) + i29 | 0] | 0;
         }
         if ((i88 & 65535) >>> 0 >= 33 >>> 0) {
          break;
         }
         switch (i88 << 16 >> 16) {
         case 32:
         case 10:
         case 9:
         case 13:
         case 12:
          {
           i87 = i29;
           break L108;
           break;
          }
         default:
          {}
         }
        }
       } while (0);
       i34 = i29 + 1 | 0;
       if (i34 >>> 0 < i13 >>> 0) {
        i29 = i34;
       } else {
        i87 = i34;
        break L108;
       }
      }
      if ((i31 | 0) == 103) {
       i31 = 0;
       i87 = i29 + 2 | 0;
       break;
      } else if ((i31 | 0) == 124) {
       i31 = 0;
       i87 = i29 + 4 | 0;
       break;
      }
     } else {
      i87 = i14;
     }
    } while (0);
    __ZNK3WTF6String9substringEjj(i8, i5, i14, i87 - i14 | 0);
    __ZN7WebCoreL17fullyDecodeStringERKN3WTF6StringERKNS_12TextEncodingE(i7, HEAP32[i17 >> 2] | 0, i18);
    i26 = HEAP32[i16 >> 2] | 0;
    HEAP32[i16 >> 2] = 0;
    HEAP32[i11 >> 2] = i26;
    do {
     if (!i25) {
      i22 = i23 | 0;
      i19 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
      if ((i19 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i23);
       break;
      } else {
       HEAP32[i22 >> 2] = i19;
       break;
      }
     }
    } while (0);
    i25 = HEAP32[i16 >> 2] | 0;
    do {
     if ((i25 | 0) != 0) {
      i19 = i25 | 0;
      i22 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
      if ((i22 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i25);
       break;
      } else {
       HEAP32[i19 >> 2] = i22;
       break;
      }
     }
    } while (0);
    i25 = HEAP32[i17 >> 2] | 0;
    do {
     if ((i25 | 0) != 0) {
      i22 = i25 | 0;
      i19 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
      if ((i19 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i25);
       break;
      } else {
       HEAP32[i22 >> 2] = i19;
       break;
      }
     }
    } while (0);
    i25 = i87 + 1 | 0;
    if (i25 >>> 0 < i13 >>> 0) {
     i14 = i25;
     i23 = i26;
    } else {
     break;
    }
   }
  }
 } while (0);
 i13 = HEAP32[i9 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i13 | 0;
 i87 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i87 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i13);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i9 >> 2] = i87;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore10XSSAuditor16filterStartTokenERKNS_18FilterTokenRequestE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore10XSSAuditor34eraseDangerousAttributesIfInjectedERKNS_18FilterTokenRequestE(i1, i2) | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9scriptTagE >> 2] | 0) + 12 >> 2] | 0;
 i10 = HEAP32[i8 + 24 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   if ((i10 | 0) == 0) {
    i11 = 9;
   } else {
    i12 = i8;
    i13 = i10;
   }
  } else {
   i14 = i9 + 4 | 0;
   if ((i10 | 0) != (HEAP32[i14 >> 2] | 0)) {
    i12 = i8;
    i13 = i10;
    break;
   }
   i15 = HEAP32[i8 + 16 >> 2] | 0;
   if ((HEAP32[i9 + 16 >> 2] & 32 | 0) == 0) {
    i16 = HEAP32[i9 + 8 >> 2] | 0;
    i17 = i10;
   } else {
    i18 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i9) | 0;
    i16 = i18;
    i17 = HEAP32[i14 >> 2] | 0;
   }
   if ((_memcmp(i15 | 0, i16 | 0, i17 << 1 | 0) | 0) == 0) {
    i11 = 9;
    break;
   }
   i15 = HEAP32[i7 >> 2] | 0;
   i12 = i15;
   i13 = HEAP32[i15 + 24 >> 2] | 0;
  }
 } while (0);
 if ((i11 | 0) == 9) {
  i17 = i6 | (__ZN7WebCore10XSSAuditor17filterScriptTokenERKNS_18FilterTokenRequestE(i1, i2) | 0);
  i16 = i1 + 80 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
  i19 = i17;
  STACKTOP = i3;
  return i19 | 0;
 }
 i17 = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9objectTagE >> 2] | 0) + 12 >> 2] | 0;
 do {
  if ((i17 | 0) == 0) {
   if ((i13 | 0) == 0) {
    i11 = 18;
   } else {
    i20 = i12;
    i21 = i13;
   }
  } else {
   i16 = i17 + 4 | 0;
   if ((i13 | 0) != (HEAP32[i16 >> 2] | 0)) {
    i20 = i12;
    i21 = i13;
    break;
   }
   i9 = HEAP32[i12 + 16 >> 2] | 0;
   if ((HEAP32[i17 + 16 >> 2] & 32 | 0) == 0) {
    i22 = HEAP32[i17 + 8 >> 2] | 0;
    i23 = i13;
   } else {
    i10 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i17) | 0;
    i22 = i10;
    i23 = HEAP32[i16 >> 2] | 0;
   }
   if ((_memcmp(i9 | 0, i22 | 0, i23 << 1 | 0) | 0) == 0) {
    i11 = 18;
    break;
   }
   i9 = HEAP32[i7 >> 2] | 0;
   i20 = i9;
   i21 = HEAP32[i9 + 24 >> 2] | 0;
  }
 } while (0);
 if ((i11 | 0) == 18) {
  i19 = i6 | (__ZN7WebCore10XSSAuditor17filterObjectTokenERKNS_18FilterTokenRequestE(i1, i2) | 0);
  STACKTOP = i3;
  return i19 | 0;
 }
 i23 = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8paramTagE >> 2] | 0) + 12 >> 2] | 0;
 do {
  if ((i23 | 0) == 0) {
   if ((i21 | 0) == 0) {
    i11 = 27;
   } else {
    i24 = i20;
    i25 = i21;
   }
  } else {
   i22 = i23 + 4 | 0;
   if ((i21 | 0) != (HEAP32[i22 >> 2] | 0)) {
    i24 = i20;
    i25 = i21;
    break;
   }
   i17 = HEAP32[i20 + 16 >> 2] | 0;
   if ((HEAP32[i23 + 16 >> 2] & 32 | 0) == 0) {
    i26 = HEAP32[i23 + 8 >> 2] | 0;
    i27 = i21;
   } else {
    i13 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i23) | 0;
    i26 = i13;
    i27 = HEAP32[i22 >> 2] | 0;
   }
   if ((_memcmp(i17 | 0, i26 | 0, i27 << 1 | 0) | 0) == 0) {
    i11 = 27;
    break;
   }
   i17 = HEAP32[i7 >> 2] | 0;
   i24 = i17;
   i25 = HEAP32[i17 + 24 >> 2] | 0;
  }
 } while (0);
 if ((i11 | 0) == 27) {
  i19 = i6 | (__ZN7WebCore10XSSAuditor16filterParamTokenERKNS_18FilterTokenRequestE(i1, i2) | 0);
  STACKTOP = i3;
  return i19 | 0;
 }
 i27 = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8embedTagE >> 2] | 0) + 12 >> 2] | 0;
 do {
  if ((i27 | 0) == 0) {
   if ((i25 | 0) == 0) {
    i11 = 36;
   } else {
    i28 = i24;
    i29 = i25;
   }
  } else {
   i26 = i27 + 4 | 0;
   if ((i25 | 0) != (HEAP32[i26 >> 2] | 0)) {
    i28 = i24;
    i29 = i25;
    break;
   }
   i23 = HEAP32[i24 + 16 >> 2] | 0;
   if ((HEAP32[i27 + 16 >> 2] & 32 | 0) == 0) {
    i30 = HEAP32[i27 + 8 >> 2] | 0;
    i31 = i25;
   } else {
    i21 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i27) | 0;
    i30 = i21;
    i31 = HEAP32[i26 >> 2] | 0;
   }
   if ((_memcmp(i23 | 0, i30 | 0, i31 << 1 | 0) | 0) == 0) {
    i11 = 36;
    break;
   }
   i23 = HEAP32[i7 >> 2] | 0;
   i28 = i23;
   i29 = HEAP32[i23 + 24 >> 2] | 0;
  }
 } while (0);
 if ((i11 | 0) == 36) {
  i19 = i6 | (__ZN7WebCore10XSSAuditor16filterEmbedTokenERKNS_18FilterTokenRequestE(i1, i2) | 0);
  STACKTOP = i3;
  return i19 | 0;
 }
 i31 = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9appletTagE >> 2] | 0) + 12 >> 2] | 0;
 do {
  if ((i31 | 0) == 0) {
   if ((i29 | 0) == 0) {
    i11 = 45;
   } else {
    i32 = i28;
    i33 = i29;
   }
  } else {
   i30 = i31 + 4 | 0;
   if ((i29 | 0) != (HEAP32[i30 >> 2] | 0)) {
    i32 = i28;
    i33 = i29;
    break;
   }
   i27 = HEAP32[i28 + 16 >> 2] | 0;
   if ((HEAP32[i31 + 16 >> 2] & 32 | 0) == 0) {
    i34 = HEAP32[i31 + 8 >> 2] | 0;
    i35 = i29;
   } else {
    i25 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i31) | 0;
    i34 = i25;
    i35 = HEAP32[i30 >> 2] | 0;
   }
   if ((_memcmp(i27 | 0, i34 | 0, i35 << 1 | 0) | 0) == 0) {
    i11 = 45;
    break;
   }
   i27 = HEAP32[i7 >> 2] | 0;
   i32 = i27;
   i33 = HEAP32[i27 + 24 >> 2] | 0;
  }
 } while (0);
 if ((i11 | 0) == 45) {
  i19 = i6 | (__ZN7WebCore10XSSAuditor17filterAppletTokenERKNS_18FilterTokenRequestE(i1, i2) | 0);
  STACKTOP = i3;
  return i19 | 0;
 }
 i35 = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9iframeTagE >> 2] | 0) + 12 >> 2] | 0;
 do {
  if ((i35 | 0) == 0) {
   if ((i33 | 0) == 0) {
    i11 = 54;
   } else {
    i36 = i32;
    i37 = i33;
   }
  } else {
   i34 = i35 + 4 | 0;
   if ((i33 | 0) != (HEAP32[i34 >> 2] | 0)) {
    i36 = i32;
    i37 = i33;
    break;
   }
   i31 = HEAP32[i32 + 16 >> 2] | 0;
   if ((HEAP32[i35 + 16 >> 2] & 32 | 0) == 0) {
    i38 = HEAP32[i35 + 8 >> 2] | 0;
    i39 = i33;
   } else {
    i29 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i35) | 0;
    i38 = i29;
    i39 = HEAP32[i34 >> 2] | 0;
   }
   if ((_memcmp(i31 | 0, i38 | 0, i39 << 1 | 0) | 0) == 0) {
    i11 = 54;
    break;
   }
   i31 = HEAP32[i7 >> 2] | 0;
   i36 = i31;
   i37 = HEAP32[i31 + 24 >> 2] | 0;
  }
 } while (0);
 if ((i11 | 0) == 54) {
  i19 = i6 | (__ZN7WebCore10XSSAuditor17filterIframeTokenERKNS_18FilterTokenRequestE(i1, i2) | 0);
  STACKTOP = i3;
  return i19 | 0;
 }
 i39 = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7metaTagE >> 2] | 0) + 12 >> 2] | 0;
 do {
  if ((i39 | 0) == 0) {
   if ((i37 | 0) == 0) {
    i11 = 63;
   } else {
    i40 = i36;
    i41 = i37;
   }
  } else {
   i38 = i39 + 4 | 0;
   if ((i37 | 0) != (HEAP32[i38 >> 2] | 0)) {
    i40 = i36;
    i41 = i37;
    break;
   }
   i35 = HEAP32[i36 + 16 >> 2] | 0;
   if ((HEAP32[i39 + 16 >> 2] & 32 | 0) == 0) {
    i42 = HEAP32[i39 + 8 >> 2] | 0;
    i43 = i37;
   } else {
    i33 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i39) | 0;
    i42 = i33;
    i43 = HEAP32[i38 >> 2] | 0;
   }
   if ((_memcmp(i35 | 0, i42 | 0, i43 << 1 | 0) | 0) == 0) {
    i11 = 63;
    break;
   }
   i35 = HEAP32[i7 >> 2] | 0;
   i40 = i35;
   i41 = HEAP32[i35 + 24 >> 2] | 0;
  }
 } while (0);
 if ((i11 | 0) == 63) {
  i43 = i5 | 0;
  HEAP32[i43 >> 2] = 0;
  i42 = __ZN7WebCore10XSSAuditor24eraseAttributeIfInjectedERKNS_18FilterTokenRequestERKNS_13QualifiedNameERKN3WTF6StringENS0_13AttributeKindE(i1, i2, __ZN7WebCore9HTMLNames14http_equivAttrE, i5, 0) | 0;
  i5 = HEAP32[i43 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i43 = i5 | 0;
    i39 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
    if ((i39 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i5);
     break;
    } else {
     HEAP32[i43 >> 2] = i39;
     break;
    }
   }
  } while (0);
  i19 = i6 | i42;
  STACKTOP = i3;
  return i19 | 0;
 }
 i42 = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7baseTagE >> 2] | 0) + 12 >> 2] | 0;
 do {
  if ((i42 | 0) == 0) {
   if ((i41 | 0) == 0) {
    i11 = 76;
   } else {
    i44 = i40;
    i45 = i41;
   }
  } else {
   i5 = i42 + 4 | 0;
   if ((i41 | 0) != (HEAP32[i5 >> 2] | 0)) {
    i44 = i40;
    i45 = i41;
    break;
   }
   i39 = HEAP32[i40 + 16 >> 2] | 0;
   if ((HEAP32[i42 + 16 >> 2] & 32 | 0) == 0) {
    i46 = HEAP32[i42 + 8 >> 2] | 0;
    i47 = i41;
   } else {
    i43 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i42) | 0;
    i46 = i43;
    i47 = HEAP32[i5 >> 2] | 0;
   }
   if ((_memcmp(i39 | 0, i46 | 0, i47 << 1 | 0) | 0) == 0) {
    i11 = 76;
    break;
   }
   i39 = HEAP32[i7 >> 2] | 0;
   i44 = i39;
   i45 = HEAP32[i39 + 24 >> 2] | 0;
  }
 } while (0);
 if ((i11 | 0) == 76) {
  i47 = i4 | 0;
  HEAP32[i47 >> 2] = 0;
  i46 = __ZN7WebCore10XSSAuditor24eraseAttributeIfInjectedERKNS_18FilterTokenRequestERKNS_13QualifiedNameERKN3WTF6StringENS0_13AttributeKindE(i1, i2, __ZN7WebCore9HTMLNames8hrefAttrE, i4, 0) | 0;
  i4 = HEAP32[i47 >> 2] | 0;
  do {
   if ((i4 | 0) != 0) {
    i47 = i4 | 0;
    i42 = (HEAP32[i47 >> 2] | 0) - 2 | 0;
    if ((i42 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i4);
     break;
    } else {
     HEAP32[i47 >> 2] = i42;
     break;
    }
   }
  } while (0);
  i19 = i6 | i46;
  STACKTOP = i3;
  return i19 | 0;
 }
 i46 = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7formTagE >> 2] | 0) + 12 >> 2] | 0;
 do {
  if ((i46 | 0) == 0) {
   if ((i45 | 0) == 0) {
    i11 = 89;
   } else {
    i48 = i44;
    i49 = i45;
   }
  } else {
   i4 = i46 + 4 | 0;
   if ((i45 | 0) != (HEAP32[i4 >> 2] | 0)) {
    i48 = i44;
    i49 = i45;
    break;
   }
   i42 = HEAP32[i44 + 16 >> 2] | 0;
   if ((HEAP32[i46 + 16 >> 2] & 32 | 0) == 0) {
    i50 = HEAP32[i46 + 8 >> 2] | 0;
    i51 = i45;
   } else {
    i47 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i46) | 0;
    i50 = i47;
    i51 = HEAP32[i4 >> 2] | 0;
   }
   if ((_memcmp(i42 | 0, i50 | 0, i51 << 1 | 0) | 0) == 0) {
    i11 = 89;
    break;
   }
   i42 = HEAP32[i7 >> 2] | 0;
   i48 = i42;
   i49 = HEAP32[i42 + 24 >> 2] | 0;
  }
 } while (0);
 if ((i11 | 0) == 89) {
  i51 = __ZN7WebCore8blankURLEv() | 0;
  i19 = i6 | (__ZN7WebCore10XSSAuditor24eraseAttributeIfInjectedERKNS_18FilterTokenRequestERKNS_13QualifiedNameERKN3WTF6StringENS0_13AttributeKindE(i1, i2, __ZN7WebCore9HTMLNames10actionAttrE, i51, 0) | 0);
  STACKTOP = i3;
  return i19 | 0;
 }
 i51 = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8inputTagE >> 2] | 0) + 12 >> 2] | 0;
 do {
  if ((i51 | 0) == 0) {
   if ((i49 | 0) == 0) {
    i11 = 98;
   } else {
    i52 = i48;
    i53 = i49;
   }
  } else {
   i50 = i51 + 4 | 0;
   if ((i49 | 0) != (HEAP32[i50 >> 2] | 0)) {
    i52 = i48;
    i53 = i49;
    break;
   }
   i46 = HEAP32[i48 + 16 >> 2] | 0;
   if ((HEAP32[i51 + 16 >> 2] & 32 | 0) == 0) {
    i54 = HEAP32[i51 + 8 >> 2] | 0;
    i55 = i49;
   } else {
    i45 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i51) | 0;
    i54 = i45;
    i55 = HEAP32[i50 >> 2] | 0;
   }
   if ((_memcmp(i46 | 0, i54 | 0, i55 << 1 | 0) | 0) == 0) {
    i11 = 98;
    break;
   }
   i46 = HEAP32[i7 >> 2] | 0;
   i52 = i46;
   i53 = HEAP32[i46 + 24 >> 2] | 0;
  }
 } while (0);
 if ((i11 | 0) == 98) {
  i11 = __ZN7WebCore8blankURLEv() | 0;
  i19 = i6 | (__ZN7WebCore10XSSAuditor24eraseAttributeIfInjectedERKNS_18FilterTokenRequestERKNS_13QualifiedNameERKN3WTF6StringENS0_13AttributeKindE(i1, i2, __ZN7WebCore9HTMLNames14formactionAttrE, i11, 1) | 0);
  STACKTOP = i3;
  return i19 | 0;
 }
 i11 = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9buttonTagE >> 2] | 0) + 12 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   if ((i53 | 0) == 0) {
    break;
   } else {
    i19 = i6;
   }
   STACKTOP = i3;
   return i19 | 0;
  } else {
   i7 = i11 + 4 | 0;
   if ((i53 | 0) != (HEAP32[i7 >> 2] | 0)) {
    i19 = i6;
    STACKTOP = i3;
    return i19 | 0;
   }
   i55 = HEAP32[i52 + 16 >> 2] | 0;
   if ((HEAP32[i11 + 16 >> 2] & 32 | 0) == 0) {
    i56 = HEAP32[i11 + 8 >> 2] | 0;
    i57 = i53;
   } else {
    i54 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i11) | 0;
    i56 = i54;
    i57 = HEAP32[i7 >> 2] | 0;
   }
   if ((_memcmp(i55 | 0, i56 | 0, i57 << 1 | 0) | 0) == 0) {
    break;
   } else {
    i19 = i6;
   }
   STACKTOP = i3;
   return i19 | 0;
  }
 } while (0);
 i57 = __ZN7WebCore8blankURLEv() | 0;
 i19 = i6 | (__ZN7WebCore10XSSAuditor24eraseAttributeIfInjectedERKNS_18FilterTokenRequestERKNS_13QualifiedNameERKN3WTF6StringENS0_13AttributeKindE(i1, i2, __ZN7WebCore9HTMLNames14formactionAttrE, i57, 1) | 0);
 STACKTOP = i3;
 return i19 | 0;
}
function __ZN7WebCore10XSSAuditor34eraseDangerousAttributesIfInjectedERKNS_18FilterTokenRequestE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 40 | 0;
 i9 = i3 + 48 | 0;
 if (!(HEAP8[H_BASE + 288 | 0] | 0)) {
  i10 = __Znwj(4) | 0;
  HEAP32[i6 >> 2] = H_BASE + 24;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i10, i6);
  HEAP32[H_BASE + 304 >> 2] = i10;
  HEAP8[H_BASE + 288 | 0] = 1;
 }
 i10 = i2 | 0;
 i6 = HEAP32[i10 >> 2] | 0;
 if ((HEAP32[i6 + 552 >> 2] | 0) == 0) {
  i11 = 0;
  STACKTOP = i3;
  return i11 | 0;
 }
 i12 = i5 | 0;
 i13 = i8 | 0;
 i14 = i4 | 0;
 i15 = i4 + 4 | 0;
 i16 = i4 + 8 | 0;
 i17 = i9 | 0;
 i18 = i7 | 0;
 i19 = 0;
 i20 = 0;
 i21 = i6;
 L7 : while (1) {
  i6 = HEAP32[i21 + 544 >> 2] | 0;
  i22 = i6 + (i19 * 168 & -1) | 0;
  i23 = i6 + (i19 * 168 & -1) + 24 | 0;
  do {
   if ((HEAP32[i23 >> 2] | 0) >>> 0 < 5 >>> 0) {
    i24 = 0;
   } else {
    i25 = HEAP32[i6 + (i19 * 168 & -1) + 16 >> 2] | 0;
    if ((HEAP16[i25 >> 1] | 0) != 111) {
     i24 = 0;
     break;
    }
    i24 = (HEAP16[i25 + 2 >> 1] | 0) == 110;
   }
  } while (0);
  i25 = HEAP32[i6 + (i19 * 168 & -1) + 100 >> 2] | 0;
  if ((i25 | 0) == 0) {
   i26 = __ZN3WTF10StringImpl5emptyEv() | 0;
   HEAP32[i12 >> 2] = i26;
   i27 = i26 | 0;
   HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 2;
  } else {
   __ZN3WTF10StringImpl6createEPKtj(i5, HEAP32[i6 + (i19 * 168 & -1) + 92 >> 2] | 0, i25);
  }
  HEAP32[i13 >> 2] = HEAP32[i12 >> 2];
  __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i7, i8);
  i25 = HEAP32[i13 >> 2] | 0;
  do {
   if ((i25 | 0) != 0) {
    i27 = i25 | 0;
    i26 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
    if ((i26 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i25);
     break;
    } else {
     HEAP32[i27 >> 2] = i26;
     break;
    }
   }
  } while (0);
  if (i24) {
   i28 = 17;
  } else {
   if (__ZN7WebCore20protocolIsJavaScriptERKN3WTF6StringE(i7) | 0) {
    i29 = 1;
    i28 = 39;
   } else {
    i28 = 17;
   }
  }
  if ((i28 | 0) == 17) {
   i28 = 0;
   i25 = HEAP32[(HEAP32[__ZN7WebCore8SVGNames10valuesAttrE >> 2] | 0) + 12 >> 2] | 0;
   i26 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i25 | 0) == 0) {
     if ((i26 | 0) == 0) {
      i28 = 24;
     } else {
      i30 = 0;
     }
    } else {
     i27 = i25 + 4 | 0;
     if ((i26 | 0) != (HEAP32[i27 >> 2] | 0)) {
      i30 = 0;
      break;
     }
     i31 = HEAP32[i6 + (i19 * 168 & -1) + 16 >> 2] | 0;
     if ((HEAP32[i25 + 16 >> 2] & 32 | 0) == 0) {
      i32 = HEAP32[i25 + 8 >> 2] | 0;
      i33 = i26;
     } else {
      i34 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i25) | 0;
      i32 = i34;
      i33 = HEAP32[i27 >> 2] | 0;
     }
     if ((_memcmp(i31 | 0, i32 | 0, i33 << 1 | 0) | 0) == 0) {
      i28 = 24;
     } else {
      i30 = 0;
     }
    }
   } while (0);
   do {
    if ((i28 | 0) == 24) {
     i28 = 0;
     HEAP32[i14 >> 2] = 0;
     HEAP32[i15 >> 2] = 0;
     HEAP32[i16 >> 2] = 0;
     __ZNK3WTF6String5splitEtbRNS_6VectorIS0_Lj0ENS_15CrashOnOverflowEEE(i7, 59, 0, i4);
     i25 = 0;
     while (1) {
      i26 = HEAP32[i16 >> 2] | 0;
      if (i25 >>> 0 >= i26 >>> 0) {
       i35 = 0;
       i36 = i26;
       break;
      }
      if (__ZN7WebCore20protocolIsJavaScriptERKN3WTF6StringE((HEAP32[i14 >> 2] | 0) + (i25 << 2) | 0) | 0) {
       i28 = 27;
       break;
      } else {
       i25 = i25 + 1 | 0;
      }
     }
     if ((i28 | 0) == 27) {
      i28 = 0;
      i35 = 1;
      i36 = HEAP32[i16 >> 2] | 0;
     }
     if ((i36 | 0) != 0) {
      i25 = HEAP32[i14 >> 2] | 0;
      i26 = i25 + (i36 << 2) | 0;
      i6 = i25;
      while (1) {
       i25 = HEAP32[i6 >> 2] | 0;
       do {
        if ((i25 | 0) != 0) {
         i23 = i25 | 0;
         i31 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
         if ((i31 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i25);
          break;
         } else {
          HEAP32[i23 >> 2] = i31;
          break;
         }
        }
       } while (0);
       i6 = i6 + 4 | 0;
       if ((i6 | 0) == (i26 | 0)) {
        break;
       }
      }
      HEAP32[i16 >> 2] = 0;
     }
     i26 = HEAP32[i14 >> 2] | 0;
     if ((i26 | 0) == 0) {
      i30 = i35;
      break;
     }
     HEAP32[i14 >> 2] = 0;
     HEAP32[i15 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i26);
     i30 = i35;
    }
   } while (0);
   if (i24 | i30) {
    i29 = i30;
    i28 = 39;
   } else {
    i37 = i20;
   }
  }
  do {
   if ((i28 | 0) == 39) {
    i28 = 0;
    __ZN7WebCore10XSSAuditor26decodedSnippetForAttributeERKNS_18FilterTokenRequestERKNS_9HTMLToken9AttributeENS0_13AttributeKindE(i9, i1, i2, i22, 2);
    i26 = __ZN7WebCore10XSSAuditor20isContainedInRequestERKN3WTF6StringE(i1, i9) | 0;
    i6 = HEAP32[i17 >> 2] | 0;
    do {
     if ((i6 | 0) != 0) {
      i25 = i6 | 0;
      i31 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
      if ((i31 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i6);
       break;
      } else {
       HEAP32[i25 >> 2] = i31;
       break;
      }
     }
    } while (0);
    if (!i26) {
     i37 = i20;
     break;
    }
    i6 = HEAP32[i10 >> 2] | 0;
    if ((HEAP32[i6 + 552 >> 2] | 0) >>> 0 <= i19 >>> 0) {
     i28 = 45;
     break L7;
    }
    i31 = HEAP32[i6 + 544 >> 2] | 0;
    i6 = i31 + (i19 * 168 & -1) + 96 | 0;
    do {
     if ((HEAP32[i6 >> 2] | 0) != 0) {
      i25 = i31 + (i19 * 168 & -1) + 100 | 0;
      if ((HEAP32[i25 >> 2] | 0) != 0) {
       HEAP32[i25 >> 2] = 0;
      }
      i25 = i31 + (i19 * 168 & -1) + 92 | 0;
      i23 = HEAP32[i25 >> 2] | 0;
      i27 = i31 + (i19 * 168 & -1) + 104 | 0;
      if ((i27 | 0) == (i23 | 0) | (i23 | 0) == 0) {
       i38 = i23;
      } else {
       HEAP32[i25 >> 2] = 0;
       HEAP32[i6 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i23);
       i38 = HEAP32[i25 >> 2] | 0;
      }
      if ((i38 | 0) != 0) {
       break;
      }
      HEAP32[i25 >> 2] = i27;
      HEAP32[i6 >> 2] = 32;
     }
    } while (0);
    if (!i29) {
     i37 = 1;
     break;
    }
    i6 = HEAP32[i10 >> 2] | 0;
    if ((HEAP32[i6 + 552 >> 2] | 0) >>> 0 <= i19 >>> 0) {
     i28 = 55;
     break L7;
    }
    i31 = HEAP32[i6 + 544 >> 2] | 0;
    i6 = i31 + (i19 * 168 & -1) + 92 | 0;
    i26 = HEAP32[H_BASE + 304 >> 2] | 0;
    i27 = HEAP32[i26 >> 2] | 0;
    do {
     if ((i27 | 0) == 0) {
      i39 = 0;
      i40 = 0;
     } else {
      if ((HEAP32[i27 + 16 >> 2] & 32 | 0) == 0) {
       i41 = HEAP32[i27 + 8 >> 2] | 0;
       i42 = i27;
      } else {
       i25 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i27) | 0;
       i41 = i25;
       i42 = HEAP32[i26 >> 2] | 0;
      }
      if ((i42 | 0) == 0) {
       i39 = 0;
       i40 = i41;
       break;
      }
      i39 = HEAP32[i42 + 4 >> 2] | 0;
      i40 = i41;
     }
    } while (0);
    i26 = i31 + (i19 * 168 & -1) + 100 | 0;
    i27 = HEAP32[i26 >> 2] | 0;
    i25 = i27 + i39 | 0;
    i23 = HEAP32[i31 + (i19 * 168 & -1) + 96 >> 2] | 0;
    if (i25 >>> 0 > i23 >>> 0) {
     i34 = i23 + 1 + (i23 >>> 2) | 0;
     i23 = i34 >>> 0 > 16 >>> 0 ? i34 : 16;
     __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEE15reserveCapacityEj(i6, i23 >>> 0 > i25 >>> 0 ? i23 : i25);
     i43 = HEAP32[i26 >> 2] | 0;
    } else {
     i43 = i27;
    }
    if (i25 >>> 0 < i43 >>> 0) {
     i28 = 65;
     break L7;
    }
    i27 = HEAP32[i6 >> 2] | 0;
    if ((i39 | 0) != 0) {
     i23 = 0;
     while (1) {
      HEAP16[i27 + (i23 + i43 << 1) >> 1] = HEAP16[i40 + (i23 << 1) >> 1] | 0;
      i23 = i23 + 1 | 0;
      if (i23 >>> 0 >= i39 >>> 0) {
       break;
      }
     }
    }
    HEAP32[i26 >> 2] = i25;
    i37 = 1;
   }
  } while (0);
  i22 = HEAP32[i18 >> 2] | 0;
  do {
   if ((i22 | 0) != 0) {
    i23 = i22 | 0;
    i27 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
    if ((i27 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i22);
     break;
    } else {
     HEAP32[i23 >> 2] = i27;
     break;
    }
   }
  } while (0);
  i22 = i19 + 1 | 0;
  i27 = HEAP32[i10 >> 2] | 0;
  if (i22 >>> 0 < (HEAP32[i27 + 552 >> 2] | 0) >>> 0) {
   i19 = i22;
   i20 = i37;
   i21 = i27;
  } else {
   i11 = i37;
   i28 = 76;
   break;
  }
 }
 if ((i28 | 0) == 76) {
  STACKTOP = i3;
  return i11 | 0;
 } else if ((i28 | 0) == 45) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i28 | 0) == 55) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i28 | 0) == 65) {
  _WTFCrash();
  return 0;
 }
 return 0;
}
function __ZN7WebCore10XSSAuditor24eraseAttributeIfInjectedERKNS_18FilterTokenRequestERKNS_13QualifiedNameERKN3WTF6StringENS0_13AttributeKindE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 HEAP32[i10 >> 2] = 0;
 i14 = i2 | 0;
 if (!(__ZN7WebCoreL21findAttributeWithNameERKNS_9HTMLTokenERKNS_13QualifiedNameERj(HEAP32[i14 >> 2] | 0, HEAP32[i3 >> 2] | 0, i10) | 0)) {
  i15 = 0;
  STACKTOP = i6;
  return i15 | 0;
 }
 i16 = HEAP32[i14 >> 2] | 0;
 i17 = HEAP32[i10 >> 2] | 0;
 if ((HEAP32[i16 + 552 >> 2] | 0) >>> 0 <= i17 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i10 = HEAP32[i16 + 544 >> 2] | 0;
 __ZN7WebCore10XSSAuditor26decodedSnippetForAttributeERKNS_18FilterTokenRequestERKNS_9HTMLToken9AttributeENS0_13AttributeKindE(i11, i1, i2, i10 + (i17 * 168 & -1) | 0, i5);
 i5 = __ZN7WebCore10XSSAuditor20isContainedInRequestERKN3WTF6StringE(i1, i11) | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i11 = i2 | 0;
   i16 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i11 >> 2] = i16;
    break;
   }
  }
 } while (0);
 if (!i5) {
  i15 = 0;
  STACKTOP = i6;
  return i15 | 0;
 }
 do {
  if (__ZN7WebCore15threadSafeMatchERKNS_13QualifiedNameES2_(i3, __ZN7WebCore9HTMLNames7srcAttrE) | 0) {
   i5 = HEAP32[i10 + (i17 * 168 & -1) + 100 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i2 = __ZN3WTF10StringImpl5emptyEv() | 0;
    i16 = i9 | 0;
    HEAP32[i16 >> 2] = i2;
    i11 = i2 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
    i18 = i16;
   } else {
    __ZN3WTF10StringImpl6createEPKtj(i9, HEAP32[i10 + (i17 * 168 & -1) + 92 >> 2] | 0, i5);
    i18 = i9 | 0;
   }
   i5 = i12 | 0;
   HEAP32[i5 >> 2] = HEAP32[i18 >> 2];
   i16 = __ZN7WebCore10XSSAuditor20isLikelySafeResourceERKN3WTF6StringE(i1, i12) | 0;
   i11 = HEAP32[i5 >> 2] | 0;
   if ((i11 | 0) == 0) {
    if (i16) {
     i15 = 0;
    } else {
     break;
    }
    STACKTOP = i6;
    return i15 | 0;
   }
   i5 = i11 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    if (i16) {
     i15 = 0;
    } else {
     break;
    }
    STACKTOP = i6;
    return i15 | 0;
   } else {
    HEAP32[i5 >> 2] = i2;
    if (i16) {
     i15 = 0;
    } else {
     break;
    }
    STACKTOP = i6;
    return i15 | 0;
   }
  }
 } while (0);
 do {
  if (__ZN7WebCore15threadSafeMatchERKNS_13QualifiedNameES2_(i3, __ZN7WebCore9HTMLNames14http_equivAttrE) | 0) {
   i12 = HEAP32[i10 + (i17 * 168 & -1) + 100 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i1 = __ZN3WTF10StringImpl5emptyEv() | 0;
    i18 = i8 | 0;
    HEAP32[i18 >> 2] = i1;
    i9 = i1 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
    i19 = i18;
   } else {
    __ZN3WTF10StringImpl6createEPKtj(i8, HEAP32[i10 + (i17 * 168 & -1) + 92 >> 2] | 0, i12);
    i19 = i8 | 0;
   }
   i12 = i13 | 0;
   HEAP32[i12 >> 2] = HEAP32[i19 >> 2];
   __ZNK3WTF6String15stripWhiteSpaceEv(i7, i13);
   i18 = i7 | 0;
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i18 >> 2] | 0, H_BASE + 208 | 0) | 0) {
    i20 = 0;
   } else {
    i20 = (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i18 >> 2] | 0, H_BASE + 192 | 0) | 0) ^ 1;
   }
   i9 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i18 = i9 | 0;
     i1 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i1 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i18 >> 2] = i1;
      break;
     }
    }
   } while (0);
   i9 = HEAP32[i12 >> 2] | 0;
   if ((i9 | 0) == 0) {
    if (i20) {
     i15 = 0;
    } else {
     break;
    }
    STACKTOP = i6;
    return i15 | 0;
   }
   i1 = i9 | 0;
   i18 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    if (i20) {
     i15 = 0;
    } else {
     break;
    }
    STACKTOP = i6;
    return i15 | 0;
   } else {
    HEAP32[i1 >> 2] = i18;
    if (i20) {
     i15 = 0;
    } else {
     break;
    }
    STACKTOP = i6;
    return i15 | 0;
   }
  }
 } while (0);
 i20 = HEAP32[i14 >> 2] | 0;
 if ((HEAP32[i20 + 552 >> 2] | 0) >>> 0 <= i17 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i7 = HEAP32[i20 + 544 >> 2] | 0;
 i20 = i7 + (i17 * 168 & -1) + 96 | 0;
 do {
  if ((HEAP32[i20 >> 2] | 0) != 0) {
   i13 = i7 + (i17 * 168 & -1) + 100 | 0;
   if ((HEAP32[i13 >> 2] | 0) != 0) {
    HEAP32[i13 >> 2] = 0;
   }
   i13 = i7 + (i17 * 168 & -1) + 92 | 0;
   i19 = HEAP32[i13 >> 2] | 0;
   i8 = i7 + (i17 * 168 & -1) + 104 | 0;
   if ((i8 | 0) == (i19 | 0) | (i19 | 0) == 0) {
    i21 = i19;
   } else {
    HEAP32[i13 >> 2] = 0;
    HEAP32[i20 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i19);
    i21 = HEAP32[i13 >> 2] | 0;
   }
   if ((i21 | 0) != 0) {
    break;
   }
   HEAP32[i13 >> 2] = i8;
   HEAP32[i20 >> 2] = 32;
  }
 } while (0);
 i20 = i4 | 0;
 i4 = HEAP32[i20 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i15 = 1;
  STACKTOP = i6;
  return i15 | 0;
 }
 if ((HEAP32[i4 + 4 >> 2] | 0) == 0) {
  i15 = 1;
  STACKTOP = i6;
  return i15 | 0;
 }
 i21 = HEAP32[i14 >> 2] | 0;
 if ((HEAP32[i21 + 552 >> 2] | 0) >>> 0 <= i17 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i14 = HEAP32[i21 + 544 >> 2] | 0;
 i21 = i14 + (i17 * 168 & -1) + 92 | 0;
 if ((HEAP32[i4 + 16 >> 2] & 32 | 0) == 0) {
  i22 = HEAP32[i4 + 8 >> 2] | 0;
  i23 = i4;
 } else {
  i7 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i4) | 0;
  i22 = i7;
  i23 = HEAP32[i20 >> 2] | 0;
 }
 if ((i23 | 0) == 0) {
  i24 = 0;
 } else {
  i24 = HEAP32[i23 + 4 >> 2] | 0;
 }
 i23 = i14 + (i17 * 168 & -1) + 100 | 0;
 i20 = HEAP32[i23 >> 2] | 0;
 i7 = i20 + i24 | 0;
 i4 = HEAP32[i14 + (i17 * 168 & -1) + 96 >> 2] | 0;
 if (i7 >>> 0 > i4 >>> 0) {
  i17 = i4 + 1 + (i4 >>> 2) | 0;
  i4 = i17 >>> 0 > 16 >>> 0 ? i17 : 16;
  __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEE15reserveCapacityEj(i21, i4 >>> 0 > i7 >>> 0 ? i4 : i7);
  i25 = HEAP32[i23 >> 2] | 0;
 } else {
  i25 = i20;
 }
 if (i7 >>> 0 < i25 >>> 0) {
  _WTFCrash();
  return 0;
 }
 i20 = HEAP32[i21 >> 2] | 0;
 if ((i24 | 0) != 0) {
  i21 = 0;
  while (1) {
   HEAP16[i20 + (i21 + i25 << 1) >> 1] = HEAP16[i22 + (i21 << 1) >> 1] | 0;
   i21 = i21 + 1 | 0;
   if (i21 >>> 0 >= i24 >>> 0) {
    break;
   }
  }
 }
 HEAP32[i23 >> 2] = i7;
 i15 = 1;
 STACKTOP = i6;
 return i15 | 0;
}
function __ZN7WebCore21decodeEscapeSequencesINS_17URLEscapeSequenceEEEN3WTF6StringERKS3_RKNS_12TextEncodingE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0;
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
 i9 = i2 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 L1 : do {
  if ((i10 | 0) != 0) {
   i11 = HEAP32[i10 + 4 >> 2] | 0;
   i12 = i6 | 0;
   i13 = 0;
   i14 = 0;
   i15 = i10;
   L3 : while (1) {
    i16 = i13;
    i17 = i15;
    while (1) {
     i18 = (HEAP32[i17 + 16 >> 2] & 32 | 0) == 0;
     if (i18) {
      i19 = HEAP32[i17 + 8 >> 2] | 0;
      i20 = HEAP32[i17 + 4 >> 2] | 0;
      i21 = i19;
      i22 = i16;
      while (1) {
       if (i22 >>> 0 >= i20 >>> 0) {
        i23 = i20;
        i24 = i19;
        i25 = i21;
        break L3;
       }
       if ((HEAP16[i19 + (i22 << 1) >> 1] | 0) == 37) {
        i26 = i22;
        i27 = i20;
        i28 = i19;
        i29 = i21;
        break;
       } else {
        i22 = i22 + 1 | 0;
       }
      }
     } else {
      i22 = HEAP32[i17 + 8 >> 2] | 0;
      i21 = HEAP32[i17 + 4 >> 2] | 0;
      i19 = i22;
      i20 = i16;
      while (1) {
       if (i20 >>> 0 >= i21 >>> 0) {
        i23 = i21;
        i24 = i19;
        i25 = i22;
        break L3;
       }
       if ((HEAP8[i22 + i20 | 0] | 0) == 37) {
        i26 = i20;
        i27 = i21;
        i28 = i19;
        i29 = i22;
        break;
       } else {
        i20 = i20 + 1 | 0;
       }
      }
     }
     if ((i26 | 0) == -1) {
      i23 = i27;
      i24 = i28;
      i25 = i29;
      break L3;
     }
     i30 = __ZN7WebCore17URLEscapeSequence12findEndOfRunERKN3WTF6StringEjj(i2, i26, i11) | 0;
     if ((i30 | 0) == (i26 | 0)) {
      i31 = i26 + 1 | 0;
      i32 = i17;
     } else {
      i20 = (i17 | 0) == 0;
      if (i20 | i18) {
       i33 = i20 ? 0 : i28;
      } else {
       i33 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i17) | 0;
      }
      __ZN7WebCore17URLEscapeSequence9decodeRunEPKtjRKNS_12TextEncodingE(i6, i33 + (i26 << 1) | 0, i30 - i26 | 0, i3);
      i34 = HEAP32[i12 >> 2] | 0;
      if ((i34 | 0) != 0) {
       break;
      }
      i31 = i30;
      i32 = HEAP32[i9 >> 2] | 0;
     }
     if ((i32 | 0) == 0) {
      break L1;
     } else {
      i16 = i31;
      i17 = i32;
     }
    }
    if ((HEAP32[i34 + 4 >> 2] | 0) == 0) {
     i35 = i34;
     i36 = i14;
     i37 = 27;
    } else {
     i16 = i26 - i14 | 0;
     i20 = HEAP32[i9 >> 2] | 0;
     do {
      if ((i20 | 0) != 0) {
       i22 = HEAP32[i20 + 4 >> 2] | 0;
       if ((i22 | 0) == 0 | i26 >>> 0 > i22 >>> 0) {
        break;
       }
       if ((HEAP32[i20 + 16 >> 2] & 32 | 0) == 0) {
        __ZN3WTF13StringBuilder6appendEPKtj(i5, (HEAP32[i20 + 8 >> 2] | 0) + (i14 << 1) | 0, i16);
        break;
       } else {
        __ZN3WTF13StringBuilder6appendEPKhj(i5, (HEAP32[i20 + 8 >> 2] | 0) + i14 | 0, i16);
        break;
       }
      }
     } while (0);
     __ZN3WTF13StringBuilder6appendERKNS_6StringE(i5, i6);
     i16 = HEAP32[i12 >> 2] | 0;
     if ((i16 | 0) == 0) {
      i38 = i30;
     } else {
      i35 = i16;
      i36 = i30;
      i37 = 27;
     }
    }
    do {
     if ((i37 | 0) == 27) {
      i37 = 0;
      i16 = i35 | 0;
      i20 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
      if ((i20 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i35);
       i38 = i36;
       break;
      } else {
       HEAP32[i16 >> 2] = i20;
       i38 = i36;
       break;
      }
     }
    } while (0);
    i20 = HEAP32[i9 >> 2] | 0;
    if ((i20 | 0) == 0) {
     break L1;
    } else {
     i13 = i30;
     i14 = i38;
     i15 = i20;
    }
   }
   i15 = i11 - i14 | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   if ((i23 | 0) == 0 | i11 >>> 0 > i23 >>> 0) {
    break;
   }
   if (i18) {
    __ZN3WTF13StringBuilder6appendEPKtj(i5, i24 + (i14 << 1) | 0, i15);
    break;
   } else {
    __ZN3WTF13StringBuilder6appendEPKhj(i5, i25 + i14 | 0, i15);
    break;
   }
  }
 } while (0);
 __ZN3WTF13StringBuilder11shrinkToFitEv(i5);
 i25 = HEAP32[i7 >> 2] | 0;
 if ((i25 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i5);
  i5 = HEAP32[i7 >> 2] | 0;
  HEAP32[i1 >> 2] = i5;
  if ((i5 | 0) != 0) {
   i39 = i5;
   i37 = 38;
  }
 } else {
  HEAP32[i1 >> 2] = i25;
  i39 = i25;
  i37 = 38;
 }
 if ((i37 | 0) == 38) {
  i37 = i39 | 0;
  HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 2;
 }
 i37 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i37 | 0) != 0) {
   i8 = i37 | 0;
   i39 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i39 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i37);
    break;
   } else {
    HEAP32[i8 >> 2] = i39;
    break;
   }
  }
 } while (0);
 i37 = HEAP32[i7 >> 2] | 0;
 if ((i37 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i37 | 0;
 i39 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i39 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i37);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i7 >> 2] = i39;
  STACKTOP = i4;
  return;
 }
}
function __ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EES4_EES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i3 | 0) | 0;
 i8 = i2 + 16 | 0;
 i9 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
 i10 = i2 + 8 | 0;
 i11 = _strlen(HEAP32[i10 >> 2] | 0) | 0;
 i12 = i2 | 0;
 i13 = _strlen(HEAP32[i12 >> 2] | 0) | 0;
 i14 = i2 + 4 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 i16 = (i15 | 0) == 0;
 if (i16) {
  i17 = 0;
 } else {
  i17 = HEAP32[i15 + 4 >> 2] | 0;
 }
 i18 = i2 + 12 | 0;
 i19 = HEAP32[i18 >> 2] | 0;
 i20 = (i19 | 0) == 0;
 if (i20) {
  i21 = 0;
 } else {
  i21 = HEAP32[i19 + 4 >> 2] | 0;
 }
 i22 = i2 + 20 | 0;
 i23 = HEAP32[i22 >> 2] | 0;
 i24 = (i23 | 0) == 0;
 if (i24) {
  i25 = 0;
 } else {
  i25 = HEAP32[i23 + 4 >> 2] | 0;
 }
 i26 = _llvm_uadd_with_overflow_i32(i11 + i9 + i13 + i17 + i21 + i25 | 0, i7 | 0) | 0;
 i25 = i26;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i16) {
  i27 = 11;
 } else {
  if ((HEAP32[i15 + 16 >> 2] & 32 | 0) != 0) {
   i27 = 11;
  }
 }
 do {
  if ((i27 | 0) == 11) {
   if (!i20) {
    if ((HEAP32[i19 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   if (!i24) {
    if ((HEAP32[i23 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i25 | 0) == 0) {
     i15 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i15 | 0) == 0) {
      i27 = 28;
      break;
     }
     i16 = i15 | 0;
     HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
     i28 = i15;
     i29 = 0;
    } else {
     if (i25 >>> 0 > 4294967275 >>> 0) {
      i27 = 28;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i25 + 20 | 0);
     i15 = i6 | 0;
     i16 = HEAP32[i15 >> 2] | 0;
     HEAP32[i15 >> 2] = 0;
     if ((i16 | 0) == 0) {
      i27 = 28;
      break;
     }
     i15 = i16 + 20 | 0;
     HEAP32[i16 >> 2] = 2;
     HEAP32[i16 + 4 >> 2] = i25;
     HEAP32[i16 + 8 >> 2] = i15;
     HEAP32[i16 + 12 >> 2] = 0;
     HEAP32[i16 + 16 >> 2] = 32;
     i28 = i16;
     i29 = i15;
    }
   } while (0);
   if ((i27 | 0) == 28) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   __ZN3WTF12StringAppendINS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES3_E7writeToEPh(i2, i29);
   i15 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
   i16 = _strlen(HEAP32[i10 >> 2] | 0) | 0;
   i26 = _strlen(HEAP32[i12 >> 2] | 0) | 0;
   i21 = HEAP32[i14 >> 2] | 0;
   if ((i21 | 0) == 0) {
    i30 = 0;
   } else {
    i30 = HEAP32[i21 + 4 >> 2] | 0;
   }
   i21 = HEAP32[i18 >> 2] | 0;
   if ((i21 | 0) == 0) {
    i31 = 0;
   } else {
    i31 = HEAP32[i21 + 4 >> 2] | 0;
   }
   i21 = HEAP32[i22 >> 2] | 0;
   if ((i21 | 0) == 0) {
    i32 = 0;
   } else {
    i32 = HEAP32[i21 + 4 >> 2] | 0;
   }
   _memcpy(i29 + (i16 + i15 + i26 + i30 + i31 + i32) | 0, i3 | 0, i7) | 0;
   HEAP32[i1 >> 2] = i28;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i25 | 0) == 0) {
   i28 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i28 | 0) == 0) {
    i27 = 44;
    break;
   }
   i32 = i28 | 0;
   HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 2;
   i33 = i28;
   i34 = 0;
  } else {
   if (i25 >>> 0 > 2147483637 >>> 0) {
    i27 = 44;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i25 << 1) + 20 | 0);
   i28 = i5 | 0;
   i32 = HEAP32[i28 >> 2] | 0;
   HEAP32[i28 >> 2] = 0;
   if ((i32 | 0) == 0) {
    i27 = 44;
    break;
   }
   i28 = i32 + 20 | 0;
   HEAP32[i32 >> 2] = 2;
   HEAP32[i32 + 4 >> 2] = i25;
   HEAP32[i32 + 8 >> 2] = i28;
   HEAP32[i32 + 12 >> 2] = 0;
   HEAP32[i32 + 16 >> 2] = 0;
   i33 = i32;
   i34 = i28;
  }
 } while (0);
 if ((i27 | 0) == 44) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 __ZN3WTF12StringAppendINS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES3_E7writeToEPt(i2, i34);
 i2 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
 i8 = _strlen(HEAP32[i10 >> 2] | 0) | 0;
 i10 = _strlen(HEAP32[i12 >> 2] | 0) | 0;
 i12 = HEAP32[i14 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i35 = 0;
 } else {
  i35 = HEAP32[i12 + 4 >> 2] | 0;
 }
 i12 = HEAP32[i18 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i36 = 0;
 } else {
  i36 = HEAP32[i12 + 4 >> 2] | 0;
 }
 i12 = HEAP32[i22 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i37 = 0;
 } else {
  i37 = HEAP32[i12 + 4 >> 2] | 0;
 }
 i12 = i8 + i2 + i10 + i35 + i36 + i37 | 0;
 if ((i7 | 0) != 0) {
  i37 = 0;
  while (1) {
   HEAP16[i34 + (i12 + i37 << 1) >> 1] = HEAPU8[i3 + i37 | 0] | 0;
   i37 = i37 + 1 | 0;
   if (i37 >>> 0 >= i7 >>> 0) {
    break;
   }
  }
 }
 HEAP32[i1 >> 2] = i33;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore21decodeEscapeSequencesINS_26Unicode16BitEscapeSequenceEEEN3WTF6StringERKS3_RKNS_12TextEncodingE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 32 | 0;
 HEAP32[i5 >> 2] = 0;
 i7 = i5 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i5 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP8[i5 + 12 | 0] = 1;
 HEAP32[i5 + 16 >> 2] = 0;
 HEAP32[i5 + 20 >> 2] = 0;
 i9 = i2 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = 0;
 } else {
  i11 = HEAP32[i10 + 4 >> 2] | 0;
 }
 i10 = i4 | 0;
 i12 = i6 | 0;
 i13 = 0;
 i14 = 0;
 L4 : while (1) {
  i15 = i14;
  while (1) {
   __ZN3WTF6StringC1EPKc(i4, H_BASE + 96 | 0);
   i16 = HEAP32[i9 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = -1;
   } else {
    i17 = __ZN3WTF10StringImpl4findEPS0_j(i16, HEAP32[i10 >> 2] | 0, i15) | 0;
   }
   i16 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i18 = i16 | 0;
     i19 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break;
     } else {
      HEAP32[i18 >> 2] = i19;
      break;
     }
    }
   } while (0);
   if ((i17 | 0) == -1) {
    break L4;
   }
   i20 = __ZN7WebCore26Unicode16BitEscapeSequence12findEndOfRunERKN3WTF6StringEjj(i2, i17, i11) | 0;
   if ((i20 | 0) == (i17 | 0)) {
    i15 = i17 + 1 | 0;
    continue;
   }
   i16 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i16 | 0) == 0) {
     i21 = 0;
    } else {
     if ((HEAP32[i16 + 16 >> 2] & 32 | 0) == 0) {
      i21 = HEAP32[i16 + 8 >> 2] | 0;
      break;
     } else {
      i21 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i16) | 0;
      break;
     }
    }
   } while (0);
   __ZN7WebCore26Unicode16BitEscapeSequence9decodeRunEPKtjRKNS_12TextEncodingE(i6, i21 + (i17 << 1) | 0, i20 - i17 | 0, 0);
   i22 = HEAP32[i12 >> 2] | 0;
   if ((i22 | 0) == 0) {
    i15 = i20;
   } else {
    break;
   }
  }
  if ((HEAP32[i22 + 4 >> 2] | 0) == 0) {
   i23 = i22;
   i24 = i13;
  } else {
   i15 = i17 - i13 | 0;
   i16 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i19 = HEAP32[i16 + 4 >> 2] | 0;
     if ((i19 | 0) == 0 | i17 >>> 0 > i19 >>> 0) {
      break;
     }
     if ((HEAP32[i16 + 16 >> 2] & 32 | 0) == 0) {
      __ZN3WTF13StringBuilder6appendEPKtj(i5, (HEAP32[i16 + 8 >> 2] | 0) + (i13 << 1) | 0, i15);
      break;
     } else {
      __ZN3WTF13StringBuilder6appendEPKhj(i5, (HEAP32[i16 + 8 >> 2] | 0) + i13 | 0, i15);
      break;
     }
    }
   } while (0);
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i5, i6);
   i15 = HEAP32[i12 >> 2] | 0;
   if ((i15 | 0) == 0) {
    i13 = i20;
    i14 = i20;
    continue;
   } else {
    i23 = i15;
    i24 = i20;
   }
  }
  i15 = i23 | 0;
  i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
  if ((i16 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i23);
   i13 = i24;
   i14 = i20;
   continue;
  } else {
   HEAP32[i15 >> 2] = i16;
   i13 = i24;
   i14 = i20;
   continue;
  }
 }
 i20 = i11 - i13 | 0;
 i14 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i9 = HEAP32[i14 + 4 >> 2] | 0;
   if ((i9 | 0) == 0 | i11 >>> 0 > i9 >>> 0) {
    break;
   }
   if ((HEAP32[i14 + 16 >> 2] & 32 | 0) == 0) {
    __ZN3WTF13StringBuilder6appendEPKtj(i5, (HEAP32[i14 + 8 >> 2] | 0) + (i13 << 1) | 0, i20);
    break;
   } else {
    __ZN3WTF13StringBuilder6appendEPKhj(i5, (HEAP32[i14 + 8 >> 2] | 0) + i13 | 0, i20);
    break;
   }
  }
 } while (0);
 __ZN3WTF13StringBuilder11shrinkToFitEv(i5);
 i20 = HEAP32[i7 >> 2] | 0;
 if ((i20 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i5);
  i5 = HEAP32[i7 >> 2] | 0;
  HEAP32[i1 >> 2] = i5;
  if ((i5 | 0) != 0) {
   i25 = i5;
   i26 = 37;
  }
 } else {
  HEAP32[i1 >> 2] = i20;
  i25 = i20;
  i26 = 37;
 }
 if ((i26 | 0) == 37) {
  i26 = i25 | 0;
  HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
 }
 i26 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i26 | 0) != 0) {
   i8 = i26 | 0;
   i25 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i25 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i26);
    break;
   } else {
    HEAP32[i8 >> 2] = i25;
    break;
   }
  }
 } while (0);
 i26 = HEAP32[i7 >> 2] | 0;
 if ((i26 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i26 | 0;
 i25 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i25 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i26);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i7 >> 2] = i25;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore10XSSAuditor26decodedSnippetForAttributeERKNS_18FilterTokenRequestERKNS_9HTMLToken9AttributeENS0_13AttributeKindE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 i11 = HEAP32[i10 + 4 >> 2] | 0;
 i12 = (HEAP32[i4 >> 2] | 0) - i11 | 0;
 i13 = (HEAP32[i4 + 12 >> 2] | 0) - i11 | 0;
 __ZN7WebCore17HTMLSourceTracker14sourceForTokenERKNS_9HTMLTokenE(i8, HEAP32[i3 + 4 >> 2] | 0, i10);
 __ZNK3WTF6String9substringEjj(i7, i8, i12, i13 - i12 | 0);
 i12 = i7 | 0;
 __ZN7WebCoreL17fullyDecodeStringERKN3WTF6StringERKNS_12TextEncodingE(i1, HEAP32[i12 >> 2] | 0, i2 + 84 | 0);
 i2 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i12 = i2 | 0;
   i7 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i12 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i8 = i2 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i8 >> 2] = i7;
    break;
   }
  }
 } while (0);
 __ZN3WTF6String8truncateEj(i1, 100);
 if ((i5 | 0) == 1) {
  i2 = HEAP32[i1 >> 2] | 0;
  i7 = i2 + 4 | 0;
  if ((i2 | 0) == 0) {
   STACKTOP = i6;
   return;
  } else {
   i14 = 0;
   i15 = 0;
   i16 = 0;
  }
  L17 : while (1) {
   if (i15 >>> 0 >= (HEAP32[i7 >> 2] | 0) >>> 0) {
    i17 = 42;
    break;
   }
   do {
    if ((HEAP32[i7 >> 2] | 0) >>> 0 > i15 >>> 0) {
     i8 = i2 + 8 | 0;
     if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
      i18 = HEAP16[(HEAP32[i8 >> 2] | 0) + (i15 << 1) >> 1] | 0;
     } else {
      i18 = HEAPU8[(HEAP32[i8 >> 2] | 0) + i15 | 0] | 0;
     }
     if ((i18 << 16 >> 16 | 0) == 63 | (i18 << 16 >> 16 | 0) == 35) {
      break L17;
     } else if (!((i18 << 16 >> 16 | 0) == 47 | (i18 << 16 >> 16 | 0) == 92)) {
      if (i18 << 16 >> 16 != 60 | i16 ^ 1) {
       i19 = i18;
       i20 = i14;
       break;
      } else {
       break L17;
      }
     }
     if (i16) {
      break L17;
     }
     i8 = i14 + 1 | 0;
     if ((i8 | 0) > 2) {
      break L17;
     } else {
      i19 = i18;
      i20 = i8;
     }
    } else {
     i19 = 0;
     i20 = i14;
    }
   } while (0);
   i14 = i20;
   i15 = i15 + 1 | 0;
   i16 = i19 << 16 >> 16 == 44 | i16;
  }
  if ((i17 | 0) == 42) {
   STACKTOP = i6;
   return;
  }
  __ZN3WTF6String8truncateEj(i1, i15);
  STACKTOP = i6;
  return;
 } else if ((i5 | 0) == 2) {
  __ZN3WTF6StringC1EPKc(i9, H_BASE + 16 | 0);
  i5 = i1 | 0;
  i15 = HEAP32[i5 >> 2] | 0;
  i17 = i9 | 0;
  do {
   if ((i15 | 0) == 0) {
    i21 = 0;
    i22 = -1;
   } else {
    i9 = __ZN3WTF10StringImpl4findEPS0_(i15, HEAP32[i17 >> 2] | 0) | 0;
    if ((i9 | 0) == -1) {
     i21 = 0;
     i22 = -1;
     break;
    }
    i16 = HEAP32[i5 >> 2] | 0;
    if ((i16 | 0) == 0) {
     i21 = 0;
     i22 = -1;
     break;
    }
    i19 = __ZN3WTF10StringImpl4findEPFbtEj(i16, F_BASE_ii + 2 | 0, i9 + 1 | 0) | 0;
    if ((i19 | 0) == -1) {
     i21 = 0;
     i22 = -1;
     break;
    }
    i9 = HEAP32[i5 >> 2] | 0;
    if ((i9 | 0) == 0) {
     i23 = -1;
    } else {
     do {
      if ((HEAP32[i9 + 4 >> 2] | 0) >>> 0 > i19 >>> 0) {
       i16 = i9 + 8 | 0;
       if ((HEAP32[i9 + 16 >> 2] & 32 | 0) == 0) {
        i24 = HEAP16[(HEAP32[i16 >> 2] | 0) + (i19 << 1) >> 1] | 0;
        break;
       } else {
        i24 = HEAPU8[(HEAP32[i16 >> 2] | 0) + i19 | 0] | 0;
        break;
       }
      } else {
       i24 = 0;
      }
     } while (0);
     i23 = __ZN3WTF10StringImpl4findEPFbtEj(i9, F_BASE_ii + 8 | 0, ((i24 << 16 >> 16 == 34 | i24 << 16 >> 16 == 39) & 1) + i19 | 0) | 0;
    }
    i21 = (i23 | 0) != -1;
    i22 = i23;
   }
  } while (0);
  i23 = HEAP32[i17 >> 2] | 0;
  do {
   if ((i23 | 0) != 0) {
    i17 = i23 | 0;
    i24 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
    if ((i24 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i23);
     break;
    } else {
     HEAP32[i17 >> 2] = i24;
     break;
    }
   }
  } while (0);
  if (!i21) {
   STACKTOP = i6;
   return;
  }
  __ZN3WTF6String8truncateEj(i1, i22);
  STACKTOP = i6;
  return;
 } else {
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore26Unicode16BitEscapeSequence12findEndOfRunERKN3WTF6StringEjj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0;
 if ((i3 - i2 | 0) >>> 0 <= 5 >>> 0) {
  i4 = i2;
  return i4 | 0;
 }
 i5 = HEAP32[i1 >> 2] | 0;
 i1 = (i5 | 0) == 0;
 i6 = i5 + 4 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 8 | 0;
 i5 = i8;
 i9 = i8 | 0;
 i8 = i2;
 while (1) {
  if (i1) {
   i4 = i8;
   i10 = 40;
   break;
  }
  i2 = HEAP32[i6 >> 2] | 0;
  if (i2 >>> 0 <= i8 >>> 0) {
   i4 = i8;
   i10 = 46;
   break;
  }
  i11 = (HEAP32[i7 >> 2] & 32 | 0) == 0;
  if (i11) {
   i12 = HEAP32[i5 >> 2] | 0;
   i13 = HEAP16[i12 + (i8 << 1) >> 1] | 0;
   i14 = i12;
   i15 = i12;
  } else {
   i12 = HEAP32[i9 >> 2] | 0;
   i13 = HEAPU8[i12 + i8 | 0] | 0;
   i14 = i12;
   i15 = i12;
  }
  if (i13 << 16 >> 16 != 37) {
   i4 = i8;
   i10 = 44;
   break;
  }
  i12 = i8 + 1 | 0;
  if (i2 >>> 0 <= i12 >>> 0) {
   i4 = i8;
   i10 = 42;
   break;
  }
  if (i11) {
   i16 = HEAP16[i14 + (i12 << 1) >> 1] | 0;
   i17 = i14;
   i18 = i14;
  } else {
   i16 = HEAPU8[i15 + i12 | 0] | 0;
   i17 = i15;
   i18 = i15;
  }
  if (i16 << 16 >> 16 != 117) {
   i4 = i8;
   i10 = 47;
   break;
  }
  i12 = i8 + 2 | 0;
  if (i2 >>> 0 > i12 >>> 0) {
   if (i11) {
    i19 = HEAP16[i17 + (i12 << 1) >> 1] | 0;
    i20 = i17;
    i21 = i17;
   } else {
    i19 = HEAPU8[i18 + i12 | 0] | 0;
    i20 = i18;
    i21 = i18;
   }
   if ((i19 - 48 & 65535) >>> 0 < 10 >>> 0) {
    i22 = i20;
    i23 = i21;
   } else {
    i24 = i19;
    i25 = i20;
    i26 = i21;
    i10 = 19;
   }
  } else {
   i24 = 0;
   i25 = i17;
   i26 = i18;
   i10 = 19;
  }
  if ((i10 | 0) == 19) {
   i10 = 0;
   if (((i24 & 65535 | 32) - 97 | 0) >>> 0 < 6 >>> 0) {
    i22 = i25;
    i23 = i26;
   } else {
    i4 = i8;
    i10 = 48;
    break;
   }
  }
  i12 = i8 + 3 | 0;
  if (i2 >>> 0 > i12 >>> 0) {
   if (i11) {
    i27 = HEAP16[i22 + (i12 << 1) >> 1] | 0;
    i28 = i22;
    i29 = i22;
   } else {
    i27 = HEAPU8[i23 + i12 | 0] | 0;
    i28 = i23;
    i29 = i23;
   }
   if ((i27 - 48 & 65535) >>> 0 < 10 >>> 0) {
    i30 = i28;
    i31 = i29;
   } else {
    i32 = i27;
    i33 = i28;
    i34 = i29;
    i10 = 25;
   }
  } else {
   i32 = 0;
   i33 = i22;
   i34 = i23;
   i10 = 25;
  }
  if ((i10 | 0) == 25) {
   i10 = 0;
   if (((i32 & 65535 | 32) - 97 | 0) >>> 0 < 6 >>> 0) {
    i30 = i33;
    i31 = i34;
   } else {
    i4 = i8;
    i10 = 49;
    break;
   }
  }
  i12 = i8 + 4 | 0;
  if (i2 >>> 0 > i12 >>> 0) {
   if (i11) {
    i35 = HEAP16[i30 + (i12 << 1) >> 1] | 0;
   } else {
    i35 = HEAPU8[i31 + i12 | 0] | 0;
   }
   if ((i35 - 48 & 65535) >>> 0 >= 10 >>> 0) {
    i36 = i35;
    i10 = 31;
   }
  } else {
   i36 = 0;
   i10 = 31;
  }
  if ((i10 | 0) == 31) {
   i10 = 0;
   if (((i36 & 65535 | 32) - 97 | 0) >>> 0 >= 6 >>> 0) {
    i4 = i8;
    i10 = 43;
    break;
   }
  }
  i12 = i8 + 5 | 0;
  if (i2 >>> 0 > i12 >>> 0) {
   if (i11) {
    i37 = HEAP16[i17 + (i12 << 1) >> 1] | 0;
   } else {
    i37 = HEAPU8[i18 + i12 | 0] | 0;
   }
   if ((i37 - 48 & 65535) >>> 0 >= 10 >>> 0) {
    i38 = i37;
    i10 = 37;
   }
  } else {
   i38 = 0;
   i10 = 37;
  }
  if ((i10 | 0) == 37) {
   i10 = 0;
   if (((i38 & 65535 | 32) - 97 | 0) >>> 0 >= 6 >>> 0) {
    i4 = i8;
    i10 = 45;
    break;
   }
  }
  i12 = i8 + 6 | 0;
  if ((i3 - i12 | 0) >>> 0 > 5 >>> 0) {
   i8 = i12;
  } else {
   i4 = i12;
   i10 = 41;
   break;
  }
 }
 if ((i10 | 0) == 41) {
  return i4 | 0;
 } else if ((i10 | 0) == 42) {
  return i4 | 0;
 } else if ((i10 | 0) == 43) {
  return i4 | 0;
 } else if ((i10 | 0) == 44) {
  return i4 | 0;
 } else if ((i10 | 0) == 45) {
  return i4 | 0;
 } else if ((i10 | 0) == 46) {
  return i4 | 0;
 } else if ((i10 | 0) == 47) {
  return i4 | 0;
 } else if ((i10 | 0) == 48) {
  return i4 | 0;
 } else if ((i10 | 0) == 40) {
  return i4 | 0;
 } else if ((i10 | 0) == 49) {
  return i4 | 0;
 }
 return 0;
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
function __ZN7WebCore17URLEscapeSequence12findEndOfRunERKN3WTF6StringEjj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 if (i2 >>> 0 >= i3 >>> 0) {
  i4 = i2;
  return i4 | 0;
 }
 i5 = HEAP32[i1 >> 2] | 0;
 i1 = (i5 | 0) == 0;
 i6 = i5 + 4 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 8 | 0;
 i9 = i8;
 i10 = i8 | 0;
 i8 = i2;
 i2 = 0;
 i11 = i5;
 while (1) {
  if (i1) {
   i4 = i8;
   i12 = 46;
   break;
  }
  i13 = (HEAP32[i6 >> 2] | 0) >>> 0 > i8 >>> 0;
  if (!i13) {
   i4 = i8;
   i12 = 40;
   break;
  }
  if ((HEAP32[i7 >> 2] & 32 | 0) == 0) {
   i14 = HEAP16[(HEAP32[i9 >> 2] | 0) + (i8 << 1) >> 1] | 0;
  } else {
   i14 = HEAPU8[(HEAP32[i10 >> 2] | 0) + i8 | 0] | 0;
  }
  if (i14 << 16 >> 16 == 37) {
   if ((i3 - i8 | 0) >>> 0 <= 2 >>> 0) {
    i4 = i8;
    i12 = 41;
    break;
   }
   i15 = i8 + 1 | 0;
   do {
    if ((i11 | 0) == 0) {
     i16 = 0;
     i17 = 0;
     i12 = 16;
    } else {
     if ((HEAP32[i11 + 4 >> 2] | 0) >>> 0 <= i15 >>> 0) {
      i16 = 0;
      i17 = i11;
      i12 = 16;
      break;
     }
     i18 = i11 + 8 | 0;
     if ((HEAP32[i11 + 16 >> 2] & 32 | 0) == 0) {
      i19 = HEAP16[(HEAP32[i18 >> 2] | 0) + (i15 << 1) >> 1] | 0;
     } else {
      i19 = HEAPU8[(HEAP32[i18 >> 2] | 0) + i15 | 0] | 0;
     }
     if ((i19 - 48 & 65535) >>> 0 < 10 >>> 0) {
      i20 = i11;
     } else {
      i16 = i19;
      i17 = i11;
      i12 = 16;
     }
    }
   } while (0);
   if ((i12 | 0) == 16) {
    i12 = 0;
    if (((i16 & 65535 | 32) - 97 | 0) >>> 0 < 6 >>> 0) {
     i20 = i17;
    } else {
     i4 = i8;
     i12 = 38;
     break;
    }
   }
   i15 = i8 + 2 | 0;
   do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i12 = 23;
    } else {
     if ((HEAP32[i20 + 4 >> 2] | 0) >>> 0 <= i15 >>> 0) {
      i21 = 0;
      i12 = 23;
      break;
     }
     i18 = i20 + 8 | 0;
     if ((HEAP32[i20 + 16 >> 2] & 32 | 0) == 0) {
      i22 = HEAP16[(HEAP32[i18 >> 2] | 0) + (i15 << 1) >> 1] | 0;
     } else {
      i22 = HEAPU8[(HEAP32[i18 >> 2] | 0) + i15 | 0] | 0;
     }
     if ((i22 - 48 & 65535) >>> 0 >= 10 >>> 0) {
      i21 = i22;
      i12 = 23;
     }
    }
   } while (0);
   if ((i12 | 0) == 23) {
    i12 = 0;
    if (((i21 & 65535 | 32) - 97 | 0) >>> 0 >= 6 >>> 0) {
     i4 = i8;
     i12 = 39;
     break;
    }
   }
   i23 = 0;
   i24 = i8 + 3 | 0;
   i25 = i20;
  } else {
   if (!i13) {
    i4 = i8;
    i12 = 43;
    break;
   }
   i15 = (HEAP32[i7 >> 2] & 32 | 0) == 0;
   if (i15) {
    i18 = HEAP32[i9 >> 2] | 0;
    i26 = HEAP16[i18 + (i8 << 1) >> 1] | 0;
    i27 = i18;
    i28 = i18;
   } else {
    i18 = HEAP32[i10 >> 2] | 0;
    i26 = HEAPU8[i18 + i8 | 0] | 0;
    i27 = i18;
    i28 = i18;
   }
   if ((i26 & 65535) >>> 0 <= 63 >>> 0) {
    i4 = i8;
    i12 = 45;
    break;
   }
   if (i15) {
    i29 = HEAP16[i27 + (i8 << 1) >> 1] | 0;
   } else {
    i29 = HEAPU8[i28 + i8 | 0] | 0;
   }
   if (!((i29 & 65535) >>> 0 < 128 >>> 0 & (i2 | 0) < 2)) {
    i4 = i8;
    i12 = 44;
    break;
   }
   i23 = i2 + 1 | 0;
   i24 = i8 + 1 | 0;
   i25 = i5;
  }
  if (i24 >>> 0 < i3 >>> 0) {
   i8 = i24;
   i2 = i23;
   i11 = i25;
  } else {
   i4 = i24;
   i12 = 42;
   break;
  }
 }
 if ((i12 | 0) == 44) {
  return i4 | 0;
 } else if ((i12 | 0) == 45) {
  return i4 | 0;
 } else if ((i12 | 0) == 46) {
  return i4 | 0;
 } else if ((i12 | 0) == 40) {
  return i4 | 0;
 } else if ((i12 | 0) == 41) {
  return i4 | 0;
 } else if ((i12 | 0) == 42) {
  return i4 | 0;
 } else if ((i12 | 0) == 43) {
  return i4 | 0;
 } else if ((i12 | 0) == 38) {
  return i4 | 0;
 } else if ((i12 | 0) == 39) {
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCoreL21findAttributeWithNameERKNS_9HTMLTokenERKNS_13QualifiedNameERj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = HEAP32[i2 + 12 >> 2] | 0;
 i8 = (i7 | 0) == 0;
 do {
  if ((HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[__ZN7WebCore10XLinkNames17xlinkNamespaceURIE >> 2] | 0)) {
   do {
    if (i8) {
     i9 = 0;
    } else {
     i10 = i7 | 0;
     i11 = HEAP32[i10 >> 2] | 0;
     i12 = i11 + 2 | 0;
     HEAP32[i10 >> 2] = i11 + 4;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      i9 = i7;
      break;
     } else {
      HEAP32[i10 >> 2] = i12;
      i9 = i7;
      break;
     }
    }
   } while (0);
   i12 = i6 | 0;
   HEAP32[i12 >> 2] = i9;
   i10 = (i9 | 0) == 0;
   if (!i10) {
    i11 = i9 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
   }
   __ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i5, H_BASE + 184 | 0, i6);
   i11 = i5 | 0;
   i13 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   i11 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i12 = i11 | 0;
     i14 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i12 >> 2] = i14;
      break;
     }
    }
   } while (0);
   if ((i13 | 0) == 0) {
    _WTFCrash();
    return 0;
   }
   if (i10) {
    i15 = i13;
    break;
   }
   i11 = i9 | 0;
   i14 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    i15 = i13;
    break;
   } else {
    HEAP32[i11 >> 2] = i14;
    i15 = i13;
    break;
   }
  } else {
   if (i8) {
    i15 = 0;
    break;
   }
   i14 = i7 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
   i15 = i7;
  }
 } while (0);
 i7 = i1 + 552 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L28 : do {
  if ((i8 | 0) == 0) {
   i16 = 0;
  } else {
   i9 = i1 + 544 | 0;
   i5 = i15 + 4 | 0;
   i6 = i15 + 16 | 0;
   i2 = i15 + 8 | 0;
   L30 : do {
    if ((i15 | 0) == 0) {
     i14 = 0;
     while (1) {
      if ((HEAP32[(HEAP32[i9 >> 2] | 0) + (i14 * 168 & -1) + 24 >> 2] | 0) == 0) {
       i17 = i14;
       break L30;
      }
      i11 = i14 + 1 | 0;
      if (i11 >>> 0 < i8 >>> 0) {
       i14 = i11;
      } else {
       i16 = 0;
       break L28;
      }
     }
    } else {
     i14 = 0;
     i11 = i8;
     while (1) {
      i12 = HEAP32[i9 >> 2] | 0;
      i18 = HEAP32[i12 + (i14 * 168 & -1) + 24 >> 2] | 0;
      if ((i18 | 0) == (HEAP32[i5 >> 2] | 0)) {
       i19 = HEAP32[i12 + (i14 * 168 & -1) + 16 >> 2] | 0;
       if ((HEAP32[i6 >> 2] & 32 | 0) == 0) {
        i20 = HEAP32[i2 >> 2] | 0;
        i21 = i18;
       } else {
        i18 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i15) | 0;
        i20 = i18;
        i21 = HEAP32[i5 >> 2] | 0;
       }
       if ((_memcmp(i19 | 0, i20 | 0, i21 << 1 | 0) | 0) == 0) {
        i17 = i14;
        break L30;
       }
       i22 = HEAP32[i7 >> 2] | 0;
      } else {
       i22 = i11;
      }
      i19 = i14 + 1 | 0;
      if (i19 >>> 0 < i22 >>> 0) {
       i14 = i19;
       i11 = i22;
      } else {
       i16 = 0;
       break L28;
      }
     }
    }
   } while (0);
   HEAP32[i3 >> 2] = i17;
   i16 = 1;
  }
 } while (0);
 if ((i15 | 0) == 0) {
  STACKTOP = i4;
  return i16 | 0;
 }
 i17 = i15 | 0;
 i3 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i15);
  STACKTOP = i4;
  return i16 | 0;
 } else {
  HEAP32[i17 >> 2] = i3;
  STACKTOP = i4;
  return i16 | 0;
 }
 return 0;
}
function __ZN7WebCore26Unicode16BitEscapeSequence9decodeRunEPKtjRKNS_12TextEncodingE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = (i3 >>> 0) / 6 & -1;
 i8 = i6 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i6 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i6 + 8 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i6 + 12 | 0;
 HEAP8[i11] = 1;
 HEAP32[i6 + 16 >> 2] = 0;
 i12 = i6 + 20 | 0;
 HEAP32[i12 >> 2] = 0;
 __ZN3WTF13StringBuilder15reserveCapacityEj(i6, i7);
 if (i3 >>> 0 >= 6 >>> 0) {
  i3 = i6 + 20 | 0;
  i13 = i7;
  i7 = i2;
  while (1) {
   i2 = i13 - 1 | 0;
   i14 = HEAP16[i7 + 4 >> 1] | 0;
   if ((i14 & 65535) >>> 0 < 65 >>> 0) {
    i15 = i14 - 48 & 65535;
   } else {
    i15 = i14 + 9 & 15;
   }
   i14 = HEAP16[i7 + 6 >> 1] | 0;
   if ((i14 & 65535) >>> 0 < 65 >>> 0) {
    i16 = i14 - 48 & 65535;
   } else {
    i16 = i14 + 9 & 15;
   }
   i14 = HEAP16[i7 + 8 >> 1] | 0;
   if ((i14 & 65535) >>> 0 < 65 >>> 0) {
    i17 = i14 - 48 & 65535;
   } else {
    i17 = i14 + 9 & 15;
   }
   i14 = HEAP16[i7 + 10 >> 1] | 0;
   if ((i14 & 65535) >>> 0 < 65 >>> 0) {
    i18 = i14 - 48 & 65535;
   } else {
    i18 = i14 + 9 & 15;
   }
   i14 = i16 << 8 | i15 << 12 | i17 << 4 | i18;
   HEAP16[i5 >> 1] = i14;
   i19 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i19 | 0) == 0) {
     i20 = 22;
    } else {
     i21 = HEAP32[i8 >> 2] | 0;
     if (i21 >>> 0 >= (HEAP32[i19 + 4 >> 2] | 0) >>> 0) {
      i20 = 22;
      break;
     }
     if ((HEAP32[i9 >> 2] | 0) != 0) {
      i20 = 22;
      break;
     }
     if ((HEAP8[i11] & 1) == 0) {
      HEAP32[i8 >> 2] = i21 + 1;
      HEAP16[(HEAP32[i3 >> 2] | 0) + (i21 << 1) >> 1] = i14;
      break;
     }
     if ((i14 & 65535) >>> 0 > 255 >>> 0) {
      i20 = 22;
      break;
     }
     HEAP32[i8 >> 2] = i21 + 1;
     HEAP8[(HEAP32[i12 >> 2] | 0) + i21 | 0] = i14;
    }
   } while (0);
   if ((i20 | 0) == 22) {
    i20 = 0;
    __ZN3WTF13StringBuilder6appendEPKtj(i6, i5, 1);
   }
   if ((i2 | 0) == 0) {
    break;
   } else {
    i13 = i2;
    i7 = i7 + 12 | 0;
   }
  }
 }
 __ZN3WTF13StringBuilder11shrinkToFitEv(i6);
 i7 = HEAP32[i9 >> 2] | 0;
 if ((i7 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i6);
  i6 = HEAP32[i9 >> 2] | 0;
  HEAP32[i1 >> 2] = i6;
  if ((i6 | 0) != 0) {
   i22 = i6;
   i20 = 27;
  }
 } else {
  HEAP32[i1 >> 2] = i7;
  i22 = i7;
  i20 = 27;
 }
 if ((i20 | 0) == 27) {
  i20 = i22 | 0;
  HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
 }
 i20 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i10 = i20 | 0;
   i22 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i22 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i10 >> 2] = i22;
    break;
   }
  }
 } while (0);
 i20 = HEAP32[i9 >> 2] | 0;
 if ((i20 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i20 | 0;
 i22 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i22 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i20);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i9 >> 2] = i22;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCoreL17fullyDecodeStringERKN3WTF6StringERKNS_12TextEncodingE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i1 | 0;
 HEAP32[i9 >> 2] = i2;
 if ((i2 | 0) == 0) {
  i10 = 0;
 } else {
  i11 = i2 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
  i10 = HEAP32[i9 >> 2] | 0;
 }
 while (1) {
  if ((i10 | 0) == 0) {
   i12 = 0;
  } else {
   i12 = HEAP32[i10 + 4 >> 2] | 0;
  }
  __ZN7WebCore21decodeEscapeSequencesINS_17URLEscapeSequenceEEEN3WTF6StringERKS3_RKNS_12TextEncodingE(i7, i1, i3);
  __ZN7WebCore21decodeEscapeSequencesINS_26Unicode16BitEscapeSequenceEEEN3WTF6StringERKS3_RKNS_12TextEncodingE(i6, i7, __ZN7WebCore12UTF8EncodingEv() | 0);
  i11 = i6 | 0;
  i2 = HEAP32[i11 >> 2] | 0;
  HEAP32[i11 >> 2] = 0;
  i11 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = i2;
  do {
   if ((i11 | 0) != 0) {
    i2 = i11 | 0;
    i13 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
    if ((i13 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i2 >> 2] = i13;
     break;
    }
   }
  } while (0);
  i11 = HEAP32[i7 >> 2] | 0;
  do {
   if ((i11 | 0) != 0) {
    i13 = i11 | 0;
    i2 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
    if ((i2 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i13 >> 2] = i2;
     break;
    }
   }
  } while (0);
  i10 = HEAP32[i9 >> 2] | 0;
  i14 = (i10 | 0) == 0;
  if (i14) {
   i15 = 0;
  } else {
   i15 = HEAP32[i10 + 4 >> 2] | 0;
  }
  if (i15 >>> 0 >= i12 >>> 0) {
   break;
  }
 }
 do {
  if (!i14) {
   __ZN3WTF10StringImpl7replaceEtt(i5, i10, 43, 32);
   i12 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i5 >> 2];
   if ((i12 | 0) == 0) {
    break;
   }
   i15 = i12 | 0;
   i7 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i15 >> 2] = i7;
    break;
   }
  }
 } while (0);
 __ZNK3WTF6String16removeCharactersEPFbtE(i8, i1, F_BASE_ii + 4 | 0);
 i1 = i8 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i5 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i8 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i5 | 0;
 i9 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i9 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i1 >> 2] = i9;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore10XSSAuditor20isLikelySafeResourceERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 56 | 0;
 i7 = i3 + 64 | 0;
 i8 = i3 + 72 | 0;
 i9 = i2 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = 1;
  STACKTOP = i3;
  return i11 | 0;
 }
 if ((HEAP32[i10 + 4 >> 2] | 0) == 0) {
  i11 = 1;
  STACKTOP = i3;
  return i11 | 0;
 }
 i10 = __ZN7WebCore8blankURLEv() | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i9 >> 2] | 0, HEAP32[i10 >> 2] | 0) | 0) {
  i11 = 1;
  STACKTOP = i3;
  return i11 | 0;
 }
 i10 = i1 | 0;
 __ZNK7WebCore3URL4hostEv(i4, i10);
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i11 = 0;
  STACKTOP = i3;
  return i11 | 0;
 }
 i4 = (HEAP32[i1 + 4 >> 2] | 0) == 0;
 i9 = i1 | 0;
 i12 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 do {
  if ((i12 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i1);
   if (i4) {
    i11 = 0;
   } else {
    break;
   }
   STACKTOP = i3;
   return i11 | 0;
  } else {
   HEAP32[i9 >> 2] = i12;
   if (i4) {
    i11 = 0;
   } else {
    break;
   }
   STACKTOP = i3;
   return i11 | 0;
  }
 } while (0);
 __ZN7WebCore3URLC1ERKS0_RKN3WTF6StringE(i5, i10, i2);
 __ZNK7WebCore3URL4hostEv(i6, i10);
 __ZNK7WebCore3URL4hostEv(i7, i5);
 i10 = i6 | 0;
 i6 = i7 | 0;
 do {
  if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i10 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0) {
   __ZNK7WebCore3URL5queryEv(i8, i5);
   i7 = HEAP32[i8 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i13 = 1;
    break;
   }
   i2 = (HEAP32[i7 + 4 >> 2] | 0) == 0;
   i4 = i7 | 0;
   i12 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    i13 = i2;
    break;
   } else {
    HEAP32[i4 >> 2] = i12;
    i13 = i2;
    break;
   }
  } else {
   i13 = 0;
  }
 } while (0);
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i6 = i8 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i10 = i8 | 0;
   i2 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i10 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i5 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i11 = i13;
  STACKTOP = i3;
  return i11 | 0;
 }
 i5 = i8 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  i11 = i13;
  STACKTOP = i3;
  return i11 | 0;
 } else {
  HEAP32[i5 >> 2] = i2;
  i11 = i13;
  STACKTOP = i3;
  return i11 | 0;
 }
 return 0;
}
function __ZN7WebCore10XSSAuditor20isContainedInRequestERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i1 + 60 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   if ((__ZN3WTF10StringImpl16findIgnoringCaseEPS0_j(i5, i2, 0) | 0) == -1) {
    break;
   } else {
    i4 = 1;
   }
   return i4 | 0;
  }
 } while (0);
 i2 = HEAP32[i1 + 68 >> 2] | 0;
 L11 : do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i7 = 0;
    i8 = i5;
    while (1) {
     if ((i7 | 0) >= 0) {
      break L11;
     }
     if ((HEAP32[i8 + 8 >> 2] | 0) == 0) {
      i9 = 24;
      break;
     }
     i10 = HEAP32[HEAP32[i8 >> 2] >> 2] | 0;
     if ((i10 | 0) == 0) {
      i4 = 0;
      i9 = 31;
      break;
     } else {
      i7 = i7 + 1 | 0;
      i8 = i10;
     }
    }
    if ((i9 | 0) == 24) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
     return 0;
    } else if ((i9 | 0) == 31) {
     return i4 | 0;
    }
   }
   i8 = i6 + 4 | 0;
   i7 = HEAP32[i8 >> 2] | 0;
   i10 = HEAP32[i2 + 528 >> 2] | 0;
   i11 = i7 >>> 0 < i10 >>> 0 ? i7 : i10;
   i10 = i6 + 16 | 0;
   i7 = i6 + 8 | 0;
   i12 = i7;
   i13 = i7 | 0;
   i7 = 0;
   i14 = i5;
   while (1) {
    if ((i7 | 0) >= (i11 | 0)) {
     break L11;
    }
    do {
     if ((HEAP32[i8 >> 2] | 0) >>> 0 > i7 >>> 0) {
      if ((HEAP32[i10 >> 2] & 32 | 0) == 0) {
       i15 = HEAP16[(HEAP32[i12 >> 2] | 0) + (i7 << 1) >> 1] | 0;
       break;
      } else {
       i15 = HEAPU8[(HEAP32[i13 >> 2] | 0) + i7 | 0] | 0;
       break;
      }
     } else {
      i15 = 0;
     }
    } while (0);
    i16 = i15 & 127;
    if ((HEAP32[i14 + 8 >> 2] | 0) >>> 0 <= i16 >>> 0) {
     i9 = 23;
     break;
    }
    i17 = HEAP32[(HEAP32[i14 >> 2] | 0) + (i16 << 2) >> 2] | 0;
    if ((i17 | 0) == 0) {
     i4 = 0;
     i9 = 26;
     break;
    } else {
     i7 = i7 + 1 | 0;
     i14 = i17;
    }
   }
   if ((i9 | 0) == 23) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else if ((i9 | 0) == 26) {
    return i4 | 0;
   }
  }
 } while (0);
 i9 = HEAP32[i1 + 64 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (__ZN3WTF10StringImpl16findIgnoringCaseEPS0_j(i9, HEAP32[i3 >> 2] | 0, 0) | 0) != -1;
 return i4 | 0;
}
function __ZN7WebCore10SuffixTreeINS_13ASCIICodebookEE5buildERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i2 = i1 | 0;
 i6 = i1 + 528 | 0;
 i7 = i1 + 532 | 0;
 i1 = 0;
 L1 : while (1) {
  i8 = HEAP32[i5 >> 2] | 0;
  i9 = (i8 | 0) == 0;
  if (i9) {
   i10 = 0;
  } else {
   i10 = HEAP32[i8 + 4 >> 2] | 0;
  }
  if (i1 >>> 0 >= i10 >>> 0) {
   i11 = 22;
   break;
  }
  i12 = (HEAP32[i6 >> 2] | 0) + i1 | 0;
  if (i9) {
   i13 = 0;
  } else {
   i13 = HEAP32[i8 + 4 >> 2] | 0;
  }
  i9 = i13 >>> 0 < i12 >>> 0 ? i13 : i12;
  L10 : do {
   if (i1 >>> 0 < i9 >>> 0) {
    i12 = i2;
    i14 = 1;
    i15 = i1;
    i16 = i8;
    while (1) {
     do {
      if ((i16 | 0) == 0) {
       i17 = 0;
      } else {
       if ((HEAP32[i16 + 4 >> 2] | 0) >>> 0 <= i15 >>> 0) {
        i17 = 0;
        break;
       }
       i18 = i16 + 8 | 0;
       if ((HEAP32[i16 + 16 >> 2] & 32 | 0) == 0) {
        i17 = HEAP16[(HEAP32[i18 >> 2] | 0) + (i15 << 1) >> 1] | 0;
        break;
       } else {
        i17 = HEAPU8[(HEAP32[i18 >> 2] | 0) + i15 | 0] | 0;
        break;
       }
      }
     } while (0);
     i18 = i17 & 127;
     if ((HEAP32[i12 + 8 >> 2] | 0) >>> 0 <= i18 >>> 0) {
      i11 = 14;
      break L1;
     }
     i19 = (HEAP32[i12 >> 2] | 0) + (i18 << 2) | 0;
     i18 = HEAP32[i19 >> 2] | 0;
     if ((i18 | 0) == 0) {
      if ((i15 + 1 | 0) == (i9 | 0)) {
       i20 = i7;
      } else {
       i21 = __Znwj(528) | 0;
       HEAP32[i21 >> 2] = i21 + 12;
       HEAP32[i21 + 4 >> 2] = 128;
       HEAP32[i21 + 8 >> 2] = 128;
       HEAP32[i4 >> 2] = 0;
       __ZN3WTF6VectorIPN7WebCore10SuffixTreeINS1_13ASCIICodebookEE4NodeELj128ENS_15CrashOnOverflowEE4fillERKS6_j(i21, i4, 128);
       HEAP8[i21 + 524 | 0] = 0;
       i20 = i21;
      }
      HEAP32[i19 >> 2] = i20;
      i22 = i20;
     } else {
      i22 = i18;
     }
     i18 = i14 + i1 | 0;
     if (i18 >>> 0 >= i9 >>> 0) {
      break L10;
     }
     i12 = i22;
     i14 = i14 + 1 | 0;
     i15 = i18;
     i16 = HEAP32[i5 >> 2] | 0;
    }
   }
  } while (0);
  i1 = i1 + 1 | 0;
 }
 if ((i11 | 0) == 14) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i11 | 0) == 22) {
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore17URLEscapeSequence9decodeRunEPKtjRKNS_12TextEncodingE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 536 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i7 + 12 | 0;
 i9 = i7 | 0;
 HEAP32[i9 >> 2] = i8;
 i10 = i7 + 4 | 0;
 HEAP32[i10 >> 2] = 512;
 i11 = i7 + 8 | 0;
 HEAP32[i11 >> 2] = 0;
 do {
  if ((i3 | 0) == 0) {
   HEAP32[i11 >> 2] = i3;
   i12 = i8;
  } else {
   if (i3 >>> 0 > 512 >>> 0) {
    i7 = i3 >>> 0 < 641 >>> 0 ? 641 : i3;
    if (i7 >>> 0 > 512 >>> 0) {
     i13 = __ZN3WTF18fastMallocGoodSizeEj(i7) | 0;
     HEAP32[i10 >> 2] = i13;
     i7 = __ZN3WTF10fastMallocEj(i13) | 0;
     HEAP32[i9 >> 2] = i7;
     i14 = i7;
    } else {
     i14 = i8;
    }
    HEAP32[i11 >> 2] = i3;
    if ((i3 | 0) > 0) {
     i15 = i14;
    } else {
     i12 = i14;
     break;
    }
   } else {
    HEAP32[i11 >> 2] = i3;
    i15 = i8;
   }
   i7 = i2 + (i3 << 1) | 0;
   i13 = i15;
   i16 = i2;
   while (1) {
    i17 = HEAP16[i16 >> 1] | 0;
    if (i17 << 16 >> 16 == 37) {
     i18 = HEAP16[i16 + 2 >> 1] | 0;
     i19 = i18 & 65535;
     if ((i18 & 65535) >>> 0 < 65 >>> 0) {
      i20 = i19 - 48 | 0;
     } else {
      i20 = i19 + 9 & 15;
     }
     i19 = HEAP16[i16 + 4 >> 1] | 0;
     i18 = i19 & 65535;
     if ((i19 & 65535) >>> 0 < 65 >>> 0) {
      i21 = i18 - 48 | 0;
     } else {
      i21 = i18 + 9 & 15;
     }
     HEAP8[i13] = i21 | i20 << 4;
     i22 = i16 + 6 | 0;
    } else {
     HEAP8[i13] = i17;
     i22 = i16 + 2 | 0;
    }
    i17 = i13 + 1 | 0;
    if (i22 >>> 0 < i7 >>> 0) {
     i13 = i17;
     i16 = i22;
    } else {
     i12 = i17;
     break;
    }
   }
  }
 } while (0);
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  i23 = __ZN7WebCore12UTF8EncodingEv() | 0;
 } else {
  i23 = i4;
 }
 i4 = HEAP32[i9 >> 2] | 0;
 __ZNK7WebCore12TextEncoding6decodeEPKcjbRb(i1, i23, i4, i12 - i4 | 0, 0, i6);
 if ((HEAP32[i11 >> 2] | 0) != 0) {
  HEAP32[i11 >> 2] = 0;
 }
 i11 = HEAP32[i9 >> 2] | 0;
 if ((i8 | 0) == (i11 | 0) | (i11 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i9 >> 2] = 0;
 HEAP32[i10 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i11);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore10XSSAuditor11filterTokenERKNS_18FilterTokenRequestE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 do {
  if ((HEAP8[i2 + 48 | 0] & 1) != 0) {
   i4 = i2 + 52 | 0;
   if ((HEAP32[i4 >> 2] | 0) == 1) {
    break;
   }
   i5 = HEAP32[i3 >> 2] | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i6 | 0) == 2) {
     if (__ZN7WebCore10XSSAuditor16filterStartTokenERKNS_18FilterTokenRequestE(i2, i3) | 0) {
      i7 = 18;
     } else {
      i7 = 19;
     }
    } else {
     i8 = i2 + 80 | 0;
     i9 = HEAP32[i8 >> 2] | 0;
     if ((i9 | 0) == 0) {
      i7 = 19;
      break;
     }
     if ((i6 | 0) == 5) {
      if (__ZN7WebCore10XSSAuditor20filterCharacterTokenERKNS_18FilterTokenRequestE(i2, i3) | 0) {
       i7 = 18;
       break;
      } else {
       i7 = 19;
       break;
      }
     } else if ((i6 | 0) != 3) {
      i7 = 19;
      break;
     }
     i10 = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9scriptTagE >> 2] | 0) + 12 >> 2] | 0;
     i11 = HEAP32[i5 + 24 >> 2] | 0;
     if ((i10 | 0) == 0) {
      if ((i11 | 0) == 0) {
       i12 = i9;
      } else {
       i7 = 19;
       break;
      }
     } else {
      i9 = i10 + 4 | 0;
      if ((i11 | 0) != (HEAP32[i9 >> 2] | 0)) {
       i7 = 19;
       break;
      }
      i13 = HEAP32[i5 + 16 >> 2] | 0;
      if ((HEAP32[i10 + 16 >> 2] & 32 | 0) == 0) {
       i14 = HEAP32[i10 + 8 >> 2] | 0;
       i15 = i11;
      } else {
       i11 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i10) | 0;
       i14 = i11;
       i15 = HEAP32[i9 >> 2] | 0;
      }
      if ((_memcmp(i13 | 0, i14 | 0, i15 << 1 | 0) | 0) != 0) {
       i7 = 19;
       break;
      }
      i12 = HEAP32[i8 >> 2] | 0;
     }
     HEAP32[i8 >> 2] = i12 - 1;
     i7 = 19;
    }
   } while (0);
   if ((i7 | 0) == 18) {
    i5 = (HEAP32[i4 >> 2] | 0) == 4;
    i6 = HEAP8[i2 + 57 | 0] & 1;
    i8 = HEAP8[i2 + 56 | 0] & 1;
    i13 = __Znwj(12) | 0;
    HEAP8[i13] = i5 & 1;
    HEAP8[i13 + 1 | 0] = i6;
    HEAP8[i13 + 2 | 0] = i8;
    HEAP32[i13 + 4 >> 2] = 0;
    HEAP32[i13 + 8 >> 2] = 0;
    HEAP32[i1 >> 2] = i13;
    return;
   } else if ((i7 | 0) == 19) {
    HEAP32[i1 >> 2] = 0;
    return;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN3WTF12StringAppendINS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES3_E7writeToEPt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i3 = i1 + 16 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = _strlen(i4 | 0) | 0;
 __ZN3WTF12StringAppendINS0_INS0_IPKcNS_6StringEEES2_EES3_E7writeToEPt(i1 | 0, i2);
 i6 = i1 + 8 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = _strlen(i7 | 0) | 0;
 i9 = i1 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = _strlen(i10 | 0) | 0;
 i12 = i1 + 4 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 if ((i13 | 0) == 0) {
  i14 = 0;
 } else {
  i14 = HEAP32[i13 + 4 >> 2] | 0;
 }
 i15 = i1 + 12 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 if ((i16 | 0) == 0) {
  i17 = 0;
 } else {
  i17 = HEAP32[i16 + 4 >> 2] | 0;
 }
 i16 = i11 + i8 + i14 + i17 | 0;
 if ((i5 | 0) == 0) {
  i18 = i7;
  i19 = i10;
  i20 = i13;
 } else {
  i13 = 0;
  while (1) {
   HEAP16[i2 + (i16 + i13 << 1) >> 1] = HEAPU8[i4 + i13 | 0] | 0;
   i13 = i13 + 1 | 0;
   if (i13 >>> 0 >= i5 >>> 0) {
    break;
   }
  }
  i18 = HEAP32[i6 >> 2] | 0;
  i19 = HEAP32[i9 >> 2] | 0;
  i20 = HEAP32[i12 >> 2] | 0;
 }
 i12 = _strlen(HEAP32[i3 >> 2] | 0) | 0;
 i3 = _strlen(i18 | 0) | 0;
 i18 = _strlen(i19 | 0) | 0;
 if ((i20 | 0) == 0) {
  i21 = 0;
 } else {
  i21 = HEAP32[i20 + 4 >> 2] | 0;
 }
 i20 = HEAP32[i15 >> 2] | 0;
 if ((i20 | 0) == 0) {
  i22 = 0;
 } else {
  i22 = HEAP32[i20 + 4 >> 2] | 0;
 }
 i20 = i3 + i12 + i18 + i21 + i22 | 0;
 i22 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i22 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i22 + 4 >> 2] | 0;
 if ((HEAP32[i22 + 16 >> 2] & 32 | 0) == 0) {
  i21 = HEAP32[i22 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i23 = 0;
  }
  while (1) {
   HEAP16[i2 + (i23 + i20 << 1) >> 1] = HEAP16[i21 + (i23 << 1) >> 1] | 0;
   i23 = i23 + 1 | 0;
   if (i23 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 } else {
  i23 = HEAP32[i22 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i24 = 0;
  }
  while (1) {
   HEAP16[i2 + (i24 + i20 << 1) >> 1] = HEAPU8[i23 + i24 | 0] | 0;
   i24 = i24 + 1 | 0;
   if (i24 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 }
}
function __ZN7WebCore10XSSAuditor20filterCharacterTokenERKNS_18FilterTokenRequestE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if (!(__ZN7WebCore10XSSAuditor20isContainedInRequestERKN3WTF6StringE(i1, i1 + 76 | 0) | 0)) {
  i5 = 0;
  STACKTOP = i3;
  return i5 | 0;
 }
 __ZN7WebCore10XSSAuditor27decodedSnippetForJavaScriptERKNS_18FilterTokenRequestE(i4, i1, i2);
 i6 = __ZN7WebCore10XSSAuditor20isContainedInRequestERKN3WTF6StringE(i1, i4) | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   if (i6) {
    break;
   } else {
    i5 = 0;
   }
   STACKTOP = i3;
   return i5 | 0;
  } else {
   i4 = i1 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    if (i6) {
     break;
    } else {
     i5 = 0;
    }
    STACKTOP = i3;
    return i5 | 0;
   } else {
    HEAP32[i4 >> 2] = i7;
    if (i6) {
     break;
    } else {
     i5 = 0;
    }
    STACKTOP = i3;
    return i5 | 0;
   }
  }
 } while (0);
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 i1 = i2 + 20 | 0;
 do {
  if ((HEAP32[i1 >> 2] | 0) != 0) {
   i7 = i2 + 24 | 0;
   if ((HEAP32[i7 >> 2] | 0) != 0) {
    HEAP32[i7 >> 2] = 0;
   }
   i7 = i2 + 16 | 0;
   i4 = HEAP32[i7 >> 2] | 0;
   i8 = i2 + 28 | 0;
   if ((i8 | 0) == (i4 | 0) | (i4 | 0) == 0) {
    i9 = i4;
   } else {
    HEAP32[i7 >> 2] = 0;
    HEAP32[i1 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i4);
    i9 = HEAP32[i7 >> 2] | 0;
   }
   if ((i9 | 0) != 0) {
    break;
   }
   HEAP32[i7 >> 2] = i8;
   HEAP32[i1 >> 2] = 256;
  }
 } while (0);
 HEAP16[i2 + 540 >> 1] = 0;
 i2 = HEAP32[i6 >> 2] | 0;
 i6 = i2 + 16 | 0;
 i1 = i2 + 24 | 0;
 i9 = HEAP32[i1 >> 2] | 0;
 if ((i9 | 0) == (HEAP32[i2 + 20 >> 2] | 0)) {
  i2 = i9 + 1 | 0;
  i8 = i2 + (i9 >>> 2) | 0;
  i7 = i8 >>> 0 > 16 >>> 0 ? i8 : 16;
  __ZN3WTF6VectorItLj256ENS_15CrashOnOverflowEE15reserveCapacityEj(i6, i7 >>> 0 > i2 >>> 0 ? i7 : i2);
  HEAP16[(HEAP32[i6 >> 2] | 0) + (HEAP32[i1 >> 2] << 1) >> 1] = 32;
 } else {
  HEAP16[(HEAP32[i6 >> 2] | 0) + (i9 << 1) >> 1] = 32;
 }
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 i5 = 1;
 STACKTOP = i3;
 return i5 | 0;
}
function __ZN7WebCore10XSSAuditor17filterObjectTokenERKNS_18FilterTokenRequestE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 __ZN7WebCore10XSSAuditor21decodedSnippetForNameERKNS_18FilterTokenRequestE(i4, i1, i2);
 i7 = __ZN7WebCore10XSSAuditor20isContainedInRequestERKN3WTF6StringE(i1, i4) | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i4 = i8 | 0;
   i9 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i4 >> 2] = i9;
    break;
   }
  }
 } while (0);
 if (!i7) {
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 i7 = __ZN7WebCore8blankURLEv() | 0;
 i8 = __ZN7WebCore10XSSAuditor24eraseAttributeIfInjectedERKNS_18FilterTokenRequestERKNS_13QualifiedNameERKN3WTF6StringENS0_13AttributeKindE(i1, i2, __ZN7WebCore9HTMLNames8dataAttrE, i7, 1) | 0;
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = 0;
 i9 = i8 | (__ZN7WebCore10XSSAuditor24eraseAttributeIfInjectedERKNS_18FilterTokenRequestERKNS_13QualifiedNameERKN3WTF6StringENS0_13AttributeKindE(i1, i2, __ZN7WebCore9HTMLNames8typeAttrE, i5, 0) | 0);
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i7 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i5 = i6 | 0;
 HEAP32[i5 >> 2] = 0;
 i8 = i9 | (__ZN7WebCore10XSSAuditor24eraseAttributeIfInjectedERKNS_18FilterTokenRequestERKNS_13QualifiedNameERKN3WTF6StringENS0_13AttributeKindE(i1, i2, __ZN7WebCore9HTMLNames11classidAttrE, i6, 0) | 0);
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i10 = i8;
  STACKTOP = i3;
  return i10 | 0;
 }
 i5 = i6 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  i10 = i8;
  STACKTOP = i3;
  return i10 | 0;
 } else {
  HEAP32[i5 >> 2] = i2;
  i10 = i8;
  STACKTOP = i3;
  return i10 | 0;
 }
 return 0;
}
function __ZN7WebCore10XSSAuditor16filterEmbedTokenERKNS_18FilterTokenRequestE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 __ZN7WebCore10XSSAuditor21decodedSnippetForNameERKNS_18FilterTokenRequestE(i4, i1, i2);
 i7 = __ZN7WebCore10XSSAuditor20isContainedInRequestERKN3WTF6StringE(i1, i4) | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i4 = i8 | 0;
   i9 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i4 >> 2] = i9;
    break;
   }
  }
 } while (0);
 if (!i7) {
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = __ZN7WebCore10XSSAuditor24eraseAttributeIfInjectedERKNS_18FilterTokenRequestERKNS_13QualifiedNameERKN3WTF6StringENS0_13AttributeKindE(i1, i2, __ZN7WebCore9HTMLNames8codeAttrE, i5, 1) | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 | 0;
   i9 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i7 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i5 = __ZN7WebCore8blankURLEv() | 0;
 i9 = i8 | (__ZN7WebCore10XSSAuditor24eraseAttributeIfInjectedERKNS_18FilterTokenRequestERKNS_13QualifiedNameERKN3WTF6StringENS0_13AttributeKindE(i1, i2, __ZN7WebCore9HTMLNames7srcAttrE, i5, 1) | 0);
 i5 = i6 | 0;
 HEAP32[i5 >> 2] = 0;
 i8 = i9 | (__ZN7WebCore10XSSAuditor24eraseAttributeIfInjectedERKNS_18FilterTokenRequestERKNS_13QualifiedNameERKN3WTF6StringENS0_13AttributeKindE(i1, i2, __ZN7WebCore9HTMLNames8typeAttrE, i6, 0) | 0);
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i10 = i8;
  STACKTOP = i3;
  return i10 | 0;
 }
 i5 = i6 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  i10 = i8;
  STACKTOP = i3;
  return i10 | 0;
 } else {
  HEAP32[i5 >> 2] = i2;
  i10 = i8;
  STACKTOP = i3;
  return i10 | 0;
 }
 return 0;
}
function __ZNK3WTF12StringAppendINS0_INS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES3_EES2_EcvS3_Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
 i6 = i5 + 4 | 0;
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i8 = i7 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 HEAP32[i5 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 i8 = i5 + 12 | 0;
 i7 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i8 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i9 = i7 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 HEAP32[i5 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 i9 = i5 + 20 | 0;
 i7 = HEAP32[i2 + 20 >> 2] | 0;
 HEAP32[i9 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i10 = i7 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EES4_EES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, HEAP32[i2 + 24 >> 2] | 0);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i9 = i2 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i9 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i8 = i2 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i8 >> 2] = i5;
    break;
   }
  }
 } while (0);
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
 if ((i4 | 0) == 0) {
  _WTFCrash();
 } else {
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore10XSSAuditor17filterScriptTokenERKNS_18FilterTokenRequestE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 __ZN7WebCore10XSSAuditor21decodedSnippetForNameERKNS_18FilterTokenRequestE(i4, i1, i2);
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 76 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i4;
 do {
  if ((i8 | 0) != 0) {
   i4 = i8 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i4 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i6 = i8 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  }
 } while (0);
 __ZN7WebCore10XSSAuditor21decodedSnippetForNameERKNS_18FilterTokenRequestE(i5, i1, i2);
 i8 = __ZN7WebCore10XSSAuditor20isContainedInRequestERKN3WTF6StringE(i1, i5) | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i5 = i7 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i5 >> 2] = i6;
    break;
   }
  }
 } while (0);
 if (!i8) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 i8 = __ZN7WebCore8blankURLEv() | 0;
 i7 = __ZN7WebCore10XSSAuditor24eraseAttributeIfInjectedERKNS_18FilterTokenRequestERKNS_13QualifiedNameERKN3WTF6StringENS0_13AttributeKindE(i1, i2, __ZN7WebCore9HTMLNames7srcAttrE, i8, 1) | 0;
 i8 = __ZN7WebCore8blankURLEv() | 0;
 i9 = i7 | (__ZN7WebCore10XSSAuditor24eraseAttributeIfInjectedERKNS_18FilterTokenRequestERKNS_13QualifiedNameERKN3WTF6StringENS0_13AttributeKindE(i1, i2, __ZN7WebCore10XLinkNames8hrefAttrE, i8, 1) | 0);
 STACKTOP = i3;
 return i9 | 0;
}
function __ZN7WebCore10XSSAuditor17filterIframeTokenERKNS_18FilterTokenRequestE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = __ZN7WebCore10XSSAuditor24eraseAttributeIfInjectedERKNS_18FilterTokenRequestERKNS_13QualifiedNameERKN3WTF6StringENS0_13AttributeKindE(i1, i2, __ZN7WebCore9HTMLNames10srcdocAttrE, i4, 2) | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 | 0;
   i9 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i7 >> 2] = i9;
    break;
   }
  }
 } while (0);
 __ZN7WebCore10XSSAuditor21decodedSnippetForNameERKNS_18FilterTokenRequestE(i5, i1, i2);
 i4 = __ZN7WebCore10XSSAuditor20isContainedInRequestERKN3WTF6StringE(i1, i5) | 0;
 i9 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i5 = i9 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i5 >> 2] = i7;
    break;
   }
  }
 } while (0);
 if (!i4) {
  i10 = i8;
  STACKTOP = i3;
  return i10 | 0;
 }
 i4 = i6 | 0;
 HEAP32[i4 >> 2] = 0;
 i9 = i8 | (__ZN7WebCore10XSSAuditor24eraseAttributeIfInjectedERKNS_18FilterTokenRequestERKNS_13QualifiedNameERKN3WTF6StringENS0_13AttributeKindE(i1, i2, __ZN7WebCore9HTMLNames7srcAttrE, i6, 1) | 0);
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i10 = i9;
  STACKTOP = i3;
  return i10 | 0;
 }
 i4 = i6 | 0;
 i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  i10 = i9;
  STACKTOP = i3;
  return i10 | 0;
 } else {
  HEAP32[i4 >> 2] = i2;
  i10 = i9;
  STACKTOP = i3;
  return i10 | 0;
 }
 return 0;
}
function __ZN7WebCore10XSSAuditor17filterAppletTokenERKNS_18FilterTokenRequestE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 __ZN7WebCore10XSSAuditor21decodedSnippetForNameERKNS_18FilterTokenRequestE(i4, i1, i2);
 i7 = __ZN7WebCore10XSSAuditor20isContainedInRequestERKN3WTF6StringE(i1, i4) | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i4 = i8 | 0;
   i9 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i4 >> 2] = i9;
    break;
   }
  }
 } while (0);
 if (!i7) {
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = __ZN7WebCore10XSSAuditor24eraseAttributeIfInjectedERKNS_18FilterTokenRequestERKNS_13QualifiedNameERKN3WTF6StringENS0_13AttributeKindE(i1, i2, __ZN7WebCore9HTMLNames8codeAttrE, i5, 1) | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 | 0;
   i9 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i7 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i5 = i6 | 0;
 HEAP32[i5 >> 2] = 0;
 i9 = i8 | (__ZN7WebCore10XSSAuditor24eraseAttributeIfInjectedERKNS_18FilterTokenRequestERKNS_13QualifiedNameERKN3WTF6StringENS0_13AttributeKindE(i1, i2, __ZN7WebCore9HTMLNames10objectAttrE, i6, 0) | 0);
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i10 = i9;
  STACKTOP = i3;
  return i10 | 0;
 }
 i5 = i6 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  i10 = i9;
  STACKTOP = i3;
  return i10 | 0;
 } else {
  HEAP32[i5 >> 2] = i2;
  i10 = i9;
  STACKTOP = i3;
  return i10 | 0;
 }
 return 0;
}
function __ZN7WebCore10XSSAuditor16filterParamTokenERKNS_18FilterTokenRequestE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i2 | 0;
 if (!(__ZN7WebCoreL21findAttributeWithNameERKNS_9HTMLTokenERKNS_13QualifiedNameERj(HEAP32[i7 >> 2] | 0, HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0, i5) | 0)) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i9 = HEAP32[i7 >> 2] | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i9 + 552 >> 2] | 0) >>> 0 <= i7 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i5 = HEAP32[i9 + 544 >> 2] | 0;
 i9 = HEAP32[i5 + (i7 * 168 & -1) + 100 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3WTF10StringImpl5emptyEv() | 0;
  i11 = i4 | 0;
  HEAP32[i11 >> 2] = i10;
  i12 = i10 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
  i13 = i11;
 } else {
  __ZN3WTF10StringImpl6createEPKtj(i4, HEAP32[i5 + (i7 * 168 & -1) + 92 >> 2] | 0, i9);
  i13 = i4 | 0;
 }
 i4 = i6 | 0;
 HEAP32[i4 >> 2] = HEAP32[i13 >> 2];
 i13 = __ZN7WebCore16HTMLParamElement14isURLParameterERKN3WTF6StringE(i6) | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 | 0;
   i9 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i4 >> 2] = i9;
    break;
   }
  }
 } while (0);
 if (!i13) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i13 = __ZN7WebCore8blankURLEv() | 0;
 i8 = __ZN7WebCore10XSSAuditor24eraseAttributeIfInjectedERKNS_18FilterTokenRequestERKNS_13QualifiedNameERKN3WTF6StringENS0_13AttributeKindE(i1, i2, __ZN7WebCore9HTMLNames9valueAttrE, i13, 1) | 0;
 STACKTOP = i3;
 return i8 | 0;
}
function __ZN3WTFplINS_12StringAppendINS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EES4_S3_EENS1_INS1_IT_T0_EET1_EERKSB_SC_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 i6 = (i5 | 0) == 0;
 if (!i6) {
  i7 = i5 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i2 + 12 >> 2] | 0;
 i9 = (i8 | 0) == 0;
 if (!i9) {
  i10 = i8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = HEAP32[i2 + 16 >> 2] | 0;
 i11 = HEAP32[i2 + 20 >> 2] | 0;
 i2 = (i11 | 0) == 0;
 if (!i2) {
  i12 = i11 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 HEAP32[i1 >> 2] = i4;
 HEAP32[i1 + 4 >> 2] = i5;
 if (!i6) {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 8 >> 2] = i7;
 HEAP32[i1 + 12 >> 2] = i8;
 if (!i9) {
  i7 = i8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 16 >> 2] = i10;
 HEAP32[i1 + 20 >> 2] = i11;
 do {
  if (i2) {
   HEAP32[i1 + 24 >> 2] = i3;
  } else {
   i10 = i11 | 0;
   i7 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i7 + 2;
   HEAP32[i1 + 24 >> 2] = i3;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i10 >> 2] = i7;
    break;
   }
  }
 } while (0);
 do {
  if (!i9) {
   i11 = i8 | 0;
   i3 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i11 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if (i6) {
  return;
 }
 i6 = i5 | 0;
 i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  return;
 } else {
  HEAP32[i6 >> 2] = i8;
  return;
 }
}
function __ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 i4 = _strlen(i3 | 0) | 0;
 i5 = i1 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = _strlen(i6 | 0) | 0;
 if ((i7 | 0) != 0) {
  i8 = 0;
  while (1) {
   HEAP16[i2 + (i8 << 1) >> 1] = HEAPU8[i6 + i8 | 0] | 0;
   i8 = i8 + 1 | 0;
   if (i8 >>> 0 >= i7 >>> 0) {
    break;
   }
  }
 }
 i8 = i1 + 4 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i9 = 0;
   i10 = _strlen(HEAP32[i5 >> 2] | 0) | 0;
  } else {
   i6 = HEAP32[i1 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i1 + 16 >> 2] & 32 | 0) == 0) {
     i11 = HEAP32[i1 + 8 >> 2] | 0;
     if ((i6 | 0) == 0) {
      break;
     } else {
      i12 = 0;
     }
     while (1) {
      HEAP16[i2 + (i12 + i7 << 1) >> 1] = HEAP16[i11 + (i12 << 1) >> 1] | 0;
      i12 = i12 + 1 | 0;
      if (i12 >>> 0 >= i6 >>> 0) {
       break;
      }
     }
    } else {
     i11 = HEAP32[i1 + 8 >> 2] | 0;
     if ((i6 | 0) == 0) {
      break;
     } else {
      i13 = 0;
     }
     while (1) {
      HEAP16[i2 + (i13 + i7 << 1) >> 1] = HEAPU8[i11 + i13 | 0] | 0;
      i13 = i13 + 1 | 0;
      if (i13 >>> 0 >= i6 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i6 = HEAP32[i8 >> 2] | 0;
   i11 = _strlen(HEAP32[i5 >> 2] | 0) | 0;
   if ((i6 | 0) == 0) {
    i9 = 0;
    i10 = i11;
    break;
   }
   i9 = HEAP32[i6 + 4 >> 2] | 0;
   i10 = i11;
  }
 } while (0);
 i5 = i9 + i10 | 0;
 if ((i4 | 0) == 0) {
  return;
 } else {
  i14 = 0;
 }
 while (1) {
  HEAP16[i2 + (i5 + i14 << 1) >> 1] = HEAPU8[i3 + i14 | 0] | 0;
  i14 = i14 + 1 | 0;
  if (i14 >>> 0 >= i4 >>> 0) {
   break;
  }
 }
 return;
}
function __ZN3WTF6VectorIPN7WebCore10SuffixTreeINS1_13ASCIICodebookEE4NodeELj128ENS_15CrashOnOverflowEE4fillERKS6_j(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if (i5 >>> 0 > i3 >>> 0) {
   HEAP32[i4 >> 2] = i3;
   i6 = i3;
  } else {
   i7 = i1 + 4 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   if (i8 >>> 0 >= i3 >>> 0) {
    i6 = i5;
    break;
   }
   do {
    if ((i8 | 0) != 0) {
     if ((i5 | 0) != 0) {
      HEAP32[i4 >> 2] = 0;
     }
     i9 = i1 | 0;
     i10 = HEAP32[i9 >> 2] | 0;
     i11 = i1 + 12 | 0;
     if ((i11 | 0) == (i10 | 0) | (i10 | 0) == 0) {
      i12 = i10;
     } else {
      HEAP32[i9 >> 2] = 0;
      HEAP32[i7 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i10);
      i12 = HEAP32[i9 >> 2] | 0;
     }
     if ((i12 | 0) != 0) {
      break;
     }
     HEAP32[i9 >> 2] = i11;
     HEAP32[i7 >> 2] = 128;
    }
   } while (0);
   __ZN3WTF6VectorIPN7WebCore10SuffixTreeINS1_13ASCIICodebookEE4NodeELj128ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i3);
   i6 = HEAP32[i4 >> 2] | 0;
  }
 } while (0);
 i12 = i1 | 0;
 i1 = i6 << 2;
 if ((i1 | 0) > 0) {
  i5 = i1 >> 2;
  i1 = HEAP32[i12 >> 2] | 0;
  while (1) {
   HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
   i7 = i5 - 1 | 0;
   if ((i7 | 0) > 0) {
    i5 = i7;
    i1 = i1 + 4 | 0;
   } else {
    break;
   }
  }
  i13 = HEAP32[i4 >> 2] | 0;
 } else {
  i13 = i6;
 }
 i6 = HEAP32[i12 >> 2] | 0;
 i12 = i6 + (i3 << 2) | 0;
 if ((i13 | 0) == (i3 | 0)) {
  HEAP32[i4 >> 2] = i3;
  return;
 }
 i1 = i6 + (i13 << 2) | 0;
 while (1) {
  HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
  i1 = i1 + 4 | 0;
  if ((i1 | 0) == (i12 | 0)) {
   break;
  }
 }
 HEAP32[i4 >> 2] = i3;
 return;
}
function __ZN3WTF12StringAppendINS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_E7writeToEPh(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 i4 = _strlen(i3 | 0) | 0;
 __ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPh(i1 | 0, i2);
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = _strlen(i6 | 0) | 0;
 i8 = i1 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = _strlen(i9 | 0) | 0;
 i11 = i1 + 4 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = 0;
 } else {
  i13 = HEAP32[i12 + 4 >> 2] | 0;
 }
 i14 = i10 + i7 + i13 | 0;
 i13 = i1 + 12 | 0;
 i1 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i15 = i6;
   i16 = i9;
   i17 = i12;
  } else {
   i7 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i15 = i6;
    i16 = i9;
    i17 = i12;
    break;
   } else {
    i18 = 0;
   }
   while (1) {
    HEAP8[i2 + (i14 + i18) | 0] = HEAP8[i10 + i18 | 0] | 0;
    i18 = i18 + 1 | 0;
    if (i18 >>> 0 >= i7 >>> 0) {
     break;
    }
   }
   i15 = HEAP32[i5 >> 2] | 0;
   i16 = HEAP32[i8 >> 2] | 0;
   i17 = HEAP32[i11 >> 2] | 0;
  }
 } while (0);
 i11 = _strlen(i15 | 0) | 0;
 i15 = _strlen(i16 | 0) | 0;
 if ((i17 | 0) == 0) {
  i19 = 0;
 } else {
  i19 = HEAP32[i17 + 4 >> 2] | 0;
 }
 i17 = i15 + i11 + i19 | 0;
 i19 = HEAP32[i13 >> 2] | 0;
 if ((i19 | 0) == 0) {
  i20 = 0;
  i21 = i17 + i20 | 0;
  i22 = i2 + i21 | 0;
  _memcpy(i22 | 0, i3 | 0, i4) | 0;
  return;
 }
 i20 = HEAP32[i19 + 4 >> 2] | 0;
 i21 = i17 + i20 | 0;
 i22 = i2 + i21 | 0;
 _memcpy(i22 | 0, i3 | 0, i4) | 0;
 return;
}
function __ZN3WTFplINS_12StringAppendINS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_S4_EENS1_INS1_IT_T0_EET1_EERKSA_SB_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 i6 = (i5 | 0) == 0;
 if (!i6) {
  i7 = i5 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i2 + 12 >> 2] | 0;
 i9 = (i8 | 0) == 0;
 if (!i9) {
  i10 = i8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = HEAP32[i2 + 16 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = (i2 | 0) == 0;
 if (!i3) {
  i11 = i2 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 HEAP32[i1 >> 2] = i4;
 HEAP32[i1 + 4 >> 2] = i5;
 if (!i6) {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 8 >> 2] = i7;
 HEAP32[i1 + 12 >> 2] = i8;
 if (!i9) {
  i7 = i8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 16 >> 2] = i10;
 HEAP32[i1 + 20 >> 2] = i2;
 do {
  if (!i3) {
   i1 = i2 | 0;
   i10 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = i10 + 2;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i1 >> 2] = i10;
    break;
   }
  }
 } while (0);
 do {
  if (!i9) {
   i2 = i8 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i2 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if (i6) {
  return;
 }
 i6 = i5 | 0;
 i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  return;
 } else {
  HEAP32[i6 >> 2] = i8;
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
function __ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPh(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 i4 = _strlen(i3 | 0) | 0;
 i5 = i1 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = _strlen(i6 | 0) | 0;
 _memcpy(i2 | 0, i6 | 0, i7) | 0;
 i6 = i1 + 4 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i8 = 0;
   i9 = _strlen(HEAP32[i5 >> 2] | 0) | 0;
  } else {
   i10 = HEAP32[i1 + 4 >> 2] | 0;
   i11 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i12 = i1;
    i13 = _strlen(HEAP32[i5 >> 2] | 0) | 0;
   } else {
    i14 = 0;
    while (1) {
     HEAP8[i2 + (i14 + i7) | 0] = HEAP8[i11 + i14 | 0] | 0;
     i14 = i14 + 1 | 0;
     if (i14 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
    i10 = HEAP32[i6 >> 2] | 0;
    i14 = _strlen(HEAP32[i5 >> 2] | 0) | 0;
    if ((i10 | 0) == 0) {
     i8 = 0;
     i9 = i14;
     break;
    } else {
     i12 = i10;
     i13 = i14;
    }
   }
   i8 = HEAP32[i12 + 4 >> 2] | 0;
   i9 = i13;
  }
 } while (0);
 _memcpy(i2 + (i8 + i9) | 0, i3 | 0, i4) | 0;
 return;
}
function __ZN7WebCore10XSSAuditor21decodedSnippetForNameERKNS_18FilterTokenRequestE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i3 | 0;
 __ZN7WebCore17HTMLSourceTracker14sourceForTokenERKNS_9HTMLTokenE(i6, HEAP32[i3 + 4 >> 2] | 0, HEAP32[i7 >> 2] | 0);
 i3 = i6 | 0;
 __ZN7WebCoreL17fullyDecodeStringERKN3WTF6StringERKNS_12TextEncodingE(i5, HEAP32[i3 >> 2] | 0, i2 + 84 | 0);
 __ZNK3WTF6String9substringEjj(i1, i5, 0, (HEAP32[(HEAP32[i7 >> 2] | 0) + 24 >> 2] | 0) + 1 | 0);
 i7 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i5 = i7 | 0;
   i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i5 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i3 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i7 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i7);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i3 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN3WTF12StringAppendINS0_INS0_IPKcNS_6StringEEES2_EES3_E7writeToEPt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 __ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPt(i1 | 0, i2);
 i3 = _strlen(HEAP32[i1 + 8 >> 2] | 0) | 0;
 i4 = _strlen(HEAP32[i1 >> 2] | 0) | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
 } else {
  i6 = HEAP32[i5 + 4 >> 2] | 0;
 }
 i5 = i4 + i3 + i6 | 0;
 i6 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 if ((HEAP32[i6 + 16 >> 2] & 32 | 0) == 0) {
  i3 = HEAP32[i6 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i7 = 0;
  }
  while (1) {
   HEAP16[i2 + (i7 + i5 << 1) >> 1] = HEAP16[i3 + (i7 << 1) >> 1] | 0;
   i7 = i7 + 1 | 0;
   if (i7 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 } else {
  i7 = HEAP32[i6 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i8 = 0;
  }
  while (1) {
   HEAP16[i2 + (i8 + i5 << 1) >> 1] = HEAPU8[i7 + i8 | 0] | 0;
   i8 = i8 + 1 | 0;
   if (i8 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 }
}
function __ZN3WTF6VectorIPN7WebCore10SuffixTreeINS1_13ASCIICodebookEE4NodeELj128ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if (i2 >>> 0 > 128 >>> 0) {
   if (i2 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   } else {
    i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
    HEAP32[i3 >> 2] = i7 >>> 2;
    i8 = __ZN3WTF10fastMallocEj(i7) | 0;
    HEAP32[i4 >> 2] = i8;
    i9 = i8;
    i10 = i1 + 12 | 0;
    break;
   }
  } else {
   i8 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i8;
   HEAP32[i3 >> 2] = 128;
   i9 = i8;
   i10 = i8;
  }
 } while (0);
 i1 = i5;
 _memcpy(i9 | 0, i1 | 0, i6 << 2) | 0;
 if ((i10 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore10SuffixTreeINS_13ASCIICodebookEE4NodeD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i1 | 0;
   i5 = 0;
   i6 = i3;
   while (1) {
    i7 = HEAP32[(HEAP32[i4 >> 2] | 0) + (i5 << 2) >> 2] | 0;
    do {
     if ((i7 | 0) == 0) {
      i8 = i6;
     } else {
      if ((HEAP8[i7 + 524 | 0] & 1) != 0) {
       i8 = i6;
       break;
      }
      __ZN7WebCore10SuffixTreeINS_13ASCIICodebookEE4NodeD2Ev(i7);
      __ZdlPv(i7);
      i8 = HEAP32[i2 >> 2] | 0;
     }
    } while (0);
    i7 = i5 + 1 | 0;
    if (i7 >>> 0 < i8 >>> 0) {
     i5 = i7;
     i6 = i8;
    } else {
     break;
    }
   }
   if ((i8 | 0) == 0) {
    break;
   }
   HEAP32[i2 >> 2] = 0;
  }
 } while (0);
 i2 = i1 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 if ((i1 + 12 | 0) == (i8 | 0) | (i8 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN3WTF12StringAppendINS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES3_E7writeToEPh(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 __ZN3WTF12StringAppendINS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_E7writeToEPh(i1 | 0, i2);
 i3 = _strlen(HEAP32[i1 + 16 >> 2] | 0) | 0;
 i4 = _strlen(HEAP32[i1 + 8 >> 2] | 0) | 0;
 i5 = _strlen(HEAP32[i1 >> 2] | 0) | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = HEAP32[i6 + 4 >> 2] | 0;
 }
 i6 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i8 = 0;
 } else {
  i8 = HEAP32[i6 + 4 >> 2] | 0;
 }
 i6 = i4 + i3 + i5 + i7 + i8 | 0;
 i8 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i8 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i8 + 4 >> 2] | 0;
 i7 = HEAP32[i8 + 8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 } else {
  i9 = 0;
 }
 while (1) {
  HEAP8[i2 + (i6 + i9) | 0] = HEAP8[i7 + i9 | 0] | 0;
  i9 = i9 + 1 | 0;
  if (i9 >>> 0 >= i1 >>> 0) {
   break;
  }
 }
 return;
}
function __ZN3WTF6VectorItLj256ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if (i2 >>> 0 > 256 >>> 0) {
   if ((i2 | 0) < 0) {
    _WTFCrash();
   } else {
    i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 1) | 0;
    HEAP32[i3 >> 2] = i7 >>> 1;
    i8 = __ZN3WTF10fastMallocEj(i7) | 0;
    HEAP32[i4 >> 2] = i8;
    i9 = i8;
    i10 = i1 + 12 | 0;
    break;
   }
  } else {
   i8 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i8;
   HEAP32[i3 >> 2] = 256;
   i9 = i8;
   i10 = i8;
  }
 } while (0);
 i1 = i5;
 _memcpy(i9 | 0, i1 | 0, i6 << 1) | 0;
 if ((i10 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if (i2 >>> 0 > 32 >>> 0) {
   if ((i2 | 0) < 0) {
    _WTFCrash();
   } else {
    i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 1) | 0;
    HEAP32[i3 >> 2] = i7 >>> 1;
    i8 = __ZN3WTF10fastMallocEj(i7) | 0;
    HEAP32[i4 >> 2] = i8;
    i9 = i8;
    i10 = i1 + 12 | 0;
    break;
   }
  } else {
   i8 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i8;
   HEAP32[i3 >> 2] = 32;
   i9 = i8;
   i10 = i8;
  }
 } while (0);
 i1 = i5;
 _memcpy(i9 | 0, i1 | 0, i6 << 1) | 0;
 if ((i10 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore10XSSAuditor14filterEndTokenERKNS_18FilterTokenRequestE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9scriptTagE >> 2] | 0) + 12 >> 2] | 0;
 i4 = HEAP32[i3 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   if ((i4 | 0) == 0) {
    break;
   }
   return;
  } else {
   i5 = i2 + 4 | 0;
   if ((i4 | 0) != (HEAP32[i5 >> 2] | 0)) {
    return;
   }
   i6 = HEAP32[i3 + 16 >> 2] | 0;
   if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
    i7 = HEAP32[i2 + 8 >> 2] | 0;
    i8 = i4;
   } else {
    i9 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i2) | 0;
    i7 = i9;
    i8 = HEAP32[i5 >> 2] | 0;
   }
   if ((_memcmp(i6 | 0, i7 | 0, i8 << 1 | 0) | 0) == 0) {
    break;
   }
   return;
  }
 } while (0);
 i8 = i1 + 80 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) - 1;
 return;
}
function __ZN7WebCore10XSSAuditor15filterMetaTokenERKNS_18FilterTokenRequestE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = __ZN7WebCore10XSSAuditor24eraseAttributeIfInjectedERKNS_18FilterTokenRequestERKNS_13QualifiedNameERKN3WTF6StringENS0_13AttributeKindE(i1, i2, __ZN7WebCore9HTMLNames14http_equivAttrE, i4, 0) | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return i6 | 0;
 }
 i5 = i4 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i3;
  return i6 | 0;
 } else {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i3;
  return i6 | 0;
 }
 return 0;
}
function __ZN7WebCore10XSSAuditor15filterBaseTokenERKNS_18FilterTokenRequestE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = __ZN7WebCore10XSSAuditor24eraseAttributeIfInjectedERKNS_18FilterTokenRequestERKNS_13QualifiedNameERKN3WTF6StringENS0_13AttributeKindE(i1, i2, __ZN7WebCore9HTMLNames8hrefAttrE, i4, 0) | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return i6 | 0;
 }
 i5 = i4 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i3;
  return i6 | 0;
 } else {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i3;
  return i6 | 0;
 }
 return 0;
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
function __ZNK7WebCore10XSSAuditor27isSafeToSendToAnotherThreadEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if (!(__ZNK7WebCore3URL27isSafeToSendToAnotherThreadEv(i1 | 0) | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 if (!(__ZNK3WTF6String27isSafeToSendToAnotherThreadEv(i1 + 60 | 0) | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 if (!(__ZNK3WTF6String27isSafeToSendToAnotherThreadEv(i1 + 64 | 0) | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = __ZNK3WTF6String27isSafeToSendToAnotherThreadEv(i1 + 76 | 0) | 0;
 return i2 | 0;
}
function __ZN7WebCore10XSSAuditorC2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i1 | 0);
 HEAP8[i1 + 48 | 0] = 0;
 HEAP32[i1 + 52 >> 2] = 3;
 HEAP8[i1 + 56 | 0] = 0;
 HEAP8[i1 + 57 | 0] = 0;
 _memset(i1 + 60 | 0, 0, 24) | 0;
 i2 = __ZN7WebCore12UTF8EncodingEv() | 0;
 i3 = i1 + 84 | 0;
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i3 + 4 >> 2] = i1;
 return;
}
function __ZN7WebCore10XSSAuditorC1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i1 | 0);
 HEAP8[i1 + 48 | 0] = 0;
 HEAP32[i1 + 52 >> 2] = 3;
 HEAP8[i1 + 56 | 0] = 0;
 HEAP8[i1 + 57 | 0] = 0;
 _memset(i1 + 60 | 0, 0, 24) | 0;
 i2 = __ZN7WebCore12UTF8EncodingEv() | 0;
 i3 = i1 + 84 | 0;
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i3 + 4 >> 2] = i1;
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
function __ZN7WebCore10XSSAuditor17filterButtonTokenERKNS_18FilterTokenRequestE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN7WebCore8blankURLEv() | 0;
 return __ZN7WebCore10XSSAuditor24eraseAttributeIfInjectedERKNS_18FilterTokenRequestERKNS_13QualifiedNameERKN3WTF6StringENS0_13AttributeKindE(i1, i2, __ZN7WebCore9HTMLNames14formactionAttrE, i3, 1) | 0;
}
function __ZN7WebCore10XSSAuditor16filterInputTokenERKNS_18FilterTokenRequestE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN7WebCore8blankURLEv() | 0;
 return __ZN7WebCore10XSSAuditor24eraseAttributeIfInjectedERKNS_18FilterTokenRequestERKNS_13QualifiedNameERKN3WTF6StringENS0_13AttributeKindE(i1, i2, __ZN7WebCore9HTMLNames14formactionAttrE, i3, 1) | 0;
}
function __ZN7WebCore10XSSAuditor15filterFormTokenERKNS_18FilterTokenRequestE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN7WebCore8blankURLEv() | 0;
 return __ZN7WebCore10XSSAuditor24eraseAttributeIfInjectedERKNS_18FilterTokenRequestERKNS_13QualifiedNameERKN3WTF6StringENS0_13AttributeKindE(i1, i2, __ZN7WebCore9HTMLNames10actionAttrE, i3, 0) | 0;
}
function __ZN7WebCore14isNotHTMLSpaceEt(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 L1 : do {
  if ((i1 & 65535) >>> 0 < 33 >>> 0) {
   switch (i1 << 16 >> 16) {
   case 32:
   case 10:
   case 9:
   case 13:
   case 12:
    {
     i2 = 0;
     break L1;
     break;
    }
   default:
    {}
   }
   i2 = 1;
  } else {
   i2 = 1;
  }
 } while (0);
 return i2 | 0;
}
function _memcmp(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 while ((i4 | 0) < (i3 | 0)) {
  i5 = HEAPU8[i1 + i4 | 0] | 0;
  i6 = HEAPU8[i2 + i4 | 0] | 0;
  if ((i5 | 0) != (i6 | 0)) return ((i5 | 0) > (i6 | 0) ? 1 : -1) | 0;
  i4 = i4 + 1 | 0;
 }
 return 0;
}
function __ZN7WebCoreL22isTerminatingCharacterEt(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 switch (i1 << 16 >> 16) {
 case 38:
 case 47:
 case 34:
 case 39:
 case 60:
 case 62:
 case 44:
  {
   i2 = 1;
   break;
  }
 default:
  {
   i2 = 0;
  }
 }
 return i2 | 0;
}
function __ZN7WebCoreL23isNonCanonicalCharacterEt(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((i1 << 16 >> 16 | 0) == 92 | (i1 << 16 >> 16 | 0) == 48 | (i1 << 16 >> 16 | 0) == 0) {
  i2 = 1;
 } else {
  i2 = (i1 & 65535) >>> 0 > 126 >>> 0;
 }
 return i2 | 0;
}
function __ZN7WebCoreL22isRequiredForInjectionEt(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((i1 << 16 >> 16 | 0) == 39 | (i1 << 16 >> 16 | 0) == 34 | (i1 << 16 >> 16 | 0) == 60 | (i1 << 16 >> 16 | 0) == 62) {
  i2 = 1;
 } else {
  i2 = 0;
 }
 return i2 | 0;
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
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function __ZN7WebCore10XSSAuditor15initForFragmentEv(i1) {
 i1 = i1 | 0;
 HEAP32[i1 + 72 >> 2] = 1;
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 15](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 3](i2 | 0);
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b3() {
 abort(3);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore10XSSAuditorC2Ev,b1];
  var FUNCTION_TABLE_ii = [b2,b2,__ZN7WebCore14isNotHTMLSpaceEt,b2,__ZN7WebCoreL23isNonCanonicalCharacterEt,b2,__ZN7WebCoreL22isRequiredForInjectionEt,b2,__ZN7WebCoreL22isTerminatingCharacterEt,b2,b2,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _memcmp: _memcmp, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames9scriptTagE": __ZN7WebCore9HTMLNames9scriptTagE, "__ZN7WebCore9HTMLNames8embedTagE": __ZN7WebCore9HTMLNames8embedTagE, "__ZN7WebCore9HTMLNames9iframeTagE": __ZN7WebCore9HTMLNames9iframeTagE, "__ZN7WebCore9HTMLNames7formTagE": __ZN7WebCore9HTMLNames7formTagE, "__ZN7WebCore9HTMLNames11classidAttrE": __ZN7WebCore9HTMLNames11classidAttrE, "__ZN7WebCore9HTMLNames7baseTagE": __ZN7WebCore9HTMLNames7baseTagE, "__ZN7WebCore9HTMLNames9valueAttrE": __ZN7WebCore9HTMLNames9valueAttrE, "__ZN7WebCore9HTMLNames8dataAttrE": __ZN7WebCore9HTMLNames8dataAttrE, "__ZN7WebCore9HTMLNames10srcdocAttrE": __ZN7WebCore9HTMLNames10srcdocAttrE, "__ZN7WebCore9HTMLNames10actionAttrE": __ZN7WebCore9HTMLNames10actionAttrE, "__ZN7WebCore9HTMLNames9buttonTagE": __ZN7WebCore9HTMLNames9buttonTagE, "__ZN7WebCore9HTMLNames8codeAttrE": __ZN7WebCore9HTMLNames8codeAttrE, "__ZN7WebCore9HTMLNames8nameAttrE": __ZN7WebCore9HTMLNames8nameAttrE, "__ZN7WebCore9HTMLNames7metaTagE": __ZN7WebCore9HTMLNames7metaTagE, "__ZN7WebCore9HTMLNames14formactionAttrE": __ZN7WebCore9HTMLNames14formactionAttrE, "__ZN7WebCore9HTMLNames10objectAttrE": __ZN7WebCore9HTMLNames10objectAttrE, "__ZN7WebCore9HTMLNames9appletTagE": __ZN7WebCore9HTMLNames9appletTagE, "__ZN7WebCore9HTMLNames7srcAttrE": __ZN7WebCore9HTMLNames7srcAttrE, "__ZN7WebCore9HTMLNames9objectTagE": __ZN7WebCore9HTMLNames9objectTagE, "__ZN7WebCore9HTMLNames8paramTagE": __ZN7WebCore9HTMLNames8paramTagE, "__ZN7WebCore10XLinkNames17xlinkNamespaceURIE": __ZN7WebCore10XLinkNames17xlinkNamespaceURIE, "__ZN7WebCore9HTMLNames8inputTagE": __ZN7WebCore9HTMLNames8inputTagE, "__ZN7WebCore9HTMLNames8typeAttrE": __ZN7WebCore9HTMLNames8typeAttrE, "__ZN7WebCore8SVGNames10valuesAttrE": __ZN7WebCore8SVGNames10valuesAttrE, "__ZN7WebCore10XLinkNames8hrefAttrE": __ZN7WebCore10XLinkNames8hrefAttrE, "__ZN7WebCore9HTMLNames8hrefAttrE": __ZN7WebCore9HTMLNames8hrefAttrE, "__ZN7WebCore9HTMLNames14http_equivAttrE": __ZN7WebCore9HTMLNames14http_equivAttrE }, buffer);
var _memcmp = Module["_memcmp"] = asm["_memcmp"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore10XSSAuditor17filterObjectTokenERKNS_18FilterTokenRequestE","__ZN3WTF6VectorIPN7WebCore10SuffixTreeINS1_13ASCIICodebookEE4NodeELj128ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN3WTFplINS_12StringAppendINS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_S4_EENS1_INS1_IT_T0_EET1_EERKSA_SB_","__ZN7WebCore10XSSAuditor20isContainedInRequestERKN3WTF6StringE","__ZN7WebCore10XSSAuditor20isLikelySafeResourceERKN3WTF6StringE","__ZN7WebCore10XSSAuditor15initForFragmentEv","_memset","__ZN3WTF12StringAppendINS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_E7writeToEPh","__ZN7WebCore10XSSAuditor24eraseAttributeIfInjectedERKNS_18FilterTokenRequestERKNS_13QualifiedNameERKN3WTF6StringENS0_13AttributeKindE","__ZN3WTFplINS_12StringAppendINS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EES4_S3_EENS1_INS1_IT_T0_EET1_EERKSB_SC_","__ZN3WTF12StringAppendINS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES3_E7writeToEPh","__ZN7WebCore21decodeEscapeSequencesINS_17URLEscapeSequenceEEEN3WTF6StringERKS3_RKNS_12TextEncodingE","__ZN7WebCore10XSSAuditor15filterBaseTokenERKNS_18FilterTokenRequestE","__ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPt","__ZN3WTF12StringAppendINS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES3_E7writeToEPt","__ZN7WebCore10SuffixTreeINS_13ASCIICodebookEE4NodeD2Ev","__ZN7WebCore21decodeEscapeSequencesINS_26Unicode16BitEscapeSequenceEEEN3WTF6StringERKS3_RKNS_12TextEncodingE","__ZN7WebCoreL17fullyDecodeStringERKN3WTF6StringERKNS_12TextEncodingE","__ZN7WebCoreL21findAttributeWithNameERKNS_9HTMLTokenERKNS_13QualifiedNameERj","_memcpy","__ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPh","__ZN7WebCore10XSSAuditor34eraseDangerousAttributesIfInjectedERKNS_18FilterTokenRequestE","__ZN7WebCore10XSSAuditor17filterAppletTokenERKNS_18FilterTokenRequestE","__ZNK3WTF12StringAppendINS0_INS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES3_EES2_EcvS3_Ev","__ZNK7WebCore10XSSAuditor27isSafeToSendToAnotherThreadEv","__ZN7WebCore10XSSAuditor16filterEmbedTokenERKNS_18FilterTokenRequestE","__ZN7WebCore14isNotHTMLSpaceEt","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN3WTF13StringBuilder6appendERKNS_6StringE","_memcmp","__ZN7WebCore10XSSAuditor11filterTokenERKNS_18FilterTokenRequestE","__ZN7WebCore10XSSAuditor20filterCharacterTokenERKNS_18FilterTokenRequestE","__ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EES4_EES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCoreL22isRequiredForInjectionEt","__ZN7WebCoreL22isTerminatingCharacterEt","__ZN7WebCore10XSSAuditor27decodedSnippetForJavaScriptERKNS_18FilterTokenRequestE","__ZN7WebCore10XSSAuditor17filterIframeTokenERKNS_18FilterTokenRequestE","__ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore10SuffixTreeINS_13ASCIICodebookEE5buildERKN3WTF6StringE","__ZN7WebCore10XSSAuditor14filterEndTokenERKNS_18FilterTokenRequestE","__ZN7WebCore10XSSAuditor15filterFormTokenERKNS_18FilterTokenRequestE","__ZN7WebCore10XSSAuditor15filterMetaTokenERKNS_18FilterTokenRequestE","__ZN7WebCore10XSSAuditor16filterParamTokenERKNS_18FilterTokenRequestE","__ZN7WebCore10XSSAuditor17filterButtonTokenERKNS_18FilterTokenRequestE","__ZN3WTF6VectorItLj256ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore26Unicode16BitEscapeSequence12findEndOfRunERKN3WTF6StringEjj","__ZN7WebCore10XSSAuditor26decodedSnippetForAttributeERKNS_18FilterTokenRequestERKNS_9HTMLToken9AttributeENS0_13AttributeKindE","__ZN3WTF12StringAppendINS0_INS0_IPKcNS_6StringEEES2_EES3_E7writeToEPt","__ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore10XSSAuditor16filterInputTokenERKNS_18FilterTokenRequestE","__ZN7WebCore26Unicode16BitEscapeSequence9decodeRunEPKtjRKNS_12TextEncodingE","__ZN3WTF6VectorIPN7WebCore10SuffixTreeINS1_13ASCIICodebookEE4NodeELj128ENS_15CrashOnOverflowEE4fillERKS6_j","__ZN7WebCore10XSSAuditor21decodedSnippetForNameERKNS_18FilterTokenRequestE","__ZN7WebCore10XSSAuditor4initEPNS_8DocumentEPNS_18XSSAuditorDelegateE","__ZN7WebCore10XSSAuditorC2Ev","__ZN7WebCore17URLEscapeSequence9decodeRunEPKtjRKNS_12TextEncodingE","__ZN7WebCore10XSSAuditor17filterScriptTokenERKNS_18FilterTokenRequestE","__ZN7WebCore10XSSAuditor16filterStartTokenERKNS_18FilterTokenRequestE","__ZN7WebCoreL23isNonCanonicalCharacterEt","__ZN7WebCore17URLEscapeSequence12findEndOfRunERKN3WTF6StringEjj"]

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
H_BASE = parentModule["_malloc"](96 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 96;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([109,117,108,116,105,69,110,116,114,121,0,0,0,0,0,0,117,110,105,113,117,101,0,0,78,111,116,32,97,110,32,111,98,106,101,99,116,46,0,0,73,68,66,79,98,106,101,99,116,83,116,111,114,101,32,115,99,114,105,112,116,32,101,120,101,99,117,116,105,111,110,32,99,111,110,116,101,120,116,32,105,115,32,117,110,97,118,97,105,108,97,98,108,101,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    return Module["dynCall_iiiiiii"](index,a1,a2,a3,a4,a5,a6);
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
  var invoke_ii=env.invoke_ii;
  var invoke_vi=env.invoke_vi;
  var invoke_iiiiiii=env.invoke_iiiiiii;
  var invoke_iiiii=env.invoke_iiiii;
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
function __ZN7WebCore16JSIDBObjectStore11createIndexEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, d36 = +0, i37 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 224 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 48 | 0;
 i8 = i4 + 56 | 0;
 i9 = i4 + 64 | 0;
 i10 = i4 + 104 | 0;
 i11 = i4 + 112 | 0;
 i12 = i4 + 120 | 0;
 i13 = i4 + 128 | 0;
 i14 = i4 + 136 | 0;
 i15 = i4 + 160 | 0;
 i16 = i4 + 168 | 0;
 i17 = i4 + 176 | 0;
 i18 = i4 + 184 | 0;
 i19 = i4 + 192 | 0;
 i20 = i4 + 200 | 0;
 i21 = i4 + 208 | 0;
 i22 = i4 + 216 | 0;
 i23 = i3 + 16 | 0;
 i24 = __ZNK7WebCore17JSDOMGlobalObject22scriptExecutionContextEv(HEAP32[(HEAP32[HEAP32[i23 >> 2] >> 2] | 0) + 4 >> 2] | 0) | 0;
 if ((i24 | 0) == 0) {
  i25 = HEAP32[(HEAP32[i23 >> 2] & -65536) + 1076 >> 2] | 0;
  __ZN3WTF6StringC1EPKc(i11, H_BASE + 48 | 0);
  i26 = __ZN3JSC2VM14throwExceptionEPNS_9ExecStateEPNS_8JSObjectE(i25, i3, __ZN3JSC20createReferenceErrorEPNS_9ExecStateERKN3WTF6StringE(i3, i11) | 0) | 0;
  HEAP32[i1 + 4 >> 2] = (i26 | 0) == 0 ? -6 : -5;
  HEAP32[i1 >> 2] = i26;
  i26 = HEAP32[i11 >> 2] | 0;
  if ((i26 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i11 = i26 | 0;
  i25 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
  if ((i25 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i26);
   STACKTOP = i4;
   return;
  } else {
   HEAP32[i11 >> 2] = i25;
   STACKTOP = i4;
   return;
  }
 }
 i25 = i3 + 32 | 0;
 if (((HEAP32[i25 >> 2] | 0) - 1 | 0) >>> 0 < 2 >>> 0) {
  i11 = HEAP32[(HEAP32[i23 >> 2] & -65536) + 1076 >> 2] | 0;
  i26 = __ZN3JSC2VM14throwExceptionEPNS_9ExecStateEPNS_8JSObjectE(i11, i3, __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i3) | 0) | 0;
  HEAP32[i1 + 4 >> 2] = (i26 | 0) == 0 ? -6 : -5;
  HEAP32[i1 >> 2] = i26;
  STACKTOP = i4;
  return;
 }
 i26 = i3 + 48 | 0;
 i11 = HEAP32[i26 >> 2] | 0;
 i27 = HEAP32[i26 + 4 >> 2] | 0;
 i26 = i13 | 0;
 HEAP32[i26 >> 2] = i11;
 HEAP32[i26 + 4 >> 2] = i27;
 i26 = i11;
 do {
  if ((i11 & 0 | 0) == 0 & (i27 & -1 | 0) == (-5 | 0)) {
   if ((HEAP8[(HEAP32[i26 >> 2] | 0) + 52 | 0] | 0) != 5) {
    i28 = 11;
    break;
   }
   i29 = i26;
  } else {
   i28 = 11;
  }
 } while (0);
 if ((i28 | 0) == 11) {
  i29 = __ZNK3JSC7JSValue16toStringSlowCaseEPNS_9ExecStateE(i13, i3) | 0;
 }
 i13 = i29 + 12 | 0;
 i26 = HEAP32[i13 >> 2] | 0;
 if ((i26 | 0) == 0) {
  __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i29, i3);
  i29 = HEAP32[i13 >> 2] | 0;
  i13 = i12 | 0;
  HEAP32[i13 >> 2] = i29;
  if ((i29 | 0) == 0) {
   i30 = i13;
  } else {
   i31 = i29;
   i32 = i13;
   i28 = 15;
  }
 } else {
  i13 = i12 | 0;
  HEAP32[i13 >> 2] = i26;
  i31 = i26;
  i32 = i13;
  i28 = 15;
 }
 if ((i28 | 0) == 15) {
  i28 = i31 | 0;
  HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 2;
  i30 = i32;
 }
 i32 = (HEAP32[(HEAP32[i23 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
 do {
  if ((HEAP32[i32 >> 2] & 0 | 0) == 0 & (HEAP32[i32 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
   if (((HEAP32[i25 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
    i28 = i3 + 56 | 0;
    i31 = HEAP32[i28 + 4 >> 2] | 0;
    i13 = i15 | 0;
    HEAP32[i13 >> 2] = HEAP32[i28 >> 2];
    HEAP32[i13 + 4 >> 2] = i31;
   } else {
    HEAP32[i15 + 4 >> 2] = -4;
    HEAP32[i15 >> 2] = 0;
   }
   __ZN7WebCore19idbKeyPathFromValueEPN3JSC9ExecStateENS0_7JSValueE(i14, i3, i15);
   i31 = (HEAP32[(HEAP32[i23 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   L35 : do {
    if ((HEAP32[i31 >> 2] & 0 | 0) == 0 & (HEAP32[i31 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
     do {
      if (((HEAP32[i25 >> 2] | 0) - 1 | 0) >>> 0 > 2 >>> 0) {
       i13 = i3 + 64 | 0;
       i28 = HEAP32[i13 >> 2] | 0;
       i26 = HEAP32[i13 + 4 >> 2] | 0;
       i13 = i16 | 0;
       HEAP32[i13 >> 2] = i28;
       HEAP32[i13 + 4 >> 2] = i26;
       i13 = i26;
       i26 = i28;
       i28 = i13 + 4 | 0;
       do {
        if ((i13 + 4 | 0) >>> 0 >= 2 >>> 0) {
         if ((i13 | 0) == -5) {
          if ((HEAPU8[(HEAP32[i26 >> 2] | 0) + 52 | 0] | 0) >>> 0 > 16 >>> 0) {
           break;
          }
         }
         __ZN3WTF6StringC1EPKc(i17, H_BASE + 32 | 0);
         i29 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateERKN3WTF6StringE(i3, i17) | 0;
         HEAP32[i1 + 4 >> 2] = (i29 | 0) == 0 ? -6 : -5;
         HEAP32[i1 >> 2] = i29;
         i29 = HEAP32[i17 >> 2] | 0;
         if ((i29 | 0) == 0) {
          break L35;
         }
         i27 = i29 | 0;
         i11 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
         if ((i11 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i29);
          break L35;
         } else {
          HEAP32[i27 >> 2] = i11;
          break L35;
         }
        }
       } while (0);
       if (i28 >>> 0 < 2 >>> 0) {
        i33 = 0;
        i34 = 0;
        break;
       }
       __ZN3JSC10Identifier3addEPNS_9ExecStateEPKc(i5, i3, H_BASE + 24 | 0);
       i26 = HEAP32[i5 >> 2] | 0;
       i13 = i16 | 0;
       i11 = HEAP32[i13 >> 2] | 0;
       i27 = HEAP32[i13 + 4 >> 2] | 0;
       HEAP32[i6 + 16 >> 2] = 0;
       HEAP32[i6 + 20 >> 2] = -1;
       i29 = i6 + 24 | 0;
       HEAP32[i29 >> 2] = i11;
       HEAP32[i29 + 4 >> 2] = i27;
       HEAP32[i7 >> 2] = i26;
       __ZNK3JSC7JSValue3getEPNS_9ExecStateENS_12PropertyNameERNS_12PropertySlotE(i18, i16, i3, i7, i6);
       i27 = HEAP32[i18 + 4 >> 2] | 0;
       do {
        if ((i27 | 0) == -1) {
         i35 = (HEAP32[i18 >> 2] | 0) != 0;
        } else {
         if (i27 >>> 0 < 4294967289 >>> 0) {
          d36 = +HEAPF64[i18 >> 3];
          i29 = d36 > +0;
          i35 = i29 | d36 < +0 & (i29 ^ 1);
          break;
         }
         if ((i27 | 0) == (-2 | 0)) {
          i35 = (HEAP32[i18 >> 2] | 0) != 0;
          break;
         } else if ((i27 | 0) != (-5 | 0)) {
          i35 = 0;
          break;
         }
         i29 = HEAP32[i18 >> 2] | 0;
         i11 = HEAP32[i29 >> 2] | 0;
         if ((HEAP8[i11 + 52 | 0] | 0) == 5) {
          i35 = __ZNK3JSC8JSString9toBooleanEv(i29) | 0;
          break;
         }
         if ((HEAP8[i11 + 53 | 0] & 1) == 0) {
          i35 = 1;
          break;
         }
         i35 = (HEAP32[i11 + 4 >> 2] | 0) != (HEAP32[(HEAP32[HEAP32[i23 >> 2] >> 2] | 0) + 4 >> 2] | 0);
        }
       } while (0);
       do {
        if ((i26 | 0) != 0) {
         i27 = i26 | 0;
         i28 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
         if ((i28 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i26);
          break;
         } else {
          HEAP32[i27 >> 2] = i28;
          break;
         }
        }
       } while (0);
       i26 = (HEAP32[(HEAP32[i23 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
       if (!((HEAP32[i26 >> 2] & 0 | 0) == 0 & (HEAP32[i26 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
        HEAP32[i1 + 4 >> 2] = -4;
        HEAP32[i1 >> 2] = 0;
        break L35;
       }
       __ZN3JSC10Identifier3addEPNS_9ExecStateEPKc(i8, i3, H_BASE + 8 | 0);
       i26 = HEAP32[i8 >> 2] | 0;
       i28 = HEAP32[i13 >> 2] | 0;
       i27 = HEAP32[i13 + 4 >> 2] | 0;
       HEAP32[i9 + 16 >> 2] = 0;
       HEAP32[i9 + 20 >> 2] = -1;
       i11 = i9 + 24 | 0;
       HEAP32[i11 >> 2] = i28;
       HEAP32[i11 + 4 >> 2] = i27;
       HEAP32[i10 >> 2] = i26;
       __ZNK3JSC7JSValue3getEPNS_9ExecStateENS_12PropertyNameERNS_12PropertySlotE(i19, i16, i3, i10, i9);
       i27 = HEAP32[i19 + 4 >> 2] | 0;
       do {
        if ((i27 | 0) == -1) {
         i37 = (HEAP32[i19 >> 2] | 0) != 0;
        } else {
         if (i27 >>> 0 < 4294967289 >>> 0) {
          d36 = +HEAPF64[i19 >> 3];
          i11 = d36 > +0;
          i37 = i11 | d36 < +0 & (i11 ^ 1);
          break;
         }
         if ((i27 | 0) == (-2 | 0)) {
          i37 = (HEAP32[i19 >> 2] | 0) != 0;
          break;
         } else if ((i27 | 0) != (-5 | 0)) {
          i37 = 0;
          break;
         }
         i11 = HEAP32[i19 >> 2] | 0;
         i28 = HEAP32[i11 >> 2] | 0;
         if ((HEAP8[i28 + 52 | 0] | 0) == 5) {
          i37 = __ZNK3JSC8JSString9toBooleanEv(i11) | 0;
          break;
         }
         if ((HEAP8[i28 + 53 | 0] & 1) == 0) {
          i37 = 1;
          break;
         }
         i37 = (HEAP32[i28 + 4 >> 2] | 0) != (HEAP32[(HEAP32[HEAP32[i23 >> 2] >> 2] | 0) + 4 >> 2] | 0);
        }
       } while (0);
       do {
        if ((i26 | 0) != 0) {
         i27 = i26 | 0;
         i13 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
         if ((i13 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i26);
          break;
         } else {
          HEAP32[i27 >> 2] = i13;
          break;
         }
        }
       } while (0);
       i26 = (HEAP32[(HEAP32[i23 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
       if ((HEAP32[i26 >> 2] & 0 | 0) == 0 & (HEAP32[i26 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
        i33 = i37;
        i34 = i35;
        break;
       }
       HEAP32[i1 + 4 >> 2] = -4;
       HEAP32[i1 >> 2] = 0;
       break L35;
      } else {
       HEAP32[i16 + 4 >> 2] = -4;
       HEAP32[i16 >> 2] = 0;
       i33 = 0;
       i34 = 0;
      }
     } while (0);
     HEAP32[i20 >> 2] = 0;
     i26 = HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0;
     __ZN7WebCore14IDBObjectStore11createIndexEPNS_22ScriptExecutionContextERKN3WTF6StringERKNS_10IDBKeyPathEbbRi(i22, HEAP32[i2 + 12 >> 2] | 0, i24, i12, i14, i34, i33, i20);
     i13 = i22 | 0;
     __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_8IDBIndexE(i21, i3, i26, HEAP32[i13 >> 2] | 0);
     i26 = HEAP32[i13 >> 2] | 0;
     do {
      if ((i26 | 0) != 0) {
       i13 = i26 + 4 | 0;
       i27 = i13 | 0;
       i28 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
       if ((i28 | 0) != 0) {
        HEAP32[i27 >> 2] = i28;
        break;
       }
       i28 = i13 - 4 | 0;
       if ((i28 | 0) == 0) {
        break;
       }
       __ZN7WebCore8IDBIndexD1Ev(i28);
       __ZN3WTF8fastFreeEPv(i28);
      }
     } while (0);
     __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i3, HEAP32[i20 >> 2] | 0);
     i26 = i21 | 0;
     i28 = HEAP32[i26 + 4 >> 2] | 0;
     i13 = i1 | 0;
     HEAP32[i13 >> 2] = HEAP32[i26 >> 2];
     HEAP32[i13 + 4 >> 2] = i28;
    } else {
     HEAP32[i1 + 4 >> 2] = -4;
     HEAP32[i1 >> 2] = 0;
    }
   } while (0);
   i31 = i14 + 16 | 0;
   i28 = HEAP32[i31 >> 2] | 0;
   i13 = i14 + 8 | 0;
   if ((i28 | 0) != 0) {
    i26 = HEAP32[i13 >> 2] | 0;
    i27 = i26 + (i28 << 2) | 0;
    i28 = i26;
    while (1) {
     i26 = HEAP32[i28 >> 2] | 0;
     do {
      if ((i26 | 0) != 0) {
       i11 = i26 | 0;
       i29 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
       if ((i29 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i26);
        break;
       } else {
        HEAP32[i11 >> 2] = i29;
        break;
       }
      }
     } while (0);
     i28 = i28 + 4 | 0;
     if ((i28 | 0) == (i27 | 0)) {
      break;
     }
    }
    HEAP32[i31 >> 2] = 0;
   }
   i27 = HEAP32[i13 >> 2] | 0;
   if ((i27 | 0) != 0) {
    HEAP32[i13 >> 2] = 0;
    HEAP32[i14 + 12 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i27);
   }
   i27 = HEAP32[i14 + 4 >> 2] | 0;
   if ((i27 | 0) == 0) {
    break;
   }
   i28 = i27 | 0;
   i26 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
   if ((i26 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i27);
    break;
   } else {
    HEAP32[i28 >> 2] = i26;
    break;
   }
  } else {
   HEAP32[i1 + 4 >> 2] = -4;
   HEAP32[i1 >> 2] = 0;
  }
 } while (0);
 i1 = HEAP32[i30 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i30 = i1 | 0;
 i14 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
 if ((i14 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i30 >> 2] = i14;
  STACKTOP = i4;
  return;
 }
}
function __ZNK3JSC7JSValue3getEPNS_9ExecStateENS_12PropertyNameERNS_12PropertySlotE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i7 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i7 >> 2];
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 i14 = i6 + 56 | 0;
 do {
  if ((HEAP32[i2 + 4 >> 2] | 0) == -5) {
   i15 = HEAP32[i2 >> 2] | 0;
   if ((HEAPU8[(HEAP32[i15 >> 2] | 0) + 52 | 0] | 0) >>> 0 > 16 >>> 0) {
    i16 = i15;
    break;
   }
   i15 = HEAP32[i2 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   HEAP32[i14 >> 2] = i17;
   if ((i17 | 0) == (HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 20884 >> 2] | 0) + 568 >> 2] | 0)) {
    i17 = HEAP32[i15 + 8 >> 2] | 0;
    if ((i17 | 0) < 0) {
     HEAPF64[tempDoublePtr >> 3] = +(i17 >>> 0 >>> 0);
     i18 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
     i19 = HEAP32[tempDoublePtr >> 2] | 0;
    } else {
     i18 = -1 | 0;
     i19 = i17 | 0;
    }
    i17 = i5 + 8 | 0;
    HEAP32[i17 >> 2] = i19;
    HEAP32[i17 + 4 >> 2] = i18;
    HEAP32[i5 >> 2] = 14;
    HEAP32[i5 + 32 >> 2] = 0;
    HEAP32[i5 + 16 >> 2] = 1;
    HEAP32[i5 + 20 >> 2] = -1;
    i20 = i18;
    i21 = i19;
   } else {
    i17 = __ZN3JSC12PropertyName7asIndexEv(i14) | 0;
    if (i17 >>> 0 >= (HEAP32[i15 + 8 >> 2] | 0) >>> 0) {
     i22 = 11;
     break;
    }
    i23 = __ZN3JSC8JSString8getIndexEPNS_9ExecStateEj(i15, i3, i17) | 0;
    i17 = (i23 | 0) == 0;
    i15 = (i17 ? 0 : 0) | i23;
    i23 = (i17 ? -6 : -5) | 0;
    i17 = i5 + 8 | 0;
    HEAP32[i17 >> 2] = i15;
    HEAP32[i17 + 4 >> 2] = i23;
    HEAP32[i5 >> 2] = 10;
    HEAP32[i5 + 32 >> 2] = 0;
    HEAP32[i5 + 16 >> 2] = 1;
    HEAP32[i5 + 20 >> 2] = -1;
    i20 = i23;
    i21 = i15;
   }
   i15 = i1 | 0;
   HEAP32[i15 >> 2] = i21;
   HEAP32[i15 + 4 >> 2] = i20;
   STACKTOP = i6;
   return;
  } else {
   i22 = 11;
  }
 } while (0);
 if ((i22 | 0) == 11) {
  i16 = __ZNK3JSC7JSValue19synthesizePrototypeEPNS_9ExecStateE(i2, i3) | 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 i4 = i3 + 16 | 0;
 i20 = i10 | 0;
 i21 = i12 | 0;
 i14 = i13 | 0;
 i19 = i16;
 while (1) {
  i24 = i19 | 0;
  i16 = HEAP32[i24 >> 2] | 0;
  if ((HEAP8[i16 + 53 | 0] & 32) == 0) {
   i18 = HEAP32[(HEAP32[i4 >> 2] & -65536) + 1076 >> 2] | 0;
   HEAP32[i20 >> 2] = i2;
   i25 = __ZN3JSC9Structure3getERNS_2VMENS_12PropertyNameERjRPNS_6JSCellE(i16, i18, i10, i8, i9) | 0;
   if ((i25 | 0) != -1) {
    i22 = 16;
    break;
   }
   HEAP32[i21 >> 2] = i2;
   if (__ZN3JSC8JSObject22getOwnPropertySlotSlowEPNS_9ExecStateENS_12PropertyNameERNS_12PropertySlotE(i19, i3, i12, i5) | 0) {
    break;
   }
  } else {
   i18 = HEAP32[i16 >> 2] | 0;
   if ((i18 | 0) != 0) {
    if ((i18 | 0) != (HEAP32[i18 >> 2] | 0)) {
     i22 = 25;
     break;
    }
   }
   i18 = HEAP32[(HEAP32[((HEAP32[(i19 & -65536) + 1048 >> 2] | 0) == 2 ? i19 + 8 | 0 : i16 + 32 | 0) >> 2] | 0) + 52 >> 2] | 0;
   HEAP32[i14 >> 2] = i2;
   if (FUNCTION_TABLE_iiiii[i18 & 1](i19, i3, i13, i5) | 0) {
    break;
   }
  }
  i18 = (HEAP32[i24 >> 2] | 0) + 8 | 0;
  i16 = HEAP32[i18 >> 2] | 0;
  if (!((i16 & 0 | 0) == 0 & (HEAP32[i18 + 4 >> 2] & -1 | 0) == (-5 | 0))) {
   i22 = 36;
   break;
  }
  i18 = i16;
  if ((HEAPU8[(HEAP32[i18 >> 2] | 0) + 52 | 0] | 0) >>> 0 <= 16 >>> 0) {
   i22 = 36;
   break;
  }
  i19 = i18;
 }
 L31 : do {
  if ((i22 | 0) == 16) {
   if ((i25 | 0) < 100) {
    i26 = i19 + (i25 + 1 << 3) | 0;
   } else {
    i26 = (HEAP32[i19 + 4 >> 2] | 0) - 8 + (99 - i25 << 3) | 0;
   }
   i13 = i26 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   i12 = HEAP32[i13 + 4 >> 2] | 0;
   i13 = i12;
   do {
    if ((HEAP8[(HEAP32[i24 >> 2] | 0) + 58 | 0] & 8) != 0 & ((i13 | 0) == (-5 | 0) & 0 == 0)) {
     if ((HEAP8[(HEAP32[i14 >> 2] | 0) + 52 | 0] | 0) != 8) {
      break;
     }
     i21 = i11 | 0;
     HEAP32[i21 >> 2] = i14 & -1;
     HEAP32[i21 + 4 >> 2] = i12 & 0 | -5;
     __ZN3JSC8JSObject22fillGetterPropertySlotERNS_12PropertySlotENS_7JSValueEji(i19, i5, i11, HEAP32[i8 >> 2] | 0, i25);
     break L31;
    }
   } while (0);
   i21 = HEAP32[i8 >> 2] | 0;
   i9 = i5 + 8 | 0;
   HEAP32[i9 >> 2] = i14 & -1;
   HEAP32[i9 + 4 >> 2] = i13 | i12 & 0;
   HEAP32[i5 >> 2] = i21;
   HEAP32[i5 + 32 >> 2] = i19;
   HEAP32[i5 + 16 >> 2] = 1;
   HEAP32[i5 + 20 >> 2] = i25;
  } else if ((i22 | 0) == 25) {
   _WTFCrash();
  } else if ((i22 | 0) == 36) {
   HEAP32[i1 + 4 >> 2] = -4;
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i6;
   return;
  }
 } while (0);
 i22 = HEAP32[i5 + 16 >> 2] | 0;
 if ((i22 | 0) == 1) {
  i25 = i5 + 8 | 0;
  i19 = HEAP32[i25 + 4 >> 2] | 0;
  i8 = i1 | 0;
  HEAP32[i8 >> 2] = HEAP32[i25 >> 2];
  HEAP32[i8 + 4 >> 2] = i19;
  STACKTOP = i6;
  return;
 } else if ((i22 | 0) == 4) {
  i19 = i5 + 8 | 0;
  i8 = HEAP32[i5 + 32 >> 2] | 0;
  i25 = (i8 | 0) == 0;
  i11 = i5 + 24 | 0;
  i24 = FUNCTION_TABLE_iiiiiii[HEAP32[i19 >> 2] & 1](i3, (i25 ? 0 : 0) | i8, (i25 ? -6 : -5) | 0, HEAP32[i11 >> 2] | 0, HEAP32[i11 + 4 >> 2] | 0, HEAP32[i19 + 4 >> 2] | 0) | 0;
  i19 = i1 | 0;
  HEAP32[i19 >> 2] = i24;
  HEAP32[i19 + 4 >> 2] = tempRet0;
  STACKTOP = i6;
  return;
 } else if ((i22 | 0) == 2) {
  __ZNK3JSC12PropertySlot14functionGetterEPNS_9ExecStateE(i1, i5, i3);
  STACKTOP = i6;
  return;
 } else {
  i22 = HEAP32[i5 + 8 >> 2] | 0;
  i19 = HEAP32[i5 + 32 >> 2] | 0;
  i24 = (i19 | 0) == 0;
  i11 = i5 + 24 | 0;
  i5 = HEAP32[i11 >> 2] | 0;
  i25 = HEAP32[i11 + 4 >> 2] | 0;
  HEAP32[i7 >> 2] = i2;
  i2 = FUNCTION_TABLE_iiiiiii[i22 & 1](i3, (i24 ? 0 : 0) | i19, (i24 ? -6 : -5) | 0, i5, i25, i7) | 0;
  i7 = i1 | 0;
  HEAP32[i7 >> 2] = i2;
  HEAP32[i7 + 4 >> 2] = tempRet0;
  STACKTOP = i6;
  return;
 }
}
function __ZN3JSC12PropertyName7asIndexEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 L1 : do {
  if ((i2 | 0) == 0) {
   i3 = -1;
  } else {
   if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
    i1 = HEAP32[i2 + 8 >> 2] | 0;
    i4 = HEAP32[i2 + 4 >> 2] | 0;
    if ((i4 | 0) == 0) {
     i3 = -1;
     break;
    }
    i5 = (HEAPU16[i1 >> 1] | 0) - 48 | 0;
    if (i5 >>> 0 > 9 >>> 0) {
     i3 = -1;
     break;
    }
    if ((i5 | 0) == 0 & i4 >>> 0 > 1 >>> 0) {
     i3 = -1;
     break;
    }
    i6 = i4 - 1 | 0;
    if ((i6 | 0) == 0) {
     i3 = i5;
     break;
    } else {
     i7 = i1;
     i8 = i5;
     i9 = i6;
    }
    while (1) {
     if (i8 >>> 0 > 429496729 >>> 0) {
      i3 = -1;
      break L1;
     }
     i6 = i7 + 2 | 0;
     i5 = (HEAPU16[i6 >> 1] | 0) - 48 | 0;
     if (i5 >>> 0 > 9 >>> 0) {
      i3 = -1;
      break L1;
     }
     i1 = _llvm_uadd_with_overflow_i32(i5 | 0, i8 * 10 & -1 | 0) | 0;
     if (tempRet0) {
      i3 = -1;
      break L1;
     }
     i5 = i1;
     i1 = i9 - 1 | 0;
     if ((i1 | 0) == 0) {
      i3 = i5;
      break;
     } else {
      i7 = i6;
      i8 = i5;
      i9 = i1;
     }
    }
   } else {
    i1 = HEAP32[i2 + 8 >> 2] | 0;
    i5 = HEAP32[i2 + 4 >> 2] | 0;
    if ((i5 | 0) == 0) {
     i3 = -1;
     break;
    }
    i6 = (HEAPU8[i1] | 0) - 48 | 0;
    if (i6 >>> 0 > 9 >>> 0) {
     i3 = -1;
     break;
    }
    if ((i6 | 0) == 0 & i5 >>> 0 > 1 >>> 0) {
     i3 = -1;
     break;
    }
    i4 = i5 - 1 | 0;
    if ((i4 | 0) == 0) {
     i3 = i6;
     break;
    } else {
     i10 = i6;
     i11 = i1;
     i12 = i4;
    }
    while (1) {
     if (i10 >>> 0 > 429496729 >>> 0) {
      i3 = -1;
      break L1;
     }
     i4 = i11 + 1 | 0;
     i1 = (HEAPU8[i4] | 0) - 48 | 0;
     if (i1 >>> 0 > 9 >>> 0) {
      i3 = -1;
      break L1;
     }
     i6 = _llvm_uadd_with_overflow_i32(i1 | 0, i10 * 10 & -1 | 0) | 0;
     if (tempRet0) {
      i3 = -1;
      break L1;
     }
     i1 = i6;
     i6 = i12 - 1 | 0;
     if ((i6 | 0) == 0) {
      i3 = i1;
      break;
     } else {
      i10 = i1;
      i11 = i4;
      i12 = i6;
     }
    }
   }
  }
 } while (0);
 return i3 | 0;
}
function __ZN3JSC8JSString8getIndexEPNS_9ExecStateEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = __ZN3JSC12JSRopeString16getIndexSlowCaseEPNS_9ExecStateEj(i1, i2, i3) | 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 i1 = HEAP32[(HEAP32[i2 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
 do {
  if ((HEAP32[i6 + 4 >> 2] | 0) >>> 0 > i3 >>> 0) {
   i2 = HEAP32[i6 + 16 >> 2] | 0;
   i8 = i6 + 8 | 0;
   if ((i2 & 32 | 0) != 0) {
    i9 = HEAP8[(HEAP32[i8 >> 2] | 0) + i3 | 0] | 0;
    break;
   }
   i10 = i8;
   i8 = HEAP16[(HEAP32[i10 >> 2] | 0) + (i3 << 1) >> 1] | 0;
   if ((i8 & 65535) >>> 0 < 256 >>> 0) {
    i9 = i8 & 255;
    break;
   }
   i8 = i6 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   if ((i2 & 3 | 0) == 2) {
    i11 = HEAP32[i6 + 12 >> 2] | 0;
   } else {
    i11 = i6;
   }
   i2 = __ZN3WTF10fastMallocEj(20) | 0;
   i8 = (HEAP32[i10 >> 2] | 0) + (i3 << 1) | 0;
   if ((i11 | 0) != 0) {
    i10 = i11 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   }
   HEAP32[i2 >> 2] = 2;
   HEAP32[i2 + 4 >> 2] = 1;
   HEAP32[i2 + 8 >> 2] = i8;
   HEAP32[i2 + 12 >> 2] = i11;
   HEAP32[i2 + 16 >> 2] = 2;
   i8 = i5 | 0;
   HEAP32[i8 >> 2] = i2;
   i2 = __ZN3JSC8JSString6createERNS_2VMEN3WTF10PassRefPtrINS3_10StringImplEEE(i1, i5) | 0;
   i10 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i8 = i10 | 0;
     i12 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i8 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i10 = i6 | 0;
   i12 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    i7 = i2;
    STACKTOP = i4;
    return i7 | 0;
   } else {
    HEAP32[i10 >> 2] = i12;
    i7 = i2;
    STACKTOP = i4;
    return i7 | 0;
   }
  } else {
   i9 = 0;
  }
 } while (0);
 i7 = HEAP32[i1 + 20932 + ((i9 & 255) << 2) >> 2] | 0;
 STACKTOP = i4;
 return i7 | 0;
}
function __ZN3JSC8JSString6createERNS_2VMEN3WTF10PassRefPtrINS3_10StringImplEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 i5 = i2 + 16 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 & 3 | 0) == 2) {
  i7 = i2;
  while (1) {
   i8 = HEAP32[i7 + 12 >> 2] | 0;
   i9 = i8 + 16 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 & 3 | 0) == 2) {
    i7 = i8;
   } else {
    i11 = i8;
    i12 = i9;
    i13 = i10;
    break;
   }
  }
 } else {
  i11 = i2;
  i12 = i5;
  i13 = i6;
 }
 if ((i13 & 8 | 0) == 0) {
  HEAP32[i12 >> 2] = i13 | 8;
  i14 = HEAP32[i11 + 4 >> 2] << (i13 >>> 5 & 1 ^ 1);
 } else {
  i14 = 0;
 }
 i13 = i1 + 6840 | 0;
 i11 = i13 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i15 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i13, 16) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i15 = i12;
 }
 i12 = i15;
 HEAP32[i12 >> 2] = 0;
 i11 = i15;
 i13 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = HEAP32[i1 + 20772 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i16 = 0;
  } else {
   if ((HEAP32[i3 + 4 >> 2] | 0) == -6) {
    i16 = 0;
    break;
   }
   i16 = HEAP32[i3 >> 2] | 0;
  }
 } while (0);
 HEAP32[i12 >> 2] = i16;
 i16 = i15 + 4 | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i15 + 12 >> 2] = i13;
 HEAP32[i15 + 8 >> 2] = i4;
 HEAP32[i16 >> 2] = (HEAP32[i13 + 16 >> 2] | 0) >>> 5 & 1;
 if (i14 >>> 0 <= 256 >>> 0) {
  i17 = i1 + 24784 | 0;
  i18 = HEAP32[i17 >> 2] | 0;
  i19 = i18 + 1 | 0;
  HEAP32[i17 >> 2] = i19;
  return i11 | 0;
 }
 __ZN3JSC4Heap29reportExtraMemoryCostSlowCaseEj((HEAP32[(i15 & -65536) + 1076 >> 2] | 0) + 16 | 0, i14);
 i17 = i1 + 24784 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 i19 = i18 + 1 | 0;
 HEAP32[i17 >> 2] = i19;
 return i11 | 0;
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
function dynCall_iiiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 return FUNCTION_TABLE_iiiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function b2(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(2);
 return 0;
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
function b3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(3);
 return 0;
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
function b4() {
 abort(4);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1];
  var FUNCTION_TABLE_iiiiiii = [b2,b2];
  var FUNCTION_TABLE_iiiii = [b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_vi: dynCall_vi, dynCall_iiiiiii: dynCall_iiiiiii, dynCall_iiiii: dynCall_iiiii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_vi": invoke_vi, "invoke_iiiiiii": invoke_iiiiiii, "invoke_iiiii": invoke_iiiii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = asm["dynCall_iiiiiii"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN3JSC12PropertyName7asIndexEv","_strlen","_memset","__ZNK3JSC7JSValue3getEPNS_9ExecStateENS_12PropertyNameERNS_12PropertySlotE","_memcpy","__ZN7WebCore16JSIDBObjectStore11createIndexEPN3JSC9ExecStateE","__ZN3JSC8JSString6createERNS_2VMEN3WTF10PassRefPtrINS3_10StringImplEEE","__ZN3JSC8JSString8getIndexEPNS_9ExecStateEj"]

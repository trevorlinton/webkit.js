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
H_BASE = parentModule["_malloc"](72 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 72;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore14IDBObjectStoreC1ERKNS_22IDBObjectStoreMetadataEPNS_14IDBTransactionE;
/* memory initializer */ allocate([109,117,108,116,105,69,110,116,114,121,0,0,0,0,0,0,117,110,105,113,117,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
 var ctlz_i8 = allocate([8,7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_DYNAMIC);
 var cttz_i8 = allocate([8,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,7,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0], "i8", ALLOC_DYNAMIC);
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
  var cttz_i8=env.cttz_i8|0;
  var ctlz_i8=env.ctlz_i8|0;
  var __ZTVN10Deprecated11ScriptValueE=env.__ZTVN10Deprecated11ScriptValueE|0;
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
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore14IDBObjectStore3putENS_18IDBDatabaseBackend7PutModeEN3WTF10PassRefPtrINS_6IDBAnyEEEPN3JSC9ExecStateERN10Deprecated11ScriptValueENS4_INS_6IDBKeyEEERi(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i10 = i9 | 0;
 i11 = i9 + 8 | 0;
 i12 = i9 + 16 | 0;
 i13 = i9 + 24 | 0;
 i14 = i9 + 32 | 0;
 i15 = i9 + 48 | 0;
 i16 = i9 + 64 | 0;
 i17 = i9 + 80 | 0;
 i18 = i9 + 88 | 0;
 i19 = i9 + 96 | 0;
 i20 = i9 + 112 | 0;
 i21 = i9 + 120 | 0;
 i22 = i9 + 128 | 0;
 i23 = i9 + 136 | 0;
 i24 = i7 | 0;
 i7 = HEAP32[i24 >> 2] | 0;
 HEAP32[i24 >> 2] = 0;
 do {
  if ((HEAP8[i2 + 84 | 0] & 1) == 0) {
   i24 = i2 + 80 | 0;
   i25 = HEAP32[i24 >> 2] | 0;
   if ((HEAP32[i25 + 88 >> 2] | 0) != 1) {
    HEAP32[i8 >> 2] = 1204;
    HEAP32[i1 >> 2] = 0;
    i26 = i7;
    break;
   }
   if ((HEAP32[i25 + 84 >> 2] | 0) == 0) {
    HEAP32[i8 >> 2] = 1205;
    HEAP32[i1 >> 2] = 0;
    i26 = i7;
    break;
   }
   HEAP8[i10] = 0;
   __ZN7WebCore21SerializedScriptValue9serializeERKN10Deprecated11ScriptValueEPN3JSC9ExecStateEPN3WTF6VectorINS8_6RefPtrINS_11MessagePortEEELj1ENS8_15CrashOnOverflowEEEPNS9_INSA_INS5_11ArrayBufferEEELj1ESD_EERb(i11, i6, i5, 0, 0, i10);
   i25 = i11 | 0;
   i27 = HEAP32[i25 >> 2] | 0;
   HEAP32[i25 >> 2] = 0;
   L10 : do {
    if ((HEAP8[i10] & 1) == 0) {
     if ((HEAP32[i27 + 28 >> 2] | 0) != 0) {
      HEAP32[i8 >> 2] = 1214;
      HEAP32[i1 >> 2] = 0;
      i28 = i7;
      break;
     }
     i25 = i2 + 24 | 0;
     i29 = (HEAP32[i25 >> 2] | 0) == 0;
     i30 = (HEAP8[i2 + 44 | 0] & 1) != 0;
     i31 = __ZN7WebCore35scriptExecutionContextFromExecStateEPN3JSC9ExecStateE(i5) | 0;
     HEAP32[i12 >> 2] = i31;
     i32 = i12 + 4 | 0;
     HEAP32[i32 >> 2] = 0;
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i31 >> 2] | 0) + 8 >> 2] & 7](i31) | 0) {
      if ((i31 | 0) == 0) {
       i33 = 0;
      } else {
       i33 = i31 - 156 + 68 | 0;
      }
      i34 = __ZN7WebCore21mainThreadNormalWorldEv() | 0;
      i35 = __ZN7WebCore17execStateFromPageERNS_15DOMWrapperWorldEPNS_4PageE(i34, __ZNK7WebCore8Document4pageEv(i33) | 0) | 0;
     } else {
      i35 = __ZN7WebCore30execStateFromWorkerGlobalScopeEPNS_17WorkerGlobalScopeE(i31) | 0;
     }
     HEAP32[i32 >> 2] = i35;
     i32 = (i7 | 0) == 0;
     if (!((i3 | 0) == 2 | i29 | i32)) {
      HEAP32[i8 >> 2] = 1203;
      HEAP32[i1 >> 2] = 0;
      i28 = i7;
      break;
     }
     if (i29 & (i30 ^ 1) & i32) {
      HEAP32[i8 >> 2] = 1203;
      HEAP32[i1 >> 2] = 0;
      i28 = 0;
      break;
     }
     L29 : do {
      if (i29) {
       i36 = i7;
       i37 = 39;
      } else {
       __ZN7WebCore37createIDBKeyFromScriptValueAndKeyPathEPNS_15DOMRequestStateERKN10Deprecated11ScriptValueERKNS_10IDBKeyPathE(i13, i12, i6, i25);
       i34 = i13 | 0;
       i38 = HEAP32[i34 >> 2] | 0;
       HEAP32[i34 >> 2] = 0;
       i34 = (i38 | 0) == 0;
       do {
        if (i34) {
         i37 = 24;
        } else {
         if (__ZNK7WebCore6IDBKey7isValidEv(i38) | 0) {
          i37 = 24;
          break;
         }
         HEAP32[i8 >> 2] = 1203;
         HEAP32[i1 >> 2] = 0;
         i39 = i7;
         i40 = 1;
         i41 = i38 | 0;
        }
       } while (0);
       do {
        if ((i37 | 0) == 24) {
         do {
          if (i30) {
           if (!i34) {
            break;
           }
           if (__ZN7WebCore30canInjectIDBKeyIntoScriptValueEPNS_15DOMRequestStateERKN10Deprecated11ScriptValueERKNS_10IDBKeyPathE(i12, i6, i25) | 0) {
            i36 = i7;
            i37 = 39;
            break L29;
           }
           HEAP32[i8 >> 2] = 1203;
           HEAP32[i1 >> 2] = 0;
           i28 = i7;
           break L10;
          } else {
           if (!i34) {
            break;
           }
           HEAP32[i8 >> 2] = 1203;
           HEAP32[i1 >> 2] = 0;
           i28 = i7;
           break L10;
          }
         } while (0);
         i42 = i38 | 0;
         HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 1;
         if (i32) {
          i39 = i38;
          i40 = 0;
          i41 = i42;
          break;
         }
         i43 = i7 | 0;
         i44 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
         if ((i44 | 0) == 0) {
          __ZN7WebCore6IDBKeyD1Ev(i7);
          __ZN3WTF8fastFreeEPv(i7);
         } else {
          HEAP32[i43 >> 2] = i44;
         }
         if (i34) {
          i45 = 0;
          break L29;
         } else {
          i39 = i38;
          i40 = 0;
          i41 = i42;
         }
        }
       } while (0);
       i34 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
       if ((i34 | 0) == 0) {
        __ZN7WebCore6IDBKeyD1Ev(i38);
        __ZN3WTF8fastFreeEPv(i38);
       } else {
        HEAP32[i41 >> 2] = i34;
       }
       if ((i40 | 0) == 0) {
        i36 = i39;
        i37 = 39;
       } else {
        i28 = i39;
        break L10;
       }
      }
     } while (0);
     do {
      if ((i37 | 0) == 39) {
       if ((i36 | 0) == 0) {
        i45 = 0;
        break;
       }
       if (__ZNK7WebCore6IDBKey7isValidEv(i36) | 0) {
        i45 = i36;
        break;
       }
       HEAP32[i8 >> 2] = 1203;
       HEAP32[i1 >> 2] = 0;
       i28 = i36;
       break L10;
      }
     } while (0);
     i32 = i14 | 0;
     HEAP32[i32 >> 2] = 0;
     i25 = i14 + 4 | 0;
     HEAP32[i25 >> 2] = 0;
     i30 = i14 + 8 | 0;
     HEAP32[i30 >> 2] = 0;
     i29 = i15 | 0;
     HEAP32[i29 >> 2] = 0;
     i34 = i15 + 4 | 0;
     HEAP32[i34 >> 2] = 0;
     i42 = i15 + 8 | 0;
     HEAP32[i42 >> 2] = 0;
     i44 = i2 + 56 | 0;
     i43 = HEAP32[i44 >> 2] | 0;
     i46 = i2 + 60 | 0;
     i47 = HEAP32[i46 >> 2] | 0;
     i48 = i43 + (i47 * 48 & -1) | 0;
     L58 : do {
      if ((HEAP32[i2 + 68 >> 2] | 0) != 0) {
       L60 : do {
        if ((i47 | 0) == 0) {
         i49 = i43;
        } else {
         i50 = i43;
         while (1) {
          i51 = i50 | 0;
          i52 = HEAP32[i51 >> 2] | 0;
          i53 = HEAP32[i51 + 4 >> 2] | 0;
          if (!((i52 | 0) == (-1 | 0) & (i53 | 0) == (-1 | 0) | (i52 | 0) == 0 & (i53 | 0) == 0)) {
           i49 = i50;
           break L60;
          }
          i50 = i50 + 48 | 0;
          if ((i50 | 0) == (i48 | 0)) {
           break L58;
          }
         }
        }
       } while (0);
       if ((i49 | 0) == (i48 | 0)) {
        break;
       }
       i38 = i16 | 0;
       i50 = i16 + 4 | 0;
       i53 = i16 + 8 | 0;
       i52 = i49;
       L66 : while (1) {
        HEAP32[i38 >> 2] = 0;
        HEAP32[i50 >> 2] = 0;
        HEAP32[i53 >> 2] = 0;
        __ZN7WebCoreL25generateIndexKeysForValueEPNS_15DOMRequestStateERKNS_16IDBIndexMetadataERKN10Deprecated11ScriptValueEPN3WTF6VectorINS9_6RefPtrINS_6IDBKeyEEELj0ENS9_15CrashOnOverflowEEE(i12, i52 + 8 | 0, i6, i16);
        i51 = i52 | 0;
        i54 = HEAP32[i30 >> 2] | 0;
        if ((i54 | 0) == (HEAP32[i25 >> 2] | 0)) {
         i55 = i54 + 1 | 0;
         i56 = HEAP32[i32 >> 2] | 0;
         do {
          if (i56 >>> 0 > i51 >>> 0) {
           i37 = 52;
          } else {
           if ((i56 + (i54 << 3) | 0) >>> 0 <= i51 >>> 0) {
            i37 = 52;
            break;
           }
           i57 = i52 - i56 >> 3;
           i58 = i55 + (i54 >>> 2) | 0;
           i59 = i58 >>> 0 > 16 >>> 0 ? i58 : 16;
           i58 = i59 >>> 0 > i55 >>> 0 ? i59 : i55;
           do {
            if (i54 >>> 0 < i58 >>> 0) {
             if (i58 >>> 0 > 536870911 >>> 0) {
              i37 = 62;
              break L66;
             }
             i59 = __ZN3WTF18fastMallocGoodSizeEj(i58 << 3) | 0;
             HEAP32[i25 >> 2] = i59 >>> 3;
             i60 = __ZN3WTF10fastMallocEj(i59) | 0;
             HEAP32[i32 >> 2] = i60;
             i59 = i56;
             _memcpy(i60 | 0, i59 | 0, i54 << 3) | 0;
             if ((i56 | 0) == 0) {
              break;
             }
             if ((HEAP32[i32 >> 2] | 0) == (i56 | 0)) {
              HEAP32[i32 >> 2] = 0;
              HEAP32[i25 >> 2] = 0;
             }
             __ZN3WTF8fastFreeEPv(i59);
            }
           } while (0);
           i58 = HEAP32[i32 >> 2] | 0;
           i61 = i58 + (i57 << 3) | 0;
           i62 = i58;
          }
         } while (0);
         if ((i37 | 0) == 52) {
          i37 = 0;
          i58 = i55 + (i54 >>> 2) | 0;
          i59 = i58 >>> 0 > 16 >>> 0 ? i58 : 16;
          i58 = i59 >>> 0 > i55 >>> 0 ? i59 : i55;
          do {
           if (i54 >>> 0 < i58 >>> 0) {
            if (i58 >>> 0 > 536870911 >>> 0) {
             i37 = 54;
             break L66;
            }
            i59 = __ZN3WTF18fastMallocGoodSizeEj(i58 << 3) | 0;
            HEAP32[i25 >> 2] = i59 >>> 3;
            i60 = __ZN3WTF10fastMallocEj(i59) | 0;
            HEAP32[i32 >> 2] = i60;
            i59 = i56;
            _memcpy(i60 | 0, i59 | 0, i54 << 3) | 0;
            if ((i56 | 0) == 0) {
             break;
            }
            if ((HEAP32[i32 >> 2] | 0) == (i56 | 0)) {
             HEAP32[i32 >> 2] = 0;
             HEAP32[i25 >> 2] = 0;
            }
            __ZN3WTF8fastFreeEPv(i59);
           }
          } while (0);
          i61 = i51;
          i62 = HEAP32[i32 >> 2] | 0;
         }
         i56 = i62 + (HEAP32[i30 >> 2] << 3) | 0;
         i58 = HEAP32[i61 + 4 >> 2] | 0;
         HEAP32[i56 >> 2] = HEAP32[i61 >> 2];
         HEAP32[i56 + 4 >> 2] = i58;
         i63 = HEAP32[i30 >> 2] | 0;
        } else {
         i58 = (HEAP32[i32 >> 2] | 0) + (i54 << 3) | 0;
         i56 = HEAP32[i51 + 4 >> 2] | 0;
         HEAP32[i58 >> 2] = HEAP32[i51 >> 2];
         HEAP32[i58 + 4 >> 2] = i56;
         i63 = HEAP32[i30 >> 2] | 0;
        }
        HEAP32[i30 >> 2] = i63 + 1;
        i56 = HEAP32[i42 >> 2] | 0;
        if ((i56 | 0) == (HEAP32[i34 >> 2] | 0)) {
         __ZN3WTF6VectorINS0_INS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEEELj0ES5_E14appendSlowCaseIRS6_EEvOT_(i15, i16);
        } else {
         i58 = HEAP32[i29 >> 2] | 0;
         i55 = HEAP32[i50 >> 2] | 0;
         i59 = HEAP32[i53 >> 2] | 0;
         i60 = i58 + (i56 * 12 & -1) | 0;
         HEAP32[i60 >> 2] = 0;
         i64 = i58 + (i56 * 12 & -1) + 4 | 0;
         HEAP32[i64 >> 2] = 0;
         HEAP32[i58 + (i56 * 12 & -1) + 8 >> 2] = i59;
         do {
          if ((i55 | 0) != 0) {
           if (i55 >>> 0 > 1073741823 >>> 0) {
            i37 = 72;
            break L66;
           }
           i59 = __ZN3WTF18fastMallocGoodSizeEj(i55 << 2) | 0;
           HEAP32[i64 >> 2] = i59 >>> 2;
           i56 = __ZN3WTF10fastMallocEj(i59) | 0;
           i59 = i56;
           HEAP32[i60 >> 2] = i59;
           if ((i56 | 0) == 0) {
            break;
           }
           i56 = HEAP32[i38 >> 2] | 0;
           i58 = HEAP32[i53 >> 2] | 0;
           i65 = i56 + (i58 << 2) | 0;
           if ((i58 | 0) == 0) {
            break;
           } else {
            i66 = i56;
            i67 = i59;
           }
           while (1) {
            i59 = HEAP32[i66 >> 2] | 0;
            HEAP32[i67 >> 2] = i59;
            if ((i59 | 0) != 0) {
             i56 = i59 | 0;
             HEAP32[i56 >> 2] = (HEAP32[i56 >> 2] | 0) + 1;
            }
            i56 = i66 + 4 | 0;
            if ((i56 | 0) == (i65 | 0)) {
             break;
            } else {
             i66 = i56;
             i67 = i67 + 4 | 0;
            }
           }
          }
         } while (0);
         HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 1;
        }
        i60 = HEAP32[i53 >> 2] | 0;
        if ((i60 | 0) != 0) {
         i64 = HEAP32[i38 >> 2] | 0;
         i55 = i64 + (i60 << 2) | 0;
         i60 = i64;
         while (1) {
          i64 = HEAP32[i60 >> 2] | 0;
          do {
           if ((i64 | 0) != 0) {
            i51 = i64 | 0;
            i54 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
            if ((i54 | 0) == 0) {
             __ZN7WebCore6IDBKeyD1Ev(i64);
             __ZN3WTF8fastFreeEPv(i64);
             break;
            } else {
             HEAP32[i51 >> 2] = i54;
             break;
            }
           }
          } while (0);
          i60 = i60 + 4 | 0;
          if ((i60 | 0) == (i55 | 0)) {
           break;
          }
         }
         HEAP32[i53 >> 2] = 0;
        }
        i55 = HEAP32[i38 >> 2] | 0;
        if ((i55 | 0) != 0) {
         HEAP32[i38 >> 2] = 0;
         HEAP32[i50 >> 2] = 0;
         __ZN3WTF8fastFreeEPv(i55);
        }
        i55 = i52 + 48 | 0;
        L123 : do {
         if ((i55 | 0) == (i48 | 0)) {
          i68 = i48;
         } else {
          i60 = i55;
          while (1) {
           i64 = i60 | 0;
           i54 = HEAP32[i64 >> 2] | 0;
           i51 = HEAP32[i64 + 4 >> 2] | 0;
           if (!((i54 | 0) == (-1 | 0) & (i51 | 0) == (-1 | 0) | (i54 | 0) == 0 & (i51 | 0) == 0)) {
            i68 = i60;
            break L123;
           }
           i51 = i60 + 48 | 0;
           if ((i51 | 0) == (i48 | 0)) {
            i68 = i48;
            break;
           } else {
            i60 = i51;
           }
          }
         }
        } while (0);
        if ((i68 | 0) == ((HEAP32[i44 >> 2] | 0) + ((HEAP32[i46 >> 2] | 0) * 48 & -1) | 0)) {
         break L58;
        } else {
         i52 = i68;
        }
       }
       if ((i37 | 0) == 54) {
        _WTFCrash();
       } else if ((i37 | 0) == 62) {
        _WTFCrash();
       } else if ((i37 | 0) == 72) {
        _WTFCrash();
       }
      }
     } while (0);
     i46 = i18 | 0;
     i44 = i4 | 0;
     i48 = HEAP32[i44 >> 2] | 0;
     HEAP32[i44 >> 2] = 0;
     HEAP32[i46 >> 2] = i48;
     __ZN7WebCore10IDBRequest6createEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_6IDBAnyEEEPNS_14IDBTransactionE(i17, i31, i18, HEAP32[i24 >> 2] | 0);
     i48 = i17 | 0;
     i44 = HEAP32[i48 >> 2] | 0;
     HEAP32[i48 >> 2] = 0;
     i48 = HEAP32[i46 >> 2] | 0;
     do {
      if ((i48 | 0) != 0) {
       i46 = i48 + 4 | 0;
       i43 = i46 | 0;
       i47 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
       if ((i47 | 0) != 0) {
        HEAP32[i43 >> 2] = i47;
        break;
       }
       i47 = i46 - 4 | 0;
       if ((i47 | 0) == 0) {
        break;
       }
       __ZN7WebCore6IDBAnyD1Ev(i47);
       __ZN3WTF8fastFreeEPv(i47);
      }
     } while (0);
     i48 = HEAP32[i27 + 8 >> 2] | 0;
     i31 = i27 + 12 | 0;
     i47 = HEAP32[i31 >> 2] | 0;
     i46 = i19 | 0;
     HEAP32[i46 >> 2] = 0;
     i43 = i19 + 4 | 0;
     HEAP32[i43 >> 2] = 0;
     i52 = i19 + 8 | 0;
     HEAP32[i52 >> 2] = i47;
     do {
      if ((i48 | 0) != 0) {
       i47 = __ZN3WTF18fastMallocGoodSizeEj(i48) | 0;
       HEAP32[i43 >> 2] = i47;
       i50 = __ZN3WTF10fastMallocEj(i47) | 0;
       HEAP32[i46 >> 2] = i50;
       if ((i50 | 0) == 0) {
        break;
       }
       _memcpy(i50 | 0, HEAP32[i27 + 4 >> 2] | 0, HEAP32[i31 >> 2] | 0) | 0;
      }
     } while (0);
     __ZN7WebCore12SharedBuffer11adoptVectorERN3WTF6VectorIcLj0ENS1_15CrashOnOverflowEEE(i20, i19);
     i31 = i20 | 0;
     i48 = HEAP32[i31 >> 2] | 0;
     HEAP32[i31 >> 2] = 0;
     i31 = __ZNK7WebCore14IDBTransaction9backendDBEv(HEAP32[i24 >> 2] | 0) | 0;
     i50 = (HEAP32[i24 >> 2] | 0) + 56 | 0;
     i47 = HEAP32[i50 >> 2] | 0;
     i38 = HEAP32[i50 + 4 >> 2] | 0;
     i50 = i2 + 16 | 0;
     i53 = HEAP32[i50 >> 2] | 0;
     i55 = HEAP32[i50 + 4 >> 2] | 0;
     i50 = i21 | 0;
     HEAP32[i50 >> 2] = i48;
     i60 = (i48 | 0) == 0;
     if (!i60) {
      i51 = i48 | 0;
      HEAP32[i51 >> 2] = (HEAP32[i51 >> 2] | 0) + 1;
     }
     i51 = i22 | 0;
     HEAP32[i51 >> 2] = i45;
     i54 = i23 | 0;
     HEAP32[i54 >> 2] = i44;
     if ((i44 | 0) != 0) {
      i64 = i44 + 4 | 0;
      HEAP32[i64 >> 2] = (HEAP32[i64 >> 2] | 0) + 1;
     }
     __ZN7WebCore18IDBDatabaseBackend3putExxN3WTF10PassRefPtrINS_12SharedBufferEEENS2_INS_6IDBKeyEEENS0_7PutModeENS2_INS_12IDBCallbacksEEERKNS1_6VectorIxLj0ENS1_15CrashOnOverflowEEERKNSA_INSA_INS1_6RefPtrIS5_EELj0ESB_EELj0ESB_EE(i31, i47, i38, i53, i55, i21, i22, i3, i23, i14, i15);
     i55 = HEAP32[i54 >> 2] | 0;
     do {
      if ((i55 | 0) != 0) {
       i54 = i55 + 4 | 0;
       i53 = i54 | 0;
       i38 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
       if ((i38 | 0) != 0) {
        HEAP32[i53 >> 2] = i38;
        break;
       }
       i38 = i54 - 4 | 0;
       if ((i38 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i38 >> 2] | 0) + 4 >> 2] & 7](i38);
      }
     } while (0);
     i55 = HEAP32[i51 >> 2] | 0;
     do {
      if ((i55 | 0) != 0) {
       i38 = i55 | 0;
       i54 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
       if ((i54 | 0) == 0) {
        __ZN7WebCore6IDBKeyD1Ev(i55);
        __ZN3WTF8fastFreeEPv(i55);
        break;
       } else {
        HEAP32[i38 >> 2] = i54;
        break;
       }
      }
     } while (0);
     i55 = HEAP32[i50 >> 2] | 0;
     do {
      if ((i55 | 0) != 0) {
       i51 = i55 | 0;
       i54 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
       if ((i54 | 0) == 0) {
        __ZN7WebCore12SharedBufferD1Ev(i55);
        __ZN3WTF8fastFreeEPv(i55);
        break;
       } else {
        HEAP32[i51 >> 2] = i54;
        break;
       }
      }
     } while (0);
     HEAP32[i1 >> 2] = i44;
     do {
      if (!i60) {
       i55 = i48 | 0;
       i50 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
       if ((i50 | 0) == 0) {
        __ZN7WebCore12SharedBufferD1Ev(i48);
        __ZN3WTF8fastFreeEPv(i48);
        break;
       } else {
        HEAP32[i55 >> 2] = i50;
        break;
       }
      }
     } while (0);
     if ((HEAP32[i52 >> 2] | 0) != 0) {
      HEAP32[i52 >> 2] = 0;
     }
     i48 = HEAP32[i46 >> 2] | 0;
     if ((i48 | 0) != 0) {
      HEAP32[i46 >> 2] = 0;
      HEAP32[i43 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i48);
     }
     i48 = HEAP32[i42 >> 2] | 0;
     if ((i48 | 0) != 0) {
      i60 = HEAP32[i29 >> 2] | 0;
      i44 = i60 + (i48 * 12 & -1) | 0;
      i48 = i60;
      while (1) {
       i60 = i48 + 8 | 0;
       i50 = HEAP32[i60 >> 2] | 0;
       i55 = i48 | 0;
       if ((i50 | 0) != 0) {
        i54 = HEAP32[i55 >> 2] | 0;
        i51 = i54 + (i50 << 2) | 0;
        i50 = i54;
        while (1) {
         i54 = HEAP32[i50 >> 2] | 0;
         do {
          if ((i54 | 0) != 0) {
           i38 = i54 | 0;
           i53 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
           if ((i53 | 0) == 0) {
            __ZN7WebCore6IDBKeyD1Ev(i54);
            __ZN3WTF8fastFreeEPv(i54);
            break;
           } else {
            HEAP32[i38 >> 2] = i53;
            break;
           }
          }
         } while (0);
         i50 = i50 + 4 | 0;
         if ((i50 | 0) == (i51 | 0)) {
          break;
         }
        }
        HEAP32[i60 >> 2] = 0;
       }
       i51 = HEAP32[i55 >> 2] | 0;
       if ((i51 | 0) != 0) {
        HEAP32[i55 >> 2] = 0;
        HEAP32[i48 + 4 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i51);
       }
       i48 = i48 + 12 | 0;
       if ((i48 | 0) == (i44 | 0)) {
        break;
       }
      }
      HEAP32[i42 >> 2] = 0;
     }
     i44 = HEAP32[i29 >> 2] | 0;
     if ((i44 | 0) != 0) {
      HEAP32[i29 >> 2] = 0;
      HEAP32[i34 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i44);
     }
     if ((HEAP32[i30 >> 2] | 0) != 0) {
      HEAP32[i30 >> 2] = 0;
     }
     i44 = HEAP32[i32 >> 2] | 0;
     if ((i44 | 0) == 0) {
      i28 = 0;
      break;
     }
     HEAP32[i32 >> 2] = 0;
     HEAP32[i25 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i44);
     i28 = 0;
    } else {
     HEAP32[i1 >> 2] = 0;
     i28 = i7;
    }
   } while (0);
   if ((i27 | 0) == 0) {
    i26 = i28;
    break;
   }
   i24 = i27 | 0;
   if (((tempValue = HEAP32[i24 >> 2] | 0, HEAP32[i24 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    i26 = i28;
    break;
   }
   __ZN7WebCore21SerializedScriptValueD1Ev(i27);
   __ZN3WTF8fastFreeEPv(i27);
   i26 = i28;
  } else {
   HEAP32[i8 >> 2] = 1208;
   HEAP32[i1 >> 2] = 0;
   i26 = i7;
  }
 } while (0);
 if ((i26 | 0) == 0) {
  STACKTOP = i9;
  return;
 }
 i7 = i26 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore6IDBKeyD1Ev(i26);
  __ZN3WTF8fastFreeEPv(i26);
  STACKTOP = i9;
  return;
 } else {
  HEAP32[i7 >> 2] = i1;
  STACKTOP = i9;
  return;
 }
}
function __ZN7WebCore14IDBObjectStore11createIndexEPNS_22ScriptExecutionContextERKN3WTF6StringERKNS_10IDBKeyPathEbbRi(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i10 = i9 | 0;
 i11 = i9 + 8 | 0;
 i12 = i9 + 16 | 0;
 i13 = i9 + 56 | 0;
 i14 = i9 + 64 | 0;
 i15 = i9 + 80 | 0;
 i16 = i9 + 96 | 0;
 i17 = i9 + 104 | 0;
 i18 = i2 + 80 | 0;
 i19 = HEAP32[i18 >> 2] | 0;
 do {
  if ((HEAP32[i19 + 84 >> 2] | 0) == 2) {
   if ((HEAP8[i2 + 84 | 0] & 1) != 0) {
    break;
   }
   if ((HEAP32[i19 + 88 >> 2] | 0) != 1) {
    HEAP32[i8 >> 2] = 1204;
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i9;
    return;
   }
   if (!(__ZNK7WebCore10IDBKeyPath7isValidEv(i5) | 0)) {
    HEAP32[i8 >> 2] = 1213;
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i9;
    return;
   }
   i20 = i4 | 0;
   i21 = HEAP32[i20 >> 2] | 0;
   if ((i21 | 0) == 0) {
    HEAP32[i8 >> 2] = 105;
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i9;
    return;
   }
   i22 = i2 + 56 | 0;
   i23 = HEAP32[i22 >> 2] | 0;
   i24 = i2 + 60 | 0;
   i25 = HEAP32[i24 >> 2] | 0;
   i26 = i23 + (i25 * 48 & -1) | 0;
   L16 : do {
    if ((HEAP32[i2 + 68 >> 2] | 0) != 0) {
     L18 : do {
      if ((i25 | 0) == 0) {
       i27 = i23;
      } else {
       i28 = i23;
       while (1) {
        i29 = i28 | 0;
        i30 = HEAP32[i29 >> 2] | 0;
        i31 = HEAP32[i29 + 4 >> 2] | 0;
        if (!((i30 | 0) == (-1 | 0) & (i31 | 0) == (-1 | 0) | (i30 | 0) == 0 & (i31 | 0) == 0)) {
         i27 = i28;
         break L18;
        }
        i28 = i28 + 48 | 0;
        if ((i28 | 0) == (i26 | 0)) {
         break L16;
        }
       }
      }
     } while (0);
     if ((i27 | 0) == (i26 | 0)) {
      break;
     } else {
      i32 = i27;
      i33 = i21;
     }
     while (1) {
      if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i32 + 8 >> 2] | 0, i33) | 0) {
       break;
      }
      i28 = i32 + 48 | 0;
      L26 : do {
       if ((i28 | 0) == (i26 | 0)) {
        i34 = i26;
       } else {
        i31 = i28;
        while (1) {
         i30 = i31 | 0;
         i29 = HEAP32[i30 >> 2] | 0;
         i35 = HEAP32[i30 + 4 >> 2] | 0;
         if (!((i29 | 0) == (-1 | 0) & (i35 | 0) == (-1 | 0) | (i29 | 0) == 0 & (i35 | 0) == 0)) {
          i34 = i31;
          break L26;
         }
         i35 = i31 + 48 | 0;
         if ((i35 | 0) == (i26 | 0)) {
          i34 = i26;
          break;
         } else {
          i31 = i35;
         }
        }
       }
      } while (0);
      if ((i34 | 0) == ((HEAP32[i22 >> 2] | 0) + ((HEAP32[i24 >> 2] | 0) * 48 & -1) | 0)) {
       break L16;
      }
      i32 = i34;
      i33 = HEAP32[i20 >> 2] | 0;
     }
     i28 = i32 | 0;
     if ((HEAP32[i28 >> 2] | 0) == (-1 | 0) & (HEAP32[i28 + 4 >> 2] | 0) == (-1 | 0)) {
      break;
     }
     HEAP32[i8 >> 2] = 1202;
     HEAP32[i1 >> 2] = 0;
     STACKTOP = i9;
     return;
    }
   } while (0);
   i24 = i5 | 0;
   if (!((HEAP32[i24 >> 2] | 0) != 2 | i7 ^ 1)) {
    HEAP32[i8 >> 2] = 1209;
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i9;
    return;
   }
   i22 = i2 + 48 | 0;
   i26 = _i64Add(HEAP32[i22 >> 2] | 0, HEAP32[i22 + 4 >> 2] | 0, 1, 0) | 0;
   i21 = tempRet0;
   HEAP32[i11 >> 2] = i26;
   HEAP32[i11 + 4 >> 2] = i21;
   i23 = __ZNK7WebCore14IDBTransaction9backendDBEv(HEAP32[i18 >> 2] | 0) | 0;
   i25 = (HEAP32[i18 >> 2] | 0) + 56 | 0;
   i28 = i2 + 16 | 0;
   __ZN7WebCore18IDBDatabaseBackend11createIndexExxxRKN3WTF6StringERKNS_10IDBKeyPathEbb(i23, HEAP32[i25 >> 2] | 0, HEAP32[i25 + 4 >> 2] | 0, HEAP32[i28 >> 2] | 0, HEAP32[i28 + 4 >> 2] | 0, i26, i21, i4, i5, i6, i7);
   i25 = _i64Add(HEAP32[i22 >> 2] | 0, HEAP32[i22 + 4 >> 2] | 0, 1, 0) | 0;
   HEAP32[i22 >> 2] = i25;
   HEAP32[i22 + 4 >> 2] = tempRet0;
   i22 = i12 | 0;
   i25 = HEAP32[i20 >> 2] | 0;
   HEAP32[i22 >> 2] = i25;
   if ((i25 | 0) != 0) {
    i23 = i25 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
   }
   i23 = i12 + 8 | 0;
   HEAP32[i23 >> 2] = i26;
   HEAP32[i23 + 4 >> 2] = i21;
   i21 = i12 + 16 | 0;
   HEAP32[i21 >> 2] = HEAP32[i24 >> 2];
   i24 = i12 + 20 | 0;
   i26 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i24 >> 2] = i26;
   if ((i26 | 0) != 0) {
    i25 = i26 | 0;
    HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 2;
   }
   i25 = HEAP32[i5 + 12 >> 2] | 0;
   i26 = i5 + 16 | 0;
   i31 = HEAP32[i26 >> 2] | 0;
   i35 = i12 + 24 | 0;
   HEAP32[i35 >> 2] = 0;
   i29 = i12 + 28 | 0;
   HEAP32[i29 >> 2] = 0;
   i30 = i12 + 32 | 0;
   HEAP32[i30 >> 2] = i31;
   do {
    if ((i25 | 0) != 0) {
     if (i25 >>> 0 > 1073741823 >>> 0) {
      _WTFCrash();
     }
     i31 = __ZN3WTF18fastMallocGoodSizeEj(i25 << 2) | 0;
     HEAP32[i29 >> 2] = i31 >>> 2;
     i36 = __ZN3WTF10fastMallocEj(i31) | 0;
     i31 = i36;
     HEAP32[i35 >> 2] = i31;
     if ((i36 | 0) == 0) {
      break;
     }
     i36 = HEAP32[i5 + 8 >> 2] | 0;
     i37 = HEAP32[i26 >> 2] | 0;
     i38 = i36 + (i37 << 2) | 0;
     if ((i37 | 0) == 0) {
      break;
     } else {
      i39 = i36;
      i40 = i31;
     }
     while (1) {
      i31 = HEAP32[i39 >> 2] | 0;
      HEAP32[i40 >> 2] = i31;
      if ((i31 | 0) != 0) {
       i36 = i31 | 0;
       HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 2;
      }
      i36 = i39 + 4 | 0;
      if ((i36 | 0) == (i38 | 0)) {
       break;
      } else {
       i39 = i36;
       i40 = i40 + 4 | 0;
      }
     }
    }
   } while (0);
   i26 = i12 + 36 | 0;
   HEAP8[i26] = i6 & 1;
   i25 = i12 + 37 | 0;
   HEAP8[i25] = i7 & 1;
   i20 = HEAP32[i18 >> 2] | 0;
   i38 = __ZN3WTF10fastMallocEj(64) | 0;
   __ZN7WebCore8IDBIndexC1ERKNS_16IDBIndexMetadataEPNS_14IDBObjectStoreEPNS_14IDBTransactionE(i38, i12, i2, i20);
   i20 = i13 | 0;
   HEAP32[i20 >> 2] = i38;
   __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore8IDBIndexEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i14, i2 + 88 | 0, i4, i13);
   do {
    if ((HEAP8[i14 + 8 | 0] & 1) == 0) {
     i38 = HEAP32[i14 >> 2] | 0;
     i36 = HEAP32[i20 >> 2] | 0;
     if ((i36 | 0) != 0) {
      i31 = i36 + 4 | 0;
      HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
     }
     i31 = i38 + 4 | 0;
     i38 = HEAP32[i31 >> 2] | 0;
     HEAP32[i31 >> 2] = i36;
     if ((i38 | 0) == 0) {
      break;
     }
     i36 = i38 + 4 | 0;
     i38 = i36 | 0;
     i31 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
     if ((i31 | 0) != 0) {
      HEAP32[i38 >> 2] = i31;
      break;
     }
     i31 = i36 - 4 | 0;
     if ((i31 | 0) == 0) {
      break;
     }
     __ZN7WebCore8IDBIndexD1Ev(i31);
     __ZN3WTF8fastFreeEPv(i31);
    }
   } while (0);
   __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKxRS3_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_(i15, i2 + 56 | 0, i11, i12);
   if ((HEAP8[i15 + 8 | 0] & 1) == 0) {
    __ZN7WebCore16IDBIndexMetadataaSERKS0_((HEAP32[i15 >> 2] | 0) + 8 | 0, i12) | 0;
   }
   do {
    if ((HEAP32[i8 >> 2] | 0) == 0) {
     i31 = i17 | 0;
     HEAP32[i31 >> 2] = 0;
     __ZN7WebCore14IDBObjectStore10openCursorEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_11IDBKeyRangeEEERKNS3_6StringENS_18IDBDatabaseBackend8TaskTypeERi(i16, i2, i3, i17, __ZN7WebCore9IDBCursor13directionNextEv() | 0, 1, i8);
     i36 = i16 | 0;
     i38 = HEAP32[i36 >> 2] | 0;
     HEAP32[i36 >> 2] = 0;
     i36 = HEAP32[i31 >> 2] | 0;
     do {
      if ((i36 | 0) != 0) {
       i31 = i36 + 4 | 0;
       i37 = i31 | 0;
       i41 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
       if ((i41 | 0) != 0) {
        HEAP32[i37 >> 2] = i41;
        break;
       }
       i41 = i31 - 4 | 0;
       if ((i41 | 0) == 0) {
        break;
       }
       __ZN7WebCore11IDBKeyRangeD2Ev(i41);
       __ZN3WTF8fastFreeEPv(i41);
      }
     } while (0);
     do {
      if ((HEAP32[i8 >> 2] | 0) == 0) {
       HEAP8[i38 + 149 | 0] = 1;
       i36 = __ZNK7WebCore14IDBTransaction9backendDBEv(HEAP32[i18 >> 2] | 0) | 0;
       if ((i36 | 0) != 0) {
        i41 = i36 | 0;
        HEAP32[i41 >> 2] = (HEAP32[i41 >> 2] | 0) + 1;
       }
       i41 = (HEAP32[i18 >> 2] | 0) + 56 | 0;
       i31 = HEAP32[i41 >> 2] | 0;
       i37 = HEAP32[i41 + 4 >> 2] | 0;
       i41 = HEAP32[i28 >> 2] | 0;
       i42 = HEAP32[i28 + 4 >> 2] | 0;
       i43 = __ZN3WTF10fastMallocEj(72) | 0;
       i44 = i43 + 4 | 0;
       HEAP32[i44 >> 2] = 1;
       HEAP32[i43 + 8 >> 2] = 3;
       HEAP32[i43 >> 2] = H_BASE + 40;
       HEAP32[i43 + 12 >> 2] = i36;
       i36 = i43 + 16 | 0;
       HEAP32[i36 >> 2] = i31;
       HEAP32[i36 + 4 >> 2] = i37;
       i37 = i43 + 24 | 0;
       HEAP32[i37 >> 2] = i41;
       HEAP32[i37 + 4 >> 2] = i42;
       i42 = HEAP32[i22 >> 2] | 0;
       HEAP32[i43 + 32 >> 2] = i42;
       if ((i42 | 0) != 0) {
        i37 = i42 | 0;
        HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 2;
       }
       i37 = i43 + 40 | 0;
       i42 = HEAP32[i23 + 4 >> 2] | 0;
       HEAP32[i37 >> 2] = HEAP32[i23 >> 2];
       HEAP32[i37 + 4 >> 2] = i42;
       HEAP32[i43 + 48 >> 2] = HEAP32[i21 >> 2];
       i42 = HEAP32[i24 >> 2] | 0;
       HEAP32[i43 + 52 >> 2] = i42;
       if ((i42 | 0) != 0) {
        i37 = i42 | 0;
        HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 2;
       }
       i37 = HEAP32[i29 >> 2] | 0;
       i42 = HEAP32[i30 >> 2] | 0;
       i41 = i43 + 56 | 0;
       HEAP32[i41 >> 2] = 0;
       i36 = i43 + 60 | 0;
       HEAP32[i36 >> 2] = 0;
       HEAP32[i43 + 64 >> 2] = i42;
       do {
        if ((i37 | 0) != 0) {
         if (i37 >>> 0 > 1073741823 >>> 0) {
          _WTFCrash();
         }
         i42 = __ZN3WTF18fastMallocGoodSizeEj(i37 << 2) | 0;
         HEAP32[i36 >> 2] = i42 >>> 2;
         i31 = __ZN3WTF10fastMallocEj(i42) | 0;
         i42 = i31;
         HEAP32[i41 >> 2] = i42;
         if ((i31 | 0) == 0) {
          break;
         }
         i31 = HEAP32[i35 >> 2] | 0;
         i45 = HEAP32[i30 >> 2] | 0;
         i46 = i31 + (i45 << 2) | 0;
         if ((i45 | 0) == 0) {
          break;
         } else {
          i47 = i31;
          i48 = i42;
         }
         while (1) {
          i42 = HEAP32[i47 >> 2] | 0;
          HEAP32[i48 >> 2] = i42;
          if ((i42 | 0) != 0) {
           i31 = i42 | 0;
           HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 2;
          }
          i31 = i47 + 4 | 0;
          if ((i31 | 0) == (i46 | 0)) {
           break;
          } else {
           i47 = i31;
           i48 = i48 + 4 | 0;
          }
         }
        }
       } while (0);
       HEAP8[i43 + 68 | 0] = HEAP8[i26] & 1;
       HEAP8[i43 + 69 | 0] = HEAP8[i25] & 1;
       i41 = i43;
       i36 = (i43 | 0) == 0;
       if (!i36) {
        HEAP32[i44 >> 2] = (HEAP32[i44 >> 2] | 0) + 1;
       }
       i37 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 648 | 0;
       i46 = i10 | 0;
       HEAP32[i46 >> 2] = i41;
       __ZN7WebCore11EventTarget25setAttributeEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEE(i38 + 12 | 0, i37, i10) | 0;
       i37 = HEAP32[i46 >> 2] | 0;
       do {
        if ((i37 | 0) != 0) {
         i46 = i37 + 4 | 0;
         i31 = i46 | 0;
         i42 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
         if ((i42 | 0) != 0) {
          HEAP32[i31 >> 2] = i42;
          break;
         }
         i42 = i46 - 4 | 0;
         if ((i42 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i42 >> 2] | 0) + 4 >> 2] & 7](i42);
        }
       } while (0);
       HEAP32[i1 >> 2] = HEAP32[i20 >> 2];
       HEAP32[i20 >> 2] = 0;
       if (i36) {
        break;
       }
       i37 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
       if ((i37 | 0) == 0) {
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i43 >> 2] | 0) + 4 >> 2] & 7](i41);
        break;
       } else {
        HEAP32[i44 >> 2] = i37;
        break;
       }
      } else {
       HEAP32[i1 >> 2] = 0;
      }
     } while (0);
     if ((i38 | 0) == 0) {
      break;
     }
     i37 = i38 + 4 | 0;
     i42 = i37 | 0;
     i46 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
     if ((i46 | 0) != 0) {
      HEAP32[i42 >> 2] = i46;
      break;
     }
     i46 = i37 - 4 | 0;
     if ((i46 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i46 >> 2] | 0) + 4 >> 2] & 7](i46);
    } else {
     HEAP32[i1 >> 2] = 0;
    }
   } while (0);
   i25 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i25 | 0) != 0) {
     i26 = i25 + 4 | 0;
     i30 = i26 | 0;
     i35 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
     if ((i35 | 0) != 0) {
      HEAP32[i30 >> 2] = i35;
      break;
     }
     i35 = i26 - 4 | 0;
     if ((i35 | 0) == 0) {
      break;
     }
     __ZN7WebCore8IDBIndexD1Ev(i35);
     __ZN3WTF8fastFreeEPv(i35);
    }
   } while (0);
   __ZN7WebCore16IDBIndexMetadataD1Ev(i12);
   STACKTOP = i9;
   return;
  }
 } while (0);
 HEAP32[i8 >> 2] = 1208;
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i9;
 return;
}
function __ZN7WebCore12_GLOBAL__N_114IndexPopulator11handleEventEPNS_22ScriptExecutionContextEPNS_5EventE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 168 | 0;
 i4 = i2 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 48 | 0;
 i8 = i2 + 56 | 0;
 i9 = i2 + 64 | 0;
 i10 = i2 + 72 | 0;
 i11 = i2 + 88 | 0;
 i12 = i2 + 112 | 0;
 i13 = i2 + 120 | 0;
 i14 = i2 + 136 | 0;
 i15 = i2 + 152 | 0;
 i16 = HEAP32[i3 + 32 >> 2] | 0;
 if ((i16 | 0) == 0) {
  i17 = 0;
 } else {
  i17 = i16 - 12 | 0;
 }
 i16 = i2 + 8 | 0;
 HEAP32[i16 >> 2] = 0;
 __ZNK7WebCore10IDBRequest6resultERi(i4, i17, i16);
 i16 = i4 | 0;
 i4 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 if ((HEAP32[i4 + 8 >> 2] | 0) == 4) {
  __ZN7WebCore6IDBAny18idbCursorWithValueEv(i5, i4);
  i16 = i5 | 0;
  i5 = HEAP32[i16 >> 2] | 0;
  HEAP32[i16 >> 2] = 0;
  i18 = i5;
 } else {
  i18 = 0;
 }
 i5 = i6 + 16 | 0;
 i16 = i6 | 0;
 HEAP32[i16 >> 2] = i5;
 i3 = i6 + 4 | 0;
 HEAP32[i3 >> 2] = 1;
 i19 = i6 + 8 | 0;
 i6 = i1 + 32 | 0;
 i20 = i1 + 40 | 0;
 i21 = HEAP32[i20 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i20 >> 2];
 HEAP32[i5 + 4 >> 2] = i21;
 HEAP32[i19 >> 2] = 1;
 i21 = (i18 | 0) == 0;
 do {
  if (i21) {
   i20 = i1 + 12 | 0;
   i22 = HEAP32[i20 >> 2] | 0;
   i23 = i1 + 16 | 0;
   i24 = HEAP32[i23 >> 2] | 0;
   i25 = HEAP32[i23 + 4 >> 2] | 0;
   i23 = i1 + 24 | 0;
   i26 = HEAP32[i23 >> 2] | 0;
   i27 = HEAP32[i23 + 4 >> 2] | 0;
   i23 = HEAP32[i3 >> 2] | 0;
   i28 = i15 | 0;
   HEAP32[i28 >> 2] = 0;
   i29 = i15 + 4 | 0;
   HEAP32[i29 >> 2] = 0;
   i30 = i15 + 8 | 0;
   HEAP32[i30 >> 2] = 1;
   do {
    if ((i23 | 0) != 0) {
     if (i23 >>> 0 > 536870911 >>> 0) {
      _WTFCrash();
     }
     i31 = __ZN3WTF18fastMallocGoodSizeEj(i23 << 3) | 0;
     HEAP32[i29 >> 2] = i31 >>> 3;
     i32 = __ZN3WTF10fastMallocEj(i31) | 0;
     HEAP32[i28 >> 2] = i32;
     if ((i32 | 0) == 0) {
      break;
     }
     _memcpy(i32 | 0, HEAP32[i16 >> 2] | 0, HEAP32[i19 >> 2] << 3) | 0;
    }
   } while (0);
   __ZN7WebCore18IDBDatabaseBackend15setIndexesReadyExxRKN3WTF6VectorIxLj0ENS1_15CrashOnOverflowEEE(i22, i24, i25, i26, i27, i15);
   if ((HEAP32[i30 >> 2] | 0) != 0) {
    HEAP32[i30 >> 2] = 0;
   }
   i23 = HEAP32[i28 >> 2] | 0;
   if ((i23 | 0) != 0) {
    HEAP32[i28 >> 2] = 0;
    HEAP32[i29 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i23);
   }
   i23 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   if ((i23 | 0) == 0) {
    break;
   }
   i32 = i23 | 0;
   i31 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
   if ((i31 | 0) == 0) {
    __ZN7WebCore18IDBDatabaseBackendD1Ev(i23);
    __ZN3WTF8fastFreeEPv(i23);
    break;
   } else {
    HEAP32[i32 >> 2] = i31;
    break;
   }
  } else {
   i31 = i18 | 0;
   i32 = i7 | 0;
   HEAP32[i32 >> 2] = 0;
   i23 = i8 | 0;
   HEAP32[i23 >> 2] = 0;
   __ZN7WebCore9IDBCursor16continueFunctionEN3WTF10PassRefPtrINS_6IDBKeyEEERi(i31, i7, i23);
   i23 = HEAP32[i32 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i32 = i23 | 0;
     i33 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
     if ((i33 | 0) == 0) {
      __ZN7WebCore6IDBKeyD1Ev(i23);
      __ZN3WTF8fastFreeEPv(i23);
      break;
     } else {
      HEAP32[i32 >> 2] = i33;
      break;
     }
    }
   } while (0);
   i23 = HEAP32[i18 + 64 >> 2] | 0;
   i20 = (i23 | 0) == 0;
   if (!i20) {
    i29 = i23 | 0;
    HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
   }
   i29 = __ZNK7WebCore9IDBCursor5valueEv(i31) | 0;
   HEAP32[i9 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
   __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_(i9 + 4 | 0, i29 + 4 | 0);
   i29 = i10 | 0;
   HEAP32[i29 >> 2] = 0;
   i28 = i10 + 4 | 0;
   HEAP32[i28 >> 2] = 0;
   i30 = i10 + 8 | 0;
   HEAP32[i30 >> 2] = 0;
   __ZN7WebCoreL25generateIndexKeysForValueEPNS_15DOMRequestStateERKNS_16IDBIndexMetadataERKN10Deprecated11ScriptValueEPN3WTF6VectorINS9_6RefPtrINS_6IDBKeyEEELj0ENS9_15CrashOnOverflowEEE(i17 + 152 | 0, i6, i9, i10);
   i27 = i11 + 12 | 0;
   i26 = i27;
   i25 = i11 | 0;
   HEAP32[i25 >> 2] = i26;
   i24 = i11 + 4 | 0;
   HEAP32[i24 >> 2] = 1;
   i22 = i11 + 8 | 0;
   HEAP32[i22 >> 2] = 0;
   i33 = HEAP32[i28 >> 2] | 0;
   i32 = HEAP32[i30 >> 2] | 0;
   i34 = i27;
   HEAP32[i34 >> 2] = 0;
   i27 = i11 + 16 | 0;
   HEAP32[i27 >> 2] = 0;
   HEAP32[i11 + 20 >> 2] = i32;
   do {
    if ((i33 | 0) != 0) {
     if (i33 >>> 0 > 1073741823 >>> 0) {
      _WTFCrash();
     }
     i32 = __ZN3WTF18fastMallocGoodSizeEj(i33 << 2) | 0;
     HEAP32[i27 >> 2] = i32 >>> 2;
     i35 = __ZN3WTF10fastMallocEj(i32) | 0;
     i32 = i35;
     HEAP32[i34 >> 2] = i32;
     if ((i35 | 0) == 0) {
      break;
     }
     i35 = HEAP32[i29 >> 2] | 0;
     i36 = HEAP32[i30 >> 2] | 0;
     i37 = i35 + (i36 << 2) | 0;
     if ((i36 | 0) == 0) {
      break;
     } else {
      i38 = i35;
      i39 = i32;
     }
     while (1) {
      i32 = HEAP32[i38 >> 2] | 0;
      HEAP32[i39 >> 2] = i32;
      if ((i32 | 0) != 0) {
       i35 = i32 | 0;
       HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 1;
      }
      i35 = i38 + 4 | 0;
      if ((i35 | 0) == (i37 | 0)) {
       break;
      } else {
       i38 = i35;
       i39 = i39 + 4 | 0;
      }
     }
    }
   } while (0);
   HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
   i34 = HEAP32[i1 + 12 >> 2] | 0;
   i27 = i1 + 16 | 0;
   i33 = HEAP32[i27 >> 2] | 0;
   i31 = HEAP32[i27 + 4 >> 2] | 0;
   i27 = i1 + 24 | 0;
   i37 = HEAP32[i27 >> 2] | 0;
   i35 = HEAP32[i27 + 4 >> 2] | 0;
   i27 = i12 | 0;
   HEAP32[i27 >> 2] = i23;
   if (!i20) {
    i32 = i23 | 0;
    HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
   }
   i32 = HEAP32[i3 >> 2] | 0;
   i36 = HEAP32[i19 >> 2] | 0;
   i40 = i13 | 0;
   HEAP32[i40 >> 2] = 0;
   i41 = i13 + 4 | 0;
   HEAP32[i41 >> 2] = 0;
   i42 = i13 + 8 | 0;
   HEAP32[i42 >> 2] = i36;
   do {
    if ((i32 | 0) != 0) {
     if (i32 >>> 0 > 536870911 >>> 0) {
      _WTFCrash();
     }
     i36 = __ZN3WTF18fastMallocGoodSizeEj(i32 << 3) | 0;
     HEAP32[i41 >> 2] = i36 >>> 3;
     i43 = __ZN3WTF10fastMallocEj(i36) | 0;
     HEAP32[i40 >> 2] = i43;
     if ((i43 | 0) == 0) {
      break;
     }
     _memcpy(i43 | 0, HEAP32[i16 >> 2] | 0, HEAP32[i19 >> 2] << 3) | 0;
    }
   } while (0);
   __ZN3WTF6VectorINS0_INS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEEELj0ES5_EC2ILj1ES5_EERKNS0_IS6_XT_ET0_EE(i14, i11);
   __ZN7WebCore18IDBDatabaseBackend12setIndexKeysExxN3WTF10PassRefPtrINS_6IDBKeyEEERKNS1_6VectorIxLj0ENS1_15CrashOnOverflowEEERKNS5_INS5_INS1_6RefPtrIS3_EELj0ES6_EELj0ES6_EE(i34, i33, i31, i37, i35, i12, i13, i14);
   i32 = i14 + 8 | 0;
   i43 = HEAP32[i32 >> 2] | 0;
   i36 = i14 | 0;
   if ((i43 | 0) != 0) {
    i44 = HEAP32[i36 >> 2] | 0;
    i45 = i44 + (i43 * 12 & -1) | 0;
    i43 = i44;
    while (1) {
     i44 = i43 + 8 | 0;
     i46 = HEAP32[i44 >> 2] | 0;
     i47 = i43 | 0;
     if ((i46 | 0) != 0) {
      i48 = HEAP32[i47 >> 2] | 0;
      i49 = i48 + (i46 << 2) | 0;
      i46 = i48;
      while (1) {
       i48 = HEAP32[i46 >> 2] | 0;
       do {
        if ((i48 | 0) != 0) {
         i50 = i48 | 0;
         i51 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
         if ((i51 | 0) == 0) {
          __ZN7WebCore6IDBKeyD1Ev(i48);
          __ZN3WTF8fastFreeEPv(i48);
          break;
         } else {
          HEAP32[i50 >> 2] = i51;
          break;
         }
        }
       } while (0);
       i46 = i46 + 4 | 0;
       if ((i46 | 0) == (i49 | 0)) {
        break;
       }
      }
      HEAP32[i44 >> 2] = 0;
     }
     i49 = HEAP32[i47 >> 2] | 0;
     if ((i49 | 0) != 0) {
      HEAP32[i47 >> 2] = 0;
      HEAP32[i43 + 4 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i49);
     }
     i43 = i43 + 12 | 0;
     if ((i43 | 0) == (i45 | 0)) {
      break;
     }
    }
    HEAP32[i32 >> 2] = 0;
   }
   i45 = HEAP32[i36 >> 2] | 0;
   if ((i45 | 0) != 0) {
    HEAP32[i36 >> 2] = 0;
    HEAP32[i14 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i45);
   }
   if ((HEAP32[i42 >> 2] | 0) != 0) {
    HEAP32[i42 >> 2] = 0;
   }
   i45 = HEAP32[i40 >> 2] | 0;
   if ((i45 | 0) != 0) {
    HEAP32[i40 >> 2] = 0;
    HEAP32[i41 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i45);
   }
   i45 = HEAP32[i27 >> 2] | 0;
   do {
    if ((i45 | 0) != 0) {
     i43 = i45 | 0;
     i35 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
     if ((i35 | 0) == 0) {
      __ZN7WebCore6IDBKeyD1Ev(i45);
      __ZN3WTF8fastFreeEPv(i45);
      break;
     } else {
      HEAP32[i43 >> 2] = i35;
      break;
     }
    }
   } while (0);
   i45 = HEAP32[i22 >> 2] | 0;
   if ((i45 | 0) != 0) {
    i27 = HEAP32[i25 >> 2] | 0;
    i41 = i27 + (i45 * 12 & -1) | 0;
    i45 = i27;
    while (1) {
     i27 = i45 + 8 | 0;
     i40 = HEAP32[i27 >> 2] | 0;
     i42 = i45 | 0;
     if ((i40 | 0) != 0) {
      i36 = HEAP32[i42 >> 2] | 0;
      i32 = i36 + (i40 << 2) | 0;
      i40 = i36;
      while (1) {
       i36 = HEAP32[i40 >> 2] | 0;
       do {
        if ((i36 | 0) != 0) {
         i35 = i36 | 0;
         i43 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
         if ((i43 | 0) == 0) {
          __ZN7WebCore6IDBKeyD1Ev(i36);
          __ZN3WTF8fastFreeEPv(i36);
          break;
         } else {
          HEAP32[i35 >> 2] = i43;
          break;
         }
        }
       } while (0);
       i40 = i40 + 4 | 0;
       if ((i40 | 0) == (i32 | 0)) {
        break;
       }
      }
      HEAP32[i27 >> 2] = 0;
     }
     i32 = HEAP32[i42 >> 2] | 0;
     if ((i32 | 0) != 0) {
      HEAP32[i42 >> 2] = 0;
      HEAP32[i45 + 4 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i32);
     }
     i45 = i45 + 12 | 0;
     if ((i45 | 0) == (i41 | 0)) {
      break;
     }
    }
    HEAP32[i22 >> 2] = 0;
   }
   i41 = HEAP32[i25 >> 2] | 0;
   if (!((i26 | 0) == (i41 | 0) | (i41 | 0) == 0)) {
    HEAP32[i25 >> 2] = 0;
    HEAP32[i24 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i41);
   }
   i41 = HEAP32[i30 >> 2] | 0;
   if ((i41 | 0) != 0) {
    i45 = HEAP32[i29 >> 2] | 0;
    i32 = i45 + (i41 << 2) | 0;
    i41 = i45;
    while (1) {
     i45 = HEAP32[i41 >> 2] | 0;
     do {
      if ((i45 | 0) != 0) {
       i40 = i45 | 0;
       i47 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
       if ((i47 | 0) == 0) {
        __ZN7WebCore6IDBKeyD1Ev(i45);
        __ZN3WTF8fastFreeEPv(i45);
        break;
       } else {
        HEAP32[i40 >> 2] = i47;
        break;
       }
      }
     } while (0);
     i41 = i41 + 4 | 0;
     if ((i41 | 0) == (i32 | 0)) {
      break;
     }
    }
    HEAP32[i30 >> 2] = 0;
   }
   i32 = HEAP32[i29 >> 2] | 0;
   if ((i32 | 0) != 0) {
    HEAP32[i29 >> 2] = 0;
    HEAP32[i28 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i32);
   }
   __ZN10Deprecated11ScriptValueD1Ev(i9);
   if (i20) {
    break;
   }
   i32 = i23 | 0;
   i41 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
   if ((i41 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i23);
    __ZN3WTF8fastFreeEPv(i23);
    break;
   } else {
    HEAP32[i32 >> 2] = i41;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i19 >> 2] | 0) != 0) {
  HEAP32[i19 >> 2] = 0;
 }
 i19 = HEAP32[i16 >> 2] | 0;
 if (!((i5 | 0) == (i19 | 0) | (i19 | 0) == 0)) {
  HEAP32[i16 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i19);
 }
 do {
  if (!i21) {
   i19 = i18 + 8 | 0;
   i3 = i19 | 0;
   i16 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i3 >> 2] = i16;
    break;
   }
   i16 = i19 - 8 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 7](i16);
  }
 } while (0);
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i18 = i4 + 4 | 0;
 i4 = i18 | 0;
 i21 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i21 | 0) != 0) {
  HEAP32[i4 >> 2] = i21;
  STACKTOP = i2;
  return;
 }
 i21 = i18 - 4 | 0;
 if ((i21 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore6IDBAnyD1Ev(i21);
 __ZN3WTF8fastFreeEPv(i21);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore14IDBObjectStore11deleteIndexERKN3WTF6StringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 + 80 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((HEAP32[i8 + 84 >> 2] | 0) == 2) {
   if ((HEAP8[i1 + 84 | 0] & 1) != 0) {
    break;
   }
   if ((HEAP32[i8 + 88 >> 2] | 0) != 1) {
    HEAP32[i3 >> 2] = 1204;
    STACKTOP = i4;
    return;
   }
   i9 = i1 + 68 | 0;
   i10 = i1 + 56 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   i12 = i1 + 60 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   i14 = i11 + (i13 * 48 & -1) | 0;
   L8 : do {
    if ((HEAP32[i9 >> 2] | 0) != 0) {
     L10 : do {
      if ((i13 | 0) == 0) {
       i15 = i11;
      } else {
       i16 = i11;
       while (1) {
        i17 = i16 | 0;
        i18 = HEAP32[i17 >> 2] | 0;
        i19 = HEAP32[i17 + 4 >> 2] | 0;
        if (!((i18 | 0) == (-1 | 0) & (i19 | 0) == (-1 | 0) | (i18 | 0) == 0 & (i19 | 0) == 0)) {
         i15 = i16;
         break L10;
        }
        i16 = i16 + 48 | 0;
        if ((i16 | 0) == (i14 | 0)) {
         break L8;
        }
       }
      }
     } while (0);
     if ((i15 | 0) == (i14 | 0)) {
      break;
     }
     i16 = i2 | 0;
     i19 = i15;
     while (1) {
      if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i19 + 8 >> 2] | 0, HEAP32[i16 >> 2] | 0) | 0) {
       break;
      }
      i18 = i19 + 48 | 0;
      L19 : do {
       if ((i18 | 0) == (i14 | 0)) {
        i20 = i14;
       } else {
        i17 = i18;
        while (1) {
         i21 = i17 | 0;
         i22 = HEAP32[i21 >> 2] | 0;
         i23 = HEAP32[i21 + 4 >> 2] | 0;
         if (!((i22 | 0) == (-1 | 0) & (i23 | 0) == (-1 | 0) | (i22 | 0) == 0 & (i23 | 0) == 0)) {
          i20 = i17;
          break L19;
         }
         i23 = i17 + 48 | 0;
         if ((i23 | 0) == (i14 | 0)) {
          i20 = i14;
          break;
         } else {
          i17 = i23;
         }
        }
       }
      } while (0);
      if ((i20 | 0) == ((HEAP32[i10 >> 2] | 0) + ((HEAP32[i12 >> 2] | 0) * 48 & -1) | 0)) {
       break L8;
      } else {
       i19 = i20;
      }
     }
     i16 = i19 | 0;
     i18 = HEAP32[i16 >> 2] | 0;
     i17 = HEAP32[i16 + 4 >> 2] | 0;
     if ((i18 | 0) == (-1 | 0) & (i17 | 0) == (-1 | 0)) {
      break;
     }
     i16 = __ZNK7WebCore14IDBTransaction9backendDBEv(HEAP32[i7 >> 2] | 0) | 0;
     i23 = (HEAP32[i7 >> 2] | 0) + 56 | 0;
     i22 = i1 + 16 | 0;
     __ZN7WebCore18IDBDatabaseBackend11deleteIndexExxx(i16, HEAP32[i23 >> 2] | 0, HEAP32[i23 + 4 >> 2] | 0, HEAP32[i22 >> 2] | 0, HEAP32[i22 + 4 >> 2] | 0, i18, i17);
     i22 = i1 + 56 | 0;
     i23 = HEAP32[i22 >> 2] | 0;
     if ((i23 | 0) == 0) {
      i16 = HEAP32[i12 >> 2] | 0;
      i24 = i16 * 48 & -1 | 0;
      i25 = 0;
      i26 = i16;
     } else {
      i16 = HEAP32[i1 + 64 >> 2] | 0;
      i21 = _i64Add(i18, i17, ~0, ~i18) | 0;
      i27 = tempRet0;
      i28 = (i21 >>> 22 | i27 << 10) ^ i21;
      i21 = (i27 >>> 22 | 0 << 10) ^ i27;
      i27 = _i64Add(i28, i21, ~(i28 << 13 | 0 >>> 19), ~(i21 << 13 | i28 >>> 19)) | 0;
      i28 = tempRet0;
      i21 = ___muldi3((i27 >>> 8 | i28 << 24) ^ i27, (i28 >>> 8 | 0 << 24) ^ i28, 9, 0) | 0;
      i28 = tempRet0;
      i27 = (i21 >>> 15 | i28 << 17) ^ i21;
      i21 = (i28 >>> 15 | 0 << 17) ^ i28;
      i28 = _i64Add(i27, i21, ~(i27 << 27 | 0 >>> 5), ~(i21 << 27 | i27 >>> 5)) | 0;
      i27 = (i28 >>> 31 | tempRet0 << 1) ^ i28;
      i28 = i16 & i27;
      i21 = i23 + (i28 * 48 & -1) | 0;
      i29 = i21 | 0;
      i30 = HEAP32[i29 >> 2] | 0;
      i31 = HEAP32[i29 + 4 >> 2] | 0;
      L28 : do {
       if ((i30 | 0) == (i18 | 0) & (i31 | 0) == (i17 | 0)) {
        i32 = i21;
       } else {
        i29 = (i27 >>> 23) + ~i27 | 0;
        i33 = i29 << 12 ^ i29;
        i29 = i33 >>> 7 ^ i33;
        i33 = i29 << 2 ^ i29;
        i29 = i33 >>> 20 ^ i33 | 1;
        i33 = 0;
        i34 = i28;
        i35 = i31;
        i36 = i30;
        while (1) {
         if ((i36 | 0) == 0 & (i35 | 0) == 0) {
          i32 = 0;
          break L28;
         }
         i37 = (i33 | 0) == 0 ? i29 : i33;
         i38 = i37 + i34 & i16;
         i39 = i23 + (i38 * 48 & -1) | 0;
         i40 = i39 | 0;
         i41 = HEAP32[i40 >> 2] | 0;
         i42 = HEAP32[i40 + 4 >> 2] | 0;
         if ((i41 | 0) == (i18 | 0) & (i42 | 0) == (i17 | 0)) {
          i32 = i39;
          break;
         } else {
          i33 = i37;
          i34 = i38;
          i35 = i42;
          i36 = i41;
         }
        }
       }
      } while (0);
      i17 = HEAP32[i12 >> 2] | 0;
      i24 = (i32 | 0) == 0 ? i23 + (i17 * 48 & -1) | 0 : i32;
      i25 = i23;
      i26 = i17;
     }
     i17 = i22 | 0;
     do {
      if ((i24 | 0) != (i25 + (i26 * 48 & -1) | 0)) {
       __ZN7WebCore16IDBIndexMetadataD1Ev(i24 + 8 | 0);
       i18 = i24 | 0;
       HEAP32[i18 >> 2] = -1;
       HEAP32[i18 + 4 >> 2] = -1;
       i18 = i1 + 72 | 0;
       HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
       i18 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
       HEAP32[i9 >> 2] = i18;
       i16 = HEAP32[i12 >> 2] | 0;
       if (!((i18 * 6 & -1 | 0) < (i16 | 0) & (i16 | 0) > 8)) {
        break;
       }
       __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_(i17, (i16 | 0) / 2 & -1, 0) | 0;
      }
     } while (0);
     i17 = i1 + 88 | 0;
     __ZN3WTF7HashMapINS_6StringENS_6RefPtrIN7WebCore8IDBIndexEEENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE4findERKS1_(i6, i17, i2);
     i22 = HEAP32[i6 >> 2] | 0;
     if ((i22 | 0) == ((HEAP32[i17 >> 2] | 0) + (HEAP32[i1 + 92 >> 2] << 3) | 0)) {
      STACKTOP = i4;
      return;
     }
     HEAP8[(HEAP32[i22 + 4 >> 2] | 0) + 56 | 0] = 1;
     __ZN3WTF7HashMapINS_6StringENS_6RefPtrIN7WebCore8IDBIndexEEENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE4findERKS1_(i5, i17, i2);
     __ZN3WTF7HashMapINS_6StringENS_6RefPtrIN7WebCore8IDBIndexEEENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE6removeENS_24HashTableIteratorAdapterINS_9HashTableIS1_NS_12KeyValuePairIS1_S5_EENS_24KeyValuePairKeyExtractorISE_EES6_NSA_18KeyValuePairTraitsES8_EESE_EE(i17, i5) | 0;
     STACKTOP = i4;
     return;
    }
   } while (0);
   HEAP32[i3 >> 2] = 1207;
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP32[i3 >> 2] = 1208;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore6IDBKey21createMultiEntryArrayERKN3WTF6VectorINS1_6RefPtrIS0_EELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i3 = i2 + 8 | 0;
 L1 : do {
  if ((HEAP32[i3 >> 2] | 0) == 0) {
   i4 = 0;
   i5 = 0;
   i6 = 0;
   i7 = 0;
  } else {
   i8 = i2 | 0;
   i9 = 0;
   i10 = 0;
   i11 = 0;
   i12 = 0;
   i13 = 0;
   L3 : while (1) {
    L5 : do {
     if (__ZNK7WebCore6IDBKey7isValidEv(HEAP32[(HEAP32[i8 >> 2] | 0) + (i12 << 2) >> 2] | 0) | 0) {
      i14 = 0;
      while (1) {
       if ((HEAP32[i3 >> 2] | 0) >>> 0 <= i12 >>> 0) {
        i15 = 5;
        break L3;
       }
       i16 = (HEAP32[i8 >> 2] | 0) + (i12 << 2) | 0;
       if (i14 >>> 0 >= i9 >>> 0) {
        break;
       }
       if (__ZNK7WebCore6IDBKey7isEqualEPKS0_(HEAP32[i16 >> 2] | 0, HEAP32[i11 + (i14 << 2) >> 2] | 0) | 0) {
        i17 = i13;
        i18 = i11;
        i19 = i10;
        i20 = i9;
        break L5;
       } else {
        i14 = i14 + 1 | 0;
       }
      }
      do {
       if ((i9 | 0) == (i10 | 0)) {
        i14 = i10 + 1 | 0;
        do {
         if (i11 >>> 0 > i16 >>> 0) {
          i15 = 14;
         } else {
          if ((i11 + (i10 << 2) | 0) >>> 0 <= i16 >>> 0) {
           i15 = 14;
           break;
          }
          i21 = i16 - i11 >> 2;
          i22 = i14 + (i10 >>> 2) | 0;
          i23 = i22 >>> 0 > 16 >>> 0 ? i22 : 16;
          i22 = i23 >>> 0 > i14 >>> 0 ? i23 : i14;
          do {
           if (i10 >>> 0 < i22 >>> 0) {
            if (i22 >>> 0 > 1073741823 >>> 0) {
             i15 = 21;
             break L3;
            }
            i23 = __ZN3WTF18fastMallocGoodSizeEj(i22 << 2) | 0;
            i24 = i23 >>> 2;
            i25 = __ZN3WTF10fastMallocEj(i23) | 0;
            i23 = i25;
            i26 = i11;
            _memcpy(i25 | 0, i26 | 0, i10 << 2) | 0;
            if ((i11 | 0) == 0) {
             i27 = i23;
             i28 = i24;
             break;
            }
            i25 = (i23 | 0) == (i11 | 0);
            __ZN3WTF8fastFreeEPv(i26);
            i27 = i25 ? 0 : i23;
            i28 = i25 ? 0 : i24;
           } else {
            i27 = i11;
            i28 = i10;
           }
          } while (0);
          i29 = i27 + (i21 << 2) | 0;
          i30 = i27;
          i31 = i28;
         }
        } while (0);
        do {
         if ((i15 | 0) == 14) {
          i15 = 0;
          i22 = i14 + (i10 >>> 2) | 0;
          i24 = i22 >>> 0 > 16 >>> 0 ? i22 : 16;
          i22 = i24 >>> 0 > i14 >>> 0 ? i24 : i14;
          if (i10 >>> 0 >= i22 >>> 0) {
           i29 = i16;
           i30 = i11;
           i31 = i10;
           break;
          }
          if (i22 >>> 0 > 1073741823 >>> 0) {
           i15 = 16;
           break L3;
          }
          i24 = __ZN3WTF18fastMallocGoodSizeEj(i22 << 2) | 0;
          i22 = i24 >>> 2;
          i25 = __ZN3WTF10fastMallocEj(i24) | 0;
          i24 = i25;
          i23 = i11;
          _memcpy(i25 | 0, i23 | 0, i10 << 2) | 0;
          if ((i11 | 0) == 0) {
           i29 = i16;
           i30 = i24;
           i31 = i22;
           break;
          }
          i25 = (i24 | 0) == (i11 | 0);
          __ZN3WTF8fastFreeEPv(i23);
          i29 = i16;
          i30 = i25 ? 0 : i24;
          i31 = i25 ? 0 : i22;
         }
        } while (0);
        i22 = HEAP32[i29 >> 2] | 0;
        HEAP32[i30 + (i10 << 2) >> 2] = i22;
        if ((i22 | 0) == 0) {
         i32 = i30;
         i33 = i31;
         i34 = i14;
         break;
        }
        i25 = i22 | 0;
        HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
        i32 = i30;
        i33 = i31;
        i34 = i14;
       } else {
        i25 = HEAP32[i16 >> 2] | 0;
        HEAP32[i11 + (i9 << 2) >> 2] = i25;
        if ((i25 | 0) != 0) {
         i22 = i25 | 0;
         HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
        }
        i32 = i11;
        i33 = i10;
        i34 = i9 + 1 | 0;
       }
      } while (0);
      if ((HEAP32[i3 >> 2] | 0) >>> 0 <= i12 >>> 0) {
       i15 = 28;
       break L3;
      }
      i17 = (HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + (i12 << 2) >> 2] | 0) + 32 >> 2] | 0) + i13 | 0;
      i18 = i32;
      i19 = i33;
      i20 = i34;
     } else {
      i17 = i13;
      i18 = i11;
      i19 = i10;
      i20 = i9;
     }
    } while (0);
    i22 = i12 + 1 | 0;
    if (i22 >>> 0 < (HEAP32[i3 >> 2] | 0) >>> 0) {
     i9 = i20;
     i10 = i19;
     i11 = i18;
     i12 = i22;
     i13 = i17;
    } else {
     i4 = i20;
     i5 = i19;
     i6 = i18;
     i7 = i17;
     break L1;
    }
   }
   if ((i15 | 0) == 16) {
    _WTFCrash();
   } else if ((i15 | 0) == 21) {
    _WTFCrash();
   } else if ((i15 | 0) == 28) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i15 | 0) == 5) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 i15 = __ZN3WTF10fastMallocEj(40) | 0;
 i17 = i15;
 HEAP32[i15 >> 2] = 1;
 HEAP32[i15 + 4 >> 2] = 1;
 i18 = i15 + 8 | 0;
 HEAP32[i18 >> 2] = 0;
 i19 = i15 + 12 | 0;
 HEAP32[i19 >> 2] = 0;
 HEAP32[i15 + 16 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   if (i5 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i20 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
   HEAP32[i19 >> 2] = i20 >>> 2;
   i3 = __ZN3WTF10fastMallocEj(i20) | 0;
   i20 = i3;
   HEAP32[i18 >> 2] = i20;
   if ((i3 | 0) == 0) {
    break;
   }
   i3 = i6 + (i4 << 2) | 0;
   if ((i4 | 0) == 0) {
    break;
   } else {
    i35 = i6;
    i36 = i20;
   }
   while (1) {
    i20 = HEAP32[i35 >> 2] | 0;
    HEAP32[i36 >> 2] = i20;
    if ((i20 | 0) != 0) {
     i34 = i20 | 0;
     HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 1;
    }
    i34 = i35 + 4 | 0;
    if ((i34 | 0) == (i3 | 0)) {
     break;
    } else {
     i35 = i34;
     i36 = i36 + 4 | 0;
    }
   }
  }
 } while (0);
 HEAP32[i15 + 20 >> 2] = 0;
 HEAPF64[i15 + 24 >> 3] = +0;
 HEAP32[i15 + 32 >> 2] = i7 + 16;
 HEAP32[i1 >> 2] = i17;
 if ((i4 | 0) != 0) {
  i17 = i6 + (i4 << 2) | 0;
  i4 = i6;
  while (1) {
   i1 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i7 = i1 | 0;
     i15 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     if ((i15 | 0) == 0) {
      __ZN7WebCore6IDBKeyD1Ev(i1);
      __ZN3WTF8fastFreeEPv(i1);
      break;
     } else {
      HEAP32[i7 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i17 | 0)) {
    break;
   }
  }
 }
 if ((i6 | 0) == 0) {
  return;
 }
 __ZN3WTF8fastFreeEPv(i6);
 return;
}
function __ZN7WebCore14IDBObjectStore5indexERKN3WTF6StringERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 if ((HEAP8[i2 + 84 | 0] & 1) != 0) {
  HEAP32[i4 >> 2] = 1208;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 i9 = i2 + 80 | 0;
 if ((HEAP32[(HEAP32[i9 >> 2] | 0) + 88 >> 2] | 0) == 3) {
  HEAP32[i4 >> 2] = 1208;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 i10 = i2 + 88 | 0;
 __ZN3WTF7HashMapINS_6StringENS_6RefPtrIN7WebCore8IDBIndexEEENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE4findERKS1_(i6, i10, i3);
 i11 = HEAP32[i6 >> 2] | 0;
 if ((i11 | 0) != ((HEAP32[i10 >> 2] | 0) + (HEAP32[i2 + 92 >> 2] << 3) | 0)) {
  i6 = HEAP32[i11 + 4 >> 2] | 0;
  HEAP32[i1 >> 2] = i6;
  if ((i6 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  i11 = i6 + 4 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
  STACKTOP = i5;
  return;
 }
 i11 = i2 + 68 | 0;
 i6 = i2 + 56 | 0;
 i12 = HEAP32[i6 >> 2] | 0;
 i13 = i2 + 60 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 i15 = i12 + (i14 * 48 & -1) | 0;
 L16 : do {
  if ((HEAP32[i11 >> 2] | 0) != 0) {
   L18 : do {
    if ((i14 | 0) == 0) {
     i16 = i12;
    } else {
     i17 = i12;
     while (1) {
      i18 = i17 | 0;
      i19 = HEAP32[i18 >> 2] | 0;
      i20 = HEAP32[i18 + 4 >> 2] | 0;
      if (!((i19 | 0) == (-1 | 0) & (i20 | 0) == (-1 | 0) | (i19 | 0) == 0 & (i20 | 0) == 0)) {
       i16 = i17;
       break L18;
      }
      i17 = i17 + 48 | 0;
      if ((i17 | 0) == (i15 | 0)) {
       break L16;
      }
     }
    }
   } while (0);
   if ((i16 | 0) == (i15 | 0)) {
    break;
   }
   i17 = i3 | 0;
   i20 = i16;
   while (1) {
    if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i20 + 8 >> 2] | 0, HEAP32[i17 >> 2] | 0) | 0) {
     break;
    }
    i19 = i20 + 48 | 0;
    L27 : do {
     if ((i19 | 0) == (i15 | 0)) {
      i21 = i15;
     } else {
      i18 = i19;
      while (1) {
       i22 = i18 | 0;
       i23 = HEAP32[i22 >> 2] | 0;
       i24 = HEAP32[i22 + 4 >> 2] | 0;
       if (!((i23 | 0) == (-1 | 0) & (i24 | 0) == (-1 | 0) | (i23 | 0) == 0 & (i24 | 0) == 0)) {
        i21 = i18;
        break L27;
       }
       i24 = i18 + 48 | 0;
       if ((i24 | 0) == (i15 | 0)) {
        i21 = i15;
        break;
       } else {
        i18 = i24;
       }
      }
     }
    } while (0);
    if ((i21 | 0) == ((HEAP32[i6 >> 2] | 0) + ((HEAP32[i13 >> 2] | 0) * 48 & -1) | 0)) {
     break L16;
    } else {
     i20 = i21;
    }
   }
   i19 = i20 | 0;
   if ((HEAP32[i19 >> 2] | 0) == (-1 | 0) & (HEAP32[i19 + 4 >> 2] | 0) == (-1 | 0)) {
    break;
   }
   i19 = HEAP32[i6 >> 2] | 0;
   i18 = HEAP32[i13 >> 2] | 0;
   i24 = i19 + (i18 * 48 & -1) | 0;
   L34 : do {
    if ((HEAP32[i11 >> 2] | 0) == 0) {
     i25 = 0;
    } else {
     L36 : do {
      if ((i18 | 0) == 0) {
       i26 = i19;
      } else {
       i23 = i19;
       while (1) {
        i22 = i23 | 0;
        i27 = HEAP32[i22 >> 2] | 0;
        i28 = HEAP32[i22 + 4 >> 2] | 0;
        if (!((i27 | 0) == (-1 | 0) & (i28 | 0) == (-1 | 0) | (i27 | 0) == 0 & (i28 | 0) == 0)) {
         i26 = i23;
         break L36;
        }
        i28 = i23 + 48 | 0;
        if ((i28 | 0) == (i24 | 0)) {
         i25 = 0;
         break L34;
        } else {
         i23 = i28;
        }
       }
      }
     } while (0);
     if ((i26 | 0) == (i24 | 0)) {
      i25 = 0;
      break;
     } else {
      i29 = i26;
     }
     while (1) {
      if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i29 + 8 >> 2] | 0, HEAP32[i17 >> 2] | 0) | 0) {
       break;
      }
      i23 = i29 + 48 | 0;
      L44 : do {
       if ((i23 | 0) == (i24 | 0)) {
        i30 = i24;
       } else {
        i28 = i23;
        while (1) {
         i27 = i28 | 0;
         i22 = HEAP32[i27 >> 2] | 0;
         i31 = HEAP32[i27 + 4 >> 2] | 0;
         if (!((i22 | 0) == (-1 | 0) & (i31 | 0) == (-1 | 0) | (i22 | 0) == 0 & (i31 | 0) == 0)) {
          i30 = i28;
          break L44;
         }
         i31 = i28 + 48 | 0;
         if ((i31 | 0) == (i24 | 0)) {
          i30 = i24;
          break;
         } else {
          i28 = i31;
         }
        }
       }
      } while (0);
      if ((i30 | 0) == ((HEAP32[i6 >> 2] | 0) + ((HEAP32[i13 >> 2] | 0) * 48 & -1) | 0)) {
       i25 = 0;
       break L34;
      } else {
       i29 = i30;
      }
     }
     i25 = i29 + 8 | 0;
    }
   } while (0);
   i24 = HEAP32[i9 >> 2] | 0;
   i17 = __ZN3WTF10fastMallocEj(64) | 0;
   __ZN7WebCore8IDBIndexC1ERKNS_16IDBIndexMetadataEPNS_14IDBObjectStoreEPNS_14IDBTransactionE(i17, i25, i2, i24);
   i24 = i7 | 0;
   HEAP32[i24 >> 2] = i17;
   __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore8IDBIndexEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i8, i10 | 0, i3, i7);
   do {
    if ((HEAP8[i8 + 8 | 0] & 1) == 0) {
     i17 = HEAP32[i8 >> 2] | 0;
     i19 = HEAP32[i24 >> 2] | 0;
     if ((i19 | 0) != 0) {
      i18 = i19 + 4 | 0;
      HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
     }
     i18 = i17 + 4 | 0;
     i17 = HEAP32[i18 >> 2] | 0;
     HEAP32[i18 >> 2] = i19;
     if ((i17 | 0) == 0) {
      i32 = i19;
      break;
     }
     i18 = i17 + 4 | 0;
     i17 = i18 | 0;
     i20 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     if ((i20 | 0) != 0) {
      HEAP32[i17 >> 2] = i20;
      i32 = i19;
      break;
     }
     i20 = i18 - 4 | 0;
     if ((i20 | 0) == 0) {
      i32 = i19;
      break;
     }
     __ZN7WebCore8IDBIndexD1Ev(i20);
     __ZN3WTF8fastFreeEPv(i20);
     i32 = i19;
    } else {
     i32 = HEAP32[i24 >> 2] | 0;
    }
   } while (0);
   HEAP32[i1 >> 2] = i32;
   HEAP32[i24 >> 2] = 0;
   STACKTOP = i5;
   return;
  }
 } while (0);
 HEAP32[i4 >> 2] = 1207;
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore8IDBIndexEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = i2 + 4 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i9 = 8;
   i10 = 0;
  } else {
   i11 = i8 << 1;
   i9 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i11 | 0) ? i8 : i11;
   i10 = i8;
  }
  HEAP32[i7 >> 2] = i9;
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = i9 - 1;
  HEAP32[i5 >> 2] = __ZN3WTF16fastZeroedMallocEj(i9 << 3) | 0;
  if ((i10 | 0) != 0) {
   i9 = 0;
   while (1) {
    i8 = i9 << 3 | 0;
    i11 = HEAP32[i8 >> 2] | 0;
    if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
     __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore8IDBIndexEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E8reinsertEOS7_(i2, i8) | 0;
    }
    i9 = i9 + 1 | 0;
    if ((i9 | 0) == (i10 | 0)) {
     break;
    }
   }
  }
  HEAP32[i2 + 16 >> 2] = 0;
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore8IDBIndexEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS7_i(0, i10);
  i12 = HEAP32[i5 >> 2] | 0;
  i13 = i7;
 } else {
  i12 = i6;
  i13 = i2 + 8 | 0;
 }
 i6 = HEAP32[i13 >> 2] | 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 i10 = HEAP32[i3 + 16 >> 2] | 0;
 if (i10 >>> 0 > 127 >>> 0) {
  i14 = i10 >>> 7;
 } else {
  i14 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i14 >>> 23) + ~i14 | 0;
 i10 = i3 << 12 ^ i3;
 i3 = i10 >>> 7 ^ i10;
 i10 = i3 << 2 ^ i3;
 i3 = i10 >>> 20 ^ i10 | 1;
 i10 = 0;
 i9 = i14;
 i14 = 0;
 while (1) {
  i8 = i9 & i6;
  i15 = i12 + (i8 << 3) | 0;
  i11 = HEAP32[i15 >> 2] | 0;
  i16 = i11;
  if ((i16 | 0) == (-1 | 0)) {
   i17 = i15;
  } else if ((i16 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i11, HEAP32[i7 >> 2] | 0) | 0) {
    i18 = 16;
    break;
   } else {
    i17 = i10;
   }
  }
  i11 = (i14 | 0) == 0 ? i3 : i14;
  i10 = i17;
  i9 = i11 + i8 | 0;
  i14 = i11;
 }
 if ((i18 | 0) == 16) {
  i18 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i14 = i1;
  HEAP32[i14 >> 2] = i15;
  HEAP32[i14 + 4 >> 2] = i18;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i10 | 0) == 0) {
  i19 = i15;
 } else {
  i15 = i10;
  HEAP32[i15 >> 2] = 0;
  HEAP32[i15 + 4 >> 2] = 0;
  i15 = i2 + 16 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) - 1;
  i19 = i10;
 }
 i10 = HEAP32[i7 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i7 = i10 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i19 | 0;
 i15 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i10;
 do {
  if ((i15 | 0) != 0) {
   i10 = i15 | 0;
   i7 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i10 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i15 = HEAP32[i4 >> 2] | 0;
 if ((i15 | 0) != 0) {
  i4 = i15 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i19 + 4 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i15;
 do {
  if ((i7 | 0) != 0) {
   i15 = i7 + 4 | 0;
   i4 = i15 | 0;
   i10 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i4 >> 2] = i10;
    break;
   }
   i10 = i15 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   __ZN7WebCore8IDBIndexD1Ev(i10);
   __ZN3WTF8fastFreeEPv(i10);
  }
 } while (0);
 i7 = i2 + 12 | 0;
 i10 = (HEAP32[i7 >> 2] | 0) + 1 | 0;
 HEAP32[i7 >> 2] = i10;
 i7 = i2 + 16 | 0;
 i15 = i2 + 4 | 0;
 i4 = HEAP32[i15 >> 2] | 0;
 if (((HEAP32[i7 >> 2] | 0) + i10 << 1 | 0) < (i4 | 0)) {
  i20 = i19;
  i21 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i22 = 8;
   i23 = 0;
  } else {
   i18 = i4 << 1;
   i22 = (i10 * 6 & -1 | 0) < (i18 | 0) ? i4 : i18;
   i23 = i4;
  }
  i4 = HEAP32[i5 >> 2] | 0;
  HEAP32[i15 >> 2] = i22;
  HEAP32[i13 >> 2] = i22 - 1;
  HEAP32[i5 >> 2] = __ZN3WTF16fastZeroedMallocEj(i22 << 3) | 0;
  if ((i23 | 0) == 0) {
   i24 = 0;
  } else {
   i22 = 0;
   i13 = 0;
   while (1) {
    i18 = i4 + (i22 << 3) | 0;
    i10 = HEAP32[i18 >> 2] | 0;
    if ((i10 | 0) == (-1 | 0) | (i10 | 0) == 0) {
     i25 = i13;
    } else {
     i10 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore8IDBIndexEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E8reinsertEOS7_(i2, i18) | 0;
     i25 = (i18 | 0) == (i19 | 0) ? i10 : i13;
    }
    i10 = i22 + 1 | 0;
    if ((i10 | 0) == (i23 | 0)) {
     i24 = i25;
     break;
    } else {
     i22 = i10;
     i13 = i25;
    }
   }
  }
  HEAP32[i7 >> 2] = 0;
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore8IDBIndexEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS7_i(i4, i23);
  i20 = i24;
  i21 = HEAP32[i15 >> 2] | 0;
 }
 i15 = (HEAP32[i5 >> 2] | 0) + (i21 << 3) | 0;
 i21 = i1;
 HEAP32[i21 >> 2] = i20;
 HEAP32[i21 + 4 >> 2] = i15;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCoreL25generateIndexKeysForValueEPNS_15DOMRequestStateERKNS_16IDBIndexMetadataERKN10Deprecated11ScriptValueEPN3WTF6VectorINS9_6RefPtrINS_6IDBKeyEEELj0ENS9_15CrashOnOverflowEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 __ZN7WebCore37createIDBKeyFromScriptValueAndKeyPathEPNS_15DOMRequestStateERKN10Deprecated11ScriptValueERKNS_10IDBKeyPathE(i7, i1, i3, i2 + 16 | 0);
 i3 = i6 | 0;
 i1 = i7 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i3 >> 2] = i7;
 L1 : do {
  if ((i7 | 0) == 0) {
   i9 = 30;
  } else {
   do {
    if ((HEAP8[i2 + 37 | 0] & 1) != 0) {
     if ((HEAP32[i7 + 4 >> 2] | 0) != 1) {
      break;
     }
     __ZN7WebCore6IDBKey21createMultiEntryArrayERKN3WTF6VectorINS1_6RefPtrIS0_EELj0ENS1_15CrashOnOverflowEEE(i8, i7 + 8 | 0);
     i1 = i8 | 0;
     i10 = HEAP32[i1 >> 2] | 0;
     HEAP32[i1 >> 2] = 0;
     i1 = HEAP32[i3 >> 2] | 0;
     HEAP32[i3 >> 2] = i10;
     do {
      if ((i1 | 0) != 0) {
       i10 = i1 | 0;
       i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
       if ((i11 | 0) == 0) {
        __ZN7WebCore6IDBKeyD1Ev(i1);
        __ZN3WTF8fastFreeEPv(i1);
        break;
       } else {
        HEAP32[i10 >> 2] = i11;
        break;
       }
      }
     } while (0);
     i1 = HEAP32[i3 >> 2] | 0;
     if ((HEAP32[i1 + 16 >> 2] | 0) == 0) {
      i12 = i1;
      break L1;
     }
     i11 = i4 + 8 | 0;
     i10 = i4 + 4 | 0;
     i13 = i4 | 0;
     i14 = 0;
     i15 = i1;
     i1 = HEAP32[i11 >> 2] | 0;
     while (1) {
      i16 = (HEAP32[i15 + 8 >> 2] | 0) + (i14 << 2) | 0;
      do {
       if ((i1 | 0) == (HEAP32[i10 >> 2] | 0)) {
        i17 = i1 + 1 | 0;
        i18 = HEAP32[i13 >> 2] | 0;
        do {
         if (i18 >>> 0 > i16 >>> 0) {
          i9 = 25;
         } else {
          if ((i18 + (i1 << 2) | 0) >>> 0 <= i16 >>> 0) {
           i9 = 25;
           break;
          }
          __ZN3WTF6VectorINS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i17);
          i19 = HEAP32[i13 >> 2] | 0;
          i20 = i19 + (i16 - i18 >> 2 << 2) | 0;
          i21 = i19;
         }
        } while (0);
        if ((i9 | 0) == 25) {
         i9 = 0;
         __ZN3WTF6VectorINS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i17);
         i20 = i16;
         i21 = HEAP32[i13 >> 2] | 0;
        }
        i18 = HEAP32[i20 >> 2] | 0;
        HEAP32[i21 + (HEAP32[i11 >> 2] << 2) >> 2] = i18;
        if ((i18 | 0) == 0) {
         break;
        }
        i19 = i18 | 0;
        HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
       } else {
        i19 = HEAP32[i16 >> 2] | 0;
        HEAP32[(HEAP32[i13 >> 2] | 0) + (i1 << 2) >> 2] = i19;
        if ((i19 | 0) == 0) {
         break;
        }
        i18 = i19 | 0;
        HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
       }
      } while (0);
      i16 = (HEAP32[i11 >> 2] | 0) + 1 | 0;
      HEAP32[i11 >> 2] = i16;
      i18 = i14 + 1 | 0;
      i19 = HEAP32[i3 >> 2] | 0;
      if (i18 >>> 0 < (HEAP32[i19 + 16 >> 2] | 0) >>> 0) {
       i14 = i18;
       i15 = i19;
       i1 = i16;
      } else {
       i12 = i19;
       break L1;
      }
     }
    }
   } while (0);
   if (!(__ZNK7WebCore6IDBKey7isValidEv(i7) | 0)) {
    i9 = 30;
    break;
   }
   i1 = i4 + 8 | 0;
   i15 = HEAP32[i1 >> 2] | 0;
   if ((i15 | 0) != (HEAP32[i4 + 4 >> 2] | 0)) {
    HEAP32[(HEAP32[i4 >> 2] | 0) + (i15 << 2) >> 2] = i7;
    i14 = i7 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
    HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
    i9 = 30;
    break;
   }
   i14 = i15 + 1 | 0;
   i11 = i4 | 0;
   i13 = HEAP32[i11 >> 2] | 0;
   do {
    if (i13 >>> 0 > i6 >>> 0) {
     i9 = 9;
    } else {
     if ((i13 + (i15 << 2) | 0) >>> 0 <= i6 >>> 0) {
      i9 = 9;
      break;
     }
     __ZN3WTF6VectorINS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i14);
     i10 = HEAP32[i11 >> 2] | 0;
     i22 = i10 + (i6 - i13 >> 2 << 2) | 0;
     i23 = i10;
    }
   } while (0);
   if ((i9 | 0) == 9) {
    __ZN3WTF6VectorINS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i14);
    i22 = i6;
    i23 = HEAP32[i11 >> 2] | 0;
   }
   i13 = HEAP32[i22 >> 2] | 0;
   HEAP32[i23 + (HEAP32[i1 >> 2] << 2) >> 2] = i13;
   if ((i13 | 0) != 0) {
    i15 = i13 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
   }
   HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
   i9 = 30;
  }
 } while (0);
 if ((i9 | 0) == 30) {
  i12 = HEAP32[i3 >> 2] | 0;
 }
 if ((i12 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i3 = i12 | 0;
 i9 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i9 | 0) == 0) {
  __ZN7WebCore6IDBKeyD1Ev(i12);
  __ZN3WTF8fastFreeEPv(i12);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i3 >> 2] = i9;
  STACKTOP = i5;
  return;
 }
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKxRS3_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
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
  __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_(i2, i10, 0) | 0;
  i12 = HEAP32[i7 >> 2] | 0;
 } else {
  i12 = i8;
 }
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 i11 = HEAP32[i3 + 4 >> 2] | 0;
 i9 = _i64Add(i10, i11, ~0, ~i10) | 0;
 i13 = tempRet0;
 i14 = (i9 >>> 22 | i13 << 10) ^ i9;
 i9 = (i13 >>> 22 | 0 << 10) ^ i13;
 i13 = _i64Add(i14, i9, ~(i14 << 13 | 0 >>> 19), ~(i9 << 13 | i14 >>> 19)) | 0;
 i14 = tempRet0;
 i9 = ___muldi3((i13 >>> 8 | i14 << 24) ^ i13, (i14 >>> 8 | 0 << 24) ^ i14, 9, 0) | 0;
 i14 = tempRet0;
 i13 = (i9 >>> 15 | i14 << 17) ^ i9;
 i9 = (i14 >>> 15 | 0 << 17) ^ i14;
 i14 = _i64Add(i13, i9, ~(i13 << 27 | 0 >>> 5), ~(i9 << 27 | i13 >>> 5)) | 0;
 i13 = (i14 >>> 31 | tempRet0 << 1) ^ i14;
 i14 = i13 & i8;
 i9 = i12 + (i14 * 48 & -1) | 0;
 i15 = i9 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 i17 = HEAP32[i15 + 4 >> 2] | 0;
 do {
  if ((i16 | 0) == 0 & (i17 | 0) == 0) {
   i18 = i9;
   i19 = 11;
  } else {
   i15 = (i13 >>> 23) + ~i13 | 0;
   i20 = i15 << 12 ^ i15;
   i15 = i20 >>> 7 ^ i20;
   i20 = i15 << 2 ^ i15;
   i15 = i20 >>> 20 ^ i20 | 1;
   i20 = 0;
   i21 = 0;
   i22 = i14;
   i23 = i9;
   i24 = i17;
   i25 = i16;
   while (1) {
    if ((i25 | 0) == (i10 | 0) & (i24 | 0) == (i11 | 0)) {
     i19 = 8;
     break;
    }
    i26 = (i25 | 0) == (-1 | 0) & (i24 | 0) == (-1 | 0) ? i23 : i21;
    i27 = (i20 | 0) == 0 ? i15 : i20;
    i28 = i27 + i22 & i8;
    i29 = i12 + (i28 * 48 & -1) | 0;
    i30 = i29 | 0;
    i31 = HEAP32[i30 >> 2] | 0;
    i32 = HEAP32[i30 + 4 >> 2] | 0;
    if ((i31 | 0) == 0 & (i32 | 0) == 0) {
     i19 = 10;
     break;
    } else {
     i20 = i27;
     i21 = i26;
     i22 = i28;
     i23 = i29;
     i24 = i32;
     i25 = i31;
    }
   }
   if ((i19 | 0) == 8) {
    i25 = i12 + ((HEAP32[i2 + 4 >> 2] | 0) * 48 & -1) | 0;
    i24 = i1;
    HEAP32[i24 >> 2] = i23;
    HEAP32[i24 + 4 >> 2] = i25;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i5;
    return;
   } else if ((i19 | 0) == 10) {
    if ((i26 | 0) == 0) {
     i18 = i29;
     i19 = 11;
     break;
    }
    _memset(i6 + 16 | 0, 0, 16) | 0;
    i25 = i26 | 0;
    HEAP32[i25 >> 2] = 0;
    HEAP32[i25 + 4 >> 2] = 0;
    HEAP32[i6 >> 2] = 0;
    HEAP32[i26 + 8 >> 2] = 0;
    HEAP32[i26 + 24 >> 2] = 0;
    HEAP32[i6 + 20 >> 2] = 0;
    _memset(i26 + 28 | 0, 0, 16) | 0;
    HEAP32[i6 + 32 >> 2] = 0;
    HEAP32[i26 + 32 >> 2] = 0;
    HEAP32[i6 + 24 >> 2] = 0;
    HEAP32[i26 + 36 >> 2] = 0;
    HEAP32[i6 + 28 >> 2] = 0;
    HEAP8[i26 + 44 | 0] = 0;
    HEAP8[i26 + 45 | 0] = 0;
    __ZN7WebCore16IDBIndexMetadataD1Ev(i6);
    i25 = i2 + 16 | 0;
    HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) - 1;
    i33 = i26;
    i34 = HEAP32[i3 + 4 >> 2] | 0;
    i35 = HEAP32[i3 >> 2] | 0;
    i36 = i25;
    break;
   }
  }
 } while (0);
 if ((i19 | 0) == 11) {
  i33 = i18;
  i34 = i11;
  i35 = i10;
  i36 = i2 + 16 | 0;
 }
 i10 = i33 | 0;
 HEAP32[i10 >> 2] = i35;
 HEAP32[i10 + 4 >> 2] = i34;
 __ZN7WebCore16IDBIndexMetadataaSERKS0_(i33 + 8 | 0, i4) | 0;
 i4 = i2 + 12 | 0;
 i34 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i34;
 i4 = i2 + 4 | 0;
 i10 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i36 >> 2] | 0) + i34 << 1 | 0) < (i10 | 0)) {
  i37 = i33;
  i38 = i10;
 } else {
  if ((i10 | 0) == 0) {
   i39 = 8;
  } else {
   i36 = i10 << 1;
   i39 = (i34 * 6 & -1 | 0) < (i36 | 0) ? i10 : i36;
  }
  i36 = __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_(i2, i39, i33) | 0;
  i37 = i36;
  i38 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i7 >> 2] | 0) + (i38 * 48 & -1) | 0;
 i38 = i1;
 HEAP32[i38 >> 2] = i37;
 HEAP32[i38 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function ___udivmoddi4(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i6 = i1;
 i7 = i2;
 i8 = i7;
 i9 = i3;
 i10 = i4;
 i11 = i10;
 if ((i8 | 0) == 0) {
  i12 = (i5 | 0) != 0;
  if ((i11 | 0) == 0) {
   if (i12) {
    HEAP32[i5 >> 2] = (i6 >>> 0) % (i9 >>> 0);
    HEAP32[i5 + 4 >> 2] = 0;
   }
   i13 = 0;
   i14 = (i6 >>> 0) / (i9 >>> 0) >>> 0;
   return (tempRet0 = i13, i14) | 0;
  } else {
   if (!i12) {
    i13 = 0;
    i14 = 0;
    return (tempRet0 = i13, i14) | 0;
   }
   HEAP32[i5 >> 2] = i1 & -1;
   HEAP32[i5 + 4 >> 2] = i2 & 0;
   i13 = 0;
   i14 = 0;
   return (tempRet0 = i13, i14) | 0;
  }
 }
 i12 = (i11 | 0) == 0;
 do {
  if ((i9 | 0) == 0) {
   if (i12) {
    if ((i5 | 0) != 0) {
     HEAP32[i5 >> 2] = (i8 >>> 0) % (i9 >>> 0);
     HEAP32[i5 + 4 >> 2] = 0;
    }
    i13 = 0;
    i14 = (i8 >>> 0) / (i9 >>> 0) >>> 0;
    return (tempRet0 = i13, i14) | 0;
   }
   if ((i6 | 0) == 0) {
    if ((i5 | 0) != 0) {
     HEAP32[i5 >> 2] = 0;
     HEAP32[i5 + 4 >> 2] = (i8 >>> 0) % (i11 >>> 0);
    }
    i13 = 0;
    i14 = (i8 >>> 0) / (i11 >>> 0) >>> 0;
    return (tempRet0 = i13, i14) | 0;
   }
   i15 = i11 - 1 | 0;
   if ((i15 & i11 | 0) == 0) {
    if ((i5 | 0) != 0) {
     HEAP32[i5 >> 2] = i1 & -1;
     HEAP32[i5 + 4 >> 2] = i15 & i8 | i2 & 0;
    }
    i13 = 0;
    i14 = i8 >>> ((_llvm_cttz_i32(i11 | 0) | 0) >>> 0);
    return (tempRet0 = i13, i14) | 0;
   }
   i15 = (_llvm_ctlz_i32(i11 | 0) | 0) - (_llvm_ctlz_i32(i8 | 0) | 0) | 0;
   if (i15 >>> 0 <= 30) {
    i16 = i15 + 1 | 0;
    i17 = 31 - i15 | 0;
    i18 = i16;
    i19 = i8 << i17 | i6 >>> (i16 >>> 0);
    i20 = i8 >>> (i16 >>> 0);
    i21 = 0;
    i22 = i6 << i17;
    break;
   }
   if ((i5 | 0) == 0) {
    i13 = 0;
    i14 = 0;
    return (tempRet0 = i13, i14) | 0;
   }
   HEAP32[i5 >> 2] = i1 & -1;
   HEAP32[i5 + 4 >> 2] = i7 | i2 & 0;
   i13 = 0;
   i14 = 0;
   return (tempRet0 = i13, i14) | 0;
  } else {
   if (!i12) {
    i17 = (_llvm_ctlz_i32(i11 | 0) | 0) - (_llvm_ctlz_i32(i8 | 0) | 0) | 0;
    if (i17 >>> 0 <= 31) {
     i16 = i17 + 1 | 0;
     i15 = 31 - i17 | 0;
     i23 = i17 - 31 >> 31;
     i18 = i16;
     i19 = i6 >>> (i16 >>> 0) & i23 | i8 << i15;
     i20 = i8 >>> (i16 >>> 0) & i23;
     i21 = 0;
     i22 = i6 << i15;
     break;
    }
    if ((i5 | 0) == 0) {
     i13 = 0;
     i14 = 0;
     return (tempRet0 = i13, i14) | 0;
    }
    HEAP32[i5 >> 2] = i1 & -1;
    HEAP32[i5 + 4 >> 2] = i7 | i2 & 0;
    i13 = 0;
    i14 = 0;
    return (tempRet0 = i13, i14) | 0;
   }
   i15 = i9 - 1 | 0;
   if ((i15 & i9 | 0) != 0) {
    i23 = (_llvm_ctlz_i32(i9 | 0) | 0) + 33 - (_llvm_ctlz_i32(i8 | 0) | 0) | 0;
    i16 = 64 - i23 | 0;
    i17 = 32 - i23 | 0;
    i24 = i17 >> 31;
    i25 = i23 - 32 | 0;
    i26 = i25 >> 31;
    i18 = i23;
    i19 = i17 - 1 >> 31 & i8 >>> (i25 >>> 0) | (i8 << i17 | i6 >>> (i23 >>> 0)) & i26;
    i20 = i26 & i8 >>> (i23 >>> 0);
    i21 = i6 << i16 & i24;
    i22 = (i8 << i16 | i6 >>> (i25 >>> 0)) & i24 | i6 << i17 & i23 - 33 >> 31;
    break;
   }
   if ((i5 | 0) != 0) {
    HEAP32[i5 >> 2] = i15 & i6;
    HEAP32[i5 + 4 >> 2] = 0;
   }
   if ((i9 | 0) == 1) {
    i13 = i7 | i2 & 0;
    i14 = i1 & -1 | 0;
    return (tempRet0 = i13, i14) | 0;
   } else {
    i15 = _llvm_cttz_i32(i9 | 0) | 0;
    i13 = i8 >>> (i15 >>> 0) | 0;
    i14 = i8 << 32 - i15 | i6 >>> (i15 >>> 0) | 0;
    return (tempRet0 = i13, i14) | 0;
   }
  }
 } while (0);
 if ((i18 | 0) == 0) {
  i27 = i22;
  i28 = i21;
  i29 = i20;
  i30 = i19;
  i31 = 0;
  i32 = 0;
 } else {
  i6 = i3 & -1 | 0;
  i3 = i10 | i4 & 0;
  i4 = _i64Add(i6, i3, -1, -1) | 0;
  i10 = tempRet0;
  i8 = i22;
  i22 = i21;
  i21 = i20;
  i20 = i19;
  i19 = i18;
  i18 = 0;
  while (1) {
   i33 = i22 >>> 31 | i8 << 1;
   i34 = i18 | i22 << 1;
   i9 = i20 << 1 | i8 >>> 31 | 0;
   i1 = i20 >>> 31 | i21 << 1 | 0;
   _i64Subtract(i4, i10, i9, i1) | 0;
   i2 = tempRet0;
   i7 = i2 >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
   i35 = i7 & 1;
   i36 = _i64Subtract(i9, i1, i7 & i6, (((i2 | 0) < 0 ? -1 : 0) >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1) & i3) | 0;
   i37 = tempRet0;
   i2 = i19 - 1 | 0;
   if ((i2 | 0) == 0) {
    break;
   } else {
    i8 = i33;
    i22 = i34;
    i21 = i37;
    i20 = i36;
    i19 = i2;
    i18 = i35;
   }
  }
  i27 = i33;
  i28 = i34;
  i29 = i37;
  i30 = i36;
  i31 = 0;
  i32 = i35;
 }
 i35 = i28;
 i28 = 0;
 if ((i5 | 0) != 0) {
  HEAP32[i5 >> 2] = i30;
  HEAP32[i5 + 4 >> 2] = i29;
 }
 i13 = (i35 | 0) >>> 31 | (i27 | i28) << 1 | (i28 << 1 | i35 >>> 31) & 0 | i31;
 i14 = (i35 << 1 | 0 >>> 31) & -2 | i32;
 return (tempRet0 = i13, i14) | 0;
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_22IdentityHashTranslatorIS8_EERKxRKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
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
  __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_(i2, i10, 0) | 0;
  i12 = HEAP32[i7 >> 2] | 0;
 } else {
  i12 = i8;
 }
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 i11 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = _i64Add(i10, i11, ~0, ~i10) | 0;
 i9 = tempRet0;
 i13 = (i3 >>> 22 | i9 << 10) ^ i3;
 i3 = (i9 >>> 22 | 0 << 10) ^ i9;
 i9 = _i64Add(i13, i3, ~(i13 << 13 | 0 >>> 19), ~(i3 << 13 | i13 >>> 19)) | 0;
 i13 = tempRet0;
 i3 = ___muldi3((i9 >>> 8 | i13 << 24) ^ i9, (i13 >>> 8 | 0 << 24) ^ i13, 9, 0) | 0;
 i13 = tempRet0;
 i9 = (i3 >>> 15 | i13 << 17) ^ i3;
 i3 = (i13 >>> 15 | 0 << 17) ^ i13;
 i13 = _i64Add(i9, i3, ~(i9 << 27 | 0 >>> 5), ~(i3 << 27 | i9 >>> 5)) | 0;
 i9 = (i13 >>> 31 | tempRet0 << 1) ^ i13;
 i13 = i9 & i8;
 i3 = i12 + (i13 * 48 & -1) | 0;
 i14 = i3 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 i16 = HEAP32[i14 + 4 >> 2] | 0;
 do {
  if ((i15 | 0) == 0 & (i16 | 0) == 0) {
   i17 = i3;
   i18 = 11;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i19 = i14 << 12 ^ i14;
   i14 = i19 >>> 7 ^ i19;
   i19 = i14 << 2 ^ i14;
   i14 = i19 >>> 20 ^ i19 | 1;
   i19 = 0;
   i20 = 0;
   i21 = i13;
   i22 = i3;
   i23 = i16;
   i24 = i15;
   while (1) {
    if ((i24 | 0) == (i10 | 0) & (i23 | 0) == (i11 | 0)) {
     i18 = 8;
     break;
    }
    i25 = (i24 | 0) == (-1 | 0) & (i23 | 0) == (-1 | 0) ? i22 : i20;
    i26 = (i19 | 0) == 0 ? i14 : i19;
    i27 = i26 + i21 & i8;
    i28 = i12 + (i27 * 48 & -1) | 0;
    i29 = i28 | 0;
    i30 = HEAP32[i29 >> 2] | 0;
    i31 = HEAP32[i29 + 4 >> 2] | 0;
    if ((i30 | 0) == 0 & (i31 | 0) == 0) {
     i18 = 10;
     break;
    } else {
     i19 = i26;
     i20 = i25;
     i21 = i27;
     i22 = i28;
     i23 = i31;
     i24 = i30;
    }
   }
   if ((i18 | 0) == 8) {
    i24 = i12 + ((HEAP32[i2 + 4 >> 2] | 0) * 48 & -1) | 0;
    i23 = i1;
    HEAP32[i23 >> 2] = i22;
    HEAP32[i23 + 4 >> 2] = i24;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i5;
    return;
   } else if ((i18 | 0) == 10) {
    if ((i25 | 0) == 0) {
     i17 = i28;
     i18 = 11;
     break;
    }
    _memset(i6 + 16 | 0, 0, 16) | 0;
    i24 = i25 | 0;
    HEAP32[i24 >> 2] = 0;
    HEAP32[i24 + 4 >> 2] = 0;
    HEAP32[i6 >> 2] = 0;
    HEAP32[i25 + 8 >> 2] = 0;
    HEAP32[i25 + 24 >> 2] = 0;
    HEAP32[i6 + 20 >> 2] = 0;
    _memset(i25 + 28 | 0, 0, 16) | 0;
    HEAP32[i6 + 32 >> 2] = 0;
    HEAP32[i25 + 32 >> 2] = 0;
    HEAP32[i6 + 24 >> 2] = 0;
    HEAP32[i25 + 36 >> 2] = 0;
    HEAP32[i6 + 28 >> 2] = 0;
    HEAP8[i25 + 44 | 0] = 0;
    HEAP8[i25 + 45 | 0] = 0;
    __ZN7WebCore16IDBIndexMetadataD1Ev(i6);
    i24 = i2 + 16 | 0;
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) - 1;
    i32 = i25;
    i33 = i24;
    break;
   }
  }
 } while (0);
 if ((i18 | 0) == 11) {
  i32 = i17;
  i33 = i2 + 16 | 0;
 }
 i17 = i4 | 0;
 i18 = HEAP32[i17 + 4 >> 2] | 0;
 i25 = i32 | 0;
 HEAP32[i25 >> 2] = HEAP32[i17 >> 2];
 HEAP32[i25 + 4 >> 2] = i18;
 __ZN7WebCore16IDBIndexMetadataaSERKS0_(i32 + 8 | 0, i4 + 8 | 0) | 0;
 i4 = i2 + 12 | 0;
 i18 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i18;
 i4 = i2 + 4 | 0;
 i25 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i33 >> 2] | 0) + i18 << 1 | 0) < (i25 | 0)) {
  i34 = i32;
  i35 = i25;
 } else {
  if ((i25 | 0) == 0) {
   i36 = 8;
  } else {
   i33 = i25 << 1;
   i36 = (i18 * 6 & -1 | 0) < (i33 | 0) ? i25 : i33;
  }
  i33 = __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_(i2, i36, i32) | 0;
  i34 = i33;
  i35 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i7 >> 2] | 0) + (i35 * 48 & -1) | 0;
 i35 = i1;
 HEAP32[i35 >> 2] = i34;
 HEAP32[i35 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i1 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i7 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 i7 = __ZN3WTF10fastMallocEj(i2 * 48 & -1) | 0;
 if ((i2 | 0) > 0) {
  i11 = i6 | 0;
  i12 = i6 + 16 | 0;
  i13 = i6 + 20 | 0;
  i14 = i6 + 32 | 0;
  i15 = i6 + 24 | 0;
  i16 = i6 + 28 | 0;
  i17 = 0;
  while (1) {
   _memset(i12 | 0, 0, 16) | 0;
   i18 = i7 + (i17 * 48 & -1) | 0;
   HEAP32[i18 >> 2] = 0;
   HEAP32[i18 + 4 >> 2] = 0;
   HEAP32[i11 >> 2] = 0;
   HEAP32[i7 + (i17 * 48 & -1) + 8 >> 2] = 0;
   HEAP32[i7 + (i17 * 48 & -1) + 24 >> 2] = 0;
   HEAP32[i13 >> 2] = 0;
   _memset(i7 + (i17 * 48 & -1) + 28 | 0, 0, 16) | 0;
   HEAP32[i14 >> 2] = 0;
   HEAP32[i7 + (i17 * 48 & -1) + 32 >> 2] = 0;
   HEAP32[i15 >> 2] = 0;
   HEAP32[i7 + (i17 * 48 & -1) + 36 >> 2] = 0;
   HEAP32[i16 >> 2] = 0;
   HEAP8[i7 + (i17 * 48 & -1) + 44 | 0] = 0;
   HEAP8[i7 + (i17 * 48 & -1) + 45 | 0] = 0;
   __ZN7WebCore16IDBIndexMetadataD1Ev(i6);
   i17 = i17 + 1 | 0;
   if ((i17 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i9 >> 2] = i7;
 if ((i8 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i19 = 0;
  i20 = i10;
  __ZN3WTF8fastFreeEPv(i20);
  STACKTOP = i4;
  return i19 | 0;
 }
 i7 = i5 | 0;
 i9 = 0;
 i2 = 0;
 while (1) {
  i17 = i10 + (i9 * 48 & -1) | 0;
  i6 = i17 | 0;
  i16 = HEAP32[i6 >> 2] | 0;
  i15 = HEAP32[i6 + 4 >> 2] | 0;
  if ((i16 | 0) == (-1 | 0) & (i15 | 0) == (-1 | 0) | (i16 | 0) == 0 & (i15 | 0) == 0) {
   i21 = i2;
  } else {
   __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS8_EExEENSt3__14pairIPS4_bEERKT0_(i5, i1, i6);
   i15 = HEAP32[i7 >> 2] | 0;
   __ZN7WebCore16IDBIndexMetadataD1Ev(i15 + 8 | 0);
   i16 = i15 | 0;
   i14 = HEAP32[i6 + 4 >> 2] | 0;
   HEAP32[i16 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i16 + 4 >> 2] = i14;
   i14 = i10 + (i9 * 48 & -1) + 8 | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   HEAP32[i15 + 8 >> 2] = i16;
   i16 = i15 + 16 | 0;
   i14 = i10 + (i9 * 48 & -1) + 16 | 0;
   i6 = HEAP32[i14 + 4 >> 2] | 0;
   HEAP32[i16 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i16 + 4 >> 2] = i6;
   HEAP32[i15 + 24 >> 2] = HEAP32[i10 + (i9 * 48 & -1) + 24 >> 2];
   i6 = i10 + (i9 * 48 & -1) + 28 | 0;
   i16 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   HEAP32[i15 + 28 >> 2] = i16;
   i16 = i15 + 32 | 0;
   HEAP32[i16 >> 2] = 0;
   i6 = i15 + 36 | 0;
   HEAP32[i6 >> 2] = 0;
   i14 = i15 + 40 | 0;
   HEAP32[i14 >> 2] = 0;
   i13 = i10 + (i9 * 48 & -1) + 40 | 0;
   HEAP32[i14 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i13 >> 2] = 0;
   i13 = i10 + (i9 * 48 & -1) + 32 | 0;
   i14 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i13 >> 2] = i14;
   i14 = i10 + (i9 * 48 & -1) + 36 | 0;
   i13 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i14 >> 2] = i13;
   HEAP8[i15 + 44 | 0] = HEAP8[i10 + (i9 * 48 & -1) + 44 | 0] & 1;
   HEAP8[i15 + 45 | 0] = HEAP8[i10 + (i9 * 48 & -1) + 45 | 0] & 1;
   i21 = (i17 | 0) == (i3 | 0) ? i15 : i2;
  }
  i15 = i9 + 1 | 0;
  if ((i15 | 0) == (i8 | 0)) {
   break;
  } else {
   i9 = i15;
   i2 = i21;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i8 | 0) > 0) {
  i22 = 0;
 } else {
  i19 = i21;
  i20 = i10;
  __ZN3WTF8fastFreeEPv(i20);
  STACKTOP = i4;
  return i19 | 0;
 }
 while (1) {
  i1 = i10 + (i22 * 48 & -1) | 0;
  if (!((HEAP32[i1 >> 2] | 0) == (-1 | 0) & (HEAP32[i1 + 4 >> 2] | 0) == (-1 | 0))) {
   __ZN7WebCore16IDBIndexMetadataD1Ev(i10 + (i22 * 48 & -1) + 8 | 0);
  }
  i1 = i22 + 1 | 0;
  if ((i1 | 0) < (i8 | 0)) {
   i22 = i1;
  } else {
   i19 = i21;
   break;
  }
 }
 i20 = i10;
 __ZN3WTF8fastFreeEPv(i20);
 STACKTOP = i4;
 return i19 | 0;
}
function __ZN7WebCore14IDBObjectStoreC2ERKNS_22IDBObjectStoreMetadataEPNS_14IDBTransactionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i1 + 16 | 0;
 i6 = i2 + 8 | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i7 + 4 >> 2] = i8;
 HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 16 >> 2];
 i8 = HEAP32[i2 + 20 >> 2] | 0;
 HEAP32[i1 + 28 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i7 = i8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = HEAP32[i2 + 28 >> 2] | 0;
 i8 = i2 + 32 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 i9 = i1 + 32 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i1 + 36 | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = i6;
 do {
  if ((i7 | 0) != 0) {
   if (i7 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i6 = __ZN3WTF18fastMallocGoodSizeEj(i7 << 2) | 0;
   HEAP32[i10 >> 2] = i6 >>> 2;
   i11 = __ZN3WTF10fastMallocEj(i6) | 0;
   i6 = i11;
   HEAP32[i9 >> 2] = i6;
   if ((i11 | 0) == 0) {
    break;
   }
   i11 = HEAP32[i2 + 24 >> 2] | 0;
   i12 = HEAP32[i8 >> 2] | 0;
   i13 = i11 + (i12 << 2) | 0;
   if ((i12 | 0) == 0) {
    break;
   } else {
    i14 = i11;
    i15 = i6;
   }
   while (1) {
    i6 = HEAP32[i14 >> 2] | 0;
    HEAP32[i15 >> 2] = i6;
    if ((i6 | 0) != 0) {
     i11 = i6 | 0;
     HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
    }
    i11 = i14 + 4 | 0;
    if ((i11 | 0) == (i13 | 0)) {
     break;
    } else {
     i14 = i11;
     i15 = i15 + 4 | 0;
    }
   }
  }
 } while (0);
 HEAP8[i1 + 44 | 0] = HEAP8[i2 + 36 | 0] & 1;
 i15 = i1 + 48 | 0;
 i14 = i2 + 40 | 0;
 i8 = HEAP32[i14 + 4 >> 2] | 0;
 HEAP32[i15 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i15 + 4 >> 2] = i8;
 i8 = i1 + 56 | 0;
 i15 = i8 | 0;
 _memset(i8 | 0, 0, 20) | 0;
 i8 = HEAP32[i2 + 48 >> 2] | 0;
 i14 = HEAP32[i2 + 52 >> 2] | 0;
 i9 = i8 + (i14 * 48 & -1) | 0;
 L19 : do {
  if ((HEAP32[i2 + 60 >> 2] | 0) != 0) {
   L21 : do {
    if ((i14 | 0) == 0) {
     i16 = i8;
    } else {
     i10 = i8;
     while (1) {
      i7 = i10 | 0;
      i13 = HEAP32[i7 >> 2] | 0;
      i11 = HEAP32[i7 + 4 >> 2] | 0;
      if (!((i13 | 0) == (-1 | 0) & (i11 | 0) == (-1 | 0) | (i13 | 0) == 0 & (i11 | 0) == 0)) {
       i16 = i10;
       break L21;
      }
      i10 = i10 + 48 | 0;
      if ((i10 | 0) == (i9 | 0)) {
       break L19;
      }
     }
    }
   } while (0);
   if ((i16 | 0) == (i9 | 0)) {
    break;
   } else {
    i17 = i16;
   }
   while (1) {
    __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_22IdentityHashTranslatorIS8_EERKxRKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_(i5, i15, i17 | 0, i17);
    i10 = i17 + 48 | 0;
    if ((i10 | 0) == (i9 | 0)) {
     break L19;
    } else {
     i18 = i10;
    }
    while (1) {
     i10 = i18 | 0;
     i11 = HEAP32[i10 >> 2] | 0;
     i13 = HEAP32[i10 + 4 >> 2] | 0;
     if (!((i11 | 0) == (-1 | 0) & (i13 | 0) == (-1 | 0) | (i11 | 0) == 0 & (i13 | 0) == 0)) {
      break;
     }
     i13 = i18 + 48 | 0;
     if ((i13 | 0) == (i9 | 0)) {
      break L19;
     } else {
      i18 = i13;
     }
    }
    if ((i18 | 0) == (i9 | 0)) {
     break;
    } else {
     i17 = i18;
    }
   }
  }
 } while (0);
 HEAP32[i1 + 80 >> 2] = i3;
 if ((i3 | 0) == 0) {
  i19 = i1 + 84 | 0;
  HEAP8[i19] = 0;
  i20 = i1 + 88 | 0;
  i21 = i20;
  _memset(i21 | 0, 0, 20) | 0;
  STACKTOP = i4;
  return;
 }
 i18 = i3 + 40 | 0;
 HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
 i19 = i1 + 84 | 0;
 HEAP8[i19] = 0;
 i20 = i1 + 88 | 0;
 i21 = i20;
 _memset(i21 | 0, 0, 20) | 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14IDBObjectStoreC1ERKNS_22IDBObjectStoreMetadataEPNS_14IDBTransactionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i1 + 16 | 0;
 i6 = i2 + 8 | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i7 + 4 >> 2] = i8;
 HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 16 >> 2];
 i8 = HEAP32[i2 + 20 >> 2] | 0;
 HEAP32[i1 + 28 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i7 = i8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = HEAP32[i2 + 28 >> 2] | 0;
 i8 = i2 + 32 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 i9 = i1 + 32 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i1 + 36 | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = i6;
 do {
  if ((i7 | 0) != 0) {
   if (i7 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i6 = __ZN3WTF18fastMallocGoodSizeEj(i7 << 2) | 0;
   HEAP32[i10 >> 2] = i6 >>> 2;
   i11 = __ZN3WTF10fastMallocEj(i6) | 0;
   i6 = i11;
   HEAP32[i9 >> 2] = i6;
   if ((i11 | 0) == 0) {
    break;
   }
   i11 = HEAP32[i2 + 24 >> 2] | 0;
   i12 = HEAP32[i8 >> 2] | 0;
   i13 = i11 + (i12 << 2) | 0;
   if ((i12 | 0) == 0) {
    break;
   } else {
    i14 = i11;
    i15 = i6;
   }
   while (1) {
    i6 = HEAP32[i14 >> 2] | 0;
    HEAP32[i15 >> 2] = i6;
    if ((i6 | 0) != 0) {
     i11 = i6 | 0;
     HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
    }
    i11 = i14 + 4 | 0;
    if ((i11 | 0) == (i13 | 0)) {
     break;
    } else {
     i14 = i11;
     i15 = i15 + 4 | 0;
    }
   }
  }
 } while (0);
 HEAP8[i1 + 44 | 0] = HEAP8[i2 + 36 | 0] & 1;
 i15 = i1 + 48 | 0;
 i14 = i2 + 40 | 0;
 i8 = HEAP32[i14 + 4 >> 2] | 0;
 HEAP32[i15 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i15 + 4 >> 2] = i8;
 i8 = i1 + 56 | 0;
 i15 = i8 | 0;
 _memset(i8 | 0, 0, 20) | 0;
 i8 = HEAP32[i2 + 48 >> 2] | 0;
 i14 = HEAP32[i2 + 52 >> 2] | 0;
 i9 = i8 + (i14 * 48 & -1) | 0;
 L19 : do {
  if ((HEAP32[i2 + 60 >> 2] | 0) != 0) {
   L21 : do {
    if ((i14 | 0) == 0) {
     i16 = i8;
    } else {
     i10 = i8;
     while (1) {
      i7 = i10 | 0;
      i13 = HEAP32[i7 >> 2] | 0;
      i11 = HEAP32[i7 + 4 >> 2] | 0;
      if (!((i13 | 0) == (-1 | 0) & (i11 | 0) == (-1 | 0) | (i13 | 0) == 0 & (i11 | 0) == 0)) {
       i16 = i10;
       break L21;
      }
      i10 = i10 + 48 | 0;
      if ((i10 | 0) == (i9 | 0)) {
       break L19;
      }
     }
    }
   } while (0);
   if ((i16 | 0) == (i9 | 0)) {
    break;
   } else {
    i17 = i16;
   }
   while (1) {
    __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_22IdentityHashTranslatorIS8_EERKxRKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_(i5, i15, i17 | 0, i17);
    i10 = i17 + 48 | 0;
    if ((i10 | 0) == (i9 | 0)) {
     break L19;
    } else {
     i18 = i10;
    }
    while (1) {
     i10 = i18 | 0;
     i11 = HEAP32[i10 >> 2] | 0;
     i13 = HEAP32[i10 + 4 >> 2] | 0;
     if (!((i11 | 0) == (-1 | 0) & (i13 | 0) == (-1 | 0) | (i11 | 0) == 0 & (i13 | 0) == 0)) {
      break;
     }
     i13 = i18 + 48 | 0;
     if ((i13 | 0) == (i9 | 0)) {
      break L19;
     } else {
      i18 = i13;
     }
    }
    if ((i18 | 0) == (i9 | 0)) {
     break;
    } else {
     i17 = i18;
    }
   }
  }
 } while (0);
 HEAP32[i1 + 80 >> 2] = i3;
 if ((i3 | 0) == 0) {
  i19 = i1 + 84 | 0;
  HEAP8[i19] = 0;
  i20 = i1 + 88 | 0;
  i21 = i20;
  _memset(i21 | 0, 0, 20) | 0;
  STACKTOP = i4;
  return;
 }
 i18 = i3 + 40 | 0;
 HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
 i19 = i1 + 84 | 0;
 HEAP8[i19] = 0;
 i20 = i1 + 88 | 0;
 i21 = i20;
 _memset(i21 | 0, 0, 20) | 0;
 STACKTOP = i4;
 return;
}
function __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEEaSERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 if ((i2 | 0) == (i1 | 0)) {
  return i1 | 0;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if (i4 >>> 0 > i6 >>> 0) {
  i7 = HEAP32[i1 >> 2] | 0;
  i8 = i7 + (i4 << 2) | 0;
  if ((i4 | 0) != (i6 | 0)) {
   i9 = i7 + (i6 << 2) | 0;
   while (1) {
    i7 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i7 | 0) != 0) {
      i10 = i7 | 0;
      i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
      if ((i11 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i7);
       break;
      } else {
       HEAP32[i10 >> 2] = i11;
       break;
      }
     }
    } while (0);
    i9 = i9 + 4 | 0;
    if ((i9 | 0) == (i8 | 0)) {
     break;
    }
   }
  }
  HEAP32[i3 >> 2] = i6;
  i12 = i6;
 } else {
  i8 = i1 + 4 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  do {
   if (i6 >>> 0 > i9 >>> 0) {
    do {
     if ((i9 | 0) != 0) {
      i7 = i1 | 0;
      if ((i4 | 0) != 0) {
       i11 = HEAP32[i7 >> 2] | 0;
       i10 = i11 + (i4 << 2) | 0;
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
        if ((i13 | 0) == (i10 | 0)) {
         break;
        }
       }
       HEAP32[i3 >> 2] = 0;
      }
      i10 = HEAP32[i7 >> 2] | 0;
      if ((i10 | 0) == 0) {
       break;
      }
      HEAP32[i7 >> 2] = 0;
      HEAP32[i8 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i10);
     }
    } while (0);
    i10 = HEAP32[i5 >> 2] | 0;
    if ((HEAP32[i8 >> 2] | 0) >>> 0 >= i10 >>> 0) {
     break;
    }
    i13 = i1 | 0;
    i11 = HEAP32[i13 >> 2] | 0;
    if (i10 >>> 0 > 1073741823 >>> 0) {
     _WTFCrash();
     return 0;
    }
    i15 = HEAP32[i3 >> 2] | 0;
    i14 = __ZN3WTF18fastMallocGoodSizeEj(i10 << 2) | 0;
    HEAP32[i8 >> 2] = i14 >>> 2;
    i10 = __ZN3WTF10fastMallocEj(i14) | 0;
    HEAP32[i13 >> 2] = i10;
    i14 = i11;
    _memcpy(i10 | 0, i14 | 0, i15 << 2) | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    if ((HEAP32[i13 >> 2] | 0) == (i11 | 0)) {
     HEAP32[i13 >> 2] = 0;
     HEAP32[i8 >> 2] = 0;
    }
    __ZN3WTF8fastFreeEPv(i14);
   }
  } while (0);
  i12 = HEAP32[i3 >> 2] | 0;
 }
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 i4 = i2 + (i12 << 2) | 0;
 i9 = i1 | 0;
 if ((i12 | 0) == 0) {
  i16 = i2;
  i17 = 0;
 } else {
  i12 = HEAP32[i9 >> 2] | 0;
  i6 = i2;
  while (1) {
   i2 = HEAP32[i6 >> 2] | 0;
   if ((i2 | 0) != 0) {
    i14 = i2 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
   }
   i14 = i12 | 0;
   i13 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = i2;
   do {
    if ((i13 | 0) != 0) {
     i2 = i13 | 0;
     i14 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i2 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i13 = i6 + 4 | 0;
   if ((i13 | 0) == (i4 | 0)) {
    break;
   } else {
    i12 = i12 + 4 | 0;
    i6 = i13;
   }
  }
  i16 = HEAP32[i8 >> 2] | 0;
  i17 = HEAP32[i3 >> 2] | 0;
 }
 i8 = HEAP32[i5 >> 2] | 0;
 i6 = i16 + (i8 << 2) | 0;
 if ((i17 | 0) == (i8 | 0)) {
  i18 = i17;
 } else {
  i8 = i16 + (i17 << 2) | 0;
  i16 = (HEAP32[i9 >> 2] | 0) + (i17 << 2) | 0;
  while (1) {
   i17 = HEAP32[i8 >> 2] | 0;
   HEAP32[i16 >> 2] = i17;
   if ((i17 | 0) != 0) {
    i9 = i17 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   }
   i9 = i8 + 4 | 0;
   if ((i9 | 0) == (i6 | 0)) {
    break;
   } else {
    i8 = i9;
    i16 = i16 + 4 | 0;
   }
  }
  i18 = HEAP32[i5 >> 2] | 0;
 }
 HEAP32[i3 >> 2] = i18;
 return i1 | 0;
}
function __ZN7WebCore6IDBAny6createINS_14IDBObjectStoreEEEN3WTF10PassRefPtrIS0_EEPT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = __ZN3WTF10fastMallocEj(88) | 0;
 i6 = i4 | 0;
 HEAP32[i6 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i7 = i2 + 4 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 __ZN7WebCore6IDBAnyC1EN3WTF10PassRefPtrINS_14IDBObjectStoreEEE(i5, i4);
 HEAP32[i1 >> 2] = i5;
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i5 + 4 | 0;
 i5 = i6 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i6 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = HEAP32[i6 + 84 >> 2] | 0;
 if ((i5 | 0) != 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore8IDBIndexEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS7_i(i5, HEAP32[i6 + 88 >> 2] | 0);
 }
 i5 = HEAP32[i6 + 76 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 + 40 | 0;
   i7 = i4 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i7 >> 2] = i2;
    break;
   }
   i2 = i4 - 40 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] & 7](i2);
  }
 } while (0);
 i5 = i6 + 4 | 0;
 i2 = HEAP32[i6 + 52 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = HEAP32[i6 + 56 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i7 = 0;
   while (1) {
    i8 = i2 + (i7 * 48 & -1) | 0;
    if (!((HEAP32[i8 >> 2] | 0) == (-1 | 0) & (HEAP32[i8 + 4 >> 2] | 0) == (-1 | 0))) {
     __ZN7WebCore16IDBIndexMetadataD1Ev(i2 + (i7 * 48 & -1) + 8 | 0);
    }
    i7 = i7 + 1 | 0;
    if ((i7 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i6 + 36 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i7 = i6 + 28 | 0;
 i8 = i7;
 if ((i4 | 0) != 0) {
  i9 = HEAP32[i8 >> 2] | 0;
  i10 = i9 + (i4 << 2) | 0;
  i4 = i9;
  while (1) {
   i9 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i11 = i9 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i11 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i10 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i8 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i7 >> 2] = 0;
  HEAP32[i6 + 32 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i6 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i2 = i1;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 }
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore14IDBObjectStore10openCursorEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_11IDBKeyRangeEEERKNS3_6StringENS_18IDBDatabaseBackend8TaskTypeERi(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 24 | 0;
 if ((HEAP8[i2 + 84 | 0] & 1) != 0) {
  HEAP32[i7 >> 2] = 1208;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i8;
  return;
 }
 i13 = i2 + 80 | 0;
 if ((HEAP32[(HEAP32[i13 >> 2] | 0) + 88 >> 2] | 0) != 1) {
  HEAP32[i7 >> 2] = 1204;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i8;
  return;
 }
 i14 = __ZN7WebCore9IDBCursor17stringToDirectionERKN3WTF6StringERi(i5, i7) | 0;
 if ((HEAP32[i7 >> 2] | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i8;
  return;
 }
 __ZN7WebCore6IDBAny6createINS_14IDBObjectStoreEEEN3WTF10PassRefPtrIS0_EEPT_(i10, i2);
 __ZN7WebCore10IDBRequest6createEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_6IDBAnyEEEPNS_14IDBTransactionE(i9, i3, i10, HEAP32[i13 >> 2] | 0);
 i3 = i9 | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i10 = i3 + 4 | 0;
   i7 = i10 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i7 >> 2] = i5;
    break;
   }
   i5 = i10 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   __ZN7WebCore6IDBAnyD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 __ZN7WebCore10IDBRequest16setCursorDetailsENS_9IndexedDB10CursorTypeENS1_15CursorDirectionE(i9, 0, i14);
 i3 = __ZNK7WebCore14IDBTransaction9backendDBEv(HEAP32[i13 >> 2] | 0) | 0;
 i5 = (HEAP32[i13 >> 2] | 0) + 56 | 0;
 i13 = HEAP32[i5 >> 2] | 0;
 i10 = HEAP32[i5 + 4 >> 2] | 0;
 i5 = i2 + 16 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 i7 = HEAP32[i5 + 4 >> 2] | 0;
 i5 = i11 | 0;
 i15 = i4 | 0;
 i4 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i5 >> 2] = i4;
 i4 = i12 | 0;
 HEAP32[i4 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i15 = i9 + 4 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 }
 __ZN7WebCore18IDBDatabaseBackend10openCursorExxxN3WTF10PassRefPtrINS_11IDBKeyRangeEEENS_9IndexedDB15CursorDirectionEbNS0_8TaskTypeENS2_INS_12IDBCallbacksEEE(i3, i13, i10, i2, i7, -1, -1, i11, i14, 0, i6, i12);
 i12 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i4 = i12 + 4 | 0;
   i6 = i4 | 0;
   i14 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i6 >> 2] = i14;
    break;
   }
   i14 = i4 - 4 | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 7](i14);
  }
 } while (0);
 i12 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i5 = i12 + 4 | 0;
   i14 = i5 | 0;
   i4 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i14 >> 2] = i4;
    break;
   }
   i4 = i5 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore11IDBKeyRangeD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  }
 } while (0);
 HEAP32[i1 >> 2] = i9;
 STACKTOP = i8;
 return;
}
function __ZN7WebCore14IDBObjectStore11createIndexEPNS_22ScriptExecutionContextERKN3WTF6StringERKNS_10IDBKeyPathERKNS_10DictionaryERi(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 24 | 0;
 i13 = i8 + 32 | 0;
 i14 = i8 + 40 | 0;
 i15 = i6 | 0;
 i16 = i6 | 0;
 do {
  if ((HEAP32[i16 >> 2] | 0) == 0) {
   i17 = 0;
   i18 = 0;
  } else {
   i19 = i6 + 4 | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   if ((i20 | 0) == 0) {
    i17 = 0;
    i18 = 0;
    break;
   }
   if ((HEAP32[i20 + 4 >> 2] | 0) == -6) {
    i21 = 0;
   } else {
    HEAP32[i12 + 4 >> 2] = -6;
    HEAP32[i12 >> 2] = 0;
    i20 = (__ZNK7WebCore12JSDictionary14tryGetPropertyEPKcRN3JSC7JSValueE(i15, H_BASE + 24 | 0, i12) | 0) == 2;
    i22 = HEAP32[i16 >> 2] | 0;
    do {
     if (i20) {
      i23 = i12 | 0;
      i24 = HEAP32[i23 + 4 >> 2] | 0;
      i25 = i14 | 0;
      HEAP32[i25 >> 2] = HEAP32[i23 >> 2];
      HEAP32[i25 + 4 >> 2] = i24;
      __ZN7WebCore12JSDictionary12convertValueEPN3JSC9ExecStateENS1_7JSValueERb(i22, i14, i13);
      i24 = HEAP32[i16 >> 2] | 0;
      i25 = (HEAP32[(HEAP32[i24 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
      if (!((HEAP32[i25 >> 2] & 0 | 0) == 0 & (HEAP32[i25 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
       i26 = 0;
       i27 = i24;
       break;
      }
      i26 = HEAP8[i13] & 1;
      i27 = i24;
     } else {
      i26 = 0;
      i27 = i22;
     }
    } while (0);
    if ((i27 | 0) == 0) {
     i17 = 0;
     i18 = i26;
     break;
    } else {
     i21 = i26;
    }
   }
   i22 = HEAP32[i19 >> 2] | 0;
   if ((i22 | 0) == 0) {
    i17 = 0;
    i18 = i21;
    break;
   }
   if ((HEAP32[i22 + 4 >> 2] | 0) == -6) {
    i17 = 0;
    i18 = i21;
    break;
   }
   HEAP32[i9 + 4 >> 2] = -6;
   HEAP32[i9 >> 2] = 0;
   if ((__ZNK7WebCore12JSDictionary14tryGetPropertyEPKcRN3JSC7JSValueE(i15, H_BASE + 8 | 0, i9) | 0) != 2) {
    i17 = 0;
    i18 = i21;
    break;
   }
   i22 = HEAP32[i16 >> 2] | 0;
   i20 = i9 | 0;
   i24 = HEAP32[i20 + 4 >> 2] | 0;
   i25 = i11 | 0;
   HEAP32[i25 >> 2] = HEAP32[i20 >> 2];
   HEAP32[i25 + 4 >> 2] = i24;
   __ZN7WebCore12JSDictionary12convertValueEPN3JSC9ExecStateENS1_7JSValueERb(i22, i11, i10);
   i22 = (HEAP32[(HEAP32[(HEAP32[i16 >> 2] | 0) + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i22 >> 2] & 0 | 0) == 0 & (HEAP32[i22 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i17 = 0;
    i18 = i21;
    break;
   }
   i17 = (HEAP8[i10] & 1) != 0;
   i18 = i21;
  }
 } while (0);
 __ZN7WebCore14IDBObjectStore11createIndexEPNS_22ScriptExecutionContextERKN3WTF6StringERKNS_10IDBKeyPathEbbRi(i1, i2, i3, i4, i5, (i18 & 1) != 0, i17, i7);
 STACKTOP = i8;
 return;
}
function __ZN7WebCore14IDBObjectStore14deleteFunctionEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_11IDBKeyRangeEEERi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 if ((HEAP8[i2 + 84 | 0] & 1) != 0) {
  HEAP32[i5 >> 2] = 1208;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i6;
  return;
 }
 i11 = i2 + 80 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((HEAP32[i12 + 88 >> 2] | 0) != 1) {
  HEAP32[i5 >> 2] = 1204;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i6;
  return;
 }
 if ((HEAP32[i12 + 84 >> 2] | 0) == 0) {
  HEAP32[i5 >> 2] = 1205;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i6;
  return;
 }
 i12 = i4 | 0;
 if ((HEAP32[i12 >> 2] | 0) == 0) {
  HEAP32[i5 >> 2] = 1203;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore6IDBAny6createINS_14IDBObjectStoreEEEN3WTF10PassRefPtrIS0_EEPT_(i8, i2);
 __ZN7WebCore10IDBRequest6createEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_6IDBAnyEEEPNS_14IDBTransactionE(i7, i3, i8, HEAP32[i11 >> 2] | 0);
 i3 = i7 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 + 4 | 0;
   i5 = i8 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i5 >> 2] = i4;
    break;
   }
   i4 = i8 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore6IDBAnyD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  }
 } while (0);
 i3 = __ZNK7WebCore14IDBTransaction9backendDBEv(HEAP32[i11 >> 2] | 0) | 0;
 i4 = (HEAP32[i11 >> 2] | 0) + 56 | 0;
 i11 = HEAP32[i4 >> 2] | 0;
 i8 = HEAP32[i4 + 4 >> 2] | 0;
 i4 = i2 + 16 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i5 = HEAP32[i4 + 4 >> 2] | 0;
 i4 = i9 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 HEAP32[i4 >> 2] = i13;
 i13 = i10 | 0;
 HEAP32[i13 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i12 = i7 + 4 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 __ZN7WebCore18IDBDatabaseBackend11deleteRangeExxN3WTF10PassRefPtrINS_11IDBKeyRangeEEENS2_INS_12IDBCallbacksEEE(i3, i11, i8, i2, i5, i9, i10);
 i10 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i13 = i10 + 4 | 0;
   i9 = i13 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i9 >> 2] = i5;
    break;
   }
   i5 = i13 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 7](i5);
  }
 } while (0);
 i10 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i4 = i10 + 4 | 0;
   i5 = i4 | 0;
   i13 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i5 >> 2] = i13;
    break;
   }
   i13 = i4 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   __ZN7WebCore11IDBKeyRangeD2Ev(i13);
   __ZN3WTF8fastFreeEPv(i13);
  }
 } while (0);
 HEAP32[i1 >> 2] = i7;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore14IDBObjectStore3getEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_11IDBKeyRangeEEERi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 if ((HEAP8[i2 + 84 | 0] & 1) != 0) {
  HEAP32[i5 >> 2] = 1208;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i6;
  return;
 }
 i11 = i4 | 0;
 if ((HEAP32[i11 >> 2] | 0) == 0) {
  HEAP32[i5 >> 2] = 1203;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i6;
  return;
 }
 i4 = i2 + 80 | 0;
 if ((HEAP32[(HEAP32[i4 >> 2] | 0) + 88 >> 2] | 0) != 1) {
  HEAP32[i5 >> 2] = 1204;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore6IDBAny6createINS_14IDBObjectStoreEEEN3WTF10PassRefPtrIS0_EEPT_(i8, i2);
 __ZN7WebCore10IDBRequest6createEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_6IDBAnyEEEPNS_14IDBTransactionE(i7, i3, i8, HEAP32[i4 >> 2] | 0);
 i3 = i7 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 + 4 | 0;
   i5 = i8 | 0;
   i12 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i5 >> 2] = i12;
    break;
   }
   i12 = i8 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   __ZN7WebCore6IDBAnyD1Ev(i12);
   __ZN3WTF8fastFreeEPv(i12);
  }
 } while (0);
 i3 = __ZNK7WebCore14IDBTransaction9backendDBEv(HEAP32[i4 >> 2] | 0) | 0;
 i12 = (HEAP32[i4 >> 2] | 0) + 56 | 0;
 i4 = HEAP32[i12 >> 2] | 0;
 i8 = HEAP32[i12 + 4 >> 2] | 0;
 i12 = i2 + 16 | 0;
 i2 = HEAP32[i12 >> 2] | 0;
 i5 = HEAP32[i12 + 4 >> 2] | 0;
 i12 = i9 | 0;
 i13 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i12 >> 2] = i13;
 i13 = i10 | 0;
 HEAP32[i13 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i11 = i7 + 4 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 }
 __ZN7WebCore18IDBDatabaseBackend3getExxxN3WTF10PassRefPtrINS_11IDBKeyRangeEEEbNS2_INS_12IDBCallbacksEEE(i3, i4, i8, i2, i5, -1, -1, i9, 0, i10);
 i10 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i13 = i10 + 4 | 0;
   i9 = i13 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i9 >> 2] = i5;
    break;
   }
   i5 = i13 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 7](i5);
  }
 } while (0);
 i10 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i12 = i10 + 4 | 0;
   i5 = i12 | 0;
   i13 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i5 >> 2] = i13;
    break;
   }
   i13 = i12 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   __ZN7WebCore11IDBKeyRangeD2Ev(i13);
   __ZN3WTF8fastFreeEPv(i13);
  }
 } while (0);
 HEAP32[i1 >> 2] = i7;
 STACKTOP = i6;
 return;
}
function __ZN3WTF7HashMapINS_6StringENS_6RefPtrIN7WebCore8IDBIndexEEENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE6removeENS_24HashTableIteratorAdapterINS_9HashTableIS1_NS_12KeyValuePairIS1_S5_EENS_24KeyValuePairKeyExtractorISE_EES6_NSA_18KeyValuePairTraitsES8_EESE_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 i4 = i1 | 0;
 i5 = i1 | 0;
 i6 = i1 + 4 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i6 >> 2] << 3) | 0;
 if ((HEAP32[i2 >> 2] | 0) == (i7 | 0)) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i9 = HEAP32[i2 >> 2] | 0;
 if ((i9 | 0) == (i7 | 0)) {
  i8 = 1;
  STACKTOP = i3;
  return i8 | 0;
 }
 i7 = HEAP32[i9 + 4 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 + 4 | 0;
   i10 = i2 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i10 >> 2] = i11;
    break;
   }
   i11 = i2 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   __ZN7WebCore8IDBIndexD1Ev(i11);
   __ZN3WTF8fastFreeEPv(i11);
  }
 } while (0);
 i7 = i9 | 0;
 i9 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i11 = i9 | 0;
   i2 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i11 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = -1;
 i7 = i1 + 16 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 i9 = i1 + 12 | 0;
 i2 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 HEAP32[i9 >> 2] = i2;
 i9 = HEAP32[i6 >> 2] | 0;
 if (!((i2 * 6 & -1 | 0) < (i9 | 0) & (i9 | 0) > 8)) {
  i8 = 1;
  STACKTOP = i3;
  return i8 | 0;
 }
 i2 = (i9 | 0) / 2 & -1;
 i11 = HEAP32[i5 >> 2] | 0;
 HEAP32[i6 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 HEAP32[i5 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
 if ((i9 | 0) != 0) {
  i2 = 0;
  while (1) {
   i5 = i11 + (i2 << 3) | 0;
   i1 = HEAP32[i5 >> 2] | 0;
   if (!((i1 | 0) == (-1 | 0) | (i1 | 0) == 0)) {
    __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore8IDBIndexEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E8reinsertEOS7_(i4, i5) | 0;
   }
   i2 = i2 + 1 | 0;
   if ((i2 | 0) == (i9 | 0)) {
    break;
   }
  }
 }
 HEAP32[i7 >> 2] = 0;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore8IDBIndexEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS7_i(i11, i9);
 i8 = 1;
 STACKTOP = i3;
 return i8 | 0;
}
function __ZN7WebCore14IDBObjectStore5countEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_11IDBKeyRangeEEERi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 if ((HEAP8[i2 + 84 | 0] & 1) != 0) {
  HEAP32[i5 >> 2] = 1208;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i6;
  return;
 }
 i11 = i2 + 80 | 0;
 if ((HEAP32[(HEAP32[i11 >> 2] | 0) + 88 >> 2] | 0) != 1) {
  HEAP32[i5 >> 2] = 1204;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore6IDBAny6createINS_14IDBObjectStoreEEEN3WTF10PassRefPtrIS0_EEPT_(i8, i2);
 __ZN7WebCore10IDBRequest6createEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_6IDBAnyEEEPNS_14IDBTransactionE(i7, i3, i8, HEAP32[i11 >> 2] | 0);
 i3 = i7 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 + 4 | 0;
   i5 = i8 | 0;
   i12 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i5 >> 2] = i12;
    break;
   }
   i12 = i8 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   __ZN7WebCore6IDBAnyD1Ev(i12);
   __ZN3WTF8fastFreeEPv(i12);
  }
 } while (0);
 i3 = __ZNK7WebCore14IDBTransaction9backendDBEv(HEAP32[i11 >> 2] | 0) | 0;
 i12 = (HEAP32[i11 >> 2] | 0) + 56 | 0;
 i11 = HEAP32[i12 >> 2] | 0;
 i8 = HEAP32[i12 + 4 >> 2] | 0;
 i12 = i2 + 16 | 0;
 i2 = HEAP32[i12 >> 2] | 0;
 i5 = HEAP32[i12 + 4 >> 2] | 0;
 i12 = i9 | 0;
 i13 = i4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i12 >> 2] = i4;
 i4 = i10 | 0;
 HEAP32[i4 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i13 = i7 + 4 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
 }
 __ZN7WebCore18IDBDatabaseBackend5countExxxN3WTF10PassRefPtrINS_11IDBKeyRangeEEENS2_INS_12IDBCallbacksEEE(i3, i11, i8, i2, i5, -1, -1, i9, i10);
 i10 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i4 = i10 + 4 | 0;
   i9 = i4 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i9 >> 2] = i5;
    break;
   }
   i5 = i4 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 7](i5);
  }
 } while (0);
 i10 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i12 = i10 + 4 | 0;
   i5 = i12 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i5 >> 2] = i4;
    break;
   }
   i4 = i12 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore11IDBKeyRangeD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  }
 } while (0);
 HEAP32[i1 >> 2] = i7;
 STACKTOP = i6;
 return;
}
function __ZN3WTF6VectorINS0_INS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEEELj0ES5_E14appendSlowCaseIRS6_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 > i2 >>> 0) {
   i8 = 3;
  } else {
   if ((i7 + (i4 * 12 & -1) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorINS0_INS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEEELj0ES5_E15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (((i2 - i7 | 0) / 12 & -1) * 12 & -1) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorINS0_INS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEEELj0ES5_E15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 i2 = HEAP32[i11 + 4 >> 2] | 0;
 i5 = i11 + 8 | 0;
 i8 = HEAP32[i5 >> 2] | 0;
 i1 = i12 + (i6 * 12 & -1) | 0;
 HEAP32[i1 >> 2] = 0;
 i7 = i12 + (i6 * 12 & -1) + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i12 + (i6 * 12 & -1) + 8 >> 2] = i8;
 if ((i2 | 0) == 0) {
  i13 = HEAP32[i3 >> 2] | 0;
  i14 = i13 + 1 | 0;
  HEAP32[i3 >> 2] = i14;
  return;
 }
 if (i2 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i8 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
 HEAP32[i7 >> 2] = i8 >>> 2;
 i7 = __ZN3WTF10fastMallocEj(i8) | 0;
 i8 = i7;
 HEAP32[i1 >> 2] = i8;
 if ((i7 | 0) == 0) {
  i13 = HEAP32[i3 >> 2] | 0;
  i14 = i13 + 1 | 0;
  HEAP32[i3 >> 2] = i14;
  return;
 }
 i7 = HEAP32[i11 >> 2] | 0;
 i11 = HEAP32[i5 >> 2] | 0;
 i5 = i7 + (i11 << 2) | 0;
 if ((i11 | 0) == 0) {
  i13 = HEAP32[i3 >> 2] | 0;
  i14 = i13 + 1 | 0;
  HEAP32[i3 >> 2] = i14;
  return;
 } else {
  i15 = i7;
  i16 = i8;
 }
 while (1) {
  i8 = HEAP32[i15 >> 2] | 0;
  HEAP32[i16 >> 2] = i8;
  if ((i8 | 0) != 0) {
   i7 = i8 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  }
  i7 = i15 + 4 | 0;
  if ((i7 | 0) == (i5 | 0)) {
   break;
  } else {
   i15 = i7;
   i16 = i16 + 4 | 0;
  }
 }
 i13 = HEAP32[i3 >> 2] | 0;
 i14 = i13 + 1 | 0;
 HEAP32[i3 >> 2] = i14;
 return;
}
function __ZN7WebCore14IDBObjectStore3putENS_18IDBDatabaseBackend7PutModeEN3WTF10PassRefPtrINS_6IDBAnyEEEPN3JSC9ExecStateERN10Deprecated11ScriptValueERKSB_Ri(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i10 = i9 | 0;
 i11 = i9 + 8 | 0;
 i12 = i9 + 16 | 0;
 i13 = i9 + 24 | 0;
 i14 = __ZN7WebCore35scriptExecutionContextFromExecStateEPN3JSC9ExecStateE(i5) | 0;
 HEAP32[i10 >> 2] = i14;
 i15 = i10 + 4 | 0;
 HEAP32[i15 >> 2] = 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 8 >> 2] & 7](i14) | 0) {
  if ((i14 | 0) == 0) {
   i16 = 0;
  } else {
   i16 = i14 - 156 + 68 | 0;
  }
  i17 = __ZN7WebCore21mainThreadNormalWorldEv() | 0;
  i18 = __ZN7WebCore17execStateFromPageERNS_15DOMWrapperWorldEPNS_4PageE(i17, __ZNK7WebCore8Document4pageEv(i16) | 0) | 0;
 } else {
  i18 = __ZN7WebCore30execStateFromWorkerGlobalScopeEPNS_17WorkerGlobalScopeE(i14) | 0;
 }
 HEAP32[i15 >> 2] = i18;
 __ZN7WebCore19scriptValueToIDBKeyEPNS_15DOMRequestStateERKN10Deprecated11ScriptValueE(i11, i10, i7);
 i7 = i11 | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = i12 | 0;
 i10 = i4 | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i7 >> 2] = i4;
 i4 = i13 | 0;
 HEAP32[i4 >> 2] = i11;
 __ZN7WebCore14IDBObjectStore3putENS_18IDBDatabaseBackend7PutModeEN3WTF10PassRefPtrINS_6IDBAnyEEEPN3JSC9ExecStateERN10Deprecated11ScriptValueENS4_INS_6IDBKeyEEERi(i1, i2, i3, i12, i5, i6, i13, i8);
 i8 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i4 = i8 | 0;
   i13 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i8);
    __ZN3WTF8fastFreeEPv(i8);
    break;
   } else {
    HEAP32[i4 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i9;
  return;
 }
 i7 = i8 + 4 | 0;
 i8 = i7 | 0;
 i13 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i13 | 0) != 0) {
  HEAP32[i8 >> 2] = i13;
  STACKTOP = i9;
  return;
 }
 i13 = i7 - 4 | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i9;
  return;
 }
 __ZN7WebCore6IDBAnyD1Ev(i13);
 __ZN3WTF8fastFreeEPv(i13);
 STACKTOP = i9;
 return;
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS8_EExEENSt3__14pairIPS4_bEERKT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = _i64Add(i2, i6, ~0, ~i2) | 0;
 i7 = tempRet0;
 i8 = (i3 >>> 22 | i7 << 10) ^ i3;
 i3 = (i7 >>> 22 | 0 << 10) ^ i7;
 i7 = _i64Add(i8, i3, ~(i8 << 13 | 0 >>> 19), ~(i3 << 13 | i8 >>> 19)) | 0;
 i8 = tempRet0;
 i3 = ___muldi3((i7 >>> 8 | i8 << 24) ^ i7, (i8 >>> 8 | 0 << 24) ^ i8, 9, 0) | 0;
 i8 = tempRet0;
 i7 = (i3 >>> 15 | i8 << 17) ^ i3;
 i3 = (i8 >>> 15 | 0 << 17) ^ i8;
 i8 = _i64Add(i7, i3, ~(i7 << 27 | 0 >>> 5), ~(i3 << 27 | i7 >>> 5)) | 0;
 i7 = (i8 >>> 31 | tempRet0 << 1) ^ i8;
 i8 = i7 & i5;
 i3 = i4 + (i8 * 48 & -1) | 0;
 i9 = i3 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = HEAP32[i9 + 4 >> 2] | 0;
 L1 : do {
  if ((i10 | 0) == 0 & (i11 | 0) == 0) {
   i12 = 0;
   i13 = i3;
  } else {
   i9 = (i7 >>> 23) + ~i7 | 0;
   i14 = i9 << 12 ^ i9;
   i9 = i14 >>> 7 ^ i14;
   i14 = i9 << 2 ^ i9;
   i9 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i8;
   i17 = i3;
   i18 = i11;
   i19 = i10;
   while (1) {
    if ((i19 | 0) == (i2 | 0) & (i18 | 0) == (i6 | 0)) {
     break;
    }
    i20 = (i19 | 0) == (-1 | 0) & (i18 | 0) == (-1 | 0) ? i17 : i14;
    i21 = (i15 | 0) == 0 ? i9 : i15;
    i22 = i21 + i16 & i5;
    i23 = i4 + (i22 * 48 & -1) | 0;
    i24 = i23 | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    i26 = HEAP32[i24 + 4 >> 2] | 0;
    if ((i25 | 0) == 0 & (i26 | 0) == 0) {
     i12 = i20;
     i13 = i23;
     break L1;
    } else {
     i14 = i20;
     i15 = i21;
     i16 = i22;
     i17 = i23;
     i18 = i26;
     i19 = i25;
    }
   }
   HEAP32[i1 >> 2] = i17;
   HEAP8[i1 + 4 | 0] = 1;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = (i12 | 0) != 0 ? i12 : i13;
 HEAP8[i1 + 4 | 0] = 0;
 return;
}
function __ZN7WebCore14IDBObjectStore5clearEPNS_22ScriptExecutionContextERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 if ((HEAP8[i2 + 84 | 0] & 1) != 0) {
  HEAP32[i4 >> 2] = 1208;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 i9 = i2 + 80 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((HEAP32[i10 + 88 >> 2] | 0) != 1) {
  HEAP32[i4 >> 2] = 1204;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i10 + 84 >> 2] | 0) == 0) {
  HEAP32[i4 >> 2] = 1205;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore6IDBAny6createINS_14IDBObjectStoreEEEN3WTF10PassRefPtrIS0_EEPT_(i7, i2);
 __ZN7WebCore10IDBRequest6createEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_6IDBAnyEEEPNS_14IDBTransactionE(i6, i3, i7, HEAP32[i9 >> 2] | 0);
 i3 = i6 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 + 4 | 0;
   i4 = i7 | 0;
   i10 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i4 >> 2] = i10;
    break;
   }
   i10 = i7 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   __ZN7WebCore6IDBAnyD1Ev(i10);
   __ZN3WTF8fastFreeEPv(i10);
  }
 } while (0);
 i3 = __ZNK7WebCore14IDBTransaction9backendDBEv(HEAP32[i9 >> 2] | 0) | 0;
 i10 = (HEAP32[i9 >> 2] | 0) + 56 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 i7 = HEAP32[i10 + 4 >> 2] | 0;
 i10 = i2 + 16 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 i4 = HEAP32[i10 + 4 >> 2] | 0;
 i10 = i8 | 0;
 HEAP32[i10 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i11 = i6 + 4 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 }
 __ZN7WebCore18IDBDatabaseBackend16clearObjectStoreExxN3WTF10PassRefPtrINS_12IDBCallbacksEEE(i3, i9, i7, i2, i4, i8);
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i10 = i8 + 4 | 0;
   i4 = i10 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i4 >> 2] = i2;
    break;
   }
   i2 = i10 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 7](i2);
  }
 } while (0);
 HEAP32[i1 >> 2] = i6;
 STACKTOP = i5;
 return;
}
function __ZN3WTF6VectorINS0_INS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEEELj0ES5_E15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 * 12 & -1) | 0;
 if (i2 >>> 0 > 357913941 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 12 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 12 & -1;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   i2 = i7 | 0;
   HEAP32[i2 >> 2] = 0;
   i8 = i7 + 4 | 0;
   HEAP32[i8 >> 2] = 0;
   i9 = i7 + 8 | 0;
   HEAP32[i9 >> 2] = 0;
   i10 = i6 + 8 | 0;
   HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i10 >> 2] = 0;
   i9 = i6 | 0;
   i11 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i9 >> 2] = i11;
   i11 = i6 + 4 | 0;
   i2 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i11 >> 2] = i2;
   i2 = HEAP32[i10 >> 2] | 0;
   if ((i2 | 0) != 0) {
    i8 = HEAP32[i9 >> 2] | 0;
    i12 = i8 + (i2 << 2) | 0;
    i2 = i8;
    while (1) {
     i8 = HEAP32[i2 >> 2] | 0;
     do {
      if ((i8 | 0) != 0) {
       i13 = i8 | 0;
       i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
       if ((i14 | 0) == 0) {
        __ZN7WebCore6IDBKeyD1Ev(i8);
        __ZN3WTF8fastFreeEPv(i8);
        break;
       } else {
        HEAP32[i13 >> 2] = i14;
        break;
       }
      }
     } while (0);
     i2 = i2 + 4 | 0;
     if ((i2 | 0) == (i12 | 0)) {
      break;
     }
    }
    HEAP32[i10 >> 2] = 0;
   }
   i12 = HEAP32[i9 >> 2] | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i9 >> 2] = 0;
    HEAP32[i11 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i12);
   }
   i12 = i6 + 12 | 0;
   if ((i12 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i12;
    i7 = i7 + 12 | 0;
   }
  }
 }
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN3WTF6VectorINS0_INS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEEELj0ES5_EC2ILj1ES5_EERKNS0_IS6_XT_ET0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = i5;
 if ((i3 | 0) == 0) {
  return;
 }
 if (i3 >>> 0 > 357913941 >>> 0) {
  _WTFCrash();
 }
 i5 = __ZN3WTF18fastMallocGoodSizeEj(i3 * 12 & -1) | 0;
 HEAP32[i7 >> 2] = (i5 >>> 0) / 12 & -1;
 i7 = __ZN3WTF10fastMallocEj(i5) | 0;
 i5 = i7;
 HEAP32[i6 >> 2] = i5;
 if ((i7 | 0) == 0) {
  return;
 }
 i7 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i4 = i7 + (i2 * 12 & -1) | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  i8 = i7;
  i9 = i5;
 }
 L12 : while (1) {
  i5 = HEAP32[i8 + 4 >> 2] | 0;
  i7 = i8 + 8 | 0;
  i2 = HEAP32[i7 >> 2] | 0;
  i6 = i9 | 0;
  HEAP32[i6 >> 2] = 0;
  i3 = i9 + 4 | 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i9 + 8 >> 2] = i2;
  do {
   if ((i5 | 0) != 0) {
    if (i5 >>> 0 > 1073741823 >>> 0) {
     i10 = 8;
     break L12;
    }
    i2 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
    HEAP32[i3 >> 2] = i2 >>> 2;
    i1 = __ZN3WTF10fastMallocEj(i2) | 0;
    i2 = i1;
    HEAP32[i6 >> 2] = i2;
    if ((i1 | 0) == 0) {
     break;
    }
    i1 = HEAP32[i8 >> 2] | 0;
    i11 = HEAP32[i7 >> 2] | 0;
    i12 = i1 + (i11 << 2) | 0;
    if ((i11 | 0) == 0) {
     break;
    } else {
     i13 = i1;
     i14 = i2;
    }
    while (1) {
     i2 = HEAP32[i13 >> 2] | 0;
     HEAP32[i14 >> 2] = i2;
     if ((i2 | 0) != 0) {
      i1 = i2 | 0;
      HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
     }
     i1 = i13 + 4 | 0;
     if ((i1 | 0) == (i12 | 0)) {
      break;
     } else {
      i13 = i1;
      i14 = i14 + 4 | 0;
     }
    }
   }
  } while (0);
  i7 = i8 + 12 | 0;
  if ((i7 | 0) == (i4 | 0)) {
   i10 = 18;
   break;
  } else {
   i8 = i7;
   i9 = i9 + 12 | 0;
  }
 }
 if ((i10 | 0) == 8) {
  _WTFCrash();
 } else if ((i10 | 0) == 18) {
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore8IDBIndexEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E8reinsertEOS7_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 i6 = HEAP32[i5 + 16 >> 2] | 0;
 if (i6 >>> 0 > 127 >>> 0) {
  i7 = i6 >>> 7;
 } else {
  i7 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i5) | 0;
 }
 i5 = (i7 >>> 23) + ~i7 | 0;
 i6 = i5 << 12 ^ i5;
 i5 = i6 >>> 7 ^ i6;
 i6 = i5 << 2 ^ i5;
 i5 = i6 >>> 20 ^ i6 | 1;
 i6 = i7;
 i7 = 0;
 i8 = 0;
 while (1) {
  i9 = i6 & i4;
  i10 = i3 + (i9 << 3) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  i12 = i11;
  if ((i12 | 0) == (-1 | 0)) {
   i13 = i10;
  } else if ((i12 | 0) == 0) {
   i14 = 6;
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i11, HEAP32[i1 >> 2] | 0) | 0) {
    i15 = i10;
    break;
   } else {
    i13 = i8;
   }
  }
  i11 = (i7 | 0) == 0 ? i5 : i7;
  i6 = i11 + i9 | 0;
  i7 = i11;
  i8 = i13;
 }
 if ((i14 | 0) == 6) {
  i15 = (i8 | 0) != 0 ? i8 : i10;
 }
 i10 = i15 + 4 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i14 = i8 + 4 | 0;
   i13 = i14 | 0;
   i7 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i13 >> 2] = i7;
    break;
   }
   i7 = i14 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   __ZN7WebCore8IDBIndexD1Ev(i7);
   __ZN3WTF8fastFreeEPv(i7);
  }
 } while (0);
 i8 = i15 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i14 = i7 | 0;
   i13 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i14 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i8 >> 2] = i7;
 i7 = i2 + 4 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i10 >> 2] = i2;
 return i15 | 0;
}
function __ZNK7WebCore14IDBObjectStore11findIndexIdERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = i1 + 56 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i1 + 60 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i4 + (i6 * 48 & -1) | 0;
 if ((HEAP32[i1 + 68 >> 2] | 0) == 0) {
  i8 = -1;
  i9 = -1;
  return (tempRet0 = i8, i9) | 0;
 }
 L4 : do {
  if ((i6 | 0) == 0) {
   i10 = i4;
  } else {
   i1 = i4;
   while (1) {
    i11 = i1 | 0;
    i12 = HEAP32[i11 >> 2] | 0;
    i13 = HEAP32[i11 + 4 >> 2] | 0;
    if (!((i12 | 0) == (-1 | 0) & (i13 | 0) == (-1 | 0) | (i12 | 0) == 0 & (i13 | 0) == 0)) {
     i10 = i1;
     break L4;
    }
    i13 = i1 + 48 | 0;
    if ((i13 | 0) == (i7 | 0)) {
     i8 = -1;
     i9 = -1;
     break;
    } else {
     i1 = i13;
    }
   }
   return (tempRet0 = i8, i9) | 0;
  }
 } while (0);
 if ((i10 | 0) == (i7 | 0)) {
  i8 = -1;
  i9 = -1;
  return (tempRet0 = i8, i9) | 0;
 }
 i4 = i2 | 0;
 i2 = i10;
 while (1) {
  if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i2 + 8 >> 2] | 0, HEAP32[i4 >> 2] | 0) | 0) {
   break;
  }
  i10 = i2 + 48 | 0;
  L16 : do {
   if ((i10 | 0) == (i7 | 0)) {
    i14 = i7;
   } else {
    i6 = i10;
    while (1) {
     i1 = i6 | 0;
     i13 = HEAP32[i1 >> 2] | 0;
     i12 = HEAP32[i1 + 4 >> 2] | 0;
     if (!((i13 | 0) == (-1 | 0) & (i12 | 0) == (-1 | 0) | (i13 | 0) == 0 & (i12 | 0) == 0)) {
      i14 = i6;
      break L16;
     }
     i12 = i6 + 48 | 0;
     if ((i12 | 0) == (i7 | 0)) {
      i14 = i7;
      break;
     } else {
      i6 = i12;
     }
    }
   }
  } while (0);
  if ((i14 | 0) == ((HEAP32[i3 >> 2] | 0) + ((HEAP32[i5 >> 2] | 0) * 48 & -1) | 0)) {
   i8 = -1;
   i9 = -1;
   i15 = 18;
   break;
  } else {
   i2 = i14;
  }
 }
 if ((i15 | 0) == 18) {
  return (tempRet0 = i8, i9) | 0;
 }
 i15 = i2 | 0;
 i8 = HEAP32[i15 + 4 >> 2] | 0;
 i9 = HEAP32[i15 >> 2] | 0;
 return (tempRet0 = i8, i9) | 0;
}
function __ZNK7WebCore14IDBObjectStore10indexNamesEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = __ZN3WTF10fastMallocEj(16) | 0;
 i4 = i3;
 HEAP32[i3 >> 2] = 1;
 HEAP32[i3 + 4 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = 0;
 HEAP32[i3 + 12 >> 2] = 0;
 i3 = i2 + 56 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 i6 = i2 + 60 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i5 + (i7 * 48 & -1) | 0;
 L1 : do {
  if ((HEAP32[i2 + 68 >> 2] | 0) != 0) {
   L3 : do {
    if ((i7 | 0) == 0) {
     i9 = i5;
    } else {
     i10 = i5;
     while (1) {
      i11 = i10 | 0;
      i12 = HEAP32[i11 >> 2] | 0;
      i13 = HEAP32[i11 + 4 >> 2] | 0;
      if (!((i12 | 0) == (-1 | 0) & (i13 | 0) == (-1 | 0) | (i12 | 0) == 0 & (i13 | 0) == 0)) {
       i9 = i10;
       break L3;
      }
      i10 = i10 + 48 | 0;
      if ((i10 | 0) == (i8 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i9 | 0) == (i8 | 0)) {
    break;
   } else {
    i14 = i9;
   }
   while (1) {
    __ZN7WebCore13DOMStringList6appendERKN3WTF6StringE(i4, i14 + 8 | 0);
    i10 = i14 + 48 | 0;
    L10 : do {
     if ((i10 | 0) == (i8 | 0)) {
      i15 = i8;
     } else {
      i13 = i10;
      while (1) {
       i12 = i13 | 0;
       i11 = HEAP32[i12 >> 2] | 0;
       i16 = HEAP32[i12 + 4 >> 2] | 0;
       if (!((i11 | 0) == (-1 | 0) & (i16 | 0) == (-1 | 0) | (i11 | 0) == 0 & (i16 | 0) == 0)) {
        i15 = i13;
        break L10;
       }
       i16 = i13 + 48 | 0;
       if ((i16 | 0) == (i8 | 0)) {
        i15 = i8;
        break;
       } else {
        i13 = i16;
       }
      }
     }
    } while (0);
    if ((i15 | 0) == ((HEAP32[i3 >> 2] | 0) + ((HEAP32[i6 >> 2] | 0) * 48 & -1) | 0)) {
     break;
    } else {
     i14 = i15;
    }
   }
  }
 } while (0);
 __ZN7WebCore13DOMStringList4sortEv(i4);
 HEAP32[i1 >> 2] = i4;
 return;
}
function __ZN3WTF7HashMapINS_6StringENS_6RefPtrIN7WebCore8IDBIndexEEENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE4findERKS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i6 = HEAP32[i2 + 4 >> 2] << 3 | 0;
   i7 = i6;
   i8 = i6;
  } else {
   i6 = HEAP32[i2 + 8 >> 2] | 0;
   i9 = i3 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   i11 = HEAP32[i10 + 16 >> 2] | 0;
   if (i11 >>> 0 > 127 >>> 0) {
    i12 = i11 >>> 7;
   } else {
    i12 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i10) | 0;
   }
   i10 = (i12 >>> 23) + ~i12 | 0;
   i11 = i10 << 12 ^ i10;
   i10 = i11 >>> 7 ^ i11;
   i11 = i10 << 2 ^ i10;
   i10 = i11 >>> 20 ^ i11 | 1;
   i11 = i12;
   i13 = 0;
   while (1) {
    i14 = i11 & i6;
    i15 = i5 + (i14 << 3) | 0;
    i16 = HEAP32[i15 >> 2] | 0;
    i17 = i16;
    if ((i17 | 0) == 0) {
     i18 = 8;
     break;
    } else if ((i17 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i16, HEAP32[i9 >> 2] | 0) | 0) {
      i18 = 11;
      break;
     }
    }
    i16 = (i13 | 0) == 0 ? i10 : i13;
    i11 = i16 + i14 | 0;
    i13 = i16;
   }
   if ((i18 | 0) == 8) {
    i13 = (HEAP32[i4 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i7 = i13;
    i8 = i13;
    break;
   } else if ((i18 | 0) == 11) {
    i13 = (HEAP32[i4 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i7 = (i15 | 0) == 0 ? i13 : i15;
    i8 = i13;
    break;
   }
  }
 } while (0);
 i15 = i1;
 HEAP32[i15 >> 2] = i7;
 HEAP32[i15 + 4 >> 2] = i8;
 return;
}
function __ZN7WebCore14IDBObjectStore10openCursorEPNS_22ScriptExecutionContextERKN10Deprecated11ScriptValueERKN3WTF6StringERi(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 __ZN7WebCore11IDBKeyRange4onlyEPNS_22ScriptExecutionContextERKN10Deprecated11ScriptValueERi(i9, i3, i4, i6);
 i4 = i9 | 0;
 i9 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  i4 = i8 | 0;
  HEAP32[i4 >> 2] = i9;
  __ZN7WebCore14IDBObjectStore10openCursorEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_11IDBKeyRangeEEERKNS3_6StringENS_18IDBDatabaseBackend8TaskTypeERi(i1, i2, i3, i8, i5, 0, i6);
  i6 = HEAP32[i4 >> 2] | 0;
  if ((i6 | 0) == 0) {
   STACKTOP = i7;
   return;
  }
  i4 = i6 + 4 | 0;
  i6 = i4 | 0;
  i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i5 | 0) != 0) {
   HEAP32[i6 >> 2] = i5;
   STACKTOP = i7;
   return;
  }
  i5 = i4 - 4 | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i7;
   return;
  }
  __ZN7WebCore11IDBKeyRangeD2Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
  STACKTOP = i7;
  return;
 } else {
  HEAP32[i1 >> 2] = 0;
  if ((i9 | 0) == 0) {
   STACKTOP = i7;
   return;
  }
  i1 = i9 + 4 | 0;
  i9 = i1 | 0;
  i5 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
  if ((i5 | 0) != 0) {
   HEAP32[i9 >> 2] = i5;
   STACKTOP = i7;
   return;
  }
  i5 = i1 - 4 | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i7;
   return;
  }
  __ZN7WebCore11IDBKeyRangeD2Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
  STACKTOP = i7;
  return;
 }
}
function __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 HEAP32[i5 >> 2] = 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[(i2 & -4096) + 12 >> 2] | 0;
 if ((HEAP32[i6 + 84 >> 2] | 0) != 0) {
  _WTFCrash();
 }
 i2 = i6 + 80 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i7 | 0) == 0) {
  __ZN3JSC9HandleSet4growEv(i6);
  i8 = HEAP32[i2 >> 2] | 0;
 } else {
  i8 = i7;
 }
 i7 = i8 + 12 | 0;
 HEAP32[i2 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i8 + 4 >> 2] = -6;
 HEAP32[i8 >> 2] = 0;
 i2 = i8 + 8 | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i7 >> 2] = 0;
 i9 = i6 + 60 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i2 >> 2] = i6 + 48;
 HEAP32[i7 >> 2] = i10;
 HEAP32[i9 >> 2] = i8;
 HEAP32[i10 + 8 >> 2] = i8;
 i10 = i8 | 0;
 HEAP32[i5 >> 2] = i10;
 i9 = HEAP32[i1 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i11 = 0;
  i12 = 0;
  i13 = -6;
  i14 = 0;
 } else {
  i1 = i9 | 0;
  i9 = HEAP32[i1 >> 2] | 0;
  i7 = HEAP32[i1 + 4 >> 2] | 0;
  i11 = i7 & 0;
  i12 = i9 & -1;
  i13 = i7 & -1;
  i14 = i9 & 0;
 }
 i9 = i4 | 0;
 HEAP32[i9 >> 2] = i12 | i14;
 HEAP32[i9 + 4 >> 2] = i11 | i13;
 __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i8 & -4096) + 12 >> 2] | 0, i10, i4);
 i4 = HEAP32[i9 + 4 >> 2] | 0;
 i10 = HEAP32[i5 >> 2] | 0;
 HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i10 + 4 >> 2] = i4;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore14IDBObjectStore14deleteFunctionEPNS_22ScriptExecutionContextERKN10Deprecated11ScriptValueERi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 __ZN7WebCore11IDBKeyRange4onlyEPNS_22ScriptExecutionContextERKN10Deprecated11ScriptValueERi(i7, i3, i4, i5);
 i4 = i7 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  i4 = i8 | 0;
  HEAP32[i4 >> 2] = i7;
  __ZN7WebCore14IDBObjectStore14deleteFunctionEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_11IDBKeyRangeEEERi(i1, i2, i3, i8, i5);
  i5 = HEAP32[i4 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i6;
   return;
  }
  i4 = i5 + 4 | 0;
  i5 = i4 | 0;
  i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) != 0) {
   HEAP32[i5 >> 2] = i8;
   STACKTOP = i6;
   return;
  }
  i8 = i4 - 4 | 0;
  if ((i8 | 0) == 0) {
   STACKTOP = i6;
   return;
  }
  __ZN7WebCore11IDBKeyRangeD2Ev(i8);
  __ZN3WTF8fastFreeEPv(i8);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i1 >> 2] = 0;
  if ((i7 | 0) == 0) {
   STACKTOP = i6;
   return;
  }
  i1 = i7 + 4 | 0;
  i7 = i1 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) != 0) {
   HEAP32[i7 >> 2] = i8;
   STACKTOP = i6;
   return;
  }
  i8 = i1 - 4 | 0;
  if ((i8 | 0) == 0) {
   STACKTOP = i6;
   return;
  }
  __ZN7WebCore11IDBKeyRangeD2Ev(i8);
  __ZN3WTF8fastFreeEPv(i8);
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore14IDBObjectStore5countEPNS_22ScriptExecutionContextERKN10Deprecated11ScriptValueERi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 __ZN7WebCore11IDBKeyRange4onlyEPNS_22ScriptExecutionContextERKN10Deprecated11ScriptValueERi(i7, i3, i4, i5);
 i4 = i7 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  i4 = i8 | 0;
  HEAP32[i4 >> 2] = i7;
  __ZN7WebCore14IDBObjectStore5countEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_11IDBKeyRangeEEERi(i1, i2, i3, i8, i5);
  i5 = HEAP32[i4 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i6;
   return;
  }
  i4 = i5 + 4 | 0;
  i5 = i4 | 0;
  i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) != 0) {
   HEAP32[i5 >> 2] = i8;
   STACKTOP = i6;
   return;
  }
  i8 = i4 - 4 | 0;
  if ((i8 | 0) == 0) {
   STACKTOP = i6;
   return;
  }
  __ZN7WebCore11IDBKeyRangeD2Ev(i8);
  __ZN3WTF8fastFreeEPv(i8);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i1 >> 2] = 0;
  if ((i7 | 0) == 0) {
   STACKTOP = i6;
   return;
  }
  i1 = i7 + 4 | 0;
  i7 = i1 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) != 0) {
   HEAP32[i7 >> 2] = i8;
   STACKTOP = i6;
   return;
  }
  i8 = i1 - 4 | 0;
  if ((i8 | 0) == 0) {
   STACKTOP = i6;
   return;
  }
  __ZN7WebCore11IDBKeyRangeD2Ev(i8);
  __ZN3WTF8fastFreeEPv(i8);
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore14IDBObjectStore3getEPNS_22ScriptExecutionContextERKN10Deprecated11ScriptValueERi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 __ZN7WebCore11IDBKeyRange4onlyEPNS_22ScriptExecutionContextERKN10Deprecated11ScriptValueERi(i7, i3, i4, i5);
 i4 = i7 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  i4 = i8 | 0;
  HEAP32[i4 >> 2] = i7;
  __ZN7WebCore14IDBObjectStore3getEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_11IDBKeyRangeEEERi(i1, i2, i3, i8, i5);
  i5 = HEAP32[i4 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i6;
   return;
  }
  i4 = i5 + 4 | 0;
  i5 = i4 | 0;
  i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) != 0) {
   HEAP32[i5 >> 2] = i8;
   STACKTOP = i6;
   return;
  }
  i8 = i4 - 4 | 0;
  if ((i8 | 0) == 0) {
   STACKTOP = i6;
   return;
  }
  __ZN7WebCore11IDBKeyRangeD2Ev(i8);
  __ZN3WTF8fastFreeEPv(i8);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i1 >> 2] = 0;
  if ((i7 | 0) == 0) {
   STACKTOP = i6;
   return;
  }
  i1 = i7 + 4 | 0;
  i7 = i1 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) != 0) {
   HEAP32[i7 >> 2] = i8;
   STACKTOP = i6;
   return;
  }
  i8 = i1 - 4 | 0;
  if ((i8 | 0) == 0) {
   STACKTOP = i6;
   return;
  }
  __ZN7WebCore11IDBKeyRangeD2Ev(i8);
  __ZN3WTF8fastFreeEPv(i8);
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore13DOMStringList6appendERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i1 + 4 | 0;
 i4 = i1 + 12 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) == (HEAP32[i1 + 8 >> 2] | 0)) {
   i6 = i5 + 1 | 0;
   i7 = i3 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   do {
    if (i8 >>> 0 > i2 >>> 0) {
     i9 = 6;
    } else {
     if ((i8 + (i5 << 2) | 0) >>> 0 <= i2 >>> 0) {
      i9 = 6;
      break;
     }
     __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i6);
     i10 = HEAP32[i7 >> 2] | 0;
     i11 = i10 + (i2 - i8 >> 2 << 2) | 0;
     i12 = i10;
    }
   } while (0);
   if ((i9 | 0) == 6) {
    __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i6);
    i11 = i2;
    i12 = HEAP32[i7 >> 2] | 0;
   }
   i8 = HEAP32[i11 >> 2] | 0;
   HEAP32[i12 + (HEAP32[i4 >> 2] << 2) >> 2] = i8;
   if ((i8 | 0) == 0) {
    break;
   }
   i10 = i8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
  } else {
   i10 = HEAP32[i2 >> 2] | 0;
   HEAP32[(HEAP32[i3 >> 2] | 0) + (i5 << 2) >> 2] = i10;
   if ((i10 | 0) == 0) {
    break;
   }
   i8 = i10 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  }
 } while (0);
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore8IDBIndexEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS7_i(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 if ((i2 | 0) > 0) {
  i3 = 0;
 } else {
  i4 = i1;
  __ZN3WTF8fastFreeEPv(i4);
  return;
 }
 while (1) {
  i5 = i1 + (i3 << 3) | 0;
  do {
   if ((HEAP32[i5 >> 2] | 0) != -1) {
    i6 = HEAP32[i1 + (i3 << 3) + 4 >> 2] | 0;
    do {
     if ((i6 | 0) != 0) {
      i7 = i6 + 4 | 0;
      i8 = i7 | 0;
      i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
      if ((i9 | 0) != 0) {
       HEAP32[i8 >> 2] = i9;
       break;
      }
      i9 = i7 - 4 | 0;
      if ((i9 | 0) == 0) {
       break;
      }
      __ZN7WebCore8IDBIndexD1Ev(i9);
      __ZN3WTF8fastFreeEPv(i9);
     }
    } while (0);
    i6 = HEAP32[i5 >> 2] | 0;
    if ((i6 | 0) == 0) {
     break;
    }
    i9 = i6 | 0;
    i7 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
    if ((i7 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i6);
     break;
    } else {
     HEAP32[i9 >> 2] = i7;
     break;
    }
   }
  } while (0);
  i3 = i3 + 1 | 0;
  if ((i3 | 0) >= (i2 | 0)) {
   break;
  }
 }
 i4 = i1;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN7WebCore16IDBIndexMetadataaSERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i5 = i2 + 8 | 0;
 i4 = HEAP32[i5 + 4 >> 2] | 0;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i3 + 4 >> 2] = i4;
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 i4 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i1 + 20 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEEaSERKS3_(i1 + 24 | 0, i2 + 24 | 0) | 0;
 HEAP8[i1 + 36 | 0] = HEAP8[i2 + 36 | 0] & 1;
 HEAP8[i1 + 37 | 0] = HEAP8[i2 + 37 | 0] & 1;
 return i1 | 0;
}
function __ZN7WebCore16IDBIndexMetadataD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 32 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 24 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
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
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 28 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i6;
  return;
 }
}
function __ZN7WebCore14IDBObjectStore3putEPN3JSC9ExecStateERN10Deprecated11ScriptValueERi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 __ZN7WebCore6IDBAny6createINS_14IDBObjectStoreEEEN3WTF10PassRefPtrIS0_EEPT_(i7, i2);
 i9 = i8 | 0;
 HEAP32[i9 >> 2] = 0;
 __ZN7WebCore14IDBObjectStore3putENS_18IDBDatabaseBackend7PutModeEN3WTF10PassRefPtrINS_6IDBAnyEEEPN3JSC9ExecStateERN10Deprecated11ScriptValueENS4_INS_6IDBKeyEEERi(i1, i2, 0, i7, i3, i4, i8, i5);
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i7 = i5 + 4 | 0;
 i5 = i7 | 0;
 i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i8 | 0) != 0) {
  HEAP32[i5 >> 2] = i8;
  STACKTOP = i6;
  return;
 }
 i8 = i7 - 4 | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore6IDBAnyD1Ev(i8);
 __ZN3WTF8fastFreeEPv(i8);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore14IDBObjectStore3addEPN3JSC9ExecStateERN10Deprecated11ScriptValueERi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 __ZN7WebCore6IDBAny6createINS_14IDBObjectStoreEEEN3WTF10PassRefPtrIS0_EEPT_(i7, i2);
 i9 = i8 | 0;
 HEAP32[i9 >> 2] = 0;
 __ZN7WebCore14IDBObjectStore3putENS_18IDBDatabaseBackend7PutModeEN3WTF10PassRefPtrINS_6IDBAnyEEEPN3JSC9ExecStateERN10Deprecated11ScriptValueENS4_INS_6IDBKeyEEERi(i1, i2, 1, i7, i3, i4, i8, i5);
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i7 = i5 + 4 | 0;
 i5 = i7 | 0;
 i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i8 | 0) != 0) {
  HEAP32[i5 >> 2] = i8;
  STACKTOP = i6;
  return;
 }
 i8 = i7 - 4 | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore6IDBAnyD1Ev(i8);
 __ZN3WTF8fastFreeEPv(i8);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore14IDBObjectStore10openCursorEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_11IDBKeyRangeEEERi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = __ZN7WebCore9IDBCursor13directionNextEv() | 0;
 i9 = i7 | 0;
 HEAP32[i9 >> 2] = i4;
 __ZN7WebCore14IDBObjectStore10openCursorEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_11IDBKeyRangeEEERKNS3_6StringENS_18IDBDatabaseBackend8TaskTypeERi(i1, i2, i3, i7, i8, 0, i5);
 i5 = HEAP32[i9 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i9 = i5 + 4 | 0;
 i5 = i9 | 0;
 i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i8 | 0) != 0) {
  HEAP32[i5 >> 2] = i8;
  STACKTOP = i6;
  return;
 }
 i8 = i9 - 4 | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore11IDBKeyRangeD2Ev(i8);
 __ZN3WTF8fastFreeEPv(i8);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore14IDBObjectStore10openCursorEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_11IDBKeyRangeEEERKNS3_6StringERi(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 i9 = i8 | 0;
 i10 = i4 | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i9 >> 2] = i4;
 __ZN7WebCore14IDBObjectStore10openCursorEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_11IDBKeyRangeEEERKNS3_6StringENS_18IDBDatabaseBackend8TaskTypeERi(i1, i2, i3, i8, i5, 0, i6);
 i6 = HEAP32[i9 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i9 = i6 + 4 | 0;
 i6 = i9 | 0;
 i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i6 >> 2] = i5;
  STACKTOP = i7;
  return;
 }
 i5 = i9 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 __ZN7WebCore11IDBKeyRangeD2Ev(i5);
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore14IDBObjectStore3putEPN3JSC9ExecStateERN10Deprecated11ScriptValueERKS5_Ri(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 __ZN7WebCore6IDBAny6createINS_14IDBObjectStoreEEEN3WTF10PassRefPtrIS0_EEPT_(i8, i2);
 __ZN7WebCore14IDBObjectStore3putENS_18IDBDatabaseBackend7PutModeEN3WTF10PassRefPtrINS_6IDBAnyEEEPN3JSC9ExecStateERN10Deprecated11ScriptValueERKSB_Ri(i1, i2, 0, i8, i3, i4, i5, i6);
 i6 = HEAP32[i8 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i8 = i6 + 4 | 0;
 i6 = i8 | 0;
 i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i6 >> 2] = i5;
  STACKTOP = i7;
  return;
 }
 i5 = i8 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 __ZN7WebCore6IDBAnyD1Ev(i5);
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore14IDBObjectStore3addEPN3JSC9ExecStateERN10Deprecated11ScriptValueERKS5_Ri(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 __ZN7WebCore6IDBAny6createINS_14IDBObjectStoreEEEN3WTF10PassRefPtrIS0_EEPT_(i8, i2);
 __ZN7WebCore14IDBObjectStore3putENS_18IDBDatabaseBackend7PutModeEN3WTF10PassRefPtrINS_6IDBAnyEEEPN3JSC9ExecStateERN10Deprecated11ScriptValueERKSB_Ri(i1, i2, 1, i8, i3, i4, i5, i6);
 i6 = HEAP32[i8 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i8 = i6 + 4 | 0;
 i6 = i8 | 0;
 i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i6 >> 2] = i5;
  STACKTOP = i7;
  return;
 }
 i5 = i8 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 __ZN7WebCore6IDBAnyD1Ev(i5);
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore14IDBObjectStore10openCursorEPNS_22ScriptExecutionContextERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = __ZN7WebCore9IDBCursor13directionNextEv() | 0;
 i8 = i6 | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN7WebCore14IDBObjectStore10openCursorEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_11IDBKeyRangeEEERKNS3_6StringENS_18IDBDatabaseBackend8TaskTypeERi(i1, i2, i3, i6, i7, 0, i4);
 i4 = HEAP32[i8 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i8 = i4 + 4 | 0;
 i4 = i8 | 0;
 i7 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i4 >> 2] = i7;
  STACKTOP = i5;
  return;
 }
 i7 = i8 - 4 | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore11IDBKeyRangeD2Ev(i7);
 __ZN3WTF8fastFreeEPv(i7);
 STACKTOP = i5;
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore11IDBKeyRangeD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = i1 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 return;
}
function ___remdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i2 >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i8 = ((i2 | 0) < 0 ? -1 : 0) >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i9 = i4 >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i10 = ((i4 | 0) < 0 ? -1 : 0) >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i11 = _i64Subtract(i7 ^ i1, i8 ^ i2, i7, i8) | 0;
 i2 = tempRet0;
 ___udivmoddi4(i11, i2, _i64Subtract(i9 ^ i3, i10 ^ i4, i9, i10) | 0, tempRet0, i6) | 0;
 i10 = _i64Subtract(HEAP32[i6 >> 2] ^ i7, HEAP32[i6 + 4 >> 2] ^ i8, i7, i8) | 0;
 i8 = tempRet0;
 STACKTOP = i5;
 return (tempRet0 = i8, i10) | 0;
}
function ___divdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = i2 >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i6 = ((i2 | 0) < 0 ? -1 : 0) >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i7 = i4 >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i8 = ((i4 | 0) < 0 ? -1 : 0) >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i9 = _i64Subtract(i5 ^ i1, i6 ^ i2, i5, i6) | 0;
 i2 = tempRet0;
 i1 = i7 ^ i5;
 i5 = i8 ^ i6;
 i6 = _i64Subtract((___udivmoddi4(i9, i2, _i64Subtract(i7 ^ i3, i8 ^ i4, i7, i8) | 0, tempRet0, 0) | 0) ^ i1, tempRet0 ^ i5, i1, i5) | 0;
 return (tempRet0 = tempRet0, i6) | 0;
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
function __ZN7WebCore12_GLOBAL__N_114IndexPopulatorD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 40;
 __ZN7WebCore16IDBIndexMetadataD1Ev(i1 + 32 | 0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore18IDBDatabaseBackendD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore14IDBObjectStore19transactionFinishedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 88 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore8IDBIndexEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS7_i(i3, HEAP32[i1 + 92 >> 2] | 0);
 _memset(i2 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore12_GLOBAL__N_114IndexPopulatorD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 40;
 __ZN7WebCore16IDBIndexMetadataD1Ev(i1 + 32 | 0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore18IDBDatabaseBackendD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
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
function ___muldsi3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 & 65535;
 i4 = i2 & 65535;
 i5 = Math_imul(i4, i3) | 0;
 i6 = i1 >>> 16;
 i1 = (i5 >>> 16) + (Math_imul(i4, i6) | 0) | 0;
 i4 = i2 >>> 16;
 i2 = Math_imul(i4, i3) | 0;
 return (tempRet0 = (i1 >>> 16) + (Math_imul(i4, i6) | 0) + (((i1 & 65535) + i2 | 0) >>> 16) | 0, i1 + i2 << 16 | i5 & 65535 | 0) | 0;
}
function __ZN7WebCore14IDBObjectStore10openCursorEPNS_22ScriptExecutionContextERKN10Deprecated11ScriptValueERi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore14IDBObjectStore10openCursorEPNS_22ScriptExecutionContextERKN10Deprecated11ScriptValueERKN3WTF6StringERi(i1, i2, i3, i4, __ZN7WebCore9IDBCursor13directionNextEv() | 0, i5);
 return;
}
function _llvm_cttz_i32(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP8[cttz_i8 + (i1 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 | 0;
 i2 = HEAP8[cttz_i8 + (i1 >> 8 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 + 8 | 0;
 i2 = HEAP8[cttz_i8 + (i1 >> 16 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 + 16 | 0;
 return (HEAP8[cttz_i8 + (i1 >>> 24) | 0] | 0) + 24 | 0;
}
function _llvm_ctlz_i32(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP8[ctlz_i8 + (i1 >>> 24) | 0] | 0;
 if ((i2 | 0) < 8) return i2 | 0;
 i2 = HEAP8[ctlz_i8 + (i1 >> 16 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 + 8 | 0;
 i2 = HEAP8[ctlz_i8 + (i1 >> 8 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 + 16 | 0;
 return (HEAP8[ctlz_i8 + (i1 & 255) | 0] | 0) + 24 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 2;
}
function ___uremdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 ___udivmoddi4(i1, i2, i3, i4, i6) | 0;
 STACKTOP = i5;
 return (tempRet0 = HEAP32[i6 + 4 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0;
}
function ___muldi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = i1;
 i1 = i3;
 i3 = ___muldsi3(i5, i1) | 0;
 i6 = tempRet0;
 return (tempRet0 = (Math_imul(i2, i1) | 0) + (Math_imul(i4, i5) | 0) + i6 | i6 & 0, i3 & -1 | 0) | 0;
}
function _bitshift64Ashr(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i3 | 0) < 32) {
  tempRet0 = i2 >> i3;
  return i1 >>> i3 | (i2 & (1 << i3) - 1) << 32 - i3;
 }
 tempRet0 = (i2 | 0) < 0 ? -1 : 0;
 return i2 >> i3 - 32 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function _bitshift64Shl(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i3 | 0) < 32) {
  tempRet0 = i2 << i3 | (i1 & (1 << i3) - 1 << 32 - i3) >>> 32 - i3;
  return i1 << i3;
 }
 tempRet0 = i1 << i3 - 32;
 return 0;
}
function _i64Subtract(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = i2 - i4 >>> 0;
 i5 = i2 - i4 - (i3 >>> 0 > i1 >>> 0 | 0) >>> 0;
 return (tempRet0 = i5, i1 - i3 >>> 0 | 0) | 0;
}
function _bitshift64Lshr(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i3 | 0) < 32) {
  tempRet0 = i2 >>> i3;
  return i1 >>> i3 | (i2 & (1 << i3) - 1) << 32 - i3;
 }
 tempRet0 = 0;
 return i2 >>> i3 - 32 | 0;
}
function _i64Add(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = i1 + i3 >>> 0;
 return (tempRet0 = i2 + i4 + (i5 >>> 0 < i1 >>> 0 | 0) >>> 0, i5 | 0) | 0;
}
function ___udivdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = ___udivmoddi4(i1, i2, i3, i4, 0) | 0;
 return (tempRet0 = tempRet0, i5) | 0;
}
function __ZNK7WebCore14IDBObjectStore9backendDBEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore14IDBTransaction9backendDBEv(HEAP32[i1 + 80 >> 2] | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 7](i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore12_GLOBAL__N_114IndexPopulatoreqERKNS_13EventListenerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return (i1 | 0) == (i2 | 0) | 0;
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
 return FUNCTION_TABLE_iii[i1 & 3](i2 | 0, i3 | 0) | 0;
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
function __ZN7WebCore13EventListener15visitJSFunctionERN3JSC11SlotVisitorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function __ZNK7WebCore13EventListener20wasCreatedFromMarkupEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore13EventListener18virtualisAttributeEv(i1) {
 i1 = i1 | 0;
 return 0;
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
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore12_GLOBAL__N_114IndexPopulatorD0Ev,b0,__ZN7WebCore12_GLOBAL__N_114IndexPopulatorD2Ev,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore13EventListener15visitJSFunctionERN3JSC11SlotVisitorE,b1];
  var FUNCTION_TABLE_ii = [b2,b2,__ZNK7WebCore13EventListener18virtualisAttributeEv,b2,__ZNK7WebCore13EventListener20wasCreatedFromMarkupEv,b2,b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZN7WebCore14IDBObjectStoreC2ERKNS_22IDBObjectStoreMetadataEPNS_14IDBTransactionE,b3,__ZN7WebCore12_GLOBAL__N_114IndexPopulator11handleEventEPNS_22ScriptExecutionContextEPNS_5EventE,b3,b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5,__ZN7WebCore12_GLOBAL__N_114IndexPopulatoreqERKNS_13EventListenerE,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "cttz_i8": cttz_i8, "ctlz_i8": ctlz_i8, "NaN": NaN, "Infinity": Infinity, "__ZTVN10Deprecated11ScriptValueE": __ZTVN10Deprecated11ScriptValueE }, buffer);
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
// TODO: strip out parts of this we do not need
//======= begin closure i64 code =======
// Copyright 2009 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/**
 * @fileoverview Defines a Long class for representing a 64-bit two's-complement
 * integer value, which faithfully simulates the behavior of a Java "long". This
 * implementation is derived from LongLib in GWT.
 *
 */
var i64Math = (function() { // Emscripten wrapper
  var goog = { math: {} };
  /**
   * Constructs a 64-bit two's-complement integer, given its low and high 32-bit
   * values as *signed* integers.  See the from* functions below for more
   * convenient ways of constructing Longs.
   *
   * The internal representation of a long is the two given signed, 32-bit values.
   * We use 32-bit pieces because these are the size of integers on which
   * Javascript performs bit-operations.  For operations like addition and
   * multiplication, we split each number into 16-bit pieces, which can easily be
   * multiplied within Javascript's floating-point representation without overflow
   * or change in sign.
   *
   * In the algorithms below, we frequently reduce the negative case to the
   * positive case by negating the input(s) and then post-processing the result.
   * Note that we must ALWAYS check specially whether those values are MIN_VALUE
   * (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
   * a positive number, it overflows back into a negative).  Not handling this
   * case would often result in infinite recursion.
   *
   * @param {number} low  The low (signed) 32 bits of the long.
   * @param {number} high  The high (signed) 32 bits of the long.
   * @constructor
   */
  goog.math.Long = function(low, high) {
    /**
     * @type {number}
     * @private
     */
    this.low_ = low | 0;  // force into 32 signed bits.
    /**
     * @type {number}
     * @private
     */
    this.high_ = high | 0;  // force into 32 signed bits.
  };
  // NOTE: Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the
  // from* methods on which they depend.
  /**
   * A cache of the Long representations of small integer values.
   * @type {!Object}
   * @private
   */
  goog.math.Long.IntCache_ = {};
  /**
   * Returns a Long representing the given (32-bit) integer value.
   * @param {number} value The 32-bit integer in question.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromInt = function(value) {
    if (-128 <= value && value < 128) {
      var cachedObj = goog.math.Long.IntCache_[value];
      if (cachedObj) {
        return cachedObj;
      }
    }
    var obj = new goog.math.Long(value | 0, value < 0 ? -1 : 0);
    if (-128 <= value && value < 128) {
      goog.math.Long.IntCache_[value] = obj;
    }
    return obj;
  };
  /**
   * Returns a Long representing the given value, provided that it is a finite
   * number.  Otherwise, zero is returned.
   * @param {number} value The number in question.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromNumber = function(value) {
    if (isNaN(value) || !isFinite(value)) {
      return goog.math.Long.ZERO;
    } else if (value <= -goog.math.Long.TWO_PWR_63_DBL_) {
      return goog.math.Long.MIN_VALUE;
    } else if (value + 1 >= goog.math.Long.TWO_PWR_63_DBL_) {
      return goog.math.Long.MAX_VALUE;
    } else if (value < 0) {
      return goog.math.Long.fromNumber(-value).negate();
    } else {
      return new goog.math.Long(
          (value % goog.math.Long.TWO_PWR_32_DBL_) | 0,
          (value / goog.math.Long.TWO_PWR_32_DBL_) | 0);
    }
  };
  /**
   * Returns a Long representing the 64-bit integer that comes by concatenating
   * the given high and low bits.  Each is assumed to use 32 bits.
   * @param {number} lowBits The low 32-bits.
   * @param {number} highBits The high 32-bits.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromBits = function(lowBits, highBits) {
    return new goog.math.Long(lowBits, highBits);
  };
  /**
   * Returns a Long representation of the given string, written using the given
   * radix.
   * @param {string} str The textual representation of the Long.
   * @param {number=} opt_radix The radix in which the text is written.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromString = function(str, opt_radix) {
    if (str.length == 0) {
      throw Error('number format error: empty string');
    }
    var radix = opt_radix || 10;
    if (radix < 2 || 36 < radix) {
      throw Error('radix out of range: ' + radix);
    }
    if (str.charAt(0) == '-') {
      return goog.math.Long.fromString(str.substring(1), radix).negate();
    } else if (str.indexOf('-') >= 0) {
      throw Error('number format error: interior "-" character: ' + str);
    }
    // Do several (8) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = goog.math.Long.fromNumber(Math.pow(radix, 8));
    var result = goog.math.Long.ZERO;
    for (var i = 0; i < str.length; i += 8) {
      var size = Math.min(8, str.length - i);
      var value = parseInt(str.substring(i, i + size), radix);
      if (size < 8) {
        var power = goog.math.Long.fromNumber(Math.pow(radix, size));
        result = result.multiply(power).add(goog.math.Long.fromNumber(value));
      } else {
        result = result.multiply(radixToPower);
        result = result.add(goog.math.Long.fromNumber(value));
      }
    }
    return result;
  };
  // NOTE: the compiler should inline these constant values below and then remove
  // these variables, so there should be no runtime penalty for these.
  /**
   * Number used repeated below in calculations.  This must appear before the
   * first call to any from* function below.
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_16_DBL_ = 1 << 16;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_24_DBL_ = 1 << 24;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_32_DBL_ =
      goog.math.Long.TWO_PWR_16_DBL_ * goog.math.Long.TWO_PWR_16_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_31_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ / 2;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_48_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ * goog.math.Long.TWO_PWR_16_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_64_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ * goog.math.Long.TWO_PWR_32_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_63_DBL_ =
      goog.math.Long.TWO_PWR_64_DBL_ / 2;
  /** @type {!goog.math.Long} */
  goog.math.Long.ZERO = goog.math.Long.fromInt(0);
  /** @type {!goog.math.Long} */
  goog.math.Long.ONE = goog.math.Long.fromInt(1);
  /** @type {!goog.math.Long} */
  goog.math.Long.NEG_ONE = goog.math.Long.fromInt(-1);
  /** @type {!goog.math.Long} */
  goog.math.Long.MAX_VALUE =
      goog.math.Long.fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0);
  /** @type {!goog.math.Long} */
  goog.math.Long.MIN_VALUE = goog.math.Long.fromBits(0, 0x80000000 | 0);
  /**
   * @type {!goog.math.Long}
   * @private
   */
  goog.math.Long.TWO_PWR_24_ = goog.math.Long.fromInt(1 << 24);
  /** @return {number} The value, assuming it is a 32-bit integer. */
  goog.math.Long.prototype.toInt = function() {
    return this.low_;
  };
  /** @return {number} The closest floating-point representation to this value. */
  goog.math.Long.prototype.toNumber = function() {
    return this.high_ * goog.math.Long.TWO_PWR_32_DBL_ +
           this.getLowBitsUnsigned();
  };
  /**
   * @param {number=} opt_radix The radix in which the text should be written.
   * @return {string} The textual representation of this value.
   */
  goog.math.Long.prototype.toString = function(opt_radix) {
    var radix = opt_radix || 10;
    if (radix < 2 || 36 < radix) {
      throw Error('radix out of range: ' + radix);
    }
    if (this.isZero()) {
      return '0';
    }
    if (this.isNegative()) {
      if (this.equals(goog.math.Long.MIN_VALUE)) {
        // We need to change the Long value before it can be negated, so we remove
        // the bottom-most digit in this base and then recurse to do the rest.
        var radixLong = goog.math.Long.fromNumber(radix);
        var div = this.div(radixLong);
        var rem = div.multiply(radixLong).subtract(this);
        return div.toString(radix) + rem.toInt().toString(radix);
      } else {
        return '-' + this.negate().toString(radix);
      }
    }
    // Do several (6) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = goog.math.Long.fromNumber(Math.pow(radix, 6));
    var rem = this;
    var result = '';
    while (true) {
      var remDiv = rem.div(radixToPower);
      var intval = rem.subtract(remDiv.multiply(radixToPower)).toInt();
      var digits = intval.toString(radix);
      rem = remDiv;
      if (rem.isZero()) {
        return digits + result;
      } else {
        while (digits.length < 6) {
          digits = '0' + digits;
        }
        result = '' + digits + result;
      }
    }
  };
  /** @return {number} The high 32-bits as a signed value. */
  goog.math.Long.prototype.getHighBits = function() {
    return this.high_;
  };
  /** @return {number} The low 32-bits as a signed value. */
  goog.math.Long.prototype.getLowBits = function() {
    return this.low_;
  };
  /** @return {number} The low 32-bits as an unsigned value. */
  goog.math.Long.prototype.getLowBitsUnsigned = function() {
    return (this.low_ >= 0) ?
        this.low_ : goog.math.Long.TWO_PWR_32_DBL_ + this.low_;
  };
  /**
   * @return {number} Returns the number of bits needed to represent the absolute
   *     value of this Long.
   */
  goog.math.Long.prototype.getNumBitsAbs = function() {
    if (this.isNegative()) {
      if (this.equals(goog.math.Long.MIN_VALUE)) {
        return 64;
      } else {
        return this.negate().getNumBitsAbs();
      }
    } else {
      var val = this.high_ != 0 ? this.high_ : this.low_;
      for (var bit = 31; bit > 0; bit--) {
        if ((val & (1 << bit)) != 0) {
          break;
        }
      }
      return this.high_ != 0 ? bit + 33 : bit + 1;
    }
  };
  /** @return {boolean} Whether this value is zero. */
  goog.math.Long.prototype.isZero = function() {
    return this.high_ == 0 && this.low_ == 0;
  };
  /** @return {boolean} Whether this value is negative. */
  goog.math.Long.prototype.isNegative = function() {
    return this.high_ < 0;
  };
  /** @return {boolean} Whether this value is odd. */
  goog.math.Long.prototype.isOdd = function() {
    return (this.low_ & 1) == 1;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long equals the other.
   */
  goog.math.Long.prototype.equals = function(other) {
    return (this.high_ == other.high_) && (this.low_ == other.low_);
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long does not equal the other.
   */
  goog.math.Long.prototype.notEquals = function(other) {
    return (this.high_ != other.high_) || (this.low_ != other.low_);
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is less than the other.
   */
  goog.math.Long.prototype.lessThan = function(other) {
    return this.compare(other) < 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is less than or equal to the other.
   */
  goog.math.Long.prototype.lessThanOrEqual = function(other) {
    return this.compare(other) <= 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is greater than the other.
   */
  goog.math.Long.prototype.greaterThan = function(other) {
    return this.compare(other) > 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is greater than or equal to the other.
   */
  goog.math.Long.prototype.greaterThanOrEqual = function(other) {
    return this.compare(other) >= 0;
  };
  /**
   * Compares this Long with the given one.
   * @param {goog.math.Long} other Long to compare against.
   * @return {number} 0 if they are the same, 1 if the this is greater, and -1
   *     if the given one is greater.
   */
  goog.math.Long.prototype.compare = function(other) {
    if (this.equals(other)) {
      return 0;
    }
    var thisNeg = this.isNegative();
    var otherNeg = other.isNegative();
    if (thisNeg && !otherNeg) {
      return -1;
    }
    if (!thisNeg && otherNeg) {
      return 1;
    }
    // at this point, the signs are the same, so subtraction will not overflow
    if (this.subtract(other).isNegative()) {
      return -1;
    } else {
      return 1;
    }
  };
  /** @return {!goog.math.Long} The negation of this value. */
  goog.math.Long.prototype.negate = function() {
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      return goog.math.Long.MIN_VALUE;
    } else {
      return this.not().add(goog.math.Long.ONE);
    }
  };
  /**
   * Returns the sum of this and the given Long.
   * @param {goog.math.Long} other Long to add to this one.
   * @return {!goog.math.Long} The sum of this and the given Long.
   */
  goog.math.Long.prototype.add = function(other) {
    // Divide each number into 4 chunks of 16 bits, and then sum the chunks.
    var a48 = this.high_ >>> 16;
    var a32 = this.high_ & 0xFFFF;
    var a16 = this.low_ >>> 16;
    var a00 = this.low_ & 0xFFFF;
    var b48 = other.high_ >>> 16;
    var b32 = other.high_ & 0xFFFF;
    var b16 = other.low_ >>> 16;
    var b00 = other.low_ & 0xFFFF;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 + b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 + b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 + b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 + b48;
    c48 &= 0xFFFF;
    return goog.math.Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32);
  };
  /**
   * Returns the difference of this and the given Long.
   * @param {goog.math.Long} other Long to subtract from this.
   * @return {!goog.math.Long} The difference of this and the given Long.
   */
  goog.math.Long.prototype.subtract = function(other) {
    return this.add(other.negate());
  };
  /**
   * Returns the product of this and the given long.
   * @param {goog.math.Long} other Long to multiply with this.
   * @return {!goog.math.Long} The product of this and the other.
   */
  goog.math.Long.prototype.multiply = function(other) {
    if (this.isZero()) {
      return goog.math.Long.ZERO;
    } else if (other.isZero()) {
      return goog.math.Long.ZERO;
    }
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      return other.isOdd() ? goog.math.Long.MIN_VALUE : goog.math.Long.ZERO;
    } else if (other.equals(goog.math.Long.MIN_VALUE)) {
      return this.isOdd() ? goog.math.Long.MIN_VALUE : goog.math.Long.ZERO;
    }
    if (this.isNegative()) {
      if (other.isNegative()) {
        return this.negate().multiply(other.negate());
      } else {
        return this.negate().multiply(other).negate();
      }
    } else if (other.isNegative()) {
      return this.multiply(other.negate()).negate();
    }
    // If both longs are small, use float multiplication
    if (this.lessThan(goog.math.Long.TWO_PWR_24_) &&
        other.lessThan(goog.math.Long.TWO_PWR_24_)) {
      return goog.math.Long.fromNumber(this.toNumber() * other.toNumber());
    }
    // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
    // We can skip products that would overflow.
    var a48 = this.high_ >>> 16;
    var a32 = this.high_ & 0xFFFF;
    var a16 = this.low_ >>> 16;
    var a00 = this.low_ & 0xFFFF;
    var b48 = other.high_ >>> 16;
    var b32 = other.high_ & 0xFFFF;
    var b16 = other.low_ >>> 16;
    var b00 = other.low_ & 0xFFFF;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 * b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 * b00;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c16 += a00 * b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 * b00;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a16 * b16;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a00 * b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
    c48 &= 0xFFFF;
    return goog.math.Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32);
  };
  /**
   * Returns this Long divided by the given one.
   * @param {goog.math.Long} other Long by which to divide.
   * @return {!goog.math.Long} This Long divided by the given one.
   */
  goog.math.Long.prototype.div = function(other) {
    if (other.isZero()) {
      throw Error('division by zero');
    } else if (this.isZero()) {
      return goog.math.Long.ZERO;
    }
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      if (other.equals(goog.math.Long.ONE) ||
          other.equals(goog.math.Long.NEG_ONE)) {
        return goog.math.Long.MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE
      } else if (other.equals(goog.math.Long.MIN_VALUE)) {
        return goog.math.Long.ONE;
      } else {
        // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
        var halfThis = this.shiftRight(1);
        var approx = halfThis.div(other).shiftLeft(1);
        if (approx.equals(goog.math.Long.ZERO)) {
          return other.isNegative() ? goog.math.Long.ONE : goog.math.Long.NEG_ONE;
        } else {
          var rem = this.subtract(other.multiply(approx));
          var result = approx.add(rem.div(other));
          return result;
        }
      }
    } else if (other.equals(goog.math.Long.MIN_VALUE)) {
      return goog.math.Long.ZERO;
    }
    if (this.isNegative()) {
      if (other.isNegative()) {
        return this.negate().div(other.negate());
      } else {
        return this.negate().div(other).negate();
      }
    } else if (other.isNegative()) {
      return this.div(other.negate()).negate();
    }
    // Repeat the following until the remainder is less than other:  find a
    // floating-point that approximates remainder / other *from below*, add this
    // into the result, and subtract it from the remainder.  It is critical that
    // the approximate value is less than or equal to the real value so that the
    // remainder never becomes negative.
    var res = goog.math.Long.ZERO;
    var rem = this;
    while (rem.greaterThanOrEqual(other)) {
      // Approximate the result of division. This may be a little greater or
      // smaller than the actual value.
      var approx = Math.max(1, Math.floor(rem.toNumber() / other.toNumber()));
      // We will tweak the approximate result by changing it in the 48-th digit or
      // the smallest non-fractional digit, whichever is larger.
      var log2 = Math.ceil(Math.log(approx) / Math.LN2);
      var delta = (log2 <= 48) ? 1 : Math.pow(2, log2 - 48);
      // Decrease the approximation until it is smaller than the remainder.  Note
      // that if it is too large, the product overflows and is negative.
      var approxRes = goog.math.Long.fromNumber(approx);
      var approxRem = approxRes.multiply(other);
      while (approxRem.isNegative() || approxRem.greaterThan(rem)) {
        approx -= delta;
        approxRes = goog.math.Long.fromNumber(approx);
        approxRem = approxRes.multiply(other);
      }
      // We know the answer can't be zero... and actually, zero would cause
      // infinite recursion since we would make no progress.
      if (approxRes.isZero()) {
        approxRes = goog.math.Long.ONE;
      }
      res = res.add(approxRes);
      rem = rem.subtract(approxRem);
    }
    return res;
  };
  /**
   * Returns this Long modulo the given one.
   * @param {goog.math.Long} other Long by which to mod.
   * @return {!goog.math.Long} This Long modulo the given one.
   */
  goog.math.Long.prototype.modulo = function(other) {
    return this.subtract(this.div(other).multiply(other));
  };
  /** @return {!goog.math.Long} The bitwise-NOT of this value. */
  goog.math.Long.prototype.not = function() {
    return goog.math.Long.fromBits(~this.low_, ~this.high_);
  };
  /**
   * Returns the bitwise-AND of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to AND.
   * @return {!goog.math.Long} The bitwise-AND of this and the other.
   */
  goog.math.Long.prototype.and = function(other) {
    return goog.math.Long.fromBits(this.low_ & other.low_,
                                   this.high_ & other.high_);
  };
  /**
   * Returns the bitwise-OR of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to OR.
   * @return {!goog.math.Long} The bitwise-OR of this and the other.
   */
  goog.math.Long.prototype.or = function(other) {
    return goog.math.Long.fromBits(this.low_ | other.low_,
                                   this.high_ | other.high_);
  };
  /**
   * Returns the bitwise-XOR of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to XOR.
   * @return {!goog.math.Long} The bitwise-XOR of this and the other.
   */
  goog.math.Long.prototype.xor = function(other) {
    return goog.math.Long.fromBits(this.low_ ^ other.low_,
                                   this.high_ ^ other.high_);
  };
  /**
   * Returns this Long with bits shifted to the left by the given amount.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the left by the given amount.
   */
  goog.math.Long.prototype.shiftLeft = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var low = this.low_;
      if (numBits < 32) {
        var high = this.high_;
        return goog.math.Long.fromBits(
            low << numBits,
            (high << numBits) | (low >>> (32 - numBits)));
      } else {
        return goog.math.Long.fromBits(0, low << (numBits - 32));
      }
    }
  };
  /**
   * Returns this Long with bits shifted to the right by the given amount.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the right by the given amount.
   */
  goog.math.Long.prototype.shiftRight = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var high = this.high_;
      if (numBits < 32) {
        var low = this.low_;
        return goog.math.Long.fromBits(
            (low >>> numBits) | (high << (32 - numBits)),
            high >> numBits);
      } else {
        return goog.math.Long.fromBits(
            high >> (numBits - 32),
            high >= 0 ? 0 : -1);
      }
    }
  };
  /**
   * Returns this Long with bits shifted to the right by the given amount, with
   * the new top bits matching the current sign bit.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the right by the given amount, with
   *     zeros placed into the new leading bits.
   */
  goog.math.Long.prototype.shiftRightUnsigned = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var high = this.high_;
      if (numBits < 32) {
        var low = this.low_;
        return goog.math.Long.fromBits(
            (low >>> numBits) | (high << (32 - numBits)),
            high >>> numBits);
      } else if (numBits == 32) {
        return goog.math.Long.fromBits(high, 0);
      } else {
        return goog.math.Long.fromBits(high >>> (numBits - 32), 0);
      }
    }
  };
  //======= begin jsbn =======
  var navigator = { appName: 'Modern Browser' }; // polyfill a little
  // Copyright (c) 2005  Tom Wu
  // All Rights Reserved.
  // http://www-cs-students.stanford.edu/~tjw/jsbn/
  /*
   * Copyright (c) 2003-2005  Tom Wu
   * All Rights Reserved.
   *
   * Permission is hereby granted, free of charge, to any person obtaining
   * a copy of this software and associated documentation files (the
   * "Software"), to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge, publish,
   * distribute, sublicense, and/or sell copies of the Software, and to
   * permit persons to whom the Software is furnished to do so, subject to
   * the following conditions:
   *
   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS-IS" AND WITHOUT WARRANTY OF ANY KIND, 
   * EXPRESS, IMPLIED OR OTHERWISE, INCLUDING WITHOUT LIMITATION, ANY 
   * WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.  
   *
   * IN NO EVENT SHALL TOM WU BE LIABLE FOR ANY SPECIAL, INCIDENTAL,
   * INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND, OR ANY DAMAGES WHATSOEVER
   * RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER OR NOT ADVISED OF
   * THE POSSIBILITY OF DAMAGE, AND ON ANY THEORY OF LIABILITY, ARISING OUT
   * OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * In addition, the following condition applies:
   *
   * All redistributions must retain an intact copy of this copyright notice
   * and disclaimer.
   */
  // Basic JavaScript BN library - subset useful for RSA encryption.
  // Bits per digit
  var dbits;
  // JavaScript engine analysis
  var canary = 0xdeadbeefcafe;
  var j_lm = ((canary&0xffffff)==0xefcafe);
  // (public) Constructor
  function BigInteger(a,b,c) {
    if(a != null)
      if("number" == typeof a) this.fromNumber(a,b,c);
      else if(b == null && "string" != typeof a) this.fromString(a,256);
      else this.fromString(a,b);
  }
  // return new, unset BigInteger
  function nbi() { return new BigInteger(null); }
  // am: Compute w_j += (x*this_i), propagate carries,
  // c is initial carry, returns final carry.
  // c < 3*dvalue, x < 2*dvalue, this_i < dvalue
  // We need to select the fastest one that works in this environment.
  // am1: use a single mult and divide to get the high bits,
  // max digit bits should be 26 because
  // max internal value = 2*dvalue^2-2*dvalue (< 2^53)
  function am1(i,x,w,j,c,n) {
    while(--n >= 0) {
      var v = x*this[i++]+w[j]+c;
      c = Math.floor(v/0x4000000);
      w[j++] = v&0x3ffffff;
    }
    return c;
  }
  // am2 avoids a big mult-and-extract completely.
  // Max digit bits should be <= 30 because we do bitwise ops
  // on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
  function am2(i,x,w,j,c,n) {
    var xl = x&0x7fff, xh = x>>15;
    while(--n >= 0) {
      var l = this[i]&0x7fff;
      var h = this[i++]>>15;
      var m = xh*l+h*xl;
      l = xl*l+((m&0x7fff)<<15)+w[j]+(c&0x3fffffff);
      c = (l>>>30)+(m>>>15)+xh*h+(c>>>30);
      w[j++] = l&0x3fffffff;
    }
    return c;
  }
  // Alternately, set max digit bits to 28 since some
  // browsers slow down when dealing with 32-bit numbers.
  function am3(i,x,w,j,c,n) {
    var xl = x&0x3fff, xh = x>>14;
    while(--n >= 0) {
      var l = this[i]&0x3fff;
      var h = this[i++]>>14;
      var m = xh*l+h*xl;
      l = xl*l+((m&0x3fff)<<14)+w[j]+c;
      c = (l>>28)+(m>>14)+xh*h;
      w[j++] = l&0xfffffff;
    }
    return c;
  }
  if(j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
    BigInteger.prototype.am = am2;
    dbits = 30;
  }
  else if(j_lm && (navigator.appName != "Netscape")) {
    BigInteger.prototype.am = am1;
    dbits = 26;
  }
  else { // Mozilla/Netscape seems to prefer am3
    BigInteger.prototype.am = am3;
    dbits = 28;
  }
  BigInteger.prototype.DB = dbits;
  BigInteger.prototype.DM = ((1<<dbits)-1);
  BigInteger.prototype.DV = (1<<dbits);
  var BI_FP = 52;
  BigInteger.prototype.FV = Math.pow(2,BI_FP);
  BigInteger.prototype.F1 = BI_FP-dbits;
  BigInteger.prototype.F2 = 2*dbits-BI_FP;
  // Digit conversions
  var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
  var BI_RC = new Array();
  var rr,vv;
  rr = "0".charCodeAt(0);
  for(vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
  rr = "a".charCodeAt(0);
  for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
  rr = "A".charCodeAt(0);
  for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
  function int2char(n) { return BI_RM.charAt(n); }
  function intAt(s,i) {
    var c = BI_RC[s.charCodeAt(i)];
    return (c==null)?-1:c;
  }
  // (protected) copy this to r
  function bnpCopyTo(r) {
    for(var i = this.t-1; i >= 0; --i) r[i] = this[i];
    r.t = this.t;
    r.s = this.s;
  }
  // (protected) set from integer value x, -DV <= x < DV
  function bnpFromInt(x) {
    this.t = 1;
    this.s = (x<0)?-1:0;
    if(x > 0) this[0] = x;
    else if(x < -1) this[0] = x+DV;
    else this.t = 0;
  }
  // return bigint initialized to value
  function nbv(i) { var r = nbi(); r.fromInt(i); return r; }
  // (protected) set from string and radix
  function bnpFromString(s,b) {
    var k;
    if(b == 16) k = 4;
    else if(b == 8) k = 3;
    else if(b == 256) k = 8; // byte array
    else if(b == 2) k = 1;
    else if(b == 32) k = 5;
    else if(b == 4) k = 2;
    else { this.fromRadix(s,b); return; }
    this.t = 0;
    this.s = 0;
    var i = s.length, mi = false, sh = 0;
    while(--i >= 0) {
      var x = (k==8)?s[i]&0xff:intAt(s,i);
      if(x < 0) {
        if(s.charAt(i) == "-") mi = true;
        continue;
      }
      mi = false;
      if(sh == 0)
        this[this.t++] = x;
      else if(sh+k > this.DB) {
        this[this.t-1] |= (x&((1<<(this.DB-sh))-1))<<sh;
        this[this.t++] = (x>>(this.DB-sh));
      }
      else
        this[this.t-1] |= x<<sh;
      sh += k;
      if(sh >= this.DB) sh -= this.DB;
    }
    if(k == 8 && (s[0]&0x80) != 0) {
      this.s = -1;
      if(sh > 0) this[this.t-1] |= ((1<<(this.DB-sh))-1)<<sh;
    }
    this.clamp();
    if(mi) BigInteger.ZERO.subTo(this,this);
  }
  // (protected) clamp off excess high words
  function bnpClamp() {
    var c = this.s&this.DM;
    while(this.t > 0 && this[this.t-1] == c) --this.t;
  }
  // (public) return string representation in given radix
  function bnToString(b) {
    if(this.s < 0) return "-"+this.negate().toString(b);
    var k;
    if(b == 16) k = 4;
    else if(b == 8) k = 3;
    else if(b == 2) k = 1;
    else if(b == 32) k = 5;
    else if(b == 4) k = 2;
    else return this.toRadix(b);
    var km = (1<<k)-1, d, m = false, r = "", i = this.t;
    var p = this.DB-(i*this.DB)%k;
    if(i-- > 0) {
      if(p < this.DB && (d = this[i]>>p) > 0) { m = true; r = int2char(d); }
      while(i >= 0) {
        if(p < k) {
          d = (this[i]&((1<<p)-1))<<(k-p);
          d |= this[--i]>>(p+=this.DB-k);
        }
        else {
          d = (this[i]>>(p-=k))&km;
          if(p <= 0) { p += this.DB; --i; }
        }
        if(d > 0) m = true;
        if(m) r += int2char(d);
      }
    }
    return m?r:"0";
  }
  // (public) -this
  function bnNegate() { var r = nbi(); BigInteger.ZERO.subTo(this,r); return r; }
  // (public) |this|
  function bnAbs() { return (this.s<0)?this.negate():this; }
  // (public) return + if this > a, - if this < a, 0 if equal
  function bnCompareTo(a) {
    var r = this.s-a.s;
    if(r != 0) return r;
    var i = this.t;
    r = i-a.t;
    if(r != 0) return (this.s<0)?-r:r;
    while(--i >= 0) if((r=this[i]-a[i]) != 0) return r;
    return 0;
  }
  // returns bit length of the integer x
  function nbits(x) {
    var r = 1, t;
    if((t=x>>>16) != 0) { x = t; r += 16; }
    if((t=x>>8) != 0) { x = t; r += 8; }
    if((t=x>>4) != 0) { x = t; r += 4; }
    if((t=x>>2) != 0) { x = t; r += 2; }
    if((t=x>>1) != 0) { x = t; r += 1; }
    return r;
  }
  // (public) return the number of bits in "this"
  function bnBitLength() {
    if(this.t <= 0) return 0;
    return this.DB*(this.t-1)+nbits(this[this.t-1]^(this.s&this.DM));
  }
  // (protected) r = this << n*DB
  function bnpDLShiftTo(n,r) {
    var i;
    for(i = this.t-1; i >= 0; --i) r[i+n] = this[i];
    for(i = n-1; i >= 0; --i) r[i] = 0;
    r.t = this.t+n;
    r.s = this.s;
  }
  // (protected) r = this >> n*DB
  function bnpDRShiftTo(n,r) {
    for(var i = n; i < this.t; ++i) r[i-n] = this[i];
    r.t = Math.max(this.t-n,0);
    r.s = this.s;
  }
  // (protected) r = this << n
  function bnpLShiftTo(n,r) {
    var bs = n%this.DB;
    var cbs = this.DB-bs;
    var bm = (1<<cbs)-1;
    var ds = Math.floor(n/this.DB), c = (this.s<<bs)&this.DM, i;
    for(i = this.t-1; i >= 0; --i) {
      r[i+ds+1] = (this[i]>>cbs)|c;
      c = (this[i]&bm)<<bs;
    }
    for(i = ds-1; i >= 0; --i) r[i] = 0;
    r[ds] = c;
    r.t = this.t+ds+1;
    r.s = this.s;
    r.clamp();
  }
  // (protected) r = this >> n
  function bnpRShiftTo(n,r) {
    r.s = this.s;
    var ds = Math.floor(n/this.DB);
    if(ds >= this.t) { r.t = 0; return; }
    var bs = n%this.DB;
    var cbs = this.DB-bs;
    var bm = (1<<bs)-1;
    r[0] = this[ds]>>bs;
    for(var i = ds+1; i < this.t; ++i) {
      r[i-ds-1] |= (this[i]&bm)<<cbs;
      r[i-ds] = this[i]>>bs;
    }
    if(bs > 0) r[this.t-ds-1] |= (this.s&bm)<<cbs;
    r.t = this.t-ds;
    r.clamp();
  }
  // (protected) r = this - a
  function bnpSubTo(a,r) {
    var i = 0, c = 0, m = Math.min(a.t,this.t);
    while(i < m) {
      c += this[i]-a[i];
      r[i++] = c&this.DM;
      c >>= this.DB;
    }
    if(a.t < this.t) {
      c -= a.s;
      while(i < this.t) {
        c += this[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += this.s;
    }
    else {
      c += this.s;
      while(i < a.t) {
        c -= a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c -= a.s;
    }
    r.s = (c<0)?-1:0;
    if(c < -1) r[i++] = this.DV+c;
    else if(c > 0) r[i++] = c;
    r.t = i;
    r.clamp();
  }
  // (protected) r = this * a, r != this,a (HAC 14.12)
  // "this" should be the larger one if appropriate.
  function bnpMultiplyTo(a,r) {
    var x = this.abs(), y = a.abs();
    var i = x.t;
    r.t = i+y.t;
    while(--i >= 0) r[i] = 0;
    for(i = 0; i < y.t; ++i) r[i+x.t] = x.am(0,y[i],r,i,0,x.t);
    r.s = 0;
    r.clamp();
    if(this.s != a.s) BigInteger.ZERO.subTo(r,r);
  }
  // (protected) r = this^2, r != this (HAC 14.16)
  function bnpSquareTo(r) {
    var x = this.abs();
    var i = r.t = 2*x.t;
    while(--i >= 0) r[i] = 0;
    for(i = 0; i < x.t-1; ++i) {
      var c = x.am(i,x[i],r,2*i,0,1);
      if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1)) >= x.DV) {
        r[i+x.t] -= x.DV;
        r[i+x.t+1] = 1;
      }
    }
    if(r.t > 0) r[r.t-1] += x.am(i,x[i],r,2*i,0,1);
    r.s = 0;
    r.clamp();
  }
  // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
  // r != q, this != m.  q or r may be null.
  function bnpDivRemTo(m,q,r) {
    var pm = m.abs();
    if(pm.t <= 0) return;
    var pt = this.abs();
    if(pt.t < pm.t) {
      if(q != null) q.fromInt(0);
      if(r != null) this.copyTo(r);
      return;
    }
    if(r == null) r = nbi();
    var y = nbi(), ts = this.s, ms = m.s;
    var nsh = this.DB-nbits(pm[pm.t-1]);	// normalize modulus
    if(nsh > 0) { pm.lShiftTo(nsh,y); pt.lShiftTo(nsh,r); }
    else { pm.copyTo(y); pt.copyTo(r); }
    var ys = y.t;
    var y0 = y[ys-1];
    if(y0 == 0) return;
    var yt = y0*(1<<this.F1)+((ys>1)?y[ys-2]>>this.F2:0);
    var d1 = this.FV/yt, d2 = (1<<this.F1)/yt, e = 1<<this.F2;
    var i = r.t, j = i-ys, t = (q==null)?nbi():q;
    y.dlShiftTo(j,t);
    if(r.compareTo(t) >= 0) {
      r[r.t++] = 1;
      r.subTo(t,r);
    }
    BigInteger.ONE.dlShiftTo(ys,t);
    t.subTo(y,y);	// "negative" y so we can replace sub with am later
    while(y.t < ys) y[y.t++] = 0;
    while(--j >= 0) {
      // Estimate quotient digit
      var qd = (r[--i]==y0)?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);
      if((r[i]+=y.am(0,qd,r,j,0,ys)) < qd) {	// Try it out
        y.dlShiftTo(j,t);
        r.subTo(t,r);
        while(r[i] < --qd) r.subTo(t,r);
      }
    }
    if(q != null) {
      r.drShiftTo(ys,q);
      if(ts != ms) BigInteger.ZERO.subTo(q,q);
    }
    r.t = ys;
    r.clamp();
    if(nsh > 0) r.rShiftTo(nsh,r);	// Denormalize remainder
    if(ts < 0) BigInteger.ZERO.subTo(r,r);
  }
  // (public) this mod a
  function bnMod(a) {
    var r = nbi();
    this.abs().divRemTo(a,null,r);
    if(this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r,r);
    return r;
  }
  // Modular reduction using "classic" algorithm
  function Classic(m) { this.m = m; }
  function cConvert(x) {
    if(x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
    else return x;
  }
  function cRevert(x) { return x; }
  function cReduce(x) { x.divRemTo(this.m,null,x); }
  function cMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
  function cSqrTo(x,r) { x.squareTo(r); this.reduce(r); }
  Classic.prototype.convert = cConvert;
  Classic.prototype.revert = cRevert;
  Classic.prototype.reduce = cReduce;
  Classic.prototype.mulTo = cMulTo;
  Classic.prototype.sqrTo = cSqrTo;
  // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
  // justification:
  //         xy == 1 (mod m)
  //         xy =  1+km
  //   xy(2-xy) = (1+km)(1-km)
  // x[y(2-xy)] = 1-k^2m^2
  // x[y(2-xy)] == 1 (mod m^2)
  // if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
  // should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
  // JS multiply "overflows" differently from C/C++, so care is needed here.
  function bnpInvDigit() {
    if(this.t < 1) return 0;
    var x = this[0];
    if((x&1) == 0) return 0;
    var y = x&3;		// y == 1/x mod 2^2
    y = (y*(2-(x&0xf)*y))&0xf;	// y == 1/x mod 2^4
    y = (y*(2-(x&0xff)*y))&0xff;	// y == 1/x mod 2^8
    y = (y*(2-(((x&0xffff)*y)&0xffff)))&0xffff;	// y == 1/x mod 2^16
    // last step - calculate inverse mod DV directly;
    // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
    y = (y*(2-x*y%this.DV))%this.DV;		// y == 1/x mod 2^dbits
    // we really want the negative inverse, and -DV < y < DV
    return (y>0)?this.DV-y:-y;
  }
  // Montgomery reduction
  function Montgomery(m) {
    this.m = m;
    this.mp = m.invDigit();
    this.mpl = this.mp&0x7fff;
    this.mph = this.mp>>15;
    this.um = (1<<(m.DB-15))-1;
    this.mt2 = 2*m.t;
  }
  // xR mod m
  function montConvert(x) {
    var r = nbi();
    x.abs().dlShiftTo(this.m.t,r);
    r.divRemTo(this.m,null,r);
    if(x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r,r);
    return r;
  }
  // x/R mod m
  function montRevert(x) {
    var r = nbi();
    x.copyTo(r);
    this.reduce(r);
    return r;
  }
  // x = x/R mod m (HAC 14.32)
  function montReduce(x) {
    while(x.t <= this.mt2)	// pad x so am has enough room later
      x[x.t++] = 0;
    for(var i = 0; i < this.m.t; ++i) {
      // faster way of calculating u0 = x[i]*mp mod DV
      var j = x[i]&0x7fff;
      var u0 = (j*this.mpl+(((j*this.mph+(x[i]>>15)*this.mpl)&this.um)<<15))&x.DM;
      // use am to combine the multiply-shift-add into one call
      j = i+this.m.t;
      x[j] += this.m.am(0,u0,x,i,0,this.m.t);
      // propagate carry
      while(x[j] >= x.DV) { x[j] -= x.DV; x[++j]++; }
    }
    x.clamp();
    x.drShiftTo(this.m.t,x);
    if(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
  }
  // r = "x^2/R mod m"; x != r
  function montSqrTo(x,r) { x.squareTo(r); this.reduce(r); }
  // r = "xy/R mod m"; x,y != r
  function montMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
  Montgomery.prototype.convert = montConvert;
  Montgomery.prototype.revert = montRevert;
  Montgomery.prototype.reduce = montReduce;
  Montgomery.prototype.mulTo = montMulTo;
  Montgomery.prototype.sqrTo = montSqrTo;
  // (protected) true iff this is even
  function bnpIsEven() { return ((this.t>0)?(this[0]&1):this.s) == 0; }
  // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
  function bnpExp(e,z) {
    if(e > 0xffffffff || e < 1) return BigInteger.ONE;
    var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e)-1;
    g.copyTo(r);
    while(--i >= 0) {
      z.sqrTo(r,r2);
      if((e&(1<<i)) > 0) z.mulTo(r2,g,r);
      else { var t = r; r = r2; r2 = t; }
    }
    return z.revert(r);
  }
  // (public) this^e % m, 0 <= e < 2^32
  function bnModPowInt(e,m) {
    var z;
    if(e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
    return this.exp(e,z);
  }
  // protected
  BigInteger.prototype.copyTo = bnpCopyTo;
  BigInteger.prototype.fromInt = bnpFromInt;
  BigInteger.prototype.fromString = bnpFromString;
  BigInteger.prototype.clamp = bnpClamp;
  BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
  BigInteger.prototype.drShiftTo = bnpDRShiftTo;
  BigInteger.prototype.lShiftTo = bnpLShiftTo;
  BigInteger.prototype.rShiftTo = bnpRShiftTo;
  BigInteger.prototype.subTo = bnpSubTo;
  BigInteger.prototype.multiplyTo = bnpMultiplyTo;
  BigInteger.prototype.squareTo = bnpSquareTo;
  BigInteger.prototype.divRemTo = bnpDivRemTo;
  BigInteger.prototype.invDigit = bnpInvDigit;
  BigInteger.prototype.isEven = bnpIsEven;
  BigInteger.prototype.exp = bnpExp;
  // public
  BigInteger.prototype.toString = bnToString;
  BigInteger.prototype.negate = bnNegate;
  BigInteger.prototype.abs = bnAbs;
  BigInteger.prototype.compareTo = bnCompareTo;
  BigInteger.prototype.bitLength = bnBitLength;
  BigInteger.prototype.mod = bnMod;
  BigInteger.prototype.modPowInt = bnModPowInt;
  // "constants"
  BigInteger.ZERO = nbv(0);
  BigInteger.ONE = nbv(1);
  // jsbn2 stuff
  // (protected) convert from radix string
  function bnpFromRadix(s,b) {
    this.fromInt(0);
    if(b == null) b = 10;
    var cs = this.chunkSize(b);
    var d = Math.pow(b,cs), mi = false, j = 0, w = 0;
    for(var i = 0; i < s.length; ++i) {
      var x = intAt(s,i);
      if(x < 0) {
        if(s.charAt(i) == "-" && this.signum() == 0) mi = true;
        continue;
      }
      w = b*w+x;
      if(++j >= cs) {
        this.dMultiply(d);
        this.dAddOffset(w,0);
        j = 0;
        w = 0;
      }
    }
    if(j > 0) {
      this.dMultiply(Math.pow(b,j));
      this.dAddOffset(w,0);
    }
    if(mi) BigInteger.ZERO.subTo(this,this);
  }
  // (protected) return x s.t. r^x < DV
  function bnpChunkSize(r) { return Math.floor(Math.LN2*this.DB/Math.log(r)); }
  // (public) 0 if this == 0, 1 if this > 0
  function bnSigNum() {
    if(this.s < 0) return -1;
    else if(this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
    else return 1;
  }
  // (protected) this *= n, this >= 0, 1 < n < DV
  function bnpDMultiply(n) {
    this[this.t] = this.am(0,n-1,this,0,0,this.t);
    ++this.t;
    this.clamp();
  }
  // (protected) this += n << w words, this >= 0
  function bnpDAddOffset(n,w) {
    if(n == 0) return;
    while(this.t <= w) this[this.t++] = 0;
    this[w] += n;
    while(this[w] >= this.DV) {
      this[w] -= this.DV;
      if(++w >= this.t) this[this.t++] = 0;
      ++this[w];
    }
  }
  // (protected) convert to radix string
  function bnpToRadix(b) {
    if(b == null) b = 10;
    if(this.signum() == 0 || b < 2 || b > 36) return "0";
    var cs = this.chunkSize(b);
    var a = Math.pow(b,cs);
    var d = nbv(a), y = nbi(), z = nbi(), r = "";
    this.divRemTo(d,y,z);
    while(y.signum() > 0) {
      r = (a+z.intValue()).toString(b).substr(1) + r;
      y.divRemTo(d,y,z);
    }
    return z.intValue().toString(b) + r;
  }
  // (public) return value as integer
  function bnIntValue() {
    if(this.s < 0) {
      if(this.t == 1) return this[0]-this.DV;
      else if(this.t == 0) return -1;
    }
    else if(this.t == 1) return this[0];
    else if(this.t == 0) return 0;
    // assumes 16 < DB < 32
    return ((this[1]&((1<<(32-this.DB))-1))<<this.DB)|this[0];
  }
  // (protected) r = this + a
  function bnpAddTo(a,r) {
    var i = 0, c = 0, m = Math.min(a.t,this.t);
    while(i < m) {
      c += this[i]+a[i];
      r[i++] = c&this.DM;
      c >>= this.DB;
    }
    if(a.t < this.t) {
      c += a.s;
      while(i < this.t) {
        c += this[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += this.s;
    }
    else {
      c += this.s;
      while(i < a.t) {
        c += a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += a.s;
    }
    r.s = (c<0)?-1:0;
    if(c > 0) r[i++] = c;
    else if(c < -1) r[i++] = this.DV+c;
    r.t = i;
    r.clamp();
  }
  BigInteger.prototype.fromRadix = bnpFromRadix;
  BigInteger.prototype.chunkSize = bnpChunkSize;
  BigInteger.prototype.signum = bnSigNum;
  BigInteger.prototype.dMultiply = bnpDMultiply;
  BigInteger.prototype.dAddOffset = bnpDAddOffset;
  BigInteger.prototype.toRadix = bnpToRadix;
  BigInteger.prototype.intValue = bnIntValue;
  BigInteger.prototype.addTo = bnpAddTo;
  //======= end jsbn =======
  // Emscripten wrapper
  var Wrapper = {
    abs: function(l, h) {
      var x = new goog.math.Long(l, h);
      var ret;
      if (x.isNegative()) {
        ret = x.negate();
      } else {
        ret = x;
      }
      HEAP32[tempDoublePtr>>2] = ret.low_;
      HEAP32[tempDoublePtr+4>>2] = ret.high_;
    },
    ensureTemps: function() {
      if (Wrapper.ensuredTemps) return;
      Wrapper.ensuredTemps = true;
      Wrapper.two32 = new BigInteger();
      Wrapper.two32.fromString('4294967296', 10);
      Wrapper.two64 = new BigInteger();
      Wrapper.two64.fromString('18446744073709551616', 10);
      Wrapper.temp1 = new BigInteger();
      Wrapper.temp2 = new BigInteger();
    },
    lh2bignum: function(l, h) {
      var a = new BigInteger();
      a.fromString(h.toString(), 10);
      var b = new BigInteger();
      a.multiplyTo(Wrapper.two32, b);
      var c = new BigInteger();
      c.fromString(l.toString(), 10);
      var d = new BigInteger();
      c.addTo(b, d);
      return d;
    },
    stringify: function(l, h, unsigned) {
      var ret = new goog.math.Long(l, h).toString();
      if (unsigned && ret[0] == '-') {
        // unsign slowly using jsbn bignums
        Wrapper.ensureTemps();
        var bignum = new BigInteger();
        bignum.fromString(ret, 10);
        ret = new BigInteger();
        Wrapper.two64.addTo(bignum, ret);
        ret = ret.toString(10);
      }
      return ret;
    },
    fromString: function(str, base, min, max, unsigned) {
      Wrapper.ensureTemps();
      var bignum = new BigInteger();
      bignum.fromString(str, base);
      var bigmin = new BigInteger();
      bigmin.fromString(min, 10);
      var bigmax = new BigInteger();
      bigmax.fromString(max, 10);
      if (unsigned && bignum.compareTo(BigInteger.ZERO) < 0) {
        var temp = new BigInteger();
        bignum.addTo(Wrapper.two64, temp);
        bignum = temp;
      }
      var error = false;
      if (bignum.compareTo(bigmin) < 0) {
        bignum = bigmin;
        error = true;
      } else if (bignum.compareTo(bigmax) > 0) {
        bignum = bigmax;
        error = true;
      }
      var ret = goog.math.Long.fromString(bignum.toString()); // min-max checks should have clamped this to a range goog.math.Long can handle well
      HEAP32[tempDoublePtr>>2] = ret.low_;
      HEAP32[tempDoublePtr+4>>2] = ret.high_;
      if (error) throw 'range error';
    }
  };
  return Wrapper;
})();
//======= end closure i64 code =======
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore14IDBObjectStore3getEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_11IDBKeyRangeEEERi","_strlen","__ZNK7WebCore14IDBObjectStore10indexNamesEv","__ZN3JSC6StrongINS_7UnknownEEC2ERKS2_","__ZN7WebCore14IDBObjectStore19transactionFinishedEv","__ZN7WebCore14IDBObjectStore3addEPN3JSC9ExecStateERN10Deprecated11ScriptValueERKS5_Ri","__ZN7WebCore12_GLOBAL__N_114IndexPopulatoreqERKNS_13EventListenerE","__ZN7WebCore6IDBKey21createMultiEntryArrayERKN3WTF6VectorINS1_6RefPtrIS0_EELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore14IDBObjectStore3putENS_18IDBDatabaseBackend7PutModeEN3WTF10PassRefPtrINS_6IDBAnyEEEPN3JSC9ExecStateERN10Deprecated11ScriptValueERKSB_Ri","__ZN7WebCore14IDBObjectStore10openCursorEPNS_22ScriptExecutionContextERKN10Deprecated11ScriptValueERKN3WTF6StringERi","__ZN7WebCore11IDBKeyRangeD2Ev","__ZN7WebCore16IDBIndexMetadataD1Ev","__ZNK7WebCore14IDBObjectStore9backendDBEv","__ZNK7WebCore14IDBObjectStore11findIndexIdERKN3WTF6StringE","__ZN7WebCore12_GLOBAL__N_114IndexPopulatorD0Ev","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore8IDBIndexEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E8reinsertEOS7_","__ZN7WebCore14IDBObjectStore5indexERKN3WTF6StringERi","__ZN7WebCore14IDBObjectStore5countEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_11IDBKeyRangeEEERi","__ZN3WTF6VectorINS0_INS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEEELj0ES5_E14appendSlowCaseIRS6_EEvOT_","_memset","__ZN7WebCore14IDBObjectStore5clearEPNS_22ScriptExecutionContextERi","__ZN7WebCore14IDBObjectStore3getEPNS_22ScriptExecutionContextERKN10Deprecated11ScriptValueERi","_memcpy","__ZN7WebCore13DOMStringList6appendERKN3WTF6StringE","__ZN7WebCore14IDBObjectStore3putEPN3JSC9ExecStateERN10Deprecated11ScriptValueERKS5_Ri","__ZN7WebCore14IDBObjectStore3addEPN3JSC9ExecStateERN10Deprecated11ScriptValueERi","__ZN7WebCore14IDBObjectStoreC2ERKNS_22IDBObjectStoreMetadataEPNS_14IDBTransactionE","__ZN7WebCore12_GLOBAL__N_114IndexPopulator11handleEventEPNS_22ScriptExecutionContextEPNS_5EventE","__ZN7WebCore14IDBObjectStore14deleteFunctionEPNS_22ScriptExecutionContextERKN10Deprecated11ScriptValueERi","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore16IDBIndexMetadataaSERKS0_","__ZN7WebCore14IDBObjectStore3putEPN3JSC9ExecStateERN10Deprecated11ScriptValueERi","__ZN7WebCore14IDBObjectStore10openCursorEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_11IDBKeyRangeEEERKNS3_6StringERi","__ZN7WebCore14IDBObjectStore10openCursorEPNS_22ScriptExecutionContextERi","__ZN7WebCore13EventListener15visitJSFunctionERN3JSC11SlotVisitorE","__ZN7WebCore14IDBObjectStore5countEPNS_22ScriptExecutionContextERKN10Deprecated11ScriptValueERi","__ZN7WebCoreL25generateIndexKeysForValueEPNS_15DOMRequestStateERKNS_16IDBIndexMetadataERKN10Deprecated11ScriptValueEPN3WTF6VectorINS9_6RefPtrINS_6IDBKeyEEELj0ENS9_15CrashOnOverflowEEE","__ZN3WTF7HashMapINS_6StringENS_6RefPtrIN7WebCore8IDBIndexEEENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE4findERKS1_","__ZN3WTF6VectorINS0_INS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEEELj0ES5_EC2ILj1ES5_EERKNS0_IS6_XT_ET0_EE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore8IDBIndexEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS7_i","__ZN3WTF6VectorINS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN3WTF7HashMapINS_6StringENS_6RefPtrIN7WebCore8IDBIndexEEENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE6removeENS_24HashTableIteratorAdapterINS_9HashTableIS1_NS_12KeyValuePairIS1_S5_EENS_24KeyValuePairKeyExtractorISE_EES6_NSA_18KeyValuePairTraitsES8_EESE_EE","__ZN7WebCore14IDBObjectStore10openCursorEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_11IDBKeyRangeEEERKNS3_6StringENS_18IDBDatabaseBackend8TaskTypeERi","__ZNK7WebCore13EventListener20wasCreatedFromMarkupEv","__ZN7WebCore14IDBObjectStore10openCursorEPNS_22ScriptExecutionContextERKN10Deprecated11ScriptValueERi","__ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_","__ZN7WebCore12_GLOBAL__N_114IndexPopulatorD2Ev","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore13EventListener18virtualisAttributeEv","__ZN7WebCore14IDBObjectStore11createIndexEPNS_22ScriptExecutionContextERKN3WTF6StringERKNS_10IDBKeyPathERKNS_10DictionaryERi","__ZN7WebCore14IDBObjectStore14deleteFunctionEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_11IDBKeyRangeEEERi","__ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS8_EExEENSt3__14pairIPS4_bEERKT0_","__ZN7WebCore14IDBObjectStore11createIndexEPNS_22ScriptExecutionContextERKN3WTF6StringERKNS_10IDBKeyPathEbbRi","__ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_22IdentityHashTranslatorIS8_EERKxRKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore8IDBIndexEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCore14IDBObjectStore10openCursorEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_11IDBKeyRangeEEERi","__ZN7WebCore6IDBAny6createINS_14IDBObjectStoreEEEN3WTF10PassRefPtrIS0_EEPT_","__ZN7WebCore14IDBObjectStore3putENS_18IDBDatabaseBackend7PutModeEN3WTF10PassRefPtrINS_6IDBAnyEEEPN3JSC9ExecStateERN10Deprecated11ScriptValueENS4_INS_6IDBKeyEEERi","__ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKxRS3_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_","__ZN7WebCore14IDBObjectStore11deleteIndexERKN3WTF6StringERi","__ZN3WTF6VectorINS0_INS_6RefPtrIN7WebCore6IDBKeyEEELj0ENS_15CrashOnOverflowEEELj0ES5_E15reserveCapacityEj","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEEaSERKS3_","_i64Add","_i64Subtract","_bitshift64Shl","_bitshift64Lshr","_bitshift64Ashr","_llvm_ctlz_i32","_llvm_cttz_i32"]

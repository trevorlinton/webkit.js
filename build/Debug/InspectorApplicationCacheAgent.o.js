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
H_BASE = parentModule["_malloc"](528 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 528;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore30InspectorApplicationCacheAgentC1EPNS_19InstrumentingAgentsEPNS_18InspectorPageAgentE;
/* memory initializer */ allocate([114,101,115,111,117,114,99,101,115,0,0,0,0,0,0,0,117,114,108,0,0,0,0,0,115,105,122,101,0,0,0,0,116,121,112,101,0,0,0,0,69,120,112,108,105,99,105,116,32,0,0,0,0,0,0,0,70,111,114,101,105,103,110,32,0,0,0,0,0,0,0,0,70,97,108,108,98,97,99,107,32,0,0,0,0,0,0,0,77,97,110,105,102,101,115,116,32,0,0,0,0,0,0,0,102,114,97,109,101,73,100,0,115,116,97,116,117,115,0,0,109,97,110,105,102,101,115,116,85,82,76,0,0,0,0,0,99,114,101,97,116,105,111,110,84,105,109,101,0,0,0,0,117,112,100,97,116,101,84,105,109,101,0,0,0,0,0,0,77,97,115,116,101,114,32,0,65,112,112,108,105,99,97,116,105,111,110,67,97,99,104,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore18InspectorAgentBaseE=(H_BASE+496)|0;
  var __ZTVN9Inspector11TypeBuilder5ArrayINS0_16ApplicationCache17FrameWithManifestEEE=(H_BASE+328)|0;
  var __ZTVN9Inspector11TypeBuilder5ArrayINS0_16ApplicationCache24ApplicationCacheResourceEEE=(H_BASE+248)|0;
  var __ZTVN9Inspector18InspectorAgentBaseE=(H_BASE+208)|0;
  var __ZTVN7WebCore30InspectorApplicationCacheAgentE=(H_BASE+408)|0;
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
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore30InspectorApplicationCacheAgent22getFramesWithManifestsEPN3WTF6StringERNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS6_16ApplicationCache17FrameWithManifestEEEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i4 = i2 | 0;
 i5 = i2 + 8 | 0;
 i6 = i2 + 16 | 0;
 i7 = i2 + 24 | 0;
 i8 = i2 + 32 | 0;
 i9 = i2 + 40 | 0;
 i10 = i2 + 48 | 0;
 i11 = i2 + 56 | 0;
 i12 = i2 + 64 | 0;
 i13 = i2 + 72 | 0;
 i14 = i2 + 80 | 0;
 i15 = i2 + 88 | 0;
 i16 = i2 + 96 | 0;
 i17 = i2 + 104 | 0;
 i18 = i2 + 176 | 0;
 i19 = i2 + 184 | 0;
 i20 = __ZN3WTF10fastMallocEj(24) | 0;
 __ZN9Inspector18InspectorArrayBaseC2Ev(i20);
 HEAP32[i20 >> 2] = H_BASE + 336;
 i21 = i3 | 0;
 i3 = HEAP32[i21 >> 2] | 0;
 HEAP32[i21 >> 2] = i20;
 do {
  if ((i3 | 0) != 0) {
   i20 = i3 + 4 | 0;
   i22 = i20 | 0;
   i23 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   if ((i23 | 0) != 0) {
    HEAP32[i22 >> 2] = i23;
    break;
   }
   i23 = i20 - 4 | 0;
   if ((i23 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 31](i23);
  }
 } while (0);
 i3 = i1 + 16 | 0;
 i1 = __ZN7WebCore18InspectorPageAgent9mainFrameEv(HEAP32[i3 >> 2] | 0) | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i23 = i18 | 0;
 i20 = i17 | 0;
 i22 = i16 | 0;
 i24 = i15 | 0;
 i25 = i12 | 0;
 i26 = i13 | 0;
 i27 = i14 | 0;
 i28 = i11 | 0;
 i29 = i8 | 0;
 i30 = i9 | 0;
 i31 = i10 | 0;
 i32 = i7 | 0;
 i33 = i4 | 0;
 i34 = i5 | 0;
 i35 = i6 | 0;
 i36 = i19 | 0;
 i37 = i1;
 while (1) {
  i38 = HEAP32[i37 + 128 >> 2] | 0;
  do {
   if ((i38 | 0) != 0) {
    i39 = HEAP32[i38 + 1704 >> 2] | 0;
    __ZN7WebCore20ApplicationCacheHost20applicationCacheInfoEv(i17, i39);
    i40 = HEAP32[i20 >> 2] | 0;
    HEAP32[i23 >> 2] = i40;
    do {
     if ((i40 | 0) != 0) {
      i41 = i40 | 0;
      HEAP32[i41 >> 2] = (HEAP32[i41 >> 2] | 0) + 2;
      i41 = HEAP32[i23 >> 2] | 0;
      if ((i41 | 0) == 0) {
       break;
      }
      do {
       if ((HEAP32[i41 + 4 >> 2] | 0) != 0) {
        __ZN9Inspector15InspectorObject6createEv(i16);
        i42 = HEAP32[i22 >> 2] | 0;
        __ZN7WebCore18InspectorPageAgent7frameIdEPNS_5FrameE(i19, HEAP32[i3 >> 2] | 0, i37);
        i43 = i42 | 0;
        HEAP32[i24 >> 2] = H_BASE + 112;
        __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
        __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i13, i19);
        i44 = HEAP32[i26 >> 2] | 0;
        HEAP32[i26 >> 2] = 0;
        HEAP32[i25 >> 2] = i44;
        __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i43, i14, i12);
        i44 = HEAP32[i25 >> 2] | 0;
        do {
         if ((i44 | 0) != 0) {
          i45 = i44 + 4 | 0;
          i46 = i45 | 0;
          i47 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
          if ((i47 | 0) != 0) {
           HEAP32[i46 >> 2] = i47;
           break;
          }
          i47 = i45 - 4 | 0;
          if ((i47 | 0) == 0) {
           break;
          }
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i47 >> 2] | 0) + 4 >> 2] & 31](i47);
         }
        } while (0);
        i44 = HEAP32[i26 >> 2] | 0;
        do {
         if ((i44 | 0) != 0) {
          i47 = i44 + 4 | 0;
          i45 = i47 | 0;
          i46 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
          if ((i46 | 0) != 0) {
           HEAP32[i45 >> 2] = i46;
           break;
          }
          i46 = i47 - 4 | 0;
          if ((i46 | 0) == 0) {
           break;
          }
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i46 >> 2] | 0) + 4 >> 2] & 31](i46);
         }
        } while (0);
        i44 = HEAP32[i27 >> 2] | 0;
        do {
         if ((i44 | 0) != 0) {
          i46 = i44 | 0;
          i47 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
          if ((i47 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i44);
           break;
          } else {
           HEAP32[i46 >> 2] = i47;
           break;
          }
         }
        } while (0);
        HEAP32[i28 >> 2] = H_BASE + 128;
        __ZN3WTF6StringC1ENS_12ASCIILiteralE(i10, i11);
        __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i9, i18);
        i44 = HEAP32[i30 >> 2] | 0;
        HEAP32[i30 >> 2] = 0;
        HEAP32[i29 >> 2] = i44;
        __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i43, i10, i8);
        i44 = HEAP32[i29 >> 2] | 0;
        do {
         if ((i44 | 0) != 0) {
          i47 = i44 + 4 | 0;
          i46 = i47 | 0;
          i45 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
          if ((i45 | 0) != 0) {
           HEAP32[i46 >> 2] = i45;
           break;
          }
          i45 = i47 - 4 | 0;
          if ((i45 | 0) == 0) {
           break;
          }
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i45 >> 2] | 0) + 4 >> 2] & 31](i45);
         }
        } while (0);
        i44 = HEAP32[i30 >> 2] | 0;
        do {
         if ((i44 | 0) != 0) {
          i45 = i44 + 4 | 0;
          i47 = i45 | 0;
          i46 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
          if ((i46 | 0) != 0) {
           HEAP32[i47 >> 2] = i46;
           break;
          }
          i46 = i45 - 4 | 0;
          if ((i46 | 0) == 0) {
           break;
          }
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i46 >> 2] | 0) + 4 >> 2] & 31](i46);
         }
        } while (0);
        i44 = HEAP32[i31 >> 2] | 0;
        do {
         if ((i44 | 0) != 0) {
          i46 = i44 | 0;
          i45 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
          if ((i45 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i44);
           break;
          } else {
           HEAP32[i46 >> 2] = i45;
           break;
          }
         }
        } while (0);
        i44 = __ZNK7WebCore20ApplicationCacheHost6statusEv(i39) | 0;
        HEAP32[i32 >> 2] = H_BASE + 120;
        __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
        __ZN9Inspector19InspectorBasicValue6createEd(i5, +(i44 | 0));
        i44 = HEAP32[i34 >> 2] | 0;
        HEAP32[i34 >> 2] = 0;
        HEAP32[i33 >> 2] = i44;
        __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i43, i6, i4);
        i44 = HEAP32[i33 >> 2] | 0;
        do {
         if ((i44 | 0) != 0) {
          i45 = i44 + 4 | 0;
          i46 = i45 | 0;
          i47 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
          if ((i47 | 0) != 0) {
           HEAP32[i46 >> 2] = i47;
           break;
          }
          i47 = i45 - 4 | 0;
          if ((i47 | 0) == 0) {
           break;
          }
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i47 >> 2] | 0) + 4 >> 2] & 31](i47);
         }
        } while (0);
        i44 = HEAP32[i34 >> 2] | 0;
        do {
         if ((i44 | 0) != 0) {
          i43 = i44 + 4 | 0;
          i47 = i43 | 0;
          i45 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
          if ((i45 | 0) != 0) {
           HEAP32[i47 >> 2] = i45;
           break;
          }
          i45 = i43 - 4 | 0;
          if ((i45 | 0) == 0) {
           break;
          }
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i45 >> 2] | 0) + 4 >> 2] & 31](i45);
         }
        } while (0);
        i44 = HEAP32[i35 >> 2] | 0;
        do {
         if ((i44 | 0) != 0) {
          i45 = i44 | 0;
          i43 = (HEAP32[i45 >> 2] | 0) - 2 | 0;
          if ((i43 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i44);
           break;
          } else {
           HEAP32[i45 >> 2] = i43;
           break;
          }
         }
        } while (0);
        i44 = (i42 | 0) == 0;
        if (!i44) {
         i43 = i42 + 4 | 0;
         HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 1;
        }
        i43 = HEAP32[i36 >> 2] | 0;
        do {
         if ((i43 | 0) != 0) {
          i45 = i43 | 0;
          i47 = (HEAP32[i45 >> 2] | 0) - 2 | 0;
          if ((i47 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i43);
           break;
          } else {
           HEAP32[i45 >> 2] = i47;
           break;
          }
         }
        } while (0);
        if (i44) {
         i48 = HEAP32[i21 >> 2] | 0;
        } else {
         i43 = i42 + 4 | 0;
         i47 = i43 | 0;
         i45 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
         if ((i45 | 0) == 0) {
          i46 = i43 - 4 | 0;
          if ((i46 | 0) != 0) {
           FUNCTION_TABLE_vi[HEAP32[(HEAP32[i46 >> 2] | 0) + 4 >> 2] & 31](i46);
          }
         } else {
          HEAP32[i47 >> 2] = i45;
         }
         i45 = HEAP32[i21 >> 2] | 0;
         i47 = i42 + 4 | 0;
         HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
         i48 = i45;
        }
        i45 = i42 | 0;
        i47 = i48 + 12 | 0;
        i46 = i48 + 20 | 0;
        i43 = HEAP32[i46 >> 2] | 0;
        if ((i43 | 0) == (HEAP32[i48 + 16 >> 2] | 0)) {
         __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i47, i43 + 1 | 0);
         HEAP32[(HEAP32[i47 >> 2] | 0) + (HEAP32[i46 >> 2] << 2) >> 2] = i45;
        } else {
         HEAP32[(HEAP32[i47 >> 2] | 0) + (i43 << 2) >> 2] = i45;
        }
        HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 1;
        if (i44) {
         break;
        }
        i46 = i42 + 4 | 0;
        i45 = i46 | 0;
        i43 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
        if ((i43 | 0) != 0) {
         HEAP32[i45 >> 2] = i43;
         break;
        }
        i43 = i46 - 4 | 0;
        if ((i43 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i43 >> 2] | 0) + 4 >> 2] & 31](i43);
       }
      } while (0);
      i41 = HEAP32[i23 >> 2] | 0;
      if ((i41 | 0) == 0) {
       break;
      }
      i43 = i41 | 0;
      i46 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
      if ((i46 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i41);
       break;
      } else {
       HEAP32[i43 >> 2] = i46;
       break;
      }
     }
    } while (0);
    i39 = HEAP32[i20 >> 2] | 0;
    if ((i39 | 0) == 0) {
     break;
    }
    i40 = i39 | 0;
    i46 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
    if ((i46 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i39);
     break;
    } else {
     HEAP32[i40 >> 2] = i46;
     break;
    }
   }
  } while (0);
  i37 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i37 + 40 | 0, i1) | 0;
  if ((i37 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i2;
 return;
}
function __ZN7WebCore30InspectorApplicationCacheAgent30buildObjectForApplicationCacheERKN3WTF6VectorINS_20ApplicationCacheHost12ResourceInfoELj0ENS1_15CrashOnOverflowEEERKNS3_9CacheInfoE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, d30 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 168 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 72 | 0;
 i16 = i5 + 80 | 0;
 i17 = i5 + 88 | 0;
 i18 = i5 + 96 | 0;
 i19 = i5 + 104 | 0;
 i20 = i5 + 112 | 0;
 i21 = i5 + 120 | 0;
 i22 = i5 + 128 | 0;
 i23 = i5 + 136 | 0;
 i24 = i5 + 144 | 0;
 i25 = i5 + 152 | 0;
 i26 = i5 + 160 | 0;
 __ZN9Inspector15InspectorObject6createEv(i25);
 i27 = HEAP32[i25 >> 2] | 0;
 i25 = i27 | 0;
 HEAP32[i24 >> 2] = H_BASE + 128;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i23, i24);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i22, i4 | 0);
 i24 = i21 | 0;
 i28 = i22 | 0;
 i22 = HEAP32[i28 >> 2] | 0;
 HEAP32[i28 >> 2] = 0;
 HEAP32[i24 >> 2] = i22;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i25, i23, i21);
 i21 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i21 | 0) != 0) {
   i24 = i21 + 4 | 0;
   i22 = i24 | 0;
   i29 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   if ((i29 | 0) != 0) {
    HEAP32[i22 >> 2] = i29;
    break;
   }
   i29 = i24 - 4 | 0;
   if ((i29 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i29 >> 2] | 0) + 4 >> 2] & 31](i29);
  }
 } while (0);
 i21 = HEAP32[i28 >> 2] | 0;
 do {
  if ((i21 | 0) != 0) {
   i28 = i21 + 4 | 0;
   i29 = i28 | 0;
   i24 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
   if ((i24 | 0) != 0) {
    HEAP32[i29 >> 2] = i24;
    break;
   }
   i24 = i28 - 4 | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 31](i24);
  }
 } while (0);
 i21 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i21 | 0) != 0) {
   i23 = i21 | 0;
   i24 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i24 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    break;
   } else {
    HEAP32[i23 >> 2] = i24;
    break;
   }
  }
 } while (0);
 i21 = i4 + 64 | 0;
 d30 = +((HEAP32[i21 >> 2] | 0) >>> 0) + +(HEAP32[i21 + 4 >> 2] | 0) * +4294967296;
 HEAP32[i20 >> 2] = H_BASE + 32;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i19, i20);
 __ZN9Inspector19InspectorBasicValue6createEd(i18, d30);
 i20 = i17 | 0;
 i21 = i18 | 0;
 i18 = HEAP32[i21 >> 2] | 0;
 HEAP32[i21 >> 2] = 0;
 HEAP32[i20 >> 2] = i18;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i25, i19, i17);
 i17 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i20 = i17 + 4 | 0;
   i18 = i20 | 0;
   i24 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i24 | 0) != 0) {
    HEAP32[i18 >> 2] = i24;
    break;
   }
   i24 = i20 - 4 | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 31](i24);
  }
 } while (0);
 i17 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i21 = i17 + 4 | 0;
   i24 = i21 | 0;
   i20 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i24 >> 2] = i20;
    break;
   }
   i20 = i21 - 4 | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 31](i20);
  }
 } while (0);
 i17 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i19 = i17 | 0;
   i20 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i19 >> 2] = i20;
    break;
   }
  }
 } while (0);
 d30 = +HEAPF64[i4 + 48 >> 3];
 HEAP32[i16 >> 2] = H_BASE + 144;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i15, i16);
 __ZN9Inspector19InspectorBasicValue6createEd(i14, d30);
 i16 = i13 | 0;
 i17 = i14 | 0;
 i14 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = 0;
 HEAP32[i16 >> 2] = i14;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i25, i15, i13);
 i13 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i16 = i13 + 4 | 0;
   i14 = i16 | 0;
   i20 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i14 >> 2] = i20;
    break;
   }
   i20 = i16 - 4 | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 31](i20);
  }
 } while (0);
 i13 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i17 = i13 + 4 | 0;
   i20 = i17 | 0;
   i16 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i20 >> 2] = i16;
    break;
   }
   i16 = i17 - 4 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 31](i16);
  }
 } while (0);
 i13 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i15 = i13 | 0;
   i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i15 >> 2] = i16;
    break;
   }
  }
 } while (0);
 d30 = +HEAPF64[i4 + 56 >> 3];
 HEAP32[i12 >> 2] = H_BASE + 160;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i11, i12);
 __ZN9Inspector19InspectorBasicValue6createEd(i10, d30);
 i12 = i9 | 0;
 i4 = i10 | 0;
 i10 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i12 >> 2] = i10;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i25, i11, i9);
 i9 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i12 = i9 + 4 | 0;
   i10 = i12 | 0;
   i13 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i10 >> 2] = i13;
    break;
   }
   i13 = i12 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 31](i13);
  }
 } while (0);
 i9 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i4 = i9 + 4 | 0;
   i13 = i4 | 0;
   i12 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i13 >> 2] = i12;
    break;
   }
   i12 = i4 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 31](i12);
  }
 } while (0);
 i9 = HEAP32[i11 >> 2] | 0;
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
 __ZN7WebCore30InspectorApplicationCacheAgent38buildArrayForApplicationCacheResourcesERKN3WTF6VectorINS_20ApplicationCacheHost12ResourceInfoELj0ENS1_15CrashOnOverflowEEE(i26, i2, i3);
 HEAP32[i7 >> 2] = H_BASE + 8;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 i7 = i8 | 0;
 i3 = i26 | 0;
 i26 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i7 >> 2] = i26;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i25, i6, i8);
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i7 = i8 + 4 | 0;
   i25 = i7 | 0;
   i26 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   if ((i26 | 0) != 0) {
    HEAP32[i25 >> 2] = i26;
    break;
   }
   i26 = i7 - 4 | 0;
   if ((i26 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 31](i26);
  }
 } while (0);
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i6 = i8 | 0;
   i26 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i26 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i26;
    break;
   }
  }
 } while (0);
 i8 = i27;
 if ((i27 | 0) == 0) {
  HEAP32[i1 >> 2] = i8;
  STACKTOP = i5;
  return;
 }
 i26 = i27 + 4 | 0;
 HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
 HEAP32[i1 >> 2] = i8;
 i8 = i27 + 4 | 0;
 i27 = i8 | 0;
 i1 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i27 >> 2] = i1;
  STACKTOP = i5;
  return;
 }
 i1 = i8 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore30InspectorApplicationCacheAgent38buildObjectForApplicationCacheResourceERKNS_20ApplicationCacheHost12ResourceInfoE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i4 = i2 | 0;
 i5 = i2 + 8 | 0;
 i6 = i2 + 16 | 0;
 i7 = i2 + 24 | 0;
 i8 = i2 + 32 | 0;
 i9 = i2 + 40 | 0;
 i10 = i2 + 48 | 0;
 i11 = i2 + 56 | 0;
 i12 = i2 + 64 | 0;
 i13 = i2 + 72 | 0;
 i14 = i2 + 80 | 0;
 i15 = i2 + 88 | 0;
 i16 = i2 + 96 | 0;
 i17 = i2 + 104 | 0;
 i18 = i2 + 112 | 0;
 i19 = i2 + 120 | 0;
 i20 = i2 + 128 | 0;
 i21 = i2 + 136 | 0;
 i22 = i2 + 144 | 0;
 i23 = i17 | 0;
 HEAP32[i23 >> 2] = 0;
 do {
  if ((HEAP8[i3 + 48 | 0] & 1) != 0) {
   __ZN3WTF6StringC1EPKc(i18, H_BASE + 176 | 0);
   __ZN3WTF6String6appendERKS0_(i17, i18);
   i24 = HEAP32[i18 >> 2] | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   i25 = i24 | 0;
   i26 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
   if ((i26 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i24);
    break;
   } else {
    HEAP32[i25 >> 2] = i26;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP8[i3 + 49 | 0] & 1) != 0) {
   __ZN3WTF6StringC1EPKc(i19, H_BASE + 96 | 0);
   __ZN3WTF6String6appendERKS0_(i17, i19);
   i18 = HEAP32[i19 >> 2] | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   i26 = i18 | 0;
   i25 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
   if ((i25 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i26 >> 2] = i25;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP8[i3 + 50 | 0] & 1) != 0) {
   __ZN3WTF6StringC1EPKc(i20, H_BASE + 80 | 0);
   __ZN3WTF6String6appendERKS0_(i17, i20);
   i19 = HEAP32[i20 >> 2] | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   i25 = i19 | 0;
   i26 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
   if ((i26 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i25 >> 2] = i26;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP8[i3 + 51 | 0] & 1) != 0) {
   __ZN3WTF6StringC1EPKc(i21, H_BASE + 64 | 0);
   __ZN3WTF6String6appendERKS0_(i17, i21);
   i20 = HEAP32[i21 >> 2] | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   i26 = i20 | 0;
   i25 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
   if ((i25 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i26 >> 2] = i25;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP8[i3 + 52 | 0] & 1) != 0) {
   __ZN3WTF6StringC1EPKc(i22, H_BASE + 48 | 0);
   __ZN3WTF6String6appendERKS0_(i17, i22);
   i21 = HEAP32[i22 >> 2] | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   i25 = i21 | 0;
   i26 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
   if ((i26 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    break;
   } else {
    HEAP32[i25 >> 2] = i26;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i16);
 i22 = HEAP32[i16 >> 2] | 0;
 i16 = i22 | 0;
 HEAP32[i15 >> 2] = H_BASE + 24;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i13, i3 | 0);
 i15 = i12 | 0;
 i26 = i13 | 0;
 i13 = HEAP32[i26 >> 2] | 0;
 HEAP32[i26 >> 2] = 0;
 HEAP32[i15 >> 2] = i13;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i16, i14, i12);
 i12 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i15 = i12 + 4 | 0;
   i13 = i15 | 0;
   i25 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i25 | 0) != 0) {
    HEAP32[i13 >> 2] = i25;
    break;
   }
   i25 = i15 - 4 | 0;
   if ((i25 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 31](i25);
  }
 } while (0);
 i12 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i26 = i12 + 4 | 0;
   i25 = i26 | 0;
   i15 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i25 >> 2] = i15;
    break;
   }
   i15 = i26 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 31](i15);
  }
 } while (0);
 i12 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i14 = i12 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i3 + 56 >> 2] | 0;
 HEAP32[i11 >> 2] = H_BASE + 32;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i10, i11);
 __ZN9Inspector19InspectorBasicValue6createEd(i9, +(i12 | 0));
 i12 = i8 | 0;
 i11 = i9 | 0;
 i9 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i12 >> 2] = i9;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i16, i10, i8);
 i8 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i12 = i8 + 4 | 0;
   i9 = i12 | 0;
   i3 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i9 >> 2] = i3;
    break;
   }
   i3 = i12 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
  }
 } while (0);
 i8 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i11 = i8 + 4 | 0;
   i3 = i11 | 0;
   i12 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i3 >> 2] = i12;
    break;
   }
   i12 = i11 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 31](i12);
  }
 } while (0);
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i10 = i8 | 0;
   i12 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i10 >> 2] = i12;
    break;
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = H_BASE + 40;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i17);
 i17 = i4 | 0;
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i17 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i16, i6, i4);
 i4 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i17 = i4 + 4 | 0;
   i16 = i17 | 0;
   i5 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i16 >> 2] = i5;
    break;
   }
   i5 = i17 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 4 | 0;
   i5 = i7 | 0;
   i17 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) != 0) {
    HEAP32[i5 >> 2] = i17;
    break;
   }
   i17 = i7 - 4 | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 31](i17);
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i6 = i4 | 0;
   i17 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i6 >> 2] = i17;
    break;
   }
  }
 } while (0);
 i4 = i22;
 do {
  if ((i22 | 0) == 0) {
   HEAP32[i1 >> 2] = i4;
  } else {
   i17 = i22 + 4 | 0;
   i6 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = i6 + 1;
   i17 = i22 + 4 | 0;
   i7 = i17 | 0;
   if ((i6 | 0) == 0) {
    i5 = i17 - 4 | 0;
    if ((i5 | 0) != 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
    }
    HEAP32[i1 >> 2] = i4;
   } else {
    HEAP32[i7 >> 2] = i6;
    HEAP32[i1 >> 2] = i4;
   }
   i6 = i22 + 4 | 0;
   i5 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i5 + 1;
   if ((i5 | 0) != 0) {
    HEAP32[i7 >> 2] = i5;
    break;
   }
   i5 = i17 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i22 = HEAP32[i23 >> 2] | 0;
 if ((i22 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i23 = i22 | 0;
 i4 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i22);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i23 >> 2] = i4;
  STACKTOP = i2;
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
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
  i5 = i7 + (i10 << 3) | 0;
  i12 = i5 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i14 = HEAP32[i4 >> 2] | 0;
   i16 = HEAP32[i3 >> 2] | 0;
   i17 = HEAP32[i13 + 16 >> 2] | 0;
   if (i17 >>> 0 > 127 >>> 0) {
    i18 = i17 >>> 7;
   } else {
    i18 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i13) | 0;
   }
   i13 = (i18 >>> 23) + ~i18 | 0;
   i17 = i13 << 12 ^ i13;
   i13 = i17 >>> 7 ^ i17;
   i17 = i13 << 2 ^ i13;
   i13 = i17 >>> 20 ^ i17 | 1;
   i17 = i18;
   i19 = 0;
   i20 = 0;
   while (1) {
    i21 = i17 & i16;
    i22 = i14 + (i21 << 3) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == 0) {
     i25 = 11;
     break;
    } else if ((i24 | 0) == (-1 | 0)) {
     i26 = i22;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i12 >> 2] | 0) | 0) {
      i27 = i22;
      break;
     } else {
      i26 = i20;
     }
    }
    i23 = (i19 | 0) == 0 ? i13 : i19;
    i17 = i23 + i21 | 0;
    i19 = i23;
    i20 = i26;
   }
   if ((i25 | 0) == 11) {
    i25 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 + 4 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 + 4 | 0;
     i14 = i13 | 0;
     i16 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i16 | 0) != 0) {
      HEAP32[i14 >> 2] = i16;
      break;
     }
     i16 = i13 - 4 | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 31](i16);
    }
   } while (0);
   i17 = i27 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i16 = i20 | 0;
     i13 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i16 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i20 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i17 >> 2] = i20;
   i20 = i7 + (i10 << 3) + 4 | 0;
   i13 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   HEAP32[i19 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i27 : i11;
  }
  i13 = i10 + 1 | 0;
  if ((i13 | 0) == (i6 | 0)) {
   break;
  } else {
   i10 = i13;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i6 | 0) > 0) {
  i28 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = i7 + (i28 << 3) | 0;
  do {
   if ((HEAP32[i1 >> 2] | 0) != -1) {
    i11 = HEAP32[i7 + (i28 << 3) + 4 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i10 = i11 + 4 | 0;
      i27 = i10 | 0;
      i2 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
      if ((i2 | 0) != 0) {
       HEAP32[i27 >> 2] = i2;
       break;
      }
      i2 = i10 - 4 | 0;
      if ((i2 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
     }
    } while (0);
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i2 = i11 | 0;
    i10 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i2 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i6 | 0)) {
   i28 = i1;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i10 = i9 >>> 7;
 } else {
  i10 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i10 >>> 23) + ~i10 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i11 = i10;
 i10 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i7 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 9;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i10 | 0) == 0 ? i3 : i10;
  i9 = i16;
  i11 = i14 + i12 | 0;
  i10 = i14;
 }
 if ((i17 | 0) == 9) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i13;
  HEAP32[i10 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  i13 = i9;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i18 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i13 = i4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i13 = i18 + 4 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i4;
 do {
  if ((i8 | 0) != 0) {
   i4 = i8 + 4 | 0;
   i13 = i4 | 0;
   i9 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i13 >> 2] = i9;
    break;
   }
   i9 = i4 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
  }
 } while (0);
 i8 = i2 + 12 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
 HEAP32[i8 >> 2] = i9;
 i8 = i2 + 4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i9 << 1 | 0) < (i4 | 0)) {
  i19 = i18;
  i20 = i4;
 } else {
  i4 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, i18) | 0;
  i19 = i4;
  i20 = HEAP32[i8 >> 2] | 0;
 }
 i8 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i8;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore30InspectorApplicationCacheAgent27getApplicationCacheForFrameEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder16ApplicationCache16ApplicationCacheEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 80 | 0;
 i9 = i5 + 96 | 0;
 i10 = i6 | 0;
 i11 = HEAP32[i3 >> 2] | 0;
 HEAP32[i10 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i3 = i11 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = __ZN7WebCore18InspectorPageAgent11assertFrameEPN3WTF6StringERKS2_(HEAP32[i1 + 16 >> 2] | 0, i2, i6) | 0;
 if ((i3 | 0) == 0) {
  i12 = 0;
 } else {
  i12 = __ZN7WebCore18InspectorPageAgent20assertDocumentLoaderEPN3WTF6StringEPNS_5FrameE(i2, i3) | 0;
 }
 i3 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i10 = i3 | 0;
   i2 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i10 >> 2] = i2;
    break;
   }
  }
 } while (0);
 if ((i12 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i3 = HEAP32[i12 + 1704 >> 2] | 0;
 __ZN7WebCore20ApplicationCacheHost20applicationCacheInfoEv(i7, i3);
 i12 = i8 | 0;
 HEAP32[i12 >> 2] = 0;
 i2 = i8 + 4 | 0;
 HEAP32[i2 >> 2] = 0;
 i10 = i8 + 8 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZN7WebCore20ApplicationCacheHost16fillResourceListEPN3WTF6VectorINS0_12ResourceInfoELj0ENS1_15CrashOnOverflowEEE(i3, i8);
 __ZN7WebCore30InspectorApplicationCacheAgent30buildObjectForApplicationCacheERKN3WTF6VectorINS_20ApplicationCacheHost12ResourceInfoELj0ENS1_15CrashOnOverflowEEERKNS3_9CacheInfoE(i9, i1, i8, i7);
 i8 = i9 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = i4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 do {
  if ((i4 | 0) != 0) {
   i9 = i4 + 4 | 0;
   i8 = i9 | 0;
   i1 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i8 >> 2] = i1;
    break;
   }
   i1 = i9 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
  }
 } while (0);
 i4 = HEAP32[i10 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i1 = HEAP32[i12 >> 2] | 0;
  i9 = i1 + (i4 << 6) | 0;
  i4 = i1;
  while (1) {
   i1 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i8 = i1 | 0;
     i3 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i3 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i1);
      break;
     } else {
      HEAP32[i8 >> 2] = i3;
      break;
     }
    }
   } while (0);
   i4 = i4 + 64 | 0;
   if ((i4 | 0) == (i9 | 0)) {
    break;
   }
  }
  HEAP32[i10 >> 2] = 0;
 }
 i10 = HEAP32[i12 >> 2] | 0;
 if ((i10 | 0) != 0) {
  HEAP32[i12 >> 2] = 0;
  HEAP32[i2 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i10);
 }
 i10 = HEAP32[i7 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i7 = i10 | 0;
 i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i10);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i7 >> 2] = i2;
  STACKTOP = i5;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 216 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_vi + 8;
}
function __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i5, i1 + 12 | 0, i2, i3);
 if ((HEAP8[i5 + 8 | 0] & 1) == 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i5 = i3 | 0;
  i3 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  i5 = i6 + 4 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i3;
  if ((i6 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i3 = i6 + 4 | 0;
  i6 = i3 | 0;
  i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i5 | 0) != 0) {
   HEAP32[i6 >> 2] = i5;
   STACKTOP = i4;
   return;
  }
  i5 = i3 - 4 | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  STACKTOP = i4;
  return;
 }
 i5 = i1 + 32 | 0;
 i3 = i1 + 40 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) != (HEAP32[i1 + 36 >> 2] | 0)) {
  i1 = HEAP32[i2 >> 2] | 0;
  HEAP32[(HEAP32[i5 >> 2] | 0) + (i6 << 2) >> 2] = i1;
  if ((i1 | 0) != 0) {
   i7 = i1 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  }
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  STACKTOP = i4;
  return;
 }
 i7 = i6 + 1 | 0;
 i1 = i5 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 do {
  if (i8 >>> 0 > i2 >>> 0) {
   i9 = 13;
  } else {
   if ((i8 + (i6 << 2) | 0) >>> 0 <= i2 >>> 0) {
    i9 = 13;
    break;
   }
   __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
   i10 = HEAP32[i1 >> 2] | 0;
   i11 = i10 + (i2 - i8 >> 2 << 2) | 0;
   i12 = i10;
  }
 } while (0);
 if ((i9 | 0) == 13) {
  __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
  i11 = i2;
  i12 = HEAP32[i1 >> 2] | 0;
 }
 i1 = HEAP32[i11 >> 2] | 0;
 HEAP32[i12 + (HEAP32[i3 >> 2] << 2) >> 2] = i1;
 if ((i1 | 0) != 0) {
  i12 = i1 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore30InspectorApplicationCacheAgent19getManifestForFrameEPN3WTF6StringERKS2_S3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i6 | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i3 = i9 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = __ZN7WebCore18InspectorPageAgent11assertFrameEPN3WTF6StringERKS2_(HEAP32[i1 + 16 >> 2] | 0, i2, i6) | 0;
 if ((i3 | 0) == 0) {
  i10 = 0;
 } else {
  i10 = __ZN7WebCore18InspectorPageAgent20assertDocumentLoaderEPN3WTF6StringEPNS_5FrameE(i2, i3) | 0;
 }
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 | 0;
   i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i8 >> 2] = i2;
    break;
   }
  }
 } while (0);
 if ((i10 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore20ApplicationCacheHost20applicationCacheInfoEv(i7, HEAP32[i10 + 1704 >> 2] | 0);
 i10 = i7 | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i3 = i7 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i7;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 | 0;
   i3 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i7 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i10 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i10 = i4 | 0;
 i3 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i10 >> 2] = i3;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore30InspectorApplicationCacheAgent28updateApplicationCacheStatusEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i4 = i3 | 0;
 i5 = i3 + 72 | 0;
 i6 = i3 + 80 | 0;
 i7 = HEAP32[i2 + 128 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = HEAP32[i7 + 1704 >> 2] | 0;
 i7 = __ZNK7WebCore20ApplicationCacheHost6statusEv(i8) | 0;
 __ZN7WebCore20ApplicationCacheHost20applicationCacheInfoEv(i4, i8);
 i8 = i5 | 0;
 i9 = i4 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 HEAP32[i8 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i10 = i4 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = HEAP32[i1 + 20 >> 2] | 0;
 __ZN7WebCore18InspectorPageAgent7frameIdEPNS_5FrameE(i6, HEAP32[i1 + 16 >> 2] | 0, i2);
 __ZN9Inspector43InspectorApplicationCacheFrontendDispatcher29applicationCacheStatusUpdatedERKN3WTF6StringES4_i(i10, i6, i5, i7);
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
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
 i7 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i8 = i7 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i8 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i9 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i7 | 0;
 i5 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i7);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i9 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore30InspectorApplicationCacheAgent38buildArrayForApplicationCacheResourcesERKN3WTF6VectorINS_20ApplicationCacheHost12ResourceInfoELj0ENS1_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i2 | 0;
 i5 = __ZN3WTF10fastMallocEj(24) | 0;
 i6 = i5;
 __ZN9Inspector18InspectorArrayBaseC2Ev(i5);
 HEAP32[i5 >> 2] = H_BASE + 256;
 i7 = HEAP32[i3 >> 2] | 0;
 i8 = HEAP32[i3 + 8 >> 2] | 0;
 i3 = i7 + (i8 << 6) | 0;
 if ((i8 | 0) != 0) {
  i8 = i4 | 0;
  i9 = i5 + 12 | 0;
  i10 = i5 + 20 | 0;
  i11 = i5 + 16 | 0;
  i12 = i9;
  i13 = i9;
  i9 = i7;
  while (1) {
   __ZN7WebCore30InspectorApplicationCacheAgent38buildObjectForApplicationCacheResourceERKNS_20ApplicationCacheHost12ResourceInfoE(i4, 0, i9);
   i7 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   i14 = i7 | 0;
   i7 = HEAP32[i10 >> 2] | 0;
   if ((i7 | 0) == (HEAP32[i11 >> 2] | 0)) {
    __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i12, i7 + 1 | 0);
    HEAP32[(HEAP32[i13 >> 2] | 0) + (HEAP32[i10 >> 2] << 2) >> 2] = i14;
   } else {
    HEAP32[(HEAP32[i13 >> 2] | 0) + (i7 << 2) >> 2] = i14;
   }
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   i9 = i9 + 64 | 0;
   if ((i9 | 0) == (i3 | 0)) {
    break;
   }
  }
 }
 HEAP32[i1 >> 2] = i6;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i5 + 4 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i1 + 1;
 if ((i1 | 0) == 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i6 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore30InspectorApplicationCacheAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = __Znwj(4) | 0;
 HEAP32[i6 >> 2] = i2;
 i2 = i1 + 20 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i6;
 if ((i7 | 0) != 0) {
  __ZdlPv(i7);
 }
 __ZN9Inspector42InspectorApplicationCacheBackendDispatcher6createEPNS_26InspectorBackendDispatcherEPNS_49InspectorApplicationCacheBackendDispatcherHandlerE(i5, i3, i1 + 12 | 0);
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i7 = i1 + 24 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i5;
 do {
  if ((i1 | 0) != 0) {
   i5 = i1 + 4 | 0;
   i7 = i5 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i7 >> 2] = i6;
    break;
   }
   i6 = i5 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i1 + 4 | 0;
 i1 = i3 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i4;
  return;
 }
 i6 = i3 - 4 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore30InspectorApplicationCacheAgentC2EPNS_19InstrumentingAgentsEPNS_18InspectorPageAgentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 HEAP32[i6 >> 2] = H_BASE + 184;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i5, i6);
 i6 = i1 | 0;
 HEAP32[i6 >> 2] = H_BASE + 216;
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i5;
 do {
  if ((i5 | 0) == 0) {
   HEAP32[i6 >> 2] = H_BASE + 504;
   HEAP32[i1 + 8 >> 2] = i2;
  } else {
   i8 = i5 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i6 >> 2] = H_BASE + 504;
   HEAP32[i1 + 8 >> 2] = i2;
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = i8 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    break;
   }
  }
 } while (0);
 HEAP32[i6 >> 2] = H_BASE + 416;
 HEAP32[i1 + 12 >> 2] = H_BASE + 460;
 HEAP32[i1 + 16 >> 2] = i3;
 HEAP32[i1 + 20 >> 2] = 0;
 HEAP32[i1 + 24 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore30InspectorApplicationCacheAgentC1EPNS_19InstrumentingAgentsEPNS_18InspectorPageAgentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 HEAP32[i6 >> 2] = H_BASE + 184;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i5, i6);
 i6 = i1 | 0;
 HEAP32[i6 >> 2] = H_BASE + 216;
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i5;
 do {
  if ((i5 | 0) == 0) {
   HEAP32[i6 >> 2] = H_BASE + 504;
   HEAP32[i1 + 8 >> 2] = i2;
  } else {
   i8 = i5 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i6 >> 2] = H_BASE + 504;
   HEAP32[i1 + 8 >> 2] = i2;
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = i8 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    break;
   }
  }
 } while (0);
 HEAP32[i6 >> 2] = H_BASE + 416;
 HEAP32[i1 + 12 >> 2] = H_BASE + 460;
 HEAP32[i1 + 16 >> 2] = i3;
 HEAP32[i1 + 20 >> 2] = 0;
 HEAP32[i1 + 24 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore30InspectorApplicationCacheAgentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 416;
 HEAP32[i1 + 12 >> 2] = H_BASE + 460;
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i4 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 i3 = i1 + 20 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i6 | 0) != 0) {
  __ZdlPv(i6);
 }
 __ZN9Inspector49InspectorApplicationCacheBackendDispatcherHandlerD2Ev(i1 + 12 | 0);
 HEAP32[i2 >> 2] = H_BASE + 216;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = i1;
  __ZN3WTF8fastFreeEPv(i7);
  return;
 }
 i6 = i2 | 0;
 i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i7 = i1;
  __ZN3WTF8fastFreeEPv(i7);
  return;
 } else {
  HEAP32[i6 >> 2] = i3;
  i7 = i1;
  __ZN3WTF8fastFreeEPv(i7);
  return;
 }
}
function __ZN7WebCore30InspectorApplicationCacheAgentD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 416;
 HEAP32[i1 + 12 >> 2] = H_BASE + 460;
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i4 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 i3 = i1 + 20 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i6 | 0) != 0) {
  __ZdlPv(i6);
 }
 __ZN9Inspector49InspectorApplicationCacheBackendDispatcherHandlerD2Ev(i1 + 12 | 0);
 HEAP32[i2 >> 2] = H_BASE + 216;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
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
function __ZThn12_N7WebCore30InspectorApplicationCacheAgentD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 - 28 + 16 | 0;
 HEAP32[i2 >> 2] = H_BASE + 416;
 i1 = i2 + 12 | 0;
 HEAP32[i1 >> 2] = H_BASE + 460;
 i3 = HEAP32[i2 + 24 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i4 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i3 = i2 + 20 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i5 | 0) != 0) {
  __ZdlPv(i5);
 }
 __ZN9Inspector49InspectorApplicationCacheBackendDispatcherHandlerD2Ev(i1);
 HEAP32[i2 >> 2] = H_BASE + 216;
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  return;
 } else {
  HEAP32[i1 >> 2] = i2;
  return;
 }
}
function __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore30InspectorApplicationCacheAgent29willDestroyFrontendAndBackendEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 20 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  __ZdlPv(i3);
 }
 i3 = i1 + 24 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 56 >> 2] = 0;
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
function __ZThn12_N7WebCore30InspectorApplicationCacheAgent27getApplicationCacheForFrameEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder16ApplicationCache16ApplicationCacheEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore30InspectorApplicationCacheAgent27getApplicationCacheForFrameEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder16ApplicationCache16ApplicationCacheEEE(i1 - 28 + 16 | 0, i2, i3, i4);
 return;
}
function __ZN7WebCore30InspectorApplicationCacheAgent29assertFrameWithDocumentLoaderEPN3WTF6StringES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = __ZN7WebCore18InspectorPageAgent11assertFrameEPN3WTF6StringERKS2_(HEAP32[i1 + 16 >> 2] | 0, i2, i3) | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i5 = __ZN7WebCore18InspectorPageAgent20assertDocumentLoaderEPN3WTF6StringEPNS_5FrameE(i2, i4) | 0;
 return i5 | 0;
}
function __ZThn12_N7WebCore30InspectorApplicationCacheAgent22getFramesWithManifestsEPN3WTF6StringERNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS6_16ApplicationCache17FrameWithManifestEEEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore30InspectorApplicationCacheAgent22getFramesWithManifestsEPN3WTF6StringERNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS6_16ApplicationCache17FrameWithManifestEEEEE(i1 - 28 + 16 | 0, 0, i3);
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
function __ZN9Inspector18InspectorAgentBaseD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 216;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
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
 __ZdlPv(i1);
 return;
}
function __ZN7WebCore18InspectorAgentBaseD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 216;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
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
 __ZdlPv(i1);
 return;
}
function __ZThn12_N7WebCore30InspectorApplicationCacheAgent6enableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = i1 - 28 + 16 | 0;
 HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 56 >> 2] = i2;
 i1 = (HEAP8[__ZN7WebCore20networkStateNotifierEv() | 0] & 1) != 0;
 __ZN9Inspector43InspectorApplicationCacheFrontendDispatcher19networkStateUpdatedEb(HEAP32[i2 + 20 >> 2] | 0, i1);
 return;
}
function __ZN9Inspector18InspectorAgentBaseD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 216;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore30InspectorApplicationCacheAgent6enableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 56 >> 2] = i1;
 i2 = (HEAP8[__ZN7WebCore20networkStateNotifierEv() | 0] & 1) != 0;
 __ZN9Inspector43InspectorApplicationCacheFrontendDispatcher19networkStateUpdatedEb(HEAP32[i1 + 20 >> 2] | 0, i2);
 return;
}
function __ZN7WebCore18InspectorAgentBaseD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 216;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZThn12_N7WebCore30InspectorApplicationCacheAgent19getManifestForFrameEPN3WTF6StringERKS2_S3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore30InspectorApplicationCacheAgent19getManifestForFrameEPN3WTF6StringERKS2_S3_(i1 - 28 + 16 | 0, i2, i3, i4);
 return;
}
function __ZN7WebCore30InspectorApplicationCacheAgent19networkStateChangedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = (HEAP8[__ZN7WebCore20networkStateNotifierEv() | 0] & 1) != 0;
 __ZN9Inspector43InspectorApplicationCacheFrontendDispatcher19networkStateUpdatedEb(HEAP32[i1 + 20 >> 2] | 0, i2);
 return;
}
function iii___ZN9Inspector18InspectorArrayBase7asArrayEPN3WTF6RefPtrINS_14InspectorArrayEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN9Inspector18InspectorArrayBase7asArrayEPN3WTF6RefPtrINS_14InspectorArrayEEE(i1 | 0, i2 | 0) | 0;
}
function iii___ZN9Inspector14InspectorValue8asObjectEPN3WTF6RefPtrINS_15InspectorObjectEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN9Inspector14InspectorValue8asObjectEPN3WTF6RefPtrINS_15InspectorObjectEEE(i1 | 0, i2 | 0) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function vii___ZNK9Inspector18InspectorArrayBase9writeJSONEPN3WTF13StringBuilderE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK9Inspector18InspectorArrayBase9writeJSONEPN3WTF13StringBuilderE(i1 | 0, i2 | 0);
}
function iii___ZN9Inspector14InspectorValue7asValueEPN3WTF6RefPtrIS0_EE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN9Inspector14InspectorValue7asValueEPN3WTF6RefPtrIS0_EE(i1 | 0, i2 | 0) | 0;
}
function __ZN9Inspector11TypeBuilder5ArrayINS0_16ApplicationCache24ApplicationCacheResourceEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function iii___ZNK9Inspector14InspectorValue8asStringEPN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asStringEPN3WTF6StringE(i1 | 0, i2 | 0) | 0;
}
function __ZN9Inspector11TypeBuilder5ArrayINS0_16ApplicationCache17FrameWithManifestEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function iii___ZNK9Inspector14InspectorValue9asBooleanEPb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue9asBooleanEPb(i1 | 0, i2 | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPm__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPm(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPl__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPl(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPj__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPj(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPi(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPd__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPd(i1 | 0, i2 | 0) | 0;
}
function __ZN9Inspector11TypeBuilder5ArrayINS0_16ApplicationCache24ApplicationCacheResourceEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 return;
}
function __ZN9Inspector11TypeBuilder5ArrayINS0_16ApplicationCache17FrameWithManifestEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 return;
}
function vii___ZN9Inspector18InspectorArrayBase7asArrayEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN9Inspector18InspectorArrayBase7asArrayEv(i1 | 0, i2 | 0);
}
function vii___ZN9Inspector14InspectorValue8asObjectEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN9Inspector14InspectorValue8asObjectEv(i1 | 0, i2 | 0);
}
function __ZThn12_N7WebCore30InspectorApplicationCacheAgentD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore30InspectorApplicationCacheAgentD0Ev(i1 - 28 + 16 | 0);
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 15](i2 | 0, i3 | 0, i4 | 0);
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
 return FUNCTION_TABLE_iii[i1 & 31](i2 | 0, i3 | 0) | 0;
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
 FUNCTION_TABLE_vii[i1 & 15](i2 | 0, i3 | 0);
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
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZN9Inspector18InspectorAgentBase12discardAgentEv(i1) {
 i1 = i1 | 0;
 return;
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
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZThn12_N7WebCore30InspectorApplicationCacheAgentD1Ev,b0,__ZThn12_N7WebCore30InspectorApplicationCacheAgentD0Ev,b0,__ZN7WebCore18InspectorAgentBaseD0Ev,b0,__ZN9Inspector18InspectorAgentBase12discardAgentEv,b0,__ZN7WebCore30InspectorApplicationCacheAgentD0Ev,b0,__ZN7WebCore30InspectorApplicationCacheAgentD1Ev,b0,__ZN9Inspector18InspectorAgentBaseD0Ev,b0,__ZN9Inspector11TypeBuilder5ArrayINS0_16ApplicationCache24ApplicationCacheResourceEED0Ev,b0,__ZN9Inspector18InspectorAgentBaseD1Ev,b0,__ZN9Inspector11TypeBuilder5ArrayINS0_16ApplicationCache24ApplicationCacheResourceEED1Ev,b0,__ZN9Inspector11TypeBuilder5ArrayINS0_16ApplicationCache17FrameWithManifestEED0Ev,b0,__ZN9Inspector11TypeBuilder5ArrayINS0_16ApplicationCache17FrameWithManifestEED1Ev,b0,__ZN7WebCore18InspectorAgentBaseD1Ev,b0,__ZN7WebCore30InspectorApplicationCacheAgent29willDestroyFrontendAndBackendEv
  ,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,vii___ZN9Inspector18InspectorArrayBase7asArrayEv__wrapper,b1,__ZN7WebCore30InspectorApplicationCacheAgent6enableEPN3WTF6StringE,b1,vii___ZN9Inspector14InspectorValue8asObjectEv__wrapper,b1,vii___ZNK9Inspector18InspectorArrayBase9writeJSONEPN3WTF13StringBuilderE__wrapper,b1,__ZThn12_N7WebCore30InspectorApplicationCacheAgent6enableEPN3WTF6StringE,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZN7WebCore30InspectorApplicationCacheAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE,b3,__ZThn12_N7WebCore30InspectorApplicationCacheAgent22getFramesWithManifestsEPN3WTF6StringERNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS6_16ApplicationCache17FrameWithManifestEEEEE,b3,__ZN7WebCore30InspectorApplicationCacheAgent22getFramesWithManifestsEPN3WTF6StringERNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS6_16ApplicationCache17FrameWithManifestEEEEE,b3,__ZN7WebCore30InspectorApplicationCacheAgentC2EPNS_19InstrumentingAgentsEPNS_18InspectorPageAgentE,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_v = [b4,b4,v____cxa_pure_virtual__wrapper,b4];
  var FUNCTION_TABLE_iii = [b5,b5,iii___ZNK9Inspector14InspectorValue8asStringEPN3WTF6StringE__wrapper,b5,iii___ZNK9Inspector14InspectorValue8asNumberEPj__wrapper,b5,iii___ZNK9Inspector14InspectorValue8asNumberEPi__wrapper,b5,iii___ZNK9Inspector14InspectorValue8asNumberEPm__wrapper,b5,iii___ZNK9Inspector14InspectorValue8asNumberEPl__wrapper,b5,iii___ZNK9Inspector14InspectorValue9asBooleanEPb__wrapper,b5,iii___ZNK9Inspector14InspectorValue8asNumberEPd__wrapper,b5,iii___ZN9Inspector14InspectorValue8asObjectEPN3WTF6RefPtrINS_15InspectorObjectEEE__wrapper,b5,iii___ZN9Inspector14InspectorValue7asValueEPN3WTF6RefPtrIS0_EE__wrapper,b5,iii___ZN9Inspector18InspectorArrayBase7asArrayEPN3WTF6RefPtrINS_14InspectorArrayEEE__wrapper,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5];
  var FUNCTION_TABLE_viiii = [b6,b6,__ZN7WebCore30InspectorApplicationCacheAgent27getApplicationCacheForFrameEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder16ApplicationCache16ApplicationCacheEEE,b6,__ZN7WebCore30InspectorApplicationCacheAgent19getManifestForFrameEPN3WTF6StringERKS2_S3_,b6,__ZThn12_N7WebCore30InspectorApplicationCacheAgent27getApplicationCacheForFrameEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder16ApplicationCache16ApplicationCacheEEE,b6,__ZThn12_N7WebCore30InspectorApplicationCacheAgent19getManifestForFrameEPN3WTF6StringERKS2_S3_,b6,b6,b6,b6,b6,b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore30InspectorApplicationCacheAgent19getManifestForFrameEPN3WTF6StringERKS2_S3_","__ZThn12_N7WebCore30InspectorApplicationCacheAgentD0Ev","__ZN7WebCore30InspectorApplicationCacheAgent27getApplicationCacheForFrameEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder16ApplicationCache16ApplicationCacheEEE","__ZThn12_N7WebCore30InspectorApplicationCacheAgentD1Ev","__ZN7WebCore30InspectorApplicationCacheAgent29assertFrameWithDocumentLoaderEPN3WTF6StringES2_","__ZN9Inspector18InspectorAgentBase12discardAgentEv","__ZN7WebCore18InspectorAgentBaseD0Ev","__ZN7WebCore30InspectorApplicationCacheAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE","_memset","__ZN7WebCore30InspectorApplicationCacheAgentD0Ev","__ZN9Inspector11TypeBuilder5ArrayINS0_16ApplicationCache24ApplicationCacheResourceEED0Ev","_memcpy","__ZN7WebCore18InspectorAgentBaseD1Ev","__ZThn12_N7WebCore30InspectorApplicationCacheAgent19getManifestForFrameEPN3WTF6StringERKS2_S3_","__ZN7WebCore30InspectorApplicationCacheAgent19networkStateChangedEv","__ZN7WebCore30InspectorApplicationCacheAgentD1Ev","__ZThn12_N7WebCore30InspectorApplicationCacheAgent27getApplicationCacheForFrameEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder16ApplicationCache16ApplicationCacheEEE","__ZN7WebCore30InspectorApplicationCacheAgent6enableEPN3WTF6StringE","__ZN7WebCore30InspectorApplicationCacheAgent38buildArrayForApplicationCacheResourcesERKN3WTF6VectorINS_20ApplicationCacheHost12ResourceInfoELj0ENS1_15CrashOnOverflowEEE","__ZN9Inspector18InspectorAgentBaseD0Ev","__ZN7WebCore30InspectorApplicationCacheAgent30buildObjectForApplicationCacheERKN3WTF6VectorINS_20ApplicationCacheHost12ResourceInfoELj0ENS1_15CrashOnOverflowEEERKNS3_9CacheInfoE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN9Inspector18InspectorAgentBaseD1Ev","__ZN9Inspector11TypeBuilder5ArrayINS0_16ApplicationCache24ApplicationCacheResourceEED1Ev","__ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_","__ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore30InspectorApplicationCacheAgentC2EPNS_19InstrumentingAgentsEPNS_18InspectorPageAgentE","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN9Inspector11TypeBuilder5ArrayINS0_16ApplicationCache17FrameWithManifestEED0Ev","__ZThn12_N7WebCore30InspectorApplicationCacheAgent22getFramesWithManifestsEPN3WTF6StringERNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS6_16ApplicationCache17FrameWithManifestEEEEE","__ZN7WebCore30InspectorApplicationCacheAgent29willDestroyFrontendAndBackendEv","__ZN7WebCore30InspectorApplicationCacheAgent38buildObjectForApplicationCacheResourceERKNS_20ApplicationCacheHost12ResourceInfoE","__ZN7WebCore30InspectorApplicationCacheAgent28updateApplicationCacheStatusEPNS_5FrameE","__ZThn12_N7WebCore30InspectorApplicationCacheAgent6enableEPN3WTF6StringE","__ZN7WebCore30InspectorApplicationCacheAgent22getFramesWithManifestsEPN3WTF6StringERNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS6_16ApplicationCache17FrameWithManifestEEEEE","__ZN9Inspector11TypeBuilder5ArrayINS0_16ApplicationCache17FrameWithManifestEED1Ev"]

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
H_BASE = parentModule["_malloc"](1008 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 1008;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore26HTMLTextFormControlElementD1Ev;
/* memory initializer */ allocate([110,111,110,101,0,0,0,0,97,117,116,111,0,0,0,0,108,116,114,0,0,0,0,0,114,116,108,0,0,0,0,0,98,97,99,107,119,97,114,100,0,0,0,0,0,0,0,0,102,111,114,119,97,114,100,0,101,110,100,0,0,0,0,0,115,116,97,114,116,0,0,0,115,101,108,101,99,116,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,204,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    Module["dynCall_viiiiii"](index,a1,a2,a3,a4,a5,a6);
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
  var __ZN7WebCore9HTMLNames15placeholderAttrE=env.__ZN7WebCore9HTMLNames15placeholderAttrE|0;
  var __ZN7WebCore9HTMLNames7dirAttrE=env.__ZN7WebCore9HTMLNames7dirAttrE|0;
  var __ZN7WebCore9HTMLNames5brTagE=env.__ZN7WebCore9HTMLNames5brTagE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore26HTMLTextFormControlElementE=(H_BASE+88)|0;
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
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore26HTMLTextFormControlElement23valueWithHardLineBreaksEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] & 255](i2 | 0) | 0)) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 728 >> 2] & 127](i1, i2);
  STACKTOP = i3;
  return;
 }
 i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 732 >> 2] & 255](i2) | 0;
 if ((i7 | 0) == 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 728 >> 2] & 127](i1, i2);
  STACKTOP = i3;
  return;
 }
 i8 = __ZNK7WebCore27TextControlInnerTextElement8rendererEv(i7) | 0;
 if ((i8 | 0) == 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 728 >> 2] & 127](i1, i2);
  STACKTOP = i3;
  return;
 }
 i9 = HEAP32[i8 + 104 >> 2] | 0;
 if ((i9 | 0) == 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 728 >> 2] & 127](i1, i2);
  STACKTOP = i3;
  return;
 }
 i2 = i9;
 while (1) {
  i9 = HEAP32[i2 + 52 >> 2] | 0;
  i10 = i9;
  if ((i9 | 0) == 0) {
   i11 = 0;
   i12 = 0;
   break;
  }
  if ((HEAP32[i2 + 32 >> 2] & 4096 | 0) == 0) {
   i13 = 12;
   break;
  } else {
   i2 = i10;
  }
 }
 if ((i13 | 0) == 12) {
  i9 = HEAP32[i2 + 64 >> 2] | 0;
  if ((HEAP32[i9 + 20 >> 2] & 128 | 0) == 0) {
   i14 = HEAP32[i9 + 4 >> 2] | 0;
  } else {
   i14 = 0;
  }
  i11 = HEAP32[i2 + 60 >> 2] | 0;
  i12 = i14;
 }
 i14 = i6 | 0;
 HEAP32[i14 >> 2] = 0;
 i2 = i6 + 4 | 0;
 HEAP32[i2 >> 2] = 0;
 i9 = i6 + 8 | 0;
 HEAP32[i9 >> 2] = 0;
 i8 = i6 + 12 | 0;
 HEAP8[i8] = 1;
 HEAP32[i6 + 16 >> 2] = 0;
 i15 = i6 + 20 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = HEAP32[i7 + 36 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i17 = i6 + 20 | 0;
   i18 = i7 | 0;
   i19 = i12;
   i20 = i11;
   i21 = i10;
   i22 = i16;
   while (1) {
    i23 = i22 + 12 | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    L30 : do {
     if ((i24 & 4 | 0) == 0) {
      i13 = 28;
     } else {
      i25 = HEAP32[i22 + 44 >> 2] | 0;
      i26 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
      if ((i25 | 0) != (i26 | 0)) {
       if ((HEAP32[i25 + 12 >> 2] | 0) != (HEAP32[i26 + 12 >> 2] | 0)) {
        i13 = 28;
        break;
       }
       if ((HEAP32[i25 + 16 >> 2] | 0) != (HEAP32[i26 + 16 >> 2] | 0)) {
        i13 = 28;
        break;
       }
      }
      HEAP16[i5 >> 1] = 10;
      i26 = HEAP32[i9 >> 2] | 0;
      do {
       if ((i26 | 0) != 0) {
        i25 = HEAP32[i14 >> 2] | 0;
        if (i25 >>> 0 >= (HEAP32[i26 + 4 >> 2] | 0) >>> 0) {
         break;
        }
        if ((HEAP32[i2 >> 2] | 0) != 0) {
         break;
        }
        i27 = (HEAP8[i8] & 1) == 0;
        HEAP32[i14 >> 2] = i25 + 1;
        if (i27) {
         HEAP16[(HEAP32[i17 >> 2] | 0) + (i25 << 1) >> 1] = 10;
         i28 = i21;
         i29 = i20;
         i30 = i19;
         break L30;
        } else {
         HEAP8[(HEAP32[i15 >> 2] | 0) + i25 | 0] = 10;
         i28 = i21;
         i29 = i20;
         i30 = i19;
         break L30;
        }
       }
      } while (0);
      __ZN3WTF13StringBuilder6appendEPKtj(i6, i5, 1);
      i28 = i21;
      i29 = i20;
      i30 = i19;
     }
    } while (0);
    do {
     if ((i13 | 0) == 28) {
      i13 = 0;
      if ((i24 & 1 | 0) == 0) {
       i28 = i21;
       i29 = i20;
       i30 = i19;
       break;
      }
      i26 = HEAP32[i22 + 36 >> 2] | 0;
      i25 = (i26 | 0) == 0;
      if (i25) {
       i31 = 0;
      } else {
       i27 = i26 | 0;
       HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 2;
       i31 = HEAP32[i26 + 4 >> 2] | 0;
      }
      L50 : do {
       if ((i19 | 0) != (i22 | 0) | i20 >>> 0 > i31 >>> 0) {
        i32 = i19;
        i33 = i20;
        i34 = i21;
        i35 = 0;
       } else {
        i27 = i26 + 4 | 0;
        i36 = i26 + 16 | 0;
        i37 = i26 + 8 | 0;
        i38 = i26 + 8 | 0;
        if (i25) {
         i39 = i20;
         i40 = i21;
         i41 = 0;
         while (1) {
          L55 : do {
           if (i39 >>> 0 > i41 >>> 0) {
            HEAP16[i4 >> 1] = 10;
            i42 = HEAP32[i9 >> 2] | 0;
            do {
             if ((i42 | 0) != 0) {
              i43 = HEAP32[i14 >> 2] | 0;
              if (i43 >>> 0 >= (HEAP32[i42 + 4 >> 2] | 0) >>> 0) {
               break;
              }
              if ((HEAP32[i2 >> 2] | 0) != 0) {
               break;
              }
              i44 = (HEAP8[i8] & 1) == 0;
              HEAP32[i14 >> 2] = i43 + 1;
              if (i44) {
               HEAP16[(HEAP32[i17 >> 2] | 0) + (i43 << 1) >> 1] = 10;
               i45 = i39;
               break L55;
              } else {
               HEAP8[(HEAP32[i15 >> 2] | 0) + i43 | 0] = 10;
               i45 = i39;
               break L55;
              }
             }
            } while (0);
            __ZN3WTF13StringBuilder6appendEPKtj(i6, i4, 1);
            i45 = i39;
           } else {
            i45 = i41;
           }
          } while (0);
          L66 : do {
           if ((i40 | 0) == 0) {
            i46 = 0;
            i47 = 0;
            i48 = 0;
           } else {
            i42 = i40;
            while (1) {
             i43 = HEAP32[i42 + 52 >> 2] | 0;
             i49 = i43;
             if ((i43 | 0) == 0) {
              i46 = i49;
              i47 = 0;
              i48 = 0;
              break L66;
             }
             if ((HEAP32[i42 + 32 >> 2] & 4096 | 0) == 0) {
              break;
             } else {
              i42 = i49;
             }
            }
            i43 = HEAP32[i42 + 64 >> 2] | 0;
            if ((HEAP32[i43 + 20 >> 2] & 128 | 0) == 0) {
             i50 = HEAP32[i43 + 4 >> 2] | 0;
            } else {
             i50 = 0;
            }
            i46 = i49;
            i47 = HEAP32[i42 + 60 >> 2] | 0;
            i48 = i50;
           }
          } while (0);
          if ((i48 | 0) != (i22 | 0) | i47 >>> 0 > i31 >>> 0) {
           i32 = i48;
           i33 = i47;
           i34 = i46;
           i35 = i45;
           break L50;
          } else {
           i39 = i47;
           i40 = i46;
           i41 = i45;
          }
         }
        } else {
         i51 = i20;
         i52 = i21;
         i53 = 0;
        }
        while (1) {
         L77 : do {
          if (i51 >>> 0 > i53 >>> 0) {
           i41 = i51 - i53 | 0;
           i40 = HEAP32[i27 >> 2] | 0;
           do {
            if (!((i40 | 0) == 0 | i51 >>> 0 > i40 >>> 0)) {
             if ((HEAP32[i36 >> 2] & 32 | 0) == 0) {
              __ZN3WTF13StringBuilder6appendEPKtj(i6, (HEAP32[i37 >> 2] | 0) + (i53 << 1) | 0, i41);
              break;
             } else {
              __ZN3WTF13StringBuilder6appendEPKhj(i6, (HEAP32[i38 >> 2] | 0) + i53 | 0, i41);
              break;
             }
            }
           } while (0);
           HEAP16[i4 >> 1] = 10;
           i41 = HEAP32[i9 >> 2] | 0;
           do {
            if ((i41 | 0) != 0) {
             i40 = HEAP32[i14 >> 2] | 0;
             if (i40 >>> 0 >= (HEAP32[i41 + 4 >> 2] | 0) >>> 0) {
              break;
             }
             if ((HEAP32[i2 >> 2] | 0) != 0) {
              break;
             }
             i42 = (HEAP8[i8] & 1) == 0;
             HEAP32[i14 >> 2] = i40 + 1;
             if (i42) {
              HEAP16[(HEAP32[i17 >> 2] | 0) + (i40 << 1) >> 1] = 10;
              i54 = i51;
              break L77;
             } else {
              HEAP8[(HEAP32[i15 >> 2] | 0) + i40 | 0] = 10;
              i54 = i51;
              break L77;
             }
            }
           } while (0);
           __ZN3WTF13StringBuilder6appendEPKtj(i6, i4, 1);
           i54 = i51;
          } else {
           i54 = i53;
          }
         } while (0);
         L94 : do {
          if ((i52 | 0) == 0) {
           i55 = 0;
           i56 = 0;
           i57 = 0;
          } else {
           i41 = i52;
           while (1) {
            i40 = HEAP32[i41 + 52 >> 2] | 0;
            i58 = i40;
            if ((i40 | 0) == 0) {
             i55 = i58;
             i56 = 0;
             i57 = 0;
             break L94;
            }
            if ((HEAP32[i41 + 32 >> 2] & 4096 | 0) == 0) {
             break;
            } else {
             i41 = i58;
            }
           }
           i40 = HEAP32[i41 + 64 >> 2] | 0;
           if ((HEAP32[i40 + 20 >> 2] & 128 | 0) == 0) {
            i59 = HEAP32[i40 + 4 >> 2] | 0;
           } else {
            i59 = 0;
           }
           i55 = i58;
           i56 = HEAP32[i41 + 60 >> 2] | 0;
           i57 = i59;
          }
         } while (0);
         if ((i57 | 0) != (i22 | 0) | i56 >>> 0 > i31 >>> 0) {
          i32 = i57;
          i33 = i56;
          i34 = i55;
          i35 = i54;
          break;
         } else {
          i51 = i56;
          i52 = i55;
          i53 = i54;
         }
        }
       }
      } while (0);
      i38 = i31 - i35 | 0;
      if (i25) {
       i28 = i34;
       i29 = i33;
       i30 = i32;
       break;
      }
      i37 = HEAP32[i26 + 4 >> 2] | 0;
      do {
       if (!((i37 | 0) == 0 | i31 >>> 0 > i37 >>> 0)) {
        if ((HEAP32[i26 + 16 >> 2] & 32 | 0) == 0) {
         __ZN3WTF13StringBuilder6appendEPKtj(i6, (HEAP32[i26 + 8 >> 2] | 0) + (i35 << 1) | 0, i38);
         break;
        } else {
         __ZN3WTF13StringBuilder6appendEPKhj(i6, (HEAP32[i26 + 8 >> 2] | 0) + i35 | 0, i38);
         break;
        }
       }
      } while (0);
      i38 = i26 | 0;
      i37 = (HEAP32[i38 >> 2] | 0) - 2 | 0;
      if ((i37 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i26);
       i28 = i34;
       i29 = i33;
       i30 = i32;
       break;
      } else {
       HEAP32[i38 >> 2] = i37;
       i28 = i34;
       i29 = i33;
       i30 = i32;
       break;
      }
     }
    } while (0);
    if ((i30 | 0) == (i22 | 0)) {
     i24 = i28;
     while (1) {
      L118 : do {
       if ((i24 | 0) == 0) {
        i60 = 0;
        i61 = 0;
        i62 = 0;
       } else {
        i37 = i24;
        while (1) {
         i38 = HEAP32[i37 + 52 >> 2] | 0;
         i63 = i38;
         if ((i38 | 0) == 0) {
          i60 = i63;
          i61 = 0;
          i62 = 0;
          break L118;
         }
         if ((HEAP32[i37 + 32 >> 2] & 4096 | 0) == 0) {
          break;
         } else {
          i37 = i63;
         }
        }
        i38 = HEAP32[i37 + 64 >> 2] | 0;
        if ((HEAP32[i38 + 20 >> 2] & 128 | 0) == 0) {
         i64 = HEAP32[i38 + 4 >> 2] | 0;
        } else {
         i64 = 0;
        }
        i60 = i63;
        i61 = HEAP32[i37 + 60 >> 2] | 0;
        i62 = i64;
       }
      } while (0);
      if ((i62 | 0) == (i22 | 0)) {
       i24 = i60;
      } else {
       i65 = i62;
       i66 = i61;
       i67 = i60;
       break;
      }
     }
    } else {
     i65 = i30;
     i66 = i29;
     i67 = i28;
    }
    if ((HEAP32[i23 >> 2] & 2 | 0) != 0) {
     i24 = HEAP32[i22 + 36 >> 2] | 0;
     if ((i24 | 0) != 0) {
      i19 = i65;
      i20 = i66;
      i21 = i67;
      i22 = i24;
      continue;
     }
    }
    if ((i22 | 0) == (i18 | 0)) {
     break;
    }
    i24 = HEAP32[i22 + 28 >> 2] | 0;
    if ((i24 | 0) != 0) {
     i19 = i65;
     i20 = i66;
     i21 = i67;
     i22 = i24;
     continue;
    }
    i24 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i22, i18) | 0;
    if ((i24 | 0) == 0) {
     break;
    } else {
     i19 = i65;
     i20 = i66;
     i21 = i67;
     i22 = i24;
    }
   }
   i22 = HEAP32[i14 >> 2] | 0;
   if ((i22 | 0) == 0) {
    break;
   }
   i21 = i22 - 1 | 0;
   i22 = HEAP32[i2 >> 2] | 0;
   i20 = (i22 | 0) == 0 ? HEAP32[i9 >> 2] | 0 : i22;
   if ((HEAP8[i8] & 1) == 0) {
    i68 = HEAP16[(HEAP32[i20 + 8 >> 2] | 0) + (i21 << 1) >> 1] | 0;
   } else {
    i68 = HEAPU8[(HEAP32[i20 + 8 >> 2] | 0) + i21 | 0] | 0;
   }
   if (i68 << 16 >> 16 != 10) {
    break;
   }
   __ZN3WTF13StringBuilder6resizeEj(i6, i21);
  }
 } while (0);
 __ZN3WTF13StringBuilder11shrinkToFitEv(i6);
 i68 = HEAP32[i2 >> 2] | 0;
 if ((i68 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i6);
  i6 = HEAP32[i2 >> 2] | 0;
  HEAP32[i1 >> 2] = i6;
  if ((i6 | 0) != 0) {
   i69 = i6;
   i13 = 97;
  }
 } else {
  HEAP32[i1 >> 2] = i68;
  i69 = i68;
  i13 = 97;
 }
 if ((i13 | 0) == 97) {
  i13 = i69 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 i13 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i69 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i69 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i69;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i2 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i13 | 0;
 i69 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i69 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i13);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i69;
  STACKTOP = i3;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 196;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_vi + 68;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_vii + 62;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 172;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 194;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 202;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_vi + 54;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_ii + 152;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_ii + 188;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 162;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 190;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_ii + 156;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_v + 4;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_iii + 22;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_ii + 170;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_ii + 182;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_vii + 70;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_vi + 58;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_vii + 66;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_vi + 56;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_vi + 60;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_vi + 72;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_ii + 164;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_vi + 52;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_vi + 64;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_v + 8;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_ii + 198;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_iii + 24;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_ii + 160;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_ii + 206;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_ii + 158;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_vi + 50;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_vii + 64;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_vi + 70;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_ii + 176;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 728 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 732 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_ii + 154;
 HEAP32[H_BASE + 744 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 748 >> 2] = F_BASE_vii + 60;
 HEAP32[H_BASE + 752 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 756 >> 2] = F_BASE_vi + 66;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 764 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 768 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 772 >> 2] = F_BASE_ii + 168;
 HEAP32[H_BASE + 776 >> 2] = F_BASE_ii + 184;
 HEAP32[H_BASE + 780 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 784 >> 2] = F_BASE_ii + 174;
 HEAP32[H_BASE + 788 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 792 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 796 >> 2] = F_BASE_ii + 192;
 HEAP32[H_BASE + 800 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 804 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 808 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 812 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 816 >> 2] = F_BASE_viiiiii + 2;
 HEAP32[H_BASE + 820 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 824 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 828 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 832 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 836 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 840 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 844 >> 2] = F_BASE_ii + 166;
 HEAP32[H_BASE + 848 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 852 >> 2] = F_BASE_vi + 62;
 HEAP32[H_BASE + 864 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 868 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 872 >> 2] = F_BASE_ii + 178;
 HEAP32[H_BASE + 876 >> 2] = F_BASE_ii + 208;
 HEAP32[H_BASE + 880 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 884 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 888 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 892 >> 2] = F_BASE_ii + 204;
 HEAP32[H_BASE + 896 >> 2] = F_BASE_ii + 186;
 HEAP32[H_BASE + 900 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 904 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 908 >> 2] = F_BASE_ii + 180;
 HEAP32[H_BASE + 912 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 916 >> 2] = F_BASE_ii + 200;
 HEAP32[H_BASE + 920 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 924 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 928 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 932 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 936 >> 2] = F_BASE_vii + 68;
 HEAP32[H_BASE + 940 >> 2] = F_BASE_vii + 58;
 HEAP32[H_BASE + 944 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 948 >> 2] = F_BASE_vi + 48;
 HEAP32[H_BASE + 952 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 956 >> 2] = F_BASE_vi + 30;
}
function __ZNK7WebCore26HTMLTextFormControlElement19strippedPlaceholderEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i2 + 48 >> 2] | 0;
 L1 : do {
  if ((i6 | 0) == 0) {
   i7 = __ZN3WTF8nullAtomE;
  } else {
   i2 = HEAP32[i6 + 4 >> 2] | 0;
   if ((i2 & 1 | 0) == 0) {
    i8 = i2 >>> 1 & 134217727;
    i9 = i6 + 20 | 0;
   } else {
    i2 = i6 + 24 | 0;
    i8 = HEAP32[i2 + 8 >> 2] | 0;
    i9 = HEAP32[i2 >> 2] | 0;
   }
   if ((i8 | 0) == 0) {
    i7 = __ZN3WTF8nullAtomE;
    break;
   }
   i2 = HEAP32[__ZN7WebCore9HTMLNames15placeholderAttrE >> 2] | 0;
   i10 = i2 + 12 | 0;
   i11 = i2 + 16 | 0;
   i12 = 0;
   while (1) {
    i13 = i9 + (i12 << 3) | 0;
    i14 = HEAP32[i13 >> 2] | 0;
    if ((i14 | 0) == (i2 | 0)) {
     break;
    }
    if ((HEAP32[i14 + 12 >> 2] | 0) == (HEAP32[i10 >> 2] | 0)) {
     if ((HEAP32[i14 + 16 >> 2] | 0) == (HEAP32[i11 >> 2] | 0)) {
      break;
     }
    }
    i14 = i12 + 1 | 0;
    if (i14 >>> 0 < i8 >>> 0) {
     i12 = i14;
    } else {
     i7 = __ZN3WTF8nullAtomE;
     break L1;
    }
   }
   i7 = (i13 | 0) == 0 ? __ZN3WTF8nullAtomE : i9 + (i12 << 3) + 4 | 0;
  }
 } while (0);
 i9 = i7 | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 if ((i7 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 i13 = (HEAP32[i7 + 16 >> 2] & 32 | 0) == 0;
 L20 : do {
  if (i13) {
   i8 = HEAP32[i7 + 8 >> 2] | 0;
   i6 = HEAP32[i7 + 4 >> 2] | 0;
   i11 = i8;
   i10 = 0;
   while (1) {
    if (i10 >>> 0 >= i6 >>> 0) {
     i15 = i8;
     i16 = i6;
     i17 = i11;
     i18 = 22;
     break L20;
    }
    if ((HEAP16[i8 + (i10 << 1) >> 1] | 0) == 10) {
     i19 = i10;
     i20 = i8;
     i21 = i6;
     i22 = i11;
     i18 = 21;
     break;
    } else {
     i10 = i10 + 1 | 0;
    }
   }
  } else {
   i10 = HEAP32[i7 + 8 >> 2] | 0;
   i11 = HEAP32[i7 + 4 >> 2] | 0;
   i6 = i10;
   i8 = 0;
   while (1) {
    if (i8 >>> 0 >= i11 >>> 0) {
     i15 = i6;
     i16 = i11;
     i17 = i10;
     i18 = 22;
     break L20;
    }
    if ((HEAP8[i10 + i8 | 0] | 0) == 10) {
     i19 = i8;
     i20 = i6;
     i21 = i11;
     i22 = i10;
     i18 = 21;
     break;
    } else {
     i8 = i8 + 1 | 0;
    }
   }
  }
 } while (0);
 if ((i18 | 0) == 21) {
  if ((i19 | 0) == -1) {
   i15 = i20;
   i16 = i21;
   i17 = i22;
   i18 = 22;
  }
 }
 do {
  if ((i18 | 0) == 22) {
   L33 : do {
    if (i13) {
     i22 = 0;
     while (1) {
      if (i22 >>> 0 >= i16 >>> 0) {
       break L33;
      }
      if ((HEAP16[i15 + (i22 << 1) >> 1] | 0) == 13) {
       i23 = i22;
       i18 = 27;
       break;
      } else {
       i22 = i22 + 1 | 0;
      }
     }
    } else {
     i22 = 0;
     while (1) {
      if (i22 >>> 0 >= i16 >>> 0) {
       break L33;
      }
      if ((HEAP8[i17 + i22 | 0] | 0) == 13) {
       i23 = i22;
       i18 = 27;
       break;
      } else {
       i22 = i22 + 1 | 0;
      }
     }
    }
   } while (0);
   if ((i18 | 0) == 27) {
    if ((i23 | 0) != -1) {
     break;
    }
   }
   HEAP32[i1 >> 2] = i7;
   if ((i7 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i22 = i7 | 0;
   HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
   STACKTOP = i3;
   return;
  }
 } while (0);
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = 0;
 i23 = i5 + 4 | 0;
 HEAP32[i23 >> 2] = 0;
 i17 = i5 + 8 | 0;
 HEAP32[i17 >> 2] = 0;
 i16 = i5 + 12 | 0;
 HEAP8[i16] = 1;
 HEAP32[i5 + 16 >> 2] = 0;
 i15 = i5 + 20 | 0;
 HEAP32[i15 >> 2] = 0;
 i13 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i13 | 0) == 0) {
   __ZN3WTF13StringBuilder15reserveCapacityEj(i5, 0);
  } else {
   i22 = HEAP32[i13 + 4 >> 2] | 0;
   __ZN3WTF13StringBuilder15reserveCapacityEj(i5, i22);
   if ((i22 | 0) == 0) {
    break;
   }
   i21 = i5 + 20 | 0;
   i20 = 0;
   while (1) {
    i19 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i19 | 0) == 0) {
      i24 = 0;
      i18 = 40;
     } else {
      if ((HEAP32[i19 + 4 >> 2] | 0) >>> 0 <= i20 >>> 0) {
       i24 = 0;
       i18 = 40;
       break;
      }
      i8 = i19 + 8 | 0;
      if ((HEAP32[i19 + 16 >> 2] & 32 | 0) == 0) {
       i25 = HEAP16[(HEAP32[i8 >> 2] | 0) + (i20 << 1) >> 1] | 0;
      } else {
       i25 = HEAPU8[(HEAP32[i8 >> 2] | 0) + i20 | 0] | 0;
      }
      if (!((i25 << 16 >> 16 | 0) == 10 | (i25 << 16 >> 16 | 0) == 13)) {
       i24 = i25;
       i18 = 40;
      }
     }
    } while (0);
    L61 : do {
     if ((i18 | 0) == 40) {
      i18 = 0;
      HEAP16[i4 >> 1] = i24;
      i19 = HEAP32[i17 >> 2] | 0;
      do {
       if ((i19 | 0) != 0) {
        i8 = HEAP32[i7 >> 2] | 0;
        if (i8 >>> 0 >= (HEAP32[i19 + 4 >> 2] | 0) >>> 0) {
         break;
        }
        if ((HEAP32[i23 >> 2] | 0) != 0) {
         break;
        }
        if ((HEAP8[i16] & 1) == 0) {
         HEAP32[i7 >> 2] = i8 + 1;
         HEAP16[(HEAP32[i21 >> 2] | 0) + (i8 << 1) >> 1] = i24;
         break L61;
        }
        if ((i24 & 65535) >>> 0 > 255 >>> 0) {
         break;
        }
        HEAP32[i7 >> 2] = i8 + 1;
        HEAP8[(HEAP32[i15 >> 2] | 0) + i8 | 0] = i24;
        break L61;
       }
      } while (0);
      __ZN3WTF13StringBuilder6appendEPKtj(i5, i4, 1);
     }
    } while (0);
    i20 = i20 + 1 | 0;
    if (i20 >>> 0 >= i22 >>> 0) {
     break;
    }
   }
  }
 } while (0);
 __ZN3WTF13StringBuilder11shrinkToFitEv(i5);
 i4 = HEAP32[i23 >> 2] | 0;
 if ((i4 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i5);
  i5 = HEAP32[i23 >> 2] | 0;
  HEAP32[i1 >> 2] = i5;
  if ((i5 | 0) != 0) {
   i26 = i5;
   i18 = 52;
  }
 } else {
  HEAP32[i1 >> 2] = i4;
  i26 = i4;
  i18 = 52;
 }
 if ((i18 | 0) == 52) {
  i18 = i26 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
 }
 i18 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i17 = i18 | 0;
   i26 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i26 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i17 >> 2] = i26;
    break;
   }
  }
 } while (0);
 i18 = HEAP32[i23 >> 2] | 0;
 if ((i18 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i23 = i18 | 0;
 i26 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
 if ((i26 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i18);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i23 >> 2] = i26;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore26HTMLTextFormControlElement17setSelectionRangeEiiNS_27TextFieldSelectionDirectionE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 240 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 32 | 0;
 i9 = i5 + 48 | 0;
 i10 = i5 + 112 | 0;
 i11 = i5 + 176 | 0;
 i12 = i1 + 20 | 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] | 0);
 i13 = i1 + 12 | 0;
 i14 = (HEAP32[i13 >> 2] & 2048 | 0) == 0;
 i15 = i1 + 32 | 0;
 if (i14) {
  i16 = i15 | 0;
 } else {
  i16 = HEAP32[i15 >> 2] | 0;
 }
 if ((HEAP32[i16 >> 2] | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 if (i14) {
  i17 = i15 | 0;
 } else {
  i17 = HEAP32[i15 >> 2] | 0;
 }
 i14 = HEAP32[i17 >> 2] | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 208 >> 2] & 255](i14) | 0)) {
  STACKTOP = i5;
  return;
 }
 i14 = (i3 | 0) < 0 ? 0 : i3;
 i3 = (i2 | 0) < 0 ? 0 : i2;
 i2 = (i14 | 0) < (i3 | 0) ? i14 : i3;
 if ((HEAP32[i13 >> 2] & 2048 | 0) == 0) {
  i18 = i15 | 0;
 } else {
  i18 = HEAP32[i15 >> 2] | 0;
 }
 i15 = HEAP32[i18 >> 2] | 0;
 i18 = i1;
 i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 732 >> 2] & 255](i1) | 0;
 do {
  if (!((HEAP32[(HEAP32[i15 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) == 2048 | (i13 | 0) == 0)) {
   if ((__ZNK7WebCore27TextControlInnerTextElement8rendererEv(i13) | 0) == 0) {
    break;
   }
   if ((HEAP32[(__ZNK7WebCore4Node9renderBoxEv(i13 | 0) | 0) + 56 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore45visiblePositionForIndexUsingCharacterIteratorEPNS_4NodeEi(i6, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 732 >> 2] & 255](i1) | 0, i2);
   i3 = i7 | 0;
   i17 = i7 + 4 | 0;
   i16 = i7 + 8 | 0;
   i19 = i16;
   i20 = i7 + 12 | 0;
   _memset(i7 | 0, 0, 12) | 0;
   HEAP32[i20 >> 2] = 1;
   do {
    if ((i2 | 0) == (i14 | 0)) {
     i21 = HEAP32[i6 >> 2] | 0;
     do {
      if ((i21 | 0) == 0) {
       HEAP32[i3 >> 2] = i21;
      } else {
       i22 = i21 + 8 | 0;
       HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
       i22 = HEAP32[i3 >> 2] | 0;
       HEAP32[i3 >> 2] = i21;
       if ((i22 | 0) == 0) {
        break;
       }
       i23 = i22 + 8 | 0;
       i22 = i23 | 0;
       i24 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
       HEAP32[i22 >> 2] = i24;
       if ((i24 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
      }
     } while (0);
     HEAP32[i17 >> 2] = HEAP32[i6 + 4 >> 2];
     i21 = HEAP32[i6 + 8 >> 2] | 0;
     i23 = HEAP32[i19 >> 2] & -8 | i21 & 7;
     HEAP32[i19 >> 2] = i23;
     HEAP8[i16] = i23 & 255 & -9 | i21 & 8;
     HEAP32[i20 >> 2] = HEAP32[i6 + 12 >> 2];
    } else {
     __ZN7WebCore45visiblePositionForIndexUsingCharacterIteratorEPNS_4NodeEi(i8, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 732 >> 2] & 255](i1) | 0, i14);
     i21 = i8 | 0;
     i23 = HEAP32[i21 >> 2] | 0;
     HEAP32[i21 >> 2] = 0;
     i24 = HEAP32[i3 >> 2] | 0;
     HEAP32[i3 >> 2] = i23;
     do {
      if ((i24 | 0) != 0) {
       i23 = i24 + 8 | 0;
       i22 = i23 | 0;
       i25 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
       HEAP32[i22 >> 2] = i25;
       if ((i25 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
      }
     } while (0);
     HEAP32[i17 >> 2] = HEAP32[i8 + 4 >> 2];
     i24 = HEAP32[i8 + 8 >> 2] | 0;
     i23 = HEAP32[i19 >> 2] & -8 | i24 & 7;
     HEAP32[i19 >> 2] = i23;
     HEAP8[i16] = i23 & 255 & -9 | i24 & 8;
     HEAP32[i20 >> 2] = HEAP32[i8 + 12 >> 2];
     i24 = HEAP32[i21 >> 2] | 0;
     if ((i24 | 0) == 0) {
      break;
     }
     i23 = i24 + 8 | 0;
     i24 = i23 | 0;
     i25 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
     HEAP32[i24 >> 2] = i25;
     if ((i25 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
    }
   } while (0);
   i20 = i6 | 0;
   __ZN7WebCore16VisibleSelectionC1Ev(i9);
   if ((i4 | 0) == 2) {
    __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionES3_b(i10, i7, i6, 0);
    __ZN7WebCore16VisibleSelectionaSEOS0_(i9, i10) | 0;
    __ZN7WebCore16VisibleSelectionD2Ev(i10);
   } else {
    __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionES3_b(i11, i6, i7, 0);
    __ZN7WebCore16VisibleSelectionaSEOS0_(i9, i11) | 0;
    __ZN7WebCore16VisibleSelectionD2Ev(i11);
   }
   i16 = i9 + 56 | 0;
   HEAP8[i16] = HEAP8[i16] & -3 | ((i4 | 0) != 0) << 1;
   i16 = HEAP32[(HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
   if ((i16 | 0) != 0) {
    __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(HEAP32[i16 + 468 >> 2] | 0, i9, 6, 0, 0);
   }
   __ZN7WebCore16VisibleSelectionD2Ev(i9);
   i16 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i19 = i16 + 8 | 0;
     i17 = i19 | 0;
     i23 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     HEAP32[i17 >> 2] = i23;
     if ((i23 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
    }
   } while (0);
   i16 = HEAP32[i20 >> 2] | 0;
   if ((i16 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i3 = i16 + 8 | 0;
   i16 = i3 | 0;
   i19 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   HEAP32[i16 >> 2] = i19;
   if ((i19 | 0) >= 1) {
    STACKTOP = i5;
    return;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    STACKTOP = i5;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
   STACKTOP = i5;
   return;
  }
 } while (0);
 HEAP32[i1 + 96 >> 2] = i2;
 HEAP32[i1 + 100 >> 2] = i14;
 HEAP32[i1 + 104 >> 2] = i4;
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore26HTMLTextFormControlElement9selectionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i2 + 32 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
  i9 = i8 | 0;
 } else {
  i9 = HEAP32[i8 >> 2] | 0;
 }
 do {
  if ((HEAP32[i9 >> 2] | 0) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] & 255](i2 | 0) | 0)) {
    break;
   }
   i8 = HEAP32[i2 + 96 >> 2] | 0;
   if ((i8 | 0) <= -1) {
    break;
   }
   i10 = HEAP32[i2 + 100 >> 2] | 0;
   i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 732 >> 2] & 255](i2) | 0;
   if ((i11 | 0) == 0) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i3;
    return;
   }
   i12 = HEAP32[i11 + 36 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i13 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
    i14 = i11 | 0;
    i15 = i4 | 0;
    HEAP32[i15 >> 2] = i14;
    i16 = i11 + 8 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
    i17 = i5 | 0;
    HEAP32[i17 >> 2] = i14;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
    __ZN7WebCore5Range6createERNS_8DocumentEN3WTF10PassRefPtrINS_4NodeEEEiS6_i(i1, i13, i4, 0, i5, 0);
    i13 = HEAP32[i17 >> 2] | 0;
    do {
     if ((i13 | 0) != 0) {
      i17 = i13 + 8 | 0;
      i16 = i17 | 0;
      i14 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
      HEAP32[i16 >> 2] = i14;
      if ((i14 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
     }
    } while (0);
    i13 = HEAP32[i15 >> 2] | 0;
    if ((i13 | 0) == 0) {
     STACKTOP = i3;
     return;
    }
    i17 = i13 + 8 | 0;
    i13 = i17 | 0;
    i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
    HEAP32[i13 >> 2] = i14;
    if ((i14 | 0) >= 1) {
     STACKTOP = i3;
     return;
    }
    if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
     STACKTOP = i3;
     return;
    }
    __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
    STACKTOP = i3;
    return;
   }
   i17 = i11 | 0;
   i14 = i8;
   i13 = 0;
   i16 = i12;
   i18 = 0;
   while (1) {
    i19 = i16 + 12 | 0;
    do {
     if ((HEAP32[i19 >> 2] & 1 | 0) == 0) {
      i20 = 1;
     } else {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 164 >> 2] & 255](i16) | 0) {
       i20 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 168 >> 2] & 255](i16) | 0;
       break;
      }
      if ((HEAP32[i19 >> 2] & 2 | 0) == 0) {
       i20 = 0;
       break;
      }
      i20 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i16) | 0;
     }
    } while (0);
    i21 = i20 + i18 | 0;
    do {
     if ((i18 | 0) > (i14 | 0) | (i14 | 0) > (i21 | 0)) {
      i22 = i13;
      i23 = i14;
     } else {
      i24 = i14 - i18 | 0;
      if ((HEAP32[i19 >> 2] & 1 | 0) != 0) {
       i22 = i16;
       i23 = i24;
       break;
      }
      i25 = HEAP32[i16 + 16 >> 2] | 0;
      i22 = i25;
      i23 = (__ZNK7WebCore4Node9nodeIndexEv(i16) | 0) + i24 | 0;
     }
    } while (0);
    if (!((i18 | 0) > (i10 | 0) | (i10 | 0) > (i21 | 0))) {
     i26 = 29;
     break;
    }
    if ((HEAP32[i19 >> 2] & 2 | 0) != 0) {
     i24 = HEAP32[i16 + 36 >> 2] | 0;
     if ((i24 | 0) != 0) {
      i14 = i23;
      i13 = i22;
      i16 = i24;
      i18 = i21;
      continue;
     }
    }
    if ((i16 | 0) == (i17 | 0)) {
     break;
    }
    i24 = HEAP32[i16 + 28 >> 2] | 0;
    if ((i24 | 0) != 0) {
     i14 = i23;
     i13 = i22;
     i16 = i24;
     i18 = i21;
     continue;
    }
    i24 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i16, i17) | 0;
    if ((i24 | 0) == 0) {
     break;
    } else {
     i14 = i23;
     i13 = i22;
     i16 = i24;
     i18 = i21;
    }
   }
   do {
    if ((i26 | 0) == 29) {
     i13 = i10 - i18 | 0;
     if ((HEAP32[i19 >> 2] & 1 | 0) == 0) {
      i14 = HEAP32[i16 + 16 >> 2] | 0;
      i27 = i14;
      i28 = (__ZNK7WebCore4Node9nodeIndexEv(i16) | 0) + i13 | 0;
     } else {
      i27 = i16;
      i28 = i13;
     }
     if ((i22 | 0) == 0 | (i27 | 0) == 0) {
      break;
     }
     i13 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
     i14 = i6 | 0;
     HEAP32[i14 >> 2] = i22;
     i17 = i22 + 8 | 0;
     HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
     i17 = i7 | 0;
     HEAP32[i17 >> 2] = i27;
     i12 = i27 + 8 | 0;
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
     __ZN7WebCore5Range6createERNS_8DocumentEN3WTF10PassRefPtrINS_4NodeEEEiS6_i(i1, i13, i6, i23, i7, i28);
     i13 = HEAP32[i17 >> 2] | 0;
     do {
      if ((i13 | 0) != 0) {
       i17 = i13 + 8 | 0;
       i12 = i17 | 0;
       i8 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
       HEAP32[i12 >> 2] = i8;
       if ((i8 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
      }
     } while (0);
     i13 = HEAP32[i14 >> 2] | 0;
     if ((i13 | 0) == 0) {
      STACKTOP = i3;
      return;
     }
     i21 = i13 + 8 | 0;
     i13 = i21 | 0;
     i17 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     HEAP32[i13 >> 2] = i17;
     if ((i17 | 0) >= 1) {
      STACKTOP = i3;
      return;
     }
     if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
      STACKTOP = i3;
      return;
     }
     __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
     STACKTOP = i3;
     return;
    }
   } while (0);
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i3;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore26HTMLTextFormControlElement14innerTextValueEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 32 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] & 255](i2 | 0) | 0)) {
  i7 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
  HEAP32[i1 >> 2] = i7;
  if ((i7 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i8 = i7 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  STACKTOP = i3;
  return;
 }
 i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 732 >> 2] & 255](i2) | 0;
 if ((i8 | 0) == 0) {
  i2 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
  HEAP32[i1 >> 2] = i2;
  if ((i2 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i7 = i2 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  STACKTOP = i3;
  return;
 }
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = 0;
 i2 = i5 + 4 | 0;
 HEAP32[i2 >> 2] = 0;
 i9 = i5 + 8 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i5 + 12 | 0;
 HEAP8[i10] = 1;
 HEAP32[i5 + 16 >> 2] = 0;
 i11 = i5 + 20 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i8 | 0;
 i8 = i6 | 0;
 i13 = i5 + 20 | 0;
 i14 = i12;
 while (1) {
  i15 = i14 + 12 | 0;
  i16 = HEAP32[i15 >> 2] | 0;
  L17 : do {
   if ((i16 & 4 | 0) == 0) {
    i17 = 19;
   } else {
    i18 = HEAP32[i14 + 44 >> 2] | 0;
    i19 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
    if ((i18 | 0) != (i19 | 0)) {
     if ((HEAP32[i18 + 12 >> 2] | 0) != (HEAP32[i19 + 12 >> 2] | 0)) {
      i17 = 19;
      break;
     }
     if ((HEAP32[i18 + 16 >> 2] | 0) != (HEAP32[i19 + 16 >> 2] | 0)) {
      i17 = 19;
      break;
     }
    }
    HEAP16[i4 >> 1] = 10;
    i19 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i19 | 0) != 0) {
      i18 = HEAP32[i7 >> 2] | 0;
      if (i18 >>> 0 >= (HEAP32[i19 + 4 >> 2] | 0) >>> 0) {
       break;
      }
      if ((HEAP32[i2 >> 2] | 0) != 0) {
       break;
      }
      i20 = (HEAP8[i10] & 1) == 0;
      HEAP32[i7 >> 2] = i18 + 1;
      if (i20) {
       HEAP16[(HEAP32[i13 >> 2] | 0) + (i18 << 1) >> 1] = 10;
       break L17;
      } else {
       HEAP8[(HEAP32[i11 >> 2] | 0) + i18 | 0] = 10;
       break L17;
      }
     }
    } while (0);
    __ZN3WTF13StringBuilder6appendEPKtj(i5, i4, 1);
   }
  } while (0);
  do {
   if ((i17 | 0) == 19) {
    i17 = 0;
    if ((i16 & 1 | 0) == 0) {
     break;
    }
    i19 = HEAP32[i14 + 36 >> 2] | 0;
    HEAP32[i8 >> 2] = i19;
    if ((i19 | 0) != 0) {
     i18 = i19 | 0;
     HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
    }
    __ZN3WTF13StringBuilder6appendERKNS_6StringE(i5, i6);
    i18 = HEAP32[i8 >> 2] | 0;
    if ((i18 | 0) == 0) {
     break;
    }
    i19 = i18 | 0;
    i20 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
    if ((i20 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i18);
     break;
    } else {
     HEAP32[i19 >> 2] = i20;
     break;
    }
   }
  } while (0);
  if ((HEAP32[i15 >> 2] & 2 | 0) != 0) {
   i16 = HEAP32[i14 + 36 >> 2] | 0;
   if ((i16 | 0) != 0) {
    i14 = i16;
    continue;
   }
  }
  if ((i14 | 0) == (i12 | 0)) {
   break;
  }
  i16 = HEAP32[i14 + 28 >> 2] | 0;
  if ((i16 | 0) != 0) {
   i14 = i16;
   continue;
  }
  i14 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i14, i12) | 0;
  if ((i14 | 0) == 0) {
   break;
  }
 }
 i14 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i7 = i14 - 1 | 0;
   i12 = HEAP32[i2 >> 2] | 0;
   i8 = (i12 | 0) == 0 ? HEAP32[i9 >> 2] | 0 : i12;
   if ((HEAP8[i10] & 1) == 0) {
    i21 = HEAP16[(HEAP32[i8 + 8 >> 2] | 0) + (i7 << 1) >> 1] | 0;
   } else {
    i21 = HEAPU8[(HEAP32[i8 + 8 >> 2] | 0) + i7 | 0] | 0;
   }
   if (i21 << 16 >> 16 != 10) {
    break;
   }
   __ZN3WTF13StringBuilder6resizeEj(i5, i7);
  }
 } while (0);
 __ZN3WTF13StringBuilder11shrinkToFitEv(i5);
 i21 = HEAP32[i2 >> 2] | 0;
 if ((i21 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i5);
  i5 = HEAP32[i2 >> 2] | 0;
  HEAP32[i1 >> 2] = i5;
  if ((i5 | 0) != 0) {
   i22 = i5;
   i17 = 40;
  }
 } else {
  HEAP32[i1 >> 2] = i21;
  i22 = i21;
  i17 = 40;
 }
 if ((i17 | 0) == 40) {
  i17 = i22 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
 }
 i17 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i9 = i17 | 0;
   i22 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i22 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i9 >> 2] = i22;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[i2 >> 2] | 0;
 if ((i17 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i17 | 0;
 i22 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i22 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i17);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i22;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore26HTMLTextFormControlElement12setRangeTextERKN3WTF6StringEjjS4_Ri(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 if (i3 >>> 0 > i4 >>> 0) {
  HEAP32[i6 >> 2] = 1;
  STACKTOP = i7;
  return;
 }
 __ZNK7WebCore26HTMLTextFormControlElement14innerTextValueEv(i9, i1);
 i6 = i9 | 0;
 i10 = HEAP32[i6 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = 0;
 } else {
  i11 = HEAP32[i10 + 4 >> 2] | 0;
 }
 i10 = i2 | 0;
 i12 = HEAP32[i10 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = 0;
 } else {
  i13 = HEAP32[i12 + 4 >> 2] | 0;
 }
 i12 = i1 | 0;
 i14 = i1;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 456 >> 2] & 255](i12) | 0) {
   if ((HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 680 >> 2] | 0) != (i12 | 0)) {
    i15 = HEAP32[i1 + 96 >> 2] | 0;
    if ((i15 | 0) > -1) {
     i16 = i15;
     break;
    }
   }
   i16 = __ZNK7WebCore26HTMLTextFormControlElement21computeSelectionStartEv(i1) | 0;
  } else {
   i16 = 0;
  }
 } while (0);
 L17 : do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 456 >> 2] & 255](i12) | 0) {
   do {
    if ((HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 680 >> 2] | 0) != (i12 | 0)) {
     if ((HEAP32[i1 + 96 >> 2] | 0) <= -1) {
      break;
     }
     i17 = HEAP32[i1 + 100 >> 2] | 0;
     break L17;
    }
   } while (0);
   i17 = __ZNK7WebCore26HTMLTextFormControlElement19computeSelectionEndEv(i1) | 0;
  } else {
   i17 = 0;
  }
 } while (0);
 i12 = i11 >>> 0 < i3 >>> 0 ? i11 : i3;
 i3 = i11 >>> 0 < i4 >>> 0 ? i11 : i4;
 do {
  if (i12 >>> 0 < i3 >>> 0) {
   i4 = HEAP32[i6 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN3WTF10StringImpl7replaceEjjPS0_(i8, i4, i12, i3 - i12 | 0, HEAP32[i10 >> 2] | 0);
   i4 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = HEAP32[i8 >> 2];
   if ((i4 | 0) == 0) {
    break;
   }
   i11 = i4 | 0;
   i14 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i11 >> 2] = i14;
    break;
   }
  } else {
   __ZN3WTF6String6insertERKS0_j(i9, i2, i12);
  }
 } while (0);
 __ZN7WebCore26HTMLTextFormControlElement17setInnerTextValueERKN3WTF6StringE(i1, i9);
 i9 = i1 + 32 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i18 = i9 | 0;
 } else {
  i18 = HEAP32[i9 >> 2] | 0;
 }
 if ((HEAP32[i18 >> 2] | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 740 >> 2] & 127](i1);
  i18 = i5 | 0;
  do {
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i18 >> 2] | 0, H_BASE + 80 | 0) | 0) {
    i19 = i12;
    i20 = i13 + i12 | 0;
   } else {
    if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i18 >> 2] | 0, H_BASE + 72 | 0) | 0) {
     i19 = i12;
     i20 = i12;
     break;
    }
    if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i18 >> 2] | 0, H_BASE + 64 | 0) | 0) {
     i5 = i13 + i12 | 0;
     i19 = i5;
     i20 = i5;
     break;
    }
    i5 = i13 + (i12 - i3) | 0;
    if (i16 >>> 0 > i3 >>> 0) {
     i21 = i16 + i5 | 0;
    } else {
     i21 = i16 >>> 0 > i12 >>> 0 ? i12 : i16;
    }
    if (i17 >>> 0 > i3 >>> 0) {
     i19 = i21;
     i20 = i17 + i5 | 0;
     break;
    } else {
     i19 = i21;
     i20 = i17 >>> 0 > i12 >>> 0 ? i13 + i12 | 0 : i17;
     break;
    }
   }
  } while (0);
  __ZN7WebCore26HTMLTextFormControlElement17setSelectionRangeEiiNS_27TextFieldSelectionDirectionE(i1, i19, i20, 0);
 }
 i20 = HEAP32[i6 >> 2] | 0;
 if ((i20 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i6 = i20 | 0;
 i19 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i19 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i20);
  STACKTOP = i7;
  return;
 } else {
  HEAP32[i6 >> 2] = i19;
  STACKTOP = i7;
  return;
 }
}
function __ZN7WebCore26HTMLTextFormControlElement17setInnerTextValueERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] & 255](i1 | 0) | 0)) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore26HTMLTextFormControlElement14innerTextValueEv(i4, i1);
 i9 = i2 | 0;
 i10 = HEAP32[i4 >> 2] | 0;
 i4 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i9 >> 2] | 0, i10) | 0;
 do {
  if ((i10 | 0) != 0) {
   i11 = i10 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 do {
  if (i4) {
   if ((HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 732 >> 2] & 255](i1) | 0) + 36 >> 2] | 0) == 0) {
    i13 = 13;
   }
  } else {
   i10 = i1 + 32 | 0;
   if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
    i14 = i10 | 0;
   } else {
    i14 = HEAP32[i10 >> 2] | 0;
   }
   if ((HEAP32[i14 >> 2] | 0) == 0) {
    i13 = 13;
    break;
   }
   __ZNK7WebCore8Document21existingAXObjectCacheEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
   i13 = 13;
  }
 } while (0);
 do {
  if ((i13 | 0) == 13) {
   i14 = i1;
   i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 732 >> 2] & 255](i1) | 0;
   i10 = i5 | 0;
   HEAP32[i10 >> 2] = 0;
   __ZN7WebCore11HTMLElement12setInnerTextERKN3WTF6StringERi(i4, i2, i10);
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   if (!(__ZNK3WTF10StringImpl8endsWithEt(i10, 10) | 0)) {
    i10 = HEAP32[i9 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    }
    if (!(__ZNK3WTF10StringImpl8endsWithEt(i10, 13) | 0)) {
     break;
    }
   }
   i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 732 >> 2] & 255](i1) | 0;
   __ZN7WebCore13HTMLBRElement6createERNS_8DocumentE(i7, HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0);
   i14 = i6 | 0;
   i4 = i7 | 0;
   i12 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = 0;
   HEAP32[i14 >> 2] = i12;
   i12 = i8 | 0;
   HEAP32[i12 >> 2] = 0;
   __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i10, i6, i12) | 0;
   i12 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i14 = i12 + 8 | 0;
     i10 = i14 | 0;
     i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     HEAP32[i10 >> 2] = i11;
     if ((i11 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
    }
   } while (0);
   i12 = HEAP32[i4 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i14 = i12 + 8 | 0;
   i12 = i14 | 0;
   i11 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
  }
 } while (0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 616 >> 2] & 127](i1 | 0, 1);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore26HTMLTextFormControlElement20directionForFormDataEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 L1 : do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   while (1) {
    i6 = HEAP32[i5 + 48 >> 2] | 0;
    L5 : do {
     if ((i6 | 0) == 0) {
      i7 = __ZN3WTF8nullAtomE;
     } else {
      i8 = HEAP32[i6 + 4 >> 2] | 0;
      if ((i8 & 1 | 0) == 0) {
       i9 = i8 >>> 1 & 134217727;
       i10 = i6 + 20 | 0;
      } else {
       i8 = i6 + 24 | 0;
       i9 = HEAP32[i8 + 8 >> 2] | 0;
       i10 = HEAP32[i8 >> 2] | 0;
      }
      if ((i9 | 0) == 0) {
       i7 = __ZN3WTF8nullAtomE;
       break;
      }
      i8 = HEAP32[__ZN7WebCore9HTMLNames7dirAttrE >> 2] | 0;
      i11 = i8 + 12 | 0;
      i12 = i8 + 16 | 0;
      i13 = 0;
      while (1) {
       i14 = i10 + (i13 << 3) | 0;
       i15 = HEAP32[i14 >> 2] | 0;
       if ((i15 | 0) == (i8 | 0)) {
        break;
       }
       if ((HEAP32[i15 + 12 >> 2] | 0) == (HEAP32[i11 >> 2] | 0)) {
        if ((HEAP32[i15 + 16 >> 2] | 0) == (HEAP32[i12 >> 2] | 0)) {
         break;
        }
       }
       i15 = i13 + 1 | 0;
       if (i15 >>> 0 < i9 >>> 0) {
        i13 = i15;
       } else {
        i7 = __ZN3WTF8nullAtomE;
        break L5;
       }
      }
      i7 = (i14 | 0) == 0 ? __ZN3WTF8nullAtomE : i10 + (i13 << 3) + 4 | 0;
     }
    } while (0);
    i16 = i7 | 0;
    i6 = HEAP32[i16 >> 2] | 0;
    if ((i6 | 0) == 0) {
     i17 = i5;
    } else {
     if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(i6, H_BASE + 32 | 0) | 0) {
      break;
     }
     if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i16 >> 2] | 0, H_BASE + 24 | 0) | 0) {
      break;
     }
     if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i16 >> 2] | 0, H_BASE + 16 | 0) | 0) {
      i18 = 20;
      break;
     } else {
      i17 = i5;
     }
    }
    while (1) {
     i6 = HEAP32[i17 + 16 >> 2] | 0;
     if ((i6 | 0) == 0) {
      break L1;
     }
     i12 = HEAP32[i6 + 12 >> 2] | 0;
     if ((i12 & 4 | 0) == 0) {
      break L1;
     }
     i17 = i6;
     i6 = (i12 & 16 | 0) != 0;
     i19 = i6 ? i17 : 0;
     if (i6) {
      break;
     }
    }
    if ((i19 | 0) == 0) {
     break L1;
    } else {
     i5 = i19;
    }
   }
   if ((i18 | 0) == 20) {
    i6 = (__ZNK7WebCore11HTMLElement35directionalityIfhasDirAutoAttributeERb(i5, i4) | 0) == 0;
    __ZN3WTF6StringC1EPKc(i1, (i6 ? H_BASE + 32 : H_BASE + 24) | 0);
    STACKTOP = i3;
    return;
   }
   i6 = HEAP32[i16 >> 2] | 0;
   HEAP32[i1 >> 2] = i6;
   if ((i6 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i12 = i6 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i1, H_BASE + 24 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore16VisibleSelectionaSEOS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i2 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 + 8 | 0;
   i3 = i4 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i5 = i2 + 8 | 0;
 i4 = i1 + 8 | 0;
 i6 = i4;
 i3 = HEAP32[i6 >> 2] & -8 | HEAP32[i5 >> 2] & 7;
 HEAP32[i6 >> 2] = i3;
 HEAP8[i4] = i3 & 255 & -9 | HEAP8[i5] & 8;
 i5 = i2 + 12 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = i1 + 12 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i3;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 + 8 | 0;
   i5 = i3 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 i4 = i2 + 20 | 0;
 i3 = i1 + 20 | 0;
 i6 = i3;
 i5 = HEAP32[i6 >> 2] & -8 | HEAP32[i4 >> 2] & 7;
 HEAP32[i6 >> 2] = i5;
 HEAP8[i3] = i5 & 255 & -9 | HEAP8[i4] & 8;
 i4 = i2 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i4 = i1 + 24 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 8 | 0;
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 i3 = i2 + 32 | 0;
 i5 = i1 + 32 | 0;
 i6 = i5;
 i4 = HEAP32[i6 >> 2] & -8 | HEAP32[i3 >> 2] & 7;
 HEAP32[i6 >> 2] = i4;
 HEAP8[i5] = i4 & 255 & -9 | HEAP8[i3] & 8;
 i3 = i2 + 36 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 + 36 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 + 8 | 0;
   i3 = i4 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 i5 = i2 + 44 | 0;
 i4 = i1 + 44 | 0;
 i6 = i4;
 i3 = HEAP32[i6 >> 2] & -8 | HEAP32[i5 >> 2] & 7;
 HEAP32[i6 >> 2] = i3;
 HEAP8[i4] = i3 & 255 & -9 | HEAP8[i5] & 8;
 HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 48 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i2 + 52 >> 2];
 i5 = i2 + 56 | 0;
 i2 = i1 + 56 | 0;
 i3 = HEAP8[i2] & -2 | HEAP8[i5] & 1;
 HEAP8[i2] = i3;
 HEAP8[i2] = i3 & -3 | HEAP8[i5] & 2;
 return i1 | 0;
}
function __ZNK7WebCore26HTMLTextFormControlElement26placeholderShouldBeVisibleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = i1;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 708 >> 2] & 255](i1) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 744 >> 2] & 255](i1) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 748 >> 2] & 255](i1) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 L10 : do {
  if ((i2 | 0) == 0) {
   i4 = __ZN3WTF8nullAtomE;
  } else {
   i5 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i5 & 1 | 0) == 0) {
    i6 = i5 >>> 1 & 134217727;
    i7 = i2 + 20 | 0;
   } else {
    i5 = i2 + 24 | 0;
    i6 = HEAP32[i5 + 8 >> 2] | 0;
    i7 = HEAP32[i5 >> 2] | 0;
   }
   if ((i6 | 0) == 0) {
    i4 = __ZN3WTF8nullAtomE;
    break;
   }
   i5 = HEAP32[__ZN7WebCore9HTMLNames15placeholderAttrE >> 2] | 0;
   i8 = i5 + 12 | 0;
   i9 = i5 + 16 | 0;
   i10 = 0;
   while (1) {
    i11 = i7 + (i10 << 3) | 0;
    i12 = HEAP32[i11 >> 2] | 0;
    if ((i12 | 0) == (i5 | 0)) {
     break;
    }
    if ((HEAP32[i12 + 12 >> 2] | 0) == (HEAP32[i8 >> 2] | 0)) {
     if ((HEAP32[i12 + 16 >> 2] | 0) == (HEAP32[i9 >> 2] | 0)) {
      break;
     }
    }
    i12 = i10 + 1 | 0;
    if (i12 >>> 0 < i6 >>> 0) {
     i10 = i12;
    } else {
     i4 = __ZN3WTF8nullAtomE;
     break L10;
    }
   }
   i4 = (i11 | 0) == 0 ? __ZN3WTF8nullAtomE : i7 + (i10 << 3) + 4 | 0;
  }
 } while (0);
 i7 = HEAP32[i4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((__ZN3WTF10StringImpl4findEPFbtEj(i7, F_BASE_ii + 106 | 0, 0) | 0) == -1) {
  i3 = 0;
  return i3 | 0;
 }
 i7 = i1 + 12 | 0;
 do {
  if ((HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 680 >> 2] | 0) == (i1 | 0)) {
   i4 = (HEAP32[i7 >> 2] & 2048 | 0) == 0;
   i11 = i1 + 32 | 0;
   if (i4) {
    i13 = i11 | 0;
   } else {
    i13 = HEAP32[i11 >> 2] | 0;
   }
   if ((HEAP32[i13 >> 2] | 0) == 0) {
    i3 = 0;
    return i3 | 0;
   }
   if (i4) {
    i14 = i11 | 0;
   } else {
    i14 = HEAP32[i11 >> 2] | 0;
   }
   i4 = __ZNK7WebCore12RenderObject5themeEv(HEAP32[i14 >> 2] | 0) | 0;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 152 >> 2] & 255](i4) | 0) {
    i15 = i11;
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   i15 = i1 + 32 | 0;
  }
 } while (0);
 i1 = (HEAP32[i7 >> 2] & 2048 | 0) == 0;
 if (i1) {
  i16 = i15 | 0;
 } else {
  i16 = HEAP32[i15 >> 2] | 0;
 }
 if ((HEAP32[i16 >> 2] | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 if (i1) {
  i17 = i15 | 0;
 } else {
  i17 = HEAP32[i15 >> 2] | 0;
 }
 i3 = (HEAP32[(HEAP32[(HEAP32[i17 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) == 0;
 return i3 | 0;
}
function __ZNK7WebCore26HTMLTextFormControlElement12selectedTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i6 = i2;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 456 >> 2] & 255](i5) | 0)) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 728 >> 2] & 127](i4, i2);
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 456 >> 2] & 255](i5) | 0) {
   if ((HEAP32[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 680 >> 2] | 0) != (i5 | 0)) {
    i7 = HEAP32[i2 + 96 >> 2] | 0;
    if ((i7 | 0) > -1) {
     i8 = i7;
     break;
    }
   }
   i8 = __ZNK7WebCore26HTMLTextFormControlElement21computeSelectionStartEv(i2) | 0;
  } else {
   i8 = 0;
  }
 } while (0);
 L11 : do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 456 >> 2] & 255](i5) | 0) {
   do {
    if ((HEAP32[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 680 >> 2] | 0) != (i5 | 0)) {
     if ((HEAP32[i2 + 96 >> 2] | 0) <= -1) {
      break;
     }
     i9 = HEAP32[i2 + 100 >> 2] | 0;
     break L11;
    }
   } while (0);
   i9 = __ZNK7WebCore26HTMLTextFormControlElement19computeSelectionEndEv(i2) | 0;
  } else {
   i9 = 0;
  }
 } while (0);
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 456 >> 2] & 255](i5) | 0) {
   if ((HEAP32[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 680 >> 2] | 0) != (i5 | 0)) {
    i7 = HEAP32[i2 + 96 >> 2] | 0;
    if ((i7 | 0) > -1) {
     i10 = i7;
     break;
    }
   }
   i10 = __ZNK7WebCore26HTMLTextFormControlElement21computeSelectionStartEv(i2) | 0;
  } else {
   i10 = 0;
  }
 } while (0);
 __ZNK3WTF6String9substringEjj(i1, i4, i8, i9 - i10 | 0);
 i10 = HEAP32[i4 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i10 | 0;
 i9 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i9 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i10);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i9;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore26HTMLTextFormControlElement17setSelectionStartEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 | 0;
 i4 = i1;
 L1 : do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 456 >> 2] & 255](i3) | 0) {
   do {
    if ((HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 680 >> 2] | 0) != (i3 | 0)) {
     if ((HEAP32[i1 + 96 >> 2] | 0) <= -1) {
      break;
     }
     i5 = HEAP32[i1 + 100 >> 2] | 0;
     break L1;
    }
   } while (0);
   i5 = __ZNK7WebCore26HTMLTextFormControlElement19computeSelectionEndEv(i1) | 0;
  } else {
   i5 = 0;
  }
 } while (0);
 i6 = (i5 | 0) > (i2 | 0) ? i5 : i2;
 L8 : do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 456 >> 2] & 255](i3) | 0) {
   i5 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
   do {
    if ((HEAP32[i5 + 680 >> 2] | 0) != (i3 | 0)) {
     if ((HEAP32[i1 + 96 >> 2] | 0) <= -1) {
      break;
     }
     i7 = __ZN7WebCoreL15directionStringENS_27TextFieldSelectionDirectionE(HEAP32[i1 + 104 >> 2] | 0) | 0;
     break L8;
    }
   } while (0);
   i8 = HEAP32[i5 + 332 >> 2] | 0;
   do {
    if ((i8 | 0) == 0) {
     i9 = 0;
    } else {
     i10 = HEAP8[(HEAP32[i8 + 468 >> 2] | 0) + 88 | 0] | 0;
     if ((i10 & 2) == 0) {
      i9 = 0;
      break;
     }
     i9 = (i10 & 1) != 0 ? 1 : 2;
    }
   } while (0);
   i7 = __ZN7WebCoreL15directionStringENS_27TextFieldSelectionDirectionE(i9) | 0;
  } else {
   i7 = __ZN7WebCoreL15directionStringENS_27TextFieldSelectionDirectionE(0) | 0;
  }
 } while (0);
 i9 = i7 | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i9 >> 2] | 0, H_BASE + 56 | 0) | 0) {
  i11 = 1;
  __ZN7WebCore26HTMLTextFormControlElement17setSelectionRangeEiiNS_27TextFieldSelectionDirectionE(i1, i2, i6, i11);
  return;
 }
 i7 = __ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i9 >> 2] | 0, H_BASE + 40 | 0) | 0;
 i11 = i7 ? 2 : 0;
 __ZN7WebCore26HTMLTextFormControlElement17setSelectionRangeEiiNS_27TextFieldSelectionDirectionE(i1, i2, i6, i11);
 return;
}
function __ZN7WebCore26HTMLTextFormControlElement16selectionChangedEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 32 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i6 = i5 | 0;
 } else {
  i6 = HEAP32[i5 >> 2] | 0;
 }
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] & 255](i1 | 0) | 0)) {
  STACKTOP = i3;
  return;
 }
 i6 = __ZNK7WebCore26HTMLTextFormControlElement21computeSelectionStartEv(i1) | 0;
 i5 = __ZNK7WebCore26HTMLTextFormControlElement19computeSelectionEndEv(i1) | 0;
 i7 = (HEAP32[i1 + 20 >> 2] | 0) + 8 | 0;
 i8 = HEAP32[(HEAP32[i7 >> 2] | 0) + 332 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = 0;
  } else {
   i10 = HEAP8[(HEAP32[i8 + 468 >> 2] | 0) + 88 | 0] | 0;
   if ((i10 & 2) == 0) {
    i9 = 0;
    break;
   }
   i9 = (i10 & 1) != 0 ? 1 : 2;
  }
 } while (0);
 HEAP32[i1 + 96 >> 2] = i6;
 HEAP32[i1 + 100 >> 2] = i5;
 HEAP32[i1 + 104 >> 2] = i9;
 i9 = HEAP32[(HEAP32[i7 >> 2] | 0) + 332 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[(HEAP32[i9 + 468 >> 2] | 0) + 84 >> 2] | 0) != 2 | i2 ^ 1) {
  STACKTOP = i3;
  return;
 }
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 i9 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 324 | 0;
 i7 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i7, i9, 1, 0);
 i9 = i4 | 0;
 HEAP32[i9 >> 2] = i7;
 FUNCTION_TABLE_iii[i2 & 31](i1 | 0, i4) | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i4 + 8 | 0;
 i4 = i9 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i9 - 8 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 127](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore26HTMLTextFormControlElement15setSelectionEndEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 | 0;
 i4 = i1;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 456 >> 2] & 255](i3) | 0) {
   if ((HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 680 >> 2] | 0) != (i3 | 0)) {
    i5 = HEAP32[i1 + 96 >> 2] | 0;
    if ((i5 | 0) > -1) {
     i6 = i5;
     break;
    }
   }
   i6 = __ZNK7WebCore26HTMLTextFormControlElement21computeSelectionStartEv(i1) | 0;
  } else {
   i6 = 0;
  }
 } while (0);
 i5 = (i6 | 0) < (i2 | 0) ? i6 : i2;
 L7 : do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 456 >> 2] & 255](i3) | 0) {
   i6 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
   do {
    if ((HEAP32[i6 + 680 >> 2] | 0) != (i3 | 0)) {
     if ((HEAP32[i1 + 96 >> 2] | 0) <= -1) {
      break;
     }
     i7 = __ZN7WebCoreL15directionStringENS_27TextFieldSelectionDirectionE(HEAP32[i1 + 104 >> 2] | 0) | 0;
     break L7;
    }
   } while (0);
   i8 = HEAP32[i6 + 332 >> 2] | 0;
   do {
    if ((i8 | 0) == 0) {
     i9 = 0;
    } else {
     i10 = HEAP8[(HEAP32[i8 + 468 >> 2] | 0) + 88 | 0] | 0;
     if ((i10 & 2) == 0) {
      i9 = 0;
      break;
     }
     i9 = (i10 & 1) != 0 ? 1 : 2;
    }
   } while (0);
   i7 = __ZN7WebCoreL15directionStringENS_27TextFieldSelectionDirectionE(i9) | 0;
  } else {
   i7 = __ZN7WebCoreL15directionStringENS_27TextFieldSelectionDirectionE(0) | 0;
  }
 } while (0);
 i9 = i7 | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i9 >> 2] | 0, H_BASE + 56 | 0) | 0) {
  i11 = 1;
  __ZN7WebCore26HTMLTextFormControlElement17setSelectionRangeEiiNS_27TextFieldSelectionDirectionE(i1, i5, i2, i11);
  return;
 }
 i7 = __ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i9 >> 2] | 0, H_BASE + 40 | 0) | 0;
 i11 = i7 ? 2 : 0;
 __ZN7WebCore26HTMLTextFormControlElement17setSelectionRangeEiiNS_27TextFieldSelectionDirectionE(i1, i5, i2, i11);
 return;
}
function __ZNK7WebCore26HTMLTextFormControlElement21computeSelectionStartEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i7 = HEAP32[i5 + 468 >> 2] | 0;
 i5 = i4 | 0;
 i8 = HEAP32[i7 + 56 >> 2] | 0;
 HEAP32[i5 >> 2] = i8;
 if ((i8 | 0) == 0) {
  i9 = i4 + 8 | 0;
  i10 = 0;
  i11 = i9;
  i12 = i9;
 } else {
  i9 = i8 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i9 = i4 + 8 | 0;
  i8 = i9;
  i10 = HEAP32[i8 >> 2] & -8;
  i11 = i9;
  i12 = i8;
 }
 HEAP32[i4 + 4 >> 2] = HEAP32[i7 + 60 >> 2];
 i8 = HEAP32[i7 + 64 >> 2] | 0;
 i7 = i10 | i8 & 7;
 HEAP32[i12 >> 2] = i7;
 HEAP8[i11] = i7 & 255 & -9 | i8 & 8;
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i3, i4, 1);
 i4 = __ZNK7WebCore26HTMLTextFormControlElement23indexForVisiblePositionERKNS_15VisiblePositionE(i1, i3) | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 + 8 | 0;
   i8 = i3 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i6 = i4;
  STACKTOP = i2;
  return i6 | 0;
 }
 i5 = i1 + 8 | 0;
 i1 = i5 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  i6 = i4;
  STACKTOP = i2;
  return i6 | 0;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  i6 = i4;
  STACKTOP = i2;
  return i6 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 i6 = i4;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZNK7WebCore26HTMLTextFormControlElement19computeSelectionEndEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i7 = HEAP32[i5 + 468 >> 2] | 0;
 i5 = i4 | 0;
 i8 = HEAP32[i7 + 68 >> 2] | 0;
 HEAP32[i5 >> 2] = i8;
 if ((i8 | 0) == 0) {
  i9 = i4 + 8 | 0;
  i10 = 0;
  i11 = i9;
  i12 = i9;
 } else {
  i9 = i8 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i9 = i4 + 8 | 0;
  i8 = i9;
  i10 = HEAP32[i8 >> 2] & -8;
  i11 = i9;
  i12 = i8;
 }
 HEAP32[i4 + 4 >> 2] = HEAP32[i7 + 72 >> 2];
 i8 = HEAP32[i7 + 76 >> 2] | 0;
 i7 = i10 | i8 & 7;
 HEAP32[i12 >> 2] = i7;
 HEAP8[i11] = i7 & 255 & -9 | i8 & 8;
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i3, i4, 1);
 i4 = __ZNK7WebCore26HTMLTextFormControlElement23indexForVisiblePositionERKNS_15VisiblePositionE(i1, i3) | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 + 8 | 0;
   i8 = i3 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i6 = i4;
  STACKTOP = i2;
  return i6 | 0;
 }
 i5 = i1 + 8 | 0;
 i1 = i5 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  i6 = i4;
  STACKTOP = i2;
  return i6 | 0;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  i6 = i4;
  STACKTOP = i2;
  return i6 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 i6 = i4;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZN7WebCore26HTMLTextFormControlElement30dispatchFormControlChangeEventEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 728 >> 2] & 127](i3, i1);
 i6 = i1 + 88 | 0;
 i7 = i3 | 0;
 i3 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i6 >> 2] | 0, HEAP32[i7 >> 2] | 0) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
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
 i8 = i1 | 0;
 do {
  if (!i3) {
   __ZN7WebCore22HTMLFormControlElement19dispatchChangeEventEv(i8);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 728 >> 2] & 127](i4, i1);
   i9 = i4 | 0;
   i7 = HEAP32[i9 >> 2] | 0;
   if ((i7 | 0) != 0) {
    i10 = i7 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   }
   i10 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i7;
   do {
    if ((i10 | 0) != 0) {
     i7 = i10 | 0;
     i11 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i7 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i11 = i10 | 0;
   i7 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i11 >> 2] = i7;
    break;
   }
  }
 } while (0);
 __ZN7WebCore22HTMLFormControlElement41setChangedSinceLastFormControlChangeEventEb(i8, 0);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore26HTMLTextFormControlElement23indexForVisiblePositionERKNS_15VisiblePositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 if ((i6 | 0) == 0) {
  i7 = i4 + 8 | 0;
  i8 = 0;
  i9 = i7;
  i10 = i7;
 } else {
  i7 = i6 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  i7 = i4 + 8 | 0;
  i6 = i7;
  i8 = HEAP32[i6 >> 2] & -8;
  i9 = i7;
  i10 = i6;
 }
 HEAP32[i4 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = i8 | i6 & 7;
 HEAP32[i10 >> 2] = i7;
 HEAP8[i9] = i7 & 255 & -9 | i6 & 8;
 i6 = __ZNK7WebCore8Position13containerNodeEv(i4) | 0;
 do {
  if ((i6 | 0) == 0) {
   i11 = 0;
  } else {
   i4 = __ZNK7WebCore4Node10shadowHostEv(i6) | 0;
   if ((i4 | 0) == 0) {
    i11 = 0;
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 456 >> 2] & 255](i4) | 0)) {
    i11 = 0;
    break;
   }
   i11 = i4;
  }
 } while (0);
 i6 = (i11 | 0) == (i1 | 0);
 i11 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i5 = i11 + 8 | 0;
   i4 = i5 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 if (!i6) {
  i12 = 0;
  STACKTOP = i3;
  return i12 | 0;
 }
 i12 = __ZN7WebCore23indexForVisiblePositionEPNS_4NodeERKNS_15VisiblePositionEb(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 732 >> 2] & 255](i1) | 0, i2, 0) | 0;
 STACKTOP = i3;
 return i12 | 0;
}
function __ZN7WebCore26HTMLTextFormControlElement18dispatchFocusEventEN3WTF10PassRefPtrINS_7ElementEEENS_14FocusDirectionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 708 >> 2] & 255](i1) | 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 708 >> 2] & 255](i1) | 0)) {
    break;
   }
   i7 = i1;
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 712 >> 2] & 255](i1) | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 736 >> 2] & 127](i1);
   }
   i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 712 >> 2] & 255](i1) | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i7 = __ZNK7WebCore26HTMLTextFormControlElement26placeholderShouldBeVisibleEv(i1) | 0;
   __ZN7WebCore13StyledElement22setInlineStylePropertyENS_13CSSPropertyIDENS_10CSSValueIDEb(i8 | 0, 162, i7 ? 309 : 4, 0) | 0;
  }
 } while (0);
 i6 = i2 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 752 >> 2] & 31](i1, HEAP32[i6 >> 2] | 0, i3);
 i2 = i5 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i2 >> 2] = i7;
 __ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE(i1 | 0, i5, i3);
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i2 = i3 + 8 | 0;
 i3 = i2 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore26HTMLTextFormControlElement17dispatchBlurEventEN3WTF10PassRefPtrINS_7ElementEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 708 >> 2] & 255](i1) | 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 708 >> 2] & 255](i1) | 0)) {
    break;
   }
   i6 = i1;
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 712 >> 2] & 255](i1) | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 736 >> 2] & 127](i1);
   }
   i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 712 >> 2] & 255](i1) | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i6 = __ZNK7WebCore26HTMLTextFormControlElement26placeholderShouldBeVisibleEv(i1) | 0;
   __ZN7WebCore13StyledElement22setInlineStylePropertyENS_13CSSPropertyIDENS_10CSSValueIDEb(i7 | 0, 162, i6 ? 309 : 4, 0) | 0;
  }
 } while (0);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 756 >> 2] & 127](i1);
 i5 = i4 | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i5 >> 2] = i2;
 __ZN7WebCore22HTMLFormControlElement17dispatchBlurEventEN3WTF10PassRefPtrINS_7ElementEEE(i1 | 0, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i4 + 8 | 0;
 i4 = i5 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore26HTMLTextFormControlElement12setRangeTextERKN3WTF6StringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 i7 = HEAP32[i6 + 720 >> 2] | 0;
 i8 = i1 | 0;
 i9 = i1;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[i6 + 456 >> 2] & 255](i8) | 0) {
   if ((HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 680 >> 2] | 0) != (i8 | 0)) {
    i10 = HEAP32[i1 + 96 >> 2] | 0;
    if ((i10 | 0) > -1) {
     i11 = i10;
     break;
    }
   }
   i11 = __ZNK7WebCore26HTMLTextFormControlElement21computeSelectionStartEv(i1) | 0;
  } else {
   i11 = 0;
  }
 } while (0);
 L7 : do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 456 >> 2] & 255](i8) | 0) {
   do {
    if ((HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 680 >> 2] | 0) != (i8 | 0)) {
     if ((HEAP32[i1 + 96 >> 2] | 0) <= -1) {
      break;
     }
     i12 = HEAP32[i1 + 100 >> 2] | 0;
     break L7;
    }
   } while (0);
   i12 = __ZNK7WebCore26HTMLTextFormControlElement19computeSelectionEndEv(i1) | 0;
  } else {
   i12 = 0;
  }
 } while (0);
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = 0;
 FUNCTION_TABLE_viiiiii[i7 & 3](i1, i2, i11, i12, i5, i3);
 i3 = HEAP32[i8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = i3 | 0;
 i5 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i8 >> 2] = i5;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore26HTMLTextFormControlElement21setSelectionDirectionERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 | 0;
 i4 = i1;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 456 >> 2] & 255](i3) | 0) {
   if ((HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 680 >> 2] | 0) != (i3 | 0)) {
    i5 = HEAP32[i1 + 96 >> 2] | 0;
    if ((i5 | 0) > -1) {
     i6 = i5;
     break;
    }
   }
   i6 = __ZNK7WebCore26HTMLTextFormControlElement21computeSelectionStartEv(i1) | 0;
  } else {
   i6 = 0;
  }
 } while (0);
 L7 : do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 456 >> 2] & 255](i3) | 0) {
   do {
    if ((HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 680 >> 2] | 0) != (i3 | 0)) {
     if ((HEAP32[i1 + 96 >> 2] | 0) <= -1) {
      break;
     }
     i7 = HEAP32[i1 + 100 >> 2] | 0;
     break L7;
    }
   } while (0);
   i7 = __ZNK7WebCore26HTMLTextFormControlElement19computeSelectionEndEv(i1) | 0;
  } else {
   i7 = 0;
  }
 } while (0);
 i3 = i2 | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 56 | 0) | 0) {
  i8 = 1;
  __ZN7WebCore26HTMLTextFormControlElement17setSelectionRangeEiiNS_27TextFieldSelectionDirectionE(i1, i6, i7, i8);
  return;
 }
 i2 = __ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 40 | 0) | 0;
 i8 = i2 ? 2 : 0;
 __ZN7WebCore26HTMLTextFormControlElement17setSelectionRangeEiiNS_27TextFieldSelectionDirectionE(i1, i6, i7, i8);
 return;
}
function __ZN7WebCoreL15directionStringENS_27TextFieldSelectionDirectionE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 if (!(HEAP8[H_BASE + 984 | 0] | 0)) {
  i6 = __Znwj(4) | 0;
  __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i5, H_BASE + 8 | 0, 4);
  i7 = i5 | 0;
  i5 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i6 >> 2] = i5;
  HEAP32[H_BASE + 1008 >> 2] = i6;
  HEAP8[H_BASE + 984 | 0] = 1;
 }
 if (!(HEAP8[H_BASE + 976 | 0] | 0)) {
  i6 = __Znwj(4) | 0;
  __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i4, H_BASE + 56 | 0, 7);
  i5 = i4 | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  HEAP32[i6 >> 2] = i4;
  HEAP32[H_BASE + 1e3 >> 2] = i6;
  HEAP8[H_BASE + 976 | 0] = 1;
 }
 if (!(HEAP8[H_BASE + 968 | 0] | 0)) {
  i6 = __Znwj(4) | 0;
  __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i3, H_BASE + 40 | 0, 8);
  i4 = i3 | 0;
  i3 = HEAP32[i4 >> 2] | 0;
  HEAP32[i4 >> 2] = 0;
  HEAP32[i6 >> 2] = i3;
  HEAP32[H_BASE + 992 >> 2] = i6;
  HEAP8[H_BASE + 968 | 0] = 1;
 }
 if ((i1 | 0) == 1) {
  i8 = H_BASE + 1e3;
  i9 = HEAP32[i8 >> 2] | 0;
  STACKTOP = i2;
  return i9 | 0;
 } else if ((i1 | 0) == 2) {
  i8 = H_BASE + 992;
  i9 = HEAP32[i8 >> 2] | 0;
  STACKTOP = i2;
  return i9 | 0;
 } else {
  i8 = H_BASE + 1008;
  i9 = HEAP32[i8 >> 2] | 0;
  STACKTOP = i2;
  return i9 | 0;
 }
 return 0;
}
function __ZN7WebCore26HTMLTextFormControlElement12insertedIntoERNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN7WebCore31HTMLFormControlElementWithState12insertedIntoERNS_13ContainerNodeE(i1 | 0, i2) | 0;
 if ((HEAP32[i2 + 12 >> 2] & 256 | 0) == 0) {
  STACKTOP = i3;
  return 0;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 728 >> 2] & 127](i4, i1);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
  if ((i5 | 0) == 0) {
   i6 = 0;
  } else {
   i7 = i5;
   i8 = 4;
  }
 } else {
  i7 = i4;
  i8 = 4;
 }
 if ((i8 | 0) == 4) {
  i8 = i7 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  i6 = i7;
 }
 i7 = i1 + 88 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i6;
 do {
  if ((i1 | 0) != 0) {
   i6 = i1 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return 0;
 }
 i2 = i1 | 0;
 i7 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return 0;
 } else {
  HEAP32[i2 >> 2] = i7;
  STACKTOP = i3;
  return 0;
 }
 return 0;
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
function __ZNK7WebCore26HTMLTextFormControlElement18isPlaceholderEmptyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 L1 : do {
  if ((i2 | 0) == 0) {
   i3 = __ZN3WTF8nullAtomE;
  } else {
   i1 = HEAP32[i2 + 4 >> 2] | 0;
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
    break;
   }
   i1 = HEAP32[__ZN7WebCore9HTMLNames15placeholderAttrE >> 2] | 0;
   i6 = i1 + 12 | 0;
   i7 = i1 + 16 | 0;
   i8 = 0;
   while (1) {
    i9 = i5 + (i8 << 3) | 0;
    i10 = HEAP32[i9 >> 2] | 0;
    if ((i10 | 0) == (i1 | 0)) {
     break;
    }
    if ((HEAP32[i10 + 12 >> 2] | 0) == (HEAP32[i6 >> 2] | 0)) {
     if ((HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i7 >> 2] | 0)) {
      break;
     }
    }
    i10 = i8 + 1 | 0;
    if (i10 >>> 0 < i4 >>> 0) {
     i8 = i10;
    } else {
     i3 = __ZN3WTF8nullAtomE;
     break L1;
    }
   }
   i3 = (i9 | 0) == 0 ? __ZN3WTF8nullAtomE : i5 + (i8 << 3) + 4 | 0;
  }
 } while (0);
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i11 = 1;
  return i11 | 0;
 }
 i11 = (__ZN3WTF10StringImpl4findEPFbtEj(i5, F_BASE_ii + 106 | 0, 0) | 0) == -1;
 return i11 | 0;
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
function __ZN7WebCore26HTMLTextFormControlElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((HEAP32[i2 >> 2] | 0) != (HEAP32[__ZN7WebCore9HTMLNames15placeholderAttrE >> 2] | 0)) {
  __ZN7WebCore22HTMLFormControlElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, i2, i3);
  return;
 }
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 708 >> 2] & 255](i1) | 0) {
   i3 = i1;
   FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 712 >> 2] & 255](i1) | 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 736 >> 2] & 127](i1);
   i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 712 >> 2] & 255](i1) | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   i3 = __ZNK7WebCore26HTMLTextFormControlElement26placeholderShouldBeVisibleEv(i1) | 0;
   __ZN7WebCore13StyledElement22setInlineStylePropertyENS_13CSSPropertyIDENS_10CSSValueIDEb(i2 | 0, 162, i3 ? 309 : 4, 0) | 0;
  }
 } while (0);
 __ZN7WebCore15FeatureObserver7observeEPNS_8DocumentENS0_7FeatureE(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0, 45);
 return;
}
function __ZNK7WebCore26HTMLTextFormControlElement18selectionDirectionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] & 255](i2) | 0)) {
  i3 = __ZN7WebCoreL15directionStringENS_27TextFieldSelectionDirectionE(0) | 0;
  return i3 | 0;
 }
 i4 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 do {
  if ((HEAP32[i4 + 680 >> 2] | 0) != (i2 | 0)) {
   if ((HEAP32[i1 + 96 >> 2] | 0) <= -1) {
    break;
   }
   i3 = __ZN7WebCoreL15directionStringENS_27TextFieldSelectionDirectionE(HEAP32[i1 + 104 >> 2] | 0) | 0;
   return i3 | 0;
  }
 } while (0);
 i1 = HEAP32[i4 + 332 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i5 = 0;
  } else {
   i4 = HEAP8[(HEAP32[i1 + 468 >> 2] | 0) + 88 | 0] | 0;
   if ((i4 & 2) == 0) {
    i5 = 0;
    break;
   }
   i5 = (i4 & 1) != 0 ? 1 : 2;
  }
 } while (0);
 i3 = __ZN7WebCoreL15directionStringENS_27TextFieldSelectionDirectionE(i5) | 0;
 return i3 | 0;
}
function __ZN7WebCore26HTMLTextFormControlElement19defaultEventHandlerEPNS_5EventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 do {
  if ((HEAP32[i2 + 12 >> 2] | 0) == (HEAP32[i3 + 432 >> 2] | 0)) {
   i4 = (HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0;
   i5 = i1 + 32 | 0;
   if (i4) {
    i6 = i5 | 0;
   } else {
    i6 = HEAP32[i5 >> 2] | 0;
   }
   if ((HEAP32[i6 >> 2] | 0) == 0) {
    break;
   }
   if (i4) {
    i7 = i5 | 0;
   } else {
    i7 = HEAP32[i5 >> 2] | 0;
   }
   i5 = HEAP32[i7 >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 208 >> 2] & 255](i5) | 0)) {
    break;
   }
   HEAP8[i1 + 92 | 0] = 1;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 740 >> 2] & 127](i1);
   return;
  }
 } while (0);
 __ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE(i1 | 0, i2);
 return;
}
function __ZNK7WebCore26HTMLTextFormControlElement25childShouldCreateRendererERKNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 do {
  if ((HEAP32[i2 + 12 >> 2] & 1048580 | 0) == 1048580) {
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 232 >> 2] & 255](i2) | 0) == 0) {
    break;
   }
   i3 = __ZNK7WebCore7Element25childShouldCreateRendererERKNS_4NodeE(i1 | 0, i2) | 0;
   return i3 | 0;
  }
 } while (0);
 i4 = HEAP32[i2 + 16 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i4 + 12 >> 2] & 4096 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i4 | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore7Element25childShouldCreateRendererERKNS_4NodeE(i1 | 0, i2) | 0;
 return i3 | 0;
}
function __ZN7WebCore26HTMLTextFormControlElement27updatePlaceholderVisibilityEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 708 >> 2] & 255](i1) | 0)) {
  return;
 }
 i3 = i1;
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 712 >> 2] & 255](i1) | 0) == 0 | i2) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 736 >> 2] & 127](i1);
 }
 i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 712 >> 2] & 255](i1) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = __ZNK7WebCore26HTMLTextFormControlElement26placeholderShouldBeVisibleEv(i1) | 0;
 __ZN7WebCore13StyledElement22setInlineStylePropertyENS_13CSSPropertyIDENS_10CSSValueIDEb(i2 | 0, 162, i3 ? 309 : 4, 0) | 0;
 return;
}
function __ZNK7WebCore26HTMLTextFormControlElement14selectionStartEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] & 255](i2) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 do {
  if ((HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 680 >> 2] | 0) != (i2 | 0)) {
   i4 = HEAP32[i1 + 96 >> 2] | 0;
   if ((i4 | 0) > -1) {
    i3 = i4;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = __ZNK7WebCore26HTMLTextFormControlElement21computeSelectionStartEv(i1) | 0;
 return i3 | 0;
}
function __ZNK7WebCore26HTMLTextFormControlElement12selectionEndEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] & 255](i2) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 do {
  if ((HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 680 >> 2] | 0) != (i2 | 0)) {
   if ((HEAP32[i1 + 96 >> 2] | 0) <= -1) {
    break;
   }
   i3 = HEAP32[i1 + 100 >> 2] | 0;
   return i3 | 0;
  }
 } while (0);
 i3 = __ZNK7WebCore26HTMLTextFormControlElement19computeSelectionEndEv(i1) | 0;
 return i3 | 0;
}
function __ZThn52_N7WebCore26HTMLTextFormControlElementD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 - 108 + 56 | 0;
 HEAP32[i2 >> 2] = H_BASE + 96;
 HEAP32[i2 + 52 >> 2] = H_BASE + 864;
 i1 = HEAP32[i2 + 88 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN7WebCore31HTMLFormControlElementWithStateD2Ev(i2);
 __ZdlPv(i2);
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
function __ZThn52_N7WebCore26HTMLTextFormControlElementD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 - 108 + 56 | 0;
 HEAP32[i2 >> 2] = H_BASE + 96;
 HEAP32[i2 + 52 >> 2] = H_BASE + 864;
 i1 = HEAP32[i2 + 88 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN7WebCore31HTMLFormControlElementWithStateD2Ev(i2);
 return;
}
function __ZN7WebCore26HTMLTextFormControlElement17setSelectionRangeEiiRKN3WTF6StringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = i4 | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i5 >> 2] | 0, H_BASE + 56 | 0) | 0) {
  i6 = 1;
 } else {
  i4 = __ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i5 >> 2] | 0, H_BASE + 40 | 0) | 0;
  i6 = i4 ? 2 : 0;
 }
 __ZN7WebCore26HTMLTextFormControlElement17setSelectionRangeEiiNS_27TextFieldSelectionDirectionE(i1, i2, i3, i6);
 return;
}
function __ZN7WebCore26HTMLTextFormControlElementC2ERKNS_13QualifiedNameERNS_8DocumentEPNS_15HTMLFormElementE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore31HTMLFormControlElementWithStateC2ERKNS_13QualifiedNameERNS_8DocumentEPNS_15HTMLFormElementE(i1 | 0, i2, i3, i4);
 HEAP32[i1 >> 2] = H_BASE + 96;
 HEAP32[i1 + 52 >> 2] = H_BASE + 864;
 HEAP32[i1 + 88 >> 2] = 0;
 HEAP8[i1 + 92 | 0] = 0;
 HEAP32[i1 + 96 >> 2] = -1;
 HEAP32[i1 + 100 >> 2] = -1;
 HEAP32[i1 + 104 >> 2] = 0;
 return;
}
function __ZN7WebCore26HTMLTextFormControlElementD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 96;
 HEAP32[i1 + 52 >> 2] = H_BASE + 864;
 i2 = HEAP32[i1 + 88 >> 2] | 0;
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
 __ZN7WebCore31HTMLFormControlElementWithStateD2Ev(i1 | 0);
 __ZdlPv(i1);
 return;
}
function __ZN7WebCore26HTMLTextFormControlElement12forwardEventEPNS_5EventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 i4 = HEAP32[i2 + 12 >> 2] | 0;
 if ((i4 | 0) == (HEAP32[i3 + 32 >> 2] | 0)) {
  return;
 }
 if ((i4 | 0) == (HEAP32[i3 + 152 >> 2] | 0)) {
  return;
 }
 __ZN7WebCore27TextControlInnerTextElement19defaultEventHandlerEPNS_5EventE(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 732 >> 2] & 255](i1) | 0, i2);
 return;
}
function __ZN7WebCore26HTMLTextFormControlElementD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 96;
 HEAP32[i1 + 52 >> 2] = H_BASE + 864;
 i2 = HEAP32[i1 + 88 >> 2] | 0;
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
 __ZN7WebCore31HTMLFormControlElementWithStateD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore26HTMLTextFormControlElementD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 96;
 HEAP32[i1 + 52 >> 2] = H_BASE + 864;
 i2 = HEAP32[i1 + 88 >> 2] | 0;
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
 __ZN7WebCore31HTMLFormControlElementWithStateD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore24enclosingTextFormControlERKNS_8PositionE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZNK7WebCore8Position13containerNodeEv(i1) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = __ZNK7WebCore4Node10shadowHostEv(i2) | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] & 255](i1) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = i1;
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
function viiii___ZN7WebCore11HTMLElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore11HTMLElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZNK7WebCore26HTMLTextFormControlElement25computeSelectionDirectionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP8[(HEAP32[i2 + 468 >> 2] | 0) + 88 | 0] | 0;
 if ((i1 & 2) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (i1 & 1) != 0 ? 1 : 2;
 return i3 | 0;
}
function viiii___ZN7WebCore13StyledElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore13StyledElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZThn52_N7WebCore22HTMLFormControlElement26derefFormAssociatedElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 - 88 + 36 | 0;
 i1 = i2 + 8 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i2 + 16 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2);
 return;
}
function __ZN7WebCore22HTMLFormControlElement26derefFormAssociatedElementEv(i1) {
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
function iiiii___ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function iiiii___ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZNK7WebCore26HTMLTextFormControlElement23visiblePositionForIndexEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore45visiblePositionForIndexUsingCharacterIteratorEPNS_4NodeEi(i1, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 732 >> 2] & 255](i2) | 0, i3);
 return;
}
function vii___ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE(i1 | 0, i2 | 0);
}
function __ZN7WebCore26HTMLTextFormControlElement22restoreCachedSelectionEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore26HTMLTextFormControlElement17setSelectionRangeEiiNS_27TextFieldSelectionDirectionE(i1, HEAP32[i1 + 96 >> 2] | 0, HEAP32[i1 + 100 >> 2] | 0, HEAP32[i1 + 104 >> 2] | 0);
 return;
}
function __ZNK7WebCore26HTMLTextFormControlElement21lastChangeWasUserEditEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] & 255](i1 | 0) | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP8[i1 + 92 | 0] & 1) != 0;
 return i2 | 0;
}
function iii___ZNK7WebCore22HTMLFormControlElement19isKeyboardFocusableEPNS_13KeyboardEventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore22HTMLFormControlElement19isKeyboardFocusableEPNS_13KeyboardEventE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore31HTMLFormControlElementWithState11removedFromERNS_13ContainerNodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore31HTMLFormControlElementWithState11removedFromERNS_13ContainerNodeE(i1 | 0, i2 | 0);
}
function iii___ZNK7WebCore11HTMLElement23isPresentationAttributeERKNS_13QualifiedNameE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore11HTMLElement23isPresentationAttributeERKNS_13QualifiedNameE(i1 | 0, i2 | 0) | 0;
}
function ii___ZNK7WebCore31HTMLFormControlElementWithState36shouldSaveAndRestoreFormControlStateEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore31HTMLFormControlElementWithState36shouldSaveAndRestoreFormControlStateEv(i1 | 0) | 0;
}
function vii___ZThn52_N7WebCore22HTMLFormControlElement17setCustomValidityERKN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZThn52_N7WebCore22HTMLFormControlElement17setCustomValidityERKN3WTF6StringE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore11HTMLElement15childrenChangedERKNS_13ContainerNode11ChildChangeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11HTMLElement15childrenChangedERKNS_13ContainerNode11ChildChangeE(i1 | 0, i2 | 0);
}
function ii___ZThn52_NK7WebCore31HTMLFormControlElementWithState29isFormControlElementWithStateEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZThn52_NK7WebCore31HTMLFormControlElementWithState29isFormControlElementWithStateEv(i1 | 0) | 0;
}
function dynCall_viiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 FUNCTION_TABLE_viiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function vii___ZN7WebCore22HTMLFormControlElement20didMoveToNewDocumentEPNS_8DocumentE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore22HTMLFormControlElement20didMoveToNewDocumentEPNS_8DocumentE(i1 | 0, i2 | 0);
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
function vii___ZN7WebCore22HTMLFormControlElement17setCustomValidityERKN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore22HTMLFormControlElement17setCustomValidityERKN3WTF6StringE(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore31HTMLFormControlElementWithState29isFormControlElementWithStateEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore31HTMLFormControlElementWithState29isFormControlElementWithStateEv(i1 | 0) | 0;
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
function vii___ZN7WebCore22HTMLFormControlElement14didRecalcStyleENS_5Style6ChangeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore22HTMLFormControlElement14didRecalcStyleENS_5Style6ChangeE(i1 | 0, i2 | 0);
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
function iii___ZNK7WebCore11HTMLElement14isURLAttributeERKNS_9AttributeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore11HTMLElement14isURLAttributeERKNS_9AttributeE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv(i1 | 0, i2 | 0);
}
function __ZN7WebCore26HTMLTextFormControlElement6selectEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore26HTMLTextFormControlElement17setSelectionRangeEiiNS_27TextFieldSelectionDirectionE(i1, 0, 2147483647, 0);
 return;
}
function __ZN7WebCore22HTMLFormControlElement34setFormControlValueMatchesRendererEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 72 | 0;
 HEAP8[i3] = HEAP8[i3] & -9 | (i2 & 1) << 3;
 return;
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
function ii___ZNK7WebCore31HTMLFormControlElementWithState18shouldAutocompleteEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore31HTMLFormControlElementWithState18shouldAutocompleteEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore21FormAssociatedElement17validationMessageEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore21FormAssociatedElement17validationMessageEv(i1 | 0, i2 | 0);
}
function v___ZN7WebCore11HTMLElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE__wrapper() {
 __ZN7WebCore11HTMLElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE();
}
function ii___ZN7WebCore22HTMLFormControlElement25isValidFormControlElementEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore22HTMLFormControlElement25isValidFormControlElementEv(i1 | 0) | 0;
}
function vi___ZN7WebCore31HTMLFormControlElementWithState21finishParsingChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore31HTMLFormControlElementWithState21finishParsingChildrenEv(i1 | 0);
}
function __ZThn52_N7WebCore22HTMLFormControlElement24refFormAssociatedElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 88 + 44 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 return;
}
function ii___ZNK7WebCore22HTMLFormControlElement22isDefaultButtonForFormEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore22HTMLFormControlElement22isDefaultButtonForFormEv(i1 | 0) | 0;
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
function ii___ZNK7WebCore22HTMLFormControlElement21isDisabledFormControlEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore22HTMLFormControlElement21isDisabledFormControlEv(i1 | 0) | 0;
}
function __ZTch0_h52_N7WebCore22HTMLFormControlElement15asFormNamedItemEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
 } else {
  i2 = i1 + 52 | 0;
 }
 return i2 | 0;
}
function ii___ZNK7WebCore22HTMLFormControlElement18recalcWillValidateEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore22HTMLFormControlElement18recalcWillValidateEv(i1 | 0) | 0;
}
function vi___ZN7WebCore22HTMLFormControlElement24requiredAttributeChangedEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22HTMLFormControlElement24requiredAttributeChangedEv(i1 | 0);
}
function vi___ZN7WebCore22HTMLFormControlElement24disabledAttributeChangedEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22HTMLFormControlElement24disabledAttributeChangedEv(i1 | 0);
}
function ii___ZN7WebCore11HTMLElement29willRespondToMouseWheelEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11HTMLElement29willRespondToMouseWheelEventsEv(i1 | 0) | 0;
}
function ii___ZN7WebCore11HTMLElement29willRespondToMouseClickEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11HTMLElement29willRespondToMouseClickEventsEv(i1 | 0) | 0;
}
function __ZN7WebCore22HTMLFormControlElement24refFormAssociatedElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 8 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 return;
}
function ii___ZNK7WebCore22HTMLFormControlElement16isMouseFocusableEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore22HTMLFormControlElement16isMouseFocusableEv(i1 | 0) | 0;
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
function ii___ZNK7WebCore21FormAssociatedElement15patternMismatchEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore21FormAssociatedElement15patternMismatchEv(i1 | 0) | 0;
}
function viii___ZN7WebCore7Element9setActiveEbb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element9setActiveEbb(i1 | 0, i2 | 0, i3 | 0);
}
function vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv(i1 | 0);
}
function ii___ZNK7WebCore22HTMLFormControlElement13supportsFocusEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore22HTMLFormControlElement13supportsFocusEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore21FormAssociatedElement14rangeUnderflowEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore21FormAssociatedElement14rangeUnderflowEv(i1 | 0) | 0;
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
function v___ZNK7WebCore31HTMLFormControlElementWithState20saveFormControlStateEv__wrapper() {
 __ZNK7WebCore31HTMLFormControlElementWithState20saveFormControlStateEv();
}
function ii___ZNK7WebCore22HTMLFormControlElement12willValidateEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore22HTMLFormControlElement12willValidateEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore21FormAssociatedElement13rangeOverflowEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore21FormAssociatedElement13rangeOverflowEv(i1 | 0) | 0;
}
function vi___ZN7WebCore22HTMLFormControlElement18didAttachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22HTMLFormControlElement18didAttachRenderersEv(i1 | 0);
}
function vii___ZN7WebCore11HTMLElement15accessKeyActionEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11HTMLElement15accessKeyActionEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore7Element27matchesReadWritePseudoClassEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element27matchesReadWritePseudoClassEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore22HTMLFormControlElement11virtualFormEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore22HTMLFormControlElement11virtualFormEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore22HTMLFormControlElement11isFocusableEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore22HTMLFormControlElement11isFocusableEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore21FormAssociatedElement12valueMissingEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore21FormAssociatedElement12valueMissingEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore21FormAssociatedElement12typeMismatchEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore21FormAssociatedElement12typeMismatchEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore21FormAssociatedElement12stepMismatchEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore21FormAssociatedElement12stepMismatchEv(i1 | 0) | 0;
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
function ii___ZNK7WebCore21FormAssociatedElement11hasBadInputEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore21FormAssociatedElement11hasBadInputEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore7Element25shouldAppearIndeterminateEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element25shouldAppearIndeterminateEv(i1 | 0) | 0;
}
function __ZN7WebCore26HTMLTextFormControlElement16handleFocusEventEPNS_4NodeENS_14FocusDirectionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function ii___ZNK7WebCore11HTMLElement19hasCustomFocusLogicEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11HTMLElement19hasCustomFocusLogicEv(i1 | 0) | 0;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function ii___ZNK7WebCore22HTMLFormControlElement8tabIndexEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore22HTMLFormControlElement8tabIndexEv(i1 | 0) | 0;
}
function vi___ZN7WebCore21FormAssociatedElement14willChangeFormEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore21FormAssociatedElement14willChangeFormEv(i1 | 0);
}
function ii___ZNK7WebCore7Element22isSpellCheckingEnabledEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element22isSpellCheckingEnabledEv(i1 | 0) | 0;
}
function vi___ZN7WebCore21FormAssociatedElement13didChangeFormEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore21FormAssociatedElement13didChangeFormEv(i1 | 0);
}
function ii___ZNK7WebCore21FormAssociatedElement7tooLongEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore21FormAssociatedElement7tooLongEv(i1 | 0) | 0;
}
function __ZThn52_N7WebCore22HTMLFormControlElement14appendFormDataERNS_12FormDataListEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return 0;
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
function __ZN7WebCore31HTMLFormControlElementWithState23restoreFormControlStateERKNS_16FormControlStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 31](i2 | 0, i3 | 0, i4 | 0);
}
function ii___ZNK7WebCore21FormAssociatedElement4nameEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore21FormAssociatedElement4nameEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11EventTarget13isMessagePortEv(i1 | 0) | 0;
}
function __ZN7WebCore22HTMLFormControlElement14appendFormDataERNS_12FormDataListEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return 0;
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
function __ZNK7WebCore22HTMLFormControlElement31formControlValueMatchesRendererEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 72 | 0] & 8) != 0 | 0;
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
function ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node17canStartSelectionEv(i1 | 0) | 0;
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
function ii___ZNK7WebCore11HTMLElement9draggableEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11HTMLElement9draggableEv(i1 | 0) | 0;
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
function ii___ZN7WebCore7Element12scrollHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element12scrollHeightEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node15eventTargetDataEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node15eventTargetDataEv(i1 | 0) | 0;
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
function b7(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(7);
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
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 127](i2 | 0, i3 | 0);
}
function vi___ZN7WebCore4Node14refEventTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node14refEventTargetEv(i1 | 0);
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
function __ZN7WebCoreL14isNotLineBreakEt(i1) {
 i1 = i1 | 0;
 return i1 << 16 >> 16 != 13 & i1 << 16 >> 16 != 10 | 0;
}
function ii___ZN7WebCore4Node6toNodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node6toNodeEv(i1 | 0) | 0;
}
function __ZThn52_NK7WebCore22HTMLFormControlElement13asHTMLElementEv(i1) {
 i1 = i1 | 0;
 return i1 - 88 + 36 | 0;
}
function __ZThn52_N7WebCore22HTMLFormControlElement13asHTMLElementEv(i1) {
 i1 = i1 | 0;
 return i1 - 88 + 36 | 0;
}
function __ZN7WebCore22HTMLFormControlElement18setActivatedSubmitEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore31HTMLFormControlElementWithState23canContainRangeEndPointEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore22HTMLFormControlElement31alwaysCreateUserAgentShadowRootEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore7Element12namespaceURIEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 44 >> 2] | 0) + 16 | 0;
}
function __ZNK7WebCore22HTMLFormControlElement28canTriggerImplicitSubmissionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element6targetEv(i1, i2) {
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
function __ZThn52_NK7WebCore22HTMLFormControlElement20isFormControlElementEv(i1) {
 i1 = i1 | 0;
 return 1;
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
function __ZNK7WebCore26HTMLTextFormControlElement21isEmptySuggestedValueEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore22HTMLFormControlElement24isSuccessfulSubmitButtonEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element6prefixEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 44 >> 2] | 0) + 8 | 0;
}
function __ZNK7WebCore21FormAssociatedElement23isFormAssociatedElementEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZThn52_NK7WebCore22HTMLFormControlElement14isEnumeratableEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore22HTMLFormControlElement20isFormControlElementEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZN7WebCore22HTMLFormControlElement15asFormNamedItemEv(i1) {
 i1 = i1 | 0;
 return i1 | 0;
}
function __ZNK7WebCore22HTMLFormControlElement13asHTMLElementEv(i1) {
 i1 = i1 | 0;
 return i1 | 0;
}
function __ZNK7WebCore11HTMLElement29isTextControlInnerTextElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore22HTMLFormControlElement17isActivatedSubmitEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore22HTMLFormControlElement13asHTMLElementEv(i1) {
 i1 = i1 | 0;
 return i1 | 0;
}
function __ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore26HTMLTextFormControlElement15handleBlurEventEv(i1) {
 i1 = i1 | 0;
 return;
}
function b9(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(9);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 127](i2 | 0);
}
function __ZNK7WebCore22HTMLFormControlElement14isEnumeratableEv(i1) {
 i1 = i1 | 0;
 return 0;
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
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
 return 0;
}
function __ZNK7WebCore7Element23areAuthorShadowsAllowedEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore16LabelableElement13supportLabelsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element26didBecomeFullscreenElementEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore7Element21isRequiredFormControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element21isOptionalFormControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore16LabelableElement11isLabelableEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore7Element19isSpinButtonElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element22visibilityStateChangedEv(i1) {
 i1 = i1 | 0;
 return;
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
function __ZN7WebCore22HTMLFormControlElement5resetEv(i1) {
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
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
}
function __ZNK7WebCore4Node16nonRendererStyleEv(i1) {
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
function b8(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(8);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 15]();
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
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
function b6() {
 abort(6);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiiii = [b0,b0,iiiii___ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper,b0,iiiii___ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore7Element29privateBrowsingStateDidChangeEv,b1,__ZN7WebCore7Element20buildPendingResourceEv,b1,vi___ZN7WebCore4Node16derefEventTargetEv__wrapper,b1,vi___ZN7WebCore31HTMLFormControlElementWithState21finishParsingChildrenEv__wrapper,b1,__ZN7WebCore26HTMLTextFormControlElementD2Ev,b1,vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper,b1,vi___ZN7WebCore21FormAssociatedElement14willChangeFormEv__wrapper,b1,__ZN7WebCore7Element22visibilityStateChangedEv,b1,vi___ZN7WebCore4Node14refEventTargetEv__wrapper,b1,__ZN7WebCore22HTMLFormControlElement24refFormAssociatedElementEv,b1,__ZThn52_N7WebCore26HTMLTextFormControlElementD1Ev,b1,vi___ZN7WebCore22HTMLFormControlElement24requiredAttributeChangedEv__wrapper,b1,vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper,b1,vi___ZN7WebCore22HTMLFormControlElement18didAttachRenderersEv__wrapper
  ,b1,__ZThn52_N7WebCore22HTMLFormControlElement26derefFormAssociatedElementEv,b1,__ZThn52_N7WebCore22HTMLFormControlElement24refFormAssociatedElementEv,b1,vi___ZN7WebCore7Element19willAttachRenderersEv__wrapper,b1,__ZN7WebCore7Element20mediaVolumeDidChangeEv,b1,__ZN7WebCore26HTMLTextFormControlElementD0Ev,b1,__ZN7WebCore4Node24startLoadingDynamicSheetEv,b1,__ZN7WebCore7Element30willStopBeingFullscreenElementEv,b1,__ZN7WebCore22HTMLFormControlElement26derefFormAssociatedElementEv,b1,__ZThn52_N7WebCore26HTMLTextFormControlElementD0Ev,b1,vi___ZN7WebCore21FormAssociatedElement13didChangeFormEv__wrapper,b1,__ZN7WebCore22HTMLFormControlElement5resetEv,b1,vi___ZN7WebCore7Element19willDetachRenderersEv__wrapper,b1,vi___ZN7WebCore7Element20beginParsingChildrenEv__wrapper,b1,__ZN7WebCore7Element31documentWillSuspendForPageCacheEv,b1,vi___ZN7WebCore7Element4blurEv__wrapper
  ,b1,__ZN7WebCore7Element30documentDidResumeFromPageCacheEv,b1,__ZN7WebCore26HTMLTextFormControlElement15handleBlurEventEv,b1,vi___ZN7WebCore7Element18didDetachRenderersEv__wrapper,b1,vi___ZN7WebCore22HTMLFormControlElement24disabledAttributeChangedEv__wrapper,b1,vi___ZN7WebCore7Element23removeAllEventListenersEv__wrapper,b1,__ZN7WebCore26HTMLTextFormControlElement30dispatchFormControlChangeEventEv,b1,__ZN7WebCore7Element26didBecomeFullscreenElementEv,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1,b1,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,vii___ZN7WebCore11HTMLElement15accessKeyActionEb__wrapper,b2,vii___ZN7WebCore7Element10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,__ZNK7WebCore7Element6targetEv,b2,vii___ZNK7WebCore11HTMLElement8nodeNameEv__wrapper,b2,__ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE,b2,vii___ZN7WebCore7Element12setScrollTopEi__wrapper,b2,vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper,b2,vii___ZN7WebCore7Element9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,vii___ZN7WebCore22HTMLFormControlElement20didMoveToNewDocumentEPNS_8DocumentE__wrapper,b2,vii___ZN7WebCore31HTMLFormControlElementWithState11removedFromERNS_13ContainerNodeE__wrapper,b2,vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper,b2,vii___ZN7WebCore7Element9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,vii___ZNK7WebCore7Element7baseURIEv__wrapper,b2,__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE
  ,b2,vii___ZN7WebCore11HTMLElement15childrenChangedERKNS_13ContainerNode11ChildChangeE__wrapper,b2,__ZN7WebCore31HTMLFormControlElementWithState23restoreFormControlStateERKNS_16FormControlStateE,b2,vii___ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv__wrapper,b2,vii___ZN7WebCore22HTMLFormControlElement14didRecalcStyleENS_5Style6ChangeE__wrapper,b2,__ZN7WebCore22HTMLFormControlElement18setActivatedSubmitEb,b2,vii___ZN7WebCore7Element13setScrollLeftEi__wrapper,b2,__ZN7WebCore26HTMLTextFormControlElement19defaultEventHandlerEPNS_5EventE,b2,vii___ZN7WebCore7Element8setFocusEb__wrapper,b2,__ZN7WebCore26HTMLTextFormControlElement17dispatchBlurEventEN3WTF10PassRefPtrINS_7ElementEEE,b2,__ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_,b2,vii___ZN7WebCore7Element10setHoveredEb__wrapper,b2,vii___ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE__wrapper,b2,vii___ZN7WebCore7Element10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb,b2,vii___ZThn52_N7WebCore22HTMLFormControlElement17setCustomValidityERKN3WTF6StringE__wrapper
  ,b2,vii___ZN7WebCore22HTMLFormControlElement17setCustomValidityERKN3WTF6StringE__wrapper,b2,vii___ZNK7WebCore4Node9nodeValueEv__wrapper,b2,__ZN7WebCore22HTMLFormControlElement34setFormControlValueMatchesRendererEb,b2,vii___ZNK7WebCore11HTMLElement5titleEv__wrapper,b2,vii___ZNK7WebCore21FormAssociatedElement17validationMessageEv__wrapper,b2,vii___ZN7WebCore7Element21updateFocusAppearanceEb__wrapper,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,ii___ZNK7WebCore22HTMLFormControlElement18recalcWillValidateEv__wrapper,b3,ii___ZNK7WebCore7Element14imageSourceURLEv__wrapper,b3,ii___ZN7WebCore4Node15eventTargetDataEv__wrapper,b3,__ZNK7WebCore22HTMLFormControlElement20isFormControlElementEv,b3,__ZNK7WebCore4Node19isCharacterDataNodeEv,b3,__ZNK7WebCore31HTMLFormControlElementWithState23canContainRangeEndPointEv,b3,ii___ZN7WebCore7Element7onerrorEv__wrapper,b3,ii___ZNK7WebCore21FormAssociatedElement12valueMissingEv__wrapper,b3,ii___ZN7WebCore7Element11scrollWidthEv__wrapper,b3,__ZNK7WebCore22HTMLFormControlElement24isSuccessfulSubmitButtonEv,b3,__ZNK7WebCore4Node21isMediaControlElementEv,b3,__ZNK7WebCore4Node19isFrameOwnerElementEv,b3,__ZNK7WebCore22HTMLFormControlElement28canTriggerImplicitSubmissionEv,b3,ii___ZN7WebCore7Element10scrollLeftEv__wrapper
  ,b3,ii___ZNK7WebCore21FormAssociatedElement7tooLongEv__wrapper,b3,ii___ZN7WebCore7Element9scrollTopEv__wrapper,b3,ii___ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv__wrapper,b3,ii___ZNK7WebCore7Element22isSpellCheckingEnabledEv__wrapper,b3,ii___ZNK7WebCore7Element27matchesReadWritePseudoClassEv__wrapper,b3,__ZNK7WebCore7Element17isTextFormControlEv,b3,__ZTch0_h52_N7WebCore22HTMLFormControlElement15asFormNamedItemEv,b3,ii___ZNK7WebCore22HTMLFormControlElement16isMouseFocusableEv__wrapper,b3,ii___ZNK7WebCore21FormAssociatedElement12typeMismatchEv__wrapper,b3,ii___ZNK7WebCore22HTMLFormControlElement21isDisabledFormControlEv__wrapper,b3,ii___ZN7WebCore7Element20shouldUseInputMethodEv__wrapper,b3,ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper,b3,__ZNK7WebCore11HTMLElement20isHTMLUnknownElementEv,b3,__ZNK7WebCore7Element6prefixEv,b3,__ZNK7WebCore7Element21isRequiredFormControlEv
  ,b3,ii___ZNK7WebCore4Node18maxCharacterOffsetEv__wrapper,b3,__ZNK7WebCore7Element12namespaceURIEv,b3,ii___ZThn52_NK7WebCore31HTMLFormControlElementWithState29isFormControlElementWithStateEv__wrapper,b3,ii___ZNK7WebCore21FormAssociatedElement11hasBadInputEv__wrapper,b3,ii___ZNK7WebCore4Node18offsetInCharactersEv__wrapper,b3,__ZNK7WebCore4Node22scriptExecutionContextEv,b3,__ZNK7WebCore7Element12isOutOfRangeEv,b3,ii___ZNK7WebCore7Element8nodeTypeEv__wrapper,b3,ii___ZN7WebCore4Node6toNodeEv__wrapper,b3,ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper,b3,ii___ZNK7WebCore31HTMLFormControlElementWithState29isFormControlElementWithStateEv__wrapper,b3,ii___ZNK7WebCore21FormAssociatedElement13rangeOverflowEv__wrapper,b3,__ZNK7WebCore4Node20isInsertionPointNodeEv,b3,ii___ZN7WebCore7Element6onloadEv__wrapper,b3,__ZNK7WebCore7Element9isInRangeEv
  ,b3,ii___ZNK7WebCore22HTMLFormControlElement11virtualFormEv__wrapper,b3,ii___ZN7WebCore7Element13focusDelegateEv__wrapper,b3,__ZNK7WebCore7Element18isFrameElementBaseEv,b3,ii___ZN7WebCore22HTMLFormControlElement25isValidFormControlElementEv__wrapper,b3,ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper,b3,__ZNK7WebCore7Element21isOptionalFormControlEv,b3,ii___ZNK7WebCore7Element25shouldAppearIndeterminateEv__wrapper,b3,__ZThn52_NK7WebCore22HTMLFormControlElement20isFormControlElementEv,b3,__ZN7WebCoreL14isNotLineBreakEt,b3,ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper,b3,__ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv,b3,__ZNK7WebCore22HTMLFormControlElement31alwaysCreateUserAgentShadowRootEv,b3,__ZNK7WebCore16LabelableElement13supportLabelsEv,b3,ii___ZNK7WebCore22HTMLFormControlElement22isDefaultButtonForFormEv__wrapper,b3,__ZN7WebCore22HTMLFormControlElement15asFormNamedItemEv
  ,b3,__ZNK7WebCore4Node16nonRendererStyleEv,b3,ii___ZN7WebCore13StyledElement5styleEv__wrapper,b3,__ZNK7WebCore4Node15isPluginElementEv,b3,ii___ZNK7WebCore22HTMLFormControlElement12willValidateEv__wrapper,b3,ii___ZN7WebCore11HTMLElement28willRespondToMouseMoveEventsEv__wrapper,b3,ii___ZN7WebCore7Element7onfocusEv__wrapper,b3,ii___ZNK7WebCore21FormAssociatedElement12stepMismatchEv__wrapper,b3,ii___ZNK7WebCore22HTMLFormControlElement13supportsFocusEv__wrapper,b3,ii___ZN7WebCore4Node14toInputElementEv__wrapper,b3,ii___ZN7WebCore11HTMLElement29willRespondToMouseWheelEventsEv__wrapper,b3,ii___ZNK7WebCore22HTMLFormControlElement8tabIndexEv__wrapper,b3,__ZNK7WebCore22HTMLFormControlElement31formControlValueMatchesRendererEv,b3,ii___ZNK7WebCore11HTMLElement9draggableEv__wrapper,b3,__ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv,b3,__ZNK7WebCore21FormAssociatedElement23isFormAssociatedElementEv
  ,b3,ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper,b3,__ZN7WebCore4Node11sheetLoadedEv,b3,__ZNK7WebCore22HTMLFormControlElement17isActivatedSubmitEv,b3,ii___ZN7WebCore7Element12scrollHeightEv__wrapper,b3,__ZNK7WebCore16LabelableElement11isLabelableEv,b3,ii___ZNK7WebCore11HTMLElement19hasCustomFocusLogicEv__wrapper,b3,__ZNK7WebCore4Node14customPseudoIdEv,b3,__ZNK7WebCore7Element19isSpinButtonElementEv,b3,__ZNK7WebCore26HTMLTextFormControlElement21isEmptySuggestedValueEv,b3,__ZN7WebCore22HTMLFormControlElement13asHTMLElementEv,b3,ii___ZNK7WebCore7Element14shadowPseudoIdEv__wrapper,b3,__ZNK7WebCore7Element9localNameEv,b3,ii___ZNK7WebCore31HTMLFormControlElementWithState36shouldSaveAndRestoreFormControlStateEv__wrapper,b3,__ZNK7WebCore22HTMLFormControlElement14isEnumeratableEv,b3,__ZThn52_N7WebCore22HTMLFormControlElement13asHTMLElementEv
  ,b3,ii___ZNK7WebCore21FormAssociatedElement15patternMismatchEv__wrapper,b3,ii___ZNK7WebCore22HTMLFormControlElement11isFocusableEv__wrapper,b3,__ZNK7WebCore22HTMLFormControlElement13asHTMLElementEv,b3,ii___ZNK7WebCore21FormAssociatedElement4nameEv__wrapper,b3,ii___ZN7WebCore11HTMLElement29willRespondToMouseClickEventsEv__wrapper,b3,ii___ZN7WebCore7Element6onblurEv__wrapper,b3,ii___ZNK7WebCore31HTMLFormControlElementWithState18shouldAutocompleteEv__wrapper,b3,__ZNK7WebCore4Node15isMediaControlsEv,b3,ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper,b3,__ZNK7WebCore7Element23areAuthorShadowsAllowedEv,b3,ii___ZNK7WebCore21FormAssociatedElement14rangeUnderflowEv__wrapper,b3,__ZNK7WebCore4Node15isAttributeNodeEv,b3,__ZThn52_NK7WebCore22HTMLFormControlElement14isEnumeratableEv,b3,__ZNK7WebCore11HTMLElement29isTextControlInnerTextElementEv,b3,__ZThn52_NK7WebCore22HTMLFormControlElement13asHTMLElementEv
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_iiii = [b4,b4,__ZThn52_N7WebCore22HTMLFormControlElement14appendFormDataERNS_12FormDataListEb,b4,__ZN7WebCore22HTMLFormControlElement14appendFormDataERNS_12FormDataListEb,b4,b4,b4];
  var FUNCTION_TABLE_viii = [b5,b5,__ZN7WebCore26HTMLTextFormControlElement12setRangeTextERKN3WTF6StringERi,b5,__ZN7WebCore26HTMLTextFormControlElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE,b5,__ZN7WebCore26HTMLTextFormControlElement18dispatchFocusEventEN3WTF10PassRefPtrINS_7ElementEEENS_14FocusDirectionE,b5,__ZN7WebCore26HTMLTextFormControlElement16handleFocusEventEPNS_4NodeENS_14FocusDirectionE,b5,viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper,b5,viii___ZN7WebCore7Element9cloneNodeEb__wrapper,b5,viii___ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi__wrapper,b5,viii___ZN7WebCore7Element5focusEbNS_14FocusDirectionE__wrapper,b5,viii___ZN7WebCore7Element9setActiveEbb__wrapper,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5];
  var FUNCTION_TABLE_v = [b6,b6,v___ZNK7WebCore31HTMLFormControlElementWithState20saveFormControlStateEv__wrapper,b6,v___ZN7WebCore11HTMLElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE__wrapper,b6,v____cxa_pure_virtual__wrapper,b6,v___ZN7WebCore7Element22customStyleForRendererEv__wrapper,b6,b6,b6,b6,b6,b6,b6];
  var FUNCTION_TABLE_viiiiii = [b7,b7,__ZN7WebCore26HTMLTextFormControlElement12setRangeTextERKN3WTF6StringEjjS4_Ri,b7];
  var FUNCTION_TABLE_iii = [b8,b8,iii___ZNK7WebCore7Element22shouldMoveToFlowThreadERKNS_11RenderStyleE__wrapper,b8,iii___ZN7WebCore7Element13computedStyleENS_8PseudoIdE__wrapper,b8,iii___ZN7WebCore7Element15willRecalcStyleENS_5Style6ChangeE__wrapper,b8,iii___ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE__wrapper,b8,iii___ZNK7WebCore22HTMLFormControlElement19isKeyboardFocusableEPNS_13KeyboardEventE__wrapper,b8,__ZN7WebCore26HTMLTextFormControlElement12insertedIntoERNS_13ContainerNodeE,b8,iii___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper,b8,__ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE,b8,iii___ZNK7WebCore11HTMLElement14isURLAttributeERKNS_9AttributeE__wrapper,b8,__ZNK7WebCore26HTMLTextFormControlElement25childShouldCreateRendererERKNS_4NodeE,b8,iii___ZN7WebCore11HTMLElement16rendererIsNeededERKNS_11RenderStyleE__wrapper,b8,iii___ZNK7WebCore11HTMLElement23isPresentationAttributeERKNS_13QualifiedNameE__wrapper,b8,b8,b8,b8
  ,b8,b8,b8];
  var FUNCTION_TABLE_viiii = [b9,b9,viiii___ZN7WebCore13StyledElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE__wrapper,b9,viiii___ZN7WebCore11HTMLElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE__wrapper,b9,b9,b9];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiii: dynCall_iiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiii": invoke_iiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames15placeholderAttrE": __ZN7WebCore9HTMLNames15placeholderAttrE, "__ZN7WebCore9HTMLNames7dirAttrE": __ZN7WebCore9HTMLNames7dirAttrE, "__ZN7WebCore9HTMLNames5brTagE": __ZN7WebCore9HTMLNames5brTagE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore26HTMLTextFormControlElement12setRangeTextERKN3WTF6StringERi","__ZN7WebCore26HTMLTextFormControlElement16selectionChangedEb","__ZNK7WebCore16LabelableElement13supportLabelsEv","__ZN7WebCore7Element29privateBrowsingStateDidChangeEv","__ZNK7WebCore26HTMLTextFormControlElement23valueWithHardLineBreaksEv","__ZN7WebCore7Element20buildPendingResourceEv","__ZNK7WebCore22HTMLFormControlElement31formControlValueMatchesRendererEv","__ZNK7WebCore7Element6targetEv","__ZNK7WebCore31HTMLFormControlElementWithState23canContainRangeEndPointEv","__ZNK7WebCore21FormAssociatedElement23isFormAssociatedElementEv","_memcpy","__ZNK7WebCore26HTMLTextFormControlElement19strippedPlaceholderEv","__ZN7WebCore26HTMLTextFormControlElementD2Ev","__ZNK7WebCore22HTMLFormControlElement24isSuccessfulSubmitButtonEv","__ZNK7WebCore4Node14customPseudoIdEv","__ZNK7WebCore4Node21isMediaControlElementEv","__ZN3WTF13StringBuilder6appendERKNS_6StringE","__ZNK7WebCore4Node19isFrameOwnerElementEv","__ZNK7WebCore22HTMLFormControlElement28canTriggerImplicitSubmissionEv","__ZThn52_N7WebCore22HTMLFormControlElement26derefFormAssociatedElementEv","__ZNK7WebCore26HTMLTextFormControlElement12selectedTextEv","__ZN7WebCore7Element22visibilityStateChangedEv","__ZNK7WebCore26HTMLTextFormControlElement18selectionDirectionEv","__ZNK7WebCore26HTMLTextFormControlElement25computeSelectionDirectionEv","__ZNK7WebCore26HTMLTextFormControlElement23visiblePositionForIndexEi","__ZNK7WebCore7Element17isTextFormControlEv","__ZN7WebCore26HTMLTextFormControlElement12forwardEventEPNS_5EventE","__ZTch0_h52_N7WebCore22HTMLFormControlElement15asFormNamedItemEv","__ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE","__ZNK7WebCore26HTMLTextFormControlElement21lastChangeWasUserEditEv","__ZN7WebCore24enclosingTextFormControlERKNS_8PositionE","__ZNK7WebCore11HTMLElement20isHTMLUnknownElementEv","__ZN7WebCore26HTMLTextFormControlElement16handleFocusEventEPNS_4NodeENS_14FocusDirectionE","__ZNK7WebCore4Node20isInsertionPointNodeEv","__ZNK7WebCore26HTMLTextFormControlElement26placeholderShouldBeVisibleEv","__ZN7WebCore22HTMLFormControlElement24refFormAssociatedElementEv","__ZN7WebCore26HTMLTextFormControlElement22restoreCachedSelectionEv","__ZNK7WebCore7Element12namespaceURIEv","__ZN7WebCore26HTMLTextFormControlElement21setSelectionDirectionERKN3WTF6StringE","__ZNK7WebCore26HTMLTextFormControlElement21computeSelectionStartEv","__ZN7WebCore26HTMLTextFormControlElement17dispatchBlurEventEN3WTF10PassRefPtrINS_7ElementEEE","__ZThn52_N7WebCore22HTMLFormControlElement14appendFormDataERNS_12FormDataListEb","__ZN7WebCore26HTMLTextFormControlElement17setSelectionRangeEiiRKN3WTF6StringE","__ZNK7WebCore26HTMLTextFormControlElement19computeSelectionEndEv","__ZN7WebCore22HTMLFormControlElement34setFormControlValueMatchesRendererEb","__ZThn52_N7WebCore26HTMLTextFormControlElementD1Ev","__ZNK7WebCore26HTMLTextFormControlElement9selectionEv","__ZNK7WebCore4Node22scriptExecutionContextEv","__ZNK7WebCore7Element12isOutOfRangeEv","__ZN7WebCore26HTMLTextFormControlElement18dispatchFocusEventEN3WTF10PassRefPtrINS_7ElementEEENS_14FocusDirectionE","__ZThn52_N7WebCore22HTMLFormControlElement24refFormAssociatedElementEv","__ZN7WebCoreL15directionStringENS_27TextFieldSelectionDirectionE","__ZN7WebCore26HTMLTextFormControlElement12insertedIntoERNS_13ContainerNodeE","__ZN7WebCore26HTMLTextFormControlElement17setSelectionRangeEiiNS_27TextFieldSelectionDirectionE","__ZN7WebCore26HTMLTextFormControlElement17setSelectionStartEi","__ZNK7WebCore26HTMLTextFormControlElement14innerTextValueEv","__ZN7WebCore26HTMLTextFormControlElement15setSelectionEndEi","__ZN7WebCore31HTMLFormControlElementWithState23restoreFormControlStateERKNS_16FormControlStateE","__ZNK7WebCore7Element18isFrameElementBaseEv","__ZN7WebCore26HTMLTextFormControlElement17setInnerTextValueERKN3WTF6StringE","__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE","__ZN7WebCore26HTMLTextFormControlElement6selectEv","__ZNK7WebCore7Element9isInRangeEv","__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb","__ZNK7WebCore7Element21isOptionalFormControlEv","__ZN7WebCoreL14isNotLineBreakEt","__ZN7WebCore22HTMLFormControlElement14appendFormDataERNS_12FormDataListEb","__ZN7WebCore26HTMLTextFormControlElementD0Ev","__ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv","__ZNK7WebCore22HTMLFormControlElement31alwaysCreateUserAgentShadowRootEv","__ZNK7WebCore26HTMLTextFormControlElement18isPlaceholderEmptyEv","__ZN7WebCore22HTMLFormControlElement15asFormNamedItemEv","__ZN7WebCore22HTMLFormControlElement18setActivatedSubmitEb","__ZNK7WebCore4Node16nonRendererStyleEv","__ZNK7WebCore7Element21isRequiredFormControlEv","__ZNK7WebCore4Node15isPluginElementEv","__ZN7WebCore26HTMLTextFormControlElement12setRangeTextERKN3WTF6StringEjjS4_Ri","__ZN7WebCore4Node24startLoadingDynamicSheetEv","__ZNK7WebCore26HTMLTextFormControlElement23indexForVisiblePositionERKNS_15VisiblePositionE","_memset","__ZN7WebCore7Element30willStopBeingFullscreenElementEv","__ZN7WebCore22HTMLFormControlElement26derefFormAssociatedElementEv","__ZThn52_N7WebCore26HTMLTextFormControlElementD0Ev","__ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE","__ZN7WebCore16VisibleSelectionaSEOS0_","__ZNK7WebCore26HTMLTextFormControlElement25childShouldCreateRendererERKNS_4NodeE","__ZNK7WebCore22HTMLFormControlElement20isFormControlElementEv","__ZNK7WebCore26HTMLTextFormControlElement20directionForFormDataEv","__ZN7WebCore22HTMLFormControlElement5resetEv","__ZN7WebCore26HTMLTextFormControlElement19defaultEventHandlerEPNS_5EventE","__ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv","__ZN7WebCore7Element20mediaVolumeDidChangeEv","__ZN7WebCore4Node11sheetLoadedEv","__ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_","__ZN7WebCore7Element31documentWillSuspendForPageCacheEv","__ZNK7WebCore22HTMLFormControlElement17isActivatedSubmitEv","__ZNK7WebCore16LabelableElement11isLabelableEv","__ZNK7WebCore26HTMLTextFormControlElement12selectionEndEv","__ZN7WebCore7Element26didBecomeFullscreenElementEv","__ZNK7WebCore7Element19isSpinButtonElementEv","__ZNK7WebCore26HTMLTextFormControlElement21isEmptySuggestedValueEv","__ZN7WebCore22HTMLFormControlElement13asHTMLElementEv","__ZN7WebCore26HTMLTextFormControlElement27updatePlaceholderVisibilityEb","__ZNK7WebCore4Node19isCharacterDataNodeEv","__ZNK7WebCore7Element9localNameEv","__ZNK7WebCore26HTMLTextFormControlElement14selectionStartEv","__ZN7WebCore26HTMLTextFormControlElementC2ERKNS_13QualifiedNameERNS_8DocumentEPNS_15HTMLFormElementE","__ZNK7WebCore22HTMLFormControlElement14isEnumeratableEv","__ZN7WebCore26HTMLTextFormControlElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE","__ZThn52_N7WebCore22HTMLFormControlElement13asHTMLElementEv","__ZThn52_NK7WebCore22HTMLFormControlElement14isEnumeratableEv","__ZN7WebCore26HTMLTextFormControlElement15handleBlurEventEv","__ZNK7WebCore22HTMLFormControlElement13asHTMLElementEv","__ZThn52_NK7WebCore22HTMLFormControlElement20isFormControlElementEv","__ZN7WebCore16VisibleSelectionD2Ev","__ZN7WebCore26HTMLTextFormControlElement30dispatchFormControlChangeEventEv","__ZNK7WebCore4Node15isMediaControlsEv","__ZNK7WebCore7Element23areAuthorShadowsAllowedEv","__ZNK7WebCore4Node15isAttributeNodeEv","__ZN7WebCore7Element30documentDidResumeFromPageCacheEv","__ZNK7WebCore7Element6prefixEv","__ZNK7WebCore11HTMLElement29isTextControlInnerTextElementEv","__ZThn52_NK7WebCore22HTMLFormControlElement13asHTMLElementEv"]

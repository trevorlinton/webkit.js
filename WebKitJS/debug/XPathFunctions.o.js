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
H_BASE = parentModule["_malloc"](1688 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 1688;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([108,97,115,116,0,0,0,0,105,100,0,0,0,0,0,0,102,108,111,111,114,0,0,0,102,97,108,115,101,0,0,0,99,111,117,110,116,0,0,0,99,111,110,116,97,105,110,115,0,0,0,0,0,0,0,0,99,111,110,99,97,116,0,0,58,0,0,0,0,0,0,0,116,114,117,101,0,0,0,0,116,114,97,110,115,108,97,116,101,0,0,0,0,0,0,0,115,117,109,0,0,0,0,0,115,117,98,115,116,114,105,110,103,45,98,101,102,111,114,101,0,0,0,0,0,0,0,0,115,117,98,115,116,114,105,110,103,45,97,102,116,101,114,0,115,117,98,115,116,114,105,110,103,0,0,0,0,0,0,0,115,116,114,105,110,103,45,108,101,110,103,116,104,0,0,0,99,101,105,108,105,110,103,0,115,116,114,105,110,103,0,0,115,116,97,114,116,115,45,119,105,116,104,0,0,0,0,0,114,111,117,110,100,0,0,0,112,111,115,105,116,105,111,110,0,0,0,0,0,0,0,0,110,117,109,98,101,114,0,0,110,111,116,0,0,0,0,0,110,111,114,109,97,108,105,122,101,45,115,112,97,99,101,0,110,97,109,101,115,112,97,99,101,45,117,114,105,0,0,0,110,97,109,101,0,0,0,0,108,111,99,97,108,45,110,97,109,101,0,0,0,0,0,0,98,111,111,108,101,97,110,0,108,97,110,103,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore8XMLNames8langAttrE=env.__ZN7WebCore8XMLNames8langAttrE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore5XPath7FunLangE=(H_BASE+648)|0;
  var __ZTVN7WebCore5XPath12FunSubstringE=(H_BASE+1000)|0;
  var __ZTVN7WebCore5XPath15FunStringLengthE=(H_BASE+872)|0;
  var __ZTVN7WebCore5XPath5FunIdE=(H_BASE+744)|0;
  var __ZTVN7WebCore5XPath8FunFloorE=(H_BASE+456)|0;
  var __ZTVN7WebCore5XPath13FunStartsWithE=(H_BASE+936)|0;
  var __ZTVN7WebCore5XPath17FunSubstringAfterE=(H_BASE+808)|0;
  var __ZTVN7WebCore5XPath15FunNamespaceURIE=(H_BASE+904)|0;
  var __ZTVN7WebCore5XPath9FunConcatE=(H_BASE+392)|0;
  var __ZTVN7WebCore5XPath8FunFalseE=(H_BASE+488)|0;
  var __ZTVN7WebCore5XPath10ExpressionE=(H_BASE+1192)|0;
  var __ZTVN7WebCore5XPath18FunSubstringBeforeE=(H_BASE+776)|0;
  var __ZTVN7WebCore5XPath12FunTranslateE=(H_BASE+968)|0;
  var __ZTVN7WebCore5XPath9FunStringE=(H_BASE+328)|0;
  var __ZTVN7WebCore5XPath7FunTrueE=(H_BASE+552)|0;
  var __ZTVN7WebCore5XPath8FunRoundE=(H_BASE+424)|0;
  var __ZTVN7WebCore5XPath7FunNameE=(H_BASE+584)|0;
  var __ZTVN7WebCore5XPath10FunCeilingE=(H_BASE+1128)|0;
  var __ZTVN7WebCore5XPath12FunLocalNameE=(H_BASE+1032)|0;
  var __ZTVN7WebCore5XPath17FunNormalizeSpaceE=(H_BASE+840)|0;
  var __ZTVN7WebCore5XPath7FunLastE=(H_BASE+616)|0;
  var __ZTVN7WebCore5XPath6FunSumE=(H_BASE+680)|0;
  var __ZTVN7WebCore5XPath8FunCountE=(H_BASE+520)|0;
  var __ZTVN7WebCore5XPath9FunNumberE=(H_BASE+360)|0;
  var __ZTVN7WebCore5XPath11FunPositionE=(H_BASE+1064)|0;
  var __ZTVN7WebCore5XPath11FunContainsE=(H_BASE+1096)|0;
  var __ZTVN7WebCore5XPath10FunBooleanE=(H_BASE+1160)|0;
  var __ZTVN7WebCore5XPath6FunNotE=(H_BASE+712)|0;
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
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var _floor=env._floor;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _ceil=env._ceil;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore5XPath5FunId8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 40 | 0;
 i8 = i3 + 64 | 0;
 i9 = i3 + 72 | 0;
 i10 = i3 + 80 | 0;
 i11 = i3 + 104 | 0;
 i12 = i3 + 112 | 0;
 i13 = i3 + 120 | 0;
 i14 = i3 + 128 | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i15 = HEAP32[HEAP32[i2 + 4 >> 2] >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] & 63](i6, i15);
 i15 = i7 | 0;
 HEAP32[i15 >> 2] = 0;
 i2 = i7 + 4 | 0;
 HEAP32[i2 >> 2] = 0;
 i16 = i7 + 8 | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = i7 + 12 | 0;
 HEAP8[i17] = 1;
 i18 = i7 + 16 | 0;
 HEAP32[i18 >> 2] = 0;
 i19 = i7 + 20 | 0;
 HEAP32[i19 >> 2] = 0;
 do {
  if ((HEAP32[i6 >> 2] | 0) == 0) {
   i20 = __ZNK7WebCore5XPath5Value9toNodeSetEv(i6) | 0;
   i21 = i20 + 12 | 0;
   if ((HEAP32[i21 >> 2] | 0) == 0) {
    break;
   }
   i22 = i20 + 4 | 0;
   i20 = i8 | 0;
   i23 = i7 + 20 | 0;
   i24 = 0;
   while (1) {
    __ZN7WebCore5XPath11stringValueEPNS_4NodeE(i8, HEAP32[(HEAP32[i22 >> 2] | 0) + (i24 << 2) >> 2] | 0);
    __ZN3WTF13StringBuilder6appendERKNS_6StringE(i7, i8);
    HEAP8[i5] = 32;
    i25 = HEAP32[i16 >> 2] | 0;
    do {
     if ((i25 | 0) == 0) {
      i26 = 12;
     } else {
      i27 = HEAP32[i15 >> 2] | 0;
      if (i27 >>> 0 >= (HEAP32[i25 + 4 >> 2] | 0) >>> 0) {
       i26 = 12;
       break;
      }
      if ((HEAP32[i2 >> 2] | 0) != 0) {
       i26 = 12;
       break;
      }
      i28 = (HEAP8[i17] & 1) == 0;
      HEAP32[i15 >> 2] = i27 + 1;
      if (i28) {
       HEAP16[(HEAP32[i23 >> 2] | 0) + (i27 << 1) >> 1] = 32;
       break;
      } else {
       HEAP8[(HEAP32[i19 >> 2] | 0) + i27 | 0] = 32;
       break;
      }
     }
    } while (0);
    if ((i26 | 0) == 12) {
     i26 = 0;
     __ZN3WTF13StringBuilder6appendEPKhj(i7, i5, 1);
    }
    i25 = HEAP32[i20 >> 2] | 0;
    do {
     if ((i25 | 0) != 0) {
      i27 = i25 | 0;
      i28 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
      if ((i28 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i25);
       break;
      } else {
       HEAP32[i27 >> 2] = i28;
       break;
      }
     }
    } while (0);
    i24 = i24 + 1 | 0;
    if (i24 >>> 0 >= (HEAP32[i21 >> 2] | 0) >>> 0) {
     break;
    }
   }
  } else {
   __ZNK7WebCore5XPath5Value8toStringEv(i9, i6);
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i7, i9);
   i21 = HEAP32[i9 >> 2] | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   i24 = i21 | 0;
   i20 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    break;
   } else {
    HEAP32[i24 >> 2] = i20;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[(HEAP32[(__ZN7WebCore5XPath10Expression17evaluationContextEv() | 0) >> 2] | 0) + 20 >> 2] | 0;
 _memset(i10 | 0, 0, 20) | 0;
 i7 = HEAP32[i15 >> 2] | 0;
 i5 = i13 | 0;
 i19 = i4 | 0;
 i8 = i12 | 0;
 i20 = i10 | 0;
 i24 = i14 + 8 | 0;
 i21 = 0;
 i23 = 0;
 i22 = 0;
 i25 = 0;
 L31 : while (1) {
  i28 = i21;
  L33 : while (1) {
   i27 = i28 >>> 0 < i7 >>> 0;
   do {
    if (i27) {
     i29 = HEAP32[i2 >> 2] | 0;
     i30 = (i29 | 0) == 0 ? HEAP32[i16 >> 2] | 0 : i29;
     if ((HEAP8[i17] & 1) == 0) {
      i31 = HEAP16[(HEAP32[i30 + 8 >> 2] | 0) + (i28 << 1) >> 1] | 0;
     } else {
      i31 = HEAPU8[(HEAP32[i30 + 8 >> 2] | 0) + i28 | 0] | 0;
     }
     if (!((i31 << 16 >> 16 | 0) == 32 | (i31 << 16 >> 16 | 0) == 10 | (i31 << 16 >> 16 | 0) == 13 | (i31 << 16 >> 16 | 0) == 9)) {
      break;
     }
     i28 = i28 + 1 | 0;
     continue L33;
    }
   } while (0);
   if ((i28 | 0) == (i7 | 0)) {
    break L31;
   }
   L44 : do {
    if (i27) {
     i30 = HEAP32[i2 >> 2] | 0;
     i29 = (i30 | 0) == 0 ? HEAP32[i16 >> 2] | 0 : i30;
     i30 = i29 + 8 | 0;
     i32 = i29 + 8 | 0;
     if ((HEAP8[i17] & 1) == 0) {
      i29 = i28;
      while (1) {
       i33 = HEAP16[(HEAP32[i30 >> 2] | 0) + (i29 << 1) >> 1] | 0;
       if ((i33 << 16 >> 16 | 0) == 32 | (i33 << 16 >> 16 | 0) == 10 | (i33 << 16 >> 16 | 0) == 13 | (i33 << 16 >> 16 | 0) == 9) {
        i34 = i29;
        break L44;
       }
       i33 = i29 + 1 | 0;
       if (i33 >>> 0 < i7 >>> 0) {
        i29 = i33;
       } else {
        i34 = i33;
        break;
       }
      }
     } else {
      i29 = i28;
      while (1) {
       i30 = HEAPU8[(HEAP32[i32 >> 2] | 0) + i29 | 0] | 0;
       if ((i30 << 16 >> 16 | 0) == 32 | (i30 << 16 >> 16 | 0) == 10 | (i30 << 16 >> 16 | 0) == 13 | (i30 << 16 >> 16 | 0) == 9) {
        i34 = i29;
        break L44;
       }
       i30 = i29 + 1 | 0;
       if (i30 >>> 0 < i7 >>> 0) {
        i29 = i30;
       } else {
        i34 = i30;
        break;
       }
      }
     }
    } else {
     i34 = i28;
    }
   } while (0);
   i27 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i27 | 0) == 0) {
     i35 = 0;
    } else {
     i29 = HEAP32[i2 >> 2] | 0;
     if ((i29 | 0) != 0) {
      if ((HEAP32[i29 + 16 >> 2] & 32 | 0) == 0) {
       i35 = HEAP32[i29 + 8 >> 2] | 0;
       break;
      } else {
       i35 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i29) | 0;
       break;
      }
     }
     i29 = HEAP32[i16 >> 2] | 0;
     do {
      if ((HEAP32[i29 + 16 >> 2] & 64 | 0) == 0) {
       i36 = i27;
       i37 = i29;
      } else {
       i32 = HEAP32[i18 >> 2] | 0;
       if (i32 >>> 0 >= i27 >>> 0) {
        i36 = i27;
        i37 = i29;
        break;
       }
       __ZNK3WTF10StringImpl19upconvertCharactersEjj(i29, i32, i27);
       i36 = HEAP32[i15 >> 2] | 0;
       i37 = HEAP32[i16 >> 2] | 0;
      }
     } while (0);
     HEAP32[i18 >> 2] = i36;
     if ((HEAP32[i37 + 16 >> 2] & 32 | 0) == 0) {
      i35 = HEAP32[i37 + 8 >> 2] | 0;
      break;
     } else {
      i35 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i37) | 0;
      break;
     }
    }
   } while (0);
   __ZN3WTF6StringC1EPKtj(i13, i35 + (i28 << 1) | 0, i34 - i28 | 0);
   i27 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i27 | 0) == 0) {
     HEAP32[i19 >> 2] = 0;
    } else {
     if ((HEAP32[i27 + 16 >> 2] & 16 | 0) == 0) {
      __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i27);
      break;
     } else {
      HEAP32[i19 >> 2] = i27;
      i29 = i27 | 0;
      HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 2;
      break;
     }
    }
   } while (0);
   HEAP32[i8 >> 2] = HEAP32[i19 >> 2];
   i27 = __ZNK7WebCore9TreeScope14getElementByIdERKN3WTF12AtomicStringE(i9, i12) | 0;
   i29 = i27 | 0;
   i32 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i32 | 0) != 0) {
     i30 = i32 | 0;
     i33 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
     if ((i33 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i32);
      break;
     } else {
      HEAP32[i30 >> 2] = i33;
      break;
     }
    }
   } while (0);
   i32 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i32 | 0) != 0) {
     i33 = i32 | 0;
     i30 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
     if ((i30 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i32);
      break;
     } else {
      HEAP32[i33 >> 2] = i30;
      break;
     }
    }
   } while (0);
   HEAP32[i11 >> 2] = i29;
   if ((i27 | 0) == 0) {
    i28 = i34;
    continue;
   }
   __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i14, i20, i11, i11);
   if ((HEAP8[i24] & 1) == 0) {
    i28 = i34;
   } else {
    break;
   }
  }
  i28 = HEAP32[i11 >> 2] | 0;
  if ((i28 | 0) != 0) {
   i32 = i28 + 8 | 0;
   HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
  }
  if ((i25 | 0) != (i22 | 0)) {
   HEAP32[i23 + (i25 << 2) >> 2] = i28;
   i21 = i34;
   i23 = i23;
   i22 = i22;
   i25 = i25 + 1 | 0;
   continue;
  }
  i32 = i25 + 1 | 0;
  i30 = i32 + (i25 >>> 2) | 0;
  i33 = i30 >>> 0 > 16 >>> 0 ? i30 : 16;
  i30 = i33 >>> 0 > i32 >>> 0 ? i33 : i32;
  do {
   if (i25 >>> 0 < i30 >>> 0) {
    if (i30 >>> 0 > 1073741823 >>> 0) {
     i26 = 69;
     break L31;
    }
    i33 = __ZN3WTF18fastMallocGoodSizeEj(i30 << 2) | 0;
    i38 = i33 >>> 2;
    i39 = __ZN3WTF10fastMallocEj(i33) | 0;
    i33 = i39;
    i40 = i23;
    _memcpy(i39 | 0, i40 | 0, i25 << 2) | 0;
    if ((i23 | 0) == 0) {
     i41 = i33;
     i42 = i38;
     break;
    }
    i39 = (i33 | 0) == (i23 | 0);
    __ZN3WTF8fastFreeEPv(i40);
    i41 = i39 ? 0 : i33;
    i42 = i39 ? 0 : i38;
   } else {
    i41 = i23;
    i42 = i25;
   }
  } while (0);
  HEAP32[i41 + (i25 << 2) >> 2] = i28;
  i21 = i34;
  i23 = i41;
  i22 = i42;
  i25 = i32;
 }
 if ((i26 | 0) == 69) {
  _WTFCrash();
 }
 HEAP32[i1 >> 2] = 0;
 i26 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i26 >> 2] = 1;
 HEAP32[i26 + 4 >> 2] = 0;
 HEAP8[i26 + 8 | 0] = 0;
 HEAP8[i26 + 9 | 0] = 0;
 HEAP32[i26 + 20 >> 2] = i25;
 HEAP32[i26 + 12 >> 2] = i23;
 HEAP32[i26 + 16 >> 2] = i22;
 HEAP32[i1 + 16 >> 2] = i26;
 i26 = HEAP32[i10 >> 2] | 0;
 if ((i26 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i26);
 }
 i26 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i26 | 0) != 0) {
   i16 = i26 | 0;
   i10 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i26);
    break;
   } else {
    HEAP32[i16 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i26 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i26 | 0) != 0) {
   i2 = i26 | 0;
   i10 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i26);
    break;
   } else {
    HEAP32[i2 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i26 = HEAP32[i6 + 16 >> 2] | 0;
 if ((i26 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i26 | 0);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore5XPath12FunTranslate8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 48 | 0;
 i9 = i3 + 56 | 0;
 i10 = i3 + 80 | 0;
 i11 = i3 + 88 | 0;
 i12 = i3 + 112 | 0;
 i13 = i2 + 12 | 0;
 if ((HEAP32[i13 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i14 = i2 + 4 | 0;
 i2 = HEAP32[HEAP32[i14 >> 2] >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 63](i7, i2);
 __ZNK7WebCore5XPath5Value8toStringEv(i6, i7);
 i2 = HEAP32[i7 + 16 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i2 | 0);
 }
 if ((HEAP32[i13 >> 2] | 0) >>> 0 <= 1 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i2 = HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 63](i9, i2);
 __ZNK7WebCore5XPath5Value8toStringEv(i8, i9);
 i2 = HEAP32[i9 + 16 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i2 | 0);
 }
 if ((HEAP32[i13 >> 2] | 0) >>> 0 <= 2 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i13 = HEAP32[(HEAP32[i14 >> 2] | 0) + 8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 8 >> 2] & 63](i11, i13);
 __ZNK7WebCore5XPath5Value8toStringEv(i10, i11);
 i13 = HEAP32[i11 + 16 >> 2] | 0;
 if ((i13 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i13 | 0);
 }
 i13 = i12 | 0;
 HEAP32[i13 >> 2] = 0;
 i11 = i12 + 4 | 0;
 HEAP32[i11 >> 2] = 0;
 i14 = i12 + 8 | 0;
 HEAP32[i14 >> 2] = 0;
 i2 = i12 + 12 | 0;
 HEAP8[i2] = 1;
 HEAP32[i12 + 16 >> 2] = 0;
 i9 = i12 + 20 | 0;
 HEAP32[i9 >> 2] = 0;
 i7 = i6 | 0;
 i6 = i8 | 0;
 i8 = i12 + 20 | 0;
 i15 = i10 | 0;
 i10 = 0;
 while (1) {
  i16 = HEAP32[i7 >> 2] | 0;
  i17 = (i16 | 0) == 0;
  if (i17) {
   i18 = 0;
  } else {
   i18 = HEAP32[i16 + 4 >> 2] | 0;
  }
  if (i10 >>> 0 >= i18 >>> 0) {
   break;
  }
  do {
   if (i17) {
    i19 = 0;
   } else {
    if ((HEAP32[i16 + 4 >> 2] | 0) >>> 0 <= i10 >>> 0) {
     i19 = 0;
     break;
    }
    i20 = i16 + 8 | 0;
    if ((HEAP32[i16 + 16 >> 2] & 32 | 0) == 0) {
     i19 = HEAP16[(HEAP32[i20 >> 2] | 0) + (i10 << 1) >> 1] | 0;
     break;
    } else {
     i19 = HEAPU8[(HEAP32[i20 >> 2] | 0) + i10 | 0] | 0;
     break;
    }
   }
  } while (0);
  i16 = HEAP32[i6 >> 2] | 0;
  L32 : do {
   if ((i16 | 0) == 0) {
    i21 = 32;
   } else {
    if ((HEAP32[i16 + 16 >> 2] & 32 | 0) == 0) {
     i17 = HEAP32[i16 + 8 >> 2] | 0;
     i20 = HEAP32[i16 + 4 >> 2] | 0;
     i22 = 0;
     while (1) {
      if (i22 >>> 0 >= i20 >>> 0) {
       i21 = 32;
       break L32;
      }
      if ((HEAP16[i17 + (i22 << 1) >> 1] | 0) == i19 << 16 >> 16) {
       i23 = i22;
       break;
      } else {
       i22 = i22 + 1 | 0;
      }
     }
    } else {
     i22 = HEAP32[i16 + 8 >> 2] | 0;
     i17 = HEAP32[i16 + 4 >> 2] | 0;
     if ((i19 & 65535) >>> 0 > 255 >>> 0) {
      i21 = 32;
      break;
     }
     i20 = i19 & 255;
     i24 = 0;
     while (1) {
      if (i24 >>> 0 >= i17 >>> 0) {
       i21 = 32;
       break L32;
      }
      if ((HEAP8[i22 + i24 | 0] | 0) == i20 << 24 >> 24) {
       i23 = i24;
       break;
      } else {
       i24 = i24 + 1 | 0;
      }
     }
    }
    if ((i23 | 0) == -1) {
     i21 = 32;
     break;
    }
    i24 = HEAP32[i15 >> 2] | 0;
    i20 = (i24 | 0) == 0;
    if (i20) {
     i25 = 0;
    } else {
     i25 = HEAP32[i24 + 4 >> 2] | 0;
    }
    if (i23 >>> 0 >= i25 >>> 0) {
     break;
    }
    do {
     if (i20) {
      i26 = 0;
     } else {
      if ((HEAP32[i24 + 4 >> 2] | 0) >>> 0 <= i23 >>> 0) {
       i26 = 0;
       break;
      }
      i22 = i24 + 8 | 0;
      if ((HEAP32[i24 + 16 >> 2] & 32 | 0) == 0) {
       i26 = HEAP16[(HEAP32[i22 >> 2] | 0) + (i23 << 1) >> 1] | 0;
       break;
      } else {
       i26 = HEAPU8[(HEAP32[i22 >> 2] | 0) + i23 | 0] | 0;
       break;
      }
     }
    } while (0);
    HEAP16[i4 >> 1] = i26;
    i24 = HEAP32[i14 >> 2] | 0;
    do {
     if ((i24 | 0) != 0) {
      i20 = HEAP32[i13 >> 2] | 0;
      if (i20 >>> 0 >= (HEAP32[i24 + 4 >> 2] | 0) >>> 0) {
       break;
      }
      if ((HEAP32[i11 >> 2] | 0) != 0) {
       break;
      }
      if ((HEAP8[i2] & 1) == 0) {
       HEAP32[i13 >> 2] = i20 + 1;
       HEAP16[(HEAP32[i8 >> 2] | 0) + (i20 << 1) >> 1] = i26;
       break L32;
      }
      if ((i26 & 65535) >>> 0 > 255 >>> 0) {
       break;
      }
      HEAP32[i13 >> 2] = i20 + 1;
      HEAP8[(HEAP32[i9 >> 2] | 0) + i20 | 0] = i26;
      break L32;
     }
    } while (0);
    __ZN3WTF13StringBuilder6appendEPKtj(i12, i4, 1);
   }
  } while (0);
  L66 : do {
   if ((i21 | 0) == 32) {
    i21 = 0;
    HEAP16[i5 >> 1] = i19;
    i16 = HEAP32[i14 >> 2] | 0;
    do {
     if ((i16 | 0) != 0) {
      i24 = HEAP32[i13 >> 2] | 0;
      if (i24 >>> 0 >= (HEAP32[i16 + 4 >> 2] | 0) >>> 0) {
       break;
      }
      if ((HEAP32[i11 >> 2] | 0) != 0) {
       break;
      }
      if ((HEAP8[i2] & 1) == 0) {
       HEAP32[i13 >> 2] = i24 + 1;
       HEAP16[(HEAP32[i8 >> 2] | 0) + (i24 << 1) >> 1] = i19;
       break L66;
      }
      if ((i19 & 65535) >>> 0 > 255 >>> 0) {
       break;
      }
      HEAP32[i13 >> 2] = i24 + 1;
      HEAP8[(HEAP32[i9 >> 2] | 0) + i24 | 0] = i19;
      break L66;
     }
    } while (0);
    __ZN3WTF13StringBuilder6appendEPKtj(i12, i5, 1);
   }
  } while (0);
  i10 = i10 + 1 | 0;
 }
 __ZN3WTF13StringBuilder11shrinkToFitEv(i12);
 i10 = HEAP32[i11 >> 2] | 0;
 if ((i10 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i12);
  i12 = HEAP32[i11 >> 2] | 0;
  if ((i12 | 0) == 0) {
   i27 = 0;
  } else {
   i28 = i12;
   i21 = 59;
  }
 } else {
  i28 = i10;
  i21 = 59;
 }
 if ((i21 | 0) == 59) {
  i21 = i28 | 0;
  HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 2;
  i27 = i28;
 }
 HEAP32[i1 >> 2] = 3;
 i28 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i28 >> 2] = 1;
 HEAP32[i28 + 4 >> 2] = i27;
 i21 = (i27 | 0) == 0;
 if (!i21) {
  i10 = i27 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 HEAP8[i28 + 8 | 0] = 1;
 HEAP8[i28 + 9 | 0] = 0;
 HEAP32[i28 + 12 >> 2] = 0;
 HEAP32[i28 + 16 >> 2] = 0;
 HEAP32[i28 + 20 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = i28;
 do {
  if (!i21) {
   i28 = i27 | 0;
   i1 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i27);
    break;
   } else {
    HEAP32[i28 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i27 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i14 = i27 | 0;
   i21 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i27);
    break;
   } else {
    HEAP32[i14 >> 2] = i21;
    break;
   }
  }
 } while (0);
 i27 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i11 = i27 | 0;
   i21 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i27);
    break;
   } else {
    HEAP32[i11 >> 2] = i21;
    break;
   }
  }
 } while (0);
 i27 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i15 = i27 | 0;
   i21 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i27);
    break;
   } else {
    HEAP32[i15 >> 2] = i21;
    break;
   }
  }
 } while (0);
 i27 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i6 = i27 | 0;
   i21 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i27);
    break;
   } else {
    HEAP32[i6 >> 2] = i21;
    break;
   }
  }
 } while (0);
 i27 = HEAP32[i7 >> 2] | 0;
 if ((i27 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i27 | 0;
 i21 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i21 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i27);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i7 >> 2] = i21;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore5XPath8Function6createERKN3WTF6StringEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 if (HEAP8[H_BASE + 1232 | 0] | 0) {
  if ((HEAP32[H_BASE + 1684 >> 2] | 0) == 0) {
   i7 = 4;
  }
 } else {
  _memset(H_BASE + 1672 | 0, 0, 20) | 0;
  HEAP8[H_BASE + 1232 | 0] = 1;
  i7 = 4;
 }
 if ((i7 | 0) == 4) {
  if (!(HEAP8[H_BASE + 1224 | 0] | 0)) {
   HEAP32[H_BASE + 1240 >> 2] = H_BASE + 312;
   HEAP32[H_BASE + 1244 >> 2] = F_BASE_vi + 160;
   HEAP32[H_BASE + 1248 >> 2] = 1;
   HEAP32[H_BASE + 1252 >> 2] = 1;
   HEAP32[H_BASE + 1256 >> 2] = H_BASE + 184;
   HEAP32[H_BASE + 1260 >> 2] = F_BASE_vi + 52;
   HEAP32[H_BASE + 1264 >> 2] = 1;
   HEAP32[H_BASE + 1268 >> 2] = 1;
   HEAP32[H_BASE + 1272 >> 2] = H_BASE + 64;
   HEAP32[H_BASE + 1276 >> 2] = F_BASE_vi + 10;
   HEAP32[H_BASE + 1280 >> 2] = 2;
   HEAP32[H_BASE + 1284 >> 2] = -1;
   HEAP32[H_BASE + 1288 >> 2] = H_BASE + 48;
   HEAP32[H_BASE + 1292 >> 2] = F_BASE_vi + 128;
   HEAP32[H_BASE + 1296 >> 2] = 2;
   HEAP32[H_BASE + 1300 >> 2] = 2;
   HEAP32[H_BASE + 1304 >> 2] = H_BASE + 40;
   HEAP32[H_BASE + 1308 >> 2] = F_BASE_vi + 54;
   HEAP32[H_BASE + 1312 >> 2] = 1;
   HEAP32[H_BASE + 1316 >> 2] = 1;
   HEAP32[H_BASE + 1320 >> 2] = H_BASE + 32;
   HEAP32[H_BASE + 1324 >> 2] = F_BASE_vi + 16;
   HEAP32[H_BASE + 1328 >> 2] = 0;
   HEAP32[H_BASE + 1332 >> 2] = 0;
   HEAP32[H_BASE + 1336 >> 2] = H_BASE + 24;
   HEAP32[H_BASE + 1340 >> 2] = F_BASE_vi + 80;
   HEAP32[H_BASE + 1344 >> 2] = 1;
   HEAP32[H_BASE + 1348 >> 2] = 1;
   HEAP32[H_BASE + 1352 >> 2] = H_BASE + 16;
   HEAP32[H_BASE + 1356 >> 2] = F_BASE_vi + 26;
   HEAP32[H_BASE + 1360 >> 2] = 1;
   HEAP32[H_BASE + 1364 >> 2] = 1;
   HEAP32[H_BASE + 1368 >> 2] = H_BASE + 320;
   HEAP32[H_BASE + 1372 >> 2] = F_BASE_vi + 48;
   HEAP32[H_BASE + 1376 >> 2] = 1;
   HEAP32[H_BASE + 1380 >> 2] = 1;
   HEAP32[H_BASE + 1384 >> 2] = H_BASE + 8;
   HEAP32[H_BASE + 1388 >> 2] = F_BASE_vi + 132;
   HEAP32[H_BASE + 1392 >> 2] = 0;
   HEAP32[H_BASE + 1396 >> 2] = 0;
   HEAP32[H_BASE + 1400 >> 2] = H_BASE + 296;
   HEAP32[H_BASE + 1404 >> 2] = F_BASE_vi + 144;
   HEAP32[H_BASE + 1408 >> 2] = 0;
   HEAP32[H_BASE + 1412 >> 2] = 1;
   HEAP32[H_BASE + 1416 >> 2] = H_BASE + 288;
   HEAP32[H_BASE + 1420 >> 2] = F_BASE_vi + 116;
   HEAP32[H_BASE + 1424 >> 2] = 0;
   HEAP32[H_BASE + 1428 >> 2] = 1;
   HEAP32[H_BASE + 1432 >> 2] = H_BASE + 272;
   HEAP32[H_BASE + 1436 >> 2] = F_BASE_vi + 70;
   HEAP32[H_BASE + 1440 >> 2] = 0;
   HEAP32[H_BASE + 1444 >> 2] = 1;
   HEAP32[H_BASE + 1448 >> 2] = H_BASE + 256;
   HEAP32[H_BASE + 1452 >> 2] = F_BASE_vi + 140;
   HEAP32[H_BASE + 1456 >> 2] = 0;
   HEAP32[H_BASE + 1460 >> 2] = 1;
   HEAP32[H_BASE + 1464 >> 2] = H_BASE + 248;
   HEAP32[H_BASE + 1468 >> 2] = F_BASE_vi + 122;
   HEAP32[H_BASE + 1472 >> 2] = 1;
   HEAP32[H_BASE + 1476 >> 2] = 1;
   HEAP32[H_BASE + 1480 >> 2] = H_BASE + 240;
   HEAP32[H_BASE + 1484 >> 2] = F_BASE_vi + 32;
   HEAP32[H_BASE + 1488 >> 2] = 0;
   HEAP32[H_BASE + 1492 >> 2] = 1;
   HEAP32[H_BASE + 1496 >> 2] = H_BASE + 224;
   HEAP32[H_BASE + 1500 >> 2] = F_BASE_vi + 56;
   HEAP32[H_BASE + 1504 >> 2] = 0;
   HEAP32[H_BASE + 1508 >> 2] = 0;
   HEAP32[H_BASE + 1512 >> 2] = H_BASE + 216;
   HEAP32[H_BASE + 1516 >> 2] = F_BASE_vi + 30;
   HEAP32[H_BASE + 1520 >> 2] = 1;
   HEAP32[H_BASE + 1524 >> 2] = 1;
   HEAP32[H_BASE + 1528 >> 2] = H_BASE + 200;
   HEAP32[H_BASE + 1532 >> 2] = F_BASE_vi + 44;
   HEAP32[H_BASE + 1536 >> 2] = 2;
   HEAP32[H_BASE + 1540 >> 2] = 2;
   HEAP32[H_BASE + 1544 >> 2] = H_BASE + 192;
   HEAP32[H_BASE + 1548 >> 2] = F_BASE_vi + 148;
   HEAP32[H_BASE + 1552 >> 2] = 0;
   HEAP32[H_BASE + 1556 >> 2] = 1;
   HEAP32[H_BASE + 1560 >> 2] = H_BASE + 168;
   HEAP32[H_BASE + 1564 >> 2] = F_BASE_vi + 120;
   HEAP32[H_BASE + 1568 >> 2] = 0;
   HEAP32[H_BASE + 1572 >> 2] = 1;
   HEAP32[H_BASE + 1576 >> 2] = H_BASE + 152;
   HEAP32[H_BASE + 1580 >> 2] = F_BASE_vi + 46;
   HEAP32[H_BASE + 1584 >> 2] = 2;
   HEAP32[H_BASE + 1588 >> 2] = 3;
   HEAP32[H_BASE + 1592 >> 2] = H_BASE + 136;
   HEAP32[H_BASE + 1596 >> 2] = F_BASE_vi + 164;
   HEAP32[H_BASE + 1600 >> 2] = 2;
   HEAP32[H_BASE + 1604 >> 2] = 2;
   HEAP32[H_BASE + 1608 >> 2] = H_BASE + 112;
   HEAP32[H_BASE + 1612 >> 2] = F_BASE_vi + 90;
   HEAP32[H_BASE + 1616 >> 2] = 2;
   HEAP32[H_BASE + 1620 >> 2] = 2;
   HEAP32[H_BASE + 1624 >> 2] = H_BASE + 104;
   HEAP32[H_BASE + 1628 >> 2] = F_BASE_vi + 72;
   HEAP32[H_BASE + 1632 >> 2] = 1;
   HEAP32[H_BASE + 1636 >> 2] = 1;
   HEAP32[H_BASE + 1640 >> 2] = H_BASE + 88;
   HEAP32[H_BASE + 1644 >> 2] = F_BASE_vi + 62;
   HEAP32[H_BASE + 1648 >> 2] = 3;
   HEAP32[H_BASE + 1652 >> 2] = 3;
   HEAP32[H_BASE + 1656 >> 2] = H_BASE + 80;
   HEAP32[H_BASE + 1660 >> 2] = F_BASE_vi + 40;
   HEAP32[H_BASE + 1664 >> 2] = 0;
   HEAP32[H_BASE + 1668 >> 2] = 0;
   HEAP8[H_BASE + 1224 | 0] = 1;
  }
  i8 = i5 | 0;
  i9 = 0;
  while (1) {
   __ZN3WTF6StringC1EPKc(i5, HEAP32[H_BASE + 1240 + (i9 << 4) >> 2] | 0);
   __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore5XPath16FunctionMapValueEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EES1_RKS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i6, H_BASE + 1672, i5, H_BASE + 1240 + (i9 << 4) + 4 | 0);
   i10 = HEAP32[i8 >> 2] | 0;
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
   i9 = i9 + 1 | 0;
   if (i9 >>> 0 >= 27 >>> 0) {
    break;
   }
  }
 }
 i9 = HEAP32[H_BASE + 1672 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i8 = HEAP32[H_BASE + 1676 >> 2] | 0;
  i13 = i8 << 4 | 0;
  i14 = 0;
  i15 = i8;
 } else {
  i8 = HEAP32[H_BASE + 1680 >> 2] | 0;
  i5 = i2 | 0;
  i2 = HEAP32[i5 >> 2] | 0;
  i6 = HEAP32[i2 + 16 >> 2] | 0;
  if (i6 >>> 0 > 127 >>> 0) {
   i16 = i6 >>> 7;
  } else {
   i16 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i2) | 0;
  }
  i2 = (i16 >>> 23) + ~i16 | 0;
  i6 = i2 << 12 ^ i2;
  i2 = i6 >>> 7 ^ i6;
  i6 = i2 << 2 ^ i2;
  i2 = i6 >>> 20 ^ i6 | 1;
  i6 = i16;
  i16 = 0;
  while (1) {
   i10 = i6 & i8;
   i12 = i9 + (i10 << 4) | 0;
   i11 = HEAP32[i12 >> 2] | 0;
   i17 = i11;
   if ((i17 | 0) == 0) {
    i18 = 0;
    break;
   } else if ((i17 | 0) != (-1 | 0)) {
    if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i11, HEAP32[i5 >> 2] | 0) | 0) {
     i18 = i12;
     break;
    }
   }
   i12 = (i16 | 0) == 0 ? i2 : i16;
   i6 = i12 + i10 | 0;
   i16 = i12;
  }
  i16 = HEAP32[H_BASE + 1672 >> 2] | 0;
  i6 = HEAP32[H_BASE + 1676 >> 2] | 0;
  i13 = (i18 | 0) == 0 ? i16 + (i6 << 4) | 0 : i18;
  i14 = i16;
  i15 = i6;
 }
 if ((i13 | 0) == (i14 + (i15 << 4) | 0)) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i15 = HEAP32[i13 + 8 >> 2] | 0;
 i14 = HEAP32[i13 + 12 >> 2] | 0;
 i6 = (i14 | 0) == -1;
 do {
  if ((i15 | 0) == -1) {
   if (i6 | (i14 | 0) >= (i3 | 0)) {
    i7 = 30;
   } else {
    i7 = 29;
   }
  } else {
   i16 = (i15 | 0) <= (i3 | 0);
   if (i6) {
    if (i16) {
     i7 = 30;
     break;
    } else {
     i7 = 29;
     break;
    }
   } else {
    if (i16 & (i14 | 0) >= (i3 | 0)) {
     i7 = 30;
     break;
    } else {
     i7 = 29;
     break;
    }
   }
  }
 } while (0);
 if ((i7 | 0) == 29) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 } else if ((i7 | 0) == 30) {
  FUNCTION_TABLE_vi[HEAP32[i13 + 4 >> 2] & 255](i1);
  STACKTOP = i4;
  return;
 }
}
function __ZNK7WebCore5XPath12FunSubstring8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, d17 = +0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d22 = +0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 56 | 0;
 i8 = i3 + 80 | 0;
 i9 = i2 + 12 | 0;
 if ((HEAP32[i9 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i10 = i2 + 4 | 0;
 i2 = HEAP32[HEAP32[i10 >> 2] >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 63](i5, i2);
 __ZNK7WebCore5XPath5Value8toStringEv(i4, i5);
 i2 = HEAP32[i5 + 16 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i2 | 0);
 }
 if ((HEAP32[i9 >> 2] | 0) >>> 0 <= 1 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i2 = HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 63](i6, i2);
 d11 = +__ZNK7WebCore5XPath5Value8toNumberEv(i6);
 i2 = HEAP32[i6 + 16 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i2 | 0);
 }
 HEAPF64[tempDoublePtr >> 3] = d11;
 i2 = HEAP32[tempDoublePtr >> 2] | 0;
 i6 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
 i5 = i6 & 2147483647;
 i12 = 2146435072;
 L13 : do {
  if (i5 >>> 0 > i12 >>> 0 | i5 >>> 0 == i12 >>> 0 & (i2 & -1) >>> 0 > 0 >>> 0) {
   i13 = __ZN3WTF11emptyStringEv() | 0;
   HEAP32[i1 >> 2] = 3;
   i14 = __ZN3WTF10fastMallocEj(24) | 0;
   HEAP32[i14 >> 2] = 1;
   i15 = HEAP32[i13 >> 2] | 0;
   HEAP32[i14 + 4 >> 2] = i15;
   if ((i15 | 0) != 0) {
    i13 = i15 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
   }
   HEAP8[i14 + 8 | 0] = 1;
   HEAP8[i14 + 9 | 0] = 0;
   HEAP32[i14 + 12 >> 2] = 0;
   HEAP32[i14 + 16 >> 2] = 0;
   HEAP32[i14 + 20 >> 2] = 0;
   HEAP32[i1 + 16 >> 2] = i14;
  } else {
   i14 = i6 & 2146435072;
   i13 = 2146435071;
   do {
    if (i14 >>> 0 > i13 >>> 0 | i14 >>> 0 == i13 >>> 0 & (i2 & 0) >>> 0 > -1 >>> 0) {
     d16 = d11;
    } else {
     i15 = -1;
     if ((i6 | 0) > (i15 | 0) | (i6 | 0) == (i15 | 0) & i2 >>> 0 > -1 >>> 0 | d11 < +-.5) {
      d16 = +Math_floor(d11 + +.5);
      break;
     } else {
      d16 = d11 * +0;
      break;
     }
    }
   } while (0);
   i13 = ~~d16;
   i14 = (HEAP32[i9 >> 2] | 0) == 3;
   if (i14) {
    i15 = HEAP32[(HEAP32[i10 >> 2] | 0) + 8 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] & 63](i7, i15);
    d17 = +__ZNK7WebCore5XPath5Value8toNumberEv(i7);
    i15 = HEAP32[i7 + 16 >> 2] | 0;
    if ((i15 | 0) != 0) {
     __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i15 | 0);
    }
    HEAPF64[tempDoublePtr >> 3] = d17;
    i15 = HEAP32[tempDoublePtr >> 2] | 0;
    i18 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
    i19 = i18 & 2147483647;
    i20 = 2146435072;
    if (i19 >>> 0 > i20 >>> 0 | i19 >>> 0 == i20 >>> 0 & (i15 & -1) >>> 0 > 0 >>> 0) {
     i20 = __ZN3WTF11emptyStringEv() | 0;
     HEAP32[i1 >> 2] = 3;
     i19 = __ZN3WTF10fastMallocEj(24) | 0;
     HEAP32[i19 >> 2] = 1;
     i21 = HEAP32[i20 >> 2] | 0;
     HEAP32[i19 + 4 >> 2] = i21;
     if ((i21 | 0) != 0) {
      i20 = i21 | 0;
      HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
     }
     HEAP8[i19 + 8 | 0] = 1;
     HEAP8[i19 + 9 | 0] = 0;
     HEAP32[i19 + 12 >> 2] = 0;
     HEAP32[i19 + 16 >> 2] = 0;
     HEAP32[i19 + 20 >> 2] = 0;
     HEAP32[i1 + 16 >> 2] = i19;
     break;
    }
    i19 = i18 & 2146435072;
    i20 = 2146435071;
    do {
     if (i19 >>> 0 > i20 >>> 0 | i19 >>> 0 == i20 >>> 0 & (i15 & 0) >>> 0 > -1 >>> 0) {
      d22 = d17;
     } else {
      i21 = -1;
      if ((i18 | 0) > (i21 | 0) | (i18 | 0) == (i21 | 0) & i15 >>> 0 > -1 >>> 0 | d17 < +-.5) {
       d22 = +Math_floor(d17 + +.5);
       break;
      } else {
       d22 = d17 * +0;
       break;
      }
     }
    } while (0);
    i23 = ~~d22;
   } else {
    i23 = -1;
   }
   i15 = HEAP32[i4 >> 2] | 0;
   if ((i15 | 0) == 0) {
    i24 = 0;
   } else {
    i24 = HEAP32[i15 + 4 >> 2] | 0;
   }
   if ((i13 | 0) > (i24 | 0)) {
    i15 = __ZN3WTF11emptyStringEv() | 0;
    HEAP32[i1 >> 2] = 3;
    i18 = __ZN3WTF10fastMallocEj(24) | 0;
    HEAP32[i18 >> 2] = 1;
    i20 = HEAP32[i15 >> 2] | 0;
    HEAP32[i18 + 4 >> 2] = i20;
    if ((i20 | 0) != 0) {
     i15 = i20 | 0;
     HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
    }
    HEAP8[i18 + 8 | 0] = 1;
    HEAP8[i18 + 9 | 0] = 0;
    HEAP32[i18 + 12 >> 2] = 0;
    HEAP32[i18 + 16 >> 2] = 0;
    HEAP32[i18 + 20 >> 2] = 0;
    HEAP32[i1 + 16 >> 2] = i18;
    break;
   }
   i18 = (i13 | 0) > 0;
   do {
    if (i18 | i14 ^ 1) {
     i25 = i23;
     i26 = i18 ? i13 : 1;
    } else {
     i15 = i13 - 1 + i23 | 0;
     if ((i15 | 0) >= 1) {
      i25 = i15;
      i26 = 1;
      break;
     }
     i15 = __ZN3WTF11emptyStringEv() | 0;
     HEAP32[i1 >> 2] = 3;
     i20 = __ZN3WTF10fastMallocEj(24) | 0;
     HEAP32[i20 >> 2] = 1;
     i19 = HEAP32[i15 >> 2] | 0;
     HEAP32[i20 + 4 >> 2] = i19;
     if ((i19 | 0) != 0) {
      i15 = i19 | 0;
      HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
     }
     HEAP8[i20 + 8 | 0] = 1;
     HEAP8[i20 + 9 | 0] = 0;
     HEAP32[i20 + 12 >> 2] = 0;
     HEAP32[i20 + 16 >> 2] = 0;
     HEAP32[i20 + 20 >> 2] = 0;
     HEAP32[i1 + 16 >> 2] = i20;
     break L13;
    }
   } while (0);
   __ZNK3WTF6String9substringEjj(i8, i4, i26 - 1 | 0, i25);
   HEAP32[i1 >> 2] = 3;
   i13 = __ZN3WTF10fastMallocEj(24) | 0;
   HEAP32[i13 >> 2] = 1;
   i18 = i8 | 0;
   i14 = HEAP32[i18 >> 2] | 0;
   HEAP32[i13 + 4 >> 2] = i14;
   if ((i14 | 0) != 0) {
    i20 = i14 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
   }
   HEAP8[i13 + 8 | 0] = 1;
   HEAP8[i13 + 9 | 0] = 0;
   HEAP32[i13 + 12 >> 2] = 0;
   HEAP32[i13 + 16 >> 2] = 0;
   HEAP32[i13 + 20 >> 2] = 0;
   HEAP32[i1 + 16 >> 2] = i13;
   i13 = HEAP32[i18 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   i18 = i13 | 0;
   i20 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i18 >> 2] = i20;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i1 | 0;
 i8 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i8;
  STACKTOP = i3;
  return;
 }
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
function runPostSets() {
 HEAP32[H_BASE + 336 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_vi + 152;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_vi + 124;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_vi + 82;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_vi + 92;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_vi + 162;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_vi + 134;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_vi + 64;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_vi + 146;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_vi + 142;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_vi + 100;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_vi + 136;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_vi + 154;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_vi + 110;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_vi + 158;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_vi + 106;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_vi + 126;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_vi + 102;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_vi + 114;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_vi + 84;
 HEAP32[H_BASE + 728 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 732 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 752 >> 2] = F_BASE_vi + 74;
 HEAP32[H_BASE + 756 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 764 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 784 >> 2] = F_BASE_vi + 78;
 HEAP32[H_BASE + 788 >> 2] = F_BASE_vi + 60;
 HEAP32[H_BASE + 792 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 796 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 816 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 820 >> 2] = F_BASE_vi + 130;
 HEAP32[H_BASE + 824 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 828 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 848 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 852 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 856 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 860 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 880 >> 2] = F_BASE_vi + 76;
 HEAP32[H_BASE + 884 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 888 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 892 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 912 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 916 >> 2] = F_BASE_vi + 58;
 HEAP32[H_BASE + 920 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 924 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 944 >> 2] = F_BASE_vi + 150;
 HEAP32[H_BASE + 948 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 952 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 956 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 976 >> 2] = F_BASE_vi + 112;
 HEAP32[H_BASE + 980 >> 2] = F_BASE_vi + 86;
 HEAP32[H_BASE + 984 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 988 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 1008 >> 2] = F_BASE_vi + 108;
 HEAP32[H_BASE + 1012 >> 2] = F_BASE_vi + 118;
 HEAP32[H_BASE + 1016 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 1020 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 1040 >> 2] = F_BASE_vi + 166;
 HEAP32[H_BASE + 1044 >> 2] = F_BASE_vi + 96;
 HEAP32[H_BASE + 1048 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 1052 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 1072 >> 2] = F_BASE_vi + 156;
 HEAP32[H_BASE + 1076 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 1080 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 1084 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 1104 >> 2] = F_BASE_vi + 94;
 HEAP32[H_BASE + 1108 >> 2] = F_BASE_vi + 138;
 HEAP32[H_BASE + 1112 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 1116 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 1136 >> 2] = F_BASE_vi + 104;
 HEAP32[H_BASE + 1140 >> 2] = F_BASE_vi + 66;
 HEAP32[H_BASE + 1144 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 1148 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 1168 >> 2] = F_BASE_vi + 88;
 HEAP32[H_BASE + 1172 >> 2] = F_BASE_vi + 50;
 HEAP32[H_BASE + 1176 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 1180 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 1200 >> 2] = F_BASE_vi + 98;
 HEAP32[H_BASE + 1204 >> 2] = F_BASE_vi + 68;
 HEAP32[H_BASE + 1208 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1212 >> 2] = F_BASE_v + 2;
}
function __ZNK7WebCore5XPath7FunLang8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 40 | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i8 = HEAP32[HEAP32[i2 + 4 >> 2] >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] & 63](i5, i8);
 __ZNK7WebCore5XPath5Value8toStringEv(i4, i5);
 i8 = HEAP32[i5 + 16 >> 2] | 0;
 if ((i8 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i8 | 0);
 }
 i8 = HEAP32[(__ZN7WebCore5XPath10Expression17evaluationContextEv() | 0) >> 2] | 0;
 L7 : do {
  if ((i8 | 0) == 0) {
   i9 = 19;
  } else {
   i5 = i8;
   L8 : while (1) {
    L10 : do {
     if ((HEAP32[i5 + 12 >> 2] & 4 | 0) != 0) {
      if (!(__ZNK7WebCore7Element13hasAttributesEv(i5) | 0)) {
       break;
      }
      i2 = HEAP32[i5 + 48 >> 2] | 0;
      i10 = HEAP32[i2 + 4 >> 2] | 0;
      if ((i10 & 1 | 0) == 0) {
       i11 = i10 >>> 1 & 134217727;
       i12 = i2 + 20 | 0;
      } else {
       i10 = i2 + 24 | 0;
       i11 = HEAP32[i10 + 8 >> 2] | 0;
       i12 = HEAP32[i10 >> 2] | 0;
      }
      if ((i11 | 0) == 0) {
       break;
      }
      i10 = HEAP32[__ZN7WebCore8XMLNames8langAttrE >> 2] | 0;
      i2 = i10 + 12 | 0;
      i13 = i10 + 16 | 0;
      i14 = 0;
      while (1) {
       i15 = i12 + (i14 << 3) | 0;
       i16 = HEAP32[i15 >> 2] | 0;
       if ((i16 | 0) == (i10 | 0)) {
        break;
       }
       if ((HEAP32[i16 + 12 >> 2] | 0) == (HEAP32[i2 >> 2] | 0)) {
        if ((HEAP32[i16 + 16 >> 2] | 0) == (HEAP32[i13 >> 2] | 0)) {
         break;
        }
       }
       i16 = i14 + 1 | 0;
       if (i16 >>> 0 < i11 >>> 0) {
        i14 = i16;
       } else {
        break L10;
       }
      }
      if ((i15 | 0) != 0) {
       break L8;
      }
     }
    } while (0);
    i13 = HEAP32[i5 + 16 >> 2] | 0;
    if ((i13 | 0) == 0) {
     i9 = 19;
     break L7;
    } else {
     i5 = i13 | 0;
    }
   }
   i5 = i6 | 0;
   i13 = HEAP32[i12 + (i14 << 3) + 4 >> 2] | 0;
   HEAP32[i5 >> 2] = i13;
   if ((i13 | 0) == 0) {
    i17 = 0;
   } else {
    i2 = i13 | 0;
    HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
    i17 = HEAP32[i5 >> 2] | 0;
   }
   i2 = i4 | 0;
   L30 : do {
    if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(i17, HEAP32[i2 >> 2] | 0) | 0) {
     i18 = i17;
     i9 = 24;
    } else {
     i13 = i7 | 0;
     i10 = i17;
     while (1) {
      if ((i10 | 0) == 0) {
       break;
      }
      i16 = __ZN3WTF10StringImpl11reverseFindEtj(i10, 45, -1) | 0;
      if ((i16 | 0) == -1) {
       break;
      }
      __ZNK3WTF6String9substringEjj(i7, i6, 0, i16);
      i16 = HEAP32[i13 >> 2] | 0;
      HEAP32[i13 >> 2] = 0;
      i19 = HEAP32[i5 >> 2] | 0;
      HEAP32[i5 >> 2] = i16;
      do {
       if ((i19 | 0) != 0) {
        i16 = i19 | 0;
        i20 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
        if ((i20 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i19);
         break;
        } else {
         HEAP32[i16 >> 2] = i20;
         break;
        }
       }
      } while (0);
      i19 = HEAP32[i13 >> 2] | 0;
      do {
       if ((i19 | 0) != 0) {
        i20 = i19 | 0;
        i16 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
        if ((i16 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i19);
         break;
        } else {
         HEAP32[i20 >> 2] = i16;
         break;
        }
       }
      } while (0);
      i19 = __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(HEAP32[i5 >> 2] | 0, HEAP32[i2 >> 2] | 0) | 0;
      i16 = HEAP32[i5 >> 2] | 0;
      if (i19) {
       i18 = i16;
       i9 = 24;
       break L30;
      } else {
       i10 = i16;
      }
     }
     HEAP32[i1 >> 2] = 1;
     HEAP8[i1 + 4 | 0] = 0;
     HEAP32[i1 + 16 >> 2] = 0;
     i21 = i10;
    }
   } while (0);
   if ((i9 | 0) == 24) {
    HEAP32[i1 >> 2] = 1;
    HEAP8[i1 + 4 | 0] = 1;
    HEAP32[i1 + 16 >> 2] = 0;
    i21 = i18;
   }
   if ((i21 | 0) == 0) {
    i22 = i2;
    break;
   }
   i5 = i21 | 0;
   i13 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    i22 = i2;
    break;
   } else {
    HEAP32[i5 >> 2] = i13;
    i22 = i2;
    break;
   }
  }
 } while (0);
 if ((i9 | 0) == 19) {
  HEAP32[i1 >> 2] = 1;
  HEAP8[i1 + 4 | 0] = 0;
  HEAP32[i1 + 16 >> 2] = 0;
  i22 = i4 | 0;
 }
 i4 = HEAP32[i22 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i22 = i4 | 0;
 i1 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i22 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore5XPath12FunLocalName8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
  i5 = HEAP32[(__ZN7WebCore5XPath10Expression17evaluationContextEv() | 0) >> 2] | 0;
  do {
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 76 >> 2] & 63](i5) | 0) == 7) {
    i6 = HEAP32[i5 + 44 >> 2] | 0;
    if ((i6 | 0) == 0) {
     i7 = 0;
     break;
    }
    i8 = i6 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
    i7 = i6;
   } else {
    i6 = HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 88 >> 2] & 63](i5) | 0) >> 2] | 0;
    if ((i6 | 0) == 0) {
     i7 = 0;
     break;
    }
    i8 = i6 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
    i7 = i6;
   }
  } while (0);
  HEAP32[i1 >> 2] = 3;
  i5 = __ZN3WTF10fastMallocEj(24) | 0;
  HEAP32[i5 >> 2] = 1;
  HEAP32[i5 + 4 >> 2] = i7;
  i6 = (i7 | 0) == 0;
  if (!i6) {
   i8 = i7 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  }
  HEAP8[i5 + 8 | 0] = 1;
  HEAP8[i5 + 9 | 0] = 0;
  HEAP32[i5 + 12 >> 2] = 0;
  HEAP32[i5 + 16 >> 2] = 0;
  HEAP32[i5 + 20 >> 2] = 0;
  HEAP32[i1 + 16 >> 2] = i5;
  if (i6) {
   STACKTOP = i3;
   return;
  }
  i6 = i7 | 0;
  i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
  if ((i5 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i7);
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i6 >> 2] = i5;
   STACKTOP = i3;
   return;
  }
 }
 i5 = HEAP32[HEAP32[i2 + 4 >> 2] >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 63](i4, i5);
 do {
  if ((HEAP32[i4 >> 2] | 0) == 0) {
   i5 = __ZNK7WebCore5XPath7NodeSet9firstNodeEv(__ZNK7WebCore5XPath5Value9toNodeSetEv(i4) | 0) | 0;
   do {
    if ((i5 | 0) == 0) {
     i2 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
     if ((i2 | 0) == 0) {
      i9 = 0;
      i10 = 1;
      i11 = 0;
      break;
     }
     i6 = i2 | 0;
     HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
     i9 = 0;
     i10 = 1;
     i11 = i2;
    } else {
     if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 76 >> 2] & 63](i5) | 0) == 7) {
      i2 = HEAP32[i5 + 44 >> 2] | 0;
      if ((i2 | 0) == 0) {
       i9 = 1;
       i10 = 0;
       i11 = 0;
       break;
      }
      i6 = i2 | 0;
      HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
      i9 = 1;
      i10 = 0;
      i11 = i2;
      break;
     } else {
      i2 = HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 88 >> 2] & 63](i5) | 0) >> 2] | 0;
      if ((i2 | 0) == 0) {
       i9 = 1;
       i10 = 0;
       i11 = 0;
       break;
      }
      i6 = i2 | 0;
      HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
      i9 = 1;
      i10 = 0;
      i11 = i2;
      break;
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = 3;
   i5 = __ZN3WTF10fastMallocEj(24) | 0;
   HEAP32[i5 >> 2] = 1;
   HEAP32[i5 + 4 >> 2] = i11;
   i2 = (i11 | 0) == 0;
   if (!i2) {
    i6 = i11 | 0;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   }
   HEAP8[i5 + 8 | 0] = 1;
   HEAP8[i5 + 9 | 0] = 0;
   HEAP32[i5 + 12 >> 2] = 0;
   HEAP32[i5 + 16 >> 2] = 0;
   HEAP32[i5 + 20 >> 2] = 0;
   HEAP32[i1 + 16 >> 2] = i5;
   do {
    if (!(i9 | i2)) {
     i5 = i11 | 0;
     i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
     if ((i6 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i5 >> 2] = i6;
      break;
     }
    }
   } while (0);
   if (i10 | i2) {
    break;
   }
   i6 = i11 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i6 >> 2] = i5;
    break;
   }
  } else {
   i5 = __ZN3WTF11emptyStringEv() | 0;
   HEAP32[i1 >> 2] = 3;
   i6 = __ZN3WTF10fastMallocEj(24) | 0;
   HEAP32[i6 >> 2] = 1;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i6 + 4 >> 2] = i7;
   if ((i7 | 0) != 0) {
    i5 = i7 | 0;
    HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
   }
   HEAP8[i6 + 8 | 0] = 1;
   HEAP8[i6 + 9 | 0] = 0;
   HEAP32[i6 + 12 >> 2] = 0;
   HEAP32[i6 + 16 >> 2] = 0;
   HEAP32[i6 + 20 >> 2] = 0;
   HEAP32[i1 + 16 >> 2] = i6;
  }
 } while (0);
 i1 = HEAP32[i4 + 16 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i1 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore5XPathL12expandedNameEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i2;
 i6 = HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 96 >> 2] & 63](i2) | 0) >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   if ((HEAP32[i6 + 4 >> 2] | 0) == 0) {
    break;
   }
   i7 = i6 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   i9 = i8 + 2 | 0;
   HEAP32[i7 >> 2] = i8 + 4;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
   } else {
    HEAP32[i7 >> 2] = i9;
   }
   do {
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 76 >> 2] & 63](i2) | 0) == 7) {
     i9 = HEAP32[i2 + 44 >> 2] | 0;
     if ((i9 | 0) == 0) {
      i10 = 0;
      break;
     }
     i7 = i9 | 0;
     HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
     i10 = i9;
    } else {
     i9 = HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 88 >> 2] & 63](i2) | 0) >> 2] | 0;
     if ((i9 | 0) == 0) {
      i10 = 0;
      break;
     }
     i7 = i9 | 0;
     HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
     i10 = i9;
    }
   } while (0);
   i9 = (i6 | 0) == 0;
   if (!i9) {
    i7 = i6 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
   }
   i7 = (i10 | 0) == 0;
   if (!i7) {
    i8 = i10 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   }
   i8 = i4 | 0;
   HEAP32[i8 >> 2] = i6;
   if (!i9) {
    i11 = i6 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
   }
   HEAP32[i4 + 4 >> 2] = H_BASE + 72;
   i11 = i4 + 8 | 0;
   HEAP32[i11 >> 2] = i10;
   do {
    if (!i7) {
     i12 = i10 | 0;
     i13 = HEAP32[i12 >> 2] | 0;
     HEAP32[i12 >> 2] = i13 + 2;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i12 >> 2] = i13;
      break;
     }
    }
   } while (0);
   do {
    if (!i9) {
     i13 = i6 | 0;
     i12 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i6);
      break;
     } else {
      HEAP32[i13 >> 2] = i12;
      break;
     }
    }
   } while (0);
   __ZNK3WTF12StringAppendINS0_INS_6StringEPKcEES1_EcvS1_Ev(i1, i4);
   i12 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i13 = i12 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i12 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i11 = i12 | 0;
     i14 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i11 >> 2] = i14;
      break;
     }
    }
   } while (0);
   do {
    if (!i7) {
     i12 = i10 | 0;
     i8 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i12 >> 2] = i8;
      break;
     }
    }
   } while (0);
   if (i9) {
    STACKTOP = i3;
    return;
   }
   i7 = i6 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i7 >> 2] = i8;
    STACKTOP = i3;
    return;
   }
  }
 } while (0);
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 76 >> 2] & 63](i2) | 0) == 7) {
  i6 = HEAP32[i2 + 44 >> 2] | 0;
  HEAP32[i1 >> 2] = i6;
  if ((i6 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i10 = i6 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
  STACKTOP = i3;
  return;
 } else {
  i10 = HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 88 >> 2] & 63](i2) | 0) >> 2] | 0;
  HEAP32[i1 >> 2] = i10;
  if ((i10 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i1 = i10 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore5XPath18FunSubstringBefore8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 40 | 0;
 i8 = i3 + 64 | 0;
 i9 = i2 + 12 | 0;
 if ((HEAP32[i9 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i10 = i2 + 4 | 0;
 i2 = HEAP32[HEAP32[i10 >> 2] >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 63](i5, i2);
 __ZNK7WebCore5XPath5Value8toStringEv(i4, i5);
 i2 = HEAP32[i5 + 16 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i2 | 0);
 }
 if ((HEAP32[i9 >> 2] | 0) >>> 0 <= 1 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i9 = HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 63](i7, i9);
 __ZNK7WebCore5XPath5Value8toStringEv(i6, i7);
 i9 = HEAP32[i7 + 16 >> 2] | 0;
 if ((i9 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i9 | 0);
 }
 i9 = i6 | 0;
 i6 = HEAP32[i9 >> 2] | 0;
 L13 : do {
  if ((i6 | 0) == 0) {
   i11 = 11;
  } else {
   if ((HEAP32[i6 + 4 >> 2] | 0) == 0) {
    i11 = 11;
    break;
   }
   i7 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i10 = __ZN3WTF10StringImpl4findEPS0_(i7, i6) | 0;
     if ((i10 | 0) == -1) {
      break;
     }
     __ZNK3WTF6String9substringEjj(i8, i4, 0, i10);
     HEAP32[i1 >> 2] = 3;
     i10 = __ZN3WTF10fastMallocEj(24) | 0;
     HEAP32[i10 >> 2] = 1;
     i2 = i8 | 0;
     i5 = HEAP32[i2 >> 2] | 0;
     HEAP32[i10 + 4 >> 2] = i5;
     if ((i5 | 0) != 0) {
      i12 = i5 | 0;
      HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
     }
     HEAP8[i10 + 8 | 0] = 1;
     HEAP8[i10 + 9 | 0] = 0;
     HEAP32[i10 + 12 >> 2] = 0;
     HEAP32[i10 + 16 >> 2] = 0;
     HEAP32[i10 + 20 >> 2] = 0;
     HEAP32[i1 + 16 >> 2] = i10;
     i10 = HEAP32[i2 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break L13;
     }
     i2 = i10 | 0;
     i12 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break L13;
     } else {
      HEAP32[i2 >> 2] = i12;
      break L13;
     }
    }
   } while (0);
   i7 = __ZN3WTF11emptyStringEv() | 0;
   HEAP32[i1 >> 2] = 3;
   i12 = __ZN3WTF10fastMallocEj(24) | 0;
   HEAP32[i12 >> 2] = 1;
   i2 = HEAP32[i7 >> 2] | 0;
   HEAP32[i12 + 4 >> 2] = i2;
   if ((i2 | 0) != 0) {
    i7 = i2 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
   }
   HEAP8[i12 + 8 | 0] = 1;
   HEAP8[i12 + 9 | 0] = 0;
   HEAP32[i12 + 12 >> 2] = 0;
   HEAP32[i12 + 16 >> 2] = 0;
   HEAP32[i12 + 20 >> 2] = 0;
   HEAP32[i1 + 16 >> 2] = i12;
  }
 } while (0);
 if ((i11 | 0) == 11) {
  i11 = __ZN3WTF11emptyStringEv() | 0;
  HEAP32[i1 >> 2] = 3;
  i8 = __ZN3WTF10fastMallocEj(24) | 0;
  HEAP32[i8 >> 2] = 1;
  i6 = HEAP32[i11 >> 2] | 0;
  HEAP32[i8 + 4 >> 2] = i6;
  if ((i6 | 0) != 0) {
   i11 = i6 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
  }
  HEAP8[i8 + 8 | 0] = 1;
  HEAP8[i8 + 9 | 0] = 0;
  HEAP32[i8 + 12 >> 2] = 0;
  HEAP32[i8 + 16 >> 2] = 0;
  HEAP32[i8 + 20 >> 2] = 0;
  HEAP32[i1 + 16 >> 2] = i8;
 }
 i8 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i9 = i8 | 0;
   i1 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i9 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i4 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i8 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore5XPath16FunctionMapValueEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 i8 = __ZN3WTF10fastMallocEj(i2 << 4) | 0;
 if ((i2 | 0) > 0) {
  i9 = 0;
  while (1) {
   HEAP32[i8 + (i9 << 4) >> 2] = 0;
   i10 = i8 + (i9 << 4) + 4 | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i10 + 4 >> 2] = -1;
   HEAP32[i8 + (i9 << 4) + 12 >> 2] = -1;
   i9 = i9 + 1 | 0;
   if ((i9 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i6 >> 2] = i8;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i11 = 0;
  i12 = i7;
  __ZN3WTF8fastFreeEPv(i12);
  return i11 | 0;
 } else {
  i13 = 0;
  i14 = 0;
 }
 while (1) {
  i8 = i7 + (i13 << 4) | 0;
  i2 = i8 | 0;
  i9 = HEAP32[i2 >> 2] | 0;
  i10 = i9;
  if ((i10 | 0) == (-1 | 0) | (i10 | 0) == 0) {
   i15 = i14;
  } else {
   i10 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = HEAP32[i9 + 16 >> 2] | 0;
   if (i17 >>> 0 > 127 >>> 0) {
    i18 = i17 >>> 7;
   } else {
    i18 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i9) | 0;
   }
   i9 = (i18 >>> 23) + ~i18 | 0;
   i17 = i9 << 12 ^ i9;
   i9 = i17 >>> 7 ^ i17;
   i17 = i9 << 2 ^ i9;
   i9 = i17 >>> 20 ^ i17 | 1;
   i17 = i18;
   i19 = 0;
   i20 = 0;
   while (1) {
    i21 = i17 & i16;
    i22 = i10 + (i21 << 4) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == 0) {
     i25 = 11;
     break;
    } else if ((i24 | 0) == (-1 | 0)) {
     i26 = i22;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i2 >> 2] | 0) | 0) {
      i27 = i22;
      break;
     } else {
      i26 = i20;
     }
    }
    i23 = (i19 | 0) == 0 ? i9 : i19;
    i17 = i23 + i21 | 0;
    i19 = i23;
    i20 = i26;
   }
   if ((i25 | 0) == 11) {
    i25 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i9 = i17 | 0;
     i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i9 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i19 >> 2] = i17;
   i17 = i27 + 4 | 0;
   i20 = i7 + (i13 << 4) + 4 | 0;
   HEAP32[i17 >> 2] = HEAP32[i20 >> 2];
   HEAP32[i17 + 4 >> 2] = HEAP32[i20 + 4 >> 2];
   HEAP32[i17 + 8 >> 2] = HEAP32[i20 + 8 >> 2];
   i15 = (i8 | 0) == (i3 | 0) ? i27 : i14;
  }
  i20 = i13 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i13 = i20;
   i14 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i28 = 0;
 } else {
  i11 = i15;
  i12 = i7;
  __ZN3WTF8fastFreeEPv(i12);
  return i11 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i28 << 4) >> 2] | 0;
  i14 = i1;
  do {
   if (!((i14 | 0) == (-1 | 0) | (i14 | 0) == 0)) {
    i13 = i1 | 0;
    i27 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
    if ((i27 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i13 >> 2] = i27;
     break;
    }
   }
  } while (0);
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i28 = i1;
  } else {
   i11 = i15;
   break;
  }
 }
 i12 = i7;
 __ZN3WTF8fastFreeEPv(i12);
 return i11 | 0;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore5XPath16FunctionMapValueEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EES1_RKS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
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
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore5XPath16FunctionMapValueEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i11 = i9 >>> 7;
 } else {
  i11 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i11 >>> 23) + ~i11 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i7 = i11;
 i11 = 0;
 while (1) {
  i12 = i7 & i6;
  i13 = i10 + (i12 << 4) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 11;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i11 | 0) == 0 ? i3 : i11;
  i9 = i16;
  i7 = i14 + i12 | 0;
  i11 = i14;
 }
 if ((i17 | 0) == 11) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 4) | 0;
  i11 = i1;
  HEAP32[i11 >> 2] = i13;
  HEAP32[i11 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  HEAP32[i9 >> 2] = 0;
  i13 = i9 + 4 | 0;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = -1;
  HEAP32[i9 + 12 >> 2] = -1;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
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
 i13 = i18 + 4 | 0;
 i8 = i4;
 HEAP32[i13 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i13 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
 HEAP32[i13 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
 i8 = i2 + 12 | 0;
 i13 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
 HEAP32[i8 >> 2] = i13;
 i8 = i2 + 4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i13 << 1 | 0) < (i4 | 0)) {
  i19 = i18;
  i20 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i21 = 8;
  } else {
   i9 = i4 << 1;
   i21 = (i13 * 6 & -1 | 0) < (i9 | 0) ? i4 : i9;
  }
  i9 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore5XPath16FunctionMapValueEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i2, i21, i18) | 0;
  i19 = i9;
  i20 = HEAP32[i8 >> 2] | 0;
 }
 i8 = (HEAP32[i5 >> 2] | 0) + (i20 << 4) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i8;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZNK7WebCore5XPath17FunNormalizeSpace8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 40 | 0;
 i8 = i3 + 48 | 0;
 i9 = i3 + 56 | 0;
 i10 = i3 + 80 | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) != 0) {
  i11 = HEAP32[HEAP32[i2 + 4 >> 2] >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] & 63](i9, i11);
  __ZNK7WebCore5XPath5Value8toStringEv(i8, i9);
  i11 = HEAP32[i9 + 16 >> 2] | 0;
  if ((i11 | 0) != 0) {
   __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i11 | 0);
  }
  __ZNK3WTF6String18simplifyWhiteSpaceEv(i10, i8);
  HEAP32[i1 >> 2] = 3;
  i11 = __ZN3WTF10fastMallocEj(24) | 0;
  HEAP32[i11 >> 2] = 1;
  i9 = i10 | 0;
  i10 = HEAP32[i9 >> 2] | 0;
  HEAP32[i11 + 4 >> 2] = i10;
  if ((i10 | 0) != 0) {
   i2 = i10 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
  }
  HEAP8[i11 + 8 | 0] = 1;
  HEAP8[i11 + 9 | 0] = 0;
  HEAP32[i11 + 12 >> 2] = 0;
  HEAP32[i11 + 16 >> 2] = 0;
  HEAP32[i11 + 20 >> 2] = 0;
  HEAP32[i1 + 16 >> 2] = i11;
  i11 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i11 | 0) != 0) {
    i9 = i11 | 0;
    i2 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
    if ((i2 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i9 >> 2] = i2;
     break;
    }
   }
  } while (0);
  i11 = HEAP32[i8 >> 2] | 0;
  if ((i11 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i8 = i11 | 0;
  i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
  if ((i2 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i11);
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i8 >> 2] = i2;
   STACKTOP = i3;
   return;
  }
 }
 i2 = HEAP32[(__ZN7WebCore5XPath10Expression17evaluationContextEv() | 0) >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 if ((i2 | 0) != 0) {
  i8 = i2 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 i11 = i4 | 0;
 HEAP32[i11 >> 2] = i2;
 __ZN7WebCore5XPath5Value4DataC2EN3WTF10PassRefPtrINS_4NodeEEE(i8, i4);
 i4 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i11 = i4 + 8 | 0;
   i2 = i11 | 0;
   i9 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i4 = i6 + 16 | 0;
 HEAP32[i4 >> 2] = i8;
 __ZNK7WebCore5XPath5Value8toStringEv(i5, i6);
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i6 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i6 | 0);
 }
 __ZNK3WTF6String18simplifyWhiteSpaceEv(i7, i5);
 HEAP32[i1 >> 2] = 3;
 i6 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i6 >> 2] = 1;
 i4 = i7 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i6 + 4 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i8 = i7 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 HEAP8[i6 + 8 | 0] = 1;
 HEAP8[i6 + 9 | 0] = 0;
 HEAP32[i6 + 12 >> 2] = 0;
 HEAP32[i6 + 16 >> 2] = 0;
 HEAP32[i6 + 20 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = i6;
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i6 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore5XPath7FunName8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 i6 = i3 + 32 | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
  __ZN7WebCore5XPathL12expandedNameEPNS_4NodeE(i6, HEAP32[(__ZN7WebCore5XPath10Expression17evaluationContextEv() | 0) >> 2] | 0);
  HEAP32[i1 >> 2] = 3;
  i7 = __ZN3WTF10fastMallocEj(24) | 0;
  HEAP32[i7 >> 2] = 1;
  i8 = HEAP32[i6 >> 2] | 0;
  HEAP32[i7 + 4 >> 2] = i8;
  i6 = (i8 | 0) == 0;
  if (!i6) {
   i9 = i8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
  }
  HEAP8[i7 + 8 | 0] = 1;
  HEAP8[i7 + 9 | 0] = 0;
  HEAP32[i7 + 12 >> 2] = 0;
  HEAP32[i7 + 16 >> 2] = 0;
  HEAP32[i7 + 20 >> 2] = 0;
  HEAP32[i1 + 16 >> 2] = i7;
  if (i6) {
   STACKTOP = i3;
   return;
  }
  i6 = i8 | 0;
  i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
  if ((i7 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i8);
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i6 >> 2] = i7;
   STACKTOP = i3;
   return;
  }
 }
 i7 = HEAP32[HEAP32[i2 + 4 >> 2] >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] & 63](i4, i7);
 do {
  if ((HEAP32[i4 >> 2] | 0) == 0) {
   i7 = __ZNK7WebCore5XPath7NodeSet9firstNodeEv(__ZNK7WebCore5XPath5Value9toNodeSetEv(i4) | 0) | 0;
   do {
    if ((i7 | 0) == 0) {
     i2 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
     HEAP32[i5 >> 2] = i2;
     if ((i2 | 0) == 0) {
      i10 = 1;
      i11 = 0;
      i12 = 0;
      break;
     }
     i6 = i2 | 0;
     HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
     i10 = 1;
     i11 = 0;
     i12 = i2;
    } else {
     __ZN7WebCore5XPathL12expandedNameEPNS_4NodeE(i5, i7);
     i10 = 0;
     i11 = 1;
     i12 = HEAP32[i5 >> 2] | 0;
    }
   } while (0);
   HEAP32[i1 >> 2] = 3;
   i7 = __ZN3WTF10fastMallocEj(24) | 0;
   HEAP32[i7 >> 2] = 1;
   i2 = i5 | 0;
   HEAP32[i7 + 4 >> 2] = i12;
   if ((i12 | 0) != 0) {
    i6 = i12 | 0;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   }
   HEAP8[i7 + 8 | 0] = 1;
   HEAP8[i7 + 9 | 0] = 0;
   HEAP32[i7 + 12 >> 2] = 0;
   HEAP32[i7 + 16 >> 2] = 0;
   HEAP32[i7 + 20 >> 2] = 0;
   HEAP32[i1 + 16 >> 2] = i7;
   do {
    if (i10) {
     i7 = HEAP32[i2 >> 2] | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     i6 = i7 | 0;
     i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i6 >> 2] = i8;
      break;
     }
    }
   } while (0);
   if (!i11) {
    break;
   }
   i8 = HEAP32[i2 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i6 = i8 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  } else {
   i7 = __ZN3WTF11emptyStringEv() | 0;
   HEAP32[i1 >> 2] = 3;
   i6 = __ZN3WTF10fastMallocEj(24) | 0;
   HEAP32[i6 >> 2] = 1;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i6 + 4 >> 2] = i8;
   if ((i8 | 0) != 0) {
    i7 = i8 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
   }
   HEAP8[i6 + 8 | 0] = 1;
   HEAP8[i6 + 9 | 0] = 0;
   HEAP32[i6 + 12 >> 2] = 0;
   HEAP32[i6 + 16 >> 2] = 0;
   HEAP32[i6 + 20 >> 2] = 0;
   HEAP32[i1 + 16 >> 2] = i6;
  }
 } while (0);
 i1 = HEAP32[i4 + 16 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i1 | 0);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore5XPath17FunSubstringAfter8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 40 | 0;
 i8 = i3 + 64 | 0;
 i9 = i2 + 12 | 0;
 if ((HEAP32[i9 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i10 = i2 + 4 | 0;
 i2 = HEAP32[HEAP32[i10 >> 2] >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 63](i5, i2);
 __ZNK7WebCore5XPath5Value8toStringEv(i4, i5);
 i2 = HEAP32[i5 + 16 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i2 | 0);
 }
 if ((HEAP32[i9 >> 2] | 0) >>> 0 <= 1 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i9 = HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 63](i7, i9);
 __ZNK7WebCore5XPath5Value8toStringEv(i6, i7);
 i9 = HEAP32[i7 + 16 >> 2] | 0;
 if ((i9 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i9 | 0);
 }
 i9 = i4 | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i11 = 11;
  } else {
   i10 = i6 | 0;
   i2 = __ZN3WTF10StringImpl4findEPS0_(i7, HEAP32[i10 >> 2] | 0) | 0;
   if ((i2 | 0) == -1) {
    i11 = 11;
    break;
   }
   i5 = HEAP32[i10 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i12 = 0;
   } else {
    i12 = HEAP32[i5 + 4 >> 2] | 0;
   }
   __ZNK3WTF6String9substringEjj(i8, i4, i12 + i2 | 0, -1);
   HEAP32[i1 >> 2] = 3;
   i2 = __ZN3WTF10fastMallocEj(24) | 0;
   HEAP32[i2 >> 2] = 1;
   i5 = i8 | 0;
   i13 = HEAP32[i5 >> 2] | 0;
   HEAP32[i2 + 4 >> 2] = i13;
   if ((i13 | 0) != 0) {
    i14 = i13 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
   }
   HEAP8[i2 + 8 | 0] = 1;
   HEAP8[i2 + 9 | 0] = 0;
   HEAP32[i2 + 12 >> 2] = 0;
   HEAP32[i2 + 16 >> 2] = 0;
   HEAP32[i2 + 20 >> 2] = 0;
   HEAP32[i1 + 16 >> 2] = i2;
   i2 = HEAP32[i5 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i15 = i10;
    break;
   }
   i5 = i2 | 0;
   i14 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    i15 = i10;
    break;
   } else {
    HEAP32[i5 >> 2] = i14;
    i15 = i10;
    break;
   }
  }
 } while (0);
 if ((i11 | 0) == 11) {
  i11 = __ZN3WTF11emptyStringEv() | 0;
  HEAP32[i1 >> 2] = 3;
  i8 = __ZN3WTF10fastMallocEj(24) | 0;
  HEAP32[i8 >> 2] = 1;
  i12 = HEAP32[i11 >> 2] | 0;
  HEAP32[i8 + 4 >> 2] = i12;
  if ((i12 | 0) != 0) {
   i11 = i12 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
  }
  HEAP8[i8 + 8 | 0] = 1;
  HEAP8[i8 + 9 | 0] = 0;
  HEAP32[i8 + 12 >> 2] = 0;
  HEAP32[i8 + 16 >> 2] = 0;
  HEAP32[i8 + 20 >> 2] = 0;
  HEAP32[i1 + 16 >> 2] = i8;
  i15 = i6 | 0;
 }
 i6 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i15 = i6 | 0;
   i8 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i15 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i9 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i6 | 0;
 i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i9 >> 2] = i8;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore5XPath9FunConcat8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 i6 = i3 + 32 | 0;
 HEAP32[i4 >> 2] = 0;
 i7 = i4 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i4 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP8[i4 + 12 | 0] = 1;
 HEAP32[i4 + 16 >> 2] = 0;
 HEAP32[i4 + 20 >> 2] = 0;
 __ZN3WTF13StringBuilder15reserveCapacityEj(i4, 1024);
 i9 = i2 + 12 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 L1 : do {
  if ((i10 | 0) != 0) {
   i11 = i2 + 4 | 0;
   i12 = i6 + 16 | 0;
   i13 = i5 | 0;
   i14 = 0;
   i15 = i10;
   while (1) {
    if (i15 >>> 0 <= i14 >>> 0) {
     break;
    }
    i16 = HEAP32[(HEAP32[i11 >> 2] | 0) + (i14 << 2) >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] & 63](i6, i16);
    __ZNK7WebCore5XPath5Value8toStringEv(i5, i6);
    i16 = HEAP32[i12 >> 2] | 0;
    if ((i16 | 0) != 0) {
     __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i16 | 0);
    }
    __ZN3WTF13StringBuilder6appendERKNS_6StringE(i4, i5);
    i16 = HEAP32[i13 >> 2] | 0;
    do {
     if ((i16 | 0) != 0) {
      i17 = i16 | 0;
      i18 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
      if ((i18 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i16);
       break;
      } else {
       HEAP32[i17 >> 2] = i18;
       break;
      }
     }
    } while (0);
    i16 = i14 + 1 | 0;
    if (i16 >>> 0 >= i10 >>> 0) {
     break L1;
    }
    i14 = i16;
    i15 = HEAP32[i9 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 __ZN3WTF13StringBuilder11shrinkToFitEv(i4);
 i9 = HEAP32[i7 >> 2] | 0;
 if ((i9 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i4);
  i4 = HEAP32[i7 >> 2] | 0;
  if ((i4 | 0) == 0) {
   i19 = 0;
  } else {
   i20 = i4;
   i21 = 15;
  }
 } else {
  i20 = i9;
  i21 = 15;
 }
 if ((i21 | 0) == 15) {
  i21 = i20 | 0;
  HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 2;
  i19 = i20;
 }
 HEAP32[i1 >> 2] = 3;
 i20 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i20 >> 2] = 1;
 HEAP32[i20 + 4 >> 2] = i19;
 i21 = (i19 | 0) == 0;
 if (!i21) {
  i9 = i19 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 HEAP8[i20 + 8 | 0] = 1;
 HEAP8[i20 + 9 | 0] = 0;
 HEAP32[i20 + 12 >> 2] = 0;
 HEAP32[i20 + 16 >> 2] = 0;
 HEAP32[i20 + 20 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = i20;
 do {
  if (!i21) {
   i20 = i19 | 0;
   i1 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i20 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i19 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i8 = i19 | 0;
   i21 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i8 >> 2] = i21;
    break;
   }
  }
 } while (0);
 i19 = HEAP32[i7 >> 2] | 0;
 if ((i19 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i19 | 0;
 i21 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i21 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i19);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i7 >> 2] = i21;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore5XPath9FunString8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 40 | 0;
 i8 = i3 + 48 | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) != 0) {
  i9 = HEAP32[HEAP32[i2 + 4 >> 2] >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 63](i8, i9);
  __ZNK7WebCore5XPath5Value8toStringEv(i7, i8);
  HEAP32[i1 >> 2] = 3;
  i9 = __ZN3WTF10fastMallocEj(24) | 0;
  HEAP32[i9 >> 2] = 1;
  i2 = i7 | 0;
  i7 = HEAP32[i2 >> 2] | 0;
  HEAP32[i9 + 4 >> 2] = i7;
  if ((i7 | 0) != 0) {
   i10 = i7 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
  }
  HEAP8[i9 + 8 | 0] = 1;
  HEAP8[i9 + 9 | 0] = 0;
  HEAP32[i9 + 12 >> 2] = 0;
  HEAP32[i9 + 16 >> 2] = 0;
  HEAP32[i9 + 20 >> 2] = 0;
  HEAP32[i1 + 16 >> 2] = i9;
  i9 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i9 | 0) != 0) {
    i2 = i9 | 0;
    i10 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i9);
     break;
    } else {
     HEAP32[i2 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i9 = HEAP32[i8 + 16 >> 2] | 0;
  if ((i9 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i9 | 0);
  STACKTOP = i3;
  return;
 }
 i9 = HEAP32[(__ZN7WebCore5XPath10Expression17evaluationContextEv() | 0) >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 if ((i9 | 0) != 0) {
  i8 = i9 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 i10 = i4 | 0;
 HEAP32[i10 >> 2] = i9;
 __ZN7WebCore5XPath5Value4DataC2EN3WTF10PassRefPtrINS_4NodeEEE(i8, i4);
 i4 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i10 = i4 + 8 | 0;
   i9 = i10 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i4 = i6 + 16 | 0;
 HEAP32[i4 >> 2] = i8;
 __ZNK7WebCore5XPath5Value8toStringEv(i5, i6);
 HEAP32[i1 >> 2] = 3;
 i6 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i6 >> 2] = 1;
 i8 = i5 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i6 + 4 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i10 = i5 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 HEAP8[i6 + 8 | 0] = 1;
 HEAP8[i6 + 9 | 0] = 0;
 HEAP32[i6 + 12 >> 2] = 0;
 HEAP32[i6 + 16 >> 2] = 0;
 HEAP32[i6 + 20 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = i6;
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 | 0;
   i1 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i8 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i6 | 0);
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
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
 i10 = i7 + (i3 << 2) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i10;
   i13 = 9;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i10;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 6;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i7 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 8;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 6) {
    i19 = i7 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i13 | 0) == 8) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 9;
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
 if ((i13 | 0) == 9) {
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
  i13 = __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i2, i25) | 0;
  i27 = i13;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i1, i2) {
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
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 2) | 0;
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
  i5 = i7 + (i11 << 2) | 0;
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
   i19 = i16 + (i14 << 2) | 0;
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
      i34 = i16 + (i33 << 2) | 0;
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
   HEAP32[i30 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i6 | 0)) {
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
function __ZNK7WebCore5XPath15FunStringLength8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 40 | 0;
 i8 = i3 + 48 | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) != 0) {
  i9 = HEAP32[HEAP32[i2 + 4 >> 2] >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 63](i8, i9);
  __ZNK7WebCore5XPath5Value8toStringEv(i7, i8);
  i9 = HEAP32[i7 >> 2] | 0;
  do {
   if ((i9 | 0) == 0) {
    HEAP32[i1 >> 2] = 2;
    HEAPF64[i1 + 8 >> 3] = +0;
    HEAP32[i1 + 16 >> 2] = 0;
   } else {
    d10 = +((HEAP32[i9 + 4 >> 2] | 0) >>> 0 >>> 0);
    HEAP32[i1 >> 2] = 2;
    HEAPF64[i1 + 8 >> 3] = d10;
    HEAP32[i1 + 16 >> 2] = 0;
    i7 = i9 | 0;
    i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
    if ((i2 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i9);
     break;
    } else {
     HEAP32[i7 >> 2] = i2;
     break;
    }
   }
  } while (0);
  i9 = HEAP32[i8 + 16 >> 2] | 0;
  if ((i9 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i9 | 0);
  STACKTOP = i3;
  return;
 }
 i9 = HEAP32[(__ZN7WebCore5XPath10Expression17evaluationContextEv() | 0) >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 if ((i9 | 0) != 0) {
  i8 = i9 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 i2 = i4 | 0;
 HEAP32[i2 >> 2] = i9;
 __ZN7WebCore5XPath5Value4DataC2EN3WTF10PassRefPtrINS_4NodeEEE(i8, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 8 | 0;
   i9 = i2 | 0;
   i7 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i4 = i6 + 16 | 0;
 HEAP32[i4 >> 2] = i8;
 __ZNK7WebCore5XPath5Value8toStringEv(i5, i6);
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   HEAP32[i1 >> 2] = 2;
   HEAPF64[i1 + 8 >> 3] = +0;
   HEAP32[i1 + 16 >> 2] = 0;
  } else {
   d10 = +((HEAP32[i6 + 4 >> 2] | 0) >>> 0 >>> 0);
   HEAP32[i1 >> 2] = 2;
   HEAPF64[i1 + 8 >> 3] = d10;
   HEAP32[i1 + 16 >> 2] = 0;
   i5 = i6 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i5 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i6 | 0);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore5XPath6FunSum8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 i6 = i3 + 48 | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i7 = HEAP32[HEAP32[i2 + 4 >> 2] >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] & 63](i4, i7);
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  i7 = __ZNK7WebCore5XPath5Value9toNodeSetEv(i4) | 0;
  i2 = i7 + 12 | 0;
  if ((HEAP32[i2 >> 2] | 0) == 0) {
   d8 = +0;
  } else {
   i9 = i7 + 4 | 0;
   i7 = i5 | 0;
   i10 = i6 | 0;
   i11 = i5 + 16 | 0;
   d12 = +0;
   i13 = 0;
   while (1) {
    __ZN7WebCore5XPath11stringValueEPNS_4NodeE(i6, HEAP32[(HEAP32[i9 >> 2] | 0) + (i13 << 2) >> 2] | 0);
    HEAP32[i7 >> 2] = 3;
    i14 = __ZN3WTF10fastMallocEj(24) | 0;
    HEAP32[i14 >> 2] = 1;
    i15 = HEAP32[i10 >> 2] | 0;
    HEAP32[i14 + 4 >> 2] = i15;
    if ((i15 | 0) != 0) {
     i16 = i15 | 0;
     HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
    }
    HEAP8[i14 + 8 | 0] = 1;
    HEAP8[i14 + 9 | 0] = 0;
    HEAP32[i14 + 12 >> 2] = 0;
    HEAP32[i14 + 16 >> 2] = 0;
    HEAP32[i14 + 20 >> 2] = 0;
    HEAP32[i11 >> 2] = i14;
    d17 = d12 + +__ZNK7WebCore5XPath5Value8toNumberEv(i5);
    i14 = HEAP32[i11 >> 2] | 0;
    if ((i14 | 0) != 0) {
     __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i14 | 0);
    }
    i14 = HEAP32[i10 >> 2] | 0;
    do {
     if ((i14 | 0) != 0) {
      i16 = i14 | 0;
      i15 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
      if ((i15 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i14);
       break;
      } else {
       HEAP32[i16 >> 2] = i15;
       break;
      }
     }
    } while (0);
    i14 = i13 + 1 | 0;
    if (i14 >>> 0 < (HEAP32[i2 >> 2] | 0) >>> 0) {
     d12 = d17;
     i13 = i14;
    } else {
     d8 = d17;
     break;
    }
   }
  }
  HEAP32[i1 >> 2] = 2;
  HEAPF64[i1 + 8 >> 3] = d8;
  HEAP32[i1 + 16 >> 2] = 0;
 } else {
  HEAP32[i1 >> 2] = 2;
  HEAPF64[i1 + 8 >> 3] = +0;
  HEAP32[i1 + 16 >> 2] = 0;
 }
 i1 = HEAP32[i4 + 16 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i1 | 0);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore5XPath15FunNamespaceURI8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
  i5 = HEAP32[(__ZN7WebCore5XPath10Expression17evaluationContextEv() | 0) >> 2] | 0;
  i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 92 >> 2] & 63](i5) | 0;
  HEAP32[i1 >> 2] = 3;
  i5 = __ZN3WTF10fastMallocEj(24) | 0;
  HEAP32[i5 >> 2] = 1;
  i7 = HEAP32[i6 >> 2] | 0;
  HEAP32[i5 + 4 >> 2] = i7;
  if ((i7 | 0) != 0) {
   i6 = i7 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
  }
  HEAP8[i5 + 8 | 0] = 1;
  HEAP8[i5 + 9 | 0] = 0;
  HEAP32[i5 + 12 >> 2] = 0;
  HEAP32[i5 + 16 >> 2] = 0;
  HEAP32[i5 + 20 >> 2] = 0;
  HEAP32[i1 + 16 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
 i5 = HEAP32[HEAP32[i2 + 4 >> 2] >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 63](i4, i5);
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  i5 = __ZNK7WebCore5XPath7NodeSet9firstNodeEv(__ZNK7WebCore5XPath5Value9toNodeSetEv(i4) | 0) | 0;
  if ((i5 | 0) == 0) {
   i8 = __ZN3WTF11emptyStringEv() | 0;
  } else {
   i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 92 >> 2] & 63](i5) | 0;
  }
  HEAP32[i1 >> 2] = 3;
  i5 = __ZN3WTF10fastMallocEj(24) | 0;
  HEAP32[i5 >> 2] = 1;
  i2 = HEAP32[i8 >> 2] | 0;
  HEAP32[i5 + 4 >> 2] = i2;
  if ((i2 | 0) != 0) {
   i8 = i2 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  }
  HEAP8[i5 + 8 | 0] = 1;
  HEAP8[i5 + 9 | 0] = 0;
  HEAP32[i5 + 12 >> 2] = 0;
  HEAP32[i5 + 16 >> 2] = 0;
  HEAP32[i5 + 20 >> 2] = 0;
  HEAP32[i1 + 16 >> 2] = i5;
 } else {
  i5 = __ZN3WTF11emptyStringEv() | 0;
  HEAP32[i1 >> 2] = 3;
  i8 = __ZN3WTF10fastMallocEj(24) | 0;
  HEAP32[i8 >> 2] = 1;
  i2 = HEAP32[i5 >> 2] | 0;
  HEAP32[i8 + 4 >> 2] = i2;
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
  }
  HEAP8[i8 + 8 | 0] = 1;
  HEAP8[i8 + 9 | 0] = 0;
  HEAP32[i8 + 12 >> 2] = 0;
  HEAP32[i8 + 16 >> 2] = 0;
  HEAP32[i8 + 20 >> 2] = 0;
  HEAP32[i1 + 16 >> 2] = i8;
 }
 i8 = HEAP32[i4 + 16 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i8 | 0);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore5XPath11FunContains8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 40 | 0;
 i8 = i2 + 12 | 0;
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i9 = i2 + 4 | 0;
 i2 = HEAP32[HEAP32[i9 >> 2] >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 63](i5, i2);
 __ZNK7WebCore5XPath5Value8toStringEv(i4, i5);
 i2 = HEAP32[i5 + 16 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i2 | 0);
 }
 if ((HEAP32[i8 >> 2] | 0) >>> 0 <= 1 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i8 = HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] & 63](i7, i8);
 __ZNK7WebCore5XPath5Value8toStringEv(i6, i7);
 i8 = HEAP32[i7 + 16 >> 2] | 0;
 if ((i8 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i8 | 0);
 }
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i10 = 11;
  } else {
   if ((HEAP32[i6 + 4 >> 2] | 0) == 0) {
    i10 = 11;
    break;
   }
   i7 = HEAP32[i4 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i11 = 0;
    i12 = i6;
   } else {
    i9 = (__ZN3WTF10StringImpl4findEPS0_j(i7, i6, 0) | 0) != -1 | 0;
    i11 = i9;
    i12 = HEAP32[i8 >> 2] | 0;
   }
   HEAP32[i1 >> 2] = 1;
   HEAP8[i1 + 4 | 0] = i11;
   HEAP32[i1 + 16 >> 2] = 0;
   i13 = i12;
  }
 } while (0);
 if ((i10 | 0) == 11) {
  HEAP32[i1 >> 2] = 1;
  HEAP8[i1 + 4 | 0] = 1;
  HEAP32[i1 + 16 >> 2] = 0;
  i13 = i6;
 }
 do {
  if ((i13 | 0) != 0) {
   i6 = i13 | 0;
   i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i6 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i4 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i13 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i13);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore5XPath13FunStartsWith8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 40 | 0;
 i8 = i2 + 12 | 0;
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i9 = i2 + 4 | 0;
 i2 = HEAP32[HEAP32[i9 >> 2] >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 63](i5, i2);
 __ZNK7WebCore5XPath5Value8toStringEv(i4, i5);
 i2 = HEAP32[i5 + 16 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i2 | 0);
 }
 if ((HEAP32[i8 >> 2] | 0) >>> 0 <= 1 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i8 = HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] & 63](i7, i8);
 __ZNK7WebCore5XPath5Value8toStringEv(i6, i7);
 i8 = HEAP32[i7 + 16 >> 2] | 0;
 if ((i8 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i8 | 0);
 }
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i10 = 11;
  } else {
   if ((HEAP32[i6 + 4 >> 2] | 0) == 0) {
    i10 = 11;
    break;
   }
   i7 = HEAP32[i4 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i11 = 0;
    i12 = i6;
   } else {
    i9 = __ZNK3WTF10StringImpl10startsWithEPKS0_(i7, i6) | 0;
    i11 = i9 & 1;
    i12 = HEAP32[i8 >> 2] | 0;
   }
   HEAP32[i1 >> 2] = 1;
   HEAP8[i1 + 4 | 0] = i11;
   HEAP32[i1 + 16 >> 2] = 0;
   i13 = i12;
  }
 } while (0);
 if ((i10 | 0) == 11) {
  HEAP32[i1 >> 2] = 1;
  HEAP8[i1 + 4 | 0] = 1;
  HEAP32[i1 + 16 >> 2] = 0;
  i13 = i6;
 }
 do {
  if ((i13 | 0) != 0) {
   i6 = i13 | 0;
   i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i6 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i4 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i13 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i13);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore5XPath9FunNumber8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 32 | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) != 0) {
  i7 = HEAP32[HEAP32[i2 + 4 >> 2] >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] & 63](i6, i7);
  d8 = +__ZNK7WebCore5XPath5Value8toNumberEv(i6);
  HEAP32[i1 >> 2] = 2;
  HEAPF64[i1 + 8 >> 3] = d8;
  HEAP32[i1 + 16 >> 2] = 0;
  i7 = HEAP32[i6 + 16 >> 2] | 0;
  if ((i7 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i7 | 0);
  STACKTOP = i3;
  return;
 }
 i7 = HEAP32[(__ZN7WebCore5XPath10Expression17evaluationContextEv() | 0) >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i7 | 0) != 0) {
  i6 = i7 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 i6 = __ZN3WTF10fastMallocEj(24) | 0;
 i2 = i4 | 0;
 HEAP32[i2 >> 2] = i7;
 __ZN7WebCore5XPath5Value4DataC2EN3WTF10PassRefPtrINS_4NodeEEE(i6, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 8 | 0;
   i7 = i2 | 0;
   i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i4 = i5 + 16 | 0;
 HEAP32[i4 >> 2] = i6;
 d8 = +__ZNK7WebCore5XPath5Value8toNumberEv(i5);
 HEAP32[i1 >> 2] = 2;
 HEAPF64[i1 + 8 >> 3] = d8;
 HEAP32[i1 + 16 >> 2] = 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i1 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore5XPath5Value4DataC2EN3WTF10PassRefPtrINS_4NodeEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP8[i1 + 8 | 0] = 1;
 HEAP8[i1 + 9 | 0] = 0;
 i3 = i1 + 12 | 0;
 HEAP32[i3 >> 2] = 0;
 i4 = i1 + 16 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i1 + 20 | 0;
 HEAP32[i5 >> 2] = 1;
 i1 = __ZN3WTF18fastMallocGoodSizeEj(4) | 0;
 HEAP32[i4 >> 2] = i1 >>> 2;
 i4 = __ZN3WTF10fastMallocEj(i1) | 0;
 i1 = i4;
 HEAP32[i3 >> 2] = i1;
 do {
  if ((i4 | 0) == 0) {
   i6 = 6;
  } else {
   i3 = HEAP32[i5 >> 2] | 0;
   i7 = i1 + (i3 << 2) | 0;
   if ((i3 | 0) == 0) {
    i6 = 6;
    break;
   }
   i3 = i2 + 8 | 0;
   if ((i2 | 0) == 0) {
    i8 = i1;
    while (1) {
     HEAP32[i8 >> 2] = 0;
     i9 = i8 + 4 | 0;
     if ((i9 | 0) == (i7 | 0)) {
      i6 = 6;
      break;
     } else {
      i8 = i9;
     }
    }
   } else {
    i8 = i1;
    while (1) {
     HEAP32[i8 >> 2] = i2;
     HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
     i8 = i8 + 4 | 0;
     if ((i8 | 0) == (i7 | 0)) {
      break;
     }
    }
   }
  }
 } while (0);
 do {
  if ((i6 | 0) == 6) {
   if ((i2 | 0) != 0) {
    break;
   }
   return;
  }
 } while (0);
 i6 = i2 + 8 | 0;
 i2 = i6 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
 return;
}
function __ZN7WebCore5XPath8Function12setArgumentsERKN3WTF6StringENS2_6VectorINSt3__110unique_ptrINS0_10ExpressionENS7_14default_deleteIS9_EEEELj0ENS2_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i3 + 8 | 0;
 do {
  if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 320 | 0) | 0)) {
   if ((HEAP32[i6 >> 2] | 0) == 0) {
    break;
   }
   HEAP8[i1 + 16 | 0] = 0;
  }
 } while (0);
 i2 = i5 | 0;
 i7 = i5 + 4 | 0;
 i8 = i5 + 8 | 0;
 HEAP32[i8 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i6 >> 2] = 0;
 i6 = i3 | 0;
 HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i6 >> 2] = 0;
 i6 = i3 + 4 | 0;
 HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i6 >> 2] = 0;
 __ZN7WebCore5XPath10Expression17setSubexpressionsEN3WTF6VectorINSt3__110unique_ptrIS1_NS4_14default_deleteIS1_EEEELj0ENS2_15CrashOnOverflowEEE(i1 | 0, i5);
 i5 = HEAP32[i8 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i1 = HEAP32[i2 >> 2] | 0;
  i6 = i1 + (i5 << 2) | 0;
  i5 = i1;
  while (1) {
   i1 = i5 | 0;
   i3 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = 0;
   if ((i3 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 255](i3);
   }
   i5 = i5 + 4 | 0;
   if ((i5 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i8 >> 2] = 0;
 }
 i8 = HEAP32[i2 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i7 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i8);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore5XPath8Function6createERKN3WTF6StringENS2_6VectorINSt3__110unique_ptrINS0_10ExpressionENS7_14default_deleteIS9_EEEELj0ENS2_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i3 + 8 | 0;
 __ZN7WebCore5XPath8Function6createERKN3WTF6StringEj(i1, i2, HEAP32[i6 >> 2] | 0);
 i7 = HEAP32[i1 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i5 | 0;
 i8 = i5 + 4 | 0;
 i9 = i5 + 8 | 0;
 HEAP32[i9 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i6 >> 2] = 0;
 i6 = i3 | 0;
 HEAP32[i1 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i6 >> 2] = 0;
 i6 = i3 + 4 | 0;
 HEAP32[i8 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i6 >> 2] = 0;
 __ZN7WebCore5XPath8Function12setArgumentsERKN3WTF6StringENS2_6VectorINSt3__110unique_ptrINS0_10ExpressionENS7_14default_deleteIS9_EEEELj0ENS2_15CrashOnOverflowEEE(i7, i2, i5);
 i5 = HEAP32[i9 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i2 = HEAP32[i1 >> 2] | 0;
  i7 = i2 + (i5 << 2) | 0;
  i5 = i2;
  while (1) {
   i2 = i5 | 0;
   i6 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   if ((i6 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 255](i6);
   }
   i5 = i5 + 4 | 0;
   if ((i5 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i9 >> 2] = 0;
 }
 i9 = HEAP32[i1 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i1 >> 2] = 0;
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i9);
 STACKTOP = i4;
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
function __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 + 20 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i4 = i1 + 12 | 0;
 i5 = i4;
 if ((i2 | 0) != 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i7 = i6 + (i2 << 2) | 0;
  i2 = i6;
  while (1) {
   i6 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i8 = i6 + 8 | 0;
     i9 = i8 | 0;
     i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     HEAP32[i9 >> 2] = i10;
     if ((i10 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
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
 if ((i3 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 16 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
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
function __ZNK7WebCore5XPath8FunRound8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, d6 = +0, i7 = 0, i8 = 0, d9 = +0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i5 = HEAP32[HEAP32[i2 + 4 >> 2] >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 63](i4, i5);
 d6 = +__ZNK7WebCore5XPath5Value8toNumberEv(i4);
 HEAPF64[tempDoublePtr >> 3] = d6;
 i5 = HEAP32[tempDoublePtr >> 2] | 0;
 i2 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
 i7 = i2 & 2146435072;
 i8 = 2146435071;
 do {
  if (i7 >>> 0 > i8 >>> 0 | i7 >>> 0 == i8 >>> 0 & (i5 & 0) >>> 0 > -1 >>> 0) {
   d9 = d6;
  } else {
   i10 = -1;
   if ((i2 | 0) > (i10 | 0) | (i2 | 0) == (i10 | 0) & i5 >>> 0 > -1 >>> 0 | d6 < +-.5) {
    d9 = +Math_floor(d6 + +.5);
    break;
   } else {
    d9 = d6 * +0;
    break;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = 2;
 HEAPF64[i1 + 8 >> 3] = d9;
 HEAP32[i1 + 16 >> 2] = 0;
 i1 = HEAP32[i4 + 16 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i1 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore5XPath18FunSubstringBeforeD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath17FunSubstringAfterD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath17FunNormalizeSpaceD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath15FunStringLengthD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath15FunNamespaceURID0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath13FunStartsWithD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath12FunTranslateD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath12FunSubstringD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath12FunLocalNameD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath11FunPositionD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath11FunContainsD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath10FunCeilingD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath10FunBooleanD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath10ExpressionD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath9FunStringD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath9FunNumberD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath9FunConcatD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath8FunRoundD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath8FunFloorD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath8FunFalseD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath8FunCountD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath7FunTrueD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath7FunNameD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath7FunLastD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath7FunLangD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath6FunSumD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath6FunNotD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath5FunIdD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZNK7WebCore5XPath8FunCount8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, d6 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i5 = HEAP32[HEAP32[i2 + 4 >> 2] >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 63](i4, i5);
 d6 = +((HEAP32[(__ZNK7WebCore5XPath5Value9toNodeSetEv(i4) | 0) + 12 >> 2] | 0) >>> 0 >>> 0);
 HEAP32[i1 >> 2] = 2;
 HEAPF64[i1 + 8 >> 3] = d6;
 HEAP32[i1 + 16 >> 2] = 0;
 i1 = HEAP32[i4 + 16 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i1 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore5XPath18FunSubstringBeforeD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath17FunSubstringAfterD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath17FunNormalizeSpaceD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath15FunStringLengthD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath15FunNamespaceURID1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath13FunStartsWithD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath12FunTranslateD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath12FunSubstringD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath12FunLocalNameD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath11FunPositionD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath11FunContainsD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath10FunCeilingD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath10FunBooleanD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath10ExpressionD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath9FunStringD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath9FunNumberD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath9FunConcatD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath8FunRoundD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath8FunFloorD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath8FunFalseD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath8FunCountD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath7FunTrueD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath7FunNameD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath7FunLastD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath7FunLangD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath6FunSumD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath6FunNotD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath5FunIdD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 255](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZNK7WebCore5XPath10FunCeiling8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, d6 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i5 = HEAP32[HEAP32[i2 + 4 >> 2] >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 63](i4, i5);
 d6 = +Math_ceil(+__ZNK7WebCore5XPath5Value8toNumberEv(i4));
 HEAP32[i1 >> 2] = 2;
 HEAPF64[i1 + 8 >> 3] = d6;
 HEAP32[i1 + 16 >> 2] = 0;
 i1 = HEAP32[i4 + 16 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i1 | 0);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore5XPath8FunFloor8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, d6 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i5 = HEAP32[HEAP32[i2 + 4 >> 2] >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 63](i4, i5);
 d6 = +Math_floor(+__ZNK7WebCore5XPath5Value8toNumberEv(i4));
 HEAP32[i1 >> 2] = 2;
 HEAPF64[i1 + 8 >> 3] = d6;
 HEAP32[i1 + 16 >> 2] = 0;
 i1 = HEAP32[i4 + 16 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i1 | 0);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore5XPath10FunBoolean8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i5 = HEAP32[HEAP32[i2 + 4 >> 2] >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 63](i4, i5);
 i5 = __ZNK7WebCore5XPath5Value9toBooleanEv(i4) | 0;
 HEAP32[i1 >> 2] = 1;
 HEAP8[i1 + 4 | 0] = i5 & 1;
 HEAP32[i1 + 16 >> 2] = 0;
 i1 = HEAP32[i4 + 16 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i1 | 0);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore5XPath6FunNot8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i5 = HEAP32[HEAP32[i2 + 4 >> 2] >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 63](i4, i5);
 i5 = __ZNK7WebCore5XPath5Value9toBooleanEv(i4) | 0;
 HEAP32[i1 >> 2] = 1;
 HEAP8[i1 + 4 | 0] = i5 & 1 ^ 1;
 HEAP32[i1 + 16 >> 2] = 0;
 i1 = HEAP32[i4 + 16 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv(i1 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore5XPath8FunRound5roundEd(d1) {
 d1 = +d1;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, d6 = +0;
 HEAPF64[tempDoublePtr >> 3] = d1;
 i2 = HEAP32[tempDoublePtr >> 2] | 0;
 i3 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
 i4 = i3 & 2146435072;
 i5 = 2146435071;
 if (i4 >>> 0 > i5 >>> 0 | i4 >>> 0 == i5 >>> 0 & (i2 & 0) >>> 0 > -1 >>> 0) {
  d6 = d1;
  return +d6;
 }
 i5 = -1;
 if ((i3 | 0) > (i5 | 0) | (i3 | 0) == (i5 | 0) & i2 >>> 0 > -1 >>> 0 | d1 < +-.5) {
  d6 = +Math_floor(d1 + +.5);
  return +d6;
 } else {
  d6 = d1 * +0;
  return +d6;
 }
 return +0;
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
function __ZNK7WebCore5XPath11FunPosition8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = HEAP32[(__ZN7WebCore5XPath10Expression17evaluationContextEv() | 0) + 8 >> 2] | 0;
 HEAP32[i1 >> 2] = 2;
 HEAPF64[i1 + 8 >> 3] = +(i2 >>> 0 >>> 0);
 HEAP32[i1 + 16 >> 2] = 0;
 return;
}
function __ZNK7WebCore5XPath7FunLast8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = HEAP32[(__ZN7WebCore5XPath10Expression17evaluationContextEv() | 0) + 4 >> 2] | 0;
 HEAP32[i1 >> 2] = 2;
 HEAPF64[i1 + 8 >> 3] = +(i2 >>> 0 >>> 0);
 HEAP32[i1 + 16 >> 2] = 0;
 return;
}
function __ZN7WebCore5XPathL29createFunctionSubstringBeforeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 _memset(i2 | 0, 0, 20) | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 784;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore5XPathL28createFunctionSubstringAfterEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 _memset(i2 | 0, 0, 20) | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 816;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore5XPathL28createFunctionNormalizeSpaceEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 848;
 HEAP8[i2 + 16 | 0] = 1;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore5XPathL24createFunctionStartsWithEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 _memset(i2 | 0, 0, 20) | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 944;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore5XPathL23createFunctionSubstringEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 _memset(i2 | 0, 0, 20) | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 1008;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore5XPathL23createFunctionTranslateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 _memset(i2 | 0, 0, 20) | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 976;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore5XPathL22createFunctionContainsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 _memset(i2 | 0, 0, 20) | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 1104;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore5XPathL26createFunctionStringLengthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 880;
 HEAP8[i2 + 16 | 0] = 1;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore5XPathL26createFunctionNamespaceURIEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 912;
 HEAP8[i2 + 16 | 0] = 1;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore5XPathL21createFunctionCeilingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 _memset(i2 | 0, 0, 20) | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 1136;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore5XPathL21createFunctionBooleanEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 _memset(i2 | 0, 0, 20) | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 1168;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore5XPathL23createFunctionLocalNameEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 1040;
 HEAP8[i2 + 16 | 0] = 1;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore5XPathL20createFunctionConcatEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 _memset(i2 | 0, 0, 20) | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 400;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore5XPathL22createFunctionPositionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 1072;
 HEAP8[i2 + 17 | 0] = 1;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore5XPathL19createFunctionRoundEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 _memset(i2 | 0, 0, 20) | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 432;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore5XPathL19createFunctionFloorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 _memset(i2 | 0, 0, 20) | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 464;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore5XPathL19createFunctionFalseEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 _memset(i2 | 0, 0, 20) | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 496;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore5XPathL19createFunctionCountEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 _memset(i2 | 0, 0, 20) | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 528;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore5XPathL18createFunctionTrueEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 _memset(i2 | 0, 0, 20) | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 560;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore5XPathL17createFunctionSumEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 _memset(i2 | 0, 0, 20) | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 688;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore5XPathL17createFunctionNotEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 _memset(i2 | 0, 0, 20) | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 720;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore5XPathL20createFunctionStringEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 336;
 HEAP8[i2 + 16 | 0] = 1;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore5XPathL20createFunctionNumberEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 368;
 HEAP8[i2 + 16 | 0] = 1;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore5XPathL16createFunctionIdEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 _memset(i2 | 0, 0, 20) | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 752;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore5XPathL18createFunctionNameEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 592;
 HEAP8[i2 + 16 | 0] = 1;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore5XPathL18createFunctionLastEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 624;
 HEAP8[i2 + 18 | 0] = 1;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore5XPathL18createFunctionLangEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 656;
 HEAP8[i2 + 16 | 0] = 1;
 HEAP32[i1 >> 2] = i2;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore5XPath8Function6createERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore5XPath8Function6createERKN3WTF6StringEj(i1, i2, 0);
 return;
}
function __ZNK7WebCore5XPath8FunFalse8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 1;
 HEAP8[i1 + 4 | 0] = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 return;
}
function __ZNK7WebCore5XPath7FunTrue8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 1;
 HEAP8[i1 + 4 | 0] = 1;
 HEAP32[i1 + 16 >> 2] = 0;
 return;
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
 FUNCTION_TABLE_vii[i1 & 63](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 63](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 255](i2 | 0);
}
function __ZNK7WebCore5XPath18FunSubstringBefore10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 3;
}
function __ZNK7WebCore5XPath17FunSubstringAfter10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 3;
}
function __ZNK7WebCore5XPath17FunNormalizeSpace10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 3;
}
function __ZNK7WebCore5XPath15FunStringLength10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 2;
}
function __ZNK7WebCore5XPath15FunNamespaceURI10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 3;
}
function __ZNK7WebCore5XPath13FunStartsWith10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore5XPath12FunTranslate10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 3;
}
function __ZNK7WebCore5XPath12FunSubstring10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 3;
}
function __ZNK7WebCore5XPath12FunLocalName10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 3;
}
function __ZNK7WebCore5XPath11FunPosition10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 2;
}
function __ZNK7WebCore5XPath11FunContains10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore5XPath10FunCeiling10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 2;
}
function __ZNK7WebCore5XPath10FunBoolean10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore5XPath9FunString10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 3;
}
function __ZNK7WebCore5XPath9FunNumber10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 2;
}
function __ZNK7WebCore5XPath9FunConcat10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 3;
}
function __ZNK7WebCore5XPath8FunRound10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 2;
}
function __ZNK7WebCore5XPath8FunFloor10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 2;
}
function __ZNK7WebCore5XPath8FunFalse10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore5XPath8FunCount10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 2;
}
function __ZNK7WebCore5XPath7FunTrue10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore5XPath7FunName10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 3;
}
function __ZNK7WebCore5XPath7FunLast10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 2;
}
function __ZNK7WebCore5XPath7FunLang10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore5XPath6FunSum10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 2;
}
function __ZNK7WebCore5XPath6FunNot10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore5XPath5FunId10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
 return 0;
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
function b3() {
 abort(3);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore5XPath9FunNumberD0Ev,b0,__ZN7WebCore5XPath17FunNormalizeSpaceD1Ev,b0,__ZN7WebCore5XPath8FunFalseD0Ev,b0,__ZN7WebCore5XPath17FunSubstringAfterD1Ev,b0,__ZN7WebCore5XPathL20createFunctionConcatEv,b0,__ZN7WebCore5XPath8FunFloorD1Ev,b0,__ZN7WebCore5XPath8FunRoundD1Ev,b0,__ZN7WebCore5XPathL19createFunctionFalseEv,b0,__ZN7WebCore5XPath7FunNameD0Ev,b0,__ZN7WebCore5XPath11FunPositionD0Ev,b0,__ZN7WebCore5XPath8FunCountD1Ev,b0,__ZN7WebCore5XPath5FunIdD0Ev,b0,__ZN7WebCore5XPathL16createFunctionIdEv,b0,__ZN7WebCore5XPath15FunStringLengthD0Ev
  ,b0,__ZN7WebCore5XPathL19createFunctionRoundEv,b0,__ZN7WebCore5XPathL20createFunctionNumberEv,b0,__ZN7WebCore5XPath9FunStringD1Ev,b0,__ZN7WebCore5XPath17FunNormalizeSpaceD0Ev,b0,__ZN7WebCore5XPath15FunNamespaceURID1Ev,b0,__ZN7WebCore5XPathL18createFunctionTrueEv,b0,__ZN7WebCore5XPath13FunStartsWithD0Ev,b0,__ZN7WebCore5XPathL24createFunctionStartsWithEv,b0,__ZN7WebCore5XPathL23createFunctionSubstringEv,b0,__ZN7WebCore5XPathL18createFunctionLangEv,b0,__ZN7WebCore5XPath10FunBooleanD0Ev,b0,__ZN7WebCore5XPathL21createFunctionCeilingEv,b0,__ZN7WebCore5XPathL19createFunctionCountEv,b0,__ZN7WebCore5XPathL22createFunctionPositionEv,b0,__ZN7WebCore5XPath15FunNamespaceURID0Ev
  ,b0,__ZN7WebCore5XPath18FunSubstringBeforeD0Ev,b0,__ZN7WebCore5XPathL23createFunctionTranslateEv,b0,__ZN7WebCore5XPath8FunFalseD1Ev,b0,__ZN7WebCore5XPath10FunCeilingD0Ev,b0,__ZN7WebCore5XPath10ExpressionD0Ev,b0,__ZN7WebCore5XPathL26createFunctionNamespaceURIEv,b0,__ZN7WebCore5XPathL17createFunctionSumEv,b0,__ZN7WebCore5XPath5FunIdD1Ev,b0,__ZN7WebCore5XPath15FunStringLengthD1Ev,b0,__ZN7WebCore5XPath18FunSubstringBeforeD1Ev,b0,__ZN7WebCore5XPathL19createFunctionFloorEv,b0,__ZN7WebCore5XPath9FunConcatD1Ev,b0,__ZN7WebCore5XPath6FunNotD0Ev,b0,__ZN7WebCore5XPath12FunTranslateD0Ev,b0,__ZN7WebCore5XPath10FunBooleanD1Ev
  ,b0,__ZN7WebCore5XPathL29createFunctionSubstringBeforeEv,b0,__ZN7WebCore5XPath9FunConcatD0Ev,b0,__ZN7WebCore5XPath11FunContainsD1Ev,b0,__ZN7WebCore5XPath12FunLocalNameD0Ev,b0,__ZN7WebCore5XPath10ExpressionD1Ev,b0,__ZN7WebCore5XPath7FunTrueD0Ev,b0,__ZN7WebCore5XPath6FunSumD0Ev,b0,__ZN7WebCore5XPath10FunCeilingD1Ev,b0,__ZN7WebCore5XPath7FunLangD0Ev,b0,__ZN7WebCore5XPath12FunSubstringD1Ev,b0,__ZN7WebCore5XPath7FunLastD0Ev,b0,__ZN7WebCore5XPath12FunTranslateD1Ev,b0,__ZN7WebCore5XPath6FunNotD1Ev,b0,__ZN7WebCore5XPathL18createFunctionNameEv,b0,__ZN7WebCore5XPath12FunSubstringD0Ev
  ,b0,__ZN7WebCore5XPathL26createFunctionStringLengthEv,b0,__ZN7WebCore5XPathL17createFunctionNotEv,b0,__ZN7WebCore5XPath9FunNumberD1Ev,b0,__ZN7WebCore5XPath6FunSumD1Ev,b0,__ZN7WebCore5XPathL22createFunctionContainsEv,b0,__ZN7WebCore5XPath17FunSubstringAfterD0Ev,b0,__ZN7WebCore5XPathL18createFunctionLastEv,b0,__ZN7WebCore5XPath8FunFloorD0Ev,b0,__ZN7WebCore5XPath7FunNameD1Ev,b0,__ZN7WebCore5XPath11FunContainsD0Ev,b0,__ZN7WebCore5XPathL28createFunctionNormalizeSpaceEv,b0,__ZN7WebCore5XPath7FunTrueD1Ev,b0,__ZN7WebCore5XPathL23createFunctionLocalNameEv,b0,__ZN7WebCore5XPath8FunCountD0Ev,b0,__ZN7WebCore5XPathL20createFunctionStringEv
  ,b0,__ZN7WebCore5XPath13FunStartsWithD1Ev,b0,__ZN7WebCore5XPath9FunStringD0Ev,b0,__ZN7WebCore5XPath7FunLastD1Ev,b0,__ZN7WebCore5XPath11FunPositionD1Ev,b0,__ZN7WebCore5XPath7FunLangD1Ev,b0,__ZN7WebCore5XPathL21createFunctionBooleanEv,b0,__ZN7WebCore5XPath8FunRoundD0Ev,b0,__ZN7WebCore5XPathL28createFunctionSubstringAfterEv,b0,__ZN7WebCore5XPath12FunLocalNameD1Ev,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZNK7WebCore5XPath7FunTrue8evaluateEv,b1,__ZNK7WebCore5XPath8FunFalse8evaluateEv,b1,__ZNK7WebCore5XPath17FunNormalizeSpace8evaluateEv,b1,__ZNK7WebCore5XPath12FunLocalName8evaluateEv,b1,__ZNK7WebCore5XPath7FunName8evaluateEv,b1,__ZNK7WebCore5XPath5FunId8evaluateEv,b1,__ZNK7WebCore5XPath17FunSubstringAfter8evaluateEv,b1,__ZNK7WebCore5XPath11FunPosition8evaluateEv,b1,__ZNK7WebCore5XPath8FunCount8evaluateEv,b1,__ZNK7WebCore5XPath7FunLang8evaluateEv,b1,__ZNK7WebCore5XPath18FunSubstringBefore8evaluateEv,b1,__ZNK7WebCore5XPath12FunSubstring8evaluateEv,b1,__ZNK7WebCore5XPath11FunContains8evaluateEv,b1,__ZNK7WebCore5XPath6FunSum8evaluateEv
  ,b1,__ZNK7WebCore5XPath9FunConcat8evaluateEv,b1,__ZNK7WebCore5XPath9FunString8evaluateEv,b1,__ZNK7WebCore5XPath12FunTranslate8evaluateEv,b1,__ZNK7WebCore5XPath15FunNamespaceURI8evaluateEv,b1,__ZNK7WebCore5XPath10FunBoolean8evaluateEv,b1,__ZNK7WebCore5XPath13FunStartsWith8evaluateEv,b1,__ZNK7WebCore5XPath7FunLast8evaluateEv,b1,__ZNK7WebCore5XPath8FunRound8evaluateEv,b1,__ZNK7WebCore5XPath10FunCeiling8evaluateEv,b1,__ZNK7WebCore5XPath8FunFloor8evaluateEv,b1,__ZNK7WebCore5XPath15FunStringLength8evaluateEv,b1,__ZNK7WebCore5XPath6FunNot8evaluateEv,b1,__ZNK7WebCore5XPath9FunNumber8evaluateEv,b1,b1,b1,b1
  ,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2,__ZNK7WebCore5XPath9FunNumber10resultTypeEv,b2,__ZNK7WebCore5XPath5FunId10resultTypeEv,b2,__ZNK7WebCore5XPath17FunSubstringAfter10resultTypeEv,b2,__ZNK7WebCore5XPath8FunRound10resultTypeEv,b2,__ZNK7WebCore5XPath11FunContains10resultTypeEv,b2,__ZNK7WebCore5XPath12FunSubstring10resultTypeEv,b2,__ZNK7WebCore5XPath6FunNot10resultTypeEv,b2,__ZNK7WebCore5XPath9FunConcat10resultTypeEv,b2,__ZNK7WebCore5XPath8FunCount10resultTypeEv,b2,__ZNK7WebCore5XPath15FunNamespaceURI10resultTypeEv,b2,__ZNK7WebCore5XPath8FunFalse10resultTypeEv,b2,__ZNK7WebCore5XPath8FunFloor10resultTypeEv,b2,__ZNK7WebCore5XPath12FunLocalName10resultTypeEv,b2,__ZNK7WebCore5XPath15FunStringLength10resultTypeEv
  ,b2,__ZNK7WebCore5XPath7FunTrue10resultTypeEv,b2,__ZNK7WebCore5XPath13FunStartsWith10resultTypeEv,b2,__ZNK7WebCore5XPath7FunLast10resultTypeEv,b2,__ZNK7WebCore5XPath10FunBoolean10resultTypeEv,b2,__ZNK7WebCore5XPath10FunCeiling10resultTypeEv,b2,__ZNK7WebCore5XPath9FunString10resultTypeEv,b2,__ZNK7WebCore5XPath7FunName10resultTypeEv,b2,__ZNK7WebCore5XPath17FunNormalizeSpace10resultTypeEv,b2,__ZNK7WebCore5XPath6FunSum10resultTypeEv,b2,__ZNK7WebCore5XPath12FunTranslate10resultTypeEv,b2,__ZNK7WebCore5XPath18FunSubstringBefore10resultTypeEv,b2,__ZNK7WebCore5XPath11FunPosition10resultTypeEv,b2,__ZNK7WebCore5XPath7FunLang10resultTypeEv,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_v = [b3,b3,v____cxa_pure_virtual__wrapper,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "_floor": _floor, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_ceil": _ceil, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore8XMLNames8langAttrE": __ZN7WebCore8XMLNames8langAttrE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore5XPath9FunNumberD0Ev","__ZN7WebCore5XPathL20createFunctionConcatEv","__ZN7WebCore5XPath8FunFalseD0Ev","__ZN7WebCore5XPath17FunSubstringAfterD1Ev","_strlen","__ZNK7WebCore5XPath8FunCount8evaluateEv","__ZNK7WebCore5XPath7FunTrue8evaluateEv","__ZN7WebCore5XPath8FunRoundD1Ev","__ZN7WebCore5XPathL19createFunctionFalseEv","__ZN7WebCore5XPath7FunNameD0Ev","__ZNK7WebCore5XPath8FunFalse8evaluateEv","__ZN7WebCore5XPath11FunPositionD0Ev","__ZN7WebCore5XPathL12expandedNameEPNS_4NodeE","__ZNK7WebCore5XPath9FunNumber10resultTypeEv","__ZN7WebCore5XPath8FunCountD1Ev","__ZNK7WebCore5XPath5FunId10resultTypeEv","__ZN7WebCore5XPath5FunIdD0Ev","__ZN7WebCore5XPath10FunCeilingD1Ev","_memcpy","__ZN7WebCore5XPathL16createFunctionIdEv","__ZN7WebCore5XPath15FunStringLengthD0Ev","__ZN7WebCore5XPathL19createFunctionRoundEv","__ZN3WTF13StringBuilder6appendERKNS_6StringE","__ZNK7WebCore5XPath17FunSubstringAfter10resultTypeEv","__ZNK7WebCore5XPath8FunRound10resultTypeEv","__ZNK7WebCore5XPath17FunNormalizeSpace8evaluateEv","__ZNK7WebCore5XPath12FunLocalName8evaluateEv","__ZNK7WebCore5XPath7FunName8evaluateEv","__ZN7WebCore5XPathL20createFunctionNumberEv","__ZN7WebCore5XPath9FunStringD1Ev","__ZN7WebCore5XPath17FunNormalizeSpaceD0Ev","__ZN7WebCore5XPath15FunNamespaceURID1Ev","__ZNK7WebCore5XPath5FunId8evaluateEv","__ZNK7WebCore5XPath7FunName10resultTypeEv","__ZNK7WebCore5XPath11FunPosition8evaluateEv","__ZN7WebCore5XPath8FunFloorD1Ev","__ZN7WebCore5XPathL18createFunctionTrueEv","__ZN7WebCore5XPath13FunStartsWithD0Ev","__ZNK7WebCore5XPath7FunLang8evaluateEv","__ZN7WebCore5XPathL24createFunctionStartsWithEv","__ZN7WebCore5XPathL23createFunctionSubstringEv","__ZNK7WebCore5XPath18FunSubstringBefore8evaluateEv","__ZN7WebCore5XPathL18createFunctionLangEv","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore5XPath16FunctionMapValueEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EES1_RKS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_","__ZN7WebCore5XPath10FunBooleanD0Ev","__ZNK7WebCore5XPath11FunContains10resultTypeEv","__ZNK7WebCore5XPath8FunFloor10resultTypeEv","__ZN3WTF10RefCountedIN7WebCore5XPath5Value4DataEE5derefEv","__ZN7WebCore5XPathL22createFunctionPositionEv","__ZN7WebCore5XPath15FunNamespaceURID0Ev","__ZNK7WebCore5XPath12FunSubstring8evaluateEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZNK7WebCore5XPath12FunSubstring10resultTypeEv","__ZNK7WebCore5XPath11FunContains8evaluateEv","__ZNK7WebCore5XPath17FunSubstringAfter8evaluateEv","__ZNK7WebCore5XPath6FunSum8evaluateEv","__ZN7WebCore5XPath18FunSubstringBeforeD0Ev","__ZN7WebCore5XPathL23createFunctionTranslateEv","__ZNK7WebCore5XPath9FunConcat8evaluateEv","__ZN7WebCore5XPath8FunFalseD1Ev","__ZN7WebCore5XPath10FunCeilingD0Ev","__ZN7WebCore5XPath10ExpressionD0Ev","__ZN7WebCore5XPathL26createFunctionNamespaceURIEv","__ZN7WebCore5XPathL17createFunctionSumEv","__ZN7WebCore5XPath5FunIdD1Ev","__ZNK7WebCore5XPath6FunNot10resultTypeEv","__ZN7WebCore5XPath15FunStringLengthD1Ev","__ZNK7WebCore5XPath9FunConcat10resultTypeEv","__ZN7WebCore5XPath18FunSubstringBeforeD1Ev","__ZN7WebCore5XPathL19createFunctionFloorEv","__ZN7WebCore5XPath9FunConcatD1Ev","__ZNK7WebCore5XPath9FunString8evaluateEv","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore5XPath16FunctionMapValueEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_","__ZNK7WebCore5XPath12FunTranslate8evaluateEv","__ZN7WebCore5XPath6FunNotD0Ev","__ZNK7WebCore5XPath8FunCount10resultTypeEv","__ZNK7WebCore5XPath15FunNamespaceURI8evaluateEv","__ZNK7WebCore5XPath10FunBoolean8evaluateEv","__ZNK7WebCore5XPath13FunStartsWith8evaluateEv","__ZN7WebCore5XPath12FunTranslateD0Ev","__ZNK7WebCore5XPath15FunNamespaceURI10resultTypeEv","__ZN7WebCore5XPath10FunBooleanD1Ev","__ZN7WebCore5XPathL29createFunctionSubstringBeforeEv","__ZNK7WebCore5XPath8FunFalse10resultTypeEv","__ZN7WebCore5XPath8Function6createERKN3WTF6StringENS2_6VectorINSt3__110unique_ptrINS0_10ExpressionENS7_14default_deleteIS9_EEEELj0ENS2_15CrashOnOverflowEEE","__ZN7WebCore5XPath9FunConcatD0Ev","__ZN7WebCore5XPath11FunPositionD1Ev","__ZN7WebCore5XPath11FunContainsD1Ev","__ZN7WebCore5XPath12FunLocalNameD0Ev","__ZN7WebCore5XPath10ExpressionD1Ev","__ZNK7WebCore5XPath12FunLocalName10resultTypeEv","__ZN7WebCore5XPath7FunTrueD0Ev","_memset","__ZN7WebCore5XPath6FunSumD0Ev","__ZN7WebCore5XPath6FunSumD1Ev","__ZNK7WebCore5XPath15FunStringLength10resultTypeEv","__ZN3WTF13tryMakeStringINS_12StringAppendINS_6StringEPKcEES2_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_","__ZNK7WebCore5XPath7FunLast8evaluateEv","__ZN7WebCore5XPath7FunLangD0Ev","__ZNK7WebCore5XPath8FunRound8evaluateEv","__ZN7WebCore5XPath12FunSubstringD1Ev","__ZN7WebCore5XPath7FunLastD0Ev","__ZNK7WebCore5XPath7FunTrue10resultTypeEv","__ZN7WebCore5XPath12FunTranslateD1Ev","__ZN7WebCore5XPath6FunNotD1Ev","__ZN7WebCore5XPathL18createFunctionNameEv","__ZN7WebCore5XPath12FunSubstringD0Ev","__ZNK7WebCore5XPath13FunStartsWith10resultTypeEv","__ZN7WebCore5XPathL26createFunctionStringLengthEv","__ZNK7WebCore5XPath7FunLast10resultTypeEv","__ZNK7WebCore5XPath10FunCeiling8evaluateEv","__ZNK3WTF12StringAppendINS0_INS_6StringEPKcEES1_EcvS1_Ev","__ZN7WebCore5XPathL17createFunctionNotEv","__ZNK7WebCore5XPath10FunBoolean10resultTypeEv","__ZN7WebCore5XPathL19createFunctionCountEv","__ZNK7WebCore5XPath10FunCeiling10resultTypeEv","__ZN7WebCore5XPath9FunNumberD1Ev","__ZN7WebCore5XPath8Function6createERKN3WTF6StringEj","__ZN7WebCore5XPathL22createFunctionContainsEv","__ZN7WebCore5XPath17FunSubstringAfterD0Ev","__ZNK7WebCore5XPath8FunFloor8evaluateEv","__ZN7WebCore5XPathL18createFunctionLastEv","__ZN7WebCore5XPath8FunFloorD0Ev","__ZN7WebCore5XPath7FunNameD1Ev","__ZN7WebCore5XPath11FunContainsD0Ev","__ZN7WebCore5XPathL21createFunctionCeilingEv","__ZN7WebCore5XPathL28createFunctionNormalizeSpaceEv","__ZN7WebCore5XPath8FunRound5roundEd","__ZN7WebCore5XPath7FunTrueD1Ev","__ZNK7WebCore5XPath15FunStringLength8evaluateEv","__ZNK7WebCore5XPath6FunNot8evaluateEv","__ZN7WebCore5XPathL23createFunctionLocalNameEv","__ZNK7WebCore5XPath11FunPosition10resultTypeEv","__ZN7WebCore5XPath8FunCountD0Ev","__ZN7WebCore5XPathL20createFunctionStringEv","__ZN7WebCore5XPath8Function6createERKN3WTF6StringE","__ZN7WebCore5XPath13FunStartsWithD1Ev","__ZN7WebCore5XPath9FunStringD0Ev","__ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN7WebCore5XPath7FunLastD1Ev","__ZN7WebCore5XPath17FunNormalizeSpaceD1Ev","__ZN7WebCore5XPath7FunLangD1Ev","__ZNK7WebCore5XPath17FunNormalizeSpace10resultTypeEv","__ZN7WebCore5XPathL21createFunctionBooleanEv","__ZN7WebCore5XPath8FunRoundD0Ev","__ZNK7WebCore5XPath9FunNumber8evaluateEv","__ZN7WebCore5XPathL28createFunctionSubstringAfterEv","__ZNK7WebCore5XPath6FunSum10resultTypeEv","__ZNK7WebCore5XPath12FunTranslate10resultTypeEv","__ZN7WebCore5XPath12FunLocalNameD1Ev","__ZNK7WebCore5XPath18FunSubstringBefore10resultTypeEv","__ZN7WebCore5XPath5Value4DataC2EN3WTF10PassRefPtrINS_4NodeEEE","__ZNK7WebCore5XPath9FunString10resultTypeEv","__ZN7WebCore5XPath8Function12setArgumentsERKN3WTF6StringENS2_6VectorINSt3__110unique_ptrINS0_10ExpressionENS7_14default_deleteIS9_EEEELj0ENS2_15CrashOnOverflowEEE","__ZNK7WebCore5XPath7FunLang10resultTypeEv"]

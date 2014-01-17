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
H_BASE = parentModule["_malloc"](232 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 232;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore22MutableStylePropertiesC1ENS_13CSSParserModeE;
var __ZN7WebCore22MutableStylePropertiesC1EPKNS_11CSSPropertyEj;
var __ZN7WebCore22MutableStylePropertiesD1Ev;
var __ZN7WebCore24ImmutableStylePropertiesC1EPKNS_11CSSPropertyEjNS_13CSSParserModeE;
var __ZN7WebCore24ImmutableStylePropertiesD1Ev;
var __ZN7WebCore22MutableStylePropertiesC1ERKNS_15StylePropertiesE;
/* memory initializer */ allocate([98,97,99,107,103,114,111,117,110,100,45,114,101,112,101,97,116,58,32,0,0,0,0,0,98,97,99,107,103,114,111,117,110,100,45,112,111,115,105,116,105,111,110,58,32,0,0,0,32,33,105,109,112,111,114,116,97,110,116,0,0,0,0,0,58,32,0,0,0,0,0,0,44,32,0,0,0,0,0,0,105,110,104,101,114,105,116,0,105,110,105,116,105,97,108,0,47,32,0,0,0,0,0,0,103,0,0,0,109,0,0,0,181,0,0,0,224,0,0,0,226,0,0,0,229,0,0,0,230,0,0,0,231,0,0,0,222,0,0,0,221,0,0,0,223,0,0,0,233,0,0,0,119,0,0,0,120,0,0,0,121,0,0,0,106,1,0,0,107,1,0,0,108,1,0,0,132,0,0,0,134,0,0,0,164,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZTVN7WebCore25InlineCSSStyleDeclarationE=env.__ZTVN7WebCore25InlineCSSStyleDeclarationE|0;
  var __ZTVN7WebCore30PropertySetCSSStyleDeclarationE=env.__ZTVN7WebCore30PropertySetCSSStyleDeclarationE|0;
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
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore15StyleProperties6asTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 408 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 64 | 0;
 i13 = i3 + 72 | 0;
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 120 | 0;
 i18 = i3 + 176 | 0;
 i19 = i3 + 232 | 0;
 i20 = i3 + 240 | 0;
 i21 = i3 + 248 | 0;
 i22 = i3 + 256 | 0;
 i23 = i3 + 264 | 0;
 i24 = i3 + 272 | 0;
 i25 = i3 + 288 | 0;
 i26 = i3 + 296 | 0;
 i27 = i3 + 304 | 0;
 i28 = i3 + 312 | 0;
 i29 = i3 + 320 | 0;
 i30 = i3 + 328 | 0;
 i31 = i3 + 336 | 0;
 i32 = i3 + 344 | 0;
 i33 = i3 + 360 | 0;
 i34 = i3 + 368 | 0;
 i35 = i3 + 376 | 0;
 i36 = i3 + 384 | 0;
 i37 = i3 + 392 | 0;
 i38 = i3 + 400 | 0;
 i39 = i16 | 0;
 HEAP32[i39 >> 2] = 0;
 i40 = i16 + 4 | 0;
 HEAP32[i40 >> 2] = 0;
 i41 = i16 + 8 | 0;
 HEAP32[i41 >> 2] = 0;
 i42 = i16 + 12 | 0;
 HEAP8[i42] = 1;
 HEAP32[i16 + 16 >> 2] = 0;
 i43 = i16 + 20 | 0;
 HEAP32[i43 >> 2] = 0;
 _memset(i17 | 0, 0, 52) | 0;
 HEAP32[i17 >> 2] = 0;
 _memset(i18 | 0, 0, 52) | 0;
 HEAP32[i18 >> 2] = 0;
 i44 = i2 + 4 | 0;
 i45 = HEAP32[i44 >> 2] | 0;
 if ((i45 & 4 | 0) == 0) {
  i46 = i45 >>> 3;
 } else {
  i46 = HEAP32[i2 + 16 >> 2] | 0;
 }
 L5 : do {
  if ((i46 | 0) != 0) {
   i47 = i2 + 8 | 0;
   i48 = i47;
   i49 = i19 | 0;
   i50 = i47;
   i51 = i22 | 0;
   i52 = i2 + 16 | 0;
   i53 = i47;
   i47 = i16 + 20 | 0;
   i54 = i18 + 4 | 0;
   i55 = i20 | 0;
   i56 = i17 + 4 | 0;
   i57 = i21 | 0;
   i58 = -1;
   i59 = -1;
   i60 = -1;
   i61 = 0;
   i62 = 0;
   i63 = -1;
   i64 = i45;
   L7 : while (1) {
    if ((i64 & 4 | 0) == 0) {
     i65 = i48 + (i64 >>> 3 << 2) + (i62 << 1) | 0;
    } else {
     if ((HEAP32[i52 >> 2] | 0) >>> 0 <= i62 >>> 0) {
      i66 = 8;
      break;
     }
     i65 = (HEAP32[i53 >> 2] | 0) + (i62 << 3) | 0;
    }
    i67 = HEAP16[i65 >> 1] & 1023;
    HEAP32[i49 >> 2] = 0;
    switch (i67 | 0) {
    case 28:
     {
      i68 = i58;
      i69 = i59;
      i70 = i62;
      i71 = i61;
      i72 = i63;
      break;
     }
    case 94:
    case 93:
    case 91:
    case 92:
     {
      i73 = 90;
      i74 = 0;
      i66 = 34;
      break;
     }
    case 108:
    case 107:
    case 105:
     {
      i73 = 104;
      i74 = 0;
      i66 = 34;
      break;
     }
    case 30:
     {
      i68 = i62;
      i69 = i59;
      i70 = i60;
      i71 = i61;
      i72 = i63;
      break;
     }
    case 31:
     {
      i68 = i58;
      i69 = i62;
      i70 = i60;
      i71 = i61;
      i72 = i63;
      break;
     }
    case 63:
    case 55:
    case 38:
    case 50:
     {
      i75 = 0;
      i66 = 16;
      break;
     }
    case 60:
    case 54:
    case 35:
    case 49:
     {
      i76 = 0;
      i66 = 17;
      break;
     }
    case 349:
    case 348:
    case 347:
     {
      i73 = 346;
      i74 = 0;
      i66 = 34;
      break;
     }
    case 352:
    case 355:
    case 353:
    case 354:
     {
      i73 = 351;
      i74 = 0;
      i66 = 34;
      break;
     }
    case 89:
    case 88:
    case 87:
     {
      i73 = 86;
      i74 = 0;
      i66 = 34;
      break;
     }
    case 117:
    case 116:
    case 114:
    case 115:
     {
      i73 = 113;
      i74 = 0;
      i66 = 34;
      break;
     }
    case 157:
    case 156:
    case 158:
    case 155:
     {
      i73 = 154;
      i74 = 0;
      i66 = 34;
      break;
     }
    case 201:
    case 208:
     {
      i73 = 57;
      i74 = 0;
      i66 = 34;
      break;
     }
    case 64:
    case 56:
    case 39:
    case 51:
     {
      i75 = 65;
      i66 = 16;
      break;
     }
    case 177:
    case 174:
    case 179:
    case 172:
    case 176:
    case 173:
    case 175:
     {
      i73 = 171;
      i74 = 0;
      i66 = 34;
      break;
     }
    case 243:
    case 247:
     {
      i73 = 244;
      i74 = 0;
      i66 = 34;
      break;
     }
    case 27:
     {
      i68 = i58;
      i69 = i59;
      i70 = i60;
      i71 = i61;
      i72 = i62;
      break;
     }
    case 111:
    case 112:
     {
      i73 = 109;
      i74 = 0;
      i66 = 34;
      break;
     }
    case 242:
    case 245:
    case 246:
     {
      i73 = 241;
      i74 = 0;
      i66 = 34;
      break;
     }
    case 304:
    case 305:
    case 307:
    case 308:
    case 301:
    case 306:
    case 303:
    case 299:
    case 302:
     {
      i73 = 292;
      i74 = 0;
      i66 = 34;
      break;
     }
    default:
     {
      i77 = i64;
      i66 = 43;
     }
    }
    if ((i66 | 0) == 16) {
     i66 = 0;
     i76 = (i75 | 0) == 0 ? 58 : i75;
     i66 = 17;
    }
    if ((i66 | 0) == 17) {
     i66 = 0;
     i78 = (i76 | 0) == 0 ? 41 : i76;
     i79 = HEAP32[i54 >> 2] | 0;
     do {
      if ((i79 & 1 | 0) == 0) {
       __ZNK7WebCore15StyleProperties19borderPropertyValueENS0_15CommonValueModeE(i20, i2, 1);
       i80 = HEAP32[i55 >> 2] | 0;
       HEAP32[i55 >> 2] = 0;
       HEAP32[i49 >> 2] = i80;
       if ((i80 | 0) != 0) {
        i81 = 33;
        i82 = i80;
        break;
       }
       HEAP32[i54 >> 2] = i79 | 1;
       i81 = 0;
       i82 = 0;
      } else {
       i81 = (HEAP32[i56 >> 2] & 1 | 0) != 0 ? 33 : 0;
       i82 = 0;
      }
     } while (0);
     i73 = (i81 | 0) == 0 ? i78 : i81;
     i74 = i82;
     i66 = 34;
    }
    do {
     if ((i66 | 0) == 34) {
      i66 = 0;
      i79 = i73 - 1 | 0;
      i80 = i79 >>> 5;
      i83 = i17 + (i80 << 2) | 0;
      i84 = 1 << (i79 & 31);
      if ((i84 & HEAP32[i83 >> 2] | 0) != 0) {
       i85 = i61;
       i66 = 78;
       break;
      }
      i79 = i18 + (i80 << 2) | 0;
      do {
       if ((HEAP32[i79 >> 2] & i84 | 0) == 0 & (i74 | 0) == 0) {
        __ZNK7WebCore15StyleProperties16getPropertyValueENS_13CSSPropertyIDE(i21, i2, i73);
        i80 = HEAP32[i57 >> 2] | 0;
        HEAP32[i57 >> 2] = 0;
        HEAP32[i49 >> 2] = i80;
        i80 = HEAP32[i57 >> 2] | 0;
        if ((i80 | 0) == 0) {
         break;
        }
        i86 = i80 | 0;
        i87 = (HEAP32[i86 >> 2] | 0) - 2 | 0;
        if ((i87 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i80);
         break;
        } else {
         HEAP32[i86 >> 2] = i87;
         break;
        }
       }
      } while (0);
      HEAP32[i79 >> 2] = HEAP32[i79 >> 2] | i84;
      i87 = HEAP32[i49 >> 2] | 0;
      if ((i87 | 0) == 0) {
       i77 = HEAP32[i44 >> 2] | 0;
       i66 = 43;
       break;
      } else {
       HEAP32[i83 >> 2] = HEAP32[i83 >> 2] | i84;
       i88 = i73;
       i89 = i87;
       i66 = 52;
       break;
      }
     }
    } while (0);
    do {
     if ((i66 | 0) == 43) {
      i66 = 0;
      if ((i77 & 4 | 0) == 0) {
       i90 = i50 + (i62 << 2) | 0;
      } else {
       if ((HEAP32[i52 >> 2] | 0) >>> 0 <= i62 >>> 0) {
        i66 = 45;
        break L7;
       }
       i90 = (HEAP32[i53 >> 2] | 0) + (i62 << 3) + 4 | 0;
      }
      __ZNK7WebCore8CSSValue7cssTextEv(i22, HEAP32[i90 >> 2] | 0);
      i78 = HEAP32[i51 >> 2] | 0;
      HEAP32[i51 >> 2] = 0;
      HEAP32[i49 >> 2] = i78;
      i87 = HEAP32[i51 >> 2] | 0;
      if ((i87 | 0) == 0) {
       i88 = i67;
       i89 = i78;
       i66 = 52;
       break;
      }
      i86 = i87 | 0;
      i80 = (HEAP32[i86 >> 2] | 0) - 2 | 0;
      if ((i80 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i87);
       i88 = i67;
       i89 = i78;
       i66 = 52;
       break;
      } else {
       HEAP32[i86 >> 2] = i80;
       i88 = i67;
       i89 = i78;
       i66 = 52;
       break;
      }
     }
    } while (0);
    L64 : do {
     if ((i66 | 0) == 52) {
      i66 = 0;
      if (__ZN3WTF5equalEPKNS_10StringImplEPKh(i89, H_BASE + 96 | 0) | 0) {
       if (!(__ZN7WebCore11CSSProperty19isInheritedPropertyENS_13CSSPropertyIDE(i88) | 0)) {
        i85 = i61;
        i66 = 78;
        break;
       }
      }
      i67 = i61 + 1 | 0;
      L69 : do {
       if ((i61 | 0) != 0) {
        HEAP8[i12] = 32;
        i78 = HEAP32[i41 >> 2] | 0;
        do {
         if ((i78 | 0) != 0) {
          i80 = HEAP32[i39 >> 2] | 0;
          if (i80 >>> 0 >= (HEAP32[i78 + 4 >> 2] | 0) >>> 0) {
           break;
          }
          if ((HEAP32[i40 >> 2] | 0) != 0) {
           break;
          }
          i86 = (HEAP8[i42] & 1) == 0;
          HEAP32[i39 >> 2] = i80 + 1;
          if (i86) {
           HEAP16[(HEAP32[i47 >> 2] | 0) + (i80 << 1) >> 1] = 32;
           break L69;
          } else {
           HEAP8[(HEAP32[i43 >> 2] | 0) + i80 | 0] = 32;
           break L69;
          }
         }
        } while (0);
        __ZN3WTF13StringBuilder6appendEPKhj(i16, i12, 1);
       }
      } while (0);
      i84 = __ZN7WebCore15getPropertyNameENS_13CSSPropertyIDE(i88) | 0;
      if ((i84 | 0) != 0) {
       __ZN3WTF13StringBuilder6appendEPKhj(i16, i84, _strlen(i84 | 0) | 0);
      }
      __ZN3WTF13StringBuilder6appendEPKhj(i16, H_BASE + 72 | 0, 2);
      __ZN3WTF13StringBuilder6appendERKNS_6StringE(i16, i19);
      i84 = HEAP32[i44 >> 2] | 0;
      if ((i84 & 4 | 0) == 0) {
       i91 = i48 + (i84 >>> 3 << 2) + (i62 << 1) | 0;
      } else {
       if ((HEAP32[i52 >> 2] | 0) >>> 0 <= i62 >>> 0) {
        i66 = 66;
        break L7;
       }
       i91 = (HEAP32[i53 >> 2] | 0) + (i62 << 3) | 0;
      }
      if ((HEAP16[i91 >> 1] & 8192) != 0) {
       __ZN3WTF13StringBuilder6appendEPKhj(i16, H_BASE + 56 | 0, 11);
      }
      HEAP8[i11] = 59;
      i84 = HEAP32[i41 >> 2] | 0;
      do {
       if ((i84 | 0) != 0) {
        i83 = HEAP32[i39 >> 2] | 0;
        if (i83 >>> 0 >= (HEAP32[i84 + 4 >> 2] | 0) >>> 0) {
         break;
        }
        if ((HEAP32[i40 >> 2] | 0) != 0) {
         break;
        }
        i79 = (HEAP8[i42] & 1) == 0;
        HEAP32[i39 >> 2] = i83 + 1;
        if (i79) {
         HEAP16[(HEAP32[i47 >> 2] | 0) + (i83 << 1) >> 1] = 59;
         i85 = i67;
         i66 = 78;
         break L64;
        } else {
         HEAP8[(HEAP32[i43 >> 2] | 0) + i83 | 0] = 59;
         i85 = i67;
         i66 = 78;
         break L64;
        }
       }
      } while (0);
      __ZN3WTF13StringBuilder6appendEPKhj(i16, i11, 1);
      i85 = i67;
      i66 = 78;
     }
    } while (0);
    do {
     if ((i66 | 0) == 78) {
      i66 = 0;
      i84 = HEAP32[i49 >> 2] | 0;
      if ((i84 | 0) == 0) {
       i68 = i58;
       i69 = i59;
       i70 = i60;
       i71 = i85;
       i72 = i63;
       break;
      }
      i83 = i84 | 0;
      i79 = (HEAP32[i83 >> 2] | 0) - 2 | 0;
      if ((i79 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i84);
       i68 = i58;
       i69 = i59;
       i70 = i60;
       i71 = i85;
       i72 = i63;
       break;
      } else {
       HEAP32[i83 >> 2] = i79;
       i68 = i58;
       i69 = i59;
       i70 = i60;
       i71 = i85;
       i72 = i63;
       break;
      }
     }
    } while (0);
    i79 = i62 + 1 | 0;
    if (i79 >>> 0 >= i46 >>> 0) {
     i66 = 84;
     break;
    }
    i58 = i68;
    i59 = i69;
    i60 = i70;
    i61 = i71;
    i62 = i79;
    i63 = i72;
    i64 = HEAP32[i44 >> 2] | 0;
   }
   if ((i66 | 0) == 45) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i66 | 0) == 66) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i66 | 0) == 84) {
    i64 = (i72 | 0) != -1;
    i63 = (i70 | 0) == -1;
    L111 : do {
     if (i63 | i64 ^ 1) {
      i66 = 156;
     } else {
      i62 = HEAP32[i44 >> 2] | 0;
      do {
       if ((i62 & 4 | 0) == 0) {
        i92 = i2 + 8 + (i62 >>> 3 << 2) + (i70 << 1) | 0;
        i93 = i2 + 8 + (i62 >>> 3 << 2) + (i72 << 1) | 0;
       } else {
        if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 <= i72 >>> 0) {
         __ZN3WTF15CrashOnOverflow10overflowedEv();
        }
        if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i70 >>> 0) {
         i92 = (HEAP32[i2 + 8 >> 2] | 0) + (i70 << 3) | 0;
         i93 = (HEAP32[i2 + 8 >> 2] | 0) + (i72 << 3) | 0;
         break;
        } else {
         __ZN3WTF15CrashOnOverflow10overflowedEv();
        }
       }
      } while (0);
      if ((HEAP16[i93 >> 1] & 8192) != 0 ^ (HEAP16[i92 >> 1] & 8192) != 0) {
       i66 = 156;
       break;
      }
      i62 = i71 + 1 | 0;
      L124 : do {
       if ((i71 | 0) != 0) {
        HEAP8[i10] = 32;
        i61 = HEAP32[i41 >> 2] | 0;
        do {
         if ((i61 | 0) != 0) {
          i60 = HEAP32[i39 >> 2] | 0;
          if (i60 >>> 0 >= (HEAP32[i61 + 4 >> 2] | 0) >>> 0) {
           break;
          }
          if ((HEAP32[i40 >> 2] | 0) != 0) {
           break;
          }
          i59 = (HEAP8[i42] & 1) == 0;
          HEAP32[i39 >> 2] = i60 + 1;
          if (i59) {
           HEAP16[(HEAP32[i16 + 20 >> 2] | 0) + (i60 << 1) >> 1] = 32;
           break L124;
          } else {
           HEAP8[(HEAP32[i43 >> 2] | 0) + i60 | 0] = 32;
           break L124;
          }
         }
        } while (0);
        __ZN3WTF13StringBuilder6appendEPKhj(i16, i10, 1);
       }
      } while (0);
      __ZN3WTF13StringBuilder6appendEPKhj(i16, H_BASE + 32 | 0, 21);
      i61 = (HEAP32[i44 >> 2] & 4 | 0) == 0;
      do {
       if (i61) {
        i94 = i2 + 8 + (i72 << 2) | 0;
       } else {
        if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i72 >>> 0) {
         i94 = (HEAP32[i2 + 8 >> 2] | 0) + (i72 << 3) + 4 | 0;
         break;
        } else {
         __ZN3WTF15CrashOnOverflow10overflowedEv();
        }
       }
      } while (0);
      do {
       if ((HEAP32[(HEAP32[i94 >> 2] | 0) + 4 >> 2] & 491520) >>> 0 > 221184 >>> 0) {
        i66 = 113;
       } else {
        do {
         if (i61) {
          i95 = i2 + 8 + (i70 << 2) | 0;
         } else {
          if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i70 >>> 0) {
           i95 = (HEAP32[i2 + 8 >> 2] | 0) + (i70 << 3) + 4 | 0;
           break;
          } else {
           __ZN3WTF15CrashOnOverflow10overflowedEv();
          }
         }
        } while (0);
        if ((HEAP32[(HEAP32[i95 >> 2] | 0) + 4 >> 2] & 491520) >>> 0 > 221184 >>> 0) {
         i66 = 113;
         break;
        }
        do {
         if (i61) {
          i96 = i2 + 8 + (i72 << 2) | 0;
         } else {
          if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i72 >>> 0) {
           i96 = (HEAP32[i2 + 8 >> 2] | 0) + (i72 << 3) + 4 | 0;
           break;
          } else {
           __ZN3WTF15CrashOnOverflow10overflowedEv();
          }
         }
        } while (0);
        __ZNK7WebCore8CSSValue7cssTextEv(i25, HEAP32[i96 >> 2] | 0);
        __ZN3WTF13StringBuilder6appendERKNS_6StringE(i16, i25);
        i67 = HEAP32[i25 >> 2] | 0;
        do {
         if ((i67 | 0) != 0) {
          i60 = i67 | 0;
          i59 = (HEAP32[i60 >> 2] | 0) - 2 | 0;
          if ((i59 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i67);
           break;
          } else {
           HEAP32[i60 >> 2] = i59;
           break;
          }
         }
        } while (0);
        HEAP8[i8] = 32;
        i67 = HEAP32[i41 >> 2] | 0;
        do {
         if ((i67 | 0) == 0) {
          i66 = 132;
         } else {
          i59 = HEAP32[i39 >> 2] | 0;
          if (i59 >>> 0 >= (HEAP32[i67 + 4 >> 2] | 0) >>> 0) {
           i66 = 132;
           break;
          }
          if ((HEAP32[i40 >> 2] | 0) != 0) {
           i66 = 132;
           break;
          }
          i60 = (HEAP8[i42] & 1) == 0;
          HEAP32[i39 >> 2] = i59 + 1;
          if (i60) {
           HEAP16[(HEAP32[i16 + 20 >> 2] | 0) + (i59 << 1) >> 1] = 32;
           break;
          } else {
           HEAP8[(HEAP32[i43 >> 2] | 0) + i59 | 0] = 32;
           break;
          }
         }
        } while (0);
        if ((i66 | 0) == 132) {
         __ZN3WTF13StringBuilder6appendEPKhj(i16, i8, 1);
        }
        do {
         if ((HEAP32[i44 >> 2] & 4 | 0) == 0) {
          i97 = i2 + 8 + (i70 << 2) | 0;
         } else {
          if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i70 >>> 0) {
           i97 = (HEAP32[i2 + 8 >> 2] | 0) + (i70 << 3) + 4 | 0;
           break;
          } else {
           __ZN3WTF15CrashOnOverflow10overflowedEv();
          }
         }
        } while (0);
        __ZNK7WebCore8CSSValue7cssTextEv(i26, HEAP32[i97 >> 2] | 0);
        __ZN3WTF13StringBuilder6appendERKNS_6StringE(i16, i26);
        i67 = HEAP32[i26 >> 2] | 0;
        if ((i67 | 0) == 0) {
         break;
        }
        i59 = i67 | 0;
        i60 = (HEAP32[i59 >> 2] | 0) - 2 | 0;
        if ((i60 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i67);
         break;
        } else {
         HEAP32[i59 >> 2] = i60;
         break;
        }
       }
      } while (0);
      do {
       if ((i66 | 0) == 113) {
        __ZN7WebCore27backgroundPositionShorthandEv(i24);
        __ZNK7WebCore15StyleProperties24getLayeredShorthandValueERKNS_22StylePropertyShorthandE(i23, i2, i24);
        __ZN3WTF13StringBuilder6appendERKNS_6StringE(i16, i23);
        i61 = HEAP32[i23 >> 2] | 0;
        if ((i61 | 0) == 0) {
         break;
        }
        i60 = i61 | 0;
        i59 = (HEAP32[i60 >> 2] | 0) - 2 | 0;
        if ((i59 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i61);
         break;
        } else {
         HEAP32[i60 >> 2] = i59;
         break;
        }
       }
      } while (0);
      i59 = HEAP32[i44 >> 2] | 0;
      do {
       if ((i59 & 4 | 0) == 0) {
        i98 = i2 + 8 + (i59 >>> 3 << 2) + (i72 << 1) | 0;
       } else {
        if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i72 >>> 0) {
         i98 = (HEAP32[i2 + 8 >> 2] | 0) + (i72 << 3) | 0;
         break;
        } else {
         __ZN3WTF15CrashOnOverflow10overflowedEv();
        }
       }
      } while (0);
      if ((HEAP16[i98 >> 1] & 8192) != 0) {
       __ZN3WTF13StringBuilder6appendEPKhj(i16, H_BASE + 56 | 0, 11);
      }
      HEAP8[i7] = 59;
      i59 = HEAP32[i41 >> 2] | 0;
      do {
       if ((i59 | 0) != 0) {
        i60 = HEAP32[i39 >> 2] | 0;
        if (i60 >>> 0 >= (HEAP32[i59 + 4 >> 2] | 0) >>> 0) {
         break;
        }
        if ((HEAP32[i40 >> 2] | 0) != 0) {
         break;
        }
        i61 = (HEAP8[i42] & 1) == 0;
        HEAP32[i39 >> 2] = i60 + 1;
        if (i61) {
         HEAP16[(HEAP32[i16 + 20 >> 2] | 0) + (i60 << 1) >> 1] = 59;
         i99 = i62;
         break L111;
        } else {
         HEAP8[(HEAP32[i43 >> 2] | 0) + i60 | 0] = 59;
         i99 = i62;
         break L111;
        }
       }
      } while (0);
      __ZN3WTF13StringBuilder6appendEPKhj(i16, i7, 1);
      i99 = i62;
     }
    } while (0);
    L211 : do {
     if ((i66 | 0) == 156) {
      do {
       if (i64) {
        i59 = i71 + 1 | 0;
        L215 : do {
         if ((i71 | 0) != 0) {
          HEAP8[i6] = 32;
          i60 = HEAP32[i41 >> 2] | 0;
          do {
           if ((i60 | 0) != 0) {
            i61 = HEAP32[i39 >> 2] | 0;
            if (i61 >>> 0 >= (HEAP32[i60 + 4 >> 2] | 0) >>> 0) {
             break;
            }
            if ((HEAP32[i40 >> 2] | 0) != 0) {
             break;
            }
            i67 = (HEAP8[i42] & 1) == 0;
            HEAP32[i39 >> 2] = i61 + 1;
            if (i67) {
             HEAP16[(HEAP32[i16 + 20 >> 2] | 0) + (i61 << 1) >> 1] = 32;
             break L215;
            } else {
             HEAP8[(HEAP32[i43 >> 2] | 0) + i61 | 0] = 32;
             break L215;
            }
           }
          } while (0);
          __ZN3WTF13StringBuilder6appendEPKhj(i16, i6, 1);
         }
        } while (0);
        HEAP32[i28 >> 2] = i2;
        HEAP32[i28 + 4 >> 2] = i72;
        __ZNK7WebCore15StyleProperties17PropertyReference7cssTextEv(i27, i28);
        __ZN3WTF13StringBuilder6appendERKNS_6StringE(i16, i27);
        i60 = HEAP32[i27 >> 2] | 0;
        if ((i60 | 0) == 0) {
         i100 = i59;
         i66 = 169;
         break;
        }
        i61 = i60 | 0;
        i67 = (HEAP32[i61 >> 2] | 0) - 2 | 0;
        if ((i67 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i60);
         if (i63) {
          i99 = i59;
          break L211;
         } else {
          i101 = i59;
          break;
         }
        } else {
         HEAP32[i61 >> 2] = i67;
         if (i63) {
          i99 = i59;
          break L211;
         } else {
          i101 = i59;
          break;
         }
        }
       } else {
        i100 = i71;
        i66 = 169;
       }
      } while (0);
      if ((i66 | 0) == 169) {
       if (i63) {
        i99 = i100;
        break;
       } else {
        i101 = i100;
       }
      }
      i62 = i101 + 1 | 0;
      L233 : do {
       if ((i101 | 0) != 0) {
        HEAP8[i5] = 32;
        i67 = HEAP32[i41 >> 2] | 0;
        do {
         if ((i67 | 0) != 0) {
          i61 = HEAP32[i39 >> 2] | 0;
          if (i61 >>> 0 >= (HEAP32[i67 + 4 >> 2] | 0) >>> 0) {
           break;
          }
          if ((HEAP32[i40 >> 2] | 0) != 0) {
           break;
          }
          i60 = (HEAP8[i42] & 1) == 0;
          HEAP32[i39 >> 2] = i61 + 1;
          if (i60) {
           HEAP16[(HEAP32[i16 + 20 >> 2] | 0) + (i61 << 1) >> 1] = 32;
           break L233;
          } else {
           HEAP8[(HEAP32[i43 >> 2] | 0) + i61 | 0] = 32;
           break L233;
          }
         }
        } while (0);
        __ZN3WTF13StringBuilder6appendEPKhj(i16, i5, 1);
       }
      } while (0);
      HEAP32[i30 >> 2] = i2;
      HEAP32[i30 + 4 >> 2] = i70;
      __ZNK7WebCore15StyleProperties17PropertyReference7cssTextEv(i29, i30);
      __ZN3WTF13StringBuilder6appendERKNS_6StringE(i16, i29);
      i67 = HEAP32[i29 >> 2] | 0;
      if ((i67 | 0) == 0) {
       i99 = i62;
       break;
      }
      i59 = i67 | 0;
      i61 = (HEAP32[i59 >> 2] | 0) - 2 | 0;
      if ((i61 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i67);
       i99 = i62;
       break;
      } else {
       HEAP32[i59 >> 2] = i61;
       i99 = i62;
       break;
      }
     }
    } while (0);
    i63 = (i68 | 0) != -1;
    i64 = (i69 | 0) == -1;
    do {
     if (!(i64 | i63 ^ 1)) {
      i61 = HEAP32[i44 >> 2] | 0;
      do {
       if ((i61 & 4 | 0) == 0) {
        i102 = i2 + 8 + (i61 >>> 3 << 2) + (i69 << 1) | 0;
        i103 = i2 + 8 + (i61 >>> 3 << 2) + (i68 << 1) | 0;
       } else {
        if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 <= i68 >>> 0) {
         __ZN3WTF15CrashOnOverflow10overflowedEv();
        }
        if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i69 >>> 0) {
         i102 = (HEAP32[i2 + 8 >> 2] | 0) + (i69 << 3) | 0;
         i103 = (HEAP32[i2 + 8 >> 2] | 0) + (i68 << 3) | 0;
         break;
        } else {
         __ZN3WTF15CrashOnOverflow10overflowedEv();
        }
       }
      } while (0);
      if ((HEAP16[i103 >> 1] & 8192) != 0 ^ (HEAP16[i102 >> 1] & 8192) != 0) {
       break;
      }
      L262 : do {
       if ((i99 | 0) != 0) {
        HEAP8[i4] = 32;
        i61 = HEAP32[i41 >> 2] | 0;
        do {
         if ((i61 | 0) != 0) {
          i62 = HEAP32[i39 >> 2] | 0;
          if (i62 >>> 0 >= (HEAP32[i61 + 4 >> 2] | 0) >>> 0) {
           break;
          }
          if ((HEAP32[i40 >> 2] | 0) != 0) {
           break;
          }
          i59 = (HEAP8[i42] & 1) == 0;
          HEAP32[i39 >> 2] = i62 + 1;
          if (i59) {
           HEAP16[(HEAP32[i16 + 20 >> 2] | 0) + (i62 << 1) >> 1] = 32;
           break L262;
          } else {
           HEAP8[(HEAP32[i43 >> 2] | 0) + i62 | 0] = 32;
           break L262;
          }
         }
        } while (0);
        __ZN3WTF13StringBuilder6appendEPKhj(i16, i4, 1);
       }
      } while (0);
      __ZN3WTF13StringBuilder6appendEPKhj(i16, H_BASE + 8 | 0, 19);
      i61 = (HEAP32[i44 >> 2] & 4 | 0) == 0;
      do {
       if (i61) {
        i104 = i2 + 8 + (i68 << 2) | 0;
       } else {
        if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i68 >>> 0) {
         i104 = (HEAP32[i2 + 8 >> 2] | 0) + (i68 << 3) + 4 | 0;
         break;
        } else {
         __ZN3WTF15CrashOnOverflow10overflowedEv();
        }
       }
      } while (0);
      do {
       if ((HEAP32[(HEAP32[i104 >> 2] | 0) + 4 >> 2] & 491520) >>> 0 > 221184 >>> 0) {
        i66 = 211;
       } else {
        do {
         if (i61) {
          i105 = i2 + 8 + (i69 << 2) | 0;
         } else {
          if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i69 >>> 0) {
           i105 = (HEAP32[i2 + 8 >> 2] | 0) + (i69 << 3) + 4 | 0;
           break;
          } else {
           __ZN3WTF15CrashOnOverflow10overflowedEv();
          }
         }
        } while (0);
        if ((HEAP32[(HEAP32[i105 >> 2] | 0) + 4 >> 2] & 491520) >>> 0 > 221184 >>> 0) {
         i66 = 211;
         break;
        }
        do {
         if (i61) {
          i106 = i2 + 8 + (i68 << 2) | 0;
         } else {
          if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i68 >>> 0) {
           i106 = (HEAP32[i2 + 8 >> 2] | 0) + (i68 << 3) + 4 | 0;
           break;
          } else {
           __ZN3WTF15CrashOnOverflow10overflowedEv();
          }
         }
        } while (0);
        __ZNK7WebCore8CSSValue7cssTextEv(i33, HEAP32[i106 >> 2] | 0);
        __ZN3WTF13StringBuilder6appendERKNS_6StringE(i16, i33);
        i62 = HEAP32[i33 >> 2] | 0;
        do {
         if ((i62 | 0) != 0) {
          i59 = i62 | 0;
          i67 = (HEAP32[i59 >> 2] | 0) - 2 | 0;
          if ((i67 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i62);
           break;
          } else {
           HEAP32[i59 >> 2] = i67;
           break;
          }
         }
        } while (0);
        HEAP8[i9] = 32;
        i62 = HEAP32[i41 >> 2] | 0;
        do {
         if ((i62 | 0) == 0) {
          i66 = 230;
         } else {
          i67 = HEAP32[i39 >> 2] | 0;
          if (i67 >>> 0 >= (HEAP32[i62 + 4 >> 2] | 0) >>> 0) {
           i66 = 230;
           break;
          }
          if ((HEAP32[i40 >> 2] | 0) != 0) {
           i66 = 230;
           break;
          }
          i59 = (HEAP8[i42] & 1) == 0;
          HEAP32[i39 >> 2] = i67 + 1;
          if (i59) {
           HEAP16[(HEAP32[i16 + 20 >> 2] | 0) + (i67 << 1) >> 1] = 32;
           break;
          } else {
           HEAP8[(HEAP32[i43 >> 2] | 0) + i67 | 0] = 32;
           break;
          }
         }
        } while (0);
        if ((i66 | 0) == 230) {
         __ZN3WTF13StringBuilder6appendEPKhj(i16, i9, 1);
        }
        do {
         if ((HEAP32[i44 >> 2] & 4 | 0) == 0) {
          i107 = i2 + 8 + (i69 << 2) | 0;
         } else {
          if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i69 >>> 0) {
           i107 = (HEAP32[i2 + 8 >> 2] | 0) + (i69 << 3) + 4 | 0;
           break;
          } else {
           __ZN3WTF15CrashOnOverflow10overflowedEv();
          }
         }
        } while (0);
        __ZNK7WebCore8CSSValue7cssTextEv(i34, HEAP32[i107 >> 2] | 0);
        __ZN3WTF13StringBuilder6appendERKNS_6StringE(i16, i34);
        i62 = HEAP32[i34 >> 2] | 0;
        if ((i62 | 0) == 0) {
         break;
        }
        i67 = i62 | 0;
        i59 = (HEAP32[i67 >> 2] | 0) - 2 | 0;
        if ((i59 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i62);
         break;
        } else {
         HEAP32[i67 >> 2] = i59;
         break;
        }
       }
      } while (0);
      do {
       if ((i66 | 0) == 211) {
        __ZN7WebCore25backgroundRepeatShorthandEv(i32);
        __ZNK7WebCore15StyleProperties24getLayeredShorthandValueERKNS_22StylePropertyShorthandE(i31, i2, i32);
        __ZN3WTF13StringBuilder6appendERKNS_6StringE(i16, i31);
        i61 = HEAP32[i31 >> 2] | 0;
        if ((i61 | 0) == 0) {
         break;
        }
        i59 = i61 | 0;
        i67 = (HEAP32[i59 >> 2] | 0) - 2 | 0;
        if ((i67 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i61);
         break;
        } else {
         HEAP32[i59 >> 2] = i67;
         break;
        }
       }
      } while (0);
      i67 = HEAP32[i44 >> 2] | 0;
      do {
       if ((i67 & 4 | 0) == 0) {
        i108 = i2 + 8 + (i67 >>> 3 << 2) + (i68 << 1) | 0;
       } else {
        if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i68 >>> 0) {
         i108 = (HEAP32[i2 + 8 >> 2] | 0) + (i68 << 3) | 0;
         break;
        } else {
         __ZN3WTF15CrashOnOverflow10overflowedEv();
        }
       }
      } while (0);
      if ((HEAP16[i108 >> 1] & 8192) != 0) {
       __ZN3WTF13StringBuilder6appendEPKhj(i16, H_BASE + 56 | 0, 11);
      }
      HEAP8[i13] = 59;
      i67 = HEAP32[i41 >> 2] | 0;
      do {
       if ((i67 | 0) != 0) {
        i59 = HEAP32[i39 >> 2] | 0;
        if (i59 >>> 0 >= (HEAP32[i67 + 4 >> 2] | 0) >>> 0) {
         break;
        }
        if ((HEAP32[i40 >> 2] | 0) != 0) {
         break;
        }
        i61 = (HEAP8[i42] & 1) == 0;
        HEAP32[i39 >> 2] = i59 + 1;
        if (i61) {
         HEAP16[(HEAP32[i16 + 20 >> 2] | 0) + (i59 << 1) >> 1] = 59;
         break L5;
        } else {
         HEAP8[(HEAP32[i43 >> 2] | 0) + i59 | 0] = 59;
         break L5;
        }
       }
      } while (0);
      __ZN3WTF13StringBuilder6appendEPKhj(i16, i13, 1);
      break L5;
     }
    } while (0);
    do {
     if (i63) {
      i67 = i99 + 1 | 0;
      L352 : do {
       if ((i99 | 0) != 0) {
        HEAP8[i14] = 32;
        i59 = HEAP32[i41 >> 2] | 0;
        do {
         if ((i59 | 0) != 0) {
          i61 = HEAP32[i39 >> 2] | 0;
          if (i61 >>> 0 >= (HEAP32[i59 + 4 >> 2] | 0) >>> 0) {
           break;
          }
          if ((HEAP32[i40 >> 2] | 0) != 0) {
           break;
          }
          i62 = (HEAP8[i42] & 1) == 0;
          HEAP32[i39 >> 2] = i61 + 1;
          if (i62) {
           HEAP16[(HEAP32[i16 + 20 >> 2] | 0) + (i61 << 1) >> 1] = 32;
           break L352;
          } else {
           HEAP8[(HEAP32[i43 >> 2] | 0) + i61 | 0] = 32;
           break L352;
          }
         }
        } while (0);
        __ZN3WTF13StringBuilder6appendEPKhj(i16, i14, 1);
       }
      } while (0);
      HEAP32[i36 >> 2] = i2;
      HEAP32[i36 + 4 >> 2] = i68;
      __ZNK7WebCore15StyleProperties17PropertyReference7cssTextEv(i35, i36);
      __ZN3WTF13StringBuilder6appendERKNS_6StringE(i16, i35);
      i59 = HEAP32[i35 >> 2] | 0;
      if ((i59 | 0) == 0) {
       i109 = i67;
       i66 = 267;
       break;
      }
      i61 = i59 | 0;
      i62 = (HEAP32[i61 >> 2] | 0) - 2 | 0;
      if ((i62 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i59);
       if (i64) {
        break L5;
       } else {
        i110 = i67;
        break;
       }
      } else {
       HEAP32[i61 >> 2] = i62;
       if (i64) {
        break L5;
       } else {
        i110 = i67;
        break;
       }
      }
     } else {
      i109 = i99;
      i66 = 267;
     }
    } while (0);
    if ((i66 | 0) == 267) {
     if (i64) {
      break;
     } else {
      i110 = i109;
     }
    }
    L370 : do {
     if ((i110 | 0) != 0) {
      HEAP8[i15] = 32;
      i63 = HEAP32[i41 >> 2] | 0;
      do {
       if ((i63 | 0) != 0) {
        i62 = HEAP32[i39 >> 2] | 0;
        if (i62 >>> 0 >= (HEAP32[i63 + 4 >> 2] | 0) >>> 0) {
         break;
        }
        if ((HEAP32[i40 >> 2] | 0) != 0) {
         break;
        }
        i61 = (HEAP8[i42] & 1) == 0;
        HEAP32[i39 >> 2] = i62 + 1;
        if (i61) {
         HEAP16[(HEAP32[i16 + 20 >> 2] | 0) + (i62 << 1) >> 1] = 32;
         break L370;
        } else {
         HEAP8[(HEAP32[i43 >> 2] | 0) + i62 | 0] = 32;
         break L370;
        }
       }
      } while (0);
      __ZN3WTF13StringBuilder6appendEPKhj(i16, i15, 1);
     }
    } while (0);
    HEAP32[i38 >> 2] = i2;
    HEAP32[i38 + 4 >> 2] = i69;
    __ZNK7WebCore15StyleProperties17PropertyReference7cssTextEv(i37, i38);
    __ZN3WTF13StringBuilder6appendERKNS_6StringE(i16, i37);
    i64 = HEAP32[i37 >> 2] | 0;
    if ((i64 | 0) == 0) {
     break;
    }
    i63 = i64 | 0;
    i67 = (HEAP32[i63 >> 2] | 0) - 2 | 0;
    if ((i67 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i64);
     break;
    } else {
     HEAP32[i63 >> 2] = i67;
     break;
    }
   } else if ((i66 | 0) == 8) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 __ZN3WTF13StringBuilder11shrinkToFitEv(i16);
 i37 = HEAP32[i40 >> 2] | 0;
 if ((i37 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i16);
  i16 = HEAP32[i40 >> 2] | 0;
  HEAP32[i1 >> 2] = i16;
  if ((i16 | 0) != 0) {
   i111 = i16;
   i66 = 283;
  }
 } else {
  HEAP32[i1 >> 2] = i37;
  i111 = i37;
  i66 = 283;
 }
 if ((i66 | 0) == 283) {
  i66 = i111 | 0;
  HEAP32[i66 >> 2] = (HEAP32[i66 >> 2] | 0) + 2;
 }
 i66 = HEAP32[i41 >> 2] | 0;
 do {
  if ((i66 | 0) != 0) {
   i41 = i66 | 0;
   i111 = (HEAP32[i41 >> 2] | 0) - 2 | 0;
   if ((i111 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i66);
    break;
   } else {
    HEAP32[i41 >> 2] = i111;
    break;
   }
  }
 } while (0);
 i66 = HEAP32[i40 >> 2] | 0;
 if ((i66 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i40 = i66 | 0;
 i111 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
 if ((i111 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i66);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i40 >> 2] = i111;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore15StyleProperties24getLayeredShorthandValueERKNS_22StylePropertyShorthandE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 40 | 0;
 i9 = i4 + 48 | 0;
 i10 = i4 + 72 | 0;
 i11 = i4 + 80 | 0;
 i12 = i6 | 0;
 HEAP32[i12 >> 2] = 0;
 i13 = i6 + 4 | 0;
 HEAP32[i13 >> 2] = 0;
 i14 = i6 + 8 | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP8[i6 + 12 | 0] = 1;
 HEAP32[i6 + 16 >> 2] = 0;
 HEAP32[i6 + 20 >> 2] = 0;
 i15 = HEAP32[i3 + 8 >> 2] | 0;
 i16 = (i15 | 0) == 0;
 L1 : do {
  if (i16) {
   i17 = 0;
   i18 = 18;
  } else {
   if (i15 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i19 = i15 << 2;
   i20 = __ZN3WTF10fastMallocEj(__ZN3WTF18fastMallocGoodSizeEj(i19) | 0) | 0;
   i21 = i20;
   if ((i20 | 0) != 0) {
    _memset(i20 | 0, 0, i19 | 0) | 0;
   }
   if ((i15 | 0) == 0) {
    i17 = i21;
    i18 = 18;
    break;
   }
   i19 = i3 | 0;
   i20 = i7 | 0;
   i22 = 0;
   i23 = 0;
   while (1) {
    __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i7, i2, HEAP32[(HEAP32[i19 >> 2] | 0) + (i23 << 2) >> 2] | 0);
    i24 = HEAP32[i20 >> 2] | 0;
    HEAP32[i20 >> 2] = 0;
    i25 = i21 + (i23 << 2) | 0;
    i26 = HEAP32[i25 >> 2] | 0;
    HEAP32[i25 >> 2] = i24;
    if ((i26 | 0) == 0) {
     i27 = i24;
    } else {
     i24 = i26 | 0;
     i28 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
     if ((i28 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i26);
     } else {
      HEAP32[i24 >> 2] = i28;
     }
     i27 = HEAP32[i25 >> 2] | 0;
    }
    do {
     if ((i27 | 0) == 0) {
      i29 = i22;
     } else {
      if ((HEAP32[i27 + 4 >> 2] & 516096 | 0) == 229376) {
       i25 = HEAP32[i27 + 16 >> 2] | 0;
       i29 = i25 >>> 0 < i22 >>> 0 ? i22 : i25;
       break;
      } else {
       i29 = i22 >>> 0 > 1 >>> 0 ? i22 : 1;
       break;
      }
     }
    } while (0);
    i25 = i23 + 1 | 0;
    if (i25 >>> 0 < i15 >>> 0) {
     i22 = i29;
     i23 = i25;
    } else {
     break;
    }
   }
   i23 = i8 | 0;
   HEAP32[i23 >> 2] = 0;
   if ((i29 | 0) == 0) {
    i30 = i21;
    i31 = i23;
    break;
   }
   i22 = i9 | 0;
   i20 = i9 + 4 | 0;
   i19 = i9 + 8 | 0;
   i25 = i9 + 12 | 0;
   i28 = i9 + 16 | 0;
   i24 = i9 + 20 | 0;
   i26 = i3 | 0;
   i32 = i15 - 1 | 0;
   i33 = i10 | 0;
   i34 = i11 | 0;
   i35 = i9 + 20 | 0;
   i36 = i29 - 1 | 0;
   i37 = 0;
   i38 = 0;
   i39 = 0;
   i40 = 0;
   L27 : while (1) {
    HEAP32[i22 >> 2] = 0;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i19 >> 2] = 0;
    HEAP8[i25] = 1;
    HEAP32[i28 >> 2] = 0;
    HEAP32[i24 >> 2] = 0;
    do {
     if (i16) {
      i41 = i40;
      i42 = i39;
      i43 = i38;
     } else {
      i44 = (i37 | 0) == (i36 | 0);
      i45 = (i37 | 0) == 0;
      i46 = 0;
      i47 = 0;
      i48 = 0;
      i49 = 0;
      i50 = i38;
      i51 = i39;
      i52 = i40;
      while (1) {
       i53 = HEAP32[i21 + (i49 << 2) >> 2] | 0;
       do {
        if ((i53 | 0) == 0) {
         i54 = 0;
        } else {
         if ((HEAP32[i53 + 4 >> 2] & 516096 | 0) == 229376) {
          if ((HEAP32[i53 + 16 >> 2] | 0) >>> 0 <= i37 >>> 0) {
           i54 = 0;
           break;
          }
          i55 = HEAP32[(HEAP32[i53 + 8 >> 2] | 0) + (i37 << 2) >> 2] | 0;
          if ((i55 | 0) == 0) {
           i54 = 0;
           break;
          }
          i56 = i55 | 0;
          HEAP32[i56 >> 2] = (HEAP32[i56 >> 2] | 0) + 1;
          i54 = i55;
          break;
         }
         i55 = i53 | 0;
         i56 = HEAP32[i55 >> 2] | 0;
         HEAP32[i55 >> 2] = i56 + 1;
         if ((HEAP32[(HEAP32[i26 >> 2] | 0) + (i49 << 2) >> 2] | 0) == 23) {
          if (i44) {
           i54 = i44 ? i53 : 0;
           break;
          }
          if ((i56 | 0) == 0) {
           __ZN7WebCore8CSSValue7destroyEv(i53);
           i54 = 0;
           break;
          } else {
           HEAP32[i55 >> 2] = i56;
           i54 = 0;
           break;
          }
         } else {
          if (i45) {
           i54 = i53;
           break;
          }
          if ((i56 | 0) == 0) {
           __ZN7WebCore8CSSValue7destroyEv(i53);
           i54 = 0;
           break;
          } else {
           HEAP32[i55 >> 2] = i56;
           i54 = 0;
           break;
          }
         }
        }
       } while (0);
       i53 = HEAP32[(HEAP32[i26 >> 2] | 0) + (i49 << 2) >> 2] | 0;
       do {
        if ((i53 | 0) == 30) {
         if (__ZNK7WebCore15StyleProperties18isPropertyImplicitENS_13CSSPropertyIDE(i2, 30) | 0) {
          if (i49 >>> 0 < i32 >>> 0) {
           i18 = 43;
           break;
          } else {
           i57 = i49;
           i58 = i47;
           i59 = i46;
           i18 = 78;
           break;
          }
         } else {
          i60 = HEAP32[(HEAP32[i26 >> 2] | 0) + (i49 << 2) >> 2] | 0;
          i18 = 40;
          break;
         }
        } else {
         i60 = i53;
         i18 = 40;
        }
       } while (0);
       do {
        if ((i18 | 0) == 40) {
         i18 = 0;
         if ((i60 | 0) != 307) {
          i57 = i49;
          i58 = i47;
          i59 = i46;
          i18 = 78;
          break;
         }
         if ((__ZNK7WebCore15StyleProperties18isPropertyImplicitENS_13CSSPropertyIDE(i2, 307) | 0) & i49 >>> 0 < i32 >>> 0) {
          i18 = 43;
         } else {
          i57 = i49;
          i58 = i47;
          i59 = i46;
          i18 = 78;
         }
        }
       } while (0);
       L60 : do {
        if ((i18 | 0) == 43) {
         i18 = 0;
         i53 = i49 + 1 | 0;
         i56 = HEAP32[(HEAP32[i26 >> 2] | 0) + (i53 << 2) >> 2] | 0;
         do {
          if ((i56 | 0) == 31) {
           if ((i54 | 0) != 0) {
            break;
           }
           HEAP32[i33 >> 2] = 0;
           i61 = i48;
           i62 = i47;
           i63 = i46;
           i64 = i49;
           i65 = i51;
           i66 = i52;
           i18 = 107;
           break L60;
          } else if ((i56 | 0) == 308) {
           if ((i54 | 0) != 0) {
            break;
           }
           HEAP32[i33 >> 2] = 0;
           i61 = i48;
           i62 = i47;
           i63 = i46;
           i64 = i49;
           i65 = i51;
           i66 = i52;
           i18 = 107;
           break L60;
          } else {
           i57 = i49;
           i58 = i47;
           i59 = i46;
           i18 = 78;
           break L60;
          }
         } while (0);
         if (i15 >>> 0 <= i53 >>> 0) {
          i18 = 48;
          break L27;
         }
         i56 = HEAP32[i21 + (i53 << 2) >> 2] | 0;
         i55 = (i56 | 0) == 0;
         if (!i55) {
          i67 = i56 | 0;
          HEAP32[i67 >> 2] = (HEAP32[i67 >> 2] | 0) + 1;
         }
         do {
          if ((HEAP32[i56 + 4 >> 2] & 491520) >>> 0 > 221184 >>> 0) {
           if ((HEAP32[i56 + 16 >> 2] | 0) >>> 0 <= i37 >>> 0) {
            i18 = 53;
            break L27;
           }
           i67 = HEAP32[(HEAP32[i56 + 8 >> 2] | 0) + (i37 << 2) >> 2] | 0;
           if ((i67 | 0) == 0) {
            i68 = 0;
            break;
           }
           i69 = i67 | 0;
           HEAP32[i69 >> 2] = (HEAP32[i69 >> 2] | 0) + 1;
           i68 = i67;
          } else {
           if (i55) {
            i68 = 0;
            break;
           }
           i67 = i56 | 0;
           HEAP32[i67 >> 2] = (HEAP32[i67 >> 2] | 0) + 1;
           i68 = i56;
          }
         } while (0);
         i67 = HEAP32[i54 + 4 >> 2] | 0;
         L79 : do {
          if ((i67 & 516096 | 0) == 0) {
           i69 = HEAP32[i68 + 4 >> 2] | 0;
           if ((i69 & 516096 | 0) != 0) {
            i70 = 10;
            i71 = i49;
            i72 = i47;
            i73 = i46;
            break;
           }
           if ((i67 & 508 | 0) == 472) {
            i74 = HEAP32[i54 + 8 >> 2] | 0;
           } else {
            i74 = 0;
           }
           if ((i69 & 508 | 0) == 472) {
            i75 = HEAP32[i68 + 8 >> 2] | 0;
           } else {
            i75 = 0;
           }
           do {
            if ((i74 | 0) == (i75 | 0)) {
             i76 = i53;
             i77 = i46;
            } else {
             if ((i74 | 0) == 125 & (i75 | 0) == 128) {
              i76 = i53;
              i77 = 1;
              break;
             }
             if ((i74 | 0) == 128 & (i75 | 0) == 125) {
              i70 = 10;
              i71 = i49;
              i72 = 1;
              i73 = i46;
              break L79;
             } else {
              i76 = i49;
              i77 = i46;
             }
            }
           } while (0);
           i70 = 0;
           i71 = i76;
           i72 = i47;
           i73 = i77;
          } else {
           i70 = 10;
           i71 = i49;
           i72 = i47;
           i73 = i46;
          }
         } while (0);
         do {
          if (!i55) {
           i53 = i56 | 0;
           i67 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
           if ((i67 | 0) == 0) {
            __ZN7WebCore8CSSValue7destroyEv(i56);
            break;
           } else {
            HEAP32[i53 >> 2] = i67;
            break;
           }
          }
         } while (0);
         do {
          if ((i68 | 0) != 0) {
           i56 = i68 | 0;
           i55 = (HEAP32[i56 >> 2] | 0) - 1 | 0;
           if ((i55 | 0) == 0) {
            __ZN7WebCore8CSSValue7destroyEv(i68);
            break;
           } else {
            HEAP32[i56 >> 2] = i55;
            break;
           }
          }
         } while (0);
         if ((i70 | 0) == 0) {
          i57 = i71;
          i58 = i72;
          i59 = i73;
          i18 = 78;
         } else {
          i78 = i50;
          i79 = i71;
          i80 = i48;
          i81 = i72;
          i82 = i73;
          i83 = i51;
          i84 = i52;
         }
        }
       } while (0);
       L105 : do {
        if ((i18 | 0) == 78) {
         i18 = 0;
         HEAP32[i33 >> 2] = 0;
         if ((i54 | 0) == 0) {
          i61 = i48;
          i62 = i58;
          i63 = i59;
          i64 = i57;
          i65 = i51;
          i66 = i52;
          i18 = 107;
          break;
         }
         if (__ZNK7WebCore8CSSValue22isImplicitInitialValueEv(i54) | 0) {
          i61 = i48;
          i62 = i58;
          i63 = i59;
          i64 = i57;
          i65 = i51;
          i66 = i52;
          i18 = 107;
          break;
         }
         i55 = HEAP32[i22 >> 2] | 0;
         L109 : do {
          if ((i55 | 0) != 0) {
           HEAP8[i5] = 32;
           i56 = HEAP32[i19 >> 2] | 0;
           do {
            if ((i56 | 0) != 0) {
             if (i55 >>> 0 >= (HEAP32[i56 + 4 >> 2] | 0) >>> 0) {
              break;
             }
             if ((HEAP32[i20 >> 2] | 0) != 0) {
              break;
             }
             i67 = (HEAP8[i25] & 1) == 0;
             HEAP32[i22 >> 2] = i55 + 1;
             if (i67) {
              HEAP16[(HEAP32[i35 >> 2] | 0) + (i55 << 1) >> 1] = 32;
              break L109;
             } else {
              HEAP8[(HEAP32[i24 >> 2] | 0) + i55 | 0] = 32;
              break L109;
             }
            }
           } while (0);
           __ZN3WTF13StringBuilder6appendEPKhj(i9, i5, 1);
          }
         } while (0);
         i55 = HEAP32[(HEAP32[i26 >> 2] | 0) + (i57 << 2) >> 2] | 0;
         do {
          if (i48) {
           if (!((i55 | 0) == 309 | (i55 | 0) == 32)) {
            break;
           }
           __ZN3WTF13StringBuilder6appendEPKhj(i9, H_BASE + 104 | 0, 2);
          } else {
           if ((i55 | 0) == 309 | (i55 | 0) == 32) {
            i85 = i50;
            i86 = 0;
            i87 = i58;
            i88 = i59;
            i89 = i57;
            i90 = i51;
            i91 = i52;
            i18 = 120;
            break L105;
           }
          }
         } while (0);
         do {
          if (i59) {
           i55 = __ZN7WebCore12getValueNameEt(126) | 0;
           if ((i55 | 0) == 0) {
            i92 = i58;
            break;
           }
           __ZN3WTF13StringBuilder6appendEPKhj(i9, i55, _strlen(i55 | 0) | 0);
           i92 = i58;
          } else {
           if (!i58) {
            __ZNK7WebCore8CSSValue7cssTextEv(i11, i54);
            i55 = HEAP32[i34 >> 2] | 0;
            HEAP32[i34 >> 2] = 0;
            HEAP32[i33 >> 2] = i55;
            __ZN3WTF13StringBuilder6appendERKNS_6StringE(i9, i10);
            i92 = 0;
            break;
           }
           i55 = __ZN7WebCore12getValueNameEt(127) | 0;
           if ((i55 | 0) == 0) {
            i92 = 0;
            break;
           }
           __ZN3WTF13StringBuilder6appendEPKhj(i9, i55, _strlen(i55 | 0) | 0);
           i92 = 0;
          }
         } while (0);
         i55 = HEAP32[(HEAP32[i26 >> 2] | 0) + (i57 << 2) >> 2] | 0;
         if (!((i55 | 0) == 28 | (i55 | 0) == 305)) {
          i61 = i48;
          i62 = i92;
          i63 = 0;
          i64 = i57;
          i65 = i51;
          i66 = i52;
          i18 = 107;
          break;
         }
         if (!i50) {
          i93 = i57;
          i94 = 0;
          i95 = i92;
          i96 = 1;
          i97 = i52;
          i18 = 108;
          break;
         }
         if (__ZN3WTF5equalEPKNS_10StringImplEPKh(i52, H_BASE + 96 | 0) | 0) {
          i98 = i57;
          i99 = 0;
          i100 = i92;
          i101 = 1;
          i102 = i52;
          i103 = i52;
          i18 = 114;
          break;
         }
         if (__ZN3WTF5equalEPKNS_10StringImplEPKh(i52, H_BASE + 88 | 0) | 0) {
          i98 = i57;
          i99 = 0;
          i100 = i92;
          i101 = 1;
          i102 = i52;
          i103 = i52;
          i18 = 114;
          break;
         }
         HEAP32[i23 >> 2] = 0;
         if ((i52 | 0) == 0) {
          i85 = 1;
          i86 = 1;
          i87 = i92;
          i88 = 0;
          i89 = i57;
          i90 = 0;
          i91 = 0;
          i18 = 120;
          break;
         }
         i55 = i52 | 0;
         i56 = (HEAP32[i55 >> 2] | 0) - 2 | 0;
         if ((i56 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i52);
          i61 = 1;
          i62 = i92;
          i63 = 0;
          i64 = i57;
          i65 = 0;
          i66 = 0;
          i18 = 107;
          break;
         } else {
          HEAP32[i55 >> 2] = i56;
          i61 = 1;
          i62 = i92;
          i63 = 0;
          i64 = i57;
          i65 = 0;
          i66 = 0;
          i18 = 107;
          break;
         }
        }
       } while (0);
       if ((i18 | 0) == 107) {
        i18 = 0;
        if (i50) {
         i98 = i64;
         i99 = i63;
         i100 = i62;
         i101 = i61;
         i102 = i65;
         i103 = i66;
         i18 = 114;
        } else {
         i93 = i64;
         i94 = i63;
         i95 = i62;
         i96 = i61;
         i97 = i66;
         i18 = 108;
        }
       }
       do {
        if ((i18 | 0) == 108) {
         i18 = 0;
         i56 = HEAP32[i33 >> 2] | 0;
         if ((i56 | 0) != 0) {
          i55 = i56 | 0;
          HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 2;
         }
         HEAP32[i23 >> 2] = i56;
         if ((i97 | 0) == 0) {
          i85 = 1;
          i86 = i96;
          i87 = i95;
          i88 = i94;
          i89 = i93;
          i90 = i56;
          i91 = i56;
          i18 = 120;
          break;
         }
         i55 = i97 | 0;
         i67 = (HEAP32[i55 >> 2] | 0) - 2 | 0;
         if ((i67 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i97);
          i85 = 1;
          i86 = i96;
          i87 = i95;
          i88 = i94;
          i89 = i93;
          i90 = i56;
          i91 = i56;
          i18 = 120;
          break;
         } else {
          HEAP32[i55 >> 2] = i67;
          i85 = 1;
          i86 = i96;
          i87 = i95;
          i88 = i94;
          i89 = i93;
          i90 = i56;
          i91 = i56;
          i18 = 120;
          break;
         }
        } else if ((i18 | 0) == 114) {
         i18 = 0;
         if ((i102 | 0) == 0) {
          i85 = 1;
          i86 = i101;
          i87 = i100;
          i88 = i99;
          i89 = i98;
          i90 = 0;
          i91 = i103;
          i18 = 120;
          break;
         }
         if (__ZN3WTF5equalEPKNS_10StringImplES2_(i102, HEAP32[i33 >> 2] | 0) | 0) {
          i85 = 1;
          i86 = i101;
          i87 = i100;
          i88 = i99;
          i89 = i98;
          i90 = i102;
          i91 = i103;
          i18 = 120;
          break;
         }
         HEAP32[i23 >> 2] = 0;
         if ((i103 | 0) == 0) {
          i85 = 1;
          i86 = i101;
          i87 = i100;
          i88 = i99;
          i89 = i98;
          i90 = 0;
          i91 = 0;
          i18 = 120;
          break;
         }
         i56 = i103 | 0;
         i67 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
         if ((i67 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i103);
          i85 = i50;
          i86 = i101;
          i87 = i100;
          i88 = i99;
          i89 = i98;
          i90 = 0;
          i91 = 0;
          i18 = 120;
          break;
         } else {
          HEAP32[i56 >> 2] = i67;
          i85 = 1;
          i86 = i101;
          i87 = i100;
          i88 = i99;
          i89 = i98;
          i90 = 0;
          i91 = 0;
          i18 = 120;
          break;
         }
        }
       } while (0);
       do {
        if ((i18 | 0) == 120) {
         i18 = 0;
         i67 = HEAP32[i33 >> 2] | 0;
         if ((i67 | 0) == 0) {
          i78 = i85;
          i79 = i89;
          i80 = i86;
          i81 = i87;
          i82 = i88;
          i83 = i90;
          i84 = i91;
          break;
         }
         i56 = i67 | 0;
         i55 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
         if ((i55 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i67);
          i78 = i85;
          i79 = i89;
          i80 = i86;
          i81 = i87;
          i82 = i88;
          i83 = i90;
          i84 = i91;
          break;
         } else {
          HEAP32[i56 >> 2] = i55;
          i78 = i85;
          i79 = i89;
          i80 = i86;
          i81 = i87;
          i82 = i88;
          i83 = i90;
          i84 = i91;
          break;
         }
        }
       } while (0);
       do {
        if ((i54 | 0) != 0) {
         i55 = i54 | 0;
         i56 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
         if ((i56 | 0) == 0) {
          __ZN7WebCore8CSSValue7destroyEv(i54);
          break;
         } else {
          HEAP32[i55 >> 2] = i56;
          break;
         }
        }
       } while (0);
       i56 = i79 + 1 | 0;
       if (i56 >>> 0 < i15 >>> 0) {
        i46 = i82;
        i47 = i81;
        i48 = i80;
        i49 = i56;
        i50 = i78;
        i51 = i83;
        i52 = i84;
       } else {
        break;
       }
      }
      if ((HEAP32[i22 >> 2] | 0) == 0) {
       i41 = i84;
       i42 = i83;
       i43 = i78;
       break;
      }
      if ((HEAP32[i12 >> 2] | 0) != 0) {
       __ZN3WTF13StringBuilder6appendEPKhj(i6, H_BASE + 80 | 0, 2);
      }
      __ZN3WTF13StringBuilder6appendERKS0_(i6, i9);
      i41 = i84;
      i42 = i83;
      i43 = i78;
     }
    } while (0);
    i52 = HEAP32[i19 >> 2] | 0;
    do {
     if ((i52 | 0) != 0) {
      i51 = i52 | 0;
      i50 = (HEAP32[i51 >> 2] | 0) - 2 | 0;
      if ((i50 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i52);
       break;
      } else {
       HEAP32[i51 >> 2] = i50;
       break;
      }
     }
    } while (0);
    i52 = HEAP32[i20 >> 2] | 0;
    do {
     if ((i52 | 0) != 0) {
      i50 = i52 | 0;
      i51 = (HEAP32[i50 >> 2] | 0) - 2 | 0;
      if ((i51 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i52);
       break;
      } else {
       HEAP32[i50 >> 2] = i51;
       break;
      }
     }
    } while (0);
    i52 = i37 + 1 | 0;
    if (i52 >>> 0 < i29 >>> 0) {
     i37 = i52;
     i38 = i43;
     i39 = i42;
     i40 = i41;
    } else {
     i30 = i21;
     i31 = i23;
     break L1;
    }
   }
   if ((i18 | 0) == 48) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i18 | 0) == 53) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 if ((i18 | 0) == 18) {
  i18 = i8 | 0;
  HEAP32[i18 >> 2] = 0;
  i30 = i17;
  i31 = i18;
 }
 do {
  if (__ZN7WebCoreL18isInitialOrInheritERKN3WTF6StringE(i8) | 0) {
   i18 = HEAP32[i31 >> 2] | 0;
   HEAP32[i31 >> 2] = 0;
   HEAP32[i1 >> 2] = i18;
  } else {
   if ((HEAP32[i12 >> 2] | 0) == 0) {
    HEAP32[i1 >> 2] = 0;
    break;
   }
   __ZN3WTF13StringBuilder11shrinkToFitEv(i6);
   i18 = HEAP32[i13 >> 2] | 0;
   if ((i18 | 0) == 0) {
    __ZNK3WTF13StringBuilder11reifyStringEv(i6);
    i17 = HEAP32[i13 >> 2] | 0;
    HEAP32[i1 >> 2] = i17;
    if ((i17 | 0) == 0) {
     break;
    } else {
     i104 = i17;
    }
   } else {
    HEAP32[i1 >> 2] = i18;
    i104 = i18;
   }
   i18 = i104 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
  }
 } while (0);
 i104 = HEAP32[i31 >> 2] | 0;
 do {
  if ((i104 | 0) != 0) {
   i31 = i104 | 0;
   i1 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i104);
    break;
   } else {
    HEAP32[i31 >> 2] = i1;
    break;
   }
  }
 } while (0);
 if (!i16) {
  i16 = i30 + (i15 << 2) | 0;
  i15 = i30;
  while (1) {
   i104 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i104 | 0) != 0) {
     i1 = i104 | 0;
     i31 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
     if ((i31 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i104);
      break;
     } else {
      HEAP32[i1 >> 2] = i31;
      break;
     }
    }
   } while (0);
   i15 = i15 + 4 | 0;
   if ((i15 | 0) == (i16 | 0)) {
    break;
   }
  }
 }
 if ((i30 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i30);
 }
 i30 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i30 | 0) != 0) {
   i14 = i30 | 0;
   i16 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i30);
    break;
   } else {
    HEAP32[i14 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i30 = HEAP32[i13 >> 2] | 0;
 if ((i30 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i13 = i30 | 0;
 i16 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
 if ((i16 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i30);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i13 >> 2] = i16;
  STACKTOP = i4;
  return;
 }
}
function __ZNK7WebCore15StyleProperties10get4ValuesERKNS_22StylePropertyShorthandE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 48 | 0;
 i10 = i4 + 56 | 0;
 i11 = i4 + 64 | 0;
 i12 = i4 + 72 | 0;
 i13 = HEAP32[i3 >> 2] | 0;
 i3 = i2 + 4 | 0;
 i14 = HEAP32[i3 >> 2] | 0;
 i15 = (i14 & 4 | 0) == 0;
 if (i15) {
  i16 = i14 >>> 3;
  i17 = i16;
  i18 = i2 + 16 | 0;
  i19 = i16;
 } else {
  i16 = i2 + 16 | 0;
  i17 = HEAP32[i16 >> 2] | 0;
  i18 = i16;
  i19 = i14 >>> 3;
 }
 i14 = i2 + 8 | 0;
 i16 = HEAP32[i13 >> 2] & 65535;
 i20 = i14;
 i21 = i14 + (i19 << 2) | 0;
 i22 = i17;
 while (1) {
  i17 = i22 - 1 | 0;
  if ((i17 | 0) <= -1) {
   i23 = -1;
   break;
  }
  if (i15) {
   i24 = i21 + (i17 << 1) | 0;
  } else {
   if ((HEAP32[i18 >> 2] | 0) >>> 0 <= i17 >>> 0) {
    i25 = 8;
    break;
   }
   i24 = (HEAP32[i20 >> 2] | 0) + (i17 << 3) | 0;
  }
  if ((HEAP16[i24 >> 1] & 1023) == i16 << 16 >> 16) {
   i23 = i17;
   break;
  } else {
   i22 = i17;
  }
 }
 if ((i25 | 0) == 8) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i22 = i2 + 16 | 0;
 if (i15) {
  i26 = i19;
 } else {
  i26 = HEAP32[i22 >> 2] | 0;
 }
 i16 = HEAP32[i13 + 4 >> 2] & 65535;
 i24 = i26;
 while (1) {
  i26 = i24 - 1 | 0;
  if ((i26 | 0) <= -1) {
   i27 = -1;
   break;
  }
  if (i15) {
   i28 = i21 + (i26 << 1) | 0;
  } else {
   if ((HEAP32[i22 >> 2] | 0) >>> 0 <= i26 >>> 0) {
    i25 = 18;
    break;
   }
   i28 = (HEAP32[i20 >> 2] | 0) + (i26 << 3) | 0;
  }
  if ((HEAP16[i28 >> 1] & 1023) == i16 << 16 >> 16) {
   i27 = i26;
   break;
  } else {
   i24 = i26;
  }
 }
 if ((i25 | 0) == 18) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i24 = HEAP32[i13 + 8 >> 2] | 0;
 L30 : do {
  if (i15) {
   i16 = i24 & 65535;
   i28 = i19;
   while (1) {
    i22 = i28 - 1 | 0;
    if ((i22 | 0) <= -1) {
     i29 = -1;
     break L30;
    }
    if ((HEAP16[i21 + (i22 << 1) >> 1] & 1023) == i16 << 16 >> 16) {
     i29 = i22;
     break;
    } else {
     i28 = i22;
    }
   }
  } else {
   i28 = i2 + 16 | 0;
   i16 = i24 & 65535;
   i22 = HEAP32[i28 >> 2] | 0;
   while (1) {
    i26 = i22 - 1 | 0;
    if ((i26 | 0) <= -1) {
     i29 = -1;
     break L30;
    }
    if ((HEAP32[i28 >> 2] | 0) >>> 0 <= i26 >>> 0) {
     break;
    }
    if ((HEAP16[(HEAP32[i20 >> 2] | 0) + (i26 << 3) >> 1] & 1023) == i16 << 16 >> 16) {
     i29 = i26;
     break L30;
    } else {
     i22 = i26;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i24 = HEAP32[i13 + 12 >> 2] | 0;
 L42 : do {
  if (i15) {
   i13 = i24 & 65535;
   i22 = i19;
   while (1) {
    i16 = i22 - 1 | 0;
    if ((i16 | 0) <= -1) {
     i30 = -1;
     break L42;
    }
    if ((HEAP16[i21 + (i16 << 1) >> 1] & 1023) == i13 << 16 >> 16) {
     i30 = i16;
     break;
    } else {
     i22 = i16;
    }
   }
  } else {
   i22 = i2 + 16 | 0;
   i13 = i24 & 65535;
   i16 = HEAP32[i22 >> 2] | 0;
   while (1) {
    i28 = i16 - 1 | 0;
    if ((i28 | 0) <= -1) {
     i30 = -1;
     break L42;
    }
    if ((HEAP32[i22 >> 2] | 0) >>> 0 <= i28 >>> 0) {
     break;
    }
    if ((HEAP16[(HEAP32[i20 >> 2] | 0) + (i28 << 3) >> 1] & 1023) == i13 << 16 >> 16) {
     i30 = i28;
     break L42;
    } else {
     i16 = i28;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 if ((i23 | 0) == -1 | (i27 | 0) == -1 | (i29 | 0) == -1 | (i30 | 0) == -1) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if (i15) {
   i31 = i14 + (i23 << 2) | 0;
  } else {
   if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i23 >>> 0) {
    i31 = (HEAP32[i20 >> 2] | 0) + (i23 << 3) + 4 | 0;
    break;
   } else {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 do {
  if ((HEAP32[i31 >> 2] | 0) != 0) {
   do {
    if (i15) {
     i32 = i14 + (i27 << 2) | 0;
    } else {
     if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i27 >>> 0) {
      i32 = (HEAP32[i20 >> 2] | 0) + (i27 << 3) + 4 | 0;
      break;
     } else {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
    }
   } while (0);
   if ((HEAP32[i32 >> 2] | 0) == 0) {
    break;
   }
   do {
    if (i15) {
     i33 = i14 + (i29 << 2) | 0;
    } else {
     if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i29 >>> 0) {
      i33 = (HEAP32[i20 >> 2] | 0) + (i29 << 3) + 4 | 0;
      break;
     } else {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
    }
   } while (0);
   if ((HEAP32[i33 >> 2] | 0) == 0) {
    break;
   }
   do {
    if (i15) {
     i34 = i14 + (i30 << 2) | 0;
    } else {
     if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i30 >>> 0) {
      i34 = (HEAP32[i20 >> 2] | 0) + (i30 << 3) + 4 | 0;
      break;
     } else {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
    }
   } while (0);
   if ((HEAP32[i34 >> 2] | 0) == 0) {
    break;
   }
   do {
    if (i15) {
     i35 = i21 + (i23 << 1) | 0;
    } else {
     if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i23 >>> 0) {
      i35 = (HEAP32[i20 >> 2] | 0) + (i23 << 3) | 0;
      break;
     } else {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
    }
   } while (0);
   do {
    if ((HEAP16[i35 >> 1] | 0) < 0) {
     do {
      if (i15) {
       i36 = i21 + (i27 << 1) | 0;
      } else {
       if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i27 >>> 0) {
        i36 = (HEAP32[i20 >> 2] | 0) + (i27 << 3) | 0;
        break;
       } else {
        __ZN3WTF15CrashOnOverflow10overflowedEv();
       }
      }
     } while (0);
     if ((HEAP16[i36 >> 1] | 0) >= 0) {
      break;
     }
     do {
      if (i15) {
       i37 = i21 + (i29 << 1) | 0;
      } else {
       if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i29 >>> 0) {
        i37 = (HEAP32[i20 >> 2] | 0) + (i29 << 3) | 0;
        break;
       } else {
        __ZN3WTF15CrashOnOverflow10overflowedEv();
       }
      }
     } while (0);
     if ((HEAP16[i37 >> 1] | 0) >= 0) {
      break;
     }
     do {
      if (i15) {
       i38 = i21 + (i30 << 1) | 0;
      } else {
       if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i30 >>> 0) {
        i38 = (HEAP32[i20 >> 2] | 0) + (i30 << 3) | 0;
        break;
       } else {
        __ZN3WTF15CrashOnOverflow10overflowedEv();
       }
      }
     } while (0);
     if ((HEAP16[i38 >> 1] | 0) >= 0) {
      break;
     }
     __ZN3WTF6StringC1EPKc(i1, __ZN7WebCore12getValueNameEt(1) | 0);
     STACKTOP = i4;
     return;
    }
   } while (0);
   do {
    if (i15) {
     i39 = i14 + (i23 << 2) | 0;
    } else {
     if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i23 >>> 0) {
      i39 = (HEAP32[i20 >> 2] | 0) + (i23 << 3) + 4 | 0;
      break;
     } else {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
    }
   } while (0);
   do {
    if ((HEAP32[(HEAP32[i39 >> 2] | 0) + 4 >> 2] & 516096 | 0) != 139264) {
     do {
      if (i15) {
       i40 = i14 + (i27 << 2) | 0;
      } else {
       if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i27 >>> 0) {
        i40 = (HEAP32[i20 >> 2] | 0) + (i27 << 3) + 4 | 0;
        break;
       } else {
        __ZN3WTF15CrashOnOverflow10overflowedEv();
       }
      }
     } while (0);
     if ((HEAP32[(HEAP32[i40 >> 2] | 0) + 4 >> 2] & 516096 | 0) == 139264) {
      break;
     }
     do {
      if (i15) {
       i41 = i14 + (i29 << 2) | 0;
      } else {
       if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i29 >>> 0) {
        i41 = (HEAP32[i20 >> 2] | 0) + (i29 << 3) + 4 | 0;
        break;
       } else {
        __ZN3WTF15CrashOnOverflow10overflowedEv();
       }
      }
     } while (0);
     if ((HEAP32[(HEAP32[i41 >> 2] | 0) + 4 >> 2] & 516096 | 0) == 139264) {
      break;
     }
     do {
      if (i15) {
       i42 = i14 + (i30 << 2) | 0;
      } else {
       if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i30 >>> 0) {
        i42 = (HEAP32[i20 >> 2] | 0) + (i30 << 3) + 4 | 0;
        break;
       } else {
        __ZN3WTF15CrashOnOverflow10overflowedEv();
       }
      }
     } while (0);
     if ((HEAP32[(HEAP32[i42 >> 2] | 0) + 4 >> 2] & 516096 | 0) == 139264) {
      break;
     }
     do {
      if (i15) {
       i43 = i21 + (i27 << 1) | 0;
       i44 = i21 + (i23 << 1) | 0;
      } else {
       if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 <= i23 >>> 0) {
        __ZN3WTF15CrashOnOverflow10overflowedEv();
       }
       if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i27 >>> 0) {
        i24 = HEAP32[i20 >> 2] | 0;
        i43 = i24 + (i27 << 3) | 0;
        i44 = i24 + (i23 << 3) | 0;
        break;
       } else {
        __ZN3WTF15CrashOnOverflow10overflowedEv();
       }
      }
     } while (0);
     do {
      if (!((HEAP16[i44 >> 1] & 8192) != 0 ^ (HEAP16[i43 >> 1] & 8192) != 0)) {
       do {
        if (i15) {
         i45 = i21 + (i29 << 1) | 0;
         i46 = i21 + (i27 << 1) | 0;
        } else {
         if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 <= i27 >>> 0) {
          __ZN3WTF15CrashOnOverflow10overflowedEv();
         }
         if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i29 >>> 0) {
          i24 = HEAP32[i20 >> 2] | 0;
          i45 = i24 + (i29 << 3) | 0;
          i46 = i24 + (i27 << 3) | 0;
          break;
         } else {
          __ZN3WTF15CrashOnOverflow10overflowedEv();
         }
        }
       } while (0);
       if ((HEAP16[i46 >> 1] & 8192) != 0 ^ (HEAP16[i45 >> 1] & 8192) != 0) {
        break;
       }
       do {
        if (i15) {
         i47 = i21 + (i30 << 1) | 0;
         i48 = i21 + (i29 << 1) | 0;
        } else {
         if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 <= i29 >>> 0) {
          __ZN3WTF15CrashOnOverflow10overflowedEv();
         }
         if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i30 >>> 0) {
          i24 = HEAP32[i20 >> 2] | 0;
          i47 = i24 + (i30 << 3) | 0;
          i48 = i24 + (i29 << 3) | 0;
          break;
         } else {
          __ZN3WTF15CrashOnOverflow10overflowedEv();
         }
        }
       } while (0);
       if ((HEAP16[i48 >> 1] & 8192) != 0 ^ (HEAP16[i47 >> 1] & 8192) != 0) {
        break;
       }
       do {
        if (i15) {
         i49 = i14 + (i30 << 2) | 0;
         i50 = i14 + (i27 << 2) | 0;
        } else {
         if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 <= i27 >>> 0) {
          __ZN3WTF15CrashOnOverflow10overflowedEv();
         }
         if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i30 >>> 0) {
          i24 = HEAP32[i20 >> 2] | 0;
          i49 = i24 + (i30 << 3) + 4 | 0;
          i50 = i24 + (i27 << 3) + 4 | 0;
          break;
         } else {
          __ZN3WTF15CrashOnOverflow10overflowedEv();
         }
        }
       } while (0);
       i24 = __ZNK7WebCore8CSSValue6equalsERKS0_(HEAP32[i50 >> 2] | 0, HEAP32[i49 >> 2] | 0) | 0;
       do {
        if ((HEAP32[i3 >> 2] & 4 | 0) == 0) {
         i51 = i14 + (i29 << 2) | 0;
         i52 = i14 + (i23 << 2) | 0;
        } else {
         if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 <= i23 >>> 0) {
          __ZN3WTF15CrashOnOverflow10overflowedEv();
         }
         if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i29 >>> 0) {
          i19 = HEAP32[i20 >> 2] | 0;
          i51 = i19 + (i29 << 3) + 4 | 0;
          i52 = i19 + (i23 << 3) + 4 | 0;
          break;
         } else {
          __ZN3WTF15CrashOnOverflow10overflowedEv();
         }
        }
       } while (0);
       i19 = (__ZNK7WebCore8CSSValue6equalsERKS0_(HEAP32[i52 >> 2] | 0, HEAP32[i51 >> 2] | 0) | 0) & i24;
       do {
        if ((HEAP32[i3 >> 2] & 4 | 0) == 0) {
         i53 = i14 + (i27 << 2) | 0;
         i54 = i14 + (i23 << 2) | 0;
        } else {
         if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 <= i23 >>> 0) {
          __ZN3WTF15CrashOnOverflow10overflowedEv();
         }
         if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i27 >>> 0) {
          i16 = HEAP32[i20 >> 2] | 0;
          i53 = i16 + (i27 << 3) + 4 | 0;
          i54 = i16 + (i23 << 3) + 4 | 0;
          break;
         } else {
          __ZN3WTF15CrashOnOverflow10overflowedEv();
         }
        }
       } while (0);
       i16 = (__ZNK7WebCore8CSSValue6equalsERKS0_(HEAP32[i54 >> 2] | 0, HEAP32[i53 >> 2] | 0) | 0) & i19;
       i13 = i8 | 0;
       HEAP32[i13 >> 2] = 0;
       i22 = i8 + 4 | 0;
       HEAP32[i22 >> 2] = 0;
       i28 = i8 + 8 | 0;
       HEAP32[i28 >> 2] = 0;
       i26 = i8 + 12 | 0;
       HEAP8[i26] = 1;
       HEAP32[i8 + 16 >> 2] = 0;
       i18 = i8 + 20 | 0;
       HEAP32[i18 >> 2] = 0;
       do {
        if ((HEAP32[i3 >> 2] & 4 | 0) == 0) {
         i55 = i14 + (i23 << 2) | 0;
        } else {
         if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i23 >>> 0) {
          i55 = (HEAP32[i20 >> 2] | 0) + (i23 << 3) + 4 | 0;
          break;
         } else {
          __ZN3WTF15CrashOnOverflow10overflowedEv();
         }
        }
       } while (0);
       __ZNK7WebCore8CSSValue7cssTextEv(i9, HEAP32[i55 >> 2] | 0);
       __ZN3WTF13StringBuilder6appendERKNS_6StringE(i8, i9);
       i17 = HEAP32[i9 >> 2] | 0;
       do {
        if ((i17 | 0) != 0) {
         i56 = i17 | 0;
         i57 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
         if ((i57 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i17);
          break;
         } else {
          HEAP32[i56 >> 2] = i57;
          break;
         }
        }
       } while (0);
       do {
        if (!i16) {
         HEAP8[i5] = 32;
         i17 = HEAP32[i28 >> 2] | 0;
         do {
          if ((i17 | 0) == 0) {
           i25 = 210;
          } else {
           i57 = HEAP32[i13 >> 2] | 0;
           if (i57 >>> 0 >= (HEAP32[i17 + 4 >> 2] | 0) >>> 0) {
            i25 = 210;
            break;
           }
           if ((HEAP32[i22 >> 2] | 0) != 0) {
            i25 = 210;
            break;
           }
           i56 = (HEAP8[i26] & 1) == 0;
           HEAP32[i13 >> 2] = i57 + 1;
           if (i56) {
            HEAP16[(HEAP32[i8 + 20 >> 2] | 0) + (i57 << 1) >> 1] = 32;
            break;
           } else {
            HEAP8[(HEAP32[i18 >> 2] | 0) + i57 | 0] = 32;
            break;
           }
          }
         } while (0);
         if ((i25 | 0) == 210) {
          __ZN3WTF13StringBuilder6appendEPKhj(i8, i5, 1);
         }
         do {
          if ((HEAP32[i3 >> 2] & 4 | 0) == 0) {
           i58 = i14 + (i27 << 2) | 0;
          } else {
           if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i27 >>> 0) {
            i58 = (HEAP32[i20 >> 2] | 0) + (i27 << 3) + 4 | 0;
            break;
           } else {
            __ZN3WTF15CrashOnOverflow10overflowedEv();
           }
          }
         } while (0);
         __ZNK7WebCore8CSSValue7cssTextEv(i10, HEAP32[i58 >> 2] | 0);
         __ZN3WTF13StringBuilder6appendERKNS_6StringE(i8, i10);
         i17 = HEAP32[i10 >> 2] | 0;
         if ((i17 | 0) == 0) {
          break;
         }
         i57 = i17 | 0;
         i56 = (HEAP32[i57 >> 2] | 0) - 2 | 0;
         if ((i56 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i17);
          break;
         } else {
          HEAP32[i57 >> 2] = i56;
          break;
         }
        }
       } while (0);
       do {
        if (!i19) {
         HEAP8[i6] = 32;
         i16 = HEAP32[i28 >> 2] | 0;
         do {
          if ((i16 | 0) == 0) {
           i25 = 227;
          } else {
           i56 = HEAP32[i13 >> 2] | 0;
           if (i56 >>> 0 >= (HEAP32[i16 + 4 >> 2] | 0) >>> 0) {
            i25 = 227;
            break;
           }
           if ((HEAP32[i22 >> 2] | 0) != 0) {
            i25 = 227;
            break;
           }
           i57 = (HEAP8[i26] & 1) == 0;
           HEAP32[i13 >> 2] = i56 + 1;
           if (i57) {
            HEAP16[(HEAP32[i8 + 20 >> 2] | 0) + (i56 << 1) >> 1] = 32;
            break;
           } else {
            HEAP8[(HEAP32[i18 >> 2] | 0) + i56 | 0] = 32;
            break;
           }
          }
         } while (0);
         if ((i25 | 0) == 227) {
          __ZN3WTF13StringBuilder6appendEPKhj(i8, i6, 1);
         }
         do {
          if ((HEAP32[i3 >> 2] & 4 | 0) == 0) {
           i59 = i14 + (i29 << 2) | 0;
          } else {
           if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i29 >>> 0) {
            i59 = (HEAP32[i20 >> 2] | 0) + (i29 << 3) + 4 | 0;
            break;
           } else {
            __ZN3WTF15CrashOnOverflow10overflowedEv();
           }
          }
         } while (0);
         __ZNK7WebCore8CSSValue7cssTextEv(i11, HEAP32[i59 >> 2] | 0);
         __ZN3WTF13StringBuilder6appendERKNS_6StringE(i8, i11);
         i16 = HEAP32[i11 >> 2] | 0;
         if ((i16 | 0) == 0) {
          break;
         }
         i56 = i16 | 0;
         i57 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
         if ((i57 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i16);
          break;
         } else {
          HEAP32[i56 >> 2] = i57;
          break;
         }
        }
       } while (0);
       do {
        if (!i24) {
         HEAP8[i7] = 32;
         i19 = HEAP32[i28 >> 2] | 0;
         do {
          if ((i19 | 0) == 0) {
           i25 = 244;
          } else {
           i57 = HEAP32[i13 >> 2] | 0;
           if (i57 >>> 0 >= (HEAP32[i19 + 4 >> 2] | 0) >>> 0) {
            i25 = 244;
            break;
           }
           if ((HEAP32[i22 >> 2] | 0) != 0) {
            i25 = 244;
            break;
           }
           i56 = (HEAP8[i26] & 1) == 0;
           HEAP32[i13 >> 2] = i57 + 1;
           if (i56) {
            HEAP16[(HEAP32[i8 + 20 >> 2] | 0) + (i57 << 1) >> 1] = 32;
            break;
           } else {
            HEAP8[(HEAP32[i18 >> 2] | 0) + i57 | 0] = 32;
            break;
           }
          }
         } while (0);
         if ((i25 | 0) == 244) {
          __ZN3WTF13StringBuilder6appendEPKhj(i8, i7, 1);
         }
         do {
          if ((HEAP32[i3 >> 2] & 4 | 0) == 0) {
           i60 = i14 + (i30 << 2) | 0;
          } else {
           if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i30 >>> 0) {
            i60 = (HEAP32[i20 >> 2] | 0) + (i30 << 3) + 4 | 0;
            break;
           } else {
            __ZN3WTF15CrashOnOverflow10overflowedEv();
           }
          }
         } while (0);
         __ZNK7WebCore8CSSValue7cssTextEv(i12, HEAP32[i60 >> 2] | 0);
         __ZN3WTF13StringBuilder6appendERKNS_6StringE(i8, i12);
         i19 = HEAP32[i12 >> 2] | 0;
         if ((i19 | 0) == 0) {
          break;
         }
         i57 = i19 | 0;
         i56 = (HEAP32[i57 >> 2] | 0) - 2 | 0;
         if ((i56 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i19);
          break;
         } else {
          HEAP32[i57 >> 2] = i56;
          break;
         }
        }
       } while (0);
       __ZN3WTF13StringBuilder11shrinkToFitEv(i8);
       i18 = HEAP32[i22 >> 2] | 0;
       if ((i18 | 0) == 0) {
        __ZNK3WTF13StringBuilder11reifyStringEv(i8);
        i13 = HEAP32[i22 >> 2] | 0;
        HEAP32[i1 >> 2] = i13;
        if ((i13 | 0) != 0) {
         i61 = i13;
         i25 = 257;
        }
       } else {
        HEAP32[i1 >> 2] = i18;
        i61 = i18;
        i25 = 257;
       }
       if ((i25 | 0) == 257) {
        i18 = i61 | 0;
        HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
       }
       i18 = HEAP32[i28 >> 2] | 0;
       do {
        if ((i18 | 0) != 0) {
         i13 = i18 | 0;
         i26 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
         if ((i26 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i18);
          break;
         } else {
          HEAP32[i13 >> 2] = i26;
          break;
         }
        }
       } while (0);
       i18 = HEAP32[i22 >> 2] | 0;
       if ((i18 | 0) == 0) {
        STACKTOP = i4;
        return;
       }
       i28 = i18 | 0;
       i26 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
       if ((i26 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i18);
        STACKTOP = i4;
        return;
       } else {
        HEAP32[i28 >> 2] = i26;
        STACKTOP = i4;
        return;
       }
      }
     } while (0);
     HEAP32[i1 >> 2] = 0;
     STACKTOP = i4;
     return;
    }
   } while (0);
   do {
    if (i15) {
     i62 = i14 + (i23 << 2) | 0;
    } else {
     if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i23 >>> 0) {
      i62 = (HEAP32[i20 >> 2] | 0) + (i23 << 3) + 4 | 0;
      break;
     } else {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
    }
   } while (0);
   do {
    if ((HEAP32[(HEAP32[i62 >> 2] | 0) + 4 >> 2] & 516096 | 0) == 139264) {
     do {
      if (i15) {
       i63 = i14 + (i27 << 2) | 0;
      } else {
       if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i27 >>> 0) {
        i63 = (HEAP32[i20 >> 2] | 0) + (i27 << 3) + 4 | 0;
        break;
       } else {
        __ZN3WTF15CrashOnOverflow10overflowedEv();
       }
      }
     } while (0);
     if ((HEAP32[(HEAP32[i63 >> 2] | 0) + 4 >> 2] & 516096 | 0) != 139264) {
      break;
     }
     do {
      if (i15) {
       i64 = i14 + (i29 << 2) | 0;
      } else {
       if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i29 >>> 0) {
        i64 = (HEAP32[i20 >> 2] | 0) + (i29 << 3) + 4 | 0;
        break;
       } else {
        __ZN3WTF15CrashOnOverflow10overflowedEv();
       }
      }
     } while (0);
     if ((HEAP32[(HEAP32[i64 >> 2] | 0) + 4 >> 2] & 516096 | 0) != 139264) {
      break;
     }
     do {
      if (i15) {
       i65 = i14 + (i30 << 2) | 0;
      } else {
       if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i30 >>> 0) {
        i65 = (HEAP32[i20 >> 2] | 0) + (i30 << 3) + 4 | 0;
        break;
       } else {
        __ZN3WTF15CrashOnOverflow10overflowedEv();
       }
      }
     } while (0);
     if ((HEAP32[(HEAP32[i65 >> 2] | 0) + 4 >> 2] & 516096 | 0) != 139264) {
      break;
     }
     do {
      if (i15) {
       i66 = i21 + (i23 << 1) | 0;
      } else {
       if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i23 >>> 0) {
        i66 = (HEAP32[i20 >> 2] | 0) + (i23 << 3) | 0;
        break;
       } else {
        __ZN3WTF15CrashOnOverflow10overflowedEv();
       }
      }
     } while (0);
     if ((HEAP16[i66 >> 1] & 16384) != 0) {
      break;
     }
     __ZN3WTF6StringC1EPKc(i1, __ZN7WebCore12getValueNameEt(2) | 0);
     STACKTOP = i4;
     return;
    }
   } while (0);
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore15StyleProperties16getPropertyValueENS_13CSSPropertyIDE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 576 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 40 | 0;
 i9 = i4 + 56 | 0;
 i10 = i4 + 72 | 0;
 i11 = i4 + 88 | 0;
 i12 = i4 + 104 | 0;
 i13 = i4 + 120 | 0;
 i14 = i4 + 136 | 0;
 i15 = i4 + 152 | 0;
 i16 = i4 + 168 | 0;
 i17 = i4 + 184 | 0;
 i18 = i4 + 200 | 0;
 i19 = i4 + 216 | 0;
 i20 = i4 + 232 | 0;
 i21 = i4 + 248 | 0;
 i22 = i4 + 264 | 0;
 i23 = i4 + 280 | 0;
 i24 = i4 + 296 | 0;
 i25 = i4 + 312 | 0;
 i26 = i4 + 328 | 0;
 i27 = i4 + 344 | 0;
 i28 = i4 + 360 | 0;
 i29 = i4 + 376 | 0;
 i30 = i4 + 392 | 0;
 i31 = i4 + 408 | 0;
 i32 = i4 + 424 | 0;
 i33 = i4 + 440 | 0;
 i34 = i4 + 456 | 0;
 i35 = i4 + 472 | 0;
 i36 = i4 + 488 | 0;
 i37 = i4 + 504 | 0;
 i38 = i4 + 520 | 0;
 i39 = i4 + 536 | 0;
 i40 = i4 + 552 | 0;
 i41 = i4 + 560 | 0;
 __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i5, i2, i3);
 i42 = i5 | 0;
 i5 = HEAP32[i42 >> 2] | 0;
 HEAP32[i42 >> 2] = 0;
 if ((i5 | 0) != 0) {
  __ZNK7WebCore8CSSValue7cssTextEv(i1, i5);
  i42 = i5 | 0;
  i43 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
  if ((i43 | 0) == 0) {
   __ZN7WebCore8CSSValue7destroyEv(i5);
   STACKTOP = i4;
   return;
  } else {
   HEAP32[i42 >> 2] = i43;
   STACKTOP = i4;
   return;
  }
 }
 switch (i3 | 0) {
 case 58:
  {
   __ZN7WebCore20borderStyleShorthandEv(i17);
   __ZNK7WebCore15StyleProperties10get4ValuesERKNS_22StylePropertyShorthandE(i1, i2, i17);
   STACKTOP = i4;
   return;
  }
 case 228:
  {
   __ZN7WebCore25webkitColumnRuleShorthandEv(i18);
   __ZNK7WebCore15StyleProperties17getShorthandValueERKNS_22StylePropertyShorthandE(i1, i2, i18);
   STACKTOP = i4;
   return;
  }
 case 234:
  {
   __ZN7WebCore22webkitColumnsShorthandEv(i19);
   __ZNK7WebCore15StyleProperties17getShorthandValueERKNS_22StylePropertyShorthandE(i1, i2, i19);
   STACKTOP = i4;
   return;
  }
 case 20:
  {
   __ZN7WebCore19backgroundShorthandEv(i9);
   __ZNK7WebCore15StyleProperties24getLayeredShorthandValueERKNS_22StylePropertyShorthandE(i1, i2, i9);
   STACKTOP = i4;
   return;
  }
 case 34:
  {
   __ZN7WebCore21borderBottomShorthandEv(i12);
   __ZNK7WebCore15StyleProperties17getShorthandValueERKNS_22StylePropertyShorthandE(i1, i2, i12);
   STACKTOP = i4;
   return;
  }
 case 48:
  {
   __ZN7WebCore19borderLeftShorthandEv(i13);
   __ZNK7WebCore15StyleProperties17getShorthandValueERKNS_22StylePropertyShorthandE(i1, i2, i13);
   STACKTOP = i4;
   return;
  }
 case 104:
  {
   __ZN7WebCore16outlineShorthandEv(i14);
   __ZNK7WebCore15StyleProperties17getShorthandValueERKNS_22StylePropertyShorthandE(i1, i2, i14);
   STACKTOP = i4;
   return;
  }
 case 26:
  {
   __ZN7WebCore27backgroundPositionShorthandEv(i7);
   __ZNK7WebCore15StyleProperties24getLayeredShorthandValueERKNS_22StylePropertyShorthandE(i1, i2, i7);
   STACKTOP = i4;
   return;
  }
 case 29:
  {
   __ZN7WebCore25backgroundRepeatShorthandEv(i8);
   __ZNK7WebCore15StyleProperties24getLayeredShorthandValueERKNS_22StylePropertyShorthandE(i1, i2, i8);
   STACKTOP = i4;
   return;
  }
 case 53:
  {
   __ZN7WebCore20borderRightShorthandEv(i11);
   __ZNK7WebCore15StyleProperties17getShorthandValueERKNS_22StylePropertyShorthandE(i1, i2, i11);
   STACKTOP = i4;
   return;
  }
 case 57:
  {
   __ZN7WebCore22borderSpacingShorthandEv(i6);
   __ZNK7WebCore15StyleProperties18borderSpacingValueERKNS_22StylePropertyShorthandE(i1, i2, i6);
   STACKTOP = i4;
   return;
  }
 case 33:
  {
   __ZNK7WebCore15StyleProperties19borderPropertyValueENS0_15CommonValueModeE(i1, i2, 0);
   STACKTOP = i4;
   return;
  }
 case 59:
  {
   __ZN7WebCore18borderTopShorthandEv(i10);
   __ZNK7WebCore15StyleProperties17getShorthandValueERKNS_22StylePropertyShorthandE(i1, i2, i10);
   STACKTOP = i4;
   return;
  }
 case 41:
  {
   __ZN7WebCore20borderColorShorthandEv(i15);
   __ZNK7WebCore15StyleProperties10get4ValuesERKNS_22StylePropertyShorthandE(i1, i2, i15);
   STACKTOP = i4;
   return;
  }
 case 65:
  {
   __ZN7WebCore20borderWidthShorthandEv(i16);
   __ZNK7WebCore15StyleProperties10get4ValuesERKNS_22StylePropertyShorthandE(i1, i2, i16);
   STACKTOP = i4;
   return;
  }
 case 241:
  {
   __ZN7WebCore19webkitFlexShorthandEv(i20);
   __ZNK7WebCore15StyleProperties17getShorthandValueERKNS_22StylePropertyShorthandE(i1, i2, i20);
   STACKTOP = i4;
   return;
  }
 case 244:
  {
   __ZN7WebCore23webkitFlexFlowShorthandEv(i21);
   __ZNK7WebCore15StyleProperties17getShorthandValueERKNS_22StylePropertyShorthandE(i1, i2, i21);
   STACKTOP = i4;
   return;
  }
 case 250:
  {
   __ZN7WebCore23webkitGridAreaShorthandEv(i22);
   __ZNK7WebCore15StyleProperties17getShorthandValueERKNS_22StylePropertyShorthandE(i1, i2, i22);
   STACKTOP = i4;
   return;
  }
 case 259:
  {
   __ZN7WebCore25webkitGridColumnShorthandEv(i23);
   __ZNK7WebCore15StyleProperties17getShorthandValueERKNS_22StylePropertyShorthandE(i1, i2, i23);
   STACKTOP = i4;
   return;
  }
 case 260:
  {
   __ZN7WebCore22webkitGridRowShorthandEv(i24);
   __ZNK7WebCore15StyleProperties17getShorthandValueERKNS_22StylePropertyShorthandE(i1, i2, i24);
   STACKTOP = i4;
   return;
  }
 case 4:
  {
   __ZNK7WebCore15StyleProperties9fontValueEv(i1, i2);
   STACKTOP = i4;
   return;
  }
 case 90:
  {
   __ZN7WebCore15marginShorthandEv(i25);
   __ZNK7WebCore15StyleProperties10get4ValuesERKNS_22StylePropertyShorthandE(i1, i2, i25);
   STACKTOP = i4;
   return;
  }
 case 281:
  {
   __ZN7WebCore29webkitMarginCollapseShorthandEv(i26);
   __ZNK7WebCore15StyleProperties17getShorthandValueERKNS_22StylePropertyShorthandE(i1, i2, i26);
   STACKTOP = i4;
   return;
  }
 case 109:
  {
   __ZN7WebCore17overflowShorthandEv(i27);
   __ZNK7WebCore15StyleProperties14getCommonValueERKNS_22StylePropertyShorthandE(i1, i2, i27);
   STACKTOP = i4;
   return;
  }
 case 113:
  {
   __ZN7WebCore16paddingShorthandEv(i28);
   __ZNK7WebCore15StyleProperties10get4ValuesERKNS_22StylePropertyShorthandE(i1, i2, i28);
   STACKTOP = i4;
   return;
  }
 case 154:
  {
   __ZN7WebCore19transitionShorthandEv(i29);
   __ZNK7WebCore15StyleProperties24getLayeredShorthandValueERKNS_22StylePropertyShorthandE(i1, i2, i29);
   STACKTOP = i4;
   return;
  }
 case 86:
  {
   __ZN7WebCore18listStyleShorthandEv(i30);
   __ZNK7WebCore15StyleProperties17getShorthandValueERKNS_22StylePropertyShorthandE(i1, i2, i30);
   STACKTOP = i4;
   return;
  }
 case 286:
  {
   __ZN7WebCore22webkitMarqueeShorthandEv(i31);
   __ZNK7WebCore15StyleProperties17getShorthandValueERKNS_22StylePropertyShorthandE(i1, i2, i31);
   STACKTOP = i4;
   return;
  }
 case 303:
  {
   __ZN7WebCore27webkitMaskPositionShorthandEv(i32);
   __ZNK7WebCore15StyleProperties24getLayeredShorthandValueERKNS_22StylePropertyShorthandE(i1, i2, i32);
   STACKTOP = i4;
   return;
  }
 case 306:
  {
   __ZN7WebCore25webkitMaskRepeatShorthandEv(i33);
   __ZNK7WebCore15StyleProperties24getLayeredShorthandValueERKNS_22StylePropertyShorthandE(i1, i2, i33);
   STACKTOP = i4;
   return;
  }
 case 292:
  {
   __ZN7WebCore19webkitMaskShorthandEv(i34);
   __ZNK7WebCore15StyleProperties24getLayeredShorthandValueERKNS_22StylePropertyShorthandE(i1, i2, i34);
   STACKTOP = i4;
   return;
  }
 case 336:
  {
   __ZN7WebCore27webkitTextEmphasisShorthandEv(i35);
   __ZNK7WebCore15StyleProperties17getShorthandValueERKNS_22StylePropertyShorthandE(i1, i2, i35);
   STACKTOP = i4;
   return;
  }
 case 342:
  {
   __ZN7WebCore25webkitTextStrokeShorthandEv(i36);
   __ZNK7WebCore15StyleProperties17getShorthandValueERKNS_22StylePropertyShorthandE(i1, i2, i36);
   STACKTOP = i4;
   return;
  }
 case 346:
  {
   __ZN7WebCore30webkitTransformOriginShorthandEv(i37);
   __ZNK7WebCore15StyleProperties17getShorthandValueERKNS_22StylePropertyShorthandE(i1, i2, i37);
   STACKTOP = i4;
   return;
  }
 case 351:
  {
   __ZN7WebCore25webkitTransitionShorthandEv(i38);
   __ZNK7WebCore15StyleProperties24getLayeredShorthandValueERKNS_22StylePropertyShorthandE(i1, i2, i38);
   STACKTOP = i4;
   return;
  }
 case 171:
  {
   __ZN7WebCore24webkitAnimationShorthandEv(i39);
   __ZNK7WebCore15StyleProperties24getLayeredShorthandValueERKNS_22StylePropertyShorthandE(i1, i2, i39);
   STACKTOP = i4;
   return;
  }
 case 391:
  {
   __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i40, i2, 394);
   i39 = i40 | 0;
   i40 = HEAP32[i39 >> 2] | 0;
   HEAP32[i39 >> 2] = 0;
   if ((i40 | 0) == 0) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   __ZNK7WebCore8CSSValue7cssTextEv(i1, i40);
   i39 = i40 | 0;
   i38 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
   if ((i38 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i40);
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i39 >> 2] = i38;
    STACKTOP = i4;
    return;
   }
   break;
  }
 case 52:
  {
   __ZN7WebCore21borderRadiusShorthandEv(i41);
   __ZNK7WebCore15StyleProperties10get4ValuesERKNS_22StylePropertyShorthandE(i1, i2, i41);
   STACKTOP = i4;
   return;
  }
 default:
  {
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i4;
   return;
  }
 }
}
function __ZNK7WebCore15StyleProperties9fontValueEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 48 | 0;
 i9 = i3 + 56 | 0;
 i10 = i2 + 4 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = (i11 & 4 | 0) == 0;
 if (i12) {
  i13 = i11 >>> 3;
  i14 = i13;
  i15 = i2 + 16 | 0;
  i16 = i13;
 } else {
  i13 = i2 + 16 | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i13;
  i16 = i11 >>> 3;
 }
 i11 = i2 + 8 | 0;
 i13 = i11;
 i17 = i11 + (i16 << 2) | 0;
 i18 = i14;
 while (1) {
  i14 = i18 - 1 | 0;
  if ((i14 | 0) <= -1) {
   i19 = -1;
   break;
  }
  if (i12) {
   i20 = i17 + (i14 << 1) | 0;
  } else {
   if ((HEAP32[i15 >> 2] | 0) >>> 0 <= i14 >>> 0) {
    i21 = 8;
    break;
   }
   i20 = (HEAP32[i13 >> 2] | 0) + (i14 << 3) | 0;
  }
  if ((HEAP16[i20 >> 1] & 1023) == 6) {
   i19 = i14;
   break;
  } else {
   i18 = i14;
  }
 }
 if ((i21 | 0) == 8) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i18 = i2 + 16 | 0;
 if (i12) {
  i22 = i16;
 } else {
  i22 = HEAP32[i18 >> 2] | 0;
 }
 while (1) {
  i23 = i22 - 1 | 0;
  if ((i23 | 0) <= -1) {
   break;
  }
  if (i12) {
   i24 = i17 + (i23 << 1) | 0;
  } else {
   if ((HEAP32[i18 >> 2] | 0) >>> 0 <= i23 >>> 0) {
    i21 = 17;
    break;
   }
   i24 = (HEAP32[i13 >> 2] | 0) + (i23 << 3) | 0;
  }
  if ((HEAP16[i24 >> 1] & 1023) == 5) {
   i21 = 21;
   break;
  } else {
   i22 = i23;
  }
 }
 if ((i21 | 0) == 17) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 do {
  if ((i21 | 0) == 21) {
   if ((i19 | 0) == -1 | (i22 | 0) == 0) {
    break;
   }
   do {
    if (i12) {
     i25 = i17 + (i19 << 1) | 0;
    } else {
     if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i19 >>> 0) {
      i25 = (HEAP32[i13 >> 2] | 0) + (i19 << 3) | 0;
      break;
     } else {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
    }
   } while (0);
   do {
    if ((HEAP16[i25 >> 1] & 16384) == 0) {
     do {
      if (i12) {
       i26 = i17 + (i23 << 1) | 0;
      } else {
       if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i23 >>> 0) {
        i26 = (HEAP32[i13 >> 2] | 0) + (i23 << 3) | 0;
        break;
       } else {
        __ZN3WTF15CrashOnOverflow10overflowedEv();
       }
      }
     } while (0);
     if ((HEAP16[i26 >> 1] & 16384) != 0) {
      break;
     }
     do {
      if (i12) {
       i27 = i11 + (i19 << 2) | 0;
      } else {
       if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i19 >>> 0) {
        i27 = (HEAP32[i13 >> 2] | 0) + (i19 << 3) + 4 | 0;
        break;
       } else {
        __ZN3WTF15CrashOnOverflow10overflowedEv();
       }
      }
     } while (0);
     __ZNK7WebCore8CSSValue7cssTextEv(i6, HEAP32[i27 >> 2] | 0);
     i24 = i7 | 0;
     HEAP32[i24 >> 2] = 0;
     i18 = i7 + 4 | 0;
     HEAP32[i18 >> 2] = 0;
     i16 = i7 + 8 | 0;
     HEAP32[i16 >> 2] = 0;
     i20 = i7 + 12 | 0;
     HEAP8[i20] = 1;
     HEAP32[i7 + 16 >> 2] = 0;
     i15 = i7 + 20 | 0;
     HEAP32[i15 >> 2] = 0;
     __ZNK7WebCore15StyleProperties33appendFontLonghandValueIfExplicitENS_13CSSPropertyIDERN3WTF13StringBuilderERNS2_6StringE(i2, 7, i7, i6);
     __ZNK7WebCore15StyleProperties33appendFontLonghandValueIfExplicitENS_13CSSPropertyIDERN3WTF13StringBuilderERNS2_6StringE(i2, 8, i7, i6);
     __ZNK7WebCore15StyleProperties33appendFontLonghandValueIfExplicitENS_13CSSPropertyIDERN3WTF13StringBuilderERNS2_6StringE(i2, 9, i7, i6);
     i14 = HEAP32[i24 >> 2] | 0;
     L55 : do {
      if ((i14 | 0) != 0) {
       HEAP8[i5] = 32;
       i28 = HEAP32[i16 >> 2] | 0;
       do {
        if ((i28 | 0) != 0) {
         if (i14 >>> 0 >= (HEAP32[i28 + 4 >> 2] | 0) >>> 0) {
          break;
         }
         if ((HEAP32[i18 >> 2] | 0) != 0) {
          break;
         }
         i29 = (HEAP8[i20] & 1) == 0;
         HEAP32[i24 >> 2] = i14 + 1;
         if (i29) {
          HEAP16[(HEAP32[i7 + 20 >> 2] | 0) + (i14 << 1) >> 1] = 32;
          break L55;
         } else {
          HEAP8[(HEAP32[i15 >> 2] | 0) + i14 | 0] = 32;
          break L55;
         }
        }
       } while (0);
       __ZN3WTF13StringBuilder6appendEPKhj(i7, i5, 1);
      }
     } while (0);
     do {
      if ((HEAP32[i10 >> 2] & 4 | 0) == 0) {
       i30 = i11 + (i19 << 2) | 0;
      } else {
       if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i19 >>> 0) {
        i30 = (HEAP32[i13 >> 2] | 0) + (i19 << 3) + 4 | 0;
        break;
       } else {
        __ZN3WTF15CrashOnOverflow10overflowedEv();
       }
      }
     } while (0);
     __ZNK7WebCore8CSSValue7cssTextEv(i8, HEAP32[i30 >> 2] | 0);
     __ZN3WTF13StringBuilder6appendERKNS_6StringE(i7, i8);
     i14 = HEAP32[i8 >> 2] | 0;
     do {
      if ((i14 | 0) != 0) {
       i28 = i14 | 0;
       i29 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
       if ((i29 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i14);
        break;
       } else {
        HEAP32[i28 >> 2] = i29;
        break;
       }
      }
     } while (0);
     __ZNK7WebCore15StyleProperties33appendFontLonghandValueIfExplicitENS_13CSSPropertyIDERN3WTF13StringBuilderERNS2_6StringE(i2, 19, i7, i6);
     i14 = HEAP32[i24 >> 2] | 0;
     L79 : do {
      if ((i14 | 0) != 0) {
       HEAP8[i4] = 32;
       i29 = HEAP32[i16 >> 2] | 0;
       do {
        if ((i29 | 0) != 0) {
         if (i14 >>> 0 >= (HEAP32[i29 + 4 >> 2] | 0) >>> 0) {
          break;
         }
         if ((HEAP32[i18 >> 2] | 0) != 0) {
          break;
         }
         i28 = (HEAP8[i20] & 1) == 0;
         HEAP32[i24 >> 2] = i14 + 1;
         if (i28) {
          HEAP16[(HEAP32[i7 + 20 >> 2] | 0) + (i14 << 1) >> 1] = 32;
          break L79;
         } else {
          HEAP8[(HEAP32[i15 >> 2] | 0) + i14 | 0] = 32;
          break L79;
         }
        }
       } while (0);
       __ZN3WTF13StringBuilder6appendEPKhj(i7, i4, 1);
      }
     } while (0);
     do {
      if ((HEAP32[i10 >> 2] & 4 | 0) == 0) {
       i31 = i11 + (i23 << 2) | 0;
      } else {
       if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i23 >>> 0) {
        i31 = (HEAP32[i13 >> 2] | 0) + (i23 << 3) + 4 | 0;
        break;
       } else {
        __ZN3WTF15CrashOnOverflow10overflowedEv();
       }
      }
     } while (0);
     __ZNK7WebCore8CSSValue7cssTextEv(i9, HEAP32[i31 >> 2] | 0);
     __ZN3WTF13StringBuilder6appendERKNS_6StringE(i7, i9);
     i14 = HEAP32[i9 >> 2] | 0;
     do {
      if ((i14 | 0) != 0) {
       i15 = i14 | 0;
       i24 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
       if ((i24 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i14);
        break;
       } else {
        HEAP32[i15 >> 2] = i24;
        break;
       }
      }
     } while (0);
     do {
      if (__ZN7WebCoreL18isInitialOrInheritERKN3WTF6StringE(i6) | 0) {
       i14 = i6 | 0;
       i24 = HEAP32[i14 >> 2] | 0;
       HEAP32[i14 >> 2] = 0;
       HEAP32[i1 >> 2] = i24;
      } else {
       __ZN3WTF13StringBuilder11shrinkToFitEv(i7);
       i24 = HEAP32[i18 >> 2] | 0;
       if ((i24 | 0) == 0) {
        __ZNK3WTF13StringBuilder11reifyStringEv(i7);
        i14 = HEAP32[i18 >> 2] | 0;
        HEAP32[i1 >> 2] = i14;
        if ((i14 | 0) == 0) {
         break;
        } else {
         i32 = i14;
        }
       } else {
        HEAP32[i1 >> 2] = i24;
        i32 = i24;
       }
       i24 = i32 | 0;
       HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 2;
      }
     } while (0);
     i24 = HEAP32[i16 >> 2] | 0;
     do {
      if ((i24 | 0) != 0) {
       i14 = i24 | 0;
       i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
       if ((i15 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i24);
        break;
       } else {
        HEAP32[i14 >> 2] = i15;
        break;
       }
      }
     } while (0);
     i24 = HEAP32[i18 >> 2] | 0;
     do {
      if ((i24 | 0) != 0) {
       i16 = i24 | 0;
       i15 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
       if ((i15 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i24);
        break;
       } else {
        HEAP32[i16 >> 2] = i15;
        break;
       }
      }
     } while (0);
     i24 = HEAP32[i6 >> 2] | 0;
     if ((i24 | 0) == 0) {
      STACKTOP = i3;
      return;
     }
     i18 = i24 | 0;
     i15 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i24);
      STACKTOP = i3;
      return;
     } else {
      HEAP32[i18 >> 2] = i15;
      STACKTOP = i3;
      return;
     }
    }
   } while (0);
   i15 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
   HEAP32[i1 >> 2] = i15;
   if ((i15 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i18 = i15 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
   STACKTOP = i3;
   return;
  }
 } while (0);
 i6 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i6 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore22MutableStyleProperties21removePropertiesInSetEPKNS_13CSSPropertyIDEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 24 | 0;
 i7 = i4 + 40 | 0;
 i8 = i1 + 8 | 0;
 i9 = i1 + 16 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i10 = 0;
  STACKTOP = i4;
  return i10 | 0;
 }
 _memset(i5 | 0, 0, 20) | 0;
 if ((i3 | 0) == 0) {
  i11 = i1;
 } else {
  i1 = i5 | 0;
  i12 = 0;
  while (1) {
   i13 = i2 + (i12 << 2) | 0;
   __ZN3WTF9HashTableIN7WebCore13CSSPropertyIDES2_NS_17IdentityExtractorENS_7IntHashIjEENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_SD_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i6, i1, i13, i13);
   i12 = i12 + 1 | 0;
   if (i12 >>> 0 >= i3 >>> 0) {
    break;
   }
  }
  i11 = HEAP32[i9 >> 2] | 0;
 }
 i3 = i7 | 0;
 HEAP32[i3 >> 2] = 0;
 i12 = i7 + 4 | 0;
 HEAP32[i12 >> 2] = 0;
 i1 = i7 + 8 | 0;
 HEAP32[i1 >> 2] = 0;
 L10 : do {
  if ((i11 | 0) == 0) {
   i14 = 0;
   i15 = 0;
  } else {
   if (i11 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
    return 0;
   }
   i6 = __ZN3WTF18fastMallocGoodSizeEj(i11 << 3) | 0;
   i2 = i6 >>> 3;
   HEAP32[i12 >> 2] = i2;
   i13 = __ZN3WTF10fastMallocEj(i6) | 0;
   HEAP32[i3 >> 2] = i13;
   i6 = HEAP32[i9 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i14 = 0;
    i15 = 0;
    break;
   }
   i16 = i8 | 0;
   i17 = HEAP32[i5 >> 2] | 0;
   i18 = (i17 | 0) == 0;
   i19 = HEAP32[i5 + 8 >> 2] | 0;
   i20 = 0;
   i21 = 0;
   i22 = i2;
   i23 = i13;
   i13 = i2;
   i2 = i6;
   L16 : while (1) {
    if (i2 >>> 0 <= i20 >>> 0) {
     i24 = 12;
     break;
    }
    i25 = HEAP32[i16 >> 2] | 0;
    i26 = i25 + (i20 << 3) | 0;
    i27 = HEAP16[i26 >> 1] | 0;
    L19 : do {
     if ((i27 & 8192) == 0) {
      i28 = i27 & 1023;
      if (i18) {
       i24 = 20;
       break;
      }
      i29 = i28 + ~(i28 << 15) | 0;
      i30 = (i29 >>> 10 ^ i29) * 9 & -1;
      i29 = i30 >>> 6 ^ i30;
      i30 = i29 + ~(i29 << 11) | 0;
      i29 = i30 >>> 16 ^ i30;
      i30 = i19 & i29;
      i31 = i17 + (i30 << 2) | 0;
      i32 = HEAP32[i31 >> 2] | 0;
      if ((i32 | 0) == (i28 | 0)) {
       i33 = i31;
      } else {
       i31 = (i29 >>> 23) + ~i29 | 0;
       i29 = i31 << 12 ^ i31;
       i31 = i29 >>> 7 ^ i29;
       i29 = i31 << 2 ^ i31;
       i31 = i29 >>> 20 ^ i29 | 1;
       i29 = 0;
       i34 = i30;
       i30 = i32;
       while (1) {
        if ((i30 | 0) == 0) {
         i24 = 20;
         break L19;
        }
        i32 = (i29 | 0) == 0 ? i31 : i29;
        i35 = i32 + i34 & i19;
        i36 = i17 + (i35 << 2) | 0;
        i37 = HEAP32[i36 >> 2] | 0;
        if ((i37 | 0) == (i28 | 0)) {
         i33 = i36;
         break;
        } else {
         i29 = i32;
         i34 = i35;
         i30 = i37;
        }
       }
      }
      if ((i33 | 0) == 0) {
       i24 = 20;
      } else {
       i38 = i21;
       i39 = i22;
       i40 = i23;
       i41 = i13;
      }
     } else {
      i24 = 20;
     }
    } while (0);
    do {
     if ((i24 | 0) == 20) {
      i24 = 0;
      if ((i21 | 0) != (i22 | 0)) {
       HEAP16[i23 + (i21 << 3) >> 1] = i27;
       i30 = HEAP32[i25 + (i20 << 3) + 4 >> 2] | 0;
       HEAP32[i23 + (i21 << 3) + 4 >> 2] = i30;
       if ((i30 | 0) != 0) {
        i34 = i30 | 0;
        HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 1;
       }
       i34 = (HEAP32[i1 >> 2] | 0) + 1 | 0;
       HEAP32[i1 >> 2] = i34;
       i38 = i34;
       i39 = i22;
       i40 = i23;
       i41 = i13;
       break;
      }
      i34 = i22 + 1 | 0;
      do {
       if (i23 >>> 0 > i26 >>> 0) {
        i24 = 26;
       } else {
        if ((i23 + (i22 << 3) | 0) >>> 0 <= i26 >>> 0) {
         i24 = 26;
         break;
        }
        i30 = i26 - i23 >> 3;
        i29 = i34 + (i22 >>> 2) | 0;
        i28 = i29 >>> 0 > 16 >>> 0 ? i29 : 16;
        i29 = i28 >>> 0 > i34 >>> 0 ? i28 : i34;
        do {
         if (i22 >>> 0 < i29 >>> 0) {
          if (i29 >>> 0 > 536870911 >>> 0) {
           i24 = 35;
           break L16;
          }
          i28 = __ZN3WTF18fastMallocGoodSizeEj(i29 << 3) | 0;
          i31 = i28 >>> 3;
          HEAP32[i12 >> 2] = i31;
          i37 = __ZN3WTF10fastMallocEj(i28) | 0;
          i28 = i37;
          HEAP32[i3 >> 2] = i28;
          i35 = i23 | 0;
          _memcpy(i37 | 0, i35 | 0, i22 << 3) | 0;
          if ((i23 | 0) == 0) {
           i42 = i31;
           i43 = i31;
           i44 = i28;
           break;
          }
          if ((i28 | 0) == (i23 | 0)) {
           HEAP32[i3 >> 2] = 0;
           HEAP32[i12 >> 2] = 0;
           i45 = 0;
           i46 = 0;
          } else {
           i45 = i31;
           i46 = i28;
          }
          __ZN3WTF8fastFreeEPv(i35);
          i42 = i45;
          i43 = i45;
          i44 = i46;
         } else {
          i42 = i22;
          i43 = i13;
          i44 = i23;
         }
        } while (0);
        i47 = i44 + (i30 << 3) | 0;
        i48 = i44;
        i49 = i42;
        i50 = i43;
       }
      } while (0);
      do {
       if ((i24 | 0) == 26) {
        i24 = 0;
        i29 = i13 + 1 + (i13 >>> 2) | 0;
        i35 = i29 >>> 0 > 16 >>> 0 ? i29 : 16;
        i29 = i35 >>> 0 > i34 >>> 0 ? i35 : i34;
        if (i13 >>> 0 >= i29 >>> 0) {
         i47 = i26;
         i48 = i23;
         i49 = i13;
         i50 = i13;
         break;
        }
        if (i29 >>> 0 > 536870911 >>> 0) {
         i24 = 28;
         break L16;
        }
        i35 = __ZN3WTF18fastMallocGoodSizeEj(i29 << 3) | 0;
        i29 = i35 >>> 3;
        HEAP32[i12 >> 2] = i29;
        i28 = __ZN3WTF10fastMallocEj(i35) | 0;
        i35 = i28;
        HEAP32[i3 >> 2] = i35;
        i31 = i23 | 0;
        _memcpy(i28 | 0, i31 | 0, i22 << 3) | 0;
        if ((i23 | 0) == 0) {
         i47 = i26;
         i48 = i35;
         i49 = i29;
         i50 = i29;
         break;
        }
        if ((i35 | 0) == (i23 | 0)) {
         HEAP32[i3 >> 2] = 0;
         HEAP32[i12 >> 2] = 0;
         i51 = 0;
         i52 = 0;
        } else {
         i51 = i29;
         i52 = i35;
        }
        __ZN3WTF8fastFreeEPv(i31);
        i47 = i26;
        i48 = i52;
        i49 = i51;
        i50 = i51;
       }
      } while (0);
      HEAP16[i48 + (i22 << 3) >> 1] = HEAP16[i47 >> 1] | 0;
      i34 = HEAP32[i47 + 4 >> 2] | 0;
      HEAP32[i48 + (i22 << 3) + 4 >> 2] = i34;
      if ((i34 | 0) != 0) {
       i31 = i34 | 0;
       HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
      }
      i31 = (HEAP32[i1 >> 2] | 0) + 1 | 0;
      HEAP32[i1 >> 2] = i31;
      i38 = i31;
      i39 = i49;
      i40 = i48;
      i41 = i50;
     }
    } while (0);
    i26 = i20 + 1 | 0;
    i25 = HEAP32[i9 >> 2] | 0;
    if (i26 >>> 0 < i6 >>> 0) {
     i20 = i26;
     i21 = i38;
     i22 = i39;
     i23 = i40;
     i13 = i41;
     i2 = i25;
    } else {
     i14 = i38;
     i15 = i25;
     break L10;
    }
   }
   if ((i24 | 0) == 35) {
    _WTFCrash();
    return 0;
   } else if ((i24 | 0) == 28) {
    _WTFCrash();
    return 0;
   } else if ((i24 | 0) == 12) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   }
  }
 } while (0);
 i24 = (i14 | 0) != (i15 | 0);
 __ZN3WTF6VectorIN7WebCore11CSSPropertyELj4ENS_15CrashOnOverflowEEaSILj0ES3_EERS4_RKNS0_IS2_XT_ET0_EE(i8, i7) | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i15 = i8 + (i7 << 3) | 0;
  i7 = i8;
  while (1) {
   i14 = HEAP32[i7 + 4 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i38 = i14 | 0;
     i41 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
     if ((i41 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i14);
      break;
     } else {
      HEAP32[i38 >> 2] = i41;
      break;
     }
    }
   } while (0);
   i7 = i7 + 8 | 0;
   if ((i7 | 0) == (i15 | 0)) {
    break;
   }
  }
  HEAP32[i1 >> 2] = 0;
 }
 if ((i8 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i12 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i8 | 0);
 }
 i8 = HEAP32[i5 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i10 = i24;
  STACKTOP = i4;
  return i10 | 0;
 }
 __ZN3WTF8fastFreeEPv(i8);
 i10 = i24;
 STACKTOP = i4;
 return i10 | 0;
}
function __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 40 | 0;
 i9 = i4 + 48 | 0;
 __ZN7WebCore20shorthandForPropertyENS_13CSSPropertyIDE(i5, i2);
 i10 = HEAP32[i5 + 8 >> 2] | 0;
 L1 : do {
  if ((i10 | 0) != 0) {
   i11 = __ZN7WebCore22MutableStyleProperties21removePropertiesInSetEPKNS_13CSSPropertyIDEj(i1, HEAP32[i5 >> 2] | 0, i10) | 0;
   switch (i2 | 0) {
   case 154:
    {
     i12 = 351;
     i13 = 12;
     break;
    }
   case 158:
    {
     i12 = 355;
     i13 = 12;
     break;
    }
   case 156:
    {
     i12 = 353;
     i13 = 12;
     break;
    }
   case 352:
    {
     i12 = 155;
     i13 = 12;
     break;
    }
   case 353:
    {
     i12 = 156;
     i13 = 12;
     break;
    }
   case 354:
    {
     i12 = 157;
     i13 = 12;
     break;
    }
   case 355:
    {
     i12 = 158;
     i13 = 12;
     break;
    }
   case 351:
    {
     i12 = 154;
     i13 = 12;
     break;
    }
   case 155:
    {
     i12 = 352;
     i13 = 12;
     break;
    }
   case 157:
    {
     i12 = 354;
     i13 = 12;
     break;
    }
   default:
    {
     i13 = 14;
    }
   }
   do {
    if ((i13 | 0) == 12) {
     if ((i12 | 0) == (i2 | 0)) {
      i13 = 14;
      break;
     }
     __ZN7WebCore20shorthandForPropertyENS_13CSSPropertyIDE(i6, i12);
     if (!(__ZN7WebCore22MutableStyleProperties21removePropertiesInSetEPKNS_13CSSPropertyIDEj(i1, HEAP32[i6 >> 2] | 0, HEAP32[i6 + 8 >> 2] | 0) | 0)) {
      break L1;
     }
    }
   } while (0);
   if ((i13 | 0) == 14) {
    if (!i11) {
     break;
    }
   }
   if ((i3 | 0) == 0) {
    i14 = 1;
    STACKTOP = i4;
    return i14 | 0;
   }
   __ZN3WTF6StringC1EPKc(i7, H_BASE + 216 | 0);
   i15 = i7 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   i17 = i3 | 0;
   i18 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = i16;
   do {
    if ((i18 | 0) != 0) {
     i16 = i18 | 0;
     i17 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i16 >> 2] = i17;
      break;
     }
    }
   } while (0);
   i18 = HEAP32[i15 >> 2] | 0;
   if ((i18 | 0) == 0) {
    i14 = 1;
    STACKTOP = i4;
    return i14 | 0;
   }
   i11 = i18 | 0;
   i17 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    i14 = 1;
    STACKTOP = i4;
    return i14 | 0;
   } else {
    HEAP32[i11 >> 2] = i17;
    i14 = 1;
    STACKTOP = i4;
    return i14 | 0;
   }
  }
 } while (0);
 i7 = i1 | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 i12 = (i6 & 4 | 0) == 0;
 if (i12) {
  i10 = i6 >>> 3;
  i19 = i10;
  i20 = i7 + 16 | 0;
  i21 = i10;
 } else {
  i10 = i7 + 16 | 0;
  i19 = HEAP32[i10 >> 2] | 0;
  i20 = i10;
  i21 = i6 >>> 3;
 }
 i6 = i7 + 8 | 0;
 i10 = i2 & 65535;
 i5 = i6;
 i17 = i6 + (i21 << 2) | 0;
 i21 = i19;
 while (1) {
  i22 = i21 - 1 | 0;
  if ((i22 | 0) <= -1) {
   i13 = 29;
   break;
  }
  if (i12) {
   i23 = i17 + (i22 << 1) | 0;
  } else {
   if ((HEAP32[i20 >> 2] | 0) >>> 0 <= i22 >>> 0) {
    i13 = 32;
    break;
   }
   i23 = (HEAP32[i5 >> 2] | 0) + (i22 << 3) | 0;
  }
  if ((HEAP16[i23 >> 1] & 1023) == i10 << 16 >> 16) {
   i13 = 36;
   break;
  } else {
   i21 = i22;
  }
 }
 do {
  if ((i13 | 0) == 36) {
   i10 = (i3 | 0) != 0;
   if ((i21 | 0) == 0) {
    if (i10) {
     break;
    } else {
     i14 = 0;
    }
    STACKTOP = i4;
    return i14 | 0;
   }
   do {
    if (i10) {
     do {
      if (i12) {
       i24 = i6 + (i22 << 2) | 0;
      } else {
       if ((HEAP32[i7 + 16 >> 2] | 0) >>> 0 > i22 >>> 0) {
        i24 = (HEAP32[i5 >> 2] | 0) + (i22 << 3) + 4 | 0;
        break;
       } else {
        __ZN3WTF15CrashOnOverflow10overflowedEv();
        return 0;
       }
      }
     } while (0);
     __ZNK7WebCore8CSSValue7cssTextEv(i9, HEAP32[i24 >> 2] | 0);
     i23 = i9 | 0;
     i20 = HEAP32[i23 >> 2] | 0;
     HEAP32[i23 >> 2] = 0;
     i17 = i3 | 0;
     i19 = HEAP32[i17 >> 2] | 0;
     HEAP32[i17 >> 2] = i20;
     do {
      if ((i19 | 0) != 0) {
       i20 = i19 | 0;
       i17 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
       if ((i17 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i19);
        break;
       } else {
        HEAP32[i20 >> 2] = i17;
        break;
       }
      }
     } while (0);
     i19 = HEAP32[i23 >> 2] | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     i17 = i19 | 0;
     i20 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i19);
      break;
     } else {
      HEAP32[i17 >> 2] = i20;
      break;
     }
    }
   } while (0);
   i10 = i1 + 8 | 0;
   i15 = HEAP32[i10 >> 2] | 0;
   i20 = HEAP32[i15 + (i22 << 3) + 4 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i17 = i20 | 0;
     i19 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i20);
      break;
     } else {
      HEAP32[i17 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i20 = i15 + (i21 << 3) | 0;
   i19 = i1 + 16 | 0;
   _memmove(i15 + (i22 << 3) | 0, i20 | 0, (HEAP32[i10 >> 2] | 0) + (HEAP32[i19 >> 2] << 3) - i20 | 0) | 0;
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
   __ZN7WebCore22MutableStyleProperties34removePrefixedOrUnprefixedPropertyENS_13CSSPropertyIDE(i1, i2);
   i14 = 1;
   STACKTOP = i4;
   return i14 | 0;
  } else if ((i13 | 0) == 29) {
   if ((i3 | 0) == 0) {
    i14 = 0;
   } else {
    break;
   }
   STACKTOP = i4;
   return i14 | 0;
  } else if ((i13 | 0) == 32) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
   return 0;
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i8, H_BASE + 216 | 0);
 i13 = i8 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i8;
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
 i3 = HEAP32[i13 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i14 = 0;
  STACKTOP = i4;
  return i14 | 0;
 }
 i13 = i3 | 0;
 i2 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  i14 = 0;
  STACKTOP = i4;
  return i14 | 0;
 } else {
  HEAP32[i13 >> 2] = i2;
  i14 = 0;
  STACKTOP = i4;
  return i14 | 0;
 }
 return 0;
}
function __ZNK7WebCore15StyleProperties17getShorthandValueERKNS_22StylePropertyShorthandE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 40 | 0;
 i9 = i4 + 48 | 0;
 i10 = i6 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i7 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i7 + 4 | 0;
 HEAP32[i12 >> 2] = 0;
 i13 = i7 + 8 | 0;
 HEAP32[i13 >> 2] = 0;
 i14 = i7 + 12 | 0;
 HEAP8[i14] = 1;
 HEAP32[i7 + 16 >> 2] = 0;
 i15 = i7 + 20 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = i3 + 8 | 0;
 L1 : do {
  if ((HEAP32[i16 >> 2] | 0) == 0) {
   i17 = 42;
  } else {
   i18 = i3 | 0;
   i19 = i8 | 0;
   i20 = i9 | 0;
   i21 = i7 + 20 | 0;
   i22 = 0;
   i23 = 0;
   i24 = 0;
   L3 : while (1) {
    do {
     if (__ZNK7WebCore15StyleProperties18isPropertyImplicitENS_13CSSPropertyIDE(i2, HEAP32[(HEAP32[i18 >> 2] | 0) + (i22 << 2) >> 2] | 0) | 0) {
      HEAP32[i10 >> 2] = 0;
      if ((i23 | 0) == 0) {
       i25 = 0;
       i26 = 0;
       break;
      }
      i27 = i23 | 0;
      i28 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
      if ((i28 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i23);
       i25 = 0;
       i26 = 0;
       break;
      } else {
       HEAP32[i27 >> 2] = i28;
       i25 = 0;
       i26 = 0;
       break;
      }
     } else {
      __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i8, i2, HEAP32[(HEAP32[i18 >> 2] | 0) + (i22 << 2) >> 2] | 0);
      i28 = HEAP32[i19 >> 2] | 0;
      HEAP32[i19 >> 2] = 0;
      if ((i28 | 0) == 0) {
       break L3;
      }
      __ZNK7WebCore8CSSValue7cssTextEv(i9, i28);
      do {
       if ((i22 | 0) == 0) {
        i27 = HEAP32[i20 >> 2] | 0;
        if ((i27 | 0) != 0) {
         i29 = i27 | 0;
         HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 2;
        }
        HEAP32[i10 >> 2] = i27;
        if ((i23 | 0) == 0) {
         i30 = i27;
         i31 = i27;
         break;
        }
        i29 = i23 | 0;
        i32 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
        if ((i32 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i23);
         i30 = i27;
         i31 = i27;
         break;
        } else {
         HEAP32[i29 >> 2] = i32;
         i30 = i27;
         i31 = i27;
         break;
        }
       } else {
        if ((i23 | 0) == 0) {
         i30 = 0;
         i31 = i24;
         break;
        }
        if (__ZN3WTF5equalEPKNS_10StringImplES2_(i23, HEAP32[i20 >> 2] | 0) | 0) {
         i30 = i23;
         i31 = i24;
         break;
        }
        HEAP32[i10 >> 2] = 0;
        if ((i24 | 0) == 0) {
         i30 = 0;
         i31 = 0;
         break;
        }
        i27 = i24 | 0;
        i32 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
        if ((i32 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i24);
         i30 = 0;
         i31 = 0;
         break;
        } else {
         HEAP32[i27 >> 2] = i32;
         i30 = 0;
         i31 = 0;
         break;
        }
       }
      } while (0);
      if ((HEAP32[i28 + 4 >> 2] & 516096 | 0) == 139264) {
       i33 = 4;
      } else {
       i32 = HEAP32[i11 >> 2] | 0;
       L27 : do {
        if ((i32 | 0) != 0) {
         HEAP8[i5] = 32;
         i27 = HEAP32[i13 >> 2] | 0;
         do {
          if ((i27 | 0) != 0) {
           if (i32 >>> 0 >= (HEAP32[i27 + 4 >> 2] | 0) >>> 0) {
            break;
           }
           if ((HEAP32[i12 >> 2] | 0) != 0) {
            break;
           }
           i29 = (HEAP8[i14] & 1) == 0;
           HEAP32[i11 >> 2] = i32 + 1;
           if (i29) {
            HEAP16[(HEAP32[i21 >> 2] | 0) + (i32 << 1) >> 1] = 32;
            break L27;
           } else {
            HEAP8[(HEAP32[i15 >> 2] | 0) + i32 | 0] = 32;
            break L27;
           }
          }
         } while (0);
         __ZN3WTF13StringBuilder6appendEPKhj(i7, i5, 1);
        }
       } while (0);
       __ZN3WTF13StringBuilder6appendERKNS_6StringE(i7, i9);
       i33 = 0;
      }
      i32 = HEAP32[i20 >> 2] | 0;
      do {
       if ((i32 | 0) != 0) {
        i27 = i32 | 0;
        i29 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
        if ((i29 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i32);
         break;
        } else {
         HEAP32[i27 >> 2] = i29;
         break;
        }
       }
      } while (0);
      i32 = i28 | 0;
      i29 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
      if ((i29 | 0) == 0) {
       __ZN7WebCore8CSSValue7destroyEv(i28);
      } else {
       HEAP32[i32 >> 2] = i29;
      }
      if ((i33 | 0) == 0 | (i33 | 0) == 4) {
       i25 = i30;
       i26 = i31;
      } else {
       break L1;
      }
     }
    } while (0);
    i29 = i22 + 1 | 0;
    if (i29 >>> 0 < (HEAP32[i16 >> 2] | 0) >>> 0) {
     i22 = i29;
     i23 = i25;
     i24 = i26;
    } else {
     i17 = 42;
     break L1;
    }
   }
   HEAP32[i1 >> 2] = 0;
  }
 } while (0);
 do {
  if ((i17 | 0) == 42) {
   if (__ZN7WebCoreL18isInitialOrInheritERKN3WTF6StringE(i6) | 0) {
    i26 = HEAP32[i10 >> 2] | 0;
    HEAP32[i10 >> 2] = 0;
    HEAP32[i1 >> 2] = i26;
    break;
   }
   if ((HEAP32[i11 >> 2] | 0) == 0) {
    HEAP32[i1 >> 2] = 0;
    break;
   }
   __ZN3WTF13StringBuilder11shrinkToFitEv(i7);
   i26 = HEAP32[i12 >> 2] | 0;
   if ((i26 | 0) == 0) {
    __ZNK3WTF13StringBuilder11reifyStringEv(i7);
    i25 = HEAP32[i12 >> 2] | 0;
    HEAP32[i1 >> 2] = i25;
    if ((i25 | 0) == 0) {
     break;
    } else {
     i34 = i25;
    }
   } else {
    HEAP32[i1 >> 2] = i26;
    i34 = i26;
   }
   i26 = i34 | 0;
   HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
  }
 } while (0);
 i34 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i34 | 0) != 0) {
   i13 = i34 | 0;
   i1 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i34);
    break;
   } else {
    HEAP32[i13 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i34 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i34 | 0) != 0) {
   i12 = i34 | 0;
   i1 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i34);
    break;
   } else {
    HEAP32[i12 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i34 = HEAP32[i10 >> 2] | 0;
 if ((i34 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i10 = i34 | 0;
 i1 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i34);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i10 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN3WTF13tryMakeStringINS_12StringAppendINS_6StringEcEES2_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = (i8 | 0) == 0;
 if (i9) {
  i10 = 1;
 } else {
  i10 = (HEAP32[i8 + 4 >> 2] | 0) + 1 | 0;
 }
 i11 = i3 | 0;
 i3 = HEAP32[i11 >> 2] | 0;
 i12 = (i3 | 0) == 0;
 if (i12) {
  i13 = 0;
 } else {
  i13 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i14 = _llvm_uadd_with_overflow_i32(i10 | 0, i13 | 0) | 0;
 i13 = i14;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i9) {
  i15 = 9;
 } else {
  if ((HEAP32[i8 + 16 >> 2] & 32 | 0) != 0) {
   i15 = 9;
  }
 }
 do {
  if ((i15 | 0) == 9) {
   if (!i12) {
    if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i13 | 0) == 0) {
     i8 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i8 | 0) == 0) {
      i15 = 28;
      break;
     }
     i9 = i8 | 0;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
     i16 = i8;
     i17 = 0;
    } else {
     if (i13 >>> 0 > 4294967275 >>> 0) {
      i15 = 28;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i13 + 20 | 0);
     i8 = i6 | 0;
     i9 = HEAP32[i8 >> 2] | 0;
     HEAP32[i8 >> 2] = 0;
     if ((i9 | 0) == 0) {
      i15 = 28;
      break;
     }
     i8 = i9 + 20 | 0;
     HEAP32[i9 >> 2] = 2;
     HEAP32[i9 + 4 >> 2] = i13;
     HEAP32[i9 + 8 >> 2] = i8;
     HEAP32[i9 + 12 >> 2] = 0;
     HEAP32[i9 + 16 >> 2] = 32;
     i16 = i9;
     i17 = i8;
    }
   } while (0);
   if ((i15 | 0) == 28) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i8 = HEAP8[i2 + 4 | 0] | 0;
   i9 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i9 | 0) == 0) {
     i18 = 0;
    } else {
     i14 = HEAP32[i9 + 4 >> 2] | 0;
     i10 = HEAP32[i9 + 8 >> 2] | 0;
     if ((i14 | 0) == 0) {
      i18 = 0;
      break;
     } else {
      i19 = 0;
     }
     while (1) {
      HEAP8[i17 + i19 | 0] = HEAP8[i10 + i19 | 0] | 0;
      i19 = i19 + 1 | 0;
      if (i19 >>> 0 >= i14 >>> 0) {
       break;
      }
     }
     i14 = HEAP32[i7 >> 2] | 0;
     if ((i14 | 0) == 0) {
      i18 = 0;
      break;
     }
     i18 = HEAP32[i14 + 4 >> 2] | 0;
    }
   } while (0);
   HEAP8[i17 + i18 | 0] = i8;
   i9 = HEAP32[i7 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i20 = 1;
   } else {
    i20 = (HEAP32[i9 + 4 >> 2] | 0) + 1 | 0;
   }
   i9 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i14 = HEAP32[i9 + 4 >> 2] | 0;
     i10 = HEAP32[i9 + 8 >> 2] | 0;
     if ((i14 | 0) == 0) {
      break;
     } else {
      i21 = 0;
     }
     while (1) {
      HEAP8[i17 + (i21 + i20) | 0] = HEAP8[i10 + i21 | 0] | 0;
      i21 = i21 + 1 | 0;
      if (i21 >>> 0 >= i14 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i16;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i13 | 0) == 0) {
   i16 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i16 | 0) == 0) {
    i15 = 52;
    break;
   }
   i21 = i16 | 0;
   HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 2;
   i22 = i16;
   i23 = 0;
  } else {
   if (i13 >>> 0 > 2147483637 >>> 0) {
    i15 = 52;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i13 << 1) + 20 | 0);
   i16 = i5 | 0;
   i21 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   if ((i21 | 0) == 0) {
    i15 = 52;
    break;
   }
   i16 = i21 + 20 | 0;
   HEAP32[i21 >> 2] = 2;
   HEAP32[i21 + 4 >> 2] = i13;
   HEAP32[i21 + 8 >> 2] = i16;
   HEAP32[i21 + 12 >> 2] = 0;
   HEAP32[i21 + 16 >> 2] = 0;
   i22 = i21;
   i23 = i16;
  }
 } while (0);
 if ((i15 | 0) == 52) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i15 = HEAP8[i2 + 4 | 0] | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i24 = 0;
  } else {
   i13 = HEAP32[i2 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
     i5 = HEAP32[i2 + 8 >> 2] | 0;
     if ((i13 | 0) == 0) {
      break;
     } else {
      i25 = 0;
     }
     while (1) {
      HEAP16[i23 + (i25 << 1) >> 1] = HEAP16[i5 + (i25 << 1) >> 1] | 0;
      i25 = i25 + 1 | 0;
      if (i25 >>> 0 >= i13 >>> 0) {
       break;
      }
     }
    } else {
     i5 = HEAP32[i2 + 8 >> 2] | 0;
     if ((i13 | 0) == 0) {
      break;
     } else {
      i26 = 0;
     }
     while (1) {
      HEAP16[i23 + (i26 << 1) >> 1] = HEAPU8[i5 + i26 | 0] | 0;
      i26 = i26 + 1 | 0;
      if (i26 >>> 0 >= i13 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i13 = HEAP32[i7 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i24 = 0;
    break;
   }
   i24 = HEAP32[i13 + 4 >> 2] | 0;
  }
 } while (0);
 HEAP16[i23 + (i24 << 1) >> 1] = i15 & 255;
 i15 = HEAP32[i7 >> 2] | 0;
 if ((i15 | 0) == 0) {
  i27 = 1;
 } else {
  i27 = (HEAP32[i15 + 4 >> 2] | 0) + 1 | 0;
 }
 i15 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i11 = HEAP32[i15 + 4 >> 2] | 0;
   if ((HEAP32[i15 + 16 >> 2] & 32 | 0) == 0) {
    i7 = HEAP32[i15 + 8 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    } else {
     i28 = 0;
    }
    while (1) {
     HEAP16[i23 + (i28 + i27 << 1) >> 1] = HEAP16[i7 + (i28 << 1) >> 1] | 0;
     i28 = i28 + 1 | 0;
     if (i28 >>> 0 >= i11 >>> 0) {
      break;
     }
    }
   } else {
    i7 = HEAP32[i15 + 8 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    } else {
     i29 = 0;
    }
    while (1) {
     HEAP16[i23 + (i29 + i27 << 1) >> 1] = HEAPU8[i7 + i29 | 0] | 0;
     i29 = i29 + 1 | 0;
     if (i29 >>> 0 >= i11 >>> 0) {
      break;
     }
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i22;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore15StyleProperties19borderPropertyValueENS0_15CommonValueModeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 56 | 0;
 i8 = i4 + 64 | 0;
 i9 = i4 + 88 | 0;
 __ZN7WebCore20borderWidthShorthandEv(i6 | 0);
 __ZN7WebCore20borderStyleShorthandEv(i6 + 16 | 0);
 __ZN7WebCore20borderColorShorthandEv(i6 + 32 | 0);
 i10 = i7 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i8 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i8 + 4 | 0;
 HEAP32[i12 >> 2] = 0;
 i13 = i8 + 8 | 0;
 HEAP32[i13 >> 2] = 0;
 i14 = i8 + 12 | 0;
 HEAP8[i14] = 1;
 HEAP32[i8 + 16 >> 2] = 0;
 i15 = i8 + 20 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = i9 | 0;
 i17 = (i3 | 0) == 1;
 i3 = i1 | 0;
 i1 = i8 + 20 | 0;
 i18 = 0;
 i19 = 0;
 i20 = 0;
 while (1) {
  __ZNK7WebCore15StyleProperties14getCommonValueERKNS_22StylePropertyShorthandE(i9, i2, i6 + (i18 << 4) | 0);
  i21 = HEAP32[i16 >> 2] | 0;
  if ((i21 | 0) == 0) {
   if (i17) {
    i22 = 4;
    break;
   } else {
    i23 = i19;
    i24 = i20;
   }
  } else {
   do {
    if ((i18 | 0) == 0) {
     i25 = i21 | 0;
     HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 2;
     HEAP32[i10 >> 2] = i21;
     if ((i19 | 0) == 0) {
      i26 = i21;
      i27 = i21;
      i28 = i21;
      break;
     }
     i25 = i19 | 0;
     i29 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
     if ((i29 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i19);
      i26 = i21;
      i27 = i21;
      i28 = i21;
      break;
     } else {
      HEAP32[i25 >> 2] = i29;
      i26 = i21;
      i27 = HEAP32[i16 >> 2] | 0;
      i28 = i21;
      break;
     }
    } else {
     if ((i19 | 0) == 0) {
      i26 = 0;
      i27 = i21;
      i28 = i20;
      break;
     }
     if (__ZN3WTF5equalEPKNS_10StringImplES2_(i19, i21) | 0) {
      i26 = i19;
      i27 = i21;
      i28 = i20;
      break;
     }
     HEAP32[i10 >> 2] = 0;
     if ((i20 | 0) == 0) {
      i26 = 0;
      i27 = i21;
      i28 = 0;
      break;
     }
     i29 = i20 | 0;
     i25 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
     if ((i25 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      i26 = 0;
      i27 = i21;
      i28 = 0;
      break;
     } else {
      HEAP32[i29 >> 2] = i25;
      i26 = 0;
      i27 = i21;
      i28 = 0;
      break;
     }
    }
   } while (0);
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(i27, H_BASE + 96 | 0) | 0) {
    i30 = 4;
    i31 = i27;
   } else {
    i21 = HEAP32[i11 >> 2] | 0;
    L22 : do {
     if ((i21 | 0) != 0) {
      HEAP8[i5] = 32;
      i25 = HEAP32[i13 >> 2] | 0;
      do {
       if ((i25 | 0) != 0) {
        if (i21 >>> 0 >= (HEAP32[i25 + 4 >> 2] | 0) >>> 0) {
         break;
        }
        if ((HEAP32[i12 >> 2] | 0) != 0) {
         break;
        }
        i29 = (HEAP8[i14] & 1) == 0;
        HEAP32[i11 >> 2] = i21 + 1;
        if (i29) {
         HEAP16[(HEAP32[i1 >> 2] | 0) + (i21 << 1) >> 1] = 32;
         break L22;
        } else {
         HEAP8[(HEAP32[i15 >> 2] | 0) + i21 | 0] = 32;
         break L22;
        }
       }
      } while (0);
      __ZN3WTF13StringBuilder6appendEPKhj(i8, i5, 1);
     }
    } while (0);
    __ZN3WTF13StringBuilder6appendERKNS_6StringE(i8, i9);
    i30 = 0;
    i31 = HEAP32[i16 >> 2] | 0;
   }
   do {
    if ((i31 | 0) != 0) {
     i21 = i31 | 0;
     i25 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
     if ((i25 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i31);
      break;
     } else {
      HEAP32[i21 >> 2] = i25;
      break;
     }
    }
   } while (0);
   if ((i30 | 0) == 0 | (i30 | 0) == 4) {
    i23 = i26;
    i24 = i28;
   } else {
    break;
   }
  }
  i25 = i18 + 1 | 0;
  if (i25 >>> 0 < 3 >>> 0) {
   i18 = i25;
   i19 = i23;
   i20 = i24;
  } else {
   i22 = 32;
   break;
  }
 }
 do {
  if ((i22 | 0) == 4) {
   HEAP32[i3 >> 2] = 0;
  } else if ((i22 | 0) == 32) {
   if (__ZN7WebCoreL18isInitialOrInheritERKN3WTF6StringE(i7) | 0) {
    i24 = HEAP32[i10 >> 2] | 0;
    HEAP32[i10 >> 2] = 0;
    HEAP32[i3 >> 2] = i24;
    break;
   }
   if ((HEAP32[i11 >> 2] | 0) == 0) {
    HEAP32[i3 >> 2] = 0;
    break;
   }
   __ZN3WTF13StringBuilder11shrinkToFitEv(i8);
   i24 = HEAP32[i12 >> 2] | 0;
   if ((i24 | 0) == 0) {
    __ZNK3WTF13StringBuilder11reifyStringEv(i8);
    i20 = HEAP32[i12 >> 2] | 0;
    HEAP32[i3 >> 2] = i20;
    if ((i20 | 0) == 0) {
     break;
    } else {
     i32 = i20;
    }
   } else {
    HEAP32[i3 >> 2] = i24;
    i32 = i24;
   }
   i24 = i32 | 0;
   HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 2;
  }
 } while (0);
 i32 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i32 | 0) != 0) {
   i13 = i32 | 0;
   i3 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i32);
    break;
   } else {
    HEAP32[i13 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i32 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i32 | 0) != 0) {
   i12 = i32 | 0;
   i3 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i32);
    break;
   } else {
    HEAP32[i12 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i32 = HEAP32[i10 >> 2] | 0;
 if ((i32 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i10 = i32 | 0;
 i3 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i32);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i10 >> 2] = i3;
  STACKTOP = i4;
  return;
 }
}
function __ZNK7WebCore15StyleProperties18borderSpacingValueERKNS_22StylePropertyShorthandE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i3 | 0;
 __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i5, i2, HEAP32[HEAP32[i10 >> 2] >> 2] | 0);
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i6, i2, HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] | 0);
 i10 = i6 | 0;
 i6 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i10 = (i5 | 0) == 0;
 i2 = (i6 | 0) == 0;
 do {
  if (i10 | i2) {
   HEAP32[i1 >> 2] = 0;
  } else {
   __ZNK7WebCore8CSSValue7cssTextEv(i7, i5);
   __ZNK7WebCore8CSSValue7cssTextEv(i8, i6);
   i3 = i7 | 0;
   i11 = i8 | 0;
   i12 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i3 >> 2] | 0, HEAP32[i11 >> 2] | 0) | 0;
   i13 = HEAP32[i3 >> 2] | 0;
   do {
    if (i12) {
     HEAP32[i3 >> 2] = 0;
     HEAP32[i1 >> 2] = i13;
    } else {
     do {
      if ((i13 | 0) == 0) {
       i14 = 0;
      } else {
       i15 = i13 | 0;
       i16 = HEAP32[i15 >> 2] | 0;
       i17 = i16 + 2 | 0;
       HEAP32[i15 >> 2] = i16 + 4;
       if ((i17 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i13);
        i14 = i13;
        break;
       } else {
        HEAP32[i15 >> 2] = i17;
        i14 = i13;
        break;
       }
      }
     } while (0);
     i17 = HEAP32[i11 >> 2] | 0;
     i15 = (i17 | 0) == 0;
     if (!i15) {
      i16 = i17 | 0;
      HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
     }
     i16 = (i14 | 0) == 0;
     if (!i16) {
      i18 = i14 | 0;
      HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
     }
     if (!i15) {
      i18 = i17 | 0;
      HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
     }
     i18 = i9 | 0;
     HEAP32[i18 >> 2] = i14;
     if (!i16) {
      i19 = i14 | 0;
      HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
     }
     HEAP8[i9 + 4 | 0] = 32;
     i19 = i9 + 8 | 0;
     HEAP32[i19 >> 2] = i17;
     do {
      if (!i15) {
       i20 = i17 | 0;
       i21 = HEAP32[i20 >> 2] | 0;
       HEAP32[i20 >> 2] = i21 + 2;
       if ((i21 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i17);
        break;
       } else {
        HEAP32[i20 >> 2] = i21;
        break;
       }
      }
     } while (0);
     do {
      if (!i16) {
       i21 = i14 | 0;
       i20 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
       if ((i20 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i14);
        break;
       } else {
        HEAP32[i21 >> 2] = i20;
        break;
       }
      }
     } while (0);
     __ZNK3WTF12StringAppendINS0_INS_6StringEcEES1_EcvS1_Ev(i1, i9);
     i20 = HEAP32[i19 >> 2] | 0;
     do {
      if ((i20 | 0) != 0) {
       i21 = i20 | 0;
       i22 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
       if ((i22 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i20);
        break;
       } else {
        HEAP32[i21 >> 2] = i22;
        break;
       }
      }
     } while (0);
     i20 = HEAP32[i18 >> 2] | 0;
     do {
      if ((i20 | 0) != 0) {
       i19 = i20 | 0;
       i22 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
       if ((i22 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i20);
        break;
       } else {
        HEAP32[i19 >> 2] = i22;
        break;
       }
      }
     } while (0);
     do {
      if (!i15) {
       i20 = i17 | 0;
       i18 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
       if ((i18 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i17);
        break;
       } else {
        HEAP32[i20 >> 2] = i18;
        break;
       }
      }
     } while (0);
     if (i16) {
      break;
     }
     i17 = i14 | 0;
     i15 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i17 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i13 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i12 = i13 | 0;
     i15 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i12 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i13 = HEAP32[i3 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   i11 = i13 | 0;
   i15 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i11 >> 2] = i15;
    break;
   }
  }
 } while (0);
 do {
  if (!i2) {
   i14 = i6 | 0;
   i9 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i6);
    break;
   } else {
    HEAP32[i14 >> 2] = i9;
    break;
   }
  }
 } while (0);
 if (i10) {
  STACKTOP = i4;
  return;
 }
 i10 = i5 | 0;
 i6 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i5);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore22MutableStyleProperties30appendPrefixingVariantPropertyERKNS_11CSSPropertyE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i1 + 8 | 0;
 i7 = i1 + 16 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i1 + 12 | 0;
 do {
  if ((i8 | 0) == (HEAP32[i9 >> 2] | 0)) {
   i1 = i8 + 1 | 0;
   i10 = i6 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   do {
    if (i11 >>> 0 > i2 >>> 0) {
     i12 = 6;
    } else {
     if ((i11 + (i8 << 3) | 0) >>> 0 <= i2 >>> 0) {
      i12 = 6;
      break;
     }
     i13 = i1 + (i8 >>> 2) | 0;
     i14 = i13 >>> 0 > 16 >>> 0 ? i13 : 16;
     __ZN3WTF6VectorIN7WebCore11CSSPropertyELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i6, i14 >>> 0 > i1 >>> 0 ? i14 : i1);
     i14 = HEAP32[i10 >> 2] | 0;
     i15 = i14 + (i2 - i11 >> 3 << 3) | 0;
     i16 = i14;
    }
   } while (0);
   if ((i12 | 0) == 6) {
    i11 = i1 + (i8 >>> 2) | 0;
    i14 = i11 >>> 0 > 16 >>> 0 ? i11 : 16;
    __ZN3WTF6VectorIN7WebCore11CSSPropertyELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i6, i14 >>> 0 > i1 >>> 0 ? i14 : i1);
    i15 = i2;
    i16 = HEAP32[i10 >> 2] | 0;
   }
   i14 = HEAP32[i7 >> 2] | 0;
   HEAP16[i16 + (i14 << 3) >> 1] = HEAP16[i15 >> 1] | 0;
   i11 = HEAP32[i15 + 4 >> 2] | 0;
   HEAP32[i16 + (i14 << 3) + 4 >> 2] = i11;
   if ((i11 | 0) != 0) {
    i14 = i11 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
   }
   i17 = i2;
  } else {
   i14 = HEAP32[i6 >> 2] | 0;
   i11 = i2;
   HEAP16[i14 + (i8 << 3) >> 1] = HEAP16[i11 >> 1] | 0;
   i13 = HEAP32[i2 + 4 >> 2] | 0;
   HEAP32[i14 + (i8 << 3) + 4 >> 2] = i13;
   if ((i13 | 0) == 0) {
    i17 = i11;
    break;
   }
   i14 = i13 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
   i17 = i11;
  }
 } while (0);
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 i8 = HEAP16[i17 >> 1] | 0;
 i16 = i8 & 1023;
 switch (i16 | 0) {
 case 156:
  {
   i18 = 353;
   break;
  }
 case 157:
  {
   i18 = 354;
   break;
  }
 case 158:
  {
   i18 = 355;
   break;
  }
 case 154:
  {
   i18 = 351;
   break;
  }
 case 352:
  {
   i18 = 155;
   break;
  }
 case 353:
  {
   i18 = 156;
   break;
  }
 case 354:
  {
   i18 = 157;
   break;
  }
 case 355:
  {
   i18 = 158;
   break;
  }
 case 351:
  {
   i18 = 154;
   break;
  }
 case 155:
  {
   i18 = 352;
   break;
  }
 default:
  {
   STACKTOP = i3;
   return;
  }
 }
 if ((i18 | 0) == (i16 | 0)) {
  STACKTOP = i3;
  return;
 }
 i16 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i16 | 0) == 0) {
  i19 = i8;
 } else {
  i8 = i16 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  i19 = HEAP16[i17 >> 1] | 0;
 }
 i8 = i19 & 1024;
 do {
  if (i8 << 16 >> 16 == 0) {
   i20 = 0;
  } else {
   i15 = __ZNK7WebCore21StylePropertyMetadata11shorthandIDEv(i2 | 0) | 0;
   switch (i15 | 0) {
   case 156:
    {
     i21 = 353;
     break;
    }
   case 157:
    {
     i21 = 354;
     break;
    }
   case 158:
    {
     i21 = 355;
     break;
    }
   case 154:
    {
     i21 = 351;
     break;
    }
   case 155:
    {
     i21 = 352;
     break;
    }
   case 355:
    {
     i21 = 158;
     break;
    }
   case 351:
    {
     i21 = 154;
     break;
    }
   case 353:
    {
     i21 = 156;
     break;
    }
   case 354:
    {
     i21 = 157;
     break;
    }
   case 352:
    {
     i21 = 155;
     break;
    }
   default:
    {
     i21 = i15;
    }
   }
   __ZN7WebCore29matchingShorthandsForLonghandENS_13CSSPropertyIDE(i4, i18);
   i15 = __ZN7WebCore27indexOfShorthandForLonghandENS_13CSSPropertyIDERKN3WTF6VectorINS_22StylePropertyShorthandELj0ENS1_15CrashOnOverflowEEE(i21, i4) | 0;
   i12 = i4 + 8 | 0;
   if ((HEAP32[i12 >> 2] | 0) != 0) {
    HEAP32[i12 >> 2] = 0;
   }
   i12 = i4 | 0;
   i11 = HEAP32[i12 >> 2] | 0;
   i14 = i15 & 65535;
   if ((i11 | 0) == 0) {
    i20 = i14;
    break;
   }
   HEAP32[i12 >> 2] = 0;
   HEAP32[i4 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i11);
   i20 = i14;
  }
 } while (0);
 i4 = HEAP16[i17 >> 1] | 0;
 i17 = i19 & 8192 | i18 & 65535 | i8 | i20 << 11 & 6144 | i4 & 16384 | ((__ZN7WebCore11CSSProperty19isInheritedPropertyENS_13CSSPropertyIDE(i18) | 0) & 1) << 15;
 HEAP16[i5 >> 1] = i17;
 i18 = i5 + 4 | 0;
 HEAP32[i18 >> 2] = i16;
 i16 = HEAP32[i7 >> 2] | 0;
 if ((i16 | 0) == (HEAP32[i9 >> 2] | 0)) {
  __ZN3WTF6VectorIN7WebCore11CSSPropertyELj4ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i6, i5);
 } else {
  i5 = HEAP32[i6 >> 2] | 0;
  HEAP16[i5 + (i16 << 3) >> 1] = i17;
  i17 = HEAP32[i18 >> 2] | 0;
  HEAP32[i18 >> 2] = 0;
  HEAP32[i5 + (i16 << 3) + 4 >> 2] = i17;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = HEAP32[i18 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i18 = i7 | 0;
 i17 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
 if ((i17 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i7);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i18 >> 2] = i17;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore22MutableStyleProperties26removeEquivalentPropertiesEPKNS_22ComputedStyleExtractorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i1 | 0;
 i7 = i1 + 4 | 0;
 i8 = i6 + 8 | 0;
 i9 = i8;
 i10 = i8;
 i11 = i4;
 i12 = i6 + 16 | 0;
 i6 = i8;
 i8 = 0;
 i13 = 0;
 i14 = 0;
 i15 = 0;
 L4 : while (1) {
  i16 = HEAP32[i7 >> 2] | 0;
  if ((i16 & 4 | 0) == 0) {
   i17 = i10 + (i15 << 2) | 0;
   i18 = i9 + (i16 >>> 3 << 2) + (i15 << 1) | 0;
  } else {
   if ((HEAP32[i12 >> 2] | 0) >>> 0 <= i15 >>> 0) {
    i19 = 6;
    break;
   }
   if ((HEAP32[i12 >> 2] | 0) >>> 0 <= i15 >>> 0) {
    i19 = 8;
    break;
   }
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = i16 + (i15 << 3) + 4 | 0;
   i18 = i16 + (i15 << 3) | 0;
  }
  do {
   if (__ZNK7WebCore22ComputedStyleExtractor15propertyMatchesENS_13CSSPropertyIDEPKNS_8CSSValueE(i2, HEAP16[i18 >> 1] & 1023, HEAP32[i17 >> 2] | 0) | 0) {
    i16 = HEAP32[i7 >> 2] | 0;
    if ((i16 & 4 | 0) == 0) {
     i20 = i9 + (i16 >>> 3 << 2) + (i15 << 1) | 0;
    } else {
     if ((HEAP32[i12 >> 2] | 0) >>> 0 <= i15 >>> 0) {
      i19 = 14;
      break L4;
     }
     i20 = (HEAP32[i6 >> 2] | 0) + (i15 << 3) | 0;
    }
    i16 = HEAP16[i20 >> 1] & 1023;
    HEAP32[i4 >> 2] = i16;
    if ((i8 | 0) != (i13 | 0)) {
     HEAP32[i14 + (i8 << 2) >> 2] = i16;
     i21 = i14;
     i22 = i13;
     i23 = i8 + 1 | 0;
     break;
    }
    i16 = i13 + 1 | 0;
    do {
     if (i14 >>> 0 > i4 >>> 0) {
      i19 = 21;
     } else {
      if ((i14 + (i13 << 2) | 0) >>> 0 <= i4 >>> 0) {
       i19 = 21;
       break;
      }
      i24 = i11 - i14 >> 2;
      i25 = i16 + (i13 >>> 2) | 0;
      i26 = i25 >>> 0 > 16 >>> 0 ? i25 : 16;
      i25 = i26 >>> 0 > i16 >>> 0 ? i26 : i16;
      do {
       if (i13 >>> 0 < i25 >>> 0) {
        if (i25 >>> 0 > 1073741823 >>> 0) {
         i19 = 28;
         break L4;
        }
        i26 = __ZN3WTF18fastMallocGoodSizeEj(i25 << 2) | 0;
        i27 = i26 >>> 2;
        i28 = __ZN3WTF10fastMallocEj(i26) | 0;
        i26 = i28;
        i29 = i14;
        _memcpy(i28 | 0, i29 | 0, i13 << 2) | 0;
        if ((i14 | 0) == 0) {
         i30 = i26;
         i31 = i27;
         break;
        }
        i28 = (i26 | 0) == (i14 | 0);
        __ZN3WTF8fastFreeEPv(i29);
        i30 = i28 ? 0 : i26;
        i31 = i28 ? 0 : i27;
       } else {
        i30 = i14;
        i31 = i13;
       }
      } while (0);
      i32 = i30 + (i24 << 2) | 0;
      i33 = i30;
      i34 = i31;
     }
    } while (0);
    do {
     if ((i19 | 0) == 21) {
      i19 = 0;
      i25 = i16 + (i13 >>> 2) | 0;
      i27 = i25 >>> 0 > 16 >>> 0 ? i25 : 16;
      i25 = i27 >>> 0 > i16 >>> 0 ? i27 : i16;
      if (i13 >>> 0 >= i25 >>> 0) {
       i32 = i4;
       i33 = i14;
       i34 = i13;
       break;
      }
      if (i25 >>> 0 > 1073741823 >>> 0) {
       i19 = 23;
       break L4;
      }
      i27 = __ZN3WTF18fastMallocGoodSizeEj(i25 << 2) | 0;
      i25 = i27 >>> 2;
      i28 = __ZN3WTF10fastMallocEj(i27) | 0;
      i27 = i28;
      i26 = i14;
      _memcpy(i28 | 0, i26 | 0, i13 << 2) | 0;
      if ((i14 | 0) == 0) {
       i32 = i4;
       i33 = i27;
       i34 = i25;
       break;
      }
      i28 = (i27 | 0) == (i14 | 0);
      __ZN3WTF8fastFreeEPv(i26);
      i32 = i4;
      i33 = i28 ? 0 : i27;
      i34 = i28 ? 0 : i25;
     }
    } while (0);
    HEAP32[i33 + (i13 << 2) >> 2] = HEAP32[i32 >> 2];
    i21 = i33;
    i22 = i34;
    i23 = i16;
   } else {
    i21 = i14;
    i22 = i13;
    i23 = i8;
   }
  } while (0);
  i25 = i15 + 1 | 0;
  if (i25 >>> 0 < i5 >>> 0) {
   i8 = i23;
   i13 = i22;
   i14 = i21;
   i15 = i25;
  } else {
   i19 = 3;
   break;
  }
 }
 if ((i19 | 0) == 23) {
  _WTFCrash();
 } else if ((i19 | 0) == 3) {
  do {
   if ((i23 | 0) == 0) {
    if ((i21 | 0) != 0) {
     break;
    }
    STACKTOP = i3;
    return;
   } else {
    i15 = 0;
    while (1) {
     __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(i1, HEAP32[i21 + (i15 << 2) >> 2] | 0, 0) | 0;
     i15 = i15 + 1 | 0;
     if (i15 >>> 0 >= i23 >>> 0) {
      break;
     }
    }
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i21);
  STACKTOP = i3;
  return;
 } else if ((i19 | 0) == 6) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i19 | 0) == 28) {
  _WTFCrash();
 } else if ((i19 | 0) == 8) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i19 | 0) == 14) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZN7WebCore22MutableStyleProperties26removeEquivalentPropertiesEPKNS_15StylePropertiesE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i1 | 0;
 i7 = i1 + 4 | 0;
 i8 = i6 + 8 | 0;
 i9 = i8;
 i10 = i8;
 i11 = i4;
 i12 = i6 + 16 | 0;
 i6 = i8;
 i8 = 0;
 i13 = 0;
 i14 = 0;
 i15 = 0;
 L4 : while (1) {
  i16 = HEAP32[i7 >> 2] | 0;
  if ((i16 & 4 | 0) == 0) {
   i17 = i10 + (i15 << 2) | 0;
   i18 = i9 + (i16 >>> 3 << 2) + (i15 << 1) | 0;
  } else {
   if ((HEAP32[i12 >> 2] | 0) >>> 0 <= i15 >>> 0) {
    i19 = 6;
    break;
   }
   if ((HEAP32[i12 >> 2] | 0) >>> 0 <= i15 >>> 0) {
    i19 = 8;
    break;
   }
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = i16 + (i15 << 3) + 4 | 0;
   i18 = i16 + (i15 << 3) | 0;
  }
  do {
   if (__ZNK7WebCore15StyleProperties15propertyMatchesENS_13CSSPropertyIDEPKNS_8CSSValueE(i2, HEAP16[i18 >> 1] & 1023, HEAP32[i17 >> 2] | 0) | 0) {
    i16 = HEAP32[i7 >> 2] | 0;
    if ((i16 & 4 | 0) == 0) {
     i20 = i9 + (i16 >>> 3 << 2) + (i15 << 1) | 0;
    } else {
     if ((HEAP32[i12 >> 2] | 0) >>> 0 <= i15 >>> 0) {
      i19 = 14;
      break L4;
     }
     i20 = (HEAP32[i6 >> 2] | 0) + (i15 << 3) | 0;
    }
    i16 = HEAP16[i20 >> 1] & 1023;
    HEAP32[i4 >> 2] = i16;
    if ((i8 | 0) != (i13 | 0)) {
     HEAP32[i14 + (i8 << 2) >> 2] = i16;
     i21 = i14;
     i22 = i13;
     i23 = i8 + 1 | 0;
     break;
    }
    i16 = i13 + 1 | 0;
    do {
     if (i14 >>> 0 > i4 >>> 0) {
      i19 = 21;
     } else {
      if ((i14 + (i13 << 2) | 0) >>> 0 <= i4 >>> 0) {
       i19 = 21;
       break;
      }
      i24 = i11 - i14 >> 2;
      i25 = i16 + (i13 >>> 2) | 0;
      i26 = i25 >>> 0 > 16 >>> 0 ? i25 : 16;
      i25 = i26 >>> 0 > i16 >>> 0 ? i26 : i16;
      do {
       if (i13 >>> 0 < i25 >>> 0) {
        if (i25 >>> 0 > 1073741823 >>> 0) {
         i19 = 28;
         break L4;
        }
        i26 = __ZN3WTF18fastMallocGoodSizeEj(i25 << 2) | 0;
        i27 = i26 >>> 2;
        i28 = __ZN3WTF10fastMallocEj(i26) | 0;
        i26 = i28;
        i29 = i14;
        _memcpy(i28 | 0, i29 | 0, i13 << 2) | 0;
        if ((i14 | 0) == 0) {
         i30 = i26;
         i31 = i27;
         break;
        }
        i28 = (i26 | 0) == (i14 | 0);
        __ZN3WTF8fastFreeEPv(i29);
        i30 = i28 ? 0 : i26;
        i31 = i28 ? 0 : i27;
       } else {
        i30 = i14;
        i31 = i13;
       }
      } while (0);
      i32 = i30 + (i24 << 2) | 0;
      i33 = i30;
      i34 = i31;
     }
    } while (0);
    do {
     if ((i19 | 0) == 21) {
      i19 = 0;
      i25 = i16 + (i13 >>> 2) | 0;
      i27 = i25 >>> 0 > 16 >>> 0 ? i25 : 16;
      i25 = i27 >>> 0 > i16 >>> 0 ? i27 : i16;
      if (i13 >>> 0 >= i25 >>> 0) {
       i32 = i4;
       i33 = i14;
       i34 = i13;
       break;
      }
      if (i25 >>> 0 > 1073741823 >>> 0) {
       i19 = 23;
       break L4;
      }
      i27 = __ZN3WTF18fastMallocGoodSizeEj(i25 << 2) | 0;
      i25 = i27 >>> 2;
      i28 = __ZN3WTF10fastMallocEj(i27) | 0;
      i27 = i28;
      i26 = i14;
      _memcpy(i28 | 0, i26 | 0, i13 << 2) | 0;
      if ((i14 | 0) == 0) {
       i32 = i4;
       i33 = i27;
       i34 = i25;
       break;
      }
      i28 = (i27 | 0) == (i14 | 0);
      __ZN3WTF8fastFreeEPv(i26);
      i32 = i4;
      i33 = i28 ? 0 : i27;
      i34 = i28 ? 0 : i25;
     }
    } while (0);
    HEAP32[i33 + (i13 << 2) >> 2] = HEAP32[i32 >> 2];
    i21 = i33;
    i22 = i34;
    i23 = i16;
   } else {
    i21 = i14;
    i22 = i13;
    i23 = i8;
   }
  } while (0);
  i25 = i15 + 1 | 0;
  if (i25 >>> 0 < i5 >>> 0) {
   i8 = i23;
   i13 = i22;
   i14 = i21;
   i15 = i25;
  } else {
   i19 = 3;
   break;
  }
 }
 if ((i19 | 0) == 6) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i19 | 0) == 23) {
  _WTFCrash();
 } else if ((i19 | 0) == 28) {
  _WTFCrash();
 } else if ((i19 | 0) == 14) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i19 | 0) == 8) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i19 | 0) == 3) {
  do {
   if ((i23 | 0) == 0) {
    if ((i21 | 0) != 0) {
     break;
    }
    STACKTOP = i3;
    return;
   } else {
    i19 = 0;
    while (1) {
     __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(i1, HEAP32[i21 + (i19 << 2) >> 2] | 0, 0) | 0;
     i19 = i19 + 1 | 0;
     if (i19 >>> 0 >= i23 >>> 0) {
      break;
     }
    }
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i21);
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore15StyleProperties33appendFontLonghandValueIfExplicitENS_13CSSPropertyIDERN3WTF13StringBuilderERNS2_6StringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i1 + 4 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = (i9 & 4 | 0) == 0;
 L1 : do {
  if (i10) {
   i11 = i9 >>> 3;
   i12 = i1 + 8 | 0;
   i13 = i2 & 65535;
   i14 = i12;
   i15 = i12 + (i11 << 2) | 0;
   i16 = i11;
   while (1) {
    i11 = i16 - 1 | 0;
    if ((i11 | 0) <= -1) {
     break;
    }
    if ((HEAP16[i15 + (i11 << 1) >> 1] & 1023) == i13 << 16 >> 16) {
     i17 = i16;
     i18 = i11;
     i19 = i12;
     i20 = i14;
     i21 = i15;
     break L1;
    } else {
     i16 = i11;
    }
   }
   STACKTOP = i5;
   return;
  } else {
   i16 = i1 + 16 | 0;
   i15 = i1 + 8 | 0;
   i14 = i2 & 65535;
   i12 = i15;
   i13 = i15 + (i9 >>> 3 << 2) | 0;
   i11 = HEAP32[i16 >> 2] | 0;
   while (1) {
    i22 = i11 - 1 | 0;
    if ((i22 | 0) <= -1) {
     i23 = 48;
     break;
    }
    if ((HEAP32[i16 >> 2] | 0) >>> 0 <= i22 >>> 0) {
     i23 = 8;
     break;
    }
    if ((HEAP16[(HEAP32[i12 >> 2] | 0) + (i22 << 3) >> 1] & 1023) == i14 << 16 >> 16) {
     i17 = i11;
     i18 = i22;
     i19 = i15;
     i20 = i12;
     i21 = i13;
     break L1;
    } else {
     i11 = i22;
    }
   }
   if ((i23 | 0) == 8) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i23 | 0) == 48) {
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 if ((i17 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 do {
  if (i10) {
   i24 = i21 + (i18 << 1) | 0;
  } else {
   if ((HEAP32[i1 + 16 >> 2] | 0) >>> 0 > i18 >>> 0) {
    i24 = (HEAP32[i20 >> 2] | 0) + (i18 << 3) | 0;
    break;
   } else {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 if ((HEAP16[i24 >> 1] & 16384) != 0) {
  i24 = i4 | 0;
  i21 = HEAP32[i24 >> 2] | 0;
  HEAP32[i24 >> 2] = 0;
  if ((i21 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  i24 = i21 | 0;
  i10 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
  if ((i10 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i21);
   STACKTOP = i5;
   return;
  } else {
   HEAP32[i24 >> 2] = i10;
   STACKTOP = i5;
   return;
  }
 }
 if ((i2 | 0) == 19) {
  i25 = 47;
  i23 = 23;
 } else if ((i2 | 0) == 5 | (i2 | 0) == 8 | (i2 | 0) == 9) {
  i25 = 32;
  i23 = 23;
 }
 L39 : do {
  if ((i23 | 0) == 23) {
   i2 = i3 | 0;
   i10 = HEAP32[i2 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   HEAP8[i6] = i25;
   i24 = HEAP32[i3 + 8 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     if (i10 >>> 0 >= (HEAP32[i24 + 4 >> 2] | 0) >>> 0) {
      break;
     }
     if ((HEAP32[i3 + 4 >> 2] | 0) != 0) {
      break;
     }
     if ((HEAP8[i3 + 12 | 0] & 1) == 0) {
      HEAP32[i2 >> 2] = i10 + 1;
      HEAP16[(HEAP32[i3 + 20 >> 2] | 0) + (i10 << 1) >> 1] = i25 & 255;
      break L39;
     } else {
      HEAP32[i2 >> 2] = i10 + 1;
      HEAP8[(HEAP32[i3 + 20 >> 2] | 0) + i10 | 0] = i25;
      break L39;
     }
    }
   } while (0);
   __ZN3WTF13StringBuilder6appendEPKhj(i3, i6, 1);
  }
 } while (0);
 do {
  if ((HEAP32[i8 >> 2] & 4 | 0) == 0) {
   i26 = i19 + (i18 << 2) | 0;
  } else {
   if ((HEAP32[i1 + 16 >> 2] | 0) >>> 0 > i18 >>> 0) {
    i26 = (HEAP32[i20 >> 2] | 0) + (i18 << 3) + 4 | 0;
    break;
   } else {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 __ZNK7WebCore8CSSValue7cssTextEv(i7, HEAP32[i26 >> 2] | 0);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i3, i7);
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i26 = i7 | 0;
 do {
  if ((i4 | 0) != 0) {
   if (__ZN3WTF5equalEPKNS_10StringImplES2_(i4, HEAP32[i26 >> 2] | 0) | 0) {
    break;
   }
   i7 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i18 = i7 | 0;
   i20 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i18 >> 2] = i20;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i26 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i26 = i3 | 0;
 i4 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i26 >> 2] = i4;
  STACKTOP = i5;
  return;
 }
}
function __ZNK7WebCore15StyleProperties17PropertyReference7cssTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 40 | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i5 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i5 + 8 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i5 + 12 | 0;
 HEAP8[i11] = 1;
 HEAP32[i5 + 16 >> 2] = 0;
 i12 = i5 + 20 | 0;
 HEAP32[i12 >> 2] = 0;
 i13 = i2 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 i15 = HEAP32[i14 + 4 >> 2] | 0;
 i16 = i2 + 4 | 0;
 i2 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i15 & 4 | 0) == 0) {
   i17 = i14 + 8 + (i15 >>> 3 << 2) + (i2 << 1) | 0;
  } else {
   if ((HEAP32[i14 + 16 >> 2] | 0) >>> 0 > i2 >>> 0) {
    i17 = (HEAP32[i14 + 8 >> 2] | 0) + (i2 << 3) | 0;
    break;
   } else {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 __ZN7WebCore21getPropertyNameStringENS_13CSSPropertyIDE(i6, HEAP16[i17 >> 1] & 1023);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i5, i6);
 i17 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i6 = i17 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i6 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN3WTF13StringBuilder6appendEPKhj(i5, H_BASE + 72 | 0, 2);
 i17 = HEAP32[i13 >> 2] | 0;
 i2 = HEAP32[i16 >> 2] | 0;
 do {
  if ((HEAP32[i17 + 4 >> 2] & 4 | 0) == 0) {
   i18 = i17 + 8 + (i2 << 2) | 0;
  } else {
   if ((HEAP32[i17 + 16 >> 2] | 0) >>> 0 > i2 >>> 0) {
    i18 = (HEAP32[i17 + 8 >> 2] | 0) + (i2 << 3) + 4 | 0;
    break;
   } else {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 __ZNK7WebCore8CSSValue7cssTextEv(i7, HEAP32[i18 >> 2] | 0);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i5, i7);
 i18 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i7 = i18 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i7 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i18 = HEAP32[i13 >> 2] | 0;
 i13 = HEAP32[i18 + 4 >> 2] | 0;
 i2 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i13 & 4 | 0) == 0) {
   i19 = i18 + 8 + (i13 >>> 3 << 2) + (i2 << 1) | 0;
  } else {
   if ((HEAP32[i18 + 16 >> 2] | 0) >>> 0 > i2 >>> 0) {
    i19 = (HEAP32[i18 + 8 >> 2] | 0) + (i2 << 3) | 0;
    break;
   } else {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 if ((HEAP16[i19 >> 1] & 8192) != 0) {
  __ZN3WTF13StringBuilder6appendEPKhj(i5, H_BASE + 56 | 0, 11);
 }
 HEAP8[i4] = 59;
 i19 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i19 | 0) == 0) {
   i20 = 32;
  } else {
   i2 = HEAP32[i8 >> 2] | 0;
   if (i2 >>> 0 >= (HEAP32[i19 + 4 >> 2] | 0) >>> 0) {
    i20 = 32;
    break;
   }
   if ((HEAP32[i9 >> 2] | 0) != 0) {
    i20 = 32;
    break;
   }
   i18 = (HEAP8[i11] & 1) == 0;
   HEAP32[i8 >> 2] = i2 + 1;
   if (i18) {
    HEAP16[(HEAP32[i5 + 20 >> 2] | 0) + (i2 << 1) >> 1] = 59;
    break;
   } else {
    HEAP8[(HEAP32[i12 >> 2] | 0) + i2 | 0] = 59;
    break;
   }
  }
 } while (0);
 if ((i20 | 0) == 32) {
  __ZN3WTF13StringBuilder6appendEPKhj(i5, i4, 1);
 }
 __ZN3WTF13StringBuilder11shrinkToFitEv(i5);
 i4 = HEAP32[i9 >> 2] | 0;
 if ((i4 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i5);
  i5 = HEAP32[i9 >> 2] | 0;
  HEAP32[i1 >> 2] = i5;
  if ((i5 | 0) != 0) {
   i21 = i5;
   i20 = 36;
  }
 } else {
  HEAP32[i1 >> 2] = i4;
  i21 = i4;
  i20 = 36;
 }
 if ((i20 | 0) == 36) {
  i20 = i21 | 0;
  HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
 }
 i20 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i10 = i20 | 0;
   i21 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i10 >> 2] = i21;
    break;
   }
  }
 } while (0);
 i20 = HEAP32[i9 >> 2] | 0;
 if ((i20 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i20 | 0;
 i21 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i21 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i20);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i9 >> 2] = i21;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore22MutableStyleProperties27setPrefixingVariantPropertyERKNS_11CSSPropertyE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i2;
 i6 = HEAP16[i5 >> 1] | 0;
 i7 = i6 & 1023;
 switch (i7 | 0) {
 case 355:
  {
   i8 = 158;
   break;
  }
 case 352:
  {
   i8 = 155;
   break;
  }
 case 353:
  {
   i8 = 156;
   break;
  }
 case 351:
  {
   i8 = 154;
   break;
  }
 case 156:
  {
   i8 = 353;
   break;
  }
 case 157:
  {
   i8 = 354;
   break;
  }
 case 154:
  {
   i8 = 351;
   break;
  }
 case 155:
  {
   i8 = 352;
   break;
  }
 case 158:
  {
   i8 = 355;
   break;
  }
 case 354:
  {
   i8 = 157;
   break;
  }
 default:
  {
   i8 = i7;
  }
 }
 i9 = i1 | 0;
 i10 = HEAP32[i1 + 4 >> 2] | 0;
 i11 = (i10 & 4 | 0) == 0;
 if (i11) {
  i12 = i10 >>> 3;
  i13 = i12;
  i14 = i9 + 16 | 0;
  i15 = i12;
 } else {
  i12 = i9 + 16 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i12;
  i15 = i10 >>> 3;
 }
 i10 = i9 + 8 | 0;
 i9 = i8 & 65535;
 i12 = i10;
 i16 = i10 + (i15 << 2) | 0;
 i15 = i13;
 while (1) {
  i17 = i15 - 1 | 0;
  if ((i17 | 0) <= -1) {
   i18 = 52;
   break;
  }
  if (i11) {
   i19 = i16 + (i17 << 1) | 0;
  } else {
   if ((HEAP32[i14 >> 2] | 0) >>> 0 <= i17 >>> 0) {
    i18 = 19;
    break;
   }
   i19 = (HEAP32[i12 >> 2] | 0) + (i17 << 3) | 0;
  }
  if ((HEAP16[i19 >> 1] & 1023) == i9 << 16 >> 16) {
   i18 = 23;
   break;
  } else {
   i15 = i17;
  }
 }
 if ((i18 | 0) == 52) {
  STACKTOP = i3;
  return;
 } else if ((i18 | 0) == 23) {
  if ((i15 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i1 + 16 >> 2] | 0) >>> 0 <= i17 >>> 0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
  i15 = HEAP32[i1 + 8 >> 2] | 0;
  i1 = i15 + (i17 << 3) | 0;
  if ((i1 | 0) == 0 | (i8 | 0) == (i7 | 0)) {
   STACKTOP = i3;
   return;
  }
  i7 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i20 = i6;
  } else {
   i6 = i7 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
   i20 = HEAP16[i5 >> 1] | 0;
  }
  i6 = i20 & 1024;
  do {
   if (i6 << 16 >> 16 == 0) {
    i21 = 0;
   } else {
    i19 = __ZNK7WebCore21StylePropertyMetadata11shorthandIDEv(i2 | 0) | 0;
    switch (i19 | 0) {
    case 156:
     {
      i22 = 353;
      break;
     }
    case 351:
     {
      i22 = 154;
      break;
     }
    case 354:
     {
      i22 = 157;
      break;
     }
    case 355:
     {
      i22 = 158;
      break;
     }
    case 155:
     {
      i22 = 352;
      break;
     }
    case 158:
     {
      i22 = 355;
      break;
     }
    case 154:
     {
      i22 = 351;
      break;
     }
    case 157:
     {
      i22 = 354;
      break;
     }
    case 352:
     {
      i22 = 155;
      break;
     }
    case 353:
     {
      i22 = 156;
      break;
     }
    default:
     {
      i22 = i19;
     }
    }
    __ZN7WebCore29matchingShorthandsForLonghandENS_13CSSPropertyIDE(i4, i8);
    i19 = __ZN7WebCore27indexOfShorthandForLonghandENS_13CSSPropertyIDERKN3WTF6VectorINS_22StylePropertyShorthandELj0ENS1_15CrashOnOverflowEEE(i22, i4) | 0;
    i12 = i4 + 8 | 0;
    if ((HEAP32[i12 >> 2] | 0) != 0) {
     HEAP32[i12 >> 2] = 0;
    }
    i12 = i4 | 0;
    i14 = HEAP32[i12 >> 2] | 0;
    i16 = i19 & 65535;
    if ((i14 | 0) == 0) {
     i21 = i16;
     break;
    }
    HEAP32[i12 >> 2] = 0;
    HEAP32[i4 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i14);
    i21 = i16;
   }
  } while (0);
  i4 = HEAP16[i5 >> 1] | 0;
  HEAP16[i1 >> 1] = i20 & 8192 | i9 & 1023 | i6 | i21 << 11 & 6144 | i4 & 16384 | ((__ZN7WebCore11CSSProperty19isInheritedPropertyENS_13CSSPropertyIDE(i8) | 0) & 1) << 15;
  i8 = i15 + (i17 << 3) + 4 | 0;
  i17 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = i7;
  if ((i17 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i7 = i17 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore8CSSValue7destroyEv(i17);
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i7 >> 2] = i8;
   STACKTOP = i3;
   return;
  }
 } else if ((i18 | 0) == 19) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZN7WebCore22MutableStyleProperties11setPropertyERKNS_11CSSPropertyEPS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i2;
 i8 = HEAP16[i7 >> 1] & 1023;
 __ZN7WebCore20shorthandForPropertyENS_13CSSPropertyIDE(i5, i8);
 i9 = HEAP32[i5 + 8 >> 2] | 0;
 L1 : do {
  if ((i9 | 0) == 0) {
   i10 = 15;
  } else {
   i11 = __ZN7WebCore22MutableStyleProperties21removePropertiesInSetEPKNS_13CSSPropertyIDEj(i1, HEAP32[i5 >> 2] | 0, i9) | 0;
   switch (i8 | 0) {
   case 351:
    {
     i12 = 154;
     i10 = 12;
     break;
    }
   case 154:
    {
     i12 = 351;
     i10 = 12;
     break;
    }
   case 156:
    {
     i12 = 353;
     i10 = 12;
     break;
    }
   case 352:
    {
     i12 = 155;
     i10 = 12;
     break;
    }
   case 353:
    {
     i12 = 156;
     i10 = 12;
     break;
    }
   case 354:
    {
     i12 = 157;
     i10 = 12;
     break;
    }
   case 355:
    {
     i12 = 158;
     i10 = 12;
     break;
    }
   case 158:
    {
     i12 = 355;
     i10 = 12;
     break;
    }
   case 157:
    {
     i12 = 354;
     i10 = 12;
     break;
    }
   case 155:
    {
     i12 = 352;
     i10 = 12;
     break;
    }
   default:
    {}
   }
   do {
    if ((i10 | 0) == 12) {
     if ((i12 | 0) == (i8 | 0)) {
      break;
     }
     __ZN7WebCore20shorthandForPropertyENS_13CSSPropertyIDE(i6, i12);
     if (__ZN7WebCore22MutableStyleProperties21removePropertiesInSetEPKNS_13CSSPropertyIDEj(i1, HEAP32[i6 >> 2] | 0, HEAP32[i6 + 8 >> 2] | 0) | 0) {
      break L1;
     } else {
      i10 = 15;
      break L1;
     }
    }
   } while (0);
   if (!i11) {
    i10 = 15;
   }
  }
 } while (0);
 L17 : do {
  if ((i10 | 0) == 15) {
   i6 = HEAP16[i7 >> 1] | 0;
   do {
    if ((i3 | 0) == 0) {
     i12 = i1 | 0;
     i8 = HEAP32[i1 + 4 >> 2] | 0;
     i9 = (i8 & 4 | 0) == 0;
     if (i9) {
      i5 = i8 >>> 3;
      i13 = i5;
      i14 = i12 + 16 | 0;
      i15 = i5;
     } else {
      i5 = i12 + 16 | 0;
      i13 = HEAP32[i5 >> 2] | 0;
      i14 = i5;
      i15 = i8 >>> 3;
     }
     i8 = i12 + 8 | 0;
     i12 = i8;
     i5 = i8 + (i15 << 2) | 0;
     i8 = i13;
     while (1) {
      i16 = i8 - 1 | 0;
      if ((i16 | 0) <= -1) {
       break L17;
      }
      if (i9) {
       i17 = i5 + (i16 << 1) | 0;
      } else {
       if ((HEAP32[i14 >> 2] | 0) >>> 0 <= i16 >>> 0) {
        i10 = 23;
        break;
       }
       i17 = (HEAP32[i12 >> 2] | 0) + (i16 << 3) | 0;
      }
      if (((HEAP16[i17 >> 1] ^ i6) & 1023) == 0) {
       break;
      } else {
       i8 = i16;
      }
     }
     if ((i10 | 0) == 23) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
     if ((i8 | 0) == 0) {
      break L17;
     }
     if ((HEAP32[i1 + 16 >> 2] | 0) >>> 0 > i16 >>> 0) {
      i12 = (HEAP32[i1 + 8 >> 2] | 0) + (i16 << 3) | 0;
      if ((i12 | 0) == 0) {
       break L17;
      } else {
       i18 = i12;
       break;
      }
     } else {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
    } else {
     i18 = i3;
    }
   } while (0);
   HEAP16[i18 >> 1] = i6;
   i11 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i11 | 0) != 0) {
    i12 = i11 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   }
   i12 = i18 + 4 | 0;
   i5 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i11;
   do {
    if ((i5 | 0) != 0) {
     i11 = i5 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     if ((i12 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i5);
      break;
     } else {
      HEAP32[i11 >> 2] = i12;
      break;
     }
    }
   } while (0);
   __ZN7WebCore22MutableStyleProperties27setPrefixingVariantPropertyERKNS_11CSSPropertyE(i1, i2);
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZN7WebCore22MutableStyleProperties30appendPrefixingVariantPropertyERKNS_11CSSPropertyE(i1, i2);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore15StyleProperties19copyPropertiesInSetEPKNS_13CSSPropertyIDEj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 2080 | 0;
 i6 = i5 | 0;
 i7 = i5 + 2064 | 0;
 i8 = i5 + 2072 | 0;
 i9 = i6 + 12 | 0;
 i10 = i6 | 0;
 HEAP32[i10 >> 2] = i9;
 i11 = i6 + 4 | 0;
 HEAP32[i11 >> 2] = 256;
 i12 = i6 + 8 | 0;
 HEAP32[i12 >> 2] = 0;
 do {
  if (i4 >>> 0 > 256 >>> 0) {
   if (i4 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
   } else {
    i13 = __ZN3WTF18fastMallocGoodSizeEj(i4 << 3) | 0;
    HEAP32[i11 >> 2] = i13 >>> 3;
    i14 = __ZN3WTF10fastMallocEj(i13) | 0;
    HEAP32[i10 >> 2] = i14;
    i15 = i14;
    break;
   }
  } else {
   i15 = i9;
  }
 } while (0);
 if ((i4 | 0) == 0) {
  i16 = i15;
 } else {
  i15 = i7 | 0;
  i14 = i8;
  i13 = i8 + 4 | 0;
  i17 = 0;
  while (1) {
   i18 = i3 + (i17 << 2) | 0;
   __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i7, i2, HEAP32[i18 >> 2] | 0);
   i19 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   do {
    if ((i19 | 0) != 0) {
     i20 = HEAP32[i18 >> 2] | 0;
     i21 = ((__ZN7WebCore11CSSProperty19isInheritedPropertyENS_13CSSPropertyIDE(i20) | 0) & 1) << 15 | i20 & 1023;
     HEAP16[i14 >> 1] = i21;
     HEAP32[i13 >> 2] = i19;
     i20 = HEAP32[i12 >> 2] | 0;
     if ((i20 | 0) == (HEAP32[i11 >> 2] | 0)) {
      __ZN3WTF6VectorIN7WebCore11CSSPropertyELj256ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i6, i8);
     } else {
      i22 = HEAP32[i10 >> 2] | 0;
      HEAP16[i22 + (i20 << 3) >> 1] = i21;
      i21 = HEAP32[i13 >> 2] | 0;
      HEAP32[i13 >> 2] = 0;
      HEAP32[i22 + (i20 << 3) + 4 >> 2] = i21;
      HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
     }
     i21 = HEAP32[i13 >> 2] | 0;
     if ((i21 | 0) == 0) {
      break;
     }
     i20 = i21 | 0;
     i22 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     if ((i22 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i21);
      break;
     } else {
      HEAP32[i20 >> 2] = i22;
      break;
     }
    }
   } while (0);
   i17 = i17 + 1 | 0;
   if (i17 >>> 0 >= i4 >>> 0) {
    break;
   }
  }
  i16 = HEAP32[i10 >> 2] | 0;
 }
 i4 = HEAP32[i12 >> 2] | 0;
 i17 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore22MutableStylePropertiesC2EPKNS_11CSSPropertyEj(i17, i16, i4);
 HEAP32[i1 >> 2] = i17;
 i17 = HEAP32[i12 >> 2] | 0;
 if ((i17 | 0) != 0) {
  i1 = HEAP32[i10 >> 2] | 0;
  i4 = i1 + (i17 << 3) | 0;
  i17 = i1;
  while (1) {
   i1 = HEAP32[i17 + 4 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i16 = i1 | 0;
     i13 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     if ((i13 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i1);
      break;
     } else {
      HEAP32[i16 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i17 = i17 + 8 | 0;
   if ((i17 | 0) == (i4 | 0)) {
    break;
   }
  }
  HEAP32[i12 >> 2] = 0;
 }
 i12 = HEAP32[i10 >> 2] | 0;
 if ((i9 | 0) == (i12 | 0) | (i12 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i10 >> 2] = 0;
 HEAP32[i11 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i12 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDEN3WTF10PassRefPtrINS_8CSSValueEEEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 24 | 0;
 __ZN7WebCore20shorthandForPropertyENS_13CSSPropertyIDE(i6, i2);
 i9 = i6 + 8 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = i3 | 0;
  i12 = HEAP32[i11 >> 2] | 0;
  HEAP32[i11 >> 2] = 0;
  HEAP16[i7 >> 1] = (i4 & 1) << 13 | i2 & 1023 | ((__ZN7WebCore11CSSProperty19isInheritedPropertyENS_13CSSPropertyIDE(i2) | 0) & 1) << 15;
  i2 = i7 + 4 | 0;
  HEAP32[i2 >> 2] = i12;
  __ZN7WebCore22MutableStyleProperties11setPropertyERKNS_11CSSPropertyEPS1_(i1, i7, 0);
  i7 = HEAP32[i2 >> 2] | 0;
  if ((i7 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  i2 = i7 | 0;
  i12 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
  if ((i12 | 0) == 0) {
   __ZN7WebCore8CSSValue7destroyEv(i7);
   STACKTOP = i5;
   return;
  } else {
   HEAP32[i2 >> 2] = i12;
   STACKTOP = i5;
   return;
  }
 }
 i12 = i6 | 0;
 __ZN7WebCore22MutableStyleProperties21removePropertiesInSetEPKNS_13CSSPropertyIDEj(i1, HEAP32[i12 >> 2] | 0, i10) | 0;
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 if ((HEAP32[i9 >> 2] | 0) != 0) {
  i10 = i1 + 8 | 0;
  i6 = (i3 | 0) == 0;
  i2 = i8;
  i7 = (i4 & 1) << 13;
  i4 = i8 + 4 | 0;
  i11 = i1 + 16 | 0;
  i13 = i1 + 12 | 0;
  i1 = i10 | 0;
  i14 = i3 | 0;
  i15 = 0;
  while (1) {
   i16 = HEAP32[(HEAP32[i12 >> 2] | 0) + (i15 << 2) >> 2] | 0;
   if (!i6) {
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
   }
   i17 = i16 & 1023 | i7 | ((__ZN7WebCore11CSSProperty19isInheritedPropertyENS_13CSSPropertyIDE(i16) | 0) & 1) << 15;
   HEAP16[i2 >> 1] = i17;
   HEAP32[i4 >> 2] = i3;
   i16 = HEAP32[i11 >> 2] | 0;
   if ((i16 | 0) == (HEAP32[i13 >> 2] | 0)) {
    __ZN3WTF6VectorIN7WebCore11CSSPropertyELj4ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i10, i8);
   } else {
    i18 = HEAP32[i1 >> 2] | 0;
    HEAP16[i18 + (i16 << 3) >> 1] = i17;
    i17 = HEAP32[i4 >> 2] | 0;
    HEAP32[i4 >> 2] = 0;
    HEAP32[i18 + (i16 << 3) + 4 >> 2] = i17;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   }
   i17 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i16 = i17 | 0;
     i18 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     if ((i18 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i17);
      break;
     } else {
      HEAP32[i16 >> 2] = i18;
      break;
     }
    }
   } while (0);
   i15 = i15 + 1 | 0;
   if (i15 >>> 0 >= (HEAP32[i9 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 if ((i3 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i9 = i3 | 0;
 i15 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 if ((i15 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i3);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i9 >> 2] = i15;
  STACKTOP = i5;
  return;
 }
}
function __ZN3WTF9HashTableIN7WebCore13CSSPropertyIDES2_NS_17IdentityExtractorENS_7IntHashIjEENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_SD_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIN7WebCore13CSSPropertyIDES2_NS_17IdentityExtractorENS_7IntHashIjEENS_10HashTraitsIS2_EES7_E6expandEPS2_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i8 + ~(i8 << 15) | 0;
 i9 = (i3 >>> 10 ^ i3) * 9 & -1;
 i3 = i9 >>> 6 ^ i9;
 i9 = i3 + ~(i3 << 11) | 0;
 i3 = i9 >>> 16 ^ i9;
 i9 = i3 & i6;
 i10 = i7 + (i9 << 2) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i10;
   i13 = 9;
  } else {
   i14 = (i3 >>> 23) + ~i3 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i9;
   i18 = i10;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 6;
     break;
    }
    i20 = (i19 | 0) == 415 ? i18 : i16;
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
   if ((i13 | 0) == 8) {
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
   } else if ((i13 | 0) == 6) {
    i19 = i7 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
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
  i13 = __ZN3WTF9HashTableIN7WebCore13CSSPropertyIDES2_NS_17IdentityExtractorENS_7IntHashIjEENS_10HashTraitsIS2_EES7_E6expandEPS2_(i2, i25) | 0;
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
function __ZN3WTF6VectorIN7WebCore11CSSPropertyELj4ENS_15CrashOnOverflowEEaSERKS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 if ((i2 | 0) == (i1 | 0)) {
  return i1 | 0;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if (i4 >>> 0 > i6 >>> 0) {
   i7 = HEAP32[i1 >> 2] | 0;
   i8 = i7 + (i4 << 3) | 0;
   if ((i4 | 0) != (i6 | 0)) {
    i9 = i7 + (i6 << 3) | 0;
    while (1) {
     i7 = HEAP32[i9 + 4 >> 2] | 0;
     do {
      if ((i7 | 0) != 0) {
       i10 = i7 | 0;
       i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
       if ((i11 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i7);
        break;
       } else {
        HEAP32[i10 >> 2] = i11;
        break;
       }
      }
     } while (0);
     i9 = i9 + 8 | 0;
     if ((i9 | 0) == (i8 | 0)) {
      break;
     }
    }
   }
   HEAP32[i3 >> 2] = i6;
   i12 = i6;
  } else {
   if (i6 >>> 0 <= (HEAP32[i1 + 4 >> 2] | 0) >>> 0) {
    i12 = i4;
    break;
   }
   __ZN3WTF6VectorIN7WebCore11CSSPropertyELj4ENS_15CrashOnOverflowEE14shrinkCapacityEj(i1, 0);
   __ZN3WTF6VectorIN7WebCore11CSSPropertyELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, HEAP32[i5 >> 2] | 0);
   i12 = HEAP32[i3 >> 2] | 0;
  }
 } while (0);
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i6 = i2 + (i12 << 3) | 0;
 i8 = i1 | 0;
 if ((i12 | 0) == 0) {
  i13 = i2;
  i14 = 0;
 } else {
  i12 = HEAP32[i8 >> 2] | 0;
  i9 = i2;
  while (1) {
   HEAP16[i12 >> 1] = HEAP16[i9 >> 1] | 0;
   i2 = HEAP32[i9 + 4 >> 2] | 0;
   if ((i2 | 0) != 0) {
    i7 = i2 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   }
   i7 = i12 + 4 | 0;
   i11 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i2;
   do {
    if ((i11 | 0) != 0) {
     i2 = i11 | 0;
     i7 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
     if ((i7 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i11);
      break;
     } else {
      HEAP32[i2 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i11 = i9 + 8 | 0;
   if ((i11 | 0) == (i6 | 0)) {
    break;
   } else {
    i12 = i12 + 8 | 0;
    i9 = i11;
   }
  }
  i13 = HEAP32[i4 >> 2] | 0;
  i14 = HEAP32[i3 >> 2] | 0;
 }
 i4 = HEAP32[i5 >> 2] | 0;
 i9 = i13 + (i4 << 3) | 0;
 if ((i14 | 0) == (i4 | 0)) {
  i15 = i14;
 } else {
  i4 = i13 + (i14 << 3) | 0;
  i13 = (HEAP32[i8 >> 2] | 0) + (i14 << 3) | 0;
  while (1) {
   HEAP16[i13 >> 1] = HEAP16[i4 >> 1] | 0;
   i14 = HEAP32[i4 + 4 >> 2] | 0;
   HEAP32[i13 + 4 >> 2] = i14;
   if ((i14 | 0) != 0) {
    i8 = i14 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   }
   i8 = i4 + 8 | 0;
   if ((i8 | 0) == (i9 | 0)) {
    break;
   } else {
    i4 = i8;
    i13 = i13 + 8 | 0;
   }
  }
  i15 = HEAP32[i5 >> 2] | 0;
 }
 HEAP32[i3 >> 2] = i15;
 return i1 | 0;
}
function __ZN3WTF6VectorIN7WebCore11CSSPropertyELj4ENS_15CrashOnOverflowEEaSILj0ES3_EERS4_RKNS0_IS2_XT_ET0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if (i4 >>> 0 > i6 >>> 0) {
   i7 = HEAP32[i1 >> 2] | 0;
   i8 = i7 + (i4 << 3) | 0;
   if ((i4 | 0) != (i6 | 0)) {
    i9 = i7 + (i6 << 3) | 0;
    while (1) {
     i7 = HEAP32[i9 + 4 >> 2] | 0;
     do {
      if ((i7 | 0) != 0) {
       i10 = i7 | 0;
       i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
       if ((i11 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i7);
        break;
       } else {
        HEAP32[i10 >> 2] = i11;
        break;
       }
      }
     } while (0);
     i9 = i9 + 8 | 0;
     if ((i9 | 0) == (i8 | 0)) {
      break;
     }
    }
   }
   HEAP32[i3 >> 2] = i6;
   i12 = i6;
  } else {
   if (i6 >>> 0 <= (HEAP32[i1 + 4 >> 2] | 0) >>> 0) {
    i12 = i4;
    break;
   }
   __ZN3WTF6VectorIN7WebCore11CSSPropertyELj4ENS_15CrashOnOverflowEE14shrinkCapacityEj(i1, 0);
   __ZN3WTF6VectorIN7WebCore11CSSPropertyELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, HEAP32[i5 >> 2] | 0);
   i12 = HEAP32[i3 >> 2] | 0;
  }
 } while (0);
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i6 = i2 + (i12 << 3) | 0;
 i8 = i1 | 0;
 if ((i12 | 0) == 0) {
  i13 = i2;
  i14 = 0;
 } else {
  i12 = HEAP32[i8 >> 2] | 0;
  i9 = i2;
  while (1) {
   HEAP16[i12 >> 1] = HEAP16[i9 >> 1] | 0;
   i2 = HEAP32[i9 + 4 >> 2] | 0;
   if ((i2 | 0) != 0) {
    i7 = i2 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   }
   i7 = i12 + 4 | 0;
   i11 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i2;
   do {
    if ((i11 | 0) != 0) {
     i2 = i11 | 0;
     i7 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
     if ((i7 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i11);
      break;
     } else {
      HEAP32[i2 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i11 = i9 + 8 | 0;
   if ((i11 | 0) == (i6 | 0)) {
    break;
   } else {
    i12 = i12 + 8 | 0;
    i9 = i11;
   }
  }
  i13 = HEAP32[i4 >> 2] | 0;
  i14 = HEAP32[i3 >> 2] | 0;
 }
 i4 = HEAP32[i5 >> 2] | 0;
 i9 = i13 + (i4 << 3) | 0;
 if ((i14 | 0) == (i4 | 0)) {
  i15 = i14;
  HEAP32[i3 >> 2] = i15;
  return i1 | 0;
 }
 i4 = i13 + (i14 << 3) | 0;
 i13 = (HEAP32[i8 >> 2] | 0) + (i14 << 3) | 0;
 while (1) {
  HEAP16[i13 >> 1] = HEAP16[i4 >> 1] | 0;
  i14 = HEAP32[i4 + 4 >> 2] | 0;
  HEAP32[i13 + 4 >> 2] = i14;
  if ((i14 | 0) != 0) {
   i8 = i14 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  }
  i8 = i4 + 8 | 0;
  if ((i8 | 0) == (i9 | 0)) {
   break;
  } else {
   i4 = i8;
   i13 = i13 + 8 | 0;
  }
 }
 i15 = HEAP32[i5 >> 2] | 0;
 HEAP32[i3 >> 2] = i15;
 return i1 | 0;
}
function __ZNK7WebCore15StyleProperties14getCommonValueERKNS_22StylePropertyShorthandE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i3 + 8 | 0;
 i8 = i3 | 0;
 i3 = i5 | 0;
 i9 = i6 | 0;
 i10 = i1 | 0;
 i1 = 0;
 i11 = 0;
 i12 = 0;
 while (1) {
  if (i11 >>> 0 >= (HEAP32[i7 >> 2] | 0) >>> 0) {
   i13 = 21;
   break;
  }
  __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i5, i2, HEAP32[(HEAP32[i8 >> 2] | 0) + (i11 << 2) >> 2] | 0);
  i14 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  if ((i14 | 0) == 0) {
   i13 = 4;
   break;
  }
  __ZNK7WebCore8CSSValue7cssTextEv(i6, i14);
  i15 = HEAP32[i9 >> 2] | 0;
  L5 : do {
   if ((i15 | 0) == 0) {
    HEAP32[i10 >> 2] = 0;
    i16 = i1;
    i17 = 1;
    i18 = i12;
   } else {
    do {
     if ((i12 | 0) == 0) {
      i19 = i15 | 0;
      HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
      i20 = i15;
     } else {
      if (__ZN3WTF5equalEPKNS_10StringImplES2_(i12, i15) | 0) {
       i20 = i12;
       break;
      }
      HEAP32[i10 >> 2] = 0;
      i16 = i1;
      i17 = 1;
      i18 = i12;
      break L5;
     }
    } while (0);
    i19 = __ZNK7WebCore15StyleProperties19propertyIsImportantENS_13CSSPropertyIDE(i2, HEAP32[(HEAP32[i8 >> 2] | 0) + (i11 << 2) >> 2] | 0) | 0;
    if (!((i11 | 0) != 0 & (i1 ^ i19))) {
     i16 = i19;
     i17 = 0;
     i18 = i20;
     break;
    }
    HEAP32[i10 >> 2] = 0;
    i16 = i1;
    i17 = 1;
    i18 = i20;
   }
  } while (0);
  i15 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i15 | 0) != 0) {
    i19 = i15 | 0;
    i21 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
    if ((i21 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i15);
     break;
    } else {
     HEAP32[i19 >> 2] = i21;
     break;
    }
   }
  } while (0);
  i15 = i14 | 0;
  i21 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
  if ((i21 | 0) == 0) {
   __ZN7WebCore8CSSValue7destroyEv(i14);
  } else {
   HEAP32[i15 >> 2] = i21;
  }
  if ((i17 | 0) == 0) {
   i1 = i16;
   i11 = i11 + 1 | 0;
   i12 = i18;
  } else {
   i22 = i18;
   break;
  }
 }
 if ((i13 | 0) == 4) {
  HEAP32[i10 >> 2] = 0;
  i22 = i12;
 } else if ((i13 | 0) == 21) {
  HEAP32[i10 >> 2] = i12;
  STACKTOP = i4;
  return;
 }
 if ((i22 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i12 = i22 | 0;
 i10 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i22);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i12 >> 2] = i10;
  STACKTOP = i4;
  return;
 }
}
function __ZN3WTF9HashTableIN7WebCore13CSSPropertyIDES2_NS_17IdentityExtractorENS_7IntHashIjEENS_10HashTraitsIS2_EES7_E6expandEPS2_(i1, i2) {
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
  if ((i13 | 0) == 415 | (i13 | 0) == 0) {
   i14 = i12;
  } else {
   i15 = HEAP32[i4 >> 2] | 0;
   i16 = HEAP32[i3 >> 2] | 0;
   i17 = i13 + ~(i13 << 15) | 0;
   i18 = (i17 >>> 10 ^ i17) * 9 & -1;
   i17 = i18 >>> 6 ^ i18;
   i18 = i17 + ~(i17 << 11) | 0;
   i17 = i18 >>> 16 ^ i18;
   i18 = i16 & i17;
   i19 = i15 + (i18 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L10 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 7;
    } else {
     i24 = (i17 >>> 23) + ~i17 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i18;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L10;
      }
      i31 = (i29 | 0) == 415 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i16;
      i34 = i15 + (i33 << 2) | 0;
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
   i14 = (i5 | 0) == (i2 | 0) ? i30 : i12;
  }
  i15 = i11 + 1 | 0;
  if ((i15 | 0) == (i6 | 0)) {
   i8 = i14;
   break;
  } else {
   i11 = i15;
   i12 = i14;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZNK7WebCore15StyleProperties19propertyIsImportantENS_13CSSPropertyIDE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 i6 = (i5 & 4 | 0) == 0;
 L1 : do {
  if (i6) {
   i7 = i5 >>> 3;
   i8 = i1 + 8 | 0;
   i9 = i2 & 65535;
   i10 = i8;
   i11 = i8 + (i7 << 2) | 0;
   i8 = i7;
   while (1) {
    i7 = i8 - 1 | 0;
    if ((i7 | 0) <= -1) {
     break L1;
    }
    if ((HEAP16[i11 + (i7 << 1) >> 1] & 1023) == i9 << 16 >> 16) {
     i12 = i8;
     i13 = i7;
     i14 = i10;
     i15 = i11;
     i16 = 10;
     break;
    } else {
     i8 = i7;
    }
   }
  } else {
   i8 = i1 + 16 | 0;
   i11 = i1 + 8 | 0;
   i10 = i2 & 65535;
   i9 = i11;
   i7 = i11 + (i5 >>> 3 << 2) | 0;
   i11 = HEAP32[i8 >> 2] | 0;
   while (1) {
    i17 = i11 - 1 | 0;
    if ((i17 | 0) <= -1) {
     break L1;
    }
    if ((HEAP32[i8 >> 2] | 0) >>> 0 <= i17 >>> 0) {
     break;
    }
    if ((HEAP16[(HEAP32[i9 >> 2] | 0) + (i17 << 3) >> 1] & 1023) == i10 << 16 >> 16) {
     i12 = i11;
     i13 = i17;
     i14 = i9;
     i15 = i7;
     i16 = 10;
     break L1;
    } else {
     i11 = i17;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
   return 0;
  }
 } while (0);
 do {
  if ((i16 | 0) == 10) {
   if ((i12 | 0) == 0) {
    break;
   }
   do {
    if (i6) {
     i18 = i15 + (i13 << 1) | 0;
    } else {
     if ((HEAP32[i1 + 16 >> 2] | 0) >>> 0 > i13 >>> 0) {
      i18 = (HEAP32[i14 >> 2] | 0) + (i13 << 3) | 0;
      break;
     } else {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
      return 0;
     }
    }
   } while (0);
   i19 = (HEAP16[i18 >> 1] & 8192) != 0;
   STACKTOP = i3;
   return i19 | 0;
  }
 } while (0);
 __ZN7WebCore20shorthandForPropertyENS_13CSSPropertyIDE(i4, i2);
 i2 = i4 + 8 | 0;
 i18 = HEAP32[i2 >> 2] | 0;
 if ((i18 | 0) == 0) {
  i19 = 0;
  STACKTOP = i3;
  return i19 | 0;
 }
 i13 = i4 | 0;
 i4 = 0;
 i14 = i18;
 while (1) {
  if (i4 >>> 0 >= i14 >>> 0) {
   i19 = 1;
   i16 = 24;
   break;
  }
  if (!(__ZNK7WebCore15StyleProperties19propertyIsImportantENS_13CSSPropertyIDE(i1, HEAP32[(HEAP32[i13 >> 2] | 0) + (i4 << 2) >> 2] | 0) | 0)) {
   i19 = 0;
   i16 = 25;
   break;
  }
  i4 = i4 + 1 | 0;
  i14 = HEAP32[i2 >> 2] | 0;
 }
 if ((i16 | 0) == 24) {
  STACKTOP = i3;
  return i19 | 0;
 } else if ((i16 | 0) == 25) {
  STACKTOP = i3;
  return i19 | 0;
 }
 return 0;
}
function __ZN3WTF6VectorIN7WebCore11CSSPropertyELj4ENS_15CrashOnOverflowEE14shrinkCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  return;
 }
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 if (i5 >>> 0 > i2 >>> 0) {
  i7 = HEAP32[i6 >> 2] | 0;
  i8 = i7 + (i5 << 3) | 0;
  if ((i5 | 0) != (i2 | 0)) {
   i9 = i7 + (i2 << 3) | 0;
   while (1) {
    i7 = HEAP32[i9 + 4 >> 2] | 0;
    do {
     if ((i7 | 0) != 0) {
      i10 = i7 | 0;
      i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
      if ((i11 | 0) == 0) {
       __ZN7WebCore8CSSValue7destroyEv(i7);
       break;
      } else {
       HEAP32[i10 >> 2] = i11;
       break;
      }
     }
    } while (0);
    i9 = i9 + 8 | 0;
    if ((i9 | 0) == (i8 | 0)) {
     break;
    }
   }
  }
  HEAP32[i4 >> 2] = i2;
  i12 = i2;
 } else {
  i12 = i5;
 }
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     if ((i4 >>> 0 > i2 >>> 0 ? i2 : i4) >>> 0 <= 4 >>> 0) {
      break;
     }
     if (i2 >>> 0 > 536870911 >>> 0) {
      _WTFCrash();
     }
     i8 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 3) | 0;
     HEAP32[i3 >> 2] = i8 >>> 3;
     HEAP32[i6 >> 2] = __ZN3WTF11fastReallocEPvj(HEAP32[i6 >> 2] | 0, i8) | 0;
     return;
    }
   } while (0);
   do {
    if (i2 >>> 0 > 4 >>> 0) {
     if (i2 >>> 0 > 536870911 >>> 0) {
      _WTFCrash();
     } else {
      i4 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 3) | 0;
      HEAP32[i3 >> 2] = i4 >>> 3;
      i8 = __ZN3WTF10fastMallocEj(i4) | 0;
      HEAP32[i6 >> 2] = i8;
      i13 = i8;
      break;
     }
    } else {
     i8 = i1 + 12 | 0;
     HEAP32[i6 >> 2] = i8;
     HEAP32[i3 >> 2] = 4;
     i13 = i8;
    }
   } while (0);
   if ((i13 | 0) == (i5 | 0)) {
    break;
   }
   _memcpy(i13 | 0, i5 | 0, i12 << 3) | 0;
  }
 } while (0);
 i12 = i1 + 12 | 0;
 if (!((i12 | 0) == (i5 | 0) | (i5 | 0) == 0)) {
  if ((HEAP32[i6 >> 2] | 0) == (i5 | 0)) {
   HEAP32[i6 >> 2] = 0;
   HEAP32[i3 >> 2] = 0;
  }
  __ZN3WTF8fastFreeEPv(i5 | 0);
 }
 if ((HEAP32[i6 >> 2] | 0) != 0) {
  return;
 }
 HEAP32[i6 >> 2] = i12;
 HEAP32[i3 >> 2] = 4;
 return;
}
function __ZN7WebCore22MutableStyleProperties16parseDeclarationERKN3WTF6StringEPNS_18StyleSheetContentsE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 2416 | 0;
 i5 = i4 | 0;
 i6 = i4 + 72 | 0;
 i7 = i4 + 120 | 0;
 i8 = i4 + 2408 | 0;
 __ZN3WTF6VectorIN7WebCore11CSSPropertyELj4ENS_15CrashOnOverflowEE14shrinkCapacityEj(i1 + 8 | 0, 0);
 i9 = i1 + 4 | 0;
 i10 = HEAP32[i9 >> 2] & 3;
 i11 = i6 | 0;
 HEAP32[i11 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i6);
 __ZN7WebCore16CSSParserContextC1ENS_13CSSParserModeERKNS_3URLE(i5, i10, i6);
 i6 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 | 0;
   i10 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i11 >> 2] = i10;
    break;
   }
  }
 } while (0);
 if ((i3 | 0) != 0) {
  __ZN7WebCore16CSSParserContextaSERKS0_(i5, i3 + 64 | 0) | 0;
  HEAP32[i5 + 52 >> 2] = HEAP32[i9 >> 2] & 3;
 }
 __ZN7WebCore9CSSParserC1ERKNS_16CSSParserContextE(i7, i5);
 i9 = i8 | 0;
 HEAP32[i9 >> 2] = 0;
 __ZN7WebCore9CSSParser16parseDeclarationEPNS_22MutableStylePropertiesERKN3WTF6StringENS3_10PassRefPtrINS_17CSSRuleSourceDataEEEPNS_18StyleSheetContentsE(i7, i1, i2, i8, i3) | 0;
 i3 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i9 = i3 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN7WebCore17CSSRuleSourceDataD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 __ZN7WebCore9CSSParserD1Ev(i7);
 i7 = HEAP32[i5 + 48 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i3 = i7 | 0;
   i8 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i3 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i7 | 0;
 i8 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i7);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i8;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore22MutableStyleProperties34removePrefixedOrUnprefixedPropertyENS_13CSSPropertyIDE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i1 | 0;
 switch (i2 | 0) {
 case 155:
  {
   i4 = 352;
   break;
  }
 case 352:
  {
   i4 = 155;
   break;
  }
 case 353:
  {
   i4 = 156;
   break;
  }
 case 156:
  {
   i4 = 353;
   break;
  }
 case 157:
  {
   i4 = 354;
   break;
  }
 case 154:
  {
   i4 = 351;
   break;
  }
 case 351:
  {
   i4 = 154;
   break;
  }
 case 158:
  {
   i4 = 355;
   break;
  }
 case 355:
  {
   i4 = 158;
   break;
  }
 case 354:
  {
   i4 = 157;
   break;
  }
 default:
  {
   i4 = i2 & 65535;
  }
 }
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 i5 = (i2 & 4 | 0) == 0;
 if (i5) {
  i6 = i2 >>> 3;
  i7 = i6;
  i8 = i3 + 16 | 0;
  i9 = i6;
 } else {
  i6 = i3 + 16 | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  i8 = i6;
  i9 = i2 >>> 3;
 }
 i2 = i3 + 8 | 0;
 i3 = i2;
 i6 = i2 + (i9 << 2) | 0;
 i9 = i7;
 while (1) {
  i10 = i9 - 1 | 0;
  if ((i10 | 0) <= -1) {
   i11 = 31;
   break;
  }
  if (i5) {
   i12 = i6 + (i10 << 1) | 0;
  } else {
   if ((HEAP32[i8 >> 2] | 0) >>> 0 <= i10 >>> 0) {
    i11 = 19;
    break;
   }
   i12 = (HEAP32[i3 >> 2] | 0) + (i10 << 3) | 0;
  }
  if ((HEAP16[i12 >> 1] & 1023) == i4 << 16 >> 16) {
   i11 = 23;
   break;
  } else {
   i9 = i10;
  }
 }
 if ((i11 | 0) == 31) {
  return;
 } else if ((i11 | 0) == 19) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i11 | 0) == 23) {
  if ((i9 | 0) == 0) {
   return;
  }
  i11 = i1 + 8 | 0;
  i4 = HEAP32[i11 >> 2] | 0;
  i12 = HEAP32[i4 + (i10 << 3) + 4 >> 2] | 0;
  do {
   if ((i12 | 0) != 0) {
    i3 = i12 | 0;
    i8 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
    if ((i8 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i12);
     break;
    } else {
     HEAP32[i3 >> 2] = i8;
     break;
    }
   }
  } while (0);
  i12 = i4 + (i9 << 3) | 0;
  i9 = i1 + 16 | 0;
  _memmove(i4 + (i10 << 3) | 0, i12 | 0, (HEAP32[i11 >> 2] | 0) + (HEAP32[i9 >> 2] << 3) - i12 | 0) | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) - 1;
  return;
 }
}
function __ZN7WebCore16CSSParserContextaSERKS0_(i1, i2) {
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
 i5 = i2 + 4 | 0;
 i4 = i1 + 4 | 0;
 i3 = HEAP8[i4] & -2 | HEAP8[i5] & 1;
 HEAP8[i4] = i3;
 HEAP8[i4] = i3 & -3 | HEAP8[i5] & 2;
 HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i2 + 44 >> 2];
 i5 = HEAP32[i2 + 48 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i3 = i5 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i1 + 48 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP32[i1 + 52 >> 2] = HEAP32[i2 + 52 >> 2];
 HEAP8[i1 + 56 | 0] = HEAP8[i2 + 56 | 0] & 1;
 HEAP8[i1 + 57 | 0] = HEAP8[i2 + 57 | 0] & 1;
 HEAP8[i1 + 58 | 0] = HEAP8[i2 + 58 | 0] & 1;
 HEAP8[i1 + 59 | 0] = HEAP8[i2 + 59 | 0] & 1;
 HEAP8[i1 + 60 | 0] = HEAP8[i2 + 60 | 0] & 1;
 HEAP8[i1 + 61 | 0] = HEAP8[i2 + 61 | 0] & 1;
 HEAP8[i1 + 62 | 0] = HEAP8[i2 + 62 | 0] & 1;
 HEAP8[i1 + 63 | 0] = HEAP8[i2 + 63 | 0] & 1;
 HEAP8[i1 + 64 | 0] = HEAP8[i2 + 64 | 0] & 1;
 return i1 | 0;
}
function __ZN7WebCore22MutableStyleProperties26mergeAndOverrideOnConflictERKNS_15StylePropertiesE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 + 4 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 & 4 | 0) == 0) {
  i7 = i6 >>> 3;
 } else {
  i7 = HEAP32[i2 + 16 >> 2] | 0;
 }
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i2 + 8 | 0;
 i9 = i8;
 i10 = i8;
 i11 = i4;
 i12 = i4 + 4 | 0;
 i13 = i1 | 0;
 i14 = i2 + 16 | 0;
 i2 = i8;
 i8 = 0;
 i15 = i6;
 while (1) {
  if ((i15 & 4 | 0) == 0) {
   i16 = i10 + (i8 << 2) | 0;
   i17 = i9 + (i15 >>> 3 << 2) + (i8 << 1) | 0;
  } else {
   if ((HEAP32[i14 >> 2] | 0) >>> 0 <= i8 >>> 0) {
    i18 = 8;
    break;
   }
   i6 = HEAP32[i2 >> 2] | 0;
   i16 = i6 + (i8 << 3) + 4 | 0;
   i17 = i6 + (i8 << 3) | 0;
  }
  i6 = HEAP16[i17 >> 1] | 0;
  i19 = HEAP32[i16 >> 2] | 0;
  HEAP16[i11 >> 1] = i6;
  HEAP32[i12 >> 2] = i19;
  if ((i19 | 0) == 0) {
   i20 = i6;
  } else {
   i6 = i19 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
   i20 = HEAP16[i11 >> 1] | 0;
  }
  if (!((__ZNK7WebCore15StyleProperties19propertyIsImportantENS_13CSSPropertyIDE(i13, i20 & 1023) | 0) & (i20 & 8192) == 0)) {
   __ZN7WebCore22MutableStyleProperties11setPropertyERKNS_11CSSPropertyEPS1_(i1, i4, 0);
  }
  i6 = HEAP32[i12 >> 2] | 0;
  do {
   if ((i6 | 0) != 0) {
    i19 = i6 | 0;
    i21 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
    if ((i21 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i6);
     break;
    } else {
     HEAP32[i19 >> 2] = i21;
     break;
    }
   }
  } while (0);
  i6 = i8 + 1 | 0;
  if (i6 >>> 0 >= i7 >>> 0) {
   i18 = 22;
   break;
  }
  i8 = i6;
  i15 = HEAP32[i5 >> 2] | 0;
 }
 if ((i18 | 0) == 8) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i18 | 0) == 22) {
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 i5 = (i4 & 4 | 0) == 0;
 L1 : do {
  if (i5) {
   i6 = i4 >>> 3;
   i7 = i2 + 8 | 0;
   i8 = i3 & 65535;
   i9 = i7;
   i10 = i7 + (i6 << 2) | 0;
   i11 = i6;
   while (1) {
    i6 = i11 - 1 | 0;
    if ((i6 | 0) <= -1) {
     break L1;
    }
    if ((HEAP16[i10 + (i6 << 1) >> 1] & 1023) == i8 << 16 >> 16) {
     i12 = i11;
     i13 = i6;
     i14 = i7;
     i15 = i9;
     i16 = 10;
     break;
    } else {
     i11 = i6;
    }
   }
  } else {
   i11 = i2 + 16 | 0;
   i9 = i2 + 8 | 0;
   i7 = i3 & 65535;
   i8 = i9;
   i10 = HEAP32[i11 >> 2] | 0;
   while (1) {
    i6 = i10 - 1 | 0;
    if ((i6 | 0) <= -1) {
     break L1;
    }
    if ((HEAP32[i11 >> 2] | 0) >>> 0 <= i6 >>> 0) {
     break;
    }
    if ((HEAP16[(HEAP32[i8 >> 2] | 0) + (i6 << 3) >> 1] & 1023) == i7 << 16 >> 16) {
     i12 = i10;
     i13 = i6;
     i14 = i9;
     i15 = i8;
     i16 = 10;
     break L1;
    } else {
     i10 = i6;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 do {
  if ((i16 | 0) == 10) {
   if ((i12 | 0) == 0) {
    break;
   }
   do {
    if (i5) {
     i17 = i14 + (i13 << 2) | 0;
    } else {
     if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i13 >>> 0) {
      i17 = (HEAP32[i15 >> 2] | 0) + (i13 << 3) + 4 | 0;
      break;
     } else {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
    }
   } while (0);
   i3 = HEAP32[i17 >> 2] | 0;
   HEAP32[i1 >> 2] = i3;
   if ((i3 | 0) == 0) {
    return;
   }
   i4 = i3 | 0;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore22MutableStylePropertiesC2ERKNS_15StylePropertiesE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = i2 + 4 | 0;
 i4 = HEAP32[i3 >> 2] & 3;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i4 | 4;
 i4 = i1 + 8 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = i1 + 20;
 i6 = i1 + 12 | 0;
 HEAP32[i6 >> 2] = 4;
 i7 = i1 + 16 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 52 >> 2] = 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 & 4 | 0) != 0) {
  __ZN3WTF6VectorIN7WebCore11CSSPropertyELj4ENS_15CrashOnOverflowEEaSERKS4_(i4, i2 + 8 | 0) | 0;
  return;
 }
 if (i1 >>> 0 > 39 >>> 0) {
  i4 = __ZN3WTF18fastMallocGoodSizeEj(i1 & -8) | 0;
  HEAP32[i6 >> 2] = i4 >>> 3;
  HEAP32[i5 >> 2] = __ZN3WTF10fastMallocEj(i4) | 0;
 }
 i4 = i2 + 8 | 0;
 i6 = i4;
 i1 = i4;
 i8 = i2 + 16 | 0;
 i2 = i4;
 i4 = 0;
 while (1) {
  i9 = HEAP32[i3 >> 2] | 0;
  i10 = (i9 & 4 | 0) == 0;
  if (i10) {
   i11 = i9 >>> 3;
  } else {
   i11 = HEAP32[i8 >> 2] | 0;
  }
  if (i4 >>> 0 >= i11 >>> 0) {
   i12 = 20;
   break;
  }
  if (i10) {
   i13 = i1 + (i4 << 2) | 0;
   i14 = i6 + (i9 >>> 3 << 2) + (i4 << 1) | 0;
  } else {
   if ((HEAP32[i8 >> 2] | 0) >>> 0 <= i4 >>> 0) {
    i12 = 12;
    break;
   }
   i9 = HEAP32[i2 >> 2] | 0;
   i13 = i9 + (i4 << 3) + 4 | 0;
   i14 = i9 + (i4 << 3) | 0;
  }
  i9 = HEAP16[i14 >> 1] | 0;
  i10 = HEAP32[i13 >> 2] | 0;
  if ((i10 | 0) != 0) {
   i15 = i10 | 0;
   HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
  }
  i15 = HEAP32[i5 >> 2] | 0;
  i16 = HEAP32[i7 >> 2] | 0;
  HEAP16[i15 + (i16 << 3) >> 1] = i9;
  HEAP32[i15 + (i16 << 3) + 4 >> 2] = i10;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  i4 = i4 + 1 | 0;
 }
 if ((i12 | 0) == 12) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i12 | 0) == 20) {
  return;
 }
}
function __ZN7WebCore22MutableStylePropertiesC1ERKNS_15StylePropertiesE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = i2 + 4 | 0;
 i4 = HEAP32[i3 >> 2] & 3;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i4 | 4;
 i4 = i1 + 8 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = i1 + 20;
 i6 = i1 + 12 | 0;
 HEAP32[i6 >> 2] = 4;
 i7 = i1 + 16 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 52 >> 2] = 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 & 4 | 0) != 0) {
  __ZN3WTF6VectorIN7WebCore11CSSPropertyELj4ENS_15CrashOnOverflowEEaSERKS4_(i4, i2 + 8 | 0) | 0;
  return;
 }
 if (i1 >>> 0 > 39 >>> 0) {
  i4 = __ZN3WTF18fastMallocGoodSizeEj(i1 & -8) | 0;
  HEAP32[i6 >> 2] = i4 >>> 3;
  HEAP32[i5 >> 2] = __ZN3WTF10fastMallocEj(i4) | 0;
 }
 i4 = i2 + 8 | 0;
 i6 = i4;
 i1 = i4;
 i8 = i2 + 16 | 0;
 i2 = i4;
 i4 = 0;
 while (1) {
  i9 = HEAP32[i3 >> 2] | 0;
  i10 = (i9 & 4 | 0) == 0;
  if (i10) {
   i11 = i9 >>> 3;
  } else {
   i11 = HEAP32[i8 >> 2] | 0;
  }
  if (i4 >>> 0 >= i11 >>> 0) {
   i12 = 20;
   break;
  }
  if (i10) {
   i13 = i1 + (i4 << 2) | 0;
   i14 = i6 + (i9 >>> 3 << 2) + (i4 << 1) | 0;
  } else {
   if ((HEAP32[i8 >> 2] | 0) >>> 0 <= i4 >>> 0) {
    i12 = 12;
    break;
   }
   i9 = HEAP32[i2 >> 2] | 0;
   i13 = i9 + (i4 << 3) + 4 | 0;
   i14 = i9 + (i4 << 3) | 0;
  }
  i9 = HEAP16[i14 >> 1] | 0;
  i10 = HEAP32[i13 >> 2] | 0;
  if ((i10 | 0) != 0) {
   i15 = i10 | 0;
   HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
  }
  i15 = HEAP32[i5 >> 2] | 0;
  i16 = HEAP32[i7 >> 2] | 0;
  HEAP16[i15 + (i16 << 3) >> 1] = i9;
  HEAP32[i15 + (i16 << 3) + 4 >> 2] = i10;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  i4 = i4 + 1 | 0;
 }
 if ((i12 | 0) == 12) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i12 | 0) == 20) {
  return;
 }
}
function __ZNK7WebCore15StyleProperties18isPropertyImplicitENS_13CSSPropertyIDE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = (i3 & 4 | 0) == 0;
 L1 : do {
  if (i4) {
   i5 = i3 >>> 3;
   i6 = i1 + 8 | 0;
   i7 = i2 & 65535;
   i8 = i6;
   i9 = i6 + (i5 << 2) | 0;
   i6 = i5;
   while (1) {
    i5 = i6 - 1 | 0;
    if ((i5 | 0) <= -1) {
     i10 = 0;
     break;
    }
    if ((HEAP16[i9 + (i5 << 1) >> 1] & 1023) == i7 << 16 >> 16) {
     i11 = i6;
     i12 = i5;
     i13 = i8;
     i14 = i9;
     break L1;
    } else {
     i6 = i5;
    }
   }
   return i10 | 0;
  } else {
   i6 = i1 + 16 | 0;
   i9 = i1 + 8 | 0;
   i8 = i2 & 65535;
   i7 = i9;
   i5 = i9 + (i3 >>> 3 << 2) | 0;
   i9 = HEAP32[i6 >> 2] | 0;
   while (1) {
    i15 = i9 - 1 | 0;
    if ((i15 | 0) <= -1) {
     i10 = 0;
     i16 = 19;
     break;
    }
    if ((HEAP32[i6 >> 2] | 0) >>> 0 <= i15 >>> 0) {
     i16 = 8;
     break;
    }
    if ((HEAP16[(HEAP32[i7 >> 2] | 0) + (i15 << 3) >> 1] & 1023) == i8 << 16 >> 16) {
     i11 = i9;
     i12 = i15;
     i13 = i7;
     i14 = i5;
     break L1;
    } else {
     i9 = i15;
    }
   }
   if ((i16 | 0) == 19) {
    return i10 | 0;
   } else if ((i16 | 0) == 8) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   }
  }
 } while (0);
 if ((i11 | 0) == 0) {
  i10 = 0;
  return i10 | 0;
 }
 do {
  if (i4) {
   i17 = i14 + (i12 << 1) | 0;
  } else {
   if ((HEAP32[i1 + 16 >> 2] | 0) >>> 0 > i12 >>> 0) {
    i17 = (HEAP32[i13 >> 2] | 0) + (i12 << 3) | 0;
    break;
   } else {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   }
  }
 } while (0);
 i10 = (HEAP16[i17 >> 1] & 16384) != 0;
 return i10 | 0;
}
function __ZNK7WebCore15StyleProperties15propertyMatchesENS_13CSSPropertyIDEPKNS_8CSSValueE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i5 = (i4 & 4 | 0) == 0;
 if (i5) {
  i6 = i4 >>> 3;
  i7 = i6;
  i8 = i1 + 16 | 0;
  i9 = i6;
 } else {
  i6 = i1 + 16 | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  i8 = i6;
  i9 = i4 >>> 3;
 }
 i4 = i1 + 8 | 0;
 i6 = i2 & 65535;
 i2 = i4;
 i10 = i4 + (i9 << 2) | 0;
 i9 = i7;
 while (1) {
  i11 = i9 - 1 | 0;
  if ((i11 | 0) <= -1) {
   i12 = 0;
   i13 = 21;
   break;
  }
  if (i5) {
   i14 = i10 + (i11 << 1) | 0;
  } else {
   if ((HEAP32[i8 >> 2] | 0) >>> 0 <= i11 >>> 0) {
    i13 = 8;
    break;
   }
   i14 = (HEAP32[i2 >> 2] | 0) + (i11 << 3) | 0;
  }
  if ((HEAP16[i14 >> 1] & 1023) == i6 << 16 >> 16) {
   i13 = 12;
   break;
  } else {
   i9 = i11;
  }
 }
 if ((i13 | 0) == 21) {
  return i12 | 0;
 } else if ((i13 | 0) == 8) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i13 | 0) == 12) {
  if ((i9 | 0) == 0) {
   i12 = 0;
   return i12 | 0;
  }
  do {
   if (i5) {
    i15 = i4 + (i11 << 2) | 0;
   } else {
    if ((HEAP32[i1 + 16 >> 2] | 0) >>> 0 > i11 >>> 0) {
     i15 = (HEAP32[i2 >> 2] | 0) + (i11 << 3) + 4 | 0;
     break;
    } else {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
     return 0;
    }
   }
  } while (0);
  i12 = __ZNK7WebCore8CSSValue6equalsERKS0_(HEAP32[i15 >> 2] | 0, i3) | 0;
  return i12 | 0;
 }
 return 0;
}
function __ZNK7WebCore15StyleProperties20getPropertyShorthandENS_13CSSPropertyIDE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 i5 = (i4 & 4 | 0) == 0;
 if (i5) {
  i6 = i4 >>> 3;
  i7 = i6;
  i8 = i2 + 16 | 0;
  i9 = i6;
 } else {
  i6 = i2 + 16 | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  i8 = i6;
  i9 = i4 >>> 3;
 }
 i4 = i2 + 8 | 0;
 i6 = i3 & 65535;
 i3 = i4;
 i10 = i4 + (i9 << 2) | 0;
 i9 = i7;
 while (1) {
  i11 = i9 - 1 | 0;
  if ((i11 | 0) <= -1) {
   break;
  }
  if (i5) {
   i12 = i10 + (i11 << 1) | 0;
  } else {
   if ((HEAP32[i8 >> 2] | 0) >>> 0 <= i11 >>> 0) {
    i13 = 8;
    break;
   }
   i12 = (HEAP32[i3 >> 2] | 0) + (i11 << 3) | 0;
  }
  if ((HEAP16[i12 >> 1] & 1023) == i6 << 16 >> 16) {
   i13 = 12;
   break;
  } else {
   i9 = i11;
  }
 }
 if ((i13 | 0) == 8) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 do {
  if ((i13 | 0) == 12) {
   if ((i9 | 0) == 0) {
    break;
   }
   do {
    if (i5) {
     i14 = i10 + (i11 << 1) | 0;
    } else {
     if ((HEAP32[i2 + 16 >> 2] | 0) >>> 0 > i11 >>> 0) {
      i14 = (HEAP32[i3 >> 2] | 0) + (i11 << 3) | 0;
      break;
     } else {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
    }
   } while (0);
   __ZN7WebCore21getPropertyNameStringENS_13CSSPropertyIDE(i1, __ZNK7WebCore21StylePropertyMetadata11shorthandIDEv(i14) | 0);
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore17CSSRuleSourceDataD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 48 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 40 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) == 0) {
      __ZN7WebCore17CSSRuleSourceDataD1Ev(i5);
      __ZN3WTF8fastFreeEPv(i5);
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
  HEAP32[i1 + 44 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF6VectorIN7WebCore21CSSPropertySourceDataELj0ENS_15CrashOnOverflowEED2Ev(i2 + 4 | 0);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = i1 + 32 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 24 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i6);
 return;
}
function __ZNK3WTF12StringAppendINS0_INS_6StringEcEES1_EcvS1_Ev(i1, i2) {
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
 HEAP8[i5 + 4 | 0] = HEAP8[i2 + 4 | 0] | 0;
 i9 = i6 | 0;
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i2 = i8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_12StringAppendINS_6StringEcEES2_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, i6);
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
function __ZN7WebCore22MutableStyleProperties23removeShorthandPropertyENS_13CSSPropertyIDE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 __ZN7WebCore20shorthandForPropertyENS_13CSSPropertyIDE(i4, i2);
 i6 = HEAP32[i4 + 8 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 i8 = __ZN7WebCore22MutableStyleProperties21removePropertiesInSetEPKNS_13CSSPropertyIDEj(i1, HEAP32[i4 >> 2] | 0, i6) | 0;
 switch (i2 | 0) {
 case 154:
  {
   i9 = 351;
   break;
  }
 case 352:
  {
   i9 = 155;
   break;
  }
 case 353:
  {
   i9 = 156;
   break;
  }
 case 354:
  {
   i9 = 157;
   break;
  }
 case 355:
  {
   i9 = 158;
   break;
  }
 case 351:
  {
   i9 = 154;
   break;
  }
 case 155:
  {
   i9 = 352;
   break;
  }
 case 158:
  {
   i9 = 355;
   break;
  }
 case 156:
  {
   i9 = 353;
   break;
  }
 case 157:
  {
   i9 = 354;
   break;
  }
 default:
  {
   i7 = i8;
   STACKTOP = i3;
   return i7 | 0;
  }
 }
 if ((i9 | 0) == (i2 | 0)) {
  i7 = i8;
  STACKTOP = i3;
  return i7 | 0;
 }
 __ZN7WebCore20shorthandForPropertyENS_13CSSPropertyIDE(i5, i9);
 i7 = __ZN7WebCore22MutableStyleProperties21removePropertiesInSetEPKNS_13CSSPropertyIDEj(i1, HEAP32[i5 >> 2] | 0, HEAP32[i5 + 8 >> 2] | 0) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore22MutableStyleProperties21findCSSPropertyWithIDENS_13CSSPropertyIDE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i5 = (i4 & 4 | 0) == 0;
 if (i5) {
  i6 = i4 >>> 3;
  i7 = i6;
  i8 = i3 + 16 | 0;
  i9 = i6;
 } else {
  i6 = i3 + 16 | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  i8 = i6;
  i9 = i4 >>> 3;
 }
 i4 = i3 + 8 | 0;
 i3 = i2 & 65535;
 i2 = i4;
 i6 = i4 + (i9 << 2) | 0;
 i9 = i7;
 while (1) {
  i10 = i9 - 1 | 0;
  if ((i10 | 0) <= -1) {
   i11 = 0;
   i12 = 17;
   break;
  }
  if (i5) {
   i13 = i6 + (i10 << 1) | 0;
  } else {
   if ((HEAP32[i8 >> 2] | 0) >>> 0 <= i10 >>> 0) {
    i12 = 8;
    break;
   }
   i13 = (HEAP32[i2 >> 2] | 0) + (i10 << 3) | 0;
  }
  if ((HEAP16[i13 >> 1] & 1023) == i3 << 16 >> 16) {
   i12 = 12;
   break;
  } else {
   i9 = i10;
  }
 }
 if ((i12 | 0) == 17) {
  return i11 | 0;
 } else if ((i12 | 0) == 8) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i12 | 0) == 12) {
  if ((i9 | 0) == 0) {
   i11 = 0;
   return i11 | 0;
  }
  if ((HEAP32[i1 + 16 >> 2] | 0) >>> 0 <= i10 >>> 0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
   return 0;
  }
  i11 = (HEAP32[i1 + 8 >> 2] | 0) + (i10 << 3) | 0;
  return i11 | 0;
 }
 return 0;
}
function __ZN3WTF6VectorIN7WebCore11CSSPropertyELj256ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 > i2 >>> 0) {
   i8 = 3;
  } else {
   if ((i7 + (i4 << 3) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore11CSSPropertyELj256ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (i2 - i7 >> 3 << 3) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore11CSSPropertyELj256ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP16[i12 + (i6 << 3) >> 1] = HEAP16[i11 >> 1] | 0;
 i2 = i11 + 4 | 0;
 i11 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i12 + (i6 << 3) + 4 >> 2] = i11;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZN3WTF6VectorIN7WebCore11CSSPropertyELj4ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 > i2 >>> 0) {
   i8 = 3;
  } else {
   if ((i7 + (i4 << 3) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore11CSSPropertyELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (i2 - i7 >> 3 << 3) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore11CSSPropertyELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP16[i12 + (i6 << 3) >> 1] = HEAP16[i11 >> 1] | 0;
 i2 = i11 + 4 | 0;
 i11 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i12 + (i6 << 3) + 4 >> 2] = i11;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZN3WTF13StringBuilder6appendERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i2 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = i1 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   i6 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i7 = i6 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
   i7 = i1 + 4 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i6;
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
   HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
   return;
  }
 } while (0);
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 i5 = (i3 | 0) == 0;
 if ((HEAP8[i2 + 12 | 0] & 1) == 0) {
  if (i5) {
   i9 = HEAP32[i2 + 8 >> 2] | 0;
  } else {
   i9 = i3;
  }
  __ZN3WTF13StringBuilder6appendEPKtj(i1, HEAP32[i9 + 8 >> 2] | 0, i4);
  return;
 } else {
  if (i5) {
   i10 = HEAP32[i2 + 8 >> 2] | 0;
  } else {
   i10 = i3;
  }
  __ZN3WTF13StringBuilder6appendEPKhj(i1, HEAP32[i10 + 8 >> 2] | 0, i4);
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
function __ZN7WebCore22MutableStylePropertiesC2EPKNS_11CSSPropertyEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = 5;
 i4 = i1 + 20 | 0;
 i5 = i1 + 8 | 0;
 HEAP32[i5 >> 2] = i4;
 i6 = i1 + 12 | 0;
 HEAP32[i6 >> 2] = 4;
 i7 = i1 + 16 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 52 >> 2] = 0;
 do {
  if (i3 >>> 0 > 4 >>> 0) {
   if (i3 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
   } else {
    i1 = __ZN3WTF18fastMallocGoodSizeEj(i3 << 3) | 0;
    HEAP32[i6 >> 2] = i1 >>> 3;
    i8 = __ZN3WTF10fastMallocEj(i1) | 0;
    HEAP32[i5 >> 2] = i8;
    i9 = i8;
    break;
   }
  } else {
   i9 = i4;
  }
 } while (0);
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = 0;
 i6 = HEAP32[i7 >> 2] | 0;
 i8 = i9;
 while (1) {
  HEAP16[i8 + (i6 << 3) >> 1] = HEAP16[i2 + (i4 << 3) >> 1] | 0;
  i9 = HEAP32[i2 + (i4 << 3) + 4 >> 2] | 0;
  HEAP32[i8 + (i6 << 3) + 4 >> 2] = i9;
  if ((i9 | 0) != 0) {
   i1 = i9 | 0;
   HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
  }
  i1 = (HEAP32[i7 >> 2] | 0) + 1 | 0;
  HEAP32[i7 >> 2] = i1;
  i9 = i4 + 1 | 0;
  if (i9 >>> 0 >= i3 >>> 0) {
   break;
  }
  i4 = i9;
  i6 = i1;
  i8 = HEAP32[i5 >> 2] | 0;
 }
 return;
}
function __ZN7WebCore22MutableStylePropertiesC1EPKNS_11CSSPropertyEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = 5;
 i4 = i1 + 20 | 0;
 i5 = i1 + 8 | 0;
 HEAP32[i5 >> 2] = i4;
 i6 = i1 + 12 | 0;
 HEAP32[i6 >> 2] = 4;
 i7 = i1 + 16 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 52 >> 2] = 0;
 do {
  if (i3 >>> 0 > 4 >>> 0) {
   if (i3 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
   } else {
    i1 = __ZN3WTF18fastMallocGoodSizeEj(i3 << 3) | 0;
    HEAP32[i6 >> 2] = i1 >>> 3;
    i8 = __ZN3WTF10fastMallocEj(i1) | 0;
    HEAP32[i5 >> 2] = i8;
    i9 = i8;
    break;
   }
  } else {
   i9 = i4;
  }
 } while (0);
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = 0;
 i6 = HEAP32[i7 >> 2] | 0;
 i8 = i9;
 while (1) {
  HEAP16[i8 + (i6 << 3) >> 1] = HEAP16[i2 + (i4 << 3) >> 1] | 0;
  i9 = HEAP32[i2 + (i4 << 3) + 4 >> 2] | 0;
  HEAP32[i8 + (i6 << 3) + 4 >> 2] = i9;
  if ((i9 | 0) != 0) {
   i1 = i9 | 0;
   HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
  }
  i1 = (HEAP32[i7 >> 2] | 0) + 1 | 0;
  HEAP32[i7 >> 2] = i1;
  i9 = i4 + 1 | 0;
  if (i9 >>> 0 >= i3 >>> 0) {
   break;
  }
  i4 = i9;
  i6 = i1;
  i8 = HEAP32[i5 >> 2] | 0;
 }
 return;
}
function __ZN3WTF6VectorIN7WebCore21CSSPropertySourceDataELj0ENS_15CrashOnOverflowEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 * 20 & -1) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 + 4 >> 2] | 0;
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
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i8 = i5 | 0;
     i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i8 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i3 = i3 + 20 | 0;
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
 HEAP32[i1 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZNK7WebCore15StyleProperties23addSubresourceStyleURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEEPNS_18StyleSheetContentsE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 & 4 | 0) == 0) {
  i6 = i5 >>> 3;
 } else {
  i6 = HEAP32[i1 + 16 >> 2] | 0;
 }
 if ((i6 | 0) == 0) {
  return;
 }
 i7 = i1 + 8 | 0;
 i8 = i7;
 i9 = i1 + 16 | 0;
 i1 = i7;
 i7 = 0;
 i10 = i5;
 while (1) {
  if ((i10 & 4 | 0) == 0) {
   i11 = i8 + (i7 << 2) | 0;
  } else {
   if ((HEAP32[i9 >> 2] | 0) >>> 0 <= i7 >>> 0) {
    i12 = 8;
    break;
   }
   i11 = (HEAP32[i1 >> 2] | 0) + (i7 << 3) + 4 | 0;
  }
  __ZNK7WebCore8CSSValue23addSubresourceStyleURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEEPKNS_18StyleSheetContentsE(HEAP32[i11 >> 2] | 0, i2, i3);
  i5 = i7 + 1 | 0;
  if (i5 >>> 0 >= i6 >>> 0) {
   i12 = 14;
   break;
  }
  i7 = i5;
  i10 = HEAP32[i4 >> 2] | 0;
 }
 if ((i12 | 0) == 8) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i12 | 0) == 14) {
  return;
 }
}
function __ZNK7WebCore15StyleProperties17findPropertyIndexENS_13CSSPropertyIDE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = (i3 & 4 | 0) == 0;
 if (i4) {
  i5 = i3 >>> 3;
  i6 = i1 + 16 | 0;
 } else {
  i7 = i1 + 16 | 0;
  i5 = HEAP32[i7 >> 2] | 0;
  i6 = i7;
 }
 i7 = i1 + 8 | 0;
 i1 = i7;
 i8 = i2 & 65535;
 i2 = i7;
 i7 = i5;
 while (1) {
  i5 = i7 - 1 | 0;
  if ((i5 | 0) <= -1) {
   i9 = -1;
   i10 = 13;
   break;
  }
  if (i4) {
   i11 = i1 + (i3 >>> 3 << 2) + (i5 << 1) | 0;
  } else {
   if ((HEAP32[i6 >> 2] | 0) >>> 0 <= i5 >>> 0) {
    i10 = 8;
    break;
   }
   i11 = (HEAP32[i2 >> 2] | 0) + (i5 << 3) | 0;
  }
  if ((HEAP16[i11 >> 1] & 1023) == i8 << 16 >> 16) {
   i9 = i5;
   i10 = 14;
   break;
  } else {
   i7 = i5;
  }
 }
 if ((i10 | 0) == 8) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i10 | 0) == 14) {
  return i9 | 0;
 } else if ((i10 | 0) == 13) {
  return i9 | 0;
 }
 return 0;
}
function __ZNK7WebCore15StyleProperties31hasFailedOrCanceledSubresourcesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 4 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 & 4 | 0) == 0) {
  i4 = i3 >>> 3;
  i5 = i1 + 16 | 0;
 } else {
  i3 = i1 + 16 | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  i5 = i3;
 }
 i3 = i1 + 8 | 0;
 i1 = i3;
 i6 = i3;
 i3 = 0;
 while (1) {
  if (i3 >>> 0 >= i4 >>> 0) {
   i7 = 0;
   i8 = 13;
   break;
  }
  if ((HEAP32[i2 >> 2] & 4 | 0) == 0) {
   i9 = i1 + (i3 << 2) | 0;
  } else {
   if ((HEAP32[i5 >> 2] | 0) >>> 0 <= i3 >>> 0) {
    i8 = 8;
    break;
   }
   i9 = (HEAP32[i6 >> 2] | 0) + (i3 << 3) + 4 | 0;
  }
  if (__ZNK7WebCore8CSSValue31hasFailedOrCanceledSubresourcesEv(HEAP32[i9 >> 2] | 0) | 0) {
   i7 = 1;
   i8 = 14;
   break;
  } else {
   i3 = i3 + 1 | 0;
  }
 }
 if ((i8 | 0) == 8) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i8 | 0) == 13) {
  return i7 | 0;
 } else if ((i8 | 0) == 14) {
  return i7 | 0;
 }
 return 0;
}
function __ZN3WTF6VectorIN7WebCore11CSSPropertyELj256ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
   if (i2 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
   } else {
    i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 3) | 0;
    HEAP32[i3 >> 2] = i7 >>> 3;
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
 i1 = i5 | 0;
 _memcpy(i9 | 0, i1 | 0, i6 << 3) | 0;
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
function __ZN3WTF6VectorIN7WebCore11CSSPropertyELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
  if (i2 >>> 0 > 4 >>> 0) {
   if (i2 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
   } else {
    i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 3) | 0;
    HEAP32[i3 >> 2] = i7 >>> 3;
    i8 = __ZN3WTF10fastMallocEj(i7) | 0;
    HEAP32[i4 >> 2] = i8;
    i9 = i8;
    i10 = i1 + 12 | 0;
    break;
   }
  } else {
   i8 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i8;
   HEAP32[i3 >> 2] = 4;
   i9 = i8;
   i10 = i8;
  }
 } while (0);
 i1 = i5 | 0;
 _memcpy(i9 | 0, i1 | 0, i6 << 3) | 0;
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
function __ZN7WebCore22MutableStylePropertiesD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 7](i2);
 }
 i2 = i1 + 16 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 8 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 3) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 + 4 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i3 = i3 + 8 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i1 + 20 | 0) == (i2 | 0) | (i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2 | 0);
 return;
}
function __ZN7WebCore22MutableStylePropertiesD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 7](i2);
 }
 i2 = i1 + 16 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 8 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 3) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 + 4 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i3 = i3 + 8 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i1 + 20 | 0) == (i2 | 0) | (i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2 | 0);
 return;
}
function __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDENS_10CSSValueIDEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 __ZN7WebCore12CSSValuePool21createIdentifierValueENS_10CSSValueIDE(i7, __ZN7WebCore12cssValuePoolEv() | 0, i3);
 i3 = HEAP32[i7 >> 2] | 0;
 HEAP16[i6 >> 1] = (i4 & 1) << 13 | i2 & 1023 | ((__ZN7WebCore11CSSProperty19isInheritedPropertyENS_13CSSPropertyIDE(i2) | 0) & 1) << 15;
 i2 = i6 + 4 | 0;
 HEAP32[i2 >> 2] = i3;
 __ZN7WebCore22MutableStyleProperties11setPropertyERKNS_11CSSPropertyEPS1_(i1, i6, 0);
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i5;
  return 1;
 }
 i2 = i6 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i6);
  STACKTOP = i5;
  return 1;
 } else {
  HEAP32[i2 >> 2] = i1;
  STACKTOP = i5;
  return 1;
 }
 return 0;
}
function __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDES1_b(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 __ZN7WebCore12CSSValuePool21createIdentifierValueENS_13CSSPropertyIDE(i7, __ZN7WebCore12cssValuePoolEv() | 0, i3);
 i3 = HEAP32[i7 >> 2] | 0;
 HEAP16[i6 >> 1] = (i4 & 1) << 13 | i2 & 1023 | ((__ZN7WebCore11CSSProperty19isInheritedPropertyENS_13CSSPropertyIDE(i2) | 0) & 1) << 15;
 i2 = i6 + 4 | 0;
 HEAP32[i2 >> 2] = i3;
 __ZN7WebCore22MutableStyleProperties11setPropertyERKNS_11CSSPropertyEPS1_(i1, i6, 0);
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i5;
  return 1;
 }
 i2 = i6 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i6);
  STACKTOP = i5;
  return 1;
 } else {
  HEAP32[i2 >> 2] = i1;
  STACKTOP = i5;
  return 1;
 }
 return 0;
}
function __ZN7WebCore22MutableStyleProperties19addParsedPropertiesERKN3WTF6VectorINS_11CSSPropertyELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i2 + 8 | 0;
 __ZN3WTF6VectorIN7WebCore11CSSPropertyELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i1 + 8 | 0, (HEAP32[i3 >> 2] | 0) + (HEAP32[i1 + 16 >> 2] | 0) | 0);
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  return;
 }
 i4 = i2 | 0;
 i2 = i1 | 0;
 i5 = 0;
 while (1) {
  i6 = (HEAP32[i4 >> 2] | 0) + (i5 << 3) | 0;
  i7 = i6;
  if (__ZNK7WebCore15StyleProperties19propertyIsImportantENS_13CSSPropertyIDE(i2, HEAP16[i7 >> 1] & 1023) | 0) {
   if ((HEAP16[i7 >> 1] & 8192) != 0) {
    i8 = 5;
   }
  } else {
   i8 = 5;
  }
  if ((i8 | 0) == 5) {
   i8 = 0;
   __ZN7WebCore22MutableStyleProperties11setPropertyERKNS_11CSSPropertyEPS1_(i1, i6, 0);
  }
  i5 = i5 + 1 | 0;
  if (i5 >>> 0 >= (HEAP32[i3 >> 2] | 0) >>> 0) {
   break;
  }
 }
 return;
}
function __ZNK7WebCore15StyleProperties21immutableCopyIfNeededEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i3 & 4 | 0) == 0) {
  HEAP32[i1 >> 2] = i2;
  i4 = i2 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
  return;
 }
 i4 = HEAP32[i2 + 8 >> 2] | 0;
 i5 = HEAP32[i2 + 16 >> 2] | 0;
 i2 = __ZN3WTF10fastMallocEj((i5 * 6 & -1) + 8 | 0) | 0;
 i6 = i2;
 HEAP32[i2 >> 2] = 1;
 HEAP32[i2 + 4 >> 2] = i5 << 3 | i3 & 3;
 i3 = i2 + 8 | 0;
 i2 = i3 + ((i5 & 536870911) << 2) | 0;
 if ((i5 | 0) != 0) {
  i7 = 0;
  while (1) {
   HEAP16[i2 + (i7 << 1) >> 1] = HEAP16[i4 + (i7 << 3) >> 1] | 0;
   i8 = HEAP32[i4 + (i7 << 3) + 4 >> 2] | 0;
   HEAP32[i3 + (i7 << 2) >> 2] = i8;
   i9 = i8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   i7 = i7 + 1 | 0;
   if (i7 >>> 0 >= i5 >>> 0) {
    break;
   }
  }
 }
 HEAP32[i1 >> 2] = i6;
 return;
}
function __ZN7WebCoreL18isInitialOrInheritERKN3WTF6StringE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if (!(HEAP8[H_BASE + 200 | 0] | 0)) {
  i2 = __Znwj(4) | 0;
  __ZN3WTF6StringC1EPKc(i2, H_BASE + 96 | 0);
  HEAP32[H_BASE + 224 >> 2] = i2;
  HEAP8[H_BASE + 200 | 0] = 1;
 }
 if (!(HEAP8[H_BASE + 208 | 0] | 0)) {
  i2 = __Znwj(4) | 0;
  __ZN3WTF6StringC1EPKc(i2, H_BASE + 88 | 0);
  HEAP32[H_BASE + 232 >> 2] = i2;
  HEAP8[H_BASE + 208 | 0] = 1;
 }
 i2 = i1 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 4 >> 2] | 0) != 7) {
  i3 = 0;
  return i3 | 0;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplES2_(i1, HEAP32[HEAP32[H_BASE + 224 >> 2] >> 2] | 0) | 0) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i2 >> 2] | 0, HEAP32[HEAP32[H_BASE + 232 >> 2] >> 2] | 0) | 0;
 return i3 | 0;
}
function __ZN7WebCore24ImmutableStyleProperties6createEPKNS_11CSSPropertyEjNS_13CSSParserModeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = __ZN3WTF10fastMallocEj((i3 * 6 & -1) + 8 | 0) | 0;
 i6 = i5;
 HEAP32[i5 >> 2] = 1;
 HEAP32[i5 + 4 >> 2] = i4 & 3 | i3 << 3;
 i4 = i5 + 8 | 0;
 i5 = i4 + ((i3 & 536870911) << 2) | 0;
 if ((i3 | 0) == 0) {
  i7 = i1 | 0;
  HEAP32[i7 >> 2] = i6;
  return;
 } else {
  i8 = 0;
 }
 while (1) {
  HEAP16[i5 + (i8 << 1) >> 1] = HEAP16[i2 + (i8 << 3) >> 1] | 0;
  i9 = HEAP32[i2 + (i8 << 3) + 4 >> 2] | 0;
  HEAP32[i4 + (i8 << 2) >> 2] = i9;
  i10 = i9 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  i8 = i8 + 1 | 0;
  if (i8 >>> 0 >= i3 >>> 0) {
   break;
  }
 }
 i7 = i1 | 0;
 HEAP32[i7 >> 2] = i6;
 return;
}
function __ZN7WebCore22MutableStyleProperties31ensureInlineCSSStyleDeclarationEPNS_13StyledElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 52 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i5 = i4;
  i6 = i5 | 0;
  return i6 | 0;
 }
 i4 = __ZN3WTF10fastMallocEj(20) | 0;
 HEAP32[i4 + 4 >> 2] = 0;
 HEAP32[i4 + 8 >> 2] = i1;
 HEAP32[i4 + 12 >> 2] = 0;
 HEAP32[i4 >> 2] = __ZTVN7WebCore25InlineCSSStyleDeclarationE + 8;
 HEAP32[i4 + 16 >> 2] = i2;
 i2 = HEAP32[i3 >> 2] | 0;
 i1 = i4;
 HEAP32[i3 >> 2] = i1;
 if ((i2 | 0) == 0) {
  i5 = i1;
  i6 = i5 | 0;
  return i6 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 7](i2);
 i5 = HEAP32[i3 >> 2] | 0;
 i6 = i5 | 0;
 return i6 | 0;
}
function __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDERKN3WTF6StringEbPNS_18StyleSheetContentsE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0;
 i6 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   if ((HEAP32[i6 + 4 >> 2] | 0) == 0) {
    break;
   }
   i7 = __ZN7WebCore9CSSParser10parseValueEPNS_22MutableStylePropertiesENS_13CSSPropertyIDERKN3WTF6StringEbNS_13CSSParserModeEPNS_18StyleSheetContentsE(i1, i2, i3, i4, HEAP32[i1 + 4 >> 2] & 3, i5) | 0;
   return i7 | 0;
  }
 } while (0);
 i7 = __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(i1, i2, 0) | 0;
 return i7 | 0;
}
function __ZN7WebCore22MutableStyleProperties25ensureCSSStyleDeclarationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 52 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3;
  i5 = i4 | 0;
  return i5 | 0;
 }
 i3 = __ZN3WTF10fastMallocEj(16) | 0;
 i6 = i3;
 HEAP32[i3 + 4 >> 2] = 0;
 HEAP32[i3 >> 2] = __ZTVN7WebCore30PropertySetCSSStyleDeclarationE + 8;
 HEAP32[i3 + 8 >> 2] = i1;
 HEAP32[i3 + 12 >> 2] = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i6;
 if ((i3 | 0) == 0) {
  i4 = i6;
  i5 = i4 | 0;
  return i5 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 7](i3);
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = i4 | 0;
 return i5 | 0;
}
function __ZN7WebCore24ImmutableStylePropertiesC2EPKNS_11CSSPropertyEjNS_13CSSParserModeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i4 & 3 | i3 << 3;
 i4 = i1 + 8 | 0;
 i1 = i4 + ((i3 & 536870911) << 2) | 0;
 if ((i3 | 0) == 0) {
  return;
 } else {
  i5 = 0;
 }
 while (1) {
  HEAP16[i1 + (i5 << 1) >> 1] = HEAP16[i2 + (i5 << 3) >> 1] | 0;
  i6 = HEAP32[i2 + (i5 << 3) + 4 >> 2] | 0;
  HEAP32[i4 + (i5 << 2) >> 2] = i6;
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  i5 = i5 + 1 | 0;
  if (i5 >>> 0 >= i3 >>> 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore24ImmutableStylePropertiesC1EPKNS_11CSSPropertyEjNS_13CSSParserModeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i4 & 3 | i3 << 3;
 i4 = i1 + 8 | 0;
 i1 = i4 + ((i3 & 536870911) << 2) | 0;
 if ((i3 | 0) == 0) {
  return;
 } else {
  i5 = 0;
 }
 while (1) {
  HEAP16[i1 + (i5 << 1) >> 1] = HEAP16[i2 + (i5 << 3) >> 1] | 0;
  i6 = HEAP32[i2 + (i5 << 3) + 4 >> 2] | 0;
  HEAP32[i4 + (i5 << 2) >> 2] = i6;
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  i5 = i5 + 1 | 0;
  if (i5 >>> 0 >= i3 >>> 0) {
   break;
  }
 }
 return;
}
function __ZNK7WebCore15StyleProperties17PropertyReference7cssNameEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i3 + 4 >> 2] | 0;
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 do {
  if ((i4 & 4 | 0) == 0) {
   i6 = i3 + 8 + (i4 >>> 3 << 2) + (i5 << 1) | 0;
  } else {
   if ((HEAP32[i3 + 16 >> 2] | 0) >>> 0 > i5 >>> 0) {
    i6 = (HEAP32[i3 + 8 >> 2] | 0) + (i5 << 3) | 0;
    break;
   } else {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 __ZN7WebCore21getPropertyNameStringENS_13CSSPropertyIDE(i1, HEAP16[i6 >> 1] & 1023);
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
function __ZN7WebCore24ImmutableStylePropertiesD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 8 | 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 > 7 >>> 0) {
  i4 = 0;
 } else {
  return;
 }
 while (1) {
  i1 = HEAP32[i2 + (i4 << 2) >> 2] | 0;
  i5 = i1;
  i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  if ((i6 | 0) == 0) {
   __ZN7WebCore8CSSValue7destroyEv(i1);
  } else {
   HEAP32[i5 >> 2] = i6;
  }
  i4 = i4 + 1 | 0;
  if (i4 >>> 0 >= (HEAP32[i3 >> 2] | 0) >>> 3 >>> 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore24ImmutableStylePropertiesD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 8 | 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 > 7 >>> 0) {
  i4 = 0;
 } else {
  return;
 }
 while (1) {
  i1 = HEAP32[i2 + (i4 << 2) >> 2] | 0;
  i5 = i1;
  i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  if ((i6 | 0) == 0) {
   __ZN7WebCore8CSSValue7destroyEv(i1);
  } else {
   HEAP32[i5 >> 2] = i6;
  }
  i4 = i4 + 1 | 0;
  if (i4 >>> 0 >= (HEAP32[i3 >> 2] | 0) >>> 3 >>> 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore22MutableStyleProperties17addParsedPropertyERKNS_11CSSPropertyE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2;
 do {
  if (__ZNK7WebCore15StyleProperties19propertyIsImportantENS_13CSSPropertyIDE(i1 | 0, HEAP16[i3 >> 1] & 1023) | 0) {
   if ((HEAP16[i3 >> 1] & 8192) != 0) {
    break;
   }
   return;
  }
 } while (0);
 __ZN7WebCore22MutableStyleProperties11setPropertyERKNS_11CSSPropertyEPS1_(i1, i2, 0);
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
function __ZN7WebCore22MutableStyleProperties6createENS_13CSSParserModeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN3WTF10fastMallocEj(56) | 0;
 HEAP32[i3 >> 2] = 1;
 HEAP32[i3 + 4 >> 2] = i2 & 3 | 4;
 HEAP32[i3 + 8 >> 2] = i3 + 20;
 HEAP32[i3 + 12 >> 2] = 4;
 HEAP32[i3 + 16 >> 2] = 0;
 HEAP32[i3 + 52 >> 2] = 0;
 HEAP32[i1 >> 2] = i3;
 return;
}
function __ZN7WebCore22MutableStyleProperties6createEPKNS_11CSSPropertyEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore22MutableStylePropertiesC2EPKNS_11CSSPropertyEj(i4, i2, i3);
 HEAP32[i1 >> 2] = i4;
 return;
}
function __ZN7WebCore22MutableStylePropertiesC2ENS_13CSSParserModeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i2 & 3 | 4;
 HEAP32[i1 + 8 >> 2] = i1 + 20;
 HEAP32[i1 + 12 >> 2] = 4;
 HEAP32[i1 + 16 >> 2] = 0;
 HEAP32[i1 + 52 >> 2] = 0;
 return;
}
function __ZN7WebCore22MutableStylePropertiesC1ENS_13CSSParserModeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i2 & 3 | 4;
 HEAP32[i1 + 8 >> 2] = i1 + 20;
 HEAP32[i1 + 12 >> 2] = 4;
 HEAP32[i1 + 16 >> 2] = 0;
 HEAP32[i1 + 52 >> 2] = 0;
 return;
}
function __ZNK7WebCore15StyleProperties11mutableCopyEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore22MutableStylePropertiesC2ERKNS_15StylePropertiesE(i3, i2);
 HEAP32[i1 >> 2] = i3;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore15StyleProperties15hasCSSOMWrapperEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 4 >> 2] & 4 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP32[i1 + 52 >> 2] | 0) != 0;
 return i2 | 0;
}
function __ZNK7WebCore15StyleProperties19copyBlockPropertiesEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore15StyleProperties19copyPropertiesInSetEPKNS_13CSSPropertyIDEj(i1, i2, H_BASE + 112 | 0, 21);
 return;
}
function __ZN7WebCore22MutableStyleProperties21removeBlockPropertiesEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22MutableStyleProperties21removePropertiesInSetEPKNS_13CSSPropertyIDEj(i1, H_BASE + 112 | 0, 21) | 0;
 return;
}
function __ZN7WebCore22MutableStyleProperties5clearEv(i1) {
 i1 = i1 | 0;
 __ZN3WTF6VectorIN7WebCore11CSSPropertyELj4ENS_15CrashOnOverflowEE14shrinkCapacityEj(i1 + 8 | 0, 0);
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
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
function __ZN7WebCore22MutableStyleProperties19cssStyleDeclarationEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 52 >> 2] | 0;
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
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
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function b3(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(3);
}
function __ZN7WebCore15StyleProperties18averageSizeInBytesEv() {
 return 32;
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
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore22MutableStylePropertiesD2Ev,b0,__ZN7WebCore24ImmutableStylePropertiesD2Ev,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore22MutableStylePropertiesC2ERKNS_15StylePropertiesE,b1,__ZN7WebCore22MutableStylePropertiesC2ENS_13CSSParserModeE,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZN7WebCore22MutableStylePropertiesC2EPKNS_11CSSPropertyEj,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  var FUNCTION_TABLE_viiii = [b6,b6,__ZN7WebCore24ImmutableStylePropertiesC2EPKNS_11CSSPropertyEjNS_13CSSParserModeE,b6];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZTVN7WebCore25InlineCSSStyleDeclarationE": __ZTVN7WebCore25InlineCSSStyleDeclarationE, "__ZTVN7WebCore30PropertySetCSSStyleDeclarationE": __ZTVN7WebCore30PropertySetCSSStyleDeclarationE }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK3WTF12StringAppendINS0_INS_6StringEcEES1_EcvS1_Ev","_strlen","__ZN7WebCore22MutableStyleProperties26removeEquivalentPropertiesEPKNS_22ComputedStyleExtractorE","__ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDENS_10CSSValueIDEb","__ZN3WTF6VectorIN7WebCore11CSSPropertyELj256ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore22MutableStylePropertiesC2EPKNS_11CSSPropertyEj","__ZN3WTF13tryMakeStringINS_12StringAppendINS_6StringEcEES2_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN3WTF6VectorIN7WebCore11CSSPropertyELj4ENS_15CrashOnOverflowEE14shrinkCapacityEj","__ZN7WebCore22MutableStyleProperties26removeEquivalentPropertiesEPKNS_15StylePropertiesE","__ZNK7WebCore15StyleProperties15hasCSSOMWrapperEv","__ZN7WebCore22MutableStylePropertiesC2ENS_13CSSParserModeE","__ZN3WTF6VectorIN7WebCore11CSSPropertyELj4ENS_15CrashOnOverflowEEaSERKS4_","__ZN3WTF6VectorIN7WebCore11CSSPropertyELj4ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_","__ZN3WTF9HashTableIN7WebCore13CSSPropertyIDES2_NS_17IdentityExtractorENS_7IntHashIjEENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_SD_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_","__ZN3WTF15CrashOnOverflow10overflowedEv","_memcpy","__ZNK7WebCore15StyleProperties20getPropertyShorthandENS_13CSSPropertyIDE","__ZNK7WebCore15StyleProperties9fontValueEv","__ZN7WebCore22MutableStyleProperties19cssStyleDeclarationEv","__ZNK7WebCore15StyleProperties21immutableCopyIfNeededEv","__ZN3WTF13StringBuilder6appendERKS0_","__ZNK7WebCore15StyleProperties33appendFontLonghandValueIfExplicitENS_13CSSPropertyIDERN3WTF13StringBuilderERNS2_6StringE","__ZNK7WebCore15StyleProperties24getLayeredShorthandValueERKNS_22StylePropertyShorthandE","__ZNK7WebCore15StyleProperties19copyPropertiesInSetEPKNS_13CSSPropertyIDEj","__ZNK7WebCore15StyleProperties18isPropertyImplicitENS_13CSSPropertyIDE","__ZN7WebCore22MutableStyleProperties5clearEv","__ZN7WebCore22MutableStyleProperties17addParsedPropertyERKNS_11CSSPropertyE","__ZNK7WebCore15StyleProperties15propertyMatchesENS_13CSSPropertyIDEPKNS_8CSSValueE","__ZN7WebCore22MutableStyleProperties31ensureInlineCSSStyleDeclarationEPNS_13StyledElementE","_memset","__ZNK7WebCore15StyleProperties17PropertyReference7cssTextEv","__ZNK7WebCore15StyleProperties16getPropertyValueENS_13CSSPropertyIDE","__ZN7WebCore22MutableStyleProperties26mergeAndOverrideOnConflictERKNS_15StylePropertiesE","__ZN7WebCore22MutableStyleProperties21removeBlockPropertiesEv","__ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE","__ZN3WTF9HashTableIN7WebCore13CSSPropertyIDES2_NS_17IdentityExtractorENS_7IntHashIjEENS_10HashTraitsIS2_EES7_E6expandEPS2_","__ZN7WebCore22MutableStyleProperties6createEPKNS_11CSSPropertyEj","__ZN7WebCore22MutableStyleProperties34removePrefixedOrUnprefixedPropertyENS_13CSSPropertyIDE","__ZN7WebCore16CSSParserContextaSERKS0_","__ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDERKN3WTF6StringEbPNS_18StyleSheetContentsE","__ZN7WebCore22MutableStyleProperties23removeShorthandPropertyENS_13CSSPropertyIDE","__ZNK7WebCore15StyleProperties6asTextEv","__ZNK7WebCore15StyleProperties19copyBlockPropertiesEv","__ZN3WTF13StringBuilder6appendERKNS_6StringE","__ZN7WebCore22MutableStyleProperties19addParsedPropertiesERKN3WTF6VectorINS_11CSSPropertyELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDEN3WTF10PassRefPtrINS_8CSSValueEEEb","__ZN7WebCore24ImmutableStylePropertiesC2EPKNS_11CSSPropertyEjNS_13CSSParserModeE","__ZNK7WebCore15StyleProperties17findPropertyIndexENS_13CSSPropertyIDE","__ZN7WebCore24ImmutableStyleProperties6createEPKNS_11CSSPropertyEjNS_13CSSParserModeE","__ZN7WebCore22MutableStyleProperties21removePropertiesInSetEPKNS_13CSSPropertyIDEj","__ZN7WebCore22MutableStyleProperties16parseDeclarationERKN3WTF6StringEPNS_18StyleSheetContentsE","__ZN7WebCore22MutableStyleProperties11setPropertyERKNS_11CSSPropertyEPS1_","__ZNK7WebCore15StyleProperties31hasFailedOrCanceledSubresourcesEv","__ZNK7WebCore15StyleProperties19propertyIsImportantENS_13CSSPropertyIDE","__ZN7WebCore22MutableStyleProperties27setPrefixingVariantPropertyERKNS_11CSSPropertyE","__ZN3WTF6VectorIN7WebCore21CSSPropertySourceDataELj0ENS_15CrashOnOverflowEED2Ev","__ZNK7WebCore15StyleProperties18borderSpacingValueERKNS_22StylePropertyShorthandE","__ZN7WebCore22MutableStyleProperties30appendPrefixingVariantPropertyERKNS_11CSSPropertyE","__ZN7WebCore22MutableStyleProperties25ensureCSSStyleDeclarationEv","__ZNK7WebCore15StyleProperties19borderPropertyValueENS0_15CommonValueModeE","__ZN7WebCore24ImmutableStylePropertiesD2Ev","__ZN7WebCore17CSSRuleSourceDataD1Ev","__ZNK7WebCore15StyleProperties11mutableCopyEv","__ZN7WebCoreL18isInitialOrInheritERKN3WTF6StringE","__ZN7WebCore22MutableStylePropertiesC2ERKNS_15StylePropertiesE","__ZNK7WebCore15StyleProperties17getShorthandValueERKNS_22StylePropertyShorthandE","__ZN3WTF6VectorIN7WebCore11CSSPropertyELj4ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDES1_b","__ZNK7WebCore15StyleProperties23addSubresourceStyleURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEEPNS_18StyleSheetContentsE","_memmove","__ZNK7WebCore15StyleProperties10get4ValuesERKNS_22StylePropertyShorthandE","__ZN7WebCore22MutableStyleProperties21findCSSPropertyWithIDENS_13CSSPropertyIDE","__ZNK7WebCore15StyleProperties14getCommonValueERKNS_22StylePropertyShorthandE","__ZNK7WebCore15StyleProperties17PropertyReference7cssNameEv","__ZN7WebCore22MutableStylePropertiesD2Ev","__ZN7WebCore22MutableStyleProperties6createENS_13CSSParserModeE","__ZN7WebCore15StyleProperties18averageSizeInBytesEv","__ZN3WTF6VectorIN7WebCore11CSSPropertyELj256ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_","__ZN3WTF6VectorIN7WebCore11CSSPropertyELj4ENS_15CrashOnOverflowEEaSILj0ES3_EERS4_RKNS0_IS2_XT_ET0_EE","__ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE"]

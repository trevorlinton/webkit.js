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
H_BASE = parentModule["_malloc"](264 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 264;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,115,0,107,0,101,0,119,0,89,0,0,0,0,0,0,0,115,0,107,0,101,0,119,0,88,0,0,0,0,0,0,0,115,0,99,0,97,0,108,0,101,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,116,0,114,0,97,0,110,0,115,0,108,0,97,0,116,0,101,0,0,0,0,0,0,0,114,0,111,0,116,0,97,0,116,0,101,0,0,0,0,0,109,0,97,0,116,0,114,0,105,0,120,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZTTN7WebCore16SVGTransformableE=(H_BASE+96)|0;
  var __ZTVN7WebCore16SVGTransformableE=(H_BASE+8)|0;
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
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore16SVGTransformable19parseTransformValueEjRPKtS2_RNS_12SVGTransformE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, d51 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i6 = i5 | 0;
 i7 = i5 + 24 | 0;
 if ((i1 | 0) == 0) {
  i8 = 0;
  STACKTOP = i5;
  return i8 | 0;
 }
 _memset(i6 | 0, 0, 24) | 0;
 i9 = i6 | 0;
 i10 = HEAP32[H_BASE + 152 + (i1 << 2) >> 2] | 0;
 i11 = HEAP32[H_BASE + 184 + (i1 << 2) >> 2] | 0;
 i12 = HEAP32[i2 >> 2] | 0;
 L4 : do {
  if (i12 >>> 0 < i3 >>> 0) {
   i13 = i12;
   while (1) {
    i14 = HEAP16[i13 >> 1] | 0;
    if (!((i14 << 16 >> 16 | 0) == 32 | (i14 << 16 >> 16 | 0) == 9 | (i14 << 16 >> 16 | 0) == 10 | (i14 << 16 >> 16 | 0) == 13)) {
     i15 = i13;
     break L4;
    }
    i14 = i13 + 2 | 0;
    HEAP32[i2 >> 2] = i14;
    if (i14 >>> 0 < i3 >>> 0) {
     i13 = i14;
    } else {
     i15 = i14;
     break;
    }
   }
  } else {
   i15 = i12;
  }
 } while (0);
 if (i15 >>> 0 >= i3 >>> 0) {
  i8 = 0;
  STACKTOP = i5;
  return i8 | 0;
 }
 if ((HEAP16[i15 >> 1] | 0) != 40) {
  i8 = 0;
  STACKTOP = i5;
  return i8 | 0;
 }
 i12 = i15 + 2 | 0;
 HEAP32[i2 >> 2] = i12;
 L15 : do {
  if (i12 >>> 0 < i3 >>> 0) {
   i15 = i12;
   while (1) {
    i13 = HEAP16[i15 >> 1] | 0;
    if (!((i13 << 16 >> 16 | 0) == 32 | (i13 << 16 >> 16 | 0) == 9 | (i13 << 16 >> 16 | 0) == 10 | (i13 << 16 >> 16 | 0) == 13)) {
     i16 = i15;
     break L15;
    }
    i13 = i15 + 2 | 0;
    HEAP32[i2 >> 2] = i13;
    if (i13 >>> 0 < i3 >>> 0) {
     i15 = i13;
    } else {
     i16 = i13;
     break;
    }
   }
  } else {
   i16 = i12;
  }
 } while (0);
 if (i16 >>> 0 < i3 >>> 0) {
  i17 = 0;
 } else {
  i8 = 0;
  STACKTOP = i5;
  return i8 | 0;
 }
 L22 : while (1) {
  if (!(__ZN7WebCore11parseNumberERPKtS1_Rfb(i2, i3, i6 + (i17 << 2) | 0, 0) | 0)) {
   i8 = 0;
   i18 = 92;
   break;
  }
  i19 = i17 + 1 | 0;
  i20 = HEAP32[i2 >> 2] | 0;
  i21 = i20 >>> 0 < i3 >>> 0;
  if ((i19 | 0) >= (i10 | 0)) {
   i18 = 13;
   break;
  }
  L26 : do {
   if (i21) {
    i16 = HEAP16[i20 >> 1] | 0;
    switch (i16 << 16 >> 16) {
    case 32:
    case 9:
    case 10:
    case 13:
    case 44:
     {
      i22 = i20;
      i23 = i16;
      break;
     }
    default:
     {
      i17 = i19;
      continue L22;
     }
    }
    while (1) {
     if (!((i23 << 16 >> 16 | 0) == 32 | (i23 << 16 >> 16 | 0) == 9 | (i23 << 16 >> 16 | 0) == 10 | (i23 << 16 >> 16 | 0) == 13)) {
      i24 = i22;
      break L26;
     }
     i16 = i22 + 2 | 0;
     HEAP32[i2 >> 2] = i16;
     if (i16 >>> 0 >= i3 >>> 0) {
      i24 = i16;
      break L26;
     }
     i22 = i16;
     i23 = HEAP16[i16 >> 1] | 0;
    }
   } else {
    i24 = i20;
   }
  } while (0);
  L33 : do {
   if (i24 >>> 0 < i3 >>> 0) {
    if ((HEAP16[i24 >> 1] | 0) != 44) {
     i25 = i24;
     break;
    }
    i16 = i24 + 2 | 0;
    HEAP32[i2 >> 2] = i16;
    if (i16 >>> 0 < i3 >>> 0) {
     i26 = i16;
    } else {
     i25 = i16;
     break;
    }
    while (1) {
     i16 = HEAP16[i26 >> 1] | 0;
     if (!((i16 << 16 >> 16 | 0) == 32 | (i16 << 16 >> 16 | 0) == 9 | (i16 << 16 >> 16 | 0) == 10 | (i16 << 16 >> 16 | 0) == 13)) {
      i25 = i26;
      break L33;
     }
     i16 = i26 + 2 | 0;
     HEAP32[i2 >> 2] = i16;
     if (i16 >>> 0 < i3 >>> 0) {
      i26 = i16;
     } else {
      i25 = i16;
      break;
     }
    }
   } else {
    i25 = i24;
   }
  } while (0);
  if (i25 >>> 0 < i3 >>> 0) {
   i17 = i19;
  } else {
   i8 = 0;
   i18 = 93;
   break;
  }
 }
 if ((i18 | 0) == 13) {
  L42 : do {
   if (i21) {
    i17 = i20;
    while (1) {
     i25 = HEAP16[i17 >> 1] | 0;
     if (!((i25 << 16 >> 16 | 0) == 32 | (i25 << 16 >> 16 | 0) == 9 | (i25 << 16 >> 16 | 0) == 10 | (i25 << 16 >> 16 | 0) == 13)) {
      i27 = i17;
      break L42;
     }
     i25 = i17 + 2 | 0;
     HEAP32[i2 >> 2] = i25;
     if (i25 >>> 0 < i3 >>> 0) {
      i17 = i25;
     } else {
      i27 = i25;
      break;
     }
    }
   } else {
    i27 = i20;
   }
  } while (0);
  if (i27 >>> 0 >= i3 >>> 0) {
   i8 = 0;
   STACKTOP = i5;
   return i8 | 0;
  }
  i20 = HEAP16[i27 >> 1] | 0;
  switch (i20 << 16 >> 16) {
  case 32:
  case 9:
  case 10:
  case 13:
  case 44:
   {
    i21 = i27;
    i17 = i20;
    while (1) {
     if (!((i17 << 16 >> 16 | 0) == 32 | (i17 << 16 >> 16 | 0) == 9 | (i17 << 16 >> 16 | 0) == 10 | (i17 << 16 >> 16 | 0) == 13)) {
      i28 = i21;
      break;
     }
     i20 = i21 + 2 | 0;
     HEAP32[i2 >> 2] = i20;
     if (i20 >>> 0 >= i3 >>> 0) {
      i28 = i20;
      break;
     }
     i21 = i20;
     i17 = HEAP16[i20 >> 1] | 0;
    }
    L56 : do {
     if (i28 >>> 0 < i3 >>> 0) {
      if ((HEAP16[i28 >> 1] | 0) != 44) {
       i29 = i28;
       break;
      }
      i17 = i28 + 2 | 0;
      HEAP32[i2 >> 2] = i17;
      if (i17 >>> 0 < i3 >>> 0) {
       i30 = i17;
      } else {
       i29 = i17;
       break;
      }
      while (1) {
       i17 = HEAP16[i30 >> 1] | 0;
       if (!((i17 << 16 >> 16 | 0) == 32 | (i17 << 16 >> 16 | 0) == 9 | (i17 << 16 >> 16 | 0) == 10 | (i17 << 16 >> 16 | 0) == 13)) {
        i29 = i30;
        break L56;
       }
       i17 = i30 + 2 | 0;
       HEAP32[i2 >> 2] = i17;
       if (i17 >>> 0 < i3 >>> 0) {
        i30 = i17;
       } else {
        i29 = i17;
        break;
       }
      }
     } else {
      i29 = i28;
     }
    } while (0);
    i31 = i29 >>> 0 < i3 >>> 0;
    i32 = i29;
    break;
   }
  default:
   {
    i31 = 0;
    i32 = i27;
   }
  }
  if (i32 >>> 0 >= i3 >>> 0) {
   i8 = 0;
   STACKTOP = i5;
   return i8 | 0;
  }
  do {
   if ((HEAP16[i32 >> 1] | 0) == 41) {
    HEAP32[i2 >> 2] = i32 + 2;
    if (i31) {
     i8 = 0;
    } else {
     i33 = 0;
     break;
    }
    STACKTOP = i5;
    return i8 | 0;
   } else {
    do {
     if ((i1 - 2 | 0) >>> 0 < 3 >>> 0) {
      i27 = 0;
      L70 : while (1) {
       if (!(__ZN7WebCore11parseNumberERPKtS1_Rfb(i2, i3, i6 + (i27 + i19 << 2) | 0, 0) | 0)) {
        i8 = 0;
        i18 = 97;
        break;
       }
       i34 = i27 + 1 | 0;
       i35 = HEAP32[i2 >> 2] | 0;
       i36 = i35 >>> 0 < i3 >>> 0;
       if ((i34 | 0) >= (i11 | 0)) {
        i18 = 44;
        break;
       }
       L74 : do {
        if (i36) {
         i29 = HEAP16[i35 >> 1] | 0;
         switch (i29 << 16 >> 16) {
         case 32:
         case 9:
         case 10:
         case 13:
         case 44:
          {
           i37 = i35;
           i38 = i29;
           break;
          }
         default:
          {
           i27 = i34;
           continue L70;
          }
         }
         while (1) {
          if (!((i38 << 16 >> 16 | 0) == 32 | (i38 << 16 >> 16 | 0) == 9 | (i38 << 16 >> 16 | 0) == 10 | (i38 << 16 >> 16 | 0) == 13)) {
           i39 = i37;
           break L74;
          }
          i29 = i37 + 2 | 0;
          HEAP32[i2 >> 2] = i29;
          if (i29 >>> 0 >= i3 >>> 0) {
           i39 = i29;
           break L74;
          }
          i37 = i29;
          i38 = HEAP16[i29 >> 1] | 0;
         }
        } else {
         i39 = i35;
        }
       } while (0);
       L81 : do {
        if (i39 >>> 0 < i3 >>> 0) {
         if ((HEAP16[i39 >> 1] | 0) != 44) {
          i40 = i39;
          break;
         }
         i29 = i39 + 2 | 0;
         HEAP32[i2 >> 2] = i29;
         if (i29 >>> 0 < i3 >>> 0) {
          i41 = i29;
         } else {
          i40 = i29;
          break;
         }
         while (1) {
          i29 = HEAP16[i41 >> 1] | 0;
          if (!((i29 << 16 >> 16 | 0) == 32 | (i29 << 16 >> 16 | 0) == 9 | (i29 << 16 >> 16 | 0) == 10 | (i29 << 16 >> 16 | 0) == 13)) {
           i40 = i41;
           break L81;
          }
          i29 = i41 + 2 | 0;
          HEAP32[i2 >> 2] = i29;
          if (i29 >>> 0 < i3 >>> 0) {
           i41 = i29;
          } else {
           i40 = i29;
           break;
          }
         }
        } else {
         i40 = i39;
        }
       } while (0);
       if (i40 >>> 0 < i3 >>> 0) {
        i27 = i34;
       } else {
        i8 = 0;
        i18 = 98;
        break;
       }
      }
      if ((i18 | 0) == 44) {
       if (i36) {
        i42 = i35;
        i43 = i34;
        i18 = 56;
        break;
       } else {
        i44 = i35;
        i45 = i34;
        break;
       }
      } else if ((i18 | 0) == 97) {
       STACKTOP = i5;
       return i8 | 0;
      } else if ((i18 | 0) == 98) {
       STACKTOP = i5;
       return i8 | 0;
      }
     } else {
      i42 = i32;
      i43 = 0;
      i18 = 56;
     }
    } while (0);
    L92 : do {
     if ((i18 | 0) == 56) {
      i27 = i42;
      while (1) {
       i29 = HEAP16[i27 >> 1] | 0;
       if (!((i29 << 16 >> 16 | 0) == 32 | (i29 << 16 >> 16 | 0) == 9 | (i29 << 16 >> 16 | 0) == 10 | (i29 << 16 >> 16 | 0) == 13)) {
        i44 = i27;
        i45 = i43;
        break L92;
       }
       i29 = i27 + 2 | 0;
       HEAP32[i2 >> 2] = i29;
       if (i29 >>> 0 < i3 >>> 0) {
        i27 = i29;
       } else {
        i44 = i29;
        i45 = i43;
        break;
       }
      }
     }
    } while (0);
    if (i44 >>> 0 >= i3 >>> 0) {
     i8 = 0;
     STACKTOP = i5;
     return i8 | 0;
    }
    i27 = HEAP16[i44 >> 1] | 0;
    switch (i27 << 16 >> 16) {
    case 32:
    case 9:
    case 10:
    case 13:
    case 44:
     {
      i29 = i44;
      i28 = i27;
      while (1) {
       if (!((i28 << 16 >> 16 | 0) == 32 | (i28 << 16 >> 16 | 0) == 9 | (i28 << 16 >> 16 | 0) == 10 | (i28 << 16 >> 16 | 0) == 13)) {
        i46 = i29;
        break;
       }
       i27 = i29 + 2 | 0;
       HEAP32[i2 >> 2] = i27;
       if (i27 >>> 0 >= i3 >>> 0) {
        i46 = i27;
        break;
       }
       i29 = i27;
       i28 = HEAP16[i27 >> 1] | 0;
      }
      L107 : do {
       if (i46 >>> 0 < i3 >>> 0) {
        if ((HEAP16[i46 >> 1] | 0) != 44) {
         i47 = i46;
         break;
        }
        i28 = i46 + 2 | 0;
        HEAP32[i2 >> 2] = i28;
        if (i28 >>> 0 < i3 >>> 0) {
         i48 = i28;
        } else {
         i47 = i28;
         break;
        }
        while (1) {
         i28 = HEAP16[i48 >> 1] | 0;
         if (!((i28 << 16 >> 16 | 0) == 32 | (i28 << 16 >> 16 | 0) == 9 | (i28 << 16 >> 16 | 0) == 10 | (i28 << 16 >> 16 | 0) == 13)) {
          i47 = i48;
          break L107;
         }
         i28 = i48 + 2 | 0;
         HEAP32[i2 >> 2] = i28;
         if (i28 >>> 0 < i3 >>> 0) {
          i48 = i28;
         } else {
          i47 = i28;
          break;
         }
        }
       } else {
        i47 = i46;
       }
      } while (0);
      i49 = i47 >>> 0 < i3 >>> 0;
      i50 = i47;
      break;
     }
    default:
     {
      i49 = 0;
      i50 = i44;
     }
    }
    if (i50 >>> 0 >= i3 >>> 0) {
     i8 = 0;
     STACKTOP = i5;
     return i8 | 0;
    }
    if ((HEAP16[i50 >> 1] | 0) != 41 | i49) {
     i8 = 0;
     STACKTOP = i5;
     return i8 | 0;
    } else {
     HEAP32[i2 >> 2] = i50 + 2;
     i33 = i45;
     break;
    }
   }
  } while (0);
  i45 = i33 + i19 | 0;
  if ((i45 | 0) < 0) {
   i8 = 0;
   STACKTOP = i5;
   return i8 | 0;
  }
  switch (i1 | 0) {
  case 5:
   {
    __ZN7WebCore12SVGTransform8setSkewXEf(i4, +HEAPF32[i9 >> 2]);
    i8 = 1;
    STACKTOP = i5;
    return i8 | 0;
   }
  case 6:
   {
    __ZN7WebCore12SVGTransform8setSkewYEf(i4, +HEAPF32[i9 >> 2]);
    i8 = 1;
    STACKTOP = i5;
    return i8 | 0;
   }
  case 3:
   {
    d51 = +HEAPF32[i9 >> 2];
    if ((i45 | 0) == 1) {
     __ZN7WebCore12SVGTransform8setScaleEff(i4, d51, d51);
     i8 = 1;
     STACKTOP = i5;
     return i8 | 0;
    } else {
     __ZN7WebCore12SVGTransform8setScaleEff(i4, d51, +HEAPF32[i6 + 4 >> 2]);
     i8 = 1;
     STACKTOP = i5;
     return i8 | 0;
    }
    break;
   }
  case 2:
   {
    d51 = +HEAPF32[i9 >> 2];
    if ((i45 | 0) == 1) {
     __ZN7WebCore12SVGTransform12setTranslateEff(i4, d51, +0);
     i8 = 1;
     STACKTOP = i5;
     return i8 | 0;
    } else {
     __ZN7WebCore12SVGTransform12setTranslateEff(i4, d51, +HEAPF32[i6 + 4 >> 2]);
     i8 = 1;
     STACKTOP = i5;
     return i8 | 0;
    }
    break;
   }
  case 4:
   {
    d51 = +HEAPF32[i9 >> 2];
    if ((i45 | 0) == 1) {
     __ZN7WebCore12SVGTransform9setRotateEfff(i4, d51, +0, +0);
     i8 = 1;
     STACKTOP = i5;
     return i8 | 0;
    } else {
     __ZN7WebCore12SVGTransform9setRotateEfff(i4, d51, +HEAPF32[i6 + 4 >> 2], +HEAPF32[i6 + 8 >> 2]);
     i8 = 1;
     STACKTOP = i5;
     return i8 | 0;
    }
    break;
   }
  case 1:
   {
    __ZN7WebCore15AffineTransformC1Edddddd(i7, +HEAPF32[i9 >> 2], +HEAPF32[i6 + 4 >> 2], +HEAPF32[i6 + 8 >> 2], +HEAPF32[i6 + 12 >> 2], +HEAPF32[i6 + 16 >> 2], +HEAPF32[i6 + 20 >> 2]);
    __ZN7WebCore12SVGTransform9setMatrixERKNS_15AffineTransformE(i4, i7);
    i8 = 1;
    STACKTOP = i5;
    return i8 | 0;
   }
  default:
   {
    i8 = 1;
    STACKTOP = i5;
    return i8 | 0;
   }
  }
 } else if ((i18 | 0) == 92) {
  STACKTOP = i5;
  return i8 | 0;
 } else if ((i18 | 0) == 93) {
  STACKTOP = i5;
  return i8 | 0;
 }
 return 0;
}
function __ZN7WebCore16SVGTransformable23parseTransformAttributeERNS_16SVGTransformListERPKtS4_NS0_20TransformParsingModeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 do {
  if ((i4 | 0) == 0) {
   i8 = i1 + 4 | 0;
   if ((HEAP32[i8 >> 2] | 0) == 0) {
    break;
   }
   i9 = i1 + 8 | 0;
   if ((HEAP32[i9 >> 2] | 0) != 0) {
    HEAP32[i9 >> 2] = 0;
   }
   i9 = i1 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   HEAP32[i9 >> 2] = 0;
   HEAP32[i8 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i10);
  }
 } while (0);
 i4 = HEAP32[i2 >> 2] | 0;
 L9 : do {
  if (i4 >>> 0 < i3 >>> 0) {
   i10 = i1 | 0;
   i8 = i1 + 8 | 0;
   i9 = i1 + 4 | 0;
   i11 = i1 | 0;
   i12 = i7;
   i13 = i7;
   i14 = i4;
   while (1) {
    HEAP16[i6 >> 1] = 0;
    L13 : do {
     if (i14 >>> 0 < i3 >>> 0) {
      i15 = i14;
      while (1) {
       i16 = HEAP16[i15 >> 1] | 0;
       if (!((i16 << 16 >> 16 | 0) == 32 | (i16 << 16 >> 16 | 0) == 9 | (i16 << 16 >> 16 | 0) == 10 | (i16 << 16 >> 16 | 0) == 13)) {
        break L13;
       }
       i15 = i15 + 2 | 0;
       HEAP32[i2 >> 2] = i15;
       if (i15 >>> 0 >= i3 >>> 0) {
        break;
       }
      }
     }
    } while (0);
    if (!(__ZN7WebCoreL16parseAndSkipTypeERPKtS1_Rt(i2, i3, i6) | 0)) {
     i17 = 0;
     i18 = 34;
     break;
    }
    __ZN7WebCore12SVGTransformC1Ev(i7);
    if (!(__ZN7WebCore16SVGTransformable19parseTransformValueEjRPKtS2_RNS_12SVGTransformE(HEAPU16[i6 >> 1] | 0, i2, i3, i7) | 0)) {
     i17 = 0;
     i18 = 35;
     break;
    }
    i15 = HEAP32[i8 >> 2] | 0;
    if ((i15 | 0) == (HEAP32[i9 >> 2] | 0)) {
     i16 = i15 + 1 | 0;
     i19 = HEAP32[i11 >> 2] | 0;
     do {
      if (i19 >>> 0 > i7 >>> 0) {
       i18 = 18;
      } else {
       if ((i19 + (i15 << 6) | 0) >>> 0 <= i7 >>> 0) {
        i18 = 18;
        break;
       }
       __ZN3WTF6VectorIN7WebCore12SVGTransformELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i10, i16);
       i20 = HEAP32[i11 >> 2] | 0;
       i21 = i20 + (i12 - i19 >> 6 << 6) | 0;
       i22 = i20;
      }
     } while (0);
     if ((i18 | 0) == 18) {
      i18 = 0;
      __ZN3WTF6VectorIN7WebCore12SVGTransformELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i10, i16);
      i21 = i7;
      i22 = HEAP32[i11 >> 2] | 0;
     }
     _memcpy(i22 + (HEAP32[i8 >> 2] << 6) | 0, i21 | 0, 64) | 0;
    } else {
     _memcpy((HEAP32[i11 >> 2] | 0) + (i15 << 6) | 0, i13 | 0, 64) | 0;
    }
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
    i19 = HEAP32[i2 >> 2] | 0;
    L30 : do {
     if (i19 >>> 0 < i3 >>> 0) {
      i20 = i19;
      while (1) {
       i23 = HEAP16[i20 >> 1] | 0;
       if (!((i23 << 16 >> 16 | 0) == 32 | (i23 << 16 >> 16 | 0) == 9 | (i23 << 16 >> 16 | 0) == 10 | (i23 << 16 >> 16 | 0) == 13)) {
        i24 = i20;
        break L30;
       }
       i23 = i20 + 2 | 0;
       HEAP32[i2 >> 2] = i23;
       if (i23 >>> 0 < i3 >>> 0) {
        i20 = i23;
       } else {
        i24 = i23;
        break;
       }
      }
     } else {
      i24 = i19;
     }
    } while (0);
    do {
     if (i24 >>> 0 < i3 >>> 0) {
      if ((HEAP16[i24 >> 1] | 0) != 44) {
       i25 = 0;
       i26 = i24;
       break;
      }
      i19 = i24 + 2 | 0;
      HEAP32[i2 >> 2] = i19;
      i25 = 1;
      i26 = i19;
     } else {
      i25 = 0;
      i26 = i24;
     }
    } while (0);
    L39 : do {
     if (i26 >>> 0 < i3 >>> 0) {
      i19 = i26;
      while (1) {
       i15 = HEAP16[i19 >> 1] | 0;
       if (!((i15 << 16 >> 16 | 0) == 32 | (i15 << 16 >> 16 | 0) == 9 | (i15 << 16 >> 16 | 0) == 10 | (i15 << 16 >> 16 | 0) == 13)) {
        i27 = i19;
        break L39;
       }
       i15 = i19 + 2 | 0;
       HEAP32[i2 >> 2] = i15;
       if (i15 >>> 0 < i3 >>> 0) {
        i19 = i15;
       } else {
        i27 = i15;
        break;
       }
      }
     } else {
      i27 = i26;
     }
    } while (0);
    if (i27 >>> 0 < i3 >>> 0) {
     i14 = i27;
    } else {
     i28 = i25;
     break L9;
    }
   }
   if ((i18 | 0) == 34) {
    STACKTOP = i5;
    return i17 | 0;
   } else if ((i18 | 0) == 35) {
    STACKTOP = i5;
    return i17 | 0;
   }
  } else {
   i28 = 0;
  }
 } while (0);
 i17 = i28 ^ 1;
 STACKTOP = i5;
 return i17 | 0;
}
function __ZN7WebCoreL16parseAndSkipTypeERPKtS1_Rt(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if (i4 >>> 0 >= i2 >>> 0) {
  i5 = 0;
  return i5 | 0;
 }
 i6 = i2 - i4 | 0;
 if ((HEAP16[i4 >> 1] | 0) == 115) {
  if ((i6 | 0) < 10) {
   i5 = 0;
   return i5 | 0;
  }
  if ((_memcmp(H_BASE + 120 | 0, i4 | 0, 10) | 0) == 0) {
   HEAP32[i1 >> 2] = i4 + 10;
   HEAP16[i3 >> 1] = 5;
   i5 = 1;
   return i5 | 0;
  }
  if ((_memcmp(H_BASE + 104 | 0, i4 | 0, 10) | 0) == 0) {
   HEAP32[i1 >> 2] = i4 + 10;
   HEAP16[i3 >> 1] = 6;
   i5 = 1;
   return i5 | 0;
  }
  if ((_memcmp(H_BASE + 136 | 0, i4 | 0, 10) | 0) != 0) {
   i5 = 0;
   return i5 | 0;
  }
  HEAP32[i1 >> 2] = i4 + 10;
  HEAP16[i3 >> 1] = 3;
  i5 = 1;
  return i5 | 0;
 }
 do {
  if ((i6 | 0) < 18) {
   if ((i6 | 0) < 12) {
    i5 = 0;
   } else {
    break;
   }
   return i5 | 0;
  } else {
   if ((_memcmp(H_BASE + 216 | 0, i4 | 0, 18) | 0) != 0) {
    break;
   }
   HEAP32[i1 >> 2] = i4 + 18;
   HEAP16[i3 >> 1] = 2;
   i5 = 1;
   return i5 | 0;
  }
 } while (0);
 if ((_memcmp(H_BASE + 240 | 0, i4 | 0, 12) | 0) == 0) {
  HEAP32[i1 >> 2] = i4 + 12;
  HEAP16[i3 >> 1] = 4;
  i5 = 1;
  return i5 | 0;
 }
 if ((_memcmp(H_BASE + 256 | 0, i4 | 0, 12) | 0) != 0) {
  i5 = 0;
  return i5 | 0;
 }
 HEAP32[i1 >> 2] = i4 + 12;
 HEAP16[i3 >> 1] = 1;
 i5 = 1;
 return i5 | 0;
}
function __ZN3WTF6VectorIN7WebCore12SVGTransformELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
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
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 + (i6 << 6) | 0;
 if (i5 >>> 0 > 67108863 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 6) | 0;
 HEAP32[i3 >> 2] = i7 >>> 6;
 i5 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i6 | 0) != 0) {
  i6 = i2;
  i7 = i5;
  while (1) {
   _memcpy(i7 | 0, i6 | 0, 64) | 0;
   i5 = i6 + 64 | 0;
   if ((i5 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i5;
    i7 = i7 + 64 | 0;
   }
  }
 }
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore16SVGTransformable18parseTransformTypeERKN3WTF6StringE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 HEAP16[i3 >> 1] = 0;
 i5 = i1 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   HEAP32[i4 >> 2] = 0;
   i6 = 0;
   i7 = 0;
  } else {
   if ((HEAP32[i1 + 16 >> 2] & 32 | 0) == 0) {
    i8 = HEAP32[i1 + 8 >> 2] | 0;
    i9 = i1;
   } else {
    i10 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i1) | 0;
    i8 = i10;
    i9 = HEAP32[i5 >> 2] | 0;
   }
   HEAP32[i4 >> 2] = i8;
   if ((i9 | 0) == 0) {
    i6 = 0;
    i7 = i8;
    break;
   }
   i6 = HEAP32[i9 + 4 >> 2] | 0;
   i7 = i8;
  }
 } while (0);
 __ZN7WebCoreL16parseAndSkipTypeERPKtS1_Rt(i4, i7 + (i6 << 1) | 0, i3) | 0;
 STACKTOP = i2;
 return HEAPU16[i3 >> 1] | 0 | 0;
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
function runPostSets() {
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 96 >> 2] = H_BASE + 48;
 HEAP32[H_BASE + 100 >> 2] = H_BASE + 48;
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
function __ZNK7WebCore16SVGTransformable29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] & 1](i1, i2);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
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
function __ZTv0_n12_N7WebCore16SVGTransformableD0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1 + (HEAP32[(HEAP32[i1 >> 2] | 0) - 12 >> 2] | 0) | 0);
 return;
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
 FUNCTION_TABLE_vii[i1 & 1](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function __ZN7WebCore16SVGTransformableD2Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore16SVGTransformableD0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}
function __ZTv0_n12_N7WebCore16SVGTransformableD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function b3(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(3);
}
function __ZN7WebCore16SVGTransformableD1Ev(i1) {
 i1 = i1 | 0;
 return;
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore16SVGTransformableD0Ev,b0,__ZN7WebCore16SVGTransformableD1Ev,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZNK7WebCore16SVGTransformable29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE,b3];
  var FUNCTION_TABLE_v = [b4,b4,v____cxa_pure_virtual__wrapper,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _memcmp: _memcmp, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _memcmp = Module["_memcmp"] = asm["_memcmp"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_memcmp","__ZN7WebCoreL16parseAndSkipTypeERPKtS1_Rt","_memset","__ZN7WebCore16SVGTransformableD0Ev","__ZTv0_n12_N7WebCore16SVGTransformableD0Ev","__ZN3WTF6VectorIN7WebCore12SVGTransformELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZTv0_n12_N7WebCore16SVGTransformableD1Ev","__ZN7WebCore16SVGTransformable19parseTransformValueEjRPKtS2_RNS_12SVGTransformE","__ZN7WebCore16SVGTransformable23parseTransformAttributeERNS_16SVGTransformListERPKtS4_NS0_20TransformParsingModeE","_memcpy","_strlen","__ZN7WebCore16SVGTransformableD1Ev","__ZN7WebCore16SVGTransformable18parseTransformTypeERKN3WTF6StringE","__ZNK7WebCore16SVGTransformable29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE","__ZN7WebCore16SVGTransformableD2Ev"]

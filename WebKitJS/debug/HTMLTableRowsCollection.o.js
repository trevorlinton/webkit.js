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
var __ZN7WebCore23HTMLTableRowsCollectionC1ERNS_16HTMLTableElementE;
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
  var __ZN7WebCore9HTMLNames5trTagE=env.__ZN7WebCore9HTMLNames5trTagE|0;
  var __ZN7WebCore9HTMLNames8tfootTagE=env.__ZN7WebCore9HTMLNames8tfootTagE|0;
  var __ZN7WebCore9HTMLNames8theadTagE=env.__ZN7WebCore9HTMLNames8theadTagE|0;
  var __ZN7WebCore9HTMLNames8tbodyTagE=env.__ZN7WebCore9HTMLNames8tbodyTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore23HTMLTableRowsCollectionE=(H_BASE+8)|0;
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
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore23HTMLTableRowsCollection8rowAfterEPNS_16HTMLTableElementEPNS_19HTMLTableRowElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i3 = (i2 | 0) != 0;
 L1 : do {
  if (i3) {
   i4 = HEAP32[i2 + 16 >> 2] | 0;
   L3 : do {
    if ((i4 | 0) != (i1 | 0)) {
     i5 = HEAP32[i2 + 28 >> 2] | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     i6 = (HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0) + 12 | 0;
     i7 = i5;
     while (1) {
      if ((HEAP32[i7 + 12 >> 2] & 20 | 0) == 20) {
       if ((HEAP32[(HEAP32[i7 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[i6 >> 2] | 0)) {
        break;
       }
      }
      i5 = HEAP32[i7 + 28 >> 2] | 0;
      if ((i5 | 0) == 0) {
       break L3;
      } else {
       i7 = i5;
      }
     }
     if ((i7 | 0) == 0) {
      break;
     } else {
      i8 = i7;
     }
     return i8 | 0;
    }
   } while (0);
   if ((HEAP32[(HEAP32[i4 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8theadTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   i6 = i4 + 28 | 0;
   while (1) {
    i5 = HEAP32[i6 >> 2] | 0;
    if ((i5 | 0) == 0) {
     i9 = 0;
     i10 = 16;
     break L1;
    }
    if ((HEAP32[i5 + 12 >> 2] & 4 | 0) == 0) {
     i6 = i5 + 28 | 0;
    } else {
     i9 = i5;
     i10 = 16;
     break;
    }
   }
  } else {
   i6 = i1 + 36 | 0;
   while (1) {
    i4 = HEAP32[i6 >> 2] | 0;
    if ((i4 | 0) == 0) {
     i9 = 0;
     i10 = 16;
     break L1;
    }
    if ((HEAP32[i4 + 12 >> 2] & 4 | 0) == 0) {
     i6 = i4 + 28 | 0;
    } else {
     i9 = i4;
     i10 = 16;
     break;
    }
   }
  }
 } while (0);
 L22 : do {
  if ((i10 | 0) == 16) {
   if ((i9 | 0) == 0) {
    break;
   }
   i6 = HEAP32[__ZN7WebCore9HTMLNames8theadTagE >> 2] | 0;
   i4 = (HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0) + 12 | 0;
   i5 = i6 + 12 | 0;
   i11 = i6 + 16 | 0;
   i12 = i9;
   L25 : while (1) {
    i13 = HEAP32[i12 + 44 >> 2] | 0;
    do {
     if ((i13 | 0) == (i6 | 0)) {
      i10 = 21;
     } else {
      if ((HEAP32[i13 + 12 >> 2] | 0) != (HEAP32[i5 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[i13 + 16 >> 2] | 0) == (HEAP32[i11 >> 2] | 0)) {
       i10 = 21;
      }
     }
    } while (0);
    L30 : do {
     if ((i10 | 0) == 21) {
      i10 = 0;
      i13 = HEAP32[i12 + 36 >> 2] | 0;
      if ((i13 | 0) == 0) {
       break;
      } else {
       i14 = i13;
      }
      while (1) {
       if ((HEAP32[i14 + 12 >> 2] & 20 | 0) == 20) {
        if ((HEAP32[(HEAP32[i14 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[i4 >> 2] | 0)) {
         break;
        }
       }
       i13 = HEAP32[i14 + 28 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break L30;
       } else {
        i14 = i13;
       }
      }
      if ((i14 | 0) != 0) {
       break L25;
      }
     }
    } while (0);
    i13 = i12;
    while (1) {
     i13 = HEAP32[i13 + 28 >> 2] | 0;
     if ((i13 | 0) == 0) {
      break L22;
     }
     if ((HEAP32[i13 + 12 >> 2] & 4 | 0) != 0) {
      break;
     }
    }
    i12 = i13;
   }
   i8 = i14;
   return i8 | 0;
  }
 } while (0);
 do {
  if (i3) {
   i14 = HEAP32[i2 + 16 >> 2] | 0;
   i9 = HEAP32[(HEAP32[i14 + 44 >> 2] | 0) + 12 >> 2] | 0;
   if ((i9 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8theadTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i10 = 32;
    break;
   }
   if ((i14 | 0) == (i1 | 0)) {
    i12 = i2 + 28 | 0;
    while (1) {
     i4 = HEAP32[i12 >> 2] | 0;
     if ((i4 | 0) == 0) {
      i15 = 0;
      break;
     }
     if ((HEAP32[i4 + 12 >> 2] & 4 | 0) != 0) {
      i15 = i4;
      break;
     }
     i12 = i4 + 28 | 0;
    }
    i16 = i15;
    i10 = 47;
    break;
   } else {
    if ((i9 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tbodyTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    i12 = i14 + 28 | 0;
    while (1) {
     i4 = HEAP32[i12 >> 2] | 0;
     if ((i4 | 0) == 0) {
      i17 = 0;
      break;
     }
     if ((HEAP32[i4 + 12 >> 2] & 4 | 0) == 0) {
      i12 = i4 + 28 | 0;
     } else {
      i17 = i4;
      break;
     }
    }
    i16 = i17;
    i10 = 47;
    break;
   }
  } else {
   i10 = 32;
  }
 } while (0);
 if ((i10 | 0) == 32) {
  i17 = i1 + 36 | 0;
  while (1) {
   i15 = HEAP32[i17 >> 2] | 0;
   if ((i15 | 0) == 0) {
    i18 = 0;
    break;
   }
   if ((HEAP32[i15 + 12 >> 2] & 4 | 0) == 0) {
    i17 = i15 + 28 | 0;
   } else {
    i18 = i15;
    break;
   }
  }
  i16 = i18;
  i10 = 47;
 }
 L68 : do {
  if ((i10 | 0) == 47) {
   if ((i16 | 0) == 0) {
    break;
   }
   i18 = HEAP32[__ZN7WebCore9HTMLNames8tbodyTagE >> 2] | 0;
   i17 = (HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0) + 12 | 0;
   i15 = i18 + 12 | 0;
   i12 = i18 + 16 | 0;
   i14 = i16;
   L71 : while (1) {
    if ((HEAP32[i14 + 12 >> 2] & 16 | 0) == 0) {
     i19 = HEAP32[i14 + 44 >> 2] | 0;
    } else {
     i9 = HEAP32[i14 + 44 >> 2] | 0;
     if ((HEAP32[i9 + 12 >> 2] | 0) == (HEAP32[i17 >> 2] | 0)) {
      i10 = 52;
      break;
     } else {
      i19 = i9;
     }
    }
    do {
     if ((i19 | 0) == (i18 | 0)) {
      i10 = 56;
     } else {
      if ((HEAP32[i19 + 12 >> 2] | 0) != (HEAP32[i15 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[i19 + 16 >> 2] | 0) == (HEAP32[i12 >> 2] | 0)) {
       i10 = 56;
      }
     }
    } while (0);
    L80 : do {
     if ((i10 | 0) == 56) {
      i10 = 0;
      i13 = HEAP32[i14 + 36 >> 2] | 0;
      if ((i13 | 0) == 0) {
       break;
      } else {
       i20 = i13;
      }
      while (1) {
       if ((HEAP32[i20 + 12 >> 2] & 20 | 0) == 20) {
        if ((HEAP32[(HEAP32[i20 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[i17 >> 2] | 0)) {
         break;
        }
       }
       i13 = HEAP32[i20 + 28 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break L80;
       } else {
        i20 = i13;
       }
      }
      if ((i20 | 0) != 0) {
       i10 = 85;
       break L71;
      }
     }
    } while (0);
    i13 = i14;
    while (1) {
     i13 = HEAP32[i13 + 28 >> 2] | 0;
     if ((i13 | 0) == 0) {
      break L68;
     }
     if ((HEAP32[i13 + 12 >> 2] & 4 | 0) != 0) {
      break;
     }
    }
    i14 = i13;
   }
   if ((i10 | 0) == 52) {
    i8 = i14;
    return i8 | 0;
   } else if ((i10 | 0) == 85) {
    i8 = i20;
    return i8 | 0;
   }
  }
 } while (0);
 L99 : do {
  if (i3) {
   i20 = HEAP32[i2 + 16 >> 2] | 0;
   if ((HEAP32[(HEAP32[i20 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tfootTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i10 = 67;
    break;
   }
   i19 = i20 + 28 | 0;
   while (1) {
    i20 = HEAP32[i19 >> 2] | 0;
    if ((i20 | 0) == 0) {
     i8 = 0;
     break;
    }
    if ((HEAP32[i20 + 12 >> 2] & 4 | 0) == 0) {
     i19 = i20 + 28 | 0;
    } else {
     i21 = i20;
     break L99;
    }
   }
   return i8 | 0;
  } else {
   i10 = 67;
  }
 } while (0);
 L106 : do {
  if ((i10 | 0) == 67) {
   i2 = i1 + 36 | 0;
   while (1) {
    i3 = HEAP32[i2 >> 2] | 0;
    if ((i3 | 0) == 0) {
     i8 = 0;
     break;
    }
    if ((HEAP32[i3 + 12 >> 2] & 4 | 0) == 0) {
     i2 = i3 + 28 | 0;
    } else {
     i21 = i3;
     break L106;
    }
   }
   return i8 | 0;
  }
 } while (0);
 i1 = HEAP32[__ZN7WebCore9HTMLNames8tfootTagE >> 2] | 0;
 i2 = (HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0) + 12 | 0;
 i3 = i1 + 12 | 0;
 i19 = i1 + 16 | 0;
 i14 = i21;
 L113 : while (1) {
  i21 = HEAP32[i14 + 44 >> 2] | 0;
  do {
   if ((i21 | 0) == (i1 | 0)) {
    i10 = 77;
   } else {
    if ((HEAP32[i21 + 12 >> 2] | 0) != (HEAP32[i3 >> 2] | 0)) {
     i22 = i14;
     break;
    }
    if ((HEAP32[i21 + 16 >> 2] | 0) == (HEAP32[i19 >> 2] | 0)) {
     i10 = 77;
    } else {
     i22 = i14;
    }
   }
  } while (0);
  L118 : do {
   if ((i10 | 0) == 77) {
    i10 = 0;
    i21 = HEAP32[i14 + 36 >> 2] | 0;
    if ((i21 | 0) == 0) {
     i22 = i14;
     break;
    } else {
     i23 = i21;
    }
    while (1) {
     if ((HEAP32[i23 + 12 >> 2] & 20 | 0) == 20) {
      if ((HEAP32[(HEAP32[i23 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[i2 >> 2] | 0)) {
       break;
      }
     }
     i21 = HEAP32[i23 + 28 >> 2] | 0;
     if ((i21 | 0) == 0) {
      i22 = i14;
      break L118;
     } else {
      i23 = i21;
     }
    }
    if ((i23 | 0) == 0) {
     i22 = i14;
    } else {
     break L113;
    }
   }
  } while (0);
  while (1) {
   i13 = HEAP32[i22 + 28 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i8 = 0;
    i10 = 92;
    break L113;
   }
   if ((HEAP32[i13 + 12 >> 2] & 4 | 0) == 0) {
    i22 = i13;
   } else {
    i14 = i13;
    continue L113;
   }
  }
 }
 if ((i10 | 0) == 92) {
  return i8 | 0;
 }
 i8 = i23;
 return i8 | 0;
}
function __ZN7WebCore23HTMLTableRowsCollection7lastRowEPNS_16HTMLTableElementE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i2 = i1 + 40 | 0;
 i1 = i2;
 while (1) {
  i3 = HEAP32[i1 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i4 = i2;
   break;
  }
  if ((HEAP32[i3 + 12 >> 2] & 4 | 0) == 0) {
   i1 = i3 + 24 | 0;
  } else {
   i5 = 4;
   break;
  }
 }
 L4 : do {
  if ((i5 | 0) == 4) {
   i1 = HEAP32[__ZN7WebCore9HTMLNames8tfootTagE >> 2] | 0;
   i6 = (HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0) + 12 | 0;
   i7 = i1 + 12 | 0;
   i8 = i1 + 16 | 0;
   i9 = i3;
   L6 : while (1) {
    i10 = HEAP32[i9 + 44 >> 2] | 0;
    do {
     if ((i10 | 0) == (i1 | 0)) {
      i5 = 8;
     } else {
      if ((HEAP32[i10 + 12 >> 2] | 0) != (HEAP32[i7 >> 2] | 0)) {
       i11 = i9;
       break;
      }
      if ((HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i8 >> 2] | 0)) {
       i5 = 8;
      } else {
       i11 = i9;
      }
     }
    } while (0);
    L11 : do {
     if ((i5 | 0) == 8) {
      i5 = 0;
      i10 = HEAP32[i9 + 40 >> 2] | 0;
      if ((i10 | 0) == 0) {
       i11 = i9;
       break;
      } else {
       i12 = i10;
      }
      while (1) {
       if ((HEAP32[i12 + 12 >> 2] & 20 | 0) == 20) {
        if ((HEAP32[(HEAP32[i12 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[i6 >> 2] | 0)) {
         break;
        }
       }
       i10 = HEAP32[i12 + 24 >> 2] | 0;
       if ((i10 | 0) == 0) {
        i11 = i9;
        break L11;
       } else {
        i12 = i10;
       }
      }
      if ((i12 | 0) == 0) {
       i11 = i9;
      } else {
       break L6;
      }
     }
    } while (0);
    while (1) {
     i10 = HEAP32[i11 + 24 >> 2] | 0;
     if ((i10 | 0) == 0) {
      i4 = i2;
      break L4;
     }
     if ((HEAP32[i10 + 12 >> 2] & 4 | 0) == 0) {
      i11 = i10;
     } else {
      i9 = i10;
      continue L6;
     }
    }
   }
   i13 = i12;
   return i13 | 0;
  }
 } while (0);
 while (1) {
  i14 = HEAP32[i4 >> 2] | 0;
  if ((i14 | 0) == 0) {
   i15 = i2;
   break;
  }
  if ((HEAP32[i14 + 12 >> 2] & 4 | 0) == 0) {
   i4 = i14 + 24 | 0;
  } else {
   i5 = 17;
   break;
  }
 }
 L27 : do {
  if ((i5 | 0) == 17) {
   i4 = HEAP32[__ZN7WebCore9HTMLNames8tbodyTagE >> 2] | 0;
   i12 = (HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0) + 12 | 0;
   i11 = i4 + 12 | 0;
   i3 = i4 + 16 | 0;
   i9 = i14;
   L29 : while (1) {
    i6 = HEAP32[i9 + 44 >> 2] | 0;
    if ((HEAP32[i9 + 12 >> 2] & 16 | 0) != 0) {
     if ((HEAP32[i6 + 12 >> 2] | 0) == (HEAP32[i12 >> 2] | 0)) {
      i5 = 20;
      break;
     }
    }
    do {
     if ((i6 | 0) == (i4 | 0)) {
      i5 = 24;
     } else {
      if ((HEAP32[i6 + 12 >> 2] | 0) != (HEAP32[i11 >> 2] | 0)) {
       i16 = i9;
       break;
      }
      if ((HEAP32[i6 + 16 >> 2] | 0) == (HEAP32[i3 >> 2] | 0)) {
       i5 = 24;
      } else {
       i16 = i9;
      }
     }
    } while (0);
    L37 : do {
     if ((i5 | 0) == 24) {
      i5 = 0;
      i6 = HEAP32[i9 + 40 >> 2] | 0;
      if ((i6 | 0) == 0) {
       i16 = i9;
       break;
      } else {
       i17 = i6;
      }
      while (1) {
       if ((HEAP32[i17 + 12 >> 2] & 20 | 0) == 20) {
        if ((HEAP32[(HEAP32[i17 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[i12 >> 2] | 0)) {
         break;
        }
       }
       i6 = HEAP32[i17 + 24 >> 2] | 0;
       if ((i6 | 0) == 0) {
        i16 = i9;
        break L37;
       } else {
        i17 = i6;
       }
      }
      if ((i17 | 0) == 0) {
       i16 = i9;
      } else {
       i5 = 45;
       break L29;
      }
     }
    } while (0);
    while (1) {
     i6 = HEAP32[i16 + 24 >> 2] | 0;
     if ((i6 | 0) == 0) {
      i15 = i2;
      break L27;
     }
     if ((HEAP32[i6 + 12 >> 2] & 4 | 0) == 0) {
      i16 = i6;
     } else {
      i9 = i6;
      continue L29;
     }
    }
   }
   if ((i5 | 0) == 45) {
    i13 = i17;
    return i13 | 0;
   } else if ((i5 | 0) == 20) {
    i13 = i9;
    return i13 | 0;
   }
  }
 } while (0);
 while (1) {
  i18 = HEAP32[i15 >> 2] | 0;
  if ((i18 | 0) == 0) {
   i13 = 0;
   i5 = 52;
   break;
  }
  if ((HEAP32[i18 + 12 >> 2] & 4 | 0) == 0) {
   i15 = i18 + 24 | 0;
  } else {
   break;
  }
 }
 if ((i5 | 0) == 52) {
  return i13 | 0;
 }
 i15 = HEAP32[__ZN7WebCore9HTMLNames8theadTagE >> 2] | 0;
 i17 = (HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0) + 12 | 0;
 i16 = i15 + 12 | 0;
 i2 = i15 + 16 | 0;
 i14 = i18;
 L59 : while (1) {
  i18 = HEAP32[i14 + 44 >> 2] | 0;
  do {
   if ((i18 | 0) == (i15 | 0)) {
    i5 = 37;
   } else {
    if ((HEAP32[i18 + 12 >> 2] | 0) != (HEAP32[i16 >> 2] | 0)) {
     i19 = i14;
     break;
    }
    if ((HEAP32[i18 + 16 >> 2] | 0) == (HEAP32[i2 >> 2] | 0)) {
     i5 = 37;
    } else {
     i19 = i14;
    }
   }
  } while (0);
  L64 : do {
   if ((i5 | 0) == 37) {
    i5 = 0;
    i18 = HEAP32[i14 + 40 >> 2] | 0;
    if ((i18 | 0) == 0) {
     i19 = i14;
     break;
    } else {
     i20 = i18;
    }
    while (1) {
     if ((HEAP32[i20 + 12 >> 2] & 20 | 0) == 20) {
      if ((HEAP32[(HEAP32[i20 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[i17 >> 2] | 0)) {
       break;
      }
     }
     i18 = HEAP32[i20 + 24 >> 2] | 0;
     if ((i18 | 0) == 0) {
      i19 = i14;
      break L64;
     } else {
      i20 = i18;
     }
    }
    if ((i20 | 0) == 0) {
     i19 = i14;
    } else {
     break L59;
    }
   }
  } while (0);
  while (1) {
   i18 = HEAP32[i19 + 24 >> 2] | 0;
   if ((i18 | 0) == 0) {
    i13 = 0;
    i5 = 48;
    break L59;
   }
   if ((HEAP32[i18 + 12 >> 2] & 4 | 0) == 0) {
    i19 = i18;
   } else {
    i14 = i18;
    continue L59;
   }
  }
 }
 if ((i5 | 0) == 48) {
  return i13 | 0;
 }
 i13 = i20;
 return i13 | 0;
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
function __ZN7WebCore23HTMLTableRowsCollection6createERNS_16HTMLTableElementENS_14CollectionTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i3 = __ZN3WTF10fastMallocEj(76) | 0;
 __ZN7WebCore14HTMLCollectionC2ERNS_13ContainerNodeENS_14CollectionTypeENS0_20ElementTraversalTypeE(i3, i2 | 0, 13, 1);
 HEAP32[i3 >> 2] = H_BASE + 16;
 HEAP32[i1 >> 2] = i3;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_iii + 4;
}
function __ZN7WebCore23HTMLTableRowsCollectionC2ERNS_16HTMLTableElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14HTMLCollectionC2ERNS_13ContainerNodeENS_14CollectionTypeENS0_20ElementTraversalTypeE(i1 | 0, i2 | 0, 13, 1);
 HEAP32[i1 >> 2] = H_BASE + 16;
 return;
}
function __ZN7WebCore23HTMLTableRowsCollectionC1ERNS_16HTMLTableElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14HTMLCollectionC2ERNS_13ContainerNodeENS_14CollectionTypeENS0_20ElementTraversalTypeE(i1 | 0, i2 | 0, 13, 1);
 HEAP32[i1 >> 2] = H_BASE + 16;
 return;
}
function __ZNK7WebCore23HTMLTableRowsCollection18customElementAfterEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore23HTMLTableRowsCollection8rowAfterEPNS_16HTMLTableElementEPNS_19HTMLTableRowElementE(HEAP32[i1 + 12 >> 2] | 0, i2) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function iii___ZNK7WebCore14HTMLCollection9namedItemERKN3WTF12AtomicStringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore14HTMLCollection9namedItemERKN3WTF12AtomicStringE(i1 | 0, i2 | 0) | 0;
}
function __ZN7WebCore23HTMLTableRowsCollectionD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14HTMLCollectionD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function vi___ZNK7WebCore14HTMLCollection15updateNameCacheEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZNK7WebCore14HTMLCollection15updateNameCacheEv(i1 | 0);
}
function vi___ZNK7WebCore14HTMLCollection15invalidateCacheEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZNK7WebCore14HTMLCollection15invalidateCacheEv(i1 | 0);
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
function __ZN7WebCore23HTMLTableRowsCollectionD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14HTMLCollectionD2Ev(i1 | 0);
 return;
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
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
  var FUNCTION_TABLE_vi = [b0,b0,vi___ZNK7WebCore14HTMLCollection15updateNameCacheEv__wrapper,b0,vi___ZNK7WebCore14HTMLCollection15invalidateCacheEv__wrapper,b0,__ZN7WebCore23HTMLTableRowsCollectionD0Ev,b0,__ZN7WebCore23HTMLTableRowsCollectionD1Ev,b0,b0,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore23HTMLTableRowsCollectionC2ERNS_16HTMLTableElementE,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4,iii___ZNK7WebCore14HTMLCollection9namedItemERKN3WTF12AtomicStringE__wrapper,b4,__ZNK7WebCore23HTMLTableRowsCollection18customElementAfterEPNS_7ElementE,b4,b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames5trTagE": __ZN7WebCore9HTMLNames5trTagE, "__ZN7WebCore9HTMLNames8tfootTagE": __ZN7WebCore9HTMLNames8tfootTagE, "__ZN7WebCore9HTMLNames8theadTagE": __ZN7WebCore9HTMLNames8theadTagE, "__ZN7WebCore9HTMLNames8tbodyTagE": __ZN7WebCore9HTMLNames8tbodyTagE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore23HTMLTableRowsCollection7lastRowEPNS_16HTMLTableElementE","_strlen","_memset","__ZN7WebCore23HTMLTableRowsCollection8rowAfterEPNS_16HTMLTableElementEPNS_19HTMLTableRowElementE","_memcpy","__ZN7WebCore23HTMLTableRowsCollectionD0Ev","__ZN7WebCore23HTMLTableRowsCollectionC2ERNS_16HTMLTableElementE","__ZN7WebCore23HTMLTableRowsCollectionD1Ev","__ZNK7WebCore23HTMLTableRowsCollection18customElementAfterEPNS_7ElementE","__ZN7WebCore23HTMLTableRowsCollection6createERNS_16HTMLTableElementENS_14CollectionTypeE"]

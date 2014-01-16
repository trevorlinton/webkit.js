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
H_BASE = parentModule["_malloc"](0 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 0;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore16VisitedLinkStateC1ERNS_8DocumentE;
/* no memory initializer */
;
;
;
;
;
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
function invoke_iiiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    return Module["dynCall_iiiiiii"](index,a1,a2,a3,a4,a5,a6);
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
  var __ZN7WebCore9HTMLNames8hrefAttrE=env.__ZN7WebCore9HTMLNames8hrefAttrE|0;
  var __ZN7WebCore10XLinkNames8hrefAttrE=env.__ZN7WebCore10XLinkNames8hrefAttrE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZN7WebCore9HTMLNames4aTagE=env.__ZN7WebCore9HTMLNames4aTagE|0;
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
  var invoke_iiiiiii=env.invoke_iiiiiii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore16VisitedLinkState22invalidateStyleForLinkEy(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = HEAP32[i1 + 12 >> 2] | 0;
 i6 = i2;
 i7 = i5 & i6;
 i8 = i4 + (i7 << 3) | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i8 + 4 >> 2] | 0;
 L4 : do {
  if ((i9 | 0) == (i2 | 0) & (i10 | 0) == (i3 | 0)) {
   i11 = i8;
  } else {
   i12 = (i6 >>> 23) + ~i6 | 0;
   i13 = i12 << 12 ^ i12;
   i12 = i13 >>> 7 ^ i13;
   i13 = i12 << 2 ^ i12;
   i12 = i13 >>> 20 ^ i13 | 1;
   i13 = 0;
   i14 = i7;
   i15 = i10;
   i16 = i9;
   while (1) {
    if ((i16 | 0) == 0 & (i15 | 0) == 0) {
     break;
    }
    i17 = (i13 | 0) == 0 ? i12 : i13;
    i18 = i17 + i14 & i5;
    i19 = i4 + (i18 << 3) | 0;
    i20 = HEAP32[i19 >> 2] | 0;
    i21 = HEAP32[i19 + 4 >> 2] | 0;
    if ((i20 | 0) == (i2 | 0) & (i21 | 0) == (i3 | 0)) {
     i11 = i19;
     break L4;
    } else {
     i13 = i17;
     i14 = i18;
     i15 = i21;
     i16 = i20;
    }
   }
   return;
  }
 } while (0);
 if ((i11 | 0) == 0) {
  return;
 }
 i11 = i1 | 0;
 i1 = HEAP32[i11 >> 2] | 0;
 i4 = i1 + 36 | 0;
 while (1) {
  i5 = HEAP32[i4 >> 2] | 0;
  if ((i5 | 0) == 0) {
   i22 = 53;
   break;
  }
  if ((HEAP32[i5 + 12 >> 2] & 4 | 0) == 0) {
   i4 = i5 + 28 | 0;
  } else {
   i23 = i5;
   i24 = i1;
   break;
  }
 }
 if ((i22 | 0) == 53) {
  return;
 }
 L19 : while (1) {
  i1 = i23;
  i4 = HEAP32[i23 + 12 >> 2] | 0;
  i5 = (i4 & 16 | 0) == 0;
  do {
   if (i5) {
    i22 = 25;
   } else {
    if ((HEAP32[(HEAP32[i23 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames4aTagE >> 2] | 0) + 12 >> 2] | 0)) {
     i22 = 25;
     break;
    }
    i9 = i23 + 56 | 0;
    i10 = HEAP32[i9 >> 2] | 0;
    i7 = HEAP32[i9 + 4 >> 2] | 0;
    if (!((i10 | 0) == 0 & (i7 | 0) == 0)) {
     i25 = i7;
     i26 = i10;
     break;
    }
    i10 = (HEAP32[(HEAP32[i23 + 20 >> 2] | 0) + 8 >> 2] | 0) + 404 | 0;
    i7 = HEAP32[i23 + 48 >> 2] | 0;
    L25 : do {
     if ((i7 | 0) == 0) {
      i27 = __ZN3WTF8nullAtomE;
     } else {
      i6 = HEAP32[i7 + 4 >> 2] | 0;
      if ((i6 & 1 | 0) == 0) {
       i28 = i6 >>> 1 & 134217727;
       i29 = i7 + 20 | 0;
      } else {
       i6 = i7 + 24 | 0;
       i28 = HEAP32[i6 + 8 >> 2] | 0;
       i29 = HEAP32[i6 >> 2] | 0;
      }
      if ((i28 | 0) == 0) {
       i27 = __ZN3WTF8nullAtomE;
       break;
      }
      i6 = HEAP32[__ZN7WebCore9HTMLNames8hrefAttrE >> 2] | 0;
      i8 = i6 + 12 | 0;
      i16 = i6 + 16 | 0;
      i15 = 0;
      while (1) {
       i30 = i29 + (i15 << 3) | 0;
       i14 = HEAP32[i30 >> 2] | 0;
       if ((i14 | 0) == (i6 | 0)) {
        break;
       }
       if ((HEAP32[i14 + 12 >> 2] | 0) == (HEAP32[i8 >> 2] | 0)) {
        if ((HEAP32[i14 + 16 >> 2] | 0) == (HEAP32[i16 >> 2] | 0)) {
         break;
        }
       }
       i14 = i15 + 1 | 0;
       if (i14 >>> 0 < i28 >>> 0) {
        i15 = i14;
       } else {
        i27 = __ZN3WTF8nullAtomE;
        break L25;
       }
      }
      i27 = (i30 | 0) == 0 ? __ZN3WTF8nullAtomE : i29 + (i15 << 3) + 4 | 0;
     }
    } while (0);
    i7 = __ZN7WebCore15visitedLinkHashERKNS_3URLERKN3WTF12AtomicStringE(i10, i27) | 0;
    i16 = tempRet0;
    HEAP32[i9 >> 2] = i7;
    HEAP32[i9 + 4 >> 2] = i16;
    i25 = i16;
    i26 = i7;
   }
  } while (0);
  L40 : do {
   if ((i22 | 0) == 25) {
    i22 = 0;
    if ((i4 & 512 | 0) == 0) {
     i25 = 0;
     i26 = 0;
     break;
    }
    L43 : do {
     if (i5) {
      if ((i4 & 32 | 0) == 0) {
       i25 = 0;
       i26 = 0;
       break L40;
      }
      i31 = __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i1, __ZN7WebCore10XLinkNames8hrefAttrE) | 0;
      i22 = 40;
     } else {
      i7 = HEAP32[i23 + 48 >> 2] | 0;
      if ((i7 | 0) == 0) {
       i32 = __ZN3WTF8nullAtomE;
       break;
      }
      i16 = HEAP32[i7 + 4 >> 2] | 0;
      if ((i16 & 1 | 0) == 0) {
       i33 = i16 >>> 1 & 134217727;
       i34 = i7 + 20 | 0;
      } else {
       i16 = i7 + 24 | 0;
       i33 = HEAP32[i16 + 8 >> 2] | 0;
       i34 = HEAP32[i16 >> 2] | 0;
      }
      if ((i33 | 0) == 0) {
       i32 = __ZN3WTF8nullAtomE;
       break;
      }
      i16 = HEAP32[__ZN7WebCore9HTMLNames8hrefAttrE >> 2] | 0;
      i7 = i16 + 12 | 0;
      i8 = i16 + 16 | 0;
      i6 = 0;
      while (1) {
       i35 = i34 + (i6 << 3) | 0;
       i14 = HEAP32[i35 >> 2] | 0;
       if ((i14 | 0) == (i16 | 0)) {
        break;
       }
       if ((HEAP32[i14 + 12 >> 2] | 0) == (HEAP32[i7 >> 2] | 0)) {
        if ((HEAP32[i14 + 16 >> 2] | 0) == (HEAP32[i8 >> 2] | 0)) {
         break;
        }
       }
       i14 = i6 + 1 | 0;
       if (i14 >>> 0 < i33 >>> 0) {
        i6 = i14;
       } else {
        i32 = __ZN3WTF8nullAtomE;
        break L43;
       }
      }
      i31 = (i35 | 0) == 0 ? __ZN3WTF8nullAtomE : i34 + (i6 << 3) + 4 | 0;
      i22 = 40;
     }
    } while (0);
    if ((i22 | 0) == 40) {
     i22 = 0;
     if ((i31 | 0) == 0) {
      i25 = 0;
      i26 = 0;
      break;
     } else {
      i32 = i31;
     }
    }
    i9 = __ZN7WebCore15visitedLinkHashERKNS_3URLERKN3WTF12AtomicStringE(i24 + 404 | 0, i32) | 0;
    i25 = tempRet0;
    i26 = i9;
   }
  } while (0);
  if ((i26 | 0) == (i2 | 0) & (i25 | 0) == (i3 | 0)) {
   __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i23, 32768);
  }
  i1 = HEAP32[i23 + 36 >> 2] | 0;
  do {
   if ((i1 | 0) == 0) {
    i4 = HEAP32[i23 + 28 >> 2] | 0;
    if ((i4 | 0) != 0) {
     i36 = i4;
     break;
    }
    i4 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i23) | 0;
    if ((i4 | 0) == 0) {
     i22 = 57;
     break L19;
    } else {
     i36 = i4;
    }
   } else {
    i36 = i1;
   }
  } while (0);
  if ((HEAP32[i36 + 12 >> 2] & 4 | 0) == 0) {
   i1 = i36;
   while (1) {
    i4 = HEAP32[i1 + 28 >> 2] | 0;
    if ((i4 | 0) == 0) {
     i5 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i1) | 0;
     if ((i5 | 0) == 0) {
      i22 = 58;
      break L19;
     } else {
      i37 = i5;
     }
    } else {
     i37 = i4;
    }
    if ((HEAP32[i37 + 12 >> 2] & 4 | 0) == 0) {
     i1 = i37;
    } else {
     i38 = i37;
     break;
    }
   }
  } else {
   i38 = i36;
  }
  i23 = i38;
  i24 = HEAP32[i11 >> 2] | 0;
 }
 if ((i22 | 0) == 57) {
  return;
 } else if ((i22 | 0) == 58) {
  return;
 }
}
function __ZN7WebCore16VisitedLinkState26determineLinkStateSlowCaseERNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 + 12 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 & 512 | 0) == 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 L4 : do {
  if ((i7 & 16 | 0) == 0) {
   if ((i7 & 32 | 0) == 0) {
    i8 = 0;
    STACKTOP = i3;
    return i8 | 0;
   } else {
    i9 = __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i2, __ZN7WebCore10XLinkNames8hrefAttrE) | 0;
    i10 = 16;
    break;
   }
  } else {
   i11 = HEAP32[i2 + 48 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i12 = __ZN3WTF8nullAtomE;
    break;
   }
   i13 = HEAP32[i11 + 4 >> 2] | 0;
   if ((i13 & 1 | 0) == 0) {
    i14 = i13 >>> 1 & 134217727;
    i15 = i11 + 20 | 0;
   } else {
    i13 = i11 + 24 | 0;
    i14 = HEAP32[i13 + 8 >> 2] | 0;
    i15 = HEAP32[i13 >> 2] | 0;
   }
   if ((i14 | 0) == 0) {
    i12 = __ZN3WTF8nullAtomE;
    break;
   }
   i13 = HEAP32[__ZN7WebCore9HTMLNames8hrefAttrE >> 2] | 0;
   i11 = i13 + 12 | 0;
   i16 = i13 + 16 | 0;
   i17 = 0;
   while (1) {
    i18 = i15 + (i17 << 3) | 0;
    i19 = HEAP32[i18 >> 2] | 0;
    if ((i19 | 0) == (i13 | 0)) {
     break;
    }
    if ((HEAP32[i19 + 12 >> 2] | 0) == (HEAP32[i11 >> 2] | 0)) {
     if ((HEAP32[i19 + 16 >> 2] | 0) == (HEAP32[i16 >> 2] | 0)) {
      break;
     }
    }
    i19 = i17 + 1 | 0;
    if (i19 >>> 0 < i14 >>> 0) {
     i17 = i19;
    } else {
     i12 = __ZN3WTF8nullAtomE;
     break L4;
    }
   }
   i9 = (i18 | 0) == 0 ? __ZN3WTF8nullAtomE : i15 + (i17 << 3) + 4 | 0;
   i10 = 16;
  }
 } while (0);
 do {
  if ((i10 | 0) == 16) {
   if ((i9 | 0) == 0) {
    i8 = 0;
   } else {
    i12 = i9;
    break;
   }
   STACKTOP = i3;
   return i8 | 0;
  }
 } while (0);
 i9 = HEAP32[i12 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 if ((HEAP32[i9 + 4 >> 2] | 0) == 0) {
  i8 = 2;
  STACKTOP = i3;
  return i8 | 0;
 }
 do {
  if ((HEAP32[i6 >> 2] & 16 | 0) == 0) {
   i10 = 35;
  } else {
   if ((HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames4aTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i10 = 35;
    break;
   }
   i9 = i2 + 56 | 0;
   i15 = HEAP32[i9 >> 2] | 0;
   i18 = HEAP32[i9 + 4 >> 2] | 0;
   if (!((i15 | 0) == 0 & (i18 | 0) == 0)) {
    HEAP32[i4 >> 2] = i15;
    HEAP32[i4 + 4 >> 2] = i18;
    break;
   }
   i18 = (HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 404 | 0;
   i15 = HEAP32[i2 + 48 >> 2] | 0;
   L39 : do {
    if ((i15 | 0) == 0) {
     i20 = __ZN3WTF8nullAtomE;
    } else {
     i14 = HEAP32[i15 + 4 >> 2] | 0;
     if ((i14 & 1 | 0) == 0) {
      i21 = i14 >>> 1 & 134217727;
      i22 = i15 + 20 | 0;
     } else {
      i14 = i15 + 24 | 0;
      i21 = HEAP32[i14 + 8 >> 2] | 0;
      i22 = HEAP32[i14 >> 2] | 0;
     }
     if ((i21 | 0) == 0) {
      i20 = __ZN3WTF8nullAtomE;
      break;
     }
     i14 = HEAP32[__ZN7WebCore9HTMLNames8hrefAttrE >> 2] | 0;
     i7 = i14 + 12 | 0;
     i16 = i14 + 16 | 0;
     i11 = 0;
     while (1) {
      i23 = i22 + (i11 << 3) | 0;
      i13 = HEAP32[i23 >> 2] | 0;
      if ((i13 | 0) == (i14 | 0)) {
       break;
      }
      if ((HEAP32[i13 + 12 >> 2] | 0) == (HEAP32[i7 >> 2] | 0)) {
       if ((HEAP32[i13 + 16 >> 2] | 0) == (HEAP32[i16 >> 2] | 0)) {
        break;
       }
      }
      i13 = i11 + 1 | 0;
      if (i13 >>> 0 < i21 >>> 0) {
       i11 = i13;
      } else {
       i20 = __ZN3WTF8nullAtomE;
       break L39;
      }
     }
     i20 = (i23 | 0) == 0 ? __ZN3WTF8nullAtomE : i22 + (i11 << 3) + 4 | 0;
    }
   } while (0);
   i15 = __ZN7WebCore15visitedLinkHashERKNS_3URLERKN3WTF12AtomicStringE(i18, i20) | 0;
   i17 = tempRet0;
   HEAP32[i9 >> 2] = i15;
   HEAP32[i9 + 4 >> 2] = i17;
   i24 = i17;
   i25 = i15;
   i10 = 36;
  }
 } while (0);
 if ((i10 | 0) == 35) {
  i20 = __ZN7WebCore15visitedLinkHashERKNS_3URLERKN3WTF12AtomicStringE((HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 404 | 0, i12) | 0;
  i24 = tempRet0;
  i25 = i20;
  i10 = 36;
 }
 do {
  if ((i10 | 0) == 36) {
   HEAP32[i4 >> 2] = i25;
   HEAP32[i4 + 4 >> 2] = i24;
   if ((i25 | 0) == 0 & (i24 | 0) == 0) {
    i8 = 1;
   } else {
    break;
   }
   STACKTOP = i3;
   return i8 | 0;
  }
 } while (0);
 i24 = i2 + 20 | 0;
 i2 = HEAP32[(HEAP32[(HEAP32[i24 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = 1;
  STACKTOP = i3;
  return i8 | 0;
 }
 i25 = HEAP32[i2 + 32 >> 2] | 0;
 if ((i25 | 0) == 0) {
  i8 = 1;
  STACKTOP = i3;
  return i8 | 0;
 }
 __ZN3WTF9HashTableIyyNS_17IdentityExtractorEN7WebCore12LinkHashHashENS_10HashTraitsIyEES5_E3addINS_22IdentityHashTranslatorIS3_EERKySB_EENS_18HashTableAddResultINS_17HashTableIteratorIyyS1_S3_S5_S5_EEEEOT0_OT1_(i5, i1 + 4 | 0, i4, i4);
 i1 = __ZN7WebCore18platformStrategiesEv() | 0;
 i5 = i1 + 32 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 36 >> 2] & 1](i1) | 0;
  HEAP32[i5 >> 2] = i10;
  i26 = i10;
 } else {
  i26 = i2;
 }
 i2 = FUNCTION_TABLE_iiiiiii[HEAP32[HEAP32[i26 >> 2] >> 2] & 1](i26, i25, HEAP32[i4 >> 2] | 0, HEAP32[i4 + 4 >> 2] | 0, (HEAP32[(HEAP32[i24 >> 2] | 0) + 8 >> 2] | 0) + 404 | 0, i12) | 0;
 i8 = i2 ? 2 : 1;
 STACKTOP = i3;
 return i8 | 0;
}
function __ZN3WTF9HashTableIyyNS_17IdentityExtractorEN7WebCore12LinkHashHashENS_10HashTraitsIyEES5_E3addINS_22IdentityHashTranslatorIS3_EERKySB_EENS_18HashTableAddResultINS_17HashTableIteratorIyyS1_S3_S5_S5_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
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
  __ZN3WTF9HashTableIyyNS_17IdentityExtractorEN7WebCore12LinkHashHashENS_10HashTraitsIyEES5_E6rehashEiPy(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = i8;
 i7 = i3 & i6;
 i11 = i10 + (i7 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = HEAP32[i11 + 4 >> 2] | 0;
 do {
  if ((i12 | 0) == 0 & (i13 | 0) == 0) {
   i14 = i11;
   i15 = 11;
  } else {
   i16 = (i3 >>> 23) + ~i3 | 0;
   i17 = i16 << 12 ^ i16;
   i16 = i17 >>> 7 ^ i17;
   i17 = i16 << 2 ^ i16;
   i16 = i17 >>> 20 ^ i17 | 1;
   i17 = 0;
   i18 = 0;
   i19 = i7;
   i20 = i11;
   i21 = i13;
   i22 = i12;
   while (1) {
    if ((i22 | 0) == (i8 | 0) & (i21 | 0) == (i9 | 0)) {
     i15 = 8;
     break;
    }
    i23 = (i22 | 0) == (-1 | 0) & (i21 | 0) == (-1 | 0) ? i20 : i18;
    i24 = (i17 | 0) == 0 ? i16 : i17;
    i25 = i24 + i19 & i6;
    i26 = i10 + (i25 << 3) | 0;
    i27 = HEAP32[i26 >> 2] | 0;
    i28 = HEAP32[i26 + 4 >> 2] | 0;
    if ((i27 | 0) == 0 & (i28 | 0) == 0) {
     i15 = 10;
     break;
    } else {
     i17 = i24;
     i18 = i23;
     i19 = i25;
     i20 = i26;
     i21 = i28;
     i22 = i27;
    }
   }
   if ((i15 | 0) == 8) {
    i22 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i21 = i1;
    HEAP32[i21 >> 2] = i20;
    HEAP32[i21 + 4 >> 2] = i22;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i15 | 0) == 10) {
    if ((i23 | 0) == 0) {
     i14 = i26;
     i15 = 11;
     break;
    }
    HEAP32[i23 >> 2] = 0;
    HEAP32[i23 + 4 >> 2] = 0;
    i22 = i2 + 16 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) - 1;
    i29 = i23;
    i30 = i22;
    break;
   }
  }
 } while (0);
 if ((i15 | 0) == 11) {
  i29 = i14;
  i30 = i2 + 16 | 0;
 }
 i14 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i29 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i29 + 4 >> 2] = i14;
 i14 = i2 + 12 | 0;
 i4 = (HEAP32[i14 >> 2] | 0) + 1 | 0;
 HEAP32[i14 >> 2] = i4;
 i14 = i2 + 4 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 if (((HEAP32[i30 >> 2] | 0) + i4 << 1 | 0) < (i15 | 0)) {
  i31 = i29;
  i32 = i15;
 } else {
  if ((i15 | 0) == 0) {
   i33 = 8;
  } else {
   i30 = i15 << 1;
   i33 = (i4 * 6 & -1 | 0) < (i30 | 0) ? i15 : i30;
  }
  i30 = __ZN3WTF9HashTableIyyNS_17IdentityExtractorEN7WebCore12LinkHashHashENS_10HashTraitsIyEES5_E6rehashEiPy(i2, i33, i29) | 0;
  i31 = i30;
  i32 = HEAP32[i14 >> 2] | 0;
 }
 i14 = (HEAP32[i5 >> 2] | 0) + (i32 << 3) | 0;
 i32 = i1;
 HEAP32[i32 >> 2] = i31;
 HEAP32[i32 + 4 >> 2] = i14;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIyyNS_17IdentityExtractorEN7WebCore12LinkHashHashENS_10HashTraitsIyEES5_E6rehashEiPy(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
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
  i2 = i7 + (i11 << 3) | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  i14 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i13 | 0) == (-1 | 0) & (i14 | 0) == (-1 | 0) | (i13 | 0) == 0 & (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i13;
   i19 = i17 & i18;
   i20 = i16 + (i19 << 3) | 0;
   i21 = HEAP32[i20 >> 2] | 0;
   i22 = HEAP32[i20 + 4 >> 2] | 0;
   L7 : do {
    if ((i21 | 0) == 0 & (i22 | 0) == 0) {
     i23 = 0;
     i24 = i20;
     i25 = 5;
    } else {
     i26 = (i18 >>> 23) + ~i18 | 0;
     i27 = i26 << 12 ^ i26;
     i26 = i27 >>> 7 ^ i27;
     i27 = i26 << 2 ^ i26;
     i26 = i27 >>> 20 ^ i27 | 1;
     i27 = 0;
     i28 = 0;
     i29 = i19;
     i30 = i20;
     i31 = i22;
     i32 = i21;
     while (1) {
      if ((i32 | 0) == (i13 | 0) & (i31 | 0) == (i14 | 0)) {
       i33 = i30;
       break L7;
      }
      i34 = (i32 | 0) == (-1 | 0) & (i31 | 0) == (-1 | 0) ? i30 : i27;
      i35 = (i28 | 0) == 0 ? i26 : i28;
      i36 = i35 + i29 & i17;
      i37 = i16 + (i36 << 3) | 0;
      i38 = HEAP32[i37 >> 2] | 0;
      i39 = HEAP32[i37 + 4 >> 2] | 0;
      if ((i38 | 0) == 0 & (i39 | 0) == 0) {
       i23 = i34;
       i24 = i37;
       i25 = 5;
       break;
      } else {
       i27 = i34;
       i28 = i35;
       i29 = i36;
       i30 = i37;
       i31 = i39;
       i32 = i38;
      }
     }
    }
   } while (0);
   if ((i25 | 0) == 5) {
    i25 = 0;
    i33 = (i23 | 0) != 0 ? i23 : i24;
   }
   HEAP32[i33 >> 2] = i13;
   HEAP32[i33 + 4 >> 2] = i14;
   i15 = (i2 | 0) == (i3 | 0) ? i33 : i12;
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
function __ZN7WebCore16VisitedLinkState26invalidateStyleForAllLinksEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if ((HEAP32[i1 + 16 >> 2] | 0) == 0) {
  return;
 }
 i2 = (HEAP32[i1 >> 2] | 0) + 36 | 0;
 while (1) {
  i1 = HEAP32[i2 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i3 = 16;
   break;
  }
  if ((HEAP32[i1 + 12 >> 2] & 4 | 0) == 0) {
   i2 = i1 + 28 | 0;
  } else {
   i4 = i1;
   break;
  }
 }
 if ((i3 | 0) == 16) {
  return;
 }
 L9 : while (1) {
  if ((HEAP32[i4 + 12 >> 2] & 512 | 0) != 0) {
   __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i4, 32768);
  }
  i2 = HEAP32[i4 + 36 >> 2] | 0;
  do {
   if ((i2 | 0) == 0) {
    i1 = HEAP32[i4 + 28 >> 2] | 0;
    if ((i1 | 0) != 0) {
     i5 = i1;
     break;
    }
    i1 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i4) | 0;
    if ((i1 | 0) == 0) {
     i3 = 17;
     break L9;
    } else {
     i5 = i1;
    }
   } else {
    i5 = i2;
   }
  } while (0);
  if ((HEAP32[i5 + 12 >> 2] & 4 | 0) == 0) {
   i6 = i5;
  } else {
   i4 = i5;
   continue;
  }
  while (1) {
   i2 = HEAP32[i6 + 28 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i1 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i6) | 0;
    if ((i1 | 0) == 0) {
     i3 = 18;
     break L9;
    } else {
     i7 = i1;
    }
   } else {
    i7 = i2;
   }
   if ((HEAP32[i7 + 12 >> 2] & 4 | 0) == 0) {
    i6 = i7;
   } else {
    i4 = i7;
    continue L9;
   }
  }
 }
 if ((i3 | 0) == 17) {
  return;
 } else if ((i3 | 0) == 18) {
  return;
 }
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
function __ZN7WebCore16VisitedLinkState6createERNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i3 >> 2] = i2;
 _memset(i3 + 4 | 0, 0, 20) | 0;
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
function __ZN7WebCore16VisitedLinkStateC2ERNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 _memset(i1 + 4 | 0, 0, 20) | 0;
 return;
}
function __ZN7WebCore16VisitedLinkStateC1ERNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 _memset(i1 + 4 | 0, 0, 20) | 0;
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
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
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
  var FUNCTION_TABLE_vi = [b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore16VisitedLinkStateC2ERNS_8DocumentE,b1];
  var FUNCTION_TABLE_iiiiiii = [b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiiiii: dynCall_iiiiiii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiiiii": invoke_iiiiiii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames8hrefAttrE": __ZN7WebCore9HTMLNames8hrefAttrE, "__ZN7WebCore10XLinkNames8hrefAttrE": __ZN7WebCore10XLinkNames8hrefAttrE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZN7WebCore9HTMLNames4aTagE": __ZN7WebCore9HTMLNames4aTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = asm["dynCall_iiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_memset","_strlen","__ZN7WebCore16VisitedLinkState22invalidateStyleForLinkEy","__ZN7WebCore16VisitedLinkStateC2ERNS_8DocumentE","__ZN3WTF9HashTableIyyNS_17IdentityExtractorEN7WebCore12LinkHashHashENS_10HashTraitsIyEES5_E6rehashEiPy","__ZN7WebCore16VisitedLinkState26determineLinkStateSlowCaseERNS_7ElementE","_memcpy","__ZN7WebCore16VisitedLinkState26invalidateStyleForAllLinksEv","__ZN3WTF9HashTableIyyNS_17IdentityExtractorEN7WebCore12LinkHashHashENS_10HashTraitsIyEES5_E3addINS_22IdentityHashTranslatorIS3_EERKySB_EENS_18HashTableAddResultINS_17HashTableIteratorIyyS1_S3_S5_S5_EEEEOT0_OT1_","__ZN7WebCore16VisitedLinkState6createERNS_8DocumentE"]

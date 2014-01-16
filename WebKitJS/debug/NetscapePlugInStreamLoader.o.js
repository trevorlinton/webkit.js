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
H_BASE = parentModule["_malloc"](160 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 160;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore26NetscapePlugInStreamLoaderC1EPNS_5FrameEPNS_32NetscapePlugInStreamLoaderClientE;
var __ZN7WebCore26NetscapePlugInStreamLoaderD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_vid(index,a1,a2) {
  try {
    Module["dynCall_vid"](index,a1,a2);
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
function invoke_viid(index,a1,a2,a3) {
  try {
    Module["dynCall_viid"](index,a1,a2,a3);
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore26NetscapePlugInStreamLoaderE=(H_BASE+8)|0;
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
  var invoke_vid=env.invoke_vid;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viid=env.invoke_viid;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore26NetscapePlugInStreamLoader18didReceiveResponseERKNS_16ResourceResponseE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i6 = i1 + 796 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[HEAP32[i7 >> 2] >> 2] & 31](i7, i1, i2);
 do {
  if ((HEAP32[i6 >> 2] | 0) != 0) {
   i7 = i1;
   __ZN7WebCore14ResourceLoader18didReceiveResponseERKNS_16ResourceResponseE(i7, i2);
   if ((HEAP32[i6 >> 2] | 0) == 0) {
    break;
   }
   i8 = i2 | 0;
   if (!(__ZNK7WebCore20ResourceResponseBase6isHTTPEv(i8) | 0)) {
    break;
   }
   i9 = HEAP32[i6 >> 2] | 0;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 16 >> 2] & 7](i9) | 0) {
    break;
   }
   if ((__ZNK7WebCore20ResourceResponseBase14httpStatusCodeEv(i8) | 0) == 0) {
    break;
   }
   if ((__ZNK7WebCore20ResourceResponseBase14httpStatusCodeEv(i8) | 0) >= 100) {
    if ((__ZNK7WebCore20ResourceResponseBase14httpStatusCodeEv(i8) | 0) <= 399) {
     break;
    }
   }
   i8 = HEAP32[(HEAP32[i1 >> 2] | 0) + 80 >> 2] | 0;
   i9 = HEAP32[(__ZNK7WebCore14ResourceLoader11frameLoaderEv(i7) | 0) + 4 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i9 >> 2] | 0) + 316 >> 2] & 31](i4, i9, i2);
   FUNCTION_TABLE_vii[i8 & 31](i7, i4);
   i7 = HEAP32[i4 + 12 >> 2] | 0;
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
   i7 = HEAP32[i4 + 8 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i9 = i7 | 0;
     i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i9 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i7 = HEAP32[i4 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
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
 i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i5 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 7](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore26NetscapePlugInStreamLoader22didReceiveDataOrBufferEPKciN3WTF10PassRefPtrINS_12SharedBufferEEExNS_15DataPayloadTypeE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = i8 | 0;
 i10 = i1 + 4 | 0;
 HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 i11 = HEAP32[i1 + 796 >> 2] | 0;
 i12 = HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] | 0;
 i13 = i4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i14 = i3;
   i15 = i2;
  } else {
   i16 = __ZNK7WebCore12SharedBuffer4dataEv(i4) | 0;
   i17 = HEAP32[i13 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i14 = i3;
    i15 = i16;
    break;
   }
   i14 = __ZNK7WebCore12SharedBuffer4sizeEv(i17) | 0;
   i15 = i16;
  }
 } while (0);
 FUNCTION_TABLE_viiii[i12 & 7](i11, i1, i15, i14);
 i14 = i1;
 i15 = i9 | 0;
 i11 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i15 >> 2] = i11;
 __ZN7WebCore14ResourceLoader22didReceiveDataOrBufferEPKcjN3WTF10PassRefPtrINS_12SharedBufferEEExNS_15DataPayloadTypeE(i14, i2, i3, i9, i5, i6, i7);
 i7 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i15 = i7 | 0;
   i6 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN7WebCore12SharedBufferD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i15 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i7 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i10 >> 2] = i7;
  STACKTOP = i8;
  return;
 }
 if ((i1 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 7](i14);
 STACKTOP = i8;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_viiiiii + 4;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_viiiii + 6;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_viid + 2;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_viiiiii + 2;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_vid + 2;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_vii + 18;
}
function __ZN7WebCore26NetscapePlugInStreamLoader6createEPNS_5FrameEPNS_32NetscapePlugInStreamLoaderClientERKNS_15ResourceRequestE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = __ZN3WTF10fastMallocEj(800) | 0;
 i8 = i7;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 0;
 HEAP32[i6 + 8 >> 2] = 1;
 _memset(i6 + 12 | 0, 0, 16) | 0;
 __ZN7WebCore14ResourceLoaderC2EPNS_5FrameENS_21ResourceLoaderOptionsE(i8, i2, i6);
 HEAP32[i7 >> 2] = H_BASE + 16;
 HEAP32[i7 + 796 >> 2] = i3;
 __ZN7WebCore14DocumentLoader21addPlugInStreamLoaderEPNS_14ResourceLoaderE(HEAP32[i7 + 16 >> 2] | 0, i8);
 i3 = i1 | 0;
 if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i7 >> 2] | 0) + 76 >> 2] & 7](i8, i4) | 0) {
  HEAP32[i3 >> 2] = i7;
  STACKTOP = i5;
  return;
 }
 HEAP32[i3 >> 2] = 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i3 = i7 + 4 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 7](i8);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i3 >> 2] = i4;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore26NetscapePlugInStreamLoader16didReceiveBufferEN3WTF10PassRefPtrINS_12SharedBufferEEExNS_15DataPayloadTypeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i7 | 0;
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i8 >> 2] = i2;
 __ZN7WebCore26NetscapePlugInStreamLoader22didReceiveDataOrBufferEPKciN3WTF10PassRefPtrINS_12SharedBufferEEExNS_15DataPayloadTypeE(i1, 0, 0, i7, i3, i4, i5);
 i5 = HEAP32[i8 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i8 = i5 | 0;
 i4 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore12SharedBufferD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i8 >> 2] = i4;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore26NetscapePlugInStreamLoader14didReceiveDataEPKcjxNS_15DataPayloadTypeE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 i9 = i8 | 0;
 HEAP32[i9 >> 2] = 0;
 __ZN7WebCore26NetscapePlugInStreamLoader22didReceiveDataOrBufferEPKciN3WTF10PassRefPtrINS_12SharedBufferEEExNS_15DataPayloadTypeE(i1, i2, i3, i8, i4, i5, i6);
 i6 = HEAP32[i9 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i9 = i6 | 0;
 i5 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore12SharedBufferD1Ev(i6);
  __ZN3WTF8fastFreeEPv(i6);
  STACKTOP = i7;
  return;
 } else {
  HEAP32[i9 >> 2] = i5;
  STACKTOP = i7;
  return;
 }
}
function __ZN7WebCore26NetscapePlugInStreamLoader7didFailERKNS_13ResourceErrorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 + 4 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i4 = i1;
 __ZN7WebCore14DocumentLoader24removePlugInStreamLoaderEPNS_14ResourceLoaderE(HEAP32[i1 + 16 >> 2] | 0, i4);
 i5 = HEAP32[i1 + 796 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 31](i5, i1, i2);
 __ZN7WebCore14ResourceLoader7didFailERKNS_13ResourceErrorE(i4, i2);
 i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 7](i4);
  return;
 } else {
  HEAP32[i3 >> 2] = i2;
  return;
 }
}
function __ZN7WebCore26NetscapePlugInStreamLoader16didFinishLoadingEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 + 4 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i4 = i1;
 __ZN7WebCore14DocumentLoader24removePlugInStreamLoaderEPNS_14ResourceLoaderE(HEAP32[i1 + 16 >> 2] | 0, i4);
 i5 = HEAP32[i1 + 796 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 31](i5, i1);
 __ZN7WebCore14ResourceLoader16didFinishLoadingEd(i4, d2);
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 7](i4);
  return;
 } else {
  HEAP32[i3 >> 2] = i5;
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
function __ZN7WebCore26NetscapePlugInStreamLoaderC2EPNS_5FrameEPNS_32NetscapePlugInStreamLoaderClientE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i5 + 4 >> 2] = 0;
 HEAP32[i5 + 8 >> 2] = 1;
 _memset(i5 + 12 | 0, 0, 16) | 0;
 __ZN7WebCore14ResourceLoaderC2EPNS_5FrameENS_21ResourceLoaderOptionsE(i1, i2, i5);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 796 >> 2] = i3;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore26NetscapePlugInStreamLoaderC1EPNS_5FrameEPNS_32NetscapePlugInStreamLoaderClientE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i5 + 4 >> 2] = 0;
 HEAP32[i5 + 8 >> 2] = 1;
 _memset(i5 + 12 | 0, 0, 16) | 0;
 __ZN7WebCore14ResourceLoaderC2EPNS_5FrameENS_21ResourceLoaderOptionsE(i1, i2, i5);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 796 >> 2] = i3;
 STACKTOP = i4;
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
function viiii___ZN7WebCore20ResourceHandleClient20willSendRequestAsyncEPNS_14ResourceHandleERKNS_15ResourceRequestERKNS_16ResourceResponseE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore20ResourceHandleClient20willSendRequestAsyncEPNS_14ResourceHandleERKNS_15ResourceRequestERKNS_16ResourceResponseE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiii___ZN7WebCore14ResourceLoader15willSendRequestEPNS_14ResourceHandleERNS_15ResourceRequestERKNS_16ResourceResponseE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore14ResourceLoader15willSendRequestEPNS_14ResourceHandleERNS_15ResourceRequestERKNS_16ResourceResponseE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiii___ZN7WebCore14ResourceLoader16didReceiveBufferEPNS_14ResourceHandleEN3WTF10PassRefPtrINS_12SharedBufferEEEi__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore14ResourceLoader16didReceiveBufferEPNS_14ResourceHandleEN3WTF10PassRefPtrINS_12SharedBufferEEEi(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiiiii___ZN7WebCore14ResourceLoader11didSendDataEPNS_14ResourceHandleEyy__wrapper(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 __ZN7WebCore14ResourceLoader11didSendDataEPNS_14ResourceHandleEyy(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function viii___ZN7WebCore20ResourceHandleClient23didReceiveResponseAsyncEPNS_14ResourceHandleERKNS_16ResourceResponseE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore20ResourceHandleClient23didReceiveResponseAsyncEPNS_14ResourceHandleERKNS_16ResourceResponseE(i1 | 0, i2 | 0, i3 | 0);
}
function viiiii___ZN7WebCore14ResourceLoader14didReceiveDataEPNS_14ResourceHandleEPKcji__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore14ResourceLoader14didReceiveDataEPNS_14ResourceHandleEPKcji(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function viii___ZN7WebCore14ResourceLoader18didReceiveResponseEPNS_14ResourceHandleERKNS_16ResourceResponseE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore14ResourceLoader18didReceiveResponseEPNS_14ResourceHandleERKNS_16ResourceResponseE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore14ResourceLoader32didCancelAuthenticationChallengeEPNS_14ResourceHandleERKNS_23AuthenticationChallengeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore14ResourceLoader32didCancelAuthenticationChallengeERKNS_23AuthenticationChallengeE(i1, i3);
 return;
}
function viii___ZN7WebCore14ResourceLoader15willSendRequestERNS_15ResourceRequestERKNS_16ResourceResponseE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore14ResourceLoader15willSendRequestERNS_15ResourceRequestERKNS_16ResourceResponseE(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZN7WebCore14ResourceLoader33didReceiveAuthenticationChallengeERKNS_23AuthenticationChallengeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14ResourceLoader33didReceiveAuthenticationChallengeERKNS_23AuthenticationChallengeE(i1 | 0, i2 | 0);
}
function __ZN7WebCore14ResourceLoader33didReceiveAuthenticationChallengeEPNS_14ResourceHandleERKNS_23AuthenticationChallengeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 128 >> 2] & 31](i1, i3);
 return;
}
function viii___ZN7WebCore14ResourceLoader7didFailEPNS_14ResourceHandleERKNS_13ResourceErrorE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore14ResourceLoader7didFailEPNS_14ResourceHandleERKNS_13ResourceErrorE(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZN7WebCore20ResourceHandleClient31shouldUseCredentialStorageAsyncEPNS_14ResourceHandleE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore20ResourceHandleClient31shouldUseCredentialStorageAsyncEPNS_14ResourceHandleE(i1 | 0, i2 | 0);
}
function __ZN7WebCore26NetscapePlugInStreamLoader10willCancelERKNS_13ResourceErrorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 796 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 31](i3, i1, i2);
 return;
}
function __ZN7WebCore14ResourceLoader20receivedCancellationEPNS_14ResourceHandleERKNS_23AuthenticationChallengeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 132 >> 2] & 31](i1, i3);
 return;
}
function viiiii___ZN7WebCore14ResourceLoader11didSendDataEyy__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore14ResourceLoader11didSendDataEyy(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vii___ZN7WebCore14ResourceLoader20receivedCancellationERKNS_23AuthenticationChallengeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14ResourceLoader20receivedCancellationERKNS_23AuthenticationChallengeE(i1 | 0, i2 | 0);
}
function viid___ZN7WebCore14ResourceLoader16didFinishLoadingEPNS_14ResourceHandleEd__wrapper(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 __ZN7WebCore14ResourceLoader16didFinishLoadingEPNS_14ResourceHandleEd(i1 | 0, i2 | 0, +d3);
}
function __ZN7WebCore26NetscapePlugInStreamLoader9didCancelERKNS_13ResourceErrorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14DocumentLoader24removePlugInStreamLoaderEPNS_14ResourceLoaderE(HEAP32[i1 + 16 >> 2] | 0, i1);
 return;
}
function dynCall_viiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 FUNCTION_TABLE_viiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function vii___ZN7WebCore14ResourceLoader13cannotShowURLEPNS_14ResourceHandleE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14ResourceLoader13cannotShowURLEPNS_14ResourceHandleE(i1 | 0, i2 | 0);
}
function __ZN7WebCore14ResourceLoader26shouldUseCredentialStorageEPNS_14ResourceHandleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 124 >> 2] & 7](i1) | 0;
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function iii___ZN7WebCore14ResourceLoader4initERKNS_15ResourceRequestE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore14ResourceLoader4initERKNS_15ResourceRequestE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore14ResourceLoader10wasBlockedEPNS_14ResourceHandleE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14ResourceLoader10wasBlockedEPNS_14ResourceHandleE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore14ResourceLoader6cancelERKNS_13ResourceErrorE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14ResourceLoader6cancelERKNS_13ResourceErrorE(i1 | 0, i2 | 0);
}
function __ZN7WebCore26NetscapePlugInStreamLoader16releaseResourcesEv(i1) {
 i1 = i1 | 0;
 HEAP32[i1 + 796 >> 2] = 0;
 __ZN7WebCore14ResourceLoader16releaseResourcesEv(i1);
 return;
}
function ii___ZN7WebCore14ResourceLoader26shouldUseCredentialStorageEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore14ResourceLoader26shouldUseCredentialStorageEv(i1 | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vii___ZN7WebCore14ResourceLoader16setDefersLoadingEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14ResourceLoader16setDefersLoadingEb(i1 | 0, i2 | 0);
}
function ii___ZN7WebCore14ResourceLoader19isSubresourceLoaderEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore14ResourceLoader19isSubresourceLoaderEv(i1 | 0) | 0;
}
function __ZN7WebCore26NetscapePlugInStreamLoaderD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14ResourceLoaderD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 31](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function dynCall_viid(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 FUNCTION_TABLE_viid[i1 & 3](i2 | 0, i3 | 0, +d4);
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 7](i2 | 0, i3 | 0) | 0;
}
function b8(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(8);
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
function __ZNK7WebCore26NetscapePlugInStreamLoader6isDoneEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 796 >> 2] | 0) == 0 | 0;
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
 FUNCTION_TABLE_vii[i1 & 31](i2 | 0, i3 | 0);
}
function __ZN7WebCore26NetscapePlugInStreamLoaderD2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14ResourceLoaderD2Ev(i1);
 return;
}
function __ZN7WebCore26NetscapePlugInStreamLoaderD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14ResourceLoaderD2Ev(i1);
 return;
}
function dynCall_vid(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 FUNCTION_TABLE_vid[i1 & 3](i2 | 0, +d3);
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
}
function b10(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(10);
}
function __ZN7WebCore20ResourceHandleClient18usesAsyncCallbacksEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
}
function b7(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 abort(7);
}
function b9(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(9);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function b3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(3);
}
function stackRestore(i1) {
 i1 = i1 | 0;
 STACKTOP = i1;
}
function b1(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(1);
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
function b4(i1) {
 i1 = i1 | 0;
 abort(4);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
}
function b6() {
 abort(6);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,viiiii___ZN7WebCore14ResourceLoader11didSendDataEyy__wrapper,b0,__ZN7WebCore26NetscapePlugInStreamLoader16didReceiveBufferEN3WTF10PassRefPtrINS_12SharedBufferEEExNS_15DataPayloadTypeE,b0,viiiii___ZN7WebCore14ResourceLoader14didReceiveDataEPNS_14ResourceHandleEPKcji__wrapper,b0];
  var FUNCTION_TABLE_vid = [b1,b1,__ZN7WebCore26NetscapePlugInStreamLoader16didFinishLoadingEd,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore26NetscapePlugInStreamLoaderD2Ev,b2,__ZN7WebCore26NetscapePlugInStreamLoaderD0Ev,b2,__ZN7WebCore26NetscapePlugInStreamLoader16releaseResourcesEv,b2];
  var FUNCTION_TABLE_vii = [b3,b3,vii___ZN7WebCore14ResourceLoader20receivedCancellationERKNS_23AuthenticationChallengeE__wrapper,b3,__ZN7WebCore26NetscapePlugInStreamLoader18didReceiveResponseERKNS_16ResourceResponseE,b3,__ZN7WebCore26NetscapePlugInStreamLoader7didFailERKNS_13ResourceErrorE,b3,vii___ZN7WebCore14ResourceLoader6cancelERKNS_13ResourceErrorE__wrapper,b3,vii___ZN7WebCore14ResourceLoader10wasBlockedEPNS_14ResourceHandleE__wrapper,b3,__ZN7WebCore26NetscapePlugInStreamLoader10willCancelERKNS_13ResourceErrorE,b3,vii___ZN7WebCore14ResourceLoader33didReceiveAuthenticationChallengeERKNS_23AuthenticationChallengeE__wrapper,b3,vii___ZN7WebCore14ResourceLoader16setDefersLoadingEb__wrapper,b3,__ZN7WebCore26NetscapePlugInStreamLoader9didCancelERKNS_13ResourceErrorE,b3,vii___ZN7WebCore14ResourceLoader13cannotShowURLEPNS_14ResourceHandleE__wrapper,b3,vii___ZN7WebCore20ResourceHandleClient31shouldUseCredentialStorageAsyncEPNS_14ResourceHandleE__wrapper,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_ii = [b4,b4,ii___ZN7WebCore14ResourceLoader19isSubresourceLoaderEv__wrapper,b4,ii___ZN7WebCore14ResourceLoader26shouldUseCredentialStorageEv__wrapper,b4,__ZN7WebCore20ResourceHandleClient18usesAsyncCallbacksEv,b4];
  var FUNCTION_TABLE_viii = [b5,b5,__ZN7WebCore26NetscapePlugInStreamLoaderC2EPNS_5FrameEPNS_32NetscapePlugInStreamLoaderClientE,b5,viii___ZN7WebCore20ResourceHandleClient23didReceiveResponseAsyncEPNS_14ResourceHandleERKNS_16ResourceResponseE__wrapper,b5,__ZN7WebCore14ResourceLoader33didReceiveAuthenticationChallengeEPNS_14ResourceHandleERKNS_23AuthenticationChallengeE,b5,viii___ZN7WebCore14ResourceLoader18didReceiveResponseEPNS_14ResourceHandleERKNS_16ResourceResponseE__wrapper,b5,__ZN7WebCore14ResourceLoader20receivedCancellationEPNS_14ResourceHandleERKNS_23AuthenticationChallengeE,b5,viii___ZN7WebCore14ResourceLoader15willSendRequestERNS_15ResourceRequestERKNS_16ResourceResponseE__wrapper,b5,__ZN7WebCore14ResourceLoader32didCancelAuthenticationChallengeEPNS_14ResourceHandleERKNS_23AuthenticationChallengeE,b5,viii___ZN7WebCore14ResourceLoader7didFailEPNS_14ResourceHandleERKNS_13ResourceErrorE__wrapper,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5];
  var FUNCTION_TABLE_v = [b6,b6];
  var FUNCTION_TABLE_viid = [b7,b7,viid___ZN7WebCore14ResourceLoader16didFinishLoadingEPNS_14ResourceHandleEd__wrapper,b7];
  var FUNCTION_TABLE_viiiiii = [b8,b8,__ZN7WebCore26NetscapePlugInStreamLoader14didReceiveDataEPKcjxNS_15DataPayloadTypeE,b8,viiiiii___ZN7WebCore14ResourceLoader11didSendDataEPNS_14ResourceHandleEyy__wrapper,b8,b8,b8];
  var FUNCTION_TABLE_iii = [b9,b9,iii___ZN7WebCore14ResourceLoader4initERKNS_15ResourceRequestE__wrapper,b9,__ZN7WebCore14ResourceLoader26shouldUseCredentialStorageEPNS_14ResourceHandleE,b9,b9,b9];
  var FUNCTION_TABLE_viiii = [b10,b10,viiii___ZN7WebCore20ResourceHandleClient20willSendRequestAsyncEPNS_14ResourceHandleERKNS_15ResourceRequestERKNS_16ResourceResponseE__wrapper,b10,viiii___ZN7WebCore14ResourceLoader15willSendRequestEPNS_14ResourceHandleERNS_15ResourceRequestERKNS_16ResourceResponseE__wrapper,b10,viiii___ZN7WebCore14ResourceLoader16didReceiveBufferEPNS_14ResourceHandleEN3WTF10PassRefPtrINS_12SharedBufferEEEi__wrapper,b10];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vid: dynCall_vid, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viid: dynCall_viid, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vid": invoke_vid, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viid": invoke_viid, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vid = Module["dynCall_vid"] = asm["dynCall_vid"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viid = Module["dynCall_viid"] = asm["dynCall_viid"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore26NetscapePlugInStreamLoader18didReceiveResponseERKNS_16ResourceResponseE","__ZN7WebCore26NetscapePlugInStreamLoader14didReceiveDataEPKcjxNS_15DataPayloadTypeE","__ZN7WebCore26NetscapePlugInStreamLoader16didReceiveBufferEN3WTF10PassRefPtrINS_12SharedBufferEEExNS_15DataPayloadTypeE","__ZN7WebCore26NetscapePlugInStreamLoaderC2EPNS_5FrameEPNS_32NetscapePlugInStreamLoaderClientE","__ZN7WebCore26NetscapePlugInStreamLoaderD2Ev","__ZN7WebCore26NetscapePlugInStreamLoader7didFailERKNS_13ResourceErrorE","_memset","_memcpy","__ZN7WebCore14ResourceLoader33didReceiveAuthenticationChallengeEPNS_14ResourceHandleERKNS_23AuthenticationChallengeE","__ZN7WebCore26NetscapePlugInStreamLoader10willCancelERKNS_13ResourceErrorE","__ZN7WebCore14ResourceLoader20receivedCancellationEPNS_14ResourceHandleERKNS_23AuthenticationChallengeE","__ZN7WebCore26NetscapePlugInStreamLoader6createEPNS_5FrameEPNS_32NetscapePlugInStreamLoaderClientERKNS_15ResourceRequestE","__ZN7WebCore26NetscapePlugInStreamLoader22didReceiveDataOrBufferEPKciN3WTF10PassRefPtrINS_12SharedBufferEEExNS_15DataPayloadTypeE","__ZNK7WebCore26NetscapePlugInStreamLoader6isDoneEv","__ZN7WebCore14ResourceLoader32didCancelAuthenticationChallengeEPNS_14ResourceHandleERKNS_23AuthenticationChallengeE","__ZN7WebCore26NetscapePlugInStreamLoaderD0Ev","__ZN7WebCore26NetscapePlugInStreamLoader16didFinishLoadingEd","__ZN7WebCore26NetscapePlugInStreamLoader16releaseResourcesEv","__ZN7WebCore20ResourceHandleClient18usesAsyncCallbacksEv","__ZN7WebCore26NetscapePlugInStreamLoader9didCancelERKNS_13ResourceErrorE","__ZN7WebCore14ResourceLoader26shouldUseCredentialStorageEPNS_14ResourceHandleE"]

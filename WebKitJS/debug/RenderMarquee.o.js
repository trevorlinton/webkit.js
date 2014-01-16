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
H_BASE = parentModule["_malloc"](56 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 56;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore13RenderMarqueeC1EPNS_11RenderLayerE;
var __ZN7WebCore13RenderMarqueeD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_did(index,a1,a2) {
  try {
    return Module["dynCall_did"](index,a1,a2);
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
  var __ZN7WebCore9HTMLNames10marqueeTagE=env.__ZN7WebCore9HTMLNames10marqueeTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore5TimerINS_13RenderMarqueeEEE=(H_BASE+8)|0;
  var __ZTVN7WebCore13RenderMarqueeE=(H_BASE+40)|0;
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
  var invoke_did=env.invoke_did;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
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
function __ZN7WebCore13RenderMarquee18updateMarqueeStyleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, d25 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i4;
 i6 = i1 + 4 | 0;
 i7 = (HEAP32[i6 >> 2] | 0) + 32 | 0;
 i8 = HEAP32[(HEAP32[i7 >> 2] | 0) + 36 >> 2] | 0;
 i9 = i1 + 92 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = i8 + 20 | 0;
 i12 = HEAP32[(HEAP32[i11 >> 2] | 0) + 64 >> 2] | 0;
 do {
  if ((i10 >>> 3 << 28 >> 28 | 0) == ((HEAP32[i12 + 20 >> 2] | 0) >>> 2 << 29 >> 29 | 0)) {
   i13 = i1 + 12 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   i15 = HEAP32[i12 + 16 >> 2] | 0;
   if ((i14 | 0) == (i15 | 0)) {
    i16 = i14;
    i17 = i13;
    break;
   }
   i18 = i1 + 8 | 0;
   if ((HEAP32[i18 >> 2] | 0) < (i14 | 0)) {
    i16 = i15;
    i17 = i13;
   } else {
    i19 = i18;
    i20 = i13;
    i21 = 5;
   }
  } else {
   i19 = i1 + 8 | 0;
   i20 = i1 + 12 | 0;
   i21 = 5;
  }
 } while (0);
 if ((i21 | 0) == 5) {
  HEAP32[i19 >> 2] = 0;
  i16 = HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 64 >> 2] | 0) + 16 >> 2] | 0;
  i17 = i20;
 }
 HEAP32[i17 >> 2] = i16;
 HEAP32[i9 >> 2] = (HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 64 >> 2] | 0) + 20 >> 2] | 0) >>> 2 << 29 >> 26 & 120 | i10 & -121;
 do {
  if (__ZNK7WebCore12RenderObject13isHTMLMarqueeEv(HEAP32[i7 >> 2] | 0) | 0) {
   do {
    if ((HEAP32[i17 >> 2] | 0) < 1) {
     if ((HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 64 >> 2] | 0) + 20 >> 2] & 3 | 0) != 2) {
      break;
     }
     HEAP32[i17 >> 2] = 1;
    }
   } while (0);
   if ((__ZNK7WebCore13RenderMarquee9directionEv(i1) | 0) != 1) {
    if ((__ZNK7WebCore13RenderMarquee9directionEv(i1) | 0) != -1) {
     break;
    }
   }
   if ((HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 32 >> 2] | 0) + 20 >> 2] & 2097152 | 0) == 0) {
    break;
   }
   i10 = i8 + 44 | 0;
   HEAP32[i10 >> 2] = HEAP32[i10 >> 2] & -8 | 4;
   i10 = i8 + 40 | 0;
   HEAP32[i10 >> 2] = HEAP32[i10 >> 2] & -122881 | 57344;
  }
 } while (0);
 L19 : do {
  if ((__ZNK7WebCore13RenderMarquee9directionEv(i1) | 0) != 1) {
   if ((__ZNK7WebCore13RenderMarquee9directionEv(i1) | 0) == -1) {
    break;
   }
   i11 = i8 + 4 | 0;
   if ((HEAP8[(HEAP32[i11 >> 2] | 0) + 17 | 0] | 0) != 0) {
    break;
   }
   HEAP32[i4 >> 2] = 200;
   HEAP8[i5 + 4 | 0] = 0;
   i7 = i5 + 5 | 0;
   HEAP8[i7] = 3;
   HEAP8[i5 + 6 | 0] = 0;
   do {
    if (!(__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i11 >> 2] | 0) + 12 | 0, i5) | 0)) {
     i10 = HEAP32[i11 >> 2] | 0;
     if ((HEAP32[i10 >> 2] | 0) == 1) {
      i22 = i10;
     } else {
      __ZNK7WebCore12StyleBoxData4copyEv(i3, i10);
      i10 = HEAP32[i3 >> 2] | 0;
      i9 = HEAP32[i11 >> 2] | 0;
      i16 = i9 | 0;
      i20 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
      if ((i20 | 0) == 0) {
       __ZN7WebCore12StyleBoxDataD2Ev(i9);
       __ZN3WTF8fastFreeEPv(i9);
      } else {
       HEAP32[i16 >> 2] = i20;
      }
      HEAP32[i11 >> 2] = i10;
      i22 = i10;
     }
     i10 = i22 + 12 | 0;
     if ((i10 | 0) == (i5 | 0)) {
      break;
     }
     i20 = i10;
     i10 = HEAP32[i4 + 4 >> 2] | 0;
     HEAP32[i20 >> 2] = HEAP32[i4 >> 2];
     HEAP32[i20 + 4 >> 2] = i10;
     HEAP8[i7] = 0;
     break L19;
    }
   } while (0);
   if ((HEAP8[i7] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
  }
 } while (0);
 i5 = i1 + 80 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 i22 = HEAP32[(HEAP32[i6 >> 2] | 0) + 32 >> 2] | 0;
 i3 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i22 + 36 >> 2] | 0) + 20 >> 2] | 0) + 64 >> 2] | 0) + 12 >> 2] | 0;
 do {
  if ((HEAP32[i22 + 20 >> 2] & 128 | 0) == 0) {
   i8 = HEAP32[i22 + 4 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i23 = i3;
    break;
   }
   i11 = HEAP32[i8 + 44 >> 2] | 0;
   i10 = HEAP32[__ZN7WebCore9HTMLNames10marqueeTagE >> 2] | 0;
   if ((i11 | 0) != (i10 | 0)) {
    if ((HEAP32[i11 + 12 >> 2] | 0) != (HEAP32[i10 + 12 >> 2] | 0)) {
     i23 = i3;
     break;
    }
    if ((HEAP32[i11 + 16 >> 2] | 0) != (HEAP32[i10 + 16 >> 2] | 0)) {
     i23 = i3;
     break;
    }
   }
   i10 = __ZNK7WebCore18HTMLMarqueeElement12minimumDelayEv(i8) | 0;
   i23 = (i3 | 0) < (i10 | 0) ? i10 : i3;
  } else {
   i23 = i3;
  }
 } while (0);
 do {
  if ((i4 | 0) != (i23 | 0)) {
   i3 = HEAP32[(HEAP32[i6 >> 2] | 0) + 32 >> 2] | 0;
   i22 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 20 >> 2] | 0) + 64 >> 2] | 0) + 12 >> 2] | 0;
   do {
    if ((HEAP32[i3 + 20 >> 2] & 128 | 0) == 0) {
     i10 = HEAP32[i3 + 4 >> 2] | 0;
     if ((i10 | 0) == 0) {
      i24 = i22;
      break;
     }
     i8 = HEAP32[i10 + 44 >> 2] | 0;
     i11 = HEAP32[__ZN7WebCore9HTMLNames10marqueeTagE >> 2] | 0;
     if ((i8 | 0) != (i11 | 0)) {
      if ((HEAP32[i8 + 12 >> 2] | 0) != (HEAP32[i11 + 12 >> 2] | 0)) {
       i24 = i22;
       break;
      }
      if ((HEAP32[i8 + 16 >> 2] | 0) != (HEAP32[i11 + 16 >> 2] | 0)) {
       i24 = i22;
       break;
      }
     }
     i11 = __ZNK7WebCore18HTMLMarqueeElement12minimumDelayEv(i10) | 0;
     i24 = (i22 | 0) < (i11 | 0) ? i11 : i22;
    } else {
     i24 = i22;
    }
   } while (0);
   HEAP32[i5 >> 2] = i24;
   if (+HEAPF64[i1 + 24 >> 3] == +0) {
    break;
   }
   d25 = +(i24 | 0) * +.001;
   __ZN7WebCore9TimerBase5startEdd(i1 + 16 | 0, d25, d25);
  }
 } while (0);
 i24 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i24 | 0) >= 1) {
   if ((HEAP32[i1 + 8 >> 2] | 0) < (i24 | 0)) {
    break;
   }
   if (+HEAPF64[i1 + 24 >> 3] == +0) {
    STACKTOP = i2;
    return;
   }
   __ZN7WebCore9TimerBase4stopEv(i1 + 16 | 0);
   STACKTOP = i2;
   return;
  }
 } while (0);
 if (+HEAPF64[i1 + 24 >> 3] != +0) {
  STACKTOP = i2;
  return;
 }
 i1 = HEAP32[(HEAP32[i6 >> 2] | 0) + 32 >> 2] | 0;
 i6 = i1 | 0;
 i24 = i1 + 20 | 0;
 i1 = HEAP32[i24 >> 2] | 0;
 if ((i1 & 1 | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i24 >> 2] = i1 | 1;
 __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i6, 1, 0);
 if ((HEAP32[i24 >> 2] & 32768 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i6);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore13RenderMarquee10timerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i1 + 4 | 0;
 i10 = HEAP32[(HEAP32[i9 >> 2] | 0) + 32 >> 2] | 0;
 if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i10 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 20 >> 2] & 31 | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 i11 = i1 + 92 | 0;
 i12 = HEAP8[i11] | 0;
 if ((i12 & 1) != 0) {
  HEAP8[i11] = i12 & -2;
  do {
   if ((__ZNK7WebCore13RenderMarquee9directionEv(i1) | 0) == 1) {
    i13 = HEAP32[i9 >> 2] | 0;
    i14 = HEAP32[i1 + 72 >> 2] | 0;
   } else {
    i12 = (__ZNK7WebCore13RenderMarquee9directionEv(i1) | 0) == -1;
    i15 = HEAP32[i9 >> 2] | 0;
    i16 = HEAP32[i1 + 72 >> 2] | 0;
    if (i12) {
     i13 = i15;
     i14 = i16;
     break;
    }
    HEAP32[i3 >> 2] = (HEAP32[i15 + 12 >> 2] | 0) + (HEAP32[i15 + 112 >> 2] | 0);
    HEAP32[i3 + 4 >> 2] = i16;
    __ZN7WebCore11RenderLayer14scrollToOffsetERKNS_7IntSizeENS0_20ScrollOffsetClampingE(i15, i3, 0);
    STACKTOP = i2;
    return;
   }
  } while (0);
  i3 = (HEAP32[i13 + 16 >> 2] | 0) + (HEAP32[i13 + 116 >> 2] | 0) | 0;
  HEAP32[i4 >> 2] = i14;
  HEAP32[i4 + 4 >> 2] = i3;
  __ZN7WebCore11RenderLayer14scrollToOffsetERKNS_7IntSizeENS0_20ScrollOffsetClampingE(i13, i4, 0);
  STACKTOP = i2;
  return;
 }
 i4 = HEAP32[i10 + 36 >> 2] | 0;
 i10 = HEAP32[i1 + 76 >> 2] | 0;
 i13 = i1 + 72 | 0;
 i3 = HEAP32[i13 >> 2] | 0;
 i14 = i10 - i3 | 0;
 if ((i10 | 0) == (i3 | 0)) {
  i17 = i10;
  i18 = 27;
 } else {
  if ((__ZNK7WebCore13RenderMarquee9directionEv(i1) | 0) == 2) {
   i19 = 1;
  } else {
   i19 = (__ZNK7WebCore13RenderMarquee9directionEv(i1) | 0) == 1;
  }
  do {
   if ((HEAP32[(HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 64 >> 2] | 0) + 20 >> 2] & 3 | 0) == 3) {
    if ((HEAP32[i1 + 8 >> 2] & 1 | 0) == 0) {
     i20 = i14;
     i21 = i19;
     i22 = i10;
     break;
    }
    i20 = -i14 | 0;
    i21 = i19 ^ 1;
    i22 = HEAP32[i13 >> 2] | 0;
   } else {
    i20 = i14;
    i21 = i19;
    i22 = i10;
   }
  } while (0);
  i10 = (i20 | 0) > 0;
  if ((__ZNK7WebCore13RenderMarquee9directionEv(i1) | 0) == 1) {
   i23 = 1;
  } else {
   i23 = (__ZNK7WebCore13RenderMarquee9directionEv(i1) | 0) == -1;
  }
  i20 = HEAP32[(HEAP32[i9 >> 2] | 0) + 32 >> 2] | 0;
  if ((HEAP32[i20 + 20 >> 2] & 512 | 0) == 0) {
   i24 = 0;
  } else {
   i24 = i20;
  }
  if (i23) {
   __ZNK7WebCore9RenderBox11clientWidthEv(i7, i24);
  } else {
   __ZNK7WebCore9RenderBox12clientHeightEv(i7, i24);
  }
  i24 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 32 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 64 >> 2] | 0) + 4 | 0;
  HEAP32[i8 >> 2] = HEAP32[i7 >> 2];
  i7 = __ZN7WebCore17intValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i24, i8, 0, 0) | 0;
  i8 = (i7 | 0) > -1 ? i7 : -i7 | 0;
  do {
   if ((__ZNK7WebCore13RenderMarquee9directionEv(i1) | 0) == 1) {
    i25 = HEAP32[i9 >> 2] | 0;
    i18 = 24;
   } else {
    i7 = (__ZNK7WebCore13RenderMarquee9directionEv(i1) | 0) == -1;
    i24 = HEAP32[i9 >> 2] | 0;
    if (i7) {
     i25 = i24;
     i18 = 24;
     break;
    }
    i26 = (HEAP32[i24 + 16 >> 2] | 0) + (HEAP32[i24 + 116 >> 2] | 0) | 0;
   }
  } while (0);
  if ((i18 | 0) == 24) {
   i26 = (HEAP32[i25 + 12 >> 2] | 0) + (HEAP32[i25 + 112 >> 2] | 0) | 0;
  }
  i25 = i26 + (i21 ? i8 : -i8 | 0) | 0;
  i8 = (i10 ? (i22 | 0) < (i25 | 0) : (i25 | 0) < (i22 | 0)) ? i22 : i25;
  if ((i8 | 0) == (i22 | 0)) {
   i17 = i22;
   i18 = 27;
  } else {
   i27 = i8;
  }
 }
 do {
  if ((i18 | 0) == 27) {
   i8 = i1 + 8 | 0;
   i22 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
   HEAP32[i8 >> 2] = i22;
   i8 = HEAP32[i1 + 12 >> 2] | 0;
   if (!((i8 | 0) < 1 | (i22 | 0) < (i8 | 0))) {
    __ZN7WebCore9TimerBase4stopEv(i1 + 16 | 0);
    i27 = i17;
    break;
   }
   if ((HEAP32[(HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 64 >> 2] | 0) + 20 >> 2] & 3 | 0) == 3) {
    i27 = i17;
    break;
   }
   HEAP8[i11] = HEAP8[i11] | 1;
   i27 = i17;
  }
 } while (0);
 do {
  if ((__ZNK7WebCore13RenderMarquee9directionEv(i1) | 0) == 1) {
   i28 = HEAP32[i9 >> 2] | 0;
  } else {
   i17 = (__ZNK7WebCore13RenderMarquee9directionEv(i1) | 0) == -1;
   i11 = HEAP32[i9 >> 2] | 0;
   if (i17) {
    i28 = i11;
    break;
   }
   HEAP32[i6 >> 2] = (HEAP32[i11 + 12 >> 2] | 0) + (HEAP32[i11 + 112 >> 2] | 0);
   HEAP32[i6 + 4 >> 2] = i27;
   __ZN7WebCore11RenderLayer14scrollToOffsetERKNS_7IntSizeENS0_20ScrollOffsetClampingE(i11, i6, 0);
   STACKTOP = i2;
   return;
  }
 } while (0);
 i6 = (HEAP32[i28 + 16 >> 2] | 0) + (HEAP32[i28 + 116 >> 2] | 0) | 0;
 HEAP32[i5 >> 2] = i27;
 HEAP32[i5 + 4 >> 2] = i6;
 __ZN7WebCore11RenderLayer14scrollToOffsetERKNS_7IntSizeENS0_20ScrollOffsetClampingE(i28, i5, 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore13RenderMarquee15computePositionENS_17EMarqueeDirectionEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 32 >> 2] | 0;
 i14 = i13;
 i15 = HEAP32[i13 + 36 >> 2] | 0;
 do {
  if ((__ZNK7WebCore13RenderMarquee9directionEv(i1) | 0) != 1) {
   if ((__ZNK7WebCore13RenderMarquee9directionEv(i1) | 0) == -1) {
    break;
   }
   i16 = HEAP32[i13 + 88 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = i13;
    i18 = i13;
    FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 744 >> 2] & 1](i17) | 0;
    i19 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 736 >> 2] & 1](i17) | 0;
    __ZNK7WebCore9RenderBox11clientWidthEv(i5, i14);
    __ZNK7WebCore9RenderBox12clientHeightEv(i6, i14);
    i20 = i19;
    i21 = HEAP32[i6 >> 2] | 0;
    i22 = i17;
    i23 = i18;
   } else {
    i20 = HEAP32[i16 + 8 >> 2] | 0;
    i21 = HEAP32[i16 + 16 >> 2] | 0;
    i22 = i13;
    i23 = i13;
   }
   i16 = i20 + i21 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i23 >> 2] | 0) + 736 >> 2] & 1](i22) | 0) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 708 >> 2] & 7](i11, i22);
   i18 = i16 + (HEAP32[i11 >> 2] | 0) | 0;
   __ZNK7WebCore9RenderBox12clientHeightEv(i12, i14);
   i16 = HEAP32[i12 >> 2] | 0;
   if ((i2 | 0) != 2) {
    if (!i3) {
     i24 = i18;
     STACKTOP = i4;
     return i24 | 0;
    }
    i17 = i18 - i16 | 0;
    i24 = (i17 | 0) < 0 ? 0 : i17;
    STACKTOP = i4;
    return i24 | 0;
   }
   if (i3) {
    i17 = i18 - i16 | 0;
    i24 = (i17 | 0) > 0 ? 0 : i17;
    STACKTOP = i4;
    return i24 | 0;
   } else {
    i24 = -i16 | 0;
    STACKTOP = i4;
    return i24 | 0;
   }
  }
 } while (0);
 i12 = (HEAP32[i15 + 40 >> 2] & 1073741824 | 0) != 0;
 __ZNK7WebCore9RenderBox11clientWidthEv(i7, i14);
 i15 = HEAP32[i13 >> 2] | 0;
 if (i12) {
  FUNCTION_TABLE_vii[HEAP32[i15 + 488 >> 2] & 7](i8, i14);
  i11 = i13;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 716 >> 2] & 7](i9, i11);
  i22 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 744 >> 2] & 1](i11) | 0;
  i11 = i8 | 0;
  i23 = (HEAP32[i9 >> 2] | 0) - i22 + (HEAP32[i11 >> 2] | 0) | 0;
  HEAP32[i11 >> 2] = i23;
  i25 = i23;
 } else {
  FUNCTION_TABLE_vii[HEAP32[i15 + 484 >> 2] & 7](i8, i14);
  i14 = i8 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i13 + 52 >> 2] | 0) - (HEAP32[i14 >> 2] | 0);
  i15 = i13;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 712 >> 2] & 7](i10, i15);
  i23 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 748 >> 2] & 1](i15) | 0;
  i15 = (HEAP32[i10 >> 2] | 0) - i23 + (HEAP32[i14 >> 2] | 0) | 0;
  HEAP32[i14 >> 2] = i15;
  i25 = i15;
 }
 if ((i2 | 0) == -1) {
  if (i3) {
   i2 = HEAP32[i7 >> 2] | 0;
   i15 = i12 ? i25 - i2 | 0 : i2 - i25 | 0;
   i24 = (i15 | 0) > 0 ? i15 : 0;
   STACKTOP = i4;
   return i24 | 0;
  } else {
   i24 = HEAP32[(i12 ? i8 : i7) >> 2] | 0;
   STACKTOP = i4;
   return i24 | 0;
  }
 }
 if (i3) {
  i3 = HEAP32[i7 >> 2] | 0;
  i8 = i12 ? i25 - i3 | 0 : i3 - i25 | 0;
  i24 = (i8 | 0) < 0 ? i8 : 0;
  STACKTOP = i4;
  return i24 | 0;
 }
 if (i12) {
  i24 = -(HEAP32[i7 >> 2] | 0) | 0;
  STACKTOP = i4;
  return i24 | 0;
 } else {
  i24 = -i25 | 0;
  STACKTOP = i4;
  return i24 | 0;
 }
 return 0;
}
function __ZN7WebCore13RenderMarquee5startEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 16 | 0;
 if (+HEAPF64[i1 + 24 >> 3] != +0) {
  STACKTOP = i2;
  return;
 }
 i6 = i1 + 4 | 0;
 i7 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 32 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 64 >> 2] | 0;
 i8 = i7 + 4 | 0;
 do {
  if ((HEAP8[i7 + 9 | 0] | 0) != 10) {
   if ((HEAP8[i7 + 10 | 0] & 1) == 0) {
    if ((HEAP32[i8 >> 2] | 0) != 0) {
     break;
    }
    STACKTOP = i2;
    return;
   } else {
    if (+HEAPF32[i8 >> 2] != +0) {
     break;
    }
    STACKTOP = i2;
    return;
   }
  }
 } while (0);
 i8 = i1 + 92 | 0;
 i7 = HEAP8[i8] | 0;
 L12 : do {
  if ((i7 & 6) == 0) {
   do {
    if ((__ZNK7WebCore13RenderMarquee9directionEv(i1) | 0) == 1) {
     i9 = HEAP32[i6 >> 2] | 0;
     i10 = HEAP32[i1 + 72 >> 2] | 0;
    } else {
     i11 = (__ZNK7WebCore13RenderMarquee9directionEv(i1) | 0) == -1;
     i12 = HEAP32[i6 >> 2] | 0;
     i13 = HEAP32[i1 + 72 >> 2] | 0;
     if (i11) {
      i9 = i12;
      i10 = i13;
      break;
     }
     HEAP32[i4 >> 2] = 0;
     HEAP32[i4 + 4 >> 2] = i13;
     __ZN7WebCore11RenderLayer14scrollToOffsetERKNS_7IntSizeENS0_20ScrollOffsetClampingE(i12, i4, 0);
     break L12;
    }
   } while (0);
   HEAP32[i3 >> 2] = i10;
   HEAP32[i3 + 4 >> 2] = 0;
   __ZN7WebCore11RenderLayer14scrollToOffsetERKNS_7IntSizeENS0_20ScrollOffsetClampingE(i9, i3, 0);
  } else {
   HEAP8[i8] = i7 & -7;
  }
 } while (0);
 d14 = +(HEAP32[i1 + 80 >> 2] | 0) * +.001;
 __ZN7WebCore9TimerBase5startEdd(i5, d14, d14);
 STACKTOP = i2;
 return;
}
function __Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, d12 = +0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = i2;
 i2 = HEAP32[i6 >> 2] | 0;
 i7 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i4 + 4 >> 2] = i7;
 if ((i2 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
  i2 = i5 + 5 | 0;
  i8 = HEAP8[i2] | 0;
  i9 = i2;
 } else {
  i8 = (i7 >>> 8 | 0 << 24) & 255;
  i9 = i5 + 5 | 0;
 }
 if ((HEAP8[i1 + 5 | 0] | 0) == i8 << 24 >> 24) {
  do {
   if (((HEAP8[i5 + 4 | 0] ^ HEAP8[i1 + 4 | 0]) & 1) == 0) {
    if (i8 << 24 >> 24 == 15) {
     i10 = 1;
     break;
    }
    if ((HEAP8[i1 + 6 | 0] & 1) == 0) {
     d11 = +(HEAP32[i1 >> 2] | 0);
    } else {
     d11 = +HEAPF32[i1 >> 2];
    }
    if ((HEAP8[i5 + 6 | 0] & 1) == 0) {
     d12 = +(HEAP32[i4 >> 2] | 0);
    } else {
     d12 = +HEAPF32[i4 >> 2];
    }
    if (d11 == d12) {
     i10 = 1;
     break;
    }
    i10 = __ZNK7WebCore6Length17isCalculatedEqualERKS0_(i1, i5) | 0;
   } else {
    i10 = 0;
   }
  } while (0);
  i13 = i10;
  i14 = HEAP8[i9] | 0;
 } else {
  i13 = 0;
  i14 = i8;
 }
 if (i14 << 24 >> 24 != 10) {
  STACKTOP = i3;
  return i13 | 0;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return i13 | 0;
}
function __ZNK7WebCore13RenderMarquee9directionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, d13 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3;
 i5 = HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 32 >> 2] | 0) + 36 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i5 + 20 >> 2] | 0) + 64 >> 2] | 0;
 i6 = (HEAP32[i1 + 20 >> 2] | 0) >>> 2 << 29 >> 29;
 i7 = (HEAP32[i5 + 40 >> 2] | 0) >>> 30 & 1;
 i5 = (i6 | 0) == 0 ? -3 : i6;
 if ((i5 | 0) == 3) {
  i8 = (i7 << 1 ^ 2) - 1 | 0;
 } else if ((i5 | 0) == (-3 | 0)) {
  i8 = (i7 << 1) - 1 | 0;
 } else {
  i8 = i5;
 }
 i5 = i1 + 4 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i7 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = i1;
 HEAP32[i3 + 4 >> 2] = i7;
 if ((i1 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i4);
  i1 = i4 + 5 | 0;
  i9 = HEAP8[i1] | 0;
  i10 = i1;
 } else {
  i9 = (i7 >>> 8 | 0 << 24) & 255;
  i10 = i4 + 5 | 0;
 }
 if ((i9 << 24 >> 24 | 0) == 15 | (i9 << 24 >> 24 | 0) == 10) {
  i11 = 0;
  i12 = i9;
 } else {
  if ((HEAP8[i4 + 6 | 0] & 1) == 0) {
   d13 = +(HEAP32[i3 >> 2] | 0);
  } else {
   d13 = +HEAPF32[i3 >> 2];
  }
  i11 = d13 < +0;
  i12 = HEAP8[i10] | 0;
 }
 i10 = i11 ? -i8 | 0 : i8;
 if (i12 << 24 >> 24 != 10) {
  STACKTOP = i2;
  return i10 | 0;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i4);
 STACKTOP = i2;
 return i10 | 0;
}
function __ZNK7WebCore13RenderMarquee12marqueeSpeedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 32 >> 2] | 0;
 i1 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 20 >> 2] | 0) + 64 >> 2] | 0) + 12 >> 2] | 0;
 if ((HEAP32[i2 + 20 >> 2] & 128 | 0) != 0) {
  i3 = i1;
  return i3 | 0;
 }
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i3 = i1;
  return i3 | 0;
 }
 i2 = HEAP32[i4 + 44 >> 2] | 0;
 i5 = HEAP32[__ZN7WebCore9HTMLNames10marqueeTagE >> 2] | 0;
 do {
  if ((i2 | 0) != (i5 | 0)) {
   if ((HEAP32[i2 + 12 >> 2] | 0) != (HEAP32[i5 + 12 >> 2] | 0)) {
    i3 = i1;
    return i3 | 0;
   }
   if ((HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
    break;
   } else {
    i3 = i1;
   }
   return i3 | 0;
  }
 } while (0);
 i5 = __ZNK7WebCore18HTMLMarqueeElement12minimumDelayEv(i4) | 0;
 i3 = (i1 | 0) < (i5 | 0) ? i5 : i1;
 return i3 | 0;
}
function __ZN7WebCore13RenderMarquee21updateMarqueePositionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) >= 1) {
   if ((HEAP32[i1 + 8 >> 2] | 0) < (i2 | 0)) {
    break;
   }
   return;
  }
 } while (0);
 i2 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 32 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 64 >> 2] | 0) + 20 >> 2] & 3;
 HEAP32[i1 + 72 >> 2] = __ZN7WebCore13RenderMarquee15computePositionENS_17EMarqueeDirectionEb(i1, __ZNK7WebCore13RenderMarquee9directionEv(i1) | 0, (i2 | 0) == 3) | 0;
 HEAP32[i1 + 76 >> 2] = __ZN7WebCore13RenderMarquee15computePositionENS_17EMarqueeDirectionEb(i1, -(__ZNK7WebCore13RenderMarquee9directionEv(i1) | 0) | 0, (i2 - 2 | 0) >>> 0 < 2 >>> 0) | 0;
 if ((HEAP8[i1 + 92 | 0] & 4) != 0) {
  return;
 }
 __ZN7WebCore13RenderMarquee5startEv(i1);
 return;
}
function __ZN7WebCore12StyleBoxDataD2Ev(i1) {
 i1 = i1 | 0;
 if ((HEAP8[i1 + 57 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i1 + 49 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 44 | 0);
 }
 if ((HEAP8[i1 + 41 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i1 + 33 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i1 + 25 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i1 + 17 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 12 | 0);
 }
 if ((HEAP8[i1 + 9 | 0] | 0) != 10) {
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 4 | 0);
 return;
}
function __ZN7WebCore13RenderMarqueeC2EPNS_11RenderLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 i2 = i1 + 16 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 16;
 HEAP32[i1 + 60 >> 2] = i1;
 i2 = i1 + 64 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 2;
 HEAP32[i2 + 4 >> 2] = 0;
 i2 = i1 + 92 | 0;
 _memset(i1 + 72 | 0, 0, 19) | 0;
 HEAP8[i2] = HEAP8[i2] & -8;
 i1 = i2;
 HEAP32[i1 >> 2] = HEAP32[i1 >> 2] & -121;
 return;
}
function __ZN7WebCore13RenderMarqueeC1EPNS_11RenderLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 i2 = i1 + 16 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 16;
 HEAP32[i1 + 60 >> 2] = i1;
 i2 = i1 + 64 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 2;
 HEAP32[i2 + 4 >> 2] = 0;
 i2 = i1 + 92 | 0;
 _memset(i1 + 72 | 0, 0, 19) | 0;
 HEAP8[i2] = HEAP8[i2] & -8;
 i1 = i2;
 HEAP32[i1 >> 2] = HEAP32[i1 >> 2] & -121;
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
function __ZN7WebCore5TimerINS_13RenderMarqueeEE5firedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 48 | 0;
 i3 = (HEAP32[i1 + 44 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i4 = i3;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i6 = i5;
  FUNCTION_TABLE_vii[i6 & 7](i4, i1);
  return;
 } else {
  i6 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i5 - 1) >> 2] | 0;
  FUNCTION_TABLE_vii[i6 & 7](i4, i1);
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
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_did + 2;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 2;
}
function __ZN7WebCore13RenderMarqueeD0Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 if ((HEAP8[i1 + 89 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 84 | 0);
 }
 __ZN7WebCore9TimerBaseD2Ev(i1 + 16 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore13RenderMarquee12isHorizontalEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((__ZNK7WebCore13RenderMarquee9directionEv(i1) | 0) == 1) {
  i2 = 1;
  return i2 | 0;
 }
 i2 = (__ZNK7WebCore13RenderMarquee9directionEv(i1) | 0) == -1;
 return i2 | 0;
}
function __ZN7WebCore13RenderMarqueeD2Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 if ((HEAP8[i1 + 89 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 84 | 0);
 }
 __ZN7WebCore9TimerBaseD2Ev(i1 + 16 | 0);
 return;
}
function __ZN7WebCore13RenderMarqueeD1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 if ((HEAP8[i1 + 89 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 84 | 0);
 }
 __ZN7WebCore9TimerBaseD2Ev(i1 + 16 | 0);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore13RenderMarquee7suspendEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 __ZN7WebCore9TimerBase4stopEv(i1 + 16 | 0);
 i2 = i1 + 92 | 0;
 HEAP8[i2] = HEAP8[i2] | 2;
 return;
}
function __ZN7WebCore13RenderMarquee4stopEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 __ZN7WebCore9TimerBase4stopEv(i1 + 16 | 0);
 i2 = i1 + 92 | 0;
 HEAP8[i2] = HEAP8[i2] | 4;
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
function __ZN7WebCore5TimerINS_13RenderMarqueeEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
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
function dynCall_did(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return +FUNCTION_TABLE_did[i1 & 3](i2 | 0, +d3);
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function __ZN7WebCore5TimerINS_13RenderMarqueeEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function __ZNK7WebCore9TimerBase15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +d2;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
 return 0;
}
function b0(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(0);
 return +0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
function b4() {
 abort(4);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_did = [b0,b0,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore13RenderMarqueeD0Ev,b1,__ZN7WebCore5TimerINS_13RenderMarqueeEED1Ev,b1,__ZN7WebCore5TimerINS_13RenderMarqueeEE5firedEv,b1,__ZN7WebCore5TimerINS_13RenderMarqueeEED0Ev,b1,__ZN7WebCore13RenderMarqueeD2Ev,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore13RenderMarquee10timerFiredEPNS_5TimerIS0_EE,b2,__ZN7WebCore13RenderMarqueeC2EPNS_11RenderLayerE,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames10marqueeTagE": __ZN7WebCore9HTMLNames10marqueeTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore13RenderMarquee10timerFiredEPNS_5TimerIS0_EE","__ZNK7WebCore13RenderMarquee12marqueeSpeedEv","__ZN7WebCore13RenderMarquee15computePositionENS_17EMarqueeDirectionEb","__ZN7WebCore13RenderMarquee5startEv","__ZN7WebCore13RenderMarquee18updateMarqueeStyleEv","__ZN7WebCore13RenderMarquee21updateMarqueePositionEv","__ZN7WebCore5TimerINS_13RenderMarqueeEED0Ev","__ZNK7WebCore9TimerBase15alignedFireTimeEd","__ZN7WebCore13RenderMarqueeD0Ev","__ZN7WebCore13RenderMarquee7suspendEv","_memset","_memcpy","__ZNK7WebCore13RenderMarquee12isHorizontalEv","__ZN7WebCore12StyleBoxDataD2Ev","__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_","__ZN7WebCore5TimerINS_13RenderMarqueeEE5firedEv","__ZN7WebCore13RenderMarquee4stopEv","__ZN7WebCore13RenderMarqueeD2Ev","__ZN7WebCore13RenderMarqueeC2EPNS_11RenderLayerE","__ZN7WebCore5TimerINS_13RenderMarqueeEED1Ev","__ZNK7WebCore13RenderMarquee9directionEv"]

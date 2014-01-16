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
var __ZN7WebCore14FocusCandidateC1EPNS_4NodeENS_14FocusDirectionE;
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
;
;
;
;
;
;
;
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
  var __ZN7WebCore9HTMLNames7areaTagE=env.__ZN7WebCore9HTMLNames7areaTagE|0;
  var __ZN7WebCore9HTMLNames9selectTagE=env.__ZN7WebCore9HTMLNames9selectTagE|0;
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
  var _sqrtf=env._sqrtf;
  var _round=env._round;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore19distanceDataForNodeENS_14FocusDirectionERKNS_14FocusCandidateERS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, d23 = +0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 do {
  if (__ZN7WebCore21areElementsOnSameLineERKNS_14FocusCandidateES2_(i2, i3) | 0) {
   if ((i1 | 0) == 3) {
    if ((HEAP32[i2 + 32 >> 2] | 0) <= (HEAP32[i3 + 32 >> 2] | 0)) {
     break;
    }
   } else if ((i1 | 0) == 4) {
    if ((HEAP32[i3 + 32 >> 2] | 0) <= (HEAP32[i2 + 32 >> 2] | 0)) {
     break;
    }
   } else {
    break;
   }
   i8 = i3 + 16 | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i8 + 4 >> 2] = 0;
   HEAP32[i3 + 24 >> 2] = 2;
   STACKTOP = i4;
   return;
  }
 } while (0);
 i8 = i5;
 i9 = i3 + 28 | 0;
 HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i8 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 HEAP32[i8 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
 HEAP32[i8 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
 i9 = i6;
 i8 = i2 + 28 | 0;
 HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i9 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
 HEAP32[i9 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
 HEAP32[i9 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
 do {
  if (__ZNK7WebCore10LayoutRect10intersectsERKS0_(i6, i5) | 0) {
   if (__ZNK7WebCore10LayoutRect8containsERKS0_(i6, i5) | 0) {
    break;
   }
   if (__ZNK7WebCore10LayoutRect8containsERKS0_(i5, i6) | 0) {
    break;
   }
   i8 = i6 + 8 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 4 | 0;
   do {
    if ((i9 | 0) > 0) {
     i2 = i6 + 12 | 0;
     i10 = (HEAP32[i2 >> 2] | 0) - 4 | 0;
     if ((i10 | 0) <= 0) {
      break;
     }
     i11 = i6 | 0;
     HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
     HEAP32[i8 >> 2] = i9;
     i11 = i6 + 4 | 0;
     HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
     HEAP32[i2 >> 2] = i10;
    }
   } while (0);
   i9 = i5 + 8 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 4 | 0;
   if ((i8 | 0) <= 0) {
    break;
   }
   i10 = i5 + 12 | 0;
   i2 = (HEAP32[i10 >> 2] | 0) - 4 | 0;
   if ((i2 | 0) <= 0) {
    break;
   }
   i11 = i5 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
   HEAP32[i9 >> 2] = i8;
   i8 = i5 + 4 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   HEAP32[i10 >> 2] = i2;
  }
 } while (0);
 do {
  if ((i1 | 0) == 6) {
   i2 = HEAP32[i5 >> 2] | 0;
   i10 = (HEAP32[i6 + 8 >> 2] | 0) + (HEAP32[i6 >> 2] | 0) | 0;
   if ((i2 | 0) >= (i10 | 0)) {
    i12 = i2;
    i13 = i10;
    i14 = 20;
    break;
   }
   STACKTOP = i4;
   return;
  } else if ((i1 | 0) == 3) {
   i10 = (HEAP32[i5 + 12 >> 2] | 0) + (HEAP32[i5 + 4 >> 2] | 0) | 0;
   i2 = HEAP32[i6 + 4 >> 2] | 0;
   if ((i10 | 0) <= (i2 | 0)) {
    i15 = i10;
    i16 = i2;
    i14 = 23;
    break;
   }
   STACKTOP = i4;
   return;
  } else if ((i1 | 0) == 4) {
   i2 = HEAP32[i5 + 4 >> 2] | 0;
   i10 = (HEAP32[i6 + 12 >> 2] | 0) + (HEAP32[i6 + 4 >> 2] | 0) | 0;
   if ((i2 | 0) >= (i10 | 0)) {
    i15 = i2;
    i16 = i10;
    i14 = 23;
    break;
   }
   STACKTOP = i4;
   return;
  } else if ((i1 | 0) == 5) {
   i10 = (HEAP32[i5 + 8 >> 2] | 0) + (HEAP32[i5 >> 2] | 0) | 0;
   i2 = HEAP32[i6 >> 2] | 0;
   if ((i10 | 0) <= (i2 | 0)) {
    i12 = i10;
    i13 = i2;
    i14 = 20;
    break;
   }
   STACKTOP = i4;
   return;
  } else {
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i14 | 0) == 23) {
   i2 = HEAP32[i6 >> 2] | 0;
   i10 = HEAP32[i5 >> 2] | 0;
   i8 = (HEAP32[i5 + 8 >> 2] | 0) + i10 | 0;
   if ((i8 | 0) < (i2 | 0)) {
    i17 = i8;
    i18 = i15;
    i19 = i2;
    i20 = i16;
    break;
   }
   i8 = (HEAP32[i6 + 8 >> 2] | 0) + i2 | 0;
   if ((i8 | 0) < (i10 | 0)) {
    i17 = i10;
    i18 = i15;
    i19 = i8;
    i20 = i16;
    break;
   }
   i8 = (i2 | 0) < (i10 | 0) ? i10 : i2;
   i17 = i8;
   i18 = i15;
   i19 = i8;
   i20 = i16;
  } else if ((i14 | 0) == 20) {
   i8 = HEAP32[i6 + 4 >> 2] | 0;
   i2 = HEAP32[i5 + 4 >> 2] | 0;
   i10 = (HEAP32[i5 + 12 >> 2] | 0) + i2 | 0;
   if ((i10 | 0) < (i8 | 0)) {
    i17 = i12;
    i18 = i10;
    i19 = i13;
    i20 = i8;
    break;
   }
   i10 = (HEAP32[i6 + 12 >> 2] | 0) + i8 | 0;
   if ((i10 | 0) < (i2 | 0)) {
    i17 = i12;
    i18 = i2;
    i19 = i13;
    i20 = i10;
    break;
   }
   i10 = (i8 | 0) < (i2 | 0) ? i2 : i8;
   i17 = i12;
   i18 = i10;
   i19 = i13;
   i20 = i10;
  }
 } while (0);
 if ((i1 | 0) == 6) {
  i13 = i18 - i20 | 0;
  i21 = (i13 | 0) > -1 ? i13 : -i13 | 0;
  i22 = i17 - i19 | 0;
 } else if ((i1 | 0) == 5) {
  i13 = i20 - i18 | 0;
  i21 = (i13 | 0) > -1 ? i13 : -i13 | 0;
  i22 = i19 - i17 | 0;
 } else if ((i1 | 0) == 3) {
  i13 = i19 - i17 | 0;
  i21 = (i13 | 0) > -1 ? i13 : -i13 | 0;
  i22 = i20 - i18 | 0;
 } else if ((i1 | 0) == 4) {
  i13 = i17 - i19 | 0;
  i21 = (i13 | 0) > -1 ? i13 : -i13 | 0;
  i22 = i18 - i20 | 0;
 } else {
  STACKTOP = i4;
  return;
 }
 i13 = i17 - i19 | 0;
 i19 = i18 - i20 | 0;
 d23 = +_round(+(+(i21 << 1 | 0) + (+(i22 | 0) + +Math_sqrt(+(Math_imul(i19, i19) | 0) + +(Math_imul(i13, i13) | 0)))));
 i13 = (tempDouble = +d23, +Math_abs(tempDouble) >= +1 ? tempDouble > +0 ? (Math_min(+Math_floor(tempDouble / +4294967296), +4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / +4294967296) >>> 0 : 0);
 i19 = i3 + 16 | 0;
 HEAP32[i19 >> 2] = ~~+d23 >>> 0;
 HEAP32[i19 + 4 >> 2] = i13;
 __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i7, HEAP32[(HEAP32[(__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0) + 60 >> 2] | 0) + 452 >> 2] | 0, 0);
 i13 = i7 + 8 | 0;
 i7 = HEAP32[i13 >> 2] | 0;
 i19 = HEAP32[i13 + 4 >> 2] | 0;
 do {
  if ((i1 | 0) == 6) {
   i13 = HEAP32[i5 >> 2] | 0;
   i22 = HEAP32[i6 >> 2] | 0;
   i21 = HEAP32[i6 + 8 >> 2] | 0;
   if ((i13 - i22 - i21 | 0) > (i7 | 0)) {
    i24 = 0;
    break;
   }
   i25 = i21 + i22 | 0;
   i26 = i13;
   i14 = 38;
  } else if ((i1 | 0) == 3) {
   i13 = HEAP32[i6 + 4 >> 2] | 0;
   i22 = HEAP32[i5 + 4 >> 2] | 0;
   if ((i13 - i22 - (HEAP32[i5 + 12 >> 2] | 0) | 0) > (i19 | 0)) {
    i24 = 0;
   } else {
    i25 = i22;
    i26 = i13;
    i14 = 38;
   }
  } else if ((i1 | 0) == 4) {
   i13 = HEAP32[i5 + 4 >> 2] | 0;
   i22 = HEAP32[i6 + 4 >> 2] | 0;
   if ((i13 - i22 - (HEAP32[i6 + 12 >> 2] | 0) | 0) > (i19 | 0)) {
    i24 = 0;
   } else {
    i25 = i22;
    i26 = i13;
    i14 = 38;
   }
  } else if ((i1 | 0) == 5) {
   i13 = HEAP32[i6 >> 2] | 0;
   i22 = HEAP32[i5 >> 2] | 0;
   i21 = HEAP32[i5 + 8 >> 2] | 0;
   if ((i13 - i22 - i21 | 0) > (i7 | 0)) {
    i24 = 0;
    break;
   }
   i25 = i21 + i22 | 0;
   i26 = i13;
   i14 = 38;
  } else {
   i24 = 0;
  }
 } while (0);
 do {
  if ((i14 | 0) == 38) {
   i7 = i1 - 5 | 0;
   if ((i26 | 0) >= (i25 | 0)) {
    if (i7 >>> 0 < 2 >>> 0) {
     i19 = HEAP32[i6 + 12 >> 2] | 0;
     i13 = HEAP32[i6 + 4 >> 2] | 0;
     i22 = HEAP32[i5 + 12 >> 2] | 0;
     i21 = HEAP32[i5 + 4 >> 2] | 0;
     i27 = i21 + i22 | 0;
     i28 = i21 + ((i22 | 0) / 2 & -1) | 0;
     i29 = i13 + ((i19 | 0) / 2 & -1) | 0;
     i30 = i13 + i19 | 0;
     i31 = i21;
     i32 = i13;
    } else {
     i13 = HEAP32[i6 + 8 >> 2] | 0;
     i21 = HEAP32[i6 >> 2] | 0;
     i19 = HEAP32[i5 + 8 >> 2] | 0;
     i22 = HEAP32[i5 >> 2] | 0;
     i27 = i22 + i19 | 0;
     i28 = i22 + ((i19 | 0) / 2 & -1) | 0;
     i29 = i21 + ((i13 | 0) / 2 & -1) | 0;
     i30 = i21 + i13 | 0;
     i31 = i22;
     i32 = i21;
    }
    if ((i28 | 0) >= (i32 | 0) & (i28 | 0) <= (i30 | 0)) {
     i24 = 2;
     break;
    }
    if ((i29 | 0) >= (i31 | 0) & (i29 | 0) <= (i27 | 0) | (i31 | 0) == (i32 | 0) | (i27 | 0) == (i30 | 0)) {
     i24 = 2;
     break;
    }
   }
   if (i7 >>> 0 < 2 >>> 0) {
    i7 = HEAP32[i5 + 4 >> 2] | 0;
    i21 = HEAP32[i5 + 12 >> 2] | 0;
    i22 = HEAP32[i6 + 4 >> 2] | 0;
    i33 = i21 + i7 | 0;
    i34 = ((i21 | 0) / 2 & -1) + i7 | 0;
    i35 = i7;
    i36 = (HEAP32[i6 + 12 >> 2] | 0) + i22 | 0;
    i37 = i22;
   } else {
    i22 = HEAP32[i5 >> 2] | 0;
    i7 = HEAP32[i5 + 8 >> 2] | 0;
    i21 = HEAP32[i6 >> 2] | 0;
    i33 = i7 + i22 | 0;
    i34 = ((i7 | 0) / 2 & -1) + i22 | 0;
    i35 = i22;
    i36 = (HEAP32[i6 + 8 >> 2] | 0) + i21 | 0;
    i37 = i21;
   }
   if ((i35 | 0) >= (i37 | 0) & (i35 | 0) <= (i36 | 0)) {
    i24 = 1;
    break;
   }
   if ((i34 | 0) >= (i37 | 0) & (i34 | 0) <= (i36 | 0)) {
    i24 = 1;
    break;
   }
   i24 = (i33 | 0) >= (i37 | 0) & (i33 | 0) <= (i36 | 0) & 1;
  }
 } while (0);
 HEAP32[i3 + 24 >> 2] = i24;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore29nodeRectInAbsoluteCoordinatesEPNS_4NodeEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 i9 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((i9 | 0) == (i2 | 0)) {
  i10 = HEAP32[i2 + 332 >> 2] | 0;
  i11 = i6 | 0;
  __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i6, HEAP32[i10 + 452 >> 2] | 0, 0);
  i12 = HEAP32[i11 + 4 >> 2] | 0;
  HEAP32[i5 >> 2] = HEAP32[i11 >> 2];
  HEAP32[i5 + 4 >> 2] = i12;
  i12 = i6 + 8 | 0;
  i6 = HEAP32[i12 + 4 >> 2] | 0;
  HEAP32[i5 + 8 >> 2] = HEAP32[i12 >> 2];
  HEAP32[i5 + 12 >> 2] = i6;
  __ZN7WebCoreL25rectToAbsoluteCoordinatesEPNS_5FrameERKNS_10LayoutRectE(i1, i10, i5);
  STACKTOP = i4;
  return;
 }
 i5 = HEAP32[i9 + 332 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 156 >> 2] & 1](i8, i2);
 __ZN7WebCoreL25rectToAbsoluteCoordinatesEPNS_5FrameERKNS_10LayoutRectE(i7, i5, i8);
 if (i3) {
  i3 = (HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0;
  i8 = i2 + 32 | 0;
  if (i3) {
   i13 = i8 | 0;
  } else {
   i13 = HEAP32[i8 >> 2] | 0;
  }
  i2 = HEAP32[i13 >> 2] | 0;
  if ((HEAP32[i2 + 20 >> 2] & 768 | 0) == 256) {
   i14 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
  } else {
   i14 = HEAP32[i2 + 36 >> 2] | 0;
  }
  i2 = HEAP32[i14 + 16 >> 2] | 0;
  i14 = HEAP32[i2 + 104 >> 2] | 0;
  if ((HEAP32[(HEAP32[i2 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
   if ((i14 & 1879048192) >>> 0 < 268435456 >>> 0) {
    i15 = 0;
   } else {
    i16 = 12;
   }
  } else {
   i16 = 12;
  }
  if ((i16 | 0) == 12) {
   i15 = i14 >>> 1 & 67108863;
  }
  if (i3) {
   i17 = i8 | 0;
  } else {
   i17 = HEAP32[i8 >> 2] | 0;
  }
  i14 = HEAP32[i17 >> 2] | 0;
  if ((HEAP32[i14 + 20 >> 2] & 768 | 0) == 256) {
   i18 = HEAP32[(HEAP32[i14 + 8 >> 2] | 0) + 36 >> 2] | 0;
  } else {
   i18 = HEAP32[i14 + 36 >> 2] | 0;
  }
  i14 = HEAP32[i18 + 16 >> 2] | 0;
  i18 = HEAP32[i14 + 120 >> 2] | 0;
  if ((HEAP32[(HEAP32[i14 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
   if ((i18 & 1879048192) >>> 0 < 268435456 >>> 0) {
    i19 = 0;
   } else {
    i16 = 21;
   }
  } else {
   i16 = 21;
  }
  if ((i16 | 0) == 21) {
   i19 = i18 >>> 1 & 67108863;
  }
  i18 = i7 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + i15;
  i15 = i7 + 4 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + i19;
  i19 = i7 + 8 | 0;
  i15 = HEAP32[i19 >> 2] | 0;
  if (i3) {
   i20 = i8 | 0;
  } else {
   i20 = HEAP32[i8 >> 2] | 0;
  }
  i18 = HEAP32[i20 >> 2] | 0;
  if ((HEAP32[i18 + 20 >> 2] & 768 | 0) == 256) {
   i21 = HEAP32[(HEAP32[i18 + 8 >> 2] | 0) + 36 >> 2] | 0;
  } else {
   i21 = HEAP32[i18 + 36 >> 2] | 0;
  }
  i18 = HEAP32[i21 + 16 >> 2] | 0;
  i21 = HEAP32[i18 + 104 >> 2] | 0;
  if ((HEAP32[(HEAP32[i18 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
   if ((i21 & 1879048192) >>> 0 < 268435456 >>> 0) {
    i22 = 0;
   } else {
    i16 = 30;
   }
  } else {
   i16 = 30;
  }
  if ((i16 | 0) == 30) {
   i22 = i21 >>> 1 & 67108863;
  }
  i21 = i15 - i22 | 0;
  if (i3) {
   i23 = i8 | 0;
  } else {
   i23 = HEAP32[i8 >> 2] | 0;
  }
  i22 = HEAP32[i23 >> 2] | 0;
  if ((HEAP32[i22 + 20 >> 2] & 768 | 0) == 256) {
   i24 = HEAP32[(HEAP32[i22 + 8 >> 2] | 0) + 36 >> 2] | 0;
  } else {
   i24 = HEAP32[i22 + 36 >> 2] | 0;
  }
  i22 = HEAP32[i24 + 16 >> 2] | 0;
  i24 = HEAP32[i22 + 112 >> 2] | 0;
  if ((HEAP32[(HEAP32[i22 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
   if ((i24 & 1879048192) >>> 0 < 268435456 >>> 0) {
    i25 = 0;
   } else {
    i16 = 39;
   }
  } else {
   i16 = 39;
  }
  if ((i16 | 0) == 39) {
   i25 = i24 >>> 1 & 67108863;
  }
  HEAP32[i19 >> 2] = i21 - i25;
  i25 = i7 + 12 | 0;
  i21 = HEAP32[i25 >> 2] | 0;
  if (i3) {
   i26 = i8 | 0;
  } else {
   i26 = HEAP32[i8 >> 2] | 0;
  }
  i19 = HEAP32[i26 >> 2] | 0;
  if ((HEAP32[i19 + 20 >> 2] & 768 | 0) == 256) {
   i27 = HEAP32[(HEAP32[i19 + 8 >> 2] | 0) + 36 >> 2] | 0;
  } else {
   i27 = HEAP32[i19 + 36 >> 2] | 0;
  }
  i19 = HEAP32[i27 + 16 >> 2] | 0;
  i27 = HEAP32[i19 + 120 >> 2] | 0;
  if ((HEAP32[(HEAP32[i19 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
   if ((i27 & 1879048192) >>> 0 < 268435456 >>> 0) {
    i28 = 0;
   } else {
    i16 = 48;
   }
  } else {
   i16 = 48;
  }
  if ((i16 | 0) == 48) {
   i28 = i27 >>> 1 & 67108863;
  }
  i27 = i21 - i28 | 0;
  if (i3) {
   i29 = i8 | 0;
  } else {
   i29 = HEAP32[i8 >> 2] | 0;
  }
  i8 = HEAP32[i29 >> 2] | 0;
  if ((HEAP32[i8 + 20 >> 2] & 768 | 0) == 256) {
   i30 = HEAP32[(HEAP32[i8 + 8 >> 2] | 0) + 36 >> 2] | 0;
  } else {
   i30 = HEAP32[i8 + 36 >> 2] | 0;
  }
  i8 = HEAP32[i30 + 16 >> 2] | 0;
  i30 = HEAP32[i8 + 128 >> 2] | 0;
  if ((HEAP32[(HEAP32[i8 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
   if ((i30 & 1879048192) >>> 0 < 268435456 >>> 0) {
    i31 = 0;
   } else {
    i16 = 57;
   }
  } else {
   i16 = 57;
  }
  if ((i16 | 0) == 57) {
   i31 = i30 >>> 1 & 67108863;
  }
  HEAP32[i25 >> 2] = i27 - i31;
 }
 i31 = i1;
 i1 = i7;
 HEAP32[i31 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i31 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i31 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i31 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20canScrollInDirectionEPKNS_4NodeENS_14FocusDirectionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 12 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 & 16 | 0) != 0) {
   if ((HEAP32[(HEAP32[i1 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9selectTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i8 = 0;
   } else {
    break;
   }
   STACKTOP = i3;
   return i8 | 0;
  }
 } while (0);
 if ((HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) == (i1 | 0)) {
  i8 = __ZN7WebCore20canScrollInDirectionEPKNS_5FrameENS_14FocusDirectionE(HEAP32[i1 + 332 >> 2] | 0, i2) | 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 if ((i1 | 0) == 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i9 = i1 + 32 | 0;
 if ((i7 & 2048 | 0) == 0) {
  i10 = i9 | 0;
 } else {
  i10 = HEAP32[i9 >> 2] | 0;
 }
 i7 = HEAP32[i10 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 if ((HEAP32[i7 + 20 >> 2] & 512 | 0) == 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 if (!(__ZNK7WebCore9RenderBox33canBeScrolledAndHasScrollableAreaEv(i7) | 0)) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 & 2 | 0) == 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 if ((HEAP32[i1 + 36 >> 2] | 0) == 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 if ((i2 | 0) == 3) {
  if ((i7 & 2048 | 0) == 0) {
   i11 = i9 | 0;
  } else {
   i11 = HEAP32[i9 >> 2] | 0;
  }
  i6 = HEAP32[i11 >> 2] | 0;
  if ((HEAP32[i6 + 20 >> 2] & 768 | 0) == 256) {
   i12 = HEAP32[(HEAP32[i6 + 8 >> 2] | 0) + 36 >> 2] | 0;
  } else {
   i12 = HEAP32[i6 + 36 >> 2] | 0;
  }
  if ((HEAP32[i12 + 48 >> 2] & 57344 | 0) == 8192) {
   i8 = 0;
   STACKTOP = i3;
   return i8 | 0;
  }
  i12 = __ZNK7WebCore4Node9renderBoxEv(i1) | 0;
  i8 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 832 >> 2] & 1](i12) | 0) > 0;
  STACKTOP = i3;
  return i8 | 0;
 } else if ((i2 | 0) == 4) {
  if ((i7 & 2048 | 0) == 0) {
   i13 = i9 | 0;
  } else {
   i13 = HEAP32[i9 >> 2] | 0;
  }
  i12 = HEAP32[i13 >> 2] | 0;
  if ((HEAP32[i12 + 20 >> 2] & 768 | 0) == 256) {
   i14 = HEAP32[(HEAP32[i12 + 8 >> 2] | 0) + 36 >> 2] | 0;
  } else {
   i14 = HEAP32[i12 + 36 >> 2] | 0;
  }
  if ((HEAP32[i14 + 48 >> 2] & 57344 | 0) == 8192) {
   i8 = 0;
   STACKTOP = i3;
   return i8 | 0;
  }
  i14 = __ZNK7WebCore4Node9renderBoxEv(i1) | 0;
  i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 832 >> 2] & 1](i14) | 0;
  __ZNK7WebCore9RenderBox12clientHeightEv(i5, __ZNK7WebCore4Node9renderBoxEv(i1) | 0);
  i14 = (HEAP32[i5 >> 2] | 0) + i12 | 0;
  i12 = __ZNK7WebCore4Node9renderBoxEv(i1) | 0;
  i8 = (i14 | 0) < (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 840 >> 2] & 1](i12) | 0);
  STACKTOP = i3;
  return i8 | 0;
 } else if ((i2 | 0) == 6) {
  if ((i7 & 2048 | 0) == 0) {
   i15 = i9 | 0;
  } else {
   i15 = HEAP32[i9 >> 2] | 0;
  }
  i12 = HEAP32[i15 >> 2] | 0;
  if ((HEAP32[i12 + 20 >> 2] & 768 | 0) == 256) {
   i16 = HEAP32[(HEAP32[i12 + 8 >> 2] | 0) + 36 >> 2] | 0;
  } else {
   i16 = HEAP32[i12 + 36 >> 2] | 0;
  }
  if ((HEAP32[i16 + 48 >> 2] & 7168 | 0) == 1024) {
   i8 = 0;
   STACKTOP = i3;
   return i8 | 0;
  }
  i16 = __ZNK7WebCore4Node9renderBoxEv(i1) | 0;
  i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 828 >> 2] & 1](i16) | 0;
  __ZNK7WebCore9RenderBox11clientWidthEv(i4, __ZNK7WebCore4Node9renderBoxEv(i1) | 0);
  i16 = (HEAP32[i4 >> 2] | 0) + i12 | 0;
  i12 = __ZNK7WebCore4Node9renderBoxEv(i1) | 0;
  i8 = (i16 | 0) < (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 836 >> 2] & 1](i12) | 0);
  STACKTOP = i3;
  return i8 | 0;
 } else if ((i2 | 0) == 5) {
  if ((i7 & 2048 | 0) == 0) {
   i17 = i9 | 0;
  } else {
   i17 = HEAP32[i9 >> 2] | 0;
  }
  i9 = HEAP32[i17 >> 2] | 0;
  if ((HEAP32[i9 + 20 >> 2] & 768 | 0) == 256) {
   i18 = HEAP32[(HEAP32[i9 + 8 >> 2] | 0) + 36 >> 2] | 0;
  } else {
   i18 = HEAP32[i9 + 36 >> 2] | 0;
  }
  if ((HEAP32[i18 + 48 >> 2] & 7168 | 0) == 1024) {
   i8 = 0;
   STACKTOP = i3;
   return i8 | 0;
  }
  i18 = __ZNK7WebCore4Node9renderBoxEv(i1) | 0;
  i8 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 828 >> 2] & 1](i18) | 0) > 0;
  STACKTOP = i3;
  return i8 | 0;
 } else {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 return 0;
}
function __ZN7WebCore21canBeScrolledIntoViewENS_14FocusDirectionERKNS_14FocusCandidateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i4;
 i7 = i2 + 28 | 0;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 i7 = (HEAP32[i2 >> 2] | 0) + 16 | 0;
 i6 = i2 + 8 | 0;
 i2 = (i1 - 3 | 0) >>> 0 < 2 >>> 0;
 L1 : do {
  if ((i1 - 5 | 0) >>> 0 < 2 >>> 0) {
   i8 = i7;
   L2 : while (1) {
    i9 = HEAP32[i8 >> 2] | 0;
    i10 = i9 | 0;
    if ((i9 | 0) == 0) {
     i11 = 1;
     i12 = 32;
     break;
    }
    __ZN7WebCore29nodeRectInAbsoluteCoordinatesEPNS_4NodeEb(i5, i10, 0);
    do {
     if (!(__ZNK7WebCore10LayoutRect10intersectsERKS0_(i4, i5) | 0)) {
      i13 = i9 + 32 | 0;
      if ((HEAP32[i9 + 12 >> 2] & 2048 | 0) == 0) {
       i14 = i13 | 0;
      } else {
       i14 = HEAP32[i13 >> 2] | 0;
      }
      i13 = HEAP32[i14 >> 2] | 0;
      if ((HEAP32[i13 + 20 >> 2] & 768 | 0) == 256) {
       i15 = HEAP32[(HEAP32[i13 + 8 >> 2] | 0) + 36 >> 2] | 0;
      } else {
       i15 = HEAP32[i13 + 36 >> 2] | 0;
      }
      if ((HEAP32[i15 + 48 >> 2] & 7168 | 0) == 1024) {
       i11 = 0;
       i12 = 35;
       break L2;
      }
      if (!i2) {
       break;
      }
      i13 = i9 + 32 | 0;
      if ((HEAP32[i9 + 12 >> 2] & 2048 | 0) == 0) {
       i16 = i13 | 0;
      } else {
       i16 = HEAP32[i13 >> 2] | 0;
      }
      i13 = HEAP32[i16 >> 2] | 0;
      if ((HEAP32[i13 + 20 >> 2] & 768 | 0) == 256) {
       i17 = HEAP32[(HEAP32[i13 + 8 >> 2] | 0) + 36 >> 2] | 0;
      } else {
       i17 = HEAP32[i13 + 36 >> 2] | 0;
      }
      if ((HEAP32[i17 + 48 >> 2] & 57344 | 0) == 8192) {
       i11 = 0;
       i12 = 36;
       break L2;
      }
     }
    } while (0);
    if ((i10 | 0) == (HEAP32[i6 >> 2] | 0)) {
     i18 = i10;
     break L1;
    } else {
     i8 = i9 + 16 | 0;
    }
   }
   if ((i12 | 0) == 32) {
    STACKTOP = i3;
    return i11 | 0;
   } else if ((i12 | 0) == 35) {
    STACKTOP = i3;
    return i11 | 0;
   } else if ((i12 | 0) == 36) {
    STACKTOP = i3;
    return i11 | 0;
   }
  } else {
   i8 = i7;
   while (1) {
    i13 = HEAP32[i8 >> 2] | 0;
    i19 = i13 | 0;
    if ((i13 | 0) == 0) {
     i11 = 1;
     i12 = 33;
     break;
    }
    __ZN7WebCore29nodeRectInAbsoluteCoordinatesEPNS_4NodeEb(i5, i19, 0);
    if (!(__ZNK7WebCore10LayoutRect10intersectsERKS0_(i4, i5) | 0 | i2 ^ 1)) {
     i20 = i13 + 32 | 0;
     if ((HEAP32[i13 + 12 >> 2] & 2048 | 0) == 0) {
      i21 = i20 | 0;
     } else {
      i21 = HEAP32[i20 >> 2] | 0;
     }
     i20 = HEAP32[i21 >> 2] | 0;
     if ((HEAP32[i20 + 20 >> 2] & 768 | 0) == 256) {
      i22 = HEAP32[(HEAP32[i20 + 8 >> 2] | 0) + 36 >> 2] | 0;
     } else {
      i22 = HEAP32[i20 + 36 >> 2] | 0;
     }
     if ((HEAP32[i22 + 48 >> 2] & 57344 | 0) == 8192) {
      i11 = 0;
      i12 = 34;
      break;
     }
    }
    if ((i19 | 0) == (HEAP32[i6 >> 2] | 0)) {
     i18 = i19;
     break L1;
    } else {
     i8 = i13 + 16 | 0;
    }
   }
   if ((i12 | 0) == 33) {
    STACKTOP = i3;
    return i11 | 0;
   } else if ((i12 | 0) == 34) {
    STACKTOP = i3;
    return i11 | 0;
   }
  }
 } while (0);
 i11 = __ZN7WebCore20canScrollInDirectionEPKNS_4NodeENS_14FocusDirectionE(i18, i1) | 0;
 STACKTOP = i3;
 return i11 | 0;
}
function __ZN7WebCore17scrollInDirectionEPNS_4NodeENS_14FocusDirectionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 if ((HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) == (i1 | 0)) {
  i9 = HEAP32[i1 + 332 >> 2] | 0;
  if ((i9 | 0) == 0) {
   i10 = 0;
   STACKTOP = i3;
   return i10 | 0;
  }
  if (!(__ZN7WebCore20canScrollInDirectionEPKNS_4NodeENS_14FocusDirectionE(HEAP32[i9 + 456 >> 2] | 0, i2) | 0)) {
   i10 = 0;
   STACKTOP = i3;
   return i10 | 0;
  }
  if ((i2 | 0) == 5) {
   i11 = 0;
   i12 = -40;
  } else if ((i2 | 0) == 4) {
   i11 = 40;
   i12 = 0;
  } else if ((i2 | 0) == 3) {
   i11 = -40;
   i12 = 0;
  } else if ((i2 | 0) == 6) {
   i11 = 0;
   i12 = 40;
  } else {
   i10 = 0;
   STACKTOP = i3;
   return i10 | 0;
  }
  i13 = HEAP32[i9 + 452 >> 2] | 0;
  i9 = i13 | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i13 = HEAP32[i14 + 208 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[i14 + 192 >> 2] & 1](i5, i9);
  i14 = (HEAP32[i5 + 4 >> 2] | 0) + i11 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i5 >> 2] | 0) + i12;
  HEAP32[i4 + 4 >> 2] = i14;
  FUNCTION_TABLE_vii[i13 & 1](i9, i4);
  i10 = 1;
  STACKTOP = i3;
  return i10 | 0;
 }
 if ((__ZNK7WebCore4Node9renderBoxEv(i1) | 0) == 0) {
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 if (!(__ZN7WebCore20canScrollInDirectionEPKNS_4NodeENS_14FocusDirectionE(i1, i2) | 0)) {
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 if ((i2 | 0) == 4) {
  i4 = __ZNK7WebCore4Node9renderBoxEv(i1) | 0;
  i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 840 >> 2] & 1](i4) | 0;
  i4 = __ZNK7WebCore4Node9renderBoxEv(i1) | 0;
  i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 832 >> 2] & 1](i4) | 0;
  __ZNK7WebCore9RenderBox12clientHeightEv(i7, __ZNK7WebCore4Node9renderBoxEv(i1) | 0);
  i4 = i9 - i13 - (HEAP32[i7 >> 2] | 0) | 0;
  i15 = (i4 | 0) < 40 ? i4 : 40;
  i16 = 0;
 } else if ((i2 | 0) == 6) {
  i4 = __ZNK7WebCore4Node9renderBoxEv(i1) | 0;
  i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 836 >> 2] & 1](i4) | 0;
  i4 = __ZNK7WebCore4Node9renderBoxEv(i1) | 0;
  i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 828 >> 2] & 1](i4) | 0;
  __ZNK7WebCore9RenderBox11clientWidthEv(i6, __ZNK7WebCore4Node9renderBoxEv(i1) | 0);
  i4 = i7 - i13 - (HEAP32[i6 >> 2] | 0) | 0;
  i15 = 0;
  i16 = (i4 | 0) < 40 ? i4 : 40;
 } else if ((i2 | 0) == 3) {
  i4 = __ZNK7WebCore4Node9renderBoxEv(i1) | 0;
  i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 832 >> 2] & 1](i4) | 0;
  i15 = (i6 | 0) < 40 ? -i6 | 0 : -40;
  i16 = 0;
 } else if ((i2 | 0) == 5) {
  i2 = __ZNK7WebCore4Node9renderBoxEv(i1) | 0;
  i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 828 >> 2] & 1](i2) | 0;
  i15 = 0;
  i16 = (i6 | 0) < 40 ? -i6 | 0 : -40;
 } else {
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 i6 = __ZNK7WebCore12RenderObject14enclosingLayerEv(__ZNK7WebCore4Node9renderBoxEv(i1) | 0) | 0;
 HEAP32[i8 >> 2] = i16;
 HEAP32[i8 + 4 >> 2] = i15;
 __ZN7WebCore11RenderLayer19scrollByRecursivelyERKNS_7IntSizeENS0_20ScrollOffsetClampingEPPNS_14ScrollableAreaE(i6, i8, 0, 0);
 i10 = 1;
 STACKTOP = i3;
 return i10 | 0;
}
function __ZN7WebCore14FocusCandidateC2EPNS_4NodeENS_14FocusDirectionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i1 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i1 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 i10 = i1 + 16 | 0;
 HEAP32[i10 >> 2] = -1;
 HEAP32[i10 + 4 >> 2] = 2147483647;
 i10 = i1 + 28 | 0;
 i11 = i1 + 44 | 0;
 _memset(i1 + 24 | 0, 0, 20) | 0;
 HEAP8[i11] = 1;
 i12 = i1 + 45 | 0;
 HEAP8[i12] = 1;
 i1 = HEAP32[i2 + 12 >> 2] | 0;
 do {
  if ((i1 & 16 | 0) == 0) {
   i13 = 17;
  } else {
   if ((HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7areaTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i13 = 17;
    break;
   }
   i14 = i2;
   i15 = __ZNK7WebCore15HTMLAreaElement12imageElementEv(i14) | 0;
   if ((i15 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i16 = i15 + 32 | 0;
   if ((HEAP32[i15 + 12 >> 2] & 2048 | 0) == 0) {
    i17 = i16 | 0;
   } else {
    i17 = HEAP32[i16 >> 2] | 0;
   }
   if ((HEAP32[i17 >> 2] | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   HEAP32[i8 >> 2] = i15;
   i15 = HEAP32[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
   i16 = __ZNK7WebCore15HTMLAreaElement12imageElementEv(i14) | 0;
   i18 = i16 + 32 | 0;
   if ((HEAP32[i16 + 12 >> 2] & 2048 | 0) == 0) {
    i19 = i18 | 0;
   } else {
    i19 = HEAP32[i18 >> 2] | 0;
   }
   __ZNK7WebCore15HTMLAreaElement11computeRectEPNS_12RenderObjectE(i5, i14, HEAP32[i19 >> 2] | 0);
   __ZN7WebCoreL25rectToAbsoluteCoordinatesEPNS_5FrameERKNS_10LayoutRectE(i6, i15, i5);
   if ((i3 | 0) == 5) {
    i15 = i6 | 0;
    i14 = i6 + 8 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) - 1 + (HEAP32[i14 >> 2] | 0);
    HEAP32[i14 >> 2] = 1;
   } else if ((i3 | 0) == 3) {
    i14 = i6 + 4 | 0;
    i15 = i6 + 12 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) - 1 + (HEAP32[i15 >> 2] | 0);
    HEAP32[i15 >> 2] = 1;
   } else if ((i3 | 0) == 6) {
    HEAP32[i6 + 8 >> 2] = 1;
   } else if ((i3 | 0) == 4) {
    HEAP32[i6 + 12 >> 2] = 1;
   }
   i15 = i6;
   HEAP32[i10 >> 2] = HEAP32[i15 >> 2];
   HEAP32[i10 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
   HEAP32[i10 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
   HEAP32[i10 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
  }
 } while (0);
 do {
  if ((i13 | 0) == 17) {
   i6 = i2 + 32 | 0;
   if ((i1 & 2048 | 0) == 0) {
    i20 = i6 | 0;
   } else {
    i20 = HEAP32[i6 >> 2] | 0;
   }
   if ((HEAP32[i20 >> 2] | 0) == 0) {
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i8 >> 2] = i2;
    __ZN7WebCore29nodeRectInAbsoluteCoordinatesEPNS_4NodeEb(i7, i2, 1);
    i6 = i7;
    HEAP32[i10 >> 2] = HEAP32[i6 >> 2];
    HEAP32[i10 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
    HEAP32[i10 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
    HEAP32[i10 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
    break;
   }
  }
 } while (0);
 HEAP32[i9 >> 2] = i2;
 HEAP8[i11] = (__ZN7WebCore16hasOffscreenRectEPNS_4NodeENS_14FocusDirectionE(HEAP32[i8 >> 2] | 0, 0) | 0) & 1;
 HEAP8[i12] = (__ZN7WebCore16hasOffscreenRectEPNS_4NodeENS_14FocusDirectionE(HEAP32[i8 >> 2] | 0, i3) | 0) & 1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14FocusCandidateC1EPNS_4NodeENS_14FocusDirectionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i1 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i1 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 i10 = i1 + 16 | 0;
 HEAP32[i10 >> 2] = -1;
 HEAP32[i10 + 4 >> 2] = 2147483647;
 i10 = i1 + 28 | 0;
 i11 = i1 + 44 | 0;
 _memset(i1 + 24 | 0, 0, 20) | 0;
 HEAP8[i11] = 1;
 i12 = i1 + 45 | 0;
 HEAP8[i12] = 1;
 i1 = HEAP32[i2 + 12 >> 2] | 0;
 do {
  if ((i1 & 16 | 0) == 0) {
   i13 = 17;
  } else {
   if ((HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7areaTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i13 = 17;
    break;
   }
   i14 = i2;
   i15 = __ZNK7WebCore15HTMLAreaElement12imageElementEv(i14) | 0;
   if ((i15 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i16 = i15 + 32 | 0;
   if ((HEAP32[i15 + 12 >> 2] & 2048 | 0) == 0) {
    i17 = i16 | 0;
   } else {
    i17 = HEAP32[i16 >> 2] | 0;
   }
   if ((HEAP32[i17 >> 2] | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   HEAP32[i8 >> 2] = i15;
   i15 = HEAP32[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
   i16 = __ZNK7WebCore15HTMLAreaElement12imageElementEv(i14) | 0;
   i18 = i16 + 32 | 0;
   if ((HEAP32[i16 + 12 >> 2] & 2048 | 0) == 0) {
    i19 = i18 | 0;
   } else {
    i19 = HEAP32[i18 >> 2] | 0;
   }
   __ZNK7WebCore15HTMLAreaElement11computeRectEPNS_12RenderObjectE(i5, i14, HEAP32[i19 >> 2] | 0);
   __ZN7WebCoreL25rectToAbsoluteCoordinatesEPNS_5FrameERKNS_10LayoutRectE(i6, i15, i5);
   if ((i3 | 0) == 5) {
    i15 = i6 | 0;
    i14 = i6 + 8 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) - 1 + (HEAP32[i14 >> 2] | 0);
    HEAP32[i14 >> 2] = 1;
   } else if ((i3 | 0) == 3) {
    i14 = i6 + 4 | 0;
    i15 = i6 + 12 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) - 1 + (HEAP32[i15 >> 2] | 0);
    HEAP32[i15 >> 2] = 1;
   } else if ((i3 | 0) == 6) {
    HEAP32[i6 + 8 >> 2] = 1;
   } else if ((i3 | 0) == 4) {
    HEAP32[i6 + 12 >> 2] = 1;
   }
   i15 = i6;
   HEAP32[i10 >> 2] = HEAP32[i15 >> 2];
   HEAP32[i10 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
   HEAP32[i10 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
   HEAP32[i10 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
  }
 } while (0);
 do {
  if ((i13 | 0) == 17) {
   i6 = i2 + 32 | 0;
   if ((i1 & 2048 | 0) == 0) {
    i20 = i6 | 0;
   } else {
    i20 = HEAP32[i6 >> 2] | 0;
   }
   if ((HEAP32[i20 >> 2] | 0) == 0) {
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i8 >> 2] = i2;
    __ZN7WebCore29nodeRectInAbsoluteCoordinatesEPNS_4NodeEb(i7, i2, 1);
    i6 = i7;
    HEAP32[i10 >> 2] = HEAP32[i6 >> 2];
    HEAP32[i10 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
    HEAP32[i10 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
    HEAP32[i10 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
    break;
   }
  }
 } while (0);
 HEAP32[i9 >> 2] = i2;
 HEAP8[i11] = (__ZN7WebCore16hasOffscreenRectEPNS_4NodeENS_14FocusDirectionE(HEAP32[i8 >> 2] | 0, 0) | 0) & 1;
 HEAP8[i12] = (__ZN7WebCore16hasOffscreenRectEPNS_4NodeENS_14FocusDirectionE(HEAP32[i8 >> 2] | 0, i3) | 0) & 1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore21areElementsOnSameLineERKNS_14FocusCandidateES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i6 = i2 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i8 = i4 + 32 | 0;
 if ((HEAP32[i4 + 12 >> 2] & 2048 | 0) == 0) {
  i9 = i8 | 0;
 } else {
  i9 = HEAP32[i8 >> 2] | 0;
 }
 if ((HEAP32[i9 >> 2] | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i9 = i7 + 32 | 0;
 if ((HEAP32[i7 + 12 >> 2] & 2048 | 0) == 0) {
  i10 = i9 | 0;
 } else {
  i10 = HEAP32[i9 >> 2] | 0;
 }
 if ((HEAP32[i10 >> 2] | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 if (!(__ZNK7WebCore10LayoutRect10intersectsERKS0_(i1 + 28 | 0, i2 + 28 | 0) | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 i10 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((HEAP32[i10 + 12 >> 2] & 16 | 0) != 0) {
   if ((HEAP32[(HEAP32[i10 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7areaTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i5 = 0;
   } else {
    break;
   }
   return i5 | 0;
  }
 } while (0);
 i10 = HEAP32[i2 + 4 >> 2] | 0;
 do {
  if ((HEAP32[i10 + 12 >> 2] & 16 | 0) != 0) {
   if ((HEAP32[(HEAP32[i10 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7areaTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i5 = 0;
   } else {
    break;
   }
   return i5 | 0;
  }
 } while (0);
 i10 = HEAP32[i3 >> 2] | 0;
 i3 = (HEAP32[i10 + 12 >> 2] & 2048 | 0) == 0;
 i2 = i10 + 32 | 0;
 if (i3) {
  i11 = i2 | 0;
 } else {
  i11 = HEAP32[i2 >> 2] | 0;
 }
 i10 = HEAP32[i11 >> 2] | 0;
 if ((HEAP32[i10 + 20 >> 2] & 768 | 0) == 256) {
  i5 = 0;
  return i5 | 0;
 }
 if ((HEAP32[i10 + 24 >> 2] & 4 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i10 = HEAP32[i6 >> 2] | 0;
 i11 = i10 + 32 | 0;
 if ((HEAP32[i10 + 12 >> 2] & 2048 | 0) == 0) {
  i12 = i11 | 0;
 } else {
  i12 = HEAP32[i11 >> 2] | 0;
 }
 i11 = HEAP32[i12 >> 2] | 0;
 if ((HEAP32[i11 + 20 >> 2] & 768 | 0) == 256) {
  i5 = 0;
  return i5 | 0;
 }
 if ((HEAP32[i11 + 24 >> 2] & 4 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 if (i3) {
  i13 = i2 | 0;
 } else {
  i13 = HEAP32[i2 >> 2] | 0;
 }
 i2 = __ZNK7WebCore12RenderObject15containingBlockEv(HEAP32[i13 >> 2] | 0) | 0;
 i13 = HEAP32[i6 >> 2] | 0;
 i6 = i13 + 32 | 0;
 if ((HEAP32[i13 + 12 >> 2] & 2048 | 0) == 0) {
  i14 = i6 | 0;
 } else {
  i14 = HEAP32[i6 >> 2] | 0;
 }
 i5 = (i2 | 0) == (__ZNK7WebCore12RenderObject15containingBlockEv(HEAP32[i14 >> 2] | 0) | 0);
 return i5 | 0;
}
function __ZN7WebCore20canScrollInDirectionEPKNS_5FrameENS_14FocusDirectionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 40 | 0;
 i9 = i8;
 i10 = i1 + 452 | 0;
 i1 = HEAP32[i10 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i11 = 0;
  STACKTOP = i3;
  return i11 | 0;
 }
 __ZN7WebCore9FrameView32calculateScrollbarModesForLayoutERNS_13ScrollbarModeES2_NS0_33ScrollbarModesCalculationStrategyE(i1, i6, i5, 1);
 do {
  if ((i2 - 5 | 0) >>> 0 < 2 >>> 0) {
   if ((HEAP32[i6 >> 2] | 0) == 1) {
    i11 = 0;
   } else {
    break;
   }
   STACKTOP = i3;
   return i11 | 0;
  }
 } while (0);
 do {
  if ((i2 - 3 | 0) >>> 0 < 2 >>> 0) {
   if ((HEAP32[i5 >> 2] | 0) == 1) {
    i11 = 0;
   } else {
    break;
   }
   STACKTOP = i3;
   return i11 | 0;
  }
 } while (0);
 __ZNK7WebCore14ScrollableArea17totalContentsSizeEv(i7, (HEAP32[i10 >> 2] | 0) + 36 | 0);
 i5 = HEAP32[i7 >> 2] | 0;
 i6 = HEAP32[i7 + 4 >> 2] | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 i1 = i4 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i7 >> 2] | 0) + 164 >> 2] & 3](i4, i7 | 0, 0);
 i7 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i9, HEAP32[i10 >> 2] | 0, 1);
 i10 = i8 + 8 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 if ((i2 | 0) == 4) {
  i11 = ((HEAP32[i10 + 4 >> 2] | 0) + i4 | 0) < (i6 | 0);
  STACKTOP = i3;
  return i11 | 0;
 } else if ((i2 | 0) == 5) {
  i11 = (i7 | 0) > 0;
  STACKTOP = i3;
  return i11 | 0;
 } else if ((i2 | 0) == 3) {
  i11 = (i4 | 0) > 0;
  STACKTOP = i3;
  return i11 | 0;
 } else if ((i2 | 0) == 6) {
  i11 = (i8 + i7 | 0) < (i5 | 0);
  STACKTOP = i3;
  return i11 | 0;
 } else {
  i11 = 0;
  STACKTOP = i3;
  return i11 | 0;
 }
 return 0;
}
function __ZN7WebCore16hasOffscreenRectEPNS_4NodeENS_14FocusDirectionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = __ZNK7WebCore8Document4viewEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
 if ((i7 | 0) == 0) {
  i8 = 1;
  STACKTOP = i3;
  return i8 | 0;
 }
 i9 = i5 | 0;
 __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i5, i7 | 0, 0);
 i7 = HEAP32[i9 >> 2] | 0;
 i10 = HEAP32[i9 + 4 >> 2] | 0;
 i9 = i4 | 0;
 HEAP32[i9 >> 2] = i7;
 i11 = i4 + 4 | 0;
 HEAP32[i11 >> 2] = i10;
 i12 = i5 + 8 | 0;
 i5 = HEAP32[i12 >> 2] | 0;
 i13 = HEAP32[i12 + 4 >> 2] | 0;
 i12 = i4 + 8 | 0;
 HEAP32[i12 >> 2] = i5;
 i14 = i4 + 12 | 0;
 HEAP32[i14 >> 2] = i13;
 if ((i2 | 0) == 3) {
  HEAP32[i11 >> 2] = i10 - 40;
  HEAP32[i14 >> 2] = i13 + 40;
 } else if ((i2 | 0) == 4) {
  HEAP32[i14 >> 2] = i13 + 40;
 } else if ((i2 | 0) == 5) {
  HEAP32[i9 >> 2] = i7 - 40;
  HEAP32[i12 >> 2] = i5 + 40;
 } else if ((i2 | 0) == 6) {
  HEAP32[i12 >> 2] = i5 + 40;
 }
 i5 = i1 + 32 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i15 = i5 | 0;
 } else {
  i15 = HEAP32[i5 >> 2] | 0;
 }
 i5 = HEAP32[i15 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i8 = 1;
  STACKTOP = i3;
  return i8 | 0;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i5 >> 2] | 0) + 500 >> 2] & 3](i6, i5, 0);
 if ((HEAP32[i6 + 8 >> 2] | 0) < 1) {
  i8 = 1;
  STACKTOP = i3;
  return i8 | 0;
 }
 if ((HEAP32[i6 + 12 >> 2] | 0) < 1) {
  i8 = 1;
  STACKTOP = i3;
  return i8 | 0;
 }
 i8 = (__ZNK7WebCore10LayoutRect10intersectsERKS0_(i4, i6) | 0) ^ 1;
 STACKTOP = i3;
 return i8 | 0;
}
function __ZN7WebCoreL25rectToAbsoluteCoordinatesEPNS_5FrameERKNS_10LayoutRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i1;
 i7 = i3;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i1 | 0;
 i6 = i1 + 4 | 0;
 i1 = i5 | 0;
 i3 = i5;
 i5 = i2;
 while (1) {
  i2 = HEAP32[i5 + 448 >> 2] | 0;
  if ((i2 | 0) != 0) {
   i8 = i2 | 0;
   i2 = HEAP32[i7 >> 2] | 0;
   i9 = HEAP32[i6 >> 2] | 0;
   while (1) {
    i10 = __ZN7WebCore7Element10offsetLeftEv(i8) | 0;
    i2 = i2 + i10 | 0;
    i9 = i9 + (__ZN7WebCore7Element9offsetTopEv(i8) | 0) | 0;
    i8 = __ZN7WebCore7Element12offsetParentEv(i8) | 0;
    if ((i8 | 0) == 0) {
     break;
    }
   }
   i8 = HEAP32[i5 + 452 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i8 >> 2] | 0) + 164 >> 2] & 3](i3, i8 | 0, 0);
   i8 = HEAP32[i1 + 4 >> 2] | 0;
   HEAP32[i7 >> 2] = i2 - (HEAP32[i1 >> 2] | 0);
   HEAP32[i6 >> 2] = i9 - i8;
  }
  i5 = __ZNK7WebCore9FrameTree6parentEv(i5 + 40 | 0) | 0;
  if ((i5 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i4;
 return;
}
function __ZN7WebCore37virtualRectForAreaElementAndDirectionEPNS_15HTMLAreaElementENS_14FocusDirectionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 i7 = __ZNK7WebCore15HTMLAreaElement12imageElementEv(i2) | 0;
 i8 = i7 + 32 | 0;
 if ((HEAP32[i7 + 12 >> 2] & 2048 | 0) == 0) {
  i9 = i8 | 0;
 } else {
  i9 = HEAP32[i8 >> 2] | 0;
 }
 __ZNK7WebCore15HTMLAreaElement11computeRectEPNS_12RenderObjectE(i5, i2, HEAP32[i9 >> 2] | 0);
 __ZN7WebCoreL25rectToAbsoluteCoordinatesEPNS_5FrameERKNS_10LayoutRectE(i1, i6, i5);
 if ((i3 | 0) == 5) {
  i5 = i1 | 0;
  i6 = i1 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) - 1 + (HEAP32[i6 >> 2] | 0);
  HEAP32[i6 >> 2] = 1;
  STACKTOP = i4;
  return;
 } else if ((i3 | 0) == 3) {
  i6 = i1 + 4 | 0;
  i5 = i1 + 12 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) - 1 + (HEAP32[i5 >> 2] | 0);
  HEAP32[i5 >> 2] = 1;
  STACKTOP = i4;
  return;
 } else if ((i3 | 0) == 6) {
  HEAP32[i1 + 8 >> 2] = 1;
  STACKTOP = i4;
  return;
 } else if ((i3 | 0) == 4) {
  HEAP32[i1 + 12 >> 2] = 1;
  STACKTOP = i4;
  return;
 } else {
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore23virtualRectForDirectionENS_14FocusDirectionERKNS_10LayoutRectENS_10LayoutUnitE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i5 = STACKTOP;
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 i6 = i1;
 i7 = i3;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 if ((i2 | 0) == 6) {
  HEAP32[i1 + 8 >> 2] = HEAP32[i4 >> 2];
  STACKTOP = i5;
  return;
 } else if ((i2 | 0) == 5) {
  i7 = i1 | 0;
  i6 = i1 + 8 | 0;
  i3 = HEAP32[i4 >> 2] | 0;
  HEAP32[i7 >> 2] = (HEAP32[i6 >> 2] | 0) + (HEAP32[i7 >> 2] | 0) - i3;
  HEAP32[i6 >> 2] = i3;
  STACKTOP = i5;
  return;
 } else if ((i2 | 0) == 3) {
  i3 = i1 + 4 | 0;
  i6 = i1 + 12 | 0;
  i7 = HEAP32[i4 >> 2] | 0;
  HEAP32[i3 >> 2] = (HEAP32[i6 >> 2] | 0) + (HEAP32[i3 >> 2] | 0) - i7;
  HEAP32[i6 >> 2] = i7;
  STACKTOP = i5;
  return;
 } else if ((i2 | 0) == 4) {
  HEAP32[i1 + 12 >> 2] = HEAP32[i4 >> 2];
  STACKTOP = i5;
  return;
 } else {
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore17scrollInDirectionEPNS_5FrameENS_14FocusDirectionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if ((i1 | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 if (!(__ZN7WebCore20canScrollInDirectionEPKNS_4NodeENS_14FocusDirectionE(HEAP32[i1 + 456 >> 2] | 0, i2) | 0)) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 if ((i2 | 0) == 6) {
  i7 = 0;
  i8 = 40;
 } else if ((i2 | 0) == 3) {
  i7 = -40;
  i8 = 0;
 } else if ((i2 | 0) == 4) {
  i7 = 40;
  i8 = 0;
 } else if ((i2 | 0) == 5) {
  i7 = 0;
  i8 = -40;
 } else {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 i2 = HEAP32[i1 + 452 >> 2] | 0;
 i1 = i2 | 0;
 i9 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i9 + 208 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[i9 + 192 >> 2] & 1](i5, i1);
 i9 = (HEAP32[i5 + 4 >> 2] | 0) + i7 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i5 >> 2] | 0) + i8;
 HEAP32[i4 + 4 >> 2] = i9;
 FUNCTION_TABLE_vii[i2 & 1](i1, i4);
 i6 = 1;
 STACKTOP = i3;
 return i6 | 0;
}
function __ZN7WebCore53scrollableEnclosingBoxOrParentFrameForNodeInDirectionENS_14FocusDirectionEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i2;
 i4 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 while (1) {
  if ((i4 | 0) == (i3 | 0)) {
   i5 = HEAP32[(HEAP32[i4 + 332 >> 2] | 0) + 448 >> 2] | 0;
  } else {
   i5 = HEAP32[i3 + 16 >> 2] | 0;
  }
  if ((i5 | 0) == 0) {
   i6 = 0;
   i7 = 9;
   break;
  }
  if (__ZN7WebCore20canScrollInDirectionEPKNS_4NodeENS_14FocusDirectionE(i5, i1) | 0) {
   i6 = i5;
   i7 = 10;
   break;
  }
  i2 = HEAP32[(HEAP32[i5 + 20 >> 2] | 0) + 8 >> 2] | 0;
  if ((i2 | 0) == (i5 | 0)) {
   i6 = i5;
   i7 = 11;
   break;
  } else {
   i3 = i5;
   i4 = i2;
  }
 }
 if ((i7 | 0) == 11) {
  return i6 | 0;
 } else if ((i7 | 0) == 9) {
  return i6 | 0;
 } else if ((i7 | 0) == 10) {
  return i6 | 0;
 }
 return 0;
}
function __ZN7WebCore16isValidCandidateENS_14FocusDirectionERKNS_14FocusCandidateERS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = HEAP32[i2 + 28 >> 2] | 0;
 i5 = HEAP32[i2 + 32 >> 2] | 0;
 i6 = HEAP32[i3 + 28 >> 2] | 0;
 i7 = HEAP32[i3 + 32 >> 2] | 0;
 if ((i1 | 0) == 5) {
  i8 = (i6 | 0) < ((HEAP32[i2 + 36 >> 2] | 0) + i4 | 0);
  return i8 | 0;
 } else if ((i1 | 0) == 6) {
  i8 = ((HEAP32[i3 + 36 >> 2] | 0) + i6 | 0) > (i4 | 0);
  return i8 | 0;
 } else if ((i1 | 0) == 4) {
  i8 = ((HEAP32[i3 + 40 >> 2] | 0) + i7 | 0) > (i5 | 0);
  return i8 | 0;
 } else if ((i1 | 0) == 3) {
  i8 = (i7 | 0) < ((HEAP32[i2 + 40 >> 2] | 0) + i5 | 0);
  return i8 | 0;
 } else {
  i8 = 0;
  return i8 | 0;
 }
 return 0;
}
function __ZN7WebCore30frameRectInAbsoluteCoordinatesEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i5 | 0;
 __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i5, HEAP32[i2 + 452 >> 2] | 0, 0);
 i7 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i4 + 4 >> 2] = i7;
 i7 = i5 + 8 | 0;
 i5 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i4 + 8 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i4 + 12 >> 2] = i5;
 __ZN7WebCoreL25rectToAbsoluteCoordinatesEPNS_5FrameERKNS_10LayoutRectE(i1, i2, i4);
 STACKTOP = i3;
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
function __ZN7WebCore17frameOwnerElementERNS_14FocusCandidateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 120 >> 2] & 1](i1) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 return i3 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore26isSpatialNavigationEnabledEPKNS_5FrameE(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP8[(HEAP32[i1 + 36 >> 2] | 0) + 191 | 0] & 8) != 0;
 return i2 | 0;
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
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
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
  var FUNCTION_TABLE_vi = [b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZN7WebCore14FocusCandidateC2EPNS_4NodeENS_14FocusDirectionE,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "_sqrtf": _sqrtf, "_round": _round, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames7areaTagE": __ZN7WebCore9HTMLNames7areaTagE, "__ZN7WebCore9HTMLNames9selectTagE": __ZN7WebCore9HTMLNames9selectTagE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore17scrollInDirectionEPNS_5FrameENS_14FocusDirectionE","__ZN7WebCore20canScrollInDirectionEPKNS_5FrameENS_14FocusDirectionE","__ZN7WebCore16isValidCandidateENS_14FocusDirectionERKNS_14FocusCandidateERS1_","__ZN7WebCore19distanceDataForNodeENS_14FocusDirectionERKNS_14FocusCandidateERS1_","__ZN7WebCore29nodeRectInAbsoluteCoordinatesEPNS_4NodeEb","__ZN7WebCore17scrollInDirectionEPNS_4NodeENS_14FocusDirectionE","__ZN7WebCore20canScrollInDirectionEPKNS_4NodeENS_14FocusDirectionE","__ZN7WebCore53scrollableEnclosingBoxOrParentFrameForNodeInDirectionENS_14FocusDirectionEPNS_4NodeE","__ZN7WebCore17frameOwnerElementERNS_14FocusCandidateE","_memset","__ZN7WebCore26isSpatialNavigationEnabledEPKNS_5FrameE","__ZN7WebCore23virtualRectForDirectionENS_14FocusDirectionERKNS_10LayoutRectENS_10LayoutUnitE","_memcpy","__ZN7WebCore16hasOffscreenRectEPNS_4NodeENS_14FocusDirectionE","_strlen","__ZN7WebCore21canBeScrolledIntoViewENS_14FocusDirectionERKNS_14FocusCandidateE","__ZN7WebCore21areElementsOnSameLineERKNS_14FocusCandidateES2_","__ZN7WebCore37virtualRectForAreaElementAndDirectionEPNS_15HTMLAreaElementENS_14FocusDirectionE","__ZN7WebCoreL25rectToAbsoluteCoordinatesEPNS_5FrameERKNS_10LayoutRectE","__ZN7WebCore14FocusCandidateC2EPNS_4NodeENS_14FocusDirectionE","__ZN7WebCore30frameRectInAbsoluteCoordinatesEPNS_5FrameE"]

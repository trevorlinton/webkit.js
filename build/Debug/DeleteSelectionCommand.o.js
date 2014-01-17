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
H_BASE = parentModule["_malloc"](80 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 80;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore22DeleteSelectionCommandC1ERNS_8DocumentEbbbbb;
var __ZN7WebCore22DeleteSelectionCommandC1ERKNS_16VisibleSelectionEbbbbb;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    Module["dynCall_viiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
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
  var __ZN7WebCore9HTMLNames5trTagE=env.__ZN7WebCore9HTMLNames5trTagE|0;
  var __ZN7WebCore9HTMLNames5brTagE=env.__ZN7WebCore9HTMLNames5brTagE|0;
  var __ZN7WebCore9HTMLNames5hrTagE=env.__ZN7WebCore9HTMLNames5hrTagE|0;
  var __ZN7WebCore9HTMLNames10scopedAttrE=env.__ZN7WebCore9HTMLNames10scopedAttrE|0;
  var __ZN7WebCore9HTMLNames8tableTagE=env.__ZN7WebCore9HTMLNames8tableTagE|0;
  var __ZN7WebCore9HTMLNames8styleTagE=env.__ZN7WebCore9HTMLNames8styleTagE|0;
  var __ZN7WebCore9HTMLNames7linkTagE=env.__ZN7WebCore9HTMLNames7linkTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore22DeleteSelectionCommandE=(H_BASE+8)|0;
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
  var invoke_ii=env.invoke_ii;
  var invoke_viiiiiii=env.invoke_viiiiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
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
function __ZN7WebCore22DeleteSelectionCommand22initializePositionDataEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 448 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 32 | 0;
 i6 = i2 + 48 | 0;
 i7 = i2 + 64 | 0;
 i8 = i2 + 80 | 0;
 i9 = i2 + 96 | 0;
 i10 = i2 + 112 | 0;
 i11 = i2 + 128 | 0;
 i12 = i2 + 144 | 0;
 i13 = i2 + 160 | 0;
 i14 = i2 + 176 | 0;
 i15 = i2 + 192 | 0;
 i16 = i2 + 208 | 0;
 i17 = i2 + 224 | 0;
 i18 = i2 + 240 | 0;
 i19 = i2 + 256 | 0;
 i20 = i2 + 272 | 0;
 i21 = i2 + 288 | 0;
 i22 = i2 + 304 | 0;
 i23 = i2 + 320 | 0;
 i24 = i2 + 336 | 0;
 i25 = i2 + 352 | 0;
 i26 = i2 + 368 | 0;
 i27 = i2 + 384 | 0;
 i28 = i2 + 400 | 0;
 i29 = i2 + 416 | 0;
 i30 = i2 + 432 | 0;
 i31 = i3 | 0;
 i32 = i4 | 0;
 _memset(i3 | 0, 0, 12) | 0;
 _memset(i4 | 0, 0, 12) | 0;
 __ZN7WebCore22DeleteSelectionCommand18initializeStartEndERNS_8PositionES2_(i1, i3, i4);
 i33 = i1 + 224 | 0;
 __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i5, i3, 1);
 i34 = i5 | 0;
 i35 = HEAP32[i34 >> 2] | 0;
 HEAP32[i34 >> 2] = 0;
 i36 = i33 | 0;
 i37 = HEAP32[i36 >> 2] | 0;
 HEAP32[i36 >> 2] = i35;
 do {
  if ((i37 | 0) != 0) {
   i35 = i37 + 8 | 0;
   i38 = i35 | 0;
   i39 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
   HEAP32[i38 >> 2] = i39;
   if ((i39 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
  }
 } while (0);
 i37 = i1 + 228 | 0;
 HEAP32[i37 >> 2] = HEAP32[i5 + 4 >> 2];
 i35 = HEAP32[i5 + 8 >> 2] | 0;
 i5 = i1 + 232 | 0;
 i39 = i5;
 i38 = HEAP32[i39 >> 2] & -8 | i35 & 7;
 HEAP32[i39 >> 2] = i38;
 HEAP8[i5] = i38 & 255 & -9 | i35 & 8;
 i35 = HEAP32[i34 >> 2] | 0;
 do {
  if ((i35 | 0) != 0) {
   i34 = i35 + 8 | 0;
   i38 = i34 | 0;
   i40 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
   HEAP32[i38 >> 2] = i40;
   if ((i40 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
  }
 } while (0);
 i35 = i1 + 236 | 0;
 __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i6, i3, 1);
 i34 = i6 | 0;
 i40 = HEAP32[i34 >> 2] | 0;
 HEAP32[i34 >> 2] = 0;
 i38 = i35 | 0;
 i41 = HEAP32[i38 >> 2] | 0;
 HEAP32[i38 >> 2] = i40;
 do {
  if ((i41 | 0) != 0) {
   i40 = i41 + 8 | 0;
   i42 = i40 | 0;
   i43 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
   HEAP32[i42 >> 2] = i43;
   if ((i43 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
  }
 } while (0);
 i41 = i1 + 240 | 0;
 HEAP32[i41 >> 2] = HEAP32[i6 + 4 >> 2];
 i40 = HEAP32[i6 + 8 >> 2] | 0;
 i6 = i1 + 244 | 0;
 i43 = i6;
 i42 = HEAP32[i43 >> 2] & -8 | i40 & 7;
 HEAP32[i43 >> 2] = i42;
 HEAP8[i6] = i42 & 255 & -9 | i40 & 8;
 i40 = HEAP32[i34 >> 2] | 0;
 do {
  if ((i40 | 0) != 0) {
   i34 = i40 + 8 | 0;
   i42 = i34 | 0;
   i44 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
   HEAP32[i42 >> 2] = i44;
   if ((i44 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
  }
 } while (0);
 i40 = i1 + 248 | 0;
 __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i7, i4, 1);
 i34 = i7 | 0;
 i44 = HEAP32[i34 >> 2] | 0;
 HEAP32[i34 >> 2] = 0;
 i42 = i40 | 0;
 i45 = HEAP32[i42 >> 2] | 0;
 HEAP32[i42 >> 2] = i44;
 do {
  if ((i45 | 0) != 0) {
   i44 = i45 + 8 | 0;
   i46 = i44 | 0;
   i47 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
   HEAP32[i46 >> 2] = i47;
   if ((i47 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
  }
 } while (0);
 i45 = i1 + 252 | 0;
 HEAP32[i45 >> 2] = HEAP32[i7 + 4 >> 2];
 i44 = HEAP32[i7 + 8 >> 2] | 0;
 i7 = i1 + 256 | 0;
 i47 = i7;
 i46 = HEAP32[i47 >> 2] & -8 | i44 & 7;
 HEAP32[i47 >> 2] = i46;
 HEAP8[i7] = i46 & 255 & -9 | i44 & 8;
 i44 = HEAP32[i34 >> 2] | 0;
 do {
  if ((i44 | 0) != 0) {
   i34 = i44 + 8 | 0;
   i46 = i34 | 0;
   i48 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
   HEAP32[i46 >> 2] = i48;
   if ((i48 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
  }
 } while (0);
 i44 = i1 + 260 | 0;
 __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i8, i4, 1);
 i34 = i8 | 0;
 i48 = HEAP32[i34 >> 2] | 0;
 HEAP32[i34 >> 2] = 0;
 i46 = i44 | 0;
 i49 = HEAP32[i46 >> 2] | 0;
 HEAP32[i46 >> 2] = i48;
 do {
  if ((i49 | 0) != 0) {
   i48 = i49 + 8 | 0;
   i50 = i48 | 0;
   i51 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
   HEAP32[i50 >> 2] = i51;
   if ((i51 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i48 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i48 - 8 | 0);
  }
 } while (0);
 i49 = i1 + 264 | 0;
 HEAP32[i49 >> 2] = HEAP32[i8 + 4 >> 2];
 i48 = HEAP32[i8 + 8 >> 2] | 0;
 i8 = i1 + 268 | 0;
 i51 = i8;
 i50 = HEAP32[i51 >> 2] & -8 | i48 & 7;
 HEAP32[i51 >> 2] = i50;
 HEAP8[i8] = i50 & 255 & -9 | i48 & 8;
 i48 = HEAP32[i34 >> 2] | 0;
 do {
  if ((i48 | 0) != 0) {
   i34 = i48 + 8 | 0;
   i50 = i34 | 0;
   i52 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
   HEAP32[i50 >> 2] = i52;
   if ((i52 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
  }
 } while (0);
 i48 = __ZN7WebCore23editableRootForPositionERKNS_8PositionENS_12EditableTypeE(i3, 0) | 0;
 if ((i48 | 0) != 0) {
  i34 = i48 + 8 | 0;
  HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 1;
 }
 i34 = i1 + 324 | 0;
 i52 = HEAP32[i34 >> 2] | 0;
 HEAP32[i34 >> 2] = i48;
 do {
  if ((i52 | 0) != 0) {
   i48 = i52 + 8 | 0;
   i34 = i48 | 0;
   i50 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
   HEAP32[i34 >> 2] = i50;
   if ((i50 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i48 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i48 - 8 | 0);
  }
 } while (0);
 i52 = __ZN7WebCore23editableRootForPositionERKNS_8PositionENS_12EditableTypeE(i4, 0) | 0;
 if ((i52 | 0) != 0) {
  i48 = i52 + 8 | 0;
  HEAP32[i48 >> 2] = (HEAP32[i48 >> 2] | 0) + 1;
 }
 i48 = i1 + 328 | 0;
 i50 = HEAP32[i48 >> 2] | 0;
 HEAP32[i48 >> 2] = i52;
 do {
  if ((i50 | 0) != 0) {
   i52 = i50 + 8 | 0;
   i48 = i52 | 0;
   i34 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
   HEAP32[i48 >> 2] = i34;
   if ((i34 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
  }
 } while (0);
 i50 = __ZN7WebCore19enclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleE(i3, F_BASE_ii + 6 | 0, 1) | 0;
 if ((i50 | 0) != 0) {
  i52 = i50 + 8 | 0;
  HEAP32[i52 >> 2] = (HEAP32[i52 >> 2] | 0) + 1;
 }
 i52 = i1 + 332 | 0;
 i34 = HEAP32[i52 >> 2] | 0;
 HEAP32[i52 >> 2] = i50;
 do {
  if ((i34 | 0) != 0) {
   i50 = i34 + 8 | 0;
   i52 = i50 | 0;
   i48 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
   HEAP32[i52 >> 2] = i48;
   if ((i48 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
  }
 } while (0);
 i34 = __ZN7WebCore19enclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleE(i4, F_BASE_ii + 6 | 0, 1) | 0;
 if ((i34 | 0) != 0) {
  i50 = i34 + 8 | 0;
  HEAP32[i50 >> 2] = (HEAP32[i50 >> 2] | 0) + 1;
 }
 i50 = i1 + 336 | 0;
 i48 = HEAP32[i50 >> 2] | 0;
 HEAP32[i50 >> 2] = i34;
 do {
  if ((i48 | 0) != 0) {
   i34 = i48 + 8 | 0;
   i50 = i34 | 0;
   i52 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
   HEAP32[i50 >> 2] = i52;
   if ((i52 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
  }
 } while (0);
 i48 = __ZN7WebCore19enclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleE(i33, F_BASE_ii + 22 | 0, 0) | 0;
 i34 = __ZN7WebCore19enclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleE(i44, F_BASE_ii + 22 | 0, 0) | 0;
 i52 = i1 + 154 | 0;
 if (!((i34 | 0) == 0 | (i34 | 0) == (i48 | 0))) {
  HEAP8[i52] = 0;
 }
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i9, i44, 1);
 do {
  if ((HEAP8[i52] & 1) == 0) {
   i53 = 68;
  } else {
   if (__ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i9, 1) | 0) {
    i53 = 68;
    break;
   }
   i48 = HEAP32[i46 >> 2] | 0;
   if ((i48 | 0) != 0) {
    i34 = i48 + 8 | 0;
    HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 1;
   }
   i34 = i1 + 272 | 0;
   i50 = HEAP32[i34 >> 2] | 0;
   HEAP32[i34 >> 2] = i48;
   do {
    if ((i50 | 0) != 0) {
     i48 = i50 + 8 | 0;
     i34 = i48 | 0;
     i54 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
     HEAP32[i34 >> 2] = i54;
     if ((i54 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i48 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i48 - 8 | 0);
    }
   } while (0);
   HEAP32[i1 + 276 >> 2] = HEAP32[i49 >> 2];
   i50 = HEAP32[i51 >> 2] | 0;
   i48 = i1 + 280 | 0;
   i54 = i48;
   i34 = HEAP32[i54 >> 2] & -8 | i50 & 7;
   HEAP32[i54 >> 2] = i34;
   HEAP8[i48] = i34 & 255 & -9 | i50 & 8;
  }
 } while (0);
 if ((i53 | 0) == 68) {
  i50 = HEAP32[i38 >> 2] | 0;
  if ((i50 | 0) != 0) {
   i34 = i50 + 8 | 0;
   HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 1;
  }
  i34 = i1 + 272 | 0;
  i48 = HEAP32[i34 >> 2] | 0;
  HEAP32[i34 >> 2] = i50;
  do {
   if ((i48 | 0) != 0) {
    i50 = i48 + 8 | 0;
    i34 = i50 | 0;
    i54 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
    HEAP32[i34 >> 2] = i54;
    if ((i54 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
   }
  } while (0);
  HEAP32[i1 + 276 >> 2] = HEAP32[i41 >> 2];
  i48 = HEAP32[i43 >> 2] | 0;
  i50 = i1 + 280 | 0;
  i54 = i50;
  i34 = HEAP32[i54 >> 2] & -8 | i48 & 7;
  HEAP32[i54 >> 2] = i34;
  HEAP8[i50] = i34 & 255 & -9 | i48 & 8;
 }
 i48 = __ZN7WebCore27numEnclosingMailBlockquotesERKNS_8PositionE(i3) | 0;
 L98 : do {
  if ((i48 | 0) != (__ZN7WebCore27numEnclosingMailBlockquotesERKNS_8PositionE(i4) | 0)) {
   if (!(__ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i9, 1) | 0)) {
    break;
   }
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i10, i3, 1);
   if (__ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i10, 1) | 0) {
    i55 = (HEAP32[i1 + 124 >> 2] | 0) == 2;
   } else {
    i55 = 0;
   }
   i34 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i34 | 0) == 0) {
     i53 = 83;
    } else {
     i50 = i34 + 8 | 0;
     i54 = i50 | 0;
     i56 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
     HEAP32[i54 >> 2] = i56;
     if ((i56 | 0) >= 1) {
      i53 = 83;
      break;
     }
     if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
      i53 = 83;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
     if (!i55) {
      break L98;
     }
    }
   } while (0);
   if ((i53 | 0) == 83) {
    if (!i55) {
     break;
    }
   }
   HEAP8[i52] = 0;
   HEAP8[i1 + 158 | 0] = 1;
  }
 } while (0);
 i52 = i1 + 212 | 0;
 __ZNK7WebCore8Position25leadingWhitespacePositionENS_9EAffinityEb(i11, i33, HEAP32[i52 >> 2] | 0, 0);
 i55 = i11 | 0;
 i10 = HEAP32[i55 >> 2] | 0;
 HEAP32[i55 >> 2] = 0;
 i3 = i1 + 284 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i10;
 do {
  if ((i4 | 0) != 0) {
   i10 = i4 + 8 | 0;
   i48 = i10 | 0;
   i34 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
   HEAP32[i48 >> 2] = i34;
   if ((i34 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i4 = i1 + 288 | 0;
 HEAP32[i4 >> 2] = HEAP32[i11 + 4 >> 2];
 i10 = HEAP32[i11 + 8 >> 2] | 0;
 i11 = i1 + 292 | 0;
 i34 = i11;
 i48 = HEAP32[i34 >> 2] & -8 | i10 & 7;
 HEAP32[i34 >> 2] = i48;
 HEAP8[i11] = i48 & 255 & -9 | i10 & 8;
 i10 = HEAP32[i55 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i55 = i10 + 8 | 0;
   i48 = i55 | 0;
   i50 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
   HEAP32[i48 >> 2] = i50;
   if ((i50 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i55 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i55 - 8 | 0);
  }
 } while (0);
 __ZNK7WebCore8Position26trailingWhitespacePositionENS_9EAffinityEb(i12, i44, 1, 0);
 i10 = i12 | 0;
 i55 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i50 = i1 + 296 | 0;
 i48 = HEAP32[i50 >> 2] | 0;
 HEAP32[i50 >> 2] = i55;
 do {
  if ((i48 | 0) != 0) {
   i55 = i48 + 8 | 0;
   i56 = i55 | 0;
   i54 = (HEAP32[i56 >> 2] | 0) - 1 | 0;
   HEAP32[i56 >> 2] = i54;
   if ((i54 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i55 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i55 - 8 | 0);
  }
 } while (0);
 i48 = i1 + 300 | 0;
 HEAP32[i48 >> 2] = HEAP32[i12 + 4 >> 2];
 i55 = HEAP32[i12 + 8 >> 2] | 0;
 i12 = i1 + 304 | 0;
 i54 = i12;
 i56 = HEAP32[i54 >> 2] & -8 | i55 & 7;
 HEAP32[i54 >> 2] = i56;
 HEAP8[i12] = i56 & 255 & -9 | i55 & 8;
 i55 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i55 | 0) != 0) {
   i10 = i55 + 8 | 0;
   i56 = i10 | 0;
   i57 = (HEAP32[i56 >> 2] | 0) - 1 | 0;
   HEAP32[i56 >> 2] = i57;
   if ((i57 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 do {
  if ((HEAP8[i1 + 153 | 0] & 1) != 0) {
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i14, i33, HEAP32[i52 >> 2] | 0);
   i55 = i13 | 0;
   i10 = i14 | 0;
   i57 = HEAP32[i10 >> 2] | 0;
   HEAP32[i55 >> 2] = i57;
   if ((i57 | 0) == 0) {
    i58 = 0;
   } else {
    i56 = i57 + 8 | 0;
    HEAP32[i56 >> 2] = (HEAP32[i56 >> 2] | 0) + 1;
    i58 = HEAP32[i10 >> 2] | 0;
   }
   i10 = i13 + 4 | 0;
   HEAP32[i10 >> 2] = HEAP32[i14 + 4 >> 2];
   i56 = HEAP32[i14 + 8 >> 2] | 0;
   i57 = i13 + 8 | 0;
   i59 = i57;
   i60 = HEAP32[i59 >> 2] & -8 | i56 & 7;
   HEAP32[i59 >> 2] = i60;
   HEAP8[i57] = i60 & 255 & -9 | i56 & 8;
   do {
    if ((i58 | 0) != 0) {
     i56 = i58 + 8 | 0;
     i60 = i56 | 0;
     i61 = (HEAP32[i60 >> 2] | 0) - 1 | 0;
     HEAP32[i60 >> 2] = i61;
     if ((i61 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i56 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i56 - 8 | 0);
    }
   } while (0);
   __ZNK7WebCore8Position26trailingWhitespacePositionENS_9EAffinityEb(i15, i13, 1, 1);
   i56 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i56 | 0) == 0) {
     __ZNK7WebCore8Position25leadingWhitespacePositionENS_9EAffinityEb(i16, i44, 1, 1);
     i61 = HEAP32[i16 >> 2] | 0;
     if ((i61 | 0) == 0) {
      i62 = (i61 | 0) != 0;
      break;
     }
     i60 = i61 + 8 | 0;
     i61 = i60 | 0;
     i63 = (HEAP32[i61 >> 2] | 0) - 1 | 0;
     HEAP32[i61 >> 2] = i63;
     if ((i63 | 0) >= 1) {
      i62 = 1;
      break;
     }
     if ((HEAP32[i60 + 8 >> 2] | 0) != 0) {
      i62 = 1;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i60 - 8 | 0);
     i62 = 1;
    } else {
     i60 = i56 + 8 | 0;
     i63 = i60 | 0;
     i61 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
     HEAP32[i63 >> 2] = i61;
     if ((i61 | 0) >= 1) {
      i62 = 1;
      break;
     }
     if ((HEAP32[i60 + 8 >> 2] | 0) != 0) {
      i62 = 1;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i60 - 8 | 0);
     i62 = 1;
    }
   } while (0);
   __ZNK7WebCore8Position25leadingWhitespacePositionENS_9EAffinityEb(i17, i33, HEAP32[i52 >> 2] | 0, 1);
   i56 = HEAP32[i17 >> 2] | 0;
   i60 = (i56 | 0) != 0;
   do {
    if ((i56 | 0) != 0) {
     i61 = i56 + 8 | 0;
     i63 = i61 | 0;
     i64 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
     HEAP32[i63 >> 2] = i64;
     if ((i64 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i61 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i61 - 8 | 0);
    }
   } while (0);
   do {
    if (!(i62 | i60 ^ 1)) {
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i19, i33, 1);
     __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i18, i19, 0);
     i56 = HEAP32[i19 >> 2] | 0;
     do {
      if ((i56 | 0) != 0) {
       i61 = i56 + 8 | 0;
       i64 = i61 | 0;
       i63 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
       HEAP32[i64 >> 2] = i63;
       if ((i63 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i61 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i61 - 8 | 0);
      }
     } while (0);
     i56 = i18 | 0;
     i61 = HEAP32[i56 >> 2] | 0;
     if ((i61 | 0) != 0) {
      i63 = i61 + 8 | 0;
      HEAP32[i63 >> 2] = (HEAP32[i63 >> 2] | 0) + 1;
     }
     i63 = HEAP32[i18 + 4 >> 2] | 0;
     i64 = HEAP32[i18 + 8 >> 2] | 0;
     i65 = i64 & 8;
     i66 = HEAP32[i55 >> 2] | 0;
     HEAP32[i55 >> 2] = i61;
     do {
      if ((i66 | 0) != 0) {
       i61 = i66 + 8 | 0;
       i67 = i61 | 0;
       i68 = (HEAP32[i67 >> 2] | 0) - 1 | 0;
       HEAP32[i67 >> 2] = i68;
       if ((i68 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i61 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i61 - 8 | 0);
      }
     } while (0);
     HEAP32[i10 >> 2] = i63;
     i66 = HEAP32[i59 >> 2] & -8 | i64 & 7;
     HEAP32[i59 >> 2] = i66;
     HEAP8[i57] = i66 & 255 & -9 | i65;
     __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i20, i13, 1);
     i66 = i20 | 0;
     i61 = HEAP32[i66 >> 2] | 0;
     HEAP32[i66 >> 2] = 0;
     i68 = HEAP32[i36 >> 2] | 0;
     HEAP32[i36 >> 2] = i61;
     do {
      if ((i68 | 0) != 0) {
       i61 = i68 + 8 | 0;
       i67 = i61 | 0;
       i69 = (HEAP32[i67 >> 2] | 0) - 1 | 0;
       HEAP32[i67 >> 2] = i69;
       if ((i69 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i61 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i61 - 8 | 0);
      }
     } while (0);
     HEAP32[i37 >> 2] = HEAP32[i20 + 4 >> 2];
     i68 = HEAP32[i20 + 8 >> 2] | 0;
     i65 = HEAP32[i39 >> 2] & -8 | i68 & 7;
     HEAP32[i39 >> 2] = i65;
     HEAP8[i5] = i65 & 255 & -9 | i68 & 8;
     i68 = HEAP32[i66 >> 2] | 0;
     do {
      if ((i68 | 0) != 0) {
       i65 = i68 + 8 | 0;
       i64 = i65 | 0;
       i63 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
       HEAP32[i64 >> 2] = i63;
       if ((i63 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i65 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i65 - 8 | 0);
      }
     } while (0);
     __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i21, i13, 1);
     i68 = i21 | 0;
     i66 = HEAP32[i68 >> 2] | 0;
     HEAP32[i68 >> 2] = 0;
     i65 = HEAP32[i38 >> 2] | 0;
     HEAP32[i38 >> 2] = i66;
     do {
      if ((i65 | 0) != 0) {
       i66 = i65 + 8 | 0;
       i63 = i66 | 0;
       i64 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
       HEAP32[i63 >> 2] = i64;
       if ((i64 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i66 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i66 - 8 | 0);
      }
     } while (0);
     HEAP32[i41 >> 2] = HEAP32[i21 + 4 >> 2];
     i65 = HEAP32[i21 + 8 >> 2] | 0;
     i66 = HEAP32[i43 >> 2] & -8 | i65 & 7;
     HEAP32[i43 >> 2] = i66;
     HEAP8[i6] = i66 & 255 & -9 | i65 & 8;
     i65 = HEAP32[i68 >> 2] | 0;
     do {
      if ((i65 | 0) != 0) {
       i66 = i65 + 8 | 0;
       i64 = i66 | 0;
       i63 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
       HEAP32[i64 >> 2] = i63;
       if ((i63 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i66 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i66 - 8 | 0);
      }
     } while (0);
     __ZNK7WebCore8Position25leadingWhitespacePositionENS_9EAffinityEb(i22, i33, HEAP32[i18 + 12 >> 2] | 0, 0);
     i65 = i22 | 0;
     i68 = HEAP32[i65 >> 2] | 0;
     HEAP32[i65 >> 2] = 0;
     i66 = HEAP32[i3 >> 2] | 0;
     HEAP32[i3 >> 2] = i68;
     do {
      if ((i66 | 0) != 0) {
       i68 = i66 + 8 | 0;
       i63 = i68 | 0;
       i64 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
       HEAP32[i63 >> 2] = i64;
       if ((i64 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i68 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i68 - 8 | 0);
      }
     } while (0);
     HEAP32[i4 >> 2] = HEAP32[i22 + 4 >> 2];
     i66 = HEAP32[i22 + 8 >> 2] | 0;
     i68 = HEAP32[i34 >> 2] & -8 | i66 & 7;
     HEAP32[i34 >> 2] = i68;
     HEAP8[i11] = i68 & 255 & -9 | i66 & 8;
     i66 = HEAP32[i65 >> 2] | 0;
     do {
      if ((i66 | 0) != 0) {
       i68 = i66 + 8 | 0;
       i64 = i68 | 0;
       i63 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
       HEAP32[i64 >> 2] = i63;
       if ((i63 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i68 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i68 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore22DeleteSelectionCommand33setStartingSelectionOnSmartDeleteERKNS_8PositionES3_(i1, i33, i40);
     i66 = HEAP32[i56 >> 2] | 0;
     if ((i66 | 0) == 0) {
      break;
     }
     i65 = i66 + 8 | 0;
     i66 = i65 | 0;
     i68 = (HEAP32[i66 >> 2] | 0) - 1 | 0;
     HEAP32[i66 >> 2] = i68;
     if ((i68 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i65 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i65 - 8 | 0);
    }
   } while (0);
   do {
    if (!(i62 | i60)) {
     __ZNK7WebCore8Position26trailingWhitespacePositionENS_9EAffinityEb(i23, i44, 1, 1);
     i65 = HEAP32[i23 >> 2] | 0;
     i68 = (i65 | 0) == 0;
     if ((i65 | 0) == 0) {
      break;
     }
     i66 = i65 + 8 | 0;
     i65 = i66 - 8 | 0;
     i63 = i66 | 0;
     i64 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
     HEAP32[i63 >> 2] = i64;
     do {
      if ((i64 | 0) < 1) {
       if ((HEAP32[i66 + 8 >> 2] | 0) != 0) {
        i53 = 164;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i65);
      } else {
       i53 = 164;
      }
     } while (0);
     if ((i53 | 0) == 164) {
      if (i68) {
       break;
      }
     }
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i25, i44, 1);
     __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i24, i25, 0);
     i65 = i24 | 0;
     i66 = HEAP32[i65 >> 2] | 0;
     if ((i66 | 0) != 0) {
      i64 = i66 + 8 | 0;
      HEAP32[i64 >> 2] = (HEAP32[i64 >> 2] | 0) + 1;
     }
     i64 = HEAP32[i24 + 4 >> 2] | 0;
     i56 = HEAP32[i24 + 8 >> 2] | 0;
     i63 = i56 & 8;
     i61 = HEAP32[i55 >> 2] | 0;
     HEAP32[i55 >> 2] = i66;
     do {
      if ((i61 | 0) != 0) {
       i66 = i61 + 8 | 0;
       i69 = i66 | 0;
       i67 = (HEAP32[i69 >> 2] | 0) - 1 | 0;
       HEAP32[i69 >> 2] = i67;
       if ((i67 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i66 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i66 - 8 | 0);
      }
     } while (0);
     HEAP32[i10 >> 2] = i64;
     i61 = HEAP32[i59 >> 2] & -8 | i56 & 7;
     HEAP32[i59 >> 2] = i61;
     HEAP8[i57] = i61 & 255 & -9 | i63;
     i61 = HEAP32[i65 >> 2] | 0;
     do {
      if ((i61 | 0) != 0) {
       i68 = i61 + 8 | 0;
       i66 = i68 | 0;
       i67 = (HEAP32[i66 >> 2] | 0) - 1 | 0;
       HEAP32[i66 >> 2] = i67;
       if ((i67 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i68 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i68 - 8 | 0);
      }
     } while (0);
     i61 = HEAP32[i25 >> 2] | 0;
     do {
      if ((i61 | 0) != 0) {
       i65 = i61 + 8 | 0;
       i63 = i65 | 0;
       i56 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
       HEAP32[i63 >> 2] = i56;
       if ((i56 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i65 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i65 - 8 | 0);
      }
     } while (0);
     __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i26, i13, 1);
     i61 = i26 | 0;
     i65 = HEAP32[i61 >> 2] | 0;
     HEAP32[i61 >> 2] = 0;
     i56 = HEAP32[i42 >> 2] | 0;
     HEAP32[i42 >> 2] = i65;
     do {
      if ((i56 | 0) != 0) {
       i65 = i56 + 8 | 0;
       i63 = i65 | 0;
       i64 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
       HEAP32[i63 >> 2] = i64;
       if ((i64 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i65 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i65 - 8 | 0);
      }
     } while (0);
     HEAP32[i45 >> 2] = HEAP32[i26 + 4 >> 2];
     i56 = HEAP32[i26 + 8 >> 2] | 0;
     i65 = HEAP32[i47 >> 2] & -8 | i56 & 7;
     HEAP32[i47 >> 2] = i65;
     HEAP8[i7] = i65 & 255 & -9 | i56 & 8;
     i56 = HEAP32[i61 >> 2] | 0;
     do {
      if ((i56 | 0) != 0) {
       i65 = i56 + 8 | 0;
       i64 = i65 | 0;
       i63 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
       HEAP32[i64 >> 2] = i63;
       if ((i63 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i65 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i65 - 8 | 0);
      }
     } while (0);
     __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i27, i13, 1);
     i56 = i27 | 0;
     i61 = HEAP32[i56 >> 2] | 0;
     HEAP32[i56 >> 2] = 0;
     i65 = HEAP32[i46 >> 2] | 0;
     HEAP32[i46 >> 2] = i61;
     do {
      if ((i65 | 0) != 0) {
       i61 = i65 + 8 | 0;
       i63 = i61 | 0;
       i64 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
       HEAP32[i63 >> 2] = i64;
       if ((i64 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i61 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i61 - 8 | 0);
      }
     } while (0);
     HEAP32[i49 >> 2] = HEAP32[i27 + 4 >> 2];
     i65 = HEAP32[i27 + 8 >> 2] | 0;
     i61 = HEAP32[i51 >> 2] & -8 | i65 & 7;
     HEAP32[i51 >> 2] = i61;
     HEAP8[i8] = i61 & 255 & -9 | i65 & 8;
     i65 = HEAP32[i56 >> 2] | 0;
     do {
      if ((i65 | 0) != 0) {
       i61 = i65 + 8 | 0;
       i64 = i61 | 0;
       i63 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
       HEAP32[i64 >> 2] = i63;
       if ((i63 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i61 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i61 - 8 | 0);
      }
     } while (0);
     __ZNK7WebCore8Position26trailingWhitespacePositionENS_9EAffinityEb(i28, i44, 1, 0);
     i65 = i28 | 0;
     i56 = HEAP32[i65 >> 2] | 0;
     HEAP32[i65 >> 2] = 0;
     i61 = HEAP32[i50 >> 2] | 0;
     HEAP32[i50 >> 2] = i56;
     do {
      if ((i61 | 0) != 0) {
       i56 = i61 + 8 | 0;
       i63 = i56 | 0;
       i64 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
       HEAP32[i63 >> 2] = i64;
       if ((i64 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i56 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i56 - 8 | 0);
      }
     } while (0);
     HEAP32[i48 >> 2] = HEAP32[i28 + 4 >> 2];
     i61 = HEAP32[i28 + 8 >> 2] | 0;
     i56 = HEAP32[i54 >> 2] & -8 | i61 & 7;
     HEAP32[i54 >> 2] = i56;
     HEAP8[i12] = i56 & 255 & -9 | i61 & 8;
     i61 = HEAP32[i65 >> 2] | 0;
     do {
      if ((i61 | 0) != 0) {
       i56 = i61 + 8 | 0;
       i64 = i56 | 0;
       i63 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
       HEAP32[i64 >> 2] = i63;
       if ((i63 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i56 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i56 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore22DeleteSelectionCommand33setStartingSelectionOnSmartDeleteERKNS_8PositionES3_(i1, i35, i44);
    }
   } while (0);
   i57 = HEAP32[i55 >> 2] | 0;
   if ((i57 | 0) == 0) {
    break;
   }
   i59 = i57 + 8 | 0;
   i57 = i59 | 0;
   i10 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
   HEAP32[i57 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i59 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i59 - 8 | 0);
  }
 } while (0);
 __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i29, i35);
 i35 = __ZN7WebCore19enclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleE(i29, F_BASE_ii + 2 | 0, 0) | 0;
 if ((i35 | 0) != 0) {
  i44 = i35 + 8 | 0;
  HEAP32[i44 >> 2] = (HEAP32[i44 >> 2] | 0) + 1;
 }
 i44 = i1 + 308 | 0;
 i12 = HEAP32[i44 >> 2] | 0;
 HEAP32[i44 >> 2] = i35;
 do {
  if ((i12 | 0) != 0) {
   i35 = i12 + 8 | 0;
   i44 = i35 | 0;
   i54 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
   HEAP32[i44 >> 2] = i54;
   if ((i54 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
  }
 } while (0);
 i12 = HEAP32[i29 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i29 = i12 + 8 | 0;
   i35 = i29 | 0;
   i54 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
   HEAP32[i35 >> 2] = i54;
   if ((i54 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
  }
 } while (0);
 __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i30, i40);
 i40 = __ZN7WebCore19enclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleE(i30, F_BASE_ii + 2 | 0, 0) | 0;
 if ((i40 | 0) != 0) {
  i12 = i40 + 8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i12 = i1 + 312 | 0;
 i1 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = i40;
 do {
  if ((i1 | 0) != 0) {
   i40 = i1 + 8 | 0;
   i12 = i40 | 0;
   i29 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i29;
   if ((i29 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i30 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i30 = i1 + 8 | 0;
   i40 = i30 | 0;
   i29 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
   HEAP32[i40 >> 2] = i29;
   if ((i29 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i9 = i1 + 8 | 0;
   i30 = i9 | 0;
   i29 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
   HEAP32[i30 >> 2] = i29;
   if ((i29 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i32 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i32 = i1 + 8 | 0;
   i9 = i32 | 0;
   i29 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i29;
   if ((i29 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i31 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i31 = i1 + 8 | 0;
 i1 = i31 | 0;
 i32 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i32;
 if ((i32 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i31 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i31 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore22DeleteSelectionCommand19handleGeneralDeleteEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 i11 = i2 + 64 | 0;
 i12 = i2 + 72 | 0;
 i13 = i2 + 88 | 0;
 i14 = i2 + 96 | 0;
 i15 = i2 + 104 | 0;
 i16 = i2 + 112 | 0;
 i17 = i2 + 120 | 0;
 i18 = i2 + 128 | 0;
 i19 = i1 + 224 | 0;
 i20 = i19 | 0;
 i21 = HEAP32[i20 >> 2] | 0;
 if ((i21 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i22 = i1 + 232 | 0;
 do {
  if ((HEAP8[i22] & 8) == 0) {
   i23 = HEAP32[i22 >> 2] & 7;
   if (!((i23 | 0) == 2 | (i23 | 0) == 4)) {
    i24 = 4;
    break;
   }
   i23 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i19) | 0;
   i25 = i23;
   i26 = HEAP32[i20 >> 2] | 0;
  } else {
   i24 = 4;
  }
 } while (0);
 if ((i24 | 0) == 4) {
  i25 = HEAP32[i1 + 228 >> 2] | 0;
  i26 = i21;
 }
 __ZN7WebCore22DeleteSelectionCommand65makeStylingElementsDirectChildrenOfEditableRootToPreventStyleLossEv(i1);
 do {
  if ((HEAP32[i1 + 308 >> 2] | 0) == (i26 | 0) & (i25 | 0) == 0) {
   i21 = i26 + 12 | 0;
   if ((HEAP32[i21 >> 2] & 1 | 0) != 0) {
    i27 = 0;
    i28 = i26;
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i26 >> 2] | 0) + 132 >> 2] & 31](i26) | 0)) {
    i27 = 0;
    i28 = i26;
    break;
   }
   i19 = HEAP32[i21 >> 2] | 0;
   if ((i19 & 16 | 0) != 0) {
    if ((HEAP32[(HEAP32[i26 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 >> 2] | 0)) {
     i27 = 0;
     i28 = i26;
     break;
    }
   }
   if ((i19 & 2 | 0) != 0) {
    i19 = HEAP32[i26 + 36 >> 2] | 0;
    if ((i19 | 0) != 0) {
     i27 = 0;
     i28 = i19;
     break;
    }
   }
   i19 = HEAP32[i26 + 28 >> 2] | 0;
   if ((i19 | 0) != 0) {
    i27 = 0;
    i28 = i19;
    break;
   }
   i19 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i26) | 0;
   if ((i19 | 0) != 0) {
    i27 = 0;
    i28 = i19;
    break;
   }
   STACKTOP = i2;
   return;
  } else {
   i27 = i25;
   i28 = i26;
  }
 } while (0);
 do {
  if ((i27 | 0) >= (__ZN7WebCore14caretMaxOffsetEPKNS_4NodeE(i28) | 0)) {
   if ((HEAP32[i28 + 12 >> 2] & 1 | 0) == 0) {
    break;
   }
   i26 = i28 + 36 | 0;
   i25 = HEAP32[i26 >> 2] | 0;
   if ((i25 | 0) == 0) {
    __ZN7WebCore14caretMaxOffsetEPKNS_4NodeE(i28) | 0;
    break;
   }
   i19 = HEAP32[i25 + 4 >> 2] | 0;
   if (i19 >>> 0 <= (__ZN7WebCore14caretMaxOffsetEPKNS_4NodeE(i28) | 0) >>> 0) {
    break;
   }
   i19 = HEAP32[(HEAP32[i1 >> 2] | 0) + 56 >> 2] | 0;
   i25 = i6 | 0;
   HEAP32[i25 >> 2] = i28;
   if ((i28 | 0) != 0) {
    i21 = i28 + 8 | 0;
    HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
   }
   i21 = __ZN7WebCore14caretMaxOffsetEPKNS_4NodeE(i28) | 0;
   i23 = HEAP32[i26 >> 2] | 0;
   if ((i23 | 0) == 0) {
    i29 = 0;
   } else {
    i29 = HEAP32[i23 + 4 >> 2] | 0;
   }
   i23 = i29 - (__ZN7WebCore14caretMaxOffsetEPKNS_4NodeE(i28) | 0) | 0;
   FUNCTION_TABLE_viiii[i19 & 3](i1, i6, i21, i23);
   i23 = HEAP32[i25 >> 2] | 0;
   if ((i23 | 0) == 0) {
    break;
   }
   i25 = i23 + 8 | 0;
   i23 = i25 | 0;
   i21 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
   HEAP32[i23 >> 2] = i21;
   if ((i21 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
  }
 } while (0);
 do {
  if ((i27 | 0) < (__ZN7WebCore20lastOffsetForEditingEPKNS_4NodeE(i28) | 0)) {
   i30 = i27;
   i31 = i28;
   i24 = 31;
  } else {
   i6 = HEAP32[i28 + 28 >> 2] | 0;
   if ((i6 | 0) != 0) {
    i32 = i6;
    i33 = 0;
    break;
   }
   i30 = 0;
   i31 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i28) | 0;
   i24 = 31;
  }
 } while (0);
 do {
  if ((i24 | 0) == 31) {
   if ((i31 | 0) != 0) {
    i32 = i31;
    i33 = i30;
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 i30 = i1 + 260 | 0;
 i31 = i30 | 0;
 i28 = HEAP32[i31 >> 2] | 0;
 if ((i32 | 0) == (i28 | 0)) {
  i27 = i1 + 268 | 0;
  do {
   if ((HEAP8[i27] & 8) == 0) {
    i6 = HEAP32[i27 >> 2] & 7;
    if (!((i6 | 0) == 2 | (i6 | 0) == 4)) {
     i24 = 35;
     break;
    }
    i34 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i30) | 0;
   } else {
    i24 = 35;
   }
  } while (0);
  if ((i24 | 0) == 35) {
   i34 = HEAP32[i1 + 264 >> 2] | 0;
  }
  i6 = i32 + 12 | 0;
  do {
   if ((i34 - i33 | 0) > 0) {
    if ((HEAP32[i6 >> 2] & 1 | 0) != 0) {
     i29 = HEAP32[(HEAP32[i1 >> 2] | 0) + 56 >> 2] | 0;
     i25 = i7 | 0;
     HEAP32[i25 >> 2] = i32;
     if ((i32 | 0) != 0) {
      i21 = i32 + 8 | 0;
      HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
     }
     do {
      if ((HEAP8[i27] & 8) == 0) {
       i21 = HEAP32[i27 >> 2] & 7;
       if (!((i21 | 0) == 2 | (i21 | 0) == 4)) {
        i24 = 43;
        break;
       }
       i35 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i30) | 0;
      } else {
       i24 = 43;
      }
     } while (0);
     if ((i24 | 0) == 43) {
      i35 = HEAP32[i1 + 264 >> 2] | 0;
     }
     FUNCTION_TABLE_viiii[i29 & 3](i1, i7, i33, i35 - i33 | 0);
     i21 = HEAP32[i25 >> 2] | 0;
     if ((i21 | 0) == 0) {
      break;
     }
     i23 = i21 + 8 | 0;
     i21 = i23 | 0;
     i19 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     HEAP32[i21 >> 2] = i19;
     if ((i19 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
     break;
    }
    i23 = i1 | 0;
    i19 = i8 | 0;
    HEAP32[i19 >> 2] = i32;
    if ((i32 | 0) != 0) {
     i21 = i32 + 8 | 0;
     HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
    }
    do {
     if ((HEAP8[i27] & 8) == 0) {
      i21 = HEAP32[i27 >> 2] & 7;
      if (!((i21 | 0) == 2 | (i21 | 0) == 4)) {
       i24 = 53;
       break;
      }
      i36 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i30) | 0;
     } else {
      i24 = 53;
     }
    } while (0);
    if ((i24 | 0) == 53) {
     i36 = HEAP32[i1 + 264 >> 2] | 0;
    }
    __ZN7WebCore20CompositeEditCommand21removeChildrenInRangeEN3WTF10PassRefPtrINS_4NodeEEEjj(i23, i8, i33, i36);
    i25 = HEAP32[i19 >> 2] | 0;
    do {
     if ((i25 | 0) != 0) {
      i29 = i25 + 8 | 0;
      i21 = i29 | 0;
      i26 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
      HEAP32[i21 >> 2] = i26;
      if ((i26 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
     }
    } while (0);
    i25 = HEAP32[i20 >> 2] | 0;
    if ((i25 | 0) != 0) {
     i19 = i25 + 8 | 0;
     HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
    }
    i19 = i1 + 272 | 0;
    i23 = HEAP32[i19 >> 2] | 0;
    HEAP32[i19 >> 2] = i25;
    do {
     if ((i23 | 0) != 0) {
      i25 = i23 + 8 | 0;
      i19 = i25 | 0;
      i29 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
      HEAP32[i19 >> 2] = i29;
      if ((i29 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 276 >> 2] = HEAP32[i1 + 228 >> 2];
    i23 = HEAP32[i22 >> 2] | 0;
    i25 = i1 + 280 | 0;
    i29 = i25;
    i19 = HEAP32[i29 >> 2] & -8 | i23 & 7;
    HEAP32[i29 >> 2] = i19;
    HEAP8[i25] = i19 & 255 & -9 | i23 & 8;
   }
  } while (0);
  i22 = i32 + 32 | 0;
  if ((HEAP32[i6 >> 2] & 2048 | 0) == 0) {
   i37 = i22 | 0;
  } else {
   i37 = HEAP32[i22 >> 2] | 0;
  }
  do {
   if ((HEAP32[i37 >> 2] | 0) != 0) {
    if ((i33 | 0) != 0) {
     STACKTOP = i2;
     return;
    }
    if (__ZNK7WebCore8Position28atLastEditingPositionForNodeEv(i30) | 0) {
     break;
    }
    STACKTOP = i2;
    return;
   }
  } while (0);
  i37 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
  i22 = i9 | 0;
  HEAP32[i22 >> 2] = i32;
  if ((i32 | 0) != 0) {
   i6 = i32 + 8 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  }
  FUNCTION_TABLE_viii[i37 & 3](i1, i9, 1);
  i9 = HEAP32[i22 >> 2] | 0;
  if ((i9 | 0) == 0) {
   STACKTOP = i2;
   return;
  }
  i22 = i9 + 8 | 0;
  i9 = i22 | 0;
  i37 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
  HEAP32[i9 >> 2] = i37;
  if ((i37 | 0) >= 1) {
   STACKTOP = i2;
   return;
  }
  if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
   STACKTOP = i2;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
  STACKTOP = i2;
  return;
 }
 i22 = __ZNK7WebCore4Node14isDescendantOfEPKS0_(HEAP32[i20 >> 2] | 0, i28) | 0;
 i28 = i32 + 8 | 0;
 HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
 do {
  if ((i33 | 0) > 0) {
   i37 = i32 + 12 | 0;
   i9 = HEAP32[i37 >> 2] | 0;
   if ((i9 & 1 | 0) == 0) {
    do {
     if ((i9 & 2 | 0) == 0) {
      i38 = 0;
     } else {
      i6 = __ZNK7WebCore13ContainerNode9childNodeEj(i32, i33) | 0;
      if ((i6 | 0) == 0) {
       i38 = 0;
       break;
      }
      i36 = i6 + 8 | 0;
      HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 1;
      i38 = i6;
     }
    } while (0);
    if ((i32 | 0) == 0) {
     i39 = i38;
     i24 = 116;
     break;
    }
    i9 = i32 + 8 | 0;
    i6 = i9 | 0;
    i36 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
    HEAP32[i6 >> 2] = i36;
    if ((i36 | 0) >= 1) {
     i39 = i38;
     i24 = 116;
     break;
    }
    if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
     i39 = i38;
     i24 = 116;
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
    i39 = i38;
    i24 = 116;
    break;
   }
   i9 = HEAP32[(HEAP32[i1 >> 2] | 0) + 56 >> 2] | 0;
   i36 = i10 | 0;
   HEAP32[i36 >> 2] = i32;
   i6 = (i32 | 0) == 0;
   if (!i6) {
    HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
   }
   i8 = i32 + 36 | 0;
   i27 = HEAP32[i8 >> 2] | 0;
   if ((i27 | 0) == 0) {
    i40 = 0;
   } else {
    i40 = HEAP32[i27 + 4 >> 2] | 0;
   }
   FUNCTION_TABLE_viiii[i9 & 3](i1, i10, i33, i40 - i33 | 0);
   i9 = HEAP32[i36 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i36 = i9 + 8 | 0;
     i27 = i36 | 0;
     i35 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
     HEAP32[i27 >> 2] = i35;
     if ((i35 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i36 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i36 - 8 | 0);
    }
   } while (0);
   if ((HEAP32[i37 >> 2] & 2 | 0) == 0) {
    i24 = 90;
   } else {
    i9 = HEAP32[i8 >> 2] | 0;
    if ((i9 | 0) == 0) {
     i24 = 90;
    } else {
     i41 = i9;
     i24 = 92;
    }
   }
   do {
    if ((i24 | 0) == 90) {
     i9 = HEAP32[i32 + 28 >> 2] | 0;
     if ((i9 | 0) != 0) {
      i41 = i9;
      i24 = 92;
      break;
     }
     i9 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i32) | 0;
     if ((i9 | 0) == 0) {
      i42 = 0;
     } else {
      i41 = i9;
      i24 = 92;
     }
    }
   } while (0);
   if ((i24 | 0) == 92) {
    i8 = i41 + 8 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
    i42 = i41;
   }
   if (i6) {
    i39 = i42;
    i24 = 116;
    break;
   }
   i8 = i32 + 8 | 0;
   i37 = i8 | 0;
   i9 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
   HEAP32[i37 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    i39 = i42;
    i24 = 116;
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    i39 = i42;
    i24 = 116;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
   i39 = i42;
   i24 = 116;
  } else {
   i8 = i1 + 248 | 0;
   if ((i32 | 0) != (HEAP32[i8 >> 2] | 0)) {
    i43 = i32;
    i24 = 117;
    break;
   }
   if ((HEAP32[i32 + 12 >> 2] & 1 | 0) == 0) {
    i39 = i32;
    i24 = 116;
    break;
   }
   i9 = HEAP32[(HEAP32[i1 >> 2] | 0) + 56 >> 2] | 0;
   i37 = i11 | 0;
   HEAP32[i37 >> 2] = i32;
   if ((i32 | 0) != 0) {
    HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
   }
   i36 = i1 + 256 | 0;
   do {
    if ((HEAP8[i36] & 8) == 0) {
     i35 = HEAP32[i36 >> 2] & 7;
     if (!((i35 | 0) == 2 | (i35 | 0) == 4)) {
      i24 = 110;
      break;
     }
     i44 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i8) | 0;
    } else {
     i24 = 110;
    }
   } while (0);
   if ((i24 | 0) == 110) {
    i44 = HEAP32[i1 + 252 >> 2] | 0;
   }
   FUNCTION_TABLE_viiii[i9 & 3](i1, i11, 0, i44);
   i8 = HEAP32[i37 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i39 = i32;
    i24 = 116;
    break;
   }
   i36 = i8 + 8 | 0;
   i8 = i36 | 0;
   i6 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    i39 = i32;
    i24 = 116;
    break;
   }
   if ((HEAP32[i36 + 8 >> 2] | 0) != 0) {
    i39 = i32;
    i24 = 116;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i36 - 8 | 0);
   i39 = i32;
   i24 = 116;
  }
 } while (0);
 if ((i24 | 0) == 116) {
  if ((i39 | 0) == 0) {
   i45 = 0;
   i46 = 1;
  } else {
   i43 = i39;
   i24 = 117;
  }
 }
 L171 : do {
  if ((i24 | 0) == 117) {
   i39 = i12 | 0;
   i44 = i1 + 268 | 0;
   i11 = i44;
   i28 = i1 + 264 | 0;
   i42 = i1;
   i41 = i14 | 0;
   i33 = i13 | 0;
   i40 = i3 | 0;
   i10 = i43;
   L173 : while (1) {
    if ((i10 | 0) == (HEAP32[i31 >> 2] | 0)) {
     i45 = i10;
     i46 = 0;
     break L171;
    }
    do {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 132 >> 2] & 31](i10) | 0) {
      __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i12, i10);
     } else {
      HEAP32[i40 >> 2] = i10;
      i38 = i10 + 8 | 0;
      HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 1;
      __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i12, i3, 1);
      i38 = HEAP32[i40 >> 2] | 0;
      if ((i38 | 0) == 0) {
       break;
      }
      i36 = i38 + 8 | 0;
      i38 = i36 | 0;
      i6 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
      HEAP32[i38 >> 2] = i6;
      if ((i6 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i36 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i36 - 8 | 0);
     }
    } while (0);
    i36 = (__ZN7WebCore16comparePositionsERKNS_8PositionES2_(i12, i30) | 0) > -1;
    i6 = HEAP32[i39 >> 2] | 0;
    do {
     if ((i6 | 0) != 0) {
      i38 = i6 + 8 | 0;
      i8 = i38 | 0;
      i35 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
      HEAP32[i8 >> 2] = i35;
      if ((i35 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
     }
    } while (0);
    if (i36) {
     i24 = 130;
     break;
    }
    do {
     if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(HEAP32[i31 >> 2] | 0, i10) | 0) {
      i6 = __ZNK7WebCore4Node14lastDescendantEv(i10) | 0;
      if ((HEAP32[i31 >> 2] | 0) == (i6 | 0)) {
       do {
        if ((HEAP8[i44] & 8) == 0) {
         i38 = HEAP32[i11 >> 2] & 7;
         if (!((i38 | 0) == 2 | (i38 | 0) == 4)) {
          i24 = 154;
          break;
         }
         i47 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i30) | 0;
        } else {
         i24 = 154;
        }
       } while (0);
       if ((i24 | 0) == 154) {
        i24 = 0;
        i47 = HEAP32[i28 >> 2] | 0;
       }
       if ((i47 | 0) >= (__ZN7WebCore14caretMaxOffsetEPKNS_4NodeE(i6) | 0)) {
        break L173;
       }
      }
      if ((HEAP32[i10 + 12 >> 2] & 2 | 0) == 0) {
       i24 = 166;
      } else {
       i38 = HEAP32[i10 + 36 >> 2] | 0;
       if ((i38 | 0) == 0) {
        i24 = 166;
       } else {
        i48 = i38;
        i24 = 168;
       }
      }
      do {
       if ((i24 | 0) == 166) {
        i24 = 0;
        i38 = HEAP32[i10 + 28 >> 2] | 0;
        if ((i38 | 0) != 0) {
         i48 = i38;
         i24 = 168;
         break;
        }
        i38 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i10) | 0;
        if ((i38 | 0) == 0) {
         i49 = 0;
        } else {
         i48 = i38;
         i24 = 168;
        }
       }
      } while (0);
      if ((i24 | 0) == 168) {
       i24 = 0;
       i6 = i48 + 8 | 0;
       HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
       i49 = i48;
      }
      i6 = i10 + 8 | 0;
      i38 = i6 | 0;
      i35 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
      HEAP32[i38 >> 2] = i35;
      if ((i35 | 0) >= 1) {
       i50 = i49;
       break;
      }
      if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
       i50 = i49;
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
      i50 = i49;
     } else {
      i6 = HEAP32[i10 + 28 >> 2] | 0;
      if ((i6 | 0) == 0) {
       i35 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i10) | 0;
       if ((i35 | 0) == 0) {
        i51 = 0;
        i52 = 1;
       } else {
        i53 = i35;
        i24 = 136;
       }
      } else {
       i53 = i6;
       i24 = 136;
      }
      if ((i24 | 0) == 136) {
       i24 = 0;
       i6 = i53 + 8 | 0;
       HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
       i51 = i53;
       i52 = 0;
      }
      __ZN7WebCore28updatePositionForNodeRemovalERNS_8PositionEPNS_4NodeE(i30, i10);
      i6 = HEAP32[(HEAP32[i42 >> 2] | 0) + 60 >> 2] | 0;
      HEAP32[i33 >> 2] = i10;
      i35 = i10 + 8 | 0;
      HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 1;
      FUNCTION_TABLE_viii[i6 & 3](i1, i13, 1);
      i6 = HEAP32[i33 >> 2] | 0;
      do {
       if ((i6 | 0) != 0) {
        i35 = i6 + 8 | 0;
        i38 = i35 | 0;
        i8 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
        HEAP32[i38 >> 2] = i8;
        if ((i8 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
       }
      } while (0);
      if (!i52) {
       i6 = i51 + 8 | 0;
       HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
      }
      i6 = i10 + 8 | 0;
      i35 = i6 - 8 | 0;
      i8 = i6 | 0;
      i38 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
      HEAP32[i8 >> 2] = i38;
      do {
       if ((i38 | 0) < 1) {
        if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i35);
       }
      } while (0);
      if (i52) {
       i50 = i51;
       break;
      }
      i35 = i51 + 8 | 0;
      i6 = i35 | 0;
      i38 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
      HEAP32[i6 >> 2] = i38;
      if ((i38 | 0) >= 1) {
       i10 = i51;
       continue L173;
      }
      if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
       i10 = i51;
       continue L173;
      }
      __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
      i10 = i51;
      continue L173;
     }
    } while (0);
    if ((i50 | 0) == 0) {
     i45 = 0;
     i46 = 1;
     break L171;
    } else {
     i10 = i50;
    }
   }
   if ((i24 | 0) == 130) {
    i33 = i10 + 8 | 0;
    i28 = i33 | 0;
    i11 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
    HEAP32[i28 >> 2] = i11;
    if ((i11 | 0) >= 1) {
     i45 = 0;
     i46 = 1;
     break;
    }
    if ((HEAP32[i33 + 8 >> 2] | 0) != 0) {
     i45 = 0;
     i46 = 1;
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i33 - 8 | 0);
    i45 = 0;
    i46 = 1;
    break;
   }
   i33 = HEAP32[(HEAP32[i42 >> 2] | 0) + 60 >> 2] | 0;
   HEAP32[i41 >> 2] = i10;
   i11 = i10 + 8 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   FUNCTION_TABLE_viii[i33 & 3](i1, i14, 1);
   i33 = HEAP32[i41 >> 2] | 0;
   do {
    if ((i33 | 0) != 0) {
     i11 = i33 + 8 | 0;
     i28 = i11 | 0;
     i44 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     HEAP32[i28 >> 2] = i44;
     if ((i44 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
    }
   } while (0);
   i33 = i10 + 8 | 0;
   i41 = i33 | 0;
   i42 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
   HEAP32[i41 >> 2] = i42;
   if ((i42 | 0) >= 1) {
    i45 = 0;
    i46 = 1;
    break;
   }
   if ((HEAP32[i33 + 8 >> 2] | 0) != 0) {
    i45 = 0;
    i46 = 1;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i33 - 8 | 0);
   i45 = 0;
   i46 = 1;
  }
 } while (0);
 i14 = HEAP32[i31 >> 2] | 0;
 L245 : do {
  if ((i14 | 0) != (i32 | 0)) {
   if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(HEAP32[i20 >> 2] | 0, i14) | 0) {
    break;
   }
   i50 = HEAP32[i31 >> 2] | 0;
   if ((HEAP32[i50 + 12 >> 2] & 256 | 0) == 0) {
    break;
   }
   i51 = i1 + 268 | 0;
   do {
    if ((HEAP8[i51] & 8) == 0) {
     i52 = HEAP32[i51 >> 2] & 7;
     if (!((i52 | 0) == 2 | (i52 | 0) == 4)) {
      i24 = 177;
      break;
     }
     i52 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i30) | 0;
     i54 = i52;
     i55 = HEAP32[i31 >> 2] | 0;
    } else {
     i24 = 177;
    }
   } while (0);
   if ((i24 | 0) == 177) {
    i54 = HEAP32[i1 + 264 >> 2] | 0;
    i55 = i50;
   }
   if ((i54 | 0) < (__ZN7WebCore14caretMinOffsetEPKNS_4NodeE(i55) | 0)) {
    break;
   }
   do {
    if (__ZNK7WebCore8Position28atLastEditingPositionForNodeEv(i30) | 0) {
     i10 = HEAP32[i31 >> 2] | 0;
     if ((HEAP32[i10 + 12 >> 2] & 1 | 0) == 0) {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 132 >> 2] & 31](i10) | 0) {
       break;
      }
      i56 = HEAP32[i31 >> 2] | 0;
     } else {
      i56 = i10;
     }
     i10 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
     i52 = i15 | 0;
     HEAP32[i52 >> 2] = i56;
     if ((i56 | 0) != 0) {
      i13 = i56 + 8 | 0;
      HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
     }
     FUNCTION_TABLE_viii[i10 & 3](i1, i15, 1);
     i10 = HEAP32[i52 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break L245;
     }
     i52 = i10 + 8 | 0;
     i10 = i52 | 0;
     i13 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     HEAP32[i10 >> 2] = i13;
     if ((i13 | 0) >= 1) {
      break L245;
     }
     if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
      break L245;
     }
     __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
     break L245;
    }
   } while (0);
   i50 = HEAP32[i31 >> 2] | 0;
   if ((HEAP32[i50 + 12 >> 2] & 1 | 0) != 0) {
    i52 = i50;
    do {
     if ((HEAP8[i51] & 8) == 0) {
      i13 = HEAP32[i51 >> 2] & 7;
      if (!((i13 | 0) == 2 | (i13 | 0) == 4)) {
       i24 = 193;
       break;
      }
      i57 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i30) | 0;
     } else {
      i24 = 193;
     }
    } while (0);
    if ((i24 | 0) == 193) {
     i57 = HEAP32[i1 + 264 >> 2] | 0;
    }
    if ((i57 | 0) <= 0) {
     break;
    }
    i13 = HEAP32[(HEAP32[i1 >> 2] | 0) + 56 >> 2] | 0;
    i10 = i16 | 0;
    HEAP32[i10 >> 2] = i52;
    if ((i50 | 0) != 0) {
     i53 = i50 + 8 | 0;
     HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + 1;
    }
    do {
     if ((HEAP8[i51] & 8) == 0) {
      i53 = HEAP32[i51 >> 2] & 7;
      if (!((i53 | 0) == 2 | (i53 | 0) == 4)) {
       i24 = 200;
       break;
      }
      i58 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i30) | 0;
     } else {
      i24 = 200;
     }
    } while (0);
    if ((i24 | 0) == 200) {
     i58 = HEAP32[i1 + 264 >> 2] | 0;
    }
    FUNCTION_TABLE_viiii[i13 & 3](i1, i16, 0, i58);
    i52 = HEAP32[i10 >> 2] | 0;
    if ((i52 | 0) == 0) {
     break;
    }
    i53 = i52 + 8 | 0;
    i52 = i53 | 0;
    i49 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
    HEAP32[i52 >> 2] = i49;
    if ((i49 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i53 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i53 - 8 | 0);
    break;
   }
   i53 = HEAP32[i20 >> 2] | 0;
   if (i22) {
    if ((HEAP32[i53 + 12 >> 2] & 256 | 0) == 0) {
     break;
    }
   }
   L294 : do {
    if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(i53, i50) | 0) {
     i49 = HEAP32[i20 >> 2] | 0;
     while (1) {
      if ((i49 | 0) == 0) {
       i59 = 0;
       break L294;
      }
      i52 = HEAP32[i49 + 16 >> 2] | 0;
      if ((i52 | 0) == (HEAP32[i31 >> 2] | 0)) {
       break;
      } else {
       i49 = i52;
      }
     }
     i59 = (__ZNK7WebCore4Node9nodeIndexEv(i49) | 0) + 1 | 0;
    } else {
     i59 = 0;
    }
   } while (0);
   i50 = i1 | 0;
   i53 = HEAP32[i31 >> 2] | 0;
   i10 = i17 | 0;
   HEAP32[i10 >> 2] = i53;
   if ((i53 | 0) != 0) {
    i13 = i53 + 8 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   }
   do {
    if ((HEAP8[i51] & 8) == 0) {
     i13 = HEAP32[i51 >> 2] & 7;
     if (!((i13 | 0) == 2 | (i13 | 0) == 4)) {
      i24 = 217;
      break;
     }
     i60 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i30) | 0;
    } else {
     i24 = 217;
    }
   } while (0);
   if ((i24 | 0) == 217) {
    i60 = HEAP32[i1 + 264 >> 2] | 0;
   }
   __ZN7WebCore20CompositeEditCommand21removeChildrenInRangeEN3WTF10PassRefPtrINS_4NodeEEEjj(i50, i17, i59, i60);
   i13 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i53 = i13 + 8 | 0;
     i52 = i53 | 0;
     i48 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
     HEAP32[i52 >> 2] = i48;
     if ((i48 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i53 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i53 - 8 | 0);
    }
   } while (0);
   i13 = HEAP32[i31 >> 2] | 0;
   if ((i13 | 0) != 0) {
    i10 = i13 + 8 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   }
   i10 = i4 | 0;
   HEAP32[i10 >> 2] = i13;
   HEAP32[i5 >> 2] = i59;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i18, i4, i5);
   i13 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i10 = i13 + 8 | 0;
     i50 = i10 | 0;
     i53 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
     HEAP32[i50 >> 2] = i53;
     if ((i53 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
    }
   } while (0);
   i13 = i18 | 0;
   i10 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = 0;
   i53 = HEAP32[i31 >> 2] | 0;
   HEAP32[i31 >> 2] = i10;
   do {
    if ((i53 | 0) != 0) {
     i10 = i53 + 8 | 0;
     i50 = i10 | 0;
     i48 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
     HEAP32[i50 >> 2] = i48;
     if ((i48 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
    }
   } while (0);
   HEAP32[i1 + 264 >> 2] = HEAP32[i18 + 4 >> 2];
   i53 = HEAP32[i18 + 8 >> 2] | 0;
   i10 = i51;
   i48 = HEAP32[i10 >> 2] & -8 | i53 & 7;
   HEAP32[i10 >> 2] = i48;
   HEAP8[i51] = i48 & 255 & -9 | i53 & 8;
   i53 = HEAP32[i13 >> 2] | 0;
   if ((i53 | 0) == 0) {
    break;
   }
   i48 = i53 + 8 | 0;
   i53 = i48 | 0;
   i10 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
   HEAP32[i53 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i48 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i48 - 8 | 0);
  }
 } while (0);
 if (i46) {
  STACKTOP = i2;
  return;
 }
 i46 = i45 + 8 | 0;
 i45 = i46 | 0;
 i18 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
 HEAP32[i45 >> 2] = i18;
 if ((i18 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore22DeleteSelectionCommand15mergeParagraphsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 344 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 40 | 0;
 i7 = i2 + 48 | 0;
 i8 = i2 + 56 | 0;
 i9 = i2 + 64 | 0;
 i10 = i2 + 80 | 0;
 i11 = i2 + 96 | 0;
 i12 = i2 + 112 | 0;
 i13 = i2 + 128 | 0;
 i14 = i2 + 144 | 0;
 i15 = i2 + 160 | 0;
 i16 = i2 + 168 | 0;
 i17 = i2 + 184 | 0;
 i18 = i2 + 200 | 0;
 i19 = i2 + 208 | 0;
 i20 = i2 + 224 | 0;
 i21 = i2 + 240 | 0;
 i22 = i2 + 256 | 0;
 i23 = i2 + 272 | 0;
 i24 = i2 + 280 | 0;
 i25 = i2 + 296 | 0;
 i26 = i2 + 312 | 0;
 i27 = i2 + 328 | 0;
 if ((HEAP8[i1 + 154 | 0] & 1) == 0) {
  if ((HEAP8[i1 + 158 | 0] & 1) == 0) {
   STACKTOP = i2;
   return;
  }
  i28 = i3 | 0;
  i29 = HEAP32[i1 + 308 >> 2] | 0;
  HEAP32[i28 >> 2] = i29;
  if ((i29 | 0) != 0) {
   i30 = i29 + 8 | 0;
   HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
  }
  __ZN7WebCore20CompositeEditCommand5pruneEN3WTF10PassRefPtrINS_4NodeEEE(i1 | 0, i3);
  i3 = HEAP32[i28 >> 2] | 0;
  do {
   if ((i3 | 0) != 0) {
    i28 = i3 + 8 | 0;
    i30 = i28 | 0;
    i29 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
    HEAP32[i30 >> 2] = i29;
    if ((i29 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
   }
  } while (0);
  HEAP8[i1 + 155 | 0] = 0;
  STACKTOP = i2;
  return;
 }
 i3 = i1 + 260 | 0;
 i28 = i3 | 0;
 if ((HEAP32[(HEAP32[i28 >> 2] | 0) + 12 >> 2] & 256 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i29 = i1 + 224 | 0;
 i30 = i29 | 0;
 if ((HEAP32[(HEAP32[i30 >> 2] | 0) + 12 >> 2] & 256 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((__ZN7WebCore16comparePositionsERKNS_8PositionES2_(i29, i3) | 0) > 0) {
  STACKTOP = i2;
  return;
 }
 do {
  if ((HEAP32[i30 >> 2] | 0) == (HEAP32[i28 >> 2] | 0)) {
   i31 = i1 + 232 | 0;
   do {
    if ((HEAP8[i31] & 8) == 0) {
     i32 = HEAP32[i31 >> 2] & 7;
     if (!((i32 | 0) == 2 | (i32 | 0) == 4)) {
      i33 = 16;
      break;
     }
     i34 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i29) | 0;
    } else {
     i33 = 16;
    }
   } while (0);
   if ((i33 | 0) == 16) {
    i34 = HEAP32[i1 + 228 >> 2] | 0;
   }
   i32 = i1 + 268 | 0;
   do {
    if ((HEAP8[i32] & 8) == 0) {
     i35 = HEAP32[i32 >> 2] & 7;
     if (!((i35 | 0) == 2 | (i35 | 0) == 4)) {
      i33 = 20;
      break;
     }
     i36 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i3) | 0;
    } else {
     i33 = 20;
    }
   } while (0);
   if ((i33 | 0) == 20) {
    i36 = HEAP32[i1 + 264 >> 2] | 0;
   }
   if ((i34 | 0) != (i36 | 0)) {
    break;
   }
   if (((HEAP32[i32 >> 2] ^ HEAP32[i31 >> 2]) & 7 | 0) != 0) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i4, i3, 1);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i5, i29, 1);
 i3 = __ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(HEAP32[i28 >> 2] | 0, 1) | 0;
 L42 : do {
  if ((i3 | 0) == 0) {
   i33 = 37;
  } else {
   i36 = i4 | 0;
   i34 = HEAP32[i36 >> 2] | 0;
   i35 = (i34 | 0) == 0;
   if (!i35) {
    i37 = i34 + 8 | 0;
    HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 1;
   }
   do {
    if (__ZNK7WebCore4Node8containsEPKS0_(i3 | 0, i34) | 0) {
     i37 = HEAP32[i36 >> 2] | 0;
     if ((i37 | 0) == 0) {
      i38 = 1;
      break;
     }
     i39 = i37 + 8 | 0;
     HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
     i39 = i37 + 8 | 0;
     i37 = i39 | 0;
     i40 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
     HEAP32[i37 >> 2] = i40;
     if ((i40 | 0) >= 1) {
      i38 = 0;
      break;
     }
     if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
      i38 = 0;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i39 - 8 | 0);
     i38 = 0;
    } else {
     i38 = 1;
    }
   } while (0);
   do {
    if (i35) {
     i33 = 36;
    } else {
     i31 = i34 + 8 | 0;
     i32 = i31 | 0;
     i39 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
     HEAP32[i32 >> 2] = i39;
     if ((i39 | 0) >= 1) {
      i33 = 36;
      break;
     }
     if ((HEAP32[i31 + 8 >> 2] | 0) != 0) {
      i33 = 36;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i31 - 8 | 0);
     if (i38) {
      i33 = 37;
      break L42;
     }
    }
   } while (0);
   if ((i33 | 0) == 36) {
    if (i38) {
     i33 = 37;
     break;
    }
   }
   i34 = i5 | 0;
   i35 = HEAP32[i34 >> 2] | 0;
   L60 : do {
    if ((i35 | 0) == 0) {
     i31 = i5 + 8 | 0;
     i41 = i5 + 4 | 0;
     i42 = i31;
     i43 = i31;
     i33 = 57;
    } else {
     i31 = i35 + 8 | 0;
     HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
     i31 = i5 + 4 | 0;
     i39 = i5 + 8 | 0;
     i32 = i39;
     i40 = HEAP32[i34 >> 2] | 0;
     i37 = (i40 | 0) == 0;
     if (!i37) {
      i44 = i40 + 8 | 0;
      HEAP32[i44 >> 2] = (HEAP32[i44 >> 2] | 0) + 1;
     }
     if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(i40, __ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(__ZNK7WebCore8Position13containerNodeEv(i29) | 0, 1) | 0) | 0) {
      i45 = (HEAP8[i1 + 159 | 0] & 1) != 0;
     } else {
      i45 = 1;
     }
     do {
      if (!i37) {
       i44 = i40 + 8 | 0;
       i46 = i44 | 0;
       i47 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
       HEAP32[i46 >> 2] = i47;
       if ((i47 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
      }
     } while (0);
     i40 = i35 + 8 | 0;
     i37 = i40 - 8 | 0;
     i44 = i40 | 0;
     i47 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
     HEAP32[i44 >> 2] = i47;
     do {
      if ((i47 | 0) < 1) {
       if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i37);
       if (i45) {
        i41 = i31;
        i42 = i39;
        i43 = i32;
        i33 = 57;
        break L60;
       } else {
        i48 = i31;
        i49 = i32;
        break L60;
       }
      }
     } while (0);
     if (i45) {
      i41 = i31;
      i42 = i39;
      i43 = i32;
      i33 = 57;
     } else {
      i48 = i31;
      i49 = i32;
     }
    }
   } while (0);
   do {
    if ((i33 | 0) == 57) {
     __ZN7WebCore18createBreakElementERNS_8DocumentE(i8, HEAP32[i1 + 8 >> 2] | 0);
     i35 = i8 | 0;
     i37 = HEAP32[i35 >> 2] | 0;
     i40 = i7 | 0;
     HEAP32[i40 >> 2] = i37;
     if ((i37 | 0) != 0) {
      i47 = i37 + 8 | 0;
      HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
     }
     __ZN7WebCore20CompositeEditCommand12insertNodeAtEN3WTF10PassRefPtrINS_4NodeEEERKNS_8PositionE(i1 | 0, i7, i29);
     i47 = HEAP32[i40 >> 2] | 0;
     do {
      if ((i47 | 0) != 0) {
       i40 = i47 + 8 | 0;
       i37 = i40 | 0;
       i44 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
       HEAP32[i37 >> 2] = i44;
       if ((i44 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
      }
     } while (0);
     i47 = HEAP32[i35 >> 2] | 0;
     do {
      if ((i47 | 0) != 0) {
       i32 = i47 + 8 | 0;
       i31 = i32 | 0;
       i39 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
       HEAP32[i31 >> 2] = i39;
       if ((i39 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i9, i29, 1);
     i47 = i9 | 0;
     i35 = HEAP32[i47 >> 2] | 0;
     HEAP32[i47 >> 2] = 0;
     i32 = HEAP32[i34 >> 2] | 0;
     HEAP32[i34 >> 2] = i35;
     do {
      if ((i32 | 0) != 0) {
       i35 = i32 + 8 | 0;
       i39 = i35 | 0;
       i31 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
       HEAP32[i39 >> 2] = i31;
       if ((i31 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
      }
     } while (0);
     HEAP32[i41 >> 2] = HEAP32[i9 + 4 >> 2];
     i32 = HEAP32[i9 + 8 >> 2] | 0;
     i35 = HEAP32[i43 >> 2] & -8 | i32 & 7;
     HEAP32[i43 >> 2] = i35;
     HEAP8[i42] = i35 & 255 & -9 | i32 & 8;
     HEAP32[i5 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
     i32 = HEAP32[i47 >> 2] | 0;
     if ((i32 | 0) == 0) {
      i48 = i41;
      i49 = i43;
      break;
     }
     i35 = i32 + 8 | 0;
     i32 = i35 | 0;
     i31 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
     HEAP32[i32 >> 2] = i31;
     if ((i31 | 0) >= 1) {
      i48 = i41;
      i49 = i43;
      break;
     }
     if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
      i48 = i41;
      i49 = i43;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
     i48 = i41;
     i49 = i43;
    }
   } while (0);
   if (__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i5, i4) | 0) {
    break;
   }
   __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i10, i4, 2);
   L103 : do {
    if (!(__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i5, i10) | 0)) {
     do {
      if ((HEAP8[i1 + 159 | 0] & 1) == 0) {
       if (!(__ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i5, 1) | 0)) {
        break;
       }
       __ZNK7WebCore15VisiblePosition19absoluteCaretBoundsEv(i11, i4);
       i35 = HEAP32[i11 >> 2] | 0;
       __ZNK7WebCore15VisiblePosition19absoluteCaretBoundsEv(i12, i5);
       if ((i35 | 0) <= (HEAP32[i12 >> 2] | 0)) {
        break;
       }
       i35 = i14 | 0;
       i31 = HEAP32[i34 >> 2] | 0;
       HEAP32[i35 >> 2] = i31;
       if ((i31 | 0) != 0) {
        i32 = i31 + 8 | 0;
        HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
       }
       HEAP32[i14 + 4 >> 2] = HEAP32[i48 >> 2];
       i32 = HEAP32[i49 >> 2] | 0;
       i31 = i14 + 8 | 0;
       i39 = i31;
       i40 = HEAP32[i39 >> 2] & -8 | i32 & 7;
       HEAP32[i39 >> 2] = i40;
       HEAP8[i31] = i40 & 255 & -9 | i32 & 8;
       __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i13, i14, 1);
       i32 = HEAP32[i13 >> 2] | 0;
       do {
        if ((HEAP32[i32 + 12 >> 2] & 4 | 0) == 0) {
         i50 = 0;
        } else {
         i40 = HEAP32[i32 + 44 >> 2] | 0;
         i31 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
         if ((i40 | 0) == (i31 | 0)) {
          i50 = 1;
          break;
         }
         if ((HEAP32[i40 + 12 >> 2] | 0) != (HEAP32[i31 + 12 >> 2] | 0)) {
          i50 = 0;
          break;
         }
         i50 = (HEAP32[i40 + 16 >> 2] | 0) == (HEAP32[i31 + 16 >> 2] | 0);
        }
       } while (0);
       do {
        if ((i32 | 0) != 0) {
         i31 = i32 + 8 | 0;
         i40 = i31 | 0;
         i39 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
         HEAP32[i40 >> 2] = i39;
         if ((i39 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i31 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i31 - 8 | 0);
        }
       } while (0);
       i32 = HEAP32[i35 >> 2] | 0;
       do {
        if ((i32 | 0) != 0) {
         i31 = i32 + 8 | 0;
         i39 = i31 | 0;
         i40 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
         HEAP32[i39 >> 2] = i40;
         if ((i40 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i31 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i31 - 8 | 0);
        }
       } while (0);
       if (!i50) {
        break;
       }
       i32 = i17 | 0;
       i35 = HEAP32[i34 >> 2] | 0;
       HEAP32[i32 >> 2] = i35;
       if ((i35 | 0) != 0) {
        i31 = i35 + 8 | 0;
        HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
       }
       HEAP32[i17 + 4 >> 2] = HEAP32[i48 >> 2];
       i31 = HEAP32[i49 >> 2] | 0;
       i35 = i17 + 8 | 0;
       i40 = i35;
       i39 = HEAP32[i40 >> 2] & -8 | i31 & 7;
       HEAP32[i40 >> 2] = i39;
       HEAP8[i35] = i39 & 255 & -9 | i31 & 8;
       __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i16, i17, 1);
       i31 = i16 | 0;
       i39 = HEAP32[i31 >> 2] | 0;
       i35 = i15 | 0;
       HEAP32[i35 >> 2] = i39;
       if ((i39 | 0) != 0) {
        i40 = i39 + 8 | 0;
        HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) + 1;
       }
       __ZN7WebCore20CompositeEditCommand27removeNodeAndPruneAncestorsEN3WTF10PassRefPtrINS_4NodeEEE(i1 | 0, i15);
       i40 = HEAP32[i35 >> 2] | 0;
       do {
        if ((i40 | 0) != 0) {
         i35 = i40 + 8 | 0;
         i39 = i35 | 0;
         i44 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
         HEAP32[i39 >> 2] = i44;
         if ((i44 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
        }
       } while (0);
       i40 = HEAP32[i31 >> 2] | 0;
       do {
        if ((i40 | 0) != 0) {
         i35 = i40 + 8 | 0;
         i44 = i35 | 0;
         i39 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
         HEAP32[i44 >> 2] = i39;
         if ((i39 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
        }
       } while (0);
       i40 = HEAP32[i32 >> 2] | 0;
       do {
        if ((i40 | 0) != 0) {
         i31 = i40 + 8 | 0;
         i35 = i31 | 0;
         i39 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
         HEAP32[i35 >> 2] = i39;
         if ((i39 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i31 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i31 - 8 | 0);
        }
       } while (0);
       i40 = HEAP32[i36 >> 2] | 0;
       if ((i40 | 0) != 0) {
        i32 = i40 + 8 | 0;
        HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
       }
       i32 = HEAP32[i4 + 4 >> 2] | 0;
       i31 = HEAP32[i4 + 8 >> 2] | 0;
       i39 = i31 & 8;
       i35 = i1 + 272 | 0;
       i44 = HEAP32[i35 >> 2] | 0;
       HEAP32[i35 >> 2] = i40;
       do {
        if ((i44 | 0) != 0) {
         i40 = i44 + 8 | 0;
         i35 = i40 | 0;
         i37 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
         HEAP32[i35 >> 2] = i37;
         if ((i37 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
        }
       } while (0);
       HEAP32[i1 + 276 >> 2] = i32;
       i44 = i1 + 280 | 0;
       i40 = i44;
       i37 = HEAP32[i40 >> 2] & -8 | i31 & 7;
       HEAP32[i40 >> 2] = i37;
       HEAP8[i44] = i37 & 255 & -9 | i39;
       break L103;
      }
     } while (0);
     i47 = HEAP32[i36 >> 2] | 0;
     i37 = (i47 | 0) == 0;
     if (!i37) {
      i44 = i47 + 8 | 0;
      HEAP32[i44 >> 2] = (HEAP32[i44 >> 2] | 0) + 1;
     }
     i44 = i4 + 4 | 0;
     i40 = i4 + 8 | 0;
     do {
      if (__ZN7WebCore35isRenderedAsNonInlineTableImageOrHREPKNS_4NodeE(i47) | 0) {
       i35 = __ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i5, 1) | 0;
       do {
        if (!i37) {
         i46 = i47 + 8 | 0;
         i51 = i46 | 0;
         i52 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
         HEAP32[i51 >> 2] = i52;
         if ((i52 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
        }
       } while (0);
       if (i35) {
        break;
       }
       i39 = HEAP32[i30 >> 2] | 0;
       if ((i39 | 0) != 0) {
        i31 = i39 + 8 | 0;
        HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
       }
       i31 = i1 + 272 | 0;
       i32 = HEAP32[i31 >> 2] | 0;
       HEAP32[i31 >> 2] = i39;
       do {
        if ((i32 | 0) != 0) {
         i39 = i32 + 8 | 0;
         i31 = i39 | 0;
         i46 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
         HEAP32[i31 >> 2] = i46;
         if ((i46 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i39 - 8 | 0);
        }
       } while (0);
       HEAP32[i1 + 276 >> 2] = HEAP32[i1 + 228 >> 2];
       i32 = HEAP32[i1 + 232 >> 2] | 0;
       i35 = i1 + 280 | 0;
       i39 = i35;
       i46 = HEAP32[i39 >> 2] & -8 | i32 & 7;
       HEAP32[i39 >> 2] = i46;
       HEAP8[i35] = i46 & 255 & -9 | i32 & 8;
       break L103;
      } else {
       if (i37) {
        break;
       }
       i32 = i47 + 8 | 0;
       i46 = i32 | 0;
       i35 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
       HEAP32[i46 >> 2] = i35;
       if ((i35 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
      }
     } while (0);
     i47 = i1 | 0;
     i37 = i1 + 8 | 0;
     i32 = HEAP32[i37 >> 2] | 0;
     i35 = i20 | 0;
     i46 = HEAP32[i36 >> 2] | 0;
     HEAP32[i35 >> 2] = i46;
     if ((i46 | 0) != 0) {
      i39 = i46 + 8 | 0;
      HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
     }
     HEAP32[i20 + 4 >> 2] = HEAP32[i44 >> 2];
     i39 = HEAP32[i40 >> 2] | 0;
     i46 = i20 + 8 | 0;
     i31 = i46;
     i52 = HEAP32[i31 >> 2] & -8 | i39 & 7;
     HEAP32[i31 >> 2] = i52;
     HEAP8[i46] = i52 & 255 & -9 | i39 & 8;
     __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i19, i20);
     i39 = i22 | 0;
     i52 = HEAP32[i10 >> 2] | 0;
     HEAP32[i39 >> 2] = i52;
     if ((i52 | 0) != 0) {
      i46 = i52 + 8 | 0;
      HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 1;
     }
     HEAP32[i22 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
     i46 = HEAP32[i10 + 8 >> 2] | 0;
     i52 = i22 + 8 | 0;
     i31 = i52;
     i51 = HEAP32[i31 >> 2] & -8 | i46 & 7;
     HEAP32[i31 >> 2] = i51;
     HEAP8[i52] = i51 & 255 & -9 | i46 & 8;
     __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i21, i22);
     __ZN7WebCore5Range6createERNS_8DocumentERKNS_8PositionES5_(i18, i32, i19, i21);
     i32 = i18 | 0;
     i46 = HEAP32[i32 >> 2] | 0;
     HEAP32[i32 >> 2] = 0;
     i32 = HEAP32[i21 >> 2] | 0;
     do {
      if ((i32 | 0) != 0) {
       i51 = i32 + 8 | 0;
       i52 = i51 | 0;
       i31 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
       HEAP32[i52 >> 2] = i31;
       if ((i31 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i51 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i51 - 8 | 0);
      }
     } while (0);
     i32 = HEAP32[i39 >> 2] | 0;
     do {
      if ((i32 | 0) != 0) {
       i40 = i32 + 8 | 0;
       i44 = i40 | 0;
       i51 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
       HEAP32[i44 >> 2] = i51;
       if ((i51 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
      }
     } while (0);
     i32 = HEAP32[i19 >> 2] | 0;
     do {
      if ((i32 | 0) != 0) {
       i39 = i32 + 8 | 0;
       i40 = i39 | 0;
       i51 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
       HEAP32[i40 >> 2] = i51;
       if ((i51 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i39 - 8 | 0);
      }
     } while (0);
     i32 = HEAP32[i35 >> 2] | 0;
     do {
      if ((i32 | 0) != 0) {
       i39 = i32 + 8 | 0;
       i51 = i39 | 0;
       i40 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
       HEAP32[i51 >> 2] = i40;
       if ((i40 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i39 - 8 | 0);
      }
     } while (0);
     i32 = HEAP32[i37 >> 2] | 0;
     i35 = i25 | 0;
     i39 = HEAP32[i34 >> 2] | 0;
     HEAP32[i35 >> 2] = i39;
     if ((i39 | 0) != 0) {
      i40 = i39 + 8 | 0;
      HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) + 1;
     }
     HEAP32[i25 + 4 >> 2] = HEAP32[i48 >> 2];
     i40 = HEAP32[i49 >> 2] | 0;
     i39 = i25 + 8 | 0;
     i51 = i39;
     i44 = HEAP32[i51 >> 2] & -8 | i40 & 7;
     HEAP32[i51 >> 2] = i44;
     HEAP8[i39] = i44 & 255 & -9 | i40 & 8;
     __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i24, i25);
     i40 = i27 | 0;
     i44 = HEAP32[i34 >> 2] | 0;
     HEAP32[i40 >> 2] = i44;
     if ((i44 | 0) != 0) {
      i39 = i44 + 8 | 0;
      HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
     }
     HEAP32[i27 + 4 >> 2] = HEAP32[i48 >> 2];
     i39 = HEAP32[i49 >> 2] | 0;
     i44 = i27 + 8 | 0;
     i51 = i44;
     i31 = HEAP32[i51 >> 2] & -8 | i39 & 7;
     HEAP32[i51 >> 2] = i31;
     HEAP8[i44] = i31 & 255 & -9 | i39 & 8;
     __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i26, i27);
     __ZN7WebCore5Range6createERNS_8DocumentERKNS_8PositionES5_(i23, i32, i24, i26);
     i32 = i23 | 0;
     i39 = HEAP32[i32 >> 2] | 0;
     HEAP32[i32 >> 2] = 0;
     i32 = HEAP32[i26 >> 2] | 0;
     do {
      if ((i32 | 0) != 0) {
       i31 = i32 + 8 | 0;
       i44 = i31 | 0;
       i51 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
       HEAP32[i44 >> 2] = i51;
       if ((i51 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i31 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i31 - 8 | 0);
      }
     } while (0);
     i32 = HEAP32[i40 >> 2] | 0;
     do {
      if ((i32 | 0) != 0) {
       i37 = i32 + 8 | 0;
       i31 = i37 | 0;
       i51 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
       HEAP32[i31 >> 2] = i51;
       if ((i51 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i37 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i37 - 8 | 0);
      }
     } while (0);
     i32 = HEAP32[i24 >> 2] | 0;
     do {
      if ((i32 | 0) != 0) {
       i40 = i32 + 8 | 0;
       i37 = i40 | 0;
       i51 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
       HEAP32[i37 >> 2] = i51;
       if ((i51 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
      }
     } while (0);
     i32 = HEAP32[i35 >> 2] | 0;
     do {
      if ((i32 | 0) != 0) {
       i40 = i32 + 8 | 0;
       i51 = i40 | 0;
       i37 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
       HEAP32[i51 >> 2] = i37;
       if ((i37 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
      }
     } while (0);
     i32 = __ZNK7WebCore6Editor6clientEv(HEAP32[(__ZN7WebCore11EditCommand5frameEv(i47) | 0) + 464 >> 2] | 0) | 0;
     if (FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i32 >> 2] | 0) + 68 >> 2] & 1](i32, i46, i39) | 0) {
      i32 = i1 + 155 | 0;
      i35 = HEAP8[i32] & 1;
      __ZN7WebCore20CompositeEditCommand13moveParagraphERKNS_15VisiblePositionES3_S3_bb(i1 | 0, i4, i10, i5, 0, (__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i4, i10) | 0) ^ 1);
      HEAP8[i32] = i35;
      i35 = HEAP32[i1 + 96 >> 2] | 0;
      if ((i35 | 0) != 0) {
       i32 = i35 + 8 | 0;
       HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
      }
      i32 = HEAP32[i1 + 100 >> 2] | 0;
      i40 = HEAP32[i1 + 104 >> 2] | 0;
      i37 = i40 & 8;
      i51 = i1 + 272 | 0;
      i31 = HEAP32[i51 >> 2] | 0;
      HEAP32[i51 >> 2] = i35;
      do {
       if ((i31 | 0) != 0) {
        i35 = i31 + 8 | 0;
        i51 = i35 | 0;
        i44 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
        HEAP32[i51 >> 2] = i44;
        if ((i44 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
       }
      } while (0);
      HEAP32[i1 + 276 >> 2] = i32;
      i31 = i1 + 280 | 0;
      i47 = i31;
      i35 = HEAP32[i47 >> 2] & -8 | i40 & 7;
      HEAP32[i47 >> 2] = i35;
      HEAP8[i31] = i35 & 255 & -9 | i37;
     }
     do {
      if ((i39 | 0) != 0) {
       i35 = i39 | 0;
       i31 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
       if ((i31 | 0) == 0) {
        __ZN7WebCore5RangeD1Ev(i39);
        __ZN3WTF8fastFreeEPv(i39);
        break;
       } else {
        HEAP32[i35 >> 2] = i31;
        break;
       }
      }
     } while (0);
     if ((i46 | 0) == 0) {
      break;
     }
     i39 = i46 | 0;
     i37 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
     if ((i37 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i46);
      __ZN3WTF8fastFreeEPv(i46);
      break;
     } else {
      HEAP32[i39 >> 2] = i37;
      break;
     }
    }
   } while (0);
   i34 = HEAP32[i10 >> 2] | 0;
   if ((i34 | 0) == 0) {
    break;
   }
   i36 = i34 + 8 | 0;
   i34 = i36 | 0;
   i37 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
   HEAP32[i34 >> 2] = i37;
   if ((i37 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i36 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i36 - 8 | 0);
  }
 } while (0);
 do {
  if ((i33 | 0) == 37) {
   i10 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
   i24 = __ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(HEAP32[i28 >> 2] | 0, 1) | 0;
   i26 = i6 | 0;
   HEAP32[i26 >> 2] = i24;
   if ((i24 | 0) != 0) {
    i23 = i24 + 8 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
   }
   FUNCTION_TABLE_viii[i10 & 3](i1, i6, 1);
   i10 = HEAP32[i26 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i26 = i10 + 8 | 0;
   i10 = i26 | 0;
   i23 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i23;
   if ((i23 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
  }
 } while (0);
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 + 8 | 0;
   i1 = i5 | 0;
   i28 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i28;
   if ((i28 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i6 + 8 | 0;
 i6 = i4 | 0;
 i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore22DeleteSelectionCommand18initializeStartEndERNS_8PositionES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 208 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 64 | 0;
 i13 = i4 + 80 | 0;
 i14 = i4 + 96 | 0;
 i15 = i4 + 112 | 0;
 i16 = i4 + 128 | 0;
 i17 = i4 + 144 | 0;
 i18 = i4 + 160 | 0;
 i19 = i4 + 176 | 0;
 i20 = i4 + 192 | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i10 >> 2] = 0;
 i21 = HEAP32[i1 + 188 >> 2] | 0;
 if ((i21 | 0) != 0) {
  i22 = i21 + 8 | 0;
  HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
 }
 i22 = HEAP32[i1 + 192 >> 2] | 0;
 i23 = HEAP32[i1 + 196 >> 2] | 0;
 i24 = i23 & 8;
 i25 = i2 | 0;
 i26 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = i21;
 do {
  if ((i26 | 0) != 0) {
   i21 = i26 + 8 | 0;
   i27 = i21 | 0;
   i28 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
   HEAP32[i27 >> 2] = i28;
   if ((i28 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
  }
 } while (0);
 i26 = i2 + 4 | 0;
 HEAP32[i26 >> 2] = i22;
 i22 = i2 + 8 | 0;
 i21 = i22;
 i28 = HEAP32[i21 >> 2] & -8 | i23 & 7;
 HEAP32[i21 >> 2] = i28;
 HEAP8[i22] = i28 & 255 & -9 | i24;
 i24 = HEAP32[i1 + 200 >> 2] | 0;
 if ((i24 | 0) != 0) {
  i28 = i24 + 8 | 0;
  HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
 }
 i28 = HEAP32[i1 + 204 >> 2] | 0;
 i23 = HEAP32[i1 + 208 >> 2] | 0;
 i27 = i23 & 8;
 i29 = i3 | 0;
 i30 = HEAP32[i29 >> 2] | 0;
 HEAP32[i29 >> 2] = i24;
 do {
  if ((i30 | 0) != 0) {
   i24 = i30 + 8 | 0;
   i31 = i24 | 0;
   i32 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
   HEAP32[i31 >> 2] = i32;
   if ((i32 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
  }
 } while (0);
 i30 = i3 + 4 | 0;
 HEAP32[i30 >> 2] = i28;
 i28 = i3 + 8 | 0;
 i24 = i28;
 i32 = HEAP32[i24 >> 2] & -8 | i23 & 7;
 HEAP32[i24 >> 2] = i32;
 HEAP8[i28] = i32 & 255 & -9 | i27;
 i27 = HEAP32[i25 >> 2] | 0;
 do {
  if ((HEAP32[i27 + 12 >> 2] & 4 | 0) == 0) {
   i33 = 31;
  } else {
   i32 = HEAP32[i27 + 44 >> 2] | 0;
   i23 = HEAP32[__ZN7WebCore9HTMLNames5hrTagE >> 2] | 0;
   if ((i32 | 0) != (i23 | 0)) {
    if ((HEAP32[i32 + 12 >> 2] | 0) != (HEAP32[i23 + 12 >> 2] | 0)) {
     i33 = 31;
     break;
    }
    if ((HEAP32[i32 + 16 >> 2] | 0) != (HEAP32[i23 + 16 >> 2] | 0)) {
     i33 = 31;
     break;
    }
   }
   i23 = i8 | 0;
   HEAP32[i23 >> 2] = i27;
   if ((i27 | 0) != 0) {
    i32 = i27 + 8 | 0;
    HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
   }
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i11, i8, 1);
   i32 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i32 | 0) != 0) {
     i23 = i32 + 8 | 0;
     i31 = i23 | 0;
     i34 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
     HEAP32[i31 >> 2] = i34;
     if ((i34 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
    }
   } while (0);
   i32 = i11 | 0;
   i23 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = 0;
   i34 = HEAP32[i25 >> 2] | 0;
   HEAP32[i25 >> 2] = i23;
   do {
    if ((i34 | 0) != 0) {
     i23 = i34 + 8 | 0;
     i31 = i23 | 0;
     i35 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
     HEAP32[i31 >> 2] = i35;
     if ((i35 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
    }
   } while (0);
   HEAP32[i26 >> 2] = HEAP32[i11 + 4 >> 2];
   i34 = HEAP32[i11 + 8 >> 2] | 0;
   i23 = HEAP32[i21 >> 2] & -8 | i34 & 7;
   HEAP32[i21 >> 2] = i23;
   HEAP8[i22] = i23 & 255 & -9 | i34 & 8;
   i34 = HEAP32[i32 >> 2] | 0;
   if ((i34 | 0) == 0) {
    break;
   }
   i23 = i34 + 8 | 0;
   i34 = i23 | 0;
   i35 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
   HEAP32[i34 >> 2] = i35;
   if ((i35 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
  }
 } while (0);
 do {
  if ((i33 | 0) == 31) {
   i11 = HEAP32[i29 >> 2] | 0;
   if ((HEAP32[i11 + 12 >> 2] & 4 | 0) == 0) {
    break;
   }
   i8 = HEAP32[i11 + 44 >> 2] | 0;
   i27 = HEAP32[__ZN7WebCore9HTMLNames5hrTagE >> 2] | 0;
   if ((i8 | 0) != (i27 | 0)) {
    if ((HEAP32[i8 + 12 >> 2] | 0) != (HEAP32[i27 + 12 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i8 + 16 >> 2] | 0) != (HEAP32[i27 + 16 >> 2] | 0)) {
     break;
    }
   }
   i27 = i7 | 0;
   HEAP32[i27 >> 2] = i11;
   if ((i11 | 0) != 0) {
    i8 = i11 + 8 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   }
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i12, i7, 2);
   i8 = HEAP32[i27 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i27 = i8 + 8 | 0;
     i11 = i27 | 0;
     i23 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     HEAP32[i11 >> 2] = i23;
     if ((i23 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
    }
   } while (0);
   i8 = i12 | 0;
   i32 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   i27 = HEAP32[i29 >> 2] | 0;
   HEAP32[i29 >> 2] = i32;
   do {
    if ((i27 | 0) != 0) {
     i32 = i27 + 8 | 0;
     i23 = i32 | 0;
     i11 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
     HEAP32[i23 >> 2] = i11;
     if ((i11 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
    }
   } while (0);
   HEAP32[i30 >> 2] = HEAP32[i12 + 4 >> 2];
   i27 = HEAP32[i12 + 8 >> 2] | 0;
   i32 = HEAP32[i24 >> 2] & -8 | i27 & 7;
   HEAP32[i24 >> 2] = i32;
   HEAP8[i28] = i32 & 255 & -9 | i27 & 8;
   i27 = HEAP32[i8 >> 2] | 0;
   if ((i27 | 0) == 0) {
    break;
   }
   i32 = i27 + 8 | 0;
   i27 = i32 | 0;
   i11 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
   HEAP32[i27 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
  }
 } while (0);
 if ((HEAP8[i1 + 157 | 0] & 1) == 0) {
  STACKTOP = i4;
  return;
 }
 i12 = i1 + 154 | 0;
 i7 = i1 + 188 | 0;
 i32 = i1 + 216 | 0;
 i11 = i1 + 200 | 0;
 i27 = i18 | 0;
 i23 = i17 | 0;
 i35 = i1 + 212 | 0;
 i1 = i16 | 0;
 i34 = i15 | 0;
 i31 = i13 | 0;
 i36 = i13 + 4 | 0;
 i37 = i13 + 8 | 0;
 i38 = i14 | 0;
 i39 = i14 + 4 | 0;
 i40 = i14 + 8 | 0;
 i41 = i5 | 0;
 i42 = i20 | 0;
 i43 = i6 | 0;
 i44 = i19 | 0;
 L66 : while (1) {
  HEAP32[i9 >> 2] = 0;
  HEAP32[i10 >> 2] = 0;
  __ZN7WebCore38positionBeforeContainingSpecialElementERKNS_8PositionEPPNS_4NodeE(i13, i2, i9);
  __ZN7WebCore37positionAfterContainingSpecialElementERKNS_8PositionEPPNS_4NodeE(i14, i3, i10);
  if ((HEAP32[i9 >> 2] | 0) == 0) {
   if ((HEAP32[i10 >> 2] | 0) == 0) {
    i33 = 141;
    break;
   }
  }
  HEAP8[i12] = 0;
  __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i15, i2, 1);
  if ((HEAP32[i32 >> 2] | 0) == 2) {
   i45 = 1;
  } else {
   i45 = HEAP32[i35 >> 2] | 0;
  }
  __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i16, i7, i45);
  do {
   if (__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i15, i16) | 0) {
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i17, i3, 1);
    if ((HEAP32[i32 >> 2] | 0) == 2) {
     i46 = 0;
    } else {
     i46 = HEAP32[i35 >> 2] | 0;
    }
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i18, i11, i46);
    i47 = (__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i17, i18) | 0) ^ 1;
    i48 = HEAP32[i27 >> 2] | 0;
    do {
     if ((i48 | 0) != 0) {
      i49 = i48 + 8 | 0;
      i50 = i49 | 0;
      i51 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
      HEAP32[i50 >> 2] = i51;
      if ((i51 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i49 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i49 - 8 | 0);
     }
    } while (0);
    i48 = HEAP32[i23 >> 2] | 0;
    if ((i48 | 0) == 0) {
     i52 = i47;
     break;
    }
    i49 = i48 + 8 | 0;
    i48 = i49 | 0;
    i51 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
    HEAP32[i48 >> 2] = i51;
    if ((i51 | 0) >= 1) {
     i52 = i47;
     break;
    }
    if ((HEAP32[i49 + 8 >> 2] | 0) != 0) {
     i52 = i47;
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i49 - 8 | 0);
    i52 = i47;
   } else {
    i52 = 1;
   }
  } while (0);
  i8 = HEAP32[i1 >> 2] | 0;
  do {
   if ((i8 | 0) != 0) {
    i49 = i8 + 8 | 0;
    i51 = i49 | 0;
    i48 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
    HEAP32[i51 >> 2] = i48;
    if ((i48 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i49 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i49 - 8 | 0);
   }
  } while (0);
  i8 = HEAP32[i34 >> 2] | 0;
  do {
   if ((i8 | 0) != 0) {
    i49 = i8 + 8 | 0;
    i48 = i49 | 0;
    i51 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
    HEAP32[i48 >> 2] = i51;
    if ((i51 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i49 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i49 - 8 | 0);
   }
  } while (0);
  if (i52) {
   i33 = 149;
   break;
  }
  i8 = HEAP32[i9 >> 2] | 0;
  L99 : do {
   if ((i8 | 0) == 0) {
    i33 = 88;
   } else {
    i49 = HEAP32[i10 >> 2] | 0;
    if ((i49 | 0) != 0) {
     i53 = i8;
     i54 = i49;
     i33 = 103;
     break;
    }
    i49 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i8) | 0;
    HEAP32[i43 >> 2] = i49;
    if ((i49 | 0) != 0) {
     i51 = i49 + 8 | 0;
     HEAP32[i51 >> 2] = (HEAP32[i51 >> 2] | 0) + 1;
    }
    __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i19, i6, (__ZNK7WebCore4Node9nodeIndexEv(i8) | 0) + 1 | 0, 0);
    i51 = HEAP32[i43 >> 2] | 0;
    do {
     if ((i51 | 0) != 0) {
      i49 = i51 + 8 | 0;
      i48 = i49 | 0;
      i50 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
      HEAP32[i48 >> 2] = i50;
      if ((i50 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i49 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i49 - 8 | 0);
     }
    } while (0);
    i51 = (__ZN7WebCore16comparePositionsERKNS_8PositionES2_(i19, i3) | 0) > -1;
    i47 = HEAP32[i44 >> 2] | 0;
    do {
     if ((i47 | 0) != 0) {
      i49 = i47 + 8 | 0;
      i50 = i49 | 0;
      i48 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
      HEAP32[i50 >> 2] = i48;
      if ((i48 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i49 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i49 - 8 | 0);
      if (i51) {
       i33 = 157;
       break L66;
      } else {
       i33 = 88;
       break L99;
      }
     }
    } while (0);
    if (i51) {
     i33 = 157;
     break L66;
    } else {
     i33 = 88;
    }
   }
  } while (0);
  L115 : do {
   if ((i33 | 0) == 88) {
    i33 = 0;
    i8 = HEAP32[i10 >> 2] | 0;
    L117 : do {
     if ((i8 | 0) != 0) {
      i47 = HEAP32[i9 >> 2] | 0;
      if ((i47 | 0) != 0) {
       i53 = i47;
       i54 = i8;
       i33 = 103;
       break L115;
      }
      i47 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i8) | 0;
      HEAP32[i41 >> 2] = i47;
      if ((i47 | 0) != 0) {
       i49 = i47 + 8 | 0;
       HEAP32[i49 >> 2] = (HEAP32[i49 >> 2] | 0) + 1;
      }
      __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i20, i5, __ZNK7WebCore4Node9nodeIndexEv(i8) | 0, 0);
      i49 = HEAP32[i41 >> 2] | 0;
      do {
       if ((i49 | 0) != 0) {
        i47 = i49 + 8 | 0;
        i48 = i47 | 0;
        i50 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
        HEAP32[i48 >> 2] = i50;
        if ((i50 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
       }
      } while (0);
      i49 = (__ZN7WebCore16comparePositionsERKNS_8PositionES2_(i2, i20) | 0) > -1;
      i47 = HEAP32[i42 >> 2] | 0;
      do {
       if ((i47 | 0) != 0) {
        i50 = i47 + 8 | 0;
        i48 = i50 | 0;
        i55 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
        HEAP32[i48 >> 2] = i55;
        if ((i55 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
        if (i49) {
         i33 = 165;
         break L66;
        } else {
         break L117;
        }
       }
      } while (0);
      if (i49) {
       i33 = 165;
       break L66;
      }
     }
    } while (0);
    i8 = HEAP32[i9 >> 2] | 0;
    if ((i8 | 0) == 0) {
     i33 = 111;
     break;
    }
    i53 = i8;
    i54 = HEAP32[i10 >> 2] | 0;
    i33 = 103;
   }
  } while (0);
  do {
   if ((i33 | 0) == 103) {
    i33 = 0;
    if (!(__ZNK7WebCore4Node14isDescendantOfEPKS0_(i53, i54) | 0)) {
     i33 = 111;
     break;
    }
    i8 = HEAP32[i31 >> 2] | 0;
    if ((i8 | 0) != 0) {
     i51 = i8 + 8 | 0;
     HEAP32[i51 >> 2] = (HEAP32[i51 >> 2] | 0) + 1;
    }
    i51 = HEAP32[i25 >> 2] | 0;
    HEAP32[i25 >> 2] = i8;
    do {
     if ((i51 | 0) != 0) {
      i8 = i51 + 8 | 0;
      i47 = i8 | 0;
      i50 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
      HEAP32[i47 >> 2] = i50;
      if ((i50 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
     }
    } while (0);
    HEAP32[i26 >> 2] = HEAP32[i36 >> 2];
    i51 = HEAP32[i37 >> 2] | 0;
    i8 = HEAP32[i21 >> 2] & -8 | i51 & 7;
    HEAP32[i21 >> 2] = i8;
    HEAP8[i22] = i8 & 255 & -9 | i51 & 8;
   }
  } while (0);
  L146 : do {
   if ((i33 | 0) == 111) {
    i33 = 0;
    i51 = HEAP32[i10 >> 2] | 0;
    do {
     if ((i51 | 0) != 0) {
      if (!(__ZNK7WebCore4Node14isDescendantOfEPKS0_(i51, HEAP32[i9 >> 2] | 0) | 0)) {
       break;
      }
      i8 = HEAP32[i38 >> 2] | 0;
      if ((i8 | 0) != 0) {
       i50 = i8 + 8 | 0;
       HEAP32[i50 >> 2] = (HEAP32[i50 >> 2] | 0) + 1;
      }
      i50 = HEAP32[i29 >> 2] | 0;
      HEAP32[i29 >> 2] = i8;
      do {
       if ((i50 | 0) != 0) {
        i8 = i50 + 8 | 0;
        i47 = i8 | 0;
        i55 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
        HEAP32[i47 >> 2] = i55;
        if ((i55 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
       }
      } while (0);
      HEAP32[i30 >> 2] = HEAP32[i39 >> 2];
      i50 = HEAP32[i40 >> 2] | 0;
      i49 = HEAP32[i24 >> 2] & -8 | i50 & 7;
      HEAP32[i24 >> 2] = i49;
      HEAP8[i28] = i49 & 255 & -9 | i50 & 8;
      break L146;
     }
    } while (0);
    i51 = HEAP32[i31 >> 2] | 0;
    if ((i51 | 0) != 0) {
     i50 = i51 + 8 | 0;
     HEAP32[i50 >> 2] = (HEAP32[i50 >> 2] | 0) + 1;
    }
    i50 = HEAP32[i25 >> 2] | 0;
    HEAP32[i25 >> 2] = i51;
    do {
     if ((i50 | 0) != 0) {
      i51 = i50 + 8 | 0;
      i49 = i51 | 0;
      i8 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
      HEAP32[i49 >> 2] = i8;
      if ((i8 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i51 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i51 - 8 | 0);
     }
    } while (0);
    HEAP32[i26 >> 2] = HEAP32[i36 >> 2];
    i50 = HEAP32[i37 >> 2] | 0;
    i51 = HEAP32[i21 >> 2] & -8 | i50 & 7;
    HEAP32[i21 >> 2] = i51;
    HEAP8[i22] = i51 & 255 & -9 | i50 & 8;
    i50 = HEAP32[i38 >> 2] | 0;
    if ((i50 | 0) != 0) {
     i51 = i50 + 8 | 0;
     HEAP32[i51 >> 2] = (HEAP32[i51 >> 2] | 0) + 1;
    }
    i51 = HEAP32[i29 >> 2] | 0;
    HEAP32[i29 >> 2] = i50;
    do {
     if ((i51 | 0) != 0) {
      i50 = i51 + 8 | 0;
      i8 = i50 | 0;
      i49 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
      HEAP32[i8 >> 2] = i49;
      if ((i49 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
     }
    } while (0);
    HEAP32[i30 >> 2] = HEAP32[i39 >> 2];
    i51 = HEAP32[i40 >> 2] | 0;
    i50 = HEAP32[i24 >> 2] & -8 | i51 & 7;
    HEAP32[i24 >> 2] = i50;
    HEAP8[i28] = i50 & 255 & -9 | i51 & 8;
   }
  } while (0);
  i51 = HEAP32[i38 >> 2] | 0;
  do {
   if ((i51 | 0) != 0) {
    i50 = i51 + 8 | 0;
    i49 = i50 | 0;
    i8 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
    HEAP32[i49 >> 2] = i8;
    if ((i8 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
   }
  } while (0);
  i51 = HEAP32[i31 >> 2] | 0;
  if ((i51 | 0) == 0) {
   continue;
  }
  i50 = i51 + 8 | 0;
  i51 = i50 | 0;
  i8 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
  HEAP32[i51 >> 2] = i8;
  if ((i8 | 0) >= 1) {
   continue;
  }
  if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
   continue;
  }
  __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
 }
 if ((i33 | 0) == 141) {
  i28 = HEAP32[i38 >> 2] | 0;
  do {
   if ((i28 | 0) != 0) {
    i24 = i28 + 8 | 0;
    i40 = i24 | 0;
    i39 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
    HEAP32[i40 >> 2] = i39;
    if ((i39 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
   }
  } while (0);
  i28 = HEAP32[i31 >> 2] | 0;
  if ((i28 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i24 = i28 + 8 | 0;
  i28 = i24 | 0;
  i39 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
  HEAP32[i28 >> 2] = i39;
  if ((i39 | 0) >= 1) {
   STACKTOP = i4;
   return;
  }
  if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
   STACKTOP = i4;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
  STACKTOP = i4;
  return;
 } else if ((i33 | 0) == 149) {
  i24 = HEAP32[i38 >> 2] | 0;
  do {
   if ((i24 | 0) != 0) {
    i39 = i24 + 8 | 0;
    i28 = i39 | 0;
    i40 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
    HEAP32[i28 >> 2] = i40;
    if ((i40 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i39 - 8 | 0);
   }
  } while (0);
  i24 = HEAP32[i31 >> 2] | 0;
  if ((i24 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i39 = i24 + 8 | 0;
  i24 = i39 | 0;
  i40 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
  HEAP32[i24 >> 2] = i40;
  if ((i40 | 0) >= 1) {
   STACKTOP = i4;
   return;
  }
  if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
   STACKTOP = i4;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i39 - 8 | 0);
  STACKTOP = i4;
  return;
 } else if ((i33 | 0) == 157) {
  i39 = HEAP32[i38 >> 2] | 0;
  do {
   if ((i39 | 0) != 0) {
    i40 = i39 + 8 | 0;
    i24 = i40 | 0;
    i28 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
    HEAP32[i24 >> 2] = i28;
    if ((i28 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
   }
  } while (0);
  i39 = HEAP32[i31 >> 2] | 0;
  if ((i39 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i40 = i39 + 8 | 0;
  i39 = i40 | 0;
  i28 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
  HEAP32[i39 >> 2] = i28;
  if ((i28 | 0) >= 1) {
   STACKTOP = i4;
   return;
  }
  if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
   STACKTOP = i4;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
  STACKTOP = i4;
  return;
 } else if ((i33 | 0) == 165) {
  i33 = HEAP32[i38 >> 2] | 0;
  do {
   if ((i33 | 0) != 0) {
    i38 = i33 + 8 | 0;
    i40 = i38 | 0;
    i28 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
    HEAP32[i40 >> 2] = i28;
    if ((i28 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
   }
  } while (0);
  i33 = HEAP32[i31 >> 2] | 0;
  if ((i33 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i31 = i33 + 8 | 0;
  i33 = i31 | 0;
  i38 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
  HEAP32[i33 >> 2] = i38;
  if ((i38 | 0) >= 1) {
   STACKTOP = i4;
   return;
  }
  if ((HEAP32[i31 + 8 >> 2] | 0) != 0) {
   STACKTOP = i4;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i31 - 8 | 0);
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore22DeleteSelectionCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 176 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 64 | 0;
 i13 = i4 + 72 | 0;
 i14 = i4 + 88 | 0;
 i15 = i4 + 104 | 0;
 i16 = i4 + 120 | 0;
 i17 = i4 + 136 | 0;
 i18 = i4 + 152 | 0;
 i19 = i4 + 168 | 0;
 i20 = i2 | 0;
 i2 = HEAP32[i20 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i21 = HEAP32[i1 + 324 >> 2] | 0;
 i22 = i1 + 328 | 0;
 do {
  if ((i21 | 0) != (HEAP32[i22 >> 2] | 0)) {
   if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(i2, i21) | 0) {
    if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(HEAP32[i20 >> 2] | 0, HEAP32[i22 >> 2] | 0) | 0) {
     break;
    }
   }
   if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(HEAP32[(HEAP32[i20 >> 2] | 0) + 16 >> 2] | 0, 0, 1) | 0) {
    break;
   }
   i23 = HEAP32[i20 >> 2] | 0;
   if ((HEAP32[i23 + 12 >> 2] & 2 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i24 = HEAP32[i23 + 36 >> 2] | 0;
   if ((i24 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i23 = i24 + 8 | 0;
   HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
   i23 = i1;
   i25 = i9 | 0;
   i26 = i24;
   while (1) {
    i24 = HEAP32[i26 + 28 >> 2] | 0;
    i27 = (i24 | 0) == 0;
    if (!i27) {
     i28 = i24 + 8 | 0;
     HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
    }
    i28 = HEAP32[(HEAP32[i23 >> 2] | 0) + 60 >> 2] | 0;
    HEAP32[i25 >> 2] = i26;
    i29 = i26 + 8 | 0;
    HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
    FUNCTION_TABLE_viii[i28 & 3](i1, i9, i3);
    i28 = HEAP32[i25 >> 2] | 0;
    do {
     if ((i28 | 0) != 0) {
      i29 = i28 + 8 | 0;
      i30 = i29 | 0;
      i31 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
      HEAP32[i30 >> 2] = i31;
      if ((i31 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
     }
    } while (0);
    do {
     if (i27) {
      i32 = 18;
     } else {
      if ((HEAP32[i24 + 16 >> 2] | 0) != (HEAP32[i20 >> 2] | 0)) {
       i33 = i26;
       i34 = 1;
       break;
      }
      i28 = i24 + 8 | 0;
      HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
      i32 = 18;
     }
    } while (0);
    if ((i32 | 0) == 18) {
     i32 = 0;
     i28 = i26 + 8 | 0;
     i29 = i28 - 8 | 0;
     i31 = i28 | 0;
     i30 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
     HEAP32[i31 >> 2] = i30;
     do {
      if ((i30 | 0) < 1) {
       if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i29);
      }
     } while (0);
     if (i27) {
      i32 = 113;
      break;
     } else {
      i33 = i24;
      i34 = 0;
     }
    }
    i29 = i24 + 8 | 0;
    i28 = i29 - 8 | 0;
    i30 = i29 | 0;
    i31 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
    HEAP32[i30 >> 2] = i31;
    do {
     if ((i31 | 0) < 1) {
      if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i28);
     }
    } while (0);
    i35 = (i33 | 0) == 0;
    if ((i34 | 0) != 0) {
     i32 = 27;
     break;
    }
    if (i35) {
     i32 = 114;
     break;
    } else {
     i26 = i33;
    }
   }
   if ((i32 | 0) == 113) {
    STACKTOP = i4;
    return;
   } else if ((i32 | 0) == 114) {
    STACKTOP = i4;
    return;
   } else if ((i32 | 0) == 27) {
    if (i35) {
     STACKTOP = i4;
     return;
    }
    i26 = i33 + 8 | 0;
    i25 = i26 | 0;
    i23 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
    HEAP32[i25 >> 2] = i23;
    if ((i23 | 0) >= 1) {
     STACKTOP = i4;
     return;
    }
    if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
     STACKTOP = i4;
     return;
    }
    __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 do {
  if (!(__ZN7WebCore20isTableStructureNodeEPKNS_4NodeE(HEAP32[i20 >> 2] | 0) | 0)) {
   if (__ZNK7WebCore4Node21isRootEditableElementEv(HEAP32[i20 >> 2] | 0) | 0) {
    break;
   }
   i33 = HEAP32[i20 >> 2] | 0;
   i35 = i1 + 308 | 0;
   L59 : do {
    if ((i33 | 0) == (HEAP32[i35 >> 2] | 0)) {
     __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i15, i33);
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i14, i15, 1);
     __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i13, i14, 0);
     i34 = __ZN7WebCore12isEndOfBlockERKNS_15VisiblePositionE(i13) | 0;
     i9 = HEAP32[i13 >> 2] | 0;
     do {
      if ((i9 | 0) != 0) {
       i22 = i9 + 8 | 0;
       i21 = i22 | 0;
       i2 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
       HEAP32[i21 >> 2] = i2;
       if ((i2 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
      }
     } while (0);
     i9 = HEAP32[i14 >> 2] | 0;
     do {
      if ((i9 | 0) != 0) {
       i22 = i9 + 8 | 0;
       i2 = i22 | 0;
       i21 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
       HEAP32[i2 >> 2] = i21;
       if ((i21 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
      }
     } while (0);
     i9 = HEAP32[i15 >> 2] | 0;
     do {
      if ((i9 | 0) == 0) {
       i32 = 84;
      } else {
       i22 = i9 + 8 | 0;
       i21 = i22 | 0;
       i2 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
       HEAP32[i21 >> 2] = i2;
       if ((i2 | 0) >= 1) {
        i32 = 84;
        break;
       }
       if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
        i32 = 84;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
       if (i34) {
        i32 = 86;
        break L59;
       }
      }
     } while (0);
     if ((i32 | 0) == 84) {
      if (i34) {
       i32 = 86;
       break;
      }
     }
     HEAP8[i1 + 155 | 0] = 1;
    } else {
     i32 = 86;
    }
   } while (0);
   L78 : do {
    if ((i32 | 0) == 86) {
     if ((HEAP32[i20 >> 2] | 0) != (HEAP32[i1 + 312 >> 2] | 0)) {
      break;
     }
     __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i18, HEAP32[i35 >> 2] | 0);
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i17, i18, 1);
     __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i16, i17, 0);
     i33 = __ZN7WebCore14isStartOfBlockERKNS_15VisiblePositionE(i16) | 0;
     i9 = HEAP32[i16 >> 2] | 0;
     do {
      if ((i9 | 0) != 0) {
       i22 = i9 + 8 | 0;
       i2 = i22 | 0;
       i21 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
       HEAP32[i2 >> 2] = i21;
       if ((i21 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
      }
     } while (0);
     i9 = HEAP32[i17 >> 2] | 0;
     do {
      if ((i9 | 0) != 0) {
       i34 = i9 + 8 | 0;
       i22 = i34 | 0;
       i21 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
       HEAP32[i22 >> 2] = i21;
       if ((i21 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
      }
     } while (0);
     i9 = HEAP32[i18 >> 2] | 0;
     do {
      if ((i9 | 0) == 0) {
       i32 = 99;
      } else {
       i34 = i9 + 8 | 0;
       i21 = i34 | 0;
       i22 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
       HEAP32[i21 >> 2] = i22;
       if ((i22 | 0) >= 1) {
        i32 = 99;
        break;
       }
       if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
        i32 = 99;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
       if (i33) {
        break L78;
       }
      }
     } while (0);
     if ((i32 | 0) == 99) {
      if (i33) {
       break;
      }
     }
     HEAP8[i1 + 155 | 0] = 1;
    }
   } while (0);
   __ZN7WebCore28updatePositionForNodeRemovalERNS_8PositionEPNS_4NodeE(i1 + 272 | 0, HEAP32[i20 >> 2] | 0);
   __ZN7WebCore28updatePositionForNodeRemovalERNS_8PositionEPNS_4NodeE(i1 + 284 | 0, HEAP32[i20 >> 2] | 0);
   __ZN7WebCore28updatePositionForNodeRemovalERNS_8PositionEPNS_4NodeE(i1 + 296 | 0, HEAP32[i20 >> 2] | 0);
   i35 = i19 | 0;
   i9 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   HEAP32[i35 >> 2] = i9;
   __ZN7WebCore20CompositeEditCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE(i1 | 0, i19, i3);
   i9 = HEAP32[i35 >> 2] | 0;
   if ((i9 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i35 = i9 + 8 | 0;
   i9 = i35 | 0;
   i34 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i34;
   if ((i34 | 0) >= 1) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
   STACKTOP = i4;
   return;
  }
 } while (0);
 i19 = HEAP32[i20 >> 2] | 0;
 do {
  if ((HEAP32[i19 + 12 >> 2] & 2 | 0) != 0) {
   i18 = HEAP32[i19 + 36 >> 2] | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   i17 = i1;
   i16 = i10 | 0;
   i15 = i18;
   while (1) {
    i18 = HEAP32[i15 + 28 >> 2] | 0;
    i14 = HEAP32[(HEAP32[i17 >> 2] | 0) + 60 >> 2] | 0;
    HEAP32[i16 >> 2] = i15;
    i13 = i15 + 8 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
    FUNCTION_TABLE_viii[i14 & 3](i1, i10, i3);
    i14 = HEAP32[i16 >> 2] | 0;
    do {
     if ((i14 | 0) != 0) {
      i13 = i14 + 8 | 0;
      i35 = i13 | 0;
      i34 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
      HEAP32[i35 >> 2] = i34;
      if ((i34 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
     }
    } while (0);
    if ((i18 | 0) == 0) {
     break;
    } else {
     i15 = i18;
    }
   }
  }
 } while (0);
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[i1 + 8 >> 2] | 0);
 i3 = HEAP32[i20 >> 2] | 0;
 i10 = i3 + 32 | 0;
 if ((HEAP32[i3 + 12 >> 2] & 2048 | 0) == 0) {
  i36 = i10 | 0;
 } else {
  i36 = HEAP32[i10 >> 2] | 0;
 }
 i10 = HEAP32[i36 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 188 >> 2] & 31](i10) | 0)) {
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore9RenderBox12clientHeightEv(i5, i10);
 i36 = i10;
 i3 = i10;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 704 >> 2] & 3](i6, i36);
 i10 = (HEAP32[i5 >> 2] | 0) - (HEAP32[i6 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 708 >> 2] & 3](i7, i36);
 if ((i10 - (HEAP32[i7 >> 2] | 0) | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 i7 = HEAP32[i20 >> 2] | 0;
 L134 : do {
  if ((i7 | 0) == 0) {
   i32 = 61;
  } else {
   if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i7, 0, 1) | 0) {
    i37 = i7;
   } else {
    i20 = i7;
    while (1) {
     if ((HEAP32[i20 + 12 >> 2] & 2 | 0) == 0) {
      i32 = 53;
     } else {
      i10 = HEAP32[i20 + 36 >> 2] | 0;
      if ((i10 | 0) == 0) {
       i32 = 53;
      } else {
       i38 = i10;
      }
     }
     do {
      if ((i32 | 0) == 53) {
       i32 = 0;
       if ((i20 | 0) == (i7 | 0)) {
        i32 = 61;
        break L134;
       }
       i10 = HEAP32[i20 + 28 >> 2] | 0;
       if ((i10 | 0) != 0) {
        i38 = i10;
        break;
       }
       i10 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i20, i7) | 0;
       if ((i10 | 0) == 0) {
        i32 = 61;
        break L134;
       } else {
        i38 = i10;
       }
      }
     } while (0);
     if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i38, 0, 1) | 0) {
      i37 = i38;
      break;
     } else {
      i20 = i38;
     }
    }
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i37 >> 2] | 0) + 132 >> 2] & 31](i37) | 0) {
    __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i11, i37);
    break;
   }
   i20 = i8 | 0;
   HEAP32[i20 >> 2] = i37;
   i18 = i37 + 8 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i11, i8, 1);
   i18 = HEAP32[i20 >> 2] | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   i20 = i18 + 8 | 0;
   i18 = i20 | 0;
   i10 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   HEAP32[i18 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
  }
 } while (0);
 if ((i32 | 0) == 61) {
  HEAP32[i11 >> 2] = 0;
  HEAP32[i11 + 4 >> 2] = 0;
  i32 = i11 + 8 | 0;
  i8 = i32;
  i37 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = i37 & -8;
  HEAP8[i32] = i37 & 255 & -16;
 }
 i37 = i11 | 0;
 if ((HEAP32[i37 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore20CompositeEditCommand22insertBlockPlaceholderERKNS_8PositionE(i12, i1 | 0, i11);
 i11 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i12 = i11 + 8 | 0;
   i1 = i12 | 0;
   i32 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i32;
   if ((i32 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 i11 = HEAP32[i37 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i37 = i11 + 8 | 0;
 i11 = i37 | 0;
 i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 HEAP32[i11 >> 2] = i12;
 if ((i12 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i37 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i37 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22DeleteSelectionCommand7doApplyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 264 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 40 | 0;
 i7 = i2 + 56 | 0;
 i8 = i2 + 72 | 0;
 i9 = i2 + 88 | 0;
 i10 = i2 + 104 | 0;
 i11 = i2 + 120 | 0;
 i12 = i2 + 184 | 0;
 i13 = i2 + 192 | 0;
 i14 = i2 + 200 | 0;
 if ((HEAP8[i1 + 152 | 0] & 1) == 0) {
  __ZN7WebCore16VisibleSelectionaSERKS0_(i1 + 164 | 0, i1 + 72 | 0) | 0;
 }
 i15 = i1 + 216 | 0;
 if ((HEAP32[i15 >> 2] | 0) != 2) {
  STACKTOP = i2;
  return;
 }
 i16 = i1 + 188 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 i18 = (i17 | 0) == 0;
 do {
  if (i18) {
   i19 = 7;
  } else {
   i20 = i17 + 8 | 0;
   i21 = (HEAP32[i20 >> 2] | 0) + 1 | 0;
   HEAP32[i20 >> 2] = i21;
   if ((HEAP32[i17 + 12 >> 2] & 256 | 0) != 0) {
    i19 = 7;
    break;
   }
   i20 = i17 + 8 | 0;
   i22 = 0;
   i23 = i21;
   i24 = i20;
   i25 = i20 | 0;
   i19 = 13;
  }
 } while (0);
 do {
  if ((i19 | 0) == 7) {
   i20 = HEAP32[i1 + 200 >> 2] | 0;
   do {
    if ((i20 | 0) == 0) {
     i26 = 1;
    } else {
     i21 = HEAP32[i20 + 8 >> 2] | 0;
     i27 = (HEAP32[i20 + 12 >> 2] & 256 | 0) != 0;
     i28 = i20 + 8 | 0;
     HEAP32[i28 >> 2] = i21;
     if ((i21 | 0) >= 1) {
      i26 = i27;
      break;
     }
     if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
      i26 = i27;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
     i26 = i27;
    }
   } while (0);
   if (i18) {
    i29 = i26;
    i19 = 16;
    break;
   }
   i20 = i17 + 8 | 0;
   i27 = i20 | 0;
   i22 = i26;
   i23 = HEAP32[i27 >> 2] | 0;
   i24 = i20;
   i25 = i27;
   i19 = 13;
  }
 } while (0);
 do {
  if ((i19 | 0) == 13) {
   i26 = i23 - 1 | 0;
   HEAP32[i25 >> 2] = i26;
   if ((i26 | 0) >= 1) {
    i29 = i22;
    i19 = 16;
    break;
   }
   if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
    i29 = i22;
    i19 = 16;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
   if (i22) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 do {
  if ((i19 | 0) == 16) {
   if (i29) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 __ZN7WebCore22DeleteSelectionCommand53originalStringForAutocorrectionAtBeginningOfSelectionEv(i3, i1);
 do {
  if ((HEAP8[i1 + 156 | 0] & 1) == 0) {
   i29 = i4 | 0;
   i19 = HEAP32[i16 >> 2] | 0;
   HEAP32[i29 >> 2] = i19;
   if ((i19 | 0) != 0) {
    i22 = i19 + 8 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
   }
   HEAP32[i4 + 4 >> 2] = HEAP32[i1 + 192 >> 2];
   i22 = HEAP32[i1 + 196 >> 2] | 0;
   i19 = i4 + 8 | 0;
   i24 = i19;
   i25 = HEAP32[i24 >> 2] & -8 | i22 & 7;
   HEAP32[i24 >> 2] = i25;
   HEAP8[i19] = i25 & 255 & -9 | i22 & 8;
   i22 = __ZN7WebCore24enclosingTextFormControlERKNS_8PositionE(i4) | 0;
   i25 = i22 | 0;
   i19 = HEAP32[i29 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i29 = i19 + 8 | 0;
     i24 = i29 | 0;
     i23 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
     HEAP32[i24 >> 2] = i23;
     if ((i23 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
    }
   } while (0);
   if ((i22 | 0) == 0) {
    break;
   }
   if ((HEAP32[i22 + 12 >> 2] & 1024 | 0) == 0) {
    break;
   }
   if (!(__ZNK7WebCore7Element26isUserActionElementFocusedEv(i25) | 0)) {
    break;
   }
   __ZN7WebCore6Editor28textWillBeDeletedInTextFieldEPNS_7ElementE(HEAP32[(__ZN7WebCore11EditCommand5frameEv(i1 | 0) | 0) + 464 >> 2] | 0, i25);
  }
 } while (0);
 i4 = i1 + 212 | 0;
 i16 = HEAP32[i4 >> 2] | 0;
 i19 = i6 | 0;
 i29 = i1 + 200 | 0;
 i23 = HEAP32[i29 >> 2] | 0;
 HEAP32[i19 >> 2] = i23;
 if ((i23 | 0) != 0) {
  i24 = i23 + 8 | 0;
  HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
 }
 HEAP32[i6 + 4 >> 2] = HEAP32[i1 + 204 >> 2];
 i24 = HEAP32[i1 + 208 >> 2] | 0;
 i23 = i6 + 8 | 0;
 i26 = i23;
 i17 = HEAP32[i26 >> 2] & -8 | i24 & 7;
 HEAP32[i26 >> 2] = i17;
 HEAP8[i23] = i17 & 255 & -9 | i24 & 8;
 __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i5, i6, 1);
 i6 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i19 = i6 + 8 | 0;
   i24 = i19 | 0;
   i17 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   HEAP32[i24 >> 2] = i17;
   if ((i17 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
  }
 } while (0);
 i6 = i1 + 188 | 0;
 if ((HEAP32[i15 >> 2] | 0) == 2) {
  i30 = 1;
 } else {
  i30 = HEAP32[i4 >> 2] | 0;
 }
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i7, i6, i30);
 do {
  if (__ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i7, 0) | 0) {
   i30 = i1 + 200 | 0;
   if ((HEAP32[i15 >> 2] | 0) == 2) {
    i31 = 0;
   } else {
    i31 = HEAP32[i4 >> 2] | 0;
   }
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i8, i30, i31);
   do {
    if (__ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i8, 0) | 0) {
     if ((HEAP32[i15 >> 2] | 0) == 2) {
      i32 = 0;
     } else {
      i32 = HEAP32[i4 >> 2] | 0;
     }
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i9, i30, i32);
     i19 = i1 + 155 | 0;
     HEAP8[i19] = (__ZN7WebCore32lineBreakExistsAtVisiblePositionERKNS_15VisiblePositionE(i9) | 0) & 1 ^ 1;
     i17 = HEAP32[i9 >> 2] | 0;
     if ((i17 | 0) == 0) {
      i33 = i19;
      break;
     }
     i24 = i17 + 8 | 0;
     i17 = i24 | 0;
     i23 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     HEAP32[i17 >> 2] = i23;
     if ((i23 | 0) >= 1) {
      i33 = i19;
      break;
     }
     if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
      i33 = i19;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
     i33 = i19;
    } else {
     i19 = i1 + 155 | 0;
     HEAP8[i19] = 0;
     i33 = i19;
    }
   } while (0);
   i30 = HEAP32[i8 >> 2] | 0;
   if ((i30 | 0) == 0) {
    i34 = i33;
    break;
   }
   i25 = i30 + 8 | 0;
   i30 = i25 | 0;
   i22 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
   HEAP32[i30 >> 2] = i22;
   if ((i22 | 0) >= 1) {
    i34 = i33;
    break;
   }
   if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
    i34 = i33;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
   i34 = i33;
  } else {
   i25 = i1 + 155 | 0;
   HEAP8[i25] = 0;
   i34 = i25;
  }
 } while (0);
 i33 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i7 = i33 + 8 | 0;
   i8 = i7 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 L77 : do {
  if ((HEAP8[i34] & 1) != 0) {
   if ((HEAP32[i15 >> 2] | 0) == 2) {
    i35 = 1;
   } else {
    i35 = HEAP32[i4 >> 2] | 0;
   }
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i10, i6, i35);
   i33 = __ZN7WebCore25isLastPositionBeforeTableERKNS_15VisiblePositionE(i10) | 0;
   i7 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i9 = i7 + 8 | 0;
     i8 = i9 | 0;
     i32 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     HEAP32[i8 >> 2] = i32;
     if ((i32 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
    }
   } while (0);
   if ((i33 | 0) == 0) {
    break;
   }
   i7 = HEAP32[i29 >> 2] | 0;
   L88 : do {
    if ((i7 | 0) == 0) {
     if (!(__ZNK7WebCore4Node14isDescendantOfEPKS0_(i7, i33) | 0)) {
      break L77;
     }
    } else {
     i9 = i7 + 8 | 0;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
     i9 = __ZNK7WebCore4Node14isDescendantOfEPKS0_(i7, i33) | 0;
     i32 = i7 + 8 | 0;
     i8 = i32 - 8 | 0;
     i31 = i32 | 0;
     i25 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
     HEAP32[i31 >> 2] = i25;
     do {
      if ((i25 | 0) < 1) {
       if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i8);
       if (i9) {
        break L88;
       } else {
        break L77;
       }
      }
     } while (0);
     if (!i9) {
      break L77;
     }
    }
   } while (0);
   HEAP8[i34] = 0;
  }
 } while (0);
 __ZN7WebCore22DeleteSelectionCommand22initializePositionDataEv(i1);
 i29 = i1 | 0;
 __ZN7WebCore20CompositeEditCommand33deleteInsignificantTextDownstreamERKNS_8PositionE(i29, i1 + 296 | 0);
 __ZN7WebCore22DeleteSelectionCommand20saveTypingStyleStateEv(i1);
 do {
  if (__ZN7WebCore22DeleteSelectionCommand25handleSpecialCaseBRDeleteEv(i1) | 0) {
   __ZN7WebCore22DeleteSelectionCommand31calculateTypingStyleAfterDeleteEv(i1);
   __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionENS_9EAffinityEb(i11, i1 + 272 | 0, i16, (HEAP8[i1 + 128 | 0] & 2) != 0);
   __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i1 | 0, i11);
   __ZN7WebCore16VisibleSelectionD2Ev(i11);
   __ZN7WebCore22DeleteSelectionCommand19clearTransientStateEv(i1);
   __ZN7WebCore20CompositeEditCommand19rebalanceWhitespaceEv(i29);
  } else {
   __ZN7WebCore22DeleteSelectionCommand19handleGeneralDeleteEv(i1);
   __ZN7WebCore22DeleteSelectionCommand15fixupWhitespaceEv(i1);
   __ZN7WebCore22DeleteSelectionCommand15mergeParagraphsEv(i1);
   __ZN7WebCore22DeleteSelectionCommand38removePreviouslySelectedEmptyTableRowsEv(i1);
   do {
    if ((HEAP8[i34] & 1) == 0) {
     i36 = 0;
     i37 = 1;
    } else {
     __ZN7WebCore18createBreakElementERNS_8DocumentE(i12, HEAP32[i1 + 8 >> 2] | 0);
     i10 = i12 | 0;
     i35 = HEAP32[i10 >> 2] | 0;
     i6 = i35 | 0;
     i4 = (i35 | 0) == 0;
     if (i4) {
      i36 = 0;
      i37 = 1;
      break;
     }
     i15 = i35 + 8 | 0;
     HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
     i15 = HEAP32[i10 >> 2] | 0;
     if ((i15 | 0) != 0) {
      i10 = i15 + 8 | 0;
      i15 = i10 - 8 | 0;
      i7 = i10 | 0;
      i33 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
      HEAP32[i7 >> 2] = i33;
      do {
       if ((i33 | 0) < 1) {
        if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i15);
       }
      } while (0);
      if (i4) {
       i36 = 0;
       i37 = 1;
       break;
      }
     }
     if ((HEAP8[i1 + 160 | 0] & 1) != 0) {
      __ZN7WebCore22DeleteSelectionCommand21removeRedundantBlocksEv(i1);
     }
     i15 = i13 | 0;
     HEAP32[i15 >> 2] = i6;
     i10 = i35 + 8 | 0;
     HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
     __ZN7WebCore20CompositeEditCommand12insertNodeAtEN3WTF10PassRefPtrINS_4NodeEEERKNS_8PositionE(i29, i13, i1 + 272 | 0);
     i10 = HEAP32[i15 >> 2] | 0;
     if ((i10 | 0) == 0) {
      i36 = i6;
      i37 = 0;
      break;
     }
     i15 = i10 + 8 | 0;
     i10 = i15 | 0;
     i33 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     HEAP32[i10 >> 2] = i33;
     if ((i33 | 0) >= 1) {
      i36 = i6;
      i37 = 0;
      break;
     }
     if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
      i36 = i6;
      i37 = 0;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
     i36 = i6;
     i37 = 0;
    }
   } while (0);
   i15 = i1 + 272 | 0;
   __ZN7WebCore20CompositeEditCommand21rebalanceWhitespaceAtERKNS_8PositionE(i29, i15);
   __ZN7WebCore22DeleteSelectionCommand31calculateTypingStyleAfterDeleteEv(i1);
   i33 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i33 | 0) != 0) {
     if ((HEAP32[i33 + 4 >> 2] | 0) == 0) {
      break;
     }
     __ZN7WebCore6Editor31deletedAutocorrectionAtPositionERKNS_8PositionERKN3WTF6StringE(HEAP32[(__ZN7WebCore11EditCommand5frameEv(i1 | 0) | 0) + 464 >> 2] | 0, i15, i3);
    }
   } while (0);
   __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionENS_9EAffinityEb(i14, i15, i16, (HEAP8[i1 + 128 | 0] & 2) != 0);
   __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i1 | 0, i14);
   __ZN7WebCore16VisibleSelectionD2Ev(i14);
   __ZN7WebCore22DeleteSelectionCommand19clearTransientStateEv(i1);
   if (i37) {
    break;
   }
   i33 = i36 + 8 | 0;
   i10 = i33 | 0;
   i9 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i33 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i33 - 8 | 0);
  }
 } while (0);
 i36 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i36 | 0) != 0) {
   i5 = i36 + 8 | 0;
   i37 = i5 | 0;
   i1 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
   HEAP32[i37 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i36 = HEAP32[i3 >> 2] | 0;
 if ((i36 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i36 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i36);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i3 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore22DeleteSelectionCommand25handleSpecialCaseBRDeleteEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 40 | 0;
 i8 = i2 + 56 | 0;
 i9 = i2 + 72 | 0;
 i10 = __ZNK7WebCore8Position24computeNodeAfterPositionEv(i1 + 224 | 0) | 0;
 i11 = __ZNK7WebCore8Position24computeNodeAfterPositionEv(i1 + 236 | 0) | 0;
 i12 = __ZNK7WebCore8Position24computeNodeAfterPositionEv(i1 + 248 | 0) | 0;
 if ((i10 | 0) == 0 | (i11 | 0) == 0) {
  i13 = 0;
  STACKTOP = i2;
  return i13 | 0;
 }
 do {
  if ((HEAP32[i10 + 12 >> 2] & 4 | 0) == 0) {
   i14 = 1;
  } else {
   i15 = HEAP32[i10 + 44 >> 2] | 0;
   i16 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
   if ((i15 | 0) == (i16 | 0)) {
    i14 = 0;
    break;
   }
   if ((HEAP32[i15 + 12 >> 2] | 0) != (HEAP32[i16 + 12 >> 2] | 0)) {
    i14 = 1;
    break;
   }
   i14 = (HEAP32[i15 + 16 >> 2] | 0) != (HEAP32[i16 + 16 >> 2] | 0);
  }
 } while (0);
 if ((HEAP32[i11 + 12 >> 2] & 4 | 0) == 0) {
  i13 = 0;
  STACKTOP = i2;
  return i13 | 0;
 }
 i16 = HEAP32[i11 + 44 >> 2] | 0;
 i15 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
 do {
  if ((i16 | 0) == (i15 | 0)) {
   i17 = 0;
  } else {
   if ((HEAP32[i16 + 12 >> 2] | 0) == (HEAP32[i15 + 12 >> 2] | 0)) {
    i17 = (HEAP32[i16 + 16 >> 2] | 0) != (HEAP32[i15 + 16 >> 2] | 0);
    break;
   } else {
    i13 = 0;
    STACKTOP = i2;
    return i13 | 0;
   }
  }
 } while (0);
 if (i14 | i17) {
  i13 = 0;
  STACKTOP = i2;
  return i13 | 0;
 }
 L21 : do {
  if ((i11 | 0) != (i12 | 0)) {
   i17 = (i12 | 0) == 0;
   do {
    if (!i17) {
     if ((HEAP32[i12 + 12 >> 2] & 4 | 0) == 0) {
      break;
     }
     i14 = HEAP32[i12 + 44 >> 2] | 0;
     if ((i14 | 0) != (i15 | 0)) {
      if ((HEAP32[i14 + 12 >> 2] | 0) != (HEAP32[i15 + 12 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[i14 + 16 >> 2] | 0) != (HEAP32[i15 + 16 >> 2] | 0)) {
       break;
      }
     }
     if ((HEAP32[i10 + 28 >> 2] | 0) == (i12 | 0)) {
      break L21;
     }
    }
   } while (0);
   i14 = i4 | 0;
   HEAP32[i14 >> 2] = i10;
   i16 = i10 + 8 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i7, i4, 1);
   i16 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i14 = i16 + 8 | 0;
     i18 = i14 | 0;
     i19 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     HEAP32[i18 >> 2] = i19;
     if ((i19 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i6, i7, 1);
   if (__ZN7WebCore14isStartOfBlockERKNS_15VisiblePositionE(i6) | 0) {
    i16 = i3 | 0;
    HEAP32[i16 >> 2] = i11;
    i14 = i11 + 8 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
    __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i9, i3, 2);
    i14 = HEAP32[i16 >> 2] | 0;
    do {
     if ((i14 | 0) != 0) {
      i16 = i14 + 8 | 0;
      i19 = i16 | 0;
      i18 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
      HEAP32[i19 >> 2] = i18;
      if ((i18 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i8, i9, 1);
    if (__ZN7WebCore12isEndOfBlockERKNS_15VisiblePositionE(i8) | 0) {
     i20 = 0;
     i21 = 40;
    } else {
     i22 = 1;
     i21 = 32;
    }
   } else {
    i22 = 0;
    i21 = 32;
   }
   L43 : do {
    if ((i21 | 0) == 32) {
     L45 : do {
      if (!i17) {
       do {
        if ((HEAP32[i12 + 12 >> 2] & 4 | 0) != 0) {
         i14 = HEAP32[i12 + 44 >> 2] | 0;
         i16 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
         if ((i14 | 0) == (i16 | 0)) {
          if (i22) {
           i20 = 1;
           i21 = 40;
           break L43;
          } else {
           i23 = 1;
           break L43;
          }
         }
         if ((HEAP32[i14 + 12 >> 2] | 0) != (HEAP32[i16 + 12 >> 2] | 0)) {
          break;
         }
         if ((HEAP32[i14 + 16 >> 2] | 0) == (HEAP32[i16 + 16 >> 2] | 0)) {
          break L45;
         }
        }
       } while (0);
       i16 = (HEAP32[i12 + 24 >> 2] | 0) != (i10 | 0);
       if (i22) {
        i20 = i16;
        i21 = 40;
        break L43;
       } else {
        i23 = i16;
        break L43;
       }
      }
     } while (0);
     if (i22) {
      i20 = 1;
      i21 = 40;
     } else {
      i23 = 1;
     }
    }
   } while (0);
   do {
    if ((i21 | 0) == 40) {
     i17 = HEAP32[i8 >> 2] | 0;
     do {
      if ((i17 | 0) != 0) {
       i16 = i17 + 8 | 0;
       i14 = i16 | 0;
       i18 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
       HEAP32[i14 >> 2] = i18;
       if ((i18 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
      }
     } while (0);
     i17 = HEAP32[i9 >> 2] | 0;
     if ((i17 | 0) == 0) {
      i23 = i20;
      break;
     }
     i16 = i17 + 8 | 0;
     i17 = i16 | 0;
     i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     HEAP32[i17 >> 2] = i18;
     if ((i18 | 0) >= 1) {
      i23 = i20;
      break;
     }
     if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
      i23 = i20;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
     i23 = i20;
    }
   } while (0);
   i16 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i18 = i16 + 8 | 0;
     i17 = i18 | 0;
     i14 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     HEAP32[i17 >> 2] = i14;
     if ((i14 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
    }
   } while (0);
   i16 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i16 | 0) == 0) {
     i21 = 56;
    } else {
     i18 = i16 + 8 | 0;
     i14 = i18 | 0;
     i17 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     HEAP32[i14 >> 2] = i17;
     if ((i17 | 0) >= 1) {
      i21 = 56;
      break;
     }
     if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
      i21 = 56;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
     if (i23) {
      break;
     } else {
      i13 = 0;
     }
     STACKTOP = i2;
     return i13 | 0;
    }
   } while (0);
   do {
    if ((i21 | 0) == 56) {
     if (i23) {
      break;
     } else {
      i13 = 0;
     }
     STACKTOP = i2;
     return i13 | 0;
    }
   } while (0);
   HEAP8[i1 + 159 | 0] = 1;
   i16 = HEAP32[i1 + 260 >> 2] | 0;
   if ((i16 | 0) != 0) {
    i18 = i16 + 8 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
   }
   i18 = i1 + 272 | 0;
   i17 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i16;
   do {
    if ((i17 | 0) != 0) {
     i16 = i17 + 8 | 0;
     i18 = i16 | 0;
     i14 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     HEAP32[i18 >> 2] = i14;
     if ((i14 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
    }
   } while (0);
   HEAP32[i1 + 276 >> 2] = HEAP32[i1 + 264 >> 2];
   i17 = HEAP32[i1 + 268 >> 2] | 0;
   i16 = i1 + 280 | 0;
   i14 = i16;
   i18 = HEAP32[i14 >> 2] & -8 | i17 & 7;
   HEAP32[i14 >> 2] = i18;
   HEAP8[i16] = i18 & 255 & -9 | i17 & 8;
   i13 = 0;
   STACKTOP = i2;
   return i13 | 0;
  }
 } while (0);
 i23 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
 i21 = i5 | 0;
 HEAP32[i21 >> 2] = i11;
 i7 = i11 + 8 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 FUNCTION_TABLE_viii[i23 & 3](i1, i5, 1);
 i5 = HEAP32[i21 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i13 = 1;
  STACKTOP = i2;
  return i13 | 0;
 }
 i21 = i5 + 8 | 0;
 i5 = i21 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  i13 = 1;
  STACKTOP = i2;
  return i13 | 0;
 }
 if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
  i13 = 1;
  STACKTOP = i2;
  return i13 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
 i13 = 1;
 STACKTOP = i2;
 return i13 | 0;
}
function __ZN7WebCore22DeleteSelectionCommand65makeStylingElementsDirectChildrenOfEditableRootToPreventStyleLossEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i3, i1 + 164 | 0);
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = __ZNK7WebCore5Range9firstNodeEv(i3) | 0;
 L1 : do {
  if ((i7 | 0) != 0) {
   i8 = i7 + 8 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   i8 = i1;
   i9 = i4 | 0;
   i10 = i1 | 0;
   i11 = i5 | 0;
   i12 = i6 | 0;
   i13 = i7;
   while (1) {
    if ((i13 | 0) == (__ZNK7WebCore5Range12pastLastNodeEv(i3) | 0)) {
     break;
    }
    i14 = i13 + 12 | 0;
    if ((HEAP32[i14 >> 2] & 2 | 0) == 0) {
     i15 = 6;
    } else {
     i16 = HEAP32[i13 + 36 >> 2] | 0;
     if ((i16 | 0) == 0) {
      i15 = 6;
     } else {
      i17 = i16;
      i15 = 7;
     }
    }
    do {
     if ((i15 | 0) == 6) {
      i15 = 0;
      i16 = HEAP32[i13 + 28 >> 2] | 0;
      if ((i16 | 0) != 0) {
       i17 = i16;
       i15 = 7;
       break;
      }
      i16 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i13) | 0;
      if ((i16 | 0) == 0) {
       i18 = 0;
       i19 = 1;
      } else {
       i20 = i16;
       i21 = 0;
       i15 = 9;
      }
     }
    } while (0);
    if ((i15 | 0) == 7) {
     i15 = 0;
     i20 = i17;
     i21 = (i17 | 0) == 0;
     i15 = 9;
    }
    if ((i15 | 0) == 9) {
     i15 = 0;
     i16 = i20 + 8 | 0;
     HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
     i18 = i20;
     i19 = i21;
    }
    i16 = HEAP32[i14 >> 2] | 0;
    do {
     if ((i16 & 4 | 0) == 0) {
      i22 = i16;
      i15 = 16;
     } else {
      i23 = HEAP32[i13 + 44 >> 2] | 0;
      i24 = HEAP32[__ZN7WebCore9HTMLNames8styleTagE >> 2] | 0;
      if ((i23 | 0) != (i24 | 0)) {
       if ((HEAP32[i23 + 12 >> 2] | 0) != (HEAP32[i24 + 12 >> 2] | 0)) {
        i22 = i16;
        i15 = 16;
        break;
       }
       if ((HEAP32[i23 + 16 >> 2] | 0) != (HEAP32[i24 + 16 >> 2] | 0)) {
        i22 = i16;
        i15 = 16;
        break;
       }
      }
      if (!(__ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(i13, __ZN7WebCore9HTMLNames10scopedAttrE) | 0)) {
       i15 = 20;
       break;
      }
      i22 = HEAP32[i14 >> 2] | 0;
      i15 = 16;
     }
    } while (0);
    do {
     if ((i15 | 0) == 16) {
      i15 = 0;
      if ((i22 & 4 | 0) == 0) {
       i25 = i18;
       break;
      }
      i14 = HEAP32[i13 + 44 >> 2] | 0;
      i16 = HEAP32[__ZN7WebCore9HTMLNames7linkTagE >> 2] | 0;
      if ((i14 | 0) == (i16 | 0)) {
       i15 = 20;
       break;
      }
      if ((HEAP32[i14 + 12 >> 2] | 0) != (HEAP32[i16 + 12 >> 2] | 0)) {
       i25 = i18;
       break;
      }
      if ((HEAP32[i14 + 16 >> 2] | 0) == (HEAP32[i16 + 16 >> 2] | 0)) {
       i15 = 20;
      } else {
       i25 = i18;
      }
     }
    } while (0);
    do {
     if ((i15 | 0) == 20) {
      i15 = 0;
      i16 = HEAP32[i13 + 28 >> 2] | 0;
      if ((i16 | 0) == 0) {
       i14 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i13) | 0;
       if ((i14 | 0) == 0) {
        i26 = 0;
       } else {
        i27 = i14;
        i15 = 22;
       }
      } else {
       i27 = i16;
       i15 = 22;
      }
      if ((i15 | 0) == 22) {
       i15 = 0;
       i16 = i27 + 8 | 0;
       HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
       i26 = i27;
      }
      do {
       if (!i19) {
        i16 = i18 + 8 | 0;
        i14 = i16 | 0;
        i24 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
        HEAP32[i14 >> 2] = i24;
        if ((i24 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
       }
      } while (0);
      i16 = __ZNK7WebCore4Node19rootEditableElementEv(i13) | 0;
      i24 = i16 | 0;
      if ((i16 | 0) == 0) {
       i25 = i26;
       break;
      }
      i14 = i16 + 8 | 0;
      HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
      i23 = HEAP32[(HEAP32[i8 >> 2] | 0) + 60 >> 2] | 0;
      HEAP32[i9 >> 2] = i13;
      i28 = i13 + 8 | 0;
      HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
      FUNCTION_TABLE_viii[i23 & 3](i1, i4, 1);
      i23 = HEAP32[i9 >> 2] | 0;
      do {
       if ((i23 | 0) != 0) {
        i28 = i23 + 8 | 0;
        i29 = i28 | 0;
        i30 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
        HEAP32[i29 >> 2] = i30;
        if ((i30 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
       }
      } while (0);
      HEAP32[i11 >> 2] = i13;
      i23 = i13 + 8 | 0;
      HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
      HEAP32[i12 >> 2] = i24;
      HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
      __ZN7WebCore20CompositeEditCommand10appendNodeEN3WTF10PassRefPtrINS_4NodeEEENS2_INS_13ContainerNodeEEE(i10, i5, i6);
      i23 = HEAP32[i12 >> 2] | 0;
      do {
       if ((i23 | 0) != 0) {
        i28 = i23 + 8 | 0;
        i30 = i28 | 0;
        i29 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
        HEAP32[i30 >> 2] = i29;
        if ((i29 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
       }
      } while (0);
      i23 = HEAP32[i11 >> 2] | 0;
      do {
       if ((i23 | 0) != 0) {
        i14 = i23 + 8 | 0;
        i24 = i14 | 0;
        i28 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
        HEAP32[i24 >> 2] = i28;
        if ((i28 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
       }
      } while (0);
      i23 = i16 + 8 | 0;
      i14 = i23 | 0;
      i28 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
      HEAP32[i14 >> 2] = i28;
      if ((i28 | 0) >= 1) {
       i25 = i26;
       break;
      }
      if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
       i25 = i26;
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
      i25 = i26;
     }
    } while (0);
    i23 = (i25 | 0) == 0;
    if (!i23) {
     i28 = i25 + 8 | 0;
     HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
    }
    i28 = i13 + 8 | 0;
    i14 = i28 - 8 | 0;
    i24 = i28 | 0;
    i29 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
    HEAP32[i24 >> 2] = i29;
    do {
     if ((i29 | 0) < 1) {
      if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i14);
     }
    } while (0);
    if (i23) {
     break L1;
    }
    i14 = i25 + 8 | 0;
    i28 = i14 | 0;
    i29 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
    HEAP32[i28 >> 2] = i29;
    if ((i29 | 0) >= 1) {
     i13 = i25;
     continue;
    }
    if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
     i13 = i25;
     continue;
    }
    __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
    i13 = i25;
   }
   i11 = i13 + 8 | 0;
   i12 = i11 | 0;
   i10 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i25 = i3 | 0;
 i26 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
 if ((i26 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i25 >> 2] = i26;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore22DeleteSelectionCommand53originalStringForAutocorrectionAtBeginningOfSelectionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 48 | 0;
 i8 = i3 + 56 | 0;
 i9 = i3 + 72 | 0;
 i10 = i3 + 88 | 0;
 i11 = i3 + 104 | 0;
 if ((HEAP32[i2 + 216 >> 2] | 0) != 2) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 i12 = i5 | 0;
 i13 = HEAP32[i2 + 188 >> 2] | 0;
 HEAP32[i12 >> 2] = i13;
 if ((i13 | 0) == 0) {
  i14 = i5 + 8 | 0;
  i15 = 0;
  i16 = i14;
  i17 = i14;
 } else {
  i14 = i13 + 8 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
  i14 = i5 + 8 | 0;
  i13 = i14;
  i15 = HEAP32[i13 >> 2] & -8;
  i16 = i14;
  i17 = i13;
 }
 HEAP32[i5 + 4 >> 2] = HEAP32[i2 + 192 >> 2];
 i13 = HEAP32[i2 + 196 >> 2] | 0;
 i14 = i15 | i13 & 7;
 HEAP32[i17 >> 2] = i14;
 HEAP8[i16] = i14 & 255 & -9 | i13 & 8;
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i4, i5, 1);
 i5 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i12 = i5 + 8 | 0;
   i13 = i12 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 do {
  if (__ZN7WebCore13isStartOfWordERKNS_15VisiblePositionE(i4) | 0) {
   __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i6, i4, 0);
   i5 = i6 | 0;
   i12 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i12 | 0) == 0) {
     HEAP32[i1 >> 2] = 0;
    } else {
     i14 = i2 + 8 | 0;
     i13 = HEAP32[i14 >> 2] | 0;
     i16 = i8 | 0;
     i17 = i4 | 0;
     i15 = HEAP32[i17 >> 2] | 0;
     HEAP32[i16 >> 2] = i15;
     if ((i15 | 0) == 0) {
      i18 = i12;
     } else {
      i19 = i15 + 8 | 0;
      HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
      i18 = HEAP32[i5 >> 2] | 0;
     }
     i19 = i4 + 4 | 0;
     HEAP32[i8 + 4 >> 2] = HEAP32[i19 >> 2];
     i15 = HEAP32[i4 + 8 >> 2] | 0;
     i20 = i8 + 8 | 0;
     i21 = i20;
     i22 = HEAP32[i21 >> 2] & -8 | i15 & 7;
     HEAP32[i21 >> 2] = i22;
     HEAP8[i20] = i22 & 255 & -9 | i15 & 8;
     i15 = i9 | 0;
     HEAP32[i15 >> 2] = i18;
     if ((i18 | 0) != 0) {
      i22 = i18 + 8 | 0;
      HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
     }
     HEAP32[i9 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
     i22 = HEAP32[i6 + 8 >> 2] | 0;
     i20 = i9 + 8 | 0;
     i21 = i20;
     i23 = HEAP32[i21 >> 2] & -8 | i22 & 7;
     HEAP32[i21 >> 2] = i23;
     HEAP8[i20] = i23 & 255 & -9 | i22 & 8;
     __ZN7WebCore5Range6createERNS_8DocumentERKNS_8PositionES5_(i7, i13, i8, i9);
     i13 = i7 | 0;
     i22 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     i13 = HEAP32[i15 >> 2] | 0;
     do {
      if ((i13 | 0) != 0) {
       i15 = i13 + 8 | 0;
       i23 = i15 | 0;
       i20 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
       HEAP32[i23 >> 2] = i20;
       if ((i20 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
      }
     } while (0);
     i13 = HEAP32[i16 >> 2] | 0;
     do {
      if ((i13 | 0) != 0) {
       i15 = i13 + 8 | 0;
       i20 = i15 | 0;
       i23 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
       HEAP32[i20 >> 2] = i23;
       if ((i23 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
      }
     } while (0);
     i13 = HEAP32[(HEAP32[i14 >> 2] | 0) + 1124 >> 2] | 0;
     HEAP32[i11 >> 2] = 64;
     __ZN7WebCore24DocumentMarkerController14markersInRangeEPNS_5RangeENS_14DocumentMarker11MarkerTypesE(i10, i13, i22, i11);
     i13 = i10 + 8 | 0;
     L35 : do {
      if ((HEAP32[i13 >> 2] | 0) == 0) {
       i24 = 38;
      } else {
       i16 = i10 | 0;
       i15 = 0;
       while (1) {
        i25 = HEAP32[(HEAP32[i16 >> 2] | 0) + (i15 << 2) >> 2] | 0;
        i23 = HEAP32[i25 + 4 >> 2] | 0;
        i20 = HEAP32[i17 >> 2] | 0;
        i21 = (i20 | 0) == 0;
        if (!i21) {
         i26 = i20 + 8 | 0;
         HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
        }
        i26 = (i23 | 0) == (HEAP32[i19 >> 2] | 0);
        do {
         if (!i21) {
          i23 = i20 + 8 | 0;
          i27 = i23 | 0;
          i28 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
          HEAP32[i27 >> 2] = i28;
          if ((i28 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
         }
        } while (0);
        if (i26) {
         break;
        }
        i20 = i15 + 1 | 0;
        if (i20 >>> 0 < (HEAP32[i13 >> 2] | 0) >>> 0) {
         i15 = i20;
        } else {
         i24 = 38;
         break L35;
        }
       }
       i15 = HEAP32[(__ZNK7WebCore14DocumentMarker11descriptionEv(i25) | 0) >> 2] | 0;
       HEAP32[i1 >> 2] = i15;
       if ((i15 | 0) == 0) {
        break;
       }
       i16 = i15 | 0;
       HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
      }
     } while (0);
     if ((i24 | 0) == 38) {
      HEAP32[i1 >> 2] = 0;
     }
     if ((HEAP32[i13 >> 2] | 0) != 0) {
      HEAP32[i13 >> 2] = 0;
     }
     i19 = i10 | 0;
     i17 = HEAP32[i19 >> 2] | 0;
     if ((i17 | 0) != 0) {
      HEAP32[i19 >> 2] = 0;
      HEAP32[i10 + 4 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i17);
     }
     if ((i22 | 0) == 0) {
      break;
     }
     i17 = i22 | 0;
     i19 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i22);
      __ZN3WTF8fastFreeEPv(i22);
      break;
     } else {
      HEAP32[i17 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i12 = HEAP32[i5 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i19 = i12 + 8 | 0;
   i12 = i19 | 0;
   i17 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i17;
   if ((i17 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
  } else {
   HEAP32[i1 >> 2] = 0;
  }
 } while (0);
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i1 + 8 | 0;
 i1 = i4 | 0;
 i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i10;
 if ((i10 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore22DeleteSelectionCommand33setStartingSelectionOnSmartDeleteERKNS_8PositionES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 i9 = i4 + 64 | 0;
 i10 = i4 + 80 | 0;
 i11 = i4 + 96 | 0;
 i12 = i5 | 0;
 i13 = i5 + 4 | 0;
 i14 = i5 + 8 | 0;
 i15 = i14;
 i16 = i5 + 12 | 0;
 _memset(i5 | 0, 0, 12) | 0;
 HEAP32[i16 >> 2] = 1;
 i17 = i6 | 0;
 i18 = i6 + 4 | 0;
 i19 = i6 + 8 | 0;
 i20 = i19;
 i21 = i6 + 12 | 0;
 _memset(i6 | 0, 0, 12) | 0;
 HEAP32[i21 >> 2] = 1;
 i22 = i1 | 0;
 i23 = i1 + 68 | 0;
 do {
  if ((HEAP8[i23] & 1) == 0) {
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i9, i3, 1);
   i1 = i9 | 0;
   i24 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = 0;
   i25 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i24;
   do {
    if ((i25 | 0) != 0) {
     i24 = i25 + 8 | 0;
     i26 = i24 | 0;
     i27 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     HEAP32[i26 >> 2] = i27;
     if ((i27 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
    }
   } while (0);
   HEAP32[i13 >> 2] = HEAP32[i9 + 4 >> 2];
   i25 = HEAP32[i9 + 8 >> 2] | 0;
   i24 = HEAP32[i15 >> 2] & -8 | i25 & 7;
   HEAP32[i15 >> 2] = i24;
   HEAP8[i14] = i24 & 255 & -9 | i25 & 8;
   HEAP32[i16 >> 2] = HEAP32[i9 + 12 >> 2];
   i25 = HEAP32[i1 >> 2] | 0;
   do {
    if ((i25 | 0) != 0) {
     i24 = i25 + 8 | 0;
     i27 = i24 | 0;
     i26 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
     HEAP32[i27 >> 2] = i26;
     if ((i26 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i10, i2, 1);
   i25 = i10 | 0;
   i1 = HEAP32[i25 >> 2] | 0;
   HEAP32[i25 >> 2] = 0;
   i24 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = i1;
   do {
    if ((i24 | 0) != 0) {
     i1 = i24 + 8 | 0;
     i26 = i1 | 0;
     i27 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     HEAP32[i26 >> 2] = i27;
     if ((i27 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
    }
   } while (0);
   HEAP32[i18 >> 2] = HEAP32[i10 + 4 >> 2];
   i24 = HEAP32[i10 + 8 >> 2] | 0;
   i1 = HEAP32[i20 >> 2] & -8 | i24 & 7;
   HEAP32[i20 >> 2] = i1;
   HEAP8[i19] = i1 & 255 & -9 | i24 & 8;
   HEAP32[i21 >> 2] = HEAP32[i10 + 12 >> 2];
   i24 = HEAP32[i25 >> 2] | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   i1 = i24 + 8 | 0;
   i24 = i1 | 0;
   i27 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   HEAP32[i24 >> 2] = i27;
   if ((i27 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
  } else {
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i7, i2, 1);
   i1 = i7 | 0;
   i27 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = 0;
   i24 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i27;
   do {
    if ((i24 | 0) != 0) {
     i27 = i24 + 8 | 0;
     i26 = i27 | 0;
     i28 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     HEAP32[i26 >> 2] = i28;
     if ((i28 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
    }
   } while (0);
   HEAP32[i13 >> 2] = HEAP32[i7 + 4 >> 2];
   i24 = HEAP32[i7 + 8 >> 2] | 0;
   i25 = HEAP32[i15 >> 2] & -8 | i24 & 7;
   HEAP32[i15 >> 2] = i25;
   HEAP8[i14] = i25 & 255 & -9 | i24 & 8;
   HEAP32[i16 >> 2] = HEAP32[i7 + 12 >> 2];
   i24 = HEAP32[i1 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     i25 = i24 + 8 | 0;
     i27 = i25 | 0;
     i28 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
     HEAP32[i27 >> 2] = i28;
     if ((i28 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i8, i3, 1);
   i24 = i8 | 0;
   i1 = HEAP32[i24 >> 2] | 0;
   HEAP32[i24 >> 2] = 0;
   i25 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = i1;
   do {
    if ((i25 | 0) != 0) {
     i1 = i25 + 8 | 0;
     i28 = i1 | 0;
     i27 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     HEAP32[i28 >> 2] = i27;
     if ((i27 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
    }
   } while (0);
   HEAP32[i18 >> 2] = HEAP32[i8 + 4 >> 2];
   i25 = HEAP32[i8 + 8 >> 2] | 0;
   i1 = HEAP32[i20 >> 2] & -8 | i25 & 7;
   HEAP32[i20 >> 2] = i1;
   HEAP8[i19] = i1 & 255 & -9 | i25 & 8;
   HEAP32[i21 >> 2] = HEAP32[i8 + 12 >> 2];
   i25 = HEAP32[i24 >> 2] | 0;
   if ((i25 | 0) == 0) {
    break;
   }
   i1 = i25 + 8 | 0;
   i25 = i1 | 0;
   i27 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   HEAP32[i25 >> 2] = i27;
   if ((i27 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionES3_b(i11, i5, i6, (HEAP8[i23] & 2) != 0);
 __ZN7WebCore11EditCommand20setStartingSelectionERKNS_16VisibleSelectionE(i22, i11);
 __ZN7WebCore16VisibleSelectionD2Ev(i11);
 i11 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i17 = i11 + 8 | 0;
   i22 = i17 | 0;
   i23 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   HEAP32[i22 >> 2] = i23;
   if ((i23 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
  }
 } while (0);
 i11 = HEAP32[i12 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i12 = i11 + 8 | 0;
 i11 = i12 | 0;
 i17 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 HEAP32[i11 >> 2] = i17;
 if ((i17 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22DeleteSelectionCommandD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 340 >> 2] | 0;
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
 i2 = HEAP32[i1 + 336 >> 2] | 0;
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
 i2 = HEAP32[i1 + 332 >> 2] | 0;
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
 i2 = HEAP32[i1 + 328 >> 2] | 0;
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
 i2 = HEAP32[i1 + 324 >> 2] | 0;
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
 i2 = HEAP32[i1 + 320 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore12EditingStyleD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 316 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore12EditingStyleD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 312 >> 2] | 0;
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
 i2 = HEAP32[i1 + 308 >> 2] | 0;
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
 i2 = HEAP32[i1 + 296 >> 2] | 0;
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
 i2 = HEAP32[i1 + 284 >> 2] | 0;
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
 i2 = HEAP32[i1 + 272 >> 2] | 0;
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
 i2 = HEAP32[i1 + 260 >> 2] | 0;
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
 i2 = HEAP32[i1 + 248 >> 2] | 0;
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
 i2 = HEAP32[i1 + 236 >> 2] | 0;
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
 i2 = HEAP32[i1 + 224 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = i1 + 164 | 0;
  __ZN7WebCore16VisibleSelectionD2Ev(i6);
  i7 = i1 | 0;
  __ZN7WebCore20CompositeEditCommandD2Ev(i7);
  return;
 }
 i3 = i2 + 8 | 0;
 i2 = i3 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  i6 = i1 + 164 | 0;
  __ZN7WebCore16VisibleSelectionD2Ev(i6);
  i7 = i1 | 0;
  __ZN7WebCore20CompositeEditCommandD2Ev(i7);
  return;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  i6 = i1 + 164 | 0;
  __ZN7WebCore16VisibleSelectionD2Ev(i6);
  i7 = i1 | 0;
  __ZN7WebCore20CompositeEditCommandD2Ev(i7);
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 i6 = i1 + 164 | 0;
 __ZN7WebCore16VisibleSelectionD2Ev(i6);
 i7 = i1 | 0;
 __ZN7WebCore20CompositeEditCommandD2Ev(i7);
 return;
}
function __ZN7WebCore22DeleteSelectionCommand20saveTypingStyleStateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 32 | 0;
 i6 = i2 + 48 | 0;
 i7 = HEAP32[i1 + 224 >> 2] | 0;
 do {
  if ((i7 | 0) == (HEAP32[i1 + 260 >> 2] | 0)) {
   if ((HEAP32[i7 + 12 >> 2] & 1 | 0) == 0) {
    break;
   }
   i8 = (HEAP32[(__ZN7WebCore11EditCommand5frameEv(i1 | 0) | 0) + 468 >> 2] | 0) + 116 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   if ((i9 | 0) == 0) {
    STACKTOP = i2;
    return;
   }
   i8 = i9 | 0;
   i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore12EditingStyleD1Ev(i9);
    __ZN3WTF8fastFreeEPv(i9);
    STACKTOP = i2;
    return;
   } else {
    HEAP32[i8 >> 2] = i10;
    STACKTOP = i2;
    return;
   }
  }
 } while (0);
 i7 = i3 | 0;
 i10 = i1 + 188 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i8 | 0) == 0) {
  i9 = i3 + 8 | 0;
  i11 = 0;
  i12 = i9;
  i13 = i9;
 } else {
  i9 = i8 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i9 = i3 + 8 | 0;
  i8 = i9;
  i11 = HEAP32[i8 >> 2] & -8;
  i12 = i9;
  i13 = i8;
 }
 i8 = i1 + 192 | 0;
 HEAP32[i3 + 4 >> 2] = HEAP32[i8 >> 2];
 i9 = i1 + 196 | 0;
 i14 = HEAP32[i9 >> 2] | 0;
 i15 = i11 | i14 & 7;
 HEAP32[i13 >> 2] = i15;
 HEAP8[i12] = i15 & 255 & -9 | i14 & 8;
 i14 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore12EditingStyleC1ERKNS_8PositionENS0_19PropertiesToIncludeE(i14, i3, 2);
 i3 = i1 + 316 | 0;
 i15 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i14;
 do {
  if ((i15 | 0) != 0) {
   i14 = i15 | 0;
   i12 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) == 0) {
    __ZN7WebCore12EditingStyleD1Ev(i15);
    __ZN3WTF8fastFreeEPv(i15);
    break;
   } else {
    HEAP32[i14 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i15 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i7 = i15 + 8 | 0;
   i12 = i7 | 0;
   i14 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 i15 = HEAP32[i3 >> 2] | 0;
 i3 = i4 | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 HEAP32[i3 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i14 = i7 + 8 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
 }
 HEAP32[i4 + 4 >> 2] = HEAP32[i8 >> 2];
 i14 = HEAP32[i9 >> 2] | 0;
 i7 = i4 + 8 | 0;
 i12 = i7;
 i13 = HEAP32[i12 >> 2] & -8 | i14 & 7;
 HEAP32[i12 >> 2] = i13;
 HEAP8[i7] = i13 & 255 & -9 | i14 & 8;
 __ZN7WebCore12EditingStyle22removeStyleAddedByNodeEPNS_4NodeE(i15, __ZN7WebCore22enclosingAnchorElementERKNS_8PositionE(i4) | 0);
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 + 8 | 0;
   i15 = i3 | 0;
   i14 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   HEAP32[i15 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i4 = i5 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i10 = i3 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 HEAP32[i5 + 4 >> 2] = HEAP32[i8 >> 2];
 i8 = HEAP32[i9 >> 2] | 0;
 i9 = i5 + 8 | 0;
 i10 = i9;
 i3 = HEAP32[i10 >> 2] & -8 | i8 & 7;
 HEAP32[i10 >> 2] = i3;
 HEAP8[i9] = i3 & 255 & -9 | i8 & 8;
 i8 = (__ZN7WebCore19enclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleE(i5, F_BASE_ii + 4 | 0, 1) | 0) == 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 + 8 | 0;
   i3 = i4 | 0;
   i9 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i5 = i1 + 320 | 0;
 if (i8) {
  i8 = i5 | 0;
  i4 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = 0;
  if ((i4 | 0) == 0) {
   STACKTOP = i2;
   return;
  }
  i8 = i4 | 0;
  i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore12EditingStyleD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
   STACKTOP = i2;
   return;
  } else {
   HEAP32[i8 >> 2] = i9;
   STACKTOP = i2;
   return;
  }
 }
 i9 = i6 | 0;
 i8 = HEAP32[i1 + 200 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i4 = i8 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 HEAP32[i6 + 4 >> 2] = HEAP32[i1 + 204 >> 2];
 i4 = HEAP32[i1 + 208 >> 2] | 0;
 i1 = i6 + 8 | 0;
 i8 = i1;
 i3 = HEAP32[i8 >> 2] & -8 | i4 & 7;
 HEAP32[i8 >> 2] = i3;
 HEAP8[i1] = i3 & 255 & -9 | i4 & 8;
 i4 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore12EditingStyleC1ERKNS_8PositionENS0_19PropertiesToIncludeE(i4, i6, 1);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN7WebCore12EditingStyleD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i9 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i9 = i5 + 8 | 0;
 i5 = i9 | 0;
 i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i6;
 if ((i6 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore22DeleteSelectionCommand38removePreviouslySelectedEmptyTableRowsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 336 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 L1 : do {
  if ((i7 | 0) != 0) {
   if ((HEAP32[i7 + 12 >> 2] & 256 | 0) == 0) {
    break;
   }
   i8 = i1 + 332 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   if ((i7 | 0) == (i9 | 0)) {
    break;
   }
   i10 = HEAP32[i7 + 24 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i11 = i1 | 0;
   i12 = i3 | 0;
   i13 = i10;
   i10 = i9;
   while (1) {
    if ((i10 | 0) == (i13 | 0)) {
     break L1;
    }
    i9 = HEAP32[i13 + 24 >> 2] | 0;
    i14 = (i9 | 0) == 0;
    if (!i14) {
     i15 = i9 + 8 | 0;
     HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
    }
    do {
     if (__ZN7WebCoreL15isTableRowEmptyEPNS_4NodeE(i13) | 0) {
      HEAP32[i12 >> 2] = i13;
      i15 = i13 + 8 | 0;
      HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
      __ZN7WebCore20CompositeEditCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE(i11, i3, 1);
      i15 = HEAP32[i12 >> 2] | 0;
      if ((i15 | 0) == 0) {
       break;
      }
      i16 = i15 + 8 | 0;
      i15 = i16 | 0;
      i17 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
      HEAP32[i15 >> 2] = i17;
      if ((i17 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
     }
    } while (0);
    if (i14) {
     break L1;
    }
    i16 = i9 + 8 | 0;
    i17 = i16 - 8 | 0;
    i15 = i16 | 0;
    i18 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
    HEAP32[i15 >> 2] = i18;
    do {
     if ((i18 | 0) < 1) {
      if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i17);
     }
    } while (0);
    i13 = i9;
    i10 = HEAP32[i8 >> 2] | 0;
   }
  }
 } while (0);
 i3 = i1 + 332 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 L24 : do {
  if ((i7 | 0) == 0) {
   i19 = 37;
  } else {
   if ((HEAP32[i7 + 12 >> 2] & 256 | 0) == 0) {
    i19 = 37;
    break;
   }
   i8 = HEAP32[i6 >> 2] | 0;
   if ((i7 | 0) == (i8 | 0)) {
    i20 = i7;
    break;
   }
   i10 = HEAP32[i7 + 28 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i19 = 37;
    break;
   }
   i13 = i1 | 0;
   i12 = i4 | 0;
   i11 = i10;
   i10 = i8;
   while (1) {
    if ((i10 | 0) == (i11 | 0)) {
     i20 = i10;
     break L24;
    }
    i8 = HEAP32[i11 + 28 >> 2] | 0;
    i17 = (i8 | 0) == 0;
    if (!i17) {
     i16 = i8 + 8 | 0;
     HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
    }
    do {
     if (__ZN7WebCoreL15isTableRowEmptyEPNS_4NodeE(i11) | 0) {
      HEAP32[i12 >> 2] = i11;
      i16 = i11 + 8 | 0;
      HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
      __ZN7WebCore20CompositeEditCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE(i13, i4, 1);
      i16 = HEAP32[i12 >> 2] | 0;
      if ((i16 | 0) == 0) {
       break;
      }
      i18 = i16 + 8 | 0;
      i16 = i18 | 0;
      i14 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
      HEAP32[i16 >> 2] = i14;
      if ((i14 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
     }
    } while (0);
    if (i17) {
     i19 = 37;
     break L24;
    }
    i9 = i8 + 8 | 0;
    i18 = i9 - 8 | 0;
    i14 = i9 | 0;
    i16 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
    HEAP32[i14 >> 2] = i16;
    do {
     if ((i16 | 0) < 1) {
      if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i18);
     }
    } while (0);
    i11 = i8;
    i10 = HEAP32[i6 >> 2] | 0;
   }
  }
 } while (0);
 if ((i19 | 0) == 37) {
  i20 = HEAP32[i6 >> 2] | 0;
 }
 if ((i20 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i20 + 12 >> 2] & 256 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((i20 | 0) == (HEAP32[i3 >> 2] | 0)) {
  STACKTOP = i2;
  return;
 }
 if (!(__ZN7WebCoreL15isTableRowEmptyEPNS_4NodeE(i20) | 0)) {
  STACKTOP = i2;
  return;
 }
 if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(HEAP32[i1 + 272 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0) {
  STACKTOP = i2;
  return;
 }
 i20 = HEAP32[i6 >> 2] | 0;
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = i20;
 if ((i20 | 0) != 0) {
  i3 = i20 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 __ZN7WebCore20CompositeEditCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE(i1 | 0, i5, 1);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i5 + 8 | 0;
 i5 = i6 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore22DeleteSelectionCommand19clearTransientStateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 __ZN7WebCore16VisibleSelectionC1Ev(i3);
 __ZN7WebCore16VisibleSelectionaSEOS0_(i1 + 164 | 0, i3) | 0;
 __ZN7WebCore16VisibleSelectionD2Ev(i3);
 i3 = i1 + 224 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
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
 HEAP32[i1 + 228 >> 2] = 0;
 i4 = i1 + 232 | 0;
 i3 = i4;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i6 & -8;
 HEAP8[i4] = i6 & 255 & -16;
 i6 = i1 + 236 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 do {
  if ((i4 | 0) != 0) {
   i6 = i4 + 8 | 0;
   i3 = i6 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 240 >> 2] = 0;
 i4 = i1 + 244 | 0;
 i6 = i4;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i5 & -8;
 HEAP8[i4] = i5 & 255 & -16;
 i5 = i1 + 248 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 + 8 | 0;
   i6 = i5 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 252 >> 2] = 0;
 i4 = i1 + 256 | 0;
 i5 = i4;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i3 & -8;
 HEAP8[i4] = i3 & 255 & -16;
 i3 = i1 + 260 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
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
 HEAP32[i1 + 264 >> 2] = 0;
 i4 = i1 + 268 | 0;
 i3 = i4;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i6 & -8;
 HEAP8[i4] = i6 & 255 & -16;
 i6 = i1 + 272 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 do {
  if ((i4 | 0) != 0) {
   i6 = i4 + 8 | 0;
   i3 = i6 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 276 >> 2] = 0;
 i4 = i1 + 280 | 0;
 i6 = i4;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i5 & -8;
 HEAP8[i4] = i5 & 255 & -16;
 i5 = i1 + 284 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 + 8 | 0;
   i6 = i5 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 288 >> 2] = 0;
 i4 = i1 + 292 | 0;
 i5 = i4;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i3 & -8;
 HEAP8[i4] = i3 & 255 & -16;
 i3 = i1 + 296 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i4 | 0) == 0) {
  i7 = i1 + 300 | 0;
  HEAP32[i7 >> 2] = 0;
  i8 = i1 + 304 | 0;
  i9 = i8;
  i10 = HEAP32[i9 >> 2] | 0;
  i11 = i10 & -8;
  HEAP32[i9 >> 2] = i11;
  i12 = i10 & 255;
  i13 = i12 & -16;
  HEAP8[i8] = i13;
  STACKTOP = i2;
  return;
 }
 i3 = i4 + 8 | 0;
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  i7 = i1 + 300 | 0;
  HEAP32[i7 >> 2] = 0;
  i8 = i1 + 304 | 0;
  i9 = i8;
  i10 = HEAP32[i9 >> 2] | 0;
  i11 = i10 & -8;
  HEAP32[i9 >> 2] = i11;
  i12 = i10 & 255;
  i13 = i12 & -16;
  HEAP8[i8] = i13;
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  i7 = i1 + 300 | 0;
  HEAP32[i7 >> 2] = 0;
  i8 = i1 + 304 | 0;
  i9 = i8;
  i10 = HEAP32[i9 >> 2] | 0;
  i11 = i10 & -8;
  HEAP32[i9 >> 2] = i11;
  i12 = i10 & 255;
  i13 = i12 & -16;
  HEAP8[i8] = i13;
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 i7 = i1 + 300 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i1 + 304 | 0;
 i9 = i8;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = i10 & -8;
 HEAP32[i9 >> 2] = i11;
 i12 = i10 & 255;
 i13 = i12 & -16;
 HEAP8[i8] = i13;
 STACKTOP = i2;
 return;
}
function __ZN7WebCoreL15isTableRowEmptyEPNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 32 | 0;
 i6 = i2 + 48 | 0;
 if ((i1 | 0) == 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i8 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i8 & 4 | 0) == 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i9 = HEAP32[i1 + 44 >> 2] | 0;
 i10 = HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0;
 do {
  if ((i9 | 0) != (i10 | 0)) {
   if ((HEAP32[i9 + 12 >> 2] | 0) != (HEAP32[i10 + 12 >> 2] | 0)) {
    i7 = 0;
    STACKTOP = i2;
    return i7 | 0;
   }
   if ((HEAP32[i9 + 16 >> 2] | 0) == (HEAP32[i10 + 16 >> 2] | 0)) {
    break;
   } else {
    i7 = 0;
   }
   STACKTOP = i2;
   return i7 | 0;
  }
 } while (0);
 if ((i8 & 2 | 0) == 0) {
  i7 = 1;
  STACKTOP = i2;
  return i7 | 0;
 }
 i8 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i7 = 1;
  STACKTOP = i2;
  return i7 | 0;
 }
 i1 = i5 | 0;
 i10 = i6 | 0;
 i9 = i3 | 0;
 i11 = i4 | 0;
 i12 = i8;
 while (1) {
  if (__ZN7WebCore11isTableCellEPKNS_4NodeE(i12) | 0) {
   __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i4, i12);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i3, i4, 1);
   __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i6, i12);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i5, i6, 1);
   i8 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i3, i5) | 0;
   i13 = HEAP32[i1 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i14 = i13 + 8 | 0;
     i15 = i14 | 0;
     i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     HEAP32[i15 >> 2] = i16;
     if ((i16 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
    }
   } while (0);
   i13 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i14 = i13 + 8 | 0;
     i16 = i14 | 0;
     i15 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     HEAP32[i16 >> 2] = i15;
     if ((i15 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
    }
   } while (0);
   i13 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i14 = i13 + 8 | 0;
     i15 = i14 | 0;
     i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     HEAP32[i15 >> 2] = i16;
     if ((i16 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
    }
   } while (0);
   i13 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i14 = i13 + 8 | 0;
     i16 = i14 | 0;
     i15 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     HEAP32[i16 >> 2] = i15;
     if ((i15 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
    }
   } while (0);
   if (!i8) {
    i7 = 0;
    i17 = 31;
    break;
   }
  }
  i13 = HEAP32[i12 + 28 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i7 = 1;
   i17 = 30;
   break;
  } else {
   i12 = i13;
  }
 }
 if ((i17 | 0) == 30) {
  STACKTOP = i2;
  return i7 | 0;
 } else if ((i17 | 0) == 31) {
  STACKTOP = i2;
  return i7 | 0;
 }
 return 0;
}
function __ZN7WebCore16VisibleSelectionaSERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 8 | 0;
   i4 = i3 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i5 = i2 + 8 | 0;
 i3 = i1 + 8 | 0;
 i6 = i3;
 i4 = HEAP32[i6 >> 2] & -8 | HEAP32[i5 >> 2] & 7;
 HEAP32[i6 >> 2] = i4;
 HEAP8[i3] = i4 & 255 & -9 | HEAP8[i5] & 8;
 i5 = HEAP32[i2 + 12 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 + 12 | 0;
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
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 i3 = i2 + 20 | 0;
 i5 = i1 + 20 | 0;
 i6 = i5;
 i4 = HEAP32[i6 >> 2] & -8 | HEAP32[i3 >> 2] & 7;
 HEAP32[i6 >> 2] = i4;
 HEAP8[i5] = i4 & 255 & -9 | HEAP8[i3] & 8;
 i3 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 8 | 0;
   i4 = i3 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 i5 = i2 + 32 | 0;
 i3 = i1 + 32 | 0;
 i6 = i3;
 i4 = HEAP32[i6 >> 2] & -8 | HEAP32[i5 >> 2] & 7;
 HEAP32[i6 >> 2] = i4;
 HEAP8[i3] = i4 & 255 & -9 | HEAP8[i5] & 8;
 i5 = HEAP32[i2 + 36 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 + 36 | 0;
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
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 i3 = i2 + 44 | 0;
 i5 = i1 + 44 | 0;
 i6 = i5;
 i4 = HEAP32[i6 >> 2] & -8 | HEAP32[i3 >> 2] & 7;
 HEAP32[i6 >> 2] = i4;
 HEAP8[i5] = i4 & 255 & -9 | HEAP8[i3] & 8;
 HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 48 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i2 + 52 >> 2];
 i3 = i2 + 56 | 0;
 i2 = i1 + 56 | 0;
 i4 = HEAP8[i2] & -2 | HEAP8[i3] & 1;
 HEAP8[i2] = i4;
 HEAP8[i2] = i4 & -3 | HEAP8[i3] & 2;
 return i1 | 0;
}
function __ZN7WebCore22DeleteSelectionCommand15fixupWhitespaceEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[i1 + 8 >> 2] | 0);
 i5 = i1 + 284 | 0;
 i6 = i5 | 0;
 do {
  if ((HEAP32[i6 >> 2] | 0) != 0) {
   if (__ZNK7WebCore8Position19isRenderedCharacterEv(i5) | 0) {
    break;
   }
   i7 = HEAP32[i6 >> 2] | 0;
   if ((HEAP32[i7 + 12 >> 2] & 1 | 0) == 0) {
    break;
   }
   i8 = i1 | 0;
   i9 = i3 | 0;
   HEAP32[i9 >> 2] = i7;
   if ((i7 | 0) != 0) {
    i10 = i7 + 8 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   }
   i10 = i1 + 292 | 0;
   do {
    if ((HEAP8[i10] & 8) == 0) {
     i7 = HEAP32[i10 >> 2] & 7;
     if (!((i7 | 0) == 2 | (i7 | 0) == 4)) {
      i11 = 8;
      break;
     }
     i12 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i5) | 0;
    } else {
     i11 = 8;
    }
   } while (0);
   if ((i11 | 0) == 8) {
    i12 = HEAP32[i1 + 288 >> 2] | 0;
   }
   __ZN7WebCore20CompositeEditCommand34replaceTextInNodePreservingMarkersEN3WTF10PassRefPtrINS_4TextEEEjjRKNS1_6StringE(i8, i3, i12, 1, __ZN7WebCore22nonBreakingSpaceStringEv() | 0);
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i7 = i10 + 8 | 0;
   i10 = i7 | 0;
   i13 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 i12 = i1 + 296 | 0;
 i3 = i12 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if (__ZNK7WebCore8Position19isRenderedCharacterEv(i12) | 0) {
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i3 >> 2] | 0;
 if ((HEAP32[i5 + 12 >> 2] & 1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i1 | 0;
 i6 = i4 | 0;
 HEAP32[i6 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i7 = i5 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = i1 + 304 | 0;
 do {
  if ((HEAP8[i7] & 8) == 0) {
   i5 = HEAP32[i7 >> 2] & 7;
   if (!((i5 | 0) == 2 | (i5 | 0) == 4)) {
    i11 = 21;
    break;
   }
   i14 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i12) | 0;
  } else {
   i11 = 21;
  }
 } while (0);
 if ((i11 | 0) == 21) {
  i14 = HEAP32[i1 + 300 >> 2] | 0;
 }
 __ZN7WebCore20CompositeEditCommand34replaceTextInNodePreservingMarkersEN3WTF10PassRefPtrINS_4TextEEEjjRKNS1_6StringE(i3, i4, i14, 1, __ZN7WebCore22nonBreakingSpaceStringEv() | 0);
 i14 = HEAP32[i6 >> 2] | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i14 + 8 | 0;
 i14 = i6 | 0;
 i4 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
 HEAP32[i14 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
 STACKTOP = i2;
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
function __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i4 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) == 0) {
  i8 = i4 + 8 | 0;
  i9 = 0;
  i10 = i8;
  i11 = i8;
 } else {
  i8 = i7 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  i8 = i4 + 8 | 0;
  i7 = i8;
  i9 = HEAP32[i7 >> 2] & -8;
  i10 = i8;
  i11 = i7;
 }
 i7 = i4 + 4 | 0;
 HEAP32[i7 >> 2] = HEAP32[i1 + 4 >> 2];
 i8 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i9 | i8 & 7;
 HEAP32[i11 >> 2] = i1;
 HEAP8[i10] = i1 & 255 & -9 | i8 & 8;
 i8 = i5 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i8 >> 2] = i1;
 if ((i1 | 0) == 0) {
  i12 = 0;
 } else {
  i9 = i1 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i12 = HEAP32[i8 >> 2] | 0;
 }
 i9 = i5 + 4 | 0;
 HEAP32[i9 >> 2] = HEAP32[i2 + 4 >> 2];
 i1 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i5 + 8 | 0;
 i13 = i2;
 i14 = HEAP32[i13 >> 2] & -8 | i1 & 7;
 HEAP32[i13 >> 2] = i14;
 i15 = i14 & 255 & -9 | i1 & 8;
 HEAP8[i2] = i15;
 if ((HEAP32[i6 >> 2] | 0) == (i12 | 0)) {
  do {
   if ((HEAP8[i10] & 8) == 0) {
    i1 = HEAP32[i11 >> 2] & 7;
    if (!((i1 | 0) == 2 | (i1 | 0) == 4)) {
     i16 = 9;
     break;
    }
    i1 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i4) | 0;
    i17 = i1;
    i18 = HEAP8[i2] | 0;
   } else {
    i16 = 9;
   }
  } while (0);
  if ((i16 | 0) == 9) {
   i17 = HEAP32[i7 >> 2] | 0;
   i18 = i15;
  }
  do {
   if ((i18 & 8) == 0) {
    i15 = HEAP32[i13 >> 2] & 7;
    if (!((i15 | 0) == 2 | (i15 | 0) == 4)) {
     i16 = 13;
     break;
    }
    i19 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i5) | 0;
   } else {
    i16 = 13;
   }
  } while (0);
  if ((i16 | 0) == 13) {
   i19 = HEAP32[i9 >> 2] | 0;
  }
  if ((i17 | 0) == (i19 | 0)) {
   i20 = ((HEAP32[i13 >> 2] ^ HEAP32[i11 >> 2]) & 7 | 0) == 0;
  } else {
   i20 = 0;
  }
  i21 = i20;
  i22 = HEAP32[i8 >> 2] | 0;
 } else {
  i21 = 0;
  i22 = i12;
 }
 do {
  if ((i22 | 0) != 0) {
   i12 = i22 + 8 | 0;
   i8 = i12 | 0;
   i20 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i20;
   if ((i20 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 i22 = HEAP32[i6 >> 2] | 0;
 if ((i22 | 0) == 0) {
  STACKTOP = i3;
  return i21 | 0;
 }
 i6 = i22 + 8 | 0;
 i22 = i6 | 0;
 i12 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
 HEAP32[i22 >> 2] = i12;
 if ((i12 | 0) >= 1) {
  STACKTOP = i3;
  return i21 | 0;
 }
 if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return i21 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
 STACKTOP = i3;
 return i21 | 0;
}
function __ZN7WebCore22DeleteSelectionCommand18deleteTextFromNodeEN3WTF10PassRefPtrINS_4TextEEEjj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i2 = i1 + 272 | 0;
 do {
  if ((HEAP32[i1 + 280 >> 2] & 7 | 0) == 0) {
   i8 = HEAP32[i7 >> 2] | 0;
   if ((__ZNK7WebCore8Position13containerNodeEv(i2) | 0) != (i8 | 0)) {
    break;
   }
   i8 = HEAP32[i1 + 276 >> 2] | 0;
   if ((i8 | 0) > (i4 + i3 | 0)) {
    __ZN7WebCore8Position12moveToOffsetEi(i2, i8 - i4 | 0);
    break;
   }
   if ((i8 | 0) <= (i3 | 0)) {
    break;
   }
   __ZN7WebCore8Position12moveToOffsetEi(i2, i3);
  }
 } while (0);
 i2 = i1 + 284 | 0;
 do {
  if ((HEAP32[i1 + 292 >> 2] & 7 | 0) == 0) {
   i8 = HEAP32[i7 >> 2] | 0;
   if ((__ZNK7WebCore8Position13containerNodeEv(i2) | 0) != (i8 | 0)) {
    break;
   }
   i8 = HEAP32[i1 + 288 >> 2] | 0;
   if ((i8 | 0) > (i4 + i3 | 0)) {
    __ZN7WebCore8Position12moveToOffsetEi(i2, i8 - i4 | 0);
    break;
   }
   if ((i8 | 0) <= (i3 | 0)) {
    break;
   }
   __ZN7WebCore8Position12moveToOffsetEi(i2, i3);
  }
 } while (0);
 i2 = i1 + 296 | 0;
 do {
  if ((HEAP32[i1 + 304 >> 2] & 7 | 0) == 0) {
   i8 = HEAP32[i7 >> 2] | 0;
   if ((__ZNK7WebCore8Position13containerNodeEv(i2) | 0) != (i8 | 0)) {
    break;
   }
   i8 = HEAP32[i1 + 300 >> 2] | 0;
   if ((i8 | 0) > (i4 + i3 | 0)) {
    __ZN7WebCore8Position12moveToOffsetEi(i2, i8 - i4 | 0);
    break;
   }
   if ((i8 | 0) <= (i3 | 0)) {
    break;
   }
   __ZN7WebCore8Position12moveToOffsetEi(i2, i3);
  }
 } while (0);
 i2 = i1 + 260 | 0;
 do {
  if ((HEAP32[i1 + 268 >> 2] & 7 | 0) == 0) {
   i8 = HEAP32[i7 >> 2] | 0;
   if ((__ZNK7WebCore8Position13containerNodeEv(i2) | 0) != (i8 | 0)) {
    break;
   }
   i8 = HEAP32[i1 + 264 >> 2] | 0;
   if ((i8 | 0) > (i4 + i3 | 0)) {
    __ZN7WebCore8Position12moveToOffsetEi(i2, i8 - i4 | 0);
    break;
   }
   if ((i8 | 0) <= (i3 | 0)) {
    break;
   }
   __ZN7WebCore8Position12moveToOffsetEi(i2, i3);
  }
 } while (0);
 i2 = i6 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i2 >> 2] = i8;
 __ZN7WebCore20CompositeEditCommand18deleteTextFromNodeEN3WTF10PassRefPtrINS_4TextEEEjj(i1 | 0, i6, i3, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i2 = i4 + 8 | 0;
 i4 = i2 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore22DeleteSelectionCommandC2ERKNS_16VisibleSelectionEbbbbb(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i8 = i1 | 0;
 i9 = HEAP32[i2 + 24 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   __ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE(i8, HEAP32[(abort(20) | 0) + 8 >> 2] | 0);
  } else {
   i10 = i9 + 8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   __ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE(i8, HEAP32[(HEAP32[i9 + 20 >> 2] | 0) + 8 >> 2] | 0);
   i10 = i9 + 8 | 0;
   i11 = i10 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP8[i1 + 152 | 0] = 1;
 HEAP8[i1 + 153 | 0] = i3 & 1;
 HEAP8[i1 + 154 | 0] = i4 & 1;
 HEAP8[i1 + 155 | 0] = 0;
 HEAP8[i1 + 156 | 0] = i5 & 1;
 HEAP8[i1 + 157 | 0] = i6 & 1;
 HEAP8[i1 + 158 | 0] = 0;
 HEAP8[i1 + 159 | 0] = 0;
 HEAP8[i1 + 160 | 0] = i7 & 1;
 __ZN7WebCore16VisibleSelectionC2ERKS0_(i1 + 164 | 0, i2);
 HEAP32[i1 + 224 >> 2] = 0;
 HEAP32[i1 + 228 >> 2] = 0;
 i2 = i1 + 232 | 0;
 i7 = i2;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i6 & -8;
 HEAP8[i2] = i6 & 255 & -16;
 HEAP32[i1 + 236 >> 2] = 0;
 HEAP32[i1 + 240 >> 2] = 0;
 i6 = i1 + 244 | 0;
 i2 = i6;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i7 & -8;
 HEAP8[i6] = i7 & 255 & -16;
 HEAP32[i1 + 248 >> 2] = 0;
 HEAP32[i1 + 252 >> 2] = 0;
 i7 = i1 + 256 | 0;
 i6 = i7;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i2 & -8;
 HEAP8[i7] = i2 & 255 & -16;
 HEAP32[i1 + 260 >> 2] = 0;
 HEAP32[i1 + 264 >> 2] = 0;
 i2 = i1 + 268 | 0;
 i7 = i2;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i6 & -8;
 HEAP8[i2] = i6 & 255 & -16;
 HEAP32[i1 + 272 >> 2] = 0;
 HEAP32[i1 + 276 >> 2] = 0;
 i6 = i1 + 280 | 0;
 i2 = i6;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i7 & -8;
 HEAP8[i6] = i7 & 255 & -16;
 HEAP32[i1 + 284 >> 2] = 0;
 HEAP32[i1 + 288 >> 2] = 0;
 i7 = i1 + 292 | 0;
 i6 = i7;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i2 & -8;
 HEAP8[i7] = i2 & 255 & -16;
 HEAP32[i1 + 296 >> 2] = 0;
 HEAP32[i1 + 300 >> 2] = 0;
 i2 = i1 + 304 | 0;
 i7 = i2;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i6 & -8;
 HEAP8[i2] = i6 & 255 & -16;
 _memset(i1 + 308 | 0, 0, 36) | 0;
 return;
}
function __ZN7WebCore22DeleteSelectionCommandC1ERKNS_16VisibleSelectionEbbbbb(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i8 = i1 | 0;
 i9 = HEAP32[i2 + 24 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   __ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE(i8, HEAP32[(abort(20) | 0) + 8 >> 2] | 0);
  } else {
   i10 = i9 + 8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   __ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE(i8, HEAP32[(HEAP32[i9 + 20 >> 2] | 0) + 8 >> 2] | 0);
   i10 = i9 + 8 | 0;
   i11 = i10 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP8[i1 + 152 | 0] = 1;
 HEAP8[i1 + 153 | 0] = i3 & 1;
 HEAP8[i1 + 154 | 0] = i4 & 1;
 HEAP8[i1 + 155 | 0] = 0;
 HEAP8[i1 + 156 | 0] = i5 & 1;
 HEAP8[i1 + 157 | 0] = i6 & 1;
 HEAP8[i1 + 158 | 0] = 0;
 HEAP8[i1 + 159 | 0] = 0;
 HEAP8[i1 + 160 | 0] = i7 & 1;
 __ZN7WebCore16VisibleSelectionC2ERKS0_(i1 + 164 | 0, i2);
 HEAP32[i1 + 224 >> 2] = 0;
 HEAP32[i1 + 228 >> 2] = 0;
 i2 = i1 + 232 | 0;
 i7 = i2;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i6 & -8;
 HEAP8[i2] = i6 & 255 & -16;
 HEAP32[i1 + 236 >> 2] = 0;
 HEAP32[i1 + 240 >> 2] = 0;
 i6 = i1 + 244 | 0;
 i2 = i6;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i7 & -8;
 HEAP8[i6] = i7 & 255 & -16;
 HEAP32[i1 + 248 >> 2] = 0;
 HEAP32[i1 + 252 >> 2] = 0;
 i7 = i1 + 256 | 0;
 i6 = i7;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i2 & -8;
 HEAP8[i7] = i2 & 255 & -16;
 HEAP32[i1 + 260 >> 2] = 0;
 HEAP32[i1 + 264 >> 2] = 0;
 i2 = i1 + 268 | 0;
 i7 = i2;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i6 & -8;
 HEAP8[i2] = i6 & 255 & -16;
 HEAP32[i1 + 272 >> 2] = 0;
 HEAP32[i1 + 276 >> 2] = 0;
 i6 = i1 + 280 | 0;
 i2 = i6;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i7 & -8;
 HEAP8[i6] = i7 & 255 & -16;
 HEAP32[i1 + 284 >> 2] = 0;
 HEAP32[i1 + 288 >> 2] = 0;
 i7 = i1 + 292 | 0;
 i6 = i7;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i2 & -8;
 HEAP8[i7] = i2 & 255 & -16;
 HEAP32[i1 + 296 >> 2] = 0;
 HEAP32[i1 + 300 >> 2] = 0;
 i2 = i1 + 304 | 0;
 i7 = i2;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i6 & -8;
 HEAP8[i2] = i6 & 255 & -16;
 _memset(i1 + 308 | 0, 0, 36) | 0;
 return;
}
function __ZN7WebCore22DeleteSelectionCommand31calculateTypingStyleAfterDeleteEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 316 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 i3 = i1 + 320 | 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) == 0) {
   HEAP32[i3 >> 2] = 0;
   i4 = i1 + 272 | 0;
  } else {
   i5 = i1 + 272 | 0;
   do {
    if ((__ZN7WebCore19enclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleE(i5, F_BASE_ii + 4 | 0, 0) | 0) == 0) {
     i6 = HEAP32[i3 >> 2] | 0;
     if ((i6 | 0) != 0) {
      i7 = i6 | 0;
      HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
     }
     i7 = HEAP32[i2 >> 2] | 0;
     HEAP32[i2 >> 2] = i6;
     if ((i7 | 0) == 0) {
      break;
     }
     i6 = i7 | 0;
     i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) == 0) {
      __ZN7WebCore12EditingStyleD1Ev(i7);
      __ZN3WTF8fastFreeEPv(i7);
      break;
     } else {
      HEAP32[i6 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i8 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = 0;
   if ((i8 | 0) == 0) {
    i4 = i5;
    break;
   }
   i6 = i8 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) == 0) {
    __ZN7WebCore12EditingStyleD1Ev(i8);
    __ZN3WTF8fastFreeEPv(i8);
    i4 = i5;
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    i4 = i5;
    break;
   }
  }
 } while (0);
 __ZN7WebCore12EditingStyle16prepareToApplyAtERKNS_8PositionENS0_30ShouldPreserveWritingDirectionE(HEAP32[i2 >> 2] | 0, i4, 1);
 do {
  if (__ZNK7WebCore12EditingStyle7isEmptyEv(HEAP32[i2 >> 2] | 0) | 0) {
   i4 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i3 = i4 | 0;
   i7 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) == 0) {
    __ZN7WebCore12EditingStyleD1Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[(__ZN7WebCore11EditCommand5frameEv(i1 | 0) | 0) + 468 >> 2] | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i2 = i1 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 i2 = i7 + 116 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i1;
 if ((i7 | 0) == 0) {
  return;
 }
 i1 = i7 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore12EditingStyleD1Ev(i7);
  __ZN3WTF8fastFreeEPv(i7);
  return;
 } else {
  HEAP32[i1 >> 2] = i2;
  return;
 }
}
function __ZN7WebCore22DeleteSelectionCommandC2ERNS_8DocumentEbbbbb(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 __ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP8[i1 + 152 | 0] = 0;
 HEAP8[i1 + 153 | 0] = i3 & 1;
 HEAP8[i1 + 154 | 0] = i4 & 1;
 HEAP8[i1 + 155 | 0] = 0;
 HEAP8[i1 + 156 | 0] = i5 & 1;
 HEAP8[i1 + 157 | 0] = i6 & 1;
 HEAP8[i1 + 158 | 0] = 0;
 HEAP8[i1 + 159 | 0] = 0;
 HEAP8[i1 + 160 | 0] = i7 & 1;
 __ZN7WebCore16VisibleSelectionC1Ev(i1 + 164 | 0);
 HEAP32[i1 + 224 >> 2] = 0;
 HEAP32[i1 + 228 >> 2] = 0;
 i7 = i1 + 232 | 0;
 i6 = i7;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i5 & -8;
 HEAP8[i7] = i5 & 255 & -16;
 HEAP32[i1 + 236 >> 2] = 0;
 HEAP32[i1 + 240 >> 2] = 0;
 i5 = i1 + 244 | 0;
 i7 = i5;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i6 & -8;
 HEAP8[i5] = i6 & 255 & -16;
 HEAP32[i1 + 248 >> 2] = 0;
 HEAP32[i1 + 252 >> 2] = 0;
 i6 = i1 + 256 | 0;
 i5 = i6;
 i7 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i7 & -8;
 HEAP8[i6] = i7 & 255 & -16;
 HEAP32[i1 + 260 >> 2] = 0;
 HEAP32[i1 + 264 >> 2] = 0;
 i7 = i1 + 268 | 0;
 i6 = i7;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i5 & -8;
 HEAP8[i7] = i5 & 255 & -16;
 HEAP32[i1 + 272 >> 2] = 0;
 HEAP32[i1 + 276 >> 2] = 0;
 i5 = i1 + 280 | 0;
 i7 = i5;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i6 & -8;
 HEAP8[i5] = i6 & 255 & -16;
 HEAP32[i1 + 284 >> 2] = 0;
 HEAP32[i1 + 288 >> 2] = 0;
 i6 = i1 + 292 | 0;
 i5 = i6;
 i7 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i7 & -8;
 HEAP8[i6] = i7 & 255 & -16;
 HEAP32[i1 + 296 >> 2] = 0;
 HEAP32[i1 + 300 >> 2] = 0;
 i7 = i1 + 304 | 0;
 i6 = i7;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i5 & -8;
 HEAP8[i7] = i5 & 255 & -16;
 _memset(i1 + 308 | 0, 0, 36) | 0;
 return;
}
function __ZN7WebCore22DeleteSelectionCommandC1ERNS_8DocumentEbbbbb(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 __ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP8[i1 + 152 | 0] = 0;
 HEAP8[i1 + 153 | 0] = i3 & 1;
 HEAP8[i1 + 154 | 0] = i4 & 1;
 HEAP8[i1 + 155 | 0] = 0;
 HEAP8[i1 + 156 | 0] = i5 & 1;
 HEAP8[i1 + 157 | 0] = i6 & 1;
 HEAP8[i1 + 158 | 0] = 0;
 HEAP8[i1 + 159 | 0] = 0;
 HEAP8[i1 + 160 | 0] = i7 & 1;
 __ZN7WebCore16VisibleSelectionC1Ev(i1 + 164 | 0);
 HEAP32[i1 + 224 >> 2] = 0;
 HEAP32[i1 + 228 >> 2] = 0;
 i7 = i1 + 232 | 0;
 i6 = i7;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i5 & -8;
 HEAP8[i7] = i5 & 255 & -16;
 HEAP32[i1 + 236 >> 2] = 0;
 HEAP32[i1 + 240 >> 2] = 0;
 i5 = i1 + 244 | 0;
 i7 = i5;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i6 & -8;
 HEAP8[i5] = i6 & 255 & -16;
 HEAP32[i1 + 248 >> 2] = 0;
 HEAP32[i1 + 252 >> 2] = 0;
 i6 = i1 + 256 | 0;
 i5 = i6;
 i7 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i7 & -8;
 HEAP8[i6] = i7 & 255 & -16;
 HEAP32[i1 + 260 >> 2] = 0;
 HEAP32[i1 + 264 >> 2] = 0;
 i7 = i1 + 268 | 0;
 i6 = i7;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i5 & -8;
 HEAP8[i7] = i5 & 255 & -16;
 HEAP32[i1 + 272 >> 2] = 0;
 HEAP32[i1 + 276 >> 2] = 0;
 i5 = i1 + 280 | 0;
 i7 = i5;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i6 & -8;
 HEAP8[i5] = i6 & 255 & -16;
 HEAP32[i1 + 284 >> 2] = 0;
 HEAP32[i1 + 288 >> 2] = 0;
 i6 = i1 + 292 | 0;
 i5 = i6;
 i7 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i7 & -8;
 HEAP8[i6] = i7 & 255 & -16;
 HEAP32[i1 + 296 >> 2] = 0;
 HEAP32[i1 + 300 >> 2] = 0;
 i7 = i1 + 304 | 0;
 i6 = i7;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i5 & -8;
 HEAP8[i7] = i5 & 255 & -16;
 _memset(i1 + 308 | 0, 0, 36) | 0;
 return;
}
function __ZN7WebCore16VisibleSelectionC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i4 = i2 + 8 | 0;
 i3 = i1 + 8 | 0;
 i5 = i3;
 i6 = HEAP32[i5 >> 2] & -8 | HEAP32[i4 >> 2] & 7;
 HEAP32[i5 >> 2] = i6;
 HEAP8[i3] = i6 & 255 & -9 | HEAP8[i4] & 8;
 i4 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i6 = i4 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 i6 = i2 + 20 | 0;
 i4 = i1 + 20 | 0;
 i3 = i4;
 i5 = HEAP32[i3 >> 2] & -8 | HEAP32[i6 >> 2] & 7;
 HEAP32[i3 >> 2] = i5;
 HEAP8[i4] = i5 & 255 & -9 | HEAP8[i6] & 8;
 i6 = HEAP32[i2 + 24 >> 2] | 0;
 HEAP32[i1 + 24 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i5 = i6 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 i5 = i2 + 32 | 0;
 i6 = i1 + 32 | 0;
 i4 = i6;
 i3 = HEAP32[i4 >> 2] & -8 | HEAP32[i5 >> 2] & 7;
 HEAP32[i4 >> 2] = i3;
 HEAP8[i6] = i3 & 255 & -9 | HEAP8[i5] & 8;
 i5 = HEAP32[i2 + 36 >> 2] | 0;
 HEAP32[i1 + 36 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i3 = i5 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 i3 = i2 + 44 | 0;
 i5 = i1 + 44 | 0;
 i6 = i5;
 i4 = HEAP32[i6 >> 2] & -8 | HEAP32[i3 >> 2] & 7;
 HEAP32[i6 >> 2] = i4;
 HEAP8[i5] = i4 & 255 & -9 | HEAP8[i3] & 8;
 HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 48 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i2 + 52 >> 2];
 i3 = i2 + 56 | 0;
 i2 = i1 + 56 | 0;
 i1 = HEAP8[i2] & -2 | HEAP8[i3] & 1;
 HEAP8[i2] = i1;
 HEAP8[i2] = i1 & -3 | HEAP8[i3] & 2;
 return;
}
function __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 + 12 | 0;
 if ((HEAP32[i6 >> 2] & 1 | 0) == 0) {
  i7 = i5 | 0;
  HEAP32[i7 >> 2] = i2;
  i8 = i2 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i1, i5, 4);
  i5 = HEAP32[i7 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i7 = i5 + 8 | 0;
  i5 = i7 | 0;
  i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  HEAP32[i5 >> 2] = i8;
  if ((i8 | 0) >= 1) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  STACKTOP = i3;
  return;
 }
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = i2;
 i8 = i2 + 8 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 164 >> 2] & 31](i2) | 0) {
   i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 168 >> 2] & 31](i2) | 0;
  } else {
   if ((HEAP32[i6 >> 2] & 2 | 0) == 0) {
    i9 = 0;
    break;
   }
   i9 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i2) | 0;
  }
 } while (0);
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i1, i4, i9, 0);
 i9 = HEAP32[i7 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i9 + 8 | 0;
 i9 = i7 | 0;
 i4 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 HEAP32[i9 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore22DeleteSelectionCommand21removeRedundantBlocksEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 272 | 0;
 i5 = __ZNK7WebCore8Position13containerNodeEv(i4) | 0;
 i6 = __ZNK7WebCore4Node19rootEditableElementEv(i5) | 0;
 if ((i5 | 0) == (i6 | 0)) {
  STACKTOP = i2;
  return;
 }
 i7 = i1 | 0;
 i1 = i4 | 0;
 i8 = i3 | 0;
 i9 = i5;
 while (1) {
  if (__ZN7WebCore20CompositeEditCommand16isRemovableBlockEPKNS_4NodeE(i7, i9) | 0) {
   if ((i9 | 0) == (HEAP32[i1 >> 2] | 0)) {
    __ZN7WebCore20CompositeEditCommand46updatePositionForNodeRemovalPreservingChildrenERNS_8PositionEPNS_4NodeE(i7, i4, i9);
   }
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) != 0) {
    i5 = i9 + 8 | 0;
    HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
   }
   __ZN7WebCore20CompositeEditCommand28removeNodePreservingChildrenEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE(i7, i3, 1);
   i5 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i10 = i5 + 8 | 0;
     i11 = i10 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     HEAP32[i11 >> 2] = i12;
     if ((i12 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
    }
   } while (0);
   i13 = HEAP32[i1 >> 2] | 0;
  } else {
   i13 = HEAP32[i9 + 16 >> 2] | 0;
  }
  if ((i13 | 0) == (i6 | 0)) {
   break;
  } else {
   i9 = i13;
  }
 }
 STACKTOP = i2;
 return;
}
function __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 1 | 0) == 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = i2;
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i1, i5, 3);
  i5 = HEAP32[i6 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i6 = i5 + 8 | 0;
  i5 = i6 | 0;
  i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  HEAP32[i5 >> 2] = i7;
  if ((i7 | 0) >= 1) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  STACKTOP = i3;
  return;
 } else {
  i6 = i4 | 0;
  HEAP32[i6 >> 2] = i2;
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i1, i4, 0, 0);
  i4 = HEAP32[i6 >> 2] | 0;
  if ((i4 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i6 = i4 + 8 | 0;
  i4 = i6 | 0;
  i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
  HEAP32[i4 >> 2] = i1;
  if ((i1 | 0) >= 1) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  STACKTOP = i3;
  return;
 }
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
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_viii + 2;
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
function __ZN7WebCoreL10isTableRowEPKNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP32[i1 + 12 >> 2] & 4 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 44 >> 2] | 0;
 i1 = HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0;
 if ((i3 | 0) == (i1 | 0)) {
  i2 = 1;
  return i2 | 0;
 }
 if ((HEAP32[i3 + 12 >> 2] | 0) != (HEAP32[i1 + 12 >> 2] | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP32[i3 + 16 >> 2] | 0) == (HEAP32[i1 + 16 >> 2] | 0);
 return i2 | 0;
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
function dynCall_viiiiiii(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 FUNCTION_TABLE_viiiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0);
}
function vii___ZN7WebCore20CompositeEditCommand38setShouldRetainAutocorrectionIndicatorEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore20CompositeEditCommand38setShouldRetainAutocorrectionIndicatorEb(i1 | 0, i2 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function ii___ZNK7WebCore20CompositeEditCommand35shouldRetainAutocorrectionIndicatorEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20CompositeEditCommand35shouldRetainAutocorrectionIndicatorEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore20CompositeEditCommand19isCreateLinkCommandEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20CompositeEditCommand19isCreateLinkCommandEv(i1 | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function ii___ZNK7WebCore20CompositeEditCommand15isTypingCommandEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20CompositeEditCommand15isTypingCommandEv(i1 | 0) | 0;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore22DeleteSelectionCommandD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22DeleteSelectionCommandD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function b1(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(1);
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
}
function ii___ZN7WebCore16isMailBlockquoteEPKNS_4NodeE__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore16isMailBlockquoteEPKNS_4NodeE(i1 | 0) | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function ii___ZN7WebCore11isTableCellEPKNS_4NodeE__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11isTableCellEPKNS_4NodeE(i1 | 0) | 0;
}
function __ZNK7WebCore22DeleteSelectionCommand20preservesTypingStyleEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 316 >> 2] | 0) != 0 | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function ii___ZN7WebCore7isBlockEPKNS_4NodeE__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7isBlockEPKNS_4NodeE(i1 | 0) | 0;
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
function __ZN7WebCore22DeleteSelectionCommandD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22DeleteSelectionCommandD2Ev(i1);
 return;
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
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function __ZNK7WebCore20CompositeEditCommand23shouldStopCaretBlinkingEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore20CompositeEditCommand18isDictationCommandEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b8(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(8);
}
function __ZNK7WebCore22DeleteSelectionCommand13editingActionEv(i1) {
 i1 = i1 | 0;
 return 26;
}
function __ZNK7WebCore11EditCommand24isEditCommandCompositionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
 return 0;
}
function __ZNK7WebCore11EditCommand19isSimpleEditCommandEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
}
function b7(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(7);
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
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
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
  var FUNCTION_TABLE_ii = [b0,b0,ii___ZN7WebCore7isBlockEPKNS_4NodeE__wrapper,b0,ii___ZN7WebCore16isMailBlockquoteEPKNS_4NodeE__wrapper,b0,__ZN7WebCoreL10isTableRowEPKNS_4NodeE,b0,ii___ZNK7WebCore20CompositeEditCommand35shouldRetainAutocorrectionIndicatorEv__wrapper,b0,__ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv,b0,__ZNK7WebCore20CompositeEditCommand18isDictationCommandEv,b0,ii___ZNK7WebCore20CompositeEditCommand15isTypingCommandEv__wrapper,b0,__ZNK7WebCore22DeleteSelectionCommand13editingActionEv,b0,ii___ZNK7WebCore20CompositeEditCommand19isCreateLinkCommandEv__wrapper,b0,__ZNK7WebCore22DeleteSelectionCommand20preservesTypingStyleEv,b0,ii___ZN7WebCore11isTableCellEPKNS_4NodeE__wrapper,b0,__ZNK7WebCore11EditCommand24isEditCommandCompositionEv,b0,__ZNK7WebCore11EditCommand19isSimpleEditCommandEv,b0,__ZNK7WebCore20CompositeEditCommand23shouldStopCaretBlinkingEv
  ,b0,b0,b0];
  var FUNCTION_TABLE_viiiiiii = [b1,b1,__ZN7WebCore22DeleteSelectionCommandC2ERNS_8DocumentEbbbbb,b1,__ZN7WebCore22DeleteSelectionCommandC2ERKNS_16VisibleSelectionEbbbbb,b1,b1,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore22DeleteSelectionCommandD1Ev,b2,__ZN7WebCore22DeleteSelectionCommandD0Ev,b2,__ZN7WebCore22DeleteSelectionCommand7doApplyEv,b2];
  var FUNCTION_TABLE_vii = [b3,b3,vii___ZN7WebCore20CompositeEditCommand38setShouldRetainAutocorrectionIndicatorEb__wrapper,b3];
  var FUNCTION_TABLE_iiii = [b4,b4];
  var FUNCTION_TABLE_viii = [b5,b5,__ZN7WebCore22DeleteSelectionCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE,b5];
  var FUNCTION_TABLE_v = [b6,b6];
  var FUNCTION_TABLE_iii = [b7,b7];
  var FUNCTION_TABLE_viiii = [b8,b8,__ZN7WebCore22DeleteSelectionCommand18deleteTextFromNodeEN3WTF10PassRefPtrINS_4TextEEEjj,b8];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_viiiiiii: dynCall_viiiiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_viiiiiii": invoke_viiiiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames5trTagE": __ZN7WebCore9HTMLNames5trTagE, "__ZN7WebCore9HTMLNames5brTagE": __ZN7WebCore9HTMLNames5brTagE, "__ZN7WebCore9HTMLNames5hrTagE": __ZN7WebCore9HTMLNames5hrTagE, "__ZN7WebCore9HTMLNames10scopedAttrE": __ZN7WebCore9HTMLNames10scopedAttrE, "__ZN7WebCore9HTMLNames8tableTagE": __ZN7WebCore9HTMLNames8tableTagE, "__ZN7WebCore9HTMLNames8styleTagE": __ZN7WebCore9HTMLNames8styleTagE, "__ZN7WebCore9HTMLNames7linkTagE": __ZN7WebCore9HTMLNames7linkTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = asm["dynCall_viiiiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore20CompositeEditCommand18isDictationCommandEv","_strlen","__ZN7WebCore22DeleteSelectionCommandD2Ev","__ZN7WebCore22DeleteSelectionCommand31calculateTypingStyleAfterDeleteEv","__ZN7WebCore18lastPositionInNodeEPNS_4NodeE","__ZN7WebCore22DeleteSelectionCommandC2ERNS_8DocumentEbbbbb","_memset","__ZN7WebCore22DeleteSelectionCommandD1Ev","__ZN7WebCore22DeleteSelectionCommand38removePreviouslySelectedEmptyTableRowsEv","__ZN7WebCore22DeleteSelectionCommandD0Ev","__ZN7WebCore22DeleteSelectionCommand20saveTypingStyleStateEv","__ZN7WebCore16VisibleSelectionaSERKS0_","__ZN7WebCoreL15isTableRowEmptyEPNS_4NodeE","__ZN7WebCore22DeleteSelectionCommand53originalStringForAutocorrectionAtBeginningOfSelectionEv","__ZN7WebCore22DeleteSelectionCommand21removeRedundantBlocksEv","__ZN7WebCore22DeleteSelectionCommand25handleSpecialCaseBRDeleteEv","__ZN7WebCore22DeleteSelectionCommand33setStartingSelectionOnSmartDeleteERKNS_8PositionES3_","__ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv","__ZN7WebCore22DeleteSelectionCommand18deleteTextFromNodeEN3WTF10PassRefPtrINS_4TextEEEjj","_memcpy","__ZN7WebCore16VisibleSelectionaSEOS0_","__ZN7WebCore16VisibleSelectionC2ERKS0_","__ZN7WebCore19firstPositionInNodeEPNS_4NodeE","__ZN7WebCoreL10isTableRowEPKNS_4NodeE","__ZN7WebCore22DeleteSelectionCommand18initializeStartEndERNS_8PositionES2_","__ZNK7WebCore22DeleteSelectionCommand13editingActionEv","__ZN7WebCore22DeleteSelectionCommandC2ERKNS_16VisibleSelectionEbbbbb","__ZNK7WebCore22DeleteSelectionCommand20preservesTypingStyleEv","__ZN7WebCore22DeleteSelectionCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE","__ZN7WebCore22DeleteSelectionCommand19clearTransientStateEv","__ZN7WebCoreeqERKNS_15VisiblePositionES2_","__ZN7WebCore16VisibleSelectionD2Ev","__ZN7WebCore22DeleteSelectionCommand15fixupWhitespaceEv","__ZN7WebCore22DeleteSelectionCommand22initializePositionDataEv","__ZN7WebCore22DeleteSelectionCommand65makeStylingElementsDirectChildrenOfEditableRootToPreventStyleLossEv","__ZNK7WebCore11EditCommand24isEditCommandCompositionEv","__ZNK7WebCore11EditCommand19isSimpleEditCommandEv","__ZN7WebCore22DeleteSelectionCommand15mergeParagraphsEv","__ZN7WebCore22DeleteSelectionCommand7doApplyEv","__ZNK7WebCore20CompositeEditCommand23shouldStopCaretBlinkingEv","__ZN7WebCore22DeleteSelectionCommand19handleGeneralDeleteEv"]

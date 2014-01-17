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
  var __ZTVN7WebCore12PolygonShapeE=env.__ZTVN7WebCore12PolygonShapeE|0;
  var __ZTVN7WebCore11RasterShapeE=env.__ZTVN7WebCore11RasterShapeE|0;
  var __ZTVN7WebCore8BoxShapeE=env.__ZTVN7WebCore8BoxShapeE|0;
  var __ZTVN7WebCore14RectangleShapeE=env.__ZTVN7WebCore14RectangleShapeE|0;
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
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var _sqrtf=env._sqrtf;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore5Shape11createShapeEPKNS_10BasicShapeERKNS_10LayoutSizeENS_11WritingModeENS_6LengthES8_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, d19 = +0, d20 = +0, d21 = +0, d22 = +0, d23 = +0, d24 = +0, d25 = +0, d26 = +0, d27 = +0, d28 = +0, d29 = +0, d30 = +0, d31 = +0, d32 = +0, d33 = +0, d34 = +0, d35 = +0, d36 = +0, d37 = +0, d38 = +0, d39 = +0, d40 = +0, d41 = +0, i42 = 0, i43 = 0, i44 = 0, d45 = +0, i46 = 0, d47 = +0, i48 = 0, i49 = 0, d50 = +0, d51 = +0, d52 = +0, d53 = +0, d54 = +0, d55 = +0, d56 = +0, d57 = +0, d58 = +0, d59 = +0, d60 = +0, d61 = +0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, d73 = +0, d74 = +0, d75 = +0, d76 = +0, d77 = +0, d78 = +0, d79 = +0, d80 = +0, d81 = +0, d82 = +0, d83 = +0, d84 = +0, d85 = +0, d86 = +0, d87 = +0, d88 = +0, d89 = +0, d90 = +0, d91 = +0, d92 = +0, d93 = +0, d94 = +0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i9 | 0;
 i11 = i9;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 if ((i4 | 0) == 3 | (i4 | 0) == 0) {
  i17 = i3 + 4 | 0;
  i18 = i3 | 0;
 } else {
  i17 = i3 | 0;
  i18 = i3 + 4 | 0;
 }
 d19 = +(HEAP32[i18 >> 2] | 0);
 d20 = +(HEAP32[i17 >> 2] | 0);
 switch (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 1](i2) | 0) {
 case 0:
  {
   d21 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i2 + 20 | 0, d19, 0);
   d22 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i2 + 12 | 0, d20, 0);
   d23 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i2 + 28 | 0, d19, 0);
   d24 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i2 + 36 | 0, d20, 0);
   d25 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i2 + 44 | 0, d19, 0);
   d26 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i2 + 52 | 0, d20, 0);
   d27 = d23 / (d25 * +2);
   d28 = d24 / (d26 * +2);
   d29 = d28 < d27 ? d28 : d27;
   if (d29 < +1) {
    d30 = d25 * d29;
    d31 = d26 * d29;
   } else {
    d30 = d25;
    d31 = d26;
   }
   if ((i4 | 0) == 1) {
    d32 = d31;
    d33 = d30;
    d34 = +(HEAP32[i3 + 4 >> 2] | 0) - (d21 + d23);
    d35 = d22;
    d36 = d23;
    d37 = d24;
   } else if ((i4 | 0) == 3 | (i4 | 0) == 0) {
    d38 = d21;
    d39 = d22;
    d40 = d24;
    d41 = d23;
    i42 = 10;
   } else {
    d38 = d22;
    d39 = d21;
    d40 = d23;
    d41 = d24;
    i42 = 10;
   }
   do {
    if ((i42 | 0) == 10) {
     if (!((i4 | 0) == 3 | (i4 | 0) == 0)) {
      d32 = d31;
      d33 = d30;
      d34 = d39;
      d35 = d38;
      d36 = d40;
      d37 = d41;
      break;
     }
     d32 = d30;
     d33 = d31;
     d34 = d39;
     d35 = d38;
     d36 = d40;
     d37 = d41;
    }
   } while (0);
   i17 = __Znwj(40) | 0;
   HEAP32[i17 >> 2] = __ZTVN7WebCore14RectangleShapeE + 8;
   i18 = i17 + 16 | 0;
   d41 = +d35;
   d35 = +d34;
   HEAPF32[i18 >> 2] = d41;
   HEAPF32[i18 + 4 >> 2] = d35;
   i18 = i17 + 24 | 0;
   d35 = +d37;
   d37 = +d36;
   HEAPF32[i18 >> 2] = d35;
   HEAPF32[i18 + 4 >> 2] = d37;
   i18 = i17 + 32 | 0;
   d37 = +d32;
   d32 = +d33;
   HEAPF32[i18 >> 2] = d37;
   HEAPF32[i18 + 4 >> 2] = d32;
   i43 = i17;
   i44 = i43 + 4 | 0;
   HEAP32[i44 >> 2] = i4;
   d45 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i5, +0, 0);
   i46 = i43 + 8 | 0;
   HEAPF32[i46 >> 2] = d45;
   d47 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i6, +0, 0);
   i48 = i43 + 12 | 0;
   HEAPF32[i48 >> 2] = d47;
   i49 = i1 | 0;
   HEAP32[i49 >> 2] = i43;
   STACKTOP = i7;
   return;
  }
 case 1:
  {
   d32 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i2 + 12 | 0, d19, 0);
   d37 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i2 + 20 | 0, d20, 0);
   d33 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i2 + 28 | 0, +Math_sqrt((d19 * d19 + d20 * d20) * +.5), 0);
   if ((i4 | 0) == 3 | (i4 | 0) == 0) {
    d50 = d32;
    d51 = d37;
   } else if ((i4 | 0) == 1) {
    d50 = d37;
    d51 = +(HEAP32[i3 + 4 >> 2] | 0) - d32;
   } else {
    d50 = d37;
    d51 = d32;
   }
   i17 = __Znwj(40) | 0;
   d32 = d33 * +2;
   HEAP32[i17 >> 2] = __ZTVN7WebCore14RectangleShapeE + 8;
   HEAPF32[i17 + 16 >> 2] = d50 - d33;
   HEAPF32[i17 + 20 >> 2] = d51 - d33;
   HEAPF32[i17 + 24 >> 2] = d32;
   HEAPF32[i17 + 28 >> 2] = d32;
   i18 = i17 + 32 | 0;
   d32 = +d33;
   HEAPF32[i18 >> 2] = d32;
   HEAPF32[i18 + 4 >> 2] = d32;
   i43 = i17;
   i44 = i43 + 4 | 0;
   HEAP32[i44 >> 2] = i4;
   d45 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i5, +0, 0);
   i46 = i43 + 8 | 0;
   HEAPF32[i46 >> 2] = d45;
   d47 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i6, +0, 0);
   i48 = i43 + 12 | 0;
   HEAPF32[i48 >> 2] = d47;
   i49 = i1 | 0;
   HEAP32[i49 >> 2] = i43;
   STACKTOP = i7;
   return;
  }
 case 5:
  {
   d32 = +__ZN7WebCore29floatValueForCenterCoordinateERKNS_26BasicShapeCenterCoordinateEf(i2 + 12 | 0, d19);
   d33 = +__ZN7WebCore29floatValueForCenterCoordinateERKNS_26BasicShapeCenterCoordinateEf(i2 + 24 | 0, d20);
   d51 = +__ZNK7WebCore16BasicShapeCircle24floatValueForRadiusInBoxEff(i2, d19, d20);
   if ((i4 | 0) == 3 | (i4 | 0) == 0) {
    d52 = d32;
    d53 = d33;
   } else if ((i4 | 0) == 1) {
    d52 = d33;
    d53 = +(HEAP32[i3 + 4 >> 2] | 0) - d32;
   } else {
    d52 = d33;
    d53 = d32;
   }
   i17 = __Znwj(40) | 0;
   d32 = d51 * +2;
   HEAP32[i17 >> 2] = __ZTVN7WebCore14RectangleShapeE + 8;
   HEAPF32[i17 + 16 >> 2] = d52 - d51;
   HEAPF32[i17 + 20 >> 2] = d53 - d51;
   HEAPF32[i17 + 24 >> 2] = d32;
   HEAPF32[i17 + 28 >> 2] = d32;
   i18 = i17 + 32 | 0;
   d32 = +d51;
   HEAPF32[i18 >> 2] = d32;
   HEAPF32[i18 + 4 >> 2] = d32;
   i43 = i17;
   i44 = i43 + 4 | 0;
   HEAP32[i44 >> 2] = i4;
   d45 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i5, +0, 0);
   i46 = i43 + 8 | 0;
   HEAPF32[i46 >> 2] = d45;
   d47 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i6, +0, 0);
   i48 = i43 + 12 | 0;
   HEAPF32[i48 >> 2] = d47;
   i49 = i1 | 0;
   HEAP32[i49 >> 2] = i43;
   STACKTOP = i7;
   return;
  }
 case 2:
  {
   d32 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i2 + 12 | 0, d19, 0);
   d51 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i2 + 20 | 0, d20, 0);
   d53 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i2 + 28 | 0, d19, 0);
   d52 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i2 + 36 | 0, d20, 0);
   if ((i4 | 0) == 3 | (i4 | 0) == 0) {
    d54 = d32;
    d55 = d51;
    i42 = 24;
   } else if ((i4 | 0) == 1) {
    d56 = d52;
    d57 = d53;
    d58 = +(HEAP32[i3 + 4 >> 2] | 0) - d32;
    d59 = d51;
   } else {
    d54 = d51;
    d55 = d32;
    i42 = 24;
   }
   do {
    if ((i42 | 0) == 24) {
     if (!((i4 | 0) == 3 | (i4 | 0) == 0)) {
      d56 = d52;
      d57 = d53;
      d58 = d55;
      d59 = d54;
      break;
     }
     d56 = d53;
     d57 = d52;
     d58 = d55;
     d59 = d54;
    }
   } while (0);
   i17 = __Znwj(40) | 0;
   HEAP32[i17 >> 2] = __ZTVN7WebCore14RectangleShapeE + 8;
   HEAPF32[i17 + 16 >> 2] = d59 - d56;
   HEAPF32[i17 + 20 >> 2] = d58 - d57;
   HEAPF32[i17 + 24 >> 2] = d56 * +2;
   HEAPF32[i17 + 28 >> 2] = d57 * +2;
   i18 = i17 + 32 | 0;
   d58 = +d56;
   d56 = +d57;
   HEAPF32[i18 >> 2] = d58;
   HEAPF32[i18 + 4 >> 2] = d56;
   i43 = i17;
   i44 = i43 + 4 | 0;
   HEAP32[i44 >> 2] = i4;
   d45 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i5, +0, 0);
   i46 = i43 + 8 | 0;
   HEAPF32[i46 >> 2] = d45;
   d47 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i6, +0, 0);
   i48 = i43 + 12 | 0;
   HEAPF32[i48 >> 2] = d47;
   i49 = i1 | 0;
   HEAP32[i49 >> 2] = i43;
   STACKTOP = i7;
   return;
  }
 case 6:
  {
   i17 = i2;
   d56 = +__ZN7WebCore29floatValueForCenterCoordinateERKNS_26BasicShapeCenterCoordinateEf(i2 + 12 | 0, d19);
   d58 = +__ZN7WebCore29floatValueForCenterCoordinateERKNS_26BasicShapeCenterCoordinateEf(i2 + 24 | 0, d20);
   d57 = +__ZNK7WebCore17BasicShapeEllipse24floatValueForRadiusInBoxERKNS_16BasicShapeRadiusEff(i17, i2 + 36 | 0, d56, d19);
   d59 = +__ZNK7WebCore17BasicShapeEllipse24floatValueForRadiusInBoxERKNS_16BasicShapeRadiusEff(i17, i2 + 48 | 0, d58, d20);
   if ((i4 | 0) == 3 | (i4 | 0) == 0) {
    d60 = d56;
    d61 = d58;
   } else if ((i4 | 0) == 1) {
    d60 = d58;
    d61 = +(HEAP32[i3 + 4 >> 2] | 0) - d56;
   } else {
    d60 = d58;
    d61 = d56;
   }
   i17 = __Znwj(40) | 0;
   HEAP32[i17 >> 2] = __ZTVN7WebCore14RectangleShapeE + 8;
   HEAPF32[i17 + 16 >> 2] = d60 - d57;
   HEAPF32[i17 + 20 >> 2] = d61 - d59;
   HEAPF32[i17 + 24 >> 2] = d57 * +2;
   HEAPF32[i17 + 28 >> 2] = d59 * +2;
   i18 = i17 + 32 | 0;
   d61 = +d57;
   d57 = +d59;
   HEAPF32[i18 >> 2] = d61;
   HEAPF32[i18 + 4 >> 2] = d57;
   i43 = i17;
   i44 = i43 + 4 | 0;
   HEAP32[i44 >> 2] = i4;
   d45 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i5, +0, 0);
   i46 = i43 + 8 | 0;
   HEAPF32[i46 >> 2] = d45;
   d47 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i6, +0, 0);
   i48 = i43 + 12 | 0;
   HEAPF32[i48 >> 2] = d47;
   i49 = i1 | 0;
   HEAP32[i49 >> 2] = i43;
   STACKTOP = i7;
   return;
  }
 case 3:
  {
   i17 = i2;
   i18 = i2 + 16 | 0;
   i62 = i18 + 8 | 0;
   i63 = HEAP32[i62 >> 2] | 0;
   i64 = __ZN3WTF10fastMallocEj(12) | 0;
   i65 = i64;
   i66 = i63 >>> 1;
   i67 = i64;
   HEAP32[i67 >> 2] = 0;
   i68 = i64 + 4 | 0;
   HEAP32[i68 >> 2] = 0;
   i69 = i64 + 8 | 0;
   HEAP32[i69 >> 2] = i66;
   do {
    if ((i66 | 0) != 0) {
     if (i63 >>> 0 > 1073741823 >>> 0) {
      _WTFCrash();
     }
     i64 = __ZN3WTF18fastMallocGoodSizeEj(i66 << 3) | 0;
     HEAP32[i68 >> 2] = i64 >>> 3;
     i70 = __ZN3WTF10fastMallocEj(i64) | 0;
     i64 = i70;
     HEAP32[i67 >> 2] = i64;
     if ((i70 | 0) == 0) {
      break;
     }
     i70 = HEAP32[i69 >> 2] | 0;
     i71 = i64 + (i70 << 3) | 0;
     if ((i70 | 0) == 0) {
      break;
     } else {
      i72 = i64;
     }
     while (1) {
      HEAPF32[i72 >> 2] = +0;
      HEAPF32[i72 + 4 >> 2] = +0;
      i72 = i72 + 8 | 0;
      if ((i72 | 0) == (i71 | 0)) {
       break;
      }
     }
    }
   } while (0);
   L55 : do {
    if ((i63 | 0) != 0) {
     i72 = i18;
     i68 = i3 + 4 | 0;
     if ((i4 | 0) == 3) {
      i66 = 0;
      while (1) {
       if ((HEAP32[i62 >> 2] | 0) >>> 0 <= i66 >>> 0) {
        i42 = 102;
        break;
       }
       d57 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE((HEAP32[i72 >> 2] | 0) + (i66 << 3) | 0, d19, 0);
       i71 = i66 | 1;
       if ((HEAP32[i62 >> 2] | 0) >>> 0 <= i71 >>> 0) {
        i42 = 105;
        break;
       }
       d61 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE((HEAP32[i72 >> 2] | 0) + (i71 << 3) | 0, d20, 0);
       i71 = i66 >>> 1;
       if ((HEAP32[i69 >> 2] | 0) >>> 0 <= i71 >>> 0) {
        i42 = 108;
        break;
       }
       i64 = (HEAP32[i67 >> 2] | 0) + (i71 << 3) | 0;
       d59 = +d57;
       d57 = +d61;
       HEAPF32[i64 >> 2] = d59;
       HEAPF32[i64 + 4 >> 2] = d57;
       i66 = i66 + 2 | 0;
       if (i66 >>> 0 >= i63 >>> 0) {
        break L55;
       }
      }
      if ((i42 | 0) == 102) {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      } else if ((i42 | 0) == 105) {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      } else if ((i42 | 0) == 108) {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      }
     } else if ((i4 | 0) == 0) {
      i66 = 0;
      while (1) {
       if ((HEAP32[i62 >> 2] | 0) >>> 0 <= i66 >>> 0) {
        i42 = 103;
        break;
       }
       d57 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE((HEAP32[i72 >> 2] | 0) + (i66 << 3) | 0, d19, 0);
       i64 = i66 | 1;
       if ((HEAP32[i62 >> 2] | 0) >>> 0 <= i64 >>> 0) {
        i42 = 106;
        break;
       }
       d59 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE((HEAP32[i72 >> 2] | 0) + (i64 << 3) | 0, d20, 0);
       i64 = i66 >>> 1;
       if ((HEAP32[i69 >> 2] | 0) >>> 0 <= i64 >>> 0) {
        i42 = 109;
        break;
       }
       i71 = (HEAP32[i67 >> 2] | 0) + (i64 << 3) | 0;
       d61 = +d57;
       d57 = +d59;
       HEAPF32[i71 >> 2] = d61;
       HEAPF32[i71 + 4 >> 2] = d57;
       i66 = i66 + 2 | 0;
       if (i66 >>> 0 >= i63 >>> 0) {
        break L55;
       }
      }
      if ((i42 | 0) == 103) {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      } else if ((i42 | 0) == 106) {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      } else if ((i42 | 0) == 109) {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      }
     } else {
      i66 = 0;
      while (1) {
       if ((HEAP32[i62 >> 2] | 0) >>> 0 <= i66 >>> 0) {
        i42 = 104;
        break;
       }
       d57 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE((HEAP32[i72 >> 2] | 0) + (i66 << 3) | 0, d19, 0);
       i71 = i66 | 1;
       if ((HEAP32[i62 >> 2] | 0) >>> 0 <= i71 >>> 0) {
        i42 = 107;
        break;
       }
       d61 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE((HEAP32[i72 >> 2] | 0) + (i71 << 3) | 0, d20, 0);
       i71 = i66 >>> 1;
       if ((HEAP32[i69 >> 2] | 0) >>> 0 <= i71 >>> 0) {
        i42 = 110;
        break;
       }
       i64 = (HEAP32[i67 >> 2] | 0) + (i71 << 3) | 0;
       if ((i4 | 0) == 3 | (i4 | 0) == 0) {
        d73 = d57;
        d74 = d61;
       } else if ((i4 | 0) == 1) {
        d73 = d61;
        d74 = +(HEAP32[i68 >> 2] | 0) - d57;
       } else {
        d73 = d61;
        d74 = d57;
       }
       i71 = i64;
       d57 = +d73;
       d61 = +d74;
       HEAPF32[i71 >> 2] = d57;
       HEAPF32[i71 + 4 >> 2] = d61;
       i66 = i66 + 2 | 0;
       if (i66 >>> 0 >= i63 >>> 0) {
        break L55;
       }
      }
      if ((i42 | 0) == 104) {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      } else if ((i42 | 0) == 107) {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      } else if ((i42 | 0) == 110) {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      }
     }
    }
   } while (0);
   i63 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 1](i17) | 0;
   i17 = __Znwj(80) | 0;
   HEAP32[i17 >> 2] = __ZTVN7WebCore12PolygonShapeE + 8;
   i67 = i8 | 0;
   HEAP32[i67 >> 2] = i65;
   __ZN7WebCore12FloatPolygonC1EN3WTF10PassOwnPtrINS1_6VectorINS_10FloatPointELj0ENS1_15CrashOnOverflowEEEEENS_8WindRuleE(i17 + 16 | 0, i8, i63);
   i63 = HEAP32[i67 >> 2] | 0;
   if ((i63 | 0) != 0) {
    i67 = i63 + 8 | 0;
    if ((HEAP32[i67 >> 2] | 0) != 0) {
     HEAP32[i67 >> 2] = 0;
    }
    i67 = i63 | 0;
    i8 = HEAP32[i67 >> 2] | 0;
    if ((i8 | 0) != 0) {
     HEAP32[i67 >> 2] = 0;
     HEAP32[i63 + 4 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i8);
    }
    __ZN3WTF8fastFreeEPv(i63);
   }
   HEAP32[i17 + 72 >> 2] = 0;
   HEAP32[i17 + 76 >> 2] = 0;
   i43 = i17;
   i44 = i43 + 4 | 0;
   HEAP32[i44 >> 2] = i4;
   d45 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i5, +0, 0);
   i46 = i43 + 8 | 0;
   HEAPF32[i46 >> 2] = d45;
   d47 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i6, +0, 0);
   i48 = i43 + 12 | 0;
   HEAPF32[i48 >> 2] = d47;
   i49 = i1 | 0;
   HEAP32[i49 >> 2] = i43;
   STACKTOP = i7;
   return;
  }
 case 4:
  {
   d74 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i2 + 36 | 0, d19, 0);
   d73 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i2 + 20 | 0, d20, 0);
   d61 = d19 - d74 - +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i2 + 12 | 0, d19, 0);
   d57 = d20 - d73 - +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i2 + 28 | 0, d20, 0);
   d59 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i2 + 44 | 0, d19, 0);
   d60 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i2 + 52 | 0, d20, 0);
   d56 = d61 / (d59 * +2);
   d58 = d57 / (d60 * +2);
   d54 = d58 < d56 ? d58 : d56;
   if (d54 < +1) {
    d75 = d59 * d54;
    d76 = d60 * d54;
   } else {
    d75 = d59;
    d76 = d60;
   }
   if ((i4 | 0) == 1) {
    d77 = d76;
    d78 = d75;
    d79 = +(HEAP32[i3 + 4 >> 2] | 0) - (d74 + d61);
    d80 = d73;
    d81 = d61;
    d82 = d57;
   } else if ((i4 | 0) == 3 | (i4 | 0) == 0) {
    d83 = d74;
    d84 = d73;
    d85 = d57;
    d86 = d61;
    i42 = 69;
   } else {
    d83 = d73;
    d84 = d74;
    d85 = d61;
    d86 = d57;
    i42 = 69;
   }
   do {
    if ((i42 | 0) == 69) {
     if (!((i4 | 0) == 3 | (i4 | 0) == 0)) {
      d77 = d76;
      d78 = d75;
      d79 = d84;
      d80 = d83;
      d81 = d85;
      d82 = d86;
      break;
     }
     d77 = d75;
     d78 = d76;
     d79 = d84;
     d80 = d83;
     d81 = d85;
     d82 = d86;
    }
   } while (0);
   i42 = __Znwj(40) | 0;
   HEAP32[i42 >> 2] = __ZTVN7WebCore14RectangleShapeE + 8;
   i17 = i42 + 16 | 0;
   d86 = +d80;
   d80 = +d79;
   HEAPF32[i17 >> 2] = d86;
   HEAPF32[i17 + 4 >> 2] = d80;
   i17 = i42 + 24 | 0;
   d80 = +d82;
   d82 = +d81;
   HEAPF32[i17 >> 2] = d80;
   HEAPF32[i17 + 4 >> 2] = d82;
   i17 = i42 + 32 | 0;
   d82 = +d77;
   d77 = +d78;
   HEAPF32[i17 >> 2] = d82;
   HEAPF32[i17 + 4 >> 2] = d77;
   i43 = i42;
   i44 = i43 + 4 | 0;
   HEAP32[i44 >> 2] = i4;
   d45 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i5, +0, 0);
   i46 = i43 + 8 | 0;
   HEAPF32[i46 >> 2] = d45;
   d47 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i6, +0, 0);
   i48 = i43 + 12 | 0;
   HEAPF32[i48 >> 2] = d47;
   i49 = i1 | 0;
   HEAP32[i49 >> 2] = i43;
   STACKTOP = i7;
   return;
  }
 case 7:
  {
   d77 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i2 + 36 | 0, d19, 0);
   d82 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i2 + 20 | 0, d20, 0);
   d78 = d19 - d77 - +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i2 + 12 | 0, d19, 0);
   d19 = d20 - d82 - +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i2 + 28 | 0, d20, 0);
   if ((i4 | 0) == 3 | (i4 | 0) == 0) {
    HEAPF32[i9 >> 2] = d77;
    HEAPF32[i11 + 4 >> 2] = d82;
    HEAPF32[i9 + 8 >> 2] = d78;
    HEAPF32[i11 + 12 >> 2] = d19;
   } else if ((i4 | 0) == 1) {
    d20 = +(HEAP32[i3 + 4 >> 2] | 0) - (d77 + d78);
    HEAPF32[i9 >> 2] = d82;
    HEAPF32[i11 + 4 >> 2] = d20;
    HEAPF32[i9 + 8 >> 2] = d19;
    HEAPF32[i11 + 12 >> 2] = d78;
   } else {
    d20 = +d82;
    d82 = +d77;
    HEAPF32[i10 >> 2] = d20;
    HEAPF32[i10 + 4 >> 2] = d82;
    i10 = i9 + 8 | 0;
    d82 = +d19;
    d19 = +d78;
    HEAPF32[i10 >> 2] = d82;
    HEAPF32[i10 + 4 >> 2] = d19;
   }
   i10 = i2 + 44 | 0;
   i9 = i10;
   if ((HEAP8[i9 + 6 | 0] & 1) == 0) {
    d87 = +(HEAP32[i10 >> 2] | 0);
   } else {
    d87 = +HEAPF32[i10 >> 2];
   }
   i3 = i10 + 8 | 0;
   if ((HEAP8[i9 + 14 | 0] & 1) == 0) {
    d88 = +(HEAP32[i3 >> 2] | 0);
   } else {
    d88 = +HEAPF32[i3 >> 2];
   }
   HEAPF32[i13 >> 2] = d87;
   HEAPF32[i13 + 4 >> 2] = d88;
   i3 = i2 + 60 | 0;
   i9 = i3;
   if ((HEAP8[i9 + 6 | 0] & 1) == 0) {
    d89 = +(HEAP32[i3 >> 2] | 0);
   } else {
    d89 = +HEAPF32[i3 >> 2];
   }
   i3 = i2 + 68 | 0;
   if ((HEAP8[i9 + 14 | 0] & 1) == 0) {
    d90 = +(HEAP32[i3 >> 2] | 0);
   } else {
    d90 = +HEAPF32[i3 >> 2];
   }
   HEAPF32[i14 >> 2] = d89;
   HEAPF32[i14 + 4 >> 2] = d90;
   i3 = i2 + 92 | 0;
   i9 = i3;
   if ((HEAP8[i9 + 6 | 0] & 1) == 0) {
    d91 = +(HEAP32[i3 >> 2] | 0);
   } else {
    d91 = +HEAPF32[i3 >> 2];
   }
   i10 = i3 + 8 | 0;
   if ((HEAP8[i9 + 14 | 0] & 1) == 0) {
    d92 = +(HEAP32[i10 >> 2] | 0);
   } else {
    d92 = +HEAPF32[i10 >> 2];
   }
   HEAPF32[i15 >> 2] = d91;
   HEAPF32[i15 + 4 >> 2] = d92;
   i10 = i2 + 76 | 0;
   i2 = i10;
   if ((HEAP8[i2 + 6 | 0] & 1) == 0) {
    d93 = +(HEAP32[i10 >> 2] | 0);
   } else {
    d93 = +HEAPF32[i10 >> 2];
   }
   i9 = i10 + 8 | 0;
   if ((HEAP8[i2 + 14 | 0] & 1) == 0) {
    d94 = +(HEAP32[i9 >> 2] | 0);
   } else {
    d94 = +HEAPF32[i9 >> 2];
   }
   HEAPF32[i16 >> 2] = d93;
   HEAPF32[i16 + 4 >> 2] = d94;
   __ZN7WebCore16FloatRoundedRectC1ERKNS_9FloatRectERKNS_9FloatSizeES6_S6_S6_(i12, i11, i13, i14, i15, i16);
   i16 = __Znwj(64) | 0;
   HEAP32[i16 >> 2] = __ZTVN7WebCore8BoxShapeE + 8;
   _memcpy(i16 + 16 | 0, i12 | 0, 48) | 0;
   i43 = i16;
   i44 = i43 + 4 | 0;
   HEAP32[i44 >> 2] = i4;
   d45 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i5, +0, 0);
   i46 = i43 + 8 | 0;
   HEAPF32[i46 >> 2] = d45;
   d47 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i6, +0, 0);
   i48 = i43 + 12 | 0;
   HEAPF32[i48 >> 2] = d47;
   i49 = i1 | 0;
   HEAP32[i49 >> 2] = i43;
   STACKTOP = i7;
   return;
  }
 default:
  {
   i43 = 0;
   i44 = i43 + 4 | 0;
   HEAP32[i44 >> 2] = i4;
   d45 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i5, +0, 0);
   i46 = i43 + 8 | 0;
   HEAPF32[i46 >> 2] = d45;
   d47 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i6, +0, 0);
   i48 = i43 + 12 | 0;
   HEAPF32[i48 >> 2] = d47;
   i49 = i1 | 0;
   HEAP32[i49 >> 2] = i43;
   STACKTOP = i7;
   return;
  }
 }
}
function __ZN7WebCore5Shape17createRasterShapeEPKNS_10StyleImageEfRKNS_10LayoutSizeENS_11WritingModeENS_6LengthES8_(i1, i2, d3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i4 | 0;
 i9 = i4 + 8 | 0;
 i10 = i9;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i15 = i14 | 0;
 i16 = i14;
 i17 = __ZN7WebCore11CachedImage5imageEv(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 72 >> 2] & 1](i2) | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 48 >> 2] & 1](i10, i17);
 i2 = __Znwj(32) | 0;
 i18 = i2;
 i19 = i10 + 4 | 0;
 i20 = HEAP32[i19 >> 2] | 0;
 _memset(i2 | 0, 0, 32) | 0;
 __ZN3WTF6VectorINS0_IN7WebCore13ShapeIntervalIiEELj0ENS_15CrashOnOverflowEEELj0ES4_E6resizeEj(i2 + 16 | 0, i20);
 HEAP8[i8] = 0;
 i20 = __ZN3WTF10fastMallocEj(144) | 0;
 i2 = i20;
 __ZN7WebCore11ImageBufferC1ERKNS_7IntSizeEfNS_10ColorSpaceENS_13RenderingModeERb(i2, i10, +1, 0, 0, i8);
 do {
  if ((HEAP8[i8] & 1) == 0) {
   if ((i20 | 0) == 0) {
    i21 = 0;
    i22 = 1;
    break;
   }
   __ZN7WebCore11ImageBufferD1Ev(i2);
   __ZN3WTF8fastFreeEPv(i20);
   i21 = 0;
   i22 = 1;
  } else {
   if ((i20 | 0) == 0) {
    i21 = 0;
    i22 = 1;
    break;
   }
   i10 = __ZNK7WebCore11ImageBuffer7contextEv(i2) | 0;
   HEAP32[i11 >> 2] = 0;
   HEAP32[i11 + 4 >> 2] = 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i12 + 4 >> 2] = 1;
   __ZN7WebCore15GraphicsContext9drawImageEPNS_5ImageENS_10ColorSpaceERKNS_8IntPointENS_17CompositeOperatorENS_27ImageOrientationDescriptionE(i10, i17, 0, i11, 2, i12);
   HEAP32[i15 >> 2] = 0;
   HEAP32[i15 + 4 >> 2] = 0;
   i10 = i14 + 8 | 0;
   i23 = HEAP32[i9 + 4 >> 2] | 0;
   HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i10 + 4 >> 2] = i23;
   __ZNK7WebCore11ImageBuffer24getUnmultipliedImageDataERKNS_7IntRectENS0_16CoordinateSystemE(i13, i2, i16, 0);
   i23 = i13 | 0;
   i10 = HEAP32[i23 >> 2] | 0;
   HEAP32[i23 >> 2] = 0;
   i23 = HEAP32[i10 + 16 >> 2] | 0;
   do {
    if ((i23 | 0) == 0) {
     i24 = 0;
    } else {
     if ((HEAP32[i23 + 12 >> 2] | 0) == 0) {
      i24 = 0;
      break;
     }
     i24 = HEAP32[i10 + 20 >> 2] | 0;
    }
   } while (0);
   i23 = ~~(d3 * +255);
   i25 = i9;
   i26 = HEAP32[i25 >> 2] | 0;
   i27 = HEAP32[i19 >> 2] | 0;
   if ((Math_imul(i26 << 2, i27) | 0) == (i24 | 0) & (i27 | 0) > 0) {
    i28 = i10 + 8 | 0;
    i29 = 0;
    i30 = 3;
    i31 = i26;
    i26 = i27;
    while (1) {
     if ((i31 | 0) > 0) {
      i27 = 0;
      i32 = -1;
      i33 = i30;
      i34 = i31;
      while (1) {
       i35 = (HEAPU8[(HEAP32[i28 >> 2] | 0) + i33 | 0] | 0) >>> 0 > (i23 & 255) >>> 0;
       i36 = (i32 | 0) == -1;
       do {
        if (i36) {
         i37 = i36 & i35 ? i27 : -1;
         i38 = i34;
        } else {
         if (i35) {
          if ((i27 | 0) != (i34 - 1 | 0)) {
           i37 = i32;
           i38 = i34;
           break;
          }
         }
         __ZN7WebCore20RasterShapeIntervals14appendIntervalEiii(i18, i29, i32, i27);
         i37 = -1;
         i38 = HEAP32[i25 >> 2] | 0;
        }
       } while (0);
       i35 = i27 + 1 | 0;
       i39 = i33 + 4 | 0;
       if ((i35 | 0) < (i38 | 0)) {
        i27 = i35;
        i32 = i37;
        i33 = i39;
        i34 = i38;
       } else {
        break;
       }
      }
      i40 = i39;
      i41 = i38;
      i42 = HEAP32[i19 >> 2] | 0;
     } else {
      i40 = i30;
      i41 = i31;
      i42 = i26;
     }
     i34 = i29 + 1 | 0;
     if ((i34 | 0) < (i42 | 0)) {
      i29 = i34;
      i30 = i40;
      i31 = i41;
      i26 = i42;
     } else {
      break;
     }
    }
   }
   if ((i10 | 0) == 0) {
    i21 = i2;
    i22 = 0;
    break;
   }
   i26 = i10 + 4 | 0;
   i31 = i26 | 0;
   i30 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
   if ((i30 | 0) != 0) {
    HEAP32[i31 >> 2] = i30;
    i21 = i2;
    i22 = 0;
    break;
   }
   i30 = i26 - 4 | 0;
   if ((i30 | 0) == 0) {
    i21 = i2;
    i22 = 0;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 12 >> 2] & 1](i30);
   i21 = i2;
   i22 = 0;
  }
 } while (0);
 i2 = __Znwj(32) | 0;
 HEAP32[i2 >> 2] = __ZTVN7WebCore11RasterShapeE + 8;
 HEAP32[i2 + 16 >> 2] = i18;
 HEAP32[i2 + 20 >> 2] = 0;
 i18 = i2 + 24 | 0;
 i42 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i18 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i18 + 4 >> 2] = i42;
 HEAP32[i2 + 4 >> 2] = i5;
 HEAPF32[i2 + 8 >> 2] = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i6, +0, 0);
 HEAPF32[i2 + 12 >> 2] = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i7, +0, 0);
 HEAP32[i1 >> 2] = i2;
 if (i22) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore11ImageBufferD1Ev(i21);
 __ZN3WTF8fastFreeEPv(i21);
 STACKTOP = i4;
 return;
}
function __ZN3WTF6VectorINS0_IN7WebCore13ShapeIntervalIiEELj0ENS_15CrashOnOverflowEEELj0ES4_E15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 * 12 & -1) | 0;
 if (i2 >>> 0 > 357913941 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 12 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 12 & -1;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   i2 = i7 | 0;
   HEAP32[i2 >> 2] = 0;
   i8 = i7 + 4 | 0;
   HEAP32[i8 >> 2] = 0;
   i9 = i7 + 8 | 0;
   HEAP32[i9 >> 2] = 0;
   i10 = i6 + 8 | 0;
   HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i10 >> 2] = 0;
   i9 = i6 | 0;
   i11 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i9 >> 2] = i11;
   i11 = i6 + 4 | 0;
   i2 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i11 >> 2] = i2;
   if ((HEAP32[i10 >> 2] | 0) != 0) {
    HEAP32[i10 >> 2] = 0;
   }
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i9 >> 2] = 0;
    HEAP32[i11 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i10);
   }
   i10 = i6 + 12 | 0;
   if ((i10 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i10;
    i7 = i7 + 12 | 0;
   }
  }
 }
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN3WTF6VectorINS0_IN7WebCore13ShapeIntervalIiEELj0ENS_15CrashOnOverflowEEELj0ES4_E6resizeEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if (i4 >>> 0 < i2 >>> 0) {
  i5 = HEAP32[i1 + 4 >> 2] | 0;
  if (i5 >>> 0 < i2 >>> 0) {
   i6 = i5 + 1 + (i5 >>> 2) | 0;
   i5 = i6 >>> 0 > 16 >>> 0 ? i6 : 16;
   __ZN3WTF6VectorINS0_IN7WebCore13ShapeIntervalIiEELj0ENS_15CrashOnOverflowEEELj0ES4_E15reserveCapacityEj(i1, i5 >>> 0 > i2 >>> 0 ? i5 : i2);
  }
  i5 = HEAP32[i1 >> 2] | 0;
  if ((i5 | 0) == 0) {
   HEAP32[i3 >> 2] = i2;
   return;
  }
  i6 = HEAP32[i3 >> 2] | 0;
  i7 = i5 + (i2 * 12 & -1) | 0;
  if ((i6 | 0) == (i2 | 0)) {
   HEAP32[i3 >> 2] = i2;
   return;
  }
  i8 = i5 + (i6 * 12 & -1) | 0;
  while (1) {
   HEAP32[i8 >> 2] = 0;
   HEAP32[i8 + 4 >> 2] = 0;
   HEAP32[i8 + 8 >> 2] = 0;
   i8 = i8 + 12 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = i2;
  return;
 } else {
  i7 = HEAP32[i1 >> 2] | 0;
  i1 = i7 + (i4 * 12 & -1) | 0;
  if ((i4 | 0) == (i2 | 0)) {
   HEAP32[i3 >> 2] = i2;
   return;
  }
  i4 = i7 + (i2 * 12 & -1) | 0;
  while (1) {
   i7 = i4 + 8 | 0;
   if ((HEAP32[i7 >> 2] | 0) != 0) {
    HEAP32[i7 >> 2] = 0;
   }
   i7 = i4 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i7 >> 2] = 0;
    HEAP32[i4 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i8);
   }
   i4 = i4 + 12 | 0;
   if ((i4 | 0) == (i1 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = i2;
  return;
 }
}
function __ZN7WebCore5Shape20createLayoutBoxShapeERKNS_11RoundedRectENS_11WritingModeENS_6LengthES5_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0, d11 = +0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i6 + 64 | 0;
 d10 = +(HEAP32[i2 + 8 >> 2] | 0);
 d11 = +(HEAP32[i2 + 12 >> 2] | 0);
 HEAPF32[i7 >> 2] = +0;
 HEAPF32[i7 + 4 >> 2] = +0;
 HEAPF32[i7 + 8 >> 2] = d10;
 HEAPF32[i7 + 12 >> 2] = d11;
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i9 | 0, i2 + 16 | 0);
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i9 + 8 | 0, i2 + 24 | 0);
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i9 + 16 | 0, i2 + 32 | 0);
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i9 + 24 | 0, i2 + 40 | 0);
 __ZN7WebCore16FloatRoundedRectC1ERKNS_9FloatRectERKNS0_5RadiiE(i8, i7, i9);
 i9 = __Znwj(64) | 0;
 HEAP32[i9 >> 2] = __ZTVN7WebCore8BoxShapeE + 8;
 _memcpy(i9 + 16 | 0, i8 | 0, 48) | 0;
 HEAP32[i9 + 4 >> 2] = i3;
 HEAPF32[i9 + 8 >> 2] = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i4, +0, 0);
 HEAPF32[i9 + 12 >> 2] = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i5, +0, 0);
 HEAP32[i1 >> 2] = i9;
 STACKTOP = i6;
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
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
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
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "_sqrtf": _sqrtf, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZTVN7WebCore12PolygonShapeE": __ZTVN7WebCore12PolygonShapeE, "__ZTVN7WebCore11RasterShapeE": __ZTVN7WebCore11RasterShapeE, "__ZTVN7WebCore8BoxShapeE": __ZTVN7WebCore8BoxShapeE, "__ZTVN7WebCore14RectangleShapeE": __ZTVN7WebCore14RectangleShapeE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN3WTF6VectorINS0_IN7WebCore13ShapeIntervalIiEELj0ENS_15CrashOnOverflowEEELj0ES4_E15reserveCapacityEj","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore5Shape11createShapeEPKNS_10BasicShapeERKNS_10LayoutSizeENS_11WritingModeENS_6LengthES8_","__ZN7WebCore5Shape17createRasterShapeEPKNS_10StyleImageEfRKNS_10LayoutSizeENS_11WritingModeENS_6LengthES8_","_memset","_memcpy","__ZN7WebCore5Shape20createLayoutBoxShapeERKNS_11RoundedRectENS_11WritingModeENS_6LengthES5_","__ZN3WTF6VectorINS0_IN7WebCore13ShapeIntervalIiEELj0ENS_15CrashOnOverflowEEELj0ES4_E6resizeEj"]

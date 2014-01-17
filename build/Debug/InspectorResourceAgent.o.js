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
H_BASE = parentModule["_malloc"](864 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 864;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore22InspectorResourceAgentD1Ev;
var __ZN7WebCore22InspectorResourceAgentC1EPNS_19InstrumentingAgentsEPNS_18InspectorPageAgentEPNS_15InspectorClientE;
/* memory initializer */ allocate([111,112,99,111,100,101,0,0,109,97,115,107,0,0,0,0,112,97,121,108,111,97,100,68,97,116,97,0,0,0,0,0,78,101,116,119,111,114,107,0,78,111,32,100,97,116,97,32,102,111,117,110,100,32,102,111,114,32,114,101,115,111,117,114,99,101,32,119,105,116,104,32,103,105,118,101,110,32,105,100,101,110,116,105,102,105,101,114,0,0,0,0,0,0,0,0,82,101,113,117,101,115,116,32,99,111,110,116,101,110,116,32,119,97,115,32,101,118,105,99,116,101,100,32,102,114,111,109,32,105,110,115,112,101,99,116,111,114,32,99,97,99,104,101,0,0,0,0,0,0,0,0,109,101,116,104,111,100,0,0,112,111,115,116,68,97,116,97,0,0,0,0,0,0,0,0,109,105,109,101,84,121,112,101,0,0,0,0,0,0,0,0,99,111,110,110,101,99,116,105,111,110,82,101,117,115,101,100,0,0,0,0,0,0,0,0,99,111,110,110,101,99,116,105,111,110,73,100,0,0,0,0,102,114,111,109,68,105,115,107,67,97,99,104,101,0,0,0,116,105,109,105,110,103,0,0,114,101,113,117,101,115,116,84,105,109,101,0,0,0,0,0,112,114,111,120,121,83,116,97,114,116,0,0,0,0,0,0,112,114,111,120,121,69,110,100,0,0,0,0,0,0,0,0,78,111,32,114,101,115,111,117,114,99,101,32,119,105,116,104,32,103,105,118,101,110,32,105,100,101,110,116,105,102,105,101,114,32,102,111,117,110,100,0,100,110,115,83,116,97,114,116,0,0,0,0,0,0,0,0,100,110,115,69,110,100,0,0,99,111,110,110,101,99,116,83,116,97,114,116,0,0,0,0,99,111,110,110,101,99,116,69,110,100,0,0,0,0,0,0,115,115,108,83,116,97,114,116,0,0,0,0,0,0,0,0,115,115,108,69,110,100,0,0,115,101,110,100,83,116,97,114,116,0,0,0,0,0,0,0,115,101,110,100,69,110,100,0,114,101,99,101,105,118,101,72,101,97,100,101,114,115,69,110,100,0,0,0,0,0,0,0,98,111,100,121,83,105,122,101,0,0,0,0,0,0,0,0,67,97,99,104,101,45,67,111,110,116,114,111,108,0,0,0,114,101,115,112,111,110,115,101,0,0,0,0,0,0,0,0,115,111,117,114,99,101,77,97,112,85,82,76,0,0,0,0,115,116,97,99,107,84,114,97,99,101,0,0,0,0,0,0,117,114,108,0,0,0,0,0,108,105,110,101,78,117,109,98,101,114,0,0,0,0,0,0,71,69,84,0,0,0,0,0,116,121,112,101,0,0,0,0,115,116,97,116,117,115,0,0,115,116,97,116,117,115,84,101,120,116,0,0,0,0,0,0,104,101,97,100,101,114,115,0,110,111,45,99,97,99,104,101,0,0,0,0,0,0,0,0,80,114,97,103,109,97,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE=env.__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE|0;
  var __ZN9Inspector11TypeBuilder7Network8Response8MimeTypeE=env.__ZN9Inspector11TypeBuilder7Network8Response8MimeTypeE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN9Inspector18InspectorAgentBaseE=(H_BASE+656)|0;
  var __ZTVN7WebCore22InspectorResourceAgentE=(H_BASE+696)|0;
  var __ZTVN7WebCore18InspectorAgentBaseE=(H_BASE+832)|0;
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
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCoreL30buildObjectForResourceResponseERKNS_16ResourceResponseEPNS_14DocumentLoaderE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, d91 = +0, i92 = 0, i93 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 680 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 i24 = i4 + 152 | 0;
 i25 = i4 + 160 | 0;
 i26 = i4 + 168 | 0;
 i27 = i4 + 176 | 0;
 i28 = i4 + 184 | 0;
 i29 = i4 + 192 | 0;
 i30 = i4 + 200 | 0;
 i31 = i4 + 208 | 0;
 i32 = i4 + 216 | 0;
 i33 = i4 + 224 | 0;
 i34 = i4 + 232 | 0;
 i35 = i4 + 240 | 0;
 i36 = i4 + 248 | 0;
 i37 = i4 + 256 | 0;
 i38 = i4 + 264 | 0;
 i39 = i4 + 272 | 0;
 i40 = i4 + 280 | 0;
 i41 = i4 + 288 | 0;
 i42 = i4 + 296 | 0;
 i43 = i4 + 304 | 0;
 i44 = i4 + 312 | 0;
 i45 = i4 + 320 | 0;
 i46 = i4 + 328 | 0;
 i47 = i4 + 336 | 0;
 i48 = i4 + 344 | 0;
 i49 = i4 + 352 | 0;
 i50 = i4 + 360 | 0;
 i51 = i4 + 368 | 0;
 i52 = i4 + 376 | 0;
 i53 = i4 + 384 | 0;
 i54 = i4 + 392 | 0;
 i55 = i4 + 400 | 0;
 i56 = i4 + 408 | 0;
 i57 = i4 + 416 | 0;
 i58 = i4 + 424 | 0;
 i59 = i4 + 432 | 0;
 i60 = i4 + 440 | 0;
 i61 = i4 + 448 | 0;
 i62 = i4 + 456 | 0;
 i63 = i4 + 464 | 0;
 i64 = i4 + 472 | 0;
 i65 = i4 + 480 | 0;
 i66 = i4 + 488 | 0;
 i67 = i4 + 496 | 0;
 i68 = i4 + 504 | 0;
 i69 = i4 + 512 | 0;
 i70 = i4 + 520 | 0;
 i71 = i4 + 528 | 0;
 i72 = i4 + 536 | 0;
 i73 = i4 + 544 | 0;
 i74 = i4 + 552 | 0;
 i75 = i4 + 560 | 0;
 i76 = i4 + 568 | 0;
 i77 = i4 + 576 | 0;
 i78 = i4 + 584 | 0;
 i79 = i4 + 592 | 0;
 i80 = i4 + 600 | 0;
 i81 = i4 + 608 | 0;
 i82 = i4 + 616 | 0;
 i83 = i4 + 624 | 0;
 i84 = i4 + 632 | 0;
 i85 = i4 + 640 | 0;
 i86 = i4 + 648 | 0;
 i87 = i4 + 656 | 0;
 i88 = i4 + 664 | 0;
 i89 = i4 + 672 | 0;
 i90 = i2 | 0;
 if ((HEAP8[i2 + 116 | 0] & 1) != 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 d91 = +(__ZNK7WebCore20ResourceResponseBase14httpStatusCodeEv(i90) | 0);
 __ZN7WebCoreL21buildObjectForHeadersERKNS_13HTTPHeaderMapE(i89, __ZNK7WebCore20ResourceResponseBase16httpHeaderFieldsEv(i90) | 0);
 i2 = i89 | 0;
 i89 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 __ZN9Inspector15InspectorObject6createEv(i88);
 i2 = HEAP32[i88 >> 2] | 0;
 i88 = __ZNK7WebCore20ResourceResponseBase3urlEv(i90) | 0;
 i92 = i2 | 0;
 HEAP32[i84 >> 2] = H_BASE + 560;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i83, i84);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i82, i88);
 i88 = i81 | 0;
 i84 = i82 | 0;
 i82 = HEAP32[i84 >> 2] | 0;
 HEAP32[i84 >> 2] = 0;
 HEAP32[i88 >> 2] = i82;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i92, i83, i81);
 i81 = HEAP32[i88 >> 2] | 0;
 do {
  if ((i81 | 0) != 0) {
   i88 = i81 + 4 | 0;
   i82 = i88 | 0;
   i93 = (HEAP32[i82 >> 2] | 0) - 1 | 0;
   if ((i93 | 0) != 0) {
    HEAP32[i82 >> 2] = i93;
    break;
   }
   i93 = i88 - 4 | 0;
   if ((i93 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i93 >> 2] | 0) + 4 >> 2] & 31](i93);
  }
 } while (0);
 i81 = HEAP32[i84 >> 2] | 0;
 do {
  if ((i81 | 0) != 0) {
   i84 = i81 + 4 | 0;
   i93 = i84 | 0;
   i88 = (HEAP32[i93 >> 2] | 0) - 1 | 0;
   if ((i88 | 0) != 0) {
    HEAP32[i93 >> 2] = i88;
    break;
   }
   i88 = i84 - 4 | 0;
   if ((i88 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i88 >> 2] | 0) + 4 >> 2] & 31](i88);
  }
 } while (0);
 i81 = HEAP32[i83 >> 2] | 0;
 do {
  if ((i81 | 0) != 0) {
   i83 = i81 | 0;
   i88 = (HEAP32[i83 >> 2] | 0) - 2 | 0;
   if ((i88 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i81);
    break;
   } else {
    HEAP32[i83 >> 2] = i88;
    break;
   }
  }
 } while (0);
 HEAP32[i80 >> 2] = H_BASE + 600;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i79, i80);
 __ZN9Inspector19InspectorBasicValue6createEd(i78, d91);
 i80 = i77 | 0;
 i81 = i78 | 0;
 i78 = HEAP32[i81 >> 2] | 0;
 HEAP32[i81 >> 2] = 0;
 HEAP32[i80 >> 2] = i78;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i92, i79, i77);
 i77 = HEAP32[i80 >> 2] | 0;
 do {
  if ((i77 | 0) != 0) {
   i80 = i77 + 4 | 0;
   i78 = i80 | 0;
   i88 = (HEAP32[i78 >> 2] | 0) - 1 | 0;
   if ((i88 | 0) != 0) {
    HEAP32[i78 >> 2] = i88;
    break;
   }
   i88 = i80 - 4 | 0;
   if ((i88 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i88 >> 2] | 0) + 4 >> 2] & 31](i88);
  }
 } while (0);
 i77 = HEAP32[i81 >> 2] | 0;
 do {
  if ((i77 | 0) != 0) {
   i81 = i77 + 4 | 0;
   i88 = i81 | 0;
   i80 = (HEAP32[i88 >> 2] | 0) - 1 | 0;
   if ((i80 | 0) != 0) {
    HEAP32[i88 >> 2] = i80;
    break;
   }
   i80 = i81 - 4 | 0;
   if ((i80 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i80 >> 2] | 0) + 4 >> 2] & 31](i80);
  }
 } while (0);
 i77 = HEAP32[i79 >> 2] | 0;
 do {
  if ((i77 | 0) != 0) {
   i79 = i77 | 0;
   i80 = (HEAP32[i79 >> 2] | 0) - 2 | 0;
   if ((i80 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i77);
    break;
   } else {
    HEAP32[i79 >> 2] = i80;
    break;
   }
  }
 } while (0);
 i77 = __ZNK7WebCore20ResourceResponseBase14httpStatusTextEv(i90) | 0;
 HEAP32[i76 >> 2] = H_BASE + 608;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i75, i76);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i74, i77);
 i77 = i73 | 0;
 i76 = i74 | 0;
 i74 = HEAP32[i76 >> 2] | 0;
 HEAP32[i76 >> 2] = 0;
 HEAP32[i77 >> 2] = i74;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i92, i75, i73);
 i73 = HEAP32[i77 >> 2] | 0;
 do {
  if ((i73 | 0) != 0) {
   i77 = i73 + 4 | 0;
   i74 = i77 | 0;
   i80 = (HEAP32[i74 >> 2] | 0) - 1 | 0;
   if ((i80 | 0) != 0) {
    HEAP32[i74 >> 2] = i80;
    break;
   }
   i80 = i77 - 4 | 0;
   if ((i80 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i80 >> 2] | 0) + 4 >> 2] & 31](i80);
  }
 } while (0);
 i73 = HEAP32[i76 >> 2] | 0;
 do {
  if ((i73 | 0) != 0) {
   i76 = i73 + 4 | 0;
   i80 = i76 | 0;
   i77 = (HEAP32[i80 >> 2] | 0) - 1 | 0;
   if ((i77 | 0) != 0) {
    HEAP32[i80 >> 2] = i77;
    break;
   }
   i77 = i76 - 4 | 0;
   if ((i77 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i77 >> 2] | 0) + 4 >> 2] & 31](i77);
  }
 } while (0);
 i73 = HEAP32[i75 >> 2] | 0;
 do {
  if ((i73 | 0) != 0) {
   i75 = i73 | 0;
   i77 = (HEAP32[i75 >> 2] | 0) - 2 | 0;
   if ((i77 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i73);
    break;
   } else {
    HEAP32[i75 >> 2] = i77;
    break;
   }
  }
 } while (0);
 i73 = (i89 | 0) == 0;
 if (!i73) {
  i77 = i89 + 4 | 0;
  HEAP32[i77 >> 2] = (HEAP32[i77 >> 2] | 0) + 1;
 }
 HEAP32[i71 >> 2] = H_BASE + 624;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i70, i71);
 i71 = i72 | 0;
 HEAP32[i71 >> 2] = i89;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i92, i70, i72);
 i72 = HEAP32[i71 >> 2] | 0;
 do {
  if ((i72 | 0) != 0) {
   i71 = i72 + 4 | 0;
   i77 = i71 | 0;
   i75 = (HEAP32[i77 >> 2] | 0) - 1 | 0;
   if ((i75 | 0) != 0) {
    HEAP32[i77 >> 2] = i75;
    break;
   }
   i75 = i71 - 4 | 0;
   if ((i75 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i75 >> 2] | 0) + 4 >> 2] & 31](i75);
  }
 } while (0);
 i72 = HEAP32[i70 >> 2] | 0;
 do {
  if ((i72 | 0) != 0) {
   i70 = i72 | 0;
   i75 = (HEAP32[i70 >> 2] | 0) - 2 | 0;
   if ((i75 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i72);
    break;
   } else {
    HEAP32[i70 >> 2] = i75;
    break;
   }
  }
 } while (0);
 i72 = __ZNK7WebCore20ResourceResponseBase8mimeTypeEv(i90) | 0;
 HEAP32[i69 >> 2] = H_BASE + 184;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i68, i69);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i67, i72);
 i72 = i66 | 0;
 i69 = i67 | 0;
 i67 = HEAP32[i69 >> 2] | 0;
 HEAP32[i69 >> 2] = 0;
 HEAP32[i72 >> 2] = i67;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i92, i68, i66);
 i66 = HEAP32[i72 >> 2] | 0;
 do {
  if ((i66 | 0) != 0) {
   i72 = i66 + 4 | 0;
   i67 = i72 | 0;
   i75 = (HEAP32[i67 >> 2] | 0) - 1 | 0;
   if ((i75 | 0) != 0) {
    HEAP32[i67 >> 2] = i75;
    break;
   }
   i75 = i72 - 4 | 0;
   if ((i75 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i75 >> 2] | 0) + 4 >> 2] & 31](i75);
  }
 } while (0);
 i66 = HEAP32[i69 >> 2] | 0;
 do {
  if ((i66 | 0) != 0) {
   i69 = i66 + 4 | 0;
   i75 = i69 | 0;
   i72 = (HEAP32[i75 >> 2] | 0) - 1 | 0;
   if ((i72 | 0) != 0) {
    HEAP32[i75 >> 2] = i72;
    break;
   }
   i72 = i69 - 4 | 0;
   if ((i72 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i72 >> 2] | 0) + 4 >> 2] & 31](i72);
  }
 } while (0);
 i66 = HEAP32[i68 >> 2] | 0;
 do {
  if ((i66 | 0) != 0) {
   i68 = i66 | 0;
   i72 = (HEAP32[i68 >> 2] | 0) - 2 | 0;
   if ((i72 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i66);
    break;
   } else {
    HEAP32[i68 >> 2] = i72;
    break;
   }
  }
 } while (0);
 i66 = __ZNK7WebCore20ResourceResponseBase16connectionReusedEv(i90) | 0;
 HEAP32[i65 >> 2] = H_BASE + 200;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i64, i65);
 __ZN9Inspector19InspectorBasicValue6createEb(i63, i66);
 i66 = i62 | 0;
 i65 = i63 | 0;
 i63 = HEAP32[i65 >> 2] | 0;
 HEAP32[i65 >> 2] = 0;
 HEAP32[i66 >> 2] = i63;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i92, i64, i62);
 i62 = HEAP32[i66 >> 2] | 0;
 do {
  if ((i62 | 0) != 0) {
   i66 = i62 + 4 | 0;
   i63 = i66 | 0;
   i72 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
   if ((i72 | 0) != 0) {
    HEAP32[i63 >> 2] = i72;
    break;
   }
   i72 = i66 - 4 | 0;
   if ((i72 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i72 >> 2] | 0) + 4 >> 2] & 31](i72);
  }
 } while (0);
 i62 = HEAP32[i65 >> 2] | 0;
 do {
  if ((i62 | 0) != 0) {
   i65 = i62 + 4 | 0;
   i72 = i65 | 0;
   i66 = (HEAP32[i72 >> 2] | 0) - 1 | 0;
   if ((i66 | 0) != 0) {
    HEAP32[i72 >> 2] = i66;
    break;
   }
   i66 = i65 - 4 | 0;
   if ((i66 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i66 >> 2] | 0) + 4 >> 2] & 31](i66);
  }
 } while (0);
 i62 = HEAP32[i64 >> 2] | 0;
 do {
  if ((i62 | 0) != 0) {
   i64 = i62 | 0;
   i66 = (HEAP32[i64 >> 2] | 0) - 2 | 0;
   if ((i66 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i62);
    break;
   } else {
    HEAP32[i64 >> 2] = i66;
    break;
   }
  }
 } while (0);
 d91 = +((__ZNK7WebCore20ResourceResponseBase12connectionIDEv(i90) | 0) >>> 0 >>> 0);
 HEAP32[i61 >> 2] = H_BASE + 224;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i60, i61);
 __ZN9Inspector19InspectorBasicValue6createEd(i59, d91);
 i61 = i58 | 0;
 i62 = i59 | 0;
 i59 = HEAP32[i62 >> 2] | 0;
 HEAP32[i62 >> 2] = 0;
 HEAP32[i61 >> 2] = i59;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i92, i60, i58);
 i58 = HEAP32[i61 >> 2] | 0;
 do {
  if ((i58 | 0) != 0) {
   i61 = i58 + 4 | 0;
   i59 = i61 | 0;
   i66 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
   if ((i66 | 0) != 0) {
    HEAP32[i59 >> 2] = i66;
    break;
   }
   i66 = i61 - 4 | 0;
   if ((i66 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i66 >> 2] | 0) + 4 >> 2] & 31](i66);
  }
 } while (0);
 i58 = HEAP32[i62 >> 2] | 0;
 do {
  if ((i58 | 0) != 0) {
   i62 = i58 + 4 | 0;
   i66 = i62 | 0;
   i61 = (HEAP32[i66 >> 2] | 0) - 1 | 0;
   if ((i61 | 0) != 0) {
    HEAP32[i66 >> 2] = i61;
    break;
   }
   i61 = i62 - 4 | 0;
   if ((i61 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i61 >> 2] | 0) + 4 >> 2] & 31](i61);
  }
 } while (0);
 i58 = HEAP32[i60 >> 2] | 0;
 do {
  if ((i58 | 0) != 0) {
   i60 = i58 | 0;
   i61 = (HEAP32[i60 >> 2] | 0) - 2 | 0;
   if ((i61 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i58);
    break;
   } else {
    HEAP32[i60 >> 2] = i61;
    break;
   }
  }
 } while (0);
 i58 = i2;
 i61 = (i2 | 0) == 0;
 do {
  if (!i61) {
   i60 = i2 + 4 | 0;
   HEAP32[i60 >> 2] = (HEAP32[i60 >> 2] | 0) + 1;
   i60 = i2 + 4 | 0;
   i62 = i60 | 0;
   i66 = (HEAP32[i62 >> 2] | 0) - 1 | 0;
   if ((i66 | 0) != 0) {
    HEAP32[i62 >> 2] = i66;
    break;
   }
   i66 = i60 - 4 | 0;
   if ((i66 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i66 >> 2] | 0) + 4 >> 2] & 31](i66);
  }
 } while (0);
 i66 = __ZNK7WebCore20ResourceResponseBase9wasCachedEv(i90) | 0;
 HEAP32[i57 >> 2] = H_BASE + 240;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i56, i57);
 __ZN9Inspector19InspectorBasicValue6createEb(i55, i66);
 i66 = i54 | 0;
 i57 = i55 | 0;
 i55 = HEAP32[i57 >> 2] | 0;
 HEAP32[i57 >> 2] = 0;
 HEAP32[i66 >> 2] = i55;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i92, i56, i54);
 i54 = HEAP32[i66 >> 2] | 0;
 do {
  if ((i54 | 0) != 0) {
   i66 = i54 + 4 | 0;
   i55 = i66 | 0;
   i60 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
   if ((i60 | 0) != 0) {
    HEAP32[i55 >> 2] = i60;
    break;
   }
   i60 = i66 - 4 | 0;
   if ((i60 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i60 >> 2] | 0) + 4 >> 2] & 31](i60);
  }
 } while (0);
 i54 = HEAP32[i57 >> 2] | 0;
 do {
  if ((i54 | 0) != 0) {
   i57 = i54 + 4 | 0;
   i60 = i57 | 0;
   i66 = (HEAP32[i60 >> 2] | 0) - 1 | 0;
   if ((i66 | 0) != 0) {
    HEAP32[i60 >> 2] = i66;
    break;
   }
   i66 = i57 - 4 | 0;
   if ((i66 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i66 >> 2] | 0) + 4 >> 2] & 31](i66);
  }
 } while (0);
 i54 = HEAP32[i56 >> 2] | 0;
 do {
  if ((i54 | 0) != 0) {
   i56 = i54 | 0;
   i66 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
   if ((i66 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i54);
    break;
   } else {
    HEAP32[i56 >> 2] = i66;
    break;
   }
  }
 } while (0);
 do {
  if ((__ZNK7WebCore20ResourceResponseBase18resourceLoadTimingEv(i90) | 0) != 0) {
   i54 = __ZNK7WebCore20ResourceResponseBase18resourceLoadTimingEv(i90) | 0;
   __ZN9Inspector15InspectorObject6createEv(i53);
   i66 = HEAP32[i53 >> 2] | 0;
   d91 = +__ZNK7WebCore18DocumentLoadTiming29monotonicTimeToPseudoWallTimeEd(i3 + 1512 | 0, +__ZNK7WebCore18ResourceLoadTiming38convertResourceLoadTimeToMonotonicTimeEi(i54, 0));
   i56 = i66 | 0;
   HEAP32[i52 >> 2] = H_BASE + 264;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i51, i52);
   __ZN9Inspector19InspectorBasicValue6createEd(i50, d91);
   i57 = i49 | 0;
   i60 = i50 | 0;
   i55 = HEAP32[i60 >> 2] | 0;
   HEAP32[i60 >> 2] = 0;
   HEAP32[i57 >> 2] = i55;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i56, i51, i49);
   i55 = HEAP32[i57 >> 2] | 0;
   do {
    if ((i55 | 0) != 0) {
     i57 = i55 + 4 | 0;
     i62 = i57 | 0;
     i59 = (HEAP32[i62 >> 2] | 0) - 1 | 0;
     if ((i59 | 0) != 0) {
      HEAP32[i62 >> 2] = i59;
      break;
     }
     i59 = i57 - 4 | 0;
     if ((i59 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i59 >> 2] | 0) + 4 >> 2] & 31](i59);
    }
   } while (0);
   i55 = HEAP32[i60 >> 2] | 0;
   do {
    if ((i55 | 0) != 0) {
     i59 = i55 + 4 | 0;
     i57 = i59 | 0;
     i62 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
     if ((i62 | 0) != 0) {
      HEAP32[i57 >> 2] = i62;
      break;
     }
     i62 = i59 - 4 | 0;
     if ((i62 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i62 >> 2] | 0) + 4 >> 2] & 31](i62);
    }
   } while (0);
   i55 = HEAP32[i51 >> 2] | 0;
   do {
    if ((i55 | 0) != 0) {
     i60 = i55 | 0;
     i62 = (HEAP32[i60 >> 2] | 0) - 2 | 0;
     if ((i62 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i55);
      break;
     } else {
      HEAP32[i60 >> 2] = i62;
      break;
     }
    }
   } while (0);
   d91 = +(HEAP32[i54 + 16 >> 2] | 0);
   HEAP32[i48 >> 2] = H_BASE + 280;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i47, i48);
   __ZN9Inspector19InspectorBasicValue6createEd(i46, d91);
   i55 = i45 | 0;
   i62 = i46 | 0;
   i60 = HEAP32[i62 >> 2] | 0;
   HEAP32[i62 >> 2] = 0;
   HEAP32[i55 >> 2] = i60;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i56, i47, i45);
   i60 = HEAP32[i55 >> 2] | 0;
   do {
    if ((i60 | 0) != 0) {
     i55 = i60 + 4 | 0;
     i59 = i55 | 0;
     i57 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
     if ((i57 | 0) != 0) {
      HEAP32[i59 >> 2] = i57;
      break;
     }
     i57 = i55 - 4 | 0;
     if ((i57 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i57 >> 2] | 0) + 4 >> 2] & 31](i57);
    }
   } while (0);
   i60 = HEAP32[i62 >> 2] | 0;
   do {
    if ((i60 | 0) != 0) {
     i57 = i60 + 4 | 0;
     i55 = i57 | 0;
     i59 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
     if ((i59 | 0) != 0) {
      HEAP32[i55 >> 2] = i59;
      break;
     }
     i59 = i57 - 4 | 0;
     if ((i59 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i59 >> 2] | 0) + 4 >> 2] & 31](i59);
    }
   } while (0);
   i60 = HEAP32[i47 >> 2] | 0;
   do {
    if ((i60 | 0) != 0) {
     i62 = i60 | 0;
     i59 = (HEAP32[i62 >> 2] | 0) - 2 | 0;
     if ((i59 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i60);
      break;
     } else {
      HEAP32[i62 >> 2] = i59;
      break;
     }
    }
   } while (0);
   d91 = +(HEAP32[i54 + 20 >> 2] | 0);
   HEAP32[i44 >> 2] = H_BASE + 296;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i43, i44);
   __ZN9Inspector19InspectorBasicValue6createEd(i42, d91);
   i60 = i41 | 0;
   i59 = i42 | 0;
   i62 = HEAP32[i59 >> 2] | 0;
   HEAP32[i59 >> 2] = 0;
   HEAP32[i60 >> 2] = i62;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i56, i43, i41);
   i62 = HEAP32[i60 >> 2] | 0;
   do {
    if ((i62 | 0) != 0) {
     i60 = i62 + 4 | 0;
     i57 = i60 | 0;
     i55 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
     if ((i55 | 0) != 0) {
      HEAP32[i57 >> 2] = i55;
      break;
     }
     i55 = i60 - 4 | 0;
     if ((i55 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i55 >> 2] | 0) + 4 >> 2] & 31](i55);
    }
   } while (0);
   i62 = HEAP32[i59 >> 2] | 0;
   do {
    if ((i62 | 0) != 0) {
     i55 = i62 + 4 | 0;
     i60 = i55 | 0;
     i57 = (HEAP32[i60 >> 2] | 0) - 1 | 0;
     if ((i57 | 0) != 0) {
      HEAP32[i60 >> 2] = i57;
      break;
     }
     i57 = i55 - 4 | 0;
     if ((i57 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i57 >> 2] | 0) + 4 >> 2] & 31](i57);
    }
   } while (0);
   i62 = HEAP32[i43 >> 2] | 0;
   do {
    if ((i62 | 0) != 0) {
     i59 = i62 | 0;
     i57 = (HEAP32[i59 >> 2] | 0) - 2 | 0;
     if ((i57 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i62);
      break;
     } else {
      HEAP32[i59 >> 2] = i57;
      break;
     }
    }
   } while (0);
   d91 = +(HEAP32[i54 + 24 >> 2] | 0);
   HEAP32[i40 >> 2] = H_BASE + 352;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i39, i40);
   __ZN9Inspector19InspectorBasicValue6createEd(i38, d91);
   i62 = i37 | 0;
   i57 = i38 | 0;
   i59 = HEAP32[i57 >> 2] | 0;
   HEAP32[i57 >> 2] = 0;
   HEAP32[i62 >> 2] = i59;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i56, i39, i37);
   i59 = HEAP32[i62 >> 2] | 0;
   do {
    if ((i59 | 0) != 0) {
     i62 = i59 + 4 | 0;
     i55 = i62 | 0;
     i60 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
     if ((i60 | 0) != 0) {
      HEAP32[i55 >> 2] = i60;
      break;
     }
     i60 = i62 - 4 | 0;
     if ((i60 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i60 >> 2] | 0) + 4 >> 2] & 31](i60);
    }
   } while (0);
   i59 = HEAP32[i57 >> 2] | 0;
   do {
    if ((i59 | 0) != 0) {
     i60 = i59 + 4 | 0;
     i62 = i60 | 0;
     i55 = (HEAP32[i62 >> 2] | 0) - 1 | 0;
     if ((i55 | 0) != 0) {
      HEAP32[i62 >> 2] = i55;
      break;
     }
     i55 = i60 - 4 | 0;
     if ((i55 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i55 >> 2] | 0) + 4 >> 2] & 31](i55);
    }
   } while (0);
   i59 = HEAP32[i39 >> 2] | 0;
   do {
    if ((i59 | 0) != 0) {
     i57 = i59 | 0;
     i55 = (HEAP32[i57 >> 2] | 0) - 2 | 0;
     if ((i55 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i59);
      break;
     } else {
      HEAP32[i57 >> 2] = i55;
      break;
     }
    }
   } while (0);
   d91 = +(HEAP32[i54 + 28 >> 2] | 0);
   HEAP32[i36 >> 2] = H_BASE + 368;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i35, i36);
   __ZN9Inspector19InspectorBasicValue6createEd(i34, d91);
   i59 = i33 | 0;
   i55 = i34 | 0;
   i57 = HEAP32[i55 >> 2] | 0;
   HEAP32[i55 >> 2] = 0;
   HEAP32[i59 >> 2] = i57;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i56, i35, i33);
   i57 = HEAP32[i59 >> 2] | 0;
   do {
    if ((i57 | 0) != 0) {
     i59 = i57 + 4 | 0;
     i60 = i59 | 0;
     i62 = (HEAP32[i60 >> 2] | 0) - 1 | 0;
     if ((i62 | 0) != 0) {
      HEAP32[i60 >> 2] = i62;
      break;
     }
     i62 = i59 - 4 | 0;
     if ((i62 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i62 >> 2] | 0) + 4 >> 2] & 31](i62);
    }
   } while (0);
   i57 = HEAP32[i55 >> 2] | 0;
   do {
    if ((i57 | 0) != 0) {
     i62 = i57 + 4 | 0;
     i59 = i62 | 0;
     i60 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
     if ((i60 | 0) != 0) {
      HEAP32[i59 >> 2] = i60;
      break;
     }
     i60 = i62 - 4 | 0;
     if ((i60 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i60 >> 2] | 0) + 4 >> 2] & 31](i60);
    }
   } while (0);
   i57 = HEAP32[i35 >> 2] | 0;
   do {
    if ((i57 | 0) != 0) {
     i55 = i57 | 0;
     i60 = (HEAP32[i55 >> 2] | 0) - 2 | 0;
     if ((i60 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i57);
      break;
     } else {
      HEAP32[i55 >> 2] = i60;
      break;
     }
    }
   } while (0);
   d91 = +(HEAP32[i54 + 32 >> 2] | 0);
   HEAP32[i32 >> 2] = H_BASE + 376;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i31, i32);
   __ZN9Inspector19InspectorBasicValue6createEd(i30, d91);
   i57 = i29 | 0;
   i60 = i30 | 0;
   i55 = HEAP32[i60 >> 2] | 0;
   HEAP32[i60 >> 2] = 0;
   HEAP32[i57 >> 2] = i55;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i56, i31, i29);
   i55 = HEAP32[i57 >> 2] | 0;
   do {
    if ((i55 | 0) != 0) {
     i57 = i55 + 4 | 0;
     i62 = i57 | 0;
     i59 = (HEAP32[i62 >> 2] | 0) - 1 | 0;
     if ((i59 | 0) != 0) {
      HEAP32[i62 >> 2] = i59;
      break;
     }
     i59 = i57 - 4 | 0;
     if ((i59 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i59 >> 2] | 0) + 4 >> 2] & 31](i59);
    }
   } while (0);
   i55 = HEAP32[i60 >> 2] | 0;
   do {
    if ((i55 | 0) != 0) {
     i59 = i55 + 4 | 0;
     i57 = i59 | 0;
     i62 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
     if ((i62 | 0) != 0) {
      HEAP32[i57 >> 2] = i62;
      break;
     }
     i62 = i59 - 4 | 0;
     if ((i62 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i62 >> 2] | 0) + 4 >> 2] & 31](i62);
    }
   } while (0);
   i55 = HEAP32[i31 >> 2] | 0;
   do {
    if ((i55 | 0) != 0) {
     i60 = i55 | 0;
     i62 = (HEAP32[i60 >> 2] | 0) - 2 | 0;
     if ((i62 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i55);
      break;
     } else {
      HEAP32[i60 >> 2] = i62;
      break;
     }
    }
   } while (0);
   d91 = +(HEAP32[i54 + 36 >> 2] | 0);
   HEAP32[i28 >> 2] = H_BASE + 392;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i27, i28);
   __ZN9Inspector19InspectorBasicValue6createEd(i26, d91);
   i55 = i25 | 0;
   i62 = i26 | 0;
   i60 = HEAP32[i62 >> 2] | 0;
   HEAP32[i62 >> 2] = 0;
   HEAP32[i55 >> 2] = i60;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i56, i27, i25);
   i60 = HEAP32[i55 >> 2] | 0;
   do {
    if ((i60 | 0) != 0) {
     i55 = i60 + 4 | 0;
     i59 = i55 | 0;
     i57 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
     if ((i57 | 0) != 0) {
      HEAP32[i59 >> 2] = i57;
      break;
     }
     i57 = i55 - 4 | 0;
     if ((i57 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i57 >> 2] | 0) + 4 >> 2] & 31](i57);
    }
   } while (0);
   i60 = HEAP32[i62 >> 2] | 0;
   do {
    if ((i60 | 0) != 0) {
     i57 = i60 + 4 | 0;
     i55 = i57 | 0;
     i59 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
     if ((i59 | 0) != 0) {
      HEAP32[i55 >> 2] = i59;
      break;
     }
     i59 = i57 - 4 | 0;
     if ((i59 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i59 >> 2] | 0) + 4 >> 2] & 31](i59);
    }
   } while (0);
   i60 = HEAP32[i27 >> 2] | 0;
   do {
    if ((i60 | 0) != 0) {
     i62 = i60 | 0;
     i59 = (HEAP32[i62 >> 2] | 0) - 2 | 0;
     if ((i59 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i60);
      break;
     } else {
      HEAP32[i62 >> 2] = i59;
      break;
     }
    }
   } while (0);
   d91 = +(HEAP32[i54 + 52 >> 2] | 0);
   HEAP32[i24 >> 2] = H_BASE + 408;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i23, i24);
   __ZN9Inspector19InspectorBasicValue6createEd(i22, d91);
   i60 = i21 | 0;
   i59 = i22 | 0;
   i62 = HEAP32[i59 >> 2] | 0;
   HEAP32[i59 >> 2] = 0;
   HEAP32[i60 >> 2] = i62;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i56, i23, i21);
   i62 = HEAP32[i60 >> 2] | 0;
   do {
    if ((i62 | 0) != 0) {
     i60 = i62 + 4 | 0;
     i57 = i60 | 0;
     i55 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
     if ((i55 | 0) != 0) {
      HEAP32[i57 >> 2] = i55;
      break;
     }
     i55 = i60 - 4 | 0;
     if ((i55 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i55 >> 2] | 0) + 4 >> 2] & 31](i55);
    }
   } while (0);
   i62 = HEAP32[i59 >> 2] | 0;
   do {
    if ((i62 | 0) != 0) {
     i55 = i62 + 4 | 0;
     i60 = i55 | 0;
     i57 = (HEAP32[i60 >> 2] | 0) - 1 | 0;
     if ((i57 | 0) != 0) {
      HEAP32[i60 >> 2] = i57;
      break;
     }
     i57 = i55 - 4 | 0;
     if ((i57 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i57 >> 2] | 0) + 4 >> 2] & 31](i57);
    }
   } while (0);
   i62 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i62 | 0) != 0) {
     i59 = i62 | 0;
     i57 = (HEAP32[i59 >> 2] | 0) - 2 | 0;
     if ((i57 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i62);
      break;
     } else {
      HEAP32[i59 >> 2] = i57;
      break;
     }
    }
   } while (0);
   d91 = +(HEAP32[i54 + 56 >> 2] | 0);
   HEAP32[i20 >> 2] = H_BASE + 424;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i19, i20);
   __ZN9Inspector19InspectorBasicValue6createEd(i18, d91);
   i62 = i17 | 0;
   i57 = i18 | 0;
   i59 = HEAP32[i57 >> 2] | 0;
   HEAP32[i57 >> 2] = 0;
   HEAP32[i62 >> 2] = i59;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i56, i19, i17);
   i59 = HEAP32[i62 >> 2] | 0;
   do {
    if ((i59 | 0) != 0) {
     i62 = i59 + 4 | 0;
     i55 = i62 | 0;
     i60 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
     if ((i60 | 0) != 0) {
      HEAP32[i55 >> 2] = i60;
      break;
     }
     i60 = i62 - 4 | 0;
     if ((i60 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i60 >> 2] | 0) + 4 >> 2] & 31](i60);
    }
   } while (0);
   i59 = HEAP32[i57 >> 2] | 0;
   do {
    if ((i59 | 0) != 0) {
     i60 = i59 + 4 | 0;
     i62 = i60 | 0;
     i55 = (HEAP32[i62 >> 2] | 0) - 1 | 0;
     if ((i55 | 0) != 0) {
      HEAP32[i62 >> 2] = i55;
      break;
     }
     i55 = i60 - 4 | 0;
     if ((i55 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i55 >> 2] | 0) + 4 >> 2] & 31](i55);
    }
   } while (0);
   i59 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i59 | 0) != 0) {
     i57 = i59 | 0;
     i55 = (HEAP32[i57 >> 2] | 0) - 2 | 0;
     if ((i55 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i59);
      break;
     } else {
      HEAP32[i57 >> 2] = i55;
      break;
     }
    }
   } while (0);
   d91 = +(HEAP32[i54 + 40 >> 2] | 0);
   HEAP32[i16 >> 2] = H_BASE + 432;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i15, i16);
   __ZN9Inspector19InspectorBasicValue6createEd(i14, d91);
   i59 = i13 | 0;
   i55 = i14 | 0;
   i57 = HEAP32[i55 >> 2] | 0;
   HEAP32[i55 >> 2] = 0;
   HEAP32[i59 >> 2] = i57;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i56, i15, i13);
   i57 = HEAP32[i59 >> 2] | 0;
   do {
    if ((i57 | 0) != 0) {
     i59 = i57 + 4 | 0;
     i60 = i59 | 0;
     i62 = (HEAP32[i60 >> 2] | 0) - 1 | 0;
     if ((i62 | 0) != 0) {
      HEAP32[i60 >> 2] = i62;
      break;
     }
     i62 = i59 - 4 | 0;
     if ((i62 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i62 >> 2] | 0) + 4 >> 2] & 31](i62);
    }
   } while (0);
   i57 = HEAP32[i55 >> 2] | 0;
   do {
    if ((i57 | 0) != 0) {
     i62 = i57 + 4 | 0;
     i59 = i62 | 0;
     i60 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
     if ((i60 | 0) != 0) {
      HEAP32[i59 >> 2] = i60;
      break;
     }
     i60 = i62 - 4 | 0;
     if ((i60 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i60 >> 2] | 0) + 4 >> 2] & 31](i60);
    }
   } while (0);
   i57 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i57 | 0) != 0) {
     i55 = i57 | 0;
     i60 = (HEAP32[i55 >> 2] | 0) - 2 | 0;
     if ((i60 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i57);
      break;
     } else {
      HEAP32[i55 >> 2] = i60;
      break;
     }
    }
   } while (0);
   d91 = +(HEAP32[i54 + 44 >> 2] | 0);
   HEAP32[i12 >> 2] = H_BASE + 448;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i11, i12);
   __ZN9Inspector19InspectorBasicValue6createEd(i10, d91);
   i57 = i9 | 0;
   i60 = i10 | 0;
   i55 = HEAP32[i60 >> 2] | 0;
   HEAP32[i60 >> 2] = 0;
   HEAP32[i57 >> 2] = i55;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i56, i11, i9);
   i55 = HEAP32[i57 >> 2] | 0;
   do {
    if ((i55 | 0) != 0) {
     i57 = i55 + 4 | 0;
     i62 = i57 | 0;
     i59 = (HEAP32[i62 >> 2] | 0) - 1 | 0;
     if ((i59 | 0) != 0) {
      HEAP32[i62 >> 2] = i59;
      break;
     }
     i59 = i57 - 4 | 0;
     if ((i59 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i59 >> 2] | 0) + 4 >> 2] & 31](i59);
    }
   } while (0);
   i55 = HEAP32[i60 >> 2] | 0;
   do {
    if ((i55 | 0) != 0) {
     i59 = i55 + 4 | 0;
     i57 = i59 | 0;
     i62 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
     if ((i62 | 0) != 0) {
      HEAP32[i57 >> 2] = i62;
      break;
     }
     i62 = i59 - 4 | 0;
     if ((i62 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i62 >> 2] | 0) + 4 >> 2] & 31](i62);
    }
   } while (0);
   i55 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i55 | 0) != 0) {
     i60 = i55 | 0;
     i62 = (HEAP32[i60 >> 2] | 0) - 2 | 0;
     if ((i62 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i55);
      break;
     } else {
      HEAP32[i60 >> 2] = i62;
      break;
     }
    }
   } while (0);
   d91 = +(HEAP32[i54 + 48 >> 2] | 0);
   HEAP32[i8 >> 2] = H_BASE + 456;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i7, i8);
   __ZN9Inspector19InspectorBasicValue6createEd(i6, d91);
   i55 = i5 | 0;
   i62 = i6 | 0;
   i60 = HEAP32[i62 >> 2] | 0;
   HEAP32[i62 >> 2] = 0;
   HEAP32[i55 >> 2] = i60;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i56, i7, i5);
   i60 = HEAP32[i55 >> 2] | 0;
   do {
    if ((i60 | 0) != 0) {
     i55 = i60 + 4 | 0;
     i59 = i55 | 0;
     i57 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
     if ((i57 | 0) != 0) {
      HEAP32[i59 >> 2] = i57;
      break;
     }
     i57 = i55 - 4 | 0;
     if ((i57 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i57 >> 2] | 0) + 4 >> 2] & 31](i57);
    }
   } while (0);
   i60 = HEAP32[i62 >> 2] | 0;
   do {
    if ((i60 | 0) != 0) {
     i56 = i60 + 4 | 0;
     i54 = i56 | 0;
     i57 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
     if ((i57 | 0) != 0) {
      HEAP32[i54 >> 2] = i57;
      break;
     }
     i57 = i56 - 4 | 0;
     if ((i57 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i57 >> 2] | 0) + 4 >> 2] & 31](i57);
    }
   } while (0);
   i60 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i60 | 0) != 0) {
     i62 = i60 | 0;
     i57 = (HEAP32[i62 >> 2] | 0) - 2 | 0;
     if ((i57 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i60);
      break;
     } else {
      HEAP32[i62 >> 2] = i57;
      break;
     }
    }
   } while (0);
   do {
    if ((i66 | 0) != 0) {
     i60 = i66 + 4 | 0;
     i57 = HEAP32[i60 >> 2] | 0;
     HEAP32[i60 >> 2] = i57 + 1;
     i60 = i66 + 4 | 0;
     if ((i57 | 0) != 0) {
      HEAP32[i60 >> 2] = i57;
      break;
     }
     i57 = i60 - 4 | 0;
     if ((i57 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i57 >> 2] | 0) + 4 >> 2] & 31](i57);
    }
   } while (0);
   HEAP32[i86 >> 2] = H_BASE + 256;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i85, i86);
   i57 = i87 | 0;
   HEAP32[i57 >> 2] = i66;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i92, i85, i87);
   i60 = HEAP32[i57 >> 2] | 0;
   do {
    if ((i60 | 0) != 0) {
     i57 = i60 + 4 | 0;
     i62 = i57 | 0;
     i56 = (HEAP32[i62 >> 2] | 0) - 1 | 0;
     if ((i56 | 0) != 0) {
      HEAP32[i62 >> 2] = i56;
      break;
     }
     i56 = i57 - 4 | 0;
     if ((i56 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i56 >> 2] | 0) + 4 >> 2] & 31](i56);
    }
   } while (0);
   i60 = HEAP32[i85 >> 2] | 0;
   if ((i60 | 0) == 0) {
    break;
   }
   i66 = i60 | 0;
   i56 = (HEAP32[i66 >> 2] | 0) - 2 | 0;
   if ((i56 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i60);
    break;
   } else {
    HEAP32[i66 >> 2] = i56;
    break;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i58;
 do {
  if (!i61) {
   i58 = i2 + 4 | 0;
   i1 = HEAP32[i58 >> 2] | 0;
   HEAP32[i58 >> 2] = i1 + 1;
   i58 = i2 + 4 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i58 >> 2] = i1;
    break;
   }
   i1 = i58 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
  }
 } while (0);
 if (i73) {
  STACKTOP = i4;
  return;
 }
 i73 = i89 + 4 | 0;
 i89 = i73 | 0;
 i2 = (HEAP32[i89 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i89 >> 2] = i2;
  STACKTOP = i4;
  return;
 }
 i2 = i73 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22InspectorResourceAgent15willSendRequestEmPNS_14DocumentLoaderERNS_15ResourceRequestERKNS_16ResourceResponseE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, d53 = +0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 304 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 i14 = i6 + 56 | 0;
 i15 = i6 + 64 | 0;
 i16 = i6 + 72 | 0;
 i17 = i6 + 80 | 0;
 i18 = i6 + 88 | 0;
 i19 = i6 + 96 | 0;
 i20 = i6 + 104 | 0;
 i21 = i6 + 112 | 0;
 i22 = i6 + 120 | 0;
 i23 = i6 + 128 | 0;
 i24 = i6 + 136 | 0;
 i25 = i6 + 144 | 0;
 i26 = i6 + 152 | 0;
 i27 = i6 + 160 | 0;
 i28 = i6 + 168 | 0;
 i29 = i6 + 216 | 0;
 i30 = i6 + 224 | 0;
 i31 = i6 + 232 | 0;
 i32 = i6 + 240 | 0;
 i33 = i6 + 248 | 0;
 i34 = i6 + 256 | 0;
 i35 = i6 + 264 | 0;
 i36 = i6 + 272 | 0;
 i37 = i6 + 280 | 0;
 i38 = i6 + 288 | 0;
 i39 = i6 + 296 | 0;
 __ZN7WebCore18IdentifiersFactory9requestIdEm(i26, i2);
 i2 = i1 + 32 | 0;
 i40 = HEAP32[i2 >> 2] | 0;
 i41 = i1 + 16 | 0;
 __ZN7WebCore18InspectorPageAgent8loaderIdEPNS_14DocumentLoaderE(i27, HEAP32[i41 >> 2] | 0, i3);
 __ZN7WebCore20NetworkResourcesData15resourceCreatedERKN3WTF6StringES4_(i40, i26, i27);
 i40 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i40 | 0) != 0) {
   i27 = i40 | 0;
   i42 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
   if ((i42 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i40);
    break;
   } else {
    HEAP32[i27 >> 2] = i42;
    break;
   }
  }
 } while (0);
 do {
  if ((i3 | 0) == 0) {
   i43 = 8;
  } else {
   i40 = HEAP32[i3 + 12 >> 2] | 0;
   i42 = __ZN7WebCore18InspectorPageAgent14cachedResourceEPNS_5FrameERKNS_3URLE(i40, __ZNK7WebCore19ResourceRequestBase3urlEv(i4 | 0) | 0) | 0;
   if ((i42 | 0) == 0) {
    i43 = 8;
    break;
   }
   i44 = __ZN7WebCore18InspectorPageAgent18cachedResourceTypeERKNS_14CachedResourceE(i42) | 0;
  }
 } while (0);
 if ((i43 | 0) == 8) {
  i44 = __ZN7WebCore20NetworkResourcesData12resourceTypeERKN3WTF6StringE(HEAP32[i2 >> 2] | 0, i26) | 0;
 }
 do {
  if ((i44 | 0) == 7) {
   if ((HEAP8[i1 + 38 | 0] & 1) != 0) {
    i45 = 5;
    break;
   }
   i43 = i4 | 0;
   i42 = __ZNK7WebCore19ResourceRequestBase3urlEv(i43) | 0;
   __ZN7WebCore14IconController3urlEv(i28, HEAP32[(__ZNK7WebCore14DocumentLoader11frameLoaderEv(i3) | 0) + 28 >> 2] | 0);
   i40 = __ZN7WebCore31equalIgnoringFragmentIdentifierERKNS_3URLES2_(i42, i28) | 0;
   i42 = HEAP32[i28 >> 2] | 0;
   do {
    if ((i42 | 0) != 0) {
     i27 = i42 | 0;
     i46 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
     if ((i46 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i42);
      break;
     } else {
      HEAP32[i27 >> 2] = i46;
      break;
     }
    }
   } while (0);
   if (i40) {
    i45 = 2;
    break;
   }
   i42 = __ZNK7WebCore19ResourceRequestBase3urlEv(i43) | 0;
   if (!(__ZN7WebCore31equalIgnoringFragmentIdentifierERKNS_3URLES2_(i42, __ZNK7WebCore14DocumentLoader3urlEv(i3) | 0) | 0)) {
    i45 = 7;
    break;
   }
   i45 = (HEAP8[i3 + 973 | 0] & 1) != 0 ? 7 : 0;
  } else {
   i45 = i44;
  }
 } while (0);
 __ZN7WebCore20NetworkResourcesData15setResourceTypeERKN3WTF6StringENS_18InspectorPageAgent12ResourceTypeE(HEAP32[i2 >> 2] | 0, i26, i45);
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 L25 : do {
  if ((i2 | 0) != 0) {
   i44 = HEAP32[i2 + 12 >> 2] | 0;
   i28 = HEAP32[i2 + 16 >> 2] | 0;
   i42 = i44 + (i28 << 3) | 0;
   if ((HEAP32[i2 + 24 >> 2] | 0) == 0) {
    break;
   }
   L28 : do {
    if ((i28 | 0) == 0) {
     i47 = i44;
    } else {
     i46 = i44;
     while (1) {
      i27 = HEAP32[i46 >> 2] | 0;
      if (!((i27 | 0) == (-1 | 0) | (i27 | 0) == 0)) {
       i47 = i46;
       break L28;
      }
      i46 = i46 + 8 | 0;
      if ((i46 | 0) == (i42 | 0)) {
       break L25;
      }
     }
    }
   } while (0);
   if ((i47 | 0) == (i42 | 0)) {
    break;
   }
   i44 = i29 | 0;
   i28 = i4 | 0;
   i43 = i7 | 0;
   i40 = i30 | 0;
   i46 = i47;
   while (1) {
    HEAP32[i44 >> 2] = 0;
    i27 = HEAP32[i46 + 4 >> 2] | 0;
    do {
     if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i27 >> 2] | 0) + 32 >> 2] & 1](i27, i29) | 0) {
      i48 = HEAP32[i46 >> 2] | 0;
      do {
       if ((i48 | 0) == 0) {
        HEAP32[i43 >> 2] = 0;
       } else {
        if ((HEAP32[i48 + 16 >> 2] & 16 | 0) == 0) {
         __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i7, i48);
         break;
        } else {
         HEAP32[i43 >> 2] = i48;
         i49 = i48 | 0;
         HEAP32[i49 >> 2] = (HEAP32[i49 >> 2] | 0) + 2;
         break;
        }
       }
      } while (0);
      HEAP32[i40 >> 2] = HEAP32[i43 >> 2];
      __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldERKN3WTF12AtomicStringERKNS1_6StringE(i28, i30, i29);
      i48 = HEAP32[i40 >> 2] | 0;
      if ((i48 | 0) == 0) {
       break;
      }
      i49 = i48 | 0;
      i50 = (HEAP32[i49 >> 2] | 0) - 2 | 0;
      if ((i50 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i48);
       break;
      } else {
       HEAP32[i49 >> 2] = i50;
       break;
      }
     }
    } while (0);
    i27 = HEAP32[i44 >> 2] | 0;
    do {
     if ((i27 | 0) != 0) {
      i50 = i27 | 0;
      i49 = (HEAP32[i50 >> 2] | 0) - 2 | 0;
      if ((i49 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i27);
       break;
      } else {
       HEAP32[i50 >> 2] = i49;
       break;
      }
     }
    } while (0);
    i27 = i46 + 8 | 0;
    if ((i27 | 0) == (i42 | 0)) {
     break L25;
    } else {
     i51 = i27;
    }
    while (1) {
     i27 = HEAP32[i51 >> 2] | 0;
     if (!((i27 | 0) == (-1 | 0) | (i27 | 0) == 0)) {
      break;
     }
     i27 = i51 + 8 | 0;
     if ((i27 | 0) == (i42 | 0)) {
      break L25;
     } else {
      i51 = i27;
     }
    }
    if ((i51 | 0) == (i42 | 0)) {
     break;
    } else {
     i46 = i51;
    }
   }
  }
 } while (0);
 i51 = i4 | 0;
 i29 = i4 + 152 | 0;
 HEAP8[i29] = HEAP8[i29] | -64;
 do {
  if ((HEAP8[i1 + 37 | 0] & 1) != 0) {
   __ZN3WTF6StringC1EPKc(i31, H_BASE + 632 | 0);
   __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i51, H_BASE + 648 | 0, i31);
   i29 = HEAP32[i31 >> 2] | 0;
   do {
    if ((i29 | 0) != 0) {
     i4 = i29 | 0;
     i30 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i30 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i29);
      break;
     } else {
      HEAP32[i4 >> 2] = i30;
      break;
     }
    }
   } while (0);
   __ZN7WebCore19ResourceRequestBase14setCachePolicyENS_26ResourceRequestCachePolicyE(i51, 1);
   __ZN3WTF6StringC1EPKc(i32, H_BASE + 632 | 0);
   __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i51, H_BASE + 496 | 0, i32);
   i29 = HEAP32[i32 >> 2] | 0;
   if ((i29 | 0) == 0) {
    break;
   }
   i30 = i29 | 0;
   i4 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i29);
    break;
   } else {
    HEAP32[i30 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i33 >> 2] = __ZN7WebCore18InspectorPageAgent16resourceTypeJsonENS0_12ResourceTypeE(i45) | 0;
 i32 = i3 + 12 | 0;
 i31 = HEAP32[i32 >> 2] | 0;
 if ((i31 | 0) == 0) {
  i52 = 0;
 } else {
  i52 = HEAP32[i31 + 456 >> 2] | 0;
 }
 __ZN7WebCore22InspectorResourceAgent20buildInitiatorObjectEPNS_8DocumentE(i34, i1, i52);
 i52 = i34 | 0;
 i34 = HEAP32[i52 >> 2] | 0;
 HEAP32[i52 >> 2] = 0;
 i52 = HEAP32[i1 + 24 >> 2] | 0;
 __ZN7WebCore18InspectorPageAgent7frameIdEPNS_5FrameE(i35, HEAP32[i41 >> 2] | 0, HEAP32[i32 >> 2] | 0);
 __ZN7WebCore18InspectorPageAgent8loaderIdEPNS_14DocumentLoaderE(i36, HEAP32[i41 >> 2] | 0, i3);
 i41 = __ZNK7WebCore14DocumentLoader3urlEv(i3) | 0;
 __ZN9Inspector15InspectorObject6createEv(i23);
 i32 = HEAP32[i23 >> 2] | 0;
 i23 = __ZNK7WebCore19ResourceRequestBase3urlEv(i51) | 0;
 i1 = i32 | 0;
 HEAP32[i22 >> 2] = H_BASE + 560;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i21, i22);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i20, i23);
 i23 = i19 | 0;
 i22 = i20 | 0;
 i20 = HEAP32[i22 >> 2] | 0;
 HEAP32[i22 >> 2] = 0;
 HEAP32[i23 >> 2] = i20;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i1, i21, i19);
 i19 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i23 = i19 + 4 | 0;
   i20 = i23 | 0;
   i31 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i31 | 0) != 0) {
    HEAP32[i20 >> 2] = i31;
    break;
   }
   i31 = i23 - 4 | 0;
   if ((i31 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] & 31](i31);
  }
 } while (0);
 i19 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i22 = i19 + 4 | 0;
   i31 = i22 | 0;
   i23 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
   if ((i23 | 0) != 0) {
    HEAP32[i31 >> 2] = i23;
    break;
   }
   i23 = i22 - 4 | 0;
   if ((i23 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 31](i23);
  }
 } while (0);
 i19 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i21 = i19 | 0;
   i23 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i23 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i21 >> 2] = i23;
    break;
   }
  }
 } while (0);
 i19 = __ZNK7WebCore19ResourceRequestBase10httpMethodEv(i51) | 0;
 HEAP32[i18 >> 2] = H_BASE + 160;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i17, i18);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i16, i19);
 i19 = i15 | 0;
 i18 = i16 | 0;
 i16 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP32[i19 >> 2] = i16;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i1, i17, i15);
 i15 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i19 = i15 + 4 | 0;
   i16 = i19 | 0;
   i23 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i23 | 0) != 0) {
    HEAP32[i16 >> 2] = i23;
    break;
   }
   i23 = i19 - 4 | 0;
   if ((i23 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 31](i23);
  }
 } while (0);
 i15 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i18 = i15 + 4 | 0;
   i23 = i18 | 0;
   i19 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) != 0) {
    HEAP32[i23 >> 2] = i19;
    break;
   }
   i19 = i18 - 4 | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 31](i19);
  }
 } while (0);
 i15 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i17 = i15 | 0;
   i19 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i17 >> 2] = i19;
    break;
   }
  }
 } while (0);
 __ZN7WebCoreL21buildObjectForHeadersERKNS_13HTTPHeaderMapE(i24, __ZNK7WebCore19ResourceRequestBase16httpHeaderFieldsEv(i51) | 0);
 HEAP32[i13 >> 2] = H_BASE + 624;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
 i13 = i14 | 0;
 i15 = i24 | 0;
 i24 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i13 >> 2] = i24;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i1, i12, i14);
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i13 = i14 + 4 | 0;
   i24 = i13 | 0;
   i15 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i24 >> 2] = i15;
    break;
   }
   i15 = i13 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 31](i15);
  }
 } while (0);
 i14 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i12 = i14 | 0;
   i15 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i12 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i14 = i32;
 i15 = (i32 | 0) == 0;
 do {
  if (!i15) {
   i12 = i32 + 4 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i13 + 1;
   i12 = i32 + 4 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i12 >> 2] = i13;
    break;
   }
   i13 = i12 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 31](i13);
  }
 } while (0);
 do {
  if ((__ZNK7WebCore19ResourceRequestBase8httpBodyEv(i51) | 0) != 0) {
   if ((HEAP32[(__ZNK7WebCore19ResourceRequestBase8httpBodyEv(i51) | 0) + 12 >> 2] | 0) == 0) {
    break;
   }
   __ZNK7WebCore8FormData15flattenToStringEv(i25, __ZNK7WebCore19ResourceRequestBase8httpBodyEv(i51) | 0);
   HEAP32[i11 >> 2] = H_BASE + 168;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i10, i11);
   __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i9, i25);
   i13 = i8 | 0;
   i12 = i9 | 0;
   i24 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i13 >> 2] = i24;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i1, i10, i8);
   i24 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     i13 = i24 + 4 | 0;
     i19 = i13 | 0;
     i17 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     if ((i17 | 0) != 0) {
      HEAP32[i19 >> 2] = i17;
      break;
     }
     i17 = i13 - 4 | 0;
     if ((i17 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 31](i17);
    }
   } while (0);
   i24 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     i17 = i24 + 4 | 0;
     i13 = i17 | 0;
     i19 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) != 0) {
      HEAP32[i13 >> 2] = i19;
      break;
     }
     i19 = i17 - 4 | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 31](i19);
    }
   } while (0);
   i24 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     i12 = i24 | 0;
     i19 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i24);
      break;
     } else {
      HEAP32[i12 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i24 = HEAP32[i25 >> 2] | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   i19 = i24 | 0;
   i12 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i24);
    break;
   } else {
    HEAP32[i19 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i25 = i37 | 0;
 HEAP32[i25 >> 2] = i14;
 do {
  if (!i15) {
   i14 = i32 + 4 | 0;
   i10 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = i10 + 1;
   i14 = i32 + 4 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i14 >> 2] = i10;
    break;
   }
   i10 = i14 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
  }
 } while (0);
 d53 = +__ZN3WTF11currentTimeEv();
 i32 = i38 | 0;
 HEAP32[i32 >> 2] = i34;
 i15 = (i34 | 0) == 0;
 if (!i15) {
  i10 = i34 + 4 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 __ZN7WebCoreL30buildObjectForResourceResponseERKNS_16ResourceResponseEPNS_14DocumentLoaderE(i39, i5, i3);
 __ZN9Inspector34InspectorNetworkFrontendDispatcher17requestWillBeSentERKN3WTF6StringES4_S4_S4_NS1_10PassRefPtrINS_11TypeBuilder7Network7RequestEEEdNS5_INS7_9InitiatorEEENS5_INS7_8ResponseEEEPNS6_4Page12ResourceType4EnumE(i52, i26, i35, i36, i41, i37, d53, i38, i39, (i45 | 0) != 7 ? i33 : 0);
 i33 = HEAP32[i39 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i39 = i33 + 4 | 0;
   i45 = i39 | 0;
   i38 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
   if ((i38 | 0) != 0) {
    HEAP32[i45 >> 2] = i38;
    break;
   }
   i38 = i39 - 4 | 0;
   if ((i38 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i38 >> 2] | 0) + 4 >> 2] & 31](i38);
  }
 } while (0);
 i33 = HEAP32[i32 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i32 = i33 + 4 | 0;
   i38 = i32 | 0;
   i39 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
   if ((i39 | 0) != 0) {
    HEAP32[i38 >> 2] = i39;
    break;
   }
   i39 = i32 - 4 | 0;
   if ((i39 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i39 >> 2] | 0) + 4 >> 2] & 31](i39);
  }
 } while (0);
 i33 = HEAP32[i25 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i25 = i33 + 4 | 0;
   i39 = i25 | 0;
   i32 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
   if ((i32 | 0) != 0) {
    HEAP32[i39 >> 2] = i32;
    break;
   }
   i32 = i25 - 4 | 0;
   if ((i32 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i32 >> 2] | 0) + 4 >> 2] & 31](i32);
  }
 } while (0);
 i33 = HEAP32[i36 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i36 = i33 | 0;
   i32 = (HEAP32[i36 >> 2] | 0) - 2 | 0;
   if ((i32 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i33);
    break;
   } else {
    HEAP32[i36 >> 2] = i32;
    break;
   }
  }
 } while (0);
 i33 = HEAP32[i35 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i35 = i33 | 0;
   i32 = (HEAP32[i35 >> 2] | 0) - 2 | 0;
   if ((i32 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i33);
    break;
   } else {
    HEAP32[i35 >> 2] = i32;
    break;
   }
  }
 } while (0);
 do {
  if (!i15) {
   i33 = i34 + 4 | 0;
   i32 = i33 | 0;
   i35 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
   if ((i35 | 0) != 0) {
    HEAP32[i32 >> 2] = i35;
    break;
   }
   i35 = i33 - 4 | 0;
   if ((i35 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i35 >> 2] | 0) + 4 >> 2] & 31](i35);
  }
 } while (0);
 i34 = HEAP32[i26 >> 2] | 0;
 if ((i34 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i26 = i34 | 0;
 i15 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
 if ((i15 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i34);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i26 >> 2] = i15;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore22InspectorResourceAgent30didLoadResourceFromMemoryCacheEPNS_14DocumentLoaderEPNS_14CachedResourceE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, d37 = +0, d38 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 208 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 i24 = i4 + 152 | 0;
 i25 = i4 + 160 | 0;
 i26 = i4 + 168 | 0;
 i27 = i4 + 176 | 0;
 i28 = i4 + 184 | 0;
 i29 = i4 + 192 | 0;
 i30 = i4 + 200 | 0;
 i31 = i1 + 16 | 0;
 __ZN7WebCore18InspectorPageAgent8loaderIdEPNS_14DocumentLoaderE(i24, HEAP32[i31 >> 2] | 0, i2);
 i32 = i2 + 12 | 0;
 __ZN7WebCore18InspectorPageAgent7frameIdEPNS_5FrameE(i25, HEAP32[i31 >> 2] | 0, HEAP32[i32 >> 2] | 0);
 __ZN7WebCore18IdentifiersFactory9requestIdEm(i26, __ZN7WebCore15ProgressTracker22createUniqueIdentifierEv() | 0);
 i31 = i1 + 32 | 0;
 __ZN7WebCore20NetworkResourcesData15resourceCreatedERKN3WTF6StringES4_(HEAP32[i31 >> 2] | 0, i26, i24);
 __ZN7WebCore20NetworkResourcesData17addCachedResourceERKN3WTF6StringEPNS_14CachedResourceE(HEAP32[i31 >> 2] | 0, i26, i3);
 do {
  if ((HEAP32[i3 + 588 >> 2] & 1920 | 0) == 640) {
   __ZN7WebCore18IdentifiersFactory9requestIdEm(i27, HEAP32[i3 + 640 >> 2] | 0);
   __ZN7WebCore20NetworkResourcesData18reuseXHRReplayDataERKN3WTF6StringES4_(HEAP32[i31 >> 2] | 0, i26, i27);
   i33 = HEAP32[i27 >> 2] | 0;
   if ((i33 | 0) == 0) {
    break;
   }
   i34 = i33 | 0;
   i35 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
   if ((i35 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i33);
    break;
   } else {
    HEAP32[i34 >> 2] = i35;
    break;
   }
  }
 } while (0);
 i27 = HEAP32[i32 >> 2] | 0;
 if ((i27 | 0) == 0) {
  i36 = 0;
 } else {
  i36 = HEAP32[i27 + 456 >> 2] | 0;
 }
 __ZN7WebCore22InspectorResourceAgent20buildInitiatorObjectEPNS_8DocumentE(i28, i1, i36);
 i36 = i28 | 0;
 i28 = HEAP32[i36 >> 2] | 0;
 HEAP32[i36 >> 2] = 0;
 i36 = HEAP32[i1 + 24 >> 2] | 0;
 i1 = __ZNK7WebCore14DocumentLoader3urlEv(i2) | 0;
 d37 = +__ZN3WTF11currentTimeEv();
 i27 = i29 | 0;
 HEAP32[i27 >> 2] = i28;
 i32 = (i28 | 0) == 0;
 if (!i32) {
  i31 = i28 + 4 | 0;
  HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
 }
 __ZN9Inspector15InspectorObject6createEv(i20);
 i31 = i21 | 0;
 i35 = HEAP32[i20 >> 2] | 0;
 HEAP32[i31 >> 2] = i35;
 i20 = __ZNK7WebCore19ResourceRequestBase3urlEv(i3 + 48 | 0) | 0;
 HEAP32[i19 >> 2] = H_BASE + 560;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i18, i19);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i17, i20);
 i20 = i16 | 0;
 i19 = i17 | 0;
 i17 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 HEAP32[i20 >> 2] = i17;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i35 | 0, i18, i16);
 i16 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i20 = i16 + 4 | 0;
   i35 = i20 | 0;
   i17 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) != 0) {
    HEAP32[i35 >> 2] = i17;
    break;
   }
   i17 = i20 - 4 | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 31](i17);
  }
 } while (0);
 i16 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i19 = i16 + 4 | 0;
   i17 = i19 | 0;
   i20 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i17 >> 2] = i20;
    break;
   }
   i20 = i19 - 4 | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 31](i20);
  }
 } while (0);
 i16 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i18 = i16 | 0;
   i20 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    break;
   } else {
    HEAP32[i18 >> 2] = i20;
    break;
   }
  }
 } while (0);
 i16 = __ZN9Inspector11TypeBuilder7Network14CachedResource7BuilderILi1EE7setTypeENS0_4Page12ResourceType4EnumE(i21, __ZN7WebCore18InspectorPageAgent22cachedResourceTypeJsonERKNS_14CachedResourceE(i3) | 0) | 0;
 d38 = +((HEAP32[i3 + 568 >> 2] | 0) >>> 0 >>> 0);
 i21 = HEAP32[i16 >> 2] | 0;
 HEAP32[i15 >> 2] = H_BASE + 480;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector19InspectorBasicValue6createEd(i13, d38);
 i15 = i12 | 0;
 i20 = i13 | 0;
 i13 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 HEAP32[i15 >> 2] = i13;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i21, i14, i12);
 i12 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i15 = i12 + 4 | 0;
   i21 = i15 | 0;
   i13 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i21 >> 2] = i13;
    break;
   }
   i13 = i15 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 31](i13);
  }
 } while (0);
 i12 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i20 = i12 + 4 | 0;
   i13 = i20 | 0;
   i15 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i13 >> 2] = i15;
    break;
   }
   i15 = i20 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 31](i15);
  }
 } while (0);
 i12 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i14 = i12 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i16 >> 2] | 0;
 i16 = (i12 | 0) == 0;
 if (!i16) {
  i15 = i12 + 4 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 }
 i15 = HEAP32[i31 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i31 = i15 + 4 | 0;
   i14 = i31 | 0;
   i20 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i14 >> 2] = i20;
    break;
   }
   i20 = i31 - 4 | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 31](i20);
  }
 } while (0);
 __ZN7WebCoreL30buildObjectForResourceResponseERKNS_16ResourceResponseEPNS_14DocumentLoaderE(i22, i3 + 272 | 0, i2);
 i2 = i22 | 0;
 i22 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = (i22 | 0) == 0;
 do {
  if (!i2) {
   i15 = i22 + 4 | 0;
   HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
   HEAP32[i10 >> 2] = H_BASE + 512;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
   i15 = i11 | 0;
   HEAP32[i15 >> 2] = i22;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i12 | 0, i9, i11);
   i20 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i15 = i20 + 4 | 0;
     i31 = i15 | 0;
     i14 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
     if ((i14 | 0) != 0) {
      HEAP32[i31 >> 2] = i14;
      break;
     }
     i14 = i15 - 4 | 0;
     if ((i14 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 31](i14);
    }
   } while (0);
   i20 = HEAP32[i9 >> 2] | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   i14 = i20 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 __ZN7WebCore18InspectorPageAgent23sourceMapURLForResourceEPNS_14CachedResourceE(i23, i3);
 i3 = i23 | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   if ((HEAP32[i9 + 4 >> 2] | 0) == 0) {
    break;
   }
   HEAP32[i8 >> 2] = H_BASE + 528;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i7, i8);
   __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i6, i23);
   i11 = i5 | 0;
   i10 = i6 | 0;
   i15 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i11 >> 2] = i15;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i12 | 0, i7, i5);
   i15 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i11 = i15 + 4 | 0;
     i14 = i11 | 0;
     i20 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i20 | 0) != 0) {
      HEAP32[i14 >> 2] = i20;
      break;
     }
     i20 = i11 - 4 | 0;
     if ((i20 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 31](i20);
    }
   } while (0);
   i15 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i20 = i15 + 4 | 0;
     i11 = i20 | 0;
     i14 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     if ((i14 | 0) != 0) {
      HEAP32[i11 >> 2] = i14;
      break;
     }
     i14 = i20 - 4 | 0;
     if ((i14 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 31](i14);
    }
   } while (0);
   i15 = HEAP32[i7 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   i10 = i15 | 0;
   i14 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i10 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i7 = i30 | 0;
 HEAP32[i7 >> 2] = i12;
 if (!i16) {
  i5 = i12 + 4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i6;
    break;
   }
  }
 } while (0);
 do {
  if (!i2) {
   i5 = i22 + 4 | 0;
   i6 = i5 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i6 >> 2] = i3;
    break;
   }
   i3 = i5 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
  }
 } while (0);
 do {
  if (!i16) {
   i22 = i12 + 4 | 0;
   i2 = i22 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i2 >> 2] = i3;
    break;
   }
   i3 = i22 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
  }
 } while (0);
 __ZN9Inspector34InspectorNetworkFrontendDispatcher28requestServedFromMemoryCacheERKN3WTF6StringES4_S4_S4_dNS1_10PassRefPtrINS_11TypeBuilder7Network9InitiatorEEENS5_INS7_14CachedResourceEEE(i36, i26, i25, i24, i1, d37, i29, i30);
 i30 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i30 | 0) != 0) {
   i7 = i30 + 4 | 0;
   i29 = i7 | 0;
   i1 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i29 >> 2] = i1;
    break;
   }
   i1 = i7 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
  }
 } while (0);
 i30 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i30 | 0) != 0) {
   i27 = i30 + 4 | 0;
   i1 = i27 | 0;
   i7 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i1 >> 2] = i7;
    break;
   }
   i7 = i27 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
  }
 } while (0);
 do {
  if (!i32) {
   i30 = i28 + 4 | 0;
   i7 = i30 | 0;
   i27 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i27 | 0) != 0) {
    HEAP32[i7 >> 2] = i27;
    break;
   }
   i27 = i30 - 4 | 0;
   if ((i27 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i27 >> 2] | 0) + 4 >> 2] & 31](i27);
  }
 } while (0);
 i28 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i28 | 0) != 0) {
   i26 = i28 | 0;
   i32 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
   if ((i32 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i28);
    break;
   } else {
    HEAP32[i26 >> 2] = i32;
    break;
   }
  }
 } while (0);
 i28 = HEAP32[i25 >> 2] | 0;
 do {
  if ((i28 | 0) != 0) {
   i25 = i28 | 0;
   i32 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
   if ((i32 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i28);
    break;
   } else {
    HEAP32[i25 >> 2] = i32;
    break;
   }
  }
 } while (0);
 i28 = HEAP32[i24 >> 2] | 0;
 if ((i28 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i24 = i28 | 0;
 i32 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
 if ((i32 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i28);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i24 >> 2] = i32;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore22InspectorResourceAgent20buildInitiatorObjectEPNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, d34 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 i24 = i4 + 152 | 0;
 __ZN7WebCore21createScriptCallStackEjb(i19, 200, 1);
 i25 = i19 | 0;
 i19 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = 0;
 i25 = (i19 | 0) == 0;
 do {
  if (i25) {
   i26 = 29;
  } else {
   if ((__ZNK7WebCore15ScriptCallStack4sizeEv(i19) | 0) == 0) {
    i26 = 29;
    break;
   }
   __ZN9Inspector15InspectorObject6createEv(i18);
   i27 = i20 | 0;
   HEAP32[i27 >> 2] = HEAP32[i18 >> 2];
   i28 = HEAP32[(__ZN9Inspector11TypeBuilder7Network9Initiator7BuilderILi0EE7setTypeENS2_4Type4EnumE(i20, 60) | 0) >> 2] | 0;
   i29 = (i28 | 0) == 0;
   if (!i29) {
    i30 = i28 + 4 | 0;
    HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
   }
   i30 = HEAP32[i27 >> 2] | 0;
   do {
    if ((i30 | 0) != 0) {
     i27 = i30 + 4 | 0;
     i31 = i27 | 0;
     i32 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
     if ((i32 | 0) != 0) {
      HEAP32[i31 >> 2] = i32;
      break;
     }
     i32 = i27 - 4 | 0;
     if ((i32 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i32 >> 2] | 0) + 4 >> 2] & 31](i32);
    }
   } while (0);
   __ZNK7WebCore15ScriptCallStack19buildInspectorArrayEv(i21, i19);
   HEAP32[i16 >> 2] = H_BASE + 544;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i15, i16);
   i30 = i17 | 0;
   i32 = i21 | 0;
   i27 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = 0;
   HEAP32[i30 >> 2] = i27;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i28 | 0, i15, i17);
   i27 = HEAP32[i30 >> 2] | 0;
   do {
    if ((i27 | 0) != 0) {
     i30 = i27 + 4 | 0;
     i31 = i30 | 0;
     i33 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
     if ((i33 | 0) != 0) {
      HEAP32[i31 >> 2] = i33;
      break;
     }
     i33 = i30 - 4 | 0;
     if ((i33 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i33 >> 2] | 0) + 4 >> 2] & 31](i33);
    }
   } while (0);
   i27 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i27 | 0) != 0) {
     i33 = i27 | 0;
     i30 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
     if ((i30 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i27);
      break;
     } else {
      HEAP32[i33 >> 2] = i30;
      break;
     }
    }
   } while (0);
   i27 = HEAP32[i32 >> 2] | 0;
   do {
    if ((i27 | 0) != 0) {
     i30 = i27 + 4 | 0;
     i33 = i30 | 0;
     i31 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
     if ((i31 | 0) != 0) {
      HEAP32[i33 >> 2] = i31;
      break;
     }
     i31 = i30 - 4 | 0;
     if ((i31 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] & 31](i31);
    }
   } while (0);
   HEAP32[i1 >> 2] = i28;
   if (i29) {
    break;
   }
   i27 = i28 + 4 | 0;
   i32 = HEAP32[i27 >> 2] | 0;
   HEAP32[i27 >> 2] = i32 + 1;
   i27 = i28 + 4 | 0;
   if ((i32 | 0) != 0) {
    HEAP32[i27 >> 2] = i32;
    break;
   }
   i32 = i27 - 4 | 0;
   if ((i32 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i32 >> 2] | 0) + 4 >> 2] & 31](i32);
  }
 } while (0);
 L39 : do {
  if ((i26 | 0) == 29) {
   do {
    if ((i3 | 0) != 0) {
     if ((__ZNK7WebCore8Document24scriptableDocumentParserEv(i3) | 0) == 0) {
      break;
     }
     __ZN9Inspector15InspectorObject6createEv(i14);
     i15 = i22 | 0;
     HEAP32[i15 >> 2] = HEAP32[i14 >> 2];
     i17 = HEAP32[(__ZN9Inspector11TypeBuilder7Network9Initiator7BuilderILi0EE7setTypeENS2_4Type4EnumE(i22, 59) | 0) >> 2] | 0;
     i21 = (i17 | 0) == 0;
     if (!i21) {
      i16 = i17 + 4 | 0;
      HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
     }
     i16 = HEAP32[i15 >> 2] | 0;
     do {
      if ((i16 | 0) != 0) {
       i15 = i16 + 4 | 0;
       i20 = i15 | 0;
       i18 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
       if ((i18 | 0) != 0) {
        HEAP32[i20 >> 2] = i18;
        break;
       }
       i18 = i15 - 4 | 0;
       if ((i18 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 31](i18);
      }
     } while (0);
     i16 = i17 | 0;
     HEAP32[i12 >> 2] = H_BASE + 560;
     __ZN3WTF6StringC1ENS_12ASCIILiteralE(i11, i12);
     __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i10, i3 + 356 | 0);
     i18 = i9 | 0;
     i15 = i10 | 0;
     i20 = HEAP32[i15 >> 2] | 0;
     HEAP32[i15 >> 2] = 0;
     HEAP32[i18 >> 2] = i20;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i16, i11, i9);
     i20 = HEAP32[i18 >> 2] | 0;
     do {
      if ((i20 | 0) != 0) {
       i18 = i20 + 4 | 0;
       i32 = i18 | 0;
       i27 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
       if ((i27 | 0) != 0) {
        HEAP32[i32 >> 2] = i27;
        break;
       }
       i27 = i18 - 4 | 0;
       if ((i27 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i27 >> 2] | 0) + 4 >> 2] & 31](i27);
      }
     } while (0);
     i20 = HEAP32[i15 >> 2] | 0;
     do {
      if ((i20 | 0) != 0) {
       i27 = i20 + 4 | 0;
       i18 = i27 | 0;
       i32 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
       if ((i32 | 0) != 0) {
        HEAP32[i18 >> 2] = i32;
        break;
       }
       i32 = i27 - 4 | 0;
       if ((i32 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i32 >> 2] | 0) + 4 >> 2] & 31](i32);
      }
     } while (0);
     i20 = HEAP32[i11 >> 2] | 0;
     do {
      if ((i20 | 0) != 0) {
       i15 = i20 | 0;
       i32 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
       if ((i32 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i20);
        break;
       } else {
        HEAP32[i15 >> 2] = i32;
        break;
       }
      }
     } while (0);
     i20 = __ZNK7WebCore8Document24scriptableDocumentParserEv(i3) | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i20 >> 2] | 0) + 84 >> 2] & 31](i23, i20);
     d34 = +((HEAP32[i23 >> 2] | 0) + 1 | 0);
     HEAP32[i8 >> 2] = H_BASE + 568;
     __ZN3WTF6StringC1ENS_12ASCIILiteralE(i7, i8);
     __ZN9Inspector19InspectorBasicValue6createEd(i6, d34);
     i20 = i5 | 0;
     i32 = i6 | 0;
     i15 = HEAP32[i32 >> 2] | 0;
     HEAP32[i32 >> 2] = 0;
     HEAP32[i20 >> 2] = i15;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i16, i7, i5);
     i15 = HEAP32[i20 >> 2] | 0;
     do {
      if ((i15 | 0) != 0) {
       i20 = i15 + 4 | 0;
       i27 = i20 | 0;
       i18 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
       if ((i18 | 0) != 0) {
        HEAP32[i27 >> 2] = i18;
        break;
       }
       i18 = i20 - 4 | 0;
       if ((i18 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 31](i18);
      }
     } while (0);
     i15 = HEAP32[i32 >> 2] | 0;
     do {
      if ((i15 | 0) != 0) {
       i16 = i15 + 4 | 0;
       i18 = i16 | 0;
       i20 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
       if ((i20 | 0) != 0) {
        HEAP32[i18 >> 2] = i20;
        break;
       }
       i20 = i16 - 4 | 0;
       if ((i20 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 31](i20);
      }
     } while (0);
     i15 = HEAP32[i7 >> 2] | 0;
     do {
      if ((i15 | 0) != 0) {
       i32 = i15 | 0;
       i20 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
       if ((i20 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i15);
        break;
       } else {
        HEAP32[i32 >> 2] = i20;
        break;
       }
      }
     } while (0);
     HEAP32[i1 >> 2] = i17;
     if (i21) {
      break L39;
     }
     i15 = i17 + 4 | 0;
     i20 = HEAP32[i15 >> 2] | 0;
     HEAP32[i15 >> 2] = i20 + 1;
     i15 = i17 + 4 | 0;
     if ((i20 | 0) != 0) {
      HEAP32[i15 >> 2] = i20;
      break L39;
     }
     i20 = i15 - 4 | 0;
     if ((i20 | 0) == 0) {
      break L39;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 31](i20);
     break L39;
    }
   } while (0);
   do {
    if ((HEAP8[i2 + 68 | 0] & 1) != 0) {
     i28 = HEAP32[i2 + 64 >> 2] | 0;
     if ((i28 | 0) == 0) {
      break;
     }
     HEAP32[i1 >> 2] = i28;
     i29 = i28 + 4 | 0;
     HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
     break L39;
    }
   } while (0);
   __ZN9Inspector15InspectorObject6createEv(i13);
   i29 = i24 | 0;
   HEAP32[i29 >> 2] = HEAP32[i13 >> 2];
   i28 = HEAP32[(__ZN9Inspector11TypeBuilder7Network9Initiator7BuilderILi0EE7setTypeENS2_4Type4EnumE(i24, 34) | 0) >> 2] | 0;
   if ((i28 | 0) != 0) {
    i20 = i28 + 4 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
   }
   HEAP32[i1 >> 2] = i28;
   i28 = HEAP32[i29 >> 2] | 0;
   if ((i28 | 0) == 0) {
    break;
   }
   i29 = i28 + 4 | 0;
   i28 = i29 | 0;
   i20 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i28 >> 2] = i20;
    break;
   }
   i20 = i29 - 4 | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 31](i20);
  }
 } while (0);
 if (i25) {
  STACKTOP = i4;
  return;
 }
 i25 = i19 | 0;
 i1 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore15ScriptCallStackD1Ev(i19);
  __ZN3WTF8fastFreeEPv(i19);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i25 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore22InspectorResourceAgent18didReceiveResponseEmPNS_14DocumentLoaderERKNS_16ResourceResponseEPNS_14ResourceLoaderE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, d29 = +0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 i14 = i6 + 56 | 0;
 i15 = i6 + 64 | 0;
 i16 = i6 + 72 | 0;
 __ZN7WebCore18IdentifiersFactory9requestIdEm(i10, i2);
 __ZN7WebCoreL30buildObjectForResourceResponseERKNS_16ResourceResponseEPNS_14DocumentLoaderE(i11, i4, i3);
 i17 = i11 | 0;
 i11 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = 0;
 i17 = i4 | 0;
 i18 = (__ZNK7WebCore20ResourceResponseBase14httpStatusCodeEv(i17) | 0) == 304;
 do {
  if ((i5 | 0) == 0) {
   i19 = 4;
  } else {
   if (i18 | (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 92 >> 2] & 1](i5) | 0) ^ 1) {
    i19 = 4;
    break;
   }
   i20 = __ZN7WebCore17SubresourceLoader14cachedResourceEv(i5) | 0;
   if ((i20 | 0) == 0) {
    i19 = 4;
   } else {
    i21 = i20;
    i19 = 5;
   }
  }
 } while (0);
 do {
  if ((i19 | 0) == 4) {
   i5 = HEAP32[i3 + 12 >> 2] | 0;
   i20 = __ZN7WebCore18InspectorPageAgent14cachedResourceEPNS_5FrameERKNS_3URLE(i5, __ZNK7WebCore20ResourceResponseBase3urlEv(i17) | 0) | 0;
   if ((i20 | 0) != 0) {
    i21 = i20;
    i19 = 5;
    break;
   }
   i20 = i1 + 32 | 0;
   i22 = __ZN7WebCore20NetworkResourcesData12resourceTypeERKN3WTF6StringE(HEAP32[i20 >> 2] | 0, i10) | 0;
   i23 = 0;
   i24 = 0;
   i25 = i20;
  }
 } while (0);
 do {
  if ((i19 | 0) == 5) {
   do {
    if ((i11 | 0) != 0) {
     i20 = HEAP32[(__ZNK7WebCore20ResourceResponseBase8mimeTypeEv(i17) | 0) >> 2] | 0;
     if ((i20 | 0) != 0) {
      if ((HEAP32[i20 + 4 >> 2] | 0) != 0) {
       break;
      }
     }
     __ZN3WTF6StringC1EPKc(i12, HEAP32[__ZN9Inspector11TypeBuilder7Network8Response8MimeTypeE >> 2] | 0);
     i20 = __ZNK7WebCore20ResourceResponseBase8mimeTypeEv(i21 + 272 | 0) | 0;
     __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i8, i20);
     i20 = i7 | 0;
     i5 = i8 | 0;
     i26 = HEAP32[i5 >> 2] | 0;
     HEAP32[i5 >> 2] = 0;
     HEAP32[i20 >> 2] = i26;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i11 | 0, i12, i7);
     i26 = HEAP32[i20 >> 2] | 0;
     do {
      if ((i26 | 0) != 0) {
       i20 = i26 + 4 | 0;
       i27 = i20 | 0;
       i28 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
       if ((i28 | 0) != 0) {
        HEAP32[i27 >> 2] = i28;
        break;
       }
       i28 = i20 - 4 | 0;
       if ((i28 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 31](i28);
      }
     } while (0);
     i26 = HEAP32[i5 >> 2] | 0;
     do {
      if ((i26 | 0) != 0) {
       i28 = i26 + 4 | 0;
       i20 = i28 | 0;
       i27 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
       if ((i27 | 0) != 0) {
        HEAP32[i20 >> 2] = i27;
        break;
       }
       i27 = i28 - 4 | 0;
       if ((i27 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i27 >> 2] | 0) + 4 >> 2] & 31](i27);
      }
     } while (0);
     i26 = HEAP32[i12 >> 2] | 0;
     if ((i26 | 0) == 0) {
      break;
     }
     i5 = i26 | 0;
     i27 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
     if ((i27 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i26);
      break;
     } else {
      HEAP32[i5 >> 2] = i27;
      break;
     }
    }
   } while (0);
   i27 = i1 + 32 | 0;
   __ZN7WebCore20NetworkResourcesData17addCachedResourceERKN3WTF6StringEPNS_14CachedResourceE(HEAP32[i27 >> 2] | 0, i10, i21);
   i5 = __ZN7WebCore20NetworkResourcesData12resourceTypeERKN3WTF6StringE(HEAP32[i27 >> 2] | 0, i10) | 0;
   i26 = __ZN7WebCore18InspectorPageAgent18cachedResourceTypeERKNS_14CachedResourceE(i21) | 0;
   if ((i5 | 0) == (i26 | 0)) {
    i22 = i5;
    i23 = i21;
    i24 = 1;
    i25 = i27;
    break;
   }
   if ((i26 | 0) == 7 | (i26 | 0) == 5) {
    i22 = i5;
    i23 = i21;
    i24 = 1;
    i25 = i27;
    break;
   }
   i22 = i26;
   i23 = i21;
   i24 = 1;
   i25 = i27;
  }
 } while (0);
 i21 = HEAP32[i25 >> 2] | 0;
 i12 = i1 + 16 | 0;
 i7 = i3 + 12 | 0;
 __ZN7WebCore18InspectorPageAgent7frameIdEPNS_5FrameE(i13, HEAP32[i12 >> 2] | 0, HEAP32[i7 >> 2] | 0);
 __ZN7WebCore20NetworkResourcesData16responseReceivedERKN3WTF6StringES4_RKNS_16ResourceResponseE(i21, i10, i13, i4);
 i4 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i13 = i4 | 0;
   i21 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i13 >> 2] = i21;
    break;
   }
  }
 } while (0);
 __ZN7WebCore20NetworkResourcesData15setResourceTypeERKN3WTF6StringENS_18InspectorPageAgent12ResourceTypeE(HEAP32[i25 >> 2] | 0, i10, i22);
 i25 = i1 + 24 | 0;
 i1 = HEAP32[i25 >> 2] | 0;
 __ZN7WebCore18InspectorPageAgent7frameIdEPNS_5FrameE(i14, HEAP32[i12 >> 2] | 0, HEAP32[i7 >> 2] | 0);
 __ZN7WebCore18InspectorPageAgent8loaderIdEPNS_14DocumentLoaderE(i15, HEAP32[i12 >> 2] | 0, i3);
 d29 = +__ZN3WTF11currentTimeEv();
 i3 = __ZN7WebCore18InspectorPageAgent16resourceTypeJsonENS0_12ResourceTypeE(i22) | 0;
 i22 = i16 | 0;
 HEAP32[i22 >> 2] = i11;
 i12 = (i11 | 0) == 0;
 if (!i12) {
  i7 = i11 + 4 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 __ZN9Inspector34InspectorNetworkFrontendDispatcher16responseReceivedERKN3WTF6StringES4_S4_dNS_11TypeBuilder4Page12ResourceType4EnumENS1_10PassRefPtrINS5_7Network8ResponseEEE(i1, i10, i14, i15, d29, i3, i16);
 i16 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i22 = i16 + 4 | 0;
   i3 = i22 | 0;
   i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i3 >> 2] = i1;
    break;
   }
   i1 = i22 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
  }
 } while (0);
 i16 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i15 = i16 | 0;
   i1 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    break;
   } else {
    HEAP32[i15 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i16 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i14 = i16 | 0;
   i1 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    break;
   } else {
    HEAP32[i14 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (i18 & i24) {
   i16 = HEAP32[i23 + 568 >> 2] | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   __ZN7WebCore18IdentifiersFactory9requestIdEm(i9, i2);
   i1 = HEAP32[i25 >> 2] | 0;
   __ZN9Inspector34InspectorNetworkFrontendDispatcher12dataReceivedERKN3WTF6StringEdii(i1, i9, +__ZN3WTF11currentTimeEv(), i16, 0);
   i16 = HEAP32[i9 >> 2] | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   i1 = i16 | 0;
   i14 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    break;
   } else {
    HEAP32[i1 >> 2] = i14;
    break;
   }
  }
 } while (0);
 do {
  if (!i12) {
   i9 = i11 + 4 | 0;
   i25 = i9 | 0;
   i2 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i25 >> 2] = i2;
    break;
   }
   i2 = i9 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
  }
 } while (0);
 i11 = HEAP32[i10 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i10 = i11 | 0;
 i12 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
 if ((i12 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i11);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i10 >> 2] = i12;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore22InspectorResourceAgent36didReceiveWebSocketHandshakeResponseEmRKNS_16ResourceResponseE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, d21 = +0, i22 = 0, i23 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 __ZN9Inspector15InspectorObject6createEv(i16);
 i20 = HEAP32[i16 >> 2] | 0;
 i16 = i3 | 0;
 d21 = +(__ZNK7WebCore20ResourceResponseBase14httpStatusCodeEv(i16) | 0);
 i3 = i20 | 0;
 HEAP32[i15 >> 2] = H_BASE + 600;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector19InspectorBasicValue6createEd(i13, d21);
 i15 = i12 | 0;
 i22 = i13 | 0;
 i13 = HEAP32[i22 >> 2] | 0;
 HEAP32[i22 >> 2] = 0;
 HEAP32[i15 >> 2] = i13;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i3, i14, i12);
 i12 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i15 = i12 + 4 | 0;
   i13 = i15 | 0;
   i23 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i23 | 0) != 0) {
    HEAP32[i13 >> 2] = i23;
    break;
   }
   i23 = i15 - 4 | 0;
   if ((i23 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 31](i23);
  }
 } while (0);
 i12 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i22 = i12 + 4 | 0;
   i23 = i22 | 0;
   i15 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i23 >> 2] = i15;
    break;
   }
   i15 = i22 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 31](i15);
  }
 } while (0);
 i12 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i14 = i12 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i12 = __ZNK7WebCore20ResourceResponseBase14httpStatusTextEv(i16) | 0;
 HEAP32[i11 >> 2] = H_BASE + 608;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i10, i11);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i9, i12);
 i12 = i8 | 0;
 i11 = i9 | 0;
 i9 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i12 >> 2] = i9;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i3, i10, i8);
 i8 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i12 = i8 + 4 | 0;
   i9 = i12 | 0;
   i15 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i9 >> 2] = i15;
    break;
   }
   i15 = i12 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 31](i15);
  }
 } while (0);
 i8 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i11 = i8 + 4 | 0;
   i15 = i11 | 0;
   i12 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i15 >> 2] = i12;
    break;
   }
   i12 = i11 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 31](i12);
  }
 } while (0);
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i10 = i8 | 0;
   i12 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i10 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN7WebCoreL21buildObjectForHeadersERKNS_13HTTPHeaderMapE(i17, __ZNK7WebCore20ResourceResponseBase16httpHeaderFieldsEv(i16) | 0);
 HEAP32[i6 >> 2] = H_BASE + 624;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i5, i6);
 i6 = i7 | 0;
 i16 = i17 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i6 >> 2] = i17;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i3, i5, i7);
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 + 4 | 0;
   i3 = i6 | 0;
   i17 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) != 0) {
    HEAP32[i3 >> 2] = i17;
    break;
   }
   i17 = i6 - 4 | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 31](i17);
  }
 } while (0);
 i7 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i5 = i7 | 0;
   i17 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i5 >> 2] = i17;
    break;
   }
  }
 } while (0);
 i7 = i20;
 i17 = (i20 | 0) == 0;
 do {
  if (!i17) {
   i5 = i20 + 4 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
   i5 = i20 + 4 | 0;
   i6 = i5 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i6 >> 2] = i3;
    break;
   }
   i3 = i5 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
  }
 } while (0);
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 __ZN7WebCore18IdentifiersFactory9requestIdEm(i18, i2);
 d21 = +__ZN3WTF11currentTimeEv();
 i2 = i19 | 0;
 HEAP32[i2 >> 2] = i7;
 if (!i17) {
  i7 = i20 + 4 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 __ZN9Inspector34InspectorNetworkFrontendDispatcher34webSocketHandshakeResponseReceivedERKN3WTF6StringEdNS1_10PassRefPtrINS_11TypeBuilder7Network17WebSocketResponseEEE(i3, i18, d21, i19);
 i19 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i2 = i19 + 4 | 0;
   i3 = i2 | 0;
   i7 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i3 >> 2] = i7;
    break;
   }
   i7 = i2 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
  }
 } while (0);
 i19 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i18 = i19 | 0;
   i7 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i18 >> 2] = i7;
    break;
   }
  }
 } while (0);
 if (i17) {
  STACKTOP = i4;
  return;
 }
 i17 = i20 + 4 | 0;
 i20 = i17 | 0;
 i19 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
 if ((i19 | 0) != 0) {
  HEAP32[i20 >> 2] = i19;
  STACKTOP = i4;
  return;
 }
 i19 = i17 - 4 | 0;
 if ((i19 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 31](i19);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22InspectorResourceAgent15getResponseBodyEPN3WTF6StringERKS2_S3_Pb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = __ZN7WebCore20NetworkResourcesData4dataERKN3WTF6StringE(HEAP32[i1 + 32 >> 2] | 0, i3) | 0;
 if ((i12 | 0) == 0) {
  __ZN3WTF6StringC1EPKc(i7, H_BASE + 312 | 0);
  i3 = i7 | 0;
  i7 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  i1 = i2 | 0;
  i13 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = i7;
  do {
   if ((i13 | 0) != 0) {
    i7 = i13 | 0;
    i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
    if ((i1 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i13);
     break;
    } else {
     HEAP32[i7 >> 2] = i1;
     break;
    }
   }
  } while (0);
  i13 = HEAP32[i3 >> 2] | 0;
  if ((i13 | 0) == 0) {
   STACKTOP = i6;
   return;
  }
  i3 = i13 | 0;
  i1 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
  if ((i1 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i13);
   STACKTOP = i6;
   return;
  } else {
   HEAP32[i3 >> 2] = i1;
   STACKTOP = i6;
   return;
  }
 }
 i1 = i12 + 16 | 0;
 if ((HEAP32[i1 >> 2] | 0) != 0) {
  HEAP8[i5] = HEAP8[i12 + 24 | 0] & 1;
  i3 = HEAP32[i1 >> 2] | 0;
  if ((i3 | 0) != 0) {
   i1 = i3 | 0;
   HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
  }
  i1 = i4 | 0;
  i13 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = i3;
  if ((i13 | 0) == 0) {
   STACKTOP = i6;
   return;
  }
  i3 = i13 | 0;
  i1 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
  if ((i1 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i13);
   STACKTOP = i6;
   return;
  } else {
   HEAP32[i3 >> 2] = i1;
   STACKTOP = i6;
   return;
  }
 }
 if ((HEAP8[i12 + 32 | 0] & 1) != 0) {
  __ZN3WTF6StringC1EPKc(i8, H_BASE + 104 | 0);
  i1 = i8 | 0;
  i8 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  i3 = i2 | 0;
  i13 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = i8;
  do {
   if ((i13 | 0) != 0) {
    i8 = i13 | 0;
    i3 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
    if ((i3 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i13);
     break;
    } else {
     HEAP32[i8 >> 2] = i3;
     break;
    }
   }
  } while (0);
  i13 = HEAP32[i1 >> 2] | 0;
  if ((i13 | 0) == 0) {
   STACKTOP = i6;
   return;
  }
  i1 = i13 | 0;
  i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
  if ((i3 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i13);
   STACKTOP = i6;
   return;
  } else {
   HEAP32[i1 >> 2] = i3;
   STACKTOP = i6;
   return;
  }
 }
 i3 = i12 + 52 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i13 = i1 | 0;
   i8 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
   HEAP32[i13 >> 2] = i8;
   i7 = i12 + 44 | 0;
   i14 = HEAP32[i7 >> 2] | 0;
   i15 = (i14 | 0) == 0;
   if (i15) {
    i16 = i8;
   } else {
    i8 = i14 | 0;
    i17 = HEAP32[i8 >> 2] | 0;
    HEAP32[i8 >> 2] = i17 + 2;
    if ((i17 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i14);
    } else {
     HEAP32[i8 >> 2] = i17;
    }
    i16 = HEAP32[i13 >> 2] | 0;
   }
   i17 = i16 - 1 | 0;
   if ((i17 | 0) == 0) {
    __ZN7WebCore12SharedBufferD1Ev(i1);
    __ZN3WTF8fastFreeEPv(i1);
    if (i15) {
     break;
    }
   } else {
    HEAP32[i13 >> 2] = i17;
    if (i15) {
     break;
    }
   }
   HEAP8[i5] = 0;
   i15 = i9 | 0;
   i17 = HEAP32[i3 >> 2] | 0;
   HEAP32[i15 >> 2] = i17;
   if ((i17 | 0) != 0) {
    i13 = i17 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   }
   i13 = i10 | 0;
   i17 = HEAP32[i7 >> 2] | 0;
   HEAP32[i13 >> 2] = i17;
   if ((i17 | 0) != 0) {
    i7 = i17 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
   }
   i7 = __ZN7WebCore18InspectorPageAgent19sharedBufferContentEN3WTF10PassRefPtrINS_12SharedBufferEEERKNS1_6StringEbPS5_(i9, i10, (HEAP8[i5] & 1) != 0, i4) | 0;
   i17 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 | 0;
     i8 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i13 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i8 = i17 | 0;
     i13 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i13 | 0) == 0) {
      __ZN7WebCore12SharedBufferD1Ev(i17);
      __ZN3WTF8fastFreeEPv(i17);
      break;
     } else {
      HEAP32[i8 >> 2] = i13;
      break;
     }
    }
   } while (0);
   if (!i7) {
    break;
   }
   STACKTOP = i6;
   return;
  }
 } while (0);
 i10 = HEAP32[i12 + 56 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   if (!(__ZN7WebCore18InspectorPageAgent21cachedResourceContentEPNS_14CachedResourceEPN3WTF6StringEPb(i10, i4, i5) | 0)) {
    break;
   }
   STACKTOP = i6;
   return;
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i11, H_BASE + 48 | 0);
 i5 = i11 | 0;
 i11 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i11;
 do {
  if ((i2 | 0) != 0) {
   i11 = i2 | 0;
   i4 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i11 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i5 = i2 | 0;
 i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i5 >> 2] = i4;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore22InspectorResourceAgent16didFinishLoadingEmPNS_14DocumentLoaderEd(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, d19 = +0, i20 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 __ZN7WebCore18IdentifiersFactory9requestIdEm(i6, i2);
 i2 = i1 + 32 | 0;
 do {
  if ((__ZN7WebCore20NetworkResourcesData12resourceTypeERKN3WTF6StringE(HEAP32[i2 >> 2] | 0, i6) | 0) == 0) {
   __ZNK7WebCore14DocumentLoader16mainResourceDataEv(i7, HEAP32[(__ZNK7WebCore14DocumentLoader11frameLoaderEv(i3) | 0) + 48 >> 2] | 0);
   i12 = i7 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   i12 = HEAP32[i2 >> 2] | 0;
   i14 = (i13 | 0) == 0;
   do {
    if (i14) {
     i15 = i8 | 0;
     HEAP32[i15 >> 2] = 0;
     i16 = i15;
    } else {
     i15 = __ZNK7WebCore14ResourceBuffer12sharedBufferEv(i13) | 0;
     i17 = i8 | 0;
     HEAP32[i17 >> 2] = i15;
     if ((i15 | 0) == 0) {
      i16 = i17;
      break;
     }
     i18 = i15 | 0;
     HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
     i16 = i17;
    }
   } while (0);
   __ZNK7WebCore8Document8encodingEv(i9, HEAP32[(HEAP32[i3 + 12 >> 2] | 0) + 456 >> 2] | 0);
   __ZN7WebCore20NetworkResourcesData23addResourceSharedBufferERKN3WTF6StringENS1_10PassRefPtrINS_12SharedBufferEEES4_(i12, i6, i8, i9);
   i17 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i18 = i17 | 0;
     i15 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i18 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i12 = i17 | 0;
     i15 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     if ((i15 | 0) == 0) {
      __ZN7WebCore12SharedBufferD1Ev(i17);
      __ZN3WTF8fastFreeEPv(i17);
      break;
     } else {
      HEAP32[i12 >> 2] = i15;
      break;
     }
    }
   } while (0);
   if (i14) {
    break;
   }
   i17 = i13 + 4 | 0;
   i15 = i17 | 0;
   i12 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i15 >> 2] = i12;
    break;
   }
   i12 = i17 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 31](i12);
  }
 } while (0);
 __ZN7WebCore20NetworkResourcesData24maybeDecodeDataToContentERKN3WTF6StringE(HEAP32[i2 >> 2] | 0, i6);
 if (d4 != +0) {
  d19 = d4;
 } else {
  d19 = +__ZN3WTF11currentTimeEv();
 }
 i16 = i10 | 0;
 HEAP32[i16 >> 2] = 0;
 i9 = __ZN7WebCore20NetworkResourcesData4dataERKN3WTF6StringE(HEAP32[i2 >> 2] | 0, i6) | 0;
 do {
  if ((i9 | 0) != 0) {
   i2 = HEAP32[i9 + 56 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   __ZN7WebCore18InspectorPageAgent23sourceMapURLForResourceEPNS_14CachedResourceE(i11, i2);
   i2 = i11 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i3 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = i8;
   do {
    if ((i3 | 0) != 0) {
     i8 = i3 | 0;
     i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i3);
      break;
     } else {
      HEAP32[i8 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i3 = HEAP32[i2 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i13 = i3 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i13 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i16 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i20 = 0;
 } else {
  i20 = (HEAP32[i11 + 4 >> 2] | 0) == 0 ? 0 : i10;
 }
 __ZN9Inspector34InspectorNetworkFrontendDispatcher15loadingFinishedERKN3WTF6StringEdPS3_(HEAP32[i1 + 24 >> 2] | 0, i6, d19, i20);
 i20 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i16 = i20 | 0;
   i1 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i16 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i20 = HEAP32[i6 >> 2] | 0;
 if ((i20 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i6 = i20 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i20);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i6 >> 2] = i1;
  STACKTOP = i5;
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
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
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 3) | 0;
 if ((i6 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i8 = 0;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i5 = i7 + (i10 << 3) | 0;
  i12 = i5 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i14 = HEAP32[i4 >> 2] | 0;
   i16 = HEAP32[i3 >> 2] | 0;
   i17 = HEAP32[i13 + 16 >> 2] | 0;
   if (i17 >>> 0 > 127 >>> 0) {
    i18 = i17 >>> 7;
   } else {
    i18 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i13) | 0;
   }
   i13 = (i18 >>> 23) + ~i18 | 0;
   i17 = i13 << 12 ^ i13;
   i13 = i17 >>> 7 ^ i17;
   i17 = i13 << 2 ^ i13;
   i13 = i17 >>> 20 ^ i17 | 1;
   i17 = i18;
   i19 = 0;
   i20 = 0;
   while (1) {
    i21 = i17 & i16;
    i22 = i14 + (i21 << 3) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == 0) {
     i25 = 11;
     break;
    } else if ((i24 | 0) == (-1 | 0)) {
     i26 = i22;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i12 >> 2] | 0) | 0) {
      i27 = i22;
      break;
     } else {
      i26 = i20;
     }
    }
    i23 = (i19 | 0) == 0 ? i13 : i19;
    i17 = i23 + i21 | 0;
    i19 = i23;
    i20 = i26;
   }
   if ((i25 | 0) == 11) {
    i25 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 + 4 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 + 4 | 0;
     i14 = i13 | 0;
     i16 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i16 | 0) != 0) {
      HEAP32[i14 >> 2] = i16;
      break;
     }
     i16 = i13 - 4 | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 31](i16);
    }
   } while (0);
   i17 = i27 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i16 = i20 | 0;
     i13 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i16 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i20 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i17 >> 2] = i20;
   i20 = i7 + (i10 << 3) + 4 | 0;
   i13 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   HEAP32[i19 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i27 : i11;
  }
  i13 = i10 + 1 | 0;
  if ((i13 | 0) == (i6 | 0)) {
   break;
  } else {
   i10 = i13;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i6 | 0) > 0) {
  i28 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = i7 + (i28 << 3) | 0;
  do {
   if ((HEAP32[i1 >> 2] | 0) != -1) {
    i11 = HEAP32[i7 + (i28 << 3) + 4 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i10 = i11 + 4 | 0;
      i27 = i10 | 0;
      i2 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
      if ((i2 | 0) != 0) {
       HEAP32[i27 >> 2] = i2;
       break;
      }
      i2 = i10 - 4 | 0;
      if ((i2 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
     }
    } while (0);
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i2 = i11 | 0;
    i10 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i2 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i6 | 0)) {
   i28 = i1;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore22InspectorResourceAgent9replayXHREPN3WTF6StringERKS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 224 | 0;
 i4 = i2 | 0;
 i5 = i2 + 8 | 0;
 i6 = i2 + 192 | 0;
 i7 = i2 + 200 | 0;
 i8 = i2 + 208 | 0;
 i9 = i2 + 216 | 0;
 __ZN7WebCore14XMLHttpRequest6createERNS_22ScriptExecutionContextE(i4, (HEAP32[(__ZN7WebCore18InspectorPageAgent9mainFrameEv(HEAP32[i1 + 16 >> 2] | 0) | 0) + 456 >> 2] | 0) + 88 | 0);
 i10 = i4 | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i10 = HEAP32[i3 >> 2] | 0;
 i11 = (i10 | 0) == 0;
 if (!i11) {
  i12 = i10 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 i12 = __ZN7WebCore20NetworkResourcesData13xhrReplayDataERKN3WTF6StringE(HEAP32[i1 + 32 >> 2] | 0, i3) | 0;
 if ((i12 | 0) != 0) {
  i3 = i12 + 8 | 0;
  __ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE(i5 | 0, i3, 0);
  _memset(i5 + 160 | 0, 0, 19) | 0;
  HEAP32[i5 + 180 >> 2] = 15;
  i1 = __ZN7WebCore11MemoryCache18resourceForRequestERKNS_15ResourceRequestE(__ZN7WebCore11memoryCacheEv() | 0, i5) | 0;
  if ((i1 | 0) != 0) {
   __ZN7WebCore11MemoryCache5evictEPNS_14CachedResourceE(__ZN7WebCore11memoryCacheEv() | 0, i1);
  }
  i1 = (HEAP8[i12 + 56 | 0] & 1) != 0;
  i13 = i6 | 0;
  HEAP32[i13 >> 2] = 0;
  __ZN7WebCore14XMLHttpRequest4openERKN3WTF6StringERKNS_3URLEbRi(i4, i12 + 4 | 0, i3, i1, i13);
  i13 = HEAP32[i12 + 64 >> 2] | 0;
  i1 = HEAP32[i12 + 68 >> 2] | 0;
  i3 = i13 + (i1 << 3) | 0;
  L9 : do {
   if ((HEAP32[i12 + 76 >> 2] | 0) != 0) {
    L11 : do {
     if ((i1 | 0) == 0) {
      i14 = i13;
     } else {
      i6 = i13;
      while (1) {
       i15 = HEAP32[i6 >> 2] | 0;
       if (!((i15 | 0) == (-1 | 0) | (i15 | 0) == 0)) {
        i14 = i6;
        break L11;
       }
       i6 = i6 + 8 | 0;
       if ((i6 | 0) == (i3 | 0)) {
        break L9;
       }
      }
     }
    } while (0);
    if ((i14 | 0) == (i3 | 0)) {
     break;
    }
    i6 = i7 | 0;
    i15 = i14;
    while (1) {
     HEAP32[i6 >> 2] = 0;
     __ZN7WebCore14XMLHttpRequest16setRequestHeaderERKN3WTF12AtomicStringERKNS1_6StringERi(i4, i15 | 0, i15 + 4 | 0, i6);
     i16 = i15 + 8 | 0;
     if ((i16 | 0) == (i3 | 0)) {
      break L9;
     } else {
      i17 = i16;
     }
     while (1) {
      i16 = HEAP32[i17 >> 2] | 0;
      if (!((i16 | 0) == (-1 | 0) | (i16 | 0) == 0)) {
       break;
      }
      i16 = i17 + 8 | 0;
      if ((i16 | 0) == (i3 | 0)) {
       break L9;
      } else {
       i17 = i16;
      }
     }
     if ((i17 | 0) == (i3 | 0)) {
      break;
     } else {
      i15 = i17;
     }
    }
   }
  } while (0);
  i17 = i8 | 0;
  i3 = HEAP32[i12 + 60 >> 2] | 0;
  HEAP32[i17 >> 2] = i3;
  if ((i3 | 0) != 0) {
   i12 = i3 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
  }
  i12 = i9 | 0;
  HEAP32[i12 >> 2] = 0;
  __ZN7WebCore14XMLHttpRequest17sendFromInspectorEN3WTF10PassRefPtrINS_8FormDataEEERi(i4, i8, i12);
  i12 = HEAP32[i17 >> 2] | 0;
  do {
   if ((i12 | 0) != 0) {
    i17 = i12 | 0;
    i8 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
    if ((i8 | 0) == 0) {
     __ZN7WebCore8FormDataD1Ev(i12);
     __ZN3WTF8fastFreeEPv(i12);
     break;
    } else {
     HEAP32[i17 >> 2] = i8;
     break;
    }
   }
  } while (0);
  __ZN7WebCore15ResourceRequestD2Ev(i5);
 }
 do {
  if (!i11) {
   i5 = i10 | 0;
   i12 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i5 >> 2] = i12;
    break;
   }
  }
 } while (0);
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i10 = i4 + 40 | 0;
 i4 = i10 | 0;
 i11 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i11 | 0) != 0) {
  HEAP32[i4 >> 2] = i11;
  STACKTOP = i2;
  return;
 }
 i11 = i10 - 40 | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 44 >> 2] & 31](i11);
 STACKTOP = i2;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore22ThreadableLoaderClientENS_12KeyValuePairIS3_NS_6RefPtrINS1_13XHRReplayDataEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EERKS3_RS7_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
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
  __ZN3WTF9HashTableIPN7WebCore22ThreadableLoaderClientENS_12KeyValuePairIS3_NS_6RefPtrINS1_13XHRReplayDataEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8;
 i7 = i9 + ~(i9 << 15) | 0;
 i9 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i9 >>> 6 ^ i9;
 i9 = i7 + ~(i7 << 11) | 0;
 i7 = i9 >>> 16 ^ i9;
 i9 = i7 & i6;
 i11 = i10 + (i9 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = i8;
  } else {
   i15 = (i7 >>> 23) + ~i7 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i9;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i21 = 8;
     break;
    }
    i22 = (i20 | 0) == -1 ? i19 : i17;
    i23 = (i16 | 0) == 0 ? i15 : i16;
    i24 = i23 + i18 & i6;
    i25 = i10 + (i24 << 3) | 0;
    i26 = HEAP32[i25 >> 2] | 0;
    if ((i26 | 0) == 0) {
     i21 = 10;
     break;
    } else {
     i16 = i23;
     i17 = i22;
     i18 = i24;
     i19 = i25;
     i20 = i26;
    }
   }
   if ((i21 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i21 | 0) == 10) {
    if ((i22 | 0) == 0) {
     i13 = i25;
     i14 = i8;
     break;
    }
    i20 = i22;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i13 = i22;
    i14 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i13 >> 2] = i14;
 i14 = HEAP32[i4 >> 2] | 0;
 if ((i14 | 0) != 0) {
  i4 = i14 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i13 + 4 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i14;
 if ((i3 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore13XHRReplayDataEE5derefEv(i3 | 0);
 }
 i3 = i2 + 12 | 0;
 i14 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i14;
 i3 = i2 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i14 << 1 | 0) < (i4 | 0)) {
  i27 = i13;
  i28 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i29 = 8;
  } else {
   i22 = i4 << 1;
   i29 = (i14 * 6 & -1 | 0) < (i22 | 0) ? i4 : i22;
  }
  i22 = __ZN3WTF9HashTableIPN7WebCore22ThreadableLoaderClientENS_12KeyValuePairIS3_NS_6RefPtrINS1_13XHRReplayDataEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i29, i13) | 0;
  i27 = i22;
  i28 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i5 >> 2] | 0) + (i28 << 3) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i10 = i9 >>> 7;
 } else {
  i10 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i10 >>> 23) + ~i10 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i11 = i10;
 i10 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i7 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 9;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i10 | 0) == 0 ? i3 : i10;
  i9 = i16;
  i11 = i14 + i12 | 0;
  i10 = i14;
 }
 if ((i17 | 0) == 9) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i13;
  HEAP32[i10 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  i13 = i9;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
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
 i13 = i4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i13 = i18 + 4 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i4;
 do {
  if ((i8 | 0) != 0) {
   i4 = i8 + 4 | 0;
   i13 = i4 | 0;
   i9 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i13 >> 2] = i9;
    break;
   }
   i9 = i4 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
  }
 } while (0);
 i8 = i2 + 12 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
 HEAP32[i8 >> 2] = i9;
 i8 = i2 + 4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i9 << 1 | 0) < (i4 | 0)) {
  i19 = i18;
  i20 = i4;
 } else {
  i4 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, i18) | 0;
  i19 = i4;
  i20 = HEAP32[i8 >> 2] | 0;
 }
 i8 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i8;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore22ThreadableLoaderClientENS_12KeyValuePairIS3_NS_6RefPtrINS1_13XHRReplayDataEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i8 = 0;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i2 = i7 + (i10 << 3) | 0;
  i12 = i2 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L8 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 6;
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
       break L8;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 3) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 6;
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
   if ((i23 | 0) == 6) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i16 = i30 + 4 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i36 = i13;
   } else {
    __ZN3WTF10RefCountedIN7WebCore13XHRReplayDataEE5derefEv(i17 | 0);
    i36 = HEAP32[i12 >> 2] | 0;
   }
   HEAP32[i30 >> 2] = i36;
   i17 = i7 + (i10 << 3) + 4 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i16 >> 2] = i20;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i20 = i10 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i20;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i37 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i37 << 3) >> 2] | 0) != -1) {
    i1 = HEAP32[i7 + (i37 << 3) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    __ZN3WTF10RefCountedIN7WebCore13XHRReplayDataEE5derefEv(i1 | 0);
   }
  } while (0);
  i2 = i37 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i37 = i2;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore22InspectorResourceAgentD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 HEAP32[i4 >> 2] = H_BASE + 704;
 HEAP32[i1 + 12 >> 2] = H_BASE + 772;
 i5 = i1 + 36 | 0;
 do {
  if ((HEAP8[i5] & 1) != 0) {
   HEAP8[i5] = 0;
   HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 32 >> 2] = 0;
   i6 = HEAP32[i1 + 32 >> 2] | 0;
   i7 = i3 | 0;
   HEAP32[i7 >> 2] = 0;
   __ZN7WebCore20NetworkResourcesData5clearERKN3WTF6StringE(i6, i3);
   i6 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i7 = i6 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i6);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i6 = i1 + 40 | 0;
   i8 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i6 = i8 + 4 | 0;
   i8 = i6 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i8 >> 2] = i7;
    break;
   }
   i7 = i6 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
  }
 } while (0);
 i3 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 4 | 0;
   i7 = i5 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i7 >> 2] = i6;
    break;
   }
   i6 = i5 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 i3 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i6 = HEAP32[i1 + 48 >> 2] | 0;
  if ((i6 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i3 + (i5 << 3) >> 2] | 0) != -1) {
      i7 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
      if ((i7 | 0) == 0) {
       break;
      }
      __ZN3WTF10RefCountedIN7WebCore13XHRReplayDataEE5derefEv(i7 | 0);
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i6 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 40 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 + 4 | 0;
   i5 = i6 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i5 >> 2] = i7;
    break;
   }
   i7 = i6 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
  }
 } while (0);
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore20NetworkResourcesDataD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 28 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 + 4 | 0;
   i6 = i7 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i6 >> 2] = i5;
    break;
   }
   i5 = i7 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i3 = i1 + 24 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i5 | 0) != 0) {
  __ZdlPv(i5);
 }
 __ZN9Inspector40InspectorNetworkBackendDispatcherHandlerD2Ev(i1 + 12 | 0);
 HEAP32[i4 >> 2] = H_BASE + 664;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i4 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i1 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore22InspectorResourceAgentD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 HEAP32[i4 >> 2] = H_BASE + 704;
 HEAP32[i1 + 12 >> 2] = H_BASE + 772;
 i5 = i1 + 36 | 0;
 do {
  if ((HEAP8[i5] & 1) != 0) {
   HEAP8[i5] = 0;
   HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 32 >> 2] = 0;
   i6 = HEAP32[i1 + 32 >> 2] | 0;
   i7 = i3 | 0;
   HEAP32[i7 >> 2] = 0;
   __ZN7WebCore20NetworkResourcesData5clearERKN3WTF6StringE(i6, i3);
   i6 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i7 = i6 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i6);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i6 = i1 + 40 | 0;
   i8 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i6 = i8 + 4 | 0;
   i8 = i6 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i8 >> 2] = i7;
    break;
   }
   i7 = i6 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
  }
 } while (0);
 i3 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 4 | 0;
   i7 = i5 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i7 >> 2] = i6;
    break;
   }
   i6 = i5 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 i3 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i6 = HEAP32[i1 + 48 >> 2] | 0;
  if ((i6 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i3 + (i5 << 3) >> 2] | 0) != -1) {
      i7 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
      if ((i7 | 0) == 0) {
       break;
      }
      __ZN3WTF10RefCountedIN7WebCore13XHRReplayDataEE5derefEv(i7 | 0);
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i6 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 40 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 + 4 | 0;
   i5 = i6 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i5 >> 2] = i7;
    break;
   }
   i7 = i6 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
  }
 } while (0);
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore20NetworkResourcesDataD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 28 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 + 4 | 0;
   i6 = i7 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i6 >> 2] = i5;
    break;
   }
   i5 = i7 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i3 = i1 + 24 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i5 | 0) != 0) {
  __ZdlPv(i5);
 }
 __ZN9Inspector40InspectorNetworkBackendDispatcherHandlerD2Ev(i1 + 12 | 0);
 HEAP32[i4 >> 2] = H_BASE + 664;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i4 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i1 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore22InspectorResourceAgent33willSendWebSocketHandshakeRequestEmRKNS_15ResourceRequestE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, d13 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 __ZN9Inspector15InspectorObject6createEv(i8);
 i12 = HEAP32[i8 >> 2] | 0;
 __ZN7WebCoreL21buildObjectForHeadersERKNS_13HTTPHeaderMapE(i9, __ZNK7WebCore19ResourceRequestBase16httpHeaderFieldsEv(i3 | 0) | 0);
 HEAP32[i6 >> 2] = H_BASE + 624;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i5, i6);
 i6 = i7 | 0;
 i3 = i9 | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i6 >> 2] = i9;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i12 | 0, i5, i7);
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 + 4 | 0;
   i9 = i6 | 0;
   i3 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i9 >> 2] = i3;
    break;
   }
   i3 = i6 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
  }
 } while (0);
 i7 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i5 = i7 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i7 = i12;
 i3 = (i12 | 0) == 0;
 do {
  if (!i3) {
   i5 = i12 + 4 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
   i5 = i12 + 4 | 0;
   i6 = i5 | 0;
   i9 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i6 >> 2] = i9;
    break;
   }
   i9 = i5 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
  }
 } while (0);
 i9 = HEAP32[i1 + 24 >> 2] | 0;
 __ZN7WebCore18IdentifiersFactory9requestIdEm(i10, i2);
 d13 = +__ZN3WTF11currentTimeEv();
 i2 = i11 | 0;
 HEAP32[i2 >> 2] = i7;
 if (!i3) {
  i7 = i12 + 4 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 __ZN9Inspector34InspectorNetworkFrontendDispatcher33webSocketWillSendHandshakeRequestERKN3WTF6StringEdNS1_10PassRefPtrINS_11TypeBuilder7Network16WebSocketRequestEEE(i9, i10, d13, i11);
 i11 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i2 = i11 + 4 | 0;
   i9 = i2 | 0;
   i7 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i9 >> 2] = i7;
    break;
   }
   i7 = i2 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
  }
 } while (0);
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i10 = i11 | 0;
   i7 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i10 >> 2] = i7;
    break;
   }
  }
 } while (0);
 if (i3) {
  STACKTOP = i4;
  return;
 }
 i3 = i12 + 4 | 0;
 i12 = i3 | 0;
 i11 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
 if ((i11 | 0) != 0) {
  HEAP32[i12 >> 2] = i11;
  STACKTOP = i4;
  return;
 }
 i11 = i3 - 4 | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 31](i11);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22InspectorResourceAgent11willLoadXHREPNS_22ThreadableLoaderClientERKN3WTF6StringERKNS_3URLEbNS3_10PassRefPtrINS_8FormDataEEERKNS_13HTTPHeaderMapEb(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i10 = i9 | 0;
 i11 = i9 + 8 | 0;
 i12 = i9 + 16 | 0;
 i13 = i9 + 24 | 0;
 i14 = i9 + 32 | 0;
 HEAP32[i10 >> 2] = i2;
 i2 = i13 | 0;
 i15 = i6 | 0;
 i6 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i2 >> 2] = i6;
 __ZN7WebCore13XHRReplayData6createERKN3WTF6StringERKNS_3URLEbNS1_10PassRefPtrINS_8FormDataEEEb(i12, i3, i4, i5, i13, i8);
 i8 = i11 | 0;
 i13 = i12 | 0;
 i12 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i8 >> 2] = i12;
 i13 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i2 = i13 | 0;
   i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore8FormDataD1Ev(i13);
    __ZN3WTF8fastFreeEPv(i13);
    break;
   } else {
    HEAP32[i2 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i7 >> 2] | 0;
 i5 = HEAP32[i7 + 4 >> 2] | 0;
 i2 = i13 + (i5 << 3) | 0;
 L7 : do {
  if ((HEAP32[i7 + 12 >> 2] | 0) != 0) {
   L9 : do {
    if ((i5 | 0) == 0) {
     i16 = i13;
    } else {
     i4 = i13;
     while (1) {
      i3 = HEAP32[i4 >> 2] | 0;
      if (!((i3 | 0) == (-1 | 0) | (i3 | 0) == 0)) {
       i16 = i4;
       break L9;
      }
      i4 = i4 + 8 | 0;
      if ((i4 | 0) == (i2 | 0)) {
       break L7;
      }
     }
    }
   } while (0);
   if ((i16 | 0) == (i2 | 0)) {
    break;
   } else {
    i17 = i16;
   }
   while (1) {
    __ZN7WebCore13XHRReplayData9addHeaderERKN3WTF12AtomicStringERKNS1_6StringE(i12, i17 | 0, i17 + 4 | 0);
    i4 = i17 + 8 | 0;
    if ((i4 | 0) == (i2 | 0)) {
     break L7;
    } else {
     i18 = i4;
    }
    while (1) {
     i4 = HEAP32[i18 >> 2] | 0;
     if (!((i4 | 0) == (-1 | 0) | (i4 | 0) == 0)) {
      break;
     }
     i4 = i18 + 8 | 0;
     if ((i4 | 0) == (i2 | 0)) {
      break L7;
     } else {
      i18 = i4;
     }
    }
    if ((i18 | 0) == (i2 | 0)) {
     break;
    } else {
     i17 = i18;
    }
   }
  }
 } while (0);
 __ZN3WTF9HashTableIPN7WebCore22ThreadableLoaderClientENS_12KeyValuePairIS3_NS_6RefPtrINS1_13XHRReplayDataEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EERKS3_RS7_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i14, i1 + 44 | 0, i10, i11);
 do {
  if ((HEAP8[i14 + 8 | 0] & 1) == 0) {
   i11 = HEAP32[i14 >> 2] | 0;
   i10 = HEAP32[i8 >> 2] | 0;
   if ((i10 | 0) != 0) {
    i1 = i10 | 0;
    HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
   }
   i1 = i11 + 4 | 0;
   i11 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = i10;
   if ((i11 | 0) == 0) {
    i19 = i10;
    break;
   }
   __ZN3WTF10RefCountedIN7WebCore13XHRReplayDataEE5derefEv(i11 | 0);
   i19 = i10;
  } else {
   i19 = HEAP32[i8 >> 2] | 0;
  }
 } while (0);
 if ((i19 | 0) == 0) {
  STACKTOP = i9;
  return;
 }
 __ZN3WTF10RefCountedIN7WebCore13XHRReplayDataEE5derefEv(i19 | 0);
 STACKTOP = i9;
 return;
}
function __ZN7WebCore22InspectorResourceAgent14didFailLoadingEmPNS_14DocumentLoaderERKNS_13ResourceErrorE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, d19 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 __ZN7WebCore18IdentifiersFactory9requestIdEm(i6, i2);
 i2 = i1 + 32 | 0;
 do {
  if (!((__ZN7WebCore20NetworkResourcesData12resourceTypeERKN3WTF6StringE(HEAP32[i2 >> 2] | 0, i6) | 0) != 0 | (i3 | 0) == 0)) {
   i11 = HEAP32[i3 + 12 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i12 = HEAP32[i11 + 128 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i13 = i11 + 456 | 0;
   if ((HEAP32[i13 >> 2] | 0) == 0) {
    break;
   }
   __ZNK7WebCore14DocumentLoader16mainResourceDataEv(i7, i12);
   i12 = i7 | 0;
   i11 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   i12 = HEAP32[i2 >> 2] | 0;
   i14 = (i11 | 0) == 0;
   do {
    if (i14) {
     i15 = i8 | 0;
     HEAP32[i15 >> 2] = 0;
     i16 = i15;
    } else {
     i15 = __ZNK7WebCore14ResourceBuffer12sharedBufferEv(i11) | 0;
     i17 = i8 | 0;
     HEAP32[i17 >> 2] = i15;
     if ((i15 | 0) == 0) {
      i16 = i17;
      break;
     }
     i18 = i15 | 0;
     HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
     i16 = i17;
    }
   } while (0);
   __ZNK7WebCore8Document8encodingEv(i9, HEAP32[i13 >> 2] | 0);
   __ZN7WebCore20NetworkResourcesData23addResourceSharedBufferERKN3WTF6StringENS1_10PassRefPtrINS_12SharedBufferEEES4_(i12, i6, i8, i9);
   i17 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i18 = i17 | 0;
     i15 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i18 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i12 = i17 | 0;
     i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     if ((i13 | 0) == 0) {
      __ZN7WebCore12SharedBufferD1Ev(i17);
      __ZN3WTF8fastFreeEPv(i17);
      break;
     } else {
      HEAP32[i12 >> 2] = i13;
      break;
     }
    }
   } while (0);
   if (i14) {
    break;
   }
   i17 = i11 + 4 | 0;
   i13 = i17 | 0;
   i12 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i13 >> 2] = i12;
    break;
   }
   i12 = i17 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 31](i12);
  }
 } while (0);
 i16 = HEAP8[i4 + 17 | 0] & 1;
 HEAP8[i10] = i16;
 i9 = HEAP32[i1 + 24 >> 2] | 0;
 d19 = +__ZN3WTF11currentTimeEv();
 __ZNK7WebCore17ResourceErrorBase8lazyInitEv(i4 | 0);
 __ZN9Inspector34InspectorNetworkFrontendDispatcher13loadingFailedERKN3WTF6StringEdS4_PKb(i9, i6, d19, i4 + 12 | 0, i16 << 24 >> 24 != 0 ? i10 : 0);
 i10 = HEAP32[i6 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i6 = i10 | 0;
 i16 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i16 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i10);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i6 >> 2] = i16;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCoreL21buildObjectForHeadersERKNS_13HTTPHeaderMapE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 __ZN9Inspector15InspectorObject6createEv(i6);
 i7 = i6 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = HEAP32[i2 >> 2] | 0;
 i8 = HEAP32[i2 + 4 >> 2] | 0;
 i9 = i7 + (i8 << 3) | 0;
 L1 : do {
  if ((HEAP32[i2 + 12 >> 2] | 0) != 0) {
   L3 : do {
    if ((i8 | 0) == 0) {
     i10 = i7;
    } else {
     i11 = i7;
     while (1) {
      i12 = HEAP32[i11 >> 2] | 0;
      if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
       i10 = i11;
       break L3;
      }
      i11 = i11 + 8 | 0;
      if ((i11 | 0) == (i9 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i10 | 0) == (i9 | 0)) {
    break;
   }
   i11 = i6 | 0;
   i12 = i4 | 0;
   i13 = i5 | 0;
   i14 = i10;
   while (1) {
    __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i14 + 4 | 0);
    i15 = HEAP32[i13 >> 2] | 0;
    HEAP32[i13 >> 2] = 0;
    HEAP32[i12 >> 2] = i15;
    __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i11, i14 | 0, i4);
    i15 = HEAP32[i12 >> 2] | 0;
    do {
     if ((i15 | 0) != 0) {
      i16 = i15 + 4 | 0;
      i17 = i16 | 0;
      i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
      if ((i18 | 0) != 0) {
       HEAP32[i17 >> 2] = i18;
       break;
      }
      i18 = i16 - 4 | 0;
      if ((i18 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 31](i18);
     }
    } while (0);
    i15 = HEAP32[i13 >> 2] | 0;
    do {
     if ((i15 | 0) != 0) {
      i18 = i15 + 4 | 0;
      i16 = i18 | 0;
      i17 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
      if ((i17 | 0) != 0) {
       HEAP32[i16 >> 2] = i17;
       break;
      }
      i17 = i18 - 4 | 0;
      if ((i17 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 31](i17);
     }
    } while (0);
    i15 = i14 + 8 | 0;
    if ((i15 | 0) == (i9 | 0)) {
     break L1;
    } else {
     i19 = i15;
    }
    while (1) {
     i15 = HEAP32[i19 >> 2] | 0;
     if (!((i15 | 0) == (-1 | 0) | (i15 | 0) == 0)) {
      break;
     }
     i15 = i19 + 8 | 0;
     if ((i15 | 0) == (i9 | 0)) {
      break L1;
     } else {
      i19 = i15;
     }
    }
    if ((i19 | 0) == (i9 | 0)) {
     break;
    } else {
     i14 = i19;
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i6 + 4 | 0;
 i19 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i19 + 1;
 i1 = i6 + 4 | 0;
 if ((i19 | 0) != 0) {
  HEAP32[i1 >> 2] = i19;
  STACKTOP = i3;
  return;
 }
 i19 = i1 - 4 | 0;
 if ((i19 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 31](i19);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore22InspectorResourceAgent24didReceiveWebSocketFrameEmRKNS_14WebSocketFrameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 __ZN9Inspector15InspectorObject6createEv(i5);
 i10 = i6 | 0;
 HEAP32[i10 >> 2] = HEAP32[i5 >> 2];
 i5 = __ZN9Inspector11TypeBuilder7Network14WebSocketFrame7BuilderILi0EE9setOpcodeEd(i6, +((HEAP32[i3 >> 2] | 0) >>> 0 >>> 0)) | 0;
 i6 = __ZN9Inspector11TypeBuilder7Network14WebSocketFrame7BuilderILi1EE7setMaskEb(i5, (HEAP8[i3 + 8 | 0] & 1) != 0) | 0;
 __ZN3WTF6StringC1EPKcj(i7, HEAP32[i3 + 12 >> 2] | 0, HEAP32[i3 + 16 >> 2] | 0);
 i3 = HEAP32[(__ZN9Inspector11TypeBuilder7Network14WebSocketFrame7BuilderILi3EE14setPayloadDataERKN3WTF6StringE(i6, i7) | 0) >> 2] | 0;
 i6 = (i3 | 0) == 0;
 if (!i6) {
  i5 = i3 + 4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 | 0;
   i11 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i7 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 4 | 0;
   i11 = i10 | 0;
   i7 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i11 >> 2] = i7;
    break;
   }
   i7 = i10 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
  }
 } while (0);
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 __ZN7WebCore18IdentifiersFactory9requestIdEm(i8, i2);
 d12 = +__ZN3WTF11currentTimeEv();
 i2 = i9 | 0;
 HEAP32[i2 >> 2] = i3;
 if (!i6) {
  i1 = i3 + 4 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 }
 __ZN9Inspector34InspectorNetworkFrontendDispatcher22webSocketFrameReceivedERKN3WTF6StringEdNS1_10PassRefPtrINS_11TypeBuilder7Network14WebSocketFrameEEE(i5, i8, d12, i9);
 i9 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i2 = i9 + 4 | 0;
   i5 = i2 | 0;
   i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i5 >> 2] = i1;
    break;
   }
   i1 = i2 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
  }
 } while (0);
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i8 = i9 | 0;
   i1 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i8 >> 2] = i1;
    break;
   }
  }
 } while (0);
 if (i6) {
  STACKTOP = i4;
  return;
 }
 i6 = i3 + 4 | 0;
 i3 = i6 | 0;
 i9 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i9 | 0) != 0) {
  HEAP32[i3 >> 2] = i9;
  STACKTOP = i4;
  return;
 }
 i9 = i6 - 4 | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22InspectorResourceAgent21didSendWebSocketFrameEmRKNS_14WebSocketFrameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 __ZN9Inspector15InspectorObject6createEv(i5);
 i10 = i6 | 0;
 HEAP32[i10 >> 2] = HEAP32[i5 >> 2];
 i5 = __ZN9Inspector11TypeBuilder7Network14WebSocketFrame7BuilderILi0EE9setOpcodeEd(i6, +((HEAP32[i3 >> 2] | 0) >>> 0 >>> 0)) | 0;
 i6 = __ZN9Inspector11TypeBuilder7Network14WebSocketFrame7BuilderILi1EE7setMaskEb(i5, (HEAP8[i3 + 8 | 0] & 1) != 0) | 0;
 __ZN3WTF6StringC1EPKcj(i7, HEAP32[i3 + 12 >> 2] | 0, HEAP32[i3 + 16 >> 2] | 0);
 i3 = HEAP32[(__ZN9Inspector11TypeBuilder7Network14WebSocketFrame7BuilderILi3EE14setPayloadDataERKN3WTF6StringE(i6, i7) | 0) >> 2] | 0;
 i6 = (i3 | 0) == 0;
 if (!i6) {
  i5 = i3 + 4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 | 0;
   i11 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i7 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 4 | 0;
   i11 = i10 | 0;
   i7 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i11 >> 2] = i7;
    break;
   }
   i7 = i10 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
  }
 } while (0);
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 __ZN7WebCore18IdentifiersFactory9requestIdEm(i8, i2);
 d12 = +__ZN3WTF11currentTimeEv();
 i2 = i9 | 0;
 HEAP32[i2 >> 2] = i3;
 if (!i6) {
  i1 = i3 + 4 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 }
 __ZN9Inspector34InspectorNetworkFrontendDispatcher18webSocketFrameSentERKN3WTF6StringEdNS1_10PassRefPtrINS_11TypeBuilder7Network14WebSocketFrameEEE(i5, i8, d12, i9);
 i9 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i2 = i9 + 4 | 0;
   i5 = i2 | 0;
   i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i5 >> 2] = i1;
    break;
   }
   i1 = i2 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
  }
 } while (0);
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i8 = i9 | 0;
   i1 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i8 >> 2] = i1;
    break;
   }
  }
 } while (0);
 if (i6) {
  STACKTOP = i4;
  return;
 }
 i6 = i3 + 4 | 0;
 i3 = i6 | 0;
 i9 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i9 | 0) != 0) {
  HEAP32[i3 >> 2] = i9;
  STACKTOP = i4;
  return;
 }
 i9 = i6 - 4 | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
 STACKTOP = i4;
 return;
}
function __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i5, i1 + 12 | 0, i2, i3);
 if ((HEAP8[i5 + 8 | 0] & 1) == 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i5 = i3 | 0;
  i3 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  i5 = i6 + 4 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i3;
  if ((i6 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i3 = i6 + 4 | 0;
  i6 = i3 | 0;
  i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i5 | 0) != 0) {
   HEAP32[i6 >> 2] = i5;
   STACKTOP = i4;
   return;
  }
  i5 = i3 - 4 | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  STACKTOP = i4;
  return;
 }
 i5 = i1 + 32 | 0;
 i3 = i1 + 40 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) != (HEAP32[i1 + 36 >> 2] | 0)) {
  i1 = HEAP32[i2 >> 2] | 0;
  HEAP32[(HEAP32[i5 >> 2] | 0) + (i6 << 2) >> 2] = i1;
  if ((i1 | 0) != 0) {
   i7 = i1 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  }
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  STACKTOP = i4;
  return;
 }
 i7 = i6 + 1 | 0;
 i1 = i5 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 do {
  if (i8 >>> 0 > i2 >>> 0) {
   i9 = 13;
  } else {
   if ((i8 + (i6 << 2) | 0) >>> 0 <= i2 >>> 0) {
    i9 = 13;
    break;
   }
   __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
   i10 = HEAP32[i1 >> 2] | 0;
   i11 = i10 + (i2 - i8 >> 2 << 2) | 0;
   i12 = i10;
  }
 } while (0);
 if ((i9 | 0) == 13) {
  __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
  i11 = i2;
  i12 = HEAP32[i1 >> 2] | 0;
 }
 i1 = HEAP32[i11 >> 2] | 0;
 HEAP32[i12 + (HEAP32[i3 >> 2] << 2) >> 2] = i1;
 if ((i1 | 0) != 0) {
  i12 = i1 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22InspectorResourceAgent25willDestroyCachedResourceEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i1 + 32 | 0;
 __ZN7WebCore20NetworkResourcesData20removeCachedResourceEPNS_14CachedResourceE(i4, HEAP32[i7 >> 2] | 0, i2);
 i1 = i4 + 8 | 0;
 do {
  if ((HEAP32[i1 >> 2] | 0) == 0) {
   i8 = i4 | 0;
  } else {
   i9 = i5 | 0;
   HEAP32[i9 >> 2] = 0;
   do {
    if (__ZN7WebCore18InspectorPageAgent21cachedResourceContentEPNS_14CachedResourceEPN3WTF6StringEPb(i2, i5, i6) | 0) {
     i10 = HEAP32[i4 >> 2] | 0;
     i11 = HEAP32[i1 >> 2] | 0;
     i12 = i10 + (i11 << 2) | 0;
     if ((i11 | 0) == 0) {
      break;
     } else {
      i13 = i10;
     }
     while (1) {
      __ZN7WebCore20NetworkResourcesData18setResourceContentERKN3WTF6StringES4_b(HEAP32[i7 >> 2] | 0, i13, i5, (HEAP8[i6] & 1) != 0);
      i13 = i13 + 4 | 0;
      if ((i13 | 0) == (i12 | 0)) {
       break;
      }
     }
    }
   } while (0);
   i12 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i10 = i12 | 0;
     i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i10 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i12 = HEAP32[i1 >> 2] | 0;
   i9 = i4 | 0;
   if ((i12 | 0) == 0) {
    i8 = i9;
    break;
   }
   i11 = HEAP32[i9 >> 2] | 0;
   i10 = i11 + (i12 << 2) | 0;
   i12 = i11;
   while (1) {
    i11 = HEAP32[i12 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i14 = i11 | 0;
      i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
      if ((i15 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i11);
       break;
      } else {
       HEAP32[i14 >> 2] = i15;
       break;
      }
     }
    } while (0);
    i12 = i12 + 4 | 0;
    if ((i12 | 0) == (i10 | 0)) {
     break;
    }
   }
   HEAP32[i1 >> 2] = 0;
   i8 = i9;
  }
 } while (0);
 i1 = HEAP32[i8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i8 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i3;
 return;
}
function __ZN9Inspector11TypeBuilder7Network14CachedResource7BuilderILi1EE7setTypeENS0_4Page12ResourceType4EnumE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = HEAP32[i1 >> 2] | 0;
 HEAP32[i7 >> 2] = H_BASE + 592;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 __ZN9Inspector11TypeBuilder23getWebEnumConstantValueEi(i8, i2);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i8);
 i2 = i4 | 0;
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i9, i6, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i9 = i2 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i9 >> 2] = i5;
    break;
   }
   i5 = i2 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 4 | 0;
   i5 = i7 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i5 >> 2] = i2;
    break;
   }
   i2 = i7 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 | 0;
   i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i8 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i10 = i1;
  STACKTOP = i3;
  return i10 | 0;
 }
 i6 = i4 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i10 = i1;
  STACKTOP = i3;
  return i10 | 0;
 } else {
  HEAP32[i6 >> 2] = i2;
  i10 = i1;
  STACKTOP = i3;
  return i10 | 0;
 }
 return 0;
}
function __ZN9Inspector11TypeBuilder7Network9Initiator7BuilderILi0EE7setTypeENS2_4Type4EnumE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = HEAP32[i1 >> 2] | 0;
 HEAP32[i7 >> 2] = H_BASE + 592;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 __ZN9Inspector11TypeBuilder23getWebEnumConstantValueEi(i8, i2);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i8);
 i2 = i4 | 0;
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i9, i6, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i9 = i2 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i9 >> 2] = i5;
    break;
   }
   i5 = i2 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 4 | 0;
   i5 = i7 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i5 >> 2] = i2;
    break;
   }
   i2 = i7 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 | 0;
   i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i8 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i10 = i1;
  STACKTOP = i3;
  return i10 | 0;
 }
 i6 = i4 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i10 = i1;
  STACKTOP = i3;
  return i10 | 0;
 } else {
  HEAP32[i6 >> 2] = i2;
  i10 = i1;
  STACKTOP = i3;
  return i10 | 0;
 }
 return 0;
}
function __ZN7WebCore19ResourceRequestBaseD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 148 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8FormDataD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = i1 + 144 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i3 = i1 + 136 | 0;
 if ((i4 | 0) != 0) {
  i5 = HEAP32[i3 >> 2] | 0;
  i6 = i5 + (i4 << 2) | 0;
  i4 = i5;
  while (1) {
   i5 = HEAP32[i4 >> 2] | 0;
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
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 140 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN7WebCore13HTTPHeaderMapD1Ev(i1 + 116 | 0);
 i2 = HEAP32[i1 + 112 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore22InspectorResourceAgent19didFinishXHRLoadingEPNS_22ThreadableLoaderClientEmRKN3WTF6StringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 HEAP32[i7 >> 2] = i2;
 do {
  if ((HEAP8[i1 + 38 | 0] & 1) != 0) {
   i2 = HEAP32[i1 + 32 >> 2] | 0;
   __ZN7WebCore18IdentifiersFactory9requestIdEm(i8, i3);
   __ZN7WebCore20NetworkResourcesData18setResourceContentERKN3WTF6StringES4_b(i2, i8, i4, 0);
   i2 = HEAP32[i8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   i9 = i2 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i8 = i1 + 44 | 0;
 __ZN3WTF7HashMapIPN7WebCore22ThreadableLoaderClientENS_6RefPtrINS1_13XHRReplayDataEEENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS9_IS6_EEE4findERKS3_(i6, i8, i7);
 i7 = HEAP32[i6 >> 2] | 0;
 i6 = i1 + 48 | 0;
 if ((i7 | 0) == ((HEAP32[i8 >> 2] | 0) + (HEAP32[i6 >> 2] << 3) | 0)) {
  STACKTOP = i5;
  return;
 }
 i4 = HEAP32[i7 + 4 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore13XHRReplayDataEE5derefEv(i4 | 0);
 }
 HEAP32[i7 >> 2] = -1;
 i7 = i1 + 60 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 i7 = i1 + 56 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i1;
 i7 = HEAP32[i6 >> 2] | 0;
 if (!((i1 * 6 & -1 | 0) < (i7 | 0) & (i7 | 0) > 8)) {
  STACKTOP = i5;
  return;
 }
 __ZN3WTF9HashTableIPN7WebCore22ThreadableLoaderClientENS_12KeyValuePairIS3_NS_6RefPtrINS1_13XHRReplayDataEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i8 | 0, (i7 | 0) / 2 & -1, 0) | 0;
 STACKTOP = i5;
 return;
}
function __ZN9Inspector11TypeBuilder7Network14WebSocketFrame7BuilderILi3EE14setPayloadDataERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 HEAP32[i7 >> 2] = H_BASE + 24;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i2);
 i2 = i4 | 0;
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i8, i6, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i8 = i2 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i8 >> 2] = i5;
    break;
   }
   i5 = i2 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 4 | 0;
   i5 = i7 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i5 >> 2] = i2;
    break;
   }
   i2 = i7 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i9 = i1;
  STACKTOP = i3;
  return i9 | 0;
 }
 i6 = i4 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i9 = i1;
  STACKTOP = i3;
  return i9 | 0;
 } else {
  HEAP32[i6 >> 2] = i2;
  i9 = i1;
  STACKTOP = i3;
  return i9 | 0;
 }
 return 0;
}
function __ZN3WTF7HashMapIPN7WebCore22ThreadableLoaderClientENS_6RefPtrINS1_13XHRReplayDataEEENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS9_IS6_EEE4findERKS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) == 0) {
   i5 = HEAP32[i2 + 4 >> 2] << 3 | 0;
   i6 = i5;
   i7 = i5;
  } else {
   i5 = HEAP32[i2 + 8 >> 2] | 0;
   i8 = HEAP32[i3 >> 2] | 0;
   i9 = i8;
   i10 = i9 + ~(i9 << 15) | 0;
   i9 = (i10 >>> 10 ^ i10) * 9 & -1;
   i10 = i9 >>> 6 ^ i9;
   i9 = i10 + ~(i10 << 11) | 0;
   i10 = i9 >>> 16 ^ i9;
   i9 = i10 & i5;
   i11 = i4 + (i9 << 3) | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   L4 : do {
    if ((i12 | 0) == (i8 | 0)) {
     i13 = i11;
    } else {
     i14 = (i10 >>> 23) + ~i10 | 0;
     i15 = i14 << 12 ^ i14;
     i14 = i15 >>> 7 ^ i15;
     i15 = i14 << 2 ^ i14;
     i14 = i15 >>> 20 ^ i15 | 1;
     i15 = 0;
     i16 = i9;
     i17 = i12;
     while (1) {
      if ((i17 | 0) == 0) {
       break;
      }
      i18 = (i15 | 0) == 0 ? i14 : i15;
      i19 = i18 + i16 & i5;
      i20 = i4 + (i19 << 3) | 0;
      i21 = HEAP32[i20 >> 2] | 0;
      if ((i21 | 0) == (i8 | 0)) {
       i13 = i20;
       break L4;
      } else {
       i15 = i18;
       i16 = i19;
       i17 = i21;
      }
     }
     i17 = i4 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
     i6 = i17;
     i7 = i17;
     break L1;
    }
   } while (0);
   i8 = i4 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
   i6 = (i13 | 0) == 0 ? i8 : i13;
   i7 = i8;
  }
 } while (0);
 i13 = i1;
 HEAP32[i13 >> 2] = i6;
 HEAP32[i13 + 4 >> 2] = i7;
 return;
}
function __ZN9Inspector11TypeBuilder7Network14WebSocketFrame7BuilderILi0EE9setOpcodeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 HEAP32[i7 >> 2] = H_BASE + 8;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 __ZN9Inspector19InspectorBasicValue6createEd(i5, d2);
 i7 = i4 | 0;
 i9 = i5 | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i7 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i8, i6, i4);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 4 | 0;
   i8 = i7 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i8 >> 2] = i5;
    break;
   }
   i5 = i7 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i4 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i9 = i4 + 4 | 0;
   i5 = i9 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i5 >> 2] = i7;
    break;
   }
   i7 = i9 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i10 = i1;
  STACKTOP = i3;
  return i10 | 0;
 }
 i6 = i4 | 0;
 i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i10 = i1;
  STACKTOP = i3;
  return i10 | 0;
 } else {
  HEAP32[i6 >> 2] = i7;
  i10 = i1;
  STACKTOP = i3;
  return i10 | 0;
 }
 return 0;
}
function __ZN9Inspector11TypeBuilder7Network14WebSocketFrame7BuilderILi1EE7setMaskEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 HEAP32[i7 >> 2] = H_BASE + 16;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 __ZN9Inspector19InspectorBasicValue6createEb(i5, i2);
 i2 = i4 | 0;
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i8, i6, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i8 = i2 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i8 >> 2] = i5;
    break;
   }
   i5 = i2 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 4 | 0;
   i5 = i7 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i5 >> 2] = i2;
    break;
   }
   i2 = i7 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i9 = i1;
  STACKTOP = i3;
  return i9 | 0;
 }
 i6 = i4 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i9 = i1;
  STACKTOP = i3;
  return i9 | 0;
 } else {
  HEAP32[i6 >> 2] = i2;
  i9 = i1;
  STACKTOP = i3;
  return i9 | 0;
 }
 return 0;
}
function runPostSets() {
 HEAP32[H_BASE + 664 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 728 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 732 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 744 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 748 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 752 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 756 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 772 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 776 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 780 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 784 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 788 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 792 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 796 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 800 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 804 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 808 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 812 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 816 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 840 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 844 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 848 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 852 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 856 >> 2] = F_BASE_vi + 4;
}
function __ZN7WebCore22InspectorResourceAgentC2EPNS_19InstrumentingAgentsEPNS_18InspectorPageAgentEPNS_15InspectorClientE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 HEAP32[i7 >> 2] = H_BASE + 40;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 i7 = i1 | 0;
 HEAP32[i7 >> 2] = H_BASE + 664;
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i6;
 do {
  if ((i6 | 0) == 0) {
   HEAP32[i7 >> 2] = H_BASE + 840;
   HEAP32[i1 + 8 >> 2] = i2;
  } else {
   i9 = i6 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i7 >> 2] = H_BASE + 840;
   HEAP32[i1 + 8 >> 2] = i2;
   if ((i9 | 0) == 0) {
    break;
   }
   i10 = i9 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i10 >> 2] = i11;
    break;
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = H_BASE + 704;
 HEAP32[i1 + 12 >> 2] = H_BASE + 772;
 HEAP32[i1 + 16 >> 2] = i3;
 HEAP32[i1 + 20 >> 2] = i4;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 i4 = __ZN3WTF10fastMallocEj(72) | 0;
 __ZN7WebCore20NetworkResourcesDataC1Ev(i4);
 HEAP32[i1 + 32 >> 2] = i4;
 HEAP8[i1 + 36 | 0] = 0;
 HEAP8[i1 + 37 | 0] = 0;
 HEAP8[i1 + 38 | 0] = 0;
 _memset(i1 + 40 | 0, 0, 29) | 0;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore22InspectorResourceAgentC1EPNS_19InstrumentingAgentsEPNS_18InspectorPageAgentEPNS_15InspectorClientE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 HEAP32[i7 >> 2] = H_BASE + 40;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 i7 = i1 | 0;
 HEAP32[i7 >> 2] = H_BASE + 664;
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i6;
 do {
  if ((i6 | 0) == 0) {
   HEAP32[i7 >> 2] = H_BASE + 840;
   HEAP32[i1 + 8 >> 2] = i2;
  } else {
   i9 = i6 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i7 >> 2] = H_BASE + 840;
   HEAP32[i1 + 8 >> 2] = i2;
   if ((i9 | 0) == 0) {
    break;
   }
   i10 = i9 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i10 >> 2] = i11;
    break;
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = H_BASE + 704;
 HEAP32[i1 + 12 >> 2] = H_BASE + 772;
 HEAP32[i1 + 16 >> 2] = i3;
 HEAP32[i1 + 20 >> 2] = i4;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 i4 = __ZN3WTF10fastMallocEj(72) | 0;
 __ZN7WebCore20NetworkResourcesDataC1Ev(i4);
 HEAP32[i1 + 32 >> 2] = i4;
 HEAP8[i1 + 36 | 0] = 0;
 HEAP8[i1 + 37 | 0] = 0;
 HEAP8[i1 + 38 | 0] = 0;
 _memset(i1 + 40 | 0, 0, 29) | 0;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore22InspectorResourceAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = __Znwj(4) | 0;
 HEAP32[i6 >> 2] = i2;
 i2 = i1 + 24 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i6;
 if ((i7 | 0) != 0) {
  __ZdlPv(i7);
 }
 __ZN9Inspector33InspectorNetworkBackendDispatcher6createEPNS_26InspectorBackendDispatcherEPNS_40InspectorNetworkBackendDispatcherHandlerE(i5, i3, i1 + 12 | 0);
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i7 = i1 + 28 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i5;
 do {
  if ((i1 | 0) != 0) {
   i5 = i1 + 4 | 0;
   i7 = i5 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i7 >> 2] = i6;
    break;
   }
   i6 = i5 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i1 + 4 | 0;
 i1 = i3 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i4;
  return;
 }
 i6 = i3 - 4 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i2 + 4 | 0;
 i6 = i1 + 4 | 0;
 i8 = HEAP8[i6] & -2 | HEAP8[i7] & 1;
 HEAP8[i6] = i8;
 HEAP8[i6] = i8 & -3 | HEAP8[i7] & 2;
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
 HEAP32[i1 + 48 >> 2] = i3;
 HEAPF64[i1 + 56 >> 3] = +HEAPF64[__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE >> 3];
 i3 = i1 + 64 | 0;
 HEAP32[i3 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i3);
 HEAP32[i5 >> 2] = H_BASE + 584;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1 + 112 | 0, i5);
 __ZN7WebCore13HTTPHeaderMapC1Ev(i1 + 116 | 0);
 _memset(i1 + 136 | 0, 0, 16) | 0;
 HEAP8[i1 + 152 | 0] = 11;
 HEAP32[i1 + 156 >> 2] = 1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22InspectorResourceAgent14didReceiveDataEmPKcii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 __ZN7WebCore18IdentifiersFactory9requestIdEm(i7, i2);
 L1 : do {
  if ((i3 | 0) != 0) {
   i2 = i1 + 32 | 0;
   i8 = __ZN7WebCore20NetworkResourcesData4dataERKN3WTF6StringE(HEAP32[i2 >> 2] | 0, i7) | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   if ((HEAP8[i1 + 38 | 0] & 1) != 0) {
    break;
   }
   i9 = HEAP32[i8 + 56 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     if ((HEAP32[i9 + 248 >> 2] | 0) == 1) {
      break;
     }
     if ((HEAP32[i8 + 40 >> 2] | 0) <= 399) {
      break L1;
     }
    }
   } while (0);
   __ZN7WebCore20NetworkResourcesData20maybeAddResourceDataERKN3WTF6StringEPKcj(HEAP32[i2 >> 2] | 0, i7, i3, i4);
  }
 } while (0);
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 __ZN9Inspector34InspectorNetworkFrontendDispatcher12dataReceivedERKN3WTF6StringEdii(i3, i7, +__ZN3WTF11currentTimeEv(), i4, i5);
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i7 = i5 | 0;
 i4 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i7 >> 2] = i4;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore15ResourceRequestD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 172 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 168 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 164 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 160 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1 | 0;
  __ZN7WebCore19ResourceRequestBaseD2Ev(i5);
  return;
 }
 i4 = i2 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i5 = i1 | 0;
  __ZN7WebCore19ResourceRequestBaseD2Ev(i5);
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  i5 = i1 | 0;
  __ZN7WebCore19ResourceRequestBaseD2Ev(i5);
  return;
 }
}
function __ZN7WebCore22InspectorResourceAgent17didFailXHRLoadingEPNS_22ThreadableLoaderClientE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP32[i5 >> 2] = i2;
 i2 = i1 + 44 | 0;
 __ZN3WTF7HashMapIPN7WebCore22ThreadableLoaderClientENS_6RefPtrINS1_13XHRReplayDataEEENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS9_IS6_EEE4findERKS3_(i4, i2, i5);
 i5 = HEAP32[i4 >> 2] | 0;
 i4 = i1 + 48 | 0;
 if ((i5 | 0) == ((HEAP32[i2 >> 2] | 0) + (HEAP32[i4 >> 2] << 3) | 0)) {
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[i5 + 4 >> 2] | 0;
 if ((i6 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore13XHRReplayDataEE5derefEv(i6 | 0);
 }
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 60 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 56 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i1;
 i5 = HEAP32[i4 >> 2] | 0;
 if (!((i1 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF9HashTableIPN7WebCore22ThreadableLoaderClientENS_12KeyValuePairIS3_NS_6RefPtrINS1_13XHRReplayDataEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore22InspectorResourceAgent47documentThreadableLoaderStartedLoadingForClientEmPNS_22ThreadableLoaderClientE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 HEAP32[i5 >> 2] = i3;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i1 + 44 | 0;
 __ZN3WTF7HashMapIPN7WebCore22ThreadableLoaderClientENS_6RefPtrINS1_13XHRReplayDataEEENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS9_IS6_EEE4findERKS3_(i6, i3, i5);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == ((HEAP32[i3 >> 2] | 0) + (HEAP32[i1 + 48 >> 2] << 3) | 0)) {
  STACKTOP = i4;
  return;
 }
 i3 = HEAP32[i5 + 4 >> 2] | 0;
 __ZN7WebCore18IdentifiersFactory9requestIdEm(i7, i2);
 __ZN7WebCore20NetworkResourcesData16setXHRReplayDataERKN3WTF6StringEPNS_13XHRReplayDataE(HEAP32[i1 + 32 >> 2] | 0, i7, i3);
 i3 = HEAP32[i7 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i3 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i7 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZThn12_N7WebCore22InspectorResourceAgent7disableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 - 72 + 60 | 0;
 HEAP8[i4 + 36 | 0] = 0;
 HEAP32[(HEAP32[i4 + 8 >> 2] | 0) + 32 >> 2] = 0;
 i1 = HEAP32[i4 + 32 >> 2] | 0;
 i5 = i3 | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore20NetworkResourcesData5clearERKN3WTF6StringE(i1, i3);
 i3 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i5 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i3 = i4 + 40 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i4 + 4 | 0;
 i4 = i3 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
 i1 = i3 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i2;
 return;
}
function __ZN3WTF10RefCountedIN7WebCore13XHRReplayDataEE5derefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 __ZN7WebCore13HTTPHeaderMapD1Ev(i1 + 64 | 0);
 i3 = HEAP32[i1 + 60 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8FormDataD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore22InspectorResourceAgent29willDestroyFrontendAndBackendEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i5 | 0) != 0) {
  __ZdlPv(i5);
 }
 i5 = i1 + 28 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 + 4 | 0;
   i6 = i5 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i6 >> 2] = i7;
    break;
   }
   i7 = i5 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
  }
 } while (0);
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 31](i1, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore22InspectorResourceAgent7disableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP8[i1 + 36 | 0] = 0;
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 32 >> 2] = 0;
 i4 = HEAP32[i1 + 32 >> 2] | 0;
 i5 = i3 | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore20NetworkResourcesData5clearERKN3WTF6StringE(i4, i3);
 i3 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = i1 + 40 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i1 + 4 | 0;
 i1 = i3 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i2;
  return;
 }
 i4 = i3 - 4 | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore22InspectorResourceAgent29didScheduleStyleRecalculationEPNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 64 | 0;
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore22InspectorResourceAgent20buildInitiatorObjectEPNS_8DocumentE(i4, i1, i2);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i4;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
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
 if (i5 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
 HEAP32[i3 >> 2] = i1 >>> 2;
 i5 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i4 >> 2] = i5;
 i1 = i2;
 _memcpy(i5 | 0, i1 | 0, i6 << 2) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore22InspectorResourceAgent18mainFrameNavigatedEPNS_14DocumentLoaderE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((HEAP8[i1 + 37 | 0] & 1) != 0) {
  __ZN7WebCore11MemoryCache14evictResourcesEv(__ZN7WebCore11memoryCacheEv() | 0);
 }
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 __ZN7WebCore18InspectorPageAgent8loaderIdEPNS_14DocumentLoaderE(i4, HEAP32[i1 + 16 >> 2] | 0, i2);
 __ZN7WebCore20NetworkResourcesData5clearERKN3WTF6StringE(i5, i4);
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i5 | 0;
 i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore22InspectorResourceAgent29didReceiveWebSocketFrameErrorEmRKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 + 24 >> 2] | 0;
 __ZN7WebCore18IdentifiersFactory9requestIdEm(i5, i2);
 __ZN9Inspector34InspectorNetworkFrontendDispatcher19webSocketFrameErrorERKN3WTF6StringEdS4_(i6, i5, +__ZN3WTF11currentTimeEv(), i3);
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i3 | 0;
 i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i6;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore22InspectorResourceAgent18didCreateWebSocketEmRKNS_3URLE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 + 24 >> 2] | 0;
 __ZN7WebCore18IdentifiersFactory9requestIdEm(i5, i2);
 __ZN9Inspector34InspectorNetworkFrontendDispatcher16webSocketCreatedERKN3WTF6StringES4_(i6, i5, i3 | 0);
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i3 | 0;
 i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i6;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore22InspectorResourceAgent23setInitialScriptContentEmRKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 + 32 >> 2] | 0;
 __ZN7WebCore18IdentifiersFactory9requestIdEm(i5, i2);
 __ZN7WebCore20NetworkResourcesData18setResourceContentERKN3WTF6StringES4_b(i6, i5, i3, 0);
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i3 | 0;
 i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i6;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore22InspectorResourceAgent24didReceiveScriptResponseEm(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 __ZN7WebCore18IdentifiersFactory9requestIdEm(i4, i2);
 __ZN7WebCore20NetworkResourcesData15setResourceTypeERKN3WTF6StringENS_18InspectorPageAgent12ResourceTypeE(i5, i4, 4);
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i5 | 0;
 i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore22InspectorResourceAgent21didReceiveXHRResponseEm(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 __ZN7WebCore18IdentifiersFactory9requestIdEm(i4, i2);
 __ZN7WebCore20NetworkResourcesData15setResourceTypeERKN3WTF6StringENS_18InspectorPageAgent12ResourceTypeE(i5, i4, 5);
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i5 | 0;
 i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore22InspectorResourceAgent17didCloseWebSocketEm(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 __ZN7WebCore18IdentifiersFactory9requestIdEm(i4, i2);
 __ZN9Inspector34InspectorNetworkFrontendDispatcher15webSocketClosedERKN3WTF6StringEd(i5, i4, +__ZN3WTF11currentTimeEv());
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i5 | 0;
 i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZThn12_N7WebCore22InspectorResourceAgent19setExtraHTTPHeadersEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = i2 + 4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 i3 = i1 - 72 + 100 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 + 4 | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 i3 = i2 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
 return;
}
function __ZN7WebCore22InspectorResourceAgent20markResourceAsCachedEm(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 __ZN7WebCore18IdentifiersFactory9requestIdEm(i4, i2);
 __ZN9Inspector34InspectorNetworkFrontendDispatcher22requestServedFromCacheERKN3WTF6StringE(i5, i4);
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i5 | 0;
 i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore22InspectorResourceAgent19setExtraHTTPHeadersEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = i2 + 4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 i3 = i1 + 40 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 + 4 | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 i3 = i2 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
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
function __ZN7WebCore22InspectorResourceAgent19didRecalculateStyleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP8[i1 + 68 | 0] = 0;
 i2 = i1 + 64 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 + 4 | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 i3 = i2 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
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
function __ZN9Inspector18InspectorAgentBaseD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 664;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZdlPv(i1);
 return;
}
function __ZN7WebCore18InspectorAgentBaseD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 664;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZdlPv(i1);
 return;
}
function __ZN9Inspector18InspectorAgentBaseD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 664;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore18InspectorAgentBaseD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 664;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZThn12_N7WebCore22InspectorResourceAgent15getResponseBodyEPN3WTF6StringERKS2_S3_Pb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore22InspectorResourceAgent15getResponseBodyEPN3WTF6StringERKS2_S3_Pb(i1 - 72 + 60 | 0, i2, i3, i4, i5);
 return;
}
function __ZThn12_N7WebCore22InspectorResourceAgent16setCacheDisabledEPN3WTF6StringEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP8[i1 - 72 + 97 | 0] = i3 & 1;
 if (!i3) {
  return;
 }
 __ZN7WebCore11MemoryCache14evictResourcesEv(__ZN7WebCore11memoryCacheEv() | 0);
 return;
}
function __ZThn12_N7WebCore22InspectorResourceAgent22canClearBrowserCookiesEPN3WTF6StringEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i2 = HEAP32[i1 - 72 + 80 >> 2] | 0;
 HEAP8[i3] = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 52 >> 2] & 1](i2) | 0) & 1;
 return;
}
function __ZThn12_N7WebCore22InspectorResourceAgent20canClearBrowserCacheEPN3WTF6StringEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i2 = HEAP32[i1 - 72 + 80 >> 2] | 0;
 HEAP8[i3] = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] & 1](i2) | 0) & 1;
 return;
}
function __ZN7WebCore22InspectorResourceAgent16setCacheDisabledEPN3WTF6StringEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP8[i1 + 37 | 0] = i3 & 1;
 if (!i3) {
  return;
 }
 __ZN7WebCore11MemoryCache14evictResourcesEv(__ZN7WebCore11memoryCacheEv() | 0);
 return;
}
function __ZN7WebCore22InspectorResourceAgent22canClearBrowserCookiesEPN3WTF6StringEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 HEAP8[i3] = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 52 >> 2] & 1](i2) | 0) & 1;
 return;
}
function __ZThn12_N7WebCore22InspectorResourceAgent6enableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = i1 - 72 + 60 | 0;
 if ((HEAP32[i2 + 24 >> 2] | 0) == 0) {
  return;
 }
 HEAP8[i2 + 36 | 0] = 1;
 HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 32 >> 2] = i2;
 return;
}
function __ZN7WebCore22InspectorResourceAgent20canClearBrowserCacheEPN3WTF6StringEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 HEAP8[i3] = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] & 1](i2) | 0) & 1;
 return;
}
function __ZN7WebCore22InspectorResourceAgent39setResourcesDataSizeLimitsFromInternalsEii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore20NetworkResourcesData26setResourcesDataSizeLimitsEjj(HEAP32[i1 + 32 >> 2] | 0, i2, i3);
 return;
}
function __ZN7WebCore22InspectorResourceAgent6enableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((HEAP32[i1 + 24 >> 2] | 0) == 0) {
  return;
 }
 HEAP8[i1 + 36 | 0] = 1;
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 32 >> 2] = i1;
 return;
}
function __ZThn12_N7WebCore22InspectorResourceAgent19clearBrowserCookiesEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = HEAP32[i1 - 72 + 80 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 56 >> 2] & 31](i2);
 return;
}
function __ZThn12_N7WebCore22InspectorResourceAgent9replayXHREPN3WTF6StringERKS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore22InspectorResourceAgent9replayXHREPN3WTF6StringERKS2_(i1 - 72 + 60 | 0, 0, i3);
 return;
}
function __ZThn12_N7WebCore22InspectorResourceAgent17clearBrowserCacheEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = HEAP32[i1 - 72 + 80 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 48 >> 2] & 31](i2);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore22InspectorResourceAgent19clearBrowserCookiesEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 56 >> 2] & 31](i2);
 return;
}
function __ZN7WebCore22InspectorResourceAgent17clearBrowserCacheEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 48 >> 2] & 31](i2);
 return;
}
function __ZN7WebCore22InspectorResourceAgent6enableEv(i1) {
 i1 = i1 | 0;
 if ((HEAP32[i1 + 24 >> 2] | 0) == 0) {
  return;
 }
 HEAP8[i1 + 36 | 0] = 1;
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 32 >> 2] = i1;
 return;
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
function __ZThn12_N7WebCore22InspectorResourceAgentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 72 + 60 | 0;
 __ZN7WebCore22InspectorResourceAgentD2Ev(i2);
 __ZdlPv(i2);
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
function __ZThn12_N7WebCore22InspectorResourceAgentD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22InspectorResourceAgentD2Ev(i1 - 72 + 60 | 0);
 return;
}
function __ZN7WebCore22InspectorResourceAgentD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22InspectorResourceAgentD2Ev(i1);
 __ZdlPv(i1);
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
function __ZN7WebCore22InspectorResourceAgent24willLoadXHRSynchronouslyEv(i1) {
 i1 = i1 | 0;
 HEAP8[i1 + 38 | 0] = 1;
 return;
}
function __ZN7WebCore22InspectorResourceAgent23didLoadXHRSynchronouslyEv(i1) {
 i1 = i1 | 0;
 HEAP8[i1 + 38 | 0] = 0;
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
function __ZN7WebCore22InspectorResourceAgent20willRecalculateStyleEv(i1) {
 i1 = i1 | 0;
 HEAP8[i1 + 68 | 0] = 1;
 return;
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 31](i2 | 0, i3 | 0);
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
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function b7(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(7);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZN9Inspector18InspectorAgentBase12discardAgentEv(i1) {
 i1 = i1 | 0;
 return;
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
 return 0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
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
function b5() {
 abort(5);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZThn12_N7WebCore22InspectorResourceAgent15getResponseBodyEPN3WTF6StringERKS2_S3_Pb,b0,__ZN7WebCore22InspectorResourceAgent15getResponseBodyEPN3WTF6StringERKS2_S3_Pb,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore18InspectorAgentBaseD0Ev,b1,__ZN9Inspector18InspectorAgentBase12discardAgentEv,b1,__ZN7WebCore22InspectorResourceAgentD2Ev,b1,__ZThn12_N7WebCore22InspectorResourceAgentD1Ev,b1,__ZN7WebCore22InspectorResourceAgent29willDestroyFrontendAndBackendEv,b1,__ZN7WebCore18InspectorAgentBaseD1Ev,b1,__ZN9Inspector18InspectorAgentBaseD1Ev,b1,__ZThn12_N7WebCore22InspectorResourceAgentD0Ev,b1,__ZN9Inspector18InspectorAgentBaseD0Ev,b1,__ZN7WebCore22InspectorResourceAgentD0Ev,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZThn12_N7WebCore22InspectorResourceAgent19clearBrowserCookiesEPN3WTF6StringE,b2,__ZN7WebCore22InspectorResourceAgent7disableEPN3WTF6StringE,b2,__ZN7WebCore22InspectorResourceAgent17clearBrowserCacheEPN3WTF6StringE,b2,__ZThn12_N7WebCore22InspectorResourceAgent6enableEPN3WTF6StringE,b2,__ZThn12_N7WebCore22InspectorResourceAgent7disableEPN3WTF6StringE,b2,__ZThn12_N7WebCore22InspectorResourceAgent17clearBrowserCacheEPN3WTF6StringE,b2,__ZN7WebCore22InspectorResourceAgent19clearBrowserCookiesEPN3WTF6StringE,b2,__ZN7WebCore22InspectorResourceAgent6enableEPN3WTF6StringE,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore22InspectorResourceAgent22canClearBrowserCookiesEPN3WTF6StringEPb,b4,__ZN7WebCore22InspectorResourceAgent19setExtraHTTPHeadersEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEE,b4,__ZN7WebCore22InspectorResourceAgent20canClearBrowserCacheEPN3WTF6StringEPb,b4,__ZThn12_N7WebCore22InspectorResourceAgent9replayXHREPN3WTF6StringERKS2_,b4,__ZThn12_N7WebCore22InspectorResourceAgent16setCacheDisabledEPN3WTF6StringEb,b4,__ZN7WebCore22InspectorResourceAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE,b4,__ZThn12_N7WebCore22InspectorResourceAgent20canClearBrowserCacheEPN3WTF6StringEPb,b4,__ZThn12_N7WebCore22InspectorResourceAgent19setExtraHTTPHeadersEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEE,b4,__ZN7WebCore22InspectorResourceAgent9replayXHREPN3WTF6StringERKS2_,b4,__ZN7WebCore22InspectorResourceAgent16setCacheDisabledEPN3WTF6StringEb,b4,__ZThn12_N7WebCore22InspectorResourceAgent22canClearBrowserCookiesEPN3WTF6StringEPb,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4];
  var FUNCTION_TABLE_v = [b5,b5,v____cxa_pure_virtual__wrapper,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  var FUNCTION_TABLE_viiii = [b7,b7,__ZN7WebCore22InspectorResourceAgentC2EPNS_19InstrumentingAgentsEPNS_18InspectorPageAgentEPNS_15InspectorClientE,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE": __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE, "__ZN9Inspector11TypeBuilder7Network8Response8MimeTypeE": __ZN9Inspector11TypeBuilder7Network8Response8MimeTypeE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore22InspectorResourceAgent22canClearBrowserCookiesEPN3WTF6StringEPb","__ZN7WebCore22InspectorResourceAgent47documentThreadableLoaderStartedLoadingForClientEmPNS_22ThreadableLoaderClientE","_strlen","__ZN7WebCore22InspectorResourceAgent18mainFrameNavigatedEPNS_14DocumentLoaderE","__ZN9Inspector18InspectorAgentBaseD0Ev","__ZN7WebCore22InspectorResourceAgent18didCreateWebSocketEmRKNS_3URLE","__ZThn12_N7WebCore22InspectorResourceAgent7disableEPN3WTF6StringE","__ZN7WebCore22InspectorResourceAgent30didLoadResourceFromMemoryCacheEPNS_14DocumentLoaderEPNS_14CachedResourceE","__ZThn12_N7WebCore22InspectorResourceAgent9replayXHREPN3WTF6StringERKS2_","__ZN7WebCore22InspectorResourceAgent29didScheduleStyleRecalculationEPNS_8DocumentE","__ZN9Inspector11TypeBuilder7Network14WebSocketFrame7BuilderILi0EE9setOpcodeEd","__ZN7WebCore22InspectorResourceAgent21didReceiveXHRResponseEm","__ZN7WebCore22InspectorResourceAgent23didLoadXHRSynchronouslyEv","__ZN7WebCore22InspectorResourceAgent15willSendRequestEmPNS_14DocumentLoaderERNS_15ResourceRequestERKNS_16ResourceResponseE","__ZN3WTF9HashTableIPN7WebCore22ThreadableLoaderClientENS_12KeyValuePairIS3_NS_6RefPtrINS1_13XHRReplayDataEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_","__ZN7WebCore22InspectorResourceAgent7disableEPN3WTF6StringE","__ZN7WebCore22InspectorResourceAgent24didReceiveScriptResponseEm","__ZN7WebCore22InspectorResourceAgent20buildInitiatorObjectEPNS_8DocumentE","__ZN7WebCore22InspectorResourceAgent29didReceiveWebSocketFrameErrorEmRKN3WTF6StringE","__ZN7WebCore22InspectorResourceAgent25willDestroyCachedResourceEPNS_14CachedResourceE","__ZN7WebCore22InspectorResourceAgent20willRecalculateStyleEv","_memset","__ZN7WebCore22InspectorResourceAgent6enableEv","__ZN7WebCore22InspectorResourceAgent19setExtraHTTPHeadersEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEE","__ZN3WTF9HashTableIPN7WebCore22ThreadableLoaderClientENS_12KeyValuePairIS3_NS_6RefPtrINS1_13XHRReplayDataEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EERKS3_RS7_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S8_SA_SC_SI_SF_EEEEOT0_OT1_","__ZN9Inspector18InspectorAgentBase12discardAgentEv","__ZThn12_N7WebCore22InspectorResourceAgent15getResponseBodyEPN3WTF6StringERKS2_S3_Pb","__ZN7WebCore22InspectorResourceAgentD2Ev","__ZN7WebCore22InspectorResourceAgent21didSendWebSocketFrameEmRKNS_14WebSocketFrameE","__ZThn12_N7WebCore22InspectorResourceAgentD0Ev","__ZN7WebCore22InspectorResourceAgent11willLoadXHREPNS_22ThreadableLoaderClientERKN3WTF6StringERKNS_3URLEbNS3_10PassRefPtrINS_8FormDataEEERKNS_13HTTPHeaderMapEb","__ZN7WebCore22InspectorResourceAgent14didReceiveDataEmPKcii","__ZThn12_N7WebCore22InspectorResourceAgent16setCacheDisabledEPN3WTF6StringEb","__ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE","__ZN7WebCore22InspectorResourceAgent17didCloseWebSocketEm","__ZN7WebCore22InspectorResourceAgent19didRecalculateStyleEv","__ZThn12_N7WebCore22InspectorResourceAgentD1Ev","__ZN7WebCore15ResourceRequestD2Ev","__ZN7WebCore22InspectorResourceAgent29willDestroyFrontendAndBackendEv","__ZThn12_N7WebCore22InspectorResourceAgent22canClearBrowserCookiesEPN3WTF6StringEPb","__ZN7WebCore22InspectorResourceAgent17clearBrowserCacheEPN3WTF6StringE","__ZN7WebCore22InspectorResourceAgent24willLoadXHRSynchronouslyEv","__ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE","__ZN9Inspector18InspectorAgentBaseD1Ev","__ZN7WebCore22InspectorResourceAgent16didFinishLoadingEmPNS_14DocumentLoaderEd","__ZThn12_N7WebCore22InspectorResourceAgent19clearBrowserCookiesEPN3WTF6StringE","__ZN7WebCore18InspectorAgentBaseD1Ev","__ZN3WTF10RefCountedIN7WebCore13XHRReplayDataEE5derefEv","__ZN7WebCore22InspectorResourceAgent36didReceiveWebSocketHandshakeResponseEmRKNS_16ResourceResponseE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCore22InspectorResourceAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE","__ZN9Inspector11TypeBuilder7Network14WebSocketFrame7BuilderILi3EE14setPayloadDataERKN3WTF6StringE","__ZN3WTF7HashMapIPN7WebCore22ThreadableLoaderClientENS_6RefPtrINS1_13XHRReplayDataEEENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS9_IS6_EEE4findERKS3_","__ZN9Inspector11TypeBuilder7Network9Initiator7BuilderILi0EE7setTypeENS2_4Type4EnumE","__ZN7WebCoreL30buildObjectForResourceResponseERKNS_16ResourceResponseEPNS_14DocumentLoaderE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_","__ZN7WebCore22InspectorResourceAgent20markResourceAsCachedEm","__ZN7WebCore22InspectorResourceAgent23setInitialScriptContentEmRKN3WTF6StringE","__ZN7WebCore22InspectorResourceAgent18didReceiveResponseEmPNS_14DocumentLoaderERKNS_16ResourceResponseEPNS_14ResourceLoaderE","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore22InspectorResourceAgent39setResourcesDataSizeLimitsFromInternalsEii","__ZN7WebCore22InspectorResourceAgent9replayXHREPN3WTF6StringERKS2_","__ZN7WebCoreL21buildObjectForHeadersERKNS_13HTTPHeaderMapE","__ZThn12_N7WebCore22InspectorResourceAgent17clearBrowserCacheEPN3WTF6StringE","__ZN7WebCore22InspectorResourceAgent19didFinishXHRLoadingEPNS_22ThreadableLoaderClientEmRKN3WTF6StringE","__ZN7WebCore22InspectorResourceAgent15getResponseBodyEPN3WTF6StringERKS2_S3_Pb","__ZThn12_N7WebCore22InspectorResourceAgent6enableEPN3WTF6StringE","__ZN7WebCore22InspectorResourceAgent19clearBrowserCookiesEPN3WTF6StringE","__ZN9Inspector11TypeBuilder7Network14CachedResource7BuilderILi1EE7setTypeENS0_4Page12ResourceType4EnumE","__ZN7WebCore22InspectorResourceAgent14didFailLoadingEmPNS_14DocumentLoaderERKNS_13ResourceErrorE","__ZN9Inspector11TypeBuilder7Network14WebSocketFrame7BuilderILi1EE7setMaskEb","__ZN7WebCore22InspectorResourceAgent16setCacheDisabledEPN3WTF6StringEb","__ZN7WebCore22InspectorResourceAgent6enableEPN3WTF6StringE","_memcpy","__ZN7WebCore22InspectorResourceAgent33willSendWebSocketHandshakeRequestEmRKNS_15ResourceRequestE","__ZN7WebCore18InspectorAgentBaseD0Ev","__ZN7WebCore22InspectorResourceAgent20canClearBrowserCacheEPN3WTF6StringEPb","__ZN7WebCore22InspectorResourceAgent17didFailXHRLoadingEPNS_22ThreadableLoaderClientE","__ZN7WebCore19ResourceRequestBaseD2Ev","__ZN7WebCore22InspectorResourceAgentC2EPNS_19InstrumentingAgentsEPNS_18InspectorPageAgentEPNS_15InspectorClientE","__ZN7WebCore22InspectorResourceAgentD0Ev","__ZN7WebCore22InspectorResourceAgent24didReceiveWebSocketFrameEmRKNS_14WebSocketFrameE","__ZThn12_N7WebCore22InspectorResourceAgent20canClearBrowserCacheEPN3WTF6StringEPb","__ZThn12_N7WebCore22InspectorResourceAgent19setExtraHTTPHeadersEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEE"]

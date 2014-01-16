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
H_BASE = parentModule["_malloc"](1184 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 1184;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore23InspectorLayerTreeAgentC1EPNS_19InstrumentingAgentsE;
var __ZN7WebCore23InspectorLayerTreeAgentD1Ev;
/* memory initializer */ allocate([119,105,100,116,104,0,0,0,104,101,105,103,104,116,0,0,67,111,117,108,100,32,110,111,116,32,102,105,110,100,32,97,32,98,111,117,110,100,32,108,97,121,101,114,32,102,111,114,32,116,104,101,32,112,114,111,118,105,100,101,100,32,105,100,0,0,0,0,0,0,0,0,102,105,114,115,116,45,108,105,110,101,0,0,0,0,0,0,102,105,114,115,116,45,108,101,116,116,101,114,0,0,0,0,105,115,73,110,83,104,97,100,111,119,84,114,101,101,0,0,105,115,82,101,102,108,101,99,116,105,111,110,0,0,0,0,105,115,71,101,110,101,114,97,116,101,100,67,111,110,116,101,110,116,0,0,0,0,0,0,112,115,101,117,100,111,69,108,101,109,101,110,116,73,100,0,112,115,101,117,100,111,69,108,101,109,101,110,116,0,0,0,105,115,65,110,111,110,121,109,111,117,115,0,0,0,0,0,116,114,97,110,115,102,111,114,109,51,68,0,0,0,0,0,118,105,100,101,111,0,0,0,97,102,116,101,114,0,0,0,99,97,110,118,97,115,0,0,112,108,117,103,105,110,0,0,105,70,114,97,109,101,0,0,98,97,99,107,102,97,99,101,86,105,115,105,98,105,108,105,116,121,72,105,100,100,101,110,0,0,0,0,0,0,0,0,99,108,105,112,115,67,111,109,112,111,115,105,116,105,110,103,68,101,115,99,101,110,100,97,110,116,115,0,0,0,0,0,97,110,105,109,97,116,105,111,110,0,0,0,0,0,0,0,102,105,108,116,101,114,115,0,112,111,115,105,116,105,111,110,70,105,120,101,100,0,0,0,112,111,115,105,116,105,111,110,83,116,105,99,107,121,0,0,111,118,101,114,102,108,111,119,83,99,114,111,108,108,105,110,103,84,111,117,99,104,0,0,98,101,102,111,114,101,0,0,115,116,97,99,107,105,110,103,0,0,0,0,0,0,0,0,111,118,101,114,108,97,112,0,110,101,103,97,116,105,118,101,90,73,110,100,101,120,67,104,105,108,100,114,101,110,0,0,116,114,97,110,115,102,111,114,109,87,105,116,104,67,111,109,112,111,115,105,116,101,100,68,101,115,99,101,110,100,97,110,116,115,0,0,0,0,0,0,111,112,97,99,105,116,121,87,105,116,104,67,111,109,112,111,115,105,116,101,100,68,101,115,99,101,110,100,97,110,116,115,0,0,0,0,0,0,0,0,109,97,115,107,87,105,116,104,67,111,109,112,111,115,105,116,101,100,68,101,115,99,101,110,100,97,110,116,115,0,0,0,114,101,102,108,101,99,116,105,111,110,87,105,116,104,67,111,109,112,111,115,105,116,101,100,68,101,115,99,101,110,100,97,110,116,115,0,0,0,0,0,102,105,108,116,101,114,87,105,116,104,67,111,109,112,111,115,105,116,101,100,68,101,115,99,101,110,100,97,110,116,115,0,98,108,101,110,100,105,110,103,87,105,116,104,67,111,109,112,111,115,105,116,101,100,68,101,115,99,101,110,100,97,110,116,115,0,0,0,0,0,0,0,112,101,114,115,112,101,99,116,105,118,101,0,0,0,0,0,78,111,100,101,32,102,111,114,32,112,114,111,118,105,100,101,100,32,110,111,100,101,32,105,100,32,100,111,101,115,110,39,116,32,104,97,118,101,32,97,32,114,101,110,100,101,114,101,114,0,0,0,0,0,0,0,112,114,101,115,101,114,118,101,51,68,0,0,0,0,0,0,114,111,111,116,0,0,0,0,108,97,121,101,114,73,100,0,110,111,100,101,73,100,0,0,98,111,117,110,100,115,0,0,109,101,109,111,114,121,0,0,99,111,109,112,111,115,105,116,101,100,66,111,117,110,100,115,0,0,0,0,0,0,0,0,112,97,105,110,116,67,111,117,110,116,0,0,0,0,0,0,120,0,0,0,0,0,0,0,121,0,0,0,0,0,0,0,80,114,111,118,105,100,101,100,32,110,111,100,101,32,105,100,32,100,111,101,115,110,39,116,32,109,97,116,99,104,32,97,110,121,32,107,110,111,119,110,32,110,111,100,101,0,0,0,76,97,121,101,114,84,114,101,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN9Inspector11TypeBuilder5ArrayINS0_9LayerTree5LayerEEE=(H_BASE+984)|0;
  var __ZTVN9Inspector18InspectorAgentBaseE=(H_BASE+944)|0;
  var __ZTVN7WebCore23InspectorLayerTreeAgentE=(H_BASE+1064)|0;
  var __ZTVN7WebCore18InspectorAgentBaseE=(H_BASE+1152)|0;
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
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore23InspectorLayerTreeAgent26reasonsForCompositingLayerEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder9LayerTree18CompositingReasonsEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0, i112 = 0, i113 = 0, i114 = 0, i115 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 784 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 72 | 0;
 i16 = i5 + 80 | 0;
 i17 = i5 + 88 | 0;
 i18 = i5 + 96 | 0;
 i19 = i5 + 104 | 0;
 i20 = i5 + 112 | 0;
 i21 = i5 + 120 | 0;
 i22 = i5 + 128 | 0;
 i23 = i5 + 136 | 0;
 i24 = i5 + 144 | 0;
 i25 = i5 + 152 | 0;
 i26 = i5 + 160 | 0;
 i27 = i5 + 168 | 0;
 i28 = i5 + 176 | 0;
 i29 = i5 + 184 | 0;
 i30 = i5 + 192 | 0;
 i31 = i5 + 200 | 0;
 i32 = i5 + 208 | 0;
 i33 = i5 + 216 | 0;
 i34 = i5 + 224 | 0;
 i35 = i5 + 232 | 0;
 i36 = i5 + 240 | 0;
 i37 = i5 + 248 | 0;
 i38 = i5 + 256 | 0;
 i39 = i5 + 264 | 0;
 i40 = i5 + 272 | 0;
 i41 = i5 + 280 | 0;
 i42 = i5 + 288 | 0;
 i43 = i5 + 296 | 0;
 i44 = i5 + 304 | 0;
 i45 = i5 + 312 | 0;
 i46 = i5 + 320 | 0;
 i47 = i5 + 328 | 0;
 i48 = i5 + 336 | 0;
 i49 = i5 + 344 | 0;
 i50 = i5 + 352 | 0;
 i51 = i5 + 360 | 0;
 i52 = i5 + 368 | 0;
 i53 = i5 + 376 | 0;
 i54 = i5 + 384 | 0;
 i55 = i5 + 392 | 0;
 i56 = i5 + 400 | 0;
 i57 = i5 + 408 | 0;
 i58 = i5 + 416 | 0;
 i59 = i5 + 424 | 0;
 i60 = i5 + 432 | 0;
 i61 = i5 + 440 | 0;
 i62 = i5 + 448 | 0;
 i63 = i5 + 456 | 0;
 i64 = i5 + 464 | 0;
 i65 = i5 + 472 | 0;
 i66 = i5 + 480 | 0;
 i67 = i5 + 488 | 0;
 i68 = i5 + 496 | 0;
 i69 = i5 + 504 | 0;
 i70 = i5 + 512 | 0;
 i71 = i5 + 520 | 0;
 i72 = i5 + 528 | 0;
 i73 = i5 + 536 | 0;
 i74 = i5 + 544 | 0;
 i75 = i5 + 552 | 0;
 i76 = i5 + 560 | 0;
 i77 = i5 + 568 | 0;
 i78 = i5 + 576 | 0;
 i79 = i5 + 584 | 0;
 i80 = i5 + 592 | 0;
 i81 = i5 + 600 | 0;
 i82 = i5 + 608 | 0;
 i83 = i5 + 616 | 0;
 i84 = i5 + 624 | 0;
 i85 = i5 + 632 | 0;
 i86 = i5 + 640 | 0;
 i87 = i5 + 648 | 0;
 i88 = i5 + 656 | 0;
 i89 = i5 + 664 | 0;
 i90 = i5 + 672 | 0;
 i91 = i5 + 680 | 0;
 i92 = i5 + 688 | 0;
 i93 = i5 + 696 | 0;
 i94 = i5 + 704 | 0;
 i95 = i5 + 712 | 0;
 i96 = i5 + 720 | 0;
 i97 = i5 + 728 | 0;
 i98 = i5 + 736 | 0;
 i99 = i5 + 744 | 0;
 i100 = i5 + 752 | 0;
 i101 = i5 + 760 | 0;
 i102 = i5 + 768 | 0;
 i103 = i5 + 776 | 0;
 i104 = HEAP32[i1 + 52 >> 2] | 0;
 i105 = HEAP32[i1 + 44 >> 2] | 0;
 i1 = i3 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i106 = HEAP32[i3 + 16 >> 2] | 0;
 if (i106 >>> 0 > 127 >>> 0) {
  i107 = i106 >>> 7;
 } else {
  i107 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 L5 : do {
  if ((i105 | 0) != 0) {
   i3 = (i107 >>> 23) + ~i107 | 0;
   i106 = i3 << 12 ^ i3;
   i3 = i106 >>> 7 ^ i106;
   i106 = i3 << 2 ^ i3;
   i3 = i106 >>> 20 ^ i106 | 1;
   i106 = i107;
   i108 = 0;
   while (1) {
    i109 = i106 & i104;
    i110 = i105 + (i109 << 3) | 0;
    i111 = HEAP32[i110 >> 2] | 0;
    i112 = i111;
    if ((i112 | 0) == 0) {
     break L5;
    } else if ((i112 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i111, HEAP32[i1 >> 2] | 0) | 0) {
      break;
     }
    }
    i111 = (i108 | 0) == 0 ? i3 : i108;
    i106 = i111 + i109 | 0;
    i108 = i111;
   }
   if ((i110 | 0) == 0) {
    break;
   }
   i108 = HEAP32[i105 + (i109 << 3) + 4 >> 2] | 0;
   if ((i108 | 0) == 0) {
    break;
   }
   i106 = __ZNK7WebCore21RenderLayerCompositor21reasonsForCompositingERKNS_11RenderLayerE(__ZNK7WebCore11RenderLayer10compositorEv(i108) | 0, i108) | 0;
   __ZN9Inspector15InspectorObject6createEv(i102);
   i108 = HEAP32[i102 >> 2] | 0;
   i3 = (i108 | 0) == 0;
   if (!i3) {
    i111 = i108 + 4 | 0;
    HEAP32[i111 >> 2] = (HEAP32[i111 >> 2] | 0) + 1;
   }
   i111 = i4 | 0;
   i112 = HEAP32[i111 >> 2] | 0;
   HEAP32[i111 >> 2] = i108;
   do {
    if ((i112 | 0) != 0) {
     i113 = i112 + 4 | 0;
     i114 = i113 | 0;
     i115 = (HEAP32[i114 >> 2] | 0) - 1 | 0;
     if ((i115 | 0) != 0) {
      HEAP32[i114 >> 2] = i115;
      break;
     }
     i115 = i113 - 4 | 0;
     if ((i115 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i115 >> 2] | 0) + 4 >> 2] & 31](i115);
    }
   } while (0);
   do {
    if (!i3) {
     i112 = i108 + 4 | 0;
     i115 = i112 | 0;
     i113 = (HEAP32[i115 >> 2] | 0) - 1 | 0;
     if ((i113 | 0) != 0) {
      HEAP32[i115 >> 2] = i113;
      break;
     }
     i113 = i112 - 4 | 0;
     if ((i113 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i113 >> 2] | 0) + 4 >> 2] & 31](i113);
    }
   } while (0);
   do {
    if ((i106 & 1 | 0) != 0) {
     i108 = HEAP32[i111 >> 2] | 0;
     HEAP32[i101 >> 2] = H_BASE + 216;
     __ZN3WTF6StringC1ENS_12ASCIILiteralE(i100, i101);
     __ZN9Inspector19InspectorBasicValue6createEb(i99, 1);
     i3 = i98 | 0;
     i113 = i99 | 0;
     i112 = HEAP32[i113 >> 2] | 0;
     HEAP32[i113 >> 2] = 0;
     HEAP32[i3 >> 2] = i112;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i108, i100, i98);
     i108 = HEAP32[i3 >> 2] | 0;
     do {
      if ((i108 | 0) != 0) {
       i3 = i108 + 4 | 0;
       i112 = i3 | 0;
       i115 = (HEAP32[i112 >> 2] | 0) - 1 | 0;
       if ((i115 | 0) != 0) {
        HEAP32[i112 >> 2] = i115;
        break;
       }
       i115 = i3 - 4 | 0;
       if ((i115 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i115 >> 2] | 0) + 4 >> 2] & 31](i115);
      }
     } while (0);
     i108 = HEAP32[i113 >> 2] | 0;
     do {
      if ((i108 | 0) != 0) {
       i115 = i108 + 4 | 0;
       i3 = i115 | 0;
       i112 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
       if ((i112 | 0) != 0) {
        HEAP32[i3 >> 2] = i112;
        break;
       }
       i112 = i115 - 4 | 0;
       if ((i112 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i112 >> 2] | 0) + 4 >> 2] & 31](i112);
      }
     } while (0);
     i108 = HEAP32[i100 >> 2] | 0;
     if ((i108 | 0) == 0) {
      break;
     }
     i113 = i108 | 0;
     i112 = (HEAP32[i113 >> 2] | 0) - 2 | 0;
     if ((i112 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i108);
      break;
     } else {
      HEAP32[i113 >> 2] = i112;
      break;
     }
    }
   } while (0);
   do {
    if ((i106 & 2 | 0) == 0) {
     if ((i106 & 4 | 0) != 0) {
      i112 = HEAP32[i111 >> 2] | 0;
      HEAP32[i93 >> 2] = H_BASE + 248;
      __ZN3WTF6StringC1ENS_12ASCIILiteralE(i92, i93);
      __ZN9Inspector19InspectorBasicValue6createEb(i91, 1);
      i113 = i90 | 0;
      i108 = i91 | 0;
      i115 = HEAP32[i108 >> 2] | 0;
      HEAP32[i108 >> 2] = 0;
      HEAP32[i113 >> 2] = i115;
      __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i112, i92, i90);
      i112 = HEAP32[i113 >> 2] | 0;
      do {
       if ((i112 | 0) != 0) {
        i113 = i112 + 4 | 0;
        i115 = i113 | 0;
        i3 = (HEAP32[i115 >> 2] | 0) - 1 | 0;
        if ((i3 | 0) != 0) {
         HEAP32[i115 >> 2] = i3;
         break;
        }
        i3 = i113 - 4 | 0;
        if ((i3 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
       }
      } while (0);
      i112 = HEAP32[i108 >> 2] | 0;
      do {
       if ((i112 | 0) != 0) {
        i3 = i112 + 4 | 0;
        i113 = i3 | 0;
        i115 = (HEAP32[i113 >> 2] | 0) - 1 | 0;
        if ((i115 | 0) != 0) {
         HEAP32[i113 >> 2] = i115;
         break;
        }
        i115 = i3 - 4 | 0;
        if ((i115 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i115 >> 2] | 0) + 4 >> 2] & 31](i115);
       }
      } while (0);
      i112 = HEAP32[i92 >> 2] | 0;
      if ((i112 | 0) == 0) {
       break;
      }
      i108 = i112 | 0;
      i115 = (HEAP32[i108 >> 2] | 0) - 2 | 0;
      if ((i115 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i112);
       break;
      } else {
       HEAP32[i108 >> 2] = i115;
       break;
      }
     }
     if ((i106 & 8 | 0) != 0) {
      i115 = HEAP32[i111 >> 2] | 0;
      HEAP32[i89 >> 2] = H_BASE + 256;
      __ZN3WTF6StringC1ENS_12ASCIILiteralE(i88, i89);
      __ZN9Inspector19InspectorBasicValue6createEb(i87, 1);
      i108 = i86 | 0;
      i112 = i87 | 0;
      i3 = HEAP32[i112 >> 2] | 0;
      HEAP32[i112 >> 2] = 0;
      HEAP32[i108 >> 2] = i3;
      __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i115, i88, i86);
      i115 = HEAP32[i108 >> 2] | 0;
      do {
       if ((i115 | 0) != 0) {
        i108 = i115 + 4 | 0;
        i3 = i108 | 0;
        i113 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
        if ((i113 | 0) != 0) {
         HEAP32[i3 >> 2] = i113;
         break;
        }
        i113 = i108 - 4 | 0;
        if ((i113 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i113 >> 2] | 0) + 4 >> 2] & 31](i113);
       }
      } while (0);
      i115 = HEAP32[i112 >> 2] | 0;
      do {
       if ((i115 | 0) != 0) {
        i113 = i115 + 4 | 0;
        i108 = i113 | 0;
        i3 = (HEAP32[i108 >> 2] | 0) - 1 | 0;
        if ((i3 | 0) != 0) {
         HEAP32[i108 >> 2] = i3;
         break;
        }
        i3 = i113 - 4 | 0;
        if ((i3 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
       }
      } while (0);
      i115 = HEAP32[i88 >> 2] | 0;
      if ((i115 | 0) == 0) {
       break;
      }
      i112 = i115 | 0;
      i3 = (HEAP32[i112 >> 2] | 0) - 2 | 0;
      if ((i3 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i115);
       break;
      } else {
       HEAP32[i112 >> 2] = i3;
       break;
      }
     }
     if ((i106 & 16 | 0) == 0) {
      break;
     }
     i3 = HEAP32[i111 >> 2] | 0;
     HEAP32[i85 >> 2] = H_BASE + 264;
     __ZN3WTF6StringC1ENS_12ASCIILiteralE(i84, i85);
     __ZN9Inspector19InspectorBasicValue6createEb(i83, 1);
     i112 = i82 | 0;
     i115 = i83 | 0;
     i113 = HEAP32[i115 >> 2] | 0;
     HEAP32[i115 >> 2] = 0;
     HEAP32[i112 >> 2] = i113;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i3, i84, i82);
     i3 = HEAP32[i112 >> 2] | 0;
     do {
      if ((i3 | 0) != 0) {
       i112 = i3 + 4 | 0;
       i113 = i112 | 0;
       i108 = (HEAP32[i113 >> 2] | 0) - 1 | 0;
       if ((i108 | 0) != 0) {
        HEAP32[i113 >> 2] = i108;
        break;
       }
       i108 = i112 - 4 | 0;
       if ((i108 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i108 >> 2] | 0) + 4 >> 2] & 31](i108);
      }
     } while (0);
     i3 = HEAP32[i115 >> 2] | 0;
     do {
      if ((i3 | 0) != 0) {
       i108 = i3 + 4 | 0;
       i112 = i108 | 0;
       i113 = (HEAP32[i112 >> 2] | 0) - 1 | 0;
       if ((i113 | 0) != 0) {
        HEAP32[i112 >> 2] = i113;
        break;
       }
       i113 = i108 - 4 | 0;
       if ((i113 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i113 >> 2] | 0) + 4 >> 2] & 31](i113);
      }
     } while (0);
     i3 = HEAP32[i84 >> 2] | 0;
     if ((i3 | 0) == 0) {
      break;
     }
     i115 = i3 | 0;
     i113 = (HEAP32[i115 >> 2] | 0) - 2 | 0;
     if ((i113 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i3);
      break;
     } else {
      HEAP32[i115 >> 2] = i113;
      break;
     }
    } else {
     i113 = HEAP32[i111 >> 2] | 0;
     HEAP32[i97 >> 2] = H_BASE + 232;
     __ZN3WTF6StringC1ENS_12ASCIILiteralE(i96, i97);
     __ZN9Inspector19InspectorBasicValue6createEb(i95, 1);
     i115 = i94 | 0;
     i3 = i95 | 0;
     i108 = HEAP32[i3 >> 2] | 0;
     HEAP32[i3 >> 2] = 0;
     HEAP32[i115 >> 2] = i108;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i113, i96, i94);
     i113 = HEAP32[i115 >> 2] | 0;
     do {
      if ((i113 | 0) != 0) {
       i115 = i113 + 4 | 0;
       i108 = i115 | 0;
       i112 = (HEAP32[i108 >> 2] | 0) - 1 | 0;
       if ((i112 | 0) != 0) {
        HEAP32[i108 >> 2] = i112;
        break;
       }
       i112 = i115 - 4 | 0;
       if ((i112 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i112 >> 2] | 0) + 4 >> 2] & 31](i112);
      }
     } while (0);
     i113 = HEAP32[i3 >> 2] | 0;
     do {
      if ((i113 | 0) != 0) {
       i112 = i113 + 4 | 0;
       i115 = i112 | 0;
       i108 = (HEAP32[i115 >> 2] | 0) - 1 | 0;
       if ((i108 | 0) != 0) {
        HEAP32[i115 >> 2] = i108;
        break;
       }
       i108 = i112 - 4 | 0;
       if ((i108 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i108 >> 2] | 0) + 4 >> 2] & 31](i108);
      }
     } while (0);
     i113 = HEAP32[i96 >> 2] | 0;
     if ((i113 | 0) == 0) {
      break;
     }
     i3 = i113 | 0;
     i108 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
     if ((i108 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i113);
      break;
     } else {
      HEAP32[i3 >> 2] = i108;
      break;
     }
    }
   } while (0);
   do {
    if ((i106 & 32 | 0) != 0) {
     i108 = HEAP32[i111 >> 2] | 0;
     HEAP32[i81 >> 2] = H_BASE + 272;
     __ZN3WTF6StringC1ENS_12ASCIILiteralE(i80, i81);
     __ZN9Inspector19InspectorBasicValue6createEb(i79, 1);
     i3 = i78 | 0;
     i113 = i79 | 0;
     i112 = HEAP32[i113 >> 2] | 0;
     HEAP32[i113 >> 2] = 0;
     HEAP32[i3 >> 2] = i112;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i108, i80, i78);
     i108 = HEAP32[i3 >> 2] | 0;
     do {
      if ((i108 | 0) != 0) {
       i3 = i108 + 4 | 0;
       i112 = i3 | 0;
       i115 = (HEAP32[i112 >> 2] | 0) - 1 | 0;
       if ((i115 | 0) != 0) {
        HEAP32[i112 >> 2] = i115;
        break;
       }
       i115 = i3 - 4 | 0;
       if ((i115 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i115 >> 2] | 0) + 4 >> 2] & 31](i115);
      }
     } while (0);
     i108 = HEAP32[i113 >> 2] | 0;
     do {
      if ((i108 | 0) != 0) {
       i115 = i108 + 4 | 0;
       i3 = i115 | 0;
       i112 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
       if ((i112 | 0) != 0) {
        HEAP32[i3 >> 2] = i112;
        break;
       }
       i112 = i115 - 4 | 0;
       if ((i112 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i112 >> 2] | 0) + 4 >> 2] & 31](i112);
      }
     } while (0);
     i108 = HEAP32[i80 >> 2] | 0;
     if ((i108 | 0) == 0) {
      break;
     }
     i113 = i108 | 0;
     i112 = (HEAP32[i113 >> 2] | 0) - 2 | 0;
     if ((i112 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i108);
      break;
     } else {
      HEAP32[i113 >> 2] = i112;
      break;
     }
    }
   } while (0);
   do {
    if ((i106 & 64 | 0) != 0) {
     i112 = HEAP32[i111 >> 2] | 0;
     HEAP32[i77 >> 2] = H_BASE + 304;
     __ZN3WTF6StringC1ENS_12ASCIILiteralE(i76, i77);
     __ZN9Inspector19InspectorBasicValue6createEb(i75, 1);
     i113 = i74 | 0;
     i108 = i75 | 0;
     i115 = HEAP32[i108 >> 2] | 0;
     HEAP32[i108 >> 2] = 0;
     HEAP32[i113 >> 2] = i115;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i112, i76, i74);
     i112 = HEAP32[i113 >> 2] | 0;
     do {
      if ((i112 | 0) != 0) {
       i113 = i112 + 4 | 0;
       i115 = i113 | 0;
       i3 = (HEAP32[i115 >> 2] | 0) - 1 | 0;
       if ((i3 | 0) != 0) {
        HEAP32[i115 >> 2] = i3;
        break;
       }
       i3 = i113 - 4 | 0;
       if ((i3 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
      }
     } while (0);
     i112 = HEAP32[i108 >> 2] | 0;
     do {
      if ((i112 | 0) != 0) {
       i3 = i112 + 4 | 0;
       i113 = i3 | 0;
       i115 = (HEAP32[i113 >> 2] | 0) - 1 | 0;
       if ((i115 | 0) != 0) {
        HEAP32[i113 >> 2] = i115;
        break;
       }
       i115 = i3 - 4 | 0;
       if ((i115 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i115 >> 2] | 0) + 4 >> 2] & 31](i115);
      }
     } while (0);
     i112 = HEAP32[i76 >> 2] | 0;
     if ((i112 | 0) == 0) {
      break;
     }
     i108 = i112 | 0;
     i115 = (HEAP32[i108 >> 2] | 0) - 2 | 0;
     if ((i115 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i112);
      break;
     } else {
      HEAP32[i108 >> 2] = i115;
      break;
     }
    }
   } while (0);
   do {
    if ((i106 & 128 | 0) != 0) {
     i115 = HEAP32[i111 >> 2] | 0;
     HEAP32[i73 >> 2] = H_BASE + 336;
     __ZN3WTF6StringC1ENS_12ASCIILiteralE(i72, i73);
     __ZN9Inspector19InspectorBasicValue6createEb(i71, 1);
     i108 = i70 | 0;
     i112 = i71 | 0;
     i3 = HEAP32[i112 >> 2] | 0;
     HEAP32[i112 >> 2] = 0;
     HEAP32[i108 >> 2] = i3;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i115, i72, i70);
     i115 = HEAP32[i108 >> 2] | 0;
     do {
      if ((i115 | 0) != 0) {
       i108 = i115 + 4 | 0;
       i3 = i108 | 0;
       i113 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
       if ((i113 | 0) != 0) {
        HEAP32[i3 >> 2] = i113;
        break;
       }
       i113 = i108 - 4 | 0;
       if ((i113 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i113 >> 2] | 0) + 4 >> 2] & 31](i113);
      }
     } while (0);
     i115 = HEAP32[i112 >> 2] | 0;
     do {
      if ((i115 | 0) != 0) {
       i113 = i115 + 4 | 0;
       i108 = i113 | 0;
       i3 = (HEAP32[i108 >> 2] | 0) - 1 | 0;
       if ((i3 | 0) != 0) {
        HEAP32[i108 >> 2] = i3;
        break;
       }
       i3 = i113 - 4 | 0;
       if ((i3 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
      }
     } while (0);
     i115 = HEAP32[i72 >> 2] | 0;
     if ((i115 | 0) == 0) {
      break;
     }
     i112 = i115 | 0;
     i3 = (HEAP32[i112 >> 2] | 0) - 2 | 0;
     if ((i3 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i115);
      break;
     } else {
      HEAP32[i112 >> 2] = i3;
      break;
     }
    }
   } while (0);
   do {
    if ((i106 & 256 | 0) != 0) {
     i3 = HEAP32[i111 >> 2] | 0;
     HEAP32[i69 >> 2] = H_BASE + 352;
     __ZN3WTF6StringC1ENS_12ASCIILiteralE(i68, i69);
     __ZN9Inspector19InspectorBasicValue6createEb(i67, 1);
     i112 = i66 | 0;
     i115 = i67 | 0;
     i113 = HEAP32[i115 >> 2] | 0;
     HEAP32[i115 >> 2] = 0;
     HEAP32[i112 >> 2] = i113;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i3, i68, i66);
     i3 = HEAP32[i112 >> 2] | 0;
     do {
      if ((i3 | 0) != 0) {
       i112 = i3 + 4 | 0;
       i113 = i112 | 0;
       i108 = (HEAP32[i113 >> 2] | 0) - 1 | 0;
       if ((i108 | 0) != 0) {
        HEAP32[i113 >> 2] = i108;
        break;
       }
       i108 = i112 - 4 | 0;
       if ((i108 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i108 >> 2] | 0) + 4 >> 2] & 31](i108);
      }
     } while (0);
     i3 = HEAP32[i115 >> 2] | 0;
     do {
      if ((i3 | 0) != 0) {
       i108 = i3 + 4 | 0;
       i112 = i108 | 0;
       i113 = (HEAP32[i112 >> 2] | 0) - 1 | 0;
       if ((i113 | 0) != 0) {
        HEAP32[i112 >> 2] = i113;
        break;
       }
       i113 = i108 - 4 | 0;
       if ((i113 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i113 >> 2] | 0) + 4 >> 2] & 31](i113);
      }
     } while (0);
     i3 = HEAP32[i68 >> 2] | 0;
     if ((i3 | 0) == 0) {
      break;
     }
     i115 = i3 | 0;
     i113 = (HEAP32[i115 >> 2] | 0) - 2 | 0;
     if ((i113 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i3);
      break;
     } else {
      HEAP32[i115 >> 2] = i113;
      break;
     }
    }
   } while (0);
   do {
    if ((i106 & 512 | 0) != 0) {
     i113 = HEAP32[i111 >> 2] | 0;
     HEAP32[i65 >> 2] = H_BASE + 360;
     __ZN3WTF6StringC1ENS_12ASCIILiteralE(i64, i65);
     __ZN9Inspector19InspectorBasicValue6createEb(i63, 1);
     i115 = i62 | 0;
     i3 = i63 | 0;
     i108 = HEAP32[i3 >> 2] | 0;
     HEAP32[i3 >> 2] = 0;
     HEAP32[i115 >> 2] = i108;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i113, i64, i62);
     i113 = HEAP32[i115 >> 2] | 0;
     do {
      if ((i113 | 0) != 0) {
       i115 = i113 + 4 | 0;
       i108 = i115 | 0;
       i112 = (HEAP32[i108 >> 2] | 0) - 1 | 0;
       if ((i112 | 0) != 0) {
        HEAP32[i108 >> 2] = i112;
        break;
       }
       i112 = i115 - 4 | 0;
       if ((i112 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i112 >> 2] | 0) + 4 >> 2] & 31](i112);
      }
     } while (0);
     i113 = HEAP32[i3 >> 2] | 0;
     do {
      if ((i113 | 0) != 0) {
       i112 = i113 + 4 | 0;
       i115 = i112 | 0;
       i108 = (HEAP32[i115 >> 2] | 0) - 1 | 0;
       if ((i108 | 0) != 0) {
        HEAP32[i115 >> 2] = i108;
        break;
       }
       i108 = i112 - 4 | 0;
       if ((i108 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i108 >> 2] | 0) + 4 >> 2] & 31](i108);
      }
     } while (0);
     i113 = HEAP32[i64 >> 2] | 0;
     if ((i113 | 0) == 0) {
      break;
     }
     i3 = i113 | 0;
     i108 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
     if ((i108 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i113);
      break;
     } else {
      HEAP32[i3 >> 2] = i108;
      break;
     }
    }
   } while (0);
   do {
    if ((i106 & 1024 | 0) != 0) {
     i108 = HEAP32[i111 >> 2] | 0;
     HEAP32[i61 >> 2] = H_BASE + 376;
     __ZN3WTF6StringC1ENS_12ASCIILiteralE(i60, i61);
     __ZN9Inspector19InspectorBasicValue6createEb(i59, 1);
     i3 = i58 | 0;
     i113 = i59 | 0;
     i112 = HEAP32[i113 >> 2] | 0;
     HEAP32[i113 >> 2] = 0;
     HEAP32[i3 >> 2] = i112;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i108, i60, i58);
     i108 = HEAP32[i3 >> 2] | 0;
     do {
      if ((i108 | 0) != 0) {
       i3 = i108 + 4 | 0;
       i112 = i3 | 0;
       i115 = (HEAP32[i112 >> 2] | 0) - 1 | 0;
       if ((i115 | 0) != 0) {
        HEAP32[i112 >> 2] = i115;
        break;
       }
       i115 = i3 - 4 | 0;
       if ((i115 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i115 >> 2] | 0) + 4 >> 2] & 31](i115);
      }
     } while (0);
     i108 = HEAP32[i113 >> 2] | 0;
     do {
      if ((i108 | 0) != 0) {
       i115 = i108 + 4 | 0;
       i3 = i115 | 0;
       i112 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
       if ((i112 | 0) != 0) {
        HEAP32[i3 >> 2] = i112;
        break;
       }
       i112 = i115 - 4 | 0;
       if ((i112 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i112 >> 2] | 0) + 4 >> 2] & 31](i112);
      }
     } while (0);
     i108 = HEAP32[i60 >> 2] | 0;
     if ((i108 | 0) == 0) {
      break;
     }
     i113 = i108 | 0;
     i112 = (HEAP32[i113 >> 2] | 0) - 2 | 0;
     if ((i112 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i108);
      break;
     } else {
      HEAP32[i113 >> 2] = i112;
      break;
     }
    }
   } while (0);
   do {
    if ((i106 & 2048 | 0) != 0) {
     i112 = HEAP32[i111 >> 2] | 0;
     HEAP32[i57 >> 2] = H_BASE + 392;
     __ZN3WTF6StringC1ENS_12ASCIILiteralE(i56, i57);
     __ZN9Inspector19InspectorBasicValue6createEb(i55, 1);
     i113 = i54 | 0;
     i108 = i55 | 0;
     i115 = HEAP32[i108 >> 2] | 0;
     HEAP32[i108 >> 2] = 0;
     HEAP32[i113 >> 2] = i115;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i112, i56, i54);
     i112 = HEAP32[i113 >> 2] | 0;
     do {
      if ((i112 | 0) != 0) {
       i113 = i112 + 4 | 0;
       i115 = i113 | 0;
       i3 = (HEAP32[i115 >> 2] | 0) - 1 | 0;
       if ((i3 | 0) != 0) {
        HEAP32[i115 >> 2] = i3;
        break;
       }
       i3 = i113 - 4 | 0;
       if ((i3 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
      }
     } while (0);
     i112 = HEAP32[i108 >> 2] | 0;
     do {
      if ((i112 | 0) != 0) {
       i3 = i112 + 4 | 0;
       i113 = i3 | 0;
       i115 = (HEAP32[i113 >> 2] | 0) - 1 | 0;
       if ((i115 | 0) != 0) {
        HEAP32[i113 >> 2] = i115;
        break;
       }
       i115 = i3 - 4 | 0;
       if ((i115 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i115 >> 2] | 0) + 4 >> 2] & 31](i115);
      }
     } while (0);
     i112 = HEAP32[i56 >> 2] | 0;
     if ((i112 | 0) == 0) {
      break;
     }
     i108 = i112 | 0;
     i115 = (HEAP32[i108 >> 2] | 0) - 2 | 0;
     if ((i115 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i112);
      break;
     } else {
      HEAP32[i108 >> 2] = i115;
      break;
     }
    }
   } while (0);
   do {
    if ((i106 & 4096 | 0) != 0) {
     i115 = HEAP32[i111 >> 2] | 0;
     HEAP32[i53 >> 2] = H_BASE + 424;
     __ZN3WTF6StringC1ENS_12ASCIILiteralE(i52, i53);
     __ZN9Inspector19InspectorBasicValue6createEb(i51, 1);
     i108 = i50 | 0;
     i112 = i51 | 0;
     i3 = HEAP32[i112 >> 2] | 0;
     HEAP32[i112 >> 2] = 0;
     HEAP32[i108 >> 2] = i3;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i115, i52, i50);
     i115 = HEAP32[i108 >> 2] | 0;
     do {
      if ((i115 | 0) != 0) {
       i108 = i115 + 4 | 0;
       i3 = i108 | 0;
       i113 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
       if ((i113 | 0) != 0) {
        HEAP32[i3 >> 2] = i113;
        break;
       }
       i113 = i108 - 4 | 0;
       if ((i113 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i113 >> 2] | 0) + 4 >> 2] & 31](i113);
      }
     } while (0);
     i115 = HEAP32[i112 >> 2] | 0;
     do {
      if ((i115 | 0) != 0) {
       i113 = i115 + 4 | 0;
       i108 = i113 | 0;
       i3 = (HEAP32[i108 >> 2] | 0) - 1 | 0;
       if ((i3 | 0) != 0) {
        HEAP32[i108 >> 2] = i3;
        break;
       }
       i3 = i113 - 4 | 0;
       if ((i3 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
      }
     } while (0);
     i115 = HEAP32[i52 >> 2] | 0;
     if ((i115 | 0) == 0) {
      break;
     }
     i112 = i115 | 0;
     i3 = (HEAP32[i112 >> 2] | 0) - 2 | 0;
     if ((i3 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i115);
      break;
     } else {
      HEAP32[i112 >> 2] = i3;
      break;
     }
    }
   } while (0);
   do {
    if ((i106 & 8192 | 0) != 0) {
     i3 = HEAP32[i111 >> 2] | 0;
     HEAP32[i49 >> 2] = H_BASE + 440;
     __ZN3WTF6StringC1ENS_12ASCIILiteralE(i48, i49);
     __ZN9Inspector19InspectorBasicValue6createEb(i47, 1);
     i112 = i46 | 0;
     i115 = i47 | 0;
     i113 = HEAP32[i115 >> 2] | 0;
     HEAP32[i115 >> 2] = 0;
     HEAP32[i112 >> 2] = i113;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i3, i48, i46);
     i3 = HEAP32[i112 >> 2] | 0;
     do {
      if ((i3 | 0) != 0) {
       i112 = i3 + 4 | 0;
       i113 = i112 | 0;
       i108 = (HEAP32[i113 >> 2] | 0) - 1 | 0;
       if ((i108 | 0) != 0) {
        HEAP32[i113 >> 2] = i108;
        break;
       }
       i108 = i112 - 4 | 0;
       if ((i108 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i108 >> 2] | 0) + 4 >> 2] & 31](i108);
      }
     } while (0);
     i3 = HEAP32[i115 >> 2] | 0;
     do {
      if ((i3 | 0) != 0) {
       i108 = i3 + 4 | 0;
       i112 = i108 | 0;
       i113 = (HEAP32[i112 >> 2] | 0) - 1 | 0;
       if ((i113 | 0) != 0) {
        HEAP32[i112 >> 2] = i113;
        break;
       }
       i113 = i108 - 4 | 0;
       if ((i113 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i113 >> 2] | 0) + 4 >> 2] & 31](i113);
      }
     } while (0);
     i3 = HEAP32[i48 >> 2] | 0;
     if ((i3 | 0) == 0) {
      break;
     }
     i115 = i3 | 0;
     i113 = (HEAP32[i115 >> 2] | 0) - 2 | 0;
     if ((i113 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i3);
      break;
     } else {
      HEAP32[i115 >> 2] = i113;
      break;
     }
    }
   } while (0);
   do {
    if ((i106 & 16384 | 0) != 0) {
     i113 = HEAP32[i111 >> 2] | 0;
     HEAP32[i45 >> 2] = H_BASE + 448;
     __ZN3WTF6StringC1ENS_12ASCIILiteralE(i44, i45);
     __ZN9Inspector19InspectorBasicValue6createEb(i43, 1);
     i115 = i42 | 0;
     i3 = i43 | 0;
     i108 = HEAP32[i3 >> 2] | 0;
     HEAP32[i3 >> 2] = 0;
     HEAP32[i115 >> 2] = i108;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i113, i44, i42);
     i113 = HEAP32[i115 >> 2] | 0;
     do {
      if ((i113 | 0) != 0) {
       i115 = i113 + 4 | 0;
       i108 = i115 | 0;
       i112 = (HEAP32[i108 >> 2] | 0) - 1 | 0;
       if ((i112 | 0) != 0) {
        HEAP32[i108 >> 2] = i112;
        break;
       }
       i112 = i115 - 4 | 0;
       if ((i112 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i112 >> 2] | 0) + 4 >> 2] & 31](i112);
      }
     } while (0);
     i113 = HEAP32[i3 >> 2] | 0;
     do {
      if ((i113 | 0) != 0) {
       i112 = i113 + 4 | 0;
       i115 = i112 | 0;
       i108 = (HEAP32[i115 >> 2] | 0) - 1 | 0;
       if ((i108 | 0) != 0) {
        HEAP32[i115 >> 2] = i108;
        break;
       }
       i108 = i112 - 4 | 0;
       if ((i108 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i108 >> 2] | 0) + 4 >> 2] & 31](i108);
      }
     } while (0);
     i113 = HEAP32[i44 >> 2] | 0;
     if ((i113 | 0) == 0) {
      break;
     }
     i3 = i113 | 0;
     i108 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
     if ((i108 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i113);
      break;
     } else {
      HEAP32[i3 >> 2] = i108;
      break;
     }
    }
   } while (0);
   do {
    if ((i106 & 32768 | 0) != 0) {
     i108 = HEAP32[i111 >> 2] | 0;
     HEAP32[i41 >> 2] = H_BASE + 472;
     __ZN3WTF6StringC1ENS_12ASCIILiteralE(i40, i41);
     __ZN9Inspector19InspectorBasicValue6createEb(i39, 1);
     i3 = i38 | 0;
     i113 = i39 | 0;
     i112 = HEAP32[i113 >> 2] | 0;
     HEAP32[i113 >> 2] = 0;
     HEAP32[i3 >> 2] = i112;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i108, i40, i38);
     i108 = HEAP32[i3 >> 2] | 0;
     do {
      if ((i108 | 0) != 0) {
       i3 = i108 + 4 | 0;
       i112 = i3 | 0;
       i115 = (HEAP32[i112 >> 2] | 0) - 1 | 0;
       if ((i115 | 0) != 0) {
        HEAP32[i112 >> 2] = i115;
        break;
       }
       i115 = i3 - 4 | 0;
       if ((i115 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i115 >> 2] | 0) + 4 >> 2] & 31](i115);
      }
     } while (0);
     i108 = HEAP32[i113 >> 2] | 0;
     do {
      if ((i108 | 0) != 0) {
       i115 = i108 + 4 | 0;
       i3 = i115 | 0;
       i112 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
       if ((i112 | 0) != 0) {
        HEAP32[i3 >> 2] = i112;
        break;
       }
       i112 = i115 - 4 | 0;
       if ((i112 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i112 >> 2] | 0) + 4 >> 2] & 31](i112);
      }
     } while (0);
     i108 = HEAP32[i40 >> 2] | 0;
     if ((i108 | 0) == 0) {
      break;
     }
     i113 = i108 | 0;
     i112 = (HEAP32[i113 >> 2] | 0) - 2 | 0;
     if ((i112 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i108);
      break;
     } else {
      HEAP32[i113 >> 2] = i112;
      break;
     }
    }
   } while (0);
   do {
    if ((i106 & 65536 | 0) != 0) {
     i112 = HEAP32[i111 >> 2] | 0;
     HEAP32[i37 >> 2] = H_BASE + 512;
     __ZN3WTF6StringC1ENS_12ASCIILiteralE(i36, i37);
     __ZN9Inspector19InspectorBasicValue6createEb(i35, 1);
     i113 = i34 | 0;
     i108 = i35 | 0;
     i115 = HEAP32[i108 >> 2] | 0;
     HEAP32[i108 >> 2] = 0;
     HEAP32[i113 >> 2] = i115;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i112, i36, i34);
     i112 = HEAP32[i113 >> 2] | 0;
     do {
      if ((i112 | 0) != 0) {
       i113 = i112 + 4 | 0;
       i115 = i113 | 0;
       i3 = (HEAP32[i115 >> 2] | 0) - 1 | 0;
       if ((i3 | 0) != 0) {
        HEAP32[i115 >> 2] = i3;
        break;
       }
       i3 = i113 - 4 | 0;
       if ((i3 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
      }
     } while (0);
     i112 = HEAP32[i108 >> 2] | 0;
     do {
      if ((i112 | 0) != 0) {
       i3 = i112 + 4 | 0;
       i113 = i3 | 0;
       i115 = (HEAP32[i113 >> 2] | 0) - 1 | 0;
       if ((i115 | 0) != 0) {
        HEAP32[i113 >> 2] = i115;
        break;
       }
       i115 = i3 - 4 | 0;
       if ((i115 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i115 >> 2] | 0) + 4 >> 2] & 31](i115);
      }
     } while (0);
     i112 = HEAP32[i36 >> 2] | 0;
     if ((i112 | 0) == 0) {
      break;
     }
     i108 = i112 | 0;
     i115 = (HEAP32[i108 >> 2] | 0) - 2 | 0;
     if ((i115 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i112);
      break;
     } else {
      HEAP32[i108 >> 2] = i115;
      break;
     }
    }
   } while (0);
   do {
    if ((i106 & 131072 | 0) != 0) {
     i115 = HEAP32[i111 >> 2] | 0;
     HEAP32[i33 >> 2] = H_BASE + 552;
     __ZN3WTF6StringC1ENS_12ASCIILiteralE(i32, i33);
     __ZN9Inspector19InspectorBasicValue6createEb(i31, 1);
     i108 = i30 | 0;
     i112 = i31 | 0;
     i3 = HEAP32[i112 >> 2] | 0;
     HEAP32[i112 >> 2] = 0;
     HEAP32[i108 >> 2] = i3;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i115, i32, i30);
     i115 = HEAP32[i108 >> 2] | 0;
     do {
      if ((i115 | 0) != 0) {
       i108 = i115 + 4 | 0;
       i3 = i108 | 0;
       i113 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
       if ((i113 | 0) != 0) {
        HEAP32[i3 >> 2] = i113;
        break;
       }
       i113 = i108 - 4 | 0;
       if ((i113 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i113 >> 2] | 0) + 4 >> 2] & 31](i113);
      }
     } while (0);
     i115 = HEAP32[i112 >> 2] | 0;
     do {
      if ((i115 | 0) != 0) {
       i113 = i115 + 4 | 0;
       i108 = i113 | 0;
       i3 = (HEAP32[i108 >> 2] | 0) - 1 | 0;
       if ((i3 | 0) != 0) {
        HEAP32[i108 >> 2] = i3;
        break;
       }
       i3 = i113 - 4 | 0;
       if ((i3 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
      }
     } while (0);
     i115 = HEAP32[i32 >> 2] | 0;
     if ((i115 | 0) == 0) {
      break;
     }
     i112 = i115 | 0;
     i3 = (HEAP32[i112 >> 2] | 0) - 2 | 0;
     if ((i3 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i115);
      break;
     } else {
      HEAP32[i112 >> 2] = i3;
      break;
     }
    }
   } while (0);
   do {
    if ((i106 & 262144 | 0) != 0) {
     i3 = HEAP32[i111 >> 2] | 0;
     HEAP32[i29 >> 2] = H_BASE + 584;
     __ZN3WTF6StringC1ENS_12ASCIILiteralE(i28, i29);
     __ZN9Inspector19InspectorBasicValue6createEb(i27, 1);
     i112 = i26 | 0;
     i115 = i27 | 0;
     i113 = HEAP32[i115 >> 2] | 0;
     HEAP32[i115 >> 2] = 0;
     HEAP32[i112 >> 2] = i113;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i3, i28, i26);
     i3 = HEAP32[i112 >> 2] | 0;
     do {
      if ((i3 | 0) != 0) {
       i112 = i3 + 4 | 0;
       i113 = i112 | 0;
       i108 = (HEAP32[i113 >> 2] | 0) - 1 | 0;
       if ((i108 | 0) != 0) {
        HEAP32[i113 >> 2] = i108;
        break;
       }
       i108 = i112 - 4 | 0;
       if ((i108 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i108 >> 2] | 0) + 4 >> 2] & 31](i108);
      }
     } while (0);
     i3 = HEAP32[i115 >> 2] | 0;
     do {
      if ((i3 | 0) != 0) {
       i108 = i3 + 4 | 0;
       i112 = i108 | 0;
       i113 = (HEAP32[i112 >> 2] | 0) - 1 | 0;
       if ((i113 | 0) != 0) {
        HEAP32[i112 >> 2] = i113;
        break;
       }
       i113 = i108 - 4 | 0;
       if ((i113 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i113 >> 2] | 0) + 4 >> 2] & 31](i113);
      }
     } while (0);
     i3 = HEAP32[i28 >> 2] | 0;
     if ((i3 | 0) == 0) {
      break;
     }
     i115 = i3 | 0;
     i113 = (HEAP32[i115 >> 2] | 0) - 2 | 0;
     if ((i113 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i3);
      break;
     } else {
      HEAP32[i115 >> 2] = i113;
      break;
     }
    }
   } while (0);
   do {
    if ((i106 & 524288 | 0) != 0) {
     i113 = HEAP32[i111 >> 2] | 0;
     HEAP32[i25 >> 2] = H_BASE + 624;
     __ZN3WTF6StringC1ENS_12ASCIILiteralE(i24, i25);
     __ZN9Inspector19InspectorBasicValue6createEb(i23, 1);
     i115 = i22 | 0;
     i3 = i23 | 0;
     i108 = HEAP32[i3 >> 2] | 0;
     HEAP32[i3 >> 2] = 0;
     HEAP32[i115 >> 2] = i108;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i113, i24, i22);
     i113 = HEAP32[i115 >> 2] | 0;
     do {
      if ((i113 | 0) != 0) {
       i115 = i113 + 4 | 0;
       i108 = i115 | 0;
       i112 = (HEAP32[i108 >> 2] | 0) - 1 | 0;
       if ((i112 | 0) != 0) {
        HEAP32[i108 >> 2] = i112;
        break;
       }
       i112 = i115 - 4 | 0;
       if ((i112 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i112 >> 2] | 0) + 4 >> 2] & 31](i112);
      }
     } while (0);
     i113 = HEAP32[i3 >> 2] | 0;
     do {
      if ((i113 | 0) != 0) {
       i112 = i113 + 4 | 0;
       i115 = i112 | 0;
       i108 = (HEAP32[i115 >> 2] | 0) - 1 | 0;
       if ((i108 | 0) != 0) {
        HEAP32[i115 >> 2] = i108;
        break;
       }
       i108 = i112 - 4 | 0;
       if ((i108 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i108 >> 2] | 0) + 4 >> 2] & 31](i108);
      }
     } while (0);
     i113 = HEAP32[i24 >> 2] | 0;
     if ((i113 | 0) == 0) {
      break;
     }
     i3 = i113 | 0;
     i108 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
     if ((i108 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i113);
      break;
     } else {
      HEAP32[i3 >> 2] = i108;
      break;
     }
    }
   } while (0);
   do {
    if ((i106 & 1048576 | 0) != 0) {
     i108 = HEAP32[i111 >> 2] | 0;
     HEAP32[i21 >> 2] = H_BASE + 656;
     __ZN3WTF6StringC1ENS_12ASCIILiteralE(i20, i21);
     __ZN9Inspector19InspectorBasicValue6createEb(i19, 1);
     i3 = i18 | 0;
     i113 = i19 | 0;
     i112 = HEAP32[i113 >> 2] | 0;
     HEAP32[i113 >> 2] = 0;
     HEAP32[i3 >> 2] = i112;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i108, i20, i18);
     i108 = HEAP32[i3 >> 2] | 0;
     do {
      if ((i108 | 0) != 0) {
       i3 = i108 + 4 | 0;
       i112 = i3 | 0;
       i115 = (HEAP32[i112 >> 2] | 0) - 1 | 0;
       if ((i115 | 0) != 0) {
        HEAP32[i112 >> 2] = i115;
        break;
       }
       i115 = i3 - 4 | 0;
       if ((i115 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i115 >> 2] | 0) + 4 >> 2] & 31](i115);
      }
     } while (0);
     i108 = HEAP32[i113 >> 2] | 0;
     do {
      if ((i108 | 0) != 0) {
       i115 = i108 + 4 | 0;
       i3 = i115 | 0;
       i112 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
       if ((i112 | 0) != 0) {
        HEAP32[i3 >> 2] = i112;
        break;
       }
       i112 = i115 - 4 | 0;
       if ((i112 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i112 >> 2] | 0) + 4 >> 2] & 31](i112);
      }
     } while (0);
     i108 = HEAP32[i20 >> 2] | 0;
     if ((i108 | 0) == 0) {
      break;
     }
     i113 = i108 | 0;
     i112 = (HEAP32[i113 >> 2] | 0) - 2 | 0;
     if ((i112 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i108);
      break;
     } else {
      HEAP32[i113 >> 2] = i112;
      break;
     }
    }
   } while (0);
   do {
    if ((i106 & 2097152 | 0) != 0) {
     i112 = HEAP32[i111 >> 2] | 0;
     HEAP32[i17 >> 2] = H_BASE + 696;
     __ZN3WTF6StringC1ENS_12ASCIILiteralE(i16, i17);
     __ZN9Inspector19InspectorBasicValue6createEb(i15, 1);
     i113 = i14 | 0;
     i108 = i15 | 0;
     i115 = HEAP32[i108 >> 2] | 0;
     HEAP32[i108 >> 2] = 0;
     HEAP32[i113 >> 2] = i115;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i112, i16, i14);
     i112 = HEAP32[i113 >> 2] | 0;
     do {
      if ((i112 | 0) != 0) {
       i113 = i112 + 4 | 0;
       i115 = i113 | 0;
       i3 = (HEAP32[i115 >> 2] | 0) - 1 | 0;
       if ((i3 | 0) != 0) {
        HEAP32[i115 >> 2] = i3;
        break;
       }
       i3 = i113 - 4 | 0;
       if ((i3 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
      }
     } while (0);
     i112 = HEAP32[i108 >> 2] | 0;
     do {
      if ((i112 | 0) != 0) {
       i3 = i112 + 4 | 0;
       i113 = i3 | 0;
       i115 = (HEAP32[i113 >> 2] | 0) - 1 | 0;
       if ((i115 | 0) != 0) {
        HEAP32[i113 >> 2] = i115;
        break;
       }
       i115 = i3 - 4 | 0;
       if ((i115 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i115 >> 2] | 0) + 4 >> 2] & 31](i115);
      }
     } while (0);
     i112 = HEAP32[i16 >> 2] | 0;
     if ((i112 | 0) == 0) {
      break;
     }
     i108 = i112 | 0;
     i115 = (HEAP32[i108 >> 2] | 0) - 2 | 0;
     if ((i115 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i112);
      break;
     } else {
      HEAP32[i108 >> 2] = i115;
      break;
     }
    }
   } while (0);
   do {
    if ((i106 & 4194304 | 0) != 0) {
     i115 = HEAP32[i111 >> 2] | 0;
     HEAP32[i13 >> 2] = H_BASE + 768;
     __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
     __ZN9Inspector19InspectorBasicValue6createEb(i11, 1);
     i108 = i10 | 0;
     i112 = i11 | 0;
     i3 = HEAP32[i112 >> 2] | 0;
     HEAP32[i112 >> 2] = 0;
     HEAP32[i108 >> 2] = i3;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i115, i12, i10);
     i115 = HEAP32[i108 >> 2] | 0;
     do {
      if ((i115 | 0) != 0) {
       i108 = i115 + 4 | 0;
       i3 = i108 | 0;
       i113 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
       if ((i113 | 0) != 0) {
        HEAP32[i3 >> 2] = i113;
        break;
       }
       i113 = i108 - 4 | 0;
       if ((i113 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i113 >> 2] | 0) + 4 >> 2] & 31](i113);
      }
     } while (0);
     i115 = HEAP32[i112 >> 2] | 0;
     do {
      if ((i115 | 0) != 0) {
       i113 = i115 + 4 | 0;
       i108 = i113 | 0;
       i3 = (HEAP32[i108 >> 2] | 0) - 1 | 0;
       if ((i3 | 0) != 0) {
        HEAP32[i108 >> 2] = i3;
        break;
       }
       i3 = i113 - 4 | 0;
       if ((i3 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
      }
     } while (0);
     i115 = HEAP32[i12 >> 2] | 0;
     if ((i115 | 0) == 0) {
      break;
     }
     i112 = i115 | 0;
     i3 = (HEAP32[i112 >> 2] | 0) - 2 | 0;
     if ((i3 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i115);
      break;
     } else {
      HEAP32[i112 >> 2] = i3;
      break;
     }
    }
   } while (0);
   if ((i106 & 8388608 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i3 = HEAP32[i111 >> 2] | 0;
   HEAP32[i9 >> 2] = H_BASE + 784;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i8, i9);
   __ZN9Inspector19InspectorBasicValue6createEb(i7, 1);
   i112 = i6 | 0;
   i115 = i7 | 0;
   i113 = HEAP32[i115 >> 2] | 0;
   HEAP32[i115 >> 2] = 0;
   HEAP32[i112 >> 2] = i113;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i3, i8, i6);
   i3 = HEAP32[i112 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i112 = i3 + 4 | 0;
     i113 = i112 | 0;
     i108 = (HEAP32[i113 >> 2] | 0) - 1 | 0;
     if ((i108 | 0) != 0) {
      HEAP32[i113 >> 2] = i108;
      break;
     }
     i108 = i112 - 4 | 0;
     if ((i108 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i108 >> 2] | 0) + 4 >> 2] & 31](i108);
    }
   } while (0);
   i3 = HEAP32[i115 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i111 = i3 + 4 | 0;
     i106 = i111 | 0;
     i108 = (HEAP32[i106 >> 2] | 0) - 1 | 0;
     if ((i108 | 0) != 0) {
      HEAP32[i106 >> 2] = i108;
      break;
     }
     i108 = i111 - 4 | 0;
     if ((i108 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i108 >> 2] | 0) + 4 >> 2] & 31](i108);
    }
   } while (0);
   i3 = HEAP32[i8 >> 2] | 0;
   if ((i3 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i115 = i3 | 0;
   i108 = (HEAP32[i115 >> 2] | 0) - 2 | 0;
   if ((i108 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    STACKTOP = i5;
    return;
   } else {
    HEAP32[i115 >> 2] = i108;
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i103, H_BASE + 24 | 0);
 i8 = i103 | 0;
 i103 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i103;
 do {
  if ((i2 | 0) != 0) {
   i103 = i2 | 0;
   i6 = (HEAP32[i103 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i103 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i8 = i2 | 0;
 i6 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i8 >> 2] = i6;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore23InspectorLayerTreeAgent19buildObjectForLayerEPN3WTF6StringEPNS_11RenderLayerE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 456 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 72 | 0;
 i16 = i5 + 80 | 0;
 i17 = i5 + 88 | 0;
 i18 = i5 + 96 | 0;
 i19 = i5 + 104 | 0;
 i20 = i5 + 112 | 0;
 i21 = i5 + 120 | 0;
 i22 = i5 + 128 | 0;
 i23 = i5 + 136 | 0;
 i24 = i5 + 144 | 0;
 i25 = i5 + 152 | 0;
 i26 = i5 + 160 | 0;
 i27 = i5 + 168 | 0;
 i28 = i5 + 176 | 0;
 i29 = i5 + 184 | 0;
 i30 = i5 + 192 | 0;
 i31 = i5 + 200 | 0;
 i32 = i5 + 208 | 0;
 i33 = i5 + 216 | 0;
 i34 = i5 + 224 | 0;
 i35 = i5 + 232 | 0;
 i36 = i5 + 240 | 0;
 i37 = i5 + 248 | 0;
 i38 = i5 + 256 | 0;
 i39 = i5 + 264 | 0;
 i40 = i5 + 272 | 0;
 i41 = i5 + 280 | 0;
 i42 = i5 + 288 | 0;
 i43 = i5 + 296 | 0;
 i44 = i5 + 304 | 0;
 i45 = i5 + 312 | 0;
 i46 = i5 + 320 | 0;
 i47 = i5 + 328 | 0;
 i48 = i5 + 336 | 0;
 i49 = i5 + 344 | 0;
 i50 = i5 + 352 | 0;
 i51 = i5 + 360 | 0;
 i52 = i5 + 376 | 0;
 i53 = i5 + 384 | 0;
 i54 = i5 + 400 | 0;
 i55 = i5 + 416 | 0;
 i56 = i5 + 424 | 0;
 i57 = i5 + 432 | 0;
 i58 = i5 + 440 | 0;
 i59 = i5 + 448 | 0;
 i60 = HEAP32[i4 + 32 >> 2] | 0;
 i61 = i60 | 0;
 i62 = HEAP32[i4 + 208 >> 2] | 0;
 i63 = i60 + 20 | 0;
 if ((HEAP32[i63 >> 2] & 128 | 0) == 0) {
  i64 = HEAP32[i60 + 4 >> 2] | 0;
 } else {
  i64 = 0;
 }
 i65 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i60 >> 2] | 0) + 156 >> 2] & 1](i61) | 0;
 if (i65) {
  i66 = HEAP32[i60 + 8 >> 2] | 0;
 } else {
  i66 = i61;
 }
 do {
  if ((HEAP32[i66 + 20 >> 2] & 768 | 0) == 256) {
   i67 = 0;
  } else {
   i68 = HEAP32[(HEAP32[i66 + 36 >> 2] | 0) + 52 >> 2] & 4032;
   if ((i68 | 0) == 192) {
    i67 = 1;
    break;
   }
   i67 = (i68 | 0) == 256;
  }
 } while (0);
 i66 = HEAP32[i63 >> 2] | 0;
 i68 = i66 & 128;
 i69 = (i68 | 0) != 0;
 L11 : do {
  if ((i66 & 768 | 0) == 768) {
   i70 = HEAP32[(HEAP32[(HEAP32[i60 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
  } else {
   if (i65 & i67) {
    i71 = HEAP32[i60 + 8 >> 2] | 0;
    i72 = i71 | 0;
    i73 = i71 + 8 | 0;
    L15 : do {
     if ((HEAP32[i73 >> 2] | 0) == 0) {
      i74 = i71;
      i75 = i72;
     } else {
      i76 = i71;
      i77 = i72;
      i78 = i73;
      while (1) {
       if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i76 >> 2] | 0) + 152 >> 2] & 1](i77) | 0)) {
        i74 = i76;
        i75 = i77;
        break L15;
       }
       i79 = HEAP32[i78 >> 2] | 0;
       i80 = i79 | 0;
       i81 = i79 + 8 | 0;
       if ((HEAP32[i81 >> 2] | 0) == 0) {
        i74 = i79;
        i75 = i80;
        break;
       } else {
        i76 = i79;
        i77 = i80;
        i78 = i81;
       }
      }
     }
    } while (0);
    i73 = i74 + 20 | 0;
    i72 = HEAP32[i73 >> 2] | 0;
    do {
     if ((i72 & 128 | 0) == 0) {
      i71 = HEAP32[i74 + 4 >> 2] | 0;
      if ((i71 | 0) == 0) {
       i82 = i72;
       break;
      }
      if ((HEAP32[i71 + 12 >> 2] & 1048580 | 0) != 1048580) {
       i82 = i72;
       break;
      }
      if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i71 >> 2] | 0) + 232 >> 2] & 1](i71) | 0) == 0) {
       i82 = HEAP32[i73 >> 2] | 0;
       break;
      } else {
       i70 = __ZNK7WebCore12RenderObject27generatingPseudoHostElementEv(i75) | 0;
       break L11;
      }
     } else {
      i82 = i72;
     }
    } while (0);
    if ((i82 & 128 | 0) != 0) {
     i70 = 0;
     break;
    }
    i70 = HEAP32[i74 + 4 >> 2] | 0;
    break;
   }
   if (!i67) {
    if (!(i65 | i69)) {
     i70 = i64;
     break;
    }
    i72 = HEAP32[i60 + 8 >> 2] | 0;
    if ((HEAP32[i72 + 20 >> 2] & 128 | 0) == 0) {
     i83 = HEAP32[i72 + 4 >> 2] | 0;
    } else {
     i83 = 0;
    }
    i70 = i83 | 0;
    break;
   }
   do {
    if ((i68 | 0) == 0) {
     i72 = HEAP32[i60 + 4 >> 2] | 0;
     if ((i72 | 0) == 0) {
      i84 = i66;
      break;
     }
     if ((HEAP32[i72 + 12 >> 2] & 1048580 | 0) != 1048580) {
      i84 = i66;
      break;
     }
     if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i72 >> 2] | 0) + 232 >> 2] & 1](i72) | 0) == 0) {
      i84 = HEAP32[i63 >> 2] | 0;
      break;
     } else {
      i70 = __ZNK7WebCore12RenderObject27generatingPseudoHostElementEv(i61) | 0;
      break L11;
     }
    } else {
     i84 = i66;
    }
   } while (0);
   if ((i84 & 128 | 0) != 0) {
    i70 = 0;
    break;
   }
   i70 = HEAP32[i60 + 4 >> 2] | 0;
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i44);
 i84 = HEAP32[i44 >> 2] | 0;
 __ZN7WebCore23InspectorLayerTreeAgent4bindEPKNS_11RenderLayerE(i49, i2, i4);
 i4 = i84 | 0;
 HEAP32[i43 >> 2] = H_BASE + 792;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i42, i43);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i41, i49);
 i43 = i40 | 0;
 i44 = i41 | 0;
 i41 = HEAP32[i44 >> 2] | 0;
 HEAP32[i44 >> 2] = 0;
 HEAP32[i43 >> 2] = i41;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i4, i42, i40);
 i40 = HEAP32[i43 >> 2] | 0;
 do {
  if ((i40 | 0) != 0) {
   i43 = i40 + 4 | 0;
   i41 = i43 | 0;
   i66 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
   if ((i66 | 0) != 0) {
    HEAP32[i41 >> 2] = i66;
    break;
   }
   i66 = i43 - 4 | 0;
   if ((i66 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i66 >> 2] | 0) + 4 >> 2] & 31](i66);
  }
 } while (0);
 i40 = HEAP32[i44 >> 2] | 0;
 do {
  if ((i40 | 0) != 0) {
   i44 = i40 + 4 | 0;
   i66 = i44 | 0;
   i43 = (HEAP32[i66 >> 2] | 0) - 1 | 0;
   if ((i43 | 0) != 0) {
    HEAP32[i66 >> 2] = i43;
    break;
   }
   i43 = i44 - 4 | 0;
   if ((i43 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i43 >> 2] | 0) + 4 >> 2] & 31](i43);
  }
 } while (0);
 i40 = HEAP32[i42 >> 2] | 0;
 do {
  if ((i40 | 0) != 0) {
   i42 = i40 | 0;
   i43 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
   if ((i43 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i40);
    break;
   } else {
    HEAP32[i42 >> 2] = i43;
    break;
   }
  }
 } while (0);
 i40 = (i70 | 0) == 0;
 do {
  if (i40) {
   i85 = 0;
  } else {
   i43 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 28 >> 2] | 0;
   i42 = __ZN7WebCore17InspectorDOMAgent11boundNodeIdEPNS_4NodeE(i43, i70) | 0;
   if ((i42 | 0) != 0) {
    i85 = i42;
    break;
   }
   i85 = __ZN7WebCore17InspectorDOMAgent18pushNodeToFrontendEPN3WTF6StringEiPNS_4NodeE(i43, i3, __ZN7WebCore17InspectorDOMAgent11boundNodeIdEPNS_4NodeE(i43, HEAP32[(HEAP32[i70 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0, i70) | 0;
  }
 } while (0);
 HEAP32[i39 >> 2] = H_BASE + 800;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i38, i39);
 __ZN9Inspector19InspectorBasicValue6createEd(i37, +(i85 | 0));
 i85 = i36 | 0;
 i39 = i37 | 0;
 i37 = HEAP32[i39 >> 2] | 0;
 HEAP32[i39 >> 2] = 0;
 HEAP32[i85 >> 2] = i37;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i4, i38, i36);
 i36 = HEAP32[i85 >> 2] | 0;
 do {
  if ((i36 | 0) != 0) {
   i85 = i36 + 4 | 0;
   i37 = i85 | 0;
   i3 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i37 >> 2] = i3;
    break;
   }
   i3 = i85 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
  }
 } while (0);
 i36 = HEAP32[i39 >> 2] | 0;
 do {
  if ((i36 | 0) != 0) {
   i39 = i36 + 4 | 0;
   i3 = i39 | 0;
   i85 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i85 | 0) != 0) {
    HEAP32[i3 >> 2] = i85;
    break;
   }
   i85 = i39 - 4 | 0;
   if ((i85 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i85 >> 2] | 0) + 4 >> 2] & 31](i85);
  }
 } while (0);
 i36 = HEAP32[i38 >> 2] | 0;
 do {
  if ((i36 | 0) != 0) {
   i38 = i36 | 0;
   i85 = (HEAP32[i38 >> 2] | 0) - 2 | 0;
   if ((i85 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i36);
    break;
   } else {
    HEAP32[i38 >> 2] = i85;
    break;
   }
  }
 } while (0);
 __ZNK7WebCore12RenderObject23absoluteBoundingBoxRectEb(i51, i61, 1);
 __ZN7WebCore23InspectorLayerTreeAgent21buildObjectForIntRectERKNS_7IntRectE(i50, 0, i51);
 HEAP32[i34 >> 2] = H_BASE + 808;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i33, i34);
 i34 = i35 | 0;
 i51 = i50 | 0;
 i50 = HEAP32[i51 >> 2] | 0;
 HEAP32[i51 >> 2] = 0;
 HEAP32[i34 >> 2] = i50;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i4, i33, i35);
 i35 = HEAP32[i34 >> 2] | 0;
 do {
  if ((i35 | 0) != 0) {
   i34 = i35 + 4 | 0;
   i50 = i34 | 0;
   i51 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
   if ((i51 | 0) != 0) {
    HEAP32[i50 >> 2] = i51;
    break;
   }
   i51 = i34 - 4 | 0;
   if ((i51 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i51 >> 2] | 0) + 4 >> 2] & 31](i51);
  }
 } while (0);
 i35 = HEAP32[i33 >> 2] | 0;
 do {
  if ((i35 | 0) != 0) {
   i33 = i35 | 0;
   i51 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
   if ((i51 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i35);
    break;
   } else {
    HEAP32[i33 >> 2] = i51;
    break;
   }
  }
 } while (0);
 i35 = ~~+__ZNK7WebCore18RenderLayerBacking26backingStoreMemoryEstimateEv(i62);
 HEAP32[i32 >> 2] = H_BASE + 816;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i31, i32);
 __ZN9Inspector19InspectorBasicValue6createEd(i30, +(i35 | 0));
 i35 = i29 | 0;
 i32 = i30 | 0;
 i30 = HEAP32[i32 >> 2] | 0;
 HEAP32[i32 >> 2] = 0;
 HEAP32[i35 >> 2] = i30;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i4, i31, i29);
 i29 = HEAP32[i35 >> 2] | 0;
 do {
  if ((i29 | 0) != 0) {
   i35 = i29 + 4 | 0;
   i30 = i35 | 0;
   i51 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
   if ((i51 | 0) != 0) {
    HEAP32[i30 >> 2] = i51;
    break;
   }
   i51 = i35 - 4 | 0;
   if ((i51 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i51 >> 2] | 0) + 4 >> 2] & 31](i51);
  }
 } while (0);
 i29 = HEAP32[i32 >> 2] | 0;
 do {
  if ((i29 | 0) != 0) {
   i32 = i29 + 4 | 0;
   i51 = i32 | 0;
   i35 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
   if ((i35 | 0) != 0) {
    HEAP32[i51 >> 2] = i35;
    break;
   }
   i35 = i32 - 4 | 0;
   if ((i35 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i35 >> 2] | 0) + 4 >> 2] & 31](i35);
  }
 } while (0);
 i29 = HEAP32[i31 >> 2] | 0;
 do {
  if ((i29 | 0) != 0) {
   i31 = i29 | 0;
   i35 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
   if ((i35 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i29);
    break;
   } else {
    HEAP32[i31 >> 2] = i35;
    break;
   }
  }
 } while (0);
 __ZNK7WebCore18RenderLayerBacking16compositedBoundsEv(i54, i62);
 __ZN7WebCore16enclosingIntRectERKNS_10LayoutRectE(i53, i54);
 __ZN7WebCore23InspectorLayerTreeAgent21buildObjectForIntRectERKNS_7IntRectE(i52, 0, i53);
 HEAP32[i27 >> 2] = H_BASE + 824;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i26, i27);
 i27 = i28 | 0;
 i53 = i52 | 0;
 i52 = HEAP32[i53 >> 2] | 0;
 HEAP32[i53 >> 2] = 0;
 HEAP32[i27 >> 2] = i52;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i4, i26, i28);
 i28 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i28 | 0) != 0) {
   i27 = i28 + 4 | 0;
   i52 = i27 | 0;
   i53 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
   if ((i53 | 0) != 0) {
    HEAP32[i52 >> 2] = i53;
    break;
   }
   i53 = i27 - 4 | 0;
   if ((i53 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i53 >> 2] | 0) + 4 >> 2] & 31](i53);
  }
 } while (0);
 i28 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i28 | 0) != 0) {
   i26 = i28 | 0;
   i53 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
   if ((i53 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i28);
    break;
   } else {
    HEAP32[i26 >> 2] = i53;
    break;
   }
  }
 } while (0);
 i28 = HEAP32[(HEAP32[i62 + 16 >> 2] | 0) + 436 >> 2] | 0;
 HEAP32[i25 >> 2] = H_BASE + 848;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i24, i25);
 __ZN9Inspector19InspectorBasicValue6createEd(i23, +(i28 | 0));
 i28 = i22 | 0;
 i25 = i23 | 0;
 i23 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = 0;
 HEAP32[i28 >> 2] = i23;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i4, i24, i22);
 i22 = HEAP32[i28 >> 2] | 0;
 do {
  if ((i22 | 0) != 0) {
   i28 = i22 + 4 | 0;
   i23 = i28 | 0;
   i62 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
   if ((i62 | 0) != 0) {
    HEAP32[i23 >> 2] = i62;
    break;
   }
   i62 = i28 - 4 | 0;
   if ((i62 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i62 >> 2] | 0) + 4 >> 2] & 31](i62);
  }
 } while (0);
 i22 = HEAP32[i25 >> 2] | 0;
 do {
  if ((i22 | 0) != 0) {
   i25 = i22 + 4 | 0;
   i62 = i25 | 0;
   i28 = (HEAP32[i62 >> 2] | 0) - 1 | 0;
   if ((i28 | 0) != 0) {
    HEAP32[i62 >> 2] = i28;
    break;
   }
   i28 = i25 - 4 | 0;
   if ((i28 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 31](i28);
  }
 } while (0);
 i22 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i22 | 0) != 0) {
   i24 = i22 | 0;
   i28 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i28 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i22);
    break;
   } else {
    HEAP32[i24 >> 2] = i28;
    break;
   }
  }
 } while (0);
 i22 = i84;
 i28 = (i84 | 0) == 0;
 if (!i28) {
  i24 = i84 + 4 | 0;
  HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
 }
 i24 = HEAP32[i49 >> 2] | 0;
 do {
  if ((i24 | 0) != 0) {
   i49 = i24 | 0;
   i25 = (HEAP32[i49 >> 2] | 0) - 2 | 0;
   if ((i25 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i24);
    break;
   } else {
    HEAP32[i49 >> 2] = i25;
    break;
   }
  }
 } while (0);
 do {
  if (!i28) {
   i24 = i84 + 4 | 0;
   i25 = i24 | 0;
   i49 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   if ((i49 | 0) != 0) {
    HEAP32[i25 >> 2] = i49;
    break;
   }
   i49 = i24 - 4 | 0;
   if ((i49 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i49 >> 2] | 0) + 4 >> 2] & 31](i49);
  }
 } while (0);
 do {
  if (!i40) {
   if ((__ZNK7WebCore4Node10shadowHostEv(i70) | 0) == 0) {
    break;
   }
   HEAP32[i21 >> 2] = H_BASE + 112;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i20, i21);
   __ZN9Inspector19InspectorBasicValue6createEb(i19, 1);
   i49 = i18 | 0;
   i24 = i19 | 0;
   i25 = HEAP32[i24 >> 2] | 0;
   HEAP32[i24 >> 2] = 0;
   HEAP32[i49 >> 2] = i25;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i4, i20, i18);
   i25 = HEAP32[i49 >> 2] | 0;
   do {
    if ((i25 | 0) != 0) {
     i49 = i25 + 4 | 0;
     i62 = i49 | 0;
     i23 = (HEAP32[i62 >> 2] | 0) - 1 | 0;
     if ((i23 | 0) != 0) {
      HEAP32[i62 >> 2] = i23;
      break;
     }
     i23 = i49 - 4 | 0;
     if ((i23 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 31](i23);
    }
   } while (0);
   i25 = HEAP32[i24 >> 2] | 0;
   do {
    if ((i25 | 0) != 0) {
     i23 = i25 + 4 | 0;
     i49 = i23 | 0;
     i62 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
     if ((i62 | 0) != 0) {
      HEAP32[i49 >> 2] = i62;
      break;
     }
     i62 = i23 - 4 | 0;
     if ((i62 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i62 >> 2] | 0) + 4 >> 2] & 31](i62);
    }
   } while (0);
   i25 = HEAP32[i20 >> 2] | 0;
   if ((i25 | 0) == 0) {
    break;
   }
   i24 = i25 | 0;
   i62 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i62 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i25);
    break;
   } else {
    HEAP32[i24 >> 2] = i62;
    break;
   }
  }
 } while (0);
 do {
  if (i65) {
   HEAP32[i17 >> 2] = H_BASE + 128;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i16, i17);
   __ZN9Inspector19InspectorBasicValue6createEb(i15, 1);
   i20 = i14 | 0;
   i18 = i15 | 0;
   i19 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = 0;
   HEAP32[i20 >> 2] = i19;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i4, i16, i14);
   i19 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i20 = i19 + 4 | 0;
     i21 = i20 | 0;
     i70 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     if ((i70 | 0) != 0) {
      HEAP32[i21 >> 2] = i70;
      break;
     }
     i70 = i20 - 4 | 0;
     if ((i70 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i70 >> 2] | 0) + 4 >> 2] & 31](i70);
    }
   } while (0);
   i19 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i70 = i19 + 4 | 0;
     i20 = i70 | 0;
     i21 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     if ((i21 | 0) != 0) {
      HEAP32[i20 >> 2] = i21;
      break;
     }
     i21 = i70 - 4 | 0;
     if ((i21 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 31](i21);
    }
   } while (0);
   i19 = HEAP32[i16 >> 2] | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   i18 = i19 | 0;
   i21 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i18 >> 2] = i21;
    break;
   }
  }
 } while (0);
 do {
  if (i67) {
   if (i65) {
    i86 = HEAP32[i60 + 8 >> 2] | 0;
   } else {
    i86 = i61;
   }
   HEAP32[i13 >> 2] = H_BASE + 144;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
   __ZN9Inspector19InspectorBasicValue6createEb(i11, 1);
   i16 = i10 | 0;
   i14 = i11 | 0;
   i15 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   HEAP32[i16 >> 2] = i15;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i4, i12, i10);
   i15 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i16 = i15 + 4 | 0;
     i17 = i16 | 0;
     i21 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     if ((i21 | 0) != 0) {
      HEAP32[i17 >> 2] = i21;
      break;
     }
     i21 = i16 - 4 | 0;
     if ((i21 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 31](i21);
    }
   } while (0);
   i15 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i21 = i15 + 4 | 0;
     i16 = i21 | 0;
     i17 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     if ((i17 | 0) != 0) {
      HEAP32[i16 >> 2] = i17;
      break;
     }
     i17 = i21 - 4 | 0;
     if ((i17 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 31](i17);
    }
   } while (0);
   i15 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i14 = i15 | 0;
     i17 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      break;
     } else {
      HEAP32[i14 >> 2] = i17;
      break;
     }
    }
   } while (0);
   i15 = i86 + 20 | 0;
   if ((HEAP32[i15 >> 2] & 128 | 0) == 0) {
    i87 = HEAP32[i86 + 4 >> 2] | 0;
   } else {
    i87 = 0;
   }
   __ZN7WebCore23InspectorLayerTreeAgent17bindPseudoElementEPNS_13PseudoElementE(i55, i2, i87);
   HEAP32[i9 >> 2] = H_BASE + 168;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i8, i9);
   __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i7, i55);
   i17 = i6 | 0;
   i14 = i7 | 0;
   i21 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   HEAP32[i17 >> 2] = i21;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i4, i8, i6);
   i21 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i17 = i21 + 4 | 0;
     i16 = i17 | 0;
     i18 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     if ((i18 | 0) != 0) {
      HEAP32[i16 >> 2] = i18;
      break;
     }
     i18 = i17 - 4 | 0;
     if ((i18 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 31](i18);
    }
   } while (0);
   i21 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i18 = i21 + 4 | 0;
     i17 = i18 | 0;
     i16 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     if ((i16 | 0) != 0) {
      HEAP32[i17 >> 2] = i16;
      break;
     }
     i16 = i18 - 4 | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 31](i16);
    }
   } while (0);
   i21 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i14 = i21 | 0;
     i16 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i21);
      break;
     } else {
      HEAP32[i14 >> 2] = i16;
      break;
     }
    }
   } while (0);
   i21 = HEAP32[i55 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i16 = i21 | 0;
     i14 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i21);
      break;
     } else {
      HEAP32[i16 >> 2] = i14;
      break;
     }
    }
   } while (0);
   if ((HEAP32[i15 >> 2] & 768 | 0) == 256) {
    i88 = i86;
    break;
   }
   if ((HEAP32[(HEAP32[i86 + 36 >> 2] | 0) + 52 >> 2] & 4032 | 0) == 192) {
    __ZN3WTF6StringC1EPKc(i56, H_BASE + 416 | 0);
    __ZN9Inspector11TypeBuilder9LayerTree5Layer16setPseudoElementERKN3WTF6StringE(i22, i56);
    i21 = HEAP32[i56 >> 2] | 0;
    if ((i21 | 0) == 0) {
     i88 = i86;
     break;
    }
    i14 = i21 | 0;
    i16 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
    if ((i16 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i21);
     i88 = i86;
     break;
    } else {
     HEAP32[i14 >> 2] = i16;
     i88 = i86;
     break;
    }
   }
   if ((HEAP32[(HEAP32[i86 + 36 >> 2] | 0) + 52 >> 2] & 4032 | 0) != 256) {
    i88 = i86;
    break;
   }
   __ZN3WTF6StringC1EPKc(i57, H_BASE + 240 | 0);
   __ZN9Inspector11TypeBuilder9LayerTree5Layer16setPseudoElementERKN3WTF6StringE(i22, i57);
   i16 = HEAP32[i57 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i88 = i86;
    break;
   }
   i14 = i16 | 0;
   i21 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    i88 = i86;
    break;
   } else {
    HEAP32[i14 >> 2] = i21;
    i88 = i86;
    break;
   }
  } else {
   i88 = i61;
  }
 } while (0);
 do {
  if (i69) {
   i61 = i88 + 20 | 0;
   if ((HEAP32[i61 >> 2] & 768 | 0) == 768) {
    break;
   }
   HEAP32[i48 >> 2] = H_BASE + 200;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i47, i48);
   __ZN9Inspector19InspectorBasicValue6createEb(i46, 1);
   i86 = i45 | 0;
   i57 = i46 | 0;
   i56 = HEAP32[i57 >> 2] | 0;
   HEAP32[i57 >> 2] = 0;
   HEAP32[i86 >> 2] = i56;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i4, i47, i45);
   i56 = HEAP32[i86 >> 2] | 0;
   do {
    if ((i56 | 0) != 0) {
     i86 = i56 + 4 | 0;
     i55 = i86 | 0;
     i8 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) != 0) {
      HEAP32[i55 >> 2] = i8;
      break;
     }
     i8 = i86 - 4 | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
    }
   } while (0);
   i56 = HEAP32[i57 >> 2] | 0;
   do {
    if ((i56 | 0) != 0) {
     i15 = i56 + 4 | 0;
     i8 = i15 | 0;
     i86 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i86 | 0) != 0) {
      HEAP32[i8 >> 2] = i86;
      break;
     }
     i86 = i15 - 4 | 0;
     if ((i86 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i86 >> 2] | 0) + 4 >> 2] & 31](i86);
    }
   } while (0);
   i56 = HEAP32[i47 >> 2] | 0;
   do {
    if ((i56 | 0) != 0) {
     i57 = i56 | 0;
     i86 = (HEAP32[i57 >> 2] | 0) - 2 | 0;
     if ((i86 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i56);
      break;
     } else {
      HEAP32[i57 >> 2] = i86;
      break;
     }
    }
   } while (0);
   if ((HEAP32[i61 >> 2] & 768 | 0) == 256) {
    i89 = HEAP32[(HEAP32[i88 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i89 = HEAP32[i88 + 36 >> 2] | 0;
   }
   i56 = (HEAP32[i89 + 52 >> 2] | 0) >>> 6 & 63;
   if ((i56 | 0) == 2) {
    __ZN3WTF6StringC1EPKc(i58, H_BASE + 96 | 0);
    __ZN9Inspector11TypeBuilder9LayerTree5Layer16setPseudoElementERKN3WTF6StringE(i22, i58);
    i86 = HEAP32[i58 >> 2] | 0;
    if ((i86 | 0) == 0) {
     break;
    }
    i57 = i86 | 0;
    i15 = (HEAP32[i57 >> 2] | 0) - 2 | 0;
    if ((i15 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i86);
     break;
    } else {
     HEAP32[i57 >> 2] = i15;
     break;
    }
   } else if ((i56 | 0) == 1) {
    __ZN3WTF6StringC1EPKc(i59, H_BASE + 80 | 0);
    __ZN9Inspector11TypeBuilder9LayerTree5Layer16setPseudoElementERKN3WTF6StringE(i22, i59);
    i56 = HEAP32[i59 >> 2] | 0;
    if ((i56 | 0) == 0) {
     break;
    }
    i15 = i56 | 0;
    i57 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
    if ((i57 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i56);
     break;
    } else {
     HEAP32[i15 >> 2] = i57;
     break;
    }
   } else {
    break;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i22;
 if (i28) {
  STACKTOP = i5;
  return;
 }
 i28 = i84 + 4 | 0;
 i22 = HEAP32[i28 >> 2] | 0;
 HEAP32[i28 >> 2] = i22 + 1;
 i28 = i84 + 4 | 0;
 if ((i22 | 0) != 0) {
  HEAP32[i28 >> 2] = i22;
  STACKTOP = i5;
  return;
 }
 i22 = i28 - 4 | 0;
 if ((i22 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 31](i22);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore23InspectorLayerTreeAgent21buildObjectForIntRectERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i4 = i2 | 0;
 i5 = i2 + 8 | 0;
 i6 = i2 + 16 | 0;
 i7 = i2 + 24 | 0;
 i8 = i2 + 32 | 0;
 i9 = i2 + 40 | 0;
 i10 = i2 + 48 | 0;
 i11 = i2 + 56 | 0;
 i12 = i2 + 64 | 0;
 i13 = i2 + 72 | 0;
 i14 = i2 + 80 | 0;
 i15 = i2 + 88 | 0;
 i16 = i2 + 96 | 0;
 i17 = i2 + 104 | 0;
 i18 = i2 + 112 | 0;
 i19 = i2 + 120 | 0;
 i20 = i2 + 128 | 0;
 __ZN9Inspector15InspectorObject6createEv(i20);
 i21 = HEAP32[i20 >> 2] | 0;
 i20 = HEAP32[i3 >> 2] | 0;
 i22 = i21 | 0;
 HEAP32[i19 >> 2] = H_BASE + 864;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i18, i19);
 __ZN9Inspector19InspectorBasicValue6createEd(i17, +(i20 | 0));
 i20 = i16 | 0;
 i19 = i17 | 0;
 i17 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 HEAP32[i20 >> 2] = i17;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i22, i18, i16);
 i16 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i20 = i16 + 4 | 0;
   i17 = i20 | 0;
   i23 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   if ((i23 | 0) != 0) {
    HEAP32[i17 >> 2] = i23;
    break;
   }
   i23 = i20 - 4 | 0;
   if ((i23 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 31](i23);
  }
 } while (0);
 i16 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i19 = i16 + 4 | 0;
   i23 = i19 | 0;
   i20 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i23 >> 2] = i20;
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
 i16 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i15 >> 2] = H_BASE + 872;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector19InspectorBasicValue6createEd(i13, +(i16 | 0));
 i16 = i12 | 0;
 i15 = i13 | 0;
 i13 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i16 >> 2] = i13;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i22, i14, i12);
 i12 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i16 = i12 + 4 | 0;
   i13 = i16 | 0;
   i20 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i13 >> 2] = i20;
    break;
   }
   i20 = i16 - 4 | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 31](i20);
  }
 } while (0);
 i12 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i15 = i12 + 4 | 0;
   i20 = i15 | 0;
   i16 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i20 >> 2] = i16;
    break;
   }
   i16 = i15 - 4 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 31](i16);
  }
 } while (0);
 i12 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i14 = i12 | 0;
   i16 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i14 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i3 + 8 >> 2] | 0;
 HEAP32[i11 >> 2] = H_BASE + 8;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i10, i11);
 __ZN9Inspector19InspectorBasicValue6createEd(i9, +(i12 | 0));
 i12 = i8 | 0;
 i11 = i9 | 0;
 i9 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i12 >> 2] = i9;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i22, i10, i8);
 i8 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i12 = i8 + 4 | 0;
   i9 = i12 | 0;
   i16 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i9 >> 2] = i16;
    break;
   }
   i16 = i12 - 4 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 31](i16);
  }
 } while (0);
 i8 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i11 = i8 + 4 | 0;
   i16 = i11 | 0;
   i12 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i16 >> 2] = i12;
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
 i8 = HEAP32[i3 + 12 >> 2] | 0;
 HEAP32[i7 >> 2] = H_BASE + 16;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 __ZN9Inspector19InspectorBasicValue6createEd(i5, +(i8 | 0));
 i8 = i4 | 0;
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i8 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i22, i6, i4);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 4 | 0;
   i22 = i8 | 0;
   i5 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i22 >> 2] = i5;
    break;
   }
   i5 = i8 - 4 | 0;
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
   i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i5 >> 2] = i8;
    break;
   }
   i8 = i7 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i6 = i4 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i6 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i4 = i21;
 if ((i21 | 0) == 0) {
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i2;
  return;
 }
 i8 = i21 + 4 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i6 + 1;
 HEAP32[i1 >> 2] = i4;
 i4 = i21 + 4 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i4 >> 2] = i6;
  STACKTOP = i2;
  return;
 }
 i6 = i4 - 4 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore23InspectorLayerTreeAgent19unbindPseudoElementEPNS_13PseudoElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i3 = i1 + 64 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = HEAP32[i1 + 68 >> 2] | 0;
  i7 = i6 << 3 | 0;
  i8 = 0;
  i9 = i6;
 } else {
  i6 = HEAP32[i1 + 72 >> 2] | 0;
  i10 = i2;
  i11 = i10 + ~(i10 << 15) | 0;
  i10 = (i11 >>> 10 ^ i11) * 9 & -1;
  i11 = i10 >>> 6 ^ i10;
  i10 = i11 + ~(i11 << 11) | 0;
  i11 = i10 >>> 16 ^ i10;
  i10 = i6 & i11;
  i12 = i5 + (i10 << 3) | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  L3 : do {
   if ((i13 | 0) == (i2 | 0)) {
    i14 = i12;
   } else {
    i15 = (i11 >>> 23) + ~i11 | 0;
    i16 = i15 << 12 ^ i15;
    i15 = i16 >>> 7 ^ i16;
    i16 = i15 << 2 ^ i15;
    i15 = i16 >>> 20 ^ i16 | 1;
    i16 = 0;
    i17 = i10;
    i18 = i13;
    while (1) {
     if ((i18 | 0) == 0) {
      i14 = 0;
      break L3;
     }
     i19 = (i16 | 0) == 0 ? i15 : i16;
     i20 = i19 + i17 & i6;
     i21 = i5 + (i20 << 3) | 0;
     i22 = HEAP32[i21 >> 2] | 0;
     if ((i22 | 0) == (i2 | 0)) {
      i14 = i21;
      break;
     } else {
      i16 = i19;
      i17 = i20;
      i18 = i22;
     }
    }
   }
  } while (0);
  i2 = HEAP32[i1 + 68 >> 2] | 0;
  i7 = (i14 | 0) == 0 ? i5 + (i2 << 3) | 0 : i14;
  i8 = i5;
  i9 = i2;
 }
 i2 = i1 + 68 | 0;
 if ((i7 | 0) == (i8 + (i9 << 3) | 0)) {
  return;
 }
 i9 = i1 + 84 | 0;
 i8 = i9 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i14 = HEAP32[i1 + 88 >> 2] | 0;
  i23 = i14 << 3 | 0;
  i24 = 0;
  i25 = i14;
 } else {
  i14 = HEAP32[i1 + 92 >> 2] | 0;
  i6 = i7 + 4 | 0;
  i13 = HEAP32[i6 >> 2] | 0;
  i10 = HEAP32[i13 + 16 >> 2] | 0;
  if (i10 >>> 0 > 127 >>> 0) {
   i26 = i10 >>> 7;
  } else {
   i26 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i13) | 0;
  }
  i13 = (i26 >>> 23) + ~i26 | 0;
  i10 = i13 << 12 ^ i13;
  i13 = i10 >>> 7 ^ i10;
  i10 = i13 << 2 ^ i13;
  i13 = i10 >>> 20 ^ i10 | 1;
  i10 = i26;
  i26 = 0;
  while (1) {
   i11 = i10 & i14;
   i12 = i5 + (i11 << 3) | 0;
   i18 = HEAP32[i12 >> 2] | 0;
   i17 = i18;
   if ((i17 | 0) == 0) {
    i27 = 0;
    break;
   } else if ((i17 | 0) != (-1 | 0)) {
    if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i18, HEAP32[i6 >> 2] | 0) | 0) {
     i27 = i12;
     break;
    }
   }
   i12 = (i26 | 0) == 0 ? i13 : i26;
   i10 = i12 + i11 | 0;
   i26 = i12;
  }
  i26 = HEAP32[i8 >> 2] | 0;
  i8 = HEAP32[i1 + 88 >> 2] | 0;
  i23 = (i27 | 0) == 0 ? i26 + (i8 << 3) | 0 : i27;
  i24 = i26;
  i25 = i8;
 }
 i8 = i9 | 0;
 i9 = i1 + 88 | 0;
 do {
  if ((i23 | 0) != (i24 + (i25 << 3) | 0)) {
   i26 = i23 | 0;
   i27 = HEAP32[i26 >> 2] | 0;
   do {
    if ((i27 | 0) != 0) {
     i10 = i27 | 0;
     i13 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i27);
      break;
     } else {
      HEAP32[i10 >> 2] = i13;
      break;
     }
    }
   } while (0);
   HEAP32[i26 >> 2] = -1;
   i27 = i1 + 100 | 0;
   HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
   i27 = i1 + 96 | 0;
   i13 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
   HEAP32[i27 >> 2] = i13;
   i27 = HEAP32[i9 >> 2] | 0;
   if (!((i13 * 6 & -1 | 0) < (i27 | 0) & (i27 | 0) > 8)) {
    break;
   }
   __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore13PseudoElementEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i8, (i27 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 i8 = i3 | 0;
 if ((i7 | 0) == ((HEAP32[i4 >> 2] | 0) + (HEAP32[i2 >> 2] << 3) | 0)) {
  return;
 }
 i4 = HEAP32[i7 + 4 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 | 0;
   i9 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i9;
    break;
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = -1;
 i7 = i1 + 80 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 i7 = i1 + 76 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i1;
 i7 = HEAP32[i2 >> 2] | 0;
 if (!((i1 * 6 & -1 | 0) < (i7 | 0) & (i7 | 0) > 8)) {
  return;
 }
 __ZN3WTF9HashTableIPN7WebCore13PseudoElementENS_12KeyValuePairIS3_NS_6StringEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS3_EENS_7HashMapIS3_S5_SA_NS_10HashTraitsIS3_EENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i8, (i7 | 0) / 2 & -1, 0) | 0;
 return;
}
function __ZN7WebCore23InspectorLayerTreeAgent6unbindEPKNS_11RenderLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i3 = i1 + 24 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = HEAP32[i1 + 28 >> 2] | 0;
  i7 = i6 << 3 | 0;
  i8 = 0;
  i9 = i6;
 } else {
  i6 = HEAP32[i1 + 32 >> 2] | 0;
  i10 = i2;
  i11 = i10 + ~(i10 << 15) | 0;
  i10 = (i11 >>> 10 ^ i11) * 9 & -1;
  i11 = i10 >>> 6 ^ i10;
  i10 = i11 + ~(i11 << 11) | 0;
  i11 = i10 >>> 16 ^ i10;
  i10 = i6 & i11;
  i12 = i5 + (i10 << 3) | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  L4 : do {
   if ((i13 | 0) == (i2 | 0)) {
    i14 = i12;
   } else {
    i15 = (i11 >>> 23) + ~i11 | 0;
    i16 = i15 << 12 ^ i15;
    i15 = i16 >>> 7 ^ i16;
    i16 = i15 << 2 ^ i15;
    i15 = i16 >>> 20 ^ i16 | 1;
    i16 = 0;
    i17 = i10;
    i18 = i13;
    while (1) {
     if ((i18 | 0) == 0) {
      i14 = 0;
      break L4;
     }
     i19 = (i16 | 0) == 0 ? i15 : i16;
     i20 = i19 + i17 & i6;
     i21 = i5 + (i20 << 3) | 0;
     i22 = HEAP32[i21 >> 2] | 0;
     if ((i22 | 0) == (i2 | 0)) {
      i14 = i21;
      break;
     } else {
      i16 = i19;
      i17 = i20;
      i18 = i22;
     }
    }
   }
  } while (0);
  i2 = HEAP32[i1 + 28 >> 2] | 0;
  i7 = (i14 | 0) == 0 ? i5 + (i2 << 3) | 0 : i14;
  i8 = i5;
  i9 = i2;
 }
 i2 = i1 + 28 | 0;
 if ((i7 | 0) == (i8 + (i9 << 3) | 0)) {
  return;
 }
 i9 = i1 + 44 | 0;
 i8 = i9 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i14 = HEAP32[i1 + 48 >> 2] | 0;
  i23 = i14 << 3 | 0;
  i24 = 0;
  i25 = i14;
 } else {
  i14 = HEAP32[i1 + 52 >> 2] | 0;
  i6 = i7 + 4 | 0;
  i13 = HEAP32[i6 >> 2] | 0;
  i10 = HEAP32[i13 + 16 >> 2] | 0;
  if (i10 >>> 0 > 127 >>> 0) {
   i26 = i10 >>> 7;
  } else {
   i26 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i13) | 0;
  }
  i13 = (i26 >>> 23) + ~i26 | 0;
  i10 = i13 << 12 ^ i13;
  i13 = i10 >>> 7 ^ i10;
  i10 = i13 << 2 ^ i13;
  i13 = i10 >>> 20 ^ i10 | 1;
  i10 = i26;
  i26 = 0;
  while (1) {
   i11 = i10 & i14;
   i12 = i5 + (i11 << 3) | 0;
   i18 = HEAP32[i12 >> 2] | 0;
   i17 = i18;
   if ((i17 | 0) == 0) {
    i27 = 0;
    break;
   } else if ((i17 | 0) != (-1 | 0)) {
    if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i18, HEAP32[i6 >> 2] | 0) | 0) {
     i27 = i12;
     break;
    }
   }
   i12 = (i26 | 0) == 0 ? i13 : i26;
   i10 = i12 + i11 | 0;
   i26 = i12;
  }
  i26 = HEAP32[i8 >> 2] | 0;
  i8 = HEAP32[i1 + 48 >> 2] | 0;
  i23 = (i27 | 0) == 0 ? i26 + (i8 << 3) | 0 : i27;
  i24 = i26;
  i25 = i8;
 }
 i8 = i9 | 0;
 i9 = i1 + 48 | 0;
 do {
  if ((i23 | 0) != (i24 + (i25 << 3) | 0)) {
   i26 = i23 | 0;
   i27 = HEAP32[i26 >> 2] | 0;
   do {
    if ((i27 | 0) != 0) {
     i10 = i27 | 0;
     i13 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i27);
      break;
     } else {
      HEAP32[i10 >> 2] = i13;
      break;
     }
    }
   } while (0);
   HEAP32[i26 >> 2] = -1;
   i27 = i1 + 60 | 0;
   HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
   i27 = i1 + 56 | 0;
   i13 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
   HEAP32[i27 >> 2] = i13;
   i27 = HEAP32[i9 >> 2] | 0;
   if (!((i13 * 6 & -1 | 0) < (i27 | 0) & (i27 | 0) > 8)) {
    break;
   }
   __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PKN7WebCore11RenderLayerEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i8, (i27 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 i8 = i3 | 0;
 if ((i7 | 0) == ((HEAP32[i4 >> 2] | 0) + (HEAP32[i2 >> 2] << 3) | 0)) {
  return;
 }
 i4 = HEAP32[i7 + 4 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 | 0;
   i9 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i9;
    break;
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = -1;
 i7 = i1 + 40 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 i7 = i1 + 36 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i1;
 i7 = HEAP32[i2 >> 2] | 0;
 if (!((i1 * 6 & -1 | 0) < (i7 | 0) & (i7 | 0) > 8)) {
  return;
 }
 __ZN3WTF9HashTableIPKN7WebCore11RenderLayerENS_12KeyValuePairIS4_NS_6StringEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i8, (i7 | 0) / 2 & -1, 0) | 0;
 return;
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
function __ZN3WTF9HashTableIPN7WebCore13PseudoElementENS_12KeyValuePairIS3_NS_6StringEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS3_EENS_7HashMapIS3_S5_SA_NS_10HashTraitsIS3_EENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS3_RS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S6_S8_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore13PseudoElementENS_12KeyValuePairIS3_NS_6StringEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS3_EENS_7HashMapIS3_S5_SA_NS_10HashTraitsIS3_EENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i2, i8, 0) | 0;
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
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i13 + 4 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i14;
 do {
  if ((i3 | 0) != 0) {
   i14 = i3 | 0;
   i4 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i14 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = i2 + 12 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i2 + 4 | 0;
 i14 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i14 | 0)) {
  i27 = i13;
  i28 = i14;
 } else {
  if ((i14 | 0) == 0) {
   i29 = 8;
  } else {
   i22 = i14 << 1;
   i29 = (i4 * 6 & -1 | 0) < (i22 | 0) ? i14 : i22;
  }
  i22 = __ZN3WTF9HashTableIPN7WebCore13PseudoElementENS_12KeyValuePairIS3_NS_6StringEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS3_EENS_7HashMapIS3_S5_SA_NS_10HashTraitsIS3_EENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i2, i29, i13) | 0;
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
function __ZN3WTF9HashTableIPKN7WebCore11RenderLayerENS_12KeyValuePairIS4_NS_6StringEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS4_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPKN7WebCore11RenderLayerENS_12KeyValuePairIS4_NS_6StringEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i8, 0) | 0;
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
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i13 + 4 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i14;
 do {
  if ((i3 | 0) != 0) {
   i14 = i3 | 0;
   i4 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i14 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = i2 + 12 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i2 + 4 | 0;
 i14 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i14 | 0)) {
  i27 = i13;
  i28 = i14;
 } else {
  if ((i14 | 0) == 0) {
   i29 = 8;
  } else {
   i22 = i14 << 1;
   i29 = (i4 * 6 & -1 | 0) < (i22 | 0) ? i14 : i22;
  }
  i22 = __ZN3WTF9HashTableIPKN7WebCore11RenderLayerENS_12KeyValuePairIS4_NS_6StringEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i29, i13) | 0;
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
  if ((i15 | 0) == 0) {
   break;
  } else if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
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
function __ZN3WTF9HashTableIPN7WebCore13PseudoElementENS_12KeyValuePairIS3_NS_6StringEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS3_EENS_7HashMapIS3_S5_SA_NS_10HashTraitsIS3_EENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
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
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 | 0;
     i20 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i13 >> 2] = i20;
      break;
     }
    }
   } while (0);
   HEAP32[i30 >> 2] = HEAP32[i12 >> 2];
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
  i36 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i36 << 3) >> 2] | 0) != -1) {
    i1 = HEAP32[i7 + (i36 << 3) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    i11 = i1 | 0;
    i10 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i11 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i2 = i36 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i36 = i2;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableIPKN7WebCore11RenderLayerENS_12KeyValuePairIS4_NS_6StringEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
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
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 | 0;
     i20 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i13 >> 2] = i20;
      break;
     }
    }
   } while (0);
   HEAP32[i30 >> 2] = HEAP32[i12 >> 2];
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
  i36 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i36 << 3) >> 2] | 0) != -1) {
    i1 = HEAP32[i7 + (i36 << 3) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    i11 = i1 | 0;
    i10 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i11 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i2 = i36 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i36 = i2;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore23InspectorLayerTreeAgentD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 1072;
 HEAP32[i1 + 12 >> 2] = H_BASE + 1116;
 __ZN7WebCore23InspectorLayerTreeAgent5resetEv(i1);
 i3 = HEAP32[i1 + 84 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 88 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    i6 = HEAP32[i3 + (i5 << 3) >> 2] | 0;
    i7 = i6;
    do {
     if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
      i8 = i6 | 0;
      i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
      if ((i9 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i6);
       break;
      } else {
       HEAP32[i8 >> 2] = i9;
       break;
      }
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 64 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 68 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i3 + (i5 << 3) >> 2] | 0) != -1) {
      i6 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      i7 = i6 | 0;
      i9 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
      if ((i9 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i6);
       break;
      } else {
       HEAP32[i7 >> 2] = i9;
       break;
      }
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 48 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    i9 = HEAP32[i3 + (i5 << 3) >> 2] | 0;
    i7 = i9;
    do {
     if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
      i6 = i9 | 0;
      i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
      if ((i8 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i9);
       break;
      } else {
       HEAP32[i6 >> 2] = i8;
       break;
      }
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 28 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i3 + (i5 << 3) >> 2] | 0) != -1) {
      i9 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
      if ((i9 | 0) == 0) {
       break;
      }
      i7 = i9 | 0;
      i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
      if ((i8 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i9);
       break;
      } else {
       HEAP32[i7 >> 2] = i8;
       break;
      }
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i5 = i4 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i5 >> 2] = i8;
    break;
   }
   i8 = i4 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
  }
 } while (0);
 i3 = i1 + 16 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i8 | 0) != 0) {
  __ZdlPv(i8);
 }
 __ZN9Inspector42InspectorLayerTreeBackendDispatcherHandlerD2Ev(i1 + 12 | 0);
 HEAP32[i2 >> 2] = H_BASE + 952;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i8 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i8;
  return;
 }
}
function __ZN7WebCore23InspectorLayerTreeAgentD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 1072;
 HEAP32[i1 + 12 >> 2] = H_BASE + 1116;
 __ZN7WebCore23InspectorLayerTreeAgent5resetEv(i1);
 i3 = HEAP32[i1 + 84 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 88 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    i6 = HEAP32[i3 + (i5 << 3) >> 2] | 0;
    i7 = i6;
    do {
     if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
      i8 = i6 | 0;
      i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
      if ((i9 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i6);
       break;
      } else {
       HEAP32[i8 >> 2] = i9;
       break;
      }
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 64 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 68 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i3 + (i5 << 3) >> 2] | 0) != -1) {
      i6 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      i7 = i6 | 0;
      i9 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
      if ((i9 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i6);
       break;
      } else {
       HEAP32[i7 >> 2] = i9;
       break;
      }
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 48 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    i9 = HEAP32[i3 + (i5 << 3) >> 2] | 0;
    i7 = i9;
    do {
     if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
      i6 = i9 | 0;
      i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
      if ((i8 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i9);
       break;
      } else {
       HEAP32[i6 >> 2] = i8;
       break;
      }
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 28 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i3 + (i5 << 3) >> 2] | 0) != -1) {
      i9 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
      if ((i9 | 0) == 0) {
       break;
      }
      i7 = i9 | 0;
      i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
      if ((i8 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i9);
       break;
      } else {
       HEAP32[i7 >> 2] = i8;
       break;
      }
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i5 = i4 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i5 >> 2] = i8;
    break;
   }
   i8 = i4 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
  }
 } while (0);
 i3 = i1 + 16 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i8 | 0) != 0) {
  __ZdlPv(i8);
 }
 __ZN9Inspector42InspectorLayerTreeBackendDispatcherHandlerD2Ev(i1 + 12 | 0);
 HEAP32[i2 >> 2] = H_BASE + 952;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i8 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i8;
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore13PseudoElementEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS1_RS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
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
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore13PseudoElementEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i11 = i9 >>> 7;
 } else {
  i11 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i11 >>> 23) + ~i11 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i7 = i11;
 i11 = 0;
 while (1) {
  i12 = i7 & i6;
  i13 = i10 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == 0) {
   break;
  } else if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 11;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i11 | 0) == 0 ? i3 : i11;
  i9 = i16;
  i7 = i14 + i12 | 0;
  i11 = i14;
 }
 if ((i17 | 0) == 11) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i11 = i1;
  HEAP32[i11 >> 2] = i13;
  HEAP32[i11 + 4 >> 2] = i17;
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
 HEAP32[i18 + 4 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i13 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i13;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i13 << 1 | 0) < (i8 | 0)) {
  i19 = i18;
  i20 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i21 = 8;
  } else {
   i9 = i8 << 1;
   i21 = (i13 * 6 & -1 | 0) < (i9 | 0) ? i8 : i9;
  }
  i9 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore13PseudoElementEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i2, i21, i18) | 0;
  i19 = i9;
  i20 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PKN7WebCore11RenderLayerEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
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
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PKN7WebCore11RenderLayerEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i11 = i9 >>> 7;
 } else {
  i11 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i11 >>> 23) + ~i11 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i7 = i11;
 i11 = 0;
 while (1) {
  i12 = i7 & i6;
  i13 = i10 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == 0) {
   break;
  } else if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 11;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i11 | 0) == 0 ? i3 : i11;
  i9 = i16;
  i7 = i14 + i12 | 0;
  i11 = i14;
 }
 if ((i17 | 0) == 11) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i11 = i1;
  HEAP32[i11 >> 2] = i13;
  HEAP32[i11 + 4 >> 2] = i17;
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
 HEAP32[i18 + 4 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i13 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i13;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i13 << 1 | 0) < (i8 | 0)) {
  i19 = i18;
  i20 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i21 = 8;
  } else {
   i9 = i8 << 1;
   i21 = (i13 * 6 & -1 | 0) < (i9 | 0) ? i8 : i9;
  }
  i9 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PKN7WebCore11RenderLayerEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i2, i21, i18) | 0;
  i19 = i9;
  i20 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore13PseudoElementEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
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
   i14 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
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
     i25 = 9;
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
   if ((i25 | 0) == 9) {
    i25 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i19 >> 2] = i17;
   HEAP32[i27 + 4 >> 2] = HEAP32[i7 + (i10 << 3) + 4 >> 2];
   i15 = (i2 | 0) == (i3 | 0) ? i27 : i11;
  }
  i17 = i10 + 1 | 0;
  if ((i17 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i17;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i28 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i28 << 3) >> 2] | 0;
  i11 = i1;
  do {
   if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
    i10 = i1 | 0;
    i27 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i27 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i10 >> 2] = i27;
     break;
    }
   }
  } while (0);
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
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
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PKN7WebCore11RenderLayerEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
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
   i14 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
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
     i25 = 9;
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
   if ((i25 | 0) == 9) {
    i25 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i19 >> 2] = i17;
   HEAP32[i27 + 4 >> 2] = HEAP32[i7 + (i10 << 3) + 4 >> 2];
   i15 = (i2 | 0) == (i3 | 0) ? i27 : i11;
  }
  i17 = i10 + 1 | 0;
  if ((i17 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i17;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i28 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i28 << 3) >> 2] | 0;
  i11 = i1;
  do {
   if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
    i10 = i1 | 0;
    i27 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i27 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i10 >> 2] = i27;
     break;
    }
   }
  } while (0);
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
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
function __ZN7WebCore23InspectorLayerTreeAgent13layersForNodeEPN3WTF6StringEiRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS6_9LayerTree5LayerEEEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 __ZN9Inspector18InspectorArrayBaseC2Ev(i8);
 HEAP32[i8 >> 2] = H_BASE + 992;
 i9 = i4 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 do {
  if ((i10 | 0) != 0) {
   i8 = i10 + 4 | 0;
   i9 = i8 | 0;
   i11 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i9 >> 2] = i11;
    break;
   }
   i11 = i8 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 31](i11);
  }
 } while (0);
 i10 = __ZN7WebCore17InspectorDOMAgent9nodeForIdEi(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 28 >> 2] | 0, i3) | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF6StringC1EPKc(i6, H_BASE + 880 | 0);
  i3 = i6 | 0;
  i6 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  i11 = i2 | 0;
  i8 = HEAP32[i11 >> 2] | 0;
  HEAP32[i11 >> 2] = i6;
  do {
   if ((i8 | 0) != 0) {
    i6 = i8 | 0;
    i11 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i11 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i8);
     break;
    } else {
     HEAP32[i6 >> 2] = i11;
     break;
    }
   }
  } while (0);
  i8 = HEAP32[i3 >> 2] | 0;
  if ((i8 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  i3 = i8 | 0;
  i11 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
  if ((i11 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i8);
   STACKTOP = i5;
   return;
  } else {
   HEAP32[i3 >> 2] = i11;
   STACKTOP = i5;
   return;
  }
 }
 i11 = i10 + 32 | 0;
 if ((HEAP32[i10 + 12 >> 2] & 2048 | 0) == 0) {
  i12 = i11 | 0;
 } else {
  i12 = HEAP32[i11 >> 2] | 0;
 }
 i11 = HEAP32[i12 >> 2] | 0;
 if ((i11 | 0) != 0) {
  __ZN7WebCore23InspectorLayerTreeAgent38gatherLayersUsingRenderObjectHierarchyEPN3WTF6StringEPNS_12RenderObjectERNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS8_9LayerTree5LayerEEEEE(i1, i2, i11, i4);
  STACKTOP = i5;
  return;
 }
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 712 | 0);
 i4 = i7 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i11 = i2 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = i7;
 do {
  if ((i2 | 0) != 0) {
   i7 = i2 | 0;
   i11 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i7 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i4 = i2 | 0;
 i11 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i11 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i4 >> 2] = i11;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore23InspectorLayerTreeAgent17bindPseudoElementEPNS_13PseudoElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 40 | 0;
 HEAP32[i5 >> 2] = i3;
 if ((i3 | 0) == 0) {
  i3 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
  HEAP32[i1 >> 2] = i3;
  if ((i3 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i10 = i3 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
  STACKTOP = i4;
  return;
 }
 i10 = i2 + 64 | 0;
 __ZNK3WTF7HashMapIPN7WebCore13PseudoElementENS_6StringENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS7_IS4_EEE3getERKS3_(i6, i10, i5);
 i3 = i6 | 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) == 0) {
   __ZN7WebCore18IdentifiersFactory16createIdentifierEv(i7);
   i11 = i7 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   HEAP32[i3 >> 2] = i12;
   i12 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i11 = i12 | 0;
     i13 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i11 >> 2] = i13;
      break;
     }
    }
   } while (0);
   __ZN3WTF9HashTableIPN7WebCore13PseudoElementENS_12KeyValuePairIS3_NS_6StringEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS3_EENS_7HashMapIS3_S5_SA_NS_10HashTraitsIS3_EENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS3_RS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S6_S8_SA_SG_SD_EEEEOT0_OT1_(i8, i10 | 0, i5, i6);
   do {
    if ((HEAP8[i8 + 8 | 0] & 1) == 0) {
     i12 = HEAP32[i8 >> 2] | 0;
     i13 = HEAP32[i3 >> 2] | 0;
     if ((i13 | 0) != 0) {
      i11 = i13 | 0;
      HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
     }
     i11 = i12 + 4 | 0;
     i12 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = i13;
     if ((i12 | 0) == 0) {
      break;
     }
     i13 = i12 | 0;
     i11 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i13 >> 2] = i11;
      break;
     }
    }
   } while (0);
   __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore13PseudoElementEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS1_RS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i9, i2 + 84 | 0, i6, i5);
   if ((HEAP8[i9 + 8 | 0] & 1) != 0) {
    break;
   }
   HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] = HEAP32[i5 >> 2];
  }
 } while (0);
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 >> 2] = i5;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore23InspectorLayerTreeAgent4bindEPKNS_11RenderLayerE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 40 | 0;
 HEAP32[i5 >> 2] = i3;
 if ((i3 | 0) == 0) {
  i3 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
  HEAP32[i1 >> 2] = i3;
  if ((i3 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i10 = i3 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
  STACKTOP = i4;
  return;
 }
 i10 = i2 + 24 | 0;
 __ZNK3WTF7HashMapIPKN7WebCore11RenderLayerENS_6StringENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE3getERKS4_(i6, i10, i5);
 i3 = i6 | 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) == 0) {
   __ZN7WebCore18IdentifiersFactory16createIdentifierEv(i7);
   i11 = i7 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   HEAP32[i3 >> 2] = i12;
   i12 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i11 = i12 | 0;
     i13 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i11 >> 2] = i13;
      break;
     }
    }
   } while (0);
   __ZN3WTF9HashTableIPKN7WebCore11RenderLayerENS_12KeyValuePairIS4_NS_6StringEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS4_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i8, i10 | 0, i5, i6);
   do {
    if ((HEAP8[i8 + 8 | 0] & 1) == 0) {
     i12 = HEAP32[i8 >> 2] | 0;
     i13 = HEAP32[i3 >> 2] | 0;
     if ((i13 | 0) != 0) {
      i11 = i13 | 0;
      HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
     }
     i11 = i12 + 4 | 0;
     i12 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = i13;
     if ((i12 | 0) == 0) {
      break;
     }
     i13 = i12 | 0;
     i11 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i13 >> 2] = i11;
      break;
     }
    }
   } while (0);
   __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PKN7WebCore11RenderLayerEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i9, i2 + 44 | 0, i6, i5);
   if ((HEAP8[i9 + 8 | 0] & 1) != 0) {
    break;
   }
   HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] = HEAP32[i5 >> 2];
  }
 } while (0);
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 >> 2] = i5;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore23InspectorLayerTreeAgent5resetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 24 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 28 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i3 + (i5 << 3) >> 2] | 0) != -1) {
      i6 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
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
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
  _memset(i2 | 0, 0, 16) | 0;
 }
 i2 = i1 + 44 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 48 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    i8 = HEAP32[i3 + (i5 << 3) >> 2] | 0;
    i7 = i8;
    do {
     if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
      i6 = i8 | 0;
      i9 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
      if ((i9 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i8);
       break;
      } else {
       HEAP32[i6 >> 2] = i9;
       break;
      }
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
  _memset(i2 | 0, 0, 16) | 0;
 }
 i2 = i1 + 64 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 68 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i3 + (i5 << 3) >> 2] | 0) != -1) {
      i8 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
      if ((i8 | 0) == 0) {
       break;
      }
      i7 = i8 | 0;
      i9 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
      if ((i9 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i8);
       break;
      } else {
       HEAP32[i7 >> 2] = i9;
       break;
      }
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
  _memset(i2 | 0, 0, 16) | 0;
 }
 i2 = i1 + 84 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i1 + 88 >> 2] | 0;
 if ((i4 | 0) > 0) {
  i1 = 0;
  while (1) {
   i5 = HEAP32[i3 + (i1 << 3) >> 2] | 0;
   i9 = i5;
   do {
    if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
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
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i4 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i3);
 _memset(i2 | 0, 0, 16) | 0;
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
function runPostSets() {
 HEAP32[H_BASE + 952 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 956 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 960 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 964 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 968 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 992 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 996 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 1e3 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 1004 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 1008 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 1012 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 1016 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 1020 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 1024 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 1028 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 1032 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 1036 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 1040 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 1044 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 1048 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 1072 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 1076 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 1080 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 1084 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 1088 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 1092 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 1096 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 1100 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 1104 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 1116 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 1120 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 1124 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 1128 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 1132 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 1136 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 1160 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 1164 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 1168 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1172 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1176 >> 2] = F_BASE_vi + 10;
}
function __ZN9Inspector11TypeBuilder9LayerTree5Layer16setPseudoElementERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 HEAP32[i7 >> 2] = H_BASE + 184;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i2);
 i2 = i4 | 0;
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i1 | 0, i6, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i1 = i2 | 0;
   i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i1 >> 2] = i5;
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
  STACKTOP = i3;
  return;
 }
 i6 = i4 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i6 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore23InspectorLayerTreeAgent37gatherLayersUsingRenderLayerHierarchyEPN3WTF6StringEPNS_11RenderLayerERNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS8_9LayerTree5LayerEEEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 if ((HEAP32[i3 + 208 >> 2] | 0) != 0) {
  i7 = HEAP32[i4 >> 2] | 0;
  __ZN7WebCore23InspectorLayerTreeAgent19buildObjectForLayerEPN3WTF6StringEPNS_11RenderLayerE(i6, i1, i2, i3);
  i8 = i6 | 0;
  i6 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = 0;
  i8 = i6 | 0;
  i6 = i7 + 12 | 0;
  i9 = i7 + 20 | 0;
  i10 = HEAP32[i9 >> 2] | 0;
  if ((i10 | 0) == (HEAP32[i7 + 16 >> 2] | 0)) {
   __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i6, i10 + 1 | 0);
   HEAP32[(HEAP32[i6 >> 2] | 0) + (HEAP32[i9 >> 2] << 2) >> 2] = i8;
  } else {
   HEAP32[(HEAP32[i6 >> 2] | 0) + (i10 << 2) >> 2] = i8;
  }
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = HEAP32[i3 + 48 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i5;
  return;
 } else {
  i11 = i9;
 }
 while (1) {
  __ZN7WebCore23InspectorLayerTreeAgent37gatherLayersUsingRenderLayerHierarchyEPN3WTF6StringEPNS_11RenderLayerERNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS8_9LayerTree5LayerEEEEE(i1, i2, i11, i4);
  i11 = HEAP32[i11 + 44 >> 2] | 0;
  if ((i11 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i5;
 return;
}
function __ZN7WebCore23InspectorLayerTreeAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = __Znwj(4) | 0;
 HEAP32[i6 >> 2] = i2;
 i2 = i1 + 16 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i6;
 if ((i7 | 0) != 0) {
  __ZdlPv(i7);
 }
 __ZN9Inspector35InspectorLayerTreeBackendDispatcher6createEPNS_26InspectorBackendDispatcherEPNS_42InspectorLayerTreeBackendDispatcherHandlerE(i5, i3, i1 + 12 | 0);
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i7 = i1 + 20 | 0;
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
function __ZNK3WTF7HashMapIPN7WebCore13PseudoElementENS_6StringENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS7_IS4_EEE3getERKS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = HEAP32[i2 + 8 >> 2] | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = i2;
 i6 = i3 + ~(i3 << 15) | 0;
 i3 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i3 >>> 6 ^ i3;
 i3 = i6 + ~(i6 << 11) | 0;
 i6 = i3 >>> 16 ^ i3;
 L1 : do {
  if ((i5 | 0) != 0) {
   i3 = i6 & i4;
   i7 = i5 + (i3 << 3) | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   if ((i8 | 0) == (i2 | 0)) {
    i9 = i7;
   } else {
    i7 = (i6 >>> 23) + ~i6 | 0;
    i10 = i7 << 12 ^ i7;
    i7 = i10 >>> 7 ^ i10;
    i10 = i7 << 2 ^ i7;
    i7 = i10 >>> 20 ^ i10 | 1;
    i10 = 0;
    i11 = i3;
    i3 = i8;
    while (1) {
     if ((i3 | 0) == 0) {
      break L1;
     }
     i8 = (i10 | 0) == 0 ? i7 : i10;
     i12 = i8 + i11 & i4;
     i13 = i5 + (i12 << 3) | 0;
     i14 = HEAP32[i13 >> 2] | 0;
     if ((i14 | 0) == (i2 | 0)) {
      i9 = i13;
      break;
     } else {
      i10 = i8;
      i11 = i12;
      i3 = i14;
     }
    }
   }
   if ((i9 | 0) == 0) {
    break;
   }
   i3 = HEAP32[i9 + 4 >> 2] | 0;
   HEAP32[i1 >> 2] = i3;
   if ((i3 | 0) == 0) {
    return;
   }
   i11 = i3 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK3WTF7HashMapIPKN7WebCore11RenderLayerENS_6StringENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE3getERKS4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = HEAP32[i2 + 8 >> 2] | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = i2;
 i6 = i3 + ~(i3 << 15) | 0;
 i3 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i3 >>> 6 ^ i3;
 i3 = i6 + ~(i6 << 11) | 0;
 i6 = i3 >>> 16 ^ i3;
 L1 : do {
  if ((i5 | 0) != 0) {
   i3 = i6 & i4;
   i7 = i5 + (i3 << 3) | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   if ((i8 | 0) == (i2 | 0)) {
    i9 = i7;
   } else {
    i7 = (i6 >>> 23) + ~i6 | 0;
    i10 = i7 << 12 ^ i7;
    i7 = i10 >>> 7 ^ i10;
    i10 = i7 << 2 ^ i7;
    i7 = i10 >>> 20 ^ i10 | 1;
    i10 = 0;
    i11 = i3;
    i3 = i8;
    while (1) {
     if ((i3 | 0) == 0) {
      break L1;
     }
     i8 = (i10 | 0) == 0 ? i7 : i10;
     i12 = i8 + i11 & i4;
     i13 = i5 + (i12 << 3) | 0;
     i14 = HEAP32[i13 >> 2] | 0;
     if ((i14 | 0) == (i2 | 0)) {
      i9 = i13;
      break;
     } else {
      i10 = i8;
      i11 = i12;
      i3 = i14;
     }
    }
   }
   if ((i9 | 0) == 0) {
    break;
   }
   i3 = HEAP32[i9 + 4 >> 2] | 0;
   HEAP32[i1 >> 2] = i3;
   if ((i3 | 0) == 0) {
    return;
   }
   i11 = i3 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore23InspectorLayerTreeAgentC2EPNS_19InstrumentingAgentsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP32[i5 >> 2] = H_BASE + 928;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i4, i5);
 i5 = i1 | 0;
 HEAP32[i5 >> 2] = H_BASE + 952;
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i4;
 do {
  if ((i4 | 0) == 0) {
   HEAP32[i5 >> 2] = H_BASE + 1160;
   HEAP32[i1 + 8 >> 2] = i2;
  } else {
   i7 = i4 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i5 >> 2] = H_BASE + 1160;
   HEAP32[i1 + 8 >> 2] = i2;
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
 HEAP32[i5 >> 2] = H_BASE + 1072;
 HEAP32[i1 + 12 >> 2] = H_BASE + 1116;
 _memset(i1 + 16 | 0, 0, 88) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore23InspectorLayerTreeAgentC1EPNS_19InstrumentingAgentsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP32[i5 >> 2] = H_BASE + 928;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i4, i5);
 i5 = i1 | 0;
 HEAP32[i5 >> 2] = H_BASE + 952;
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i4;
 do {
  if ((i4 | 0) == 0) {
   HEAP32[i5 >> 2] = H_BASE + 1160;
   HEAP32[i1 + 8 >> 2] = i2;
  } else {
   i7 = i4 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i5 >> 2] = H_BASE + 1160;
   HEAP32[i1 + 8 >> 2] = i2;
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
 HEAP32[i5 >> 2] = H_BASE + 1072;
 HEAP32[i1 + 12 >> 2] = H_BASE + 1116;
 _memset(i1 + 16 | 0, 0, 88) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore23InspectorLayerTreeAgent38gatherLayersUsingRenderObjectHierarchyEPN3WTF6StringEPNS_12RenderObjectERNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS8_9LayerTree5LayerEEEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 if ((HEAP32[i3 + 20 >> 2] & 32768 | 0) != 0) {
  __ZN7WebCore23InspectorLayerTreeAgent37gatherLayersUsingRenderLayerHierarchyEPN3WTF6StringEPNS_11RenderLayerERNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS8_9LayerTree5LayerEEEEE(i1, i2, HEAP32[i3 + 40 >> 2] | 0, i4);
  return;
 }
 i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 32 >> 2] & 1](i3) | 0;
 if ((i5 | 0) == 0) {
  return;
 } else {
  i6 = i5;
 }
 while (1) {
  __ZN7WebCore23InspectorLayerTreeAgent38gatherLayersUsingRenderObjectHierarchyEPN3WTF6StringEPNS_12RenderObjectERNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS8_9LayerTree5LayerEEEEE(i1, i2, i6, i4);
  i6 = HEAP32[i6 + 16 >> 2] | 0;
  if ((i6 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore23InspectorLayerTreeAgent29willDestroyFrontendAndBackendEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 16 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  __ZdlPv(i3);
 }
 i3 = i1 + 20 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 31](i1, 0);
 return;
}
function __ZN7WebCore23InspectorLayerTreeAgent9idForNodeEPN3WTF6StringEPNS_4NodeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 28 >> 2] | 0;
 i1 = __ZN7WebCore17InspectorDOMAgent11boundNodeIdEPNS_4NodeE(i5, i3) | 0;
 if ((i1 | 0) != 0) {
  i4 = i1;
  return i4 | 0;
 }
 i4 = __ZN7WebCore17InspectorDOMAgent18pushNodeToFrontendEPN3WTF6StringEiPNS_4NodeE(i5, i2, __ZN7WebCore17InspectorDOMAgent11boundNodeIdEPNS_4NodeE(i5, HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0, i3) | 0;
 return i4 | 0;
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
function __ZThn12_N7WebCore23InspectorLayerTreeAgent26reasonsForCompositingLayerEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder9LayerTree18CompositingReasonsEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore23InspectorLayerTreeAgent26reasonsForCompositingLayerEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder9LayerTree18CompositingReasonsEEE(i1 - 104 + 92 | 0, i2, i3, i4);
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
 HEAP32[i1 >> 2] = H_BASE + 952;
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
 HEAP32[i1 >> 2] = H_BASE + 952;
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
function __ZThn12_N7WebCore23InspectorLayerTreeAgent13layersForNodeEPN3WTF6StringEiRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS6_9LayerTree5LayerEEEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore23InspectorLayerTreeAgent13layersForNodeEPN3WTF6StringEiRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS6_9LayerTree5LayerEEEEE(i1 - 104 + 92 | 0, i2, i3, i4);
 return;
}
function __ZN9Inspector18InspectorAgentBaseD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 952;
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
 HEAP32[i1 >> 2] = H_BASE + 952;
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
function iii___ZN9Inspector18InspectorArrayBase7asArrayEPN3WTF6RefPtrINS_14InspectorArrayEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN9Inspector18InspectorArrayBase7asArrayEPN3WTF6RefPtrINS_14InspectorArrayEEE(i1 | 0, i2 | 0) | 0;
}
function iii___ZN9Inspector14InspectorValue8asObjectEPN3WTF6RefPtrINS_15InspectorObjectEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN9Inspector14InspectorValue8asObjectEPN3WTF6RefPtrINS_15InspectorObjectEEE(i1 | 0, i2 | 0) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore23InspectorLayerTreeAgent22pseudoElementDestroyedEPNS_13PseudoElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore23InspectorLayerTreeAgent19unbindPseudoElementEPNS_13PseudoElementE(i1, i2);
 return;
}
function vii___ZNK9Inspector18InspectorArrayBase9writeJSONEPN3WTF13StringBuilderE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK9Inspector18InspectorArrayBase9writeJSONEPN3WTF13StringBuilderE(i1 | 0, i2 | 0);
}
function __ZN7WebCore23InspectorLayerTreeAgent20renderLayerDestroyedEPKNS_11RenderLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore23InspectorLayerTreeAgent6unbindEPKNS_11RenderLayerE(i1, i2);
 return;
}
function iii___ZN9Inspector14InspectorValue7asValueEPN3WTF6RefPtrIS0_EE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN9Inspector14InspectorValue7asValueEPN3WTF6RefPtrIS0_EE(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asStringEPN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asStringEPN3WTF6StringE(i1 | 0, i2 | 0) | 0;
}
function __ZN7WebCore23InspectorLayerTreeAgent18layerTreeDidChangeEv(i1) {
 i1 = i1 | 0;
 __ZN9Inspector36InspectorLayerTreeFrontendDispatcher18layerTreeDidChangeEv(HEAP32[i1 + 16 >> 2] | 0);
 return;
}
function __ZThn12_N7WebCore23InspectorLayerTreeAgent6enableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = i1 - 104 + 92 | 0;
 HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 20 >> 2] = i2;
 return;
}
function __ZThn12_N7WebCore23InspectorLayerTreeAgentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 104 + 92 | 0;
 __ZN7WebCore23InspectorLayerTreeAgentD2Ev(i2);
 __ZdlPv(i2);
 return;
}
function __ZThn12_N7WebCore23InspectorLayerTreeAgent7disableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[(HEAP32[i1 - 104 + 100 >> 2] | 0) + 20 >> 2] = 0;
 return;
}
function iii___ZNK9Inspector14InspectorValue9asBooleanEPb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue9asBooleanEPb(i1 | 0, i2 | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPm__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPm(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPl__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPl(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPj__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPj(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPi(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPd__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPd(i1 | 0, i2 | 0) | 0;
}
function __ZN9Inspector11TypeBuilder5ArrayINS0_9LayerTree5LayerEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function vii___ZN9Inspector18InspectorArrayBase7asArrayEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN9Inspector18InspectorArrayBase7asArrayEv(i1 | 0, i2 | 0);
}
function __ZN7WebCore23InspectorLayerTreeAgent7disableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 20 >> 2] = 0;
 return;
}
function __ZN7WebCore23InspectorLayerTreeAgent6enableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 20 >> 2] = i1;
 return;
}
function vii___ZN9Inspector14InspectorValue8asObjectEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN9Inspector14InspectorValue8asObjectEv(i1 | 0, i2 | 0);
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
}
function __ZThn12_N7WebCore23InspectorLayerTreeAgentD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore23InspectorLayerTreeAgentD2Ev(i1 - 104 + 92 | 0);
 return;
}
function __ZN9Inspector11TypeBuilder5ArrayINS0_9LayerTree5LayerEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
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
function __ZN7WebCore23InspectorLayerTreeAgentD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore23InspectorLayerTreeAgentD2Ev(i1);
 __ZdlPv(i1);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 31](i2 | 0, i3 | 0) | 0;
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
 FUNCTION_TABLE_vii[i1 & 31](i2 | 0, i3 | 0);
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
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZN9Inspector18InspectorAgentBase12discardAgentEv(i1) {
 i1 = i1 | 0;
 return;
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZThn12_N7WebCore23InspectorLayerTreeAgentD1Ev,b0,__ZN7WebCore23InspectorLayerTreeAgent29willDestroyFrontendAndBackendEv,b0,__ZN7WebCore18InspectorAgentBaseD0Ev,b0,__ZN7WebCore23InspectorLayerTreeAgentD2Ev,b0,__ZN9Inspector18InspectorAgentBase12discardAgentEv,b0,__ZN7WebCore23InspectorLayerTreeAgentD0Ev,b0,__ZN9Inspector18InspectorAgentBaseD0Ev,b0,__ZN9Inspector18InspectorAgentBaseD1Ev,b0,__ZN9Inspector11TypeBuilder5ArrayINS0_9LayerTree5LayerEED1Ev,b0,__ZN7WebCore18InspectorAgentBaseD1Ev,b0,__ZN9Inspector11TypeBuilder5ArrayINS0_9LayerTree5LayerEED0Ev,b0,__ZThn12_N7WebCore23InspectorLayerTreeAgentD0Ev,b0,b0,b0,b0
  ,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,vii___ZN9Inspector18InspectorArrayBase7asArrayEv__wrapper,b1,__ZN7WebCore23InspectorLayerTreeAgentC2EPNS_19InstrumentingAgentsE,b1,vii___ZN9Inspector14InspectorValue8asObjectEv__wrapper,b1,vii___ZNK9Inspector18InspectorArrayBase9writeJSONEPN3WTF13StringBuilderE__wrapper,b1,__ZThn12_N7WebCore23InspectorLayerTreeAgent6enableEPN3WTF6StringE,b1,__ZN7WebCore23InspectorLayerTreeAgent7disableEPN3WTF6StringE,b1,__ZThn12_N7WebCore23InspectorLayerTreeAgent7disableEPN3WTF6StringE,b1,__ZN7WebCore23InspectorLayerTreeAgent6enableEPN3WTF6StringE,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZN7WebCore23InspectorLayerTreeAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE,b3];
  var FUNCTION_TABLE_v = [b4,b4,v____cxa_pure_virtual__wrapper,b4];
  var FUNCTION_TABLE_iii = [b5,b5,iii___ZN9Inspector14InspectorValue8asObjectEPN3WTF6RefPtrINS_15InspectorObjectEEE__wrapper,b5,iii___ZNK9Inspector14InspectorValue8asStringEPN3WTF6StringE__wrapper,b5,iii___ZNK9Inspector14InspectorValue8asNumberEPj__wrapper,b5,iii___ZNK9Inspector14InspectorValue8asNumberEPi__wrapper,b5,iii___ZNK9Inspector14InspectorValue8asNumberEPm__wrapper,b5,iii___ZNK9Inspector14InspectorValue8asNumberEPl__wrapper,b5,iii___ZNK9Inspector14InspectorValue9asBooleanEPb__wrapper,b5,iii___ZNK9Inspector14InspectorValue8asNumberEPd__wrapper,b5,iii___ZN9Inspector14InspectorValue7asValueEPN3WTF6RefPtrIS0_EE__wrapper,b5,iii___ZN9Inspector18InspectorArrayBase7asArrayEPN3WTF6RefPtrINS_14InspectorArrayEEE__wrapper,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5];
  var FUNCTION_TABLE_viiii = [b6,b6,__ZThn12_N7WebCore23InspectorLayerTreeAgent13layersForNodeEPN3WTF6StringEiRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS6_9LayerTree5LayerEEEEE,b6,__ZN7WebCore23InspectorLayerTreeAgent26reasonsForCompositingLayerEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder9LayerTree18CompositingReasonsEEE,b6,__ZN7WebCore23InspectorLayerTreeAgent13layersForNodeEPN3WTF6StringEiRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS6_9LayerTree5LayerEEEEE,b6,__ZThn12_N7WebCore23InspectorLayerTreeAgent26reasonsForCompositingLayerEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder9LayerTree18CompositingReasonsEEE,b6,b6,b6,b6,b6,b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN3WTF9HashTableIPN7WebCore13PseudoElementENS_12KeyValuePairIS3_NS_6StringEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS3_EENS_7HashMapIS3_S5_SA_NS_10HashTraitsIS3_EENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_","__ZThn12_N7WebCore23InspectorLayerTreeAgent13layersForNodeEPN3WTF6StringEiRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS6_9LayerTree5LayerEEEEE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore13PseudoElementEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS1_RS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PKN7WebCore11RenderLayerEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_","__ZN7WebCore23InspectorLayerTreeAgent21buildObjectForIntRectERKNS_7IntRectE","__ZN7WebCore23InspectorLayerTreeAgent29willDestroyFrontendAndBackendEv","__ZN7WebCore23InspectorLayerTreeAgent6unbindEPKNS_11RenderLayerE","__ZN7WebCore23InspectorLayerTreeAgent4bindEPKNS_11RenderLayerE","__ZN7WebCore23InspectorLayerTreeAgent20renderLayerDestroyedEPKNS_11RenderLayerE","__ZN7WebCore18InspectorAgentBaseD1Ev","__ZN9Inspector18InspectorAgentBase12discardAgentEv","__ZN7WebCore23InspectorLayerTreeAgentD2Ev","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PKN7WebCore11RenderLayerEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCore23InspectorLayerTreeAgent38gatherLayersUsingRenderObjectHierarchyEPN3WTF6StringEPNS_12RenderObjectERNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS8_9LayerTree5LayerEEEEE","__ZN3WTF9HashTableIPKN7WebCore11RenderLayerENS_12KeyValuePairIS4_NS_6StringEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_","__ZN3WTF9HashTableIPKN7WebCore11RenderLayerENS_12KeyValuePairIS4_NS_6StringEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS4_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S7_S9_SB_SH_SE_EEEEOT0_OT1_","__ZNK3WTF7HashMapIPKN7WebCore11RenderLayerENS_6StringENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE3getERKS4_","_memset","__ZN7WebCore23InspectorLayerTreeAgentC2EPNS_19InstrumentingAgentsE","__ZN7WebCore23InspectorLayerTreeAgent19unbindPseudoElementEPNS_13PseudoElementE","__ZN3WTF9HashTableIPN7WebCore13PseudoElementENS_12KeyValuePairIS3_NS_6StringEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS3_EENS_7HashMapIS3_S5_SA_NS_10HashTraitsIS3_EENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS3_RS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S6_S8_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCore23InspectorLayerTreeAgentD0Ev","_memcpy","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCore23InspectorLayerTreeAgent19buildObjectForLayerEPN3WTF6StringEPNS_11RenderLayerE","__ZN7WebCore23InspectorLayerTreeAgent9idForNodeEPN3WTF6StringEPNS_4NodeE","__ZN7WebCore23InspectorLayerTreeAgent37gatherLayersUsingRenderLayerHierarchyEPN3WTF6StringEPNS_11RenderLayerERNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS8_9LayerTree5LayerEEEEE","__ZN7WebCore23InspectorLayerTreeAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE","__ZN9Inspector18InspectorAgentBaseD0Ev","__ZThn12_N7WebCore23InspectorLayerTreeAgent6enableEPN3WTF6StringE","__ZN9Inspector18InspectorAgentBaseD1Ev","__ZN9Inspector11TypeBuilder9LayerTree5Layer16setPseudoElementERKN3WTF6StringE","__ZN7WebCore23InspectorLayerTreeAgent7disableEPN3WTF6StringE","__ZThn12_N7WebCore23InspectorLayerTreeAgent26reasonsForCompositingLayerEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder9LayerTree18CompositingReasonsEEE","__ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_","__ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore13PseudoElementEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_","__ZN7WebCore23InspectorLayerTreeAgent17bindPseudoElementEPNS_13PseudoElementE","__ZN7WebCore18InspectorAgentBaseD0Ev","__ZN7WebCore23InspectorLayerTreeAgent22pseudoElementDestroyedEPNS_13PseudoElementE","__ZThn12_N7WebCore23InspectorLayerTreeAgent7disableEPN3WTF6StringE","__ZN7WebCore23InspectorLayerTreeAgent5resetEv","_strlen","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN9Inspector11TypeBuilder5ArrayINS0_9LayerTree5LayerEED0Ev","__ZN7WebCore23InspectorLayerTreeAgent18layerTreeDidChangeEv","__ZN7WebCore23InspectorLayerTreeAgent13layersForNodeEPN3WTF6StringEiRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS6_9LayerTree5LayerEEEEE","__ZThn12_N7WebCore23InspectorLayerTreeAgentD1Ev","__ZN9Inspector11TypeBuilder5ArrayINS0_9LayerTree5LayerEED1Ev","__ZNK3WTF7HashMapIPN7WebCore13PseudoElementENS_6StringENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS7_IS4_EEE3getERKS3_","__ZN7WebCore23InspectorLayerTreeAgent6enableEPN3WTF6StringE","__ZThn12_N7WebCore23InspectorLayerTreeAgentD0Ev","__ZN7WebCore23InspectorLayerTreeAgent26reasonsForCompositingLayerEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder9LayerTree18CompositingReasonsEEE"]

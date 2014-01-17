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
H_BASE = parentModule["_malloc"](232 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 232;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore21ContextMenuControllerC1ERNS_4PageERNS_17ContextMenuClientE;
var __ZN7WebCore21ContextMenuControllerD1Ev;
/* memory initializer */ allocate([114,116,108,0,0,0,0,0,108,116,114,0,0,0,0,0,77,97,107,101,84,101,120,116,87,114,105,116,105,110,103,68,105,114,101,99,116,105,111,110,82,105,103,104,116,84,111,76,101,102,116,0,0,0,0,0,77,97,107,101,84,101,120,116,87,114,105,116,105,110,103,68,105,114,101,99,116,105,111,110,76,101,102,116,84,111,82,105,103,104,116,0,0,0,0,0,77,97,107,101,84,101,120,116,87,114,105,116,105,110,103,68,105,114,101,99,116,105,111,110,78,97,116,117,114,97,108,0,84,111,103,103,108,101,73,116,97,108,105,99,0,0,0,0,84,111,103,103,108,101,66,111,108,100,0,0,0,0,0,0,82,101,102,101,114,101,114,0,71,69,84,0,0,0,0,0,98,111,108,100,0,0,0,0,105,116,97,108,105,99,0,0,117,110,100,101,114,108,105,110,101,0,0,0,0,0,0,0,80,97,115,116,101,0,0,0,67,117,116,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE=env.__ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE|0;
  var __ZN3WTF10StringImpl19latin1CaseFoldTableE=env.__ZN3WTF10StringImpl19latin1CaseFoldTableE|0;
  var __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE=env.__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE|0;
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
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore21ContextMenuController8populateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 2288 | 0;
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
 i13 = i2 + 80 | 0;
 i14 = i2 + 88 | 0;
 i15 = i2 + 96 | 0;
 i16 = i2 + 104 | 0;
 i17 = i2 + 112 | 0;
 i18 = i2 + 144 | 0;
 i19 = i2 + 152 | 0;
 i20 = i2 + 184 | 0;
 i21 = i2 + 192 | 0;
 i22 = i2 + 224 | 0;
 i23 = i2 + 232 | 0;
 i24 = i2 + 264 | 0;
 i25 = i2 + 272 | 0;
 i26 = i2 + 304 | 0;
 i27 = i2 + 312 | 0;
 i28 = i2 + 344 | 0;
 i29 = i2 + 352 | 0;
 i30 = i2 + 384 | 0;
 i31 = i2 + 392 | 0;
 i32 = i2 + 424 | 0;
 i33 = i2 + 432 | 0;
 i34 = i2 + 464 | 0;
 i35 = i2 + 472 | 0;
 i36 = i2 + 504 | 0;
 i37 = i2 + 512 | 0;
 i38 = i2 + 544 | 0;
 i39 = i2 + 552 | 0;
 i40 = i2 + 584 | 0;
 i41 = i2 + 592 | 0;
 i42 = i2 + 624 | 0;
 i43 = i2 + 632 | 0;
 i44 = i2 + 664 | 0;
 i45 = i2 + 672 | 0;
 i46 = i2 + 704 | 0;
 i47 = i2 + 712 | 0;
 i48 = i2 + 744 | 0;
 i49 = i2 + 752 | 0;
 i50 = i2 + 784 | 0;
 i51 = i2 + 792 | 0;
 i52 = i2 + 824 | 0;
 i53 = i2 + 832 | 0;
 i54 = i2 + 864 | 0;
 i55 = i2 + 872 | 0;
 i56 = i2 + 904 | 0;
 i57 = i2 + 912 | 0;
 i58 = i2 + 944 | 0;
 i59 = i2 + 952 | 0;
 i60 = i2 + 984 | 0;
 i61 = i2 + 992 | 0;
 i62 = i2 + 1024 | 0;
 i63 = i2 + 1032 | 0;
 i64 = i2 + 1064 | 0;
 i65 = i2 + 1072 | 0;
 i66 = i2 + 1104 | 0;
 i67 = i2 + 1112 | 0;
 i68 = i2 + 1144 | 0;
 i69 = i2 + 1152 | 0;
 i70 = i2 + 1184 | 0;
 i71 = i2 + 1192 | 0;
 i72 = i2 + 1224 | 0;
 i73 = i2 + 1232 | 0;
 i74 = i2 + 1264 | 0;
 i75 = i2 + 1272 | 0;
 i76 = i2 + 1320 | 0;
 i77 = i2 + 1504 | 0;
 i78 = i2 + 1552 | 0;
 i79 = i2 + 1600 | 0;
 i80 = i2 + 1784 | 0;
 i81 = i2 + 1792 | 0;
 i82 = i2 + 1800 | 0;
 i83 = i2 + 1816 | 0;
 i84 = i2 + 1848 | 0;
 i85 = i2 + 1864 | 0;
 i86 = i2 + 1896 | 0;
 i87 = i2 + 1944 | 0;
 i88 = i2 + 2128 | 0;
 i89 = i2 + 2160 | 0;
 i90 = i2 + 2168 | 0;
 i91 = i2 + 2200 | 0;
 i92 = i2 + 2208 | 0;
 i93 = i2 + 2240 | 0;
 i94 = i2 + 2248 | 0;
 i95 = i2 + 2280 | 0;
 __ZN7WebCore26contextMenuItemTagOpenLinkEv(i18);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i17, 0, 2e3, i18, 0);
 i96 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i96 | 0) != 0) {
   i18 = i96 | 0;
   i97 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i97 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i96);
    break;
   } else {
    HEAP32[i18 >> 2] = i97;
    break;
   }
  }
 } while (0);
 __ZN7WebCore37contextMenuItemTagOpenLinkInNewWindowEv(i20);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i19, 0, 1, i20, 0);
 i96 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i96 | 0) != 0) {
   i20 = i96 | 0;
   i97 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i97 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i96);
    break;
   } else {
    HEAP32[i20 >> 2] = i97;
    break;
   }
  }
 } while (0);
 __ZN7WebCore36contextMenuItemTagDownloadLinkToDiskEv(i22);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i21, 0, 2, i22, 0);
 i96 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i96 | 0) != 0) {
   i22 = i96 | 0;
   i97 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i97 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i96);
    break;
   } else {
    HEAP32[i22 >> 2] = i97;
    break;
   }
  }
 } while (0);
 __ZN7WebCore37contextMenuItemTagCopyLinkToClipboardEv(i24);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i23, 0, 3, i24, 0);
 i96 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i96 | 0) != 0) {
   i24 = i96 | 0;
   i97 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i97 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i96);
    break;
   } else {
    HEAP32[i24 >> 2] = i97;
    break;
   }
  }
 } while (0);
 __ZN7WebCore38contextMenuItemTagOpenImageInNewWindowEv(i26);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i25, 0, 4, i26, 0);
 i96 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i96 | 0) != 0) {
   i26 = i96 | 0;
   i97 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
   if ((i97 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i96);
    break;
   } else {
    HEAP32[i26 >> 2] = i97;
    break;
   }
  }
 } while (0);
 __ZN7WebCore37contextMenuItemTagDownloadImageToDiskEv(i28);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i27, 0, 5, i28, 0);
 i96 = HEAP32[i28 >> 2] | 0;
 do {
  if ((i96 | 0) != 0) {
   i28 = i96 | 0;
   i97 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
   if ((i97 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i96);
    break;
   } else {
    HEAP32[i28 >> 2] = i97;
    break;
   }
  }
 } while (0);
 __ZN7WebCore38contextMenuItemTagCopyImageToClipboardEv(i30);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i29, 0, 6, i30, 0);
 i96 = HEAP32[i30 >> 2] | 0;
 do {
  if ((i96 | 0) != 0) {
   i30 = i96 | 0;
   i97 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
   if ((i97 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i96);
    break;
   } else {
    HEAP32[i30 >> 2] = i97;
    break;
   }
  }
 } while (0);
 i96 = i32 | 0;
 HEAP32[i96 >> 2] = 0;
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i31, 0, 2029, i32, 0);
 i32 = HEAP32[i96 >> 2] | 0;
 do {
  if ((i32 | 0) != 0) {
   i96 = i32 | 0;
   i97 = (HEAP32[i96 >> 2] | 0) - 2 | 0;
   if ((i97 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i32);
    break;
   } else {
    HEAP32[i96 >> 2] = i97;
    break;
   }
  }
 } while (0);
 i32 = i34 | 0;
 HEAP32[i32 >> 2] = 0;
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i33, 0, 2030, i34, 0);
 i34 = HEAP32[i32 >> 2] | 0;
 do {
  if ((i34 | 0) != 0) {
   i32 = i34 | 0;
   i97 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
   if ((i97 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i34);
    break;
   } else {
    HEAP32[i32 >> 2] = i97;
    break;
   }
  }
 } while (0);
 i34 = i36 | 0;
 HEAP32[i34 >> 2] = 0;
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i35, 0, 2031, i36, 0);
 i36 = HEAP32[i34 >> 2] | 0;
 do {
  if ((i36 | 0) != 0) {
   i34 = i36 | 0;
   i97 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
   if ((i97 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i36);
    break;
   } else {
    HEAP32[i34 >> 2] = i97;
    break;
   }
  }
 } while (0);
 __ZN7WebCore27contextMenuItemTagMediaPlayEv(i38);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i37, 0, 2035, i38, 0);
 i36 = HEAP32[i38 >> 2] | 0;
 do {
  if ((i36 | 0) != 0) {
   i38 = i36 | 0;
   i97 = (HEAP32[i38 >> 2] | 0) - 2 | 0;
   if ((i97 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i36);
    break;
   } else {
    HEAP32[i38 >> 2] = i97;
    break;
   }
  }
 } while (0);
 __ZN7WebCore27contextMenuItemTagMediaMuteEv(i40);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i39, 0, 2036, i40, 0);
 i36 = HEAP32[i40 >> 2] | 0;
 do {
  if ((i36 | 0) != 0) {
   i40 = i36 | 0;
   i97 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
   if ((i97 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i36);
    break;
   } else {
    HEAP32[i40 >> 2] = i97;
    break;
   }
  }
 } while (0);
 __ZN7WebCore37contextMenuItemTagToggleMediaControlsEv(i42);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i41, 1, 2032, i42, 0);
 i36 = HEAP32[i42 >> 2] | 0;
 do {
  if ((i36 | 0) != 0) {
   i42 = i36 | 0;
   i97 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
   if ((i97 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i36);
    break;
   } else {
    HEAP32[i42 >> 2] = i97;
    break;
   }
  }
 } while (0);
 __ZN7WebCore33contextMenuItemTagToggleMediaLoopEv(i44);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i43, 1, 2033, i44, 0);
 i36 = HEAP32[i44 >> 2] | 0;
 do {
  if ((i36 | 0) != 0) {
   i44 = i36 | 0;
   i97 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
   if ((i97 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i36);
    break;
   } else {
    HEAP32[i44 >> 2] = i97;
    break;
   }
  }
 } while (0);
 __ZN7WebCore38contextMenuItemTagEnterVideoFullscreenEv(i46);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i45, 0, 2034, i46, 0);
 i36 = HEAP32[i46 >> 2] | 0;
 do {
  if ((i36 | 0) != 0) {
   i46 = i36 | 0;
   i97 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
   if ((i97 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i36);
    break;
   } else {
    HEAP32[i46 >> 2] = i97;
    break;
   }
  }
 } while (0);
 __ZN7WebCore38contextMenuItemTagEnterVideoFullscreenEv(i48);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i47, 0, 2039, i48, 0);
 i36 = HEAP32[i48 >> 2] | 0;
 do {
  if ((i36 | 0) != 0) {
   i48 = i36 | 0;
   i97 = (HEAP32[i48 >> 2] | 0) - 2 | 0;
   if ((i97 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i36);
    break;
   } else {
    HEAP32[i48 >> 2] = i97;
    break;
   }
  }
 } while (0);
 __ZN7WebCore27contextMenuItemTagSearchWebEv(i50);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i49, 0, 21, i50, 0);
 i36 = HEAP32[i50 >> 2] | 0;
 do {
  if ((i36 | 0) != 0) {
   i50 = i36 | 0;
   i97 = (HEAP32[i50 >> 2] | 0) - 2 | 0;
   if ((i97 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i36);
    break;
   } else {
    HEAP32[i50 >> 2] = i97;
    break;
   }
  }
 } while (0);
 __ZN7WebCore22contextMenuItemTagCopyEv(i52);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i51, 0, 8, i52, 0);
 i36 = HEAP32[i52 >> 2] | 0;
 do {
  if ((i36 | 0) != 0) {
   i52 = i36 | 0;
   i97 = (HEAP32[i52 >> 2] | 0) - 2 | 0;
   if ((i97 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i36);
    break;
   } else {
    HEAP32[i52 >> 2] = i97;
    break;
   }
  }
 } while (0);
 __ZN7WebCore24contextMenuItemTagGoBackEv(i54);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i53, 0, 9, i54, 0);
 i36 = HEAP32[i54 >> 2] | 0;
 do {
  if ((i36 | 0) != 0) {
   i54 = i36 | 0;
   i97 = (HEAP32[i54 >> 2] | 0) - 2 | 0;
   if ((i97 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i36);
    break;
   } else {
    HEAP32[i54 >> 2] = i97;
    break;
   }
  }
 } while (0);
 __ZN7WebCore27contextMenuItemTagGoForwardEv(i56);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i55, 0, 10, i56, 0);
 i36 = HEAP32[i56 >> 2] | 0;
 do {
  if ((i36 | 0) != 0) {
   i56 = i36 | 0;
   i97 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
   if ((i97 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i36);
    break;
   } else {
    HEAP32[i56 >> 2] = i97;
    break;
   }
  }
 } while (0);
 __ZN7WebCore22contextMenuItemTagStopEv(i58);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i57, 0, 11, i58, 0);
 i36 = HEAP32[i58 >> 2] | 0;
 do {
  if ((i36 | 0) != 0) {
   i58 = i36 | 0;
   i97 = (HEAP32[i58 >> 2] | 0) - 2 | 0;
   if ((i97 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i36);
    break;
   } else {
    HEAP32[i58 >> 2] = i97;
    break;
   }
  }
 } while (0);
 __ZN7WebCore24contextMenuItemTagReloadEv(i60);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i59, 0, 12, i60, 0);
 i36 = HEAP32[i60 >> 2] | 0;
 do {
  if ((i36 | 0) != 0) {
   i60 = i36 | 0;
   i97 = (HEAP32[i60 >> 2] | 0) - 2 | 0;
   if ((i97 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i36);
    break;
   } else {
    HEAP32[i60 >> 2] = i97;
    break;
   }
  }
 } while (0);
 __ZN7WebCore38contextMenuItemTagOpenFrameInNewWindowEv(i62);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i61, 0, 7, i62, 0);
 i36 = HEAP32[i62 >> 2] | 0;
 do {
  if ((i36 | 0) != 0) {
   i62 = i36 | 0;
   i97 = (HEAP32[i62 >> 2] | 0) - 2 | 0;
   if ((i97 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i36);
    break;
   } else {
    HEAP32[i62 >> 2] = i97;
    break;
   }
  }
 } while (0);
 __ZN7WebCore32contextMenuItemTagNoGuessesFoundEv(i64);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i63, 0, 16, i64, 0);
 i36 = HEAP32[i64 >> 2] | 0;
 do {
  if ((i36 | 0) != 0) {
   i64 = i36 | 0;
   i97 = (HEAP32[i64 >> 2] | 0) - 2 | 0;
   if ((i97 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i36);
    break;
   } else {
    HEAP32[i64 >> 2] = i97;
    break;
   }
  }
 } while (0);
 __ZN7WebCore32contextMenuItemTagIgnoreSpellingEv(i66);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i65, 0, 17, i66, 0);
 i36 = HEAP32[i66 >> 2] | 0;
 do {
  if ((i36 | 0) != 0) {
   i66 = i36 | 0;
   i97 = (HEAP32[i66 >> 2] | 0) - 2 | 0;
   if ((i97 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i36);
    break;
   } else {
    HEAP32[i66 >> 2] = i97;
    break;
   }
  }
 } while (0);
 __ZN7WebCore31contextMenuItemTagLearnSpellingEv(i68);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i67, 0, 18, i68, 0);
 i36 = HEAP32[i68 >> 2] | 0;
 do {
  if ((i36 | 0) != 0) {
   i68 = i36 | 0;
   i97 = (HEAP32[i68 >> 2] | 0) - 2 | 0;
   if ((i97 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i36);
    break;
   } else {
    HEAP32[i68 >> 2] = i97;
    break;
   }
  }
 } while (0);
 __ZN7WebCore31contextMenuItemTagIgnoreGrammarEv(i70);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i69, 0, 2001, i70, 0);
 i36 = HEAP32[i70 >> 2] | 0;
 do {
  if ((i36 | 0) != 0) {
   i70 = i36 | 0;
   i97 = (HEAP32[i70 >> 2] | 0) - 2 | 0;
   if ((i97 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i36);
    break;
   } else {
    HEAP32[i70 >> 2] = i97;
    break;
   }
  }
 } while (0);
 __ZN7WebCore21contextMenuItemTagCutEv(i72);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i71, 0, 13, i72, 0);
 i36 = HEAP32[i72 >> 2] | 0;
 do {
  if ((i36 | 0) != 0) {
   i72 = i36 | 0;
   i97 = (HEAP32[i72 >> 2] | 0) - 2 | 0;
   if ((i97 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i36);
    break;
   } else {
    HEAP32[i72 >> 2] = i97;
    break;
   }
  }
 } while (0);
 __ZN7WebCore23contextMenuItemTagPasteEv(i74);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i73, 0, 14, i74, 0);
 i36 = HEAP32[i74 >> 2] | 0;
 do {
  if ((i36 | 0) != 0) {
   i74 = i36 | 0;
   i97 = (HEAP32[i74 >> 2] | 0) - 2 | 0;
   if ((i97 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i36);
    break;
   } else {
    HEAP32[i74 >> 2] = i97;
    break;
   }
  }
 } while (0);
 i36 = i1 + 16 | 0;
 i97 = HEAP32[i1 + 92 >> 2] | 0;
 do {
  if ((i97 | 0) != 0) {
   i74 = HEAP32[(HEAP32[(HEAP32[i97 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
   if ((i74 | 0) == 0) {
    break;
   }
   if (!(__ZNK7WebCore13HitTestResult17isContentEditableEv(i36) | 0)) {
    __ZNK7WebCore13HitTestResult15absoluteLinkURLEv(i75, i36);
    i72 = i75 | 0;
    i70 = HEAP32[i72 >> 2] | 0;
    do {
     if ((i70 | 0) != 0) {
      if ((HEAP32[i70 + 4 >> 2] | 0) == 0) {
       break;
      }
      i68 = HEAP32[i74 + 84 >> 2] | 0;
      i66 = HEAP32[(HEAP32[i68 >> 2] | 0) + 328 >> 2] | 0;
      HEAP32[i76 >> 2] = i70;
      i64 = i70 | 0;
      HEAP32[i64 >> 2] = (HEAP32[i64 >> 2] | 0) + 2;
      i64 = HEAP8[i75 + 4 | 0] | 0;
      i62 = i76 + 4 | 0;
      HEAP8[i62] = HEAP8[i62] & -4 | i64 & 1 | i64 & 2;
      HEAP32[i76 + 8 >> 2] = HEAP32[i75 + 8 >> 2];
      HEAP32[i76 + 12 >> 2] = HEAP32[i75 + 12 >> 2];
      HEAP32[i76 + 16 >> 2] = HEAP32[i75 + 16 >> 2];
      HEAP32[i76 + 20 >> 2] = HEAP32[i75 + 20 >> 2];
      HEAP32[i76 + 24 >> 2] = HEAP32[i75 + 24 >> 2];
      HEAP32[i76 + 28 >> 2] = HEAP32[i75 + 28 >> 2];
      HEAP32[i76 + 32 >> 2] = HEAP32[i75 + 32 >> 2];
      HEAP32[i76 + 36 >> 2] = HEAP32[i75 + 36 >> 2];
      HEAP32[i76 + 40 >> 2] = HEAP32[i75 + 40 >> 2];
      HEAP32[i76 + 44 >> 2] = HEAP32[i75 + 44 >> 2];
      HEAP32[i76 + 48 >> 2] = 0;
      HEAPF64[i76 + 56 >> 3] = +HEAPF64[__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE >> 3];
      i64 = i76 + 64 | 0;
      HEAP32[i64 >> 2] = 0;
      __ZN7WebCore3URL10invalidateEv(i64);
      HEAP32[i16 >> 2] = H_BASE + 176;
      __ZN3WTF6StringC1ENS_12ASCIILiteralE(i76 + 112 | 0, i16);
      __ZN7WebCore13HTTPHeaderMapC1Ev(i76 + 116 | 0);
      _memset(i76 + 136 | 0, 0, 16) | 0;
      HEAP8[i76 + 152 | 0] = 11;
      HEAP32[i76 + 156 >> 2] = 1;
      _memset(i76 + 160 | 0, 0, 19) | 0;
      HEAP32[i76 + 180 >> 2] = 15;
      i64 = FUNCTION_TABLE_iii[i66 & 1](i68, i76) | 0;
      __ZN7WebCore15ResourceRequestD2Ev(i76);
      i68 = i1 + 8 | 0;
      if (i64) {
       __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i17, HEAP32[i68 >> 2] | 0);
       __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i19, HEAP32[i68 >> 2] | 0);
       __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i21, HEAP32[i68 >> 2] | 0);
      }
      __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i23, HEAP32[i68 >> 2] | 0);
     }
    } while (0);
    __ZNK7WebCore13HitTestResult16absoluteImageURLEv(i77, i36);
    i70 = i77 | 0;
    i68 = HEAP32[i70 >> 2] | 0;
    do {
     if ((i68 | 0) != 0) {
      if ((HEAP32[i68 + 4 >> 2] | 0) == 0) {
       break;
      }
      i64 = HEAP32[i72 >> 2] | 0;
      do {
       if ((i64 | 0) != 0) {
        if ((HEAP32[i64 + 4 >> 2] | 0) == 0) {
         break;
        }
        i66 = __ZN3WTF10fastMallocEj(28) | 0;
        i62 = i66;
        i60 = i15 | 0;
        HEAP32[i60 >> 2] = 0;
        __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i62, 2, 0, i15, 0);
        i58 = HEAP32[i60 >> 2] | 0;
        do {
         if ((i58 | 0) != 0) {
          i60 = i58 | 0;
          i56 = (HEAP32[i60 >> 2] | 0) - 2 | 0;
          if ((i56 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i58);
           break;
          } else {
           HEAP32[i60 >> 2] = i56;
           break;
          }
         }
        } while (0);
        __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i62, HEAP32[i1 + 8 >> 2] | 0);
        if ((i66 | 0) == 0) {
         break;
        }
        __ZN7WebCore15ContextMenuItemD1Ev(i62);
        __ZN3WTF8fastFreeEPv(i66);
       }
      } while (0);
      i64 = i1 + 8 | 0;
      __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i25, HEAP32[i64 >> 2] | 0);
      __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i27, HEAP32[i64 >> 2] | 0);
      if (!(__ZNK7WebCore3URL11isLocalFileEv(i77) | 0)) {
       if ((__ZNK7WebCore13HitTestResult5imageEv(i36) | 0) == 0) {
        break;
       }
      }
      __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i29, HEAP32[i64 >> 2] | 0);
     }
    } while (0);
    __ZNK7WebCore13HitTestResult16absoluteMediaURLEv(i78, i36);
    i68 = i78 | 0;
    i64 = HEAP32[i68 >> 2] | 0;
    do {
     if ((i64 | 0) != 0) {
      if ((HEAP32[i64 + 4 >> 2] | 0) == 0) {
       break;
      }
      i58 = HEAP32[i72 >> 2] | 0;
      if ((i58 | 0) == 0) {
       i98 = 142;
      } else {
       if ((HEAP32[i58 + 4 >> 2] | 0) == 0) {
        i98 = 142;
       } else {
        i98 = 144;
       }
      }
      do {
       if ((i98 | 0) == 142) {
        i58 = HEAP32[i70 >> 2] | 0;
        if ((i58 | 0) == 0) {
         break;
        }
        if ((HEAP32[i58 + 4 >> 2] | 0) != 0) {
         i98 = 144;
        }
       }
      } while (0);
      do {
       if ((i98 | 0) == 144) {
        i58 = __ZN3WTF10fastMallocEj(28) | 0;
        i56 = i58;
        i60 = i13 | 0;
        HEAP32[i60 >> 2] = 0;
        __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i56, 2, 0, i13, 0);
        i54 = HEAP32[i60 >> 2] | 0;
        do {
         if ((i54 | 0) != 0) {
          i60 = i54 | 0;
          i52 = (HEAP32[i60 >> 2] | 0) - 2 | 0;
          if ((i52 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i54);
           break;
          } else {
           HEAP32[i60 >> 2] = i52;
           break;
          }
         }
        } while (0);
        __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i56, HEAP32[i1 + 8 >> 2] | 0);
        if ((i58 | 0) == 0) {
         break;
        }
        __ZN7WebCore15ContextMenuItemD1Ev(i56);
        __ZN3WTF8fastFreeEPv(i58);
       }
      } while (0);
      i54 = i1 + 8 | 0;
      __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i37, HEAP32[i54 >> 2] | 0);
      __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i39, HEAP32[i54 >> 2] | 0);
      __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i41, HEAP32[i54 >> 2] | 0);
      __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i43, HEAP32[i54 >> 2] | 0);
      __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i45, HEAP32[i54 >> 2] | 0);
      i66 = __ZN3WTF10fastMallocEj(28) | 0;
      i62 = i66;
      i52 = i12 | 0;
      HEAP32[i52 >> 2] = 0;
      __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i62, 2, 0, i12, 0);
      i60 = HEAP32[i52 >> 2] | 0;
      do {
       if ((i60 | 0) != 0) {
        i52 = i60 | 0;
        i50 = (HEAP32[i52 >> 2] | 0) - 2 | 0;
        if ((i50 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i60);
         break;
        } else {
         HEAP32[i52 >> 2] = i50;
         break;
        }
       }
      } while (0);
      __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i62, HEAP32[i54 >> 2] | 0);
      if ((i66 | 0) != 0) {
       __ZN7WebCore15ContextMenuItemD1Ev(i62);
       __ZN3WTF8fastFreeEPv(i66);
      }
      __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i35, HEAP32[i54 >> 2] | 0);
      __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i31, HEAP32[i54 >> 2] | 0);
      i60 = HEAP32[i74 + 84 >> 2] | 0;
      i50 = HEAP32[(HEAP32[i60 >> 2] | 0) + 328 >> 2] | 0;
      i52 = HEAP32[i68 >> 2] | 0;
      HEAP32[i79 >> 2] = i52;
      if ((i52 | 0) != 0) {
       i48 = i52 | 0;
       HEAP32[i48 >> 2] = (HEAP32[i48 >> 2] | 0) + 2;
      }
      i48 = HEAP8[i78 + 4 | 0] | 0;
      i52 = i79 + 4 | 0;
      HEAP8[i52] = HEAP8[i52] & -4 | i48 & 1 | i48 & 2;
      HEAP32[i79 + 8 >> 2] = HEAP32[i78 + 8 >> 2];
      HEAP32[i79 + 12 >> 2] = HEAP32[i78 + 12 >> 2];
      HEAP32[i79 + 16 >> 2] = HEAP32[i78 + 16 >> 2];
      HEAP32[i79 + 20 >> 2] = HEAP32[i78 + 20 >> 2];
      HEAP32[i79 + 24 >> 2] = HEAP32[i78 + 24 >> 2];
      HEAP32[i79 + 28 >> 2] = HEAP32[i78 + 28 >> 2];
      HEAP32[i79 + 32 >> 2] = HEAP32[i78 + 32 >> 2];
      HEAP32[i79 + 36 >> 2] = HEAP32[i78 + 36 >> 2];
      HEAP32[i79 + 40 >> 2] = HEAP32[i78 + 40 >> 2];
      HEAP32[i79 + 44 >> 2] = HEAP32[i78 + 44 >> 2];
      HEAP32[i79 + 48 >> 2] = 0;
      HEAPF64[i79 + 56 >> 3] = +HEAPF64[__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE >> 3];
      i48 = i79 + 64 | 0;
      HEAP32[i48 >> 2] = 0;
      __ZN7WebCore3URL10invalidateEv(i48);
      HEAP32[i11 >> 2] = H_BASE + 176;
      __ZN3WTF6StringC1ENS_12ASCIILiteralE(i79 + 112 | 0, i11);
      __ZN7WebCore13HTTPHeaderMapC1Ev(i79 + 116 | 0);
      _memset(i79 + 136 | 0, 0, 16) | 0;
      HEAP8[i79 + 152 | 0] = 11;
      HEAP32[i79 + 156 >> 2] = 1;
      _memset(i79 + 160 | 0, 0, 19) | 0;
      HEAP32[i79 + 180 >> 2] = 15;
      i48 = FUNCTION_TABLE_iii[i50 & 1](i60, i79) | 0;
      __ZN7WebCore15ResourceRequestD2Ev(i79);
      if (!i48) {
       break;
      }
      __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i33, HEAP32[i54 >> 2] | 0);
     }
    } while (0);
    i64 = HEAP32[i70 >> 2] | 0;
    if ((i64 | 0) == 0) {
     i98 = 162;
    } else {
     if ((HEAP32[i64 + 4 >> 2] | 0) == 0) {
      i98 = 162;
     }
    }
    do {
     if ((i98 | 0) == 162) {
      i64 = HEAP32[i72 >> 2] | 0;
      if ((i64 | 0) != 0) {
       if ((HEAP32[i64 + 4 >> 2] | 0) != 0) {
        break;
       }
      }
      i64 = HEAP32[i68 >> 2] | 0;
      if ((i64 | 0) != 0) {
       if ((HEAP32[i64 + 4 >> 2] | 0) != 0) {
        break;
       }
      }
      if (__ZNK7WebCore13HitTestResult10isSelectedEv(i36) | 0) {
       i64 = i1 + 8 | 0;
       do {
        if (__ZN7WebCoreL29selectionContainsPossibleWordEPNS_5FrameE(HEAP32[i74 + 468 >> 2] | 0) | 0) {
         __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i49, HEAP32[i64 >> 2] | 0);
         i48 = __ZN3WTF10fastMallocEj(28) | 0;
         i60 = i48;
         i50 = i9 | 0;
         HEAP32[i50 >> 2] = 0;
         __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i60, 2, 0, i9, 0);
         i52 = HEAP32[i50 >> 2] | 0;
         do {
          if ((i52 | 0) != 0) {
           i50 = i52 | 0;
           i46 = (HEAP32[i50 >> 2] | 0) - 2 | 0;
           if ((i46 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i52);
            break;
           } else {
            HEAP32[i50 >> 2] = i46;
            break;
           }
          }
         } while (0);
         __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i60, HEAP32[i64 >> 2] | 0);
         if ((i48 | 0) == 0) {
          break;
         }
         __ZN7WebCore15ContextMenuItemD1Ev(i60);
         __ZN3WTF8fastFreeEPv(i48);
        }
       } while (0);
       __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i51, HEAP32[i64 >> 2] | 0);
       break;
      }
      i54 = i74 + 32 | 0;
      i66 = HEAP32[i54 >> 2] | 0;
      do {
       if ((i66 | 0) == 0) {
        i98 = 184;
       } else {
        if (__ZNK7WebCore19InspectorController26hasInspectorFrontendClientEv(HEAP32[i66 + 40 >> 2] | 0) | 0) {
         break;
        }
        if (__ZNK7WebCore19InspectorController17hasRemoteFrontendEv(HEAP32[(HEAP32[i54 >> 2] | 0) + 40 >> 2] | 0) | 0) {
         break;
        }
        i62 = HEAP32[i54 >> 2] | 0;
        if ((i62 | 0) == 0) {
         i98 = 184;
         break;
        }
        if (__ZNK7WebCore21BackForwardController18canGoBackOrForwardEi(HEAP32[i62 + 56 >> 2] | 0, -1) | 0) {
         __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i53, HEAP32[i1 + 8 >> 2] | 0);
        }
        i62 = HEAP32[i54 >> 2] | 0;
        if ((i62 | 0) == 0) {
         i98 = 184;
         break;
        }
        if (!(__ZNK7WebCore21BackForwardController18canGoBackOrForwardEi(HEAP32[i62 + 56 >> 2] | 0, 1) | 0)) {
         i98 = 184;
         break;
        }
        __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i55, HEAP32[i1 + 8 >> 2] | 0);
        i98 = 184;
       }
      } while (0);
      do {
       if ((i98 | 0) == 184) {
        i66 = __ZNK7WebCore14DocumentLoader19isLoadingInAPISenseEv(HEAP32[i74 + 128 >> 2] | 0) | 0;
        i64 = HEAP32[i1 + 8 >> 2] | 0;
        if (i66) {
         __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i57, i64);
         break;
        } else {
         __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i59, i64);
         break;
        }
       }
      } while (0);
      if ((HEAP32[i54 >> 2] | 0) == 0) {
       break;
      }
      if ((HEAP32[i74 + 28 >> 2] | 0) == (i74 | 0)) {
       break;
      }
      __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i61, HEAP32[i1 + 8 >> 2] | 0);
     }
    } while (0);
    i64 = HEAP32[i68 >> 2] | 0;
    do {
     if ((i64 | 0) != 0) {
      i66 = i64 | 0;
      i62 = (HEAP32[i66 >> 2] | 0) - 2 | 0;
      if ((i62 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i64);
       break;
      } else {
       HEAP32[i66 >> 2] = i62;
       break;
      }
     }
    } while (0);
    i64 = HEAP32[i70 >> 2] | 0;
    do {
     if ((i64 | 0) != 0) {
      i68 = i64 | 0;
      i62 = (HEAP32[i68 >> 2] | 0) - 2 | 0;
      if ((i62 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i64);
       break;
      } else {
       HEAP32[i68 >> 2] = i62;
       break;
      }
     }
    } while (0);
    i64 = HEAP32[i72 >> 2] | 0;
    if ((i64 | 0) == 0) {
     break;
    }
    i70 = i64 | 0;
    i62 = (HEAP32[i70 >> 2] | 0) - 2 | 0;
    if ((i62 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i64);
     break;
    } else {
     HEAP32[i70 >> 2] = i62;
     break;
    }
   }
   i62 = i74 + 468 | 0;
   i70 = __ZNK7WebCore14FrameSelection17isInPasswordFieldEv(HEAP32[i62 >> 2] | 0) | 0;
   L296 : do {
    if (!i70) {
     i64 = i74 + 464 | 0;
     L298 : do {
      if (__ZNK7WebCore6Editor25isSpellCheckingEnabledForEPNS_4NodeE(HEAP32[i64 >> 2] | 0, i97) | 0) {
       __ZN7WebCore6Editor35guessesForMisspelledOrUngrammaticalERbS1_(i82, HEAP32[i64 >> 2] | 0, i80, i81);
       i68 = (HEAP8[i80] & 1) == 0;
       do {
        if (i68) {
         if ((HEAP8[i81] & 1) != 0) {
          break;
         }
         i66 = i82 + 8 | 0;
         i52 = HEAP32[i66 >> 2] | 0;
         i58 = i82 | 0;
         if ((i52 | 0) != 0) {
          i56 = HEAP32[i58 >> 2] | 0;
          i46 = i56 + (i52 << 2) | 0;
          i52 = i56;
          while (1) {
           i56 = HEAP32[i52 >> 2] | 0;
           do {
            if ((i56 | 0) != 0) {
             i50 = i56 | 0;
             i44 = (HEAP32[i50 >> 2] | 0) - 2 | 0;
             if ((i44 | 0) == 0) {
              __ZN3WTF10StringImpl7destroyEPS0_(i56);
              break;
             } else {
              HEAP32[i50 >> 2] = i44;
              break;
             }
            }
           } while (0);
           i52 = i52 + 4 | 0;
           if ((i52 | 0) == (i46 | 0)) {
            break;
           }
          }
          HEAP32[i66 >> 2] = 0;
         }
         i46 = HEAP32[i58 >> 2] | 0;
         if ((i46 | 0) == 0) {
          break L298;
         }
         HEAP32[i58 >> 2] = 0;
         HEAP32[i82 + 4 >> 2] = 0;
         __ZN3WTF8fastFreeEPv(i46);
         break L298;
        }
       } while (0);
       i48 = i82 + 8 | 0;
       i60 = HEAP32[i48 >> 2] | 0;
       do {
        if ((i60 | 0) == 0) {
         i46 = i1 + 8 | 0;
         if (i68) {
          i99 = i46;
          break;
         }
         __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i63, HEAP32[i46 >> 2] | 0);
         i52 = __ZN3WTF10fastMallocEj(28) | 0;
         i56 = i52;
         i44 = i6 | 0;
         HEAP32[i44 >> 2] = 0;
         __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i56, 2, 0, i6, 0);
         i50 = HEAP32[i44 >> 2] | 0;
         do {
          if ((i50 | 0) != 0) {
           i44 = i50 | 0;
           i42 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
           if ((i42 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i50);
            break;
           } else {
            HEAP32[i44 >> 2] = i42;
            break;
           }
          }
         } while (0);
         __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i56, HEAP32[i46 >> 2] | 0);
         if ((i52 | 0) == 0) {
          i99 = i46;
          break;
         }
         __ZN7WebCore15ContextMenuItemD1Ev(i56);
         __ZN3WTF8fastFreeEPv(i52);
         i99 = i46;
        } else {
         i50 = i82 | 0;
         i58 = i1 + 8 | 0;
         i66 = 0;
         i42 = i60;
         while (1) {
          if (i42 >>> 0 <= i66 >>> 0) {
           i98 = 216;
           break;
          }
          i44 = (HEAP32[i50 >> 2] | 0) + (i66 << 2) | 0;
          i40 = HEAP32[i44 >> 2] | 0;
          do {
           if ((i40 | 0) != 0) {
            if ((HEAP32[i40 + 4 >> 2] | 0) == 0) {
             break;
            }
            __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i83, 0, 15, i44, 0);
            __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i83, HEAP32[i58 >> 2] | 0);
            __ZN7WebCore15ContextMenuItemD1Ev(i83);
           }
          } while (0);
          i44 = i66 + 1 | 0;
          if (i44 >>> 0 >= i60 >>> 0) {
           break;
          }
          i66 = i44;
          i42 = HEAP32[i48 >> 2] | 0;
         }
         if ((i98 | 0) == 216) {
          __ZN3WTF15CrashOnOverflow10overflowedEv();
         }
         i42 = __ZN3WTF10fastMallocEj(28) | 0;
         i66 = i42;
         i58 = i4 | 0;
         HEAP32[i58 >> 2] = 0;
         __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i66, 2, 0, i4, 0);
         i50 = HEAP32[i58 >> 2] | 0;
         do {
          if ((i50 | 0) != 0) {
           i58 = i50 | 0;
           i46 = (HEAP32[i58 >> 2] | 0) - 2 | 0;
           if ((i46 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i50);
            break;
           } else {
            HEAP32[i58 >> 2] = i46;
            break;
           }
          }
         } while (0);
         i50 = i1 + 8 | 0;
         __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i66, HEAP32[i50 >> 2] | 0);
         if ((i42 | 0) == 0) {
          i99 = i50;
          break;
         }
         __ZN7WebCore15ContextMenuItemD1Ev(i66);
         __ZN3WTF8fastFreeEPv(i42);
         i99 = i50;
        }
       } while (0);
       i60 = HEAP32[i99 >> 2] | 0;
       if ((HEAP8[i80] & 1) == 0) {
        __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i69, i60);
       } else {
        __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i65, i60);
        __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i67, HEAP32[i99 >> 2] | 0);
       }
       i60 = __ZN3WTF10fastMallocEj(28) | 0;
       i68 = i60;
       i50 = i3 | 0;
       HEAP32[i50 >> 2] = 0;
       __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i68, 2, 0, i3, 0);
       i46 = HEAP32[i50 >> 2] | 0;
       do {
        if ((i46 | 0) != 0) {
         i50 = i46 | 0;
         i58 = (HEAP32[i50 >> 2] | 0) - 2 | 0;
         if ((i58 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i46);
          break;
         } else {
          HEAP32[i50 >> 2] = i58;
          break;
         }
        }
       } while (0);
       __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i68, HEAP32[i99 >> 2] | 0);
       if ((i60 | 0) != 0) {
        __ZN7WebCore15ContextMenuItemD1Ev(i68);
        __ZN3WTF8fastFreeEPv(i60);
       }
       i46 = HEAP32[i48 >> 2] | 0;
       i58 = i82 | 0;
       if ((i46 | 0) != 0) {
        i50 = HEAP32[i58 >> 2] | 0;
        i52 = i50 + (i46 << 2) | 0;
        i46 = i50;
        while (1) {
         i50 = HEAP32[i46 >> 2] | 0;
         do {
          if ((i50 | 0) != 0) {
           i56 = i50 | 0;
           i44 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
           if ((i44 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i50);
            break;
           } else {
            HEAP32[i56 >> 2] = i44;
            break;
           }
          }
         } while (0);
         i46 = i46 + 4 | 0;
         if ((i46 | 0) == (i52 | 0)) {
          break;
         }
        }
        HEAP32[i48 >> 2] = 0;
       }
       i52 = HEAP32[i58 >> 2] | 0;
       if ((i52 | 0) == 0) {
        break L296;
       }
       HEAP32[i58 >> 2] = 0;
       HEAP32[i82 + 4 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i52);
       break L296;
      }
     } while (0);
     __ZNK7WebCore13HitTestResult21dictationAlternativesEv(i84, i36);
     i64 = i84 + 8 | 0;
     i54 = i84 | 0;
     do {
      if ((HEAP32[i64 >> 2] | 0) == 0) {
       i100 = i54;
      } else {
       i52 = i1 + 8 | 0;
       i46 = 0;
       while (1) {
        __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i85, 0, 2037, (HEAP32[i54 >> 2] | 0) + (i46 << 2) | 0, 0);
        __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i85, HEAP32[i52 >> 2] | 0);
        __ZN7WebCore15ContextMenuItemD1Ev(i85);
        i46 = i46 + 1 | 0;
        if (i46 >>> 0 >= (HEAP32[i64 >> 2] | 0) >>> 0) {
         break;
        }
       }
       i46 = __ZN3WTF10fastMallocEj(28) | 0;
       i52 = i46;
       i58 = i5 | 0;
       HEAP32[i58 >> 2] = 0;
       __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i52, 2, 0, i5, 0);
       i48 = HEAP32[i58 >> 2] | 0;
       do {
        if ((i48 | 0) != 0) {
         i58 = i48 | 0;
         i60 = (HEAP32[i58 >> 2] | 0) - 2 | 0;
         if ((i60 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i48);
          break;
         } else {
          HEAP32[i58 >> 2] = i60;
          break;
         }
        }
       } while (0);
       __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i52, HEAP32[i1 + 8 >> 2] | 0);
       if ((i46 | 0) != 0) {
        __ZN7WebCore15ContextMenuItemD1Ev(i52);
        __ZN3WTF8fastFreeEPv(i46);
       }
       i48 = HEAP32[i64 >> 2] | 0;
       i60 = i84 | 0;
       if ((i48 | 0) == 0) {
        i100 = i60;
        break;
       }
       i58 = HEAP32[i60 >> 2] | 0;
       i68 = i58 + (i48 << 2) | 0;
       i48 = i58;
       while (1) {
        i58 = HEAP32[i48 >> 2] | 0;
        do {
         if ((i58 | 0) != 0) {
          i50 = i58 | 0;
          i42 = (HEAP32[i50 >> 2] | 0) - 2 | 0;
          if ((i42 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i58);
           break;
          } else {
           HEAP32[i50 >> 2] = i42;
           break;
          }
         }
        } while (0);
        i48 = i48 + 4 | 0;
        if ((i48 | 0) == (i68 | 0)) {
         break;
        }
       }
       HEAP32[i64 >> 2] = 0;
       i100 = i60;
      }
     } while (0);
     i64 = HEAP32[i100 >> 2] | 0;
     if ((i64 | 0) == 0) {
      break;
     }
     HEAP32[i100 >> 2] = 0;
     HEAP32[i84 + 4 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i64);
    }
   } while (0);
   __ZNK7WebCore13HitTestResult15absoluteLinkURLEv(i86, i36);
   i72 = i86 | 0;
   i64 = HEAP32[i72 >> 2] | 0;
   do {
    if ((i64 | 0) != 0) {
     if ((HEAP32[i64 + 4 >> 2] | 0) == 0) {
      break;
     }
     i54 = HEAP32[i74 + 84 >> 2] | 0;
     i68 = HEAP32[(HEAP32[i54 >> 2] | 0) + 328 >> 2] | 0;
     HEAP32[i87 >> 2] = i64;
     i48 = i64 | 0;
     HEAP32[i48 >> 2] = (HEAP32[i48 >> 2] | 0) + 2;
     i48 = HEAP8[i86 + 4 | 0] | 0;
     i46 = i87 + 4 | 0;
     HEAP8[i46] = HEAP8[i46] & -4 | i48 & 1 | i48 & 2;
     HEAP32[i87 + 8 >> 2] = HEAP32[i86 + 8 >> 2];
     HEAP32[i87 + 12 >> 2] = HEAP32[i86 + 12 >> 2];
     HEAP32[i87 + 16 >> 2] = HEAP32[i86 + 16 >> 2];
     HEAP32[i87 + 20 >> 2] = HEAP32[i86 + 20 >> 2];
     HEAP32[i87 + 24 >> 2] = HEAP32[i86 + 24 >> 2];
     HEAP32[i87 + 28 >> 2] = HEAP32[i86 + 28 >> 2];
     HEAP32[i87 + 32 >> 2] = HEAP32[i86 + 32 >> 2];
     HEAP32[i87 + 36 >> 2] = HEAP32[i86 + 36 >> 2];
     HEAP32[i87 + 40 >> 2] = HEAP32[i86 + 40 >> 2];
     HEAP32[i87 + 44 >> 2] = HEAP32[i86 + 44 >> 2];
     HEAP32[i87 + 48 >> 2] = 0;
     HEAPF64[i87 + 56 >> 3] = +HEAPF64[__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE >> 3];
     i48 = i87 + 64 | 0;
     HEAP32[i48 >> 2] = 0;
     __ZN7WebCore3URL10invalidateEv(i48);
     HEAP32[i7 >> 2] = H_BASE + 176;
     __ZN3WTF6StringC1ENS_12ASCIILiteralE(i87 + 112 | 0, i7);
     __ZN7WebCore13HTTPHeaderMapC1Ev(i87 + 116 | 0);
     _memset(i87 + 136 | 0, 0, 16) | 0;
     HEAP8[i87 + 152 | 0] = 11;
     HEAP32[i87 + 156 >> 2] = 1;
     _memset(i87 + 160 | 0, 0, 19) | 0;
     HEAP32[i87 + 180 >> 2] = 15;
     i48 = FUNCTION_TABLE_iii[i68 & 1](i54, i87) | 0;
     __ZN7WebCore15ResourceRequestD2Ev(i87);
     i54 = i1 + 8 | 0;
     if (i48) {
      __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i17, HEAP32[i54 >> 2] | 0);
      __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i19, HEAP32[i54 >> 2] | 0);
      __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i21, HEAP32[i54 >> 2] | 0);
     }
     __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i23, HEAP32[i54 >> 2] | 0);
     i48 = __ZN3WTF10fastMallocEj(28) | 0;
     i68 = i48;
     i46 = i8 | 0;
     HEAP32[i46 >> 2] = 0;
     __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i68, 2, 0, i8, 0);
     i52 = HEAP32[i46 >> 2] | 0;
     do {
      if ((i52 | 0) != 0) {
       i46 = i52 | 0;
       i58 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
       if ((i58 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i52);
        break;
       } else {
        HEAP32[i46 >> 2] = i58;
        break;
       }
      }
     } while (0);
     __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i68, HEAP32[i54 >> 2] | 0);
     if ((i48 | 0) == 0) {
      break;
     }
     __ZN7WebCore15ContextMenuItemD1Ev(i68);
     __ZN3WTF8fastFreeEPv(i48);
    }
   } while (0);
   do {
    if (!(i70 | (__ZNK7WebCore13HitTestResult10isSelectedEv(i36) | 0) ^ 1)) {
     if (!(__ZN7WebCoreL29selectionContainsPossibleWordEPNS_5FrameE(HEAP32[i62 >> 2] | 0) | 0)) {
      break;
     }
     i64 = i1 + 8 | 0;
     __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i49, HEAP32[i64 >> 2] | 0);
     i52 = __ZN3WTF10fastMallocEj(28) | 0;
     i58 = i52;
     i46 = i10 | 0;
     HEAP32[i46 >> 2] = 0;
     __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i58, 2, 0, i10, 0);
     i42 = HEAP32[i46 >> 2] | 0;
     do {
      if ((i42 | 0) != 0) {
       i46 = i42 | 0;
       i50 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
       if ((i50 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i42);
        break;
       } else {
        HEAP32[i46 >> 2] = i50;
        break;
       }
      }
     } while (0);
     __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i58, HEAP32[i64 >> 2] | 0);
     if ((i52 | 0) == 0) {
      break;
     }
     __ZN7WebCore15ContextMenuItemD1Ev(i58);
     __ZN3WTF8fastFreeEPv(i52);
    }
   } while (0);
   i62 = i1 + 8 | 0;
   __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i71, HEAP32[i62 >> 2] | 0);
   __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i51, HEAP32[i62 >> 2] | 0);
   __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i73, HEAP32[i62 >> 2] | 0);
   if (!i70) {
    i42 = __ZN3WTF10fastMallocEj(28) | 0;
    i48 = i42;
    i68 = i14 | 0;
    HEAP32[i68 >> 2] = 0;
    __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i48, 2, 0, i14, 0);
    i54 = HEAP32[i68 >> 2] | 0;
    do {
     if ((i54 | 0) != 0) {
      i68 = i54 | 0;
      i50 = (HEAP32[i68 >> 2] | 0) - 2 | 0;
      if ((i50 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i54);
       break;
      } else {
       HEAP32[i68 >> 2] = i50;
       break;
      }
     }
    } while (0);
    __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i48, HEAP32[i62 >> 2] | 0);
    if ((i42 | 0) != 0) {
     __ZN7WebCore15ContextMenuItemD1Ev(i48);
     __ZN3WTF8fastFreeEPv(i42);
    }
    __ZN7WebCore30contextMenuItemTagSpellingMenuEv(i89);
    __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i88, 3, 2002, i89, 0);
    i54 = HEAP32[i89 >> 2] | 0;
    do {
     if ((i54 | 0) != 0) {
      i70 = i54 | 0;
      i50 = (HEAP32[i70 >> 2] | 0) - 2 | 0;
      if ((i50 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i54);
       break;
      } else {
       HEAP32[i70 >> 2] = i50;
       break;
      }
     }
    } while (0);
    __ZN7WebCore21ContextMenuController40createAndAppendSpellingAndGrammarSubMenuERNS_15ContextMenuItemE(i1, i88);
    __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i88, HEAP32[i62 >> 2] | 0);
    __ZN7WebCore26contextMenuItemTagFontMenuEv(i91);
    __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i90, 3, 2007, i91, 0);
    i54 = HEAP32[i91 >> 2] | 0;
    do {
     if ((i54 | 0) != 0) {
      i42 = i54 | 0;
      i48 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
      if ((i48 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i54);
       break;
      } else {
       HEAP32[i42 >> 2] = i48;
       break;
      }
     }
    } while (0);
    __ZN7WebCore21ContextMenuController26createAndAppendFontSubMenuERNS_15ContextMenuItemE(i1, i90);
    __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i90, HEAP32[i62 >> 2] | 0);
    __ZN7WebCore15ContextMenuItemD1Ev(i90);
    __ZN7WebCore38contextMenuItemTagWritingDirectionMenuEv(i93);
    __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i92, 3, 2018, i93, 0);
    i54 = HEAP32[i93 >> 2] | 0;
    do {
     if ((i54 | 0) != 0) {
      i48 = i54 | 0;
      i42 = (HEAP32[i48 >> 2] | 0) - 2 | 0;
      if ((i42 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i54);
       break;
      } else {
       HEAP32[i48 >> 2] = i42;
       break;
      }
     }
    } while (0);
    __ZN7WebCore21ContextMenuController38createAndAppendWritingDirectionSubMenuERNS_15ContextMenuItemE(i1, i92);
    __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i92, HEAP32[i62 >> 2] | 0);
    i54 = HEAP32[i74 + 32 >> 2] | 0;
    do {
     if ((i54 | 0) != 0) {
      i42 = HEAP32[(HEAP32[i54 + 48 >> 2] | 0) + 172 >> 2] | 0;
      if ((i42 | 0) == 1) {
       if (!(__ZNK7WebCore6Editor16hasBidiSelectionEv(HEAP32[i74 + 464 >> 2] | 0) | 0)) {
        break;
       }
      } else if ((i42 | 0) != 2) {
       break;
      }
      __ZN7WebCore35contextMenuItemTagTextDirectionMenuEv(i95);
      __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i94, 3, 2025, i95, 0);
      i42 = HEAP32[i95 >> 2] | 0;
      do {
       if ((i42 | 0) != 0) {
        i48 = i42 | 0;
        i50 = (HEAP32[i48 >> 2] | 0) - 2 | 0;
        if ((i50 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i42);
         break;
        } else {
         HEAP32[i48 >> 2] = i50;
         break;
        }
       }
      } while (0);
      __ZN7WebCore21ContextMenuController35createAndAppendTextDirectionSubMenuERNS_15ContextMenuItemE(i1, i94);
      __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i94, HEAP32[i62 >> 2] | 0);
      __ZN7WebCore15ContextMenuItemD1Ev(i94);
     }
    } while (0);
    __ZN7WebCore15ContextMenuItemD1Ev(i92);
    __ZN7WebCore15ContextMenuItemD1Ev(i88);
   }
   i62 = HEAP32[i72 >> 2] | 0;
   if ((i62 | 0) == 0) {
    break;
   }
   i74 = i62 | 0;
   i54 = (HEAP32[i74 >> 2] | 0) - 2 | 0;
   if ((i54 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i62);
    break;
   } else {
    HEAP32[i74 >> 2] = i54;
    break;
   }
  }
 } while (0);
 __ZN7WebCore15ContextMenuItemD1Ev(i73);
 __ZN7WebCore15ContextMenuItemD1Ev(i71);
 __ZN7WebCore15ContextMenuItemD1Ev(i69);
 __ZN7WebCore15ContextMenuItemD1Ev(i67);
 __ZN7WebCore15ContextMenuItemD1Ev(i65);
 __ZN7WebCore15ContextMenuItemD1Ev(i63);
 __ZN7WebCore15ContextMenuItemD1Ev(i61);
 __ZN7WebCore15ContextMenuItemD1Ev(i59);
 __ZN7WebCore15ContextMenuItemD1Ev(i57);
 __ZN7WebCore15ContextMenuItemD1Ev(i55);
 __ZN7WebCore15ContextMenuItemD1Ev(i53);
 __ZN7WebCore15ContextMenuItemD1Ev(i51);
 __ZN7WebCore15ContextMenuItemD1Ev(i49);
 __ZN7WebCore15ContextMenuItemD1Ev(i47);
 __ZN7WebCore15ContextMenuItemD1Ev(i45);
 __ZN7WebCore15ContextMenuItemD1Ev(i43);
 __ZN7WebCore15ContextMenuItemD1Ev(i41);
 __ZN7WebCore15ContextMenuItemD1Ev(i39);
 __ZN7WebCore15ContextMenuItemD1Ev(i37);
 __ZN7WebCore15ContextMenuItemD1Ev(i35);
 __ZN7WebCore15ContextMenuItemD1Ev(i33);
 __ZN7WebCore15ContextMenuItemD1Ev(i31);
 __ZN7WebCore15ContextMenuItemD1Ev(i29);
 __ZN7WebCore15ContextMenuItemD1Ev(i27);
 __ZN7WebCore15ContextMenuItemD1Ev(i25);
 __ZN7WebCore15ContextMenuItemD1Ev(i23);
 __ZN7WebCore15ContextMenuItemD1Ev(i21);
 __ZN7WebCore15ContextMenuItemD1Ev(i19);
 __ZN7WebCore15ContextMenuItemD1Ev(i17);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore21ContextMenuController23contextMenuItemSelectedEPNS_15ContextMenuItemE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 2008 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 72 | 0;
 i9 = i3 + 120 | 0;
 i10 = i3 + 168 | 0;
 i11 = i3 + 176 | 0;
 i12 = i3 + 224 | 0;
 i13 = i3 + 272 | 0;
 i14 = i3 + 320 | 0;
 i15 = i3 + 368 | 0;
 i16 = i3 + 416 | 0;
 i17 = i3 + 424 | 0;
 i18 = i3 + 440 | 0;
 i19 = i3 + 448 | 0;
 i20 = i3 + 456 | 0;
 i21 = i3 + 472 | 0;
 i22 = i3 + 480 | 0;
 i23 = i3 + 488 | 0;
 i24 = i3 + 496 | 0;
 i25 = i3 + 504 | 0;
 i26 = i3 + 568 | 0;
 i27 = i3 + 584 | 0;
 i28 = i3 + 600 | 0;
 i29 = i3 + 608 | 0;
 i30 = i3 + 616 | 0;
 i31 = i3 + 624 | 0;
 i32 = i3 + 936 | 0;
 i33 = i3 + 1120 | 0;
 i34 = i3 + 1168 | 0;
 i35 = i3 + 1176 | 0;
 i36 = i3 + 1184 | 0;
 i37 = i3 + 1192 | 0;
 i38 = i3 + 1240 | 0;
 i39 = i3 + 1552 | 0;
 i40 = i3 + 1736 | 0;
 i41 = i3 + 1784 | 0;
 i42 = i3 + 1792 | 0;
 i43 = i3 + 1800 | 0;
 i44 = i3 + 1808 | 0;
 i45 = i3 + 1824 | 0;
 i46 = i3 + 1832 | 0;
 i47 = i3 + 1840 | 0;
 i48 = i3 + 1856 | 0;
 i49 = i3 + 1864 | 0;
 i50 = i3 + 1872 | 0;
 i51 = i3 + 1880 | 0;
 i52 = i3 + 1888 | 0;
 i53 = i3 + 1896 | 0;
 i54 = i3 + 1904 | 0;
 i55 = i3 + 1912 | 0;
 i56 = i3 + 1928 | 0;
 i57 = i3 + 1936 | 0;
 i58 = i3 + 1944 | 0;
 i59 = i3 + 1960 | 0;
 i60 = i3 + 1968 | 0;
 i61 = i3 + 1976 | 0;
 i62 = i3 + 1992 | 0;
 i63 = i3 + 2e3 | 0;
 if ((__ZNK7WebCore15ContextMenuItem6actionEv(i2) | 0) > 9999) {
  i64 = HEAP32[i1 + 4 >> 2] | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i64 >> 2] | 0) + 16 >> 2] & 3](i64, i2, HEAP32[i1 + 8 >> 2] | 0);
  STACKTOP = i3;
  return;
 }
 if ((__ZNK7WebCore15ContextMenuItem6actionEv(i2) | 0) > 4999) {
  i64 = HEAP32[i1 + 12 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i64 >> 2] | 0) + 12 >> 2] & 1](i64, i2);
  STACKTOP = i3;
  return;
 }
 i64 = i1 + 16 | 0;
 i65 = i1 + 92 | 0;
 i66 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i65 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i66 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 switch (__ZNK7WebCore15ContextMenuItem6actionEv(i2) | 0) {
 case 2:
  {
   i67 = HEAP32[i1 + 4 >> 2] | 0;
   i68 = HEAP32[(HEAP32[i67 >> 2] | 0) + 20 >> 2] | 0;
   __ZNK7WebCore13HitTestResult15absoluteLinkURLEv(i8, i64);
   FUNCTION_TABLE_vii[i68 & 1](i67, i8);
   i67 = HEAP32[i8 >> 2] | 0;
   if ((i67 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i8 = i67 | 0;
   i68 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i68 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i67);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i8 >> 2] = i68;
    STACKTOP = i3;
    return;
   }
   break;
  }
 case 3:
  {
   i68 = HEAP32[i66 + 464 >> 2] | 0;
   __ZNK7WebCore13HitTestResult15absoluteLinkURLEv(i9, i64);
   __ZNK7WebCore13HitTestResult11textContentEv(i10, i64);
   __ZN7WebCore6Editor7copyURLERKNS_3URLERKN3WTF6StringE(i68, i9, i10);
   i68 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i68 | 0) != 0) {
     i10 = i68 | 0;
     i8 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i68);
      break;
     } else {
      HEAP32[i10 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i68 = HEAP32[i9 >> 2] | 0;
   if ((i68 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i9 = i68 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i68);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i9 >> 2] = i8;
    STACKTOP = i3;
    return;
   }
   break;
  }
 case 5:
  {
   i8 = HEAP32[i1 + 4 >> 2] | 0;
   i9 = HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] | 0;
   __ZNK7WebCore13HitTestResult16absoluteImageURLEv(i12, i64);
   FUNCTION_TABLE_vii[i9 & 1](i8, i12);
   i8 = HEAP32[i12 >> 2] | 0;
   if ((i8 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i12 = i8 | 0;
   i9 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i12 >> 2] = i9;
    STACKTOP = i3;
    return;
   }
   break;
  }
 case 1:
  {
   __ZNK7WebCore13HitTestResult15absoluteLinkURLEv(i7, i64);
   __ZN7WebCoreL13openNewWindowERKNS_3URLEPNS_5FrameE(i7, i66);
   i9 = HEAP32[i7 >> 2] | 0;
   if ((i9 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i7 = i9 | 0;
   i12 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i7 >> 2] = i12;
    STACKTOP = i3;
    return;
   }
   break;
  }
 case 4:
  {
   __ZNK7WebCore13HitTestResult16absoluteImageURLEv(i11, i64);
   __ZN7WebCoreL13openNewWindowERKNS_3URLEPNS_5FrameE(i11, i66);
   i12 = HEAP32[i11 >> 2] | 0;
   if ((i12 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i11 = i12 | 0;
   i7 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i11 >> 2] = i7;
    STACKTOP = i3;
    return;
   }
   break;
  }
 case 6:
  {
   __ZN7WebCore6Editor9copyImageERKNS_13HitTestResultE(HEAP32[i66 + 464 >> 2] | 0, i64);
   STACKTOP = i3;
   return;
  }
 case 2029:
  {
   __ZNK7WebCore13HitTestResult16absoluteMediaURLEv(i13, i64);
   __ZN7WebCoreL13openNewWindowERKNS_3URLEPNS_5FrameE(i13, i66);
   i7 = HEAP32[i13 >> 2] | 0;
   if ((i7 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i13 = i7 | 0;
   i11 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i13 >> 2] = i11;
    STACKTOP = i3;
    return;
   }
   break;
  }
 case 2030:
  {
   i11 = HEAP32[i1 + 4 >> 2] | 0;
   i13 = HEAP32[(HEAP32[i11 >> 2] | 0) + 20 >> 2] | 0;
   __ZNK7WebCore13HitTestResult16absoluteMediaURLEv(i14, i64);
   FUNCTION_TABLE_vii[i13 & 1](i11, i14);
   i11 = HEAP32[i14 >> 2] | 0;
   if ((i11 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i14 = i11 | 0;
   i13 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i14 >> 2] = i13;
    STACKTOP = i3;
    return;
   }
   break;
  }
 case 2031:
  {
   i13 = HEAP32[i66 + 464 >> 2] | 0;
   __ZNK7WebCore13HitTestResult16absoluteMediaURLEv(i15, i64);
   __ZNK7WebCore13HitTestResult11textContentEv(i16, i64);
   __ZN7WebCore6Editor7copyURLERKNS_3URLERKN3WTF6StringE(i13, i15, i16);
   i13 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i16 = i13 | 0;
     i14 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i16 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i13 = HEAP32[i15 >> 2] | 0;
   if ((i13 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i15 = i13 | 0;
   i14 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i15 >> 2] = i14;
    STACKTOP = i3;
    return;
   }
   break;
  }
 case 2032:
  {
   __ZNK7WebCore13HitTestResult26toggleMediaControlsDisplayEv(i64);
   STACKTOP = i3;
   return;
  }
 case 2033:
  {
   __ZNK7WebCore13HitTestResult23toggleMediaLoopPlaybackEv(i64);
   STACKTOP = i3;
   return;
  }
 case 2039:
  {
   __ZNK7WebCore13HitTestResult26toggleMediaFullscreenStateEv(i64);
   STACKTOP = i3;
   return;
  }
 case 2034:
  {
   __ZNK7WebCore13HitTestResult23enterFullscreenForVideoEv(i64);
   STACKTOP = i3;
   return;
  }
 case 2035:
  {
   __ZNK7WebCore13HitTestResult20toggleMediaPlayStateEv(i64);
   STACKTOP = i3;
   return;
  }
 case 2036:
  {
   __ZNK7WebCore13HitTestResult20toggleMediaMuteStateEv(i64);
   STACKTOP = i3;
   return;
  }
 case 7:
  {
   i14 = HEAP32[i66 + 128 >> 2] | 0;
   i15 = HEAP32[(__ZNK7WebCore14DocumentLoader14unreachableURLEv(i14) | 0) >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     if ((HEAP32[i15 + 4 >> 2] | 0) == 0) {
      break;
     }
     __ZN7WebCoreL13openNewWindowERKNS_3URLEPNS_5FrameE(__ZNK7WebCore14DocumentLoader14unreachableURLEv(i14) | 0, i66);
     STACKTOP = i3;
     return;
    }
   } while (0);
   __ZN7WebCoreL13openNewWindowERKNS_3URLEPNS_5FrameE(__ZNK7WebCore14DocumentLoader3urlEv(i14) | 0, i66);
   STACKTOP = i3;
   return;
  }
 case 8:
  {
   __ZN7WebCore6Editor4copyEv(HEAP32[i66 + 464 >> 2] | 0);
   STACKTOP = i3;
   return;
  }
 case 9:
  {
   i14 = HEAP32[i66 + 32 >> 2] | 0;
   if ((i14 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   __ZN7WebCore21BackForwardController15goBackOrForwardEi(HEAP32[i14 + 56 >> 2] | 0, -1);
   STACKTOP = i3;
   return;
  }
 case 10:
  {
   i14 = HEAP32[i66 + 32 >> 2] | 0;
   if ((i14 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   __ZN7WebCore21BackForwardController15goBackOrForwardEi(HEAP32[i14 + 56 >> 2] | 0, 1);
   STACKTOP = i3;
   return;
  }
 case 11:
  {
   __ZN7WebCore11FrameLoader4stopEv(i66 + 80 | 0);
   STACKTOP = i3;
   return;
  }
 case 12:
  {
   __ZN7WebCore11FrameLoader6reloadEb(i66 + 80 | 0, 0);
   STACKTOP = i3;
   return;
  }
 case 13:
  {
   i14 = HEAP32[i66 + 464 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i18, H_BASE + 224 | 0);
   __ZN7WebCore6Editor7commandERKN3WTF6StringE(i17, i14, i18);
   i14 = i19 | 0;
   HEAP32[i14 >> 2] = 0;
   __ZNK7WebCore6Editor7Command7executeERKN3WTF6StringEPNS_5EventE(i17, i19, 0) | 0;
   i19 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i14 = i19 | 0;
     i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i19);
      break;
     } else {
      HEAP32[i14 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i19 = HEAP32[i17 + 8 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i17 = i19 + 4 | 0;
     i15 = i17 | 0;
     i14 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     if ((i14 | 0) != 0) {
      HEAP32[i15 >> 2] = i14;
      break;
     }
     i14 = i17 - 4 | 0;
     if ((i14 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 3](i14);
    }
   } while (0);
   i19 = HEAP32[i18 >> 2] | 0;
   if ((i19 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i18 = i19 | 0;
   i14 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i18 >> 2] = i14;
    STACKTOP = i3;
    return;
   }
   break;
  }
 case 14:
  {
   i14 = HEAP32[i66 + 464 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i21, H_BASE + 216 | 0);
   __ZN7WebCore6Editor7commandERKN3WTF6StringE(i20, i14, i21);
   i14 = i22 | 0;
   HEAP32[i14 >> 2] = 0;
   __ZNK7WebCore6Editor7Command7executeERKN3WTF6StringEPNS_5EventE(i20, i22, 0) | 0;
   i22 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i14 = i22 | 0;
     i18 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i18 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i22);
      break;
     } else {
      HEAP32[i14 >> 2] = i18;
      break;
     }
    }
   } while (0);
   i22 = HEAP32[i20 + 8 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i20 = i22 + 4 | 0;
     i18 = i20 | 0;
     i14 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     if ((i14 | 0) != 0) {
      HEAP32[i18 >> 2] = i14;
      break;
     }
     i14 = i20 - 4 | 0;
     if ((i14 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 3](i14);
    }
   } while (0);
   i22 = HEAP32[i21 >> 2] | 0;
   if ((i22 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i21 = i22 | 0;
   i14 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i22);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i21 >> 2] = i14;
    STACKTOP = i3;
    return;
   }
   break;
  }
 case 15:
  {
   i14 = HEAP32[i66 + 468 >> 2] | 0;
   i21 = i66 + 464 | 0;
   i22 = HEAP32[i21 >> 2] | 0;
   i20 = i2 + 8 | 0;
   __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i23, i14 + 32 | 0);
   i18 = i23 | 0;
   i23 = __ZNK7WebCore6Editor16shouldInsertTextERKN3WTF6StringEPNS_5RangeENS_18EditorInsertActionE(i22, i20, HEAP32[i18 >> 2] | 0, 1) | 0;
   i22 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i18 = i22 | 0;
     i19 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i22);
      __ZN3WTF8fastFreeEPv(i22);
      break;
     } else {
      HEAP32[i18 >> 2] = i19;
      break;
     }
    }
   } while (0);
   if (!i23) {
    STACKTOP = i3;
    return;
   }
   __ZNK7WebCore6Editor8behaviorEv(i24, HEAP32[i21 >> 2] | 0);
   if ((HEAP32[i24 >> 2] | 0) == 2) {
    i24 = i27 | 0;
    i21 = HEAP32[i14 + 32 >> 2] | 0;
    HEAP32[i24 >> 2] = i21;
    if ((i21 | 0) != 0) {
     i23 = i21 + 8 | 0;
     HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
    }
    HEAP32[i27 + 4 >> 2] = HEAP32[i14 + 36 >> 2];
    i23 = HEAP32[i14 + 40 >> 2] | 0;
    i21 = i27 + 8 | 0;
    i22 = i21;
    i19 = HEAP32[i22 >> 2] & -8 | i23 & 7;
    HEAP32[i22 >> 2] = i19;
    HEAP8[i21] = i19 & 255 & -9 | i23 & 8;
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i26, i27, 1);
    __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionEb(i25, i26, 0);
    i27 = HEAP32[i26 >> 2] | 0;
    do {
     if ((i27 | 0) != 0) {
      i26 = i27 + 8 | 0;
      i23 = i26 | 0;
      i19 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
      HEAP32[i23 >> 2] = i19;
      if ((i19 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
     }
    } while (0);
    i27 = HEAP32[i24 >> 2] | 0;
    do {
     if ((i27 | 0) != 0) {
      i24 = i27 + 8 | 0;
      i26 = i24 | 0;
      i19 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
      HEAP32[i26 >> 2] = i19;
      if ((i19 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore16VisibleSelection22expandUsingGranularityENS_15TextGranularityE(i25, 1) | 0;
    __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i14, i25, 6, 0, 0);
    __ZN7WebCore16VisibleSelectionD2Ev(i25);
    i69 = 12;
   } else {
    i69 = 13;
   }
   i25 = HEAP32[i66 + 456 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i29, H_BASE + 232 | 0);
   __ZN7WebCore24createFragmentFromMarkupERNS_8DocumentERKN3WTF6StringES5_NS_19ParserContentPolicyE(i28, i25, i20, i29, 2);
   i20 = __ZN3WTF10fastMallocEj(200) | 0;
   i27 = i6 | 0;
   i24 = i28 | 0;
   i28 = HEAP32[i24 >> 2] | 0;
   HEAP32[i24 >> 2] = 0;
   HEAP32[i27 >> 2] = i28;
   __ZN7WebCore23ReplaceSelectionCommandC1ERNS_8DocumentEN3WTF10PassRefPtrINS_16DocumentFragmentEEEjNS_10EditActionE(i20, i25, i6, i69, 29);
   i69 = HEAP32[i27 >> 2] | 0;
   do {
    if ((i69 | 0) != 0) {
     i27 = i69 + 8 | 0;
     i6 = i27 | 0;
     i25 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
     HEAP32[i6 >> 2] = i25;
     if ((i25 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
    }
   } while (0);
   i69 = HEAP32[i24 >> 2] | 0;
   do {
    if ((i69 | 0) != 0) {
     i24 = i69 + 8 | 0;
     i27 = i24 | 0;
     i25 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
     HEAP32[i27 >> 2] = i25;
     if ((i25 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
    }
   } while (0);
   i69 = HEAP32[i29 >> 2] | 0;
   do {
    if ((i69 | 0) != 0) {
     i29 = i69 | 0;
     i24 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
     if ((i24 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i69);
      break;
     } else {
      HEAP32[i29 >> 2] = i24;
      break;
     }
    }
   } while (0);
   i69 = i30 | 0;
   HEAP32[i69 >> 2] = i20;
   i24 = (i20 | 0) == 0;
   if (!i24) {
    i29 = i20 + 4 | 0;
    HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
   }
   __ZN7WebCore12applyCommandEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i30);
   i30 = HEAP32[i69 >> 2] | 0;
   do {
    if ((i30 | 0) != 0) {
     i69 = i30 + 4 | 0;
     i29 = i69 | 0;
     i25 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
     if ((i25 | 0) != 0) {
      HEAP32[i29 >> 2] = i25;
      break;
     }
     i25 = i69 - 4 | 0;
     if ((i25 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 3](i25);
    }
   } while (0);
   __ZN7WebCore14FrameSelection15revealSelectionERKNS_15ScrollAlignmentENS_18RevealExtentOptionE(i14, __ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE, 1);
   if (i24) {
    STACKTOP = i3;
    return;
   }
   i24 = i20 + 4 | 0;
   i14 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 3](i20);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i24 >> 2] = i14;
    STACKTOP = i3;
    return;
   }
   break;
  }
 case 17:
  {
   __ZN7WebCore6Editor14ignoreSpellingEv(HEAP32[i66 + 464 >> 2] | 0);
   STACKTOP = i3;
   return;
  }
 case 18:
  {
   __ZN7WebCore6Editor13learnSpellingEv(HEAP32[i66 + 464 >> 2] | 0);
   STACKTOP = i3;
   return;
  }
 case 21:
  {
   i14 = HEAP32[i1 + 4 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 24 >> 2] & 1](i14, i66);
   STACKTOP = i3;
   return;
  }
 case 22:
  {
   i14 = HEAP32[i1 + 4 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 28 >> 2] & 1](i14, i66);
   STACKTOP = i3;
   return;
  }
 case 2e3:
  {
   i14 = __ZNK7WebCore13HitTestResult11targetFrameEv(i64) | 0;
   if ((i14 | 0) == 0) {
    __ZNK7WebCore13HitTestResult15absoluteLinkURLEv(i37, i64);
    __ZN7WebCoreL13openNewWindowERKNS_3URLEPNS_5FrameE(i37, i66);
    i24 = HEAP32[i37 >> 2] | 0;
    if ((i24 | 0) == 0) {
     STACKTOP = i3;
     return;
    }
    i37 = i24 | 0;
    i20 = (HEAP32[i37 >> 2] | 0) - 2 | 0;
    if ((i20 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i24);
     STACKTOP = i3;
     return;
    } else {
     HEAP32[i37 >> 2] = i20;
     STACKTOP = i3;
     return;
    }
   }
   i20 = HEAP32[(HEAP32[i66 + 456 >> 2] | 0) + 100 >> 2] | 0;
   __ZNK7WebCore13HitTestResult15absoluteLinkURLEv(i33, i64);
   __ZNK7WebCore11FrameLoader16outgoingReferrerEv(i34, i66 + 80 | 0);
   i37 = i33 | 0;
   i24 = HEAP32[i37 >> 2] | 0;
   HEAP32[i32 >> 2] = i24;
   if ((i24 | 0) != 0) {
    i30 = i24 | 0;
    HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 2;
   }
   i30 = HEAP8[i33 + 4 | 0] | 0;
   i24 = i32 + 4 | 0;
   HEAP8[i24] = HEAP8[i24] & -4 | i30 & 1 | i30 & 2;
   HEAP32[i32 + 8 >> 2] = HEAP32[i33 + 8 >> 2];
   HEAP32[i32 + 12 >> 2] = HEAP32[i33 + 12 >> 2];
   HEAP32[i32 + 16 >> 2] = HEAP32[i33 + 16 >> 2];
   HEAP32[i32 + 20 >> 2] = HEAP32[i33 + 20 >> 2];
   HEAP32[i32 + 24 >> 2] = HEAP32[i33 + 24 >> 2];
   HEAP32[i32 + 28 >> 2] = HEAP32[i33 + 28 >> 2];
   HEAP32[i32 + 32 >> 2] = HEAP32[i33 + 32 >> 2];
   HEAP32[i32 + 36 >> 2] = HEAP32[i33 + 36 >> 2];
   HEAP32[i32 + 40 >> 2] = HEAP32[i33 + 40 >> 2];
   HEAP32[i32 + 44 >> 2] = HEAP32[i33 + 44 >> 2];
   HEAP32[i32 + 48 >> 2] = 0;
   HEAPF64[i32 + 56 >> 3] = +HEAPF64[__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE >> 3];
   i33 = i32 + 64 | 0;
   HEAP32[i33 >> 2] = 0;
   __ZN7WebCore3URL10invalidateEv(i33);
   HEAP32[i5 >> 2] = H_BASE + 176;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i32 + 112 | 0, i5);
   __ZN7WebCore13HTTPHeaderMapC1Ev(i32 + 116 | 0);
   _memset(i32 + 136 | 0, 0, 16) | 0;
   HEAP8[i32 + 152 | 0] = 11;
   HEAP32[i32 + 156 >> 2] = 1;
   _memset(i32 + 160 | 0, 0, 19) | 0;
   HEAP32[i32 + 180 >> 2] = 15;
   __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i32 | 0, H_BASE + 168 | 0, i34);
   __ZN7WebCore16FrameLoadRequestC1EPNS_14SecurityOriginERKNS_15ResourceRequestE(i31, i20, i32);
   i20 = i35 | 0;
   HEAP32[i20 >> 2] = 0;
   i5 = i36 | 0;
   HEAP32[i5 >> 2] = 0;
   __ZN7WebCore11FrameLoader16loadFrameRequestERKNS_16FrameLoadRequestEbbN3WTF10PassRefPtrINS_5EventEEENS5_INS_9FormStateEEENS_18ShouldSendReferrerE(i14 + 80 | 0, i31, 0, 0, i35, i36, 0);
   i36 = HEAP32[i5 >> 2] | 0;
   if ((i36 | 0) != 0) {
    __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i36 | 0);
   }
   i36 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i36 | 0) != 0) {
     i20 = i36 + 8 | 0;
     i5 = i20 | 0;
     i35 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     if ((i35 | 0) != 0) {
      HEAP32[i5 >> 2] = i35;
      break;
     }
     i35 = i20 - 8 | 0;
     if ((i35 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i35 >> 2] | 0) + 4 >> 2] & 3](i35);
    }
   } while (0);
   __ZN7WebCore14SubstituteDataD2Ev(i31 + 200 | 0);
   i36 = HEAP32[i31 + 192 >> 2] | 0;
   do {
    if ((i36 | 0) != 0) {
     i35 = i36 | 0;
     i20 = (HEAP32[i35 >> 2] | 0) - 2 | 0;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i36);
      break;
     } else {
      HEAP32[i35 >> 2] = i20;
      break;
     }
    }
   } while (0);
   __ZN7WebCore15ResourceRequestD2Ev(i31 + 8 | 0);
   i36 = HEAP32[i31 >> 2] | 0;
   do {
    if ((i36 | 0) != 0) {
     i31 = i36 | 0;
     if (((tempValue = HEAP32[i31 >> 2] | 0, HEAP32[i31 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
      break;
     }
     __ZN7WebCore14SecurityOriginD2Ev(i36);
     __ZN3WTF8fastFreeEPv(i36);
    }
   } while (0);
   __ZN7WebCore15ResourceRequestD2Ev(i32);
   i32 = HEAP32[i34 >> 2] | 0;
   do {
    if ((i32 | 0) != 0) {
     i34 = i32 | 0;
     i36 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
     if ((i36 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i32);
      break;
     } else {
      HEAP32[i34 >> 2] = i36;
      break;
     }
    }
   } while (0);
   i32 = HEAP32[i37 >> 2] | 0;
   if ((i32 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i37 = i32 | 0;
   i36 = (HEAP32[i37 >> 2] | 0) - 2 | 0;
   if ((i36 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i32);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i37 >> 2] = i36;
    STACKTOP = i3;
    return;
   }
   break;
  }
 case 2038:
  {
   i36 = i66 + 80 | 0;
   i37 = HEAP32[(HEAP32[i66 + 456 >> 2] | 0) + 100 >> 2] | 0;
   __ZNK7WebCore13HitTestResult15absoluteLinkURLEv(i40, i64);
   __ZNK7WebCore11FrameLoader16outgoingReferrerEv(i41, i36);
   i64 = i40 | 0;
   i32 = HEAP32[i64 >> 2] | 0;
   HEAP32[i39 >> 2] = i32;
   if ((i32 | 0) != 0) {
    i34 = i32 | 0;
    HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 2;
   }
   i34 = HEAP8[i40 + 4 | 0] | 0;
   i32 = i39 + 4 | 0;
   HEAP8[i32] = HEAP8[i32] & -4 | i34 & 1 | i34 & 2;
   HEAP32[i39 + 8 >> 2] = HEAP32[i40 + 8 >> 2];
   HEAP32[i39 + 12 >> 2] = HEAP32[i40 + 12 >> 2];
   HEAP32[i39 + 16 >> 2] = HEAP32[i40 + 16 >> 2];
   HEAP32[i39 + 20 >> 2] = HEAP32[i40 + 20 >> 2];
   HEAP32[i39 + 24 >> 2] = HEAP32[i40 + 24 >> 2];
   HEAP32[i39 + 28 >> 2] = HEAP32[i40 + 28 >> 2];
   HEAP32[i39 + 32 >> 2] = HEAP32[i40 + 32 >> 2];
   HEAP32[i39 + 36 >> 2] = HEAP32[i40 + 36 >> 2];
   HEAP32[i39 + 40 >> 2] = HEAP32[i40 + 40 >> 2];
   HEAP32[i39 + 44 >> 2] = HEAP32[i40 + 44 >> 2];
   HEAP32[i39 + 48 >> 2] = 0;
   HEAPF64[i39 + 56 >> 3] = +HEAPF64[__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE >> 3];
   i40 = i39 + 64 | 0;
   HEAP32[i40 >> 2] = 0;
   __ZN7WebCore3URL10invalidateEv(i40);
   HEAP32[i4 >> 2] = H_BASE + 176;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i39 + 112 | 0, i4);
   __ZN7WebCore13HTTPHeaderMapC1Ev(i39 + 116 | 0);
   _memset(i39 + 136 | 0, 0, 16) | 0;
   HEAP8[i39 + 152 | 0] = 11;
   HEAP32[i39 + 156 >> 2] = 1;
   _memset(i39 + 160 | 0, 0, 19) | 0;
   HEAP32[i39 + 180 >> 2] = 15;
   __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i39 | 0, H_BASE + 168 | 0, i41);
   __ZN7WebCore16FrameLoadRequestC1EPNS_14SecurityOriginERKNS_15ResourceRequestE(i38, i37, i39);
   i37 = i42 | 0;
   HEAP32[i37 >> 2] = 0;
   i4 = i43 | 0;
   HEAP32[i4 >> 2] = 0;
   __ZN7WebCore11FrameLoader16loadFrameRequestERKNS_16FrameLoadRequestEbbN3WTF10PassRefPtrINS_5EventEEENS5_INS_9FormStateEEENS_18ShouldSendReferrerE(i36, i38, 0, 0, i42, i43, 0);
   i43 = HEAP32[i4 >> 2] | 0;
   if ((i43 | 0) != 0) {
    __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i43 | 0);
   }
   i43 = HEAP32[i37 >> 2] | 0;
   do {
    if ((i43 | 0) != 0) {
     i37 = i43 + 8 | 0;
     i4 = i37 | 0;
     i42 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
     if ((i42 | 0) != 0) {
      HEAP32[i4 >> 2] = i42;
      break;
     }
     i42 = i37 - 8 | 0;
     if ((i42 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i42 >> 2] | 0) + 4 >> 2] & 3](i42);
    }
   } while (0);
   __ZN7WebCore14SubstituteDataD2Ev(i38 + 200 | 0);
   i43 = HEAP32[i38 + 192 >> 2] | 0;
   do {
    if ((i43 | 0) != 0) {
     i42 = i43 | 0;
     i37 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
     if ((i37 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i43);
      break;
     } else {
      HEAP32[i42 >> 2] = i37;
      break;
     }
    }
   } while (0);
   __ZN7WebCore15ResourceRequestD2Ev(i38 + 8 | 0);
   i43 = HEAP32[i38 >> 2] | 0;
   do {
    if ((i43 | 0) != 0) {
     i38 = i43 | 0;
     if (((tempValue = HEAP32[i38 >> 2] | 0, HEAP32[i38 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
      break;
     }
     __ZN7WebCore14SecurityOriginD2Ev(i43);
     __ZN3WTF8fastFreeEPv(i43);
    }
   } while (0);
   __ZN7WebCore15ResourceRequestD2Ev(i39);
   i39 = HEAP32[i41 >> 2] | 0;
   do {
    if ((i39 | 0) != 0) {
     i41 = i39 | 0;
     i43 = (HEAP32[i41 >> 2] | 0) - 2 | 0;
     if ((i43 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i39);
      break;
     } else {
      HEAP32[i41 >> 2] = i43;
      break;
     }
    }
   } while (0);
   i39 = HEAP32[i64 >> 2] | 0;
   if ((i39 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i64 = i39 | 0;
   i43 = (HEAP32[i64 >> 2] | 0) - 2 | 0;
   if ((i43 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i39);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i64 >> 2] = i43;
    STACKTOP = i3;
    return;
   }
   break;
  }
 case 2009:
  {
   i43 = HEAP32[i66 + 464 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i45, H_BASE + 152 | 0);
   __ZN7WebCore6Editor7commandERKN3WTF6StringE(i44, i43, i45);
   i43 = i46 | 0;
   HEAP32[i43 >> 2] = 0;
   __ZNK7WebCore6Editor7Command7executeERKN3WTF6StringEPNS_5EventE(i44, i46, 0) | 0;
   i46 = HEAP32[i43 >> 2] | 0;
   do {
    if ((i46 | 0) != 0) {
     i43 = i46 | 0;
     i64 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
     if ((i64 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i46);
      break;
     } else {
      HEAP32[i43 >> 2] = i64;
      break;
     }
    }
   } while (0);
   i46 = HEAP32[i44 + 8 >> 2] | 0;
   do {
    if ((i46 | 0) != 0) {
     i44 = i46 + 4 | 0;
     i64 = i44 | 0;
     i43 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
     if ((i43 | 0) != 0) {
      HEAP32[i64 >> 2] = i43;
      break;
     }
     i43 = i44 - 4 | 0;
     if ((i43 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i43 >> 2] | 0) + 4 >> 2] & 3](i43);
    }
   } while (0);
   i46 = HEAP32[i45 >> 2] | 0;
   if ((i46 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i45 = i46 | 0;
   i43 = (HEAP32[i45 >> 2] | 0) - 2 | 0;
   if ((i43 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i46);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i45 >> 2] = i43;
    STACKTOP = i3;
    return;
   }
   break;
  }
 case 2010:
  {
   i43 = HEAP32[i66 + 464 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i48, H_BASE + 136 | 0);
   __ZN7WebCore6Editor7commandERKN3WTF6StringE(i47, i43, i48);
   i43 = i49 | 0;
   HEAP32[i43 >> 2] = 0;
   __ZNK7WebCore6Editor7Command7executeERKN3WTF6StringEPNS_5EventE(i47, i49, 0) | 0;
   i49 = HEAP32[i43 >> 2] | 0;
   do {
    if ((i49 | 0) != 0) {
     i43 = i49 | 0;
     i45 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
     if ((i45 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i49);
      break;
     } else {
      HEAP32[i43 >> 2] = i45;
      break;
     }
    }
   } while (0);
   i49 = HEAP32[i47 + 8 >> 2] | 0;
   do {
    if ((i49 | 0) != 0) {
     i47 = i49 + 4 | 0;
     i45 = i47 | 0;
     i43 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
     if ((i43 | 0) != 0) {
      HEAP32[i45 >> 2] = i43;
      break;
     }
     i43 = i47 - 4 | 0;
     if ((i43 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i43 >> 2] | 0) + 4 >> 2] & 3](i43);
    }
   } while (0);
   i49 = HEAP32[i48 >> 2] | 0;
   if ((i49 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i48 = i49 | 0;
   i43 = (HEAP32[i48 >> 2] | 0) - 2 | 0;
   if ((i43 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i49);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i48 >> 2] = i43;
    STACKTOP = i3;
    return;
   }
   break;
  }
 case 2011:
  {
   __ZN7WebCore6Editor15toggleUnderlineEv(HEAP32[i66 + 464 >> 2] | 0);
   STACKTOP = i3;
   return;
  }
 case 2016:
  {
   __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i50, (HEAP32[i66 + 468 >> 2] | 0) + 32 | 0);
   i43 = i50 | 0;
   i50 = HEAP32[i43 >> 2] | 0;
   HEAP32[i43 >> 2] = 0;
   i43 = (i50 | 0) == 0;
   if (i43) {
    i70 = 217;
   } else {
    i48 = i51 | 0;
    HEAP32[i48 >> 2] = 0;
    if (__ZNK7WebCore5Range9collapsedERi(i50, i48) | 0) {
     i70 = 217;
    } else {
     i71 = i50;
    }
   }
   if ((i70 | 0) == 217) {
    i70 = HEAP32[(HEAP32[(HEAP32[i65 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
    __ZN7WebCore8Document11createRangeEv(i52, i70);
    i48 = i52 | 0;
    i52 = HEAP32[i48 >> 2] | 0;
    HEAP32[i48 >> 2] = 0;
    do {
     if (!i43) {
      i51 = i50 | 0;
      i49 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
      if ((i49 | 0) == 0) {
       __ZN7WebCore5RangeD1Ev(i50);
       __ZN3WTF8fastFreeEPv(i50);
      } else {
       HEAP32[i51 >> 2] = i49;
      }
      i49 = HEAP32[i48 >> 2] | 0;
      if ((i49 | 0) == 0) {
       break;
      }
      i51 = i49 | 0;
      i47 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
      if ((i47 | 0) == 0) {
       __ZN7WebCore5RangeD1Ev(i49);
       __ZN3WTF8fastFreeEPv(i49);
       break;
      } else {
       HEAP32[i51 >> 2] = i47;
       break;
      }
     }
    } while (0);
    i48 = HEAP32[i70 + 692 >> 2] | 0;
    i70 = i53 | 0;
    HEAP32[i70 >> 2] = 0;
    __ZN7WebCore5Range10selectNodeEPNS_4NodeERi(i52, i48, i70);
    i71 = i52;
   }
   i52 = HEAP32[i1 + 4 >> 2] | 0;
   i70 = HEAP32[(HEAP32[i52 >> 2] | 0) + 36 >> 2] | 0;
   __ZN7WebCore9plainTextEPKNS_5RangeENS_20TextIteratorBehaviorEb(i54, i71, 0, 0);
   FUNCTION_TABLE_vii[i70 & 1](i52, i54);
   i52 = HEAP32[i54 >> 2] | 0;
   do {
    if ((i52 | 0) != 0) {
     i54 = i52 | 0;
     i70 = (HEAP32[i54 >> 2] | 0) - 2 | 0;
     if ((i70 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i52);
      break;
     } else {
      HEAP32[i54 >> 2] = i70;
      break;
     }
    }
   } while (0);
   if ((i71 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i52 = i71 | 0;
   i70 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
   if ((i70 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i71);
    __ZN3WTF8fastFreeEPv(i71);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i52 >> 2] = i70;
    STACKTOP = i3;
    return;
   }
   break;
  }
 case 2017:
  {
   i70 = HEAP32[i1 + 4 >> 2] | 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i70 >> 2] | 0) + 40 >> 2] & 3](i70);
   STACKTOP = i3;
   return;
  }
 case 2019:
  {
   __ZN7WebCore6Editor23setBaseWritingDirectionE16WritingDirection(HEAP32[i66 + 464 >> 2] | 0, 0);
   STACKTOP = i3;
   return;
  }
 case 2020:
  {
   __ZN7WebCore6Editor23setBaseWritingDirectionE16WritingDirection(HEAP32[i66 + 464 >> 2] | 0, 1);
   STACKTOP = i3;
   return;
  }
 case 2021:
  {
   __ZN7WebCore6Editor23setBaseWritingDirectionE16WritingDirection(HEAP32[i66 + 464 >> 2] | 0, 2);
   STACKTOP = i3;
   return;
  }
 case 2026:
  {
   i70 = HEAP32[i66 + 464 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i56, H_BASE + 104 | 0);
   __ZN7WebCore6Editor7commandERKN3WTF6StringE(i55, i70, i56);
   i70 = i57 | 0;
   HEAP32[i70 >> 2] = 0;
   __ZNK7WebCore6Editor7Command7executeERKN3WTF6StringEPNS_5EventE(i55, i57, 0) | 0;
   i57 = HEAP32[i70 >> 2] | 0;
   do {
    if ((i57 | 0) != 0) {
     i70 = i57 | 0;
     i1 = (HEAP32[i70 >> 2] | 0) - 2 | 0;
     if ((i1 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i57);
      break;
     } else {
      HEAP32[i70 >> 2] = i1;
      break;
     }
    }
   } while (0);
   i57 = HEAP32[i55 + 8 >> 2] | 0;
   do {
    if ((i57 | 0) != 0) {
     i55 = i57 + 4 | 0;
     i1 = i55 | 0;
     i70 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
     if ((i70 | 0) != 0) {
      HEAP32[i1 >> 2] = i70;
      break;
     }
     i70 = i55 - 4 | 0;
     if ((i70 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i70 >> 2] | 0) + 4 >> 2] & 3](i70);
    }
   } while (0);
   i57 = HEAP32[i56 >> 2] | 0;
   if ((i57 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i56 = i57 | 0;
   i70 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
   if ((i70 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i57);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i56 >> 2] = i70;
    STACKTOP = i3;
    return;
   }
   break;
  }
 case 2027:
  {
   i70 = HEAP32[i66 + 464 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i59, H_BASE + 64 | 0);
   __ZN7WebCore6Editor7commandERKN3WTF6StringE(i58, i70, i59);
   i70 = i60 | 0;
   HEAP32[i70 >> 2] = 0;
   __ZNK7WebCore6Editor7Command7executeERKN3WTF6StringEPNS_5EventE(i58, i60, 0) | 0;
   i60 = HEAP32[i70 >> 2] | 0;
   do {
    if ((i60 | 0) != 0) {
     i70 = i60 | 0;
     i56 = (HEAP32[i70 >> 2] | 0) - 2 | 0;
     if ((i56 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i60);
      break;
     } else {
      HEAP32[i70 >> 2] = i56;
      break;
     }
    }
   } while (0);
   i60 = HEAP32[i58 + 8 >> 2] | 0;
   do {
    if ((i60 | 0) != 0) {
     i58 = i60 + 4 | 0;
     i56 = i58 | 0;
     i70 = (HEAP32[i56 >> 2] | 0) - 1 | 0;
     if ((i70 | 0) != 0) {
      HEAP32[i56 >> 2] = i70;
      break;
     }
     i70 = i58 - 4 | 0;
     if ((i70 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i70 >> 2] | 0) + 4 >> 2] & 3](i70);
    }
   } while (0);
   i60 = HEAP32[i59 >> 2] | 0;
   if ((i60 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i59 = i60 | 0;
   i70 = (HEAP32[i59 >> 2] | 0) - 2 | 0;
   if ((i70 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i60);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i59 >> 2] = i70;
    STACKTOP = i3;
    return;
   }
   break;
  }
 case 2028:
  {
   i70 = HEAP32[i66 + 464 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i62, H_BASE + 24 | 0);
   __ZN7WebCore6Editor7commandERKN3WTF6StringE(i61, i70, i62);
   i70 = i63 | 0;
   HEAP32[i70 >> 2] = 0;
   __ZNK7WebCore6Editor7Command7executeERKN3WTF6StringEPNS_5EventE(i61, i63, 0) | 0;
   i63 = HEAP32[i70 >> 2] | 0;
   do {
    if ((i63 | 0) != 0) {
     i70 = i63 | 0;
     i59 = (HEAP32[i70 >> 2] | 0) - 2 | 0;
     if ((i59 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i63);
      break;
     } else {
      HEAP32[i70 >> 2] = i59;
      break;
     }
    }
   } while (0);
   i63 = HEAP32[i61 + 8 >> 2] | 0;
   do {
    if ((i63 | 0) != 0) {
     i61 = i63 + 4 | 0;
     i59 = i61 | 0;
     i70 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
     if ((i70 | 0) != 0) {
      HEAP32[i59 >> 2] = i70;
      break;
     }
     i70 = i61 - 4 | 0;
     if ((i70 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i70 >> 2] | 0) + 4 >> 2] & 3](i70);
    }
   } while (0);
   i63 = HEAP32[i62 >> 2] | 0;
   if ((i63 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i62 = i63 | 0;
   i70 = (HEAP32[i62 >> 2] | 0) - 2 | 0;
   if ((i70 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i63);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i62 >> 2] = i70;
    STACKTOP = i3;
    return;
   }
   break;
  }
 case 2003:
  {
   __ZN7WebCore6Editor22showSpellingGuessPanelEv(HEAP32[i66 + 464 >> 2] | 0);
   STACKTOP = i3;
   return;
  }
 case 2004:
  {
   __ZN7WebCore6Editor24advanceToNextMisspellingEb(HEAP32[i66 + 464 >> 2] | 0, 0);
   STACKTOP = i3;
   return;
  }
 case 2005:
  {
   __ZN7WebCore6Editor29toggleContinuousSpellCheckingEv(HEAP32[i66 + 464 >> 2] | 0);
   STACKTOP = i3;
   return;
  }
 case 2006:
  {
   __ZN7WebCore6Editor21toggleGrammarCheckingEv(HEAP32[i66 + 464 >> 2] | 0);
   STACKTOP = i3;
   return;
  }
 case 2024:
  {
   i70 = HEAP32[i66 + 32 >> 2] | 0;
   if ((i70 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   __ZN7WebCore19InspectorController7inspectEPNS_4NodeE(HEAP32[i70 + 40 >> 2] | 0, HEAP32[i65 >> 2] | 0);
   STACKTOP = i3;
   return;
  }
 case 2037:
  {
   __ZN7WebCore6Editor35applyDictationAlternativelternativeERKN3WTF6StringE(HEAP32[i66 + 464 >> 2] | 0, i2 + 8 | 0);
   STACKTOP = i3;
   return;
  }
 default:
  {
   STACKTOP = i3;
   return;
  }
 }
}
function __ZNK7WebCore21ContextMenuController21checkOrEnableIfNeededERNS_15ContextMenuItemE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 48 | 0;
 i9 = i3 + 56 | 0;
 i10 = i3 + 72 | 0;
 i11 = i3 + 80 | 0;
 i12 = i3 + 88 | 0;
 i13 = i3 + 96 | 0;
 i14 = i3 + 104 | 0;
 i15 = i3 + 112 | 0;
 i16 = i3 + 120 | 0;
 i17 = i3 + 128 | 0;
 i18 = i3 + 136 | 0;
 i19 = i3 + 144 | 0;
 i20 = i3 + 152 | 0;
 i21 = i3 + 160 | 0;
 i22 = i3 + 168 | 0;
 i23 = i3 + 176 | 0;
 if ((__ZNK7WebCore15ContextMenuItem4typeEv(i2) | 0) == 2) {
  STACKTOP = i3;
  return;
 }
 i24 = i1 + 16 | 0;
 i25 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 92 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i25 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 do {
  if ((__ZNK7WebCore15ContextMenuItem6actionEv(i2) | 0) > 4999) {
   if ((__ZNK7WebCore15ContextMenuItem6actionEv(i2) | 0) >= 6e3) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 L11 : do {
  switch (__ZNK7WebCore15ContextMenuItem6actionEv(i2) | 0) {
  case 2004:
   {
    i26 = 0;
    i27 = __ZNK7WebCore6Editor7canEditEv(HEAP32[i25 + 464 >> 2] | 0) | 0;
    break;
   }
  case 2019:
   {
    i26 = 0;
    i27 = 0;
    break;
   }
  case 2020:
  case 2021:
   {
    i1 = (__ZNK7WebCore15ContextMenuItem6actionEv(i2) | 0) == 2020;
    __ZN3WTF6StringC1EPKc(i4, (i1 ? H_BASE + 16 : H_BASE + 8) | 0);
    i1 = (__ZNK7WebCore6Editor17selectionHasStyleENS_13CSSPropertyIDERKN3WTF6StringE(HEAP32[i25 + 464 >> 2] | 0, 2, i4) | 0) != 0;
    i28 = HEAP32[i4 >> 2] | 0;
    if ((i28 | 0) == 0) {
     i26 = i1;
     i27 = 1;
     break L11;
    }
    i29 = i28 | 0;
    i30 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
    if ((i30 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i28);
     i26 = i1;
     i27 = 1;
     break L11;
    } else {
     HEAP32[i29 >> 2] = i30;
     i26 = i1;
     i27 = 1;
     break L11;
    }
    break;
   }
  case 2026:
   {
    i1 = HEAP32[i25 + 464 >> 2] | 0;
    __ZN3WTF6StringC1EPKc(i6, H_BASE + 104 | 0);
    __ZN7WebCore6Editor7commandERKN3WTF6StringE(i5, i1, i6);
    i1 = HEAP32[i6 >> 2] | 0;
    do {
     if ((i1 | 0) != 0) {
      i30 = i1 | 0;
      i29 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
      if ((i29 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i1);
       break;
      } else {
       HEAP32[i30 >> 2] = i29;
       break;
      }
     }
    } while (0);
    i1 = (__ZNK7WebCore6Editor7Command5stateEPNS_5EventE(i5, 0) | 0) == 1;
    i29 = __ZNK7WebCore6Editor7Command9isEnabledEPNS_5EventE(i5, 0) | 0;
    i30 = HEAP32[i5 + 8 >> 2] | 0;
    if ((i30 | 0) == 0) {
     i26 = i1;
     i27 = i29;
     break L11;
    }
    i28 = i30 + 4 | 0;
    i30 = i28 | 0;
    i31 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
    if ((i31 | 0) != 0) {
     HEAP32[i30 >> 2] = i31;
     i26 = i1;
     i27 = i29;
     break L11;
    }
    i31 = i28 - 4 | 0;
    if ((i31 | 0) == 0) {
     i26 = i1;
     i27 = i29;
     break L11;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] & 3](i31);
    i26 = i1;
    i27 = i29;
    break;
   }
  case 2030:
   {
    if (__ZNK7WebCore13HitTestResult12mediaIsVideoEv(i24) | 0) {
     __ZN7WebCore37contextMenuItemTagDownloadVideoToDiskEv(i18);
     i29 = i18 | 0;
     i1 = HEAP32[i29 >> 2] | 0;
     if ((i1 | 0) != 0) {
      i31 = i1 | 0;
      HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 2;
     }
     i31 = i2 + 8 | 0;
     i28 = HEAP32[i31 >> 2] | 0;
     HEAP32[i31 >> 2] = i1;
     do {
      if ((i28 | 0) != 0) {
       i1 = i28 | 0;
       i31 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
       if ((i31 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i28);
        break;
       } else {
        HEAP32[i1 >> 2] = i31;
        break;
       }
      }
     } while (0);
     i28 = HEAP32[i29 >> 2] | 0;
     if ((i28 | 0) == 0) {
      i26 = 0;
      i27 = 1;
      break L11;
     }
     i31 = i28 | 0;
     i1 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
     if ((i1 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i28);
      i26 = 0;
      i27 = 1;
      break L11;
     } else {
      HEAP32[i31 >> 2] = i1;
      i26 = 0;
      i27 = 1;
      break L11;
     }
    } else {
     __ZN7WebCore37contextMenuItemTagDownloadAudioToDiskEv(i19);
     i1 = i19 | 0;
     i31 = HEAP32[i1 >> 2] | 0;
     if ((i31 | 0) != 0) {
      i28 = i31 | 0;
      HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 2;
     }
     i28 = i2 + 8 | 0;
     i30 = HEAP32[i28 >> 2] | 0;
     HEAP32[i28 >> 2] = i31;
     do {
      if ((i30 | 0) != 0) {
       i31 = i30 | 0;
       i28 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
       if ((i28 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i30);
        break;
       } else {
        HEAP32[i31 >> 2] = i28;
        break;
       }
      }
     } while (0);
     i30 = HEAP32[i1 >> 2] | 0;
     if ((i30 | 0) == 0) {
      i26 = 0;
      i27 = 1;
      break L11;
     }
     i29 = i30 | 0;
     i28 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
     if ((i28 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i30);
      i26 = 0;
      i27 = 1;
      break L11;
     } else {
      HEAP32[i29 >> 2] = i28;
      i26 = 0;
      i27 = 1;
      break L11;
     }
    }
    break;
   }
  case 22:
   {
    i26 = 0;
    i27 = (HEAP32[(HEAP32[i25 + 468 >> 2] | 0) + 84 >> 2] | 0) == 2;
    break;
   }
  case 2006:
   {
    i26 = __ZN7WebCore6Editor24isGrammarCheckingEnabledEv(HEAP32[i25 + 464 >> 2] | 0) | 0;
    i27 = 1;
    break;
   }
  case 2036:
   {
    if (!(__ZNK7WebCore13HitTestResult13mediaHasAudioEv(i24) | 0)) {
     i26 = 0;
     i27 = 0;
     break L11;
    }
    i26 = __ZNK7WebCore13HitTestResult10mediaMutedEv(i24) | 0;
    i27 = 1;
    break;
   }
  case 2011:
   {
    i28 = i25 + 464 | 0;
    i29 = HEAP32[i28 >> 2] | 0;
    __ZN3WTF6StringC1EPKc(i11, H_BASE + 200 | 0);
    i30 = (__ZNK7WebCore6Editor17selectionHasStyleENS_13CSSPropertyIDERKN3WTF6StringE(i29, 335, i11) | 0) != 0;
    i29 = HEAP32[i11 >> 2] | 0;
    do {
     if ((i29 | 0) != 0) {
      i31 = i29 | 0;
      i32 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
      if ((i32 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i29);
       break;
      } else {
       HEAP32[i31 >> 2] = i32;
       break;
      }
     }
    } while (0);
    i26 = i30;
    i27 = __ZNK7WebCore6Editor13canEditRichlyEv(HEAP32[i28 >> 2] | 0) | 0;
    break;
   }
  case 17:
  case 18:
   {
    i26 = 0;
    i27 = (HEAP32[(HEAP32[i25 + 468 >> 2] | 0) + 84 >> 2] | 0) == 2;
    break;
   }
  case 14:
   {
    i29 = i25 + 464 | 0;
    if (__ZN7WebCore6Editor13canDHTMLPasteEv(HEAP32[i29 >> 2] | 0) | 0) {
     i26 = 0;
     i27 = 1;
     break L11;
    }
    i26 = 0;
    i27 = __ZNK7WebCore6Editor8canPasteEv(HEAP32[i29 >> 2] | 0) | 0;
    break;
   }
  case 13:
   {
    i29 = i25 + 464 | 0;
    if (__ZN7WebCore6Editor11canDHTMLCutEv(HEAP32[i29 >> 2] | 0) | 0) {
     i26 = 0;
     i27 = 1;
     break L11;
    }
    i26 = 0;
    i27 = __ZNK7WebCore6Editor6canCutEv(HEAP32[i29 >> 2] | 0) | 0;
    break;
   }
  case 2012:
   {
    i26 = 0;
    i27 = 0;
    break;
   }
  case 2003:
   {
    i29 = i25 + 464 | 0;
    do {
     if (__ZN7WebCore6Editor22spellingPanelIsShowingEv(HEAP32[i29 >> 2] | 0) | 0) {
      __ZN7WebCore35contextMenuItemTagShowSpellingPanelEb(i14, 0);
      i1 = i14 | 0;
      i32 = HEAP32[i1 >> 2] | 0;
      if ((i32 | 0) != 0) {
       i31 = i32 | 0;
       HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 2;
      }
      i31 = i2 + 8 | 0;
      i33 = HEAP32[i31 >> 2] | 0;
      HEAP32[i31 >> 2] = i32;
      do {
       if ((i33 | 0) != 0) {
        i32 = i33 | 0;
        i31 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
        if ((i31 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i33);
         break;
        } else {
         HEAP32[i32 >> 2] = i31;
         break;
        }
       }
      } while (0);
      i33 = HEAP32[i1 >> 2] | 0;
      if ((i33 | 0) == 0) {
       break;
      }
      i31 = i33 | 0;
      i32 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
      if ((i32 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i33);
       break;
      } else {
       HEAP32[i31 >> 2] = i32;
       break;
      }
     } else {
      __ZN7WebCore35contextMenuItemTagShowSpellingPanelEb(i15, 1);
      i32 = i15 | 0;
      i31 = HEAP32[i32 >> 2] | 0;
      if ((i31 | 0) != 0) {
       i33 = i31 | 0;
       HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 2;
      }
      i33 = i2 + 8 | 0;
      i34 = HEAP32[i33 >> 2] | 0;
      HEAP32[i33 >> 2] = i31;
      do {
       if ((i34 | 0) != 0) {
        i31 = i34 | 0;
        i33 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
        if ((i33 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i34);
         break;
        } else {
         HEAP32[i31 >> 2] = i33;
         break;
        }
       }
      } while (0);
      i34 = HEAP32[i32 >> 2] | 0;
      if ((i34 | 0) == 0) {
       break;
      }
      i1 = i34 | 0;
      i33 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
      if ((i33 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i34);
       break;
      } else {
       HEAP32[i1 >> 2] = i33;
       break;
      }
     }
    } while (0);
    i26 = 0;
    i27 = __ZNK7WebCore6Editor7canEditEv(HEAP32[i29 >> 2] | 0) | 0;
    break;
   }
  case 2032:
   {
    i26 = __ZNK7WebCore13HitTestResult20mediaControlsEnabledEv(i24) | 0;
    i27 = 1;
    break;
   }
  case 2033:
   {
    i26 = __ZNK7WebCore13HitTestResult16mediaLoopEnabledEv(i24) | 0;
    i27 = 1;
    break;
   }
  case 2034:
  case 2039:
   {
    i26 = 0;
    i27 = __ZNK7WebCore13HitTestResult23mediaSupportsFullscreenEv(i24) | 0;
    break;
   }
  case 2035:
   {
    if (__ZNK7WebCore13HitTestResult12mediaPlayingEv(i24) | 0) {
     __ZN7WebCore28contextMenuItemTagMediaPauseEv(i22);
     i28 = i22 | 0;
     i30 = HEAP32[i28 >> 2] | 0;
     if ((i30 | 0) != 0) {
      i33 = i30 | 0;
      HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 2;
     }
     i33 = i2 + 8 | 0;
     i1 = HEAP32[i33 >> 2] | 0;
     HEAP32[i33 >> 2] = i30;
     do {
      if ((i1 | 0) != 0) {
       i30 = i1 | 0;
       i33 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
       if ((i33 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i1);
        break;
       } else {
        HEAP32[i30 >> 2] = i33;
        break;
       }
      }
     } while (0);
     i1 = HEAP32[i28 >> 2] | 0;
     if ((i1 | 0) == 0) {
      i26 = 0;
      i27 = 1;
      break L11;
     }
     i29 = i1 | 0;
     i33 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
     if ((i33 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i1);
      i26 = 0;
      i27 = 1;
      break L11;
     } else {
      HEAP32[i29 >> 2] = i33;
      i26 = 0;
      i27 = 1;
      break L11;
     }
    } else {
     __ZN7WebCore27contextMenuItemTagMediaPlayEv(i23);
     i33 = i23 | 0;
     i29 = HEAP32[i33 >> 2] | 0;
     if ((i29 | 0) != 0) {
      i1 = i29 | 0;
      HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
     }
     i1 = i2 + 8 | 0;
     i30 = HEAP32[i1 >> 2] | 0;
     HEAP32[i1 >> 2] = i29;
     do {
      if ((i30 | 0) != 0) {
       i29 = i30 | 0;
       i1 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
       if ((i1 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i30);
        break;
       } else {
        HEAP32[i29 >> 2] = i1;
        break;
       }
      }
     } while (0);
     i30 = HEAP32[i33 >> 2] | 0;
     if ((i30 | 0) == 0) {
      i26 = 0;
      i27 = 1;
      break L11;
     }
     i28 = i30 | 0;
     i1 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
     if ((i1 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i30);
      i26 = 0;
      i27 = 1;
      break L11;
     } else {
      HEAP32[i28 >> 2] = i1;
      i26 = 0;
      i27 = 1;
      break L11;
     }
    }
    break;
   }
  case 2028:
   {
    i1 = HEAP32[i25 + 464 >> 2] | 0;
    __ZN3WTF6StringC1EPKc(i10, H_BASE + 24 | 0);
    __ZN7WebCore6Editor7commandERKN3WTF6StringE(i9, i1, i10);
    i1 = HEAP32[i10 >> 2] | 0;
    do {
     if ((i1 | 0) != 0) {
      i28 = i1 | 0;
      i30 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
      if ((i30 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i1);
       break;
      } else {
       HEAP32[i28 >> 2] = i30;
       break;
      }
     }
    } while (0);
    i1 = (__ZNK7WebCore6Editor7Command5stateEPNS_5EventE(i9, 0) | 0) == 1;
    i33 = __ZNK7WebCore6Editor7Command9isEnabledEPNS_5EventE(i9, 0) | 0;
    i30 = HEAP32[i9 + 8 >> 2] | 0;
    if ((i30 | 0) == 0) {
     i26 = i1;
     i27 = i33;
     break L11;
    }
    i28 = i30 + 4 | 0;
    i30 = i28 | 0;
    i29 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
    if ((i29 | 0) != 0) {
     HEAP32[i30 >> 2] = i29;
     i26 = i1;
     i27 = i33;
     break L11;
    }
    i29 = i28 - 4 | 0;
    if ((i29 | 0) == 0) {
     i26 = i1;
     i27 = i33;
     break L11;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i29 >> 2] | 0) + 4 >> 2] & 3](i29);
    i26 = i1;
    i27 = i33;
    break;
   }
  case 2031:
   {
    if (__ZNK7WebCore13HitTestResult12mediaIsVideoEv(i24) | 0) {
     __ZN7WebCore42contextMenuItemTagCopyVideoLinkToClipboardEv(i20);
     i33 = i20 | 0;
     i1 = HEAP32[i33 >> 2] | 0;
     if ((i1 | 0) != 0) {
      i29 = i1 | 0;
      HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 2;
     }
     i29 = i2 + 8 | 0;
     i28 = HEAP32[i29 >> 2] | 0;
     HEAP32[i29 >> 2] = i1;
     do {
      if ((i28 | 0) != 0) {
       i1 = i28 | 0;
       i29 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
       if ((i29 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i28);
        break;
       } else {
        HEAP32[i1 >> 2] = i29;
        break;
       }
      }
     } while (0);
     i28 = HEAP32[i33 >> 2] | 0;
     if ((i28 | 0) == 0) {
      i26 = 0;
      i27 = 1;
      break L11;
     }
     i29 = i28 | 0;
     i1 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
     if ((i1 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i28);
      i26 = 0;
      i27 = 1;
      break L11;
     } else {
      HEAP32[i29 >> 2] = i1;
      i26 = 0;
      i27 = 1;
      break L11;
     }
    } else {
     __ZN7WebCore42contextMenuItemTagCopyAudioLinkToClipboardEv(i21);
     i1 = i21 | 0;
     i29 = HEAP32[i1 >> 2] | 0;
     if ((i29 | 0) != 0) {
      i28 = i29 | 0;
      HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 2;
     }
     i28 = i2 + 8 | 0;
     i30 = HEAP32[i28 >> 2] | 0;
     HEAP32[i28 >> 2] = i29;
     do {
      if ((i30 | 0) != 0) {
       i29 = i30 | 0;
       i28 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
       if ((i28 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i30);
        break;
       } else {
        HEAP32[i29 >> 2] = i28;
        break;
       }
      }
     } while (0);
     i30 = HEAP32[i1 >> 2] | 0;
     if ((i30 | 0) == 0) {
      i26 = 0;
      i27 = 1;
      break L11;
     }
     i33 = i30 | 0;
     i28 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
     if ((i28 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i30);
      i26 = 0;
      i27 = 1;
      break L11;
     } else {
      HEAP32[i33 >> 2] = i28;
      i26 = 0;
      i27 = 1;
      break L11;
     }
    }
    break;
   }
  case 2027:
   {
    i28 = HEAP32[i25 + 464 >> 2] | 0;
    __ZN3WTF6StringC1EPKc(i8, H_BASE + 64 | 0);
    __ZN7WebCore6Editor7commandERKN3WTF6StringE(i7, i28, i8);
    i28 = HEAP32[i8 >> 2] | 0;
    do {
     if ((i28 | 0) != 0) {
      i33 = i28 | 0;
      i30 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
      if ((i30 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i28);
       break;
      } else {
       HEAP32[i33 >> 2] = i30;
       break;
      }
     }
    } while (0);
    i28 = (__ZNK7WebCore6Editor7Command5stateEPNS_5EventE(i7, 0) | 0) == 1;
    i1 = __ZNK7WebCore6Editor7Command9isEnabledEPNS_5EventE(i7, 0) | 0;
    i30 = HEAP32[i7 + 8 >> 2] | 0;
    if ((i30 | 0) == 0) {
     i26 = i28;
     i27 = i1;
     break L11;
    }
    i33 = i30 + 4 | 0;
    i30 = i33 | 0;
    i29 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
    if ((i29 | 0) != 0) {
     HEAP32[i30 >> 2] = i29;
     i26 = i28;
     i27 = i1;
     break L11;
    }
    i29 = i33 - 4 | 0;
    if ((i29 | 0) == 0) {
     i26 = i28;
     i27 = i1;
     break L11;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i29 >> 2] | 0) + 4 >> 2] & 3](i29);
    i26 = i28;
    i27 = i1;
    break;
   }
  case 8:
   {
    i1 = i25 + 464 | 0;
    if (__ZN7WebCore6Editor12canDHTMLCopyEv(HEAP32[i1 >> 2] | 0) | 0) {
     i26 = 0;
     i27 = 1;
     break L11;
    }
    i26 = 0;
    i27 = __ZNK7WebCore6Editor7canCopyEv(HEAP32[i1 >> 2] | 0) | 0;
    break;
   }
  case 2009:
   {
    i1 = i25 + 464 | 0;
    i28 = HEAP32[i1 >> 2] | 0;
    __ZN3WTF6StringC1EPKc(i13, H_BASE + 184 | 0);
    i29 = (__ZNK7WebCore6Editor17selectionHasStyleENS_13CSSPropertyIDERKN3WTF6StringE(i28, 9, i13) | 0) != 0;
    i28 = HEAP32[i13 >> 2] | 0;
    do {
     if ((i28 | 0) != 0) {
      i33 = i28 | 0;
      i30 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
      if ((i30 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i28);
       break;
      } else {
       HEAP32[i33 >> 2] = i30;
       break;
      }
     }
    } while (0);
    i26 = i29;
    i27 = __ZNK7WebCore6Editor13canEditRichlyEv(HEAP32[i1 >> 2] | 0) | 0;
    break;
   }
  case 16:
   {
    i26 = 0;
    i27 = 0;
    break;
   }
  case 2005:
   {
    i26 = __ZNK7WebCore6Editor32isContinuousSpellCheckingEnabledEv(HEAP32[i25 + 464 >> 2] | 0) | 0;
    i27 = 1;
    break;
   }
  case 2029:
   {
    if (__ZNK7WebCore13HitTestResult12mediaIsVideoEv(i24) | 0) {
     __ZN7WebCore38contextMenuItemTagOpenVideoInNewWindowEv(i16);
     i28 = i16 | 0;
     i30 = HEAP32[i28 >> 2] | 0;
     if ((i30 | 0) != 0) {
      i33 = i30 | 0;
      HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 2;
     }
     i33 = i2 + 8 | 0;
     i34 = HEAP32[i33 >> 2] | 0;
     HEAP32[i33 >> 2] = i30;
     do {
      if ((i34 | 0) != 0) {
       i30 = i34 | 0;
       i33 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
       if ((i33 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i34);
        break;
       } else {
        HEAP32[i30 >> 2] = i33;
        break;
       }
      }
     } while (0);
     i34 = HEAP32[i28 >> 2] | 0;
     if ((i34 | 0) == 0) {
      i26 = 0;
      i27 = 1;
      break L11;
     }
     i1 = i34 | 0;
     i29 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
     if ((i29 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i34);
      i26 = 0;
      i27 = 1;
      break L11;
     } else {
      HEAP32[i1 >> 2] = i29;
      i26 = 0;
      i27 = 1;
      break L11;
     }
    } else {
     __ZN7WebCore38contextMenuItemTagOpenAudioInNewWindowEv(i17);
     i29 = i17 | 0;
     i1 = HEAP32[i29 >> 2] | 0;
     if ((i1 | 0) != 0) {
      i34 = i1 | 0;
      HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 2;
     }
     i34 = i2 + 8 | 0;
     i33 = HEAP32[i34 >> 2] | 0;
     HEAP32[i34 >> 2] = i1;
     do {
      if ((i33 | 0) != 0) {
       i1 = i33 | 0;
       i34 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
       if ((i34 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i33);
        break;
       } else {
        HEAP32[i1 >> 2] = i34;
        break;
       }
      }
     } while (0);
     i33 = HEAP32[i29 >> 2] | 0;
     if ((i33 | 0) == 0) {
      i26 = 0;
      i27 = 1;
      break L11;
     }
     i28 = i33 | 0;
     i34 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
     if ((i34 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i33);
      i26 = 0;
      i27 = 1;
      break L11;
     } else {
      HEAP32[i28 >> 2] = i34;
      i26 = 0;
      i27 = 1;
      break L11;
     }
    }
    break;
   }
  case 2010:
   {
    i34 = i25 + 464 | 0;
    i28 = HEAP32[i34 >> 2] | 0;
    __ZN3WTF6StringC1EPKc(i12, H_BASE + 192 | 0);
    i33 = (__ZNK7WebCore6Editor17selectionHasStyleENS_13CSSPropertyIDERKN3WTF6StringE(i28, 7, i12) | 0) != 0;
    i28 = HEAP32[i12 >> 2] | 0;
    do {
     if ((i28 | 0) != 0) {
      i1 = i28 | 0;
      i30 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
      if ((i30 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i28);
       break;
      } else {
       HEAP32[i1 >> 2] = i30;
       break;
      }
     }
    } while (0);
    i26 = i33;
    i27 = __ZNK7WebCore6Editor13canEditRichlyEv(HEAP32[i34 >> 2] | 0) | 0;
    break;
   }
  default:
   {
    i26 = 0;
    i27 = 1;
   }
  }
 } while (0);
 __ZN7WebCore15ContextMenuItem10setCheckedEb(i2, i26);
 __ZN7WebCore15ContextMenuItem10setEnabledEb(i2, i27);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore19ResourceRequestBaseC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = i2 + 4 | 0;
 i5 = i1 + 4 | 0;
 i7 = HEAP8[i5] & -2 | HEAP8[i6] & 1;
 HEAP8[i5] = i7;
 HEAP8[i5] = i7 & -3 | HEAP8[i6] & 2;
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
 HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 48 >> 2];
 HEAPF64[i1 + 56 >> 3] = +HEAPF64[i2 + 56 >> 3];
 i6 = HEAP32[i2 + 64 >> 2] | 0;
 HEAP32[i1 + 64 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i2 + 68 | 0;
 i6 = i1 + 68 | 0;
 i5 = HEAP8[i6] & -2 | HEAP8[i7] & 1;
 HEAP8[i6] = i5;
 HEAP8[i6] = i5 & -3 | HEAP8[i7] & 2;
 HEAP32[i1 + 72 >> 2] = HEAP32[i2 + 72 >> 2];
 HEAP32[i1 + 76 >> 2] = HEAP32[i2 + 76 >> 2];
 HEAP32[i1 + 80 >> 2] = HEAP32[i2 + 80 >> 2];
 HEAP32[i1 + 84 >> 2] = HEAP32[i2 + 84 >> 2];
 HEAP32[i1 + 88 >> 2] = HEAP32[i2 + 88 >> 2];
 HEAP32[i1 + 92 >> 2] = HEAP32[i2 + 92 >> 2];
 HEAP32[i1 + 96 >> 2] = HEAP32[i2 + 96 >> 2];
 HEAP32[i1 + 100 >> 2] = HEAP32[i2 + 100 >> 2];
 HEAP32[i1 + 104 >> 2] = HEAP32[i2 + 104 >> 2];
 HEAP32[i1 + 108 >> 2] = HEAP32[i2 + 108 >> 2];
 i7 = HEAP32[i2 + 112 >> 2] | 0;
 HEAP32[i1 + 112 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i5 = i7 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i1 + 116 | 0;
 i7 = i5 | 0;
 _memset(i5 | 0, 0, 20) | 0;
 i5 = HEAP32[i2 + 116 >> 2] | 0;
 i6 = HEAP32[i2 + 120 >> 2] | 0;
 i8 = i5 + (i6 << 3) | 0;
 L10 : do {
  if ((HEAP32[i2 + 128 >> 2] | 0) != 0) {
   L12 : do {
    if ((i6 | 0) == 0) {
     i9 = i5;
    } else {
     i10 = i5;
     while (1) {
      i11 = HEAP32[i10 >> 2] | 0;
      if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
       i9 = i10;
       break L12;
      }
      i10 = i10 + 8 | 0;
      if ((i10 | 0) == (i8 | 0)) {
       break L10;
      }
     }
    }
   } while (0);
   if ((i9 | 0) == (i8 | 0)) {
    break;
   } else {
    i12 = i9;
   }
   while (1) {
    __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_22IdentityHashTranslatorIS7_EERKS1_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i4, i7, i12 | 0, i12);
    i10 = i12 + 8 | 0;
    if ((i10 | 0) == (i8 | 0)) {
     break L10;
    } else {
     i13 = i10;
    }
    while (1) {
     i10 = HEAP32[i13 >> 2] | 0;
     if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
      break;
     }
     i10 = i13 + 8 | 0;
     if ((i10 | 0) == (i8 | 0)) {
      break L10;
     } else {
      i13 = i10;
     }
    }
    if ((i13 | 0) == (i8 | 0)) {
     break;
    } else {
     i12 = i13;
    }
   }
  }
 } while (0);
 i13 = HEAP32[i2 + 140 >> 2] | 0;
 i12 = i2 + 144 | 0;
 i8 = HEAP32[i12 >> 2] | 0;
 i7 = i1 + 136 | 0;
 HEAP32[i7 >> 2] = 0;
 i4 = i1 + 140 | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 144 >> 2] = i8;
 do {
  if ((i13 | 0) != 0) {
   if (i13 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i8 = __ZN3WTF18fastMallocGoodSizeEj(i13 << 2) | 0;
   HEAP32[i4 >> 2] = i8 >>> 2;
   i9 = __ZN3WTF10fastMallocEj(i8) | 0;
   i8 = i9;
   HEAP32[i7 >> 2] = i8;
   if ((i9 | 0) == 0) {
    break;
   }
   i9 = HEAP32[i2 + 136 >> 2] | 0;
   i5 = HEAP32[i12 >> 2] | 0;
   i6 = i9 + (i5 << 2) | 0;
   if ((i5 | 0) == 0) {
    break;
   } else {
    i14 = i9;
    i15 = i8;
   }
   while (1) {
    i8 = HEAP32[i14 >> 2] | 0;
    HEAP32[i15 >> 2] = i8;
    if ((i8 | 0) != 0) {
     i9 = i8 | 0;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
    }
    i9 = i14 + 4 | 0;
    if ((i9 | 0) == (i6 | 0)) {
     break;
    } else {
     i14 = i9;
     i15 = i15 + 4 | 0;
    }
   }
  }
 } while (0);
 i15 = HEAP32[i2 + 148 >> 2] | 0;
 HEAP32[i1 + 148 >> 2] = i15;
 if ((i15 | 0) == 0) {
  i16 = i2 + 152 | 0;
  i17 = HEAP8[i16] | 0;
  i18 = i17 & 1;
  i19 = i1 + 152 | 0;
  i20 = HEAP8[i19] | 0;
  i21 = i20 & -2;
  i22 = i21 | i18;
  HEAP8[i19] = i22;
  i23 = HEAP8[i16] | 0;
  i24 = i23 & 2;
  i25 = i22 & -3;
  i26 = i25 | i24;
  HEAP8[i19] = i26;
  i27 = HEAP8[i16] | 0;
  i28 = i27 & 4;
  i29 = i26 & -5;
  i30 = i29 | i28;
  HEAP8[i19] = i30;
  i31 = HEAP8[i16] | 0;
  i32 = i31 & 8;
  i33 = i30 & -9;
  i34 = i33 | i32;
  HEAP8[i19] = i34;
  i35 = HEAP8[i16] | 0;
  i36 = i35 & 16;
  i37 = i34 & -17;
  i38 = i37 | i36;
  HEAP8[i19] = i38;
  i39 = HEAP8[i16] | 0;
  i40 = i39 & 32;
  i41 = i38 & -33;
  i42 = i41 | i40;
  HEAP8[i19] = i42;
  i43 = HEAP8[i16] | 0;
  i44 = i43 & 64;
  i45 = i42 & -65;
  i46 = i45 | i44;
  HEAP8[i19] = i46;
  i47 = HEAP8[i16] | 0;
  i48 = i47 & -128;
  i49 = i46 & 127;
  i50 = i49 | i48;
  HEAP8[i19] = i50;
  i51 = i1 + 156 | 0;
  i52 = i2 + 156 | 0;
  i53 = HEAP32[i52 >> 2] | 0;
  HEAP32[i51 >> 2] = i53;
  STACKTOP = i3;
  return;
 }
 i14 = i15 | 0;
 HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
 i16 = i2 + 152 | 0;
 i17 = HEAP8[i16] | 0;
 i18 = i17 & 1;
 i19 = i1 + 152 | 0;
 i20 = HEAP8[i19] | 0;
 i21 = i20 & -2;
 i22 = i21 | i18;
 HEAP8[i19] = i22;
 i23 = HEAP8[i16] | 0;
 i24 = i23 & 2;
 i25 = i22 & -3;
 i26 = i25 | i24;
 HEAP8[i19] = i26;
 i27 = HEAP8[i16] | 0;
 i28 = i27 & 4;
 i29 = i26 & -5;
 i30 = i29 | i28;
 HEAP8[i19] = i30;
 i31 = HEAP8[i16] | 0;
 i32 = i31 & 8;
 i33 = i30 & -9;
 i34 = i33 | i32;
 HEAP8[i19] = i34;
 i35 = HEAP8[i16] | 0;
 i36 = i35 & 16;
 i37 = i34 & -17;
 i38 = i37 | i36;
 HEAP8[i19] = i38;
 i39 = HEAP8[i16] | 0;
 i40 = i39 & 32;
 i41 = i38 & -33;
 i42 = i41 | i40;
 HEAP8[i19] = i42;
 i43 = HEAP8[i16] | 0;
 i44 = i43 & 64;
 i45 = i42 & -65;
 i46 = i45 | i44;
 HEAP8[i19] = i46;
 i47 = HEAP8[i16] | 0;
 i48 = i47 & -128;
 i49 = i46 & 127;
 i50 = i49 | i48;
 HEAP8[i19] = i50;
 i51 = i1 + 156 | 0;
 i52 = i2 + 156 | 0;
 i53 = HEAP32[i52 >> 2] | 0;
 HEAP32[i51 >> 2] = i53;
 STACKTOP = i3;
 return;
}
function __ZN7WebCoreL13openNewWindowERKNS_3URLEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 768 | 0;
 i4 = i3 | 0;
 i5 = i3 + 312 | 0;
 i6 = i3 + 496 | 0;
 i7 = i3 + 504 | 0;
 i8 = i3 + 560 | 0;
 i9 = i3 + 752 | 0;
 i10 = i3 + 760 | 0;
 i11 = HEAP32[i2 + 32 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i12 = HEAP32[(HEAP32[i2 + 456 >> 2] | 0) + 100 >> 2] | 0;
 __ZNK7WebCore11FrameLoader16outgoingReferrerEv(i6, i2 + 80 | 0);
 i13 = i5 | 0;
 __ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE(i13, i1, 0);
 _memset(i5 + 160 | 0, 0, 19) | 0;
 HEAP32[i5 + 180 >> 2] = 15;
 __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i13, H_BASE + 168 | 0, i6);
 __ZN7WebCore16FrameLoadRequestC1EPNS_14SecurityOriginERKNS_15ResourceRequestE(i4, i12, i5);
 __ZN7WebCore15ResourceRequestD2Ev(i5);
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 | 0;
   i12 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i6 >> 2] = i12;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP8[(HEAP32[i2 + 36 >> 2] | 0) + 191 | 0] & 16) == 0) {
   i14 = i11;
   i15 = 24;
  } else {
   i5 = HEAP32[i11 + 20 >> 2] | 0;
   HEAP8[i7 + 4 | 0] = 0;
   HEAP8[i7 + 12 | 0] = 0;
   HEAP8[i7 + 20 | 0] = 0;
   HEAP8[i7 + 28 | 0] = 0;
   _memset(i7 + 29 | 0, 1, 6) | 0;
   HEAP8[i7 + 35 | 0] = 0;
   HEAP8[i7 + 36 | 0] = 0;
   i12 = i7 + 40 | 0;
   HEAP32[i12 >> 2] = 0;
   i6 = i7 + 44 | 0;
   HEAP32[i6 >> 2] = 0;
   i13 = i7 + 48 | 0;
   HEAP32[i13 >> 2] = 0;
   __ZN7WebCore16NavigationActionC1ERKNS_15ResourceRequestE(i8, i4 + 8 | 0);
   i1 = __ZNK7WebCore6Chrome12createWindowEPNS_5FrameERKNS_16FrameLoadRequestERKNS_14WindowFeaturesERKNS_16NavigationActionE(i5, i2, i4, i7, i8) | 0;
   i5 = HEAP32[i8 + 188 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i16 = i5 + 8 | 0;
     i17 = i16 | 0;
     i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     if ((i18 | 0) != 0) {
      HEAP32[i17 >> 2] = i18;
      break;
     }
     i18 = i16 - 8 | 0;
     if ((i18 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 3](i18);
    }
   } while (0);
   __ZN7WebCore15ResourceRequestD2Ev(i8 | 0);
   i5 = HEAP32[i13 >> 2] | 0;
   if ((i5 | 0) != 0) {
    i18 = HEAP32[i12 >> 2] | 0;
    i16 = i18 + (i5 << 2) | 0;
    i5 = i18;
    while (1) {
     i18 = HEAP32[i5 >> 2] | 0;
     do {
      if ((i18 | 0) != 0) {
       i17 = i18 | 0;
       i19 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
       if ((i19 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i18);
        break;
       } else {
        HEAP32[i17 >> 2] = i19;
        break;
       }
      }
     } while (0);
     i5 = i5 + 4 | 0;
     if ((i5 | 0) == (i16 | 0)) {
      break;
     }
    }
    HEAP32[i13 >> 2] = 0;
   }
   i16 = HEAP32[i12 >> 2] | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i12 >> 2] = 0;
    HEAP32[i6 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i16);
   }
   if ((i1 | 0) == 0) {
    break;
   }
   __ZNK7WebCore6Chrome4showEv(HEAP32[i1 + 20 >> 2] | 0);
   i14 = i1;
   i15 = 24;
  }
 } while (0);
 do {
  if ((i15 | 0) == 24) {
   i8 = (HEAP32[i14 + 60 >> 2] | 0) + 80 | 0;
   i7 = i9 | 0;
   HEAP32[i7 >> 2] = 0;
   i2 = i10 | 0;
   HEAP32[i2 >> 2] = 0;
   __ZN7WebCore11FrameLoader16loadFrameRequestERKNS_16FrameLoadRequestEbbN3WTF10PassRefPtrINS_5EventEEENS5_INS_9FormStateEEENS_18ShouldSendReferrerE(i8, i4, 0, 0, i9, i10, 0);
   i8 = HEAP32[i2 >> 2] | 0;
   if ((i8 | 0) != 0) {
    __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i8 | 0);
   }
   i8 = HEAP32[i7 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i7 = i8 + 8 | 0;
   i8 = i7 | 0;
   i2 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i8 >> 2] = i2;
    break;
   }
   i2 = i7 - 8 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 3](i2);
  }
 } while (0);
 __ZN7WebCore14SubstituteDataD2Ev(i4 + 200 | 0);
 i10 = HEAP32[i4 + 192 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i9 = i10 | 0;
   i14 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i9 >> 2] = i14;
    break;
   }
  }
 } while (0);
 __ZN7WebCore15ResourceRequestD2Ev(i4 + 8 | 0);
 i10 = HEAP32[i4 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i10 | 0;
 if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i10);
 __ZN3WTF8fastFreeEPv(i10);
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_22IdentityHashTranslatorIS7_EERKS1_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E6expandEPS4_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(HEAP32[i8 >> 2] | 0) | 0;
 i9 = (i3 >>> 23) + ~i3 | 0;
 i10 = i9 << 12 ^ i9;
 i9 = i10 >>> 7 ^ i10;
 i10 = i9 << 2 ^ i9;
 i9 = i10 >>> 20 ^ i10 | 1;
 i10 = 0;
 i11 = i3;
 i3 = 0;
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
   i15 = HEAP32[i8 >> 2] | 0;
   if ((i14 | 0) == (i15 | 0)) {
    i17 = 7;
    break;
   }
   if (__ZN3WTF24equalIgnoringCaseNonNullEPKNS_10StringImplES2_(i14, i15) | 0) {
    i17 = 7;
    break;
   } else {
    i16 = i10;
   }
  }
  i15 = (i3 | 0) == 0 ? i9 : i3;
  i10 = i16;
  i11 = i15 + i12 | 0;
  i3 = i15;
 }
 if ((i17 | 0) == 7) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i3 = i1;
  HEAP32[i3 >> 2] = i13;
  HEAP32[i3 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i10 | 0) == 0) {
  i18 = i13;
 } else {
  i13 = i10;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i10;
 }
 i10 = HEAP32[i4 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i13 = i10 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 i13 = i18 | 0;
 i17 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i10;
 do {
  if ((i17 | 0) != 0) {
   i10 = i17 | 0;
   i13 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i10 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[i4 + 4 >> 2] | 0;
 if ((i17 | 0) != 0) {
  i4 = i17 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i18 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i17;
 do {
  if ((i13 | 0) != 0) {
   i17 = i13 | 0;
   i4 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i17 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i13 = i2 + 12 | 0;
 i4 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
 HEAP32[i13 >> 2] = i4;
 i13 = i2 + 4 | 0;
 i17 = HEAP32[i13 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i17 | 0)) {
  i19 = i18;
  i20 = i17;
 } else {
  i17 = __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E6expandEPS4_(i2, i18) | 0;
  i19 = i17;
  i20 = HEAP32[i13 >> 2] | 0;
 }
 i13 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i13;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore21ContextMenuController40createAndAppendSpellingAndGrammarSubMenuERNS_15ContextMenuItemE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 176 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 48 | 0;
 i7 = i3 + 56 | 0;
 i8 = i3 + 88 | 0;
 i9 = i3 + 96 | 0;
 i10 = i3 + 128 | 0;
 i11 = i3 + 136 | 0;
 i12 = i3 + 168 | 0;
 __ZN7WebCore11ContextMenuC1Ev(i4);
 __ZN7WebCore35contextMenuItemTagShowSpellingPanelEb(i6, 1);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i5, 0, 2003, i6, 0);
 i13 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i6 = i13 | 0;
   i14 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i6 >> 2] = i14;
    break;
   }
  }
 } while (0);
 __ZN7WebCore31contextMenuItemTagCheckSpellingEv(i8);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i7, 0, 2004, i8, 0);
 i13 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i8 = i13 | 0;
   i14 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i8 >> 2] = i14;
    break;
   }
  }
 } while (0);
 __ZN7WebCore42contextMenuItemTagCheckSpellingWhileTypingEv(i10);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i9, 1, 2005, i10, 0);
 i13 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i10 = i13 | 0;
   i14 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i10 >> 2] = i14;
    break;
   }
  }
 } while (0);
 __ZN7WebCore42contextMenuItemTagCheckGrammarWithSpellingEv(i12);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i11, 1, 2006, i12, 0);
 i13 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i12 = i13 | 0;
   i14 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i12 >> 2] = i14;
    break;
   }
  }
 } while (0);
 __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i5, i4);
 __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i7, i4);
 __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i9, i4);
 __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i11, i4);
 __ZN7WebCore15ContextMenuItem10setSubMenuEPNS_11ContextMenuE(i2, i4);
 __ZN7WebCore15ContextMenuItemD1Ev(i11);
 __ZN7WebCore15ContextMenuItemD1Ev(i9);
 __ZN7WebCore15ContextMenuItemD1Ev(i7);
 __ZN7WebCore15ContextMenuItemD1Ev(i5);
 i5 = i4 + 8 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 i9 = i4 | 0;
 if ((i7 | 0) != 0) {
  i11 = HEAP32[i9 >> 2] | 0;
  i2 = i11 + (i7 * 28 & -1) | 0;
  i7 = i11;
  while (1) {
   __ZN7WebCore15ContextMenuItemD1Ev(i7);
   i7 = i7 + 28 | 0;
   if ((i7 | 0) == (i2 | 0)) {
    break;
   }
  }
  HEAP32[i5 >> 2] = 0;
 }
 i5 = HEAP32[i9 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i9 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore21ContextMenuController26createAndAppendFontSubMenuERNS_15ContextMenuItemE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 176 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 48 | 0;
 i7 = i3 + 56 | 0;
 i8 = i3 + 88 | 0;
 i9 = i3 + 96 | 0;
 i10 = i3 + 128 | 0;
 i11 = i3 + 136 | 0;
 i12 = i3 + 168 | 0;
 __ZN7WebCore11ContextMenuC1Ev(i4);
 __ZN7WebCore22contextMenuItemTagBoldEv(i6);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i5, 1, 2009, i6, 0);
 i13 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i6 = i13 | 0;
   i14 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i6 >> 2] = i14;
    break;
   }
  }
 } while (0);
 __ZN7WebCore24contextMenuItemTagItalicEv(i8);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i7, 1, 2010, i8, 0);
 i13 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i8 = i13 | 0;
   i14 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i8 >> 2] = i14;
    break;
   }
  }
 } while (0);
 __ZN7WebCore27contextMenuItemTagUnderlineEv(i10);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i9, 1, 2011, i10, 0);
 i13 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i10 = i13 | 0;
   i14 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i10 >> 2] = i14;
    break;
   }
  }
 } while (0);
 __ZN7WebCore25contextMenuItemTagOutlineEv(i12);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i11, 0, 2012, i12, 0);
 i13 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i12 = i13 | 0;
   i14 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i12 >> 2] = i14;
    break;
   }
  }
 } while (0);
 __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i5, i4);
 __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i7, i4);
 __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i9, i4);
 __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i11, i4);
 __ZN7WebCore15ContextMenuItem10setSubMenuEPNS_11ContextMenuE(i2, i4);
 __ZN7WebCore15ContextMenuItemD1Ev(i11);
 __ZN7WebCore15ContextMenuItemD1Ev(i9);
 __ZN7WebCore15ContextMenuItemD1Ev(i7);
 __ZN7WebCore15ContextMenuItemD1Ev(i5);
 i5 = i4 + 8 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 i9 = i4 | 0;
 if ((i7 | 0) != 0) {
  i11 = HEAP32[i9 >> 2] | 0;
  i2 = i11 + (i7 * 28 & -1) | 0;
  i7 = i11;
  while (1) {
   __ZN7WebCore15ContextMenuItemD1Ev(i7);
   i7 = i7 + 28 | 0;
   if ((i7 | 0) == (i2 | 0)) {
    break;
   }
  }
  HEAP32[i5 >> 2] = 0;
 }
 i5 = HEAP32[i9 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i9 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore21ContextMenuController38createAndAppendWritingDirectionSubMenuERNS_15ContextMenuItemE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 48 | 0;
 i7 = i3 + 56 | 0;
 i8 = i3 + 88 | 0;
 i9 = i3 + 96 | 0;
 i10 = i3 + 128 | 0;
 __ZN7WebCore11ContextMenuC1Ev(i4);
 __ZN7WebCore34contextMenuItemTagDefaultDirectionEv(i6);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i5, 0, 2019, i6, 0);
 i11 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i6 = i11 | 0;
   i12 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i6 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN7WebCore29contextMenuItemTagLeftToRightEv(i8);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i7, 1, 2020, i8, 0);
 i11 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i8 = i11 | 0;
   i12 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i8 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN7WebCore29contextMenuItemTagRightToLeftEv(i10);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i9, 1, 2021, i10, 0);
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i10 = i11 | 0;
   i12 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i10 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i5, i4);
 __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i7, i4);
 __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i9, i4);
 __ZN7WebCore15ContextMenuItem10setSubMenuEPNS_11ContextMenuE(i2, i4);
 __ZN7WebCore15ContextMenuItemD1Ev(i9);
 __ZN7WebCore15ContextMenuItemD1Ev(i7);
 __ZN7WebCore15ContextMenuItemD1Ev(i5);
 i5 = i4 + 8 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 i9 = i4 | 0;
 if ((i7 | 0) != 0) {
  i2 = HEAP32[i9 >> 2] | 0;
  i1 = i2 + (i7 * 28 & -1) | 0;
  i7 = i2;
  while (1) {
   __ZN7WebCore15ContextMenuItemD1Ev(i7);
   i7 = i7 + 28 | 0;
   if ((i7 | 0) == (i1 | 0)) {
    break;
   }
  }
  HEAP32[i5 >> 2] = 0;
 }
 i5 = HEAP32[i9 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i9 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore21ContextMenuController35createAndAppendTextDirectionSubMenuERNS_15ContextMenuItemE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 48 | 0;
 i7 = i3 + 56 | 0;
 i8 = i3 + 88 | 0;
 i9 = i3 + 96 | 0;
 i10 = i3 + 128 | 0;
 __ZN7WebCore11ContextMenuC1Ev(i4);
 __ZN7WebCore34contextMenuItemTagDefaultDirectionEv(i6);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i5, 0, 2026, i6, 0);
 i11 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i6 = i11 | 0;
   i12 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i6 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN7WebCore29contextMenuItemTagLeftToRightEv(i8);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i7, 1, 2027, i8, 0);
 i11 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i8 = i11 | 0;
   i12 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i8 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN7WebCore29contextMenuItemTagRightToLeftEv(i10);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i9, 1, 2028, i10, 0);
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i10 = i11 | 0;
   i12 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i10 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i5, i4);
 __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i7, i4);
 __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i9, i4);
 __ZN7WebCore15ContextMenuItem10setSubMenuEPNS_11ContextMenuE(i2, i4);
 __ZN7WebCore15ContextMenuItemD1Ev(i9);
 __ZN7WebCore15ContextMenuItemD1Ev(i7);
 __ZN7WebCore15ContextMenuItemD1Ev(i5);
 i5 = i4 + 8 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 i9 = i4 | 0;
 if ((i7 | 0) != 0) {
  i2 = HEAP32[i9 >> 2] | 0;
  i1 = i2 + (i7 * 28 & -1) | 0;
  i7 = i2;
  while (1) {
   __ZN7WebCore15ContextMenuItemD1Ev(i7);
   i7 = i7 + 28 | 0;
   if ((i7 | 0) == (i1 | 0)) {
    break;
   }
  }
  HEAP32[i5 >> 2] = 0;
 }
 i5 = HEAP32[i9 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i9 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore21ContextMenuController15showContextMenuEPNS_5EventEN3WTF10PassRefPtrINS_19ContextMenuProviderEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = i1 + 12 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i3;
 do {
  if ((i8 | 0) != 0) {
   i3 = i8 + 4 | 0;
   i9 = i3 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i9 >> 2] = i10;
    break;
   }
   i10 = i3 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 3](i10);
  }
 } while (0);
 __ZN7WebCore21ContextMenuController17createContextMenuEPNS_5EventE(i6, i1, i2);
 i8 = i1 + 8 | 0;
 i10 = HEAP32[i8 >> 2] | 0;
 i3 = i6 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i8 >> 2] = i6;
 if ((i10 | 0) == 0) {
  i11 = i6;
 } else {
  i6 = i10 + 8 | 0;
  i3 = HEAP32[i6 >> 2] | 0;
  i9 = i10 | 0;
  if ((i3 | 0) != 0) {
   i12 = HEAP32[i9 >> 2] | 0;
   i13 = i12 + (i3 * 28 & -1) | 0;
   i3 = i12;
   while (1) {
    __ZN7WebCore15ContextMenuItemD1Ev(i3);
    i3 = i3 + 28 | 0;
    if ((i3 | 0) == (i13 | 0)) {
     break;
    }
   }
   HEAP32[i6 >> 2] = 0;
  }
  i6 = HEAP32[i9 >> 2] | 0;
  if ((i6 | 0) != 0) {
   HEAP32[i9 >> 2] = 0;
   HEAP32[i10 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i6);
  }
  __ZN3WTF8fastFreeEPv(i10);
  i11 = HEAP32[i8 >> 2] | 0;
 }
 if ((i11 | 0) == 0) {
  __ZN7WebCore21ContextMenuController16clearContextMenuEv(i1);
  STACKTOP = i4;
  return;
 }
 i10 = HEAP32[i7 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 8 >> 2] & 1](i10, i11);
 if (__ZNK7WebCore13HitTestResult10isSelectedEv(i1 + 16 | 0) | 0) {
  i11 = __ZN3WTF10fastMallocEj(28) | 0;
  i10 = i11;
  i7 = i5 | 0;
  HEAP32[i7 >> 2] = 0;
  __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i10, 2, 0, i5, 0);
  i5 = HEAP32[i7 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i7 = i5 | 0;
    i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i5);
     break;
    } else {
     HEAP32[i7 >> 2] = i6;
     break;
    }
   }
  } while (0);
  __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i10, HEAP32[i8 >> 2] | 0);
  if ((i11 | 0) != 0) {
   __ZN7WebCore15ContextMenuItemD1Ev(i10);
   __ZN3WTF8fastFreeEPv(i11);
  }
  __ZN7WebCore21ContextMenuController8populateEv(i1);
 }
 __ZN7WebCore21ContextMenuController15showContextMenuEPNS_5EventE(i1, i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore21ContextMenuController15showContextMenuEPNS_5EventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if (__ZNK7WebCore19InspectorController7enabledEv(HEAP32[(HEAP32[i1 >> 2] | 0) + 40 >> 2] | 0) | 0) {
  __ZN7WebCore21ContextMenuController21addInspectElementItemEv(i1);
 }
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 i7 = HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] | 0;
 i8 = i1 + 8 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i5 | 0;
 HEAP32[i9 >> 2] = i1;
 FUNCTION_TABLE_viii[i7 & 3](i4, i6, i5);
 i5 = HEAP32[i8 >> 2] | 0;
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i8 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 + 8 | 0;
   i8 = HEAP32[i4 >> 2] | 0;
   i7 = i5 | 0;
   if ((i8 | 0) != 0) {
    i1 = HEAP32[i7 >> 2] | 0;
    i10 = i1 + (i8 * 28 & -1) | 0;
    i8 = i1;
    while (1) {
     __ZN7WebCore15ContextMenuItemD1Ev(i8);
     i8 = i8 + 28 | 0;
     if ((i8 | 0) == (i10 | 0)) {
      break;
     }
    }
    HEAP32[i4 >> 2] = 0;
   }
   i10 = HEAP32[i7 >> 2] | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i7 >> 2] = 0;
    HEAP32[i5 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i10);
   }
   __ZN3WTF8fastFreeEPv(i5);
   i10 = HEAP32[i6 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i8 = i10 + 8 | 0;
   i1 = HEAP32[i8 >> 2] | 0;
   i11 = i10 | 0;
   if ((i1 | 0) != 0) {
    i12 = HEAP32[i11 >> 2] | 0;
    i13 = i12 + (i1 * 28 & -1) | 0;
    i1 = i12;
    while (1) {
     __ZN7WebCore15ContextMenuItemD1Ev(i1);
     i1 = i1 + 28 | 0;
     if ((i1 | 0) == (i13 | 0)) {
      break;
     }
    }
    HEAP32[i8 >> 2] = 0;
   }
   i13 = HEAP32[i11 >> 2] | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i11 >> 2] = 0;
    HEAP32[i10 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i13);
   }
   __ZN3WTF8fastFreeEPv(i10);
  }
 } while (0);
 i6 = HEAP32[i9 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i14 = i2 + 21 | 0;
  HEAP8[i14] = 1;
  STACKTOP = i3;
  return;
 }
 i9 = i6 + 8 | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 i13 = i6 | 0;
 if ((i5 | 0) != 0) {
  i1 = HEAP32[i13 >> 2] | 0;
  i7 = i1 + (i5 * 28 & -1) | 0;
  i5 = i1;
  while (1) {
   __ZN7WebCore15ContextMenuItemD1Ev(i5);
   i5 = i5 + 28 | 0;
   if ((i5 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i9 >> 2] = 0;
 }
 i9 = HEAP32[i13 >> 2] | 0;
 if ((i9 | 0) != 0) {
  HEAP32[i13 >> 2] = 0;
  HEAP32[i6 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i9);
 }
 __ZN3WTF8fastFreeEPv(i6);
 i14 = i2 + 21 | 0;
 HEAP8[i14] = 1;
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E6expandEPS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
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
 HEAP32[i1 + 8 >> 2] = i5 - 1;
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
  i4 = HEAP32[i5 >> 2] | 0;
  if ((i4 | 0) == (-1 | 0) | (i4 | 0) == 0) {
   i12 = i11;
  } else {
   i4 = __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E8reinsertEOS4_(i1, i5) | 0;
   i12 = (i5 | 0) == (i2 | 0) ? i4 : i11;
  }
  i4 = i10 + 1 | 0;
  if ((i4 | 0) == (i6 | 0)) {
   break;
  } else {
   i10 = i4;
   i11 = i12;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i6 | 0) > 0) {
  i13 = 0;
 } else {
  i8 = i12;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = i7 + (i13 << 3) | 0;
  do {
   if ((HEAP32[i1 >> 2] | 0) != -1) {
    i11 = HEAP32[i7 + (i13 << 3) + 4 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i10 = i11 | 0;
      i2 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
      if ((i2 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i11);
       break;
      } else {
       HEAP32[i10 >> 2] = i2;
       break;
      }
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
  i1 = i13 + 1 | 0;
  if ((i1 | 0) < (i6 | 0)) {
   i13 = i1;
  } else {
   i8 = i12;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore21ContextMenuController21addInspectElementItemEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 40 | 0;
 i6 = HEAP32[i1 + 92 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = HEAP32[(HEAP32[(HEAP32[i6 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = HEAP32[i7 + 32 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i6 + 40 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore32contextMenuItemTagInspectElementEv(i5);
 __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i4, 0, 2024, i5, 0);
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i5 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i6 = i1 + 8 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   if ((HEAP32[i7 + 8 >> 2] | 0) == 0) {
    break;
   }
   i5 = __ZN3WTF10fastMallocEj(28) | 0;
   i8 = i5;
   i9 = i3 | 0;
   HEAP32[i9 >> 2] = 0;
   __ZN7WebCore15ContextMenuItemC1ENS_19ContextMenuItemTypeENS_17ContextMenuActionERKN3WTF6StringEPNS_11ContextMenuE(i8, 2, 0, i3, 0);
   i10 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i9 = i10 | 0;
     i11 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i9 >> 2] = i11;
      break;
     }
    }
   } while (0);
   __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i8, HEAP32[i6 >> 2] | 0);
   if ((i5 | 0) == 0) {
    break;
   }
   __ZN7WebCore15ContextMenuItemD1Ev(i8);
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i4, HEAP32[i6 >> 2] | 0);
 __ZN7WebCore15ContextMenuItemD1Ev(i4);
 STACKTOP = i2;
 return;
}
function __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if ((HEAP32[i1 + 16 >> 2] & 32 | 0) == 0) {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i5 = HEAP32[i1 + 4 >> 2] | 0;
  i6 = i3 | 0;
  HEAP32[i6 >> 2] = -1640531527;
  i7 = i3 + 4 | 0;
  HEAP8[i7] = 0;
  i8 = i3 + 6 | 0;
  HEAP16[i8 >> 1] = 0;
  __ZN3WTF12StringHasher28addCharactersAssumingAlignedItXadL_ZNS_15CaseFoldingHash8foldCaseItEEtT_EEEEvPKS4_j(i3, i4, i5);
  i5 = HEAP32[i6 >> 2] | 0;
  if ((HEAP8[i7] & 1) == 0) {
   i9 = i5;
  } else {
   i7 = (HEAPU16[i8 >> 1] | 0) + i5 | 0;
   i5 = i7 << 11 ^ i7;
   i9 = (i5 >>> 17) + i5 | 0;
  }
  i5 = i9 << 3 ^ i9;
  i9 = (i5 >>> 5) + i5 | 0;
  i5 = i9 << 2 ^ i9;
  i9 = (i5 >>> 15) + i5 | 0;
  i5 = (i9 << 10 ^ i9) & 16777215;
  i10 = (i5 | 0) == 0 ? 8388608 : i5;
  STACKTOP = i2;
  return i10 | 0;
 }
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i9 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = (i9 & 1 | 0) == 0;
 i7 = i9 >>> 1;
 if ((i7 | 0) == 0) {
  i11 = i5;
  i12 = -1640531527;
 } else {
  i9 = i7;
  i8 = i5;
  i6 = -1640531527;
  while (1) {
   i4 = i9 - 1 | 0;
   i3 = (HEAPU16[__ZN3WTF10StringImpl19latin1CaseFoldTableE + ((HEAPU8[i8] | 0) << 1) >> 1] | 0) + i6 | 0;
   i13 = i3 << 16 ^ i3 ^ (HEAPU16[__ZN3WTF10StringImpl19latin1CaseFoldTableE + ((HEAPU8[i8 + 1 | 0] | 0) << 1) >> 1] | 0) << 11;
   i14 = (i13 >>> 11) + i13 | 0;
   if ((i4 | 0) == 0) {
    break;
   } else {
    i9 = i4;
    i8 = i8 + 2 | 0;
    i6 = i14;
   }
  }
  i11 = i5 + (i7 << 1) | 0;
  i12 = i14;
 }
 if (i1) {
  i15 = i12;
 } else {
  i1 = (HEAPU16[__ZN3WTF10StringImpl19latin1CaseFoldTableE + ((HEAPU8[i11] | 0) << 1) >> 1] | 0) + i12 | 0;
  i12 = i1 << 11 ^ i1;
  i15 = (i12 >>> 17) + i12 | 0;
 }
 i12 = i15 << 3 ^ i15;
 i15 = (i12 >>> 5) + i12 | 0;
 i12 = i15 << 2 ^ i15;
 i15 = (i12 >>> 15) + i12 | 0;
 i12 = (i15 << 10 ^ i15) & 16777215;
 i10 = (i12 | 0) == 0 ? 8388608 : i12;
 STACKTOP = i2;
 return i10 | 0;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E8reinsertEOS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i5 = __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(HEAP32[i1 >> 2] | 0) | 0;
 i6 = (i5 >>> 23) + ~i5 | 0;
 i7 = i6 << 12 ^ i6;
 i6 = i7 >>> 7 ^ i7;
 i7 = i6 << 2 ^ i6;
 i6 = i7 >>> 20 ^ i7 | 1;
 i7 = i5;
 i5 = 0;
 i8 = 0;
 while (1) {
  i9 = i7 & i4;
  i10 = i3 + (i9 << 3) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  i12 = i11;
  if ((i12 | 0) == 0) {
   i13 = 3;
   break;
  } else if ((i12 | 0) == (-1 | 0)) {
   i14 = i10;
  } else {
   i12 = HEAP32[i1 >> 2] | 0;
   if ((i11 | 0) == (i12 | 0)) {
    i15 = i10;
    break;
   }
   if (__ZN3WTF24equalIgnoringCaseNonNullEPKNS_10StringImplES2_(i11, i12) | 0) {
    i15 = i10;
    break;
   } else {
    i14 = i8;
   }
  }
  i12 = (i5 | 0) == 0 ? i6 : i5;
  i7 = i12 + i9 | 0;
  i5 = i12;
  i8 = i14;
 }
 if ((i13 | 0) == 3) {
  i15 = (i8 | 0) != 0 ? i8 : i10;
 }
 i10 = i15 + 4 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i13 = i8 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i13 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i8 = i15 | 0;
 i14 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i13 = i14 | 0;
   i5 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i13 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i14 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i8 >> 2] = i14;
 i14 = i2 + 4 | 0;
 i2 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i10 >> 2] = i2;
 return i15 | 0;
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
function __ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRKS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 > i2 >>> 0) {
   i8 = 3;
  } else {
   if ((i7 + (i4 * 28 & -1) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (((i2 - i7 | 0) / 28 & -1) * 28 & -1) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i12 + (i6 * 28 & -1) >> 2] = HEAP32[i11 >> 2];
 HEAP32[i12 + (i6 * 28 & -1) + 4 >> 2] = HEAP32[i11 + 4 >> 2];
 i2 = HEAP32[i11 + 8 >> 2] | 0;
 HEAP32[i12 + (i6 * 28 & -1) + 8 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i5 = i2 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 HEAP8[i12 + (i6 * 28 & -1) + 12 | 0] = HEAP8[i11 + 12 | 0] & 1;
 HEAP8[i12 + (i6 * 28 & -1) + 13 | 0] = HEAP8[i11 + 13 | 0] & 1;
 __ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEEC1ERKS4_(i12 + (i6 * 28 & -1) + 16 | 0, i11 + 16 | 0);
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCoreL29selectionContainsPossibleWordEPNS_5FrameE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i3 = i2 | 0;
 i4 = i2 + 136 | 0;
 __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i4, i1 + 32 | 0);
 i1 = i4 | 0;
 __ZN7WebCore12TextIteratorC1EPKNS_5RangeENS_20TextIteratorBehaviorE(i3, HEAP32[i1 >> 2] | 0, 0);
 i4 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i1 = i4 | 0;
   i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i1 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i4 = i3 + 52 | 0;
 L7 : do {
  if ((HEAP32[i4 >> 2] | 0) == 0) {
   i6 = 0;
  } else {
   i5 = i3 + 133 | 0;
   i1 = i3 + 72 | 0;
   while (1) {
    if ((HEAP8[i5] & 1) != 0) {
     i6 = 0;
     break L7;
    }
    i7 = HEAP32[i1 >> 2] | 0;
    i8 = 0;
    while (1) {
     if ((i8 | 0) >= (i7 | 0)) {
      break;
     }
     if ((1 << ((_u_charType((__ZNK7WebCore12TextIterator11characterAtEj(i3, i8) | 0) & 65535) | 0) << 24 >> 24) & 28672 | 0) == 0) {
      i6 = 1;
      break L7;
     } else {
      i8 = i8 + 1 | 0;
     }
    }
    __ZN7WebCore12TextIterator7advanceEv(i3);
    if ((HEAP32[i4 >> 2] | 0) == 0) {
     i6 = 0;
     break;
    }
   }
  }
 } while (0);
 __ZN7WebCore12TextIteratorD1Ev(i3);
 STACKTOP = i2;
 return i6 | 0;
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
 HEAP32[i5 >> 2] = H_BASE + 176;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1 + 112 | 0, i5);
 __ZN7WebCore13HTTPHeaderMapC1Ev(i1 + 116 | 0);
 _memset(i1 + 136 | 0, 0, 16) | 0;
 HEAP8[i1 + 152 | 0] = 11;
 HEAP32[i1 + 156 >> 2] = 1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore16FrameLoadRequestC1EPNS_14SecurityOriginERKNS_15ResourceRequestE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i4 = i2 | 0;
  tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue + 1, tempValue;
 }
 __ZN7WebCore19ResourceRequestBaseC2ERKS0_(i1 + 8 | 0, i3 | 0);
 i4 = HEAP32[i3 + 160 >> 2] | 0;
 HEAP32[i1 + 168 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i2 = i4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = HEAP32[i3 + 164 >> 2] | 0;
 HEAP32[i1 + 172 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i4 = i2 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = HEAP32[i3 + 168 >> 2] | 0;
 HEAP32[i1 + 176 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i2 = i4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = HEAP32[i3 + 172 >> 2] | 0;
 HEAP32[i1 + 180 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i4 = i2 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 HEAP8[i1 + 184 | 0] = HEAP8[i3 + 176 | 0] & 1;
 HEAP8[i1 + 185 | 0] = HEAP8[i3 + 177 | 0] & 1;
 HEAP8[i1 + 186 | 0] = HEAP8[i3 + 178 | 0] & 1;
 HEAP32[i1 + 188 >> 2] = HEAP32[i3 + 180 >> 2];
 HEAP32[i1 + 192 >> 2] = 0;
 HEAP8[i1 + 196 | 0] = 0;
 HEAP8[i1 + 197 | 0] = 0;
 _memset(i1 + 200 | 0, 0, 16) | 0;
 __ZN7WebCore3URL10invalidateEv(i1 + 212 | 0);
 i3 = i1 + 260 | 0;
 HEAP32[i3 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i3);
 HEAP8[i1 + 308 | 0] = 0;
 return;
}
function __ZN7WebCore14SubstituteDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 60 >> 2] | 0;
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
 i2 = HEAP32[i1 + 12 >> 2] | 0;
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
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
 i2 = HEAP32[i1 + 4 >> 2] | 0;
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
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore12SharedBufferD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 * 28 & -1) | 0;
 if (i2 >>> 0 > 153391689 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 28 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 28 & -1;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i7 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
   i2 = HEAP32[i6 + 8 >> 2] | 0;
   HEAP32[i7 + 8 >> 2] = i2;
   if ((i2 | 0) != 0) {
    i8 = i2 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   }
   HEAP8[i7 + 12 | 0] = HEAP8[i6 + 12 | 0] & 1;
   HEAP8[i7 + 13 | 0] = HEAP8[i6 + 13 | 0] & 1;
   __ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEEC1ERKS4_(i7 + 16 | 0, i6 + 16 | 0);
   __ZN7WebCore15ContextMenuItemD1Ev(i6);
   i8 = i6 + 28 | 0;
   if ((i8 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i8;
    i7 = i7 + 28 | 0;
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
function __ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEEC1ERKS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = i5;
 if ((i3 | 0) == 0) {
  return;
 }
 if (i3 >>> 0 > 153391689 >>> 0) {
  _WTFCrash();
 }
 i5 = __ZN3WTF18fastMallocGoodSizeEj(i3 * 28 & -1) | 0;
 HEAP32[i7 >> 2] = (i5 >>> 0) / 28 & -1;
 i7 = __ZN3WTF10fastMallocEj(i5) | 0;
 i5 = i7;
 HEAP32[i6 >> 2] = i5;
 if ((i7 | 0) == 0) {
  return;
 }
 i7 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i4 = i7 + (i2 * 28 & -1) | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  i8 = i7;
  i9 = i5;
 }
 while (1) {
  HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i9 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
  i5 = HEAP32[i8 + 8 >> 2] | 0;
  HEAP32[i9 + 8 >> 2] = i5;
  if ((i5 | 0) != 0) {
   i7 = i5 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  }
  HEAP8[i9 + 12 | 0] = HEAP8[i8 + 12 | 0] & 1;
  HEAP8[i9 + 13 | 0] = HEAP8[i8 + 13 | 0] & 1;
  __ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEEC1ERKS4_(i9 + 16 | 0, i8 + 16 | 0);
  i7 = i8 + 28 | 0;
  if ((i7 | 0) == (i4 | 0)) {
   break;
  } else {
   i8 = i7;
   i9 = i9 + 28 | 0;
  }
 }
 return;
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
function __ZN7WebCore21ContextMenuController17createContextMenuEPNS_5EventE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 232 | 0;
 i5 = i4 | 0;
 i6 = i4 + 112 | 0;
 i7 = i4 + 224 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 1](i3) | 0)) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i8 = i3 + 104 | 0;
 __ZN7WebCore13HitTestResultC1ERKNS_11LayoutPointE(i5, i8);
 i9 = HEAP32[i3 + 32 >> 2] | 0;
 i3 = HEAP32[(HEAP32[(HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 1](i9) | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i9 = HEAP32[i3 + 472 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i7 + 4 >> 2] = 0;
  __ZN7WebCore12EventHandler20hitTestResultAtPointERKNS_11LayoutPointEjRKNS_10LayoutSizeE(i6, i9, i8, 262, i7);
  __ZN7WebCore13HitTestResultaSERKS0_(i5, i6) | 0;
  __ZN7WebCore13HitTestResultD1Ev(i6);
 }
 if ((HEAP32[i5 + 76 >> 2] | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
 } else {
  __ZN7WebCore13HitTestResultaSERKS0_(i2 + 16 | 0, i5) | 0;
  i2 = __ZN3WTF10fastMallocEj(12) | 0;
  __ZN7WebCore11ContextMenuC1Ev(i2);
  HEAP32[i1 >> 2] = i2;
 }
 __ZN7WebCore13HitTestResultD1Ev(i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore21ContextMenuController22handleContextMenuEventEPNS_5EventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN7WebCore21ContextMenuController17createContextMenuEPNS_5EventE(i4, i1, i2);
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i5 >> 2] = i4;
 if ((i6 | 0) == 0) {
  i8 = i4;
 } else {
  i4 = i6 + 8 | 0;
  i7 = HEAP32[i4 >> 2] | 0;
  i9 = i6 | 0;
  if ((i7 | 0) != 0) {
   i10 = HEAP32[i9 >> 2] | 0;
   i11 = i10 + (i7 * 28 & -1) | 0;
   i7 = i10;
   while (1) {
    __ZN7WebCore15ContextMenuItemD1Ev(i7);
    i7 = i7 + 28 | 0;
    if ((i7 | 0) == (i11 | 0)) {
     break;
    }
   }
   HEAP32[i4 >> 2] = 0;
  }
  i4 = HEAP32[i9 >> 2] | 0;
  if ((i4 | 0) != 0) {
   HEAP32[i9 >> 2] = 0;
   HEAP32[i6 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i4);
  }
  __ZN3WTF8fastFreeEPv(i6);
  i8 = HEAP32[i5 >> 2] | 0;
 }
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore21ContextMenuController8populateEv(i1);
 __ZN7WebCore21ContextMenuController15showContextMenuEPNS_5EventE(i1, i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore21ContextMenuController16clearContextMenuEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  i2 = i3 + 8 | 0;
  i4 = HEAP32[i2 >> 2] | 0;
  i5 = i3 | 0;
  if ((i4 | 0) != 0) {
   i6 = HEAP32[i5 >> 2] | 0;
   i7 = i6 + (i4 * 28 & -1) | 0;
   i4 = i6;
   while (1) {
    __ZN7WebCore15ContextMenuItemD1Ev(i4);
    i4 = i4 + 28 | 0;
    if ((i4 | 0) == (i7 | 0)) {
     break;
    }
   }
   HEAP32[i2 >> 2] = 0;
  }
  i2 = HEAP32[i5 >> 2] | 0;
  if ((i2 | 0) != 0) {
   HEAP32[i5 >> 2] = 0;
   HEAP32[i3 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i2);
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 12 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  HEAP32[i3 >> 2] = 0;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 3](i1);
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = i1 + 4 | 0;
 i1 = i3 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i1 >> 2] = i2;
  return;
 }
 i2 = i3 - 4 | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 3](i2);
 return;
}
function __ZN3WTF12StringHasher28addCharactersAssumingAlignedItXadL_ZNS_15CaseFoldingHash8foldCaseItEEtT_EEEEvPKS4_j(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = (i3 & 1 | 0) == 0;
 i5 = i3 >>> 1;
 if ((i5 | 0) == 0) {
  i6 = i2;
 } else {
  i3 = i1 | 0;
  i7 = i5 << 1;
  i8 = i5;
  i5 = i2;
  while (1) {
   i9 = i8 - 1 | 0;
   i10 = _u_foldCase(HEAPU16[i5 >> 1] | 0, 0) | 0;
   i11 = _u_foldCase(HEAPU16[i5 + 2 >> 1] | 0, 0) | 0;
   i12 = (HEAP32[i3 >> 2] | 0) + (i10 & 65535) | 0;
   i10 = i12 ^ i11 << 11 & 134215680 ^ i12 << 16;
   HEAP32[i3 >> 2] = (i10 >>> 11) + i10;
   if ((i9 | 0) == 0) {
    break;
   } else {
    i8 = i9;
    i5 = i5 + 4 | 0;
   }
  }
  i6 = i2 + (i7 << 1) | 0;
 }
 if (i4) {
  return;
 }
 i4 = _u_foldCase(HEAPU16[i6 >> 1] | 0, 0) | 0;
 i6 = i1 + 4 | 0;
 if ((HEAP8[i6] & 1) == 0) {
  HEAP16[i1 + 6 >> 1] = i4;
  HEAP8[i6] = 1;
  return;
 } else {
  HEAP8[i6] = 0;
  i6 = i1 | 0;
  i7 = (HEAP32[i6 >> 2] | 0) + (HEAPU16[i1 + 6 >> 1] | 0) | 0;
  i1 = i7 ^ i4 << 11 & 134215680 ^ i7 << 16;
  HEAP32[i6 >> 2] = (i1 >>> 11) + i1;
  return;
 }
}
function __ZN3WTF6VectorINSt3__14pairINS_6StringES3_EELj0ENS_15CrashOnOverflowEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 3) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 + 4 >> 2] | 0;
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
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i8 = i5 | 0;
     i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i8 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i3 = i3 + 8 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore21ContextMenuControllerD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 3](i2);
 __ZN7WebCore13HitTestResultD1Ev(i1 + 16 | 0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 3](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 8 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 i3 = i2 | 0;
 if ((i5 | 0) != 0) {
  i4 = HEAP32[i3 >> 2] | 0;
  i6 = i4 + (i5 * 28 & -1) | 0;
  i5 = i4;
  while (1) {
   __ZN7WebCore15ContextMenuItemD1Ev(i5);
   i5 = i5 + 28 | 0;
   if ((i5 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i1 >> 2] = 0;
 }
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i2 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i1);
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore21ContextMenuControllerD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 3](i2);
 __ZN7WebCore13HitTestResultD1Ev(i1 + 16 | 0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 3](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 8 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 i3 = i2 | 0;
 if ((i5 | 0) != 0) {
  i4 = HEAP32[i3 >> 2] | 0;
  i6 = i4 + (i5 * 28 & -1) | 0;
  i5 = i4;
  while (1) {
   __ZN7WebCore15ContextMenuItemD1Ev(i5);
   i5 = i5 + 28 | 0;
   if ((i5 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i1 >> 2] = 0;
 }
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i2 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i1);
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 __ZNK7WebCore21ContextMenuController21checkOrEnableIfNeededERNS_15ContextMenuItemE(i1, i2);
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 + 8 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == (HEAP32[i3 + 4 >> 2] | 0)) {
  __ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRKS2_EEvOT_(i3 | 0, i2);
  return;
 }
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i5 + (i4 * 28 & -1) >> 2] = HEAP32[i2 >> 2];
 HEAP32[i5 + (i4 * 28 & -1) + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i5 + (i4 * 28 & -1) + 8 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i6 = i3 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 HEAP8[i5 + (i4 * 28 & -1) + 12 | 0] = HEAP8[i2 + 12 | 0] & 1;
 HEAP8[i5 + (i4 * 28 & -1) + 13 | 0] = HEAP8[i2 + 13 | 0] & 1;
 __ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEEC1ERKS4_(i5 + (i4 * 28 & -1) + 16 | 0, i2 + 16 | 0);
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore14SecurityOriginD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
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
 i2 = HEAP32[i1 + 12 >> 2] | 0;
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
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 8 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 __ZN3WTF6VectorINSt3__14pairINS_6StringES3_EELj0ENS_15CrashOnOverflowEED2Ev(i1 + 8 | 0);
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 8 | 0;
   i5 = i2 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
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
function __ZN7WebCore21ContextMenuControllerC2ERNS_4PageERNS_17ContextMenuClientE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = i3;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 __ZN7WebCore13HitTestResultC1Ev(i1 + 16 | 0);
 return;
}
function __ZN7WebCore21ContextMenuControllerC1ERNS_4PageERNS_17ContextMenuClientE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = i3;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 __ZN7WebCore13HitTestResultC1Ev(i1 + 16 | 0);
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
 FUNCTION_TABLE_vi[i1 & 3](i2 | 0);
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
function b4() {
 abort(4);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore21ContextMenuControllerD2Ev,b0];
  var FUNCTION_TABLE_vii = [b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZN7WebCore21ContextMenuControllerC2ERNS_4PageERNS_17ContextMenuClientE,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE": __ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE, "__ZN3WTF10StringImpl19latin1CaseFoldTableE": __ZN3WTF10StringImpl19latin1CaseFoldTableE, "__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE": __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore21ContextMenuController26createAndAppendFontSubMenuERNS_15ContextMenuItemE","__ZN3WTF6VectorINSt3__14pairINS_6StringES3_EELj0ENS_15CrashOnOverflowEED2Ev","__ZN7WebCore21ContextMenuControllerD2Ev","__ZN7WebCoreL29selectionContainsPossibleWordEPNS_5FrameE","__ZN7WebCoreL13openNewWindowERKNS_3URLEPNS_5FrameE","__ZN7WebCore21ContextMenuControllerC2ERNS_4PageERNS_17ContextMenuClientE","__ZN7WebCore19ResourceRequestBaseC2ERKS0_","__ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv","__ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEEC1ERKS4_","__ZN7WebCore21ContextMenuController23contextMenuItemSelectedEPNS_15ContextMenuItemE","__ZN7WebCore21ContextMenuController35createAndAppendTextDirectionSubMenuERNS_15ContextMenuItemE","__ZN7WebCore16FrameLoadRequestC1EPNS_14SecurityOriginERKNS_15ResourceRequestE","_memset","__ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_22IdentityHashTranslatorIS7_EERKS1_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_","__ZN3WTF12StringHasher28addCharactersAssumingAlignedItXadL_ZNS_15CaseFoldingHash8foldCaseItEEtT_EEEEvPKS4_j","__ZN7WebCore15ResourceRequestD2Ev","__ZN7WebCore14SubstituteDataD2Ev","__ZN7WebCore21ContextMenuController15showContextMenuEPNS_5EventE","__ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE","__ZN7WebCore21ContextMenuController16clearContextMenuEv","__ZN7WebCore21ContextMenuController38createAndAppendWritingDirectionSubMenuERNS_15ContextMenuItemE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore19ResourceRequestBaseD2Ev","__ZN7WebCore21ContextMenuController8populateEv","__ZN7WebCore21ContextMenuController15showContextMenuEPNS_5EventEN3WTF10PassRefPtrINS_19ContextMenuProviderEEE","__ZN7WebCore16VisibleSelectionD2Ev","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E6expandEPS4_","__ZN7WebCore21ContextMenuController17createContextMenuEPNS_5EventE","__ZN7WebCore21ContextMenuController21addInspectElementItemEv","__ZN7WebCore14SecurityOriginD2Ev","__ZN7WebCore21ContextMenuController40createAndAppendSpellingAndGrammarSubMenuERNS_15ContextMenuItemE","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E8reinsertEOS4_","_memcpy","__ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRKS2_EEvOT_","__ZN7WebCore21ContextMenuController10appendItemERNS_15ContextMenuItemEPNS_11ContextMenuE","__ZNK7WebCore21ContextMenuController21checkOrEnableIfNeededERNS_15ContextMenuItemE","__ZN7WebCore21ContextMenuController22handleContextMenuEventEPNS_5EventE"]

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
H_BASE = parentModule["_malloc"](592 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 592;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore9DOMEditorC1EPNS_16InspectorHistoryE;
var __ZN7WebCore9DOMEditorD1Ev;
/* memory initializer */ allocate([73,110,115,101,114,116,66,101,102,111,114,101,0,0,0,0,82,101,109,111,118,101,67,104,105,108,100,0,0,0,0,0,83,101,116,65,116,116,114,105,98,117,116,101,0,0,0,0,82,101,109,111,118,101,65,116,116,114,105,98,117,116,101,0,83,101,116,79,117,116,101,114,72,84,77,76,0,0,0,0,82,101,112,108,97,99,101,87,104,111,108,101,84,101,120,116,0,0,0,0,0,0,0,0,82,101,112,108,97,99,101,67,104,105,108,100,78,111,100,101,0,0,0,0,0,0,0,0,83,101,116,78,111,100,101,86,97,108,117,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore9DOMEditor18SetNodeValueActionE=(H_BASE+376)|0;
  var __ZTVN7WebCore9DOMEditor18SetOuterHTMLActionE=(H_BASE+320)|0;
  var __ZTVN7WebCore9DOMEditor18SetAttributeActionE=(H_BASE+432)|0;
  var __ZTVN7WebCore9DOMEditor21RemoveAttributeActionE=(H_BASE+264)|0;
  var __ZTVN7WebCore9DOMEditor22ReplaceWholeTextActionE=(H_BASE+152)|0;
  var __ZTVN7WebCore9DOMEditor18InsertBeforeActionE=(H_BASE+488)|0;
  var __ZTVN7WebCore9DOMEditor17RemoveChildActionE=(H_BASE+544)|0;
  var __ZTVN7WebCore9DOMEditor22ReplaceChildNodeActionE=(H_BASE+208)|0;
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
function runPostSets() {
 HEAP32[H_BASE + 160 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_iii + 26;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_iii + 30;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_iii + 44;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_iii + 42;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_iii + 46;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_iii + 40;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_iii + 28;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_iii + 32;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_iii + 36;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_iii + 24;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_iii + 34;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_iii + 38;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_iii + 22;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_iii + 48;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_ii + 2;
}
function __ZN7WebCore9DOMEditor18SetAttributeAction4undoERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = HEAP32[i1 + 8 >> 2] | 0;
 i11 = i1 + 12 | 0;
 if ((HEAP8[i1 + 20 | 0] & 1) == 0) {
  i12 = HEAP32[i11 >> 2] | 0;
  do {
   if ((i12 | 0) == 0) {
    i13 = i4 | 0;
    HEAP32[i13 >> 2] = 0;
    i14 = i13;
   } else {
    if ((HEAP32[i12 + 16 >> 2] & 16 | 0) == 0) {
     __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i12);
     i14 = i4 | 0;
     break;
    } else {
     i13 = i4 | 0;
     HEAP32[i13 >> 2] = i12;
     i15 = i12 | 0;
     HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
     i14 = i13;
     break;
    }
   }
  } while (0);
  i12 = i9 | 0;
  HEAP32[i12 >> 2] = HEAP32[i14 >> 2];
  __ZN7WebCore7Element15removeAttributeERKN3WTF12AtomicStringE(i10, i9);
  i9 = HEAP32[i12 >> 2] | 0;
  if ((i9 | 0) == 0) {
   STACKTOP = i3;
   return 1;
  }
  i12 = i9 | 0;
  i14 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
  if ((i14 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i9);
   STACKTOP = i3;
   return 1;
  } else {
   HEAP32[i12 >> 2] = i14;
   STACKTOP = i3;
   return 1;
  }
 }
 i14 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i11 = i6 | 0;
   HEAP32[i11 >> 2] = 0;
   i16 = i11;
  } else {
   if ((HEAP32[i14 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i6, i14);
    i16 = i6 | 0;
    break;
   } else {
    i11 = i6 | 0;
    HEAP32[i11 >> 2] = i14;
    i12 = i14 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
    i16 = i11;
    break;
   }
  }
 } while (0);
 i14 = i7 | 0;
 HEAP32[i14 >> 2] = HEAP32[i16 >> 2];
 i16 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i16 | 0) == 0) {
   i1 = i5 | 0;
   HEAP32[i1 >> 2] = 0;
   i17 = i1;
  } else {
   if ((HEAP32[i16 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i5, i16);
    i17 = i5 | 0;
    break;
   } else {
    i1 = i5 | 0;
    HEAP32[i1 >> 2] = i16;
    i6 = i16 | 0;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
    i17 = i1;
    break;
   }
  }
 } while (0);
 i16 = i8 | 0;
 HEAP32[i16 >> 2] = HEAP32[i17 >> 2];
 __ZN7WebCore7Element12setAttributeERKN3WTF12AtomicStringES4_Ri(i10, i7, i8, i2);
 i2 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i16 = i2 | 0;
   i8 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i16 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i14 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return 1;
 }
 i14 = i2 | 0;
 i8 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i3;
  return 1;
 } else {
  HEAP32[i14 >> 2] = i8;
  STACKTOP = i3;
  return 1;
 }
 return 0;
}
function __ZN7WebCore9DOMEditor18SetAttributeAction7performERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i1 + 8 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = i1 + 12 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i5 | 0;
   HEAP32[i12 >> 2] = 0;
   i13 = i12;
  } else {
   if ((HEAP32[i11 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i5, i11);
    i13 = i5 | 0;
    break;
   } else {
    i12 = i5 | 0;
    HEAP32[i12 >> 2] = i11;
    i14 = i11 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
    i13 = i12;
    break;
   }
  }
 } while (0);
 i11 = i6 | 0;
 HEAP32[i11 >> 2] = HEAP32[i13 >> 2];
 i13 = i1 + 20 | 0;
 HEAP8[i13] = (__ZNK7WebCore7Element12hasAttributeERKN3WTF12AtomicStringE(i9, i6) | 0) & 1;
 i6 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 | 0;
   i9 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i11 >> 2] = i9;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP8[i13] & 1) != 0) {
   i6 = HEAP32[i8 >> 2] | 0;
   i9 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i9 | 0) == 0) {
     i11 = i4 | 0;
     HEAP32[i11 >> 2] = 0;
     i15 = i11;
    } else {
     if ((HEAP32[i9 + 16 >> 2] & 16 | 0) == 0) {
      __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i9);
      i15 = i4 | 0;
      break;
     } else {
      i11 = i4 | 0;
      HEAP32[i11 >> 2] = i9;
      i5 = i9 | 0;
      HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
      i15 = i11;
      break;
     }
    }
   } while (0);
   i9 = i7 | 0;
   HEAP32[i9 >> 2] = HEAP32[i15 >> 2];
   i11 = HEAP32[(__ZNK7WebCore7Element12getAttributeERKN3WTF12AtomicStringE(i6, i7) | 0) >> 2] | 0;
   if ((i11 | 0) != 0) {
    i5 = i11 | 0;
    HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
   }
   i5 = i1 + 24 | 0;
   i12 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = i11;
   do {
    if ((i12 | 0) != 0) {
     i11 = i12 | 0;
     i5 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i5 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i11 >> 2] = i5;
      break;
     }
    }
   } while (0);
   i12 = HEAP32[i9 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i6 = i12 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i6 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i7 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 63](i1, i2) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore9DOMEditor18InsertBeforeAction7performERi(i1, i2) {
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
  if ((HEAP32[i7 + 16 >> 2] | 0) == 0) {
   i8 = i7;
  } else {
   i9 = __ZN3WTF10fastMallocEj(20) | 0;
   i10 = i9;
   i11 = HEAP32[i6 >> 2] | 0;
   i12 = HEAP32[i11 + 16 >> 2] | 0;
   i13 = i12 | 0;
   __ZN3WTF6StringC1EPKc(i4, H_BASE + 24 | 0);
   __ZN7WebCore16InspectorHistory6ActionC2ERKN3WTF6StringE(i9, i4);
   i14 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i15 = i14 | 0;
     i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i15 >> 2] = i16;
      break;
     }
    }
   } while (0);
   HEAP32[i9 >> 2] = H_BASE + 552;
   HEAP32[i9 + 8 >> 2] = i13;
   if ((i12 | 0) != 0) {
    i14 = i12 + 8 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
   }
   HEAP32[i9 + 12 >> 2] = i11;
   if ((i11 | 0) != 0) {
    i14 = i11 + 8 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
   }
   HEAP32[i9 + 16 >> 2] = 0;
   i14 = i1 + 20 | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = i10;
   if ((i16 | 0) == 0) {
    i17 = i10;
   } else {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 63](i16);
    i17 = HEAP32[i14 >> 2] | 0;
   }
   if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i17 >> 2] | 0) + 20 >> 2] & 63](i17, i2) | 0) {
    i8 = HEAP32[i6 >> 2] | 0;
    break;
   } else {
    i18 = 0;
    STACKTOP = i3;
    return i18 | 0;
   }
  }
 } while (0);
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i17 = i5 | 0;
 HEAP32[i17 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i4 = i8 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = __ZN7WebCore4Node12insertBeforeEN3WTF10PassRefPtrIS0_EEPS0_Ri(i6, i5, HEAP32[i1 + 16 >> 2] | 0, i2) | 0;
 i2 = HEAP32[i17 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i18 = i4;
  STACKTOP = i3;
  return i18 | 0;
 }
 i17 = i2 + 8 | 0;
 i2 = i17 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  i18 = i4;
  STACKTOP = i3;
  return i18 | 0;
 }
 if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
  i18 = i4;
  STACKTOP = i3;
  return i18 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
 i18 = i4;
 STACKTOP = i3;
 return i18 | 0;
}
function __ZN7WebCore9DOMEditor21RemoveAttributeAction4undoERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = HEAP32[i1 + 8 >> 2] | 0;
 i9 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i10 = i5 | 0;
   HEAP32[i10 >> 2] = 0;
   i11 = i10;
  } else {
   if ((HEAP32[i9 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i5, i9);
    i11 = i5 | 0;
    break;
   } else {
    i10 = i5 | 0;
    HEAP32[i10 >> 2] = i9;
    i12 = i9 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
    i11 = i10;
    break;
   }
  }
 } while (0);
 i9 = i6 | 0;
 HEAP32[i9 >> 2] = HEAP32[i11 >> 2];
 i11 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i1 = i4 | 0;
   HEAP32[i1 >> 2] = 0;
   i13 = i1;
  } else {
   if ((HEAP32[i11 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i11);
    i13 = i4 | 0;
    break;
   } else {
    i1 = i4 | 0;
    HEAP32[i1 >> 2] = i11;
    i5 = i11 | 0;
    HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
    i13 = i1;
    break;
   }
  }
 } while (0);
 i11 = i7 | 0;
 HEAP32[i11 >> 2] = HEAP32[i13 >> 2];
 __ZN7WebCore7Element12setAttributeERKN3WTF12AtomicStringES4_Ri(i8, i6, i7, i2);
 i2 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i11 = i2 | 0;
   i7 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i11 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i9 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return 1;
 }
 i9 = i2 | 0;
 i7 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i3;
  return 1;
 } else {
  HEAP32[i9 >> 2] = i7;
  STACKTOP = i3;
  return 1;
 }
 return 0;
}
function __ZN7WebCore9DOMEditor18SetAttributeAction4redoERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = HEAP32[i1 + 8 >> 2] | 0;
 i9 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i10 = i5 | 0;
   HEAP32[i10 >> 2] = 0;
   i11 = i10;
  } else {
   if ((HEAP32[i9 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i5, i9);
    i11 = i5 | 0;
    break;
   } else {
    i10 = i5 | 0;
    HEAP32[i10 >> 2] = i9;
    i12 = i9 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
    i11 = i10;
    break;
   }
  }
 } while (0);
 i9 = i6 | 0;
 HEAP32[i9 >> 2] = HEAP32[i11 >> 2];
 i11 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i1 = i4 | 0;
   HEAP32[i1 >> 2] = 0;
   i13 = i1;
  } else {
   if ((HEAP32[i11 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i11);
    i13 = i4 | 0;
    break;
   } else {
    i1 = i4 | 0;
    HEAP32[i1 >> 2] = i11;
    i5 = i11 | 0;
    HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
    i13 = i1;
    break;
   }
  }
 } while (0);
 i11 = i7 | 0;
 HEAP32[i11 >> 2] = HEAP32[i13 >> 2];
 __ZN7WebCore7Element12setAttributeERKN3WTF12AtomicStringES4_Ri(i8, i6, i7, i2);
 i2 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i11 = i2 | 0;
   i7 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i11 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i9 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return 1;
 }
 i9 = i2 | 0;
 i7 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i3;
  return 1;
 } else {
  HEAP32[i9 >> 2] = i7;
  STACKTOP = i3;
  return 1;
 }
 return 0;
}
function __ZN7WebCore9DOMEditor12insertBeforeEPNS_4NodeEN3WTF10PassRefPtrIS1_EES2_PNS3_6StringE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i7 = i6 | 0;
 i8 = i6 + 24 | 0;
 i9 = i6 + 32 | 0;
 i10 = i6 + 40 | 0;
 HEAP32[i9 >> 2] = 0;
 i11 = i10 | 0;
 i12 = i3 | 0;
 i3 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 HEAP32[i11 >> 2] = i3;
 i3 = __ZN7WebCore9DOMEditor12insertBeforeEPNS_4NodeEN3WTF10PassRefPtrIS1_EES2_Ri(i1, i2, i10, i4, i9) | 0;
 i4 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i11 = i4 + 8 | 0;
   i10 = i11 | 0;
   i2 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i4 = HEAP32[i9 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i6;
  return i3 | 0;
 }
 __ZN7WebCore24ExceptionCodeDescriptionC1Ei(i7, i4);
 __ZN3WTF6StringC1EPKc(i8, HEAP32[i7 + 4 >> 2] | 0);
 i7 = i8 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i4 = i5 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i8;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 | 0;
   i4 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i8 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i6;
  return i3 | 0;
 }
 i7 = i5 | 0;
 i4 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i6;
  return i3 | 0;
 } else {
  HEAP32[i7 >> 2] = i4;
  STACKTOP = i6;
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore9DOMEditor12setOuterHTMLERNS_4NodeERKN3WTF6StringEPPS1_PS4_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i7 = i6 | 0;
 i8 = i6 + 24 | 0;
 i9 = i6 + 32 | 0;
 i10 = i6 + 40 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = __ZN3WTF10fastMallocEj(36) | 0;
 __ZN7WebCore9DOMEditor18SetOuterHTMLActionC2ERNS_4NodeERKN3WTF6StringE(i11, i2, i3);
 i3 = HEAP32[i1 >> 2] | 0;
 i1 = i9 | 0;
 HEAP32[i1 >> 2] = i11;
 i2 = __ZN7WebCore16InspectorHistory7performEN3WTF10PassOwnPtrINS0_6ActionEEERi(i3, i9, i10) | 0;
 i9 = HEAP32[i1 >> 2] | 0;
 if ((i9 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
 }
 if (i2) {
  HEAP32[i4 >> 2] = HEAP32[i11 + 24 >> 2];
 }
 i11 = HEAP32[i10 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i6;
  return i2 | 0;
 }
 __ZN7WebCore24ExceptionCodeDescriptionC1Ei(i7, i11);
 __ZN3WTF6StringC1EPKc(i8, HEAP32[i7 + 4 >> 2] | 0);
 i7 = i8 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i11 = i5 | 0;
 i5 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = i8;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 | 0;
   i11 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i8 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i6;
  return i2 | 0;
 }
 i7 = i5 | 0;
 i11 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i11 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i6;
  return i2 | 0;
 } else {
  HEAP32[i7 >> 2] = i11;
  STACKTOP = i6;
  return i2 | 0;
 }
 return 0;
}
function __ZN7WebCore9DOMEditor18SetOuterHTMLActionD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 328;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
 }
 i2 = HEAP32[i1 + 20 >> 2] | 0;
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
 i2 = HEAP32[i1 + 16 >> 2] | 0;
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
 i2 = (HEAP32[i1 + 8 >> 2] | 0) + 8 | 0;
 i3 = i2 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  i6 = i1 | 0;
  __ZN7WebCore16InspectorHistory6ActionD2Ev(i6);
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
  i6 = i1 | 0;
  __ZN7WebCore16InspectorHistory6ActionD2Ev(i6);
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
 i6 = i1 | 0;
 __ZN7WebCore16InspectorHistory6ActionD2Ev(i6);
 return;
}
function __ZN7WebCore9DOMEditor12setAttributeEPNS_7ElementERKN3WTF6StringES6_PS4_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i7 = i6 | 0;
 i8 = i6 + 24 | 0;
 i9 = i6 + 32 | 0;
 i10 = i6 + 40 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = HEAP32[i1 >> 2] | 0;
 i1 = __ZN3WTF10fastMallocEj(28) | 0;
 __ZN7WebCore9DOMEditor18SetAttributeActionC2EPNS_7ElementERKN3WTF6StringES7_(i1, i2, i3, i4);
 i4 = i9 | 0;
 HEAP32[i4 >> 2] = i1;
 i1 = __ZN7WebCore16InspectorHistory7performEN3WTF10PassOwnPtrINS0_6ActionEEERi(i11, i9, i10) | 0;
 i9 = HEAP32[i4 >> 2] | 0;
 if ((i9 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
 }
 i9 = HEAP32[i10 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i6;
  return i1 | 0;
 }
 __ZN7WebCore24ExceptionCodeDescriptionC1Ei(i7, i9);
 __ZN3WTF6StringC1EPKc(i8, HEAP32[i7 + 4 >> 2] | 0);
 i7 = i8 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i9 = i5 | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i8 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i6;
  return i1 | 0;
 }
 i7 = i5 | 0;
 i9 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i9 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i6;
  return i1 | 0;
 } else {
  HEAP32[i7 >> 2] = i9;
  STACKTOP = i6;
  return i1 | 0;
 }
 return 0;
}
function __ZN7WebCore9DOMEditor21RemoveAttributeAction7performERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i7 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i8 = i4 | 0;
   HEAP32[i8 >> 2] = 0;
   i9 = i8;
  } else {
   if ((HEAP32[i7 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i7);
    i9 = i4 | 0;
    break;
   } else {
    i8 = i4 | 0;
    HEAP32[i8 >> 2] = i7;
    i10 = i7 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
    i9 = i8;
    break;
   }
  }
 } while (0);
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = HEAP32[i9 >> 2];
 i9 = HEAP32[(__ZNK7WebCore7Element12getAttributeERKN3WTF12AtomicStringE(i6, i5) | 0) >> 2] | 0;
 if ((i9 | 0) != 0) {
  i5 = i9 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i1 + 16 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i9;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 63](i1, i2) | 0;
 STACKTOP = i3;
 return i6 | 0;
}
function __ZN7WebCore9DOMEditor18SetOuterHTMLAction7performERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 8 | 0;
 __ZN7WebCore12createMarkupERKNS_4NodeENS_13EChildrenOnlyEPN3WTF6VectorIPS0_Lj0ENS4_15CrashOnOverflowEEENS_13EAbsoluteURLsEPNS5_INS_13QualifiedNameELj0ES7_EENS_22EFragmentSerializationE(i4, HEAP32[i6 >> 2] | 0, 0, 0, 0, 0, 0);
 i7 = i4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i1 + 20 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i4;
 do {
  if ((i9 | 0) != 0) {
   i4 = i9 | 0;
   i8 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i4 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
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
 __ZN7WebCore15DOMPatchSupportC1EPNS_9DOMEditorEPNS_8DocumentE(i5, HEAP32[i1 + 32 >> 2] | 0, HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0);
 HEAP32[i1 + 24 >> 2] = __ZN7WebCore15DOMPatchSupport9patchNodeERNS_4NodeERKN3WTF6StringERi(i5, HEAP32[i6 >> 2] | 0, i1 + 16 | 0, i2) | 0;
 i1 = (HEAP32[i2 >> 2] | 0) == 0;
 __ZN7WebCore15DOMPatchSupportD1Ev(i5);
 STACKTOP = i3;
 return i1 | 0;
}
function __ZN7WebCore9DOMEditor18SetAttributeActionD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 440;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
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
 i2 = HEAP32[i1 + 16 >> 2] | 0;
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
 i2 = HEAP32[i1 + 12 >> 2] | 0;
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
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1 | 0;
  __ZN7WebCore16InspectorHistory6ActionD2Ev(i5);
  return;
 }
 i4 = i2 + 8 | 0;
 i2 = i4 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  i5 = i1 | 0;
  __ZN7WebCore16InspectorHistory6ActionD2Ev(i5);
  return;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  i5 = i1 | 0;
  __ZN7WebCore16InspectorHistory6ActionD2Ev(i5);
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 i5 = i1 | 0;
 __ZN7WebCore16InspectorHistory6ActionD2Ev(i5);
 return;
}
function __ZN7WebCore9DOMEditor18InsertBeforeActionD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 496;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
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
 i2 = HEAP32[i1 + 12 >> 2] | 0;
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
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = i1 | 0;
  __ZN7WebCore16InspectorHistory6ActionD2Ev(i6);
  return;
 }
 i3 = i2 + 8 | 0;
 i2 = i3 | 0;
 i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  i6 = i1 | 0;
  __ZN7WebCore16InspectorHistory6ActionD2Ev(i6);
  return;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  i6 = i1 | 0;
  __ZN7WebCore16InspectorHistory6ActionD2Ev(i6);
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 i6 = i1 | 0;
 __ZN7WebCore16InspectorHistory6ActionD2Ev(i6);
 return;
}
function __ZN7WebCore9DOMEditor12insertBeforeEPNS_4NodeEN3WTF10PassRefPtrIS1_EES2_Ri(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = HEAP32[i1 >> 2] | 0;
 i1 = __ZN3WTF10fastMallocEj(24) | 0;
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i10 = i1;
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 8 | 0);
 __ZN7WebCore16InspectorHistory6ActionC2ERKN3WTF6StringE(i10, i7);
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i7 = i11 | 0;
   i12 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i7 >> 2] = i12;
    break;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = H_BASE + 496;
 HEAP32[i1 + 8 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i11 = i2 + 8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 12 >> 2] = i3;
 HEAP32[i1 + 16 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 20 >> 2] = 0;
 i1 = i8 | 0;
 HEAP32[i1 >> 2] = i10;
 i10 = __ZN7WebCore16InspectorHistory7performEN3WTF10PassOwnPtrINS0_6ActionEEERi(i9, i8, i5) | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i6;
  return i10 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
 STACKTOP = i6;
 return i10 | 0;
}
function __ZN7WebCore9DOMEditor12replaceChildEPNS_4NodeEN3WTF10PassRefPtrIS1_EES2_Ri(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = HEAP32[i1 >> 2] | 0;
 i1 = __ZN3WTF10fastMallocEj(20) | 0;
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i10 = i1;
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 112 | 0);
 __ZN7WebCore16InspectorHistory6ActionC2ERKN3WTF6StringE(i10, i7);
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i7 = i11 | 0;
   i12 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i7 >> 2] = i12;
    break;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = H_BASE + 216;
 HEAP32[i1 + 8 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i11 = i2 + 8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 12 >> 2] = i3;
 HEAP32[i1 + 16 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i1 = i4 + 8 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 }
 i1 = i8 | 0;
 HEAP32[i1 >> 2] = i10;
 i10 = __ZN7WebCore16InspectorHistory7performEN3WTF10PassOwnPtrINS0_6ActionEEERi(i9, i8, i5) | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i6;
  return i10 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
 STACKTOP = i6;
 return i10 | 0;
}
function __ZN7WebCore9DOMEditor15removeAttributeEPNS_7ElementERKN3WTF6StringERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 i1 = __ZN3WTF10fastMallocEj(20) | 0;
 i9 = i1;
 __ZN3WTF6StringC1EPKc(i6, H_BASE + 56 | 0);
 __ZN7WebCore16InspectorHistory6ActionC2ERKN3WTF6StringE(i9, i6);
 i10 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i6 = i10 | 0;
   i11 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i6 >> 2] = i11;
    break;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = H_BASE + 272;
 HEAP32[i1 + 8 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i10 = i2 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 i10 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i3 = i10 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 16 >> 2] = 0;
 i1 = i7 | 0;
 HEAP32[i1 >> 2] = i9;
 i9 = __ZN7WebCore16InspectorHistory7performEN3WTF10PassOwnPtrINS0_6ActionEEERi(i8, i7, i4) | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return i9 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
 STACKTOP = i5;
 return i9 | 0;
}
function __ZN7WebCore9DOMEditor16replaceWholeTextEPNS_4TextERKN3WTF6StringERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 i1 = __ZN3WTF10fastMallocEj(20) | 0;
 i9 = i1;
 __ZN3WTF6StringC1EPKc(i6, H_BASE + 88 | 0);
 __ZN7WebCore16InspectorHistory6ActionC2ERKN3WTF6StringE(i9, i6);
 i10 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i6 = i10 | 0;
   i11 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i6 >> 2] = i11;
    break;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = H_BASE + 160;
 HEAP32[i1 + 8 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i10 = i2 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 i10 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i3 = i10 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 16 >> 2] = 0;
 i1 = i7 | 0;
 HEAP32[i1 >> 2] = i9;
 i9 = __ZN7WebCore16InspectorHistory7performEN3WTF10PassOwnPtrINS0_6ActionEEERi(i8, i7, i4) | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return i9 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
 STACKTOP = i5;
 return i9 | 0;
}
function __ZN7WebCore9DOMEditor12setNodeValueEPNS_4NodeERKN3WTF6StringERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 i1 = __ZN3WTF10fastMallocEj(20) | 0;
 i9 = i1;
 __ZN3WTF6StringC1EPKc(i6, H_BASE + 136 | 0);
 __ZN7WebCore16InspectorHistory6ActionC2ERKN3WTF6StringE(i9, i6);
 i10 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i6 = i10 | 0;
   i11 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i6 >> 2] = i11;
    break;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = H_BASE + 384;
 HEAP32[i1 + 8 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i10 = i2 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 i10 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i3 = i10 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 16 >> 2] = 0;
 i1 = i7 | 0;
 HEAP32[i1 >> 2] = i9;
 i9 = __ZN7WebCore16InspectorHistory7performEN3WTF10PassOwnPtrINS0_6ActionEEERi(i8, i7, i4) | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return i9 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
 STACKTOP = i5;
 return i9 | 0;
}
function __ZN7WebCore9DOMEditor22ReplaceChildNodeActionD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 216;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
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
 i2 = HEAP32[i1 + 12 >> 2] | 0;
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
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = i1 | 0;
  __ZN7WebCore16InspectorHistory6ActionD2Ev(i6);
  return;
 }
 i3 = i2 + 8 | 0;
 i2 = i3 | 0;
 i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  i6 = i1 | 0;
  __ZN7WebCore16InspectorHistory6ActionD2Ev(i6);
  return;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  i6 = i1 | 0;
  __ZN7WebCore16InspectorHistory6ActionD2Ev(i6);
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 i6 = i1 | 0;
 __ZN7WebCore16InspectorHistory6ActionD2Ev(i6);
 return;
}
function __ZN7WebCore9DOMEditor17RemoveChildActionD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 552;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
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
 i2 = HEAP32[i1 + 12 >> 2] | 0;
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
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = i1 | 0;
  __ZN7WebCore16InspectorHistory6ActionD2Ev(i6);
  return;
 }
 i3 = i2 + 8 | 0;
 i2 = i3 | 0;
 i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  i6 = i1 | 0;
  __ZN7WebCore16InspectorHistory6ActionD2Ev(i6);
  return;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  i6 = i1 | 0;
  __ZN7WebCore16InspectorHistory6ActionD2Ev(i6);
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 i6 = i1 | 0;
 __ZN7WebCore16InspectorHistory6ActionD2Ev(i6);
 return;
}
function __ZN7WebCore9DOMEditor11removeChildEPNS_4NodeES2_Ri(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 i1 = __ZN3WTF10fastMallocEj(20) | 0;
 i9 = i1;
 __ZN3WTF6StringC1EPKc(i6, H_BASE + 24 | 0);
 __ZN7WebCore16InspectorHistory6ActionC2ERKN3WTF6StringE(i9, i6);
 i10 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i6 = i10 | 0;
   i11 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i6 >> 2] = i11;
    break;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = H_BASE + 552;
 HEAP32[i1 + 8 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i10 = i2 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 12 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i10 = i3 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 16 >> 2] = 0;
 i1 = i7 | 0;
 HEAP32[i1 >> 2] = i9;
 i9 = __ZN7WebCore16InspectorHistory7performEN3WTF10PassOwnPtrINS0_6ActionEEERi(i8, i7, i4) | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return i9 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
 STACKTOP = i5;
 return i9 | 0;
}
function __ZN7WebCore9DOMEditor18SetOuterHTMLActionC2ERNS_4NodeERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 72 | 0);
 __ZN7WebCore16InspectorHistory6ActionC2ERKN3WTF6StringE(i1 | 0, i5);
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
 HEAP32[i1 >> 2] = H_BASE + 328;
 HEAP32[i1 + 8 >> 2] = i2;
 i6 = i2 + 8 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 i6 = HEAP32[i2 + 28 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i2 = i6 + 8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 16 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 20 >> 2] = 0;
 HEAP32[i1 + 24 >> 2] = 0;
 i3 = __ZN3WTF10fastMallocEj(20) | 0;
 __ZN7WebCore16InspectorHistoryC1Ev(i3);
 i2 = i1 + 28 | 0;
 HEAP32[i2 >> 2] = i3;
 i3 = __ZN3WTF10fastMallocEj(4) | 0;
 HEAP32[i3 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i1 + 32 >> 2] = i3;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9DOMEditor18SetAttributeActionC2EPNS_7ElementERKN3WTF6StringES7_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 __ZN3WTF6StringC1EPKc(i6, H_BASE + 40 | 0);
 __ZN7WebCore16InspectorHistory6ActionC2ERKN3WTF6StringE(i1 | 0, i6);
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i6 >> 2] = i8;
    break;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = H_BASE + 440;
 HEAP32[i1 + 8 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i3 = i7 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 + 16 >> 2] = i3;
 if ((i3 | 0) == 0) {
  i9 = i1 + 20 | 0;
  HEAP8[i9] = 0;
  i10 = i1 + 24 | 0;
  HEAP32[i10 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 i9 = i1 + 20 | 0;
 HEAP8[i9] = 0;
 i10 = i1 + 24 | 0;
 HEAP32[i10 >> 2] = 0;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore9DOMEditor15removeAttributeEPNS_7ElementERKN3WTF6StringEPS4_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 24 | 0;
 i8 = i5 + 32 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = __ZN7WebCore9DOMEditor15removeAttributeEPNS_7ElementERKN3WTF6StringERi(i1, i2, i3, i8) | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i5;
  return i9 | 0;
 }
 __ZN7WebCore24ExceptionCodeDescriptionC1Ei(i6, i3);
 __ZN3WTF6StringC1EPKc(i7, HEAP32[i6 + 4 >> 2] | 0);
 i6 = i7 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i7;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 | 0;
   i3 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i7 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return i9 | 0;
 }
 i6 = i4 | 0;
 i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i5;
  return i9 | 0;
 } else {
  HEAP32[i6 >> 2] = i3;
  STACKTOP = i5;
  return i9 | 0;
 }
 return 0;
}
function __ZN7WebCore9DOMEditor16replaceWholeTextEPNS_4TextERKN3WTF6StringEPS4_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 24 | 0;
 i8 = i5 + 32 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = __ZN7WebCore9DOMEditor16replaceWholeTextEPNS_4TextERKN3WTF6StringERi(i1, i2, i3, i8) | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i5;
  return i9 | 0;
 }
 __ZN7WebCore24ExceptionCodeDescriptionC1Ei(i6, i3);
 __ZN3WTF6StringC1EPKc(i7, HEAP32[i6 + 4 >> 2] | 0);
 i6 = i7 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i7;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 | 0;
   i3 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i7 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return i9 | 0;
 }
 i6 = i4 | 0;
 i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i5;
  return i9 | 0;
 } else {
  HEAP32[i6 >> 2] = i3;
  STACKTOP = i5;
  return i9 | 0;
 }
 return 0;
}
function __ZN7WebCore9DOMEditor11removeChildEPNS_4NodeES2_PN3WTF6StringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 24 | 0;
 i8 = i5 + 32 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = __ZN7WebCore9DOMEditor11removeChildEPNS_4NodeES2_Ri(i1, i2, i3, i8) | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i5;
  return i9 | 0;
 }
 __ZN7WebCore24ExceptionCodeDescriptionC1Ei(i6, i3);
 __ZN3WTF6StringC1EPKc(i7, HEAP32[i6 + 4 >> 2] | 0);
 i6 = i7 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i7;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 | 0;
   i3 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i7 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return i9 | 0;
 }
 i6 = i4 | 0;
 i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i5;
  return i9 | 0;
 } else {
  HEAP32[i6 >> 2] = i3;
  STACKTOP = i5;
  return i9 | 0;
 }
 return 0;
}
function __ZN7WebCore9DOMEditor22ReplaceChildNodeActionD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 216;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
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
 i2 = HEAP32[i1 + 12 >> 2] | 0;
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
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
 __ZN7WebCore16InspectorHistory6ActionD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore9DOMEditor17RemoveChildActionD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 552;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
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
 i2 = HEAP32[i1 + 12 >> 2] | 0;
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
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
 __ZN7WebCore16InspectorHistory6ActionD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore9DOMEditor18InsertBeforeAction4redoERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i5 >> 2] | 0) + 28 >> 2] & 63](i5, i2) | 0) {
    break;
   } else {
    i6 = 0;
   }
   STACKTOP = i3;
   return i6 | 0;
  }
 } while (0);
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i7 = HEAP32[i1 + 12 >> 2] | 0;
 i8 = i4 | 0;
 HEAP32[i8 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i9 = i7 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = __ZN7WebCore4Node12insertBeforeEN3WTF10PassRefPtrIS0_EEPS0_Ri(i5, i4, HEAP32[i1 + 16 >> 2] | 0, i2) | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = i9;
  STACKTOP = i3;
  return i6 | 0;
 }
 i8 = i2 + 8 | 0;
 i2 = i8 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  i6 = i9;
  STACKTOP = i3;
  return i6 | 0;
 }
 if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
  i6 = i9;
  STACKTOP = i3;
  return i6 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
 i6 = i9;
 STACKTOP = i3;
 return i6 | 0;
}
function __ZN7WebCore9DOMEditor21RemoveAttributeAction4redoERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i6 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i1 = i3 | 0;
   HEAP32[i1 >> 2] = 0;
   i7 = i1;
  } else {
   if ((HEAP32[i6 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i3, i6);
    i7 = i3 | 0;
    break;
   } else {
    i1 = i3 | 0;
    HEAP32[i1 >> 2] = i6;
    i8 = i6 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
    i7 = i1;
    break;
   }
  }
 } while (0);
 i6 = i4 | 0;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 __ZN7WebCore7Element15removeAttributeERKN3WTF12AtomicStringE(i5, i4);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return 1;
 }
 i6 = i4 | 0;
 i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return 1;
 } else {
  HEAP32[i6 >> 2] = i5;
  STACKTOP = i2;
  return 1;
 }
 return 0;
}
function __ZN7WebCore9DOMEditor22ReplaceWholeTextActionD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 160;
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
 __ZN7WebCore16InspectorHistory6ActionD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore9DOMEditor21RemoveAttributeActionD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 272;
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
 __ZN7WebCore16InspectorHistory6ActionD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore9DOMEditor18SetNodeValueActionD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 384;
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
 __ZN7WebCore16InspectorHistory6ActionD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore9DOMEditor22ReplaceWholeTextActionD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 160;
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
 __ZN7WebCore16InspectorHistory6ActionD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore9DOMEditor21RemoveAttributeActionD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 272;
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
 __ZN7WebCore16InspectorHistory6ActionD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore9DOMEditor18SetNodeValueActionD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 384;
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
 __ZN7WebCore16InspectorHistory6ActionD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore9DOMEditor18SetNodeValueAction7performERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 68 >> 2] & 15](i4, i5);
 i5 = i4 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 16 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i4;
 do {
  if ((i7 | 0) != 0) {
   i4 = i7 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i5 = i7 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i5 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i7 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 63](i1, i2) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore9DOMEditor22ReplaceWholeTextAction7performERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZNK7WebCore4Text9wholeTextEv(i4, HEAP32[i1 + 8 >> 2] | 0);
 i5 = i4 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 16 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i4;
 do {
  if ((i7 | 0) != 0) {
   i4 = i7 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i5 = i7 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i5 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i7 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 63](i1, i2) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore9DOMEditor22ReplaceChildNodeAction4undoERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i6 = i4 | 0;
 i7 = HEAP32[i1 + 16 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i8 = i7 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 i8 = __ZN7WebCore4Node12replaceChildEN3WTF10PassRefPtrIS0_EEPS0_Ri(i5, i4, HEAP32[i1 + 12 >> 2] | 0, i2) | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return i8 | 0;
 }
 i6 = i2 + 8 | 0;
 i2 = i6 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i3;
  return i8 | 0;
 }
 if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return i8 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
 STACKTOP = i3;
 return i8 | 0;
}
function __ZN7WebCore9DOMEditor22ReplaceChildNodeAction4redoERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i6 = i4 | 0;
 i7 = HEAP32[i1 + 12 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i8 = i7 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 i8 = __ZN7WebCore4Node12replaceChildEN3WTF10PassRefPtrIS0_EEPS0_Ri(i5, i4, HEAP32[i1 + 16 >> 2] | 0, i2) | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return i8 | 0;
 }
 i6 = i2 + 8 | 0;
 i2 = i6 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i3;
  return i8 | 0;
 }
 if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return i8 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
 STACKTOP = i3;
 return i8 | 0;
}
function __ZN7WebCore9DOMEditor17RemoveChildAction4undoERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i6 = HEAP32[i1 + 12 >> 2] | 0;
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i8 = i6 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 i8 = __ZN7WebCore4Node12insertBeforeEN3WTF10PassRefPtrIS0_EEPS0_Ri(i5, i4, HEAP32[i1 + 16 >> 2] | 0, i2) | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return i8 | 0;
 }
 i7 = i2 + 8 | 0;
 i2 = i7 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i3;
  return i8 | 0;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return i8 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i3;
 return i8 | 0;
}
function __ZN7WebCore9DOMEditor12setOuterHTMLERNS_4NodeERKN3WTF6StringEPPS1_Ri(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = __ZN3WTF10fastMallocEj(36) | 0;
 __ZN7WebCore9DOMEditor18SetOuterHTMLActionC2ERNS_4NodeERKN3WTF6StringE(i8, i2, i3);
 i3 = HEAP32[i1 >> 2] | 0;
 i1 = i7 | 0;
 HEAP32[i1 >> 2] = i8;
 i2 = __ZN7WebCore16InspectorHistory7performEN3WTF10PassOwnPtrINS0_6ActionEEERi(i3, i7, i5) | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
 }
 if (!i2) {
  STACKTOP = i6;
  return i2 | 0;
 }
 HEAP32[i4 >> 2] = HEAP32[i8 + 24 >> 2];
 STACKTOP = i6;
 return i2 | 0;
}
function __ZN7WebCore9DOMEditor12setAttributeEPNS_7ElementERKN3WTF6StringES6_Ri(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 i1 = __ZN3WTF10fastMallocEj(28) | 0;
 __ZN7WebCore9DOMEditor18SetAttributeActionC2EPNS_7ElementERKN3WTF6StringES7_(i1, i2, i3, i4);
 i4 = i7 | 0;
 HEAP32[i4 >> 2] = i1;
 i1 = __ZN7WebCore16InspectorHistory7performEN3WTF10PassOwnPtrINS0_6ActionEEERi(i8, i7, i5) | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i6;
  return i1 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
 STACKTOP = i6;
 return i1 | 0;
}
function __ZN7WebCore9DOMEditor17RemoveChildAction7performERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[(HEAP32[i1 + 12 >> 2] | 0) + 28 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 + 16 | 0;
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
 return FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 63](i1, i2) | 0;
}
function __ZN7WebCore9DOMEditor22ReplaceWholeTextAction4undoERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN7WebCore4Text16replaceWholeTextERKN3WTF6StringERi(i4, HEAP32[i1 + 8 >> 2] | 0, i1 + 16 | 0, i2);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return 1;
 }
 i4 = i2 + 8 | 0;
 i2 = i4 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i3;
  return 1;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return 1;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i3;
 return 1;
}
function __ZN7WebCore9DOMEditor22ReplaceWholeTextAction4redoERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN7WebCore4Text16replaceWholeTextERKN3WTF6StringERi(i4, HEAP32[i1 + 8 >> 2] | 0, i1 + 12 | 0, i2);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return 1;
 }
 i4 = i2 + 8 | 0;
 i2 = i4 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i3;
  return 1;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return 1;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i3;
 return 1;
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
function __ZN7WebCore9DOMEditor18InsertBeforeAction4undoERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if (!(__ZN7WebCore4Node11removeChildEPS0_Ri(HEAP32[i1 + 8 >> 2] | 0, HEAP32[i1 + 12 >> 2] | 0, i2) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i4 >> 2] | 0) + 24 >> 2] & 63](i4, i2) | 0;
 return i3 | 0;
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
function __ZN7WebCore9DOMEditor18SetNodeValueAction4undoERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i3 >> 2] | 0) + 72 >> 2] & 1](i3, i1 + 16 | 0, i2);
 return (HEAP32[i2 >> 2] | 0) == 0 | 0;
}
function __ZN7WebCore9DOMEditor18SetNodeValueAction4redoERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i3 >> 2] | 0) + 72 >> 2] & 1](i3, i1 + 12 | 0, i2);
 return (HEAP32[i2 >> 2] | 0) == 0 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function vii___ZN7WebCore16InspectorHistory6Action5mergeEN3WTF10PassOwnPtrIS1_EE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore16InspectorHistory6Action5mergeEN3WTF10PassOwnPtrIS1_EE(i1 | 0, i2 | 0);
}
function __ZN7WebCore9DOMEditor17RemoveChildAction4redoERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore4Node11removeChildEPS0_Ri(HEAP32[i1 + 8 >> 2] | 0, HEAP32[i1 + 12 >> 2] | 0, i2) | 0;
}
function __ZN7WebCore9DOMEditor22ReplaceChildNodeAction7performERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 63](i1, i2) | 0;
}
function ii___ZN7WebCore16InspectorHistory6Action19isUndoableStateMarkEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore16InspectorHistory6Action19isUndoableStateMarkEv(i1 | 0) | 0;
}
function __ZN7WebCore9DOMEditor18SetOuterHTMLAction4undoERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore16InspectorHistory4undoERi(HEAP32[i1 + 28 >> 2] | 0, i2) | 0;
}
function __ZN7WebCore9DOMEditor18SetOuterHTMLAction4redoERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore16InspectorHistory4redoERi(HEAP32[i1 + 28 >> 2] | 0, i2) | 0;
}
function vii___ZN7WebCore16InspectorHistory6Action8toStringEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore16InspectorHistory6Action8toStringEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore16InspectorHistory6Action7mergeIdEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore16InspectorHistory6Action7mergeIdEv(i1 | 0, i2 | 0);
}
function __ZN7WebCore9DOMEditor18SetOuterHTMLActionD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9DOMEditor18SetOuterHTMLActionD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore9DOMEditor18SetAttributeActionD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9DOMEditor18SetAttributeActionD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore9DOMEditor18InsertBeforeActionD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9DOMEditor18InsertBeforeActionD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 1](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore9DOMEditor18SetOuterHTMLActionD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9DOMEditor18SetOuterHTMLActionD2Ev(i1);
 return;
}
function __ZN7WebCore9DOMEditor18SetAttributeActionD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9DOMEditor18SetAttributeActionD2Ev(i1);
 return;
}
function __ZN7WebCore9DOMEditor18InsertBeforeActionD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9DOMEditor18InsertBeforeActionD2Ev(i1);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 63](i2 | 0, i3 | 0) | 0;
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
function __ZN7WebCore9DOMEditorC2EPNS_16InspectorHistoryE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore9DOMEditorC1EPNS_16InspectorHistoryE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
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
 FUNCTION_TABLE_vii[i1 & 15](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 3](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
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
function __ZN7WebCore9DOMEditorD2Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore9DOMEditorD1Ev(i1) {
 i1 = i1 | 0;
 return;
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore9DOMEditor18SetAttributeActionD0Ev,b0,__ZN7WebCore9DOMEditor18InsertBeforeActionD0Ev,b0,__ZN7WebCore9DOMEditor17RemoveChildActionD1Ev,b0,__ZN7WebCore9DOMEditorD2Ev,b0,__ZN7WebCore9DOMEditor18SetAttributeActionD1Ev,b0,__ZN7WebCore9DOMEditor21RemoveAttributeActionD0Ev,b0,__ZN7WebCore9DOMEditor22ReplaceChildNodeActionD1Ev,b0,__ZN7WebCore9DOMEditor17RemoveChildActionD0Ev,b0,__ZN7WebCore9DOMEditor22ReplaceChildNodeActionD0Ev,b0,__ZN7WebCore9DOMEditor18SetNodeValueActionD1Ev,b0,__ZN7WebCore9DOMEditor21RemoveAttributeActionD1Ev,b0,__ZN7WebCore9DOMEditor22ReplaceWholeTextActionD0Ev,b0,__ZN7WebCore9DOMEditor22ReplaceWholeTextActionD1Ev,b0,__ZN7WebCore9DOMEditor18SetOuterHTMLActionD1Ev
  ,b0,__ZN7WebCore9DOMEditor18InsertBeforeActionD1Ev,b0,__ZN7WebCore9DOMEditor18SetOuterHTMLActionD0Ev,b0,__ZN7WebCore9DOMEditor18SetNodeValueActionD0Ev,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,vii___ZN7WebCore16InspectorHistory6Action7mergeIdEv__wrapper,b1,vii___ZN7WebCore16InspectorHistory6Action8toStringEv__wrapper,b1,__ZN7WebCore9DOMEditorC2EPNS_16InspectorHistoryE,b1,vii___ZN7WebCore16InspectorHistory6Action5mergeEN3WTF10PassOwnPtrIS1_EE__wrapper,b1,b1,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2,ii___ZN7WebCore16InspectorHistory6Action19isUndoableStateMarkEv__wrapper,b2];
  var FUNCTION_TABLE_viii = [b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5,__ZN7WebCore9DOMEditor18SetOuterHTMLAction7performERi,b5,__ZN7WebCore9DOMEditor18SetNodeValueAction4redoERi,b5,__ZN7WebCore9DOMEditor22ReplaceChildNodeAction7performERi,b5,__ZN7WebCore9DOMEditor18InsertBeforeAction4redoERi,b5,__ZN7WebCore9DOMEditor21RemoveAttributeAction4redoERi,b5,__ZN7WebCore9DOMEditor17RemoveChildAction4undoERi,b5,__ZN7WebCore9DOMEditor22ReplaceChildNodeAction4redoERi,b5,__ZN7WebCore9DOMEditor22ReplaceWholeTextAction4undoERi,b5,__ZN7WebCore9DOMEditor22ReplaceChildNodeAction4undoERi,b5,__ZN7WebCore9DOMEditor18SetNodeValueAction7performERi,b5,__ZN7WebCore9DOMEditor17RemoveChildAction7performERi,b5,__ZN7WebCore9DOMEditor18SetAttributeAction4redoERi,b5,__ZN7WebCore9DOMEditor22ReplaceWholeTextAction7performERi,b5,__ZN7WebCore9DOMEditor18SetNodeValueAction4undoERi
  ,b5,__ZN7WebCore9DOMEditor22ReplaceWholeTextAction4redoERi,b5,__ZN7WebCore9DOMEditor18SetAttributeAction7performERi,b5,__ZN7WebCore9DOMEditor18InsertBeforeAction7performERi,b5,__ZN7WebCore9DOMEditor18SetAttributeAction4undoERi,b5,__ZN7WebCore9DOMEditor18InsertBeforeAction4undoERi,b5,__ZN7WebCore9DOMEditor18SetOuterHTMLAction4redoERi,b5,__ZN7WebCore9DOMEditor21RemoveAttributeAction4undoERi,b5,__ZN7WebCore9DOMEditor21RemoveAttributeAction7performERi,b5,__ZN7WebCore9DOMEditor18SetOuterHTMLAction4undoERi,b5,__ZN7WebCore9DOMEditor17RemoveChildAction4redoERi,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5,b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore9DOMEditor18SetAttributeActionD0Ev","__ZN7WebCore9DOMEditor21RemoveAttributeAction4undoERi","__ZN7WebCore9DOMEditor18InsertBeforeActionD0Ev","__ZN7WebCore9DOMEditor17RemoveChildActionD1Ev","__ZN7WebCore9DOMEditor12setOuterHTMLERNS_4NodeERKN3WTF6StringEPPS1_Ri","__ZN7WebCore9DOMEditorD2Ev","__ZN7WebCore9DOMEditor11removeChildEPNS_4NodeES2_PN3WTF6StringE","__ZN7WebCore9DOMEditor18SetAttributeActionD1Ev","__ZN7WebCore9DOMEditor18SetOuterHTMLAction7performERi","__ZN7WebCore9DOMEditor18SetNodeValueAction4redoERi","__ZN7WebCore9DOMEditor12setAttributeEPNS_7ElementERKN3WTF6StringES6_PS4_","__ZN7WebCore9DOMEditor17RemoveChildAction7performERi","__ZN7WebCore9DOMEditor17RemoveChildAction4undoERi","__ZN7WebCore9DOMEditor12setOuterHTMLERNS_4NodeERKN3WTF6StringEPPS1_PS4_","__ZN7WebCore9DOMEditor16replaceWholeTextEPNS_4TextERKN3WTF6StringERi","__ZN7WebCore9DOMEditor22ReplaceChildNodeActionD1Ev","__ZN7WebCore9DOMEditor22ReplaceChildNodeAction4redoERi","__ZN7WebCore9DOMEditor22ReplaceChildNodeAction7performERi","__ZN7WebCore9DOMEditor22ReplaceChildNodeActionD0Ev","__ZN7WebCore9DOMEditor18InsertBeforeAction7performERi","__ZN7WebCore9DOMEditor18InsertBeforeAction4redoERi","__ZN7WebCore9DOMEditor21RemoveAttributeAction4redoERi","_memset","__ZN7WebCore9DOMEditor18SetNodeValueActionD0Ev","_memcpy","__ZN7WebCore9DOMEditor22ReplaceWholeTextAction4undoERi","__ZN7WebCore9DOMEditor11removeChildEPNS_4NodeES2_Ri","__ZN7WebCore9DOMEditor18SetAttributeAction4redoERi","__ZN7WebCore9DOMEditor18SetAttributeActionD2Ev","__ZN7WebCore9DOMEditor18SetAttributeAction4undoERi","__ZN7WebCore9DOMEditor12insertBeforeEPNS_4NodeEN3WTF10PassRefPtrIS1_EES2_PNS3_6StringE","__ZN7WebCore9DOMEditor15removeAttributeEPNS_7ElementERKN3WTF6StringERi","__ZN7WebCore9DOMEditor16replaceWholeTextEPNS_4TextERKN3WTF6StringEPS4_","__ZN7WebCore9DOMEditor22ReplaceChildNodeAction4undoERi","__ZN7WebCore9DOMEditor18SetNodeValueAction7performERi","__ZN7WebCore9DOMEditor21RemoveAttributeActionD0Ev","__ZN7WebCore9DOMEditor12insertBeforeEPNS_4NodeEN3WTF10PassRefPtrIS1_EES2_Ri","__ZN7WebCore9DOMEditor22ReplaceWholeTextActionD1Ev","__ZN7WebCore9DOMEditor22ReplaceWholeTextAction7performERi","__ZN7WebCore9DOMEditor18SetNodeValueAction4undoERi","__ZN7WebCore9DOMEditor21RemoveAttributeActionD1Ev","__ZN7WebCore9DOMEditor18SetOuterHTMLActionD2Ev","__ZN7WebCore9DOMEditorC2EPNS_16InspectorHistoryE","__ZN7WebCore9DOMEditor18SetAttributeAction7performERi","__ZN7WebCore9DOMEditor22ReplaceWholeTextActionD0Ev","__ZN7WebCore9DOMEditor12setAttributeEPNS_7ElementERKN3WTF6StringES6_Ri","__ZN7WebCore9DOMEditor18SetOuterHTMLActionC2ERNS_4NodeERKN3WTF6StringE","__ZN7WebCore9DOMEditor18SetNodeValueActionD1Ev","__ZN7WebCore9DOMEditor18SetOuterHTMLActionD1Ev","__ZN7WebCore9DOMEditor18InsertBeforeAction4undoERi","__ZN7WebCore9DOMEditor18SetOuterHTMLAction4redoERi","__ZN7WebCore9DOMEditor22ReplaceWholeTextAction4redoERi","__ZN7WebCore9DOMEditor15removeAttributeEPNS_7ElementERKN3WTF6StringEPS4_","__ZN7WebCore9DOMEditor21RemoveAttributeAction7performERi","__ZN7WebCore9DOMEditor18SetOuterHTMLAction4undoERi","__ZN7WebCore9DOMEditor12setNodeValueEPNS_4NodeERKN3WTF6StringERi","__ZN7WebCore9DOMEditor17RemoveChildAction4redoERi","__ZN7WebCore9DOMEditor18SetAttributeActionC2EPNS_7ElementERKN3WTF6StringES7_","__ZN7WebCore9DOMEditor18InsertBeforeActionD2Ev","__ZN7WebCore9DOMEditor18InsertBeforeActionD1Ev","__ZN7WebCore9DOMEditor18SetOuterHTMLActionD0Ev","__ZN7WebCore9DOMEditor17RemoveChildActionD0Ev","__ZN7WebCore9DOMEditor12replaceChildEPNS_4NodeEN3WTF10PassRefPtrIS1_EES2_Ri"]

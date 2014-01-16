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
H_BASE = parentModule["_malloc"](280 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 280;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore4AttrC1EPNS_7ElementERKNS_13QualifiedNameE;
var __ZN7WebCore4AttrC1ERNS_8DocumentERKNS_13QualifiedNameERKN3WTF12AtomicStringE;
var __ZN7WebCore4AttrD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
  var __ZTVN7WebCore4NodeE=env.__ZTVN7WebCore4NodeE|0;
  var __ZN3WTF9emptyAtomE=env.__ZN3WTF9emptyAtomE|0;
  var __ZN3WTF9xmlnsAtomE=env.__ZN3WTF9xmlnsAtomE|0;
  var __ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE=env.__ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZN7WebCore17InspectorCounters10s_countersE=env.__ZN7WebCore17InspectorCounters10s_countersE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore4AttrE=(H_BASE+8)|0;
  var __ZGVZN7WebCore9TreeScope18noDocumentInstanceEvE8instance=(H_BASE+280)|0;
  var __ZZN7WebCore9TreeScope18noDocumentInstanceEvE8instance=(H_BASE+272)|0;
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
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
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
function __ZN7WebCore4Attr15childrenChangedERKNS_13ContainerNode11ChildChangeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 24 | 0;
 if ((HEAP32[i1 + 60 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i1 + 48 | 0;
 i6 = i1 + 44 | 0;
 __ZN7WebCore4Node48invalidateNodeListAndCollectionCachesInAncestorsEPKNS_13QualifiedNameEPNS_7ElementE(i1 | 0, i5, HEAP32[i6 >> 2] | 0);
 HEAP32[i3 >> 2] = 0;
 i7 = i3 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i3 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP8[i3 + 12 | 0] = 1;
 HEAP32[i3 + 16 >> 2] = 0;
 HEAP32[i3 + 20 >> 2] = 0;
 __ZN7WebCore17TextNodeTraversal14appendContentsEPKNS_13ContainerNodeERN3WTF13StringBuilderE(i1 | 0, i3);
 __ZNK3WTF13StringBuilder14toAtomicStringEv(i4, i3);
 i3 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i9 = 13;
  } else {
   __ZN7WebCore7Element19willModifyAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringES7_(i3, i5, __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i3, i5) | 0, i4);
   i10 = HEAP32[i6 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i9 = 13;
    break;
   }
   i11 = i10 + 48 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i9 = 6;
   } else {
    if ((HEAP32[i12 + 4 >> 2] & 1 | 0) == 0) {
     i9 = 6;
    } else {
     i13 = i12;
    }
   }
   if ((i9 | 0) == 6) {
    __ZN7WebCore7Element23createUniqueElementDataEv(i10);
    i13 = HEAP32[i11 >> 2] | 0;
   }
   i11 = __ZN7WebCore17UniqueElementData19findAttributeByNameERKNS_13QualifiedNameE(i13, i5) | 0;
   i10 = HEAP32[i4 >> 2] | 0;
   if ((i10 | 0) != 0) {
    i12 = i10 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
   }
   i12 = i11 + 4 | 0;
   i11 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i10;
   if ((i11 | 0) == 0) {
    break;
   }
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
 do {
  if ((i9 | 0) == 13) {
   i13 = HEAP32[i4 >> 2] | 0;
   if ((i13 | 0) != 0) {
    i3 = i13 | 0;
    HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
   }
   i3 = i1 + 52 | 0;
   i12 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i13;
   if ((i12 | 0) == 0) {
    break;
   }
   i13 = i12 | 0;
   i3 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i13 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) != 0) {
  FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 308 >> 2] & 3](i1, i5, i4, 0);
 }
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 | 0;
   i1 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i8 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = i5 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i7 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_iii + 4;
}
function __ZN7WebCore4Attr9setPrefixERKN3WTF12AtomicStringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 HEAP32[i3 >> 2] = 0;
 __ZN7WebCore4Node14checkSetPrefixERKN3WTF12AtomicStringERi(i1 | 0, i2, i3);
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 i7 = HEAP32[i2 >> 2] | 0;
 i8 = HEAP32[__ZN3WTF9xmlnsAtomE >> 2] | 0;
 do {
  if ((i7 | 0) == (i8 | 0)) {
   i9 = HEAP32[i1 + 48 >> 2] | 0;
   if ((HEAP32[i9 + 16 >> 2] | 0) != (HEAP32[__ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE >> 2] | 0)) {
    break;
   }
   i10 = i1 + 48 | 0;
   i11 = i9;
   i12 = i10;
   i13 = i10 | 0;
   i14 = 6;
  } else {
   i10 = i1 + 48 | 0;
   i9 = i10 | 0;
   i11 = HEAP32[i9 >> 2] | 0;
   i12 = i10;
   i13 = i9;
   i14 = 6;
  }
 } while (0);
 do {
  if ((i14 | 0) == 6) {
   if ((i8 | 0) == (HEAP32[i11 + 12 >> 2] | 0)) {
    break;
   }
   if ((i7 | 0) == 0) {
    i15 = __ZN3WTF8nullAtomE;
   } else {
    i15 = (HEAP32[i7 + 4 >> 2] | 0) == 0 ? __ZN3WTF8nullAtomE : i2;
   }
   i9 = HEAP32[i1 + 44 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i16 = i11;
   } else {
    i10 = i9 + 48 | 0;
    i17 = HEAP32[i10 >> 2] | 0;
    if ((i17 | 0) == 0) {
     i14 = 13;
    } else {
     if ((HEAP32[i17 + 4 >> 2] & 1 | 0) == 0) {
      i14 = 13;
     } else {
      i18 = i17;
     }
    }
    if ((i14 | 0) == 13) {
     __ZN7WebCore7Element23createUniqueElementDataEv(i9);
     i18 = HEAP32[i10 >> 2] | 0;
    }
    i10 = __ZN7WebCore17UniqueElementData19findAttributeByNameERKNS_13QualifiedNameE(i18, i12) | 0;
    i9 = i10 | 0;
    i17 = HEAP32[i9 >> 2] | 0;
    __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i5, i15, i17 + 12 | 0, i17 + 16 | 0);
    i17 = i5 | 0;
    i19 = HEAP32[i17 >> 2] | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
    __ZN7WebCore13QualifiedName5derefEv(i10 | 0);
    HEAP32[i9 >> 2] = HEAP32[i17 >> 2];
    __ZN7WebCore13QualifiedNameD1Ev(i5);
    i16 = HEAP32[i13 >> 2] | 0;
   }
   __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i6, i15, i16 + 12 | 0, i16 + 16 | 0);
   i17 = i6 | 0;
   i9 = HEAP32[i17 >> 2] | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   __ZN7WebCore13QualifiedName5derefEv(i12);
   HEAP32[i13 >> 2] = HEAP32[i17 >> 2];
   __ZN7WebCore13QualifiedNameD1Ev(i6);
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP32[i3 >> 2] = 14;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore4Attr8setValueERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 __ZN7WebCore16ScopedEventQueue21incrementScopingLevelEv(__ZN7WebCore16ScopedEventQueue8instanceEv() | 0);
 i3 = i1 + 60 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 __ZN7WebCore13ContainerNode14removeChildrenEv(i1 | 0);
 i4 = i1 + 44 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i6 = HEAP32[i2 >> 2] | 0;
   if ((i6 | 0) != 0) {
    i7 = i6 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
   }
   i7 = i1 + 52 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i6;
   if ((i8 | 0) == 0) {
    break;
   }
   i6 = i8 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  } else {
   i7 = i5 + 48 | 0;
   i6 = HEAP32[i7 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i9 = 4;
   } else {
    if ((HEAP32[i6 + 4 >> 2] & 1 | 0) == 0) {
     i9 = 4;
    } else {
     i10 = i6;
    }
   }
   if ((i9 | 0) == 4) {
    __ZN7WebCore7Element23createUniqueElementDataEv(i5);
    i10 = HEAP32[i7 >> 2] | 0;
   }
   i7 = __ZN7WebCore17UniqueElementData19findAttributeByNameERKNS_13QualifiedNameE(i10, i1 + 48 | 0) | 0;
   i6 = HEAP32[i2 >> 2] | 0;
   if ((i6 | 0) != 0) {
    i8 = i6 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   }
   i8 = i7 + 4 | 0;
   i7 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i6;
   if ((i7 | 0) == 0) {
    break;
   }
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
 __ZN7WebCore4Attr15createTextChildEv(i1);
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - 1;
 __ZN7WebCore4Node48invalidateNodeListAndCollectionCachesInAncestorsEPKNS_13QualifiedNameEPNS_7ElementE(i1 | 0, i1 + 48 | 0, HEAP32[i4 >> 2] | 0);
 __ZN7WebCore16ScopedEventQueue21decrementScopingLevelEv(__ZN7WebCore16ScopedEventQueue8instanceEv() | 0);
 return;
}
function __ZNK3WTF13StringBuilder14toAtomicStringEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i2 | 0;
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  i9 = HEAP32[__ZN3WTF9emptyAtomE >> 2] | 0;
  HEAP32[i1 >> 2] = i9;
  if ((i9 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i10 = i9 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
  STACKTOP = i3;
  return;
 }
 if (!(__ZNK3WTF13StringBuilder9canShrinkEv(i2) | 0)) {
  i10 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i10 | 0) == 0) {
   __ZN3WTF12AtomicString3addEPNS_10StringImplEjj(i7, HEAP32[i2 + 8 >> 2] | 0, 0, HEAP32[i8 >> 2] | 0);
   HEAP32[i1 >> 2] = HEAP32[i7 >> 2];
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i10 + 16 >> 2] & 16 | 0) == 0) {
   __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i6, i10);
   i11 = i6 | 0;
  } else {
   i7 = i6 | 0;
   HEAP32[i7 >> 2] = i10;
   i6 = i10 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   i11 = i7;
  }
  HEAP32[i1 >> 2] = HEAP32[i11 >> 2];
  STACKTOP = i3;
  return;
 }
 i11 = HEAP32[i8 >> 2] | 0;
 i8 = (i11 | 0) == 0;
 if ((HEAP8[i2 + 12 | 0] & 1) == 0) {
  do {
   if (i8) {
    i12 = 0;
   } else {
    i7 = HEAP32[i2 + 4 >> 2] | 0;
    if ((i7 | 0) == 0) {
     i12 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 8 >> 2] | 0;
     break;
    } else {
     i12 = HEAP32[i7 + 8 >> 2] | 0;
     break;
    }
   }
  } while (0);
  __ZN3WTF12AtomicString3addEPKtj(i5, i12, i11);
  HEAP32[i1 >> 2] = HEAP32[i5 >> 2];
  STACKTOP = i3;
  return;
 } else {
  do {
   if (i8) {
    i13 = 0;
   } else {
    i5 = HEAP32[i2 + 4 >> 2] | 0;
    if ((i5 | 0) == 0) {
     i13 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 8 >> 2] | 0;
     break;
    } else {
     i13 = HEAP32[i5 + 8 >> 2] | 0;
     break;
    }
   }
  } while (0);
  __ZN3WTF12AtomicString3addEPKhj(i4, i13, i11);
  HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore4AttrC2ERNS_8DocumentERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = i1 | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 1;
 HEAP32[i5 >> 2] = __ZTVN7WebCore4NodeE + 8;
 HEAP32[i1 + 12 >> 2] = 8194;
 HEAP32[i1 + 16 >> 2] = 0;
 i6 = i1 + 20 | 0;
 do {
  if ((i2 | 0) == 0) {
   if ((HEAP8[H_BASE + 280 | 0] | 0) == 0) {
    i7 = __Znwj(44) | 0;
    __ZN7WebCore9TreeScopeC1Ev(i7);
    HEAP32[H_BASE + 272 >> 2] = i7;
    HEAP32[H_BASE + 280 >> 2] = 1;
    HEAP32[H_BASE + 284 >> 2] = 0;
    i8 = i7;
    break;
   } else {
    i8 = HEAP32[H_BASE + 272 >> 2] | 0;
    break;
   }
  } else {
   i8 = i2 + 44 | 0;
  }
 } while (0);
 HEAP32[i6 >> 2] = i8;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = 0;
 i6 = i8 + 16 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] = (HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] | 0) + 1;
 HEAP32[i1 + 36 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = 0;
 HEAP32[i5 >> 2] = H_BASE + 16;
 HEAP32[i1 + 44 >> 2] = 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 48 >> 2] = i5;
 i3 = i5 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 + 52 >> 2] = i3;
 if ((i3 | 0) == 0) {
  i9 = i1 + 56 | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i1 + 60 | 0;
  HEAP32[i10 >> 2] = 0;
  return;
 }
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 i9 = i1 + 56 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i1 + 60 | 0;
 HEAP32[i10 >> 2] = 0;
 return;
}
function __ZN7WebCore4AttrC1ERNS_8DocumentERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = i1 | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 1;
 HEAP32[i5 >> 2] = __ZTVN7WebCore4NodeE + 8;
 HEAP32[i1 + 12 >> 2] = 8194;
 HEAP32[i1 + 16 >> 2] = 0;
 i6 = i1 + 20 | 0;
 do {
  if ((i2 | 0) == 0) {
   if ((HEAP8[H_BASE + 280 | 0] | 0) == 0) {
    i7 = __Znwj(44) | 0;
    __ZN7WebCore9TreeScopeC1Ev(i7);
    HEAP32[H_BASE + 272 >> 2] = i7;
    HEAP32[H_BASE + 280 >> 2] = 1;
    HEAP32[H_BASE + 284 >> 2] = 0;
    i8 = i7;
    break;
   } else {
    i8 = HEAP32[H_BASE + 272 >> 2] | 0;
    break;
   }
  } else {
   i8 = i2 + 44 | 0;
  }
 } while (0);
 HEAP32[i6 >> 2] = i8;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = 0;
 i6 = i8 + 16 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] = (HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] | 0) + 1;
 HEAP32[i1 + 36 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = 0;
 HEAP32[i5 >> 2] = H_BASE + 16;
 HEAP32[i1 + 44 >> 2] = 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 48 >> 2] = i5;
 i3 = i5 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 + 52 >> 2] = i3;
 if ((i3 | 0) == 0) {
  i9 = i1 + 56 | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i1 + 60 | 0;
  HEAP32[i10 >> 2] = 0;
  return;
 }
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 i9 = i1 + 56 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i1 + 60 | 0;
 HEAP32[i10 >> 2] = 0;
 return;
}
function __ZN7WebCore4Attr6createEPNS_7ElementERKNS_13QualifiedNameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = __Znwj(64) | 0;
 i5 = i4;
 i6 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i7 = i4;
 HEAP32[i4 + 4 >> 2] = 0;
 HEAP32[i4 + 8 >> 2] = 1;
 HEAP32[i7 >> 2] = __ZTVN7WebCore4NodeE + 8;
 HEAP32[i4 + 12 >> 2] = 8194;
 HEAP32[i4 + 16 >> 2] = 0;
 i8 = i4 + 20 | 0;
 do {
  if ((i6 | 0) == 0) {
   if ((HEAP8[H_BASE + 280 | 0] | 0) == 0) {
    i9 = __Znwj(44) | 0;
    __ZN7WebCore9TreeScopeC1Ev(i9);
    HEAP32[H_BASE + 272 >> 2] = i9;
    HEAP32[H_BASE + 280 >> 2] = 1;
    HEAP32[H_BASE + 284 >> 2] = 0;
    i10 = i9;
    break;
   } else {
    i10 = HEAP32[H_BASE + 272 >> 2] | 0;
    break;
   }
  } else {
   i10 = i6 + 44 | 0;
  }
 } while (0);
 HEAP32[i8 >> 2] = i10;
 HEAP32[i4 + 24 >> 2] = 0;
 HEAP32[i4 + 28 >> 2] = 0;
 HEAP32[i4 + 32 >> 2] = 0;
 i8 = i10 + 16 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] = (HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] | 0) + 1;
 HEAP32[i4 + 36 >> 2] = 0;
 HEAP32[i4 + 40 >> 2] = 0;
 HEAP32[i7 >> 2] = H_BASE + 16;
 HEAP32[i4 + 44 >> 2] = i2;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i4 + 48 >> 2] = i2;
 i3 = i2 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 HEAP32[i4 + 52 >> 2] = 0;
 HEAP32[i4 + 56 >> 2] = 0;
 HEAP32[i4 + 60 >> 2] = 0;
 __ZN7WebCore4Attr15createTextChildEv(i5);
 HEAP32[i1 >> 2] = i5;
 return;
}
function __ZN7WebCore4Attr12setNodeValueERKN3WTF6StringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i2 = i4 | 0;
   HEAP32[i2 >> 2] = 0;
   i7 = i2;
  } else {
   if ((HEAP32[i6 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i6);
    i7 = i4 | 0;
    break;
   } else {
    i2 = i4 | 0;
    HEAP32[i2 >> 2] = i6;
    i8 = i6 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
    i7 = i2;
    break;
   }
  }
 } while (0);
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 i7 = i1 + 44 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i2 = i1 + 48 | 0;
  __ZN7WebCore7Element19willModifyAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringES7_(i4, i2, __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i4, i2) | 0, i5);
 }
 __ZN7WebCore4Attr8setValueERKN3WTF12AtomicStringE(i1, i5);
 i2 = HEAP32[i7 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore7Element18didModifyAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i2, i1 + 48 | 0, i5);
 }
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i5 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i6 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore4AttrC2EPNS_7ElementERKNS_13QualifiedNameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i5 = i1 | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 1;
 HEAP32[i5 >> 2] = __ZTVN7WebCore4NodeE + 8;
 HEAP32[i1 + 12 >> 2] = 8194;
 HEAP32[i1 + 16 >> 2] = 0;
 i6 = i1 + 20 | 0;
 do {
  if ((i4 | 0) == 0) {
   if ((HEAP8[H_BASE + 280 | 0] | 0) == 0) {
    i7 = __Znwj(44) | 0;
    __ZN7WebCore9TreeScopeC1Ev(i7);
    HEAP32[H_BASE + 272 >> 2] = i7;
    HEAP32[H_BASE + 280 >> 2] = 1;
    HEAP32[H_BASE + 284 >> 2] = 0;
    i8 = i7;
    break;
   } else {
    i8 = HEAP32[H_BASE + 272 >> 2] | 0;
    break;
   }
  } else {
   i8 = i4 + 44 | 0;
  }
 } while (0);
 HEAP32[i6 >> 2] = i8;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = 0;
 i6 = i8 + 16 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] = (HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] | 0) + 1;
 HEAP32[i1 + 36 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = 0;
 HEAP32[i5 >> 2] = H_BASE + 16;
 HEAP32[i1 + 44 >> 2] = i2;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 48 >> 2] = i2;
 i3 = i2 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 HEAP32[i1 + 52 >> 2] = 0;
 HEAP32[i1 + 56 >> 2] = 0;
 HEAP32[i1 + 60 >> 2] = 0;
 return;
}
function __ZN7WebCore4AttrC1EPNS_7ElementERKNS_13QualifiedNameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i5 = i1 | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 1;
 HEAP32[i5 >> 2] = __ZTVN7WebCore4NodeE + 8;
 HEAP32[i1 + 12 >> 2] = 8194;
 HEAP32[i1 + 16 >> 2] = 0;
 i6 = i1 + 20 | 0;
 do {
  if ((i4 | 0) == 0) {
   if ((HEAP8[H_BASE + 280 | 0] | 0) == 0) {
    i7 = __Znwj(44) | 0;
    __ZN7WebCore9TreeScopeC1Ev(i7);
    HEAP32[H_BASE + 272 >> 2] = i7;
    HEAP32[H_BASE + 280 >> 2] = 1;
    HEAP32[H_BASE + 284 >> 2] = 0;
    i8 = i7;
    break;
   } else {
    i8 = HEAP32[H_BASE + 272 >> 2] | 0;
    break;
   }
  } else {
   i8 = i4 + 44 | 0;
  }
 } while (0);
 HEAP32[i6 >> 2] = i8;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = 0;
 i6 = i8 + 16 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] = (HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] | 0) + 1;
 HEAP32[i1 + 36 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = 0;
 HEAP32[i5 >> 2] = H_BASE + 16;
 HEAP32[i1 + 44 >> 2] = i2;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 48 >> 2] = i2;
 i3 = i2 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 HEAP32[i1 + 52 >> 2] = 0;
 HEAP32[i1 + 56 >> 2] = 0;
 HEAP32[i1 + 60 >> 2] = 0;
 return;
}
function __ZN7WebCore4Attr5styleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 44 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 if ((HEAP32[i5 + 12 >> 2] & 8 | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 __ZN7WebCore22MutableStyleProperties6createENS_13CSSParserModeE(i3, 0);
 i5 = i1 + 56 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 do {
  if ((i7 | 0) != 0) {
   i3 = i7 | 0;
   i8 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i3 >> 2] = i8;
    break;
   }
   if ((HEAP32[i7 + 4 >> 2] & 4 | 0) == 0) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i4 >> 2] | 0;
 i4 = HEAP32[(HEAP32[i7 >> 2] | 0) + 568 >> 2] | 0;
 i8 = i1 + 48 | 0;
 if ((i7 | 0) == 0) {
  i9 = i1 + 52 | 0;
 } else {
  i9 = __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i7, i8) | 0;
 }
 FUNCTION_TABLE_viiii[i4 & 3](i7, i8, i9, HEAP32[i5 >> 2] | 0);
 i6 = __ZN7WebCore22MutableStyleProperties25ensureCSSStyleDeclarationEv(HEAP32[i5 >> 2] | 0) | 0;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZN7WebCore4Attr15createTextChildEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 44 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = i1 + 52 | 0;
 } else {
  i6 = __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i5, i1 + 48 | 0) | 0;
 }
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i5 + 4 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = i1 + 52 | 0;
 } else {
  i7 = __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i6, i1 + 48 | 0) | 0;
 }
 __ZN7WebCore8Document14createTextNodeERKN3WTF6StringE(i3, i5, i7 | 0);
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = i3 | 0;
 HEAP32[i3 + 16 >> 2] = i1;
 HEAP32[i1 + 36 >> 2] = i7;
 HEAP32[i1 + 40 >> 2] = i7;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = i3 + 8 | 0;
 i3 = i7 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore4AttrD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 56 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = i4;
    break;
   }
   if ((HEAP32[i2 + 4 >> 2] & 4 | 0) == 0) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 52 >> 2] | 0;
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
 __ZN7WebCore13QualifiedNameD1Ev(i1 + 48 | 0);
 __ZN7WebCore13ContainerNodeD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore4AttrD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 56 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = i4;
    break;
   }
   if ((HEAP32[i2 + 4 >> 2] & 4 | 0) == 0) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 52 >> 2] | 0;
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
 __ZN7WebCore13QualifiedNameD1Ev(i1 + 48 | 0);
 __ZN7WebCore13ContainerNodeD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore4Attr8setValueERKN3WTF12AtomicStringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i3 = i1 + 44 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i5 = i1 + 48 | 0;
  __ZN7WebCore7Element19willModifyAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringES7_(i4, i5, __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i4, i5) | 0, i2);
 }
 __ZN7WebCore4Attr8setValueERKN3WTF12AtomicStringE(i1, i2);
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 __ZN7WebCore7Element18didModifyAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i5, i1 + 48 | 0, i2);
 return;
}
function __ZN7WebCore4Attr26detachFromElementWithValueERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i2 = i3 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i1 + 52 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 | 0;
   i2 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i1 + 44 >> 2] = 0;
 return;
}
function __ZN7WebCore4Attr9cloneNodeEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = __Znwj(64) | 0;
 i4 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i5 = i2 + 48 | 0;
 i6 = HEAP32[i2 + 44 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = i2 + 52 | 0;
 } else {
  i7 = __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i6, i5) | 0;
 }
 __ZN7WebCore4AttrC2ERNS_8DocumentERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i3, i4, i5, i7);
 __ZN7WebCore13ContainerNode15cloneChildNodesEPS0_(i2 | 0, i3);
 HEAP32[i1 >> 2] = i3;
 return;
}
function __ZN7WebCore4Attr15attachToElementEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 + 44 >> 2] = i2;
 i2 = HEAP32[__ZN3WTF8nullAtomE >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i1 + 52 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  return;
 } else {
  HEAP32[i2 >> 2] = i3;
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
function __ZN7WebCore4Attr16elementAttributeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 i3 = i2 + 48 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 3;
 } else {
  if ((HEAP32[i4 + 4 >> 2] & 1 | 0) == 0) {
   i5 = 3;
  } else {
   i6 = i4;
  }
 }
 if ((i5 | 0) == 3) {
  __ZN7WebCore7Element23createUniqueElementDataEv(i2);
  i6 = HEAP32[i3 >> 2] | 0;
 }
 return __ZN7WebCore17UniqueElementData19findAttributeByNameERKNS_13QualifiedNameE(i6, i1 + 48 | 0) | 0;
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
function __ZNK7WebCore4Attr4isIdEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 i3 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1680 >> 2] | 0;
 if ((i2 | 0) == (i3 | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((HEAP32[i2 + 12 >> 2] | 0) != (HEAP32[i3 + 12 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[i3 + 16 >> 2] | 0);
 return i4 | 0;
}
function __ZNK7WebCore4Attr9nodeValueEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 + 44 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = i2 + 52 | 0;
 } else {
  i4 = __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i3, i2 + 48 | 0) | 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 return;
}
function __ZN7WebCore4Attr6createERNS_8DocumentERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = __Znwj(64) | 0;
 __ZN7WebCore4AttrC2ERNS_8DocumentERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i5, i2, i3, i4);
 __ZN7WebCore4Attr15createTextChildEv(i5);
 HEAP32[i1 >> 2] = i5;
 return;
}
function iiiii___ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function iiiii___ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZNK7WebCore4Attr5valueEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1 + 52 | 0;
  return i3 | 0;
 } else {
  i3 = __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i2, i1 + 48 | 0) | 0;
  return i3 | 0;
 }
 return 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore4Attr16childTypeAllowedENS_4Node8NodeTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((i2 | 0) == 3 | (i2 | 0) == 5) {
  i3 = 1;
 } else {
  i3 = 0;
 }
 return i3 | 0;
}
function iii___ZN7WebCore4Node12insertedIntoERNS_13ContainerNodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore4Node12insertedIntoERNS_13ContainerNodeE(i1 | 0, i2 | 0) | 0;
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZNK7WebCore4Node22scriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 return ((i2 | 0) == 0 ? 0 : i2 + 88 | 0) | 0;
}
function vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE(i1 | 0, i2 | 0);
}
function iii___ZN7WebCore4Node13computedStyleENS_8PseudoIdE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore4Node13computedStyleENS_8PseudoIdE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore4Node11removedFromERNS_13ContainerNodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node11removedFromERNS_13ContainerNodeE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE(i1 | 0, i2 | 0);
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node17handleLocalEventsERNS_5EventE(i1 | 0, i2 | 0);
}
function vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv(i1 | 0);
}
function vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13ContainerNode11boundingBoxEv(i1 | 0, i2 | 0);
}
function ii___ZN7WebCore4Node29willRespondToMouseWheelEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node29willRespondToMouseWheelEventsEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node29willRespondToMouseClickEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node29willRespondToMouseClickEventsEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node28willRespondToMouseMoveEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node28willRespondToMouseMoveEventsEv(i1 | 0) | 0;
}
function vi___ZN7WebCore11EventTarget23removeAllEventListenersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget23removeAllEventListenersEv(i1 | 0);
}
function v___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper() {
 __ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE();
}
function ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node24willRespondToTouchEventsEv(i1 | 0) | 0;
}
function __ZNK7WebCore4Node27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 15](i2 | 0, i3 | 0, i4 | 0);
}
function ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11EventTarget13isMessagePortEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node20eventTargetInterfaceEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node21ensureEventTargetDataEv(i1 | 0) | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZNK7WebCore4Attr8nodeNameEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13QualifiedName8toStringEv(i1, i2 + 48 | 0);
 return;
}
function ii___ZNK7WebCore4Node18offsetInCharactersEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node18offsetInCharactersEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore4Node18maxCharacterOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node18maxCharacterOffsetEv(i1 | 0) | 0;
}
function ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11EventTarget11toDOMWindowEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node17canStartSelectionEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore4Node7baseURIEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore4Node7baseURIEv(i1 | 0, i2 | 0);
}
function ii___ZN7WebCore4Node15eventTargetDataEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node15eventTargetDataEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node14toInputElementEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node14toInputElementEv(i1 | 0) | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 15](i2 | 0, i3 | 0) | 0;
}
function vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node18dispatchInputEventEv(i1 | 0);
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
function vi___ZN7WebCore4Node16derefEventTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node16derefEventTargetEv(i1 | 0);
}
function __ZNK7WebCore13ContainerNode25childShouldCreateRendererERKNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 1;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function vi___ZN7WebCore4Node14refEventTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node14refEventTargetEv(i1 | 0);
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 31](i2 | 0, i3 | 0);
}
function __ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function ii___ZN7WebCore4Node6toNodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node6toNodeEv(i1 | 0) | 0;
}
function __ZNK7WebCore4Attr12namespaceURIEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 48 >> 2] | 0) + 16 | 0;
}
function b0(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(0);
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 63](i2 | 0) | 0;
}
function __ZNK7WebCore4Attr9localNameEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 48 >> 2] | 0) + 12 | 0;
}
function __ZN7WebCore4AttrD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4AttrD2Ev(i1);
 __ZdlPv(i1);
 return;
}
function __ZNK7WebCore4Attr6prefixEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 48 >> 2] | 0) + 8 | 0;
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
function __ZNK7WebCore4Node23canContainRangeEndPointEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node21isMediaControlElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore4Node24startLoadingDynamicSheetEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore4Node20isInsertionPointNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node19isFrameOwnerElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node19isCharacterDataNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore4Node21finishParsingChildrenEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore4Node20beginParsingChildrenEv(i1) {
 i1 = i1 | 0;
 return;
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function __ZNK7WebCore4Node16nonRendererStyleEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node15isPluginElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node15isMediaControlsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Attr15isAttributeNodeEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore4Node14customPseudoIdEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore4Node11sheetLoadedEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
 return 0;
}
function __ZNK7WebCore4Attr8nodeTypeEv(i1) {
 i1 = i1 | 0;
 return 2;
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
  var FUNCTION_TABLE_iiiii = [b0,b0,iiiii___ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper,b0,iiiii___ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,vi___ZN7WebCore4Node14refEventTargetEv__wrapper,b1,vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper,b1,__ZN7WebCore4AttrD2Ev,b1,vi___ZN7WebCore4Node16derefEventTargetEv__wrapper,b1,vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper,b1,vi___ZN7WebCore11EventTarget23removeAllEventListenersEv__wrapper,b1,__ZN7WebCore4Node20beginParsingChildrenEv,b1,__ZN7WebCore4Node21finishParsingChildrenEv,b1,__ZN7WebCore4Node24startLoadingDynamicSheetEv,b1,__ZN7WebCore4AttrD0Ev,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,vii___ZNK7WebCore4Node7baseURIEv__wrapper,b2,__ZNK7WebCore4Node27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE,b2,__ZNK7WebCore4Attr9nodeValueEv,b2,vii___ZN7WebCore4Node11removedFromERNS_13ContainerNodeE__wrapper,b2,vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper,b2,vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper,b2,vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper,b2,__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE,b2,__ZNK7WebCore4Attr8nodeNameEv,b2,__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb,b2,__ZN7WebCore4Attr15childrenChangedERKNS_13ContainerNode11ChildChangeE,b2,vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper,b2,b2,b2,b2
  ,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,ii___ZNK7WebCore4Node18maxCharacterOffsetEv__wrapper,b3,__ZNK7WebCore4Attr6prefixEv,b3,ii___ZN7WebCore4Node15eventTargetDataEv__wrapper,b3,__ZNK7WebCore4Node16nonRendererStyleEv,b3,__ZNK7WebCore4Attr9localNameEv,b3,__ZNK7WebCore4Node15isPluginElementEv,b3,__ZNK7WebCore4Attr12namespaceURIEv,b3,__ZNK7WebCore4Node23canContainRangeEndPointEv,b3,ii___ZNK7WebCore4Node18offsetInCharactersEv__wrapper,b3,__ZNK7WebCore4Node22scriptExecutionContextEv,b3,__ZNK7WebCore4Node19isCharacterDataNodeEv,b3,ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper,b3,ii___ZN7WebCore4Node6toNodeEv__wrapper,b3,ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper
  ,b3,__ZN7WebCore4Node11sheetLoadedEv,b3,__ZNK7WebCore4Node14customPseudoIdEv,b3,__ZNK7WebCore4Node21isMediaControlElementEv,b3,__ZNK7WebCore4Attr8nodeTypeEv,b3,__ZNK7WebCore4Node19isFrameOwnerElementEv,b3,__ZNK7WebCore4Attr15isAttributeNodeEv,b3,__ZNK7WebCore4Node20isInsertionPointNodeEv,b3,ii___ZN7WebCore4Node28willRespondToMouseMoveEventsEv__wrapper,b3,ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper,b3,__ZNK7WebCore4Node15isMediaControlsEv,b3,ii___ZN7WebCore4Node14toInputElementEv__wrapper,b3,ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper,b3,ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper,b3,ii___ZN7WebCore4Node29willRespondToMouseClickEventsEv__wrapper,b3,ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper
  ,b3,ii___ZN7WebCore4Node29willRespondToMouseWheelEventsEv__wrapper,b3,b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore4Attr12setNodeValueERKN3WTF6StringERi,b4,__ZN7WebCore4Attr9cloneNodeEb,b4,__ZN7WebCore4Attr9setPrefixERKN3WTF12AtomicStringERi,b4,__ZN7WebCore4AttrC2EPNS_7ElementERKNS_13QualifiedNameE,b4,b4,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_v = [b5,b5,v___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper,b5];
  var FUNCTION_TABLE_iii = [b6,b6,iii___ZN7WebCore4Node12insertedIntoERNS_13ContainerNodeE__wrapper,b6,__ZNK7WebCore13ContainerNode25childShouldCreateRendererERKNS_4NodeE,b6,iii___ZN7WebCore4Node13computedStyleENS_8PseudoIdE__wrapper,b6,__ZNK7WebCore4Attr16childTypeAllowedENS_4Node8NodeTypeE,b6,b6,b6,b6,b6,b6,b6];
  var FUNCTION_TABLE_viiii = [b7,b7,__ZN7WebCore4AttrC2ERNS_8DocumentERKNS_13QualifiedNameERKN3WTF12AtomicStringE,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiii: dynCall_iiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiii": invoke_iiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZTVN7WebCore4NodeE": __ZTVN7WebCore4NodeE, "__ZN3WTF9emptyAtomE": __ZN3WTF9emptyAtomE, "__ZN3WTF9xmlnsAtomE": __ZN3WTF9xmlnsAtomE, "__ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE": __ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZN7WebCore17InspectorCounters10s_countersE": __ZN7WebCore17InspectorCounters10s_countersE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore4AttrC2ERNS_8DocumentERKNS_13QualifiedNameERKN3WTF12AtomicStringE","__ZNK7WebCore4Attr5valueEv","__ZNK7WebCore4Attr9nodeValueEv","__ZNK7WebCore4Attr8nodeNameEv","__ZNK7WebCore4Node16nonRendererStyleEv","__ZNK7WebCore4Node14customPseudoIdEv","__ZN7WebCore4AttrD0Ev","__ZN7WebCore4Attr8setValueERKN3WTF12AtomicStringERi","__ZN7WebCore4Attr12setNodeValueERKN3WTF6StringERi","__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb","__ZNK7WebCore4Attr9localNameEv","__ZNK7WebCore4Node15isPluginElementEv","__ZN7WebCore4Attr16elementAttributeEv","__ZN7WebCore4Node20beginParsingChildrenEv","__ZNK7WebCore4Attr12namespaceURIEv","__ZNK7WebCore4Node23canContainRangeEndPointEv","_memset","__ZNK7WebCore4Node22scriptExecutionContextEv","__ZN7WebCore4Attr15attachToElementEPNS_7ElementE","__ZN7WebCore4Attr9cloneNodeEb","__ZNK7WebCore4Attr4isIdEv","_memcpy","__ZN7WebCore4Attr6createERNS_8DocumentERKNS_13QualifiedNameERKN3WTF12AtomicStringE","__ZNK7WebCore4Node27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE","__ZN7WebCore4Attr6createEPNS_7ElementERKNS_13QualifiedNameE","__ZNK7WebCore4Node19isCharacterDataNodeEv","__ZNK7WebCore4Node21isMediaControlElementEv","__ZNK7WebCore13ContainerNode25childShouldCreateRendererERKNS_4NodeE","__ZNK7WebCore4Attr8nodeTypeEv","__ZNK7WebCore4Node19isFrameOwnerElementEv","__ZNK7WebCore4Attr15isAttributeNodeEv","__ZN7WebCore4Attr26detachFromElementWithValueERKN3WTF12AtomicStringE","__ZN7WebCore4Node21finishParsingChildrenEv","__ZNK3WTF13StringBuilder14toAtomicStringEv","__ZN7WebCore4Attr8setValueERKN3WTF12AtomicStringE","__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE","__ZN7WebCore4Node24startLoadingDynamicSheetEv","__ZNK7WebCore4Node15isMediaControlsEv","__ZNK7WebCore4Attr6prefixEv","__ZN7WebCore4Attr9setPrefixERKN3WTF12AtomicStringERi","__ZN7WebCore4AttrD2Ev","__ZN7WebCore4Attr15createTextChildEv","__ZN7WebCore4Attr15childrenChangedERKNS_13ContainerNode11ChildChangeE","__ZN7WebCore4AttrC2EPNS_7ElementERKNS_13QualifiedNameE","__ZN7WebCore4Node11sheetLoadedEv","__ZNK7WebCore4Node20isInsertionPointNodeEv","__ZNK7WebCore4Attr16childTypeAllowedENS_4Node8NodeTypeE","__ZN7WebCore4Attr5styleEv"]

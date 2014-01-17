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
H_BASE = parentModule["_malloc"](312 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 312;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore13ContainerNodeD1Ev;
/* memory initializer */ allocate([5,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
 var ctlz_i8 = allocate([8,7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_DYNAMIC);
 var cttz_i8 = allocate([8,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,7,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0], "i8", ALLOC_DYNAMIC);
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
  var cttz_i8=env.cttz_i8|0;
  var ctlz_i8=env.ctlz_i8|0;
  var __ZN3WTF8starAtomE=env.__ZN3WTF8starAtomE|0;
  var __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE=env.__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE=env.__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE|0;
  var __ZN7WebCore8Document19s_globalTreeVersionE=env.__ZN7WebCore8Document19s_globalTreeVersionE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore13ContainerNodeE=(H_BASE+24)|0;
  var __ZN7WebCore22ChildNodesLazySnapshot14latestSnapshotE=(H_BASE+312)|0;
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
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore13ContainerNode14removeChildrenEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i3 = i2 | 0;
 i4 = i2 + 56 | 0;
 i5 = i2 + 64 | 0;
 i6 = i2 + 120 | 0;
 i7 = i2 + 128 | 0;
 i8 = i2 + 144 | 0;
 i9 = i1 + 36 | 0;
 if ((HEAP32[i9 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i10 = i1 + 8 | 0;
 HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 i10 = i1 | 0;
 i11 = i1 + 20 | 0;
 __ZN7WebCore8Document26removeFocusedNodeOfSubtreeEPNS_4NodeEb(HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] | 0, i10, 1);
 __ZN7WebCore8Document32removeFullScreenElementOfSubtreeEPNS_4NodeEb(HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] | 0, i10, 1);
 i12 = i3 + 12 | 0;
 i13 = i3 | 0;
 HEAP32[i13 >> 2] = i12;
 i14 = i3 + 4 | 0;
 HEAP32[i14 >> 2] = 11;
 i15 = i3 + 8 | 0;
 HEAP32[i15 >> 2] = 0;
 L4 : do {
  if ((HEAP32[i1 + 12 >> 2] & 2 | 0) != 0) {
   i3 = HEAP32[i10 + 36 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   } else {
    i16 = i3;
    i17 = 0;
    i18 = 11;
   }
   L6 : while (1) {
    if ((i17 | 0) == (i18 | 0)) {
     i3 = i18 + 1 | 0;
     i19 = i3 + (i18 >>> 2) | 0;
     i20 = i19 >>> 0 > 16 >>> 0 ? i19 : 16;
     i19 = i20 >>> 0 > i3 >>> 0 ? i20 : i3;
     do {
      if (i18 >>> 0 < i19 >>> 0) {
       i3 = HEAP32[i13 >> 2] | 0;
       if (i19 >>> 0 > 11 >>> 0) {
        if (i19 >>> 0 > 1073741823 >>> 0) {
         break L6;
        }
        i20 = __ZN3WTF18fastMallocGoodSizeEj(i19 << 2) | 0;
        HEAP32[i14 >> 2] = i20 >>> 2;
        i21 = __ZN3WTF10fastMallocEj(i20) | 0;
        HEAP32[i13 >> 2] = i21;
        i22 = i21;
       } else {
        HEAP32[i13 >> 2] = i12;
        HEAP32[i14 >> 2] = 11;
        i22 = i12;
       }
       i21 = i3;
       _memcpy(i22 | 0, i21 | 0, i18 << 2) | 0;
       if ((i12 | 0) == (i3 | 0) | (i3 | 0) == 0) {
        break;
       }
       if ((HEAP32[i13 >> 2] | 0) == (i3 | 0)) {
        HEAP32[i13 >> 2] = 0;
        HEAP32[i14 >> 2] = 0;
       }
       __ZN3WTF8fastFreeEPv(i21);
      }
     } while (0);
     HEAP32[(HEAP32[i13 >> 2] | 0) + (HEAP32[i15 >> 2] << 2) >> 2] = i16;
     i19 = i16 + 8 | 0;
     HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
    } else {
     HEAP32[(HEAP32[i13 >> 2] | 0) + (i17 << 2) >> 2] = i16;
     i19 = i16 + 8 | 0;
     HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
    }
    i19 = (HEAP32[i15 >> 2] | 0) + 1 | 0;
    HEAP32[i15 >> 2] = i19;
    i21 = HEAP32[i16 + 28 >> 2] | 0;
    if ((i21 | 0) == 0) {
     break L4;
    }
    i16 = i21;
    i17 = i19;
    i18 = HEAP32[i14 >> 2] | 0;
   }
   _WTFCrash();
  }
 } while (0);
 __ZN7WebCore22ChildListMutationScopeC2ERNS_13ContainerNodeE(i4, i1);
 L27 : do {
  if ((HEAP32[i15 >> 2] | 0) != 0) {
   i18 = HEAP32[i13 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i16 = i17 + 44 | 0;
   if ((i17 | 0) == 0) {
    i22 = i18;
    while (1) {
     i19 = HEAP32[i22 >> 2] | 0;
     __ZN7WebCore4Node37notifyMutationObserversNodeWillDetachEv(i19);
     __ZN7WebCoreL26dispatchChildRemovalEventsERNS_4NodeE(i19);
     i22 = i22 + 4 | 0;
     if ((i22 | 0) == ((HEAP32[i13 >> 2] | 0) + (HEAP32[i15 >> 2] << 2) | 0)) {
      break L27;
     }
    }
   } else {
    i23 = i18;
   }
   while (1) {
    i22 = HEAP32[i23 >> 2] | 0;
    if ((HEAP32[i16 >> 2] | 0) != 0) {
     __ZN7WebCore28ChildListMutationAccumulator15willRemoveChildERNS_4NodeE(i17, i22);
    }
    __ZN7WebCore4Node37notifyMutationObserversNodeWillDetachEv(i22);
    __ZN7WebCoreL26dispatchChildRemovalEventsERNS_4NodeE(i22);
    i23 = i23 + 4 | 0;
    if ((i23 | 0) == ((HEAP32[i13 >> 2] | 0) + (HEAP32[i15 >> 2] << 2) | 0)) {
     break;
    }
   }
  }
 } while (0);
 __ZN7WebCore8Document25nodeChildrenWillBeRemovedERNS_13ContainerNodeE(HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] | 0, i1);
 if ((__ZNK7WebCore4Node22connectedSubframeCountEv(i10) | 0) != 0) {
  __ZN7WebCore19disconnectSubframesERNS_13ContainerNodeENS_24SubframeDisconnectPolicyE(i1, 1);
 }
 i11 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i4 = i11 | 0;
   i23 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i23 | 0) == 0) {
    __ZN7WebCore28ChildListMutationAccumulatorD1Ev(i11);
    __ZN3WTF8fastFreeEPv(i11);
    break;
   } else {
    HEAP32[i4 >> 2] = i23;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i15 >> 2] | 0;
 if ((i11 | 0) != 0) {
  i23 = HEAP32[i13 >> 2] | 0;
  i4 = i23 + (i11 << 2) | 0;
  i11 = i23;
  while (1) {
   i23 = (HEAP32[i11 >> 2] | 0) + 8 | 0;
   i17 = i23 - 8 | 0;
   i16 = i23 | 0;
   i18 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   HEAP32[i16 >> 2] = i18;
   do {
    if ((i18 | 0) < 1) {
     if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i17);
    }
   } while (0);
   i11 = i11 + 4 | 0;
   if ((i11 | 0) == (i4 | 0)) {
    break;
   }
  }
  HEAP32[i15 >> 2] = 0;
 }
 i15 = HEAP32[i13 >> 2] | 0;
 if (!((i12 | 0) == (i15 | 0) | (i15 | 0) == 0)) {
  HEAP32[i13 >> 2] = 0;
  HEAP32[i14 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i15);
 }
 i15 = i5 + 12 | 0;
 i14 = i5 | 0;
 HEAP32[i14 >> 2] = i15;
 i13 = i5 + 4 | 0;
 HEAP32[i13 >> 2] = 11;
 i12 = i5 + 8 | 0;
 HEAP32[i12 >> 2] = 0;
 HEAP32[__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE >> 2] = (HEAP32[__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE >> 2] | 0) + 1;
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i24 = 0;
  } else {
   i4 = 0;
   i11 = i5;
   while (1) {
    i4 = i4 + 1 | 0;
    i11 = HEAP32[i11 + 28 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
   }
   if (i4 >>> 0 <= 11 >>> 0) {
    i25 = 46;
    break;
   }
   if (i4 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   } else {
    i11 = __ZN3WTF18fastMallocGoodSizeEj(i4 << 2) | 0;
    HEAP32[i13 >> 2] = i11 >>> 2;
    HEAP32[i14 >> 2] = __ZN3WTF10fastMallocEj(i11) | 0;
    i25 = 46;
    break;
   }
  }
 } while (0);
 L68 : while (1) {
  if ((i25 | 0) == 46) {
   i25 = 0;
   i24 = HEAP32[i9 >> 2] | 0;
  }
  if ((i24 | 0) == 0) {
   break;
  }
  i5 = i24 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
  i5 = HEAP32[i9 >> 2] | 0;
  i11 = HEAP32[i12 >> 2] | 0;
  if ((i11 | 0) == (HEAP32[i13 >> 2] | 0)) {
   i17 = i11 + 1 | 0;
   i23 = i17 + (i11 >>> 2) | 0;
   i18 = i23 >>> 0 > 16 >>> 0 ? i23 : 16;
   i23 = i18 >>> 0 > i17 >>> 0 ? i18 : i17;
   do {
    if (i11 >>> 0 < i23 >>> 0) {
     i17 = HEAP32[i14 >> 2] | 0;
     if (i23 >>> 0 > 11 >>> 0) {
      if (i23 >>> 0 > 1073741823 >>> 0) {
       i25 = 53;
       break L68;
      }
      i18 = __ZN3WTF18fastMallocGoodSizeEj(i23 << 2) | 0;
      HEAP32[i13 >> 2] = i18 >>> 2;
      i16 = __ZN3WTF10fastMallocEj(i18) | 0;
      HEAP32[i14 >> 2] = i16;
      i26 = i16;
     } else {
      HEAP32[i14 >> 2] = i15;
      HEAP32[i13 >> 2] = 11;
      i26 = i15;
     }
     i16 = i17;
     _memcpy(i26 | 0, i16 | 0, i11 << 2) | 0;
     if ((i15 | 0) == (i17 | 0) | (i17 | 0) == 0) {
      break;
     }
     if ((HEAP32[i14 >> 2] | 0) == (i17 | 0)) {
      HEAP32[i14 >> 2] = 0;
      HEAP32[i13 >> 2] = 0;
     }
     __ZN3WTF8fastFreeEPv(i16);
    }
   } while (0);
   HEAP32[(HEAP32[i14 >> 2] | 0) + (HEAP32[i12 >> 2] << 2) >> 2] = i5;
   i23 = i5 + 8 | 0;
   HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
   i27 = HEAP32[i12 >> 2] | 0;
  } else {
   HEAP32[(HEAP32[i14 >> 2] | 0) + (i11 << 2) >> 2] = i5;
   i23 = i5 + 8 | 0;
   HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
   i27 = HEAP32[i12 >> 2] | 0;
  }
  HEAP32[i12 >> 2] = i27 + 1;
  i23 = HEAP32[i9 >> 2] | 0;
  __ZN7WebCore13ContainerNode13removeBetweenEPNS_4NodeES2_RS1_(i1, 0, HEAP32[i23 + 28 >> 2] | 0, i23);
  i23 = i24 + 8 | 0;
  i4 = i23 | 0;
  i16 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
  HEAP32[i4 >> 2] = i16;
  if ((i16 | 0) >= 1) {
   i25 = 46;
   continue;
  }
  if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
   i25 = 46;
   continue;
  }
  __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
  i25 = 46;
 }
 if ((i25 | 0) == 53) {
  _WTFCrash();
 }
 i25 = i7;
 HEAP32[i25 >> 2] = HEAP32[H_BASE + 8 >> 2];
 HEAP32[i25 + 4 >> 2] = HEAP32[H_BASE + 12 >> 2];
 HEAP32[i25 + 8 >> 2] = HEAP32[H_BASE + 16 >> 2];
 HEAP32[i25 + 12 >> 2] = HEAP32[H_BASE + 20 >> 2];
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 240 >> 2] & 31](i1, i7);
 i7 = HEAP32[i12 >> 2] | 0;
 L94 : do {
  if ((i7 | 0) != 0) {
   i25 = i8 | 0;
   i24 = 0;
   i9 = i7;
   while (1) {
    HEAP32[i25 >> 2] = i1;
    if (i9 >>> 0 <= i24 >>> 0) {
     break;
    }
    i27 = HEAP32[(HEAP32[i14 >> 2] | 0) + (i24 << 2) >> 2] | 0;
    i26 = i27 + 12 | 0;
    i23 = HEAP32[i26 >> 2] | 0;
    do {
     if ((i23 & 256 | 0) == 0) {
      if ((i23 & 2 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i27 >> 2] | 0) + 188 >> 2] & 31](i27, i1);
      __ZN7WebCore24ChildNodeRemovalNotifier31notifyDescendantRemovedFromTreeERNS_13ContainerNodeE(i8, i27);
     } else {
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i27 >> 2] | 0) + 188 >> 2] & 31](i27, i1);
      if ((HEAP32[i26 >> 2] & 2 | 0) != 0) {
       __ZN7WebCore24ChildNodeRemovalNotifier35notifyDescendantRemovedFromDocumentERNS_13ContainerNodeE(i8, i27);
      }
      i16 = HEAP32[(HEAP32[i27 + 20 >> 2] | 0) + 8 >> 2] | 0;
      if ((HEAP8[i16 + 326 | 0] & 1) == 0) {
       break;
      }
      __ZN7WebCore8Document29didRemoveAllPendingStylesheetEv(i16);
     }
    } while (0);
    i24 = i24 + 1 | 0;
    i9 = HEAP32[i12 >> 2] | 0;
    if (i24 >>> 0 >= i9 >>> 0) {
     break L94;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i8 = HEAP32[__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE >> 2] | 0;
 if ((i8 | 0) == 1) {
  __ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope11moveWidgetsEv(i6);
  i28 = HEAP32[__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE >> 2] | 0;
 } else {
  i28 = i8;
 }
 HEAP32[__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE >> 2] = i28 - 1;
 __ZN7WebCore4Node28dispatchSubtreeModifiedEventEv(i10);
 i10 = HEAP32[i12 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i28 = HEAP32[i14 >> 2] | 0;
  i8 = i28 + (i10 << 2) | 0;
  i10 = i28;
  while (1) {
   i28 = (HEAP32[i10 >> 2] | 0) + 8 | 0;
   i6 = i28 - 8 | 0;
   i7 = i28 | 0;
   i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i9;
   do {
    if ((i9 | 0) < 1) {
     if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i6);
    }
   } while (0);
   i10 = i10 + 4 | 0;
   if ((i10 | 0) == (i8 | 0)) {
    break;
   }
  }
  HEAP32[i12 >> 2] = 0;
 }
 i12 = HEAP32[i14 >> 2] | 0;
 if (!((i15 | 0) == (i12 | 0) | (i12 | 0) == 0)) {
  HEAP32[i14 >> 2] = 0;
  HEAP32[i13 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i12);
 }
 i12 = i1 + 8 | 0;
 i1 = i12 | 0;
 i13 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i13;
 if ((i13 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore13ContainerNode24updateTreeAfterInsertionERNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 64 | 0;
 i13 = i3 + 72 | 0;
 i14 = i3 + 80 | 0;
 i15 = i3 + 96 | 0;
 i16 = i3 + 104 | 0;
 __ZN7WebCore22ChildListMutationScopeC2ERNS_13ContainerNodeE(i15, i1);
 i17 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   if ((HEAP32[i17 + 44 >> 2] | 0) != 0) {
    __ZN7WebCore28ChildListMutationAccumulator10childAddedERNS_4NodeE(i17, i2);
   }
   i15 = i17 | 0;
   i18 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) == 0) {
    __ZN7WebCore28ChildListMutationAccumulatorD1Ev(i17);
    __ZN3WTF8fastFreeEPv(i17);
    break;
   } else {
    HEAP32[i15 >> 2] = i18;
    break;
   }
  }
 } while (0);
 i17 = i2 + 12 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 if ((i18 & 4 | 0) == 0) {
  i19 = i18 << 2 & 4 ^ 6;
 } else {
  i19 = 0;
 }
 HEAP32[i14 >> 2] = i19;
 i19 = i2;
 while (1) {
  i18 = HEAP32[i19 + 24 >> 2] | 0;
  if ((i18 | 0) == 0) {
   i20 = 0;
   break;
  }
  if ((HEAP32[i18 + 12 >> 2] & 4 | 0) == 0) {
   i19 = i18;
  } else {
   i20 = i18;
   break;
  }
 }
 HEAP32[i14 + 4 >> 2] = i20;
 i20 = i2;
 while (1) {
  i19 = HEAP32[i20 + 28 >> 2] | 0;
  if ((i19 | 0) == 0) {
   i21 = 0;
   break;
  }
  if ((HEAP32[i19 + 12 >> 2] & 4 | 0) == 0) {
   i20 = i19;
  } else {
   i21 = i19;
   break;
  }
 }
 HEAP32[i14 + 8 >> 2] = i21;
 HEAP32[i14 + 12 >> 2] = 1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 240 >> 2] & 31](i1, i14);
 HEAP32[i16 >> 2] = i1;
 i1 = i16 + 4 | 0;
 HEAP32[i1 >> 2] = 0;
 i14 = i16 + 8 | 0;
 HEAP32[i14 >> 2] = 0;
 i21 = i16 + 12 | 0;
 HEAP32[i21 >> 2] = 0;
 __ZN7WebCore26ChildNodeInsertionNotifier6notifyERNS_4NodeE(i16, i2);
 i16 = HEAP32[i21 >> 2] | 0;
 if ((i16 | 0) != 0) {
  i20 = HEAP32[i1 >> 2] | 0;
  i19 = i20 + (i16 << 2) | 0;
  i16 = i20;
  while (1) {
   i20 = (HEAP32[i16 >> 2] | 0) + 8 | 0;
   i18 = i20 - 8 | 0;
   i15 = i20 | 0;
   i22 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   HEAP32[i15 >> 2] = i22;
   do {
    if ((i22 | 0) < 1) {
     if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i18);
    }
   } while (0);
   i16 = i16 + 4 | 0;
   if ((i16 | 0) == (i19 | 0)) {
    break;
   }
  }
  HEAP32[i21 >> 2] = 0;
 }
 i21 = HEAP32[i1 >> 2] | 0;
 if ((i21 | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i14 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i21);
 }
 __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i2, 65536);
 if ((HEAP32[i17 >> 2] & 8388608 | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 i21 = i2 + 8 | 0;
 HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
 i21 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i14 = i21 + 8 | 0;
 HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
 i14 = HEAP32[i2 + 16 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   if ((HEAP16[i21 + 768 >> 1] & 2) == 0) {
    break;
   }
   i1 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 404 | 0;
   i19 = i14 + 8 | 0;
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
   i19 = i7 | 0;
   HEAP32[i19 >> 2] = 0;
   i16 = i8 | 0;
   HEAP32[i16 >> 2] = 0;
   i18 = i9 | 0;
   HEAP32[i18 >> 2] = 0;
   i20 = __ZN3WTF10fastMallocEj(72) | 0;
   i22 = i4 | 0;
   HEAP32[i22 >> 2] = i14;
   __ZN7WebCore13MutationEventC1ERKN3WTF12AtomicStringEbbNS1_10PassRefPtrINS_4NodeEEERKNS1_6StringESA_SA_t(i20, i1, 1, 0, i4, i7, i8, i9, 0);
   i1 = HEAP32[i22 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i22 = i1 + 8 | 0;
     i15 = i22 | 0;
     i23 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     HEAP32[i15 >> 2] = i23;
     if ((i23 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
    }
   } while (0);
   i1 = i6 | 0;
   HEAP32[i1 >> 2] = i20;
   __ZN7WebCore4Node19dispatchScopedEventEN3WTF10PassRefPtrINS_5EventEEE(i2, i6);
   i22 = HEAP32[i1 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i1 = i22 + 8 | 0;
     i23 = i1 | 0;
     i15 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
     if ((i15 | 0) != 0) {
      HEAP32[i23 >> 2] = i15;
      break;
     }
     i15 = i1 - 8 | 0;
     if ((i15 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 31](i15);
    }
   } while (0);
   i22 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i20 = i22 | 0;
     i15 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i22);
      break;
     } else {
      HEAP32[i20 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i22 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i18 = i22 | 0;
     i15 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i22);
      break;
     } else {
      HEAP32[i18 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i22 = HEAP32[i19 >> 2] | 0;
   if ((i22 | 0) == 0) {
    break;
   }
   i16 = i22 | 0;
   i15 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i22);
    break;
   } else {
    HEAP32[i16 >> 2] = i15;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP32[i17 >> 2] & 256 | 0) == 0) {
   i24 = i2;
  } else {
   if ((HEAP16[i21 + 768 >> 1] & 16) == 0) {
    i24 = i2;
    break;
   }
   if ((i2 | 0) == 0) {
    i24 = 0;
    break;
   }
   i6 = i11 | 0;
   i9 = i12 | 0;
   i8 = i13 | 0;
   i7 = i5 | 0;
   i4 = i10 | 0;
   i14 = i2;
   while (1) {
    i15 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 408 | 0;
    HEAP32[i6 >> 2] = 0;
    HEAP32[i9 >> 2] = 0;
    HEAP32[i8 >> 2] = 0;
    i16 = __ZN3WTF10fastMallocEj(72) | 0;
    HEAP32[i7 >> 2] = 0;
    __ZN7WebCore13MutationEventC1ERKN3WTF12AtomicStringEbbNS1_10PassRefPtrINS_4NodeEEERKNS1_6StringESA_SA_t(i16, i15, 0, 0, i5, i11, i12, i13, 0);
    i15 = HEAP32[i7 >> 2] | 0;
    do {
     if ((i15 | 0) != 0) {
      i22 = i15 + 8 | 0;
      i18 = i22 | 0;
      i20 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
      HEAP32[i18 >> 2] = i20;
      if ((i20 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
     }
    } while (0);
    HEAP32[i4 >> 2] = i16;
    __ZN7WebCore4Node19dispatchScopedEventEN3WTF10PassRefPtrINS_5EventEEE(i14, i10);
    i15 = HEAP32[i4 >> 2] | 0;
    do {
     if ((i15 | 0) != 0) {
      i22 = i15 + 8 | 0;
      i20 = i22 | 0;
      i18 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
      if ((i18 | 0) != 0) {
       HEAP32[i20 >> 2] = i18;
       break;
      }
      i18 = i22 - 8 | 0;
      if ((i18 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 31](i18);
     }
    } while (0);
    i15 = HEAP32[i8 >> 2] | 0;
    do {
     if ((i15 | 0) != 0) {
      i16 = i15 | 0;
      i18 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
      if ((i18 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i15);
       break;
      } else {
       HEAP32[i16 >> 2] = i18;
       break;
      }
     }
    } while (0);
    i15 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i15 | 0) != 0) {
      i18 = i15 | 0;
      i16 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
      if ((i16 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i15);
       break;
      } else {
       HEAP32[i18 >> 2] = i16;
       break;
      }
     }
    } while (0);
    i15 = HEAP32[i6 >> 2] | 0;
    do {
     if ((i15 | 0) != 0) {
      i16 = i15 | 0;
      i18 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
      if ((i18 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i15);
       break;
      } else {
       HEAP32[i16 >> 2] = i18;
       break;
      }
     }
    } while (0);
    if ((HEAP32[i14 + 12 >> 2] & 2 | 0) == 0) {
     i25 = 75;
    } else {
     i15 = HEAP32[i14 + 36 >> 2] | 0;
     if ((i15 | 0) == 0) {
      i25 = 75;
     } else {
      i26 = i15;
      i25 = 78;
     }
    }
    do {
     if ((i25 | 0) == 75) {
      i25 = 0;
      if ((i14 | 0) == (i2 | 0)) {
       i27 = 0;
       break;
      }
      i15 = HEAP32[i14 + 28 >> 2] | 0;
      if ((i15 | 0) != 0) {
       i26 = i15;
       i25 = 78;
       break;
      }
      i15 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i14, i2) | 0;
      if ((i15 | 0) == 0) {
       i27 = 0;
      } else {
       i26 = i15;
       i25 = 78;
      }
     }
    } while (0);
    if ((i25 | 0) == 78) {
     i25 = 0;
     i15 = i26 + 8 | 0;
     HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
     i27 = i26;
    }
    i15 = i14 + 8 | 0;
    i18 = i15 - 8 | 0;
    i16 = i15 | 0;
    i22 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
    HEAP32[i16 >> 2] = i22;
    do {
     if ((i22 | 0) < 1) {
      if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i18);
     }
    } while (0);
    if ((i27 | 0) == 0) {
     i24 = 0;
     break;
    } else {
     i14 = i27;
    }
   }
  }
 } while (0);
 i27 = i21 + 8 | 0;
 i21 = i27 - 8 | 0;
 i26 = i27 | 0;
 i25 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
 HEAP32[i26 >> 2] = i25;
 do {
  if ((i25 | 0) < 1) {
   if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i21);
  }
 } while (0);
 if ((i24 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i21 = i24 + 8 | 0;
 i24 = i21 | 0;
 i27 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
 HEAP32[i24 >> 2] = i27;
 if ((i27 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCoreL26dispatchChildRemovalEventsERNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
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
 i13 = i1 + 12 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 if ((i14 & 8388608 | 0) != 0) {
  i15 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
  if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0 | (i15 | 0) == 0) {
   STACKTOP = i2;
   return;
  }
  i16 = __ZNK7WebCore8Document4pageEv(i15) | 0;
  do {
   if ((i16 | 0) == 0) {
    i17 = HEAP32[i15 + 2204 >> 2] | 0;
    if ((i17 | 0) == 0) {
     i18 = 0;
     break;
    }
    i18 = __ZNK7WebCore8Document4pageEv(i17) | 0;
   } else {
    i18 = i16;
   }
  } while (0);
  i16 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i18) | 0;
  if ((i16 | 0) == 0) {
   STACKTOP = i2;
   return;
  }
  __ZN7WebCore24InspectorInstrumentation21willRemoveDOMNodeImplEPNS_19InstrumentingAgentsEPNS_4NodeE(i16, i1);
  STACKTOP = i2;
  return;
 }
 i16 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i16 | 0) == 0) {
   i19 = 11;
  } else {
   if ((HEAP32[i16 + 8 >> 2] & 3 | 0) != 0) {
    i19 = 11;
    break;
   }
   if ((HEAP32[i16 >> 2] | 0) == 0) {
    i19 = 11;
   }
  }
 } while (0);
 do {
  if ((i19 | 0) == 11) {
   if ((i14 & 2 | 0) == 0) {
    break;
   }
   if ((HEAP32[i1 + 36 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore47willCreatePossiblyOrphanedTreeByRemovalSlowCaseEPNS_4NodeE(i1);
  }
 } while (0);
 i14 = i1 + 20 | 0;
 i16 = HEAP32[(HEAP32[i14 >> 2] | 0) + 8 >> 2] | 0;
 do {
  if (!((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0 | (i16 | 0) == 0)) {
   i18 = __ZNK7WebCore8Document4pageEv(i16) | 0;
   do {
    if ((i18 | 0) == 0) {
     i15 = HEAP32[i16 + 2204 >> 2] | 0;
     if ((i15 | 0) == 0) {
      i20 = 0;
      break;
     }
     i20 = __ZNK7WebCore8Document4pageEv(i15) | 0;
    } else {
     i20 = i18;
    }
   } while (0);
   i18 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i20) | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation21willRemoveDOMNodeImplEPNS_19InstrumentingAgentsEPNS_4NodeE(i18, i1);
  }
 } while (0);
 i20 = (i1 | 0) == 0;
 if (!i20) {
  i16 = i1 + 8 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
 }
 i16 = HEAP32[(HEAP32[i14 >> 2] | 0) + 8 >> 2] | 0;
 i14 = i16 + 8 | 0;
 HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
 i14 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   if ((HEAP16[i16 + 768 >> 1] & 4) == 0) {
    break;
   }
   i18 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 412 | 0;
   i15 = i14 + 8 | 0;
   HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
   i15 = i6 | 0;
   HEAP32[i15 >> 2] = 0;
   i17 = i7 | 0;
   HEAP32[i17 >> 2] = 0;
   i21 = i8 | 0;
   HEAP32[i21 >> 2] = 0;
   i22 = __ZN3WTF10fastMallocEj(72) | 0;
   i23 = i4 | 0;
   HEAP32[i23 >> 2] = i14;
   __ZN7WebCore13MutationEventC1ERKN3WTF12AtomicStringEbbNS1_10PassRefPtrINS_4NodeEEERKNS1_6StringESA_SA_t(i22, i18, 1, 0, i4, i6, i7, i8, 0);
   i18 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i23 = i18 + 8 | 0;
     i24 = i23 | 0;
     i25 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
     HEAP32[i24 >> 2] = i25;
     if ((i25 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
    }
   } while (0);
   i18 = i5 | 0;
   HEAP32[i18 >> 2] = i22;
   __ZN7WebCore4Node19dispatchScopedEventEN3WTF10PassRefPtrINS_5EventEEE(i1, i5);
   i23 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i18 = i23 + 8 | 0;
     i25 = i18 | 0;
     i24 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
     if ((i24 | 0) != 0) {
      HEAP32[i25 >> 2] = i24;
      break;
     }
     i24 = i18 - 8 | 0;
     if ((i24 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 31](i24);
    }
   } while (0);
   i23 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i22 = i23 | 0;
     i24 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
     if ((i24 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i23);
      break;
     } else {
      HEAP32[i22 >> 2] = i24;
      break;
     }
    }
   } while (0);
   i23 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i21 = i23 | 0;
     i24 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
     if ((i24 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i23);
      break;
     } else {
      HEAP32[i21 >> 2] = i24;
      break;
     }
    }
   } while (0);
   i23 = HEAP32[i15 >> 2] | 0;
   if ((i23 | 0) == 0) {
    break;
   }
   i17 = i23 | 0;
   i24 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i24 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i17 >> 2] = i24;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP32[i13 >> 2] & 256 | 0) == 0) {
   i26 = i1;
  } else {
   i5 = (HEAP16[i16 + 768 >> 1] & 8) == 0;
   if (i5 | i20) {
    i26 = i5 ? i1 : 0;
    break;
   }
   i5 = i10 | 0;
   i8 = i11 | 0;
   i7 = i12 | 0;
   i6 = i3 | 0;
   i4 = i9 | 0;
   i14 = i1;
   while (1) {
    i24 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 416 | 0;
    HEAP32[i5 >> 2] = 0;
    HEAP32[i8 >> 2] = 0;
    HEAP32[i7 >> 2] = 0;
    i17 = __ZN3WTF10fastMallocEj(72) | 0;
    HEAP32[i6 >> 2] = 0;
    __ZN7WebCore13MutationEventC1ERKN3WTF12AtomicStringEbbNS1_10PassRefPtrINS_4NodeEEERKNS1_6StringESA_SA_t(i17, i24, 0, 0, i3, i10, i11, i12, 0);
    i24 = HEAP32[i6 >> 2] | 0;
    do {
     if ((i24 | 0) != 0) {
      i23 = i24 + 8 | 0;
      i21 = i23 | 0;
      i22 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
      HEAP32[i21 >> 2] = i22;
      if ((i22 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
     }
    } while (0);
    HEAP32[i4 >> 2] = i17;
    __ZN7WebCore4Node19dispatchScopedEventEN3WTF10PassRefPtrINS_5EventEEE(i14, i9);
    i24 = HEAP32[i4 >> 2] | 0;
    do {
     if ((i24 | 0) != 0) {
      i23 = i24 + 8 | 0;
      i22 = i23 | 0;
      i21 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
      if ((i21 | 0) != 0) {
       HEAP32[i22 >> 2] = i21;
       break;
      }
      i21 = i23 - 8 | 0;
      if ((i21 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 31](i21);
     }
    } while (0);
    i24 = HEAP32[i7 >> 2] | 0;
    do {
     if ((i24 | 0) != 0) {
      i17 = i24 | 0;
      i21 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
      if ((i21 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i24);
       break;
      } else {
       HEAP32[i17 >> 2] = i21;
       break;
      }
     }
    } while (0);
    i24 = HEAP32[i8 >> 2] | 0;
    do {
     if ((i24 | 0) != 0) {
      i21 = i24 | 0;
      i17 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
      if ((i17 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i24);
       break;
      } else {
       HEAP32[i21 >> 2] = i17;
       break;
      }
     }
    } while (0);
    i24 = HEAP32[i5 >> 2] | 0;
    do {
     if ((i24 | 0) != 0) {
      i17 = i24 | 0;
      i21 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
      if ((i21 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i24);
       break;
      } else {
       HEAP32[i17 >> 2] = i21;
       break;
      }
     }
    } while (0);
    if ((HEAP32[i14 + 12 >> 2] & 2 | 0) == 0) {
     i19 = 71;
    } else {
     i24 = HEAP32[i14 + 36 >> 2] | 0;
     if ((i24 | 0) == 0) {
      i19 = 71;
     } else {
      i27 = i24;
      i19 = 74;
     }
    }
    do {
     if ((i19 | 0) == 71) {
      i19 = 0;
      if ((i14 | 0) == (i1 | 0)) {
       i28 = 0;
       break;
      }
      i24 = HEAP32[i14 + 28 >> 2] | 0;
      if ((i24 | 0) != 0) {
       i27 = i24;
       i19 = 74;
       break;
      }
      i24 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i14, i1) | 0;
      if ((i24 | 0) == 0) {
       i28 = 0;
      } else {
       i27 = i24;
       i19 = 74;
      }
     }
    } while (0);
    if ((i19 | 0) == 74) {
     i19 = 0;
     i24 = i27 + 8 | 0;
     HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
     i28 = i27;
    }
    i24 = i14 + 8 | 0;
    i21 = i24 - 8 | 0;
    i17 = i24 | 0;
    i23 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
    HEAP32[i17 >> 2] = i23;
    do {
     if ((i23 | 0) < 1) {
      if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i21);
     }
    } while (0);
    if ((i28 | 0) == 0) {
     i26 = 0;
     break;
    } else {
     i14 = i28;
    }
   }
  }
 } while (0);
 i28 = i16 + 8 | 0;
 i16 = i28 - 8 | 0;
 i27 = i28 | 0;
 i19 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
 HEAP32[i27 >> 2] = i19;
 do {
  if ((i19 | 0) < 1) {
   if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i16);
  }
 } while (0);
 if ((i26 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i16 = i26 + 8 | 0;
 i26 = i16 | 0;
 i28 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
 HEAP32[i26 >> 2] = i28;
 if ((i28 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore13ContainerNode12replaceChildEN3WTF10PassRefPtrINS_4NodeEEEPS3_Ri(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i1 + 8 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 HEAP32[i4 >> 2] = 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) == (i3 | 0)) {
   i9 = 1;
  } else {
   if ((i3 | 0) == 0) {
    HEAP32[i4 >> 2] = 8;
    i9 = 0;
    break;
   }
   i10 = __ZN7WebCoreL16checkAcceptChildEPNS_13ContainerNodeEPNS_4NodeES3_(i1, i2, i3) | 0;
   HEAP32[i4 >> 2] = i10;
   if ((i10 | 0) != 0) {
    i9 = 0;
    break;
   }
   if ((HEAP32[i3 + 16 >> 2] | 0) != (i1 | 0)) {
    HEAP32[i4 >> 2] = 8;
    i9 = 0;
    break;
   }
   __ZN7WebCore22ChildListMutationScopeC2ERNS_13ContainerNodeE(i6, i1);
   i10 = HEAP32[i3 + 28 >> 2] | 0;
   i11 = (i10 | 0) == 0;
   if (!i11) {
    i12 = i10 + 8 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   }
   i12 = i3 + 8 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   __ZN7WebCore13ContainerNode11removeChildEPNS_4NodeERi(i1, i3, i4) | 0;
   do {
    if ((HEAP32[i4 >> 2] | 0) == 0) {
     if (i11) {
      i13 = HEAP32[i8 >> 2] | 0;
     } else {
      i12 = HEAP32[i8 >> 2] | 0;
      if ((i12 | 0) == (HEAP32[i10 + 24 >> 2] | 0) | (i10 | 0) == (i12 | 0)) {
       i14 = 1;
       break;
      } else {
       i13 = i12;
      }
     }
     i12 = __ZN7WebCoreL16checkAcceptChildEPNS_13ContainerNodeEPNS_4NodeES3_(i1, i13, i3) | 0;
     HEAP32[i4 >> 2] = i12;
     if ((i12 | 0) != 0) {
      i14 = 0;
      break;
     }
     i12 = i7 + 12 | 0;
     i15 = i7 | 0;
     HEAP32[i15 >> 2] = i12;
     i16 = i7 + 4 | 0;
     HEAP32[i16 >> 2] = 11;
     i17 = i7 + 8 | 0;
     HEAP32[i17 >> 2] = 0;
     __ZN7WebCoreL37collectChildrenAndRemoveFromOldParentERNS_4NodeERN3WTF6VectorINS2_3RefIS0_EELj11ENS2_15CrashOnOverflowEEERi(HEAP32[i8 >> 2] | 0, i7, i4);
     do {
      if ((HEAP32[i4 >> 2] | 0) == 0) {
       i18 = __ZN7WebCoreL16checkAcceptChildEPNS_13ContainerNodeEPNS_4NodeES3_(i1, HEAP32[i8 >> 2] | 0, i3) | 0;
       HEAP32[i4 >> 2] = i18;
       if ((i18 | 0) != 0) {
        i19 = 0;
        break;
       }
       i18 = i1 | 0;
       i20 = i1 + 20 | 0;
       i21 = HEAP32[(HEAP32[i20 >> 2] | 0) + 8 >> 2] | 0;
       do {
        if (!((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0 | (i21 | 0) == 0)) {
         i22 = __ZNK7WebCore8Document4pageEv(i21) | 0;
         do {
          if ((i22 | 0) == 0) {
           i23 = HEAP32[i21 + 2204 >> 2] | 0;
           if ((i23 | 0) == 0) {
            i24 = 0;
            break;
           }
           i24 = __ZNK7WebCore8Document4pageEv(i23) | 0;
          } else {
           i24 = i22;
          }
         } while (0);
         i22 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i24) | 0;
         if ((i22 | 0) == 0) {
          break;
         }
         __ZN7WebCore24InspectorInstrumentation21willInsertDOMNodeImplEPNS_19InstrumentingAgentsEPNS_4NodeE(i22, i18);
        }
       } while (0);
       i21 = HEAP32[i15 >> 2] | 0;
       i22 = HEAP32[i17 >> 2] | 0;
       i23 = i21 + (i22 << 2) | 0;
       i25 = i10 + 16 | 0;
       L31 : do {
        if ((i22 | 0) != 0) {
         i26 = i1 + 40 | 0;
         i27 = i1 + 36 | 0;
         i28 = i10 + 24 | 0;
         if (i11) {
          i29 = i21;
          while (1) {
           i30 = HEAP32[i29 >> 2] | 0;
           i31 = i30 + 16 | 0;
           if ((HEAP32[i31 >> 2] | 0) != 0) {
            break L31;
           }
           __ZN7WebCore9TreeScope13adoptIfNeededEPNS_4NodeE(HEAP32[i20 >> 2] | 0, i30);
           HEAP32[i31 >> 2] = i1;
           i31 = HEAP32[i26 >> 2] | 0;
           if ((i31 | 0) == 0) {
            HEAP32[i27 >> 2] = i30;
           } else {
            HEAP32[i30 + 24 >> 2] = i31;
            HEAP32[i31 + 28 >> 2] = i30;
           }
           HEAP32[i26 >> 2] = i30;
           __ZN7WebCore13ContainerNode24updateTreeAfterInsertionERNS_4NodeE(i1, i30);
           i29 = i29 + 4 | 0;
           if ((i29 | 0) == (i23 | 0)) {
            break L31;
           }
          }
         } else {
          i32 = i21;
         }
         while (1) {
          i29 = HEAP32[i32 >> 2] | 0;
          if ((HEAP32[i25 >> 2] | 0) != (i1 | 0)) {
           break L31;
          }
          i26 = i29 + 16 | 0;
          if ((HEAP32[i26 >> 2] | 0) != 0) {
           break L31;
          }
          __ZN7WebCore9TreeScope13adoptIfNeededEPNS_4NodeE(HEAP32[i20 >> 2] | 0, i29);
          i30 = HEAP32[i28 >> 2] | 0;
          HEAP32[i28 >> 2] = i29;
          if ((i30 | 0) == 0) {
           HEAP32[i27 >> 2] = i29;
          } else {
           HEAP32[i30 + 28 >> 2] = i29;
          }
          HEAP32[i26 >> 2] = i1;
          HEAP32[i29 + 24 >> 2] = i30;
          HEAP32[i29 + 28 >> 2] = i10;
          __ZN7WebCore13ContainerNode24updateTreeAfterInsertionERNS_4NodeE(i1, i29);
          i32 = i32 + 4 | 0;
          if ((i32 | 0) == (i23 | 0)) {
           break;
          }
         }
        }
       } while (0);
       __ZN7WebCore4Node28dispatchSubtreeModifiedEventEv(i18);
       i19 = 1;
      } else {
       i19 = 0;
      }
     } while (0);
     i23 = HEAP32[i17 >> 2] | 0;
     if ((i23 | 0) != 0) {
      i20 = HEAP32[i15 >> 2] | 0;
      i25 = i20 + (i23 << 2) | 0;
      i23 = i20;
      while (1) {
       i20 = (HEAP32[i23 >> 2] | 0) + 8 | 0;
       i21 = i20 - 8 | 0;
       i22 = i20 | 0;
       i27 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
       HEAP32[i22 >> 2] = i27;
       do {
        if ((i27 | 0) < 1) {
         if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i21);
        }
       } while (0);
       i23 = i23 + 4 | 0;
       if ((i23 | 0) == (i25 | 0)) {
        break;
       }
      }
      HEAP32[i17 >> 2] = 0;
     }
     i25 = HEAP32[i15 >> 2] | 0;
     if ((i12 | 0) == (i25 | 0) | (i25 | 0) == 0) {
      i14 = i19;
      break;
     }
     HEAP32[i15 >> 2] = 0;
     HEAP32[i16 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i25);
     i14 = i19;
    } else {
     i14 = 0;
    }
   } while (0);
   i25 = i3 + 8 | 0;
   i23 = i25 - 8 | 0;
   i21 = i25 | 0;
   i20 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   HEAP32[i21 >> 2] = i20;
   do {
    if ((i20 | 0) < 1) {
     if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i23);
    }
   } while (0);
   do {
    if (!i11) {
     i23 = i10 + 8 | 0;
     i25 = i23 | 0;
     i20 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
     HEAP32[i25 >> 2] = i20;
     if ((i20 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
    }
   } while (0);
   i10 = HEAP32[i6 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i9 = i14;
    break;
   }
   i11 = i10 | 0;
   i23 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i23 | 0) == 0) {
    __ZN7WebCore28ChildListMutationAccumulatorD1Ev(i10);
    __ZN3WTF8fastFreeEPv(i10);
    i9 = i14;
    break;
   } else {
    HEAP32[i11 >> 2] = i23;
    i9 = i14;
    break;
   }
  }
 } while (0);
 i14 = i1 + 8 | 0;
 i1 = i14 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) >= 1) {
  STACKTOP = i5;
  return i9 | 0;
 }
 if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return i9 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
 STACKTOP = i5;
 return i9 | 0;
}
function __ZN7WebCore13ContainerNode19takeAllChildrenFromEPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i4 = i3 | 0;
 i5 = i3 + 56 | 0;
 i6 = i3 + 64 | 0;
 i7 = i3 + 72 | 0;
 i8 = i3 + 80 | 0;
 i9 = i3 + 88 | 0;
 i10 = i4 + 12 | 0;
 i11 = i4 | 0;
 HEAP32[i11 >> 2] = i10;
 i12 = i4 + 4 | 0;
 HEAP32[i12 >> 2] = 11;
 i13 = i4 + 8 | 0;
 HEAP32[i13 >> 2] = 0;
 L1 : do {
  if ((HEAP32[i2 + 12 >> 2] & 2 | 0) != 0) {
   i4 = HEAP32[i2 + 36 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   } else {
    i14 = i4;
    i15 = 0;
    i16 = 11;
   }
   L3 : while (1) {
    if ((i15 | 0) == (i16 | 0)) {
     i4 = i16 + 1 | 0;
     i17 = i4 + (i16 >>> 2) | 0;
     i18 = i17 >>> 0 > 16 >>> 0 ? i17 : 16;
     i17 = i18 >>> 0 > i4 >>> 0 ? i18 : i4;
     do {
      if (i16 >>> 0 < i17 >>> 0) {
       i4 = HEAP32[i11 >> 2] | 0;
       if (i17 >>> 0 > 11 >>> 0) {
        if (i17 >>> 0 > 1073741823 >>> 0) {
         break L3;
        }
        i18 = __ZN3WTF18fastMallocGoodSizeEj(i17 << 2) | 0;
        HEAP32[i12 >> 2] = i18 >>> 2;
        i19 = __ZN3WTF10fastMallocEj(i18) | 0;
        HEAP32[i11 >> 2] = i19;
        i20 = i19;
       } else {
        HEAP32[i11 >> 2] = i10;
        HEAP32[i12 >> 2] = 11;
        i20 = i10;
       }
       i19 = i4;
       _memcpy(i20 | 0, i19 | 0, i16 << 2) | 0;
       if ((i10 | 0) == (i4 | 0) | (i4 | 0) == 0) {
        break;
       }
       if ((HEAP32[i11 >> 2] | 0) == (i4 | 0)) {
        HEAP32[i11 >> 2] = 0;
        HEAP32[i12 >> 2] = 0;
       }
       __ZN3WTF8fastFreeEPv(i19);
      }
     } while (0);
     HEAP32[(HEAP32[i11 >> 2] | 0) + (HEAP32[i13 >> 2] << 2) >> 2] = i14;
     i17 = i14 + 8 | 0;
     HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
    } else {
     HEAP32[(HEAP32[i11 >> 2] | 0) + (i15 << 2) >> 2] = i14;
     i17 = i14 + 8 | 0;
     HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
    }
    i17 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
    HEAP32[i13 >> 2] = i17;
    i19 = HEAP32[i14 + 28 >> 2] | 0;
    if ((i19 | 0) == 0) {
     break L1;
    }
    i14 = i19;
    i15 = i17;
    i16 = HEAP32[i12 >> 2] | 0;
   }
   _WTFCrash();
  }
 } while (0);
 do {
  if ((HEAP8[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 770 | 0] & 1) != 0) {
   __ZN7WebCore22ChildListMutationScopeC2ERNS_13ContainerNodeE(i5, i2);
   i16 = HEAP32[i13 >> 2] | 0;
   i15 = HEAP32[i5 >> 2] | 0;
   L26 : do {
    if ((i16 | 0) != 0) {
     i14 = i15 + 44 | 0;
     if ((i15 | 0) == 0) {
      i20 = 0;
      while (1) {
       i20 = i20 + 1 | 0;
       if (i20 >>> 0 >= i16 >>> 0) {
        break L26;
       }
      }
     } else {
      i21 = 0;
      i22 = i16;
     }
     while (1) {
      if ((HEAP32[i14 >> 2] | 0) == 0) {
       i23 = i22;
      } else {
       __ZN7WebCore28ChildListMutationAccumulator15willRemoveChildERNS_4NodeE(i15, HEAP32[(HEAP32[i11 >> 2] | 0) + (i21 << 2) >> 2] | 0);
       i23 = HEAP32[i13 >> 2] | 0;
      }
      i20 = i21 + 1 | 0;
      if (i20 >>> 0 < i23 >>> 0) {
       i21 = i20;
       i22 = i23;
      } else {
       break;
      }
     }
    }
   } while (0);
   if ((i15 | 0) == 0) {
    break;
   }
   i16 = i15 | 0;
   i14 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) == 0) {
    __ZN7WebCore28ChildListMutationAccumulatorD1Ev(i15);
    __ZN3WTF8fastFreeEPv(i15);
    break;
   } else {
    HEAP32[i16 >> 2] = i14;
    break;
   }
  }
 } while (0);
 __ZN7WebCore13ContainerNode22removeDetachedChildrenEv(i2);
 do {
  if ((HEAP32[i13 >> 2] | 0) != 0) {
   i2 = i1 + 20 | 0;
   i23 = i7 | 0;
   i22 = i8 | 0;
   i21 = i6 | 0;
   i5 = i9 | 0;
   i14 = 0;
   while (1) {
    i16 = HEAP32[(HEAP32[i11 >> 2] | 0) + (i14 << 2) >> 2] | 0;
    i20 = HEAP32[i16 + 12 >> 2] | 0;
    i17 = i16 + 32 | 0;
    if ((i20 & 2048 | 0) == 0) {
     i24 = i17 | 0;
    } else {
     i24 = HEAP32[i17 >> 2] | 0;
    }
    if ((HEAP32[i24 >> 2] | 0) == 0) {
     if ((i20 & 262144 | 0) != 0) {
      i25 = 36;
     }
    } else {
     i25 = 36;
    }
    do {
     if ((i25 | 0) == 36) {
      i25 = 0;
      if ((i20 & 4 | 0) != 0) {
       __ZN7WebCore5Style16detachRenderTreeERNS_7ElementE(i16);
       break;
      }
      if ((i20 & 1 | 0) == 0) {
       break;
      }
      __ZN7WebCore5Style18detachTextRendererERNS_4TextE(i16);
     }
    } while (0);
    i16 = HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] | 0;
    if ((HEAP32[i13 >> 2] | 0) >>> 0 <= i14 >>> 0) {
     i25 = 41;
     break;
    }
    i20 = HEAP32[(HEAP32[i11 >> 2] | 0) + (i14 << 2) >> 2] | 0;
    HEAP32[i23 >> 2] = i20;
    if ((i20 | 0) != 0) {
     i17 = i20 + 8 | 0;
     HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
    }
    HEAP32[i22 >> 2] = 0;
    __ZN7WebCore8Document9adoptNodeEN3WTF10PassRefPtrINS_4NodeEEERi(i6, i16, i7, i22);
    i16 = HEAP32[i21 >> 2] | 0;
    HEAP32[i21 >> 2] = 0;
    i17 = HEAP32[i23 >> 2] | 0;
    do {
     if ((i17 | 0) != 0) {
      i20 = i17 + 8 | 0;
      i19 = i20 | 0;
      i4 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
      HEAP32[i19 >> 2] = i4;
      if ((i4 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
     }
    } while (0);
    HEAP32[i5 >> 2] = i16;
    i17 = (i16 | 0) == 0;
    if (!i17) {
     i20 = i16 + 8 | 0;
     HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
    }
    __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i1, i9);
    i20 = HEAP32[i5 >> 2] | 0;
    do {
     if ((i20 | 0) != 0) {
      i4 = i20 + 8 | 0;
      i19 = i4 | 0;
      i18 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
      HEAP32[i19 >> 2] = i18;
      if ((i18 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore9TreeScope13adoptIfNeededEPNS_4NodeE(HEAP32[i2 >> 2] | 0, i16);
    do {
     if (!i17) {
      i20 = i16 + 8 | 0;
      i4 = i20 | 0;
      i18 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
      HEAP32[i4 >> 2] = i18;
      if ((i18 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
     }
    } while (0);
    i14 = i14 + 1 | 0;
    i26 = HEAP32[i13 >> 2] | 0;
    if (i14 >>> 0 >= i26 >>> 0) {
     break;
    }
   }
   if ((i25 | 0) == 41) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   if ((i26 | 0) == 0) {
    break;
   }
   i14 = HEAP32[i11 >> 2] | 0;
   i2 = i14 + (i26 << 2) | 0;
   i5 = i14;
   while (1) {
    i14 = (HEAP32[i5 >> 2] | 0) + 8 | 0;
    i23 = i14 - 8 | 0;
    i21 = i14 | 0;
    i22 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
    HEAP32[i21 >> 2] = i22;
    do {
     if ((i22 | 0) < 1) {
      if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i23);
     }
    } while (0);
    i5 = i5 + 4 | 0;
    if ((i5 | 0) == (i2 | 0)) {
     break;
    }
   }
   HEAP32[i13 >> 2] = 0;
  }
 } while (0);
 i13 = HEAP32[i11 >> 2] | 0;
 if ((i10 | 0) == (i13 | 0) | (i13 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i11 >> 2] = 0;
 HEAP32[i12 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i13);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13ContainerNode11removeChildEPNS_4NodeERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i1 + 8 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 HEAP32[i3 >> 2] = 0;
 i9 = i1 | 0;
 L1 : do {
  if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 76 >> 2] & 63](i9) | 0) == 5) {
   HEAP32[i3 >> 2] = 7;
   i10 = 0;
  } else {
   do {
    if ((i2 | 0) != 0) {
     i11 = i2 + 16 | 0;
     if ((HEAP32[i11 >> 2] | 0) != (i1 | 0)) {
      break;
     }
     i12 = i2 + 8 | 0;
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
     i12 = i1 + 20 | 0;
     __ZN7WebCore8Document26removeFocusedNodeOfSubtreeEPNS_4NodeEb(HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] | 0, i2, 0);
     __ZN7WebCore8Document32removeFullScreenElementOfSubtreeEPNS_4NodeEb(HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] | 0, i2, 0);
     do {
      if ((HEAP32[i11 >> 2] | 0) == (i1 | 0)) {
       __ZN7WebCore22ChildListMutationScopeC2ERNS_13ContainerNodeE(i5, i1);
       i12 = HEAP32[i5 >> 2] | 0;
       do {
        if ((i12 | 0) != 0) {
         if ((HEAP32[i12 + 44 >> 2] | 0) != 0) {
          __ZN7WebCore28ChildListMutationAccumulator15willRemoveChildERNS_4NodeE(i12, i2);
         }
         i13 = i12 | 0;
         i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
         if ((i14 | 0) == 0) {
          __ZN7WebCore28ChildListMutationAccumulatorD1Ev(i12);
          __ZN3WTF8fastFreeEPv(i12);
          break;
         } else {
          HEAP32[i13 >> 2] = i14;
          break;
         }
        }
       } while (0);
       __ZN7WebCore4Node37notifyMutationObserversNodeWillDetachEv(i2);
       __ZN7WebCoreL26dispatchChildRemovalEventsERNS_4NodeE(i2);
       i12 = i2 + 20 | 0;
       __ZN7WebCore8Document17nodeWillBeRemovedEPNS_4NodeE(HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] | 0, i2);
       i14 = i2 + 12 | 0;
       do {
        if ((HEAP32[i14 >> 2] & 2 | 0) != 0) {
         if ((__ZNK7WebCore4Node22connectedSubframeCountEv(i2) | 0) == 0) {
          break;
         }
         __ZN7WebCore19disconnectSubframesERNS_13ContainerNodeENS_24SubframeDisconnectPolicyE(i2, 0);
        }
       } while (0);
       if ((HEAP32[i11 >> 2] | 0) != (i1 | 0)) {
        HEAP32[i3 >> 2] = 8;
        i15 = 0;
        break;
       }
       HEAP32[__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE >> 2] = (HEAP32[__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE >> 2] | 0) + 1;
       i13 = HEAP32[i2 + 24 >> 2] | 0;
       i16 = HEAP32[i2 + 28 >> 2] | 0;
       __ZN7WebCore13ContainerNode13removeBetweenEPNS_4NodeES2_RS1_(i1, i13, i16, i2);
       i17 = HEAP32[i14 >> 2] | 0;
       if ((i17 & 4 | 0) == 0) {
        i18 = (i17 & 1 | 0) != 0 ? 3 : 6;
       } else {
        i18 = 1;
       }
       HEAP32[i6 >> 2] = i18;
       L29 : do {
        if ((i13 | 0) == 0) {
         i19 = 0;
        } else {
         if ((HEAP32[i13 + 12 >> 2] & 4 | 0) == 0) {
          i20 = i13;
         } else {
          i19 = i13;
          break;
         }
         while (1) {
          i17 = HEAP32[i20 + 24 >> 2] | 0;
          if ((i17 | 0) == 0) {
           i19 = 0;
           break L29;
          }
          if ((HEAP32[i17 + 12 >> 2] & 4 | 0) == 0) {
           i20 = i17;
          } else {
           i19 = i17;
           break;
          }
         }
        }
       } while (0);
       HEAP32[i6 + 4 >> 2] = i19;
       L35 : do {
        if ((i16 | 0) == 0) {
         i21 = 0;
        } else {
         if ((HEAP32[i16 + 12 >> 2] & 4 | 0) == 0) {
          i22 = i16;
         } else {
          i21 = i16;
          break;
         }
         while (1) {
          i13 = HEAP32[i22 + 28 >> 2] | 0;
          if ((i13 | 0) == 0) {
           i21 = 0;
           break L35;
          }
          if ((HEAP32[i13 + 12 >> 2] & 4 | 0) == 0) {
           i22 = i13;
          } else {
           i21 = i13;
           break;
          }
         }
        }
       } while (0);
       HEAP32[i6 + 8 >> 2] = i21;
       HEAP32[i6 + 12 >> 2] = 1;
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 240 >> 2] & 31](i1, i6);
       HEAP32[i8 >> 2] = i1;
       i16 = HEAP32[i14 >> 2] | 0;
       do {
        if ((i16 & 256 | 0) == 0) {
         if ((i16 & 2 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 188 >> 2] & 31](i2, i1);
         __ZN7WebCore24ChildNodeRemovalNotifier31notifyDescendantRemovedFromTreeERNS_13ContainerNodeE(i8, i2);
        } else {
         FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 188 >> 2] & 31](i2, i1);
         if ((HEAP32[i14 >> 2] & 2 | 0) != 0) {
          __ZN7WebCore24ChildNodeRemovalNotifier35notifyDescendantRemovedFromDocumentERNS_13ContainerNodeE(i8, i2);
         }
         i13 = HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] | 0;
         if ((HEAP8[i13 + 326 | 0] & 1) == 0) {
          break;
         }
         __ZN7WebCore8Document29didRemoveAllPendingStylesheetEv(i13);
        }
       } while (0);
       i12 = HEAP32[__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE >> 2] | 0;
       if ((i12 | 0) == 1) {
        __ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope11moveWidgetsEv(i7);
        i23 = HEAP32[__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE >> 2] | 0;
       } else {
        i23 = i12;
       }
       HEAP32[__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE >> 2] = i23 - 1;
       __ZN7WebCore4Node28dispatchSubtreeModifiedEventEv(i9);
       i15 = 1;
      } else {
       HEAP32[i3 >> 2] = 8;
       i15 = 0;
      }
     } while (0);
     i11 = i2 + 8 | 0;
     i12 = i11 | 0;
     i14 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     HEAP32[i12 >> 2] = i14;
     if ((i14 | 0) >= 1) {
      i10 = i15;
      break L1;
     }
     if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
      i10 = i15;
      break L1;
     }
     __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
     i10 = i15;
     break L1;
    }
   } while (0);
   HEAP32[i3 >> 2] = 8;
   i10 = 0;
  }
 } while (0);
 i3 = i1 + 8 | 0;
 i1 = i3 | 0;
 i15 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i15;
 if ((i15 | 0) >= 1) {
  STACKTOP = i4;
  return i10 | 0;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return i10 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 STACKTOP = i4;
 return i10 | 0;
}
function __ZN7WebCore13ContainerNode12insertBeforeEN3WTF10PassRefPtrINS_4NodeEEEPS3_Ri(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 64 | 0;
 i9 = i1 + 8 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 HEAP32[i4 >> 2] = 0;
 do {
  if ((i3 | 0) == 0) {
   i9 = i6 | 0;
   i10 = i2 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i9 >> 2] = i11;
   i11 = __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i1, i6, i4) | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i12 = i11;
    break;
   }
   i9 = i10 + 8 | 0;
   i10 = i9 | 0;
   i13 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    i12 = i11;
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    i12 = i11;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
   i12 = i11;
  } else {
   i11 = i2 | 0;
   i9 = __ZN7WebCoreL16checkAcceptChildEPNS_13ContainerNodeEPNS_4NodeES3_(i1, HEAP32[i11 >> 2] | 0, 0) | 0;
   HEAP32[i4 >> 2] = i9;
   if ((i9 | 0) != 0) {
    i12 = 0;
    break;
   }
   i9 = i3 + 16 | 0;
   if ((HEAP32[i9 >> 2] | 0) != (i1 | 0)) {
    HEAP32[i4 >> 2] = 8;
    i12 = 0;
    break;
   }
   i13 = i3 + 24 | 0;
   i10 = HEAP32[i11 >> 2] | 0;
   if ((i10 | 0) == (HEAP32[i13 >> 2] | 0) | (i10 | 0) == (i3 | 0)) {
    i12 = 1;
    break;
   }
   i10 = i3 + 8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   i10 = i7 + 12 | 0;
   i14 = i7 | 0;
   HEAP32[i14 >> 2] = i10;
   i15 = i7 + 4 | 0;
   HEAP32[i15 >> 2] = 11;
   i16 = i7 + 8 | 0;
   HEAP32[i16 >> 2] = 0;
   __ZN7WebCoreL37collectChildrenAndRemoveFromOldParentERNS_4NodeERN3WTF6VectorINS2_3RefIS0_EELj11ENS2_15CrashOnOverflowEEERi(HEAP32[i11 >> 2] | 0, i7, i4);
   do {
    if ((HEAP32[i4 >> 2] | 0) == 0) {
     if ((HEAP32[i16 >> 2] | 0) == 0) {
      i17 = 1;
      break;
     }
     i18 = i1 | 0;
     if (__ZNK7WebCore4Node8containsEPKS0_(HEAP32[i11 >> 2] | 0, i18) | 0) {
      HEAP32[i4 >> 2] = 3;
      i19 = 0;
      i20 = 32;
      break;
     }
     i21 = i1 + 20 | 0;
     i22 = HEAP32[(HEAP32[i21 >> 2] | 0) + 8 >> 2] | 0;
     do {
      if (!((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0 | (i22 | 0) == 0)) {
       i23 = __ZNK7WebCore8Document4pageEv(i22) | 0;
       do {
        if ((i23 | 0) == 0) {
         i24 = HEAP32[i22 + 2204 >> 2] | 0;
         if ((i24 | 0) == 0) {
          i25 = 0;
          break;
         }
         i25 = __ZNK7WebCore8Document4pageEv(i24) | 0;
        } else {
         i25 = i23;
        }
       } while (0);
       i23 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i25) | 0;
       if ((i23 | 0) == 0) {
        break;
       }
       __ZN7WebCore24InspectorInstrumentation21willInsertDOMNodeImplEPNS_19InstrumentingAgentsEPNS_4NodeE(i23, i18);
      }
     } while (0);
     __ZN7WebCore22ChildListMutationScopeC2ERNS_13ContainerNodeE(i8, i1);
     i22 = HEAP32[i14 >> 2] | 0;
     i23 = HEAP32[i16 >> 2] | 0;
     i24 = i22 + (i23 << 2) | 0;
     L26 : do {
      if ((i23 | 0) != 0) {
       i26 = i1 + 36 | 0;
       i27 = i22;
       while (1) {
        i28 = HEAP32[i27 >> 2] | 0;
        if ((HEAP32[i9 >> 2] | 0) != (i1 | 0)) {
         break L26;
        }
        i29 = i28 + 16 | 0;
        if ((HEAP32[i29 >> 2] | 0) != 0) {
         break L26;
        }
        __ZN7WebCore9TreeScope13adoptIfNeededEPNS_4NodeE(HEAP32[i21 >> 2] | 0, i28);
        i30 = HEAP32[i13 >> 2] | 0;
        HEAP32[i13 >> 2] = i28;
        if ((i30 | 0) == 0) {
         HEAP32[i26 >> 2] = i28;
        } else {
         HEAP32[i30 + 28 >> 2] = i28;
        }
        HEAP32[i29 >> 2] = i1;
        HEAP32[i28 + 24 >> 2] = i30;
        HEAP32[i28 + 28 >> 2] = i3;
        __ZN7WebCore13ContainerNode24updateTreeAfterInsertionERNS_4NodeE(i1, i28);
        i27 = i27 + 4 | 0;
        if ((i27 | 0) == (i24 | 0)) {
         break;
        }
       }
      }
     } while (0);
     __ZN7WebCore4Node28dispatchSubtreeModifiedEventEv(i18);
     i24 = HEAP32[i8 >> 2] | 0;
     if ((i24 | 0) == 0) {
      i19 = 1;
      i20 = 32;
      break;
     }
     i21 = i24 | 0;
     i22 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     if ((i22 | 0) == 0) {
      __ZN7WebCore28ChildListMutationAccumulatorD1Ev(i24);
      __ZN3WTF8fastFreeEPv(i24);
      i19 = 1;
      i20 = 32;
      break;
     } else {
      HEAP32[i21 >> 2] = i22;
      i19 = 1;
      i20 = 32;
      break;
     }
    } else {
     i19 = 0;
     i20 = 32;
    }
   } while (0);
   do {
    if ((i20 | 0) == 32) {
     i13 = HEAP32[i16 >> 2] | 0;
     if ((i13 | 0) == 0) {
      i17 = i19;
      break;
     }
     i9 = HEAP32[i14 >> 2] | 0;
     i11 = i9 + (i13 << 2) | 0;
     i13 = i9;
     while (1) {
      i9 = (HEAP32[i13 >> 2] | 0) + 8 | 0;
      i22 = i9 - 8 | 0;
      i21 = i9 | 0;
      i24 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
      HEAP32[i21 >> 2] = i24;
      do {
       if ((i24 | 0) < 1) {
        if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i22);
       }
      } while (0);
      i13 = i13 + 4 | 0;
      if ((i13 | 0) == (i11 | 0)) {
       break;
      }
     }
     HEAP32[i16 >> 2] = 0;
     i17 = i19;
    }
   } while (0);
   i16 = HEAP32[i14 >> 2] | 0;
   if (!((i10 | 0) == (i16 | 0) | (i16 | 0) == 0)) {
    HEAP32[i14 >> 2] = 0;
    HEAP32[i15 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i16);
   }
   i16 = i3 + 8 | 0;
   i11 = i16 | 0;
   i13 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    i12 = i17;
    break;
   }
   if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
    i12 = i17;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
   i12 = i17;
  }
 } while (0);
 i17 = i1 + 8 | 0;
 i1 = i17 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  STACKTOP = i5;
  return i12 | 0;
 }
 if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return i12 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
 STACKTOP = i5;
 return i12 | 0;
}
function __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_PNS1_11TagNodeListEEENS_24KeyValuePairKeyExtractorIS6_EENS1_17QualifiedNameHashENS_7HashMapIS2_S5_S9_NS_10HashTraitsIS2_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS2_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS2_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i2 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i11 | 0) == 0) {
   i12 = 8;
  } else {
   i13 = i11 << 1;
   i12 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i13 | 0) ? i11 : i13;
  }
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_PNS1_11TagNodeListEEENS_24KeyValuePairKeyExtractorIS6_EENS1_17QualifiedNameHashENS_7HashMapIS2_S5_S9_NS_10HashTraitsIS2_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i2, i12, 0) | 0;
  i14 = HEAP32[i9 >> 2] | 0;
 } else {
  i14 = i10;
 }
 i10 = HEAP32[i2 + 8 >> 2] | 0;
 i12 = i3 | 0;
 i3 = HEAP32[i12 >> 2] | 0;
 i13 = i3 + 4 | 0;
 i11 = HEAP32[i13 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i15 = __ZNK7WebCore13QualifiedName17QualifiedNameImpl11computeHashEv(i3) | 0;
  HEAP32[i13 >> 2] = i15;
  i16 = i15;
 } else {
  i16 = i11;
 }
 i11 = i16 & i10;
 i15 = i14 + (i11 << 3) | 0;
 i13 = i5 | 0;
 i3 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
 HEAP32[i13 >> 2] = i3;
 i17 = i3 | 0;
 HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
 i17 = i15 | 0;
 i3 = (HEAP32[i17 >> 2] | 0) == (HEAP32[i13 >> 2] | 0);
 __ZN7WebCore13QualifiedNameD1Ev(i5);
 do {
  if (i3) {
   i18 = i15;
   i19 = 14;
  } else {
   i20 = (i16 >>> 23) + ~i16 | 0;
   i21 = i20 << 12 ^ i20;
   i20 = i21 >>> 7 ^ i21;
   i21 = i20 << 2 ^ i20;
   i20 = i21 >>> 20 ^ i21 | 1;
   i21 = 0;
   i22 = 0;
   i23 = i11;
   i24 = i15;
   i25 = i17;
   while (1) {
    i26 = HEAP32[i25 >> 2] | 0;
    if ((i26 | 0) == -1) {
     i27 = i24;
    } else {
     if ((i26 | 0) == (HEAP32[i12 >> 2] | 0)) {
      i19 = 11;
      break;
     } else {
      i27 = i22;
     }
    }
    i26 = (i21 | 0) == 0 ? i20 : i21;
    i28 = i26 + i23 & i10;
    i29 = i14 + (i28 << 3) | 0;
    i30 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
    HEAP32[i13 >> 2] = i30;
    i31 = i30 | 0;
    HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
    i31 = i29 | 0;
    i30 = (HEAP32[i31 >> 2] | 0) == (HEAP32[i13 >> 2] | 0);
    __ZN7WebCore13QualifiedNameD1Ev(i5);
    if (i30) {
     i19 = 13;
     break;
    } else {
     i21 = i26;
     i22 = i27;
     i23 = i28;
     i24 = i29;
     i25 = i31;
    }
   }
   if ((i19 | 0) == 11) {
    i25 = (HEAP32[i9 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i23 = i1;
    HEAP32[i23 >> 2] = i24;
    HEAP32[i23 + 4 >> 2] = i25;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i4;
    return;
   } else if ((i19 | 0) == 13) {
    if ((i27 | 0) == 0) {
     i18 = i29;
     i19 = 14;
     break;
    }
    i25 = i7 | 0;
    i23 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
    HEAP32[i25 >> 2] = i23;
    i22 = i23 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
    i22 = i6 | 0;
    i23 = HEAP32[i25 >> 2] | 0;
    HEAP32[i22 >> 2] = i23;
    i25 = i23 | 0;
    HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
    i25 = i6 + 4 | 0;
    HEAP32[i25 >> 2] = 0;
    i23 = i8 | 0;
    i21 = HEAP32[i22 >> 2] | 0;
    HEAP32[i23 >> 2] = i21;
    i22 = i21 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
    i22 = i8 + 4 | 0;
    HEAP32[i22 >> 2] = HEAP32[i25 >> 2];
    __ZN7WebCore13QualifiedNameD1Ev(i6 | 0);
    __ZN7WebCore13QualifiedNameD1Ev(i7);
    i25 = HEAP32[i23 >> 2] | 0;
    HEAP32[i27 >> 2] = i25;
    i23 = i25 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
    HEAP32[i27 + 4 >> 2] = HEAP32[i22 >> 2];
    __ZN7WebCore13QualifiedNameD1Ev(i8 | 0);
    i22 = i2 + 16 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) - 1;
    i32 = i27;
    i33 = i22;
    break;
   }
  }
 } while (0);
 if ((i19 | 0) == 14) {
  i32 = i18;
  i33 = i2 + 16 | 0;
 }
 i18 = HEAP32[i12 >> 2] | 0;
 HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
 __ZN7WebCore13QualifiedName5derefEv(i32 | 0);
 HEAP32[i32 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i32 + 4 >> 2] = 0;
 i12 = i2 + 12 | 0;
 i18 = (HEAP32[i12 >> 2] | 0) + 1 | 0;
 HEAP32[i12 >> 2] = i18;
 i12 = i2 + 4 | 0;
 i19 = HEAP32[i12 >> 2] | 0;
 if (((HEAP32[i33 >> 2] | 0) + i18 << 1 | 0) < (i19 | 0)) {
  i34 = i32;
  i35 = i19;
 } else {
  if ((i19 | 0) == 0) {
   i36 = 8;
  } else {
   i33 = i19 << 1;
   i36 = (i18 * 6 & -1 | 0) < (i33 | 0) ? i19 : i33;
  }
  i33 = __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_PNS1_11TagNodeListEEENS_24KeyValuePairKeyExtractorIS6_EENS1_17QualifiedNameHashENS_7HashMapIS2_S5_S9_NS_10HashTraitsIS2_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i2, i36, i32) | 0;
  i34 = i33;
  i35 = HEAP32[i12 >> 2] | 0;
 }
 i12 = (HEAP32[i9 >> 2] | 0) + (i35 << 3) | 0;
 i35 = i1;
 HEAP32[i35 >> 2] = i34;
 HEAP32[i35 + 4 >> 2] = i12;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 56 | 0;
 i7 = i1 + 8 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 HEAP32[i3 >> 2] = 0;
 i7 = i2 | 0;
 i2 = __ZN7WebCoreL16checkAcceptChildEPNS_13ContainerNodeEPNS_4NodeES3_(i1, HEAP32[i7 >> 2] | 0, 0) | 0;
 HEAP32[i3 >> 2] = i2;
 do {
  if ((i2 | 0) == 0) {
   i8 = i1 + 40 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   i10 = HEAP32[i7 >> 2] | 0;
   if ((i10 | 0) == (i9 | 0)) {
    i11 = (i9 | 0) != 0;
    break;
   }
   i9 = i5 + 12 | 0;
   i12 = i5 | 0;
   HEAP32[i12 >> 2] = i9;
   i13 = i5 + 4 | 0;
   HEAP32[i13 >> 2] = 11;
   i14 = i5 + 8 | 0;
   HEAP32[i14 >> 2] = 0;
   __ZN7WebCoreL37collectChildrenAndRemoveFromOldParentERNS_4NodeERN3WTF6VectorINS2_3RefIS0_EELj11ENS2_15CrashOnOverflowEEERi(i10, i5, i3);
   do {
    if ((HEAP32[i3 >> 2] | 0) == 0) {
     if ((HEAP32[i14 >> 2] | 0) == 0) {
      i15 = 1;
      break;
     }
     i10 = i1 | 0;
     if (__ZNK7WebCore4Node8containsEPKS0_(HEAP32[i7 >> 2] | 0, i10) | 0) {
      HEAP32[i3 >> 2] = 3;
      i16 = 0;
      i17 = 25;
      break;
     }
     i18 = i1 + 20 | 0;
     i19 = HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] | 0;
     do {
      if (!((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0 | (i19 | 0) == 0)) {
       i20 = __ZNK7WebCore8Document4pageEv(i19) | 0;
       do {
        if ((i20 | 0) == 0) {
         i21 = HEAP32[i19 + 2204 >> 2] | 0;
         if ((i21 | 0) == 0) {
          i22 = 0;
          break;
         }
         i22 = __ZNK7WebCore8Document4pageEv(i21) | 0;
        } else {
         i22 = i20;
        }
       } while (0);
       i20 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i22) | 0;
       if ((i20 | 0) == 0) {
        break;
       }
       __ZN7WebCore24InspectorInstrumentation21willInsertDOMNodeImplEPNS_19InstrumentingAgentsEPNS_4NodeE(i20, i10);
      }
     } while (0);
     __ZN7WebCore22ChildListMutationScopeC2ERNS_13ContainerNodeE(i6, i1);
     i19 = HEAP32[i12 >> 2] | 0;
     i20 = HEAP32[i14 >> 2] | 0;
     i21 = i19 + (i20 << 2) | 0;
     L20 : do {
      if ((i20 | 0) != 0) {
       i23 = i1 + 36 | 0;
       i24 = i19;
       while (1) {
        i25 = HEAP32[i24 >> 2] | 0;
        i26 = i25 + 16 | 0;
        if ((HEAP32[i26 >> 2] | 0) != 0) {
         break L20;
        }
        __ZN7WebCore9TreeScope13adoptIfNeededEPNS_4NodeE(HEAP32[i18 >> 2] | 0, i25);
        HEAP32[i26 >> 2] = i1;
        i26 = HEAP32[i8 >> 2] | 0;
        if ((i26 | 0) == 0) {
         HEAP32[i23 >> 2] = i25;
        } else {
         HEAP32[i25 + 24 >> 2] = i26;
         HEAP32[i26 + 28 >> 2] = i25;
        }
        HEAP32[i8 >> 2] = i25;
        __ZN7WebCore13ContainerNode24updateTreeAfterInsertionERNS_4NodeE(i1, i25);
        i24 = i24 + 4 | 0;
        if ((i24 | 0) == (i21 | 0)) {
         break;
        }
       }
      }
     } while (0);
     __ZN7WebCore4Node28dispatchSubtreeModifiedEventEv(i10);
     i21 = HEAP32[i6 >> 2] | 0;
     if ((i21 | 0) == 0) {
      i16 = 1;
      i17 = 25;
      break;
     }
     i18 = i21 | 0;
     i19 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) == 0) {
      __ZN7WebCore28ChildListMutationAccumulatorD1Ev(i21);
      __ZN3WTF8fastFreeEPv(i21);
      i16 = 1;
      i17 = 25;
      break;
     } else {
      HEAP32[i18 >> 2] = i19;
      i16 = 1;
      i17 = 25;
      break;
     }
    } else {
     i16 = 0;
     i17 = 25;
    }
   } while (0);
   do {
    if ((i17 | 0) == 25) {
     i8 = HEAP32[i14 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i15 = i16;
      break;
     }
     i19 = HEAP32[i12 >> 2] | 0;
     i18 = i19 + (i8 << 2) | 0;
     i8 = i19;
     while (1) {
      i19 = (HEAP32[i8 >> 2] | 0) + 8 | 0;
      i21 = i19 - 8 | 0;
      i20 = i19 | 0;
      i24 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
      HEAP32[i20 >> 2] = i24;
      do {
       if ((i24 | 0) < 1) {
        if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i21);
       }
      } while (0);
      i8 = i8 + 4 | 0;
      if ((i8 | 0) == (i18 | 0)) {
       break;
      }
     }
     HEAP32[i14 >> 2] = 0;
     i15 = i16;
    }
   } while (0);
   i14 = HEAP32[i12 >> 2] | 0;
   if ((i9 | 0) == (i14 | 0) | (i14 | 0) == 0) {
    i11 = i15;
    break;
   }
   HEAP32[i12 >> 2] = 0;
   HEAP32[i13 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i14);
   i11 = i15;
  } else {
   i11 = 0;
  }
 } while (0);
 i15 = i1 + 8 | 0;
 i1 = i15 | 0;
 i16 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i16;
 if ((i16 | 0) >= 1) {
  STACKTOP = i4;
  return i11 | 0;
 }
 if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return i11 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
 STACKTOP = i4;
 return i11 | 0;
}
function ___udivmoddi4(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i6 = i1;
 i7 = i2;
 i8 = i7;
 i9 = i3;
 i10 = i4;
 i11 = i10;
 if ((i8 | 0) == 0) {
  i12 = (i5 | 0) != 0;
  if ((i11 | 0) == 0) {
   if (i12) {
    HEAP32[i5 >> 2] = (i6 >>> 0) % (i9 >>> 0);
    HEAP32[i5 + 4 >> 2] = 0;
   }
   i13 = 0;
   i14 = (i6 >>> 0) / (i9 >>> 0) >>> 0;
   return (tempRet0 = i13, i14) | 0;
  } else {
   if (!i12) {
    i13 = 0;
    i14 = 0;
    return (tempRet0 = i13, i14) | 0;
   }
   HEAP32[i5 >> 2] = i1 & -1;
   HEAP32[i5 + 4 >> 2] = i2 & 0;
   i13 = 0;
   i14 = 0;
   return (tempRet0 = i13, i14) | 0;
  }
 }
 i12 = (i11 | 0) == 0;
 do {
  if ((i9 | 0) == 0) {
   if (i12) {
    if ((i5 | 0) != 0) {
     HEAP32[i5 >> 2] = (i8 >>> 0) % (i9 >>> 0);
     HEAP32[i5 + 4 >> 2] = 0;
    }
    i13 = 0;
    i14 = (i8 >>> 0) / (i9 >>> 0) >>> 0;
    return (tempRet0 = i13, i14) | 0;
   }
   if ((i6 | 0) == 0) {
    if ((i5 | 0) != 0) {
     HEAP32[i5 >> 2] = 0;
     HEAP32[i5 + 4 >> 2] = (i8 >>> 0) % (i11 >>> 0);
    }
    i13 = 0;
    i14 = (i8 >>> 0) / (i11 >>> 0) >>> 0;
    return (tempRet0 = i13, i14) | 0;
   }
   i15 = i11 - 1 | 0;
   if ((i15 & i11 | 0) == 0) {
    if ((i5 | 0) != 0) {
     HEAP32[i5 >> 2] = i1 & -1;
     HEAP32[i5 + 4 >> 2] = i15 & i8 | i2 & 0;
    }
    i13 = 0;
    i14 = i8 >>> ((_llvm_cttz_i32(i11 | 0) | 0) >>> 0);
    return (tempRet0 = i13, i14) | 0;
   }
   i15 = (_llvm_ctlz_i32(i11 | 0) | 0) - (_llvm_ctlz_i32(i8 | 0) | 0) | 0;
   if (i15 >>> 0 <= 30) {
    i16 = i15 + 1 | 0;
    i17 = 31 - i15 | 0;
    i18 = i16;
    i19 = i8 << i17 | i6 >>> (i16 >>> 0);
    i20 = i8 >>> (i16 >>> 0);
    i21 = 0;
    i22 = i6 << i17;
    break;
   }
   if ((i5 | 0) == 0) {
    i13 = 0;
    i14 = 0;
    return (tempRet0 = i13, i14) | 0;
   }
   HEAP32[i5 >> 2] = i1 & -1;
   HEAP32[i5 + 4 >> 2] = i7 | i2 & 0;
   i13 = 0;
   i14 = 0;
   return (tempRet0 = i13, i14) | 0;
  } else {
   if (!i12) {
    i17 = (_llvm_ctlz_i32(i11 | 0) | 0) - (_llvm_ctlz_i32(i8 | 0) | 0) | 0;
    if (i17 >>> 0 <= 31) {
     i16 = i17 + 1 | 0;
     i15 = 31 - i17 | 0;
     i23 = i17 - 31 >> 31;
     i18 = i16;
     i19 = i6 >>> (i16 >>> 0) & i23 | i8 << i15;
     i20 = i8 >>> (i16 >>> 0) & i23;
     i21 = 0;
     i22 = i6 << i15;
     break;
    }
    if ((i5 | 0) == 0) {
     i13 = 0;
     i14 = 0;
     return (tempRet0 = i13, i14) | 0;
    }
    HEAP32[i5 >> 2] = i1 & -1;
    HEAP32[i5 + 4 >> 2] = i7 | i2 & 0;
    i13 = 0;
    i14 = 0;
    return (tempRet0 = i13, i14) | 0;
   }
   i15 = i9 - 1 | 0;
   if ((i15 & i9 | 0) != 0) {
    i23 = (_llvm_ctlz_i32(i9 | 0) | 0) + 33 - (_llvm_ctlz_i32(i8 | 0) | 0) | 0;
    i16 = 64 - i23 | 0;
    i17 = 32 - i23 | 0;
    i24 = i17 >> 31;
    i25 = i23 - 32 | 0;
    i26 = i25 >> 31;
    i18 = i23;
    i19 = i17 - 1 >> 31 & i8 >>> (i25 >>> 0) | (i8 << i17 | i6 >>> (i23 >>> 0)) & i26;
    i20 = i26 & i8 >>> (i23 >>> 0);
    i21 = i6 << i16 & i24;
    i22 = (i8 << i16 | i6 >>> (i25 >>> 0)) & i24 | i6 << i17 & i23 - 33 >> 31;
    break;
   }
   if ((i5 | 0) != 0) {
    HEAP32[i5 >> 2] = i15 & i6;
    HEAP32[i5 + 4 >> 2] = 0;
   }
   if ((i9 | 0) == 1) {
    i13 = i7 | i2 & 0;
    i14 = i1 & -1 | 0;
    return (tempRet0 = i13, i14) | 0;
   } else {
    i15 = _llvm_cttz_i32(i9 | 0) | 0;
    i13 = i8 >>> (i15 >>> 0) | 0;
    i14 = i8 << 32 - i15 | i6 >>> (i15 >>> 0) | 0;
    return (tempRet0 = i13, i14) | 0;
   }
  }
 } while (0);
 if ((i18 | 0) == 0) {
  i27 = i22;
  i28 = i21;
  i29 = i20;
  i30 = i19;
  i31 = 0;
  i32 = 0;
 } else {
  i6 = i3 & -1 | 0;
  i3 = i10 | i4 & 0;
  i4 = _i64Add(i6, i3, -1, -1) | 0;
  i10 = tempRet0;
  i8 = i22;
  i22 = i21;
  i21 = i20;
  i20 = i19;
  i19 = i18;
  i18 = 0;
  while (1) {
   i33 = i22 >>> 31 | i8 << 1;
   i34 = i18 | i22 << 1;
   i9 = i20 << 1 | i8 >>> 31 | 0;
   i1 = i20 >>> 31 | i21 << 1 | 0;
   _i64Subtract(i4, i10, i9, i1) | 0;
   i2 = tempRet0;
   i7 = i2 >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
   i35 = i7 & 1;
   i36 = _i64Subtract(i9, i1, i7 & i6, (((i2 | 0) < 0 ? -1 : 0) >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1) & i3) | 0;
   i37 = tempRet0;
   i2 = i19 - 1 | 0;
   if ((i2 | 0) == 0) {
    break;
   } else {
    i8 = i33;
    i22 = i34;
    i21 = i37;
    i20 = i36;
    i19 = i2;
    i18 = i35;
   }
  }
  i27 = i33;
  i28 = i34;
  i29 = i37;
  i30 = i36;
  i31 = 0;
  i32 = i35;
 }
 i35 = i28;
 i28 = 0;
 if ((i5 | 0) != 0) {
  HEAP32[i5 >> 2] = i30;
  HEAP32[i5 + 4 >> 2] = i29;
 }
 i13 = (i35 | 0) >>> 31 | (i27 | i28) << 1 | (i28 << 1 | i35 >>> 31) & 0 | i31;
 i14 = (i35 << 1 | 0 >>> 31) & -2 | i32;
 return (tempRet0 = i13, i14) | 0;
}
function __ZNK7WebCore13ContainerNode18getUpperLeftCornerERNS_10FloatPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d22 = +0, d23 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i12 = i11;
 i13 = (HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0;
 i14 = i1 + 32 | 0;
 if (i13) {
  i15 = i14 | 0;
 } else {
  i15 = HEAP32[i14 >> 2] | 0;
 }
 if ((HEAP32[i15 >> 2] | 0) == 0) {
  i16 = 0;
  STACKTOP = i3;
  return i16 | 0;
 }
 if (i13) {
  i17 = i14 | 0;
 } else {
  i17 = HEAP32[i14 >> 2] | 0;
 }
 i14 = HEAP32[i17 >> 2] | 0;
 if ((HEAP32[i14 + 20 >> 2] & 3072 | 0) != 1024) {
  HEAPF32[i6 >> 2] = +0;
  HEAPF32[i6 + 4 >> 2] = +0;
  __ZNK7WebCore12RenderObject15localToAbsoluteERKNS_10FloatPointEj(i5, i14, i6, 2);
  i6 = i2;
  i17 = HEAP32[i5 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i6 + 4 >> 2] = i17;
  i16 = 1;
  STACKTOP = i3;
  return i16 | 0;
 }
 L16 : do {
  if ((i14 | 0) != 0) {
   i17 = i1 | 0;
   i6 = i14;
   while (1) {
    i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 32 >> 2] & 63](i6) | 0;
    do {
     if ((i5 | 0) == 0) {
      i13 = HEAP32[i6 + 16 >> 2] | 0;
      if ((i13 | 0) == 0) {
       i18 = i6;
      } else {
       i19 = i13;
       break;
      }
      while (1) {
       i13 = HEAP32[i18 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break L16;
       }
       i15 = HEAP32[i13 + 16 >> 2] | 0;
       if ((i15 | 0) == 0) {
        i18 = i13 | 0;
       } else {
        i19 = i15;
        break;
       }
      }
     } else {
      i19 = i5;
     }
    } while (0);
    i20 = i19 + 20 | 0;
    i5 = HEAP32[i20 >> 2] | 0;
    if ((i5 & 3072 | 0) != 1024) {
     i21 = 17;
     break;
    }
    do {
     if ((HEAP32[i6 + 20 >> 2] & 128 | 0) == 0) {
      i15 = HEAP32[i6 + 4 >> 2] | 0;
      if (!((i15 | 0) != 0 & (i15 | 0) == (i17 | 0))) {
       i21 = 23;
       break;
      }
      if ((i5 & 768 | 0) != 256) {
       i21 = 23;
       break;
      }
      if ((HEAP32[i19 + 48 >> 2] | 0) != 0) {
       i21 = 23;
      }
     } else {
      i21 = 23;
     }
    } while (0);
    if ((i21 | 0) == 23) {
     i21 = 0;
     if (!((i5 & 768 | 0) != 256 & (i5 & 2048 | 0) == 0)) {
      break;
     }
    }
    if ((i19 | 0) == 0) {
     break L16;
    } else {
     i6 = i19;
    }
   }
   if ((i21 | 0) == 17) {
    HEAPF32[i9 >> 2] = +0;
    HEAPF32[i9 + 4 >> 2] = +0;
    __ZNK7WebCore12RenderObject15localToAbsoluteERKNS_10FloatPointEj(i8, i19, i9, 2);
    i6 = i2;
    i17 = HEAP32[i7 + 4 >> 2] | 0;
    HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
    HEAP32[i6 + 4 >> 2] = i17;
    i16 = 1;
    STACKTOP = i3;
    return i16 | 0;
   }
   i17 = i2;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i17 + 4 >> 2] = 0;
   i6 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i6 & 768 | 0) == 256) {
     i15 = i19 + 48 | 0;
     if ((HEAP32[i15 >> 2] | 0) == 0) {
      i21 = 27;
      break;
     }
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 640 >> 2] & 31](i10, i19);
     d22 = +(HEAP32[i10 >> 2] | 0);
     d23 = +(HEAP32[(__ZN7WebCore9InlineBox4rootEv(HEAP32[i15 >> 2] | 0) | 0) + 72 >> 2] | 0);
     i15 = i2 | 0;
     HEAPF32[i15 >> 2] = d22 + +HEAPF32[i15 >> 2];
     i15 = i2 + 4 | 0;
     HEAPF32[i15 >> 2] = d23 + +HEAPF32[i15 >> 2];
    } else {
     i21 = 27;
    }
   } while (0);
   do {
    if ((i21 | 0) == 27) {
     if ((i6 & 512 | 0) == 0) {
      break;
     }
     i15 = i19 + 44 | 0;
     d23 = +(HEAP32[i15 + 4 >> 2] | 0);
     HEAPF32[i2 >> 2] = +(HEAP32[i15 >> 2] | 0);
     HEAPF32[i2 + 4 >> 2] = d23;
    }
   } while (0);
   __ZNK7WebCore12RenderObject15localToAbsoluteERKNS_10FloatPointEj(i12, __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i19, 0, 0) | 0, i2, 2);
   i6 = HEAP32[i11 + 4 >> 2] | 0;
   HEAP32[i17 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i17 + 4 >> 2] = i6;
   i16 = 1;
   STACKTOP = i3;
   return i16 | 0;
  }
 } while (0);
 i11 = i1 + 20 | 0;
 if ((__ZNK7WebCore8Document4viewEv(HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] | 0) | 0) == 0) {
  i16 = 0;
  STACKTOP = i3;
  return i16 | 0;
 }
 i1 = __ZNK7WebCore8Document4viewEv(HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 184 >> 2] & 31](i4, i1 | 0);
 i1 = i2;
 d23 = +(+(HEAP32[i4 + 4 >> 2] | 0));
 HEAP32[i1 >> 2] = 0;
 HEAPF32[i1 + 4 >> 2] = d23;
 i16 = 1;
 STACKTOP = i3;
 return i16 | 0;
}
function __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 40 | 0;
 i9 = i3 + 48 | 0;
 i10 = i1 + 20 | 0;
 i11 = HEAP32[(HEAP32[i10 >> 2] | 0) + 8 >> 2] | 0;
 i12 = i2 | 0;
 i2 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i11 | 0) != (HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0)) {
   i13 = i6 | 0;
   HEAP32[i13 >> 2] = i2;
   if ((i2 | 0) != 0) {
    i14 = i2 + 8 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
   }
   i14 = i7 | 0;
   HEAP32[i14 >> 2] = 0;
   __ZN7WebCore8Document9adoptNodeEN3WTF10PassRefPtrINS_4NodeEEERi(i5, i11, i6, i14);
   i14 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i15 = i14 + 8 | 0;
     i16 = i15 | 0;
     i17 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     HEAP32[i16 >> 2] = i17;
     if ((i17 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
    }
   } while (0);
   i14 = HEAP32[i13 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   i15 = i14 + 8 | 0;
   i14 = i15 | 0;
   i17 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i17;
   if ((i17 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
  }
 } while (0);
 i5 = HEAP32[i12 >> 2] | 0;
 HEAP32[i5 + 16 >> 2] = i1;
 i6 = i1 + 40 | 0;
 i11 = HEAP32[i6 >> 2] | 0;
 if ((i11 | 0) == 0) {
  HEAP32[i1 + 36 >> 2] = i5;
 } else {
  HEAP32[i5 + 24 >> 2] = i11;
  HEAP32[i11 + 28 >> 2] = i5;
 }
 HEAP32[i6 >> 2] = i5;
 __ZN7WebCore9TreeScope13adoptIfNeededEPNS_4NodeE(HEAP32[i10 >> 2] | 0, HEAP32[i12 >> 2] | 0);
 __ZNK7WebCore4Node48updateAncestorConnectedSubframeCountForInsertionEv(HEAP32[i12 >> 2] | 0);
 __ZN7WebCore22ChildListMutationScopeC2ERNS_13ContainerNodeE(i8, i1);
 i10 = HEAP32[i12 >> 2] | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   if ((HEAP32[i5 + 44 >> 2] | 0) != 0) {
    __ZN7WebCore28ChildListMutationAccumulator10childAddedERNS_4NodeE(i5, i10);
   }
   i8 = i5 | 0;
   i6 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN7WebCore28ChildListMutationAccumulatorD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i8 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i12 >> 2] | 0;
 i10 = HEAP32[i5 + 12 >> 2] | 0;
 if ((i10 & 4 | 0) == 0) {
  i18 = i10 << 2 & 4 ^ 6;
 } else {
  i18 = 0;
 }
 HEAP32[i4 >> 2] = i18;
 i18 = i5;
 while (1) {
  i10 = HEAP32[i18 + 24 >> 2] | 0;
  if ((i10 | 0) == 0) {
   i19 = 0;
   break;
  }
  if ((HEAP32[i10 + 12 >> 2] & 4 | 0) == 0) {
   i18 = i10;
  } else {
   i19 = i10;
   break;
  }
 }
 HEAP32[i4 + 4 >> 2] = i19;
 i19 = i5;
 while (1) {
  i5 = HEAP32[i19 + 28 >> 2] | 0;
  if ((i5 | 0) == 0) {
   i20 = 0;
   break;
  }
  if ((HEAP32[i5 + 12 >> 2] & 4 | 0) == 0) {
   i19 = i5;
  } else {
   i20 = i5;
   break;
  }
 }
 HEAP32[i4 + 8 >> 2] = i20;
 HEAP32[i4 + 12 >> 2] = 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 240 >> 2] & 31](i1, i4);
 HEAP32[i9 >> 2] = i1;
 i1 = i9 + 4 | 0;
 HEAP32[i1 >> 2] = 0;
 i4 = i9 + 8 | 0;
 HEAP32[i4 >> 2] = 0;
 i20 = i9 + 12 | 0;
 HEAP32[i20 >> 2] = 0;
 __ZN7WebCore26ChildNodeInsertionNotifier6notifyERNS_4NodeE(i9, HEAP32[i12 >> 2] | 0);
 i9 = HEAP32[i20 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i19 = HEAP32[i1 >> 2] | 0;
  i5 = i19 + (i9 << 2) | 0;
  i9 = i19;
  while (1) {
   i19 = (HEAP32[i9 >> 2] | 0) + 8 | 0;
   i18 = i19 - 8 | 0;
   i10 = i19 | 0;
   i6 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i6;
   do {
    if ((i6 | 0) < 1) {
     if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i18);
    }
   } while (0);
   i9 = i9 + 4 | 0;
   if ((i9 | 0) == (i5 | 0)) {
    break;
   }
  }
  HEAP32[i20 >> 2] = 0;
 }
 i20 = HEAP32[i1 >> 2] | 0;
 if ((i20 | 0) == 0) {
  i21 = HEAP32[i12 >> 2] | 0;
  __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i21, 65536);
  STACKTOP = i3;
  return;
 }
 HEAP32[i1 >> 2] = 0;
 HEAP32[i4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i20);
 i21 = HEAP32[i12 >> 2] | 0;
 __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i21, 65536);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13ContainerNode18parserInsertBeforeEN3WTF10PassRefPtrINS_4NodeEEEPS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 i10 = i4 + 48 | 0;
 i11 = i3 + 24 | 0;
 i12 = i2 | 0;
 i2 = HEAP32[i12 >> 2] | 0;
 if ((i2 | 0) == (HEAP32[i11 >> 2] | 0) | (i2 | 0) == (i3 | 0)) {
  STACKTOP = i4;
  return;
 }
 i13 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 do {
  if ((i13 | 0) != (HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0)) {
   i14 = i7 | 0;
   HEAP32[i14 >> 2] = i2;
   if ((i2 | 0) != 0) {
    i15 = i2 + 8 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
   }
   i15 = i8 | 0;
   HEAP32[i15 >> 2] = 0;
   __ZN7WebCore8Document9adoptNodeEN3WTF10PassRefPtrINS_4NodeEEERi(i6, i13, i7, i15);
   i15 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i16 = i15 + 8 | 0;
     i17 = i16 | 0;
     i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     HEAP32[i17 >> 2] = i18;
     if ((i18 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
    }
   } while (0);
   i15 = HEAP32[i14 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   i16 = i15 + 8 | 0;
   i15 = i16 | 0;
   i18 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   HEAP32[i15 >> 2] = i18;
   if ((i18 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
  }
 } while (0);
 i6 = HEAP32[i12 >> 2] | 0;
 i7 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = i6;
 if ((i7 | 0) == 0) {
  HEAP32[i1 + 36 >> 2] = i6;
 } else {
  HEAP32[i7 + 28 >> 2] = i6;
 }
 HEAP32[i6 + 16 >> 2] = i1;
 HEAP32[i6 + 24 >> 2] = i7;
 HEAP32[i6 + 28 >> 2] = i3;
 __ZNK7WebCore4Node48updateAncestorConnectedSubframeCountForInsertionEv(HEAP32[i12 >> 2] | 0);
 __ZN7WebCore22ChildListMutationScopeC2ERNS_13ContainerNodeE(i9, i1);
 i3 = HEAP32[i12 >> 2] | 0;
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   if ((HEAP32[i6 + 44 >> 2] | 0) != 0) {
    __ZN7WebCore28ChildListMutationAccumulator10childAddedERNS_4NodeE(i6, i3);
   }
   i9 = i6 | 0;
   i7 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) == 0) {
    __ZN7WebCore28ChildListMutationAccumulatorD1Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i12 >> 2] | 0;
 i3 = HEAP32[i6 + 12 >> 2] | 0;
 if ((i3 & 4 | 0) == 0) {
  i19 = i3 << 2 & 4 ^ 6;
 } else {
  i19 = 0;
 }
 HEAP32[i5 >> 2] = i19;
 i19 = i6;
 while (1) {
  i3 = HEAP32[i19 + 24 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i20 = 0;
   break;
  }
  if ((HEAP32[i3 + 12 >> 2] & 4 | 0) == 0) {
   i19 = i3;
  } else {
   i20 = i3;
   break;
  }
 }
 HEAP32[i5 + 4 >> 2] = i20;
 i20 = i6;
 while (1) {
  i6 = HEAP32[i20 + 28 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i21 = 0;
   break;
  }
  if ((HEAP32[i6 + 12 >> 2] & 4 | 0) == 0) {
   i20 = i6;
  } else {
   i21 = i6;
   break;
  }
 }
 HEAP32[i5 + 8 >> 2] = i21;
 HEAP32[i5 + 12 >> 2] = 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 240 >> 2] & 31](i1, i5);
 HEAP32[i10 >> 2] = i1;
 i1 = i10 + 4 | 0;
 HEAP32[i1 >> 2] = 0;
 i5 = i10 + 8 | 0;
 HEAP32[i5 >> 2] = 0;
 i21 = i10 + 12 | 0;
 HEAP32[i21 >> 2] = 0;
 __ZN7WebCore26ChildNodeInsertionNotifier6notifyERNS_4NodeE(i10, HEAP32[i12 >> 2] | 0);
 i10 = HEAP32[i21 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i20 = HEAP32[i1 >> 2] | 0;
  i6 = i20 + (i10 << 2) | 0;
  i10 = i20;
  while (1) {
   i20 = (HEAP32[i10 >> 2] | 0) + 8 | 0;
   i19 = i20 - 8 | 0;
   i3 = i20 | 0;
   i7 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i7;
   do {
    if ((i7 | 0) < 1) {
     if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i19);
    }
   } while (0);
   i10 = i10 + 4 | 0;
   if ((i10 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i21 >> 2] = 0;
 }
 i21 = HEAP32[i1 >> 2] | 0;
 if ((i21 | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i5 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i21);
 }
 __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(HEAP32[i12 >> 2] | 0, 65536);
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableINSt3__14pairIhNS_6StringEEENS_12KeyValuePairIS4_PN7WebCore12LiveNodeListEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E3addINS_17HashMapTranslatorISK_SE_EES4_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SE_SK_SH_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i7 = 8;
  } else {
   i8 = i6 << 1;
   i7 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i8 | 0) ? i6 : i8;
  }
  __ZN3WTF9HashTableINSt3__14pairIhNS_6StringEEENS_12KeyValuePairIS4_PN7WebCore12LiveNodeListEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E6rehashEiPS9_(i2, i7, 0) | 0;
  i9 = HEAP32[i4 >> 2] | 0;
 } else {
  i9 = i5;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = i3 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i6 = HEAP32[i8 + 16 >> 2] | 0;
 if (i6 >>> 0 > 127 >>> 0) {
  i10 = i6 >>> 7;
 } else {
  i10 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i8) | 0;
 }
 i8 = i3 | 0;
 i3 = (HEAPU8[i8] | 0) + i10 | 0;
 i10 = (i3 >>> 23) + ~i3 | 0;
 i6 = i10 << 12 ^ i10;
 i10 = i6 >>> 7 ^ i6;
 i6 = i10 << 2 ^ i10;
 i10 = i6 >>> 20 ^ i6 | 1;
 i6 = 0;
 i11 = i3;
 i3 = 0;
 L11 : while (1) {
  i12 = i11 & i5;
  i13 = i9 + (i12 * 12 & -1) | 0;
  i14 = i13 | 0;
  i15 = HEAP8[i14] | 0;
  if (i15 << 24 >> 24 == 0) {
   if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i9 + (i12 * 12 & -1) + 4 >> 2] | 0, 0) | 0) {
    break;
   }
   i16 = HEAP8[i14] | 0;
  } else {
   i16 = i15;
  }
  do {
   if (i16 << 24 >> 24 == -1) {
    i17 = i13;
   } else {
    if (i16 << 24 >> 24 != (HEAP8[i8] | 0)) {
     i17 = i6;
     break;
    }
    if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i9 + (i12 * 12 & -1) + 4 >> 2] | 0, HEAP32[i7 >> 2] | 0) | 0) {
     i18 = 15;
     break L11;
    } else {
     i17 = i6;
    }
   }
  } while (0);
  i15 = (i3 | 0) == 0 ? i10 : i3;
  i6 = i17;
  i11 = i15 + i12 | 0;
  i3 = i15;
 }
 if ((i18 | 0) == 15) {
  i18 = (HEAP32[i4 >> 2] | 0) + ((HEAP32[i2 + 4 >> 2] | 0) * 12 & -1) | 0;
  i3 = i1;
  HEAP32[i3 >> 2] = i13;
  HEAP32[i3 + 4 >> 2] = i18;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i6 | 0) == 0) {
  i19 = i13;
 } else {
  _memset(i6 | 0, 0, 12) | 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i19 = i6;
 }
 HEAP8[i19 | 0] = HEAP8[i8] | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = i19 + 4 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i8 >> 2] = i7;
    break;
   }
  }
 } while (0);
 HEAP32[i19 + 8 >> 2] = 0;
 i6 = i2 + 12 | 0;
 i7 = (HEAP32[i6 >> 2] | 0) + 1 | 0;
 HEAP32[i6 >> 2] = i7;
 i6 = i2 + 4 | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i7 << 1 | 0) < (i8 | 0)) {
  i20 = i19;
  i21 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i22 = 8;
  } else {
   i13 = i8 << 1;
   i22 = (i7 * 6 & -1 | 0) < (i13 | 0) ? i8 : i13;
  }
  i13 = __ZN3WTF9HashTableINSt3__14pairIhNS_6StringEEENS_12KeyValuePairIS4_PN7WebCore12LiveNodeListEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E6rehashEiPS9_(i2, i22, i19) | 0;
  i20 = i13;
  i21 = HEAP32[i6 >> 2] | 0;
 }
 i6 = (HEAP32[i4 >> 2] | 0) + (i21 * 12 & -1) | 0;
 i21 = i1;
 HEAP32[i21 >> 2] = i20;
 HEAP32[i21 + 4 >> 2] = i6;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore12LiveNodeListEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E6rehashEiPS9_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 * 12 & -1) | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i8 = 0;
  i9 = i7 | 0;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i2 = i7 + (i10 * 12 & -1) | 0;
  i12 = i2 | 0;
  i13 = HEAP8[i12] | 0;
  if ((i13 << 24 >> 24 | 0) == 0) {
   i14 = HEAP32[i7 + (i10 * 12 & -1) + 4 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i15 = i11;
   } else {
    i16 = i14;
    i17 = 6;
   }
  } else if ((i13 << 24 >> 24 | 0) == (-1 | 0)) {
   i15 = i11;
  } else {
   i16 = HEAP32[i7 + (i10 * 12 & -1) + 4 >> 2] | 0;
   i17 = 6;
  }
  if ((i17 | 0) == 6) {
   i17 = 0;
   i14 = HEAP32[i6 >> 2] | 0;
   i18 = HEAP32[i4 >> 2] | 0;
   i19 = i7 + (i10 * 12 & -1) + 4 | 0;
   i20 = (i13 & 255) + ((HEAP32[i16 + 16 >> 2] | 0) >>> 7) | 0;
   i21 = (i20 >>> 23) + ~i20 | 0;
   i22 = i21 << 12 ^ i21;
   i21 = i22 >>> 7 ^ i22;
   i22 = i21 << 2 ^ i21;
   i21 = i22 >>> 20 ^ i22 | 1;
   i22 = i20;
   i20 = 0;
   i23 = 0;
   L11 : while (1) {
    i24 = i22 & i18;
    i25 = i14 + (i24 * 12 & -1) | 0;
    i26 = HEAP8[i25 | 0] | 0;
    if ((i26 << 24 >> 24 | 0) == 0) {
     if ((HEAP32[i14 + (i24 * 12 & -1) + 4 >> 2] | 0) == 0) {
      i17 = 9;
      break;
     } else {
      i17 = 10;
     }
    } else if ((i26 << 24 >> 24 | 0) == (-1 | 0)) {
     i27 = i25;
    } else {
     i17 = 10;
    }
    do {
     if ((i17 | 0) == 10) {
      i17 = 0;
      if (i26 << 24 >> 24 != i13 << 24 >> 24) {
       i27 = i23;
       break;
      }
      if ((HEAP32[i14 + (i24 * 12 & -1) + 4 >> 2] | 0) == (i16 | 0)) {
       i28 = i25;
       break L11;
      } else {
       i27 = i23;
      }
     }
    } while (0);
    i26 = (i20 | 0) == 0 ? i21 : i20;
    i22 = i26 + i24 | 0;
    i20 = i26;
    i23 = i27;
   }
   if ((i17 | 0) == 9) {
    i17 = 0;
    i28 = (i23 | 0) != 0 ? i23 : i25;
   }
   i20 = i28 + 4 | 0;
   i22 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i21 = i22 | 0;
     i14 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i22);
      break;
     } else {
      HEAP32[i21 >> 2] = i14;
      break;
     }
    }
   } while (0);
   HEAP8[i28 | 0] = HEAP8[i12] | 0;
   i22 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = 0;
   HEAP32[i20 >> 2] = i22;
   HEAP32[i28 + 8 >> 2] = HEAP32[i7 + (i10 * 12 & -1) + 8 >> 2];
   i15 = (i2 | 0) == (i3 | 0) ? i28 : i11;
  }
  i22 = i10 + 1 | 0;
  if ((i22 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i22;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i29 = 0;
 } else {
  i8 = i15;
  i9 = i7 | 0;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP8[i7 + (i29 * 12 & -1) | 0] | 0) != -1) {
    i1 = HEAP32[i7 + (i29 * 12 & -1) + 4 >> 2] | 0;
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
  i2 = i29 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i29 = i2;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7 | 0;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore12LiveNodeListEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E3addINS_17HashMapTranslatorISK_SE_EES4_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SE_SK_SH_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i7 = 8;
  } else {
   i8 = i6 << 1;
   i7 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i8 | 0) ? i6 : i8;
  }
  __ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore12LiveNodeListEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E6rehashEiPS9_(i2, i7, 0) | 0;
  i9 = HEAP32[i4 >> 2] | 0;
 } else {
  i9 = i5;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = i3 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i6 = i3 | 0;
 i3 = HEAP8[i6] | 0;
 i10 = (i3 & 255) + ((HEAP32[i8 + 16 >> 2] | 0) >>> 7) | 0;
 i11 = (i10 >>> 23) + ~i10 | 0;
 i12 = i11 << 12 ^ i11;
 i11 = i12 >>> 7 ^ i12;
 i12 = i11 << 2 ^ i11;
 i11 = i12 >>> 20 ^ i12 | 1;
 i12 = 0;
 i13 = i10;
 i10 = 0;
 L7 : while (1) {
  i14 = i13 & i5;
  i15 = i9 + (i14 * 12 & -1) | 0;
  i16 = HEAP8[i15 | 0] | 0;
  if ((i16 << 24 >> 24 | 0) == (-1 | 0)) {
   i17 = i15;
  } else if ((i16 << 24 >> 24 | 0) == 0) {
   if ((HEAP32[i9 + (i14 * 12 & -1) + 4 >> 2] | 0) == 0) {
    break;
   } else {
    i18 = 8;
   }
  } else {
   i18 = 8;
  }
  do {
   if ((i18 | 0) == 8) {
    i18 = 0;
    if (i16 << 24 >> 24 != i3 << 24 >> 24) {
     i17 = i12;
     break;
    }
    if ((HEAP32[i9 + (i14 * 12 & -1) + 4 >> 2] | 0) == (i8 | 0)) {
     i18 = 10;
     break L7;
    } else {
     i17 = i12;
    }
   }
  } while (0);
  i16 = (i10 | 0) == 0 ? i11 : i10;
  i12 = i17;
  i13 = i16 + i14 | 0;
  i10 = i16;
 }
 if ((i18 | 0) == 10) {
  i18 = i9 + ((HEAP32[i2 + 4 >> 2] | 0) * 12 & -1) | 0;
  i9 = i1;
  HEAP32[i9 >> 2] = i15;
  HEAP32[i9 + 4 >> 2] = i18;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i12 | 0) == 0) {
  i19 = i15;
  i20 = i3;
 } else {
  _memset(i12 | 0, 0, 12) | 0;
  i3 = i2 + 16 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - 1;
  i19 = i12;
  i20 = HEAP8[i6] | 0;
 }
 HEAP8[i19 | 0] = i20;
 i20 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = i19 + 4 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i20;
 do {
  if ((i6 | 0) != 0) {
   i20 = i6 | 0;
   i7 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i20 >> 2] = i7;
    break;
   }
  }
 } while (0);
 HEAP32[i19 + 8 >> 2] = 0;
 i6 = i2 + 12 | 0;
 i7 = (HEAP32[i6 >> 2] | 0) + 1 | 0;
 HEAP32[i6 >> 2] = i7;
 i6 = i2 + 4 | 0;
 i20 = HEAP32[i6 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i7 << 1 | 0) < (i20 | 0)) {
  i21 = i19;
  i22 = i20;
 } else {
  if ((i20 | 0) == 0) {
   i23 = 8;
  } else {
   i12 = i20 << 1;
   i23 = (i7 * 6 & -1 | 0) < (i12 | 0) ? i20 : i12;
  }
  i12 = __ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore12LiveNodeListEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E6rehashEiPS9_(i2, i23, i19) | 0;
  i21 = i12;
  i22 = HEAP32[i6 >> 2] | 0;
 }
 i6 = (HEAP32[i4 >> 2] | 0) + (i22 * 12 & -1) | 0;
 i22 = i1;
 HEAP32[i22 >> 2] = i21;
 HEAP32[i22 + 4 >> 2] = i6;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_PNS1_11TagNodeListEEENS_24KeyValuePairKeyExtractorIS6_EENS1_17QualifiedNameHashENS_7HashMapIS2_S5_S9_NS_10HashTraitsIS2_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i1 + 4 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = i1 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 HEAP32[i10 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 i10 = __ZN3WTF10fastMallocEj(i2 << 3) | 0;
 if ((i2 | 0) > 0) {
  i14 = i8 | 0;
  i15 = i7 | 0;
  i16 = i7 + 4 | 0;
  i17 = i9 | 0;
  i18 = i9 + 4 | 0;
  i19 = i7 | 0;
  i7 = i9 | 0;
  i9 = 0;
  while (1) {
   i20 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
   HEAP32[i14 >> 2] = i20;
   i21 = i20 | 0;
   HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
   i21 = HEAP32[i14 >> 2] | 0;
   HEAP32[i15 >> 2] = i21;
   i20 = i21 | 0;
   HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
   HEAP32[i16 >> 2] = 0;
   i20 = HEAP32[i15 >> 2] | 0;
   HEAP32[i17 >> 2] = i20;
   i21 = i20 | 0;
   HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
   HEAP32[i18 >> 2] = HEAP32[i16 >> 2];
   __ZN7WebCore13QualifiedNameD1Ev(i19);
   __ZN7WebCore13QualifiedNameD1Ev(i8);
   i21 = HEAP32[i17 >> 2] | 0;
   HEAP32[i10 + (i9 << 3) >> 2] = i21;
   i20 = i21 | 0;
   HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
   HEAP32[i10 + (i9 << 3) + 4 >> 2] = HEAP32[i18 >> 2];
   __ZN7WebCore13QualifiedNameD1Ev(i7);
   i9 = i9 + 1 | 0;
   if ((i9 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i12 >> 2] = i10;
 if ((i11 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i22 = 0;
  i23 = i13;
  __ZN3WTF8fastFreeEPv(i23);
  STACKTOP = i4;
  return i22 | 0;
 }
 i10 = i6 | 0;
 i12 = i5 | 0;
 i2 = 0;
 i9 = 0;
 while (1) {
  i7 = i13 + (i2 << 3) | 0;
  i18 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
  HEAP32[i10 >> 2] = i18;
  i17 = i18 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
  i17 = i7 | 0;
  i18 = (HEAP32[i17 >> 2] | 0) == (HEAP32[i10 >> 2] | 0);
  __ZN7WebCore13QualifiedNameD1Ev(i6);
  do {
   if (i18) {
    i24 = i9;
   } else {
    if ((HEAP32[i17 >> 2] | 0) == -1) {
     i24 = i9;
     break;
    }
    __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_PNS1_11TagNodeListEEENS_24KeyValuePairKeyExtractorIS6_EENS1_17QualifiedNameHashENS_7HashMapIS2_S5_S9_NS_10HashTraitsIS2_EENSB_IS5_EEE18KeyValuePairTraitsESC_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EES2_EENSt3__14pairIPS6_bEERKT0_(i5, i1, i7 | 0);
    i8 = HEAP32[i12 >> 2] | 0;
    __ZN7WebCore13QualifiedNameD1Ev(i8 | 0);
    i19 = HEAP32[i17 >> 2] | 0;
    HEAP32[i8 >> 2] = i19;
    i16 = i19 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
    HEAP32[i8 + 4 >> 2] = HEAP32[i13 + (i2 << 3) + 4 >> 2];
    i24 = (i7 | 0) == (i3 | 0) ? i8 : i9;
   }
  } while (0);
  i7 = i2 + 1 | 0;
  if ((i7 | 0) == (i11 | 0)) {
   break;
  } else {
   i2 = i7;
   i9 = i24;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i11 | 0) > 0) {
  i25 = 0;
 } else {
  i22 = i24;
  i23 = i13;
  __ZN3WTF8fastFreeEPv(i23);
  STACKTOP = i4;
  return i22 | 0;
 }
 while (1) {
  i1 = i13 + (i25 << 3) | 0;
  if ((HEAP32[i1 >> 2] | 0) != -1) {
   __ZN7WebCore13QualifiedNameD1Ev(i1 | 0);
  }
  i1 = i25 + 1 | 0;
  if ((i1 | 0) < (i11 | 0)) {
   i25 = i1;
  } else {
   i22 = i24;
   break;
  }
 }
 i23 = i13;
 __ZN3WTF8fastFreeEPv(i23);
 STACKTOP = i4;
 return i22 | 0;
}
function __ZNK7WebCore13ContainerNode19getLowerRightCornerERNS_10FloatPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7;
 i9 = (HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0;
 i10 = i1 + 32 | 0;
 if (i9) {
  i11 = i10 | 0;
 } else {
  i11 = HEAP32[i10 >> 2] | 0;
 }
 if ((HEAP32[i11 >> 2] | 0) == 0) {
  i12 = 0;
  STACKTOP = i3;
  return i12 | 0;
 }
 if (i9) {
  i13 = i10 | 0;
 } else {
  i13 = HEAP32[i10 >> 2] | 0;
 }
 i10 = HEAP32[i13 >> 2] | 0;
 if ((HEAP32[i10 + 20 >> 2] & 3072 | 0) != 1024) {
  i13 = i10 + 52 | 0;
  d14 = +(HEAP32[i13 + 4 >> 2] | 0);
  HEAPF32[i5 >> 2] = +(HEAP32[i13 >> 2] | 0);
  HEAPF32[i5 + 4 >> 2] = d14;
  __ZNK7WebCore12RenderObject15localToAbsoluteERKNS_10FloatPointEj(i4, i10, i5, 2);
  i5 = i2;
  i13 = HEAP32[i4 + 4 >> 2] | 0;
  HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i5 + 4 >> 2] = i13;
  i12 = 1;
  STACKTOP = i3;
  return i12 | 0;
 }
 if ((i10 | 0) == 0) {
  i12 = 1;
  STACKTOP = i3;
  return i12 | 0;
 }
 i13 = i2;
 i5 = i6 | 0;
 i4 = i6 + 8 | 0;
 i9 = i6 + 4 | 0;
 i11 = i6 + 12 | 0;
 i1 = i10;
 L19 : while (1) {
  i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 36 >> 2] & 63](i1) | 0;
  do {
   if ((i10 | 0) == 0) {
    i15 = HEAP32[i1 + 12 >> 2] | 0;
    if ((i15 | 0) == 0) {
     i16 = i1;
    } else {
     i17 = i15;
     break;
    }
    while (1) {
     i15 = HEAP32[i16 + 8 >> 2] | 0;
     if ((i15 | 0) == 0) {
      i12 = 0;
      i18 = 28;
      break L19;
     }
     i19 = HEAP32[i15 + 12 >> 2] | 0;
     if ((i19 | 0) == 0) {
      i16 = i15 | 0;
     } else {
      i17 = i19;
      break;
     }
    }
   } else {
    i17 = i10;
   }
  } while (0);
  i10 = i17 + 20 | 0;
  i19 = HEAP32[i10 >> 2] | 0;
  if ((i19 & 768 | 0) != 256 & (i19 & 2048 | 0) == 0) {
   i1 = i17;
   continue;
  }
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  if ((HEAP32[i10 >> 2] & 768 | 0) != 256) {
   i18 = 22;
   break;
  }
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 640 >> 2] & 31](i6, i17);
  i20 = HEAP32[i5 >> 2] | 0;
  i21 = HEAP32[i4 >> 2] | 0;
  i22 = HEAP32[i9 >> 2] | 0;
  i23 = HEAP32[i11 >> 2] | 0;
  if ((i21 | 0) != (-i20 | 0)) {
   i18 = 21;
   break;
  }
  if ((i23 | 0) != (-i22 | 0)) {
   i18 = 21;
   break;
  }
  if ((i17 | 0) == 0) {
   i12 = 1;
   i18 = 29;
   break;
  } else {
   i1 = i17;
  }
 }
 if ((i18 | 0) == 28) {
  STACKTOP = i3;
  return i12 | 0;
 } else if ((i18 | 0) == 21) {
  i1 = i2 | 0;
  HEAPF32[i1 >> 2] = +(i21 + i20 | 0) + +HEAPF32[i1 >> 2];
  i1 = i2 + 4 | 0;
  HEAPF32[i1 >> 2] = +HEAPF32[i1 >> 2] + +(i23 + i22 | 0);
 } else if ((i18 | 0) == 22) {
  d14 = +((HEAP32[i17 + 56 >> 2] | 0) + (HEAP32[i17 + 48 >> 2] | 0) | 0);
  HEAPF32[i2 >> 2] = +((HEAP32[i17 + 52 >> 2] | 0) + (HEAP32[i17 + 44 >> 2] | 0) | 0);
  HEAPF32[i2 + 4 >> 2] = d14;
 } else if ((i18 | 0) == 29) {
  STACKTOP = i3;
  return i12 | 0;
 }
 __ZNK7WebCore12RenderObject15localToAbsoluteERKNS_10FloatPointEj(i8, __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i17, 0, 0) | 0, i2, 2);
 i2 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i13 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i13 + 4 >> 2] = i2;
 i12 = 1;
 STACKTOP = i3;
 return i12 | 0;
}
function __ZN3WTF9HashTableINSt3__14pairIhNS_6StringEEENS_12KeyValuePairIS4_PN7WebCore12LiveNodeListEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E6rehashEiPS9_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 4 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i1 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i6 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 HEAP32[i8 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 * 12 & -1) | 0;
 if ((i7 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i10 = 0;
  i11 = i9 | 0;
  __ZN3WTF8fastFreeEPv(i11);
  STACKTOP = i4;
  return i10 | 0;
 }
 i2 = i5 | 0;
 i8 = 0;
 i6 = 0;
 while (1) {
  i12 = i9 + (i8 * 12 & -1) | 0;
  i13 = i12 | 0;
  i14 = HEAP8[i13] | 0;
  do {
   if (i14 << 24 >> 24 == 0) {
    if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i9 + (i8 * 12 & -1) + 4 >> 2] | 0, 0) | 0) {
     i15 = i6;
     break;
    }
    i16 = HEAP8[i13] | 0;
    i17 = 7;
   } else {
    i16 = i14;
    i17 = 7;
   }
  } while (0);
  do {
   if ((i17 | 0) == 7) {
    i17 = 0;
    if (i16 << 24 >> 24 == -1) {
     i15 = i6;
     break;
    }
    __ZN3WTF9HashTableINSt3__14pairIhNS_6StringEEENS_12KeyValuePairIS4_PN7WebCore12LiveNodeListEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E16lookupForWritingINS_22IdentityHashTranslatorISE_EES4_EENS2_IPS9_bEERKT0_(i5, i1, i12 | 0);
    i14 = HEAP32[i2 >> 2] | 0;
    i18 = i14 + 4 | 0;
    i19 = HEAP32[i18 >> 2] | 0;
    do {
     if ((i19 | 0) != 0) {
      i20 = i19 | 0;
      i21 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
      if ((i21 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i19);
       break;
      } else {
       HEAP32[i20 >> 2] = i21;
       break;
      }
     }
    } while (0);
    HEAP8[i14 | 0] = HEAP8[i13] | 0;
    i19 = i9 + (i8 * 12 & -1) + 4 | 0;
    i21 = HEAP32[i19 >> 2] | 0;
    HEAP32[i19 >> 2] = 0;
    HEAP32[i18 >> 2] = i21;
    HEAP32[i14 + 8 >> 2] = HEAP32[i9 + (i8 * 12 & -1) + 8 >> 2];
    i15 = (i12 | 0) == (i3 | 0) ? i14 : i6;
   }
  } while (0);
  i12 = i8 + 1 | 0;
  if ((i12 | 0) == (i7 | 0)) {
   break;
  } else {
   i8 = i12;
   i6 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i7 | 0) > 0) {
  i22 = 0;
 } else {
  i10 = i15;
  i11 = i9 | 0;
  __ZN3WTF8fastFreeEPv(i11);
  STACKTOP = i4;
  return i10 | 0;
 }
 while (1) {
  do {
   if ((HEAP8[i9 + (i22 * 12 & -1) | 0] | 0) != -1) {
    i1 = HEAP32[i9 + (i22 * 12 & -1) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    i6 = i1 | 0;
    i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i8 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i6 >> 2] = i8;
     break;
    }
   }
  } while (0);
  i8 = i22 + 1 | 0;
  if ((i8 | 0) < (i7 | 0)) {
   i22 = i8;
  } else {
   i10 = i15;
   break;
  }
 }
 i11 = i9 | 0;
 __ZN3WTF8fastFreeEPv(i11);
 STACKTOP = i4;
 return i10 | 0;
}
function __ZN7WebCoreL16checkAcceptChildEPNS_13ContainerNodeEPNS_4NodeES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 if ((i2 | 0) == 0) {
  i4 = 8;
  return i4 | 0;
 }
 i5 = i2 + 12 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 & 5 | 0) != 0) {
   i7 = i1 | 0;
   i8 = HEAP32[i1 + 12 >> 2] | 0;
   if ((i8 & 4 | 0) == 0) {
    break;
   }
   do {
    if ((i8 & 8388608 | 0) == 0) {
     i9 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
     if ((HEAP32[i9 + 332 >> 2] | 0) == 0) {
      i10 = 7;
      break;
     }
     if ((HEAP32[i9 + 2200 >> 2] | 0) == (i9 | 0)) {
      i10 = 7;
      break;
     }
     i11 = __ZNK7WebCore4Node8containsEPKS0_(i2, i7) | 0;
    } else {
     i10 = 7;
    }
   } while (0);
   if ((i10 | 0) == 7) {
    i11 = __ZNK7WebCore4Node29containsIncludingHostElementsEPKS0_(i2, i7) | 0;
   }
   i4 = i11 ? 3 : 0;
   return i4 | 0;
  }
 } while (0);
 do {
  if ((i6 & 1048580 | 0) == 1048580) {
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 232 >> 2] & 63](i2) | 0) == 0) {
    break;
   } else {
    i4 = 3;
   }
   return i4 | 0;
  }
 } while (0);
 i6 = i1 | 0;
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 76 >> 2] & 63](i6) | 0) == 5) {
  i4 = 7;
  return i4 | 0;
 }
 do {
  if ((HEAP32[i1 + 12 >> 2] & 8388608 | 0) == 0) {
   i11 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
   if ((HEAP32[i11 + 332 >> 2] | 0) == 0) {
    i10 = 16;
    break;
   }
   if ((HEAP32[i11 + 2200 >> 2] | 0) == (i11 | 0)) {
    i10 = 16;
    break;
   }
   if (__ZNK7WebCore4Node8containsEPKS0_(i2, i6) | 0) {
    i4 = 3;
   } else {
    break;
   }
   return i4 | 0;
  } else {
   i10 = 16;
  }
 } while (0);
 do {
  if ((i10 | 0) == 16) {
   if (__ZNK7WebCore4Node29containsIncludingHostElementsEPKS0_(i2, i6) | 0) {
    i4 = 3;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 do {
  if ((i3 | 0) == 0) {
   i10 = 21;
  } else {
   if ((HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) != (i6 | 0)) {
    i10 = 21;
    break;
   }
   if (__ZN7WebCore8Document15canReplaceChildEPNS_4NodeES2_(i1, i2, i3) | 0) {
    break;
   } else {
    i4 = 3;
   }
   return i4 | 0;
  }
 } while (0);
 L36 : do {
  if ((i10 | 0) == 21) {
   i3 = HEAP32[i5 >> 2] | 0;
   if ((i3 & 4096 | 0) == 0) {
    i11 = HEAP32[(HEAP32[i1 >> 2] | 0) + 160 >> 2] | 0;
    i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 76 >> 2] & 63](i2) | 0;
    if (FUNCTION_TABLE_iii[i11 & 15](i6, i8) | 0) {
     break;
    } else {
     i4 = 3;
    }
    return i4 | 0;
   }
   if ((i3 & 2 | 0) == 0) {
    break;
   }
   i3 = HEAP32[i2 + 36 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i8 = i1;
   i11 = i3;
   while (1) {
    i3 = HEAP32[(HEAP32[i8 >> 2] | 0) + 160 >> 2] | 0;
    i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 76 >> 2] & 63](i11) | 0;
    if (!(FUNCTION_TABLE_iii[i3 & 15](i6, i9) | 0)) {
     i4 = 3;
     break;
    }
    i11 = HEAP32[i11 + 28 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break L36;
    }
   }
   return i4 | 0;
  }
 } while (0);
 i4 = 0;
 return i4 | 0;
}
function __ZN7WebCore26ChildNodeInsertionNotifier6notifyERNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i2 + 20 | 0;
 i4 = HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] | 0;
 do {
  if (!((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0 | (i4 | 0) == 0)) {
   i5 = __ZNK7WebCore8Document4pageEv(i4) | 0;
   do {
    if ((i5 | 0) == 0) {
     i6 = HEAP32[i4 + 2204 >> 2] | 0;
     if ((i6 | 0) == 0) {
      i7 = 0;
      break;
     }
     i7 = __ZNK7WebCore8Document4pageEv(i6) | 0;
    } else {
     i7 = i5;
    }
   } while (0);
   i5 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i7) | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation20didInsertDOMNodeImplEPNS_19InstrumentingAgentsEPNS_4NodeE(i5, i2);
  }
 } while (0);
 i7 = HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] | 0;
 i3 = i7 + 8 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = i2 + 8 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((HEAP32[i5 + 12 >> 2] & 256 | 0) == 0) {
   if ((HEAP32[i2 + 12 >> 2] & 2 | 0) == 0) {
    break;
   }
   i6 = i2;
   do {
    if ((FUNCTION_TABLE_iii[HEAP32[(HEAP32[i2 >> 2] | 0) + 180 >> 2] & 15](i2, i5) | 0) == 1) {
     i8 = i1 + 4 | 0;
     i9 = i1 + 12 | 0;
     i10 = HEAP32[i9 >> 2] | 0;
     if ((i10 | 0) == (HEAP32[i1 + 8 >> 2] | 0)) {
      __ZN3WTF6VectorINS_3RefIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i8, i10 + 1 | 0);
      HEAP32[(HEAP32[i8 >> 2] | 0) + (HEAP32[i9 >> 2] << 2) >> 2] = i2;
      HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
      HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
      break;
     } else {
      HEAP32[(HEAP32[i8 >> 2] | 0) + (i10 << 2) >> 2] = i2;
      HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
      HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
      break;
     }
    }
   } while (0);
   __ZN7WebCore26ChildNodeInsertionNotifier32notifyDescendantInsertedIntoTreeERNS_13ContainerNodeE(i1, i6);
  } else {
   __ZN7WebCore26ChildNodeInsertionNotifier30notifyNodeInsertedIntoDocumentERNS_4NodeE(i1, i2);
  }
 } while (0);
 i3 = i1 + 12 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  i5 = i1 + 4 | 0;
  i1 = 0;
  while (1) {
   i9 = HEAP32[(HEAP32[i5 >> 2] | 0) + (i1 << 2) >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 184 >> 2] & 31](i9, HEAP32[i4 >> 2] | 0);
   i1 = i1 + 1 | 0;
   if (i1 >>> 0 >= (HEAP32[i3 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 i3 = i2 + 8 | 0;
 i2 = i3 - 8 | 0;
 i1 = i3 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i4;
 do {
  if ((i4 | 0) < 1) {
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2);
  }
 } while (0);
 i2 = i7 + 8 | 0;
 i7 = i2 | 0;
 i3 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
 return;
}
function __ZN7WebCore13ContainerNode17parserRemoveChildERNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = HEAP32[i2 + 24 >> 2] | 0;
 i8 = HEAP32[i2 + 28 >> 2] | 0;
 __ZNK7WebCore4Node46updateAncestorConnectedSubframeCountForRemovalEv(i2);
 __ZN7WebCore22ChildListMutationScopeC2ERNS_13ContainerNodeE(i5, i1);
 i9 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   if ((HEAP32[i9 + 44 >> 2] | 0) != 0) {
    __ZN7WebCore28ChildListMutationAccumulator15willRemoveChildERNS_4NodeE(i9, i2);
   }
   i5 = i9 | 0;
   i10 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore28ChildListMutationAccumulatorD1Ev(i9);
    __ZN3WTF8fastFreeEPv(i9);
    break;
   } else {
    HEAP32[i5 >> 2] = i10;
    break;
   }
  }
 } while (0);
 __ZN7WebCore4Node37notifyMutationObserversNodeWillDetachEv(i2);
 __ZN7WebCore13ContainerNode13removeBetweenEPNS_4NodeES2_RS1_(i1, i7, i8, i2);
 i9 = i2 + 12 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 & 4 | 0) == 0) {
  i11 = (i10 & 1 | 0) != 0 ? 3 : 6;
 } else {
  i11 = 1;
 }
 HEAP32[i4 >> 2] = i11;
 L13 : do {
  if ((i7 | 0) == 0) {
   i12 = 0;
  } else {
   if ((HEAP32[i7 + 12 >> 2] & 4 | 0) == 0) {
    i13 = i7;
   } else {
    i12 = i7;
    break;
   }
   while (1) {
    i11 = HEAP32[i13 + 24 >> 2] | 0;
    if ((i11 | 0) == 0) {
     i12 = 0;
     break L13;
    }
    if ((HEAP32[i11 + 12 >> 2] & 4 | 0) == 0) {
     i13 = i11;
    } else {
     i12 = i11;
     break;
    }
   }
  }
 } while (0);
 HEAP32[i4 + 4 >> 2] = i12;
 L19 : do {
  if ((i8 | 0) == 0) {
   i14 = 0;
  } else {
   if ((HEAP32[i8 + 12 >> 2] & 4 | 0) == 0) {
    i15 = i8;
   } else {
    i14 = i8;
    break;
   }
   while (1) {
    i12 = HEAP32[i15 + 28 >> 2] | 0;
    if ((i12 | 0) == 0) {
     i14 = 0;
     break L19;
    }
    if ((HEAP32[i12 + 12 >> 2] & 4 | 0) == 0) {
     i15 = i12;
    } else {
     i14 = i12;
     break;
    }
   }
  }
 } while (0);
 HEAP32[i4 + 8 >> 2] = i14;
 HEAP32[i4 + 12 >> 2] = 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 240 >> 2] & 31](i1, i4);
 HEAP32[i6 >> 2] = i1;
 i4 = HEAP32[i9 >> 2] | 0;
 if ((i4 & 256 | 0) == 0) {
  if ((i4 & 2 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 188 >> 2] & 31](i2, i1);
  __ZN7WebCore24ChildNodeRemovalNotifier31notifyDescendantRemovedFromTreeERNS_13ContainerNodeE(i6, i2);
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 188 >> 2] & 31](i2, i1);
 if ((HEAP32[i9 >> 2] & 2 | 0) != 0) {
  __ZN7WebCore24ChildNodeRemovalNotifier35notifyDescendantRemovedFromDocumentERNS_13ContainerNodeE(i6, i2);
 }
 i6 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP8[i6 + 326 | 0] & 1) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore8Document29didRemoveAllPendingStylesheetEv(i6);
 STACKTOP = i3;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_iii + 6;
}
function __ZN7WebCore17NodeListsNodeData22addCacheWithAtomicNameINS_11TagNodeListENS_13ContainerNodeEEEN3WTF10PassRefPtrIT_EERT0_NS_12LiveNodeList4TypeERKNS4_12AtomicStringE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 24 | 0;
 i10 = i6 + 32 | 0;
 i11 = i4 & 255;
 i4 = HEAP32[i5 >> 2] | 0;
 i12 = (i4 | 0) == 0;
 do {
  if (i12) {
   HEAP8[i9 | 0] = i11;
   i13 = i7 | 0;
   HEAP32[i13 >> 2] = 0;
   i14 = i13;
   i15 = i9 + 4 | 0;
   i16 = i7;
  } else {
   i13 = i4 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
   HEAP8[i9 | 0] = i11;
   i17 = i9 + 4 | 0;
   i18 = i7;
   if ((HEAP32[i4 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i7, i4);
    i14 = i7 | 0;
    i15 = i17;
    i16 = i18;
    break;
   } else {
    i19 = i7 | 0;
    HEAP32[i19 >> 2] = i4;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
    i14 = i19;
    i15 = i17;
    i16 = i18;
    break;
   }
  }
 } while (0);
 HEAP32[i15 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i10 >> 2] = 0;
 __ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore12LiveNodeListEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E3addINS_17HashMapTranslatorISK_SE_EES4_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SE_SK_SH_EEEEOT0_OT1_(i8, i2 + 8 | 0, i9, i10);
 i10 = HEAP32[i9 + 4 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i9 = i10 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i9 >> 2] = i2;
    break;
   }
  }
 } while (0);
 do {
  if (!i12) {
   i10 = i4 | 0;
   i2 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i10 >> 2] = i2;
    break;
   }
  }
 } while (0);
 if ((HEAP8[i8 + 8 | 0] & 1) != 0) {
  i4 = __ZN3WTF10fastMallocEj(44) | 0;
  i12 = i4;
  __ZN7WebCore11TagNodeListC1ERNS_13ContainerNodeENS_12LiveNodeList4TypeERKN3WTF12AtomicStringES8_(i12, i3, 2, __ZN3WTF8starAtomE, i5);
  HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] = i4;
  HEAP32[i1 >> 2] = i12;
  STACKTOP = i6;
  return;
 }
 i12 = HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0;
 HEAP32[i1 >> 2] = i12;
 if ((i12 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i1 = i12 + 8 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore17NodeListsNodeData22addCacheWithAtomicNameINS_15HTMLTagNodeListENS_13ContainerNodeEEEN3WTF10PassRefPtrIT_EERT0_NS_12LiveNodeList4TypeERKNS4_12AtomicStringE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 24 | 0;
 i10 = i6 + 32 | 0;
 i11 = i4 & 255;
 i4 = HEAP32[i5 >> 2] | 0;
 i12 = (i4 | 0) == 0;
 do {
  if (i12) {
   HEAP8[i9 | 0] = i11;
   i13 = i7 | 0;
   HEAP32[i13 >> 2] = 0;
   i14 = i13;
   i15 = i9 + 4 | 0;
   i16 = i7;
  } else {
   i13 = i4 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
   HEAP8[i9 | 0] = i11;
   i17 = i9 + 4 | 0;
   i18 = i7;
   if ((HEAP32[i4 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i7, i4);
    i14 = i7 | 0;
    i15 = i17;
    i16 = i18;
    break;
   } else {
    i19 = i7 | 0;
    HEAP32[i19 >> 2] = i4;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
    i14 = i19;
    i15 = i17;
    i16 = i18;
    break;
   }
  }
 } while (0);
 HEAP32[i15 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i10 >> 2] = 0;
 __ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore12LiveNodeListEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E3addINS_17HashMapTranslatorISK_SE_EES4_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SE_SK_SH_EEEEOT0_OT1_(i8, i2 + 8 | 0, i9, i10);
 i10 = HEAP32[i9 + 4 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i9 = i10 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i9 >> 2] = i2;
    break;
   }
  }
 } while (0);
 do {
  if (!i12) {
   i10 = i4 | 0;
   i2 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i10 >> 2] = i2;
    break;
   }
  }
 } while (0);
 if ((HEAP8[i8 + 8 | 0] & 1) != 0) {
  i4 = __ZN3WTF10fastMallocEj(48) | 0;
  i12 = i4;
  __ZN7WebCore15HTMLTagNodeListC1ERNS_13ContainerNodeERKN3WTF12AtomicStringE(i12, i3, i5);
  HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] = i4;
  HEAP32[i1 >> 2] = i12;
  STACKTOP = i6;
  return;
 }
 i12 = HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0;
 HEAP32[i1 >> 2] = i12;
 if ((i12 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i1 = i12 + 8 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore17NodeListsNodeData22addCacheWithAtomicNameINS_13RadioNodeListENS_13ContainerNodeEEEN3WTF10PassRefPtrIT_EERT0_NS_12LiveNodeList4TypeERKNS4_12AtomicStringE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 24 | 0;
 i10 = i6 + 32 | 0;
 i11 = i4 & 255;
 i4 = HEAP32[i5 >> 2] | 0;
 i12 = (i4 | 0) == 0;
 do {
  if (i12) {
   HEAP8[i9 | 0] = i11;
   i13 = i7 | 0;
   HEAP32[i13 >> 2] = 0;
   i14 = i13;
   i15 = i9 + 4 | 0;
   i16 = i7;
  } else {
   i13 = i4 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
   HEAP8[i9 | 0] = i11;
   i17 = i9 + 4 | 0;
   i18 = i7;
   if ((HEAP32[i4 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i7, i4);
    i14 = i7 | 0;
    i15 = i17;
    i16 = i18;
    break;
   } else {
    i19 = i7 | 0;
    HEAP32[i19 >> 2] = i4;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
    i14 = i19;
    i15 = i17;
    i16 = i18;
    break;
   }
  }
 } while (0);
 HEAP32[i15 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i10 >> 2] = 0;
 __ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore12LiveNodeListEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E3addINS_17HashMapTranslatorISK_SE_EES4_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SE_SK_SH_EEEEOT0_OT1_(i8, i2 + 8 | 0, i9, i10);
 i10 = HEAP32[i9 + 4 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i9 = i10 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i9 >> 2] = i2;
    break;
   }
  }
 } while (0);
 do {
  if (!i12) {
   i10 = i4 | 0;
   i2 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i10 >> 2] = i2;
    break;
   }
  }
 } while (0);
 if ((HEAP8[i8 + 8 | 0] & 1) != 0) {
  i4 = __ZN3WTF10fastMallocEj(40) | 0;
  i12 = i4;
  __ZN7WebCore13RadioNodeListC1ERNS_13ContainerNodeERKN3WTF12AtomicStringE(i12, i3, i5);
  HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] = i4;
  HEAP32[i1 >> 2] = i12;
  STACKTOP = i6;
  return;
 }
 i12 = HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0;
 HEAP32[i1 >> 2] = i12;
 if ((i12 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i1 = i12 + 8 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore17NodeListsNodeData22addCacheWithAtomicNameINS_12NameNodeListENS_13ContainerNodeEEEN3WTF10PassRefPtrIT_EERT0_NS_12LiveNodeList4TypeERKNS4_12AtomicStringE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 24 | 0;
 i10 = i6 + 32 | 0;
 i11 = i4 & 255;
 i4 = HEAP32[i5 >> 2] | 0;
 i12 = (i4 | 0) == 0;
 do {
  if (i12) {
   HEAP8[i9 | 0] = i11;
   i13 = i7 | 0;
   HEAP32[i13 >> 2] = 0;
   i14 = i13;
   i15 = i9 + 4 | 0;
   i16 = i7;
  } else {
   i13 = i4 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
   HEAP8[i9 | 0] = i11;
   i17 = i9 + 4 | 0;
   i18 = i7;
   if ((HEAP32[i4 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i7, i4);
    i14 = i7 | 0;
    i15 = i17;
    i16 = i18;
    break;
   } else {
    i19 = i7 | 0;
    HEAP32[i19 >> 2] = i4;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
    i14 = i19;
    i15 = i17;
    i16 = i18;
    break;
   }
  }
 } while (0);
 HEAP32[i15 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i10 >> 2] = 0;
 __ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore12LiveNodeListEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E3addINS_17HashMapTranslatorISK_SE_EES4_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SE_SK_SH_EEEEOT0_OT1_(i8, i2 + 8 | 0, i9, i10);
 i10 = HEAP32[i9 + 4 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i9 = i10 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i9 >> 2] = i2;
    break;
   }
  }
 } while (0);
 do {
  if (!i12) {
   i10 = i4 | 0;
   i2 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i10 >> 2] = i2;
    break;
   }
  }
 } while (0);
 if ((HEAP8[i8 + 8 | 0] & 1) != 0) {
  i4 = __ZN3WTF10fastMallocEj(40) | 0;
  i12 = i4;
  __ZN7WebCore12NameNodeListC1ERNS_13ContainerNodeERKN3WTF12AtomicStringE(i12, i3, i5);
  HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] = i4;
  HEAP32[i1 >> 2] = i12;
  STACKTOP = i6;
  return;
 }
 i12 = HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0;
 HEAP32[i1 >> 2] = i12;
 if ((i12 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i1 = i12 + 8 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore7Private28addChildNodesToDeletionQueueINS_4NodeENS_13ContainerNodeEEEvRPT_S6_RT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i3 + 36 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = i3 + 40 | 0;
  HEAP32[i8 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i9 = i3 | 0;
 i10 = i5 | 0;
 i11 = i7;
 while (1) {
  i7 = i11 + 28 | 0;
  i12 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i11 + 16 >> 2] = 0;
  HEAP32[i6 >> 2] = i12;
  i7 = (i12 | 0) == 0;
  if (!i7) {
   HEAP32[i12 + 24 >> 2] = 0;
  }
  i13 = i11 + 8 | 0;
  i14 = i13 | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  do {
   if ((i15 | 0) == 0) {
    i16 = HEAP32[i2 >> 2] | 0;
    if ((i16 | 0) == 0) {
     HEAP32[i1 >> 2] = i11;
    } else {
     HEAP32[i16 + 28 >> 2] = i11;
    }
    HEAP32[i2 >> 2] = i11;
   } else {
    HEAP32[i11 + 8 >> 2] = i15 + 1;
    i16 = __ZNK7WebCore4Node13ownerDocumentEv(i9) | 0;
    if ((i16 | 0) != 0) {
     __ZN7WebCore9TreeScope13adoptIfNeededEPNS_4NodeE(i16 + 44 | 0, i11);
    }
    i16 = i11 + 12 | 0;
    do {
     if ((HEAP32[i16 >> 2] & 256 | 0) != 0) {
      HEAP32[i10 >> 2] = i3;
      i17 = HEAP32[i16 >> 2] | 0;
      if ((i17 & 256 | 0) == 0) {
       if ((i17 & 2 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 188 >> 2] & 31](i11, i3);
       __ZN7WebCore24ChildNodeRemovalNotifier31notifyDescendantRemovedFromTreeERNS_13ContainerNodeE(i5, i11);
       break;
      }
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 188 >> 2] & 31](i11, i3);
      if ((HEAP32[i16 >> 2] & 2 | 0) != 0) {
       __ZN7WebCore24ChildNodeRemovalNotifier35notifyDescendantRemovedFromDocumentERNS_13ContainerNodeE(i5, i11);
      }
      i17 = HEAP32[(HEAP32[i11 + 20 >> 2] | 0) + 8 >> 2] | 0;
      if ((HEAP8[i17 + 326 | 0] & 1) == 0) {
       break;
      }
      __ZN7WebCore8Document29didRemoveAllPendingStylesheetEv(i17);
     }
    } while (0);
    i16 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
    HEAP32[i14 >> 2] = i16;
    if ((i16 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
   }
  } while (0);
  if (i7) {
   break;
  } else {
   i11 = i12;
  }
 }
 i8 = i3 + 40 | 0;
 HEAP32[i8 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_PNS1_11TagNodeListEEENS_24KeyValuePairKeyExtractorIS6_EENS1_17QualifiedNameHashENS_7HashMapIS2_S5_S9_NS_10HashTraitsIS2_EENSB_IS5_EEE18KeyValuePairTraitsESC_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EES2_EENSt3__14pairIPS6_bEERKT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i8 = i3 + 4 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZNK7WebCore13QualifiedName17QualifiedNameImpl11computeHashEv(i3) | 0;
  HEAP32[i8 >> 2] = i10;
  i11 = i10;
 } else {
  i11 = i9;
 }
 i9 = i11 & i7;
 i10 = i6 + (i9 << 3) | 0;
 i8 = i5 | 0;
 i3 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
 HEAP32[i8 >> 2] = i3;
 i12 = i3 | 0;
 HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 i12 = i10 | 0;
 i3 = (HEAP32[i12 >> 2] | 0) == (HEAP32[i8 >> 2] | 0);
 __ZN7WebCore13QualifiedNameD1Ev(i5);
 L4 : do {
  if (i3) {
   i13 = 0;
   i14 = i10;
  } else {
   i15 = (i11 >>> 23) + ~i11 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i9;
   i19 = i10;
   i20 = i12;
   while (1) {
    i21 = HEAP32[i20 >> 2] | 0;
    if ((i21 | 0) == -1) {
     i22 = i19;
    } else {
     if ((i21 | 0) == (HEAP32[i2 >> 2] | 0)) {
      break;
     } else {
      i22 = i16;
     }
    }
    i21 = (i17 | 0) == 0 ? i15 : i17;
    i23 = i21 + i18 & i7;
    i24 = i6 + (i23 << 3) | 0;
    i25 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
    HEAP32[i8 >> 2] = i25;
    i26 = i25 | 0;
    HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
    i26 = i24 | 0;
    i25 = (HEAP32[i26 >> 2] | 0) == (HEAP32[i8 >> 2] | 0);
    __ZN7WebCore13QualifiedNameD1Ev(i5);
    if (i25) {
     i13 = i22;
     i14 = i24;
     break L4;
    } else {
     i16 = i22;
     i17 = i21;
     i18 = i23;
     i19 = i24;
     i20 = i26;
    }
   }
   HEAP32[i1 >> 2] = i19;
   HEAP8[i1 + 4 | 0] = 1;
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = (i13 | 0) != 0 ? i13 : i14;
 HEAP8[i1 + 4 | 0] = 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore13ContainerNode23queuePostAttachCallbackEPFvRNS_4NodeEjES2_j(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[H_BASE + 296 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = __ZN3WTF10fastMallocEj(12) | 0;
  i8 = i7;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i7 + 4 >> 2] = 0;
  HEAP32[i7 + 8 >> 2] = 0;
  HEAP32[H_BASE + 296 >> 2] = i8;
  i9 = i8;
 } else {
  i9 = i6;
 }
 if ((i2 | 0) != 0) {
  i6 = i2 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 HEAP32[i5 >> 2] = i1;
 i6 = i5 + 4 | 0;
 HEAP32[i6 >> 2] = i2;
 i2 = i5 + 8 | 0;
 HEAP32[i2 >> 2] = i3;
 i3 = i9 + 8 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 if ((i8 | 0) == (HEAP32[i9 + 4 >> 2] | 0)) {
  i7 = i8 + 1 | 0;
  i10 = i9 | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  do {
   if (i11 >>> 0 > i5 >>> 0) {
    i12 = 9;
   } else {
    if ((i11 + (i8 * 12 & -1) | 0) >>> 0 <= i5 >>> 0) {
     i12 = 9;
     break;
    }
    __ZN3WTF6VectorINSt3__14pairIPFvRN7WebCore4NodeEjENS2_INS_6RefPtrIS4_EEjEEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i9, i7);
    i13 = HEAP32[i10 >> 2] | 0;
    i14 = i13 + (((i5 - i11 | 0) / 12 & -1) * 12 & -1) | 0;
    i15 = i13;
   }
  } while (0);
  if ((i12 | 0) == 9) {
   __ZN3WTF6VectorINSt3__14pairIPFvRN7WebCore4NodeEjENS2_INS_6RefPtrIS4_EEjEEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i9, i7);
   i14 = i5;
   i15 = HEAP32[i10 >> 2] | 0;
  }
  i10 = HEAP32[i3 >> 2] | 0;
  HEAP32[i15 + (i10 * 12 & -1) >> 2] = HEAP32[i14 >> 2];
  i7 = i14 + 4 | 0;
  i12 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i15 + (i10 * 12 & -1) + 4 >> 2] = i12;
  HEAP32[i15 + (i10 * 12 & -1) + 8 >> 2] = HEAP32[i14 + 8 >> 2];
 } else {
  i14 = HEAP32[i9 >> 2] | 0;
  HEAP32[i14 + (i8 * 12 & -1) >> 2] = i1;
  i1 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i14 + (i8 * 12 & -1) + 4 >> 2] = i1;
  HEAP32[i14 + (i8 * 12 & -1) + 8 >> 2] = HEAP32[i2 >> 2];
 }
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = HEAP32[i5 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i3 + 8 | 0;
 i3 = i5 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore17NodeListsNodeDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = HEAP32[i1 + 68 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 72 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    do {
     if ((HEAP8[i2 + (i4 * 12 & -1) | 0] | 0) != -1) {
      i5 = HEAP32[i2 + (i4 * 12 & -1) + 4 >> 2] | 0;
      if ((i5 | 0) == 0) {
       break;
      }
      i6 = i5 | 0;
      i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
      if ((i7 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i5);
       break;
      } else {
       HEAP32[i6 >> 2] = i7;
       break;
      }
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2 | 0);
 }
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 52 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i7 = i2 + (i4 << 3) | 0;
    if ((HEAP32[i7 >> 2] | 0) != -1) {
     __ZN7WebCore13QualifiedNameD1Ev(i7 | 0);
    }
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 32 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    do {
     if ((HEAP8[i2 + (i4 * 12 & -1) | 0] | 0) != -1) {
      i7 = HEAP32[i2 + (i4 * 12 & -1) + 4 >> 2] | 0;
      if ((i7 | 0) == 0) {
       break;
      }
      i6 = i7 | 0;
      i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
      if ((i5 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i7);
       break;
      } else {
       HEAP32[i6 >> 2] = i5;
       break;
      }
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2 | 0);
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i3 | 0) > 0) {
  i1 = 0;
  while (1) {
   do {
    if ((HEAP8[i2 + (i1 * 12 & -1) | 0] | 0) != -1) {
     i4 = HEAP32[i2 + (i1 * 12 & -1) + 4 >> 2] | 0;
     if ((i4 | 0) == 0) {
      break;
     }
     i5 = i4 | 0;
     i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
     if ((i6 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i4);
      break;
     } else {
      HEAP32[i5 >> 2] = i6;
      break;
     }
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i3 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2 | 0);
 return;
}
function __ZN7WebCore13ContainerNode13removeBetweenEPNS_4NodeES2_RS1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i5 = HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 8 >> 2] | 0;
 do {
  if (!((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0 | (i5 | 0) == 0)) {
   i6 = __ZNK7WebCore8Document4pageEv(i5) | 0;
   do {
    if ((i6 | 0) == 0) {
     i7 = HEAP32[i5 + 2204 >> 2] | 0;
     if ((i7 | 0) == 0) {
      i8 = 0;
      break;
     }
     i8 = __ZNK7WebCore8Document4pageEv(i7) | 0;
    } else {
     i8 = i6;
    }
   } while (0);
   i6 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i8) | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation20didRemoveDOMNodeImplEPNS_19InstrumentingAgentsEPNS_4NodeE(i6, i4);
  }
 } while (0);
 i8 = HEAP32[i4 + 12 >> 2] | 0;
 i5 = i4 + 32 | 0;
 if ((i8 & 2048 | 0) == 0) {
  i9 = i5 | 0;
 } else {
  i9 = HEAP32[i5 >> 2] | 0;
 }
 if ((HEAP32[i9 >> 2] | 0) == 0) {
  if ((i8 & 262144 | 0) != 0) {
   i10 = 12;
  }
 } else {
  i10 = 12;
 }
 do {
  if ((i10 | 0) == 12) {
   if ((i8 & 4 | 0) != 0) {
    __ZN7WebCore5Style16detachRenderTreeERNS_7ElementE(i4);
    break;
   }
   if ((i8 & 1 | 0) == 0) {
    break;
   }
   __ZN7WebCore5Style18detachTextRendererERNS_4TextE(i4);
  }
 } while (0);
 if ((i3 | 0) != 0) {
  HEAP32[i3 + 24 >> 2] = i2;
 }
 if ((i2 | 0) != 0) {
  HEAP32[i2 + 28 >> 2] = i3;
 }
 i8 = i1 + 36 | 0;
 if ((HEAP32[i8 >> 2] | 0) == (i4 | 0)) {
  HEAP32[i8 >> 2] = i3;
 }
 i3 = i1 + 40 | 0;
 if ((HEAP32[i3 >> 2] | 0) != (i4 | 0)) {
  i11 = i4 + 24 | 0;
  HEAP32[i11 >> 2] = 0;
  i12 = i4 + 28 | 0;
  HEAP32[i12 >> 2] = 0;
  i13 = i4 + 16 | 0;
  HEAP32[i13 >> 2] = 0;
  i14 = i1 + 20 | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  i16 = i15 + 8 | 0;
  i17 = HEAP32[i16 >> 2] | 0;
  i18 = i17 + 44 | 0;
  __ZN7WebCore9TreeScope13adoptIfNeededEPNS_4NodeE(i18, i4);
  return;
 }
 HEAP32[i3 >> 2] = i2;
 i11 = i4 + 24 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i4 + 28 | 0;
 HEAP32[i12 >> 2] = 0;
 i13 = i4 + 16 | 0;
 HEAP32[i13 >> 2] = 0;
 i14 = i1 + 20 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 i16 = i15 + 8 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 i18 = i17 + 44 | 0;
 __ZN7WebCore9TreeScope13adoptIfNeededEPNS_4NodeE(i18, i4);
 return;
}
function __ZN7WebCoreL37collectChildrenAndRemoveFromOldParentERNS_4NodeERN3WTF6VectorINS2_3RefIS0_EELj11ENS2_15CrashOnOverflowEEERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i4 & 4096 | 0) == 0) {
  i5 = i2 + 8 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  if ((i6 | 0) == (HEAP32[i2 + 4 >> 2] | 0)) {
   i7 = i6 + 1 | 0;
   i8 = i7 + (i6 >>> 2) | 0;
   i9 = i8 >>> 0 > 16 >>> 0 ? i8 : 16;
   __ZN3WTF6VectorINS_3RefIN7WebCore4NodeEEELj11ENS_15CrashOnOverflowEE15reserveCapacityEj(i2, i9 >>> 0 > i7 >>> 0 ? i9 : i7);
   HEAP32[(HEAP32[i2 >> 2] | 0) + (HEAP32[i5 >> 2] << 2) >> 2] = i1;
   i7 = i1 + 8 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  } else {
   HEAP32[(HEAP32[i2 >> 2] | 0) + (i6 << 2) >> 2] = i1;
   i6 = i1 + 8 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  }
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
  i5 = HEAP32[i1 + 16 >> 2] | 0;
  if ((i5 | 0) == 0) {
   return;
  }
  __ZN7WebCore13ContainerNode11removeChildEPNS_4NodeERi(i5, i1, i3) | 0;
  return;
 }
 do {
  if ((i4 & 2 | 0) != 0) {
   i3 = HEAP32[i1 + 36 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i5 = i2 + 8 | 0;
   i6 = i2 + 4 | 0;
   i7 = i2 | 0;
   i9 = i3;
   i3 = HEAP32[i5 >> 2] | 0;
   while (1) {
    if ((i3 | 0) == (HEAP32[i6 >> 2] | 0)) {
     i8 = i3 + 1 | 0;
     i10 = i8 + (i3 >>> 2) | 0;
     i11 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
     __ZN3WTF6VectorINS_3RefIN7WebCore4NodeEEELj11ENS_15CrashOnOverflowEE15reserveCapacityEj(i2, i11 >>> 0 > i8 >>> 0 ? i11 : i8);
     HEAP32[(HEAP32[i7 >> 2] | 0) + (HEAP32[i5 >> 2] << 2) >> 2] = i9;
     i8 = i9 + 8 | 0;
     HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
    } else {
     HEAP32[(HEAP32[i7 >> 2] | 0) + (i3 << 2) >> 2] = i9;
     i8 = i9 + 8 | 0;
     HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
    }
    i3 = (HEAP32[i5 >> 2] | 0) + 1 | 0;
    HEAP32[i5 >> 2] = i3;
    i9 = HEAP32[i9 + 28 >> 2] | 0;
    if ((i9 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 __ZN7WebCore13ContainerNode14removeChildrenEv(i1);
 return;
}
function __ZN7WebCoreL35cloneChildNodesAvoidingDeleteButtonEPNS_13ContainerNodeES1_PNS_11HTMLElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i5 | 0;
 i8 = i6 | 0;
 i9 = i1;
 i1 = 0;
 while (1) {
  if ((i1 | 0) != 0) {
   i10 = 21;
   break;
  }
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i9 >> 2] | 0) + 84 >> 2] & 7](i5, i9, 0);
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i8 >> 2] = i11;
  i12 = (i11 | 0) == 0;
  if (!i12) {
   i13 = i11 + 8 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
  }
  __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i2, i6, i4) | 0;
  i13 = HEAP32[i8 >> 2] | 0;
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
  i13 = HEAP32[i4 >> 2] | 0;
  do {
   if ((i13 | 0) == 0) {
    if ((HEAP32[i9 + 12 >> 2] & 2 | 0) == 0) {
     break;
    }
    __ZN7WebCoreL35cloneChildNodesAvoidingDeleteButtonEPNS_13ContainerNodeES1_PNS_11HTMLElementE(HEAP32[i9 + 36 >> 2] | 0, i11);
   }
  } while (0);
  do {
   if (!i12) {
    i14 = i11 + 8 | 0;
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
  i11 = HEAP32[i9 + 28 >> 2] | 0;
  if ((i11 | 0) == 0) {
   i10 = 19;
   break;
  } else {
   i9 = i11;
   i1 = i13;
  }
 }
 if ((i10 | 0) == 19) {
  STACKTOP = i3;
  return;
 } else if ((i10 | 0) == 21) {
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore13ContainerNode27dispatchPostAttachCallbacksEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i1 = HEAP32[H_BASE + 296 >> 2] | 0;
 i2 = i1 + 8 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  i3 = i1;
  i4 = i2;
  i5 = 0;
 } else {
  i2 = 0;
  i6 = i1;
  while (1) {
   i1 = HEAP32[i6 >> 2] | 0;
   i7 = HEAP32[i1 + (i2 * 12 & -1) >> 2] | 0;
   i8 = HEAP32[i1 + (i2 * 12 & -1) + 4 >> 2] | 0;
   do {
    if ((i8 | 0) == 0) {
     FUNCTION_TABLE_vii[i7 & 31](0, HEAP32[i1 + (i2 * 12 & -1) + 8 >> 2] | 0);
    } else {
     i9 = i8 + 8 | 0;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
     FUNCTION_TABLE_vii[i7 & 31](i8, HEAP32[i1 + (i2 * 12 & -1) + 8 >> 2] | 0);
     i9 = i8 + 8 | 0;
     i10 = i9 | 0;
     i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     HEAP32[i10 >> 2] = i11;
     if ((i11 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
    }
   } while (0);
   i8 = i2 + 1 | 0;
   i1 = HEAP32[H_BASE + 296 >> 2] | 0;
   i7 = i1 + 8 | 0;
   i9 = HEAP32[i7 >> 2] | 0;
   if (i8 >>> 0 < i9 >>> 0) {
    i2 = i8;
    i6 = i1;
   } else {
    i3 = i1;
    i4 = i7;
    i5 = i9;
    break;
   }
  }
 }
 i6 = i3 + 4 | 0;
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  return;
 }
 i2 = i3 | 0;
 if ((i5 | 0) != 0) {
  i3 = HEAP32[i2 >> 2] | 0;
  i9 = i3 + (i5 * 12 & -1) | 0;
  i5 = i3;
  while (1) {
   i3 = HEAP32[i5 + 4 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i7 = i3 + 8 | 0;
     i1 = i7 | 0;
     i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
     HEAP32[i1 >> 2] = i8;
     if ((i8 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
    }
   } while (0);
   i5 = i5 + 12 | 0;
   if ((i5 | 0) == (i9 | 0)) {
    break;
   }
  }
  HEAP32[i4 >> 2] = 0;
 }
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i6 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN3WTF9HashTableINSt3__14pairIhNS_6StringEEENS_12KeyValuePairIS4_PN7WebCore12LiveNodeListEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E16lookupForWritingINS_22IdentityHashTranslatorISE_EES4_EENS2_IPS9_bEERKT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i3 + 4 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i7 = HEAP32[i6 + 16 >> 2] | 0;
 if (i7 >>> 0 > 127 >>> 0) {
  i8 = i7 >>> 7;
 } else {
  i8 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i6) | 0;
 }
 i6 = i3 | 0;
 i3 = (HEAPU8[i6] | 0) + i8 | 0;
 i8 = (i3 >>> 23) + ~i3 | 0;
 i7 = i8 << 12 ^ i8;
 i8 = i7 >>> 7 ^ i7;
 i7 = i8 << 2 ^ i8;
 i8 = i7 >>> 20 ^ i7 | 1;
 i7 = i3;
 i3 = 0;
 i9 = 0;
 L5 : while (1) {
  i10 = i7 & i5;
  i11 = i4 + (i10 * 12 & -1) | 0;
  i12 = i11 | 0;
  i13 = HEAP8[i12] | 0;
  if (i13 << 24 >> 24 == 0) {
   if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i4 + (i10 * 12 & -1) + 4 >> 2] | 0, 0) | 0) {
    i14 = 7;
    break;
   }
   i15 = HEAP8[i12] | 0;
  } else {
   i15 = i13;
  }
  do {
   if (i15 << 24 >> 24 == -1) {
    i16 = i11;
   } else {
    if (i15 << 24 >> 24 != (HEAP8[i6] | 0)) {
     i16 = i9;
     break;
    }
    if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i4 + (i10 * 12 & -1) + 4 >> 2] | 0, HEAP32[i2 >> 2] | 0) | 0) {
     i14 = 12;
     break L5;
    } else {
     i16 = i9;
    }
   }
  } while (0);
  i13 = (i3 | 0) == 0 ? i8 : i3;
  i7 = i13 + i10 | 0;
  i3 = i13;
  i9 = i16;
 }
 if ((i14 | 0) == 7) {
  HEAP32[i1 >> 2] = (i9 | 0) != 0 ? i9 : i11;
  HEAP8[i1 + 4 | 0] = 0;
  return;
 } else if ((i14 | 0) == 12) {
  HEAP32[i1 >> 2] = i11;
  HEAP8[i1 + 4 | 0] = 1;
  return;
 }
}
function __ZNK7WebCore13ContainerNode11boundingBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0, d18 = +0, d19 = +0, i20 = 0, i21 = 0, d22 = +0, d23 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i9 = i8 | 0;
 i10 = i8;
 i11 = i4;
 HEAPF32[i11 >> 2] = +0;
 i12 = i5 + 4 | 0;
 HEAPF32[i12 >> 2] = +0;
 i13 = i6;
 HEAPF32[i13 >> 2] = +0;
 i14 = i7 + 4 | 0;
 HEAPF32[i14 >> 2] = +0;
 i15 = __ZNK7WebCore13ContainerNode18getUpperLeftCornerERNS_10FloatPointE(i2, i5) | 0;
 do {
  if (i15 ^ (__ZNK7WebCore13ContainerNode19getLowerRightCornerERNS_10FloatPointE(i2, i7) | 0)) {
   if (i15) {
    i5 = HEAP32[i4 >> 2] | 0;
    i16 = HEAP32[i4 + 4 >> 2] | 0;
    HEAP32[i6 >> 2] = i5;
    HEAP32[i6 + 4 >> 2] = i16;
    d17 = (HEAP32[tempDoublePtr >> 2] = i5, +HEAPF32[tempDoublePtr >> 2]);
    d18 = d17;
    d19 = d17;
    i20 = i16;
    i21 = i5;
    break;
   } else {
    i5 = HEAP32[i6 >> 2] | 0;
    i16 = HEAP32[i6 + 4 >> 2] | 0;
    HEAP32[i4 >> 2] = i5;
    HEAP32[i4 + 4 >> 2] = i16;
    d17 = (HEAP32[tempDoublePtr >> 2] = i5, +HEAPF32[tempDoublePtr >> 2]);
    d18 = d17;
    d19 = d17;
    i20 = i16;
    i21 = i5;
    break;
   }
  } else {
   d18 = +HEAPF32[i13 >> 2];
   d19 = +HEAPF32[i11 >> 2];
   i20 = HEAP32[i4 + 4 >> 2] | 0;
   i21 = HEAP32[i4 >> 2] | 0;
  }
 } while (0);
 d17 = +HEAPF32[i14 >> 2];
 d22 = +HEAPF32[i12 >> 2];
 HEAP32[i9 >> 2] = i21;
 HEAP32[i9 + 4 >> 2] = i20;
 i20 = i8 + 8 | 0;
 d23 = +((d18 < d19 ? d19 : d18) - d19);
 d19 = +((d17 < d22 ? d22 : d17) - d22);
 HEAPF32[i20 >> 2] = d23;
 HEAPF32[i20 + 4 >> 2] = d19;
 __ZN7WebCore19enclosingLayoutRectERKNS_9FloatRectE(i1, i10);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13ContainerNode17getElementsByNameERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = (__ZN7WebCore4Node14ensureRareDataEv(i2 | 0) | 0) + 8 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i10 = __ZN3WTF10fastMallocEj(88) | 0;
   i11 = i10;
   _memset(i10 | 0, 0, 88) | 0;
   i10 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i11;
   if ((i10 | 0) == 0) {
    i12 = i11;
    break;
   }
   __ZN7WebCore17NodeListsNodeDataD2Ev(i10);
   __ZN3WTF8fastFreeEPv(i10);
   i12 = HEAP32[i8 >> 2] | 0;
  } else {
   i12 = i9;
  }
 } while (0);
 i9 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i3 = i5 | 0;
   HEAP32[i3 >> 2] = 0;
   i13 = i3;
  } else {
   if ((HEAP32[i9 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i5, i9);
    i13 = i5 | 0;
    break;
   } else {
    i3 = i5 | 0;
    HEAP32[i3 >> 2] = i9;
    i8 = i9 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
    i13 = i3;
    break;
   }
  }
 } while (0);
 i9 = i7 | 0;
 HEAP32[i9 >> 2] = HEAP32[i13 >> 2];
 __ZN7WebCore17NodeListsNodeData22addCacheWithAtomicNameINS_12NameNodeListENS_13ContainerNodeEEEN3WTF10PassRefPtrIT_EERT0_NS_12LiveNodeList4TypeERKNS4_12AtomicStringE(i6, i12, i2, 1, i7);
 i7 = i6 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 >> 2] = i6;
 i6 = HEAP32[i9 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i6 | 0;
 i1 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i9 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore17NodeListsNodeData16addCacheWithNameINS_13ClassNodeListEEEN3WTF10PassRefPtrIT_EERNS_13ContainerNodeENS_12LiveNodeList4TypeERKNS3_6StringE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i6 + 24 | 0;
 HEAP8[i8 | 0] = i4;
 i4 = i8 + 4 | 0;
 i10 = HEAP32[i5 >> 2] | 0;
 HEAP32[i4 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i11 = i10 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 HEAP32[i9 >> 2] = 0;
 __ZN3WTF9HashTableINSt3__14pairIhNS_6StringEEENS_12KeyValuePairIS4_PN7WebCore12LiveNodeListEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E3addINS_17HashMapTranslatorISK_SE_EES4_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SE_SK_SH_EEEEOT0_OT1_(i7, i2 + 28 | 0, i8, i9);
 i9 = HEAP32[i4 >> 2] | 0;
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
 if ((HEAP8[i7 + 8 | 0] & 1) != 0) {
  i9 = __ZN3WTF10fastMallocEj(44) | 0;
  i8 = i9;
  __ZN7WebCore13ClassNodeListC1ERNS_13ContainerNodeERKN3WTF6StringE(i8, i3, i5);
  HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] = i9;
  HEAP32[i1 >> 2] = i8;
  STACKTOP = i6;
  return;
 }
 i8 = HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] | 0;
 HEAP32[i1 >> 2] = i8;
 if ((i8 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i1 = i8 + 8 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore13ContainerNode20getElementsByTagNameERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i7 = (HEAP8[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1576 | 0] & 1) == 0;
 i8 = (__ZN7WebCore4Node14ensureRareDataEv(i2 | 0) | 0) + 8 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i10 = __ZN3WTF10fastMallocEj(88) | 0;
   i11 = i10;
   _memset(i10 | 0, 0, 88) | 0;
   i10 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i11;
   if ((i10 | 0) == 0) {
    i12 = i11;
    break;
   }
   __ZN7WebCore17NodeListsNodeDataD2Ev(i10);
   __ZN3WTF8fastFreeEPv(i10);
   i12 = HEAP32[i8 >> 2] | 0;
  } else {
   i12 = i9;
  }
 } while (0);
 if (i7) {
  __ZN7WebCore17NodeListsNodeData22addCacheWithAtomicNameINS_11TagNodeListENS_13ContainerNodeEEEN3WTF10PassRefPtrIT_EERT0_NS_12LiveNodeList4TypeERKNS4_12AtomicStringE(i6, i12, i2, 2, i3);
  i7 = i6 | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i4;
  return;
 } else {
  __ZN7WebCore17NodeListsNodeData22addCacheWithAtomicNameINS_15HTMLTagNodeListENS_13ContainerNodeEEEN3WTF10PassRefPtrIT_EERT0_NS_12LiveNodeList4TypeERKNS4_12AtomicStringE(i5, i12, i2, 3, i3);
  i3 = i5 | 0;
  i5 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 >> 2] = i5;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore13ContainerNode22removeDetachedChildrenEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 do {
  if ((__ZNK7WebCore4Node22connectedSubframeCountEv(i1 | 0) | 0) != 0) {
   i5 = HEAP32[i1 + 36 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   } else {
    i6 = i5;
   }
   while (1) {
    __ZNK7WebCore4Node46updateAncestorConnectedSubframeCountForRemovalEv(i6);
    i6 = HEAP32[i6 + 28 >> 2] | 0;
    if ((i6 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 HEAP32[i3 >> 2] = 0;
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCore7Private28addChildNodesToDeletionQueueINS_4NodeENS_13ContainerNodeEEEvRPT_S6_RT0_(i3, i4, i1);
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 } else {
  i7 = i1;
 }
 while (1) {
  i1 = i7 + 28 | 0;
  i6 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i3 >> 2] = i6;
  if ((i6 | 0) == 0) {
   HEAP32[i4 >> 2] = 0;
  }
  do {
   if ((HEAP32[i7 + 12 >> 2] & 2 | 0) == 0) {
    i8 = i6;
   } else {
    if ((HEAP32[i7 + 36 >> 2] | 0) == 0) {
     i8 = i6;
     break;
    }
    __ZN7WebCore7Private28addChildNodesToDeletionQueueINS_4NodeENS_13ContainerNodeEEEvRPT_S6_RT0_(i3, i4, i7);
    i8 = HEAP32[i3 >> 2] | 0;
   }
  } while (0);
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 44 >> 2] & 31](i7);
  if ((i8 | 0) == 0) {
   break;
  } else {
   i7 = i8;
  }
 }
 STACKTOP = i2;
 return;
}
function __ZN7WebCore13ContainerNode18notifyChildRemovedERNS_4NodeEPS1_S3_NS0_17ChildChangeSourceE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = HEAP32[i2 + 12 >> 2] | 0;
 if ((i8 & 4 | 0) == 0) {
  i9 = (i8 & 1 | 0) != 0 ? 3 : 6;
 } else {
  i9 = 1;
 }
 HEAP32[i7 >> 2] = i9;
 L4 : do {
  if ((i3 | 0) == 0) {
   i10 = 0;
  } else {
   if ((HEAP32[i3 + 12 >> 2] & 4 | 0) == 0) {
    i11 = i3;
   } else {
    i10 = i3;
    break;
   }
   while (1) {
    i9 = HEAP32[i11 + 24 >> 2] | 0;
    if ((i9 | 0) == 0) {
     i10 = 0;
     break L4;
    }
    if ((HEAP32[i9 + 12 >> 2] & 4 | 0) == 0) {
     i11 = i9;
    } else {
     i10 = i9;
     break;
    }
   }
  }
 } while (0);
 HEAP32[i7 + 4 >> 2] = i10;
 L10 : do {
  if ((i4 | 0) == 0) {
   i12 = 0;
  } else {
   if ((HEAP32[i4 + 12 >> 2] & 4 | 0) == 0) {
    i13 = i4;
   } else {
    i12 = i4;
    break;
   }
   while (1) {
    i10 = HEAP32[i13 + 28 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i12 = 0;
     break L10;
    }
    if ((HEAP32[i10 + 12 >> 2] & 4 | 0) == 0) {
     i13 = i10;
    } else {
     i12 = i10;
     break;
    }
   }
  }
 } while (0);
 HEAP32[i7 + 8 >> 2] = i12;
 HEAP32[i7 + 12 >> 2] = i5;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 240 >> 2] & 31](i1, i7);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore13ContainerNode22getElementsByTagNameNSERKN3WTF12AtomicStringES4_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 i7 = i3 | 0;
 if ((HEAP32[i7 >> 2] | 0) == (HEAP32[__ZN3WTF8starAtomE >> 2] | 0)) {
  __ZN7WebCore13ContainerNode20getElementsByTagNameERKN3WTF12AtomicStringE(i1, i2, i4);
  STACKTOP = i5;
  return;
 }
 i8 = (__ZN7WebCore4Node14ensureRareDataEv(i2 | 0) | 0) + 8 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i10 = __ZN3WTF10fastMallocEj(88) | 0;
   i11 = i10;
   _memset(i10 | 0, 0, 88) | 0;
   i10 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i11;
   if ((i10 | 0) == 0) {
    i12 = i11;
    break;
   }
   __ZN7WebCore17NodeListsNodeDataD2Ev(i10);
   __ZN3WTF8fastFreeEPv(i10);
   i12 = HEAP32[i8 >> 2] | 0;
  } else {
   i12 = i9;
  }
 } while (0);
 i9 = HEAP32[i7 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i13 = __ZN3WTF8nullAtomE;
 } else {
  i13 = (HEAP32[i9 + 4 >> 2] | 0) == 0 ? __ZN3WTF8nullAtomE : i3;
 }
 __ZN7WebCore17NodeListsNodeData25addCacheWithQualifiedNameERNS_13ContainerNodeERKN3WTF12AtomicStringES6_(i6, i12, i2, i13, i4);
 i4 = i6 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 >> 2] = i6;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore17NodeListsNodeData25addCacheWithQualifiedNameERNS_13ContainerNodeERKN3WTF12AtomicStringES6_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 24 | 0;
 __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i7, __ZN3WTF8nullAtomE, i5, i4);
 HEAP32[i9 >> 2] = 0;
 __ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_PNS1_11TagNodeListEEENS_24KeyValuePairKeyExtractorIS6_EENS1_17QualifiedNameHashENS_7HashMapIS2_S5_S9_NS_10HashTraitsIS2_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS2_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS2_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i8, i2 + 48 | 0, i7, i9);
 if ((HEAP8[i8 + 8 | 0] & 1) != 0) {
  i9 = __ZN3WTF10fastMallocEj(44) | 0;
  __ZN7WebCore11TagNodeListC1ERNS_13ContainerNodeENS_12LiveNodeList4TypeERKN3WTF12AtomicStringES8_(i9, i3, 2, i4, i5);
  HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] = i9;
  HEAP32[i1 >> 2] = i9;
  __ZN7WebCore13QualifiedNameD1Ev(i7);
  STACKTOP = i6;
  return;
 }
 i9 = HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] | 0;
 HEAP32[i1 >> 2] = i9;
 if ((i9 | 0) == 0) {
  __ZN7WebCore13QualifiedNameD1Ev(i7);
  STACKTOP = i6;
  return;
 }
 i1 = i9 + 8 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 __ZN7WebCore13QualifiedNameD1Ev(i7);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore13ContainerNode25resumePostAttachCallbacksERNS_8DocumentE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 do {
  if ((HEAP32[H_BASE + 304 >> 2] | 0) == 1) {
   i2 = i1 + 8 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
   if ((HEAP32[H_BASE + 296 >> 2] | 0) != 0) {
    __ZN7WebCore13ContainerNode27dispatchPostAttachCallbacksEv();
   }
   do {
    if (HEAP8[H_BASE + 288 | 0] | 0) {
     HEAP8[H_BASE + 288 | 0] = 0;
     i2 = __ZNK7WebCore8Document4pageEv(i1) | 0;
     if ((i2 | 0) == 0) {
      break;
     }
     __ZN7WebCore4Page32setMemoryCacheClientCallsEnabledEb(i2, 1);
    }
   } while (0);
   i2 = __ZN7WebCore18platformStrategiesEv() | 0;
   i3 = i2 + 12 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 63](i2) | 0;
    HEAP32[i3 >> 2] = i5;
    i6 = i5;
   } else {
    i6 = i4;
   }
   i4 = FUNCTION_TABLE_ii[HEAP32[HEAP32[i6 >> 2] >> 2] & 63](i6) | 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 24 >> 2] & 31](i4);
   i4 = i1 + 8 | 0;
   i5 = i4 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 HEAP32[H_BASE + 304 >> 2] = (HEAP32[H_BASE + 304 >> 2] | 0) - 1;
 return;
}
function __ZN7WebCore13ContainerNode25setAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 __ZN7WebCore19JSLazyEventListener13createForNodeERNS_13ContainerNodeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i7, i1, i3, i4);
 i4 = i6 | 0;
 i3 = i7 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i4 >> 2] = i7;
 __ZN7WebCore11EventTarget25setAttributeEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEE(i1 | 0, i2, i6) | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 + 4 | 0;
   i2 = i4 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i2 >> 2] = i1;
    break;
   }
   i1 = i4 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
  }
 } while (0);
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i3 = i6 + 4 | 0;
 i6 = i3 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i6 >> 2] = i1;
  STACKTOP = i5;
  return;
 }
 i1 = i3 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore26ChildNodeInsertionNotifier30notifyNodeInsertedIntoDocumentERNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i2 + 8 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 do {
  if ((FUNCTION_TABLE_iii[HEAP32[(HEAP32[i2 >> 2] | 0) + 180 >> 2] & 15](i2, HEAP32[i1 >> 2] | 0) | 0) == 1) {
   i4 = i1 + 4 | 0;
   i5 = i1 + 12 | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   if ((i6 | 0) == (HEAP32[i1 + 8 >> 2] | 0)) {
    __ZN3WTF6VectorINS_3RefIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i6 + 1 | 0);
    HEAP32[(HEAP32[i4 >> 2] | 0) + (HEAP32[i5 >> 2] << 2) >> 2] = i2;
    HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
    HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
    break;
   } else {
    HEAP32[(HEAP32[i4 >> 2] | 0) + (i6 << 2) >> 2] = i2;
    HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
    HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i2 + 12 >> 2] & 2 | 0) != 0) {
  __ZN7WebCore26ChildNodeInsertionNotifier36notifyDescendantInsertedIntoDocumentERNS_13ContainerNodeE(i1, i2);
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
function __ZN7WebCore22ChildListMutationScopeC2ERNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 HEAP32[i5 >> 2] = 0;
 if ((HEAP8[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 770 | 0] & 1) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore28ChildListMutationAccumulator11getOrCreateERNS_13ContainerNodeE(i4, i2);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i1 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i4;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore28ChildListMutationAccumulatorD1Ev(i1);
    __ZN3WTF8fastFreeEPv(i1);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i1 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore28ChildListMutationAccumulatorD1Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore13ContainerNode26suspendPostAttachCallbacksERNS_8DocumentE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = HEAP32[H_BASE + 304 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = i2;
  i4 = i3 + 1 | 0;
  HEAP32[H_BASE + 304 >> 2] = i4;
  return;
 }
 i2 = __ZNK7WebCore8Document4pageEv(i1) | 0;
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP8[i2 + 105 | 0] & 1) == 0) {
    break;
   }
   __ZN7WebCore4Page32setMemoryCacheClientCallsEnabledEb(i2, 0);
   HEAP8[H_BASE + 288 | 0] = 1;
  }
 } while (0);
 i2 = __ZN7WebCore18platformStrategiesEv() | 0;
 i1 = i2 + 12 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 63](i2) | 0;
  HEAP32[i1 >> 2] = i6;
  i7 = i6;
 } else {
  i7 = i5;
 }
 i5 = FUNCTION_TABLE_ii[HEAP32[HEAP32[i7 >> 2] >> 2] & 63](i7) | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] & 31](i5);
 i3 = HEAP32[H_BASE + 304 >> 2] | 0;
 i4 = i3 + 1 | 0;
 HEAP32[H_BASE + 304 >> 2] = i4;
 return;
}
function __ZN3WTF6VectorINS_3RefIN7WebCore4NodeEEELj11ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if (i2 >>> 0 > 11 >>> 0) {
   if (i2 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   } else {
    i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
    HEAP32[i3 >> 2] = i7 >>> 2;
    i8 = __ZN3WTF10fastMallocEj(i7) | 0;
    HEAP32[i4 >> 2] = i8;
    i9 = i8;
    i10 = i1 + 12 | 0;
    break;
   }
  } else {
   i8 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i8;
   HEAP32[i3 >> 2] = 11;
   i9 = i8;
   i10 = i8;
  }
 } while (0);
 i1 = i5;
 _memcpy(i9 | 0, i1 | 0, i6 << 2) | 0;
 if ((i10 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore13ContainerNode15childrenChangedERKNS0_11ChildChangeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 | 0;
 i4 = i1 + 20 | 0;
 i5 = HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0;
 i6 = _i64Add(HEAP32[__ZN7WebCore8Document19s_globalTreeVersionE >> 2] | 0, HEAP32[__ZN7WebCore8Document19s_globalTreeVersionE + 4 >> 2] | 0, 1, 0) | 0;
 i7 = tempRet0;
 HEAP32[__ZN7WebCore8Document19s_globalTreeVersionE >> 2] = i6;
 HEAP32[__ZN7WebCore8Document19s_globalTreeVersionE + 4 >> 2] = i7;
 i8 = i5 + 720 | 0;
 HEAP32[i8 >> 2] = i6;
 HEAP32[i8 + 4 >> 2] = i7;
 do {
  if ((HEAP32[i2 + 12 >> 2] | 0) == 1) {
   if ((HEAP32[i2 >> 2] | 0) == 4) {
    break;
   }
   __ZN7WebCore8Document32updateRangesAfterChildrenChangedERNS_13ContainerNodeE(HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0, i1);
  }
 } while (0);
 __ZN7WebCore4Node48invalidateNodeListAndCollectionCachesInAncestorsEPKNS_13QualifiedNameEPNS_7ElementE(i3, 0, 0);
 return;
}
function __ZN7WebCore13ContainerNode19notifyChildInsertedERNS_4NodeENS0_17ChildChangeSourceE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 + 12 >> 2] | 0;
 if ((i6 & 4 | 0) == 0) {
  i7 = i6 << 2 & 4 ^ 6;
 } else {
  i7 = 0;
 }
 HEAP32[i5 >> 2] = i7;
 i7 = i2;
 while (1) {
  i6 = HEAP32[i7 + 24 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i8 = 0;
   break;
  }
  if ((HEAP32[i6 + 12 >> 2] & 4 | 0) == 0) {
   i7 = i6;
  } else {
   i8 = i6;
   break;
  }
 }
 HEAP32[i5 + 4 >> 2] = i8;
 i8 = i2;
 while (1) {
  i2 = HEAP32[i8 + 28 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i9 = 0;
   break;
  }
  if ((HEAP32[i2 + 12 >> 2] & 4 | 0) == 0) {
   i8 = i2;
  } else {
   i9 = i2;
   break;
  }
 }
 HEAP32[i5 + 8 >> 2] = i9;
 HEAP32[i5 + 12 >> 2] = i3;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 240 >> 2] & 31](i1, i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore13ContainerNode22getElementsByClassNameERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (__ZN7WebCore4Node14ensureRareDataEv(i2 | 0) | 0) + 8 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i8 = __ZN3WTF10fastMallocEj(88) | 0;
   i9 = i8;
   _memset(i8 | 0, 0, 88) | 0;
   i8 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i9;
   if ((i8 | 0) == 0) {
    i10 = i9;
    break;
   }
   __ZN7WebCore17NodeListsNodeDataD2Ev(i8);
   __ZN3WTF8fastFreeEPv(i8);
   i10 = HEAP32[i6 >> 2] | 0;
  } else {
   i10 = i7;
  }
 } while (0);
 __ZN7WebCore17NodeListsNodeData16addCacheWithNameINS_13ClassNodeListEEEN3WTF10PassRefPtrIT_EERNS_13ContainerNodeENS_12LiveNodeList4TypeERKNS3_6StringE(i5, i10, i2, 0, i3);
 HEAP32[i1 >> 2] = HEAP32[i5 >> 2];
 STACKTOP = i4;
 return;
}
function __ZN3WTF6VectorINSt3__14pairIPFvRN7WebCore4NodeEjENS2_INS_6RefPtrIS4_EEjEEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
 if (i5 >>> 0 > 357913941 >>> 0) {
  _WTFCrash();
 }
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i5 * 12 & -1) | 0;
 HEAP32[i3 >> 2] = (i1 >>> 0) / 12 & -1;
 i5 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i4 >> 2] = i5;
 i1 = i2;
 _memcpy(i5 | 0, i1 | 0, i6 * 12 & -1) | 0;
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
function __ZN3WTF6VectorINS_3RefIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore13ContainerNode13radioNodeListERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = (__ZN7WebCore4Node14ensureRareDataEv(i2 | 0) | 0) + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i6 = __ZN3WTF10fastMallocEj(88) | 0;
   i7 = i6;
   _memset(i6 | 0, 0, 88) | 0;
   i6 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i7;
   if ((i6 | 0) == 0) {
    i8 = i7;
    break;
   }
   __ZN7WebCore17NodeListsNodeDataD2Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
   i8 = HEAP32[i4 >> 2] | 0;
  } else {
   i8 = i5;
  }
 } while (0);
 __ZN7WebCore17NodeListsNodeData22addCacheWithAtomicNameINS_13RadioNodeListENS_13ContainerNodeEEEN3WTF10PassRefPtrIT_EERT0_NS_12LiveNodeList4TypeERKNS4_12AtomicStringE(i1, i8, i2, 4, i3);
 return;
}
function __ZN7WebCore13ContainerNode16querySelectorAllERKN3WTF12AtomicStringERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   if ((HEAP32[i5 + 4 >> 2] | 0) == 0) {
    break;
   }
   i6 = i2 + 20 | 0;
   i7 = __ZN7WebCore8Document18selectorQueryCacheEv(HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0) | 0;
   i8 = __ZN7WebCore18SelectorQueryCache3addERKN3WTF12AtomicStringERNS_8DocumentERi(i7, i3, HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0, i4) | 0;
   if ((i8 | 0) == 0) {
    HEAP32[i1 >> 2] = 0;
    return;
   } else {
    __ZNK7WebCore16SelectorDataList8queryAllERNS_13ContainerNodeE(i1, i8 | 0, i2);
    return;
   }
  }
 } while (0);
 HEAP32[i4 >> 2] = 12;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore13ContainerNode13querySelectorERKN3WTF12AtomicStringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if ((HEAP32[i4 + 4 >> 2] | 0) == 0) {
    break;
   }
   i5 = i1 + 20 | 0;
   i6 = __ZN7WebCore8Document18selectorQueryCacheEv(HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0) | 0;
   i7 = __ZN7WebCore18SelectorQueryCache3addERKN3WTF12AtomicStringERNS_8DocumentERi(i6, i2, HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0, i3) | 0;
   if ((i7 | 0) == 0) {
    i8 = 0;
    return i8 | 0;
   }
   i8 = __ZNK7WebCore16SelectorDataList10queryFirstERNS_13ContainerNodeE(i7 | 0, i1) | 0;
   return i8 | 0;
  }
 } while (0);
 HEAP32[i3 >> 2] = 12;
 i8 = 0;
 return i8 | 0;
}
function ___remdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i2 >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i8 = ((i2 | 0) < 0 ? -1 : 0) >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i9 = i4 >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i10 = ((i4 | 0) < 0 ? -1 : 0) >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i11 = _i64Subtract(i7 ^ i1, i8 ^ i2, i7, i8) | 0;
 i2 = tempRet0;
 ___udivmoddi4(i11, i2, _i64Subtract(i9 ^ i3, i10 ^ i4, i9, i10) | 0, tempRet0, i6) | 0;
 i10 = _i64Subtract(HEAP32[i6 >> 2] ^ i7, HEAP32[i6 + 4 >> 2] ^ i8, i7, i8) | 0;
 i8 = tempRet0;
 STACKTOP = i5;
 return (tempRet0 = i8, i10) | 0;
}
function ___divdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = i2 >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i6 = ((i2 | 0) < 0 ? -1 : 0) >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i7 = i4 >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i8 = ((i4 | 0) < 0 ? -1 : 0) >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i9 = _i64Subtract(i5 ^ i1, i6 ^ i2, i5, i6) | 0;
 i2 = tempRet0;
 i1 = i7 ^ i5;
 i5 = i8 ^ i6;
 i6 = _i64Subtract((___udivmoddi4(i9, i2, _i64Subtract(i7 ^ i3, i8 ^ i4, i7, i8) | 0, tempRet0, 0) | 0) ^ i1, tempRet0 ^ i5, i1, i5) | 0;
 return (tempRet0 = tempRet0, i6) | 0;
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
function __ZNK7WebCore13ContainerNode9childNodeEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i2 | 0) != 0 & (i3 | 0) != 0) {
  i4 = 0;
  i5 = i3;
 } else {
  i6 = i3;
  return i6 | 0;
 }
 while (1) {
  i3 = i4 + 1 | 0;
  i1 = HEAP32[i5 + 28 >> 2] | 0;
  if (i3 >>> 0 < i2 >>> 0 & (i1 | 0) != 0) {
   i4 = i3;
   i5 = i1;
  } else {
   i6 = i1;
   break;
  }
 }
 return i6 | 0;
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
function ___muldsi3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 & 65535;
 i4 = i2 & 65535;
 i5 = Math_imul(i4, i3) | 0;
 i6 = i1 >>> 16;
 i1 = (i5 >>> 16) + (Math_imul(i4, i6) | 0) | 0;
 i4 = i2 >>> 16;
 i2 = Math_imul(i4, i3) | 0;
 return (tempRet0 = (i1 >>> 16) + (Math_imul(i4, i6) | 0) + (((i1 & 65535) + i2 | 0) >>> 16) | 0, i1 + i2 << 16 | i5 & 65535 | 0) | 0;
}
function __ZN7WebCore13ContainerNode18insertBeforeCommonERNS_4NodeES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = i2 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 36 >> 2] = i3;
 } else {
  HEAP32[i5 + 28 >> 2] = i3;
 }
 HEAP32[i3 + 16 >> 2] = i1;
 HEAP32[i3 + 24 >> 2] = i5;
 HEAP32[i3 + 28 >> 2] = i2;
 return;
}
function __ZNK7WebCore13ContainerNode14childNodeCountEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 } else {
  i4 = 0;
  i5 = i2;
 }
 while (1) {
  i2 = i4 + 1 | 0;
  i1 = HEAP32[i5 + 28 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i3 = i2;
   break;
  } else {
   i4 = i2;
   i5 = i1;
  }
 }
 return i3 | 0;
}
function __ZN7WebCore13ContainerNodeD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 32;
 i2 = i1 | 0;
 i3 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore4Node17willBeDeletedFromEPNS_8DocumentE(i2, i3);
 }
 __ZN7WebCore13ContainerNode22removeDetachedChildrenEv(i1);
 __ZN7WebCore4NodeD2Ev(i2);
 __ZdlPv(i1);
 return;
}
function __ZN7WebCore13ContainerNodeD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 32;
 i2 = i1 | 0;
 i3 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore4Node17willBeDeletedFromEPNS_8DocumentE(i2, i3);
 }
 __ZN7WebCore13ContainerNode22removeDetachedChildrenEv(i1);
 __ZN7WebCore4NodeD2Ev(i2);
 return;
}
function __ZN7WebCore13ContainerNodeD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 32;
 i2 = i1 | 0;
 i3 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore4Node17willBeDeletedFromEPNS_8DocumentE(i2, i3);
 }
 __ZN7WebCore13ContainerNode22removeDetachedChildrenEv(i1);
 __ZN7WebCore4NodeD2Ev(i2);
 return;
}
function _llvm_cttz_i32(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP8[cttz_i8 + (i1 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 | 0;
 i2 = HEAP8[cttz_i8 + (i1 >> 8 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 + 8 | 0;
 i2 = HEAP8[cttz_i8 + (i1 >> 16 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 + 16 | 0;
 return (HEAP8[cttz_i8 + (i1 >>> 24) | 0] | 0) + 24 | 0;
}
function _llvm_ctlz_i32(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP8[ctlz_i8 + (i1 >>> 24) | 0] | 0;
 if ((i2 | 0) < 8) return i2 | 0;
 i2 = HEAP8[ctlz_i8 + (i1 >> 16 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 + 8 | 0;
 i2 = HEAP8[ctlz_i8 + (i1 >> 8 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 + 16 | 0;
 return (HEAP8[ctlz_i8 + (i1 & 255) | 0] | 0) + 24 | 0;
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
function ___uremdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 ___udivmoddi4(i1, i2, i3, i4, i6) | 0;
 STACKTOP = i5;
 return (tempRet0 = HEAP32[i6 + 4 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0;
}
function ___muldi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = i1;
 i1 = i3;
 i3 = ___muldsi3(i5, i1) | 0;
 i6 = tempRet0;
 return (tempRet0 = (Math_imul(i2, i1) | 0) + (Math_imul(i4, i5) | 0) + i6 | i6 & 0, i3 & -1 | 0) | 0;
}
function __ZN7WebCore13ContainerNode26disconnectDescendantFramesEv(i1) {
 i1 = i1 | 0;
 if ((__ZNK7WebCore4Node22connectedSubframeCountEv(i1 | 0) | 0) == 0) {
  return;
 }
 __ZN7WebCore19disconnectSubframesERNS_13ContainerNodeENS_24SubframeDisconnectPolicyE(i1, 0);
 return;
}
function _bitshift64Ashr(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i3 | 0) < 32) {
  tempRet0 = i2 >> i3;
  return i1 >>> i3 | (i2 & (1 << i3) - 1) << 32 - i3;
 }
 tempRet0 = (i2 | 0) < 0 ? -1 : 0;
 return i2 >> i3 - 32 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function _bitshift64Shl(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i3 | 0) < 32) {
  tempRet0 = i2 << i3 | (i1 & (1 << i3) - 1 << 32 - i3) >>> 32 - i3;
  return i1 << i3;
 }
 tempRet0 = i1 << i3 - 32;
 return 0;
}
function __ZN7WebCore13ContainerNode15cloneChildNodesEPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCoreL35cloneChildNodesAvoidingDeleteButtonEPNS_13ContainerNodeES1_PNS_11HTMLElementE(HEAP32[i1 + 36 >> 2] | 0, i2);
 return;
}
function _i64Subtract(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = i2 - i4 >>> 0;
 i5 = i2 - i4 - (i3 >>> 0 > i1 >>> 0 | 0) >>> 0;
 return (tempRet0 = i5, i1 - i3 >>> 0 | 0) | 0;
}
function _bitshift64Lshr(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i3 | 0) < 32) {
  tempRet0 = i2 >>> i3;
  return i1 >>> i3 | (i2 & (1 << i3) - 1) << 32 - i3;
 }
 tempRet0 = 0;
 return i2 >>> i3 - 32 | 0;
}
function iii___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1 | 0, i2 | 0) | 0;
}
function viii___ZN7WebCore4Node9setPrefixERKN3WTF12AtomicStringERi__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore4Node9setPrefixERKN3WTF12AtomicStringERi(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi(i1 | 0, i2 | 0, i3 | 0);
}
function _i64Add(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = i1 + i3 >>> 0;
 return (tempRet0 = i2 + i4 + (i5 >>> 0 < i1 >>> 0 | 0) >>> 0, i5 | 0) | 0;
}
function iii___ZN7WebCore4Node12insertedIntoERNS_13ContainerNodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore4Node12insertedIntoERNS_13ContainerNodeE(i1 | 0, i2 | 0) | 0;
}
function ___udivdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = ___udivmoddi4(i1, i2, i3, i4, 0) | 0;
 return (tempRet0 = tempRet0, i5) | 0;
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
function vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node17handleLocalEventsERNS_5EventE(i1 | 0, i2 | 0);
}
function vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv(i1 | 0);
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
function ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node24willRespondToTouchEventsEv(i1 | 0) | 0;
}
function __ZNK7WebCore4Node27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11EventTarget13isMessagePortEv(i1 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 7](i2 | 0, i3 | 0, i4 | 0);
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
function vii___ZNK7WebCore4Node9nodeValueEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore4Node9nodeValueEv(i1 | 0, i2 | 0);
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
function ii___ZNK7WebCore4Node12namespaceURIEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node12namespaceURIEv(i1 | 0) | 0;
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
function __ZN7WebCore13ContainerNode31postAttachCallbacksAreSuspendedEv() {
 return (HEAP32[H_BASE + 304 >> 2] | 0) != 0 | 0;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function ii___ZNK7WebCore4Node9localNameEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node9localNameEv(i1 | 0) | 0;
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
function ii___ZNK7WebCore4Node6prefixEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node6prefixEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node6toNodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node6toNodeEv(i1 | 0) | 0;
}
function __ZNK7WebCore4Node16childTypeAllowedENS0_8NodeTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
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
function __ZNK7WebCore4Node15isAttributeNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
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
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
  var FUNCTION_TABLE_iiiii = [b0,b0,iiiii___ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper,b0,iiiii___ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore13ContainerNodeD0Ev,b1,vi___ZN7WebCore4Node14refEventTargetEv__wrapper,b1,vi___ZN7WebCore4Node16derefEventTargetEv__wrapper,b1,vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper,b1,vi___ZN7WebCore11EventTarget23removeAllEventListenersEv__wrapper,b1,vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper,b1,__ZN7WebCore4Node20beginParsingChildrenEv,b1,__ZN7WebCore4Node21finishParsingChildrenEv,b1,__ZN7WebCore13ContainerNodeD2Ev,b1,__ZN7WebCore4Node24startLoadingDynamicSheetEv,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper,b2,vii___ZNK7WebCore4Node7baseURIEv__wrapper,b2,vii___ZN7WebCore4Node11removedFromERNS_13ContainerNodeE__wrapper,b2,__ZN7WebCore13ContainerNode15childrenChangedERKNS0_11ChildChangeE,b2,vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper,b2,vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper,b2,vii___ZNK7WebCore4Node9nodeValueEv__wrapper,b2,__ZNK7WebCore13ContainerNode11boundingBoxEv,b2,__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE,b2,__ZNK7WebCore4Node27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE,b2,__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,ii___ZNK7WebCore4Node18maxCharacterOffsetEv__wrapper,b3,ii___ZNK7WebCore4Node6prefixEv__wrapper,b3,ii___ZN7WebCore4Node15eventTargetDataEv__wrapper,b3,__ZNK7WebCore4Node16nonRendererStyleEv,b3,__ZNK7WebCore4Node15isPluginElementEv,b3,ii___ZN7WebCore4Node29willRespondToMouseClickEventsEv__wrapper,b3,__ZNK7WebCore4Node23canContainRangeEndPointEv,b3,ii___ZNK7WebCore4Node12namespaceURIEv__wrapper,b3,ii___ZNK7WebCore4Node18offsetInCharactersEv__wrapper,b3,__ZNK7WebCore4Node22scriptExecutionContextEv,b3,__ZNK7WebCore4Node19isCharacterDataNodeEv,b3,ii___ZN7WebCore4Node6toNodeEv__wrapper,b3,ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper,b3,__ZNK7WebCore4Node15isAttributeNodeEv
  ,b3,__ZNK7WebCore4Node21isMediaControlElementEv,b3,__ZNK7WebCore4Node20isInsertionPointNodeEv,b3,__ZNK7WebCore4Node19isFrameOwnerElementEv,b3,ii___ZN7WebCore4Node14toInputElementEv__wrapper,b3,ii___ZNK7WebCore4Node9localNameEv__wrapper,b3,__ZNK7WebCore4Node14customPseudoIdEv,b3,ii___ZN7WebCore4Node28willRespondToMouseMoveEventsEv__wrapper,b3,ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper,b3,__ZNK7WebCore4Node15isMediaControlsEv,b3,ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper,b3,ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper,b3,__ZN7WebCore4Node11sheetLoadedEv,b3,ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper,b3,ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper,b3,ii___ZN7WebCore4Node29willRespondToMouseWheelEventsEv__wrapper
  ,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper,b4,viii___ZN7WebCore4Node9setPrefixERKN3WTF12AtomicStringERi__wrapper,b4,b4,b4];
  var FUNCTION_TABLE_v = [b5,b5,v____cxa_pure_virtual__wrapper,b5];
  var FUNCTION_TABLE_iii = [b6,b6,iii___ZN7WebCore4Node12insertedIntoERNS_13ContainerNodeE__wrapper,b6,iii___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper,b6,__ZNK7WebCore13ContainerNode25childShouldCreateRendererERKNS_4NodeE,b6,__ZNK7WebCore4Node16childTypeAllowedENS0_8NodeTypeE,b6,iii___ZN7WebCore4Node13computedStyleENS_8PseudoIdE__wrapper,b6,b6,b6,b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiii: dynCall_iiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiii": invoke_iiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "cttz_i8": cttz_i8, "ctlz_i8": ctlz_i8, "NaN": NaN, "Infinity": Infinity, "__ZN3WTF8starAtomE": __ZN3WTF8starAtomE, "__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE": __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE": __ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE, "__ZN7WebCore8Document19s_globalTreeVersionE": __ZN7WebCore8Document19s_globalTreeVersionE }, buffer);
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
// TODO: strip out parts of this we do not need
//======= begin closure i64 code =======
// Copyright 2009 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/**
 * @fileoverview Defines a Long class for representing a 64-bit two's-complement
 * integer value, which faithfully simulates the behavior of a Java "long". This
 * implementation is derived from LongLib in GWT.
 *
 */
var i64Math = (function() { // Emscripten wrapper
  var goog = { math: {} };
  /**
   * Constructs a 64-bit two's-complement integer, given its low and high 32-bit
   * values as *signed* integers.  See the from* functions below for more
   * convenient ways of constructing Longs.
   *
   * The internal representation of a long is the two given signed, 32-bit values.
   * We use 32-bit pieces because these are the size of integers on which
   * Javascript performs bit-operations.  For operations like addition and
   * multiplication, we split each number into 16-bit pieces, which can easily be
   * multiplied within Javascript's floating-point representation without overflow
   * or change in sign.
   *
   * In the algorithms below, we frequently reduce the negative case to the
   * positive case by negating the input(s) and then post-processing the result.
   * Note that we must ALWAYS check specially whether those values are MIN_VALUE
   * (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
   * a positive number, it overflows back into a negative).  Not handling this
   * case would often result in infinite recursion.
   *
   * @param {number} low  The low (signed) 32 bits of the long.
   * @param {number} high  The high (signed) 32 bits of the long.
   * @constructor
   */
  goog.math.Long = function(low, high) {
    /**
     * @type {number}
     * @private
     */
    this.low_ = low | 0;  // force into 32 signed bits.
    /**
     * @type {number}
     * @private
     */
    this.high_ = high | 0;  // force into 32 signed bits.
  };
  // NOTE: Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the
  // from* methods on which they depend.
  /**
   * A cache of the Long representations of small integer values.
   * @type {!Object}
   * @private
   */
  goog.math.Long.IntCache_ = {};
  /**
   * Returns a Long representing the given (32-bit) integer value.
   * @param {number} value The 32-bit integer in question.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromInt = function(value) {
    if (-128 <= value && value < 128) {
      var cachedObj = goog.math.Long.IntCache_[value];
      if (cachedObj) {
        return cachedObj;
      }
    }
    var obj = new goog.math.Long(value | 0, value < 0 ? -1 : 0);
    if (-128 <= value && value < 128) {
      goog.math.Long.IntCache_[value] = obj;
    }
    return obj;
  };
  /**
   * Returns a Long representing the given value, provided that it is a finite
   * number.  Otherwise, zero is returned.
   * @param {number} value The number in question.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromNumber = function(value) {
    if (isNaN(value) || !isFinite(value)) {
      return goog.math.Long.ZERO;
    } else if (value <= -goog.math.Long.TWO_PWR_63_DBL_) {
      return goog.math.Long.MIN_VALUE;
    } else if (value + 1 >= goog.math.Long.TWO_PWR_63_DBL_) {
      return goog.math.Long.MAX_VALUE;
    } else if (value < 0) {
      return goog.math.Long.fromNumber(-value).negate();
    } else {
      return new goog.math.Long(
          (value % goog.math.Long.TWO_PWR_32_DBL_) | 0,
          (value / goog.math.Long.TWO_PWR_32_DBL_) | 0);
    }
  };
  /**
   * Returns a Long representing the 64-bit integer that comes by concatenating
   * the given high and low bits.  Each is assumed to use 32 bits.
   * @param {number} lowBits The low 32-bits.
   * @param {number} highBits The high 32-bits.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromBits = function(lowBits, highBits) {
    return new goog.math.Long(lowBits, highBits);
  };
  /**
   * Returns a Long representation of the given string, written using the given
   * radix.
   * @param {string} str The textual representation of the Long.
   * @param {number=} opt_radix The radix in which the text is written.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromString = function(str, opt_radix) {
    if (str.length == 0) {
      throw Error('number format error: empty string');
    }
    var radix = opt_radix || 10;
    if (radix < 2 || 36 < radix) {
      throw Error('radix out of range: ' + radix);
    }
    if (str.charAt(0) == '-') {
      return goog.math.Long.fromString(str.substring(1), radix).negate();
    } else if (str.indexOf('-') >= 0) {
      throw Error('number format error: interior "-" character: ' + str);
    }
    // Do several (8) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = goog.math.Long.fromNumber(Math.pow(radix, 8));
    var result = goog.math.Long.ZERO;
    for (var i = 0; i < str.length; i += 8) {
      var size = Math.min(8, str.length - i);
      var value = parseInt(str.substring(i, i + size), radix);
      if (size < 8) {
        var power = goog.math.Long.fromNumber(Math.pow(radix, size));
        result = result.multiply(power).add(goog.math.Long.fromNumber(value));
      } else {
        result = result.multiply(radixToPower);
        result = result.add(goog.math.Long.fromNumber(value));
      }
    }
    return result;
  };
  // NOTE: the compiler should inline these constant values below and then remove
  // these variables, so there should be no runtime penalty for these.
  /**
   * Number used repeated below in calculations.  This must appear before the
   * first call to any from* function below.
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_16_DBL_ = 1 << 16;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_24_DBL_ = 1 << 24;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_32_DBL_ =
      goog.math.Long.TWO_PWR_16_DBL_ * goog.math.Long.TWO_PWR_16_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_31_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ / 2;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_48_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ * goog.math.Long.TWO_PWR_16_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_64_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ * goog.math.Long.TWO_PWR_32_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_63_DBL_ =
      goog.math.Long.TWO_PWR_64_DBL_ / 2;
  /** @type {!goog.math.Long} */
  goog.math.Long.ZERO = goog.math.Long.fromInt(0);
  /** @type {!goog.math.Long} */
  goog.math.Long.ONE = goog.math.Long.fromInt(1);
  /** @type {!goog.math.Long} */
  goog.math.Long.NEG_ONE = goog.math.Long.fromInt(-1);
  /** @type {!goog.math.Long} */
  goog.math.Long.MAX_VALUE =
      goog.math.Long.fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0);
  /** @type {!goog.math.Long} */
  goog.math.Long.MIN_VALUE = goog.math.Long.fromBits(0, 0x80000000 | 0);
  /**
   * @type {!goog.math.Long}
   * @private
   */
  goog.math.Long.TWO_PWR_24_ = goog.math.Long.fromInt(1 << 24);
  /** @return {number} The value, assuming it is a 32-bit integer. */
  goog.math.Long.prototype.toInt = function() {
    return this.low_;
  };
  /** @return {number} The closest floating-point representation to this value. */
  goog.math.Long.prototype.toNumber = function() {
    return this.high_ * goog.math.Long.TWO_PWR_32_DBL_ +
           this.getLowBitsUnsigned();
  };
  /**
   * @param {number=} opt_radix The radix in which the text should be written.
   * @return {string} The textual representation of this value.
   */
  goog.math.Long.prototype.toString = function(opt_radix) {
    var radix = opt_radix || 10;
    if (radix < 2 || 36 < radix) {
      throw Error('radix out of range: ' + radix);
    }
    if (this.isZero()) {
      return '0';
    }
    if (this.isNegative()) {
      if (this.equals(goog.math.Long.MIN_VALUE)) {
        // We need to change the Long value before it can be negated, so we remove
        // the bottom-most digit in this base and then recurse to do the rest.
        var radixLong = goog.math.Long.fromNumber(radix);
        var div = this.div(radixLong);
        var rem = div.multiply(radixLong).subtract(this);
        return div.toString(radix) + rem.toInt().toString(radix);
      } else {
        return '-' + this.negate().toString(radix);
      }
    }
    // Do several (6) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = goog.math.Long.fromNumber(Math.pow(radix, 6));
    var rem = this;
    var result = '';
    while (true) {
      var remDiv = rem.div(radixToPower);
      var intval = rem.subtract(remDiv.multiply(radixToPower)).toInt();
      var digits = intval.toString(radix);
      rem = remDiv;
      if (rem.isZero()) {
        return digits + result;
      } else {
        while (digits.length < 6) {
          digits = '0' + digits;
        }
        result = '' + digits + result;
      }
    }
  };
  /** @return {number} The high 32-bits as a signed value. */
  goog.math.Long.prototype.getHighBits = function() {
    return this.high_;
  };
  /** @return {number} The low 32-bits as a signed value. */
  goog.math.Long.prototype.getLowBits = function() {
    return this.low_;
  };
  /** @return {number} The low 32-bits as an unsigned value. */
  goog.math.Long.prototype.getLowBitsUnsigned = function() {
    return (this.low_ >= 0) ?
        this.low_ : goog.math.Long.TWO_PWR_32_DBL_ + this.low_;
  };
  /**
   * @return {number} Returns the number of bits needed to represent the absolute
   *     value of this Long.
   */
  goog.math.Long.prototype.getNumBitsAbs = function() {
    if (this.isNegative()) {
      if (this.equals(goog.math.Long.MIN_VALUE)) {
        return 64;
      } else {
        return this.negate().getNumBitsAbs();
      }
    } else {
      var val = this.high_ != 0 ? this.high_ : this.low_;
      for (var bit = 31; bit > 0; bit--) {
        if ((val & (1 << bit)) != 0) {
          break;
        }
      }
      return this.high_ != 0 ? bit + 33 : bit + 1;
    }
  };
  /** @return {boolean} Whether this value is zero. */
  goog.math.Long.prototype.isZero = function() {
    return this.high_ == 0 && this.low_ == 0;
  };
  /** @return {boolean} Whether this value is negative. */
  goog.math.Long.prototype.isNegative = function() {
    return this.high_ < 0;
  };
  /** @return {boolean} Whether this value is odd. */
  goog.math.Long.prototype.isOdd = function() {
    return (this.low_ & 1) == 1;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long equals the other.
   */
  goog.math.Long.prototype.equals = function(other) {
    return (this.high_ == other.high_) && (this.low_ == other.low_);
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long does not equal the other.
   */
  goog.math.Long.prototype.notEquals = function(other) {
    return (this.high_ != other.high_) || (this.low_ != other.low_);
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is less than the other.
   */
  goog.math.Long.prototype.lessThan = function(other) {
    return this.compare(other) < 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is less than or equal to the other.
   */
  goog.math.Long.prototype.lessThanOrEqual = function(other) {
    return this.compare(other) <= 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is greater than the other.
   */
  goog.math.Long.prototype.greaterThan = function(other) {
    return this.compare(other) > 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is greater than or equal to the other.
   */
  goog.math.Long.prototype.greaterThanOrEqual = function(other) {
    return this.compare(other) >= 0;
  };
  /**
   * Compares this Long with the given one.
   * @param {goog.math.Long} other Long to compare against.
   * @return {number} 0 if they are the same, 1 if the this is greater, and -1
   *     if the given one is greater.
   */
  goog.math.Long.prototype.compare = function(other) {
    if (this.equals(other)) {
      return 0;
    }
    var thisNeg = this.isNegative();
    var otherNeg = other.isNegative();
    if (thisNeg && !otherNeg) {
      return -1;
    }
    if (!thisNeg && otherNeg) {
      return 1;
    }
    // at this point, the signs are the same, so subtraction will not overflow
    if (this.subtract(other).isNegative()) {
      return -1;
    } else {
      return 1;
    }
  };
  /** @return {!goog.math.Long} The negation of this value. */
  goog.math.Long.prototype.negate = function() {
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      return goog.math.Long.MIN_VALUE;
    } else {
      return this.not().add(goog.math.Long.ONE);
    }
  };
  /**
   * Returns the sum of this and the given Long.
   * @param {goog.math.Long} other Long to add to this one.
   * @return {!goog.math.Long} The sum of this and the given Long.
   */
  goog.math.Long.prototype.add = function(other) {
    // Divide each number into 4 chunks of 16 bits, and then sum the chunks.
    var a48 = this.high_ >>> 16;
    var a32 = this.high_ & 0xFFFF;
    var a16 = this.low_ >>> 16;
    var a00 = this.low_ & 0xFFFF;
    var b48 = other.high_ >>> 16;
    var b32 = other.high_ & 0xFFFF;
    var b16 = other.low_ >>> 16;
    var b00 = other.low_ & 0xFFFF;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 + b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 + b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 + b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 + b48;
    c48 &= 0xFFFF;
    return goog.math.Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32);
  };
  /**
   * Returns the difference of this and the given Long.
   * @param {goog.math.Long} other Long to subtract from this.
   * @return {!goog.math.Long} The difference of this and the given Long.
   */
  goog.math.Long.prototype.subtract = function(other) {
    return this.add(other.negate());
  };
  /**
   * Returns the product of this and the given long.
   * @param {goog.math.Long} other Long to multiply with this.
   * @return {!goog.math.Long} The product of this and the other.
   */
  goog.math.Long.prototype.multiply = function(other) {
    if (this.isZero()) {
      return goog.math.Long.ZERO;
    } else if (other.isZero()) {
      return goog.math.Long.ZERO;
    }
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      return other.isOdd() ? goog.math.Long.MIN_VALUE : goog.math.Long.ZERO;
    } else if (other.equals(goog.math.Long.MIN_VALUE)) {
      return this.isOdd() ? goog.math.Long.MIN_VALUE : goog.math.Long.ZERO;
    }
    if (this.isNegative()) {
      if (other.isNegative()) {
        return this.negate().multiply(other.negate());
      } else {
        return this.negate().multiply(other).negate();
      }
    } else if (other.isNegative()) {
      return this.multiply(other.negate()).negate();
    }
    // If both longs are small, use float multiplication
    if (this.lessThan(goog.math.Long.TWO_PWR_24_) &&
        other.lessThan(goog.math.Long.TWO_PWR_24_)) {
      return goog.math.Long.fromNumber(this.toNumber() * other.toNumber());
    }
    // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
    // We can skip products that would overflow.
    var a48 = this.high_ >>> 16;
    var a32 = this.high_ & 0xFFFF;
    var a16 = this.low_ >>> 16;
    var a00 = this.low_ & 0xFFFF;
    var b48 = other.high_ >>> 16;
    var b32 = other.high_ & 0xFFFF;
    var b16 = other.low_ >>> 16;
    var b00 = other.low_ & 0xFFFF;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 * b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 * b00;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c16 += a00 * b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 * b00;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a16 * b16;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a00 * b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
    c48 &= 0xFFFF;
    return goog.math.Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32);
  };
  /**
   * Returns this Long divided by the given one.
   * @param {goog.math.Long} other Long by which to divide.
   * @return {!goog.math.Long} This Long divided by the given one.
   */
  goog.math.Long.prototype.div = function(other) {
    if (other.isZero()) {
      throw Error('division by zero');
    } else if (this.isZero()) {
      return goog.math.Long.ZERO;
    }
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      if (other.equals(goog.math.Long.ONE) ||
          other.equals(goog.math.Long.NEG_ONE)) {
        return goog.math.Long.MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE
      } else if (other.equals(goog.math.Long.MIN_VALUE)) {
        return goog.math.Long.ONE;
      } else {
        // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
        var halfThis = this.shiftRight(1);
        var approx = halfThis.div(other).shiftLeft(1);
        if (approx.equals(goog.math.Long.ZERO)) {
          return other.isNegative() ? goog.math.Long.ONE : goog.math.Long.NEG_ONE;
        } else {
          var rem = this.subtract(other.multiply(approx));
          var result = approx.add(rem.div(other));
          return result;
        }
      }
    } else if (other.equals(goog.math.Long.MIN_VALUE)) {
      return goog.math.Long.ZERO;
    }
    if (this.isNegative()) {
      if (other.isNegative()) {
        return this.negate().div(other.negate());
      } else {
        return this.negate().div(other).negate();
      }
    } else if (other.isNegative()) {
      return this.div(other.negate()).negate();
    }
    // Repeat the following until the remainder is less than other:  find a
    // floating-point that approximates remainder / other *from below*, add this
    // into the result, and subtract it from the remainder.  It is critical that
    // the approximate value is less than or equal to the real value so that the
    // remainder never becomes negative.
    var res = goog.math.Long.ZERO;
    var rem = this;
    while (rem.greaterThanOrEqual(other)) {
      // Approximate the result of division. This may be a little greater or
      // smaller than the actual value.
      var approx = Math.max(1, Math.floor(rem.toNumber() / other.toNumber()));
      // We will tweak the approximate result by changing it in the 48-th digit or
      // the smallest non-fractional digit, whichever is larger.
      var log2 = Math.ceil(Math.log(approx) / Math.LN2);
      var delta = (log2 <= 48) ? 1 : Math.pow(2, log2 - 48);
      // Decrease the approximation until it is smaller than the remainder.  Note
      // that if it is too large, the product overflows and is negative.
      var approxRes = goog.math.Long.fromNumber(approx);
      var approxRem = approxRes.multiply(other);
      while (approxRem.isNegative() || approxRem.greaterThan(rem)) {
        approx -= delta;
        approxRes = goog.math.Long.fromNumber(approx);
        approxRem = approxRes.multiply(other);
      }
      // We know the answer can't be zero... and actually, zero would cause
      // infinite recursion since we would make no progress.
      if (approxRes.isZero()) {
        approxRes = goog.math.Long.ONE;
      }
      res = res.add(approxRes);
      rem = rem.subtract(approxRem);
    }
    return res;
  };
  /**
   * Returns this Long modulo the given one.
   * @param {goog.math.Long} other Long by which to mod.
   * @return {!goog.math.Long} This Long modulo the given one.
   */
  goog.math.Long.prototype.modulo = function(other) {
    return this.subtract(this.div(other).multiply(other));
  };
  /** @return {!goog.math.Long} The bitwise-NOT of this value. */
  goog.math.Long.prototype.not = function() {
    return goog.math.Long.fromBits(~this.low_, ~this.high_);
  };
  /**
   * Returns the bitwise-AND of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to AND.
   * @return {!goog.math.Long} The bitwise-AND of this and the other.
   */
  goog.math.Long.prototype.and = function(other) {
    return goog.math.Long.fromBits(this.low_ & other.low_,
                                   this.high_ & other.high_);
  };
  /**
   * Returns the bitwise-OR of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to OR.
   * @return {!goog.math.Long} The bitwise-OR of this and the other.
   */
  goog.math.Long.prototype.or = function(other) {
    return goog.math.Long.fromBits(this.low_ | other.low_,
                                   this.high_ | other.high_);
  };
  /**
   * Returns the bitwise-XOR of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to XOR.
   * @return {!goog.math.Long} The bitwise-XOR of this and the other.
   */
  goog.math.Long.prototype.xor = function(other) {
    return goog.math.Long.fromBits(this.low_ ^ other.low_,
                                   this.high_ ^ other.high_);
  };
  /**
   * Returns this Long with bits shifted to the left by the given amount.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the left by the given amount.
   */
  goog.math.Long.prototype.shiftLeft = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var low = this.low_;
      if (numBits < 32) {
        var high = this.high_;
        return goog.math.Long.fromBits(
            low << numBits,
            (high << numBits) | (low >>> (32 - numBits)));
      } else {
        return goog.math.Long.fromBits(0, low << (numBits - 32));
      }
    }
  };
  /**
   * Returns this Long with bits shifted to the right by the given amount.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the right by the given amount.
   */
  goog.math.Long.prototype.shiftRight = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var high = this.high_;
      if (numBits < 32) {
        var low = this.low_;
        return goog.math.Long.fromBits(
            (low >>> numBits) | (high << (32 - numBits)),
            high >> numBits);
      } else {
        return goog.math.Long.fromBits(
            high >> (numBits - 32),
            high >= 0 ? 0 : -1);
      }
    }
  };
  /**
   * Returns this Long with bits shifted to the right by the given amount, with
   * the new top bits matching the current sign bit.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the right by the given amount, with
   *     zeros placed into the new leading bits.
   */
  goog.math.Long.prototype.shiftRightUnsigned = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var high = this.high_;
      if (numBits < 32) {
        var low = this.low_;
        return goog.math.Long.fromBits(
            (low >>> numBits) | (high << (32 - numBits)),
            high >>> numBits);
      } else if (numBits == 32) {
        return goog.math.Long.fromBits(high, 0);
      } else {
        return goog.math.Long.fromBits(high >>> (numBits - 32), 0);
      }
    }
  };
  //======= begin jsbn =======
  var navigator = { appName: 'Modern Browser' }; // polyfill a little
  // Copyright (c) 2005  Tom Wu
  // All Rights Reserved.
  // http://www-cs-students.stanford.edu/~tjw/jsbn/
  /*
   * Copyright (c) 2003-2005  Tom Wu
   * All Rights Reserved.
   *
   * Permission is hereby granted, free of charge, to any person obtaining
   * a copy of this software and associated documentation files (the
   * "Software"), to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge, publish,
   * distribute, sublicense, and/or sell copies of the Software, and to
   * permit persons to whom the Software is furnished to do so, subject to
   * the following conditions:
   *
   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS-IS" AND WITHOUT WARRANTY OF ANY KIND, 
   * EXPRESS, IMPLIED OR OTHERWISE, INCLUDING WITHOUT LIMITATION, ANY 
   * WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.  
   *
   * IN NO EVENT SHALL TOM WU BE LIABLE FOR ANY SPECIAL, INCIDENTAL,
   * INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND, OR ANY DAMAGES WHATSOEVER
   * RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER OR NOT ADVISED OF
   * THE POSSIBILITY OF DAMAGE, AND ON ANY THEORY OF LIABILITY, ARISING OUT
   * OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * In addition, the following condition applies:
   *
   * All redistributions must retain an intact copy of this copyright notice
   * and disclaimer.
   */
  // Basic JavaScript BN library - subset useful for RSA encryption.
  // Bits per digit
  var dbits;
  // JavaScript engine analysis
  var canary = 0xdeadbeefcafe;
  var j_lm = ((canary&0xffffff)==0xefcafe);
  // (public) Constructor
  function BigInteger(a,b,c) {
    if(a != null)
      if("number" == typeof a) this.fromNumber(a,b,c);
      else if(b == null && "string" != typeof a) this.fromString(a,256);
      else this.fromString(a,b);
  }
  // return new, unset BigInteger
  function nbi() { return new BigInteger(null); }
  // am: Compute w_j += (x*this_i), propagate carries,
  // c is initial carry, returns final carry.
  // c < 3*dvalue, x < 2*dvalue, this_i < dvalue
  // We need to select the fastest one that works in this environment.
  // am1: use a single mult and divide to get the high bits,
  // max digit bits should be 26 because
  // max internal value = 2*dvalue^2-2*dvalue (< 2^53)
  function am1(i,x,w,j,c,n) {
    while(--n >= 0) {
      var v = x*this[i++]+w[j]+c;
      c = Math.floor(v/0x4000000);
      w[j++] = v&0x3ffffff;
    }
    return c;
  }
  // am2 avoids a big mult-and-extract completely.
  // Max digit bits should be <= 30 because we do bitwise ops
  // on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
  function am2(i,x,w,j,c,n) {
    var xl = x&0x7fff, xh = x>>15;
    while(--n >= 0) {
      var l = this[i]&0x7fff;
      var h = this[i++]>>15;
      var m = xh*l+h*xl;
      l = xl*l+((m&0x7fff)<<15)+w[j]+(c&0x3fffffff);
      c = (l>>>30)+(m>>>15)+xh*h+(c>>>30);
      w[j++] = l&0x3fffffff;
    }
    return c;
  }
  // Alternately, set max digit bits to 28 since some
  // browsers slow down when dealing with 32-bit numbers.
  function am3(i,x,w,j,c,n) {
    var xl = x&0x3fff, xh = x>>14;
    while(--n >= 0) {
      var l = this[i]&0x3fff;
      var h = this[i++]>>14;
      var m = xh*l+h*xl;
      l = xl*l+((m&0x3fff)<<14)+w[j]+c;
      c = (l>>28)+(m>>14)+xh*h;
      w[j++] = l&0xfffffff;
    }
    return c;
  }
  if(j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
    BigInteger.prototype.am = am2;
    dbits = 30;
  }
  else if(j_lm && (navigator.appName != "Netscape")) {
    BigInteger.prototype.am = am1;
    dbits = 26;
  }
  else { // Mozilla/Netscape seems to prefer am3
    BigInteger.prototype.am = am3;
    dbits = 28;
  }
  BigInteger.prototype.DB = dbits;
  BigInteger.prototype.DM = ((1<<dbits)-1);
  BigInteger.prototype.DV = (1<<dbits);
  var BI_FP = 52;
  BigInteger.prototype.FV = Math.pow(2,BI_FP);
  BigInteger.prototype.F1 = BI_FP-dbits;
  BigInteger.prototype.F2 = 2*dbits-BI_FP;
  // Digit conversions
  var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
  var BI_RC = new Array();
  var rr,vv;
  rr = "0".charCodeAt(0);
  for(vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
  rr = "a".charCodeAt(0);
  for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
  rr = "A".charCodeAt(0);
  for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
  function int2char(n) { return BI_RM.charAt(n); }
  function intAt(s,i) {
    var c = BI_RC[s.charCodeAt(i)];
    return (c==null)?-1:c;
  }
  // (protected) copy this to r
  function bnpCopyTo(r) {
    for(var i = this.t-1; i >= 0; --i) r[i] = this[i];
    r.t = this.t;
    r.s = this.s;
  }
  // (protected) set from integer value x, -DV <= x < DV
  function bnpFromInt(x) {
    this.t = 1;
    this.s = (x<0)?-1:0;
    if(x > 0) this[0] = x;
    else if(x < -1) this[0] = x+DV;
    else this.t = 0;
  }
  // return bigint initialized to value
  function nbv(i) { var r = nbi(); r.fromInt(i); return r; }
  // (protected) set from string and radix
  function bnpFromString(s,b) {
    var k;
    if(b == 16) k = 4;
    else if(b == 8) k = 3;
    else if(b == 256) k = 8; // byte array
    else if(b == 2) k = 1;
    else if(b == 32) k = 5;
    else if(b == 4) k = 2;
    else { this.fromRadix(s,b); return; }
    this.t = 0;
    this.s = 0;
    var i = s.length, mi = false, sh = 0;
    while(--i >= 0) {
      var x = (k==8)?s[i]&0xff:intAt(s,i);
      if(x < 0) {
        if(s.charAt(i) == "-") mi = true;
        continue;
      }
      mi = false;
      if(sh == 0)
        this[this.t++] = x;
      else if(sh+k > this.DB) {
        this[this.t-1] |= (x&((1<<(this.DB-sh))-1))<<sh;
        this[this.t++] = (x>>(this.DB-sh));
      }
      else
        this[this.t-1] |= x<<sh;
      sh += k;
      if(sh >= this.DB) sh -= this.DB;
    }
    if(k == 8 && (s[0]&0x80) != 0) {
      this.s = -1;
      if(sh > 0) this[this.t-1] |= ((1<<(this.DB-sh))-1)<<sh;
    }
    this.clamp();
    if(mi) BigInteger.ZERO.subTo(this,this);
  }
  // (protected) clamp off excess high words
  function bnpClamp() {
    var c = this.s&this.DM;
    while(this.t > 0 && this[this.t-1] == c) --this.t;
  }
  // (public) return string representation in given radix
  function bnToString(b) {
    if(this.s < 0) return "-"+this.negate().toString(b);
    var k;
    if(b == 16) k = 4;
    else if(b == 8) k = 3;
    else if(b == 2) k = 1;
    else if(b == 32) k = 5;
    else if(b == 4) k = 2;
    else return this.toRadix(b);
    var km = (1<<k)-1, d, m = false, r = "", i = this.t;
    var p = this.DB-(i*this.DB)%k;
    if(i-- > 0) {
      if(p < this.DB && (d = this[i]>>p) > 0) { m = true; r = int2char(d); }
      while(i >= 0) {
        if(p < k) {
          d = (this[i]&((1<<p)-1))<<(k-p);
          d |= this[--i]>>(p+=this.DB-k);
        }
        else {
          d = (this[i]>>(p-=k))&km;
          if(p <= 0) { p += this.DB; --i; }
        }
        if(d > 0) m = true;
        if(m) r += int2char(d);
      }
    }
    return m?r:"0";
  }
  // (public) -this
  function bnNegate() { var r = nbi(); BigInteger.ZERO.subTo(this,r); return r; }
  // (public) |this|
  function bnAbs() { return (this.s<0)?this.negate():this; }
  // (public) return + if this > a, - if this < a, 0 if equal
  function bnCompareTo(a) {
    var r = this.s-a.s;
    if(r != 0) return r;
    var i = this.t;
    r = i-a.t;
    if(r != 0) return (this.s<0)?-r:r;
    while(--i >= 0) if((r=this[i]-a[i]) != 0) return r;
    return 0;
  }
  // returns bit length of the integer x
  function nbits(x) {
    var r = 1, t;
    if((t=x>>>16) != 0) { x = t; r += 16; }
    if((t=x>>8) != 0) { x = t; r += 8; }
    if((t=x>>4) != 0) { x = t; r += 4; }
    if((t=x>>2) != 0) { x = t; r += 2; }
    if((t=x>>1) != 0) { x = t; r += 1; }
    return r;
  }
  // (public) return the number of bits in "this"
  function bnBitLength() {
    if(this.t <= 0) return 0;
    return this.DB*(this.t-1)+nbits(this[this.t-1]^(this.s&this.DM));
  }
  // (protected) r = this << n*DB
  function bnpDLShiftTo(n,r) {
    var i;
    for(i = this.t-1; i >= 0; --i) r[i+n] = this[i];
    for(i = n-1; i >= 0; --i) r[i] = 0;
    r.t = this.t+n;
    r.s = this.s;
  }
  // (protected) r = this >> n*DB
  function bnpDRShiftTo(n,r) {
    for(var i = n; i < this.t; ++i) r[i-n] = this[i];
    r.t = Math.max(this.t-n,0);
    r.s = this.s;
  }
  // (protected) r = this << n
  function bnpLShiftTo(n,r) {
    var bs = n%this.DB;
    var cbs = this.DB-bs;
    var bm = (1<<cbs)-1;
    var ds = Math.floor(n/this.DB), c = (this.s<<bs)&this.DM, i;
    for(i = this.t-1; i >= 0; --i) {
      r[i+ds+1] = (this[i]>>cbs)|c;
      c = (this[i]&bm)<<bs;
    }
    for(i = ds-1; i >= 0; --i) r[i] = 0;
    r[ds] = c;
    r.t = this.t+ds+1;
    r.s = this.s;
    r.clamp();
  }
  // (protected) r = this >> n
  function bnpRShiftTo(n,r) {
    r.s = this.s;
    var ds = Math.floor(n/this.DB);
    if(ds >= this.t) { r.t = 0; return; }
    var bs = n%this.DB;
    var cbs = this.DB-bs;
    var bm = (1<<bs)-1;
    r[0] = this[ds]>>bs;
    for(var i = ds+1; i < this.t; ++i) {
      r[i-ds-1] |= (this[i]&bm)<<cbs;
      r[i-ds] = this[i]>>bs;
    }
    if(bs > 0) r[this.t-ds-1] |= (this.s&bm)<<cbs;
    r.t = this.t-ds;
    r.clamp();
  }
  // (protected) r = this - a
  function bnpSubTo(a,r) {
    var i = 0, c = 0, m = Math.min(a.t,this.t);
    while(i < m) {
      c += this[i]-a[i];
      r[i++] = c&this.DM;
      c >>= this.DB;
    }
    if(a.t < this.t) {
      c -= a.s;
      while(i < this.t) {
        c += this[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += this.s;
    }
    else {
      c += this.s;
      while(i < a.t) {
        c -= a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c -= a.s;
    }
    r.s = (c<0)?-1:0;
    if(c < -1) r[i++] = this.DV+c;
    else if(c > 0) r[i++] = c;
    r.t = i;
    r.clamp();
  }
  // (protected) r = this * a, r != this,a (HAC 14.12)
  // "this" should be the larger one if appropriate.
  function bnpMultiplyTo(a,r) {
    var x = this.abs(), y = a.abs();
    var i = x.t;
    r.t = i+y.t;
    while(--i >= 0) r[i] = 0;
    for(i = 0; i < y.t; ++i) r[i+x.t] = x.am(0,y[i],r,i,0,x.t);
    r.s = 0;
    r.clamp();
    if(this.s != a.s) BigInteger.ZERO.subTo(r,r);
  }
  // (protected) r = this^2, r != this (HAC 14.16)
  function bnpSquareTo(r) {
    var x = this.abs();
    var i = r.t = 2*x.t;
    while(--i >= 0) r[i] = 0;
    for(i = 0; i < x.t-1; ++i) {
      var c = x.am(i,x[i],r,2*i,0,1);
      if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1)) >= x.DV) {
        r[i+x.t] -= x.DV;
        r[i+x.t+1] = 1;
      }
    }
    if(r.t > 0) r[r.t-1] += x.am(i,x[i],r,2*i,0,1);
    r.s = 0;
    r.clamp();
  }
  // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
  // r != q, this != m.  q or r may be null.
  function bnpDivRemTo(m,q,r) {
    var pm = m.abs();
    if(pm.t <= 0) return;
    var pt = this.abs();
    if(pt.t < pm.t) {
      if(q != null) q.fromInt(0);
      if(r != null) this.copyTo(r);
      return;
    }
    if(r == null) r = nbi();
    var y = nbi(), ts = this.s, ms = m.s;
    var nsh = this.DB-nbits(pm[pm.t-1]);	// normalize modulus
    if(nsh > 0) { pm.lShiftTo(nsh,y); pt.lShiftTo(nsh,r); }
    else { pm.copyTo(y); pt.copyTo(r); }
    var ys = y.t;
    var y0 = y[ys-1];
    if(y0 == 0) return;
    var yt = y0*(1<<this.F1)+((ys>1)?y[ys-2]>>this.F2:0);
    var d1 = this.FV/yt, d2 = (1<<this.F1)/yt, e = 1<<this.F2;
    var i = r.t, j = i-ys, t = (q==null)?nbi():q;
    y.dlShiftTo(j,t);
    if(r.compareTo(t) >= 0) {
      r[r.t++] = 1;
      r.subTo(t,r);
    }
    BigInteger.ONE.dlShiftTo(ys,t);
    t.subTo(y,y);	// "negative" y so we can replace sub with am later
    while(y.t < ys) y[y.t++] = 0;
    while(--j >= 0) {
      // Estimate quotient digit
      var qd = (r[--i]==y0)?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);
      if((r[i]+=y.am(0,qd,r,j,0,ys)) < qd) {	// Try it out
        y.dlShiftTo(j,t);
        r.subTo(t,r);
        while(r[i] < --qd) r.subTo(t,r);
      }
    }
    if(q != null) {
      r.drShiftTo(ys,q);
      if(ts != ms) BigInteger.ZERO.subTo(q,q);
    }
    r.t = ys;
    r.clamp();
    if(nsh > 0) r.rShiftTo(nsh,r);	// Denormalize remainder
    if(ts < 0) BigInteger.ZERO.subTo(r,r);
  }
  // (public) this mod a
  function bnMod(a) {
    var r = nbi();
    this.abs().divRemTo(a,null,r);
    if(this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r,r);
    return r;
  }
  // Modular reduction using "classic" algorithm
  function Classic(m) { this.m = m; }
  function cConvert(x) {
    if(x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
    else return x;
  }
  function cRevert(x) { return x; }
  function cReduce(x) { x.divRemTo(this.m,null,x); }
  function cMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
  function cSqrTo(x,r) { x.squareTo(r); this.reduce(r); }
  Classic.prototype.convert = cConvert;
  Classic.prototype.revert = cRevert;
  Classic.prototype.reduce = cReduce;
  Classic.prototype.mulTo = cMulTo;
  Classic.prototype.sqrTo = cSqrTo;
  // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
  // justification:
  //         xy == 1 (mod m)
  //         xy =  1+km
  //   xy(2-xy) = (1+km)(1-km)
  // x[y(2-xy)] = 1-k^2m^2
  // x[y(2-xy)] == 1 (mod m^2)
  // if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
  // should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
  // JS multiply "overflows" differently from C/C++, so care is needed here.
  function bnpInvDigit() {
    if(this.t < 1) return 0;
    var x = this[0];
    if((x&1) == 0) return 0;
    var y = x&3;		// y == 1/x mod 2^2
    y = (y*(2-(x&0xf)*y))&0xf;	// y == 1/x mod 2^4
    y = (y*(2-(x&0xff)*y))&0xff;	// y == 1/x mod 2^8
    y = (y*(2-(((x&0xffff)*y)&0xffff)))&0xffff;	// y == 1/x mod 2^16
    // last step - calculate inverse mod DV directly;
    // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
    y = (y*(2-x*y%this.DV))%this.DV;		// y == 1/x mod 2^dbits
    // we really want the negative inverse, and -DV < y < DV
    return (y>0)?this.DV-y:-y;
  }
  // Montgomery reduction
  function Montgomery(m) {
    this.m = m;
    this.mp = m.invDigit();
    this.mpl = this.mp&0x7fff;
    this.mph = this.mp>>15;
    this.um = (1<<(m.DB-15))-1;
    this.mt2 = 2*m.t;
  }
  // xR mod m
  function montConvert(x) {
    var r = nbi();
    x.abs().dlShiftTo(this.m.t,r);
    r.divRemTo(this.m,null,r);
    if(x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r,r);
    return r;
  }
  // x/R mod m
  function montRevert(x) {
    var r = nbi();
    x.copyTo(r);
    this.reduce(r);
    return r;
  }
  // x = x/R mod m (HAC 14.32)
  function montReduce(x) {
    while(x.t <= this.mt2)	// pad x so am has enough room later
      x[x.t++] = 0;
    for(var i = 0; i < this.m.t; ++i) {
      // faster way of calculating u0 = x[i]*mp mod DV
      var j = x[i]&0x7fff;
      var u0 = (j*this.mpl+(((j*this.mph+(x[i]>>15)*this.mpl)&this.um)<<15))&x.DM;
      // use am to combine the multiply-shift-add into one call
      j = i+this.m.t;
      x[j] += this.m.am(0,u0,x,i,0,this.m.t);
      // propagate carry
      while(x[j] >= x.DV) { x[j] -= x.DV; x[++j]++; }
    }
    x.clamp();
    x.drShiftTo(this.m.t,x);
    if(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
  }
  // r = "x^2/R mod m"; x != r
  function montSqrTo(x,r) { x.squareTo(r); this.reduce(r); }
  // r = "xy/R mod m"; x,y != r
  function montMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
  Montgomery.prototype.convert = montConvert;
  Montgomery.prototype.revert = montRevert;
  Montgomery.prototype.reduce = montReduce;
  Montgomery.prototype.mulTo = montMulTo;
  Montgomery.prototype.sqrTo = montSqrTo;
  // (protected) true iff this is even
  function bnpIsEven() { return ((this.t>0)?(this[0]&1):this.s) == 0; }
  // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
  function bnpExp(e,z) {
    if(e > 0xffffffff || e < 1) return BigInteger.ONE;
    var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e)-1;
    g.copyTo(r);
    while(--i >= 0) {
      z.sqrTo(r,r2);
      if((e&(1<<i)) > 0) z.mulTo(r2,g,r);
      else { var t = r; r = r2; r2 = t; }
    }
    return z.revert(r);
  }
  // (public) this^e % m, 0 <= e < 2^32
  function bnModPowInt(e,m) {
    var z;
    if(e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
    return this.exp(e,z);
  }
  // protected
  BigInteger.prototype.copyTo = bnpCopyTo;
  BigInteger.prototype.fromInt = bnpFromInt;
  BigInteger.prototype.fromString = bnpFromString;
  BigInteger.prototype.clamp = bnpClamp;
  BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
  BigInteger.prototype.drShiftTo = bnpDRShiftTo;
  BigInteger.prototype.lShiftTo = bnpLShiftTo;
  BigInteger.prototype.rShiftTo = bnpRShiftTo;
  BigInteger.prototype.subTo = bnpSubTo;
  BigInteger.prototype.multiplyTo = bnpMultiplyTo;
  BigInteger.prototype.squareTo = bnpSquareTo;
  BigInteger.prototype.divRemTo = bnpDivRemTo;
  BigInteger.prototype.invDigit = bnpInvDigit;
  BigInteger.prototype.isEven = bnpIsEven;
  BigInteger.prototype.exp = bnpExp;
  // public
  BigInteger.prototype.toString = bnToString;
  BigInteger.prototype.negate = bnNegate;
  BigInteger.prototype.abs = bnAbs;
  BigInteger.prototype.compareTo = bnCompareTo;
  BigInteger.prototype.bitLength = bnBitLength;
  BigInteger.prototype.mod = bnMod;
  BigInteger.prototype.modPowInt = bnModPowInt;
  // "constants"
  BigInteger.ZERO = nbv(0);
  BigInteger.ONE = nbv(1);
  // jsbn2 stuff
  // (protected) convert from radix string
  function bnpFromRadix(s,b) {
    this.fromInt(0);
    if(b == null) b = 10;
    var cs = this.chunkSize(b);
    var d = Math.pow(b,cs), mi = false, j = 0, w = 0;
    for(var i = 0; i < s.length; ++i) {
      var x = intAt(s,i);
      if(x < 0) {
        if(s.charAt(i) == "-" && this.signum() == 0) mi = true;
        continue;
      }
      w = b*w+x;
      if(++j >= cs) {
        this.dMultiply(d);
        this.dAddOffset(w,0);
        j = 0;
        w = 0;
      }
    }
    if(j > 0) {
      this.dMultiply(Math.pow(b,j));
      this.dAddOffset(w,0);
    }
    if(mi) BigInteger.ZERO.subTo(this,this);
  }
  // (protected) return x s.t. r^x < DV
  function bnpChunkSize(r) { return Math.floor(Math.LN2*this.DB/Math.log(r)); }
  // (public) 0 if this == 0, 1 if this > 0
  function bnSigNum() {
    if(this.s < 0) return -1;
    else if(this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
    else return 1;
  }
  // (protected) this *= n, this >= 0, 1 < n < DV
  function bnpDMultiply(n) {
    this[this.t] = this.am(0,n-1,this,0,0,this.t);
    ++this.t;
    this.clamp();
  }
  // (protected) this += n << w words, this >= 0
  function bnpDAddOffset(n,w) {
    if(n == 0) return;
    while(this.t <= w) this[this.t++] = 0;
    this[w] += n;
    while(this[w] >= this.DV) {
      this[w] -= this.DV;
      if(++w >= this.t) this[this.t++] = 0;
      ++this[w];
    }
  }
  // (protected) convert to radix string
  function bnpToRadix(b) {
    if(b == null) b = 10;
    if(this.signum() == 0 || b < 2 || b > 36) return "0";
    var cs = this.chunkSize(b);
    var a = Math.pow(b,cs);
    var d = nbv(a), y = nbi(), z = nbi(), r = "";
    this.divRemTo(d,y,z);
    while(y.signum() > 0) {
      r = (a+z.intValue()).toString(b).substr(1) + r;
      y.divRemTo(d,y,z);
    }
    return z.intValue().toString(b) + r;
  }
  // (public) return value as integer
  function bnIntValue() {
    if(this.s < 0) {
      if(this.t == 1) return this[0]-this.DV;
      else if(this.t == 0) return -1;
    }
    else if(this.t == 1) return this[0];
    else if(this.t == 0) return 0;
    // assumes 16 < DB < 32
    return ((this[1]&((1<<(32-this.DB))-1))<<this.DB)|this[0];
  }
  // (protected) r = this + a
  function bnpAddTo(a,r) {
    var i = 0, c = 0, m = Math.min(a.t,this.t);
    while(i < m) {
      c += this[i]+a[i];
      r[i++] = c&this.DM;
      c >>= this.DB;
    }
    if(a.t < this.t) {
      c += a.s;
      while(i < this.t) {
        c += this[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += this.s;
    }
    else {
      c += this.s;
      while(i < a.t) {
        c += a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += a.s;
    }
    r.s = (c<0)?-1:0;
    if(c > 0) r[i++] = c;
    else if(c < -1) r[i++] = this.DV+c;
    r.t = i;
    r.clamp();
  }
  BigInteger.prototype.fromRadix = bnpFromRadix;
  BigInteger.prototype.chunkSize = bnpChunkSize;
  BigInteger.prototype.signum = bnSigNum;
  BigInteger.prototype.dMultiply = bnpDMultiply;
  BigInteger.prototype.dAddOffset = bnpDAddOffset;
  BigInteger.prototype.toRadix = bnpToRadix;
  BigInteger.prototype.intValue = bnIntValue;
  BigInteger.prototype.addTo = bnpAddTo;
  //======= end jsbn =======
  // Emscripten wrapper
  var Wrapper = {
    abs: function(l, h) {
      var x = new goog.math.Long(l, h);
      var ret;
      if (x.isNegative()) {
        ret = x.negate();
      } else {
        ret = x;
      }
      HEAP32[tempDoublePtr>>2] = ret.low_;
      HEAP32[tempDoublePtr+4>>2] = ret.high_;
    },
    ensureTemps: function() {
      if (Wrapper.ensuredTemps) return;
      Wrapper.ensuredTemps = true;
      Wrapper.two32 = new BigInteger();
      Wrapper.two32.fromString('4294967296', 10);
      Wrapper.two64 = new BigInteger();
      Wrapper.two64.fromString('18446744073709551616', 10);
      Wrapper.temp1 = new BigInteger();
      Wrapper.temp2 = new BigInteger();
    },
    lh2bignum: function(l, h) {
      var a = new BigInteger();
      a.fromString(h.toString(), 10);
      var b = new BigInteger();
      a.multiplyTo(Wrapper.two32, b);
      var c = new BigInteger();
      c.fromString(l.toString(), 10);
      var d = new BigInteger();
      c.addTo(b, d);
      return d;
    },
    stringify: function(l, h, unsigned) {
      var ret = new goog.math.Long(l, h).toString();
      if (unsigned && ret[0] == '-') {
        // unsign slowly using jsbn bignums
        Wrapper.ensureTemps();
        var bignum = new BigInteger();
        bignum.fromString(ret, 10);
        ret = new BigInteger();
        Wrapper.two64.addTo(bignum, ret);
        ret = ret.toString(10);
      }
      return ret;
    },
    fromString: function(str, base, min, max, unsigned) {
      Wrapper.ensureTemps();
      var bignum = new BigInteger();
      bignum.fromString(str, base);
      var bigmin = new BigInteger();
      bigmin.fromString(min, 10);
      var bigmax = new BigInteger();
      bigmax.fromString(max, 10);
      if (unsigned && bignum.compareTo(BigInteger.ZERO) < 0) {
        var temp = new BigInteger();
        bignum.addTo(Wrapper.two64, temp);
        bignum = temp;
      }
      var error = false;
      if (bignum.compareTo(bigmin) < 0) {
        bignum = bigmin;
        error = true;
      } else if (bignum.compareTo(bigmax) > 0) {
        bignum = bigmax;
        error = true;
      }
      var ret = goog.math.Long.fromString(bignum.toString()); // min-max checks should have clamped this to a range goog.math.Long can handle well
      HEAP32[tempDoublePtr>>2] = ret.low_;
      HEAP32[tempDoublePtr+4>>2] = ret.high_;
      if (error) throw 'range error';
    }
  };
  return Wrapper;
})();
//======= end closure i64 code =======
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN3WTF6VectorINSt3__14pairIPFvRN7WebCore4NodeEjENS2_INS_6RefPtrIS4_EEjEEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore13ContainerNode19notifyChildInsertedERNS_4NodeENS0_17ChildChangeSourceE","__ZN7WebCore4Node20beginParsingChildrenEv","__ZNK7WebCore4Node23canContainRangeEndPointEv","__ZN7WebCore13ContainerNode26suspendPostAttachCallbacksERNS_8DocumentE","__ZNK7WebCore13ContainerNode18getUpperLeftCornerERNS_10FloatPointE","__ZN7WebCore26ChildNodeInsertionNotifier6notifyERNS_4NodeE","__ZN7WebCore17NodeListsNodeData22addCacheWithAtomicNameINS_13RadioNodeListENS_13ContainerNodeEEEN3WTF10PassRefPtrIT_EERT0_NS_12LiveNodeList4TypeERKNS4_12AtomicStringE","_memcpy","__ZN7WebCoreL37collectChildrenAndRemoveFromOldParentERNS_4NodeERN3WTF6VectorINS2_3RefIS0_EELj11ENS2_15CrashOnOverflowEEERi","__ZNK7WebCore4Node14customPseudoIdEv","__ZNK7WebCore4Node21isMediaControlElementEv","__ZNK7WebCore13ContainerNode9childNodeEj","__ZNK7WebCore4Node19isFrameOwnerElementEv","__ZN3WTF6VectorINS_3RefIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_PNS1_11TagNodeListEEENS_24KeyValuePairKeyExtractorIS6_EENS1_17QualifiedNameHashENS_7HashMapIS2_S5_S9_NS_10HashTraitsIS2_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS2_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS2_S6_S8_S9_SF_SC_EEEEOT0_OT1_","__ZNK7WebCore4Node27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE","__ZN7WebCore13ContainerNode31postAttachCallbacksAreSuspendedEv","__ZNK7WebCore4Node20isInsertionPointNodeEv","__ZNK7WebCore13ContainerNode11boundingBoxEv","__ZN7WebCore13ContainerNodeD2Ev","__ZN7WebCore13ContainerNode13removeBetweenEPNS_4NodeES2_RS1_","__ZN7WebCore13ContainerNode18notifyChildRemovedERNS_4NodeEPS1_S3_NS0_17ChildChangeSourceE","__ZNK7WebCore4Node22scriptExecutionContextEv","__ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore12LiveNodeListEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E6rehashEiPS9_","__ZN7WebCore13ContainerNode25setAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_","__ZN7WebCore17NodeListsNodeData22addCacheWithAtomicNameINS_12NameNodeListENS_13ContainerNodeEEEN3WTF10PassRefPtrIT_EERT0_NS_12LiveNodeList4TypeERKNS4_12AtomicStringE","__ZNK7WebCore13ContainerNode25childShouldCreateRendererERKNS_4NodeE","__ZN7WebCore17NodeListsNodeData22addCacheWithAtomicNameINS_15HTMLTagNodeListENS_13ContainerNodeEEEN3WTF10PassRefPtrIT_EERT0_NS_12LiveNodeList4TypeERKNS4_12AtomicStringE","__ZN7WebCore13ContainerNode27dispatchPostAttachCallbacksEv","__ZN7WebCore13ContainerNode12insertBeforeEN3WTF10PassRefPtrINS_4NodeEEEPS3_Ri","__ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_PNS1_11TagNodeListEEENS_24KeyValuePairKeyExtractorIS6_EENS1_17QualifiedNameHashENS_7HashMapIS2_S5_S9_NS_10HashTraitsIS2_EENSB_IS5_EEE18KeyValuePairTraitsESC_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EES2_EENSt3__14pairIPS6_bEERKT0_","__ZN7WebCore17NodeListsNodeData22addCacheWithAtomicNameINS_11TagNodeListENS_13ContainerNodeEEEN3WTF10PassRefPtrIT_EERT0_NS_12LiveNodeList4TypeERKNS4_12AtomicStringE","__ZN7WebCore13ContainerNode20getElementsByTagNameERKN3WTF12AtomicStringE","__ZN7WebCore13ContainerNode16querySelectorAllERKN3WTF12AtomicStringERi","__ZN7WebCore13ContainerNode18parserInsertBeforeEN3WTF10PassRefPtrINS_4NodeEEEPS3_","__ZN7WebCore17NodeListsNodeData25addCacheWithQualifiedNameERNS_13ContainerNodeERKN3WTF12AtomicStringES6_","__ZN7WebCore13ContainerNode13querySelectorERKN3WTF12AtomicStringERi","__ZN7WebCoreL35cloneChildNodesAvoidingDeleteButtonEPNS_13ContainerNodeES1_PNS_11HTMLElementE","__ZN7WebCore17NodeListsNodeData16addCacheWithNameINS_13ClassNodeListEEEN3WTF10PassRefPtrIT_EERNS_13ContainerNodeENS_12LiveNodeList4TypeERKNS3_6StringE","__ZN7WebCore13ContainerNode24updateTreeAfterInsertionERNS_4NodeE","__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb","__ZNK7WebCore13ContainerNode19getLowerRightCornerERNS_10FloatPointE","__ZN3WTF9HashTableINSt3__14pairIhNS_6StringEEENS_12KeyValuePairIS4_PN7WebCore12LiveNodeListEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E3addINS_17HashMapTranslatorISK_SE_EES4_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SE_SK_SH_EEEEOT0_OT1_","__ZN7WebCore26ChildNodeInsertionNotifier30notifyNodeInsertedIntoDocumentERNS_4NodeE","__ZN7WebCore13ContainerNode12replaceChildEN3WTF10PassRefPtrINS_4NodeEEEPS3_Ri","__ZN7WebCore22ChildListMutationScopeC2ERNS_13ContainerNodeE","__ZN7WebCoreL26dispatchChildRemovalEventsERNS_4NodeE","__ZNK7WebCore4Node16nonRendererStyleEv","__ZN7WebCore13ContainerNode22getElementsByClassNameERKN3WTF6StringE","__ZNK7WebCore4Node15isPluginElementEv","__ZN7WebCore13ContainerNode26disconnectDescendantFramesEv","__ZN7WebCore7Private28addChildNodesToDeletionQueueINS_4NodeENS_13ContainerNodeEEEvRPT_S6_RT0_","__ZN7WebCore13ContainerNode17getElementsByNameERKN3WTF6StringE","__ZN7WebCore4Node24startLoadingDynamicSheetEv","__ZN7WebCore17NodeListsNodeDataD2Ev","_memset","__ZN7WebCore13ContainerNode17parserRemoveChildERNS_4NodeE","__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE","__ZNK7WebCore13ContainerNode14childNodeCountEv","__ZN7WebCore4Node21finishParsingChildrenEv","__ZN3WTF9HashTableIN7WebCore13QualifiedNameENS_12KeyValuePairIS2_PNS1_11TagNodeListEEENS_24KeyValuePairKeyExtractorIS6_EENS1_17QualifiedNameHashENS_7HashMapIS2_S5_S9_NS_10HashTraitsIS2_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_","__ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE","__ZN7WebCore13ContainerNodeD0Ev","__ZN7WebCore4Node11sheetLoadedEv","__ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi","__ZN3WTF9HashTableINSt3__14pairIhNS_6StringEEENS_12KeyValuePairIS4_PN7WebCore12LiveNodeListEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E16lookupForWritingINS_22IdentityHashTranslatorISE_EES4_EENS2_IPS9_bEERKT0_","__ZN3WTF9HashTableINSt3__14pairIhNS_6StringEEENS_12KeyValuePairIS4_PN7WebCore12LiveNodeListEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E6rehashEiPS9_","__ZN3WTF6VectorINS_3RefIN7WebCore4NodeEEELj11ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN3WTF9HashTableINSt3__14pairIhNS_12AtomicStringEEENS_12KeyValuePairIS4_PN7WebCore12LiveNodeListEEENS_24KeyValuePairKeyExtractorIS9_EENS6_17NodeListsNodeData25NodeListCacheMapEntryHashIS3_EENS_7HashMapIS4_S8_SE_NS_10HashTraitsIS4_EENSG_IS8_EEE18KeyValuePairTraitsESH_E3addINS_17HashMapTranslatorISK_SE_EES4_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SE_SK_SH_EEEEOT0_OT1_","__ZN7WebCore13ContainerNode13radioNodeListERKN3WTF12AtomicStringE","__ZN7WebCore13ContainerNode18insertBeforeCommonERNS_4NodeES2_","__ZN7WebCore13ContainerNode15childrenChangedERKNS0_11ChildChangeE","__ZN7WebCore13ContainerNode22removeDetachedChildrenEv","__ZNK7WebCore4Node19isCharacterDataNodeEv","__ZN7WebCoreL16checkAcceptChildEPNS_13ContainerNodeEPNS_4NodeES3_","__ZN7WebCore13ContainerNode15cloneChildNodesEPS0_","__ZN7WebCore13ContainerNode19takeAllChildrenFromEPS0_","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore13ContainerNode11removeChildEPNS_4NodeERi","__ZN7WebCore13ContainerNode25resumePostAttachCallbacksERNS_8DocumentE","__ZNK7WebCore4Node15isMediaControlsEv","__ZN7WebCore13ContainerNode22getElementsByTagNameNSERKN3WTF12AtomicStringES4_","__ZNK7WebCore4Node15isAttributeNodeEv","__ZNK7WebCore4Node16childTypeAllowedENS0_8NodeTypeE","__ZN7WebCore13ContainerNode23queuePostAttachCallbackEPFvRNS_4NodeEjES2_j","__ZN7WebCore13ContainerNode14removeChildrenEv","_i64Add","_i64Subtract","_bitshift64Shl","_bitshift64Lshr","_bitshift64Ashr","_llvm_ctlz_i32","_llvm_cttz_i32"]

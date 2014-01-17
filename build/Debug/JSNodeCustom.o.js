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
H_BASE = parentModule["_malloc"](48 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 48;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore6JSText6s_infoE=env.__ZN7WebCore6JSText6s_infoE|0;
  var __ZN7WebCore9HTMLNames6imgTagE=env.__ZN7WebCore9HTMLNames6imgTagE|0;
  var __ZN7WebCore14JSCDATASection6s_infoE=env.__ZN7WebCore14JSCDATASection6s_infoE|0;
  var __ZN7WebCore6JSAttr6s_infoE=env.__ZN7WebCore6JSAttr6s_infoE|0;
  var __ZN7WebCore10JSNotation6s_infoE=env.__ZN7WebCore10JSNotation6s_infoE|0;
  var __ZN7WebCore23JSProcessingInstruction6s_infoE=env.__ZN7WebCore23JSProcessingInstruction6s_infoE|0;
  var __ZN7WebCore17JSEntityReference6s_infoE=env.__ZN7WebCore17JSEntityReference6s_infoE|0;
  var __ZN7WebCore9JSComment6s_infoE=env.__ZN7WebCore9JSComment6s_infoE|0;
  var __ZN7WebCore8JSEntity6s_infoE=env.__ZN7WebCore8JSEntity6s_infoE|0;
  var __ZN7WebCore9JSElement6s_infoE=env.__ZN7WebCore9JSElement6s_infoE|0;
  var __ZN7WebCore18JSDocumentFragment6s_infoE=env.__ZN7WebCore18JSDocumentFragment6s_infoE|0;
  var __ZN7WebCore13JSHTMLElement6s_infoE=env.__ZN7WebCore13JSHTMLElement6s_infoE|0;
  var __ZN7WebCore14JSDocumentType6s_infoE=env.__ZN7WebCore14JSDocumentType6s_infoE|0;
  var __ZN7WebCore6JSNode6s_infoE=env.__ZN7WebCore6JSNode6s_infoE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZZN7WebCore12wrapperOwnerERNS_15DOMWrapperWorldEPNS_4NodeEE11jsNodeOwner=(H_BASE+40)|0;
  var __ZGVZN7WebCore12wrapperOwnerERNS_15DOMWrapperWorldEPNS_4NodeEE11jsNodeOwner=(H_BASE+48)|0;
  var __ZTVN7WebCore11JSNodeOwnerE=(H_BASE+8)|0;
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
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore16toJSNewlyCreatedEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_4NodeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
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
 if ((i4 | 0) == 0) {
  HEAP32[i1 + 4 >> 2] = -3;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 L5 : do {
  switch (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 76 >> 2] & 1](i4) | 0) {
  case 4:
   {
    i20 = i4;
    i21 = i2 + 16 | 0;
    i22 = __ZN7WebCore15getDOMStructureINS_14JSCDATASectionEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i21 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
    i23 = i12 | 0;
    HEAP32[i23 >> 2] = i20;
    i24 = i4 + 8 | 0;
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
    i24 = __ZN7WebCore14JSCDATASection6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_12CDATASectionEEE(i22, i3, i12) | 0;
    i22 = HEAP32[i23 >> 2] | 0;
    do {
     if ((i22 | 0) != 0) {
      i23 = i22 + 8 | 0;
      i25 = i23 | 0;
      i26 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
      HEAP32[i25 >> 2] = i26;
      if ((i26 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore12cacheWrapperINS_12CDATASectionENS_14JSCDATASectionEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i21 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i20, i24);
    i27 = i24 | 0;
    break;
   }
  case 6:
   {
    i22 = i4;
    i23 = i2 + 16 | 0;
    i26 = __ZN7WebCore15getDOMStructureINS_8JSEntityEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i23 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
    i25 = i11 | 0;
    HEAP32[i25 >> 2] = i22;
    i28 = i4 + 8 | 0;
    HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
    i28 = __ZN7WebCore8JSEntity6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_6EntityEEE(i26, i3, i11) | 0;
    i26 = HEAP32[i25 >> 2] | 0;
    do {
     if ((i26 | 0) != 0) {
      i25 = i26 + 8 | 0;
      i29 = i25 | 0;
      i30 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
      HEAP32[i29 >> 2] = i30;
      if ((i30 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore12cacheWrapperINS_6EntityENS_8JSEntityEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i23 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i22, i28);
    i27 = i28 | 0;
    break;
   }
  case 1:
   {
    i26 = HEAP32[i4 + 12 >> 2] | 0;
    if ((i26 & 16 | 0) != 0) {
     i24 = i18 | 0;
     HEAP32[i24 >> 2] = i4;
     i20 = i4 + 8 | 0;
     HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
     i20 = __ZN7WebCore19createJSHTMLWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i2, i3, i18) | 0;
     i21 = HEAP32[i24 >> 2] | 0;
     if ((i21 | 0) == 0) {
      i27 = i20;
      break L5;
     }
     i24 = i21 + 8 | 0;
     i21 = i24 | 0;
     i25 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     HEAP32[i21 >> 2] = i25;
     if ((i25 | 0) >= 1) {
      i27 = i20;
      break L5;
     }
     if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
      i27 = i20;
      break L5;
     }
     __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
     i27 = i20;
     break L5;
    }
    if ((i26 & 32 | 0) != 0) {
     i26 = i19 | 0;
     HEAP32[i26 >> 2] = i4;
     i20 = i4 + 8 | 0;
     HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
     i20 = __ZN7WebCore18createJSSVGWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i2, i3, i19) | 0;
     i24 = HEAP32[i26 >> 2] | 0;
     if ((i24 | 0) == 0) {
      i27 = i20;
      break L5;
     }
     i26 = i24 + 8 | 0;
     i24 = i26 | 0;
     i25 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
     HEAP32[i24 >> 2] = i25;
     if ((i25 | 0) >= 1) {
      i27 = i20;
      break L5;
     }
     if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
      i27 = i20;
      break L5;
     }
     __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
     i27 = i20;
     break L5;
    }
    i20 = i4;
    i26 = i2 + 16 | 0;
    i25 = __ZN7WebCore15getDOMStructureINS_9JSElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i26 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
    i24 = i15 | 0;
    HEAP32[i24 >> 2] = i20;
    i21 = i4 + 8 | 0;
    HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
    i21 = __ZN7WebCore9JSElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_7ElementEEE(i25, i3, i15) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    do {
     if ((i25 | 0) != 0) {
      i24 = i25 + 8 | 0;
      i30 = i24 | 0;
      i29 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
      HEAP32[i30 >> 2] = i29;
      if ((i29 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore12cacheWrapperINS_7ElementENS_9JSElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i26 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i20, i21);
    i27 = i21 | 0;
    break;
   }
  case 7:
   {
    i25 = i4;
    i28 = i2 + 16 | 0;
    i22 = __ZN7WebCore15getDOMStructureINS_23JSProcessingInstructionEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i28 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
    i23 = i10 | 0;
    HEAP32[i23 >> 2] = i25;
    i24 = i4 + 8 | 0;
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
    i24 = __ZN7WebCore23JSProcessingInstruction6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_21ProcessingInstructionEEE(i22, i3, i10) | 0;
    i22 = HEAP32[i23 >> 2] | 0;
    do {
     if ((i22 | 0) != 0) {
      i23 = i22 + 8 | 0;
      i29 = i23 | 0;
      i30 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
      HEAP32[i29 >> 2] = i30;
      if ((i30 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore12cacheWrapperINS_21ProcessingInstructionENS_23JSProcessingInstructionEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i28 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i25, i24);
    i27 = i24 | 0;
    break;
   }
  case 8:
   {
    i22 = i4;
    i21 = i2 + 16 | 0;
    i20 = __ZN7WebCore15getDOMStructureINS_9JSCommentEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i21 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
    i26 = i9 | 0;
    HEAP32[i26 >> 2] = i22;
    i23 = i4 + 8 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
    i23 = __ZN7WebCore9JSComment6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_7CommentEEE(i20, i3, i9) | 0;
    i20 = HEAP32[i26 >> 2] | 0;
    do {
     if ((i20 | 0) != 0) {
      i26 = i20 + 8 | 0;
      i30 = i26 | 0;
      i29 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
      HEAP32[i30 >> 2] = i29;
      if ((i29 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore12cacheWrapperINS_7CommentENS_9JSCommentEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i21 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i22, i23);
    i27 = i23 | 0;
    break;
   }
  case 9:
   {
    __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_8DocumentE(i1, i2, i3, i4);
    STACKTOP = i5;
    return;
   }
  case 10:
   {
    i20 = i4;
    i24 = i2 + 16 | 0;
    i25 = __ZN7WebCore15getDOMStructureINS_14JSDocumentTypeEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i24 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
    i28 = i8 | 0;
    HEAP32[i28 >> 2] = i20;
    i26 = i4 + 8 | 0;
    HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
    i26 = __ZN7WebCore14JSDocumentType6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_12DocumentTypeEEE(i25, i3, i8) | 0;
    i25 = HEAP32[i28 >> 2] | 0;
    do {
     if ((i25 | 0) != 0) {
      i28 = i25 + 8 | 0;
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
    __ZN7WebCore12cacheWrapperINS_12DocumentTypeENS_14JSDocumentTypeEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i24 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i20, i26);
    i27 = i26 | 0;
    break;
   }
  case 12:
   {
    i25 = i4;
    i23 = i2 + 16 | 0;
    i22 = __ZN7WebCore15getDOMStructureINS_10JSNotationEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i23 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
    i21 = i7 | 0;
    HEAP32[i21 >> 2] = i25;
    i28 = i4 + 8 | 0;
    HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
    i28 = __ZN7WebCore10JSNotation6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_8NotationEEE(i22, i3, i7) | 0;
    i22 = HEAP32[i21 >> 2] | 0;
    do {
     if ((i22 | 0) != 0) {
      i21 = i22 + 8 | 0;
      i30 = i21 | 0;
      i29 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
      HEAP32[i30 >> 2] = i29;
      if ((i29 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore12cacheWrapperINS_8NotationENS_10JSNotationEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i23 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i25, i28);
    i27 = i28 | 0;
    break;
   }
  case 11:
   {
    i22 = i4;
    i26 = i2 + 16 | 0;
    i20 = __ZN7WebCore15getDOMStructureINS_18JSDocumentFragmentEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i26 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
    i24 = i6 | 0;
    HEAP32[i24 >> 2] = i22;
    i21 = i4 + 8 | 0;
    HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
    i21 = __ZN7WebCore18JSDocumentFragment6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16DocumentFragmentEEE(i20, i3, i6) | 0;
    i20 = HEAP32[i24 >> 2] | 0;
    do {
     if ((i20 | 0) != 0) {
      i24 = i20 + 8 | 0;
      i29 = i24 | 0;
      i30 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
      HEAP32[i29 >> 2] = i30;
      if ((i30 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore12cacheWrapperINS_16DocumentFragmentENS_18JSDocumentFragmentEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i26 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i22, i21);
    i27 = i21 | 0;
    break;
   }
  case 5:
   {
    i20 = i4;
    i28 = i2 + 16 | 0;
    i25 = __ZN7WebCore15getDOMStructureINS_17JSEntityReferenceEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i28 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
    i23 = i16 | 0;
    HEAP32[i23 >> 2] = i20;
    i24 = i4 + 8 | 0;
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
    i24 = __ZN7WebCore17JSEntityReference6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15EntityReferenceEEE(i25, i3, i16) | 0;
    i25 = HEAP32[i23 >> 2] | 0;
    do {
     if ((i25 | 0) != 0) {
      i23 = i25 + 8 | 0;
      i30 = i23 | 0;
      i29 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
      HEAP32[i30 >> 2] = i29;
      if ((i29 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore12cacheWrapperINS_15EntityReferenceENS_17JSEntityReferenceEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i28 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i20, i24);
    i27 = i24 | 0;
    break;
   }
  case 2:
   {
    i25 = i4;
    i21 = i2 + 16 | 0;
    i22 = __ZN7WebCore15getDOMStructureINS_6JSAttrEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i21 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
    i26 = i14 | 0;
    HEAP32[i26 >> 2] = i25;
    i23 = i4 + 8 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
    i23 = __ZN7WebCore6JSAttr6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_4AttrEEE(i22, i3, i14) | 0;
    i22 = HEAP32[i26 >> 2] | 0;
    do {
     if ((i22 | 0) != 0) {
      i26 = i22 + 8 | 0;
      i29 = i26 | 0;
      i30 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
      HEAP32[i29 >> 2] = i30;
      if ((i30 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore12cacheWrapperINS_4AttrENS_6JSAttrEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i21 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i25, i23);
    i27 = i23 | 0;
    break;
   }
  case 3:
   {
    i22 = i4;
    i24 = i2 + 16 | 0;
    i20 = __ZN7WebCore15getDOMStructureINS_6JSTextEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i24 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
    i28 = i13 | 0;
    HEAP32[i28 >> 2] = i22;
    i26 = i4 + 8 | 0;
    HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
    i26 = __ZN7WebCore6JSText6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_4TextEEE(i20, i3, i13) | 0;
    i20 = HEAP32[i28 >> 2] | 0;
    do {
     if ((i20 | 0) != 0) {
      i28 = i20 + 8 | 0;
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
    __ZN7WebCore12cacheWrapperINS_4TextENS_6JSTextEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i24 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i22, i26);
    i27 = i26 | 0;
    break;
   }
  default:
   {
    i20 = i2 + 16 | 0;
    i23 = __ZN7WebCore15getDOMStructureINS_6JSNodeEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i20 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
    i25 = i17 | 0;
    HEAP32[i25 >> 2] = i4;
    i21 = i4 + 8 | 0;
    HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
    i21 = __ZN7WebCore6JSNode6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_4NodeEEE(i23, i3, i17) | 0;
    i23 = HEAP32[i25 >> 2] | 0;
    do {
     if ((i23 | 0) != 0) {
      i25 = i23 + 8 | 0;
      i28 = i25 | 0;
      i29 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
      HEAP32[i28 >> 2] = i29;
      if ((i29 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore12cacheWrapperINS_4NodeENS_6JSNodeEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i20 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i4, i21);
    i27 = i21 | 0;
   }
  }
 } while (0);
 HEAP32[i1 + 4 >> 2] = (i27 | 0) == 0 ? -6 : -5;
 HEAP32[i1 >> 2] = i27;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore13createWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_4NodeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
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
 L1 : do {
  switch (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 76 >> 2] & 1](i4) | 0) {
  case 2:
   {
    i20 = i4;
    i21 = i2 + 16 | 0;
    i22 = __ZN7WebCore15getDOMStructureINS_6JSAttrEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i21 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
    i23 = i14 | 0;
    HEAP32[i23 >> 2] = i20;
    i24 = i4 + 8 | 0;
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
    i24 = __ZN7WebCore6JSAttr6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_4AttrEEE(i22, i3, i14) | 0;
    i22 = HEAP32[i23 >> 2] | 0;
    do {
     if ((i22 | 0) != 0) {
      i23 = i22 + 8 | 0;
      i25 = i23 | 0;
      i26 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
      HEAP32[i25 >> 2] = i26;
      if ((i26 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore12cacheWrapperINS_4AttrENS_6JSAttrEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i21 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i20, i24);
    i27 = i24 | 0;
    break;
   }
  case 3:
   {
    i22 = i4;
    i23 = i2 + 16 | 0;
    i26 = __ZN7WebCore15getDOMStructureINS_6JSTextEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i23 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
    i25 = i13 | 0;
    HEAP32[i25 >> 2] = i22;
    i28 = i4 + 8 | 0;
    HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
    i28 = __ZN7WebCore6JSText6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_4TextEEE(i26, i3, i13) | 0;
    i26 = HEAP32[i25 >> 2] | 0;
    do {
     if ((i26 | 0) != 0) {
      i25 = i26 + 8 | 0;
      i29 = i25 | 0;
      i30 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
      HEAP32[i29 >> 2] = i30;
      if ((i30 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore12cacheWrapperINS_4TextENS_6JSTextEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i23 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i22, i28);
    i27 = i28 | 0;
    break;
   }
  case 1:
   {
    i26 = HEAP32[i4 + 12 >> 2] | 0;
    if ((i26 & 16 | 0) != 0) {
     i24 = i18 | 0;
     HEAP32[i24 >> 2] = i4;
     if ((i4 | 0) != 0) {
      i20 = i4 + 8 | 0;
      HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
     }
     i20 = __ZN7WebCore19createJSHTMLWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_11HTMLElementEEE(i2, i3, i18) | 0;
     i21 = HEAP32[i24 >> 2] | 0;
     if ((i21 | 0) == 0) {
      i27 = i20;
      break L1;
     }
     i24 = i21 + 8 | 0;
     i21 = i24 | 0;
     i25 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     HEAP32[i21 >> 2] = i25;
     if ((i25 | 0) >= 1) {
      i27 = i20;
      break L1;
     }
     if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
      i27 = i20;
      break L1;
     }
     __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
     i27 = i20;
     break L1;
    }
    if ((i26 & 32 | 0) != 0) {
     i26 = i19 | 0;
     HEAP32[i26 >> 2] = i4;
     if ((i4 | 0) != 0) {
      i20 = i4 + 8 | 0;
      HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
     }
     i20 = __ZN7WebCore18createJSSVGWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGElementEEE(i2, i3, i19) | 0;
     i24 = HEAP32[i26 >> 2] | 0;
     if ((i24 | 0) == 0) {
      i27 = i20;
      break L1;
     }
     i26 = i24 + 8 | 0;
     i24 = i26 | 0;
     i25 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
     HEAP32[i24 >> 2] = i25;
     if ((i25 | 0) >= 1) {
      i27 = i20;
      break L1;
     }
     if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
      i27 = i20;
      break L1;
     }
     __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
     i27 = i20;
     break L1;
    }
    i20 = i4;
    i26 = i2 + 16 | 0;
    i25 = __ZN7WebCore15getDOMStructureINS_9JSElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i26 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
    i24 = i15 | 0;
    HEAP32[i24 >> 2] = i20;
    if ((i4 | 0) != 0) {
     i21 = i4 + 8 | 0;
     HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
    }
    i21 = __ZN7WebCore9JSElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_7ElementEEE(i25, i3, i15) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    do {
     if ((i25 | 0) != 0) {
      i24 = i25 + 8 | 0;
      i30 = i24 | 0;
      i29 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
      HEAP32[i30 >> 2] = i29;
      if ((i29 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore12cacheWrapperINS_7ElementENS_9JSElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i26 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i20, i21);
    i27 = i21 | 0;
    break;
   }
  case 4:
   {
    i25 = i4;
    i28 = i2 + 16 | 0;
    i22 = __ZN7WebCore15getDOMStructureINS_14JSCDATASectionEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i28 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
    i23 = i12 | 0;
    HEAP32[i23 >> 2] = i25;
    i24 = i4 + 8 | 0;
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
    i24 = __ZN7WebCore14JSCDATASection6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_12CDATASectionEEE(i22, i3, i12) | 0;
    i22 = HEAP32[i23 >> 2] | 0;
    do {
     if ((i22 | 0) != 0) {
      i23 = i22 + 8 | 0;
      i29 = i23 | 0;
      i30 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
      HEAP32[i29 >> 2] = i30;
      if ((i30 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore12cacheWrapperINS_12CDATASectionENS_14JSCDATASectionEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i28 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i25, i24);
    i27 = i24 | 0;
    break;
   }
  case 6:
   {
    i22 = i4;
    i21 = i2 + 16 | 0;
    i20 = __ZN7WebCore15getDOMStructureINS_8JSEntityEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i21 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
    i26 = i11 | 0;
    HEAP32[i26 >> 2] = i22;
    i23 = i4 + 8 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
    i23 = __ZN7WebCore8JSEntity6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_6EntityEEE(i20, i3, i11) | 0;
    i20 = HEAP32[i26 >> 2] | 0;
    do {
     if ((i20 | 0) != 0) {
      i26 = i20 + 8 | 0;
      i30 = i26 | 0;
      i29 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
      HEAP32[i30 >> 2] = i29;
      if ((i29 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore12cacheWrapperINS_6EntityENS_8JSEntityEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i21 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i22, i23);
    i27 = i23 | 0;
    break;
   }
  case 7:
   {
    i20 = i4;
    i24 = i2 + 16 | 0;
    i25 = __ZN7WebCore15getDOMStructureINS_23JSProcessingInstructionEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i24 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
    i28 = i10 | 0;
    HEAP32[i28 >> 2] = i20;
    i26 = i4 + 8 | 0;
    HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
    i26 = __ZN7WebCore23JSProcessingInstruction6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_21ProcessingInstructionEEE(i25, i3, i10) | 0;
    i25 = HEAP32[i28 >> 2] | 0;
    do {
     if ((i25 | 0) != 0) {
      i28 = i25 + 8 | 0;
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
    __ZN7WebCore12cacheWrapperINS_21ProcessingInstructionENS_23JSProcessingInstructionEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i24 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i20, i26);
    i27 = i26 | 0;
    break;
   }
  case 8:
   {
    i25 = i4;
    i23 = i2 + 16 | 0;
    i22 = __ZN7WebCore15getDOMStructureINS_9JSCommentEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i23 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
    i21 = i9 | 0;
    HEAP32[i21 >> 2] = i25;
    i28 = i4 + 8 | 0;
    HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
    i28 = __ZN7WebCore9JSComment6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_7CommentEEE(i22, i3, i9) | 0;
    i22 = HEAP32[i21 >> 2] | 0;
    do {
     if ((i22 | 0) != 0) {
      i21 = i22 + 8 | 0;
      i30 = i21 | 0;
      i29 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
      HEAP32[i30 >> 2] = i29;
      if ((i29 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore12cacheWrapperINS_7CommentENS_9JSCommentEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i23 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i25, i28);
    i27 = i28 | 0;
    break;
   }
  case 9:
   {
    __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_8DocumentE(i1, i2, i3, i4);
    STACKTOP = i5;
    return;
   }
  case 10:
   {
    i22 = i4;
    i26 = i2 + 16 | 0;
    i20 = __ZN7WebCore15getDOMStructureINS_14JSDocumentTypeEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i26 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
    i24 = i8 | 0;
    HEAP32[i24 >> 2] = i22;
    i21 = i4 + 8 | 0;
    HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
    i21 = __ZN7WebCore14JSDocumentType6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_12DocumentTypeEEE(i20, i3, i8) | 0;
    i20 = HEAP32[i24 >> 2] | 0;
    do {
     if ((i20 | 0) != 0) {
      i24 = i20 + 8 | 0;
      i29 = i24 | 0;
      i30 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
      HEAP32[i29 >> 2] = i30;
      if ((i30 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore12cacheWrapperINS_12DocumentTypeENS_14JSDocumentTypeEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i26 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i22, i21);
    i27 = i21 | 0;
    break;
   }
  case 12:
   {
    i20 = i4;
    i28 = i2 + 16 | 0;
    i25 = __ZN7WebCore15getDOMStructureINS_10JSNotationEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i28 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
    i23 = i7 | 0;
    HEAP32[i23 >> 2] = i20;
    i24 = i4 + 8 | 0;
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
    i24 = __ZN7WebCore10JSNotation6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_8NotationEEE(i25, i3, i7) | 0;
    i25 = HEAP32[i23 >> 2] | 0;
    do {
     if ((i25 | 0) != 0) {
      i23 = i25 + 8 | 0;
      i30 = i23 | 0;
      i29 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
      HEAP32[i30 >> 2] = i29;
      if ((i29 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore12cacheWrapperINS_8NotationENS_10JSNotationEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i28 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i20, i24);
    i27 = i24 | 0;
    break;
   }
  case 11:
   {
    i25 = i4;
    i21 = i2 + 16 | 0;
    i22 = __ZN7WebCore15getDOMStructureINS_18JSDocumentFragmentEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i21 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
    i26 = i6 | 0;
    HEAP32[i26 >> 2] = i25;
    i23 = i4 + 8 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
    i23 = __ZN7WebCore18JSDocumentFragment6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16DocumentFragmentEEE(i22, i3, i6) | 0;
    i22 = HEAP32[i26 >> 2] | 0;
    do {
     if ((i22 | 0) != 0) {
      i26 = i22 + 8 | 0;
      i29 = i26 | 0;
      i30 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
      HEAP32[i29 >> 2] = i30;
      if ((i30 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore12cacheWrapperINS_16DocumentFragmentENS_18JSDocumentFragmentEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i21 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i25, i23);
    i27 = i23 | 0;
    break;
   }
  case 5:
   {
    i22 = i4;
    i24 = i2 + 16 | 0;
    i20 = __ZN7WebCore15getDOMStructureINS_17JSEntityReferenceEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i24 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
    i28 = i16 | 0;
    HEAP32[i28 >> 2] = i22;
    i26 = i4 + 8 | 0;
    HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
    i26 = __ZN7WebCore17JSEntityReference6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15EntityReferenceEEE(i20, i3, i16) | 0;
    i20 = HEAP32[i28 >> 2] | 0;
    do {
     if ((i20 | 0) != 0) {
      i28 = i20 + 8 | 0;
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
    __ZN7WebCore12cacheWrapperINS_15EntityReferenceENS_17JSEntityReferenceEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i24 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i22, i26);
    i27 = i26 | 0;
    break;
   }
  default:
   {
    i20 = i2 + 16 | 0;
    i23 = __ZN7WebCore15getDOMStructureINS_6JSNodeEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i20 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
    i25 = i17 | 0;
    HEAP32[i25 >> 2] = i4;
    i21 = i4 + 8 | 0;
    HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
    i21 = __ZN7WebCore6JSNode6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_4NodeEEE(i23, i3, i17) | 0;
    i23 = HEAP32[i25 >> 2] | 0;
    do {
     if ((i23 | 0) != 0) {
      i25 = i23 + 8 | 0;
      i28 = i25 | 0;
      i29 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
      HEAP32[i28 >> 2] = i29;
      if ((i29 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore12cacheWrapperINS_4NodeENS_6JSNodeEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i20 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i4, i21);
    i27 = i21 | 0;
   }
  }
 } while (0);
 HEAP32[i1 + 4 >> 2] = (i27 | 0) == 0 ? -6 : -5;
 HEAP32[i1 >> 2] = i27;
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i9 | 0) == 0) {
   i10 = 8;
  } else {
   i11 = i9 << 1;
   i10 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i11 | 0) ? i9 : i11;
  }
  __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i10, 0) | 0;
  i12 = HEAP32[i7 >> 2] | 0;
 } else {
  i12 = i8;
 }
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 i11 = i10;
 i9 = i11 + ~(i11 << 15) | 0;
 i11 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i11 >>> 6 ^ i11;
 i11 = i9 + ~(i9 << 11) | 0;
 i9 = i11 >>> 16 ^ i11;
 i11 = i9 & i8;
 i13 = i12 + (i11 << 3) | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i15 = i13;
   i16 = i10;
  } else {
   i17 = (i9 >>> 23) + ~i9 | 0;
   i18 = i17 << 12 ^ i17;
   i17 = i18 >>> 7 ^ i18;
   i18 = i17 << 2 ^ i17;
   i17 = i18 >>> 20 ^ i18 | 1;
   i18 = 0;
   i19 = 0;
   i20 = i11;
   i21 = i13;
   i22 = i14;
   while (1) {
    if ((i22 | 0) == (i10 | 0)) {
     i23 = 8;
     break;
    }
    i24 = (i22 | 0) == -1 ? i21 : i19;
    i25 = (i18 | 0) == 0 ? i17 : i18;
    i26 = i25 + i20 & i8;
    i27 = i12 + (i26 << 3) | 0;
    i28 = HEAP32[i27 >> 2] | 0;
    if ((i28 | 0) == 0) {
     i23 = 10;
     break;
    } else {
     i18 = i25;
     i19 = i24;
     i20 = i26;
     i21 = i27;
     i22 = i28;
    }
   }
   if ((i23 | 0) == 8) {
    i22 = i12 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i20 = i1;
    HEAP32[i20 >> 2] = i21;
    HEAP32[i20 + 4 >> 2] = i22;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i5;
    return;
   } else if ((i23 | 0) == 10) {
    if ((i24 | 0) == 0) {
     i15 = i27;
     i16 = i10;
     break;
    }
    i22 = i24;
    HEAP32[i22 >> 2] = 0;
    HEAP32[i22 + 4 >> 2] = 0;
    i22 = i2 + 16 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) - 1;
    i15 = i24;
    i16 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i15 >> 2] = i16;
 i16 = i6 | 0;
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = i15 + 4 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i4;
 HEAP32[i16 >> 2] = i3;
 if ((i3 | 0) != 0) {
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i16);
 }
 i16 = i2 + 12 | 0;
 i3 = (HEAP32[i16 >> 2] | 0) + 1 | 0;
 HEAP32[i16 >> 2] = i3;
 i16 = i2 + 4 | 0;
 i4 = HEAP32[i16 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i3 << 1 | 0) < (i4 | 0)) {
  i29 = i15;
  i30 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i31 = 8;
  } else {
   i6 = i4 << 1;
   i31 = (i3 * 6 & -1 | 0) < (i6 | 0) ? i4 : i6;
  }
  i6 = __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i31, i15) | 0;
  i29 = i6;
  i30 = HEAP32[i16 >> 2] | 0;
 }
 i16 = (HEAP32[i7 >> 2] | 0) + (i30 << 3) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i16;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore11JSNodeOwner26isReachableFromOpaqueRootsEN3JSC6HandleINS1_7UnknownEEEPvRNS1_11SlotVisitorE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 i1 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i1 >> 2];
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i5 = 0;
 } else {
  i5 = HEAP32[i1 >> 2] | 0;
 }
 i1 = HEAP32[i5 + 12 >> 2] | 0;
 i2 = i1 + 12 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 & 256 | 0) == 0) {
   do {
    if ((i6 & 16 | 0) != 0) {
     if ((HEAP32[(HEAP32[i1 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6imgTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((HEAP8[i1 + 132 | 0] & 6) == 0) {
      break;
     } else {
      i7 = 1;
     }
     STACKTOP = i3;
     return i7 | 0;
    }
   } while (0);
   i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 48 >> 2] & 1](i1 | 0) | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = HEAP32[i8 + 28 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) == 0) {
    break;
   } else {
    i7 = 1;
   }
   STACKTOP = i3;
   return i7 | 0;
  }
 } while (0);
 do {
  if ((HEAP32[i1 + 16 >> 2] | 0) != 0) {
   if ((HEAP32[(HEAP32[i5 >> 2] | 0) + 60 >> 2] & 131072 | 0) != 0) {
    break;
   }
   i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 48 >> 2] & 1](i1 | 0) | 0;
   if ((i6 | 0) == 0) {
    i7 = 0;
    STACKTOP = i3;
    return i7 | 0;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) == 0) {
    i7 = 0;
   } else {
    break;
   }
   STACKTOP = i3;
   return i7 | 0;
  }
 } while (0);
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 & 256 | 0) == 0) {
  i2 = i1;
  i6 = i5;
  while (1) {
   i5 = (i6 & 4096 | 0) == 0;
   do {
    if (i5) {
     i10 = 19;
    } else {
     if ((HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i2 | 0)) {
      i10 = 19;
      break;
     }
     i11 = HEAP32[i2 + 92 >> 2] | 0;
    }
   } while (0);
   if ((i10 | 0) == 19) {
    i10 = 0;
    i11 = HEAP32[i2 + 16 >> 2] | 0;
   }
   if ((i11 | 0) == 0) {
    break;
   }
   do {
    if (i5) {
     i10 = 24;
    } else {
     if ((HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i2 | 0)) {
      i10 = 24;
      break;
     }
     i12 = HEAP32[i2 + 92 >> 2] | 0;
    }
   } while (0);
   if ((i10 | 0) == 24) {
    i10 = 0;
    i12 = HEAP32[i2 + 16 >> 2] | 0;
   }
   i2 = i12 | 0;
   i6 = HEAP32[i12 + 12 >> 2] | 0;
  }
  i13 = i2;
 } else {
  i13 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 }
 i1 = HEAP32[i4 + 20 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 i2 = HEAP32[i4 + 28 >> 2] | 0;
 i4 = i13;
 i12 = i4 + ~(i4 << 15) | 0;
 i4 = (i12 >>> 10 ^ i12) * 9 & -1;
 i12 = i4 >>> 6 ^ i4;
 i4 = i12 + ~(i12 << 11) | 0;
 i12 = i4 >>> 16 ^ i4;
 i4 = i2 & i12;
 i6 = i1 + (i4 << 2) | 0;
 i10 = HEAP32[i6 >> 2] | 0;
 L45 : do {
  if ((i10 | 0) == (i13 | 0)) {
   i14 = i6;
  } else {
   i11 = (i12 >>> 23) + ~i12 | 0;
   i5 = i11 << 12 ^ i11;
   i11 = i5 >>> 7 ^ i5;
   i5 = i11 << 2 ^ i11;
   i11 = i5 >>> 20 ^ i5 | 1;
   i5 = 0;
   i9 = i4;
   i8 = i10;
   while (1) {
    if ((i8 | 0) == 0) {
     i14 = 0;
     break L45;
    }
    i15 = (i5 | 0) == 0 ? i11 : i5;
    i16 = i15 + i9 & i2;
    i17 = i1 + (i16 << 2) | 0;
    i18 = HEAP32[i17 >> 2] | 0;
    if ((i18 | 0) == (i13 | 0)) {
     i14 = i17;
     break;
    } else {
     i5 = i15;
     i9 = i16;
     i8 = i18;
    }
   }
  }
 } while (0);
 i7 = (i14 | 0) != 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i1, i2, i3) {
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
   if ((HEAP32[i16 >> 2] | 0) == 0) {
    i36 = i13;
   } else {
    __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i16);
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
    i1 = i7 + (i37 << 3) + 4 | 0;
    if ((HEAP32[i1 >> 2] | 0) == 0) {
     break;
    }
    __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i1);
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
function __ZN7WebCore12cacheWrapperINS_21ProcessingInstructionENS_23JSProcessingInstructionEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 48 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = H_BASE + 16;
  HEAP32[H_BASE + 40 >> 2] = i11;
  HEAP32[H_BASE + 48 >> 2] = 1;
  HEAP32[H_BASE + 52 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 40 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_16DocumentFragmentENS_18JSDocumentFragmentEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 48 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = H_BASE + 16;
  HEAP32[H_BASE + 40 >> 2] = i11;
  HEAP32[H_BASE + 48 >> 2] = 1;
  HEAP32[H_BASE + 52 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 40 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_15EntityReferenceENS_17JSEntityReferenceEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 48 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = H_BASE + 16;
  HEAP32[H_BASE + 40 >> 2] = i11;
  HEAP32[H_BASE + 48 >> 2] = 1;
  HEAP32[H_BASE + 52 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 40 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_12DocumentTypeENS_14JSDocumentTypeEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 48 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = H_BASE + 16;
  HEAP32[H_BASE + 40 >> 2] = i11;
  HEAP32[H_BASE + 48 >> 2] = 1;
  HEAP32[H_BASE + 52 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 40 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_12CDATASectionENS_14JSCDATASectionEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 48 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = H_BASE + 16;
  HEAP32[H_BASE + 40 >> 2] = i11;
  HEAP32[H_BASE + 48 >> 2] = 1;
  HEAP32[H_BASE + 52 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 40 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_8NotationENS_10JSNotationEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 48 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = H_BASE + 16;
  HEAP32[H_BASE + 40 >> 2] = i11;
  HEAP32[H_BASE + 48 >> 2] = 1;
  HEAP32[H_BASE + 52 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 40 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_7ElementENS_9JSElementEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 48 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = H_BASE + 16;
  HEAP32[H_BASE + 40 >> 2] = i11;
  HEAP32[H_BASE + 48 >> 2] = 1;
  HEAP32[H_BASE + 52 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 40 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_7CommentENS_9JSCommentEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 48 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = H_BASE + 16;
  HEAP32[H_BASE + 40 >> 2] = i11;
  HEAP32[H_BASE + 48 >> 2] = 1;
  HEAP32[H_BASE + 52 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 40 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_6EntityENS_8JSEntityEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 48 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = H_BASE + 16;
  HEAP32[H_BASE + 40 >> 2] = i11;
  HEAP32[H_BASE + 48 >> 2] = 1;
  HEAP32[H_BASE + 52 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 40 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_4TextENS_6JSTextEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 48 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = H_BASE + 16;
  HEAP32[H_BASE + 40 >> 2] = i11;
  HEAP32[H_BASE + 48 >> 2] = 1;
  HEAP32[H_BASE + 52 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 40 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_4NodeENS_6JSNodeEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 48 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = H_BASE + 16;
  HEAP32[H_BASE + 40 >> 2] = i11;
  HEAP32[H_BASE + 48 >> 2] = 1;
  HEAP32[H_BASE + 52 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 40 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_4AttrENS_6JSAttrEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 48 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = H_BASE + 16;
  HEAP32[H_BASE + 40 >> 2] = i11;
  HEAP32[H_BASE + 48 >> 2] = 1;
  HEAP32[H_BASE + 52 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 40 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableIPvS1_NS_17IdentityExtractorENS_7PtrHashIS1_EENS_10HashTraitsIS1_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS1_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S4_S6_S6_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPvS1_NS_17IdentityExtractorENS_7PtrHashIS1_EENS_10HashTraitsIS1_EES6_E6expandEPS1_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i8;
 i9 = i3 + ~(i3 << 15) | 0;
 i3 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i3 >>> 6 ^ i3;
 i3 = i9 + ~(i9 << 11) | 0;
 i9 = i3 >>> 16 ^ i3;
 i3 = i9 & i6;
 i10 = i7 + (i3 << 2) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i10;
   i13 = 9;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i10;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 6;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i7 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 8;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 6) {
    i19 = i7 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i13 | 0) == 8) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 9;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   }
  }
 } while (0);
 if ((i13 | 0) == 9) {
  i25 = i12;
  i26 = i2 + 16 | 0;
 }
 HEAP32[i25 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i12;
 i4 = i2 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i26 >> 2] | 0) + i12 << 1 | 0) < (i13 | 0)) {
  i27 = i25;
  i28 = i13;
 } else {
  i13 = __ZN3WTF9HashTableIPvS1_NS_17IdentityExtractorENS_7PtrHashIS1_EENS_10HashTraitsIS1_EES6_E6expandEPS1_(i2, i25) | 0;
  i27 = i13;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore47willCreatePossiblyOrphanedTreeByRemovalSlowCaseEPNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = __ZN7WebCore18mainWorldExecStateEPNS_5FrameE(HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0) | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3JSC12JSLockHolderC1EPNS_9ExecStateE(i3, i5);
 i6 = HEAP32[(HEAP32[HEAP32[i5 + 16 >> 2] >> 2] | 0) + 4 >> 2] | 0;
 i7 = i6;
 i8 = HEAP32[i6 + 656 >> 2] | 0;
 do {
  if ((HEAP8[i8 + 92 | 0] & 1) == 0) {
   i9 = 7;
  } else {
   i6 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i9 = 7;
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] & 3 | 0) != 0) {
    i9 = 7;
    break;
   }
   i10 = HEAP32[i6 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i9 = 7;
    break;
   }
   i11 = i10 | 0;
   i9 = 16;
  }
 } while (0);
 L9 : do {
  if ((i9 | 0) == 7) {
   i10 = i1;
   i6 = HEAP32[i8 + 12 >> 2] | 0;
   i12 = HEAP32[i8 + 4 >> 2] | 0;
   i13 = i1;
   i14 = i13 + ~(i13 << 15) | 0;
   i13 = (i14 >>> 10 ^ i14) * 9 & -1;
   i14 = i13 >>> 6 ^ i13;
   i13 = i14 + ~(i14 << 11) | 0;
   i14 = i13 >>> 16 ^ i13;
   if ((i12 | 0) == 0) {
    i9 = 18;
    break;
   }
   i13 = i6 & i14;
   i15 = i12 + (i13 << 3) | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == (i10 | 0)) {
    i17 = i15;
   } else {
    i15 = (i14 >>> 23) + ~i14 | 0;
    i14 = i15 << 12 ^ i15;
    i15 = i14 >>> 7 ^ i14;
    i14 = i15 << 2 ^ i15;
    i15 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i18 = i13;
    i13 = i16;
    while (1) {
     if ((i13 | 0) == 0) {
      i9 = 18;
      break L9;
     }
     i16 = (i14 | 0) == 0 ? i15 : i14;
     i19 = i16 + i18 & i6;
     i20 = i12 + (i19 << 3) | 0;
     i21 = HEAP32[i20 >> 2] | 0;
     if ((i21 | 0) == (i10 | 0)) {
      i17 = i20;
      break;
     } else {
      i14 = i16;
      i18 = i19;
      i13 = i21;
     }
    }
   }
   if ((i17 | 0) == 0) {
    i9 = 18;
    break;
   }
   i13 = HEAP32[i17 + 4 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i9 = 18;
    break;
   }
   if ((HEAP32[i13 + 8 >> 2] & 3 | 0) != 0) {
    i9 = 18;
    break;
   }
   i11 = HEAP32[i13 >> 2] | 0;
   i9 = 16;
  }
 } while (0);
 do {
  if ((i9 | 0) == 16) {
   if ((i11 | 0) == 0) {
    i9 = 18;
    break;
   }
   HEAP32[i4 + 4 >> 2] = -5;
   HEAP32[i4 >> 2] = i11;
  }
 } while (0);
 if ((i9 | 0) == 18) {
  __ZN7WebCore13createWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_4NodeE(i4, i5, i7, i1);
 }
 __ZN3JSC12JSLockHolderD1Ev(i3);
 STACKTOP = i2;
 return;
}
function __ZN3WTF9HashTableIPvS1_NS_17IdentityExtractorENS_7PtrHashIS1_EENS_10HashTraitsIS1_EES6_E6expandEPS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
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
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 2) | 0;
 if ((i6 | 0) == 0) {
  i8 = 0;
  i9 = i1 + 16 | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i8 | 0;
 } else {
  i11 = 0;
  i12 = 0;
 }
 while (1) {
  i5 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i5 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = HEAP32[i3 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L10 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 7;
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
       break L10;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 2) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 7;
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
   if ((i23 | 0) == 7) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   HEAP32[i30 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i6 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i16;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN7WebCore6JSNode13visitChildrenEPN3JSC6JSCellERNS1_11SlotVisitorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 __ZN3JSC8JSObject13visitChildrenEPNS_6JSCellERNS_11SlotVisitorE(i1, i2);
 i7 = HEAP32[i1 + 12 >> 2] | 0;
 __ZN7WebCore21EventListenerIteratorC1EPNS_11EventTargetE(i4, i7 | 0);
 i1 = __ZN7WebCore21EventListenerIterator12nextListenerEv(i4) | 0;
 if ((i1 | 0) != 0) {
  i8 = i1;
  while (1) {
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] & 1](i8, i2);
   i8 = __ZN7WebCore21EventListenerIterator12nextListenerEv(i4) | 0;
   if ((i8 | 0) == 0) {
    break;
   }
  }
 }
 i8 = HEAP32[i7 + 12 >> 2] | 0;
 if ((i8 & 256 | 0) == 0) {
  i9 = i7;
  i10 = i8;
 } else {
  i11 = HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 8 >> 2] | 0;
  i12 = i5;
  i13 = i6;
  HEAP32[i5 >> 2] = i11;
  i14 = i2 + 20 | 0;
  __ZN3WTF9HashTableIPvS1_NS_17IdentityExtractorENS_7PtrHashIS1_EENS_10HashTraitsIS1_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS1_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S4_S6_S6_EEEEOT0_OT1_(i6, i14, i5, i5);
  STACKTOP = i3;
  return;
 }
 while (1) {
  i7 = (i10 & 4096 | 0) == 0;
  do {
   if (i7) {
    i15 = 8;
   } else {
    if ((HEAP32[(HEAP32[i9 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i9 | 0)) {
     i15 = 8;
     break;
    }
    i16 = HEAP32[i9 + 92 >> 2] | 0;
   }
  } while (0);
  if ((i15 | 0) == 8) {
   i15 = 0;
   i16 = HEAP32[i9 + 16 >> 2] | 0;
  }
  if ((i16 | 0) == 0) {
   break;
  }
  do {
   if (i7) {
    i15 = 13;
   } else {
    if ((HEAP32[(HEAP32[i9 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i9 | 0)) {
     i15 = 13;
     break;
    }
    i17 = HEAP32[i9 + 92 >> 2] | 0;
   }
  } while (0);
  if ((i15 | 0) == 13) {
   i15 = 0;
   i17 = HEAP32[i9 + 16 >> 2] | 0;
  }
  i9 = i17 | 0;
  i10 = HEAP32[i17 + 12 >> 2] | 0;
 }
 i11 = i9;
 i12 = i5;
 i13 = i6;
 HEAP32[i5 >> 2] = i11;
 i14 = i2 + 20 | 0;
 __ZN3WTF9HashTableIPvS1_NS_17IdentityExtractorENS_7PtrHashIS1_EENS_10HashTraitsIS1_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS1_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S4_S6_S6_EEEEOT0_OT1_(i6, i14, i5, i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore6JSNode12replaceChildEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 HEAP32[i5 >> 2] = 0;
 i9 = HEAP32[i2 + 12 >> 2] | 0;
 i2 = i3 + 32 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 1) {
  HEAP32[i7 + 4 >> 2] = -4;
  HEAP32[i7 >> 2] = 0;
 } else {
  i10 = i3 + 48 | 0;
  i11 = HEAP32[i10 + 4 >> 2] | 0;
  i12 = i7 | 0;
  HEAP32[i12 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i12 + 4 >> 2] = i11;
 }
 i11 = __ZN7WebCore6toNodeEN3JSC7JSValueE(i7) | 0;
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i12 = i11 + 8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 if (((HEAP32[i2 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
  i12 = i3 + 56 | 0;
  i11 = HEAP32[i12 + 4 >> 2] | 0;
  i10 = i8 | 0;
  HEAP32[i10 >> 2] = HEAP32[i12 >> 2];
  HEAP32[i10 + 4 >> 2] = i11;
 } else {
  HEAP32[i8 + 4 >> 2] = -4;
  HEAP32[i8 >> 2] = 0;
 }
 i11 = __ZN7WebCore4Node12replaceChildEN3WTF10PassRefPtrIS0_EEPS0_Ri(i9, i6, __ZN7WebCore6toNodeEN3JSC7JSValueE(i8) | 0, i5) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i7 = i8 + 8 | 0;
   i6 = i7 | 0;
   i9 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i3, HEAP32[i5 >> 2] | 0);
 if (!i11) {
  HEAP32[i1 + 4 >> 2] = -3;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (((HEAP32[i2 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
  i2 = i3 + 56 | 0;
  i3 = HEAP32[i2 + 4 >> 2] | 0;
  i11 = i1 | 0;
  HEAP32[i11 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i11 + 4 >> 2] = i3;
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i1 + 4 >> 2] = -4;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore6JSNode12insertBeforeEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 HEAP32[i5 >> 2] = 0;
 i9 = HEAP32[i2 + 12 >> 2] | 0;
 i2 = i3 + 32 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 1) {
  HEAP32[i7 + 4 >> 2] = -4;
  HEAP32[i7 >> 2] = 0;
 } else {
  i10 = i3 + 48 | 0;
  i11 = HEAP32[i10 + 4 >> 2] | 0;
  i12 = i7 | 0;
  HEAP32[i12 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i12 + 4 >> 2] = i11;
 }
 i11 = __ZN7WebCore6toNodeEN3JSC7JSValueE(i7) | 0;
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i12 = i11 + 8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 if (((HEAP32[i2 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
  i12 = i3 + 56 | 0;
  i11 = HEAP32[i12 + 4 >> 2] | 0;
  i10 = i8 | 0;
  HEAP32[i10 >> 2] = HEAP32[i12 >> 2];
  HEAP32[i10 + 4 >> 2] = i11;
 } else {
  HEAP32[i8 + 4 >> 2] = -4;
  HEAP32[i8 >> 2] = 0;
 }
 i11 = __ZN7WebCore4Node12insertBeforeEN3WTF10PassRefPtrIS0_EEPS0_Ri(i9, i6, __ZN7WebCore6toNodeEN3JSC7JSValueE(i8) | 0, i5) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i7 = i8 + 8 | 0;
   i6 = i7 | 0;
   i9 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i3, HEAP32[i5 >> 2] | 0);
 if (!i11) {
  HEAP32[i1 + 4 >> 2] = -3;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i2 >> 2] | 0) == 1) {
  HEAP32[i1 + 4 >> 2] = -4;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 } else {
  i2 = i3 + 48 | 0;
  i3 = HEAP32[i2 + 4 >> 2] | 0;
  i11 = i1 | 0;
  HEAP32[i11 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i11 + 4 >> 2] = i3;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore6JSNode11appendChildEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 HEAP32[i5 >> 2] = 0;
 i8 = HEAP32[i2 + 12 >> 2] | 0;
 i2 = i3 + 32 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 1) {
  HEAP32[i7 + 4 >> 2] = -4;
  HEAP32[i7 >> 2] = 0;
 } else {
  i9 = i3 + 48 | 0;
  i10 = HEAP32[i9 + 4 >> 2] | 0;
  i11 = i7 | 0;
  HEAP32[i11 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i11 + 4 >> 2] = i10;
 }
 i10 = __ZN7WebCore6toNodeEN3JSC7JSValueE(i7) | 0;
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i11 = i10 + 8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 }
 i11 = __ZN7WebCore4Node11appendChildEN3WTF10PassRefPtrIS0_EERi(i8, i6, i5) | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 + 8 | 0;
   i8 = i7 | 0;
   i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i3, HEAP32[i5 >> 2] | 0);
 if (!i11) {
  HEAP32[i1 + 4 >> 2] = -3;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i2 >> 2] | 0) == 1) {
  HEAP32[i1 + 4 >> 2] = -4;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 } else {
  i2 = i3 + 48 | 0;
  i3 = HEAP32[i2 + 4 >> 2] | 0;
  i11 = i1 | 0;
  HEAP32[i11 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i11 + 4 >> 2] = i3;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore15getDOMStructureINS_23JSProcessingInstructionEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore23JSProcessingInstruction6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore23JSProcessingInstruction15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore23JSProcessingInstruction6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore23JSProcessingInstruction6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_18JSDocumentFragmentEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore18JSDocumentFragment6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore18JSDocumentFragment15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore18JSDocumentFragment6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore18JSDocumentFragment6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_17JSEntityReferenceEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore17JSEntityReference6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore17JSEntityReference15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore17JSEntityReference6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore17JSEntityReference6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_14JSDocumentTypeEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore14JSDocumentType6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore14JSDocumentType15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore14JSDocumentType6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore14JSDocumentType6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_14JSCDATASectionEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore14JSCDATASection6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore14JSCDATASection15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore14JSCDATASection6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore14JSCDATASection6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_10JSNotationEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore10JSNotation6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore10JSNotation15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore10JSNotation6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore10JSNotation6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_9JSElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore9JSElement6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore9JSElement15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore9JSElement6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore9JSElement6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_9JSCommentEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore9JSComment6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore9JSComment15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore9JSComment6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore9JSComment6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_8JSEntityEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore8JSEntity6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore8JSEntity15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore8JSEntity6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore8JSEntity6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_6JSTextEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore6JSText6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore6JSText15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore6JSText6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore6JSText6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_6JSNodeEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore6JSNode6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore6JSNode15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore6JSNode6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore6JSNode6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_6JSAttrEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore6JSAttr6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore6JSAttr15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore6JSAttr6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore6JSAttr6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore23JSProcessingInstruction6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_21ProcessingInstructionEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore23JSProcessingInstructionC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_21ProcessingInstructionEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore23JSProcessingInstruction14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore18JSDocumentFragment6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16DocumentFragmentEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore18JSDocumentFragmentC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16DocumentFragmentEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore18JSDocumentFragment14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore17JSEntityReference6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15EntityReferenceEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore17JSEntityReferenceC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15EntityReferenceEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore17JSEntityReference14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore14JSDocumentType6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_12DocumentTypeEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore14JSDocumentTypeC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_12DocumentTypeEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore14JSDocumentType14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore14JSCDATASection6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_12CDATASectionEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore14JSCDATASectionC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_12CDATASectionEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore14JSCDATASection14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore10JSNotation6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_8NotationEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore10JSNotationC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_8NotationEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore10JSNotation14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore9JSElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_7ElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore9JSElementC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_7ElementEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore9JSElement14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore9JSComment6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_7CommentEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore9JSCommentC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_7CommentEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore9JSComment14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore8JSEntity6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_6EntityEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore8JSEntityC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_6EntityEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore8JSEntity14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore6JSText6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_4TextEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore6JSTextC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_4TextEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore6JSText14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore6JSNode6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_4NodeEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore6JSNodeC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_4NodeEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore6JSNode14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore6JSAttr6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_4AttrEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore6JSAttrC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_4AttrEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore6JSAttr14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore6JSNode11removeChildEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 HEAP32[i5 >> 2] = 0;
 i7 = HEAP32[i2 + 12 >> 2] | 0;
 i2 = i3 + 32 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 1) {
  HEAP32[i6 + 4 >> 2] = -4;
  HEAP32[i6 >> 2] = 0;
 } else {
  i8 = i3 + 48 | 0;
  i9 = HEAP32[i8 + 4 >> 2] | 0;
  i10 = i6 | 0;
  HEAP32[i10 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i10 + 4 >> 2] = i9;
 }
 i9 = __ZN7WebCore4Node11removeChildEPS0_Ri(i7, __ZN7WebCore6toNodeEN3JSC7JSValueE(i6) | 0, i5) | 0;
 __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i3, HEAP32[i5 >> 2] | 0);
 if (!i9) {
  HEAP32[i1 + 4 >> 2] = -3;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i2 >> 2] | 0) == 1) {
  HEAP32[i1 + 4 >> 2] = -4;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 } else {
  i2 = i3 + 48 | 0;
  i3 = HEAP32[i2 + 4 >> 2] | 0;
  i9 = i1 | 0;
  HEAP32[i9 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i9 + 4 >> 2] = i3;
  STACKTOP = i4;
  return;
 }
}
function __ZNK7WebCore6JSNode21pushEventHandlerScopeEPN3JSC9ExecStateEPNS1_7JSScopeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 if ((HEAP32[(i1 & -65536) + 1048 >> 2] | 0) == 2) {
  i4 = i1 + 8 | 0;
 } else {
  i4 = (HEAP32[i1 >> 2] | 0) + 32 | 0;
 }
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = i3;
  return i6 | 0;
 } else {
  i7 = i5;
 }
 while (1) {
  if ((i7 | 0) == (__ZN7WebCore13JSHTMLElement6s_infoE | 0)) {
   break;
  }
  i5 = HEAP32[i7 + 4 >> 2] | 0;
  if ((i5 | 0) == 0) {
   i6 = i3;
   i8 = 11;
   break;
  } else {
   i7 = i5;
  }
 }
 if ((i8 | 0) == 11) {
  return i6 | 0;
 }
 i6 = __ZNK7WebCore13JSHTMLElement21pushEventHandlerScopeEPN3JSC9ExecStateEPNS1_7JSScopeE(i1, i2, i3) | 0;
 return i6 | 0;
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
function viii___ZN7WebCore11JSNodeOwner8finalizeEN3JSC6HandleINS1_7UnknownEEEPv__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore11JSNodeOwner8finalizeEN3JSC6HandleINS1_7UnknownEEEPv(i1 | 0, i2 | 0, i3 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_viii + 2;
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
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
function __ZN7WebCore11JSNodeOwnerD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3JSC15WeakHandleOwnerD2Ev(i1 | 0);
 __ZdlPv(i1);
 return;
}
function b0(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(0);
 return 0;
}
function __ZN7WebCore11JSNodeOwnerD1Ev(i1) {
 i1 = i1 | 0;
 __ZN3JSC15WeakHandleOwnerD2Ev(i1 | 0);
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
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
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
 return 0;
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
function b5() {
 abort(5);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiiii = [b0,b0,__ZN7WebCore11JSNodeOwner26isReachableFromOpaqueRootsEN3JSC6HandleINS1_7UnknownEEEPvRNS1_11SlotVisitorE,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore11JSNodeOwnerD1Ev,b1,__ZN7WebCore11JSNodeOwnerD0Ev,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,viii___ZN7WebCore11JSNodeOwner8finalizeEN3JSC6HandleINS1_7UnknownEEEPv__wrapper,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiii: dynCall_iiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiii": invoke_iiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore6JSText6s_infoE": __ZN7WebCore6JSText6s_infoE, "__ZN7WebCore9HTMLNames6imgTagE": __ZN7WebCore9HTMLNames6imgTagE, "__ZN7WebCore14JSCDATASection6s_infoE": __ZN7WebCore14JSCDATASection6s_infoE, "__ZN7WebCore6JSAttr6s_infoE": __ZN7WebCore6JSAttr6s_infoE, "__ZN7WebCore10JSNotation6s_infoE": __ZN7WebCore10JSNotation6s_infoE, "__ZN7WebCore23JSProcessingInstruction6s_infoE": __ZN7WebCore23JSProcessingInstruction6s_infoE, "__ZN7WebCore17JSEntityReference6s_infoE": __ZN7WebCore17JSEntityReference6s_infoE, "__ZN7WebCore9JSComment6s_infoE": __ZN7WebCore9JSComment6s_infoE, "__ZN7WebCore8JSEntity6s_infoE": __ZN7WebCore8JSEntity6s_infoE, "__ZN7WebCore9JSElement6s_infoE": __ZN7WebCore9JSElement6s_infoE, "__ZN7WebCore18JSDocumentFragment6s_infoE": __ZN7WebCore18JSDocumentFragment6s_infoE, "__ZN7WebCore13JSHTMLElement6s_infoE": __ZN7WebCore13JSHTMLElement6s_infoE, "__ZN7WebCore14JSDocumentType6s_infoE": __ZN7WebCore14JSDocumentType6s_infoE, "__ZN7WebCore6JSNode6s_infoE": __ZN7WebCore6JSNode6s_infoE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore12cacheWrapperINS_15EntityReferenceENS_17JSEntityReferenceEEEvRNS_15DOMWrapperWorldEPT_PT0_","_strlen","__ZN7WebCore12cacheWrapperINS_7ElementENS_9JSElementEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN3WTF9HashTableIPvS1_NS_17IdentityExtractorENS_7PtrHashIS1_EENS_10HashTraitsIS1_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS1_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S4_S6_S6_EEEEOT0_OT1_","__ZN7WebCore9JSElement6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_7ElementEEE","__ZN7WebCore11JSNodeOwner26isReachableFromOpaqueRootsEN3JSC6HandleINS1_7UnknownEEEPvRNS1_11SlotVisitorE","__ZN7WebCore16toJSNewlyCreatedEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_4NodeE","__ZN7WebCore47willCreatePossiblyOrphanedTreeByRemovalSlowCaseEPNS_4NodeE","__ZN7WebCore13createWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_4NodeE","__ZN7WebCore6JSAttr6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_4AttrEEE","__ZN7WebCore12cacheWrapperINS_8NotationENS_10JSNotationEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN3WTF9HashTableIPvS1_NS_17IdentityExtractorENS_7PtrHashIS1_EENS_10HashTraitsIS1_EES6_E6expandEPS1_","__ZN7WebCore12cacheWrapperINS_7CommentENS_9JSCommentEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore6JSNode11removeChildEPN3JSC9ExecStateE","__ZNK7WebCore6JSNode21pushEventHandlerScopeEPN3JSC9ExecStateEPNS1_7JSScopeE","__ZN7WebCore6JSNode12insertBeforeEPN3JSC9ExecStateE","__ZN7WebCore12cacheWrapperINS_4TextENS_6JSTextEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_14JSCDATASectionEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore11JSNodeOwnerD1Ev","__ZN7WebCore12cacheWrapperINS_4AttrENS_6JSAttrEEEvRNS_15DOMWrapperWorldEPT_PT0_","_memset","__ZN7WebCore17JSEntityReference6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15EntityReferenceEEE","__ZN7WebCore15getDOMStructureINS_6JSTextEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_4NodeENS_6JSNodeEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore6JSNode13visitChildrenEPN3JSC6JSCellERNS1_11SlotVisitorE","__ZN7WebCore14JSDocumentType6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_12DocumentTypeEEE","__ZN7WebCore15getDOMStructureINS_18JSDocumentFragmentEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore23JSProcessingInstruction6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_21ProcessingInstructionEEE","__ZN7WebCore6JSNode11appendChildEPN3JSC9ExecStateE","__ZN7WebCore9JSComment6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_7CommentEEE","__ZN7WebCore6JSNode12replaceChildEPN3JSC9ExecStateE","__ZN7WebCore15getDOMStructureINS_9JSCommentEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore18JSDocumentFragment6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16DocumentFragmentEEE","__ZN7WebCore15getDOMStructureINS_23JSProcessingInstructionEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore6JSText6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_4TextEEE","__ZN7WebCore15getDOMStructureINS_6JSNodeEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore11JSNodeOwnerD0Ev","__ZN7WebCore15getDOMStructureINS_10JSNotationEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore6JSNode6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_4NodeEEE","__ZN7WebCore10JSNotation6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_8NotationEEE","__ZN7WebCore15getDOMStructureINS_9JSElementEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_14JSDocumentTypeEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_6EntityENS_8JSEntityEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore8JSEntity6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_6EntityEEE","__ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_","_memcpy","__ZN7WebCore14JSCDATASection6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_12CDATASectionEEE","__ZN7WebCore12cacheWrapperINS_12DocumentTypeENS_14JSDocumentTypeEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_21ProcessingInstructionENS_23JSProcessingInstructionEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_","__ZN7WebCore15getDOMStructureINS_17JSEntityReferenceEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_8JSEntityEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_16DocumentFragmentENS_18JSDocumentFragmentEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_12CDATASectionENS_14JSCDATASectionEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_6JSAttrEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE"]

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
H_BASE = parentModule["_malloc"](96 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 96;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore8SettingsC1EPNS_4PageE;
var __ZN7WebCore8SettingsD1Ev;
/* memory initializer */ allocate([115,99,114,101,101,110,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,63,0,0,0,0,0,0,0,0,123,20,174,71,225,122,132,63], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_did(index,a1,a2) {
  try {
    return Module["dynCall_did"](index,a1,a2);
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
  var __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE=env.__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZN7WebCore8Settings27gDefaultMinDOMTimerIntervalE=(H_BASE+64)|0;
  var __ZN7WebCore8Settings33gDefaultDOMTimerAlignmentIntervalE=(H_BASE+56)|0;
  var __ZN7WebCore8Settings36gLowPowerVideoAudioBufferSizeEnabledE=(H_BASE+80)|0;
  var __ZTVN7WebCore5TimerINS_8SettingsEEE=(H_BASE+16)|0;
  var __ZN7WebCore8Settings43gShouldRespectPriorityInCSSAttributeSettersE=(H_BASE+72)|0;
  var __ZN7WebCore8Settings22gUsesOverlayScrollbarsE=(H_BASE+88)|0;
  var __ZN7WebCore8Settings36gHiddenPageDOMTimerAlignmentIntervalE=(H_BASE+48)|0;
  var __ZN7WebCore8Settings22gMockScrollbarsEnabledE=(H_BASE+96)|0;
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
  var invoke_did=env.invoke_did;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore19FontGenericFamiliesD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = HEAP32[i1 + 120 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 124 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    do {
     if ((HEAP32[i2 + (i4 << 3) >> 2] | 0) != -3) {
      i5 = HEAP32[i2 + (i4 << 3) + 4 >> 2] | 0;
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
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 100 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 104 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    do {
     if ((HEAP32[i2 + (i4 << 3) >> 2] | 0) != -3) {
      i7 = HEAP32[i2 + (i4 << 3) + 4 >> 2] | 0;
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
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 80 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 84 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    do {
     if ((HEAP32[i2 + (i4 << 3) >> 2] | 0) != -3) {
      i5 = HEAP32[i2 + (i4 << 3) + 4 >> 2] | 0;
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
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 64 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    do {
     if ((HEAP32[i2 + (i4 << 3) >> 2] | 0) != -3) {
      i7 = HEAP32[i2 + (i4 << 3) + 4 >> 2] | 0;
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
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 44 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    do {
     if ((HEAP32[i2 + (i4 << 3) >> 2] | 0) != -3) {
      i5 = HEAP32[i2 + (i4 << 3) + 4 >> 2] | 0;
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
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 24 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    do {
     if ((HEAP32[i2 + (i4 << 3) >> 2] | 0) != -3) {
      i7 = HEAP32[i2 + (i4 << 3) + 4 >> 2] | 0;
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
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) > 0) {
  i1 = 0;
  while (1) {
   do {
    if ((HEAP32[i2 + (i1 << 3) >> 2] | 0) != -3) {
     i4 = HEAP32[i2 + (i1 << 3) + 4 >> 2] | 0;
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
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore8SettingsC2EPNS_4PageE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = 1;
 i3 = i1 + 4 | 0;
 HEAP32[i3 >> 2] = 0;
 __ZN3WTF6StringC1EPKc(i1 + 8 | 0, H_BASE + 8 | 0);
 i4 = i1 + 12 | 0;
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i4);
 i4 = __Znwj(140) | 0;
 __ZN7WebCore19FontGenericFamiliesC1Ev(i4);
 HEAP32[i1 + 60 >> 2] = i4;
 HEAP32[i1 + 64 >> 2] = 0;
 HEAP32[i1 + 68 >> 2] = 250;
 HEAPF64[i1 + 72 >> 3] = +1800;
 _memset(i1 + 80 | 0, 0, 28) | 0;
 HEAP32[i1 + 108 >> 2] = 2;
 HEAP32[i1 + 112 >> 2] = 0;
 HEAPF64[i1 + 120 >> 3] = +5;
 HEAP32[i1 + 128 >> 2] = 980;
 HEAP32[i1 + 132 >> 2] = 0;
 HEAP32[i1 + 136 >> 2] = -1;
 HEAP32[i1 + 140 >> 2] = 512;
 HEAP32[i1 + 144 >> 2] = 20;
 HEAP32[i1 + 148 >> 2] = 65792;
 HEAP32[i1 + 152 >> 2] = 0;
 HEAP32[i1 + 156 >> 2] = 0;
 HEAPF64[i1 + 160 >> 3] = +1;
 HEAP32[i1 + 168 >> 2] = -1;
 HEAP32[i1 + 172 >> 2] = 1;
 HEAP32[i1 + 176 >> 2] = 50;
 HEAP8[i1 + 180 | 0] = 12;
 HEAP8[i1 + 181 | 0] = -82;
 HEAP8[i1 + 182 | 0] = 85;
 HEAP8[i1 + 183 | 0] = 17;
 HEAP8[i1 + 184 | 0] = 50;
 HEAP8[i1 + 185 | 0] = 0;
 HEAP8[i1 + 186 | 0] = -124;
 HEAP8[i1 + 187 | 0] = 1;
 HEAP8[i1 + 188 | 0] = -123;
 HEAP8[i1 + 189 | 0] = 76;
 HEAP8[i1 + 190 | 0] = 64;
 HEAP8[i1 + 191 | 0] = 83;
 i4 = i1 + 192 | 0;
 HEAP8[i4] = 17;
 HEAP8[i1 + 193 | 0] = 112;
 HEAP8[i1 + 194 | 0] = -108;
 i5 = i1 + 195 | 0;
 HEAP8[i5] = HEAP8[i5] & -16;
 i6 = i4;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i4 & -268435457;
 HEAP8[i5] = i4 >>> 24 & 15 | 64;
 i4 = i1 + 196 | 0;
 HEAP8[i4] = HEAP8[i4] & -16;
 HEAPF64[i1 + 200 >> 3] = +3;
 i4 = i1 + 208 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i4);
 HEAP32[i4 >> 2] = H_BASE + 24;
 HEAP32[i1 + 252 >> 2] = i1;
 i4 = i1 + 256 | 0;
 HEAP32[i4 >> 2] = F_BASE_vii + 4;
 HEAP32[i4 + 4 >> 2] = 0;
 i4 = i1 + 264 | 0;
 HEAP8[i4] = HEAP8[i4] & -8;
 __ZN3WTF12AtomicString4initEv();
 HEAP32[i3 >> 2] = i2;
 return;
}
function __ZN7WebCore8SettingsC1EPNS_4PageE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = 1;
 i3 = i1 + 4 | 0;
 HEAP32[i3 >> 2] = 0;
 __ZN3WTF6StringC1EPKc(i1 + 8 | 0, H_BASE + 8 | 0);
 i4 = i1 + 12 | 0;
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i4);
 i4 = __Znwj(140) | 0;
 __ZN7WebCore19FontGenericFamiliesC1Ev(i4);
 HEAP32[i1 + 60 >> 2] = i4;
 HEAP32[i1 + 64 >> 2] = 0;
 HEAP32[i1 + 68 >> 2] = 250;
 HEAPF64[i1 + 72 >> 3] = +1800;
 _memset(i1 + 80 | 0, 0, 28) | 0;
 HEAP32[i1 + 108 >> 2] = 2;
 HEAP32[i1 + 112 >> 2] = 0;
 HEAPF64[i1 + 120 >> 3] = +5;
 HEAP32[i1 + 128 >> 2] = 980;
 HEAP32[i1 + 132 >> 2] = 0;
 HEAP32[i1 + 136 >> 2] = -1;
 HEAP32[i1 + 140 >> 2] = 512;
 HEAP32[i1 + 144 >> 2] = 20;
 HEAP32[i1 + 148 >> 2] = 65792;
 HEAP32[i1 + 152 >> 2] = 0;
 HEAP32[i1 + 156 >> 2] = 0;
 HEAPF64[i1 + 160 >> 3] = +1;
 HEAP32[i1 + 168 >> 2] = -1;
 HEAP32[i1 + 172 >> 2] = 1;
 HEAP32[i1 + 176 >> 2] = 50;
 HEAP8[i1 + 180 | 0] = 12;
 HEAP8[i1 + 181 | 0] = -82;
 HEAP8[i1 + 182 | 0] = 85;
 HEAP8[i1 + 183 | 0] = 17;
 HEAP8[i1 + 184 | 0] = 50;
 HEAP8[i1 + 185 | 0] = 0;
 HEAP8[i1 + 186 | 0] = -124;
 HEAP8[i1 + 187 | 0] = 1;
 HEAP8[i1 + 188 | 0] = -123;
 HEAP8[i1 + 189 | 0] = 76;
 HEAP8[i1 + 190 | 0] = 64;
 HEAP8[i1 + 191 | 0] = 83;
 i4 = i1 + 192 | 0;
 HEAP8[i4] = 17;
 HEAP8[i1 + 193 | 0] = 112;
 HEAP8[i1 + 194 | 0] = -108;
 i5 = i1 + 195 | 0;
 HEAP8[i5] = HEAP8[i5] & -16;
 i6 = i4;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i4 & -268435457;
 HEAP8[i5] = i4 >>> 24 & 15 | 64;
 i4 = i1 + 196 | 0;
 HEAP8[i4] = HEAP8[i4] & -16;
 HEAPF64[i1 + 200 >> 3] = +3;
 i4 = i1 + 208 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i4);
 HEAP32[i4 >> 2] = H_BASE + 24;
 HEAP32[i1 + 252 >> 2] = i1;
 i4 = i1 + 256 | 0;
 HEAP32[i4 >> 2] = F_BASE_vii + 4;
 HEAP32[i4 + 4 >> 2] = 0;
 i4 = i1 + 264 | 0;
 HEAP8[i4] = HEAP8[i4] & -8;
 __ZN3WTF12AtomicString4initEv();
 HEAP32[i3 >> 2] = i2;
 return;
}
function __ZN7WebCore8SettingsD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 __ZN7WebCore9TimerBaseD2Ev(i1 + 208 | 0);
 i2 = HEAP32[i1 + 132 >> 2] | 0;
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
 i2 = HEAP32[i1 + 112 >> 2] | 0;
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
 i2 = HEAP32[i1 + 92 >> 2] | 0;
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
 i2 = HEAP32[i1 + 88 >> 2] | 0;
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
 i2 = i1 + 60 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore19FontGenericFamiliesD2Ev(i3);
  __ZdlPv(i3);
 }
 i3 = HEAP32[i1 + 12 >> 2] | 0;
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
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore8SettingsD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 __ZN7WebCore9TimerBaseD2Ev(i1 + 208 | 0);
 i2 = HEAP32[i1 + 132 >> 2] | 0;
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
 i2 = HEAP32[i1 + 112 >> 2] | 0;
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
 i2 = HEAP32[i1 + 92 >> 2] | 0;
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
 i2 = HEAP32[i1 + 88 >> 2] | 0;
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
 i2 = i1 + 60 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore19FontGenericFamiliesD2Ev(i3);
  __ZdlPv(i3);
 }
 i3 = HEAP32[i1 + 12 >> 2] | 0;
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
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore8Settings25setUserStyleSheetLocationERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 + 12 | 0;
 i4 = i2 | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i3 >> 2] | 0, HEAP32[i4 >> 2] | 0) | 0) {
  return;
 }
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i4 = i2 + 4 | 0;
 i3 = i1 + 16 | 0;
 i5 = HEAP8[i3] & -2 | HEAP8[i4] & 1;
 HEAP8[i3] = i5;
 HEAP8[i3] = i5 & -3 | HEAP8[i4] & 2;
 HEAP32[i1 + 20 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 12 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 16 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i2 + 40 >> 2];
 HEAP32[i1 + 56 >> 2] = HEAP32[i2 + 44 >> 2];
 __ZN7WebCore4Page29userStyleSheetLocationChangedEv(HEAP32[i1 + 4 >> 2] | 0);
 return;
}
function __ZN7WebCore8Settings20setMediaTypeOverrideERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 + 8 | 0;
 i4 = i2 | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i3 >> 2] | 0, HEAP32[i4 >> 2] | 0) | 0) {
  return;
 }
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i4 = i1 + 4 | 0;
 __ZN7WebCore9FrameView12setMediaTypeERKN3WTF6StringE(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 60 >> 2] | 0) + 452 >> 2] | 0, i2);
 __ZN7WebCore4Page30setNeedsRecalcStyleInAllFramesEv(HEAP32[i4 >> 2] | 0);
 return;
}
function __ZN7WebCore8Settings16setUsesPageCacheEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 + 195 | 0;
 i4 = HEAP8[i3] | 0;
 if (((i4 & 255) >>> 3 & 1 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i4 & -9 | (i2 & 1) << 3;
 if (i2) {
  return;
 }
 i2 = i1 + 4 | 0;
 i1 = -(__ZNK7WebCore21BackForwardController9backCountEv(HEAP32[(HEAP32[i2 >> 2] | 0) + 56 >> 2] | 0) | 0) | 0;
 i4 = __ZNK7WebCore21BackForwardController12forwardCountEv(HEAP32[(HEAP32[i2 >> 2] | 0) + 56 >> 2] | 0) | 0;
 if ((i4 | 0) < (i1 | 0)) {
  return;
 } else {
  i5 = i1;
 }
 while (1) {
  i1 = __ZN7WebCore9pageCacheEv() | 0;
  __ZN7WebCore9PageCache6removeEPNS_11HistoryItemE(i1, __ZN7WebCore21BackForwardController11itemAtIndexEi(HEAP32[(HEAP32[i2 >> 2] | 0) + 56 >> 2] | 0, i5) | 0);
  i5 = i5 + 1 | 0;
  if ((i5 | 0) > (i4 | 0)) {
   break;
  }
 }
 return;
}
function __ZN7WebCore8Settings30imageLoadingSettingsTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = HEAP32[i2 + 60 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = i2 + 48 | 0;
 i2 = i1;
 while (1) {
  i1 = i2 + 456 | 0;
  __ZN7WebCore20CachedResourceLoader16setImagesEnabledEb(HEAP32[(HEAP32[i1 >> 2] | 0) + 340 >> 2] | 0, (HEAP8[(HEAP32[i3 >> 2] | 0) + 194 | 0] | 0) < 0);
  __ZN7WebCore20CachedResourceLoader17setAutoLoadImagesEb(HEAP32[(HEAP32[i1 >> 2] | 0) + 340 >> 2] | 0, (HEAP8[(HEAP32[i3 >> 2] | 0) + 194 | 0] & 32) != 0);
  i2 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i2 + 40 | 0, 0) | 0;
  if ((i2 | 0) == 0) {
   break;
  }
 }
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
function __ZN7WebCore8Settings16setScriptEnabledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 195 | 0;
 HEAP8[i3] = HEAP8[i3] & -3 | (i2 & 1) << 1;
 if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
  return;
 }
 i3 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i1 + 4 >> 2] | 0) | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore24InspectorInstrumentation18scriptsEnabledImplEPNS_19InstrumentingAgentsEb(i3, i2);
 return;
}
function __ZN7WebCore8Settings23setPictographFontFamilyERKN3WTF12AtomicStringE11UScriptCode(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if (!(__ZN7WebCore19FontGenericFamilies23setPictographFontFamilyERKN3WTF12AtomicStringE11UScriptCode(HEAP32[i1 + 60 >> 2] | 0, i2, i3) | 0)) {
  return;
 }
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 __ZN7WebCore25invalidateFontGlyphsCacheEv();
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore4Page30setNeedsRecalcStyleInAllFramesEv(i3);
 return;
}
function __ZN7WebCore8Settings22setSansSerifFontFamilyERKN3WTF12AtomicStringE11UScriptCode(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if (!(__ZN7WebCore19FontGenericFamilies22setSansSerifFontFamilyERKN3WTF12AtomicStringE11UScriptCode(HEAP32[i1 + 60 >> 2] | 0, i2, i3) | 0)) {
  return;
 }
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 __ZN7WebCore25invalidateFontGlyphsCacheEv();
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore4Page30setNeedsRecalcStyleInAllFramesEv(i3);
 return;
}
function __ZN7WebCore8Settings21setStandardFontFamilyERKN3WTF12AtomicStringE11UScriptCode(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if (!(__ZN7WebCore19FontGenericFamilies21setStandardFontFamilyERKN3WTF12AtomicStringE11UScriptCode(HEAP32[i1 + 60 >> 2] | 0, i2, i3) | 0)) {
  return;
 }
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 __ZN7WebCore25invalidateFontGlyphsCacheEv();
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore4Page30setNeedsRecalcStyleInAllFramesEv(i3);
 return;
}
function __ZN7WebCore8Settings20setFantasyFontFamilyERKN3WTF12AtomicStringE11UScriptCode(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if (!(__ZN7WebCore19FontGenericFamilies20setFantasyFontFamilyERKN3WTF12AtomicStringE11UScriptCode(HEAP32[i1 + 60 >> 2] | 0, i2, i3) | 0)) {
  return;
 }
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 __ZN7WebCore25invalidateFontGlyphsCacheEv();
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore4Page30setNeedsRecalcStyleInAllFramesEv(i3);
 return;
}
function __ZN7WebCore8Settings20setCursiveFontFamilyERKN3WTF12AtomicStringE11UScriptCode(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if (!(__ZN7WebCore19FontGenericFamilies20setCursiveFontFamilyERKN3WTF12AtomicStringE11UScriptCode(HEAP32[i1 + 60 >> 2] | 0, i2, i3) | 0)) {
  return;
 }
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 __ZN7WebCore25invalidateFontGlyphsCacheEv();
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore4Page30setNeedsRecalcStyleInAllFramesEv(i3);
 return;
}
function __ZN7WebCore8Settings18setSerifFontFamilyERKN3WTF12AtomicStringE11UScriptCode(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if (!(__ZN7WebCore19FontGenericFamilies18setSerifFontFamilyERKN3WTF12AtomicStringE11UScriptCode(HEAP32[i1 + 60 >> 2] | 0, i2, i3) | 0)) {
  return;
 }
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 __ZN7WebCore25invalidateFontGlyphsCacheEv();
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore4Page30setNeedsRecalcStyleInAllFramesEv(i3);
 return;
}
function __ZN7WebCore8Settings18setFixedFontFamilyERKN3WTF12AtomicStringE11UScriptCode(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if (!(__ZN7WebCore19FontGenericFamilies18setFixedFontFamilyERKN3WTF12AtomicStringE11UScriptCode(HEAP32[i1 + 60 >> 2] | 0, i2, i3) | 0)) {
  return;
 }
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 __ZN7WebCore25invalidateFontGlyphsCacheEv();
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore4Page30setNeedsRecalcStyleInAllFramesEv(i3);
 return;
}
function __ZN7WebCore5TimerINS_8SettingsEE5firedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 48 | 0;
 i3 = (HEAP32[i1 + 44 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i4 = i3;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i6 = i5;
  FUNCTION_TABLE_vii[i6 & 7](i4, i1);
  return;
 } else {
  i6 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i5 - 1) >> 2] | 0;
  FUNCTION_TABLE_vii[i6 & 7](i4, i1);
  return;
 }
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
function __ZN7WebCore8Settings37setScrollingPerformanceLoggingEnabledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 196 | 0;
 HEAP8[i3] = HEAP8[i3] & -5 | (i2 & 1) << 2;
 i3 = HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 60 >> 2] | 0) + 452 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore9FrameView37setScrollingPerformanceLoggingEnabledEb(i3, i2);
 return;
}
function __ZN7WebCore8Settings20setFontRenderingModeENS_17FontRenderingModeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 192 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 >>> 28 & 1 | 0) == (i2 | 0)) {
  return;
 }
 HEAP32[i3 >> 2] = i4 & -268435457 | i2 << 28 & 268435456;
 __ZN7WebCore4Page30setNeedsRecalcStyleInAllFramesEv(HEAP32[i1 + 4 >> 2] | 0);
 return;
}
function __ZN7WebCore8Settings42setHiddenPageCSSAnimationSuspensionEnabledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 264 | 0;
 i4 = HEAP8[i3] | 0;
 if (((i4 & 255) >>> 1 & 1 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i4 & -3 | (i2 & 1) << 1;
 __ZN7WebCore4Page44hiddenPageCSSAnimationSuspensionStateChangedEv(HEAP32[i1 + 4 >> 2] | 0);
 return;
}
function __ZN7WebCore8Settings41setAcceleratedCompositedAnimationsEnabledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 180 | 0;
 i4 = HEAP8[i3] | 0;
 if (((i4 & 255) >>> 2 & 1 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i4 & -5 | (i2 & 1) << 2;
 __ZN7WebCore4Page30setNeedsRecalcStyleInAllFramesEv(HEAP32[i1 + 4 >> 2] | 0);
 return;
}
function __ZN7WebCore8Settings38setSimpleLineLayoutDebugBordersEnabledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 190 | 0;
 i4 = HEAP8[i3] | 0;
 if (((i4 & 255) >>> 7 & 255 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i4 & 127 | (i2 & 1) << 7;
 __ZN7WebCore4Page30setNeedsRecalcStyleInAllFramesEv(HEAP32[i1 + 4 >> 2] | 0);
 return;
}
function __ZN7WebCore8Settings33setFontFallbackPrefersPictographsEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 264 | 0;
 i4 = HEAP8[i3] | 0;
 if (((i4 & 255) >>> 2 & 1 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i4 & -5 | (i2 & 1) << 2;
 __ZN7WebCore4Page30setNeedsRecalcStyleInAllFramesEv(HEAP32[i1 + 4 >> 2] | 0);
 return;
}
function __ZN7WebCore8Settings32setScreenFontSubstitutionEnabledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 194 | 0;
 i4 = HEAP8[i3] | 0;
 if (((i4 & 255) >>> 2 & 1 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i4 & -5 | (i2 & 1) << 2;
 __ZN7WebCore4Page30setNeedsRecalcStyleInAllFramesEv(HEAP32[i1 + 4 >> 2] | 0);
 return;
}
function __ZN7WebCore8Settings32setAcceleratedCompositingEnabledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 180 | 0;
 i4 = HEAP8[i3] | 0;
 if (((i4 & 255) >>> 3 & 1 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i4 & -9 | (i2 & 1) << 3;
 __ZN7WebCore4Page30setNeedsRecalcStyleInAllFramesEv(HEAP32[i1 + 4 >> 2] | 0);
 return;
}
function __ZN7WebCore8Settings29setAuthorAndUserStylesEnabledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 182 | 0;
 i4 = HEAP8[i3] | 0;
 if (((i4 & 255) >>> 4 & 1 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i4 & -17 | (i2 & 1) << 4;
 __ZN7WebCore4Page30setNeedsRecalcStyleInAllFramesEv(HEAP32[i1 + 4 >> 2] | 0);
 return;
}
function __ZN7WebCore8Settings38setHiddenPageDOMTimerThrottlingEnabledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 264 | 0;
 i4 = HEAP8[i3] | 0;
 if ((i4 & 1 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i4 & -2 | i2 & 1;
 __ZN7WebCore4Page40hiddenPageDOMTimerThrottlingStateChangedEv(HEAP32[i1 + 4 >> 2] | 0);
 return;
}
function __ZN7WebCore8Settings24setTextAreasAreResizableEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 191 | 0;
 i4 = HEAP8[i3] | 0;
 if (((i4 & 255) >>> 7 & 255 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i4 & 127 | (i2 & 1) << 7;
 __ZN7WebCore4Page30setNeedsRecalcStyleInAllFramesEv(HEAP32[i1 + 4 >> 2] | 0);
 return;
}
function __ZN7WebCore8Settings25setPrivateBrowsingEnabledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 194 | 0;
 i4 = HEAP8[i3] | 0;
 if (((i4 & 255) >>> 6 & 1 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i4 & -65 | (i2 & 1) << 6;
 __ZN7WebCore4Page27privateBrowsingStateChangedEv(HEAP32[i1 + 4 >> 2] | 0);
 return;
}
function __ZN7WebCore8Settings21setShowRepaintCounterEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 190 | 0;
 i4 = HEAP8[i3] | 0;
 if (((i4 & 255) >>> 3 & 1 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i4 & -9 | (i2 & 1) << 3;
 __ZN7WebCore4Page30setNeedsRecalcStyleInAllFramesEv(HEAP32[i1 + 4 >> 2] | 0);
 return;
}
function __ZN7WebCore8Settings24setDNSPrefetchingEnabledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 196 | 0;
 i4 = HEAP8[i3] | 0;
 if (((i4 & 255) >>> 1 & 1 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i4 & -3 | (i2 & 1) << 1;
 __ZN7WebCore4Page26dnsPrefetchingStateChangedEv(HEAP32[i1 + 4 >> 2] | 0);
 return;
}
function __ZN7WebCore8Settings19setShowDebugBordersEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 190 | 0;
 i4 = HEAP8[i3] | 0;
 if (((i4 & 255) >>> 2 & 1 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i4 & -5 | (i2 & 1) << 2;
 __ZN7WebCore4Page30setNeedsRecalcStyleInAllFramesEv(HEAP32[i1 + 4 >> 2] | 0);
 return;
}
function __ZN7WebCore8Settings24setStorageBlockingPolicyENS_14SecurityOrigin21StorageBlockingPolicyE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 64 | 0;
 if ((HEAP32[i3 >> 2] | 0) == (i2 | 0)) {
  return;
 }
 HEAP32[i3 >> 2] = i2;
 __ZN7WebCore4Page27storageBlockingStateChangedEv(HEAP32[i1 + 4 >> 2] | 0);
 return;
}
function __ZN7WebCore8Settings26setSimpleLineLayoutEnabledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 191 | 0;
 i4 = HEAP8[i3] | 0;
 if ((i4 & 1 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i4 & -2 | i2 & 1;
 __ZN7WebCore4Page30setNeedsRecalcStyleInAllFramesEv(HEAP32[i1 + 4 >> 2] | 0);
 return;
}
function __ZN7WebCore8Settings25setMinimumLogicalFontSizeEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 156 | 0;
 if ((HEAP32[i3 >> 2] | 0) == (i2 | 0)) {
  return;
 }
 HEAP32[i3 >> 2] = i2;
 __ZN7WebCore4Page30setNeedsRecalcStyleInAllFramesEv(HEAP32[i1 + 4 >> 2] | 0);
 return;
}
function __ZN7WebCore8Settings23setDefaultFixedFontSizeEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 80 | 0;
 if ((HEAP32[i3 >> 2] | 0) == (i2 | 0)) {
  return;
 }
 HEAP32[i3 >> 2] = i2;
 __ZN7WebCore4Page30setNeedsRecalcStyleInAllFramesEv(HEAP32[i1 + 4 >> 2] | 0);
 return;
}
function __ZN7WebCore8Settings18setMinimumFontSizeEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 152 | 0;
 if ((HEAP32[i3 >> 2] | 0) == (i2 | 0)) {
  return;
 }
 HEAP32[i3 >> 2] = i2;
 __ZN7WebCore4Page30setNeedsRecalcStyleInAllFramesEv(HEAP32[i1 + 4 >> 2] | 0);
 return;
}
function __ZN7WebCore8Settings18setDefaultFontSizeEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 84 | 0;
 if ((HEAP32[i3 >> 2] | 0) == (i2 | 0)) {
  return;
 }
 HEAP32[i3 >> 2] = i2;
 __ZN7WebCore4Page30setNeedsRecalcStyleInAllFramesEv(HEAP32[i1 + 4 >> 2] | 0);
 return;
}
function __ZN7WebCore8Settings27setTiledBackingStoreEnabledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 196 | 0;
 HEAP8[i3] = HEAP8[i3] & -2 | i2 & 1;
 __ZN7WebCore5Frame27setTiledBackingStoreEnabledEb(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 60 >> 2] | 0, i2);
 return;
}
function __ZN7WebCore8Settings17setPluginsEnabledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 195 | 0;
 i1 = HEAP8[i3] | 0;
 if ((i1 & 1 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i1 & -2 | i2 & 1;
 __ZN7WebCore4Page14refreshPluginsEb(0);
 return;
}
function __ZN7WebCore8Settings30setShowTiledScrollingIndicatorEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 195 | 0;
 i1 = HEAP8[i3] | 0;
 if (((i1 & 255) >>> 7 & 255 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i1 & 127 | (i2 & 1) << 7;
 return;
}
function __ZN7WebCore8Settings27setLoadsImagesAutomaticallyEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 194 | 0;
 HEAP8[i3] = HEAP8[i3] & -33 | (i2 & 1) << 5;
 __ZN7WebCore9TimerBase5startEdd(i1 + 208 | 0, +0, +0);
 return;
}
function __ZN7WebCore8Settings16setImagesEnabledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 194 | 0;
 HEAP8[i3] = HEAP8[i3] & 127 | (i2 & 1) << 7;
 __ZN7WebCore9TimerBase5startEdd(i1 + 208 | 0, +0, +0);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore8Settings20pictographFontFamilyE11UScriptCode(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore19FontGenericFamilies20pictographFontFamilyE11UScriptCode(HEAP32[i1 + 60 >> 2] | 0, i2) | 0;
}
function __ZNK7WebCore8Settings19sansSerifFontFamilyE11UScriptCode(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore19FontGenericFamilies19sansSerifFontFamilyE11UScriptCode(HEAP32[i1 + 60 >> 2] | 0, i2) | 0;
}
function __ZNK7WebCore8Settings18standardFontFamilyE11UScriptCode(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore19FontGenericFamilies18standardFontFamilyE11UScriptCode(HEAP32[i1 + 60 >> 2] | 0, i2) | 0;
}
function __ZN7WebCore8Settings6createEPNS_4PageE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN3WTF10fastMallocEj(272) | 0;
 __ZN7WebCore8SettingsC2EPNS_4PageE(i3, i2);
 HEAP32[i1 >> 2] = i3;
 return;
}
function __ZNK7WebCore8Settings17fantasyFontFamilyE11UScriptCode(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore19FontGenericFamilies17fantasyFontFamilyE11UScriptCode(HEAP32[i1 + 60 >> 2] | 0, i2) | 0;
}
function __ZNK7WebCore8Settings17cursiveFontFamilyE11UScriptCode(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore19FontGenericFamilies17cursiveFontFamilyE11UScriptCode(HEAP32[i1 + 60 >> 2] | 0, i2) | 0;
}
function __ZNK7WebCore8Settings15serifFontFamilyE11UScriptCode(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore19FontGenericFamilies15serifFontFamilyE11UScriptCode(HEAP32[i1 + 60 >> 2] | 0, i2) | 0;
}
function __ZNK7WebCore8Settings15fixedFontFamilyE11UScriptCode(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore19FontGenericFamilies15fixedFontFamilyE11UScriptCode(HEAP32[i1 + 60 >> 2] | 0, i2) | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_did + 2;
}
function __ZN7WebCore8Settings33setAggressiveTileRetentionEnabledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 196 | 0;
 HEAP8[i3] = HEAP8[i3] & -9 | (i2 & 1) << 3;
 return;
}
function __ZN7WebCore8Settings32setNeedsAdobeFrameReloadingQuirkEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 195 | 0;
 HEAP8[i3] = HEAP8[i3] & -5 | (i2 & 1) << 2;
 return;
}
function __ZN7WebCore8Settings27setJavaEnabledForLocalFilesEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 194 | 0;
 HEAP8[i3] = HEAP8[i3] & -17 | (i2 & 1) << 4;
 return;
}
function __ZN7WebCore8Settings28setDOMTimerAlignmentIntervalEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 __ZN7WebCore4Page25setTimerAlignmentIntervalEd(HEAP32[i1 + 4 >> 2] | 0, d2);
 return;
}
function __ZN7WebCore8Settings22setMinDOMTimerIntervalEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 __ZN7WebCore4Page23setMinimumTimerIntervalEd(HEAP32[i1 + 4 >> 2] | 0, d2);
 return;
}
function __ZN7WebCore8Settings14setJavaEnabledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 194 | 0;
 HEAP8[i3] = HEAP8[i3] & -9 | (i2 & 1) << 3;
 return;
}
function __ZNK7WebCore8Settings25domTimerAlignmentIntervalEv(i1) {
 i1 = i1 | 0;
 return +(+__ZNK7WebCore4Page22timerAlignmentIntervalEv(HEAP32[i1 + 4 >> 2] | 0));
}
function __ZN7WebCore8Settings19minDOMTimerIntervalEv(i1) {
 i1 = i1 | 0;
 return +(+__ZNK7WebCore4Page20minimumTimerIntervalEv(HEAP32[i1 + 4 >> 2] | 0));
}
function __ZN7WebCore8Settings17setLayoutIntervalEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 68 >> 2] = (i2 | 0) < 250 ? 250 : i2;
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
function __ZN7WebCore8Settings45setShouldRespectPriorityInCSSAttributeSettersEb(i1) {
 i1 = i1 | 0;
 HEAP8[H_BASE + 72 | 0] = i1 & 1;
 return;
}
function __ZN7WebCore5TimerINS_8SettingsEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function __ZN7WebCore8Settings38setLowPowerVideoAudioBufferSizeEnabledEb(i1) {
 i1 = i1 | 0;
 HEAP8[H_BASE + 80 | 0] = i1 & 1;
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore8Settings38setHiddenPageDOMTimerAlignmentIntervalEd(d1) {
 d1 = +d1;
 HEAPF64[H_BASE + 48 >> 3] = d1;
 return;
}
function __ZN7WebCore8Settings35setDefaultDOMTimerAlignmentIntervalEd(d1) {
 d1 = +d1;
 HEAPF64[H_BASE + 56 >> 3] = d1;
 return;
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
function __ZN7WebCore8Settings42shouldRespectPriorityInCSSAttributeSettersEv() {
 return (HEAP8[H_BASE + 72 | 0] & 1) != 0 | 0;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function __ZNK7WebCore8Settings17fontRenderingModeEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 192 >> 2] | 0) >>> 28 & 1 | 0;
}
function dynCall_did(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return +FUNCTION_TABLE_did[i1 & 3](i2 | 0, +d3);
}
function __ZN7WebCore8Settings29setDefaultMinDOMTimerIntervalEd(d1) {
 d1 = +d1;
 HEAPF64[H_BASE + 64 >> 3] = d1;
 return;
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function __ZN7WebCore8Settings24setUsesOverlayScrollbarsEb(i1) {
 i1 = i1 | 0;
 HEAP8[H_BASE + 88 | 0] = i1 & 1;
 return;
}
function __ZN7WebCore8Settings24setMockScrollbarsEnabledEb(i1) {
 i1 = i1 | 0;
 HEAP8[H_BASE + 96 | 0] = i1 & 1;
 return;
}
function __ZN7WebCore8Settings35hiddenPageDOMTimerAlignmentIntervalEv() {
 return +(+HEAPF64[H_BASE + 48 >> 3]);
}
function __ZN7WebCore8Settings32defaultDOMTimerAlignmentIntervalEv() {
 return +(+HEAPF64[H_BASE + 56 >> 3]);
}
function __ZN7WebCore5TimerINS_8SettingsEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 return;
}
function __ZN7WebCore8Settings21usesOverlayScrollbarsEv() {
 return (HEAP8[H_BASE + 88 | 0] & 1) != 0 | 0;
}
function __ZN7WebCore8Settings21mockScrollbarsEnabledEv() {
 return (HEAP8[H_BASE + 96 | 0] & 1) != 0 | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function __ZN7WebCore8Settings26defaultMinDOMTimerIntervalEv() {
 return +(+HEAPF64[H_BASE + 64 >> 3]);
}
function __ZNK7WebCore9TimerBase15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +d2;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function __ZN7WebCore8Settings43shouldEnableScreenFontSubstitutionByDefaultEv() {
 return 1;
}
function __ZN7WebCore8Settings29initializeDefaultFontFamiliesEv(i1) {
 i1 = i1 | 0;
 return;
}
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
 return 0;
}
function b0(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(0);
 return +0;
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
function b4() {
 abort(4);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_did = [b0,b0,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore5TimerINS_8SettingsEED0Ev,b1,__ZN7WebCore5TimerINS_8SettingsEED1Ev,b1,__ZN7WebCore5TimerINS_8SettingsEE5firedEv,b1,__ZN7WebCore8SettingsD2Ev,b1,b1,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore8SettingsC2EPNS_4PageE,b2,__ZN7WebCore8Settings30imageLoadingSettingsTimerFiredEPNS_5TimerIS0_EE,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE": __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore8Settings21setStandardFontFamilyERKN3WTF12AtomicStringE11UScriptCode","__ZN7WebCore8Settings19minDOMTimerIntervalEv","__ZN7WebCore8Settings24setMockScrollbarsEnabledEb","__ZN7WebCore8Settings28setDOMTimerAlignmentIntervalEd","__ZN7WebCore8Settings22setMinDOMTimerIntervalEd","__ZN7WebCore8Settings38setLowPowerVideoAudioBufferSizeEnabledEb","__ZN7WebCore8Settings43shouldEnableScreenFontSubstitutionByDefaultEv","_strlen","_memset","__ZN7WebCore8Settings25setMinimumLogicalFontSizeEi","__ZN7WebCore8Settings18setSerifFontFamilyERKN3WTF12AtomicStringE11UScriptCode","__ZN7WebCore8Settings29initializeDefaultFontFamiliesEv","__ZN7WebCore8Settings26defaultMinDOMTimerIntervalEv","__ZN7WebCore8Settings18setFixedFontFamilyERKN3WTF12AtomicStringE11UScriptCode","__ZNK7WebCore8Settings15fixedFontFamilyE11UScriptCode","__ZNK7WebCore9TimerBase15alignedFireTimeEd","__ZN7WebCore8Settings35setDefaultDOMTimerAlignmentIntervalEd","__ZN7WebCore8Settings38setSimpleLineLayoutDebugBordersEnabledEb","__ZN7WebCore8Settings27setTiledBackingStoreEnabledEb","__ZN7WebCore8Settings21setShowRepaintCounterEb","__ZN7WebCore8Settings32setAcceleratedCompositingEnabledEb","__ZN7WebCore8Settings16setImagesEnabledEb","__ZN7WebCore8Settings14setJavaEnabledEb","__ZN7WebCore8Settings20setFantasyFontFamilyERKN3WTF12AtomicStringE11UScriptCode","__ZN7WebCore8Settings27setJavaEnabledForLocalFilesEb","__ZN7WebCore19FontGenericFamiliesD2Ev","__ZNK7WebCore8Settings17cursiveFontFamilyE11UScriptCode","__ZN7WebCore8Settings21usesOverlayScrollbarsEv","__ZN7WebCore8Settings32setScreenFontSubstitutionEnabledEb","__ZN7WebCore8Settings24setTextAreasAreResizableEb","__ZN7WebCore8Settings30setShowTiledScrollingIndicatorEb","__ZN7WebCore8Settings33setAggressiveTileRetentionEnabledEb","__ZN7WebCore8Settings41setAcceleratedCompositedAnimationsEnabledEb","__ZN7WebCore8Settings29setAuthorAndUserStylesEnabledEb","__ZN7WebCore8Settings42shouldRespectPriorityInCSSAttributeSettersEv","__ZN7WebCore8Settings30imageLoadingSettingsTimerFiredEPNS_5TimerIS0_EE","__ZN7WebCore8Settings22setSansSerifFontFamilyERKN3WTF12AtomicStringE11UScriptCode","__ZN7WebCore8Settings29setDefaultMinDOMTimerIntervalEd","__ZN7WebCore8Settings19setShowDebugBordersEb","__ZN7WebCore8Settings38setHiddenPageDOMTimerAlignmentIntervalEd","__ZN7WebCore5TimerINS_8SettingsEED1Ev","__ZN7WebCore8Settings32defaultDOMTimerAlignmentIntervalEv","__ZN7WebCore8Settings42setHiddenPageCSSAnimationSuspensionEnabledEb","__ZN7WebCore8Settings17setPluginsEnabledEb","__ZNK7WebCore8Settings19sansSerifFontFamilyE11UScriptCode","__ZN7WebCore8Settings21mockScrollbarsEnabledEv","__ZN7WebCore8Settings25setPrivateBrowsingEnabledEb","__ZNK7WebCore8Settings17fontRenderingModeEv","__ZN7WebCore8Settings18setDefaultFontSizeEi","__ZN7WebCore8Settings27setLoadsImagesAutomaticallyEb","__ZN7WebCore8Settings25setUserStyleSheetLocationERKNS_3URLE","__ZN7WebCore8SettingsD2Ev","__ZN7WebCore8SettingsC2EPNS_4PageE","__ZN7WebCore5TimerINS_8SettingsEED0Ev","__ZN7WebCore8Settings20setFontRenderingModeENS_17FontRenderingModeE","__ZN7WebCore8Settings37setScrollingPerformanceLoggingEnabledEb","__ZN7WebCore8Settings23setDefaultFixedFontSizeEi","__ZN7WebCore8Settings45setShouldRespectPriorityInCSSAttributeSettersEb","__ZN7WebCore8Settings6createEPNS_4PageE","__ZN7WebCore8Settings38setHiddenPageDOMTimerThrottlingEnabledEb","__ZN7WebCore8Settings26setSimpleLineLayoutEnabledEb","__ZNK7WebCore8Settings17fantasyFontFamilyE11UScriptCode","__ZNK7WebCore8Settings18standardFontFamilyE11UScriptCode","__ZN7WebCore8Settings17setLayoutIntervalEi","__ZNK7WebCore8Settings20pictographFontFamilyE11UScriptCode","__ZN7WebCore8Settings35hiddenPageDOMTimerAlignmentIntervalEv","__ZN7WebCore5TimerINS_8SettingsEE5firedEv","__ZNK7WebCore8Settings25domTimerAlignmentIntervalEv","__ZN7WebCore8Settings16setUsesPageCacheEb","_memcpy","__ZN7WebCore8Settings16setScriptEnabledEb","__ZN7WebCore8Settings24setStorageBlockingPolicyENS_14SecurityOrigin21StorageBlockingPolicyE","__ZN7WebCore8Settings33setFontFallbackPrefersPictographsEb","__ZN7WebCore8Settings24setDNSPrefetchingEnabledEb","__ZNK7WebCore8Settings15serifFontFamilyE11UScriptCode","__ZN7WebCore8Settings24setUsesOverlayScrollbarsEb","__ZN7WebCore8Settings18setMinimumFontSizeEi","__ZN7WebCore8Settings20setMediaTypeOverrideERKN3WTF6StringE","__ZN7WebCore8Settings20setCursiveFontFamilyERKN3WTF12AtomicStringE11UScriptCode","__ZN7WebCore8Settings32setNeedsAdobeFrameReloadingQuirkEb","__ZN7WebCore8Settings23setPictographFontFamilyERKN3WTF12AtomicStringE11UScriptCode"]

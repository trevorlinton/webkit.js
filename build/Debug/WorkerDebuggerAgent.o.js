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
H_BASE = parentModule["_malloc"](512 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 512;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore19WorkerDebuggerAgentC1EPNS_19InstrumentingAgentsEPNS_17WorkerGlobalScopeEPN9Inspector21InjectedScriptManagerE;
var __ZN7WebCore19WorkerDebuggerAgentD1Ev;
/* memory initializer */ allocate([69,120,101,99,117,116,105,111,110,32,99,111,110,116,101,120,116,32,105,100,32,105,115,32,110,111,116,32,115,117,112,112,111,114,116,101,100,32,102,111,114,32,119,111,114,107,101,114,115,32,97,115,32,116,104,101,114,101,32,105,115,32,111,110,108,121,32,111,110,101,32,101,120,101,99,117,116,105,111,110,32,99,111,110,116,101,120,116,46,0,0,0,0,0,0,0,100,101,98,117,103,103,101,114,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8) {
  try {
    Module["dynCall_viiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8);
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
function invoke_viiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11) {
  try {
    Module["dynCall_viiiiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11);
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
function invoke_viiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9) {
  try {
    Module["dynCall_viiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    Module["dynCall_viiiiii"](index,a1,a2,a3,a4,a5,a6);
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
function invoke_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    Module["dynCall_viiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
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
  var __ZTVN7WebCore23WorkerScriptDebugServerE=env.__ZTVN7WebCore23WorkerScriptDebugServerE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore19WorkerDebuggerAgentE=(H_BASE+120)|0;
  var __ZN7WebCore19WorkerDebuggerAgent16debuggerTaskModeE=(H_BASE+480)|0;
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
  var invoke_viiiiiiii=env.invoke_viiiiiiii;
  var invoke_viiii=env.invoke_viiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_viiiiiiiiiii=env.invoke_viiiiiiiiiii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiiiiii=env.invoke_viiiiiiiii;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiiiiii=env.invoke_viiiiiii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function runPostSets() {
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_viii + 38;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_viii + 26;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_viiiiiiiii + 2;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_viiiiii + 8;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_viiiiiii + 2;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_viiiiiii + 8;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_viiiiiiiiiii + 4;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_viiiiii + 6;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_viiiiiiii + 2;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_viiii + 16;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_viii + 32;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_viiiiii + 4;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_viiiiii + 2;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_viii + 24;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_viii + 36;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_viiiiiiiii + 4;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_viiiiii + 12;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_viii + 34;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_viiiiiii + 4;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_viiiiiii + 6;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_viiii + 14;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_viii + 28;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_viiiiiiiiiii + 2;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_viiiiii + 10;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_viiiiiiii + 4;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_viii + 30;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 480 >> 2] = H_BASE + 104;
}
function __ZN3WTF9HashTableIPN7WebCore12WorkerThreadENS_12KeyValuePairIS3_PNS1_19WorkerDebuggerAgentEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EES3_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
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
  __ZN3WTF9HashTableIPN7WebCore12WorkerThreadENS_12KeyValuePairIS3_PNS1_19WorkerDebuggerAgentEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i8, 0) | 0;
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
   i14 = 11;
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
     i14 = 8;
     break;
    }
    i21 = (i20 | 0) == -1 ? i19 : i17;
    i22 = (i16 | 0) == 0 ? i15 : i16;
    i23 = i22 + i18 & i6;
    i24 = i10 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i14 = 10;
     break;
    } else {
     i16 = i22;
     i17 = i21;
     i18 = i23;
     i19 = i24;
     i20 = i25;
    }
   }
   if ((i14 | 0) == 10) {
    if ((i21 | 0) == 0) {
     i13 = i24;
     i14 = 11;
     break;
    }
    i20 = i21;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i26 = i21;
    i27 = HEAP32[i3 >> 2] | 0;
    i28 = i20;
    break;
   } else if ((i14 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i14 | 0) == 11) {
  i26 = i13;
  i27 = i8;
  i28 = i2 + 16 | 0;
 }
 HEAP32[i26 >> 2] = i27;
 HEAP32[i26 + 4 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i27 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i27;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i28 >> 2] | 0) + i27 << 1 | 0) < (i8 | 0)) {
  i29 = i26;
  i30 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i31 = 8;
  } else {
   i28 = i8 << 1;
   i31 = (i27 * 6 & -1 | 0) < (i28 | 0) ? i8 : i28;
  }
  i28 = __ZN3WTF9HashTableIPN7WebCore12WorkerThreadENS_12KeyValuePairIS3_PNS1_19WorkerDebuggerAgentEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i31, i26) | 0;
  i29 = i28;
  i30 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i30 << 3) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore12WorkerThreadENS_12KeyValuePairIS3_PNS1_19WorkerDebuggerAgentEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
 if ((i5 | 0) == 0) {
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
  i2 = i7 + (i11 << 3) | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
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
   L7 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 5;
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
       break L7;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 3) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 5;
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
   if ((i23 | 0) == 5) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i16 = i2;
   i17 = i30;
   i13 = HEAP32[i16 + 4 >> 2] | 0;
   HEAP32[i17 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i17 + 4 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i13 = i11 + 1 | 0;
  if ((i13 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i13;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN7WebCore19WorkerDebuggerAgent37interruptAndDispatchInspectorCommandsEPNS_12WorkerThreadE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 __ZN3WTF36lockAtomicallyInitializedStaticMutexEv();
 if (!(HEAP8[H_BASE + 488 | 0] | 0)) {
  i4 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN3WTF5MutexC1Ev(i4);
  HEAP32[H_BASE + 504 >> 2] = i4;
  HEAP8[H_BASE + 488 | 0] = 1;
 }
 __ZN3WTF38unlockAtomicallyInitializedStaticMutexEv();
 i4 = HEAP32[H_BASE + 504 >> 2] | 0;
 i5 = (i4 | 0) == 0;
 if (!i5) {
  __ZN3WTF5Mutex4lockEv(i4);
 }
 if (HEAP8[H_BASE + 496 | 0] | 0) {
  i6 = HEAP32[H_BASE + 512 >> 2] | 0;
 } else {
  i7 = __ZN3WTF10fastMallocEj(20) | 0;
  i8 = i7;
  _memset(i7 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 512 >> 2] = i8;
  HEAP8[H_BASE + 496 | 0] = 1;
  i6 = i8;
 }
 i8 = HEAP32[i6 + 8 >> 2] | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i6 = i1;
 i9 = i6 + ~(i6 << 15) | 0;
 i6 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i6 >>> 6 ^ i6;
 i6 = i9 + ~(i9 << 11) | 0;
 i9 = i6 >>> 16 ^ i6;
 L11 : do {
  if ((i7 | 0) != 0) {
   i6 = i8 & i9;
   i10 = i7 + (i6 << 3) | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   if ((i11 | 0) == (i1 | 0)) {
    i12 = i10;
   } else {
    i10 = (i9 >>> 23) + ~i9 | 0;
    i13 = i10 << 12 ^ i10;
    i10 = i13 >>> 7 ^ i13;
    i13 = i10 << 2 ^ i10;
    i10 = i13 >>> 20 ^ i13 | 1;
    i13 = 0;
    i14 = i6;
    i6 = i11;
    while (1) {
     if ((i6 | 0) == 0) {
      break L11;
     }
     i11 = (i13 | 0) == 0 ? i10 : i13;
     i15 = i11 + i14 & i8;
     i16 = i7 + (i15 << 3) | 0;
     i17 = HEAP32[i16 >> 2] | 0;
     if ((i17 | 0) == (i1 | 0)) {
      i12 = i16;
      break;
     } else {
      i13 = i11;
      i14 = i15;
      i6 = i17;
     }
    }
   }
   if ((i12 | 0) == 0) {
    break;
   }
   i6 = HEAP32[i12 + 4 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i14 = __ZN3WTF10fastMallocEj(12) | 0;
   i13 = HEAP32[i6 + 360 >> 2] | 0;
   HEAP32[i14 >> 2] = H_BASE + 456;
   HEAP32[i14 + 4 >> 2] = i1;
   HEAP32[i14 + 8 >> 2] = i13;
   i13 = i3 | 0;
   HEAP32[i13 >> 2] = i14;
   __ZN7WebCore23WorkerScriptDebugServer19interruptAndRunTaskEN3WTF10PassOwnPtrINS_17ScriptDebugServer4TaskEEE(i6 + 128 | 0, i3);
   i6 = HEAP32[i13 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
  }
 } while (0);
 if (i5) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i4);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore19WorkerDebuggerAgentC2EPNS_19InstrumentingAgentsEPNS_17WorkerGlobalScopeEPN9Inspector21InjectedScriptManagerE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 __ZN7WebCore22InspectorDebuggerAgentC2EPNS_19InstrumentingAgentsEPN9Inspector21InjectedScriptManagerE(i1 | 0, i2, i4);
 HEAP32[i1 >> 2] = H_BASE + 128;
 HEAP32[i1 + 12 >> 2] = H_BASE + 300;
 HEAP32[i1 + 16 >> 2] = H_BASE + 332;
 __ZN3WTF6StringC1EPKc(i6, HEAP32[H_BASE + 480 >> 2] | 0);
 __ZN7WebCore23WorkerScriptDebugServerC1EPNS_17WorkerGlobalScopeERKN3WTF6StringE(i1 + 128 | 0, i3, i6);
 i4 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i6 = i4 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i6 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i1 + 360 >> 2] = i3;
 __ZN3WTF36lockAtomicallyInitializedStaticMutexEv();
 if (!(HEAP8[H_BASE + 488 | 0] | 0)) {
  i4 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN3WTF5MutexC1Ev(i4);
  HEAP32[H_BASE + 504 >> 2] = i4;
  HEAP8[H_BASE + 488 | 0] = 1;
 }
 __ZN3WTF38unlockAtomicallyInitializedStaticMutexEv();
 i4 = HEAP32[H_BASE + 504 >> 2] | 0;
 i2 = (i4 | 0) == 0;
 if (!i2) {
  __ZN3WTF5Mutex4lockEv(i4);
 }
 if (HEAP8[H_BASE + 496 | 0] | 0) {
  i10 = HEAP32[H_BASE + 512 >> 2] | 0;
 } else {
  i6 = __ZN3WTF10fastMallocEj(20) | 0;
  i11 = i6;
  _memset(i6 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 512 >> 2] = i11;
  HEAP8[H_BASE + 496 | 0] = 1;
  i10 = i11;
 }
 HEAP32[i7 >> 2] = HEAP32[i3 + 264 >> 2];
 HEAP32[i8 >> 2] = i1;
 __ZN3WTF9HashTableIPN7WebCore12WorkerThreadENS_12KeyValuePairIS3_PNS1_19WorkerDebuggerAgentEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EES3_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i9, i10 | 0, i7, i8);
 if ((HEAP8[i9 + 8 | 0] & 1) == 0) {
  HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] = HEAP32[i8 >> 2];
 }
 if (i2) {
  STACKTOP = i5;
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i4);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore19WorkerDebuggerAgentC1EPNS_19InstrumentingAgentsEPNS_17WorkerGlobalScopeEPN9Inspector21InjectedScriptManagerE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 __ZN7WebCore22InspectorDebuggerAgentC2EPNS_19InstrumentingAgentsEPN9Inspector21InjectedScriptManagerE(i1 | 0, i2, i4);
 HEAP32[i1 >> 2] = H_BASE + 128;
 HEAP32[i1 + 12 >> 2] = H_BASE + 300;
 HEAP32[i1 + 16 >> 2] = H_BASE + 332;
 __ZN3WTF6StringC1EPKc(i6, HEAP32[H_BASE + 480 >> 2] | 0);
 __ZN7WebCore23WorkerScriptDebugServerC1EPNS_17WorkerGlobalScopeERKN3WTF6StringE(i1 + 128 | 0, i3, i6);
 i4 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i6 = i4 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i6 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i1 + 360 >> 2] = i3;
 __ZN3WTF36lockAtomicallyInitializedStaticMutexEv();
 if (!(HEAP8[H_BASE + 488 | 0] | 0)) {
  i4 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN3WTF5MutexC1Ev(i4);
  HEAP32[H_BASE + 504 >> 2] = i4;
  HEAP8[H_BASE + 488 | 0] = 1;
 }
 __ZN3WTF38unlockAtomicallyInitializedStaticMutexEv();
 i4 = HEAP32[H_BASE + 504 >> 2] | 0;
 i2 = (i4 | 0) == 0;
 if (!i2) {
  __ZN3WTF5Mutex4lockEv(i4);
 }
 if (HEAP8[H_BASE + 496 | 0] | 0) {
  i10 = HEAP32[H_BASE + 512 >> 2] | 0;
 } else {
  i6 = __ZN3WTF10fastMallocEj(20) | 0;
  i11 = i6;
  _memset(i6 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 512 >> 2] = i11;
  HEAP8[H_BASE + 496 | 0] = 1;
  i10 = i11;
 }
 HEAP32[i7 >> 2] = HEAP32[i3 + 264 >> 2];
 HEAP32[i8 >> 2] = i1;
 __ZN3WTF9HashTableIPN7WebCore12WorkerThreadENS_12KeyValuePairIS3_PNS1_19WorkerDebuggerAgentEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EES3_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i9, i10 | 0, i7, i8);
 if ((HEAP8[i9 + 8 | 0] & 1) == 0) {
  HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] = HEAP32[i8 >> 2];
 }
 if (i2) {
  STACKTOP = i5;
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i4);
 STACKTOP = i5;
 return;
}
function __ZN3WTF7HashMapIPN7WebCore12WorkerThreadEPNS1_19WorkerDebuggerAgentENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS8_IS5_EEE6removeERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 3 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  i2 = i8;
  i9 = i2 + ~(i2 << 15) | 0;
  i2 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i2 >>> 6 ^ i2;
  i2 = i9 + ~(i9 << 11) | 0;
  i9 = i2 >>> 16 ^ i2;
  i2 = i9 & i4;
  i10 = i3 + (i2 << 3) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L4 : do {
   if ((i11 | 0) == (i8 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i2;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L4;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 << 3) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i8 | 0)) {
      i12 = i19;
      break;
     } else {
      i14 = i17;
      i15 = i18;
      i16 = i20;
     }
    }
   }
  } while (0);
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 3) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 3) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN7WebCore12WorkerThreadENS_12KeyValuePairIS3_PNS1_19WorkerDebuggerAgentEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore19WorkerDebuggerAgentD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 128;
 HEAP32[i1 + 12 >> 2] = H_BASE + 300;
 HEAP32[i1 + 16 >> 2] = H_BASE + 332;
 __ZN3WTF36lockAtomicallyInitializedStaticMutexEv();
 if (!(HEAP8[H_BASE + 488 | 0] | 0)) {
  i4 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN3WTF5MutexC1Ev(i4);
  HEAP32[H_BASE + 504 >> 2] = i4;
  HEAP8[H_BASE + 488 | 0] = 1;
 }
 __ZN3WTF38unlockAtomicallyInitializedStaticMutexEv();
 i4 = HEAP32[H_BASE + 504 >> 2] | 0;
 i5 = (i4 | 0) == 0;
 if (!i5) {
  __ZN3WTF5Mutex4lockEv(i4);
 }
 if (HEAP8[H_BASE + 496 | 0] | 0) {
  i6 = HEAP32[H_BASE + 512 >> 2] | 0;
 } else {
  i7 = __ZN3WTF10fastMallocEj(20) | 0;
  i8 = i7;
  _memset(i7 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 512 >> 2] = i8;
  HEAP8[H_BASE + 496 | 0] = 1;
  i6 = i8;
 }
 HEAP32[i3 >> 2] = HEAP32[(HEAP32[i1 + 360 >> 2] | 0) + 264 >> 2];
 __ZN3WTF7HashMapIPN7WebCore12WorkerThreadEPNS1_19WorkerDebuggerAgentENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS8_IS5_EEE6removeERKS3_(i6, i3) | 0;
 if (!i5) {
  __ZN3WTF5Mutex6unlockEv(i4);
 }
 i4 = i1 + 128 | 0;
 HEAP32[i4 >> 2] = __ZTVN7WebCore23WorkerScriptDebugServerE + 8;
 i5 = HEAP32[i1 + 352 >> 2] | 0;
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
 i5 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i9 = i4 | 0;
  __ZN7WebCore17ScriptDebugServerD2Ev(i9);
  i10 = i1 | 0;
  __ZN7WebCore22InspectorDebuggerAgentD2Ev(i10);
  STACKTOP = i2;
  return;
 }
 __ZN3WTF8fastFreeEPv(i5);
 i9 = i4 | 0;
 __ZN7WebCore17ScriptDebugServerD2Ev(i9);
 i10 = i1 | 0;
 __ZN7WebCore22InspectorDebuggerAgentD2Ev(i10);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore19WorkerDebuggerAgentD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 128;
 HEAP32[i1 + 12 >> 2] = H_BASE + 300;
 HEAP32[i1 + 16 >> 2] = H_BASE + 332;
 __ZN3WTF36lockAtomicallyInitializedStaticMutexEv();
 if (!(HEAP8[H_BASE + 488 | 0] | 0)) {
  i4 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN3WTF5MutexC1Ev(i4);
  HEAP32[H_BASE + 504 >> 2] = i4;
  HEAP8[H_BASE + 488 | 0] = 1;
 }
 __ZN3WTF38unlockAtomicallyInitializedStaticMutexEv();
 i4 = HEAP32[H_BASE + 504 >> 2] | 0;
 i5 = (i4 | 0) == 0;
 if (!i5) {
  __ZN3WTF5Mutex4lockEv(i4);
 }
 if (HEAP8[H_BASE + 496 | 0] | 0) {
  i6 = HEAP32[H_BASE + 512 >> 2] | 0;
 } else {
  i7 = __ZN3WTF10fastMallocEj(20) | 0;
  i8 = i7;
  _memset(i7 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 512 >> 2] = i8;
  HEAP8[H_BASE + 496 | 0] = 1;
  i6 = i8;
 }
 HEAP32[i3 >> 2] = HEAP32[(HEAP32[i1 + 360 >> 2] | 0) + 264 >> 2];
 __ZN3WTF7HashMapIPN7WebCore12WorkerThreadEPNS1_19WorkerDebuggerAgentENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS8_IS5_EEE6removeERKS3_(i6, i3) | 0;
 if (!i5) {
  __ZN3WTF5Mutex6unlockEv(i4);
 }
 i4 = i1 + 128 | 0;
 HEAP32[i4 >> 2] = __ZTVN7WebCore23WorkerScriptDebugServerE + 8;
 i5 = HEAP32[i1 + 352 >> 2] | 0;
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
 i5 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i9 = i4 | 0;
  __ZN7WebCore17ScriptDebugServerD2Ev(i9);
  i10 = i1 | 0;
  __ZN7WebCore22InspectorDebuggerAgentD2Ev(i10);
  STACKTOP = i2;
  return;
 }
 __ZN3WTF8fastFreeEPv(i5);
 i9 = i4 | 0;
 __ZN7WebCore17ScriptDebugServerD2Ev(i9);
 i10 = i1 | 0;
 __ZN7WebCore22InspectorDebuggerAgentD2Ev(i10);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore19WorkerDebuggerAgent21injectedScriptForEvalEPN3WTF6StringEPKi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 if ((i4 | 0) == 0) {
  i4 = __ZN7WebCore30execStateFromWorkerGlobalScopeEPNS_17WorkerGlobalScopeE(HEAP32[i2 + 360 >> 2] | 0) | 0;
  __ZN9Inspector21InjectedScriptManager17injectedScriptForEPN3JSC9ExecStateE(i1, HEAP32[i2 + 20 >> 2] | 0, i4);
  STACKTOP = i5;
  return;
 }
 __ZN3WTF6StringC1EPKc(i6, H_BASE + 8 | 0);
 i4 = i6 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i6;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i6 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i4 >> 2] | 0;
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
 __ZN9Inspector14InjectedScriptC1Ev(i1);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore12_GLOBAL__N_124RunInspectorCommandsTask3runEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 4 | 0;
 i5 = i1 + 8 | 0;
 i1 = i3 | 0;
 while (1) {
  i6 = (HEAP32[i4 >> 2] | 0) + 12 | 0;
  i7 = HEAP32[i5 >> 2] | 0;
  __ZN3WTF6StringC1EPKc(i3, HEAP32[H_BASE + 480 >> 2] | 0);
  i8 = (__ZN7WebCore13WorkerRunLoop9runInModeEPNS_17WorkerGlobalScopeERKN3WTF6StringENS0_8WaitModeE(i6, i7, i3, 1) | 0) == 2;
  i7 = HEAP32[i1 >> 2] | 0;
  do {
   if ((i7 | 0) != 0) {
    i6 = i7 | 0;
    i9 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i9 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i7);
     break;
    } else {
     HEAP32[i6 >> 2] = i9;
     break;
    }
   }
  } while (0);
  if (!i8) {
   break;
  }
 }
 STACKTOP = i2;
 return;
}
function viiiiiiiiiii___ZThn16_N7WebCore22InspectorDebuggerAgent19evaluateOnCallFrameEPN3WTF6StringERKS2_S5_PS4_PKbS8_S8_S8_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSB_9OptOutputIbEE__wrapper(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 __ZThn16_N7WebCore22InspectorDebuggerAgent19evaluateOnCallFrameEPN3WTF6StringERKS2_S5_PS4_PKbS8_S8_S8_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSB_9OptOutputIbEE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0);
}
function viiiiiiiiiii___ZN7WebCore22InspectorDebuggerAgent19evaluateOnCallFrameEPN3WTF6StringERKS2_S5_PS4_PKbS8_S8_S8_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSB_9OptOutputIbEE__wrapper(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 __ZN7WebCore22InspectorDebuggerAgent19evaluateOnCallFrameEPN3WTF6StringERKS2_S5_PS4_PKbS8_S8_S8_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSB_9OptOutputIbEE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0);
}
function viiiiiiiii___ZThn16_N7WebCore22InspectorDebuggerAgent18setBreakpointByUrlEPN3WTF6StringEiPKS2_S5_PKiPKNS1_6RefPtrIN9Inspector15InspectorObjectEEES3_RNS8_INS9_11TypeBuilder5ArrayINSE_8Debugger8LocationEEEEE__wrapper(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 __ZThn16_N7WebCore22InspectorDebuggerAgent18setBreakpointByUrlEPN3WTF6StringEiPKS2_S5_PKiPKNS1_6RefPtrIN9Inspector15InspectorObjectEEES3_RNS8_INS9_11TypeBuilder5ArrayINSE_8Debugger8LocationEEEEE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0);
}
function viiiiiiiii___ZN7WebCore22InspectorDebuggerAgent18setBreakpointByUrlEPN3WTF6StringEiPKS2_S5_PKiPKNS1_6RefPtrIN9Inspector15InspectorObjectEEES3_RNS8_INS9_11TypeBuilder5ArrayINSE_8Debugger8LocationEEEEE__wrapper(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 __ZN7WebCore22InspectorDebuggerAgent18setBreakpointByUrlEPN3WTF6StringEiPKS2_S5_PKiPKNS1_6RefPtrIN9Inspector15InspectorObjectEEES3_RNS8_INS9_11TypeBuilder5ArrayINSE_8Debugger8LocationEEEEE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0);
}
function viiiiiii___ZThn16_N7WebCore22InspectorDebuggerAgent15setScriptSourceEPN3WTF6StringERKS2_S5_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_8Debugger9CallFrameEEEEERNS8_INS9_15InspectorObjectEEE__wrapper(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 __ZThn16_N7WebCore22InspectorDebuggerAgent15setScriptSourceEPN3WTF6StringERKS2_S5_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_8Debugger9CallFrameEEEEERNS8_INS9_15InspectorObjectEEE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function viiiiiii___ZN7WebCore22InspectorDebuggerAgent15setScriptSourceEPN3WTF6StringERKS2_S5_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_8Debugger9CallFrameEEEEERNS8_INS9_15InspectorObjectEEE__wrapper(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 __ZN7WebCore22InspectorDebuggerAgent15setScriptSourceEPN3WTF6StringERKS2_S5_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_8Debugger9CallFrameEEEEERNS8_INS9_15InspectorObjectEEE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function viiiiiiii___ZThn16_N7WebCore22InspectorDebuggerAgent9runScriptEPN3WTF6StringERKS2_PKiPS4_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSD_9OptOutputIbEE__wrapper(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 __ZThn16_N7WebCore22InspectorDebuggerAgent9runScriptEPN3WTF6StringERKS2_PKiPS4_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSD_9OptOutputIbEE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0);
}
function viiiiiiii___ZN7WebCore22InspectorDebuggerAgent9runScriptEPN3WTF6StringERKS2_PKiPS4_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSD_9OptOutputIbEE__wrapper(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 __ZN7WebCore22InspectorDebuggerAgent9runScriptEPN3WTF6StringERKS2_PKiPS4_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSD_9OptOutputIbEE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0);
}
function viiiiiii___ZThn16_N7WebCore22InspectorDebuggerAgent15searchInContentEPN3WTF6StringERKS2_S5_PKbS7_RNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_12GenericTypes11SearchMatchEEEEE__wrapper(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 __ZThn16_N7WebCore22InspectorDebuggerAgent15searchInContentEPN3WTF6StringERKS2_S5_PKbS7_RNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_12GenericTypes11SearchMatchEEEEE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function viiiiiii___ZN7WebCore22InspectorDebuggerAgent15searchInContentEPN3WTF6StringERKS2_S5_PKbS7_RNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_12GenericTypes11SearchMatchEEEEE__wrapper(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 __ZN7WebCore22InspectorDebuggerAgent15searchInContentEPN3WTF6StringERKS2_S5_PKbS7_RNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_12GenericTypes11SearchMatchEEEEE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
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
function viiiiii___ZThn16_N7WebCore22InspectorDebuggerAgent13setBreakpointEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEEPS8_S3_RNS4_INS5_11TypeBuilder8Debugger8LocationEEE__wrapper(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 __ZThn16_N7WebCore22InspectorDebuggerAgent13setBreakpointEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEEPS8_S3_RNS4_INS5_11TypeBuilder8Debugger8LocationEEE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function viiiiii___ZN7WebCore22InspectorDebuggerAgent13setBreakpointEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEEPS8_S3_RNS4_INS5_11TypeBuilder8Debugger8LocationEEE__wrapper(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 __ZN7WebCore22InspectorDebuggerAgent13setBreakpointEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEEPS8_S3_RNS4_INS5_11TypeBuilder8Debugger8LocationEEE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function viiiiii___ZThn16_N7WebCore22InspectorDebuggerAgent13compileScriptEPN3WTF6StringERKS2_S5_PN9Inspector11TypeBuilder9OptOutputIS2_EESA___wrapper(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 __ZThn16_N7WebCore22InspectorDebuggerAgent13compileScriptEPN3WTF6StringERKS2_S5_PN9Inspector11TypeBuilder9OptOutputIS2_EESA_(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
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
function __ZN7WebCore19WorkerDebuggerAgent6createEPNS_19InstrumentingAgentsEPNS_17WorkerGlobalScopeEPN9Inspector21InjectedScriptManagerE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = __ZN3WTF10fastMallocEj(368) | 0;
 __ZN7WebCore19WorkerDebuggerAgentC2EPNS_19InstrumentingAgentsEPNS_17WorkerGlobalScopeEPN9Inspector21InjectedScriptManagerE(i5, i2, i3, i4);
 HEAP32[i1 >> 2] = i5;
 return;
}
function viiii___ZThn16_N7WebCore22InspectorDebuggerAgent18getFunctionDetailsEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder8Debugger15FunctionDetailsEEE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZThn16_N7WebCore22InspectorDebuggerAgent18getFunctionDetailsEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder8Debugger15FunctionDetailsEEE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiiiii___ZN7WebCore22InspectorDebuggerAgent13compileScriptEPN3WTF6StringERKS2_S5_PN9Inspector11TypeBuilder9OptOutputIS2_EESA___wrapper(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 __ZN7WebCore22InspectorDebuggerAgent13compileScriptEPN3WTF6StringERKS2_S5_PN9Inspector11TypeBuilder9OptOutputIS2_EESA_(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function viiii___ZN7WebCore22InspectorDebuggerAgent18getFunctionDetailsEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder8Debugger15FunctionDetailsEEE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore22InspectorDebuggerAgent18getFunctionDetailsEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder8Debugger15FunctionDetailsEEE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function dynCall_viiiiiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 FUNCTION_TABLE_viiiiiiiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0, i12 | 0);
}
function viii___ZN7WebCore22InspectorDebuggerAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore22InspectorDebuggerAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE(i1 | 0, i2 | 0, i3 | 0);
}
function viiiiii___ZThn12_N7WebCore22InspectorDebuggerAgent19failedToParseSourceERKN3WTF6StringES4_iiS4___wrapper(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 __ZThn12_N7WebCore22InspectorDebuggerAgent19failedToParseSourceERKN3WTF6StringES4_iiS4_(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function viii___ZThn16_N7WebCore22InspectorDebuggerAgent18continueToLocationEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZThn16_N7WebCore22InspectorDebuggerAgent18continueToLocationEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEE(i1 | 0, i2 | 0, i3 | 0);
}
function viiiiii___ZN7WebCore22InspectorDebuggerAgent19failedToParseSourceERKN3WTF6StringES4_iiS4___wrapper(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 __ZN7WebCore22InspectorDebuggerAgent19failedToParseSourceERKN3WTF6StringES4_iiS4_(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function viii___ZN7WebCore22InspectorDebuggerAgent18continueToLocationEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore22InspectorDebuggerAgent18continueToLocationEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEE(i1 | 0, i2 | 0, i3 | 0);
}
function viiii___ZThn12_N7WebCore22InspectorDebuggerAgent8didPauseEPN3JSC9ExecStateERKN10Deprecated11ScriptValueES7___wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZThn12_N7WebCore22InspectorDebuggerAgent8didPauseEPN3JSC9ExecStateERKN10Deprecated11ScriptValueES7_(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiii___ZN7WebCore22InspectorDebuggerAgent8didPauseEPN3JSC9ExecStateERKN10Deprecated11ScriptValueES7___wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore22InspectorDebuggerAgent8didPauseEPN3JSC9ExecStateERKN10Deprecated11ScriptValueES7_(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function dynCall_viiiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 FUNCTION_TABLE_viiiiiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0);
}
function viii___ZThn16_N7WebCore22InspectorDebuggerAgent45supportsSeparateScriptCompilationAndExecutionEPN3WTF6StringEPb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZThn16_N7WebCore22InspectorDebuggerAgent45supportsSeparateScriptCompilationAndExecutionEPN3WTF6StringEPb(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore22InspectorDebuggerAgent45supportsSeparateScriptCompilationAndExecutionEPN3WTF6StringEPb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore22InspectorDebuggerAgent45supportsSeparateScriptCompilationAndExecutionEPN3WTF6StringEPb(i1 | 0, i2 | 0, i3 | 0);
}
function viiii___ZThn16_N7WebCore22InspectorDebuggerAgent15getScriptSourceEPN3WTF6StringERKS2_S3___wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZThn16_N7WebCore22InspectorDebuggerAgent15getScriptSourceEPN3WTF6StringERKS2_S3_(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viii___ZThn12_N7WebCore22InspectorDebuggerAgent14didParseSourceEjRKNS_19ScriptDebugListener6ScriptE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZThn12_N7WebCore22InspectorDebuggerAgent14didParseSourceEjRKNS_19ScriptDebugListener6ScriptE(i1 | 0, i2 | 0, i3 | 0);
}
function dynCall_viiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 FUNCTION_TABLE_viiiiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0);
}
function viiii___ZN7WebCore22InspectorDebuggerAgent15getScriptSourceEPN3WTF6StringERKS2_S3___wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore22InspectorDebuggerAgent15getScriptSourceEPN3WTF6StringERKS2_S3_(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viii___ZN7WebCore22InspectorDebuggerAgent14didParseSourceEjRKNS_19ScriptDebugListener6ScriptE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore22InspectorDebuggerAgent14didParseSourceEjRKNS_19ScriptDebugListener6ScriptE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZThn16_N7WebCore22InspectorDebuggerAgent20setPauseOnExceptionsEPN3WTF6StringERKS2___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZThn16_N7WebCore22InspectorDebuggerAgent20setPauseOnExceptionsEPN3WTF6StringERKS2_(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore19WorkerDebuggerAgent30stopListeningScriptDebugServerEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore23WorkerScriptDebugServer14removeListenerEPNS_19ScriptDebugListenerE(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 116 >> 2] & 3](i1) | 0, i1 + 12 | 0);
 return;
}
function __ZN7WebCore19WorkerDebuggerAgent31startListeningScriptDebugServerEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore23WorkerScriptDebugServer11addListenerEPNS_19ScriptDebugListenerE(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 116 >> 2] & 3](i1) | 0, i1 + 12 | 0);
 return;
}
function viii___ZThn16_N7WebCore22InspectorDebuggerAgent17setOverlayMessageEPN3WTF6StringEPKS2___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZThn16_N7WebCore22InspectorDebuggerAgent17setOverlayMessageEPN3WTF6StringEPKS2_(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZThn16_N7WebCore22InspectorDebuggerAgent20setBreakpointsActiveEPN3WTF6StringEb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZThn16_N7WebCore22InspectorDebuggerAgent20setBreakpointsActiveEPN3WTF6StringEb(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZThn16_N7WebCore22InspectorDebuggerAgent19causesRecompilationEPN3WTF6StringEPb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZThn16_N7WebCore22InspectorDebuggerAgent19causesRecompilationEPN3WTF6StringEPb(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZThn16_N7WebCore22InspectorDebuggerAgent16removeBreakpointEPN3WTF6StringERKS2___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZThn16_N7WebCore22InspectorDebuggerAgent16removeBreakpointEPN3WTF6StringERKS2_(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZThn16_N7WebCore22InspectorDebuggerAgent18canSetScriptSourceEPN3WTF6StringEPb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZThn16_N7WebCore22InspectorDebuggerAgent18canSetScriptSourceEPN3WTF6StringEPb(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore22InspectorDebuggerAgent20setPauseOnExceptionsEPN3WTF6StringERKS2___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore22InspectorDebuggerAgent20setPauseOnExceptionsEPN3WTF6StringERKS2_(i1 | 0, i2 | 0, i3 | 0);
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
 FUNCTION_TABLE_viiiiiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0);
}
function viii___ZN7WebCore22InspectorDebuggerAgent17setOverlayMessageEPN3WTF6StringEPKS2___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore22InspectorDebuggerAgent17setOverlayMessageEPN3WTF6StringEPKS2_(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore22InspectorDebuggerAgent20setBreakpointsActiveEPN3WTF6StringEb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore22InspectorDebuggerAgent20setBreakpointsActiveEPN3WTF6StringEb(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore22InspectorDebuggerAgent19causesRecompilationEPN3WTF6StringEPb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore22InspectorDebuggerAgent19causesRecompilationEPN3WTF6StringEPb(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore22InspectorDebuggerAgent16removeBreakpointEPN3WTF6StringERKS2___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore22InspectorDebuggerAgent16removeBreakpointEPN3WTF6StringERKS2_(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore22InspectorDebuggerAgent18canSetScriptSourceEPN3WTF6StringEPb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore22InspectorDebuggerAgent18canSetScriptSourceEPN3WTF6StringEPb(i1 | 0, i2 | 0, i3 | 0);
}
function dynCall_viiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 FUNCTION_TABLE_viiiiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function b4(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 abort(4);
}
function vii___ZThn16_N7WebCore22InspectorDebuggerAgent8stepOverEPN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZThn16_N7WebCore22InspectorDebuggerAgent8stepOverEPN3WTF6StringE(i1 | 0, i2 | 0);
}
function vii___ZThn16_N7WebCore22InspectorDebuggerAgent8stepIntoEPN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZThn16_N7WebCore22InspectorDebuggerAgent8stepIntoEPN3WTF6StringE(i1 | 0, i2 | 0);
}
function vii___ZThn16_N7WebCore22InspectorDebuggerAgent7stepOutEPN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZThn16_N7WebCore22InspectorDebuggerAgent7stepOutEPN3WTF6StringE(i1 | 0, i2 | 0);
}
function vii___ZThn16_N7WebCore22InspectorDebuggerAgent7disableEPN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZThn16_N7WebCore22InspectorDebuggerAgent7disableEPN3WTF6StringE(i1 | 0, i2 | 0);
}
function vii___ZThn16_N7WebCore22InspectorDebuggerAgent6resumeEPN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZThn16_N7WebCore22InspectorDebuggerAgent6resumeEPN3WTF6StringE(i1 | 0, i2 | 0);
}
function vii___ZThn16_N7WebCore22InspectorDebuggerAgent6enableEPN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZThn16_N7WebCore22InspectorDebuggerAgent6enableEPN3WTF6StringE(i1 | 0, i2 | 0);
}
function vii___ZThn16_N7WebCore22InspectorDebuggerAgent5pauseEPN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZThn16_N7WebCore22InspectorDebuggerAgent5pauseEPN3WTF6StringE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore22InspectorDebuggerAgent8stepOverEPN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore22InspectorDebuggerAgent8stepOverEPN3WTF6StringE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore22InspectorDebuggerAgent8stepIntoEPN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore22InspectorDebuggerAgent8stepIntoEPN3WTF6StringE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore22InspectorDebuggerAgent7stepOutEPN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore22InspectorDebuggerAgent7stepOutEPN3WTF6StringE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore22InspectorDebuggerAgent7disableEPN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore22InspectorDebuggerAgent7disableEPN3WTF6StringE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore22InspectorDebuggerAgent6resumeEPN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore22InspectorDebuggerAgent6resumeEPN3WTF6StringE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore22InspectorDebuggerAgent6enableEPN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore22InspectorDebuggerAgent6enableEPN3WTF6StringE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore22InspectorDebuggerAgent5pauseEPN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore22InspectorDebuggerAgent5pauseEPN3WTF6StringE(i1 | 0, i2 | 0);
}
function __ZThn16_N7WebCore19WorkerDebuggerAgentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 368 + 352 | 0;
 __ZN7WebCore19WorkerDebuggerAgentD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZThn12_N7WebCore19WorkerDebuggerAgentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 368 + 356 | 0;
 __ZN7WebCore19WorkerDebuggerAgentD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function vi___ZN7WebCore22InspectorDebuggerAgent29willDestroyFrontendAndBackendEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22InspectorDebuggerAgent29willDestroyFrontendAndBackendEv(i1 | 0);
}
function b8(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 abort(8);
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 31](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function b0(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 abort(0);
}
function vi___ZThn12_N7WebCore22InspectorDebuggerAgent11didContinueEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZThn12_N7WebCore22InspectorDebuggerAgent11didContinueEv(i1 | 0);
}
function vi___ZN7WebCore22InspectorDebuggerAgent11didContinueEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22InspectorDebuggerAgent11didContinueEv(i1 | 0);
}
function b11(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(11);
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 63](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore19WorkerDebuggerAgentD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19WorkerDebuggerAgentD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function vi___ZN7WebCore22InspectorDebuggerAgent7disableEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22InspectorDebuggerAgent7disableEv(i1 | 0);
}
function vi___ZN7WebCore22InspectorDebuggerAgent6enableEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22InspectorDebuggerAgent6enableEv(i1 | 0);
}
function __ZThn16_N7WebCore19WorkerDebuggerAgentD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19WorkerDebuggerAgentD2Ev(i1 - 368 + 352 | 0);
 return;
}
function __ZThn12_N7WebCore19WorkerDebuggerAgentD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19WorkerDebuggerAgentD2Ev(i1 - 368 + 356 | 0);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function b9(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(9);
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
function __ZN7WebCore12_GLOBAL__N_124RunInspectorCommandsTaskD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore19WorkerDebuggerAgent17scriptDebugServerEv(i1) {
 i1 = i1 | 0;
 return i1 + 128 | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 3](i2 | 0) | 0;
}
function b1(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(1);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZN7WebCore12_GLOBAL__N_124RunInspectorCommandsTaskD2Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN9Inspector18InspectorAgentBase12discardAgentEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore19WorkerDebuggerAgent13unmuteConsoleEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore19WorkerDebuggerAgent11muteConsoleEv(i1) {
 i1 = i1 | 0;
 return;
}
function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
}
function b10(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(10);
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
function b5(i1) {
 i1 = i1 | 0;
 abort(5);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
}
function b7() {
 abort(7);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiiiiii = [b0,b0,viiiiiiii___ZN7WebCore22InspectorDebuggerAgent9runScriptEPN3WTF6StringERKS2_PKiPS4_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSD_9OptOutputIbEE__wrapper,b0,viiiiiiii___ZThn16_N7WebCore22InspectorDebuggerAgent9runScriptEPN3WTF6StringERKS2_PKiPS4_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSD_9OptOutputIbEE__wrapper,b0,b0,b0];
  var FUNCTION_TABLE_viiii = [b1,b1,viiii___ZN7WebCore22InspectorDebuggerAgent18getFunctionDetailsEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder8Debugger15FunctionDetailsEEE__wrapper,b1,viiii___ZThn16_N7WebCore22InspectorDebuggerAgent15getScriptSourceEPN3WTF6StringERKS2_S3___wrapper,b1,__ZN7WebCore19WorkerDebuggerAgentC2EPNS_19InstrumentingAgentsEPNS_17WorkerGlobalScopeEPN9Inspector21InjectedScriptManagerE,b1,viiii___ZN7WebCore22InspectorDebuggerAgent8didPauseEPN3JSC9ExecStateERKN10Deprecated11ScriptValueES7___wrapper,b1,viiii___ZN7WebCore22InspectorDebuggerAgent15getScriptSourceEPN3WTF6StringERKS2_S3___wrapper,b1,viiii___ZThn12_N7WebCore22InspectorDebuggerAgent8didPauseEPN3JSC9ExecStateERKN10Deprecated11ScriptValueES7___wrapper,b1,viiii___ZThn16_N7WebCore22InspectorDebuggerAgent18getFunctionDetailsEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder8Debugger15FunctionDetailsEEE__wrapper,b1,__ZN7WebCore19WorkerDebuggerAgent21injectedScriptForEvalEPN3WTF6StringEPKi,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZThn16_N7WebCore19WorkerDebuggerAgentD0Ev,b2,vi___ZN7WebCore22InspectorDebuggerAgent29willDestroyFrontendAndBackendEv__wrapper,b2,__ZN7WebCore19WorkerDebuggerAgent31startListeningScriptDebugServerEv,b2,__ZN9Inspector18InspectorAgentBase12discardAgentEv,b2,__ZThn12_N7WebCore19WorkerDebuggerAgentD1Ev,b2,vi___ZN7WebCore22InspectorDebuggerAgent11didContinueEv__wrapper,b2,__ZN7WebCore19WorkerDebuggerAgent13unmuteConsoleEv,b2,vi___ZN7WebCore22InspectorDebuggerAgent7disableEv__wrapper,b2,__ZThn12_N7WebCore19WorkerDebuggerAgentD0Ev,b2,__ZN7WebCore19WorkerDebuggerAgent30stopListeningScriptDebugServerEv,b2,vi___ZN7WebCore22InspectorDebuggerAgent6enableEv__wrapper,b2,__ZN7WebCore19WorkerDebuggerAgent11muteConsoleEv,b2,__ZN7WebCore12_GLOBAL__N_124RunInspectorCommandsTask3runEv,b2,__ZN7WebCore19WorkerDebuggerAgentD2Ev
  ,b2,__ZN7WebCore19WorkerDebuggerAgentD0Ev,b2,__ZN7WebCore12_GLOBAL__N_124RunInspectorCommandsTaskD2Ev,b2,__ZN7WebCore12_GLOBAL__N_124RunInspectorCommandsTaskD0Ev,b2,vi___ZThn12_N7WebCore22InspectorDebuggerAgent11didContinueEv__wrapper,b2,__ZThn16_N7WebCore19WorkerDebuggerAgentD1Ev,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,vii___ZN7WebCore22InspectorDebuggerAgent8stepIntoEPN3WTF6StringE__wrapper,b3,vii___ZN7WebCore22InspectorDebuggerAgent6resumeEPN3WTF6StringE__wrapper,b3,vii___ZThn16_N7WebCore22InspectorDebuggerAgent7disableEPN3WTF6StringE__wrapper,b3,vii___ZN7WebCore22InspectorDebuggerAgent7stepOutEPN3WTF6StringE__wrapper,b3,vii___ZN7WebCore22InspectorDebuggerAgent6enableEPN3WTF6StringE__wrapper,b3,vii___ZThn16_N7WebCore22InspectorDebuggerAgent5pauseEPN3WTF6StringE__wrapper,b3,vii___ZThn16_N7WebCore22InspectorDebuggerAgent6resumeEPN3WTF6StringE__wrapper,b3,vii___ZN7WebCore22InspectorDebuggerAgent8stepOverEPN3WTF6StringE__wrapper,b3,vii___ZThn16_N7WebCore22InspectorDebuggerAgent8stepOverEPN3WTF6StringE__wrapper,b3,vii___ZThn16_N7WebCore22InspectorDebuggerAgent8stepIntoEPN3WTF6StringE__wrapper,b3,vii___ZThn16_N7WebCore22InspectorDebuggerAgent6enableEPN3WTF6StringE__wrapper,b3,vii___ZN7WebCore22InspectorDebuggerAgent5pauseEPN3WTF6StringE__wrapper,b3,vii___ZN7WebCore22InspectorDebuggerAgent7disableEPN3WTF6StringE__wrapper,b3,vii___ZThn16_N7WebCore22InspectorDebuggerAgent7stepOutEPN3WTF6StringE__wrapper
  ,b3,b3,b3];
  var FUNCTION_TABLE_viiiiiiiiiii = [b4,b4,viiiiiiiiiii___ZThn16_N7WebCore22InspectorDebuggerAgent19evaluateOnCallFrameEPN3WTF6StringERKS2_S5_PS4_PKbS8_S8_S8_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSB_9OptOutputIbEE__wrapper,b4,viiiiiiiiiii___ZN7WebCore22InspectorDebuggerAgent19evaluateOnCallFrameEPN3WTF6StringERKS2_S5_PS4_PKbS8_S8_S8_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSB_9OptOutputIbEE__wrapper,b4,b4,b4];
  var FUNCTION_TABLE_ii = [b5,b5,__ZN7WebCore19WorkerDebuggerAgent17scriptDebugServerEv,b5];
  var FUNCTION_TABLE_viii = [b6,b6,viii___ZThn16_N7WebCore22InspectorDebuggerAgent19causesRecompilationEPN3WTF6StringEPb__wrapper,b6,viii___ZN7WebCore22InspectorDebuggerAgent17setOverlayMessageEPN3WTF6StringEPKS2___wrapper,b6,viii___ZThn16_N7WebCore22InspectorDebuggerAgent18canSetScriptSourceEPN3WTF6StringEPb__wrapper,b6,viii___ZThn16_N7WebCore22InspectorDebuggerAgent16removeBreakpointEPN3WTF6StringERKS2___wrapper,b6,viii___ZN7WebCore22InspectorDebuggerAgent20setBreakpointsActiveEPN3WTF6StringEb__wrapper,b6,viii___ZN7WebCore22InspectorDebuggerAgent18continueToLocationEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEE__wrapper,b6,viii___ZN7WebCore22InspectorDebuggerAgent20setPauseOnExceptionsEPN3WTF6StringERKS2___wrapper,b6,viii___ZN7WebCore22InspectorDebuggerAgent16removeBreakpointEPN3WTF6StringERKS2___wrapper,b6,viii___ZN7WebCore22InspectorDebuggerAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE__wrapper,b6,viii___ZN7WebCore22InspectorDebuggerAgent19causesRecompilationEPN3WTF6StringEPb__wrapper,b6,viii___ZThn12_N7WebCore22InspectorDebuggerAgent14didParseSourceEjRKNS_19ScriptDebugListener6ScriptE__wrapper,b6,viii___ZThn16_N7WebCore22InspectorDebuggerAgent45supportsSeparateScriptCompilationAndExecutionEPN3WTF6StringEPb__wrapper,b6,viii___ZN7WebCore22InspectorDebuggerAgent45supportsSeparateScriptCompilationAndExecutionEPN3WTF6StringEPb__wrapper,b6,viii___ZThn16_N7WebCore22InspectorDebuggerAgent20setPauseOnExceptionsEPN3WTF6StringERKS2___wrapper
  ,b6,viii___ZThn16_N7WebCore22InspectorDebuggerAgent17setOverlayMessageEPN3WTF6StringEPKS2___wrapper,b6,viii___ZN7WebCore22InspectorDebuggerAgent14didParseSourceEjRKNS_19ScriptDebugListener6ScriptE__wrapper,b6,viii___ZThn16_N7WebCore22InspectorDebuggerAgent18continueToLocationEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEE__wrapper,b6,viii___ZThn16_N7WebCore22InspectorDebuggerAgent20setBreakpointsActiveEPN3WTF6StringEb__wrapper,b6,viii___ZN7WebCore22InspectorDebuggerAgent18canSetScriptSourceEPN3WTF6StringEPb__wrapper,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6];
  var FUNCTION_TABLE_v = [b7,b7];
  var FUNCTION_TABLE_viiiiiiiii = [b8,b8,viiiiiiiii___ZN7WebCore22InspectorDebuggerAgent18setBreakpointByUrlEPN3WTF6StringEiPKS2_S5_PKiPKNS1_6RefPtrIN9Inspector15InspectorObjectEEES3_RNS8_INS9_11TypeBuilder5ArrayINSE_8Debugger8LocationEEEEE__wrapper,b8,viiiiiiiii___ZThn16_N7WebCore22InspectorDebuggerAgent18setBreakpointByUrlEPN3WTF6StringEiPKS2_S5_PKiPKNS1_6RefPtrIN9Inspector15InspectorObjectEEES3_RNS8_INS9_11TypeBuilder5ArrayINSE_8Debugger8LocationEEEEE__wrapper,b8,b8,b8];
  var FUNCTION_TABLE_viiiiii = [b9,b9,viiiiii___ZThn12_N7WebCore22InspectorDebuggerAgent19failedToParseSourceERKN3WTF6StringES4_iiS4___wrapper,b9,viiiiii___ZN7WebCore22InspectorDebuggerAgent19failedToParseSourceERKN3WTF6StringES4_iiS4___wrapper,b9,viiiiii___ZN7WebCore22InspectorDebuggerAgent13compileScriptEPN3WTF6StringERKS2_S5_PN9Inspector11TypeBuilder9OptOutputIS2_EESA___wrapper,b9,viiiiii___ZN7WebCore22InspectorDebuggerAgent13setBreakpointEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEEPS8_S3_RNS4_INS5_11TypeBuilder8Debugger8LocationEEE__wrapper,b9,viiiiii___ZThn16_N7WebCore22InspectorDebuggerAgent13compileScriptEPN3WTF6StringERKS2_S5_PN9Inspector11TypeBuilder9OptOutputIS2_EESA___wrapper,b9,viiiiii___ZThn16_N7WebCore22InspectorDebuggerAgent13setBreakpointEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEEPS8_S3_RNS4_INS5_11TypeBuilder8Debugger8LocationEEE__wrapper,b9,b9,b9];
  var FUNCTION_TABLE_iii = [b10,b10];
  var FUNCTION_TABLE_viiiiiii = [b11,b11,viiiiiii___ZN7WebCore22InspectorDebuggerAgent15searchInContentEPN3WTF6StringERKS2_S5_PKbS7_RNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_12GenericTypes11SearchMatchEEEEE__wrapper,b11,viiiiiii___ZThn16_N7WebCore22InspectorDebuggerAgent15searchInContentEPN3WTF6StringERKS2_S5_PKbS7_RNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_12GenericTypes11SearchMatchEEEEE__wrapper,b11,viiiiiii___ZThn16_N7WebCore22InspectorDebuggerAgent15setScriptSourceEPN3WTF6StringERKS2_S5_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_8Debugger9CallFrameEEEEERNS8_INS9_15InspectorObjectEEE__wrapper,b11,viiiiiii___ZN7WebCore22InspectorDebuggerAgent15setScriptSourceEPN3WTF6StringERKS2_S5_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_8Debugger9CallFrameEEEEERNS8_INS9_15InspectorObjectEEE__wrapper,b11,b11,b11,b11,b11,b11,b11];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiiiiii: dynCall_viiiiiiii, dynCall_viiii: dynCall_viiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_viiiiiiiiiii: dynCall_viiiiiiiiiii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiiiiiiii: dynCall_viiiiiiiii, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_viiiiiii: dynCall_viiiiiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiiiiii": invoke_viiiiiiii, "invoke_viiii": invoke_viiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_viiiiiiiiiii": invoke_viiiiiiiiiii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiiiiiiii": invoke_viiiiiiiii, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_viiiiiii": invoke_viiiiiii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZTVN7WebCore23WorkerScriptDebugServerE": __ZTVN7WebCore23WorkerScriptDebugServerE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiiiiii = Module["dynCall_viiiiiiii"] = asm["dynCall_viiiiiiii"];
var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_viiiiiiiiiii = Module["dynCall_viiiiiiiiiii"] = asm["dynCall_viiiiiiiiiii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiiiiiiii = Module["dynCall_viiiiiiiii"] = asm["dynCall_viiiiiiiii"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = asm["dynCall_viiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore19WorkerDebuggerAgentC2EPNS_19InstrumentingAgentsEPNS_17WorkerGlobalScopeEPN9Inspector21InjectedScriptManagerE","__ZThn16_N7WebCore19WorkerDebuggerAgentD0Ev","_strlen","__ZThn16_N7WebCore19WorkerDebuggerAgentD1Ev","__ZN7WebCore19WorkerDebuggerAgent31startListeningScriptDebugServerEv","__ZN9Inspector18InspectorAgentBase12discardAgentEv","__ZN7WebCore19WorkerDebuggerAgent17scriptDebugServerEv","__ZThn12_N7WebCore19WorkerDebuggerAgentD1Ev","_memset","__ZN3WTF7HashMapIPN7WebCore12WorkerThreadEPNS1_19WorkerDebuggerAgentENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS8_IS5_EEE6removeERKS3_","__ZN7WebCore19WorkerDebuggerAgent13unmuteConsoleEv","_memcpy","__ZThn12_N7WebCore19WorkerDebuggerAgentD0Ev","__ZN7WebCore19WorkerDebuggerAgent30stopListeningScriptDebugServerEv","__ZN3WTF9HashTableIPN7WebCore12WorkerThreadENS_12KeyValuePairIS3_PNS1_19WorkerDebuggerAgentEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EES3_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S7_S9_SB_SH_SE_EEEEOT0_OT1_","__ZN7WebCore19WorkerDebuggerAgent6createEPNS_19InstrumentingAgentsEPNS_17WorkerGlobalScopeEPN9Inspector21InjectedScriptManagerE","__ZN7WebCore12_GLOBAL__N_124RunInspectorCommandsTask3runEv","__ZN3WTF9HashTableIPN7WebCore12WorkerThreadENS_12KeyValuePairIS3_PNS1_19WorkerDebuggerAgentEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_","__ZN7WebCore19WorkerDebuggerAgentD2Ev","__ZN7WebCore19WorkerDebuggerAgentD0Ev","__ZN7WebCore12_GLOBAL__N_124RunInspectorCommandsTaskD2Ev","__ZN7WebCore19WorkerDebuggerAgent21injectedScriptForEvalEPN3WTF6StringEPKi","__ZN7WebCore12_GLOBAL__N_124RunInspectorCommandsTaskD0Ev","__ZN7WebCore19WorkerDebuggerAgent11muteConsoleEv","__ZN7WebCore19WorkerDebuggerAgent37interruptAndDispatchInspectorCommandsEPNS_12WorkerThreadE"]

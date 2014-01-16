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
H_BASE = parentModule["_malloc"](648 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 648;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([86,105,101,119,112,111,114,116,32,97,114,103,117,109,101,110,116,32,107,101,121,32,34,37,114,101,112,108,97,99,101,109,101,110,116,49,34,32,110,111,116,32,114,101,99,111,103,110,105,122,101,100,32,97,110,100,32,105,103,110,111,114,101,100,46,0,0,0,0,0,0,0,32,78,111,116,101,32,116,104,97,116,32,39,59,39,32,105,115,32,110,111,116,32,97,32,115,101,112,97,114,97,116,111,114,32,105,110,32,118,105,101,119,112,111,114,116,32,118,97,108,117,101,115,46,32,84,104,101,32,108,105,115,116,32,115,104,111,117,108,100,32,98,101,32,99,111,109,109,97,45,115,101,112,97,114,97,116,101,100,46,0,0,0,0,0,0,0,37,114,101,112,108,97,99,101,109,101,110,116,50,0,0,0,37,114,101,112,108,97,99,101,109,101,110,116,49,0,0,0,117,115,101,114,45,115,99,97,108,97,98,108,101,0,0,0,109,97,120,105,109,117,109,45,115,99,97,108,101,0,0,0,109,105,110,105,109,117,109,45,115,99,97,108,101,0,0,0,105,110,105,116,105,97,108,45,115,99,97,108,101,0,0,0,100,101,118,105,99,101,45,104,101,105,103,104,116,0,0,0,100,101,118,105,99,101,45,119,105,100,116,104,0,0,0,0,110,111,0,0,0,0,0,0,121,101,115,0,0,0,0,0,86,105,101,119,112,111,114,116,32,109,97,120,105,109,117,109,45,115,99,97,108,101,32,99,97,110,110,111,116,32,98,101,32,108,97,114,103,101,114,32,116,104,97,110,32,49,48,46,48,46,32,84,104,101,32,109,97,120,105,109,117,109,45,115,99,97,108,101,32,119,105,108,108,32,98,101,32,115,101,116,32,116,111,32,49,48,46,48,46,0,0,0,0,0,0,0,86,105,101,119,112,111,114,116,32,97,114,103,117,109,101,110,116,32,118,97,108,117,101,32,34,37,114,101,112,108,97,99,101,109,101,110,116,49,34,32,102,111,114,32,107,101,121,32,34,37,114,101,112,108,97,99,101,109,101,110,116,50,34,32,119,97,115,32,116,114,117,110,99,97,116,101,100,32,116,111,32,105,116,115,32,110,117,109,101,114,105,99,32,112,114,101,102,105,120,46,0,0,0,0,86,105,101,119,112,111,114,116,32,97,114,103,117,109,101,110,116,32,118,97,108,117,101,32,34,37,114,101,112,108,97,99,101,109,101,110,116,49,34,32,102,111,114,32,107,101,121,32,34,37,114,101,112,108,97,99,101,109,101,110,116,50,34,32,105,115,32,105,110,118,97,108,105,100,44,32,97,110,100,32,104,97,115,32,98,101,101,110,32,105,103,110,111,114,101,100,46,0,0,0,0,0,0,0,104,101,105,103,104,116,0,0,119,105,100,116,104,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
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
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var _fabsf=env._fabsf;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore17ViewportArguments7resolveERKNS_9FloatSizeES3_i(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, d17 = +0, d18 = +0, d19 = +0, d20 = +0, d21 = +0, d22 = +0, d23 = +0, d24 = +0, d25 = +0, i26 = 0, d27 = +0, d28 = +0, i29 = 0, d30 = +0, d31 = +0, d32 = +0, d33 = +0, i34 = 0, i35 = 0, d36 = +0, i37 = 0, i38 = 0, d39 = +0, d40 = +0, i41 = 0, i42 = 0, d43 = +0, d44 = +0, d45 = +0, d46 = +0, d47 = +0, d48 = +0, d49 = +0, d50 = +0, d51 = +0, d52 = +0, d53 = +0, d54 = +0, d55 = +0, d56 = +0, d57 = +0, d58 = +0, d59 = +0, d60 = +0, d61 = +0, d62 = +0, d63 = +0, d64 = +0, d65 = +0, d66 = +0, d67 = +0, d68 = +0, d69 = +0, d70 = +0, d71 = +0, d72 = +0, d73 = +0, i74 = 0, i75 = 0, d76 = +0, i77 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 i14 = i6 + 56 | 0;
 i15 = i6 + 64 | 0;
 d16 = +HEAPF32[i2 + 4 >> 2];
 d17 = +HEAPF32[i2 + 12 >> 2];
 HEAPF32[i7 >> 2] = d17;
 d18 = +HEAPF32[i2 + 8 >> 2];
 HEAPF32[i8 >> 2] = d18;
 d19 = +HEAPF32[i2 + 16 >> 2];
 d20 = +HEAPF32[i2 + 20 >> 2];
 HEAPF32[i9 >> 2] = d20;
 d21 = +HEAPF32[i2 + 24 >> 2];
 HEAPF32[i10 >> 2] = d21;
 d22 = +HEAPF32[i2 + 28 >> 2];
 HEAPF32[i11 >> 2] = d22;
 d23 = +HEAPF32[i2 + 32 >> 2];
 HEAPF32[i12 >> 2] = d23;
 d24 = +HEAPF32[i2 + 36 >> 2];
 HEAPF32[i13 >> 2] = d24;
 d25 = +HEAPF32[i2 + 40 >> 2];
 i26 = ~~d16;
 if ((i26 | 0) == (-2 | 0)) {
  d27 = +HEAPF32[i4 >> 2];
 } else if ((i26 | 0) == (-3 | 0)) {
  d27 = +HEAPF32[i4 + 4 >> 2];
 } else {
  d27 = d16;
 }
 i26 = ~~d19;
 if ((i26 | 0) == (-2 | 0)) {
  d28 = +HEAPF32[i4 >> 2];
 } else if ((i26 | 0) == (-3 | 0)) {
  d28 = +HEAPF32[i4 + 4 >> 2];
 } else {
  d28 = d19;
 }
 i26 = HEAP32[i2 >> 2] | 0;
 if ((i26 | 0) == 2) {
  i29 = ~~d18;
  if ((i29 | 0) == (-2 | 0)) {
   d19 = +HEAPF32[i4 >> 2];
   HEAPF32[i8 >> 2] = d19;
   d30 = d19;
  } else if ((i29 | 0) == (-3 | 0)) {
   d19 = +HEAPF32[i4 + 4 >> 2];
   HEAPF32[i8 >> 2] = d19;
   d30 = d19;
  } else {
   d30 = d18;
  }
  i29 = ~~d17;
  if ((i29 | 0) == (-2 | 0)) {
   d18 = +HEAPF32[i4 >> 2];
   HEAPF32[i7 >> 2] = d18;
   d31 = d18;
  } else if ((i29 | 0) == (-3 | 0)) {
   d18 = +HEAPF32[i4 + 4 >> 2];
   HEAPF32[i7 >> 2] = d18;
   d31 = d18;
  } else {
   d31 = d17;
  }
  i29 = ~~d20;
  if ((i29 | 0) == (-2 | 0)) {
   d17 = +HEAPF32[i4 >> 2];
   HEAPF32[i9 >> 2] = d17;
   d32 = d17;
  } else if ((i29 | 0) == (-3 | 0)) {
   d17 = +HEAPF32[i4 + 4 >> 2];
   HEAPF32[i9 >> 2] = d17;
   d32 = d17;
  } else {
   d32 = d20;
  }
  i29 = ~~d21;
  if ((i29 | 0) == (-2 | 0)) {
   d20 = +HEAPF32[i4 >> 2];
   HEAPF32[i10 >> 2] = d20;
   d33 = d20;
  } else if ((i29 | 0) == (-3 | 0)) {
   d20 = +HEAPF32[i4 + 4 >> 2];
   HEAPF32[i10 >> 2] = d20;
   d33 = d20;
  } else {
   d33 = d21;
  }
  if (d30 != +-1 | d31 != +-1) {
   d21 = +HEAPF32[i4 >> 2];
   HEAPF32[i14 >> 2] = d21;
   do {
    if (d31 == +-1) {
     i34 = i14;
    } else {
     if (d21 == +-1) {
      i34 = i7;
      break;
     }
     i34 = d21 < d31 ? i14 : i7;
    }
   } while (0);
   do {
    if (d30 == +-1) {
     i35 = i34;
    } else {
     d31 = +HEAPF32[i34 >> 2];
     if (d31 == +-1) {
      i35 = i8;
      break;
     }
     i35 = d30 < d31 ? i34 : i8;
    }
   } while (0);
   d36 = +HEAPF32[i35 >> 2];
  } else {
   d36 = d27;
  }
  if (d32 != +-1 | d33 != +-1) {
   d30 = +HEAPF32[i4 + 4 >> 2];
   HEAPF32[i15 >> 2] = d30;
   do {
    if (d33 == +-1) {
     i37 = i15;
    } else {
     if (d30 == +-1) {
      i37 = i10;
      break;
     }
     i37 = d30 < d33 ? i15 : i10;
    }
   } while (0);
   do {
    if (d32 == +-1) {
     i38 = i37;
    } else {
     d33 = +HEAPF32[i37 >> 2];
     if (d33 == +-1) {
      i38 = i9;
      break;
     }
     i38 = d32 < d33 ? i37 : i9;
    }
   } while (0);
   d39 = +HEAPF32[i38 >> 2];
  } else {
   d39 = d28;
  }
  if (d23 != +-1 & d24 != +-1) {
   d32 = d23 < d24 ? d24 : d23;
   HEAPF32[i13 >> 2] = d32;
   d40 = d32;
  } else {
   d40 = d24;
  }
  if (d22 != +-1) {
   do {
    if (d40 == +-1) {
     i41 = i11;
    } else {
     if (d22 == +-1) {
      i41 = i13;
      break;
     }
     i41 = d22 < d40 ? i11 : i13;
    }
   } while (0);
   do {
    if (d23 == +-1) {
     i42 = i41;
    } else {
     d32 = +HEAPF32[i41 >> 2];
     if (d32 == +-1) {
      i42 = i12;
      break;
     }
     i42 = d23 < d32 ? i41 : i12;
    }
   } while (0);
   d23 = +HEAPF32[i42 >> 2];
   HEAPF32[i11 >> 2] = d23;
   d43 = d23;
  } else {
   d43 = d22;
  }
  if (d36 == +-1 & d43 == +-1) {
   d44 = +HEAPF32[i4 >> 2];
  } else {
   d44 = d36;
  }
  i42 = d39 == +-1;
  if (d44 == +-1 & i42) {
   d45 = +HEAPF32[i4 >> 2] / d43;
  } else {
   d45 = d44;
  }
  if (d45 == +-1) {
   d46 = d39 * +HEAPF32[i4 >> 2] / +HEAPF32[i4 + 4 >> 2];
  } else {
   d46 = d45;
  }
  if (i42) {
   d47 = d46 * +HEAPF32[i4 + 4 >> 2] / +HEAPF32[i4 >> 2];
  } else {
   d47 = d39;
  }
  do {
   if (d43 != +-1 | d40 != +-1) {
    d39 = +HEAPF32[i4 >> 2];
    i42 = d43 == +-1;
    do {
     if (i42) {
      d48 = d40;
     } else {
      if (d40 == +-1) {
       d48 = d43;
       break;
      }
      d48 = d40 < d43 ? d40 : d43;
     }
    } while (0);
    d45 = d39 / d48;
    do {
     if (d46 == +-1) {
      d49 = d45;
     } else {
      if (d45 == +-1) {
       d49 = d46;
       break;
      }
      d49 = d46 < d45 ? d45 : d46;
     }
    } while (0);
    d45 = +HEAPF32[i4 + 4 >> 2];
    do {
     if (i42) {
      d50 = d40;
     } else {
      if (d40 == +-1) {
       d50 = d43;
       break;
      }
      d50 = d40 < d43 ? d40 : d43;
     }
    } while (0);
    d39 = d45 / d50;
    if (d47 == +-1) {
     d51 = d39;
     d52 = d49;
     break;
    }
    if (d39 == +-1) {
     d51 = d47;
     d52 = d49;
     break;
    }
    d51 = d47 < d39 ? d39 : d47;
    d52 = d49;
   } else {
    d51 = d47;
    d52 = d46;
   }
  } while (0);
  d53 = d51 > +1 ? d51 : +1;
  d54 = d52 > +1 ? d52 : +1;
  d55 = d43;
  d56 = d40;
 } else {
  d53 = d28;
  d54 = d27;
  d55 = d22;
  d56 = d24;
 }
 if ((i26 | 0) == 2 | (i26 | 0) == 0) {
  d57 = d53;
  d58 = d54;
  d59 = d56;
  d60 = d55;
 } else {
  if (d54 != +-1) {
   d24 = d54 < +1 ? +1 : d54;
   d61 = d24 < +1e4 ? d24 : +1e4;
  } else {
   d61 = d54;
  }
  if (d53 != +-1) {
   d54 = d53 < +1 ? +1 : d53;
   d62 = d54 < +1e4 ? d54 : +1e4;
  } else {
   d62 = d53;
  }
  if (d55 != +-1) {
   d53 = d55 < +.10000000149011612 ? +.10000000149011612 : d55;
   d63 = d53 < +10 ? d53 : +10;
  } else {
   d63 = d55;
  }
  HEAPF32[i11 >> 2] = d63;
  d55 = +HEAPF32[i12 >> 2];
  if (d55 != +-1) {
   d53 = d55 < +.10000000149011612 ? +.10000000149011612 : d55;
   d64 = d53 < +10 ? d53 : +10;
  } else {
   d64 = d55;
  }
  HEAPF32[i12 >> 2] = d64;
  if (d56 != +-1) {
   d64 = d56 < +.10000000149011612 ? +.10000000149011612 : d56;
   d65 = d64 < +10 ? d64 : +10;
  } else {
   d65 = d56;
  }
  HEAPF32[i13 >> 2] = d65;
  d57 = d62;
  d58 = d61;
  d59 = d65;
  d60 = d63;
 }
 i13 = i1 | 0;
 HEAPF32[i13 >> 2] = +0;
 i11 = i1 + 4 | 0;
 HEAPF32[i11 >> 2] = +0;
 d63 = +HEAPF32[i12 >> 2];
 i12 = i1 + 12 | 0;
 d65 = d63 == +-1 ? +.25 : d63;
 HEAPF32[i12 >> 2] = d65;
 i4 = i1 + 16 | 0;
 if (d59 == +-1) {
  HEAPF32[i4 >> 2] = +5;
  d63 = d65 < +5 ? d65 : +5;
  HEAPF32[i12 >> 2] = d63;
  d66 = d63;
  d67 = +5;
 } else {
  HEAPF32[i4 >> 2] = d59;
  d66 = d65;
  d67 = d59;
 }
 d59 = d66 < d67 ? d67 : d66;
 HEAPF32[i4 >> 2] = d59;
 i4 = i1 + 8 | 0;
 HEAPF32[i4 >> 2] = d60;
 i12 = d60 == +-1;
 do {
  if (i12) {
   if (d58 != +-1) {
    d68 = d58;
   } else {
    d68 = +(i5 | 0);
   }
   d67 = +HEAPF32[i3 >> 2] / d68;
   HEAPF32[i4 >> 2] = d67;
   if (d57 == +-1) {
    d69 = d67;
    break;
   }
   d65 = +HEAPF32[i3 + 4 >> 2] / d57;
   d63 = d67 < d65 ? d65 : d67;
   HEAPF32[i4 >> 2] = d63;
   d69 = d63;
  } else {
   d69 = d60;
  }
 } while (0);
 d60 = d66 < d69 ? d69 : d66;
 d66 = d60 < d59 ? d60 : d59;
 HEAPF32[i4 >> 2] = d66;
 do {
  if (d58 == +-1) {
   if (i12) {
    d70 = +(i5 | 0);
    break;
   }
   d59 = +HEAPF32[i3 >> 2];
   if (d57 != +-1) {
    d70 = d57 * (d59 / +HEAPF32[i3 + 4 >> 2]);
    break;
   } else {
    d70 = d59 / d66;
    break;
   }
  } else {
   d70 = d58;
  }
 } while (0);
 if (d57 == +-1) {
  d71 = d70 * (+HEAPF32[i3 + 4 >> 2] / +HEAPF32[i3 >> 2]);
 } else {
  d71 = d57;
 }
 if ((i26 | 0) != 1) {
  d72 = d71;
  d73 = d70;
  HEAPF32[i13 >> 2] = d73;
  HEAPF32[i11 >> 2] = d72;
  i74 = i1 + 20 | 0;
  HEAPF32[i74 >> 2] = d25;
  i75 = i2 + 44 | 0;
  d76 = +HEAPF32[i75 >> 2];
  i77 = i1 + 24 | 0;
  HEAPF32[i77 >> 2] = d76;
  STACKTOP = i6;
  return;
 }
 d57 = +HEAPF32[i3 >> 2] / d66;
 d58 = +HEAPF32[i3 + 4 >> 2] / d66;
 d72 = d71 < d58 ? d58 : d71;
 d73 = d70 < d57 ? d57 : d70;
 HEAPF32[i13 >> 2] = d73;
 HEAPF32[i11 >> 2] = d72;
 i74 = i1 + 20 | 0;
 HEAPF32[i74 >> 2] = d25;
 i75 = i2 + 44 | 0;
 d76 = +HEAPF32[i75 >> 2];
 i77 = i1 + 24 | 0;
 HEAPF32[i77 >> 2] = d76;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore21reportViewportWarningEPNS_8DocumentENS_17ViewportErrorCodeERKN3WTF6StringES6_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 if ((HEAP32[i1 + 332 >> 2] | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZN3WTF6StringC1EPKc(i8, HEAP32[H_BASE + 640 + (i2 << 2) >> 2] | 0);
 i12 = i3 | 0;
 do {
  if ((HEAP32[i12 >> 2] | 0) != 0) {
   __ZN3WTF6StringC1EPKc(i9, H_BASE + 192 | 0);
   i3 = i8 | 0;
   i13 = HEAP32[i3 >> 2] | 0;
   i14 = i9 | 0;
   do {
    if ((i13 | 0) != 0) {
     __ZN3WTF10StringImpl7replaceEPS0_S1_(i7, i13, HEAP32[i14 >> 2] | 0, HEAP32[i12 >> 2] | 0);
     i15 = HEAP32[i3 >> 2] | 0;
     HEAP32[i3 >> 2] = HEAP32[i7 >> 2];
     if ((i15 | 0) == 0) {
      break;
     }
     i16 = i15 | 0;
     i17 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      break;
     } else {
      HEAP32[i16 >> 2] = i17;
      break;
     }
    }
   } while (0);
   i3 = HEAP32[i14 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i13 = i3 | 0;
   i17 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i13 >> 2] = i17;
    break;
   }
  }
 } while (0);
 i7 = i4 | 0;
 do {
  if ((HEAP32[i7 >> 2] | 0) != 0) {
   __ZN3WTF6StringC1EPKc(i10, H_BASE + 176 | 0);
   i4 = i8 | 0;
   i9 = HEAP32[i4 >> 2] | 0;
   i17 = i10 | 0;
   do {
    if ((i9 | 0) != 0) {
     __ZN3WTF10StringImpl7replaceEPS0_S1_(i6, i9, HEAP32[i17 >> 2] | 0, HEAP32[i7 >> 2] | 0);
     i13 = HEAP32[i4 >> 2] | 0;
     HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
     if ((i13 | 0) == 0) {
      break;
     }
     i3 = i13 | 0;
     i16 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i3 >> 2] = i16;
      break;
     }
    }
   } while (0);
   i4 = HEAP32[i17 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i9 = i4 | 0;
   i14 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i9 >> 2] = i14;
    break;
   }
  }
 } while (0);
 L32 : do {
  if ((i2 - 1 | 0) >>> 0 < 2 >>> 0) {
   i6 = HEAP32[i12 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   if ((HEAP32[i6 + 16 >> 2] & 32 | 0) == 0) {
    i7 = HEAP32[i6 + 8 >> 2] | 0;
    i10 = HEAP32[i6 + 4 >> 2] | 0;
    i14 = 0;
    while (1) {
     if (i14 >>> 0 >= i10 >>> 0) {
      break L32;
     }
     if ((HEAP16[i7 + (i14 << 1) >> 1] | 0) == 59) {
      i18 = i14;
      break;
     } else {
      i14 = i14 + 1 | 0;
     }
    }
   } else {
    i14 = HEAP32[i6 + 8 >> 2] | 0;
    i7 = HEAP32[i6 + 4 >> 2] | 0;
    i10 = 0;
    while (1) {
     if (i10 >>> 0 >= i7 >>> 0) {
      break L32;
     }
     if ((HEAP8[i14 + i10 | 0] | 0) == 59) {
      i18 = i10;
      break;
     } else {
      i10 = i10 + 1 | 0;
     }
    }
   }
   if ((i18 | 0) == -1) {
    break;
   }
   __ZN3WTF6StringC1EPKc(i11, H_BASE + 80 | 0);
   __ZN3WTF6String6appendERKS0_(i8, i11);
   i10 = HEAP32[i11 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i14 = i10 | 0;
   i7 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i14 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[(HEAP32[i1 >> 2] | 0) + 316 >> 2] | 0;
 if ((i2 | 0) == 0 | (i2 | 0) == 1 | (i2 | 0) == 3) {
  i19 = 3;
 } else if ((i2 | 0) == 2) {
  i19 = 2;
 } else {
  i19 = 3;
 }
 FUNCTION_TABLE_viiiii[i11 & 1](i1, 6, i19, i8, 0);
 i19 = HEAP32[i8 >> 2] | 0;
 if ((i19 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i8 = i19 | 0;
 i1 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i19);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i8 >> 2] = i1;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore18setViewportFeatureERKN3WTF6StringES3_PNS_8DocumentEPv(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, d10 = +0, d11 = +0, d12 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i1 | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i7 >> 2] | 0, H_BASE + 632 | 0) | 0) {
  i8 = i2 | 0;
  do {
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i8 >> 2] | 0, H_BASE + 288 | 0) | 0) {
    d9 = +-2;
   } else {
    if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i8 >> 2] | 0, H_BASE + 272 | 0) | 0) {
     d9 = +-3;
     break;
    }
    d10 = +__ZN7WebCoreL13numericPrefixERKN3WTF6StringES3_PNS_8DocumentEPb(i1, i2, i3);
    d9 = d10 < +0 ? +-1 : d10;
   }
  } while (0);
  HEAPF32[i4 + 4 >> 2] = d9;
  STACKTOP = i5;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i7 >> 2] | 0, H_BASE + 624 | 0) | 0) {
  i8 = i2 | 0;
  do {
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i8 >> 2] | 0, H_BASE + 288 | 0) | 0) {
    d11 = +-2;
   } else {
    if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i8 >> 2] | 0, H_BASE + 272 | 0) | 0) {
     d11 = +-3;
     break;
    }
    d9 = +__ZN7WebCoreL13numericPrefixERKN3WTF6StringES3_PNS_8DocumentEPb(i1, i2, i3);
    d11 = d9 < +0 ? +-1 : d9;
   }
  } while (0);
  HEAPF32[i4 + 16 >> 2] = d11;
  STACKTOP = i5;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i7 >> 2] | 0, H_BASE + 256 | 0) | 0) {
  HEAPF32[i4 + 28 >> 2] = +__ZN7WebCoreL14findScaleValueERKN3WTF6StringES3_PNS_8DocumentE(i1, i2, i3);
  STACKTOP = i5;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i7 >> 2] | 0, H_BASE + 240 | 0) | 0) {
  HEAPF32[i4 + 32 >> 2] = +__ZN7WebCoreL14findScaleValueERKN3WTF6StringES3_PNS_8DocumentE(i1, i2, i3);
  STACKTOP = i5;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i7 >> 2] | 0, H_BASE + 224 | 0) | 0) {
  HEAPF32[i4 + 36 >> 2] = +__ZN7WebCoreL14findScaleValueERKN3WTF6StringES3_PNS_8DocumentE(i1, i2, i3);
  STACKTOP = i5;
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i7 >> 2] | 0, H_BASE + 208 | 0) | 0) {
  i7 = i2 | 0;
  do {
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i7 >> 2] | 0, H_BASE + 312 | 0) | 0) {
    d12 = +1;
   } else {
    if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i7 >> 2] | 0, H_BASE + 304 | 0) | 0) {
     d12 = +0;
     break;
    }
    if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i7 >> 2] | 0, H_BASE + 288 | 0) | 0) {
     d12 = +1;
     break;
    }
    if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i7 >> 2] | 0, H_BASE + 272 | 0) | 0) {
     d12 = +1;
     break;
    }
    i8 = +Math_abs(+(+__ZN7WebCoreL13numericPrefixERKN3WTF6StringES3_PNS_8DocumentEPb(i1, i2, i3))) < +1;
    d12 = i8 ? +0 : +1;
   }
  } while (0);
  HEAPF32[i4 + 40 >> 2] = d12;
  STACKTOP = i5;
  return;
 } else {
  i4 = i6 | 0;
  HEAP32[i4 >> 2] = 0;
  __ZN7WebCore21reportViewportWarningEPNS_8DocumentENS_17ViewportErrorCodeERKN3WTF6StringES6_(i3, 0, i1, i6);
  i6 = HEAP32[i4 >> 2] | 0;
  if ((i6 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  i4 = i6 | 0;
  i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
  if ((i1 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i6);
   STACKTOP = i5;
   return;
  } else {
   HEAP32[i4 >> 2] = i1;
   STACKTOP = i5;
   return;
  }
 }
}
function __ZN7WebCoreL14findScaleValueERKN3WTF6StringES3_PNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, d9 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 | 0;
 if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i7 >> 2] | 0, H_BASE + 312 | 0) | 0) {
  d8 = +1;
  STACKTOP = i4;
  return +d8;
 }
 if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i7 >> 2] | 0, H_BASE + 304 | 0) | 0) {
  d8 = +0;
  STACKTOP = i4;
  return +d8;
 }
 if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i7 >> 2] | 0, H_BASE + 288 | 0) | 0) {
  d8 = +10;
  STACKTOP = i4;
  return +d8;
 }
 if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i7 >> 2] | 0, H_BASE + 272 | 0) | 0) {
  d8 = +10;
  STACKTOP = i4;
  return +d8;
 }
 d9 = +__ZN7WebCoreL13numericPrefixERKN3WTF6StringES3_PNS_8DocumentEPb(i1, i2, i3);
 if (d9 < +0) {
  d8 = +-1;
  STACKTOP = i4;
  return +d8;
 }
 if (d9 <= +10) {
  d8 = d9;
  STACKTOP = i4;
  return +d8;
 }
 i2 = i5 | 0;
 HEAP32[i2 >> 2] = 0;
 i1 = i6 | 0;
 HEAP32[i1 >> 2] = 0;
 __ZN7WebCore21reportViewportWarningEPNS_8DocumentENS_17ViewportErrorCodeERKN3WTF6StringES6_(i3, 3, i5, i6);
 i6 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i1 = i6 | 0;
   i5 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i1 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) == 0) {
  d8 = d9;
  STACKTOP = i4;
  return +d8;
 }
 i2 = i6 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  d8 = d9;
  STACKTOP = i4;
  return +d8;
 } else {
  HEAP32[i2 >> 2] = i5;
  d8 = d9;
  STACKTOP = i4;
  return +d8;
 }
 return +0;
}
function __ZN7WebCore25computeViewportAttributesENS_17ViewportArgumentsEiiifNS_7IntSizeE(i1, i2, i3, i4, i5, d6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, d16 = +0, d17 = +0, d18 = +0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 _memcpy(i2, i9, 48) | 0;
 i9 = i7;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i7 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 i9 = i8 | 0;
 i10 = i9;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = i12;
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i11, i7);
 i7 = HEAP32[i11 >> 2] | 0;
 i14 = HEAP32[i11 + 4 >> 2] | 0;
 HEAP32[i9 >> 2] = i7;
 HEAP32[i9 + 4 >> 2] = i14;
 i11 = d6 != +1;
 if (i11) {
  d15 = (HEAP32[tempDoublePtr >> 2] = i14, +HEAPF32[tempDoublePtr >> 2]);
  d16 = +1 / d6;
  HEAPF32[i9 >> 2] = (HEAP32[tempDoublePtr >> 2] = i7, +HEAPF32[tempDoublePtr >> 2]) * d16;
  HEAPF32[i10 + 4 >> 2] = d15 * d16;
 }
 d16 = +(i4 | 0);
 d15 = +(i5 | 0);
 d17 = +d16;
 d18 = +d15;
 HEAPF32[i12 >> 2] = d17;
 HEAPF32[i12 + 4 >> 2] = d18;
 if (!i11) {
  __ZNK7WebCore17ViewportArguments7resolveERKNS_9FloatSizeES3_i(i1, i2, i10, i13, i3);
  STACKTOP = i8;
  return;
 }
 d18 = +1 / d6;
 HEAPF32[i12 >> 2] = d16 * d18;
 HEAPF32[i13 + 4 >> 2] = d15 * d18;
 __ZNK7WebCore17ViewportArguments7resolveERKNS_9FloatSizeES3_i(i1, i2, i10, i13, i3);
 STACKTOP = i8;
 return;
}
function __ZN7WebCoreL13numericPrefixERKN3WTF6StringES3_PNS_8DocumentEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, i12 = 0, i13 = 0, d14 = +0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i2 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = (i7 | 0) == 0;
 if ((HEAP32[i7 + 16 >> 2] & 32 | 0) == 0) {
  if (i8) {
   i9 = 0;
   i10 = 0;
  } else {
   i9 = HEAP32[i7 + 4 >> 2] | 0;
   i10 = HEAP32[i7 + 8 >> 2] | 0;
  }
  d11 = +__ZN3WTF17charactersToFloatEPKtjRj(i10, i9, i5);
 } else {
  if (i8) {
   i12 = 0;
   i13 = 0;
  } else {
   i12 = HEAP32[i7 + 4 >> 2] | 0;
   i13 = HEAP32[i7 + 8 >> 2] | 0;
  }
  d11 = +__ZN3WTF17charactersToFloatEPKhjRj(i13, i12, i5);
 }
 i12 = HEAP32[i5 >> 2] | 0;
 if ((i12 | 0) == 0) {
  __ZN7WebCore21reportViewportWarningEPNS_8DocumentENS_17ViewportErrorCodeERKN3WTF6StringES6_(i3, 1, i2, i1);
  d14 = +0;
  STACKTOP = i4;
  return +d14;
 }
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i15 = 0;
 } else {
  i15 = HEAP32[i5 + 4 >> 2] | 0;
 }
 if (i12 >>> 0 >= i15 >>> 0) {
  d14 = d11;
  STACKTOP = i4;
  return +d14;
 }
 __ZN7WebCore21reportViewportWarningEPNS_8DocumentENS_17ViewportErrorCodeERKN3WTF6StringES6_(i3, 2, i2, i1);
 d14 = d11;
 STACKTOP = i4;
 return +d14;
}
function __ZN7WebCore40restrictMinimumScaleFactorToViewportSizeERNS_18ViewportAttributesENS_7IntSizeEf(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var i4 = 0, i5 = 0, d6 = +0, d7 = +0, d8 = +0, d9 = +0, d10 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 i5 = i4 | 0;
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i5, i2);
 d6 = +HEAPF32[i5 >> 2];
 d7 = +HEAPF32[i5 + 4 >> 2];
 if (d3 != +1) {
  d8 = +1 / d3;
  d9 = d6 * d8;
  d10 = d7 * d8;
 } else {
  d9 = d6;
  d10 = d7;
 }
 i5 = i1 + 12 | 0;
 d7 = d9 / +HEAPF32[i1 >> 2];
 d9 = d10 / +HEAPF32[i1 + 4 >> 2];
 d10 = +HEAPF32[i5 >> 2];
 d6 = d7 < d9 ? d9 : d7;
 HEAPF32[i5 >> 2] = d10 < d6 ? d6 : d10;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore44computeMinimumScaleFactorForContentContainedERKNS_18ViewportAttributesERKNS_7IntSizeES5_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, d6 = +0, d7 = +0, d8 = +0, d9 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i5, i2);
 d6 = +HEAPF32[i5 >> 2] / +(HEAP32[i3 >> 2] | 0);
 d7 = +HEAPF32[i5 + 4 >> 2] / +(HEAP32[i3 + 4 >> 2] | 0);
 d8 = +HEAPF32[i1 + 12 >> 2];
 d9 = d6 < d7 ? d7 : d6;
 STACKTOP = i4;
 return +(d8 < d9 ? d9 : d8);
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
function __ZN7WebCore50restrictScaleFactorToInitialScaleIfNotUserScalableERNS_18ViewportAttributesE(i1) {
 i1 = i1 | 0;
 var d2 = +0;
 if (+HEAPF32[i1 + 20 >> 2] != +0) {
  return;
 }
 d2 = +HEAPF32[i1 + 8 >> 2];
 HEAPF32[i1 + 12 >> 2] = d2;
 HEAPF32[i1 + 16 >> 2] = d2;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function runPostSets() {
 HEAP32[H_BASE + 640 >> 2] = H_BASE + 8;
 HEAP32[H_BASE + 644 >> 2] = H_BASE + 520;
 HEAP32[H_BASE + 648 >> 2] = H_BASE + 416;
 HEAP32[H_BASE + 652 >> 2] = H_BASE + 320;
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
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b3() {
 abort(3);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "_fabsf": _fabsf, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore21reportViewportWarningEPNS_8DocumentENS_17ViewportErrorCodeERKN3WTF6StringES6_","__ZN7WebCoreL14findScaleValueERKN3WTF6StringES3_PNS_8DocumentE","__ZN7WebCore44computeMinimumScaleFactorForContentContainedERKNS_18ViewportAttributesERKNS_7IntSizeES5_","_memset","__ZNK7WebCore17ViewportArguments7resolveERKNS_9FloatSizeES3_i","__ZN7WebCore40restrictMinimumScaleFactorToViewportSizeERNS_18ViewportAttributesENS_7IntSizeEf","_memcpy","__ZN7WebCore50restrictScaleFactorToInitialScaleIfNotUserScalableERNS_18ViewportAttributesE","__ZN7WebCore25computeViewportAttributesENS_17ViewportArgumentsEiiifNS_7IntSizeE","__ZN7WebCoreL13numericPrefixERKN3WTF6StringES3_PNS_8DocumentEPb","__ZN7WebCore18setViewportFeatureERKN3WTF6StringES3_PNS_8DocumentEPv"]

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
H_BASE = parentModule["_malloc"](1536 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 1536;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore17GraphicsContext3D14ImageExtractorC1EPNS_5ImageENS0_18ImageHtmlDomSourceEbb;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,2,0,4,0,8,0,16,0,32,0,64,0,128,0,0,1,0,2,0,4,0,8,0,12,0,16,0,20,0,24,0,28,0,32,0,36,0,40,0,44,0,48,0,52,0,56,0,60,0,64,0,68,0,72,0,76,0,80,0,84,0,88,0,92,0,96,0,100,0,104,0,108,0,112,0,116,0,120,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,124,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,0,128,1,128,2,128,4,128,8,128,16,128,32,128,64,128,128,128,0,129,0,130,0,132,0,136,0,140,0,144,0,148,0,152,0,156,0,160,0,164,0,168,0,172,0,176,0,180,0,184,0,188,0,192,0,196,0,200,0,204,0,208,0,212,0,216,0,220,0,224,0,228,0,232,0,236,0,240,0,244,0,248,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,0,252,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,22,21,20,19,18,17,16,15,14,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,13,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,22,21,20,19,18,17,16,15,14,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,13], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
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
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore12_GLOBAL__N_115FormatConverter7convertENS_17GraphicsContext3D10DataFormatES3_NS2_7AlphaOpE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, d21 = +0, d22 = +0, d23 = +0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, d28 = +0, d29 = +0, d30 = +0, i31 = 0, i32 = 0, i33 = 0, d34 = +0, i35 = 0, i36 = 0, i37 = 0, d38 = +0, d39 = +0, d40 = +0, i41 = 0, i42 = 0, d43 = +0, i44 = 0, i45 = 0, i46 = 0, d47 = +0, i48 = 0, i49 = 0, i50 = 0, d51 = +0, d52 = +0, i53 = 0, i54 = 0, d55 = +0, d56 = +0, d57 = +0, d58 = +0, d59 = +0, d60 = +0, d61 = +0, d62 = +0, d63 = +0, d64 = +0, d65 = +0, i66 = 0, i67 = 0, i68 = 0, d69 = +0, d70 = +0, d71 = +0, d72 = +0, i73 = 0, i74 = 0, d75 = +0, i76 = 0;
 switch (i2 | 0) {
 case 30:
  {
   if (!((i3 | 0) == 30 & (i4 | 0) == 1)) {
    return;
   }
   i2 = (HEAP32[i1 + 16 >> 2] | 0) >>> 2;
   i5 = (HEAP32[i1 + 20 >> 2] | 0) >>> 2;
   i6 = i1 + 4 | 0;
   L6 : do {
    if ((HEAP32[i6 >> 2] | 0) != 0) {
     i7 = i1 + 28 | 0;
     i8 = i1 | 0;
     i9 = 1;
     i10 = HEAP32[i1 + 12 >> 2] | 0;
     i11 = HEAP32[i1 + 8 >> 2] | 0;
     while (1) {
      i12 = HEAP32[i8 >> 2] | 0;
      do {
       if ((i12 | 0) != 0) {
        i13 = 0;
        i14 = HEAP32[i7 >> 2] | 0;
        i15 = i11;
        while (1) {
         HEAPF32[i14 >> 2] = +HEAPF32[i15 >> 2];
         HEAPF32[i14 + 4 >> 2] = +HEAPF32[i15 >> 2];
         HEAPF32[i14 + 8 >> 2] = +HEAPF32[i15 >> 2];
         HEAPF32[i14 + 12 >> 2] = +HEAPF32[i15 + 4 >> 2];
         i16 = i13 + 1 | 0;
         if (i16 >>> 0 < i12 >>> 0) {
          i13 = i16;
          i14 = i14 + 16 | 0;
          i15 = i15 + 8 | 0;
         } else {
          break;
         }
        }
        i15 = HEAP32[i8 >> 2] | 0;
        if ((i15 | 0) == 0) {
         break;
        }
        i14 = 0;
        i13 = i10;
        i16 = HEAP32[i7 >> 2] | 0;
        while (1) {
         i17 = i16 + 12 | 0;
         HEAPF32[i13 >> 2] = +HEAPF32[i17 >> 2] * +HEAPF32[i16 >> 2];
         HEAPF32[i13 + 4 >> 2] = +HEAPF32[i17 >> 2];
         i17 = i14 + 1 | 0;
         if (i17 >>> 0 < i15 >>> 0) {
          i14 = i17;
          i13 = i13 + 8 | 0;
          i16 = i16 + 16 | 0;
         } else {
          break;
         }
        }
       }
      } while (0);
      if (i9 >>> 0 >= (HEAP32[i6 >> 2] | 0) >>> 0) {
       break L6;
      }
      i9 = i9 + 1 | 0;
      i10 = i10 + (i5 << 2) | 0;
      i11 = i11 + (i2 << 2) | 0;
     }
    }
   } while (0);
   HEAP8[i1 + 24 | 0] = 1;
   return;
  }
 case 0:
  {
   switch (i3 | 0) {
   case 21:
    {
     if ((i4 | 0) == 1) {
      i2 = HEAP32[i1 + 16 >> 2] | 0;
      i5 = HEAP32[i1 + 20 >> 2] | 0;
      i6 = i1 + 4 | 0;
      i11 = HEAP32[i6 >> 2] | 0;
      L27 : do {
       if ((i11 | 0) != 0) {
        i10 = i1 | 0;
        i9 = 1;
        i7 = HEAP32[i1 + 12 >> 2] | 0;
        i8 = HEAP32[i1 + 8 >> 2] | 0;
        i12 = i11;
        while (1) {
         i16 = HEAP32[i10 >> 2] | 0;
         if ((i16 | 0) == 0) {
          i18 = i12;
         } else {
          i13 = 0;
          i14 = i7;
          i15 = i8;
          while (1) {
           HEAP8[i14] = ~~(+(HEAPU8[i15 + 3 | 0] | 0 | 0) / +255 * +((HEAPU8[i15] | 0) >>> 0));
           i17 = i13 + 1 | 0;
           if (i17 >>> 0 < i16 >>> 0) {
            i13 = i17;
            i14 = i14 + 1 | 0;
            i15 = i15 + 4 | 0;
           } else {
            break;
           }
          }
          i18 = HEAP32[i6 >> 2] | 0;
         }
         if (i9 >>> 0 >= i18 >>> 0) {
          break L27;
         }
         i9 = i9 + 1 | 0;
         i7 = i7 + i5 | 0;
         i8 = i8 + i2 | 0;
         i12 = i18;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 0) {
      i18 = HEAP32[i1 + 16 >> 2] | 0;
      i2 = HEAP32[i1 + 20 >> 2] | 0;
      i5 = i1 + 4 | 0;
      i6 = HEAP32[i5 >> 2] | 0;
      L40 : do {
       if ((i6 | 0) != 0) {
        i11 = i1 | 0;
        i12 = 1;
        i8 = HEAP32[i1 + 12 >> 2] | 0;
        i7 = HEAP32[i1 + 8 >> 2] | 0;
        i9 = i6;
        while (1) {
         i10 = HEAP32[i11 >> 2] | 0;
         if ((i10 | 0) == 0) {
          i19 = i9;
         } else {
          i15 = 0;
          i14 = i8;
          i13 = i7;
          while (1) {
           HEAP8[i14] = HEAP8[i13] | 0;
           i16 = i15 + 1 | 0;
           if (i16 >>> 0 < i10 >>> 0) {
            i15 = i16;
            i14 = i14 + 1 | 0;
            i13 = i13 + 4 | 0;
           } else {
            break;
           }
          }
          i19 = HEAP32[i5 >> 2] | 0;
         }
         if (i12 >>> 0 >= i19 >>> 0) {
          break L40;
         }
         i12 = i12 + 1 | 0;
         i8 = i8 + i2 | 0;
         i7 = i7 + i18 | 0;
         i9 = i19;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 2) {
      i19 = HEAP32[i1 + 16 >> 2] | 0;
      i18 = HEAP32[i1 + 20 >> 2] | 0;
      i2 = i1 + 4 | 0;
      i5 = HEAP32[i2 >> 2] | 0;
      L53 : do {
       if ((i5 | 0) != 0) {
        i6 = i1 | 0;
        i9 = 1;
        i7 = HEAP32[i1 + 12 >> 2] | 0;
        i8 = HEAP32[i1 + 8 >> 2] | 0;
        i12 = i5;
        while (1) {
         i11 = HEAP32[i6 >> 2] | 0;
         if ((i11 | 0) == 0) {
          i20 = i12;
         } else {
          i13 = 0;
          i14 = i7;
          i15 = i8;
          while (1) {
           i10 = HEAP8[i15 + 3 | 0] | 0;
           if (i10 << 24 >> 24 == 0) {
            d21 = +1;
           } else {
            d21 = +255 / +(i10 & 255 | 0);
           }
           HEAP8[i14] = ~~(d21 * +((HEAPU8[i15] | 0) >>> 0));
           i10 = i13 + 1 | 0;
           if (i10 >>> 0 < i11 >>> 0) {
            i13 = i10;
            i14 = i14 + 1 | 0;
            i15 = i15 + 4 | 0;
           } else {
            break;
           }
          }
          i20 = HEAP32[i2 >> 2] | 0;
         }
         if (i9 >>> 0 >= i20 >>> 0) {
          break L53;
         }
         i9 = i9 + 1 | 0;
         i7 = i7 + i18 | 0;
         i8 = i8 + i19 | 0;
         i12 = i20;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else {
      return;
     }
     break;
    }
   case 24:
    {
     if ((i4 | 0) == 0) {
      i20 = HEAP32[i1 + 16 >> 2] | 0;
      i19 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i18 = i1 + 4 | 0;
      L72 : do {
       if ((HEAP32[i18 >> 2] | 0) != 0) {
        i2 = i1 + 28 | 0;
        i5 = i1 | 0;
        i12 = 1;
        i8 = HEAP32[i1 + 12 >> 2] | 0;
        i7 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i9 = HEAP32[i5 >> 2] | 0;
         do {
          if ((i9 | 0) != 0) {
           i6 = 0;
           i15 = HEAP32[i2 >> 2] | 0;
           i14 = i7;
           while (1) {
            HEAPF32[i15 >> 2] = +(HEAPU8[i14] | 0 | 0) * +.003921568859368563;
            HEAPF32[i15 + 4 >> 2] = +(HEAPU8[i14 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i15 + 8 >> 2] = +(HEAPU8[i14 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i15 + 12 >> 2] = +(HEAPU8[i14 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i13 = i6 + 1 | 0;
            if (i13 >>> 0 < i9 >>> 0) {
             i6 = i13;
             i15 = i15 + 16 | 0;
             i14 = i14 + 4 | 0;
            } else {
             break;
            }
           }
           i14 = HEAP32[i5 >> 2] | 0;
           if ((i14 | 0) == 0) {
            break;
           }
           i15 = 0;
           i6 = i8;
           i13 = HEAP32[i2 >> 2] | 0;
           while (1) {
            i11 = (HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i13 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i10 = i11 >>> 23;
            HEAP16[i6 >> 1] = ((i11 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i10 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i10 << 1) >> 1] | 0);
            i10 = i15 + 1 | 0;
            if (i10 >>> 0 < i14 >>> 0) {
             i15 = i10;
             i6 = i6 + 2 | 0;
             i13 = i13 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i12 >>> 0 >= (HEAP32[i18 >> 2] | 0) >>> 0) {
          break L72;
         }
         i12 = i12 + 1 | 0;
         i8 = i8 + (i19 << 1) | 0;
         i7 = i7 + i20 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 1) {
      i20 = HEAP32[i1 + 16 >> 2] | 0;
      i19 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i18 = i1 + 4 | 0;
      L89 : do {
       if ((HEAP32[i18 >> 2] | 0) != 0) {
        i7 = i1 + 28 | 0;
        i8 = i1 | 0;
        i12 = 1;
        i2 = HEAP32[i1 + 12 >> 2] | 0;
        i5 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i9 = HEAP32[i8 >> 2] | 0;
         do {
          if ((i9 | 0) != 0) {
           i13 = 0;
           i6 = HEAP32[i7 >> 2] | 0;
           i15 = i5;
           while (1) {
            HEAPF32[i6 >> 2] = +(HEAPU8[i15] | 0 | 0) * +.003921568859368563;
            HEAPF32[i6 + 4 >> 2] = +(HEAPU8[i15 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i6 + 8 >> 2] = +(HEAPU8[i15 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i6 + 12 >> 2] = +(HEAPU8[i15 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i14 = i13 + 1 | 0;
            if (i14 >>> 0 < i9 >>> 0) {
             i13 = i14;
             i6 = i6 + 16 | 0;
             i15 = i15 + 4 | 0;
            } else {
             break;
            }
           }
           i15 = HEAP32[i8 >> 2] | 0;
           if ((i15 | 0) == 0) {
            break;
           }
           i6 = 0;
           i13 = i2;
           i14 = HEAP32[i7 >> 2] | 0;
           while (1) {
            i10 = (HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i14 + 12 >> 2] * +HEAPF32[i14 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i11 = i10 >>> 23;
            HEAP16[i13 >> 1] = ((i10 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i11 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i11 << 1) >> 1] | 0);
            i11 = i6 + 1 | 0;
            if (i11 >>> 0 < i15 >>> 0) {
             i6 = i11;
             i13 = i13 + 2 | 0;
             i14 = i14 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i12 >>> 0 >= (HEAP32[i18 >> 2] | 0) >>> 0) {
          break L89;
         }
         i12 = i12 + 1 | 0;
         i2 = i2 + (i19 << 1) | 0;
         i5 = i5 + i20 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 2) {
      i20 = HEAP32[i1 + 16 >> 2] | 0;
      i19 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i18 = i1 + 4 | 0;
      L106 : do {
       if ((HEAP32[i18 >> 2] | 0) != 0) {
        i5 = i1 + 28 | 0;
        i2 = i1 | 0;
        i12 = 1;
        i7 = HEAP32[i1 + 12 >> 2] | 0;
        i8 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i9 = HEAP32[i2 >> 2] | 0;
         do {
          if ((i9 | 0) != 0) {
           i14 = 0;
           i13 = HEAP32[i5 >> 2] | 0;
           i6 = i8;
           while (1) {
            HEAPF32[i13 >> 2] = +(HEAPU8[i6] | 0 | 0) * +.003921568859368563;
            HEAPF32[i13 + 4 >> 2] = +(HEAPU8[i6 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i13 + 8 >> 2] = +(HEAPU8[i6 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i13 + 12 >> 2] = +(HEAPU8[i6 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i15 = i14 + 1 | 0;
            if (i15 >>> 0 < i9 >>> 0) {
             i14 = i15;
             i13 = i13 + 16 | 0;
             i6 = i6 + 4 | 0;
            } else {
             break;
            }
           }
           i6 = HEAP32[i2 >> 2] | 0;
           if ((i6 | 0) == 0) {
            break;
           }
           i13 = 0;
           i14 = i7;
           i15 = HEAP32[i5 >> 2] | 0;
           while (1) {
            d21 = +HEAPF32[i15 + 12 >> 2];
            if (d21 != +0) {
             d22 = +1 / d21;
            } else {
             d22 = +1;
            }
            i11 = (HEAPF32[tempDoublePtr >> 2] = d22 * +HEAPF32[i15 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i10 = i11 >>> 23;
            HEAP16[i14 >> 1] = ((i11 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i10 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i10 << 1) >> 1] | 0);
            i10 = i13 + 1 | 0;
            if (i10 >>> 0 < i6 >>> 0) {
             i13 = i10;
             i14 = i14 + 2 | 0;
             i15 = i15 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i12 >>> 0 >= (HEAP32[i18 >> 2] | 0) >>> 0) {
          break L106;
         }
         i12 = i12 + 1 | 0;
         i7 = i7 + (i19 << 1) | 0;
         i8 = i8 + i20 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else {
      return;
     }
     break;
    }
   case 25:
    {
     if ((i4 | 0) == 0) {
      i20 = HEAP32[i1 + 16 >> 2] | 0;
      i19 = (HEAP32[i1 + 20 >> 2] | 0) >>> 2;
      i18 = i1 + 4 | 0;
      L129 : do {
       if ((HEAP32[i18 >> 2] | 0) != 0) {
        i8 = i1 + 28 | 0;
        i7 = i1 | 0;
        i12 = 1;
        i5 = HEAP32[i1 + 12 >> 2] | 0;
        i2 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i9 = HEAP32[i7 >> 2] | 0;
         do {
          if ((i9 | 0) != 0) {
           i15 = 0;
           i14 = HEAP32[i8 >> 2] | 0;
           i13 = i2;
           while (1) {
            HEAPF32[i14 >> 2] = +(HEAPU8[i13] | 0 | 0) * +.003921568859368563;
            HEAPF32[i14 + 4 >> 2] = +(HEAPU8[i13 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i14 + 8 >> 2] = +(HEAPU8[i13 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i14 + 12 >> 2] = +(HEAPU8[i13 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i6 = i15 + 1 | 0;
            if (i6 >>> 0 < i9 >>> 0) {
             i15 = i6;
             i14 = i14 + 16 | 0;
             i13 = i13 + 4 | 0;
            } else {
             break;
            }
           }
           i13 = HEAP32[i7 >> 2] | 0;
           if ((i13 | 0) == 0) {
            break;
           }
           i14 = 0;
           i15 = i5;
           i6 = HEAP32[i8 >> 2] | 0;
           while (1) {
            HEAPF32[i15 >> 2] = +HEAPF32[i6 >> 2];
            i10 = i14 + 1 | 0;
            if (i10 >>> 0 < i13 >>> 0) {
             i14 = i10;
             i15 = i15 + 4 | 0;
             i6 = i6 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i12 >>> 0 >= (HEAP32[i18 >> 2] | 0) >>> 0) {
          break L129;
         }
         i12 = i12 + 1 | 0;
         i5 = i5 + (i19 << 2) | 0;
         i2 = i2 + i20 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 1) {
      i20 = HEAP32[i1 + 16 >> 2] | 0;
      i19 = (HEAP32[i1 + 20 >> 2] | 0) >>> 2;
      i18 = i1 + 4 | 0;
      L146 : do {
       if ((HEAP32[i18 >> 2] | 0) != 0) {
        i2 = i1 + 28 | 0;
        i5 = i1 | 0;
        i12 = 1;
        i8 = HEAP32[i1 + 12 >> 2] | 0;
        i7 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i9 = HEAP32[i5 >> 2] | 0;
         do {
          if ((i9 | 0) != 0) {
           i6 = 0;
           i15 = HEAP32[i2 >> 2] | 0;
           i14 = i7;
           while (1) {
            HEAPF32[i15 >> 2] = +(HEAPU8[i14] | 0 | 0) * +.003921568859368563;
            HEAPF32[i15 + 4 >> 2] = +(HEAPU8[i14 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i15 + 8 >> 2] = +(HEAPU8[i14 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i15 + 12 >> 2] = +(HEAPU8[i14 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i13 = i6 + 1 | 0;
            if (i13 >>> 0 < i9 >>> 0) {
             i6 = i13;
             i15 = i15 + 16 | 0;
             i14 = i14 + 4 | 0;
            } else {
             break;
            }
           }
           i14 = HEAP32[i5 >> 2] | 0;
           if ((i14 | 0) == 0) {
            break;
           }
           i15 = 0;
           i6 = i8;
           i13 = HEAP32[i2 >> 2] | 0;
           while (1) {
            HEAPF32[i6 >> 2] = +HEAPF32[i13 + 12 >> 2] * +HEAPF32[i13 >> 2];
            i10 = i15 + 1 | 0;
            if (i10 >>> 0 < i14 >>> 0) {
             i15 = i10;
             i6 = i6 + 4 | 0;
             i13 = i13 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i12 >>> 0 >= (HEAP32[i18 >> 2] | 0) >>> 0) {
          break L146;
         }
         i12 = i12 + 1 | 0;
         i8 = i8 + (i19 << 2) | 0;
         i7 = i7 + i20 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 2) {
      i20 = HEAP32[i1 + 16 >> 2] | 0;
      i19 = (HEAP32[i1 + 20 >> 2] | 0) >>> 2;
      i18 = i1 + 4 | 0;
      L163 : do {
       if ((HEAP32[i18 >> 2] | 0) != 0) {
        i7 = i1 + 28 | 0;
        i8 = i1 | 0;
        i12 = 1;
        i2 = HEAP32[i1 + 12 >> 2] | 0;
        i5 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i9 = HEAP32[i8 >> 2] | 0;
         do {
          if ((i9 | 0) != 0) {
           i13 = 0;
           i6 = HEAP32[i7 >> 2] | 0;
           i15 = i5;
           while (1) {
            HEAPF32[i6 >> 2] = +(HEAPU8[i15] | 0 | 0) * +.003921568859368563;
            HEAPF32[i6 + 4 >> 2] = +(HEAPU8[i15 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i6 + 8 >> 2] = +(HEAPU8[i15 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i6 + 12 >> 2] = +(HEAPU8[i15 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i14 = i13 + 1 | 0;
            if (i14 >>> 0 < i9 >>> 0) {
             i13 = i14;
             i6 = i6 + 16 | 0;
             i15 = i15 + 4 | 0;
            } else {
             break;
            }
           }
           i15 = HEAP32[i8 >> 2] | 0;
           if ((i15 | 0) == 0) {
            break;
           }
           i6 = 0;
           i13 = i2;
           i14 = HEAP32[i7 >> 2] | 0;
           while (1) {
            d22 = +HEAPF32[i14 + 12 >> 2];
            if (d22 != +0) {
             d23 = +1 / d22;
            } else {
             d23 = +1;
            }
            HEAPF32[i13 >> 2] = d23 * +HEAPF32[i14 >> 2];
            i10 = i6 + 1 | 0;
            if (i10 >>> 0 < i15 >>> 0) {
             i6 = i10;
             i13 = i13 + 4 | 0;
             i14 = i14 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i12 >>> 0 >= (HEAP32[i18 >> 2] | 0) >>> 0) {
          break L163;
         }
         i12 = i12 + 1 | 0;
         i2 = i2 + (i19 << 2) | 0;
         i5 = i5 + i20 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else {
      return;
     }
     break;
    }
   case 34:
    {
     if ((i4 | 0) != 0) {
      return;
     }
     i20 = HEAP32[i1 + 16 >> 2] | 0;
     i19 = HEAP32[i1 + 20 >> 2] | 0;
     i18 = i1 + 4 | 0;
     i5 = HEAP32[i18 >> 2] | 0;
     L187 : do {
      if ((i5 | 0) != 0) {
       i2 = i1 | 0;
       i12 = 1;
       i7 = HEAP32[i1 + 12 >> 2] | 0;
       i8 = HEAP32[i1 + 8 >> 2] | 0;
       i9 = i5;
       while (1) {
        i14 = HEAP32[i2 >> 2] | 0;
        if ((i14 | 0) == 0) {
         i24 = i9;
        } else {
         i13 = 0;
         i6 = i7;
         i15 = i8;
         while (1) {
          HEAP8[i6] = HEAP8[i15 + 3 | 0] | 0;
          i10 = i13 + 1 | 0;
          if (i10 >>> 0 < i14 >>> 0) {
           i13 = i10;
           i6 = i6 + 1 | 0;
           i15 = i15 + 4 | 0;
          } else {
           break;
          }
         }
         i24 = HEAP32[i18 >> 2] | 0;
        }
        if (i12 >>> 0 >= i24 >>> 0) {
         break L187;
        }
        i12 = i12 + 1 | 0;
        i7 = i7 + i19 | 0;
        i8 = i8 + i20 | 0;
        i9 = i24;
       }
      }
     } while (0);
     HEAP8[i1 + 24 | 0] = 1;
     return;
    }
   case 37:
    {
     if ((i4 | 0) != 0) {
      return;
     }
     i24 = HEAP32[i1 + 16 >> 2] | 0;
     i20 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
     i19 = i1 + 4 | 0;
     L203 : do {
      if ((HEAP32[i19 >> 2] | 0) != 0) {
       i18 = i1 + 28 | 0;
       i5 = i1 | 0;
       i9 = 1;
       i8 = HEAP32[i1 + 12 >> 2] | 0;
       i7 = HEAP32[i1 + 8 >> 2] | 0;
       while (1) {
        i12 = HEAP32[i5 >> 2] | 0;
        do {
         if ((i12 | 0) != 0) {
          i2 = 0;
          i15 = HEAP32[i18 >> 2] | 0;
          i6 = i7;
          while (1) {
           HEAPF32[i15 >> 2] = +(HEAPU8[i6] | 0 | 0) * +.003921568859368563;
           HEAPF32[i15 + 4 >> 2] = +(HEAPU8[i6 + 1 | 0] | 0 | 0) * +.003921568859368563;
           HEAPF32[i15 + 8 >> 2] = +(HEAPU8[i6 + 2 | 0] | 0 | 0) * +.003921568859368563;
           HEAPF32[i15 + 12 >> 2] = +(HEAPU8[i6 + 3 | 0] | 0 | 0) * +.003921568859368563;
           i13 = i2 + 1 | 0;
           if (i13 >>> 0 < i12 >>> 0) {
            i2 = i13;
            i15 = i15 + 16 | 0;
            i6 = i6 + 4 | 0;
           } else {
            break;
           }
          }
          i6 = HEAP32[i5 >> 2] | 0;
          if ((i6 | 0) == 0) {
           break;
          }
          i15 = 0;
          i2 = i8;
          i13 = HEAP32[i18 >> 2] | 0;
          while (1) {
           i14 = (HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i13 + 12 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
           i10 = i14 >>> 23;
           HEAP16[i2 >> 1] = ((i14 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i10 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i10 << 1) >> 1] | 0);
           i10 = i15 + 1 | 0;
           if (i10 >>> 0 < i6 >>> 0) {
            i15 = i10;
            i2 = i2 + 2 | 0;
            i13 = i13 + 16 | 0;
           } else {
            break;
           }
          }
         }
        } while (0);
        if (i9 >>> 0 >= (HEAP32[i19 >> 2] | 0) >>> 0) {
         break L203;
        }
        i9 = i9 + 1 | 0;
        i8 = i8 + (i20 << 1) | 0;
        i7 = i7 + i24 | 0;
       }
      }
     } while (0);
     HEAP8[i1 + 24 | 0] = 1;
     return;
    }
   case 38:
    {
     if ((i4 | 0) != 0) {
      return;
     }
     i24 = HEAP32[i1 + 16 >> 2] | 0;
     i20 = (HEAP32[i1 + 20 >> 2] | 0) >>> 2;
     i19 = i1 + 4 | 0;
     L223 : do {
      if ((HEAP32[i19 >> 2] | 0) != 0) {
       i7 = i1 + 28 | 0;
       i8 = i1 | 0;
       i9 = 1;
       i18 = HEAP32[i1 + 12 >> 2] | 0;
       i5 = HEAP32[i1 + 8 >> 2] | 0;
       while (1) {
        i12 = HEAP32[i8 >> 2] | 0;
        do {
         if ((i12 | 0) != 0) {
          i13 = 0;
          i2 = HEAP32[i7 >> 2] | 0;
          i15 = i5;
          while (1) {
           HEAPF32[i2 >> 2] = +(HEAPU8[i15] | 0 | 0) * +.003921568859368563;
           HEAPF32[i2 + 4 >> 2] = +(HEAPU8[i15 + 1 | 0] | 0 | 0) * +.003921568859368563;
           HEAPF32[i2 + 8 >> 2] = +(HEAPU8[i15 + 2 | 0] | 0 | 0) * +.003921568859368563;
           HEAPF32[i2 + 12 >> 2] = +(HEAPU8[i15 + 3 | 0] | 0 | 0) * +.003921568859368563;
           i6 = i13 + 1 | 0;
           if (i6 >>> 0 < i12 >>> 0) {
            i13 = i6;
            i2 = i2 + 16 | 0;
            i15 = i15 + 4 | 0;
           } else {
            break;
           }
          }
          i15 = HEAP32[i8 >> 2] | 0;
          if ((i15 | 0) == 0) {
           break;
          }
          i2 = 0;
          i13 = i18;
          i6 = HEAP32[i7 >> 2] | 0;
          while (1) {
           HEAPF32[i13 >> 2] = +HEAPF32[i6 + 12 >> 2];
           i10 = i2 + 1 | 0;
           if (i10 >>> 0 < i15 >>> 0) {
            i2 = i10;
            i13 = i13 + 4 | 0;
            i6 = i6 + 16 | 0;
           } else {
            break;
           }
          }
         }
        } while (0);
        if (i9 >>> 0 >= (HEAP32[i19 >> 2] | 0) >>> 0) {
         break L223;
        }
        i9 = i9 + 1 | 0;
        i18 = i18 + (i20 << 2) | 0;
        i5 = i5 + i24 | 0;
       }
      }
     } while (0);
     HEAP8[i1 + 24 | 0] = 1;
     return;
    }
   case 26:
    {
     if ((i4 | 0) == 0) {
      i24 = HEAP32[i1 + 16 >> 2] | 0;
      i20 = HEAP32[i1 + 20 >> 2] | 0;
      i19 = i1 + 4 | 0;
      i5 = HEAP32[i19 >> 2] | 0;
      L242 : do {
       if ((i5 | 0) != 0) {
        i18 = i1 | 0;
        i9 = 1;
        i7 = HEAP32[i1 + 12 >> 2] | 0;
        i8 = HEAP32[i1 + 8 >> 2] | 0;
        i12 = i5;
        while (1) {
         i6 = HEAP32[i18 >> 2] | 0;
         if ((i6 | 0) == 0) {
          i25 = i12;
         } else {
          i13 = 0;
          i2 = i7;
          i15 = i8;
          while (1) {
           HEAP8[i2] = HEAP8[i15] | 0;
           HEAP8[i2 + 1 | 0] = HEAP8[i15 + 3 | 0] | 0;
           i10 = i13 + 1 | 0;
           if (i10 >>> 0 < i6 >>> 0) {
            i13 = i10;
            i2 = i2 + 2 | 0;
            i15 = i15 + 4 | 0;
           } else {
            break;
           }
          }
          i25 = HEAP32[i19 >> 2] | 0;
         }
         if (i9 >>> 0 >= i25 >>> 0) {
          break L242;
         }
         i9 = i9 + 1 | 0;
         i7 = i7 + i20 | 0;
         i8 = i8 + i24 | 0;
         i12 = i25;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 1) {
      i25 = HEAP32[i1 + 16 >> 2] | 0;
      i24 = HEAP32[i1 + 20 >> 2] | 0;
      i20 = i1 + 4 | 0;
      i19 = HEAP32[i20 >> 2] | 0;
      L255 : do {
       if ((i19 | 0) != 0) {
        i5 = i1 | 0;
        i12 = 1;
        i8 = HEAP32[i1 + 12 >> 2] | 0;
        i7 = HEAP32[i1 + 8 >> 2] | 0;
        i9 = i19;
        while (1) {
         i18 = HEAP32[i5 >> 2] | 0;
         if ((i18 | 0) == 0) {
          i26 = i9;
         } else {
          i15 = 0;
          i2 = i8;
          i13 = i7;
          while (1) {
           i6 = i13 + 3 | 0;
           HEAP8[i2] = ~~(+(HEAPU8[i6] | 0 | 0) / +255 * +((HEAPU8[i13] | 0) >>> 0));
           HEAP8[i2 + 1 | 0] = HEAP8[i6] | 0;
           i6 = i15 + 1 | 0;
           if (i6 >>> 0 < i18 >>> 0) {
            i15 = i6;
            i2 = i2 + 2 | 0;
            i13 = i13 + 4 | 0;
           } else {
            break;
           }
          }
          i26 = HEAP32[i20 >> 2] | 0;
         }
         if (i12 >>> 0 >= i26 >>> 0) {
          break L255;
         }
         i12 = i12 + 1 | 0;
         i8 = i8 + i24 | 0;
         i7 = i7 + i25 | 0;
         i9 = i26;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 2) {
      i26 = HEAP32[i1 + 16 >> 2] | 0;
      i25 = HEAP32[i1 + 20 >> 2] | 0;
      i24 = i1 + 4 | 0;
      i20 = HEAP32[i24 >> 2] | 0;
      L268 : do {
       if ((i20 | 0) != 0) {
        i19 = i1 | 0;
        i9 = 1;
        i7 = HEAP32[i1 + 12 >> 2] | 0;
        i8 = HEAP32[i1 + 8 >> 2] | 0;
        i12 = i20;
        while (1) {
         i5 = HEAP32[i19 >> 2] | 0;
         if ((i5 | 0) == 0) {
          i27 = i12;
         } else {
          i13 = 0;
          i2 = i7;
          i15 = i8;
          while (1) {
           i18 = i15 + 3 | 0;
           i6 = HEAP8[i18] | 0;
           if (i6 << 24 >> 24 == 0) {
            d28 = +1;
           } else {
            d28 = +255 / +(i6 & 255 | 0);
           }
           HEAP8[i2] = ~~(d28 * +((HEAPU8[i15] | 0) >>> 0));
           HEAP8[i2 + 1 | 0] = HEAP8[i18] | 0;
           i18 = i13 + 1 | 0;
           if (i18 >>> 0 < i5 >>> 0) {
            i13 = i18;
            i2 = i2 + 2 | 0;
            i15 = i15 + 4 | 0;
           } else {
            break;
           }
          }
          i27 = HEAP32[i24 >> 2] | 0;
         }
         if (i9 >>> 0 >= i27 >>> 0) {
          break L268;
         }
         i9 = i9 + 1 | 0;
         i7 = i7 + i25 | 0;
         i8 = i8 + i26 | 0;
         i12 = i27;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else {
      return;
     }
     break;
    }
   case 29:
    {
     if ((i4 | 0) == 0) {
      i27 = HEAP32[i1 + 16 >> 2] | 0;
      i26 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i25 = i1 + 4 | 0;
      L287 : do {
       if ((HEAP32[i25 >> 2] | 0) != 0) {
        i24 = i1 + 28 | 0;
        i20 = i1 | 0;
        i12 = 1;
        i8 = HEAP32[i1 + 12 >> 2] | 0;
        i7 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i9 = HEAP32[i20 >> 2] | 0;
         do {
          if ((i9 | 0) != 0) {
           i19 = 0;
           i15 = HEAP32[i24 >> 2] | 0;
           i2 = i7;
           while (1) {
            HEAPF32[i15 >> 2] = +(HEAPU8[i2] | 0 | 0) * +.003921568859368563;
            HEAPF32[i15 + 4 >> 2] = +(HEAPU8[i2 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i15 + 8 >> 2] = +(HEAPU8[i2 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i15 + 12 >> 2] = +(HEAPU8[i2 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i13 = i19 + 1 | 0;
            if (i13 >>> 0 < i9 >>> 0) {
             i19 = i13;
             i15 = i15 + 16 | 0;
             i2 = i2 + 4 | 0;
            } else {
             break;
            }
           }
           i2 = HEAP32[i20 >> 2] | 0;
           if ((i2 | 0) == 0) {
            break;
           }
           i15 = 0;
           i19 = i8;
           i13 = HEAP32[i24 >> 2] | 0;
           while (1) {
            i5 = (HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i13 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i18 = i5 >>> 23;
            HEAP16[i19 >> 1] = ((i5 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i18 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i18 << 1) >> 1] | 0);
            i18 = (HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i13 + 12 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i5 = i18 >>> 23;
            HEAP16[i19 + 2 >> 1] = ((i18 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i5 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i5 << 1) >> 1] | 0);
            i5 = i15 + 1 | 0;
            if (i5 >>> 0 < i2 >>> 0) {
             i15 = i5;
             i19 = i19 + 4 | 0;
             i13 = i13 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i12 >>> 0 >= (HEAP32[i25 >> 2] | 0) >>> 0) {
          break L287;
         }
         i12 = i12 + 1 | 0;
         i8 = i8 + (i26 << 1) | 0;
         i7 = i7 + i27 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 1) {
      i27 = HEAP32[i1 + 16 >> 2] | 0;
      i26 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i25 = i1 + 4 | 0;
      L304 : do {
       if ((HEAP32[i25 >> 2] | 0) != 0) {
        i7 = i1 + 28 | 0;
        i8 = i1 | 0;
        i12 = 1;
        i24 = HEAP32[i1 + 12 >> 2] | 0;
        i20 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i9 = HEAP32[i8 >> 2] | 0;
         do {
          if ((i9 | 0) != 0) {
           i13 = 0;
           i19 = HEAP32[i7 >> 2] | 0;
           i15 = i20;
           while (1) {
            HEAPF32[i19 >> 2] = +(HEAPU8[i15] | 0 | 0) * +.003921568859368563;
            HEAPF32[i19 + 4 >> 2] = +(HEAPU8[i15 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i19 + 8 >> 2] = +(HEAPU8[i15 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i19 + 12 >> 2] = +(HEAPU8[i15 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i2 = i13 + 1 | 0;
            if (i2 >>> 0 < i9 >>> 0) {
             i13 = i2;
             i19 = i19 + 16 | 0;
             i15 = i15 + 4 | 0;
            } else {
             break;
            }
           }
           i15 = HEAP32[i8 >> 2] | 0;
           if ((i15 | 0) == 0) {
            break;
           }
           i19 = 0;
           i13 = i24;
           i2 = HEAP32[i7 >> 2] | 0;
           while (1) {
            i5 = i2 + 12 | 0;
            i18 = (HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i5 >> 2] * +HEAPF32[i2 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i6 = i18 >>> 23;
            HEAP16[i13 >> 1] = ((i18 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i6 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i6 << 1) >> 1] | 0);
            i6 = (HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i5 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i5 = i6 >>> 23;
            HEAP16[i13 + 2 >> 1] = ((i6 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i5 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i5 << 1) >> 1] | 0);
            i5 = i19 + 1 | 0;
            if (i5 >>> 0 < i15 >>> 0) {
             i19 = i5;
             i13 = i13 + 4 | 0;
             i2 = i2 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i12 >>> 0 >= (HEAP32[i25 >> 2] | 0) >>> 0) {
          break L304;
         }
         i12 = i12 + 1 | 0;
         i24 = i24 + (i26 << 1) | 0;
         i20 = i20 + i27 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 2) {
      i27 = HEAP32[i1 + 16 >> 2] | 0;
      i26 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i25 = i1 + 4 | 0;
      L321 : do {
       if ((HEAP32[i25 >> 2] | 0) != 0) {
        i20 = i1 + 28 | 0;
        i24 = i1 | 0;
        i12 = 1;
        i7 = HEAP32[i1 + 12 >> 2] | 0;
        i8 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i9 = HEAP32[i24 >> 2] | 0;
         do {
          if ((i9 | 0) != 0) {
           i2 = 0;
           i13 = HEAP32[i20 >> 2] | 0;
           i19 = i8;
           while (1) {
            HEAPF32[i13 >> 2] = +(HEAPU8[i19] | 0 | 0) * +.003921568859368563;
            HEAPF32[i13 + 4 >> 2] = +(HEAPU8[i19 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i13 + 8 >> 2] = +(HEAPU8[i19 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i13 + 12 >> 2] = +(HEAPU8[i19 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i15 = i2 + 1 | 0;
            if (i15 >>> 0 < i9 >>> 0) {
             i2 = i15;
             i13 = i13 + 16 | 0;
             i19 = i19 + 4 | 0;
            } else {
             break;
            }
           }
           i19 = HEAP32[i24 >> 2] | 0;
           if ((i19 | 0) == 0) {
            break;
           }
           i13 = 0;
           i2 = i7;
           i15 = HEAP32[i20 >> 2] | 0;
           while (1) {
            i5 = i15 + 12 | 0;
            d28 = +HEAPF32[i5 >> 2];
            if (d28 != +0) {
             d29 = +1 / d28;
            } else {
             d29 = +1;
            }
            i6 = (HEAPF32[tempDoublePtr >> 2] = d29 * +HEAPF32[i15 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i18 = i6 >>> 23;
            HEAP16[i2 >> 1] = ((i6 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i18 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i18 << 1) >> 1] | 0);
            i18 = (HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i5 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i5 = i18 >>> 23;
            HEAP16[i2 + 2 >> 1] = ((i18 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i5 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i5 << 1) >> 1] | 0);
            i5 = i13 + 1 | 0;
            if (i5 >>> 0 < i19 >>> 0) {
             i13 = i5;
             i2 = i2 + 4 | 0;
             i15 = i15 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i12 >>> 0 >= (HEAP32[i25 >> 2] | 0) >>> 0) {
          break L321;
         }
         i12 = i12 + 1 | 0;
         i7 = i7 + (i26 << 1) | 0;
         i8 = i8 + i27 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else {
      return;
     }
     break;
    }
   case 30:
    {
     if ((i4 | 0) == 0) {
      i27 = HEAP32[i1 + 16 >> 2] | 0;
      i26 = (HEAP32[i1 + 20 >> 2] | 0) >>> 2;
      i25 = i1 + 4 | 0;
      L344 : do {
       if ((HEAP32[i25 >> 2] | 0) != 0) {
        i8 = i1 + 28 | 0;
        i7 = i1 | 0;
        i12 = 1;
        i20 = HEAP32[i1 + 12 >> 2] | 0;
        i24 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i9 = HEAP32[i7 >> 2] | 0;
         do {
          if ((i9 | 0) != 0) {
           i15 = 0;
           i2 = HEAP32[i8 >> 2] | 0;
           i13 = i24;
           while (1) {
            HEAPF32[i2 >> 2] = +(HEAPU8[i13] | 0 | 0) * +.003921568859368563;
            HEAPF32[i2 + 4 >> 2] = +(HEAPU8[i13 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i2 + 8 >> 2] = +(HEAPU8[i13 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i2 + 12 >> 2] = +(HEAPU8[i13 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i19 = i15 + 1 | 0;
            if (i19 >>> 0 < i9 >>> 0) {
             i15 = i19;
             i2 = i2 + 16 | 0;
             i13 = i13 + 4 | 0;
            } else {
             break;
            }
           }
           i13 = HEAP32[i7 >> 2] | 0;
           if ((i13 | 0) == 0) {
            break;
           }
           i2 = 0;
           i15 = i20;
           i19 = HEAP32[i8 >> 2] | 0;
           while (1) {
            HEAPF32[i15 >> 2] = +HEAPF32[i19 >> 2];
            HEAPF32[i15 + 4 >> 2] = +HEAPF32[i19 + 12 >> 2];
            i5 = i2 + 1 | 0;
            if (i5 >>> 0 < i13 >>> 0) {
             i2 = i5;
             i15 = i15 + 8 | 0;
             i19 = i19 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i12 >>> 0 >= (HEAP32[i25 >> 2] | 0) >>> 0) {
          break L344;
         }
         i12 = i12 + 1 | 0;
         i20 = i20 + (i26 << 2) | 0;
         i24 = i24 + i27 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 1) {
      i27 = HEAP32[i1 + 16 >> 2] | 0;
      i26 = (HEAP32[i1 + 20 >> 2] | 0) >>> 2;
      i25 = i1 + 4 | 0;
      L361 : do {
       if ((HEAP32[i25 >> 2] | 0) != 0) {
        i24 = i1 + 28 | 0;
        i20 = i1 | 0;
        i12 = 1;
        i8 = HEAP32[i1 + 12 >> 2] | 0;
        i7 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i9 = HEAP32[i20 >> 2] | 0;
         do {
          if ((i9 | 0) != 0) {
           i19 = 0;
           i15 = HEAP32[i24 >> 2] | 0;
           i2 = i7;
           while (1) {
            HEAPF32[i15 >> 2] = +(HEAPU8[i2] | 0 | 0) * +.003921568859368563;
            HEAPF32[i15 + 4 >> 2] = +(HEAPU8[i2 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i15 + 8 >> 2] = +(HEAPU8[i2 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i15 + 12 >> 2] = +(HEAPU8[i2 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i13 = i19 + 1 | 0;
            if (i13 >>> 0 < i9 >>> 0) {
             i19 = i13;
             i15 = i15 + 16 | 0;
             i2 = i2 + 4 | 0;
            } else {
             break;
            }
           }
           i2 = HEAP32[i20 >> 2] | 0;
           if ((i2 | 0) == 0) {
            break;
           }
           i15 = 0;
           i19 = i8;
           i13 = HEAP32[i24 >> 2] | 0;
           while (1) {
            i5 = i13 + 12 | 0;
            HEAPF32[i19 >> 2] = +HEAPF32[i5 >> 2] * +HEAPF32[i13 >> 2];
            HEAPF32[i19 + 4 >> 2] = +HEAPF32[i5 >> 2];
            i5 = i15 + 1 | 0;
            if (i5 >>> 0 < i2 >>> 0) {
             i15 = i5;
             i19 = i19 + 8 | 0;
             i13 = i13 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i12 >>> 0 >= (HEAP32[i25 >> 2] | 0) >>> 0) {
          break L361;
         }
         i12 = i12 + 1 | 0;
         i8 = i8 + (i26 << 2) | 0;
         i7 = i7 + i27 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 2) {
      i27 = HEAP32[i1 + 16 >> 2] | 0;
      i26 = (HEAP32[i1 + 20 >> 2] | 0) >>> 2;
      i25 = i1 + 4 | 0;
      L378 : do {
       if ((HEAP32[i25 >> 2] | 0) != 0) {
        i7 = i1 + 28 | 0;
        i8 = i1 | 0;
        i12 = 1;
        i24 = HEAP32[i1 + 12 >> 2] | 0;
        i20 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i9 = HEAP32[i8 >> 2] | 0;
         do {
          if ((i9 | 0) != 0) {
           i13 = 0;
           i19 = HEAP32[i7 >> 2] | 0;
           i15 = i20;
           while (1) {
            HEAPF32[i19 >> 2] = +(HEAPU8[i15] | 0 | 0) * +.003921568859368563;
            HEAPF32[i19 + 4 >> 2] = +(HEAPU8[i15 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i19 + 8 >> 2] = +(HEAPU8[i15 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i19 + 12 >> 2] = +(HEAPU8[i15 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i2 = i13 + 1 | 0;
            if (i2 >>> 0 < i9 >>> 0) {
             i13 = i2;
             i19 = i19 + 16 | 0;
             i15 = i15 + 4 | 0;
            } else {
             break;
            }
           }
           i15 = HEAP32[i8 >> 2] | 0;
           if ((i15 | 0) == 0) {
            break;
           }
           i19 = 0;
           i13 = i24;
           i2 = HEAP32[i7 >> 2] | 0;
           while (1) {
            i5 = i2 + 12 | 0;
            d29 = +HEAPF32[i5 >> 2];
            if (d29 != +0) {
             d30 = +1 / d29;
            } else {
             d30 = +1;
            }
            HEAPF32[i13 >> 2] = d30 * +HEAPF32[i2 >> 2];
            HEAPF32[i13 + 4 >> 2] = +HEAPF32[i5 >> 2];
            i5 = i19 + 1 | 0;
            if (i5 >>> 0 < i15 >>> 0) {
             i19 = i5;
             i13 = i13 + 8 | 0;
             i2 = i2 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i12 >>> 0 >= (HEAP32[i25 >> 2] | 0) >>> 0) {
          break L378;
         }
         i12 = i12 + 1 | 0;
         i24 = i24 + (i26 << 2) | 0;
         i20 = i20 + i27 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else {
      return;
     }
     break;
    }
   case 5:
    {
     if ((i4 | 0) == 0) {
      i27 = HEAP32[i1 + 16 >> 2] | 0;
      i26 = HEAP32[i1 + 20 >> 2] | 0;
      i25 = i1 + 4 | 0;
      i20 = HEAP32[i25 >> 2] | 0;
      L401 : do {
       if ((i20 | 0) != 0) {
        i24 = i1 | 0;
        i12 = 1;
        i7 = HEAP32[i1 + 12 >> 2] | 0;
        i8 = HEAP32[i1 + 8 >> 2] | 0;
        i9 = i20;
        while (1) {
         i2 = HEAP32[i24 >> 2] | 0;
         if ((i2 | 0) == 0) {
          i31 = i9;
         } else {
          i13 = 0;
          i19 = i7;
          i15 = i8;
          while (1) {
           HEAP8[i19] = HEAP8[i15] | 0;
           HEAP8[i19 + 1 | 0] = HEAP8[i15 + 1 | 0] | 0;
           HEAP8[i19 + 2 | 0] = HEAP8[i15 + 2 | 0] | 0;
           i5 = i13 + 1 | 0;
           if (i5 >>> 0 < i2 >>> 0) {
            i13 = i5;
            i19 = i19 + 3 | 0;
            i15 = i15 + 4 | 0;
           } else {
            break;
           }
          }
          i31 = HEAP32[i25 >> 2] | 0;
         }
         if (i12 >>> 0 >= i31 >>> 0) {
          break L401;
         }
         i12 = i12 + 1 | 0;
         i7 = i7 + i26 | 0;
         i8 = i8 + i27 | 0;
         i9 = i31;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 1) {
      i31 = HEAP32[i1 + 16 >> 2] | 0;
      i27 = HEAP32[i1 + 20 >> 2] | 0;
      i26 = i1 + 4 | 0;
      i25 = HEAP32[i26 >> 2] | 0;
      L414 : do {
       if ((i25 | 0) != 0) {
        i20 = i1 | 0;
        i9 = 1;
        i8 = HEAP32[i1 + 12 >> 2] | 0;
        i7 = HEAP32[i1 + 8 >> 2] | 0;
        i12 = i25;
        while (1) {
         i24 = HEAP32[i20 >> 2] | 0;
         if ((i24 | 0) == 0) {
          i32 = i12;
         } else {
          i15 = 0;
          i19 = i8;
          i13 = i7;
          while (1) {
           d30 = +(HEAPU8[i13 + 3 | 0] | 0 | 0) / +255;
           i2 = ~~(d30 * +((HEAPU8[i13 + 1 | 0] | 0) >>> 0));
           i5 = ~~(d30 * +((HEAPU8[i13 + 2 | 0] | 0) >>> 0));
           HEAP8[i19] = ~~(d30 * +((HEAPU8[i13] | 0) >>> 0));
           HEAP8[i19 + 1 | 0] = i2;
           HEAP8[i19 + 2 | 0] = i5;
           i5 = i15 + 1 | 0;
           if (i5 >>> 0 < i24 >>> 0) {
            i15 = i5;
            i19 = i19 + 3 | 0;
            i13 = i13 + 4 | 0;
           } else {
            break;
           }
          }
          i32 = HEAP32[i26 >> 2] | 0;
         }
         if (i9 >>> 0 >= i32 >>> 0) {
          break L414;
         }
         i9 = i9 + 1 | 0;
         i8 = i8 + i27 | 0;
         i7 = i7 + i31 | 0;
         i12 = i32;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 2) {
      i32 = HEAP32[i1 + 16 >> 2] | 0;
      i31 = HEAP32[i1 + 20 >> 2] | 0;
      i27 = i1 + 4 | 0;
      i26 = HEAP32[i27 >> 2] | 0;
      L427 : do {
       if ((i26 | 0) != 0) {
        i25 = i1 | 0;
        i12 = 1;
        i7 = HEAP32[i1 + 12 >> 2] | 0;
        i8 = HEAP32[i1 + 8 >> 2] | 0;
        i9 = i26;
        while (1) {
         i20 = HEAP32[i25 >> 2] | 0;
         if ((i20 | 0) == 0) {
          i33 = i9;
         } else {
          i13 = 0;
          i19 = i7;
          i15 = i8;
          while (1) {
           i24 = HEAP8[i15 + 3 | 0] | 0;
           if (i24 << 24 >> 24 == 0) {
            d34 = +1;
           } else {
            d34 = +255 / +(i24 & 255 | 0);
           }
           i24 = ~~(d34 * +((HEAPU8[i15 + 1 | 0] | 0) >>> 0));
           i5 = ~~(d34 * +((HEAPU8[i15 + 2 | 0] | 0) >>> 0));
           HEAP8[i19] = ~~(d34 * +((HEAPU8[i15] | 0) >>> 0));
           HEAP8[i19 + 1 | 0] = i24;
           HEAP8[i19 + 2 | 0] = i5;
           i5 = i13 + 1 | 0;
           if (i5 >>> 0 < i20 >>> 0) {
            i13 = i5;
            i19 = i19 + 3 | 0;
            i15 = i15 + 4 | 0;
           } else {
            break;
           }
          }
          i33 = HEAP32[i27 >> 2] | 0;
         }
         if (i12 >>> 0 >= i33 >>> 0) {
          break L427;
         }
         i12 = i12 + 1 | 0;
         i7 = i7 + i31 | 0;
         i8 = i8 + i32 | 0;
         i9 = i33;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else {
      return;
     }
     break;
    }
   case 20:
    {
     if ((i4 | 0) == 0) {
      i33 = HEAP32[i1 + 16 >> 2] | 0;
      i32 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i31 = i1 + 4 | 0;
      i27 = HEAP32[i31 >> 2] | 0;
      L446 : do {
       if ((i27 | 0) != 0) {
        i26 = i1 | 0;
        i9 = 1;
        i8 = HEAP32[i1 + 12 >> 2] | 0;
        i7 = HEAP32[i1 + 8 >> 2] | 0;
        i12 = i27;
        while (1) {
         i25 = HEAP32[i26 >> 2] | 0;
         if ((i25 | 0) == 0) {
          i35 = i12;
         } else {
          i15 = 0;
          i19 = i8;
          i13 = i7;
          while (1) {
           HEAP16[i19 >> 1] = (HEAPU8[i13 + 1 | 0] | 0) << 3 & 2016 | (HEAPU8[i13] | 0) << 8 & -2048 | (HEAP8[i13 + 2 | 0] & 255) >>> 3;
           i20 = i15 + 1 | 0;
           if (i20 >>> 0 < i25 >>> 0) {
            i15 = i20;
            i19 = i19 + 2 | 0;
            i13 = i13 + 4 | 0;
           } else {
            break;
           }
          }
          i35 = HEAP32[i31 >> 2] | 0;
         }
         if (i9 >>> 0 >= i35 >>> 0) {
          break L446;
         }
         i9 = i9 + 1 | 0;
         i8 = i8 + (i32 << 1) | 0;
         i7 = i7 + i33 | 0;
         i12 = i35;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 1) {
      i35 = HEAP32[i1 + 16 >> 2] | 0;
      i33 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i32 = i1 + 4 | 0;
      i31 = HEAP32[i32 >> 2] | 0;
      L459 : do {
       if ((i31 | 0) != 0) {
        i27 = i1 | 0;
        i12 = 1;
        i7 = HEAP32[i1 + 12 >> 2] | 0;
        i8 = HEAP32[i1 + 8 >> 2] | 0;
        i9 = i31;
        while (1) {
         i26 = HEAP32[i27 >> 2] | 0;
         if ((i26 | 0) == 0) {
          i36 = i9;
         } else {
          i13 = 0;
          i19 = i7;
          i15 = i8;
          while (1) {
           d34 = +(HEAPU8[i15 + 3 | 0] | 0 | 0) / +255;
           HEAP16[i19 >> 1] = (~~(d34 * +((HEAPU8[i15 + 1 | 0] | 0) >>> 0)) & 255) << 3 & 2016 | (~~(d34 * +((HEAPU8[i15] | 0) >>> 0)) & 255) << 8 & -2048 | (~~(d34 * +((HEAPU8[i15 + 2 | 0] | 0) >>> 0)) & 255) >>> 3;
           i25 = i13 + 1 | 0;
           if (i25 >>> 0 < i26 >>> 0) {
            i13 = i25;
            i19 = i19 + 2 | 0;
            i15 = i15 + 4 | 0;
           } else {
            break;
           }
          }
          i36 = HEAP32[i32 >> 2] | 0;
         }
         if (i12 >>> 0 >= i36 >>> 0) {
          break L459;
         }
         i12 = i12 + 1 | 0;
         i7 = i7 + (i33 << 1) | 0;
         i8 = i8 + i35 | 0;
         i9 = i36;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 2) {
      i36 = HEAP32[i1 + 16 >> 2] | 0;
      i35 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i33 = i1 + 4 | 0;
      i32 = HEAP32[i33 >> 2] | 0;
      L472 : do {
       if ((i32 | 0) != 0) {
        i31 = i1 | 0;
        i9 = 1;
        i8 = HEAP32[i1 + 12 >> 2] | 0;
        i7 = HEAP32[i1 + 8 >> 2] | 0;
        i12 = i32;
        while (1) {
         i27 = HEAP32[i31 >> 2] | 0;
         if ((i27 | 0) == 0) {
          i37 = i12;
         } else {
          i15 = 0;
          i19 = i8;
          i13 = i7;
          while (1) {
           i26 = HEAP8[i13 + 3 | 0] | 0;
           if (i26 << 24 >> 24 == 0) {
            d38 = +1;
           } else {
            d38 = +255 / +(i26 & 255 | 0);
           }
           HEAP16[i19 >> 1] = (~~(d38 * +((HEAPU8[i13 + 1 | 0] | 0) >>> 0)) & 255) << 3 & 2016 | (~~(d38 * +((HEAPU8[i13] | 0) >>> 0)) & 255) << 8 & -2048 | (~~(d38 * +((HEAPU8[i13 + 2 | 0] | 0) >>> 0)) & 255) >>> 3;
           i26 = i15 + 1 | 0;
           if (i26 >>> 0 < i27 >>> 0) {
            i15 = i26;
            i19 = i19 + 2 | 0;
            i13 = i13 + 4 | 0;
           } else {
            break;
           }
          }
          i37 = HEAP32[i33 >> 2] | 0;
         }
         if (i9 >>> 0 >= i37 >>> 0) {
          break L472;
         }
         i9 = i9 + 1 | 0;
         i8 = i8 + (i35 << 1) | 0;
         i7 = i7 + i36 | 0;
         i12 = i37;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else {
      return;
     }
     break;
    }
   case 8:
    {
     if ((i4 | 0) == 0) {
      i37 = HEAP32[i1 + 16 >> 2] | 0;
      i36 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i35 = i1 + 4 | 0;
      L491 : do {
       if ((HEAP32[i35 >> 2] | 0) != 0) {
        i33 = i1 + 28 | 0;
        i32 = i1 | 0;
        i12 = 1;
        i7 = HEAP32[i1 + 12 >> 2] | 0;
        i8 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i9 = HEAP32[i32 >> 2] | 0;
         do {
          if ((i9 | 0) != 0) {
           i31 = 0;
           i13 = HEAP32[i33 >> 2] | 0;
           i19 = i8;
           while (1) {
            HEAPF32[i13 >> 2] = +(HEAPU8[i19] | 0 | 0) * +.003921568859368563;
            HEAPF32[i13 + 4 >> 2] = +(HEAPU8[i19 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i13 + 8 >> 2] = +(HEAPU8[i19 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i13 + 12 >> 2] = +(HEAPU8[i19 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i15 = i31 + 1 | 0;
            if (i15 >>> 0 < i9 >>> 0) {
             i31 = i15;
             i13 = i13 + 16 | 0;
             i19 = i19 + 4 | 0;
            } else {
             break;
            }
           }
           i19 = HEAP32[i32 >> 2] | 0;
           if ((i19 | 0) == 0) {
            break;
           }
           i13 = 0;
           i31 = i7;
           i15 = HEAP32[i33 >> 2] | 0;
           while (1) {
            i27 = (HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i15 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i26 = i27 >>> 23;
            HEAP16[i31 >> 1] = ((i27 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i26 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i26 << 1) >> 1] | 0);
            i26 = (HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i15 + 4 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i27 = i26 >>> 23;
            HEAP16[i31 + 2 >> 1] = ((i26 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i27 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i27 << 1) >> 1] | 0);
            i27 = (HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i15 + 8 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i26 = i27 >>> 23;
            HEAP16[i31 + 4 >> 1] = ((i27 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i26 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i26 << 1) >> 1] | 0);
            i26 = i13 + 1 | 0;
            if (i26 >>> 0 < i19 >>> 0) {
             i13 = i26;
             i31 = i31 + 6 | 0;
             i15 = i15 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i12 >>> 0 >= (HEAP32[i35 >> 2] | 0) >>> 0) {
          break L491;
         }
         i12 = i12 + 1 | 0;
         i7 = i7 + (i36 << 1) | 0;
         i8 = i8 + i37 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 1) {
      i37 = HEAP32[i1 + 16 >> 2] | 0;
      i36 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i35 = i1 + 4 | 0;
      L508 : do {
       if ((HEAP32[i35 >> 2] | 0) != 0) {
        i8 = i1 + 28 | 0;
        i7 = i1 | 0;
        i12 = 1;
        i33 = HEAP32[i1 + 12 >> 2] | 0;
        i32 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i9 = HEAP32[i7 >> 2] | 0;
         do {
          if ((i9 | 0) != 0) {
           i15 = 0;
           i31 = HEAP32[i8 >> 2] | 0;
           i13 = i32;
           while (1) {
            HEAPF32[i31 >> 2] = +(HEAPU8[i13] | 0 | 0) * +.003921568859368563;
            HEAPF32[i31 + 4 >> 2] = +(HEAPU8[i13 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i31 + 8 >> 2] = +(HEAPU8[i13 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i31 + 12 >> 2] = +(HEAPU8[i13 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i19 = i15 + 1 | 0;
            if (i19 >>> 0 < i9 >>> 0) {
             i15 = i19;
             i31 = i31 + 16 | 0;
             i13 = i13 + 4 | 0;
            } else {
             break;
            }
           }
           i13 = HEAP32[i7 >> 2] | 0;
           if ((i13 | 0) == 0) {
            break;
           }
           i31 = 0;
           i15 = i33;
           i19 = HEAP32[i8 >> 2] | 0;
           while (1) {
            d38 = +HEAPF32[i19 + 12 >> 2];
            i26 = (HEAPF32[tempDoublePtr >> 2] = d38 * +HEAPF32[i19 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i27 = i26 >>> 23;
            HEAP16[i15 >> 1] = ((i26 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i27 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i27 << 1) >> 1] | 0);
            i27 = (HEAPF32[tempDoublePtr >> 2] = d38 * +HEAPF32[i19 + 4 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i26 = i27 >>> 23;
            HEAP16[i15 + 2 >> 1] = ((i27 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i26 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i26 << 1) >> 1] | 0);
            i26 = (HEAPF32[tempDoublePtr >> 2] = d38 * +HEAPF32[i19 + 8 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i27 = i26 >>> 23;
            HEAP16[i15 + 4 >> 1] = ((i26 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i27 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i27 << 1) >> 1] | 0);
            i27 = i31 + 1 | 0;
            if (i27 >>> 0 < i13 >>> 0) {
             i31 = i27;
             i15 = i15 + 6 | 0;
             i19 = i19 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i12 >>> 0 >= (HEAP32[i35 >> 2] | 0) >>> 0) {
          break L508;
         }
         i12 = i12 + 1 | 0;
         i33 = i33 + (i36 << 1) | 0;
         i32 = i32 + i37 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 2) {
      i37 = HEAP32[i1 + 16 >> 2] | 0;
      i36 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i35 = i1 + 4 | 0;
      L525 : do {
       if ((HEAP32[i35 >> 2] | 0) != 0) {
        i32 = i1 + 28 | 0;
        i33 = i1 | 0;
        i12 = 1;
        i8 = HEAP32[i1 + 12 >> 2] | 0;
        i7 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i9 = HEAP32[i33 >> 2] | 0;
         do {
          if ((i9 | 0) != 0) {
           i19 = 0;
           i15 = HEAP32[i32 >> 2] | 0;
           i31 = i7;
           while (1) {
            HEAPF32[i15 >> 2] = +(HEAPU8[i31] | 0 | 0) * +.003921568859368563;
            HEAPF32[i15 + 4 >> 2] = +(HEAPU8[i31 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i15 + 8 >> 2] = +(HEAPU8[i31 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i15 + 12 >> 2] = +(HEAPU8[i31 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i13 = i19 + 1 | 0;
            if (i13 >>> 0 < i9 >>> 0) {
             i19 = i13;
             i15 = i15 + 16 | 0;
             i31 = i31 + 4 | 0;
            } else {
             break;
            }
           }
           i31 = HEAP32[i33 >> 2] | 0;
           if ((i31 | 0) == 0) {
            break;
           }
           i15 = 0;
           i19 = i8;
           i13 = HEAP32[i32 >> 2] | 0;
           while (1) {
            d38 = +HEAPF32[i13 + 12 >> 2];
            if (d38 != +0) {
             d39 = +1 / d38;
            } else {
             d39 = +1;
            }
            i27 = (HEAPF32[tempDoublePtr >> 2] = d39 * +HEAPF32[i13 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i26 = i27 >>> 23;
            HEAP16[i19 >> 1] = ((i27 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i26 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i26 << 1) >> 1] | 0);
            i26 = (HEAPF32[tempDoublePtr >> 2] = d39 * +HEAPF32[i13 + 4 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i27 = i26 >>> 23;
            HEAP16[i19 + 2 >> 1] = ((i26 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i27 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i27 << 1) >> 1] | 0);
            i27 = (HEAPF32[tempDoublePtr >> 2] = d39 * +HEAPF32[i13 + 8 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i26 = i27 >>> 23;
            HEAP16[i19 + 4 >> 1] = ((i27 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i26 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i26 << 1) >> 1] | 0);
            i26 = i15 + 1 | 0;
            if (i26 >>> 0 < i31 >>> 0) {
             i15 = i26;
             i19 = i19 + 6 | 0;
             i13 = i13 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i12 >>> 0 >= (HEAP32[i35 >> 2] | 0) >>> 0) {
          break L525;
         }
         i12 = i12 + 1 | 0;
         i8 = i8 + (i36 << 1) | 0;
         i7 = i7 + i37 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else {
      return;
     }
     break;
    }
   case 9:
    {
     if ((i4 | 0) == 0) {
      i37 = HEAP32[i1 + 16 >> 2] | 0;
      i36 = (HEAP32[i1 + 20 >> 2] | 0) >>> 2;
      i35 = i1 + 4 | 0;
      L548 : do {
       if ((HEAP32[i35 >> 2] | 0) != 0) {
        i7 = i1 + 28 | 0;
        i8 = i1 | 0;
        i12 = 1;
        i32 = HEAP32[i1 + 12 >> 2] | 0;
        i33 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i9 = HEAP32[i8 >> 2] | 0;
         do {
          if ((i9 | 0) != 0) {
           i13 = 0;
           i19 = HEAP32[i7 >> 2] | 0;
           i15 = i33;
           while (1) {
            HEAPF32[i19 >> 2] = +(HEAPU8[i15] | 0 | 0) * +.003921568859368563;
            HEAPF32[i19 + 4 >> 2] = +(HEAPU8[i15 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i19 + 8 >> 2] = +(HEAPU8[i15 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i19 + 12 >> 2] = +(HEAPU8[i15 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i31 = i13 + 1 | 0;
            if (i31 >>> 0 < i9 >>> 0) {
             i13 = i31;
             i19 = i19 + 16 | 0;
             i15 = i15 + 4 | 0;
            } else {
             break;
            }
           }
           i15 = HEAP32[i8 >> 2] | 0;
           if ((i15 | 0) == 0) {
            break;
           }
           i19 = 0;
           i13 = i32;
           i31 = HEAP32[i7 >> 2] | 0;
           while (1) {
            HEAPF32[i13 >> 2] = +HEAPF32[i31 >> 2];
            HEAPF32[i13 + 4 >> 2] = +HEAPF32[i31 + 4 >> 2];
            HEAPF32[i13 + 8 >> 2] = +HEAPF32[i31 + 8 >> 2];
            i26 = i19 + 1 | 0;
            if (i26 >>> 0 < i15 >>> 0) {
             i19 = i26;
             i13 = i13 + 12 | 0;
             i31 = i31 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i12 >>> 0 >= (HEAP32[i35 >> 2] | 0) >>> 0) {
          break L548;
         }
         i12 = i12 + 1 | 0;
         i32 = i32 + (i36 << 2) | 0;
         i33 = i33 + i37 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 1) {
      i37 = HEAP32[i1 + 16 >> 2] | 0;
      i36 = (HEAP32[i1 + 20 >> 2] | 0) >>> 2;
      i35 = i1 + 4 | 0;
      L565 : do {
       if ((HEAP32[i35 >> 2] | 0) != 0) {
        i33 = i1 + 28 | 0;
        i32 = i1 | 0;
        i12 = 1;
        i7 = HEAP32[i1 + 12 >> 2] | 0;
        i8 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i9 = HEAP32[i32 >> 2] | 0;
         do {
          if ((i9 | 0) != 0) {
           i31 = 0;
           i13 = HEAP32[i33 >> 2] | 0;
           i19 = i8;
           while (1) {
            HEAPF32[i13 >> 2] = +(HEAPU8[i19] | 0 | 0) * +.003921568859368563;
            HEAPF32[i13 + 4 >> 2] = +(HEAPU8[i19 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i13 + 8 >> 2] = +(HEAPU8[i19 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i13 + 12 >> 2] = +(HEAPU8[i19 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i15 = i31 + 1 | 0;
            if (i15 >>> 0 < i9 >>> 0) {
             i31 = i15;
             i13 = i13 + 16 | 0;
             i19 = i19 + 4 | 0;
            } else {
             break;
            }
           }
           i19 = HEAP32[i32 >> 2] | 0;
           if ((i19 | 0) == 0) {
            break;
           }
           i13 = 0;
           i31 = i7;
           i15 = HEAP32[i33 >> 2] | 0;
           while (1) {
            d39 = +HEAPF32[i15 + 12 >> 2];
            HEAPF32[i31 >> 2] = d39 * +HEAPF32[i15 >> 2];
            HEAPF32[i31 + 4 >> 2] = d39 * +HEAPF32[i15 + 4 >> 2];
            HEAPF32[i31 + 8 >> 2] = d39 * +HEAPF32[i15 + 8 >> 2];
            i26 = i13 + 1 | 0;
            if (i26 >>> 0 < i19 >>> 0) {
             i13 = i26;
             i31 = i31 + 12 | 0;
             i15 = i15 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i12 >>> 0 >= (HEAP32[i35 >> 2] | 0) >>> 0) {
          break L565;
         }
         i12 = i12 + 1 | 0;
         i7 = i7 + (i36 << 2) | 0;
         i8 = i8 + i37 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 2) {
      i37 = HEAP32[i1 + 16 >> 2] | 0;
      i36 = (HEAP32[i1 + 20 >> 2] | 0) >>> 2;
      i35 = i1 + 4 | 0;
      L582 : do {
       if ((HEAP32[i35 >> 2] | 0) != 0) {
        i8 = i1 + 28 | 0;
        i7 = i1 | 0;
        i12 = 1;
        i33 = HEAP32[i1 + 12 >> 2] | 0;
        i32 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i9 = HEAP32[i7 >> 2] | 0;
         do {
          if ((i9 | 0) != 0) {
           i15 = 0;
           i31 = HEAP32[i8 >> 2] | 0;
           i13 = i32;
           while (1) {
            HEAPF32[i31 >> 2] = +(HEAPU8[i13] | 0 | 0) * +.003921568859368563;
            HEAPF32[i31 + 4 >> 2] = +(HEAPU8[i13 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i31 + 8 >> 2] = +(HEAPU8[i13 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i31 + 12 >> 2] = +(HEAPU8[i13 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i19 = i15 + 1 | 0;
            if (i19 >>> 0 < i9 >>> 0) {
             i15 = i19;
             i31 = i31 + 16 | 0;
             i13 = i13 + 4 | 0;
            } else {
             break;
            }
           }
           i13 = HEAP32[i7 >> 2] | 0;
           if ((i13 | 0) == 0) {
            break;
           }
           i31 = 0;
           i15 = i33;
           i19 = HEAP32[i8 >> 2] | 0;
           while (1) {
            d39 = +HEAPF32[i19 + 12 >> 2];
            if (d39 != +0) {
             d40 = +1 / d39;
            } else {
             d40 = +1;
            }
            HEAPF32[i15 >> 2] = d40 * +HEAPF32[i19 >> 2];
            HEAPF32[i15 + 4 >> 2] = d40 * +HEAPF32[i19 + 4 >> 2];
            HEAPF32[i15 + 8 >> 2] = d40 * +HEAPF32[i19 + 8 >> 2];
            i26 = i31 + 1 | 0;
            if (i26 >>> 0 < i13 >>> 0) {
             i31 = i26;
             i15 = i15 + 12 | 0;
             i19 = i19 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i12 >>> 0 >= (HEAP32[i35 >> 2] | 0) >>> 0) {
          break L582;
         }
         i12 = i12 + 1 | 0;
         i33 = i33 + (i36 << 2) | 0;
         i32 = i32 + i37 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else {
      return;
     }
     break;
    }
   case 0:
    {
     if ((i4 | 0) == 1) {
      i37 = HEAP32[i1 + 16 >> 2] | 0;
      i36 = HEAP32[i1 + 20 >> 2] | 0;
      i35 = i1 + 4 | 0;
      i32 = HEAP32[i35 >> 2] | 0;
      L605 : do {
       if ((i32 | 0) != 0) {
        i33 = i1 | 0;
        i12 = 1;
        i8 = HEAP32[i1 + 12 >> 2] | 0;
        i7 = HEAP32[i1 + 8 >> 2] | 0;
        i9 = i32;
        while (1) {
         i19 = HEAP32[i33 >> 2] | 0;
         if ((i19 | 0) == 0) {
          i41 = i9;
         } else {
          i15 = 0;
          i31 = i8;
          i13 = i7;
          while (1) {
           i26 = i13 + 3 | 0;
           d40 = +(HEAPU8[i26] | 0 | 0) / +255;
           i27 = ~~(d40 * +((HEAPU8[i13 + 1 | 0] | 0) >>> 0));
           i25 = ~~(d40 * +((HEAPU8[i13 + 2 | 0] | 0) >>> 0));
           HEAP8[i31] = ~~(d40 * +((HEAPU8[i13] | 0) >>> 0));
           HEAP8[i31 + 1 | 0] = i27;
           HEAP8[i31 + 2 | 0] = i25;
           HEAP8[i31 + 3 | 0] = HEAP8[i26] | 0;
           i26 = i15 + 1 | 0;
           if (i26 >>> 0 < i19 >>> 0) {
            i15 = i26;
            i31 = i31 + 4 | 0;
            i13 = i13 + 4 | 0;
           } else {
            break;
           }
          }
          i41 = HEAP32[i35 >> 2] | 0;
         }
         if (i12 >>> 0 >= i41 >>> 0) {
          break L605;
         }
         i12 = i12 + 1 | 0;
         i8 = i8 + i36 | 0;
         i7 = i7 + i37 | 0;
         i9 = i41;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 2) {
      i41 = HEAP32[i1 + 16 >> 2] | 0;
      i37 = HEAP32[i1 + 20 >> 2] | 0;
      i36 = i1 + 4 | 0;
      i35 = HEAP32[i36 >> 2] | 0;
      L618 : do {
       if ((i35 | 0) != 0) {
        i32 = i1 | 0;
        i9 = 1;
        i7 = HEAP32[i1 + 12 >> 2] | 0;
        i8 = HEAP32[i1 + 8 >> 2] | 0;
        i12 = i35;
        while (1) {
         i33 = HEAP32[i32 >> 2] | 0;
         if ((i33 | 0) == 0) {
          i42 = i12;
         } else {
          i13 = 0;
          i31 = i7;
          i15 = i8;
          while (1) {
           i19 = i15 + 3 | 0;
           i26 = HEAP8[i19] | 0;
           if (i26 << 24 >> 24 == 0) {
            d43 = +1;
           } else {
            d43 = +255 / +(i26 & 255 | 0);
           }
           i26 = ~~(d43 * +((HEAPU8[i15 + 1 | 0] | 0) >>> 0));
           i25 = ~~(d43 * +((HEAPU8[i15 + 2 | 0] | 0) >>> 0));
           HEAP8[i31] = ~~(d43 * +((HEAPU8[i15] | 0) >>> 0));
           HEAP8[i31 + 1 | 0] = i26;
           HEAP8[i31 + 2 | 0] = i25;
           HEAP8[i31 + 3 | 0] = HEAP8[i19] | 0;
           i19 = i13 + 1 | 0;
           if (i19 >>> 0 < i33 >>> 0) {
            i13 = i19;
            i31 = i31 + 4 | 0;
            i15 = i15 + 4 | 0;
           } else {
            break;
           }
          }
          i42 = HEAP32[i36 >> 2] | 0;
         }
         if (i9 >>> 0 >= i42 >>> 0) {
          break L618;
         }
         i9 = i9 + 1 | 0;
         i7 = i7 + i37 | 0;
         i8 = i8 + i41 | 0;
         i12 = i42;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else {
      return;
     }
     break;
    }
   case 18:
    {
     if ((i4 | 0) == 0) {
      i42 = HEAP32[i1 + 16 >> 2] | 0;
      i41 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i37 = i1 + 4 | 0;
      i36 = HEAP32[i37 >> 2] | 0;
      L637 : do {
       if ((i36 | 0) != 0) {
        i35 = i1 | 0;
        i12 = 1;
        i8 = HEAP32[i1 + 12 >> 2] | 0;
        i7 = HEAP32[i1 + 8 >> 2] | 0;
        i9 = i36;
        while (1) {
         i32 = HEAP32[i35 >> 2] | 0;
         if ((i32 | 0) == 0) {
          i44 = i9;
         } else {
          i15 = 0;
          i31 = i8;
          i13 = i7;
          while (1) {
           HEAP16[i31 >> 1] = (HEAPU8[i13 + 1 | 0] | 0) << 3 & 1984 | (HEAPU8[i13] | 0) << 8 & -2048 | (HEAP8[i13 + 2 | 0] & 255) >>> 2 & 62 | (HEAP8[i13 + 3 | 0] & 255) >>> 7;
           i33 = i15 + 1 | 0;
           if (i33 >>> 0 < i32 >>> 0) {
            i15 = i33;
            i31 = i31 + 2 | 0;
            i13 = i13 + 4 | 0;
           } else {
            break;
           }
          }
          i44 = HEAP32[i37 >> 2] | 0;
         }
         if (i12 >>> 0 >= i44 >>> 0) {
          break L637;
         }
         i12 = i12 + 1 | 0;
         i8 = i8 + (i41 << 1) | 0;
         i7 = i7 + i42 | 0;
         i9 = i44;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 1) {
      i44 = HEAP32[i1 + 16 >> 2] | 0;
      i42 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i41 = i1 + 4 | 0;
      i37 = HEAP32[i41 >> 2] | 0;
      L650 : do {
       if ((i37 | 0) != 0) {
        i36 = i1 | 0;
        i9 = 1;
        i7 = HEAP32[i1 + 12 >> 2] | 0;
        i8 = HEAP32[i1 + 8 >> 2] | 0;
        i12 = i37;
        while (1) {
         i35 = HEAP32[i36 >> 2] | 0;
         if ((i35 | 0) == 0) {
          i45 = i12;
         } else {
          i13 = 0;
          i31 = i7;
          i15 = i8;
          while (1) {
           i32 = HEAPU8[i15 + 3 | 0] | 0;
           d43 = +(i32 | 0) / +255;
           HEAP16[i31 >> 1] = (~~(d43 * +((HEAPU8[i15] | 0) >>> 0)) & 255) << 8 & 63488 | i32 >>> 7 | (~~(d43 * +((HEAPU8[i15 + 1 | 0] | 0) >>> 0)) & 255) << 3 & 1984 | (~~(d43 * +((HEAPU8[i15 + 2 | 0] | 0) >>> 0)) & 255) >>> 2 & 62;
           i32 = i13 + 1 | 0;
           if (i32 >>> 0 < i35 >>> 0) {
            i13 = i32;
            i31 = i31 + 2 | 0;
            i15 = i15 + 4 | 0;
           } else {
            break;
           }
          }
          i45 = HEAP32[i41 >> 2] | 0;
         }
         if (i9 >>> 0 >= i45 >>> 0) {
          break L650;
         }
         i9 = i9 + 1 | 0;
         i7 = i7 + (i42 << 1) | 0;
         i8 = i8 + i44 | 0;
         i12 = i45;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 2) {
      i45 = HEAP32[i1 + 16 >> 2] | 0;
      i44 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i42 = i1 + 4 | 0;
      i41 = HEAP32[i42 >> 2] | 0;
      L663 : do {
       if ((i41 | 0) != 0) {
        i37 = i1 | 0;
        i12 = 1;
        i8 = HEAP32[i1 + 12 >> 2] | 0;
        i7 = HEAP32[i1 + 8 >> 2] | 0;
        i9 = i41;
        while (1) {
         i36 = HEAP32[i37 >> 2] | 0;
         if ((i36 | 0) == 0) {
          i46 = i9;
         } else {
          i15 = 0;
          i31 = i8;
          i13 = i7;
          while (1) {
           i35 = HEAP8[i13 + 3 | 0] | 0;
           if (i35 << 24 >> 24 == 0) {
            d47 = +1;
           } else {
            d47 = +255 / +(i35 & 255 | 0);
           }
           HEAP16[i31 >> 1] = (~~(d47 * +((HEAPU8[i13] | 0) >>> 0)) & 255) << 8 & -2048 | (i35 & 255) >>> 7 | (~~(d47 * +((HEAPU8[i13 + 1 | 0] | 0) >>> 0)) & 255) << 3 & 1984 | (~~(d47 * +((HEAPU8[i13 + 2 | 0] | 0) >>> 0)) & 255) >>> 2 & 62;
           i35 = i15 + 1 | 0;
           if (i35 >>> 0 < i36 >>> 0) {
            i15 = i35;
            i31 = i31 + 2 | 0;
            i13 = i13 + 4 | 0;
           } else {
            break;
           }
          }
          i46 = HEAP32[i42 >> 2] | 0;
         }
         if (i12 >>> 0 >= i46 >>> 0) {
          break L663;
         }
         i12 = i12 + 1 | 0;
         i8 = i8 + (i44 << 1) | 0;
         i7 = i7 + i45 | 0;
         i9 = i46;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else {
      return;
     }
     break;
    }
   case 19:
    {
     if ((i4 | 0) == 0) {
      i46 = HEAP32[i1 + 16 >> 2] | 0;
      i45 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i44 = i1 + 4 | 0;
      i42 = HEAP32[i44 >> 2] | 0;
      L682 : do {
       if ((i42 | 0) != 0) {
        i41 = i1 | 0;
        i9 = 1;
        i7 = HEAP32[i1 + 12 >> 2] | 0;
        i8 = HEAP32[i1 + 8 >> 2] | 0;
        i12 = i42;
        while (1) {
         i37 = HEAP32[i41 >> 2] | 0;
         if ((i37 | 0) == 0) {
          i48 = i12;
         } else {
          i13 = 0;
          i31 = i7;
          i15 = i8;
          while (1) {
           HEAP16[i31 >> 1] = (HEAPU8[i15 + 1 | 0] | 0) << 4 & 3840 | (HEAPU8[i15] | 0) << 8 & -4096 | HEAP8[i15 + 2 | 0] & 240 | (HEAP8[i15 + 3 | 0] & 255) >>> 4;
           i36 = i13 + 1 | 0;
           if (i36 >>> 0 < i37 >>> 0) {
            i13 = i36;
            i31 = i31 + 2 | 0;
            i15 = i15 + 4 | 0;
           } else {
            break;
           }
          }
          i48 = HEAP32[i44 >> 2] | 0;
         }
         if (i9 >>> 0 >= i48 >>> 0) {
          break L682;
         }
         i9 = i9 + 1 | 0;
         i7 = i7 + (i45 << 1) | 0;
         i8 = i8 + i46 | 0;
         i12 = i48;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 1) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i46 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i45 = i1 + 4 | 0;
      i44 = HEAP32[i45 >> 2] | 0;
      L695 : do {
       if ((i44 | 0) != 0) {
        i42 = i1 | 0;
        i12 = 1;
        i8 = HEAP32[i1 + 12 >> 2] | 0;
        i7 = HEAP32[i1 + 8 >> 2] | 0;
        i9 = i44;
        while (1) {
         i41 = HEAP32[i42 >> 2] | 0;
         if ((i41 | 0) == 0) {
          i49 = i9;
         } else {
          i15 = 0;
          i31 = i8;
          i13 = i7;
          while (1) {
           i37 = HEAPU8[i13 + 3 | 0] | 0;
           d47 = +(i37 | 0) / +255;
           HEAP16[i31 >> 1] = (~~(d47 * +((HEAPU8[i13] | 0) >>> 0)) & 255) << 8 & 61440 | i37 >>> 4 | (~~(d47 * +((HEAPU8[i13 + 1 | 0] | 0) >>> 0)) & 255) << 4 & 3840 | ~~(d47 * +((HEAPU8[i13 + 2 | 0] | 0) >>> 0)) & 240;
           i37 = i15 + 1 | 0;
           if (i37 >>> 0 < i41 >>> 0) {
            i15 = i37;
            i31 = i31 + 2 | 0;
            i13 = i13 + 4 | 0;
           } else {
            break;
           }
          }
          i49 = HEAP32[i45 >> 2] | 0;
         }
         if (i12 >>> 0 >= i49 >>> 0) {
          break L695;
         }
         i12 = i12 + 1 | 0;
         i8 = i8 + (i46 << 1) | 0;
         i7 = i7 + i48 | 0;
         i9 = i49;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 2) {
      i49 = HEAP32[i1 + 16 >> 2] | 0;
      i48 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i46 = i1 + 4 | 0;
      i45 = HEAP32[i46 >> 2] | 0;
      L708 : do {
       if ((i45 | 0) != 0) {
        i44 = i1 | 0;
        i9 = 1;
        i7 = HEAP32[i1 + 12 >> 2] | 0;
        i8 = HEAP32[i1 + 8 >> 2] | 0;
        i12 = i45;
        while (1) {
         i42 = HEAP32[i44 >> 2] | 0;
         if ((i42 | 0) == 0) {
          i50 = i12;
         } else {
          i13 = 0;
          i31 = i7;
          i15 = i8;
          while (1) {
           i41 = HEAP8[i15 + 3 | 0] | 0;
           if (i41 << 24 >> 24 == 0) {
            d51 = +1;
           } else {
            d51 = +255 / +(i41 & 255 | 0);
           }
           HEAP16[i31 >> 1] = (~~(d51 * +((HEAPU8[i15] | 0) >>> 0)) & 255) << 8 & -4096 | (i41 & 255) >>> 4 | (~~(d51 * +((HEAPU8[i15 + 1 | 0] | 0) >>> 0)) & 255) << 4 & 3840 | ~~(d51 * +((HEAPU8[i15 + 2 | 0] | 0) >>> 0)) & 240;
           i41 = i13 + 1 | 0;
           if (i41 >>> 0 < i42 >>> 0) {
            i13 = i41;
            i31 = i31 + 2 | 0;
            i15 = i15 + 4 | 0;
           } else {
            break;
           }
          }
          i50 = HEAP32[i46 >> 2] | 0;
         }
         if (i9 >>> 0 >= i50 >>> 0) {
          break L708;
         }
         i9 = i9 + 1 | 0;
         i7 = i7 + (i48 << 1) | 0;
         i8 = i8 + i49 | 0;
         i12 = i50;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else {
      return;
     }
     break;
    }
   case 3:
    {
     if ((i4 | 0) == 0) {
      i50 = HEAP32[i1 + 16 >> 2] | 0;
      i49 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i48 = i1 + 4 | 0;
      L727 : do {
       if ((HEAP32[i48 >> 2] | 0) != 0) {
        i46 = i1 + 28 | 0;
        i45 = i1 | 0;
        i12 = 1;
        i8 = HEAP32[i1 + 12 >> 2] | 0;
        i7 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i9 = HEAP32[i45 >> 2] | 0;
         do {
          if ((i9 | 0) != 0) {
           i44 = 0;
           i15 = HEAP32[i46 >> 2] | 0;
           i31 = i7;
           while (1) {
            HEAPF32[i15 >> 2] = +(HEAPU8[i31] | 0 | 0) * +.003921568859368563;
            HEAPF32[i15 + 4 >> 2] = +(HEAPU8[i31 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i15 + 8 >> 2] = +(HEAPU8[i31 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i15 + 12 >> 2] = +(HEAPU8[i31 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i13 = i44 + 1 | 0;
            if (i13 >>> 0 < i9 >>> 0) {
             i44 = i13;
             i15 = i15 + 16 | 0;
             i31 = i31 + 4 | 0;
            } else {
             break;
            }
           }
           i31 = HEAP32[i45 >> 2] | 0;
           if ((i31 | 0) == 0) {
            break;
           }
           i15 = 0;
           i44 = i8;
           i13 = HEAP32[i46 >> 2] | 0;
           while (1) {
            i42 = (HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i13 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i41 = i42 >>> 23;
            HEAP16[i44 >> 1] = ((i42 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i41 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i41 << 1) >> 1] | 0);
            i41 = (HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i13 + 4 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i42 = i41 >>> 23;
            HEAP16[i44 + 2 >> 1] = ((i41 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i42 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i42 << 1) >> 1] | 0);
            i42 = (HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i13 + 8 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i41 = i42 >>> 23;
            HEAP16[i44 + 4 >> 1] = ((i42 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i41 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i41 << 1) >> 1] | 0);
            i41 = (HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i13 + 12 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i42 = i41 >>> 23;
            HEAP16[i44 + 6 >> 1] = ((i41 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i42 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i42 << 1) >> 1] | 0);
            i42 = i15 + 1 | 0;
            if (i42 >>> 0 < i31 >>> 0) {
             i15 = i42;
             i44 = i44 + 8 | 0;
             i13 = i13 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i12 >>> 0 >= (HEAP32[i48 >> 2] | 0) >>> 0) {
          break L727;
         }
         i12 = i12 + 1 | 0;
         i8 = i8 + (i49 << 1) | 0;
         i7 = i7 + i50 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 1) {
      i50 = HEAP32[i1 + 16 >> 2] | 0;
      i49 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i48 = i1 + 4 | 0;
      L744 : do {
       if ((HEAP32[i48 >> 2] | 0) != 0) {
        i7 = i1 + 28 | 0;
        i8 = i1 | 0;
        i12 = 1;
        i46 = HEAP32[i1 + 12 >> 2] | 0;
        i45 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i9 = HEAP32[i8 >> 2] | 0;
         do {
          if ((i9 | 0) != 0) {
           i13 = 0;
           i44 = HEAP32[i7 >> 2] | 0;
           i15 = i45;
           while (1) {
            HEAPF32[i44 >> 2] = +(HEAPU8[i15] | 0 | 0) * +.003921568859368563;
            HEAPF32[i44 + 4 >> 2] = +(HEAPU8[i15 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i44 + 8 >> 2] = +(HEAPU8[i15 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i44 + 12 >> 2] = +(HEAPU8[i15 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i31 = i13 + 1 | 0;
            if (i31 >>> 0 < i9 >>> 0) {
             i13 = i31;
             i44 = i44 + 16 | 0;
             i15 = i15 + 4 | 0;
            } else {
             break;
            }
           }
           i15 = HEAP32[i8 >> 2] | 0;
           if ((i15 | 0) == 0) {
            break;
           }
           i44 = 0;
           i13 = i46;
           i31 = HEAP32[i7 >> 2] | 0;
           while (1) {
            i42 = i31 + 12 | 0;
            d51 = +HEAPF32[i42 >> 2];
            i41 = (HEAPF32[tempDoublePtr >> 2] = d51 * +HEAPF32[i31 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i37 = i41 >>> 23;
            HEAP16[i13 >> 1] = ((i41 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i37 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i37 << 1) >> 1] | 0);
            i37 = (HEAPF32[tempDoublePtr >> 2] = d51 * +HEAPF32[i31 + 4 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i41 = i37 >>> 23;
            HEAP16[i13 + 2 >> 1] = ((i37 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i41 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i41 << 1) >> 1] | 0);
            i41 = (HEAPF32[tempDoublePtr >> 2] = d51 * +HEAPF32[i31 + 8 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i37 = i41 >>> 23;
            HEAP16[i13 + 4 >> 1] = ((i41 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i37 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i37 << 1) >> 1] | 0);
            i37 = (HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i42 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i42 = i37 >>> 23;
            HEAP16[i13 + 6 >> 1] = ((i37 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i42 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i42 << 1) >> 1] | 0);
            i42 = i44 + 1 | 0;
            if (i42 >>> 0 < i15 >>> 0) {
             i44 = i42;
             i13 = i13 + 8 | 0;
             i31 = i31 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i12 >>> 0 >= (HEAP32[i48 >> 2] | 0) >>> 0) {
          break L744;
         }
         i12 = i12 + 1 | 0;
         i46 = i46 + (i49 << 1) | 0;
         i45 = i45 + i50 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 2) {
      i50 = HEAP32[i1 + 16 >> 2] | 0;
      i49 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i48 = i1 + 4 | 0;
      L761 : do {
       if ((HEAP32[i48 >> 2] | 0) != 0) {
        i45 = i1 + 28 | 0;
        i46 = i1 | 0;
        i12 = 1;
        i7 = HEAP32[i1 + 12 >> 2] | 0;
        i8 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i9 = HEAP32[i46 >> 2] | 0;
         do {
          if ((i9 | 0) != 0) {
           i31 = 0;
           i13 = HEAP32[i45 >> 2] | 0;
           i44 = i8;
           while (1) {
            HEAPF32[i13 >> 2] = +(HEAPU8[i44] | 0 | 0) * +.003921568859368563;
            HEAPF32[i13 + 4 >> 2] = +(HEAPU8[i44 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i13 + 8 >> 2] = +(HEAPU8[i44 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i13 + 12 >> 2] = +(HEAPU8[i44 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i15 = i31 + 1 | 0;
            if (i15 >>> 0 < i9 >>> 0) {
             i31 = i15;
             i13 = i13 + 16 | 0;
             i44 = i44 + 4 | 0;
            } else {
             break;
            }
           }
           i44 = HEAP32[i46 >> 2] | 0;
           if ((i44 | 0) == 0) {
            break;
           }
           i13 = 0;
           i31 = i7;
           i15 = HEAP32[i45 >> 2] | 0;
           while (1) {
            i42 = i15 + 12 | 0;
            d51 = +HEAPF32[i42 >> 2];
            if (d51 != +0) {
             d52 = +1 / d51;
            } else {
             d52 = +1;
            }
            i37 = (HEAPF32[tempDoublePtr >> 2] = d52 * +HEAPF32[i15 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i41 = i37 >>> 23;
            HEAP16[i31 >> 1] = ((i37 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i41 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i41 << 1) >> 1] | 0);
            i41 = (HEAPF32[tempDoublePtr >> 2] = d52 * +HEAPF32[i15 + 4 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i37 = i41 >>> 23;
            HEAP16[i31 + 2 >> 1] = ((i41 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i37 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i37 << 1) >> 1] | 0);
            i37 = (HEAPF32[tempDoublePtr >> 2] = d52 * +HEAPF32[i15 + 8 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i41 = i37 >>> 23;
            HEAP16[i31 + 4 >> 1] = ((i37 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i41 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i41 << 1) >> 1] | 0);
            i41 = (HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i42 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i42 = i41 >>> 23;
            HEAP16[i31 + 6 >> 1] = ((i41 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i42 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i42 << 1) >> 1] | 0);
            i42 = i13 + 1 | 0;
            if (i42 >>> 0 < i44 >>> 0) {
             i13 = i42;
             i31 = i31 + 8 | 0;
             i15 = i15 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i12 >>> 0 >= (HEAP32[i48 >> 2] | 0) >>> 0) {
          break L761;
         }
         i12 = i12 + 1 | 0;
         i7 = i7 + (i49 << 1) | 0;
         i8 = i8 + i50 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else {
      return;
     }
     break;
    }
   case 4:
    {
     if ((i4 | 0) == 0) {
      i50 = HEAP32[i1 + 16 >> 2] | 0;
      i49 = HEAP32[i1 + 20 >> 2] | 0;
      i48 = i49 >>> 2;
      i8 = HEAP32[i1 + 8 >> 2] | 0;
      i7 = HEAP32[i1 + 12 >> 2] | 0;
      i12 = i1 + 4 | 0;
      i45 = HEAP32[i12 >> 2] | 0;
      i46 = (i45 | 0) == 0;
      L784 : do {
       if ((i49 | 0) > 0) {
        if (i46) {
         break;
        }
        i9 = i1 | 0;
        i15 = 1;
        i31 = i7;
        i13 = i8;
        i44 = i45;
        while (1) {
         i42 = HEAP32[i9 >> 2] | 0;
         if ((i42 | 0) == 0) {
          i53 = i44;
         } else {
          i41 = 0;
          i37 = i31;
          i36 = i13;
          while (1) {
           HEAPF32[i37 >> 2] = +(HEAPU8[i36] | 0 | 0) * +.003921568859368563;
           HEAPF32[i37 + 4 >> 2] = +(HEAPU8[i36 + 1 | 0] | 0 | 0) * +.003921568859368563;
           HEAPF32[i37 + 8 >> 2] = +(HEAPU8[i36 + 2 | 0] | 0 | 0) * +.003921568859368563;
           HEAPF32[i37 + 12 >> 2] = +(HEAPU8[i36 + 3 | 0] | 0 | 0) * +.003921568859368563;
           i35 = i41 + 1 | 0;
           if (i35 >>> 0 < i42 >>> 0) {
            i41 = i35;
            i37 = i37 + 16 | 0;
            i36 = i36 + 4 | 0;
           } else {
            break;
           }
          }
          i53 = HEAP32[i12 >> 2] | 0;
         }
         if (i15 >>> 0 >= i53 >>> 0) {
          break L784;
         }
         i15 = i15 + 1 | 0;
         i31 = i31 + (i48 << 2) | 0;
         i13 = i13 + i50 | 0;
         i44 = i53;
        }
       } else {
        if (i46) {
         break;
        }
        i44 = i1 + 28 | 0;
        i13 = i1 | 0;
        i31 = 0;
        i15 = i7;
        i9 = i8;
        while (1) {
         i36 = HEAP32[i13 >> 2] | 0;
         if ((i36 | 0) == 0) {
          i54 = 0;
         } else {
          i37 = 0;
          i41 = HEAP32[i44 >> 2] | 0;
          i42 = i9;
          while (1) {
           HEAPF32[i41 >> 2] = +(HEAPU8[i42] | 0 | 0) * +.003921568859368563;
           HEAPF32[i41 + 4 >> 2] = +(HEAPU8[i42 + 1 | 0] | 0 | 0) * +.003921568859368563;
           HEAPF32[i41 + 8 >> 2] = +(HEAPU8[i42 + 2 | 0] | 0 | 0) * +.003921568859368563;
           HEAPF32[i41 + 12 >> 2] = +(HEAPU8[i42 + 3 | 0] | 0 | 0) * +.003921568859368563;
           i35 = i37 + 1 | 0;
           if (i35 >>> 0 < i36 >>> 0) {
            i37 = i35;
            i41 = i41 + 16 | 0;
            i42 = i42 + 4 | 0;
           } else {
            break;
           }
          }
          i54 = HEAP32[i13 >> 2] << 4;
         }
         _memcpy(i15 | 0, HEAP32[i44 >> 2] | 0, i54) | 0;
         i42 = i31 + 1 | 0;
         if (i42 >>> 0 < (HEAP32[i12 >> 2] | 0) >>> 0) {
          i31 = i42;
          i15 = i15 + (i48 << 2) | 0;
          i9 = i9 + i50 | 0;
         } else {
          break;
         }
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 1) {
      i50 = HEAP32[i1 + 16 >> 2] | 0;
      i48 = (HEAP32[i1 + 20 >> 2] | 0) >>> 2;
      i12 = i1 + 4 | 0;
      L808 : do {
       if ((HEAP32[i12 >> 2] | 0) != 0) {
        i54 = i1 + 28 | 0;
        i8 = i1 | 0;
        i7 = 1;
        i46 = HEAP32[i1 + 12 >> 2] | 0;
        i53 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i45 = HEAP32[i8 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i49 = 0;
           i9 = HEAP32[i54 >> 2] | 0;
           i15 = i53;
           while (1) {
            HEAPF32[i9 >> 2] = +(HEAPU8[i15] | 0 | 0) * +.003921568859368563;
            HEAPF32[i9 + 4 >> 2] = +(HEAPU8[i15 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i9 + 8 >> 2] = +(HEAPU8[i15 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i9 + 12 >> 2] = +(HEAPU8[i15 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i31 = i49 + 1 | 0;
            if (i31 >>> 0 < i45 >>> 0) {
             i49 = i31;
             i9 = i9 + 16 | 0;
             i15 = i15 + 4 | 0;
            } else {
             break;
            }
           }
           i15 = HEAP32[i8 >> 2] | 0;
           if ((i15 | 0) == 0) {
            break;
           }
           i9 = 0;
           i49 = i46;
           i31 = HEAP32[i54 >> 2] | 0;
           while (1) {
            i44 = i31 + 12 | 0;
            d52 = +HEAPF32[i44 >> 2];
            HEAPF32[i49 >> 2] = d52 * +HEAPF32[i31 >> 2];
            HEAPF32[i49 + 4 >> 2] = d52 * +HEAPF32[i31 + 4 >> 2];
            HEAPF32[i49 + 8 >> 2] = d52 * +HEAPF32[i31 + 8 >> 2];
            HEAPF32[i49 + 12 >> 2] = +HEAPF32[i44 >> 2];
            i44 = i9 + 1 | 0;
            if (i44 >>> 0 < i15 >>> 0) {
             i9 = i44;
             i49 = i49 + 16 | 0;
             i31 = i31 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
          break L808;
         }
         i7 = i7 + 1 | 0;
         i46 = i46 + (i48 << 2) | 0;
         i53 = i53 + i50 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 2) {
      i50 = HEAP32[i1 + 16 >> 2] | 0;
      i48 = (HEAP32[i1 + 20 >> 2] | 0) >>> 2;
      i12 = i1 + 4 | 0;
      L825 : do {
       if ((HEAP32[i12 >> 2] | 0) != 0) {
        i53 = i1 + 28 | 0;
        i46 = i1 | 0;
        i7 = 1;
        i54 = HEAP32[i1 + 12 >> 2] | 0;
        i8 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i45 = HEAP32[i46 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i31 = 0;
           i49 = HEAP32[i53 >> 2] | 0;
           i9 = i8;
           while (1) {
            HEAPF32[i49 >> 2] = +(HEAPU8[i9] | 0 | 0) * +.003921568859368563;
            HEAPF32[i49 + 4 >> 2] = +(HEAPU8[i9 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i49 + 8 >> 2] = +(HEAPU8[i9 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i49 + 12 >> 2] = +(HEAPU8[i9 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i15 = i31 + 1 | 0;
            if (i15 >>> 0 < i45 >>> 0) {
             i31 = i15;
             i49 = i49 + 16 | 0;
             i9 = i9 + 4 | 0;
            } else {
             break;
            }
           }
           i9 = HEAP32[i46 >> 2] | 0;
           if ((i9 | 0) == 0) {
            break;
           }
           i49 = 0;
           i31 = i54;
           i15 = HEAP32[i53 >> 2] | 0;
           while (1) {
            i44 = i15 + 12 | 0;
            d52 = +HEAPF32[i44 >> 2];
            if (d52 != +0) {
             d55 = +1 / d52;
            } else {
             d55 = +1;
            }
            HEAPF32[i31 >> 2] = d55 * +HEAPF32[i15 >> 2];
            HEAPF32[i31 + 4 >> 2] = d55 * +HEAPF32[i15 + 4 >> 2];
            HEAPF32[i31 + 8 >> 2] = d55 * +HEAPF32[i15 + 8 >> 2];
            HEAPF32[i31 + 12 >> 2] = +HEAPF32[i44 >> 2];
            i44 = i49 + 1 | 0;
            if (i44 >>> 0 < i9 >>> 0) {
             i49 = i44;
             i31 = i31 + 16 | 0;
             i15 = i15 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
          break L825;
         }
         i7 = i7 + 1 | 0;
         i54 = i54 + (i48 << 2) | 0;
         i8 = i8 + i50 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else {
      return;
     }
     break;
    }
   default:
    {
     return;
    }
   }
   break;
  }
 case 26:
  {
   if (!((i3 | 0) == 26 & (i4 | 0) == 1)) {
    return;
   }
   i50 = HEAP32[i1 + 16 >> 2] | 0;
   i48 = HEAP32[i1 + 20 >> 2] | 0;
   i12 = i1 + 4 | 0;
   L850 : do {
    if ((HEAP32[i12 >> 2] | 0) != 0) {
     i8 = i1 + 28 | 0;
     i54 = i1 | 0;
     i7 = HEAP32[i1 + 8 >> 2] | 0;
     i53 = HEAP32[i1 + 12 >> 2] | 0;
     i46 = 1;
     while (1) {
      i45 = HEAP32[i54 >> 2] | 0;
      do {
       if ((i45 | 0) != 0) {
        i15 = i7;
        i31 = HEAP32[i8 >> 2] | 0;
        i49 = 0;
        while (1) {
         HEAP8[i31] = HEAP8[i15] | 0;
         HEAP8[i31 + 1 | 0] = HEAP8[i15] | 0;
         HEAP8[i31 + 2 | 0] = HEAP8[i15] | 0;
         HEAP8[i31 + 3 | 0] = HEAP8[i15 + 1 | 0] | 0;
         i9 = i49 + 1 | 0;
         if (i9 >>> 0 < i45 >>> 0) {
          i15 = i15 + 2 | 0;
          i31 = i31 + 4 | 0;
          i49 = i9;
         } else {
          break;
         }
        }
        i49 = HEAP32[i54 >> 2] | 0;
        if ((i49 | 0) == 0) {
         break;
        }
        i31 = HEAP32[i8 >> 2] | 0;
        i15 = i53;
        i9 = 0;
        while (1) {
         i44 = i31 + 3 | 0;
         HEAP8[i15] = ~~(+(HEAPU8[i44] | 0 | 0) / +255 * +((HEAPU8[i31] | 0) >>> 0));
         HEAP8[i15 + 1 | 0] = HEAP8[i44] | 0;
         i44 = i9 + 1 | 0;
         if (i44 >>> 0 < i49 >>> 0) {
          i31 = i31 + 4 | 0;
          i15 = i15 + 2 | 0;
          i9 = i44;
         } else {
          break;
         }
        }
       }
      } while (0);
      if (i46 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
       break L850;
      }
      i7 = i7 + i50 | 0;
      i53 = i53 + i48 | 0;
      i46 = i46 + 1 | 0;
     }
    }
   } while (0);
   HEAP8[i1 + 24 | 0] = 1;
   return;
  }
 case 11:
  {
   switch (i3 | 0) {
   case 21:
    {
     if ((i4 | 0) == 0) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = HEAP32[i1 + 20 >> 2] | 0;
      i12 = i1 + 4 | 0;
      L871 : do {
       if ((HEAP32[i12 >> 2] | 0) != 0) {
        i46 = i1 + 28 | 0;
        i53 = i1 | 0;
        i7 = 1;
        i8 = HEAP32[i1 + 12 >> 2] | 0;
        i54 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i45 = HEAP32[i53 >> 2] | 0;
         i9 = i54;
         i15 = HEAP32[i46 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i31 = 0;
           while (1) {
            i49 = HEAP32[i9 + (i31 << 2) >> 2] | 0;
            HEAP32[i15 + (i31 << 2) >> 2] = (i49 >>> 16 | i49 << 16) & 16711935 | i49 & -16711936;
            i31 = i31 + 1 | 0;
            if (i31 >>> 0 >= i45 >>> 0) {
             break;
            }
           }
           i31 = HEAP32[i53 >> 2] | 0;
           if ((i31 | 0) == 0) {
            break;
           }
           i49 = 0;
           i44 = i8;
           i13 = HEAP32[i46 >> 2] | 0;
           while (1) {
            HEAP8[i44] = HEAP8[i13] | 0;
            i42 = i49 + 1 | 0;
            if (i42 >>> 0 < i31 >>> 0) {
             i49 = i42;
             i44 = i44 + 1 | 0;
             i13 = i13 + 4 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
          break L871;
         }
         i7 = i7 + 1 | 0;
         i8 = i8 + i50 | 0;
         i54 = i54 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 1) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = HEAP32[i1 + 20 >> 2] | 0;
      i12 = i1 + 4 | 0;
      L887 : do {
       if ((HEAP32[i12 >> 2] | 0) != 0) {
        i54 = i1 + 28 | 0;
        i8 = i1 | 0;
        i7 = 1;
        i46 = HEAP32[i1 + 12 >> 2] | 0;
        i53 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i45 = HEAP32[i8 >> 2] | 0;
         i15 = i53;
         i9 = HEAP32[i54 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i13 = 0;
           while (1) {
            i44 = HEAP32[i15 + (i13 << 2) >> 2] | 0;
            HEAP32[i9 + (i13 << 2) >> 2] = (i44 >>> 16 | i44 << 16) & 16711935 | i44 & -16711936;
            i13 = i13 + 1 | 0;
            if (i13 >>> 0 >= i45 >>> 0) {
             break;
            }
           }
           i13 = HEAP32[i8 >> 2] | 0;
           if ((i13 | 0) == 0) {
            break;
           }
           i44 = 0;
           i49 = i46;
           i31 = HEAP32[i54 >> 2] | 0;
           while (1) {
            HEAP8[i49] = ~~(+(HEAPU8[i31 + 3 | 0] | 0 | 0) / +255 * +((HEAPU8[i31] | 0) >>> 0));
            i42 = i44 + 1 | 0;
            if (i42 >>> 0 < i13 >>> 0) {
             i44 = i42;
             i49 = i49 + 1 | 0;
             i31 = i31 + 4 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
          break L887;
         }
         i7 = i7 + 1 | 0;
         i46 = i46 + i50 | 0;
         i53 = i53 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 2) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = HEAP32[i1 + 20 >> 2] | 0;
      i12 = i1 + 4 | 0;
      L903 : do {
       if ((HEAP32[i12 >> 2] | 0) != 0) {
        i53 = i1 + 28 | 0;
        i46 = i1 | 0;
        i7 = 1;
        i54 = HEAP32[i1 + 12 >> 2] | 0;
        i8 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i45 = HEAP32[i46 >> 2] | 0;
         i9 = i8;
         i15 = HEAP32[i53 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i31 = 0;
           while (1) {
            i49 = HEAP32[i9 + (i31 << 2) >> 2] | 0;
            HEAP32[i15 + (i31 << 2) >> 2] = (i49 >>> 16 | i49 << 16) & 16711935 | i49 & -16711936;
            i31 = i31 + 1 | 0;
            if (i31 >>> 0 >= i45 >>> 0) {
             break;
            }
           }
           i31 = HEAP32[i46 >> 2] | 0;
           if ((i31 | 0) == 0) {
            break;
           }
           i49 = 0;
           i44 = i54;
           i13 = HEAP32[i53 >> 2] | 0;
           while (1) {
            i42 = HEAP8[i13 + 3 | 0] | 0;
            if (i42 << 24 >> 24 == 0) {
             d56 = +1;
            } else {
             d56 = +255 / +(i42 & 255 | 0);
            }
            HEAP8[i44] = ~~(d56 * +((HEAPU8[i13] | 0) >>> 0));
            i42 = i49 + 1 | 0;
            if (i42 >>> 0 < i31 >>> 0) {
             i49 = i42;
             i44 = i44 + 1 | 0;
             i13 = i13 + 4 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
          break L903;
         }
         i7 = i7 + 1 | 0;
         i54 = i54 + i50 | 0;
         i8 = i8 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else {
      return;
     }
     break;
    }
   case 24:
    {
     if ((i4 | 0) == 0) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i12 = i1 + 4 | 0;
      L925 : do {
       if ((HEAP32[i12 >> 2] | 0) != 0) {
        i8 = i1 + 28 | 0;
        i54 = i1 | 0;
        i7 = 1;
        i53 = HEAP32[i1 + 12 >> 2] | 0;
        i46 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i45 = HEAP32[i54 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i15 = 0;
           i9 = HEAP32[i8 >> 2] | 0;
           i13 = i46;
           while (1) {
            HEAPF32[i9 >> 2] = +(HEAPU8[i13 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i9 + 4 >> 2] = +(HEAPU8[i13 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i9 + 8 >> 2] = +(HEAPU8[i13] | 0 | 0) * +.003921568859368563;
            HEAPF32[i9 + 12 >> 2] = +(HEAPU8[i13 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i44 = i15 + 1 | 0;
            if (i44 >>> 0 < i45 >>> 0) {
             i15 = i44;
             i9 = i9 + 16 | 0;
             i13 = i13 + 4 | 0;
            } else {
             break;
            }
           }
           i13 = HEAP32[i54 >> 2] | 0;
           if ((i13 | 0) == 0) {
            break;
           }
           i9 = 0;
           i15 = i53;
           i44 = HEAP32[i8 >> 2] | 0;
           while (1) {
            i49 = (HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i44 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i31 = i49 >>> 23;
            HEAP16[i15 >> 1] = ((i49 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i31 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i31 << 1) >> 1] | 0);
            i31 = i9 + 1 | 0;
            if (i31 >>> 0 < i13 >>> 0) {
             i9 = i31;
             i15 = i15 + 2 | 0;
             i44 = i44 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
          break L925;
         }
         i7 = i7 + 1 | 0;
         i53 = i53 + (i50 << 1) | 0;
         i46 = i46 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 1) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i12 = i1 + 4 | 0;
      L942 : do {
       if ((HEAP32[i12 >> 2] | 0) != 0) {
        i46 = i1 + 28 | 0;
        i53 = i1 | 0;
        i7 = 1;
        i8 = HEAP32[i1 + 12 >> 2] | 0;
        i54 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i45 = HEAP32[i53 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i44 = 0;
           i15 = HEAP32[i46 >> 2] | 0;
           i9 = i54;
           while (1) {
            HEAPF32[i15 >> 2] = +(HEAPU8[i9 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i15 + 4 >> 2] = +(HEAPU8[i9 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i15 + 8 >> 2] = +(HEAPU8[i9] | 0 | 0) * +.003921568859368563;
            HEAPF32[i15 + 12 >> 2] = +(HEAPU8[i9 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i13 = i44 + 1 | 0;
            if (i13 >>> 0 < i45 >>> 0) {
             i44 = i13;
             i15 = i15 + 16 | 0;
             i9 = i9 + 4 | 0;
            } else {
             break;
            }
           }
           i9 = HEAP32[i53 >> 2] | 0;
           if ((i9 | 0) == 0) {
            break;
           }
           i15 = 0;
           i44 = i8;
           i13 = HEAP32[i46 >> 2] | 0;
           while (1) {
            i31 = (HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i13 + 12 >> 2] * +HEAPF32[i13 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i49 = i31 >>> 23;
            HEAP16[i44 >> 1] = ((i31 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i49 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i49 << 1) >> 1] | 0);
            i49 = i15 + 1 | 0;
            if (i49 >>> 0 < i9 >>> 0) {
             i15 = i49;
             i44 = i44 + 2 | 0;
             i13 = i13 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
          break L942;
         }
         i7 = i7 + 1 | 0;
         i8 = i8 + (i50 << 1) | 0;
         i54 = i54 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 2) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i12 = i1 + 4 | 0;
      L959 : do {
       if ((HEAP32[i12 >> 2] | 0) != 0) {
        i54 = i1 + 28 | 0;
        i8 = i1 | 0;
        i7 = 1;
        i46 = HEAP32[i1 + 12 >> 2] | 0;
        i53 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i45 = HEAP32[i8 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i13 = 0;
           i44 = HEAP32[i54 >> 2] | 0;
           i15 = i53;
           while (1) {
            HEAPF32[i44 >> 2] = +(HEAPU8[i15 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i44 + 4 >> 2] = +(HEAPU8[i15 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i44 + 8 >> 2] = +(HEAPU8[i15] | 0 | 0) * +.003921568859368563;
            HEAPF32[i44 + 12 >> 2] = +(HEAPU8[i15 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i9 = i13 + 1 | 0;
            if (i9 >>> 0 < i45 >>> 0) {
             i13 = i9;
             i44 = i44 + 16 | 0;
             i15 = i15 + 4 | 0;
            } else {
             break;
            }
           }
           i15 = HEAP32[i8 >> 2] | 0;
           if ((i15 | 0) == 0) {
            break;
           }
           i44 = 0;
           i13 = i46;
           i9 = HEAP32[i54 >> 2] | 0;
           while (1) {
            d56 = +HEAPF32[i9 + 12 >> 2];
            if (d56 != +0) {
             d57 = +1 / d56;
            } else {
             d57 = +1;
            }
            i49 = (HEAPF32[tempDoublePtr >> 2] = d57 * +HEAPF32[i9 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i31 = i49 >>> 23;
            HEAP16[i13 >> 1] = ((i49 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i31 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i31 << 1) >> 1] | 0);
            i31 = i44 + 1 | 0;
            if (i31 >>> 0 < i15 >>> 0) {
             i44 = i31;
             i13 = i13 + 2 | 0;
             i9 = i9 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
          break L959;
         }
         i7 = i7 + 1 | 0;
         i46 = i46 + (i50 << 1) | 0;
         i53 = i53 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else {
      return;
     }
     break;
    }
   case 25:
    {
     if ((i4 | 0) == 0) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = (HEAP32[i1 + 20 >> 2] | 0) >>> 2;
      i12 = i1 + 4 | 0;
      L982 : do {
       if ((HEAP32[i12 >> 2] | 0) != 0) {
        i53 = i1 + 28 | 0;
        i46 = i1 | 0;
        i7 = 1;
        i54 = HEAP32[i1 + 12 >> 2] | 0;
        i8 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i45 = HEAP32[i46 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i9 = 0;
           i13 = HEAP32[i53 >> 2] | 0;
           i44 = i8;
           while (1) {
            HEAPF32[i13 >> 2] = +(HEAPU8[i44 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i13 + 4 >> 2] = +(HEAPU8[i44 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i13 + 8 >> 2] = +(HEAPU8[i44] | 0 | 0) * +.003921568859368563;
            HEAPF32[i13 + 12 >> 2] = +(HEAPU8[i44 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i15 = i9 + 1 | 0;
            if (i15 >>> 0 < i45 >>> 0) {
             i9 = i15;
             i13 = i13 + 16 | 0;
             i44 = i44 + 4 | 0;
            } else {
             break;
            }
           }
           i44 = HEAP32[i46 >> 2] | 0;
           if ((i44 | 0) == 0) {
            break;
           }
           i13 = 0;
           i9 = i54;
           i15 = HEAP32[i53 >> 2] | 0;
           while (1) {
            HEAPF32[i9 >> 2] = +HEAPF32[i15 >> 2];
            i31 = i13 + 1 | 0;
            if (i31 >>> 0 < i44 >>> 0) {
             i13 = i31;
             i9 = i9 + 4 | 0;
             i15 = i15 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
          break L982;
         }
         i7 = i7 + 1 | 0;
         i54 = i54 + (i50 << 2) | 0;
         i8 = i8 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 1) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = (HEAP32[i1 + 20 >> 2] | 0) >>> 2;
      i12 = i1 + 4 | 0;
      L999 : do {
       if ((HEAP32[i12 >> 2] | 0) != 0) {
        i8 = i1 + 28 | 0;
        i54 = i1 | 0;
        i7 = 1;
        i53 = HEAP32[i1 + 12 >> 2] | 0;
        i46 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i45 = HEAP32[i54 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i15 = 0;
           i9 = HEAP32[i8 >> 2] | 0;
           i13 = i46;
           while (1) {
            HEAPF32[i9 >> 2] = +(HEAPU8[i13 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i9 + 4 >> 2] = +(HEAPU8[i13 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i9 + 8 >> 2] = +(HEAPU8[i13] | 0 | 0) * +.003921568859368563;
            HEAPF32[i9 + 12 >> 2] = +(HEAPU8[i13 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i44 = i15 + 1 | 0;
            if (i44 >>> 0 < i45 >>> 0) {
             i15 = i44;
             i9 = i9 + 16 | 0;
             i13 = i13 + 4 | 0;
            } else {
             break;
            }
           }
           i13 = HEAP32[i54 >> 2] | 0;
           if ((i13 | 0) == 0) {
            break;
           }
           i9 = 0;
           i15 = i53;
           i44 = HEAP32[i8 >> 2] | 0;
           while (1) {
            HEAPF32[i15 >> 2] = +HEAPF32[i44 + 12 >> 2] * +HEAPF32[i44 >> 2];
            i31 = i9 + 1 | 0;
            if (i31 >>> 0 < i13 >>> 0) {
             i9 = i31;
             i15 = i15 + 4 | 0;
             i44 = i44 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
          break L999;
         }
         i7 = i7 + 1 | 0;
         i53 = i53 + (i50 << 2) | 0;
         i46 = i46 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 2) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = (HEAP32[i1 + 20 >> 2] | 0) >>> 2;
      i12 = i1 + 4 | 0;
      L1016 : do {
       if ((HEAP32[i12 >> 2] | 0) != 0) {
        i46 = i1 + 28 | 0;
        i53 = i1 | 0;
        i7 = 1;
        i8 = HEAP32[i1 + 12 >> 2] | 0;
        i54 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i45 = HEAP32[i53 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i44 = 0;
           i15 = HEAP32[i46 >> 2] | 0;
           i9 = i54;
           while (1) {
            HEAPF32[i15 >> 2] = +(HEAPU8[i9 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i15 + 4 >> 2] = +(HEAPU8[i9 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i15 + 8 >> 2] = +(HEAPU8[i9] | 0 | 0) * +.003921568859368563;
            HEAPF32[i15 + 12 >> 2] = +(HEAPU8[i9 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i13 = i44 + 1 | 0;
            if (i13 >>> 0 < i45 >>> 0) {
             i44 = i13;
             i15 = i15 + 16 | 0;
             i9 = i9 + 4 | 0;
            } else {
             break;
            }
           }
           i9 = HEAP32[i53 >> 2] | 0;
           if ((i9 | 0) == 0) {
            break;
           }
           i15 = 0;
           i44 = i8;
           i13 = HEAP32[i46 >> 2] | 0;
           while (1) {
            d57 = +HEAPF32[i13 + 12 >> 2];
            if (d57 != +0) {
             d58 = +1 / d57;
            } else {
             d58 = +1;
            }
            HEAPF32[i44 >> 2] = d58 * +HEAPF32[i13 >> 2];
            i31 = i15 + 1 | 0;
            if (i31 >>> 0 < i9 >>> 0) {
             i15 = i31;
             i44 = i44 + 4 | 0;
             i13 = i13 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
          break L1016;
         }
         i7 = i7 + 1 | 0;
         i8 = i8 + (i50 << 2) | 0;
         i54 = i54 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else {
      return;
     }
     break;
    }
   case 34:
    {
     if ((i4 | 0) != 0) {
      return;
     }
     i48 = HEAP32[i1 + 16 >> 2] | 0;
     i50 = HEAP32[i1 + 20 >> 2] | 0;
     i12 = i1 + 4 | 0;
     L1040 : do {
      if ((HEAP32[i12 >> 2] | 0) != 0) {
       i54 = i1 + 28 | 0;
       i8 = i1 | 0;
       i7 = 1;
       i46 = HEAP32[i1 + 12 >> 2] | 0;
       i53 = HEAP32[i1 + 8 >> 2] | 0;
       while (1) {
        i45 = HEAP32[i8 >> 2] | 0;
        i13 = i53;
        i44 = HEAP32[i54 >> 2] | 0;
        do {
         if ((i45 | 0) != 0) {
          i15 = 0;
          while (1) {
           i9 = HEAP32[i13 + (i15 << 2) >> 2] | 0;
           HEAP32[i44 + (i15 << 2) >> 2] = (i9 >>> 16 | i9 << 16) & 16711935 | i9 & -16711936;
           i15 = i15 + 1 | 0;
           if (i15 >>> 0 >= i45 >>> 0) {
            break;
           }
          }
          i15 = HEAP32[i8 >> 2] | 0;
          if ((i15 | 0) == 0) {
           break;
          }
          i9 = 0;
          i31 = i46;
          i49 = HEAP32[i54 >> 2] | 0;
          while (1) {
           HEAP8[i31] = HEAP8[i49 + 3 | 0] | 0;
           i42 = i9 + 1 | 0;
           if (i42 >>> 0 < i15 >>> 0) {
            i9 = i42;
            i31 = i31 + 1 | 0;
            i49 = i49 + 4 | 0;
           } else {
            break;
           }
          }
         }
        } while (0);
        if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
         break L1040;
        }
        i7 = i7 + 1 | 0;
        i46 = i46 + i50 | 0;
        i53 = i53 + i48 | 0;
       }
      }
     } while (0);
     HEAP8[i1 + 24 | 0] = 1;
     return;
    }
   case 37:
    {
     if ((i4 | 0) != 0) {
      return;
     }
     i48 = HEAP32[i1 + 16 >> 2] | 0;
     i50 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
     i12 = i1 + 4 | 0;
     L1059 : do {
      if ((HEAP32[i12 >> 2] | 0) != 0) {
       i53 = i1 + 28 | 0;
       i46 = i1 | 0;
       i7 = 1;
       i54 = HEAP32[i1 + 12 >> 2] | 0;
       i8 = HEAP32[i1 + 8 >> 2] | 0;
       while (1) {
        i45 = HEAP32[i46 >> 2] | 0;
        do {
         if ((i45 | 0) != 0) {
          i44 = 0;
          i13 = HEAP32[i53 >> 2] | 0;
          i49 = i8;
          while (1) {
           HEAPF32[i13 >> 2] = +(HEAPU8[i49 + 2 | 0] | 0 | 0) * +.003921568859368563;
           HEAPF32[i13 + 4 >> 2] = +(HEAPU8[i49 + 1 | 0] | 0 | 0) * +.003921568859368563;
           HEAPF32[i13 + 8 >> 2] = +(HEAPU8[i49] | 0 | 0) * +.003921568859368563;
           HEAPF32[i13 + 12 >> 2] = +(HEAPU8[i49 + 3 | 0] | 0 | 0) * +.003921568859368563;
           i31 = i44 + 1 | 0;
           if (i31 >>> 0 < i45 >>> 0) {
            i44 = i31;
            i13 = i13 + 16 | 0;
            i49 = i49 + 4 | 0;
           } else {
            break;
           }
          }
          i49 = HEAP32[i46 >> 2] | 0;
          if ((i49 | 0) == 0) {
           break;
          }
          i13 = 0;
          i44 = i54;
          i31 = HEAP32[i53 >> 2] | 0;
          while (1) {
           i9 = (HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i31 + 12 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
           i15 = i9 >>> 23;
           HEAP16[i44 >> 1] = ((i9 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i15 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i15 << 1) >> 1] | 0);
           i15 = i13 + 1 | 0;
           if (i15 >>> 0 < i49 >>> 0) {
            i13 = i15;
            i44 = i44 + 2 | 0;
            i31 = i31 + 16 | 0;
           } else {
            break;
           }
          }
         }
        } while (0);
        if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
         break L1059;
        }
        i7 = i7 + 1 | 0;
        i54 = i54 + (i50 << 1) | 0;
        i8 = i8 + i48 | 0;
       }
      }
     } while (0);
     HEAP8[i1 + 24 | 0] = 1;
     return;
    }
   case 38:
    {
     if ((i4 | 0) != 0) {
      return;
     }
     i48 = HEAP32[i1 + 16 >> 2] | 0;
     i50 = (HEAP32[i1 + 20 >> 2] | 0) >>> 2;
     i12 = i1 + 4 | 0;
     L1079 : do {
      if ((HEAP32[i12 >> 2] | 0) != 0) {
       i8 = i1 + 28 | 0;
       i54 = i1 | 0;
       i7 = 1;
       i53 = HEAP32[i1 + 12 >> 2] | 0;
       i46 = HEAP32[i1 + 8 >> 2] | 0;
       while (1) {
        i45 = HEAP32[i54 >> 2] | 0;
        do {
         if ((i45 | 0) != 0) {
          i31 = 0;
          i44 = HEAP32[i8 >> 2] | 0;
          i13 = i46;
          while (1) {
           HEAPF32[i44 >> 2] = +(HEAPU8[i13 + 2 | 0] | 0 | 0) * +.003921568859368563;
           HEAPF32[i44 + 4 >> 2] = +(HEAPU8[i13 + 1 | 0] | 0 | 0) * +.003921568859368563;
           HEAPF32[i44 + 8 >> 2] = +(HEAPU8[i13] | 0 | 0) * +.003921568859368563;
           HEAPF32[i44 + 12 >> 2] = +(HEAPU8[i13 + 3 | 0] | 0 | 0) * +.003921568859368563;
           i49 = i31 + 1 | 0;
           if (i49 >>> 0 < i45 >>> 0) {
            i31 = i49;
            i44 = i44 + 16 | 0;
            i13 = i13 + 4 | 0;
           } else {
            break;
           }
          }
          i13 = HEAP32[i54 >> 2] | 0;
          if ((i13 | 0) == 0) {
           break;
          }
          i44 = 0;
          i31 = i53;
          i49 = HEAP32[i8 >> 2] | 0;
          while (1) {
           HEAPF32[i31 >> 2] = +HEAPF32[i49 + 12 >> 2];
           i15 = i44 + 1 | 0;
           if (i15 >>> 0 < i13 >>> 0) {
            i44 = i15;
            i31 = i31 + 4 | 0;
            i49 = i49 + 16 | 0;
           } else {
            break;
           }
          }
         }
        } while (0);
        if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
         break L1079;
        }
        i7 = i7 + 1 | 0;
        i53 = i53 + (i50 << 2) | 0;
        i46 = i46 + i48 | 0;
       }
      }
     } while (0);
     HEAP8[i1 + 24 | 0] = 1;
     return;
    }
   case 26:
    {
     if ((i4 | 0) == 0) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = HEAP32[i1 + 20 >> 2] | 0;
      i12 = i1 + 4 | 0;
      L1098 : do {
       if ((HEAP32[i12 >> 2] | 0) != 0) {
        i46 = i1 + 28 | 0;
        i53 = i1 | 0;
        i7 = 1;
        i8 = HEAP32[i1 + 12 >> 2] | 0;
        i54 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i45 = HEAP32[i53 >> 2] | 0;
         i49 = i54;
         i31 = HEAP32[i46 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i44 = 0;
           while (1) {
            i13 = HEAP32[i49 + (i44 << 2) >> 2] | 0;
            HEAP32[i31 + (i44 << 2) >> 2] = (i13 >>> 16 | i13 << 16) & 16711935 | i13 & -16711936;
            i44 = i44 + 1 | 0;
            if (i44 >>> 0 >= i45 >>> 0) {
             break;
            }
           }
           i44 = HEAP32[i53 >> 2] | 0;
           if ((i44 | 0) == 0) {
            break;
           }
           i13 = 0;
           i15 = i8;
           i9 = HEAP32[i46 >> 2] | 0;
           while (1) {
            HEAP8[i15] = HEAP8[i9] | 0;
            HEAP8[i15 + 1 | 0] = HEAP8[i9 + 3 | 0] | 0;
            i42 = i13 + 1 | 0;
            if (i42 >>> 0 < i44 >>> 0) {
             i13 = i42;
             i15 = i15 + 2 | 0;
             i9 = i9 + 4 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
          break L1098;
         }
         i7 = i7 + 1 | 0;
         i8 = i8 + i50 | 0;
         i54 = i54 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 1) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = HEAP32[i1 + 20 >> 2] | 0;
      i12 = i1 + 4 | 0;
      L1114 : do {
       if ((HEAP32[i12 >> 2] | 0) != 0) {
        i54 = i1 + 28 | 0;
        i8 = i1 | 0;
        i7 = 1;
        i46 = HEAP32[i1 + 12 >> 2] | 0;
        i53 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i45 = HEAP32[i8 >> 2] | 0;
         i31 = i53;
         i49 = HEAP32[i54 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i9 = 0;
           while (1) {
            i15 = HEAP32[i31 + (i9 << 2) >> 2] | 0;
            HEAP32[i49 + (i9 << 2) >> 2] = (i15 >>> 16 | i15 << 16) & 16711935 | i15 & -16711936;
            i9 = i9 + 1 | 0;
            if (i9 >>> 0 >= i45 >>> 0) {
             break;
            }
           }
           i9 = HEAP32[i8 >> 2] | 0;
           if ((i9 | 0) == 0) {
            break;
           }
           i15 = 0;
           i13 = i46;
           i44 = HEAP32[i54 >> 2] | 0;
           while (1) {
            i42 = i44 + 3 | 0;
            HEAP8[i13] = ~~(+(HEAPU8[i42] | 0 | 0) / +255 * +((HEAPU8[i44] | 0) >>> 0));
            HEAP8[i13 + 1 | 0] = HEAP8[i42] | 0;
            i42 = i15 + 1 | 0;
            if (i42 >>> 0 < i9 >>> 0) {
             i15 = i42;
             i13 = i13 + 2 | 0;
             i44 = i44 + 4 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
          break L1114;
         }
         i7 = i7 + 1 | 0;
         i46 = i46 + i50 | 0;
         i53 = i53 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 2) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = HEAP32[i1 + 20 >> 2] | 0;
      i12 = i1 + 4 | 0;
      L1130 : do {
       if ((HEAP32[i12 >> 2] | 0) != 0) {
        i53 = i1 + 28 | 0;
        i46 = i1 | 0;
        i7 = 1;
        i54 = HEAP32[i1 + 12 >> 2] | 0;
        i8 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i45 = HEAP32[i46 >> 2] | 0;
         i49 = i8;
         i31 = HEAP32[i53 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i44 = 0;
           while (1) {
            i13 = HEAP32[i49 + (i44 << 2) >> 2] | 0;
            HEAP32[i31 + (i44 << 2) >> 2] = (i13 >>> 16 | i13 << 16) & 16711935 | i13 & -16711936;
            i44 = i44 + 1 | 0;
            if (i44 >>> 0 >= i45 >>> 0) {
             break;
            }
           }
           i44 = HEAP32[i46 >> 2] | 0;
           if ((i44 | 0) == 0) {
            break;
           }
           i13 = 0;
           i15 = i54;
           i9 = HEAP32[i53 >> 2] | 0;
           while (1) {
            i42 = i9 + 3 | 0;
            i41 = HEAP8[i42] | 0;
            if (i41 << 24 >> 24 == 0) {
             d59 = +1;
            } else {
             d59 = +255 / +(i41 & 255 | 0);
            }
            HEAP8[i15] = ~~(d59 * +((HEAPU8[i9] | 0) >>> 0));
            HEAP8[i15 + 1 | 0] = HEAP8[i42] | 0;
            i42 = i13 + 1 | 0;
            if (i42 >>> 0 < i44 >>> 0) {
             i13 = i42;
             i15 = i15 + 2 | 0;
             i9 = i9 + 4 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
          break L1130;
         }
         i7 = i7 + 1 | 0;
         i54 = i54 + i50 | 0;
         i8 = i8 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else {
      return;
     }
     break;
    }
   case 29:
    {
     if ((i4 | 0) == 0) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i12 = i1 + 4 | 0;
      L1152 : do {
       if ((HEAP32[i12 >> 2] | 0) != 0) {
        i8 = i1 + 28 | 0;
        i54 = i1 | 0;
        i7 = 1;
        i53 = HEAP32[i1 + 12 >> 2] | 0;
        i46 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i45 = HEAP32[i54 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i31 = 0;
           i49 = HEAP32[i8 >> 2] | 0;
           i9 = i46;
           while (1) {
            HEAPF32[i49 >> 2] = +(HEAPU8[i9 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i49 + 4 >> 2] = +(HEAPU8[i9 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i49 + 8 >> 2] = +(HEAPU8[i9] | 0 | 0) * +.003921568859368563;
            HEAPF32[i49 + 12 >> 2] = +(HEAPU8[i9 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i15 = i31 + 1 | 0;
            if (i15 >>> 0 < i45 >>> 0) {
             i31 = i15;
             i49 = i49 + 16 | 0;
             i9 = i9 + 4 | 0;
            } else {
             break;
            }
           }
           i9 = HEAP32[i54 >> 2] | 0;
           if ((i9 | 0) == 0) {
            break;
           }
           i49 = 0;
           i31 = i53;
           i15 = HEAP32[i8 >> 2] | 0;
           while (1) {
            i13 = (HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i15 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i44 = i13 >>> 23;
            HEAP16[i31 >> 1] = ((i13 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i44 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i44 << 1) >> 1] | 0);
            i44 = (HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i15 + 12 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i13 = i44 >>> 23;
            HEAP16[i31 + 2 >> 1] = ((i44 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i13 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i13 << 1) >> 1] | 0);
            i13 = i49 + 1 | 0;
            if (i13 >>> 0 < i9 >>> 0) {
             i49 = i13;
             i31 = i31 + 4 | 0;
             i15 = i15 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
          break L1152;
         }
         i7 = i7 + 1 | 0;
         i53 = i53 + (i50 << 1) | 0;
         i46 = i46 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 1) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i12 = i1 + 4 | 0;
      L1169 : do {
       if ((HEAP32[i12 >> 2] | 0) != 0) {
        i46 = i1 + 28 | 0;
        i53 = i1 | 0;
        i7 = 1;
        i8 = HEAP32[i1 + 12 >> 2] | 0;
        i54 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i45 = HEAP32[i53 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i15 = 0;
           i31 = HEAP32[i46 >> 2] | 0;
           i49 = i54;
           while (1) {
            HEAPF32[i31 >> 2] = +(HEAPU8[i49 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i31 + 4 >> 2] = +(HEAPU8[i49 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i31 + 8 >> 2] = +(HEAPU8[i49] | 0 | 0) * +.003921568859368563;
            HEAPF32[i31 + 12 >> 2] = +(HEAPU8[i49 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i9 = i15 + 1 | 0;
            if (i9 >>> 0 < i45 >>> 0) {
             i15 = i9;
             i31 = i31 + 16 | 0;
             i49 = i49 + 4 | 0;
            } else {
             break;
            }
           }
           i49 = HEAP32[i53 >> 2] | 0;
           if ((i49 | 0) == 0) {
            break;
           }
           i31 = 0;
           i15 = i8;
           i9 = HEAP32[i46 >> 2] | 0;
           while (1) {
            i13 = i9 + 12 | 0;
            i44 = (HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i13 >> 2] * +HEAPF32[i9 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i42 = i44 >>> 23;
            HEAP16[i15 >> 1] = ((i44 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i42 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i42 << 1) >> 1] | 0);
            i42 = (HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i13 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i13 = i42 >>> 23;
            HEAP16[i15 + 2 >> 1] = ((i42 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i13 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i13 << 1) >> 1] | 0);
            i13 = i31 + 1 | 0;
            if (i13 >>> 0 < i49 >>> 0) {
             i31 = i13;
             i15 = i15 + 4 | 0;
             i9 = i9 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
          break L1169;
         }
         i7 = i7 + 1 | 0;
         i8 = i8 + (i50 << 1) | 0;
         i54 = i54 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 2) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i12 = i1 + 4 | 0;
      L1186 : do {
       if ((HEAP32[i12 >> 2] | 0) != 0) {
        i54 = i1 + 28 | 0;
        i8 = i1 | 0;
        i7 = 1;
        i46 = HEAP32[i1 + 12 >> 2] | 0;
        i53 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i45 = HEAP32[i8 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i9 = 0;
           i15 = HEAP32[i54 >> 2] | 0;
           i31 = i53;
           while (1) {
            HEAPF32[i15 >> 2] = +(HEAPU8[i31 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i15 + 4 >> 2] = +(HEAPU8[i31 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i15 + 8 >> 2] = +(HEAPU8[i31] | 0 | 0) * +.003921568859368563;
            HEAPF32[i15 + 12 >> 2] = +(HEAPU8[i31 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i49 = i9 + 1 | 0;
            if (i49 >>> 0 < i45 >>> 0) {
             i9 = i49;
             i15 = i15 + 16 | 0;
             i31 = i31 + 4 | 0;
            } else {
             break;
            }
           }
           i31 = HEAP32[i8 >> 2] | 0;
           if ((i31 | 0) == 0) {
            break;
           }
           i15 = 0;
           i9 = i46;
           i49 = HEAP32[i54 >> 2] | 0;
           while (1) {
            i13 = i49 + 12 | 0;
            d59 = +HEAPF32[i13 >> 2];
            if (d59 != +0) {
             d60 = +1 / d59;
            } else {
             d60 = +1;
            }
            i42 = (HEAPF32[tempDoublePtr >> 2] = d60 * +HEAPF32[i49 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i44 = i42 >>> 23;
            HEAP16[i9 >> 1] = ((i42 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i44 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i44 << 1) >> 1] | 0);
            i44 = (HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i13 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i13 = i44 >>> 23;
            HEAP16[i9 + 2 >> 1] = ((i44 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i13 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i13 << 1) >> 1] | 0);
            i13 = i15 + 1 | 0;
            if (i13 >>> 0 < i31 >>> 0) {
             i15 = i13;
             i9 = i9 + 4 | 0;
             i49 = i49 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
          break L1186;
         }
         i7 = i7 + 1 | 0;
         i46 = i46 + (i50 << 1) | 0;
         i53 = i53 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else {
      return;
     }
     break;
    }
   case 30:
    {
     if ((i4 | 0) == 0) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = (HEAP32[i1 + 20 >> 2] | 0) >>> 2;
      i12 = i1 + 4 | 0;
      L1209 : do {
       if ((HEAP32[i12 >> 2] | 0) != 0) {
        i53 = i1 + 28 | 0;
        i46 = i1 | 0;
        i7 = 1;
        i54 = HEAP32[i1 + 12 >> 2] | 0;
        i8 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i45 = HEAP32[i46 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i49 = 0;
           i9 = HEAP32[i53 >> 2] | 0;
           i15 = i8;
           while (1) {
            HEAPF32[i9 >> 2] = +(HEAPU8[i15 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i9 + 4 >> 2] = +(HEAPU8[i15 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i9 + 8 >> 2] = +(HEAPU8[i15] | 0 | 0) * +.003921568859368563;
            HEAPF32[i9 + 12 >> 2] = +(HEAPU8[i15 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i31 = i49 + 1 | 0;
            if (i31 >>> 0 < i45 >>> 0) {
             i49 = i31;
             i9 = i9 + 16 | 0;
             i15 = i15 + 4 | 0;
            } else {
             break;
            }
           }
           i15 = HEAP32[i46 >> 2] | 0;
           if ((i15 | 0) == 0) {
            break;
           }
           i9 = 0;
           i49 = i54;
           i31 = HEAP32[i53 >> 2] | 0;
           while (1) {
            HEAPF32[i49 >> 2] = +HEAPF32[i31 >> 2];
            HEAPF32[i49 + 4 >> 2] = +HEAPF32[i31 + 12 >> 2];
            i13 = i9 + 1 | 0;
            if (i13 >>> 0 < i15 >>> 0) {
             i9 = i13;
             i49 = i49 + 8 | 0;
             i31 = i31 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
          break L1209;
         }
         i7 = i7 + 1 | 0;
         i54 = i54 + (i50 << 2) | 0;
         i8 = i8 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 1) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = (HEAP32[i1 + 20 >> 2] | 0) >>> 2;
      i12 = i1 + 4 | 0;
      L1226 : do {
       if ((HEAP32[i12 >> 2] | 0) != 0) {
        i8 = i1 + 28 | 0;
        i54 = i1 | 0;
        i7 = 1;
        i53 = HEAP32[i1 + 12 >> 2] | 0;
        i46 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i45 = HEAP32[i54 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i31 = 0;
           i49 = HEAP32[i8 >> 2] | 0;
           i9 = i46;
           while (1) {
            HEAPF32[i49 >> 2] = +(HEAPU8[i9 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i49 + 4 >> 2] = +(HEAPU8[i9 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i49 + 8 >> 2] = +(HEAPU8[i9] | 0 | 0) * +.003921568859368563;
            HEAPF32[i49 + 12 >> 2] = +(HEAPU8[i9 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i15 = i31 + 1 | 0;
            if (i15 >>> 0 < i45 >>> 0) {
             i31 = i15;
             i49 = i49 + 16 | 0;
             i9 = i9 + 4 | 0;
            } else {
             break;
            }
           }
           i9 = HEAP32[i54 >> 2] | 0;
           if ((i9 | 0) == 0) {
            break;
           }
           i49 = 0;
           i31 = i53;
           i15 = HEAP32[i8 >> 2] | 0;
           while (1) {
            i13 = i15 + 12 | 0;
            HEAPF32[i31 >> 2] = +HEAPF32[i13 >> 2] * +HEAPF32[i15 >> 2];
            HEAPF32[i31 + 4 >> 2] = +HEAPF32[i13 >> 2];
            i13 = i49 + 1 | 0;
            if (i13 >>> 0 < i9 >>> 0) {
             i49 = i13;
             i31 = i31 + 8 | 0;
             i15 = i15 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
          break L1226;
         }
         i7 = i7 + 1 | 0;
         i53 = i53 + (i50 << 2) | 0;
         i46 = i46 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 2) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = (HEAP32[i1 + 20 >> 2] | 0) >>> 2;
      i12 = i1 + 4 | 0;
      L1243 : do {
       if ((HEAP32[i12 >> 2] | 0) != 0) {
        i46 = i1 + 28 | 0;
        i53 = i1 | 0;
        i7 = 1;
        i8 = HEAP32[i1 + 12 >> 2] | 0;
        i54 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i45 = HEAP32[i53 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i15 = 0;
           i31 = HEAP32[i46 >> 2] | 0;
           i49 = i54;
           while (1) {
            HEAPF32[i31 >> 2] = +(HEAPU8[i49 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i31 + 4 >> 2] = +(HEAPU8[i49 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i31 + 8 >> 2] = +(HEAPU8[i49] | 0 | 0) * +.003921568859368563;
            HEAPF32[i31 + 12 >> 2] = +(HEAPU8[i49 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i9 = i15 + 1 | 0;
            if (i9 >>> 0 < i45 >>> 0) {
             i15 = i9;
             i31 = i31 + 16 | 0;
             i49 = i49 + 4 | 0;
            } else {
             break;
            }
           }
           i49 = HEAP32[i53 >> 2] | 0;
           if ((i49 | 0) == 0) {
            break;
           }
           i31 = 0;
           i15 = i8;
           i9 = HEAP32[i46 >> 2] | 0;
           while (1) {
            i13 = i9 + 12 | 0;
            d60 = +HEAPF32[i13 >> 2];
            if (d60 != +0) {
             d61 = +1 / d60;
            } else {
             d61 = +1;
            }
            HEAPF32[i15 >> 2] = d61 * +HEAPF32[i9 >> 2];
            HEAPF32[i15 + 4 >> 2] = +HEAPF32[i13 >> 2];
            i13 = i31 + 1 | 0;
            if (i13 >>> 0 < i49 >>> 0) {
             i31 = i13;
             i15 = i15 + 8 | 0;
             i9 = i9 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
          break L1243;
         }
         i7 = i7 + 1 | 0;
         i8 = i8 + (i50 << 2) | 0;
         i54 = i54 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else {
      return;
     }
     break;
    }
   case 5:
    {
     if ((i4 | 0) == 0) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = HEAP32[i1 + 20 >> 2] | 0;
      i12 = i1 + 4 | 0;
      L1266 : do {
       if ((HEAP32[i12 >> 2] | 0) != 0) {
        i54 = i1 + 28 | 0;
        i8 = i1 | 0;
        i7 = 1;
        i46 = HEAP32[i1 + 12 >> 2] | 0;
        i53 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i45 = HEAP32[i8 >> 2] | 0;
         i9 = i53;
         i15 = HEAP32[i54 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i31 = 0;
           while (1) {
            i49 = HEAP32[i9 + (i31 << 2) >> 2] | 0;
            HEAP32[i15 + (i31 << 2) >> 2] = (i49 >>> 16 | i49 << 16) & 16711935 | i49 & -16711936;
            i31 = i31 + 1 | 0;
            if (i31 >>> 0 >= i45 >>> 0) {
             break;
            }
           }
           i31 = HEAP32[i8 >> 2] | 0;
           if ((i31 | 0) == 0) {
            break;
           }
           i49 = 0;
           i13 = i46;
           i44 = HEAP32[i54 >> 2] | 0;
           while (1) {
            HEAP8[i13] = HEAP8[i44] | 0;
            HEAP8[i13 + 1 | 0] = HEAP8[i44 + 1 | 0] | 0;
            HEAP8[i13 + 2 | 0] = HEAP8[i44 + 2 | 0] | 0;
            i42 = i49 + 1 | 0;
            if (i42 >>> 0 < i31 >>> 0) {
             i49 = i42;
             i13 = i13 + 3 | 0;
             i44 = i44 + 4 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
          break L1266;
         }
         i7 = i7 + 1 | 0;
         i46 = i46 + i50 | 0;
         i53 = i53 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 1) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = HEAP32[i1 + 20 >> 2] | 0;
      i12 = i1 + 4 | 0;
      L1282 : do {
       if ((HEAP32[i12 >> 2] | 0) != 0) {
        i53 = i1 + 28 | 0;
        i46 = i1 | 0;
        i7 = 1;
        i54 = HEAP32[i1 + 12 >> 2] | 0;
        i8 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i45 = HEAP32[i46 >> 2] | 0;
         i15 = i8;
         i9 = HEAP32[i53 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i44 = 0;
           while (1) {
            i13 = HEAP32[i15 + (i44 << 2) >> 2] | 0;
            HEAP32[i9 + (i44 << 2) >> 2] = (i13 >>> 16 | i13 << 16) & 16711935 | i13 & -16711936;
            i44 = i44 + 1 | 0;
            if (i44 >>> 0 >= i45 >>> 0) {
             break;
            }
           }
           i44 = HEAP32[i46 >> 2] | 0;
           if ((i44 | 0) == 0) {
            break;
           }
           i13 = 0;
           i49 = i54;
           i31 = HEAP32[i53 >> 2] | 0;
           while (1) {
            d61 = +(HEAPU8[i31 + 3 | 0] | 0 | 0) / +255;
            i42 = ~~(d61 * +((HEAPU8[i31 + 1 | 0] | 0) >>> 0));
            i41 = ~~(d61 * +((HEAPU8[i31 + 2 | 0] | 0) >>> 0));
            HEAP8[i49] = ~~(d61 * +((HEAPU8[i31] | 0) >>> 0));
            HEAP8[i49 + 1 | 0] = i42;
            HEAP8[i49 + 2 | 0] = i41;
            i41 = i13 + 1 | 0;
            if (i41 >>> 0 < i44 >>> 0) {
             i13 = i41;
             i49 = i49 + 3 | 0;
             i31 = i31 + 4 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
          break L1282;
         }
         i7 = i7 + 1 | 0;
         i54 = i54 + i50 | 0;
         i8 = i8 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 2) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = HEAP32[i1 + 20 >> 2] | 0;
      i12 = i1 + 4 | 0;
      L1298 : do {
       if ((HEAP32[i12 >> 2] | 0) != 0) {
        i8 = i1 + 28 | 0;
        i54 = i1 | 0;
        i7 = 1;
        i53 = HEAP32[i1 + 12 >> 2] | 0;
        i46 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i45 = HEAP32[i54 >> 2] | 0;
         i9 = i46;
         i15 = HEAP32[i8 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i31 = 0;
           while (1) {
            i49 = HEAP32[i9 + (i31 << 2) >> 2] | 0;
            HEAP32[i15 + (i31 << 2) >> 2] = (i49 >>> 16 | i49 << 16) & 16711935 | i49 & -16711936;
            i31 = i31 + 1 | 0;
            if (i31 >>> 0 >= i45 >>> 0) {
             break;
            }
           }
           i31 = HEAP32[i54 >> 2] | 0;
           if ((i31 | 0) == 0) {
            break;
           }
           i49 = 0;
           i13 = i53;
           i44 = HEAP32[i8 >> 2] | 0;
           while (1) {
            i41 = HEAP8[i44 + 3 | 0] | 0;
            if (i41 << 24 >> 24 == 0) {
             d62 = +1;
            } else {
             d62 = +255 / +(i41 & 255 | 0);
            }
            i41 = ~~(d62 * +((HEAPU8[i44 + 1 | 0] | 0) >>> 0));
            i42 = ~~(d62 * +((HEAPU8[i44 + 2 | 0] | 0) >>> 0));
            HEAP8[i13] = ~~(d62 * +((HEAPU8[i44] | 0) >>> 0));
            HEAP8[i13 + 1 | 0] = i41;
            HEAP8[i13 + 2 | 0] = i42;
            i42 = i49 + 1 | 0;
            if (i42 >>> 0 < i31 >>> 0) {
             i49 = i42;
             i13 = i13 + 3 | 0;
             i44 = i44 + 4 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
          break L1298;
         }
         i7 = i7 + 1 | 0;
         i53 = i53 + i50 | 0;
         i46 = i46 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else {
      return;
     }
     break;
    }
   case 20:
    {
     if ((i4 | 0) == 0) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i12 = i1 + 4 | 0;
      L1320 : do {
       if ((HEAP32[i12 >> 2] | 0) != 0) {
        i46 = i1 + 28 | 0;
        i53 = i1 | 0;
        i7 = 1;
        i8 = HEAP32[i1 + 12 >> 2] | 0;
        i54 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i45 = HEAP32[i53 >> 2] | 0;
         i15 = i54;
         i9 = HEAP32[i46 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i44 = 0;
           while (1) {
            i13 = HEAP32[i15 + (i44 << 2) >> 2] | 0;
            HEAP32[i9 + (i44 << 2) >> 2] = (i13 >>> 16 | i13 << 16) & 16711935 | i13 & -16711936;
            i44 = i44 + 1 | 0;
            if (i44 >>> 0 >= i45 >>> 0) {
             break;
            }
           }
           i44 = HEAP32[i53 >> 2] | 0;
           if ((i44 | 0) == 0) {
            break;
           }
           i13 = 0;
           i49 = i8;
           i31 = HEAP32[i46 >> 2] | 0;
           while (1) {
            HEAP16[i49 >> 1] = (HEAPU8[i31 + 1 | 0] | 0) << 3 & 2016 | (HEAPU8[i31] | 0) << 8 & -2048 | (HEAP8[i31 + 2 | 0] & 255) >>> 3;
            i42 = i13 + 1 | 0;
            if (i42 >>> 0 < i44 >>> 0) {
             i13 = i42;
             i49 = i49 + 2 | 0;
             i31 = i31 + 4 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
          break L1320;
         }
         i7 = i7 + 1 | 0;
         i8 = i8 + (i50 << 1) | 0;
         i54 = i54 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 1) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i12 = i1 + 4 | 0;
      L1336 : do {
       if ((HEAP32[i12 >> 2] | 0) != 0) {
        i54 = i1 + 28 | 0;
        i8 = i1 | 0;
        i7 = 1;
        i46 = HEAP32[i1 + 12 >> 2] | 0;
        i53 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i45 = HEAP32[i8 >> 2] | 0;
         i9 = i53;
         i15 = HEAP32[i54 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i31 = 0;
           while (1) {
            i49 = HEAP32[i9 + (i31 << 2) >> 2] | 0;
            HEAP32[i15 + (i31 << 2) >> 2] = (i49 >>> 16 | i49 << 16) & 16711935 | i49 & -16711936;
            i31 = i31 + 1 | 0;
            if (i31 >>> 0 >= i45 >>> 0) {
             break;
            }
           }
           i31 = HEAP32[i8 >> 2] | 0;
           if ((i31 | 0) == 0) {
            break;
           }
           i49 = 0;
           i13 = i46;
           i44 = HEAP32[i54 >> 2] | 0;
           while (1) {
            d62 = +(HEAPU8[i44 + 3 | 0] | 0 | 0) / +255;
            HEAP16[i13 >> 1] = (~~(d62 * +((HEAPU8[i44 + 1 | 0] | 0) >>> 0)) & 255) << 3 & 2016 | (~~(d62 * +((HEAPU8[i44] | 0) >>> 0)) & 255) << 8 & -2048 | (~~(d62 * +((HEAPU8[i44 + 2 | 0] | 0) >>> 0)) & 255) >>> 3;
            i42 = i49 + 1 | 0;
            if (i42 >>> 0 < i31 >>> 0) {
             i49 = i42;
             i13 = i13 + 2 | 0;
             i44 = i44 + 4 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
          break L1336;
         }
         i7 = i7 + 1 | 0;
         i46 = i46 + (i50 << 1) | 0;
         i53 = i53 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 2) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i12 = i1 + 4 | 0;
      L1352 : do {
       if ((HEAP32[i12 >> 2] | 0) != 0) {
        i53 = i1 + 28 | 0;
        i46 = i1 | 0;
        i7 = 1;
        i54 = HEAP32[i1 + 12 >> 2] | 0;
        i8 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i45 = HEAP32[i46 >> 2] | 0;
         i15 = i8;
         i9 = HEAP32[i53 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i44 = 0;
           while (1) {
            i13 = HEAP32[i15 + (i44 << 2) >> 2] | 0;
            HEAP32[i9 + (i44 << 2) >> 2] = (i13 >>> 16 | i13 << 16) & 16711935 | i13 & -16711936;
            i44 = i44 + 1 | 0;
            if (i44 >>> 0 >= i45 >>> 0) {
             break;
            }
           }
           i44 = HEAP32[i46 >> 2] | 0;
           if ((i44 | 0) == 0) {
            break;
           }
           i13 = 0;
           i49 = i54;
           i31 = HEAP32[i53 >> 2] | 0;
           while (1) {
            i42 = HEAP8[i31 + 3 | 0] | 0;
            if (i42 << 24 >> 24 == 0) {
             d63 = +1;
            } else {
             d63 = +255 / +(i42 & 255 | 0);
            }
            HEAP16[i49 >> 1] = (~~(d63 * +((HEAPU8[i31 + 1 | 0] | 0) >>> 0)) & 255) << 3 & 2016 | (~~(d63 * +((HEAPU8[i31] | 0) >>> 0)) & 255) << 8 & -2048 | (~~(d63 * +((HEAPU8[i31 + 2 | 0] | 0) >>> 0)) & 255) >>> 3;
            i42 = i13 + 1 | 0;
            if (i42 >>> 0 < i44 >>> 0) {
             i13 = i42;
             i49 = i49 + 2 | 0;
             i31 = i31 + 4 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
          break L1352;
         }
         i7 = i7 + 1 | 0;
         i54 = i54 + (i50 << 1) | 0;
         i8 = i8 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else {
      return;
     }
     break;
    }
   case 8:
    {
     if ((i4 | 0) == 0) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i12 = i1 + 4 | 0;
      L1374 : do {
       if ((HEAP32[i12 >> 2] | 0) != 0) {
        i8 = i1 + 28 | 0;
        i54 = i1 | 0;
        i7 = 1;
        i53 = HEAP32[i1 + 12 >> 2] | 0;
        i46 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i45 = HEAP32[i54 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i9 = 0;
           i15 = HEAP32[i8 >> 2] | 0;
           i31 = i46;
           while (1) {
            HEAPF32[i15 >> 2] = +(HEAPU8[i31 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i15 + 4 >> 2] = +(HEAPU8[i31 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i15 + 8 >> 2] = +(HEAPU8[i31] | 0 | 0) * +.003921568859368563;
            HEAPF32[i15 + 12 >> 2] = +(HEAPU8[i31 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i49 = i9 + 1 | 0;
            if (i49 >>> 0 < i45 >>> 0) {
             i9 = i49;
             i15 = i15 + 16 | 0;
             i31 = i31 + 4 | 0;
            } else {
             break;
            }
           }
           i31 = HEAP32[i54 >> 2] | 0;
           if ((i31 | 0) == 0) {
            break;
           }
           i15 = 0;
           i9 = i53;
           i49 = HEAP32[i8 >> 2] | 0;
           while (1) {
            i13 = (HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i49 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i44 = i13 >>> 23;
            HEAP16[i9 >> 1] = ((i13 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i44 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i44 << 1) >> 1] | 0);
            i44 = (HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i49 + 4 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i13 = i44 >>> 23;
            HEAP16[i9 + 2 >> 1] = ((i44 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i13 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i13 << 1) >> 1] | 0);
            i13 = (HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i49 + 8 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i44 = i13 >>> 23;
            HEAP16[i9 + 4 >> 1] = ((i13 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i44 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i44 << 1) >> 1] | 0);
            i44 = i15 + 1 | 0;
            if (i44 >>> 0 < i31 >>> 0) {
             i15 = i44;
             i9 = i9 + 6 | 0;
             i49 = i49 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
          break L1374;
         }
         i7 = i7 + 1 | 0;
         i53 = i53 + (i50 << 1) | 0;
         i46 = i46 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 1) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i12 = i1 + 4 | 0;
      L1391 : do {
       if ((HEAP32[i12 >> 2] | 0) != 0) {
        i46 = i1 + 28 | 0;
        i53 = i1 | 0;
        i7 = 1;
        i8 = HEAP32[i1 + 12 >> 2] | 0;
        i54 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i45 = HEAP32[i53 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i49 = 0;
           i9 = HEAP32[i46 >> 2] | 0;
           i15 = i54;
           while (1) {
            HEAPF32[i9 >> 2] = +(HEAPU8[i15 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i9 + 4 >> 2] = +(HEAPU8[i15 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i9 + 8 >> 2] = +(HEAPU8[i15] | 0 | 0) * +.003921568859368563;
            HEAPF32[i9 + 12 >> 2] = +(HEAPU8[i15 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i31 = i49 + 1 | 0;
            if (i31 >>> 0 < i45 >>> 0) {
             i49 = i31;
             i9 = i9 + 16 | 0;
             i15 = i15 + 4 | 0;
            } else {
             break;
            }
           }
           i15 = HEAP32[i53 >> 2] | 0;
           if ((i15 | 0) == 0) {
            break;
           }
           i9 = 0;
           i49 = i8;
           i31 = HEAP32[i46 >> 2] | 0;
           while (1) {
            d63 = +HEAPF32[i31 + 12 >> 2];
            i44 = (HEAPF32[tempDoublePtr >> 2] = d63 * +HEAPF32[i31 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i13 = i44 >>> 23;
            HEAP16[i49 >> 1] = ((i44 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i13 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i13 << 1) >> 1] | 0);
            i13 = (HEAPF32[tempDoublePtr >> 2] = d63 * +HEAPF32[i31 + 4 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i44 = i13 >>> 23;
            HEAP16[i49 + 2 >> 1] = ((i13 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i44 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i44 << 1) >> 1] | 0);
            i44 = (HEAPF32[tempDoublePtr >> 2] = d63 * +HEAPF32[i31 + 8 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i13 = i44 >>> 23;
            HEAP16[i49 + 4 >> 1] = ((i44 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i13 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i13 << 1) >> 1] | 0);
            i13 = i9 + 1 | 0;
            if (i13 >>> 0 < i15 >>> 0) {
             i9 = i13;
             i49 = i49 + 6 | 0;
             i31 = i31 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
          break L1391;
         }
         i7 = i7 + 1 | 0;
         i8 = i8 + (i50 << 1) | 0;
         i54 = i54 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 2) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i12 = i1 + 4 | 0;
      L1408 : do {
       if ((HEAP32[i12 >> 2] | 0) != 0) {
        i54 = i1 + 28 | 0;
        i8 = i1 | 0;
        i7 = 1;
        i46 = HEAP32[i1 + 12 >> 2] | 0;
        i53 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i45 = HEAP32[i8 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i31 = 0;
           i49 = HEAP32[i54 >> 2] | 0;
           i9 = i53;
           while (1) {
            HEAPF32[i49 >> 2] = +(HEAPU8[i9 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i49 + 4 >> 2] = +(HEAPU8[i9 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i49 + 8 >> 2] = +(HEAPU8[i9] | 0 | 0) * +.003921568859368563;
            HEAPF32[i49 + 12 >> 2] = +(HEAPU8[i9 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i15 = i31 + 1 | 0;
            if (i15 >>> 0 < i45 >>> 0) {
             i31 = i15;
             i49 = i49 + 16 | 0;
             i9 = i9 + 4 | 0;
            } else {
             break;
            }
           }
           i9 = HEAP32[i8 >> 2] | 0;
           if ((i9 | 0) == 0) {
            break;
           }
           i49 = 0;
           i31 = i46;
           i15 = HEAP32[i54 >> 2] | 0;
           while (1) {
            d63 = +HEAPF32[i15 + 12 >> 2];
            if (d63 != +0) {
             d64 = +1 / d63;
            } else {
             d64 = +1;
            }
            i13 = (HEAPF32[tempDoublePtr >> 2] = d64 * +HEAPF32[i15 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i44 = i13 >>> 23;
            HEAP16[i31 >> 1] = ((i13 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i44 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i44 << 1) >> 1] | 0);
            i44 = (HEAPF32[tempDoublePtr >> 2] = d64 * +HEAPF32[i15 + 4 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i13 = i44 >>> 23;
            HEAP16[i31 + 2 >> 1] = ((i44 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i13 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i13 << 1) >> 1] | 0);
            i13 = (HEAPF32[tempDoublePtr >> 2] = d64 * +HEAPF32[i15 + 8 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i44 = i13 >>> 23;
            HEAP16[i31 + 4 >> 1] = ((i13 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i44 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i44 << 1) >> 1] | 0);
            i44 = i49 + 1 | 0;
            if (i44 >>> 0 < i9 >>> 0) {
             i49 = i44;
             i31 = i31 + 6 | 0;
             i15 = i15 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
          break L1408;
         }
         i7 = i7 + 1 | 0;
         i46 = i46 + (i50 << 1) | 0;
         i53 = i53 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else {
      return;
     }
     break;
    }
   case 9:
    {
     if ((i4 | 0) == 0) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = (HEAP32[i1 + 20 >> 2] | 0) >>> 2;
      i12 = i1 + 4 | 0;
      L1431 : do {
       if ((HEAP32[i12 >> 2] | 0) != 0) {
        i53 = i1 + 28 | 0;
        i46 = i1 | 0;
        i7 = 1;
        i54 = HEAP32[i1 + 12 >> 2] | 0;
        i8 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i45 = HEAP32[i46 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i15 = 0;
           i31 = HEAP32[i53 >> 2] | 0;
           i49 = i8;
           while (1) {
            HEAPF32[i31 >> 2] = +(HEAPU8[i49 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i31 + 4 >> 2] = +(HEAPU8[i49 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i31 + 8 >> 2] = +(HEAPU8[i49] | 0 | 0) * +.003921568859368563;
            HEAPF32[i31 + 12 >> 2] = +(HEAPU8[i49 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i9 = i15 + 1 | 0;
            if (i9 >>> 0 < i45 >>> 0) {
             i15 = i9;
             i31 = i31 + 16 | 0;
             i49 = i49 + 4 | 0;
            } else {
             break;
            }
           }
           i49 = HEAP32[i46 >> 2] | 0;
           if ((i49 | 0) == 0) {
            break;
           }
           i31 = 0;
           i15 = i54;
           i9 = HEAP32[i53 >> 2] | 0;
           while (1) {
            HEAPF32[i15 >> 2] = +HEAPF32[i9 >> 2];
            HEAPF32[i15 + 4 >> 2] = +HEAPF32[i9 + 4 >> 2];
            HEAPF32[i15 + 8 >> 2] = +HEAPF32[i9 + 8 >> 2];
            i44 = i31 + 1 | 0;
            if (i44 >>> 0 < i49 >>> 0) {
             i31 = i44;
             i15 = i15 + 12 | 0;
             i9 = i9 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
          break L1431;
         }
         i7 = i7 + 1 | 0;
         i54 = i54 + (i50 << 2) | 0;
         i8 = i8 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 1) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = (HEAP32[i1 + 20 >> 2] | 0) >>> 2;
      i12 = i1 + 4 | 0;
      L1448 : do {
       if ((HEAP32[i12 >> 2] | 0) != 0) {
        i8 = i1 + 28 | 0;
        i54 = i1 | 0;
        i7 = 1;
        i53 = HEAP32[i1 + 12 >> 2] | 0;
        i46 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i45 = HEAP32[i54 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i9 = 0;
           i15 = HEAP32[i8 >> 2] | 0;
           i31 = i46;
           while (1) {
            HEAPF32[i15 >> 2] = +(HEAPU8[i31 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i15 + 4 >> 2] = +(HEAPU8[i31 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i15 + 8 >> 2] = +(HEAPU8[i31] | 0 | 0) * +.003921568859368563;
            HEAPF32[i15 + 12 >> 2] = +(HEAPU8[i31 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i49 = i9 + 1 | 0;
            if (i49 >>> 0 < i45 >>> 0) {
             i9 = i49;
             i15 = i15 + 16 | 0;
             i31 = i31 + 4 | 0;
            } else {
             break;
            }
           }
           i31 = HEAP32[i54 >> 2] | 0;
           if ((i31 | 0) == 0) {
            break;
           }
           i15 = 0;
           i9 = i53;
           i49 = HEAP32[i8 >> 2] | 0;
           while (1) {
            d64 = +HEAPF32[i49 + 12 >> 2];
            HEAPF32[i9 >> 2] = d64 * +HEAPF32[i49 >> 2];
            HEAPF32[i9 + 4 >> 2] = d64 * +HEAPF32[i49 + 4 >> 2];
            HEAPF32[i9 + 8 >> 2] = d64 * +HEAPF32[i49 + 8 >> 2];
            i44 = i15 + 1 | 0;
            if (i44 >>> 0 < i31 >>> 0) {
             i15 = i44;
             i9 = i9 + 12 | 0;
             i49 = i49 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
          break L1448;
         }
         i7 = i7 + 1 | 0;
         i53 = i53 + (i50 << 2) | 0;
         i46 = i46 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 2) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = (HEAP32[i1 + 20 >> 2] | 0) >>> 2;
      i12 = i1 + 4 | 0;
      L1465 : do {
       if ((HEAP32[i12 >> 2] | 0) != 0) {
        i46 = i1 + 28 | 0;
        i53 = i1 | 0;
        i7 = 1;
        i8 = HEAP32[i1 + 12 >> 2] | 0;
        i54 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i45 = HEAP32[i53 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i49 = 0;
           i9 = HEAP32[i46 >> 2] | 0;
           i15 = i54;
           while (1) {
            HEAPF32[i9 >> 2] = +(HEAPU8[i15 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i9 + 4 >> 2] = +(HEAPU8[i15 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i9 + 8 >> 2] = +(HEAPU8[i15] | 0 | 0) * +.003921568859368563;
            HEAPF32[i9 + 12 >> 2] = +(HEAPU8[i15 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i31 = i49 + 1 | 0;
            if (i31 >>> 0 < i45 >>> 0) {
             i49 = i31;
             i9 = i9 + 16 | 0;
             i15 = i15 + 4 | 0;
            } else {
             break;
            }
           }
           i15 = HEAP32[i53 >> 2] | 0;
           if ((i15 | 0) == 0) {
            break;
           }
           i9 = 0;
           i49 = i8;
           i31 = HEAP32[i46 >> 2] | 0;
           while (1) {
            d64 = +HEAPF32[i31 + 12 >> 2];
            if (d64 != +0) {
             d65 = +1 / d64;
            } else {
             d65 = +1;
            }
            HEAPF32[i49 >> 2] = d65 * +HEAPF32[i31 >> 2];
            HEAPF32[i49 + 4 >> 2] = d65 * +HEAPF32[i31 + 4 >> 2];
            HEAPF32[i49 + 8 >> 2] = d65 * +HEAPF32[i31 + 8 >> 2];
            i44 = i9 + 1 | 0;
            if (i44 >>> 0 < i15 >>> 0) {
             i9 = i44;
             i49 = i49 + 12 | 0;
             i31 = i31 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i7 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
          break L1465;
         }
         i7 = i7 + 1 | 0;
         i8 = i8 + (i50 << 2) | 0;
         i54 = i54 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else {
      return;
     }
     break;
    }
   case 0:
    {
     if ((i4 | 0) == 0) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = HEAP32[i1 + 20 >> 2] | 0;
      i12 = HEAP32[i1 + 8 >> 2] | 0;
      i54 = HEAP32[i1 + 12 >> 2] | 0;
      i8 = i1 + 4 | 0;
      i7 = HEAP32[i8 >> 2] | 0;
      i46 = (i7 | 0) == 0;
      L1488 : do {
       if ((i50 | 0) > 0) {
        if (i46) {
         break;
        }
        i53 = i1 | 0;
        i45 = 1;
        i31 = i54;
        i49 = i12;
        i9 = i7;
        while (1) {
         i15 = HEAP32[i53 >> 2] | 0;
         i44 = i49;
         i13 = i31;
         if ((i15 | 0) == 0) {
          i66 = i9;
         } else {
          i42 = 0;
          while (1) {
           i41 = HEAP32[i44 + (i42 << 2) >> 2] | 0;
           HEAP32[i13 + (i42 << 2) >> 2] = (i41 >>> 16 | i41 << 16) & 16711935 | i41 & -16711936;
           i42 = i42 + 1 | 0;
           if (i42 >>> 0 >= i15 >>> 0) {
            break;
           }
          }
          i66 = HEAP32[i8 >> 2] | 0;
         }
         if (i45 >>> 0 >= i66 >>> 0) {
          break L1488;
         }
         i45 = i45 + 1 | 0;
         i31 = i31 + i50 | 0;
         i49 = i49 + i48 | 0;
         i9 = i66;
        }
       } else {
        if (i46) {
         break;
        }
        i9 = i1 + 28 | 0;
        i49 = i1 | 0;
        i31 = 0;
        i45 = i54;
        i53 = i12;
        while (1) {
         i15 = HEAP32[i9 >> 2] | 0;
         i42 = HEAP32[i49 >> 2] | 0;
         i13 = i53;
         i44 = i15;
         if ((i42 | 0) == 0) {
          i67 = i15;
          i68 = 0;
         } else {
          i15 = 0;
          while (1) {
           i41 = HEAP32[i13 + (i15 << 2) >> 2] | 0;
           HEAP32[i44 + (i15 << 2) >> 2] = (i41 >>> 16 | i41 << 16) & 16711935 | i41 & -16711936;
           i15 = i15 + 1 | 0;
           if (i15 >>> 0 >= i42 >>> 0) {
            break;
           }
          }
          i67 = HEAP32[i9 >> 2] | 0;
          i68 = HEAP32[i49 >> 2] << 2;
         }
         _memcpy(i45 | 0, i67 | 0, i68) | 0;
         i42 = i31 + 1 | 0;
         if (i42 >>> 0 < (HEAP32[i8 >> 2] | 0) >>> 0) {
          i31 = i42;
          i45 = i45 + i50 | 0;
          i53 = i53 + i48 | 0;
         } else {
          break;
         }
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 1) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = HEAP32[i1 + 20 >> 2] | 0;
      i8 = i1 + 4 | 0;
      L1511 : do {
       if ((HEAP32[i8 >> 2] | 0) != 0) {
        i68 = i1 + 28 | 0;
        i67 = i1 | 0;
        i12 = 1;
        i54 = HEAP32[i1 + 12 >> 2] | 0;
        i46 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i66 = HEAP32[i67 >> 2] | 0;
         i7 = i46;
         i53 = HEAP32[i68 >> 2] | 0;
         do {
          if ((i66 | 0) != 0) {
           i45 = 0;
           while (1) {
            i31 = HEAP32[i7 + (i45 << 2) >> 2] | 0;
            HEAP32[i53 + (i45 << 2) >> 2] = (i31 >>> 16 | i31 << 16) & 16711935 | i31 & -16711936;
            i45 = i45 + 1 | 0;
            if (i45 >>> 0 >= i66 >>> 0) {
             break;
            }
           }
           i45 = HEAP32[i67 >> 2] | 0;
           if ((i45 | 0) == 0) {
            break;
           }
           i31 = 0;
           i49 = i54;
           i9 = HEAP32[i68 >> 2] | 0;
           while (1) {
            i42 = i9 + 3 | 0;
            d65 = +(HEAPU8[i42] | 0 | 0) / +255;
            i15 = ~~(d65 * +((HEAPU8[i9 + 1 | 0] | 0) >>> 0));
            i44 = ~~(d65 * +((HEAPU8[i9 + 2 | 0] | 0) >>> 0));
            HEAP8[i49] = ~~(d65 * +((HEAPU8[i9] | 0) >>> 0));
            HEAP8[i49 + 1 | 0] = i15;
            HEAP8[i49 + 2 | 0] = i44;
            HEAP8[i49 + 3 | 0] = HEAP8[i42] | 0;
            i42 = i31 + 1 | 0;
            if (i42 >>> 0 < i45 >>> 0) {
             i31 = i42;
             i49 = i49 + 4 | 0;
             i9 = i9 + 4 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i12 >>> 0 >= (HEAP32[i8 >> 2] | 0) >>> 0) {
          break L1511;
         }
         i12 = i12 + 1 | 0;
         i54 = i54 + i50 | 0;
         i46 = i46 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 2) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = HEAP32[i1 + 20 >> 2] | 0;
      i8 = i1 + 4 | 0;
      L1527 : do {
       if ((HEAP32[i8 >> 2] | 0) != 0) {
        i46 = i1 + 28 | 0;
        i54 = i1 | 0;
        i12 = 1;
        i68 = HEAP32[i1 + 12 >> 2] | 0;
        i67 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i66 = HEAP32[i54 >> 2] | 0;
         i53 = i67;
         i7 = HEAP32[i46 >> 2] | 0;
         do {
          if ((i66 | 0) != 0) {
           i9 = 0;
           while (1) {
            i49 = HEAP32[i53 + (i9 << 2) >> 2] | 0;
            HEAP32[i7 + (i9 << 2) >> 2] = (i49 >>> 16 | i49 << 16) & 16711935 | i49 & -16711936;
            i9 = i9 + 1 | 0;
            if (i9 >>> 0 >= i66 >>> 0) {
             break;
            }
           }
           i9 = HEAP32[i54 >> 2] | 0;
           if ((i9 | 0) == 0) {
            break;
           }
           i49 = 0;
           i31 = i68;
           i45 = HEAP32[i46 >> 2] | 0;
           while (1) {
            i42 = i45 + 3 | 0;
            i44 = HEAP8[i42] | 0;
            if (i44 << 24 >> 24 == 0) {
             d69 = +1;
            } else {
             d69 = +255 / +(i44 & 255 | 0);
            }
            i44 = ~~(d69 * +((HEAPU8[i45 + 1 | 0] | 0) >>> 0));
            i15 = ~~(d69 * +((HEAPU8[i45 + 2 | 0] | 0) >>> 0));
            HEAP8[i31] = ~~(d69 * +((HEAPU8[i45] | 0) >>> 0));
            HEAP8[i31 + 1 | 0] = i44;
            HEAP8[i31 + 2 | 0] = i15;
            HEAP8[i31 + 3 | 0] = HEAP8[i42] | 0;
            i42 = i49 + 1 | 0;
            if (i42 >>> 0 < i9 >>> 0) {
             i49 = i42;
             i31 = i31 + 4 | 0;
             i45 = i45 + 4 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i12 >>> 0 >= (HEAP32[i8 >> 2] | 0) >>> 0) {
          break L1527;
         }
         i12 = i12 + 1 | 0;
         i68 = i68 + i50 | 0;
         i67 = i67 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else {
      return;
     }
     break;
    }
   case 18:
    {
     if ((i4 | 0) == 0) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i8 = i1 + 4 | 0;
      L1549 : do {
       if ((HEAP32[i8 >> 2] | 0) != 0) {
        i67 = i1 + 28 | 0;
        i68 = i1 | 0;
        i12 = 1;
        i46 = HEAP32[i1 + 12 >> 2] | 0;
        i54 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i66 = HEAP32[i68 >> 2] | 0;
         i7 = i54;
         i53 = HEAP32[i67 >> 2] | 0;
         do {
          if ((i66 | 0) != 0) {
           i45 = 0;
           while (1) {
            i31 = HEAP32[i7 + (i45 << 2) >> 2] | 0;
            HEAP32[i53 + (i45 << 2) >> 2] = (i31 >>> 16 | i31 << 16) & 16711935 | i31 & -16711936;
            i45 = i45 + 1 | 0;
            if (i45 >>> 0 >= i66 >>> 0) {
             break;
            }
           }
           i45 = HEAP32[i68 >> 2] | 0;
           if ((i45 | 0) == 0) {
            break;
           }
           i31 = 0;
           i49 = i46;
           i9 = HEAP32[i67 >> 2] | 0;
           while (1) {
            HEAP16[i49 >> 1] = (HEAPU8[i9 + 1 | 0] | 0) << 3 & 1984 | (HEAPU8[i9] | 0) << 8 & -2048 | (HEAP8[i9 + 2 | 0] & 255) >>> 2 & 62 | (HEAP8[i9 + 3 | 0] & 255) >>> 7;
            i42 = i31 + 1 | 0;
            if (i42 >>> 0 < i45 >>> 0) {
             i31 = i42;
             i49 = i49 + 2 | 0;
             i9 = i9 + 4 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i12 >>> 0 >= (HEAP32[i8 >> 2] | 0) >>> 0) {
          break L1549;
         }
         i12 = i12 + 1 | 0;
         i46 = i46 + (i50 << 1) | 0;
         i54 = i54 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 1) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i8 = i1 + 4 | 0;
      L1565 : do {
       if ((HEAP32[i8 >> 2] | 0) != 0) {
        i54 = i1 + 28 | 0;
        i46 = i1 | 0;
        i12 = 1;
        i67 = HEAP32[i1 + 12 >> 2] | 0;
        i68 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i66 = HEAP32[i46 >> 2] | 0;
         i53 = i68;
         i7 = HEAP32[i54 >> 2] | 0;
         do {
          if ((i66 | 0) != 0) {
           i9 = 0;
           while (1) {
            i49 = HEAP32[i53 + (i9 << 2) >> 2] | 0;
            HEAP32[i7 + (i9 << 2) >> 2] = (i49 >>> 16 | i49 << 16) & 16711935 | i49 & -16711936;
            i9 = i9 + 1 | 0;
            if (i9 >>> 0 >= i66 >>> 0) {
             break;
            }
           }
           i9 = HEAP32[i46 >> 2] | 0;
           if ((i9 | 0) == 0) {
            break;
           }
           i49 = 0;
           i31 = i67;
           i45 = HEAP32[i54 >> 2] | 0;
           while (1) {
            i42 = HEAPU8[i45 + 3 | 0] | 0;
            d69 = +(i42 | 0) / +255;
            HEAP16[i31 >> 1] = (~~(d69 * +((HEAPU8[i45] | 0) >>> 0)) & 255) << 8 & 63488 | i42 >>> 7 | (~~(d69 * +((HEAPU8[i45 + 1 | 0] | 0) >>> 0)) & 255) << 3 & 1984 | (~~(d69 * +((HEAPU8[i45 + 2 | 0] | 0) >>> 0)) & 255) >>> 2 & 62;
            i42 = i49 + 1 | 0;
            if (i42 >>> 0 < i9 >>> 0) {
             i49 = i42;
             i31 = i31 + 2 | 0;
             i45 = i45 + 4 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i12 >>> 0 >= (HEAP32[i8 >> 2] | 0) >>> 0) {
          break L1565;
         }
         i12 = i12 + 1 | 0;
         i67 = i67 + (i50 << 1) | 0;
         i68 = i68 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 2) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i8 = i1 + 4 | 0;
      L1581 : do {
       if ((HEAP32[i8 >> 2] | 0) != 0) {
        i68 = i1 + 28 | 0;
        i67 = i1 | 0;
        i12 = 1;
        i54 = HEAP32[i1 + 12 >> 2] | 0;
        i46 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i66 = HEAP32[i67 >> 2] | 0;
         i7 = i46;
         i53 = HEAP32[i68 >> 2] | 0;
         do {
          if ((i66 | 0) != 0) {
           i45 = 0;
           while (1) {
            i31 = HEAP32[i7 + (i45 << 2) >> 2] | 0;
            HEAP32[i53 + (i45 << 2) >> 2] = (i31 >>> 16 | i31 << 16) & 16711935 | i31 & -16711936;
            i45 = i45 + 1 | 0;
            if (i45 >>> 0 >= i66 >>> 0) {
             break;
            }
           }
           i45 = HEAP32[i67 >> 2] | 0;
           if ((i45 | 0) == 0) {
            break;
           }
           i31 = 0;
           i49 = i54;
           i9 = HEAP32[i68 >> 2] | 0;
           while (1) {
            i42 = HEAP8[i9 + 3 | 0] | 0;
            if (i42 << 24 >> 24 == 0) {
             d70 = +1;
            } else {
             d70 = +255 / +(i42 & 255 | 0);
            }
            HEAP16[i49 >> 1] = (~~(d70 * +((HEAPU8[i9] | 0) >>> 0)) & 255) << 8 & -2048 | (i42 & 255) >>> 7 | (~~(d70 * +((HEAPU8[i9 + 1 | 0] | 0) >>> 0)) & 255) << 3 & 1984 | (~~(d70 * +((HEAPU8[i9 + 2 | 0] | 0) >>> 0)) & 255) >>> 2 & 62;
            i42 = i31 + 1 | 0;
            if (i42 >>> 0 < i45 >>> 0) {
             i31 = i42;
             i49 = i49 + 2 | 0;
             i9 = i9 + 4 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i12 >>> 0 >= (HEAP32[i8 >> 2] | 0) >>> 0) {
          break L1581;
         }
         i12 = i12 + 1 | 0;
         i54 = i54 + (i50 << 1) | 0;
         i46 = i46 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else {
      return;
     }
     break;
    }
   case 19:
    {
     if ((i4 | 0) == 0) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i8 = i1 + 4 | 0;
      L1603 : do {
       if ((HEAP32[i8 >> 2] | 0) != 0) {
        i46 = i1 + 28 | 0;
        i54 = i1 | 0;
        i12 = 1;
        i68 = HEAP32[i1 + 12 >> 2] | 0;
        i67 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i66 = HEAP32[i54 >> 2] | 0;
         i53 = i67;
         i7 = HEAP32[i46 >> 2] | 0;
         do {
          if ((i66 | 0) != 0) {
           i9 = 0;
           while (1) {
            i49 = HEAP32[i53 + (i9 << 2) >> 2] | 0;
            HEAP32[i7 + (i9 << 2) >> 2] = (i49 >>> 16 | i49 << 16) & 16711935 | i49 & -16711936;
            i9 = i9 + 1 | 0;
            if (i9 >>> 0 >= i66 >>> 0) {
             break;
            }
           }
           i9 = HEAP32[i54 >> 2] | 0;
           if ((i9 | 0) == 0) {
            break;
           }
           i49 = 0;
           i31 = i68;
           i45 = HEAP32[i46 >> 2] | 0;
           while (1) {
            HEAP16[i31 >> 1] = (HEAPU8[i45 + 1 | 0] | 0) << 4 & 3840 | (HEAPU8[i45] | 0) << 8 & -4096 | HEAP8[i45 + 2 | 0] & 240 | (HEAP8[i45 + 3 | 0] & 255) >>> 4;
            i42 = i49 + 1 | 0;
            if (i42 >>> 0 < i9 >>> 0) {
             i49 = i42;
             i31 = i31 + 2 | 0;
             i45 = i45 + 4 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i12 >>> 0 >= (HEAP32[i8 >> 2] | 0) >>> 0) {
          break L1603;
         }
         i12 = i12 + 1 | 0;
         i68 = i68 + (i50 << 1) | 0;
         i67 = i67 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 1) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i8 = i1 + 4 | 0;
      L1619 : do {
       if ((HEAP32[i8 >> 2] | 0) != 0) {
        i67 = i1 + 28 | 0;
        i68 = i1 | 0;
        i12 = 1;
        i46 = HEAP32[i1 + 12 >> 2] | 0;
        i54 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i66 = HEAP32[i68 >> 2] | 0;
         i7 = i54;
         i53 = HEAP32[i67 >> 2] | 0;
         do {
          if ((i66 | 0) != 0) {
           i45 = 0;
           while (1) {
            i31 = HEAP32[i7 + (i45 << 2) >> 2] | 0;
            HEAP32[i53 + (i45 << 2) >> 2] = (i31 >>> 16 | i31 << 16) & 16711935 | i31 & -16711936;
            i45 = i45 + 1 | 0;
            if (i45 >>> 0 >= i66 >>> 0) {
             break;
            }
           }
           i45 = HEAP32[i68 >> 2] | 0;
           if ((i45 | 0) == 0) {
            break;
           }
           i31 = 0;
           i49 = i46;
           i9 = HEAP32[i67 >> 2] | 0;
           while (1) {
            i42 = HEAPU8[i9 + 3 | 0] | 0;
            d70 = +(i42 | 0) / +255;
            HEAP16[i49 >> 1] = (~~(d70 * +((HEAPU8[i9] | 0) >>> 0)) & 255) << 8 & 61440 | i42 >>> 4 | (~~(d70 * +((HEAPU8[i9 + 1 | 0] | 0) >>> 0)) & 255) << 4 & 3840 | ~~(d70 * +((HEAPU8[i9 + 2 | 0] | 0) >>> 0)) & 240;
            i42 = i31 + 1 | 0;
            if (i42 >>> 0 < i45 >>> 0) {
             i31 = i42;
             i49 = i49 + 2 | 0;
             i9 = i9 + 4 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i12 >>> 0 >= (HEAP32[i8 >> 2] | 0) >>> 0) {
          break L1619;
         }
         i12 = i12 + 1 | 0;
         i46 = i46 + (i50 << 1) | 0;
         i54 = i54 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 2) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i8 = i1 + 4 | 0;
      L1635 : do {
       if ((HEAP32[i8 >> 2] | 0) != 0) {
        i54 = i1 + 28 | 0;
        i46 = i1 | 0;
        i12 = 1;
        i67 = HEAP32[i1 + 12 >> 2] | 0;
        i68 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i66 = HEAP32[i46 >> 2] | 0;
         i53 = i68;
         i7 = HEAP32[i54 >> 2] | 0;
         do {
          if ((i66 | 0) != 0) {
           i9 = 0;
           while (1) {
            i49 = HEAP32[i53 + (i9 << 2) >> 2] | 0;
            HEAP32[i7 + (i9 << 2) >> 2] = (i49 >>> 16 | i49 << 16) & 16711935 | i49 & -16711936;
            i9 = i9 + 1 | 0;
            if (i9 >>> 0 >= i66 >>> 0) {
             break;
            }
           }
           i9 = HEAP32[i46 >> 2] | 0;
           if ((i9 | 0) == 0) {
            break;
           }
           i49 = 0;
           i31 = i67;
           i45 = HEAP32[i54 >> 2] | 0;
           while (1) {
            i42 = HEAP8[i45 + 3 | 0] | 0;
            if (i42 << 24 >> 24 == 0) {
             d71 = +1;
            } else {
             d71 = +255 / +(i42 & 255 | 0);
            }
            HEAP16[i31 >> 1] = (~~(d71 * +((HEAPU8[i45] | 0) >>> 0)) & 255) << 8 & -4096 | (i42 & 255) >>> 4 | (~~(d71 * +((HEAPU8[i45 + 1 | 0] | 0) >>> 0)) & 255) << 4 & 3840 | ~~(d71 * +((HEAPU8[i45 + 2 | 0] | 0) >>> 0)) & 240;
            i42 = i49 + 1 | 0;
            if (i42 >>> 0 < i9 >>> 0) {
             i49 = i42;
             i31 = i31 + 2 | 0;
             i45 = i45 + 4 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i12 >>> 0 >= (HEAP32[i8 >> 2] | 0) >>> 0) {
          break L1635;
         }
         i12 = i12 + 1 | 0;
         i67 = i67 + (i50 << 1) | 0;
         i68 = i68 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else {
      return;
     }
     break;
    }
   case 3:
    {
     if ((i4 | 0) == 0) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i8 = i1 + 4 | 0;
      L1657 : do {
       if ((HEAP32[i8 >> 2] | 0) != 0) {
        i68 = i1 + 28 | 0;
        i67 = i1 | 0;
        i12 = 1;
        i54 = HEAP32[i1 + 12 >> 2] | 0;
        i46 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i66 = HEAP32[i67 >> 2] | 0;
         do {
          if ((i66 | 0) != 0) {
           i7 = 0;
           i53 = HEAP32[i68 >> 2] | 0;
           i45 = i46;
           while (1) {
            HEAPF32[i53 >> 2] = +(HEAPU8[i45 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i53 + 4 >> 2] = +(HEAPU8[i45 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i53 + 8 >> 2] = +(HEAPU8[i45] | 0 | 0) * +.003921568859368563;
            HEAPF32[i53 + 12 >> 2] = +(HEAPU8[i45 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i31 = i7 + 1 | 0;
            if (i31 >>> 0 < i66 >>> 0) {
             i7 = i31;
             i53 = i53 + 16 | 0;
             i45 = i45 + 4 | 0;
            } else {
             break;
            }
           }
           i45 = HEAP32[i67 >> 2] | 0;
           if ((i45 | 0) == 0) {
            break;
           }
           i53 = 0;
           i7 = i54;
           i31 = HEAP32[i68 >> 2] | 0;
           while (1) {
            i49 = (HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i31 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i9 = i49 >>> 23;
            HEAP16[i7 >> 1] = ((i49 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i9 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i9 << 1) >> 1] | 0);
            i9 = (HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i31 + 4 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i49 = i9 >>> 23;
            HEAP16[i7 + 2 >> 1] = ((i9 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i49 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i49 << 1) >> 1] | 0);
            i49 = (HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i31 + 8 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i9 = i49 >>> 23;
            HEAP16[i7 + 4 >> 1] = ((i49 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i9 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i9 << 1) >> 1] | 0);
            i9 = (HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i31 + 12 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i49 = i9 >>> 23;
            HEAP16[i7 + 6 >> 1] = ((i9 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i49 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i49 << 1) >> 1] | 0);
            i49 = i53 + 1 | 0;
            if (i49 >>> 0 < i45 >>> 0) {
             i53 = i49;
             i7 = i7 + 8 | 0;
             i31 = i31 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i12 >>> 0 >= (HEAP32[i8 >> 2] | 0) >>> 0) {
          break L1657;
         }
         i12 = i12 + 1 | 0;
         i54 = i54 + (i50 << 1) | 0;
         i46 = i46 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 1) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i8 = i1 + 4 | 0;
      L1674 : do {
       if ((HEAP32[i8 >> 2] | 0) != 0) {
        i46 = i1 + 28 | 0;
        i54 = i1 | 0;
        i12 = 1;
        i68 = HEAP32[i1 + 12 >> 2] | 0;
        i67 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i66 = HEAP32[i54 >> 2] | 0;
         do {
          if ((i66 | 0) != 0) {
           i31 = 0;
           i7 = HEAP32[i46 >> 2] | 0;
           i53 = i67;
           while (1) {
            HEAPF32[i7 >> 2] = +(HEAPU8[i53 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i7 + 4 >> 2] = +(HEAPU8[i53 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i7 + 8 >> 2] = +(HEAPU8[i53] | 0 | 0) * +.003921568859368563;
            HEAPF32[i7 + 12 >> 2] = +(HEAPU8[i53 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i45 = i31 + 1 | 0;
            if (i45 >>> 0 < i66 >>> 0) {
             i31 = i45;
             i7 = i7 + 16 | 0;
             i53 = i53 + 4 | 0;
            } else {
             break;
            }
           }
           i53 = HEAP32[i54 >> 2] | 0;
           if ((i53 | 0) == 0) {
            break;
           }
           i7 = 0;
           i31 = i68;
           i45 = HEAP32[i46 >> 2] | 0;
           while (1) {
            i49 = i45 + 12 | 0;
            d71 = +HEAPF32[i49 >> 2];
            i9 = (HEAPF32[tempDoublePtr >> 2] = d71 * +HEAPF32[i45 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i42 = i9 >>> 23;
            HEAP16[i31 >> 1] = ((i9 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i42 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i42 << 1) >> 1] | 0);
            i42 = (HEAPF32[tempDoublePtr >> 2] = d71 * +HEAPF32[i45 + 4 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i9 = i42 >>> 23;
            HEAP16[i31 + 2 >> 1] = ((i42 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i9 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i9 << 1) >> 1] | 0);
            i9 = (HEAPF32[tempDoublePtr >> 2] = d71 * +HEAPF32[i45 + 8 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i42 = i9 >>> 23;
            HEAP16[i31 + 4 >> 1] = ((i9 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i42 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i42 << 1) >> 1] | 0);
            i42 = (HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i49 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i49 = i42 >>> 23;
            HEAP16[i31 + 6 >> 1] = ((i42 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i49 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i49 << 1) >> 1] | 0);
            i49 = i7 + 1 | 0;
            if (i49 >>> 0 < i53 >>> 0) {
             i7 = i49;
             i31 = i31 + 8 | 0;
             i45 = i45 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i12 >>> 0 >= (HEAP32[i8 >> 2] | 0) >>> 0) {
          break L1674;
         }
         i12 = i12 + 1 | 0;
         i68 = i68 + (i50 << 1) | 0;
         i67 = i67 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 2) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
      i8 = i1 + 4 | 0;
      L1691 : do {
       if ((HEAP32[i8 >> 2] | 0) != 0) {
        i67 = i1 + 28 | 0;
        i68 = i1 | 0;
        i12 = 1;
        i46 = HEAP32[i1 + 12 >> 2] | 0;
        i54 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i66 = HEAP32[i68 >> 2] | 0;
         do {
          if ((i66 | 0) != 0) {
           i45 = 0;
           i31 = HEAP32[i67 >> 2] | 0;
           i7 = i54;
           while (1) {
            HEAPF32[i31 >> 2] = +(HEAPU8[i7 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i31 + 4 >> 2] = +(HEAPU8[i7 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i31 + 8 >> 2] = +(HEAPU8[i7] | 0 | 0) * +.003921568859368563;
            HEAPF32[i31 + 12 >> 2] = +(HEAPU8[i7 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i53 = i45 + 1 | 0;
            if (i53 >>> 0 < i66 >>> 0) {
             i45 = i53;
             i31 = i31 + 16 | 0;
             i7 = i7 + 4 | 0;
            } else {
             break;
            }
           }
           i7 = HEAP32[i68 >> 2] | 0;
           if ((i7 | 0) == 0) {
            break;
           }
           i31 = 0;
           i45 = i46;
           i53 = HEAP32[i67 >> 2] | 0;
           while (1) {
            i49 = i53 + 12 | 0;
            d71 = +HEAPF32[i49 >> 2];
            if (d71 != +0) {
             d72 = +1 / d71;
            } else {
             d72 = +1;
            }
            i42 = (HEAPF32[tempDoublePtr >> 2] = d72 * +HEAPF32[i53 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i9 = i42 >>> 23;
            HEAP16[i45 >> 1] = ((i42 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i9 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i9 << 1) >> 1] | 0);
            i9 = (HEAPF32[tempDoublePtr >> 2] = d72 * +HEAPF32[i53 + 4 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i42 = i9 >>> 23;
            HEAP16[i45 + 2 >> 1] = ((i9 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i42 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i42 << 1) >> 1] | 0);
            i42 = (HEAPF32[tempDoublePtr >> 2] = d72 * +HEAPF32[i53 + 8 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i9 = i42 >>> 23;
            HEAP16[i45 + 4 >> 1] = ((i42 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i9 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i9 << 1) >> 1] | 0);
            i9 = (HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i49 >> 2], HEAP32[tempDoublePtr >> 2] | 0);
            i49 = i9 >>> 23;
            HEAP16[i45 + 6 >> 1] = ((i9 & 8388607) >>> ((HEAPU8[H_BASE + 1032 + i49 | 0] | 0) >>> 0)) + (HEAPU16[H_BASE + 8 + (i49 << 1) >> 1] | 0);
            i49 = i31 + 1 | 0;
            if (i49 >>> 0 < i7 >>> 0) {
             i31 = i49;
             i45 = i45 + 8 | 0;
             i53 = i53 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i12 >>> 0 >= (HEAP32[i8 >> 2] | 0) >>> 0) {
          break L1691;
         }
         i12 = i12 + 1 | 0;
         i46 = i46 + (i50 << 1) | 0;
         i54 = i54 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else {
      return;
     }
     break;
    }
   case 4:
    {
     if ((i4 | 0) == 0) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i50 = HEAP32[i1 + 20 >> 2] | 0;
      i8 = i50 >>> 2;
      i54 = HEAP32[i1 + 8 >> 2] | 0;
      i46 = HEAP32[i1 + 12 >> 2] | 0;
      i12 = i1 + 4 | 0;
      i67 = HEAP32[i12 >> 2] | 0;
      i68 = (i67 | 0) == 0;
      L1714 : do {
       if ((i50 | 0) > 0) {
        if (i68) {
         break;
        }
        i66 = i1 | 0;
        i53 = 1;
        i45 = i46;
        i31 = i54;
        i7 = i67;
        while (1) {
         i49 = HEAP32[i66 >> 2] | 0;
         if ((i49 | 0) == 0) {
          i73 = i7;
         } else {
          i9 = 0;
          i42 = i45;
          i15 = i31;
          while (1) {
           HEAPF32[i42 >> 2] = +(HEAPU8[i15 + 2 | 0] | 0 | 0) * +.003921568859368563;
           HEAPF32[i42 + 4 >> 2] = +(HEAPU8[i15 + 1 | 0] | 0 | 0) * +.003921568859368563;
           HEAPF32[i42 + 8 >> 2] = +(HEAPU8[i15] | 0 | 0) * +.003921568859368563;
           HEAPF32[i42 + 12 >> 2] = +(HEAPU8[i15 + 3 | 0] | 0 | 0) * +.003921568859368563;
           i44 = i9 + 1 | 0;
           if (i44 >>> 0 < i49 >>> 0) {
            i9 = i44;
            i42 = i42 + 16 | 0;
            i15 = i15 + 4 | 0;
           } else {
            break;
           }
          }
          i73 = HEAP32[i12 >> 2] | 0;
         }
         if (i53 >>> 0 >= i73 >>> 0) {
          break L1714;
         }
         i53 = i53 + 1 | 0;
         i45 = i45 + (i8 << 2) | 0;
         i31 = i31 + i48 | 0;
         i7 = i73;
        }
       } else {
        if (i68) {
         break;
        }
        i7 = i1 + 28 | 0;
        i31 = i1 | 0;
        i45 = 0;
        i53 = i46;
        i66 = i54;
        while (1) {
         i15 = HEAP32[i31 >> 2] | 0;
         if ((i15 | 0) == 0) {
          i74 = 0;
         } else {
          i42 = 0;
          i9 = HEAP32[i7 >> 2] | 0;
          i49 = i66;
          while (1) {
           HEAPF32[i9 >> 2] = +(HEAPU8[i49 + 2 | 0] | 0 | 0) * +.003921568859368563;
           HEAPF32[i9 + 4 >> 2] = +(HEAPU8[i49 + 1 | 0] | 0 | 0) * +.003921568859368563;
           HEAPF32[i9 + 8 >> 2] = +(HEAPU8[i49] | 0 | 0) * +.003921568859368563;
           HEAPF32[i9 + 12 >> 2] = +(HEAPU8[i49 + 3 | 0] | 0 | 0) * +.003921568859368563;
           i44 = i42 + 1 | 0;
           if (i44 >>> 0 < i15 >>> 0) {
            i42 = i44;
            i9 = i9 + 16 | 0;
            i49 = i49 + 4 | 0;
           } else {
            break;
           }
          }
          i74 = HEAP32[i31 >> 2] << 4;
         }
         _memcpy(i53 | 0, HEAP32[i7 >> 2] | 0, i74) | 0;
         i49 = i45 + 1 | 0;
         if (i49 >>> 0 < (HEAP32[i12 >> 2] | 0) >>> 0) {
          i45 = i49;
          i53 = i53 + (i8 << 2) | 0;
          i66 = i66 + i48 | 0;
         } else {
          break;
         }
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 1) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i8 = (HEAP32[i1 + 20 >> 2] | 0) >>> 2;
      i12 = i1 + 4 | 0;
      L1738 : do {
       if ((HEAP32[i12 >> 2] | 0) != 0) {
        i74 = i1 + 28 | 0;
        i54 = i1 | 0;
        i46 = 1;
        i68 = HEAP32[i1 + 12 >> 2] | 0;
        i73 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i67 = HEAP32[i54 >> 2] | 0;
         do {
          if ((i67 | 0) != 0) {
           i50 = 0;
           i66 = HEAP32[i74 >> 2] | 0;
           i53 = i73;
           while (1) {
            HEAPF32[i66 >> 2] = +(HEAPU8[i53 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i66 + 4 >> 2] = +(HEAPU8[i53 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i66 + 8 >> 2] = +(HEAPU8[i53] | 0 | 0) * +.003921568859368563;
            HEAPF32[i66 + 12 >> 2] = +(HEAPU8[i53 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i45 = i50 + 1 | 0;
            if (i45 >>> 0 < i67 >>> 0) {
             i50 = i45;
             i66 = i66 + 16 | 0;
             i53 = i53 + 4 | 0;
            } else {
             break;
            }
           }
           i53 = HEAP32[i54 >> 2] | 0;
           if ((i53 | 0) == 0) {
            break;
           }
           i66 = 0;
           i50 = i68;
           i45 = HEAP32[i74 >> 2] | 0;
           while (1) {
            i7 = i45 + 12 | 0;
            d72 = +HEAPF32[i7 >> 2];
            HEAPF32[i50 >> 2] = d72 * +HEAPF32[i45 >> 2];
            HEAPF32[i50 + 4 >> 2] = d72 * +HEAPF32[i45 + 4 >> 2];
            HEAPF32[i50 + 8 >> 2] = d72 * +HEAPF32[i45 + 8 >> 2];
            HEAPF32[i50 + 12 >> 2] = +HEAPF32[i7 >> 2];
            i7 = i66 + 1 | 0;
            if (i7 >>> 0 < i53 >>> 0) {
             i66 = i7;
             i50 = i50 + 16 | 0;
             i45 = i45 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i46 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
          break L1738;
         }
         i46 = i46 + 1 | 0;
         i68 = i68 + (i8 << 2) | 0;
         i73 = i73 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else if ((i4 | 0) == 2) {
      i48 = HEAP32[i1 + 16 >> 2] | 0;
      i8 = (HEAP32[i1 + 20 >> 2] | 0) >>> 2;
      i12 = i1 + 4 | 0;
      L1755 : do {
       if ((HEAP32[i12 >> 2] | 0) != 0) {
        i73 = i1 + 28 | 0;
        i68 = i1 | 0;
        i46 = 1;
        i74 = HEAP32[i1 + 12 >> 2] | 0;
        i54 = HEAP32[i1 + 8 >> 2] | 0;
        while (1) {
         i67 = HEAP32[i68 >> 2] | 0;
         do {
          if ((i67 | 0) != 0) {
           i45 = 0;
           i50 = HEAP32[i73 >> 2] | 0;
           i66 = i54;
           while (1) {
            HEAPF32[i50 >> 2] = +(HEAPU8[i66 + 2 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i50 + 4 >> 2] = +(HEAPU8[i66 + 1 | 0] | 0 | 0) * +.003921568859368563;
            HEAPF32[i50 + 8 >> 2] = +(HEAPU8[i66] | 0 | 0) * +.003921568859368563;
            HEAPF32[i50 + 12 >> 2] = +(HEAPU8[i66 + 3 | 0] | 0 | 0) * +.003921568859368563;
            i53 = i45 + 1 | 0;
            if (i53 >>> 0 < i67 >>> 0) {
             i45 = i53;
             i50 = i50 + 16 | 0;
             i66 = i66 + 4 | 0;
            } else {
             break;
            }
           }
           i66 = HEAP32[i68 >> 2] | 0;
           if ((i66 | 0) == 0) {
            break;
           }
           i50 = 0;
           i45 = i74;
           i53 = HEAP32[i73 >> 2] | 0;
           while (1) {
            i7 = i53 + 12 | 0;
            d72 = +HEAPF32[i7 >> 2];
            if (d72 != +0) {
             d75 = +1 / d72;
            } else {
             d75 = +1;
            }
            HEAPF32[i45 >> 2] = d75 * +HEAPF32[i53 >> 2];
            HEAPF32[i45 + 4 >> 2] = d75 * +HEAPF32[i53 + 4 >> 2];
            HEAPF32[i45 + 8 >> 2] = d75 * +HEAPF32[i53 + 8 >> 2];
            HEAPF32[i45 + 12 >> 2] = +HEAPF32[i7 >> 2];
            i7 = i50 + 1 | 0;
            if (i7 >>> 0 < i66 >>> 0) {
             i50 = i7;
             i45 = i45 + 16 | 0;
             i53 = i53 + 16 | 0;
            } else {
             break;
            }
           }
          }
         } while (0);
         if (i46 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
          break L1755;
         }
         i46 = i46 + 1 | 0;
         i74 = i74 + (i8 << 2) | 0;
         i54 = i54 + i48 | 0;
        }
       }
      } while (0);
      HEAP8[i1 + 24 | 0] = 1;
      return;
     } else {
      return;
     }
     break;
    }
   default:
    {
     return;
    }
   }
   break;
  }
 case 18:
  {
   if (!((i3 | 0) == 18 & (i4 | 0) == 1)) {
    return;
   }
   i48 = (HEAP32[i1 + 16 >> 2] | 0) >>> 1;
   i8 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
   i12 = i1 + 4 | 0;
   L1780 : do {
    if ((HEAP32[i12 >> 2] | 0) != 0) {
     i54 = i1 + 28 | 0;
     i74 = i1 | 0;
     i46 = 1;
     i73 = HEAP32[i1 + 12 >> 2] | 0;
     i68 = HEAP32[i1 + 8 >> 2] | 0;
     while (1) {
      i67 = HEAP32[i74 >> 2] | 0;
      do {
       if ((i67 | 0) != 0) {
        i53 = 0;
        i45 = HEAP32[i54 >> 2] | 0;
        i50 = i68;
        while (1) {
         i66 = HEAP16[i50 >> 1] | 0;
         i7 = (i66 & 65535) >>> 6;
         i31 = (i66 & 65535) >>> 1;
         i49 = (i66 & 65535) >>> 11 & 65535;
         HEAP8[i45] = i49 << 3 | i49 & 7;
         HEAP8[i45 + 1 | 0] = i7 << 3 & 255 | i7 & 7;
         HEAP8[i45 + 2 | 0] = i31 << 3 & 255 | i31 & 7;
         HEAP8[i45 + 3 | 0] = i66 << 15 << 16 >> 16 >> 15;
         i66 = i53 + 1 | 0;
         if (i66 >>> 0 < i67 >>> 0) {
          i53 = i66;
          i45 = i45 + 4 | 0;
          i50 = i50 + 2 | 0;
         } else {
          break;
         }
        }
        i50 = HEAP32[i74 >> 2] | 0;
        if ((i50 | 0) == 0) {
         break;
        }
        i45 = 0;
        i53 = i73;
        i66 = HEAP32[i54 >> 2] | 0;
        while (1) {
         i31 = HEAPU8[i66 + 3 | 0] | 0;
         d75 = +(i31 | 0) / +255;
         HEAP16[i53 >> 1] = (~~(d75 * +((HEAPU8[i66] | 0) >>> 0)) & 255) << 8 & 63488 | i31 >>> 7 | (~~(d75 * +((HEAPU8[i66 + 1 | 0] | 0) >>> 0)) & 255) << 3 & 1984 | (~~(d75 * +((HEAPU8[i66 + 2 | 0] | 0) >>> 0)) & 255) >>> 2 & 62;
         i31 = i45 + 1 | 0;
         if (i31 >>> 0 < i50 >>> 0) {
          i45 = i31;
          i53 = i53 + 2 | 0;
          i66 = i66 + 4 | 0;
         } else {
          break;
         }
        }
       }
      } while (0);
      if (i46 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
       break L1780;
      }
      i46 = i46 + 1 | 0;
      i73 = i73 + (i8 << 1) | 0;
      i68 = i68 + (i48 << 1) | 0;
     }
    }
   } while (0);
   HEAP8[i1 + 24 | 0] = 1;
   return;
  }
 case 19:
  {
   if (!((i3 | 0) == 19 & (i4 | 0) == 1)) {
    return;
   }
   i48 = (HEAP32[i1 + 16 >> 2] | 0) >>> 1;
   i8 = (HEAP32[i1 + 20 >> 2] | 0) >>> 1;
   i12 = i1 + 4 | 0;
   L1800 : do {
    if ((HEAP32[i12 >> 2] | 0) != 0) {
     i68 = i1 + 28 | 0;
     i73 = i1 | 0;
     i46 = 1;
     i54 = HEAP32[i1 + 12 >> 2] | 0;
     i74 = HEAP32[i1 + 8 >> 2] | 0;
     while (1) {
      i67 = HEAP32[i73 >> 2] | 0;
      do {
       if ((i67 | 0) != 0) {
        i66 = 0;
        i53 = HEAP32[i68 >> 2] | 0;
        i45 = i74;
        while (1) {
         i50 = HEAP16[i45 >> 1] | 0;
         i31 = i50 & 255;
         i7 = (i50 & 65535) >>> 8;
         i49 = (i50 & 65535) >>> 4;
         i9 = (i50 & 65535) >>> 12 & 65535;
         HEAP8[i53] = i9 << 4 | i9;
         HEAP8[i53 + 1 | 0] = i7 << 4 & 255 | i7 & 15;
         HEAP8[i53 + 2 | 0] = i49 << 4 & 255 | i49 & 15;
         HEAP8[i53 + 3 | 0] = i31 << 4 | i31 & 15;
         i31 = i66 + 1 | 0;
         if (i31 >>> 0 < i67 >>> 0) {
          i66 = i31;
          i53 = i53 + 4 | 0;
          i45 = i45 + 2 | 0;
         } else {
          break;
         }
        }
        i45 = HEAP32[i73 >> 2] | 0;
        if ((i45 | 0) == 0) {
         break;
        }
        i53 = 0;
        i66 = i54;
        i31 = HEAP32[i68 >> 2] | 0;
        while (1) {
         i49 = HEAPU8[i31 + 3 | 0] | 0;
         d75 = +(i49 | 0) / +255;
         HEAP16[i66 >> 1] = (~~(d75 * +((HEAPU8[i31] | 0) >>> 0)) & 255) << 8 & 61440 | i49 >>> 4 | (~~(d75 * +((HEAPU8[i31 + 1 | 0] | 0) >>> 0)) & 255) << 4 & 3840 | ~~(d75 * +((HEAPU8[i31 + 2 | 0] | 0) >>> 0)) & 240;
         i49 = i53 + 1 | 0;
         if (i49 >>> 0 < i45 >>> 0) {
          i53 = i49;
          i66 = i66 + 2 | 0;
          i31 = i31 + 4 | 0;
         } else {
          break;
         }
        }
       }
      } while (0);
      if (i46 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
       break L1800;
      }
      i46 = i46 + 1 | 0;
      i54 = i54 + (i8 << 1) | 0;
      i74 = i74 + (i48 << 1) | 0;
     }
    }
   } while (0);
   HEAP8[i1 + 24 | 0] = 1;
   return;
  }
 case 4:
  {
   if (!((i3 | 0) == 4 & (i4 | 0) == 1)) {
    return;
   }
   i4 = (HEAP32[i1 + 16 >> 2] | 0) >>> 2;
   i3 = (HEAP32[i1 + 20 >> 2] | 0) >>> 2;
   i48 = i1 + 4 | 0;
   i8 = HEAP32[i48 >> 2] | 0;
   L1820 : do {
    if ((i8 | 0) != 0) {
     i12 = i1 | 0;
     i74 = 1;
     i54 = HEAP32[i1 + 12 >> 2] | 0;
     i46 = HEAP32[i1 + 8 >> 2] | 0;
     i68 = i8;
     while (1) {
      i73 = HEAP32[i12 >> 2] | 0;
      if ((i73 | 0) == 0) {
       i76 = i68;
      } else {
       i67 = 0;
       i31 = i54;
       i66 = i46;
       while (1) {
        i53 = i66 + 12 | 0;
        d75 = +HEAPF32[i53 >> 2];
        HEAPF32[i31 >> 2] = d75 * +HEAPF32[i66 >> 2];
        HEAPF32[i31 + 4 >> 2] = d75 * +HEAPF32[i66 + 4 >> 2];
        HEAPF32[i31 + 8 >> 2] = d75 * +HEAPF32[i66 + 8 >> 2];
        HEAPF32[i31 + 12 >> 2] = +HEAPF32[i53 >> 2];
        i53 = i67 + 1 | 0;
        if (i53 >>> 0 < i73 >>> 0) {
         i67 = i53;
         i31 = i31 + 16 | 0;
         i66 = i66 + 16 | 0;
        } else {
         break;
        }
       }
       i76 = HEAP32[i48 >> 2] | 0;
      }
      if (i74 >>> 0 >= i76 >>> 0) {
       break L1820;
      }
      i74 = i74 + 1 | 0;
      i54 = i54 + (i3 << 2) | 0;
      i46 = i46 + (i4 << 2) | 0;
      i68 = i76;
     }
    }
   } while (0);
   HEAP8[i1 + 24 | 0] = 1;
   return;
  }
 default:
  {
   return;
  }
 }
}
function __ZN7WebCore17GraphicsContext3D10packPixelsEPKhNS0_10DataFormatEjjjjjNS0_7AlphaOpEPvb(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
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
 var i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i12 = i11 | 0;
 switch (i2 | 0) {
 case 21:
 case 34:
  {
   i13 = 1;
   break;
  }
 case 8:
  {
   i13 = 6;
   break;
  }
 case 0:
 case 14:
 case 17:
 case 11:
 case 25:
 case 38:
 case 29:
  {
   i13 = 4;
   break;
  }
 case 4:
  {
   i13 = 16;
   break;
  }
 case 26:
 case 31:
 case 18:
 case 19:
 case 20:
 case 37:
 case 24:
  {
   i13 = 2;
   break;
  }
 case 30:
 case 3:
  {
   i13 = 8;
   break;
  }
 case 9:
  {
   i13 = 12;
   break;
  }
 case 5:
 case 10:
  {
   i13 = 3;
   break;
  }
 default:
  {
   i13 = 0;
  }
 }
 i14 = Math_imul(i13, i3) | 0;
 do {
  if ((i5 | 0) == 0) {
   i15 = i14;
  } else {
   i13 = (i14 >>> 0) % (i5 >>> 0) & -1;
   if ((i13 | 0) == 0) {
    i15 = i14;
    break;
   }
   i15 = i14 + i5 - i13 | 0;
  }
 } while (0);
 L15 : do {
  if ((i7 | 0) == 5121) {
   if ((i6 | 0) == 6409) {
    i16 = 21;
   } else if ((i6 | 0) == 6410) {
    i17 = 2;
    i18 = 26;
    break;
   } else if ((i6 | 0) == 6407) {
    i17 = 3;
    i18 = 5;
    break;
   } else if ((i6 | 0) == 6406) {
    i16 = 34;
   } else {
    i19 = 0;
    i20 = 29;
    break;
   }
   i17 = 1;
   i18 = i16;
  } else if ((i7 | 0) == 32820) {
   i17 = 2;
   i18 = 18;
  } else if ((i7 | 0) == 33635) {
   i17 = 2;
   i18 = 20;
  } else if ((i7 | 0) == 32819) {
   i17 = 2;
   i18 = 19;
  } else if ((i7 | 0) == 36193) {
   switch (i6 | 0) {
   case 6407:
    {
     i17 = 6;
     i18 = 8;
     break L15;
     break;
    }
   case 6408:
    {
     i17 = 8;
     i18 = 3;
     break L15;
     break;
    }
   case 6406:
    {
     i17 = 2;
     i18 = 37;
     break L15;
     break;
    }
   case 6409:
    {
     i17 = 2;
     i18 = 24;
     break L15;
     break;
    }
   case 6410:
    {
     i19 = 29;
     i20 = 29;
     break L15;
     break;
    }
   default:
    {
     i19 = 0;
     i20 = 29;
     break L15;
    }
   }
  } else if ((i7 | 0) == 5126) {
   switch (i6 | 0) {
   case 6408:
    {
     i17 = 16;
     i18 = 4;
     break L15;
     break;
    }
   case 6407:
    {
     i17 = 12;
     i18 = 9;
     break L15;
     break;
    }
   case 6406:
    {
     i19 = 38;
     i20 = 29;
     break L15;
     break;
    }
   case 6409:
    {
     i19 = 25;
     i20 = 29;
     break L15;
     break;
    }
   case 6410:
    {
     i17 = 8;
     i18 = 30;
     break L15;
     break;
    }
   default:
    {
     i19 = 0;
     i20 = 29;
     break L15;
    }
   }
  } else {
   i19 = 0;
   i20 = 29;
  }
 } while (0);
 if ((i20 | 0) == 29) {
  i17 = 4;
  i18 = i19;
 }
 i19 = Math_imul(i17, i3) | 0;
 if (i10) {
  i21 = -i19 | 0;
  i22 = i9 + (Math_imul(i19, i4 - 1 | 0) | 0) | 0;
 } else {
  i21 = i19;
  i22 = i9;
 }
 L41 : do {
  switch (i2 | 0) {
  case 38:
  case 37:
  case 34:
  case 31:
  case 30:
  case 29:
  case 26:
  case 19:
  case 18:
  case 17:
  case 14:
  case 11:
  case 4:
  case 3:
  case 0:
   {
    switch (i2 | 0) {
    case 31:
    case 30:
    case 29:
    case 26:
    case 25:
    case 24:
    case 21:
    case 20:
    case 19:
    case 18:
    case 17:
    case 14:
    case 11:
    case 10:
    case 9:
    case 8:
    case 5:
    case 4:
    case 3:
    case 0:
     {
      break;
     }
    default:
     {
      i20 = 36;
      break L41;
     }
    }
    switch (i18 | 0) {
    case 31:
    case 30:
    case 29:
    case 26:
    case 25:
    case 24:
    case 21:
    case 20:
    case 19:
    case 18:
    case 17:
    case 14:
    case 11:
    case 10:
    case 9:
    case 8:
    case 5:
    case 4:
    case 3:
    case 0:
     {
      i23 = i8;
      break;
     }
    default:
     {
      i20 = 36;
     }
    }
    break;
   }
  default:
   {
    i20 = 36;
   }
  }
 } while (0);
 if ((i20 | 0) == 36) {
  i23 = 0;
 }
 if ((i18 | 0) == (i2 | 0) & (i23 | 0) == 0) {
  i20 = Math_imul(i15, i4) | 0;
  i8 = i1 + i20 | 0;
  i9 = (i21 | 0) > 0 ? i21 : -i21 | 0;
  if ((i20 | 0) > 0) {
   i24 = i1;
   i25 = i22;
  } else {
   i26 = 1;
   STACKTOP = i11;
   return i26 | 0;
  }
  while (1) {
   _memcpy(i25 | 0, i24 | 0, i9) | 0;
   i20 = i24 + i15 | 0;
   if (i20 >>> 0 < i8 >>> 0) {
    i24 = i20;
    i25 = i25 + i21 | 0;
   } else {
    i26 = 1;
    break;
   }
  }
  STACKTOP = i11;
  return i26 | 0;
 } else {
  HEAP32[i12 >> 2] = i3;
  HEAP32[i12 + 4 >> 2] = i4;
  HEAP32[i12 + 8 >> 2] = i1;
  HEAP32[i12 + 12 >> 2] = i22;
  HEAP32[i12 + 16 >> 2] = i15;
  HEAP32[i12 + 20 >> 2] = i21;
  i21 = i12 + 24 | 0;
  HEAP8[i21] = 0;
  i15 = i12 + 28 | 0;
  i22 = i3 << 4;
  i3 = __Znaj(i22) | 0;
  _memset(i3 | 0, 0, i22 | 0) | 0;
  HEAP32[i15 >> 2] = i3;
  __ZN7WebCore12_GLOBAL__N_115FormatConverter7convertENS_17GraphicsContext3D10DataFormatES3_NS2_7AlphaOpE(i12, i2, i18, i23);
  i23 = (HEAP8[i21] & 1) != 0;
  i21 = HEAP32[i15 >> 2] | 0;
  HEAP32[i15 >> 2] = 0;
  if ((i21 | 0) == 0) {
   i26 = i23;
   STACKTOP = i11;
   return i26 | 0;
  }
  __ZdaPv(i21);
  i26 = i23;
  STACKTOP = i11;
  return i26 | 0;
 }
 return 0;
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
function __ZN7WebCore17GraphicsContext3D18extractTextureDataEjjjjjbbPKvRN3WTF6VectorIhLj0ENS3_15CrashOnOverflowEEE(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 L1 : do {
  if ((i4 | 0) == 33635) {
   i10 = 20;
   i11 = 11;
  } else if ((i4 | 0) == 32820) {
   i10 = 18;
   i11 = 11;
  } else if ((i4 | 0) == 5121) {
   if ((i3 | 0) == 6406) {
    i12 = 1;
    i13 = 1;
    i14 = 34;
    break;
   } else if ((i3 | 0) == 6410) {
    i15 = 26;
    i11 = 12;
    break;
   } else if ((i3 | 0) == 6407) {
    i16 = 5;
    i11 = 13;
    break;
   } else if ((i3 | 0) != 6409) {
    i10 = 0;
    i11 = 11;
    break;
   }
   i12 = 1;
   i13 = 1;
   i14 = 21;
  } else if ((i4 | 0) == 32819) {
   i10 = 19;
   i11 = 11;
  } else if ((i4 | 0) == 5126) {
   switch (i3 | 0) {
   case 6408:
    {
     i17 = 4;
     i11 = 14;
     break L1;
     break;
    }
   case 6406:
    {
     i18 = 38;
     i19 = 1;
     i11 = 19;
     break L1;
     break;
    }
   case 6410:
    {
     i15 = 30;
     i11 = 12;
     break L1;
     break;
    }
   case 6407:
    {
     i16 = 9;
     i11 = 13;
     break L1;
     break;
    }
   case 6409:
    {
     break;
    }
   default:
    {
     i10 = 0;
     i11 = 11;
     break L1;
    }
   }
   i18 = 25;
   i19 = 1;
   i11 = 19;
  } else if ((i4 | 0) == 36193) {
   switch (i3 | 0) {
   case 6408:
    {
     i17 = 3;
     i11 = 14;
     break L1;
     break;
    }
   case 6406:
    {
     i20 = 37;
     i21 = 1;
     i11 = 20;
     break L1;
     break;
    }
   case 6410:
    {
     i15 = 29;
     i11 = 12;
     break L1;
     break;
    }
   case 6407:
    {
     i16 = 8;
     i11 = 13;
     break L1;
     break;
    }
   case 6409:
    {
     break;
    }
   default:
    {
     i10 = 0;
     i11 = 11;
     break L1;
    }
   }
   i20 = 24;
   i21 = 1;
   i11 = 20;
  } else {
   i10 = 0;
   i11 = 11;
  }
 } while (0);
 do {
  if ((i11 | 0) == 11) {
   if ((i3 | 0) == 6408 | (i3 | 0) == 32993) {
    i17 = i10;
    i11 = 14;
    break;
   } else if ((i3 | 0) == 6406 | (i3 | 0) == 6409 | (i3 | 0) == 6402 | (i3 | 0) == 34041) {
    i22 = 1;
    i23 = i10;
    i11 = 15;
    break;
   } else if ((i3 | 0) == 6410) {
    i15 = i10;
    i11 = 12;
    break;
   } else if ((i3 | 0) == 6407) {
    i16 = i10;
    i11 = 13;
    break;
   } else {
    i24 = 0;
   }
   return i24 | 0;
  }
 } while (0);
 if ((i11 | 0) == 14) {
  i22 = 4;
  i23 = i17;
  i11 = 15;
 } else if ((i11 | 0) == 12) {
  i22 = 2;
  i23 = i15;
  i11 = 15;
 } else if ((i11 | 0) == 13) {
  i22 = 3;
  i23 = i16;
  i11 = 15;
 }
 do {
  if ((i11 | 0) == 15) {
   if ((i4 | 0) == 5126) {
    i18 = i23;
    i19 = i22;
    i11 = 19;
    break;
   } else if ((i4 | 0) == 36193) {
    i20 = i23;
    i21 = i22;
    i11 = 20;
    break;
   } else if ((i4 | 0) == 5121) {
    i12 = 1;
    i13 = i22;
    i14 = i23;
    break;
   } else if ((i4 | 0) == 5123) {
    i12 = 2;
    i13 = i22;
    i14 = i23;
    break;
   } else if ((i4 | 0) == 33635 | (i4 | 0) == 32819 | (i4 | 0) == 32820) {
    i12 = 2;
    i13 = 1;
    i14 = i23;
    break;
   } else if ((i4 | 0) == 34042 | (i4 | 0) == 5125) {
    i12 = 4;
    i13 = i22;
    i14 = i23;
    break;
   } else {
    i24 = 0;
    return i24 | 0;
   }
  }
 } while (0);
 if ((i11 | 0) == 19) {
  i12 = 4;
  i13 = i19;
  i14 = i18;
 } else if ((i11 | 0) == 20) {
  i12 = 2;
  i13 = i21;
  i14 = i20;
 }
 i20 = Math_imul(Math_imul(Math_imul(i2, i1) | 0, i13) | 0, i12) | 0;
 i12 = i9 + 8 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 do {
  if (i13 >>> 0 < i20 >>> 0) {
   i21 = i9 + 4 | 0;
   i11 = HEAP32[i21 >> 2] | 0;
   if (i11 >>> 0 >= i20 >>> 0) {
    break;
   }
   i18 = i11 + 1 + (i11 >>> 2) | 0;
   i19 = i18 >>> 0 > 16 >>> 0 ? i18 : 16;
   i18 = i19 >>> 0 > i20 >>> 0 ? i19 : i20;
   if (i11 >>> 0 >= i18 >>> 0) {
    break;
   }
   i11 = i9 | 0;
   i19 = HEAP32[i11 >> 2] | 0;
   i23 = __ZN3WTF18fastMallocGoodSizeEj(i18) | 0;
   HEAP32[i21 >> 2] = i23;
   i18 = __ZN3WTF10fastMallocEj(i23) | 0;
   HEAP32[i11 >> 2] = i18;
   _memcpy(i18 | 0, i19 | 0, i13) | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   if ((HEAP32[i11 >> 2] | 0) == (i19 | 0)) {
    HEAP32[i11 >> 2] = 0;
    HEAP32[i21 >> 2] = 0;
   }
   __ZN3WTF8fastFreeEPv(i19);
  }
 } while (0);
 HEAP32[i12 >> 2] = i20;
 i24 = __ZN7WebCore17GraphicsContext3D10packPixelsEPKhNS0_10DataFormatEjjjjjNS0_7AlphaOpEPvb(i8, i14, i1, i2, i5, i3, i4, i7 & 1, HEAP32[i9 >> 2] | 0, i6) | 0;
 return i24 | 0;
}
function __ZN7WebCore17GraphicsContext3D13packImageDataEPNS_5ImageEPKvjjbNS0_7AlphaOpENS0_10DataFormatEjjjRN3WTF6VectorIhLj0ENS7_15CrashOnOverflowEEE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
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
 var i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 if ((i2 | 0) == 0) {
  i12 = 0;
  return i12 | 0;
 }
 if ((i9 | i8 | 0) < 0) {
  i12 = 0;
  return i12 | 0;
 }
 if ((i3 | 0) == 6410) {
  i13 = 2;
 } else if ((i3 | 0) == 6407) {
  i13 = 3;
 } else if ((i3 | 0) == 6408 | (i3 | 0) == 32993) {
  i13 = 4;
 } else if ((i3 | 0) == 6406 | (i3 | 0) == 6409 | (i3 | 0) == 6402 | (i3 | 0) == 34041) {
  i13 = 1;
 } else {
  i12 = 0;
  return i12 | 0;
 }
 if ((i4 | 0) == 5123) {
  i14 = 2;
  i15 = i13;
 } else if ((i4 | 0) == 33635 | (i4 | 0) == 32819 | (i4 | 0) == 32820) {
  i14 = 2;
  i15 = 1;
 } else if ((i4 | 0) == 34042 | (i4 | 0) == 5125) {
  i14 = 4;
  i15 = i13;
 } else if ((i4 | 0) == 5126) {
  i14 = 4;
  i15 = i13;
 } else if ((i4 | 0) == 36193) {
  i14 = 2;
  i15 = i13;
 } else if ((i4 | 0) == 5121) {
  i14 = 1;
  i15 = i13;
 } else {
  i12 = 0;
  return i12 | 0;
 }
 do {
  if ((i8 | 0) == 0 | (i9 | 0) == 0) {
   i16 = 0;
  } else {
   i13 = Math_imul(i14, i15) | 0;
   i17 = ___muldi3(i13, 0, i8, (i8 | 0) < 0 | 0 ? -1 : 0) | 0;
   i13 = tempRet0;
   i18 = 0;
   if (i13 >>> 0 > i18 >>> 0 | i13 >>> 0 == i18 >>> 0 & i17 >>> 0 > -1 >>> 0) {
    i12 = 0;
    return i12 | 0;
   }
   i18 = i17;
   i19 = i9 - 1 | 0;
   i20 = ___muldi3(i17 & -1, i13 & 0, i19, (i19 | 0) < 0 | 0 ? -1 : 0) | 0;
   i19 = tempRet0;
   i13 = 0;
   i17 = i19 >>> 0 > i13 >>> 0 | i19 >>> 0 == i13 >>> 0 & i20 >>> 0 > -1 >>> 0;
   i13 = _llvm_uadd_with_overflow_i32((i17 ? i18 : i20) | 0, i18 | 0) | 0;
   if (tempRet0 | i17) {
    i12 = 0;
    return i12 | 0;
   } else {
    i16 = i13;
    break;
   }
  }
 } while (0);
 i15 = i11 + 8 | 0;
 i14 = HEAP32[i15 >> 2] | 0;
 do {
  if (i14 >>> 0 < i16 >>> 0) {
   i13 = i11 + 4 | 0;
   i17 = HEAP32[i13 >> 2] | 0;
   if (i17 >>> 0 >= i16 >>> 0) {
    break;
   }
   i18 = i17 + 1 + (i17 >>> 2) | 0;
   i20 = i18 >>> 0 > 16 >>> 0 ? i18 : 16;
   i18 = i20 >>> 0 > i16 >>> 0 ? i20 : i16;
   if (i17 >>> 0 >= i18 >>> 0) {
    break;
   }
   i17 = i11 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   i19 = __ZN3WTF18fastMallocGoodSizeEj(i18) | 0;
   HEAP32[i13 >> 2] = i19;
   i18 = __ZN3WTF10fastMallocEj(i19) | 0;
   HEAP32[i17 >> 2] = i18;
   _memcpy(i18 | 0, i20 | 0, i14) | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   if ((HEAP32[i17 >> 2] | 0) == (i20 | 0)) {
    HEAP32[i17 >> 2] = 0;
    HEAP32[i13 >> 2] = 0;
   }
   __ZN3WTF8fastFreeEPv(i20);
  }
 } while (0);
 HEAP32[i15 >> 2] = i16;
 if (!(__ZN7WebCore17GraphicsContext3D10packPixelsEPKhNS0_10DataFormatEjjjjjNS0_7AlphaOpEPvb(i2, i7, i8, i9, i10, i3, i4, i6, HEAP32[i11 >> 2] | 0, i5) | 0)) {
  i12 = 0;
  return i12 | 0;
 }
 i5 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i12 = 1;
  return i12 | 0;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 1](i5, i1);
 i12 = 1;
 return i12 | 0;
}
function __ZN7WebCore17GraphicsContext3D16extractImageDataEPNS_9ImageDataEjjbbRN3WTF6VectorIhLj0ENS3_15CrashOnOverflowEEE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 if ((i1 | 0) == 0) {
  i7 = 0;
  return i7 | 0;
 }
 i8 = HEAP32[i1 + 4 >> 2] | 0;
 i9 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i9 | i8 | 0) < 0) {
  i7 = 0;
  return i7 | 0;
 }
 if ((i2 | 0) == 6410) {
  i10 = 2;
 } else if ((i2 | 0) == 6408 | (i2 | 0) == 32993) {
  i10 = 4;
 } else if ((i2 | 0) == 6406 | (i2 | 0) == 6409 | (i2 | 0) == 6402 | (i2 | 0) == 34041) {
  i10 = 1;
 } else if ((i2 | 0) == 6407) {
  i10 = 3;
 } else {
  i7 = 0;
  return i7 | 0;
 }
 if ((i3 | 0) == 5126) {
  i11 = 4;
  i12 = i10;
 } else if ((i3 | 0) == 36193) {
  i11 = 2;
  i12 = i10;
 } else if ((i3 | 0) == 5121) {
  i11 = 1;
  i12 = i10;
 } else if ((i3 | 0) == 33635 | (i3 | 0) == 32819 | (i3 | 0) == 32820) {
  i11 = 2;
  i12 = 1;
 } else if ((i3 | 0) == 34042 | (i3 | 0) == 5125) {
  i11 = 4;
  i12 = i10;
 } else if ((i3 | 0) == 5123) {
  i11 = 2;
  i12 = i10;
 } else {
  i7 = 0;
  return i7 | 0;
 }
 do {
  if ((i8 | 0) == 0 | (i9 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = Math_imul(i11, i12) | 0;
   i14 = ___muldi3(i10, 0, i8, (i8 | 0) < 0 | 0 ? -1 : 0) | 0;
   i10 = tempRet0;
   i15 = 0;
   if (i10 >>> 0 > i15 >>> 0 | i10 >>> 0 == i15 >>> 0 & i14 >>> 0 > -1 >>> 0) {
    i7 = 0;
    return i7 | 0;
   }
   i15 = i14;
   i16 = i9 - 1 | 0;
   i17 = ___muldi3(i14 & -1, i10 & 0, i16, (i16 | 0) < 0 | 0 ? -1 : 0) | 0;
   i16 = tempRet0;
   i10 = 0;
   i14 = i16 >>> 0 > i10 >>> 0 | i16 >>> 0 == i10 >>> 0 & i17 >>> 0 > -1 >>> 0;
   i10 = _llvm_uadd_with_overflow_i32((i14 ? i15 : i17) | 0, i15 | 0) | 0;
   if (tempRet0 | i14) {
    i7 = 0;
    return i7 | 0;
   } else {
    i13 = i10;
    break;
   }
  }
 } while (0);
 i12 = i6 + 8 | 0;
 i11 = HEAP32[i12 >> 2] | 0;
 do {
  if (i11 >>> 0 < i13 >>> 0) {
   i10 = i6 + 4 | 0;
   i14 = HEAP32[i10 >> 2] | 0;
   if (i14 >>> 0 >= i13 >>> 0) {
    break;
   }
   i15 = i14 + 1 + (i14 >>> 2) | 0;
   i17 = i15 >>> 0 > 16 >>> 0 ? i15 : 16;
   i15 = i17 >>> 0 > i13 >>> 0 ? i17 : i13;
   if (i14 >>> 0 >= i15 >>> 0) {
    break;
   }
   i14 = i6 | 0;
   i17 = HEAP32[i14 >> 2] | 0;
   i16 = __ZN3WTF18fastMallocGoodSizeEj(i15) | 0;
   HEAP32[i10 >> 2] = i16;
   i15 = __ZN3WTF10fastMallocEj(i16) | 0;
   HEAP32[i14 >> 2] = i15;
   _memcpy(i15 | 0, i17 | 0, i11) | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   if ((HEAP32[i14 >> 2] | 0) == (i17 | 0)) {
    HEAP32[i14 >> 2] = 0;
    HEAP32[i10 >> 2] = 0;
   }
   __ZN3WTF8fastFreeEPv(i17);
  }
 } while (0);
 HEAP32[i12 >> 2] = i13;
 i13 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = HEAP32[i13 + 16 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i18 = 0;
  } else {
   if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
    i18 = 0;
    break;
   }
   i18 = HEAP32[i13 + 8 >> 2] | 0;
  }
 } while (0);
 i7 = __ZN7WebCore17GraphicsContext3D10packPixelsEPKhNS0_10DataFormatEjjjjjNS0_7AlphaOpEPvb(i18, 0, i8, i9, 0, i2, i3, i5 & 1, HEAP32[i6 >> 2] | 0, i4) | 0;
 return i7 | 0;
}
function __ZN7WebCore17GraphicsContext3D22texImage2DResourceSafeEjijiiijji(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
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
 var i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 if (!((i5 | 0) > 0 & ((__ZN7WebCore17GraphicsContext3D14isResourceSafeEv(i1) | 0) ^ 1) & (i6 | 0) > 0)) {
  i11 = __ZN7WebCore17GraphicsContext3D10texImage2DEjijiiijjPKv(i1, i2, i3, i4, i5, i6, i7, i8, i9, 0) | 0;
  return i11 | 0;
 }
 do {
  if ((i6 | i5 | 0) < 0) {
   i12 = 1281;
  } else {
   if ((i8 | 0) == 6410) {
    i13 = 2;
   } else if ((i8 | 0) == 6407) {
    i13 = 3;
   } else if ((i8 | 0) == 6408 | (i8 | 0) == 32993) {
    i13 = 4;
   } else if ((i8 | 0) == 6406 | (i8 | 0) == 6409 | (i8 | 0) == 6402 | (i8 | 0) == 34041) {
    i13 = 1;
   } else {
    i12 = 1280;
    break;
   }
   if ((i9 | 0) == 5123) {
    i14 = 2;
    i15 = i13;
   } else if ((i9 | 0) == 33635 | (i9 | 0) == 32819 | (i9 | 0) == 32820) {
    i14 = 2;
    i15 = 1;
   } else if ((i9 | 0) == 34042 | (i9 | 0) == 5125) {
    i14 = 4;
    i15 = i13;
   } else if ((i9 | 0) == 5126) {
    i14 = 4;
    i15 = i13;
   } else if ((i9 | 0) == 36193) {
    i14 = 2;
    i15 = i13;
   } else if ((i9 | 0) == 5121) {
    i14 = 1;
    i15 = i13;
   } else {
    i12 = 1280;
    break;
   }
   if ((i5 | 0) == 0 | (i6 | 0) == 0) {
    i16 = 0;
   } else {
    i17 = Math_imul(i14, i15) | 0;
    i18 = ___muldi3(i17, 0, i5, (i5 | 0) < 0 | 0 ? -1 : 0) | 0;
    i17 = tempRet0;
    i19 = 0;
    if (i17 >>> 0 > i19 >>> 0 | i17 >>> 0 == i19 >>> 0 & i18 >>> 0 > -1 >>> 0) {
     i12 = 1281;
     break;
    }
    i19 = i18;
    i18 = (i19 >>> 0) % (i10 >>> 0) & -1;
    do {
     if ((i18 | 0) == 0) {
      i20 = 0;
      i21 = i19;
     } else {
      i17 = _llvm_uadd_with_overflow_i32(i19 | 0, i10 - i18 | 0) | 0;
      if (tempRet0) {
       i20 = 1;
       i21 = i19;
       break;
      }
      i20 = 0;
      i21 = i17;
     }
    } while (0);
    i18 = i6 - 1 | 0;
    i17 = ___muldi3(i21, 0, i18, (i18 | 0) < 0 | 0 ? -1 : 0) | 0;
    i18 = tempRet0;
    i22 = 0;
    i23 = i18 >>> 0 > i22 >>> 0 | i18 >>> 0 == i22 >>> 0 & i17 >>> 0 > -1 >>> 0;
    i22 = _llvm_uadd_with_overflow_i32((i23 ? i21 : i17) | 0, i19 | 0) | 0;
    if (tempRet0) {
     i12 = 1281;
     break;
    }
    if (i23 | i20 << 24 >> 24 != 0) {
     i12 = 1281;
     break;
    }
    i16 = i22;
   }
   i22 = __Znaj(i16) | 0;
   _memset(i22 | 0, 0, i16 | 0) | 0;
   if ((i22 | 0) == 0) {
    __ZN7WebCore17GraphicsContext3D17synthesizeGLErrorEj(i1, 1281);
    i11 = 0;
    return i11 | 0;
   } else {
    _memset(i22 | 0, 0, i16 | 0) | 0;
    i23 = __ZN7WebCore17GraphicsContext3D10texImage2DEjijiiijjPKv(i1, i2, i3, i4, i5, i6, i7, i8, i9, i22) | 0;
    __ZdaPv(i22);
    i11 = i23;
    return i11 | 0;
   }
  }
 } while (0);
 __ZN7WebCore17GraphicsContext3D17synthesizeGLErrorEj(i1, i12);
 i11 = 0;
 return i11 | 0;
}
function __ZN7WebCore17GraphicsContext3D23computeImageSizeInBytesEjjiiiPjS1_(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 if ((i4 | i3 | 0) < 0) {
  i8 = 1281;
  return i8 | 0;
 }
 if ((i1 | 0) == 6410) {
  i9 = 2;
 } else if ((i1 | 0) == 6407) {
  i9 = 3;
 } else if ((i1 | 0) == 6408 | (i1 | 0) == 32993) {
  i9 = 4;
 } else if ((i1 | 0) == 6406 | (i1 | 0) == 6409 | (i1 | 0) == 6402 | (i1 | 0) == 34041) {
  i9 = 1;
 } else {
  i8 = 1280;
  return i8 | 0;
 }
 if ((i2 | 0) == 5123) {
  i10 = 2;
  i11 = i9;
 } else if ((i2 | 0) == 33635 | (i2 | 0) == 32819 | (i2 | 0) == 32820) {
  i10 = 2;
  i11 = 1;
 } else if ((i2 | 0) == 34042 | (i2 | 0) == 5125) {
  i10 = 4;
  i11 = i9;
 } else if ((i2 | 0) == 5126) {
  i10 = 4;
  i11 = i9;
 } else if ((i2 | 0) == 36193) {
  i10 = 2;
  i11 = i9;
 } else if ((i2 | 0) == 5121) {
  i10 = 1;
  i11 = i9;
 } else {
  i8 = 1280;
  return i8 | 0;
 }
 if ((i3 | 0) == 0 | (i4 | 0) == 0) {
  HEAP32[i6 >> 2] = 0;
  if ((i7 | 0) == 0) {
   i8 = 0;
   return i8 | 0;
  }
  HEAP32[i7 >> 2] = 0;
  i8 = 0;
  return i8 | 0;
 }
 i9 = Math_imul(i10, i11) | 0;
 i11 = ___muldi3(i9, 0, i3, (i3 | 0) < 0 | 0 ? -1 : 0) | 0;
 i3 = tempRet0;
 i9 = 0;
 if (i3 >>> 0 > i9 >>> 0 | i3 >>> 0 == i9 >>> 0 & i11 >>> 0 > -1 >>> 0) {
  i8 = 1281;
  return i8 | 0;
 }
 i9 = i11;
 i11 = (i9 >>> 0) % (i5 >>> 0) & -1;
 do {
  if ((i11 | 0) == 0) {
   i12 = 0;
   i13 = 0;
   i14 = i9;
  } else {
   i3 = i5 - i11 | 0;
   i10 = _llvm_uadd_with_overflow_i32(i9 | 0, i3 | 0) | 0;
   if (tempRet0) {
    i12 = i3;
    i13 = 1;
    i14 = i9;
    break;
   }
   i12 = i3;
   i13 = 0;
   i14 = i10;
  }
 } while (0);
 i11 = i4 - 1 | 0;
 i4 = ___muldi3(i14, 0, i11, (i11 | 0) < 0 | 0 ? -1 : 0) | 0;
 i11 = tempRet0;
 i5 = 0;
 i10 = i11 >>> 0 > i5 >>> 0 | i11 >>> 0 == i5 >>> 0 & i4 >>> 0 > -1 >>> 0;
 i5 = _llvm_uadd_with_overflow_i32((i10 ? i14 : i4) | 0, i9 | 0) | 0;
 if (tempRet0) {
  i8 = 1281;
  return i8 | 0;
 }
 if (i10 | i13 << 24 >> 24 != 0) {
  i8 = 1281;
  return i8 | 0;
 }
 HEAP32[i6 >> 2] = i5;
 if ((i7 | 0) == 0) {
  i8 = 0;
  return i8 | 0;
 }
 HEAP32[i7 >> 2] = i12;
 i8 = 0;
 return i8 | 0;
}
function __ZN7WebCore17GraphicsContext3D30computeFormatAndTypeParametersEjjPjS1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 if ((i1 | 0) == 6407) {
  HEAP32[i3 >> 2] = 3;
  i5 = 6;
 } else if ((i1 | 0) == 6408 | (i1 | 0) == 32993) {
  HEAP32[i3 >> 2] = 4;
  i5 = 6;
 } else if ((i1 | 0) == 6406 | (i1 | 0) == 6409 | (i1 | 0) == 6402 | (i1 | 0) == 34041) {
  HEAP32[i3 >> 2] = 1;
  i5 = 6;
 } else if ((i1 | 0) == 6410) {
  HEAP32[i3 >> 2] = 2;
  i5 = 6;
 } else {
  i6 = 0;
 }
 do {
  if ((i5 | 0) == 6) {
   if ((i2 | 0) == 34042 | (i2 | 0) == 5125) {
    HEAP32[i4 >> 2] = 4;
    i6 = 1;
    break;
   } else if ((i2 | 0) == 5126) {
    HEAP32[i4 >> 2] = 4;
    i6 = 1;
    break;
   } else if ((i2 | 0) == 36193) {
    HEAP32[i4 >> 2] = 2;
    i6 = 1;
    break;
   } else if ((i2 | 0) == 5121) {
    HEAP32[i4 >> 2] = 1;
    i6 = 1;
    break;
   } else if ((i2 | 0) == 5123) {
    HEAP32[i4 >> 2] = 2;
    i6 = 1;
    break;
   } else if ((i2 | 0) == 33635 | (i2 | 0) == 32819 | (i2 | 0) == 32820) {
    HEAP32[i3 >> 2] = 1;
    HEAP32[i4 >> 2] = 2;
    i6 = 1;
    break;
   } else {
    i6 = 0;
    break;
   }
  }
 } while (0);
 return i6 | 0;
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
function __ZN7WebCore17GraphicsContext3D22getChannelBitsByFormatEj(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((i1 | 0) == 6409) {
  i2 = 7;
 } else if ((i1 | 0) == 6410) {
  i2 = 15;
 } else if ((i1 | 0) == 6408 | (i1 | 0) == 32854 | (i1 | 0) == 32855) {
  i2 = 15;
 } else if ((i1 | 0) == 34041) {
  i2 = 48;
 } else if ((i1 | 0) == 36168) {
  i2 = 32;
 } else if ((i1 | 0) == 33189 | (i1 | 0) == 6402) {
  i2 = 16;
 } else if ((i1 | 0) == 6407 | (i1 | 0) == 36194) {
  i2 = 7;
 } else if ((i1 | 0) == 6406) {
  i2 = 8;
 } else {
  i2 = 0;
 }
 return i2 | 0;
}
function __ZN7WebCore17GraphicsContext3D28getClearBitsByAttachmentTypeEj(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 switch (i1 | 0) {
 case 36128:
  {
   i2 = 1024;
   break;
  }
 case 36064:
 case 36065:
 case 36066:
 case 36067:
 case 36068:
 case 36069:
 case 36070:
 case 36071:
 case 36072:
 case 36073:
 case 36074:
 case 36075:
 case 36076:
 case 36077:
 case 36078:
 case 36079:
  {
   i2 = 16384;
   break;
  }
 case 33306:
  {
   i2 = 1280;
   break;
  }
 case 36096:
  {
   i2 = 256;
   break;
  }
 default:
  {
   i2 = 0;
  }
 }
 return i2 | 0;
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
function __ZN7WebCore17GraphicsContext3D20getClearBitsByFormatEj(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((i1 | 0) == 33189 | (i1 | 0) == 6402) {
  i2 = 256;
 } else if ((i1 | 0) == 36168) {
  i2 = 1024;
 } else if ((i1 | 0) == 34041) {
  i2 = 1280;
 } else if ((i1 | 0) == 6406 | (i1 | 0) == 6409 | (i1 | 0) == 6410 | (i1 | 0) == 6407 | (i1 | 0) == 36194 | (i1 | 0) == 6408 | (i1 | 0) == 32854 | (i1 | 0) == 32855) {
  i2 = 16384;
 } else {
  i2 = 0;
 }
 return i2 | 0;
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
function __ZN7WebCore17GraphicsContext3D14ImageExtractorC2EPNS_5ImageENS0_18ImageHtmlDomSourceEbb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = i2;
 HEAP32[i1 + 12 >> 2] = i3;
 HEAP8[i1 + 16 | 0] = (__ZN7WebCore17GraphicsContext3D14ImageExtractor12extractImageEbb(i1, i4, i5) | 0) & 1;
 return;
}
function __ZN7WebCore17GraphicsContext3D14ImageExtractorC1EPNS_5ImageENS0_18ImageHtmlDomSourceEbb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = i2;
 HEAP32[i1 + 12 >> 2] = i3;
 HEAP8[i1 + 16 | 0] = (__ZN7WebCore17GraphicsContext3D14ImageExtractor12extractImageEbb(i1, i4, i5) | 0) & 1;
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
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
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
function ___udivdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = ___udivmoddi4(i1, i2, i3, i4, 0) | 0;
 return (tempRet0 = tempRet0, i5) | 0;
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
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore17GraphicsContext3D14ImageExtractorC2EPNS_5ImageENS0_18ImageHtmlDomSourceEbb,b0];
  var FUNCTION_TABLE_vi = [b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "cttz_i8": cttz_i8, "ctlz_i8": ctlz_i8, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore17GraphicsContext3D30computeFormatAndTypeParametersEjjPjS1_","__ZN7WebCore17GraphicsContext3D10packPixelsEPKhNS0_10DataFormatEjjjjjNS0_7AlphaOpEPvb","__ZN7WebCore12_GLOBAL__N_115FormatConverter7convertENS_17GraphicsContext3D10DataFormatES3_NS2_7AlphaOpE","__ZN7WebCore17GraphicsContext3D20getClearBitsByFormatEj","__ZN7WebCore17GraphicsContext3D22texImage2DResourceSafeEjijiiijji","__ZN7WebCore17GraphicsContext3D16extractImageDataEPNS_9ImageDataEjjbbRN3WTF6VectorIhLj0ENS3_15CrashOnOverflowEEE","__ZN7WebCore17GraphicsContext3D22getChannelBitsByFormatEj","_memset","__ZN7WebCore17GraphicsContext3D28getClearBitsByAttachmentTypeEj","_memcpy","_strlen","__ZN7WebCore17GraphicsContext3D23computeImageSizeInBytesEjjiiiPjS1_","__ZN7WebCore17GraphicsContext3D13packImageDataEPNS_5ImageEPKvjjbNS0_7AlphaOpENS0_10DataFormatEjjjRN3WTF6VectorIhLj0ENS7_15CrashOnOverflowEEE","__ZN7WebCore17GraphicsContext3D14ImageExtractorC2EPNS_5ImageENS0_18ImageHtmlDomSourceEbb","__ZN7WebCore17GraphicsContext3D18extractTextureDataEjjjjjbbPKvRN3WTF6VectorIhLj0ENS3_15CrashOnOverflowEEE","_i64Add","_i64Subtract","_bitshift64Shl","_bitshift64Lshr","_bitshift64Ashr","_llvm_ctlz_i32","_llvm_cttz_i32"]

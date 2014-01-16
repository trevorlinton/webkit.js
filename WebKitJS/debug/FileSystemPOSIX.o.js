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
H_BASE = parentModule["_malloc"](64 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 64;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([37,115,47,37,115,88,88,88,88,88,88,0,0,0,0,0,47,116,109,112,0,0,0,0,84,77,80,68,73,82,0,0,37,115,47,37,115,0,0,0,46,46,0,0,0,0,0,0,46,0,0,0,0,0,0,0,47,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
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
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_vi=env.invoke_vi;
  var _strncmp=env._strncmp;
  var _lseek=env._lseek;
  var _malloc=env._malloc;
  var _snprintf=env._snprintf;
  var _readdir=env._readdir;
  var _mknod=env._mknod;
  var _close=env._close;
  var _pread=env._pread;
  var _fflush=env._fflush;
  var _dirname=env._dirname;
  var _open=env._open;
  var _mktemp=env._mktemp;
  var _write=env._write;
  var ___buildEnvironment=env.___buildEnvironment;
  var _creat=env._creat;
  var ___setErrNo=env.___setErrNo;
  var _mkdir=env._mkdir;
  var _send=env._send;
  var _access=env._access;
  var _rmdir=env._rmdir;
  var _mkstemp=env._mkstemp;
  var _stat=env._stat;
  var _truncate=env._truncate;
  var _read=env._read;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var __reallyNegative=env.__reallyNegative;
  var __formatString=env.__formatString;
  var _free=env._free;
  var _getenv=env._getenv;
  var _closedir=env._closedir;
  var _unlink=env._unlink;
  var _recv=env._recv;
  var _pwrite=env._pwrite;
  var ___libgenSplitName=env.___libgenSplitName;
  var ___errno_location=env.___errno_location;
  var _opendir=env._opendir;
  var _readdir_r=env._readdir_r;
  var _ftruncate=env._ftruncate;
  var _strcmp=env._strcmp;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN3WTF13tryMakeStringINS_12StringAppendINS_6StringEPKcEES2_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 + 4 | 0;
 i8 = _strlen(HEAP32[i7 >> 2] | 0) | 0;
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 i10 = (i2 | 0) == 0;
 if (i10) {
  i11 = 0;
 } else {
  i11 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i12 = i3 | 0;
 i3 = HEAP32[i12 >> 2] | 0;
 i13 = (i3 | 0) == 0;
 if (i13) {
  i14 = 0;
 } else {
  i14 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i15 = _llvm_uadd_with_overflow_i32(i11 + i8 | 0, i14 | 0) | 0;
 i14 = i15;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i10) {
  i16 = 9;
 } else {
  if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
   i16 = 9;
  }
 }
 do {
  if ((i16 | 0) == 9) {
   if (!i13) {
    if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i14 | 0) == 0) {
     i2 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i2 | 0) == 0) {
      i16 = 28;
      break;
     }
     i10 = i2 | 0;
     HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
     i17 = i2;
     i18 = 0;
    } else {
     if (i14 >>> 0 > 4294967275 >>> 0) {
      i16 = 28;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i14 + 20 | 0);
     i2 = i6 | 0;
     i10 = HEAP32[i2 >> 2] | 0;
     HEAP32[i2 >> 2] = 0;
     if ((i10 | 0) == 0) {
      i16 = 28;
      break;
     }
     i2 = i10 + 20 | 0;
     HEAP32[i10 >> 2] = 2;
     HEAP32[i10 + 4 >> 2] = i14;
     HEAP32[i10 + 8 >> 2] = i2;
     HEAP32[i10 + 12 >> 2] = 0;
     HEAP32[i10 + 16 >> 2] = 32;
     i17 = i10;
     i18 = i2;
    }
   } while (0);
   if ((i16 | 0) == 28) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i2 = HEAP32[i7 >> 2] | 0;
   i10 = _strlen(i2 | 0) | 0;
   i15 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i15 | 0) == 0) {
     i19 = 0;
    } else {
     i8 = HEAP32[i15 + 4 >> 2] | 0;
     i11 = HEAP32[i15 + 8 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i19 = 0;
      break;
     } else {
      i20 = 0;
     }
     while (1) {
      HEAP8[i18 + i20 | 0] = HEAP8[i11 + i20 | 0] | 0;
      i20 = i20 + 1 | 0;
      if (i20 >>> 0 >= i8 >>> 0) {
       break;
      }
     }
     i8 = HEAP32[i9 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i19 = 0;
      break;
     }
     i19 = HEAP32[i8 + 4 >> 2] | 0;
    }
   } while (0);
   _memcpy(i18 + i19 | 0, i2 | 0, i10) | 0;
   i15 = _strlen(HEAP32[i7 >> 2] | 0) | 0;
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i21 = 0;
   } else {
    i21 = HEAP32[i8 + 4 >> 2] | 0;
   }
   i8 = i21 + i15 | 0;
   i15 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i11 = HEAP32[i15 + 4 >> 2] | 0;
     i22 = HEAP32[i15 + 8 >> 2] | 0;
     if ((i11 | 0) == 0) {
      break;
     } else {
      i23 = 0;
     }
     while (1) {
      HEAP8[i18 + (i8 + i23) | 0] = HEAP8[i22 + i23 | 0] | 0;
      i23 = i23 + 1 | 0;
      if (i23 >>> 0 >= i11 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i17;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i14 | 0) == 0) {
   i17 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i17 | 0) == 0) {
    i16 = 55;
    break;
   }
   i23 = i17 | 0;
   HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
   i24 = i17;
   i25 = 0;
  } else {
   if (i14 >>> 0 > 2147483637 >>> 0) {
    i16 = 55;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i14 << 1) + 20 | 0);
   i17 = i5 | 0;
   i23 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   if ((i23 | 0) == 0) {
    i16 = 55;
    break;
   }
   i17 = i23 + 20 | 0;
   HEAP32[i23 >> 2] = 2;
   HEAP32[i23 + 4 >> 2] = i14;
   HEAP32[i23 + 8 >> 2] = i17;
   HEAP32[i23 + 12 >> 2] = 0;
   HEAP32[i23 + 16 >> 2] = 0;
   i24 = i23;
   i25 = i17;
  }
 } while (0);
 if ((i16 | 0) == 55) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i16 = HEAP32[i7 >> 2] | 0;
 i14 = _strlen(i16 | 0) | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i26 = 0;
   i27 = 0;
  } else {
   i17 = HEAP32[i5 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i5 + 16 >> 2] & 32 | 0) == 0) {
     i23 = HEAP32[i5 + 8 >> 2] | 0;
     if ((i17 | 0) == 0) {
      break;
     } else {
      i28 = 0;
     }
     while (1) {
      HEAP16[i25 + (i28 << 1) >> 1] = HEAP16[i23 + (i28 << 1) >> 1] | 0;
      i28 = i28 + 1 | 0;
      if (i28 >>> 0 >= i17 >>> 0) {
       break;
      }
     }
    } else {
     i23 = HEAP32[i5 + 8 >> 2] | 0;
     if ((i17 | 0) == 0) {
      break;
     } else {
      i29 = 0;
     }
     while (1) {
      HEAP16[i25 + (i29 << 1) >> 1] = HEAPU8[i23 + i29 | 0] | 0;
      i29 = i29 + 1 | 0;
      if (i29 >>> 0 >= i17 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i17 = HEAP32[i9 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i26 = 0;
    i27 = 0;
    break;
   }
   i26 = HEAP32[i17 + 4 >> 2] | 0;
   i27 = i17;
  }
 } while (0);
 if ((i14 | 0) == 0) {
  i30 = i27;
 } else {
  i27 = 0;
  while (1) {
   HEAP16[i25 + (i27 + i26 << 1) >> 1] = HEAPU8[i16 + i27 | 0] | 0;
   i27 = i27 + 1 | 0;
   if (i27 >>> 0 >= i14 >>> 0) {
    break;
   }
  }
  i30 = HEAP32[i9 >> 2] | 0;
 }
 i9 = _strlen(HEAP32[i7 >> 2] | 0) | 0;
 if ((i30 | 0) == 0) {
  i31 = 0;
 } else {
  i31 = HEAP32[i30 + 4 >> 2] | 0;
 }
 i30 = i31 + i9 | 0;
 i9 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i12 = HEAP32[i9 + 4 >> 2] | 0;
   if ((HEAP32[i9 + 16 >> 2] & 32 | 0) == 0) {
    i31 = HEAP32[i9 + 8 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break;
    } else {
     i32 = 0;
    }
    while (1) {
     HEAP16[i25 + (i32 + i30 << 1) >> 1] = HEAP16[i31 + (i32 << 1) >> 1] | 0;
     i32 = i32 + 1 | 0;
     if (i32 >>> 0 >= i12 >>> 0) {
      break;
     }
    }
   } else {
    i31 = HEAP32[i9 + 8 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break;
    } else {
     i33 = 0;
    }
    while (1) {
     HEAP16[i25 + (i33 + i30 << 1) >> 1] = HEAPU8[i31 + i33 | 0] | 0;
     i33 = i33 + 1 | 0;
     if (i33 >>> 0 >= i12 >>> 0) {
      break;
     }
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i24;
 STACKTOP = i4;
 return;
}
function __ZN3WTF13tryMakeStringINS_6StringES1_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 i8 = (i2 | 0) == 0;
 if (i8) {
  i9 = 0;
 } else {
  i9 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 i11 = (i3 | 0) == 0;
 if (i11) {
  i12 = 0;
 } else {
  i12 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i13 = _llvm_uadd_with_overflow_i32(i9 | 0, i12 | 0) | 0;
 i12 = i13;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i8) {
  i14 = 9;
 } else {
  if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
   i14 = 9;
  }
 }
 do {
  if ((i14 | 0) == 9) {
   if (!i11) {
    if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i12 | 0) == 0) {
     i2 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i2 | 0) == 0) {
      i14 = 26;
      break;
     }
     i8 = i2 | 0;
     HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
     i15 = i2;
     i16 = 0;
    } else {
     if (i12 >>> 0 > 4294967275 >>> 0) {
      i14 = 26;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i12 + 20 | 0);
     i2 = i6 | 0;
     i8 = HEAP32[i2 >> 2] | 0;
     HEAP32[i2 >> 2] = 0;
     if ((i8 | 0) == 0) {
      i14 = 26;
      break;
     }
     i2 = i8 + 20 | 0;
     HEAP32[i8 >> 2] = 2;
     HEAP32[i8 + 4 >> 2] = i12;
     HEAP32[i8 + 8 >> 2] = i2;
     HEAP32[i8 + 12 >> 2] = 0;
     HEAP32[i8 + 16 >> 2] = 32;
     i15 = i8;
     i16 = i2;
    }
   } while (0);
   if ((i14 | 0) == 26) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i2 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i2 | 0) == 0) {
     i17 = 0;
    } else {
     i8 = HEAP32[i2 + 4 >> 2] | 0;
     i13 = HEAP32[i2 + 8 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i18 = i2;
     } else {
      i9 = 0;
      while (1) {
       HEAP8[i16 + i9 | 0] = HEAP8[i13 + i9 | 0] | 0;
       i9 = i9 + 1 | 0;
       if (i9 >>> 0 >= i8 >>> 0) {
        break;
       }
      }
      i8 = HEAP32[i7 >> 2] | 0;
      if ((i8 | 0) == 0) {
       i17 = 0;
       break;
      } else {
       i18 = i8;
      }
     }
     i17 = HEAP32[i18 + 4 >> 2] | 0;
    }
   } while (0);
   i2 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i8 = HEAP32[i2 + 4 >> 2] | 0;
     i9 = HEAP32[i2 + 8 >> 2] | 0;
     if ((i8 | 0) == 0) {
      break;
     } else {
      i19 = 0;
     }
     while (1) {
      HEAP8[i16 + (i19 + i17) | 0] = HEAP8[i9 + i19 | 0] | 0;
      i19 = i19 + 1 | 0;
      if (i19 >>> 0 >= i8 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i15;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i12 | 0) == 0) {
   i15 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i15 | 0) == 0) {
    i14 = 48;
    break;
   }
   i19 = i15 | 0;
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
   i20 = i15;
   i21 = 0;
  } else {
   if (i12 >>> 0 > 2147483637 >>> 0) {
    i14 = 48;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i12 << 1) + 20 | 0);
   i15 = i5 | 0;
   i19 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   if ((i19 | 0) == 0) {
    i14 = 48;
    break;
   }
   i15 = i19 + 20 | 0;
   HEAP32[i19 >> 2] = 2;
   HEAP32[i19 + 4 >> 2] = i12;
   HEAP32[i19 + 8 >> 2] = i15;
   HEAP32[i19 + 12 >> 2] = 0;
   HEAP32[i19 + 16 >> 2] = 0;
   i20 = i19;
   i21 = i15;
  }
 } while (0);
 if ((i14 | 0) == 48) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i14 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i22 = 0;
  } else {
   i12 = HEAP32[i14 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i14 + 16 >> 2] & 32 | 0) == 0) {
     i5 = HEAP32[i14 + 8 >> 2] | 0;
     if ((i12 | 0) == 0) {
      break;
     } else {
      i23 = 0;
     }
     while (1) {
      HEAP16[i21 + (i23 << 1) >> 1] = HEAP16[i5 + (i23 << 1) >> 1] | 0;
      i23 = i23 + 1 | 0;
      if (i23 >>> 0 >= i12 >>> 0) {
       break;
      }
     }
    } else {
     i5 = HEAP32[i14 + 8 >> 2] | 0;
     if ((i12 | 0) == 0) {
      break;
     } else {
      i24 = 0;
     }
     while (1) {
      HEAP16[i21 + (i24 << 1) >> 1] = HEAPU8[i5 + i24 | 0] | 0;
      i24 = i24 + 1 | 0;
      if (i24 >>> 0 >= i12 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i12 = HEAP32[i7 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i22 = 0;
    break;
   }
   i22 = HEAP32[i12 + 4 >> 2] | 0;
  }
 } while (0);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = HEAP32[i7 + 4 >> 2] | 0;
   if ((HEAP32[i7 + 16 >> 2] & 32 | 0) == 0) {
    i24 = HEAP32[i7 + 8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    } else {
     i25 = 0;
    }
    while (1) {
     HEAP16[i21 + (i25 + i22 << 1) >> 1] = HEAP16[i24 + (i25 << 1) >> 1] | 0;
     i25 = i25 + 1 | 0;
     if (i25 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
   } else {
    i24 = HEAP32[i7 + 8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    } else {
     i26 = 0;
    }
    while (1) {
     HEAP16[i21 + (i26 + i22 << 1) >> 1] = HEAPU8[i24 + i26 | 0] | 0;
     i26 = i26 + 1 | 0;
     if (i26 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i20;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore24pathByAppendingComponentERKN3WTF6StringES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i8 = 0;
  } else {
   if (!(__ZNK3WTF10StringImpl8endsWithEt(i2, 47) | 0)) {
    i9 = HEAP32[i7 >> 2] | 0;
    if ((i9 | 0) == 0) {
     i8 = 0;
     break;
    }
    i10 = i9 | 0;
    i11 = HEAP32[i10 >> 2] | 0;
    i12 = i11 + 2 | 0;
    HEAP32[i10 >> 2] = i11 + 4;
    if ((i12 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i9);
     i8 = i9;
     break;
    } else {
     HEAP32[i10 >> 2] = i12;
     i8 = i9;
     break;
    }
   }
   i9 = HEAP32[i3 >> 2] | 0;
   i12 = (i9 | 0) == 0;
   if (!i12) {
    i10 = i9 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   }
   i10 = HEAP32[i7 >> 2] | 0;
   i11 = (i10 | 0) == 0;
   if (!i11) {
    i13 = i10 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
   }
   if (!i12) {
    i13 = i9 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
   }
   i13 = i5 | 0;
   HEAP32[i13 >> 2] = i10;
   if (!i11) {
    i14 = i10 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
   }
   i14 = i5 + 4 | 0;
   HEAP32[i14 >> 2] = i9;
   do {
    if (!i12) {
     i15 = i9 | 0;
     i16 = HEAP32[i15 >> 2] | 0;
     HEAP32[i15 >> 2] = i16 + 2;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i15 >> 2] = i16;
      break;
     }
    }
   } while (0);
   do {
    if (!i11) {
     i16 = i10 | 0;
     i15 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i16 >> 2] = i15;
      break;
     }
    }
   } while (0);
   __ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev(i1, i5);
   i10 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i11 = i10 | 0;
     i15 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i11 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i10 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i14 = i10 | 0;
     i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i14 >> 2] = i15;
      break;
     }
    }
   } while (0);
   if (i12) {
    STACKTOP = i4;
    return;
   }
   i10 = i9 | 0;
   i13 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i10 >> 2] = i13;
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 i5 = HEAP32[i3 >> 2] | 0;
 i3 = (i5 | 0) == 0;
 if (!i3) {
  i7 = i5 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = (i8 | 0) == 0;
 if (!i7) {
  i2 = i8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 if (!i3) {
  i2 = i5 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i6 | 0;
 HEAP32[i2 >> 2] = i8;
 if (!i7) {
  i13 = i8 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 HEAP32[i6 + 4 >> 2] = H_BASE + 64;
 i13 = i6 + 8 | 0;
 HEAP32[i13 >> 2] = i5;
 do {
  if (!i3) {
   i10 = i5 | 0;
   i15 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i15 + 2;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i10 >> 2] = i15;
    break;
   }
  }
 } while (0);
 do {
  if (!i7) {
   i15 = i8 | 0;
   i10 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i15 >> 2] = i10;
    break;
   }
  }
 } while (0);
 __ZNK3WTF12StringAppendINS0_INS_6StringEPKcEES1_EcvS1_Ev(i1, i6);
 i6 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i13 = i6 | 0;
   i1 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i13 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i2 = i6 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i2 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i3) {
   i6 = i5 | 0;
   i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i6 >> 2] = i1;
    break;
   }
  }
 } while (0);
 if (i7) {
  STACKTOP = i4;
  return;
 }
 i7 = i8 | 0;
 i5 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i7 >> 2] = i5;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore13listDirectoryERKN3WTF6StringES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 1040 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i1 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i1 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i1 + 8 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZNK3WTF6String4utf8ENS_14ConversionModeE(i5, i2, 0);
 __ZNK3WTF6String4utf8ENS_14ConversionModeE(i6, i3, 0);
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i11 = 0;
 } else {
  i11 = i5 + 8 | 0;
 }
 i5 = _opendir(i11 | 0) | 0;
 if ((i5 | 0) != 0) {
  i11 = _readdir(i5 | 0) | 0;
  if ((i11 | 0) != 0) {
   i2 = i6 | 0;
   i12 = i7 | 0;
   i7 = i11;
   i11 = 0;
   i13 = 0;
   while (1) {
    i14 = i7 + 11 | 0;
    do {
     if ((_strcmp(i14 | 0, H_BASE + 56 | 0) | 0) == 0) {
      i15 = i11;
      i16 = i13;
     } else {
      if ((_strcmp(i14 | 0, H_BASE + 48 | 0) | 0) == 0) {
       i15 = i11;
       i16 = i13;
       break;
      }
      i17 = HEAP32[i2 >> 2] | 0;
      if ((i17 | 0) == 0) {
       i18 = 0;
      } else {
       i18 = i17 + 8 | 0;
      }
      if ((_fnmatch(i18, i14, 0) | 0) != 0) {
       i15 = i11;
       i16 = i13;
       break;
      }
      i17 = HEAP32[i3 >> 2] | 0;
      if ((i17 | 0) == 0) {
       i19 = 0;
      } else {
       i19 = i17 + 8 | 0;
      }
      i17 = _snprintf(i12 | 0, 1024, H_BASE + 40 | 0, (i20 = STACKTOP, STACKTOP = STACKTOP + 16 | 0, HEAP32[i20 >> 2] = i19, HEAP32[i20 + 8 >> 2] = i14, i20) | 0) | 0;
      STACKTOP = i20;
      if ((i17 | 0) > 1023) {
       i15 = i11;
       i16 = i13;
       break;
      }
      if ((i11 | 0) == (HEAP32[i9 >> 2] | 0)) {
       __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i11 + 1 | 0);
       i17 = HEAP32[i8 >> 2] | 0;
       i20 = HEAP32[i10 >> 2] | 0;
       __ZN3WTF6StringC1EPKc(i17 + (i20 << 2) | 0, i12);
       i21 = i20 + 1 | 0;
       HEAP32[i10 >> 2] = i21;
       i15 = i21;
       i16 = i17;
       break;
      } else {
       __ZN3WTF6StringC1EPKc(i13 + (i11 << 2) | 0, i12);
       i17 = i11 + 1 | 0;
       HEAP32[i10 >> 2] = i17;
       i15 = i17;
       i16 = i13;
       break;
      }
     }
    } while (0);
    i14 = _readdir(i5 | 0) | 0;
    if ((i14 | 0) == 0) {
     break;
    } else {
     i7 = i14;
     i11 = i15;
     i13 = i16;
    }
   }
  }
  _closedir(i5 | 0) | 0;
 }
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 | 0;
   i16 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i6 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i5 | 0;
 i16 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i16 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i5);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i3 >> 2] = i16;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore18makeAllDirectoriesERKN3WTF6StringE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 __ZN7WebCore24fileSystemRepresentationERKN3WTF6StringE(i3, i1);
 i1 = i3 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
 } else {
  i5 = i4 + 8 | 0;
 }
 L4 : do {
  if ((_access(i5 | 0, 0) | 0) == 0) {
   i6 = 1;
  } else {
   i4 = __ZN3WTF7CString11mutableDataEv(i3) | 0;
   i7 = HEAP32[i1 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i8 = 0;
   } else {
    i8 = HEAP32[i7 + 4 >> 2] | 0;
   }
   i7 = i4 + i8 | 0;
   if ((HEAP8[i7] | 0) == 47) {
    HEAP8[i7] = 0;
    i9 = i4;
   } else {
    i9 = i4;
   }
   while (1) {
    i4 = i9 + 1 | 0;
    i7 = HEAP8[i4] | 0;
    if ((i7 << 24 >> 24 | 0) == 0) {
     break;
    } else if ((i7 << 24 >> 24 | 0) != 47) {
     i9 = i4;
     continue;
    }
    HEAP8[i4] = 0;
    i7 = HEAP32[i1 >> 2] | 0;
    if ((i7 | 0) == 0) {
     i10 = 0;
    } else {
     i10 = i7 + 8 | 0;
    }
    if ((_access(i10 | 0, 0) | 0) != 0) {
     i7 = HEAP32[i1 >> 2] | 0;
     if ((i7 | 0) == 0) {
      i11 = 0;
     } else {
      i11 = i7 + 8 | 0;
     }
     if ((_mkdir(i11 | 0, 448) | 0) != 0) {
      i6 = 0;
      break L4;
     }
    }
    HEAP8[i4] = 47;
    i9 = i4;
   }
   i4 = HEAP32[i1 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i12 = 0;
   } else {
    i12 = i4 + 8 | 0;
   }
   if ((_access(i12 | 0, 0) | 0) != 0) {
    i4 = HEAP32[i1 >> 2] | 0;
    if ((i4 | 0) == 0) {
     i13 = 0;
    } else {
     i13 = i4 + 8 | 0;
    }
    if ((_mkdir(i13 | 0, 448) | 0) != 0) {
     i6 = 0;
     break;
    }
   }
   i6 = 1;
  }
 } while (0);
 i13 = HEAP32[i1 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i2;
  return i6 | 0;
 }
 i1 = i13 | 0;
 i12 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i12 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i13);
  STACKTOP = i2;
  return i6 | 0;
 } else {
  HEAP32[i1 >> 2] = i12;
  STACKTOP = i2;
  return i6 | 0;
 }
 return 0;
}
function __ZNK3WTF12StringAppendINS0_INS_6StringEPKcEES1_EcvS1_Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i5 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 HEAP32[i5 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i9 = i6 | 0;
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i2 = i8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_12StringAppendINS_6StringEPKcEES2_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, i6);
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = HEAP32[i9 >> 2] | 0;
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
 if ((i4 | 0) == 0) {
  _WTFCrash();
 } else {
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i5 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = i6 | 0;
 i8 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i2 = i8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_6StringES1_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, i6);
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = HEAP32[i9 >> 2] | 0;
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
 if ((i4 | 0) == 0) {
  _WTFCrash();
 } else {
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore15getFileMetadataERKN3WTF6StringERNS_12FileMetadataE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 __ZN7WebCore24fileSystemRepresentationERKN3WTF6StringE(i4, i1);
 i1 = i4 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 i7 = i4 + 8 | 0;
 do {
  if ((i7 | 0) == 0) {
   i8 = 0;
  } else {
   i4 = i7;
   if ((HEAP8[i4] | 0) == 0) {
    i8 = 0;
    break;
   }
   if ((_stat(i4 | 0, i5 | 0) | 0) != 0) {
    i8 = 0;
    break;
   }
   HEAPF64[i2 >> 3] = +(HEAP32[i5 + 56 >> 2] | 0);
   i4 = HEAP32[i5 + 36 >> 2] | 0;
   i9 = i2 + 8 | 0;
   HEAP32[i9 >> 2] = i4;
   HEAP32[i9 + 4 >> 2] = (i4 | 0) < 0 | 0 ? -1 : 0;
   HEAP32[i2 + 16 >> 2] = (HEAP32[i5 + 12 >> 2] & 61440 | 0) == 16384 ? 2 : 1;
   i8 = 1;
  }
 } while (0);
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = i8;
  STACKTOP = i3;
  return i6 | 0;
 }
 i1 = i5 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i5);
  i6 = i8;
  STACKTOP = i3;
  return i6 | 0;
 } else {
  HEAP32[i1 >> 2] = i2;
  i6 = i8;
  STACKTOP = i3;
  return i6 | 0;
 }
 return 0;
}
function __ZN7WebCore17openTemporaryFileERKN3WTF6StringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4104 | 0;
 i5 = i4 + 4096 | 0;
 i6 = _getenv(H_BASE + 32 | 0) | 0;
 i7 = (i6 | 0) == 0 ? H_BASE + 24 | 0 : i6;
 i6 = i4 | 0;
 __ZNK3WTF6String4utf8ENS_14ConversionModeE(i5, i2, 0);
 i2 = i5 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i8 = 0;
 } else {
  i8 = i5 + 8 | 0;
 }
 i5 = _snprintf(i6 | 0, 4096, H_BASE + 8 | 0, (i9 = STACKTOP, STACKTOP = STACKTOP + 16 | 0, HEAP32[i9 >> 2] = i7, HEAP32[i9 + 8 >> 2] = i8, i9) | 0) | 0;
 STACKTOP = i9;
 i9 = (i5 | 0) > 4095;
 i5 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i2 = i5 | 0;
   i8 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i2 >> 2] = i8;
    break;
   }
  }
 } while (0);
 do {
  if (!i9) {
   i5 = _mkstemp(i6 | 0) | 0;
   HEAP32[i3 >> 2] = i5;
   if ((i5 | 0) < 0) {
    break;
   }
   __ZN3WTF6String8fromUTF8EPKh(i1, i6);
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP32[i3 >> 2] = -1;
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore10fileExistsERKN3WTF6StringE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 do {
  if ((HEAP32[i1 >> 2] | 0) == 0) {
   i5 = 0;
  } else {
   __ZN7WebCore24fileSystemRepresentationERKN3WTF6StringE(i3, i1);
   i6 = i3 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i5 = 0;
    break;
   }
   i8 = i7 + 8 | 0;
   if ((i8 | 0) == 0) {
    i9 = i7;
    i10 = 0;
   } else {
    i11 = i8;
    if ((HEAP8[i11] | 0) == 0) {
     i12 = 0;
     i13 = i7;
    } else {
     i7 = (_stat(i11 | 0, i4 | 0) | 0) == 0;
     i12 = i7;
     i13 = HEAP32[i6 >> 2] | 0;
    }
    if ((i13 | 0) == 0) {
     i5 = i12;
     break;
    } else {
     i9 = i13;
     i10 = i12;
    }
   }
   i6 = i9 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i9);
    i5 = i10;
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    i5 = i10;
    break;
   }
  }
 } while (0);
 STACKTOP = i2;
 return i5 | 0;
}
function __ZN7WebCore11getFileSizeERKN3WTF6StringERx(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 __ZN7WebCore24fileSystemRepresentationERKN3WTF6StringE(i4, i1);
 i1 = i4 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 i7 = i4 + 8 | 0;
 do {
  if ((i7 | 0) == 0) {
   i8 = 0;
  } else {
   i4 = i7;
   if ((HEAP8[i4] | 0) == 0) {
    i8 = 0;
    break;
   }
   if ((_stat(i4 | 0, i5 | 0) | 0) != 0) {
    i8 = 0;
    break;
   }
   i4 = HEAP32[i5 + 36 >> 2] | 0;
   HEAP32[i2 >> 2] = i4;
   HEAP32[i2 + 4 >> 2] = (i4 | 0) < 0 | 0 ? -1 : 0;
   i8 = 1;
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = i8;
  STACKTOP = i3;
  return i6 | 0;
 }
 i1 = i2 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i2);
  i6 = i8;
  STACKTOP = i3;
  return i6 | 0;
 } else {
  HEAP32[i1 >> 2] = i5;
  i6 = i8;
  STACKTOP = i3;
  return i6 | 0;
 }
 return 0;
}
function __ZN7WebCore20deleteEmptyDirectoryERKN3WTF6StringE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 __ZN7WebCore24fileSystemRepresentationERKN3WTF6StringE(i3, i1);
 i1 = i3 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  STACKTOP = i2;
  return i4 | 0;
 }
 i5 = i3 + 8 | 0;
 do {
  if ((i5 | 0) == 0) {
   i6 = i3;
   i7 = 0;
  } else {
   i8 = i5;
   if ((HEAP8[i8] | 0) == 0) {
    i9 = 0;
    i10 = i3;
   } else {
    i11 = (_rmdir(i8 | 0) | 0) == 0;
    i9 = i11;
    i10 = HEAP32[i1 >> 2] | 0;
   }
   if ((i10 | 0) == 0) {
    i4 = i9;
   } else {
    i6 = i10;
    i7 = i9;
    break;
   }
   STACKTOP = i2;
   return i4 | 0;
  }
 } while (0);
 i9 = i6 | 0;
 i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i6);
  i4 = i7;
  STACKTOP = i2;
  return i4 | 0;
 } else {
  HEAP32[i9 >> 2] = i10;
  i4 = i7;
  STACKTOP = i2;
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore10deleteFileERKN3WTF6StringE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 __ZN7WebCore24fileSystemRepresentationERKN3WTF6StringE(i3, i1);
 i1 = i3 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  STACKTOP = i2;
  return i4 | 0;
 }
 i5 = i3 + 8 | 0;
 do {
  if ((i5 | 0) == 0) {
   i6 = i3;
   i7 = 0;
  } else {
   i8 = i5;
   if ((HEAP8[i8] | 0) == 0) {
    i9 = 0;
    i10 = i3;
   } else {
    i11 = (_unlink(i8 | 0) | 0) == 0;
    i9 = i11;
    i10 = HEAP32[i1 >> 2] | 0;
   }
   if ((i10 | 0) == 0) {
    i4 = i9;
   } else {
    i6 = i10;
    i7 = i9;
    break;
   }
   STACKTOP = i2;
   return i4 | 0;
  }
 } while (0);
 i9 = i6 | 0;
 i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i6);
  i4 = i7;
  STACKTOP = i2;
  return i4 | 0;
 } else {
  HEAP32[i9 >> 2] = i10;
  i4 = i7;
  STACKTOP = i2;
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore23getFileModificationTimeERKN3WTF6StringERl(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 __ZN7WebCore24fileSystemRepresentationERKN3WTF6StringE(i4, i1);
 i1 = i4 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 i7 = i4 + 8 | 0;
 do {
  if ((i7 | 0) == 0) {
   i8 = 0;
  } else {
   i4 = i7;
   if ((HEAP8[i4] | 0) == 0) {
    i8 = 0;
    break;
   }
   if ((_stat(i4 | 0, i5 | 0) | 0) != 0) {
    i8 = 0;
    break;
   }
   HEAP32[i2 >> 2] = HEAP32[i5 + 56 >> 2];
   i8 = 1;
  }
 } while (0);
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = i8;
  STACKTOP = i3;
  return i6 | 0;
 }
 i1 = i5 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i5);
  i6 = i8;
  STACKTOP = i3;
  return i6 | 0;
 } else {
  HEAP32[i1 >> 2] = i2;
  i6 = i8;
  STACKTOP = i3;
  return i6 | 0;
 }
 return 0;
}
function __ZN7WebCore13directoryNameERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN7WebCore24fileSystemRepresentationERKN3WTF6StringE(i4, i2);
 i2 = i4 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i6 = i5 + 8 | 0;
 do {
  if ((i5 | 0) == 0 | (i6 | 0) == 0) {
   i7 = 3;
  } else {
   if ((HEAP8[i6] | 0) == 0) {
    i7 = 3;
    break;
   }
   __ZN3WTF6StringC1EPKc(i1, _dirname(__ZN3WTF7CString11mutableDataEv(i4) | 0) | 0);
   i8 = HEAP32[i2 >> 2] | 0;
  }
 } while (0);
 if ((i7 | 0) == 3) {
  HEAP32[i1 >> 2] = 0;
  i8 = i5;
 }
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i8 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i8);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore8openFileERKN3WTF6StringENS_12FileOpenModeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN7WebCore24fileSystemRepresentationERKN3WTF6StringE(i4, i1);
 i1 = i4 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = -1;
  STACKTOP = i3;
  return i5 | 0;
 }
 i6 = _open(i4 + 8 | 0, ((i2 | 0) == 1 ? 577 : 0) | 0, (i2 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i2 >> 2] = 438, i2) | 0) | 0;
 STACKTOP = i2;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i6;
  STACKTOP = i3;
  return i5 | 0;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i2);
  i5 = i6;
  STACKTOP = i3;
  return i5 | 0;
 } else {
  HEAP32[i1 >> 2] = i4;
  i5 = i6;
  STACKTOP = i3;
  return i5 | 0;
 }
 return 0;
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
function __ZN7WebCore11writeToFileEiPKci(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 while (1) {
  i4 = _write(i1 | 0, i2 | 0, i3 | 0) | 0;
  if ((i4 | 0) > -1) {
   i5 = i4;
   i6 = 6;
   break;
  }
  if ((HEAP32[(___errno_location() | 0) >> 2] | 0) != 4) {
   i5 = -1;
   i6 = 5;
   break;
  }
 }
 if ((i6 | 0) == 5) {
  return i5 | 0;
 } else if ((i6 | 0) == 6) {
  return i5 | 0;
 }
 return 0;
}
function __ZN7WebCore12readFromFileEiPci(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 while (1) {
  i4 = _read(i1 | 0, i2 | 0, i3 | 0) | 0;
  if ((i4 | 0) > -1) {
   i5 = i4;
   i6 = 6;
   break;
  }
  if ((HEAP32[(___errno_location() | 0) >> 2] | 0) != 4) {
   i5 = -1;
   i6 = 5;
   break;
  }
 }
 if ((i6 | 0) == 5) {
  return i5 | 0;
 } else if ((i6 | 0) == 6) {
  return i5 | 0;
 }
 return 0;
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
function __ZN7WebCore8seekFileEixNS_14FileSeekOriginE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 if ((i4 | 0) == 1) {
  i5 = i4;
 } else if ((i4 | 0) == 2) {
  i5 = i4;
 } else {
  i5 = 0;
 }
 i4 = _lseek(i1 | 0, i2 | 0, i5 | 0) | 0;
 return (tempRet0 = (i4 | 0) < 0 | 0 ? -1 : 0, i4) | 0;
}
function __ZN7WebCore15pathGetFileNameERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
 } else {
  i4 = (__ZN3WTF10StringImpl11reverseFindEtj(i3, 47, -1) | 0) + 1 | 0;
 }
 __ZNK3WTF6String9substringEjj(i1, i2, i4, -1);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore9closeFileERi(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == -1) {
  return;
 }
 _close(i2 | 0) | 0;
 HEAP32[i1 >> 2] = -1;
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
function __ZN7WebCore12truncateFileEix(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return (_ftruncate(i1 | 0, i2 | 0) | 0) == 0 | 0;
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
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
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
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}
function b1() {
 abort(1);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0];
  var FUNCTION_TABLE_v = [b1,b1];
  var FUNCTION_TABLE_iii = [b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_strncmp": _strncmp, "_lseek": _lseek, "_malloc": _malloc, "_snprintf": _snprintf, "_readdir": _readdir, "_mknod": _mknod, "_close": _close, "_pread": _pread, "_fflush": _fflush, "_dirname": _dirname, "_open": _open, "_mktemp": _mktemp, "_write": _write, "___buildEnvironment": ___buildEnvironment, "_creat": _creat, "___setErrNo": ___setErrNo, "_mkdir": _mkdir, "_send": _send, "_access": _access, "_rmdir": _rmdir, "_mkstemp": _mkstemp, "_stat": _stat, "_truncate": _truncate, "_read": _read, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "__reallyNegative": __reallyNegative, "__formatString": __formatString, "_free": _free, "_getenv": _getenv, "_closedir": _closedir, "_unlink": _unlink, "_recv": _recv, "_pwrite": _pwrite, "___libgenSplitName": ___libgenSplitName, "___errno_location": ___errno_location, "_opendir": _opendir, "_readdir_r": _readdir_r, "_ftruncate": _ftruncate, "_strcmp": _strcmp, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore13listDirectoryERKN3WTF6StringES3_","_strlen","__ZN7WebCore24pathByAppendingComponentERKN3WTF6StringES3_","__ZN3WTF13tryMakeStringINS_6StringES1_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore13directoryNameERKN3WTF6StringE","__ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev","__ZNK3WTF12StringAppendINS0_INS_6StringEPKcEES1_EcvS1_Ev","__ZN7WebCore18makeAllDirectoriesERKN3WTF6StringE","__ZN7WebCore15getFileMetadataERKN3WTF6StringERNS_12FileMetadataE","_memset","__ZN7WebCore12truncateFileEix","__ZN7WebCore17openTemporaryFileERKN3WTF6StringERi","__ZN7WebCore11getFileSizeERKN3WTF6StringERx","_memcpy","__ZN7WebCore8openFileERKN3WTF6StringENS_12FileOpenModeE","__ZN7WebCore10deleteFileERKN3WTF6StringE","__ZN3WTF13tryMakeStringINS_12StringAppendINS_6StringEPKcEES2_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore20deleteEmptyDirectoryERKN3WTF6StringE","__ZN7WebCore11writeToFileEiPKci","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore23getFileModificationTimeERKN3WTF6StringERl","__ZN7WebCore15pathGetFileNameERKN3WTF6StringE","__ZN7WebCore9closeFileERi","__ZN7WebCore12readFromFileEiPci","__ZN7WebCore8seekFileEixNS_14FileSeekOriginE","__ZN7WebCore10fileExistsERKN3WTF6StringE"]

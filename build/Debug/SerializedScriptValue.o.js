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
H_BASE = parentModule["_malloc"](392 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 392;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore21SerializedScriptValueD1Ev;
var __ZN7WebCore21SerializedScriptValueC1ERKN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEE;
var __ZN7WebCore21SerializedScriptValueC1ERN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEE;
var __ZN7WebCore21SerializedScriptValueC1ERN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEERNS2_INS1_6StringELj0ES3_EE;
var __ZN7WebCore21SerializedScriptValueC1ERN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEERNS2_INS1_6StringELj0ES3_EENS1_10PassOwnPtrINS2_IN3JSC19ArrayBufferContentsELj0ES3_EEEE;
/* memory initializer */ allocate([85,110,97,98,108,101,32,116,111,32,100,101,115,101,114,105,97,108,105,122,101,32,100,97,116,97,46,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
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
function invoke_iiiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    return Module["dynCall_iiiiiii"](index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
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
  var cttz_i8=env.cttz_i8|0;
  var ctlz_i8=env.ctlz_i8|0;
  var __ZN3JSC5JSSet6s_infoE=env.__ZN3JSC5JSSet6s_infoE|0;
  var __ZN3JSC12NumberObject6s_infoE=env.__ZN3JSC12NumberObject6s_infoE|0;
  var __ZTVN10Deprecated11ScriptValueE=env.__ZTVN10Deprecated11ScriptValueE|0;
  var __ZN3JSC10JSDataView6s_infoE=env.__ZN3JSC10JSDataView6s_infoE|0;
  var __ZN3JSC13BooleanObject6s_infoE=env.__ZN3JSC13BooleanObject6s_infoE|0;
  var __ZN3JSC12DateInstance6s_infoE=env.__ZN3JSC12DateInstance6s_infoE|0;
  var __ZN7WebCore13JSMessagePort6s_infoE=env.__ZN7WebCore13JSMessagePort6s_infoE|0;
  var __ZN3JSC13JSArrayBuffer6s_infoE=env.__ZN3JSC13JSArrayBuffer6s_infoE|0;
  var __ZN3JSC13JSFinalObject6s_infoE=env.__ZN3JSC13JSFinalObject6s_infoE|0;
  var __ZN3WTF13WTFThreadData10staticDataE=env.__ZN3WTF13WTFThreadData10staticDataE|0;
  var __ZN7WebCore17JSDOMGlobalObject6s_infoE=env.__ZN7WebCore17JSDOMGlobalObject6s_infoE|0;
  var __ZN3JSC5JSMap6s_infoE=env.__ZN3JSC5JSMap6s_infoE|0;
  var __ZN3JSC12StringObject6s_infoE=env.__ZN3JSC12StringObject6s_infoE|0;
  var __ZN3JSC12RegExpObject6s_infoE=env.__ZN3JSC12RegExpObject6s_infoE|0;
  var __ZN3JSC17JSArrayBufferView6s_infoE=env.__ZN3JSC17JSArrayBufferView6s_infoE|0;
  var __ZN3JSC7JSArray6s_infoE=env.__ZN3JSC7JSArray6s_infoE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN3JSC21GenericTypedArrayViewINS_12Int16AdaptorEEE=(H_BASE+320)|0;
  var __ZTVN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEEE=(H_BASE+40)|0;
  var __ZTVN3JSC21GenericTypedArrayViewINS_13Uint32AdaptorEEE=(H_BASE+160)|0;
  var __ZTVN3JSC21GenericTypedArrayViewINS_12Uint8AdaptorEEE=(H_BASE+240)|0;
  var __ZTVN3JSC21GenericTypedArrayViewINS_13Uint16AdaptorEEE=(H_BASE+200)|0;
  var __ZTVN3JSC21GenericTypedArrayViewINS_14Float64AdaptorEEE=(H_BASE+80)|0;
  var __ZTVN3JSC21GenericTypedArrayViewINS_11Int8AdaptorEEE=(H_BASE+360)|0;
  var __ZTVN3JSC21GenericTypedArrayViewINS_12Int32AdaptorEEE=(H_BASE+280)|0;
  var __ZTVN3JSC21GenericTypedArrayViewINS_14Float32AdaptorEEE=(H_BASE+120)|0;
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
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiiiiii=env.invoke_iiiiiii;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _pthread_getspecific=env._pthread_getspecific;
  var ___setErrNo=env.___setErrNo;
  var _pthread_key_create=env._pthread_key_create;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _malloc=env._malloc;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _pthread_setspecific=env._pthread_setspecific;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore15CloneSerializer9serializeEN3JSC7JSValueE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0, i112 = 0, i113 = 0, i114 = 0, i115 = 0, i116 = 0, i117 = 0, i118 = 0, i119 = 0, i120 = 0, i121 = 0, i122 = 0, i123 = 0, i124 = 0, i125 = 0, i126 = 0, i127 = 0, i128 = 0, i129 = 0, i130 = 0, i131 = 0, i132 = 0, i133 = 0, i134 = 0, i135 = 0, i136 = 0, i137 = 0, i138 = 0, i139 = 0, i140 = 0, i141 = 0, i142 = 0, i143 = 0, i144 = 0, i145 = 0, i146 = 0, i147 = 0, i148 = 0, i149 = 0, i150 = 0, i151 = 0, i152 = 0, i153 = 0, i154 = 0, i155 = 0, i156 = 0, i157 = 0, i158 = 0, i159 = 0, i160 = 0, i161 = 0, i162 = 0, i163 = 0, i164 = 0, i165 = 0, i166 = 0, i167 = 0, i168 = 0, i169 = 0, i170 = 0, i171 = 0, i172 = 0, i173 = 0, i174 = 0, i175 = 0, i176 = 0, i177 = 0, i178 = 0, i179 = 0, i180 = 0, i181 = 0, i182 = 0, i183 = 0, i184 = 0, i185 = 0, i186 = 0, i187 = 0, i188 = 0, i189 = 0, i190 = 0, i191 = 0, i192 = 0, i193 = 0, i194 = 0, i195 = 0, i196 = 0, i197 = 0, i198 = 0, i199 = 0, i200 = 0, i201 = 0, i202 = 0, i203 = 0, i204 = 0, i205 = 0, i206 = 0, i207 = 0, i208 = 0, i209 = 0, i210 = 0, i211 = 0, i212 = 0, i213 = 0, i214 = 0, i215 = 0, i216 = 0, i217 = 0, i218 = 0, i219 = 0, i220 = 0, i221 = 0, i222 = 0, i223 = 0, i224 = 0, i225 = 0, i226 = 0, i227 = 0, i228 = 0, i229 = 0, i230 = 0, i231 = 0, i232 = 0, i233 = 0, i234 = 0, i235 = 0, i236 = 0, i237 = 0, i238 = 0, i239 = 0, i240 = 0, i241 = 0, i242 = 0, i243 = 0, i244 = 0, i245 = 0, i246 = 0, i247 = 0, i248 = 0, i249 = 0, i250 = 0, i251 = 0, i252 = 0, i253 = 0, i254 = 0, i255 = 0, i256 = 0, i257 = 0, i258 = 0, i259 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 1456 | 0;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 40 | 0;
 i9 = i3 + 48 | 0;
 i10 = i3 + 64 | 0;
 i11 = i3 + 72 | 0;
 i12 = i3 + 80 | 0;
 i13 = i3 + 88 | 0;
 i14 = i3 + 96 | 0;
 i15 = i3 + 112 | 0;
 i16 = i3 + 128 | 0;
 i17 = i3 + 136 | 0;
 i18 = i3 + 144 | 0;
 i19 = i3 + 152 | 0;
 i20 = i3 + 168 | 0;
 i21 = i3 + 184 | 0;
 i22 = i3 + 192 | 0;
 i23 = i3 + 200 | 0;
 i24 = i3 + 208 | 0;
 i25 = i3 + 224 | 0;
 i26 = i3 + 304 | 0;
 i27 = i3 + 384 | 0;
 i28 = i3 + 976 | 0;
 i29 = i3 + 1120 | 0;
 i30 = i3 + 1152 | 0;
 i31 = i3 + 1200 | 0;
 i32 = i3 + 1280 | 0;
 i33 = i3 + 1288 | 0;
 i34 = i3 + 1328 | 0;
 i35 = i3 + 1336 | 0;
 i36 = i3 + 1344 | 0;
 i37 = i3 + 1352 | 0;
 i38 = i3 + 1360 | 0;
 i39 = i3 + 1368 | 0;
 i40 = i3 + 1408 | 0;
 i41 = i3 + 1416 | 0;
 i42 = i3 + 1424 | 0;
 i43 = i3 + 1432 | 0;
 i44 = i3 + 1440 | 0;
 i45 = i3 + 1448 | 0;
 i46 = i45;
 i47 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i48 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i49 = i48;
 i50 = STACKTOP;
 STACKTOP = STACKTOP + 36 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i51 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i52 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i53 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i54 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i55 = i25 + 12 | 0;
 i56 = i25 | 0;
 HEAP32[i56 >> 2] = i55;
 i57 = i25 + 4 | 0;
 HEAP32[i57 >> 2] = 16;
 i58 = i25 + 8 | 0;
 HEAP32[i58 >> 2] = 0;
 i25 = i26 + 12 | 0;
 i59 = i26 | 0;
 HEAP32[i59 >> 2] = i25;
 i60 = i26 + 4 | 0;
 HEAP32[i60 >> 2] = 16;
 i61 = i26 + 8 | 0;
 HEAP32[i61 >> 2] = 0;
 i26 = i27 + 12 | 0;
 i62 = i27 | 0;
 HEAP32[i62 >> 2] = i26;
 i63 = i27 + 4 | 0;
 HEAP32[i63 >> 2] = 16;
 i64 = i27 + 8 | 0;
 HEAP32[i64 >> 2] = 0;
 i65 = i28 + 12 | 0;
 i66 = i28 | 0;
 HEAP32[i66 >> 2] = i65;
 i67 = i28 + 4 | 0;
 HEAP32[i67 >> 2] = 32;
 i68 = i28 + 8 | 0;
 HEAP32[i68 >> 2] = 0;
 i28 = i29 + 12 | 0;
 i69 = i29 | 0;
 HEAP32[i69 >> 2] = i28;
 i70 = i29 + 4 | 0;
 HEAP32[i70 >> 2] = 4;
 i71 = i29 + 8 | 0;
 HEAP32[i71 >> 2] = 0;
 i29 = i30 + 12 | 0;
 i72 = i30 | 0;
 HEAP32[i72 >> 2] = i29;
 i73 = i30 + 4 | 0;
 HEAP32[i73 >> 2] = 4;
 i74 = i30 + 8 | 0;
 HEAP32[i74 >> 2] = 0;
 i75 = i31 + 12 | 0;
 i76 = i31 | 0;
 HEAP32[i76 >> 2] = i75;
 i77 = i31 + 4 | 0;
 HEAP32[i77 >> 2] = 16;
 i78 = i31 + 8 | 0;
 HEAP32[i78 >> 2] = 0;
 i31 = i2 | 0;
 i2 = i1 + 108 | 0;
 i79 = i1 + 96 | 0;
 i80 = i1 + 8 | 0;
 i81 = i80 | 0;
 i82 = i1 + 12 | 0;
 i83 = i1 + 80 | 0;
 i84 = i1 + 88 | 0;
 i85 = i32;
 i86 = i21 | 0;
 i87 = i1 | 0;
 i88 = i54 | 0;
 i89 = i44;
 i90 = i45;
 i91 = i46 + 4 | 0;
 i92 = i45;
 i93 = i10 | 0;
 i94 = i11 | 0;
 i95 = i47;
 i96 = i48;
 i97 = i49 + 4 | 0;
 i98 = i48;
 i99 = i5 | 0;
 i100 = i6 | 0;
 i101 = i38;
 i102 = i39 | 0;
 i103 = i39 + 4 | 0;
 i104 = i39 + 24 | 0;
 i105 = i39 + 28 | 0;
 i106 = i39 + 32 | 0;
 i107 = i39 + 4 | 0;
 i108 = i39 + 8 | 0;
 i109 = i39 + 16 | 0;
 i110 = i16 | 0;
 i111 = i51;
 i112 = i50 | 0;
 i113 = i50 + 4 | 0;
 i114 = i50 + 24 | 0;
 i115 = i50 + 28 | 0;
 i116 = i50 + 32 | 0;
 i117 = i50 + 4 | 0;
 i118 = i50 + 8 | 0;
 i119 = i50 + 16 | 0;
 i120 = i52;
 i121 = i34 | 0;
 i122 = i36 | 0;
 i123 = i33 | 0;
 i124 = i33 + 4 | 0;
 i125 = i33 + 24 | 0;
 i126 = i33 + 28 | 0;
 i127 = i33 + 32 | 0;
 i128 = i33 + 4 | 0;
 i129 = i33 + 8 | 0;
 i130 = i33 + 16 | 0;
 i131 = i37;
 i132 = i40 | 0;
 i133 = i42 | 0;
 i134 = i43;
 i135 = 0;
 i136 = HEAP32[i31 + 4 >> 2] | 0;
 i137 = HEAP32[i31 >> 2] | 0;
 i31 = 0;
 i138 = i75;
 L1 : while (1) {
  L3 : do {
   switch (i135 | 0) {
   case 1:
    {
     i139 = i136;
     i140 = i137;
     i141 = 3;
     break;
    }
   case 2:
    {
     i142 = i136;
     i143 = i137;
     i141 = 65;
     break;
    }
   case 3:
    {
     i144 = _llvm_uadd_with_overflow_i32(HEAP32[i58 >> 2] | 0, -1 | 0) | 0;
     if (!tempRet0) {
      i141 = 162;
      break L1;
     }
     i145 = (HEAP32[i56 >> 2] | 0) + (i144 << 2) | 0;
     HEAP32[i145 >> 2] = (HEAP32[i145 >> 2] | 0) + 1;
     i142 = i136;
     i143 = i137;
     i141 = 65;
     break;
    }
   case 4:
    {
     i146 = i136;
     i147 = i137;
     i141 = 164;
     break;
    }
   case 5:
    {
     i148 = i136;
     i149 = i137;
     i141 = 237;
     break;
    }
   case 6:
    {
     i150 = i136;
     i151 = i137;
     i141 = 294;
     break;
    }
   case 7:
    {
     i152 = i136;
     i153 = i137;
     i141 = 412;
     break;
    }
   case 8:
    {
     i145 = _llvm_uadd_with_overflow_i32(HEAP32[i74 >> 2] | 0, -1 | 0) | 0;
     if (!tempRet0) {
      i141 = 489;
      break L1;
     }
     i144 = i145;
     i145 = HEAP32[i72 >> 2] | 0;
     i154 = (HEAP32[(HEAP32[i145 + (i144 << 3) >> 2] | 0) + 80 >> 2] | 0) + (HEAP32[i145 + (i144 << 3) + 4 >> 2] << 4) + 8 | 0;
     i144 = HEAP32[i154 >> 2] | 0;
     i145 = HEAP32[i154 + 4 >> 2] | 0;
     HEAP32[i52 >> 2] = 9;
     if ((i31 | 0) != (HEAP32[i77 >> 2] | 0)) {
      HEAP32[i138 + (i31 << 2) >> 2] = 9;
      HEAP32[i78 >> 2] = (HEAP32[i78 >> 2] | 0) + 1;
      i155 = i145;
      i156 = i144;
      i141 = 523;
      break L3;
     }
     i154 = i31 + 1 | 0;
     do {
      if (i138 >>> 0 > i52 >>> 0) {
       i141 = 494;
      } else {
       if ((i138 + (i31 << 2) | 0) >>> 0 <= i52 >>> 0) {
        i141 = 494;
        break;
       }
       i157 = i120 - i138 >> 2;
       i158 = i154 + (i31 >>> 2) | 0;
       i159 = i158 >>> 0 > 16 >>> 0 ? i158 : 16;
       i158 = i159 >>> 0 > i154 >>> 0 ? i159 : i154;
       do {
        if (i31 >>> 0 < i158 >>> 0) {
         if (i158 >>> 0 > 16 >>> 0) {
          if (i158 >>> 0 > 1073741823 >>> 0) {
           i141 = 508;
           break L1;
          }
          i159 = __ZN3WTF18fastMallocGoodSizeEj(i158 << 2) | 0;
          HEAP32[i77 >> 2] = i159 >>> 2;
          i160 = __ZN3WTF10fastMallocEj(i159) | 0;
          HEAP32[i76 >> 2] = i160;
          i161 = i160;
         } else {
          HEAP32[i76 >> 2] = i75;
          HEAP32[i77 >> 2] = 16;
          i161 = i75;
         }
         i160 = i138;
         _memcpy(i161 | 0, i160 | 0, i31 << 2) | 0;
         if ((i75 | 0) == (i138 | 0) | (i138 | 0) == 0) {
          break;
         }
         if ((HEAP32[i76 >> 2] | 0) == (i138 | 0)) {
          HEAP32[i76 >> 2] = 0;
          HEAP32[i77 >> 2] = 0;
         }
         __ZN3WTF8fastFreeEPv(i160);
        }
       } while (0);
       i158 = HEAP32[i76 >> 2] | 0;
       i162 = i158 + (i157 << 2) | 0;
       i163 = i158;
      }
     } while (0);
     if ((i141 | 0) == 494) {
      i141 = 0;
      i158 = i154 + (i31 >>> 2) | 0;
      i160 = i158 >>> 0 > 16 >>> 0 ? i158 : 16;
      i158 = i160 >>> 0 > i154 >>> 0 ? i160 : i154;
      do {
       if (i31 >>> 0 < i158 >>> 0) {
        if (i158 >>> 0 > 16 >>> 0) {
         if (i158 >>> 0 > 1073741823 >>> 0) {
          i141 = 497;
          break L1;
         }
         i160 = __ZN3WTF18fastMallocGoodSizeEj(i158 << 2) | 0;
         HEAP32[i77 >> 2] = i160 >>> 2;
         i159 = __ZN3WTF10fastMallocEj(i160) | 0;
         HEAP32[i76 >> 2] = i159;
         i164 = i159;
        } else {
         HEAP32[i76 >> 2] = i75;
         HEAP32[i77 >> 2] = 16;
         i164 = i75;
        }
        i159 = i138;
        _memcpy(i164 | 0, i159 | 0, i31 << 2) | 0;
        if ((i75 | 0) == (i138 | 0) | (i138 | 0) == 0) {
         break;
        }
        if ((HEAP32[i76 >> 2] | 0) == (i138 | 0)) {
         HEAP32[i76 >> 2] = 0;
         HEAP32[i77 >> 2] = 0;
        }
        __ZN3WTF8fastFreeEPv(i159);
       }
      } while (0);
      i162 = i52;
      i163 = HEAP32[i76 >> 2] | 0;
     }
     HEAP32[i163 + (HEAP32[i78 >> 2] << 2) >> 2] = HEAP32[i162 >> 2];
     HEAP32[i78 >> 2] = (HEAP32[i78 >> 2] | 0) + 1;
     i155 = i145;
     i156 = i144;
     i141 = 523;
     break;
    }
   case 9:
    {
     i158 = _llvm_uadd_with_overflow_i32(HEAP32[i74 >> 2] | 0, -1 | 0) | 0;
     if (!tempRet0) {
      i141 = 518;
      break L1;
     }
     i154 = i158;
     i158 = HEAP32[i72 >> 2] | 0;
     i159 = HEAP32[i158 + (i154 << 3) >> 2] | 0;
     i160 = HEAP32[i159 + 80 >> 2] | 0;
     i165 = i158 + (i154 << 3) + 4 | 0;
     i154 = HEAP32[i159 + 68 >> 2] | 0;
     i159 = HEAP32[i165 >> 2] | 0;
     while (1) {
      i159 = i159 + 1 | 0;
      if (i159 >>> 0 >= i154 >>> 0) {
       break;
      }
      i158 = i160 + (i159 << 4) | 0;
      if (!((HEAP32[i158 >> 2] & 0 | 0) == 0 & (HEAP32[i158 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
       break;
      }
     }
     HEAP32[i165 >> 2] = i159;
     i152 = i136;
     i153 = i137;
     i141 = 412;
     break;
    }
   case 0:
    {
     i155 = i136;
     i156 = i137;
     i141 = 523;
     break;
    }
   default:
    {
     i166 = i136;
     i167 = i137;
     i141 = 553;
    }
   }
  } while (0);
  L47 : while (1) {
   if ((i141 | 0) == 3) {
    i141 = 0;
    if ((HEAP32[i68 >> 2] | 0) >>> 0 > 4e4 >>> 0) {
     i168 = 1;
     break L1;
    }
    i160 = i140;
    i154 = i160 | 0;
    if ((HEAP8[(HEAP32[i154 >> 2] | 0) + 55 | 0] & 30) == 0) {
     i169 = 0;
    } else {
     i169 = HEAP32[(HEAP32[i160 + 4 >> 2] | 0) - 8 >> 2] | 0;
    }
    HEAP32[i32 >> 2] = i169;
    i144 = i160 | 0;
    if (__ZN7WebCore15CloneSerializer17checkForDuplicateEPN3JSC8JSObjectE(i1, i144) | 0) {
     i166 = i139;
     i167 = i140;
     i141 = 553;
     continue;
    }
    HEAP32[i22 >> 2] = i144;
    HEAP32[i23 >> 2] = HEAP32[i2 >> 2];
    __ZN3WTF9HashTableIPN3JSC8JSObjectENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_iEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i24, i79, i22, i23);
    i145 = HEAP32[i22 >> 2] | 0;
    i158 = (i145 | 0) == 0;
    i170 = HEAP32[i81 >> 2] | 0;
    i171 = (i158 ? 0 : 0) | i145;
    i145 = (i158 ? -6 : -5) | 0;
    if ((i170 | 0) < (HEAP32[i82 >> 2] | 0)) {
     i158 = (HEAP32[i83 >> 2] | 0) + (i170 << 3) | 0;
     HEAP32[i158 >> 2] = i171;
     HEAP32[i158 + 4 >> 2] = i145;
     HEAP32[i81 >> 2] = (HEAP32[i81 >> 2] | 0) + 1;
    } else {
     HEAP32[i86 >> 2] = i171;
     HEAP32[i86 + 4 >> 2] = i145;
     __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i80, i21);
    }
    if ((HEAP8[(HEAP32[i154 >> 2] | 0) + 55 | 0] & 30) == 0) {
     i172 = 0;
    } else {
     i172 = HEAP32[(HEAP32[i160 + 4 >> 2] | 0) - 8 >> 2] | 0;
    }
    __ZN7WebCore15CloneSerializer5writeENS_16SerializationTagE(i1, 1);
    __ZN7WebCoreL17writeLittleEndianIjEEvRN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEET_(HEAP32[i84 >> 2] | 0, i172);
    i160 = HEAP32[i68 >> 2] | 0;
    if ((i160 | 0) == (HEAP32[i67 >> 2] | 0)) {
     i154 = i160 + 1 | 0;
     i145 = i154 + (i160 >>> 2) | 0;
     i171 = i145 >>> 0 > 16 >>> 0 ? i145 : 16;
     i145 = i171 >>> 0 > i154 >>> 0 ? i171 : i154;
     do {
      if (i160 >>> 0 < i145 >>> 0) {
       i154 = HEAP32[i66 >> 2] | 0;
       if (i145 >>> 0 > 32 >>> 0) {
        if (i145 >>> 0 > 1073741823 >>> 0) {
         i141 = 17;
         break L1;
        }
        i171 = __ZN3WTF18fastMallocGoodSizeEj(i145 << 2) | 0;
        HEAP32[i67 >> 2] = i171 >>> 2;
        i158 = __ZN3WTF10fastMallocEj(i171) | 0;
        HEAP32[i66 >> 2] = i158;
        i173 = i158;
       } else {
        HEAP32[i66 >> 2] = i65;
        HEAP32[i67 >> 2] = 32;
        i173 = i65;
       }
       i158 = i154;
       _memcpy(i173 | 0, i158 | 0, i160 << 2) | 0;
       if ((i65 | 0) == (i154 | 0) | (i154 | 0) == 0) {
        break;
       }
       if ((HEAP32[i66 >> 2] | 0) == (i154 | 0)) {
        HEAP32[i66 >> 2] = 0;
        HEAP32[i67 >> 2] = 0;
       }
       __ZN3WTF8fastFreeEPv(i158);
      }
     } while (0);
     HEAP32[(HEAP32[i66 >> 2] | 0) + (HEAP32[i68 >> 2] << 2) >> 2] = i144;
     i174 = HEAP32[i68 >> 2] | 0;
    } else {
     HEAP32[(HEAP32[i66 >> 2] | 0) + (i160 << 2) >> 2] = i144;
     i174 = HEAP32[i68 >> 2] | 0;
    }
    HEAP32[i68 >> 2] = i174 + 1;
    i145 = HEAP32[i58 >> 2] | 0;
    if ((i145 | 0) == (HEAP32[i57 >> 2] | 0)) {
     i159 = i145 + 1 | 0;
     i165 = i159 + (i145 >>> 2) | 0;
     i158 = i165 >>> 0 > 16 >>> 0 ? i165 : 16;
     i165 = i158 >>> 0 > i159 >>> 0 ? i158 : i159;
     do {
      if (i145 >>> 0 < i165 >>> 0) {
       i159 = HEAP32[i56 >> 2] | 0;
       if (i165 >>> 0 > 16 >>> 0) {
        if (i165 >>> 0 > 1073741823 >>> 0) {
         i141 = 30;
         break L1;
        }
        i158 = __ZN3WTF18fastMallocGoodSizeEj(i165 << 2) | 0;
        HEAP32[i57 >> 2] = i158 >>> 2;
        i154 = __ZN3WTF10fastMallocEj(i158) | 0;
        HEAP32[i56 >> 2] = i154;
        i175 = i154;
       } else {
        HEAP32[i56 >> 2] = i55;
        HEAP32[i57 >> 2] = 16;
        i175 = i55;
       }
       i154 = i159;
       _memcpy(i175 | 0, i154 | 0, i145 << 2) | 0;
       if ((i55 | 0) == (i159 | 0) | (i159 | 0) == 0) {
        break;
       }
       if ((HEAP32[i56 >> 2] | 0) == (i159 | 0)) {
        HEAP32[i56 >> 2] = 0;
        HEAP32[i57 >> 2] = 0;
       }
       __ZN3WTF8fastFreeEPv(i154);
      }
     } while (0);
     HEAP32[(HEAP32[i56 >> 2] | 0) + (HEAP32[i58 >> 2] << 2) >> 2] = 0;
     i176 = HEAP32[i58 >> 2] | 0;
    } else {
     HEAP32[(HEAP32[i56 >> 2] | 0) + (i145 << 2) >> 2] = 0;
     i176 = HEAP32[i58 >> 2] | 0;
    }
    HEAP32[i58 >> 2] = i176 + 1;
    i165 = HEAP32[i61 >> 2] | 0;
    if ((i165 | 0) != (HEAP32[i60 >> 2] | 0)) {
     HEAP32[(HEAP32[i59 >> 2] | 0) + (i165 << 2) >> 2] = HEAP32[i32 >> 2];
     HEAP32[i61 >> 2] = (HEAP32[i61 >> 2] | 0) + 1;
     i142 = i139;
     i143 = i140;
     i141 = 65;
     continue;
    }
    i144 = i165 + 1 | 0;
    i160 = HEAP32[i59 >> 2] | 0;
    do {
     if (i160 >>> 0 > i32 >>> 0) {
      i141 = 42;
     } else {
      if ((i160 + (i165 << 2) | 0) >>> 0 <= i32 >>> 0) {
       i141 = 42;
       break;
      }
      i154 = i85 - i160 >> 2;
      i159 = i144 + (i165 >>> 2) | 0;
      i158 = i159 >>> 0 > 16 >>> 0 ? i159 : 16;
      i159 = i158 >>> 0 > i144 >>> 0 ? i158 : i144;
      do {
       if (i165 >>> 0 < i159 >>> 0) {
        if (i159 >>> 0 > 16 >>> 0) {
         if (i159 >>> 0 > 1073741823 >>> 0) {
          i141 = 56;
          break L1;
         }
         i158 = __ZN3WTF18fastMallocGoodSizeEj(i159 << 2) | 0;
         HEAP32[i60 >> 2] = i158 >>> 2;
         i171 = __ZN3WTF10fastMallocEj(i158) | 0;
         HEAP32[i59 >> 2] = i171;
         i177 = i171;
        } else {
         HEAP32[i59 >> 2] = i25;
         HEAP32[i60 >> 2] = 16;
         i177 = i25;
        }
        i171 = i160;
        _memcpy(i177 | 0, i171 | 0, i165 << 2) | 0;
        if ((i25 | 0) == (i160 | 0) | (i160 | 0) == 0) {
         break;
        }
        if ((HEAP32[i59 >> 2] | 0) == (i160 | 0)) {
         HEAP32[i59 >> 2] = 0;
         HEAP32[i60 >> 2] = 0;
        }
        __ZN3WTF8fastFreeEPv(i171);
       }
      } while (0);
      i159 = HEAP32[i59 >> 2] | 0;
      i178 = i159 + (i154 << 2) | 0;
      i179 = i159;
     }
    } while (0);
    if ((i141 | 0) == 42) {
     i141 = 0;
     i145 = i144 + (i165 >>> 2) | 0;
     i159 = i145 >>> 0 > 16 >>> 0 ? i145 : 16;
     i145 = i159 >>> 0 > i144 >>> 0 ? i159 : i144;
     do {
      if (i165 >>> 0 < i145 >>> 0) {
       if (i145 >>> 0 > 16 >>> 0) {
        if (i145 >>> 0 > 1073741823 >>> 0) {
         i141 = 45;
         break L1;
        }
        i159 = __ZN3WTF18fastMallocGoodSizeEj(i145 << 2) | 0;
        HEAP32[i60 >> 2] = i159 >>> 2;
        i157 = __ZN3WTF10fastMallocEj(i159) | 0;
        HEAP32[i59 >> 2] = i157;
        i180 = i157;
       } else {
        HEAP32[i59 >> 2] = i25;
        HEAP32[i60 >> 2] = 16;
        i180 = i25;
       }
       i157 = i160;
       _memcpy(i180 | 0, i157 | 0, i165 << 2) | 0;
       if ((i25 | 0) == (i160 | 0) | (i160 | 0) == 0) {
        break;
       }
       if ((HEAP32[i59 >> 2] | 0) == (i160 | 0)) {
        HEAP32[i59 >> 2] = 0;
        HEAP32[i60 >> 2] = 0;
       }
       __ZN3WTF8fastFreeEPv(i157);
      }
     } while (0);
     i178 = i32;
     i179 = HEAP32[i59 >> 2] | 0;
    }
    HEAP32[i179 + (HEAP32[i61 >> 2] << 2) >> 2] = HEAP32[i178 >> 2];
    HEAP32[i61 >> 2] = (HEAP32[i61 >> 2] | 0) + 1;
    i142 = i139;
    i143 = i140;
    i141 = 65;
    continue;
   } else if ((i141 | 0) == 65) {
    i141 = 0;
    i160 = _llvm_uadd_with_overflow_i32(HEAP32[i68 >> 2] | 0, -1 | 0) | 0;
    i165 = tempRet0;
    if (i165) {
     i181 = i143;
     i182 = i142;
     i183 = i165;
     i184 = i160;
    } else {
     i141 = 595;
     break L1;
    }
    while (1) {
     i185 = HEAP32[(HEAP32[i66 >> 2] | 0) + (i184 << 2) >> 2] | 0;
     i186 = HEAP32[i58 >> 2] | 0;
     i160 = _llvm_uadd_with_overflow_i32(i186 | 0, -1 | 0) | 0;
     if (!tempRet0) {
      i141 = 68;
      break L1;
     }
     i165 = HEAP32[(HEAP32[i56 >> 2] | 0) + (i160 << 2) >> 2] | 0;
     i187 = HEAP32[i61 >> 2] | 0;
     i160 = _llvm_uadd_with_overflow_i32(i187 | 0, -1 | 0) | 0;
     if (!tempRet0) {
      i141 = 70;
      break L1;
     }
     if ((i165 | 0) == (HEAP32[(HEAP32[i59 >> 2] | 0) + (i160 << 2) >> 2] | 0)) {
      break;
     }
     __ZN3JSC8JSObject14getDirectIndexEPNS_9ExecStateEj(i34, i185, HEAP32[i87 >> 2] | 0, i165);
     i160 = HEAP32[i121 >> 2] | 0;
     i145 = HEAP32[i121 + 4 >> 2] | 0;
     i188 = i160;
     i144 = i145;
     i189 = i144;
     if ((i189 | 0) == -6) {
      i157 = _llvm_uadd_with_overflow_i32(HEAP32[i58 >> 2] | 0, -1 | 0) | 0;
      if (!tempRet0) {
       i141 = 126;
       break L1;
      }
      i159 = (HEAP32[i56 >> 2] | 0) + (i157 << 2) | 0;
      HEAP32[i159 >> 2] = (HEAP32[i159 >> 2] | 0) + 1;
     } else {
      __ZN7WebCoreL17writeLittleEndianIjEEvRN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEET_(HEAP32[i84 >> 2] | 0, i165);
      HEAP32[i35 >> 2] = 0;
      HEAP32[i122 >> 2] = i160 & -1;
      HEAP32[i122 + 4 >> 2] = i144 | i145 & 0;
      if (!(__ZN7WebCore15CloneSerializer14dumpIfTerminalEN3JSC7JSValueERNS_23SerializationReturnCodeE(i1, i36, i35) | 0)) {
       i141 = 134;
       break;
      }
      i145 = HEAP32[i35 >> 2] | 0;
      if ((i145 | 0) != 0) {
       i168 = i145;
       break L1;
      }
      i145 = _llvm_uadd_with_overflow_i32(HEAP32[i58 >> 2] | 0, -1 | 0) | 0;
      if (!tempRet0) {
       i141 = 131;
       break L1;
      }
      i144 = (HEAP32[i56 >> 2] | 0) + (i145 << 2) | 0;
      HEAP32[i144 >> 2] = (HEAP32[i144 >> 2] | 0) + 1;
     }
     i144 = _llvm_uadd_with_overflow_i32(HEAP32[i68 >> 2] | 0, -1 | 0) | 0;
     i145 = tempRet0;
     if (i145) {
      i181 = i188;
      i182 = i189;
      i183 = i145;
      i184 = i144;
     } else {
      i141 = 596;
      break L1;
     }
    }
    if ((i141 | 0) == 134) {
     i141 = 0;
     HEAP32[i37 >> 2] = 3;
     i144 = HEAP32[i78 >> 2] | 0;
     if ((i144 | 0) != (HEAP32[i77 >> 2] | 0)) {
      HEAP32[(HEAP32[i76 >> 2] | 0) + (i144 << 2) >> 2] = 3;
      HEAP32[i78 >> 2] = (HEAP32[i78 >> 2] | 0) + 1;
      i155 = i189;
      i156 = i188;
      i141 = 523;
      continue;
     }
     i145 = i144 + 1 | 0;
     i160 = HEAP32[i76 >> 2] | 0;
     do {
      if (i160 >>> 0 > i37 >>> 0) {
       i141 = 138;
      } else {
       if ((i160 + (i144 << 2) | 0) >>> 0 <= i37 >>> 0) {
        i141 = 138;
        break;
       }
       i165 = i131 - i160 >> 2;
       i159 = i145 + (i144 >>> 2) | 0;
       i157 = i159 >>> 0 > 16 >>> 0 ? i159 : 16;
       i159 = i157 >>> 0 > i145 >>> 0 ? i157 : i145;
       do {
        if (i144 >>> 0 < i159 >>> 0) {
         if (i159 >>> 0 > 16 >>> 0) {
          if (i159 >>> 0 > 1073741823 >>> 0) {
           i141 = 152;
           break L1;
          }
          i157 = __ZN3WTF18fastMallocGoodSizeEj(i159 << 2) | 0;
          HEAP32[i77 >> 2] = i157 >>> 2;
          i171 = __ZN3WTF10fastMallocEj(i157) | 0;
          HEAP32[i76 >> 2] = i171;
          i190 = i171;
         } else {
          HEAP32[i76 >> 2] = i75;
          HEAP32[i77 >> 2] = 16;
          i190 = i75;
         }
         i171 = i160;
         _memcpy(i190 | 0, i171 | 0, i144 << 2) | 0;
         if ((i75 | 0) == (i160 | 0) | (i160 | 0) == 0) {
          break;
         }
         if ((HEAP32[i76 >> 2] | 0) == (i160 | 0)) {
          HEAP32[i76 >> 2] = 0;
          HEAP32[i77 >> 2] = 0;
         }
         __ZN3WTF8fastFreeEPv(i171);
        }
       } while (0);
       i159 = HEAP32[i76 >> 2] | 0;
       i191 = i159 + (i165 << 2) | 0;
       i192 = i159;
      }
     } while (0);
     if ((i141 | 0) == 138) {
      i141 = 0;
      i159 = i145 + (i144 >>> 2) | 0;
      i154 = i159 >>> 0 > 16 >>> 0 ? i159 : 16;
      i159 = i154 >>> 0 > i145 >>> 0 ? i154 : i145;
      do {
       if (i144 >>> 0 < i159 >>> 0) {
        if (i159 >>> 0 > 16 >>> 0) {
         if (i159 >>> 0 > 1073741823 >>> 0) {
          i141 = 141;
          break L1;
         }
         i154 = __ZN3WTF18fastMallocGoodSizeEj(i159 << 2) | 0;
         HEAP32[i77 >> 2] = i154 >>> 2;
         i171 = __ZN3WTF10fastMallocEj(i154) | 0;
         HEAP32[i76 >> 2] = i171;
         i193 = i171;
        } else {
         HEAP32[i76 >> 2] = i75;
         HEAP32[i77 >> 2] = 16;
         i193 = i75;
        }
        i171 = i160;
        _memcpy(i193 | 0, i171 | 0, i144 << 2) | 0;
        if ((i75 | 0) == (i160 | 0) | (i160 | 0) == 0) {
         break;
        }
        if ((HEAP32[i76 >> 2] | 0) == (i160 | 0)) {
         HEAP32[i76 >> 2] = 0;
         HEAP32[i77 >> 2] = 0;
        }
        __ZN3WTF8fastFreeEPv(i171);
       }
      } while (0);
      i191 = i37;
      i192 = HEAP32[i76 >> 2] | 0;
     }
     HEAP32[i192 + (HEAP32[i78 >> 2] << 2) >> 2] = HEAP32[i191 >> 2];
     HEAP32[i78 >> 2] = (HEAP32[i78 >> 2] | 0) + 1;
     i155 = i189;
     i156 = i188;
     i141 = 523;
     continue;
    }
    if ((i186 | 0) == 0) {
     i141 = 73;
     break L1;
    }
    HEAP32[i58 >> 2] = i186 - 1;
    if ((i187 | 0) == 0) {
     i141 = 75;
     break L1;
    }
    HEAP32[i61 >> 2] = i187 - 1;
    i160 = HEAP32[i87 >> 2] | 0;
    i144 = __ZN3WTF10fastMallocEj(96) | 0;
    i159 = i144;
    HEAP32[i144 >> 2] = 1;
    HEAP32[i144 + 4 >> 2] = i144 + 16;
    HEAP32[i144 + 8 >> 2] = 20;
    HEAP32[i144 + 12 >> 2] = 0;
    HEAP32[i123 >> 2] = i159;
    _memset(i124 | 0, 0, 20) | 0;
    HEAP32[i125 >> 2] = HEAP32[(HEAP32[i160 + 16 >> 2] & -65536) + 1076 >> 2];
    HEAP32[i126 >> 2] = 0;
    HEAP32[i127 >> 2] = 0;
    i160 = HEAP32[i64 >> 2] | 0;
    if ((i160 | 0) == (HEAP32[i63 >> 2] | 0)) {
     __ZN3WTF6VectorIN3JSC17PropertyNameArrayELj16ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i27, i33);
    } else {
     i145 = HEAP32[i62 >> 2] | 0;
     HEAP32[i145 + (i160 * 36 & -1) >> 2] = i159;
     if ((i144 | 0) != 0) {
      i159 = i144;
      HEAP32[i159 >> 2] = (HEAP32[i159 >> 2] | 0) + 1;
     }
     i159 = i145 + (i160 * 36 & -1) + 4 | 0;
     i144 = i159 | 0;
     _memset(i159 | 0, 0, 20) | 0;
     i159 = HEAP32[i128 >> 2] | 0;
     i171 = HEAP32[i129 >> 2] | 0;
     i154 = i159 + (i171 << 2) | 0;
     L184 : do {
      if ((HEAP32[i130 >> 2] | 0) != 0) {
       L186 : do {
        if ((i171 | 0) == 0) {
         i194 = i159;
        } else {
         i157 = i159;
         while (1) {
          i158 = HEAP32[i157 >> 2] | 0;
          if (!((i158 | 0) == (-1 | 0) | (i158 | 0) == 0)) {
           i194 = i157;
           break L186;
          }
          i157 = i157 + 4 | 0;
          if ((i157 | 0) == (i154 | 0)) {
           break L184;
          }
         }
        }
       } while (0);
       if ((i194 | 0) == (i154 | 0)) {
        break;
       } else {
        i195 = i194;
       }
       while (1) {
        __ZN3WTF9HashTableIPNS_10StringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_SD_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i20, i144, i195, i195);
        i165 = i195 + 4 | 0;
        if ((i165 | 0) == (i154 | 0)) {
         break L184;
        } else {
         i196 = i165;
        }
        while (1) {
         i165 = HEAP32[i196 >> 2] | 0;
         if (!((i165 | 0) == (-1 | 0) | (i165 | 0) == 0)) {
          break;
         }
         i165 = i196 + 4 | 0;
         if ((i165 | 0) == (i154 | 0)) {
          break L184;
         } else {
          i196 = i165;
         }
        }
        if ((i196 | 0) == (i154 | 0)) {
         break;
        } else {
         i195 = i196;
        }
       }
      }
     } while (0);
     HEAP32[i145 + (i160 * 36 & -1) + 24 >> 2] = HEAP32[i125 >> 2];
     HEAP32[i145 + (i160 * 36 & -1) + 28 >> 2] = HEAP32[i126 >> 2];
     HEAP32[i145 + (i160 * 36 & -1) + 32 >> 2] = HEAP32[i127 >> 2];
     HEAP32[i64 >> 2] = (HEAP32[i64 >> 2] | 0) + 1;
    }
    i154 = HEAP32[i128 >> 2] | 0;
    if ((i154 | 0) != 0) {
     __ZN3WTF8fastFreeEPv(i154);
    }
    i154 = HEAP32[i123 >> 2] | 0;
    if ((i154 | 0) != 0) {
     __ZN3WTF10RefCountedIN3JSC21PropertyNameArrayDataEE5derefEv(i154 | 0);
    }
    i154 = HEAP32[i185 >> 2] | 0;
    i144 = HEAP32[i154 >> 2] | 0;
    if ((i144 | 0) != 0) {
     if ((i144 | 0) != (HEAP32[i144 >> 2] | 0)) {
      i141 = 96;
      break L1;
     }
    }
    i144 = _llvm_uadd_with_overflow_i32(HEAP32[i64 >> 2] | 0, -1 | 0) | 0;
    if (!tempRet0) {
     i141 = 98;
     break L1;
    }
    FUNCTION_TABLE_viiii[HEAP32[(HEAP32[((HEAP32[(i185 & -65536) + 1048 >> 2] | 0) == 2 ? i185 + 8 | 0 : i154 + 32 | 0) >> 2] | 0) + 72 >> 2] & 3](i185, HEAP32[i87 >> 2] | 0, (HEAP32[i62 >> 2] | 0) + (i144 * 36 & -1) | 0, 0);
    i144 = HEAP32[i64 >> 2] | 0;
    i154 = _llvm_uadd_with_overflow_i32(i144 | 0, -1 | 0) | 0;
    if (!tempRet0) {
     i141 = 100;
     break L1;
    }
    i159 = HEAP32[i62 >> 2] | 0;
    if ((HEAP32[(HEAP32[i159 + (i154 * 36 & -1) >> 2] | 0) + 12 >> 2] | 0) == 0) {
     if ((i144 | 0) == 0) {
      i141 = 116;
      break L1;
     }
     i154 = i144 - 1 | 0;
     i144 = HEAP32[i159 + (i154 * 36 & -1) + 4 >> 2] | 0;
     if ((i144 | 0) != 0) {
      __ZN3WTF8fastFreeEPv(i144);
     }
     i144 = HEAP32[i159 + (i154 * 36 & -1) >> 2] | 0;
     if ((i144 | 0) != 0) {
      __ZN3WTF10RefCountedIN3JSC21PropertyNameArrayDataEE5derefEv(i144 | 0);
     }
     HEAP32[i64 >> 2] = i154;
     __ZN7WebCoreL17writeLittleEndianIjEEvRN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEET_(HEAP32[i84 >> 2] | 0, -1);
     i154 = HEAP32[i68 >> 2] | 0;
     if ((i154 | 0) == 0) {
      i141 = 122;
      break L1;
     }
     HEAP32[i68 >> 2] = i154 - 1;
     i166 = i182;
     i167 = i181;
     i141 = 553;
     continue;
    }
    __ZN7WebCoreL17writeLittleEndianIjEEvRN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEET_(HEAP32[i84 >> 2] | 0, -3);
    i154 = HEAP32[i58 >> 2] | 0;
    if ((i154 | 0) != (HEAP32[i57 >> 2] | 0)) {
     HEAP32[(HEAP32[i56 >> 2] | 0) + (i154 << 2) >> 2] = 0;
     HEAP32[i58 >> 2] = (HEAP32[i58 >> 2] | 0) + 1;
     i148 = i182;
     i149 = i181;
     i141 = 237;
     continue;
    }
    i144 = i154 + 1 | 0;
    i159 = i144 + (i154 >>> 2) | 0;
    i171 = i159 >>> 0 > 16 >>> 0 ? i159 : 16;
    i159 = i171 >>> 0 > i144 >>> 0 ? i171 : i144;
    do {
     if (i154 >>> 0 < i159 >>> 0) {
      i144 = HEAP32[i56 >> 2] | 0;
      if (i159 >>> 0 > 16 >>> 0) {
       if (i159 >>> 0 > 1073741823 >>> 0) {
        i141 = 107;
        break L1;
       }
       i171 = __ZN3WTF18fastMallocGoodSizeEj(i159 << 2) | 0;
       HEAP32[i57 >> 2] = i171 >>> 2;
       i165 = __ZN3WTF10fastMallocEj(i171) | 0;
       HEAP32[i56 >> 2] = i165;
       i197 = i165;
      } else {
       HEAP32[i56 >> 2] = i55;
       HEAP32[i57 >> 2] = 16;
       i197 = i55;
      }
      i165 = i144;
      _memcpy(i197 | 0, i165 | 0, i154 << 2) | 0;
      if ((i55 | 0) == (i144 | 0) | (i144 | 0) == 0) {
       break;
      }
      if ((HEAP32[i56 >> 2] | 0) == (i144 | 0)) {
       HEAP32[i56 >> 2] = 0;
       HEAP32[i57 >> 2] = 0;
      }
      __ZN3WTF8fastFreeEPv(i165);
     }
    } while (0);
    HEAP32[(HEAP32[i56 >> 2] | 0) + (HEAP32[i58 >> 2] << 2) >> 2] = 0;
    HEAP32[i58 >> 2] = (HEAP32[i58 >> 2] | 0) + 1;
    i148 = i182;
    i149 = i181;
    i141 = 237;
    continue;
   } else if ((i141 | 0) == 164) {
    i141 = 0;
    if ((HEAP32[i68 >> 2] | 0) >>> 0 > 4e4 >>> 0) {
     i168 = 1;
     break L1;
    }
    i154 = i147;
    HEAP32[i38 >> 2] = i154;
    if (__ZN7WebCore15CloneSerializer17checkForDuplicateEPN3JSC8JSObjectE(i1, i154) | 0) {
     i166 = i146;
     i167 = i147;
     i141 = 553;
     continue;
    }
    HEAP32[i17 >> 2] = i154;
    HEAP32[i18 >> 2] = HEAP32[i2 >> 2];
    __ZN3WTF9HashTableIPN3JSC8JSObjectENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_iEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i19, i79, i17, i18);
    i154 = HEAP32[i17 >> 2] | 0;
    i159 = (i154 | 0) == 0;
    i160 = HEAP32[i81 >> 2] | 0;
    i145 = (i159 ? 0 : 0) | i154;
    i154 = (i159 ? -6 : -5) | 0;
    if ((i160 | 0) < (HEAP32[i82 >> 2] | 0)) {
     i159 = (HEAP32[i83 >> 2] | 0) + (i160 << 3) | 0;
     HEAP32[i159 >> 2] = i145;
     HEAP32[i159 + 4 >> 2] = i154;
     HEAP32[i81 >> 2] = (HEAP32[i81 >> 2] | 0) + 1;
    } else {
     HEAP32[i110 >> 2] = i145;
     HEAP32[i110 + 4 >> 2] = i154;
     __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i80, i16);
    }
    __ZN7WebCore15CloneSerializer5writeENS_16SerializationTagE(i1, 2);
    i154 = HEAP32[i38 >> 2] | 0;
    if ((HEAP32[(i154 & -65536) + 1048 >> 2] | 0) == 2) {
     i198 = i154 + 8 | 0;
    } else {
     i198 = (HEAP32[i154 >> 2] | 0) + 32 | 0;
    }
    if ((HEAP32[i198 >> 2] | 0) != (__ZN3JSC13JSFinalObject6s_infoE | 0)) {
     i168 = 5;
     break L1;
    }
    i145 = HEAP32[i68 >> 2] | 0;
    if ((i145 | 0) == (HEAP32[i67 >> 2] | 0)) {
     i159 = i145 + 1 | 0;
     i160 = HEAP32[i66 >> 2] | 0;
     do {
      if (i160 >>> 0 > i38 >>> 0) {
       i141 = 177;
      } else {
       if ((i160 + (i145 << 2) | 0) >>> 0 <= i38 >>> 0) {
        i141 = 177;
        break;
       }
       i165 = i101 - i160 >> 2;
       i144 = i159 + (i145 >>> 2) | 0;
       i171 = i144 >>> 0 > 16 >>> 0 ? i144 : 16;
       i144 = i171 >>> 0 > i159 >>> 0 ? i171 : i159;
       do {
        if (i145 >>> 0 < i144 >>> 0) {
         if (i144 >>> 0 > 32 >>> 0) {
          if (i144 >>> 0 > 1073741823 >>> 0) {
           i141 = 191;
           break L1;
          }
          i171 = __ZN3WTF18fastMallocGoodSizeEj(i144 << 2) | 0;
          HEAP32[i67 >> 2] = i171 >>> 2;
          i157 = __ZN3WTF10fastMallocEj(i171) | 0;
          HEAP32[i66 >> 2] = i157;
          i199 = i157;
         } else {
          HEAP32[i66 >> 2] = i65;
          HEAP32[i67 >> 2] = 32;
          i199 = i65;
         }
         i157 = i160;
         _memcpy(i199 | 0, i157 | 0, i145 << 2) | 0;
         if ((i65 | 0) == (i160 | 0) | (i160 | 0) == 0) {
          break;
         }
         if ((HEAP32[i66 >> 2] | 0) == (i160 | 0)) {
          HEAP32[i66 >> 2] = 0;
          HEAP32[i67 >> 2] = 0;
         }
         __ZN3WTF8fastFreeEPv(i157);
        }
       } while (0);
       i144 = HEAP32[i66 >> 2] | 0;
       i200 = i144 + (i165 << 2) | 0;
       i201 = i144;
      }
     } while (0);
     if ((i141 | 0) == 177) {
      i141 = 0;
      i144 = i159 + (i145 >>> 2) | 0;
      i157 = i144 >>> 0 > 16 >>> 0 ? i144 : 16;
      i144 = i157 >>> 0 > i159 >>> 0 ? i157 : i159;
      do {
       if (i145 >>> 0 < i144 >>> 0) {
        if (i144 >>> 0 > 32 >>> 0) {
         if (i144 >>> 0 > 1073741823 >>> 0) {
          i141 = 180;
          break L1;
         }
         i157 = __ZN3WTF18fastMallocGoodSizeEj(i144 << 2) | 0;
         HEAP32[i67 >> 2] = i157 >>> 2;
         i171 = __ZN3WTF10fastMallocEj(i157) | 0;
         HEAP32[i66 >> 2] = i171;
         i202 = i171;
        } else {
         HEAP32[i66 >> 2] = i65;
         HEAP32[i67 >> 2] = 32;
         i202 = i65;
        }
        i171 = i160;
        _memcpy(i202 | 0, i171 | 0, i145 << 2) | 0;
        if ((i65 | 0) == (i160 | 0) | (i160 | 0) == 0) {
         break;
        }
        if ((HEAP32[i66 >> 2] | 0) == (i160 | 0)) {
         HEAP32[i66 >> 2] = 0;
         HEAP32[i67 >> 2] = 0;
        }
        __ZN3WTF8fastFreeEPv(i171);
       }
      } while (0);
      i200 = i38;
      i201 = HEAP32[i66 >> 2] | 0;
     }
     HEAP32[i201 + (HEAP32[i68 >> 2] << 2) >> 2] = HEAP32[i200 >> 2];
     i203 = HEAP32[i68 >> 2] | 0;
    } else {
     HEAP32[(HEAP32[i66 >> 2] | 0) + (i145 << 2) >> 2] = i154;
     i203 = HEAP32[i68 >> 2] | 0;
    }
    HEAP32[i68 >> 2] = i203 + 1;
    i160 = HEAP32[i58 >> 2] | 0;
    if ((i160 | 0) == (HEAP32[i57 >> 2] | 0)) {
     i144 = i160 + 1 | 0;
     i159 = i144 + (i160 >>> 2) | 0;
     i171 = i159 >>> 0 > 16 >>> 0 ? i159 : 16;
     i159 = i171 >>> 0 > i144 >>> 0 ? i171 : i144;
     do {
      if (i160 >>> 0 < i159 >>> 0) {
       i144 = HEAP32[i56 >> 2] | 0;
       if (i159 >>> 0 > 16 >>> 0) {
        if (i159 >>> 0 > 1073741823 >>> 0) {
         i141 = 205;
         break L1;
        }
        i171 = __ZN3WTF18fastMallocGoodSizeEj(i159 << 2) | 0;
        HEAP32[i57 >> 2] = i171 >>> 2;
        i157 = __ZN3WTF10fastMallocEj(i171) | 0;
        HEAP32[i56 >> 2] = i157;
        i204 = i157;
       } else {
        HEAP32[i56 >> 2] = i55;
        HEAP32[i57 >> 2] = 16;
        i204 = i55;
       }
       i157 = i144;
       _memcpy(i204 | 0, i157 | 0, i160 << 2) | 0;
       if ((i55 | 0) == (i144 | 0) | (i144 | 0) == 0) {
        break;
       }
       if ((HEAP32[i56 >> 2] | 0) == (i144 | 0)) {
        HEAP32[i56 >> 2] = 0;
        HEAP32[i57 >> 2] = 0;
       }
       __ZN3WTF8fastFreeEPv(i157);
      }
     } while (0);
     HEAP32[(HEAP32[i56 >> 2] | 0) + (HEAP32[i58 >> 2] << 2) >> 2] = 0;
     i205 = HEAP32[i58 >> 2] | 0;
    } else {
     HEAP32[(HEAP32[i56 >> 2] | 0) + (i160 << 2) >> 2] = 0;
     i205 = HEAP32[i58 >> 2] | 0;
    }
    HEAP32[i58 >> 2] = i205 + 1;
    i159 = HEAP32[i87 >> 2] | 0;
    i154 = __ZN3WTF10fastMallocEj(96) | 0;
    i145 = i154;
    HEAP32[i154 >> 2] = 1;
    HEAP32[i154 + 4 >> 2] = i154 + 16;
    HEAP32[i154 + 8 >> 2] = 20;
    HEAP32[i154 + 12 >> 2] = 0;
    HEAP32[i102 >> 2] = i145;
    _memset(i103 | 0, 0, 20) | 0;
    HEAP32[i104 >> 2] = HEAP32[(HEAP32[i159 + 16 >> 2] & -65536) + 1076 >> 2];
    HEAP32[i105 >> 2] = 0;
    HEAP32[i106 >> 2] = 0;
    i159 = HEAP32[i64 >> 2] | 0;
    if ((i159 | 0) == (HEAP32[i63 >> 2] | 0)) {
     __ZN3WTF6VectorIN3JSC17PropertyNameArrayELj16ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i27, i39);
    } else {
     i157 = HEAP32[i62 >> 2] | 0;
     HEAP32[i157 + (i159 * 36 & -1) >> 2] = i145;
     if ((i154 | 0) != 0) {
      i145 = i154;
      HEAP32[i145 >> 2] = (HEAP32[i145 >> 2] | 0) + 1;
     }
     i145 = i157 + (i159 * 36 & -1) + 4 | 0;
     i154 = i145 | 0;
     _memset(i145 | 0, 0, 20) | 0;
     i145 = HEAP32[i107 >> 2] | 0;
     i144 = HEAP32[i108 >> 2] | 0;
     i171 = i145 + (i144 << 2) | 0;
     L304 : do {
      if ((HEAP32[i109 >> 2] | 0) != 0) {
       L306 : do {
        if ((i144 | 0) == 0) {
         i206 = i145;
        } else {
         i158 = i145;
         while (1) {
          i170 = HEAP32[i158 >> 2] | 0;
          if (!((i170 | 0) == (-1 | 0) | (i170 | 0) == 0)) {
           i206 = i158;
           break L306;
          }
          i158 = i158 + 4 | 0;
          if ((i158 | 0) == (i171 | 0)) {
           break L304;
          }
         }
        }
       } while (0);
       if ((i206 | 0) == (i171 | 0)) {
        break;
       } else {
        i207 = i206;
       }
       while (1) {
        __ZN3WTF9HashTableIPNS_10StringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_SD_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i15, i154, i207, i207);
        i165 = i207 + 4 | 0;
        if ((i165 | 0) == (i171 | 0)) {
         break L304;
        } else {
         i208 = i165;
        }
        while (1) {
         i165 = HEAP32[i208 >> 2] | 0;
         if (!((i165 | 0) == (-1 | 0) | (i165 | 0) == 0)) {
          break;
         }
         i165 = i208 + 4 | 0;
         if ((i165 | 0) == (i171 | 0)) {
          break L304;
         } else {
          i208 = i165;
         }
        }
        if ((i208 | 0) == (i171 | 0)) {
         break;
        } else {
         i207 = i208;
        }
       }
      }
     } while (0);
     HEAP32[i157 + (i159 * 36 & -1) + 24 >> 2] = HEAP32[i104 >> 2];
     HEAP32[i157 + (i159 * 36 & -1) + 28 >> 2] = HEAP32[i105 >> 2];
     HEAP32[i157 + (i159 * 36 & -1) + 32 >> 2] = HEAP32[i106 >> 2];
     HEAP32[i64 >> 2] = (HEAP32[i64 >> 2] | 0) + 1;
    }
    i171 = HEAP32[i107 >> 2] | 0;
    if ((i171 | 0) != 0) {
     __ZN3WTF8fastFreeEPv(i171);
    }
    i171 = HEAP32[i102 >> 2] | 0;
    if ((i171 | 0) != 0) {
     __ZN3WTF10RefCountedIN3JSC21PropertyNameArrayDataEE5derefEv(i171 | 0);
    }
    i171 = HEAP32[i38 >> 2] | 0;
    i154 = HEAP32[i171 >> 2] | 0;
    i145 = HEAP32[i154 >> 2] | 0;
    if ((i145 | 0) != 0) {
     if ((i145 | 0) != (HEAP32[i145 >> 2] | 0)) {
      i141 = 233;
      break L1;
     }
    }
    i145 = _llvm_uadd_with_overflow_i32(HEAP32[i64 >> 2] | 0, -1 | 0) | 0;
    if (!tempRet0) {
     i141 = 235;
     break L1;
    }
    FUNCTION_TABLE_viiii[HEAP32[(HEAP32[((HEAP32[(i171 & -65536) + 1048 >> 2] | 0) == 2 ? i171 + 8 | 0 : i154 + 32 | 0) >> 2] | 0) + 68 >> 2] & 3](i171, HEAP32[i87 >> 2] | 0, (HEAP32[i62 >> 2] | 0) + (i145 * 36 & -1) | 0, 0);
    i148 = i146;
    i149 = i147;
    i141 = 237;
    continue;
   } else if ((i141 | 0) == 237) {
    i141 = 0;
    i145 = _llvm_uadd_with_overflow_i32(HEAP32[i68 >> 2] | 0, -1 | 0) | 0;
    i171 = tempRet0;
    if (i171) {
     i209 = i149;
     i210 = i148;
     i211 = i171;
     i212 = i145;
    } else {
     i141 = 597;
     break L1;
    }
    while (1) {
     i145 = HEAP32[(HEAP32[i66 >> 2] | 0) + (i212 << 2) >> 2] | 0;
     i171 = _llvm_uadd_with_overflow_i32(HEAP32[i58 >> 2] | 0, -1 | 0) | 0;
     if (!tempRet0) {
      i141 = 240;
      break L1;
     }
     i213 = HEAP32[(HEAP32[i56 >> 2] | 0) + (i171 << 2) >> 2] | 0;
     i171 = _llvm_uadd_with_overflow_i32(HEAP32[i64 >> 2] | 0, -1 | 0) | 0;
     if (!tempRet0) {
      i141 = 242;
      break L1;
     }
     i214 = (HEAP32[i62 >> 2] | 0) + (i171 * 36 & -1) | 0;
     i171 = HEAP32[i214 >> 2] | 0;
     i154 = HEAP32[i171 + 12 >> 2] | 0;
     if ((i213 | 0) == (i154 | 0)) {
      i141 = 244;
      break;
     }
     if (i154 >>> 0 <= i213 >>> 0) {
      i141 = 256;
      break L1;
     }
     __ZN7WebCore15CloneSerializer11getPropertyEPN3JSC8JSObjectERKNS1_10IdentifierE(i40, i1, i145, (HEAP32[i171 + 4 >> 2] | 0) + (i213 << 2) | 0);
     i215 = HEAP32[i132 >> 2] | 0;
     i216 = HEAP32[i132 + 4 >> 2] | 0;
     i217 = i215;
     i218 = i216;
     i219 = i218;
     i171 = (HEAP32[(HEAP32[(HEAP32[i87 >> 2] | 0) + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
     if (!((HEAP32[i171 >> 2] & 0 | 0) == 0 & (HEAP32[i171 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
      i168 = 4;
      break L1;
     }
     if ((i219 | 0) != -6) {
      break;
     }
     i171 = _llvm_uadd_with_overflow_i32(HEAP32[i58 >> 2] | 0, -1 | 0) | 0;
     if (!tempRet0) {
      i141 = 260;
      break L1;
     }
     i145 = (HEAP32[i56 >> 2] | 0) + (i171 << 2) | 0;
     HEAP32[i145 >> 2] = (HEAP32[i145 >> 2] | 0) + 1;
     i145 = _llvm_uadd_with_overflow_i32(HEAP32[i68 >> 2] | 0, -1 | 0) | 0;
     i171 = tempRet0;
     if (i171) {
      i209 = i217;
      i210 = -6;
      i211 = i171;
      i212 = i145;
     } else {
      i141 = 598;
      break L1;
     }
    }
    if ((i141 | 0) == 244) {
     i141 = 0;
     __ZN7WebCoreL17writeLittleEndianIjEEvRN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEET_(HEAP32[i84 >> 2] | 0, -1);
     i159 = HEAP32[i68 >> 2] | 0;
     if ((i159 | 0) == 0) {
      i141 = 245;
      break L1;
     }
     HEAP32[i68 >> 2] = i159 - 1;
     i159 = HEAP32[i58 >> 2] | 0;
     if ((i159 | 0) == 0) {
      i141 = 247;
      break L1;
     }
     HEAP32[i58 >> 2] = i159 - 1;
     i159 = HEAP32[i64 >> 2] | 0;
     if ((i159 | 0) == 0) {
      i141 = 249;
      break L1;
     }
     i157 = i159 - 1 | 0;
     i159 = HEAP32[i62 >> 2] | 0;
     i145 = HEAP32[i159 + (i157 * 36 & -1) + 4 >> 2] | 0;
     if ((i145 | 0) != 0) {
      __ZN3WTF8fastFreeEPv(i145);
     }
     i145 = HEAP32[i159 + (i157 * 36 & -1) >> 2] | 0;
     if ((i145 | 0) != 0) {
      __ZN3WTF10RefCountedIN3JSC21PropertyNameArrayDataEE5derefEv(i145 | 0);
     }
     HEAP32[i64 >> 2] = i157;
     i166 = i210;
     i167 = i209;
     i141 = 553;
     continue;
    }
    i157 = HEAP32[i214 >> 2] | 0;
    if ((HEAP32[i157 + 12 >> 2] | 0) >>> 0 <= i213 >>> 0) {
     i141 = 263;
     break L1;
    }
    __ZN7WebCore15CloneSerializer5writeERKN3JSC10IdentifierE(i1, (HEAP32[i157 + 4 >> 2] | 0) + (i213 << 2) | 0);
    i157 = (HEAP32[(HEAP32[(HEAP32[i87 >> 2] | 0) + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
    if (!((HEAP32[i157 >> 2] & 0 | 0) == 0 & (HEAP32[i157 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
     i168 = 4;
     break L1;
    }
    HEAP32[i41 >> 2] = 0;
    HEAP32[i133 >> 2] = i215 & -1;
    HEAP32[i133 + 4 >> 2] = i218 | i216 & 0;
    if (__ZN7WebCore15CloneSerializer14dumpIfTerminalEN3JSC7JSValueERNS_23SerializationReturnCodeE(i1, i42, i41) | 0) {
     i157 = HEAP32[i41 >> 2] | 0;
     if ((i157 | 0) == 0) {
      i150 = i219;
      i151 = i217;
      i141 = 294;
      continue;
     } else {
      i168 = i157;
      break L1;
     }
    }
    HEAP32[i43 >> 2] = 6;
    i157 = HEAP32[i78 >> 2] | 0;
    if ((i157 | 0) != (HEAP32[i77 >> 2] | 0)) {
     HEAP32[(HEAP32[i76 >> 2] | 0) + (i157 << 2) >> 2] = 6;
     HEAP32[i78 >> 2] = (HEAP32[i78 >> 2] | 0) + 1;
     i155 = i219;
     i156 = i217;
     i141 = 523;
     continue;
    }
    i145 = i157 + 1 | 0;
    i159 = HEAP32[i76 >> 2] | 0;
    do {
     if (i159 >>> 0 > i43 >>> 0) {
      i141 = 270;
     } else {
      if ((i159 + (i157 << 2) | 0) >>> 0 <= i43 >>> 0) {
       i141 = 270;
       break;
      }
      i171 = i134 - i159 >> 2;
      i154 = i145 + (i157 >>> 2) | 0;
      i144 = i154 >>> 0 > 16 >>> 0 ? i154 : 16;
      i154 = i144 >>> 0 > i145 >>> 0 ? i144 : i145;
      do {
       if (i157 >>> 0 < i154 >>> 0) {
        if (i154 >>> 0 > 16 >>> 0) {
         if (i154 >>> 0 > 1073741823 >>> 0) {
          i141 = 284;
          break L1;
         }
         i144 = __ZN3WTF18fastMallocGoodSizeEj(i154 << 2) | 0;
         HEAP32[i77 >> 2] = i144 >>> 2;
         i160 = __ZN3WTF10fastMallocEj(i144) | 0;
         HEAP32[i76 >> 2] = i160;
         i220 = i160;
        } else {
         HEAP32[i76 >> 2] = i75;
         HEAP32[i77 >> 2] = 16;
         i220 = i75;
        }
        i160 = i159;
        _memcpy(i220 | 0, i160 | 0, i157 << 2) | 0;
        if ((i75 | 0) == (i159 | 0) | (i159 | 0) == 0) {
         break;
        }
        if ((HEAP32[i76 >> 2] | 0) == (i159 | 0)) {
         HEAP32[i76 >> 2] = 0;
         HEAP32[i77 >> 2] = 0;
        }
        __ZN3WTF8fastFreeEPv(i160);
       }
      } while (0);
      i154 = HEAP32[i76 >> 2] | 0;
      i221 = i154 + (i171 << 2) | 0;
      i222 = i154;
     }
    } while (0);
    if ((i141 | 0) == 270) {
     i141 = 0;
     i154 = i145 + (i157 >>> 2) | 0;
     i160 = i154 >>> 0 > 16 >>> 0 ? i154 : 16;
     i154 = i160 >>> 0 > i145 >>> 0 ? i160 : i145;
     do {
      if (i157 >>> 0 < i154 >>> 0) {
       if (i154 >>> 0 > 16 >>> 0) {
        if (i154 >>> 0 > 1073741823 >>> 0) {
         i141 = 273;
         break L1;
        }
        i160 = __ZN3WTF18fastMallocGoodSizeEj(i154 << 2) | 0;
        HEAP32[i77 >> 2] = i160 >>> 2;
        i144 = __ZN3WTF10fastMallocEj(i160) | 0;
        HEAP32[i76 >> 2] = i144;
        i223 = i144;
       } else {
        HEAP32[i76 >> 2] = i75;
        HEAP32[i77 >> 2] = 16;
        i223 = i75;
       }
       i144 = i159;
       _memcpy(i223 | 0, i144 | 0, i157 << 2) | 0;
       if ((i75 | 0) == (i159 | 0) | (i159 | 0) == 0) {
        break;
       }
       if ((HEAP32[i76 >> 2] | 0) == (i159 | 0)) {
        HEAP32[i76 >> 2] = 0;
        HEAP32[i77 >> 2] = 0;
       }
       __ZN3WTF8fastFreeEPv(i144);
      }
     } while (0);
     i221 = i43;
     i222 = HEAP32[i76 >> 2] | 0;
    }
    HEAP32[i222 + (HEAP32[i78 >> 2] << 2) >> 2] = HEAP32[i221 >> 2];
    HEAP32[i78 >> 2] = (HEAP32[i78 >> 2] | 0) + 1;
    i155 = i219;
    i156 = i217;
    i141 = 523;
    continue;
   } else if ((i141 | 0) == 294) {
    i141 = 0;
    i159 = (HEAP32[(HEAP32[(HEAP32[i87 >> 2] | 0) + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
    if (!((HEAP32[i159 >> 2] & 0 | 0) == 0 & (HEAP32[i159 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
     i168 = 4;
     break L1;
    }
    i159 = _llvm_uadd_with_overflow_i32(HEAP32[i58 >> 2] | 0, -1 | 0) | 0;
    if (!tempRet0) {
     i141 = 296;
     break L1;
    }
    i157 = (HEAP32[i56 >> 2] | 0) + (i159 << 2) | 0;
    HEAP32[i157 >> 2] = (HEAP32[i157 >> 2] | 0) + 1;
    i148 = i150;
    i149 = i151;
    i141 = 237;
    continue;
   } else if ((i141 | 0) == 412) {
    i141 = 0;
    i157 = _llvm_uadd_with_overflow_i32(HEAP32[i74 >> 2] | 0, -1 | 0) | 0;
    if (!tempRet0) {
     i141 = 413;
     break L1;
    }
    i159 = i157;
    i157 = HEAP32[i72 >> 2] | 0;
    i154 = _llvm_uadd_with_overflow_i32(HEAP32[i71 >> 2] | 0, -1 | 0) | 0;
    if (!tempRet0) {
     i141 = 415;
     break L1;
    }
    i145 = HEAP32[(HEAP32[i69 >> 2] | 0) + (i154 << 2) >> 2] | 0;
    i154 = i157 + (i159 << 3) + 4 | 0;
    i144 = HEAP32[i154 >> 2] | 0;
    i160 = i157 + (i159 << 3) | 0;
    do {
     if (i144 >>> 0 < (HEAP32[(HEAP32[i160 >> 2] | 0) + 68 >> 2] | 0) >>> 0) {
      i159 = i145 + 76 | 0;
      HEAP32[i159 >> 2] = (HEAP32[i159 >> 2] | 0) - 1;
      if ((i144 | 0) == -1) {
       break;
      }
      i159 = (HEAP32[(HEAP32[i160 >> 2] | 0) + 80 >> 2] | 0) + (HEAP32[i154 >> 2] << 4) | 0;
      i157 = HEAP32[i159 >> 2] | 0;
      i165 = HEAP32[i159 + 4 >> 2] | 0;
      HEAP32[i51 >> 2] = 8;
      i159 = HEAP32[i78 >> 2] | 0;
      if ((i159 | 0) != (HEAP32[i77 >> 2] | 0)) {
       HEAP32[(HEAP32[i76 >> 2] | 0) + (i159 << 2) >> 2] = 8;
       HEAP32[i78 >> 2] = (HEAP32[i78 >> 2] | 0) + 1;
       i155 = i165;
       i156 = i157;
       i141 = 523;
       continue L47;
      }
      i158 = i159 + 1 | 0;
      i170 = HEAP32[i76 >> 2] | 0;
      do {
       if (i170 >>> 0 > i51 >>> 0) {
        i141 = 465;
       } else {
        if ((i170 + (i159 << 2) | 0) >>> 0 <= i51 >>> 0) {
         i141 = 465;
         break;
        }
        i224 = i111 - i170 >> 2;
        i225 = i158 + (i159 >>> 2) | 0;
        i226 = i225 >>> 0 > 16 >>> 0 ? i225 : 16;
        i225 = i226 >>> 0 > i158 >>> 0 ? i226 : i158;
        do {
         if (i159 >>> 0 < i225 >>> 0) {
          if (i225 >>> 0 > 16 >>> 0) {
           if (i225 >>> 0 > 1073741823 >>> 0) {
            i141 = 479;
            break L1;
           }
           i226 = __ZN3WTF18fastMallocGoodSizeEj(i225 << 2) | 0;
           HEAP32[i77 >> 2] = i226 >>> 2;
           i227 = __ZN3WTF10fastMallocEj(i226) | 0;
           HEAP32[i76 >> 2] = i227;
           i228 = i227;
          } else {
           HEAP32[i76 >> 2] = i75;
           HEAP32[i77 >> 2] = 16;
           i228 = i75;
          }
          i227 = i170;
          _memcpy(i228 | 0, i227 | 0, i159 << 2) | 0;
          if ((i75 | 0) == (i170 | 0) | (i170 | 0) == 0) {
           break;
          }
          if ((HEAP32[i76 >> 2] | 0) == (i170 | 0)) {
           HEAP32[i76 >> 2] = 0;
           HEAP32[i77 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i227);
         }
        } while (0);
        i225 = HEAP32[i76 >> 2] | 0;
        i229 = i225 + (i224 << 2) | 0;
        i230 = i225;
       }
      } while (0);
      if ((i141 | 0) == 465) {
       i141 = 0;
       i171 = i158 + (i159 >>> 2) | 0;
       i225 = i171 >>> 0 > 16 >>> 0 ? i171 : 16;
       i171 = i225 >>> 0 > i158 >>> 0 ? i225 : i158;
       do {
        if (i159 >>> 0 < i171 >>> 0) {
         if (i171 >>> 0 > 16 >>> 0) {
          if (i171 >>> 0 > 1073741823 >>> 0) {
           i141 = 468;
           break L1;
          }
          i225 = __ZN3WTF18fastMallocGoodSizeEj(i171 << 2) | 0;
          HEAP32[i77 >> 2] = i225 >>> 2;
          i227 = __ZN3WTF10fastMallocEj(i225) | 0;
          HEAP32[i76 >> 2] = i227;
          i231 = i227;
         } else {
          HEAP32[i76 >> 2] = i75;
          HEAP32[i77 >> 2] = 16;
          i231 = i75;
         }
         i227 = i170;
         _memcpy(i231 | 0, i227 | 0, i159 << 2) | 0;
         if ((i75 | 0) == (i170 | 0) | (i170 | 0) == 0) {
          break;
         }
         if ((HEAP32[i76 >> 2] | 0) == (i170 | 0)) {
          HEAP32[i76 >> 2] = 0;
          HEAP32[i77 >> 2] = 0;
         }
         __ZN3WTF8fastFreeEPv(i227);
        }
       } while (0);
       i229 = i51;
       i230 = HEAP32[i76 >> 2] | 0;
      }
      HEAP32[i230 + (HEAP32[i78 >> 2] << 2) >> 2] = HEAP32[i229 >> 2];
      HEAP32[i78 >> 2] = (HEAP32[i78 >> 2] | 0) + 1;
      i155 = i165;
      i156 = i157;
      i141 = 523;
      continue L47;
     } else {
      i170 = i145 + 76 | 0;
      HEAP32[i170 >> 2] = (HEAP32[i170 >> 2] | 0) - 1;
     }
    } while (0);
    i145 = HEAP32[i74 >> 2] | 0;
    if ((i145 | 0) == 0) {
     i141 = 420;
     break L1;
    }
    i154 = i145 - 1 | 0;
    i145 = (HEAP32[(HEAP32[i72 >> 2] | 0) + (i154 << 3) >> 2] | 0) + 76 | 0;
    HEAP32[i145 >> 2] = (HEAP32[i145 >> 2] | 0) - 1;
    HEAP32[i74 >> 2] = i154;
    i154 = HEAP32[i71 >> 2] | 0;
    if ((i154 | 0) == 0) {
     i141 = 422;
     break L1;
    }
    HEAP32[i71 >> 2] = i154 - 1;
    i154 = _llvm_uadd_with_overflow_i32(HEAP32[i68 >> 2] | 0, -1 | 0) | 0;
    if (!tempRet0) {
     i141 = 424;
     break L1;
    }
    i145 = HEAP32[(HEAP32[i66 >> 2] | 0) + (i154 << 2) >> 2] | 0;
    i154 = HEAP32[i87 >> 2] | 0;
    i160 = __ZN3WTF10fastMallocEj(96) | 0;
    i144 = i160;
    HEAP32[i160 >> 2] = 1;
    HEAP32[i160 + 4 >> 2] = i160 + 16;
    HEAP32[i160 + 8 >> 2] = 20;
    HEAP32[i160 + 12 >> 2] = 0;
    HEAP32[i112 >> 2] = i144;
    _memset(i113 | 0, 0, 20) | 0;
    HEAP32[i114 >> 2] = HEAP32[(HEAP32[i154 + 16 >> 2] & -65536) + 1076 >> 2];
    HEAP32[i115 >> 2] = 0;
    HEAP32[i116 >> 2] = 0;
    i154 = HEAP32[i64 >> 2] | 0;
    if ((i154 | 0) == (HEAP32[i63 >> 2] | 0)) {
     __ZN3WTF6VectorIN3JSC17PropertyNameArrayELj16ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i27, i50);
    } else {
     i170 = HEAP32[i62 >> 2] | 0;
     HEAP32[i170 + (i154 * 36 & -1) >> 2] = i144;
     if ((i160 | 0) != 0) {
      i144 = i160;
      HEAP32[i144 >> 2] = (HEAP32[i144 >> 2] | 0) + 1;
     }
     i144 = i170 + (i154 * 36 & -1) + 4 | 0;
     i160 = i144 | 0;
     _memset(i144 | 0, 0, 20) | 0;
     i144 = HEAP32[i117 >> 2] | 0;
     i159 = HEAP32[i118 >> 2] | 0;
     i171 = i144 + (i159 << 2) | 0;
     L442 : do {
      if ((HEAP32[i119 >> 2] | 0) != 0) {
       L444 : do {
        if ((i159 | 0) == 0) {
         i232 = i144;
        } else {
         i158 = i144;
         while (1) {
          i227 = HEAP32[i158 >> 2] | 0;
          if (!((i227 | 0) == (-1 | 0) | (i227 | 0) == 0)) {
           i232 = i158;
           break L444;
          }
          i158 = i158 + 4 | 0;
          if ((i158 | 0) == (i171 | 0)) {
           break L442;
          }
         }
        }
       } while (0);
       if ((i232 | 0) == (i171 | 0)) {
        break;
       } else {
        i233 = i232;
       }
       while (1) {
        __ZN3WTF9HashTableIPNS_10StringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_SD_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i4, i160, i233, i233);
        i157 = i233 + 4 | 0;
        if ((i157 | 0) == (i171 | 0)) {
         break L442;
        } else {
         i234 = i157;
        }
        while (1) {
         i157 = HEAP32[i234 >> 2] | 0;
         if (!((i157 | 0) == (-1 | 0) | (i157 | 0) == 0)) {
          break;
         }
         i157 = i234 + 4 | 0;
         if ((i157 | 0) == (i171 | 0)) {
          break L442;
         } else {
          i234 = i157;
         }
        }
        if ((i234 | 0) == (i171 | 0)) {
         break;
        } else {
         i233 = i234;
        }
       }
      }
     } while (0);
     HEAP32[i170 + (i154 * 36 & -1) + 24 >> 2] = HEAP32[i114 >> 2];
     HEAP32[i170 + (i154 * 36 & -1) + 28 >> 2] = HEAP32[i115 >> 2];
     HEAP32[i170 + (i154 * 36 & -1) + 32 >> 2] = HEAP32[i116 >> 2];
     HEAP32[i64 >> 2] = (HEAP32[i64 >> 2] | 0) + 1;
    }
    i171 = HEAP32[i117 >> 2] | 0;
    if ((i171 | 0) != 0) {
     __ZN3WTF8fastFreeEPv(i171);
    }
    i171 = HEAP32[i112 >> 2] | 0;
    if ((i171 | 0) != 0) {
     __ZN3WTF10RefCountedIN3JSC21PropertyNameArrayDataEE5derefEv(i171 | 0);
    }
    i171 = HEAP32[i145 >> 2] | 0;
    i160 = HEAP32[i171 >> 2] | 0;
    if ((i160 | 0) != 0) {
     if ((i160 | 0) != (HEAP32[i160 >> 2] | 0)) {
      i141 = 445;
      break L1;
     }
    }
    i160 = _llvm_uadd_with_overflow_i32(HEAP32[i64 >> 2] | 0, -1 | 0) | 0;
    if (!tempRet0) {
     i141 = 447;
     break L1;
    }
    FUNCTION_TABLE_viiii[HEAP32[(HEAP32[((HEAP32[(i145 & -65536) + 1048 >> 2] | 0) == 2 ? i145 + 8 | 0 : i171 + 32 | 0) >> 2] | 0) + 68 >> 2] & 3](i145, HEAP32[i87 >> 2] | 0, (HEAP32[i62 >> 2] | 0) + (i160 * 36 & -1) | 0, 0);
    __ZN7WebCore15CloneSerializer5writeENS_16SerializationTagE(i1, 31);
    i160 = HEAP32[i58 >> 2] | 0;
    if ((i160 | 0) != (HEAP32[i57 >> 2] | 0)) {
     HEAP32[(HEAP32[i56 >> 2] | 0) + (i160 << 2) >> 2] = 0;
     HEAP32[i58 >> 2] = (HEAP32[i58 >> 2] | 0) + 1;
     i148 = i152;
     i149 = i153;
     i141 = 237;
     continue;
    }
    i171 = i160 + 1 | 0;
    i144 = i171 + (i160 >>> 2) | 0;
    i159 = i144 >>> 0 > 16 >>> 0 ? i144 : 16;
    i144 = i159 >>> 0 > i171 >>> 0 ? i159 : i171;
    do {
     if (i160 >>> 0 < i144 >>> 0) {
      i171 = HEAP32[i56 >> 2] | 0;
      if (i144 >>> 0 > 16 >>> 0) {
       if (i144 >>> 0 > 1073741823 >>> 0) {
        i141 = 453;
        break L1;
       }
       i159 = __ZN3WTF18fastMallocGoodSizeEj(i144 << 2) | 0;
       HEAP32[i57 >> 2] = i159 >>> 2;
       i157 = __ZN3WTF10fastMallocEj(i159) | 0;
       HEAP32[i56 >> 2] = i157;
       i235 = i157;
      } else {
       HEAP32[i56 >> 2] = i55;
       HEAP32[i57 >> 2] = 16;
       i235 = i55;
      }
      i157 = i171;
      _memcpy(i235 | 0, i157 | 0, i160 << 2) | 0;
      if ((i55 | 0) == (i171 | 0) | (i171 | 0) == 0) {
       break;
      }
      if ((HEAP32[i56 >> 2] | 0) == (i171 | 0)) {
       HEAP32[i56 >> 2] = 0;
       HEAP32[i57 >> 2] = 0;
      }
      __ZN3WTF8fastFreeEPv(i157);
     }
    } while (0);
    HEAP32[(HEAP32[i56 >> 2] | 0) + (HEAP32[i58 >> 2] << 2) >> 2] = 0;
    HEAP32[i58 >> 2] = (HEAP32[i58 >> 2] | 0) + 1;
    i148 = i152;
    i149 = i153;
    i141 = 237;
    continue;
   } else if ((i141 | 0) == 523) {
    i141 = 0;
    HEAP32[i53 >> 2] = 0;
    HEAP32[i88 >> 2] = i156;
    HEAP32[i88 + 4 >> 2] = i155;
    if (__ZN7WebCore15CloneSerializer14dumpIfTerminalEN3JSC7JSValueERNS_23SerializationReturnCodeE(i1, i54, i53) | 0) {
     i160 = HEAP32[i53 >> 2] | 0;
     if ((i160 | 0) == 0) {
      i166 = i155;
      i167 = i156;
      i141 = 553;
      continue;
     } else {
      i168 = i160;
      break L1;
     }
    }
    if ((i155 | 0) != -5) {
     i146 = i155;
     i147 = i156;
     i141 = 164;
     continue;
    }
    i160 = (HEAPU8[(HEAP32[i156 >> 2] | 0) + 52 | 0] | 0) >>> 0 > 16 >>> 0;
    if (!i160) {
     i146 = -5;
     i147 = i156;
     i141 = 164;
     continue;
    }
    i144 = i156;
    i145 = (HEAP32[(i156 & -65536) + 1048 >> 2] | 0) == 2;
    if (i145) {
     i236 = i144 + 8 | 0;
    } else {
     i236 = (HEAP32[i144 >> 2] | 0) + 32 | 0;
    }
    if ((HEAP32[i236 >> 2] | 0) == (__ZN3JSC7JSArray6s_infoE | 0)) {
     i139 = -5;
     i140 = i156;
     i141 = 3;
     continue;
    }
    if (i145) {
     i237 = i144 + 8 | 0;
    } else {
     i237 = (HEAP32[i144 >> 2] | 0) + 32 | 0;
    }
    i144 = HEAP32[i237 >> 2] | 0;
    if ((i144 | 0) != 0) {
     i145 = i144;
     while (1) {
      if ((i145 | 0) == (__ZN3JSC7JSArray6s_infoE | 0)) {
       i139 = -5;
       i140 = i156;
       i141 = 3;
       continue L47;
      }
      i145 = HEAP32[i145 + 4 >> 2] | 0;
      if ((i145 | 0) == 0) {
       break;
      }
     }
    }
    if (!i160) {
     i146 = -5;
     i147 = i156;
     i141 = 164;
     continue;
    }
    i145 = i156;
    if ((HEAP32[(i156 & -65536) + 1048 >> 2] | 0) == 2) {
     i238 = i145 + 8 | 0;
    } else {
     i238 = (HEAP32[i145 >> 2] | 0) + 32 | 0;
    }
    i145 = HEAP32[i238 >> 2] | 0;
    L508 : do {
     if ((i145 | 0) != 0) {
      i144 = i145;
      while (1) {
       if ((i144 | 0) == (__ZN3JSC5JSMap6s_infoE | 0)) {
        break;
       }
       i144 = HEAP32[i144 + 4 >> 2] | 0;
       if ((i144 | 0) == 0) {
        break L508;
       }
      }
      if ((HEAP32[i68 >> 2] | 0) >>> 0 > 4e4 >>> 0) {
       i168 = 1;
       break L1;
      }
      i144 = i156;
      i154 = i144 | 0;
      if (__ZN7WebCore15CloneSerializer17checkForDuplicateEPN3JSC8JSObjectE(i1, i154) | 0) {
       i166 = -5;
       i167 = i156;
       i141 = 553;
       continue L47;
      }
      HEAP32[i12 >> 2] = i154;
      HEAP32[i13 >> 2] = HEAP32[i2 >> 2];
      __ZN3WTF9HashTableIPN3JSC8JSObjectENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_iEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i14, i79, i12, i13);
      i170 = HEAP32[i12 >> 2] | 0;
      i157 = (i170 | 0) == 0;
      i171 = HEAP32[i81 >> 2] | 0;
      i159 = (i157 ? 0 : 0) | i170;
      i170 = (i157 ? -6 : -5) | 0;
      if ((i171 | 0) < (HEAP32[i82 >> 2] | 0)) {
       i157 = (HEAP32[i83 >> 2] | 0) + (i171 << 3) | 0;
       HEAP32[i157 >> 2] = i159;
       HEAP32[i157 + 4 >> 2] = i170;
       HEAP32[i81 >> 2] = (HEAP32[i81 >> 2] | 0) + 1;
      } else {
       HEAP32[i94 >> 2] = i159;
       HEAP32[i94 + 4 >> 2] = i170;
       __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i80, i11);
      }
      __ZN7WebCore15CloneSerializer5writeENS_16SerializationTagE(i1, 30);
      i170 = HEAP32[i144 + 8 >> 2] | 0;
      HEAP32[i44 >> 2] = i170;
      i144 = (i170 | 0) == 0;
      i159 = HEAP32[i81 >> 2] | 0;
      i157 = (i144 ? 0 : 0) | i170;
      i170 = (i144 ? -6 : -5) | 0;
      if ((i159 | 0) < (HEAP32[i82 >> 2] | 0)) {
       i144 = (HEAP32[i83 >> 2] | 0) + (i159 << 3) | 0;
       HEAP32[i144 >> 2] = i157;
       HEAP32[i144 + 4 >> 2] = i170;
       HEAP32[i81 >> 2] = (HEAP32[i81 >> 2] | 0) + 1;
      } else {
       HEAP32[i93 >> 2] = i157;
       HEAP32[i93 + 4 >> 2] = i170;
       __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i80, i10);
      }
      i170 = HEAP32[i71 >> 2] | 0;
      if ((i170 | 0) == (HEAP32[i70 >> 2] | 0)) {
       i157 = i170 + 1 | 0;
       i144 = HEAP32[i69 >> 2] | 0;
       do {
        if (i144 >>> 0 > i44 >>> 0) {
         i141 = 309;
        } else {
         if ((i144 + (i170 << 2) | 0) >>> 0 <= i44 >>> 0) {
          i141 = 309;
          break;
         }
         i159 = i89 - i144 >> 2;
         i171 = i157 + (i170 >>> 2) | 0;
         i165 = i171 >>> 0 > 16 >>> 0 ? i171 : 16;
         i171 = i165 >>> 0 > i157 >>> 0 ? i165 : i157;
         do {
          if (i170 >>> 0 < i171 >>> 0) {
           if (i171 >>> 0 > 4 >>> 0) {
            if (i171 >>> 0 > 1073741823 >>> 0) {
             i141 = 323;
             break L1;
            }
            i165 = __ZN3WTF18fastMallocGoodSizeEj(i171 << 2) | 0;
            HEAP32[i70 >> 2] = i165 >>> 2;
            i158 = __ZN3WTF10fastMallocEj(i165) | 0;
            HEAP32[i69 >> 2] = i158;
            i239 = i158;
           } else {
            HEAP32[i69 >> 2] = i28;
            HEAP32[i70 >> 2] = 4;
            i239 = i28;
           }
           i158 = i144;
           _memcpy(i239 | 0, i158 | 0, i170 << 2) | 0;
           if ((i28 | 0) == (i144 | 0) | (i144 | 0) == 0) {
            break;
           }
           if ((HEAP32[i69 >> 2] | 0) == (i144 | 0)) {
            HEAP32[i69 >> 2] = 0;
            HEAP32[i70 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i158);
          }
         } while (0);
         i171 = HEAP32[i69 >> 2] | 0;
         i240 = i171 + (i159 << 2) | 0;
         i241 = i171;
        }
       } while (0);
       if ((i141 | 0) == 309) {
        i141 = 0;
        i171 = i157 + (i170 >>> 2) | 0;
        i158 = i171 >>> 0 > 16 >>> 0 ? i171 : 16;
        i171 = i158 >>> 0 > i157 >>> 0 ? i158 : i157;
        do {
         if (i170 >>> 0 < i171 >>> 0) {
          if (i171 >>> 0 > 4 >>> 0) {
           if (i171 >>> 0 > 1073741823 >>> 0) {
            i141 = 312;
            break L1;
           }
           i158 = __ZN3WTF18fastMallocGoodSizeEj(i171 << 2) | 0;
           HEAP32[i70 >> 2] = i158 >>> 2;
           i165 = __ZN3WTF10fastMallocEj(i158) | 0;
           HEAP32[i69 >> 2] = i165;
           i242 = i165;
          } else {
           HEAP32[i69 >> 2] = i28;
           HEAP32[i70 >> 2] = 4;
           i242 = i28;
          }
          i165 = i144;
          _memcpy(i242 | 0, i165 | 0, i170 << 2) | 0;
          if ((i28 | 0) == (i144 | 0) | (i144 | 0) == 0) {
           break;
          }
          if ((HEAP32[i69 >> 2] | 0) == (i144 | 0)) {
           HEAP32[i69 >> 2] = 0;
           HEAP32[i70 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i165);
         }
        } while (0);
        i240 = i44;
        i241 = HEAP32[i69 >> 2] | 0;
       }
       HEAP32[i241 + (HEAP32[i71 >> 2] << 2) >> 2] = HEAP32[i240 >> 2];
       i243 = HEAP32[i71 >> 2] | 0;
      } else {
       HEAP32[(HEAP32[i69 >> 2] | 0) + (i170 << 2) >> 2] = HEAP32[i44 >> 2];
       i243 = HEAP32[i71 >> 2] | 0;
      }
      HEAP32[i71 >> 2] = i243 + 1;
      i144 = HEAP32[i44 >> 2] | 0;
      HEAP32[i90 >> 2] = i144;
      HEAP32[i91 >> 2] = -1;
      i171 = HEAP32[i144 + 80 >> 2] | 0;
      i157 = HEAP32[i144 + 68 >> 2] | 0;
      i144 = 0;
      while (1) {
       if (i144 >>> 0 >= i157 >>> 0) {
        break;
       }
       i165 = i171 + (i144 << 4) | 0;
       if ((HEAP32[i165 >> 2] & 0 | 0) == 0 & (HEAP32[i165 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
        i144 = i144 + 1 | 0;
       } else {
        break;
       }
      }
      HEAP32[i91 >> 2] = i144;
      i171 = HEAP32[i74 >> 2] | 0;
      if ((i171 | 0) == (HEAP32[i73 >> 2] | 0)) {
       i157 = i171 + 1 | 0;
       i170 = HEAP32[i72 >> 2] | 0;
       do {
        if (i170 >>> 0 > i46 >>> 0) {
         i141 = 339;
        } else {
         if ((i170 + (i171 << 3) | 0) >>> 0 <= i46 >>> 0) {
          i141 = 339;
          break;
         }
         i165 = i157 + (i171 >>> 2) | 0;
         i158 = i165 >>> 0 > 16 >>> 0 ? i165 : 16;
         __ZN3WTF6VectorIN3JSC7MapData14const_iteratorELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i30, i158 >>> 0 > i157 >>> 0 ? i158 : i157);
         i158 = HEAP32[i72 >> 2] | 0;
         i244 = i158 + (i92 - i170 >> 3 << 3) | 0;
         i245 = i158;
        }
       } while (0);
       if ((i141 | 0) == 339) {
        i141 = 0;
        i170 = i157 + (i171 >>> 2) | 0;
        i144 = i170 >>> 0 > 16 >>> 0 ? i170 : 16;
        __ZN3WTF6VectorIN3JSC7MapData14const_iteratorELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i30, i144 >>> 0 > i157 >>> 0 ? i144 : i157);
        i244 = i46;
        i245 = HEAP32[i72 >> 2] | 0;
       }
       i144 = i244;
       i170 = i245 + (HEAP32[i74 >> 2] << 3) | 0;
       i158 = HEAP32[i144 + 4 >> 2] | 0;
       HEAP32[i170 >> 2] = HEAP32[i144 >> 2];
       HEAP32[i170 + 4 >> 2] = i158;
       i246 = HEAP32[i74 >> 2] | 0;
      } else {
       i158 = (HEAP32[i72 >> 2] | 0) + (i171 << 3) | 0;
       i170 = HEAP32[i45 + 4 >> 2] | 0;
       HEAP32[i158 >> 2] = HEAP32[i45 >> 2];
       HEAP32[i158 + 4 >> 2] = i170;
       i246 = HEAP32[i74 >> 2] | 0;
      }
      HEAP32[i74 >> 2] = i246 + 1;
      i170 = (HEAP32[i90 >> 2] | 0) + 76 | 0;
      HEAP32[i170 >> 2] = (HEAP32[i170 >> 2] | 0) - 1;
      i170 = HEAP32[i68 >> 2] | 0;
      if ((i170 | 0) != (HEAP32[i67 >> 2] | 0)) {
       HEAP32[(HEAP32[i66 >> 2] | 0) + (i170 << 2) >> 2] = i154;
       HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 1;
       i152 = -5;
       i153 = i156;
       i141 = 412;
       continue L47;
      }
      i158 = i170 + 1 | 0;
      i144 = i158 + (i170 >>> 2) | 0;
      i165 = i144 >>> 0 > 16 >>> 0 ? i144 : 16;
      i144 = i165 >>> 0 > i158 >>> 0 ? i165 : i158;
      do {
       if (i170 >>> 0 < i144 >>> 0) {
        i158 = HEAP32[i66 >> 2] | 0;
        if (i144 >>> 0 > 32 >>> 0) {
         if (i144 >>> 0 > 1073741823 >>> 0) {
          i141 = 347;
          break L1;
         }
         i165 = __ZN3WTF18fastMallocGoodSizeEj(i144 << 2) | 0;
         HEAP32[i67 >> 2] = i165 >>> 2;
         i224 = __ZN3WTF10fastMallocEj(i165) | 0;
         HEAP32[i66 >> 2] = i224;
         i247 = i224;
        } else {
         HEAP32[i66 >> 2] = i65;
         HEAP32[i67 >> 2] = 32;
         i247 = i65;
        }
        i224 = i158;
        _memcpy(i247 | 0, i224 | 0, i170 << 2) | 0;
        if ((i65 | 0) == (i158 | 0) | (i158 | 0) == 0) {
         break;
        }
        if ((HEAP32[i66 >> 2] | 0) == (i158 | 0)) {
         HEAP32[i66 >> 2] = 0;
         HEAP32[i67 >> 2] = 0;
        }
        __ZN3WTF8fastFreeEPv(i224);
       }
      } while (0);
      HEAP32[(HEAP32[i66 >> 2] | 0) + (HEAP32[i68 >> 2] << 2) >> 2] = i154;
      HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 1;
      i152 = -5;
      i153 = i156;
      i141 = 412;
      continue L47;
     }
    } while (0);
    if (!i160) {
     i146 = -5;
     i147 = i156;
     i141 = 164;
     continue;
    }
    i145 = i156;
    if ((HEAP32[(i156 & -65536) + 1048 >> 2] | 0) == 2) {
     i248 = i145 + 8 | 0;
    } else {
     i248 = (HEAP32[i145 >> 2] | 0) + 32 | 0;
    }
    i145 = HEAP32[i248 >> 2] | 0;
    if ((i145 | 0) == 0) {
     i146 = -5;
     i147 = i156;
     i141 = 164;
     continue;
    } else {
     i249 = i145;
    }
    while (1) {
     if ((i249 | 0) == (__ZN3JSC5JSSet6s_infoE | 0)) {
      break;
     }
     i145 = HEAP32[i249 + 4 >> 2] | 0;
     if ((i145 | 0) == 0) {
      i146 = -5;
      i147 = i156;
      i141 = 164;
      continue L47;
     } else {
      i249 = i145;
     }
    }
    if ((HEAP32[i68 >> 2] | 0) >>> 0 > 4e4 >>> 0) {
     i168 = 1;
     break L1;
    }
    i160 = i156;
    i145 = i160 | 0;
    if (__ZN7WebCore15CloneSerializer17checkForDuplicateEPN3JSC8JSObjectE(i1, i145) | 0) {
     i166 = -5;
     i167 = i156;
     i141 = 553;
     continue;
    }
    HEAP32[i7 >> 2] = i145;
    HEAP32[i8 >> 2] = HEAP32[i2 >> 2];
    __ZN3WTF9HashTableIPN3JSC8JSObjectENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_iEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i9, i79, i7, i8);
    i170 = HEAP32[i7 >> 2] | 0;
    i144 = (i170 | 0) == 0;
    i171 = HEAP32[i81 >> 2] | 0;
    i157 = (i144 ? 0 : 0) | i170;
    i170 = (i144 ? -6 : -5) | 0;
    if ((i171 | 0) < (HEAP32[i82 >> 2] | 0)) {
     i144 = (HEAP32[i83 >> 2] | 0) + (i171 << 3) | 0;
     HEAP32[i144 >> 2] = i157;
     HEAP32[i144 + 4 >> 2] = i170;
     HEAP32[i81 >> 2] = (HEAP32[i81 >> 2] | 0) + 1;
    } else {
     HEAP32[i100 >> 2] = i157;
     HEAP32[i100 + 4 >> 2] = i170;
     __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i80, i6);
    }
    __ZN7WebCore15CloneSerializer5writeENS_16SerializationTagE(i1, 29);
    i170 = HEAP32[i160 + 8 >> 2] | 0;
    HEAP32[i47 >> 2] = i170;
    i160 = (i170 | 0) == 0;
    i157 = HEAP32[i81 >> 2] | 0;
    i144 = (i160 ? 0 : 0) | i170;
    i170 = (i160 ? -6 : -5) | 0;
    if ((i157 | 0) < (HEAP32[i82 >> 2] | 0)) {
     i160 = (HEAP32[i83 >> 2] | 0) + (i157 << 3) | 0;
     HEAP32[i160 >> 2] = i144;
     HEAP32[i160 + 4 >> 2] = i170;
     HEAP32[i81 >> 2] = (HEAP32[i81 >> 2] | 0) + 1;
    } else {
     HEAP32[i99 >> 2] = i144;
     HEAP32[i99 + 4 >> 2] = i170;
     __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i80, i5);
    }
    i170 = HEAP32[i71 >> 2] | 0;
    if ((i170 | 0) == (HEAP32[i70 >> 2] | 0)) {
     i144 = i170 + 1 | 0;
     i160 = HEAP32[i69 >> 2] | 0;
     do {
      if (i160 >>> 0 > i47 >>> 0) {
       i141 = 366;
      } else {
       if ((i160 + (i170 << 2) | 0) >>> 0 <= i47 >>> 0) {
        i141 = 366;
        break;
       }
       i157 = i95 - i160 >> 2;
       i171 = i144 + (i170 >>> 2) | 0;
       i224 = i171 >>> 0 > 16 >>> 0 ? i171 : 16;
       i171 = i224 >>> 0 > i144 >>> 0 ? i224 : i144;
       do {
        if (i170 >>> 0 < i171 >>> 0) {
         if (i171 >>> 0 > 4 >>> 0) {
          if (i171 >>> 0 > 1073741823 >>> 0) {
           i141 = 380;
           break L1;
          }
          i224 = __ZN3WTF18fastMallocGoodSizeEj(i171 << 2) | 0;
          HEAP32[i70 >> 2] = i224 >>> 2;
          i158 = __ZN3WTF10fastMallocEj(i224) | 0;
          HEAP32[i69 >> 2] = i158;
          i250 = i158;
         } else {
          HEAP32[i69 >> 2] = i28;
          HEAP32[i70 >> 2] = 4;
          i250 = i28;
         }
         i158 = i160;
         _memcpy(i250 | 0, i158 | 0, i170 << 2) | 0;
         if ((i28 | 0) == (i160 | 0) | (i160 | 0) == 0) {
          break;
         }
         if ((HEAP32[i69 >> 2] | 0) == (i160 | 0)) {
          HEAP32[i69 >> 2] = 0;
          HEAP32[i70 >> 2] = 0;
         }
         __ZN3WTF8fastFreeEPv(i158);
        }
       } while (0);
       i171 = HEAP32[i69 >> 2] | 0;
       i251 = i171 + (i157 << 2) | 0;
       i252 = i171;
      }
     } while (0);
     if ((i141 | 0) == 366) {
      i141 = 0;
      i171 = i144 + (i170 >>> 2) | 0;
      i154 = i171 >>> 0 > 16 >>> 0 ? i171 : 16;
      i171 = i154 >>> 0 > i144 >>> 0 ? i154 : i144;
      do {
       if (i170 >>> 0 < i171 >>> 0) {
        if (i171 >>> 0 > 4 >>> 0) {
         if (i171 >>> 0 > 1073741823 >>> 0) {
          i141 = 369;
          break L1;
         }
         i154 = __ZN3WTF18fastMallocGoodSizeEj(i171 << 2) | 0;
         HEAP32[i70 >> 2] = i154 >>> 2;
         i158 = __ZN3WTF10fastMallocEj(i154) | 0;
         HEAP32[i69 >> 2] = i158;
         i253 = i158;
        } else {
         HEAP32[i69 >> 2] = i28;
         HEAP32[i70 >> 2] = 4;
         i253 = i28;
        }
        i158 = i160;
        _memcpy(i253 | 0, i158 | 0, i170 << 2) | 0;
        if ((i28 | 0) == (i160 | 0) | (i160 | 0) == 0) {
         break;
        }
        if ((HEAP32[i69 >> 2] | 0) == (i160 | 0)) {
         HEAP32[i69 >> 2] = 0;
         HEAP32[i70 >> 2] = 0;
        }
        __ZN3WTF8fastFreeEPv(i158);
       }
      } while (0);
      i251 = i47;
      i252 = HEAP32[i69 >> 2] | 0;
     }
     HEAP32[i252 + (HEAP32[i71 >> 2] << 2) >> 2] = HEAP32[i251 >> 2];
     i254 = HEAP32[i71 >> 2] | 0;
    } else {
     HEAP32[(HEAP32[i69 >> 2] | 0) + (i170 << 2) >> 2] = HEAP32[i47 >> 2];
     i254 = HEAP32[i71 >> 2] | 0;
    }
    HEAP32[i71 >> 2] = i254 + 1;
    i160 = HEAP32[i47 >> 2] | 0;
    HEAP32[i96 >> 2] = i160;
    HEAP32[i97 >> 2] = -1;
    i171 = HEAP32[i160 + 80 >> 2] | 0;
    i144 = HEAP32[i160 + 68 >> 2] | 0;
    i160 = 0;
    while (1) {
     if (i160 >>> 0 >= i144 >>> 0) {
      break;
     }
     i158 = i171 + (i160 << 4) | 0;
     if ((HEAP32[i158 >> 2] & 0 | 0) == 0 & (HEAP32[i158 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
      i160 = i160 + 1 | 0;
     } else {
      break;
     }
    }
    HEAP32[i97 >> 2] = i160;
    i171 = HEAP32[i74 >> 2] | 0;
    if ((i171 | 0) == (HEAP32[i73 >> 2] | 0)) {
     i144 = i171 + 1 | 0;
     i170 = HEAP32[i72 >> 2] | 0;
     do {
      if (i170 >>> 0 > i49 >>> 0) {
       i141 = 396;
      } else {
       if ((i170 + (i171 << 3) | 0) >>> 0 <= i49 >>> 0) {
        i141 = 396;
        break;
       }
       i158 = i144 + (i171 >>> 2) | 0;
       i154 = i158 >>> 0 > 16 >>> 0 ? i158 : 16;
       __ZN3WTF6VectorIN3JSC7MapData14const_iteratorELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i30, i154 >>> 0 > i144 >>> 0 ? i154 : i144);
       i154 = HEAP32[i72 >> 2] | 0;
       i255 = i154 + (i98 - i170 >> 3 << 3) | 0;
       i256 = i154;
      }
     } while (0);
     if ((i141 | 0) == 396) {
      i141 = 0;
      i170 = i144 + (i171 >>> 2) | 0;
      i160 = i170 >>> 0 > 16 >>> 0 ? i170 : 16;
      __ZN3WTF6VectorIN3JSC7MapData14const_iteratorELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i30, i160 >>> 0 > i144 >>> 0 ? i160 : i144);
      i255 = i49;
      i256 = HEAP32[i72 >> 2] | 0;
     }
     i160 = i255;
     i170 = i256 + (HEAP32[i74 >> 2] << 3) | 0;
     i154 = HEAP32[i160 + 4 >> 2] | 0;
     HEAP32[i170 >> 2] = HEAP32[i160 >> 2];
     HEAP32[i170 + 4 >> 2] = i154;
     i257 = HEAP32[i74 >> 2] | 0;
    } else {
     i154 = (HEAP32[i72 >> 2] | 0) + (i171 << 3) | 0;
     i170 = HEAP32[i48 + 4 >> 2] | 0;
     HEAP32[i154 >> 2] = HEAP32[i48 >> 2];
     HEAP32[i154 + 4 >> 2] = i170;
     i257 = HEAP32[i74 >> 2] | 0;
    }
    HEAP32[i74 >> 2] = i257 + 1;
    i170 = (HEAP32[i96 >> 2] | 0) + 76 | 0;
    HEAP32[i170 >> 2] = (HEAP32[i170 >> 2] | 0) - 1;
    i170 = HEAP32[i68 >> 2] | 0;
    if ((i170 | 0) != (HEAP32[i67 >> 2] | 0)) {
     HEAP32[(HEAP32[i66 >> 2] | 0) + (i170 << 2) >> 2] = i145;
     HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 1;
     i152 = -5;
     i153 = i156;
     i141 = 412;
     continue;
    }
    i154 = i170 + 1 | 0;
    i160 = i154 + (i170 >>> 2) | 0;
    i158 = i160 >>> 0 > 16 >>> 0 ? i160 : 16;
    i160 = i158 >>> 0 > i154 >>> 0 ? i158 : i154;
    do {
     if (i170 >>> 0 < i160 >>> 0) {
      i154 = HEAP32[i66 >> 2] | 0;
      if (i160 >>> 0 > 32 >>> 0) {
       if (i160 >>> 0 > 1073741823 >>> 0) {
        i141 = 404;
        break L1;
       }
       i158 = __ZN3WTF18fastMallocGoodSizeEj(i160 << 2) | 0;
       HEAP32[i67 >> 2] = i158 >>> 2;
       i224 = __ZN3WTF10fastMallocEj(i158) | 0;
       HEAP32[i66 >> 2] = i224;
       i258 = i224;
      } else {
       HEAP32[i66 >> 2] = i65;
       HEAP32[i67 >> 2] = 32;
       i258 = i65;
      }
      i224 = i154;
      _memcpy(i258 | 0, i224 | 0, i170 << 2) | 0;
      if ((i65 | 0) == (i154 | 0) | (i154 | 0) == 0) {
       break;
      }
      if ((HEAP32[i66 >> 2] | 0) == (i154 | 0)) {
       HEAP32[i66 >> 2] = 0;
       HEAP32[i67 >> 2] = 0;
      }
      __ZN3WTF8fastFreeEPv(i224);
     }
    } while (0);
    HEAP32[(HEAP32[i66 >> 2] | 0) + (HEAP32[i68 >> 2] << 2) >> 2] = i145;
    HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 1;
    i152 = -5;
    i153 = i156;
    i141 = 412;
    continue;
   } else if ((i141 | 0) == 553) {
    i141 = 0;
    i259 = HEAP32[i78 >> 2] | 0;
    if ((i259 | 0) == 0) {
     i141 = 557;
     break L1;
    } else {
     break;
    }
   }
  }
  i170 = _llvm_uadd_with_overflow_i32(i259 | 0, -1 | 0) | 0;
  if (!tempRet0) {
   i141 = 555;
   break;
  }
  i160 = i170;
  i170 = HEAP32[i76 >> 2] | 0;
  i171 = HEAP32[i170 + (i160 << 2) >> 2] | 0;
  HEAP32[i78 >> 2] = i160;
  i135 = i171;
  i136 = i166;
  i137 = i167;
  i31 = i160;
  i138 = i170;
 }
 if ((i141 | 0) == 17) {
  _WTFCrash();
  return 0;
 } else if ((i141 | 0) == 30) {
  _WTFCrash();
  return 0;
 } else if ((i141 | 0) == 45) {
  _WTFCrash();
  return 0;
 } else if ((i141 | 0) == 56) {
  _WTFCrash();
  return 0;
 } else if ((i141 | 0) == 68) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i141 | 0) == 70) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i141 | 0) == 73) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i141 | 0) == 75) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i141 | 0) == 96) {
  _WTFCrash();
  return 0;
 } else if ((i141 | 0) == 98) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i141 | 0) == 100) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i141 | 0) == 107) {
  _WTFCrash();
  return 0;
 } else if ((i141 | 0) == 116) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i141 | 0) == 122) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i141 | 0) == 126) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i141 | 0) == 131) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i141 | 0) == 141) {
  _WTFCrash();
  return 0;
 } else if ((i141 | 0) == 152) {
  _WTFCrash();
  return 0;
 } else if ((i141 | 0) == 162) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i141 | 0) == 180) {
  _WTFCrash();
  return 0;
 } else if ((i141 | 0) == 191) {
  _WTFCrash();
  return 0;
 } else if ((i141 | 0) == 205) {
  _WTFCrash();
  return 0;
 } else if ((i141 | 0) == 233) {
  _WTFCrash();
  return 0;
 } else if ((i141 | 0) == 235) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i141 | 0) == 240) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i141 | 0) == 242) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i141 | 0) == 245) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i141 | 0) == 247) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i141 | 0) == 249) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i141 | 0) == 256) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i141 | 0) == 260) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i141 | 0) == 263) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i141 | 0) == 273) {
  _WTFCrash();
  return 0;
 } else if ((i141 | 0) == 284) {
  _WTFCrash();
  return 0;
 } else if ((i141 | 0) == 296) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i141 | 0) == 312) {
  _WTFCrash();
  return 0;
 } else if ((i141 | 0) == 323) {
  _WTFCrash();
  return 0;
 } else if ((i141 | 0) == 347) {
  _WTFCrash();
  return 0;
 } else if ((i141 | 0) == 369) {
  _WTFCrash();
  return 0;
 } else if ((i141 | 0) == 380) {
  _WTFCrash();
  return 0;
 } else if ((i141 | 0) == 404) {
  _WTFCrash();
  return 0;
 } else if ((i141 | 0) == 413) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i141 | 0) == 415) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i141 | 0) == 420) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i141 | 0) == 422) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i141 | 0) == 424) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i141 | 0) == 445) {
  _WTFCrash();
  return 0;
 } else if ((i141 | 0) == 447) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i141 | 0) == 453) {
  _WTFCrash();
  return 0;
 } else if ((i141 | 0) == 468) {
  _WTFCrash();
  return 0;
 } else if ((i141 | 0) == 479) {
  _WTFCrash();
  return 0;
 } else if ((i141 | 0) == 489) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i141 | 0) == 497) {
  _WTFCrash();
  return 0;
 } else if ((i141 | 0) == 508) {
  _WTFCrash();
  return 0;
 } else if ((i141 | 0) == 518) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i141 | 0) == 555) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i141 | 0) == 557) {
  i168 = (HEAP8[i1 + 4 | 0] & 1) == 0 ? 0 : 6;
 } else if ((i141 | 0) == 595) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i141 | 0) == 596) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i141 | 0) == 597) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i141 | 0) == 598) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 if ((HEAP32[i78 >> 2] | 0) != 0) {
  HEAP32[i78 >> 2] = 0;
 }
 i78 = HEAP32[i76 >> 2] | 0;
 if (!((i75 | 0) == (i78 | 0) | (i78 | 0) == 0)) {
  HEAP32[i76 >> 2] = 0;
  HEAP32[i77 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i78);
 }
 i78 = HEAP32[i74 >> 2] | 0;
 if ((i78 | 0) != 0) {
  i77 = HEAP32[i72 >> 2] | 0;
  i76 = i77 + (i78 << 3) | 0;
  i78 = i77;
  while (1) {
   i77 = (HEAP32[i78 >> 2] | 0) + 76 | 0;
   HEAP32[i77 >> 2] = (HEAP32[i77 >> 2] | 0) - 1;
   i78 = i78 + 8 | 0;
   if ((i78 | 0) == (i76 | 0)) {
    break;
   }
  }
  HEAP32[i74 >> 2] = 0;
 }
 i74 = HEAP32[i72 >> 2] | 0;
 if (!((i29 | 0) == (i74 | 0) | (i74 | 0) == 0)) {
  HEAP32[i72 >> 2] = 0;
  HEAP32[i73 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i74);
 }
 if ((HEAP32[i71 >> 2] | 0) != 0) {
  HEAP32[i71 >> 2] = 0;
 }
 i71 = HEAP32[i69 >> 2] | 0;
 if (!((i28 | 0) == (i71 | 0) | (i71 | 0) == 0)) {
  HEAP32[i69 >> 2] = 0;
  HEAP32[i70 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i71);
 }
 if ((HEAP32[i68 >> 2] | 0) != 0) {
  HEAP32[i68 >> 2] = 0;
 }
 i68 = HEAP32[i66 >> 2] | 0;
 if (!((i65 | 0) == (i68 | 0) | (i68 | 0) == 0)) {
  HEAP32[i66 >> 2] = 0;
  HEAP32[i67 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i68);
 }
 i68 = HEAP32[i64 >> 2] | 0;
 if ((i68 | 0) != 0) {
  i67 = HEAP32[i62 >> 2] | 0;
  i66 = i67 + (i68 * 36 & -1) | 0;
  i68 = i67;
  while (1) {
   i67 = HEAP32[i68 + 4 >> 2] | 0;
   if ((i67 | 0) != 0) {
    __ZN3WTF8fastFreeEPv(i67);
   }
   i67 = HEAP32[i68 >> 2] | 0;
   if ((i67 | 0) != 0) {
    __ZN3WTF10RefCountedIN3JSC21PropertyNameArrayDataEE5derefEv(i67 | 0);
   }
   i68 = i68 + 36 | 0;
   if ((i68 | 0) == (i66 | 0)) {
    break;
   }
  }
  HEAP32[i64 >> 2] = 0;
 }
 i64 = HEAP32[i62 >> 2] | 0;
 if (!((i26 | 0) == (i64 | 0) | (i64 | 0) == 0)) {
  HEAP32[i62 >> 2] = 0;
  HEAP32[i63 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i64);
 }
 if ((HEAP32[i61 >> 2] | 0) != 0) {
  HEAP32[i61 >> 2] = 0;
 }
 i61 = HEAP32[i59 >> 2] | 0;
 if (!((i25 | 0) == (i61 | 0) | (i61 | 0) == 0)) {
  HEAP32[i59 >> 2] = 0;
  HEAP32[i60 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i61);
 }
 if ((HEAP32[i58 >> 2] | 0) != 0) {
  HEAP32[i58 >> 2] = 0;
 }
 i58 = HEAP32[i56 >> 2] | 0;
 if ((i55 | 0) == (i58 | 0) | (i58 | 0) == 0) {
  STACKTOP = i3;
  return i168 | 0;
 }
 HEAP32[i56 >> 2] = 0;
 HEAP32[i57 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i58);
 STACKTOP = i3;
 return i168 | 0;
}
function __ZN7WebCore17CloneDeserializer11deserializeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0, i112 = 0, i113 = 0, i114 = 0, i115 = 0, i116 = 0, i117 = 0, i118 = 0, i119 = 0, i120 = 0, i121 = 0, i122 = 0, i123 = 0, i124 = 0, i125 = 0, d126 = +0, d127 = +0, i128 = 0, i129 = 0, i130 = 0, i131 = 0, i132 = 0, i133 = 0, i134 = 0, i135 = 0, i136 = 0, i137 = 0, i138 = 0, i139 = 0, i140 = 0, i141 = 0, i142 = 0, i143 = 0, i144 = 0, i145 = 0, i146 = 0, i147 = 0, i148 = 0, i149 = 0, i150 = 0, i151 = 0, i152 = 0, i153 = 0, i154 = 0, i155 = 0, i156 = 0, i157 = 0, i158 = 0, i159 = 0, i160 = 0, i161 = 0, i162 = 0, i163 = 0, i164 = 0, i165 = 0, i166 = 0, i167 = 0, i168 = 0, i169 = 0, i170 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 712 | 0;
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
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 i19 = i3 + 192 | 0;
 i20 = i3 + 272 | 0;
 i21 = i3 + 416 | 0;
 i22 = i3 + 464 | 0;
 i23 = i3 + 496 | 0;
 i24 = i3 + 576 | 0;
 i25 = i3 + 584 | 0;
 i26 = i3 + 592 | 0;
 i27 = i3 + 600 | 0;
 i28 = i3 + 608 | 0;
 i29 = i3 + 616 | 0;
 i30 = i3 + 624 | 0;
 i31 = i3 + 632 | 0;
 i32 = i3 + 640 | 0;
 i33 = i3 + 648 | 0;
 i34 = i3 + 656 | 0;
 i35 = i3 + 664 | 0;
 i36 = i3 + 672 | 0;
 i37 = i3 + 680 | 0;
 i38 = i3 + 688 | 0;
 i39 = i3 + 696 | 0;
 i40 = i3 + 704 | 0;
 i41 = i18 + 12 | 0;
 i42 = i18 | 0;
 HEAP32[i42 >> 2] = i41;
 i43 = i18 + 4 | 0;
 HEAP32[i43 >> 2] = 16;
 i44 = i18 + 8 | 0;
 HEAP32[i44 >> 2] = 0;
 i18 = i19 + 12 | 0;
 i45 = i19 | 0;
 HEAP32[i45 >> 2] = i18;
 i46 = i19 + 4 | 0;
 HEAP32[i46 >> 2] = 16;
 i47 = i19 + 8 | 0;
 HEAP32[i47 >> 2] = 0;
 i48 = i20 + 12 | 0;
 i49 = i20 | 0;
 HEAP32[i49 >> 2] = i48;
 i50 = i20 + 4 | 0;
 HEAP32[i50 >> 2] = 32;
 i51 = i20 + 8 | 0;
 HEAP32[i51 >> 2] = 0;
 i20 = i21 + 16 | 0;
 i52 = i21 | 0;
 HEAP32[i52 >> 2] = i20;
 i53 = i21 + 4 | 0;
 HEAP32[i53 >> 2] = 4;
 i54 = i21 + 8 | 0;
 HEAP32[i54 >> 2] = 0;
 i55 = i22 + 12 | 0;
 i56 = i22 | 0;
 HEAP32[i56 >> 2] = i55;
 i57 = i22 + 4 | 0;
 HEAP32[i57 >> 2] = 4;
 i58 = i22 + 8 | 0;
 HEAP32[i58 >> 2] = 0;
 i22 = i23 + 12 | 0;
 i59 = i23 | 0;
 HEAP32[i59 >> 2] = i22;
 i60 = i23 + 4 | 0;
 HEAP32[i60 >> 2] = 16;
 i61 = i23 + 8 | 0;
 HEAP32[i61 >> 2] = 0;
 HEAP32[i24 + 4 >> 2] = -6;
 HEAP32[i24 >> 2] = 0;
 i23 = i2 + 4 | 0;
 i62 = i2 + 96 | 0;
 i63 = i2 + 100 | 0;
 i64 = i2 | 0;
 i65 = i2 + 88 | 0;
 i66 = i2 + 8 | 0;
 i67 = i66 | 0;
 i68 = i2 + 12 | 0;
 i69 = i2 + 80 | 0;
 i70 = i17 | 0;
 i71 = i40 + 4 | 0;
 i72 = i34;
 i73 = i5 | 0;
 i74 = i35;
 i75 = i4 | 0;
 i76 = i40 | 0;
 i77 = i24 | 0;
 i78 = i28;
 i79 = i12 | 0;
 i80 = i36;
 i81 = i14 | 0;
 i82 = i13 | 0;
 i83 = i6 | 0;
 i84 = i7 | 0;
 i85 = i24;
 i86 = i37;
 i87 = i38 + 4 | 0;
 i88 = i38;
 i89 = i38 | 0;
 i90 = i39 | 0;
 i91 = i26 + 4 | 0;
 i92 = i26 | 0;
 i93 = i16 | 0;
 i94 = i15 | 0;
 i95 = i25;
 i96 = i27;
 i97 = i29 | 0;
 i98 = i29 + 4 | 0;
 i99 = i31 + 4 | 0;
 i100 = i11 | 0;
 i101 = i31 | 0;
 i102 = i9 | 0;
 i103 = i10 | 0;
 i104 = i32;
 i105 = i8 | 0;
 i106 = i33 | 0;
 i107 = 0;
 L1 : while (1) {
  L3 : do {
   switch (i107 | 0) {
   case 1:
    {
     i108 = 3;
     break;
    }
   case 2:
    {
     i108 = 22;
     break;
    }
   case 3:
    {
     i109 = _llvm_uadd_with_overflow_i32(HEAP32[i51 >> 2] | 0, -1 | 0) | 0;
     if (!tempRet0) {
      i108 = 96;
      break L1;
     }
     i110 = HEAP32[(HEAP32[i49 >> 2] | 0) + (i109 << 2) >> 2] | 0;
     i109 = _llvm_uadd_with_overflow_i32(HEAP32[i44 >> 2] | 0, -1 | 0) | 0;
     if (!tempRet0) {
      i108 = 98;
      break L1;
     }
     i111 = HEAP32[(HEAP32[i42 >> 2] | 0) + (i109 << 2) >> 2] | 0;
     i109 = HEAP32[i77 >> 2] | 0;
     i112 = HEAP32[i77 + 4 >> 2] | 0;
     i113 = HEAP32[i64 >> 2] | 0;
     L7 : do {
      switch (HEAP8[(HEAP32[i110 >> 2] | 0) + 55 | 0] & 31 | 0) {
      case 20:
      case 21:
      case 22:
      case 23:
      case 26:
      case 27:
      case 28:
      case 30:
      case 29:
      case 31:
       {
        if ((HEAP32[(HEAP32[i110 + 4 >> 2] | 0) - 4 >> 2] | 0) >>> 0 <= i111 >>> 0) {
         i108 = 103;
         break L7;
        }
        i114 = HEAP32[(HEAP32[i113 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
        HEAP32[i82 >> 2] = i109;
        HEAP32[i82 + 4 >> 2] = i112;
        __ZN3JSC8JSObject15setIndexQuicklyERNS_2VMEjNS_7JSValueE(i110, i114, i111, i13);
        break;
       }
      case 0:
      case 1:
      case 3:
       {
        i108 = 103;
        break;
       }
      default:
       {
        i108 = 100;
        break L1;
       }
      }
     } while (0);
     if ((i108 | 0) == 103) {
      i108 = 0;
      HEAP32[i81 >> 2] = i109;
      HEAP32[i81 + 4 >> 2] = i112;
      __ZN3JSC8JSObject32putDirectIndexBeyondVectorLengthEPNS_9ExecStateEjNS_7JSValueEjNS_18PutDirectIndexModeE(i110, i113, i111, i14, 0, 0) | 0;
     }
     i114 = HEAP32[i44 >> 2] | 0;
     if ((i114 | 0) == 0) {
      i108 = 105;
      break L1;
     }
     HEAP32[i44 >> 2] = i114 - 1;
     i108 = 22;
     break;
    }
   case 4:
    {
     i108 = 107;
     break;
    }
   case 5:
    {
     i108 = 145;
     break;
    }
   case 6:
    {
     i114 = _llvm_uadd_with_overflow_i32(HEAP32[i51 >> 2] | 0, -1 | 0) | 0;
     if (!tempRet0) {
      i108 = 205;
      break L1;
     }
     i115 = _llvm_uadd_with_overflow_i32(HEAP32[i47 >> 2] | 0, -1 | 0) | 0;
     if (!tempRet0) {
      i108 = 207;
      break L1;
     }
     i116 = HEAP32[(HEAP32[i49 >> 2] | 0) + (i114 << 2) >> 2] | 0;
     i114 = HEAP32[i77 >> 2] | 0;
     i117 = HEAP32[i77 + 4 >> 2] | 0;
     i118 = HEAP32[i64 >> 2] | 0;
     HEAP32[i83 >> 2] = HEAP32[(HEAP32[i45 >> 2] | 0) + (i115 << 2) >> 2];
     HEAP32[i84 >> 2] = i114;
     HEAP32[i84 + 4 >> 2] = i117;
     __ZN3JSC8JSObject19putDirectMayBeIndexEPNS_9ExecStateENS_12PropertyNameENS_7JSValueE(i116, i118, i6, i7);
     i118 = HEAP32[i47 >> 2] | 0;
     if ((i118 | 0) == 0) {
      i108 = 209;
      break L1;
     }
     i116 = i118 - 1 | 0;
     i118 = HEAP32[(HEAP32[i45 >> 2] | 0) + (i116 << 2) >> 2] | 0;
     do {
      if ((i118 | 0) != 0) {
       i117 = i118 | 0;
       i114 = (HEAP32[i117 >> 2] | 0) - 2 | 0;
       if ((i114 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i118);
        break;
       } else {
        HEAP32[i117 >> 2] = i114;
        break;
       }
      }
     } while (0);
     HEAP32[i47 >> 2] = i116;
     i108 = 145;
     break;
    }
   case 7:
    {
     i108 = 309;
     break;
    }
   case 8:
    {
     i118 = HEAP32[i54 >> 2] | 0;
     if ((i118 | 0) == (HEAP32[i53 >> 2] | 0)) {
      i111 = i118 + 1 | 0;
      i113 = HEAP32[i52 >> 2] | 0;
      do {
       if (i113 >>> 0 > i24 >>> 0) {
        i108 = 345;
       } else {
        if ((i113 + (i118 << 3) | 0) >>> 0 <= i24 >>> 0) {
         i108 = 345;
         break;
        }
        i110 = i111 + (i118 >>> 2) | 0;
        i112 = i110 >>> 0 > 16 >>> 0 ? i110 : 16;
        __ZN3WTF6VectorIN3JSC7JSValueELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i21, i112 >>> 0 > i111 >>> 0 ? i112 : i111);
        i112 = HEAP32[i52 >> 2] | 0;
        i119 = i112 + (i85 - i113 >> 3 << 3) | 0;
        i120 = i112;
       }
      } while (0);
      if ((i108 | 0) == 345) {
       i108 = 0;
       i113 = i111 + (i118 >>> 2) | 0;
       i116 = i113 >>> 0 > 16 >>> 0 ? i113 : 16;
       __ZN3WTF6VectorIN3JSC7JSValueELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i21, i116 >>> 0 > i111 >>> 0 ? i116 : i111);
       i119 = i24;
       i120 = HEAP32[i52 >> 2] | 0;
      }
      i116 = i119 | 0;
      i113 = i120 + (HEAP32[i54 >> 2] << 3) | 0;
      i112 = HEAP32[i116 + 4 >> 2] | 0;
      HEAP32[i113 >> 2] = HEAP32[i116 >> 2];
      HEAP32[i113 + 4 >> 2] = i112;
      i121 = HEAP32[i54 >> 2] | 0;
     } else {
      i112 = (HEAP32[i52 >> 2] | 0) + (i118 << 3) | 0;
      i113 = HEAP32[i77 + 4 >> 2] | 0;
      HEAP32[i112 >> 2] = HEAP32[i77 >> 2];
      HEAP32[i112 + 4 >> 2] = i113;
      i121 = HEAP32[i54 >> 2] | 0;
     }
     HEAP32[i54 >> 2] = i121 + 1;
     HEAP32[i37 >> 2] = 9;
     i113 = HEAP32[i61 >> 2] | 0;
     if ((i113 | 0) != (HEAP32[i60 >> 2] | 0)) {
      HEAP32[(HEAP32[i59 >> 2] | 0) + (i113 << 2) >> 2] = 9;
      HEAP32[i61 >> 2] = (HEAP32[i61 >> 2] | 0) + 1;
      i108 = 390;
      break L3;
     }
     i112 = i113 + 1 | 0;
     i116 = HEAP32[i59 >> 2] | 0;
     do {
      if (i116 >>> 0 > i37 >>> 0) {
       i108 = 352;
      } else {
       if ((i116 + (i113 << 2) | 0) >>> 0 <= i37 >>> 0) {
        i108 = 352;
        break;
       }
       i110 = i86 - i116 >> 2;
       i109 = i112 + (i113 >>> 2) | 0;
       i114 = i109 >>> 0 > 16 >>> 0 ? i109 : 16;
       i109 = i114 >>> 0 > i112 >>> 0 ? i114 : i112;
       do {
        if (i113 >>> 0 < i109 >>> 0) {
         if (i109 >>> 0 > 16 >>> 0) {
          if (i109 >>> 0 > 1073741823 >>> 0) {
           i108 = 366;
           break L1;
          }
          i114 = __ZN3WTF18fastMallocGoodSizeEj(i109 << 2) | 0;
          HEAP32[i60 >> 2] = i114 >>> 2;
          i117 = __ZN3WTF10fastMallocEj(i114) | 0;
          HEAP32[i59 >> 2] = i117;
          i122 = i117;
         } else {
          HEAP32[i59 >> 2] = i22;
          HEAP32[i60 >> 2] = 16;
          i122 = i22;
         }
         i117 = i116;
         _memcpy(i122 | 0, i117 | 0, i113 << 2) | 0;
         if ((i22 | 0) == (i116 | 0) | (i116 | 0) == 0) {
          break;
         }
         if ((HEAP32[i59 >> 2] | 0) == (i116 | 0)) {
          HEAP32[i59 >> 2] = 0;
          HEAP32[i60 >> 2] = 0;
         }
         __ZN3WTF8fastFreeEPv(i117);
        }
       } while (0);
       i109 = HEAP32[i59 >> 2] | 0;
       i123 = i109 + (i110 << 2) | 0;
       i124 = i109;
      }
     } while (0);
     if ((i108 | 0) == 352) {
      i108 = 0;
      i118 = i112 + (i113 >>> 2) | 0;
      i111 = i118 >>> 0 > 16 >>> 0 ? i118 : 16;
      i118 = i111 >>> 0 > i112 >>> 0 ? i111 : i112;
      do {
       if (i113 >>> 0 < i118 >>> 0) {
        if (i118 >>> 0 > 16 >>> 0) {
         if (i118 >>> 0 > 1073741823 >>> 0) {
          i108 = 355;
          break L1;
         }
         i111 = __ZN3WTF18fastMallocGoodSizeEj(i118 << 2) | 0;
         HEAP32[i60 >> 2] = i111 >>> 2;
         i109 = __ZN3WTF10fastMallocEj(i111) | 0;
         HEAP32[i59 >> 2] = i109;
         i125 = i109;
        } else {
         HEAP32[i59 >> 2] = i22;
         HEAP32[i60 >> 2] = 16;
         i125 = i22;
        }
        i109 = i116;
        _memcpy(i125 | 0, i109 | 0, i113 << 2) | 0;
        if ((i22 | 0) == (i116 | 0) | (i116 | 0) == 0) {
         break;
        }
        if ((HEAP32[i59 >> 2] | 0) == (i116 | 0)) {
         HEAP32[i59 >> 2] = 0;
         HEAP32[i60 >> 2] = 0;
        }
        __ZN3WTF8fastFreeEPv(i109);
       }
      } while (0);
      i123 = i37;
      i124 = HEAP32[i59 >> 2] | 0;
     }
     HEAP32[i124 + (HEAP32[i61 >> 2] << 2) >> 2] = HEAP32[i123 >> 2];
     HEAP32[i61 >> 2] = (HEAP32[i61 >> 2] | 0) + 1;
     i108 = 390;
     break;
    }
   case 9:
    {
     i116 = _llvm_uadd_with_overflow_i32(HEAP32[i58 >> 2] | 0, -1 | 0) | 0;
     if (!tempRet0) {
      i108 = 376;
      break L1;
     }
     i113 = HEAP32[(HEAP32[i56 >> 2] | 0) + (i116 << 2) >> 2] | 0;
     i116 = HEAP32[i64 >> 2] | 0;
     i118 = _llvm_uadd_with_overflow_i32(HEAP32[i54 >> 2] | 0, -1 | 0) | 0;
     if (!tempRet0) {
      i108 = 378;
      break L1;
     }
     i112 = (HEAP32[i52 >> 2] | 0) + (i118 << 3) | 0;
     i118 = HEAP32[i112 >> 2] | 0;
     i109 = HEAP32[i112 + 4 >> 2] | 0;
     d126 = +HEAPF64[i112 >> 3];
     HEAP32[i87 >> 2] = -6;
     HEAP32[i88 >> 2] = 0;
     L71 : do {
      if (i109 >>> 0 < 4294967289 >>> 0) {
       d127 = d126;
       i112 = i109 & 2147483647;
       i111 = 2146435072;
       do {
        if (!(i112 >>> 0 > i111 >>> 0 | i112 >>> 0 == i111 >>> 0 & (i118 & -1) >>> 0 > 0 >>> 0)) {
         i117 = 0;
         if (((i109 | 0) < (i117 | 0) | (i109 | 0) == (i117 | 0) & i118 >>> 0 < 0 >>> 0) & d127 == +0) {
          break;
         }
         i117 = ~~d127;
         if (+(i117 | 0) != d127) {
          HEAP32[i89 >> 2] = i118;
          HEAP32[i89 + 4 >> 2] = i109;
          break L71;
         } else {
          HEAP32[i89 >> 2] = i117;
          HEAP32[i89 + 4 >> 2] = -1;
          break L71;
         }
        }
       } while (0);
       HEAP32[i89 >> 2] = i118;
       HEAP32[i89 + 4 >> 2] = i109;
      } else {
       HEAP32[i89 >> 2] = i118;
       HEAP32[i89 + 4 >> 2] = i109;
      }
     } while (0);
     i109 = HEAP32[i77 + 4 >> 2] | 0;
     HEAP32[i90 >> 2] = HEAP32[i77 >> 2];
     HEAP32[i90 + 4 >> 2] = i109;
     __ZN3JSC7MapData3setEPNS_9ExecStateENS0_7KeyTypeENS_7JSValueE(i113, i116, i38, i39);
     i109 = HEAP32[i54 >> 2] | 0;
     if ((i109 | 0) == 0) {
      i108 = 388;
      break L1;
     }
     HEAP32[i54 >> 2] = i109 - 1;
     i108 = 309;
     break;
    }
   case 0:
    {
     i108 = 390;
     break;
    }
   default:
    {
     i108 = 396;
    }
   }
  } while (0);
  L83 : while (1) {
   if ((i108 | 0) == 3) {
    i108 = 0;
    if ((HEAP8[i23] & 1) != 0) {
     i108 = 5;
     break L1;
    }
    i109 = HEAP32[i62 >> 2] | 0;
    if (i109 >>> 0 > ((HEAP32[i63 >> 2] | 0) - 4 | 0) >>> 0) {
     i108 = 5;
     break L1;
    }
    i118 = i109 + 1 | 0;
    HEAP32[i62 >> 2] = i118;
    i111 = HEAPU8[i109] | 0;
    i112 = i109 + 2 | 0;
    HEAP32[i62 >> 2] = i112;
    i110 = HEAPU8[i118] << 8 | i111;
    i111 = i109 + 3 | 0;
    HEAP32[i62 >> 2] = i111;
    i118 = i110 | HEAPU8[i112] << 16;
    HEAP32[i62 >> 2] = i109 + 4;
    i109 = i118 | HEAPU8[i111] << 24;
    i111 = HEAP32[i65 >> 2] | 0;
    i118 = __ZN3JSC7JSArray6createERNS_2VMEPNS_9StructureEj(HEAP32[(HEAP32[(HEAP32[i64 >> 2] | 0) + 16 >> 2] & -65536) + 1076 >> 2] | 0, HEAP32[(i109 >>> 0 > 99999 >>> 0 ? i111 + 296 | 0 : i111 + 244 | 0) >> 2] | 0, i109) | 0;
    i109 = (i118 | 0) == 0;
    i111 = HEAP32[i67 >> 2] | 0;
    i112 = (i109 ? 0 : 0) | i118;
    i110 = (i109 ? -6 : -5) | 0;
    if ((i111 | 0) < (HEAP32[i68 >> 2] | 0)) {
     i109 = (HEAP32[i69 >> 2] | 0) + (i111 << 3) | 0;
     HEAP32[i109 >> 2] = i112;
     HEAP32[i109 + 4 >> 2] = i110;
     HEAP32[i67 >> 2] = (HEAP32[i67 >> 2] | 0) + 1;
    } else {
     HEAP32[i70 >> 2] = i112;
     HEAP32[i70 + 4 >> 2] = i110;
     __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i66, i17);
    }
    i110 = HEAP32[i51 >> 2] | 0;
    if ((i110 | 0) != (HEAP32[i50 >> 2] | 0)) {
     HEAP32[(HEAP32[i49 >> 2] | 0) + (i110 << 2) >> 2] = i118;
     HEAP32[i51 >> 2] = (HEAP32[i51 >> 2] | 0) + 1;
     i108 = 22;
     continue;
    }
    i112 = i110 + 1 | 0;
    i109 = i112 + (i110 >>> 2) | 0;
    i111 = i109 >>> 0 > 16 >>> 0 ? i109 : 16;
    i109 = i111 >>> 0 > i112 >>> 0 ? i111 : i112;
    do {
     if (i110 >>> 0 < i109 >>> 0) {
      i112 = HEAP32[i49 >> 2] | 0;
      if (i109 >>> 0 > 32 >>> 0) {
       if (i109 >>> 0 > 1073741823 >>> 0) {
        i108 = 14;
        break L1;
       }
       i111 = __ZN3WTF18fastMallocGoodSizeEj(i109 << 2) | 0;
       HEAP32[i50 >> 2] = i111 >>> 2;
       i117 = __ZN3WTF10fastMallocEj(i111) | 0;
       HEAP32[i49 >> 2] = i117;
       i128 = i117;
      } else {
       HEAP32[i49 >> 2] = i48;
       HEAP32[i50 >> 2] = 32;
       i128 = i48;
      }
      i117 = i112;
      _memcpy(i128 | 0, i117 | 0, i110 << 2) | 0;
      if ((i48 | 0) == (i112 | 0) | (i112 | 0) == 0) {
       break;
      }
      if ((HEAP32[i49 >> 2] | 0) == (i112 | 0)) {
       HEAP32[i49 >> 2] = 0;
       HEAP32[i50 >> 2] = 0;
      }
      __ZN3WTF8fastFreeEPv(i117);
     }
    } while (0);
    HEAP32[(HEAP32[i49 >> 2] | 0) + (HEAP32[i51 >> 2] << 2) >> 2] = i118;
    HEAP32[i51 >> 2] = (HEAP32[i51 >> 2] | 0) + 1;
    i108 = 22;
    continue;
   } else if ((i108 | 0) == 22) {
    i108 = 0;
    if ((HEAP8[i23] & 1) != 0) {
     i108 = 24;
     break L1;
    }
    while (1) {
     i110 = HEAP32[i62 >> 2] | 0;
     if (i110 >>> 0 > ((HEAP32[i63 >> 2] | 0) - 4 | 0) >>> 0) {
      i108 = 24;
      break L1;
     }
     HEAP32[i25 >> 2] = 0;
     i109 = i110 + 1 | 0;
     HEAP32[i62 >> 2] = i109;
     i116 = HEAPU8[i110] | 0;
     HEAP32[i25 >> 2] = i116;
     i113 = i110 + 2 | 0;
     HEAP32[i62 >> 2] = i113;
     i117 = HEAPU8[i109] << 8 | i116;
     HEAP32[i25 >> 2] = i117;
     i116 = i110 + 3 | 0;
     HEAP32[i62 >> 2] = i116;
     i109 = HEAPU8[i113] << 16 | i117;
     HEAP32[i25 >> 2] = i109;
     HEAP32[i62 >> 2] = i110 + 4;
     i110 = HEAPU8[i116] << 24 | i109;
     HEAP32[i25 >> 2] = i110;
     if ((i110 | 0) == (-1 | 0)) {
      i108 = 26;
      break;
     } else if ((i110 | 0) == (-3 | 0)) {
      i108 = 145;
      continue L83;
     }
     __ZN7WebCore17CloneDeserializer12readTerminalEv(i26, i2);
     if ((HEAP32[i91 >> 2] | 0) == -6) {
      break;
     }
     i110 = _llvm_uadd_with_overflow_i32(HEAP32[i51 >> 2] | 0, -1 | 0) | 0;
     if (!tempRet0) {
      i108 = 33;
      break L1;
     }
     i109 = HEAP32[(HEAP32[i49 >> 2] | 0) + (i110 << 2) >> 2] | 0;
     i110 = HEAP32[i25 >> 2] | 0;
     i116 = HEAP32[i92 >> 2] | 0;
     i117 = HEAP32[i92 + 4 >> 2] | 0;
     i113 = HEAP32[i64 >> 2] | 0;
     L114 : do {
      switch (HEAP8[(HEAP32[i109 >> 2] | 0) + 55 | 0] & 31 | 0) {
      case 20:
      case 21:
      case 22:
      case 23:
      case 26:
      case 27:
      case 28:
      case 30:
      case 29:
      case 31:
       {
        if ((HEAP32[(HEAP32[i109 + 4 >> 2] | 0) - 4 >> 2] | 0) >>> 0 <= i110 >>> 0) {
         i108 = 39;
         break L114;
        }
        i112 = HEAP32[(HEAP32[i113 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
        HEAP32[i94 >> 2] = i116;
        HEAP32[i94 + 4 >> 2] = i117;
        __ZN3JSC8JSObject15setIndexQuicklyERNS_2VMEjNS_7JSValueE(i109, i112, i110, i15);
        break;
       }
      case 0:
      case 1:
      case 3:
       {
        i108 = 39;
        break;
       }
      default:
       {
        i108 = 35;
        break L1;
       }
      }
     } while (0);
     if ((i108 | 0) == 39) {
      i108 = 0;
      HEAP32[i93 >> 2] = i116;
      HEAP32[i93 + 4 >> 2] = i117;
      __ZN3JSC8JSObject32putDirectIndexBeyondVectorLengthEPNS_9ExecStateEjNS_7JSValueEjNS_18PutDirectIndexModeE(i109, i113, i110, i16, 0, 0) | 0;
     }
     if ((HEAP8[i23] & 1) != 0) {
      i108 = 24;
      break L1;
     }
    }
    if ((i108 | 0) == 26) {
     i108 = 0;
     i118 = HEAP32[i51 >> 2] | 0;
     i112 = _llvm_uadd_with_overflow_i32(i118 | 0, -1 | 0) | 0;
     if (!tempRet0) {
      i108 = 27;
      break L1;
     }
     i111 = HEAP32[(HEAP32[i49 >> 2] | 0) + (i112 << 2) >> 2] | 0;
     i112 = (i111 | 0) == 0;
     HEAP32[i77 >> 2] = (i112 ? 0 : 0) | i111;
     HEAP32[i77 + 4 >> 2] = i112 ? -6 : -5;
     if ((i118 | 0) == 0) {
      i108 = 29;
      break L1;
     }
     HEAP32[i51 >> 2] = i118 - 1;
     i108 = 396;
     continue;
    }
    if ((HEAP8[i23] & 1) != 0) {
     i108 = 401;
     break L1;
    }
    i118 = HEAP32[i44 >> 2] | 0;
    if ((i118 | 0) == (HEAP32[i43 >> 2] | 0)) {
     i112 = i118 + 1 | 0;
     i111 = HEAP32[i42 >> 2] | 0;
     do {
      if (i111 >>> 0 > i25 >>> 0) {
       i108 = 45;
      } else {
       if ((i111 + (i118 << 2) | 0) >>> 0 <= i25 >>> 0) {
        i108 = 45;
        break;
       }
       i114 = i95 - i111 >> 2;
       i115 = i112 + (i118 >>> 2) | 0;
       i129 = i115 >>> 0 > 16 >>> 0 ? i115 : 16;
       i115 = i129 >>> 0 > i112 >>> 0 ? i129 : i112;
       do {
        if (i118 >>> 0 < i115 >>> 0) {
         if (i115 >>> 0 > 16 >>> 0) {
          if (i115 >>> 0 > 1073741823 >>> 0) {
           i108 = 59;
           break L1;
          }
          i129 = __ZN3WTF18fastMallocGoodSizeEj(i115 << 2) | 0;
          HEAP32[i43 >> 2] = i129 >>> 2;
          i130 = __ZN3WTF10fastMallocEj(i129) | 0;
          HEAP32[i42 >> 2] = i130;
          i131 = i130;
         } else {
          HEAP32[i42 >> 2] = i41;
          HEAP32[i43 >> 2] = 16;
          i131 = i41;
         }
         i130 = i111;
         _memcpy(i131 | 0, i130 | 0, i118 << 2) | 0;
         if ((i41 | 0) == (i111 | 0) | (i111 | 0) == 0) {
          break;
         }
         if ((HEAP32[i42 >> 2] | 0) == (i111 | 0)) {
          HEAP32[i42 >> 2] = 0;
          HEAP32[i43 >> 2] = 0;
         }
         __ZN3WTF8fastFreeEPv(i130);
        }
       } while (0);
       i115 = HEAP32[i42 >> 2] | 0;
       i132 = i115 + (i114 << 2) | 0;
       i133 = i115;
      }
     } while (0);
     if ((i108 | 0) == 45) {
      i108 = 0;
      i115 = i112 + (i118 >>> 2) | 0;
      i110 = i115 >>> 0 > 16 >>> 0 ? i115 : 16;
      i115 = i110 >>> 0 > i112 >>> 0 ? i110 : i112;
      do {
       if (i118 >>> 0 < i115 >>> 0) {
        if (i115 >>> 0 > 16 >>> 0) {
         if (i115 >>> 0 > 1073741823 >>> 0) {
          i108 = 48;
          break L1;
         }
         i110 = __ZN3WTF18fastMallocGoodSizeEj(i115 << 2) | 0;
         HEAP32[i43 >> 2] = i110 >>> 2;
         i113 = __ZN3WTF10fastMallocEj(i110) | 0;
         HEAP32[i42 >> 2] = i113;
         i134 = i113;
        } else {
         HEAP32[i42 >> 2] = i41;
         HEAP32[i43 >> 2] = 16;
         i134 = i41;
        }
        i113 = i111;
        _memcpy(i134 | 0, i113 | 0, i118 << 2) | 0;
        if ((i41 | 0) == (i111 | 0) | (i111 | 0) == 0) {
         break;
        }
        if ((HEAP32[i42 >> 2] | 0) == (i111 | 0)) {
         HEAP32[i42 >> 2] = 0;
         HEAP32[i43 >> 2] = 0;
        }
        __ZN3WTF8fastFreeEPv(i113);
       }
      } while (0);
      i132 = i25;
      i133 = HEAP32[i42 >> 2] | 0;
     }
     HEAP32[i133 + (HEAP32[i44 >> 2] << 2) >> 2] = HEAP32[i132 >> 2];
     i135 = HEAP32[i44 >> 2] | 0;
    } else {
     HEAP32[(HEAP32[i42 >> 2] | 0) + (i118 << 2) >> 2] = HEAP32[i25 >> 2];
     i135 = HEAP32[i44 >> 2] | 0;
    }
    HEAP32[i44 >> 2] = i135 + 1;
    HEAP32[i27 >> 2] = 3;
    i111 = HEAP32[i61 >> 2] | 0;
    if ((i111 | 0) != (HEAP32[i60 >> 2] | 0)) {
     HEAP32[(HEAP32[i59 >> 2] | 0) + (i111 << 2) >> 2] = 3;
     HEAP32[i61 >> 2] = (HEAP32[i61 >> 2] | 0) + 1;
     i108 = 390;
     continue;
    }
    i115 = i111 + 1 | 0;
    i112 = HEAP32[i59 >> 2] | 0;
    do {
     if (i112 >>> 0 > i27 >>> 0) {
      i108 = 72;
     } else {
      if ((i112 + (i111 << 2) | 0) >>> 0 <= i27 >>> 0) {
       i108 = 72;
       break;
      }
      i113 = i96 - i112 >> 2;
      i110 = i115 + (i111 >>> 2) | 0;
      i109 = i110 >>> 0 > 16 >>> 0 ? i110 : 16;
      i110 = i109 >>> 0 > i115 >>> 0 ? i109 : i115;
      do {
       if (i111 >>> 0 < i110 >>> 0) {
        if (i110 >>> 0 > 16 >>> 0) {
         if (i110 >>> 0 > 1073741823 >>> 0) {
          i108 = 86;
          break L1;
         }
         i109 = __ZN3WTF18fastMallocGoodSizeEj(i110 << 2) | 0;
         HEAP32[i60 >> 2] = i109 >>> 2;
         i117 = __ZN3WTF10fastMallocEj(i109) | 0;
         HEAP32[i59 >> 2] = i117;
         i136 = i117;
        } else {
         HEAP32[i59 >> 2] = i22;
         HEAP32[i60 >> 2] = 16;
         i136 = i22;
        }
        i117 = i112;
        _memcpy(i136 | 0, i117 | 0, i111 << 2) | 0;
        if ((i22 | 0) == (i112 | 0) | (i112 | 0) == 0) {
         break;
        }
        if ((HEAP32[i59 >> 2] | 0) == (i112 | 0)) {
         HEAP32[i59 >> 2] = 0;
         HEAP32[i60 >> 2] = 0;
        }
        __ZN3WTF8fastFreeEPv(i117);
       }
      } while (0);
      i110 = HEAP32[i59 >> 2] | 0;
      i137 = i110 + (i113 << 2) | 0;
      i138 = i110;
     }
    } while (0);
    if ((i108 | 0) == 72) {
     i108 = 0;
     i118 = i115 + (i111 >>> 2) | 0;
     i110 = i118 >>> 0 > 16 >>> 0 ? i118 : 16;
     i118 = i110 >>> 0 > i115 >>> 0 ? i110 : i115;
     do {
      if (i111 >>> 0 < i118 >>> 0) {
       if (i118 >>> 0 > 16 >>> 0) {
        if (i118 >>> 0 > 1073741823 >>> 0) {
         i108 = 75;
         break L1;
        }
        i110 = __ZN3WTF18fastMallocGoodSizeEj(i118 << 2) | 0;
        HEAP32[i60 >> 2] = i110 >>> 2;
        i114 = __ZN3WTF10fastMallocEj(i110) | 0;
        HEAP32[i59 >> 2] = i114;
        i139 = i114;
       } else {
        HEAP32[i59 >> 2] = i22;
        HEAP32[i60 >> 2] = 16;
        i139 = i22;
       }
       i114 = i112;
       _memcpy(i139 | 0, i114 | 0, i111 << 2) | 0;
       if ((i22 | 0) == (i112 | 0) | (i112 | 0) == 0) {
        break;
       }
       if ((HEAP32[i59 >> 2] | 0) == (i112 | 0)) {
        HEAP32[i59 >> 2] = 0;
        HEAP32[i60 >> 2] = 0;
       }
       __ZN3WTF8fastFreeEPv(i114);
      }
     } while (0);
     i137 = i27;
     i138 = HEAP32[i59 >> 2] | 0;
    }
    HEAP32[i138 + (HEAP32[i61 >> 2] << 2) >> 2] = HEAP32[i137 >> 2];
    HEAP32[i61 >> 2] = (HEAP32[i61 >> 2] | 0) + 1;
    i108 = 390;
    continue;
   } else if ((i108 | 0) == 107) {
    i108 = 0;
    if ((HEAP32[i51 >> 2] | 0) >>> 0 > 4e4 >>> 0) {
     i108 = 108;
     break L1;
    }
    i112 = (HEAP32[i64 >> 2] | 0) + 16 | 0;
    i111 = __ZN3JSC12PrototypeMap32emptyObjectStructureForPrototypeEPNS_8JSObjectEj((HEAP32[(HEAP32[(HEAP32[(HEAP32[HEAP32[i112 >> 2] >> 2] | 0) + 4 >> 2] & -65536) + 1076 >> 2] | 0) + 20544 >> 2] | 0) + 24544 | 0, HEAP32[(HEAP32[i65 >> 2] | 0) + 136 >> 2] | 0, 7) | 0;
    i118 = HEAP32[(HEAP32[i112 >> 2] & -65536) + 1076 >> 2] | 0;
    i112 = HEAPU8[i111 + 56 | 0] | 0;
    i115 = (i112 << 3) + 8 | 0;
    if (i115 >>> 0 < 129 >>> 0) {
     i140 = i118 + 13176 + (i112 * 44 & -1) | 0;
    } else {
     i140 = i118 + 13880 + ((i112 >>> 5) * 44 & -1) | 0;
    }
    i112 = i140 | 0;
    i118 = HEAP32[i112 >> 2] | 0;
    if ((i118 | 0) == 0) {
     i141 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i140, i115) | 0;
    } else {
     HEAP32[i112 >> 2] = HEAP32[i118 >> 2];
     i141 = i118;
    }
    HEAP32[i141 >> 2] = i111;
    HEAP32[i141 + 4 >> 2] = 0;
    HEAP32[i28 >> 2] = i141;
    i111 = (i141 | 0) == 0;
    i118 = HEAP32[i67 >> 2] | 0;
    i112 = (i111 ? 0 : 0) | i141;
    i115 = (i111 ? -6 : -5) | 0;
    if ((i118 | 0) < (HEAP32[i68 >> 2] | 0)) {
     i111 = (HEAP32[i69 >> 2] | 0) + (i118 << 3) | 0;
     HEAP32[i111 >> 2] = i112;
     HEAP32[i111 + 4 >> 2] = i115;
     HEAP32[i67 >> 2] = (HEAP32[i67 >> 2] | 0) + 1;
    } else {
     HEAP32[i79 >> 2] = i112;
     HEAP32[i79 + 4 >> 2] = i115;
     __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i66, i12);
    }
    i115 = HEAP32[i51 >> 2] | 0;
    if ((i115 | 0) != (HEAP32[i50 >> 2] | 0)) {
     HEAP32[(HEAP32[i49 >> 2] | 0) + (i115 << 2) >> 2] = HEAP32[i28 >> 2];
     HEAP32[i51 >> 2] = (HEAP32[i51 >> 2] | 0) + 1;
     i108 = 145;
     continue;
    }
    i112 = i115 + 1 | 0;
    i111 = HEAP32[i49 >> 2] | 0;
    do {
     if (i111 >>> 0 > i28 >>> 0) {
      i108 = 122;
     } else {
      if ((i111 + (i115 << 2) | 0) >>> 0 <= i28 >>> 0) {
       i108 = 122;
       break;
      }
      i118 = i78 - i111 >> 2;
      i114 = i112 + (i115 >>> 2) | 0;
      i110 = i114 >>> 0 > 16 >>> 0 ? i114 : 16;
      i114 = i110 >>> 0 > i112 >>> 0 ? i110 : i112;
      do {
       if (i115 >>> 0 < i114 >>> 0) {
        if (i114 >>> 0 > 32 >>> 0) {
         if (i114 >>> 0 > 1073741823 >>> 0) {
          i108 = 136;
          break L1;
         }
         i110 = __ZN3WTF18fastMallocGoodSizeEj(i114 << 2) | 0;
         HEAP32[i50 >> 2] = i110 >>> 2;
         i117 = __ZN3WTF10fastMallocEj(i110) | 0;
         HEAP32[i49 >> 2] = i117;
         i142 = i117;
        } else {
         HEAP32[i49 >> 2] = i48;
         HEAP32[i50 >> 2] = 32;
         i142 = i48;
        }
        i117 = i111;
        _memcpy(i142 | 0, i117 | 0, i115 << 2) | 0;
        if ((i48 | 0) == (i111 | 0) | (i111 | 0) == 0) {
         break;
        }
        if ((HEAP32[i49 >> 2] | 0) == (i111 | 0)) {
         HEAP32[i49 >> 2] = 0;
         HEAP32[i50 >> 2] = 0;
        }
        __ZN3WTF8fastFreeEPv(i117);
       }
      } while (0);
      i114 = HEAP32[i49 >> 2] | 0;
      i143 = i114 + (i118 << 2) | 0;
      i144 = i114;
     }
    } while (0);
    if ((i108 | 0) == 122) {
     i108 = 0;
     i114 = i112 + (i115 >>> 2) | 0;
     i113 = i114 >>> 0 > 16 >>> 0 ? i114 : 16;
     i114 = i113 >>> 0 > i112 >>> 0 ? i113 : i112;
     do {
      if (i115 >>> 0 < i114 >>> 0) {
       if (i114 >>> 0 > 32 >>> 0) {
        if (i114 >>> 0 > 1073741823 >>> 0) {
         i108 = 125;
         break L1;
        }
        i113 = __ZN3WTF18fastMallocGoodSizeEj(i114 << 2) | 0;
        HEAP32[i50 >> 2] = i113 >>> 2;
        i117 = __ZN3WTF10fastMallocEj(i113) | 0;
        HEAP32[i49 >> 2] = i117;
        i145 = i117;
       } else {
        HEAP32[i49 >> 2] = i48;
        HEAP32[i50 >> 2] = 32;
        i145 = i48;
       }
       i117 = i111;
       _memcpy(i145 | 0, i117 | 0, i115 << 2) | 0;
       if ((i48 | 0) == (i111 | 0) | (i111 | 0) == 0) {
        break;
       }
       if ((HEAP32[i49 >> 2] | 0) == (i111 | 0)) {
        HEAP32[i49 >> 2] = 0;
        HEAP32[i50 >> 2] = 0;
       }
       __ZN3WTF8fastFreeEPv(i117);
      }
     } while (0);
     i143 = i28;
     i144 = HEAP32[i49 >> 2] | 0;
    }
    HEAP32[i144 + (HEAP32[i51 >> 2] << 2) >> 2] = HEAP32[i143 >> 2];
    HEAP32[i51 >> 2] = (HEAP32[i51 >> 2] | 0) + 1;
    i108 = 145;
    continue;
   } else if ((i108 | 0) == 145) {
    i108 = 0;
    HEAP32[i97 >> 2] = 0;
    HEAP32[i98 >> 2] = 0;
    HEAP8[i30] = 0;
    L241 : do {
     if (__ZN7WebCore17CloneDeserializer14readStringDataERNS0_15CachedStringRefERb(i2, i29, i30) | 0) {
      while (1) {
       __ZN7WebCore17CloneDeserializer12readTerminalEv(i31, i2);
       if ((HEAP32[i99 >> 2] | 0) == -6) {
        break;
       }
       i111 = _llvm_uadd_with_overflow_i32(HEAP32[i51 >> 2] | 0, -1 | 0) | 0;
       if (!tempRet0) {
        i108 = 154;
        break L1;
       }
       i115 = HEAP32[(HEAP32[i49 >> 2] | 0) + (i111 << 2) >> 2] | 0;
       i111 = HEAP32[i97 >> 2] | 0;
       i114 = HEAP32[i98 >> 2] | 0;
       if ((HEAP32[i111 + 8 >> 2] | 0) >>> 0 <= i114 >>> 0) {
        i108 = 156;
        break L1;
       }
       i112 = HEAP32[(HEAP32[i111 >> 2] | 0) + (i114 << 4) >> 2] | 0;
       if ((HEAP32[i112 + 16 >> 2] & 4 | 0) == 0) {
        __ZN3JSC10Identifier11addSlowCaseEPNS_9ExecStateEPN3WTF10StringImplE(i11, HEAP32[i64 >> 2] | 0, i112);
       } else {
        HEAP32[i100 >> 2] = i112;
        i114 = i112 | 0;
        HEAP32[i114 >> 2] = (HEAP32[i114 >> 2] | 0) + 2;
       }
       i114 = HEAP32[i100 >> 2] | 0;
       i112 = HEAP32[i101 >> 2] | 0;
       i111 = HEAP32[i101 + 4 >> 2] | 0;
       i117 = HEAP32[i64 >> 2] | 0;
       HEAP32[i102 >> 2] = i114;
       HEAP32[i103 >> 2] = i112;
       HEAP32[i103 + 4 >> 2] = i111;
       __ZN3JSC8JSObject19putDirectMayBeIndexEPNS_9ExecStateENS_12PropertyNameENS_7JSValueE(i115, i117, i9, i10);
       do {
        if ((i114 | 0) != 0) {
         i117 = i114 | 0;
         i115 = (HEAP32[i117 >> 2] | 0) - 2 | 0;
         if ((i115 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i114);
          break;
         } else {
          HEAP32[i117 >> 2] = i115;
          break;
         }
        }
       } while (0);
       HEAP32[i97 >> 2] = 0;
       HEAP32[i98 >> 2] = 0;
       HEAP8[i30] = 0;
       if (!(__ZN7WebCore17CloneDeserializer14readStringDataERNS0_15CachedStringRefERb(i2, i29, i30) | 0)) {
        break L241;
       }
      }
      HEAP32[i32 >> 2] = 6;
      i118 = HEAP32[i61 >> 2] | 0;
      if ((i118 | 0) == (HEAP32[i60 >> 2] | 0)) {
       i114 = i118 + 1 | 0;
       i115 = HEAP32[i59 >> 2] | 0;
       do {
        if (i115 >>> 0 > i32 >>> 0) {
         i108 = 169;
        } else {
         if ((i115 + (i118 << 2) | 0) >>> 0 <= i32 >>> 0) {
          i108 = 169;
          break;
         }
         i117 = i104 - i115 >> 2;
         i111 = i114 + (i118 >>> 2) | 0;
         i112 = i111 >>> 0 > 16 >>> 0 ? i111 : 16;
         i111 = i112 >>> 0 > i114 >>> 0 ? i112 : i114;
         do {
          if (i118 >>> 0 < i111 >>> 0) {
           if (i111 >>> 0 > 16 >>> 0) {
            if (i111 >>> 0 > 1073741823 >>> 0) {
             i108 = 183;
             break L1;
            }
            i112 = __ZN3WTF18fastMallocGoodSizeEj(i111 << 2) | 0;
            HEAP32[i60 >> 2] = i112 >>> 2;
            i113 = __ZN3WTF10fastMallocEj(i112) | 0;
            HEAP32[i59 >> 2] = i113;
            i146 = i113;
           } else {
            HEAP32[i59 >> 2] = i22;
            HEAP32[i60 >> 2] = 16;
            i146 = i22;
           }
           i113 = i115;
           _memcpy(i146 | 0, i113 | 0, i118 << 2) | 0;
           if ((i22 | 0) == (i115 | 0) | (i115 | 0) == 0) {
            break;
           }
           if ((HEAP32[i59 >> 2] | 0) == (i115 | 0)) {
            HEAP32[i59 >> 2] = 0;
            HEAP32[i60 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i113);
          }
         } while (0);
         i111 = HEAP32[i59 >> 2] | 0;
         i147 = i111 + (i117 << 2) | 0;
         i148 = i111;
        }
       } while (0);
       if ((i108 | 0) == 169) {
        i108 = 0;
        i111 = i114 + (i118 >>> 2) | 0;
        i113 = i111 >>> 0 > 16 >>> 0 ? i111 : 16;
        i111 = i113 >>> 0 > i114 >>> 0 ? i113 : i114;
        do {
         if (i118 >>> 0 < i111 >>> 0) {
          if (i111 >>> 0 > 16 >>> 0) {
           if (i111 >>> 0 > 1073741823 >>> 0) {
            i108 = 172;
            break L1;
           }
           i113 = __ZN3WTF18fastMallocGoodSizeEj(i111 << 2) | 0;
           HEAP32[i60 >> 2] = i113 >>> 2;
           i112 = __ZN3WTF10fastMallocEj(i113) | 0;
           HEAP32[i59 >> 2] = i112;
           i149 = i112;
          } else {
           HEAP32[i59 >> 2] = i22;
           HEAP32[i60 >> 2] = 16;
           i149 = i22;
          }
          i112 = i115;
          _memcpy(i149 | 0, i112 | 0, i118 << 2) | 0;
          if ((i22 | 0) == (i115 | 0) | (i115 | 0) == 0) {
           break;
          }
          if ((HEAP32[i59 >> 2] | 0) == (i115 | 0)) {
           HEAP32[i59 >> 2] = 0;
           HEAP32[i60 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i112);
         }
        } while (0);
        i147 = i32;
        i148 = HEAP32[i59 >> 2] | 0;
       }
       HEAP32[i148 + (HEAP32[i61 >> 2] << 2) >> 2] = HEAP32[i147 >> 2];
       i150 = HEAP32[i61 >> 2] | 0;
      } else {
       HEAP32[(HEAP32[i59 >> 2] | 0) + (i118 << 2) >> 2] = 6;
       i150 = HEAP32[i61 >> 2] | 0;
      }
      HEAP32[i61 >> 2] = i150 + 1;
      i115 = HEAP32[i97 >> 2] | 0;
      i111 = HEAP32[i98 >> 2] | 0;
      if ((HEAP32[i115 + 8 >> 2] | 0) >>> 0 <= i111 >>> 0) {
       i108 = 193;
       break L1;
      }
      i114 = HEAP32[(HEAP32[i115 >> 2] | 0) + (i111 << 4) >> 2] | 0;
      if ((HEAP32[i114 + 16 >> 2] & 4 | 0) == 0) {
       __ZN3JSC10Identifier11addSlowCaseEPNS_9ExecStateEPN3WTF10StringImplE(i8, HEAP32[i64 >> 2] | 0, i114);
      } else {
       HEAP32[i105 >> 2] = i114;
       i111 = i114 | 0;
       HEAP32[i111 >> 2] = (HEAP32[i111 >> 2] | 0) + 2;
      }
      i111 = HEAP32[i105 >> 2] | 0;
      HEAP32[i106 >> 2] = i111;
      i114 = HEAP32[i47 >> 2] | 0;
      if ((i114 | 0) == (HEAP32[i46 >> 2] | 0)) {
       __ZN3WTF6VectorIN3JSC10IdentifierELj16ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i19, i33);
      } else {
       i115 = HEAP32[i45 >> 2] | 0;
       HEAP32[i106 >> 2] = 0;
       HEAP32[i115 + (i114 << 2) >> 2] = i111;
       HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
      }
      i111 = HEAP32[i106 >> 2] | 0;
      if ((i111 | 0) == 0) {
       i108 = 390;
       continue L83;
      }
      i114 = i111 | 0;
      i115 = (HEAP32[i114 >> 2] | 0) - 2 | 0;
      if ((i115 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i111);
       i108 = 390;
       continue L83;
      } else {
       HEAP32[i114 >> 2] = i115;
       i108 = 390;
       continue L83;
      }
     }
    } while (0);
    if ((HEAP8[i30] & 1) == 0) {
     i108 = 401;
     break L1;
    }
    i115 = HEAP32[i51 >> 2] | 0;
    i114 = _llvm_uadd_with_overflow_i32(i115 | 0, -1 | 0) | 0;
    if (!tempRet0) {
     i108 = 148;
     break L1;
    }
    i111 = HEAP32[(HEAP32[i49 >> 2] | 0) + (i114 << 2) >> 2] | 0;
    i114 = (i111 | 0) == 0;
    HEAP32[i77 >> 2] = (i114 ? 0 : 0) | i111;
    HEAP32[i77 + 4 >> 2] = i114 ? -6 : -5;
    if ((i115 | 0) == 0) {
     i108 = 150;
     break L1;
    }
    HEAP32[i51 >> 2] = i115 - 1;
    i108 = 396;
    continue;
   } else if ((i108 | 0) == 309) {
    i108 = 0;
    i115 = HEAP32[i62 >> 2] | 0;
    do {
     if (i115 >>> 0 < (HEAP32[i63 >> 2] | 0) >>> 0) {
      i114 = i115 + 1 | 0;
      HEAP32[i62 >> 2] = i114;
      if ((HEAP8[i115] | 0) != 31) {
       i151 = i114;
       break;
      }
      i114 = HEAP32[i58 >> 2] | 0;
      if ((i114 | 0) == 0) {
       i108 = 312;
       break L1;
      }
      HEAP32[i58 >> 2] = i114 - 1;
      i108 = 145;
      continue L83;
     } else {
      i151 = i115;
     }
    } while (0);
    HEAP32[i62 >> 2] = i151 - 1;
    HEAP32[i36 >> 2] = 8;
    i115 = HEAP32[i61 >> 2] | 0;
    if ((i115 | 0) != (HEAP32[i60 >> 2] | 0)) {
     HEAP32[(HEAP32[i59 >> 2] | 0) + (i115 << 2) >> 2] = 8;
     HEAP32[i61 >> 2] = (HEAP32[i61 >> 2] | 0) + 1;
     i108 = 390;
     continue;
    }
    i114 = i115 + 1 | 0;
    i111 = HEAP32[i59 >> 2] | 0;
    do {
     if (i111 >>> 0 > i36 >>> 0) {
      i108 = 318;
     } else {
      if ((i111 + (i115 << 2) | 0) >>> 0 <= i36 >>> 0) {
       i108 = 318;
       break;
      }
      i112 = i80 - i111 >> 2;
      i113 = i114 + (i115 >>> 2) | 0;
      i110 = i113 >>> 0 > 16 >>> 0 ? i113 : 16;
      i113 = i110 >>> 0 > i114 >>> 0 ? i110 : i114;
      do {
       if (i115 >>> 0 < i113 >>> 0) {
        if (i113 >>> 0 > 16 >>> 0) {
         if (i113 >>> 0 > 1073741823 >>> 0) {
          i108 = 332;
          break L1;
         }
         i110 = __ZN3WTF18fastMallocGoodSizeEj(i113 << 2) | 0;
         HEAP32[i60 >> 2] = i110 >>> 2;
         i109 = __ZN3WTF10fastMallocEj(i110) | 0;
         HEAP32[i59 >> 2] = i109;
         i152 = i109;
        } else {
         HEAP32[i59 >> 2] = i22;
         HEAP32[i60 >> 2] = 16;
         i152 = i22;
        }
        i109 = i111;
        _memcpy(i152 | 0, i109 | 0, i115 << 2) | 0;
        if ((i22 | 0) == (i111 | 0) | (i111 | 0) == 0) {
         break;
        }
        if ((HEAP32[i59 >> 2] | 0) == (i111 | 0)) {
         HEAP32[i59 >> 2] = 0;
         HEAP32[i60 >> 2] = 0;
        }
        __ZN3WTF8fastFreeEPv(i109);
       }
      } while (0);
      i113 = HEAP32[i59 >> 2] | 0;
      i153 = i113 + (i112 << 2) | 0;
      i154 = i113;
     }
    } while (0);
    if ((i108 | 0) == 318) {
     i108 = 0;
     i113 = i114 + (i115 >>> 2) | 0;
     i118 = i113 >>> 0 > 16 >>> 0 ? i113 : 16;
     i113 = i118 >>> 0 > i114 >>> 0 ? i118 : i114;
     do {
      if (i115 >>> 0 < i113 >>> 0) {
       if (i113 >>> 0 > 16 >>> 0) {
        if (i113 >>> 0 > 1073741823 >>> 0) {
         i108 = 321;
         break L1;
        }
        i118 = __ZN3WTF18fastMallocGoodSizeEj(i113 << 2) | 0;
        HEAP32[i60 >> 2] = i118 >>> 2;
        i109 = __ZN3WTF10fastMallocEj(i118) | 0;
        HEAP32[i59 >> 2] = i109;
        i155 = i109;
       } else {
        HEAP32[i59 >> 2] = i22;
        HEAP32[i60 >> 2] = 16;
        i155 = i22;
       }
       i109 = i111;
       _memcpy(i155 | 0, i109 | 0, i115 << 2) | 0;
       if ((i22 | 0) == (i111 | 0) | (i111 | 0) == 0) {
        break;
       }
       if ((HEAP32[i59 >> 2] | 0) == (i111 | 0)) {
        HEAP32[i59 >> 2] = 0;
        HEAP32[i60 >> 2] = 0;
       }
       __ZN3WTF8fastFreeEPv(i109);
      }
     } while (0);
     i153 = i36;
     i154 = HEAP32[i59 >> 2] | 0;
    }
    HEAP32[i154 + (HEAP32[i61 >> 2] << 2) >> 2] = HEAP32[i153 >> 2];
    HEAP32[i61 >> 2] = (HEAP32[i61 >> 2] | 0) + 1;
    i108 = 390;
    continue;
   } else if ((i108 | 0) == 390) {
    i108 = 0;
    __ZN7WebCore17CloneDeserializer12readTerminalEv(i40, i2);
    if ((HEAP32[i71 >> 2] | 0) != -6) {
     i111 = HEAP32[i76 + 4 >> 2] | 0;
     HEAP32[i77 >> 2] = HEAP32[i76 >> 2];
     HEAP32[i77 + 4 >> 2] = i111;
     i108 = 396;
     continue;
    }
    i111 = HEAP32[i62 >> 2] | 0;
    if (i111 >>> 0 >= (HEAP32[i63 >> 2] | 0) >>> 0) {
     i108 = 401;
     break L1;
    }
    HEAP32[i62 >> 2] = i111 + 1;
    i115 = HEAPU8[i111] | 0;
    if ((i115 | 0) == 1) {
     i108 = 3;
     continue;
    } else if ((i115 | 0) == 2) {
     i108 = 107;
     continue;
    } else if ((i115 | 0) == 30) {
     if ((HEAP32[i51 >> 2] | 0) >>> 0 > 4e4 >>> 0) {
      i108 = 215;
      break L1;
     }
     i111 = HEAP32[(HEAP32[(HEAP32[i64 >> 2] | 0) + 16 >> 2] & -65536) + 1076 >> 2] | 0;
     i113 = HEAP32[(HEAP32[i65 >> 2] | 0) + 372 >> 2] | 0;
     i114 = i111 + 13220 | 0;
     i109 = i114 | 0;
     i118 = HEAP32[i109 >> 2] | 0;
     if ((i118 | 0) == 0) {
      i156 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i114, 12) | 0;
     } else {
      HEAP32[i109 >> 2] = HEAP32[i118 >> 2];
      i156 = i118;
     }
     HEAP32[i156 >> 2] = i113;
     HEAP32[i156 + 4 >> 2] = 0;
     i113 = i156 + 8 | 0;
     HEAP32[i113 >> 2] = 0;
     __ZN3JSC5JSMap14finishCreationERNS_2VME(i156, i111);
     i111 = (i156 | 0) == 0;
     i118 = HEAP32[i67 >> 2] | 0;
     i109 = (i111 ? 0 : 0) | i156;
     i114 = (i111 ? -6 : -5) | 0;
     if ((i118 | 0) < (HEAP32[i68 >> 2] | 0)) {
      i111 = (HEAP32[i69 >> 2] | 0) + (i118 << 3) | 0;
      HEAP32[i111 >> 2] = i109;
      HEAP32[i111 + 4 >> 2] = i114;
      HEAP32[i67 >> 2] = (HEAP32[i67 >> 2] | 0) + 1;
     } else {
      HEAP32[i73 >> 2] = i109;
      HEAP32[i73 + 4 >> 2] = i114;
      __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i66, i5);
     }
     i114 = HEAP32[i51 >> 2] | 0;
     if ((i114 | 0) == (HEAP32[i50 >> 2] | 0)) {
      i109 = i114 + 1 | 0;
      i111 = i109 + (i114 >>> 2) | 0;
      i118 = i111 >>> 0 > 16 >>> 0 ? i111 : 16;
      i111 = i118 >>> 0 > i109 >>> 0 ? i118 : i109;
      do {
       if (i114 >>> 0 < i111 >>> 0) {
        i109 = HEAP32[i49 >> 2] | 0;
        if (i111 >>> 0 > 32 >>> 0) {
         if (i111 >>> 0 > 1073741823 >>> 0) {
          i108 = 227;
          break L1;
         }
         i118 = __ZN3WTF18fastMallocGoodSizeEj(i111 << 2) | 0;
         HEAP32[i50 >> 2] = i118 >>> 2;
         i110 = __ZN3WTF10fastMallocEj(i118) | 0;
         HEAP32[i49 >> 2] = i110;
         i157 = i110;
        } else {
         HEAP32[i49 >> 2] = i48;
         HEAP32[i50 >> 2] = 32;
         i157 = i48;
        }
        i110 = i109;
        _memcpy(i157 | 0, i110 | 0, i114 << 2) | 0;
        if ((i48 | 0) == (i109 | 0) | (i109 | 0) == 0) {
         break;
        }
        if ((HEAP32[i49 >> 2] | 0) == (i109 | 0)) {
         HEAP32[i49 >> 2] = 0;
         HEAP32[i50 >> 2] = 0;
        }
        __ZN3WTF8fastFreeEPv(i110);
       }
      } while (0);
      HEAP32[(HEAP32[i49 >> 2] | 0) + (HEAP32[i51 >> 2] << 2) >> 2] = i156;
      i158 = HEAP32[i51 >> 2] | 0;
     } else {
      HEAP32[(HEAP32[i49 >> 2] | 0) + (i114 << 2) >> 2] = i156;
      i158 = HEAP32[i51 >> 2] | 0;
     }
     HEAP32[i51 >> 2] = i158 + 1;
     i111 = HEAP32[i113 >> 2] | 0;
     HEAP32[i34 >> 2] = i111;
     i110 = HEAP32[i58 >> 2] | 0;
     if ((i110 | 0) != (HEAP32[i57 >> 2] | 0)) {
      HEAP32[(HEAP32[i56 >> 2] | 0) + (i110 << 2) >> 2] = i111;
      HEAP32[i58 >> 2] = (HEAP32[i58 >> 2] | 0) + 1;
      i108 = 309;
      continue;
     }
     i111 = i110 + 1 | 0;
     i109 = HEAP32[i56 >> 2] | 0;
     do {
      if (i109 >>> 0 > i34 >>> 0) {
       i108 = 239;
      } else {
       if ((i109 + (i110 << 2) | 0) >>> 0 <= i34 >>> 0) {
        i108 = 239;
        break;
       }
       i118 = i72 - i109 >> 2;
       i116 = i111 + (i110 >>> 2) | 0;
       i130 = i116 >>> 0 > 16 >>> 0 ? i116 : 16;
       i116 = i130 >>> 0 > i111 >>> 0 ? i130 : i111;
       do {
        if (i110 >>> 0 < i116 >>> 0) {
         if (i116 >>> 0 > 4 >>> 0) {
          if (i116 >>> 0 > 1073741823 >>> 0) {
           i108 = 253;
           break L1;
          }
          i130 = __ZN3WTF18fastMallocGoodSizeEj(i116 << 2) | 0;
          HEAP32[i57 >> 2] = i130 >>> 2;
          i129 = __ZN3WTF10fastMallocEj(i130) | 0;
          HEAP32[i56 >> 2] = i129;
          i159 = i129;
         } else {
          HEAP32[i56 >> 2] = i55;
          HEAP32[i57 >> 2] = 4;
          i159 = i55;
         }
         i129 = i109;
         _memcpy(i159 | 0, i129 | 0, i110 << 2) | 0;
         if ((i55 | 0) == (i109 | 0) | (i109 | 0) == 0) {
          break;
         }
         if ((HEAP32[i56 >> 2] | 0) == (i109 | 0)) {
          HEAP32[i56 >> 2] = 0;
          HEAP32[i57 >> 2] = 0;
         }
         __ZN3WTF8fastFreeEPv(i129);
        }
       } while (0);
       i116 = HEAP32[i56 >> 2] | 0;
       i160 = i116 + (i118 << 2) | 0;
       i161 = i116;
      }
     } while (0);
     if ((i108 | 0) == 239) {
      i108 = 0;
      i113 = i111 + (i110 >>> 2) | 0;
      i114 = i113 >>> 0 > 16 >>> 0 ? i113 : 16;
      i113 = i114 >>> 0 > i111 >>> 0 ? i114 : i111;
      do {
       if (i110 >>> 0 < i113 >>> 0) {
        if (i113 >>> 0 > 4 >>> 0) {
         if (i113 >>> 0 > 1073741823 >>> 0) {
          i108 = 242;
          break L1;
         }
         i114 = __ZN3WTF18fastMallocGoodSizeEj(i113 << 2) | 0;
         HEAP32[i57 >> 2] = i114 >>> 2;
         i116 = __ZN3WTF10fastMallocEj(i114) | 0;
         HEAP32[i56 >> 2] = i116;
         i162 = i116;
        } else {
         HEAP32[i56 >> 2] = i55;
         HEAP32[i57 >> 2] = 4;
         i162 = i55;
        }
        i116 = i109;
        _memcpy(i162 | 0, i116 | 0, i110 << 2) | 0;
        if ((i55 | 0) == (i109 | 0) | (i109 | 0) == 0) {
         break;
        }
        if ((HEAP32[i56 >> 2] | 0) == (i109 | 0)) {
         HEAP32[i56 >> 2] = 0;
         HEAP32[i57 >> 2] = 0;
        }
        __ZN3WTF8fastFreeEPv(i116);
       }
      } while (0);
      i160 = i34;
      i161 = HEAP32[i56 >> 2] | 0;
     }
     HEAP32[i161 + (HEAP32[i58 >> 2] << 2) >> 2] = HEAP32[i160 >> 2];
     HEAP32[i58 >> 2] = (HEAP32[i58 >> 2] | 0) + 1;
     i108 = 309;
     continue;
    } else if ((i115 | 0) == 29) {
     if ((HEAP32[i51 >> 2] | 0) >>> 0 > 4e4 >>> 0) {
      i108 = 262;
      break L1;
     }
     i109 = HEAP32[(HEAP32[(HEAP32[i64 >> 2] | 0) + 16 >> 2] & -65536) + 1076 >> 2] | 0;
     i110 = HEAP32[(HEAP32[i65 >> 2] | 0) + 364 >> 2] | 0;
     i113 = i109 + 13220 | 0;
     i111 = i113 | 0;
     i116 = HEAP32[i111 >> 2] | 0;
     if ((i116 | 0) == 0) {
      i163 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i113, 12) | 0;
     } else {
      HEAP32[i111 >> 2] = HEAP32[i116 >> 2];
      i163 = i116;
     }
     HEAP32[i163 >> 2] = i110;
     HEAP32[i163 + 4 >> 2] = 0;
     i110 = i163 + 8 | 0;
     HEAP32[i110 >> 2] = 0;
     __ZN3JSC5JSSet14finishCreationERNS_2VME(i163, i109);
     i109 = (i163 | 0) == 0;
     i116 = HEAP32[i67 >> 2] | 0;
     i111 = (i109 ? 0 : 0) | i163;
     i113 = (i109 ? -6 : -5) | 0;
     if ((i116 | 0) < (HEAP32[i68 >> 2] | 0)) {
      i109 = (HEAP32[i69 >> 2] | 0) + (i116 << 3) | 0;
      HEAP32[i109 >> 2] = i111;
      HEAP32[i109 + 4 >> 2] = i113;
      HEAP32[i67 >> 2] = (HEAP32[i67 >> 2] | 0) + 1;
     } else {
      HEAP32[i75 >> 2] = i111;
      HEAP32[i75 + 4 >> 2] = i113;
      __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i66, i4);
     }
     i113 = HEAP32[i51 >> 2] | 0;
     if ((i113 | 0) == (HEAP32[i50 >> 2] | 0)) {
      i111 = i113 + 1 | 0;
      i109 = i111 + (i113 >>> 2) | 0;
      i116 = i109 >>> 0 > 16 >>> 0 ? i109 : 16;
      i109 = i116 >>> 0 > i111 >>> 0 ? i116 : i111;
      do {
       if (i113 >>> 0 < i109 >>> 0) {
        i111 = HEAP32[i49 >> 2] | 0;
        if (i109 >>> 0 > 32 >>> 0) {
         if (i109 >>> 0 > 1073741823 >>> 0) {
          i108 = 274;
          break L1;
         }
         i116 = __ZN3WTF18fastMallocGoodSizeEj(i109 << 2) | 0;
         HEAP32[i50 >> 2] = i116 >>> 2;
         i114 = __ZN3WTF10fastMallocEj(i116) | 0;
         HEAP32[i49 >> 2] = i114;
         i164 = i114;
        } else {
         HEAP32[i49 >> 2] = i48;
         HEAP32[i50 >> 2] = 32;
         i164 = i48;
        }
        i114 = i111;
        _memcpy(i164 | 0, i114 | 0, i113 << 2) | 0;
        if ((i48 | 0) == (i111 | 0) | (i111 | 0) == 0) {
         break;
        }
        if ((HEAP32[i49 >> 2] | 0) == (i111 | 0)) {
         HEAP32[i49 >> 2] = 0;
         HEAP32[i50 >> 2] = 0;
        }
        __ZN3WTF8fastFreeEPv(i114);
       }
      } while (0);
      HEAP32[(HEAP32[i49 >> 2] | 0) + (HEAP32[i51 >> 2] << 2) >> 2] = i163;
      i165 = HEAP32[i51 >> 2] | 0;
     } else {
      HEAP32[(HEAP32[i49 >> 2] | 0) + (i113 << 2) >> 2] = i163;
      i165 = HEAP32[i51 >> 2] | 0;
     }
     HEAP32[i51 >> 2] = i165 + 1;
     i109 = HEAP32[i110 >> 2] | 0;
     HEAP32[i35 >> 2] = i109;
     i115 = HEAP32[i58 >> 2] | 0;
     if ((i115 | 0) != (HEAP32[i57 >> 2] | 0)) {
      HEAP32[(HEAP32[i56 >> 2] | 0) + (i115 << 2) >> 2] = i109;
      HEAP32[i58 >> 2] = (HEAP32[i58 >> 2] | 0) + 1;
      i108 = 309;
      continue;
     }
     i109 = i115 + 1 | 0;
     i114 = HEAP32[i56 >> 2] | 0;
     do {
      if (i114 >>> 0 > i35 >>> 0) {
       i108 = 286;
      } else {
       if ((i114 + (i115 << 2) | 0) >>> 0 <= i35 >>> 0) {
        i108 = 286;
        break;
       }
       i111 = i74 - i114 >> 2;
       i116 = i109 + (i115 >>> 2) | 0;
       i112 = i116 >>> 0 > 16 >>> 0 ? i116 : 16;
       i116 = i112 >>> 0 > i109 >>> 0 ? i112 : i109;
       do {
        if (i115 >>> 0 < i116 >>> 0) {
         if (i116 >>> 0 > 4 >>> 0) {
          if (i116 >>> 0 > 1073741823 >>> 0) {
           i108 = 300;
           break L1;
          }
          i112 = __ZN3WTF18fastMallocGoodSizeEj(i116 << 2) | 0;
          HEAP32[i57 >> 2] = i112 >>> 2;
          i129 = __ZN3WTF10fastMallocEj(i112) | 0;
          HEAP32[i56 >> 2] = i129;
          i166 = i129;
         } else {
          HEAP32[i56 >> 2] = i55;
          HEAP32[i57 >> 2] = 4;
          i166 = i55;
         }
         i129 = i114;
         _memcpy(i166 | 0, i129 | 0, i115 << 2) | 0;
         if ((i55 | 0) == (i114 | 0) | (i114 | 0) == 0) {
          break;
         }
         if ((HEAP32[i56 >> 2] | 0) == (i114 | 0)) {
          HEAP32[i56 >> 2] = 0;
          HEAP32[i57 >> 2] = 0;
         }
         __ZN3WTF8fastFreeEPv(i129);
        }
       } while (0);
       i116 = HEAP32[i56 >> 2] | 0;
       i167 = i116 + (i111 << 2) | 0;
       i168 = i116;
      }
     } while (0);
     if ((i108 | 0) == 286) {
      i108 = 0;
      i110 = i109 + (i115 >>> 2) | 0;
      i113 = i110 >>> 0 > 16 >>> 0 ? i110 : 16;
      i110 = i113 >>> 0 > i109 >>> 0 ? i113 : i109;
      do {
       if (i115 >>> 0 < i110 >>> 0) {
        if (i110 >>> 0 > 4 >>> 0) {
         if (i110 >>> 0 > 1073741823 >>> 0) {
          i108 = 289;
          break L1;
         }
         i113 = __ZN3WTF18fastMallocGoodSizeEj(i110 << 2) | 0;
         HEAP32[i57 >> 2] = i113 >>> 2;
         i116 = __ZN3WTF10fastMallocEj(i113) | 0;
         HEAP32[i56 >> 2] = i116;
         i169 = i116;
        } else {
         HEAP32[i56 >> 2] = i55;
         HEAP32[i57 >> 2] = 4;
         i169 = i55;
        }
        i116 = i114;
        _memcpy(i169 | 0, i116 | 0, i115 << 2) | 0;
        if ((i55 | 0) == (i114 | 0) | (i114 | 0) == 0) {
         break;
        }
        if ((HEAP32[i56 >> 2] | 0) == (i114 | 0)) {
         HEAP32[i56 >> 2] = 0;
         HEAP32[i57 >> 2] = 0;
        }
        __ZN3WTF8fastFreeEPv(i116);
       }
      } while (0);
      i167 = i35;
      i168 = HEAP32[i56 >> 2] | 0;
     }
     HEAP32[i168 + (HEAP32[i58 >> 2] << 2) >> 2] = HEAP32[i167 >> 2];
     HEAP32[i58 >> 2] = (HEAP32[i58 >> 2] | 0) + 1;
     i108 = 309;
     continue;
    } else {
     i108 = 401;
     break L1;
    }
   } else if ((i108 | 0) == 396) {
    i108 = 0;
    i170 = HEAP32[i61 >> 2] | 0;
    if ((i170 | 0) == 0) {
     i108 = 400;
     break L1;
    } else {
     break;
    }
   }
  }
  i114 = _llvm_uadd_with_overflow_i32(i170 | 0, -1 | 0) | 0;
  if (!tempRet0) {
   i108 = 398;
   break;
  }
  i115 = i114;
  i114 = HEAP32[(HEAP32[i59 >> 2] | 0) + (i115 << 2) >> 2] | 0;
  HEAP32[i61 >> 2] = i115;
  i107 = i114;
 }
 if ((i108 | 0) == 5) {
  HEAP8[i23] = 1;
  i108 = 401;
 } else if ((i108 | 0) == 14) {
  _WTFCrash();
 } else if ((i108 | 0) == 24) {
  HEAP8[i23] = 1;
  i108 = 401;
 } else if ((i108 | 0) == 27) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i108 | 0) == 29) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i108 | 0) == 33) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i108 | 0) == 48) {
  _WTFCrash();
 } else if ((i108 | 0) == 59) {
  _WTFCrash();
 } else if ((i108 | 0) == 75) {
  _WTFCrash();
 } else if ((i108 | 0) == 86) {
  _WTFCrash();
 } else if ((i108 | 0) == 96) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i108 | 0) == 98) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i108 | 0) == 100) {
  _WTFCrash();
 } else if ((i108 | 0) == 105) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i108 | 0) == 108) {
  i107 = i1 | 0;
  HEAP32[i107 >> 2] = 0;
  HEAP32[i107 + 4 >> 2] = -6;
  HEAP32[i1 + 8 >> 2] = 1;
 } else if ((i108 | 0) == 125) {
  _WTFCrash();
 } else if ((i108 | 0) == 136) {
  _WTFCrash();
 } else if ((i108 | 0) == 148) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i108 | 0) == 150) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i108 | 0) == 154) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i108 | 0) == 156) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i108 | 0) == 172) {
  _WTFCrash();
 } else if ((i108 | 0) == 183) {
  _WTFCrash();
 } else if ((i108 | 0) == 193) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i108 | 0) == 205) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i108 | 0) == 207) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i108 | 0) == 209) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i108 | 0) == 215) {
  i107 = i1 | 0;
  HEAP32[i107 >> 2] = 0;
  HEAP32[i107 + 4 >> 2] = -6;
  HEAP32[i1 + 8 >> 2] = 1;
 } else if ((i108 | 0) == 227) {
  _WTFCrash();
 } else if ((i108 | 0) == 242) {
  _WTFCrash();
 } else if ((i108 | 0) == 253) {
  _WTFCrash();
 } else if ((i108 | 0) == 262) {
  i107 = i1 | 0;
  HEAP32[i107 >> 2] = 0;
  HEAP32[i107 + 4 >> 2] = -6;
  HEAP32[i1 + 8 >> 2] = 1;
 } else if ((i108 | 0) == 274) {
  _WTFCrash();
 } else if ((i108 | 0) == 289) {
  _WTFCrash();
 } else if ((i108 | 0) == 300) {
  _WTFCrash();
 } else if ((i108 | 0) == 312) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i108 | 0) == 321) {
  _WTFCrash();
 } else if ((i108 | 0) == 332) {
  _WTFCrash();
 } else if ((i108 | 0) == 355) {
  _WTFCrash();
 } else if ((i108 | 0) == 366) {
  _WTFCrash();
 } else if ((i108 | 0) == 376) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i108 | 0) == 378) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i108 | 0) == 388) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i108 | 0) == 398) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i108 | 0) == 400) {
  i107 = HEAP32[i77 + 4 >> 2] | 0;
  i170 = i1 | 0;
  HEAP32[i170 >> 2] = HEAP32[i77 >> 2];
  HEAP32[i170 + 4 >> 2] = i107;
  HEAP32[i1 + 8 >> 2] = 0;
 } else if ((i108 | 0) == 35) {
  _WTFCrash();
 }
 if ((i108 | 0) == 401) {
  HEAP8[i23] = 1;
  i23 = i1 | 0;
  HEAP32[i23 >> 2] = 0;
  HEAP32[i23 + 4 >> 2] = -6;
  HEAP32[i1 + 8 >> 2] = 3;
 }
 if ((HEAP32[i61 >> 2] | 0) != 0) {
  HEAP32[i61 >> 2] = 0;
 }
 i61 = HEAP32[i59 >> 2] | 0;
 if (!((i22 | 0) == (i61 | 0) | (i61 | 0) == 0)) {
  HEAP32[i59 >> 2] = 0;
  HEAP32[i60 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i61);
 }
 if ((HEAP32[i58 >> 2] | 0) != 0) {
  HEAP32[i58 >> 2] = 0;
 }
 i58 = HEAP32[i56 >> 2] | 0;
 if (!((i55 | 0) == (i58 | 0) | (i58 | 0) == 0)) {
  HEAP32[i56 >> 2] = 0;
  HEAP32[i57 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i58);
 }
 if ((HEAP32[i54 >> 2] | 0) != 0) {
  HEAP32[i54 >> 2] = 0;
 }
 i54 = HEAP32[i52 >> 2] | 0;
 if (!((i20 | 0) == (i54 | 0) | (i54 | 0) == 0)) {
  HEAP32[i52 >> 2] = 0;
  HEAP32[i53 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i54);
 }
 if ((HEAP32[i51 >> 2] | 0) != 0) {
  HEAP32[i51 >> 2] = 0;
 }
 i51 = HEAP32[i49 >> 2] | 0;
 if (!((i48 | 0) == (i51 | 0) | (i51 | 0) == 0)) {
  HEAP32[i49 >> 2] = 0;
  HEAP32[i50 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i51);
 }
 i51 = HEAP32[i47 >> 2] | 0;
 if ((i51 | 0) != 0) {
  i50 = HEAP32[i45 >> 2] | 0;
  i49 = i50 + (i51 << 2) | 0;
  i51 = i50;
  while (1) {
   i50 = HEAP32[i51 >> 2] | 0;
   do {
    if ((i50 | 0) != 0) {
     i48 = i50 | 0;
     i54 = (HEAP32[i48 >> 2] | 0) - 2 | 0;
     if ((i54 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i50);
      break;
     } else {
      HEAP32[i48 >> 2] = i54;
      break;
     }
    }
   } while (0);
   i51 = i51 + 4 | 0;
   if ((i51 | 0) == (i49 | 0)) {
    break;
   }
  }
  HEAP32[i47 >> 2] = 0;
 }
 i47 = HEAP32[i45 >> 2] | 0;
 if (!((i18 | 0) == (i47 | 0) | (i47 | 0) == 0)) {
  HEAP32[i45 >> 2] = 0;
  HEAP32[i46 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i47);
 }
 if ((HEAP32[i44 >> 2] | 0) != 0) {
  HEAP32[i44 >> 2] = 0;
 }
 i44 = HEAP32[i42 >> 2] | 0;
 if ((i41 | 0) == (i44 | 0) | (i44 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i42 >> 2] = 0;
 HEAP32[i43 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i44);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17CloneDeserializer12readTerminalEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, d74 = +0, d75 = +0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 384 | 0;
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
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 i19 = i3 + 120 | 0;
 i20 = i3 + 128 | 0;
 i21 = i3 + 136 | 0;
 i22 = i3 + 144 | 0;
 i23 = i3 + 152 | 0;
 i24 = i3 + 160 | 0;
 i25 = i3 + 168 | 0;
 i26 = i3 + 176 | 0;
 i27 = i3 + 184 | 0;
 i28 = i3 + 192 | 0;
 i29 = i3 + 200 | 0;
 i30 = i3 + 208 | 0;
 i31 = i3 + 256 | 0;
 i32 = i3 + 304 | 0;
 i33 = i3 + 312 | 0;
 i34 = i3 + 320 | 0;
 i35 = i3 + 328 | 0;
 i36 = i3 + 336 | 0;
 i37 = i3 + 344 | 0;
 i38 = i3 + 352 | 0;
 i39 = i3 + 360 | 0;
 i40 = i3 + 368 | 0;
 i41 = i3 + 376 | 0;
 i42 = i2 + 96 | 0;
 i43 = HEAP32[i42 >> 2] | 0;
 i44 = i2 + 100 | 0;
 i45 = HEAP32[i44 >> 2] | 0;
 L1 : do {
  if (i43 >>> 0 < i45 >>> 0) {
   i46 = i43 + 1 | 0;
   HEAP32[i42 >> 2] = i46;
   switch (HEAPU8[i43] | 0 | 0) {
   case 13:
    {
     i47 = i2 + 4 | 0;
     do {
      if ((HEAP8[i47] & 1) == 0) {
       if (i46 >>> 0 > (i45 - 4 | 0) >>> 0) {
        break;
       }
       i48 = i43 + 2 | 0;
       HEAP32[i42 >> 2] = i48;
       i49 = HEAPU8[i46] | 0;
       i50 = i43 + 3 | 0;
       HEAP32[i42 >> 2] = i50;
       i51 = (HEAPU8[i48] | 0) << 8 | i49;
       i49 = i43 + 4 | 0;
       HEAP32[i42 >> 2] = i49;
       i48 = i51 | (HEAPU8[i50] | 0) << 16;
       HEAP32[i42 >> 2] = i43 + 5;
       i50 = i48 | (HEAPU8[i49] | 0) << 24;
       i49 = __ZN3WTF10fastMallocEj(20) | 0;
       i48 = i49;
       __ZN7WebCore8FileListC1Ev(i48);
       i51 = i24 | 0;
       i52 = i2 + 92 | 0;
       i53 = i49 + 8 | 0;
       i54 = i49 + 16 | 0;
       i55 = i49 + 12 | 0;
       i56 = i53;
       i57 = i53;
       i53 = i1 + 4 | 0;
       i58 = i1;
       i59 = 0;
       while (1) {
        if (i59 >>> 0 >= i50 >>> 0) {
         i60 = 82;
         break;
        }
        HEAP32[i51 >> 2] = 0;
        do {
         if (__ZN7WebCore17CloneDeserializer8readFileERN3WTF6RefPtrINS_4FileEEE(i2, i24) | 0) {
          if ((HEAP8[i52] & 1) == 0) {
           i61 = 0;
           break;
          }
          i62 = HEAP32[i51 >> 2] | 0;
          if ((i62 | 0) != 0) {
           i63 = i62 + 8 | 0;
           HEAP32[i63 >> 2] = (HEAP32[i63 >> 2] | 0) + 1;
          }
          i63 = HEAP32[i54 >> 2] | 0;
          if ((i63 | 0) == (HEAP32[i55 >> 2] | 0)) {
           __ZN3WTF6VectorINS_6RefPtrIN7WebCore4FileEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i56, i63 + 1 | 0);
           HEAP32[(HEAP32[i57 >> 2] | 0) + (HEAP32[i54 >> 2] << 2) >> 2] = i62;
          } else {
           HEAP32[(HEAP32[i57 >> 2] | 0) + (i63 << 2) >> 2] = i62;
          }
          HEAP32[i54 >> 2] = (HEAP32[i54 >> 2] | 0) + 1;
          i61 = 0;
         } else {
          HEAP32[i53 >> 2] = -6;
          HEAP32[i58 >> 2] = 0;
          i61 = 1;
         }
        } while (0);
        i62 = HEAP32[i51 >> 2] | 0;
        do {
         if ((i62 | 0) != 0) {
          i63 = i62 + 8 | 0;
          i64 = i63 | 0;
          i65 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
          if ((i65 | 0) != 0) {
           HEAP32[i64 >> 2] = i65;
           break;
          }
          i65 = i63 - 8 | 0;
          if ((i65 | 0) == 0) {
           break;
          }
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i65 >> 2] | 0) + 4 >> 2] & 63](i65);
         }
        } while (0);
        if ((i61 | 0) == 0) {
         i59 = i59 + 1 | 0;
        } else {
         break;
        }
       }
       do {
        if ((i60 | 0) == 82) {
         if ((HEAP8[i52] & 1) == 0) {
          HEAP32[i53 >> 2] = -3;
          HEAP32[i58 >> 2] = 0;
          break;
         } else {
          __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_8FileListE(i1, HEAP32[i2 >> 2] | 0, HEAP32[i2 + 88 >> 2] | 0, i48);
          break;
         }
        }
       } while (0);
       if ((i49 | 0) == 0) {
        STACKTOP = i3;
        return;
       }
       i48 = i49 + 4 | 0;
       i58 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
       if ((i58 | 0) != 0) {
        HEAP32[i48 >> 2] = i58;
        STACKTOP = i3;
        return;
       }
       i58 = HEAP32[i54 >> 2] | 0;
       if ((i58 | 0) != 0) {
        i48 = HEAP32[i57 >> 2] | 0;
        i53 = i48 + (i58 << 2) | 0;
        i58 = i48;
        while (1) {
         i48 = HEAP32[i58 >> 2] | 0;
         do {
          if ((i48 | 0) != 0) {
           i52 = i48 + 8 | 0;
           i59 = i52 | 0;
           i51 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
           if ((i51 | 0) != 0) {
            HEAP32[i59 >> 2] = i51;
            break;
           }
           i51 = i52 - 8 | 0;
           if ((i51 | 0) == 0) {
            break;
           }
           FUNCTION_TABLE_vi[HEAP32[(HEAP32[i51 >> 2] | 0) + 4 >> 2] & 63](i51);
          }
         } while (0);
         i58 = i58 + 4 | 0;
         if ((i58 | 0) == (i53 | 0)) {
          break;
         }
        }
        HEAP32[i54 >> 2] = 0;
       }
       i53 = HEAP32[i57 >> 2] | 0;
       if ((i53 | 0) != 0) {
        HEAP32[i57 >> 2] = 0;
        HEAP32[i55 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i53);
       }
       i53 = i49;
       if ((HEAP32[i53 >> 2] | 0) != 0) {
        __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i53);
       }
       __ZN3WTF8fastFreeEPv(i49);
       STACKTOP = i3;
       return;
      }
     } while (0);
     HEAP8[i47] = 1;
     HEAP32[i1 + 4 >> 2] = -6;
     HEAP32[i1 >> 2] = 0;
     STACKTOP = i3;
     return;
    }
   case 12:
    {
     i53 = i23 | 0;
     HEAP32[i53 >> 2] = 0;
     do {
      if (__ZN7WebCore17CloneDeserializer8readFileERN3WTF6RefPtrINS_4FileEEE(i2, i23) | 0) {
       if ((HEAP8[i2 + 92 | 0] & 1) == 0) {
        HEAP32[i1 + 4 >> 2] = -3;
        HEAP32[i1 >> 2] = 0;
        break;
       } else {
        __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_4FileE(i1, HEAP32[i2 >> 2] | 0, HEAP32[i2 + 88 >> 2] | 0, HEAP32[i53 >> 2] | 0);
        break;
       }
      } else {
       HEAP32[i1 + 4 >> 2] = -6;
       HEAP32[i1 >> 2] = 0;
      }
     } while (0);
     i47 = HEAP32[i53 >> 2] | 0;
     if ((i47 | 0) == 0) {
      STACKTOP = i3;
      return;
     }
     i58 = i47 + 8 | 0;
     i47 = i58 | 0;
     i48 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
     if ((i48 | 0) != 0) {
      HEAP32[i47 >> 2] = i48;
      STACKTOP = i3;
      return;
     }
     i48 = i58 - 8 | 0;
     if ((i48 | 0) == 0) {
      STACKTOP = i3;
      return;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i48 >> 2] | 0) + 4 >> 2] & 63](i48);
     STACKTOP = i3;
     return;
    }
   case 15:
    {
     i48 = i27 | 0;
     HEAP32[i48 >> 2] = 0;
     i58 = i27 + 4 | 0;
     HEAP32[i58 >> 2] = 0;
     if (!(__ZN7WebCore17CloneDeserializer14readStringDataERNS0_15CachedStringRefERb(i2, i27, i15) | 0)) {
      HEAP32[i1 + 4 >> 2] = -6;
      HEAP32[i1 >> 2] = 0;
      STACKTOP = i3;
      return;
     }
     i47 = i28 | 0;
     HEAP32[i47 >> 2] = 0;
     i51 = i28 + 4 | 0;
     HEAP32[i51 >> 2] = 0;
     if (!(__ZN7WebCore17CloneDeserializer14readStringDataERNS0_15CachedStringRefERb(i2, i28, i14) | 0)) {
      HEAP32[i1 + 4 >> 2] = -6;
      HEAP32[i1 >> 2] = 0;
      STACKTOP = i3;
      return;
     }
     HEAP32[i29 >> 2] = 0;
     HEAP32[i29 + 4 >> 2] = 0;
     i52 = i2 + 4 | 0;
     do {
      if ((HEAP8[i52] & 1) == 0) {
       if (!(__ZN7WebCore17CloneDeserializer16readLittleEndianIyEEbRPKhS3_RT_(i42, HEAP32[i44 >> 2] | 0, i29) | 0)) {
        break;
       }
       if ((HEAP8[i2 + 92 | 0] & 1) == 0) {
        HEAP32[i1 + 4 >> 2] = -3;
        HEAP32[i1 >> 2] = 0;
        STACKTOP = i3;
        return;
       }
       i59 = i31 | 0;
       HEAP32[i59 >> 2] = 0;
       __ZN7WebCore3URL10invalidateEv(i31);
       i56 = HEAP32[i48 >> 2] | 0;
       i50 = HEAP32[i58 >> 2] | 0;
       if ((HEAP32[i56 + 8 >> 2] | 0) >>> 0 <= i50 >>> 0) {
        __ZN3WTF15CrashOnOverflow10overflowedEv();
       }
       __ZN7WebCore3URLC1ERKS0_RKN3WTF6StringE(i30, i31, (HEAP32[i56 >> 2] | 0) + (i50 << 4) | 0);
       i50 = HEAP32[i47 >> 2] | 0;
       i56 = HEAP32[i51 >> 2] | 0;
       if ((HEAP32[i50 + 8 >> 2] | 0) >>> 0 <= i56 >>> 0) {
        __ZN3WTF15CrashOnOverflow10overflowedEv();
       }
       i62 = (HEAP32[i50 >> 2] | 0) + (i56 << 4) | 0;
       i56 = HEAP32[i29 >> 2] | 0;
       i50 = HEAP32[i29 + 4 >> 2] | 0;
       i65 = __ZN3WTF10fastMallocEj(72) | 0;
       i63 = i65;
       __ZN7WebCore4BlobC1ERKNS_3URLERKN3WTF6StringEx(i63, i30, i62, i56, i50);
       __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_4BlobE(i1, HEAP32[i2 >> 2] | 0, HEAP32[i2 + 88 >> 2] | 0, i63);
       do {
        if ((i65 | 0) != 0) {
         i50 = i65 + 8 | 0;
         i56 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
         if ((i56 | 0) == 0) {
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i65 >> 2] | 0) + 4 >> 2] & 63](i63);
          break;
         } else {
          HEAP32[i50 >> 2] = i56;
          break;
         }
        }
       } while (0);
       i63 = HEAP32[i30 >> 2] | 0;
       do {
        if ((i63 | 0) != 0) {
         i65 = i63 | 0;
         i49 = (HEAP32[i65 >> 2] | 0) - 2 | 0;
         if ((i49 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i63);
          break;
         } else {
          HEAP32[i65 >> 2] = i49;
          break;
         }
        }
       } while (0);
       i63 = HEAP32[i59 >> 2] | 0;
       if ((i63 | 0) == 0) {
        STACKTOP = i3;
        return;
       }
       i49 = i63 | 0;
       i65 = (HEAP32[i49 >> 2] | 0) - 2 | 0;
       if ((i65 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i63);
        STACKTOP = i3;
        return;
       } else {
        HEAP32[i49 >> 2] = i65;
        STACKTOP = i3;
        return;
       }
      }
     } while (0);
     HEAP8[i52] = 1;
     HEAP32[i1 + 4 >> 2] = -6;
     HEAP32[i1 >> 2] = 0;
     STACKTOP = i3;
     return;
    }
   case 16:
    {
     i51 = i32 | 0;
     HEAP32[i51 >> 2] = 0;
     i47 = i32 + 4 | 0;
     HEAP32[i47 >> 2] = 0;
     if (!(__ZN7WebCore17CloneDeserializer14readStringDataERNS0_15CachedStringRefERb(i2, i32, i13) | 0)) {
      HEAP32[i1 + 4 >> 2] = -6;
      HEAP32[i1 >> 2] = 0;
      STACKTOP = i3;
      return;
     }
     i58 = HEAP32[i51 >> 2] | 0;
     i51 = HEAP32[i47 >> 2] | 0;
     if ((HEAP32[i58 + 8 >> 2] | 0) >>> 0 <= i51 >>> 0) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
     i47 = HEAP32[i58 >> 2] | 0;
     i58 = i47 + (i51 << 4) + 8 | 0;
     if ((HEAP32[i58 + 4 >> 2] | 0) == -6) {
      i48 = HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & -65536) + 1076 >> 2] | 0;
      i53 = HEAP32[i47 + (i51 << 4) >> 2] | 0;
      L139 : do {
       if ((i53 | 0) == 0) {
        i60 = 159;
       } else {
        i51 = HEAP32[i53 + 4 >> 2] | 0;
        do {
         if ((i51 | 0) == 0) {
          i60 = 159;
          break L139;
         } else if ((i51 | 0) == 1) {
          i47 = i53 + 8 | 0;
          if ((HEAP32[i53 + 16 >> 2] & 32 | 0) == 0) {
           i65 = HEAP16[HEAP32[i47 >> 2] >> 1] | 0;
           if ((i65 & 65535) >>> 0 < 256 >>> 0) {
            i66 = i65 & 255;
           } else {
            break;
           }
          } else {
           i66 = HEAP8[HEAP32[i47 >> 2] | 0] | 0;
          }
          i67 = HEAP32[i48 + 20932 + ((i66 & 255) << 2) >> 2] | 0;
          break L139;
         }
        } while (0);
        i51 = i5 | 0;
        HEAP32[i51 >> 2] = i53;
        i59 = i53 | 0;
        HEAP32[i59 >> 2] = (HEAP32[i59 >> 2] | 0) + 2;
        i59 = __ZN3JSC8JSString6createERNS_2VMEN3WTF10PassRefPtrINS3_10StringImplEEE(i48, i5) | 0;
        i47 = HEAP32[i51 >> 2] | 0;
        if ((i47 | 0) == 0) {
         i67 = i59;
         break;
        }
        i51 = i47 | 0;
        i65 = (HEAP32[i51 >> 2] | 0) - 2 | 0;
        if ((i65 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i47);
         i67 = i59;
         break;
        } else {
         HEAP32[i51 >> 2] = i65;
         i67 = i59;
         break;
        }
       }
      } while (0);
      if ((i60 | 0) == 159) {
       i67 = HEAP32[i48 + 20892 >> 2] | 0;
      }
      i53 = (i67 | 0) == 0;
      i52 = (i53 ? 0 : 0) | i67;
      i59 = (i53 ? -6 : -5) | 0;
      i53 = i58 | 0;
      HEAP32[i53 >> 2] = i52;
      HEAP32[i53 + 4 >> 2] = i59;
      i68 = i59;
      i69 = i52;
     } else {
      i52 = i58 | 0;
      i68 = HEAP32[i52 + 4 >> 2] | 0;
      i69 = HEAP32[i52 >> 2] | 0;
     }
     i52 = i1 | 0;
     HEAP32[i52 >> 2] = i69;
     HEAP32[i52 + 4 >> 2] = i68;
     STACKTOP = i3;
     return;
    }
   case 27:
    {
     i52 = HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & -65536) + 1076 >> 2] | 0;
     i59 = HEAP32[i2 + 88 >> 2] | 0;
     i53 = HEAP32[i52 + 20892 >> 2] | 0;
     HEAP32[i35 + 4 >> 2] = (i53 | 0) == 0 ? -6 : -5;
     HEAP32[i35 >> 2] = i53;
     i53 = __ZN3JSC15constructStringERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueE(i52, i59, i35) | 0;
     i59 = i2 + 8 | 0;
     i52 = (i53 | 0) == 0 ? -6 : -5;
     i65 = i53;
     i53 = i59 | 0;
     i51 = HEAP32[i53 >> 2] | 0;
     i47 = i65 | 0;
     i49 = i52 | 0;
     if ((i51 | 0) < (HEAP32[i2 + 12 >> 2] | 0)) {
      i63 = (HEAP32[i2 + 80 >> 2] | 0) + (i51 << 3) | 0;
      HEAP32[i63 >> 2] = i47;
      HEAP32[i63 + 4 >> 2] = i49;
      HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + 1;
     } else {
      i53 = i10 | 0;
      HEAP32[i53 >> 2] = i47;
      HEAP32[i53 + 4 >> 2] = i49;
      __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i59, i10);
     }
     HEAP32[i1 + 4 >> 2] = i52;
     HEAP32[i1 >> 2] = i65;
     STACKTOP = i3;
     return;
    }
   case 18:
    {
     i65 = i36 | 0;
     HEAP32[i65 >> 2] = 0;
     i52 = i36 + 4 | 0;
     HEAP32[i52 >> 2] = 0;
     if (!(__ZN7WebCore17CloneDeserializer14readStringDataERNS0_15CachedStringRefERb(i2, i36, i9) | 0)) {
      HEAP32[i1 + 4 >> 2] = -6;
      HEAP32[i1 >> 2] = 0;
      STACKTOP = i3;
      return;
     }
     i59 = i37 | 0;
     HEAP32[i59 >> 2] = 0;
     i49 = i37 + 4 | 0;
     HEAP32[i49 >> 2] = 0;
     if (!(__ZN7WebCore17CloneDeserializer14readStringDataERNS0_15CachedStringRefERb(i2, i37, i8) | 0)) {
      HEAP32[i1 + 4 >> 2] = -6;
      HEAP32[i1 >> 2] = 0;
      STACKTOP = i3;
      return;
     }
     i53 = HEAP32[i59 >> 2] | 0;
     i59 = HEAP32[i49 >> 2] | 0;
     if ((HEAP32[i53 + 8 >> 2] | 0) >>> 0 <= i59 >>> 0) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
     i49 = __ZN3JSC11regExpFlagsERKN3WTF6StringE((HEAP32[i53 >> 2] | 0) + (i59 << 4) | 0) | 0;
     i59 = HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & -65536) + 1076 >> 2] | 0;
     i53 = HEAP32[i65 >> 2] | 0;
     i65 = HEAP32[i52 >> 2] | 0;
     if ((HEAP32[i53 + 8 >> 2] | 0) >>> 0 <= i65 >>> 0) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
     i52 = __ZN3JSC6RegExp6createERNS_2VMERKN3WTF6StringENS_11RegExpFlagsE(i59, (HEAP32[i53 >> 2] | 0) + (i65 << 4) | 0, i49) | 0;
     i49 = HEAP32[(HEAP32[i2 + 88 >> 2] | 0) + 344 >> 2] | 0;
     i65 = i59 + 13308 | 0;
     i53 = i65 | 0;
     i47 = HEAP32[i53 >> 2] | 0;
     if ((i47 | 0) == 0) {
      i70 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i65, 32) | 0;
     } else {
      HEAP32[i53 >> 2] = HEAP32[i47 >> 2];
      i70 = i47;
     }
     HEAP32[i70 >> 2] = 0;
     i47 = i70;
     __ZN3JSC12RegExpObjectC1ERNS_2VMEPNS_9StructureEPNS_6RegExpE(i47, i59, i49, i52);
     __ZN3JSC12RegExpObject14finishCreationERNS_2VME(i47, i59);
     HEAP32[i1 + 4 >> 2] = (i70 | 0) == 0 ? -6 : -5;
     HEAP32[i1 >> 2] = i70;
     STACKTOP = i3;
     return;
    }
   case 19:
    {
     HEAP32[i38 >> 2] = 0;
     i59 = i2 + 8 | 0;
     if (!(__ZN7WebCore17CloneDeserializer21readConstantPoolIndexIN3JSC20MarkedArgumentBufferEEEbRKT_Rj(i2, i59, i38) | 0)) {
      HEAP8[i2 + 4 | 0] = 1;
      HEAP32[i1 + 4 >> 2] = -6;
      HEAP32[i1 >> 2] = 0;
      STACKTOP = i3;
      return;
     }
     i47 = HEAP32[i38 >> 2] | 0;
     if ((HEAP32[i59 >> 2] | 0) > (i47 | 0)) {
      i59 = (HEAP32[i2 + 80 >> 2] | 0) + (i47 << 3) | 0;
      i47 = HEAP32[i59 + 4 >> 2] | 0;
      i52 = i1 | 0;
      HEAP32[i52 >> 2] = HEAP32[i59 >> 2];
      HEAP32[i52 + 4 >> 2] = i47;
      STACKTOP = i3;
      return;
     } else {
      HEAP32[i1 + 4 >> 2] = -4;
      HEAP32[i1 >> 2] = 0;
      STACKTOP = i3;
      return;
     }
     break;
    }
   case 20:
    {
     i47 = i2 + 4 | 0;
     do {
      if ((HEAP8[i47] & 1) == 0) {
       if (i46 >>> 0 > (i45 - 4 | 0) >>> 0) {
        i60 = 216;
        break;
       }
       i52 = i43 + 2 | 0;
       HEAP32[i42 >> 2] = i52;
       i59 = HEAPU8[i46] | 0;
       i49 = i43 + 3 | 0;
       HEAP32[i42 >> 2] = i49;
       i53 = (HEAPU8[i52] | 0) << 8 | i59;
       i59 = i43 + 4 | 0;
       HEAP32[i42 >> 2] = i59;
       i52 = i53 | (HEAPU8[i49] | 0) << 16;
       HEAP32[i42 >> 2] = i43 + 5;
       i49 = i52 | (HEAPU8[i59] | 0) << 24;
       i59 = HEAP32[i2 + 120 >> 2] | 0;
       if ((i59 | 0) == 0) {
        break;
       }
       if (i49 >>> 0 >= (HEAP32[i59 + 8 >> 2] | 0) >>> 0) {
        break;
       }
       __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_11MessagePortE(i1, HEAP32[i2 >> 2] | 0, HEAP32[i2 + 88 >> 2] | 0, HEAP32[(HEAP32[i59 >> 2] | 0) + (i49 << 2) >> 2] | 0);
       STACKTOP = i3;
       return;
      } else {
       i60 = 216;
      }
     } while (0);
     if ((i60 | 0) == 216) {
      HEAP8[i47] = 1;
     }
     HEAP8[i47] = 1;
     HEAP32[i1 + 4 >> 2] = -6;
     HEAP32[i1 >> 2] = 0;
     STACKTOP = i3;
     return;
    }
   case 21:
    {
     i58 = i39 | 0;
     HEAP32[i58 >> 2] = 0;
     if (__ZN7WebCore17CloneDeserializer15readArrayBufferERN3WTF6RefPtrIN3JSC11ArrayBufferEEE(i2, i39) | 0) {
      i48 = HEAP32[i58 >> 2] | 0;
      __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS0_11ArrayBufferE(i40, HEAP32[i2 >> 2] | 0, HEAP32[i2 + 88 >> 2] | 0, i48);
      i49 = i2 + 8 | 0;
      i59 = i40 | 0;
      i52 = HEAP32[i59 >> 2] | 0;
      i53 = HEAP32[i59 + 4 >> 2] | 0;
      i59 = i49 | 0;
      i65 = HEAP32[i59 >> 2] | 0;
      if ((i65 | 0) < (HEAP32[i2 + 12 >> 2] | 0)) {
       i63 = (HEAP32[i2 + 80 >> 2] | 0) + (i65 << 3) | 0;
       HEAP32[i63 >> 2] = i52;
       HEAP32[i63 + 4 >> 2] = i53;
       HEAP32[i59 >> 2] = (HEAP32[i59 >> 2] | 0) + 1;
      } else {
       i59 = i7 | 0;
       HEAP32[i59 >> 2] = i52;
       HEAP32[i59 + 4 >> 2] = i53;
       __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i49, i7);
      }
      i49 = i1 | 0;
      HEAP32[i49 >> 2] = i52;
      HEAP32[i49 + 4 >> 2] = i53;
      i71 = i48;
     } else {
      HEAP8[i2 + 4 | 0] = 1;
      HEAP32[i1 + 4 >> 2] = -6;
      HEAP32[i1 >> 2] = 0;
      i71 = HEAP32[i58 >> 2] | 0;
     }
     if ((i71 | 0) == 0) {
      STACKTOP = i3;
      return;
     }
     __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i71 | 0);
     STACKTOP = i3;
     return;
    }
   case 23:
    {
     i58 = i2 + 4 | 0;
     do {
      if ((HEAP8[i58] & 1) == 0) {
       if (i46 >>> 0 > (i45 - 4 | 0) >>> 0) {
        i60 = 231;
        break;
       }
       i48 = i43 + 2 | 0;
       HEAP32[i42 >> 2] = i48;
       i53 = HEAPU8[i46] | 0;
       i49 = i43 + 3 | 0;
       HEAP32[i42 >> 2] = i49;
       i52 = (HEAPU8[i48] | 0) << 8 | i53;
       i53 = i43 + 4 | 0;
       HEAP32[i42 >> 2] = i53;
       i48 = i52 | (HEAPU8[i49] | 0) << 16;
       HEAP32[i42 >> 2] = i43 + 5;
       i49 = i48 | (HEAPU8[i53] | 0) << 24;
       i53 = i2 + 136 | 0;
       if (i49 >>> 0 >= (HEAP32[i53 >> 2] | 0) >>> 0) {
        break;
       }
       i48 = i2 + 128 | 0;
       i52 = (HEAP32[i48 >> 2] | 0) + (i49 << 2) | 0;
       do {
        if ((HEAP32[i52 >> 2] | 0) == 0) {
         i59 = HEAP32[i2 + 124 >> 2] | 0;
         if ((HEAP32[i59 + 8 >> 2] | 0) >>> 0 <= i49 >>> 0) {
          __ZN3WTF15CrashOnOverflow10overflowedEv();
         }
         i63 = HEAP32[i59 >> 2] | 0;
         i59 = __ZN3WTF10fastMallocEj(24) | 0;
         HEAP32[i59 >> 2] = 2;
         i65 = i63 + (i49 << 3) | 0;
         _memset(i59 + 4 | 0, 0, 20) | 0;
         HEAP32[i59 + 12 >> 2] = HEAP32[i65 >> 2];
         i51 = i63 + (i49 << 3) + 4 | 0;
         HEAP32[i59 + 16 >> 2] = HEAP32[i51 >> 2];
         HEAP32[i65 >> 2] = 0;
         HEAP32[i51 >> 2] = 0;
         i51 = HEAP32[i52 >> 2] | 0;
         HEAP32[i52 >> 2] = i59;
         if ((i51 | 0) == 0) {
          break;
         }
         __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i51 | 0);
        }
       } while (0);
       if ((HEAP32[i53 >> 2] | 0) >>> 0 <= i49 >>> 0) {
        __ZN3WTF15CrashOnOverflow10overflowedEv();
       }
       __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS0_11ArrayBufferE(i1, HEAP32[i2 >> 2] | 0, HEAP32[i2 + 88 >> 2] | 0, HEAP32[(HEAP32[i48 >> 2] | 0) + (i49 << 2) >> 2] | 0);
       STACKTOP = i3;
       return;
      } else {
       i60 = 231;
      }
     } while (0);
     if ((i60 | 0) == 231) {
      HEAP8[i58] = 1;
     }
     HEAP8[i58] = 1;
     HEAP32[i1 + 4 >> 2] = -6;
     HEAP32[i1 >> 2] = 0;
     STACKTOP = i3;
     return;
    }
   case 22:
    {
     HEAP32[i41 + 4 >> 2] = -6;
     HEAP32[i41 >> 2] = 0;
     if (!(__ZN7WebCore17CloneDeserializer19readArrayBufferViewERN3JSC7JSValueE(i2, i41) | 0)) {
      HEAP8[i2 + 4 | 0] = 1;
      HEAP32[i1 + 4 >> 2] = -6;
      HEAP32[i1 >> 2] = 0;
      STACKTOP = i3;
      return;
     }
     i47 = i2 + 8 | 0;
     i52 = i41 | 0;
     i51 = HEAP32[i52 >> 2] | 0;
     i59 = HEAP32[i52 + 4 >> 2] | 0;
     i52 = i47 | 0;
     i65 = HEAP32[i52 >> 2] | 0;
     if ((i65 | 0) < (HEAP32[i2 + 12 >> 2] | 0)) {
      i63 = (HEAP32[i2 + 80 >> 2] | 0) + (i65 << 3) | 0;
      HEAP32[i63 >> 2] = i51;
      HEAP32[i63 + 4 >> 2] = i59;
      HEAP32[i52 >> 2] = (HEAP32[i52 >> 2] | 0) + 1;
     } else {
      i52 = i6 | 0;
      HEAP32[i52 >> 2] = i51;
      HEAP32[i52 + 4 >> 2] = i59;
      __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i47, i6);
     }
     i47 = i1 | 0;
     HEAP32[i47 >> 2] = i51;
     HEAP32[i47 + 4 >> 2] = i59;
     STACKTOP = i3;
     return;
    }
   case 3:
    {
     HEAP32[i1 + 4 >> 2] = -4;
     HEAP32[i1 >> 2] = 0;
     STACKTOP = i3;
     return;
    }
   case 4:
    {
     HEAP32[i1 + 4 >> 2] = -3;
     HEAP32[i1 >> 2] = 0;
     STACKTOP = i3;
     return;
    }
   case 5:
    {
     i59 = i2 + 4 | 0;
     do {
      if ((HEAP8[i59] & 1) == 0) {
       if (i46 >>> 0 > (i45 - 4 | 0) >>> 0) {
        break;
       }
       i47 = i43 + 2 | 0;
       HEAP32[i42 >> 2] = i47;
       i51 = HEAPU8[i46] | 0;
       i52 = i43 + 3 | 0;
       HEAP32[i42 >> 2] = i52;
       i63 = (HEAPU8[i47] | 0) << 8 | i51;
       i51 = i43 + 4 | 0;
       HEAP32[i42 >> 2] = i51;
       i47 = i63 | (HEAPU8[i52] | 0) << 16;
       HEAP32[i42 >> 2] = i43 + 5;
       i52 = i47 | (HEAPU8[i51] | 0) << 24;
       HEAP32[i1 + 4 >> 2] = -1;
       HEAP32[i1 >> 2] = i52;
       STACKTOP = i3;
       return;
      }
     } while (0);
     HEAP8[i59] = 1;
     HEAP32[i1 + 4 >> 2] = -6;
     HEAP32[i1 >> 2] = 0;
     STACKTOP = i3;
     return;
    }
   case 6:
    {
     HEAP32[i1 + 4 >> 2] = -1;
     HEAP32[i1 >> 2] = 0;
     STACKTOP = i3;
     return;
    }
   case 7:
    {
     HEAP32[i1 + 4 >> 2] = -1;
     HEAP32[i1 >> 2] = 1;
     STACKTOP = i3;
     return;
    }
   case 8:
    {
     HEAP32[i1 + 4 >> 2] = -2;
     HEAP32[i1 >> 2] = 0;
     STACKTOP = i3;
     return;
    }
   case 9:
    {
     HEAP32[i1 + 4 >> 2] = -2;
     HEAP32[i1 >> 2] = 1;
     STACKTOP = i3;
     return;
    }
   case 25:
    {
     i58 = HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & -65536) + 1076 >> 2] | 0;
     i52 = HEAP32[(HEAP32[i2 + 88 >> 2] | 0) + 396 >> 2] | 0;
     i51 = i58 + 504 | 0;
     i47 = i51 | 0;
     i63 = HEAP32[i47 >> 2] | 0;
     if ((i63 | 0) == 0) {
      i72 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i51, 24) | 0;
     } else {
      HEAP32[i47 >> 2] = HEAP32[i63 >> 2];
      i72 = i63;
     }
     HEAP32[i72 >> 2] = 0;
     i63 = i72;
     __ZN3JSC13BooleanObjectC1ERNS_2VMEPNS_9StructureE(i63, i58, i52);
     __ZN3JSC13BooleanObject14finishCreationERNS_2VME(i63, i58);
     i58 = i72 + 16 | 0;
     HEAP32[i58 >> 2] = 0;
     HEAP32[i58 + 4 >> 2] = -2;
     i58 = i2 + 8 | 0;
     i63 = (i72 | 0) == 0 ? -6 : -5;
     i52 = i72;
     i47 = i58 | 0;
     i51 = HEAP32[i47 >> 2] | 0;
     i65 = i52 | 0;
     i55 = i63 | 0;
     if ((i51 | 0) < (HEAP32[i2 + 12 >> 2] | 0)) {
      i57 = (HEAP32[i2 + 80 >> 2] | 0) + (i51 << 3) | 0;
      HEAP32[i57 >> 2] = i65;
      HEAP32[i57 + 4 >> 2] = i55;
      HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
     } else {
      i47 = i21 | 0;
      HEAP32[i47 >> 2] = i65;
      HEAP32[i47 + 4 >> 2] = i55;
      __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i58, i21);
     }
     HEAP32[i1 + 4 >> 2] = i63;
     HEAP32[i1 >> 2] = i52;
     STACKTOP = i3;
     return;
    }
   case 24:
    {
     i52 = HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & -65536) + 1076 >> 2] | 0;
     i63 = HEAP32[(HEAP32[i2 + 88 >> 2] | 0) + 396 >> 2] | 0;
     i58 = i52 + 504 | 0;
     i55 = i58 | 0;
     i47 = HEAP32[i55 >> 2] | 0;
     if ((i47 | 0) == 0) {
      i73 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i58, 24) | 0;
     } else {
      HEAP32[i55 >> 2] = HEAP32[i47 >> 2];
      i73 = i47;
     }
     HEAP32[i73 >> 2] = 0;
     i47 = i73;
     __ZN3JSC13BooleanObjectC1ERNS_2VMEPNS_9StructureE(i47, i52, i63);
     __ZN3JSC13BooleanObject14finishCreationERNS_2VME(i47, i52);
     i52 = i73 + 16 | 0;
     HEAP32[i52 >> 2] = 1;
     HEAP32[i52 + 4 >> 2] = -2;
     i52 = i2 + 8 | 0;
     i47 = (i73 | 0) == 0 ? -6 : -5;
     i63 = i73;
     i55 = i52 | 0;
     i58 = HEAP32[i55 >> 2] | 0;
     i65 = i63 | 0;
     i57 = i47 | 0;
     if ((i58 | 0) < (HEAP32[i2 + 12 >> 2] | 0)) {
      i51 = (HEAP32[i2 + 80 >> 2] | 0) + (i58 << 3) | 0;
      HEAP32[i51 >> 2] = i65;
      HEAP32[i51 + 4 >> 2] = i57;
      HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 1;
     } else {
      i55 = i20 | 0;
      HEAP32[i55 >> 2] = i65;
      HEAP32[i55 + 4 >> 2] = i57;
      __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i52, i20);
     }
     HEAP32[i1 + 4 >> 2] = i47;
     HEAP32[i1 >> 2] = i63;
     STACKTOP = i3;
     return;
    }
   case 10:
    {
     i63 = i2 + 4 | 0;
     do {
      if ((HEAP8[i63] & 1) == 0) {
       if (!(__ZN7WebCore17CloneDeserializer16readLittleEndianIyEEbRPKhS3_RT_(i42, i45, i19) | 0)) {
        break;
       }
       i47 = i19 | 0;
       d74 = +HEAPF64[i47 >> 3];
       i52 = ~~d74;
       do {
        if (+(i52 | 0) == d74) {
         i57 = HEAP32[i47 + 4 >> 2] | 0;
         i55 = 0;
         if ((i52 | 0) == 0 & ((i57 | 0) < (i55 | 0) | (i57 | 0) == (i55 | 0) & (HEAP32[i47 >> 2] | 0) >>> 0 < 0 >>> 0)) {
          break;
         }
         i55 = i1 | 0;
         HEAP32[i55 >> 2] = i52;
         HEAP32[i55 + 4 >> 2] = -1;
         STACKTOP = i3;
         return;
        }
       } while (0);
       HEAPF64[i1 >> 3] = d74;
       STACKTOP = i3;
       return;
      }
     } while (0);
     HEAP8[i63] = 1;
     HEAP32[i1 + 4 >> 2] = -6;
     HEAP32[i1 >> 2] = 0;
     STACKTOP = i3;
     return;
    }
   case 28:
    {
     i59 = i2 + 4 | 0;
     do {
      if ((HEAP8[i59] & 1) == 0) {
       if (!(__ZN7WebCore17CloneDeserializer16readLittleEndianIyEEbRPKhS3_RT_(i42, i45, i18) | 0)) {
        break;
       }
       i52 = i18 | 0;
       d75 = +HEAPF64[i52 >> 3];
       i47 = HEAP32[i2 >> 2] | 0;
       i49 = HEAP32[i2 + 88 >> 2] | 0;
       i48 = ~~d75;
       do {
        if (+(i48 | 0) != d75) {
         i60 = 39;
        } else {
         i53 = HEAP32[i52 + 4 >> 2] | 0;
         i55 = 0;
         if ((i48 | 0) == 0 & ((i53 | 0) < (i55 | 0) | (i53 | 0) == (i55 | 0) & (HEAP32[i52 >> 2] | 0) >>> 0 < 0 >>> 0)) {
          i60 = 39;
          break;
         }
         i55 = i22 | 0;
         HEAP32[i55 >> 2] = i48;
         HEAP32[i55 + 4 >> 2] = -1;
        }
       } while (0);
       if ((i60 | 0) == 39) {
        HEAPF64[i22 >> 3] = d75;
       }
       i48 = __ZN3JSC15constructNumberEPNS_9ExecStateEPNS_14JSGlobalObjectENS_7JSValueE(i47, i49, i22) | 0;
       i52 = i2 + 8 | 0;
       i55 = (i48 | 0) == 0 ? -6 : -5;
       i53 = i48;
       i48 = i52 | 0;
       i57 = HEAP32[i48 >> 2] | 0;
       i65 = i53 | 0;
       i51 = i55 | 0;
       if ((i57 | 0) < (HEAP32[i2 + 12 >> 2] | 0)) {
        i58 = (HEAP32[i2 + 80 >> 2] | 0) + (i57 << 3) | 0;
        HEAP32[i58 >> 2] = i65;
        HEAP32[i58 + 4 >> 2] = i51;
        HEAP32[i48 >> 2] = (HEAP32[i48 >> 2] | 0) + 1;
       } else {
        i48 = i17 | 0;
        HEAP32[i48 >> 2] = i65;
        HEAP32[i48 + 4 >> 2] = i51;
        __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i52, i17);
       }
       HEAP32[i1 + 4 >> 2] = i55;
       HEAP32[i1 >> 2] = i53;
       STACKTOP = i3;
       return;
      }
     } while (0);
     HEAP8[i59] = 1;
     HEAP32[i1 + 4 >> 2] = -6;
     HEAP32[i1 >> 2] = 0;
     STACKTOP = i3;
     return;
    }
   case 11:
    {
     i63 = i2 + 4 | 0;
     do {
      if ((HEAP8[i63] & 1) == 0) {
       if (!(__ZN7WebCore17CloneDeserializer16readLittleEndianIyEEbRPKhS3_RT_(i42, i45, i16) | 0)) {
        break;
       }
       d74 = +HEAPF64[i16 >> 3];
       i53 = HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & -65536) + 1076 >> 2] | 0;
       i55 = HEAP32[(HEAP32[i2 + 88 >> 2] | 0) + 380 >> 2] | 0;
       i52 = i53 + 548 | 0;
       i51 = i52 | 0;
       i48 = HEAP32[i51 >> 2] | 0;
       if ((i48 | 0) == 0) {
        i76 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i52, 32) | 0;
       } else {
        HEAP32[i51 >> 2] = HEAP32[i48 >> 2];
        i76 = i48;
       }
       HEAP32[i76 >> 2] = 0;
       i48 = i76;
       __ZN3JSC12DateInstanceC1ERNS_2VMEPNS_9StructureE(i48, i53, i55);
       __ZN3JSC12DateInstance14finishCreationERNS_2VMEd(i48, i53, d74);
       HEAP32[i1 + 4 >> 2] = (i76 | 0) == 0 ? -6 : -5;
       HEAP32[i1 >> 2] = i76;
       STACKTOP = i3;
       return;
      }
     } while (0);
     HEAP8[i63] = 1;
     HEAP32[i1 + 4 >> 2] = -6;
     HEAP32[i1 >> 2] = 0;
     STACKTOP = i3;
     return;
    }
   case 17:
    {
     i59 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 20892 >> 2] | 0;
     HEAP32[i1 + 4 >> 2] = (i59 | 0) == 0 ? -6 : -5;
     HEAP32[i1 >> 2] = i59;
     STACKTOP = i3;
     return;
    }
   case 26:
    {
     i59 = i33 | 0;
     HEAP32[i59 >> 2] = 0;
     i53 = i33 + 4 | 0;
     HEAP32[i53 >> 2] = 0;
     if (!(__ZN7WebCore17CloneDeserializer14readStringDataERNS0_15CachedStringRefERb(i2, i33, i12) | 0)) {
      HEAP32[i1 + 4 >> 2] = -6;
      HEAP32[i1 >> 2] = 0;
      STACKTOP = i3;
      return;
     }
     i48 = HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & -65536) + 1076 >> 2] | 0;
     i55 = HEAP32[i2 + 88 >> 2] | 0;
     i51 = HEAP32[i59 >> 2] | 0;
     i59 = HEAP32[i53 >> 2] | 0;
     if ((HEAP32[i51 + 8 >> 2] | 0) >>> 0 <= i59 >>> 0) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
     i53 = HEAP32[i51 >> 2] | 0;
     i51 = i53 + (i59 << 4) + 8 | 0;
     if ((HEAP32[i51 + 4 >> 2] | 0) == -6) {
      i52 = HEAP32[i53 + (i59 << 4) >> 2] | 0;
      L339 : do {
       if ((i52 | 0) == 0) {
        i60 = 179;
       } else {
        i59 = HEAP32[i52 + 4 >> 2] | 0;
        do {
         if ((i59 | 0) == 0) {
          i60 = 179;
          break L339;
         } else if ((i59 | 0) == 1) {
          i53 = i52 + 8 | 0;
          if ((HEAP32[i52 + 16 >> 2] & 32 | 0) == 0) {
           i65 = HEAP16[HEAP32[i53 >> 2] >> 1] | 0;
           if ((i65 & 65535) >>> 0 < 256 >>> 0) {
            i77 = i65 & 255;
           } else {
            break;
           }
          } else {
           i77 = HEAP8[HEAP32[i53 >> 2] | 0] | 0;
          }
          i78 = HEAP32[i48 + 20932 + ((i77 & 255) << 2) >> 2] | 0;
          break L339;
         }
        } while (0);
        i59 = i4 | 0;
        HEAP32[i59 >> 2] = i52;
        i49 = i52 | 0;
        HEAP32[i49 >> 2] = (HEAP32[i49 >> 2] | 0) + 2;
        i49 = __ZN3JSC8JSString6createERNS_2VMEN3WTF10PassRefPtrINS3_10StringImplEEE(i48, i4) | 0;
        i47 = HEAP32[i59 >> 2] | 0;
        if ((i47 | 0) == 0) {
         i78 = i49;
         break;
        }
        i59 = i47 | 0;
        i53 = (HEAP32[i59 >> 2] | 0) - 2 | 0;
        if ((i53 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i47);
         i78 = i49;
         break;
        } else {
         HEAP32[i59 >> 2] = i53;
         i78 = i49;
         break;
        }
       }
      } while (0);
      if ((i60 | 0) == 179) {
       i78 = HEAP32[i48 + 20892 >> 2] | 0;
      }
      i52 = (i78 | 0) == 0;
      i63 = (i52 ? 0 : 0) | i78;
      i49 = (i52 ? -6 : -5) | 0;
      i52 = i51 | 0;
      HEAP32[i52 >> 2] = i63;
      HEAP32[i52 + 4 >> 2] = i49;
      i79 = i49;
      i80 = i63;
     } else {
      i63 = i51 | 0;
      i79 = HEAP32[i63 + 4 >> 2] | 0;
      i80 = HEAP32[i63 >> 2] | 0;
     }
     i63 = i34 | 0;
     HEAP32[i63 >> 2] = i80;
     HEAP32[i63 + 4 >> 2] = i79;
     i63 = __ZN3JSC15constructStringERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueE(i48, i55, i34) | 0;
     i49 = i2 + 8 | 0;
     i52 = (i63 | 0) == 0 ? -6 : -5;
     i53 = i63;
     i63 = i49 | 0;
     i59 = HEAP32[i63 >> 2] | 0;
     i47 = i53 | 0;
     i65 = i52 | 0;
     if ((i59 | 0) < (HEAP32[i2 + 12 >> 2] | 0)) {
      i58 = (HEAP32[i2 + 80 >> 2] | 0) + (i59 << 3) | 0;
      HEAP32[i58 >> 2] = i47;
      HEAP32[i58 + 4 >> 2] = i65;
      HEAP32[i63 >> 2] = (HEAP32[i63 >> 2] | 0) + 1;
     } else {
      i63 = i11 | 0;
      HEAP32[i63 >> 2] = i47;
      HEAP32[i63 + 4 >> 2] = i65;
      __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i49, i11);
     }
     HEAP32[i1 + 4 >> 2] = i52;
     HEAP32[i1 >> 2] = i53;
     STACKTOP = i3;
     return;
    }
   case 14:
    {
     i53 = i2 + 4 | 0;
     do {
      if ((HEAP8[i53] & 1) == 0) {
       i52 = i45 - 4 | 0;
       if (i46 >>> 0 > i52 >>> 0) {
        break;
       }
       i49 = i43 + 2 | 0;
       HEAP32[i42 >> 2] = i49;
       i65 = HEAPU8[i46] | 0;
       i63 = i43 + 3 | 0;
       HEAP32[i42 >> 2] = i63;
       i47 = (HEAPU8[i49] | 0) << 8 | i65;
       i65 = i43 + 4 | 0;
       HEAP32[i42 >> 2] = i65;
       i49 = i47 | (HEAPU8[i63] | 0) << 16;
       i63 = i43 + 5 | 0;
       HEAP32[i42 >> 2] = i63;
       i47 = i49 | (HEAPU8[i65] | 0) << 24;
       if (i63 >>> 0 > i52 >>> 0) {
        HEAP8[i53] = 1;
        HEAP32[i1 + 4 >> 2] = -6;
        HEAP32[i1 >> 2] = 0;
        STACKTOP = i3;
        return;
       }
       i65 = i43 + 6 | 0;
       HEAP32[i42 >> 2] = i65;
       i49 = HEAPU8[i63] | 0;
       i63 = i43 + 7 | 0;
       HEAP32[i42 >> 2] = i63;
       i58 = (HEAPU8[i65] | 0) << 8 | i49;
       i49 = i43 + 8 | 0;
       HEAP32[i42 >> 2] = i49;
       i65 = i58 | (HEAPU8[i63] | 0) << 16;
       i63 = i43 + 9 | 0;
       HEAP32[i42 >> 2] = i63;
       i58 = i65 | (HEAPU8[i49] | 0) << 24;
       if (i63 >>> 0 > i52 >>> 0) {
        HEAP8[i53] = 1;
        HEAP32[i1 + 4 >> 2] = -6;
        HEAP32[i1 >> 2] = 0;
        STACKTOP = i3;
        return;
       }
       i52 = i43 + 10 | 0;
       HEAP32[i42 >> 2] = i52;
       i49 = HEAPU8[i63] | 0;
       i63 = i43 + 11 | 0;
       HEAP32[i42 >> 2] = i63;
       i65 = (HEAPU8[i52] | 0) << 8 | i49;
       i49 = i43 + 12 | 0;
       HEAP32[i42 >> 2] = i49;
       i52 = i65 | (HEAPU8[i63] | 0) << 16;
       i63 = i43 + 13 | 0;
       HEAP32[i42 >> 2] = i63;
       i65 = i52 | (HEAPU8[i49] | 0) << 24;
       do {
        if (i45 >>> 0 >= (i65 | 0) >>> 0) {
         if (i63 >>> 0 > (i45 + (-i65 | 0) | 0) >>> 0) {
          break;
         }
         if ((HEAP8[i2 + 92 | 0] & 1) == 0) {
          HEAP32[i42 >> 2] = i43 + (i65 + 13);
          HEAP32[i1 + 4 >> 2] = -3;
          HEAP32[i1 >> 2] = 0;
          STACKTOP = i3;
          return;
         }
         HEAP32[i26 >> 2] = i47;
         HEAP32[i26 + 4 >> 2] = i58;
         __ZN7WebCore9ImageData6createERKNS_7IntSizeE(i25, i26);
         i49 = i25 | 0;
         i52 = HEAP32[i49 >> 2] | 0;
         HEAP32[i49 >> 2] = 0;
         i49 = HEAP32[i52 + 12 >> 2] | 0;
         i59 = HEAP32[i49 + 16 >> 2] | 0;
         do {
          if ((i59 | 0) == 0) {
           i81 = 0;
          } else {
           if ((HEAP32[i59 + 12 >> 2] | 0) == 0) {
            i81 = 0;
            break;
           }
           i81 = HEAP32[i49 + 8 >> 2] | 0;
          }
         } while (0);
         _memcpy(i81 | 0, HEAP32[i42 >> 2] | 0, i65) | 0;
         HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + i65;
         __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_9ImageDataE(i1, HEAP32[i2 >> 2] | 0, HEAP32[i2 + 88 >> 2] | 0, i52);
         if ((i52 | 0) == 0) {
          STACKTOP = i3;
          return;
         }
         i49 = i52 | 0;
         i59 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
         if ((i59 | 0) != 0) {
          HEAP32[i49 >> 2] = i59;
          STACKTOP = i3;
          return;
         }
         i59 = HEAP32[i52 + 12 >> 2] | 0;
         do {
          if ((i59 | 0) != 0) {
           i49 = i59 + 4 | 0;
           i57 = i49 | 0;
           i54 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
           if ((i54 | 0) != 0) {
            HEAP32[i57 >> 2] = i54;
            break;
           }
           i54 = i49 - 4 | 0;
           if ((i54 | 0) == 0) {
            break;
           }
           FUNCTION_TABLE_vi[HEAP32[(HEAP32[i54 >> 2] | 0) + 12 >> 2] & 63](i54);
          }
         } while (0);
         __ZN3WTF8fastFreeEPv(i52);
         STACKTOP = i3;
         return;
        }
       } while (0);
       HEAP8[i53] = 1;
       HEAP32[i1 + 4 >> 2] = -6;
       HEAP32[i1 >> 2] = 0;
       STACKTOP = i3;
       return;
      }
     } while (0);
     HEAP8[i53] = 1;
     HEAP32[i1 + 4 >> 2] = -6;
     HEAP32[i1 >> 2] = 0;
     STACKTOP = i3;
     return;
    }
   default:
    {
     i82 = i46;
     break L1;
    }
   }
  } else {
   i82 = i43;
  }
 } while (0);
 HEAP32[i42 >> 2] = i82 - 1;
 HEAP32[i1 + 4 >> 2] = -6;
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15CloneSerializer14dumpIfTerminalEN3JSC7JSValueERNS_23SerializationReturnCodeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, d53 = +0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, d59 = +0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, d69 = +0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 296 | 0;
 i5 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 40 | 0;
 i10 = i4 + 48 | 0;
 i11 = i4 + 56 | 0;
 i12 = i4 + 64 | 0;
 i13 = i4 + 80 | 0;
 i14 = i4 + 88 | 0;
 i15 = i4 + 96 | 0;
 i16 = i4 + 104 | 0;
 i17 = i4 + 120 | 0;
 i18 = i4 + 128 | 0;
 i19 = i4 + 136 | 0;
 i20 = i4 + 144 | 0;
 i21 = i4 + 160 | 0;
 i22 = i4 + 168 | 0;
 i23 = i4 + 176 | 0;
 i24 = i4 + 184 | 0;
 i25 = i4 + 200 | 0;
 i26 = i4 + 208 | 0;
 i27 = i4 + 216 | 0;
 i28 = i4 + 224 | 0;
 i29 = i4 + 232 | 0;
 i30 = i4 + 240 | 0;
 i31 = i4 + 248 | 0;
 i32 = i4 + 256 | 0;
 i33 = i4 + 264 | 0;
 i34 = i4 + 272 | 0;
 i35 = i4 + 280 | 0;
 i36 = i4 + 288 | 0;
 if ((HEAP32[i2 + 4 >> 2] | 0) != -5) {
  i37 = i2 | 0;
  i38 = HEAP32[i37 + 4 >> 2] | 0;
  i39 = i25 | 0;
  HEAP32[i39 >> 2] = HEAP32[i37 >> 2];
  HEAP32[i39 + 4 >> 2] = i38;
  __ZN7WebCore15CloneSerializer13dumpImmediateEN3JSC7JSValueE(i1, i25);
  i40 = 1;
  STACKTOP = i4;
  return i40 | 0;
 }
 i25 = HEAP8[(HEAP32[HEAP32[i2 >> 2] >> 2] | 0) + 52 | 0] | 0;
 if (i25 << 24 >> 24 == 5) {
  i38 = HEAP32[i2 >> 2] | 0;
  i39 = i38 + 12 | 0;
  i37 = HEAP32[i39 >> 2] | 0;
  do {
   if ((i37 | 0) == 0) {
    __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i38, HEAP32[i1 >> 2] | 0);
    i41 = HEAP32[i39 >> 2] | 0;
    i42 = (i41 | 0) == 0;
    if (!i42) {
     i43 = i41;
     i44 = 7;
     break;
    }
    i41 = i26 | 0;
    HEAP32[i41 >> 2] = 0;
    i45 = i42;
    i46 = 0;
    i47 = i41;
    i44 = 9;
   } else {
    i43 = i37;
    i44 = 7;
   }
  } while (0);
  do {
   if ((i44 | 0) == 7) {
    i37 = i43 | 0;
    i39 = HEAP32[i37 >> 2] | 0;
    i38 = i26 | 0;
    HEAP32[i38 >> 2] = i43;
    HEAP32[i37 >> 2] = i39 + 4;
    if ((i43 | 0) == 0) {
     i45 = 0;
     i46 = 0;
     i47 = i38;
     i44 = 9;
     break;
    }
    if ((HEAP32[i43 + 4 >> 2] | 0) == 0) {
     i45 = 0;
     i46 = i43;
     i47 = i38;
     i44 = 9;
     break;
    }
    __ZN7WebCore15CloneSerializer5writeENS_16SerializationTagE(i1, 16);
    __ZN7WebCore15CloneSerializer5writeERKN3WTF6StringE(i1, i26);
    i48 = 0;
    i49 = i43;
    i50 = i38;
   }
  } while (0);
  if ((i44 | 0) == 9) {
   __ZN7WebCore15CloneSerializer5writeENS_16SerializationTagE(i1, 17);
   i48 = i45;
   i49 = i46;
   i50 = i47;
  }
  i47 = HEAP32[i50 >> 2] | 0;
  do {
   if ((i47 | 0) != 0) {
    i50 = i47 | 0;
    i46 = (HEAP32[i50 >> 2] | 0) - 2 | 0;
    if ((i46 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i47);
     break;
    } else {
     HEAP32[i50 >> 2] = i46;
     break;
    }
   }
  } while (0);
  if (i48) {
   i40 = 1;
   STACKTOP = i4;
   return i40 | 0;
  }
  i48 = i49 | 0;
  i47 = (HEAP32[i48 >> 2] | 0) - 2 | 0;
  if ((i47 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i49);
   i40 = 1;
   STACKTOP = i4;
   return i40 | 0;
  } else {
   HEAP32[i48 >> 2] = i47;
   i40 = 1;
   STACKTOP = i4;
   return i40 | 0;
  }
 }
 L32 : do {
  if ((i25 & 255) >>> 0 > 16 >>> 0) {
   i47 = HEAP32[i2 >> 2] | 0;
   i48 = i47;
   if ((HEAP32[(i47 & -65536) + 1048 >> 2] | 0) == 2) {
    i51 = i48 + 8 | 0;
   } else {
    i51 = (HEAP32[i48 >> 2] | 0) + 32 | 0;
   }
   i48 = HEAP32[i51 >> 2] | 0;
   if ((i48 | 0) == 0) {
    break;
   } else {
    i52 = i48;
   }
   while (1) {
    if ((i52 | 0) == (__ZN3JSC12DateInstance6s_infoE | 0)) {
     break;
    }
    i52 = HEAP32[i52 + 4 >> 2] | 0;
    if ((i52 | 0) == 0) {
     break L32;
    }
   }
   __ZN7WebCore15CloneSerializer5writeENS_16SerializationTagE(i1, 11);
   i48 = i47 + 16 | 0;
   i49 = HEAP32[i48 >> 2] | 0;
   if ((i49 & 0 | 0) == 0 & (HEAP32[i48 + 4 >> 2] & -1 | 0) == (-1 | 0)) {
    d53 = +(i49 | 0);
   } else {
    d53 = +HEAPF64[i48 >> 3];
   }
   __ZN7WebCore15CloneSerializer5writeEd(i1, d53);
   i40 = 1;
   STACKTOP = i4;
   return i40 | 0;
  }
 } while (0);
 i52 = i2 | 0;
 i2 = HEAP32[i52 >> 2] | 0;
 i51 = i2;
 L48 : do {
  if ((i2 & 0 | 0) == 0 & (HEAP32[i52 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   if ((HEAPU8[(HEAP32[i51 >> 2] | 0) + 52 | 0] | 0) >>> 0 <= 16 >>> 0) {
    break;
   }
   i25 = i51;
   i48 = (HEAP32[(i51 & -65536) + 1048 >> 2] | 0) == 2;
   if (i48) {
    i54 = i25 + 8 | 0;
   } else {
    i54 = (HEAP32[i25 >> 2] | 0) + 32 | 0;
   }
   if ((HEAP32[i54 >> 2] | 0) == (__ZN3JSC7JSArray6s_infoE | 0)) {
    i40 = 0;
    STACKTOP = i4;
    return i40 | 0;
   }
   if (i48) {
    i55 = i25 + 8 | 0;
   } else {
    i55 = (HEAP32[i25 >> 2] | 0) + 32 | 0;
   }
   i25 = HEAP32[i55 >> 2] | 0;
   if ((i25 | 0) == 0) {
    break;
   } else {
    i56 = i25;
   }
   while (1) {
    if ((i56 | 0) == (__ZN3JSC7JSArray6s_infoE | 0)) {
     i40 = 0;
     break;
    }
    i56 = HEAP32[i56 + 4 >> 2] | 0;
    if ((i56 | 0) == 0) {
     break L48;
    }
   }
   STACKTOP = i4;
   return i40 | 0;
  }
 } while (0);
 if ((HEAPU8[(HEAP32[i51 >> 2] | 0) + 52 | 0] | 0) >>> 0 <= 16 >>> 0) {
  __ZN7WebCore15CloneSerializer5writeENS_16SerializationTagE(i1, 4);
  i40 = 1;
  STACKTOP = i4;
  return i40 | 0;
 }
 i56 = i51;
 HEAP32[i27 >> 2] = i56;
 if ((HEAP32[(i51 & -65536) + 1048 >> 2] | 0) == 2) {
  i57 = i56 + 8 | 0;
 } else {
  i57 = (HEAP32[i56 >> 2] | 0) + 32 | 0;
 }
 i55 = HEAP32[i57 >> 2] | 0;
 L75 : do {
  if ((i55 | 0) != 0) {
   i57 = i55;
   while (1) {
    if ((i57 | 0) == (__ZN3JSC13BooleanObject6s_infoE | 0)) {
     break;
    }
    i57 = HEAP32[i57 + 4 >> 2] | 0;
    if ((i57 | 0) == 0) {
     break L75;
    }
   }
   if (__ZN7WebCore15CloneSerializer17checkForDuplicateEPN3JSC8JSObjectE(i1, i56) | 0) {
    i40 = 1;
    STACKTOP = i4;
    return i40 | 0;
   }
   HEAP32[i22 >> 2] = i56;
   HEAP32[i23 >> 2] = HEAP32[i1 + 108 >> 2];
   __ZN3WTF9HashTableIPN3JSC8JSObjectENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_iEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i24, i1 + 96 | 0, i22, i23);
   i57 = i1 + 8 | 0;
   i54 = HEAP32[i22 >> 2] | 0;
   i52 = (i54 | 0) == 0;
   i2 = i57 | 0;
   i47 = HEAP32[i2 >> 2] | 0;
   i25 = (i52 ? 0 : 0) | i54;
   i54 = (i52 ? -6 : -5) | 0;
   if ((i47 | 0) < (HEAP32[i1 + 12 >> 2] | 0)) {
    i52 = (HEAP32[i1 + 80 >> 2] | 0) + (i47 << 3) | 0;
    HEAP32[i52 >> 2] = i25;
    HEAP32[i52 + 4 >> 2] = i54;
    HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
   } else {
    i2 = i21 | 0;
    HEAP32[i2 >> 2] = i25;
    HEAP32[i2 + 4 >> 2] = i54;
    __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i57, i21);
   }
   i57 = i51 + 16 | 0;
   i54 = HEAP32[i57 >> 2] | 0;
   d53 = +HEAPF64[i57 >> 3];
   i2 = HEAP32[i1 >> 2] | 0;
   i25 = HEAP32[i57 + 4 >> 2] | 0;
   do {
    if ((i25 | 0) == -1) {
     i58 = (i54 | 0) != 0;
    } else {
     if (i25 >>> 0 < 4294967289 >>> 0) {
      d59 = d53;
      i57 = d59 > +0;
      i58 = i57 | d59 < +0 & (i57 ^ 1);
      break;
     }
     if ((i25 | 0) == (-2 | 0)) {
      i58 = (i54 | 0) != 0;
      break;
     } else if ((i25 | 0) != (-5 | 0)) {
      i58 = 0;
      break;
     }
     i57 = i54;
     i52 = HEAP32[i57 >> 2] | 0;
     if ((HEAP8[i52 + 52 | 0] | 0) == 5) {
      i58 = __ZNK3JSC8JSString9toBooleanEv(i57) | 0;
      break;
     }
     if ((HEAP8[i52 + 53 | 0] & 1) == 0) {
      i58 = 1;
      break;
     }
     i58 = (HEAP32[i52 + 4 >> 2] | 0) != (HEAP32[(HEAP32[HEAP32[i2 + 16 >> 2] >> 2] | 0) + 4 >> 2] | 0);
    }
   } while (0);
   __ZN7WebCore15CloneSerializer5writeENS_16SerializationTagE(i1, i58 ? 24 : 25);
   i40 = 1;
   STACKTOP = i4;
   return i40 | 0;
  }
 } while (0);
 i58 = (i51 & -65536) + 1048 | 0;
 i21 = (HEAP32[i58 >> 2] | 0) == 2;
 if (i21) {
  i60 = i56 + 8 | 0;
 } else {
  i60 = (HEAP32[i56 >> 2] | 0) + 32 | 0;
 }
 i22 = HEAP32[i60 >> 2] | 0;
 L107 : do {
  if ((i22 | 0) != 0) {
   i60 = i22;
   while (1) {
    if ((i60 | 0) == (__ZN3JSC12StringObject6s_infoE | 0)) {
     break;
    }
    i60 = HEAP32[i60 + 4 >> 2] | 0;
    if ((i60 | 0) == 0) {
     break L107;
    }
   }
   if (__ZN7WebCore15CloneSerializer17checkForDuplicateEPN3JSC8JSObjectE(i1, i56) | 0) {
    i40 = 1;
    STACKTOP = i4;
    return i40 | 0;
   }
   HEAP32[i18 >> 2] = i56;
   HEAP32[i19 >> 2] = HEAP32[i1 + 108 >> 2];
   __ZN3WTF9HashTableIPN3JSC8JSObjectENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_iEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i20, i1 + 96 | 0, i18, i19);
   i60 = i1 + 8 | 0;
   i23 = HEAP32[i18 >> 2] | 0;
   i24 = (i23 | 0) == 0;
   i55 = i60 | 0;
   i2 = HEAP32[i55 >> 2] | 0;
   i54 = (i24 ? 0 : 0) | i23;
   i23 = (i24 ? -6 : -5) | 0;
   if ((i2 | 0) < (HEAP32[i1 + 12 >> 2] | 0)) {
    i24 = (HEAP32[i1 + 80 >> 2] | 0) + (i2 << 3) | 0;
    HEAP32[i24 >> 2] = i54;
    HEAP32[i24 + 4 >> 2] = i23;
    HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 1;
   } else {
    i55 = i17 | 0;
    HEAP32[i55 >> 2] = i54;
    HEAP32[i55 + 4 >> 2] = i23;
    __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i60, i17);
   }
   i60 = HEAP32[i51 + 16 >> 2] | 0;
   i23 = i60 + 12 | 0;
   i55 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i55 | 0) == 0) {
     __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i60, HEAP32[i1 >> 2] | 0);
     i54 = HEAP32[i23 >> 2] | 0;
     i24 = (i54 | 0) == 0;
     if (!i24) {
      i61 = i54;
      i44 = 77;
      break;
     }
     i54 = i28 | 0;
     HEAP32[i54 >> 2] = 0;
     i62 = i24;
     i63 = 0;
     i64 = i54;
     i44 = 79;
    } else {
     i61 = i55;
     i44 = 77;
    }
   } while (0);
   do {
    if ((i44 | 0) == 77) {
     i55 = i61 | 0;
     i23 = HEAP32[i55 >> 2] | 0;
     i60 = i28 | 0;
     HEAP32[i60 >> 2] = i61;
     HEAP32[i55 >> 2] = i23 + 4;
     if ((i61 | 0) == 0) {
      i62 = 0;
      i63 = 0;
      i64 = i60;
      i44 = 79;
      break;
     }
     if ((HEAP32[i61 + 4 >> 2] | 0) == 0) {
      i62 = 0;
      i63 = i61;
      i64 = i60;
      i44 = 79;
      break;
     }
     __ZN7WebCore15CloneSerializer5writeENS_16SerializationTagE(i1, 26);
     __ZN7WebCore15CloneSerializer5writeERKN3WTF6StringE(i1, i28);
     i65 = 0;
     i66 = i61;
     i67 = i60;
    }
   } while (0);
   if ((i44 | 0) == 79) {
    __ZN7WebCore15CloneSerializer5writeENS_16SerializationTagE(i1, 27);
    i65 = i62;
    i66 = i63;
    i67 = i64;
   }
   i60 = HEAP32[i67 >> 2] | 0;
   do {
    if ((i60 | 0) != 0) {
     i23 = i60 | 0;
     i55 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
     if ((i55 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i60);
      break;
     } else {
      HEAP32[i23 >> 2] = i55;
      break;
     }
    }
   } while (0);
   if (i65) {
    i40 = 1;
    STACKTOP = i4;
    return i40 | 0;
   }
   i60 = i66 | 0;
   i55 = (HEAP32[i60 >> 2] | 0) - 2 | 0;
   if ((i55 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i66);
    i40 = 1;
    STACKTOP = i4;
    return i40 | 0;
   } else {
    HEAP32[i60 >> 2] = i55;
    i40 = 1;
    STACKTOP = i4;
    return i40 | 0;
   }
  }
 } while (0);
 if (i21) {
  i68 = i56 + 8 | 0;
 } else {
  i68 = (HEAP32[i56 >> 2] | 0) + 32 | 0;
 }
 i21 = HEAP32[i68 >> 2] | 0;
 L148 : do {
  if ((i21 | 0) != 0) {
   i68 = i21;
   while (1) {
    if ((i68 | 0) == (__ZN3JSC12NumberObject6s_infoE | 0)) {
     break;
    }
    i68 = HEAP32[i68 + 4 >> 2] | 0;
    if ((i68 | 0) == 0) {
     break L148;
    }
   }
   if (__ZN7WebCore15CloneSerializer17checkForDuplicateEPN3JSC8JSObjectE(i1, i56) | 0) {
    i40 = 1;
    STACKTOP = i4;
    return i40 | 0;
   }
   HEAP32[i14 >> 2] = i56;
   HEAP32[i15 >> 2] = HEAP32[i1 + 108 >> 2];
   __ZN3WTF9HashTableIPN3JSC8JSObjectENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_iEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i16, i1 + 96 | 0, i14, i15);
   i68 = i1 + 8 | 0;
   i66 = HEAP32[i14 >> 2] | 0;
   i65 = (i66 | 0) == 0;
   i67 = i68 | 0;
   i64 = HEAP32[i67 >> 2] | 0;
   i63 = (i65 ? 0 : 0) | i66;
   i66 = (i65 ? -6 : -5) | 0;
   if ((i64 | 0) < (HEAP32[i1 + 12 >> 2] | 0)) {
    i65 = (HEAP32[i1 + 80 >> 2] | 0) + (i64 << 3) | 0;
    HEAP32[i65 >> 2] = i63;
    HEAP32[i65 + 4 >> 2] = i66;
    HEAP32[i67 >> 2] = (HEAP32[i67 >> 2] | 0) + 1;
   } else {
    i67 = i13 | 0;
    HEAP32[i67 >> 2] = i63;
    HEAP32[i67 + 4 >> 2] = i66;
    __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i68, i13);
   }
   __ZN7WebCore15CloneSerializer5writeENS_16SerializationTagE(i1, 28);
   i68 = i51 + 16 | 0;
   i66 = HEAP32[i68 >> 2] | 0;
   if ((i66 & 0 | 0) == 0 & (HEAP32[i68 + 4 >> 2] & -1 | 0) == (-1 | 0)) {
    d69 = +(i66 | 0);
   } else {
    d69 = +HEAPF64[i68 >> 3];
   }
   __ZN7WebCore15CloneSerializer5writeEd(i1, d69);
   i40 = 1;
   STACKTOP = i4;
   return i40 | 0;
  }
 } while (0);
 i13 = (i51 | 0) == 0;
 i14 = i13 ? -6 : -5;
 HEAP32[i29 + 4 >> 2] = i14;
 HEAP32[i29 >> 2] = i51;
 i15 = __ZN7WebCore6toFileEN3JSC7JSValueE(i29) | 0;
 if ((i15 | 0) != 0) {
  __ZN7WebCore15CloneSerializer5writeENS_16SerializationTagE(i1, 12);
  __ZN7WebCore15CloneSerializer5writeEPKNS_4FileE(i1, i15);
  i40 = 1;
  STACKTOP = i4;
  return i40 | 0;
 }
 HEAP32[i30 + 4 >> 2] = i14;
 HEAP32[i30 >> 2] = i51;
 i15 = __ZN7WebCore10toFileListEN3JSC7JSValueE(i30) | 0;
 if ((i15 | 0) != 0) {
  __ZN7WebCore15CloneSerializer5writeENS_16SerializationTagE(i1, 13);
  i30 = HEAP32[i15 + 16 >> 2] | 0;
  __ZN7WebCoreL17writeLittleEndianIjEEvRN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEET_(HEAP32[i1 + 88 >> 2] | 0, i30);
  if ((i30 | 0) == 0) {
   i40 = 1;
   STACKTOP = i4;
   return i40 | 0;
  } else {
   i70 = 0;
  }
  while (1) {
   __ZN7WebCore15CloneSerializer5writeEPKNS_4FileE(i1, __ZNK7WebCore8FileList4itemEj(i15, i70) | 0);
   i29 = i70 + 1 | 0;
   if (i29 >>> 0 < i30 >>> 0) {
    i70 = i29;
   } else {
    i40 = 1;
    break;
   }
  }
  STACKTOP = i4;
  return i40 | 0;
 }
 HEAP32[i31 + 4 >> 2] = i14;
 HEAP32[i31 >> 2] = i51;
 i70 = __ZN7WebCore6toBlobEN3JSC7JSValueE(i31) | 0;
 if ((i70 | 0) != 0) {
  __ZN7WebCore15CloneSerializer5writeENS_16SerializationTagE(i1, 15);
  i31 = HEAP32[i1 + 92 >> 2] | 0;
  i30 = i70 + 12 | 0;
  i15 = i31 + 8 | 0;
  i29 = HEAP32[i15 >> 2] | 0;
  do {
   if ((i29 | 0) == (HEAP32[i31 + 4 >> 2] | 0)) {
    __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i31, i29 + 1 | 0);
    i16 = HEAP32[i30 >> 2] | 0;
    HEAP32[(HEAP32[i31 >> 2] | 0) + (HEAP32[i15 >> 2] << 2) >> 2] = i16;
    if ((i16 | 0) == 0) {
     break;
    }
    i21 = i16 | 0;
    HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 2;
   } else {
    i21 = HEAP32[i30 >> 2] | 0;
    HEAP32[(HEAP32[i31 >> 2] | 0) + (i29 << 2) >> 2] = i21;
    if ((i21 | 0) == 0) {
     break;
    }
    i16 = i21 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   }
  } while (0);
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
  __ZN7WebCore15CloneSerializer5writeERKN3WTF6StringE(i1, i30 | 0);
  __ZN7WebCore15CloneSerializer5writeERKN3WTF6StringE(i1, i70 + 60 | 0);
  i30 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i70 >> 2] | 0) + 12 >> 2] & 63](i70) | 0;
  __ZN7WebCore15CloneSerializer5writeEy(i1, i30, tempRet0);
  i40 = 1;
  STACKTOP = i4;
  return i40 | 0;
 }
 HEAP32[i32 + 4 >> 2] = i14;
 HEAP32[i32 >> 2] = i51;
 i51 = __ZN7WebCore11toImageDataEN3JSC7JSValueE(i32) | 0;
 if ((i51 | 0) != 0) {
  __ZN7WebCore15CloneSerializer5writeENS_16SerializationTagE(i1, 14);
  __ZN7WebCore15CloneSerializer5writeEi(i1, HEAP32[i51 + 4 >> 2] | 0);
  __ZN7WebCore15CloneSerializer5writeEi(i1, HEAP32[i51 + 8 >> 2] | 0);
  i32 = i51 + 12 | 0;
  i51 = HEAP32[i32 >> 2] | 0;
  i14 = HEAP32[i51 + 16 >> 2] | 0;
  do {
   if ((i14 | 0) == 0) {
    i71 = 0;
   } else {
    if ((HEAP32[i14 + 12 >> 2] | 0) == 0) {
     i71 = 0;
     break;
    }
    i71 = HEAP32[i51 + 20 >> 2] | 0;
   }
  } while (0);
  i51 = i1 + 88 | 0;
  __ZN7WebCoreL17writeLittleEndianIjEEvRN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEET_(HEAP32[i51 >> 2] | 0, i71);
  i71 = HEAP32[i32 >> 2] | 0;
  i32 = HEAP32[i71 + 16 >> 2] | 0;
  do {
   if ((i32 | 0) == 0) {
    i72 = 0;
    i73 = 0;
   } else {
    if ((HEAP32[i32 + 12 >> 2] | 0) == 0) {
     i74 = 0;
    } else {
     i74 = HEAP32[i71 + 8 >> 2] | 0;
    }
    if ((HEAP32[i32 + 12 >> 2] | 0) == 0) {
     i72 = 0;
     i73 = i74;
     break;
    }
    i72 = HEAP32[i71 + 20 >> 2] | 0;
    i73 = i74;
   }
  } while (0);
  __ZN3WTF6VectorIhLj0ENS_15CrashOnOverflowEE6appendIhEEvPKT_j(HEAP32[i51 >> 2] | 0, i73, i72);
  i40 = 1;
  STACKTOP = i4;
  return i40 | 0;
 }
 i72 = (HEAP32[i58 >> 2] | 0) == 2;
 if (i72) {
  i75 = i56 + 8 | 0;
 } else {
  i75 = (HEAP32[i56 >> 2] | 0) + 32 | 0;
 }
 i58 = HEAP32[i75 >> 2] | 0;
 L207 : do {
  if ((i58 | 0) != 0) {
   i75 = i58;
   while (1) {
    if ((i75 | 0) == (__ZN3JSC12RegExpObject6s_infoE | 0)) {
     break;
    }
    i75 = HEAP32[i75 + 4 >> 2] | 0;
    if ((i75 | 0) == 0) {
     break L207;
    }
   }
   i75 = i56 + 8 | 0;
   i73 = HEAP32[(HEAP32[i75 >> 2] | 0) + 12 >> 2] | 0;
   if ((i73 & 1 | 0) == 0) {
    i76 = 0;
   } else {
    HEAP8[i33 | 0] = 103;
    i76 = 1;
   }
   if ((i73 & 2 | 0) == 0) {
    i77 = i76;
   } else {
    HEAP8[i33 + i76 | 0] = 105;
    i77 = i76 + 1 | 0;
   }
   if ((i73 & 4 | 0) == 0) {
    i78 = i77;
   } else {
    HEAP8[i33 + i77 | 0] = 109;
    i78 = i77 + 1 | 0;
   }
   __ZN7WebCore15CloneSerializer5writeENS_16SerializationTagE(i1, 18);
   __ZN7WebCore15CloneSerializer5writeERKN3WTF6StringE(i1, (HEAP32[i75 >> 2] | 0) + 8 | 0);
   __ZN3WTF6StringC1EPKcj(i34, i33 | 0, i78);
   __ZN7WebCore15CloneSerializer5writeERKN3WTF6StringE(i1, i34);
   i75 = HEAP32[i34 >> 2] | 0;
   if ((i75 | 0) == 0) {
    i40 = 1;
    STACKTOP = i4;
    return i40 | 0;
   }
   i73 = i75 | 0;
   i51 = (HEAP32[i73 >> 2] | 0) - 2 | 0;
   if ((i51 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i75);
    i40 = 1;
    STACKTOP = i4;
    return i40 | 0;
   } else {
    HEAP32[i73 >> 2] = i51;
    i40 = 1;
    STACKTOP = i4;
    return i40 | 0;
   }
  }
 } while (0);
 if (i72) {
  i79 = i56 + 8 | 0;
 } else {
  i79 = (HEAP32[i56 >> 2] | 0) + 32 | 0;
 }
 i34 = HEAP32[i79 >> 2] | 0;
 L234 : do {
  if ((i34 | 0) != 0) {
   i79 = i34;
   while (1) {
    if ((i79 | 0) == (__ZN7WebCore13JSMessagePort6s_infoE | 0)) {
     break;
    }
    i79 = HEAP32[i79 + 4 >> 2] | 0;
    if ((i79 | 0) == 0) {
     break L234;
    }
   }
   i79 = i1 + 116 | 0;
   __ZN3WTF7HashMapIPN3JSC8JSObjectEjNS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS6_IjEEE4findERKS3_(i35, i79, i27);
   i78 = HEAP32[i35 >> 2] | 0;
   if ((i78 | 0) == ((HEAP32[i79 >> 2] | 0) + (HEAP32[i1 + 120 >> 2] << 3) | 0)) {
    HEAP32[i3 >> 2] = 3;
    i40 = 1;
    STACKTOP = i4;
    return i40 | 0;
   } else {
    __ZN7WebCore15CloneSerializer5writeENS_16SerializationTagE(i1, 20);
    __ZN7WebCoreL17writeLittleEndianIjEEvRN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEET_(HEAP32[i1 + 88 >> 2] | 0, HEAP32[i78 + 4 >> 2] | 0);
    i40 = 1;
    STACKTOP = i4;
    return i40 | 0;
   }
  }
 } while (0);
 L245 : do {
  if (!i13) {
   if (i72) {
    i80 = i56 + 8 | 0;
   } else {
    i80 = (HEAP32[i56 >> 2] | 0) + 32 | 0;
   }
   i35 = HEAP32[i80 >> 2] | 0;
   if ((i35 | 0) == 0) {
    break;
   } else {
    i81 = i35;
   }
   while (1) {
    if ((i81 | 0) == (__ZN3JSC13JSArrayBuffer6s_infoE | 0)) {
     break;
    }
    i81 = HEAP32[i81 + 4 >> 2] | 0;
    if ((i81 | 0) == 0) {
     break L245;
    }
   }
   i35 = HEAP32[i56 + 8 >> 2] | 0;
   if ((i35 | 0) == 0) {
    break;
   }
   i34 = i35 + 12 | 0;
   if ((HEAP32[i34 >> 2] | 0) == 0) {
    HEAP32[i3 >> 2] = 3;
    i40 = 1;
    STACKTOP = i4;
    return i40 | 0;
   }
   i78 = i1 + 136 | 0;
   __ZN3WTF7HashMapIPN3JSC8JSObjectEjNS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS6_IjEEE4findERKS3_(i36, i78, i27);
   i79 = HEAP32[i36 >> 2] | 0;
   if ((i79 | 0) != ((HEAP32[i78 >> 2] | 0) + (HEAP32[i1 + 140 >> 2] << 3) | 0)) {
    __ZN7WebCore15CloneSerializer5writeENS_16SerializationTagE(i1, 23);
    __ZN7WebCoreL17writeLittleEndianIjEEvRN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEET_(HEAP32[i1 + 88 >> 2] | 0, HEAP32[i79 + 4 >> 2] | 0);
    i40 = 1;
    STACKTOP = i4;
    return i40 | 0;
   }
   i79 = HEAP32[i27 >> 2] | 0;
   if (__ZN7WebCore15CloneSerializer17checkForDuplicateEPN3JSC8JSObjectE(i1, i79) | 0) {
    i40 = 1;
    STACKTOP = i4;
    return i40 | 0;
   }
   HEAP32[i10 >> 2] = i79;
   HEAP32[i11 >> 2] = HEAP32[i1 + 108 >> 2];
   __ZN3WTF9HashTableIPN3JSC8JSObjectENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_iEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i12, i1 + 96 | 0, i10, i11);
   i79 = i1 + 8 | 0;
   i78 = HEAP32[i10 >> 2] | 0;
   i33 = (i78 | 0) == 0;
   i77 = i79 | 0;
   i76 = HEAP32[i77 >> 2] | 0;
   i58 = (i33 ? 0 : 0) | i78;
   i78 = (i33 ? -6 : -5) | 0;
   if ((i76 | 0) < (HEAP32[i1 + 12 >> 2] | 0)) {
    i33 = (HEAP32[i1 + 80 >> 2] | 0) + (i76 << 3) | 0;
    HEAP32[i33 >> 2] = i58;
    HEAP32[i33 + 4 >> 2] = i78;
    HEAP32[i77 >> 2] = (HEAP32[i77 >> 2] | 0) + 1;
   } else {
    i77 = i9 | 0;
    HEAP32[i77 >> 2] = i58;
    HEAP32[i77 + 4 >> 2] = i78;
    __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i79, i9);
   }
   __ZN7WebCore15CloneSerializer5writeENS_16SerializationTagE(i1, 21);
   i79 = i35 + 16 | 0;
   i35 = i1 + 88 | 0;
   __ZN7WebCoreL17writeLittleEndianIjEEvRN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEET_(HEAP32[i35 >> 2] | 0, HEAP32[i79 >> 2] | 0);
   __ZN3WTF6VectorIhLj0ENS_15CrashOnOverflowEE6appendIhEEvPKT_j(HEAP32[i35 >> 2] | 0, HEAP32[i34 >> 2] | 0, HEAP32[i79 >> 2] | 0);
   i40 = 1;
   STACKTOP = i4;
   return i40 | 0;
  }
 } while (0);
 if (i72) {
  i82 = i56 + 8 | 0;
 } else {
  i82 = (HEAP32[i56 >> 2] | 0) + 32 | 0;
 }
 i72 = HEAP32[i82 >> 2] | 0;
 if ((i72 | 0) == 0) {
  i40 = 0;
  STACKTOP = i4;
  return i40 | 0;
 } else {
  i83 = i72;
 }
 while (1) {
  if ((i83 | 0) == (__ZN3JSC17JSArrayBufferView6s_infoE | 0)) {
   break;
  }
  i72 = HEAP32[i83 + 4 >> 2] | 0;
  if ((i72 | 0) == 0) {
   i40 = 0;
   i44 = 209;
   break;
  } else {
   i83 = i72;
  }
 }
 if ((i44 | 0) == 209) {
  STACKTOP = i4;
  return i40 | 0;
 }
 if (__ZN7WebCore15CloneSerializer17checkForDuplicateEPN3JSC8JSObjectE(i1, i56) | 0) {
  i40 = 1;
  STACKTOP = i4;
  return i40 | 0;
 }
 i44 = __ZN7WebCore15CloneSerializer19dumpArrayBufferViewEPN3JSC8JSObjectERNS_23SerializationReturnCodeE(i1, i56, i3) | 0;
 HEAP32[i6 >> 2] = i56;
 HEAP32[i7 >> 2] = HEAP32[i1 + 108 >> 2];
 __ZN3WTF9HashTableIPN3JSC8JSObjectENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_iEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i8, i1 + 96 | 0, i6, i7);
 i7 = i1 + 8 | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 i6 = (i8 | 0) == 0;
 i56 = i7 | 0;
 i3 = HEAP32[i56 >> 2] | 0;
 i83 = (i6 ? 0 : 0) | i8;
 i8 = (i6 ? -6 : -5) | 0;
 if ((i3 | 0) < (HEAP32[i1 + 12 >> 2] | 0)) {
  i6 = (HEAP32[i1 + 80 >> 2] | 0) + (i3 << 3) | 0;
  HEAP32[i6 >> 2] = i83;
  HEAP32[i6 + 4 >> 2] = i8;
  HEAP32[i56 >> 2] = (HEAP32[i56 >> 2] | 0) + 1;
  i40 = i44;
  STACKTOP = i4;
  return i40 | 0;
 } else {
  i56 = i5 | 0;
  HEAP32[i56 >> 2] = i83;
  HEAP32[i56 + 4 >> 2] = i8;
  __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i7, i5);
  i40 = i44;
  STACKTOP = i4;
  return i40 | 0;
 }
 return 0;
}
function __ZN7WebCore17CloneDeserializer19readArrayBufferViewERN3JSC7JSValueE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 168 | 0;
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
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 i19 = i3 + 120 | 0;
 i20 = i3 + 128 | 0;
 i21 = i3 + 136 | 0;
 i22 = i3 + 144 | 0;
 i23 = i3 + 152 | 0;
 i24 = i3 + 160 | 0;
 i25 = i1 + 96 | 0;
 i26 = HEAP32[i25 >> 2] | 0;
 i27 = HEAP32[i1 + 100 >> 2] | 0;
 if (i26 >>> 0 >= i27 >>> 0) {
  i28 = 0;
  STACKTOP = i3;
  return i28 | 0;
 }
 i29 = i26 + 1 | 0;
 HEAP32[i25 >> 2] = i29;
 i30 = HEAPU8[i26] | 0;
 i31 = i1 + 4 | 0;
 do {
  if ((HEAP8[i31] & 1) == 0) {
   i32 = i27 - 4 | 0;
   if (i29 >>> 0 > i32 >>> 0) {
    break;
   }
   i33 = i26 + 2 | 0;
   HEAP32[i25 >> 2] = i33;
   i34 = HEAPU8[i29] | 0;
   i35 = i26 + 3 | 0;
   HEAP32[i25 >> 2] = i35;
   i36 = (HEAPU8[i33] | 0) << 8 | i34;
   i34 = i26 + 4 | 0;
   HEAP32[i25 >> 2] = i34;
   i33 = i36 | (HEAPU8[i35] | 0) << 16;
   i35 = i26 + 5 | 0;
   HEAP32[i25 >> 2] = i35;
   i36 = i33 | (HEAPU8[i34] | 0) << 24;
   if (i35 >>> 0 > i32 >>> 0) {
    HEAP8[i31] = 1;
    i28 = 0;
    STACKTOP = i3;
    return i28 | 0;
   }
   i32 = i26 + 6 | 0;
   HEAP32[i25 >> 2] = i32;
   i34 = HEAPU8[i35] | 0;
   i35 = i26 + 7 | 0;
   HEAP32[i25 >> 2] = i35;
   i33 = (HEAPU8[i32] | 0) << 8 | i34;
   i34 = i26 + 8 | 0;
   HEAP32[i25 >> 2] = i34;
   i32 = i33 | (HEAPU8[i35] | 0) << 16;
   HEAP32[i25 >> 2] = i26 + 9;
   i35 = i32 | (HEAPU8[i34] | 0) << 24;
   __ZN7WebCore17CloneDeserializer12readTerminalEv(i4, i1);
   i34 = HEAP32[i4 >> 2] | 0;
   if ((i34 | 0) == 0) {
    i28 = 0;
    STACKTOP = i3;
    return i28 | 0;
   }
   i32 = i34;
   i33 = (HEAP32[(i34 & -65536) + 1048 >> 2] | 0) == 2;
   if (i33) {
    i37 = i32 + 8 | 0;
   } else {
    i37 = (HEAP32[i32 >> 2] | 0) + 32 | 0;
   }
   i32 = HEAP32[i37 >> 2] | 0;
   if ((i32 | 0) == 0) {
    i28 = 0;
    STACKTOP = i3;
    return i28 | 0;
   } else {
    i38 = i32;
   }
   while (1) {
    if ((i38 | 0) == (__ZN3JSC13JSArrayBuffer6s_infoE | 0)) {
     break;
    }
    i32 = HEAP32[i38 + 4 >> 2] | 0;
    if ((i32 | 0) == 0) {
     i28 = 0;
     i39 = 135;
     break;
    } else {
     i38 = i32;
    }
   }
   if ((i39 | 0) == 135) {
    STACKTOP = i3;
    return i28 | 0;
   }
   switch (i30 | 0) {
   case 9:
    {
     i40 = 8;
     break;
    }
   case 0:
   case 1:
   case 2:
   case 3:
    {
     i40 = 1;
     break;
    }
   case 4:
   case 5:
    {
     i40 = 2;
     break;
    }
   case 6:
   case 7:
   case 8:
    {
     i40 = 4;
     break;
    }
   default:
    {
     i28 = 0;
     STACKTOP = i3;
     return i28 | 0;
    }
   }
   i32 = (i35 >>> 0) / (i40 >>> 0) & -1;
   if ((Math_imul(i32, i40) | 0) != (i35 | 0)) {
    i28 = 0;
    STACKTOP = i3;
    return i28 | 0;
   }
   i41 = i34;
   if (i33) {
    i42 = i41 + 8 | 0;
   } else {
    i42 = (HEAP32[i41 >> 2] | 0) + 32 | 0;
   }
   i41 = HEAP32[i42 >> 2] | 0;
   L39 : do {
    if ((i41 | 0) == 0) {
     i43 = 0;
     i44 = 1;
    } else {
     i45 = i41;
     while (1) {
      if ((i45 | 0) == (__ZN3JSC13JSArrayBuffer6s_infoE | 0)) {
       break;
      }
      i46 = HEAP32[i45 + 4 >> 2] | 0;
      if ((i46 | 0) == 0) {
       i43 = 0;
       i44 = 1;
       break L39;
      } else {
       i45 = i46;
      }
     }
     i45 = HEAP32[i34 + 8 >> 2] | 0;
     if ((i45 | 0) == 0) {
      i43 = 0;
      i44 = 1;
      break;
     }
     i46 = i45 | 0;
     HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 2;
     i43 = i45;
     i44 = 0;
    }
   } while (0);
   L46 : do {
    switch (i30 | 0) {
    case 0:
     {
      i34 = i6 | 0;
      HEAP32[i34 >> 2] = i43;
      if (!i44) {
       i41 = i43 | 0;
       HEAP32[i41 >> 2] = (HEAP32[i41 >> 2] | 0) + 2;
      }
      __ZN3JSC8DataView6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i5, i6, i36, i32);
      i41 = i5 | 0;
      i33 = HEAP32[i41 >> 2] | 0;
      do {
       if ((i33 | 0) == 0) {
        i35 = i2 | 0;
        HEAP32[i35 >> 2] = 0;
        HEAP32[i35 + 4 >> 2] = -3;
       } else {
        i35 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i33 >> 2] | 0) + 16 >> 2] & 31](i33 | 0, HEAP32[i1 >> 2] | 0, HEAP32[i1 + 88 >> 2] | 0) | 0;
        i45 = (i35 | 0) == 0;
        i46 = HEAP32[i41 >> 2] | 0;
        i47 = i2 | 0;
        HEAP32[i47 >> 2] = i35 | (i45 ? 0 : 0);
        HEAP32[i47 + 4 >> 2] = i45 ? -6 : -5;
        if ((i46 | 0) == 0) {
         break;
        }
        i45 = i46 + 4 | 0;
        i46 = i45 | 0;
        i47 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
        if ((i47 | 0) != 0) {
         HEAP32[i46 >> 2] = i47;
         break;
        }
        i47 = i45 - 4 | 0;
        if ((i47 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i47 >> 2] | 0) + 12 >> 2] & 63](i47);
       }
      } while (0);
      i41 = HEAP32[i34 >> 2] | 0;
      if ((i41 | 0) == 0) {
       i48 = 1;
       break L46;
      }
      __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i41 | 0);
      i48 = 1;
      break;
     }
    case 1:
     {
      i41 = i8 | 0;
      HEAP32[i41 >> 2] = i43;
      if (!i44) {
       i33 = i43 | 0;
       HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 2;
      }
      __ZN3JSC21GenericTypedArrayViewINS_11Int8AdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i7, i8, i36, i32);
      i33 = HEAP32[i7 >> 2] | 0;
      do {
       if ((i33 | 0) == 0) {
        i47 = i2 | 0;
        HEAP32[i47 >> 2] = 0;
        HEAP32[i47 + 4 >> 2] = -3;
       } else {
        i47 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i33 >> 2] | 0) + 16 >> 2] & 31](i33 | 0, HEAP32[i1 >> 2] | 0, HEAP32[i1 + 88 >> 2] | 0) | 0;
        i45 = (i47 | 0) == 0;
        i46 = i2 | 0;
        HEAP32[i46 >> 2] = i47 | (i45 ? 0 : 0);
        HEAP32[i46 + 4 >> 2] = i45 ? -6 : -5;
        i45 = i33 + 4 | 0;
        i46 = i45 | 0;
        i47 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
        if ((i47 | 0) != 0) {
         HEAP32[i46 >> 2] = i47;
         break;
        }
        i47 = i45 - 4 | 0;
        if ((i47 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i47 >> 2] | 0) + 12 >> 2] & 63](i47);
       }
      } while (0);
      i33 = HEAP32[i41 >> 2] | 0;
      if ((i33 | 0) == 0) {
       i48 = 1;
       break L46;
      }
      __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i33 | 0);
      i48 = 1;
      break;
     }
    case 2:
     {
      i33 = i10 | 0;
      HEAP32[i33 >> 2] = i43;
      if (!i44) {
       i34 = i43 | 0;
       HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 2;
      }
      __ZN3JSC21GenericTypedArrayViewINS_12Uint8AdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i9, i10, i36, i32);
      i34 = HEAP32[i9 >> 2] | 0;
      do {
       if ((i34 | 0) == 0) {
        i47 = i2 | 0;
        HEAP32[i47 >> 2] = 0;
        HEAP32[i47 + 4 >> 2] = -3;
       } else {
        i47 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i34 >> 2] | 0) + 16 >> 2] & 31](i34 | 0, HEAP32[i1 >> 2] | 0, HEAP32[i1 + 88 >> 2] | 0) | 0;
        i45 = (i47 | 0) == 0;
        i46 = i2 | 0;
        HEAP32[i46 >> 2] = i47 | (i45 ? 0 : 0);
        HEAP32[i46 + 4 >> 2] = i45 ? -6 : -5;
        i45 = i34 + 4 | 0;
        i46 = i45 | 0;
        i47 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
        if ((i47 | 0) != 0) {
         HEAP32[i46 >> 2] = i47;
         break;
        }
        i47 = i45 - 4 | 0;
        if ((i47 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i47 >> 2] | 0) + 12 >> 2] & 63](i47);
       }
      } while (0);
      i34 = HEAP32[i33 >> 2] | 0;
      if ((i34 | 0) == 0) {
       i48 = 1;
       break L46;
      }
      __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i34 | 0);
      i48 = 1;
      break;
     }
    case 3:
     {
      i34 = i12 | 0;
      HEAP32[i34 >> 2] = i43;
      if (!i44) {
       i41 = i43 | 0;
       HEAP32[i41 >> 2] = (HEAP32[i41 >> 2] | 0) + 2;
      }
      __ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i11, i12, i36, i32);
      i41 = HEAP32[i11 >> 2] | 0;
      do {
       if ((i41 | 0) == 0) {
        i47 = i2 | 0;
        HEAP32[i47 >> 2] = 0;
        HEAP32[i47 + 4 >> 2] = -3;
       } else {
        i47 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i41 >> 2] | 0) + 16 >> 2] & 31](i41 | 0, HEAP32[i1 >> 2] | 0, HEAP32[i1 + 88 >> 2] | 0) | 0;
        i45 = (i47 | 0) == 0;
        i46 = i2 | 0;
        HEAP32[i46 >> 2] = i47 | (i45 ? 0 : 0);
        HEAP32[i46 + 4 >> 2] = i45 ? -6 : -5;
        i45 = i41 + 4 | 0;
        i46 = i45 | 0;
        i47 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
        if ((i47 | 0) != 0) {
         HEAP32[i46 >> 2] = i47;
         break;
        }
        i47 = i45 - 4 | 0;
        if ((i47 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i47 >> 2] | 0) + 12 >> 2] & 63](i47);
       }
      } while (0);
      i41 = HEAP32[i34 >> 2] | 0;
      if ((i41 | 0) == 0) {
       i48 = 1;
       break L46;
      }
      __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i41 | 0);
      i48 = 1;
      break;
     }
    case 4:
     {
      i41 = i14 | 0;
      HEAP32[i41 >> 2] = i43;
      if (!i44) {
       i33 = i43 | 0;
       HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 2;
      }
      __ZN3JSC21GenericTypedArrayViewINS_12Int16AdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i13, i14, i36, i32);
      i33 = HEAP32[i13 >> 2] | 0;
      do {
       if ((i33 | 0) == 0) {
        i47 = i2 | 0;
        HEAP32[i47 >> 2] = 0;
        HEAP32[i47 + 4 >> 2] = -3;
       } else {
        i47 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i33 >> 2] | 0) + 16 >> 2] & 31](i33 | 0, HEAP32[i1 >> 2] | 0, HEAP32[i1 + 88 >> 2] | 0) | 0;
        i45 = (i47 | 0) == 0;
        i46 = i2 | 0;
        HEAP32[i46 >> 2] = i47 | (i45 ? 0 : 0);
        HEAP32[i46 + 4 >> 2] = i45 ? -6 : -5;
        i45 = i33 + 4 | 0;
        i46 = i45 | 0;
        i47 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
        if ((i47 | 0) != 0) {
         HEAP32[i46 >> 2] = i47;
         break;
        }
        i47 = i45 - 4 | 0;
        if ((i47 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i47 >> 2] | 0) + 12 >> 2] & 63](i47);
       }
      } while (0);
      i33 = HEAP32[i41 >> 2] | 0;
      if ((i33 | 0) == 0) {
       i48 = 1;
       break L46;
      }
      __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i33 | 0);
      i48 = 1;
      break;
     }
    case 5:
     {
      i33 = i16 | 0;
      HEAP32[i33 >> 2] = i43;
      if (!i44) {
       i34 = i43 | 0;
       HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 2;
      }
      __ZN3JSC21GenericTypedArrayViewINS_13Uint16AdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i15, i16, i36, i32);
      i34 = HEAP32[i15 >> 2] | 0;
      do {
       if ((i34 | 0) == 0) {
        i47 = i2 | 0;
        HEAP32[i47 >> 2] = 0;
        HEAP32[i47 + 4 >> 2] = -3;
       } else {
        i47 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i34 >> 2] | 0) + 16 >> 2] & 31](i34 | 0, HEAP32[i1 >> 2] | 0, HEAP32[i1 + 88 >> 2] | 0) | 0;
        i45 = (i47 | 0) == 0;
        i46 = i2 | 0;
        HEAP32[i46 >> 2] = i47 | (i45 ? 0 : 0);
        HEAP32[i46 + 4 >> 2] = i45 ? -6 : -5;
        i45 = i34 + 4 | 0;
        i46 = i45 | 0;
        i47 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
        if ((i47 | 0) != 0) {
         HEAP32[i46 >> 2] = i47;
         break;
        }
        i47 = i45 - 4 | 0;
        if ((i47 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i47 >> 2] | 0) + 12 >> 2] & 63](i47);
       }
      } while (0);
      i34 = HEAP32[i33 >> 2] | 0;
      if ((i34 | 0) == 0) {
       i48 = 1;
       break L46;
      }
      __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i34 | 0);
      i48 = 1;
      break;
     }
    case 6:
     {
      i34 = i18 | 0;
      HEAP32[i34 >> 2] = i43;
      if (!i44) {
       i41 = i43 | 0;
       HEAP32[i41 >> 2] = (HEAP32[i41 >> 2] | 0) + 2;
      }
      __ZN3JSC21GenericTypedArrayViewINS_12Int32AdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i17, i18, i36, i32);
      i41 = HEAP32[i17 >> 2] | 0;
      do {
       if ((i41 | 0) == 0) {
        i47 = i2 | 0;
        HEAP32[i47 >> 2] = 0;
        HEAP32[i47 + 4 >> 2] = -3;
       } else {
        i47 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i41 >> 2] | 0) + 16 >> 2] & 31](i41 | 0, HEAP32[i1 >> 2] | 0, HEAP32[i1 + 88 >> 2] | 0) | 0;
        i45 = (i47 | 0) == 0;
        i46 = i2 | 0;
        HEAP32[i46 >> 2] = i47 | (i45 ? 0 : 0);
        HEAP32[i46 + 4 >> 2] = i45 ? -6 : -5;
        i45 = i41 + 4 | 0;
        i46 = i45 | 0;
        i47 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
        if ((i47 | 0) != 0) {
         HEAP32[i46 >> 2] = i47;
         break;
        }
        i47 = i45 - 4 | 0;
        if ((i47 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i47 >> 2] | 0) + 12 >> 2] & 63](i47);
       }
      } while (0);
      i41 = HEAP32[i34 >> 2] | 0;
      if ((i41 | 0) == 0) {
       i48 = 1;
       break L46;
      }
      __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i41 | 0);
      i48 = 1;
      break;
     }
    case 7:
     {
      i41 = i20 | 0;
      HEAP32[i41 >> 2] = i43;
      if (!i44) {
       i33 = i43 | 0;
       HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 2;
      }
      __ZN3JSC21GenericTypedArrayViewINS_13Uint32AdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i19, i20, i36, i32);
      i33 = HEAP32[i19 >> 2] | 0;
      do {
       if ((i33 | 0) == 0) {
        i47 = i2 | 0;
        HEAP32[i47 >> 2] = 0;
        HEAP32[i47 + 4 >> 2] = -3;
       } else {
        i47 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i33 >> 2] | 0) + 16 >> 2] & 31](i33 | 0, HEAP32[i1 >> 2] | 0, HEAP32[i1 + 88 >> 2] | 0) | 0;
        i45 = (i47 | 0) == 0;
        i46 = i2 | 0;
        HEAP32[i46 >> 2] = i47 | (i45 ? 0 : 0);
        HEAP32[i46 + 4 >> 2] = i45 ? -6 : -5;
        i45 = i33 + 4 | 0;
        i46 = i45 | 0;
        i47 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
        if ((i47 | 0) != 0) {
         HEAP32[i46 >> 2] = i47;
         break;
        }
        i47 = i45 - 4 | 0;
        if ((i47 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i47 >> 2] | 0) + 12 >> 2] & 63](i47);
       }
      } while (0);
      i33 = HEAP32[i41 >> 2] | 0;
      if ((i33 | 0) == 0) {
       i48 = 1;
       break L46;
      }
      __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i33 | 0);
      i48 = 1;
      break;
     }
    case 8:
     {
      i33 = i22 | 0;
      HEAP32[i33 >> 2] = i43;
      if (!i44) {
       i34 = i43 | 0;
       HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 2;
      }
      __ZN3JSC21GenericTypedArrayViewINS_14Float32AdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i21, i22, i36, i32);
      i34 = HEAP32[i21 >> 2] | 0;
      do {
       if ((i34 | 0) == 0) {
        i47 = i2 | 0;
        HEAP32[i47 >> 2] = 0;
        HEAP32[i47 + 4 >> 2] = -3;
       } else {
        i47 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i34 >> 2] | 0) + 16 >> 2] & 31](i34 | 0, HEAP32[i1 >> 2] | 0, HEAP32[i1 + 88 >> 2] | 0) | 0;
        i45 = (i47 | 0) == 0;
        i46 = i2 | 0;
        HEAP32[i46 >> 2] = i47 | (i45 ? 0 : 0);
        HEAP32[i46 + 4 >> 2] = i45 ? -6 : -5;
        i45 = i34 + 4 | 0;
        i46 = i45 | 0;
        i47 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
        if ((i47 | 0) != 0) {
         HEAP32[i46 >> 2] = i47;
         break;
        }
        i47 = i45 - 4 | 0;
        if ((i47 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i47 >> 2] | 0) + 12 >> 2] & 63](i47);
       }
      } while (0);
      i34 = HEAP32[i33 >> 2] | 0;
      if ((i34 | 0) == 0) {
       i48 = 1;
       break L46;
      }
      __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i34 | 0);
      i48 = 1;
      break;
     }
    case 9:
     {
      i34 = i24 | 0;
      HEAP32[i34 >> 2] = i43;
      if (!i44) {
       i41 = i43 | 0;
       HEAP32[i41 >> 2] = (HEAP32[i41 >> 2] | 0) + 2;
      }
      __ZN3JSC21GenericTypedArrayViewINS_14Float64AdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i23, i24, i36, i32);
      i41 = HEAP32[i23 >> 2] | 0;
      do {
       if ((i41 | 0) == 0) {
        i47 = i2 | 0;
        HEAP32[i47 >> 2] = 0;
        HEAP32[i47 + 4 >> 2] = -3;
       } else {
        i47 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i41 >> 2] | 0) + 16 >> 2] & 31](i41 | 0, HEAP32[i1 >> 2] | 0, HEAP32[i1 + 88 >> 2] | 0) | 0;
        i45 = (i47 | 0) == 0;
        i46 = i2 | 0;
        HEAP32[i46 >> 2] = i47 | (i45 ? 0 : 0);
        HEAP32[i46 + 4 >> 2] = i45 ? -6 : -5;
        i45 = i41 + 4 | 0;
        i46 = i45 | 0;
        i47 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
        if ((i47 | 0) != 0) {
         HEAP32[i46 >> 2] = i47;
         break;
        }
        i47 = i45 - 4 | 0;
        if ((i47 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i47 >> 2] | 0) + 12 >> 2] & 63](i47);
       }
      } while (0);
      i41 = HEAP32[i34 >> 2] | 0;
      if ((i41 | 0) == 0) {
       i48 = 1;
       break L46;
      }
      __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i41 | 0);
      i48 = 1;
      break;
     }
    default:
     {
      i48 = 0;
     }
    }
   } while (0);
   if (i44) {
    i28 = i48;
    STACKTOP = i3;
    return i28 | 0;
   }
   __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i43 | 0);
   i28 = i48;
   STACKTOP = i3;
   return i28 | 0;
  }
 } while (0);
 HEAP8[i31] = 1;
 i28 = 0;
 STACKTOP = i3;
 return i28 | 0;
}
function __ZN7WebCore15CloneSerializer19dumpArrayBufferViewEPN3JSC8JSObjectERNS_23SerializationReturnCodeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 __ZN7WebCore15CloneSerializer5writeENS_16SerializationTagE(i1, 22);
 i7 = (i2 & -65536) + 1048 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 2) {
  i8 = i2 + 8 | 0;
 } else {
  i8 = (HEAP32[i2 >> 2] | 0) + 32 | 0;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 L5 : do {
  if ((i9 | 0) == 0) {
   i10 = 8;
  } else {
   i8 = i9;
   while (1) {
    if ((i8 | 0) == (__ZN3JSC10JSDataView6s_infoE | 0)) {
     break;
    }
    i11 = HEAP32[i8 + 4 >> 2] | 0;
    if ((i11 | 0) == 0) {
     i10 = 8;
     break L5;
    } else {
     i8 = i11;
    }
   }
   __ZN7WebCore15CloneSerializer5writeENS_21ArrayBufferViewSubtagE(i1, 0);
  }
 } while (0);
 L10 : do {
  if ((i10 | 0) == 8) {
   i9 = __ZN3JSC29getUint8ClampedArrayClassInfoEv() | 0;
   if ((HEAP32[i7 >> 2] | 0) == 2) {
    i12 = i2 + 8 | 0;
   } else {
    i12 = (HEAP32[i2 >> 2] | 0) + 32 | 0;
   }
   i8 = HEAP32[i12 >> 2] | 0;
   L16 : do {
    if ((i8 | 0) != 0) {
     i11 = i8;
     while (1) {
      if ((i11 | 0) == (i9 | 0)) {
       break;
      }
      i11 = HEAP32[i11 + 4 >> 2] | 0;
      if ((i11 | 0) == 0) {
       break L16;
      }
     }
     __ZN7WebCore15CloneSerializer5writeENS_21ArrayBufferViewSubtagE(i1, 3);
     break L10;
    }
   } while (0);
   i9 = __ZN3JSC21getInt8ArrayClassInfoEv() | 0;
   if ((HEAP32[i7 >> 2] | 0) == 2) {
    i13 = i2 + 8 | 0;
   } else {
    i13 = (HEAP32[i2 >> 2] | 0) + 32 | 0;
   }
   i8 = HEAP32[i13 >> 2] | 0;
   L26 : do {
    if ((i8 | 0) != 0) {
     i11 = i8;
     while (1) {
      if ((i11 | 0) == (i9 | 0)) {
       break;
      }
      i11 = HEAP32[i11 + 4 >> 2] | 0;
      if ((i11 | 0) == 0) {
       break L26;
      }
     }
     __ZN7WebCore15CloneSerializer5writeENS_21ArrayBufferViewSubtagE(i1, 1);
     break L10;
    }
   } while (0);
   i9 = __ZN3JSC22getUint8ArrayClassInfoEv() | 0;
   if ((HEAP32[i7 >> 2] | 0) == 2) {
    i14 = i2 + 8 | 0;
   } else {
    i14 = (HEAP32[i2 >> 2] | 0) + 32 | 0;
   }
   i8 = HEAP32[i14 >> 2] | 0;
   L36 : do {
    if ((i8 | 0) != 0) {
     i11 = i8;
     while (1) {
      if ((i11 | 0) == (i9 | 0)) {
       break;
      }
      i11 = HEAP32[i11 + 4 >> 2] | 0;
      if ((i11 | 0) == 0) {
       break L36;
      }
     }
     __ZN7WebCore15CloneSerializer5writeENS_21ArrayBufferViewSubtagE(i1, 2);
     break L10;
    }
   } while (0);
   i9 = __ZN3JSC22getInt16ArrayClassInfoEv() | 0;
   if ((HEAP32[i7 >> 2] | 0) == 2) {
    i15 = i2 + 8 | 0;
   } else {
    i15 = (HEAP32[i2 >> 2] | 0) + 32 | 0;
   }
   i8 = HEAP32[i15 >> 2] | 0;
   L46 : do {
    if ((i8 | 0) != 0) {
     i11 = i8;
     while (1) {
      if ((i11 | 0) == (i9 | 0)) {
       break;
      }
      i11 = HEAP32[i11 + 4 >> 2] | 0;
      if ((i11 | 0) == 0) {
       break L46;
      }
     }
     __ZN7WebCore15CloneSerializer5writeENS_21ArrayBufferViewSubtagE(i1, 4);
     break L10;
    }
   } while (0);
   i9 = __ZN3JSC23getUint16ArrayClassInfoEv() | 0;
   if ((HEAP32[i7 >> 2] | 0) == 2) {
    i16 = i2 + 8 | 0;
   } else {
    i16 = (HEAP32[i2 >> 2] | 0) + 32 | 0;
   }
   i8 = HEAP32[i16 >> 2] | 0;
   L56 : do {
    if ((i8 | 0) != 0) {
     i11 = i8;
     while (1) {
      if ((i11 | 0) == (i9 | 0)) {
       break;
      }
      i11 = HEAP32[i11 + 4 >> 2] | 0;
      if ((i11 | 0) == 0) {
       break L56;
      }
     }
     __ZN7WebCore15CloneSerializer5writeENS_21ArrayBufferViewSubtagE(i1, 5);
     break L10;
    }
   } while (0);
   i9 = __ZN3JSC22getInt32ArrayClassInfoEv() | 0;
   if ((HEAP32[i7 >> 2] | 0) == 2) {
    i17 = i2 + 8 | 0;
   } else {
    i17 = (HEAP32[i2 >> 2] | 0) + 32 | 0;
   }
   i8 = HEAP32[i17 >> 2] | 0;
   L66 : do {
    if ((i8 | 0) != 0) {
     i11 = i8;
     while (1) {
      if ((i11 | 0) == (i9 | 0)) {
       break;
      }
      i11 = HEAP32[i11 + 4 >> 2] | 0;
      if ((i11 | 0) == 0) {
       break L66;
      }
     }
     __ZN7WebCore15CloneSerializer5writeENS_21ArrayBufferViewSubtagE(i1, 6);
     break L10;
    }
   } while (0);
   i9 = __ZN3JSC23getUint32ArrayClassInfoEv() | 0;
   if ((HEAP32[i7 >> 2] | 0) == 2) {
    i18 = i2 + 8 | 0;
   } else {
    i18 = (HEAP32[i2 >> 2] | 0) + 32 | 0;
   }
   i8 = HEAP32[i18 >> 2] | 0;
   L76 : do {
    if ((i8 | 0) != 0) {
     i11 = i8;
     while (1) {
      if ((i11 | 0) == (i9 | 0)) {
       break;
      }
      i11 = HEAP32[i11 + 4 >> 2] | 0;
      if ((i11 | 0) == 0) {
       break L76;
      }
     }
     __ZN7WebCore15CloneSerializer5writeENS_21ArrayBufferViewSubtagE(i1, 7);
     break L10;
    }
   } while (0);
   i9 = __ZN3JSC24getFloat32ArrayClassInfoEv() | 0;
   if ((HEAP32[i7 >> 2] | 0) == 2) {
    i19 = i2 + 8 | 0;
   } else {
    i19 = (HEAP32[i2 >> 2] | 0) + 32 | 0;
   }
   i8 = HEAP32[i19 >> 2] | 0;
   L86 : do {
    if ((i8 | 0) != 0) {
     i11 = i8;
     while (1) {
      if ((i11 | 0) == (i9 | 0)) {
       break;
      }
      i11 = HEAP32[i11 + 4 >> 2] | 0;
      if ((i11 | 0) == 0) {
       break L86;
      }
     }
     __ZN7WebCore15CloneSerializer5writeENS_21ArrayBufferViewSubtagE(i1, 8);
     break L10;
    }
   } while (0);
   i9 = __ZN3JSC24getFloat64ArrayClassInfoEv() | 0;
   if ((HEAP32[i7 >> 2] | 0) == 2) {
    i20 = i2 + 8 | 0;
   } else {
    i20 = (HEAP32[i2 >> 2] | 0) + 32 | 0;
   }
   i8 = HEAP32[i20 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i21 = 0;
    STACKTOP = i4;
    return i21 | 0;
   } else {
    i22 = i8;
   }
   while (1) {
    if ((i22 | 0) == (i9 | 0)) {
     i10 = 70;
     break;
    }
    i8 = HEAP32[i22 + 4 >> 2] | 0;
    if ((i8 | 0) == 0) {
     i21 = 0;
     i10 = 97;
     break;
    } else {
     i22 = i8;
    }
   }
   if ((i10 | 0) == 97) {
    STACKTOP = i4;
    return i21 | 0;
   } else if ((i10 | 0) == 70) {
    __ZN7WebCore15CloneSerializer5writeENS_21ArrayBufferViewSubtagE(i1, 9);
    break;
   }
  }
 } while (0);
 L105 : do {
  if ((i2 | 0) == 0) {
   i10 = 78;
  } else {
   i22 = (HEAP32[i7 >> 2] | 0) == 2;
   if (i22) {
    i23 = i2 + 8 | 0;
   } else {
    i23 = (HEAP32[i2 >> 2] | 0) + 32 | 0;
   }
   i20 = HEAP32[i23 >> 2] | 0;
   if ((i20 | 0) == 0) {
    i10 = 78;
    break;
   } else {
    i24 = i20;
   }
   while (1) {
    if ((i24 | 0) == (__ZN3JSC17JSArrayBufferView6s_infoE | 0)) {
     break;
    }
    i20 = HEAP32[i24 + 4 >> 2] | 0;
    if ((i20 | 0) == 0) {
     i10 = 78;
     break L105;
    } else {
     i24 = i20;
    }
   }
   i20 = i2;
   i19 = HEAP32[i2 >> 2] | 0;
   i18 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     if ((i18 | 0) == (HEAP32[i18 >> 2] | 0)) {
      break;
     }
     _WTFCrash();
     return 0;
    }
   } while (0);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[(i22 ? i2 + 8 | 0 : i19 + 32 | 0) >> 2] | 0) + 96 >> 2] & 7](i5, i20);
   i25 = HEAP32[i5 >> 2] | 0;
  }
 } while (0);
 if ((i10 | 0) == 78) {
  HEAP32[i5 >> 2] = 0;
  i25 = 0;
 }
 HEAP32[i5 >> 2] = 0;
 i5 = i25 + 16 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i26 = 0;
  } else {
   if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
    i26 = 0;
    break;
   }
   i26 = HEAP32[i25 + 12 >> 2] & 2147483647;
  }
 } while (0);
 i2 = i1 + 88 | 0;
 __ZN7WebCoreL17writeLittleEndianIjEEvRN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEET_(HEAP32[i2 >> 2] | 0, i26);
 i26 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 63](i25) | 0;
 __ZN7WebCoreL17writeLittleEndianIjEEvRN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEET_(HEAP32[i2 >> 2] | 0, i26);
 i26 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i26 | 0) == 0) {
   i10 = 88;
  } else {
   if ((HEAP32[i26 + 12 >> 2] | 0) == 0) {
    i10 = 88;
    break;
   }
   i5 = i26 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
   i5 = HEAP32[i1 >> 2] | 0;
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS0_11ArrayBufferE(i6, i5, HEAP32[(HEAP32[HEAP32[i5 + 16 >> 2] >> 2] | 0) + 4 >> 2] | 0, i26);
   i5 = __ZN7WebCore15CloneSerializer14dumpIfTerminalEN3JSC7JSValueERNS_23SerializationReturnCodeE(i1, i6, i3) | 0;
   __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i26 | 0);
   i27 = i5;
  }
 } while (0);
 if ((i10 | 0) == 88) {
  HEAP32[i3 >> 2] = 3;
  i27 = 1;
 }
 if ((i25 | 0) == 0) {
  i21 = i27;
  STACKTOP = i4;
  return i21 | 0;
 }
 i3 = i25 + 4 | 0;
 i25 = i3 | 0;
 i10 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
 if ((i10 | 0) != 0) {
  HEAP32[i25 >> 2] = i10;
  i21 = i27;
  STACKTOP = i4;
  return i21 | 0;
 }
 i10 = i3 - 4 | 0;
 if ((i10 | 0) == 0) {
  i21 = i27;
  STACKTOP = i4;
  return i21 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 12 >> 2] & 63](i10);
 i21 = i27;
 STACKTOP = i4;
 return i21 | 0;
}
function __ZN7WebCore21SerializedScriptValue20transferArrayBuffersEPN3JSC9ExecStateERN3WTF6VectorINS4_6RefPtrINS1_11ArrayBufferEEELj1ENS4_15CrashOnOverflowEEERNS_23SerializationReturnCodeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 40 | 0;
 i9 = i5 + 48 | 0;
 i10 = i3 + 8 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = i3 | 0;
 i3 = 0;
 while (1) {
  if (i3 >>> 0 >= i11 >>> 0) {
   break;
  }
  if ((HEAP32[(HEAP32[(HEAP32[i12 >> 2] | 0) + (i3 << 2) >> 2] | 0) + 12 >> 2] | 0) == 0) {
   i13 = 4;
   break;
  } else {
   i3 = i3 + 1 | 0;
  }
 }
 if ((i13 | 0) == 4) {
  HEAP32[i4 >> 2] = 3;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 i3 = __ZN3WTF10fastMallocEj(12) | 0;
 i11 = i3;
 i14 = HEAP32[i10 >> 2] | 0;
 i15 = i3;
 HEAP32[i15 >> 2] = 0;
 i16 = i3 + 4 | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = i3 + 8 | 0;
 HEAP32[i17 >> 2] = i14;
 do {
  if ((i14 | 0) != 0) {
   if (i14 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
   }
   i3 = __ZN3WTF18fastMallocGoodSizeEj(i14 << 3) | 0;
   HEAP32[i16 >> 2] = i3 >>> 3;
   i18 = __ZN3WTF10fastMallocEj(i3) | 0;
   i3 = i18;
   HEAP32[i15 >> 2] = i3;
   if ((i18 | 0) == 0) {
    break;
   }
   i18 = HEAP32[i17 >> 2] | 0;
   i19 = i3 + (i18 << 3) | 0;
   if ((i18 | 0) == 0) {
    break;
   } else {
    i20 = i3;
   }
   while (1) {
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i20 + 8 | 0;
    if ((i20 | 0) == (i19 | 0)) {
     break;
    }
   }
  }
 } while (0);
 i20 = i6 | 0;
 HEAP32[i20 >> 2] = 0;
 i16 = i6 + 4 | 0;
 HEAP32[i16 >> 2] = 0;
 i14 = i6 + 8 | 0;
 HEAP32[i14 >> 2] = 0;
 __ZN7WebCore19WebCoreJSClientData12getAllWorldsERN3WTF6VectorINS1_3RefINS_15DOMWrapperWorldEEELj0ENS1_15CrashOnOverflowEEE(HEAP32[(HEAP32[(HEAP32[i2 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 20612 >> 2] | 0, i6);
 _memset(i7 | 0, 0, 20) | 0;
 i6 = HEAP32[i10 >> 2] | 0;
 i2 = i7 | 0;
 L17 : do {
  if ((i6 | 0) == 0) {
   i13 = 30;
  } else {
   i19 = i7 | 0;
   i3 = i7 + 8 | 0;
   i18 = 0;
   i21 = i6;
   i22 = 0;
   while (1) {
    i23 = HEAP32[(HEAP32[i12 >> 2] | 0) + (i18 << 2) >> 2] | 0;
    L21 : do {
     if ((i22 | 0) == 0) {
      i13 = 19;
     } else {
      i24 = HEAP32[i3 >> 2] | 0;
      i25 = i23;
      i26 = i25 + ~(i25 << 15) | 0;
      i25 = (i26 >>> 10 ^ i26) * 9 & -1;
      i26 = i25 >>> 6 ^ i25;
      i25 = i26 + ~(i26 << 11) | 0;
      i26 = i25 >>> 16 ^ i25;
      i25 = i24 & i26;
      i27 = i22 + (i25 << 2) | 0;
      i28 = HEAP32[i27 >> 2] | 0;
      if ((i28 | 0) == (i23 | 0)) {
       i29 = i27;
      } else {
       i27 = (i26 >>> 23) + ~i26 | 0;
       i26 = i27 << 12 ^ i27;
       i27 = i26 >>> 7 ^ i26;
       i26 = i27 << 2 ^ i27;
       i27 = i26 >>> 20 ^ i26 | 1;
       i26 = 0;
       i30 = i25;
       i25 = i28;
       while (1) {
        if ((i25 | 0) == 0) {
         i13 = 19;
         break L21;
        }
        i28 = (i26 | 0) == 0 ? i27 : i26;
        i31 = i28 + i30 & i24;
        i32 = i22 + (i31 << 2) | 0;
        i33 = HEAP32[i32 >> 2] | 0;
        if ((i33 | 0) == (i23 | 0)) {
         i29 = i32;
         break;
        } else {
         i26 = i28;
         i30 = i31;
         i25 = i33;
        }
       }
      }
      if ((i29 | 0) == 0) {
       i13 = 19;
      } else {
       i34 = i21;
      }
     }
    } while (0);
    if ((i13 | 0) == 19) {
     i13 = 0;
     if (i21 >>> 0 <= i18 >>> 0) {
      i13 = 20;
      break;
     }
     HEAP32[i8 >> 2] = i23;
     __ZN3WTF9HashTableIPN3JSC11ArrayBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i9, i19, i8, i8);
     if ((HEAP32[i10 >> 2] | 0) >>> 0 <= i18 >>> 0) {
      i13 = 22;
      break;
     }
     if ((HEAP32[i17 >> 2] | 0) >>> 0 <= i18 >>> 0) {
      i13 = 24;
      break;
     }
     if (!(__ZN3JSC11ArrayBuffer8transferERNS_19ArrayBufferContentsE(HEAP32[(HEAP32[i12 >> 2] | 0) + (i18 << 2) >> 2] | 0, (HEAP32[i15 >> 2] | 0) + (i18 << 3) | 0) | 0)) {
      i13 = 27;
      break;
     }
     i34 = HEAP32[i10 >> 2] | 0;
    }
    i25 = i18 + 1 | 0;
    if (i25 >>> 0 >= i34 >>> 0) {
     i13 = 30;
     break L17;
    }
    i18 = i25;
    i21 = i34;
    i22 = HEAP32[i2 >> 2] | 0;
   }
   if ((i13 | 0) == 20) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i13 | 0) == 22) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i13 | 0) == 24) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i13 | 0) == 27) {
    HEAP32[i4 >> 2] = 3;
    HEAP32[i1 >> 2] = 0;
    i35 = i11;
    break;
   }
  }
 } while (0);
 if ((i13 | 0) == 30) {
  HEAP32[i1 >> 2] = i11;
  i35 = 0;
 }
 i11 = HEAP32[i2 >> 2] | 0;
 if ((i11 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i11);
 }
 i11 = HEAP32[i14 >> 2] | 0;
 i2 = HEAP32[i20 >> 2] | 0;
 if ((i11 | 0) != 0) {
  i1 = i2 + (i11 << 2) | 0;
  i11 = i2;
  while (1) {
   i13 = HEAP32[i11 >> 2] | 0;
   i4 = i13 | 0;
   i34 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i34 | 0) == 0) {
    __ZN7WebCore15DOMWrapperWorldD1Ev(i13);
    __ZN3WTF8fastFreeEPv(i13);
   } else {
    HEAP32[i4 >> 2] = i34;
   }
   i11 = i11 + 4 | 0;
   if ((i11 | 0) == (i1 | 0)) {
    break;
   }
  }
  HEAP32[i14 >> 2] = 0;
 }
 if ((i2 | 0) != 0) {
  HEAP32[i20 >> 2] = 0;
  HEAP32[i16 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 if ((i35 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i2 = i35 + 8 | 0;
 i16 = HEAP32[i2 >> 2] | 0;
 i20 = i35 | 0;
 if ((i16 | 0) != 0) {
  i14 = HEAP32[i20 >> 2] | 0;
  i1 = i14 + (i16 << 3) | 0;
  i16 = i14;
  while (1) {
   __ZN3WTF8fastFreeEPv(HEAP32[i16 >> 2] | 0);
   i16 = i16 + 8 | 0;
   if ((i16 | 0) == (i1 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i20 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i20 >> 2] = 0;
  HEAP32[i35 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN3WTF8fastFreeEPv(i35);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore15CloneSerializer9serializeERKN3WTF6StringERNS1_6VectorIhLj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 __ZN7WebCoreL17writeLittleEndianIjEEvRN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEET_(i2, 5);
 i6 = i1 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
    break;
   }
   HEAP8[i4] = 16;
   i7 = i2 + 8 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   i9 = i2 + 4 | 0;
   if ((i8 | 0) == (HEAP32[i9 >> 2] | 0)) {
    i10 = i8 + 1 | 0;
    i11 = i2 | 0;
    i12 = HEAP32[i11 >> 2] | 0;
    do {
     if (i12 >>> 0 > i4 >>> 0) {
      i13 = 25;
     } else {
      if ((i12 + i8 | 0) >>> 0 <= i4 >>> 0) {
       i13 = 25;
       break;
      }
      i14 = i4 - i12 | 0;
      i15 = i10 + (i8 >>> 2) | 0;
      i16 = i15 >>> 0 > 16 >>> 0 ? i15 : 16;
      i15 = i16 >>> 0 > i10 >>> 0 ? i16 : i10;
      do {
       if (i8 >>> 0 < i15 >>> 0) {
        i16 = __ZN3WTF18fastMallocGoodSizeEj(i15) | 0;
        HEAP32[i9 >> 2] = i16;
        i17 = __ZN3WTF10fastMallocEj(i16) | 0;
        HEAP32[i11 >> 2] = i17;
        _memcpy(i17 | 0, i12 | 0, i8) | 0;
        if ((i12 | 0) == 0) {
         break;
        }
        if ((HEAP32[i11 >> 2] | 0) == (i12 | 0)) {
         HEAP32[i11 >> 2] = 0;
         HEAP32[i9 >> 2] = 0;
        }
        __ZN3WTF8fastFreeEPv(i12);
       }
      } while (0);
      i15 = HEAP32[i11 >> 2] | 0;
      i18 = i15 + i14 | 0;
      i19 = i15;
     }
    } while (0);
    if ((i13 | 0) == 25) {
     i15 = i10 + (i8 >>> 2) | 0;
     i17 = i15 >>> 0 > 16 >>> 0 ? i15 : 16;
     i15 = i17 >>> 0 > i10 >>> 0 ? i17 : i10;
     do {
      if (i8 >>> 0 < i15 >>> 0) {
       i17 = __ZN3WTF18fastMallocGoodSizeEj(i15) | 0;
       HEAP32[i9 >> 2] = i17;
       i16 = __ZN3WTF10fastMallocEj(i17) | 0;
       HEAP32[i11 >> 2] = i16;
       _memcpy(i16 | 0, i12 | 0, i8) | 0;
       if ((i12 | 0) == 0) {
        break;
       }
       if ((HEAP32[i11 >> 2] | 0) == (i12 | 0)) {
        HEAP32[i11 >> 2] = 0;
        HEAP32[i9 >> 2] = 0;
       }
       __ZN3WTF8fastFreeEPv(i12);
      }
     } while (0);
     i18 = i4;
     i19 = HEAP32[i11 >> 2] | 0;
    }
    HEAP8[i19 + (HEAP32[i7 >> 2] | 0) | 0] = HEAP8[i18] | 0;
   } else {
    HEAP8[(HEAP32[i2 >> 2] | 0) + i8 | 0] = 16;
   }
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   i12 = HEAP32[i6 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i20 = 0;
   } else {
    i20 = HEAP32[i12 + 4 >> 2] | 0;
   }
   __ZN7WebCoreL17writeLittleEndianIjEEvRN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEET_(i2, i20);
   i12 = HEAP32[i6 >> 2] | 0;
   if ((HEAP32[i12 + 16 >> 2] & 32 | 0) == 0) {
    i21 = HEAP32[i12 + 8 >> 2] | 0;
    i22 = i12;
   } else {
    i9 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i12) | 0;
    i21 = i9;
    i22 = HEAP32[i6 >> 2] | 0;
   }
   do {
    if ((i22 | 0) == 0) {
     i23 = 0;
    } else {
     i9 = HEAP32[i22 + 4 >> 2] | 0;
     if ((i9 | 0) < 0) {
      i24 = 0;
     } else {
      i23 = i9;
      break;
     }
     STACKTOP = i3;
     return i24 | 0;
    }
   } while (0);
   __ZN3WTF6VectorIhLj0ENS_15CrashOnOverflowEE6appendIhEEvPKT_j(i2, i21, i23 << 1);
   i24 = 1;
   STACKTOP = i3;
   return i24 | 0;
  }
 } while (0);
 HEAP8[i5] = 17;
 i23 = i2 + 8 | 0;
 i21 = HEAP32[i23 >> 2] | 0;
 i22 = i2 + 4 | 0;
 if ((i21 | 0) == (HEAP32[i22 >> 2] | 0)) {
  i6 = i21 + 1 | 0;
  i20 = i2 | 0;
  i18 = HEAP32[i20 >> 2] | 0;
  do {
   if (i18 >>> 0 > i5 >>> 0) {
    i13 = 7;
   } else {
    if ((i18 + i21 | 0) >>> 0 <= i5 >>> 0) {
     i13 = 7;
     break;
    }
    i19 = i5 - i18 | 0;
    i4 = i6 + (i21 >>> 2) | 0;
    i1 = i4 >>> 0 > 16 >>> 0 ? i4 : 16;
    i4 = i1 >>> 0 > i6 >>> 0 ? i1 : i6;
    do {
     if (i21 >>> 0 < i4 >>> 0) {
      i1 = __ZN3WTF18fastMallocGoodSizeEj(i4) | 0;
      HEAP32[i22 >> 2] = i1;
      i7 = __ZN3WTF10fastMallocEj(i1) | 0;
      HEAP32[i20 >> 2] = i7;
      _memcpy(i7 | 0, i18 | 0, i21) | 0;
      if ((i18 | 0) == 0) {
       break;
      }
      if ((HEAP32[i20 >> 2] | 0) == (i18 | 0)) {
       HEAP32[i20 >> 2] = 0;
       HEAP32[i22 >> 2] = 0;
      }
      __ZN3WTF8fastFreeEPv(i18);
     }
    } while (0);
    i4 = HEAP32[i20 >> 2] | 0;
    i25 = i4 + i19 | 0;
    i26 = i4;
   }
  } while (0);
  if ((i13 | 0) == 7) {
   i13 = i6 + (i21 >>> 2) | 0;
   i4 = i13 >>> 0 > 16 >>> 0 ? i13 : 16;
   i13 = i4 >>> 0 > i6 >>> 0 ? i4 : i6;
   do {
    if (i21 >>> 0 < i13 >>> 0) {
     i6 = __ZN3WTF18fastMallocGoodSizeEj(i13) | 0;
     HEAP32[i22 >> 2] = i6;
     i4 = __ZN3WTF10fastMallocEj(i6) | 0;
     HEAP32[i20 >> 2] = i4;
     _memcpy(i4 | 0, i18 | 0, i21) | 0;
     if ((i18 | 0) == 0) {
      break;
     }
     if ((HEAP32[i20 >> 2] | 0) == (i18 | 0)) {
      HEAP32[i20 >> 2] = 0;
      HEAP32[i22 >> 2] = 0;
     }
     __ZN3WTF8fastFreeEPv(i18);
    }
   } while (0);
   i25 = i5;
   i26 = HEAP32[i20 >> 2] | 0;
  }
  HEAP8[i26 + (HEAP32[i23 >> 2] | 0) | 0] = HEAP8[i25] | 0;
 } else {
  HEAP8[(HEAP32[i2 >> 2] | 0) + i21 | 0] = 17;
 }
 HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
 i24 = 1;
 STACKTOP = i3;
 return i24 | 0;
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
function __ZN7WebCore17CloneDeserializer10readStringERPKhS2_RN3WTF6StringEj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 if (i4 >>> 0 > 1073741822 >>> 0) {
  i7 = 0;
  STACKTOP = i5;
  return i7 | 0;
 }
 i8 = i4 << 1;
 if ((i2 - (HEAP32[i1 >> 2] | 0) | 0) < (i8 | 0)) {
  i7 = 0;
  STACKTOP = i5;
  return i7 | 0;
 }
 do {
  if ((i4 | 0) == 0) {
   i9 = 0;
   i10 = 29;
  } else {
   if ((i4 | 0) < 0) {
    _WTFCrash();
    return 0;
   }
   i11 = __ZN3WTF18fastMallocGoodSizeEj(i8) | 0;
   i12 = i2 - 2 | 0;
   i13 = i6;
   i14 = 0;
   i15 = i11 >>> 1;
   i16 = __ZN3WTF10fastMallocEj(i11) | 0;
   i11 = 1;
   L12 : while (1) {
    i17 = HEAP32[i1 >> 2] | 0;
    if (i17 >>> 0 <= i12 >>> 0) {
     HEAP16[i6 >> 1] = 0;
     i18 = i17 + 1 | 0;
     HEAP32[i1 >> 2] = i18;
     i19 = HEAPU8[i17] | 0;
     HEAP16[i6 >> 1] = i19;
     HEAP32[i1 >> 2] = i17 + 2;
     HEAP16[i6 >> 1] = (HEAPU8[i18] | 0) << 8 | i19;
    }
    if ((i14 | 0) == (i15 | 0)) {
     i19 = i15 + 1 | 0;
     do {
      if (i16 >>> 0 > i6 >>> 0) {
       i10 = 13;
      } else {
       if ((i16 + (i15 << 1) | 0) >>> 0 <= i6 >>> 0) {
        i10 = 13;
        break;
       }
       i18 = i13 - i16 >> 1;
       i17 = i19 + (i15 >>> 2) | 0;
       i20 = i17 >>> 0 > 16 >>> 0 ? i17 : 16;
       i17 = i20 >>> 0 > i19 >>> 0 ? i20 : i19;
       do {
        if (i15 >>> 0 < i17 >>> 0) {
         if ((i17 | 0) < 0) {
          i10 = 20;
          break L12;
         }
         i20 = __ZN3WTF18fastMallocGoodSizeEj(i17 << 1) | 0;
         i21 = i20 >>> 1;
         i22 = __ZN3WTF10fastMallocEj(i20) | 0;
         i20 = i22;
         i23 = i16;
         _memcpy(i22 | 0, i23 | 0, i15 << 1) | 0;
         if ((i16 | 0) == 0) {
          i24 = i20;
          i25 = i21;
          break;
         }
         i22 = (i20 | 0) == (i16 | 0);
         __ZN3WTF8fastFreeEPv(i23);
         i24 = i22 ? 0 : i20;
         i25 = i22 ? 0 : i21;
        } else {
         i24 = i16;
         i25 = i15;
        }
       } while (0);
       i26 = i24 + (i18 << 1) | 0;
       i27 = i24;
       i28 = i25;
      }
     } while (0);
     do {
      if ((i10 | 0) == 13) {
       i10 = 0;
       i17 = i19 + (i15 >>> 2) | 0;
       i21 = i17 >>> 0 > 16 >>> 0 ? i17 : 16;
       i17 = i21 >>> 0 > i19 >>> 0 ? i21 : i19;
       if (i15 >>> 0 >= i17 >>> 0) {
        i26 = i6;
        i27 = i16;
        i28 = i15;
        break;
       }
       if ((i17 | 0) < 0) {
        i10 = 15;
        break L12;
       }
       i21 = __ZN3WTF18fastMallocGoodSizeEj(i17 << 1) | 0;
       i17 = i21 >>> 1;
       i22 = __ZN3WTF10fastMallocEj(i21) | 0;
       i21 = i22;
       i20 = i16;
       _memcpy(i22 | 0, i20 | 0, i15 << 1) | 0;
       if ((i16 | 0) == 0) {
        i26 = i6;
        i27 = i21;
        i28 = i17;
        break;
       }
       i22 = (i21 | 0) == (i16 | 0);
       __ZN3WTF8fastFreeEPv(i20);
       i26 = i6;
       i27 = i22 ? 0 : i21;
       i28 = i22 ? 0 : i17;
      }
     } while (0);
     HEAP16[i27 + (i15 << 1) >> 1] = HEAP16[i26 >> 1] | 0;
     i29 = i27;
     i30 = i28;
     i31 = i19;
    } else {
     HEAP16[i16 + (i14 << 1) >> 1] = HEAP16[i6 >> 1] | 0;
     i29 = i16;
     i30 = i15;
     i31 = i14 + 1 | 0;
    }
    if (i11 >>> 0 >= i4 >>> 0) {
     i10 = 27;
     break;
    }
    i14 = i31;
    i15 = i30;
    i16 = i29;
    i11 = i11 + 1 | 0;
   }
   if ((i10 | 0) == 15) {
    _WTFCrash();
    return 0;
   } else if ((i10 | 0) == 20) {
    _WTFCrash();
    return 0;
   } else if ((i10 | 0) == 27) {
    if ((i31 | 0) == 0) {
     i9 = i29;
     i10 = 29;
     break;
    }
    i11 = __ZN3WTF10fastMallocEj(20) | 0;
    HEAP32[i11 >> 2] = 2;
    HEAP32[i11 + 4 >> 2] = i31;
    HEAP32[i11 + 8 >> 2] = i29;
    HEAP32[i11 + 12 >> 2] = 0;
    HEAP32[i11 + 16 >> 2] = 1;
    __ZN3WTF8fastFreeEPv(0);
    i32 = i11;
    i33 = 0;
    break;
   }
  }
 } while (0);
 if ((i10 | 0) == 29) {
  i10 = __ZN3WTF10StringImpl5emptyEv() | 0;
  i29 = i10 | 0;
  HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 2;
  i32 = i10;
  i33 = i9;
 }
 i9 = i3 | 0;
 i3 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i32;
 do {
  if ((i3 | 0) != 0) {
   i32 = i3 | 0;
   i9 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i32 >> 2] = i9;
    break;
   }
  }
 } while (0);
 if ((i33 | 0) == 0) {
  i7 = 1;
  STACKTOP = i5;
  return i7 | 0;
 }
 __ZN3WTF8fastFreeEPv(i33);
 i7 = 1;
 STACKTOP = i5;
 return i7 | 0;
}
function __ZN7WebCore21SerializedScriptValue11deserializeEPK15OpaqueJSContextPPK13OpaqueJSValuePN3WTF6VectorINS8_6RefPtrINS_11MessagePortEEELj1ENS8_15CrashOnOverflowEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 176 | 0;
 i6 = i5 | 0;
 i7 = i5 + 144 | 0;
 i8 = i5 + 160 | 0;
 i9 = i2;
 i2 = i9 + 16 | 0;
 i10 = HEAP32[(HEAP32[i2 >> 2] & -65536) + 1076 >> 2] | 0;
 HEAP32[i8 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i11 = i10 | 0;
  tempValue = HEAP32[i11 >> 2] | 0, HEAP32[i11 >> 2] = tempValue + 1, tempValue;
 }
 i11 = __ZN3WTF13wtfThreadDataEv() | 0;
 i12 = i11 + 16 | 0;
 i11 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = HEAP32[i10 + 20880 >> 2];
 HEAP32[i8 + 4 >> 2] = i11;
 __ZN3JSC14MachineThreads16addCurrentThreadEv(i10 + 19828 | 0);
 __ZN3JSC12JSLockHolderC1EPNS_9ExecStateE(i8 + 8 | 0, (HEAP32[(HEAP32[(HEAP32[i2 >> 2] & -65536) + 1076 >> 2] | 0) + 24780 >> 2] | 0) != 0 ? 0 : i9);
 i10 = HEAP32[(HEAP32[HEAP32[i2 >> 2] >> 2] | 0) + 4 >> 2] | 0;
 i11 = HEAP32[i1 + 16 >> 2] | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
  i12 = i7 | 0;
  HEAP32[i12 >> 2] = 0;
  HEAP32[i12 + 4 >> 2] = -3;
  HEAP32[i7 + 8 >> 2] = 6;
  i13 = 6;
  i14 = -3;
  i15 = 0;
 } else {
  __ZN7WebCore17CloneDeserializerC2EPN3JSC9ExecStateEPNS1_14JSGlobalObjectEPN3WTF6VectorINS6_6RefPtrINS_11MessagePortEEELj1ENS6_15CrashOnOverflowEEEPNS7_INS1_19ArrayBufferContentsELj0ESB_EERKNS7_IhLj0ESB_EE(i6, i9, i10, i4, i11, i1 + 4 | 0);
  if ((HEAP32[i6 + 104 >> 2] | 0) >>> 0 < 6 >>> 0) {
   __ZN7WebCore17CloneDeserializer11deserializeEv(i7, i6);
   i1 = i7 | 0;
   i16 = HEAP32[i7 + 8 >> 2] | 0;
   i17 = HEAP32[i1 + 4 >> 2] | 0;
   i18 = HEAP32[i1 >> 2] | 0;
  } else {
   i1 = i7 | 0;
   HEAP32[i1 >> 2] = 0;
   HEAP32[i1 + 4 >> 2] = -6;
   HEAP32[i7 + 8 >> 2] = 3;
   i16 = 3;
   i17 = -6;
   i18 = 0;
  }
  __ZN7WebCore17CloneDeserializerD2Ev(i6);
  i13 = i16;
  i14 = i17;
  i15 = i18;
 }
 __ZN7WebCore21SerializedScriptValue40maybeThrowExceptionIfSerializationFailedEPN3JSC9ExecStateENS_23SerializationReturnCodeE(i9, i13);
 i13 = HEAP32[i2 >> 2] | 0;
 i9 = HEAP32[(i13 & -65536) + 1076 >> 2] | 0;
 i18 = i9 + 24800 | 0;
 i17 = HEAP32[i18 >> 2] | 0;
 i16 = HEAP32[i18 + 4 >> 2] | 0;
 if ((i17 & 0 | 0) == 0 & (i16 & -1 | 0) == (-6 | 0)) {
  i18 = i14;
  i6 = i18;
  if ((i6 | 0) == (-5 | 0)) {
   i19 = i15;
   __ZN3JSC12APIEntryShimD2Ev(i8);
   STACKTOP = i5;
   return i19 | 0;
  } else if ((i6 | 0) == (-6 | 0)) {
   i19 = 0;
   __ZN3JSC12APIEntryShimD2Ev(i8);
   STACKTOP = i5;
   return i19 | 0;
  } else {
   i6 = i15 & -1 | 0;
   i15 = i18 | i14 & 0;
   i14 = i9 + 13220 | 0;
   i18 = i14 | 0;
   i7 = HEAP32[i18 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i20 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i14, 16) | 0;
   } else {
    HEAP32[i18 >> 2] = HEAP32[i7 >> 2];
    i20 = i7;
   }
   i7 = i20;
   HEAP32[i7 >> 2] = 0;
   i18 = HEAP32[(HEAP32[(HEAP32[i2 >> 2] & -65536) + 1076 >> 2] | 0) + 20788 >> 2] | 0;
   do {
    if ((i18 | 0) == 0) {
     i21 = 0;
    } else {
     if ((HEAP32[i18 + 4 >> 2] | 0) == -6) {
      i21 = 0;
      break;
     }
     i21 = HEAP32[i18 >> 2] | 0;
    }
   } while (0);
   HEAP32[i7 >> 2] = i21;
   i21 = i20 + 8 | 0;
   HEAP32[i21 >> 2] = i6;
   HEAP32[i21 + 4 >> 2] = i15;
   i19 = i20;
   __ZN3JSC12APIEntryShimD2Ev(i8);
   STACKTOP = i5;
   return i19 | 0;
  }
 }
 if ((i3 | 0) == 0) {
  i22 = i13;
 } else {
  i13 = i16;
  i20 = i13;
  if ((i20 | 0) == (-5 | 0)) {
   i23 = i17;
  } else if ((i20 | 0) == (-6 | 0)) {
   i23 = 0;
  } else {
   i20 = i17 & -1 | 0;
   i17 = i13 | i16 & 0;
   i16 = i9 + 13220 | 0;
   i9 = i16 | 0;
   i13 = HEAP32[i9 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i24 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i16, 16) | 0;
   } else {
    HEAP32[i9 >> 2] = HEAP32[i13 >> 2];
    i24 = i13;
   }
   i13 = i24;
   HEAP32[i13 >> 2] = 0;
   i9 = HEAP32[(HEAP32[(HEAP32[i2 >> 2] & -65536) + 1076 >> 2] | 0) + 20788 >> 2] | 0;
   do {
    if ((i9 | 0) == 0) {
     i25 = 0;
    } else {
     if ((HEAP32[i9 + 4 >> 2] | 0) == -6) {
      i25 = 0;
      break;
     }
     i25 = HEAP32[i9 >> 2] | 0;
    }
   } while (0);
   HEAP32[i13 >> 2] = i25;
   i25 = i24 + 8 | 0;
   HEAP32[i25 >> 2] = i20;
   HEAP32[i25 + 4 >> 2] = i17;
   i23 = i24;
  }
  HEAP32[i3 >> 2] = i23;
  i22 = HEAP32[i2 >> 2] | 0;
 }
 __ZN3JSC2VM14clearExceptionEv(HEAP32[(i22 & -65536) + 1076 >> 2] | 0);
 i19 = 0;
 __ZN3JSC12APIEntryShimD2Ev(i8);
 STACKTOP = i5;
 return i19 | 0;
}
function __ZN7WebCore21SerializedScriptValue6createEPN3JSC9ExecStateENS1_7JSValueEPN3WTF6VectorINS5_6RefPtrINS_11MessagePortEEELj1ENS5_15CrashOnOverflowEEEPNS6_INS7_INS1_11ArrayBufferEEELj1ESA_EENS_22SerializationErrorModeE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 240 | 0;
 i8 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i3 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
 i8 = i7 | 0;
 i9 = i7 + 184 | 0;
 i10 = i7 + 192 | 0;
 i11 = i7 + 208 | 0;
 i12 = i7 + 224 | 0;
 i13 = i7 + 232 | 0;
 i14 = i10 | 0;
 HEAP32[i14 >> 2] = 0;
 i15 = i10 + 4 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = i10 + 8 | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = i11 | 0;
 HEAP32[i17 >> 2] = 0;
 i18 = i11 + 4 | 0;
 HEAP32[i18 >> 2] = 0;
 i19 = i11 + 8 | 0;
 HEAP32[i19 >> 2] = 0;
 i20 = i3 | 0;
 i3 = HEAP32[i20 >> 2] | 0;
 i21 = HEAP32[i20 + 4 >> 2] | 0;
 __ZN7WebCore15CloneSerializerC2EPN3JSC9ExecStateEPN3WTF6VectorINS4_6RefPtrINS_11MessagePortEEELj1ENS4_15CrashOnOverflowEEEPNS5_INS6_INS1_11ArrayBufferEEELj1ES9_EERNS5_INS4_6StringELj0ES9_EERNS5_IhLj0ES9_EE(i8, i2, i4, i5, i11, i10);
 i10 = i9 | 0;
 HEAP32[i10 >> 2] = i3;
 HEAP32[i10 + 4 >> 2] = i21;
 i21 = __ZN7WebCore15CloneSerializer9serializeEN3JSC7JSValueE(i8, i9) | 0;
 __ZN7WebCore15CloneSerializerD2Ev(i8);
 HEAP32[i12 >> 2] = i21;
 if ((i5 | 0) != 0 & (i21 | 0) == 0) {
  __ZN7WebCore21SerializedScriptValue20transferArrayBuffersEPN3JSC9ExecStateERN3WTF6VectorINS4_6RefPtrINS1_11ArrayBufferEEELj1ENS4_15CrashOnOverflowEEERNS_23SerializationReturnCodeE(i13, i2, i5, i12);
  i5 = i13 | 0;
  i13 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  i22 = i13;
 } else {
  i22 = 0;
 }
 i13 = HEAP32[i12 >> 2] | 0;
 if ((i6 | 0) == 1) {
  __ZN7WebCore21SerializedScriptValue40maybeThrowExceptionIfSerializationFailedEPN3JSC9ExecStateENS_23SerializationReturnCodeE(i2, i13);
 }
 do {
  if ((i13 | 0) == 0) {
   i2 = __ZN3WTF10fastMallocEj(32) | 0;
   HEAP32[i2 >> 2] = 1;
   i6 = i2 + 4 | 0;
   HEAP32[i6 >> 2] = 0;
   i12 = i2 + 8 | 0;
   HEAP32[i12 >> 2] = 0;
   i5 = i2 + 12 | 0;
   HEAP32[i5 >> 2] = 0;
   HEAP32[i2 + 16 >> 2] = i22;
   i21 = i2 + 20 | 0;
   HEAP32[i21 >> 2] = 0;
   i8 = i2 + 24 | 0;
   HEAP32[i8 >> 2] = 0;
   i9 = i2 + 28 | 0;
   HEAP32[i9 >> 2] = 0;
   HEAP32[i5 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i16 >> 2] = 0;
   i5 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i14 >> 2] = i5;
   i5 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = HEAP32[i15 >> 2];
   HEAP32[i15 >> 2] = i5;
   i5 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i19 >> 2];
   HEAP32[i19 >> 2] = i5;
   i5 = HEAP32[i21 >> 2] | 0;
   HEAP32[i21 >> 2] = HEAP32[i17 >> 2];
   HEAP32[i17 >> 2] = i5;
   i5 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i18 >> 2];
   HEAP32[i18 >> 2] = i5;
   HEAP32[i1 >> 2] = i2;
  } else {
   HEAP32[i1 >> 2] = 0;
   if ((i22 | 0) == 0) {
    break;
   }
   i2 = i22 + 8 | 0;
   i5 = HEAP32[i2 >> 2] | 0;
   i8 = i22 | 0;
   if ((i5 | 0) != 0) {
    i21 = HEAP32[i8 >> 2] | 0;
    i9 = i21 + (i5 << 3) | 0;
    i5 = i21;
    while (1) {
     __ZN3WTF8fastFreeEPv(HEAP32[i5 >> 2] | 0);
     i5 = i5 + 8 | 0;
     if ((i5 | 0) == (i9 | 0)) {
      break;
     }
    }
    HEAP32[i2 >> 2] = 0;
   }
   i9 = HEAP32[i8 >> 2] | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i8 >> 2] = 0;
    HEAP32[i22 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i9);
   }
   __ZN3WTF8fastFreeEPv(i22);
  }
 } while (0);
 i22 = HEAP32[i19 >> 2] | 0;
 if ((i22 | 0) != 0) {
  i1 = HEAP32[i17 >> 2] | 0;
  i13 = i1 + (i22 << 2) | 0;
  i22 = i1;
  while (1) {
   i1 = HEAP32[i22 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i9 = i1 | 0;
     i5 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i5 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i1);
      break;
     } else {
      HEAP32[i9 >> 2] = i5;
      break;
     }
    }
   } while (0);
   i22 = i22 + 4 | 0;
   if ((i22 | 0) == (i13 | 0)) {
    break;
   }
  }
  HEAP32[i19 >> 2] = 0;
 }
 i19 = HEAP32[i17 >> 2] | 0;
 if ((i19 | 0) != 0) {
  HEAP32[i17 >> 2] = 0;
  HEAP32[i18 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i19);
 }
 if ((HEAP32[i16 >> 2] | 0) != 0) {
  HEAP32[i16 >> 2] = 0;
 }
 i16 = HEAP32[i14 >> 2] | 0;
 if ((i16 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 HEAP32[i14 >> 2] = 0;
 HEAP32[i15 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i16);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore21SerializedScriptValue6createEPK15OpaqueJSContextPK13OpaqueJSValuePN3WTF6VectorINS7_6RefPtrINS_11MessagePortEEELj1ENS7_15CrashOnOverflowEEEPNS8_INS9_IN3JSC11ArrayBufferEEELj1ESC_EEPS6_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i8 = i7 | 0;
 i9 = i7 + 16 | 0;
 i10 = i7 + 24 | 0;
 i11 = i2;
 i2 = i11 + 16 | 0;
 i12 = HEAP32[(HEAP32[i2 >> 2] & -65536) + 1076 >> 2] | 0;
 HEAP32[i8 >> 2] = i12;
 if ((i12 | 0) != 0) {
  i13 = i12 | 0;
  tempValue = HEAP32[i13 >> 2] | 0, HEAP32[i13 >> 2] = tempValue + 1, tempValue;
 }
 i13 = __ZN3WTF13wtfThreadDataEv() | 0;
 i14 = i13 + 16 | 0;
 i13 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = HEAP32[i12 + 20880 >> 2];
 HEAP32[i8 + 4 >> 2] = i13;
 __ZN3JSC14MachineThreads16addCurrentThreadEv(i12 + 19828 | 0);
 __ZN3JSC12JSLockHolderC1EPNS_9ExecStateE(i8 + 8 | 0, (HEAP32[(HEAP32[(HEAP32[i2 >> 2] & -65536) + 1076 >> 2] | 0) + 24780 >> 2] | 0) != 0 ? 0 : i11);
 do {
  if ((i3 | 0) == 0) {
   i15 = 0;
   i16 = -3;
  } else {
   if ((HEAP8[(HEAP32[i3 >> 2] | 0) + 52 | 0] | 0) == 9) {
    i12 = i3 + 8 | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    i14 = HEAP32[i12 + 4 >> 2] | 0;
    if ((i14 | 0) == (-5 | 0)) {
     i17 = i13;
     i18 = 7;
    } else if ((i14 | 0) == (-6 | 0)) {
     i15 = 0;
     i16 = -3;
     break;
    } else {
     i19 = i14;
     i20 = i13;
    }
   } else {
    i17 = i3;
    i18 = 7;
   }
   do {
    if ((i18 | 0) == 7) {
     i13 = i17;
     i14 = HEAP32[i13 >> 2] | 0;
     i12 = HEAP32[i14 >> 2] | 0;
     do {
      if ((i12 | 0) != 0) {
       if ((i12 | 0) == (HEAP32[i12 >> 2] | 0)) {
        break;
       }
       _WTFCrash();
      }
     } while (0);
     if (((HEAP32[((HEAP32[(i17 & -65536) + 1048 >> 2] | 0) == 2 ? i13 + 8 | 0 : i14 + 32 | 0) >> 2] | 0) + 16 | 0) != 0) {
      i19 = -5;
      i20 = i17;
      break;
     }
     _WTFCrash();
    }
   } while (0);
   i15 = i20;
   i16 = i19;
  }
 } while (0);
 i19 = i10 | 0;
 HEAP32[i19 >> 2] = i15;
 HEAP32[i19 + 4 >> 2] = i16;
 __ZN7WebCore21SerializedScriptValue6createEPN3JSC9ExecStateENS1_7JSValueEPN3WTF6VectorINS5_6RefPtrINS_11MessagePortEEELj1ENS5_15CrashOnOverflowEEEPNS6_INS7_INS1_11ArrayBufferEEELj1ESA_EENS_22SerializationErrorModeE(i9, i11, i10, i4, i5, 1);
 i5 = i9 | 0;
 i9 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[(i5 & -65536) + 1076 >> 2] | 0;
 i10 = i4 + 24800 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i16 = HEAP32[i10 + 4 >> 2] | 0;
 if ((i11 & 0 | 0) == 0 & (i16 & -1 | 0) == (-6 | 0)) {
  HEAP32[i1 >> 2] = i9;
  __ZN3JSC12APIEntryShimD2Ev(i8);
  STACKTOP = i7;
  return;
 }
 if ((i6 | 0) == 0) {
  i21 = i5;
 } else {
  i5 = i16;
  i10 = i5;
  if ((i10 | 0) == (-5 | 0)) {
   i22 = i11;
  } else if ((i10 | 0) == (-6 | 0)) {
   i22 = 0;
  } else {
   i10 = i11 & -1 | 0;
   i11 = i5 | i16 & 0;
   i16 = i4 + 13220 | 0;
   i4 = i16 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i23 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i16, 16) | 0;
   } else {
    HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
    i23 = i5;
   }
   i5 = i23;
   HEAP32[i5 >> 2] = 0;
   i4 = HEAP32[(HEAP32[(HEAP32[i2 >> 2] & -65536) + 1076 >> 2] | 0) + 20788 >> 2] | 0;
   do {
    if ((i4 | 0) == 0) {
     i24 = 0;
    } else {
     if ((HEAP32[i4 + 4 >> 2] | 0) == -6) {
      i24 = 0;
      break;
     }
     i24 = HEAP32[i4 >> 2] | 0;
    }
   } while (0);
   HEAP32[i5 >> 2] = i24;
   i24 = i23 + 8 | 0;
   HEAP32[i24 >> 2] = i10;
   HEAP32[i24 + 4 >> 2] = i11;
   i22 = i23;
  }
  HEAP32[i6 >> 2] = i22;
  i21 = HEAP32[i2 >> 2] | 0;
 }
 __ZN3JSC2VM14clearExceptionEv(HEAP32[(i21 & -65536) + 1076 >> 2] | 0);
 HEAP32[i1 >> 2] = 0;
 if ((i9 | 0) == 0) {
  __ZN3JSC12APIEntryShimD2Ev(i8);
  STACKTOP = i7;
  return;
 }
 i1 = i9 | 0;
 if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  __ZN3JSC12APIEntryShimD2Ev(i8);
  STACKTOP = i7;
  return;
 }
 __ZN7WebCore21SerializedScriptValueD2Ev(i9);
 __ZN3WTF8fastFreeEPv(i9);
 __ZN3JSC12APIEntryShimD2Ev(i8);
 STACKTOP = i7;
 return;
}
function __ZN3JSC8JSObject14getDirectIndexEPNS_9ExecStateEj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = HEAP32[i2 >> 2] | 0;
 L1 : do {
  switch (HEAP8[i9 + 55 | 0] & 31 | 0) {
  case 0:
  case 1:
  case 3:
   {
    break;
   }
  case 20:
  case 21:
   {
    i10 = HEAP32[i2 + 4 >> 2] | 0;
    if ((HEAP32[i10 - 8 >> 2] | 0) >>> 0 <= i4 >>> 0) {
     break L1;
    }
    i11 = i10 + (i4 << 3) | 0;
    i12 = HEAP32[i11 + 4 >> 2] | 0;
    i13 = HEAP32[i11 >> 2] | 0;
    i14 = 12;
    break;
   }
  case 26:
  case 27:
   {
    i11 = HEAP32[i2 + 4 >> 2] | 0;
    if ((HEAP32[i11 - 8 >> 2] | 0) >>> 0 <= i4 >>> 0) {
     break L1;
    }
    i10 = i11 + (i4 << 3) | 0;
    i12 = HEAP32[i10 + 4 >> 2] | 0;
    i13 = HEAP32[i10 >> 2] | 0;
    i14 = 12;
    break;
   }
  case 22:
  case 23:
   {
    i10 = HEAP32[i2 + 4 >> 2] | 0;
    if ((HEAP32[i10 - 8 >> 2] | 0) >>> 0 <= i4 >>> 0) {
     break L1;
    }
    i11 = i10 + (i4 << 3) | 0;
    d15 = +HEAPF64[i11 >> 3];
    if (d15 != d15 | (tempDouble = +0, tempDouble != tempDouble)) {
     break L1;
    }
    i12 = HEAP32[i11 + 4 >> 2] | 0;
    i13 = HEAP32[i11 >> 2] | 0;
    i14 = 12;
    break;
   }
  case 28:
  case 30:
  case 29:
  case 31:
   {
    i11 = HEAP32[i2 + 4 >> 2] | 0;
    if ((HEAP32[i11 - 4 >> 2] | 0) >>> 0 <= i4 >>> 0) {
     break L1;
    }
    i10 = i11 + 16 + (i4 << 3) | 0;
    i12 = HEAP32[i10 + 4 >> 2] | 0;
    i13 = HEAP32[i10 >> 2] | 0;
    i14 = 12;
    break;
   }
  default:
   {
    _WTFCrash();
   }
  }
 } while (0);
 do {
  if ((i14 | 0) == 12) {
   if ((i13 & 0 | 0) == 0 & (i12 & -1 | 0) == (-6 | 0)) {
    break;
   }
   i10 = i1 | 0;
   HEAP32[i10 >> 2] = i13;
   HEAP32[i10 + 4 >> 2] = i12;
   STACKTOP = i5;
   return;
  }
 } while (0);
 i12 = (i2 | 0) == 0;
 i13 = i2;
 i14 = i8 + 16 | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i8 + 20 >> 2] = -1;
 i10 = i8 + 24 | 0;
 HEAP32[i10 >> 2] = (i12 ? 0 : 0) | i13;
 HEAP32[i10 + 4 >> 2] = i12 ? -6 : -5;
 i12 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   if ((i12 | 0) == (HEAP32[i12 >> 2] | 0)) {
    break;
   }
   _WTFCrash();
  }
 } while (0);
 if (!(FUNCTION_TABLE_iiiii[HEAP32[(HEAP32[((HEAP32[(i13 & -65536) + 1048 >> 2] | 0) == 2 ? i2 + 8 | 0 : i9 + 32 | 0) >> 2] | 0) + 56 >> 2] & 1](i2, i3, i4, i8) | 0)) {
  HEAP32[i1 + 4 >> 2] = -6;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 i2 = HEAP32[i14 >> 2] | 0;
 if ((i2 | 0) == 1) {
  i14 = i8 + 8 | 0;
  i9 = HEAP32[i14 + 4 >> 2] | 0;
  i13 = i1 | 0;
  HEAP32[i13 >> 2] = HEAP32[i14 >> 2];
  HEAP32[i13 + 4 >> 2] = i9;
  STACKTOP = i5;
  return;
 } else if ((i2 | 0) == 4) {
  i9 = i8 + 8 | 0;
  i13 = HEAP32[i8 + 32 >> 2] | 0;
  i14 = (i13 | 0) == 0;
  i12 = FUNCTION_TABLE_iiiiiii[HEAP32[i9 >> 2] & 1](i3, (i14 ? 0 : 0) | i13, (i14 ? -6 : -5) | 0, HEAP32[i10 >> 2] | 0, HEAP32[i10 + 4 >> 2] | 0, HEAP32[i9 + 4 >> 2] | 0) | 0;
  i9 = i1 | 0;
  HEAP32[i9 >> 2] = i12;
  HEAP32[i9 + 4 >> 2] = tempRet0;
  STACKTOP = i5;
  return;
 } else if ((i2 | 0) == 2) {
  __ZNK3JSC12PropertySlot14functionGetterEPNS_9ExecStateE(i1, i8, i3);
  STACKTOP = i5;
  return;
 } else {
  i2 = HEAP32[i8 + 8 >> 2] | 0;
  i9 = HEAP32[i8 + 32 >> 2] | 0;
  i8 = (i9 | 0) == 0;
  i12 = HEAP32[i10 >> 2] | 0;
  i14 = HEAP32[i10 + 4 >> 2] | 0;
  __ZN3JSC10Identifier4fromEPNS_9ExecStateEj(i7, i3, i4);
  i4 = i7 | 0;
  HEAP32[i6 >> 2] = HEAP32[i4 >> 2];
  i7 = FUNCTION_TABLE_iiiiiii[i2 & 1](i3, (i8 ? 0 : 0) | i9, (i8 ? -6 : -5) | 0, i12, i14, i6) | 0;
  i6 = i1 | 0;
  HEAP32[i6 >> 2] = i7;
  HEAP32[i6 + 4 >> 2] = tempRet0;
  i6 = HEAP32[i4 >> 2] | 0;
  if ((i6 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  i4 = i6 | 0;
  i7 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
  if ((i7 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i6);
   STACKTOP = i5;
   return;
  } else {
   HEAP32[i4 >> 2] = i7;
   STACKTOP = i5;
   return;
  }
 }
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
   if ((i23 | 0) == 10) {
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
   } else if ((i23 | 0) == 8) {
    i22 = i12 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i20 = i1;
    HEAP32[i20 >> 2] = i21;
    HEAP32[i20 + 4 >> 2] = i22;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 HEAP32[i15 >> 2] = i16;
 i16 = i6 | 0;
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = i15 + 4 | 0;
 i12 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i4;
 HEAP32[i16 >> 2] = i12;
 if ((i12 | 0) != 0) {
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i16);
 }
 i16 = i2 + 12 | 0;
 i12 = (HEAP32[i16 >> 2] | 0) + 1 | 0;
 HEAP32[i16 >> 2] = i12;
 i16 = i2 + 4 | 0;
 i4 = HEAP32[i16 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i12 << 1 | 0) < (i4 | 0)) {
  i29 = i15;
  i30 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i31 = 8;
  } else {
   i6 = i4 << 1;
   i31 = (i12 * 6 & -1 | 0) < (i6 | 0) ? i4 : i6;
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
function __ZN3WTF9HashTableINS_6RefPtrINS_10StringImplEEENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EEN3JSC17IdentifierRepHashENS_22KeyValuePairHashTraitsINS_10HashTraitsIS3_EENSB_IjEEEESC_E3addINS_17HashMapTranslatorISE_S9_EERPS2_iEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SE_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
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
  __ZN3WTF9HashTableINS_6RefPtrINS_10StringImplEEENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EEN3JSC17IdentifierRepHashENS_22KeyValuePairHashTraitsINS_10HashTraitsIS3_EENSB_IjEEEESC_E6rehashEiPS5_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = HEAP32[i8 + 16 >> 2] | 0;
 i7 = i9 >>> 7;
 i11 = i7 & i6;
 i12 = i10 + (i11 << 3) | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i13 | 0) == 0) {
   i14 = i12;
   i15 = i8;
  } else {
   i16 = (i9 >>> 30) + ~i7 | 0;
   i17 = i16 << 12 ^ i16;
   i16 = i17 >>> 7 ^ i17;
   i17 = i16 << 2 ^ i16;
   i16 = i17 >>> 20 ^ i17 | 1;
   i17 = 0;
   i18 = 0;
   i19 = i11;
   i20 = i12;
   i21 = i13;
   while (1) {
    if ((i21 | 0) == (i8 | 0)) {
     i22 = 8;
     break;
    }
    i23 = (i21 | 0) == -1 ? i20 : i18;
    i24 = (i17 | 0) == 0 ? i16 : i17;
    i25 = i24 + i19 & i6;
    i26 = i10 + (i25 << 3) | 0;
    i27 = HEAP32[i26 >> 2] | 0;
    if ((i27 | 0) == 0) {
     i22 = 10;
     break;
    } else {
     i17 = i24;
     i18 = i23;
     i19 = i25;
     i20 = i26;
     i21 = i27;
    }
   }
   if ((i22 | 0) == 10) {
    if ((i23 | 0) == 0) {
     i14 = i26;
     i15 = i8;
     break;
    }
    i21 = i23;
    HEAP32[i21 >> 2] = 0;
    HEAP32[i21 + 4 >> 2] = 0;
    i21 = i2 + 16 | 0;
    HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) - 1;
    i14 = i23;
    i15 = HEAP32[i3 >> 2] | 0;
    break;
   } else if ((i22 | 0) == 8) {
    i21 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i19 = i1;
    HEAP32[i19 >> 2] = i20;
    HEAP32[i19 + 4 >> 2] = i21;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i15 | 0) != 0) {
  i10 = i15 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = i14 | 0;
 i22 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i15;
 do {
  if ((i22 | 0) != 0) {
   i15 = i22 | 0;
   i10 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i22);
    break;
   } else {
    HEAP32[i15 >> 2] = i10;
    break;
   }
  }
 } while (0);
 HEAP32[i14 + 4 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i22 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i22;
 i4 = i2 + 4 | 0;
 i10 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i22 << 1 | 0) < (i10 | 0)) {
  i28 = i14;
  i29 = i10;
 } else {
  if ((i10 | 0) == 0) {
   i30 = 8;
  } else {
   i15 = i10 << 1;
   i30 = (i22 * 6 & -1 | 0) < (i15 | 0) ? i10 : i15;
  }
  i15 = __ZN3WTF9HashTableINS_6RefPtrINS_10StringImplEEENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EEN3JSC17IdentifierRepHashENS_22KeyValuePairHashTraitsINS_10HashTraitsIS3_EENSB_IjEEEESC_E6rehashEiPS5_(i2, i30, i14) | 0;
  i28 = i15;
  i29 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i29 << 3) | 0;
 i29 = i1;
 HEAP32[i29 >> 2] = i28;
 HEAP32[i29 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6RefPtrINS_10StringImplEEENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EEN3JSC17IdentifierRepHashENS_22KeyValuePairHashTraitsINS_10HashTraitsIS3_EENSB_IjEEEESC_E6rehashEiPS5_(i1, i2, i3) {
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
   i14 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = HEAP32[i13 + 16 >> 2] | 0;
   i18 = i17 >>> 7;
   i19 = i18 & i16;
   i20 = i14 + (i19 << 3) | 0;
   i21 = HEAP32[i20 >> 2] | 0;
   L8 : do {
    if ((i21 | 0) == 0) {
     i22 = 0;
     i23 = i20;
     i24 = 6;
    } else {
     i25 = (i17 >>> 30) + ~i18 | 0;
     i26 = i25 << 12 ^ i25;
     i25 = i26 >>> 7 ^ i26;
     i26 = i25 << 2 ^ i25;
     i25 = i26 >>> 20 ^ i26 | 1;
     i26 = 0;
     i27 = 0;
     i28 = i19;
     i29 = i20;
     i30 = i21;
     while (1) {
      if ((i30 | 0) == (i13 | 0)) {
       i31 = i29;
       break L8;
      }
      i32 = (i30 | 0) == -1 ? i29 : i26;
      i33 = (i27 | 0) == 0 ? i25 : i27;
      i34 = i33 + i28 & i16;
      i35 = i14 + (i34 << 3) | 0;
      i36 = HEAP32[i35 >> 2] | 0;
      if ((i36 | 0) == 0) {
       i22 = i32;
       i23 = i35;
       i24 = 6;
       break;
      } else {
       i26 = i32;
       i27 = i33;
       i28 = i34;
       i29 = i35;
       i30 = i36;
      }
     }
    }
   } while (0);
   if ((i24 | 0) == 6) {
    i24 = 0;
    i31 = (i22 | 0) != 0 ? i22 : i23;
   }
   i14 = i31 | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i13 = i16 | 0;
     i21 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i21 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break;
     } else {
      HEAP32[i13 >> 2] = i21;
      break;
     }
    }
   } while (0);
   i16 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i14 >> 2] = i16;
   HEAP32[i31 + 4 >> 2] = HEAP32[i7 + (i10 << 3) + 4 >> 2];
   i15 = (i2 | 0) == (i3 | 0) ? i31 : i11;
  }
  i16 = i10 + 1 | 0;
  if ((i16 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i16;
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
  i1 = HEAP32[i7 + (i37 << 3) >> 2] | 0;
  i11 = i1;
  do {
   if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
    i10 = i1 | 0;
    i31 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i31 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i10 >> 2] = i31;
     break;
    }
   }
  } while (0);
  i1 = i37 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i37 = i1;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore15CloneSerializer15serializeNumberEdRN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEE(d1, i2) {
 d1 = +d1;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN7WebCoreL17writeLittleEndianIjEEvRN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEET_(i2, 5);
 HEAP8[i4] = 10;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i2 + 4 | 0;
 if ((i6 | 0) == (HEAP32[i7 >> 2] | 0)) {
  i8 = i6 + 1 | 0;
  i9 = i2 | 0;
  i10 = HEAP32[i9 >> 2] | 0;
  do {
   if (i10 >>> 0 > i4 >>> 0) {
    i11 = 5;
   } else {
    if ((i10 + i6 | 0) >>> 0 <= i4 >>> 0) {
     i11 = 5;
     break;
    }
    i12 = i4 - i10 | 0;
    i13 = i8 + (i6 >>> 2) | 0;
    i14 = i13 >>> 0 > 16 >>> 0 ? i13 : 16;
    i13 = i14 >>> 0 > i8 >>> 0 ? i14 : i8;
    do {
     if (i6 >>> 0 < i13 >>> 0) {
      i14 = __ZN3WTF18fastMallocGoodSizeEj(i13) | 0;
      HEAP32[i7 >> 2] = i14;
      i15 = __ZN3WTF10fastMallocEj(i14) | 0;
      HEAP32[i9 >> 2] = i15;
      _memcpy(i15 | 0, i10 | 0, i6) | 0;
      if ((i10 | 0) == 0) {
       break;
      }
      if ((HEAP32[i9 >> 2] | 0) == (i10 | 0)) {
       HEAP32[i9 >> 2] = 0;
       HEAP32[i7 >> 2] = 0;
      }
      __ZN3WTF8fastFreeEPv(i10);
     }
    } while (0);
    i13 = HEAP32[i9 >> 2] | 0;
    i16 = i13 + i12 | 0;
    i17 = i13;
   }
  } while (0);
  if ((i11 | 0) == 5) {
   i11 = i8 + (i6 >>> 2) | 0;
   i13 = i11 >>> 0 > 16 >>> 0 ? i11 : 16;
   i11 = i13 >>> 0 > i8 >>> 0 ? i13 : i8;
   do {
    if (i6 >>> 0 < i11 >>> 0) {
     i8 = __ZN3WTF18fastMallocGoodSizeEj(i11) | 0;
     HEAP32[i7 >> 2] = i8;
     i13 = __ZN3WTF10fastMallocEj(i8) | 0;
     HEAP32[i9 >> 2] = i13;
     _memcpy(i13 | 0, i10 | 0, i6) | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     if ((HEAP32[i9 >> 2] | 0) == (i10 | 0)) {
      HEAP32[i9 >> 2] = 0;
      HEAP32[i7 >> 2] = 0;
     }
     __ZN3WTF8fastFreeEPv(i10);
    }
   } while (0);
   i16 = i4;
   i17 = HEAP32[i9 >> 2] | 0;
  }
  HEAP8[i17 + (HEAP32[i5 >> 2] | 0) | 0] = HEAP8[i16] | 0;
 } else {
  HEAP8[(HEAP32[i2 >> 2] | 0) + i6 | 0] = 10;
 }
 i6 = (HEAP32[i5 >> 2] | 0) + 1 | 0;
 HEAP32[i5 >> 2] = i6;
 HEAPF64[tempDoublePtr >> 3] = d1;
 i16 = i2 | 0;
 i2 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
 i17 = HEAP32[tempDoublePtr >> 2] | 0;
 i9 = 1;
 i4 = i6;
 while (1) {
  if ((i4 | 0) == (HEAP32[i7 >> 2] | 0)) {
   i6 = i4 + 1 | 0;
   i10 = i6 + (i4 >>> 2) | 0;
   i11 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   i10 = i11 >>> 0 > i6 >>> 0 ? i11 : i6;
   do {
    if (i4 >>> 0 < i10 >>> 0) {
     i6 = HEAP32[i16 >> 2] | 0;
     i11 = __ZN3WTF18fastMallocGoodSizeEj(i10) | 0;
     HEAP32[i7 >> 2] = i11;
     i13 = __ZN3WTF10fastMallocEj(i11) | 0;
     HEAP32[i16 >> 2] = i13;
     _memcpy(i13 | 0, i6 | 0, i4) | 0;
     if ((i6 | 0) == 0) {
      break;
     }
     if ((HEAP32[i16 >> 2] | 0) == (i6 | 0)) {
      HEAP32[i16 >> 2] = 0;
      HEAP32[i7 >> 2] = 0;
     }
     __ZN3WTF8fastFreeEPv(i6);
    }
   } while (0);
   HEAP8[(HEAP32[i16 >> 2] | 0) + (HEAP32[i5 >> 2] | 0) | 0] = i17;
  } else {
   HEAP8[(HEAP32[i16 >> 2] | 0) + i4 | 0] = i17;
  }
  i10 = (HEAP32[i5 >> 2] | 0) + 1 | 0;
  HEAP32[i5 >> 2] = i10;
  if (i9 >>> 0 >= 8 >>> 0) {
   break;
  }
  i12 = i17 >>> 8 | i2 << 24;
  i2 = i2 >> 8 | ((i2 | 0) < 0 | 0 ? -1 : 0) << 24;
  i17 = i12;
  i9 = i9 + 1 | 0;
  i4 = i10;
 }
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorIN3JSC17PropertyNameArrayELj16ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i1 + 4 | 0;
 if ((HEAP32[i5 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i1 + 8 >> 2] | 0;
 i9 = i7 + (i8 * 36 & -1) | 0;
 do {
  if (i2 >>> 0 > 16 >>> 0) {
   if (i2 >>> 0 > 119304647 >>> 0) {
    _WTFCrash();
   } else {
    i10 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 36 & -1) | 0;
    HEAP32[i5 >> 2] = (i10 >>> 0) / 36 & -1;
    i11 = __ZN3WTF10fastMallocEj(i10) | 0;
    HEAP32[i6 >> 2] = i11;
    i12 = i11;
    break;
   }
  } else {
   i11 = i1 + 12 | 0;
   HEAP32[i6 >> 2] = i11;
   HEAP32[i5 >> 2] = 16;
   i12 = i11;
  }
 } while (0);
 if ((i8 | 0) != 0) {
  i8 = i7;
  i2 = i12;
  while (1) {
   i12 = i8 | 0;
   i11 = HEAP32[i12 >> 2] | 0;
   HEAP32[i2 >> 2] = i11;
   if ((i11 | 0) != 0) {
    i10 = i11 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   }
   i10 = i2 + 4 | 0;
   i11 = i10 | 0;
   i13 = i8 + 4 | 0;
   _memset(i10 | 0, 0, 20) | 0;
   i10 = HEAP32[i13 >> 2] | 0;
   i14 = HEAP32[i8 + 8 >> 2] | 0;
   i15 = i10 + (i14 << 2) | 0;
   L18 : do {
    if ((HEAP32[i8 + 16 >> 2] | 0) != 0) {
     L20 : do {
      if ((i14 | 0) == 0) {
       i16 = i10;
      } else {
       i17 = i10;
       while (1) {
        i18 = HEAP32[i17 >> 2] | 0;
        if (!((i18 | 0) == (-1 | 0) | (i18 | 0) == 0)) {
         i16 = i17;
         break L20;
        }
        i17 = i17 + 4 | 0;
        if ((i17 | 0) == (i15 | 0)) {
         break L18;
        }
       }
      }
     } while (0);
     if ((i16 | 0) == (i15 | 0)) {
      break;
     } else {
      i19 = i16;
     }
     while (1) {
      __ZN3WTF9HashTableIPNS_10StringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_SD_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i4, i11, i19, i19);
      i17 = i19 + 4 | 0;
      if ((i17 | 0) == (i15 | 0)) {
       break L18;
      } else {
       i20 = i17;
      }
      while (1) {
       i17 = HEAP32[i20 >> 2] | 0;
       if (!((i17 | 0) == (-1 | 0) | (i17 | 0) == 0)) {
        break;
       }
       i17 = i20 + 4 | 0;
       if ((i17 | 0) == (i15 | 0)) {
        break L18;
       } else {
        i20 = i17;
       }
      }
      if ((i20 | 0) == (i15 | 0)) {
       break;
      } else {
       i19 = i20;
      }
     }
    }
   } while (0);
   HEAP32[i2 + 24 >> 2] = HEAP32[i8 + 24 >> 2];
   HEAP32[i2 + 28 >> 2] = HEAP32[i8 + 28 >> 2];
   HEAP32[i2 + 32 >> 2] = HEAP32[i8 + 32 >> 2];
   i15 = HEAP32[i13 >> 2] | 0;
   if ((i15 | 0) != 0) {
    __ZN3WTF8fastFreeEPv(i15);
   }
   i15 = HEAP32[i12 >> 2] | 0;
   if ((i15 | 0) != 0) {
    __ZN3WTF10RefCountedIN3JSC21PropertyNameArrayDataEE5derefEv(i15 | 0);
   }
   i15 = i8 + 36 | 0;
   if ((i15 | 0) == (i9 | 0)) {
    break;
   } else {
    i8 = i15;
    i2 = i2 + 36 | 0;
   }
  }
 }
 if ((i1 + 12 | 0) == (i7 | 0) | (i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i6 >> 2] | 0) == (i7 | 0)) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i5 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i7);
 STACKTOP = i3;
 return;
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
function __ZN7WebCore17CloneDeserializer14readStringDataERNS0_15CachedStringRefERb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 + 4 | 0;
 if ((HEAP8[i7] & 1) != 0) {
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 i9 = i1 + 96 | 0;
 i10 = HEAP32[i1 + 100 >> 2] | 0;
 i11 = HEAP32[i9 >> 2] | 0;
 if (i11 >>> 0 > (i10 - 4 | 0) >>> 0) {
  HEAP8[i7] = 1;
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 i12 = i11 + 1 | 0;
 HEAP32[i9 >> 2] = i12;
 i13 = HEAPU8[i11] | 0;
 i14 = i11 + 2 | 0;
 HEAP32[i9 >> 2] = i14;
 i15 = (HEAPU8[i12] | 0) << 8 | i13;
 i13 = i11 + 3 | 0;
 HEAP32[i9 >> 2] = i13;
 i12 = i15 | (HEAPU8[i14] | 0) << 16;
 HEAP32[i9 >> 2] = i11 + 4;
 i11 = i12 | (HEAPU8[i13] | 0) << 24;
 if ((i11 | 0) == (-1 | 0)) {
  HEAP8[i3] = 1;
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 } else if ((i11 | 0) == (-2 | 0)) {
  HEAP32[i5 >> 2] = 0;
  i3 = i1 + 108 | 0;
  if (!(__ZN7WebCore17CloneDeserializer21readConstantPoolIndexIN3WTF6VectorINS0_12CachedStringELj0ENS2_15CrashOnOverflowEEEEEbRKT_Rj(i1, i3, i5) | 0)) {
   HEAP8[i7] = 1;
   i8 = 0;
   STACKTOP = i4;
   return i8 | 0;
  }
  i13 = HEAP32[i5 >> 2] | 0;
  if (i13 >>> 0 < (HEAP32[i1 + 116 >> 2] | 0) >>> 0) {
   i5 = i2;
   HEAP32[i5 >> 2] = i3;
   HEAP32[i5 + 4 >> 2] = i13;
   i8 = 1;
   STACKTOP = i4;
   return i8 | 0;
  } else {
   HEAP8[i7] = 1;
   i8 = 0;
   STACKTOP = i4;
   return i8 | 0;
  }
 } else {
  i13 = i6 | 0;
  HEAP32[i13 >> 2] = 0;
  if (__ZN7WebCore17CloneDeserializer10readStringERPKhS2_RN3WTF6StringEj(i9, i10, i6, i11) | 0) {
   i11 = i1 + 108 | 0;
   i6 = i1 + 116 | 0;
   i10 = HEAP32[i6 >> 2] | 0;
   if ((i10 | 0) == (HEAP32[i1 + 112 >> 2] | 0)) {
    i1 = i10 + 1 | 0;
    i9 = i1 + (i10 >>> 2) | 0;
    i5 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
    __ZN3WTF6VectorIN7WebCore17CloneDeserializer12CachedStringELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i11, i5 >>> 0 > i1 >>> 0 ? i5 : i1);
    i1 = HEAP32[i11 >> 2] | 0;
    i5 = HEAP32[i6 >> 2] | 0;
    i9 = HEAP32[i13 >> 2] | 0;
    HEAP32[i1 + (i5 << 4) >> 2] = i9;
    if ((i9 | 0) != 0) {
     i3 = i9 | 0;
     HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
    }
    i3 = i1 + (i5 << 4) + 8 | 0;
    HEAP32[i3 + 4 >> 2] = -6;
    HEAP32[i3 >> 2] = 0;
    i16 = i9;
   } else {
    i9 = HEAP32[i11 >> 2] | 0;
    i3 = HEAP32[i13 >> 2] | 0;
    HEAP32[i9 + (i10 << 4) >> 2] = i3;
    if ((i3 | 0) != 0) {
     i5 = i3 | 0;
     HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
    }
    i5 = i9 + (i10 << 4) + 8 | 0;
    HEAP32[i5 + 4 >> 2] = -6;
    HEAP32[i5 >> 2] = 0;
    i16 = i3;
   }
   i3 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i3 + 1;
   i6 = i2;
   HEAP32[i6 >> 2] = i11;
   HEAP32[i6 + 4 >> 2] = i3;
   i17 = 1;
   i18 = i16;
  } else {
   HEAP8[i7] = 1;
   i17 = 0;
   i18 = HEAP32[i13 >> 2] | 0;
  }
  if ((i18 | 0) == 0) {
   i8 = i17;
   STACKTOP = i4;
   return i8 | 0;
  }
  i13 = i18 | 0;
  i7 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
  if ((i7 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i18);
   i8 = i17;
   STACKTOP = i4;
   return i8 | 0;
  } else {
   HEAP32[i13 >> 2] = i7;
   i8 = i17;
   STACKTOP = i4;
   return i8 | 0;
  }
 }
 return 0;
}
function __ZN3JSC8JSObject15setIndexQuicklyERNS_2VMEjNS_7JSValueE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 L1 : do {
  switch (HEAP8[(HEAP32[i1 >> 2] | 0) + 55 | 0] & 31 | 0) {
  case 28:
  case 30:
  case 29:
  case 31:
   {
    i9 = HEAP32[i1 + 4 >> 2] | 0;
    i10 = i9 + 16 + (i3 << 3) | 0;
    i11 = HEAP32[i10 >> 2] | 0;
    i12 = HEAP32[i10 + 4 >> 2] | 0;
    i13 = i4 | 0;
    i14 = HEAP32[i13 + 4 >> 2] | 0;
    HEAP32[i10 >> 2] = HEAP32[i13 >> 2];
    HEAP32[i10 + 4 >> 2] = i14;
    if (!((i11 & 0 | 0) == 0 & (i12 & -1 | 0) == (-6 | 0))) {
     STACKTOP = i5;
     return;
    }
    i12 = i9 + 8 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
    i12 = i9 - 8 | 0;
    if ((HEAP32[i12 >> 2] | 0) >>> 0 > i3 >>> 0) {
     STACKTOP = i5;
     return;
    }
    HEAP32[i12 >> 2] = i3 + 1;
    STACKTOP = i5;
    return;
   }
  case 22:
  case 23:
   {
    i12 = HEAP32[i4 + 4 >> 2] | 0;
    i9 = (i12 | 0) == -1;
    if (!(i9 | i12 >>> 0 < 4294967289 >>> 0)) {
     i12 = i4 | 0;
     i11 = HEAP32[i12 + 4 >> 2] | 0;
     i14 = i7 | 0;
     HEAP32[i14 >> 2] = HEAP32[i12 >> 2];
     HEAP32[i14 + 4 >> 2] = i11;
     __ZN3JSC8JSObject48convertDoubleToContiguousWhilePerformingSetIndexERNS_2VMEjNS_7JSValueE(i1, i2, i3, i7);
     STACKTOP = i5;
     return;
    }
    if (i9) {
     d15 = +(HEAP32[i4 >> 2] | 0);
    } else {
     d15 = +HEAPF64[i4 >> 3];
    }
    if (d15 != d15 | (tempDouble = +0, tempDouble != tempDouble)) {
     i9 = i4 | 0;
     i11 = HEAP32[i9 + 4 >> 2] | 0;
     i14 = i8 | 0;
     HEAP32[i14 >> 2] = HEAP32[i9 >> 2];
     HEAP32[i14 + 4 >> 2] = i11;
     __ZN3JSC8JSObject48convertDoubleToContiguousWhilePerformingSetIndexERNS_2VMEjNS_7JSValueE(i1, i2, i3, i8);
     STACKTOP = i5;
     return;
    }
    i11 = i1 + 4 | 0;
    HEAPF64[(HEAP32[i11 >> 2] | 0) + (i3 << 3) >> 3] = d15;
    i14 = (HEAP32[i11 >> 2] | 0) - 8 | 0;
    if ((HEAP32[i14 >> 2] | 0) >>> 0 > i3 >>> 0) {
     STACKTOP = i5;
     return;
    }
    HEAP32[i14 >> 2] = i3 + 1;
    STACKTOP = i5;
    return;
   }
  case 26:
  case 27:
   {
    break;
   }
  case 20:
  case 21:
   {
    if ((HEAP32[i4 + 4 >> 2] | 0) == -1) {
     break L1;
    }
    i14 = i4 | 0;
    i11 = HEAP32[i14 + 4 >> 2] | 0;
    i9 = i6 | 0;
    HEAP32[i9 >> 2] = HEAP32[i14 >> 2];
    HEAP32[i9 + 4 >> 2] = i11;
    __ZN3JSC8JSObject55convertInt32ToDoubleOrContiguousWhilePerformingSetIndexERNS_2VMEjNS_7JSValueE(i1, i2, i3, i6);
    STACKTOP = i5;
    return;
   }
  default:
   {
    _WTFCrash();
   }
  }
 } while (0);
 i6 = i1 + 4 | 0;
 i1 = i4 | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i2 = (HEAP32[i6 >> 2] | 0) + (i3 << 3) | 0;
 HEAP32[i2 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i2 + 4 >> 2] = i4;
 i4 = (HEAP32[i6 >> 2] | 0) - 8 | 0;
 if ((HEAP32[i4 >> 2] | 0) >>> 0 > i3 >>> 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i4 >> 2] = i3 + 1;
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableIPN3JSC8JSObjectENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_RjEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPN3JSC8JSObjectENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E6expandEPS5_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8;
 i10 = i9 + ~(i9 << 15) | 0;
 i9 = (i10 >>> 10 ^ i10) * 9 & -1;
 i10 = i9 >>> 6 ^ i9;
 i9 = i10 + ~(i10 << 11) | 0;
 i10 = i9 >>> 16 ^ i9;
 i9 = i10 & i6;
 i11 = i7 + (i9 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = 9;
  } else {
   i15 = (i10 >>> 23) + ~i10 | 0;
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
     i14 = 6;
     break;
    }
    i21 = (i20 | 0) == -1 ? i19 : i17;
    i22 = (i16 | 0) == 0 ? i15 : i16;
    i23 = i22 + i18 & i6;
    i24 = i7 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i14 = 8;
     break;
    } else {
     i16 = i22;
     i17 = i21;
     i18 = i23;
     i19 = i24;
     i20 = i25;
    }
   }
   if ((i14 | 0) == 6) {
    i20 = i7 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i14 | 0) == 8) {
    if ((i21 | 0) == 0) {
     i13 = i24;
     i14 = 9;
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
   }
  }
 } while (0);
 if ((i14 | 0) == 9) {
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
  i8 = __ZN3WTF9HashTableIPN3JSC8JSObjectENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E6expandEPS5_(i2, i26) | 0;
  i29 = i8;
  i30 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i30 << 3) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPN3JSC8JSObjectENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_iEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPN3JSC8JSObjectENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E6expandEPS5_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8;
 i10 = i9 + ~(i9 << 15) | 0;
 i9 = (i10 >>> 10 ^ i10) * 9 & -1;
 i10 = i9 >>> 6 ^ i9;
 i9 = i10 + ~(i10 << 11) | 0;
 i10 = i9 >>> 16 ^ i9;
 i9 = i10 & i6;
 i11 = i7 + (i9 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = 9;
  } else {
   i15 = (i10 >>> 23) + ~i10 | 0;
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
     i14 = 6;
     break;
    }
    i21 = (i20 | 0) == -1 ? i19 : i17;
    i22 = (i16 | 0) == 0 ? i15 : i16;
    i23 = i22 + i18 & i6;
    i24 = i7 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i14 = 8;
     break;
    } else {
     i16 = i22;
     i17 = i21;
     i18 = i23;
     i19 = i24;
     i20 = i25;
    }
   }
   if ((i14 | 0) == 8) {
    if ((i21 | 0) == 0) {
     i13 = i24;
     i14 = 9;
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
   } else if ((i14 | 0) == 6) {
    i20 = i7 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i14 | 0) == 9) {
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
  i8 = __ZN3WTF9HashTableIPN3JSC8JSObjectENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E6expandEPS5_(i2, i26) | 0;
  i29 = i8;
  i30 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i30 << 3) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore15CloneSerializer15fillTransferMapIN3JSC11ArrayBufferEEEvPN3WTF6VectorINS4_6RefPtrIT_EELj1ENS4_15CrashOnOverflowEEERNS4_7HashMapIPNS2_8JSObjectEjNS4_7PtrHashISE_EENS4_10HashTraitsISE_EENSH_IjEEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i1 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 i10 = HEAP32[(HEAP32[HEAP32[i1 + 16 >> 2] >> 2] | 0) + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i11 = i2 + 8 | 0;
 if ((HEAP32[i11 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i12 = i2 | 0;
 i2 = i6 + 4 | 0;
 i13 = i6;
 i14 = i3 | 0;
 i15 = i3 | 0;
 i16 = i3 + 8 | 0;
 i3 = 0;
 i17 = i1;
 while (1) {
  __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS0_11ArrayBufferE(i6, i17, i10, HEAP32[(HEAP32[i12 >> 2] | 0) + (i3 << 2) >> 2] | 0);
  L9 : do {
   if ((HEAP32[i2 >> 2] | 0) == -5) {
    i1 = __ZN3JSC6JSCell9getObjectEv(HEAP32[i13 >> 2] | 0) | 0;
    HEAP32[i7 >> 2] = i1;
    if ((i1 | 0) == 0) {
     i18 = i3;
     break;
    }
    i19 = HEAP32[i14 >> 2] | 0;
    L13 : do {
     if ((i19 | 0) != 0) {
      i20 = HEAP32[i16 >> 2] | 0;
      i21 = i1;
      i22 = i21 + ~(i21 << 15) | 0;
      i21 = (i22 >>> 10 ^ i22) * 9 & -1;
      i22 = i21 >>> 6 ^ i21;
      i21 = i22 + ~(i22 << 11) | 0;
      i22 = i21 >>> 16 ^ i21;
      i21 = i20 & i22;
      i23 = i19 + (i21 << 3) | 0;
      i24 = HEAP32[i23 >> 2] | 0;
      if ((i24 | 0) == (i1 | 0)) {
       i25 = i23;
      } else {
       i23 = (i22 >>> 23) + ~i22 | 0;
       i22 = i23 << 12 ^ i23;
       i23 = i22 >>> 7 ^ i22;
       i22 = i23 << 2 ^ i23;
       i23 = i22 >>> 20 ^ i22 | 1;
       i22 = 0;
       i26 = i21;
       i21 = i24;
       while (1) {
        if ((i21 | 0) == 0) {
         break L13;
        }
        i24 = (i22 | 0) == 0 ? i23 : i22;
        i27 = i24 + i26 & i20;
        i28 = i19 + (i27 << 3) | 0;
        i29 = HEAP32[i28 >> 2] | 0;
        if ((i29 | 0) == (i1 | 0)) {
         i25 = i28;
         break;
        } else {
         i22 = i24;
         i26 = i27;
         i21 = i29;
        }
       }
      }
      if ((i25 | 0) != 0) {
       i18 = i3;
       break L9;
      }
     }
    } while (0);
    __ZN3WTF9HashTableIPN3JSC8JSObjectENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_RjEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i8, i15, i7, i5);
    i18 = HEAP32[i5 >> 2] | 0;
   } else {
    HEAP32[i7 >> 2] = 0;
    i18 = i3;
   }
  } while (0);
  i1 = i18 + 1 | 0;
  HEAP32[i5 >> 2] = i1;
  if (i1 >>> 0 >= (HEAP32[i11 >> 2] | 0) >>> 0) {
   break;
  }
  i3 = i1;
  i17 = HEAP32[i9 >> 2] | 0;
 }
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15CloneSerializer15fillTransferMapINS_11MessagePortEEEvPN3WTF6VectorINS3_6RefPtrIT_EELj1ENS3_15CrashOnOverflowEEERNS3_7HashMapIPN3JSC8JSObjectEjNS3_7PtrHashISE_EENS3_10HashTraitsISE_EENSH_IjEEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i1 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 i10 = HEAP32[(HEAP32[HEAP32[i1 + 16 >> 2] >> 2] | 0) + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i11 = i2 + 8 | 0;
 if ((HEAP32[i11 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i12 = i2 | 0;
 i2 = i6 + 4 | 0;
 i13 = i6;
 i14 = i3 | 0;
 i15 = i3 | 0;
 i16 = i3 + 8 | 0;
 i3 = 0;
 i17 = i1;
 while (1) {
  __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_11MessagePortE(i6, i17, i10, HEAP32[(HEAP32[i12 >> 2] | 0) + (i3 << 2) >> 2] | 0);
  L9 : do {
   if ((HEAP32[i2 >> 2] | 0) == -5) {
    i1 = __ZN3JSC6JSCell9getObjectEv(HEAP32[i13 >> 2] | 0) | 0;
    HEAP32[i7 >> 2] = i1;
    if ((i1 | 0) == 0) {
     i18 = i3;
     break;
    }
    i19 = HEAP32[i14 >> 2] | 0;
    L13 : do {
     if ((i19 | 0) != 0) {
      i20 = HEAP32[i16 >> 2] | 0;
      i21 = i1;
      i22 = i21 + ~(i21 << 15) | 0;
      i21 = (i22 >>> 10 ^ i22) * 9 & -1;
      i22 = i21 >>> 6 ^ i21;
      i21 = i22 + ~(i22 << 11) | 0;
      i22 = i21 >>> 16 ^ i21;
      i21 = i20 & i22;
      i23 = i19 + (i21 << 3) | 0;
      i24 = HEAP32[i23 >> 2] | 0;
      if ((i24 | 0) == (i1 | 0)) {
       i25 = i23;
      } else {
       i23 = (i22 >>> 23) + ~i22 | 0;
       i22 = i23 << 12 ^ i23;
       i23 = i22 >>> 7 ^ i22;
       i22 = i23 << 2 ^ i23;
       i23 = i22 >>> 20 ^ i22 | 1;
       i22 = 0;
       i26 = i21;
       i21 = i24;
       while (1) {
        if ((i21 | 0) == 0) {
         break L13;
        }
        i24 = (i22 | 0) == 0 ? i23 : i22;
        i27 = i24 + i26 & i20;
        i28 = i19 + (i27 << 3) | 0;
        i29 = HEAP32[i28 >> 2] | 0;
        if ((i29 | 0) == (i1 | 0)) {
         i25 = i28;
         break;
        } else {
         i22 = i24;
         i26 = i27;
         i21 = i29;
        }
       }
      }
      if ((i25 | 0) != 0) {
       i18 = i3;
       break L9;
      }
     }
    } while (0);
    __ZN3WTF9HashTableIPN3JSC8JSObjectENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_RjEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i8, i15, i7, i5);
    i18 = HEAP32[i5 >> 2] | 0;
   } else {
    HEAP32[i7 >> 2] = 0;
    i18 = i3;
   }
  } while (0);
  i1 = i18 + 1 | 0;
  HEAP32[i5 >> 2] = i1;
  if (i1 >>> 0 >= (HEAP32[i11 >> 2] | 0) >>> 0) {
   break;
  }
  i3 = i1;
  i17 = HEAP32[i9 >> 2] | 0;
 }
 STACKTOP = i4;
 return;
}
function __ZN3WTF6VectorIN3JSC17PropertyNameArrayELj16ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i6 + 1 | 0;
 i8 = i1 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if (i9 >>> 0 > i2 >>> 0) {
   i10 = 3;
  } else {
   if ((i9 + (i6 * 36 & -1) | 0) >>> 0 <= i2 >>> 0) {
    i10 = 3;
    break;
   }
   i11 = HEAP32[i1 + 4 >> 2] | 0;
   i12 = i11 + 1 + (i11 >>> 2) | 0;
   i11 = i12 >>> 0 > 16 >>> 0 ? i12 : 16;
   __ZN3WTF6VectorIN3JSC17PropertyNameArrayELj16ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i11 >>> 0 > i7 >>> 0 ? i11 : i7);
   i11 = HEAP32[i8 >> 2] | 0;
   i13 = i11 + (((i2 - i9 | 0) / 36 & -1) * 36 & -1) | 0;
   i14 = i11;
  }
 } while (0);
 if ((i10 | 0) == 3) {
  i10 = HEAP32[i1 + 4 >> 2] | 0;
  i9 = i10 + 1 + (i10 >>> 2) | 0;
  i10 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
  __ZN3WTF6VectorIN3JSC17PropertyNameArrayELj16ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i10 >>> 0 > i7 >>> 0 ? i10 : i7);
  i13 = i2;
  i14 = HEAP32[i8 >> 2] | 0;
 }
 i8 = HEAP32[i5 >> 2] | 0;
 i2 = HEAP32[i13 >> 2] | 0;
 HEAP32[i14 + (i8 * 36 & -1) >> 2] = i2;
 if ((i2 | 0) != 0) {
  i7 = i2 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = i14 + (i8 * 36 & -1) + 4 | 0;
 i2 = i7 | 0;
 _memset(i7 | 0, 0, 20) | 0;
 i7 = HEAP32[i13 + 4 >> 2] | 0;
 i10 = HEAP32[i13 + 8 >> 2] | 0;
 i1 = i7 + (i10 << 2) | 0;
 L10 : do {
  if ((HEAP32[i13 + 16 >> 2] | 0) != 0) {
   L12 : do {
    if ((i10 | 0) == 0) {
     i15 = i7;
    } else {
     i9 = i7;
     while (1) {
      i6 = HEAP32[i9 >> 2] | 0;
      if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
       i15 = i9;
       break L12;
      }
      i9 = i9 + 4 | 0;
      if ((i9 | 0) == (i1 | 0)) {
       break L10;
      }
     }
    }
   } while (0);
   if ((i15 | 0) == (i1 | 0)) {
    break;
   } else {
    i16 = i15;
   }
   while (1) {
    __ZN3WTF9HashTableIPNS_10StringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_SD_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i4, i2, i16, i16);
    i9 = i16 + 4 | 0;
    if ((i9 | 0) == (i1 | 0)) {
     break L10;
    } else {
     i17 = i9;
    }
    while (1) {
     i9 = HEAP32[i17 >> 2] | 0;
     if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
      break;
     }
     i9 = i17 + 4 | 0;
     if ((i9 | 0) == (i1 | 0)) {
      break L10;
     } else {
      i17 = i9;
     }
    }
    if ((i17 | 0) == (i1 | 0)) {
     break;
    } else {
     i16 = i17;
    }
   }
  }
 } while (0);
 HEAP32[i14 + (i8 * 36 & -1) + 24 >> 2] = HEAP32[i13 + 24 >> 2];
 HEAP32[i14 + (i8 * 36 & -1) + 28 >> 2] = HEAP32[i13 + 28 >> 2];
 HEAP32[i14 + (i8 * 36 & -1) + 32 >> 2] = HEAP32[i13 + 32 >> 2];
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17CloneDeserializer8readFileERN3WTF6RefPtrINS_4FileEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i4 = i3 + 24 | 0;
 i5 = i3 + 32 | 0;
 i6 = i3 + 40 | 0;
 i7 = i3 + 48 | 0;
 i8 = i3 + 96 | 0;
 i9 = i4 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i4 + 4 | 0;
 HEAP32[i10 >> 2] = 0;
 if (!(__ZN7WebCore17CloneDeserializer14readStringDataERNS0_15CachedStringRefERb(i1, i4, i3 + 16 | 0) | 0)) {
  i11 = 0;
  STACKTOP = i3;
  return i11 | 0;
 }
 i4 = i5 | 0;
 HEAP32[i4 >> 2] = 0;
 i12 = i5 + 4 | 0;
 HEAP32[i12 >> 2] = 0;
 if (!(__ZN7WebCore17CloneDeserializer14readStringDataERNS0_15CachedStringRefERb(i1, i5, i3 + 8 | 0) | 0)) {
  i11 = 0;
  STACKTOP = i3;
  return i11 | 0;
 }
 i5 = i6 | 0;
 HEAP32[i5 >> 2] = 0;
 i13 = i6 + 4 | 0;
 HEAP32[i13 >> 2] = 0;
 if (!(__ZN7WebCore17CloneDeserializer14readStringDataERNS0_15CachedStringRefERb(i1, i6, i3 | 0) | 0)) {
  i11 = 0;
  STACKTOP = i3;
  return i11 | 0;
 }
 if ((HEAP8[i1 + 92 | 0] & 1) == 0) {
  i11 = 1;
  STACKTOP = i3;
  return i11 | 0;
 }
 i1 = HEAP32[i9 >> 2] | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) >>> 0 <= i9 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i10 = (HEAP32[i1 >> 2] | 0) + (i9 << 4) | 0;
 i9 = i8 | 0;
 HEAP32[i9 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i8);
 i1 = HEAP32[i4 >> 2] | 0;
 i4 = HEAP32[i12 >> 2] | 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) >>> 0 <= i4 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 __ZN7WebCore3URLC1ERKS0_RKN3WTF6StringE(i7, i8, (HEAP32[i1 >> 2] | 0) + (i4 << 4) | 0);
 i4 = HEAP32[i5 >> 2] | 0;
 i5 = HEAP32[i13 >> 2] | 0;
 if ((HEAP32[i4 + 8 >> 2] | 0) >>> 0 <= i5 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i13 = (HEAP32[i4 >> 2] | 0) + (i5 << 4) | 0;
 i5 = __ZN3WTF10fastMallocEj(80) | 0;
 __ZN7WebCore4FileC1ERKN3WTF6StringERKNS_3URLES4_(i5, i10, i7, i13);
 i13 = i2 | 0;
 i2 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i5;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 8 | 0;
   i13 = i5 | 0;
   i10 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i13 >> 2] = i10;
    break;
   }
   i10 = i5 - 8 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 63](i10);
  }
 } while (0);
 i2 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i7 = i2 | 0;
   i10 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i7 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i9 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i11 = 1;
  STACKTOP = i3;
  return i11 | 0;
 }
 i9 = i2 | 0;
 i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i11 = 1;
  STACKTOP = i3;
  return i11 | 0;
 } else {
  HEAP32[i9 >> 2] = i10;
  i11 = 1;
  STACKTOP = i3;
  return i11 | 0;
 }
 return 0;
}
function __ZN3JSC7JSArray6createERNS_2VMEPNS_9StructureEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i2 + 55 | 0;
 do {
  if (((HEAP8[i9] & 30) - 28 & 255) >>> 0 < 3 >>> 0) {
   i10 = i8 | 0;
   i11 = i1 + 19600 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   do {
    if (i12 >>> 0 < 56 >>> 0) {
     __ZN3JSC11CopiedSpace19tryAllocateSlowCaseEjPPv(i8, i1 + 19596 | 0, 56, i7);
     if ((HEAP8[i10] & 1) == 0) {
      _WTFCrash();
      return 0;
     } else {
      i13 = HEAP32[i7 >> 2] | 0;
      break;
     }
    } else {
     HEAP32[i11 >> 2] = i12 - 56;
     i14 = (HEAP32[i1 + 19604 >> 2] | 0) + (-i12 | 0) | 0;
     HEAP32[i7 >> 2] = i14;
     HEAP8[i10] = 1;
     i13 = i14;
    }
   } while (0);
   i10 = i13;
   i12 = i13 + 8 | 0;
   HEAP32[i10 >> 2] = i3;
   HEAP32[i10 + 4 >> 2] = 4;
   HEAP32[i13 + 12 >> 2] = 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i13 + 16 >> 2] = 0;
   i15 = i12;
  } else {
   i12 = i3 >>> 0 < 4 >>> 0 ? 4 : i3;
   if (i12 >>> 0 > 268435456 >>> 0) {
    _WTFCrash();
    return 0;
   }
   i10 = i6 | 0;
   i11 = (i12 << 3) + 8 | 0;
   i14 = i1 + 19600 | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   do {
    if (i16 >>> 0 < i11 >>> 0) {
     __ZN3JSC11CopiedSpace19tryAllocateSlowCaseEjPPv(i6, i1 + 19596 | 0, i11, i5);
     if ((HEAP8[i10] & 1) == 0) {
      _WTFCrash();
      return 0;
     } else {
      i17 = HEAP32[i5 >> 2] | 0;
      break;
     }
    } else {
     HEAP32[i14 >> 2] = i16 - i11;
     i18 = (HEAP32[i1 + 19604 >> 2] | 0) + (-i16 | 0) | 0;
     HEAP32[i5 >> 2] = i18;
     HEAP8[i10] = 1;
     i17 = i18;
    }
   } while (0);
   i10 = i17;
   i16 = i17 + 8 | 0;
   i11 = i16;
   HEAP32[i10 >> 2] = i3;
   HEAP32[i10 + 4 >> 2] = i12;
   if ((HEAP8[i9] & 30) != 22 | (i12 | 0) == 0) {
    i15 = i11;
    break;
   }
   i10 = i16;
   i16 = 0;
   while (1) {
    HEAPF64[i10 + (i16 << 3) >> 3] = +NaN;
    i14 = i16 + 1 | 0;
    if (i14 >>> 0 < i12 >>> 0) {
     i16 = i14;
    } else {
     i15 = i11;
     break;
    }
   }
  }
 } while (0);
 i9 = i1 + 13176 | 0;
 i1 = i9 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i19 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i9, 8) | 0;
  i20 = i19;
  i21 = i2 | 0;
  i22 = i19;
  HEAP32[i22 >> 2] = i21;
  i23 = i19 + 4 | 0;
  i24 = i23;
  HEAP32[i24 >> 2] = i15;
  STACKTOP = i4;
  return i20 | 0;
 } else {
  HEAP32[i1 >> 2] = HEAP32[i3 >> 2];
  i19 = i3;
  i20 = i19;
  i21 = i2 | 0;
  i22 = i19;
  HEAP32[i22 >> 2] = i21;
  i23 = i19 + 4 | 0;
  i24 = i23;
  HEAP32[i24 >> 2] = i15;
  STACKTOP = i4;
  return i20 | 0;
 }
 return 0;
}
function __ZN3WTF9HashTableIPN3JSC8JSObjectENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E6expandEPS5_(i1, i2) {
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
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 3) | 0;
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
  i5 = i7 + (i11 << 3) | 0;
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
   i19 = i16 + (i14 << 3) | 0;
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
      i34 = i16 + (i33 << 3) | 0;
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
   i16 = i5;
   i17 = i30;
   i13 = HEAP32[i16 + 4 >> 2] | 0;
   HEAP32[i17 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i17 + 4 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i30 : i12;
  }
  i13 = i11 + 1 | 0;
  if ((i13 | 0) == (i6 | 0)) {
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
function __ZN3WTF9HashTableIPN3JSC11ArrayBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPN3JSC11ArrayBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i2, 0) | 0;
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
  i13 = __ZN3WTF9HashTableIPN3JSC11ArrayBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i2, i25) | 0;
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
function __ZN3WTF9HashTableIPNS_10StringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_SD_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPNS_10StringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E6expandEPS2_(i2, 0) | 0;
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
  i13 = __ZN3WTF9HashTableIPNS_10StringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E6expandEPS2_(i2, i25) | 0;
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
function __ZN7WebCore17CloneDeserializerC2EPN3JSC9ExecStateEPNS1_14JSGlobalObjectEPN3WTF6VectorINS6_6RefPtrINS_11MessagePortEEELj1ENS6_15CrashOnOverflowEEEPNS7_INS1_19ArrayBufferContentsELj0ESB_EERKNS7_IhLj0ESB_EE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 HEAP32[i1 >> 2] = i2;
 i2 = i1 + 4 | 0;
 HEAP8[i2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 8;
 HEAP32[i1 + 80 >> 2] = i1 + 16;
 HEAP32[i1 + 84 >> 2] = 0;
 HEAP32[i1 + 88 >> 2] = i3;
 i7 = i1 + 92 | 0;
 if ((HEAP32[(i3 & -65536) + 1048 >> 2] | 0) == 2) {
  i8 = i3 + 8 | 0;
 } else {
  i8 = (HEAP32[i3 >> 2] | 0) + 32 | 0;
 }
 i3 = HEAP32[i8 >> 2] | 0;
 L5 : do {
  if ((i3 | 0) == 0) {
   i9 = 0;
  } else {
   i8 = i3;
   while (1) {
    if ((i8 | 0) == (__ZN7WebCore17JSDOMGlobalObject6s_infoE | 0)) {
     i9 = 1;
     break L5;
    }
    i10 = HEAP32[i8 + 4 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i9 = 0;
     break;
    } else {
     i8 = i10;
    }
   }
  }
 } while (0);
 HEAP8[i7] = i9;
 i9 = i1 + 96 | 0;
 i7 = i6 | 0;
 HEAP32[i9 >> 2] = HEAP32[i7 >> 2];
 i3 = i1 + 100 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i7 >> 2] | 0) + (HEAP32[i6 + 8 >> 2] | 0);
 i6 = i1 + 104 | 0;
 HEAP32[i6 >> 2] = -1;
 HEAP32[i1 + 108 >> 2] = 0;
 HEAP32[i1 + 112 >> 2] = 0;
 HEAP32[i1 + 116 >> 2] = 0;
 HEAP32[i1 + 120 >> 2] = i4;
 HEAP32[i1 + 124 >> 2] = i5;
 if ((i5 | 0) == 0) {
  i11 = 0;
 } else {
  i11 = HEAP32[i5 + 8 >> 2] | 0;
 }
 i5 = i1 + 140 | 0;
 i4 = i1 + 128 | 0;
 HEAP32[i4 >> 2] = i5;
 i7 = i1 + 132 | 0;
 HEAP32[i7 >> 2] = 1;
 i8 = i1 + 136 | 0;
 HEAP32[i8 >> 2] = i11;
 do {
  if (i11 >>> 0 > 1 >>> 0) {
   if (i11 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   } else {
    i1 = __ZN3WTF18fastMallocGoodSizeEj(i11 << 2) | 0;
    HEAP32[i7 >> 2] = i1 >>> 2;
    i10 = __ZN3WTF10fastMallocEj(i1) | 0;
    HEAP32[i4 >> 2] = i10;
    i12 = i10;
    break;
   }
  } else {
   i12 = i5;
  }
 } while (0);
 if ((i12 | 0) != 0) {
  _memset(i12 | 0, 0, HEAP32[i8 >> 2] << 2 | 0) | 0;
 }
 do {
  if ((HEAP8[i2] & 1) == 0) {
   i8 = HEAP32[i9 >> 2] | 0;
   if (i8 >>> 0 > ((HEAP32[i3 >> 2] | 0) - 4 | 0) >>> 0) {
    break;
   }
   HEAP32[i6 >> 2] = 0;
   i12 = i8 + 1 | 0;
   HEAP32[i9 >> 2] = i12;
   i5 = HEAPU8[i8] | 0;
   HEAP32[i6 >> 2] = i5;
   i4 = i8 + 2 | 0;
   HEAP32[i9 >> 2] = i4;
   i7 = (HEAPU8[i12] | 0) << 8 | i5;
   HEAP32[i6 >> 2] = i7;
   i5 = i8 + 3 | 0;
   HEAP32[i9 >> 2] = i5;
   i12 = (HEAPU8[i4] | 0) << 16 | i7;
   HEAP32[i6 >> 2] = i12;
   HEAP32[i9 >> 2] = i8 + 4;
   i13 = (HEAPU8[i5] | 0) << 24 | i12;
   HEAP32[i6 >> 2] = i13;
   return;
  }
 } while (0);
 HEAP8[i2] = 1;
 i13 = -1;
 HEAP32[i6 >> 2] = i13;
 return;
}
function __ZN7WebCore15CloneSerializer5writeERKN3JSC10IdentifierE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 i8 = i1 + 168 | 0;
 HEAP32[i6 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF9HashTableINS_6RefPtrINS_10StringImplEEENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EEN3JSC17IdentifierRepHashENS_22KeyValuePairHashTraitsINS_10HashTraitsIS3_EENSB_IjEEEESC_E3addINS_17HashMapTranslatorISE_S9_EERPS2_iEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SE_SC_EEEEOT0_OT1_(i5, i1 + 156 | 0, i4, i6);
 if ((HEAP8[i5 + 8 | 0] & 1) == 0) {
  i6 = i1 + 88 | 0;
  __ZN7WebCoreL17writeLittleEndianIjEEvRN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEET_(HEAP32[i6 >> 2] | 0, -2);
  i4 = HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] | 0;
  i5 = HEAP32[i8 >> 2] | 0;
  if ((i5 | 0) < 256) {
   __ZN7WebCore15CloneSerializer5writeEh(i1, i4 & 255);
   STACKTOP = i3;
   return;
  }
  if ((i5 | 0) < 65536) {
   __ZN7WebCore15CloneSerializer5writeEt(i1, i4 & 65535);
   STACKTOP = i3;
   return;
  } else {
   __ZN7WebCoreL17writeLittleEndianIjEEvRN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEET_(HEAP32[i6 >> 2] | 0, i4);
   STACKTOP = i3;
   return;
  }
 }
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i6 = i1 + 88 | 0;
   i9 = 0;
   i10 = i6;
   i11 = i6;
  } else {
   i6 = HEAP32[i4 + 4 >> 2] | 0;
   if (i6 >>> 0 > 4294967293 >>> 0) {
    HEAP8[i1 + 4 | 0] = 1;
    STACKTOP = i3;
    return;
   }
   if (i6 >>> 0 <= 2147483645 >>> 0) {
    i5 = i1 + 88 | 0;
    i9 = i6;
    i10 = i5;
    i11 = i5;
    break;
   }
   HEAP8[i1 + 4 | 0] = 1;
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN7WebCoreL17writeLittleEndianIjEEvRN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEET_(HEAP32[i11 >> 2] | 0, i9);
 i9 = HEAP32[i10 >> 2] | 0;
 i10 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i10 | 0) == 0) {
   i12 = 0;
   i13 = 0;
  } else {
   if ((HEAP32[i10 + 16 >> 2] & 32 | 0) == 0) {
    i14 = HEAP32[i10 + 8 >> 2] | 0;
    i15 = i10;
   } else {
    i11 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i10) | 0;
    i14 = i11;
    i15 = HEAP32[i7 >> 2] | 0;
   }
   if ((i15 | 0) == 0) {
    i12 = i14;
    i13 = 0;
    break;
   }
   i11 = HEAP32[i15 + 4 >> 2] | 0;
   if ((i11 | 0) >= 0) {
    i12 = i14;
    i13 = i11;
    break;
   }
   HEAP8[i1 + 4 | 0] = 1;
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN3WTF6VectorIhLj0ENS_15CrashOnOverflowEE6appendIhEEvPKT_j(i9, i12, i13 << 1);
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableIPN3JSC11ArrayBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i1, i2) {
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
function __ZN3WTF9HashTableIPNS_10StringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E6expandEPS2_(i1, i2) {
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
function __ZN7WebCore12cacheWrapperIN3JSC11ArrayBufferENS1_13JSArrayBufferEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 i10 = (HEAP32[(HEAP32[i1 + 68 >> 2] | 0) + 24768 >> 2] | 0) + 8 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i11 = 0;
  } else {
   i12 = i3;
   i13 = (i12 & -65536) + 1060 | 0;
   i14 = i13 | 0;
   i15 = HEAP32[i14 >> 2] | 0;
   if ((i15 | 0) == 0) {
    i16 = __ZN3JSC7WeakSet13findAllocatorEv(i13) | 0;
   } else {
    i16 = i15;
   }
   HEAP32[i14 >> 2] = HEAP32[i16 >> 2];
   i14 = i16;
   HEAP32[i14 >> 2] = i12;
   HEAP32[i14 + 4 >> 2] = -5;
   HEAP32[i16 + 8 >> 2] = i10;
   HEAP32[i16 + 12 >> 2] = i1;
   i11 = i16;
  }
  i16 = i5 | 0;
  i5 = i2 + 20 | 0;
  i14 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i11;
  HEAP32[i16 >> 2] = i14;
  if ((i14 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i16);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i17 = 0;
 } else {
  i16 = i3;
  i3 = (i16 & -65536) + 1060 | 0;
  i14 = i3 | 0;
  i11 = HEAP32[i14 >> 2] | 0;
  if ((i11 | 0) == 0) {
   i18 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i18 = i11;
  }
  HEAP32[i14 >> 2] = HEAP32[i18 >> 2];
  i14 = i18;
  HEAP32[i14 >> 2] = i16;
  HEAP32[i14 + 4 >> 2] = -5;
  HEAP32[i18 + 8 >> 2] = i10;
  HEAP32[i18 + 12 >> 2] = i1;
  i17 = i18;
 }
 HEAP32[i2 >> 2] = i17;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i7, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i7 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i7 >> 2] | 0;
   i8 = i6 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i17 = i9 + 4 | 0;
   i9 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = i1;
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
function __ZN7WebCore21SerializedScriptValue23deserializeForInspectorEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 168 | 0;
 i5 = i4 | 0;
 i6 = i4 + 144 | 0;
 i7 = i4 + 160 | 0;
 i8 = i3 + 16 | 0;
 i9 = HEAP32[(HEAP32[HEAP32[i8 >> 2] >> 2] | 0) + 4 >> 2] | 0;
 i10 = HEAP32[i2 + 16 >> 2] | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
  i11 = i6 | 0;
  HEAP32[i11 >> 2] = 0;
  HEAP32[i11 + 4 >> 2] = -3;
  HEAP32[i6 + 8 >> 2] = 6;
  i12 = 6;
  i13 = -3;
  i14 = 0;
 } else {
  __ZN7WebCore17CloneDeserializerC2EPN3JSC9ExecStateEPNS1_14JSGlobalObjectEPN3WTF6VectorINS6_6RefPtrINS_11MessagePortEEELj1ENS6_15CrashOnOverflowEEEPNS7_INS1_19ArrayBufferContentsELj0ESB_EERKNS7_IhLj0ESB_EE(i5, i3, i9, 0, i10, i2 + 4 | 0);
  if ((HEAP32[i5 + 104 >> 2] | 0) >>> 0 < 6 >>> 0) {
   __ZN7WebCore17CloneDeserializer11deserializeEv(i6, i5);
   i2 = i6 | 0;
   i15 = HEAP32[i6 + 8 >> 2] | 0;
   i16 = HEAP32[i2 + 4 >> 2] | 0;
   i17 = HEAP32[i2 >> 2] | 0;
  } else {
   i2 = i6 | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i2 + 4 >> 2] = -6;
   HEAP32[i6 + 8 >> 2] = 3;
   i15 = 3;
   i16 = -6;
   i17 = 0;
  }
  __ZN7WebCore17CloneDeserializerD2Ev(i5);
  i12 = i15;
  i13 = i16;
  i14 = i17;
 }
 __ZN7WebCore21SerializedScriptValue40maybeThrowExceptionIfSerializationFailedEPN3JSC9ExecStateENS_23SerializationReturnCodeE(i3, i12);
 i12 = HEAP32[(HEAP32[i8 >> 2] & -65536) + 1076 >> 2] | 0;
 HEAP32[i1 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
 if ((HEAP32[i12 + 20444 >> 2] | 0) != 0) {
  _WTFCrash();
 }
 i8 = i12 + 20440 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  __ZN3JSC9HandleSet4growEv(i12 + 20360 | 0);
  i18 = HEAP32[i8 >> 2] | 0;
 } else {
  i18 = i3;
 }
 i3 = i18 + 12 | 0;
 HEAP32[i8 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i18 + 4 >> 2] = -6;
 HEAP32[i18 >> 2] = 0;
 i8 = i18 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i3 >> 2] = 0;
 i17 = i12 + 20420 | 0;
 i16 = HEAP32[i17 >> 2] | 0;
 HEAP32[i8 >> 2] = i12 + 20408;
 HEAP32[i3 >> 2] = i16;
 HEAP32[i17 >> 2] = i18;
 HEAP32[i16 + 8 >> 2] = i18;
 i16 = i18 | 0;
 HEAP32[i1 + 4 >> 2] = i16;
 i1 = i7 | 0;
 HEAP32[i1 >> 2] = i14;
 HEAP32[i1 + 4 >> 2] = i13;
 __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i18 & -4096) + 12 >> 2] | 0, i16, i7);
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 i16 = i18 | 0;
 HEAP32[i16 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i16 + 4 >> 2] = i7;
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableIPN3JSC20MarkedArgumentBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6removeEPS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 HEAP32[i2 >> 2] = -1;
 i2 = i1 + 16 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i3 = i1 + 12 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i1 + 4 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if (!((i4 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  return;
 }
 i4 = (i5 | 0) / 2 & -1;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = i4 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i4 << 2) | 0;
 if ((i5 | 0) != 0) {
  i4 = 0;
  while (1) {
   i1 = HEAP32[i7 + (i4 << 2) >> 2] | 0;
   i8 = i1;
   if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
    i9 = HEAP32[i6 >> 2] | 0;
    i10 = HEAP32[i3 >> 2] | 0;
    i11 = i8 + ~(i8 << 15) | 0;
    i8 = (i11 >>> 10 ^ i11) * 9 & -1;
    i11 = i8 >>> 6 ^ i8;
    i8 = i11 + ~(i11 << 11) | 0;
    i11 = i8 >>> 16 ^ i8;
    i8 = i10 & i11;
    i12 = i9 + (i8 << 2) | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    L9 : do {
     if ((i13 | 0) == 0) {
      i14 = 0;
      i15 = i12;
      i16 = 6;
     } else {
      i17 = (i11 >>> 23) + ~i11 | 0;
      i18 = i17 << 12 ^ i17;
      i17 = i18 >>> 7 ^ i18;
      i18 = i17 << 2 ^ i17;
      i17 = i18 >>> 20 ^ i18 | 1;
      i18 = 0;
      i19 = 0;
      i20 = i8;
      i21 = i12;
      i22 = i13;
      while (1) {
       if ((i22 | 0) == (i1 | 0)) {
        i23 = i21;
        break L9;
       }
       i24 = (i22 | 0) == -1 ? i21 : i18;
       i25 = (i19 | 0) == 0 ? i17 : i19;
       i26 = i25 + i20 & i10;
       i27 = i9 + (i26 << 2) | 0;
       i28 = HEAP32[i27 >> 2] | 0;
       if ((i28 | 0) == 0) {
        i14 = i24;
        i15 = i27;
        i16 = 6;
        break;
       } else {
        i18 = i24;
        i19 = i25;
        i20 = i26;
        i21 = i27;
        i22 = i28;
       }
      }
     }
    } while (0);
    if ((i16 | 0) == 6) {
     i16 = 0;
     i23 = (i14 | 0) != 0 ? i14 : i15;
    }
    HEAP32[i23 >> 2] = i1;
   }
   i4 = i4 + 1 | 0;
   if ((i4 | 0) == (i5 | 0)) {
    break;
   }
  }
 }
 HEAP32[i2 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i7);
 return;
}
function __ZN7WebCore21SerializedScriptValue11deserializeEPN3JSC9ExecStateEPS0_NS_22SerializationErrorModeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 168 | 0;
 i6 = i5 | 0;
 i7 = i5 + 144 | 0;
 i8 = i5 + 160 | 0;
 i9 = HEAP32[i2 + 16 >> 2] | 0;
 i10 = HEAP32[(i9 & -65536) + 1076 >> 2] | 0;
 i11 = HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
  i12 = i7 | 0;
  HEAP32[i12 >> 2] = 0;
  HEAP32[i12 + 4 >> 2] = -3;
  HEAP32[i7 + 8 >> 2] = 6;
 } else {
  __ZN7WebCore17CloneDeserializerC2EPN3JSC9ExecStateEPNS1_14JSGlobalObjectEPN3WTF6VectorINS6_6RefPtrINS_11MessagePortEEELj1ENS6_15CrashOnOverflowEEEPNS7_INS1_19ArrayBufferContentsELj0ESB_EERKNS7_IhLj0ESB_EE(i6, i2, i11, 0, i9, i3 + 4 | 0);
  if ((HEAP32[i6 + 104 >> 2] | 0) >>> 0 < 6 >>> 0) {
   __ZN7WebCore17CloneDeserializer11deserializeEv(i7, i6);
  } else {
   i3 = i7 | 0;
   HEAP32[i3 >> 2] = 0;
   HEAP32[i3 + 4 >> 2] = -6;
   HEAP32[i7 + 8 >> 2] = 3;
  }
  __ZN7WebCore17CloneDeserializerD2Ev(i6);
 }
 if ((i4 | 0) == 1) {
  __ZN7WebCore21SerializedScriptValue40maybeThrowExceptionIfSerializationFailedEPN3JSC9ExecStateENS_23SerializationReturnCodeE(i2, HEAP32[i7 + 8 >> 2] | 0);
 }
 i2 = i7 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i1 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
 if ((HEAP32[i10 + 20444 >> 2] | 0) != 0) {
  _WTFCrash();
 }
 i2 = i10 + 20440 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3JSC9HandleSet4growEv(i10 + 20360 | 0);
  i13 = HEAP32[i2 >> 2] | 0;
 } else {
  i13 = i6;
 }
 i6 = i13 + 12 | 0;
 HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i13 + 4 >> 2] = -6;
 HEAP32[i13 >> 2] = 0;
 i2 = i13 + 8 | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i6 >> 2] = 0;
 i3 = i10 + 20420 | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 HEAP32[i2 >> 2] = i10 + 20408;
 HEAP32[i6 >> 2] = i9;
 HEAP32[i3 >> 2] = i13;
 HEAP32[i9 + 8 >> 2] = i13;
 i9 = i13 | 0;
 HEAP32[i1 + 4 >> 2] = i9;
 i1 = i8 | 0;
 HEAP32[i1 >> 2] = i7;
 HEAP32[i1 + 4 >> 2] = i4;
 __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i13 & -4096) + 12 >> 2] | 0, i9, i8);
 i8 = HEAP32[i1 + 4 >> 2] | 0;
 i9 = i13 | 0;
 HEAP32[i9 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i9 + 4 >> 2] = i8;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore15CloneSerializer16serializeBooleanEbRN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN7WebCoreL17writeLittleEndianIjEEvRN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEET_(i2, 5);
 i5 = i1 ? 9 : 8;
 HEAP8[i4] = i5;
 i1 = i2 + 8 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 i7 = i2 + 4 | 0;
 if ((i6 | 0) != (HEAP32[i7 >> 2] | 0)) {
  HEAP8[(HEAP32[i2 >> 2] | 0) + i6 | 0] = i5;
  i8 = HEAP32[i1 >> 2] | 0;
  i9 = i8 + 1 | 0;
  HEAP32[i1 >> 2] = i9;
  STACKTOP = i3;
  return;
 }
 i5 = i6 + 1 | 0;
 i10 = i2 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 do {
  if (i2 >>> 0 > i4 >>> 0) {
   i11 = 5;
  } else {
   if ((i2 + i6 | 0) >>> 0 <= i4 >>> 0) {
    i11 = 5;
    break;
   }
   i12 = i4 - i2 | 0;
   i13 = i5 + (i6 >>> 2) | 0;
   i14 = i13 >>> 0 > 16 >>> 0 ? i13 : 16;
   i13 = i14 >>> 0 > i5 >>> 0 ? i14 : i5;
   do {
    if (i6 >>> 0 < i13 >>> 0) {
     i14 = __ZN3WTF18fastMallocGoodSizeEj(i13) | 0;
     HEAP32[i7 >> 2] = i14;
     i15 = __ZN3WTF10fastMallocEj(i14) | 0;
     HEAP32[i10 >> 2] = i15;
     _memcpy(i15 | 0, i2 | 0, i6) | 0;
     if ((i2 | 0) == 0) {
      break;
     }
     if ((HEAP32[i10 >> 2] | 0) == (i2 | 0)) {
      HEAP32[i10 >> 2] = 0;
      HEAP32[i7 >> 2] = 0;
     }
     __ZN3WTF8fastFreeEPv(i2);
    }
   } while (0);
   i13 = HEAP32[i10 >> 2] | 0;
   i16 = i13 + i12 | 0;
   i17 = i13;
  }
 } while (0);
 if ((i11 | 0) == 5) {
  i11 = i5 + (i6 >>> 2) | 0;
  i13 = i11 >>> 0 > 16 >>> 0 ? i11 : 16;
  i11 = i13 >>> 0 > i5 >>> 0 ? i13 : i5;
  do {
   if (i6 >>> 0 < i11 >>> 0) {
    i5 = __ZN3WTF18fastMallocGoodSizeEj(i11) | 0;
    HEAP32[i7 >> 2] = i5;
    i13 = __ZN3WTF10fastMallocEj(i5) | 0;
    HEAP32[i10 >> 2] = i13;
    _memcpy(i13 | 0, i2 | 0, i6) | 0;
    if ((i2 | 0) == 0) {
     break;
    }
    if ((HEAP32[i10 >> 2] | 0) == (i2 | 0)) {
     HEAP32[i10 >> 2] = 0;
     HEAP32[i7 >> 2] = 0;
    }
    __ZN3WTF8fastFreeEPv(i2);
   }
  } while (0);
  i16 = i4;
  i17 = HEAP32[i10 >> 2] | 0;
 }
 HEAP8[i17 + (HEAP32[i1 >> 2] | 0) | 0] = HEAP8[i16] | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 i9 = i8 + 1 | 0;
 HEAP32[i1 >> 2] = i9;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15CloneSerializer18serializeUndefinedERN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 __ZN7WebCoreL17writeLittleEndianIjEEvRN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEET_(i1, 5);
 HEAP8[i3] = 3;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 + 4 | 0;
 if ((i5 | 0) != (HEAP32[i6 >> 2] | 0)) {
  HEAP8[(HEAP32[i1 >> 2] | 0) + i5 | 0] = 3;
  i7 = HEAP32[i4 >> 2] | 0;
  i8 = i7 + 1 | 0;
  HEAP32[i4 >> 2] = i8;
  STACKTOP = i2;
  return;
 }
 i9 = i5 + 1 | 0;
 i10 = i1 | 0;
 i1 = HEAP32[i10 >> 2] | 0;
 do {
  if (i1 >>> 0 > i3 >>> 0) {
   i11 = 5;
  } else {
   if ((i1 + i5 | 0) >>> 0 <= i3 >>> 0) {
    i11 = 5;
    break;
   }
   i12 = i3 - i1 | 0;
   i13 = i9 + (i5 >>> 2) | 0;
   i14 = i13 >>> 0 > 16 >>> 0 ? i13 : 16;
   i13 = i14 >>> 0 > i9 >>> 0 ? i14 : i9;
   do {
    if (i5 >>> 0 < i13 >>> 0) {
     i14 = __ZN3WTF18fastMallocGoodSizeEj(i13) | 0;
     HEAP32[i6 >> 2] = i14;
     i15 = __ZN3WTF10fastMallocEj(i14) | 0;
     HEAP32[i10 >> 2] = i15;
     _memcpy(i15 | 0, i1 | 0, i5) | 0;
     if ((i1 | 0) == 0) {
      break;
     }
     if ((HEAP32[i10 >> 2] | 0) == (i1 | 0)) {
      HEAP32[i10 >> 2] = 0;
      HEAP32[i6 >> 2] = 0;
     }
     __ZN3WTF8fastFreeEPv(i1);
    }
   } while (0);
   i13 = HEAP32[i10 >> 2] | 0;
   i16 = i13 + i12 | 0;
   i17 = i13;
  }
 } while (0);
 if ((i11 | 0) == 5) {
  i11 = i9 + (i5 >>> 2) | 0;
  i13 = i11 >>> 0 > 16 >>> 0 ? i11 : 16;
  i11 = i13 >>> 0 > i9 >>> 0 ? i13 : i9;
  do {
   if (i5 >>> 0 < i11 >>> 0) {
    i9 = __ZN3WTF18fastMallocGoodSizeEj(i11) | 0;
    HEAP32[i6 >> 2] = i9;
    i13 = __ZN3WTF10fastMallocEj(i9) | 0;
    HEAP32[i10 >> 2] = i13;
    _memcpy(i13 | 0, i1 | 0, i5) | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    if ((HEAP32[i10 >> 2] | 0) == (i1 | 0)) {
     HEAP32[i10 >> 2] = 0;
     HEAP32[i6 >> 2] = 0;
    }
    __ZN3WTF8fastFreeEPv(i1);
   }
  } while (0);
  i16 = i3;
  i17 = HEAP32[i10 >> 2] | 0;
 }
 HEAP8[i17 + (HEAP32[i4 >> 2] | 0) | 0] = HEAP8[i16] | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 i8 = i7 + 1 | 0;
 HEAP32[i4 >> 2] = i8;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore19WebCoreJSClientData12getAllWorldsERN3WTF6VectorINS1_3RefINS_15DOMWrapperWorldEEELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = i1 + 24 | 0;
 i4 = i1 + 36 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 L1 : do {
  if ((i5 | 0) == 0) {
   i6 = HEAP32[i3 >> 2] | 0;
   i7 = HEAP32[i1 + 28 >> 2] | 0;
   i8 = i6 + (i7 << 2) | 0;
   i9 = i8;
   i10 = i8;
   i11 = i6;
   i12 = i7;
  } else {
   if (i5 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
   HEAP32[i2 + 4 >> 2] = i7 >>> 2;
   HEAP32[i2 >> 2] = __ZN3WTF10fastMallocEj(i7) | 0;
   i7 = HEAP32[i3 >> 2] | 0;
   i6 = HEAP32[i1 + 28 >> 2] | 0;
   i8 = i7 + (i6 << 2) | 0;
   if ((HEAP32[i4 >> 2] | 0) == 0) {
    i9 = i8;
    i10 = i8;
    i11 = i7;
    i12 = i6;
    break;
   }
   if ((i6 | 0) == 0) {
    i9 = i7;
    i10 = i8;
    i11 = i7;
    i12 = 0;
    break;
   } else {
    i13 = i7;
   }
   while (1) {
    i14 = HEAP32[i13 >> 2] | 0;
    if (!((i14 | 0) == (-1 | 0) | (i14 | 0) == 0)) {
     i9 = i13;
     i10 = i8;
     i11 = i7;
     i12 = i6;
     break L1;
    }
    i14 = i13 + 4 | 0;
    if ((i14 | 0) == (i8 | 0)) {
     i9 = i8;
     i10 = i8;
     i11 = i7;
     i12 = i6;
     break;
    } else {
     i13 = i14;
    }
   }
  }
 } while (0);
 i13 = i11 + (i12 << 2) | 0;
 if ((i9 | 0) == (i13 | 0)) {
  return;
 }
 i12 = i2 | 0;
 i11 = i2 + 8 | 0;
 i2 = i9;
 i9 = HEAP32[i11 >> 2] | 0;
 while (1) {
  i4 = HEAP32[i2 >> 2] | 0;
  HEAP32[(HEAP32[i12 >> 2] | 0) + (i9 << 2) >> 2] = i4;
  i1 = i4 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
  i1 = (HEAP32[i11 >> 2] | 0) + 1 | 0;
  HEAP32[i11 >> 2] = i1;
  i4 = i2 + 4 | 0;
  L17 : do {
   if ((i4 | 0) == (i10 | 0)) {
    i15 = i10;
   } else {
    i3 = i4;
    while (1) {
     i5 = HEAP32[i3 >> 2] | 0;
     if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
      i15 = i3;
      break L17;
     }
     i5 = i3 + 4 | 0;
     if ((i5 | 0) == (i10 | 0)) {
      i15 = i10;
      break;
     } else {
      i3 = i5;
     }
    }
   }
  } while (0);
  if ((i15 | 0) == (i13 | 0)) {
   break;
  } else {
   i2 = i15;
   i9 = i1;
  }
 }
 return;
}
function __ZN7WebCore17CloneDeserializer17deserializeStringERKN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i4 >> 2] = i6;
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i6 + i7 | 0;
 i8 = i7 - 4 | 0;
 do {
  if ((i8 | 0) >= 0) {
   i9 = HEAPU8[i6 + 1 | 0] << 8 | HEAPU8[i6] | HEAPU8[i6 + 2 | 0] << 16;
   i10 = i6 + 4 | 0;
   HEAP32[i4 >> 2] = i10;
   if ((i9 | HEAPU8[i6 + 3 | 0] << 24) >>> 0 > 5 >>> 0) {
    break;
   }
   do {
    if ((i7 - 1 | 0) >= 4) {
     i9 = i6 + 5 | 0;
     HEAP32[i4 >> 2] = i9;
     if ((HEAP8[i10] | 0) != 16) {
      break;
     }
     do {
      if ((i8 | 0) >= 5) {
       i11 = HEAPU8[i6 + 6 | 0] << 8 | HEAPU8[i9] | HEAPU8[i6 + 7 | 0] << 16;
       HEAP32[i4 >> 2] = i6 + 9;
       i12 = i11 | HEAPU8[i6 + 8 | 0] << 24;
       if (i12 >>> 0 > 4294967293 >>> 0) {
        break;
       }
       i11 = i5 | 0;
       HEAP32[i11 >> 2] = 0;
       do {
        if (__ZN7WebCore17CloneDeserializer10readStringERPKhS2_RN3WTF6StringEj(i4, i2, i5, i12) | 0) {
         i13 = HEAP32[i11 >> 2] | 0;
         HEAP32[i1 >> 2] = i13;
         if ((i13 | 0) == 0) {
          STACKTOP = i3;
          return;
         } else {
          i14 = i13 | 0;
          HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
          i15 = i13;
          break;
         }
        } else {
         HEAP32[i1 >> 2] = 0;
         i13 = HEAP32[i11 >> 2] | 0;
         if ((i13 | 0) != 0) {
          i15 = i13;
          break;
         }
         STACKTOP = i3;
         return;
        }
       } while (0);
       i11 = i15 | 0;
       i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
       if ((i12 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i15);
        STACKTOP = i3;
        return;
       } else {
        HEAP32[i11 >> 2] = i12;
        STACKTOP = i3;
        return;
       }
      }
     } while (0);
     HEAP32[i1 >> 2] = 0;
     STACKTOP = i3;
     return;
    }
   } while (0);
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i3;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15CloneSerializer11getPropertyEPN3JSC8JSObjectERKNS1_10IdentifierE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 48 | 0;
 i9 = (i3 | 0) == 0;
 i10 = i3;
 i11 = i7 + 16 | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i7 + 20 >> 2] = -1;
 i12 = i7 + 24 | 0;
 HEAP32[i12 >> 2] = (i9 ? 0 : 0) | i10;
 HEAP32[i12 + 4 >> 2] = i9 ? -6 : -5;
 i9 = HEAP32[i3 >> 2] | 0;
 i13 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   if ((i13 | 0) == (HEAP32[i13 >> 2] | 0)) {
    break;
   }
   _WTFCrash();
  }
 } while (0);
 i13 = HEAP32[(HEAP32[((HEAP32[(i10 & -65536) + 1048 >> 2] | 0) == 2 ? i3 + 8 | 0 : i9 + 32 | 0) >> 2] | 0) + 52 >> 2] | 0;
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 i10 = i4 | 0;
 HEAP32[i8 >> 2] = HEAP32[i10 >> 2];
 if (!(FUNCTION_TABLE_iiiii[i13 & 1](i3, i2, i8, i7) | 0)) {
  HEAP32[i1 + 4 >> 2] = -6;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 i8 = HEAP32[i9 >> 2] | 0;
 i9 = HEAP32[i11 >> 2] | 0;
 if ((i9 | 0) == 1) {
  i11 = i7 + 8 | 0;
  i2 = HEAP32[i11 + 4 >> 2] | 0;
  i3 = i1 | 0;
  HEAP32[i3 >> 2] = HEAP32[i11 >> 2];
  HEAP32[i3 + 4 >> 2] = i2;
  STACKTOP = i5;
  return;
 } else if ((i9 | 0) == 4) {
  i2 = i7 + 8 | 0;
  i3 = HEAP32[i7 + 32 >> 2] | 0;
  i11 = (i3 | 0) == 0;
  i13 = FUNCTION_TABLE_iiiiiii[HEAP32[i2 >> 2] & 1](i8, (i11 ? 0 : 0) | i3, (i11 ? -6 : -5) | 0, HEAP32[i12 >> 2] | 0, HEAP32[i12 + 4 >> 2] | 0, HEAP32[i2 + 4 >> 2] | 0) | 0;
  i2 = i1 | 0;
  HEAP32[i2 >> 2] = i13;
  HEAP32[i2 + 4 >> 2] = tempRet0;
  STACKTOP = i5;
  return;
 } else if ((i9 | 0) == 2) {
  __ZNK3JSC12PropertySlot14functionGetterEPNS_9ExecStateE(i1, i7, i8);
  STACKTOP = i5;
  return;
 } else {
  i9 = HEAP32[i7 + 8 >> 2] | 0;
  i2 = HEAP32[i7 + 32 >> 2] | 0;
  i7 = (i2 | 0) == 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i11 = HEAP32[i12 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = HEAP32[i10 >> 2];
  i10 = FUNCTION_TABLE_iiiiiii[i9 & 1](i8, (i7 ? 0 : 0) | i2, (i7 ? -6 : -5) | 0, i13, i11, i6) | 0;
  i6 = i1 | 0;
  HEAP32[i6 >> 2] = i10;
  HEAP32[i6 + 4 >> 2] = tempRet0;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore15CloneSerializer5writeENS_21ArrayBufferViewSubtagE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 88 >> 2] | 0;
 i1 = i2 & 255;
 HEAP8[i4] = i1;
 i2 = i5 + 8 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i7 = i5 + 4 | 0;
 if ((i6 | 0) != (HEAP32[i7 >> 2] | 0)) {
  HEAP8[(HEAP32[i5 >> 2] | 0) + i6 | 0] = i1;
  i8 = HEAP32[i2 >> 2] | 0;
  i9 = i8 + 1 | 0;
  HEAP32[i2 >> 2] = i9;
  STACKTOP = i3;
  return;
 }
 i1 = i6 + 1 | 0;
 i10 = i5 | 0;
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if (i5 >>> 0 > i4 >>> 0) {
   i11 = 5;
  } else {
   if ((i5 + i6 | 0) >>> 0 <= i4 >>> 0) {
    i11 = 5;
    break;
   }
   i12 = i4 - i5 | 0;
   i13 = i1 + (i6 >>> 2) | 0;
   i14 = i13 >>> 0 > 16 >>> 0 ? i13 : 16;
   i13 = i14 >>> 0 > i1 >>> 0 ? i14 : i1;
   do {
    if (i6 >>> 0 < i13 >>> 0) {
     i14 = __ZN3WTF18fastMallocGoodSizeEj(i13) | 0;
     HEAP32[i7 >> 2] = i14;
     i15 = __ZN3WTF10fastMallocEj(i14) | 0;
     HEAP32[i10 >> 2] = i15;
     _memcpy(i15 | 0, i5 | 0, i6) | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     if ((HEAP32[i10 >> 2] | 0) == (i5 | 0)) {
      HEAP32[i10 >> 2] = 0;
      HEAP32[i7 >> 2] = 0;
     }
     __ZN3WTF8fastFreeEPv(i5);
    }
   } while (0);
   i13 = HEAP32[i10 >> 2] | 0;
   i16 = i13 + i12 | 0;
   i17 = i13;
  }
 } while (0);
 if ((i11 | 0) == 5) {
  i11 = i1 + (i6 >>> 2) | 0;
  i13 = i11 >>> 0 > 16 >>> 0 ? i11 : 16;
  i11 = i13 >>> 0 > i1 >>> 0 ? i13 : i1;
  do {
   if (i6 >>> 0 < i11 >>> 0) {
    i1 = __ZN3WTF18fastMallocGoodSizeEj(i11) | 0;
    HEAP32[i7 >> 2] = i1;
    i13 = __ZN3WTF10fastMallocEj(i1) | 0;
    HEAP32[i10 >> 2] = i13;
    _memcpy(i13 | 0, i5 | 0, i6) | 0;
    if ((i5 | 0) == 0) {
     break;
    }
    if ((HEAP32[i10 >> 2] | 0) == (i5 | 0)) {
     HEAP32[i10 >> 2] = 0;
     HEAP32[i7 >> 2] = 0;
    }
    __ZN3WTF8fastFreeEPv(i5);
   }
  } while (0);
  i16 = i4;
  i17 = HEAP32[i10 >> 2] | 0;
 }
 HEAP8[i17 + (HEAP32[i2 >> 2] | 0) | 0] = HEAP8[i16] | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 i9 = i8 + 1 | 0;
 HEAP32[i2 >> 2] = i9;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15CloneSerializer5writeENS_16SerializationTagE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 88 >> 2] | 0;
 i1 = i2 & 255;
 HEAP8[i4] = i1;
 i2 = i5 + 8 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i7 = i5 + 4 | 0;
 if ((i6 | 0) != (HEAP32[i7 >> 2] | 0)) {
  HEAP8[(HEAP32[i5 >> 2] | 0) + i6 | 0] = i1;
  i8 = HEAP32[i2 >> 2] | 0;
  i9 = i8 + 1 | 0;
  HEAP32[i2 >> 2] = i9;
  STACKTOP = i3;
  return;
 }
 i1 = i6 + 1 | 0;
 i10 = i5 | 0;
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if (i5 >>> 0 > i4 >>> 0) {
   i11 = 5;
  } else {
   if ((i5 + i6 | 0) >>> 0 <= i4 >>> 0) {
    i11 = 5;
    break;
   }
   i12 = i4 - i5 | 0;
   i13 = i1 + (i6 >>> 2) | 0;
   i14 = i13 >>> 0 > 16 >>> 0 ? i13 : 16;
   i13 = i14 >>> 0 > i1 >>> 0 ? i14 : i1;
   do {
    if (i6 >>> 0 < i13 >>> 0) {
     i14 = __ZN3WTF18fastMallocGoodSizeEj(i13) | 0;
     HEAP32[i7 >> 2] = i14;
     i15 = __ZN3WTF10fastMallocEj(i14) | 0;
     HEAP32[i10 >> 2] = i15;
     _memcpy(i15 | 0, i5 | 0, i6) | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     if ((HEAP32[i10 >> 2] | 0) == (i5 | 0)) {
      HEAP32[i10 >> 2] = 0;
      HEAP32[i7 >> 2] = 0;
     }
     __ZN3WTF8fastFreeEPv(i5);
    }
   } while (0);
   i13 = HEAP32[i10 >> 2] | 0;
   i16 = i13 + i12 | 0;
   i17 = i13;
  }
 } while (0);
 if ((i11 | 0) == 5) {
  i11 = i1 + (i6 >>> 2) | 0;
  i13 = i11 >>> 0 > 16 >>> 0 ? i11 : 16;
  i11 = i13 >>> 0 > i1 >>> 0 ? i13 : i1;
  do {
   if (i6 >>> 0 < i11 >>> 0) {
    i1 = __ZN3WTF18fastMallocGoodSizeEj(i11) | 0;
    HEAP32[i7 >> 2] = i1;
    i13 = __ZN3WTF10fastMallocEj(i1) | 0;
    HEAP32[i10 >> 2] = i13;
    _memcpy(i13 | 0, i5 | 0, i6) | 0;
    if ((i5 | 0) == 0) {
     break;
    }
    if ((HEAP32[i10 >> 2] | 0) == (i5 | 0)) {
     HEAP32[i10 >> 2] = 0;
     HEAP32[i7 >> 2] = 0;
    }
    __ZN3WTF8fastFreeEPv(i5);
   }
  } while (0);
  i16 = i4;
  i17 = HEAP32[i10 >> 2] | 0;
 }
 HEAP8[i17 + (HEAP32[i2 >> 2] | 0) | 0] = HEAP8[i16] | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 i9 = i8 + 1 | 0;
 HEAP32[i2 >> 2] = i9;
 STACKTOP = i3;
 return;
}
function __ZN3JSC23JSGenericTypedArrayViewINS_19Uint8ClampedAdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 24 | 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i3 + 16 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = 3;
  } else {
   if ((HEAP32[i8 + 12 >> 2] | 0) == 0) {
    i9 = 3;
    break;
   }
   i10 = i8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i11 = i6 | 0;
   HEAP32[i11 >> 2] = i8;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i12 = i8;
   i13 = i11;
   i14 = 0;
   i15 = HEAP32[i7 >> 2] | 0;
  }
 } while (0);
 if ((i9 | 0) == 3) {
  i9 = i6 | 0;
  HEAP32[i9 >> 2] = 0;
  i12 = 0;
  i13 = i9;
  i14 = 1;
  i15 = i3;
 }
 i3 = HEAP32[i15 + 16 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i16 = 0;
   i17 = 0;
  } else {
   if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
    i18 = 0;
   } else {
    i18 = HEAP32[i15 + 12 >> 2] & 2147483647;
   }
   if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
    i16 = 0;
    i17 = i18;
    break;
   }
   i16 = HEAP32[i15 + 20 >> 2] | 0;
   i17 = i18;
  }
 } while (0);
 __ZN3JSC17JSArrayBufferView19ConstructionContextC1ERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i5, i1, i2, i6, i17, i16);
 i16 = HEAP32[i13 >> 2] | 0;
 if ((i16 | 0) != 0) {
  __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i16 | 0);
 }
 i16 = i1 + 13264 | 0;
 i13 = i16 | 0;
 i17 = HEAP32[i13 >> 2] | 0;
 if ((i17 | 0) == 0) {
  i19 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i16, 20) | 0;
 } else {
  HEAP32[i13 >> 2] = HEAP32[i17 >> 2];
  i19 = i17;
 }
 HEAP32[i19 >> 2] = 0;
 i17 = i19;
 i13 = i19;
 __ZN3JSC17JSArrayBufferViewC2ERNS_2VMERNS0_19ConstructionContextE(i13, i1, i5);
 __ZN3JSC17JSArrayBufferView14finishCreationERNS_2VME(i13, i1);
 if (i14) {
  STACKTOP = i4;
  return i17 | 0;
 }
 __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i12 | 0);
 STACKTOP = i4;
 return i17 | 0;
}
function __ZN3JSC23JSGenericTypedArrayViewINS_14Float64AdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 24 | 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i3 + 16 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = 3;
  } else {
   if ((HEAP32[i8 + 12 >> 2] | 0) == 0) {
    i9 = 3;
    break;
   }
   i10 = i8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i11 = i6 | 0;
   HEAP32[i11 >> 2] = i8;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i12 = i8;
   i13 = i11;
   i14 = 0;
   i15 = HEAP32[i7 >> 2] | 0;
  }
 } while (0);
 if ((i9 | 0) == 3) {
  i9 = i6 | 0;
  HEAP32[i9 >> 2] = 0;
  i12 = 0;
  i13 = i9;
  i14 = 1;
  i15 = i3;
 }
 i3 = HEAP32[i15 + 16 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i16 = 0;
   i17 = 0;
  } else {
   if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
    i18 = 0;
   } else {
    i18 = HEAP32[i15 + 12 >> 2] & 2147483647;
   }
   if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
    i16 = 0;
    i17 = i18;
    break;
   }
   i16 = HEAP32[i15 + 20 >> 2] | 0;
   i17 = i18;
  }
 } while (0);
 __ZN3JSC17JSArrayBufferView19ConstructionContextC1ERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i5, i1, i2, i6, i17, i16);
 i16 = HEAP32[i13 >> 2] | 0;
 if ((i16 | 0) != 0) {
  __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i16 | 0);
 }
 i16 = i1 + 13264 | 0;
 i13 = i16 | 0;
 i17 = HEAP32[i13 >> 2] | 0;
 if ((i17 | 0) == 0) {
  i19 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i16, 20) | 0;
 } else {
  HEAP32[i13 >> 2] = HEAP32[i17 >> 2];
  i19 = i17;
 }
 HEAP32[i19 >> 2] = 0;
 i17 = i19;
 i13 = i19;
 __ZN3JSC17JSArrayBufferViewC2ERNS_2VMERNS0_19ConstructionContextE(i13, i1, i5);
 __ZN3JSC17JSArrayBufferView14finishCreationERNS_2VME(i13, i1);
 if (i14) {
  STACKTOP = i4;
  return i17 | 0;
 }
 __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i12 | 0);
 STACKTOP = i4;
 return i17 | 0;
}
function __ZN3JSC23JSGenericTypedArrayViewINS_14Float32AdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 24 | 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i3 + 16 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = 3;
  } else {
   if ((HEAP32[i8 + 12 >> 2] | 0) == 0) {
    i9 = 3;
    break;
   }
   i10 = i8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i11 = i6 | 0;
   HEAP32[i11 >> 2] = i8;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i12 = i8;
   i13 = i11;
   i14 = 0;
   i15 = HEAP32[i7 >> 2] | 0;
  }
 } while (0);
 if ((i9 | 0) == 3) {
  i9 = i6 | 0;
  HEAP32[i9 >> 2] = 0;
  i12 = 0;
  i13 = i9;
  i14 = 1;
  i15 = i3;
 }
 i3 = HEAP32[i15 + 16 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i16 = 0;
   i17 = 0;
  } else {
   if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
    i18 = 0;
   } else {
    i18 = HEAP32[i15 + 12 >> 2] & 2147483647;
   }
   if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
    i16 = 0;
    i17 = i18;
    break;
   }
   i16 = HEAP32[i15 + 20 >> 2] | 0;
   i17 = i18;
  }
 } while (0);
 __ZN3JSC17JSArrayBufferView19ConstructionContextC1ERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i5, i1, i2, i6, i17, i16);
 i16 = HEAP32[i13 >> 2] | 0;
 if ((i16 | 0) != 0) {
  __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i16 | 0);
 }
 i16 = i1 + 13264 | 0;
 i13 = i16 | 0;
 i17 = HEAP32[i13 >> 2] | 0;
 if ((i17 | 0) == 0) {
  i19 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i16, 20) | 0;
 } else {
  HEAP32[i13 >> 2] = HEAP32[i17 >> 2];
  i19 = i17;
 }
 HEAP32[i19 >> 2] = 0;
 i17 = i19;
 i13 = i19;
 __ZN3JSC17JSArrayBufferViewC2ERNS_2VMERNS0_19ConstructionContextE(i13, i1, i5);
 __ZN3JSC17JSArrayBufferView14finishCreationERNS_2VME(i13, i1);
 if (i14) {
  STACKTOP = i4;
  return i17 | 0;
 }
 __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i12 | 0);
 STACKTOP = i4;
 return i17 | 0;
}
function __ZN3JSC23JSGenericTypedArrayViewINS_13Uint32AdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 24 | 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i3 + 16 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = 3;
  } else {
   if ((HEAP32[i8 + 12 >> 2] | 0) == 0) {
    i9 = 3;
    break;
   }
   i10 = i8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i11 = i6 | 0;
   HEAP32[i11 >> 2] = i8;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i12 = i8;
   i13 = i11;
   i14 = 0;
   i15 = HEAP32[i7 >> 2] | 0;
  }
 } while (0);
 if ((i9 | 0) == 3) {
  i9 = i6 | 0;
  HEAP32[i9 >> 2] = 0;
  i12 = 0;
  i13 = i9;
  i14 = 1;
  i15 = i3;
 }
 i3 = HEAP32[i15 + 16 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i16 = 0;
   i17 = 0;
  } else {
   if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
    i18 = 0;
   } else {
    i18 = HEAP32[i15 + 12 >> 2] & 2147483647;
   }
   if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
    i16 = 0;
    i17 = i18;
    break;
   }
   i16 = HEAP32[i15 + 20 >> 2] | 0;
   i17 = i18;
  }
 } while (0);
 __ZN3JSC17JSArrayBufferView19ConstructionContextC1ERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i5, i1, i2, i6, i17, i16);
 i16 = HEAP32[i13 >> 2] | 0;
 if ((i16 | 0) != 0) {
  __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i16 | 0);
 }
 i16 = i1 + 13264 | 0;
 i13 = i16 | 0;
 i17 = HEAP32[i13 >> 2] | 0;
 if ((i17 | 0) == 0) {
  i19 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i16, 20) | 0;
 } else {
  HEAP32[i13 >> 2] = HEAP32[i17 >> 2];
  i19 = i17;
 }
 HEAP32[i19 >> 2] = 0;
 i17 = i19;
 i13 = i19;
 __ZN3JSC17JSArrayBufferViewC2ERNS_2VMERNS0_19ConstructionContextE(i13, i1, i5);
 __ZN3JSC17JSArrayBufferView14finishCreationERNS_2VME(i13, i1);
 if (i14) {
  STACKTOP = i4;
  return i17 | 0;
 }
 __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i12 | 0);
 STACKTOP = i4;
 return i17 | 0;
}
function __ZN3JSC23JSGenericTypedArrayViewINS_13Uint16AdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 24 | 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i3 + 16 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = 3;
  } else {
   if ((HEAP32[i8 + 12 >> 2] | 0) == 0) {
    i9 = 3;
    break;
   }
   i10 = i8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i11 = i6 | 0;
   HEAP32[i11 >> 2] = i8;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i12 = i8;
   i13 = i11;
   i14 = 0;
   i15 = HEAP32[i7 >> 2] | 0;
  }
 } while (0);
 if ((i9 | 0) == 3) {
  i9 = i6 | 0;
  HEAP32[i9 >> 2] = 0;
  i12 = 0;
  i13 = i9;
  i14 = 1;
  i15 = i3;
 }
 i3 = HEAP32[i15 + 16 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i16 = 0;
   i17 = 0;
  } else {
   if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
    i18 = 0;
   } else {
    i18 = HEAP32[i15 + 12 >> 2] & 2147483647;
   }
   if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
    i16 = 0;
    i17 = i18;
    break;
   }
   i16 = HEAP32[i15 + 20 >> 2] | 0;
   i17 = i18;
  }
 } while (0);
 __ZN3JSC17JSArrayBufferView19ConstructionContextC1ERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i5, i1, i2, i6, i17, i16);
 i16 = HEAP32[i13 >> 2] | 0;
 if ((i16 | 0) != 0) {
  __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i16 | 0);
 }
 i16 = i1 + 13264 | 0;
 i13 = i16 | 0;
 i17 = HEAP32[i13 >> 2] | 0;
 if ((i17 | 0) == 0) {
  i19 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i16, 20) | 0;
 } else {
  HEAP32[i13 >> 2] = HEAP32[i17 >> 2];
  i19 = i17;
 }
 HEAP32[i19 >> 2] = 0;
 i17 = i19;
 i13 = i19;
 __ZN3JSC17JSArrayBufferViewC2ERNS_2VMERNS0_19ConstructionContextE(i13, i1, i5);
 __ZN3JSC17JSArrayBufferView14finishCreationERNS_2VME(i13, i1);
 if (i14) {
  STACKTOP = i4;
  return i17 | 0;
 }
 __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i12 | 0);
 STACKTOP = i4;
 return i17 | 0;
}
function __ZN3JSC23JSGenericTypedArrayViewINS_12Uint8AdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 24 | 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i3 + 16 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = 3;
  } else {
   if ((HEAP32[i8 + 12 >> 2] | 0) == 0) {
    i9 = 3;
    break;
   }
   i10 = i8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i11 = i6 | 0;
   HEAP32[i11 >> 2] = i8;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i12 = i8;
   i13 = i11;
   i14 = 0;
   i15 = HEAP32[i7 >> 2] | 0;
  }
 } while (0);
 if ((i9 | 0) == 3) {
  i9 = i6 | 0;
  HEAP32[i9 >> 2] = 0;
  i12 = 0;
  i13 = i9;
  i14 = 1;
  i15 = i3;
 }
 i3 = HEAP32[i15 + 16 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i16 = 0;
   i17 = 0;
  } else {
   if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
    i18 = 0;
   } else {
    i18 = HEAP32[i15 + 12 >> 2] & 2147483647;
   }
   if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
    i16 = 0;
    i17 = i18;
    break;
   }
   i16 = HEAP32[i15 + 20 >> 2] | 0;
   i17 = i18;
  }
 } while (0);
 __ZN3JSC17JSArrayBufferView19ConstructionContextC1ERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i5, i1, i2, i6, i17, i16);
 i16 = HEAP32[i13 >> 2] | 0;
 if ((i16 | 0) != 0) {
  __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i16 | 0);
 }
 i16 = i1 + 13264 | 0;
 i13 = i16 | 0;
 i17 = HEAP32[i13 >> 2] | 0;
 if ((i17 | 0) == 0) {
  i19 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i16, 20) | 0;
 } else {
  HEAP32[i13 >> 2] = HEAP32[i17 >> 2];
  i19 = i17;
 }
 HEAP32[i19 >> 2] = 0;
 i17 = i19;
 i13 = i19;
 __ZN3JSC17JSArrayBufferViewC2ERNS_2VMERNS0_19ConstructionContextE(i13, i1, i5);
 __ZN3JSC17JSArrayBufferView14finishCreationERNS_2VME(i13, i1);
 if (i14) {
  STACKTOP = i4;
  return i17 | 0;
 }
 __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i12 | 0);
 STACKTOP = i4;
 return i17 | 0;
}
function __ZN3JSC23JSGenericTypedArrayViewINS_12Int32AdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 24 | 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i3 + 16 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = 3;
  } else {
   if ((HEAP32[i8 + 12 >> 2] | 0) == 0) {
    i9 = 3;
    break;
   }
   i10 = i8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i11 = i6 | 0;
   HEAP32[i11 >> 2] = i8;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i12 = i8;
   i13 = i11;
   i14 = 0;
   i15 = HEAP32[i7 >> 2] | 0;
  }
 } while (0);
 if ((i9 | 0) == 3) {
  i9 = i6 | 0;
  HEAP32[i9 >> 2] = 0;
  i12 = 0;
  i13 = i9;
  i14 = 1;
  i15 = i3;
 }
 i3 = HEAP32[i15 + 16 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i16 = 0;
   i17 = 0;
  } else {
   if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
    i18 = 0;
   } else {
    i18 = HEAP32[i15 + 12 >> 2] & 2147483647;
   }
   if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
    i16 = 0;
    i17 = i18;
    break;
   }
   i16 = HEAP32[i15 + 20 >> 2] | 0;
   i17 = i18;
  }
 } while (0);
 __ZN3JSC17JSArrayBufferView19ConstructionContextC1ERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i5, i1, i2, i6, i17, i16);
 i16 = HEAP32[i13 >> 2] | 0;
 if ((i16 | 0) != 0) {
  __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i16 | 0);
 }
 i16 = i1 + 13264 | 0;
 i13 = i16 | 0;
 i17 = HEAP32[i13 >> 2] | 0;
 if ((i17 | 0) == 0) {
  i19 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i16, 20) | 0;
 } else {
  HEAP32[i13 >> 2] = HEAP32[i17 >> 2];
  i19 = i17;
 }
 HEAP32[i19 >> 2] = 0;
 i17 = i19;
 i13 = i19;
 __ZN3JSC17JSArrayBufferViewC2ERNS_2VMERNS0_19ConstructionContextE(i13, i1, i5);
 __ZN3JSC17JSArrayBufferView14finishCreationERNS_2VME(i13, i1);
 if (i14) {
  STACKTOP = i4;
  return i17 | 0;
 }
 __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i12 | 0);
 STACKTOP = i4;
 return i17 | 0;
}
function __ZN3JSC23JSGenericTypedArrayViewINS_12Int16AdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 24 | 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i3 + 16 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = 3;
  } else {
   if ((HEAP32[i8 + 12 >> 2] | 0) == 0) {
    i9 = 3;
    break;
   }
   i10 = i8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i11 = i6 | 0;
   HEAP32[i11 >> 2] = i8;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i12 = i8;
   i13 = i11;
   i14 = 0;
   i15 = HEAP32[i7 >> 2] | 0;
  }
 } while (0);
 if ((i9 | 0) == 3) {
  i9 = i6 | 0;
  HEAP32[i9 >> 2] = 0;
  i12 = 0;
  i13 = i9;
  i14 = 1;
  i15 = i3;
 }
 i3 = HEAP32[i15 + 16 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i16 = 0;
   i17 = 0;
  } else {
   if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
    i18 = 0;
   } else {
    i18 = HEAP32[i15 + 12 >> 2] & 2147483647;
   }
   if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
    i16 = 0;
    i17 = i18;
    break;
   }
   i16 = HEAP32[i15 + 20 >> 2] | 0;
   i17 = i18;
  }
 } while (0);
 __ZN3JSC17JSArrayBufferView19ConstructionContextC1ERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i5, i1, i2, i6, i17, i16);
 i16 = HEAP32[i13 >> 2] | 0;
 if ((i16 | 0) != 0) {
  __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i16 | 0);
 }
 i16 = i1 + 13264 | 0;
 i13 = i16 | 0;
 i17 = HEAP32[i13 >> 2] | 0;
 if ((i17 | 0) == 0) {
  i19 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i16, 20) | 0;
 } else {
  HEAP32[i13 >> 2] = HEAP32[i17 >> 2];
  i19 = i17;
 }
 HEAP32[i19 >> 2] = 0;
 i17 = i19;
 i13 = i19;
 __ZN3JSC17JSArrayBufferViewC2ERNS_2VMERNS0_19ConstructionContextE(i13, i1, i5);
 __ZN3JSC17JSArrayBufferView14finishCreationERNS_2VME(i13, i1);
 if (i14) {
  STACKTOP = i4;
  return i17 | 0;
 }
 __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i12 | 0);
 STACKTOP = i4;
 return i17 | 0;
}
function __ZN7WebCore15CloneSerializer5writeEh(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 88 >> 2] | 0;
 HEAP8[i4] = i2;
 i1 = i5 + 8 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 i7 = i5 + 4 | 0;
 if ((i6 | 0) != (HEAP32[i7 >> 2] | 0)) {
  HEAP8[(HEAP32[i5 >> 2] | 0) + i6 | 0] = i2;
  i8 = HEAP32[i1 >> 2] | 0;
  i9 = i8 + 1 | 0;
  HEAP32[i1 >> 2] = i9;
  STACKTOP = i3;
  return;
 }
 i2 = i6 + 1 | 0;
 i10 = i5 | 0;
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if (i5 >>> 0 > i4 >>> 0) {
   i11 = 5;
  } else {
   if ((i5 + i6 | 0) >>> 0 <= i4 >>> 0) {
    i11 = 5;
    break;
   }
   i12 = i4 - i5 | 0;
   i13 = i2 + (i6 >>> 2) | 0;
   i14 = i13 >>> 0 > 16 >>> 0 ? i13 : 16;
   i13 = i14 >>> 0 > i2 >>> 0 ? i14 : i2;
   do {
    if (i6 >>> 0 < i13 >>> 0) {
     i14 = __ZN3WTF18fastMallocGoodSizeEj(i13) | 0;
     HEAP32[i7 >> 2] = i14;
     i15 = __ZN3WTF10fastMallocEj(i14) | 0;
     HEAP32[i10 >> 2] = i15;
     _memcpy(i15 | 0, i5 | 0, i6) | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     if ((HEAP32[i10 >> 2] | 0) == (i5 | 0)) {
      HEAP32[i10 >> 2] = 0;
      HEAP32[i7 >> 2] = 0;
     }
     __ZN3WTF8fastFreeEPv(i5);
    }
   } while (0);
   i13 = HEAP32[i10 >> 2] | 0;
   i16 = i13 + i12 | 0;
   i17 = i13;
  }
 } while (0);
 if ((i11 | 0) == 5) {
  i11 = i2 + (i6 >>> 2) | 0;
  i13 = i11 >>> 0 > 16 >>> 0 ? i11 : 16;
  i11 = i13 >>> 0 > i2 >>> 0 ? i13 : i2;
  do {
   if (i6 >>> 0 < i11 >>> 0) {
    i2 = __ZN3WTF18fastMallocGoodSizeEj(i11) | 0;
    HEAP32[i7 >> 2] = i2;
    i13 = __ZN3WTF10fastMallocEj(i2) | 0;
    HEAP32[i10 >> 2] = i13;
    _memcpy(i13 | 0, i5 | 0, i6) | 0;
    if ((i5 | 0) == 0) {
     break;
    }
    if ((HEAP32[i10 >> 2] | 0) == (i5 | 0)) {
     HEAP32[i10 >> 2] = 0;
     HEAP32[i7 >> 2] = 0;
    }
    __ZN3WTF8fastFreeEPv(i5);
   }
  } while (0);
  i16 = i4;
  i17 = HEAP32[i10 >> 2] | 0;
 }
 HEAP8[i17 + (HEAP32[i1 >> 2] | 0) | 0] = HEAP8[i16] | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 i9 = i8 + 1 | 0;
 HEAP32[i1 >> 2] = i9;
 STACKTOP = i3;
 return;
}
function __ZN3JSC23JSGenericTypedArrayViewINS_11Int8AdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 24 | 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i3 + 16 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = 3;
  } else {
   if ((HEAP32[i8 + 12 >> 2] | 0) == 0) {
    i9 = 3;
    break;
   }
   i10 = i8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i11 = i6 | 0;
   HEAP32[i11 >> 2] = i8;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i12 = i8;
   i13 = i11;
   i14 = 0;
   i15 = HEAP32[i7 >> 2] | 0;
  }
 } while (0);
 if ((i9 | 0) == 3) {
  i9 = i6 | 0;
  HEAP32[i9 >> 2] = 0;
  i12 = 0;
  i13 = i9;
  i14 = 1;
  i15 = i3;
 }
 i3 = HEAP32[i15 + 16 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i16 = 0;
   i17 = 0;
  } else {
   if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
    i18 = 0;
   } else {
    i18 = HEAP32[i15 + 12 >> 2] & 2147483647;
   }
   if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
    i16 = 0;
    i17 = i18;
    break;
   }
   i16 = HEAP32[i15 + 20 >> 2] | 0;
   i17 = i18;
  }
 } while (0);
 __ZN3JSC17JSArrayBufferView19ConstructionContextC1ERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i5, i1, i2, i6, i17, i16);
 i16 = HEAP32[i13 >> 2] | 0;
 if ((i16 | 0) != 0) {
  __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i16 | 0);
 }
 i16 = i1 + 13264 | 0;
 i13 = i16 | 0;
 i17 = HEAP32[i13 >> 2] | 0;
 if ((i17 | 0) == 0) {
  i19 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i16, 20) | 0;
 } else {
  HEAP32[i13 >> 2] = HEAP32[i17 >> 2];
  i19 = i17;
 }
 HEAP32[i19 >> 2] = 0;
 i17 = i19;
 i13 = i19;
 __ZN3JSC17JSArrayBufferViewC2ERNS_2VMERNS0_19ConstructionContextE(i13, i1, i5);
 __ZN3JSC17JSArrayBufferView14finishCreationERNS_2VME(i13, i1);
 if (i14) {
  STACKTOP = i4;
  return i17 | 0;
 }
 __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i12 | 0);
 STACKTOP = i4;
 return i17 | 0;
}
function __ZN7WebCore17CloneDeserializer16readLittleEndianIyEEbRPKhS3_RT_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 if ((HEAP32[i1 >> 2] | 0) >>> 0 > (i2 - 8 | 0) >>> 0) {
  i4 = 0;
  return i4 | 0;
 }
 HEAP32[i3 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i2 + 1;
 i5 = _i64Add(HEAPU8[i2] | 0, 0, HEAP32[i3 >> 2] | 0, HEAP32[i3 + 4 >> 2] | 0) | 0;
 HEAP32[i3 >> 2] = i5;
 HEAP32[i3 + 4 >> 2] = tempRet0;
 i5 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i5 + 1;
 i2 = HEAPU8[i5] | 0;
 i5 = _i64Add(i2 << 8 | 0 >>> 24, 0 << 8 | i2 >>> 24, HEAP32[i3 >> 2] | 0, HEAP32[i3 + 4 >> 2] | 0) | 0;
 HEAP32[i3 >> 2] = i5;
 HEAP32[i3 + 4 >> 2] = tempRet0;
 i5 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i5 + 1;
 i2 = HEAPU8[i5] | 0;
 i5 = _i64Add(i2 << 16 | 0 >>> 16, 0 << 16 | i2 >>> 16, HEAP32[i3 >> 2] | 0, HEAP32[i3 + 4 >> 2] | 0) | 0;
 HEAP32[i3 >> 2] = i5;
 HEAP32[i3 + 4 >> 2] = tempRet0;
 i5 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i5 + 1;
 i2 = HEAPU8[i5] | 0;
 i5 = _i64Add(i2 << 24 | 0 >>> 8, 0 << 24 | i2 >>> 8, HEAP32[i3 >> 2] | 0, HEAP32[i3 + 4 >> 2] | 0) | 0;
 HEAP32[i3 >> 2] = i5;
 HEAP32[i3 + 4 >> 2] = tempRet0;
 i5 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i5 + 1;
 i2 = _i64Add(0, HEAPU8[i5] | 0, HEAP32[i3 >> 2] | 0, HEAP32[i3 + 4 >> 2] | 0) | 0;
 HEAP32[i3 >> 2] = i2;
 HEAP32[i3 + 4 >> 2] = tempRet0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i2 + 1;
 i5 = _i64Add(0 << 8 | 0 >>> 24, (HEAPU8[i2] | 0) << 8 | 0 >>> 24, HEAP32[i3 >> 2] | 0, HEAP32[i3 + 4 >> 2] | 0) | 0;
 HEAP32[i3 >> 2] = i5;
 HEAP32[i3 + 4 >> 2] = tempRet0;
 i5 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i5 + 1;
 i2 = _i64Add(0 << 16 | 0 >>> 16, (HEAPU8[i5] | 0) << 16 | 0 >>> 16, HEAP32[i3 >> 2] | 0, HEAP32[i3 + 4 >> 2] | 0) | 0;
 HEAP32[i3 >> 2] = i2;
 HEAP32[i3 + 4 >> 2] = tempRet0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i2 + 1;
 i1 = _i64Add(0 << 24 | 0 >>> 8, (HEAPU8[i2] | 0) << 24 | 0 >>> 8, HEAP32[i3 >> 2] | 0, HEAP32[i3 + 4 >> 2] | 0) | 0;
 HEAP32[i3 >> 2] = i1;
 HEAP32[i3 + 4 >> 2] = tempRet0;
 i4 = 1;
 return i4 | 0;
}
function __ZN7WebCore18getExistingWrapperIN3JSC13JSArrayBufferENS1_11ArrayBufferEEENS1_7JSValueEPNS1_9ExecStateEPT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = HEAP32[(HEAP32[(HEAP32[HEAP32[i2 + 16 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0;
 do {
  if ((HEAP8[i4 + 92 | 0] & 1) == 0) {
   i5 = 6;
  } else {
   i2 = HEAP32[i3 + 20 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i5 = 6;
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] & 3 | 0) != 0) {
    i5 = 6;
    break;
   }
   i6 = HEAP32[i2 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i5 = 6;
    break;
   }
   i7 = i6 | 0;
  }
 } while (0);
 L6 : do {
  if ((i5 | 0) == 6) {
   i6 = i3;
   i2 = HEAP32[i4 + 12 >> 2] | 0;
   i8 = HEAP32[i4 + 4 >> 2] | 0;
   i9 = i3;
   i10 = i9 + ~(i9 << 15) | 0;
   i9 = (i10 >>> 10 ^ i10) * 9 & -1;
   i10 = i9 >>> 6 ^ i9;
   i9 = i10 + ~(i10 << 11) | 0;
   i10 = i9 >>> 16 ^ i9;
   if ((i8 | 0) == 0) {
    i7 = 0;
    break;
   }
   i9 = i2 & i10;
   i11 = i8 + (i9 << 3) | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   if ((i12 | 0) == (i6 | 0)) {
    i13 = i11;
   } else {
    i11 = (i10 >>> 23) + ~i10 | 0;
    i10 = i11 << 12 ^ i11;
    i11 = i10 >>> 7 ^ i10;
    i10 = i11 << 2 ^ i11;
    i11 = i10 >>> 20 ^ i10 | 1;
    i10 = 0;
    i14 = i9;
    i9 = i12;
    while (1) {
     if ((i9 | 0) == 0) {
      i7 = 0;
      break L6;
     }
     i12 = (i10 | 0) == 0 ? i11 : i10;
     i15 = i12 + i14 & i2;
     i16 = i8 + (i15 << 3) | 0;
     i17 = HEAP32[i16 >> 2] | 0;
     if ((i17 | 0) == (i6 | 0)) {
      i13 = i16;
      break;
     } else {
      i10 = i12;
      i14 = i15;
      i9 = i17;
     }
    }
   }
   if ((i13 | 0) == 0) {
    i7 = 0;
    break;
   }
   i9 = HEAP32[i13 + 4 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i7 = 0;
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] & 3 | 0) != 0) {
    i7 = 0;
    break;
   }
   i7 = HEAP32[i9 >> 2] | 0;
  }
 } while (0);
 HEAP32[i1 + 4 >> 2] = (i7 | 0) == 0 ? -6 : -5;
 HEAP32[i1 >> 2] = i7;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_iiii + 10;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_iiii + 12;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_iiii + 16;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_iiii + 8;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_iiii + 14;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_iiii + 18;
}
function __ZN7WebCore15CloneSerializer5writeEt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = HEAP32[i1 + 88 >> 2] | 0;
 i1 = i3 + 8 | 0;
 i4 = i3 + 4 | 0;
 i5 = i3 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == (HEAP32[i4 >> 2] | 0)) {
  i6 = i3 + 1 | 0;
  i7 = i6 + (i3 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  i7 = i8 >>> 0 > i6 >>> 0 ? i8 : i6;
  do {
   if (i3 >>> 0 < i7 >>> 0) {
    i6 = HEAP32[i5 >> 2] | 0;
    i8 = __ZN3WTF18fastMallocGoodSizeEj(i7) | 0;
    HEAP32[i4 >> 2] = i8;
    i9 = __ZN3WTF10fastMallocEj(i8) | 0;
    HEAP32[i5 >> 2] = i9;
    _memcpy(i9 | 0, i6 | 0, i3) | 0;
    if ((i6 | 0) == 0) {
     break;
    }
    if ((HEAP32[i5 >> 2] | 0) == (i6 | 0)) {
     HEAP32[i5 >> 2] = 0;
     HEAP32[i4 >> 2] = 0;
    }
    __ZN3WTF8fastFreeEPv(i6);
   }
  } while (0);
  HEAP8[(HEAP32[i5 >> 2] | 0) + (HEAP32[i1 >> 2] | 0) | 0] = i2;
 } else {
  HEAP8[(HEAP32[i5 >> 2] | 0) + i3 | 0] = i2;
 }
 i3 = HEAP32[i1 >> 2] | 0;
 i7 = i3 + 1 | 0;
 HEAP32[i1 >> 2] = i7;
 i6 = (i2 & 65535) >>> 8;
 if ((i7 | 0) != (HEAP32[i4 >> 2] | 0)) {
  HEAP8[(HEAP32[i5 >> 2] | 0) + i7 | 0] = i6;
  i10 = HEAP32[i1 >> 2] | 0;
  i11 = i10 + 1 | 0;
  HEAP32[i1 >> 2] = i11;
  return;
 }
 i2 = i3 + 2 | 0;
 i3 = (i7 >>> 2) + i2 | 0;
 i9 = i3 >>> 0 > 16 >>> 0 ? i3 : 16;
 i3 = i9 >>> 0 > i2 >>> 0 ? i9 : i2;
 do {
  if (i7 >>> 0 < i3 >>> 0) {
   i2 = HEAP32[i5 >> 2] | 0;
   i9 = __ZN3WTF18fastMallocGoodSizeEj(i3) | 0;
   HEAP32[i4 >> 2] = i9;
   i8 = __ZN3WTF10fastMallocEj(i9) | 0;
   HEAP32[i5 >> 2] = i8;
   _memcpy(i8 | 0, i2 | 0, i7) | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   if ((HEAP32[i5 >> 2] | 0) == (i2 | 0)) {
    HEAP32[i5 >> 2] = 0;
    HEAP32[i4 >> 2] = 0;
   }
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 HEAP8[(HEAP32[i5 >> 2] | 0) + (HEAP32[i1 >> 2] | 0) | 0] = i6;
 i10 = HEAP32[i1 >> 2] | 0;
 i11 = i10 + 1 | 0;
 HEAP32[i1 >> 2] = i11;
 return;
}
function __ZN7WebCore17CloneDeserializer21readConstantPoolIndexIN3WTF6VectorINS0_12CachedStringELj0ENS2_15CrashOnOverflowEEEEEbRKT_Rj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = HEAP32[i2 + 8 >> 2] | 0;
 if (i4 >>> 0 < 256 >>> 0) {
  i2 = i1 + 4 | 0;
  do {
   if ((HEAP8[i2] & 1) == 0) {
    i5 = i1 + 96 | 0;
    i6 = HEAP32[i5 >> 2] | 0;
    if (i6 >>> 0 > ((HEAP32[i1 + 100 >> 2] | 0) - 1 | 0) >>> 0) {
     break;
    }
    HEAP32[i5 >> 2] = i6 + 1;
    HEAP32[i3 >> 2] = HEAPU8[i6] | 0;
    i7 = 1;
    return i7 | 0;
   }
  } while (0);
  HEAP8[i2] = 1;
  i7 = 0;
  return i7 | 0;
 }
 i2 = i1 + 4 | 0;
 i6 = (HEAP8[i2] & 1) == 0;
 if (i4 >>> 0 < 65536 >>> 0) {
  do {
   if (i6) {
    i4 = i1 + 96 | 0;
    i5 = HEAP32[i4 >> 2] | 0;
    if (i5 >>> 0 > ((HEAP32[i1 + 100 >> 2] | 0) - 2 | 0) >>> 0) {
     break;
    }
    i8 = i5 + 1 | 0;
    HEAP32[i4 >> 2] = i8;
    i9 = HEAPU8[i5] | 0;
    HEAP32[i4 >> 2] = i5 + 2;
    HEAP32[i3 >> 2] = ((HEAPU8[i8] | 0) << 8 | i9) & 65535;
    i7 = 1;
    return i7 | 0;
   }
  } while (0);
  HEAP8[i2] = 1;
  i7 = 0;
  return i7 | 0;
 } else {
  do {
   if (i6) {
    i9 = i1 + 96 | 0;
    if ((HEAP32[i9 >> 2] | 0) >>> 0 > ((HEAP32[i1 + 100 >> 2] | 0) - 4 | 0) >>> 0) {
     break;
    }
    HEAP32[i3 >> 2] = 0;
    i8 = HEAP32[i9 >> 2] | 0;
    HEAP32[i9 >> 2] = i8 + 1;
    HEAP32[i3 >> 2] = (HEAPU8[i8] | 0) + (HEAP32[i3 >> 2] | 0);
    i8 = HEAP32[i9 >> 2] | 0;
    HEAP32[i9 >> 2] = i8 + 1;
    HEAP32[i3 >> 2] = ((HEAPU8[i8] | 0) << 8) + (HEAP32[i3 >> 2] | 0);
    i8 = HEAP32[i9 >> 2] | 0;
    HEAP32[i9 >> 2] = i8 + 1;
    HEAP32[i3 >> 2] = ((HEAPU8[i8] | 0) << 16) + (HEAP32[i3 >> 2] | 0);
    i8 = HEAP32[i9 >> 2] | 0;
    HEAP32[i9 >> 2] = i8 + 1;
    HEAP32[i3 >> 2] = ((HEAPU8[i8] | 0) << 24) + (HEAP32[i3 >> 2] | 0);
    i7 = 1;
    return i7 | 0;
   }
  } while (0);
  HEAP8[i2] = 1;
  i7 = 0;
  return i7 | 0;
 }
 return 0;
}
function __ZN7WebCore17CloneDeserializer21readConstantPoolIndexIN3JSC20MarkedArgumentBufferEEEbRKT_Rj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if (i4 >>> 0 < 256 >>> 0) {
  i2 = i1 + 4 | 0;
  do {
   if ((HEAP8[i2] & 1) == 0) {
    i5 = i1 + 96 | 0;
    i6 = HEAP32[i5 >> 2] | 0;
    if (i6 >>> 0 > ((HEAP32[i1 + 100 >> 2] | 0) - 1 | 0) >>> 0) {
     break;
    }
    HEAP32[i5 >> 2] = i6 + 1;
    HEAP32[i3 >> 2] = HEAPU8[i6] | 0;
    i7 = 1;
    return i7 | 0;
   }
  } while (0);
  HEAP8[i2] = 1;
  i7 = 0;
  return i7 | 0;
 }
 i2 = i1 + 4 | 0;
 i6 = (HEAP8[i2] & 1) == 0;
 if (i4 >>> 0 < 65536 >>> 0) {
  do {
   if (i6) {
    i4 = i1 + 96 | 0;
    i5 = HEAP32[i4 >> 2] | 0;
    if (i5 >>> 0 > ((HEAP32[i1 + 100 >> 2] | 0) - 2 | 0) >>> 0) {
     break;
    }
    i8 = i5 + 1 | 0;
    HEAP32[i4 >> 2] = i8;
    i9 = HEAPU8[i5] | 0;
    HEAP32[i4 >> 2] = i5 + 2;
    HEAP32[i3 >> 2] = ((HEAPU8[i8] | 0) << 8 | i9) & 65535;
    i7 = 1;
    return i7 | 0;
   }
  } while (0);
  HEAP8[i2] = 1;
  i7 = 0;
  return i7 | 0;
 } else {
  do {
   if (i6) {
    i9 = i1 + 96 | 0;
    if ((HEAP32[i9 >> 2] | 0) >>> 0 > ((HEAP32[i1 + 100 >> 2] | 0) - 4 | 0) >>> 0) {
     break;
    }
    HEAP32[i3 >> 2] = 0;
    i8 = HEAP32[i9 >> 2] | 0;
    HEAP32[i9 >> 2] = i8 + 1;
    HEAP32[i3 >> 2] = (HEAPU8[i8] | 0) + (HEAP32[i3 >> 2] | 0);
    i8 = HEAP32[i9 >> 2] | 0;
    HEAP32[i9 >> 2] = i8 + 1;
    HEAP32[i3 >> 2] = ((HEAPU8[i8] | 0) << 8) + (HEAP32[i3 >> 2] | 0);
    i8 = HEAP32[i9 >> 2] | 0;
    HEAP32[i9 >> 2] = i8 + 1;
    HEAP32[i3 >> 2] = ((HEAPU8[i8] | 0) << 16) + (HEAP32[i3 >> 2] | 0);
    i8 = HEAP32[i9 >> 2] | 0;
    HEAP32[i9 >> 2] = i8 + 1;
    HEAP32[i3 >> 2] = ((HEAPU8[i8] | 0) << 24) + (HEAP32[i3 >> 2] | 0);
    i7 = 1;
    return i7 | 0;
   }
  } while (0);
  HEAP8[i2] = 1;
  i7 = 0;
  return i7 | 0;
 }
 return 0;
}
function __ZN3JSC8JSString6createERNS_2VMEN3WTF10PassRefPtrINS3_10StringImplEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 i5 = i2 + 16 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 & 3 | 0) == 2) {
  i7 = i2;
  while (1) {
   i8 = HEAP32[i7 + 12 >> 2] | 0;
   i9 = i8 + 16 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 & 3 | 0) == 2) {
    i7 = i8;
   } else {
    i11 = i8;
    i12 = i9;
    i13 = i10;
    break;
   }
  }
 } else {
  i11 = i2;
  i12 = i5;
  i13 = i6;
 }
 if ((i13 & 8 | 0) == 0) {
  HEAP32[i12 >> 2] = i13 | 8;
  i14 = HEAP32[i11 + 4 >> 2] << (i13 >>> 5 & 1 ^ 1);
 } else {
  i14 = 0;
 }
 i13 = i1 + 6840 | 0;
 i11 = i13 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i15 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i13, 16) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i15 = i12;
 }
 i12 = i15;
 HEAP32[i12 >> 2] = 0;
 i11 = i15;
 i13 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = HEAP32[i1 + 20772 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i16 = 0;
  } else {
   if ((HEAP32[i3 + 4 >> 2] | 0) == -6) {
    i16 = 0;
    break;
   }
   i16 = HEAP32[i3 >> 2] | 0;
  }
 } while (0);
 HEAP32[i12 >> 2] = i16;
 i16 = i15 + 4 | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i15 + 12 >> 2] = i13;
 HEAP32[i15 + 8 >> 2] = i4;
 HEAP32[i16 >> 2] = (HEAP32[i13 + 16 >> 2] | 0) >>> 5 & 1;
 if (i14 >>> 0 <= 256 >>> 0) {
  i17 = i1 + 24784 | 0;
  i18 = HEAP32[i17 >> 2] | 0;
  i19 = i18 + 1 | 0;
  HEAP32[i17 >> 2] = i19;
  return i11 | 0;
 }
 __ZN3JSC4Heap29reportExtraMemoryCostSlowCaseEj((HEAP32[(i15 & -65536) + 1076 >> 2] | 0) + 16 | 0, i14);
 i17 = i1 + 24784 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 i19 = i18 + 1 | 0;
 HEAP32[i17 >> 2] = i19;
 return i11 | 0;
}
function __ZN7WebCore21SerializedScriptValue11deserializeEPN3JSC9ExecStateEPNS1_14JSGlobalObjectEPN3WTF6VectorINS6_6RefPtrINS_11MessagePortEEELj1ENS6_15CrashOnOverflowEEENS_22SerializationErrorModeE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i8 = i7 | 0;
 i9 = i7 + 144 | 0;
 i10 = HEAP32[i2 + 16 >> 2] | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
  i11 = i9 | 0;
  HEAP32[i11 >> 2] = 0;
  HEAP32[i11 + 4 >> 2] = -3;
  HEAP32[i9 + 8 >> 2] = 6;
 } else {
  __ZN7WebCore17CloneDeserializerC2EPN3JSC9ExecStateEPNS1_14JSGlobalObjectEPN3WTF6VectorINS6_6RefPtrINS_11MessagePortEEELj1ENS6_15CrashOnOverflowEEEPNS7_INS1_19ArrayBufferContentsELj0ESB_EERKNS7_IhLj0ESB_EE(i8, i3, i4, i5, i10, i2 + 4 | 0);
  if ((HEAP32[i8 + 104 >> 2] | 0) >>> 0 < 6 >>> 0) {
   __ZN7WebCore17CloneDeserializer11deserializeEv(i9, i8);
  } else {
   i2 = i9 | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i2 + 4 >> 2] = -6;
   HEAP32[i9 + 8 >> 2] = 3;
  }
  __ZN7WebCore17CloneDeserializerD2Ev(i8);
 }
 if ((i6 | 0) != 1) {
  i12 = i9 | 0;
  i13 = i12 | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i12 + 4 | 0;
  i16 = HEAP32[i15 >> 2] | 0;
  i17 = i1 | 0;
  i18 = i17 | 0;
  HEAP32[i18 >> 2] = i14;
  i19 = i17 + 4 | 0;
  HEAP32[i19 >> 2] = i16;
  STACKTOP = i7;
  return;
 }
 __ZN7WebCore21SerializedScriptValue40maybeThrowExceptionIfSerializationFailedEPN3JSC9ExecStateENS_23SerializationReturnCodeE(i3, HEAP32[i9 + 8 >> 2] | 0);
 i12 = i9 | 0;
 i13 = i12 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 i15 = i12 + 4 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 i17 = i1 | 0;
 i18 = i17 | 0;
 HEAP32[i18 >> 2] = i14;
 i19 = i17 + 4 | 0;
 HEAP32[i19 >> 2] = i16;
 STACKTOP = i7;
 return;
}
function __ZN7WebCore17CloneDeserializerD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 136 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 + 128 | 0;
 if ((i5 | 0) != 0) {
  i7 = HEAP32[i6 >> 2] | 0;
  i8 = i7 + (i5 << 2) | 0;
  i5 = i7;
  while (1) {
   i7 = HEAP32[i5 >> 2] | 0;
   if ((i7 | 0) != 0) {
    __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i7 | 0);
   }
   i5 = i5 + 4 | 0;
   if ((i5 | 0) == (i8 | 0)) {
    break;
   }
  }
  HEAP32[i4 >> 2] = 0;
 }
 i4 = HEAP32[i6 >> 2] | 0;
 if (!((i1 + 140 | 0) == (i4 | 0) | (i4 | 0) == 0)) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i1 + 132 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = i1 + 116 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 i8 = i1 + 108 | 0;
 if ((i6 | 0) != 0) {
  i5 = HEAP32[i8 >> 2] | 0;
  i7 = i5 + (i6 << 4) | 0;
  i6 = i5;
  while (1) {
   i5 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i9 = i5 | 0;
     i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i9 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i6 = i6 + 16 | 0;
   if ((i6 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i4 >> 2] = 0;
 }
 i4 = HEAP32[i8 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
  HEAP32[i1 + 112 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 84 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 >> 2] = i1 + 8;
  __ZN3WTF7HashSetIPN3JSC20MarkedArgumentBufferENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i4, i3) | 0;
 }
 if ((HEAP32[i1 + 12 >> 2] | 0) == 8) {
  STACKTOP = i2;
  return;
 }
 i3 = HEAP32[i1 + 80 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZdaPv(i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore17CloneDeserializer15readArrayBufferERN3WTF6RefPtrIN3JSC11ArrayBufferEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 4 | 0;
 do {
  if ((HEAP8[i5] & 1) == 0) {
   i6 = i1 + 96 | 0;
   i7 = HEAP32[i1 + 100 >> 2] | 0;
   i8 = HEAP32[i6 >> 2] | 0;
   if (i8 >>> 0 > (i7 - 4 | 0) >>> 0) {
    break;
   }
   i9 = i8 + 1 | 0;
   HEAP32[i6 >> 2] = i9;
   i10 = HEAPU8[i8] | 0;
   i11 = i8 + 2 | 0;
   HEAP32[i6 >> 2] = i11;
   i12 = (HEAPU8[i9] | 0) << 8 | i10;
   i10 = i8 + 3 | 0;
   HEAP32[i6 >> 2] = i10;
   i9 = i12 | (HEAPU8[i11] | 0) << 16;
   i11 = i8 + 4 | 0;
   HEAP32[i6 >> 2] = i11;
   i12 = i9 | (HEAPU8[i10] | 0) << 24;
   if ((i8 + (i12 + 4) | 0) >>> 0 > i7 >>> 0) {
    i13 = 0;
    STACKTOP = i3;
    return i13 | 0;
   }
   do {
    if ((i12 | 0) < 0) {
     i14 = 0;
    } else {
     __ZN3WTF13tryFastCallocEjj(i4, i12, 1);
     i7 = i4 | 0;
     i8 = HEAP32[i7 >> 2] | 0;
     HEAP32[i7 >> 2] = 0;
     if ((i8 | 0) == 0) {
      i14 = 0;
      break;
     }
     i7 = __ZN3WTF10fastMallocEj(24) | 0;
     HEAP32[i7 >> 2] = 2;
     _memset(i7 + 4 | 0, 0, 20) | 0;
     HEAP32[i7 + 12 >> 2] = i8;
     HEAP32[i7 + 16 >> 2] = i12;
     _memcpy(i8 | 0, i11 | 0, i12) | 0;
     i14 = i7;
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(0);
   i11 = i2 | 0;
   i7 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = i14;
   if ((i7 | 0) != 0) {
    __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i7 | 0);
   }
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + i12;
   i13 = 1;
   STACKTOP = i3;
   return i13 | 0;
  }
 } while (0);
 HEAP8[i5] = 1;
 i13 = 0;
 STACKTOP = i3;
 return i13 | 0;
}
function __ZN7WebCore21SerializedScriptValue11deserializeEPN3JSC9ExecStateEPNS1_14JSGlobalObjectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i6 = i5 | 0;
 i7 = i5 + 144 | 0;
 i8 = HEAP32[i2 + 16 >> 2] | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
  i9 = i7 | 0;
  HEAP32[i9 >> 2] = 0;
  HEAP32[i9 + 4 >> 2] = -3;
  HEAP32[i7 + 8 >> 2] = 6;
  i10 = 6;
  i11 = -3;
  i12 = 0;
  __ZN7WebCore21SerializedScriptValue40maybeThrowExceptionIfSerializationFailedEPN3JSC9ExecStateENS_23SerializationReturnCodeE(i3, i10);
  i13 = i1 | 0;
  i14 = i13 | 0;
  HEAP32[i14 >> 2] = i12;
  i15 = i13 + 4 | 0;
  HEAP32[i15 >> 2] = i11;
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore17CloneDeserializerC2EPN3JSC9ExecStateEPNS1_14JSGlobalObjectEPN3WTF6VectorINS6_6RefPtrINS_11MessagePortEEELj1ENS6_15CrashOnOverflowEEEPNS7_INS1_19ArrayBufferContentsELj0ESB_EERKNS7_IhLj0ESB_EE(i6, i3, i4, 0, i8, i2 + 4 | 0);
 if ((HEAP32[i6 + 104 >> 2] | 0) >>> 0 < 6 >>> 0) {
  __ZN7WebCore17CloneDeserializer11deserializeEv(i7, i6);
  i2 = i7 | 0;
  i16 = HEAP32[i7 + 8 >> 2] | 0;
  i17 = HEAP32[i2 + 4 >> 2] | 0;
  i18 = HEAP32[i2 >> 2] | 0;
 } else {
  i2 = i7 | 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i2 + 4 >> 2] = -6;
  HEAP32[i7 + 8 >> 2] = 3;
  i16 = 3;
  i17 = -6;
  i18 = 0;
 }
 __ZN7WebCore17CloneDeserializerD2Ev(i6);
 i10 = i16;
 i11 = i17;
 i12 = i18;
 __ZN7WebCore21SerializedScriptValue40maybeThrowExceptionIfSerializationFailedEPN3JSC9ExecStateENS_23SerializationReturnCodeE(i3, i10);
 i13 = i1 | 0;
 i14 = i13 | 0;
 HEAP32[i14 >> 2] = i12;
 i15 = i13 + 4 | 0;
 HEAP32[i15 >> 2] = i11;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore15CloneSerializerD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 176 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
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
 i4 = HEAP32[i1 + 156 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i6 = HEAP32[i1 + 160 >> 2] | 0;
  if ((i6 | 0) > 0) {
   i5 = 0;
   while (1) {
    i7 = HEAP32[i4 + (i5 << 3) >> 2] | 0;
    i8 = i7;
    do {
     if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
      i9 = i7 | 0;
      i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
      if ((i10 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i7);
       break;
      } else {
       HEAP32[i9 >> 2] = i10;
       break;
      }
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i6 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 136 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 116 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 96 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 84 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 >> 2] = i1 + 8;
  __ZN3WTF7HashSetIPN3JSC20MarkedArgumentBufferENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i4, i3) | 0;
 }
 if ((HEAP32[i1 + 12 >> 2] | 0) == 8) {
  STACKTOP = i2;
  return;
 }
 i3 = HEAP32[i1 + 80 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZdaPv(i3);
 STACKTOP = i2;
 return;
}
function __ZN3WTF7HashSetIPN3JSC20MarkedArgumentBufferENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 2 | 0;
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
  i10 = i3 + (i2 << 2) | 0;
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
     i19 = i3 + (i18 << 2) | 0;
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
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 2) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 2) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN3JSC20MarkedArgumentBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6removeEPS3_(i1 | 0, i5);
 i21 = 1;
 return i21 | 0;
}
function __ZN3WTF7HashMapIPN3JSC8JSObjectEjNS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS6_IjEEE4findERKS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) == 0) {
   i5 = HEAP32[i2 + 4 >> 2] << 3 | 0;
   i6 = i5;
   i7 = i5;
  } else {
   i5 = HEAP32[i2 + 8 >> 2] | 0;
   i8 = HEAP32[i3 >> 2] | 0;
   i9 = i8;
   i10 = i9 + ~(i9 << 15) | 0;
   i9 = (i10 >>> 10 ^ i10) * 9 & -1;
   i10 = i9 >>> 6 ^ i9;
   i9 = i10 + ~(i10 << 11) | 0;
   i10 = i9 >>> 16 ^ i9;
   i9 = i10 & i5;
   i11 = i4 + (i9 << 3) | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   L4 : do {
    if ((i12 | 0) == (i8 | 0)) {
     i13 = i11;
    } else {
     i14 = (i10 >>> 23) + ~i10 | 0;
     i15 = i14 << 12 ^ i14;
     i14 = i15 >>> 7 ^ i15;
     i15 = i14 << 2 ^ i14;
     i14 = i15 >>> 20 ^ i15 | 1;
     i15 = 0;
     i16 = i9;
     i17 = i12;
     while (1) {
      if ((i17 | 0) == 0) {
       break;
      }
      i18 = (i15 | 0) == 0 ? i14 : i15;
      i19 = i18 + i16 & i5;
      i20 = i4 + (i19 << 3) | 0;
      i21 = HEAP32[i20 >> 2] | 0;
      if ((i21 | 0) == (i8 | 0)) {
       i13 = i20;
       break L4;
      } else {
       i15 = i18;
       i16 = i19;
       i17 = i21;
      }
     }
     i17 = i4 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
     i6 = i17;
     i7 = i17;
     break L1;
    }
   } while (0);
   i8 = i4 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
   i6 = (i13 | 0) == 0 ? i8 : i13;
   i7 = i8;
  }
 } while (0);
 i13 = i1;
 HEAP32[i13 >> 2] = i6;
 HEAP32[i13 + 4 >> 2] = i7;
 return;
}
function __ZN7WebCore15CloneSerializer13dumpImmediateEN3JSC7JSValueE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i4 | 0) == (-4 | 0)) {
  __ZN7WebCore15CloneSerializer5writeENS_16SerializationTagE(i1, 3);
  STACKTOP = i3;
  return;
 } else if ((i4 | 0) == (-3 | 0)) {
  __ZN7WebCore15CloneSerializer5writeENS_16SerializationTagE(i1, 4);
  STACKTOP = i3;
  return;
 } else {
  i5 = (i4 | 0) == -1;
  if (!(i5 | i4 >>> 0 < 4294967289 >>> 0)) {
   if ((i4 | 0) != -2) {
    STACKTOP = i3;
    return;
   }
   if ((HEAP32[i2 >> 2] | 0) == 0) {
    __ZN7WebCore15CloneSerializer5writeENS_16SerializationTagE(i1, 8);
    STACKTOP = i3;
    return;
   } else {
    __ZN7WebCore15CloneSerializer5writeENS_16SerializationTagE(i1, 9);
    STACKTOP = i3;
    return;
   }
  }
  if (!i5) {
   __ZN7WebCore15CloneSerializer5writeENS_16SerializationTagE(i1, 10);
   __ZN7WebCore15CloneSerializer5writeEd(i1, +HEAPF64[i2 >> 3]);
   STACKTOP = i3;
   return;
  }
  i5 = HEAP32[i2 >> 2] | 0;
  if ((i5 | 0) == 1) {
   __ZN7WebCore15CloneSerializer5writeENS_16SerializationTagE(i1, 7);
   STACKTOP = i3;
   return;
  } else if ((i5 | 0) == 0) {
   __ZN7WebCore15CloneSerializer5writeENS_16SerializationTagE(i1, 6);
   STACKTOP = i3;
   return;
  } else {
   __ZN7WebCore15CloneSerializer5writeENS_16SerializationTagE(i1, 5);
   __ZN7WebCoreL17writeLittleEndianIjEEvRN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEET_(HEAP32[i1 + 88 >> 2] | 0, i5);
   STACKTOP = i3;
   return;
  }
 }
}
function __ZN7WebCore15CloneSerializerC2EPN3JSC9ExecStateEPN3WTF6VectorINS4_6RefPtrINS_11MessagePortEEELj1ENS4_15CrashOnOverflowEEEPNS5_INS6_INS1_11ArrayBufferEEELj1ES9_EERNS5_INS4_6StringELj0ES9_EERNS5_IhLj0ES9_EE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP8[i1 + 4 | 0] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 8;
 HEAP32[i1 + 80 >> 2] = i1 + 16;
 HEAP32[i1 + 84 >> 2] = 0;
 i9 = i1 + 88 | 0;
 HEAP32[i9 >> 2] = i6;
 HEAP32[i1 + 92 >> 2] = i5;
 _memset(i1 + 96 | 0, 0, 80) | 0;
 i5 = __ZN3WTF11emptyStringEv() | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i6 + 16 >> 2] & 4 | 0) == 0) {
  __ZN3JSC10Identifier11addSlowCaseEPNS_9ExecStateEPN3WTF10StringImplE(i8, i2, i6);
  i10 = i8 | 0;
 } else {
  i2 = i8 | 0;
  HEAP32[i2 >> 2] = i6;
  i8 = i6 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  i10 = i2;
 }
 HEAP32[i1 + 176 >> 2] = HEAP32[i10 >> 2];
 __ZN7WebCoreL17writeLittleEndianIjEEvRN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEET_(HEAP32[i9 >> 2] | 0, 5);
 __ZN7WebCore15CloneSerializer15fillTransferMapINS_11MessagePortEEEvPN3WTF6VectorINS3_6RefPtrIT_EELj1ENS3_15CrashOnOverflowEEERNS3_7HashMapIPN3JSC8JSObjectEjNS3_7PtrHashISE_EENS3_10HashTraitsISE_EENSH_IjEEEE(i1, i3, i1 + 116 | 0);
 __ZN7WebCore15CloneSerializer15fillTransferMapIN3JSC11ArrayBufferEEEvPN3WTF6VectorINS4_6RefPtrIT_EELj1ENS4_15CrashOnOverflowEEERNS4_7HashMapIPNS2_8JSObjectEjNS4_7PtrHashISE_EENS4_10HashTraitsISE_EENSH_IjEEEE(i1, i4, i1 + 136 | 0);
 STACKTOP = i7;
 return;
}
function __ZN7WebCoreL17writeLittleEndianIjEEvRN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEET_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 8 | 0;
 i6 = i1 + 4 | 0;
 i7 = i1 | 0;
 HEAP32[i4 >> 2] = i2 & 255;
 i8 = HEAP32[i5 >> 2] | 0;
 if ((i8 | 0) == (HEAP32[i6 >> 2] | 0)) {
  __ZN3WTF6VectorIhLj0ENS_15CrashOnOverflowEE14appendSlowCaseIjEEvOT_(i1, i4);
  i9 = HEAP32[i5 >> 2] | 0;
 } else {
  HEAP8[(HEAP32[i7 >> 2] | 0) + i8 | 0] = i2;
  i8 = (HEAP32[i5 >> 2] | 0) + 1 | 0;
  HEAP32[i5 >> 2] = i8;
  i9 = i8;
 }
 i8 = i2 >>> 8;
 HEAP32[i4 >> 2] = i8 & 255;
 if ((i9 | 0) == (HEAP32[i6 >> 2] | 0)) {
  __ZN3WTF6VectorIhLj0ENS_15CrashOnOverflowEE14appendSlowCaseIjEEvOT_(i1, i4);
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  HEAP8[(HEAP32[i7 >> 2] | 0) + i9 | 0] = i8;
  i8 = (HEAP32[i5 >> 2] | 0) + 1 | 0;
  HEAP32[i5 >> 2] = i8;
  i10 = i8;
 }
 i8 = i2 >>> 16;
 HEAP32[i4 >> 2] = i8 & 255;
 if ((i10 | 0) == (HEAP32[i6 >> 2] | 0)) {
  __ZN3WTF6VectorIhLj0ENS_15CrashOnOverflowEE14appendSlowCaseIjEEvOT_(i1, i4);
  i11 = HEAP32[i5 >> 2] | 0;
 } else {
  HEAP8[(HEAP32[i7 >> 2] | 0) + i10 | 0] = i8;
  i8 = (HEAP32[i5 >> 2] | 0) + 1 | 0;
  HEAP32[i5 >> 2] = i8;
  i11 = i8;
 }
 i8 = i2 >>> 24;
 HEAP32[i4 >> 2] = i8;
 if ((i11 | 0) == (HEAP32[i6 >> 2] | 0)) {
  __ZN3WTF6VectorIhLj0ENS_15CrashOnOverflowEE14appendSlowCaseIjEEvOT_(i1, i4);
  STACKTOP = i3;
  return;
 } else {
  HEAP8[(HEAP32[i7 >> 2] | 0) + i11 | 0] = i8;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore21SerializedScriptValueD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 28 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 20 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
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
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 24 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = i2 + 8 | 0;
  i6 = HEAP32[i4 >> 2] | 0;
  i3 = i2 | 0;
  if ((i6 | 0) != 0) {
   i5 = HEAP32[i3 >> 2] | 0;
   i8 = i5 + (i6 << 3) | 0;
   i6 = i5;
   while (1) {
    __ZN3WTF8fastFreeEPv(HEAP32[i6 >> 2] | 0);
    i6 = i6 + 8 | 0;
    if ((i6 | 0) == (i8 | 0)) {
     break;
    }
   }
   HEAP32[i4 >> 2] = 0;
  }
  i4 = HEAP32[i3 >> 2] | 0;
  if ((i4 | 0) != 0) {
   HEAP32[i3 >> 2] = 0;
   HEAP32[i2 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i4);
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 12 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN7WebCore21SerializedScriptValueD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 28 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 20 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
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
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 24 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = i2 + 8 | 0;
  i6 = HEAP32[i4 >> 2] | 0;
  i3 = i2 | 0;
  if ((i6 | 0) != 0) {
   i5 = HEAP32[i3 >> 2] | 0;
   i8 = i5 + (i6 << 3) | 0;
   i6 = i5;
   while (1) {
    __ZN3WTF8fastFreeEPv(HEAP32[i6 >> 2] | 0);
    i6 = i6 + 8 | 0;
    if ((i6 | 0) == (i8 | 0)) {
     break;
    }
   }
   HEAP32[i4 >> 2] = 0;
  }
  i4 = HEAP32[i3 >> 2] | 0;
  if ((i4 | 0) != 0) {
   HEAP32[i3 >> 2] = 0;
   HEAP32[i2 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i4);
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 12 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN3WTF6VectorIN3JSC10IdentifierELj16ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 <= i2 >>> 0) {
   if ((i7 + (i4 << 2) | 0) >>> 0 <= i2 >>> 0) {
    break;
   }
   i8 = HEAP32[i1 + 4 >> 2] | 0;
   i9 = i8 + 1 + (i8 >>> 2) | 0;
   i8 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
   __ZN3WTF6VectorIN3JSC10IdentifierELj16ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
   i8 = HEAP32[i6 >> 2] | 0;
   i10 = i8 + (i2 - i7 >> 2 << 2) | 0;
   i11 = i8;
   i12 = HEAP32[i3 >> 2] | 0;
   i13 = i10 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = 0;
   i15 = i11 + (i12 << 2) | 0;
   HEAP32[i15 >> 2] = i14;
   i16 = HEAP32[i3 >> 2] | 0;
   i17 = i16 + 1 | 0;
   HEAP32[i3 >> 2] = i17;
   return;
  }
 } while (0);
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = i7 + 1 + (i7 >>> 2) | 0;
 i7 = i4 >>> 0 > 16 >>> 0 ? i4 : 16;
 __ZN3WTF6VectorIN3JSC10IdentifierELj16ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i7 >>> 0 > i5 >>> 0 ? i7 : i5);
 i10 = i2;
 i11 = HEAP32[i6 >> 2] | 0;
 i12 = HEAP32[i3 >> 2] | 0;
 i13 = i10 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i15 = i11 + (i12 << 2) | 0;
 HEAP32[i15 >> 2] = i14;
 i16 = HEAP32[i3 >> 2] | 0;
 i17 = i16 + 1 | 0;
 HEAP32[i3 >> 2] = i17;
 return;
}
function __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS0_11ArrayBufferE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i1 + 4 >> 2] = -3;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore18getExistingWrapperIN3JSC13JSArrayBufferENS1_11ArrayBufferEEENS1_7JSValueEPNS1_9ExecStateEPT0_(i6, i2, i4);
 if ((HEAP32[i6 + 4 >> 2] | 0) != -6) {
  i8 = i6 | 0;
  i6 = HEAP32[i8 + 4 >> 2] | 0;
  i9 = i1 | 0;
  HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i9 + 4 >> 2] = i6;
  STACKTOP = i5;
  return;
 }
 i6 = i4 | 0;
 i9 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i9 + 2;
 i8 = i2 + 16 | 0;
 i2 = HEAP32[(HEAP32[i8 >> 2] & -65536) + 1076 >> 2] | 0;
 i10 = HEAP32[i3 + 420 >> 2] | 0;
 i3 = i7 | 0;
 HEAP32[i3 >> 2] = i4;
 HEAP32[i6 >> 2] = i9 + 4;
 i9 = __ZN3JSC13JSArrayBuffer6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_11ArrayBufferEEE(i2, i10, i7) | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 if ((i7 | 0) != 0) {
  __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i7 | 0);
 }
 __ZN7WebCore12cacheWrapperIN3JSC11ArrayBufferENS1_13JSArrayBufferEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i8 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i4, i9);
 HEAP32[i1 + 4 >> 2] = (i9 | 0) == 0 ? -6 : -5;
 HEAP32[i1 >> 2] = i9;
 STACKTOP = i5;
 return;
}
function __ZN3WTF6VectorIN7WebCore17CloneDeserializer12CachedStringELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
 i1 = i5 + (i6 << 4) | 0;
 if (i2 >>> 0 > 268435455 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 4) | 0;
 HEAP32[i3 >> 2] = i7 >>> 4;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   i2 = i6 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i7 >> 2] = i8;
   i8 = i6 + 8 | 0;
   i9 = HEAP32[i8 + 4 >> 2] | 0;
   i10 = i7 + 8 | 0;
   HEAP32[i10 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i10 + 4 >> 2] = i9;
   i9 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i2 = i9 | 0;
     i10 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i2 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i9 = i6 + 16 | 0;
   if ((i9 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i9;
    i7 = i7 + 16 | 0;
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
function __ZN7WebCore15CloneSerializer5writeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 HEAPF64[tempDoublePtr >> 3] = d2;
 i3 = HEAP32[i1 + 88 >> 2] | 0;
 i1 = i3 + 8 | 0;
 i4 = i3 + 4 | 0;
 i5 = i3 | 0;
 i3 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
 i6 = HEAP32[tempDoublePtr >> 2] | 0;
 i7 = 1;
 i8 = HEAP32[i1 >> 2] | 0;
 while (1) {
  if ((i8 | 0) == (HEAP32[i4 >> 2] | 0)) {
   i9 = i8 + 1 | 0;
   i10 = i9 + (i8 >>> 2) | 0;
   i11 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   i10 = i11 >>> 0 > i9 >>> 0 ? i11 : i9;
   do {
    if (i8 >>> 0 < i10 >>> 0) {
     i9 = HEAP32[i5 >> 2] | 0;
     i11 = __ZN3WTF18fastMallocGoodSizeEj(i10) | 0;
     HEAP32[i4 >> 2] = i11;
     i12 = __ZN3WTF10fastMallocEj(i11) | 0;
     HEAP32[i5 >> 2] = i12;
     _memcpy(i12 | 0, i9 | 0, i8) | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     if ((HEAP32[i5 >> 2] | 0) == (i9 | 0)) {
      HEAP32[i5 >> 2] = 0;
      HEAP32[i4 >> 2] = 0;
     }
     __ZN3WTF8fastFreeEPv(i9);
    }
   } while (0);
   HEAP8[(HEAP32[i5 >> 2] | 0) + (HEAP32[i1 >> 2] | 0) | 0] = i6;
  } else {
   HEAP8[(HEAP32[i5 >> 2] | 0) + i8 | 0] = i6;
  }
  i10 = (HEAP32[i1 >> 2] | 0) + 1 | 0;
  HEAP32[i1 >> 2] = i10;
  if (i7 >>> 0 >= 8 >>> 0) {
   break;
  }
  i9 = i6 >>> 8 | i3 << 24;
  i3 = i3 >> 8 | ((i3 | 0) < 0 | 0 ? -1 : 0) << 24;
  i6 = i9;
  i7 = i7 + 1 | 0;
  i8 = i10;
 }
 return;
}
function __ZN3WTF6VectorIN3JSC7MapData14const_iteratorELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
 i7 = i5 + (i6 << 3) | 0;
 do {
  if (i2 >>> 0 > 4 >>> 0) {
   if (i2 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
   } else {
    i8 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 3) | 0;
    HEAP32[i3 >> 2] = i8 >>> 3;
    i9 = __ZN3WTF10fastMallocEj(i8) | 0;
    HEAP32[i4 >> 2] = i9;
    i10 = i9;
    break;
   }
  } else {
   i9 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i9;
   HEAP32[i3 >> 2] = 4;
   i10 = i9;
  }
 } while (0);
 if ((i6 | 0) != 0) {
  i6 = i5;
  i2 = i10;
  while (1) {
   i10 = i6;
   i9 = i2;
   i8 = HEAP32[i10 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i9 + 4 >> 2] = i8;
   i8 = (HEAP32[i6 >> 2] | 0) + 76 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) - 1;
   i8 = i6 + 8 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    break;
   } else {
    i6 = i8;
    i2 = i2 + 8 | 0;
   }
  }
 }
 if ((i1 + 12 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore15CloneSerializer5writeEy(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = HEAP32[i1 + 88 >> 2] | 0;
 i1 = i4 + 8 | 0;
 i5 = i4 + 4 | 0;
 i6 = i4 | 0;
 i4 = i3;
 i3 = i2;
 i2 = 0;
 i7 = HEAP32[i1 >> 2] | 0;
 while (1) {
  if ((i7 | 0) == (HEAP32[i5 >> 2] | 0)) {
   i8 = i7 + 1 | 0;
   i9 = i8 + (i7 >>> 2) | 0;
   i10 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
   i9 = i10 >>> 0 > i8 >>> 0 ? i10 : i8;
   do {
    if (i7 >>> 0 < i9 >>> 0) {
     i8 = HEAP32[i6 >> 2] | 0;
     i10 = __ZN3WTF18fastMallocGoodSizeEj(i9) | 0;
     HEAP32[i5 >> 2] = i10;
     i11 = __ZN3WTF10fastMallocEj(i10) | 0;
     HEAP32[i6 >> 2] = i11;
     _memcpy(i11 | 0, i8 | 0, i7) | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     if ((HEAP32[i6 >> 2] | 0) == (i8 | 0)) {
      HEAP32[i6 >> 2] = 0;
      HEAP32[i5 >> 2] = 0;
     }
     __ZN3WTF8fastFreeEPv(i8);
    }
   } while (0);
   HEAP8[(HEAP32[i6 >> 2] | 0) + (HEAP32[i1 >> 2] | 0) | 0] = i3;
  } else {
   HEAP8[(HEAP32[i6 >> 2] | 0) + i7 | 0] = i3;
  }
  i9 = (HEAP32[i1 >> 2] | 0) + 1 | 0;
  HEAP32[i1 >> 2] = i9;
  i8 = i3 >>> 8 | i4 << 24;
  i11 = i2 + 1 | 0;
  if (i11 >>> 0 < 8 >>> 0) {
   i4 = i4 >>> 8 | 0 << 24;
   i3 = i8;
   i2 = i11;
   i7 = i9;
  } else {
   break;
  }
 }
 return;
}
function __ZN3JSC21GenericTypedArrayViewINS_14Float32AdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = (i2 | 0) == 0;
 if (!i7) {
  i8 = i2 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = HEAP32[i2 + 16 >> 2] | 0;
 if ((i3 & 3 | 0) != 0 | i8 >>> 0 < i3 >>> 0) {
  i9 = 0;
 } else {
  i9 = (i8 - i3 | 0) >>> 2 >>> 0 >= i4 >>> 0;
 }
 if (!i7) {
  __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i2 | 0);
 }
 if (i9) {
  i9 = __ZN3WTF10fastMallocEj(24) | 0;
  if (!i7) {
   i8 = i2 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  }
  i8 = i6 | 0;
  HEAP32[i8 >> 2] = i2;
  __ZN3JSC15ArrayBufferViewC2EN3WTF10PassRefPtrINS_11ArrayBufferEEEj(i9, i6, i3);
  i3 = HEAP32[i8 >> 2] | 0;
  if ((i3 | 0) != 0) {
   __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i3 | 0);
  }
  HEAP32[i9 >> 2] = H_BASE + 128;
  HEAP32[i9 + 20 >> 2] = i4;
  HEAP32[i1 >> 2] = i9;
 } else {
  HEAP32[i1 >> 2] = 0;
 }
 if (i7) {
  STACKTOP = i5;
  return;
 }
 __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i2 | 0);
 STACKTOP = i5;
 return;
}
function __ZN3JSC21GenericTypedArrayViewINS_14Float64AdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = (i2 | 0) == 0;
 if (!i7) {
  i8 = i2 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = HEAP32[i2 + 16 >> 2] | 0;
 if ((i3 & 7 | 0) != 0 | i8 >>> 0 < i3 >>> 0) {
  i9 = 0;
 } else {
  i9 = (i8 - i3 | 0) >>> 3 >>> 0 >= i4 >>> 0;
 }
 if (!i7) {
  __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i2 | 0);
 }
 if (i9) {
  i9 = __ZN3WTF10fastMallocEj(24) | 0;
  if (!i7) {
   i8 = i2 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  }
  i8 = i6 | 0;
  HEAP32[i8 >> 2] = i2;
  __ZN3JSC15ArrayBufferViewC2EN3WTF10PassRefPtrINS_11ArrayBufferEEEj(i9, i6, i3);
  i3 = HEAP32[i8 >> 2] | 0;
  if ((i3 | 0) != 0) {
   __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i3 | 0);
  }
  HEAP32[i9 >> 2] = H_BASE + 88;
  HEAP32[i9 + 20 >> 2] = i4;
  HEAP32[i1 >> 2] = i9;
 } else {
  HEAP32[i1 >> 2] = 0;
 }
 if (i7) {
  STACKTOP = i5;
  return;
 }
 __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i2 | 0);
 STACKTOP = i5;
 return;
}
function __ZN3JSC21GenericTypedArrayViewINS_13Uint32AdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = (i2 | 0) == 0;
 if (!i7) {
  i8 = i2 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = HEAP32[i2 + 16 >> 2] | 0;
 if ((i3 & 3 | 0) != 0 | i8 >>> 0 < i3 >>> 0) {
  i9 = 0;
 } else {
  i9 = (i8 - i3 | 0) >>> 2 >>> 0 >= i4 >>> 0;
 }
 if (!i7) {
  __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i2 | 0);
 }
 if (i9) {
  i9 = __ZN3WTF10fastMallocEj(24) | 0;
  if (!i7) {
   i8 = i2 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  }
  i8 = i6 | 0;
  HEAP32[i8 >> 2] = i2;
  __ZN3JSC15ArrayBufferViewC2EN3WTF10PassRefPtrINS_11ArrayBufferEEEj(i9, i6, i3);
  i3 = HEAP32[i8 >> 2] | 0;
  if ((i3 | 0) != 0) {
   __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i3 | 0);
  }
  HEAP32[i9 >> 2] = H_BASE + 168;
  HEAP32[i9 + 20 >> 2] = i4;
  HEAP32[i1 >> 2] = i9;
 } else {
  HEAP32[i1 >> 2] = 0;
 }
 if (i7) {
  STACKTOP = i5;
  return;
 }
 __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i2 | 0);
 STACKTOP = i5;
 return;
}
function __ZN3JSC21GenericTypedArrayViewINS_13Uint16AdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = (i2 | 0) == 0;
 if (!i7) {
  i8 = i2 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = HEAP32[i2 + 16 >> 2] | 0;
 if ((i3 & 1 | 0) != 0 | i8 >>> 0 < i3 >>> 0) {
  i9 = 0;
 } else {
  i9 = (i8 - i3 | 0) >>> 1 >>> 0 >= i4 >>> 0;
 }
 if (!i7) {
  __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i2 | 0);
 }
 if (i9) {
  i9 = __ZN3WTF10fastMallocEj(24) | 0;
  if (!i7) {
   i8 = i2 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  }
  i8 = i6 | 0;
  HEAP32[i8 >> 2] = i2;
  __ZN3JSC15ArrayBufferViewC2EN3WTF10PassRefPtrINS_11ArrayBufferEEEj(i9, i6, i3);
  i3 = HEAP32[i8 >> 2] | 0;
  if ((i3 | 0) != 0) {
   __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i3 | 0);
  }
  HEAP32[i9 >> 2] = H_BASE + 208;
  HEAP32[i9 + 20 >> 2] = i4;
  HEAP32[i1 >> 2] = i9;
 } else {
  HEAP32[i1 >> 2] = 0;
 }
 if (i7) {
  STACKTOP = i5;
  return;
 }
 __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i2 | 0);
 STACKTOP = i5;
 return;
}
function __ZN3JSC21GenericTypedArrayViewINS_12Int32AdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = (i2 | 0) == 0;
 if (!i7) {
  i8 = i2 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = HEAP32[i2 + 16 >> 2] | 0;
 if ((i3 & 3 | 0) != 0 | i8 >>> 0 < i3 >>> 0) {
  i9 = 0;
 } else {
  i9 = (i8 - i3 | 0) >>> 2 >>> 0 >= i4 >>> 0;
 }
 if (!i7) {
  __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i2 | 0);
 }
 if (i9) {
  i9 = __ZN3WTF10fastMallocEj(24) | 0;
  if (!i7) {
   i8 = i2 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  }
  i8 = i6 | 0;
  HEAP32[i8 >> 2] = i2;
  __ZN3JSC15ArrayBufferViewC2EN3WTF10PassRefPtrINS_11ArrayBufferEEEj(i9, i6, i3);
  i3 = HEAP32[i8 >> 2] | 0;
  if ((i3 | 0) != 0) {
   __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i3 | 0);
  }
  HEAP32[i9 >> 2] = H_BASE + 288;
  HEAP32[i9 + 20 >> 2] = i4;
  HEAP32[i1 >> 2] = i9;
 } else {
  HEAP32[i1 >> 2] = 0;
 }
 if (i7) {
  STACKTOP = i5;
  return;
 }
 __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i2 | 0);
 STACKTOP = i5;
 return;
}
function __ZN3JSC21GenericTypedArrayViewINS_12Int16AdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = (i2 | 0) == 0;
 if (!i7) {
  i8 = i2 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = HEAP32[i2 + 16 >> 2] | 0;
 if ((i3 & 1 | 0) != 0 | i8 >>> 0 < i3 >>> 0) {
  i9 = 0;
 } else {
  i9 = (i8 - i3 | 0) >>> 1 >>> 0 >= i4 >>> 0;
 }
 if (!i7) {
  __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i2 | 0);
 }
 if (i9) {
  i9 = __ZN3WTF10fastMallocEj(24) | 0;
  if (!i7) {
   i8 = i2 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  }
  i8 = i6 | 0;
  HEAP32[i8 >> 2] = i2;
  __ZN3JSC15ArrayBufferViewC2EN3WTF10PassRefPtrINS_11ArrayBufferEEEj(i9, i6, i3);
  i3 = HEAP32[i8 >> 2] | 0;
  if ((i3 | 0) != 0) {
   __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i3 | 0);
  }
  HEAP32[i9 >> 2] = H_BASE + 328;
  HEAP32[i9 + 20 >> 2] = i4;
  HEAP32[i1 >> 2] = i9;
 } else {
  HEAP32[i1 >> 2] = 0;
 }
 if (i7) {
  STACKTOP = i5;
  return;
 }
 __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i2 | 0);
 STACKTOP = i5;
 return;
}
function __ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = (i2 | 0) == 0;
 if (!i7) {
  i8 = i2 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = HEAP32[i2 + 16 >> 2] | 0;
 if (i8 >>> 0 < i3 >>> 0) {
  i9 = 0;
 } else {
  i9 = (i8 - i3 | 0) >>> 0 >= i4 >>> 0;
 }
 if (!i7) {
  __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i2 | 0);
 }
 if (i9) {
  i9 = __ZN3WTF10fastMallocEj(24) | 0;
  if (!i7) {
   i8 = i2 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  }
  i8 = i6 | 0;
  HEAP32[i8 >> 2] = i2;
  __ZN3JSC15ArrayBufferViewC2EN3WTF10PassRefPtrINS_11ArrayBufferEEEj(i9, i6, i3);
  i3 = HEAP32[i8 >> 2] | 0;
  if ((i3 | 0) != 0) {
   __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i3 | 0);
  }
  HEAP32[i9 >> 2] = H_BASE + 48;
  HEAP32[i9 + 20 >> 2] = i4;
  HEAP32[i1 >> 2] = i9;
 } else {
  HEAP32[i1 >> 2] = 0;
 }
 if (i7) {
  STACKTOP = i5;
  return;
 }
 __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i2 | 0);
 STACKTOP = i5;
 return;
}
function __ZN3JSC21GenericTypedArrayViewINS_12Uint8AdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = (i2 | 0) == 0;
 if (!i7) {
  i8 = i2 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = HEAP32[i2 + 16 >> 2] | 0;
 if (i8 >>> 0 < i3 >>> 0) {
  i9 = 0;
 } else {
  i9 = (i8 - i3 | 0) >>> 0 >= i4 >>> 0;
 }
 if (!i7) {
  __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i2 | 0);
 }
 if (i9) {
  i9 = __ZN3WTF10fastMallocEj(24) | 0;
  if (!i7) {
   i8 = i2 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  }
  i8 = i6 | 0;
  HEAP32[i8 >> 2] = i2;
  __ZN3JSC15ArrayBufferViewC2EN3WTF10PassRefPtrINS_11ArrayBufferEEEj(i9, i6, i3);
  i3 = HEAP32[i8 >> 2] | 0;
  if ((i3 | 0) != 0) {
   __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i3 | 0);
  }
  HEAP32[i9 >> 2] = H_BASE + 248;
  HEAP32[i9 + 20 >> 2] = i4;
  HEAP32[i1 >> 2] = i9;
 } else {
  HEAP32[i1 >> 2] = 0;
 }
 if (i7) {
  STACKTOP = i5;
  return;
 }
 __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i2 | 0);
 STACKTOP = i5;
 return;
}
function __ZN3JSC21GenericTypedArrayViewINS_11Int8AdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = (i2 | 0) == 0;
 if (!i7) {
  i8 = i2 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = HEAP32[i2 + 16 >> 2] | 0;
 if (i8 >>> 0 < i3 >>> 0) {
  i9 = 0;
 } else {
  i9 = (i8 - i3 | 0) >>> 0 >= i4 >>> 0;
 }
 if (!i7) {
  __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i2 | 0);
 }
 if (i9) {
  i9 = __ZN3WTF10fastMallocEj(24) | 0;
  if (!i7) {
   i8 = i2 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  }
  i8 = i6 | 0;
  HEAP32[i8 >> 2] = i2;
  __ZN3JSC15ArrayBufferViewC2EN3WTF10PassRefPtrINS_11ArrayBufferEEEj(i9, i6, i3);
  i3 = HEAP32[i8 >> 2] | 0;
  if ((i3 | 0) != 0) {
   __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i3 | 0);
  }
  HEAP32[i9 >> 2] = H_BASE + 368;
  HEAP32[i9 + 20 >> 2] = i4;
  HEAP32[i1 >> 2] = i9;
 } else {
  HEAP32[i1 >> 2] = 0;
 }
 if (i7) {
  STACKTOP = i5;
  return;
 }
 __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i2 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore21SerializedScriptValueC2ERN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEERNS2_INS1_6StringELj0ES3_EENS1_10PassOwnPtrINS2_IN3JSC19ArrayBufferContentsELj0ES3_EEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 HEAP32[i1 >> 2] = 1;
 i5 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 8 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 12 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = i4;
 i4 = i1 + 20 | 0;
 HEAP32[i4 >> 2] = 0;
 i8 = i1 + 24 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i1 + 28 | 0;
 HEAP32[i9 >> 2] = 0;
 i1 = i2 + 8 | 0;
 i10 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i1 >> 2] = i10;
 i10 = i2 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i10 >> 2] = i1;
 i1 = i2 + 4 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i1 >> 2] = i2;
 i2 = i3 + 8 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i2 >> 2] = i1;
 i1 = i3 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i1 >> 2] = i2;
 i2 = i3 + 4 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i2 >> 2] = i3;
 return;
}
function __ZN7WebCore21SerializedScriptValueC1ERN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEERNS2_INS1_6StringELj0ES3_EENS1_10PassOwnPtrINS2_IN3JSC19ArrayBufferContentsELj0ES3_EEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 HEAP32[i1 >> 2] = 1;
 i5 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 8 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 12 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = i4;
 i4 = i1 + 20 | 0;
 HEAP32[i4 >> 2] = 0;
 i8 = i1 + 24 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i1 + 28 | 0;
 HEAP32[i9 >> 2] = 0;
 i1 = i2 + 8 | 0;
 i10 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i1 >> 2] = i10;
 i10 = i2 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i10 >> 2] = i1;
 i1 = i2 + 4 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i1 >> 2] = i2;
 i2 = i3 + 8 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i2 >> 2] = i1;
 i1 = i3 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i1 >> 2] = i2;
 i2 = i3 + 4 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i2 >> 2] = i3;
 return;
}
function __ZN3WTF6VectorIhLj0ENS_15CrashOnOverflowEE6appendIhEEvPKT_j(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i5 + i3 | 0;
 i7 = i1 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if (i6 >>> 0 > i8 >>> 0) {
   i9 = i8 + 1 + (i8 >>> 2) | 0;
   i10 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
   i9 = i10 >>> 0 > i6 >>> 0 ? i10 : i6;
   if (i8 >>> 0 >= i9 >>> 0) {
    break;
   }
   i10 = i1 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   i12 = __ZN3WTF18fastMallocGoodSizeEj(i9) | 0;
   HEAP32[i7 >> 2] = i12;
   i9 = __ZN3WTF10fastMallocEj(i12) | 0;
   HEAP32[i10 >> 2] = i9;
   _memcpy(i9 | 0, i11 | 0, i5) | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   if ((HEAP32[i10 >> 2] | 0) == (i11 | 0)) {
    HEAP32[i10 >> 2] = 0;
    HEAP32[i7 >> 2] = 0;
   }
   __ZN3WTF8fastFreeEPv(i11);
  }
 } while (0);
 i7 = HEAP32[i4 >> 2] | 0;
 if (i6 >>> 0 < i7 >>> 0) {
  _WTFCrash();
 }
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i4 >> 2] = i6;
  return;
 } else {
  i13 = 0;
 }
 while (1) {
  HEAP8[i5 + (i13 + i7) | 0] = HEAP8[i2 + i13 | 0] | 0;
  i13 = i13 + 1 | 0;
  if (i13 >>> 0 >= i3 >>> 0) {
   break;
  }
 }
 HEAP32[i4 >> 2] = i6;
 return;
}
function __ZN3WTF6VectorIN3JSC7JSValueELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
 i7 = i5 + (i6 << 3) | 0;
 do {
  if (i2 >>> 0 > 4 >>> 0) {
   if (i2 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
   } else {
    i8 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 3) | 0;
    HEAP32[i3 >> 2] = i8 >>> 3;
    i9 = __ZN3WTF10fastMallocEj(i8) | 0;
    HEAP32[i4 >> 2] = i9;
    i10 = i9;
    break;
   }
  } else {
   i9 = i1 + 16 | 0;
   HEAP32[i4 >> 2] = i9;
   HEAP32[i3 >> 2] = 4;
   i10 = i9;
  }
 } while (0);
 if ((i6 | 0) != 0) {
  i6 = i5;
  i2 = i10;
  while (1) {
   i10 = i6 | 0;
   i9 = i2 | 0;
   i8 = HEAP32[i10 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i9 + 4 >> 2] = i8;
   i8 = i6 + 8 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    break;
   } else {
    i6 = i8;
    i2 = i2 + 8 | 0;
   }
  }
 }
 if ((i1 + 16 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore21SerializedScriptValue40maybeThrowExceptionIfSerializationFailedEPN3JSC9ExecStateENS_23SerializationReturnCodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((i2 | 0) == 1) {
  i5 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
  __ZN3JSC2VM14throwExceptionEPNS_9ExecStateEPNS_8JSObjectE(i5, i1, __ZN3JSC24createStackOverflowErrorEPNS_9ExecStateE(i1) | 0) | 0;
  STACKTOP = i3;
  return;
 } else if ((i2 | 0) == 3) {
  i5 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
  __ZN3WTF6StringC1EPKc(i4, H_BASE + 8 | 0);
  __ZN3JSC2VM14throwExceptionEPNS_9ExecStateEPNS_8JSObjectE(i5, i1, __ZN3JSC15createTypeErrorEPNS_9ExecStateERKN3WTF6StringE(i1, i4) | 0) | 0;
  i5 = HEAP32[i4 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i4 = i5 | 0;
  i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
  if ((i6 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i5);
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i4 >> 2] = i6;
   STACKTOP = i3;
   return;
  }
 } else if ((i2 | 0) == 5) {
  __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i1, 25);
  STACKTOP = i3;
  return;
 } else {
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore15CloneSerializer5writeEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = HEAP32[i1 + 88 >> 2] | 0;
 i1 = i3 + 8 | 0;
 i4 = i3 + 4 | 0;
 i5 = i3 | 0;
 i3 = i2;
 i2 = 0;
 i6 = HEAP32[i1 >> 2] | 0;
 while (1) {
  if ((i6 | 0) == (HEAP32[i4 >> 2] | 0)) {
   i7 = i6 + 1 | 0;
   i8 = i7 + (i6 >>> 2) | 0;
   i9 = i8 >>> 0 > 16 >>> 0 ? i8 : 16;
   i8 = i9 >>> 0 > i7 >>> 0 ? i9 : i7;
   do {
    if (i6 >>> 0 < i8 >>> 0) {
     i7 = HEAP32[i5 >> 2] | 0;
     i9 = __ZN3WTF18fastMallocGoodSizeEj(i8) | 0;
     HEAP32[i4 >> 2] = i9;
     i10 = __ZN3WTF10fastMallocEj(i9) | 0;
     HEAP32[i5 >> 2] = i10;
     _memcpy(i10 | 0, i7 | 0, i6) | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     if ((HEAP32[i5 >> 2] | 0) == (i7 | 0)) {
      HEAP32[i5 >> 2] = 0;
      HEAP32[i4 >> 2] = 0;
     }
     __ZN3WTF8fastFreeEPv(i7);
    }
   } while (0);
   HEAP8[(HEAP32[i5 >> 2] | 0) + (HEAP32[i1 >> 2] | 0) | 0] = i3;
  } else {
   HEAP8[(HEAP32[i5 >> 2] | 0) + i6 | 0] = i3;
  }
  i8 = (HEAP32[i1 >> 2] | 0) + 1 | 0;
  HEAP32[i1 >> 2] = i8;
  i7 = i2 + 1 | 0;
  if (i7 >>> 0 < 4 >>> 0) {
   i3 = i3 >> 8;
   i2 = i7;
   i6 = i8;
  } else {
   break;
  }
 }
 return;
}
function __ZN7WebCore21SerializedScriptValue9serializeERKN10Deprecated11ScriptValueEPN3JSC9ExecStateEPN3WTF6VectorINS8_6RefPtrINS_11MessagePortEEELj1ENS8_15CrashOnOverflowEEEPNS9_INSA_INS5_11ArrayBufferEEELj1ESD_EERb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i10 | 0) == 0) {
  HEAP32[i9 + 4 >> 2] = -6;
  HEAP32[i9 >> 2] = 0;
 } else {
  i2 = i10 | 0;
  i10 = HEAP32[i2 + 4 >> 2] | 0;
  i11 = i9 | 0;
  HEAP32[i11 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i11 + 4 >> 2] = i10;
 }
 __ZN7WebCore21SerializedScriptValue6createEPN3JSC9ExecStateENS1_7JSValueEPN3WTF6VectorINS5_6RefPtrINS_11MessagePortEEELj1ENS5_15CrashOnOverflowEEEPNS6_INS7_INS1_11ArrayBufferEEELj1ESA_EENS_22SerializationErrorModeE(i8, i3, i9, i4, i5, 1);
 i5 = i8 | 0;
 i8 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = (HEAP32[(HEAP32[i3 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
 HEAP8[i6] = ((HEAP32[i5 >> 2] & 0 | 0) != 0 | (HEAP32[i5 + 4 >> 2] & -1 | 0) != (-6 | 0)) & 1;
 HEAP32[i1 >> 2] = i8;
 STACKTOP = i7;
 return;
}
function __ZN7WebCore21SerializedScriptValue6createERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i4 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i4 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 if (__ZN7WebCore15CloneSerializer9serializeERKN3WTF6StringERNS1_6VectorIhLj0ENS1_15CrashOnOverflowEEE(i2, i4) | 0) {
  i4 = __ZN3WTF10fastMallocEj(32) | 0;
  HEAP32[i4 >> 2] = 1;
  i2 = i4 + 4 | 0;
  i8 = i2;
  i9 = i4 + 8 | 0;
  _memset(i2 | 0, 0, 28) | 0;
  HEAP32[i4 + 12 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i7 >> 2] = 0;
  i2 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i5 >> 2] = i2;
  i2 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i6 >> 2] = i2;
  HEAP32[i1 >> 2] = i4;
 } else {
  HEAP32[i1 >> 2] = 0;
 }
 if ((HEAP32[i7 >> 2] | 0) != 0) {
  HEAP32[i7 >> 2] = 0;
 }
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i6 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i7);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15CloneSerializer17checkForDuplicateEPN3JSC8JSObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP32[i4 >> 2] = i2;
 i2 = i1 + 96 | 0;
 __ZN3WTF7HashMapIPN3JSC8JSObjectEjNS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS6_IjEEE4findERKS3_(i5, i2, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == ((HEAP32[i2 >> 2] | 0) + (HEAP32[i1 + 100 >> 2] << 3) | 0)) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 __ZN7WebCore15CloneSerializer5writeENS_16SerializationTagE(i1, 19);
 i2 = HEAP32[i4 + 4 >> 2] | 0;
 i4 = HEAP32[i1 + 108 >> 2] | 0;
 if ((i4 | 0) < 256) {
  __ZN7WebCore15CloneSerializer5writeEh(i1, i2 & 255);
  i6 = 1;
  STACKTOP = i3;
  return i6 | 0;
 }
 if ((i4 | 0) < 65536) {
  __ZN7WebCore15CloneSerializer5writeEt(i1, i2 & 65535);
  i6 = 1;
  STACKTOP = i3;
  return i6 | 0;
 } else {
  __ZN7WebCoreL17writeLittleEndianIjEEvRN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEET_(HEAP32[i1 + 88 >> 2] | 0, i2);
  i6 = 1;
  STACKTOP = i3;
  return i6 | 0;
 }
 return 0;
}
function __ZN7WebCore15CloneSerializer5writeEPKNS_4FileE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = HEAP32[i1 + 92 >> 2] | 0;
 i4 = i2 + 12 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) == (HEAP32[i3 + 4 >> 2] | 0)) {
   __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i6 + 1 | 0);
   i7 = HEAP32[i4 >> 2] | 0;
   HEAP32[(HEAP32[i3 >> 2] | 0) + (HEAP32[i5 >> 2] << 2) >> 2] = i7;
   if ((i7 | 0) == 0) {
    break;
   }
   i8 = i7 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  } else {
   i8 = HEAP32[i4 >> 2] | 0;
   HEAP32[(HEAP32[i3 >> 2] | 0) + (i6 << 2) >> 2] = i8;
   if ((i8 | 0) == 0) {
    break;
   }
   i7 = i8 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  }
 } while (0);
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 __ZN7WebCore15CloneSerializer5writeERKN3WTF6StringE(i1, i2 + 72 | 0);
 __ZN7WebCore15CloneSerializer5writeERKN3WTF6StringE(i1, i4 | 0);
 __ZN7WebCore15CloneSerializer5writeERKN3WTF6StringE(i1, i2 + 60 | 0);
 return;
}
function __ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[(HEAP32[i2 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
 i2 = HEAP32[i3 + 484 >> 2] | 0;
 i3 = i5 | 0;
 HEAP32[i3 >> 2] = i1;
 if ((i1 | 0) != 0) {
  i7 = i1 + 4 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = __ZN3JSC23JSGenericTypedArrayViewINS_19Uint8ClampedAdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE(i6, i2, i5) | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return i7 | 0;
 }
 i3 = i5 + 4 | 0;
 i5 = i3 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i4;
  return i7 | 0;
 }
 i2 = i3 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return i7 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 63](i2);
 STACKTOP = i4;
 return i7 | 0;
}
function __ZN7WebCore15CloneSerializer5writeERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN7WebCore15CloneSerializer5writeERKN3JSC10IdentifierE(i1, i1 + 176 | 0);
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i6 + 16 >> 2] & 4 | 0) == 0) {
  __ZN3JSC10Identifier11addSlowCaseEPNS_9ExecStateEPN3WTF10StringImplE(i4, HEAP32[i1 >> 2] | 0, i6);
  i7 = i4 | 0;
 } else {
  i2 = i4 | 0;
  HEAP32[i2 >> 2] = i6;
  i4 = i6 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
  i7 = i2;
 }
 i2 = i5 | 0;
 HEAP32[i2 >> 2] = HEAP32[i7 >> 2];
 __ZN7WebCore15CloneSerializer5writeERKN3JSC10IdentifierE(i1, i5);
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i5 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN3JSC21GenericTypedArrayViewINS_14Float64AdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[(HEAP32[i2 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
 i2 = HEAP32[i3 + 532 >> 2] | 0;
 i3 = i5 | 0;
 HEAP32[i3 >> 2] = i1;
 if ((i1 | 0) != 0) {
  i7 = i1 + 4 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = __ZN3JSC23JSGenericTypedArrayViewINS_14Float64AdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE(i6, i2, i5) | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return i7 | 0;
 }
 i3 = i5 + 4 | 0;
 i5 = i3 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i4;
  return i7 | 0;
 }
 i2 = i3 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return i7 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 63](i2);
 STACKTOP = i4;
 return i7 | 0;
}
function __ZN3JSC21GenericTypedArrayViewINS_14Float32AdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[(HEAP32[i2 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
 i2 = HEAP32[i3 + 524 >> 2] | 0;
 i3 = i5 | 0;
 HEAP32[i3 >> 2] = i1;
 if ((i1 | 0) != 0) {
  i7 = i1 + 4 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = __ZN3JSC23JSGenericTypedArrayViewINS_14Float32AdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE(i6, i2, i5) | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return i7 | 0;
 }
 i3 = i5 + 4 | 0;
 i5 = i3 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i4;
  return i7 | 0;
 }
 i2 = i3 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return i7 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 63](i2);
 STACKTOP = i4;
 return i7 | 0;
}
function __ZN3JSC21GenericTypedArrayViewINS_13Uint32AdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[(HEAP32[i2 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
 i2 = HEAP32[i3 + 516 >> 2] | 0;
 i3 = i5 | 0;
 HEAP32[i3 >> 2] = i1;
 if ((i1 | 0) != 0) {
  i7 = i1 + 4 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = __ZN3JSC23JSGenericTypedArrayViewINS_13Uint32AdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE(i6, i2, i5) | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return i7 | 0;
 }
 i3 = i5 + 4 | 0;
 i5 = i3 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i4;
  return i7 | 0;
 }
 i2 = i3 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return i7 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 63](i2);
 STACKTOP = i4;
 return i7 | 0;
}
function __ZN3JSC21GenericTypedArrayViewINS_13Uint16AdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[(HEAP32[i2 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
 i2 = HEAP32[i3 + 500 >> 2] | 0;
 i3 = i5 | 0;
 HEAP32[i3 >> 2] = i1;
 if ((i1 | 0) != 0) {
  i7 = i1 + 4 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = __ZN3JSC23JSGenericTypedArrayViewINS_13Uint16AdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE(i6, i2, i5) | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return i7 | 0;
 }
 i3 = i5 + 4 | 0;
 i5 = i3 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i4;
  return i7 | 0;
 }
 i2 = i3 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return i7 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 63](i2);
 STACKTOP = i4;
 return i7 | 0;
}
function __ZN3JSC21GenericTypedArrayViewINS_12Uint8AdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[(HEAP32[i2 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
 i2 = HEAP32[i3 + 476 >> 2] | 0;
 i3 = i5 | 0;
 HEAP32[i3 >> 2] = i1;
 if ((i1 | 0) != 0) {
  i7 = i1 + 4 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = __ZN3JSC23JSGenericTypedArrayViewINS_12Uint8AdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE(i6, i2, i5) | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return i7 | 0;
 }
 i3 = i5 + 4 | 0;
 i5 = i3 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i4;
  return i7 | 0;
 }
 i2 = i3 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return i7 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 63](i2);
 STACKTOP = i4;
 return i7 | 0;
}
function __ZN3JSC21GenericTypedArrayViewINS_12Int32AdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[(HEAP32[i2 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
 i2 = HEAP32[i3 + 508 >> 2] | 0;
 i3 = i5 | 0;
 HEAP32[i3 >> 2] = i1;
 if ((i1 | 0) != 0) {
  i7 = i1 + 4 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = __ZN3JSC23JSGenericTypedArrayViewINS_12Int32AdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE(i6, i2, i5) | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return i7 | 0;
 }
 i3 = i5 + 4 | 0;
 i5 = i3 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i4;
  return i7 | 0;
 }
 i2 = i3 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return i7 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 63](i2);
 STACKTOP = i4;
 return i7 | 0;
}
function __ZN3JSC21GenericTypedArrayViewINS_12Int16AdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[(HEAP32[i2 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
 i2 = HEAP32[i3 + 492 >> 2] | 0;
 i3 = i5 | 0;
 HEAP32[i3 >> 2] = i1;
 if ((i1 | 0) != 0) {
  i7 = i1 + 4 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = __ZN3JSC23JSGenericTypedArrayViewINS_12Int16AdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE(i6, i2, i5) | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return i7 | 0;
 }
 i3 = i5 + 4 | 0;
 i5 = i3 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i4;
  return i7 | 0;
 }
 i2 = i3 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return i7 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 63](i2);
 STACKTOP = i4;
 return i7 | 0;
}
function __ZN3JSC21GenericTypedArrayViewINS_11Int8AdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[(HEAP32[i2 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
 i2 = HEAP32[i3 + 468 >> 2] | 0;
 i3 = i5 | 0;
 HEAP32[i3 >> 2] = i1;
 if ((i1 | 0) != 0) {
  i7 = i1 + 4 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = __ZN3JSC23JSGenericTypedArrayViewINS_11Int8AdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE(i6, i2, i5) | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return i7 | 0;
 }
 i3 = i5 + 4 | 0;
 i5 = i3 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i4;
  return i7 | 0;
 }
 i2 = i3 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return i7 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 63](i2);
 STACKTOP = i4;
 return i7 | 0;
}
function __ZN3WTF10RefCountedIN3JSC21PropertyNameArrayDataEE5derefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 + 12 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i4 = i1 + 4 | 0;
 i5 = i4;
 if ((i2 | 0) != 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i7 = i6 + (i2 << 2) | 0;
  i2 = i6;
  while (1) {
   i6 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i8 = i6 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i6);
      break;
     } else {
      HEAP32[i8 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i2 = i2 + 4 | 0;
   if ((i2 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 if (!((i1 + 16 | 0) == (i3 | 0) | (i3 | 0) == 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 8 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3WTF6VectorIN3JSC10IdentifierELj16ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
  if (i2 >>> 0 > 16 >>> 0) {
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
   HEAP32[i3 >> 2] = 16;
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
function __ZN7WebCore21SerializedScriptValueC2ERN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEERNS2_INS1_6StringELj0ES3_EE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = 1;
 i4 = i1 + 4 | 0;
 i5 = i1 + 8 | 0;
 i6 = i1 + 20 | 0;
 i7 = i1 + 24 | 0;
 i8 = i1 + 28 | 0;
 i9 = i2 + 8 | 0;
 _memset(i4 | 0, 0, 28) | 0;
 HEAP32[i1 + 12 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i9 >> 2] = 0;
 i9 = i2 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i9 >> 2] = i1;
 i1 = i2 + 4 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i1 >> 2] = i2;
 i2 = i3 + 8 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i2 >> 2] = i1;
 i1 = i3 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i1 >> 2] = i2;
 i2 = i3 + 4 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i2 >> 2] = i3;
 return;
}
function __ZN7WebCore21SerializedScriptValueC1ERN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEERNS2_INS1_6StringELj0ES3_EE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = 1;
 i4 = i1 + 4 | 0;
 i5 = i1 + 8 | 0;
 i6 = i1 + 20 | 0;
 i7 = i1 + 24 | 0;
 i8 = i1 + 28 | 0;
 i9 = i2 + 8 | 0;
 _memset(i4 | 0, 0, 28) | 0;
 HEAP32[i1 + 12 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i9 >> 2] = 0;
 i9 = i2 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i9 >> 2] = i1;
 i1 = i2 + 4 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i1 >> 2] = i2;
 i2 = i3 + 8 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i2 >> 2] = i1;
 i1 = i3 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i1 >> 2] = i2;
 i2 = i3 + 4 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i2 >> 2] = i3;
 return;
}
function __ZN3WTF6VectorIhLj0ENS_15CrashOnOverflowEE14appendSlowCaseIjEEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 + 4 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i7 + 1 + (i7 >>> 2) | 0;
 i9 = i8 >>> 0 > 16 >>> 0 ? i8 : 16;
 i8 = i9 >>> 0 > i5 >>> 0 ? i9 : i5;
 i5 = i1 | 0;
 do {
  if (i7 >>> 0 < i8 >>> 0) {
   i1 = HEAP32[i5 >> 2] | 0;
   i9 = __ZN3WTF18fastMallocGoodSizeEj(i8) | 0;
   HEAP32[i6 >> 2] = i9;
   i10 = __ZN3WTF10fastMallocEj(i9) | 0;
   HEAP32[i5 >> 2] = i10;
   _memcpy(i10 | 0, i1 | 0, i4) | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   if ((HEAP32[i5 >> 2] | 0) == (i1 | 0)) {
    HEAP32[i5 >> 2] = 0;
    HEAP32[i6 >> 2] = 0;
   }
   __ZN3WTF8fastFreeEPv(i1);
  }
 } while (0);
 HEAP8[(HEAP32[i5 >> 2] | 0) + (HEAP32[i3 >> 2] | 0) | 0] = HEAP32[i2 >> 2];
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZN3WTF13wtfThreadDataEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i1 = HEAP32[__ZN3WTF13WTFThreadData10staticDataE >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i2 = __Znwj(4) | 0;
   if ((_pthread_key_create(i2 | 0, F_BASE_vi + 26 | 0) | 0) == 0) {
    i3 = i2;
    HEAP32[__ZN3WTF13WTFThreadData10staticDataE >> 2] = i3;
    i4 = i3;
    break;
   } else {
    _WTFCrash();
    return 0;
   }
  } else {
   i4 = i1;
  }
 } while (0);
 i1 = i4 | 0;
 i3 = _pthread_getspecific(HEAP32[i1 >> 2] | 0) | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   } else {
    i5 = i2;
   }
   return i5 | 0;
  }
 } while (0);
 i3 = __ZN3WTF16fastZeroedMallocEj(28) | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i1 = __Znwj(8) | 0;
 HEAP32[i1 >> 2] = i3;
 HEAP32[i1 + 4 >> 2] = i4;
 _pthread_setspecific(i2 | 0, i1 | 0) | 0;
 __ZN3WTF13WTFThreadDataC1Ev(i3);
 i5 = i3;
 return i5 | 0;
}
function __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) != 0 | (i1 | 0) == 0) {
  return;
 }
 i3 = i1 + 20 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i3);
 }
 __ZN3WTF8fastFreeEPv(HEAP32[i1 + 12 >> 2] | 0);
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i3 & 1 | 0) == 0) {
   i2 = i3;
   if ((i3 | 0) == 0) {
    break;
   }
   i4 = i2 + 8 | 0;
   if ((HEAP32[i4 >> 2] | 0) != 0) {
    HEAP32[i4 >> 2] = 0;
   }
   i4 = i2 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = 0;
    HEAP32[i2 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i5);
   }
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore4FileEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore21SerializedScriptValue9serializeERKN10Deprecated11ScriptValueEPN3JSC9ExecStateENS_22SerializationErrorModeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  HEAP32[i6 + 4 >> 2] = -6;
  HEAP32[i6 >> 2] = 0;
 } else {
  i2 = i7 | 0;
  i7 = HEAP32[i2 + 4 >> 2] | 0;
  i8 = i6 | 0;
  HEAP32[i8 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i8 + 4 >> 2] = i7;
 }
 __ZN7WebCore21SerializedScriptValue6createEPN3JSC9ExecStateENS1_7JSValueEPN3WTF6VectorINS5_6RefPtrINS_11MessagePortEEELj1ENS5_15CrashOnOverflowEEEPNS6_INS7_INS1_11ArrayBufferEEELj1ESA_EENS_22SerializationErrorModeE(i1, i3, i6, 0, 0, i4);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore21SerializedScriptValue6createEPN3JSC9ExecStateENS1_7JSValueE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 i5 = i4 | 0;
 i6 = i3 | 0;
 i3 = HEAP32[i6 + 4 >> 2] | 0;
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i7 + 4 >> 2] = i3;
 __ZN7WebCore21SerializedScriptValue6createEPN3JSC9ExecStateENS1_7JSValueEPN3WTF6VectorINS5_6RefPtrINS_11MessagePortEEELj1ENS5_15CrashOnOverflowEEEPNS6_INS7_INS1_11ArrayBufferEEELj1ESA_EENS_22SerializationErrorModeE(i1, i2, i5, 0, 0, 1);
 STACKTOP = i4;
 return;
}
function __ZN3JSC12APIEntryShimD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3JSC2VMD1Ev(i3);
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 __ZN3JSC12JSLockHolderD1Ev(i1 + 8 | 0);
 i3 = __ZN3WTF13wtfThreadDataEv() | 0;
 HEAP32[i3 + 16 >> 2] = HEAP32[i1 + 4 >> 2];
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 | 0;
 if (((tempValue = HEAP32[i2 >> 2] | 0, HEAP32[i2 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  return;
 }
 __ZN3JSC2VMD1Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
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
function __ZN7WebCore21SerializedScriptValue11numberValueEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i4 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i4 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 __ZN7WebCore15CloneSerializer15serializeNumberEdRN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEE(d2, i4);
 i4 = __ZN3WTF10fastMallocEj(32) | 0;
 HEAP32[i4 >> 2] = 1;
 i8 = i4 + 4 | 0;
 _memset(i8 | 0, 0, 28) | 0;
 HEAP32[i4 + 12 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i7 >> 2] = 0;
 HEAP32[i8 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i5 >> 2] = 0;
 HEAP32[i4 + 8 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i1 >> 2] = i4;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore21SerializedScriptValue12booleanValueEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i4 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i4 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 __ZN7WebCore15CloneSerializer16serializeBooleanEbRN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEE(i2, i4);
 i4 = __ZN3WTF10fastMallocEj(32) | 0;
 HEAP32[i4 >> 2] = 1;
 i2 = i4 + 4 | 0;
 _memset(i2 | 0, 0, 28) | 0;
 HEAP32[i4 + 12 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i7 >> 2] = 0;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i5 >> 2] = 0;
 HEAP32[i4 + 8 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i1 >> 2] = i4;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore21SerializedScriptValue14undefinedValueEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i3 + 4 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i3 + 8 | 0;
 HEAP32[i6 >> 2] = 0;
 __ZN7WebCore15CloneSerializer18serializeUndefinedERN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEE(i3);
 i3 = __ZN3WTF10fastMallocEj(32) | 0;
 HEAP32[i3 >> 2] = 1;
 i7 = i3 + 4 | 0;
 _memset(i7 | 0, 0, 28) | 0;
 HEAP32[i3 + 12 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i6 >> 2] = 0;
 HEAP32[i7 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i1 >> 2] = i3;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore21SerializedScriptValueC2ERKN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = 1;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = i5;
 do {
  if ((i3 | 0) != 0) {
   i5 = __ZN3WTF18fastMallocGoodSizeEj(i3) | 0;
   HEAP32[i7 >> 2] = i5;
   i8 = __ZN3WTF10fastMallocEj(i5) | 0;
   HEAP32[i6 >> 2] = i8;
   if ((i8 | 0) == 0) {
    break;
   }
   _memcpy(i8 | 0, HEAP32[i2 >> 2] | 0, HEAP32[i4 >> 2] | 0) | 0;
  }
 } while (0);
 _memset(i1 + 16 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore21SerializedScriptValueC1ERKN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = 1;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = i5;
 do {
  if ((i3 | 0) != 0) {
   i5 = __ZN3WTF18fastMallocGoodSizeEj(i3) | 0;
   HEAP32[i7 >> 2] = i5;
   i8 = __ZN3WTF10fastMallocEj(i5) | 0;
   HEAP32[i6 >> 2] = i8;
   if ((i8 | 0) == 0) {
    break;
   }
   _memcpy(i8 | 0, HEAP32[i2 >> 2] | 0, HEAP32[i4 >> 2] | 0) | 0;
  }
 } while (0);
 _memset(i1 + 16 | 0, 0, 16) | 0;
 return;
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
function __ZN7WebCore21SerializedScriptValueC2ERN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = 1;
 i3 = i1 + 4 | 0;
 i4 = i1 + 8 | 0;
 i5 = i2 + 8 | 0;
 _memset(i3 | 0, 0, 28) | 0;
 HEAP32[i1 + 12 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i5 >> 2] = 0;
 i5 = i2 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i5 >> 2] = i1;
 i1 = i2 + 4 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore21SerializedScriptValueC1ERN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = 1;
 i3 = i1 + 4 | 0;
 i4 = i1 + 8 | 0;
 i5 = i2 + 8 | 0;
 _memset(i3 | 0, 0, 28) | 0;
 HEAP32[i1 + 12 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i5 >> 2] = 0;
 i5 = i2 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i5 >> 2] = i1;
 i1 = i2 + 4 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i1 >> 2] = i2;
 return;
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
function __ZN3WTF14ThreadSpecificINS_13WTFThreadDataEE7destroyEPv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 4 | 0;
 _pthread_setspecific(HEAP32[HEAP32[i2 >> 2] >> 2] | 0, i1 | 0) | 0;
 i3 = i1;
 __ZN3WTF13WTFThreadDataD1Ev(HEAP32[i3 >> 2] | 0);
 __ZN3WTF8fastFreeEPv(HEAP32[i3 >> 2] | 0);
 _pthread_setspecific(HEAP32[HEAP32[i2 >> 2] >> 2] | 0, 0) | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZdlPv(i1);
 return;
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
function __ZN7WebCore21SerializedScriptValue6createEPK15OpaqueJSContextPK13OpaqueJSValuePS6_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore21SerializedScriptValue6createEPK15OpaqueJSContextPK13OpaqueJSValuePN3WTF6VectorINS7_6RefPtrINS_11MessagePortEEELj1ENS7_15CrashOnOverflowEEEPNS8_INS9_IN3JSC11ArrayBufferEEELj1ESC_EEPS6_(i1, i2, i3, 0, 0, i4);
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
function __ZNK3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE10byteLengthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = 0;
  } else {
   if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
    i3 = 0;
    break;
   }
   i3 = HEAP32[i1 + 20 >> 2] | 0;
  }
 } while (0);
 return i3 | 0;
}
function __ZNK3JSC21GenericTypedArrayViewINS_14Float64AdaptorEE10byteLengthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = 0;
  } else {
   if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
    i3 = 0;
    break;
   }
   i3 = HEAP32[i1 + 20 >> 2] << 3;
  }
 } while (0);
 return i3 | 0;
}
function __ZNK3JSC21GenericTypedArrayViewINS_14Float32AdaptorEE10byteLengthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = 0;
  } else {
   if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
    i3 = 0;
    break;
   }
   i3 = HEAP32[i1 + 20 >> 2] << 2;
  }
 } while (0);
 return i3 | 0;
}
function __ZNK3JSC21GenericTypedArrayViewINS_13Uint32AdaptorEE10byteLengthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = 0;
  } else {
   if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
    i3 = 0;
    break;
   }
   i3 = HEAP32[i1 + 20 >> 2] << 2;
  }
 } while (0);
 return i3 | 0;
}
function __ZNK3JSC21GenericTypedArrayViewINS_13Uint16AdaptorEE10byteLengthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = 0;
  } else {
   if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
    i3 = 0;
    break;
   }
   i3 = HEAP32[i1 + 20 >> 2] << 1;
  }
 } while (0);
 return i3 | 0;
}
function __ZN7WebCore21SerializedScriptValue11deserializeEPK15OpaqueJSContextPPK13OpaqueJSValue(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZN7WebCore21SerializedScriptValue11deserializeEPK15OpaqueJSContextPPK13OpaqueJSValuePN3WTF6VectorINS8_6RefPtrINS_11MessagePortEEELj1ENS8_15CrashOnOverflowEEE(i1, i2, i3, 0) | 0;
}
function __ZNK3JSC21GenericTypedArrayViewINS_12Int32AdaptorEE10byteLengthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = 0;
  } else {
   if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
    i3 = 0;
    break;
   }
   i3 = HEAP32[i1 + 20 >> 2] << 2;
  }
 } while (0);
 return i3 | 0;
}
function __ZNK3JSC21GenericTypedArrayViewINS_12Int16AdaptorEE10byteLengthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = 0;
  } else {
   if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
    i3 = 0;
    break;
   }
   i3 = HEAP32[i1 + 20 >> 2] << 1;
  }
 } while (0);
 return i3 | 0;
}
function __ZNK3JSC21GenericTypedArrayViewINS_12Uint8AdaptorEE10byteLengthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = 0;
  } else {
   if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
    i3 = 0;
    break;
   }
   i3 = HEAP32[i1 + 20 >> 2] | 0;
  }
 } while (0);
 return i3 | 0;
}
function __ZNK3JSC21GenericTypedArrayViewINS_11Int8AdaptorEE10byteLengthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = 0;
  } else {
   if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
    i3 = 0;
    break;
   }
   i3 = HEAP32[i1 + 20 >> 2] | 0;
  }
 } while (0);
 return i3 | 0;
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
function dynCall_iiiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 return FUNCTION_TABLE_iiiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0) | 0;
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
function __ZN7WebCore21SerializedScriptValue8toStringEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17CloneDeserializer17deserializeStringERKN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEE(i1, i2 + 4 | 0);
 return;
}
function __ZN7WebCore21SerializedScriptValue9nullValueEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(32) | 0;
 HEAP32[i2 >> 2] = 1;
 _memset(i2 + 4 | 0, 0, 28) | 0;
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore21SerializedScriptValue6createEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(32) | 0;
 HEAP32[i2 >> 2] = 1;
 _memset(i2 + 4 | 0, 0, 28) | 0;
 HEAP32[i1 >> 2] = i2;
 return;
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
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN3JSC15ArrayBufferViewD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3JSC21GenericTypedArrayViewINS_14Float64AdaptorEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN3JSC15ArrayBufferViewD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3JSC21GenericTypedArrayViewINS_14Float32AdaptorEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN3JSC15ArrayBufferViewD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 31](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN3JSC21GenericTypedArrayViewINS_13Uint32AdaptorEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN3JSC15ArrayBufferViewD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3JSC21GenericTypedArrayViewINS_13Uint16AdaptorEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN3JSC15ArrayBufferViewD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3JSC21GenericTypedArrayViewINS_12Uint8AdaptorEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN3JSC15ArrayBufferViewD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3JSC21GenericTypedArrayViewINS_12Int32AdaptorEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN3JSC15ArrayBufferViewD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3JSC21GenericTypedArrayViewINS_12Int16AdaptorEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN3JSC15ArrayBufferViewD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore21SerializedScriptValue36serializationDidCompleteSuccessfullyENS_23SerializationReturnCodeE(i1) {
 i1 = i1 | 0;
 return (i1 | 0) == 0 | 0;
}
function __ZN3JSC21GenericTypedArrayViewINS_11Int8AdaptorEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN3JSC15ArrayBufferViewD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
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
function b3(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(3);
 return 0;
}
function __ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN3JSC15ArrayBufferViewD2Ev(i1 | 0);
 return;
}
function __ZN3JSC21GenericTypedArrayViewINS_14Float64AdaptorEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN3JSC15ArrayBufferViewD2Ev(i1 | 0);
 return;
}
function __ZN3JSC21GenericTypedArrayViewINS_14Float32AdaptorEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN3JSC15ArrayBufferViewD2Ev(i1 | 0);
 return;
}
function __ZN3JSC21GenericTypedArrayViewINS_13Uint32AdaptorEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN3JSC15ArrayBufferViewD2Ev(i1 | 0);
 return;
}
function __ZN3JSC21GenericTypedArrayViewINS_13Uint16AdaptorEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN3JSC15ArrayBufferViewD2Ev(i1 | 0);
 return;
}
function __ZN3JSC21GenericTypedArrayViewINS_12Uint8AdaptorEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN3JSC15ArrayBufferViewD2Ev(i1 | 0);
 return;
}
function __ZN3JSC21GenericTypedArrayViewINS_12Int32AdaptorEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN3JSC15ArrayBufferViewD2Ev(i1 | 0);
 return;
}
function __ZN3JSC21GenericTypedArrayViewINS_12Int16AdaptorEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN3JSC15ArrayBufferViewD2Ev(i1 | 0);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function __ZN3JSC21GenericTypedArrayViewINS_11Int8AdaptorEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN3JSC15ArrayBufferViewD2Ev(i1 | 0);
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
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function __ZNK3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE7getTypeEv(i1) {
 i1 = i1 | 0;
 return 3;
}
function b4(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(4);
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 63](i2 | 0) | 0;
}
function __ZNK3JSC21GenericTypedArrayViewINS_14Float64AdaptorEE7getTypeEv(i1) {
 i1 = i1 | 0;
 return 9;
}
function __ZNK3JSC21GenericTypedArrayViewINS_14Float32AdaptorEE7getTypeEv(i1) {
 i1 = i1 | 0;
 return 8;
}
function __ZNK3JSC21GenericTypedArrayViewINS_13Uint32AdaptorEE7getTypeEv(i1) {
 i1 = i1 | 0;
 return 7;
}
function __ZNK3JSC21GenericTypedArrayViewINS_13Uint16AdaptorEE7getTypeEv(i1) {
 i1 = i1 | 0;
 return 5;
}
function __ZNK3JSC21GenericTypedArrayViewINS_12Uint8AdaptorEE7getTypeEv(i1) {
 i1 = i1 | 0;
 return 2;
}
function __ZNK3JSC21GenericTypedArrayViewINS_12Int32AdaptorEE7getTypeEv(i1) {
 i1 = i1 | 0;
 return 6;
}
function __ZNK3JSC21GenericTypedArrayViewINS_12Int16AdaptorEE7getTypeEv(i1) {
 i1 = i1 | 0;
 return 4;
}
function __ZNK3JSC21GenericTypedArrayViewINS_11Int8AdaptorEE7getTypeEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function b9(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(9);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
 return 0;
}
function __ZN7WebCore21SerializedScriptValue17wireFormatVersionEv() {
 return 5;
}
function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
}
function b8(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(8);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b7() {
 abort(7);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0,__ZNK3JSC21GenericTypedArrayViewINS_14Float32AdaptorEE7getTypeEv,b0,__ZNK3JSC21GenericTypedArrayViewINS_13Uint16AdaptorEE7getTypeEv,b0,__ZNK3JSC21GenericTypedArrayViewINS_13Uint32AdaptorEE7getTypeEv,b0,__ZNK3JSC21GenericTypedArrayViewINS_12Int32AdaptorEE7getTypeEv,b0,__ZNK3JSC21GenericTypedArrayViewINS_14Float32AdaptorEE10byteLengthEv,b0,__ZNK3JSC21GenericTypedArrayViewINS_13Uint32AdaptorEE10byteLengthEv,b0,__ZNK3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE7getTypeEv,b0,__ZNK3JSC21GenericTypedArrayViewINS_12Int16AdaptorEE10byteLengthEv,b0,__ZNK3JSC21GenericTypedArrayViewINS_11Int8AdaptorEE10byteLengthEv,b0,__ZNK3JSC21GenericTypedArrayViewINS_12Uint8AdaptorEE10byteLengthEv,b0,__ZNK3JSC21GenericTypedArrayViewINS_11Int8AdaptorEE7getTypeEv,b0,__ZNK3JSC21GenericTypedArrayViewINS_12Int32AdaptorEE10byteLengthEv,b0,__ZNK3JSC21GenericTypedArrayViewINS_13Uint16AdaptorEE10byteLengthEv,b0,__ZNK3JSC21GenericTypedArrayViewINS_14Float64AdaptorEE7getTypeEv
  ,b0,__ZNK3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE10byteLengthEv,b0,__ZNK3JSC21GenericTypedArrayViewINS_12Int16AdaptorEE7getTypeEv,b0,__ZNK3JSC21GenericTypedArrayViewINS_14Float64AdaptorEE10byteLengthEv,b0,__ZNK3JSC21GenericTypedArrayViewINS_12Uint8AdaptorEE7getTypeEv,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN3JSC21GenericTypedArrayViewINS_13Uint16AdaptorEED1Ev,b1,__ZN7WebCore21SerializedScriptValueD2Ev,b1,__ZN3JSC21GenericTypedArrayViewINS_14Float64AdaptorEED1Ev,b1,__ZN3JSC21GenericTypedArrayViewINS_12Int16AdaptorEED1Ev,b1,__ZN3JSC21GenericTypedArrayViewINS_12Int16AdaptorEED0Ev,b1,__ZN3JSC21GenericTypedArrayViewINS_12Int32AdaptorEED0Ev,b1,__ZN3JSC21GenericTypedArrayViewINS_13Uint32AdaptorEED1Ev,b1,__ZN3JSC21GenericTypedArrayViewINS_12Int32AdaptorEED1Ev,b1,__ZN3JSC21GenericTypedArrayViewINS_13Uint32AdaptorEED0Ev,b1,__ZN3JSC21GenericTypedArrayViewINS_13Uint16AdaptorEED0Ev,b1,__ZN3JSC21GenericTypedArrayViewINS_12Uint8AdaptorEED0Ev,b1,__ZN3JSC21GenericTypedArrayViewINS_14Float32AdaptorEED1Ev,b1,__ZN3WTF14ThreadSpecificINS_13WTFThreadDataEE7destroyEPv,b1,__ZN3JSC21GenericTypedArrayViewINS_14Float64AdaptorEED0Ev
  ,b1,__ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEED1Ev,b1,__ZN3JSC21GenericTypedArrayViewINS_14Float32AdaptorEED0Ev,b1,__ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEED0Ev,b1,__ZN3JSC21GenericTypedArrayViewINS_11Int8AdaptorEED0Ev,b1,__ZN3JSC21GenericTypedArrayViewINS_11Int8AdaptorEED1Ev,b1,__ZN3JSC21GenericTypedArrayViewINS_12Uint8AdaptorEED1Ev,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore21SerializedScriptValueC2ERN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEE,b2,__ZN7WebCore21SerializedScriptValueC2ERKN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEE,b2,b2,b2];
  var FUNCTION_TABLE_iiiiiii = [b3,b3];
  var FUNCTION_TABLE_iiiii = [b4,b4];
  var FUNCTION_TABLE_iiii = [b5,b5,__ZN3JSC21GenericTypedArrayViewINS_12Int16AdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE,b5,__ZN3JSC21GenericTypedArrayViewINS_13Uint16AdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE,b5,__ZN3JSC21GenericTypedArrayViewINS_12Int32AdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE,b5,__ZN3JSC21GenericTypedArrayViewINS_13Uint32AdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE,b5,__ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE,b5,__ZN3JSC21GenericTypedArrayViewINS_14Float64AdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE,b5,__ZN3JSC21GenericTypedArrayViewINS_12Uint8AdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE,b5,__ZN3JSC21GenericTypedArrayViewINS_14Float32AdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE,b5,__ZN3JSC21GenericTypedArrayViewINS_11Int8AdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5];
  var FUNCTION_TABLE_viii = [b6,b6,__ZN7WebCore21SerializedScriptValueC2ERN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEERNS2_INS1_6StringELj0ES3_EE,b6];
  var FUNCTION_TABLE_v = [b7,b7];
  var FUNCTION_TABLE_iii = [b8,b8];
  var FUNCTION_TABLE_viiii = [b9,b9,__ZN7WebCore21SerializedScriptValueC2ERN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEERNS2_INS1_6StringELj0ES3_EENS1_10PassOwnPtrINS2_IN3JSC19ArrayBufferContentsELj0ES3_EEEE,b9];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiiiii: dynCall_iiiiiii, dynCall_iiiii: dynCall_iiiii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiiiii": invoke_iiiiiii, "invoke_iiiii": invoke_iiiii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_pthread_getspecific": _pthread_getspecific, "___setErrNo": ___setErrNo, "_pthread_key_create": _pthread_key_create, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_malloc": _malloc, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_pthread_setspecific": _pthread_setspecific, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "cttz_i8": cttz_i8, "ctlz_i8": ctlz_i8, "NaN": NaN, "Infinity": Infinity, "__ZN3JSC5JSSet6s_infoE": __ZN3JSC5JSSet6s_infoE, "__ZN3JSC12NumberObject6s_infoE": __ZN3JSC12NumberObject6s_infoE, "__ZTVN10Deprecated11ScriptValueE": __ZTVN10Deprecated11ScriptValueE, "__ZN3JSC10JSDataView6s_infoE": __ZN3JSC10JSDataView6s_infoE, "__ZN3JSC13BooleanObject6s_infoE": __ZN3JSC13BooleanObject6s_infoE, "__ZN3JSC12DateInstance6s_infoE": __ZN3JSC12DateInstance6s_infoE, "__ZN7WebCore13JSMessagePort6s_infoE": __ZN7WebCore13JSMessagePort6s_infoE, "__ZN3JSC13JSArrayBuffer6s_infoE": __ZN3JSC13JSArrayBuffer6s_infoE, "__ZN3JSC13JSFinalObject6s_infoE": __ZN3JSC13JSFinalObject6s_infoE, "__ZN3WTF13WTFThreadData10staticDataE": __ZN3WTF13WTFThreadData10staticDataE, "__ZN7WebCore17JSDOMGlobalObject6s_infoE": __ZN7WebCore17JSDOMGlobalObject6s_infoE, "__ZN3JSC5JSMap6s_infoE": __ZN3JSC5JSMap6s_infoE, "__ZN3JSC12StringObject6s_infoE": __ZN3JSC12StringObject6s_infoE, "__ZN3JSC12RegExpObject6s_infoE": __ZN3JSC12RegExpObject6s_infoE, "__ZN3JSC17JSArrayBufferView6s_infoE": __ZN3JSC17JSArrayBufferView6s_infoE, "__ZN3JSC7JSArray6s_infoE": __ZN3JSC7JSArray6s_infoE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = asm["dynCall_iiiiiii"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN3JSC21GenericTypedArrayViewINS_13Uint16AdaptorEED1Ev","__ZN7WebCore12cacheWrapperIN3JSC11ArrayBufferENS1_13JSArrayBufferEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore21SerializedScriptValueD2Ev","__ZN7WebCore17CloneDeserializer14readStringDataERNS0_15CachedStringRefERb","__ZNK3JSC21GenericTypedArrayViewINS_14Float32AdaptorEE7getTypeEv","__ZN7WebCore21SerializedScriptValue6createEPN3JSC9ExecStateENS1_7JSValueEPN3WTF6VectorINS5_6RefPtrINS_11MessagePortEEELj1ENS5_15CrashOnOverflowEEEPNS6_INS7_INS1_11ArrayBufferEEELj1ESA_EENS_22SerializationErrorModeE","__ZN7WebCoreL17writeLittleEndianIjEEvRN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEET_","__ZN3JSC21GenericTypedArrayViewINS_12Int32AdaptorEED0Ev","__ZN7WebCore21SerializedScriptValue20transferArrayBuffersEPN3JSC9ExecStateERN3WTF6VectorINS4_6RefPtrINS1_11ArrayBufferEEELj1ENS4_15CrashOnOverflowEEERNS_23SerializationReturnCodeE","__ZNK3JSC21GenericTypedArrayViewINS_12Int32AdaptorEE7getTypeEv","__ZN3JSC23JSGenericTypedArrayViewINS_14Float32AdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE","__ZN3JSC21GenericTypedArrayViewINS_13Uint16AdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE","__ZN7WebCore21SerializedScriptValueC2ERN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEERNS2_INS1_6StringELj0ES3_EE","__ZN7WebCore21SerializedScriptValue11deserializeEPN3JSC9ExecStateEPNS1_14JSGlobalObjectEPN3WTF6VectorINS6_6RefPtrINS_11MessagePortEEELj1ENS6_15CrashOnOverflowEEENS_22SerializationErrorModeE","__ZN7WebCore15CloneSerializer5writeERKN3WTF6StringE","_memcpy","__ZN3JSC21GenericTypedArrayViewINS_13Uint32AdaptorEED0Ev","__ZN3JSC21GenericTypedArrayViewINS_12Int16AdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj","__ZN7WebCore15CloneSerializer13dumpImmediateEN3JSC7JSValueE","__ZN7WebCore21SerializedScriptValue23deserializeForInspectorEPN3JSC9ExecStateE","__ZN7WebCore21SerializedScriptValue8toStringEv","__ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv","__ZN3WTF9HashTableIPN3JSC8JSObjectENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_RjEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_","__ZN7WebCore17CloneDeserializer21readConstantPoolIndexIN3WTF6VectorINS0_12CachedStringELj0ENS2_15CrashOnOverflowEEEEEbRKT_Rj","__ZN7WebCore21SerializedScriptValue17wireFormatVersionEv","__ZN3JSC23JSGenericTypedArrayViewINS_12Uint8AdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE","__ZN7WebCore15CloneSerializer15fillTransferMapINS_11MessagePortEEEvPN3WTF6VectorINS3_6RefPtrIT_EELj1ENS3_15CrashOnOverflowEEERNS3_7HashMapIPN3JSC8JSObjectEjNS3_7PtrHashISE_EENS3_10HashTraitsISE_EENSH_IjEEEE","__ZNK3JSC21GenericTypedArrayViewINS_12Uint8AdaptorEE10byteLengthEv","__ZN3WTF9HashTableINS_6RefPtrINS_10StringImplEEENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EEN3JSC17IdentifierRepHashENS_22KeyValuePairHashTraitsINS_10HashTraitsIS3_EENSB_IjEEEESC_E3addINS_17HashMapTranslatorISE_S9_EERPS2_iEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SE_SC_EEEEOT0_OT1_","__ZN3WTF14ThreadSpecificINS_13WTFThreadDataEE7destroyEPv","__ZN3WTF6VectorIhLj0ENS_15CrashOnOverflowEE6appendIhEEvPKT_j","__ZN7WebCore17CloneDeserializerD2Ev","__ZN7WebCore15CloneSerializer5writeERKN3JSC10IdentifierE","__ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEED0Ev","__ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_","__ZNK3JSC21GenericTypedArrayViewINS_12Int16AdaptorEE7getTypeEv","__ZN3JSC21GenericTypedArrayViewINS_12Uint8AdaptorEED0Ev","__ZN7WebCore17CloneDeserializer11deserializeEv","__ZN7WebCore21SerializedScriptValue36serializationDidCompleteSuccessfullyENS_23SerializationReturnCodeE","__ZN3JSC21GenericTypedArrayViewINS_11Int8AdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE","__ZN7WebCore15CloneSerializer5writeEd","__ZN7WebCore15CloneSerializer5writeEy","__ZN7WebCore15CloneSerializer16serializeBooleanEbRN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore21SerializedScriptValue11deserializeEPK15OpaqueJSContextPPK13OpaqueJSValue","__ZN7WebCore15CloneSerializer5writeEi","__ZN7WebCore15CloneSerializer5writeEh","__ZNK3JSC21GenericTypedArrayViewINS_13Uint16AdaptorEE7getTypeEv","__ZN3JSC21GenericTypedArrayViewINS_14Float32AdaptorEED0Ev","__ZN7WebCore15CloneSerializer5writeEt","__ZN3JSC21GenericTypedArrayViewINS_13Uint32AdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj","__ZN3WTF7HashMapIPN3JSC8JSObjectEjNS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS6_IjEEE4findERKS3_","__ZN3WTF9HashTableIPNS_10StringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E6expandEPS2_","__ZN3JSC21GenericTypedArrayViewINS_12Uint8AdaptorEED1Ev","__ZN7WebCore21SerializedScriptValue9nullValueEv","__ZN3JSC21GenericTypedArrayViewINS_11Int8AdaptorEED0Ev","__ZNK3JSC21GenericTypedArrayViewINS_14Float32AdaptorEE10byteLengthEv","__ZN7WebCore21SerializedScriptValue12booleanValueEb","__ZNK3JSC21GenericTypedArrayViewINS_13Uint32AdaptorEE10byteLengthEv","__ZN3WTF9HashTableIPN3JSC11ArrayBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_","__ZN3WTF9HashTableIPN3JSC11ArrayBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN3JSC21GenericTypedArrayViewINS_12Int16AdaptorEED0Ev","__ZN3JSC21GenericTypedArrayViewINS_11Int8AdaptorEED1Ev","__ZN7WebCore21SerializedScriptValue6createEPK15OpaqueJSContextPK13OpaqueJSValuePN3WTF6VectorINS7_6RefPtrINS_11MessagePortEEELj1ENS7_15CrashOnOverflowEEEPNS8_INS9_IN3JSC11ArrayBufferEEELj1ESC_EEPS6_","__ZN3JSC21GenericTypedArrayViewINS_14Float64AdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj","__ZN3WTF6VectorIN7WebCore17CloneDeserializer12CachedStringELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS0_11ArrayBufferE","__ZN3JSC21GenericTypedArrayViewINS_12Int32AdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE","__ZN3WTF6VectorINS_6RefPtrIN7WebCore4FileEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN3WTF7HashSetIPN3JSC20MarkedArgumentBufferENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN7WebCore17CloneDeserializer16readLittleEndianIyEEbRPKhS3_RT_","__ZN3WTF6VectorIN3JSC17PropertyNameArrayELj16ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore15CloneSerializer5writeEPKNS_4FileE","__ZN7WebCore15CloneSerializer18serializeUndefinedERN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEE","__ZN3JSC8JSObject14getDirectIndexEPNS_9ExecStateEj","__ZN7WebCore21SerializedScriptValue11numberValueEd","__ZN7WebCore21SerializedScriptValue9serializeERKN10Deprecated11ScriptValueEPN3JSC9ExecStateENS_22SerializationErrorModeE","__ZN3JSC23JSGenericTypedArrayViewINS_13Uint32AdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE","__ZN3JSC21GenericTypedArrayViewINS_14Float32AdaptorEED1Ev","__ZN7WebCore17CloneDeserializer19readArrayBufferViewERN3JSC7JSValueE","__ZN3WTF6VectorIN3JSC10IdentifierELj16ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_","__ZN3JSC23JSGenericTypedArrayViewINS_14Float64AdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE","__ZN7WebCore17CloneDeserializer12readTerminalEv","__ZN3JSC12APIEntryShimD2Ev","__ZNK3JSC21GenericTypedArrayViewINS_11Int8AdaptorEE10byteLengthEv","__ZNK3JSC21GenericTypedArrayViewINS_12Uint8AdaptorEE7getTypeEv","__ZN7WebCore18getExistingWrapperIN3JSC13JSArrayBufferENS1_11ArrayBufferEEENS1_7JSValueEPNS1_9ExecStateEPT0_","__ZN3JSC21GenericTypedArrayViewINS_14Float32AdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj","__ZN7WebCore21SerializedScriptValueC2ERN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore17CloneDeserializer17deserializeStringERKN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEE","_memset","__ZN3JSC21GenericTypedArrayViewINS_12Int16AdaptorEED1Ev","__ZN7WebCore15CloneSerializer17checkForDuplicateEPN3JSC8JSObjectE","__ZN3WTF9HashTableINS_6RefPtrINS_10StringImplEEENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EEN3JSC17IdentifierRepHashENS_22KeyValuePairHashTraitsINS_10HashTraitsIS3_EENSB_IjEEEESC_E6rehashEiPS5_","__ZNK3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE7getTypeEv","__ZN7WebCore15CloneSerializer14dumpIfTerminalEN3JSC7JSValueERNS_23SerializationReturnCodeE","__ZN3WTF9HashTableIPN3JSC8JSObjectENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E6expandEPS5_","__ZN3JSC23JSGenericTypedArrayViewINS_19Uint8ClampedAdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE","__ZN7WebCore15CloneSerializerD2Ev","__ZN7WebCore15CloneSerializer15fillTransferMapIN3JSC11ArrayBufferEEEvPN3WTF6VectorINS4_6RefPtrIT_EELj1ENS4_15CrashOnOverflowEEERNS4_7HashMapIPNS2_8JSObjectEjNS4_7PtrHashISE_EENS4_10HashTraitsISE_EENSH_IjEEEE","__ZN3JSC21GenericTypedArrayViewINS_12Int32AdaptorEED1Ev","__ZN7WebCore15CloneSerializer15serializeNumberEdRN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEE","__ZNK3JSC21GenericTypedArrayViewINS_12Int16AdaptorEE10byteLengthEv","__ZN3WTF6VectorIN3JSC7MapData14const_iteratorELj4ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN3WTF10RefCountedIN3JSC21PropertyNameArrayDataEE5derefEv","__ZNK3JSC21GenericTypedArrayViewINS_11Int8AdaptorEE7getTypeEv","__ZNK3JSC21GenericTypedArrayViewINS_12Int32AdaptorEE10byteLengthEv","__ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE","__ZNK3JSC21GenericTypedArrayViewINS_14Float64AdaptorEE7getTypeEv","__ZN7WebCore21SerializedScriptValueC2ERN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEERNS2_INS1_6StringELj0ES3_EENS1_10PassOwnPtrINS2_IN3JSC19ArrayBufferContentsELj0ES3_EEEE","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN3JSC23JSGenericTypedArrayViewINS_12Int32AdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE","__ZN3JSC8JSString6createERNS_2VMEN3WTF10PassRefPtrINS3_10StringImplEEE","__ZN7WebCore17CloneDeserializer21readConstantPoolIndexIN3JSC20MarkedArgumentBufferEEEbRKT_Rj","__ZN7WebCore21SerializedScriptValueC2ERKN3WTF6VectorIhLj0ENS1_15CrashOnOverflowEEE","_strlen","__ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj","__ZN3JSC21GenericTypedArrayViewINS_14Float64AdaptorEED0Ev","__ZN7WebCore15CloneSerializerC2EPN3JSC9ExecStateEPN3WTF6VectorINS4_6RefPtrINS_11MessagePortEEELj1ENS4_15CrashOnOverflowEEEPNS5_INS6_INS1_11ArrayBufferEEELj1ES9_EERNS5_INS4_6StringELj0ES9_EERNS5_IhLj0ES9_EE","__ZN3JSC21GenericTypedArrayViewINS_14Float32AdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE","__ZN7WebCore21SerializedScriptValue40maybeThrowExceptionIfSerializationFailedEPN3JSC9ExecStateENS_23SerializationReturnCodeE","__ZN7WebCore21SerializedScriptValue9serializeERKN10Deprecated11ScriptValueEPN3JSC9ExecStateEPN3WTF6VectorINS8_6RefPtrINS_11MessagePortEEELj1ENS8_15CrashOnOverflowEEEPNS9_INSA_INS5_11ArrayBufferEEELj1ESD_EERb","__ZN3JSC21GenericTypedArrayViewINS_12Int16AdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE","__ZN7WebCore21SerializedScriptValue11deserializeEPK15OpaqueJSContextPPK13OpaqueJSValuePN3WTF6VectorINS8_6RefPtrINS_11MessagePortEEELj1ENS8_15CrashOnOverflowEEE","__ZN7WebCore15CloneSerializer19dumpArrayBufferViewEPN3JSC8JSObjectERNS_23SerializationReturnCodeE","__ZN3WTF9HashTableIPN3JSC8JSObjectENS_12KeyValuePairIS3_jEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_jS9_NS_10HashTraitsIS3_EENSB_IjEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_iEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_","__ZNK3JSC21GenericTypedArrayViewINS_13Uint32AdaptorEE7getTypeEv","__ZN3WTF6VectorIN3JSC7JSValueELj4ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN3JSC21GenericTypedArrayViewINS_13Uint16AdaptorEED0Ev","__ZN7WebCore17CloneDeserializer10readStringERPKhS2_RN3WTF6StringEj","__ZN7WebCore19WebCoreJSClientData12getAllWorldsERN3WTF6VectorINS1_3RefINS_15DOMWrapperWorldEEELj0ENS1_15CrashOnOverflowEEE","__ZN3JSC21GenericTypedArrayViewINS_14Float64AdaptorEED1Ev","__ZN7WebCore21SerializedScriptValue6createEPK15OpaqueJSContextPK13OpaqueJSValuePS6_","__ZN3JSC23JSGenericTypedArrayViewINS_12Int16AdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE","__ZN7WebCore15CloneSerializer11getPropertyEPN3JSC8JSObjectERKNS1_10IdentifierE","__ZN3JSC21GenericTypedArrayViewINS_13Uint16AdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj","__ZN7WebCore17CloneDeserializer15readArrayBufferERN3WTF6RefPtrIN3JSC11ArrayBufferEEE","__ZN7WebCore15CloneSerializer9serializeERKN3WTF6StringERNS1_6VectorIhLj0ENS1_15CrashOnOverflowEEE","__ZN3JSC7JSArray6createERNS_2VMEPNS_9StructureEj","__ZN3WTF13wtfThreadDataEv","__ZN3JSC23JSGenericTypedArrayViewINS_13Uint16AdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE","__ZN7WebCore21SerializedScriptValue11deserializeEPN3JSC9ExecStateEPNS1_14JSGlobalObjectE","__ZN3JSC21GenericTypedArrayViewINS_13Uint32AdaptorEED1Ev","__ZN7WebCore21SerializedScriptValue6createERKN3WTF6StringE","__ZN3WTF9HashTableIPNS_10StringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_SD_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_","__ZN3JSC23JSGenericTypedArrayViewINS_11Int8AdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE","__ZN3WTF6VectorIhLj0ENS_15CrashOnOverflowEE14appendSlowCaseIjEEvOT_","__ZN7WebCore21SerializedScriptValue6createEPN3JSC9ExecStateENS1_7JSValueE","__ZN3WTF9HashTableIPN3JSC20MarkedArgumentBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6removeEPS3_","__ZN7WebCore15CloneSerializer5writeENS_21ArrayBufferViewSubtagE","__ZN3JSC21GenericTypedArrayViewINS_13Uint32AdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore17CloneDeserializerC2EPN3JSC9ExecStateEPNS1_14JSGlobalObjectEPN3WTF6VectorINS6_6RefPtrINS_11MessagePortEEELj1ENS6_15CrashOnOverflowEEEPNS7_INS1_19ArrayBufferContentsELj0ESB_EERKNS7_IhLj0ESB_EE","__ZN3WTF6VectorIN3JSC17PropertyNameArrayELj16ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_","__ZN3JSC21GenericTypedArrayViewINS_12Uint8AdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj","__ZNK3JSC21GenericTypedArrayViewINS_13Uint16AdaptorEE10byteLengthEv","__ZN7WebCore21SerializedScriptValue11deserializeEPN3JSC9ExecStateEPS0_NS_22SerializationErrorModeE","__ZN3JSC21GenericTypedArrayViewINS_14Float64AdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE","__ZN7WebCore21SerializedScriptValue6createEv","__ZN7WebCore15CloneSerializer5writeENS_16SerializationTagE","__ZNK3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEE10byteLengthEv","__ZN3JSC21GenericTypedArrayViewINS_11Int8AdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj","__ZN3WTF6VectorIN3JSC10IdentifierELj16ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore15CloneSerializer9serializeEN3JSC7JSValueE","__ZN7WebCore17CloneDeserializer8readFileERN3WTF6RefPtrINS_4FileEEE","__ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_","__ZN3JSC21GenericTypedArrayViewINS_12Int32AdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj","__ZN3JSC21GenericTypedArrayViewINS_12Uint8AdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE","__ZN3JSC21GenericTypedArrayViewINS_19Uint8ClampedAdaptorEED1Ev","__ZN3JSC8JSObject15setIndexQuicklyERNS_2VMEjNS_7JSValueE","__ZN7WebCore21SerializedScriptValue14undefinedValueEv","__ZNK3JSC21GenericTypedArrayViewINS_14Float64AdaptorEE10byteLengthEv","_i64Add","_i64Subtract","_bitshift64Shl","_bitshift64Lshr","_bitshift64Ashr","_llvm_ctlz_i32","_llvm_cttz_i32"]

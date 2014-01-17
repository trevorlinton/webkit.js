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
var __ZN7WebCore20FilterEffectRendererC1Ev;
var __ZN7WebCore20FilterEffectRendererD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_fif(index,a1,a2) {
  try {
    return Module["dynCall_fif"](index,a1,a2);
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore6FilterE=(H_BASE+8)|0;
  var __ZTVN7WebCore20FilterEffectRendererE=(H_BASE+56)|0;
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
  var invoke_fif=env.invoke_fif;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore20FilterEffectRenderer5buildEPNS_13RenderElementERKNS_16FilterOperationsENS_14FilterConsumerE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0, i112 = 0, i113 = 0, i114 = 0, i115 = 0, i116 = 0, i117 = 0, i118 = 0, i119 = 0, i120 = 0, i121 = 0, i122 = 0, i123 = 0, i124 = 0, i125 = 0, i126 = 0, i127 = 0, i128 = 0, i129 = 0, i130 = 0, i131 = 0, i132 = 0, i133 = 0, i134 = 0, i135 = 0, i136 = 0, i137 = 0, i138 = 0, i139 = 0, i140 = 0, i141 = 0, i142 = 0, i143 = 0, i144 = 0, i145 = 0, i146 = 0, i147 = 0, i148 = 0, i149 = 0, i150 = 0, i151 = 0, i152 = 0, i153 = 0, i154 = 0, i155 = 0, i156 = 0, i157 = 0, i158 = 0, i159 = 0, i160 = 0, i161 = 0, i162 = 0, i163 = 0, i164 = 0, i165 = 0, i166 = 0, i167 = 0, i168 = 0, i169 = 0, i170 = 0, i171 = 0, i172 = 0, i173 = 0, i174 = 0, i175 = 0, i176 = 0, i177 = 0, d178 = +0, d179 = +0, i180 = 0, i181 = 0, i182 = 0, i183 = 0, i184 = 0, i185 = 0, d186 = +0, i187 = 0, i188 = 0, i189 = 0, i190 = 0, i191 = 0, d192 = +0, i193 = 0, i194 = 0, i195 = 0, d196 = +0, i197 = 0, i198 = 0, i199 = 0, i200 = 0, i201 = 0, i202 = 0, i203 = 0, i204 = 0, i205 = 0, i206 = 0, i207 = 0, i208 = 0, i209 = 0, i210 = 0, i211 = 0, d212 = +0, i213 = 0, i214 = 0, i215 = 0, i216 = 0, i217 = 0, i218 = 0, i219 = 0, i220 = 0, i221 = 0, i222 = 0, i223 = 0, i224 = 0, i225 = 0, i226 = 0, i227 = 0, i228 = 0, i229 = 0, i230 = 0, i231 = 0, i232 = 0, i233 = 0, i234 = 0, i235 = 0, i236 = 0, i237 = 0, i238 = 0, i239 = 0, i240 = 0, i241 = 0, i242 = 0, i243 = 0, i244 = 0, i245 = 0, i246 = 0, i247 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 712 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 32 | 0;
 i10 = i5 + 40 | 0;
 i11 = i5 + 48 | 0;
 i12 = i5 + 56 | 0;
 i13 = i5 + 64 | 0;
 i14 = i5 + 80 | 0;
 i15 = i5 + 88 | 0;
 i16 = i5 + 96 | 0;
 i17 = i5 + 104 | 0;
 i18 = i5 + 112 | 0;
 i19 = i5 + 120 | 0;
 i20 = i5 + 128 | 0;
 i21 = i5 + 136 | 0;
 i22 = i5 + 144 | 0;
 i23 = i5 + 152 | 0;
 i24 = i5 + 168 | 0;
 i25 = i5 + 176 | 0;
 i26 = i5 + 184 | 0;
 i27 = i5 + 192 | 0;
 i28 = i5 + 200 | 0;
 i29 = i5 + 208 | 0;
 i30 = i5 + 216 | 0;
 i31 = i5 + 224 | 0;
 i32 = i5 + 232 | 0;
 i33 = i5 + 240 | 0;
 i34 = i5 + 256 | 0;
 i35 = i5 + 264 | 0;
 i36 = i5 + 280 | 0;
 i37 = i5 + 288 | 0;
 i38 = i5 + 328 | 0;
 i39 = i5 + 344 | 0;
 i40 = i5 + 352 | 0;
 i41 = i5 + 392 | 0;
 i42 = i5 + 400 | 0;
 i43 = i5 + 440 | 0;
 i44 = i5 + 456 | 0;
 i45 = i5 + 464 | 0;
 i46 = i5 + 504 | 0;
 i47 = i5 + 512 | 0;
 i48 = i5 + 552 | 0;
 i49 = i5 + 592 | 0;
 i50 = i5 + 600 | 0;
 i51 = i5 + 640 | 0;
 i52 = i5 + 680 | 0;
 i53 = i5 + 688 | 0;
 i54 = i5 + 696 | 0;
 i55 = i5 + 704 | 0;
 i56 = i55;
 i57 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i58 = i1 + 90 | 0;
 HEAP8[i58] = 0;
 i59 = __ZNK7WebCore16FilterOperations24hasFilterThatMovesPixelsEv(i3) | 0;
 HEAP8[i1 + 89 | 0] = i59 & 1;
 if (i59) {
  __ZNK7WebCore16FilterOperations7outsetsEv(i8, i3);
  i59 = i1 + 72 | 0;
  i60 = i8;
  HEAP32[i59 >> 2] = HEAP32[i60 >> 2];
  HEAP32[i59 + 4 >> 2] = HEAP32[i60 + 4 >> 2];
  HEAP32[i59 + 8 >> 2] = HEAP32[i60 + 8 >> 2];
  HEAP32[i59 + 12 >> 2] = HEAP32[i60 + 12 >> 2];
 }
 i60 = i1 + 56 | 0;
 i59 = i1 + 64 | 0;
 i8 = HEAP32[i59 >> 2] | 0;
 HEAP32[i59 >> 2] = 0;
 i61 = i60 | 0;
 i62 = HEAP32[i61 >> 2] | 0;
 HEAP32[i61 >> 2] = 0;
 i63 = i1 + 60 | 0;
 HEAP32[i63 >> 2] = 0;
 i64 = i9 | 0;
 i65 = HEAP32[i1 + 68 >> 2] | 0;
 HEAP32[i64 >> 2] = i65;
 if ((i65 | 0) != 0) {
  i66 = i65 + 4 | 0;
  HEAP32[i66 >> 2] = (HEAP32[i66 >> 2] | 0) + 1;
 }
 i66 = i3 + 8 | 0;
 i65 = HEAP32[i66 >> 2] | 0;
 L7 : do {
  if ((i65 | 0) != 0) {
   i67 = i10 | 0;
   i68 = i3 | 0;
   i69 = (i4 | 0) == 1 | 0;
   i70 = i9;
   i71 = i10;
   i72 = i12 | 0;
   i73 = i11 | 0;
   i74 = i13 | 0;
   i75 = i13 + 4 | 0;
   i76 = i13 + 8 | 0;
   i77 = i14;
   i78 = i15;
   i79 = i16;
   i80 = i17;
   i81 = i18;
   i82 = i19;
   i83 = i20;
   i84 = i21;
   i85 = i1 | 0;
   i86 = i22 | 0;
   i87 = i23 | 0;
   i88 = i23 + 4 | 0;
   i89 = i23 + 8 | 0;
   i90 = i24;
   i91 = i25;
   i92 = i26;
   i93 = i27;
   i94 = i28;
   i95 = i29;
   i96 = i30;
   i97 = i31;
   i98 = i32 | 0;
   i99 = i33 | 0;
   i100 = i33 + 4 | 0;
   i101 = i33 + 8 | 0;
   i102 = i34 | 0;
   i103 = i35 | 0;
   i104 = i35 + 4 | 0;
   i105 = i35 + 8 | 0;
   i106 = i36 | 0;
   i107 = i37;
   i108 = i37 | 0;
   i109 = i38 | 0;
   i110 = i38 + 4 | 0;
   i111 = i38 + 8 | 0;
   i112 = i39;
   i113 = i37 + 24 | 0;
   i114 = i40;
   i115 = i41 | 0;
   i116 = i40 + 32 | 0;
   i117 = i40 + 24 | 0;
   i118 = i37 + 32 | 0;
   i119 = i37 + 24 | 0;
   i120 = i37 + 28 | 0;
   i121 = i40 + 28 | 0;
   i122 = i42;
   i123 = i42 | 0;
   i124 = i43 | 0;
   i125 = i43 + 4 | 0;
   i126 = i43 + 8 | 0;
   i127 = i44;
   i128 = i42 + 24 | 0;
   i129 = i45;
   i130 = i46 | 0;
   i131 = i45 + 32 | 0;
   i132 = i45 + 24 | 0;
   i133 = i42 + 32 | 0;
   i134 = i42 + 24 | 0;
   i135 = i42 + 28 | 0;
   i136 = i45 + 28 | 0;
   i137 = i47;
   i138 = i47 | 0;
   i139 = i47 + 4 | 0;
   i140 = i47 + 8 | 0;
   i141 = i48;
   i142 = i49 | 0;
   i143 = i48 + 32 | 0;
   i144 = i48 + 24 | 0;
   i145 = i47 + 32 | 0;
   i146 = i47 + 24 | 0;
   i147 = i47 + 28 | 0;
   i148 = i48 + 28 | 0;
   i149 = i50;
   i150 = i50 | 0;
   i151 = i50 + 4 | 0;
   i152 = i50 + 8 | 0;
   i153 = i51;
   i154 = i52 | 0;
   i155 = i51 + 32 | 0;
   i156 = i51 + 24 | 0;
   i157 = i50 + 32 | 0;
   i158 = i50 + 24 | 0;
   i159 = i50 + 28 | 0;
   i160 = i51 + 28 | 0;
   i161 = (i4 | 0) == 0 ? 3 : 1;
   i162 = i53 | 0;
   i163 = i54 | 0;
   i164 = (i2 | 0) == 0;
   i165 = i57 | 0;
   i166 = i2 + 4 | 0;
   i167 = i6 | 0;
   i168 = i7 | 0;
   i169 = 0;
   i170 = i65;
   L9 : while (1) {
    HEAP32[i67 >> 2] = 0;
    if (i170 >>> 0 <= i169 >>> 0) {
     i171 = 8;
     break;
    }
    i172 = HEAP32[(HEAP32[i68 >> 2] | 0) + (i169 << 2) >> 2] | 0;
    i173 = i172;
    L12 : do {
     switch (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i173 >> 2] | 0) + 20 >> 2] & 3](i172) | 0) {
     case 0:
      {
       i174 = HEAP32[i64 >> 2] | 0;
       HEAP32[i72 >> 2] = i174;
       if ((i174 | 0) != 0) {
        i175 = i174 + 4 | 0;
        HEAP32[i175 >> 2] = (HEAP32[i175 >> 2] | 0) + 1;
       }
       __ZN7WebCore20FilterEffectRenderer20buildReferenceFilterEPNS_13RenderElementEN3WTF10PassRefPtrINS_12FilterEffectEEEPNS_24ReferenceFilterOperationE(i11, i1, i2, i12, i172);
       i175 = HEAP32[i73 >> 2] | 0;
       HEAP32[i73 >> 2] = 0;
       i174 = HEAP32[i67 >> 2] | 0;
       HEAP32[i67 >> 2] = i175;
       do {
        if ((i174 | 0) != 0) {
         i175 = i174 + 4 | 0;
         i176 = i175 | 0;
         i177 = (HEAP32[i176 >> 2] | 0) - 1 | 0;
         if ((i177 | 0) != 0) {
          HEAP32[i176 >> 2] = i177;
          break;
         }
         i177 = i175 - 4 | 0;
         if ((i177 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i177 >> 2] | 0) + 4 >> 2] & 15](i177);
        }
       } while (0);
       i174 = HEAP32[i72 >> 2] | 0;
       do {
        if ((i174 | 0) != 0) {
         i177 = i174 + 4 | 0;
         i175 = i177 | 0;
         i176 = (HEAP32[i175 >> 2] | 0) - 1 | 0;
         if ((i176 | 0) != 0) {
          HEAP32[i175 >> 2] = i176;
          break;
         }
         i176 = i177 - 4 | 0;
         if ((i176 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i176 >> 2] | 0) + 4 >> 2] & 15](i176);
        }
       } while (0);
       i174 = HEAP32[i67 >> 2] | 0;
       if ((i174 | 0) != 0) {
        i176 = i174 + 4 | 0;
        HEAP32[i176 >> 2] = (HEAP32[i176 >> 2] | 0) + 1;
       }
       i176 = i172 + 24 | 0;
       i177 = HEAP32[i176 >> 2] | 0;
       HEAP32[i176 >> 2] = i174;
       if ((i177 | 0) == 0) {
        i171 = 714;
        break L12;
       }
       i174 = i177 + 4 | 0;
       i177 = i174 | 0;
       i176 = (HEAP32[i177 >> 2] | 0) - 1 | 0;
       if ((i176 | 0) != 0) {
        HEAP32[i177 >> 2] = i176;
        i171 = 714;
        break L12;
       }
       i176 = i174 - 4 | 0;
       if ((i176 | 0) == 0) {
        i171 = 714;
        break L12;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i176 >> 2] | 0) + 4 >> 2] & 15](i176);
       i171 = 714;
       break;
      }
     case 1:
      {
       HEAP32[i74 >> 2] = 0;
       HEAP32[i75 >> 2] = 0;
       HEAP32[i76 >> 2] = 0;
       d178 = +1 - +HEAPF64[i172 + 16 >> 3];
       if (d178 < +1) {
        d179 = d178 > +0 ? d178 : +0;
       } else {
        d179 = +1;
       }
       i176 = __ZN3WTF18fastMallocGoodSizeEj(64) | 0;
       HEAP32[i75 >> 2] = i176 >>> 2;
       i174 = __ZN3WTF10fastMallocEj(i176) | 0;
       HEAP32[i74 >> 2] = i174;
       HEAPF32[i174 + (HEAP32[i76 >> 2] << 2) >> 2] = d179 * +.7874 + +.2126;
       i174 = HEAP32[i76 >> 2] | 0;
       i176 = i174 + 1 | 0;
       HEAP32[i76 >> 2] = i176;
       d178 = +.7152 - d179 * +.7152;
       HEAPF32[i14 >> 2] = d178;
       if ((i176 | 0) == (HEAP32[i75 >> 2] | 0)) {
        i177 = i174 + 2 | 0;
        i174 = HEAP32[i74 >> 2] | 0;
        do {
         if (i174 >>> 0 > i14 >>> 0) {
          i171 = 35;
         } else {
          if ((i174 + (i176 << 2) | 0) >>> 0 <= i14 >>> 0) {
           i171 = 35;
           break;
          }
          i175 = i77 - i174 >> 2;
          i180 = i177 + (i176 >>> 2) | 0;
          i181 = i180 >>> 0 > 16 >>> 0 ? i180 : 16;
          i180 = i181 >>> 0 > i177 >>> 0 ? i181 : i177;
          do {
           if (i176 >>> 0 < i180 >>> 0) {
            if (i180 >>> 0 > 1073741823 >>> 0) {
             i171 = 45;
             break L9;
            }
            i181 = __ZN3WTF18fastMallocGoodSizeEj(i180 << 2) | 0;
            HEAP32[i75 >> 2] = i181 >>> 2;
            i182 = __ZN3WTF10fastMallocEj(i181) | 0;
            HEAP32[i74 >> 2] = i182;
            i181 = i174;
            _memcpy(i182 | 0, i181 | 0, i176 << 2) | 0;
            if ((i174 | 0) == 0) {
             break;
            }
            if ((HEAP32[i74 >> 2] | 0) == (i174 | 0)) {
             HEAP32[i74 >> 2] = 0;
             HEAP32[i75 >> 2] = 0;
            }
            __ZN3WTF8fastFreeEPv(i181);
           }
          } while (0);
          i180 = HEAP32[i74 >> 2] | 0;
          i183 = i180 + (i175 << 2) | 0;
          i184 = i180;
         }
        } while (0);
        if ((i171 | 0) == 35) {
         i171 = 0;
         i180 = i177 + (i176 >>> 2) | 0;
         i181 = i180 >>> 0 > 16 >>> 0 ? i180 : 16;
         i180 = i181 >>> 0 > i177 >>> 0 ? i181 : i177;
         do {
          if (i176 >>> 0 < i180 >>> 0) {
           if (i180 >>> 0 > 1073741823 >>> 0) {
            i171 = 37;
            break L9;
           }
           i181 = __ZN3WTF18fastMallocGoodSizeEj(i180 << 2) | 0;
           HEAP32[i75 >> 2] = i181 >>> 2;
           i182 = __ZN3WTF10fastMallocEj(i181) | 0;
           HEAP32[i74 >> 2] = i182;
           i181 = i174;
           _memcpy(i182 | 0, i181 | 0, i176 << 2) | 0;
           if ((i174 | 0) == 0) {
            break;
           }
           if ((HEAP32[i74 >> 2] | 0) == (i174 | 0)) {
            HEAP32[i74 >> 2] = 0;
            HEAP32[i75 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i181);
          }
         } while (0);
         i183 = i14;
         i184 = HEAP32[i74 >> 2] | 0;
        }
        HEAPF32[i184 + (HEAP32[i76 >> 2] << 2) >> 2] = +HEAPF32[i183 >> 2];
        i185 = HEAP32[i76 >> 2] | 0;
       } else {
        HEAPF32[(HEAP32[i74 >> 2] | 0) + (i176 << 2) >> 2] = d178;
        i185 = HEAP32[i76 >> 2] | 0;
       }
       i174 = i185 + 1 | 0;
       HEAP32[i76 >> 2] = i174;
       d186 = +.0722 - d179 * +.0722;
       HEAPF32[i15 >> 2] = d186;
       if ((i174 | 0) == (HEAP32[i75 >> 2] | 0)) {
        i180 = i185 + 2 | 0;
        i177 = HEAP32[i74 >> 2] | 0;
        do {
         if (i177 >>> 0 > i15 >>> 0) {
          i171 = 56;
         } else {
          if ((i177 + (i174 << 2) | 0) >>> 0 <= i15 >>> 0) {
           i171 = 56;
           break;
          }
          i181 = i78 - i177 >> 2;
          i182 = i180 + (i174 >>> 2) | 0;
          i187 = i182 >>> 0 > 16 >>> 0 ? i182 : 16;
          i182 = i187 >>> 0 > i180 >>> 0 ? i187 : i180;
          do {
           if (i174 >>> 0 < i182 >>> 0) {
            if (i182 >>> 0 > 1073741823 >>> 0) {
             i171 = 66;
             break L9;
            }
            i187 = __ZN3WTF18fastMallocGoodSizeEj(i182 << 2) | 0;
            HEAP32[i75 >> 2] = i187 >>> 2;
            i188 = __ZN3WTF10fastMallocEj(i187) | 0;
            HEAP32[i74 >> 2] = i188;
            i187 = i177;
            _memcpy(i188 | 0, i187 | 0, i174 << 2) | 0;
            if ((i177 | 0) == 0) {
             break;
            }
            if ((HEAP32[i74 >> 2] | 0) == (i177 | 0)) {
             HEAP32[i74 >> 2] = 0;
             HEAP32[i75 >> 2] = 0;
            }
            __ZN3WTF8fastFreeEPv(i187);
           }
          } while (0);
          i182 = HEAP32[i74 >> 2] | 0;
          i189 = i182 + (i181 << 2) | 0;
          i190 = i182;
         }
        } while (0);
        if ((i171 | 0) == 56) {
         i171 = 0;
         i176 = i180 + (i174 >>> 2) | 0;
         i182 = i176 >>> 0 > 16 >>> 0 ? i176 : 16;
         i176 = i182 >>> 0 > i180 >>> 0 ? i182 : i180;
         do {
          if (i174 >>> 0 < i176 >>> 0) {
           if (i176 >>> 0 > 1073741823 >>> 0) {
            i171 = 58;
            break L9;
           }
           i182 = __ZN3WTF18fastMallocGoodSizeEj(i176 << 2) | 0;
           HEAP32[i75 >> 2] = i182 >>> 2;
           i175 = __ZN3WTF10fastMallocEj(i182) | 0;
           HEAP32[i74 >> 2] = i175;
           i182 = i177;
           _memcpy(i175 | 0, i182 | 0, i174 << 2) | 0;
           if ((i177 | 0) == 0) {
            break;
           }
           if ((HEAP32[i74 >> 2] | 0) == (i177 | 0)) {
            HEAP32[i74 >> 2] = 0;
            HEAP32[i75 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i182);
          }
         } while (0);
         i189 = i15;
         i190 = HEAP32[i74 >> 2] | 0;
        }
        HEAPF32[i190 + (HEAP32[i76 >> 2] << 2) >> 2] = +HEAPF32[i189 >> 2];
        i191 = HEAP32[i76 >> 2] | 0;
       } else {
        HEAPF32[(HEAP32[i74 >> 2] | 0) + (i174 << 2) >> 2] = d186;
        i191 = HEAP32[i76 >> 2] | 0;
       }
       i177 = i191 + 1 | 0;
       HEAP32[i76 >> 2] = i177;
       if ((i177 | 0) == (HEAP32[i75 >> 2] | 0)) {
        i176 = i191 + 2 | 0;
        i180 = i191 + 2 + (i177 >>> 2) | 0;
        i182 = i180 >>> 0 > 16 >>> 0 ? i180 : 16;
        i180 = i182 >>> 0 > i176 >>> 0 ? i182 : i176;
        do {
         if (i177 >>> 0 < i180 >>> 0) {
          i176 = HEAP32[i74 >> 2] | 0;
          if (i180 >>> 0 > 1073741823 >>> 0) {
           i171 = 77;
           break L9;
          }
          i182 = __ZN3WTF18fastMallocGoodSizeEj(i180 << 2) | 0;
          HEAP32[i75 >> 2] = i182 >>> 2;
          i175 = __ZN3WTF10fastMallocEj(i182) | 0;
          HEAP32[i74 >> 2] = i175;
          i182 = i176;
          _memcpy(i175 | 0, i182 | 0, i177 << 2) | 0;
          if ((i176 | 0) == 0) {
           break;
          }
          if ((HEAP32[i74 >> 2] | 0) == (i176 | 0)) {
           HEAP32[i74 >> 2] = 0;
           HEAP32[i75 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i182);
         }
        } while (0);
        HEAPF32[(HEAP32[i74 >> 2] | 0) + (HEAP32[i76 >> 2] << 2) >> 2] = +0;
       } else {
        HEAPF32[(HEAP32[i74 >> 2] | 0) + (i177 << 2) >> 2] = +0;
       }
       i180 = HEAP32[i76 >> 2] | 0;
       i174 = i180 + 1 | 0;
       HEAP32[i76 >> 2] = i174;
       if ((i174 | 0) == (HEAP32[i75 >> 2] | 0)) {
        i182 = i180 + 2 | 0;
        i176 = i180 + 2 + (i174 >>> 2) | 0;
        i180 = i176 >>> 0 > 16 >>> 0 ? i176 : 16;
        i176 = i180 >>> 0 > i182 >>> 0 ? i180 : i182;
        do {
         if (i174 >>> 0 < i176 >>> 0) {
          i182 = HEAP32[i74 >> 2] | 0;
          if (i176 >>> 0 > 1073741823 >>> 0) {
           i171 = 87;
           break L9;
          }
          i180 = __ZN3WTF18fastMallocGoodSizeEj(i176 << 2) | 0;
          HEAP32[i75 >> 2] = i180 >>> 2;
          i175 = __ZN3WTF10fastMallocEj(i180) | 0;
          HEAP32[i74 >> 2] = i175;
          i180 = i182;
          _memcpy(i175 | 0, i180 | 0, i174 << 2) | 0;
          if ((i182 | 0) == 0) {
           break;
          }
          if ((HEAP32[i74 >> 2] | 0) == (i182 | 0)) {
           HEAP32[i74 >> 2] = 0;
           HEAP32[i75 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i180);
         }
        } while (0);
        HEAPF32[(HEAP32[i74 >> 2] | 0) + (HEAP32[i76 >> 2] << 2) >> 2] = +0;
       } else {
        HEAPF32[(HEAP32[i74 >> 2] | 0) + (i174 << 2) >> 2] = +0;
       }
       i176 = HEAP32[i76 >> 2] | 0;
       i177 = i176 + 1 | 0;
       HEAP32[i76 >> 2] = i177;
       d192 = +.2126 - d179 * +.2126;
       HEAPF32[i16 >> 2] = d192;
       if ((i177 | 0) == (HEAP32[i75 >> 2] | 0)) {
        i180 = i176 + 2 | 0;
        i176 = HEAP32[i74 >> 2] | 0;
        do {
         if (i176 >>> 0 > i16 >>> 0) {
          i171 = 97;
         } else {
          if ((i176 + (i177 << 2) | 0) >>> 0 <= i16 >>> 0) {
           i171 = 97;
           break;
          }
          i182 = i79 - i176 >> 2;
          i175 = i180 + (i177 >>> 2) | 0;
          i187 = i175 >>> 0 > 16 >>> 0 ? i175 : 16;
          i175 = i187 >>> 0 > i180 >>> 0 ? i187 : i180;
          do {
           if (i177 >>> 0 < i175 >>> 0) {
            if (i175 >>> 0 > 1073741823 >>> 0) {
             i171 = 107;
             break L9;
            }
            i187 = __ZN3WTF18fastMallocGoodSizeEj(i175 << 2) | 0;
            HEAP32[i75 >> 2] = i187 >>> 2;
            i188 = __ZN3WTF10fastMallocEj(i187) | 0;
            HEAP32[i74 >> 2] = i188;
            i187 = i176;
            _memcpy(i188 | 0, i187 | 0, i177 << 2) | 0;
            if ((i176 | 0) == 0) {
             break;
            }
            if ((HEAP32[i74 >> 2] | 0) == (i176 | 0)) {
             HEAP32[i74 >> 2] = 0;
             HEAP32[i75 >> 2] = 0;
            }
            __ZN3WTF8fastFreeEPv(i187);
           }
          } while (0);
          i175 = HEAP32[i74 >> 2] | 0;
          i193 = i175 + (i182 << 2) | 0;
          i194 = i175;
         }
        } while (0);
        if ((i171 | 0) == 97) {
         i171 = 0;
         i174 = i180 + (i177 >>> 2) | 0;
         i175 = i174 >>> 0 > 16 >>> 0 ? i174 : 16;
         i174 = i175 >>> 0 > i180 >>> 0 ? i175 : i180;
         do {
          if (i177 >>> 0 < i174 >>> 0) {
           if (i174 >>> 0 > 1073741823 >>> 0) {
            i171 = 99;
            break L9;
           }
           i175 = __ZN3WTF18fastMallocGoodSizeEj(i174 << 2) | 0;
           HEAP32[i75 >> 2] = i175 >>> 2;
           i181 = __ZN3WTF10fastMallocEj(i175) | 0;
           HEAP32[i74 >> 2] = i181;
           i175 = i176;
           _memcpy(i181 | 0, i175 | 0, i177 << 2) | 0;
           if ((i176 | 0) == 0) {
            break;
           }
           if ((HEAP32[i74 >> 2] | 0) == (i176 | 0)) {
            HEAP32[i74 >> 2] = 0;
            HEAP32[i75 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i175);
          }
         } while (0);
         i193 = i16;
         i194 = HEAP32[i74 >> 2] | 0;
        }
        HEAPF32[i194 + (HEAP32[i76 >> 2] << 2) >> 2] = +HEAPF32[i193 >> 2];
        i195 = HEAP32[i76 >> 2] | 0;
       } else {
        HEAPF32[(HEAP32[i74 >> 2] | 0) + (i177 << 2) >> 2] = d192;
        i195 = HEAP32[i76 >> 2] | 0;
       }
       i176 = i195 + 1 | 0;
       HEAP32[i76 >> 2] = i176;
       d196 = d179 * +.2848 + +.7152;
       HEAPF32[i17 >> 2] = d196;
       if ((i176 | 0) == (HEAP32[i75 >> 2] | 0)) {
        i174 = i195 + 2 | 0;
        i180 = HEAP32[i74 >> 2] | 0;
        do {
         if (i180 >>> 0 > i17 >>> 0) {
          i171 = 118;
         } else {
          if ((i180 + (i176 << 2) | 0) >>> 0 <= i17 >>> 0) {
           i171 = 118;
           break;
          }
          i175 = i80 - i180 >> 2;
          i181 = i174 + (i176 >>> 2) | 0;
          i187 = i181 >>> 0 > 16 >>> 0 ? i181 : 16;
          i181 = i187 >>> 0 > i174 >>> 0 ? i187 : i174;
          do {
           if (i176 >>> 0 < i181 >>> 0) {
            if (i181 >>> 0 > 1073741823 >>> 0) {
             i171 = 128;
             break L9;
            }
            i187 = __ZN3WTF18fastMallocGoodSizeEj(i181 << 2) | 0;
            HEAP32[i75 >> 2] = i187 >>> 2;
            i188 = __ZN3WTF10fastMallocEj(i187) | 0;
            HEAP32[i74 >> 2] = i188;
            i187 = i180;
            _memcpy(i188 | 0, i187 | 0, i176 << 2) | 0;
            if ((i180 | 0) == 0) {
             break;
            }
            if ((HEAP32[i74 >> 2] | 0) == (i180 | 0)) {
             HEAP32[i74 >> 2] = 0;
             HEAP32[i75 >> 2] = 0;
            }
            __ZN3WTF8fastFreeEPv(i187);
           }
          } while (0);
          i181 = HEAP32[i74 >> 2] | 0;
          i197 = i181 + (i175 << 2) | 0;
          i198 = i181;
         }
        } while (0);
        if ((i171 | 0) == 118) {
         i171 = 0;
         i177 = i174 + (i176 >>> 2) | 0;
         i181 = i177 >>> 0 > 16 >>> 0 ? i177 : 16;
         i177 = i181 >>> 0 > i174 >>> 0 ? i181 : i174;
         do {
          if (i176 >>> 0 < i177 >>> 0) {
           if (i177 >>> 0 > 1073741823 >>> 0) {
            i171 = 120;
            break L9;
           }
           i181 = __ZN3WTF18fastMallocGoodSizeEj(i177 << 2) | 0;
           HEAP32[i75 >> 2] = i181 >>> 2;
           i182 = __ZN3WTF10fastMallocEj(i181) | 0;
           HEAP32[i74 >> 2] = i182;
           i181 = i180;
           _memcpy(i182 | 0, i181 | 0, i176 << 2) | 0;
           if ((i180 | 0) == 0) {
            break;
           }
           if ((HEAP32[i74 >> 2] | 0) == (i180 | 0)) {
            HEAP32[i74 >> 2] = 0;
            HEAP32[i75 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i181);
          }
         } while (0);
         i197 = i17;
         i198 = HEAP32[i74 >> 2] | 0;
        }
        HEAPF32[i198 + (HEAP32[i76 >> 2] << 2) >> 2] = +HEAPF32[i197 >> 2];
        i199 = HEAP32[i76 >> 2] | 0;
       } else {
        HEAPF32[(HEAP32[i74 >> 2] | 0) + (i176 << 2) >> 2] = d196;
        i199 = HEAP32[i76 >> 2] | 0;
       }
       i180 = i199 + 1 | 0;
       HEAP32[i76 >> 2] = i180;
       HEAPF32[i18 >> 2] = d186;
       if ((i180 | 0) == (HEAP32[i75 >> 2] | 0)) {
        i177 = i199 + 2 | 0;
        i174 = HEAP32[i74 >> 2] | 0;
        do {
         if (i174 >>> 0 > i18 >>> 0) {
          i171 = 139;
         } else {
          if ((i174 + (i180 << 2) | 0) >>> 0 <= i18 >>> 0) {
           i171 = 139;
           break;
          }
          i181 = i81 - i174 >> 2;
          i182 = i177 + (i180 >>> 2) | 0;
          i187 = i182 >>> 0 > 16 >>> 0 ? i182 : 16;
          i182 = i187 >>> 0 > i177 >>> 0 ? i187 : i177;
          do {
           if (i180 >>> 0 < i182 >>> 0) {
            if (i182 >>> 0 > 1073741823 >>> 0) {
             i171 = 149;
             break L9;
            }
            i187 = __ZN3WTF18fastMallocGoodSizeEj(i182 << 2) | 0;
            HEAP32[i75 >> 2] = i187 >>> 2;
            i188 = __ZN3WTF10fastMallocEj(i187) | 0;
            HEAP32[i74 >> 2] = i188;
            i187 = i174;
            _memcpy(i188 | 0, i187 | 0, i180 << 2) | 0;
            if ((i174 | 0) == 0) {
             break;
            }
            if ((HEAP32[i74 >> 2] | 0) == (i174 | 0)) {
             HEAP32[i74 >> 2] = 0;
             HEAP32[i75 >> 2] = 0;
            }
            __ZN3WTF8fastFreeEPv(i187);
           }
          } while (0);
          i182 = HEAP32[i74 >> 2] | 0;
          i200 = i182 + (i181 << 2) | 0;
          i201 = i182;
         }
        } while (0);
        if ((i171 | 0) == 139) {
         i171 = 0;
         i176 = i177 + (i180 >>> 2) | 0;
         i182 = i176 >>> 0 > 16 >>> 0 ? i176 : 16;
         i176 = i182 >>> 0 > i177 >>> 0 ? i182 : i177;
         do {
          if (i180 >>> 0 < i176 >>> 0) {
           if (i176 >>> 0 > 1073741823 >>> 0) {
            i171 = 141;
            break L9;
           }
           i182 = __ZN3WTF18fastMallocGoodSizeEj(i176 << 2) | 0;
           HEAP32[i75 >> 2] = i182 >>> 2;
           i175 = __ZN3WTF10fastMallocEj(i182) | 0;
           HEAP32[i74 >> 2] = i175;
           i182 = i174;
           _memcpy(i175 | 0, i182 | 0, i180 << 2) | 0;
           if ((i174 | 0) == 0) {
            break;
           }
           if ((HEAP32[i74 >> 2] | 0) == (i174 | 0)) {
            HEAP32[i74 >> 2] = 0;
            HEAP32[i75 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i182);
          }
         } while (0);
         i200 = i18;
         i201 = HEAP32[i74 >> 2] | 0;
        }
        HEAPF32[i201 + (HEAP32[i76 >> 2] << 2) >> 2] = +HEAPF32[i200 >> 2];
        i202 = HEAP32[i76 >> 2] | 0;
       } else {
        HEAPF32[(HEAP32[i74 >> 2] | 0) + (i180 << 2) >> 2] = d186;
        i202 = HEAP32[i76 >> 2] | 0;
       }
       i174 = i202 + 1 | 0;
       HEAP32[i76 >> 2] = i174;
       if ((i174 | 0) == (HEAP32[i75 >> 2] | 0)) {
        i176 = i202 + 2 | 0;
        i177 = i202 + 2 + (i174 >>> 2) | 0;
        i182 = i177 >>> 0 > 16 >>> 0 ? i177 : 16;
        i177 = i182 >>> 0 > i176 >>> 0 ? i182 : i176;
        do {
         if (i174 >>> 0 < i177 >>> 0) {
          i176 = HEAP32[i74 >> 2] | 0;
          if (i177 >>> 0 > 1073741823 >>> 0) {
           i171 = 160;
           break L9;
          }
          i182 = __ZN3WTF18fastMallocGoodSizeEj(i177 << 2) | 0;
          HEAP32[i75 >> 2] = i182 >>> 2;
          i175 = __ZN3WTF10fastMallocEj(i182) | 0;
          HEAP32[i74 >> 2] = i175;
          i182 = i176;
          _memcpy(i175 | 0, i182 | 0, i174 << 2) | 0;
          if ((i176 | 0) == 0) {
           break;
          }
          if ((HEAP32[i74 >> 2] | 0) == (i176 | 0)) {
           HEAP32[i74 >> 2] = 0;
           HEAP32[i75 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i182);
         }
        } while (0);
        HEAPF32[(HEAP32[i74 >> 2] | 0) + (HEAP32[i76 >> 2] << 2) >> 2] = +0;
       } else {
        HEAPF32[(HEAP32[i74 >> 2] | 0) + (i174 << 2) >> 2] = +0;
       }
       i177 = HEAP32[i76 >> 2] | 0;
       i180 = i177 + 1 | 0;
       HEAP32[i76 >> 2] = i180;
       if ((i180 | 0) == (HEAP32[i75 >> 2] | 0)) {
        i182 = i177 + 2 | 0;
        i176 = i177 + 2 + (i180 >>> 2) | 0;
        i177 = i176 >>> 0 > 16 >>> 0 ? i176 : 16;
        i176 = i177 >>> 0 > i182 >>> 0 ? i177 : i182;
        do {
         if (i180 >>> 0 < i176 >>> 0) {
          i182 = HEAP32[i74 >> 2] | 0;
          if (i176 >>> 0 > 1073741823 >>> 0) {
           i171 = 170;
           break L9;
          }
          i177 = __ZN3WTF18fastMallocGoodSizeEj(i176 << 2) | 0;
          HEAP32[i75 >> 2] = i177 >>> 2;
          i175 = __ZN3WTF10fastMallocEj(i177) | 0;
          HEAP32[i74 >> 2] = i175;
          i177 = i182;
          _memcpy(i175 | 0, i177 | 0, i180 << 2) | 0;
          if ((i182 | 0) == 0) {
           break;
          }
          if ((HEAP32[i74 >> 2] | 0) == (i182 | 0)) {
           HEAP32[i74 >> 2] = 0;
           HEAP32[i75 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i177);
         }
        } while (0);
        HEAPF32[(HEAP32[i74 >> 2] | 0) + (HEAP32[i76 >> 2] << 2) >> 2] = +0;
       } else {
        HEAPF32[(HEAP32[i74 >> 2] | 0) + (i180 << 2) >> 2] = +0;
       }
       i176 = HEAP32[i76 >> 2] | 0;
       i174 = i176 + 1 | 0;
       HEAP32[i76 >> 2] = i174;
       HEAPF32[i19 >> 2] = d192;
       if ((i174 | 0) == (HEAP32[i75 >> 2] | 0)) {
        i177 = i176 + 2 | 0;
        i176 = HEAP32[i74 >> 2] | 0;
        do {
         if (i176 >>> 0 > i19 >>> 0) {
          i171 = 180;
         } else {
          if ((i176 + (i174 << 2) | 0) >>> 0 <= i19 >>> 0) {
           i171 = 180;
           break;
          }
          i182 = i82 - i176 >> 2;
          i175 = i177 + (i174 >>> 2) | 0;
          i187 = i175 >>> 0 > 16 >>> 0 ? i175 : 16;
          i175 = i187 >>> 0 > i177 >>> 0 ? i187 : i177;
          do {
           if (i174 >>> 0 < i175 >>> 0) {
            if (i175 >>> 0 > 1073741823 >>> 0) {
             i171 = 190;
             break L9;
            }
            i187 = __ZN3WTF18fastMallocGoodSizeEj(i175 << 2) | 0;
            HEAP32[i75 >> 2] = i187 >>> 2;
            i188 = __ZN3WTF10fastMallocEj(i187) | 0;
            HEAP32[i74 >> 2] = i188;
            i187 = i176;
            _memcpy(i188 | 0, i187 | 0, i174 << 2) | 0;
            if ((i176 | 0) == 0) {
             break;
            }
            if ((HEAP32[i74 >> 2] | 0) == (i176 | 0)) {
             HEAP32[i74 >> 2] = 0;
             HEAP32[i75 >> 2] = 0;
            }
            __ZN3WTF8fastFreeEPv(i187);
           }
          } while (0);
          i175 = HEAP32[i74 >> 2] | 0;
          i203 = i175 + (i182 << 2) | 0;
          i204 = i175;
         }
        } while (0);
        if ((i171 | 0) == 180) {
         i171 = 0;
         i180 = i177 + (i174 >>> 2) | 0;
         i175 = i180 >>> 0 > 16 >>> 0 ? i180 : 16;
         i180 = i175 >>> 0 > i177 >>> 0 ? i175 : i177;
         do {
          if (i174 >>> 0 < i180 >>> 0) {
           if (i180 >>> 0 > 1073741823 >>> 0) {
            i171 = 182;
            break L9;
           }
           i175 = __ZN3WTF18fastMallocGoodSizeEj(i180 << 2) | 0;
           HEAP32[i75 >> 2] = i175 >>> 2;
           i181 = __ZN3WTF10fastMallocEj(i175) | 0;
           HEAP32[i74 >> 2] = i181;
           i175 = i176;
           _memcpy(i181 | 0, i175 | 0, i174 << 2) | 0;
           if ((i176 | 0) == 0) {
            break;
           }
           if ((HEAP32[i74 >> 2] | 0) == (i176 | 0)) {
            HEAP32[i74 >> 2] = 0;
            HEAP32[i75 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i175);
          }
         } while (0);
         i203 = i19;
         i204 = HEAP32[i74 >> 2] | 0;
        }
        HEAPF32[i204 + (HEAP32[i76 >> 2] << 2) >> 2] = +HEAPF32[i203 >> 2];
        i205 = HEAP32[i76 >> 2] | 0;
       } else {
        HEAPF32[(HEAP32[i74 >> 2] | 0) + (i174 << 2) >> 2] = d192;
        i205 = HEAP32[i76 >> 2] | 0;
       }
       i176 = i205 + 1 | 0;
       HEAP32[i76 >> 2] = i176;
       HEAPF32[i20 >> 2] = d178;
       if ((i176 | 0) == (HEAP32[i75 >> 2] | 0)) {
        i180 = i205 + 2 | 0;
        i177 = HEAP32[i74 >> 2] | 0;
        do {
         if (i177 >>> 0 > i20 >>> 0) {
          i171 = 201;
         } else {
          if ((i177 + (i176 << 2) | 0) >>> 0 <= i20 >>> 0) {
           i171 = 201;
           break;
          }
          i175 = i83 - i177 >> 2;
          i181 = i180 + (i176 >>> 2) | 0;
          i187 = i181 >>> 0 > 16 >>> 0 ? i181 : 16;
          i181 = i187 >>> 0 > i180 >>> 0 ? i187 : i180;
          do {
           if (i176 >>> 0 < i181 >>> 0) {
            if (i181 >>> 0 > 1073741823 >>> 0) {
             i171 = 211;
             break L9;
            }
            i187 = __ZN3WTF18fastMallocGoodSizeEj(i181 << 2) | 0;
            HEAP32[i75 >> 2] = i187 >>> 2;
            i188 = __ZN3WTF10fastMallocEj(i187) | 0;
            HEAP32[i74 >> 2] = i188;
            i187 = i177;
            _memcpy(i188 | 0, i187 | 0, i176 << 2) | 0;
            if ((i177 | 0) == 0) {
             break;
            }
            if ((HEAP32[i74 >> 2] | 0) == (i177 | 0)) {
             HEAP32[i74 >> 2] = 0;
             HEAP32[i75 >> 2] = 0;
            }
            __ZN3WTF8fastFreeEPv(i187);
           }
          } while (0);
          i181 = HEAP32[i74 >> 2] | 0;
          i206 = i181 + (i175 << 2) | 0;
          i207 = i181;
         }
        } while (0);
        if ((i171 | 0) == 201) {
         i171 = 0;
         i174 = i180 + (i176 >>> 2) | 0;
         i181 = i174 >>> 0 > 16 >>> 0 ? i174 : 16;
         i174 = i181 >>> 0 > i180 >>> 0 ? i181 : i180;
         do {
          if (i176 >>> 0 < i174 >>> 0) {
           if (i174 >>> 0 > 1073741823 >>> 0) {
            i171 = 203;
            break L9;
           }
           i181 = __ZN3WTF18fastMallocGoodSizeEj(i174 << 2) | 0;
           HEAP32[i75 >> 2] = i181 >>> 2;
           i182 = __ZN3WTF10fastMallocEj(i181) | 0;
           HEAP32[i74 >> 2] = i182;
           i181 = i177;
           _memcpy(i182 | 0, i181 | 0, i176 << 2) | 0;
           if ((i177 | 0) == 0) {
            break;
           }
           if ((HEAP32[i74 >> 2] | 0) == (i177 | 0)) {
            HEAP32[i74 >> 2] = 0;
            HEAP32[i75 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i181);
          }
         } while (0);
         i206 = i20;
         i207 = HEAP32[i74 >> 2] | 0;
        }
        HEAPF32[i207 + (HEAP32[i76 >> 2] << 2) >> 2] = +HEAPF32[i206 >> 2];
        i208 = HEAP32[i76 >> 2] | 0;
       } else {
        HEAPF32[(HEAP32[i74 >> 2] | 0) + (i176 << 2) >> 2] = d178;
        i208 = HEAP32[i76 >> 2] | 0;
       }
       i177 = i208 + 1 | 0;
       HEAP32[i76 >> 2] = i177;
       d192 = d179 * +.9278 + +.0722;
       HEAPF32[i21 >> 2] = d192;
       if ((i177 | 0) == (HEAP32[i75 >> 2] | 0)) {
        i174 = i208 + 2 | 0;
        i180 = HEAP32[i74 >> 2] | 0;
        do {
         if (i180 >>> 0 > i21 >>> 0) {
          i171 = 222;
         } else {
          if ((i180 + (i177 << 2) | 0) >>> 0 <= i21 >>> 0) {
           i171 = 222;
           break;
          }
          i181 = i84 - i180 >> 2;
          i182 = i174 + (i177 >>> 2) | 0;
          i187 = i182 >>> 0 > 16 >>> 0 ? i182 : 16;
          i182 = i187 >>> 0 > i174 >>> 0 ? i187 : i174;
          do {
           if (i177 >>> 0 < i182 >>> 0) {
            if (i182 >>> 0 > 1073741823 >>> 0) {
             i171 = 232;
             break L9;
            }
            i187 = __ZN3WTF18fastMallocGoodSizeEj(i182 << 2) | 0;
            HEAP32[i75 >> 2] = i187 >>> 2;
            i188 = __ZN3WTF10fastMallocEj(i187) | 0;
            HEAP32[i74 >> 2] = i188;
            i187 = i180;
            _memcpy(i188 | 0, i187 | 0, i177 << 2) | 0;
            if ((i180 | 0) == 0) {
             break;
            }
            if ((HEAP32[i74 >> 2] | 0) == (i180 | 0)) {
             HEAP32[i74 >> 2] = 0;
             HEAP32[i75 >> 2] = 0;
            }
            __ZN3WTF8fastFreeEPv(i187);
           }
          } while (0);
          i182 = HEAP32[i74 >> 2] | 0;
          i209 = i182 + (i181 << 2) | 0;
          i210 = i182;
         }
        } while (0);
        if ((i171 | 0) == 222) {
         i171 = 0;
         i176 = i174 + (i177 >>> 2) | 0;
         i182 = i176 >>> 0 > 16 >>> 0 ? i176 : 16;
         i176 = i182 >>> 0 > i174 >>> 0 ? i182 : i174;
         do {
          if (i177 >>> 0 < i176 >>> 0) {
           if (i176 >>> 0 > 1073741823 >>> 0) {
            i171 = 224;
            break L9;
           }
           i182 = __ZN3WTF18fastMallocGoodSizeEj(i176 << 2) | 0;
           HEAP32[i75 >> 2] = i182 >>> 2;
           i175 = __ZN3WTF10fastMallocEj(i182) | 0;
           HEAP32[i74 >> 2] = i175;
           i182 = i180;
           _memcpy(i175 | 0, i182 | 0, i177 << 2) | 0;
           if ((i180 | 0) == 0) {
            break;
           }
           if ((HEAP32[i74 >> 2] | 0) == (i180 | 0)) {
            HEAP32[i74 >> 2] = 0;
            HEAP32[i75 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i182);
          }
         } while (0);
         i209 = i21;
         i210 = HEAP32[i74 >> 2] | 0;
        }
        HEAPF32[i210 + (HEAP32[i76 >> 2] << 2) >> 2] = +HEAPF32[i209 >> 2];
        i211 = HEAP32[i76 >> 2] | 0;
       } else {
        HEAPF32[(HEAP32[i74 >> 2] | 0) + (i177 << 2) >> 2] = d192;
        i211 = HEAP32[i76 >> 2] | 0;
       }
       i180 = i211 + 1 | 0;
       HEAP32[i76 >> 2] = i180;
       if ((i180 | 0) == (HEAP32[i75 >> 2] | 0)) {
        i176 = i211 + 2 | 0;
        i174 = i211 + 2 + (i180 >>> 2) | 0;
        i182 = i174 >>> 0 > 16 >>> 0 ? i174 : 16;
        i174 = i182 >>> 0 > i176 >>> 0 ? i182 : i176;
        do {
         if (i180 >>> 0 < i174 >>> 0) {
          i176 = HEAP32[i74 >> 2] | 0;
          if (i174 >>> 0 > 1073741823 >>> 0) {
           i171 = 243;
           break L9;
          }
          i182 = __ZN3WTF18fastMallocGoodSizeEj(i174 << 2) | 0;
          HEAP32[i75 >> 2] = i182 >>> 2;
          i175 = __ZN3WTF10fastMallocEj(i182) | 0;
          HEAP32[i74 >> 2] = i175;
          i182 = i176;
          _memcpy(i175 | 0, i182 | 0, i180 << 2) | 0;
          if ((i176 | 0) == 0) {
           break;
          }
          if ((HEAP32[i74 >> 2] | 0) == (i176 | 0)) {
           HEAP32[i74 >> 2] = 0;
           HEAP32[i75 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i182);
         }
        } while (0);
        HEAPF32[(HEAP32[i74 >> 2] | 0) + (HEAP32[i76 >> 2] << 2) >> 2] = +0;
       } else {
        HEAPF32[(HEAP32[i74 >> 2] | 0) + (i180 << 2) >> 2] = +0;
       }
       i174 = HEAP32[i76 >> 2] | 0;
       i177 = i174 + 1 | 0;
       HEAP32[i76 >> 2] = i177;
       if ((i177 | 0) == (HEAP32[i75 >> 2] | 0)) {
        i182 = i174 + 2 | 0;
        i176 = i174 + 2 + (i177 >>> 2) | 0;
        i174 = i176 >>> 0 > 16 >>> 0 ? i176 : 16;
        i176 = i174 >>> 0 > i182 >>> 0 ? i174 : i182;
        do {
         if (i177 >>> 0 < i176 >>> 0) {
          i182 = HEAP32[i74 >> 2] | 0;
          if (i176 >>> 0 > 1073741823 >>> 0) {
           i171 = 253;
           break L9;
          }
          i174 = __ZN3WTF18fastMallocGoodSizeEj(i176 << 2) | 0;
          HEAP32[i75 >> 2] = i174 >>> 2;
          i175 = __ZN3WTF10fastMallocEj(i174) | 0;
          HEAP32[i74 >> 2] = i175;
          i174 = i182;
          _memcpy(i175 | 0, i174 | 0, i177 << 2) | 0;
          if ((i182 | 0) == 0) {
           break;
          }
          if ((HEAP32[i74 >> 2] | 0) == (i182 | 0)) {
           HEAP32[i74 >> 2] = 0;
           HEAP32[i75 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i174);
         }
        } while (0);
        HEAPF32[(HEAP32[i74 >> 2] | 0) + (HEAP32[i76 >> 2] << 2) >> 2] = +0;
       } else {
        HEAPF32[(HEAP32[i74 >> 2] | 0) + (i177 << 2) >> 2] = +0;
       }
       HEAP32[i76 >> 2] = (HEAP32[i76 >> 2] | 0) + 1;
       __ZN7WebCoreL13lastMatrixRowERN3WTF6VectorIfLj0ENS0_15CrashOnOverflowEEE(i13);
       __ZN7WebCore13FEColorMatrix6createEPNS_6FilterENS_15ColorMatrixTypeERKN3WTF6VectorIfLj0ENS4_15CrashOnOverflowEEE(i22, i85, 1, i13);
       i176 = HEAP32[i86 >> 2] | 0;
       HEAP32[i86 >> 2] = 0;
       i180 = HEAP32[i67 >> 2] | 0;
       HEAP32[i67 >> 2] = i176;
       do {
        if ((i180 | 0) != 0) {
         i176 = i180 + 4 | 0;
         i174 = i176 | 0;
         i182 = (HEAP32[i174 >> 2] | 0) - 1 | 0;
         if ((i182 | 0) != 0) {
          HEAP32[i174 >> 2] = i182;
          break;
         }
         i182 = i176 - 4 | 0;
         if ((i182 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i182 >> 2] | 0) + 4 >> 2] & 15](i182);
        }
       } while (0);
       i180 = HEAP32[i86 >> 2] | 0;
       do {
        if ((i180 | 0) != 0) {
         i177 = i180 + 4 | 0;
         i182 = i177 | 0;
         i176 = (HEAP32[i182 >> 2] | 0) - 1 | 0;
         if ((i176 | 0) != 0) {
          HEAP32[i182 >> 2] = i176;
          break;
         }
         i176 = i177 - 4 | 0;
         if ((i176 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i176 >> 2] | 0) + 4 >> 2] & 15](i176);
        }
       } while (0);
       if ((HEAP32[i76 >> 2] | 0) != 0) {
        HEAP32[i76 >> 2] = 0;
       }
       i180 = HEAP32[i74 >> 2] | 0;
       if ((i180 | 0) == 0) {
        i171 = 714;
        break L12;
       }
       HEAP32[i74 >> 2] = 0;
       HEAP32[i75 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i180);
       i171 = 714;
       break;
      }
     case 2:
      {
       HEAP32[i87 >> 2] = 0;
       HEAP32[i88 >> 2] = 0;
       HEAP32[i89 >> 2] = 0;
       d192 = +1 - +HEAPF64[i172 + 16 >> 3];
       if (d192 < +1) {
        d212 = d192 > +0 ? d192 : +0;
       } else {
        d212 = +1;
       }
       i180 = __ZN3WTF18fastMallocGoodSizeEj(64) | 0;
       HEAP32[i88 >> 2] = i180 >>> 2;
       i176 = __ZN3WTF10fastMallocEj(i180) | 0;
       HEAP32[i87 >> 2] = i176;
       HEAPF32[i176 + (HEAP32[i89 >> 2] << 2) >> 2] = d212 * +.607 + +.393;
       i176 = HEAP32[i89 >> 2] | 0;
       i180 = i176 + 1 | 0;
       HEAP32[i89 >> 2] = i180;
       d192 = +.769 - d212 * +.769;
       HEAPF32[i24 >> 2] = d192;
       if ((i180 | 0) == (HEAP32[i88 >> 2] | 0)) {
        i177 = i176 + 2 | 0;
        i176 = HEAP32[i87 >> 2] | 0;
        do {
         if (i176 >>> 0 > i24 >>> 0) {
          i171 = 279;
         } else {
          if ((i176 + (i180 << 2) | 0) >>> 0 <= i24 >>> 0) {
           i171 = 279;
           break;
          }
          i182 = i90 - i176 >> 2;
          i174 = i177 + (i180 >>> 2) | 0;
          i175 = i174 >>> 0 > 16 >>> 0 ? i174 : 16;
          i174 = i175 >>> 0 > i177 >>> 0 ? i175 : i177;
          do {
           if (i180 >>> 0 < i174 >>> 0) {
            if (i174 >>> 0 > 1073741823 >>> 0) {
             i171 = 289;
             break L9;
            }
            i175 = __ZN3WTF18fastMallocGoodSizeEj(i174 << 2) | 0;
            HEAP32[i88 >> 2] = i175 >>> 2;
            i187 = __ZN3WTF10fastMallocEj(i175) | 0;
            HEAP32[i87 >> 2] = i187;
            i175 = i176;
            _memcpy(i187 | 0, i175 | 0, i180 << 2) | 0;
            if ((i176 | 0) == 0) {
             break;
            }
            if ((HEAP32[i87 >> 2] | 0) == (i176 | 0)) {
             HEAP32[i87 >> 2] = 0;
             HEAP32[i88 >> 2] = 0;
            }
            __ZN3WTF8fastFreeEPv(i175);
           }
          } while (0);
          i174 = HEAP32[i87 >> 2] | 0;
          i213 = i174 + (i182 << 2) | 0;
          i214 = i174;
         }
        } while (0);
        if ((i171 | 0) == 279) {
         i171 = 0;
         i174 = i177 + (i180 >>> 2) | 0;
         i181 = i174 >>> 0 > 16 >>> 0 ? i174 : 16;
         i174 = i181 >>> 0 > i177 >>> 0 ? i181 : i177;
         do {
          if (i180 >>> 0 < i174 >>> 0) {
           if (i174 >>> 0 > 1073741823 >>> 0) {
            i171 = 281;
            break L9;
           }
           i181 = __ZN3WTF18fastMallocGoodSizeEj(i174 << 2) | 0;
           HEAP32[i88 >> 2] = i181 >>> 2;
           i175 = __ZN3WTF10fastMallocEj(i181) | 0;
           HEAP32[i87 >> 2] = i175;
           i181 = i176;
           _memcpy(i175 | 0, i181 | 0, i180 << 2) | 0;
           if ((i176 | 0) == 0) {
            break;
           }
           if ((HEAP32[i87 >> 2] | 0) == (i176 | 0)) {
            HEAP32[i87 >> 2] = 0;
            HEAP32[i88 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i181);
          }
         } while (0);
         i213 = i24;
         i214 = HEAP32[i87 >> 2] | 0;
        }
        HEAPF32[i214 + (HEAP32[i89 >> 2] << 2) >> 2] = +HEAPF32[i213 >> 2];
        i215 = HEAP32[i89 >> 2] | 0;
       } else {
        HEAPF32[(HEAP32[i87 >> 2] | 0) + (i180 << 2) >> 2] = d192;
        i215 = HEAP32[i89 >> 2] | 0;
       }
       i176 = i215 + 1 | 0;
       HEAP32[i89 >> 2] = i176;
       d178 = +.189 - d212 * +.189;
       HEAPF32[i25 >> 2] = d178;
       if ((i176 | 0) == (HEAP32[i88 >> 2] | 0)) {
        i174 = i215 + 2 | 0;
        i177 = HEAP32[i87 >> 2] | 0;
        do {
         if (i177 >>> 0 > i25 >>> 0) {
          i171 = 300;
         } else {
          if ((i177 + (i176 << 2) | 0) >>> 0 <= i25 >>> 0) {
           i171 = 300;
           break;
          }
          i181 = i91 - i177 >> 2;
          i175 = i174 + (i176 >>> 2) | 0;
          i187 = i175 >>> 0 > 16 >>> 0 ? i175 : 16;
          i175 = i187 >>> 0 > i174 >>> 0 ? i187 : i174;
          do {
           if (i176 >>> 0 < i175 >>> 0) {
            if (i175 >>> 0 > 1073741823 >>> 0) {
             i171 = 310;
             break L9;
            }
            i187 = __ZN3WTF18fastMallocGoodSizeEj(i175 << 2) | 0;
            HEAP32[i88 >> 2] = i187 >>> 2;
            i188 = __ZN3WTF10fastMallocEj(i187) | 0;
            HEAP32[i87 >> 2] = i188;
            i187 = i177;
            _memcpy(i188 | 0, i187 | 0, i176 << 2) | 0;
            if ((i177 | 0) == 0) {
             break;
            }
            if ((HEAP32[i87 >> 2] | 0) == (i177 | 0)) {
             HEAP32[i87 >> 2] = 0;
             HEAP32[i88 >> 2] = 0;
            }
            __ZN3WTF8fastFreeEPv(i187);
           }
          } while (0);
          i175 = HEAP32[i87 >> 2] | 0;
          i216 = i175 + (i181 << 2) | 0;
          i217 = i175;
         }
        } while (0);
        if ((i171 | 0) == 300) {
         i171 = 0;
         i180 = i174 + (i176 >>> 2) | 0;
         i175 = i180 >>> 0 > 16 >>> 0 ? i180 : 16;
         i180 = i175 >>> 0 > i174 >>> 0 ? i175 : i174;
         do {
          if (i176 >>> 0 < i180 >>> 0) {
           if (i180 >>> 0 > 1073741823 >>> 0) {
            i171 = 302;
            break L9;
           }
           i175 = __ZN3WTF18fastMallocGoodSizeEj(i180 << 2) | 0;
           HEAP32[i88 >> 2] = i175 >>> 2;
           i182 = __ZN3WTF10fastMallocEj(i175) | 0;
           HEAP32[i87 >> 2] = i182;
           i175 = i177;
           _memcpy(i182 | 0, i175 | 0, i176 << 2) | 0;
           if ((i177 | 0) == 0) {
            break;
           }
           if ((HEAP32[i87 >> 2] | 0) == (i177 | 0)) {
            HEAP32[i87 >> 2] = 0;
            HEAP32[i88 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i175);
          }
         } while (0);
         i216 = i25;
         i217 = HEAP32[i87 >> 2] | 0;
        }
        HEAPF32[i217 + (HEAP32[i89 >> 2] << 2) >> 2] = +HEAPF32[i216 >> 2];
        i218 = HEAP32[i89 >> 2] | 0;
       } else {
        HEAPF32[(HEAP32[i87 >> 2] | 0) + (i176 << 2) >> 2] = d178;
        i218 = HEAP32[i89 >> 2] | 0;
       }
       i177 = i218 + 1 | 0;
       HEAP32[i89 >> 2] = i177;
       if ((i177 | 0) == (HEAP32[i88 >> 2] | 0)) {
        i180 = i218 + 2 | 0;
        i174 = i218 + 2 + (i177 >>> 2) | 0;
        i175 = i174 >>> 0 > 16 >>> 0 ? i174 : 16;
        i174 = i175 >>> 0 > i180 >>> 0 ? i175 : i180;
        do {
         if (i177 >>> 0 < i174 >>> 0) {
          i180 = HEAP32[i87 >> 2] | 0;
          if (i174 >>> 0 > 1073741823 >>> 0) {
           i171 = 321;
           break L9;
          }
          i175 = __ZN3WTF18fastMallocGoodSizeEj(i174 << 2) | 0;
          HEAP32[i88 >> 2] = i175 >>> 2;
          i182 = __ZN3WTF10fastMallocEj(i175) | 0;
          HEAP32[i87 >> 2] = i182;
          i175 = i180;
          _memcpy(i182 | 0, i175 | 0, i177 << 2) | 0;
          if ((i180 | 0) == 0) {
           break;
          }
          if ((HEAP32[i87 >> 2] | 0) == (i180 | 0)) {
           HEAP32[i87 >> 2] = 0;
           HEAP32[i88 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i175);
         }
        } while (0);
        HEAPF32[(HEAP32[i87 >> 2] | 0) + (HEAP32[i89 >> 2] << 2) >> 2] = +0;
       } else {
        HEAPF32[(HEAP32[i87 >> 2] | 0) + (i177 << 2) >> 2] = +0;
       }
       i174 = HEAP32[i89 >> 2] | 0;
       i176 = i174 + 1 | 0;
       HEAP32[i89 >> 2] = i176;
       if ((i176 | 0) == (HEAP32[i88 >> 2] | 0)) {
        i175 = i174 + 2 | 0;
        i180 = i174 + 2 + (i176 >>> 2) | 0;
        i174 = i180 >>> 0 > 16 >>> 0 ? i180 : 16;
        i180 = i174 >>> 0 > i175 >>> 0 ? i174 : i175;
        do {
         if (i176 >>> 0 < i180 >>> 0) {
          i175 = HEAP32[i87 >> 2] | 0;
          if (i180 >>> 0 > 1073741823 >>> 0) {
           i171 = 331;
           break L9;
          }
          i174 = __ZN3WTF18fastMallocGoodSizeEj(i180 << 2) | 0;
          HEAP32[i88 >> 2] = i174 >>> 2;
          i182 = __ZN3WTF10fastMallocEj(i174) | 0;
          HEAP32[i87 >> 2] = i182;
          i174 = i175;
          _memcpy(i182 | 0, i174 | 0, i176 << 2) | 0;
          if ((i175 | 0) == 0) {
           break;
          }
          if ((HEAP32[i87 >> 2] | 0) == (i175 | 0)) {
           HEAP32[i87 >> 2] = 0;
           HEAP32[i88 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i174);
         }
        } while (0);
        HEAPF32[(HEAP32[i87 >> 2] | 0) + (HEAP32[i89 >> 2] << 2) >> 2] = +0;
       } else {
        HEAPF32[(HEAP32[i87 >> 2] | 0) + (i176 << 2) >> 2] = +0;
       }
       i180 = HEAP32[i89 >> 2] | 0;
       i177 = i180 + 1 | 0;
       HEAP32[i89 >> 2] = i177;
       d178 = +.349 - d212 * +.349;
       HEAPF32[i26 >> 2] = d178;
       if ((i177 | 0) == (HEAP32[i88 >> 2] | 0)) {
        i174 = i180 + 2 | 0;
        i180 = HEAP32[i87 >> 2] | 0;
        do {
         if (i180 >>> 0 > i26 >>> 0) {
          i171 = 341;
         } else {
          if ((i180 + (i177 << 2) | 0) >>> 0 <= i26 >>> 0) {
           i171 = 341;
           break;
          }
          i175 = i92 - i180 >> 2;
          i182 = i174 + (i177 >>> 2) | 0;
          i187 = i182 >>> 0 > 16 >>> 0 ? i182 : 16;
          i182 = i187 >>> 0 > i174 >>> 0 ? i187 : i174;
          do {
           if (i177 >>> 0 < i182 >>> 0) {
            if (i182 >>> 0 > 1073741823 >>> 0) {
             i171 = 351;
             break L9;
            }
            i187 = __ZN3WTF18fastMallocGoodSizeEj(i182 << 2) | 0;
            HEAP32[i88 >> 2] = i187 >>> 2;
            i188 = __ZN3WTF10fastMallocEj(i187) | 0;
            HEAP32[i87 >> 2] = i188;
            i187 = i180;
            _memcpy(i188 | 0, i187 | 0, i177 << 2) | 0;
            if ((i180 | 0) == 0) {
             break;
            }
            if ((HEAP32[i87 >> 2] | 0) == (i180 | 0)) {
             HEAP32[i87 >> 2] = 0;
             HEAP32[i88 >> 2] = 0;
            }
            __ZN3WTF8fastFreeEPv(i187);
           }
          } while (0);
          i182 = HEAP32[i87 >> 2] | 0;
          i219 = i182 + (i175 << 2) | 0;
          i220 = i182;
         }
        } while (0);
        if ((i171 | 0) == 341) {
         i171 = 0;
         i176 = i174 + (i177 >>> 2) | 0;
         i182 = i176 >>> 0 > 16 >>> 0 ? i176 : 16;
         i176 = i182 >>> 0 > i174 >>> 0 ? i182 : i174;
         do {
          if (i177 >>> 0 < i176 >>> 0) {
           if (i176 >>> 0 > 1073741823 >>> 0) {
            i171 = 343;
            break L9;
           }
           i182 = __ZN3WTF18fastMallocGoodSizeEj(i176 << 2) | 0;
           HEAP32[i88 >> 2] = i182 >>> 2;
           i181 = __ZN3WTF10fastMallocEj(i182) | 0;
           HEAP32[i87 >> 2] = i181;
           i182 = i180;
           _memcpy(i181 | 0, i182 | 0, i177 << 2) | 0;
           if ((i180 | 0) == 0) {
            break;
           }
           if ((HEAP32[i87 >> 2] | 0) == (i180 | 0)) {
            HEAP32[i87 >> 2] = 0;
            HEAP32[i88 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i182);
          }
         } while (0);
         i219 = i26;
         i220 = HEAP32[i87 >> 2] | 0;
        }
        HEAPF32[i220 + (HEAP32[i89 >> 2] << 2) >> 2] = +HEAPF32[i219 >> 2];
        i221 = HEAP32[i89 >> 2] | 0;
       } else {
        HEAPF32[(HEAP32[i87 >> 2] | 0) + (i177 << 2) >> 2] = d178;
        i221 = HEAP32[i89 >> 2] | 0;
       }
       i180 = i221 + 1 | 0;
       HEAP32[i89 >> 2] = i180;
       d192 = d212 * +.314 + +.686;
       HEAPF32[i27 >> 2] = d192;
       if ((i180 | 0) == (HEAP32[i88 >> 2] | 0)) {
        i176 = i221 + 2 | 0;
        i174 = HEAP32[i87 >> 2] | 0;
        do {
         if (i174 >>> 0 > i27 >>> 0) {
          i171 = 362;
         } else {
          if ((i174 + (i180 << 2) | 0) >>> 0 <= i27 >>> 0) {
           i171 = 362;
           break;
          }
          i182 = i93 - i174 >> 2;
          i181 = i176 + (i180 >>> 2) | 0;
          i187 = i181 >>> 0 > 16 >>> 0 ? i181 : 16;
          i181 = i187 >>> 0 > i176 >>> 0 ? i187 : i176;
          do {
           if (i180 >>> 0 < i181 >>> 0) {
            if (i181 >>> 0 > 1073741823 >>> 0) {
             i171 = 372;
             break L9;
            }
            i187 = __ZN3WTF18fastMallocGoodSizeEj(i181 << 2) | 0;
            HEAP32[i88 >> 2] = i187 >>> 2;
            i188 = __ZN3WTF10fastMallocEj(i187) | 0;
            HEAP32[i87 >> 2] = i188;
            i187 = i174;
            _memcpy(i188 | 0, i187 | 0, i180 << 2) | 0;
            if ((i174 | 0) == 0) {
             break;
            }
            if ((HEAP32[i87 >> 2] | 0) == (i174 | 0)) {
             HEAP32[i87 >> 2] = 0;
             HEAP32[i88 >> 2] = 0;
            }
            __ZN3WTF8fastFreeEPv(i187);
           }
          } while (0);
          i181 = HEAP32[i87 >> 2] | 0;
          i222 = i181 + (i182 << 2) | 0;
          i223 = i181;
         }
        } while (0);
        if ((i171 | 0) == 362) {
         i171 = 0;
         i177 = i176 + (i180 >>> 2) | 0;
         i181 = i177 >>> 0 > 16 >>> 0 ? i177 : 16;
         i177 = i181 >>> 0 > i176 >>> 0 ? i181 : i176;
         do {
          if (i180 >>> 0 < i177 >>> 0) {
           if (i177 >>> 0 > 1073741823 >>> 0) {
            i171 = 364;
            break L9;
           }
           i181 = __ZN3WTF18fastMallocGoodSizeEj(i177 << 2) | 0;
           HEAP32[i88 >> 2] = i181 >>> 2;
           i175 = __ZN3WTF10fastMallocEj(i181) | 0;
           HEAP32[i87 >> 2] = i175;
           i181 = i174;
           _memcpy(i175 | 0, i181 | 0, i180 << 2) | 0;
           if ((i174 | 0) == 0) {
            break;
           }
           if ((HEAP32[i87 >> 2] | 0) == (i174 | 0)) {
            HEAP32[i87 >> 2] = 0;
            HEAP32[i88 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i181);
          }
         } while (0);
         i222 = i27;
         i223 = HEAP32[i87 >> 2] | 0;
        }
        HEAPF32[i223 + (HEAP32[i89 >> 2] << 2) >> 2] = +HEAPF32[i222 >> 2];
        i224 = HEAP32[i89 >> 2] | 0;
       } else {
        HEAPF32[(HEAP32[i87 >> 2] | 0) + (i180 << 2) >> 2] = d192;
        i224 = HEAP32[i89 >> 2] | 0;
       }
       i174 = i224 + 1 | 0;
       HEAP32[i89 >> 2] = i174;
       d178 = +.168 - d212 * +.168;
       HEAPF32[i28 >> 2] = d178;
       if ((i174 | 0) == (HEAP32[i88 >> 2] | 0)) {
        i177 = i224 + 2 | 0;
        i176 = HEAP32[i87 >> 2] | 0;
        do {
         if (i176 >>> 0 > i28 >>> 0) {
          i171 = 383;
         } else {
          if ((i176 + (i174 << 2) | 0) >>> 0 <= i28 >>> 0) {
           i171 = 383;
           break;
          }
          i181 = i94 - i176 >> 2;
          i175 = i177 + (i174 >>> 2) | 0;
          i187 = i175 >>> 0 > 16 >>> 0 ? i175 : 16;
          i175 = i187 >>> 0 > i177 >>> 0 ? i187 : i177;
          do {
           if (i174 >>> 0 < i175 >>> 0) {
            if (i175 >>> 0 > 1073741823 >>> 0) {
             i171 = 393;
             break L9;
            }
            i187 = __ZN3WTF18fastMallocGoodSizeEj(i175 << 2) | 0;
            HEAP32[i88 >> 2] = i187 >>> 2;
            i188 = __ZN3WTF10fastMallocEj(i187) | 0;
            HEAP32[i87 >> 2] = i188;
            i187 = i176;
            _memcpy(i188 | 0, i187 | 0, i174 << 2) | 0;
            if ((i176 | 0) == 0) {
             break;
            }
            if ((HEAP32[i87 >> 2] | 0) == (i176 | 0)) {
             HEAP32[i87 >> 2] = 0;
             HEAP32[i88 >> 2] = 0;
            }
            __ZN3WTF8fastFreeEPv(i187);
           }
          } while (0);
          i175 = HEAP32[i87 >> 2] | 0;
          i225 = i175 + (i181 << 2) | 0;
          i226 = i175;
         }
        } while (0);
        if ((i171 | 0) == 383) {
         i171 = 0;
         i180 = i177 + (i174 >>> 2) | 0;
         i175 = i180 >>> 0 > 16 >>> 0 ? i180 : 16;
         i180 = i175 >>> 0 > i177 >>> 0 ? i175 : i177;
         do {
          if (i174 >>> 0 < i180 >>> 0) {
           if (i180 >>> 0 > 1073741823 >>> 0) {
            i171 = 385;
            break L9;
           }
           i175 = __ZN3WTF18fastMallocGoodSizeEj(i180 << 2) | 0;
           HEAP32[i88 >> 2] = i175 >>> 2;
           i182 = __ZN3WTF10fastMallocEj(i175) | 0;
           HEAP32[i87 >> 2] = i182;
           i175 = i176;
           _memcpy(i182 | 0, i175 | 0, i174 << 2) | 0;
           if ((i176 | 0) == 0) {
            break;
           }
           if ((HEAP32[i87 >> 2] | 0) == (i176 | 0)) {
            HEAP32[i87 >> 2] = 0;
            HEAP32[i88 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i175);
          }
         } while (0);
         i225 = i28;
         i226 = HEAP32[i87 >> 2] | 0;
        }
        HEAPF32[i226 + (HEAP32[i89 >> 2] << 2) >> 2] = +HEAPF32[i225 >> 2];
        i227 = HEAP32[i89 >> 2] | 0;
       } else {
        HEAPF32[(HEAP32[i87 >> 2] | 0) + (i174 << 2) >> 2] = d178;
        i227 = HEAP32[i89 >> 2] | 0;
       }
       i176 = i227 + 1 | 0;
       HEAP32[i89 >> 2] = i176;
       if ((i176 | 0) == (HEAP32[i88 >> 2] | 0)) {
        i180 = i227 + 2 | 0;
        i177 = i227 + 2 + (i176 >>> 2) | 0;
        i175 = i177 >>> 0 > 16 >>> 0 ? i177 : 16;
        i177 = i175 >>> 0 > i180 >>> 0 ? i175 : i180;
        do {
         if (i176 >>> 0 < i177 >>> 0) {
          i180 = HEAP32[i87 >> 2] | 0;
          if (i177 >>> 0 > 1073741823 >>> 0) {
           i171 = 404;
           break L9;
          }
          i175 = __ZN3WTF18fastMallocGoodSizeEj(i177 << 2) | 0;
          HEAP32[i88 >> 2] = i175 >>> 2;
          i182 = __ZN3WTF10fastMallocEj(i175) | 0;
          HEAP32[i87 >> 2] = i182;
          i175 = i180;
          _memcpy(i182 | 0, i175 | 0, i176 << 2) | 0;
          if ((i180 | 0) == 0) {
           break;
          }
          if ((HEAP32[i87 >> 2] | 0) == (i180 | 0)) {
           HEAP32[i87 >> 2] = 0;
           HEAP32[i88 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i175);
         }
        } while (0);
        HEAPF32[(HEAP32[i87 >> 2] | 0) + (HEAP32[i89 >> 2] << 2) >> 2] = +0;
       } else {
        HEAPF32[(HEAP32[i87 >> 2] | 0) + (i176 << 2) >> 2] = +0;
       }
       i177 = HEAP32[i89 >> 2] | 0;
       i174 = i177 + 1 | 0;
       HEAP32[i89 >> 2] = i174;
       if ((i174 | 0) == (HEAP32[i88 >> 2] | 0)) {
        i175 = i177 + 2 | 0;
        i180 = i177 + 2 + (i174 >>> 2) | 0;
        i177 = i180 >>> 0 > 16 >>> 0 ? i180 : 16;
        i180 = i177 >>> 0 > i175 >>> 0 ? i177 : i175;
        do {
         if (i174 >>> 0 < i180 >>> 0) {
          i175 = HEAP32[i87 >> 2] | 0;
          if (i180 >>> 0 > 1073741823 >>> 0) {
           i171 = 414;
           break L9;
          }
          i177 = __ZN3WTF18fastMallocGoodSizeEj(i180 << 2) | 0;
          HEAP32[i88 >> 2] = i177 >>> 2;
          i182 = __ZN3WTF10fastMallocEj(i177) | 0;
          HEAP32[i87 >> 2] = i182;
          i177 = i175;
          _memcpy(i182 | 0, i177 | 0, i174 << 2) | 0;
          if ((i175 | 0) == 0) {
           break;
          }
          if ((HEAP32[i87 >> 2] | 0) == (i175 | 0)) {
           HEAP32[i87 >> 2] = 0;
           HEAP32[i88 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i177);
         }
        } while (0);
        HEAPF32[(HEAP32[i87 >> 2] | 0) + (HEAP32[i89 >> 2] << 2) >> 2] = +0;
       } else {
        HEAPF32[(HEAP32[i87 >> 2] | 0) + (i174 << 2) >> 2] = +0;
       }
       i180 = HEAP32[i89 >> 2] | 0;
       i176 = i180 + 1 | 0;
       HEAP32[i89 >> 2] = i176;
       d178 = +.272 - d212 * +.272;
       HEAPF32[i29 >> 2] = d178;
       if ((i176 | 0) == (HEAP32[i88 >> 2] | 0)) {
        i177 = i180 + 2 | 0;
        i180 = HEAP32[i87 >> 2] | 0;
        do {
         if (i180 >>> 0 > i29 >>> 0) {
          i171 = 424;
         } else {
          if ((i180 + (i176 << 2) | 0) >>> 0 <= i29 >>> 0) {
           i171 = 424;
           break;
          }
          i175 = i95 - i180 >> 2;
          i182 = i177 + (i176 >>> 2) | 0;
          i187 = i182 >>> 0 > 16 >>> 0 ? i182 : 16;
          i182 = i187 >>> 0 > i177 >>> 0 ? i187 : i177;
          do {
           if (i176 >>> 0 < i182 >>> 0) {
            if (i182 >>> 0 > 1073741823 >>> 0) {
             i171 = 434;
             break L9;
            }
            i187 = __ZN3WTF18fastMallocGoodSizeEj(i182 << 2) | 0;
            HEAP32[i88 >> 2] = i187 >>> 2;
            i188 = __ZN3WTF10fastMallocEj(i187) | 0;
            HEAP32[i87 >> 2] = i188;
            i187 = i180;
            _memcpy(i188 | 0, i187 | 0, i176 << 2) | 0;
            if ((i180 | 0) == 0) {
             break;
            }
            if ((HEAP32[i87 >> 2] | 0) == (i180 | 0)) {
             HEAP32[i87 >> 2] = 0;
             HEAP32[i88 >> 2] = 0;
            }
            __ZN3WTF8fastFreeEPv(i187);
           }
          } while (0);
          i182 = HEAP32[i87 >> 2] | 0;
          i228 = i182 + (i175 << 2) | 0;
          i229 = i182;
         }
        } while (0);
        if ((i171 | 0) == 424) {
         i171 = 0;
         i174 = i177 + (i176 >>> 2) | 0;
         i182 = i174 >>> 0 > 16 >>> 0 ? i174 : 16;
         i174 = i182 >>> 0 > i177 >>> 0 ? i182 : i177;
         do {
          if (i176 >>> 0 < i174 >>> 0) {
           if (i174 >>> 0 > 1073741823 >>> 0) {
            i171 = 426;
            break L9;
           }
           i182 = __ZN3WTF18fastMallocGoodSizeEj(i174 << 2) | 0;
           HEAP32[i88 >> 2] = i182 >>> 2;
           i181 = __ZN3WTF10fastMallocEj(i182) | 0;
           HEAP32[i87 >> 2] = i181;
           i182 = i180;
           _memcpy(i181 | 0, i182 | 0, i176 << 2) | 0;
           if ((i180 | 0) == 0) {
            break;
           }
           if ((HEAP32[i87 >> 2] | 0) == (i180 | 0)) {
            HEAP32[i87 >> 2] = 0;
            HEAP32[i88 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i182);
          }
         } while (0);
         i228 = i29;
         i229 = HEAP32[i87 >> 2] | 0;
        }
        HEAPF32[i229 + (HEAP32[i89 >> 2] << 2) >> 2] = +HEAPF32[i228 >> 2];
        i230 = HEAP32[i89 >> 2] | 0;
       } else {
        HEAPF32[(HEAP32[i87 >> 2] | 0) + (i176 << 2) >> 2] = d178;
        i230 = HEAP32[i89 >> 2] | 0;
       }
       i180 = i230 + 1 | 0;
       HEAP32[i89 >> 2] = i180;
       d192 = +.534 - d212 * +.534;
       HEAPF32[i30 >> 2] = d192;
       if ((i180 | 0) == (HEAP32[i88 >> 2] | 0)) {
        i174 = i230 + 2 | 0;
        i177 = HEAP32[i87 >> 2] | 0;
        do {
         if (i177 >>> 0 > i30 >>> 0) {
          i171 = 445;
         } else {
          if ((i177 + (i180 << 2) | 0) >>> 0 <= i30 >>> 0) {
           i171 = 445;
           break;
          }
          i182 = i96 - i177 >> 2;
          i181 = i174 + (i180 >>> 2) | 0;
          i187 = i181 >>> 0 > 16 >>> 0 ? i181 : 16;
          i181 = i187 >>> 0 > i174 >>> 0 ? i187 : i174;
          do {
           if (i180 >>> 0 < i181 >>> 0) {
            if (i181 >>> 0 > 1073741823 >>> 0) {
             i171 = 455;
             break L9;
            }
            i187 = __ZN3WTF18fastMallocGoodSizeEj(i181 << 2) | 0;
            HEAP32[i88 >> 2] = i187 >>> 2;
            i188 = __ZN3WTF10fastMallocEj(i187) | 0;
            HEAP32[i87 >> 2] = i188;
            i187 = i177;
            _memcpy(i188 | 0, i187 | 0, i180 << 2) | 0;
            if ((i177 | 0) == 0) {
             break;
            }
            if ((HEAP32[i87 >> 2] | 0) == (i177 | 0)) {
             HEAP32[i87 >> 2] = 0;
             HEAP32[i88 >> 2] = 0;
            }
            __ZN3WTF8fastFreeEPv(i187);
           }
          } while (0);
          i181 = HEAP32[i87 >> 2] | 0;
          i231 = i181 + (i182 << 2) | 0;
          i232 = i181;
         }
        } while (0);
        if ((i171 | 0) == 445) {
         i171 = 0;
         i176 = i174 + (i180 >>> 2) | 0;
         i181 = i176 >>> 0 > 16 >>> 0 ? i176 : 16;
         i176 = i181 >>> 0 > i174 >>> 0 ? i181 : i174;
         do {
          if (i180 >>> 0 < i176 >>> 0) {
           if (i176 >>> 0 > 1073741823 >>> 0) {
            i171 = 447;
            break L9;
           }
           i181 = __ZN3WTF18fastMallocGoodSizeEj(i176 << 2) | 0;
           HEAP32[i88 >> 2] = i181 >>> 2;
           i175 = __ZN3WTF10fastMallocEj(i181) | 0;
           HEAP32[i87 >> 2] = i175;
           i181 = i177;
           _memcpy(i175 | 0, i181 | 0, i180 << 2) | 0;
           if ((i177 | 0) == 0) {
            break;
           }
           if ((HEAP32[i87 >> 2] | 0) == (i177 | 0)) {
            HEAP32[i87 >> 2] = 0;
            HEAP32[i88 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i181);
          }
         } while (0);
         i231 = i30;
         i232 = HEAP32[i87 >> 2] | 0;
        }
        HEAPF32[i232 + (HEAP32[i89 >> 2] << 2) >> 2] = +HEAPF32[i231 >> 2];
        i233 = HEAP32[i89 >> 2] | 0;
       } else {
        HEAPF32[(HEAP32[i87 >> 2] | 0) + (i180 << 2) >> 2] = d192;
        i233 = HEAP32[i89 >> 2] | 0;
       }
       i177 = i233 + 1 | 0;
       HEAP32[i89 >> 2] = i177;
       d178 = d212 * +.869 + +.131;
       HEAPF32[i31 >> 2] = d178;
       if ((i177 | 0) == (HEAP32[i88 >> 2] | 0)) {
        i176 = i233 + 2 | 0;
        i174 = HEAP32[i87 >> 2] | 0;
        do {
         if (i174 >>> 0 > i31 >>> 0) {
          i171 = 466;
         } else {
          if ((i174 + (i177 << 2) | 0) >>> 0 <= i31 >>> 0) {
           i171 = 466;
           break;
          }
          i181 = i97 - i174 >> 2;
          i175 = i176 + (i177 >>> 2) | 0;
          i187 = i175 >>> 0 > 16 >>> 0 ? i175 : 16;
          i175 = i187 >>> 0 > i176 >>> 0 ? i187 : i176;
          do {
           if (i177 >>> 0 < i175 >>> 0) {
            if (i175 >>> 0 > 1073741823 >>> 0) {
             i171 = 476;
             break L9;
            }
            i187 = __ZN3WTF18fastMallocGoodSizeEj(i175 << 2) | 0;
            HEAP32[i88 >> 2] = i187 >>> 2;
            i188 = __ZN3WTF10fastMallocEj(i187) | 0;
            HEAP32[i87 >> 2] = i188;
            i187 = i174;
            _memcpy(i188 | 0, i187 | 0, i177 << 2) | 0;
            if ((i174 | 0) == 0) {
             break;
            }
            if ((HEAP32[i87 >> 2] | 0) == (i174 | 0)) {
             HEAP32[i87 >> 2] = 0;
             HEAP32[i88 >> 2] = 0;
            }
            __ZN3WTF8fastFreeEPv(i187);
           }
          } while (0);
          i175 = HEAP32[i87 >> 2] | 0;
          i234 = i175 + (i181 << 2) | 0;
          i235 = i175;
         }
        } while (0);
        if ((i171 | 0) == 466) {
         i171 = 0;
         i180 = i176 + (i177 >>> 2) | 0;
         i175 = i180 >>> 0 > 16 >>> 0 ? i180 : 16;
         i180 = i175 >>> 0 > i176 >>> 0 ? i175 : i176;
         do {
          if (i177 >>> 0 < i180 >>> 0) {
           if (i180 >>> 0 > 1073741823 >>> 0) {
            i171 = 468;
            break L9;
           }
           i175 = __ZN3WTF18fastMallocGoodSizeEj(i180 << 2) | 0;
           HEAP32[i88 >> 2] = i175 >>> 2;
           i182 = __ZN3WTF10fastMallocEj(i175) | 0;
           HEAP32[i87 >> 2] = i182;
           i175 = i174;
           _memcpy(i182 | 0, i175 | 0, i177 << 2) | 0;
           if ((i174 | 0) == 0) {
            break;
           }
           if ((HEAP32[i87 >> 2] | 0) == (i174 | 0)) {
            HEAP32[i87 >> 2] = 0;
            HEAP32[i88 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i175);
          }
         } while (0);
         i234 = i31;
         i235 = HEAP32[i87 >> 2] | 0;
        }
        HEAPF32[i235 + (HEAP32[i89 >> 2] << 2) >> 2] = +HEAPF32[i234 >> 2];
        i236 = HEAP32[i89 >> 2] | 0;
       } else {
        HEAPF32[(HEAP32[i87 >> 2] | 0) + (i177 << 2) >> 2] = d178;
        i236 = HEAP32[i89 >> 2] | 0;
       }
       i174 = i236 + 1 | 0;
       HEAP32[i89 >> 2] = i174;
       if ((i174 | 0) == (HEAP32[i88 >> 2] | 0)) {
        i180 = i236 + 2 | 0;
        i176 = i236 + 2 + (i174 >>> 2) | 0;
        i175 = i176 >>> 0 > 16 >>> 0 ? i176 : 16;
        i176 = i175 >>> 0 > i180 >>> 0 ? i175 : i180;
        do {
         if (i174 >>> 0 < i176 >>> 0) {
          i180 = HEAP32[i87 >> 2] | 0;
          if (i176 >>> 0 > 1073741823 >>> 0) {
           i171 = 487;
           break L9;
          }
          i175 = __ZN3WTF18fastMallocGoodSizeEj(i176 << 2) | 0;
          HEAP32[i88 >> 2] = i175 >>> 2;
          i182 = __ZN3WTF10fastMallocEj(i175) | 0;
          HEAP32[i87 >> 2] = i182;
          i175 = i180;
          _memcpy(i182 | 0, i175 | 0, i174 << 2) | 0;
          if ((i180 | 0) == 0) {
           break;
          }
          if ((HEAP32[i87 >> 2] | 0) == (i180 | 0)) {
           HEAP32[i87 >> 2] = 0;
           HEAP32[i88 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i175);
         }
        } while (0);
        HEAPF32[(HEAP32[i87 >> 2] | 0) + (HEAP32[i89 >> 2] << 2) >> 2] = +0;
       } else {
        HEAPF32[(HEAP32[i87 >> 2] | 0) + (i174 << 2) >> 2] = +0;
       }
       i176 = HEAP32[i89 >> 2] | 0;
       i177 = i176 + 1 | 0;
       HEAP32[i89 >> 2] = i177;
       if ((i177 | 0) == (HEAP32[i88 >> 2] | 0)) {
        i175 = i176 + 2 | 0;
        i180 = i176 + 2 + (i177 >>> 2) | 0;
        i176 = i180 >>> 0 > 16 >>> 0 ? i180 : 16;
        i180 = i176 >>> 0 > i175 >>> 0 ? i176 : i175;
        do {
         if (i177 >>> 0 < i180 >>> 0) {
          i175 = HEAP32[i87 >> 2] | 0;
          if (i180 >>> 0 > 1073741823 >>> 0) {
           i171 = 497;
           break L9;
          }
          i176 = __ZN3WTF18fastMallocGoodSizeEj(i180 << 2) | 0;
          HEAP32[i88 >> 2] = i176 >>> 2;
          i182 = __ZN3WTF10fastMallocEj(i176) | 0;
          HEAP32[i87 >> 2] = i182;
          i176 = i175;
          _memcpy(i182 | 0, i176 | 0, i177 << 2) | 0;
          if ((i175 | 0) == 0) {
           break;
          }
          if ((HEAP32[i87 >> 2] | 0) == (i175 | 0)) {
           HEAP32[i87 >> 2] = 0;
           HEAP32[i88 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i176);
         }
        } while (0);
        HEAPF32[(HEAP32[i87 >> 2] | 0) + (HEAP32[i89 >> 2] << 2) >> 2] = +0;
       } else {
        HEAPF32[(HEAP32[i87 >> 2] | 0) + (i177 << 2) >> 2] = +0;
       }
       HEAP32[i89 >> 2] = (HEAP32[i89 >> 2] | 0) + 1;
       __ZN7WebCoreL13lastMatrixRowERN3WTF6VectorIfLj0ENS0_15CrashOnOverflowEEE(i23);
       __ZN7WebCore13FEColorMatrix6createEPNS_6FilterENS_15ColorMatrixTypeERKN3WTF6VectorIfLj0ENS4_15CrashOnOverflowEEE(i32, i85, 1, i23);
       i180 = HEAP32[i98 >> 2] | 0;
       HEAP32[i98 >> 2] = 0;
       i174 = HEAP32[i67 >> 2] | 0;
       HEAP32[i67 >> 2] = i180;
       do {
        if ((i174 | 0) != 0) {
         i180 = i174 + 4 | 0;
         i176 = i180 | 0;
         i175 = (HEAP32[i176 >> 2] | 0) - 1 | 0;
         if ((i175 | 0) != 0) {
          HEAP32[i176 >> 2] = i175;
          break;
         }
         i175 = i180 - 4 | 0;
         if ((i175 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i175 >> 2] | 0) + 4 >> 2] & 15](i175);
        }
       } while (0);
       i174 = HEAP32[i98 >> 2] | 0;
       do {
        if ((i174 | 0) != 0) {
         i177 = i174 + 4 | 0;
         i175 = i177 | 0;
         i180 = (HEAP32[i175 >> 2] | 0) - 1 | 0;
         if ((i180 | 0) != 0) {
          HEAP32[i175 >> 2] = i180;
          break;
         }
         i180 = i177 - 4 | 0;
         if ((i180 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i180 >> 2] | 0) + 4 >> 2] & 15](i180);
        }
       } while (0);
       if ((HEAP32[i89 >> 2] | 0) != 0) {
        HEAP32[i89 >> 2] = 0;
       }
       i174 = HEAP32[i87 >> 2] | 0;
       if ((i174 | 0) == 0) {
        i171 = 714;
        break L12;
       }
       HEAP32[i87 >> 2] = 0;
       HEAP32[i88 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i174);
       i171 = 714;
       break;
      }
     case 3:
      {
       HEAP32[i99 >> 2] = 0;
       HEAP32[i100 >> 2] = 0;
       HEAP32[i101 >> 2] = 0;
       d178 = +HEAPF64[i172 + 16 >> 3];
       i174 = __ZN3WTF18fastMallocGoodSizeEj(64) | 0;
       HEAP32[i100 >> 2] = i174 >>> 2;
       i180 = __ZN3WTF10fastMallocEj(i174) | 0;
       HEAP32[i99 >> 2] = i180;
       HEAPF32[i180 + (HEAP32[i101 >> 2] << 2) >> 2] = d178;
       HEAP32[i101 >> 2] = (HEAP32[i101 >> 2] | 0) + 1;
       __ZN7WebCore13FEColorMatrix6createEPNS_6FilterENS_15ColorMatrixTypeERKN3WTF6VectorIfLj0ENS4_15CrashOnOverflowEEE(i34, i85, 2, i33);
       i180 = HEAP32[i102 >> 2] | 0;
       HEAP32[i102 >> 2] = 0;
       i174 = HEAP32[i67 >> 2] | 0;
       HEAP32[i67 >> 2] = i180;
       do {
        if ((i174 | 0) != 0) {
         i180 = i174 + 4 | 0;
         i177 = i180 | 0;
         i175 = (HEAP32[i177 >> 2] | 0) - 1 | 0;
         if ((i175 | 0) != 0) {
          HEAP32[i177 >> 2] = i175;
          break;
         }
         i175 = i180 - 4 | 0;
         if ((i175 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i175 >> 2] | 0) + 4 >> 2] & 15](i175);
        }
       } while (0);
       i174 = HEAP32[i102 >> 2] | 0;
       do {
        if ((i174 | 0) != 0) {
         i175 = i174 + 4 | 0;
         i180 = i175 | 0;
         i177 = (HEAP32[i180 >> 2] | 0) - 1 | 0;
         if ((i177 | 0) != 0) {
          HEAP32[i180 >> 2] = i177;
          break;
         }
         i177 = i175 - 4 | 0;
         if ((i177 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i177 >> 2] | 0) + 4 >> 2] & 15](i177);
        }
       } while (0);
       if ((HEAP32[i101 >> 2] | 0) != 0) {
        HEAP32[i101 >> 2] = 0;
       }
       i174 = HEAP32[i99 >> 2] | 0;
       if ((i174 | 0) == 0) {
        i171 = 714;
        break L12;
       }
       HEAP32[i99 >> 2] = 0;
       HEAP32[i100 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i174);
       i171 = 714;
       break;
      }
     case 4:
      {
       HEAP32[i103 >> 2] = 0;
       HEAP32[i104 >> 2] = 0;
       HEAP32[i105 >> 2] = 0;
       d178 = +HEAPF64[i172 + 16 >> 3];
       i174 = __ZN3WTF18fastMallocGoodSizeEj(64) | 0;
       HEAP32[i104 >> 2] = i174 >>> 2;
       i177 = __ZN3WTF10fastMallocEj(i174) | 0;
       HEAP32[i103 >> 2] = i177;
       HEAPF32[i177 + (HEAP32[i105 >> 2] << 2) >> 2] = d178;
       HEAP32[i105 >> 2] = (HEAP32[i105 >> 2] | 0) + 1;
       __ZN7WebCore13FEColorMatrix6createEPNS_6FilterENS_15ColorMatrixTypeERKN3WTF6VectorIfLj0ENS4_15CrashOnOverflowEEE(i36, i85, 3, i35);
       i177 = HEAP32[i106 >> 2] | 0;
       HEAP32[i106 >> 2] = 0;
       i174 = HEAP32[i67 >> 2] | 0;
       HEAP32[i67 >> 2] = i177;
       do {
        if ((i174 | 0) != 0) {
         i177 = i174 + 4 | 0;
         i175 = i177 | 0;
         i180 = (HEAP32[i175 >> 2] | 0) - 1 | 0;
         if ((i180 | 0) != 0) {
          HEAP32[i175 >> 2] = i180;
          break;
         }
         i180 = i177 - 4 | 0;
         if ((i180 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i180 >> 2] | 0) + 4 >> 2] & 15](i180);
        }
       } while (0);
       i174 = HEAP32[i106 >> 2] | 0;
       do {
        if ((i174 | 0) != 0) {
         i180 = i174 + 4 | 0;
         i177 = i180 | 0;
         i175 = (HEAP32[i177 >> 2] | 0) - 1 | 0;
         if ((i175 | 0) != 0) {
          HEAP32[i177 >> 2] = i175;
          break;
         }
         i175 = i180 - 4 | 0;
         if ((i175 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i175 >> 2] | 0) + 4 >> 2] & 15](i175);
        }
       } while (0);
       if ((HEAP32[i105 >> 2] | 0) != 0) {
        HEAP32[i105 >> 2] = 0;
       }
       i174 = HEAP32[i103 >> 2] | 0;
       if ((i174 | 0) == 0) {
        i171 = 714;
        break L12;
       }
       HEAP32[i103 >> 2] = 0;
       HEAP32[i104 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i174);
       i171 = 714;
       break;
      }
     case 5:
      {
       _memset(i107 | 0, 0, 36) | 0;
       HEAP32[i108 >> 2] = 2;
       HEAP32[i109 >> 2] = 0;
       HEAP32[i110 >> 2] = 0;
       HEAP32[i111 >> 2] = 0;
       i174 = i172 + 16 | 0;
       d178 = +HEAPF64[i174 >> 3];
       i175 = __ZN3WTF18fastMallocGoodSizeEj(64) | 0;
       HEAP32[i110 >> 2] = i175 >>> 2;
       i180 = __ZN3WTF10fastMallocEj(i175) | 0;
       HEAP32[i109 >> 2] = i180;
       HEAPF32[i180 + (HEAP32[i111 >> 2] << 2) >> 2] = d178;
       i180 = HEAP32[i111 >> 2] | 0;
       i175 = i180 + 1 | 0;
       HEAP32[i111 >> 2] = i175;
       d178 = +1 - +HEAPF64[i174 >> 3];
       HEAPF32[i39 >> 2] = d178;
       if ((i175 | 0) == (HEAP32[i110 >> 2] | 0)) {
        i174 = i180 + 2 | 0;
        i180 = HEAP32[i109 >> 2] | 0;
        do {
         if (i180 >>> 0 > i39 >>> 0) {
          i171 = 549;
         } else {
          if ((i180 + (i175 << 2) | 0) >>> 0 <= i39 >>> 0) {
           i171 = 549;
           break;
          }
          i177 = i112 - i180 >> 2;
          i176 = i174 + (i175 >>> 2) | 0;
          i182 = i176 >>> 0 > 16 >>> 0 ? i176 : 16;
          i176 = i182 >>> 0 > i174 >>> 0 ? i182 : i174;
          do {
           if (i175 >>> 0 < i176 >>> 0) {
            if (i176 >>> 0 > 1073741823 >>> 0) {
             i171 = 559;
             break L9;
            }
            i182 = __ZN3WTF18fastMallocGoodSizeEj(i176 << 2) | 0;
            HEAP32[i110 >> 2] = i182 >>> 2;
            i187 = __ZN3WTF10fastMallocEj(i182) | 0;
            HEAP32[i109 >> 2] = i187;
            i182 = i180;
            _memcpy(i187 | 0, i182 | 0, i175 << 2) | 0;
            if ((i180 | 0) == 0) {
             break;
            }
            if ((HEAP32[i109 >> 2] | 0) == (i180 | 0)) {
             HEAP32[i109 >> 2] = 0;
             HEAP32[i110 >> 2] = 0;
            }
            __ZN3WTF8fastFreeEPv(i182);
           }
          } while (0);
          i176 = HEAP32[i109 >> 2] | 0;
          i237 = i176 + (i177 << 2) | 0;
          i238 = i176;
         }
        } while (0);
        if ((i171 | 0) == 549) {
         i171 = 0;
         i176 = i174 + (i175 >>> 2) | 0;
         i181 = i176 >>> 0 > 16 >>> 0 ? i176 : 16;
         i176 = i181 >>> 0 > i174 >>> 0 ? i181 : i174;
         do {
          if (i175 >>> 0 < i176 >>> 0) {
           if (i176 >>> 0 > 1073741823 >>> 0) {
            i171 = 551;
            break L9;
           }
           i181 = __ZN3WTF18fastMallocGoodSizeEj(i176 << 2) | 0;
           HEAP32[i110 >> 2] = i181 >>> 2;
           i182 = __ZN3WTF10fastMallocEj(i181) | 0;
           HEAP32[i109 >> 2] = i182;
           i181 = i180;
           _memcpy(i182 | 0, i181 | 0, i175 << 2) | 0;
           if ((i180 | 0) == 0) {
            break;
           }
           if ((HEAP32[i109 >> 2] | 0) == (i180 | 0)) {
            HEAP32[i109 >> 2] = 0;
            HEAP32[i110 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i181);
          }
         } while (0);
         i237 = i39;
         i238 = HEAP32[i109 >> 2] | 0;
        }
        HEAPF32[i238 + (HEAP32[i111 >> 2] << 2) >> 2] = +HEAPF32[i237 >> 2];
        i239 = HEAP32[i111 >> 2] | 0;
       } else {
        HEAPF32[(HEAP32[i109 >> 2] | 0) + (i175 << 2) >> 2] = d178;
        i239 = HEAP32[i111 >> 2] | 0;
       }
       HEAP32[i111 >> 2] = i239 + 1;
       __ZN3WTF6VectorIfLj0ENS_15CrashOnOverflowEEaSERKS2_(i113, i38) | 0;
       _memset(i114 | 0, 0, 36) | 0;
       __ZN7WebCore19FEComponentTransfer6createEPNS_6FilterERKNS_25ComponentTransferFunctionES5_S5_S5_(i41, i85, i37, i37, i37, i40);
       i180 = HEAP32[i115 >> 2] | 0;
       HEAP32[i115 >> 2] = 0;
       i176 = HEAP32[i67 >> 2] | 0;
       HEAP32[i67 >> 2] = i180;
       do {
        if ((i176 | 0) != 0) {
         i180 = i176 + 4 | 0;
         i174 = i180 | 0;
         i181 = (HEAP32[i174 >> 2] | 0) - 1 | 0;
         if ((i181 | 0) != 0) {
          HEAP32[i174 >> 2] = i181;
          break;
         }
         i181 = i180 - 4 | 0;
         if ((i181 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i181 >> 2] | 0) + 4 >> 2] & 15](i181);
        }
       } while (0);
       i176 = HEAP32[i115 >> 2] | 0;
       do {
        if ((i176 | 0) != 0) {
         i175 = i176 + 4 | 0;
         i181 = i175 | 0;
         i180 = (HEAP32[i181 >> 2] | 0) - 1 | 0;
         if ((i180 | 0) != 0) {
          HEAP32[i181 >> 2] = i180;
          break;
         }
         i180 = i175 - 4 | 0;
         if ((i180 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i180 >> 2] | 0) + 4 >> 2] & 15](i180);
        }
       } while (0);
       if ((HEAP32[i116 >> 2] | 0) != 0) {
        HEAP32[i116 >> 2] = 0;
       }
       i176 = HEAP32[i117 >> 2] | 0;
       if ((i176 | 0) != 0) {
        HEAP32[i117 >> 2] = 0;
        HEAP32[i121 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i176);
       }
       if ((HEAP32[i111 >> 2] | 0) != 0) {
        HEAP32[i111 >> 2] = 0;
       }
       i176 = HEAP32[i109 >> 2] | 0;
       if ((i176 | 0) != 0) {
        HEAP32[i109 >> 2] = 0;
        HEAP32[i110 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i176);
       }
       if ((HEAP32[i118 >> 2] | 0) != 0) {
        HEAP32[i118 >> 2] = 0;
       }
       i176 = HEAP32[i119 >> 2] | 0;
       if ((i176 | 0) == 0) {
        i171 = 714;
        break L12;
       }
       HEAP32[i119 >> 2] = 0;
       HEAP32[i120 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i176);
       i171 = 714;
       break;
      }
     case 6:
      {
       _memset(i122 | 0, 0, 36) | 0;
       HEAP32[i123 >> 2] = 2;
       HEAP32[i126 >> 2] = 0;
       i176 = __ZN3WTF18fastMallocGoodSizeEj(64) | 0;
       HEAP32[i125 >> 2] = i176 >>> 2;
       i180 = __ZN3WTF10fastMallocEj(i176) | 0;
       HEAP32[i124 >> 2] = i180;
       HEAPF32[i180 + (HEAP32[i126 >> 2] << 2) >> 2] = +0;
       i180 = HEAP32[i126 >> 2] | 0;
       i176 = i180 + 1 | 0;
       HEAP32[i126 >> 2] = i176;
       d178 = +HEAPF64[i172 + 16 >> 3];
       HEAPF32[i44 >> 2] = d178;
       if ((i176 | 0) == (HEAP32[i125 >> 2] | 0)) {
        i175 = i180 + 2 | 0;
        i180 = HEAP32[i124 >> 2] | 0;
        do {
         if (i180 >>> 0 > i44 >>> 0) {
          i171 = 592;
         } else {
          if ((i180 + (i176 << 2) | 0) >>> 0 <= i44 >>> 0) {
           i171 = 592;
           break;
          }
          i181 = i127 - i180 >> 2;
          i174 = i175 + (i176 >>> 2) | 0;
          i182 = i174 >>> 0 > 16 >>> 0 ? i174 : 16;
          i174 = i182 >>> 0 > i175 >>> 0 ? i182 : i175;
          do {
           if (i176 >>> 0 < i174 >>> 0) {
            if (i174 >>> 0 > 1073741823 >>> 0) {
             i171 = 602;
             break L9;
            }
            i182 = __ZN3WTF18fastMallocGoodSizeEj(i174 << 2) | 0;
            HEAP32[i125 >> 2] = i182 >>> 2;
            i187 = __ZN3WTF10fastMallocEj(i182) | 0;
            HEAP32[i124 >> 2] = i187;
            i182 = i180;
            _memcpy(i187 | 0, i182 | 0, i176 << 2) | 0;
            if ((i180 | 0) == 0) {
             break;
            }
            if ((HEAP32[i124 >> 2] | 0) == (i180 | 0)) {
             HEAP32[i124 >> 2] = 0;
             HEAP32[i125 >> 2] = 0;
            }
            __ZN3WTF8fastFreeEPv(i182);
           }
          } while (0);
          i174 = HEAP32[i124 >> 2] | 0;
          i240 = i174 + (i181 << 2) | 0;
          i241 = i174;
         }
        } while (0);
        if ((i171 | 0) == 592) {
         i171 = 0;
         i174 = i175 + (i176 >>> 2) | 0;
         i177 = i174 >>> 0 > 16 >>> 0 ? i174 : 16;
         i174 = i177 >>> 0 > i175 >>> 0 ? i177 : i175;
         do {
          if (i176 >>> 0 < i174 >>> 0) {
           if (i174 >>> 0 > 1073741823 >>> 0) {
            i171 = 594;
            break L9;
           }
           i177 = __ZN3WTF18fastMallocGoodSizeEj(i174 << 2) | 0;
           HEAP32[i125 >> 2] = i177 >>> 2;
           i182 = __ZN3WTF10fastMallocEj(i177) | 0;
           HEAP32[i124 >> 2] = i182;
           i177 = i180;
           _memcpy(i182 | 0, i177 | 0, i176 << 2) | 0;
           if ((i180 | 0) == 0) {
            break;
           }
           if ((HEAP32[i124 >> 2] | 0) == (i180 | 0)) {
            HEAP32[i124 >> 2] = 0;
            HEAP32[i125 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i177);
          }
         } while (0);
         i240 = i44;
         i241 = HEAP32[i124 >> 2] | 0;
        }
        HEAPF32[i241 + (HEAP32[i126 >> 2] << 2) >> 2] = +HEAPF32[i240 >> 2];
        i242 = HEAP32[i126 >> 2] | 0;
       } else {
        HEAPF32[(HEAP32[i124 >> 2] | 0) + (i176 << 2) >> 2] = d178;
        i242 = HEAP32[i126 >> 2] | 0;
       }
       HEAP32[i126 >> 2] = i242 + 1;
       __ZN3WTF6VectorIfLj0ENS_15CrashOnOverflowEEaSERKS2_(i128, i43) | 0;
       _memset(i129 | 0, 0, 36) | 0;
       __ZN7WebCore19FEComponentTransfer6createEPNS_6FilterERKNS_25ComponentTransferFunctionES5_S5_S5_(i46, i85, i45, i45, i45, i42);
       i180 = HEAP32[i130 >> 2] | 0;
       HEAP32[i130 >> 2] = 0;
       i174 = HEAP32[i67 >> 2] | 0;
       HEAP32[i67 >> 2] = i180;
       do {
        if ((i174 | 0) != 0) {
         i180 = i174 + 4 | 0;
         i175 = i180 | 0;
         i177 = (HEAP32[i175 >> 2] | 0) - 1 | 0;
         if ((i177 | 0) != 0) {
          HEAP32[i175 >> 2] = i177;
          break;
         }
         i177 = i180 - 4 | 0;
         if ((i177 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i177 >> 2] | 0) + 4 >> 2] & 15](i177);
        }
       } while (0);
       i174 = HEAP32[i130 >> 2] | 0;
       do {
        if ((i174 | 0) != 0) {
         i176 = i174 + 4 | 0;
         i177 = i176 | 0;
         i180 = (HEAP32[i177 >> 2] | 0) - 1 | 0;
         if ((i180 | 0) != 0) {
          HEAP32[i177 >> 2] = i180;
          break;
         }
         i180 = i176 - 4 | 0;
         if ((i180 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i180 >> 2] | 0) + 4 >> 2] & 15](i180);
        }
       } while (0);
       if ((HEAP32[i131 >> 2] | 0) != 0) {
        HEAP32[i131 >> 2] = 0;
       }
       i174 = HEAP32[i132 >> 2] | 0;
       if ((i174 | 0) != 0) {
        HEAP32[i132 >> 2] = 0;
        HEAP32[i136 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i174);
       }
       if ((HEAP32[i126 >> 2] | 0) != 0) {
        HEAP32[i126 >> 2] = 0;
       }
       i174 = HEAP32[i124 >> 2] | 0;
       if ((i174 | 0) != 0) {
        HEAP32[i124 >> 2] = 0;
        HEAP32[i125 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i174);
       }
       if ((HEAP32[i133 >> 2] | 0) != 0) {
        HEAP32[i133 >> 2] = 0;
       }
       i174 = HEAP32[i134 >> 2] | 0;
       if ((i174 | 0) == 0) {
        i171 = 714;
        break L12;
       }
       HEAP32[i134 >> 2] = 0;
       HEAP32[i135 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i174);
       i171 = 714;
       break;
      }
     case 7:
      {
       _memset(i137 | 0, 0, 36) | 0;
       HEAP32[i138 >> 2] = 4;
       HEAPF32[i139 >> 2] = +HEAPF64[i172 + 16 >> 3];
       HEAPF32[i140 >> 2] = +0;
       _memset(i141 | 0, 0, 36) | 0;
       __ZN7WebCore19FEComponentTransfer6createEPNS_6FilterERKNS_25ComponentTransferFunctionES5_S5_S5_(i49, i85, i47, i47, i47, i48);
       i174 = HEAP32[i142 >> 2] | 0;
       HEAP32[i142 >> 2] = 0;
       i180 = HEAP32[i67 >> 2] | 0;
       HEAP32[i67 >> 2] = i174;
       do {
        if ((i180 | 0) != 0) {
         i174 = i180 + 4 | 0;
         i176 = i174 | 0;
         i177 = (HEAP32[i176 >> 2] | 0) - 1 | 0;
         if ((i177 | 0) != 0) {
          HEAP32[i176 >> 2] = i177;
          break;
         }
         i177 = i174 - 4 | 0;
         if ((i177 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i177 >> 2] | 0) + 4 >> 2] & 15](i177);
        }
       } while (0);
       i180 = HEAP32[i142 >> 2] | 0;
       do {
        if ((i180 | 0) != 0) {
         i177 = i180 + 4 | 0;
         i174 = i177 | 0;
         i176 = (HEAP32[i174 >> 2] | 0) - 1 | 0;
         if ((i176 | 0) != 0) {
          HEAP32[i174 >> 2] = i176;
          break;
         }
         i176 = i177 - 4 | 0;
         if ((i176 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i176 >> 2] | 0) + 4 >> 2] & 15](i176);
        }
       } while (0);
       if ((HEAP32[i143 >> 2] | 0) != 0) {
        HEAP32[i143 >> 2] = 0;
       }
       i180 = HEAP32[i144 >> 2] | 0;
       if ((i180 | 0) != 0) {
        HEAP32[i144 >> 2] = 0;
        HEAP32[i148 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i180);
       }
       if ((HEAP32[i145 >> 2] | 0) != 0) {
        HEAP32[i145 >> 2] = 0;
       }
       i180 = HEAP32[i146 >> 2] | 0;
       if ((i180 | 0) == 0) {
        i171 = 714;
        break L12;
       }
       HEAP32[i146 >> 2] = 0;
       HEAP32[i147 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i180);
       i171 = 714;
       break;
      }
     case 8:
      {
       _memset(i149 | 0, 0, 36) | 0;
       HEAP32[i150 >> 2] = 4;
       d178 = +HEAPF64[i172 + 16 >> 3];
       HEAPF32[i151 >> 2] = d178;
       HEAPF32[i152 >> 2] = d178 * +-.5 + +.5;
       _memset(i153 | 0, 0, 36) | 0;
       __ZN7WebCore19FEComponentTransfer6createEPNS_6FilterERKNS_25ComponentTransferFunctionES5_S5_S5_(i52, i85, i50, i50, i50, i51);
       i180 = HEAP32[i154 >> 2] | 0;
       HEAP32[i154 >> 2] = 0;
       i176 = HEAP32[i67 >> 2] | 0;
       HEAP32[i67 >> 2] = i180;
       do {
        if ((i176 | 0) != 0) {
         i180 = i176 + 4 | 0;
         i177 = i180 | 0;
         i174 = (HEAP32[i177 >> 2] | 0) - 1 | 0;
         if ((i174 | 0) != 0) {
          HEAP32[i177 >> 2] = i174;
          break;
         }
         i174 = i180 - 4 | 0;
         if ((i174 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i174 >> 2] | 0) + 4 >> 2] & 15](i174);
        }
       } while (0);
       i176 = HEAP32[i154 >> 2] | 0;
       do {
        if ((i176 | 0) != 0) {
         i174 = i176 + 4 | 0;
         i180 = i174 | 0;
         i177 = (HEAP32[i180 >> 2] | 0) - 1 | 0;
         if ((i177 | 0) != 0) {
          HEAP32[i180 >> 2] = i177;
          break;
         }
         i177 = i174 - 4 | 0;
         if ((i177 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i177 >> 2] | 0) + 4 >> 2] & 15](i177);
        }
       } while (0);
       if ((HEAP32[i155 >> 2] | 0) != 0) {
        HEAP32[i155 >> 2] = 0;
       }
       i176 = HEAP32[i156 >> 2] | 0;
       if ((i176 | 0) != 0) {
        HEAP32[i156 >> 2] = 0;
        HEAP32[i160 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i176);
       }
       if ((HEAP32[i157 >> 2] | 0) != 0) {
        HEAP32[i157 >> 2] = 0;
       }
       i176 = HEAP32[i158 >> 2] | 0;
       if ((i176 | 0) == 0) {
        i171 = 714;
        break L12;
       }
       HEAP32[i158 >> 2] = 0;
       HEAP32[i159 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i176);
       i171 = 714;
       break;
      }
     case 9:
      {
       d178 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i172 + 12 | 0, +0, 0);
       __ZN7WebCore14FEGaussianBlur6createEPNS_6FilterEffNS_12EdgeModeTypeE(i53, i85, d178, d178, i161);
       i176 = HEAP32[i162 >> 2] | 0;
       HEAP32[i162 >> 2] = 0;
       i177 = HEAP32[i67 >> 2] | 0;
       HEAP32[i67 >> 2] = i176;
       do {
        if ((i177 | 0) != 0) {
         i176 = i177 + 4 | 0;
         i174 = i176 | 0;
         i180 = (HEAP32[i174 >> 2] | 0) - 1 | 0;
         if ((i180 | 0) != 0) {
          HEAP32[i174 >> 2] = i180;
          break;
         }
         i180 = i176 - 4 | 0;
         if ((i180 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i180 >> 2] | 0) + 4 >> 2] & 15](i180);
        }
       } while (0);
       i177 = HEAP32[i162 >> 2] | 0;
       if ((i177 | 0) == 0) {
        i171 = 714;
        break L12;
       }
       i180 = i177 + 4 | 0;
       i177 = i180 | 0;
       i176 = (HEAP32[i177 >> 2] | 0) - 1 | 0;
       if ((i176 | 0) != 0) {
        HEAP32[i177 >> 2] = i176;
        i171 = 714;
        break L12;
       }
       i176 = i180 - 4 | 0;
       if ((i176 | 0) == 0) {
        i171 = 714;
        break L12;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i176 >> 2] | 0) + 4 >> 2] & 15](i176);
       i171 = 714;
       break;
      }
     case 10:
      {
       d178 = +(HEAP32[i172 + 20 >> 2] | 0);
       d192 = +(HEAP32[i172 + 12 >> 2] | 0);
       d186 = +(HEAP32[i172 + 16 >> 2] | 0);
       i176 = i172 + 24 | 0;
       i180 = HEAP32[i176 + 4 >> 2] | 0;
       HEAP32[i55 >> 2] = HEAP32[i176 >> 2];
       HEAP32[i55 + 4 >> 2] = i180;
       __ZN7WebCore12FEDropShadow6createEPNS_6FilterEffffRKNS_5ColorEf(i54, i85, d178, d178, d192, d186, i56, +1);
       i180 = HEAP32[i163 >> 2] | 0;
       HEAP32[i163 >> 2] = 0;
       i176 = HEAP32[i67 >> 2] | 0;
       HEAP32[i67 >> 2] = i180;
       do {
        if ((i176 | 0) != 0) {
         i180 = i176 + 4 | 0;
         i177 = i180 | 0;
         i174 = (HEAP32[i177 >> 2] | 0) - 1 | 0;
         if ((i174 | 0) != 0) {
          HEAP32[i177 >> 2] = i174;
          break;
         }
         i174 = i180 - 4 | 0;
         if ((i174 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i174 >> 2] | 0) + 4 >> 2] & 15](i174);
        }
       } while (0);
       i176 = HEAP32[i163 >> 2] | 0;
       if ((i176 | 0) == 0) {
        i171 = 714;
        break L12;
       }
       i174 = i176 + 4 | 0;
       i176 = i174 | 0;
       i180 = (HEAP32[i176 >> 2] | 0) - 1 | 0;
       if ((i180 | 0) != 0) {
        HEAP32[i176 >> 2] = i180;
        i171 = 714;
        break L12;
       }
       i180 = i174 - 4 | 0;
       if ((i180 | 0) == 0) {
        i171 = 714;
        break L12;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i180 >> 2] | 0) + 4 >> 2] & 15](i180);
       i171 = 714;
       break;
      }
     case 12:
      {
       do {
        if (i164) {
         i171 = 689;
        } else {
         i180 = HEAP32[(HEAP32[(HEAP32[i166 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
         if ((i180 | 0) == 0) {
          i171 = 689;
          break;
         }
         i174 = __ZN7WebCore10RenderView25customFilterGlobalContextEv(HEAP32[i180 + 1584 >> 2] | 0) | 0;
         i176 = __ZNK7WebCore9FrameView10hostWindowEv(__ZNK7WebCore8Document4viewEv(i180) | 0) | 0;
         __ZN7WebCore25CustomFilterGlobalContext22prepareContextIfNeededEPNS_10HostWindowEb(i174, i176, (HEAP8[(HEAP32[(HEAP32[i180 + 332 >> 2] | 0) + 36 >> 2] | 0) + 185 | 0] & 8) != 0);
         i180 = HEAP32[i174 >> 2] | 0;
         if ((i180 | 0) == 0) {
          HEAP32[i165 >> 2] = 0;
          break;
         }
         HEAP32[i167 >> 2] = i180;
         i174 = i180 | 0;
         HEAP32[i174 >> 2] = (HEAP32[i174 >> 2] | 0) + 1;
         i174 = HEAP32[i172 + 12 >> 2] | 0;
         HEAP32[i168 >> 2] = i174;
         if ((i174 | 0) != 0) {
          i180 = i174 | 0;
          HEAP32[i180 >> 2] = (HEAP32[i180 >> 2] | 0) + 1;
         }
         __ZN7WebCore14FECustomFilter6createEPNS_6FilterEN3WTF10PassRefPtrINS_17GraphicsContext3DEEENS4_INS_28CustomFilterValidatedProgramEEERKNS_25CustomFilterParameterListEjjNS_20CustomFilterMeshTypeE(i57, i85, i6, i7, i172 + 16 | 0, HEAP32[i172 + 28 >> 2] | 0, HEAP32[i172 + 32 >> 2] | 0, HEAP32[i172 + 36 >> 2] | 0);
         i180 = HEAP32[i168 >> 2] | 0;
         do {
          if ((i180 | 0) != 0) {
           i174 = i180 | 0;
           i176 = (HEAP32[i174 >> 2] | 0) - 1 | 0;
           if ((i176 | 0) == 0) {
            __ZN7WebCore28CustomFilterValidatedProgramD1Ev(i180);
            __ZN3WTF8fastFreeEPv(i180);
            break;
           } else {
            HEAP32[i174 >> 2] = i176;
            break;
           }
          }
         } while (0);
         i180 = HEAP32[i167 >> 2] | 0;
         if ((i180 | 0) == 0) {
          break;
         }
         i181 = i180 | 0;
         i176 = (HEAP32[i181 >> 2] | 0) - 1 | 0;
         if ((i176 | 0) == 0) {
          __ZN7WebCore17GraphicsContext3DD1Ev(i180);
          __ZN3WTF8fastFreeEPv(i180);
          break;
         } else {
          HEAP32[i181 >> 2] = i176;
          break;
         }
        }
       } while (0);
       if ((i171 | 0) == 689) {
        i171 = 0;
        HEAP32[i165 >> 2] = 0;
       }
       i176 = HEAP32[i165 >> 2] | 0;
       HEAP32[i165 >> 2] = 0;
       i181 = HEAP32[i67 >> 2] | 0;
       HEAP32[i67 >> 2] = i176;
       do {
        if ((i181 | 0) != 0) {
         i176 = i181 + 4 | 0;
         i180 = i176 | 0;
         i174 = (HEAP32[i180 >> 2] | 0) - 1 | 0;
         if ((i174 | 0) != 0) {
          HEAP32[i180 >> 2] = i174;
          break;
         }
         i174 = i176 - 4 | 0;
         if ((i174 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i174 >> 2] | 0) + 4 >> 2] & 15](i174);
        }
       } while (0);
       i181 = HEAP32[i165 >> 2] | 0;
       do {
        if ((i181 | 0) != 0) {
         i174 = i181 + 4 | 0;
         i176 = i174 | 0;
         i180 = (HEAP32[i176 >> 2] | 0) - 1 | 0;
         if ((i180 | 0) != 0) {
          HEAP32[i176 >> 2] = i180;
          break;
         }
         i180 = i174 - 4 | 0;
         if ((i180 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i180 >> 2] | 0) + 4 >> 2] & 15](i180);
        }
       } while (0);
       if ((HEAP32[i67 >> 2] | 0) == 0) {
        break L12;
       }
       HEAP8[i58] = 1;
       i171 = 714;
       break;
      }
     default:
      {
       i171 = 714;
      }
     }
    } while (0);
    do {
     if ((i171 | 0) == 714) {
      i171 = 0;
      i181 = HEAP32[i67 >> 2] | 0;
      if ((i181 | 0) == 0) {
       break;
      }
      HEAP8[i181 + 108 | 0] = i69;
      i181 = HEAP32[i67 >> 2] | 0;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i181 >> 2] | 0) + 32 >> 2] & 7](i181, 0);
      do {
       if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i173 >> 2] | 0) + 20 >> 2] & 3](i172) | 0) != 0) {
        i181 = HEAP32[i67 >> 2] | 0;
        i180 = i181 + 20 | 0;
        i174 = i181 + 28 | 0;
        i176 = HEAP32[i174 >> 2] | 0;
        do {
         if ((i176 | 0) == (HEAP32[i181 + 24 >> 2] | 0)) {
          i177 = i176 + 1 | 0;
          i175 = i180 | 0;
          i182 = HEAP32[i175 >> 2] | 0;
          do {
           if (i182 >>> 0 > i9 >>> 0) {
            i171 = 721;
           } else {
            if ((i182 + (i176 << 2) | 0) >>> 0 <= i9 >>> 0) {
             i171 = 721;
             break;
            }
            __ZN3WTF6VectorINS_6RefPtrIN7WebCore12FilterEffectEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i180, i177);
            i187 = HEAP32[i175 >> 2] | 0;
            i243 = i187 + (i70 - i182 >> 2 << 2) | 0;
            i244 = i187;
           }
          } while (0);
          if ((i171 | 0) == 721) {
           i171 = 0;
           __ZN3WTF6VectorINS_6RefPtrIN7WebCore12FilterEffectEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i180, i177);
           i243 = i9;
           i244 = HEAP32[i175 >> 2] | 0;
          }
          i182 = HEAP32[i243 >> 2] | 0;
          HEAP32[i244 + (HEAP32[i174 >> 2] << 2) >> 2] = i182;
          if ((i182 | 0) == 0) {
           break;
          }
          i187 = i182 + 4 | 0;
          HEAP32[i187 >> 2] = (HEAP32[i187 >> 2] | 0) + 1;
         } else {
          i187 = HEAP32[i64 >> 2] | 0;
          HEAP32[(HEAP32[i180 >> 2] | 0) + (i176 << 2) >> 2] = i187;
          if ((i187 | 0) == 0) {
           break;
          }
          i182 = i187 + 4 | 0;
          HEAP32[i182 >> 2] = (HEAP32[i182 >> 2] | 0) + 1;
         }
        } while (0);
        HEAP32[i174 >> 2] = (HEAP32[i174 >> 2] | 0) + 1;
        i176 = HEAP32[i59 >> 2] | 0;
        if ((i176 | 0) != (HEAP32[i63 >> 2] | 0)) {
         i180 = HEAP32[i67 >> 2] | 0;
         HEAP32[(HEAP32[i61 >> 2] | 0) + (i176 << 2) >> 2] = i180;
         if ((i180 | 0) != 0) {
          i181 = i180 + 4 | 0;
          HEAP32[i181 >> 2] = (HEAP32[i181 >> 2] | 0) + 1;
         }
         HEAP32[i59 >> 2] = (HEAP32[i59 >> 2] | 0) + 1;
         break;
        }
        i181 = i176 + 1 | 0;
        i180 = HEAP32[i61 >> 2] | 0;
        do {
         if (i180 >>> 0 > i10 >>> 0) {
          i171 = 731;
         } else {
          if ((i180 + (i176 << 2) | 0) >>> 0 <= i10 >>> 0) {
           i171 = 731;
           break;
          }
          __ZN3WTF6VectorINS_6RefPtrIN7WebCore12FilterEffectEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i60, i181);
          i182 = HEAP32[i61 >> 2] | 0;
          i245 = i182 + (i71 - i180 >> 2 << 2) | 0;
          i246 = i182;
         }
        } while (0);
        if ((i171 | 0) == 731) {
         i171 = 0;
         __ZN3WTF6VectorINS_6RefPtrIN7WebCore12FilterEffectEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i60, i181);
         i245 = i10;
         i246 = HEAP32[i61 >> 2] | 0;
        }
        i180 = HEAP32[i245 >> 2] | 0;
        HEAP32[i246 + (HEAP32[i59 >> 2] << 2) >> 2] = i180;
        if ((i180 | 0) != 0) {
         i176 = i180 + 4 | 0;
         HEAP32[i176 >> 2] = (HEAP32[i176 >> 2] | 0) + 1;
        }
        HEAP32[i59 >> 2] = (HEAP32[i59 >> 2] | 0) + 1;
       }
      } while (0);
      i176 = HEAP32[i67 >> 2] | 0;
      HEAP32[i67 >> 2] = 0;
      i180 = HEAP32[i64 >> 2] | 0;
      HEAP32[i64 >> 2] = i176;
      do {
       if ((i180 | 0) != 0) {
        i176 = i180 + 4 | 0;
        i174 = i176 | 0;
        i182 = (HEAP32[i174 >> 2] | 0) - 1 | 0;
        if ((i182 | 0) != 0) {
         HEAP32[i174 >> 2] = i182;
         break;
        }
        i182 = i176 - 4 | 0;
        if ((i182 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i182 >> 2] | 0) + 4 >> 2] & 15](i182);
       }
      } while (0);
      i180 = HEAP32[i67 >> 2] | 0;
      if ((i180 | 0) == 0) {
       break;
      }
      i182 = i180 + 4 | 0;
      i180 = i182 | 0;
      i176 = (HEAP32[i180 >> 2] | 0) - 1 | 0;
      if ((i176 | 0) != 0) {
       HEAP32[i180 >> 2] = i176;
       break;
      }
      i176 = i182 - 4 | 0;
      if ((i176 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i176 >> 2] | 0) + 4 >> 2] & 15](i176);
     }
    } while (0);
    i169 = i169 + 1 | 0;
    i170 = HEAP32[i66 >> 2] | 0;
    if (i169 >>> 0 >= i170 >>> 0) {
     break L7;
    }
   }
   if ((i171 | 0) == 58) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 66) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 77) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 87) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 99) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 107) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 120) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 128) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 8) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else if ((i171 | 0) == 37) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 45) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 141) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 149) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 160) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 170) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 182) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 190) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 203) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 211) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 224) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 232) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 243) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 253) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 281) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 289) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 302) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 310) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 321) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 331) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 343) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 351) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 364) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 372) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 385) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 393) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 404) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 414) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 426) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 434) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 447) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 455) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 468) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 476) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 487) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 497) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 551) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 559) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 594) {
    _WTFCrash();
    return 0;
   } else if ((i171 | 0) == 602) {
    _WTFCrash();
    return 0;
   }
  }
 } while (0);
 if ((HEAP32[i59 >> 2] | 0) == 0) {
  i247 = 0;
 } else {
  i171 = i1 + 56 | 0;
  i66 = i1 + 24 | 0;
  i1 = 0;
  while (1) {
   i246 = HEAP32[(HEAP32[i171 >> 2] | 0) + (i1 << 2) >> 2] | 0;
   do {
    if ((i246 | 0) == 0) {
     HEAP32[13] = HEAP32[i66 >> 2];
     HEAP32[14] = HEAP32[i66 + 4 >> 2];
     HEAP32[15] = HEAP32[i66 + 8 >> 2];
     HEAP32[16] = HEAP32[i66 + 12 >> 2];
    } else {
     i245 = i246 + 4 | 0;
     i61 = HEAP32[i245 >> 2] | 0;
     HEAP32[i245 >> 2] = i61 + 1;
     i245 = i246 + 52 | 0;
     HEAP32[i245 >> 2] = HEAP32[i66 >> 2];
     HEAP32[i245 + 4 >> 2] = HEAP32[i66 + 4 >> 2];
     HEAP32[i245 + 8 >> 2] = HEAP32[i66 + 8 >> 2];
     HEAP32[i245 + 12 >> 2] = HEAP32[i66 + 12 >> 2];
     i245 = i246 + 4 | 0;
     if ((i61 | 0) != 0) {
      HEAP32[i245 >> 2] = i61;
      break;
     }
     i61 = i245 - 4 | 0;
     if ((i61 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i61 >> 2] | 0) + 4 >> 2] & 15](i61);
    }
   } while (0);
   i246 = i1 + 1 | 0;
   if (i246 >>> 0 < (HEAP32[i59 >> 2] | 0) >>> 0) {
    i1 = i246;
   } else {
    i247 = 1;
    break;
   }
  }
 }
 i1 = HEAP32[i64 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i64 = i1 + 4 | 0;
   i59 = i64 | 0;
   i66 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
   if ((i66 | 0) != 0) {
    HEAP32[i59 >> 2] = i66;
    break;
   }
   i66 = i64 - 4 | 0;
   if ((i66 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i66 >> 2] | 0) + 4 >> 2] & 15](i66);
  }
 } while (0);
 if ((i8 | 0) != 0) {
  i1 = i62 + (i8 << 2) | 0;
  i8 = i62;
  while (1) {
   i66 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i66 | 0) != 0) {
     i64 = i66 + 4 | 0;
     i59 = i64 | 0;
     i171 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
     if ((i171 | 0) != 0) {
      HEAP32[i59 >> 2] = i171;
      break;
     }
     i171 = i64 - 4 | 0;
     if ((i171 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i171 >> 2] | 0) + 4 >> 2] & 15](i171);
    }
   } while (0);
   i8 = i8 + 4 | 0;
   if ((i8 | 0) == (i1 | 0)) {
    break;
   }
  }
 }
 if ((i62 | 0) == 0) {
  STACKTOP = i5;
  return i247 | 0;
 }
 __ZN3WTF8fastFreeEPv(i62);
 STACKTOP = i5;
 return i247 | 0;
}
function __ZN7WebCore20FilterEffectRenderer20buildReferenceFilterEPNS_13RenderElementEN3WTF10PassRefPtrINS_12FilterEffectEEEPNS_24ReferenceFilterOperationE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 i14 = i6 + 56 | 0;
 i15 = i6 + 64 | 0;
 i16 = i6 + 72 | 0;
 i17 = i6 + 80 | 0;
 i18 = i6 + 88 | 0;
 i19 = i6 + 96 | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i6;
  return;
 }
 i20 = i3 + 4 | 0;
 i21 = HEAP32[(HEAP32[(HEAP32[i20 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 i22 = HEAP32[i5 + 20 >> 2] | 0;
 do {
  if ((i22 | 0) == 0) {
   i23 = i21;
  } else {
   i24 = HEAP32[i22 + 4 >> 2] | 0;
   if ((i24 | 0) == 0) {
    i23 = i21;
    break;
   }
   i23 = HEAP32[i24 + 640 >> 2] | 0;
  }
 } while (0);
 if ((i23 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i6;
  return;
 }
 i21 = i23 + 44 | 0;
 i22 = i5 + 16 | 0;
 i5 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i24 = i12 | 0;
   HEAP32[i24 >> 2] = 0;
   i25 = i24;
  } else {
   if ((HEAP32[i5 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i12, i5);
    i25 = i12 | 0;
    break;
   } else {
    i24 = i12 | 0;
    HEAP32[i24 >> 2] = i5;
    i26 = i5 | 0;
    HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
    i25 = i24;
    break;
   }
  }
 } while (0);
 i5 = i13 | 0;
 HEAP32[i5 >> 2] = HEAP32[i25 >> 2];
 i25 = __ZNK7WebCore9TreeScope14getElementByIdERKN3WTF12AtomicStringE(i21, i13) | 0;
 i13 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i5 = i13 | 0;
   i21 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i5 >> 2] = i21;
    break;
   }
  }
 } while (0);
 if ((i25 | 0) == 0) {
  i13 = __ZN7WebCore8Document19accessSVGExtensionsEv(i23) | 0;
  i23 = HEAP32[i22 >> 2] | 0;
  do {
   if ((i23 | 0) == 0) {
    i22 = i10 | 0;
    HEAP32[i22 >> 2] = 0;
    i27 = i22;
   } else {
    if ((HEAP32[i23 + 16 >> 2] & 16 | 0) == 0) {
     __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i10, i23);
     i27 = i10 | 0;
     break;
    } else {
     i22 = i10 | 0;
     HEAP32[i22 >> 2] = i23;
     i21 = i23 | 0;
     HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 2;
     i27 = i22;
     break;
    }
   }
  } while (0);
  i23 = i14 | 0;
  HEAP32[i23 >> 2] = HEAP32[i27 >> 2];
  if ((HEAP32[i3 + 20 >> 2] & 128 | 0) == 0) {
   i28 = HEAP32[i20 >> 2] | 0;
  } else {
   i28 = 0;
  }
  __ZN7WebCore21SVGDocumentExtensions18addPendingResourceERKN3WTF12AtomicStringEPNS_7ElementE(i13, i14, i28);
  i28 = HEAP32[i23 >> 2] | 0;
  do {
   if ((i28 | 0) != 0) {
    i23 = i28 | 0;
    i14 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
    if ((i14 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i28);
     break;
    } else {
     HEAP32[i23 >> 2] = i14;
     break;
    }
   }
  } while (0);
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i6;
  return;
 }
 i28 = i15 | 0;
 HEAP32[i28 >> 2] = 0;
 i14 = i2 | 0;
 __ZN7WebCore11SourceAlpha6createEPNS_6FilterE(i16, i14);
 i23 = __Znwj(84) | 0;
 i13 = i23;
 i20 = i7 | 0;
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i20 >> 2] = i4;
 i4 = i8 | 0;
 i3 = i16 | 0;
 i16 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i4 >> 2] = i16;
 __ZN7WebCore16SVGFilterBuilderC1EN3WTF10PassRefPtrINS_12FilterEffectEEES4_(i13, i7, i8);
 i8 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i4 = i8 + 4 | 0;
   i7 = i4 | 0;
   i16 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i7 >> 2] = i16;
    break;
   }
   i16 = i4 - 4 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 15](i16);
  }
 } while (0);
 i8 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i20 = i8 + 4 | 0;
   i16 = i20 | 0;
   i4 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i16 >> 2] = i4;
    break;
   }
   i4 = i20 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 15](i4);
  }
 } while (0);
 i8 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i3 = i8 + 4 | 0;
   i4 = i3 | 0;
   i20 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i4 >> 2] = i20;
    break;
   }
   i20 = i3 - 4 | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 15](i20);
  }
 } while (0);
 i8 = HEAP32[i25 + 36 >> 2] | 0;
 L67 : do {
  if ((i8 | 0) != 0) {
   i25 = i8;
   while (1) {
    if ((HEAP32[i25 + 12 >> 2] & 36 | 0) == 36) {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 592 >> 2] & 3](i25) | 0) {
      break;
     }
    }
    i20 = HEAP32[i25 + 28 >> 2] | 0;
    if ((i20 | 0) == 0) {
     break L67;
    } else {
     i25 = i20;
    }
   }
   if ((i25 | 0) == 0) {
    break;
   }
   i20 = i17 | 0;
   i3 = i9 | 0;
   i4 = i9 + 4 | 0;
   i16 = i11 | 0;
   i7 = i18 | 0;
   i27 = i19 | 0;
   i10 = i2 + 56 | 0;
   i22 = i2 + 64 | 0;
   i21 = i2 + 60 | 0;
   i5 = i10 | 0;
   i12 = i15;
   i24 = i25;
   while (1) {
    i26 = i24;
    FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i24 >> 2] | 0) + 656 >> 2] & 1](i17, i26, i13, i14);
    i29 = HEAP32[i20 >> 2] | 0;
    HEAP32[i20 >> 2] = 0;
    i30 = HEAP32[i28 >> 2] | 0;
    HEAP32[i28 >> 2] = i29;
    do {
     if ((i30 | 0) != 0) {
      i29 = i30 + 4 | 0;
      i31 = i29 | 0;
      i32 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
      if ((i32 | 0) != 0) {
       HEAP32[i31 >> 2] = i32;
       break;
      }
      i32 = i29 - 4 | 0;
      if ((i32 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i32 >> 2] | 0) + 4 >> 2] & 15](i32);
     }
    } while (0);
    i30 = HEAP32[i20 >> 2] | 0;
    do {
     if ((i30 | 0) != 0) {
      i32 = i30 + 4 | 0;
      i29 = i32 | 0;
      i31 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
      if ((i31 | 0) != 0) {
       HEAP32[i29 >> 2] = i31;
       break;
      }
      i31 = i32 - 4 | 0;
      if ((i31 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] & 15](i31);
     }
    } while (0);
    i30 = HEAP32[i28 >> 2] | 0;
    do {
     if ((i30 | 0) != 0) {
      __ZNK7WebCore36SVGFilterPrimitiveStandardAttributes21setStandardAttributesEPNS_12FilterEffectE(i26, i30);
      i31 = HEAP32[(__ZN7WebCore36SVGFilterPrimitiveStandardAttributes18resultPropertyInfoEv() | 0) + 12 >> 2] | 0;
      HEAP32[i3 >> 2] = i24;
      HEAP32[i4 >> 2] = HEAP32[i31 >> 2];
      i31 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i9) | 0;
      do {
       if ((i31 | 0) == 0) {
        i33 = 66;
       } else {
        i32 = HEAP32[i31 + 8 >> 2] | 0;
        if ((i32 | 0) == 0) {
         i33 = 66;
         break;
        }
        if ((HEAP8[i32 + 20 | 0] & 1) == 0) {
         i33 = 66;
         break;
        }
        i34 = HEAP32[i32 + 28 >> 2] | 0;
       }
      } while (0);
      if ((i33 | 0) == 66) {
       i33 = 0;
       i34 = i24 + 140 | 0;
      }
      i31 = HEAP32[i34 >> 2] | 0;
      do {
       if ((i31 | 0) == 0) {
        HEAP32[i16 >> 2] = 0;
       } else {
        if ((HEAP32[i31 + 16 >> 2] & 16 | 0) == 0) {
         __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i11, i31);
         break;
        } else {
         HEAP32[i16 >> 2] = i31;
         i32 = i31 | 0;
         HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 2;
         break;
        }
       }
      } while (0);
      HEAP32[i7 >> 2] = HEAP32[i16 >> 2];
      i31 = HEAP32[i28 >> 2] | 0;
      HEAP32[i27 >> 2] = i31;
      if ((i31 | 0) != 0) {
       i32 = i31 + 4 | 0;
       HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
      }
      __ZN7WebCore16SVGFilterBuilder3addERKN3WTF12AtomicStringENS1_10PassRefPtrINS_12FilterEffectEEE(i13, i18, i19);
      i32 = HEAP32[i27 >> 2] | 0;
      do {
       if ((i32 | 0) != 0) {
        i31 = i32 + 4 | 0;
        i29 = i31 | 0;
        i35 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
        if ((i35 | 0) != 0) {
         HEAP32[i29 >> 2] = i35;
         break;
        }
        i35 = i31 - 4 | 0;
        if ((i35 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i35 >> 2] | 0) + 4 >> 2] & 15](i35);
       }
      } while (0);
      i32 = HEAP32[i7 >> 2] | 0;
      do {
       if ((i32 | 0) != 0) {
        i35 = i32 | 0;
        i31 = (HEAP32[i35 >> 2] | 0) - 2 | 0;
        if ((i31 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i32);
         break;
        } else {
         HEAP32[i35 >> 2] = i31;
         break;
        }
       }
      } while (0);
      i32 = HEAP32[i22 >> 2] | 0;
      if ((i32 | 0) != (HEAP32[i21 >> 2] | 0)) {
       i31 = HEAP32[i28 >> 2] | 0;
       HEAP32[(HEAP32[i5 >> 2] | 0) + (i32 << 2) >> 2] = i31;
       if ((i31 | 0) != 0) {
        i35 = i31 + 4 | 0;
        HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 1;
       }
       HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
       break;
      }
      i35 = i32 + 1 | 0;
      i31 = HEAP32[i5 >> 2] | 0;
      do {
       if (i31 >>> 0 > i15 >>> 0) {
        i33 = 89;
       } else {
        if ((i31 + (i32 << 2) | 0) >>> 0 <= i15 >>> 0) {
         i33 = 89;
         break;
        }
        __ZN3WTF6VectorINS_6RefPtrIN7WebCore12FilterEffectEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i10, i35);
        i29 = HEAP32[i5 >> 2] | 0;
        i36 = i29 + (i12 - i31 >> 2 << 2) | 0;
        i37 = i29;
       }
      } while (0);
      if ((i33 | 0) == 89) {
       i33 = 0;
       __ZN3WTF6VectorINS_6RefPtrIN7WebCore12FilterEffectEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i10, i35);
       i36 = i15;
       i37 = HEAP32[i5 >> 2] | 0;
      }
      i31 = HEAP32[i36 >> 2] | 0;
      HEAP32[i37 + (HEAP32[i22 >> 2] << 2) >> 2] = i31;
      if ((i31 | 0) != 0) {
       i32 = i31 + 4 | 0;
       HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
      }
      HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
     }
    } while (0);
    i30 = HEAP32[i24 + 28 >> 2] | 0;
    if ((i30 | 0) == 0) {
     break L67;
    } else {
     i38 = i30;
    }
    while (1) {
     if ((HEAP32[i38 + 12 >> 2] & 36 | 0) == 36) {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i38 >> 2] | 0) + 592 >> 2] & 3](i38) | 0) {
       break;
      }
     }
     i30 = HEAP32[i38 + 28 >> 2] | 0;
     if ((i30 | 0) == 0) {
      break L67;
     } else {
      i38 = i30;
     }
    }
    if ((i38 | 0) == 0) {
     break;
    } else {
     i24 = i38;
    }
   }
  }
 } while (0);
 i38 = HEAP32[i28 >> 2] | 0;
 HEAP32[i1 >> 2] = i38;
 if ((i38 | 0) != 0) {
  i1 = i38 + 4 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 }
 if ((i23 | 0) != 0) {
  __ZN7WebCore16SVGFilterBuilderD2Ev(i13);
  __ZdlPv(i23);
 }
 i23 = HEAP32[i28 >> 2] | 0;
 if ((i23 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i28 = i23 + 4 | 0;
 i23 = i28 | 0;
 i13 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
 if ((i13 | 0) != 0) {
  HEAP32[i23 >> 2] = i13;
  STACKTOP = i6;
  return;
 }
 i13 = i28 - 4 | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 15](i13);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore16SVGFilterBuilderD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = HEAP32[i1 + 80 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i5 = HEAP32[i1 + 44 >> 2] | 0;
  if ((i5 | 0) > 0) {
   i3 = 0;
   while (1) {
    i4 = i2 + (i3 * 24 & -1) | 0;
    i6 = HEAP32[i4 >> 2] | 0;
    do {
     if ((i6 | 0) != -1) {
      i7 = HEAP32[i2 + (i3 * 24 & -1) + 4 >> 2] | 0;
      if ((i7 | 0) == 0) {
       i8 = i6;
      } else {
       __ZN3WTF8fastFreeEPv(i7);
       i8 = HEAP32[i4 >> 2] | 0;
      }
      if ((i8 | 0) == 0) {
       break;
      }
      i7 = i8 + 4 | 0;
      i9 = i7 | 0;
      i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
      if ((i10 | 0) != 0) {
       HEAP32[i9 >> 2] = i10;
       break;
      }
      i10 = i7 - 4 | 0;
      if ((i10 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 15](i10);
     }
    } while (0);
    i3 = i3 + 1 | 0;
    if ((i3 | 0) >= (i5 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i5 = HEAP32[i1 + 24 >> 2] | 0;
  if ((i5 | 0) > 0) {
   i3 = 0;
   while (1) {
    i8 = i2 + (i3 << 3) | 0;
    do {
     if ((HEAP32[i8 >> 2] | 0) != -1) {
      i4 = HEAP32[i2 + (i3 << 3) + 4 >> 2] | 0;
      do {
       if ((i4 | 0) != 0) {
        i6 = i4 + 4 | 0;
        i10 = i6 | 0;
        i7 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
        if ((i7 | 0) != 0) {
         HEAP32[i10 >> 2] = i7;
         break;
        }
        i7 = i6 - 4 | 0;
        if ((i7 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 15](i7);
       }
      } while (0);
      i4 = HEAP32[i8 >> 2] | 0;
      if ((i4 | 0) == 0) {
       break;
      }
      i7 = i4 | 0;
      i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
      if ((i6 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i4);
       break;
      } else {
       HEAP32[i7 >> 2] = i6;
       break;
      }
     }
    } while (0);
    i3 = i3 + 1 | 0;
    if ((i3 | 0) >= (i5 | 0)) {
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
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i5 | 0) > 0) {
  i1 = 0;
  while (1) {
   i3 = i2 + (i1 << 3) | 0;
   do {
    if ((HEAP32[i3 >> 2] | 0) != -1) {
     i8 = HEAP32[i2 + (i1 << 3) + 4 >> 2] | 0;
     do {
      if ((i8 | 0) != 0) {
       i6 = i8 + 4 | 0;
       i7 = i6 | 0;
       i4 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
       if ((i4 | 0) != 0) {
        HEAP32[i7 >> 2] = i4;
        break;
       }
       i4 = i6 - 4 | 0;
       if ((i4 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 15](i4);
      }
     } while (0);
     i8 = HEAP32[i3 >> 2] | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     i4 = i8 | 0;
     i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i6 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i4 >> 2] = i6;
      break;
     }
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i5 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore26FilterEffectRendererHelper19prepareFilterEffectEPNS_11RenderLayerERKNS_10LayoutRectES5_S5_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, d19 = +0, d20 = +0, i21 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i8 | 0;
 i10 = i8;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i12 = i11 | 0;
 i13 = i11;
 HEAP32[i1 >> 2] = i2;
 i14 = i1 + 12 | 0;
 i15 = i14;
 i16 = i4;
 HEAP32[i15 >> 2] = HEAP32[i16 >> 2];
 HEAP32[i15 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
 HEAP32[i15 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
 HEAP32[i15 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
 i4 = __ZNK7WebCore11RenderLayer14filterRendererEv(i2) | 0;
 i2 = i7;
 if ((HEAP8[i4 + 90 | 0] & 1) == 0) {
  HEAP32[i2 >> 2] = HEAP32[i16 >> 2];
  HEAP32[i2 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
  HEAP32[i2 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
  HEAP32[i2 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
  if ((HEAP8[i4 + 89 | 0] & 1) != 0) {
   i16 = HEAP32[i4 + 76 >> 2] | 0;
   i17 = HEAP32[i4 + 80 >> 2] | 0;
   i18 = i7 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) - i16;
   i18 = i7 + 4 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) - i17;
   i18 = (HEAP32[i4 + 72 >> 2] | 0) + i17 | 0;
   i17 = i7 + 8 | 0;
   HEAP32[i17 >> 2] = (HEAP32[i4 + 84 >> 2] | 0) + i16 + (HEAP32[i17 >> 2] | 0);
   i17 = i7 + 12 | 0;
   HEAP32[i17 >> 2] = i18 + (HEAP32[i17 >> 2] | 0);
  }
  __ZN7WebCore10LayoutRect9intersectERKS0_(i7, i3);
  i7 = i8;
  HEAP32[i7 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i7 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
  HEAP32[i7 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
  HEAP32[i7 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 } else {
  i2 = i8;
  i7 = i3;
  HEAP32[i2 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i2 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
  HEAP32[i2 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
  HEAP32[i2 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 }
 i7 = HEAP32[i9 >> 2] | 0;
 i2 = HEAP32[i9 + 4 >> 2] | 0;
 i9 = i1 + 4 | 0;
 HEAP32[i9 >> 2] = i7;
 HEAP32[i9 + 4 >> 2] = i2;
 i2 = HEAP32[i8 + 8 >> 2] | 0;
 i9 = i7;
 do {
  if ((i2 | 0) >= 1) {
   i7 = HEAP32[i10 + 12 >> 2] | 0;
   if ((i7 | 0) < 1) {
    break;
   }
   d19 = +(+(i9 | 0));
   d20 = +(+(HEAP32[i10 + 4 >> 2] | 0));
   HEAPF32[i12 >> 2] = d19;
   HEAPF32[i12 + 4 >> 2] = d20;
   i3 = i11 + 8 | 0;
   d20 = +(+(i2 | 0));
   d19 = +(+(i7 | 0));
   HEAPF32[i3 >> 2] = d20;
   HEAPF32[i3 + 4 >> 2] = d19;
   i3 = __ZN7WebCore20FilterEffectRenderer22updateBackingStoreRectERKNS_9FloatRectE(i4, i13) | 0;
   if ((HEAP8[i4 + 89 | 0] & 1) == 0) {
    i21 = 1;
    STACKTOP = i6;
    return i21 | 0;
   }
   if (i3) {
    i3 = i8;
    HEAP32[i15 >> 2] = HEAP32[i3 >> 2];
    HEAP32[i15 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
    HEAP32[i15 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
    HEAP32[i15 + 12 >> 2] = HEAP32[i3 + 12 >> 2];
    i21 = 1;
    STACKTOP = i6;
    return i21 | 0;
   } else {
    __ZN7WebCore10LayoutRect5uniteERKS0_(i14, i5);
    __ZN7WebCore10LayoutRect9intersectERKS0_(i14, i10);
    i21 = 1;
    STACKTOP = i6;
    return i21 | 0;
   }
  }
 } while (0);
 HEAP8[i1 + 28 | 0] = 0;
 i21 = 0;
 STACKTOP = i6;
 return i21 | 0;
}
function __ZN7WebCore20FilterEffectRenderer22updateBackingStoreRectERKNS_9FloatRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, d6 = +0, d7 = +0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, d13 = +0, d14 = +0;
 i3 = i2 + 8 | 0;
 if (__ZNK7WebCore9FloatSize6isZeroEv(i3) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = i2;
 d6 = +HEAPF32[i2 + 8 >> 2];
 d7 = +HEAPF32[i2 + 12 >> 2];
 if (d6 < +0 | d6 > +5e3) {
  i4 = 0;
  return i4 | 0;
 }
 if (!(d7 <= +5e3 & d7 >= +0)) {
  i4 = 0;
  return i4 | 0;
 }
 i8 = i1 + 24 | 0;
 i9 = i8;
 i10 = i8;
 i8 = i1 + 32 | 0;
 i11 = HEAP32[i8 + 4 >> 2] | 0;
 i12 = i2;
 d7 = +HEAPF32[i12 >> 2];
 d6 = +HEAPF32[i12 + 4 >> 2];
 d13 = +HEAPF32[i10 >> 2];
 do {
  if (!(d7 != d13 | d6 != +HEAPF32[i10 + 4 >> 2])) {
   i12 = i3;
   d14 = +HEAPF32[i12 >> 2];
   if (d14 != +HEAPF32[i8 >> 2]) {
    break;
   }
   d14 = (HEAP32[tempDoublePtr >> 2] = i11, +HEAPF32[tempDoublePtr >> 2]);
   if (+HEAPF32[i12 + 4 >> 2] != d14) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  }
 } while (0);
 HEAP32[i9 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i9 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 HEAP32[i9 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
 HEAP32[i9 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
 i9 = i1 + 64 | 0;
 if ((HEAP32[i9 >> 2] | 0) != 0) {
  i11 = i1 + 56 | 0;
  i8 = 0;
  while (1) {
   i3 = HEAP32[(HEAP32[i11 >> 2] | 0) + (i8 << 2) >> 2] | 0;
   do {
    if ((i3 | 0) == 0) {
     HEAP32[13] = HEAP32[i5 >> 2];
     HEAP32[14] = HEAP32[i5 + 4 >> 2];
     HEAP32[15] = HEAP32[i5 + 8 >> 2];
     HEAP32[16] = HEAP32[i5 + 12 >> 2];
    } else {
     i10 = i3 + 4 | 0;
     i12 = HEAP32[i10 >> 2] | 0;
     HEAP32[i10 >> 2] = i12 + 1;
     i10 = i3 + 52 | 0;
     HEAP32[i10 >> 2] = HEAP32[i5 >> 2];
     HEAP32[i10 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
     HEAP32[i10 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
     HEAP32[i10 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
     i10 = i3 + 4 | 0;
     if ((i12 | 0) != 0) {
      HEAP32[i10 >> 2] = i12;
      break;
     }
     i12 = i10 - 4 | 0;
     if ((i12 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 15](i12);
    }
   } while (0);
   i8 = i8 + 1 | 0;
   if (i8 >>> 0 >= (HEAP32[i9 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 i9 = i1 + 40 | 0;
 HEAP32[i9 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i9 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 HEAP32[i9 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
 HEAP32[i9 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
 HEAP8[i1 + 88 | 0] = 0;
 i4 = 1;
 return i4 | 0;
}
function __ZN7WebCore26FilterEffectRendererHelper17applyFilterEffectEPNS_15GraphicsContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i5 | 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i1 | 0;
 i9 = __ZNK7WebCore11RenderLayer14filterRendererEv(HEAP32[i8 >> 2] | 0) | 0;
 i10 = HEAP32[i9 + 8 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = 0;
 } else {
  i11 = __ZNK7WebCore11ImageBuffer7contextEv(i10) | 0;
 }
 __ZN7WebCore15GraphicsContext7restoreEv(i11);
 __ZN7WebCore20FilterEffectRenderer5applyEv(i9);
 __ZNK7WebCore20FilterEffectRenderer10outputRectEv(i5, i9);
 i11 = HEAP32[i6 >> 2] | 0;
 i10 = HEAP32[i6 + 4 >> 2] | 0;
 i6 = i5 + 8 | 0;
 i5 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 + 8 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i4 + 12 >> 2] = i5;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 HEAP32[i4 >> 2] = i11 + (HEAP32[i1 + 4 >> 2] | 0);
 HEAP32[i4 + 4 >> 2] = i10 + i5;
 i5 = i9 + 64 | 0;
 i10 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i10 | 0) == 0) {
   i12 = 0;
  } else {
   i1 = _llvm_uadd_with_overflow_i32(i10 | 0, -1 | 0) | 0;
   if (tempRet0) {
    i12 = HEAP32[(HEAP32[i9 + 56 >> 2] | 0) + (i1 << 2) >> 2] | 0;
    break;
   } else {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 i10 = __ZN7WebCore12FilterEffect13asImageBufferEv(i12) | 0;
 i12 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 32 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1;
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i7, i4);
 __ZN7WebCore15GraphicsContext15drawImageBufferEPNS_11ImageBufferENS_10ColorSpaceERKNS_7IntRectENS_17CompositeOperatorENS_9BlendModeEb(i2, i10, i12, i7, 2, 0, 0);
 __ZN7WebCore12FilterEffect11clearResultEv(HEAP32[i9 + 68 >> 2] | 0);
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i9 + 56 | 0;
 i9 = 0;
 while (1) {
  __ZN7WebCore12FilterEffect11clearResultEv(HEAP32[(HEAP32[i7 >> 2] | 0) + (i9 << 2) >> 2] | 0);
  i9 = i9 + 1 | 0;
  if (i9 >>> 0 >= (HEAP32[i5 >> 2] | 0) >>> 0) {
   break;
  }
 }
 STACKTOP = i3;
 return;
}
function __ZN7WebCore26FilterEffectRendererHelper17beginFilterEffectEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, d13 = +0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, d18 = +0, d19 = +0, i20 = 0, i21 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 i5 = i3;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6;
 i9 = __ZNK7WebCore11RenderLayer14filterRendererEv(HEAP32[i1 >> 2] | 0) | 0;
 __ZN7WebCore20FilterEffectRenderer28allocateBackingStoreIfNeededEv(i9);
 i10 = HEAP32[i9 + 8 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i11 = __ZNK7WebCore11ImageBuffer7contextEv(i10) | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   d12 = +HEAPF32[i9 + 48 >> 2];
   d13 = +HEAPF32[i9 + 52 >> 2];
   if (d12 < +0 | d12 > +5e3) {
    break;
   }
   if (!(d13 <= +5e3 & d13 >= +0)) {
    break;
   }
   __ZN7WebCore15GraphicsContext4saveEv(i11);
   __ZN7WebCore15GraphicsContext9translateEff(i11, +(-(HEAP32[i1 + 4 >> 2] | 0) | 0), +(-(HEAP32[i1 + 8 >> 2] | 0) | 0));
   i14 = i1 + 12 | 0;
   i15 = i1 + 16 | 0;
   i16 = i1 + 20 | 0;
   d13 = +(HEAP32[i16 >> 2] | 0);
   i17 = i1 + 24 | 0;
   d12 = +(HEAP32[i17 >> 2] | 0);
   d18 = +(+(HEAP32[i14 >> 2] | 0));
   d19 = +(+(HEAP32[i15 >> 2] | 0));
   HEAPF32[i4 >> 2] = d18;
   HEAPF32[i4 + 4 >> 2] = d19;
   i20 = i3 + 8 | 0;
   d19 = +d13;
   d13 = +d12;
   HEAPF32[i20 >> 2] = d19;
   HEAPF32[i20 + 4 >> 2] = d13;
   __ZN7WebCore15GraphicsContext9clearRectERKNS_9FloatRectE(i11, i5);
   d13 = +(HEAP32[i16 >> 2] | 0);
   d19 = +(HEAP32[i17 >> 2] | 0);
   d12 = +(+(HEAP32[i14 >> 2] | 0));
   d18 = +(+(HEAP32[i15 >> 2] | 0));
   HEAPF32[i7 >> 2] = d12;
   HEAPF32[i7 + 4 >> 2] = d18;
   i15 = i6 + 8 | 0;
   d18 = +d13;
   d13 = +d19;
   HEAPF32[i15 >> 2] = d18;
   HEAPF32[i15 + 4 >> 2] = d13;
   __ZN7WebCore15GraphicsContext4clipERKNS_9FloatRectE(i11, i8);
   HEAP8[i1 + 29 | 0] = 1;
   i21 = 1;
   STACKTOP = i2;
   return i21 | 0;
  }
 } while (0);
 HEAP8[i1 + 28 | 0] = 0;
 i21 = 0;
 STACKTOP = i2;
 return i21 | 0;
}
function __ZN7WebCoreL13lastMatrixRowERN3WTF6VectorIfLj0ENS0_15CrashOnOverflowEEE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) == (HEAP32[i4 >> 2] | 0)) {
  __ZN3WTF6VectorIfLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i3 + 1 | 0);
  HEAPF32[(HEAP32[i1 >> 2] | 0) + (HEAP32[i2 >> 2] << 2) >> 2] = +0;
 } else {
  HEAPF32[(HEAP32[i1 >> 2] | 0) + (i3 << 2) >> 2] = +0;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 i5 = i3 + 1 | 0;
 HEAP32[i2 >> 2] = i5;
 if ((i5 | 0) == (HEAP32[i4 >> 2] | 0)) {
  __ZN3WTF6VectorIfLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i3 + 2 | 0);
  HEAPF32[(HEAP32[i1 >> 2] | 0) + (HEAP32[i2 >> 2] << 2) >> 2] = +0;
 } else {
  HEAPF32[(HEAP32[i1 >> 2] | 0) + (i5 << 2) >> 2] = +0;
 }
 i5 = HEAP32[i2 >> 2] | 0;
 i3 = i5 + 1 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) == (HEAP32[i4 >> 2] | 0)) {
  __ZN3WTF6VectorIfLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i5 + 2 | 0);
  HEAPF32[(HEAP32[i1 >> 2] | 0) + (HEAP32[i2 >> 2] << 2) >> 2] = +0;
 } else {
  HEAPF32[(HEAP32[i1 >> 2] | 0) + (i3 << 2) >> 2] = +0;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 i5 = i3 + 1 | 0;
 HEAP32[i2 >> 2] = i5;
 if ((i5 | 0) == (HEAP32[i4 >> 2] | 0)) {
  __ZN3WTF6VectorIfLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i3 + 2 | 0);
  HEAPF32[(HEAP32[i1 >> 2] | 0) + (HEAP32[i2 >> 2] << 2) >> 2] = +1;
 } else {
  HEAPF32[(HEAP32[i1 >> 2] | 0) + (i5 << 2) >> 2] = +1;
 }
 i5 = HEAP32[i2 >> 2] | 0;
 i3 = i5 + 1 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) == (HEAP32[i4 >> 2] | 0)) {
  __ZN3WTF6VectorIfLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i5 + 2 | 0);
  HEAPF32[(HEAP32[i1 >> 2] | 0) + (HEAP32[i2 >> 2] << 2) >> 2] = +0;
  i6 = HEAP32[i2 >> 2] | 0;
  i7 = i6 + 1 | 0;
  HEAP32[i2 >> 2] = i7;
  return;
 } else {
  HEAPF32[(HEAP32[i1 >> 2] | 0) + (i3 << 2) >> 2] = +0;
  i6 = HEAP32[i2 >> 2] | 0;
  i7 = i6 + 1 | 0;
  HEAP32[i2 >> 2] = i7;
  return;
 }
}
function __ZN3WTF6VectorIfLj0ENS_15CrashOnOverflowEEaSERKS2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 if ((i2 | 0) == (i1 | 0)) {
  return i1 | 0;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if (i4 >>> 0 > i6 >>> 0) {
   HEAP32[i3 >> 2] = i6;
  } else {
   i7 = i1 + 4 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   if (i6 >>> 0 <= i8 >>> 0) {
    break;
   }
   do {
    if ((i8 | 0) == 0) {
     i9 = 0;
    } else {
     if ((i4 | 0) != 0) {
      HEAP32[i3 >> 2] = 0;
     }
     i10 = i1 | 0;
     i11 = HEAP32[i10 >> 2] | 0;
     if ((i11 | 0) == 0) {
      i9 = i8;
      break;
     }
     HEAP32[i10 >> 2] = 0;
     HEAP32[i7 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i11);
     i9 = HEAP32[i7 >> 2] | 0;
    }
   } while (0);
   i8 = HEAP32[i5 >> 2] | 0;
   if (i9 >>> 0 >= i8 >>> 0) {
    break;
   }
   i11 = i1 | 0;
   i10 = HEAP32[i11 >> 2] | 0;
   if (i8 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
    return 0;
   }
   i12 = HEAP32[i3 >> 2] | 0;
   i13 = __ZN3WTF18fastMallocGoodSizeEj(i8 << 2) | 0;
   HEAP32[i7 >> 2] = i13 >>> 2;
   i8 = __ZN3WTF10fastMallocEj(i13) | 0;
   HEAP32[i11 >> 2] = i8;
   i13 = i10;
   _memcpy(i8 | 0, i13 | 0, i12 << 2) | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   if ((HEAP32[i11 >> 2] | 0) == (i10 | 0)) {
    HEAP32[i11 >> 2] = 0;
    HEAP32[i7 >> 2] = 0;
   }
   __ZN3WTF8fastFreeEPv(i13);
  }
 } while (0);
 i9 = i2 | 0;
 i2 = i1 | 0;
 _memmove(HEAP32[i2 >> 2] | 0, HEAP32[i9 >> 2] | 0, HEAP32[i3 >> 2] << 2 | 0) | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 _memcpy((HEAP32[i2 >> 2] | 0) + (i4 << 2) | 0, (HEAP32[i9 >> 2] | 0) + (i4 << 2) | 0, (HEAP32[i5 >> 2] | 0) - i4 << 2) | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 return i1 | 0;
}
function __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 i1 = i2;
 i5 = (HEAPU16[i2 >> 1] | 0) - 1640531527 | 0;
 i6 = (HEAPU16[i1 + 2 >> 1] | 0) << 11 ^ i5 ^ i5 << 16;
 i5 = i2 + 4 | 0;
 i7 = i6 + (HEAPU16[i5 >> 1] | 0) + (i6 >>> 11) | 0;
 i6 = i7 ^ (HEAPU16[i1 + 6 >> 1] | 0) << 11 ^ i7 << 16;
 i7 = (i6 >>> 11) + i6 | 0;
 i6 = i7 << 3 ^ i7;
 i7 = (i6 >>> 5) + i6 | 0;
 i6 = i7 << 2 ^ i7;
 i7 = (i6 >>> 15) + i6 | 0;
 i6 = (i7 << 10 ^ i7) & 16777215;
 i7 = (i6 | 0) == 0 ? 8388608 : i6;
 if ((i4 | 0) == 0) {
  i8 = 0;
  return i8 | 0;
 }
 i6 = HEAP32[i2 >> 2] | 0;
 i2 = (i7 >>> 23) + ~i7 | 0;
 i1 = i2 << 12 ^ i2;
 i2 = i1 >>> 7 ^ i1;
 i1 = i2 << 2 ^ i2;
 i2 = i1 >>> 20 ^ i1 | 1;
 i1 = i7;
 i7 = 0;
 while (1) {
  i9 = i1 & i3;
  i10 = i4 + (i9 * 12 & -1) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  if ((i11 | 0) == (i6 | 0)) {
   if ((HEAP32[i4 + (i9 * 12 & -1) + 4 >> 2] | 0) == (HEAP32[i5 >> 2] | 0)) {
    i8 = i10;
    i12 = 10;
    break;
   }
  }
  if ((i11 | 0) == 0) {
   if ((HEAP32[i4 + (i9 * 12 & -1) + 4 >> 2] | 0) == 0) {
    i8 = 0;
    i12 = 9;
    break;
   }
  }
  i11 = (i7 | 0) == 0 ? i2 : i7;
  i1 = i11 + i9 | 0;
  i7 = i11;
 }
 if ((i12 | 0) == 9) {
  return i8 | 0;
 } else if ((i12 | 0) == 10) {
  return i8 | 0;
 }
 return 0;
}
function __ZN7WebCore20FilterEffectRendererD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 64;
 i3 = HEAP32[i1 + 68 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i4 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
  }
 } while (0);
 i3 = i1 + 64 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i4 = i1 + 56 | 0;
 if ((i6 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i7 = i5 + (i6 << 2) | 0;
  i6 = i5;
  while (1) {
   i5 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i8 = i5 + 4 | 0;
     i9 = i8 | 0;
     i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) != 0) {
      HEAP32[i9 >> 2] = i10;
      break;
     }
     i10 = i8 - 4 | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 15](i10);
    }
   } while (0);
   i6 = i6 + 4 | 0;
   if ((i6 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 60 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 HEAP32[i2 >> 2] = H_BASE + 16;
 i2 = i1 + 8 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore11ImageBufferD1Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore20FilterEffectRendererD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 64;
 i3 = HEAP32[i1 + 68 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i4 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
  }
 } while (0);
 i3 = i1 + 64 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i4 = i1 + 56 | 0;
 if ((i6 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i7 = i5 + (i6 << 2) | 0;
  i6 = i5;
  while (1) {
   i5 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i8 = i5 + 4 | 0;
     i9 = i8 | 0;
     i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) != 0) {
      HEAP32[i9 >> 2] = i10;
      break;
     }
     i10 = i8 - 4 | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 15](i10);
    }
   } while (0);
   i6 = i6 + 4 | 0;
   if ((i6 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 60 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 HEAP32[i2 >> 2] = H_BASE + 16;
 i2 = i1 + 8 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore11ImageBufferD1Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore20FilterEffectRenderer34computeSourceImageRectForDirtyRectERKNS_10LayoutRectES3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 if ((HEAP8[i2 + 90 | 0] & 1) != 0) {
  i7 = i1;
  i8 = i3;
  HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i7 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
  HEAP32[i7 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
  HEAP32[i7 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
  STACKTOP = i5;
  return;
 }
 i8 = i6;
 i7 = i4;
 HEAP32[i8 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i8 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i8 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i8 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 if ((HEAP8[i2 + 89 | 0] & 1) != 0) {
  i7 = HEAP32[i2 + 76 >> 2] | 0;
  i4 = HEAP32[i2 + 80 >> 2] | 0;
  i9 = i6 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) - i7;
  i9 = i6 + 4 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) - i4;
  i9 = i4 + (HEAP32[i2 + 72 >> 2] | 0) | 0;
  i4 = i6 + 8 | 0;
  HEAP32[i4 >> 2] = i7 + (HEAP32[i2 + 84 >> 2] | 0) + (HEAP32[i4 >> 2] | 0);
  i4 = i6 + 12 | 0;
  HEAP32[i4 >> 2] = i9 + (HEAP32[i4 >> 2] | 0);
 }
 __ZN7WebCore10LayoutRect9intersectERKS0_(i6, i3);
 i3 = i1;
 HEAP32[i3 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
 STACKTOP = i5;
 return;
}
function __ZN7WebCore20FilterEffectRenderer28allocateBackingStoreIfNeededEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 88 | 0;
 if ((HEAP8[i5] & 1) != 0) {
  STACKTOP = i2;
  return;
 }
 i6 = ~~+HEAPF32[i1 + 32 >> 2];
 i7 = ~~+HEAPF32[i1 + 36 >> 2];
 HEAP32[i4 >> 2] = i6;
 HEAP32[i4 + 4 >> 2] = i7;
 i8 = i1 + 8 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i10 = 5;
  } else {
   if ((HEAP32[i9 + 120 >> 2] | 0) != (i6 | 0)) {
    i10 = 5;
    break;
   }
   if ((HEAP32[i9 + 124 >> 2] | 0) != (i7 | 0)) {
    i10 = 5;
   }
  }
 } while (0);
 do {
  if ((i10 | 0) == 5) {
   i7 = HEAP32[i1 + 20 >> 2] | 0;
   HEAP8[i3] = 0;
   i9 = __ZN3WTF10fastMallocEj(144) | 0;
   i6 = i9;
   __ZN7WebCore11ImageBufferC1ERKNS_7IntSizeEfNS_10ColorSpaceENS_13RenderingModeERb(i6, i4, +1, 0, i7, i3);
   do {
    if ((HEAP8[i3] & 1) == 0) {
     if ((i9 | 0) == 0) {
      i11 = 0;
      break;
     }
     __ZN7WebCore11ImageBufferD1Ev(i6);
     __ZN3WTF8fastFreeEPv(i9);
     i11 = 0;
    } else {
     i11 = i6;
    }
   } while (0);
   i6 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i11;
   if ((i6 | 0) == 0) {
    break;
   }
   __ZN7WebCore11ImageBufferD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  }
 } while (0);
 HEAP8[i5] = 1;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore20FilterEffectRendererC2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 + 4 >> 2] = 1;
 _memset(i1 + 8 | 0, 0, 16) | 0;
 HEAP32[i1 >> 2] = H_BASE + 64;
 i4 = i1 + 68 | 0;
 i5 = i1 + 12 | 0;
 _memset(i1 + 24 | 0, 0, 67) | 0;
 HEAP32[i5 >> 2] = 1065353216;
 HEAP32[i5 + 4 >> 2] = 1065353216;
 __ZN7WebCore13SourceGraphic6createEPNS_6FilterE(i3, i1 | 0);
 i1 = i3 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 4 | 0;
   i4 = i3 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i4 >> 2] = i6;
    break;
   }
   i6 = i3 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
  }
 } while (0);
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i5 + 4 | 0;
 i5 = i1 | 0;
 i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i5 >> 2] = i6;
  STACKTOP = i2;
  return;
 }
 i6 = i1 - 4 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore20FilterEffectRendererC1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 + 4 >> 2] = 1;
 _memset(i1 + 8 | 0, 0, 16) | 0;
 HEAP32[i1 >> 2] = H_BASE + 64;
 i4 = i1 + 68 | 0;
 i5 = i1 + 12 | 0;
 _memset(i1 + 24 | 0, 0, 67) | 0;
 HEAP32[i5 >> 2] = 1065353216;
 HEAP32[i5 + 4 >> 2] = 1065353216;
 __ZN7WebCore13SourceGraphic6createEPNS_6FilterE(i3, i1 | 0);
 i1 = i3 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 4 | 0;
   i4 = i3 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i4 >> 2] = i6;
    break;
   }
   i6 = i3 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
  }
 } while (0);
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i5 + 4 | 0;
 i5 = i1 | 0;
 i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i5 >> 2] = i6;
  STACKTOP = i2;
  return;
 }
 i6 = i1 - 4 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore20FilterEffectRenderer10outputRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 + 64 >> 2] | 0;
 i6 = (i5 | 0) == 0;
 do {
  if (i6) {
   i7 = 0;
  } else {
   i8 = _llvm_uadd_with_overflow_i32(i5 | 0, -1 | 0) | 0;
   if (tempRet0) {
    i7 = HEAP32[(HEAP32[i2 + 56 >> 2] | 0) + (i8 << 2) >> 2] | 0;
    break;
   } else {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 do {
  if ((HEAP32[i7 + 8 >> 2] | 0) == 0) {
   if ((HEAP32[i7 + 12 >> 2] | 0) != 0) {
    break;
   }
   if ((HEAP32[i7 + 16 >> 2] | 0) != 0) {
    break;
   }
   _memset(i1 | 0, 0, 16) | 0;
   STACKTOP = i3;
   return;
  }
 } while (0);
 do {
  if (i6) {
   i9 = 0;
  } else {
   i7 = _llvm_uadd_with_overflow_i32(i5 | 0, -1 | 0) | 0;
   if (tempRet0) {
    i9 = HEAP32[(HEAP32[i2 + 56 >> 2] | 0) + (i7 << 2) >> 2] | 0;
    break;
   } else {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 __ZN7WebCore7IntRectC1ERKNS_9FloatRectE(i4, i2 + 40 | 0);
 __ZNK7WebCore12FilterEffect31requestedRegionOfInputImageDataERKNS_7IntRectE(i1, i9, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20FilterEffectRenderer5applyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = _llvm_uadd_with_overflow_i32(i2 | 0, -1 | 0) | 0;
   if (!tempRet0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   i4 = HEAP32[(HEAP32[i1 + 56 >> 2] | 0) + (i3 << 2) >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i3 = i4 + 4 | 0;
   HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
   __ZN7WebCore12FilterEffect5applyEv(i4);
   __ZN7WebCore12FilterEffect25transformResultColorSpaceENS_10ColorSpaceE(i4, 0);
   i3 = i4 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    return;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
   return;
  }
 } while (0);
 __ZN7WebCore12FilterEffect5applyEv(0);
 __ZN7WebCore12FilterEffect25transformResultColorSpaceENS_10ColorSpaceE(0, 0);
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore12FilterEffectEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF6VectorIfLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_fif + 4;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_fif + 2;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_fif + 4;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_fif + 2;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_viii + 2;
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
function __ZN7WebCore20FilterEffectRenderer24clearIntermediateResultsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 __ZN7WebCore12FilterEffect11clearResultEv(HEAP32[i1 + 68 >> 2] | 0);
 i2 = i1 + 64 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 i3 = i1 + 56 | 0;
 i1 = 0;
 while (1) {
  __ZN7WebCore12FilterEffect11clearResultEv(HEAP32[(HEAP32[i3 >> 2] | 0) + (i1 << 2) >> 2] | 0);
  i1 = i1 + 1 | 0;
  if (i1 >>> 0 >= (HEAP32[i2 >> 2] | 0) >>> 0) {
   break;
  }
 }
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
function __ZNK7WebCore26FilterEffectRendererHelper13filterContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP8[i1 + 28 | 0] & 1) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[(__ZNK7WebCore11RenderLayer14filterRendererEv(HEAP32[i1 >> 2] | 0) | 0) + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = __ZNK7WebCore11ImageBuffer7contextEv(i3) | 0;
 return i2 | 0;
}
function _memmove(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i2 | 0) < (i1 | 0) & (i1 | 0) < (i2 + i3 | 0)) {
  i4 = i1;
  i2 = i2 + i3 | 0;
  i1 = i1 + i3 | 0;
  while ((i3 | 0) > 0) {
   i1 = i1 - 1 | 0;
   i2 = i2 - 1 | 0;
   i3 = i3 - 1 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
  }
  i1 = i4;
 } else {
  _memcpy(i1, i2, i3) | 0;
 }
 return i1 | 0;
}
function __ZN7WebCore6FilterD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) == 0) {
  i4 = i1;
  __ZN3WTF8fastFreeEPv(i4);
  return;
 }
 __ZN7WebCore11ImageBufferD1Ev(i3);
 __ZN3WTF8fastFreeEPv(i3);
 i4 = i1;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZNK7WebCore20FilterEffectRenderer15sourceImageRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1;
 i1 = i2 + 24 | 0;
 HEAP32[i3 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 return;
}
function __ZNK7WebCore20FilterEffectRenderer12filterRegionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1;
 i1 = i2 + 40 | 0;
 HEAP32[i3 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 return;
}
function __ZN7WebCore6FilterD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 8 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore11ImageBufferD1Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore20FilterEffectRenderer12inputContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore11ImageBuffer7contextEv(i2) | 0;
 return i3 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore6Filter28mapAbsolutePointToLocalPointERKNS_10FloatPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAPF32[i1 >> 2] = +0;
 HEAPF32[i1 + 4 >> 2] = +0;
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore20FilterEffectRendererD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore20FilterEffectRendererD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
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
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore6Filter20applyHorizontalScaleEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +(+HEAPF32[i1 + 12 >> 2] * d2);
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
function __ZNK7WebCore6Filter18applyVerticalScaleEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +(+HEAPF32[i1 + 16 >> 2] * d2);
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function dynCall_fif(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return +FUNCTION_TABLE_fif[i1 & 7](i2 | 0, +d3);
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 3](i2 | 0) | 0;
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
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function __ZNK7WebCore6Filter11isSVGFilterEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
 return 0;
}
function b3(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(3);
 return +0;
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
function b5() {
 abort(5);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore20FilterEffectRendererC2Ev,b0,__ZN7WebCore6FilterD0Ev,b0,__ZN7WebCore6FilterD1Ev,b0,__ZN7WebCore20FilterEffectRendererD2Ev,b0,__ZN7WebCore20FilterEffectRendererD0Ev,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZNK7WebCore20FilterEffectRenderer15sourceImageRectEv,b1,__ZNK7WebCore20FilterEffectRenderer12filterRegionEv,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2,__ZNK7WebCore6Filter11isSVGFilterEv,b2];
  var FUNCTION_TABLE_fif = [b3,b3,__ZNK7WebCore6Filter18applyVerticalScaleEf,b3,__ZNK7WebCore6Filter20applyHorizontalScaleEf,b3,b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZNK7WebCore6Filter28mapAbsolutePointToLocalPointERKNS_10FloatPointE,b4];
  var FUNCTION_TABLE_v = [b5,b5,v____cxa_pure_virtual__wrapper,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  var FUNCTION_TABLE_viiii = [b7,b7];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_fif: dynCall_fif, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_fif": invoke_fif, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_fif = Module["dynCall_fif"] = asm["dynCall_fif"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore26FilterEffectRendererHelper19prepareFilterEffectEPNS_11RenderLayerERKNS_10LayoutRectES5_S5_","__ZN7WebCore20FilterEffectRendererD0Ev","__ZN7WebCore16SVGFilterBuilderD2Ev","_strlen","__ZN7WebCore6FilterD0Ev","_memset","__ZNK7WebCore6Filter28mapAbsolutePointToLocalPointERKNS_10FloatPointE","__ZN7WebCore6FilterD1Ev","__ZN7WebCore20FilterEffectRenderer34computeSourceImageRectForDirtyRectERKNS_10LayoutRectES3_","__ZN7WebCore20FilterEffectRenderer24clearIntermediateResultsEv","__ZNK7WebCore6Filter11isSVGFilterEv","__ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_","__ZN7WebCore20FilterEffectRenderer5applyEv","__ZN3WTF6VectorINS_6RefPtrIN7WebCore12FilterEffectEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore20FilterEffectRenderer12filterRegionEv","__ZN3WTF6VectorIfLj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCoreL13lastMatrixRowERN3WTF6VectorIfLj0ENS0_15CrashOnOverflowEEE","__ZN7WebCore20FilterEffectRenderer12inputContextEv","__ZN7WebCore20FilterEffectRenderer28allocateBackingStoreIfNeededEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZNK7WebCore6Filter18applyVerticalScaleEf","__ZN3WTF6VectorIfLj0ENS_15CrashOnOverflowEEaSERKS2_","__ZN7WebCore20FilterEffectRenderer22updateBackingStoreRectERKNS_9FloatRectE","__ZNK7WebCore26FilterEffectRendererHelper13filterContextEv","__ZNK7WebCore20FilterEffectRenderer15sourceImageRectEv","__ZN7WebCore20FilterEffectRendererD2Ev","__ZN7WebCore20FilterEffectRendererC2Ev","__ZNK7WebCore6Filter20applyHorizontalScaleEf","_memmove","__ZN7WebCore26FilterEffectRendererHelper17beginFilterEffectEv","__ZN7WebCore20FilterEffectRenderer5buildEPNS_13RenderElementERKNS_16FilterOperationsENS_14FilterConsumerE","_memcpy","__ZNK7WebCore20FilterEffectRenderer10outputRectEv","__ZN7WebCore26FilterEffectRendererHelper17applyFilterEffectEPNS_15GraphicsContextE","__ZN7WebCore20FilterEffectRenderer20buildReferenceFilterEPNS_13RenderElementEN3WTF10PassRefPtrINS_12FilterEffectEEEPNS_24ReferenceFilterOperationE"]

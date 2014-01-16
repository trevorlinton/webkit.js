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
H_BASE = parentModule["_malloc"](1168 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 1168;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([67,108,101,97,110,117,112,58,32,112,111,112,112,105,110,103,0,0,0,0,0,0,0,0,67,108,101,97,110,117,112,58,32,100,105,115,99,97,114,100,105,110,103,32,108,111,111,107,97,104,101,97,100,0,0,0,69,114,114,111,114,58,32,112,111,112,112,105,110,103,0,0,69,114,114,111,114,58,32,100,105,115,99,97,114,100,105,110,103,0,0,0,0,0,0,0,255,18,71,20,21,22,23,24,25,43,44,45,26,27,28,29,72,73,30,31,32,33,34,35,36,37,38,39,0,0,0,0,0,0,0,34,24,35,32,17,0,31,0,0,29,0,6,18,0,30,0,2,44,4,5,9,0,24,0,16,48,36,63,42,45,3,50,52,54,56,58,61,64,0,0,13,25,26,0,0,0,0,7,0,1,0,0,24,24,12,8,49,0,0,0,0,0,0,0,0,0,0,37,41,0,39,0,27,21,0,22,19,20,33,10,11,15,14,43,46,47,51,53,55,57,60,59,62,38,0,28,23,40,0,0,0,40,54,50,19,12,57,77,53,75,96,63,62,12,97,58,61,67,68,41,51,4,42,78,75,7,8,9,10,11,54,13,82,83,15,55,84,85,54,17,8,46,10,11,47,13,74,48,49,52,87,88,93,94,64,65,60,66,69,76,79,80,81,56,99,98,1,54,54,95,2,3,4,5,100,6,7,8,9,10,11,12,13,89,14,15,16,70,1,59,17,86,2,3,4,5,92,6,7,8,9,10,11,12,13,90,14,15,16,91,0,0,17,2,3,4,5,0,6,7,8,9,10,11,12,13,0,14,15,16,0,0,0,17,0,0,0,219,219,3,219,219,244,234,219,38,236,60,220,235,219,219,219,219,232,219,30,219,219,19,40,43,29,240,255,0,0,0,0,1,22,14,0,21,25,11,24,44,27,9,32,21,31,26,24,6,7,26,16,12,28,27,59,16,17,18,19,20,50,22,53,54,25,12,55,56,58,30,17,26,19,20,26,22,42,26,26,0,61,62,67,68,8,5,32,4,3,27,27,27,27,24,27,29,6,87,88,69,10,11,12,13,97,15,16,17,18,19,20,21,22,63,24,25,26,27,6,28,30,60,10,11,12,13,66,15,16,17,18,19,20,21,22,64,24,25,26,65,255,255,30,10,11,12,13,255,15,16,17,18,19,20,21,22,255,24,25,26,255,255,255,30,0,0,0,0,6,10,11,12,13,15,16,17,18,19,20,21,22,24,25,26,30,34,35,36,37,38,39,40,41,45,46,47,48,51,52,53,54,55,56,57,58,59,60,60,26,28,42,43,44,26,26,26,26,38,35,0,24,45,12,41,42,38,43,32,24,45,9,8,5,4,6,7,3,27,35,49,50,35,44,27,11,27,27,27,27,39,39,42,42,52,38,38,55,56,57,58,59,59,60,27,31,29,27,50,0,0,0,81,81,248,219,249,219,219,219,14,219,17,20,219,21,8,219,81,219,48,219,219,219,239,219,22,249,8,219,249,219,23,219,247,1,45,49,52,10,54,219,219,59,81,219,249,219,31,251,32,33,239,34,219,8,8,249,249,219,239,249,102,8,8,81,81,81,81,81,81,81,219,219,238,219,35,219,219,36,219,219,219,219,219,219,219,219,219,239,239,45,49,52,10,54,54,219,219,81,219,219,219,0,0,0,0,2,1,1,1,1,1,2,2,1,3,3,2,2,3,3,1,1,1,3,3,3,3,4,0,1,1,2,3,1,1,1,1,3,1,1,1,3,4,1,3,1,1,3,1,1,3,3,1,2,1,3,1,3,1,3,1,3,1,3,3,1,3,1,2,0,0,0,0,0,0,0,0,33,34,35,36,36,37,37,37,38,38,38,39,39,39,39,39,40,40,41,41,41,41,41,42,42,43,43,44,45,46,46,47,47,47,47,47,48,48,49,49,50,51,51,52,52,52,52,53,53,54,54,55,55,56,56,57,57,58,58,58,59,59,60,60,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,26,27,2,2,31,2,30,24,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,25,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,28,2,29,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,32,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __Z12xpathyyparseRN7WebCore5XPath6ParserE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0, i112 = 0, i113 = 0, i114 = 0, i115 = 0, i116 = 0, i117 = 0, i118 = 0, i119 = 0, i120 = 0, i121 = 0, i122 = 0, i123 = 0, i124 = 0, i125 = 0, i126 = 0, i127 = 0, i128 = 0, i129 = 0, i130 = 0, i131 = 0, i132 = 0, i133 = 0, i134 = 0, i135 = 0, i136 = 0, i137 = 0, i138 = 0, i139 = 0, i140 = 0, i141 = 0, i142 = 0, i143 = 0, i144 = 0, i145 = 0, i146 = 0, i147 = 0, i148 = 0, i149 = 0, i150 = 0, i151 = 0, i152 = 0, i153 = 0, i154 = 0, i155 = 0, i156 = 0, i157 = 0, i158 = 0, i159 = 0, i160 = 0, i161 = 0, i162 = 0, i163 = 0, i164 = 0, i165 = 0, i166 = 0, i167 = 0, i168 = 0, i169 = 0, i170 = 0, i171 = 0, i172 = 0, i173 = 0, i174 = 0, i175 = 0, i176 = 0, i177 = 0, i178 = 0, i179 = 0, i180 = 0, i181 = 0, i182 = 0, i183 = 0, i184 = 0, i185 = 0, i186 = 0, i187 = 0, i188 = 0, i189 = 0, i190 = 0, i191 = 0, i192 = 0, i193 = 0, i194 = 0, i195 = 0, i196 = 0, i197 = 0, i198 = 0, i199 = 0, i200 = 0, i201 = 0, i202 = 0, i203 = 0, i204 = 0, i205 = 0, i206 = 0, i207 = 0, i208 = 0, i209 = 0, i210 = 0, i211 = 0, i212 = 0, i213 = 0, i214 = 0, i215 = 0, i216 = 0, i217 = 0, i218 = 0, i219 = 0, i220 = 0, i221 = 0, i222 = 0, i223 = 0, i224 = 0, i225 = 0, i226 = 0, i227 = 0, i228 = 0, i229 = 0, i230 = 0, i231 = 0, i232 = 0, i233 = 0, i234 = 0, i235 = 0, i236 = 0, i237 = 0, i238 = 0, i239 = 0, i240 = 0, i241 = 0, i242 = 0, i243 = 0, i244 = 0, i245 = 0, i246 = 0, i247 = 0, i248 = 0, i249 = 0, i250 = 0, i251 = 0, i252 = 0, i253 = 0, i254 = 0, i255 = 0, i256 = 0, i257 = 0, i258 = 0, i259 = 0, i260 = 0, i261 = 0, i262 = 0, i263 = 0, i264 = 0, i265 = 0, i266 = 0, i267 = 0, i268 = 0, i269 = 0, i270 = 0, i271 = 0, i272 = 0, i273 = 0, i274 = 0, i275 = 0, i276 = 0, i277 = 0, i278 = 0, i279 = 0, i280 = 0, i281 = 0, i282 = 0, i283 = 0, i284 = 0, i285 = 0, i286 = 0, i287 = 0, i288 = 0, i289 = 0, i290 = 0, i291 = 0, i292 = 0, i293 = 0, i294 = 0, i295 = 0, i296 = 0, i297 = 0, i298 = 0, i299 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 2016 | 0;
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
 i13 = i2 + 1280 | 0;
 i14 = i2 + 1288 | 0;
 i15 = i2 + 1296 | 0;
 i16 = i2 + 1304 | 0;
 i17 = i2 + 1312 | 0;
 i18 = i2 + 1320 | 0;
 i19 = i2 + 1344 | 0;
 i20 = i2 + 1360 | 0;
 i21 = i2 + 1384 | 0;
 i22 = i2 + 1392 | 0;
 i23 = i2 + 1400 | 0;
 i24 = i2 + 1408 | 0;
 i25 = i2 + 1432 | 0;
 i26 = i2 + 1448 | 0;
 i27 = i2 + 1472 | 0;
 i28 = i2 + 1496 | 0;
 i29 = i2 + 1512 | 0;
 i30 = i2 + 1536 | 0;
 i31 = i2 + 1544 | 0;
 i32 = i2 + 1552 | 0;
 i33 = i2 + 1560 | 0;
 i34 = i2 + 1584 | 0;
 i35 = i2 + 1600 | 0;
 i36 = i2 + 1624 | 0;
 i37 = i2 + 1632 | 0;
 i38 = i2 + 1640 | 0;
 i39 = i2 + 1648 | 0;
 i40 = i2 + 1656 | 0;
 i41 = i2 + 1680 | 0;
 i42 = i2 + 1704 | 0;
 i43 = i2 + 1728 | 0;
 i44 = i2 + 1736 | 0;
 i45 = i2 + 1744 | 0;
 i46 = i2 + 1752 | 0;
 i47 = i2 + 1760 | 0;
 i48 = i2 + 1768 | 0;
 i49 = i2 + 1776 | 0;
 i50 = i2 + 1784 | 0;
 i51 = i2 + 1800 | 0;
 i52 = i2 + 1808 | 0;
 i53 = i2 + 1816 | 0;
 i54 = i2 + 1824 | 0;
 i55 = i2 + 1832 | 0;
 i56 = i2 + 1840 | 0;
 i57 = i2 + 1848 | 0;
 i58 = i2 + 1856 | 0;
 i59 = i2 + 1864 | 0;
 i60 = i2 + 1872 | 0;
 i61 = i2 + 1880 | 0;
 i62 = i2 + 1896 | 0;
 i63 = i2 + 1904 | 0;
 i64 = i2 + 1912 | 0;
 i65 = i2 + 1920 | 0;
 i66 = i2 + 1928 | 0;
 i67 = i2 + 1936 | 0;
 i68 = i2 + 1944 | 0;
 i69 = i2 + 1952 | 0;
 i70 = i2 + 1960 | 0;
 i71 = i2 + 1968 | 0;
 i72 = i2 + 1976 | 0;
 i73 = i2 + 1984 | 0;
 i74 = i2 + 1992 | 0;
 i75 = i2 + 2e3 | 0;
 i76 = i2 + 2008 | 0;
 i77 = i2 + 80 | 0;
 i78 = i2 + 480 | 0;
 i79 = i1 + 16 | 0;
 i80 = i13 | 0;
 i81 = i14 | 0;
 i82 = i15 | 0;
 i83 = i16 | 0;
 i84 = i17 | 0;
 i85 = i18 | 0;
 i86 = i18 + 4 | 0;
 i87 = i18 + 8 | 0;
 i88 = i18 + 12 | 0;
 i89 = i18 + 16 | 0;
 i90 = i18 + 20 | 0;
 i91 = i19 | 0;
 i92 = i19 + 4 | 0;
 i93 = i19 + 8 | 0;
 i94 = i20 | 0;
 i95 = i20 + 4 | 0;
 i96 = i20 + 8 | 0;
 i97 = i20 + 12 | 0;
 i98 = i20 + 16 | 0;
 i99 = i20 + 20 | 0;
 i100 = i21 | 0;
 i101 = i22 | 0;
 i102 = i23 | 0;
 i103 = i9 | 0;
 i104 = i8 | 0;
 i105 = i26 | 0;
 i106 = i26 + 4 | 0;
 i107 = i26 + 8 | 0;
 i108 = i26 + 12 | 0;
 i109 = i26 + 16 | 0;
 i110 = i26 + 20 | 0;
 i111 = i11 | 0;
 i112 = i10 | 0;
 i113 = i24 | 0;
 i114 = i24 + 4 | 0;
 i115 = i24 + 8 | 0;
 i116 = i24 + 12 | 0;
 i117 = i24 + 16 | 0;
 i118 = i24 + 20 | 0;
 i119 = i25 | 0;
 i120 = i25 + 4 | 0;
 i121 = i25 + 8 | 0;
 i122 = i27 | 0;
 i123 = i27 + 4 | 0;
 i124 = i27 + 8 | 0;
 i125 = i27 + 12 | 0;
 i126 = i27 + 16 | 0;
 i127 = i27 + 20 | 0;
 i128 = i28 | 0;
 i129 = i28 + 4 | 0;
 i130 = i28 + 8 | 0;
 i131 = i29 | 0;
 i132 = i29 + 4 | 0;
 i133 = i29 + 8 | 0;
 i134 = i29 + 12 | 0;
 i135 = i29 + 16 | 0;
 i136 = i29 + 20 | 0;
 i137 = i30 | 0;
 i138 = i31 | 0;
 i139 = i32 | 0;
 i140 = i5 | 0;
 i141 = i4 | 0;
 i142 = i35 | 0;
 i143 = i35 + 4 | 0;
 i144 = i35 + 8 | 0;
 i145 = i35 + 12 | 0;
 i146 = i35 + 16 | 0;
 i147 = i35 + 20 | 0;
 i148 = i7 | 0;
 i149 = i6 | 0;
 i150 = i33 | 0;
 i151 = i33 + 4 | 0;
 i152 = i33 + 8 | 0;
 i153 = i33 + 12 | 0;
 i154 = i33 + 16 | 0;
 i155 = i33 + 20 | 0;
 i156 = i34 | 0;
 i157 = i34 + 4 | 0;
 i158 = i34 + 8 | 0;
 i159 = i36 | 0;
 i160 = i37 | 0;
 i161 = i3 | 0;
 i162 = i38 | 0;
 i163 = i39 | 0;
 i164 = i40 | 0;
 i165 = i40 + 4 | 0;
 i166 = i165;
 i167 = i40 + 20 | 0;
 i168 = i40 + 12 | 0;
 i169 = i40 + 8 | 0;
 i170 = i40 + 16 | 0;
 i171 = i41 | 0;
 i172 = i41 + 4 | 0;
 i173 = i172;
 i174 = i41 + 20 | 0;
 i175 = i41 + 12 | 0;
 i176 = i41 + 8 | 0;
 i177 = i41 + 16 | 0;
 i178 = i42 | 0;
 i179 = i42 + 4 | 0;
 i180 = i179;
 i181 = i42 + 20 | 0;
 i182 = i42 + 12 | 0;
 i183 = i42 + 8 | 0;
 i184 = i42 + 16 | 0;
 i185 = i43 | 0;
 i186 = i44 | 0;
 i187 = i45 | 0;
 i188 = i46 | 0;
 i189 = i47 | 0;
 i190 = i48 | 0;
 i191 = i50 | 0;
 i192 = i50 + 4 | 0;
 i193 = i50 + 8 | 0;
 i194 = i49 | 0;
 i195 = i51 | 0;
 i196 = i52 | 0;
 i197 = i53 | 0;
 i198 = i54 | 0;
 i199 = i55 | 0;
 i200 = i56 | 0;
 i201 = i57 | 0;
 i202 = i58 | 0;
 i203 = i59 | 0;
 i204 = i60 | 0;
 i205 = i61 | 0;
 i206 = i61 + 4 | 0;
 i207 = i61 + 8 | 0;
 i208 = i62 | 0;
 i209 = i63 | 0;
 i210 = i64 | 0;
 i211 = i65 | 0;
 i212 = i66 | 0;
 i213 = i67 | 0;
 i214 = i68 | 0;
 i215 = i69 | 0;
 i216 = i70 | 0;
 i217 = i71 | 0;
 i218 = i72 | 0;
 i219 = i73 | 0;
 i220 = i74 | 0;
 i221 = i75 | 0;
 i222 = i76 | 0;
 i223 = i12 | 0;
 i224 = -2;
 i225 = 0;
 i226 = 200;
 i227 = i78;
 i228 = i78;
 i78 = i77;
 i229 = i77;
 i230 = 0;
 i231 = 0;
 L1 : while (1) {
  HEAP16[i78 >> 1] = i225;
  if ((i229 + (i226 - 1 << 1) | 0) >>> 0 > i78 >>> 0) {
   i232 = i226;
   i233 = i227;
   i234 = i228;
   i235 = i78;
   i236 = i229;
  } else {
   i237 = i78 - i229 >> 1;
   i238 = i237 + 1 | 0;
   if (i226 >>> 0 > 9999 >>> 0) {
    i239 = i224;
    i240 = 0;
    i241 = i227;
    i242 = i78;
    i243 = i229;
    i244 = i230;
    i245 = 2;
    i246 = 583;
    break;
   }
   i247 = i226 << 1;
   i248 = i247 >>> 0 > 1e4 >>> 0 ? 1e4 : i247;
   i247 = __ZN3WTF10fastMallocEj(i248 * 6 & -1 | 3) | 0;
   if ((i247 | 0) == 0) {
    i239 = i224;
    i240 = 0;
    i241 = i227;
    i242 = i78;
    i243 = i229;
    i244 = i230;
    i245 = 2;
    i246 = 583;
    break;
   }
   i249 = i247;
   i250 = i229;
   _memcpy(i247 | 0, i250 | 0, i238 << 1) | 0;
   i251 = i247 + ((i248 >>> 1 & 1073741823) << 2) | 0;
   _memcpy(i251 | 0, i228 | 0, i238 << 2) | 0;
   if ((i229 | 0) != (i77 | 0)) {
    __ZN3WTF8fastFreeEPv(i250);
   }
   i250 = i249 + (i237 << 1) | 0;
   i238 = i251 + (i237 << 2) | 0;
   if ((i248 - 1 | 0) > (i237 | 0)) {
    i232 = i248;
    i233 = i238;
    i234 = i251;
    i235 = i250;
    i236 = i249;
   } else {
    i239 = i224;
    i240 = 0;
    i241 = i238;
    i242 = i250;
    i243 = i249;
    i244 = i230;
    i245 = 1;
    i246 = 583;
    break;
   }
  }
  i249 = HEAP8[H_BASE + 648 + i225 | 0] | 0;
  i250 = i249 << 24 >> 24;
  do {
   if (i249 << 24 >> 24 == -37) {
    i252 = i224;
    i253 = i230;
    i246 = 20;
   } else {
    if ((i224 | 0) == -2) {
     i254 = __ZN7WebCore5XPath6Parser3lexER7YYSTYPE(i1, i12) | 0;
    } else {
     i254 = i224;
    }
    do {
     if ((i254 | 0) < 1) {
      i255 = 0;
      i256 = 0;
     } else {
      if (i254 >>> 0 >= 279 >>> 0) {
       i255 = i254;
       i256 = 2;
       break;
      }
      i255 = i254;
      i256 = HEAPU8[H_BASE + 896 + i254 | 0] | 0;
     }
    } while (0);
    i238 = i256 + i250 | 0;
    if (i238 >>> 0 > 132 >>> 0) {
     i252 = i255;
     i253 = i256;
     i246 = 20;
     break;
    }
    if ((HEAP8[H_BASE + 408 + i238 | 0] | 0) != (i256 | 0)) {
     i252 = i255;
     i253 = i256;
     i246 = 20;
     break;
    }
    i251 = HEAP8[H_BASE + 240 + i238 | 0] | 0;
    if (i251 << 24 >> 24 == 0) {
     i257 = i255;
     i258 = i256;
     i246 = 574;
     break;
    }
    if ((i238 | 0) == 48) {
     i239 = i255;
     i240 = 0;
     i241 = i233;
     i242 = i235;
     i243 = i236;
     i244 = i256;
     i245 = 0;
     i246 = 583;
     break L1;
    }
    i238 = i233 + 4 | 0;
    HEAP32[i238 >> 2] = HEAP32[i223 >> 2];
    i259 = (i255 | 0) == 0 ? 0 : -2;
    i260 = i251 & 255;
    i261 = i238;
    i262 = i235;
    i263 = i256;
    i264 = (i231 | 0) == 0 ? 0 : i231 - 1 | 0;
   }
  } while (0);
  L24 : do {
   if ((i246 | 0) == 20) {
    i246 = 0;
    i250 = HEAP8[H_BASE + 136 + i225 | 0] | 0;
    i238 = i250 & 255;
    if (i250 << 24 >> 24 == 0) {
     i257 = i252;
     i258 = i253;
     i246 = 574;
     break;
    }
    i250 = HEAPU8[H_BASE + 752 + i238 | 0] | 0;
    i251 = 1 - i250 | 0;
    i248 = i233 + (i251 << 2) | 0;
    i237 = HEAP32[i248 >> 2] | 0;
    L27 : do {
     switch (i238 | 0) {
     case 2:
      {
       i247 = HEAP32[i79 >> 2] | 0;
       HEAP32[i79 >> 2] = HEAP32[i233 >> 2];
       if ((i247 | 0) == 0) {
        i265 = i237;
        break L27;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i247 >> 2] | 0) + 4 >> 2] & 1](i247);
       i265 = i237;
       break;
      }
     case 4:
      {
       i247 = HEAP32[i233 >> 2] | 0;
       HEAP8[i247 + 32 | 0] = 1;
       HEAP8[i247 + 16 | 0] = 0;
       i265 = i247;
       break;
      }
     case 6:
      {
       i247 = __ZN3WTF10fastMallocEj(36) | 0;
       __ZN7WebCore5XPath12LocationPathC1Ev(i247);
       i265 = i247;
       break;
      }
     case 7:
      {
       i265 = HEAP32[i233 >> 2] | 0;
       break;
      }
     case 8:
      {
       i247 = HEAP32[i233 >> 2] | 0;
       i266 = i247;
       HEAP32[i80 >> 2] = HEAP32[i233 - 4 >> 2];
       __ZN7WebCore5XPath12LocationPath11prependStepENSt3__110unique_ptrINS0_4StepENS2_14default_deleteIS4_EEEE(i247, i13);
       i247 = HEAP32[i80 >> 2] | 0;
       HEAP32[i80 >> 2] = 0;
       if ((i247 | 0) == 0) {
        i265 = i266;
        break L27;
       }
       __ZN7WebCore5XPath4StepD1Ev(i247);
       __ZN3WTF8fastFreeEPv(i247);
       i265 = i266;
       break;
      }
     case 9:
      {
       i266 = __ZN3WTF10fastMallocEj(36) | 0;
       i247 = i266;
       __ZN7WebCore5XPath12LocationPathC1Ev(i247);
       i267 = i266;
       HEAP32[i81 >> 2] = HEAP32[i233 >> 2];
       __ZN7WebCore5XPath12LocationPath10appendStepENSt3__110unique_ptrINS0_4StepENS2_14default_deleteIS4_EEEE(i247, i14);
       i247 = HEAP32[i81 >> 2] | 0;
       HEAP32[i81 >> 2] = 0;
       if ((i247 | 0) == 0) {
        i265 = i267;
        break L27;
       }
       __ZN7WebCore5XPath4StepD1Ev(i247);
       __ZN3WTF8fastFreeEPv(i247);
       i265 = i267;
       break;
      }
     case 10:
      {
       i267 = HEAP32[i233 - 8 >> 2] | 0;
       i247 = i267;
       HEAP32[i82 >> 2] = HEAP32[i233 >> 2];
       __ZN7WebCore5XPath12LocationPath10appendStepENSt3__110unique_ptrINS0_4StepENS2_14default_deleteIS4_EEEE(i267, i15);
       i267 = HEAP32[i82 >> 2] | 0;
       HEAP32[i82 >> 2] = 0;
       if ((i267 | 0) == 0) {
        i265 = i247;
        break L27;
       }
       __ZN7WebCore5XPath4StepD1Ev(i267);
       __ZN3WTF8fastFreeEPv(i267);
       i265 = i247;
       break;
      }
     case 11:
      {
       i247 = HEAP32[i233 - 8 >> 2] | 0;
       i267 = i247;
       HEAP32[i83 >> 2] = HEAP32[i233 - 4 >> 2];
       __ZN7WebCore5XPath12LocationPath10appendStepENSt3__110unique_ptrINS0_4StepENS2_14default_deleteIS4_EEEE(i247, i16);
       i266 = HEAP32[i83 >> 2] | 0;
       HEAP32[i83 >> 2] = 0;
       if ((i266 | 0) != 0) {
        __ZN7WebCore5XPath4StepD1Ev(i266);
        __ZN3WTF8fastFreeEPv(i266);
       }
       HEAP32[i84 >> 2] = HEAP32[i233 >> 2];
       __ZN7WebCore5XPath12LocationPath10appendStepENSt3__110unique_ptrINS0_4StepENS2_14default_deleteIS4_EEEE(i247, i17);
       i247 = HEAP32[i84 >> 2] | 0;
       HEAP32[i84 >> 2] = 0;
       if ((i247 | 0) == 0) {
        i265 = i267;
        break L27;
       }
       __ZN7WebCore5XPath4StepD1Ev(i247);
       __ZN3WTF8fastFreeEPv(i247);
       i265 = i267;
       break;
      }
     case 12:
      {
       i267 = HEAP32[i233 - 4 >> 2] | 0;
       i247 = HEAP32[i233 >> 2] | 0;
       i266 = (i247 | 0) != 0;
       i268 = __ZN3WTF10fastMallocEj(40) | 0;
       i269 = i268;
       i270 = HEAP32[i267 >> 2] | 0;
       do {
        if (i266) {
         HEAP32[i85 >> 2] = i270;
         i271 = i267 + 4 | 0;
         i272 = HEAP32[i271 >> 2] | 0;
         HEAP32[i271 >> 2] = 0;
         HEAP32[i86 >> 2] = i272;
         i272 = i267 + 8 | 0;
         i271 = HEAP32[i272 >> 2] | 0;
         HEAP32[i272 >> 2] = 0;
         HEAP32[i87 >> 2] = i271;
         HEAP32[i88 >> 2] = 0;
         HEAP32[i89 >> 2] = 0;
         HEAP32[i90 >> 2] = 0;
         i271 = i267 + 20 | 0;
         HEAP32[i90 >> 2] = HEAP32[i271 >> 2];
         HEAP32[i271 >> 2] = 0;
         i271 = i267 + 12 | 0;
         i272 = HEAP32[i88 >> 2] | 0;
         HEAP32[i88 >> 2] = HEAP32[i271 >> 2];
         HEAP32[i271 >> 2] = i272;
         i272 = i267 + 16 | 0;
         i271 = HEAP32[i89 >> 2] | 0;
         HEAP32[i89 >> 2] = HEAP32[i272 >> 2];
         HEAP32[i272 >> 2] = i271;
         HEAP32[i91 >> 2] = 0;
         HEAP32[i92 >> 2] = 0;
         HEAP32[i93 >> 2] = 0;
         i271 = i247 + 8 | 0;
         HEAP32[i93 >> 2] = HEAP32[i271 >> 2];
         HEAP32[i271 >> 2] = 0;
         i271 = i247 | 0;
         i272 = HEAP32[i91 >> 2] | 0;
         HEAP32[i91 >> 2] = HEAP32[i271 >> 2];
         HEAP32[i271 >> 2] = i272;
         i272 = i247 + 4 | 0;
         i271 = HEAP32[i92 >> 2] | 0;
         HEAP32[i92 >> 2] = HEAP32[i272 >> 2];
         HEAP32[i272 >> 2] = i271;
         __ZN7WebCore5XPath4StepC1ENS1_4AxisENS1_8NodeTestEN3WTF6VectorINSt3__110unique_ptrINS0_10ExpressionENS6_14default_deleteIS8_EEEELj0ENS4_15CrashOnOverflowEEE(i269, 3, i18, i19);
         i271 = HEAP32[i93 >> 2] | 0;
         if ((i271 | 0) != 0) {
          i272 = HEAP32[i91 >> 2] | 0;
          i273 = i272 + (i271 << 2) | 0;
          i271 = i272;
          while (1) {
           i272 = i271 | 0;
           i274 = HEAP32[i272 >> 2] | 0;
           HEAP32[i272 >> 2] = 0;
           if ((i274 | 0) != 0) {
            FUNCTION_TABLE_vi[HEAP32[(HEAP32[i274 >> 2] | 0) + 4 >> 2] & 1](i274);
           }
           i271 = i271 + 4 | 0;
           if ((i271 | 0) == (i273 | 0)) {
            break;
           }
          }
          HEAP32[i93 >> 2] = 0;
         }
         i273 = HEAP32[i91 >> 2] | 0;
         if ((i273 | 0) != 0) {
          HEAP32[i91 >> 2] = 0;
          HEAP32[i92 >> 2] = 0;
          __ZN3WTF8fastFreeEPv(i273);
         }
         i273 = HEAP32[i90 >> 2] | 0;
         if ((i273 | 0) != 0) {
          i271 = HEAP32[i88 >> 2] | 0;
          i274 = i271 + (i273 << 2) | 0;
          i273 = i271;
          while (1) {
           i271 = i273 | 0;
           i272 = HEAP32[i271 >> 2] | 0;
           HEAP32[i271 >> 2] = 0;
           if ((i272 | 0) != 0) {
            FUNCTION_TABLE_vi[HEAP32[(HEAP32[i272 >> 2] | 0) + 4 >> 2] & 1](i272);
           }
           i273 = i273 + 4 | 0;
           if ((i273 | 0) == (i274 | 0)) {
            break;
           }
          }
          HEAP32[i90 >> 2] = 0;
         }
         i274 = HEAP32[i88 >> 2] | 0;
         if ((i274 | 0) != 0) {
          HEAP32[i88 >> 2] = 0;
          HEAP32[i89 >> 2] = 0;
          __ZN3WTF8fastFreeEPv(i274);
         }
         i274 = HEAP32[i87 >> 2] | 0;
         do {
          if ((i274 | 0) != 0) {
           i273 = i274 | 0;
           i272 = (HEAP32[i273 >> 2] | 0) - 2 | 0;
           if ((i272 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i274);
            break;
           } else {
            HEAP32[i273 >> 2] = i272;
            break;
           }
          }
         } while (0);
         i274 = HEAP32[i86 >> 2] | 0;
         if ((i274 | 0) == 0) {
          break;
         }
         i272 = i274 | 0;
         i273 = (HEAP32[i272 >> 2] | 0) - 2 | 0;
         if ((i273 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i274);
          break;
         } else {
          HEAP32[i272 >> 2] = i273;
          break;
         }
        } else {
         HEAP32[i94 >> 2] = i270;
         i273 = i267 + 4 | 0;
         i272 = HEAP32[i273 >> 2] | 0;
         HEAP32[i273 >> 2] = 0;
         HEAP32[i95 >> 2] = i272;
         i272 = i267 + 8 | 0;
         i273 = HEAP32[i272 >> 2] | 0;
         HEAP32[i272 >> 2] = 0;
         HEAP32[i96 >> 2] = i273;
         HEAP32[i97 >> 2] = 0;
         HEAP32[i98 >> 2] = 0;
         HEAP32[i99 >> 2] = 0;
         i273 = i267 + 20 | 0;
         HEAP32[i99 >> 2] = HEAP32[i273 >> 2];
         HEAP32[i273 >> 2] = 0;
         i273 = i267 + 12 | 0;
         i272 = HEAP32[i97 >> 2] | 0;
         HEAP32[i97 >> 2] = HEAP32[i273 >> 2];
         HEAP32[i273 >> 2] = i272;
         i272 = i267 + 16 | 0;
         i273 = HEAP32[i98 >> 2] | 0;
         HEAP32[i98 >> 2] = HEAP32[i272 >> 2];
         HEAP32[i272 >> 2] = i273;
         __ZN7WebCore5XPath4StepC1ENS1_4AxisENS1_8NodeTestE(i269, 3, i20);
         i273 = HEAP32[i99 >> 2] | 0;
         if ((i273 | 0) != 0) {
          i272 = HEAP32[i97 >> 2] | 0;
          i274 = i272 + (i273 << 2) | 0;
          i273 = i272;
          while (1) {
           i272 = i273 | 0;
           i271 = HEAP32[i272 >> 2] | 0;
           HEAP32[i272 >> 2] = 0;
           if ((i271 | 0) != 0) {
            FUNCTION_TABLE_vi[HEAP32[(HEAP32[i271 >> 2] | 0) + 4 >> 2] & 1](i271);
           }
           i273 = i273 + 4 | 0;
           if ((i273 | 0) == (i274 | 0)) {
            break;
           }
          }
          HEAP32[i99 >> 2] = 0;
         }
         i274 = HEAP32[i97 >> 2] | 0;
         if ((i274 | 0) != 0) {
          HEAP32[i97 >> 2] = 0;
          HEAP32[i98 >> 2] = 0;
          __ZN3WTF8fastFreeEPv(i274);
         }
         i274 = HEAP32[i96 >> 2] | 0;
         do {
          if ((i274 | 0) != 0) {
           i273 = i274 | 0;
           i271 = (HEAP32[i273 >> 2] | 0) - 2 | 0;
           if ((i271 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i274);
            break;
           } else {
            HEAP32[i273 >> 2] = i271;
            break;
           }
          }
         } while (0);
         i274 = HEAP32[i95 >> 2] | 0;
         if ((i274 | 0) == 0) {
          break;
         }
         i271 = i274 | 0;
         i273 = (HEAP32[i271 >> 2] | 0) - 2 | 0;
         if ((i273 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i274);
          break;
         } else {
          HEAP32[i271 >> 2] = i273;
          break;
         }
        }
       } while (0);
       i269 = i268;
       if (!((i247 | 0) == 0 | i266 ^ 1)) {
        i270 = i247 + 8 | 0;
        i273 = HEAP32[i270 >> 2] | 0;
        i271 = i247 | 0;
        if ((i273 | 0) != 0) {
         i274 = HEAP32[i271 >> 2] | 0;
         i272 = i274 + (i273 << 2) | 0;
         i273 = i274;
         while (1) {
          i274 = i273 | 0;
          i275 = HEAP32[i274 >> 2] | 0;
          HEAP32[i274 >> 2] = 0;
          if ((i275 | 0) != 0) {
           FUNCTION_TABLE_vi[HEAP32[(HEAP32[i275 >> 2] | 0) + 4 >> 2] & 1](i275);
          }
          i273 = i273 + 4 | 0;
          if ((i273 | 0) == (i272 | 0)) {
           break;
          }
         }
         HEAP32[i270 >> 2] = 0;
        }
        i272 = HEAP32[i271 >> 2] | 0;
        if ((i272 | 0) != 0) {
         HEAP32[i271 >> 2] = 0;
         HEAP32[i247 + 4 >> 2] = 0;
         __ZN3WTF8fastFreeEPv(i272);
        }
        __ZN3WTF8fastFreeEPv(i247);
       }
       if ((i267 | 0) == 0) {
        i265 = i269;
        break L27;
       }
       __ZN7WebCore5XPath4Step8NodeTestD2Ev(i267);
       __ZN3WTF8fastFreeEPv(i267);
       i265 = i269;
       break;
      }
     case 13:
      {
       HEAP32[i100 >> 2] = HEAP32[i233 - 4 >> 2];
       i272 = HEAP32[i233 >> 2] | 0;
       HEAP32[i101 >> 2] = 0;
       HEAP32[i102 >> 2] = 0;
       if (__ZN7WebCore5XPath6Parser19expandQualifiedNameERKN3WTF6StringERS3_S6_(i1, i21, i22, i23) | 0) {
        i273 = __ZN3WTF10fastMallocEj(40) | 0;
        i266 = i273;
        do {
         if ((i272 | 0) == 0) {
          i268 = HEAP32[i101 >> 2] | 0;
          if ((i268 | 0) == 0) {
           HEAP32[i103 >> 2] = 0;
           i276 = 0;
          } else {
           if ((HEAP32[i268 + 16 >> 2] & 16 | 0) == 0) {
            __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i9, i268);
           } else {
            HEAP32[i103 >> 2] = i268;
            i275 = i268 | 0;
            HEAP32[i275 >> 2] = (HEAP32[i275 >> 2] | 0) + 2;
           }
           i276 = HEAP32[i103 >> 2] | 0;
          }
          i275 = HEAP32[i102 >> 2] | 0;
          if ((i275 | 0) == 0) {
           HEAP32[i104 >> 2] = 0;
           i277 = 0;
          } else {
           if ((HEAP32[i275 + 16 >> 2] & 16 | 0) == 0) {
            __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i8, i275);
           } else {
            HEAP32[i104 >> 2] = i275;
            i268 = i275 | 0;
            HEAP32[i268 >> 2] = (HEAP32[i268 >> 2] | 0) + 2;
           }
           i277 = HEAP32[i104 >> 2] | 0;
          }
          HEAP32[i105 >> 2] = 4;
          HEAP32[i106 >> 2] = i276;
          i268 = (i276 | 0) == 0;
          if (!i268) {
           i275 = i276 | 0;
           HEAP32[i275 >> 2] = (HEAP32[i275 >> 2] | 0) + 2;
          }
          HEAP32[i107 >> 2] = i277;
          i275 = (i277 | 0) == 0;
          if (!i275) {
           i274 = i277 | 0;
           HEAP32[i274 >> 2] = (HEAP32[i274 >> 2] | 0) + 2;
          }
          HEAP32[i108 >> 2] = 0;
          HEAP32[i109 >> 2] = 0;
          HEAP32[i110 >> 2] = 0;
          __ZN7WebCore5XPath4StepC1ENS1_4AxisENS1_8NodeTestE(i266, 3, i26);
          i274 = HEAP32[i110 >> 2] | 0;
          if ((i274 | 0) != 0) {
           i278 = HEAP32[i108 >> 2] | 0;
           i279 = i278 + (i274 << 2) | 0;
           i274 = i278;
           while (1) {
            i278 = i274 | 0;
            i280 = HEAP32[i278 >> 2] | 0;
            HEAP32[i278 >> 2] = 0;
            if ((i280 | 0) != 0) {
             FUNCTION_TABLE_vi[HEAP32[(HEAP32[i280 >> 2] | 0) + 4 >> 2] & 1](i280);
            }
            i274 = i274 + 4 | 0;
            if ((i274 | 0) == (i279 | 0)) {
             break;
            }
           }
           HEAP32[i110 >> 2] = 0;
          }
          i279 = HEAP32[i108 >> 2] | 0;
          if ((i279 | 0) != 0) {
           HEAP32[i108 >> 2] = 0;
           HEAP32[i109 >> 2] = 0;
           __ZN3WTF8fastFreeEPv(i279);
          }
          i279 = HEAP32[i107 >> 2] | 0;
          do {
           if ((i279 | 0) != 0) {
            i274 = i279 | 0;
            i280 = (HEAP32[i274 >> 2] | 0) - 2 | 0;
            if ((i280 | 0) == 0) {
             __ZN3WTF10StringImpl7destroyEPS0_(i279);
             break;
            } else {
             HEAP32[i274 >> 2] = i280;
             break;
            }
           }
          } while (0);
          i279 = HEAP32[i106 >> 2] | 0;
          do {
           if ((i279 | 0) != 0) {
            i280 = i279 | 0;
            i274 = (HEAP32[i280 >> 2] | 0) - 2 | 0;
            if ((i274 | 0) == 0) {
             __ZN3WTF10StringImpl7destroyEPS0_(i279);
             break;
            } else {
             HEAP32[i280 >> 2] = i274;
             break;
            }
           }
          } while (0);
          do {
           if (!i275) {
            i279 = i277 | 0;
            i274 = (HEAP32[i279 >> 2] | 0) - 2 | 0;
            if ((i274 | 0) == 0) {
             __ZN3WTF10StringImpl7destroyEPS0_(i277);
             break;
            } else {
             HEAP32[i279 >> 2] = i274;
             break;
            }
           }
          } while (0);
          if (i268) {
           break;
          }
          i275 = i276 | 0;
          i274 = (HEAP32[i275 >> 2] | 0) - 2 | 0;
          if ((i274 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i276);
           break;
          } else {
           HEAP32[i275 >> 2] = i274;
           break;
          }
         } else {
          i274 = HEAP32[i101 >> 2] | 0;
          if ((i274 | 0) == 0) {
           HEAP32[i111 >> 2] = 0;
           i281 = 0;
          } else {
           if ((HEAP32[i274 + 16 >> 2] & 16 | 0) == 0) {
            __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i11, i274);
           } else {
            HEAP32[i111 >> 2] = i274;
            i275 = i274 | 0;
            HEAP32[i275 >> 2] = (HEAP32[i275 >> 2] | 0) + 2;
           }
           i281 = HEAP32[i111 >> 2] | 0;
          }
          i275 = HEAP32[i102 >> 2] | 0;
          if ((i275 | 0) == 0) {
           HEAP32[i112 >> 2] = 0;
           i282 = 0;
          } else {
           if ((HEAP32[i275 + 16 >> 2] & 16 | 0) == 0) {
            __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i10, i275);
           } else {
            HEAP32[i112 >> 2] = i275;
            i274 = i275 | 0;
            HEAP32[i274 >> 2] = (HEAP32[i274 >> 2] | 0) + 2;
           }
           i282 = HEAP32[i112 >> 2] | 0;
          }
          HEAP32[i113 >> 2] = 4;
          HEAP32[i114 >> 2] = i281;
          i274 = (i281 | 0) == 0;
          if (!i274) {
           i275 = i281 | 0;
           HEAP32[i275 >> 2] = (HEAP32[i275 >> 2] | 0) + 2;
          }
          HEAP32[i115 >> 2] = i282;
          i275 = (i282 | 0) == 0;
          if (!i275) {
           i279 = i282 | 0;
           HEAP32[i279 >> 2] = (HEAP32[i279 >> 2] | 0) + 2;
          }
          HEAP32[i116 >> 2] = 0;
          HEAP32[i117 >> 2] = 0;
          HEAP32[i118 >> 2] = 0;
          HEAP32[i119 >> 2] = 0;
          HEAP32[i120 >> 2] = 0;
          HEAP32[i121 >> 2] = 0;
          i279 = i272 + 8 | 0;
          HEAP32[i121 >> 2] = HEAP32[i279 >> 2];
          HEAP32[i279 >> 2] = 0;
          i279 = i272 | 0;
          i280 = HEAP32[i119 >> 2] | 0;
          HEAP32[i119 >> 2] = HEAP32[i279 >> 2];
          HEAP32[i279 >> 2] = i280;
          i280 = i272 + 4 | 0;
          i279 = HEAP32[i120 >> 2] | 0;
          HEAP32[i120 >> 2] = HEAP32[i280 >> 2];
          HEAP32[i280 >> 2] = i279;
          __ZN7WebCore5XPath4StepC1ENS1_4AxisENS1_8NodeTestEN3WTF6VectorINSt3__110unique_ptrINS0_10ExpressionENS6_14default_deleteIS8_EEEELj0ENS4_15CrashOnOverflowEEE(i266, 3, i24, i25);
          i279 = HEAP32[i121 >> 2] | 0;
          if ((i279 | 0) != 0) {
           i280 = HEAP32[i119 >> 2] | 0;
           i278 = i280 + (i279 << 2) | 0;
           i279 = i280;
           while (1) {
            i280 = i279 | 0;
            i283 = HEAP32[i280 >> 2] | 0;
            HEAP32[i280 >> 2] = 0;
            if ((i283 | 0) != 0) {
             FUNCTION_TABLE_vi[HEAP32[(HEAP32[i283 >> 2] | 0) + 4 >> 2] & 1](i283);
            }
            i279 = i279 + 4 | 0;
            if ((i279 | 0) == (i278 | 0)) {
             break;
            }
           }
           HEAP32[i121 >> 2] = 0;
          }
          i278 = HEAP32[i119 >> 2] | 0;
          if ((i278 | 0) != 0) {
           HEAP32[i119 >> 2] = 0;
           HEAP32[i120 >> 2] = 0;
           __ZN3WTF8fastFreeEPv(i278);
          }
          i278 = HEAP32[i118 >> 2] | 0;
          if ((i278 | 0) != 0) {
           i279 = HEAP32[i116 >> 2] | 0;
           i268 = i279 + (i278 << 2) | 0;
           i278 = i279;
           while (1) {
            i279 = i278 | 0;
            i283 = HEAP32[i279 >> 2] | 0;
            HEAP32[i279 >> 2] = 0;
            if ((i283 | 0) != 0) {
             FUNCTION_TABLE_vi[HEAP32[(HEAP32[i283 >> 2] | 0) + 4 >> 2] & 1](i283);
            }
            i278 = i278 + 4 | 0;
            if ((i278 | 0) == (i268 | 0)) {
             break;
            }
           }
           HEAP32[i118 >> 2] = 0;
          }
          i268 = HEAP32[i116 >> 2] | 0;
          if ((i268 | 0) != 0) {
           HEAP32[i116 >> 2] = 0;
           HEAP32[i117 >> 2] = 0;
           __ZN3WTF8fastFreeEPv(i268);
          }
          i268 = HEAP32[i115 >> 2] | 0;
          do {
           if ((i268 | 0) != 0) {
            i278 = i268 | 0;
            i283 = (HEAP32[i278 >> 2] | 0) - 2 | 0;
            if ((i283 | 0) == 0) {
             __ZN3WTF10StringImpl7destroyEPS0_(i268);
             break;
            } else {
             HEAP32[i278 >> 2] = i283;
             break;
            }
           }
          } while (0);
          i268 = HEAP32[i114 >> 2] | 0;
          do {
           if ((i268 | 0) != 0) {
            i283 = i268 | 0;
            i278 = (HEAP32[i283 >> 2] | 0) - 2 | 0;
            if ((i278 | 0) == 0) {
             __ZN3WTF10StringImpl7destroyEPS0_(i268);
             break;
            } else {
             HEAP32[i283 >> 2] = i278;
             break;
            }
           }
          } while (0);
          do {
           if (!i275) {
            i268 = i282 | 0;
            i278 = (HEAP32[i268 >> 2] | 0) - 2 | 0;
            if ((i278 | 0) == 0) {
             __ZN3WTF10StringImpl7destroyEPS0_(i282);
             break;
            } else {
             HEAP32[i268 >> 2] = i278;
             break;
            }
           }
          } while (0);
          if (i274) {
           break;
          }
          i275 = i281 | 0;
          i278 = (HEAP32[i275 >> 2] | 0) - 2 | 0;
          if ((i278 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i281);
           break;
          } else {
           HEAP32[i275 >> 2] = i278;
           break;
          }
         }
        } while (0);
        i284 = 0;
        i285 = i273;
       } else {
        i284 = 9;
        i285 = 0;
       }
       i266 = HEAP32[i102 >> 2] | 0;
       do {
        if ((i266 | 0) != 0) {
         i269 = i266 | 0;
         i267 = (HEAP32[i269 >> 2] | 0) - 2 | 0;
         if ((i267 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i266);
          break;
         } else {
          HEAP32[i269 >> 2] = i267;
          break;
         }
        }
       } while (0);
       i266 = HEAP32[i101 >> 2] | 0;
       do {
        if ((i266 | 0) != 0) {
         i273 = i266 | 0;
         i267 = (HEAP32[i273 >> 2] | 0) - 2 | 0;
         if ((i267 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i266);
          break;
         } else {
          HEAP32[i273 >> 2] = i267;
          break;
         }
        }
       } while (0);
       if ((i272 | 0) != 0) {
        i266 = i272 + 8 | 0;
        i267 = HEAP32[i266 >> 2] | 0;
        i273 = i272 | 0;
        if ((i267 | 0) != 0) {
         i269 = HEAP32[i273 >> 2] | 0;
         i247 = i269 + (i267 << 2) | 0;
         i267 = i269;
         while (1) {
          i269 = i267 | 0;
          i271 = HEAP32[i269 >> 2] | 0;
          HEAP32[i269 >> 2] = 0;
          if ((i271 | 0) != 0) {
           FUNCTION_TABLE_vi[HEAP32[(HEAP32[i271 >> 2] | 0) + 4 >> 2] & 1](i271);
          }
          i267 = i267 + 4 | 0;
          if ((i267 | 0) == (i247 | 0)) {
           break;
          }
         }
         HEAP32[i266 >> 2] = 0;
        }
        i247 = HEAP32[i273 >> 2] | 0;
        if ((i247 | 0) != 0) {
         HEAP32[i273 >> 2] = 0;
         HEAP32[i272 + 4 >> 2] = 0;
         __ZN3WTF8fastFreeEPv(i247);
        }
        __ZN3WTF8fastFreeEPv(i272);
       }
       i247 = HEAP32[i100 >> 2] | 0;
       do {
        if ((i247 | 0) != 0) {
         i267 = i247 | 0;
         i271 = (HEAP32[i267 >> 2] | 0) - 2 | 0;
         if ((i271 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i247);
          break;
         } else {
          HEAP32[i267 >> 2] = i271;
          break;
         }
        }
       } while (0);
       if ((i284 | 0) == 9) {
        i239 = i252;
        i240 = i250;
        i241 = i233;
        i242 = i235;
        i243 = i236;
        i244 = i253;
        i245 = 1;
        i246 = 583;
        break L1;
       } else {
        i265 = i285;
       }
       break;
      }
     case 14:
      {
       i247 = HEAP32[i233 - 4 >> 2] | 0;
       i272 = HEAP32[i233 >> 2] | 0;
       i273 = (i272 | 0) != 0;
       i266 = __ZN3WTF10fastMallocEj(40) | 0;
       i271 = i266;
       i267 = HEAP32[i233 - 8 >> 2] | 0;
       i269 = HEAP32[i247 >> 2] | 0;
       do {
        if (i273) {
         HEAP32[i122 >> 2] = i269;
         i270 = i247 + 4 | 0;
         i278 = HEAP32[i270 >> 2] | 0;
         HEAP32[i270 >> 2] = 0;
         HEAP32[i123 >> 2] = i278;
         i278 = i247 + 8 | 0;
         i270 = HEAP32[i278 >> 2] | 0;
         HEAP32[i278 >> 2] = 0;
         HEAP32[i124 >> 2] = i270;
         HEAP32[i125 >> 2] = 0;
         HEAP32[i126 >> 2] = 0;
         HEAP32[i127 >> 2] = 0;
         i270 = i247 + 20 | 0;
         HEAP32[i127 >> 2] = HEAP32[i270 >> 2];
         HEAP32[i270 >> 2] = 0;
         i270 = i247 + 12 | 0;
         i278 = HEAP32[i125 >> 2] | 0;
         HEAP32[i125 >> 2] = HEAP32[i270 >> 2];
         HEAP32[i270 >> 2] = i278;
         i278 = i247 + 16 | 0;
         i270 = HEAP32[i126 >> 2] | 0;
         HEAP32[i126 >> 2] = HEAP32[i278 >> 2];
         HEAP32[i278 >> 2] = i270;
         HEAP32[i128 >> 2] = 0;
         HEAP32[i129 >> 2] = 0;
         HEAP32[i130 >> 2] = 0;
         i270 = i272 + 8 | 0;
         HEAP32[i130 >> 2] = HEAP32[i270 >> 2];
         HEAP32[i270 >> 2] = 0;
         i270 = i272 | 0;
         i278 = HEAP32[i128 >> 2] | 0;
         HEAP32[i128 >> 2] = HEAP32[i270 >> 2];
         HEAP32[i270 >> 2] = i278;
         i278 = i272 + 4 | 0;
         i270 = HEAP32[i129 >> 2] | 0;
         HEAP32[i129 >> 2] = HEAP32[i278 >> 2];
         HEAP32[i278 >> 2] = i270;
         __ZN7WebCore5XPath4StepC1ENS1_4AxisENS1_8NodeTestEN3WTF6VectorINSt3__110unique_ptrINS0_10ExpressionENS6_14default_deleteIS8_EEEELj0ENS4_15CrashOnOverflowEEE(i271, i267, i27, i28);
         i270 = HEAP32[i130 >> 2] | 0;
         if ((i270 | 0) != 0) {
          i278 = HEAP32[i128 >> 2] | 0;
          i275 = i278 + (i270 << 2) | 0;
          i270 = i278;
          while (1) {
           i278 = i270 | 0;
           i268 = HEAP32[i278 >> 2] | 0;
           HEAP32[i278 >> 2] = 0;
           if ((i268 | 0) != 0) {
            FUNCTION_TABLE_vi[HEAP32[(HEAP32[i268 >> 2] | 0) + 4 >> 2] & 1](i268);
           }
           i270 = i270 + 4 | 0;
           if ((i270 | 0) == (i275 | 0)) {
            break;
           }
          }
          HEAP32[i130 >> 2] = 0;
         }
         i275 = HEAP32[i128 >> 2] | 0;
         if ((i275 | 0) != 0) {
          HEAP32[i128 >> 2] = 0;
          HEAP32[i129 >> 2] = 0;
          __ZN3WTF8fastFreeEPv(i275);
         }
         i275 = HEAP32[i127 >> 2] | 0;
         if ((i275 | 0) != 0) {
          i270 = HEAP32[i125 >> 2] | 0;
          i274 = i270 + (i275 << 2) | 0;
          i275 = i270;
          while (1) {
           i270 = i275 | 0;
           i268 = HEAP32[i270 >> 2] | 0;
           HEAP32[i270 >> 2] = 0;
           if ((i268 | 0) != 0) {
            FUNCTION_TABLE_vi[HEAP32[(HEAP32[i268 >> 2] | 0) + 4 >> 2] & 1](i268);
           }
           i275 = i275 + 4 | 0;
           if ((i275 | 0) == (i274 | 0)) {
            break;
           }
          }
          HEAP32[i127 >> 2] = 0;
         }
         i274 = HEAP32[i125 >> 2] | 0;
         if ((i274 | 0) != 0) {
          HEAP32[i125 >> 2] = 0;
          HEAP32[i126 >> 2] = 0;
          __ZN3WTF8fastFreeEPv(i274);
         }
         i274 = HEAP32[i124 >> 2] | 0;
         do {
          if ((i274 | 0) != 0) {
           i275 = i274 | 0;
           i268 = (HEAP32[i275 >> 2] | 0) - 2 | 0;
           if ((i268 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i274);
            break;
           } else {
            HEAP32[i275 >> 2] = i268;
            break;
           }
          }
         } while (0);
         i274 = HEAP32[i123 >> 2] | 0;
         if ((i274 | 0) == 0) {
          break;
         }
         i268 = i274 | 0;
         i275 = (HEAP32[i268 >> 2] | 0) - 2 | 0;
         if ((i275 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i274);
          break;
         } else {
          HEAP32[i268 >> 2] = i275;
          break;
         }
        } else {
         HEAP32[i131 >> 2] = i269;
         i275 = i247 + 4 | 0;
         i268 = HEAP32[i275 >> 2] | 0;
         HEAP32[i275 >> 2] = 0;
         HEAP32[i132 >> 2] = i268;
         i268 = i247 + 8 | 0;
         i275 = HEAP32[i268 >> 2] | 0;
         HEAP32[i268 >> 2] = 0;
         HEAP32[i133 >> 2] = i275;
         HEAP32[i134 >> 2] = 0;
         HEAP32[i135 >> 2] = 0;
         HEAP32[i136 >> 2] = 0;
         i275 = i247 + 20 | 0;
         HEAP32[i136 >> 2] = HEAP32[i275 >> 2];
         HEAP32[i275 >> 2] = 0;
         i275 = i247 + 12 | 0;
         i268 = HEAP32[i134 >> 2] | 0;
         HEAP32[i134 >> 2] = HEAP32[i275 >> 2];
         HEAP32[i275 >> 2] = i268;
         i268 = i247 + 16 | 0;
         i275 = HEAP32[i135 >> 2] | 0;
         HEAP32[i135 >> 2] = HEAP32[i268 >> 2];
         HEAP32[i268 >> 2] = i275;
         __ZN7WebCore5XPath4StepC1ENS1_4AxisENS1_8NodeTestE(i271, i267, i29);
         i275 = HEAP32[i136 >> 2] | 0;
         if ((i275 | 0) != 0) {
          i268 = HEAP32[i134 >> 2] | 0;
          i274 = i268 + (i275 << 2) | 0;
          i275 = i268;
          while (1) {
           i268 = i275 | 0;
           i270 = HEAP32[i268 >> 2] | 0;
           HEAP32[i268 >> 2] = 0;
           if ((i270 | 0) != 0) {
            FUNCTION_TABLE_vi[HEAP32[(HEAP32[i270 >> 2] | 0) + 4 >> 2] & 1](i270);
           }
           i275 = i275 + 4 | 0;
           if ((i275 | 0) == (i274 | 0)) {
            break;
           }
          }
          HEAP32[i136 >> 2] = 0;
         }
         i274 = HEAP32[i134 >> 2] | 0;
         if ((i274 | 0) != 0) {
          HEAP32[i134 >> 2] = 0;
          HEAP32[i135 >> 2] = 0;
          __ZN3WTF8fastFreeEPv(i274);
         }
         i274 = HEAP32[i133 >> 2] | 0;
         do {
          if ((i274 | 0) != 0) {
           i275 = i274 | 0;
           i270 = (HEAP32[i275 >> 2] | 0) - 2 | 0;
           if ((i270 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i274);
            break;
           } else {
            HEAP32[i275 >> 2] = i270;
            break;
           }
          }
         } while (0);
         i274 = HEAP32[i132 >> 2] | 0;
         if ((i274 | 0) == 0) {
          break;
         }
         i270 = i274 | 0;
         i275 = (HEAP32[i270 >> 2] | 0) - 2 | 0;
         if ((i275 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i274);
          break;
         } else {
          HEAP32[i270 >> 2] = i275;
          break;
         }
        }
       } while (0);
       i267 = i266;
       if (!((i272 | 0) == 0 | i273 ^ 1)) {
        i271 = i272 + 8 | 0;
        i269 = HEAP32[i271 >> 2] | 0;
        i275 = i272 | 0;
        if ((i269 | 0) != 0) {
         i270 = HEAP32[i275 >> 2] | 0;
         i274 = i270 + (i269 << 2) | 0;
         i269 = i270;
         while (1) {
          i270 = i269 | 0;
          i268 = HEAP32[i270 >> 2] | 0;
          HEAP32[i270 >> 2] = 0;
          if ((i268 | 0) != 0) {
           FUNCTION_TABLE_vi[HEAP32[(HEAP32[i268 >> 2] | 0) + 4 >> 2] & 1](i268);
          }
          i269 = i269 + 4 | 0;
          if ((i269 | 0) == (i274 | 0)) {
           break;
          }
         }
         HEAP32[i271 >> 2] = 0;
        }
        i274 = HEAP32[i275 >> 2] | 0;
        if ((i274 | 0) != 0) {
         HEAP32[i275 >> 2] = 0;
         HEAP32[i272 + 4 >> 2] = 0;
         __ZN3WTF8fastFreeEPv(i274);
        }
        __ZN3WTF8fastFreeEPv(i272);
       }
       if ((i247 | 0) == 0) {
        i265 = i267;
        break L27;
       }
       __ZN7WebCore5XPath4Step8NodeTestD2Ev(i247);
       __ZN3WTF8fastFreeEPv(i247);
       i265 = i267;
       break;
      }
     case 15:
      {
       HEAP32[i137 >> 2] = HEAP32[i233 - 4 >> 2];
       i274 = HEAP32[i233 >> 2] | 0;
       HEAP32[i138 >> 2] = 0;
       HEAP32[i139 >> 2] = 0;
       if (__ZN7WebCore5XPath6Parser19expandQualifiedNameERKN3WTF6StringERS3_S6_(i1, i30, i31, i32) | 0) {
        i269 = __ZN3WTF10fastMallocEj(40) | 0;
        i273 = i269;
        i266 = HEAP32[i233 - 8 >> 2] | 0;
        do {
         if ((i274 | 0) == 0) {
          i268 = HEAP32[i138 >> 2] | 0;
          if ((i268 | 0) == 0) {
           HEAP32[i140 >> 2] = 0;
           i286 = 0;
          } else {
           if ((HEAP32[i268 + 16 >> 2] & 16 | 0) == 0) {
            __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i5, i268);
           } else {
            HEAP32[i140 >> 2] = i268;
            i270 = i268 | 0;
            HEAP32[i270 >> 2] = (HEAP32[i270 >> 2] | 0) + 2;
           }
           i286 = HEAP32[i140 >> 2] | 0;
          }
          i270 = HEAP32[i139 >> 2] | 0;
          if ((i270 | 0) == 0) {
           HEAP32[i141 >> 2] = 0;
           i287 = 0;
          } else {
           if ((HEAP32[i270 + 16 >> 2] & 16 | 0) == 0) {
            __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i270);
           } else {
            HEAP32[i141 >> 2] = i270;
            i268 = i270 | 0;
            HEAP32[i268 >> 2] = (HEAP32[i268 >> 2] | 0) + 2;
           }
           i287 = HEAP32[i141 >> 2] | 0;
          }
          HEAP32[i142 >> 2] = 4;
          HEAP32[i143 >> 2] = i286;
          i268 = (i286 | 0) == 0;
          if (!i268) {
           i270 = i286 | 0;
           HEAP32[i270 >> 2] = (HEAP32[i270 >> 2] | 0) + 2;
          }
          HEAP32[i144 >> 2] = i287;
          i270 = (i287 | 0) == 0;
          if (!i270) {
           i278 = i287 | 0;
           HEAP32[i278 >> 2] = (HEAP32[i278 >> 2] | 0) + 2;
          }
          HEAP32[i145 >> 2] = 0;
          HEAP32[i146 >> 2] = 0;
          HEAP32[i147 >> 2] = 0;
          __ZN7WebCore5XPath4StepC1ENS1_4AxisENS1_8NodeTestE(i273, i266, i35);
          i278 = HEAP32[i147 >> 2] | 0;
          if ((i278 | 0) != 0) {
           i283 = HEAP32[i145 >> 2] | 0;
           i279 = i283 + (i278 << 2) | 0;
           i278 = i283;
           while (1) {
            i283 = i278 | 0;
            i280 = HEAP32[i283 >> 2] | 0;
            HEAP32[i283 >> 2] = 0;
            if ((i280 | 0) != 0) {
             FUNCTION_TABLE_vi[HEAP32[(HEAP32[i280 >> 2] | 0) + 4 >> 2] & 1](i280);
            }
            i278 = i278 + 4 | 0;
            if ((i278 | 0) == (i279 | 0)) {
             break;
            }
           }
           HEAP32[i147 >> 2] = 0;
          }
          i279 = HEAP32[i145 >> 2] | 0;
          if ((i279 | 0) != 0) {
           HEAP32[i145 >> 2] = 0;
           HEAP32[i146 >> 2] = 0;
           __ZN3WTF8fastFreeEPv(i279);
          }
          i279 = HEAP32[i144 >> 2] | 0;
          do {
           if ((i279 | 0) != 0) {
            i278 = i279 | 0;
            i280 = (HEAP32[i278 >> 2] | 0) - 2 | 0;
            if ((i280 | 0) == 0) {
             __ZN3WTF10StringImpl7destroyEPS0_(i279);
             break;
            } else {
             HEAP32[i278 >> 2] = i280;
             break;
            }
           }
          } while (0);
          i279 = HEAP32[i143 >> 2] | 0;
          do {
           if ((i279 | 0) != 0) {
            i280 = i279 | 0;
            i278 = (HEAP32[i280 >> 2] | 0) - 2 | 0;
            if ((i278 | 0) == 0) {
             __ZN3WTF10StringImpl7destroyEPS0_(i279);
             break;
            } else {
             HEAP32[i280 >> 2] = i278;
             break;
            }
           }
          } while (0);
          do {
           if (!i270) {
            i279 = i287 | 0;
            i278 = (HEAP32[i279 >> 2] | 0) - 2 | 0;
            if ((i278 | 0) == 0) {
             __ZN3WTF10StringImpl7destroyEPS0_(i287);
             break;
            } else {
             HEAP32[i279 >> 2] = i278;
             break;
            }
           }
          } while (0);
          if (i268) {
           break;
          }
          i270 = i286 | 0;
          i278 = (HEAP32[i270 >> 2] | 0) - 2 | 0;
          if ((i278 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i286);
           break;
          } else {
           HEAP32[i270 >> 2] = i278;
           break;
          }
         } else {
          i278 = HEAP32[i138 >> 2] | 0;
          if ((i278 | 0) == 0) {
           HEAP32[i148 >> 2] = 0;
           i288 = 0;
          } else {
           if ((HEAP32[i278 + 16 >> 2] & 16 | 0) == 0) {
            __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i7, i278);
           } else {
            HEAP32[i148 >> 2] = i278;
            i270 = i278 | 0;
            HEAP32[i270 >> 2] = (HEAP32[i270 >> 2] | 0) + 2;
           }
           i288 = HEAP32[i148 >> 2] | 0;
          }
          i270 = HEAP32[i139 >> 2] | 0;
          if ((i270 | 0) == 0) {
           HEAP32[i149 >> 2] = 0;
           i289 = 0;
          } else {
           if ((HEAP32[i270 + 16 >> 2] & 16 | 0) == 0) {
            __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i6, i270);
           } else {
            HEAP32[i149 >> 2] = i270;
            i278 = i270 | 0;
            HEAP32[i278 >> 2] = (HEAP32[i278 >> 2] | 0) + 2;
           }
           i289 = HEAP32[i149 >> 2] | 0;
          }
          HEAP32[i150 >> 2] = 4;
          HEAP32[i151 >> 2] = i288;
          i278 = (i288 | 0) == 0;
          if (!i278) {
           i270 = i288 | 0;
           HEAP32[i270 >> 2] = (HEAP32[i270 >> 2] | 0) + 2;
          }
          HEAP32[i152 >> 2] = i289;
          i270 = (i289 | 0) == 0;
          if (!i270) {
           i279 = i289 | 0;
           HEAP32[i279 >> 2] = (HEAP32[i279 >> 2] | 0) + 2;
          }
          HEAP32[i153 >> 2] = 0;
          HEAP32[i154 >> 2] = 0;
          HEAP32[i155 >> 2] = 0;
          HEAP32[i156 >> 2] = 0;
          HEAP32[i157 >> 2] = 0;
          HEAP32[i158 >> 2] = 0;
          i279 = i274 + 8 | 0;
          HEAP32[i158 >> 2] = HEAP32[i279 >> 2];
          HEAP32[i279 >> 2] = 0;
          i279 = i274 | 0;
          i280 = HEAP32[i156 >> 2] | 0;
          HEAP32[i156 >> 2] = HEAP32[i279 >> 2];
          HEAP32[i279 >> 2] = i280;
          i280 = i274 + 4 | 0;
          i279 = HEAP32[i157 >> 2] | 0;
          HEAP32[i157 >> 2] = HEAP32[i280 >> 2];
          HEAP32[i280 >> 2] = i279;
          __ZN7WebCore5XPath4StepC1ENS1_4AxisENS1_8NodeTestEN3WTF6VectorINSt3__110unique_ptrINS0_10ExpressionENS6_14default_deleteIS8_EEEELj0ENS4_15CrashOnOverflowEEE(i273, i266, i33, i34);
          i279 = HEAP32[i158 >> 2] | 0;
          if ((i279 | 0) != 0) {
           i280 = HEAP32[i156 >> 2] | 0;
           i283 = i280 + (i279 << 2) | 0;
           i279 = i280;
           while (1) {
            i280 = i279 | 0;
            i290 = HEAP32[i280 >> 2] | 0;
            HEAP32[i280 >> 2] = 0;
            if ((i290 | 0) != 0) {
             FUNCTION_TABLE_vi[HEAP32[(HEAP32[i290 >> 2] | 0) + 4 >> 2] & 1](i290);
            }
            i279 = i279 + 4 | 0;
            if ((i279 | 0) == (i283 | 0)) {
             break;
            }
           }
           HEAP32[i158 >> 2] = 0;
          }
          i283 = HEAP32[i156 >> 2] | 0;
          if ((i283 | 0) != 0) {
           HEAP32[i156 >> 2] = 0;
           HEAP32[i157 >> 2] = 0;
           __ZN3WTF8fastFreeEPv(i283);
          }
          i283 = HEAP32[i155 >> 2] | 0;
          if ((i283 | 0) != 0) {
           i279 = HEAP32[i153 >> 2] | 0;
           i268 = i279 + (i283 << 2) | 0;
           i283 = i279;
           while (1) {
            i279 = i283 | 0;
            i290 = HEAP32[i279 >> 2] | 0;
            HEAP32[i279 >> 2] = 0;
            if ((i290 | 0) != 0) {
             FUNCTION_TABLE_vi[HEAP32[(HEAP32[i290 >> 2] | 0) + 4 >> 2] & 1](i290);
            }
            i283 = i283 + 4 | 0;
            if ((i283 | 0) == (i268 | 0)) {
             break;
            }
           }
           HEAP32[i155 >> 2] = 0;
          }
          i268 = HEAP32[i153 >> 2] | 0;
          if ((i268 | 0) != 0) {
           HEAP32[i153 >> 2] = 0;
           HEAP32[i154 >> 2] = 0;
           __ZN3WTF8fastFreeEPv(i268);
          }
          i268 = HEAP32[i152 >> 2] | 0;
          do {
           if ((i268 | 0) != 0) {
            i283 = i268 | 0;
            i290 = (HEAP32[i283 >> 2] | 0) - 2 | 0;
            if ((i290 | 0) == 0) {
             __ZN3WTF10StringImpl7destroyEPS0_(i268);
             break;
            } else {
             HEAP32[i283 >> 2] = i290;
             break;
            }
           }
          } while (0);
          i268 = HEAP32[i151 >> 2] | 0;
          do {
           if ((i268 | 0) != 0) {
            i290 = i268 | 0;
            i283 = (HEAP32[i290 >> 2] | 0) - 2 | 0;
            if ((i283 | 0) == 0) {
             __ZN3WTF10StringImpl7destroyEPS0_(i268);
             break;
            } else {
             HEAP32[i290 >> 2] = i283;
             break;
            }
           }
          } while (0);
          do {
           if (!i270) {
            i268 = i289 | 0;
            i283 = (HEAP32[i268 >> 2] | 0) - 2 | 0;
            if ((i283 | 0) == 0) {
             __ZN3WTF10StringImpl7destroyEPS0_(i289);
             break;
            } else {
             HEAP32[i268 >> 2] = i283;
             break;
            }
           }
          } while (0);
          if (i278) {
           break;
          }
          i270 = i288 | 0;
          i283 = (HEAP32[i270 >> 2] | 0) - 2 | 0;
          if ((i283 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i288);
           break;
          } else {
           HEAP32[i270 >> 2] = i283;
           break;
          }
         }
        } while (0);
        i291 = 0;
        i292 = i269;
       } else {
        i291 = 9;
        i292 = 0;
       }
       i266 = HEAP32[i139 >> 2] | 0;
       do {
        if ((i266 | 0) != 0) {
         i273 = i266 | 0;
         i267 = (HEAP32[i273 >> 2] | 0) - 2 | 0;
         if ((i267 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i266);
          break;
         } else {
          HEAP32[i273 >> 2] = i267;
          break;
         }
        }
       } while (0);
       i266 = HEAP32[i138 >> 2] | 0;
       do {
        if ((i266 | 0) != 0) {
         i269 = i266 | 0;
         i267 = (HEAP32[i269 >> 2] | 0) - 2 | 0;
         if ((i267 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i266);
          break;
         } else {
          HEAP32[i269 >> 2] = i267;
          break;
         }
        }
       } while (0);
       if ((i274 | 0) != 0) {
        i266 = i274 + 8 | 0;
        i267 = HEAP32[i266 >> 2] | 0;
        i269 = i274 | 0;
        if ((i267 | 0) != 0) {
         i273 = HEAP32[i269 >> 2] | 0;
         i247 = i273 + (i267 << 2) | 0;
         i267 = i273;
         while (1) {
          i273 = i267 | 0;
          i272 = HEAP32[i273 >> 2] | 0;
          HEAP32[i273 >> 2] = 0;
          if ((i272 | 0) != 0) {
           FUNCTION_TABLE_vi[HEAP32[(HEAP32[i272 >> 2] | 0) + 4 >> 2] & 1](i272);
          }
          i267 = i267 + 4 | 0;
          if ((i267 | 0) == (i247 | 0)) {
           break;
          }
         }
         HEAP32[i266 >> 2] = 0;
        }
        i247 = HEAP32[i269 >> 2] | 0;
        if ((i247 | 0) != 0) {
         HEAP32[i269 >> 2] = 0;
         HEAP32[i274 + 4 >> 2] = 0;
         __ZN3WTF8fastFreeEPv(i247);
        }
        __ZN3WTF8fastFreeEPv(i274);
       }
       i247 = HEAP32[i137 >> 2] | 0;
       do {
        if ((i247 | 0) != 0) {
         i267 = i247 | 0;
         i272 = (HEAP32[i267 >> 2] | 0) - 2 | 0;
         if ((i272 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i247);
          break;
         } else {
          HEAP32[i267 >> 2] = i272;
          break;
         }
        }
       } while (0);
       if ((i291 | 0) == 9) {
        i239 = i252;
        i240 = i250;
        i241 = i233;
        i242 = i235;
        i243 = i236;
        i244 = i253;
        i245 = 1;
        i246 = 583;
        break L1;
       } else {
        i265 = i292;
       }
       break;
      }
     case 18:
      {
       i265 = 2;
       break;
      }
     case 19:
      {
       i247 = __ZN3WTF10fastMallocEj(24) | 0;
       HEAP32[i247 >> 2] = 3;
       _memset(i247 + 4 | 0, 0, 20) | 0;
       i265 = i247;
       break;
      }
     case 20:
      {
       i247 = __ZN3WTF10fastMallocEj(24) | 0;
       _memset(i247 | 0, 0, 24) | 0;
       i265 = i247;
       break;
      }
     case 21:
      {
       i247 = __ZN3WTF10fastMallocEj(24) | 0;
       HEAP32[i247 >> 2] = 1;
       _memset(i247 + 4 | 0, 0, 20) | 0;
       i265 = i247;
       break;
      }
     case 22:
      {
       i247 = __ZN3WTF10fastMallocEj(24) | 0;
       HEAP32[i247 >> 2] = 2;
       _memset(i247 + 4 | 0, 0, 20) | 0;
       i265 = i247;
       break;
      }
     case 23:
      {
       HEAP32[i159 >> 2] = HEAP32[i233 - 4 >> 2];
       i247 = __ZN3WTF10fastMallocEj(24) | 0;
       __ZNK3WTF6String15stripWhiteSpaceEv(i37, i36);
       i274 = HEAP32[i160 >> 2] | 0;
       do {
        if ((i274 | 0) == 0) {
         HEAP32[i161 >> 2] = 0;
         HEAP32[i247 >> 2] = 2;
         HEAP32[i247 + 4 >> 2] = 0;
         i246 = 382;
        } else {
         if ((HEAP32[i274 + 16 >> 2] & 16 | 0) == 0) {
          __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i3, i274);
         } else {
          HEAP32[i161 >> 2] = i274;
          i269 = i274 | 0;
          HEAP32[i269 >> 2] = (HEAP32[i269 >> 2] | 0) + 2;
         }
         i269 = HEAP32[i161 >> 2] | 0;
         HEAP32[i247 >> 2] = 2;
         HEAP32[i247 + 4 >> 2] = i269;
         if ((i269 | 0) == 0) {
          i246 = 382;
          break;
         }
         i266 = i269 | 0;
         HEAP32[i266 >> 2] = (HEAP32[i266 >> 2] | 0) + 2;
         _memset(i247 + 8 | 0, 0, 16) | 0;
         i272 = i247;
         i267 = (HEAP32[i266 >> 2] | 0) - 2 | 0;
         if ((i267 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i269);
          i293 = i272;
          break;
         } else {
          HEAP32[i266 >> 2] = i267;
          i293 = i272;
          break;
         }
        }
       } while (0);
       if ((i246 | 0) == 382) {
        i246 = 0;
        _memset(i247 + 8 | 0, 0, 16) | 0;
        i293 = i247;
       }
       i274 = HEAP32[i160 >> 2] | 0;
       do {
        if ((i274 | 0) != 0) {
         i272 = i274 | 0;
         i267 = (HEAP32[i272 >> 2] | 0) - 2 | 0;
         if ((i267 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i274);
          break;
         } else {
          HEAP32[i272 >> 2] = i267;
          break;
         }
        }
       } while (0);
       i274 = HEAP32[i159 >> 2] | 0;
       if ((i274 | 0) == 0) {
        i265 = i293;
        break L27;
       }
       i247 = i274 | 0;
       i267 = (HEAP32[i247 >> 2] | 0) - 2 | 0;
       if ((i267 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i274);
        i265 = i293;
        break L27;
       } else {
        HEAP32[i247 >> 2] = i267;
        i265 = i293;
        break L27;
       }
       break;
      }
     case 24:
      {
       i265 = 0;
       break;
      }
     case 26:
      {
       i267 = __ZN3WTF10fastMallocEj(12) | 0;
       i247 = i267;
       HEAP32[i247 >> 2] = 0;
       i274 = i267 + 4 | 0;
       HEAP32[i274 >> 2] = 0;
       i272 = i267 + 8 | 0;
       HEAP32[i272 >> 2] = 0;
       i266 = i267;
       i269 = HEAP32[i233 >> 2] | 0;
       HEAP32[i162 >> 2] = i269;
       i273 = HEAP32[i272 >> 2] | 0;
       if ((i273 | 0) == (HEAP32[i274 >> 2] | 0)) {
        __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath10ExpressionENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS8_EEvOT_(i267, i38);
       } else {
        i267 = HEAP32[i247 >> 2] | 0;
        HEAP32[i162 >> 2] = 0;
        HEAP32[i267 + (i273 << 2) >> 2] = i269;
        HEAP32[i272 >> 2] = (HEAP32[i272 >> 2] | 0) + 1;
       }
       i272 = HEAP32[i162 >> 2] | 0;
       HEAP32[i162 >> 2] = 0;
       if ((i272 | 0) == 0) {
        i265 = i266;
        break L27;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i272 >> 2] | 0) + 4 >> 2] & 1](i272);
       i265 = i266;
       break;
      }
     case 27:
      {
       i266 = HEAP32[i233 - 4 >> 2] | 0;
       i272 = i266;
       i269 = HEAP32[i233 >> 2] | 0;
       HEAP32[i163 >> 2] = i269;
       i273 = i266 + 8 | 0;
       i267 = HEAP32[i273 >> 2] | 0;
       if ((i267 | 0) == (HEAP32[i266 + 4 >> 2] | 0)) {
        __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath10ExpressionENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS8_EEvOT_(i266, i39);
       } else {
        i247 = HEAP32[i266 >> 2] | 0;
        HEAP32[i163 >> 2] = 0;
        HEAP32[i247 + (i267 << 2) >> 2] = i269;
        HEAP32[i273 >> 2] = (HEAP32[i273 >> 2] | 0) + 1;
       }
       i273 = HEAP32[i163 >> 2] | 0;
       HEAP32[i163 >> 2] = 0;
       if ((i273 | 0) == 0) {
        i265 = i272;
        break L27;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i273 >> 2] | 0) + 4 >> 2] & 1](i273);
       i265 = i272;
       break;
      }
     case 28:
      {
       i265 = HEAP32[i233 - 4 >> 2] | 0;
       break;
      }
     case 29:
      {
       i272 = __ZN3WTF10fastMallocEj(40) | 0;
       HEAP32[i164 >> 2] = 3;
       _memset(i166 | 0, 0, 20) | 0;
       __ZN7WebCore5XPath4StepC1ENS1_4AxisENS1_8NodeTestE(i272, 5, i40);
       i273 = i272;
       i272 = HEAP32[i167 >> 2] | 0;
       if ((i272 | 0) != 0) {
        i269 = HEAP32[i168 >> 2] | 0;
        i267 = i269 + (i272 << 2) | 0;
        i272 = i269;
        while (1) {
         i269 = i272 | 0;
         i247 = HEAP32[i269 >> 2] | 0;
         HEAP32[i269 >> 2] = 0;
         if ((i247 | 0) != 0) {
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i247 >> 2] | 0) + 4 >> 2] & 1](i247);
         }
         i272 = i272 + 4 | 0;
         if ((i272 | 0) == (i267 | 0)) {
          break;
         }
        }
        HEAP32[i167 >> 2] = 0;
       }
       i267 = HEAP32[i168 >> 2] | 0;
       if ((i267 | 0) != 0) {
        HEAP32[i168 >> 2] = 0;
        HEAP32[i170 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i267);
       }
       i267 = HEAP32[i169 >> 2] | 0;
       do {
        if ((i267 | 0) != 0) {
         i272 = i267 | 0;
         i247 = (HEAP32[i272 >> 2] | 0) - 2 | 0;
         if ((i247 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i267);
          break;
         } else {
          HEAP32[i272 >> 2] = i247;
          break;
         }
        }
       } while (0);
       i267 = HEAP32[i165 >> 2] | 0;
       if ((i267 | 0) == 0) {
        i265 = i273;
        break L27;
       }
       i247 = i267 | 0;
       i272 = (HEAP32[i247 >> 2] | 0) - 2 | 0;
       if ((i272 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i267);
        i265 = i273;
        break L27;
       } else {
        HEAP32[i247 >> 2] = i272;
        i265 = i273;
        break L27;
       }
       break;
      }
     case 30:
      {
       i272 = __ZN3WTF10fastMallocEj(40) | 0;
       HEAP32[i171 >> 2] = 3;
       _memset(i173 | 0, 0, 20) | 0;
       __ZN7WebCore5XPath4StepC1ENS1_4AxisENS1_8NodeTestE(i272, 12, i41);
       i247 = i272;
       i272 = HEAP32[i174 >> 2] | 0;
       if ((i272 | 0) != 0) {
        i267 = HEAP32[i175 >> 2] | 0;
        i269 = i267 + (i272 << 2) | 0;
        i272 = i267;
        while (1) {
         i267 = i272 | 0;
         i266 = HEAP32[i267 >> 2] | 0;
         HEAP32[i267 >> 2] = 0;
         if ((i266 | 0) != 0) {
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i266 >> 2] | 0) + 4 >> 2] & 1](i266);
         }
         i272 = i272 + 4 | 0;
         if ((i272 | 0) == (i269 | 0)) {
          break;
         }
        }
        HEAP32[i174 >> 2] = 0;
       }
       i269 = HEAP32[i175 >> 2] | 0;
       if ((i269 | 0) != 0) {
        HEAP32[i175 >> 2] = 0;
        HEAP32[i177 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i269);
       }
       i269 = HEAP32[i176 >> 2] | 0;
       do {
        if ((i269 | 0) != 0) {
         i272 = i269 | 0;
         i273 = (HEAP32[i272 >> 2] | 0) - 2 | 0;
         if ((i273 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i269);
          break;
         } else {
          HEAP32[i272 >> 2] = i273;
          break;
         }
        }
       } while (0);
       i269 = HEAP32[i172 >> 2] | 0;
       if ((i269 | 0) == 0) {
        i265 = i247;
        break L27;
       }
       i273 = i269 | 0;
       i272 = (HEAP32[i273 >> 2] | 0) - 2 | 0;
       if ((i272 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i269);
        i265 = i247;
        break L27;
       } else {
        HEAP32[i273 >> 2] = i272;
        i265 = i247;
        break L27;
       }
       break;
      }
     case 31:
      {
       i272 = __ZN3WTF10fastMallocEj(40) | 0;
       HEAP32[i178 >> 2] = 3;
       _memset(i180 | 0, 0, 20) | 0;
       __ZN7WebCore5XPath4StepC1ENS1_4AxisENS1_8NodeTestE(i272, 9, i42);
       i273 = i272;
       i272 = HEAP32[i181 >> 2] | 0;
       if ((i272 | 0) != 0) {
        i269 = HEAP32[i182 >> 2] | 0;
        i266 = i269 + (i272 << 2) | 0;
        i272 = i269;
        while (1) {
         i269 = i272 | 0;
         i267 = HEAP32[i269 >> 2] | 0;
         HEAP32[i269 >> 2] = 0;
         if ((i267 | 0) != 0) {
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i267 >> 2] | 0) + 4 >> 2] & 1](i267);
         }
         i272 = i272 + 4 | 0;
         if ((i272 | 0) == (i266 | 0)) {
          break;
         }
        }
        HEAP32[i181 >> 2] = 0;
       }
       i266 = HEAP32[i182 >> 2] | 0;
       if ((i266 | 0) != 0) {
        HEAP32[i182 >> 2] = 0;
        HEAP32[i184 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i266);
       }
       i266 = HEAP32[i183 >> 2] | 0;
       do {
        if ((i266 | 0) != 0) {
         i272 = i266 | 0;
         i247 = (HEAP32[i272 >> 2] | 0) - 2 | 0;
         if ((i247 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i266);
          break;
         } else {
          HEAP32[i272 >> 2] = i247;
          break;
         }
        }
       } while (0);
       i266 = HEAP32[i179 >> 2] | 0;
       if ((i266 | 0) == 0) {
        i265 = i273;
        break L27;
       }
       i247 = i266 | 0;
       i272 = (HEAP32[i247 >> 2] | 0) - 2 | 0;
       if ((i272 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i266);
        i265 = i273;
        break L27;
       } else {
        HEAP32[i247 >> 2] = i272;
        i265 = i273;
        break L27;
       }
       break;
      }
     case 32:
      {
       HEAP32[i185 >> 2] = HEAP32[i233 >> 2];
       i272 = __ZN3WTF10fastMallocEj(24) | 0;
       __ZN7WebCore5XPath17VariableReferenceC1ERKN3WTF6StringE(i272, i43);
       i247 = i272;
       i272 = HEAP32[i185 >> 2] | 0;
       if ((i272 | 0) == 0) {
        i265 = i247;
        break L27;
       }
       i266 = i272 | 0;
       i267 = (HEAP32[i266 >> 2] | 0) - 2 | 0;
       if ((i267 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i272);
        i265 = i247;
        break L27;
       } else {
        HEAP32[i266 >> 2] = i267;
        i265 = i247;
        break L27;
       }
       break;
      }
     case 33:
      {
       i265 = HEAP32[i233 - 4 >> 2] | 0;
       break;
      }
     case 34:
      {
       HEAP32[i186 >> 2] = HEAP32[i233 >> 2];
       i247 = __ZN3WTF10fastMallocEj(48) | 0;
       __ZN7WebCore5XPath16StringExpressionC1EON3WTF6StringE(i247, i44);
       i267 = i247;
       i247 = HEAP32[i186 >> 2] | 0;
       if ((i247 | 0) == 0) {
        i265 = i267;
        break L27;
       }
       i266 = i247 | 0;
       i272 = (HEAP32[i266 >> 2] | 0) - 2 | 0;
       if ((i272 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i247);
        i265 = i267;
        break L27;
       } else {
        HEAP32[i266 >> 2] = i272;
        i265 = i267;
        break L27;
       }
       break;
      }
     case 35:
      {
       HEAP32[i187 >> 2] = HEAP32[i233 >> 2];
       i267 = __ZN3WTF10fastMallocEj(48) | 0;
       __ZN7WebCore5XPath6NumberC1Ed(i267, +__ZNK3WTF6String8toDoubleEPb(i45, 0));
       i272 = i267;
       i267 = HEAP32[i187 >> 2] | 0;
       if ((i267 | 0) == 0) {
        i265 = i272;
        break L27;
       }
       i266 = i267 | 0;
       i247 = (HEAP32[i266 >> 2] | 0) - 2 | 0;
       if ((i247 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i267);
        i265 = i272;
        break L27;
       } else {
        HEAP32[i266 >> 2] = i247;
        i265 = i272;
        break L27;
       }
       break;
      }
     case 37:
      {
       HEAP32[i188 >> 2] = HEAP32[i233 - 8 >> 2];
       __ZN7WebCore5XPath8Function6createERKN3WTF6StringE(i47, i46);
       i272 = HEAP32[i189 >> 2] | 0;
       i247 = i272;
       HEAP32[i189 >> 2] = 0;
       i266 = (i272 | 0) == 0;
       i272 = HEAP32[i188 >> 2] | 0;
       do {
        if ((i272 | 0) != 0) {
         i267 = i272 | 0;
         i269 = (HEAP32[i267 >> 2] | 0) - 2 | 0;
         if ((i269 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i272);
          break;
         } else {
          HEAP32[i267 >> 2] = i269;
          break;
         }
        }
       } while (0);
       if (i266) {
        i239 = i252;
        i240 = i250;
        i241 = i233;
        i242 = i235;
        i243 = i236;
        i244 = i253;
        i245 = 1;
        i246 = 583;
        break L1;
       } else {
        i265 = i247;
       }
       break;
      }
     case 38:
      {
       HEAP32[i190 >> 2] = HEAP32[i233 - 12 >> 2];
       i272 = HEAP32[i233 - 4 >> 2] | 0;
       HEAP32[i191 >> 2] = 0;
       HEAP32[i192 >> 2] = 0;
       HEAP32[i193 >> 2] = 0;
       i273 = i272 + 8 | 0;
       HEAP32[i193 >> 2] = HEAP32[i273 >> 2];
       HEAP32[i273 >> 2] = 0;
       i269 = i272 | 0;
       i267 = HEAP32[i191 >> 2] | 0;
       HEAP32[i191 >> 2] = HEAP32[i269 >> 2];
       HEAP32[i269 >> 2] = i267;
       i267 = i272 + 4 | 0;
       i274 = HEAP32[i192 >> 2] | 0;
       HEAP32[i192 >> 2] = HEAP32[i267 >> 2];
       HEAP32[i267 >> 2] = i274;
       __ZN7WebCore5XPath8Function6createERKN3WTF6StringENS2_6VectorINSt3__110unique_ptrINS0_10ExpressionENS7_14default_deleteIS9_EEEELj0ENS2_15CrashOnOverflowEEE(i49, i48, i50);
       i274 = HEAP32[i194 >> 2] | 0;
       i275 = i274;
       HEAP32[i194 >> 2] = 0;
       i271 = HEAP32[i193 >> 2] | 0;
       if ((i271 | 0) != 0) {
        i283 = HEAP32[i191 >> 2] | 0;
        i270 = i283 + (i271 << 2) | 0;
        i271 = i283;
        while (1) {
         i283 = i271 | 0;
         i268 = HEAP32[i283 >> 2] | 0;
         HEAP32[i283 >> 2] = 0;
         if ((i268 | 0) != 0) {
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i268 >> 2] | 0) + 4 >> 2] & 1](i268);
         }
         i271 = i271 + 4 | 0;
         if ((i271 | 0) == (i270 | 0)) {
          break;
         }
        }
        HEAP32[i193 >> 2] = 0;
       }
       i270 = HEAP32[i191 >> 2] | 0;
       if ((i270 | 0) != 0) {
        HEAP32[i191 >> 2] = 0;
        HEAP32[i192 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i270);
       }
       i270 = (i274 | 0) == 0;
       if ((i272 | 0) != 0) {
        i271 = HEAP32[i273 >> 2] | 0;
        if ((i271 | 0) != 0) {
         i247 = HEAP32[i269 >> 2] | 0;
         i266 = i247 + (i271 << 2) | 0;
         i271 = i247;
         while (1) {
          i247 = i271 | 0;
          i268 = HEAP32[i247 >> 2] | 0;
          HEAP32[i247 >> 2] = 0;
          if ((i268 | 0) != 0) {
           FUNCTION_TABLE_vi[HEAP32[(HEAP32[i268 >> 2] | 0) + 4 >> 2] & 1](i268);
          }
          i271 = i271 + 4 | 0;
          if ((i271 | 0) == (i266 | 0)) {
           break;
          }
         }
         HEAP32[i273 >> 2] = 0;
        }
        i266 = HEAP32[i269 >> 2] | 0;
        if ((i266 | 0) != 0) {
         HEAP32[i269 >> 2] = 0;
         HEAP32[i267 >> 2] = 0;
         __ZN3WTF8fastFreeEPv(i266);
        }
        __ZN3WTF8fastFreeEPv(i272);
       }
       i266 = HEAP32[i190 >> 2] | 0;
       do {
        if ((i266 | 0) != 0) {
         i271 = i266 | 0;
         i274 = (HEAP32[i271 >> 2] | 0) - 2 | 0;
         if ((i274 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i266);
          break;
         } else {
          HEAP32[i271 >> 2] = i274;
          break;
         }
        }
       } while (0);
       if (i270) {
        i239 = i252;
        i240 = i250;
        i241 = i233;
        i242 = i235;
        i243 = i236;
        i244 = i253;
        i245 = 1;
        i246 = 583;
        break L1;
       } else {
        i265 = i275;
       }
       break;
      }
     case 39:
      {
       i266 = __ZN3WTF10fastMallocEj(12) | 0;
       i272 = i266;
       HEAP32[i272 >> 2] = 0;
       i267 = i266 + 4 | 0;
       HEAP32[i267 >> 2] = 0;
       i269 = i266 + 8 | 0;
       HEAP32[i269 >> 2] = 0;
       i273 = i266;
       i274 = HEAP32[i233 >> 2] | 0;
       HEAP32[i195 >> 2] = i274;
       i271 = HEAP32[i269 >> 2] | 0;
       if ((i271 | 0) == (HEAP32[i267 >> 2] | 0)) {
        __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath10ExpressionENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS8_EEvOT_(i266, i51);
       } else {
        i266 = HEAP32[i272 >> 2] | 0;
        HEAP32[i195 >> 2] = 0;
        HEAP32[i266 + (i271 << 2) >> 2] = i274;
        HEAP32[i269 >> 2] = (HEAP32[i269 >> 2] | 0) + 1;
       }
       i269 = HEAP32[i195 >> 2] | 0;
       HEAP32[i195 >> 2] = 0;
       if ((i269 | 0) == 0) {
        i265 = i273;
        break L27;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i269 >> 2] | 0) + 4 >> 2] & 1](i269);
       i265 = i273;
       break;
      }
     case 40:
      {
       i273 = HEAP32[i233 - 8 >> 2] | 0;
       i269 = i273;
       i274 = HEAP32[i233 >> 2] | 0;
       HEAP32[i196 >> 2] = i274;
       i271 = i273 + 8 | 0;
       i266 = HEAP32[i271 >> 2] | 0;
       if ((i266 | 0) == (HEAP32[i273 + 4 >> 2] | 0)) {
        __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath10ExpressionENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS8_EEvOT_(i273, i52);
       } else {
        i272 = HEAP32[i273 >> 2] | 0;
        HEAP32[i196 >> 2] = 0;
        HEAP32[i272 + (i266 << 2) >> 2] = i274;
        HEAP32[i271 >> 2] = (HEAP32[i271 >> 2] | 0) + 1;
       }
       i271 = HEAP32[i196 >> 2] | 0;
       HEAP32[i196 >> 2] = 0;
       if ((i271 | 0) == 0) {
        i265 = i269;
        break L27;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i271 >> 2] | 0) + 4 >> 2] & 1](i271);
       i265 = i269;
       break;
      }
     case 43:
      {
       i269 = __ZN3WTF10fastMallocEj(20) | 0;
       HEAP32[i197 >> 2] = HEAP32[i233 - 8 >> 2];
       HEAP32[i198 >> 2] = HEAP32[i233 >> 2];
       __ZN7WebCore5XPath5UnionC1ENSt3__110unique_ptrINS0_10ExpressionENS2_14default_deleteIS4_EEEES7_(i269, i53, i54);
       i271 = i269;
       i269 = HEAP32[i198 >> 2] | 0;
       HEAP32[i198 >> 2] = 0;
       if ((i269 | 0) != 0) {
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i269 >> 2] | 0) + 4 >> 2] & 1](i269);
       }
       i269 = HEAP32[i197 >> 2] | 0;
       HEAP32[i197 >> 2] = 0;
       if ((i269 | 0) == 0) {
        i265 = i271;
        break L27;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i269 >> 2] | 0) + 4 >> 2] & 1](i269);
       i265 = i271;
       break;
      }
     case 44:
      {
       i265 = HEAP32[i233 >> 2] | 0;
       break;
      }
     case 46:
      {
       i271 = i233;
       i269 = HEAP32[i271 >> 2] | 0;
       HEAP8[i269 + 32 | 0] = 1;
       HEAP8[i269 + 16 | 0] = 0;
       i269 = __ZN3WTF10fastMallocEj(28) | 0;
       HEAP32[i199 >> 2] = HEAP32[i233 - 8 >> 2];
       HEAP32[i200 >> 2] = HEAP32[i271 >> 2];
       __ZN7WebCore5XPath4PathC1ENSt3__110unique_ptrINS0_10ExpressionENS2_14default_deleteIS4_EEEENS3_INS0_12LocationPathENS5_IS8_EEEE(i269, i55, i56);
       i271 = i269;
       i269 = HEAP32[i200 >> 2] | 0;
       HEAP32[i200 >> 2] = 0;
       if ((i269 | 0) != 0) {
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i269 >> 2] | 0) + 4 >> 2] & 1](i269);
       }
       i269 = HEAP32[i199 >> 2] | 0;
       HEAP32[i199 >> 2] = 0;
       if ((i269 | 0) == 0) {
        i265 = i271;
        break L27;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i269 >> 2] | 0) + 4 >> 2] & 1](i269);
       i265 = i271;
       break;
      }
     case 47:
      {
       i271 = i233;
       i269 = HEAP32[i271 >> 2] | 0;
       HEAP32[i201 >> 2] = HEAP32[i233 - 4 >> 2];
       __ZN7WebCore5XPath12LocationPath11prependStepENSt3__110unique_ptrINS0_4StepENS2_14default_deleteIS4_EEEE(i269, i57);
       i269 = HEAP32[i201 >> 2] | 0;
       HEAP32[i201 >> 2] = 0;
       if ((i269 | 0) != 0) {
        __ZN7WebCore5XPath4StepD1Ev(i269);
        __ZN3WTF8fastFreeEPv(i269);
       }
       i269 = HEAP32[i271 >> 2] | 0;
       HEAP8[i269 + 32 | 0] = 1;
       HEAP8[i269 + 16 | 0] = 0;
       i269 = __ZN3WTF10fastMallocEj(28) | 0;
       HEAP32[i202 >> 2] = HEAP32[i233 - 8 >> 2];
       HEAP32[i203 >> 2] = HEAP32[i271 >> 2];
       __ZN7WebCore5XPath4PathC1ENSt3__110unique_ptrINS0_10ExpressionENS2_14default_deleteIS4_EEEENS3_INS0_12LocationPathENS5_IS8_EEEE(i269, i58, i59);
       i271 = i269;
       i269 = HEAP32[i203 >> 2] | 0;
       HEAP32[i203 >> 2] = 0;
       if ((i269 | 0) != 0) {
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i269 >> 2] | 0) + 4 >> 2] & 1](i269);
       }
       i269 = HEAP32[i202 >> 2] | 0;
       HEAP32[i202 >> 2] = 0;
       if ((i269 | 0) == 0) {
        i265 = i271;
        break L27;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i269 >> 2] | 0) + 4 >> 2] & 1](i269);
       i265 = i271;
       break;
      }
     case 49:
      {
       i271 = HEAP32[i233 >> 2] | 0;
       i269 = __ZN3WTF10fastMallocEj(36) | 0;
       HEAP32[i204 >> 2] = HEAP32[i233 - 4 >> 2];
       HEAP32[i205 >> 2] = 0;
       HEAP32[i206 >> 2] = 0;
       HEAP32[i207 >> 2] = 0;
       i274 = i271 + 8 | 0;
       HEAP32[i207 >> 2] = HEAP32[i274 >> 2];
       HEAP32[i274 >> 2] = 0;
       i266 = i271 | 0;
       i272 = HEAP32[i205 >> 2] | 0;
       HEAP32[i205 >> 2] = HEAP32[i266 >> 2];
       HEAP32[i266 >> 2] = i272;
       i272 = i271 + 4 | 0;
       i273 = HEAP32[i206 >> 2] | 0;
       HEAP32[i206 >> 2] = HEAP32[i272 >> 2];
       HEAP32[i272 >> 2] = i273;
       __ZN7WebCore5XPath6FilterC1ENSt3__110unique_ptrINS0_10ExpressionENS2_14default_deleteIS4_EEEEN3WTF6VectorIS7_Lj0ENS8_15CrashOnOverflowEEE(i269, i60, i61);
       i273 = i269;
       i269 = HEAP32[i207 >> 2] | 0;
       if ((i269 | 0) != 0) {
        i267 = HEAP32[i205 >> 2] | 0;
        i268 = i267 + (i269 << 2) | 0;
        i269 = i267;
        while (1) {
         i267 = i269 | 0;
         i247 = HEAP32[i267 >> 2] | 0;
         HEAP32[i267 >> 2] = 0;
         if ((i247 | 0) != 0) {
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i247 >> 2] | 0) + 4 >> 2] & 1](i247);
         }
         i269 = i269 + 4 | 0;
         if ((i269 | 0) == (i268 | 0)) {
          break;
         }
        }
        HEAP32[i207 >> 2] = 0;
       }
       i268 = HEAP32[i205 >> 2] | 0;
       if ((i268 | 0) != 0) {
        HEAP32[i205 >> 2] = 0;
        HEAP32[i206 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i268);
       }
       i268 = HEAP32[i204 >> 2] | 0;
       HEAP32[i204 >> 2] = 0;
       if ((i268 | 0) != 0) {
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i268 >> 2] | 0) + 4 >> 2] & 1](i268);
       }
       if ((i271 | 0) == 0) {
        i265 = i273;
        break L27;
       }
       i268 = HEAP32[i274 >> 2] | 0;
       if ((i268 | 0) != 0) {
        i269 = HEAP32[i266 >> 2] | 0;
        i275 = i269 + (i268 << 2) | 0;
        i268 = i269;
        while (1) {
         i269 = i268 | 0;
         i270 = HEAP32[i269 >> 2] | 0;
         HEAP32[i269 >> 2] = 0;
         if ((i270 | 0) != 0) {
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i270 >> 2] | 0) + 4 >> 2] & 1](i270);
         }
         i268 = i268 + 4 | 0;
         if ((i268 | 0) == (i275 | 0)) {
          break;
         }
        }
        HEAP32[i274 >> 2] = 0;
       }
       i275 = HEAP32[i266 >> 2] | 0;
       if ((i275 | 0) != 0) {
        HEAP32[i266 >> 2] = 0;
        HEAP32[i272 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i275);
       }
       __ZN3WTF8fastFreeEPv(i271);
       i265 = i273;
       break;
      }
     case 51:
      {
       i275 = __ZN3WTF10fastMallocEj(24) | 0;
       HEAP32[i208 >> 2] = HEAP32[i233 - 8 >> 2];
       HEAP32[i209 >> 2] = HEAP32[i233 >> 2];
       __ZN7WebCore5XPath9LogicalOpC1ENS1_6OpcodeENSt3__110unique_ptrINS0_10ExpressionENS3_14default_deleteIS5_EEEES8_(i275, 1, i62, i63);
       i268 = i275;
       i275 = HEAP32[i209 >> 2] | 0;
       HEAP32[i209 >> 2] = 0;
       if ((i275 | 0) != 0) {
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i275 >> 2] | 0) + 4 >> 2] & 1](i275);
       }
       i275 = HEAP32[i208 >> 2] | 0;
       HEAP32[i208 >> 2] = 0;
       if ((i275 | 0) == 0) {
        i265 = i268;
        break L27;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i275 >> 2] | 0) + 4 >> 2] & 1](i275);
       i265 = i268;
       break;
      }
     case 53:
      {
       i268 = __ZN3WTF10fastMallocEj(24) | 0;
       HEAP32[i210 >> 2] = HEAP32[i233 - 8 >> 2];
       HEAP32[i211 >> 2] = HEAP32[i233 >> 2];
       __ZN7WebCore5XPath9LogicalOpC1ENS1_6OpcodeENSt3__110unique_ptrINS0_10ExpressionENS3_14default_deleteIS5_EEEES8_(i268, 0, i64, i65);
       i275 = i268;
       i268 = HEAP32[i211 >> 2] | 0;
       HEAP32[i211 >> 2] = 0;
       if ((i268 | 0) != 0) {
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i268 >> 2] | 0) + 4 >> 2] & 1](i268);
       }
       i268 = HEAP32[i210 >> 2] | 0;
       HEAP32[i210 >> 2] = 0;
       if ((i268 | 0) == 0) {
        i265 = i275;
        break L27;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i268 >> 2] | 0) + 4 >> 2] & 1](i268);
       i265 = i275;
       break;
      }
     case 55:
      {
       i275 = __ZN3WTF10fastMallocEj(24) | 0;
       i268 = HEAP32[i233 - 4 >> 2] | 0;
       HEAP32[i212 >> 2] = HEAP32[i233 - 8 >> 2];
       HEAP32[i213 >> 2] = HEAP32[i233 >> 2];
       __ZN7WebCore5XPath8EqTestOpC1ENS1_6OpcodeENSt3__110unique_ptrINS0_10ExpressionENS3_14default_deleteIS5_EEEES8_(i275, i268, i66, i67);
       i268 = i275;
       i275 = HEAP32[i213 >> 2] | 0;
       HEAP32[i213 >> 2] = 0;
       if ((i275 | 0) != 0) {
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i275 >> 2] | 0) + 4 >> 2] & 1](i275);
       }
       i275 = HEAP32[i212 >> 2] | 0;
       HEAP32[i212 >> 2] = 0;
       if ((i275 | 0) == 0) {
        i265 = i268;
        break L27;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i275 >> 2] | 0) + 4 >> 2] & 1](i275);
       i265 = i268;
       break;
      }
     case 57:
      {
       i268 = __ZN3WTF10fastMallocEj(24) | 0;
       i275 = HEAP32[i233 - 4 >> 2] | 0;
       HEAP32[i214 >> 2] = HEAP32[i233 - 8 >> 2];
       HEAP32[i215 >> 2] = HEAP32[i233 >> 2];
       __ZN7WebCore5XPath8EqTestOpC1ENS1_6OpcodeENSt3__110unique_ptrINS0_10ExpressionENS3_14default_deleteIS5_EEEES8_(i268, i275, i68, i69);
       i275 = i268;
       i268 = HEAP32[i215 >> 2] | 0;
       HEAP32[i215 >> 2] = 0;
       if ((i268 | 0) != 0) {
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i268 >> 2] | 0) + 4 >> 2] & 1](i268);
       }
       i268 = HEAP32[i214 >> 2] | 0;
       HEAP32[i214 >> 2] = 0;
       if ((i268 | 0) == 0) {
        i265 = i275;
        break L27;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i268 >> 2] | 0) + 4 >> 2] & 1](i268);
       i265 = i275;
       break;
      }
     case 59:
      {
       i275 = __ZN3WTF10fastMallocEj(24) | 0;
       HEAP32[i216 >> 2] = HEAP32[i233 - 8 >> 2];
       HEAP32[i217 >> 2] = HEAP32[i233 >> 2];
       __ZN7WebCore5XPath9NumericOpC1ENS1_6OpcodeENSt3__110unique_ptrINS0_10ExpressionENS3_14default_deleteIS5_EEEES8_(i275, 0, i70, i71);
       i268 = i275;
       i275 = HEAP32[i217 >> 2] | 0;
       HEAP32[i217 >> 2] = 0;
       if ((i275 | 0) != 0) {
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i275 >> 2] | 0) + 4 >> 2] & 1](i275);
       }
       i275 = HEAP32[i216 >> 2] | 0;
       HEAP32[i216 >> 2] = 0;
       if ((i275 | 0) == 0) {
        i265 = i268;
        break L27;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i275 >> 2] | 0) + 4 >> 2] & 1](i275);
       i265 = i268;
       break;
      }
     case 60:
      {
       i268 = __ZN3WTF10fastMallocEj(24) | 0;
       HEAP32[i218 >> 2] = HEAP32[i233 - 8 >> 2];
       HEAP32[i219 >> 2] = HEAP32[i233 >> 2];
       __ZN7WebCore5XPath9NumericOpC1ENS1_6OpcodeENSt3__110unique_ptrINS0_10ExpressionENS3_14default_deleteIS5_EEEES8_(i268, 1, i72, i73);
       i275 = i268;
       i268 = HEAP32[i219 >> 2] | 0;
       HEAP32[i219 >> 2] = 0;
       if ((i268 | 0) != 0) {
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i268 >> 2] | 0) + 4 >> 2] & 1](i268);
       }
       i268 = HEAP32[i218 >> 2] | 0;
       HEAP32[i218 >> 2] = 0;
       if ((i268 | 0) == 0) {
        i265 = i275;
        break L27;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i268 >> 2] | 0) + 4 >> 2] & 1](i268);
       i265 = i275;
       break;
      }
     case 62:
      {
       i275 = __ZN3WTF10fastMallocEj(24) | 0;
       i268 = HEAP32[i233 - 4 >> 2] | 0;
       HEAP32[i220 >> 2] = HEAP32[i233 - 8 >> 2];
       HEAP32[i221 >> 2] = HEAP32[i233 >> 2];
       __ZN7WebCore5XPath9NumericOpC1ENS1_6OpcodeENSt3__110unique_ptrINS0_10ExpressionENS3_14default_deleteIS5_EEEES8_(i275, i268, i74, i75);
       i268 = i275;
       i275 = HEAP32[i221 >> 2] | 0;
       HEAP32[i221 >> 2] = 0;
       if ((i275 | 0) != 0) {
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i275 >> 2] | 0) + 4 >> 2] & 1](i275);
       }
       i275 = HEAP32[i220 >> 2] | 0;
       HEAP32[i220 >> 2] = 0;
       if ((i275 | 0) == 0) {
        i265 = i268;
        break L27;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i275 >> 2] | 0) + 4 >> 2] & 1](i275);
       i265 = i268;
       break;
      }
     case 64:
      {
       i268 = __ZN3WTF10fastMallocEj(20) | 0;
       HEAP32[i222 >> 2] = HEAP32[i233 >> 2];
       __ZN7WebCore5XPath8NegativeC1ENSt3__110unique_ptrINS0_10ExpressionENS2_14default_deleteIS4_EEEE(i268, i76);
       i275 = i268;
       i268 = HEAP32[i222 >> 2] | 0;
       HEAP32[i222 >> 2] = 0;
       if ((i268 | 0) == 0) {
        i265 = i275;
        break L27;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i268 >> 2] | 0) + 4 >> 2] & 1](i268);
       i265 = i275;
       break;
      }
     default:
      {
       i265 = i237;
      }
     }
    } while (0);
    i237 = i235 + (-i250 << 1) | 0;
    i275 = i233 + (i251 << 2) | 0;
    HEAP32[i248 >> 2] = i265;
    i268 = (HEAPU8[H_BASE + 824 + i238 | 0] | 0) - 33 | 0;
    i270 = HEAP16[i237 >> 1] | 0;
    i269 = i270 + (HEAP8[H_BASE + 376 + i268 | 0] | 0) | 0;
    do {
     if (i269 >>> 0 < 133 >>> 0) {
      if ((HEAP8[H_BASE + 408 + i269 | 0] | 0) != (i270 | 0)) {
       break;
      }
      i259 = i252;
      i260 = HEAPU8[H_BASE + 240 + i269 | 0] | 0;
      i261 = i275;
      i262 = i237;
      i263 = i253;
      i264 = i231;
      break L24;
     }
    } while (0);
    i259 = i252;
    i260 = HEAP8[H_BASE + 104 + i268 | 0] | 0;
    i261 = i275;
    i262 = i237;
    i263 = i253;
    i264 = i231;
   }
  } while (0);
  if ((i246 | 0) == 574) {
   i246 = 0;
   do {
    if ((i231 | 0) == 3) {
     if ((i257 | 0) < 1) {
      if ((i257 | 0) == 0) {
       i294 = 1;
       i295 = i236;
       i296 = i235;
       i297 = i233;
       i298 = 0;
       break L1;
      } else {
       i299 = i257;
       break;
      }
     } else {
      __ZL10yydestructPKciP7YYSTYPERN7WebCore5XPath6ParserE(H_BASE + 80 | 0, i258, i12);
      i299 = -2;
      break;
     }
    } else {
     i299 = i257;
    }
   } while (0);
   i269 = i225;
   i270 = i233;
   i238 = i235;
   i248 = i249;
   while (1) {
    if (i248 << 24 >> 24 == -1) {
     break;
    }
    if ((i238 | 0) == (i236 | 0)) {
     i239 = i299;
     i240 = 0;
     i241 = i270;
     i242 = i236;
     i243 = i236;
     i244 = i258;
     i245 = 1;
     i246 = 583;
     break L1;
    }
    __ZL10yydestructPKciP7YYSTYPERN7WebCore5XPath6ParserE(H_BASE + 64 | 0, HEAPU8[H_BASE + 544 + i269 | 0] | 0, i270);
    i251 = i238 - 2 | 0;
    i250 = HEAP16[i251 >> 1] | 0;
    i269 = i250;
    i270 = i270 - 4 | 0;
    i238 = i251;
    i248 = HEAP8[H_BASE + 648 + i250 | 0] | 0;
   }
   i248 = i270 + 4 | 0;
   HEAP32[i248 >> 2] = HEAP32[i223 >> 2];
   i259 = i299;
   i260 = 40;
   i261 = i248;
   i262 = i238;
   i263 = i258;
   i264 = 3;
  }
  i224 = i259;
  i225 = i260;
  i226 = i232;
  i227 = i261;
  i228 = i234;
  i78 = i262 + 2 | 0;
  i229 = i236;
  i230 = i263;
  i231 = i264;
 }
 do {
  if ((i246 | 0) == 583) {
   if ((i239 | 0) == (-2 | 0) | (i239 | 0) == 0) {
    i294 = i245;
    i295 = i243;
    i296 = i242;
    i297 = i241;
    i298 = i240;
    break;
   }
   __ZL10yydestructPKciP7YYSTYPERN7WebCore5XPath6ParserE(H_BASE + 32 | 0, i244, i12);
   i294 = i245;
   i295 = i243;
   i296 = i242;
   i297 = i241;
   i298 = i240;
  }
 } while (0);
 i240 = -i298 | 0;
 i298 = i296 + (i240 << 1) | 0;
 if ((i298 | 0) != (i295 | 0)) {
  i296 = i298;
  i298 = i297 + (i240 << 2) | 0;
  while (1) {
   __ZL10yydestructPKciP7YYSTYPERN7WebCore5XPath6ParserE(H_BASE + 8 | 0, HEAPU8[(HEAP16[i296 >> 1] | 0) + (H_BASE + 544) | 0] | 0, i298);
   i240 = i296 - 2 | 0;
   if ((i240 | 0) == (i295 | 0)) {
    break;
   } else {
    i296 = i240;
    i298 = i298 - 4 | 0;
   }
  }
 }
 if ((i295 | 0) == (i77 | 0)) {
  STACKTOP = i2;
  return i294 | 0;
 }
 __ZN3WTF8fastFreeEPv(i295);
 STACKTOP = i2;
 return i294 | 0;
}
function __ZL10yydestructPKciP7YYSTYPERN7WebCore5XPath6ParserE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 switch (i2 | 0) {
 case 10:
  {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   i1 = i2 | 0;
   i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    return;
   } else {
    HEAP32[i1 >> 2] = i4;
    return;
   }
   break;
  }
 case 11:
  {
   i4 = HEAP32[i3 >> 2] | 0;
   if ((i4 | 0) == 0) {
    return;
   }
   i1 = i4 | 0;
   i2 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    return;
   } else {
    HEAP32[i1 >> 2] = i2;
    return;
   }
   break;
  }
 case 12:
  {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   i1 = i2 | 0;
   i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    return;
   } else {
    HEAP32[i1 >> 2] = i4;
    return;
   }
   break;
  }
 case 13:
  {
   i4 = HEAP32[i3 >> 2] | 0;
   if ((i4 | 0) == 0) {
    return;
   }
   i1 = i4 | 0;
   i2 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    return;
   } else {
    HEAP32[i1 >> 2] = i2;
    return;
   }
   break;
  }
 case 14:
  {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   i1 = i2 | 0;
   i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    return;
   } else {
    HEAP32[i1 >> 2] = i4;
    return;
   }
   break;
  }
 case 15:
  {
   i4 = HEAP32[i3 >> 2] | 0;
   if ((i4 | 0) == 0) {
    return;
   }
   i1 = i4 | 0;
   i2 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    return;
   } else {
    HEAP32[i1 >> 2] = i2;
    return;
   }
   break;
  }
 case 35:
  {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
   return;
  }
 case 36:
  {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
   return;
  }
 case 37:
  {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
   return;
  }
 case 38:
  {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
   return;
  }
 case 39:
  {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   __ZN7WebCore5XPath4StepD1Ev(i2);
   __ZN3WTF8fastFreeEPv(i2);
   return;
  }
 case 41:
  {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   __ZN7WebCore5XPath4Step8NodeTestD2Ev(i2);
   __ZN3WTF8fastFreeEPv(i2);
   return;
  }
 case 42:
  {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   i1 = i2 + 8 | 0;
   i4 = HEAP32[i1 >> 2] | 0;
   i5 = i2 | 0;
   if ((i4 | 0) != 0) {
    i6 = HEAP32[i5 >> 2] | 0;
    i7 = i6 + (i4 << 2) | 0;
    i4 = i6;
    while (1) {
     i6 = i4 | 0;
     i8 = HEAP32[i6 >> 2] | 0;
     HEAP32[i6 >> 2] = 0;
     if ((i8 | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 1](i8);
     }
     i4 = i4 + 4 | 0;
     if ((i4 | 0) == (i7 | 0)) {
      break;
     }
    }
    HEAP32[i1 >> 2] = 0;
   }
   i1 = HEAP32[i5 >> 2] | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i5 >> 2] = 0;
    HEAP32[i2 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i1);
   }
   __ZN3WTF8fastFreeEPv(i2);
   return;
  }
 case 43:
  {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   i1 = i2 + 8 | 0;
   i5 = HEAP32[i1 >> 2] | 0;
   i7 = i2 | 0;
   if ((i5 | 0) != 0) {
    i4 = HEAP32[i7 >> 2] | 0;
    i8 = i4 + (i5 << 2) | 0;
    i5 = i4;
    while (1) {
     i4 = i5 | 0;
     i6 = HEAP32[i4 >> 2] | 0;
     HEAP32[i4 >> 2] = 0;
     if ((i6 | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
     }
     i5 = i5 + 4 | 0;
     if ((i5 | 0) == (i8 | 0)) {
      break;
     }
    }
    HEAP32[i1 >> 2] = 0;
   }
   i1 = HEAP32[i7 >> 2] | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i7 >> 2] = 0;
    HEAP32[i2 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i1);
   }
   __ZN3WTF8fastFreeEPv(i2);
   return;
  }
 case 44:
  {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
   return;
  }
 case 45:
  {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   __ZN7WebCore5XPath4StepD1Ev(i2);
   __ZN3WTF8fastFreeEPv(i2);
   return;
  }
 case 46:
  {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   __ZN7WebCore5XPath4StepD1Ev(i2);
   __ZN3WTF8fastFreeEPv(i2);
   return;
  }
 case 47:
  {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
   return;
  }
 case 48:
  {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
   return;
  }
 case 49:
  {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   i1 = i2 + 8 | 0;
   i7 = HEAP32[i1 >> 2] | 0;
   i8 = i2 | 0;
   if ((i7 | 0) != 0) {
    i5 = HEAP32[i8 >> 2] | 0;
    i6 = i5 + (i7 << 2) | 0;
    i7 = i5;
    while (1) {
     i5 = i7 | 0;
     i4 = HEAP32[i5 >> 2] | 0;
     HEAP32[i5 >> 2] = 0;
     if ((i4 | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
     }
     i7 = i7 + 4 | 0;
     if ((i7 | 0) == (i6 | 0)) {
      break;
     }
    }
    HEAP32[i1 >> 2] = 0;
   }
   i1 = HEAP32[i8 >> 2] | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i8 >> 2] = 0;
    HEAP32[i2 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i1);
   }
   __ZN3WTF8fastFreeEPv(i2);
   return;
  }
 case 50:
  {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
   return;
  }
 case 51:
  {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
   return;
  }
 case 52:
  {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
   return;
  }
 case 53:
  {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
   return;
  }
 case 54:
  {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
   return;
  }
 case 55:
  {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
   return;
  }
 case 56:
  {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
   return;
  }
 case 57:
  {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
   return;
  }
 case 58:
  {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
   return;
  }
 case 59:
  {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
   return;
  }
 case 60:
  {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
   return;
  }
 default:
  {
   return;
  }
 }
}
function __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath10ExpressionENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS8_EEvOT_(i1, i2) {
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
   __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath10ExpressionENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
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
 __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath10ExpressionENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i7 >>> 0 > i5 >>> 0 ? i7 : i5);
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
function __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath10ExpressionENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i5;
 i7 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i7 << 2) | 0;
 if (i2 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i8 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
 HEAP32[i3 >> 2] = i8 >>> 2;
 i2 = __ZN3WTF10fastMallocEj(i8) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i7 | 0) != 0) {
  i7 = i5;
  i8 = i2;
  while (1) {
   i2 = i7 | 0;
   i9 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i8 >> 2] = i9;
   i9 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   if ((i9 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
   }
   i9 = i7 + 4 | 0;
   if ((i9 | 0) == (i1 | 0)) {
    break;
   } else {
    i7 = i9;
    i8 = i8 + 4 | 0;
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
 __ZN3WTF8fastFreeEPv(i6);
 return;
}
function __ZN7WebCore5XPath4Step8NodeTestD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 20 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 12 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 1](i7);
   }
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
  HEAP32[i1 + 16 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i6;
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
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
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
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZL10yydestructPKciP7YYSTYPERN7WebCore5XPath6ParserE","_strlen","__ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath10ExpressionENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","_memset","_memcpy","__ZN7WebCore5XPath4Step8NodeTestD2Ev","__Z12xpathyyparseRN7WebCore5XPath6ParserE","__ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath10ExpressionENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS8_EEvOT_"]

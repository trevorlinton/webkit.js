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
H_BASE = parentModule["_malloc"](120 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 120;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore13HTMLTokenizerC1ERKNS_17HTMLParserOptionsE;
var __ZN7WebCore13HTMLTokenizerD1Ev;
/* memory initializer */ allocate([115,121,115,116,101,109,0,0,112,117,98,108,105,99,0,0,91,67,68,65,84,65,91,0,100,111,99,116,121,112,101,0,45,45,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore9HTMLNames9scriptTagE=env.__ZN7WebCore9HTMLNames9scriptTagE|0;
  var __ZN7WebCore9HTMLNames11noscriptTagE=env.__ZN7WebCore9HTMLNames11noscriptTagE|0;
  var __ZN7WebCore9HTMLNames12plaintextTagE=env.__ZN7WebCore9HTMLNames12plaintextTagE|0;
  var __ZN7WebCore9HTMLNames9iframeTagE=env.__ZN7WebCore9HTMLNames9iframeTagE|0;
  var __ZN7WebCore9HTMLNames8titleTagE=env.__ZN7WebCore9HTMLNames8titleTagE|0;
  var __ZN7WebCore9HTMLNames11noframesTagE=env.__ZN7WebCore9HTMLNames11noframesTagE|0;
  var __ZN7WebCore9HTMLNames11textareaTagE=env.__ZN7WebCore9HTMLNames11textareaTagE|0;
  var __ZN7WebCore9HTMLNames10noembedTagE=env.__ZN7WebCore9HTMLNames10noembedTagE|0;
  var __ZN7WebCore9HTMLNames8styleTagE=env.__ZN7WebCore9HTMLNames8styleTagE|0;
  var __ZN7WebCore9HTMLNames6xmpTagE=env.__ZN7WebCore9HTMLNames6xmpTagE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
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
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore13HTMLTokenizer9nextTokenERNS_15SegmentedStringERNS_9HTMLTokenE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0, i112 = 0, i113 = 0, i114 = 0, i115 = 0, i116 = 0, i117 = 0, i118 = 0, i119 = 0, i120 = 0, i121 = 0, i122 = 0, i123 = 0, i124 = 0, i125 = 0, i126 = 0, i127 = 0, i128 = 0, i129 = 0, i130 = 0, i131 = 0, i132 = 0, i133 = 0, i134 = 0, i135 = 0, i136 = 0, i137 = 0, i138 = 0, i139 = 0, i140 = 0, i141 = 0, i142 = 0, i143 = 0, i144 = 0, i145 = 0, i146 = 0, i147 = 0, i148 = 0, i149 = 0, i150 = 0, i151 = 0, i152 = 0, i153 = 0, i154 = 0, i155 = 0, i156 = 0, i157 = 0, i158 = 0, i159 = 0, i160 = 0, i161 = 0, i162 = 0, i163 = 0, i164 = 0, i165 = 0, i166 = 0, i167 = 0, i168 = 0, i169 = 0, i170 = 0, i171 = 0, i172 = 0, i173 = 0, i174 = 0, i175 = 0, i176 = 0, i177 = 0, i178 = 0, i179 = 0, i180 = 0, i181 = 0, i182 = 0, i183 = 0, i184 = 0, i185 = 0, i186 = 0, i187 = 0, i188 = 0, i189 = 0, i190 = 0, i191 = 0, i192 = 0, i193 = 0, i194 = 0, i195 = 0, i196 = 0, i197 = 0, i198 = 0, i199 = 0, i200 = 0, i201 = 0, i202 = 0, i203 = 0, i204 = 0, i205 = 0, i206 = 0, i207 = 0, i208 = 0, i209 = 0, i210 = 0, i211 = 0, i212 = 0, i213 = 0, i214 = 0, i215 = 0, i216 = 0, i217 = 0, i218 = 0, i219 = 0, i220 = 0, i221 = 0, i222 = 0, i223 = 0, i224 = 0, i225 = 0, i226 = 0, i227 = 0, i228 = 0, i229 = 0, i230 = 0, i231 = 0, i232 = 0, i233 = 0, i234 = 0, i235 = 0, i236 = 0, i237 = 0, i238 = 0, i239 = 0, i240 = 0, i241 = 0, i242 = 0, i243 = 0, i244 = 0, i245 = 0, i246 = 0, i247 = 0, i248 = 0, i249 = 0, i250 = 0, i251 = 0, i252 = 0, i253 = 0, i254 = 0, i255 = 0, i256 = 0, i257 = 0, i258 = 0, i259 = 0, i260 = 0, i261 = 0, i262 = 0, i263 = 0, i264 = 0, i265 = 0, i266 = 0, i267 = 0, i268 = 0, i269 = 0, i270 = 0, i271 = 0, i272 = 0, i273 = 0, i274 = 0, i275 = 0, i276 = 0, i277 = 0, i278 = 0, i279 = 0, i280 = 0, i281 = 0, i282 = 0, i283 = 0, i284 = 0, i285 = 0, i286 = 0, i287 = 0, i288 = 0, i289 = 0, i290 = 0, i291 = 0, i292 = 0, i293 = 0, i294 = 0, i295 = 0, i296 = 0, i297 = 0, i298 = 0, i299 = 0, i300 = 0, i301 = 0, i302 = 0, i303 = 0, i304 = 0, i305 = 0, i306 = 0, i307 = 0, i308 = 0, i309 = 0, i310 = 0, i311 = 0, i312 = 0, i313 = 0, i314 = 0, i315 = 0, i316 = 0, i317 = 0, i318 = 0, i319 = 0, i320 = 0, i321 = 0, i322 = 0, i323 = 0, i324 = 0, i325 = 0, i326 = 0, i327 = 0, i328 = 0, i329 = 0, i330 = 0, i331 = 0, i332 = 0, i333 = 0, i334 = 0, i335 = 0, i336 = 0, i337 = 0, i338 = 0, i339 = 0, i340 = 0, i341 = 0, i342 = 0, i343 = 0, i344 = 0, i345 = 0, i346 = 0, i347 = 0, i348 = 0, i349 = 0, i350 = 0, i351 = 0, i352 = 0, i353 = 0, i354 = 0, i355 = 0, i356 = 0, i357 = 0, i358 = 0, i359 = 0, i360 = 0, i361 = 0, i362 = 0, i363 = 0, i364 = 0, i365 = 0, i366 = 0, i367 = 0, i368 = 0, i369 = 0, i370 = 0, i371 = 0, i372 = 0, i373 = 0, i374 = 0, i375 = 0, i376 = 0, i377 = 0, i378 = 0, i379 = 0, i380 = 0, i381 = 0, i382 = 0, i383 = 0, i384 = 0, i385 = 0, i386 = 0, i387 = 0, i388 = 0, i389 = 0, i390 = 0, i391 = 0, i392 = 0, i393 = 0, i394 = 0, i395 = 0, i396 = 0, i397 = 0, i398 = 0, i399 = 0, i400 = 0, i401 = 0, i402 = 0, i403 = 0, i404 = 0, i405 = 0, i406 = 0, i407 = 0, i408 = 0, i409 = 0, i410 = 0, i411 = 0, i412 = 0, i413 = 0, i414 = 0, i415 = 0, i416 = 0, i417 = 0, i418 = 0, i419 = 0, i420 = 0, i421 = 0, i422 = 0, i423 = 0, i424 = 0, i425 = 0, i426 = 0, i427 = 0, i428 = 0, i429 = 0, i430 = 0, i431 = 0, i432 = 0, i433 = 0, i434 = 0, i435 = 0, i436 = 0, i437 = 0, i438 = 0, i439 = 0, i440 = 0, i441 = 0, i442 = 0, i443 = 0, i444 = 0, i445 = 0, i446 = 0, i447 = 0, i448 = 0, i449 = 0, i450 = 0, i451 = 0, i452 = 0, i453 = 0, i454 = 0, i455 = 0, i456 = 0, i457 = 0, i458 = 0, i459 = 0, i460 = 0, i461 = 0, i462 = 0, i463 = 0, i464 = 0, i465 = 0, i466 = 0, i467 = 0, i468 = 0, i469 = 0, i470 = 0, i471 = 0, i472 = 0, i473 = 0, i474 = 0, i475 = 0, i476 = 0, i477 = 0, i478 = 0, i479 = 0, i480 = 0, i481 = 0, i482 = 0, i483 = 0, i484 = 0, i485 = 0, i486 = 0, i487 = 0, i488 = 0, i489 = 0, i490 = 0, i491 = 0, i492 = 0, i493 = 0, i494 = 0, i495 = 0, i496 = 0, i497 = 0, i498 = 0, i499 = 0, i500 = 0, i501 = 0, i502 = 0, i503 = 0, i504 = 0, i505 = 0, i506 = 0, i507 = 0, i508 = 0, i509 = 0, i510 = 0, i511 = 0, i512 = 0, i513 = 0, i514 = 0, i515 = 0, i516 = 0, i517 = 0, i518 = 0, i519 = 0, i520 = 0, i521 = 0, i522 = 0, i523 = 0, i524 = 0, i525 = 0, i526 = 0, i527 = 0, i528 = 0, i529 = 0, i530 = 0, i531 = 0, i532 = 0, i533 = 0, i534 = 0, i535 = 0, i536 = 0, i537 = 0, i538 = 0, i539 = 0, i540 = 0, i541 = 0, i542 = 0, i543 = 0, i544 = 0, i545 = 0, i546 = 0, i547 = 0, i548 = 0, i549 = 0, i550 = 0, i551 = 0, i552 = 0, i553 = 0, i554 = 0, i555 = 0, i556 = 0, i557 = 0, i558 = 0, i559 = 0, i560 = 0, i561 = 0, i562 = 0, i563 = 0, i564 = 0, i565 = 0, i566 = 0, i567 = 0, i568 = 0, i569 = 0, i570 = 0, i571 = 0, i572 = 0, i573 = 0, i574 = 0, i575 = 0, i576 = 0, i577 = 0, i578 = 0, i579 = 0, i580 = 0, i581 = 0, i582 = 0, i583 = 0, i584 = 0, i585 = 0, i586 = 0, i587 = 0, i588 = 0, i589 = 0, i590 = 0, i591 = 0, i592 = 0, i593 = 0, i594 = 0, i595 = 0, i596 = 0, i597 = 0, i598 = 0, i599 = 0, i600 = 0, i601 = 0, i602 = 0, i603 = 0, i604 = 0, i605 = 0, i606 = 0, i607 = 0, i608 = 0, i609 = 0, i610 = 0, i611 = 0, i612 = 0, i613 = 0, i614 = 0, i615 = 0, i616 = 0, i617 = 0, i618 = 0, i619 = 0, i620 = 0, i621 = 0, i622 = 0, i623 = 0, i624 = 0, i625 = 0, i626 = 0, i627 = 0, i628 = 0, i629 = 0, i630 = 0, i631 = 0, i632 = 0, i633 = 0, i634 = 0, i635 = 0, i636 = 0, i637 = 0, i638 = 0, i639 = 0, i640 = 0, i641 = 0, i642 = 0, i643 = 0, i644 = 0, i645 = 0, i646 = 0, i647 = 0, i648 = 0, i649 = 0, i650 = 0, i651 = 0, i652 = 0, i653 = 0, i654 = 0, i655 = 0, i656 = 0, i657 = 0, i658 = 0, i659 = 0, i660 = 0, i661 = 0, i662 = 0, i663 = 0, i664 = 0, i665 = 0, i666 = 0, i667 = 0, i668 = 0, i669 = 0, i670 = 0, i671 = 0, i672 = 0, i673 = 0, i674 = 0, i675 = 0, i676 = 0, i677 = 0, i678 = 0, i679 = 0, i680 = 0, i681 = 0, i682 = 0, i683 = 0, i684 = 0, i685 = 0, i686 = 0, i687 = 0, i688 = 0, i689 = 0, i690 = 0, i691 = 0, i692 = 0, i693 = 0, i694 = 0, i695 = 0, i696 = 0, i697 = 0, i698 = 0, i699 = 0, i700 = 0, i701 = 0, i702 = 0, i703 = 0, i704 = 0, i705 = 0, i706 = 0, i707 = 0, i708 = 0, i709 = 0, i710 = 0, i711 = 0, i712 = 0, i713 = 0, i714 = 0, i715 = 0, i716 = 0, i717 = 0, i718 = 0, i719 = 0, i720 = 0, i721 = 0, i722 = 0, i723 = 0, i724 = 0, i725 = 0, i726 = 0, i727 = 0, i728 = 0, i729 = 0, i730 = 0, i731 = 0, i732 = 0, i733 = 0, i734 = 0, i735 = 0, i736 = 0, i737 = 0, i738 = 0, i739 = 0, i740 = 0, i741 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 504 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 i24 = i4 + 152 | 0;
 i25 = i4 + 160 | 0;
 i26 = i4 + 168 | 0;
 i27 = i4 + 176 | 0;
 i28 = i4 + 184 | 0;
 i29 = i4 + 192 | 0;
 i30 = i4 + 200 | 0;
 i31 = i4 + 208 | 0;
 i32 = i4 + 216 | 0;
 i33 = i4 + 224 | 0;
 i34 = i4 + 232 | 0;
 i35 = i4 + 240 | 0;
 i36 = i4 + 248 | 0;
 i37 = i4 + 256 | 0;
 i38 = i4 + 264 | 0;
 i39 = i4 + 272 | 0;
 i40 = i4 + 280 | 0;
 i41 = i4 + 288 | 0;
 i42 = i4 + 296 | 0;
 i43 = i4 + 304 | 0;
 i44 = i4 + 312 | 0;
 i45 = i4 + 320 | 0;
 i46 = i4 + 328 | 0;
 i47 = i4 + 336 | 0;
 i48 = i4 + 344 | 0;
 i49 = i4 + 352 | 0;
 i50 = i4 + 360 | 0;
 i51 = i4 + 368 | 0;
 i52 = i4 + 376 | 0;
 i53 = i4 + 384 | 0;
 i54 = i4 + 392 | 0;
 i55 = i4 + 400 | 0;
 i56 = i4 + 408 | 0;
 i57 = i4 + 416 | 0;
 i58 = i4 + 424 | 0;
 i59 = i4 + 432 | 0;
 i60 = i4 + 440 | 0;
 i61 = i4 + 464 | 0;
 i62 = i4 + 472 | 0;
 i63 = i4 + 480 | 0;
 i64 = i4 + 488 | 0;
 i65 = i4 + 496 | 0;
 i66 = i1 + 8 | 0;
 HEAP32[i66 >> 2] = i3;
 i67 = i1 + 144 | 0;
 i68 = i1 + 152 | 0;
 L1 : do {
  if ((HEAP32[i68 >> 2] | 0) != 0) {
   i69 = i1 | 0;
   switch (HEAP32[i69 >> 2] | 0) {
   case 11:
   case 12:
   case 14:
   case 15:
   case 17:
   case 18:
   case 25:
   case 26:
    {
     break L1;
     break;
    }
   default:
    {}
   }
   HEAP32[i3 >> 2] = 3;
   HEAP8[i3 + 542 | 0] = 0;
   HEAP32[i3 + 2236 >> 2] = 0;
   __ZN3WTF6VectorIN7WebCore9HTMLToken9AttributeELj10ENS_15CrashOnOverflowEE5clearEv(i3 + 544 | 0);
   i70 = i3 + 16 | 0;
   i71 = i67 | 0;
   i72 = HEAP32[i71 >> 2] | 0;
   i73 = HEAP32[i68 >> 2] | 0;
   i74 = i3 + 24 | 0;
   i75 = HEAP32[i74 >> 2] | 0;
   i76 = i75 + i73 | 0;
   i77 = HEAP32[i3 + 20 >> 2] | 0;
   if (i76 >>> 0 > i77 >>> 0) {
    i78 = i77 + 1 + (i77 >>> 2) | 0;
    i77 = i78 >>> 0 > 16 >>> 0 ? i78 : 16;
    __ZN3WTF6VectorItLj256ENS_15CrashOnOverflowEE15reserveCapacityEj(i70, i77 >>> 0 > i76 >>> 0 ? i77 : i76);
    i79 = HEAP32[i74 >> 2] | 0;
   } else {
    i79 = i75;
   }
   if (i76 >>> 0 < i79 >>> 0) {
    _WTFCrash();
    return 0;
   }
   i75 = HEAP32[i70 >> 2] | 0;
   if ((i73 | 0) != 0) {
    i70 = 0;
    while (1) {
     HEAP16[i75 + (i70 + i79 << 1) >> 1] = HEAPU8[i72 + i70 | 0] | 0;
     i70 = i70 + 1 | 0;
     if (i70 >>> 0 >= i73 >>> 0) {
      break;
     }
    }
   }
   HEAP32[i74 >> 2] = i76;
   i73 = i1 + 148 | 0;
   do {
    if ((HEAP32[i73 >> 2] | 0) != 0) {
     if ((HEAP32[i68 >> 2] | 0) != 0) {
      HEAP32[i68 >> 2] = 0;
     }
     i70 = HEAP32[i71 >> 2] | 0;
     i72 = i1 + 156 | 0;
     if ((i72 | 0) == (i70 | 0) | (i70 | 0) == 0) {
      i80 = i70;
     } else {
      HEAP32[i71 >> 2] = 0;
      HEAP32[i73 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i70);
      i80 = HEAP32[i71 >> 2] | 0;
     }
     if ((i80 | 0) != 0) {
      break;
     }
     HEAP32[i71 >> 2] = i72;
     HEAP32[i73 >> 2] = 32;
    }
   } while (0);
   i73 = i1 + 28 | 0;
   do {
    if ((HEAP32[i73 >> 2] | 0) != 0) {
     i71 = i1 + 32 | 0;
     if ((HEAP32[i71 >> 2] | 0) != 0) {
      HEAP32[i71 >> 2] = 0;
     }
     i71 = i1 + 24 | 0;
     i76 = HEAP32[i71 >> 2] | 0;
     i74 = i1 + 36 | 0;
     if ((i74 | 0) == (i76 | 0) | (i76 | 0) == 0) {
      i81 = i76;
     } else {
      HEAP32[i71 >> 2] = 0;
      HEAP32[i73 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i76);
      i81 = HEAP32[i71 >> 2] | 0;
     }
     if ((i81 | 0) != 0) {
      break;
     }
     HEAP32[i71 >> 2] = i74;
     HEAP32[i73 >> 2] = 32;
    }
   } while (0);
   i73 = i1 + 104 | 0;
   do {
    if ((HEAP32[i73 >> 2] | 0) != 0) {
     i74 = i1 + 108 | 0;
     if ((HEAP32[i74 >> 2] | 0) != 0) {
      HEAP32[i74 >> 2] = 0;
     }
     i74 = i1 + 100 | 0;
     i71 = HEAP32[i74 >> 2] | 0;
     i76 = i1 + 112 | 0;
     if ((i76 | 0) == (i71 | 0) | (i71 | 0) == 0) {
      i82 = i71;
     } else {
      HEAP32[i74 >> 2] = 0;
      HEAP32[i73 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i71);
      i82 = HEAP32[i74 >> 2] | 0;
     }
     if ((i82 | 0) != 0) {
      break;
     }
     HEAP32[i74 >> 2] = i76;
     HEAP32[i73 >> 2] = 32;
    }
   } while (0);
   if ((HEAP32[i69 >> 2] | 0) == 0) {
    i83 = 1;
   } else {
    break;
   }
   STACKTOP = i4;
   return i83 | 0;
  }
 } while (0);
 i82 = i2 + 57 | 0;
 do {
  if ((HEAP8[i82] & 1) == 0) {
   i81 = i1 + 16 | 0;
   i80 = i2 + 20 | 0;
   i79 = HEAP16[i80 >> 1] | 0;
   i3 = i1 + 20 | 0;
   HEAP16[i3 >> 1] = i79;
   if ((i79 & 65535) >>> 0 > 15 >>> 0) {
    HEAP8[i1 + 22 | 0] = 0;
    i84 = i79;
   } else {
    if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
     break;
    }
    i84 = HEAP16[i3 >> 1] | 0;
   }
   i79 = i1 | 0;
   switch (HEAP32[i79 >> 2] | 0) {
   case 9:
    {
     i85 = i84;
     i86 = 0;
     i87 = i2 + 58 | 0;
     i88 = 91;
     break;
    }
   case 34:
    {
     i89 = i84;
     i90 = 0;
     i91 = i1 + 190 | 0;
     i92 = i2 + 58 | 0;
     i93 = i2 + 68 | 0;
     i94 = i2;
     i95 = i1 + 22 | 0;
     i96 = i2 + 8 | 0;
     i97 = i2 + 4 | 0;
     i98 = i2 + 32 | 0;
     i99 = i2 + 24 | 0;
     i100 = i2 + 16 | 0;
     i101 = i2 + 28 | 0;
     i88 = 2091;
     break;
    }
   case 35:
    {
     i102 = i84;
     i103 = 0;
     i104 = i2 + 58 | 0;
     i105 = i2 + 68 | 0;
     i106 = i2;
     i107 = i1 + 22 | 0;
     i108 = i2 + 8 | 0;
     i109 = i2 + 4 | 0;
     i110 = i2 + 32 | 0;
     i111 = i2 + 24 | 0;
     i112 = i2 + 16 | 0;
     i113 = i2 + 28 | 0;
     i88 = 93;
     break;
    }
   case 36:
    {
     i114 = i84;
     i115 = 0;
     i116 = i2 + 58 | 0;
     i117 = i2 + 68 | 0;
     i118 = i2;
     i119 = i1 + 22 | 0;
     i120 = i2 + 8 | 0;
     i121 = i2 + 4 | 0;
     i122 = i2 + 32 | 0;
     i123 = i2 + 24 | 0;
     i124 = i2 + 16 | 0;
     i125 = i2 + 28 | 0;
     i88 = 94;
     break;
    }
   case 40:
    {
     i126 = i84;
     i127 = 0;
     i128 = i1 + 12 | 0;
     i88 = 2626;
     break;
    }
   case 48:
    {
     i129 = i84;
     i130 = i2 + 58 | 0;
     i88 = 2885;
     break;
    }
   case 50:
    {
     i131 = i84;
     i132 = i2 + 58 | 0;
     i88 = 90;
     break;
    }
   case 54:
    {
     i133 = i84;
     i134 = i2 + 58 | 0;
     i135 = i2 + 68 | 0;
     i136 = i2;
     i137 = i1 + 22 | 0;
     i138 = i2 + 8 | 0;
     i139 = i2 + 4 | 0;
     i140 = i2 + 32 | 0;
     i141 = i2 + 24 | 0;
     i142 = i2 + 16 | 0;
     i143 = i2 + 28 | 0;
     i88 = 3151;
     break;
    }
   case 55:
    {
     i144 = i84;
     i145 = i2 + 58 | 0;
     i146 = i2 + 68 | 0;
     i147 = i2;
     i148 = i1 + 22 | 0;
     i149 = i2 + 8 | 0;
     i150 = i2 + 4 | 0;
     i151 = i2 + 32 | 0;
     i152 = i2 + 24 | 0;
     i153 = i2 + 16 | 0;
     i154 = i2 + 28 | 0;
     i88 = 81;
     break;
    }
   case 67:
    {
     i155 = i84;
     i156 = i2 + 58 | 0;
     i88 = 4053;
     break;
    }
   case 57:
    {
     i157 = i84;
     i158 = i2 + 58 | 0;
     i88 = 83;
     break;
    }
   case 58:
    {
     i159 = i84;
     i160 = i2 + 58 | 0;
     i88 = 85;
     break;
    }
   case 61:
    {
     i161 = i84;
     i162 = i2 + 58 | 0;
     i88 = 86;
     break;
    }
   case 64:
    {
     i163 = i84;
     i164 = i2 + 58 | 0;
     i88 = 88;
     break;
    }
   case 66:
    {
     i165 = i84;
     i166 = i2 + 58 | 0;
     i167 = i2 + 68 | 0;
     i168 = i2;
     i169 = i1 + 22 | 0;
     i170 = i2 + 8 | 0;
     i171 = i2 + 4 | 0;
     i172 = i2 + 32 | 0;
     i173 = i2 + 24 | 0;
     i174 = i2 + 16 | 0;
     i175 = i2 + 28 | 0;
     i88 = 89;
     break;
    }
   case 65:
    {
     i176 = i84;
     i177 = i2 + 58 | 0;
     i88 = 87;
     break;
    }
   case 59:
    {
     i178 = i84;
     i179 = i2 + 58 | 0;
     i88 = 84;
     break;
    }
   case 63:
    {
     i180 = i84;
     i181 = i2 + 58 | 0;
     i88 = 82;
     break;
    }
   case 12:
    {
     i182 = i84;
     i183 = i1 + 100 | 0;
     i184 = i1 + 108 | 0;
     i185 = i1 + 104 | 0;
     i186 = i1 + 148 | 0;
     i187 = i2 + 58 | 0;
     i88 = 78;
     break;
    }
   case 15:
    {
     i188 = i84;
     i189 = i1 + 100 | 0;
     i190 = i1 + 108 | 0;
     i191 = i1 + 104 | 0;
     i192 = i1 + 148 | 0;
     i193 = i2 + 58 | 0;
     i88 = 76;
     break;
    }
   case 18:
    {
     i194 = i84;
     i195 = i1 + 100 | 0;
     i196 = i1 + 108 | 0;
     i197 = i1 + 104 | 0;
     i198 = i1 + 148 | 0;
     i199 = i2 + 58 | 0;
     i88 = 74;
     break;
    }
   case 23:
    {
     i200 = i84;
     i201 = i2 + 58 | 0;
     i88 = 67;
     break;
    }
   case 26:
    {
     i202 = i84;
     i203 = i1 + 100 | 0;
     i204 = i1 + 108 | 0;
     i205 = i1 + 104 | 0;
     i206 = i1 + 148 | 0;
     i207 = i2 + 58 | 0;
     i88 = 73;
     break;
    }
   case 27:
    {
     i208 = i84;
     i209 = i1 + 100 | 0;
     i210 = i1 + 108 | 0;
     i211 = i1 + 104 | 0;
     i212 = i2 + 58 | 0;
     i88 = 69;
     break;
    }
   case 30:
    {
     i213 = i84;
     i214 = i2 + 58 | 0;
     i88 = 71;
     break;
    }
   case 32:
    {
     i215 = i84;
     i216 = i1 + 104 | 0;
     i217 = i2 + 58 | 0;
     i88 = 72;
     break;
    }
   case 6:
    {
     L81 : do {
      if (i84 << 16 >> 16 != 0) {
       i73 = i2 + 58 | 0;
       i76 = i2 + 68 | 0;
       i74 = i2;
       i71 = i1 + 22 | 0;
       i72 = i2 + 8 | 0;
       i70 = i2 + 4 | 0;
       i75 = i2 + 32 | 0;
       i77 = i2 + 24 | 0;
       i78 = i2 + 16 | 0;
       i218 = i2 + 28 | 0;
       i219 = i84;
       while (1) {
        __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, i219);
        HEAP32[i79 >> 2] = 6;
        i220 = HEAPU8[i73] | 0;
        do {
         if ((i220 & 2 | 0) == 0) {
          i221 = i74 + (HEAP32[i76 + 4 >> 2] | 0) | 0;
          i222 = HEAP32[i76 >> 2] | 0;
          if ((i222 & 1 | 0) == 0) {
           i223 = i222;
          } else {
           i223 = HEAP32[(HEAP32[i221 >> 2] | 0) + (i222 - 1) >> 2] | 0;
          }
          FUNCTION_TABLE_vi[i223 & 15](i221);
         } else {
          i221 = (HEAP16[i80 >> 1] | 0) == 10 & i220;
          i222 = HEAP32[i72 >> 2] | 0;
          i224 = i222 - 1 | 0;
          HEAP32[i72 >> 2] = i224;
          i225 = (i224 | 0) == 1;
          i224 = (HEAP32[i70 >> 2] | 0) + 1 | 0;
          HEAP32[i70 >> 2] = i224;
          HEAP16[i80 >> 1] = HEAPU8[i224] | 0;
          if ((i225 & 1 | i221 | 0) == 0) {
           break;
          }
          if ((i221 | 0) != 0) {
           HEAP32[i75 >> 2] = (HEAP32[i75 >> 2] | 0) + 1;
           i221 = HEAP32[i78 >> 2] | 0;
           if ((i221 | 0) == 0) {
            i226 = 0;
           } else {
            i226 = HEAP32[i221 + 4 >> 2] | 0;
           }
           HEAP32[i218 >> 2] = (HEAP32[i77 >> 2] | 0) + (1 - i222) + i226;
          }
          if (!i225) {
           break;
          }
          __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
         }
        } while (0);
        if ((HEAP8[i82] & 1) != 0) {
         break;
        }
        i220 = HEAP16[i80 >> 1] | 0;
        HEAP16[i3 >> 1] = i220;
        if ((i220 & 65535) >>> 0 > 15 >>> 0) {
         HEAP8[i71] = 0;
         i219 = i220;
         continue;
        }
        if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
         break;
        }
        i219 = HEAP16[i3 >> 1] | 0;
        if (i219 << 16 >> 16 == 0) {
         break L81;
        }
       }
       i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
       STACKTOP = i4;
       return i83 | 0;
      }
     } while (0);
     __ZN7WebCore13HTMLTokenizer13emitEndOfFileERNS_15SegmentedStringE(i1, i2) | 0;
     i83 = 1;
     STACKTOP = i4;
     return i83 | 0;
    }
   case 5:
    {
     i227 = i84;
     i88 = 66;
     break;
    }
   case 21:
    {
     i228 = i84;
     i88 = 68;
     break;
    }
   case 28:
    {
     i229 = i84;
     i88 = 70;
     break;
    }
   case 4:
    {
     i230 = i84;
     i88 = 75;
     break;
    }
   case 2:
    {
     i231 = i84;
     i88 = 77;
     break;
    }
   case 0:
    {
     i232 = i84;
     i233 = 0;
     i88 = 79;
     break;
    }
   case 68:
    {
     i234 = i84;
     i235 = 0;
     i88 = 80;
     break;
    }
   case 33:
    {
     i236 = i84;
     i237 = 0;
     i88 = 92;
     break;
    }
   case 38:
    {
     i238 = i84;
     i239 = 0;
     i88 = 95;
     break;
    }
   case 37:
    {
     i240 = i84;
     i241 = 0;
     i88 = 96;
     break;
    }
   case 1:
    {
     i242 = 0;
     i88 = 153;
     break;
    }
   case 3:
    {
     i88 = 216;
     break;
    }
   case 7:
    {
     i243 = i84;
     i244 = 0;
     i88 = 319;
     break;
    }
   case 8:
    {
     i245 = i84;
     i246 = 0;
     i88 = 397;
     break;
    }
   case 10:
    {
     i247 = i84;
     i88 = 556;
     break;
    }
   case 11:
    {
     i248 = i84;
     i88 = 583;
     break;
    }
   case 13:
    {
     i249 = i84;
     i88 = 741;
     break;
    }
   case 14:
    {
     i250 = i84;
     i88 = 768;
     break;
    }
   case 16:
    {
     i251 = i84;
     i88 = 926;
     break;
    }
   case 17:
    {
     i252 = i84;
     i88 = 972;
     break;
    }
   case 19:
    {
     i253 = i84;
     i88 = 1130;
     break;
    }
   case 20:
    {
     i254 = i84;
     i88 = 1150;
     break;
    }
   case 22:
    {
     i255 = i84;
     i88 = 1226;
     break;
    }
   case 24:
    {
     i256 = i84;
     i88 = 1356;
     break;
    }
   case 25:
    {
     i257 = i84;
     i88 = 1443;
     break;
    }
   case 29:
    {
     i258 = i84;
     i88 = 1743;
     break;
    }
   case 31:
    {
     i259 = i84;
     i88 = 1873;
     break;
    }
   case 39:
    {
     i260 = i84;
     i261 = 0;
     i88 = 2663;
     break;
    }
   case 41:
    {
     i262 = i84;
     i263 = 0;
     i88 = 2664;
     break;
    }
   case 42:
    {
     i264 = i84;
     i265 = 0;
     i88 = 2709;
     break;
    }
   case 43:
    {
     i266 = i84;
     i88 = 2713;
     break;
    }
   case 44:
    {
     i267 = i84;
     i88 = 2714;
     break;
    }
   case 45:
    {
     i268 = i84;
     i269 = 0;
     i88 = 2738;
     break;
    }
   case 46:
    {
     i270 = i84;
     i88 = 2803;
     break;
    }
   case 47:
    {
     i271 = i84;
     i88 = 2844;
     break;
    }
   case 49:
    {
     i272 = i84;
     i88 = 2926;
     break;
    }
   case 51:
    {
     i273 = i84;
     i88 = 3025;
     break;
    }
   case 52:
    {
     i274 = i84;
     i88 = 3066;
     break;
    }
   case 53:
    {
     i275 = i84;
     i88 = 3089;
     break;
    }
   case 56:
    {
     i276 = i84;
     i88 = 3292;
     break;
    }
   case 60:
    {
     i277 = i84;
     i88 = 3564;
     break;
    }
   case 62:
    {
     i278 = i84;
     i88 = 3740;
     break;
    }
   case 69:
    {
     i279 = i84;
     i280 = 0;
     i88 = 4115;
     break;
    }
   case 70:
    {
     i281 = i84;
     i282 = 0;
     i88 = 4135;
     break;
    }
   default:
    {
     i88 = 4155;
    }
   }
   L110 : while (1) {
    if ((i88 | 0) == 66) {
     i88 = 0;
     i69 = i2 + 58 | 0;
     i219 = i2 + 68 | 0;
     i71 = i2;
     i77 = i1 + 22 | 0;
     i218 = i2 + 8 | 0;
     i78 = i2 + 4 | 0;
     i75 = i2 + 32 | 0;
     i70 = i2 + 24 | 0;
     i72 = i2 + 16 | 0;
     i76 = i2 + 28 | 0;
     i74 = i227;
     while (1) {
      if ((i74 << 16 >> 16 | 0) == 60) {
       break;
      } else if ((i74 << 16 >> 16 | 0) == 0) {
       i88 = 281;
       break L110;
      }
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, i74);
      HEAP32[i79 >> 2] = 5;
      i73 = HEAPU8[i69] | 0;
      do {
       if ((i73 & 2 | 0) == 0) {
        i220 = i71 + (HEAP32[i219 + 4 >> 2] | 0) | 0;
        i225 = HEAP32[i219 >> 2] | 0;
        if ((i225 & 1 | 0) == 0) {
         i283 = i225;
        } else {
         i283 = HEAP32[(HEAP32[i220 >> 2] | 0) + (i225 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i283 & 15](i220);
       } else {
        i220 = (HEAP16[i80 >> 1] | 0) == 10 & i73;
        i225 = HEAP32[i218 >> 2] | 0;
        i222 = i225 - 1 | 0;
        HEAP32[i218 >> 2] = i222;
        i221 = (i222 | 0) == 1;
        i222 = (HEAP32[i78 >> 2] | 0) + 1 | 0;
        HEAP32[i78 >> 2] = i222;
        HEAP16[i80 >> 1] = HEAPU8[i222] | 0;
        if ((i221 & 1 | i220 | 0) == 0) {
         break;
        }
        if ((i220 | 0) != 0) {
         HEAP32[i75 >> 2] = (HEAP32[i75 >> 2] | 0) + 1;
         i220 = HEAP32[i72 >> 2] | 0;
         if ((i220 | 0) == 0) {
          i284 = 0;
         } else {
          i284 = HEAP32[i220 + 4 >> 2] | 0;
         }
         HEAP32[i76 >> 2] = (HEAP32[i70 >> 2] | 0) + (1 - i225) + i284;
        }
        if (!i221) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 299;
       break L110;
      }
      i73 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i73;
      if ((i73 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i77] = 0;
       i74 = i73;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 299;
       break L110;
      }
      i74 = HEAP16[i3 >> 1] | 0;
     }
     HEAP32[i79 >> 2] = 16;
     i74 = HEAPU8[i69] | 0;
     do {
      if ((i74 & 2 | 0) == 0) {
       i73 = i71 + (HEAP32[i219 + 4 >> 2] | 0) | 0;
       i221 = HEAP32[i219 >> 2] | 0;
       if ((i221 & 1 | 0) == 0) {
        i285 = i221;
       } else {
        i285 = HEAP32[(HEAP32[i73 >> 2] | 0) + (i221 - 1) >> 2] | 0;
       }
       FUNCTION_TABLE_vi[i285 & 15](i73);
      } else {
       i73 = (HEAP16[i80 >> 1] | 0) == 10 & i74;
       i221 = HEAP32[i218 >> 2] | 0;
       i225 = i221 - 1 | 0;
       HEAP32[i218 >> 2] = i225;
       i220 = (i225 | 0) == 1;
       i225 = (HEAP32[i78 >> 2] | 0) + 1 | 0;
       HEAP32[i78 >> 2] = i225;
       HEAP16[i80 >> 1] = HEAPU8[i225] | 0;
       if ((i220 & 1 | i73 | 0) == 0) {
        break;
       }
       if ((i73 | 0) != 0) {
        HEAP32[i75 >> 2] = (HEAP32[i75 >> 2] | 0) + 1;
        i73 = HEAP32[i72 >> 2] | 0;
        if ((i73 | 0) == 0) {
         i286 = 0;
        } else {
         i286 = HEAP32[i73 + 4 >> 2] | 0;
        }
        HEAP32[i76 >> 2] = (HEAP32[i70 >> 2] | 0) + (1 - i221) + i286;
       }
       if (!i220) {
        break;
       }
       __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
      }
     } while (0);
     if ((HEAP8[i82] & 1) != 0) {
      i88 = 280;
      break;
     }
     i70 = HEAP16[i80 >> 1] | 0;
     HEAP16[i3 >> 1] = i70;
     if ((i70 & 65535) >>> 0 > 15 >>> 0) {
      HEAP8[i77] = 0;
      i251 = i70;
      i88 = 926;
      continue;
     }
     if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
      i88 = 280;
      break;
     }
     i251 = HEAP16[i3 >> 1] | 0;
     i88 = 926;
     continue;
    } else if ((i88 | 0) == 67) {
     i88 = 0;
     i70 = i2 + 68 | 0;
     i76 = i2;
     i72 = i1 + 22 | 0;
     i75 = i2 + 8 | 0;
     i78 = i2 + 4 | 0;
     i218 = i2 + 32 | 0;
     i74 = i2 + 24 | 0;
     i219 = i2 + 16 | 0;
     i71 = i2 + 28 | 0;
     i69 = i200;
     while (1) {
      if ((i69 << 16 >> 16 | 0) == 60) {
       i88 = 1301;
       break;
      } else if ((i69 << 16 >> 16 | 0) == 62) {
       i88 = 1319;
       break;
      } else if ((i69 << 16 >> 16 | 0) == 0) {
       i88 = 1337;
       break;
      } else if ((i69 << 16 >> 16 | 0) != 45) {
       i88 = 1338;
       break;
      }
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 45);
      HEAP32[i79 >> 2] = 23;
      i220 = HEAPU8[i201] | 0;
      do {
       if ((i220 & 2 | 0) == 0) {
        i221 = i76 + (HEAP32[i70 + 4 >> 2] | 0) | 0;
        i73 = HEAP32[i70 >> 2] | 0;
        if ((i73 & 1 | 0) == 0) {
         i287 = i73;
        } else {
         i287 = HEAP32[(HEAP32[i221 >> 2] | 0) + (i73 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i287 & 15](i221);
       } else {
        i221 = (HEAP16[i80 >> 1] | 0) == 10 & i220;
        i73 = HEAP32[i75 >> 2] | 0;
        i225 = i73 - 1 | 0;
        HEAP32[i75 >> 2] = i225;
        i222 = (i225 | 0) == 1;
        i225 = (HEAP32[i78 >> 2] | 0) + 1 | 0;
        HEAP32[i78 >> 2] = i225;
        HEAP16[i80 >> 1] = HEAPU8[i225] | 0;
        if ((i222 & 1 | i221 | 0) == 0) {
         break;
        }
        if ((i221 | 0) != 0) {
         HEAP32[i218 >> 2] = (HEAP32[i218 >> 2] | 0) + 1;
         i221 = HEAP32[i219 >> 2] | 0;
         if ((i221 | 0) == 0) {
          i288 = 0;
         } else {
          i288 = HEAP32[i221 + 4 >> 2] | 0;
         }
         HEAP32[i71 >> 2] = (HEAP32[i74 >> 2] | 0) + (1 - i73) + i288;
        }
        if (!i222) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 1300;
       break L110;
      }
      i220 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i220;
      if ((i220 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i72] = 0;
       i69 = i220;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 1300;
       break L110;
      }
      i69 = HEAP16[i3 >> 1] | 0;
     }
     if ((i88 | 0) == 1301) {
      i88 = 0;
      HEAP32[i79 >> 2] = 24;
      i77 = HEAPU8[i201] | 0;
      do {
       if ((i77 & 2 | 0) == 0) {
        i220 = i76 + (HEAP32[i70 + 4 >> 2] | 0) | 0;
        i222 = HEAP32[i70 >> 2] | 0;
        if ((i222 & 1 | 0) == 0) {
         i289 = i222;
        } else {
         i289 = HEAP32[(HEAP32[i220 >> 2] | 0) + (i222 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i289 & 15](i220);
       } else {
        i220 = (HEAP16[i80 >> 1] | 0) == 10 & i77;
        i222 = HEAP32[i75 >> 2] | 0;
        i73 = i222 - 1 | 0;
        HEAP32[i75 >> 2] = i73;
        i221 = (i73 | 0) == 1;
        i73 = (HEAP32[i78 >> 2] | 0) + 1 | 0;
        HEAP32[i78 >> 2] = i73;
        HEAP16[i80 >> 1] = HEAPU8[i73] | 0;
        if ((i221 & 1 | i220 | 0) == 0) {
         break;
        }
        if ((i220 | 0) != 0) {
         HEAP32[i218 >> 2] = (HEAP32[i218 >> 2] | 0) + 1;
         i220 = HEAP32[i219 >> 2] | 0;
         if ((i220 | 0) == 0) {
          i290 = 0;
         } else {
          i290 = HEAP32[i220 + 4 >> 2] | 0;
         }
         HEAP32[i71 >> 2] = (HEAP32[i74 >> 2] | 0) + (1 - i222) + i290;
        }
        if (!i221) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 1318;
       break;
      }
      i77 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i77;
      if ((i77 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i72] = 0;
       i256 = i77;
       i88 = 1356;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 1318;
       break;
      }
      i256 = HEAP16[i3 >> 1] | 0;
      i88 = 1356;
      continue;
     } else if ((i88 | 0) == 1319) {
      i88 = 0;
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 62);
      HEAP32[i79 >> 2] = 5;
      i77 = HEAPU8[i201] | 0;
      do {
       if ((i77 & 2 | 0) == 0) {
        i221 = i76 + (HEAP32[i70 + 4 >> 2] | 0) | 0;
        i222 = HEAP32[i70 >> 2] | 0;
        if ((i222 & 1 | 0) == 0) {
         i291 = i222;
        } else {
         i291 = HEAP32[(HEAP32[i221 >> 2] | 0) + (i222 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i291 & 15](i221);
       } else {
        i221 = (HEAP16[i80 >> 1] | 0) == 10 & i77;
        i222 = HEAP32[i75 >> 2] | 0;
        i220 = i222 - 1 | 0;
        HEAP32[i75 >> 2] = i220;
        i73 = (i220 | 0) == 1;
        i220 = (HEAP32[i78 >> 2] | 0) + 1 | 0;
        HEAP32[i78 >> 2] = i220;
        HEAP16[i80 >> 1] = HEAPU8[i220] | 0;
        if ((i73 & 1 | i221 | 0) == 0) {
         break;
        }
        if ((i221 | 0) != 0) {
         HEAP32[i218 >> 2] = (HEAP32[i218 >> 2] | 0) + 1;
         i221 = HEAP32[i219 >> 2] | 0;
         if ((i221 | 0) == 0) {
          i292 = 0;
         } else {
          i292 = HEAP32[i221 + 4 >> 2] | 0;
         }
         HEAP32[i71 >> 2] = (HEAP32[i74 >> 2] | 0) + (1 - i222) + i292;
        }
        if (!i73) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 1336;
       break;
      }
      i77 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i77;
      if ((i77 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i72] = 0;
       i227 = i77;
       i88 = 66;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 1336;
       break;
      }
      i227 = HEAP16[i3 >> 1] | 0;
      i88 = 66;
      continue;
     } else if ((i88 | 0) == 1337) {
      i88 = 0;
      HEAP32[i79 >> 2] = 0;
      i232 = 0;
      i233 = 0;
      i88 = 79;
      continue;
     } else if ((i88 | 0) == 1338) {
      i88 = 0;
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, i69);
      HEAP32[i79 >> 2] = 21;
      i77 = HEAPU8[i201] | 0;
      do {
       if ((i77 & 2 | 0) == 0) {
        i73 = i76 + (HEAP32[i70 + 4 >> 2] | 0) | 0;
        i222 = HEAP32[i70 >> 2] | 0;
        if ((i222 & 1 | 0) == 0) {
         i293 = i222;
        } else {
         i293 = HEAP32[(HEAP32[i73 >> 2] | 0) + (i222 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i293 & 15](i73);
       } else {
        i73 = (HEAP16[i80 >> 1] | 0) == 10 & i77;
        i222 = HEAP32[i75 >> 2] | 0;
        i221 = i222 - 1 | 0;
        HEAP32[i75 >> 2] = i221;
        i220 = (i221 | 0) == 1;
        i221 = (HEAP32[i78 >> 2] | 0) + 1 | 0;
        HEAP32[i78 >> 2] = i221;
        HEAP16[i80 >> 1] = HEAPU8[i221] | 0;
        if ((i220 & 1 | i73 | 0) == 0) {
         break;
        }
        if ((i73 | 0) != 0) {
         HEAP32[i218 >> 2] = (HEAP32[i218 >> 2] | 0) + 1;
         i73 = HEAP32[i219 >> 2] | 0;
         if ((i73 | 0) == 0) {
          i294 = 0;
         } else {
          i294 = HEAP32[i73 + 4 >> 2] | 0;
         }
         HEAP32[i71 >> 2] = (HEAP32[i74 >> 2] | 0) + (1 - i222) + i294;
        }
        if (!i220) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 1355;
       break;
      }
      i74 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i74;
      if ((i74 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i72] = 0;
       i228 = i74;
       i88 = 68;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 1355;
       break;
      }
      i228 = HEAP16[i3 >> 1] | 0;
      i88 = 68;
      continue;
     }
    } else if ((i88 | 0) == 68) {
     i88 = 0;
     i74 = i2 + 58 | 0;
     i71 = i2 + 68 | 0;
     i219 = i2;
     i218 = i1 + 22 | 0;
     i78 = i2 + 8 | 0;
     i75 = i2 + 4 | 0;
     i77 = i2 + 32 | 0;
     i70 = i2 + 24 | 0;
     i76 = i2 + 16 | 0;
     i69 = i2 + 28 | 0;
     i220 = i228;
     while (1) {
      if ((i220 << 16 >> 16 | 0) == 45) {
       i88 = 1171;
       break;
      } else if ((i220 << 16 >> 16 | 0) == 60) {
       i88 = 1189;
       break;
      } else if ((i220 << 16 >> 16 | 0) == 0) {
       i88 = 1207;
       break;
      }
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, i220);
      HEAP32[i79 >> 2] = 21;
      i222 = HEAPU8[i74] | 0;
      do {
       if ((i222 & 2 | 0) == 0) {
        i73 = i219 + (HEAP32[i71 + 4 >> 2] | 0) | 0;
        i221 = HEAP32[i71 >> 2] | 0;
        if ((i221 & 1 | 0) == 0) {
         i295 = i221;
        } else {
         i295 = HEAP32[(HEAP32[i73 >> 2] | 0) + (i221 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i295 & 15](i73);
       } else {
        i73 = (HEAP16[i80 >> 1] | 0) == 10 & i222;
        i221 = HEAP32[i78 >> 2] | 0;
        i225 = i221 - 1 | 0;
        HEAP32[i78 >> 2] = i225;
        i224 = (i225 | 0) == 1;
        i225 = (HEAP32[i75 >> 2] | 0) + 1 | 0;
        HEAP32[i75 >> 2] = i225;
        HEAP16[i80 >> 1] = HEAPU8[i225] | 0;
        if ((i224 & 1 | i73 | 0) == 0) {
         break;
        }
        if ((i73 | 0) != 0) {
         HEAP32[i77 >> 2] = (HEAP32[i77 >> 2] | 0) + 1;
         i73 = HEAP32[i76 >> 2] | 0;
         if ((i73 | 0) == 0) {
          i296 = 0;
         } else {
          i296 = HEAP32[i73 + 4 >> 2] | 0;
         }
         HEAP32[i69 >> 2] = (HEAP32[i70 >> 2] | 0) + (1 - i221) + i296;
        }
        if (!i224) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 1225;
       break L110;
      }
      i222 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i222;
      if ((i222 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i218] = 0;
       i220 = i222;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 1225;
       break L110;
      }
      i220 = HEAP16[i3 >> 1] | 0;
     }
     if ((i88 | 0) == 1171) {
      i88 = 0;
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 45);
      HEAP32[i79 >> 2] = 22;
      i220 = HEAPU8[i74] | 0;
      do {
       if ((i220 & 2 | 0) == 0) {
        i72 = i219 + (HEAP32[i71 + 4 >> 2] | 0) | 0;
        i222 = HEAP32[i71 >> 2] | 0;
        if ((i222 & 1 | 0) == 0) {
         i297 = i222;
        } else {
         i297 = HEAP32[(HEAP32[i72 >> 2] | 0) + (i222 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i297 & 15](i72);
       } else {
        i72 = (HEAP16[i80 >> 1] | 0) == 10 & i220;
        i222 = HEAP32[i78 >> 2] | 0;
        i224 = i222 - 1 | 0;
        HEAP32[i78 >> 2] = i224;
        i221 = (i224 | 0) == 1;
        i224 = (HEAP32[i75 >> 2] | 0) + 1 | 0;
        HEAP32[i75 >> 2] = i224;
        HEAP16[i80 >> 1] = HEAPU8[i224] | 0;
        if ((i221 & 1 | i72 | 0) == 0) {
         break;
        }
        if ((i72 | 0) != 0) {
         HEAP32[i77 >> 2] = (HEAP32[i77 >> 2] | 0) + 1;
         i72 = HEAP32[i76 >> 2] | 0;
         if ((i72 | 0) == 0) {
          i298 = 0;
         } else {
          i298 = HEAP32[i72 + 4 >> 2] | 0;
         }
         HEAP32[i69 >> 2] = (HEAP32[i70 >> 2] | 0) + (1 - i222) + i298;
        }
        if (!i221) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 1188;
       break;
      }
      i220 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i220;
      if ((i220 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i218] = 0;
       i255 = i220;
       i88 = 1226;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 1188;
       break;
      }
      i255 = HEAP16[i3 >> 1] | 0;
      i88 = 1226;
      continue;
     } else if ((i88 | 0) == 1189) {
      i88 = 0;
      HEAP32[i79 >> 2] = 24;
      i220 = HEAPU8[i74] | 0;
      do {
       if ((i220 & 2 | 0) == 0) {
        i221 = i219 + (HEAP32[i71 + 4 >> 2] | 0) | 0;
        i222 = HEAP32[i71 >> 2] | 0;
        if ((i222 & 1 | 0) == 0) {
         i299 = i222;
        } else {
         i299 = HEAP32[(HEAP32[i221 >> 2] | 0) + (i222 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i299 & 15](i221);
       } else {
        i221 = (HEAP16[i80 >> 1] | 0) == 10 & i220;
        i222 = HEAP32[i78 >> 2] | 0;
        i72 = i222 - 1 | 0;
        HEAP32[i78 >> 2] = i72;
        i224 = (i72 | 0) == 1;
        i72 = (HEAP32[i75 >> 2] | 0) + 1 | 0;
        HEAP32[i75 >> 2] = i72;
        HEAP16[i80 >> 1] = HEAPU8[i72] | 0;
        if ((i224 & 1 | i221 | 0) == 0) {
         break;
        }
        if ((i221 | 0) != 0) {
         HEAP32[i77 >> 2] = (HEAP32[i77 >> 2] | 0) + 1;
         i221 = HEAP32[i76 >> 2] | 0;
         if ((i221 | 0) == 0) {
          i300 = 0;
         } else {
          i300 = HEAP32[i221 + 4 >> 2] | 0;
         }
         HEAP32[i69 >> 2] = (HEAP32[i70 >> 2] | 0) + (1 - i222) + i300;
        }
        if (!i224) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 1206;
       break;
      }
      i70 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i70;
      if ((i70 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i218] = 0;
       i256 = i70;
       i88 = 1356;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 1206;
       break;
      }
      i256 = HEAP16[i3 >> 1] | 0;
      i88 = 1356;
      continue;
     } else if ((i88 | 0) == 1207) {
      i88 = 0;
      HEAP32[i79 >> 2] = 0;
      i232 = 0;
      i233 = 0;
      i88 = 79;
      continue;
     }
    } else if ((i88 | 0) == 69) {
     i88 = 0;
     i70 = i2 + 68 | 0;
     i69 = i2;
     i76 = i1 + 22 | 0;
     i77 = i2 + 8 | 0;
     i75 = i2 + 4 | 0;
     i78 = i2 + 32 | 0;
     i220 = i2 + 24 | 0;
     i71 = i2 + 16 | 0;
     i219 = i2 + 28 | 0;
     i74 = i209 | 0;
     i224 = i208;
     L324 : while (1) {
      switch (i224 << 16 >> 16) {
      case 32:
      case 10:
      case 9:
      case 12:
      case 62:
      case 47:
       {
        break L324;
        break;
       }
      default:
       {}
      }
      do {
       if ((i224 - 65 & 65535) >>> 0 < 26 >>> 0) {
        __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, i224);
        i222 = i224 + 32 & 65535;
        HEAP16[i55 >> 1] = i222;
        i221 = HEAP32[i210 >> 2] | 0;
        if ((i221 | 0) == (HEAP32[i211 >> 2] | 0)) {
         __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14appendSlowCaseItEEvOT_(i209, i55);
        } else {
         HEAP8[(HEAP32[i74 >> 2] | 0) + i221 | 0] = i222;
         HEAP32[i210 >> 2] = (HEAP32[i210 >> 2] | 0) + 1;
        }
        HEAP32[i79 >> 2] = 27;
        i222 = HEAPU8[i212] | 0;
        do {
         if ((i222 & 2 | 0) == 0) {
          i221 = i69 + (HEAP32[i70 + 4 >> 2] | 0) | 0;
          i72 = HEAP32[i70 >> 2] | 0;
          if ((i72 & 1 | 0) == 0) {
           i301 = i72;
          } else {
           i301 = HEAP32[(HEAP32[i221 >> 2] | 0) + (i72 - 1) >> 2] | 0;
          }
          FUNCTION_TABLE_vi[i301 & 15](i221);
         } else {
          i221 = (HEAP16[i80 >> 1] | 0) == 10 & i222;
          i72 = HEAP32[i77 >> 2] | 0;
          i73 = i72 - 1 | 0;
          HEAP32[i77 >> 2] = i73;
          i225 = (i73 | 0) == 1;
          i73 = (HEAP32[i75 >> 2] | 0) + 1 | 0;
          HEAP32[i75 >> 2] = i73;
          HEAP16[i80 >> 1] = HEAPU8[i73] | 0;
          if ((i225 & 1 | i221 | 0) == 0) {
           break;
          }
          if ((i221 | 0) != 0) {
           HEAP32[i78 >> 2] = (HEAP32[i78 >> 2] | 0) + 1;
           i221 = HEAP32[i71 >> 2] | 0;
           if ((i221 | 0) == 0) {
            i302 = 0;
           } else {
            i302 = HEAP32[i221 + 4 >> 2] | 0;
           }
           HEAP32[i219 >> 2] = (HEAP32[i220 >> 2] | 0) + (1 - i72) + i302;
          }
          if (!i225) {
           break;
          }
          __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
         }
        } while (0);
        if ((HEAP8[i82] & 1) != 0) {
         i88 = 1663;
         break L110;
        }
        i222 = HEAP16[i80 >> 1] | 0;
        HEAP16[i3 >> 1] = i222;
        if ((i222 & 65535) >>> 0 > 15 >>> 0) {
         HEAP8[i76] = 0;
         break;
        } else {
         if (__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0) {
          break;
         } else {
          i88 = 1663;
          break L110;
         }
        }
       } else {
        if ((i224 - 97 & 65535) >>> 0 >= 26 >>> 0) {
         i88 = 1686;
         break L324;
        }
        __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, i224);
        i222 = i224 & 255;
        HEAP8[i56] = i222;
        i225 = HEAP32[i210 >> 2] | 0;
        if ((i225 | 0) == (HEAP32[i211 >> 2] | 0)) {
         i72 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i209, i225 + 1 | 0, i56) | 0;
         HEAP8[(HEAP32[i74 >> 2] | 0) + (HEAP32[i210 >> 2] | 0) | 0] = HEAP8[i72] | 0;
        } else {
         HEAP8[(HEAP32[i74 >> 2] | 0) + i225 | 0] = i222;
        }
        HEAP32[i210 >> 2] = (HEAP32[i210 >> 2] | 0) + 1;
        HEAP32[i79 >> 2] = 27;
        i222 = HEAPU8[i212] | 0;
        do {
         if ((i222 & 2 | 0) == 0) {
          i225 = i69 + (HEAP32[i70 + 4 >> 2] | 0) | 0;
          i72 = HEAP32[i70 >> 2] | 0;
          if ((i72 & 1 | 0) == 0) {
           i303 = i72;
          } else {
           i303 = HEAP32[(HEAP32[i225 >> 2] | 0) + (i72 - 1) >> 2] | 0;
          }
          FUNCTION_TABLE_vi[i303 & 15](i225);
         } else {
          i225 = (HEAP16[i80 >> 1] | 0) == 10 & i222;
          i72 = HEAP32[i77 >> 2] | 0;
          i221 = i72 - 1 | 0;
          HEAP32[i77 >> 2] = i221;
          i73 = (i221 | 0) == 1;
          i221 = (HEAP32[i75 >> 2] | 0) + 1 | 0;
          HEAP32[i75 >> 2] = i221;
          HEAP16[i80 >> 1] = HEAPU8[i221] | 0;
          if ((i73 & 1 | i225 | 0) == 0) {
           break;
          }
          if ((i225 | 0) != 0) {
           HEAP32[i78 >> 2] = (HEAP32[i78 >> 2] | 0) + 1;
           i225 = HEAP32[i71 >> 2] | 0;
           if ((i225 | 0) == 0) {
            i304 = 0;
           } else {
            i304 = HEAP32[i225 + 4 >> 2] | 0;
           }
           HEAP32[i219 >> 2] = (HEAP32[i220 >> 2] | 0) + (1 - i72) + i304;
          }
          if (!i73) {
           break;
          }
          __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
         }
        } while (0);
        if ((HEAP8[i82] & 1) != 0) {
         i88 = 1685;
         break L110;
        }
        i222 = HEAP16[i80 >> 1] | 0;
        HEAP16[i3 >> 1] = i222;
        if ((i222 & 65535) >>> 0 > 15 >>> 0) {
         HEAP8[i76] = 0;
         break;
        } else {
         if (__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0) {
          break;
         } else {
          i88 = 1685;
          break L110;
         }
        }
       }
      } while (0);
      i224 = HEAP16[i3 >> 1] | 0;
     }
     if ((i88 | 0) == 1686) {
      i88 = 0;
      HEAP32[i79 >> 2] = 21;
      i228 = i224;
      i88 = 68;
      continue;
     }
     __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, i224);
     i74 = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9scriptTagE >> 2] | 0) + 12 >> 2] | 0;
     i218 = HEAP32[i210 >> 2] | 0;
     do {
      if ((i74 | 0) == 0) {
       if ((i218 | 0) == 0) {
        i88 = 1607;
       } else {
        i88 = 1625;
       }
      } else {
       if ((i218 | 0) != (HEAP32[i74 + 4 >> 2] | 0)) {
        i88 = 1625;
        break;
       }
       if ((i218 | 0) == 0) {
        i88 = 1607;
        break;
       }
       if (__ZN3WTF5equalEPKNS_10StringImplEPKhj(i74, HEAP32[i1 + 100 >> 2] | 0, i218) | 0) {
        i88 = 1607;
       } else {
        i88 = 1625;
       }
      }
     } while (0);
     if ((i88 | 0) == 1607) {
      i88 = 0;
      HEAP32[i79 >> 2] = 28;
      i218 = HEAPU8[i212] | 0;
      do {
       if ((i218 & 2 | 0) == 0) {
        i74 = i69 + (HEAP32[i70 + 4 >> 2] | 0) | 0;
        i224 = HEAP32[i70 >> 2] | 0;
        if ((i224 & 1 | 0) == 0) {
         i305 = i224;
        } else {
         i305 = HEAP32[(HEAP32[i74 >> 2] | 0) + (i224 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i305 & 15](i74);
       } else {
        i74 = (HEAP16[i80 >> 1] | 0) == 10 & i218;
        i224 = HEAP32[i77 >> 2] | 0;
        i222 = i224 - 1 | 0;
        HEAP32[i77 >> 2] = i222;
        i73 = (i222 | 0) == 1;
        i222 = (HEAP32[i75 >> 2] | 0) + 1 | 0;
        HEAP32[i75 >> 2] = i222;
        HEAP16[i80 >> 1] = HEAPU8[i222] | 0;
        if ((i73 & 1 | i74 | 0) == 0) {
         break;
        }
        if ((i74 | 0) != 0) {
         HEAP32[i78 >> 2] = (HEAP32[i78 >> 2] | 0) + 1;
         i74 = HEAP32[i71 >> 2] | 0;
         if ((i74 | 0) == 0) {
          i306 = 0;
         } else {
          i306 = HEAP32[i74 + 4 >> 2] | 0;
         }
         HEAP32[i219 >> 2] = (HEAP32[i220 >> 2] | 0) + (1 - i224) + i306;
        }
        if (!i73) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 1624;
       break;
      }
      i218 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i218;
      if ((i218 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i76] = 0;
       i229 = i218;
       i88 = 70;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 1624;
       break;
      }
      i229 = HEAP16[i3 >> 1] | 0;
      i88 = 70;
      continue;
     } else if ((i88 | 0) == 1625) {
      i88 = 0;
      HEAP32[i79 >> 2] = 21;
      i218 = HEAPU8[i212] | 0;
      do {
       if ((i218 & 2 | 0) == 0) {
        i73 = i69 + (HEAP32[i70 + 4 >> 2] | 0) | 0;
        i224 = HEAP32[i70 >> 2] | 0;
        if ((i224 & 1 | 0) == 0) {
         i307 = i224;
        } else {
         i307 = HEAP32[(HEAP32[i73 >> 2] | 0) + (i224 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i307 & 15](i73);
       } else {
        i73 = (HEAP16[i80 >> 1] | 0) == 10 & i218;
        i224 = HEAP32[i77 >> 2] | 0;
        i74 = i224 - 1 | 0;
        HEAP32[i77 >> 2] = i74;
        i222 = (i74 | 0) == 1;
        i74 = (HEAP32[i75 >> 2] | 0) + 1 | 0;
        HEAP32[i75 >> 2] = i74;
        HEAP16[i80 >> 1] = HEAPU8[i74] | 0;
        if ((i222 & 1 | i73 | 0) == 0) {
         break;
        }
        if ((i73 | 0) != 0) {
         HEAP32[i78 >> 2] = (HEAP32[i78 >> 2] | 0) + 1;
         i73 = HEAP32[i71 >> 2] | 0;
         if ((i73 | 0) == 0) {
          i308 = 0;
         } else {
          i308 = HEAP32[i73 + 4 >> 2] | 0;
         }
         HEAP32[i219 >> 2] = (HEAP32[i220 >> 2] | 0) + (1 - i224) + i308;
        }
        if (!i222) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 1642;
       break;
      }
      i220 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i220;
      if ((i220 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i76] = 0;
       i228 = i220;
       i88 = 68;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 1642;
       break;
      }
      i228 = HEAP16[i3 >> 1] | 0;
      i88 = 68;
      continue;
     }
    } else if ((i88 | 0) == 70) {
     i88 = 0;
     i220 = i2 + 58 | 0;
     i219 = i2 + 68 | 0;
     i71 = i2;
     i78 = i1 + 22 | 0;
     i75 = i2 + 8 | 0;
     i77 = i2 + 4 | 0;
     i218 = i2 + 32 | 0;
     i70 = i2 + 24 | 0;
     i69 = i2 + 16 | 0;
     i222 = i2 + 28 | 0;
     i224 = i229;
     while (1) {
      if ((i224 << 16 >> 16 | 0) == 45) {
       i88 = 1688;
       break;
      } else if ((i224 << 16 >> 16 | 0) == 60) {
       i88 = 1706;
       break;
      } else if ((i224 << 16 >> 16 | 0) == 0) {
       i88 = 1724;
       break;
      }
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, i224);
      HEAP32[i79 >> 2] = 28;
      i73 = HEAPU8[i220] | 0;
      do {
       if ((i73 & 2 | 0) == 0) {
        i74 = i71 + (HEAP32[i219 + 4 >> 2] | 0) | 0;
        i72 = HEAP32[i219 >> 2] | 0;
        if ((i72 & 1 | 0) == 0) {
         i309 = i72;
        } else {
         i309 = HEAP32[(HEAP32[i74 >> 2] | 0) + (i72 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i309 & 15](i74);
       } else {
        i74 = (HEAP16[i80 >> 1] | 0) == 10 & i73;
        i72 = HEAP32[i75 >> 2] | 0;
        i225 = i72 - 1 | 0;
        HEAP32[i75 >> 2] = i225;
        i221 = (i225 | 0) == 1;
        i225 = (HEAP32[i77 >> 2] | 0) + 1 | 0;
        HEAP32[i77 >> 2] = i225;
        HEAP16[i80 >> 1] = HEAPU8[i225] | 0;
        if ((i221 & 1 | i74 | 0) == 0) {
         break;
        }
        if ((i74 | 0) != 0) {
         HEAP32[i218 >> 2] = (HEAP32[i218 >> 2] | 0) + 1;
         i74 = HEAP32[i69 >> 2] | 0;
         if ((i74 | 0) == 0) {
          i310 = 0;
         } else {
          i310 = HEAP32[i74 + 4 >> 2] | 0;
         }
         HEAP32[i222 >> 2] = (HEAP32[i70 >> 2] | 0) + (1 - i72) + i310;
        }
        if (!i221) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 1742;
       break L110;
      }
      i73 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i73;
      if ((i73 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i78] = 0;
       i224 = i73;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 1742;
       break L110;
      }
      i224 = HEAP16[i3 >> 1] | 0;
     }
     if ((i88 | 0) == 1688) {
      i88 = 0;
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 45);
      HEAP32[i79 >> 2] = 29;
      i224 = HEAPU8[i220] | 0;
      do {
       if ((i224 & 2 | 0) == 0) {
        i76 = i71 + (HEAP32[i219 + 4 >> 2] | 0) | 0;
        i73 = HEAP32[i219 >> 2] | 0;
        if ((i73 & 1 | 0) == 0) {
         i311 = i73;
        } else {
         i311 = HEAP32[(HEAP32[i76 >> 2] | 0) + (i73 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i311 & 15](i76);
       } else {
        i76 = (HEAP16[i80 >> 1] | 0) == 10 & i224;
        i73 = HEAP32[i75 >> 2] | 0;
        i221 = i73 - 1 | 0;
        HEAP32[i75 >> 2] = i221;
        i72 = (i221 | 0) == 1;
        i221 = (HEAP32[i77 >> 2] | 0) + 1 | 0;
        HEAP32[i77 >> 2] = i221;
        HEAP16[i80 >> 1] = HEAPU8[i221] | 0;
        if ((i72 & 1 | i76 | 0) == 0) {
         break;
        }
        if ((i76 | 0) != 0) {
         HEAP32[i218 >> 2] = (HEAP32[i218 >> 2] | 0) + 1;
         i76 = HEAP32[i69 >> 2] | 0;
         if ((i76 | 0) == 0) {
          i312 = 0;
         } else {
          i312 = HEAP32[i76 + 4 >> 2] | 0;
         }
         HEAP32[i222 >> 2] = (HEAP32[i70 >> 2] | 0) + (1 - i73) + i312;
        }
        if (!i72) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 1705;
       break;
      }
      i224 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i224;
      if ((i224 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i78] = 0;
       i258 = i224;
       i88 = 1743;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 1705;
       break;
      }
      i258 = HEAP16[i3 >> 1] | 0;
      i88 = 1743;
      continue;
     } else if ((i88 | 0) == 1706) {
      i88 = 0;
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 60);
      HEAP32[i79 >> 2] = 31;
      i224 = HEAPU8[i220] | 0;
      do {
       if ((i224 & 2 | 0) == 0) {
        i72 = i71 + (HEAP32[i219 + 4 >> 2] | 0) | 0;
        i73 = HEAP32[i219 >> 2] | 0;
        if ((i73 & 1 | 0) == 0) {
         i313 = i73;
        } else {
         i313 = HEAP32[(HEAP32[i72 >> 2] | 0) + (i73 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i313 & 15](i72);
       } else {
        i72 = (HEAP16[i80 >> 1] | 0) == 10 & i224;
        i73 = HEAP32[i75 >> 2] | 0;
        i76 = i73 - 1 | 0;
        HEAP32[i75 >> 2] = i76;
        i221 = (i76 | 0) == 1;
        i76 = (HEAP32[i77 >> 2] | 0) + 1 | 0;
        HEAP32[i77 >> 2] = i76;
        HEAP16[i80 >> 1] = HEAPU8[i76] | 0;
        if ((i221 & 1 | i72 | 0) == 0) {
         break;
        }
        if ((i72 | 0) != 0) {
         HEAP32[i218 >> 2] = (HEAP32[i218 >> 2] | 0) + 1;
         i72 = HEAP32[i69 >> 2] | 0;
         if ((i72 | 0) == 0) {
          i314 = 0;
         } else {
          i314 = HEAP32[i72 + 4 >> 2] | 0;
         }
         HEAP32[i222 >> 2] = (HEAP32[i70 >> 2] | 0) + (1 - i73) + i314;
        }
        if (!i221) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 1723;
       break;
      }
      i70 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i70;
      if ((i70 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i78] = 0;
       i259 = i70;
       i88 = 1873;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 1723;
       break;
      }
      i259 = HEAP16[i3 >> 1] | 0;
      i88 = 1873;
      continue;
     } else if ((i88 | 0) == 1724) {
      i88 = 0;
      HEAP32[i79 >> 2] = 0;
      i232 = 0;
      i233 = 0;
      i88 = 79;
      continue;
     }
    } else if ((i88 | 0) == 71) {
     i88 = 0;
     i70 = i2 + 68 | 0;
     i222 = i2;
     i69 = i1 + 22 | 0;
     i218 = i2 + 8 | 0;
     i77 = i2 + 4 | 0;
     i75 = i2 + 32 | 0;
     i224 = i2 + 24 | 0;
     i219 = i2 + 16 | 0;
     i71 = i2 + 28 | 0;
     i220 = i213;
     while (1) {
      if ((i220 << 16 >> 16 | 0) == 60) {
       i88 = 1818;
       break;
      } else if ((i220 << 16 >> 16 | 0) == 62) {
       i88 = 1836;
       break;
      } else if ((i220 << 16 >> 16 | 0) == 0) {
       i88 = 1854;
       break;
      } else if ((i220 << 16 >> 16 | 0) != 45) {
       i88 = 1855;
       break;
      }
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 45);
      HEAP32[i79 >> 2] = 30;
      i221 = HEAPU8[i214] | 0;
      do {
       if ((i221 & 2 | 0) == 0) {
        i73 = i222 + (HEAP32[i70 + 4 >> 2] | 0) | 0;
        i72 = HEAP32[i70 >> 2] | 0;
        if ((i72 & 1 | 0) == 0) {
         i315 = i72;
        } else {
         i315 = HEAP32[(HEAP32[i73 >> 2] | 0) + (i72 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i315 & 15](i73);
       } else {
        i73 = (HEAP16[i80 >> 1] | 0) == 10 & i221;
        i72 = HEAP32[i218 >> 2] | 0;
        i76 = i72 - 1 | 0;
        HEAP32[i218 >> 2] = i76;
        i74 = (i76 | 0) == 1;
        i76 = (HEAP32[i77 >> 2] | 0) + 1 | 0;
        HEAP32[i77 >> 2] = i76;
        HEAP16[i80 >> 1] = HEAPU8[i76] | 0;
        if ((i74 & 1 | i73 | 0) == 0) {
         break;
        }
        if ((i73 | 0) != 0) {
         HEAP32[i75 >> 2] = (HEAP32[i75 >> 2] | 0) + 1;
         i73 = HEAP32[i219 >> 2] | 0;
         if ((i73 | 0) == 0) {
          i316 = 0;
         } else {
          i316 = HEAP32[i73 + 4 >> 2] | 0;
         }
         HEAP32[i71 >> 2] = (HEAP32[i224 >> 2] | 0) + (1 - i72) + i316;
        }
        if (!i74) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 1817;
       break L110;
      }
      i221 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i221;
      if ((i221 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i69] = 0;
       i220 = i221;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 1817;
       break L110;
      }
      i220 = HEAP16[i3 >> 1] | 0;
     }
     if ((i88 | 0) == 1818) {
      i88 = 0;
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 60);
      HEAP32[i79 >> 2] = 31;
      i78 = HEAPU8[i214] | 0;
      do {
       if ((i78 & 2 | 0) == 0) {
        i221 = i222 + (HEAP32[i70 + 4 >> 2] | 0) | 0;
        i74 = HEAP32[i70 >> 2] | 0;
        if ((i74 & 1 | 0) == 0) {
         i317 = i74;
        } else {
         i317 = HEAP32[(HEAP32[i221 >> 2] | 0) + (i74 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i317 & 15](i221);
       } else {
        i221 = (HEAP16[i80 >> 1] | 0) == 10 & i78;
        i74 = HEAP32[i218 >> 2] | 0;
        i72 = i74 - 1 | 0;
        HEAP32[i218 >> 2] = i72;
        i73 = (i72 | 0) == 1;
        i72 = (HEAP32[i77 >> 2] | 0) + 1 | 0;
        HEAP32[i77 >> 2] = i72;
        HEAP16[i80 >> 1] = HEAPU8[i72] | 0;
        if ((i73 & 1 | i221 | 0) == 0) {
         break;
        }
        if ((i221 | 0) != 0) {
         HEAP32[i75 >> 2] = (HEAP32[i75 >> 2] | 0) + 1;
         i221 = HEAP32[i219 >> 2] | 0;
         if ((i221 | 0) == 0) {
          i318 = 0;
         } else {
          i318 = HEAP32[i221 + 4 >> 2] | 0;
         }
         HEAP32[i71 >> 2] = (HEAP32[i224 >> 2] | 0) + (1 - i74) + i318;
        }
        if (!i73) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 1835;
       break;
      }
      i78 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i78;
      if ((i78 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i69] = 0;
       i259 = i78;
       i88 = 1873;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 1835;
       break;
      }
      i259 = HEAP16[i3 >> 1] | 0;
      i88 = 1873;
      continue;
     } else if ((i88 | 0) == 1836) {
      i88 = 0;
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 62);
      HEAP32[i79 >> 2] = 5;
      i78 = HEAPU8[i214] | 0;
      do {
       if ((i78 & 2 | 0) == 0) {
        i73 = i222 + (HEAP32[i70 + 4 >> 2] | 0) | 0;
        i74 = HEAP32[i70 >> 2] | 0;
        if ((i74 & 1 | 0) == 0) {
         i319 = i74;
        } else {
         i319 = HEAP32[(HEAP32[i73 >> 2] | 0) + (i74 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i319 & 15](i73);
       } else {
        i73 = (HEAP16[i80 >> 1] | 0) == 10 & i78;
        i74 = HEAP32[i218 >> 2] | 0;
        i221 = i74 - 1 | 0;
        HEAP32[i218 >> 2] = i221;
        i72 = (i221 | 0) == 1;
        i221 = (HEAP32[i77 >> 2] | 0) + 1 | 0;
        HEAP32[i77 >> 2] = i221;
        HEAP16[i80 >> 1] = HEAPU8[i221] | 0;
        if ((i72 & 1 | i73 | 0) == 0) {
         break;
        }
        if ((i73 | 0) != 0) {
         HEAP32[i75 >> 2] = (HEAP32[i75 >> 2] | 0) + 1;
         i73 = HEAP32[i219 >> 2] | 0;
         if ((i73 | 0) == 0) {
          i320 = 0;
         } else {
          i320 = HEAP32[i73 + 4 >> 2] | 0;
         }
         HEAP32[i71 >> 2] = (HEAP32[i224 >> 2] | 0) + (1 - i74) + i320;
        }
        if (!i72) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 1853;
       break;
      }
      i78 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i78;
      if ((i78 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i69] = 0;
       i227 = i78;
       i88 = 66;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 1853;
       break;
      }
      i227 = HEAP16[i3 >> 1] | 0;
      i88 = 66;
      continue;
     } else if ((i88 | 0) == 1854) {
      i88 = 0;
      HEAP32[i79 >> 2] = 0;
      i232 = 0;
      i233 = 0;
      i88 = 79;
      continue;
     } else if ((i88 | 0) == 1855) {
      i88 = 0;
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, i220);
      HEAP32[i79 >> 2] = 28;
      i78 = HEAPU8[i214] | 0;
      do {
       if ((i78 & 2 | 0) == 0) {
        i72 = i222 + (HEAP32[i70 + 4 >> 2] | 0) | 0;
        i74 = HEAP32[i70 >> 2] | 0;
        if ((i74 & 1 | 0) == 0) {
         i321 = i74;
        } else {
         i321 = HEAP32[(HEAP32[i72 >> 2] | 0) + (i74 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i321 & 15](i72);
       } else {
        i72 = (HEAP16[i80 >> 1] | 0) == 10 & i78;
        i74 = HEAP32[i218 >> 2] | 0;
        i73 = i74 - 1 | 0;
        HEAP32[i218 >> 2] = i73;
        i221 = (i73 | 0) == 1;
        i73 = (HEAP32[i77 >> 2] | 0) + 1 | 0;
        HEAP32[i77 >> 2] = i73;
        HEAP16[i80 >> 1] = HEAPU8[i73] | 0;
        if ((i221 & 1 | i72 | 0) == 0) {
         break;
        }
        if ((i72 | 0) != 0) {
         HEAP32[i75 >> 2] = (HEAP32[i75 >> 2] | 0) + 1;
         i72 = HEAP32[i219 >> 2] | 0;
         if ((i72 | 0) == 0) {
          i322 = 0;
         } else {
          i322 = HEAP32[i72 + 4 >> 2] | 0;
         }
         HEAP32[i71 >> 2] = (HEAP32[i224 >> 2] | 0) + (1 - i74) + i322;
        }
        if (!i221) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 1872;
       break;
      }
      i224 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i224;
      if ((i224 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i69] = 0;
       i229 = i224;
       i88 = 70;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 1872;
       break;
      }
      i229 = HEAP16[i3 >> 1] | 0;
      i88 = 70;
      continue;
     }
    } else if ((i88 | 0) == 72) {
     i88 = 0;
     i224 = i1 + 100 | 0;
     i71 = i1 + 108 | 0;
     i219 = i2 + 68 | 0;
     i75 = i2;
     i77 = i1 + 22 | 0;
     i218 = i2 + 8 | 0;
     i78 = i2 + 4 | 0;
     i70 = i2 + 32 | 0;
     i222 = i2 + 24 | 0;
     i220 = i2 + 16 | 0;
     i221 = i2 + 28 | 0;
     i74 = i224 | 0;
     i72 = i215;
     L598 : while (1) {
      switch (i72 << 16 >> 16) {
      case 32:
      case 10:
      case 9:
      case 12:
      case 62:
      case 47:
       {
        break L598;
        break;
       }
      default:
       {}
      }
      do {
       if ((i72 - 65 & 65535) >>> 0 < 26 >>> 0) {
        __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, i72);
        i73 = i72 + 32 & 65535;
        HEAP16[i57 >> 1] = i73;
        i76 = HEAP32[i71 >> 2] | 0;
        if ((i76 | 0) == (HEAP32[i216 >> 2] | 0)) {
         __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14appendSlowCaseItEEvOT_(i224, i57);
        } else {
         HEAP8[(HEAP32[i74 >> 2] | 0) + i76 | 0] = i73;
         HEAP32[i71 >> 2] = (HEAP32[i71 >> 2] | 0) + 1;
        }
        HEAP32[i79 >> 2] = 32;
        i73 = HEAPU8[i217] | 0;
        do {
         if ((i73 & 2 | 0) == 0) {
          i76 = i75 + (HEAP32[i219 + 4 >> 2] | 0) | 0;
          i225 = HEAP32[i219 >> 2] | 0;
          if ((i225 & 1 | 0) == 0) {
           i323 = i225;
          } else {
           i323 = HEAP32[(HEAP32[i76 >> 2] | 0) + (i225 - 1) >> 2] | 0;
          }
          FUNCTION_TABLE_vi[i323 & 15](i76);
         } else {
          i76 = (HEAP16[i80 >> 1] | 0) == 10 & i73;
          i225 = HEAP32[i218 >> 2] | 0;
          i324 = i225 - 1 | 0;
          HEAP32[i218 >> 2] = i324;
          i325 = (i324 | 0) == 1;
          i324 = (HEAP32[i78 >> 2] | 0) + 1 | 0;
          HEAP32[i78 >> 2] = i324;
          HEAP16[i80 >> 1] = HEAPU8[i324] | 0;
          if ((i325 & 1 | i76 | 0) == 0) {
           break;
          }
          if ((i76 | 0) != 0) {
           HEAP32[i70 >> 2] = (HEAP32[i70 >> 2] | 0) + 1;
           i76 = HEAP32[i220 >> 2] | 0;
           if ((i76 | 0) == 0) {
            i326 = 0;
           } else {
            i326 = HEAP32[i76 + 4 >> 2] | 0;
           }
           HEAP32[i221 >> 2] = (HEAP32[i222 >> 2] | 0) + (1 - i225) + i326;
          }
          if (!i325) {
           break;
          }
          __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
         }
        } while (0);
        if ((HEAP8[i82] & 1) != 0) {
         i88 = 1962;
         break L110;
        }
        i73 = HEAP16[i80 >> 1] | 0;
        HEAP16[i3 >> 1] = i73;
        if ((i73 & 65535) >>> 0 > 15 >>> 0) {
         HEAP8[i77] = 0;
         break;
        } else {
         if (__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0) {
          break;
         } else {
          i88 = 1962;
          break L110;
         }
        }
       } else {
        if ((i72 - 97 & 65535) >>> 0 >= 26 >>> 0) {
         i88 = 1985;
         break L598;
        }
        __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, i72);
        i73 = i72 & 255;
        HEAP8[i58] = i73;
        i325 = HEAP32[i71 >> 2] | 0;
        if ((i325 | 0) == (HEAP32[i216 >> 2] | 0)) {
         i225 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i224, i325 + 1 | 0, i58) | 0;
         HEAP8[(HEAP32[i74 >> 2] | 0) + (HEAP32[i71 >> 2] | 0) | 0] = HEAP8[i225] | 0;
        } else {
         HEAP8[(HEAP32[i74 >> 2] | 0) + i325 | 0] = i73;
        }
        HEAP32[i71 >> 2] = (HEAP32[i71 >> 2] | 0) + 1;
        HEAP32[i79 >> 2] = 32;
        i73 = HEAPU8[i217] | 0;
        do {
         if ((i73 & 2 | 0) == 0) {
          i325 = i75 + (HEAP32[i219 + 4 >> 2] | 0) | 0;
          i225 = HEAP32[i219 >> 2] | 0;
          if ((i225 & 1 | 0) == 0) {
           i327 = i225;
          } else {
           i327 = HEAP32[(HEAP32[i325 >> 2] | 0) + (i225 - 1) >> 2] | 0;
          }
          FUNCTION_TABLE_vi[i327 & 15](i325);
         } else {
          i325 = (HEAP16[i80 >> 1] | 0) == 10 & i73;
          i225 = HEAP32[i218 >> 2] | 0;
          i76 = i225 - 1 | 0;
          HEAP32[i218 >> 2] = i76;
          i324 = (i76 | 0) == 1;
          i76 = (HEAP32[i78 >> 2] | 0) + 1 | 0;
          HEAP32[i78 >> 2] = i76;
          HEAP16[i80 >> 1] = HEAPU8[i76] | 0;
          if ((i324 & 1 | i325 | 0) == 0) {
           break;
          }
          if ((i325 | 0) != 0) {
           HEAP32[i70 >> 2] = (HEAP32[i70 >> 2] | 0) + 1;
           i325 = HEAP32[i220 >> 2] | 0;
           if ((i325 | 0) == 0) {
            i328 = 0;
           } else {
            i328 = HEAP32[i325 + 4 >> 2] | 0;
           }
           HEAP32[i221 >> 2] = (HEAP32[i222 >> 2] | 0) + (1 - i225) + i328;
          }
          if (!i324) {
           break;
          }
          __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
         }
        } while (0);
        if ((HEAP8[i82] & 1) != 0) {
         i88 = 1984;
         break L110;
        }
        i73 = HEAP16[i80 >> 1] | 0;
        HEAP16[i3 >> 1] = i73;
        if ((i73 & 65535) >>> 0 > 15 >>> 0) {
         HEAP8[i77] = 0;
         break;
        } else {
         if (__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0) {
          break;
         } else {
          i88 = 1984;
          break L110;
         }
        }
       }
      } while (0);
      i72 = HEAP16[i3 >> 1] | 0;
     }
     if ((i88 | 0) == 1985) {
      i88 = 0;
      HEAP32[i79 >> 2] = 28;
      i229 = i72;
      i88 = 70;
      continue;
     }
     __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, i72);
     i74 = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9scriptTagE >> 2] | 0) + 12 >> 2] | 0;
     i224 = HEAP32[i71 >> 2] | 0;
     do {
      if ((i74 | 0) == 0) {
       if ((i224 | 0) == 0) {
        i88 = 1906;
       } else {
        i88 = 1924;
       }
      } else {
       if ((i224 | 0) != (HEAP32[i74 + 4 >> 2] | 0)) {
        i88 = 1924;
        break;
       }
       if ((i224 | 0) == 0) {
        i88 = 1906;
        break;
       }
       if (__ZN3WTF5equalEPKNS_10StringImplEPKhj(i74, HEAP32[i1 + 100 >> 2] | 0, i224) | 0) {
        i88 = 1906;
       } else {
        i88 = 1924;
       }
      }
     } while (0);
     if ((i88 | 0) == 1906) {
      i88 = 0;
      HEAP32[i79 >> 2] = 21;
      i224 = HEAPU8[i217] | 0;
      do {
       if ((i224 & 2 | 0) == 0) {
        i74 = i75 + (HEAP32[i219 + 4 >> 2] | 0) | 0;
        i71 = HEAP32[i219 >> 2] | 0;
        if ((i71 & 1 | 0) == 0) {
         i329 = i71;
        } else {
         i329 = HEAP32[(HEAP32[i74 >> 2] | 0) + (i71 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i329 & 15](i74);
       } else {
        i74 = (HEAP16[i80 >> 1] | 0) == 10 & i224;
        i71 = HEAP32[i218 >> 2] | 0;
        i72 = i71 - 1 | 0;
        HEAP32[i218 >> 2] = i72;
        i69 = (i72 | 0) == 1;
        i72 = (HEAP32[i78 >> 2] | 0) + 1 | 0;
        HEAP32[i78 >> 2] = i72;
        HEAP16[i80 >> 1] = HEAPU8[i72] | 0;
        if ((i69 & 1 | i74 | 0) == 0) {
         break;
        }
        if ((i74 | 0) != 0) {
         HEAP32[i70 >> 2] = (HEAP32[i70 >> 2] | 0) + 1;
         i74 = HEAP32[i220 >> 2] | 0;
         if ((i74 | 0) == 0) {
          i330 = 0;
         } else {
          i330 = HEAP32[i74 + 4 >> 2] | 0;
         }
         HEAP32[i221 >> 2] = (HEAP32[i222 >> 2] | 0) + (1 - i71) + i330;
        }
        if (!i69) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 1923;
       break;
      }
      i224 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i224;
      if ((i224 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i77] = 0;
       i228 = i224;
       i88 = 68;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 1923;
       break;
      }
      i228 = HEAP16[i3 >> 1] | 0;
      i88 = 68;
      continue;
     } else if ((i88 | 0) == 1924) {
      i88 = 0;
      HEAP32[i79 >> 2] = 28;
      i224 = HEAPU8[i217] | 0;
      do {
       if ((i224 & 2 | 0) == 0) {
        i69 = i75 + (HEAP32[i219 + 4 >> 2] | 0) | 0;
        i71 = HEAP32[i219 >> 2] | 0;
        if ((i71 & 1 | 0) == 0) {
         i331 = i71;
        } else {
         i331 = HEAP32[(HEAP32[i69 >> 2] | 0) + (i71 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i331 & 15](i69);
       } else {
        i69 = (HEAP16[i80 >> 1] | 0) == 10 & i224;
        i71 = HEAP32[i218 >> 2] | 0;
        i74 = i71 - 1 | 0;
        HEAP32[i218 >> 2] = i74;
        i72 = (i74 | 0) == 1;
        i74 = (HEAP32[i78 >> 2] | 0) + 1 | 0;
        HEAP32[i78 >> 2] = i74;
        HEAP16[i80 >> 1] = HEAPU8[i74] | 0;
        if ((i72 & 1 | i69 | 0) == 0) {
         break;
        }
        if ((i69 | 0) != 0) {
         HEAP32[i70 >> 2] = (HEAP32[i70 >> 2] | 0) + 1;
         i69 = HEAP32[i220 >> 2] | 0;
         if ((i69 | 0) == 0) {
          i332 = 0;
         } else {
          i332 = HEAP32[i69 + 4 >> 2] | 0;
         }
         HEAP32[i221 >> 2] = (HEAP32[i222 >> 2] | 0) + (1 - i71) + i332;
        }
        if (!i72) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 1941;
       break;
      }
      i222 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i222;
      if ((i222 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i77] = 0;
       i229 = i222;
       i88 = 70;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 1941;
       break;
      }
      i229 = HEAP16[i3 >> 1] | 0;
      i88 = 70;
      continue;
     }
    } else if ((i88 | 0) == 73) {
     i88 = 0;
     i333 = i203 | 0;
     i222 = i67 | 0;
     i221 = i2 + 68 | 0;
     i220 = i2;
     i70 = i1 + 22 | 0;
     i78 = i2 + 8 | 0;
     i218 = i2 + 4 | 0;
     i224 = i2 + 32 | 0;
     i219 = i2 + 24 | 0;
     i75 = i2 + 16 | 0;
     i72 = i2 + 28 | 0;
     i71 = i202;
     L708 : while (1) {
      do {
       if ((i71 - 65 & 65535) >>> 0 < 26 >>> 0) {
        i69 = i71 & 255;
        HEAP8[i50] = i69;
        i74 = HEAP32[i204 >> 2] | 0;
        if ((i74 | 0) == (HEAP32[i205 >> 2] | 0)) {
         i73 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i203, i74 + 1 | 0, i50) | 0;
         HEAP8[(HEAP32[i333 >> 2] | 0) + (HEAP32[i204 >> 2] | 0) | 0] = HEAP8[i73] | 0;
        } else {
         HEAP8[(HEAP32[i333 >> 2] | 0) + i74 | 0] = i69;
        }
        HEAP32[i204 >> 2] = (HEAP32[i204 >> 2] | 0) + 1;
        i69 = i71 + 32 & 255;
        HEAP8[i6] = i69;
        i74 = HEAP32[i68 >> 2] | 0;
        if ((i74 | 0) == (HEAP32[i206 >> 2] | 0)) {
         i73 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i67, i74 + 1 | 0, i6) | 0;
         HEAP8[(HEAP32[i222 >> 2] | 0) + (HEAP32[i68 >> 2] | 0) | 0] = HEAP8[i73] | 0;
        } else {
         HEAP8[(HEAP32[i222 >> 2] | 0) + i74 | 0] = i69;
        }
        HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 1;
        HEAP32[i79 >> 2] = 26;
        i69 = HEAPU8[i207] | 0;
        do {
         if ((i69 & 2 | 0) == 0) {
          i74 = i220 + (HEAP32[i221 + 4 >> 2] | 0) | 0;
          i73 = HEAP32[i221 >> 2] | 0;
          if ((i73 & 1 | 0) == 0) {
           i334 = i73;
          } else {
           i334 = HEAP32[(HEAP32[i74 >> 2] | 0) + (i73 - 1) >> 2] | 0;
          }
          FUNCTION_TABLE_vi[i334 & 15](i74);
         } else {
          i74 = (HEAP16[i80 >> 1] | 0) == 10 & i69;
          i73 = HEAP32[i78 >> 2] | 0;
          i324 = i73 - 1 | 0;
          HEAP32[i78 >> 2] = i324;
          i225 = (i324 | 0) == 1;
          i324 = (HEAP32[i218 >> 2] | 0) + 1 | 0;
          HEAP32[i218 >> 2] = i324;
          HEAP16[i80 >> 1] = HEAPU8[i324] | 0;
          if ((i225 & 1 | i74 | 0) == 0) {
           break;
          }
          if ((i74 | 0) != 0) {
           HEAP32[i224 >> 2] = (HEAP32[i224 >> 2] | 0) + 1;
           i74 = HEAP32[i75 >> 2] | 0;
           if ((i74 | 0) == 0) {
            i335 = 0;
           } else {
            i335 = HEAP32[i74 + 4 >> 2] | 0;
           }
           HEAP32[i72 >> 2] = (HEAP32[i219 >> 2] | 0) + (1 - i73) + i335;
          }
          if (!i225) {
           break;
          }
          __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
         }
        } while (0);
        if ((HEAP8[i82] & 1) != 0) {
         i88 = 1517;
         break L110;
        }
        i69 = HEAP16[i80 >> 1] | 0;
        HEAP16[i3 >> 1] = i69;
        if ((i69 & 65535) >>> 0 > 15 >>> 0) {
         HEAP8[i70] = 0;
         break;
        } else {
         if (__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0) {
          break;
         } else {
          i88 = 1517;
          break L110;
         }
        }
       } else {
        if ((i71 - 97 & 65535) >>> 0 >= 26 >>> 0) {
         break L708;
        }
        i69 = i71 & 255;
        HEAP8[i51] = i69;
        i225 = HEAP32[i204 >> 2] | 0;
        if ((i225 | 0) == (HEAP32[i205 >> 2] | 0)) {
         i73 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i203, i225 + 1 | 0, i51) | 0;
         HEAP8[(HEAP32[i333 >> 2] | 0) + (HEAP32[i204 >> 2] | 0) | 0] = HEAP8[i73] | 0;
        } else {
         HEAP8[(HEAP32[i333 >> 2] | 0) + i225 | 0] = i69;
        }
        HEAP32[i204 >> 2] = (HEAP32[i204 >> 2] | 0) + 1;
        HEAP8[i5] = i69;
        i225 = HEAP32[i68 >> 2] | 0;
        if ((i225 | 0) == (HEAP32[i206 >> 2] | 0)) {
         i73 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i67, i225 + 1 | 0, i5) | 0;
         HEAP8[(HEAP32[i222 >> 2] | 0) + (HEAP32[i68 >> 2] | 0) | 0] = HEAP8[i73] | 0;
        } else {
         HEAP8[(HEAP32[i222 >> 2] | 0) + i225 | 0] = i69;
        }
        HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 1;
        HEAP32[i79 >> 2] = 26;
        i69 = HEAPU8[i207] | 0;
        do {
         if ((i69 & 2 | 0) == 0) {
          i225 = i220 + (HEAP32[i221 + 4 >> 2] | 0) | 0;
          i73 = HEAP32[i221 >> 2] | 0;
          if ((i73 & 1 | 0) == 0) {
           i336 = i73;
          } else {
           i336 = HEAP32[(HEAP32[i225 >> 2] | 0) + (i73 - 1) >> 2] | 0;
          }
          FUNCTION_TABLE_vi[i336 & 15](i225);
         } else {
          i225 = (HEAP16[i80 >> 1] | 0) == 10 & i69;
          i73 = HEAP32[i78 >> 2] | 0;
          i74 = i73 - 1 | 0;
          HEAP32[i78 >> 2] = i74;
          i324 = (i74 | 0) == 1;
          i74 = (HEAP32[i218 >> 2] | 0) + 1 | 0;
          HEAP32[i218 >> 2] = i74;
          HEAP16[i80 >> 1] = HEAPU8[i74] | 0;
          if ((i324 & 1 | i225 | 0) == 0) {
           break;
          }
          if ((i225 | 0) != 0) {
           HEAP32[i224 >> 2] = (HEAP32[i224 >> 2] | 0) + 1;
           i225 = HEAP32[i75 >> 2] | 0;
           if ((i225 | 0) == 0) {
            i337 = 0;
           } else {
            i337 = HEAP32[i225 + 4 >> 2] | 0;
           }
           HEAP32[i72 >> 2] = (HEAP32[i219 >> 2] | 0) + (1 - i73) + i337;
          }
          if (!i324) {
           break;
          }
          __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
         }
        } while (0);
        if ((HEAP8[i82] & 1) != 0) {
         i88 = 1542;
         break L110;
        }
        i69 = HEAP16[i80 >> 1] | 0;
        HEAP16[i3 >> 1] = i69;
        if ((i69 & 65535) >>> 0 > 15 >>> 0) {
         HEAP8[i70] = 0;
         break;
        } else {
         if (__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0) {
          break;
         } else {
          i88 = 1542;
          break L110;
         }
        }
       }
      } while (0);
      i71 = HEAP16[i3 >> 1] | 0;
     }
     L772 : do {
      switch (i71 << 16 >> 16) {
      case 32:
      case 10:
      case 9:
      case 12:
       {
        i219 = HEAP32[i68 >> 2] | 0;
        if ((i219 | 0) != (HEAP32[i1 + 32 >> 2] | 0)) {
         break L772;
        }
        i72 = i1 + 144 | 0;
        i75 = i1 + 24 | 0;
        i224 = 0;
        while (1) {
         if (i224 >>> 0 >= i219 >>> 0) {
          break;
         }
         if ((HEAPU8[(HEAP32[i72 >> 2] | 0) + i224 | 0] | 0) == (HEAPU16[(HEAP32[i75 >> 2] | 0) + (i224 << 1) >> 1] | 0)) {
          i224 = i224 + 1 | 0;
         } else {
          break L772;
         }
        }
        i224 = i71 & 255;
        HEAP8[i52] = i224;
        i75 = HEAP32[i204 >> 2] | 0;
        if ((i75 | 0) == (HEAP32[i205 >> 2] | 0)) {
         i72 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i203, i75 + 1 | 0, i52) | 0;
         HEAP8[(HEAP32[i333 >> 2] | 0) + (HEAP32[i204 >> 2] | 0) | 0] = HEAP8[i72] | 0;
        } else {
         HEAP8[(HEAP32[i333 >> 2] | 0) + i75 | 0] = i224;
        }
        HEAP32[i204 >> 2] = (HEAP32[i204 >> 2] | 0) + 1;
        HEAP32[i79 >> 2] = 33;
        if (__ZN7WebCore13HTMLTokenizer19flushBufferedEndTagERNS_15SegmentedStringE(i1, i2) | 0) {
         i83 = 1;
         i88 = 4243;
         break L110;
        }
        if ((HEAP8[i82] & 1) != 0) {
         i88 = 1557;
         break L110;
        }
        i224 = HEAP16[i80 >> 1] | 0;
        HEAP16[i3 >> 1] = i224;
        if ((i224 & 65535) >>> 0 > 15 >>> 0) {
         HEAP8[i70] = 0;
         i236 = i224;
         i237 = 0;
         i88 = 92;
         continue L110;
        }
        if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
         i88 = 1557;
         break L110;
        }
        i236 = HEAP16[i3 >> 1] | 0;
        i237 = 0;
        i88 = 92;
        continue L110;
        break;
       }
      case 47:
       {
        i224 = HEAP32[i68 >> 2] | 0;
        if ((i224 | 0) != (HEAP32[i1 + 32 >> 2] | 0)) {
         break L772;
        }
        i75 = i1 + 144 | 0;
        i72 = i1 + 24 | 0;
        i219 = 0;
        while (1) {
         if (i219 >>> 0 >= i224 >>> 0) {
          break;
         }
         if ((HEAPU8[(HEAP32[i75 >> 2] | 0) + i219 | 0] | 0) == (HEAPU16[(HEAP32[i72 >> 2] | 0) + (i219 << 1) >> 1] | 0)) {
          i219 = i219 + 1 | 0;
         } else {
          break L772;
         }
        }
        HEAP8[i53] = 47;
        i219 = HEAP32[i204 >> 2] | 0;
        if ((i219 | 0) == (HEAP32[i205 >> 2] | 0)) {
         i72 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i203, i219 + 1 | 0, i53) | 0;
         HEAP8[(HEAP32[i333 >> 2] | 0) + (HEAP32[i204 >> 2] | 0) | 0] = HEAP8[i72] | 0;
        } else {
         HEAP8[(HEAP32[i333 >> 2] | 0) + i219 | 0] = 47;
        }
        HEAP32[i204 >> 2] = (HEAP32[i204 >> 2] | 0) + 1;
        HEAP32[i79 >> 2] = 42;
        if (__ZN7WebCore13HTMLTokenizer19flushBufferedEndTagERNS_15SegmentedStringE(i1, i2) | 0) {
         i83 = 1;
         i88 = 4245;
         break L110;
        }
        if ((HEAP8[i82] & 1) != 0) {
         i88 = 1571;
         break L110;
        }
        i219 = HEAP16[i80 >> 1] | 0;
        HEAP16[i3 >> 1] = i219;
        if ((i219 & 65535) >>> 0 > 15 >>> 0) {
         HEAP8[i70] = 0;
         i264 = i219;
         i265 = 0;
         i88 = 2709;
         continue L110;
        }
        if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
         i88 = 1571;
         break L110;
        }
        i264 = HEAP16[i3 >> 1] | 0;
        i265 = 0;
        i88 = 2709;
        continue L110;
        break;
       }
      case 62:
       {
        i219 = HEAP32[i68 >> 2] | 0;
        if ((i219 | 0) != (HEAP32[i1 + 32 >> 2] | 0)) {
         break L772;
        }
        i72 = i1 + 144 | 0;
        i75 = i1 + 24 | 0;
        i224 = 0;
        while (1) {
         if (i224 >>> 0 >= i219 >>> 0) {
          i88 = 1576;
          break L110;
         }
         if ((HEAPU8[(HEAP32[i72 >> 2] | 0) + i224 | 0] | 0) == (HEAPU16[(HEAP32[i75 >> 2] | 0) + (i224 << 1) >> 1] | 0)) {
          i224 = i224 + 1 | 0;
         } else {
          break;
         }
        }
        break;
       }
      default:
       {}
      }
     } while (0);
     __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 60);
     __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 47);
     i70 = HEAP32[i66 >> 2] | 0;
     i224 = i70 + 16 | 0;
     i75 = i1 + 100 | 0;
     i72 = HEAP32[i75 >> 2] | 0;
     i219 = HEAP32[i204 >> 2] | 0;
     i218 = i70 + 24 | 0;
     i78 = HEAP32[i218 >> 2] | 0;
     i221 = i78 + i219 | 0;
     i220 = HEAP32[i70 + 20 >> 2] | 0;
     if (i221 >>> 0 > i220 >>> 0) {
      i70 = i220 + 1 + (i220 >>> 2) | 0;
      i220 = i70 >>> 0 > 16 >>> 0 ? i70 : 16;
      __ZN3WTF6VectorItLj256ENS_15CrashOnOverflowEE15reserveCapacityEj(i224, i220 >>> 0 > i221 >>> 0 ? i220 : i221);
      i338 = HEAP32[i218 >> 2] | 0;
     } else {
      i338 = i78;
     }
     if (i221 >>> 0 < i338 >>> 0) {
      i88 = 1583;
      break;
     }
     i78 = HEAP32[i224 >> 2] | 0;
     if ((i219 | 0) != 0) {
      i224 = 0;
      while (1) {
       HEAP16[i78 + (i224 + i338 << 1) >> 1] = HEAPU8[i72 + i224 | 0] | 0;
       i224 = i224 + 1 | 0;
       if (i224 >>> 0 >= i219 >>> 0) {
        break;
       }
      }
     }
     HEAP32[i218 >> 2] = i221;
     do {
      if ((HEAP32[i206 >> 2] | 0) != 0) {
       if ((HEAP32[i68 >> 2] | 0) != 0) {
        HEAP32[i68 >> 2] = 0;
       }
       i219 = HEAP32[i222 >> 2] | 0;
       i224 = i1 + 156 | 0;
       if ((i224 | 0) == (i219 | 0) | (i219 | 0) == 0) {
        i339 = i219;
       } else {
        HEAP32[i222 >> 2] = 0;
        HEAP32[i206 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i219);
        i339 = HEAP32[i222 >> 2] | 0;
       }
       if ((i339 | 0) != 0) {
        break;
       }
       HEAP32[i222 >> 2] = i224;
       HEAP32[i206 >> 2] = 32;
      }
     } while (0);
     do {
      if ((HEAP32[i205 >> 2] | 0) != 0) {
       if ((HEAP32[i204 >> 2] | 0) != 0) {
        HEAP32[i204 >> 2] = 0;
       }
       i222 = HEAP32[i75 >> 2] | 0;
       i221 = i1 + 112 | 0;
       if ((i221 | 0) == (i222 | 0) | (i222 | 0) == 0) {
        i340 = i222;
       } else {
        HEAP32[i75 >> 2] = 0;
        HEAP32[i205 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i222);
        i340 = HEAP32[i75 >> 2] | 0;
       }
       if ((i340 | 0) != 0) {
        break;
       }
       HEAP32[i75 >> 2] = i221;
       HEAP32[i205 >> 2] = 32;
      }
     } while (0);
     HEAP32[i79 >> 2] = 21;
     i228 = i71;
     i88 = 68;
     continue;
    } else if ((i88 | 0) == 74) {
     i88 = 0;
     i341 = i195 | 0;
     i75 = i67 | 0;
     i221 = i2 + 68 | 0;
     i222 = i2;
     i218 = i1 + 22 | 0;
     i224 = i2 + 8 | 0;
     i219 = i2 + 4 | 0;
     i72 = i2 + 32 | 0;
     i78 = i2 + 24 | 0;
     i220 = i2 + 16 | 0;
     i70 = i2 + 28 | 0;
     i77 = i194;
     L840 : while (1) {
      do {
       if ((i77 - 65 & 65535) >>> 0 < 26 >>> 0) {
        i69 = i77 & 255;
        HEAP8[i41] = i69;
        i324 = HEAP32[i196 >> 2] | 0;
        if ((i324 | 0) == (HEAP32[i197 >> 2] | 0)) {
         i73 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i195, i324 + 1 | 0, i41) | 0;
         HEAP8[(HEAP32[i341 >> 2] | 0) + (HEAP32[i196 >> 2] | 0) | 0] = HEAP8[i73] | 0;
        } else {
         HEAP8[(HEAP32[i341 >> 2] | 0) + i324 | 0] = i69;
        }
        HEAP32[i196 >> 2] = (HEAP32[i196 >> 2] | 0) + 1;
        i69 = i77 + 32 & 255;
        HEAP8[i10] = i69;
        i324 = HEAP32[i68 >> 2] | 0;
        if ((i324 | 0) == (HEAP32[i198 >> 2] | 0)) {
         i73 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i67, i324 + 1 | 0, i10) | 0;
         HEAP8[(HEAP32[i75 >> 2] | 0) + (HEAP32[i68 >> 2] | 0) | 0] = HEAP8[i73] | 0;
        } else {
         HEAP8[(HEAP32[i75 >> 2] | 0) + i324 | 0] = i69;
        }
        HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 1;
        HEAP32[i79 >> 2] = 18;
        i69 = HEAPU8[i199] | 0;
        do {
         if ((i69 & 2 | 0) == 0) {
          i324 = i222 + (HEAP32[i221 + 4 >> 2] | 0) | 0;
          i73 = HEAP32[i221 >> 2] | 0;
          if ((i73 & 1 | 0) == 0) {
           i342 = i73;
          } else {
           i342 = HEAP32[(HEAP32[i324 >> 2] | 0) + (i73 - 1) >> 2] | 0;
          }
          FUNCTION_TABLE_vi[i342 & 15](i324);
         } else {
          i324 = (HEAP16[i80 >> 1] | 0) == 10 & i69;
          i73 = HEAP32[i224 >> 2] | 0;
          i225 = i73 - 1 | 0;
          HEAP32[i224 >> 2] = i225;
          i74 = (i225 | 0) == 1;
          i225 = (HEAP32[i219 >> 2] | 0) + 1 | 0;
          HEAP32[i219 >> 2] = i225;
          HEAP16[i80 >> 1] = HEAPU8[i225] | 0;
          if ((i74 & 1 | i324 | 0) == 0) {
           break;
          }
          if ((i324 | 0) != 0) {
           HEAP32[i72 >> 2] = (HEAP32[i72 >> 2] | 0) + 1;
           i324 = HEAP32[i220 >> 2] | 0;
           if ((i324 | 0) == 0) {
            i343 = 0;
           } else {
            i343 = HEAP32[i324 + 4 >> 2] | 0;
           }
           HEAP32[i70 >> 2] = (HEAP32[i78 >> 2] | 0) + (1 - i73) + i343;
          }
          if (!i74) {
           break;
          }
          __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
         }
        } while (0);
        if ((HEAP8[i82] & 1) != 0) {
         i88 = 1046;
         break L110;
        }
        i69 = HEAP16[i80 >> 1] | 0;
        HEAP16[i3 >> 1] = i69;
        if ((i69 & 65535) >>> 0 > 15 >>> 0) {
         HEAP8[i218] = 0;
         break;
        } else {
         if (__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0) {
          break;
         } else {
          i88 = 1046;
          break L110;
         }
        }
       } else {
        if ((i77 - 97 & 65535) >>> 0 >= 26 >>> 0) {
         break L840;
        }
        i69 = i77 & 255;
        HEAP8[i42] = i69;
        i74 = HEAP32[i196 >> 2] | 0;
        if ((i74 | 0) == (HEAP32[i197 >> 2] | 0)) {
         i73 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i195, i74 + 1 | 0, i42) | 0;
         HEAP8[(HEAP32[i341 >> 2] | 0) + (HEAP32[i196 >> 2] | 0) | 0] = HEAP8[i73] | 0;
        } else {
         HEAP8[(HEAP32[i341 >> 2] | 0) + i74 | 0] = i69;
        }
        HEAP32[i196 >> 2] = (HEAP32[i196 >> 2] | 0) + 1;
        HEAP8[i9] = i69;
        i74 = HEAP32[i68 >> 2] | 0;
        if ((i74 | 0) == (HEAP32[i198 >> 2] | 0)) {
         i73 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i67, i74 + 1 | 0, i9) | 0;
         HEAP8[(HEAP32[i75 >> 2] | 0) + (HEAP32[i68 >> 2] | 0) | 0] = HEAP8[i73] | 0;
        } else {
         HEAP8[(HEAP32[i75 >> 2] | 0) + i74 | 0] = i69;
        }
        HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 1;
        HEAP32[i79 >> 2] = 18;
        i69 = HEAPU8[i199] | 0;
        do {
         if ((i69 & 2 | 0) == 0) {
          i74 = i222 + (HEAP32[i221 + 4 >> 2] | 0) | 0;
          i73 = HEAP32[i221 >> 2] | 0;
          if ((i73 & 1 | 0) == 0) {
           i344 = i73;
          } else {
           i344 = HEAP32[(HEAP32[i74 >> 2] | 0) + (i73 - 1) >> 2] | 0;
          }
          FUNCTION_TABLE_vi[i344 & 15](i74);
         } else {
          i74 = (HEAP16[i80 >> 1] | 0) == 10 & i69;
          i73 = HEAP32[i224 >> 2] | 0;
          i324 = i73 - 1 | 0;
          HEAP32[i224 >> 2] = i324;
          i225 = (i324 | 0) == 1;
          i324 = (HEAP32[i219 >> 2] | 0) + 1 | 0;
          HEAP32[i219 >> 2] = i324;
          HEAP16[i80 >> 1] = HEAPU8[i324] | 0;
          if ((i225 & 1 | i74 | 0) == 0) {
           break;
          }
          if ((i74 | 0) != 0) {
           HEAP32[i72 >> 2] = (HEAP32[i72 >> 2] | 0) + 1;
           i74 = HEAP32[i220 >> 2] | 0;
           if ((i74 | 0) == 0) {
            i345 = 0;
           } else {
            i345 = HEAP32[i74 + 4 >> 2] | 0;
           }
           HEAP32[i70 >> 2] = (HEAP32[i78 >> 2] | 0) + (1 - i73) + i345;
          }
          if (!i225) {
           break;
          }
          __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
         }
        } while (0);
        if ((HEAP8[i82] & 1) != 0) {
         i88 = 1071;
         break L110;
        }
        i69 = HEAP16[i80 >> 1] | 0;
        HEAP16[i3 >> 1] = i69;
        if ((i69 & 65535) >>> 0 > 15 >>> 0) {
         HEAP8[i218] = 0;
         break;
        } else {
         if (__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0) {
          break;
         } else {
          i88 = 1071;
          break L110;
         }
        }
       }
      } while (0);
      i77 = HEAP16[i3 >> 1] | 0;
     }
     L904 : do {
      switch (i77 << 16 >> 16) {
      case 32:
      case 10:
      case 9:
      case 12:
       {
        i78 = HEAP32[i68 >> 2] | 0;
        if ((i78 | 0) != (HEAP32[i1 + 32 >> 2] | 0)) {
         break L904;
        }
        i70 = i1 + 144 | 0;
        i220 = i1 + 24 | 0;
        i72 = 0;
        while (1) {
         if (i72 >>> 0 >= i78 >>> 0) {
          break;
         }
         if ((HEAPU8[(HEAP32[i70 >> 2] | 0) + i72 | 0] | 0) == (HEAPU16[(HEAP32[i220 >> 2] | 0) + (i72 << 1) >> 1] | 0)) {
          i72 = i72 + 1 | 0;
         } else {
          break L904;
         }
        }
        i72 = i77 & 255;
        HEAP8[i43] = i72;
        i220 = HEAP32[i196 >> 2] | 0;
        if ((i220 | 0) == (HEAP32[i197 >> 2] | 0)) {
         i70 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i195, i220 + 1 | 0, i43) | 0;
         HEAP8[(HEAP32[i341 >> 2] | 0) + (HEAP32[i196 >> 2] | 0) | 0] = HEAP8[i70] | 0;
        } else {
         HEAP8[(HEAP32[i341 >> 2] | 0) + i220 | 0] = i72;
        }
        HEAP32[i196 >> 2] = (HEAP32[i196 >> 2] | 0) + 1;
        HEAP32[i79 >> 2] = 33;
        if (__ZN7WebCore13HTMLTokenizer19flushBufferedEndTagERNS_15SegmentedStringE(i1, i2) | 0) {
         i83 = 1;
         i88 = 4219;
         break L110;
        }
        if ((HEAP8[i82] & 1) != 0) {
         i88 = 1086;
         break L110;
        }
        i72 = HEAP16[i80 >> 1] | 0;
        HEAP16[i3 >> 1] = i72;
        if ((i72 & 65535) >>> 0 > 15 >>> 0) {
         HEAP8[i218] = 0;
         i236 = i72;
         i237 = 0;
         i88 = 92;
         continue L110;
        }
        if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
         i88 = 1086;
         break L110;
        }
        i236 = HEAP16[i3 >> 1] | 0;
        i237 = 0;
        i88 = 92;
        continue L110;
        break;
       }
      case 47:
       {
        i72 = HEAP32[i68 >> 2] | 0;
        if ((i72 | 0) != (HEAP32[i1 + 32 >> 2] | 0)) {
         break L904;
        }
        i220 = i1 + 144 | 0;
        i70 = i1 + 24 | 0;
        i78 = 0;
        while (1) {
         if (i78 >>> 0 >= i72 >>> 0) {
          break;
         }
         if ((HEAPU8[(HEAP32[i220 >> 2] | 0) + i78 | 0] | 0) == (HEAPU16[(HEAP32[i70 >> 2] | 0) + (i78 << 1) >> 1] | 0)) {
          i78 = i78 + 1 | 0;
         } else {
          break L904;
         }
        }
        HEAP8[i44] = 47;
        i78 = HEAP32[i196 >> 2] | 0;
        if ((i78 | 0) == (HEAP32[i197 >> 2] | 0)) {
         i70 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i195, i78 + 1 | 0, i44) | 0;
         HEAP8[(HEAP32[i341 >> 2] | 0) + (HEAP32[i196 >> 2] | 0) | 0] = HEAP8[i70] | 0;
        } else {
         HEAP8[(HEAP32[i341 >> 2] | 0) + i78 | 0] = 47;
        }
        HEAP32[i196 >> 2] = (HEAP32[i196 >> 2] | 0) + 1;
        HEAP32[i79 >> 2] = 42;
        if (__ZN7WebCore13HTMLTokenizer19flushBufferedEndTagERNS_15SegmentedStringE(i1, i2) | 0) {
         i83 = 1;
         i88 = 4221;
         break L110;
        }
        if ((HEAP8[i82] & 1) != 0) {
         i88 = 1100;
         break L110;
        }
        i78 = HEAP16[i80 >> 1] | 0;
        HEAP16[i3 >> 1] = i78;
        if ((i78 & 65535) >>> 0 > 15 >>> 0) {
         HEAP8[i218] = 0;
         i264 = i78;
         i265 = 0;
         i88 = 2709;
         continue L110;
        }
        if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
         i88 = 1100;
         break L110;
        }
        i264 = HEAP16[i3 >> 1] | 0;
        i265 = 0;
        i88 = 2709;
        continue L110;
        break;
       }
      case 62:
       {
        i78 = HEAP32[i68 >> 2] | 0;
        if ((i78 | 0) != (HEAP32[i1 + 32 >> 2] | 0)) {
         break L904;
        }
        i70 = i1 + 144 | 0;
        i220 = i1 + 24 | 0;
        i72 = 0;
        while (1) {
         if (i72 >>> 0 >= i78 >>> 0) {
          i88 = 1105;
          break L110;
         }
         if ((HEAPU8[(HEAP32[i70 >> 2] | 0) + i72 | 0] | 0) == (HEAPU16[(HEAP32[i220 >> 2] | 0) + (i72 << 1) >> 1] | 0)) {
          i72 = i72 + 1 | 0;
         } else {
          break;
         }
        }
        break;
       }
      default:
       {}
      }
     } while (0);
     __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 60);
     __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 47);
     i218 = HEAP32[i66 >> 2] | 0;
     i72 = i218 + 16 | 0;
     i220 = i1 + 100 | 0;
     i70 = HEAP32[i220 >> 2] | 0;
     i78 = HEAP32[i196 >> 2] | 0;
     i219 = i218 + 24 | 0;
     i224 = HEAP32[i219 >> 2] | 0;
     i221 = i224 + i78 | 0;
     i222 = HEAP32[i218 + 20 >> 2] | 0;
     if (i221 >>> 0 > i222 >>> 0) {
      i218 = i222 + 1 + (i222 >>> 2) | 0;
      i222 = i218 >>> 0 > 16 >>> 0 ? i218 : 16;
      __ZN3WTF6VectorItLj256ENS_15CrashOnOverflowEE15reserveCapacityEj(i72, i222 >>> 0 > i221 >>> 0 ? i222 : i221);
      i346 = HEAP32[i219 >> 2] | 0;
     } else {
      i346 = i224;
     }
     if (i221 >>> 0 < i346 >>> 0) {
      i88 = 1112;
      break;
     }
     i224 = HEAP32[i72 >> 2] | 0;
     if ((i78 | 0) != 0) {
      i72 = 0;
      while (1) {
       HEAP16[i224 + (i72 + i346 << 1) >> 1] = HEAPU8[i70 + i72 | 0] | 0;
       i72 = i72 + 1 | 0;
       if (i72 >>> 0 >= i78 >>> 0) {
        break;
       }
      }
     }
     HEAP32[i219 >> 2] = i221;
     do {
      if ((HEAP32[i198 >> 2] | 0) != 0) {
       if ((HEAP32[i68 >> 2] | 0) != 0) {
        HEAP32[i68 >> 2] = 0;
       }
       i78 = HEAP32[i75 >> 2] | 0;
       i72 = i1 + 156 | 0;
       if ((i72 | 0) == (i78 | 0) | (i78 | 0) == 0) {
        i347 = i78;
       } else {
        HEAP32[i75 >> 2] = 0;
        HEAP32[i198 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i78);
        i347 = HEAP32[i75 >> 2] | 0;
       }
       if ((i347 | 0) != 0) {
        break;
       }
       HEAP32[i75 >> 2] = i72;
       HEAP32[i198 >> 2] = 32;
      }
     } while (0);
     do {
      if ((HEAP32[i197 >> 2] | 0) != 0) {
       if ((HEAP32[i196 >> 2] | 0) != 0) {
        HEAP32[i196 >> 2] = 0;
       }
       i75 = HEAP32[i220 >> 2] | 0;
       i221 = i1 + 112 | 0;
       if ((i221 | 0) == (i75 | 0) | (i75 | 0) == 0) {
        i348 = i75;
       } else {
        HEAP32[i220 >> 2] = 0;
        HEAP32[i197 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i75);
        i348 = HEAP32[i220 >> 2] | 0;
       }
       if ((i348 | 0) != 0) {
        break;
       }
       HEAP32[i220 >> 2] = i221;
       HEAP32[i197 >> 2] = 32;
      }
     } while (0);
     HEAP32[i79 >> 2] = 5;
     i227 = i77;
     i88 = 66;
     continue;
    } else if ((i88 | 0) == 75) {
     i88 = 0;
     i220 = i2 + 58 | 0;
     i221 = i2 + 68 | 0;
     i75 = i2;
     i219 = i1 + 22 | 0;
     i72 = i2 + 8 | 0;
     i78 = i2 + 4 | 0;
     i70 = i2 + 32 | 0;
     i224 = i2 + 24 | 0;
     i222 = i2 + 16 | 0;
     i218 = i2 + 28 | 0;
     i71 = i230;
     while (1) {
      if ((i71 << 16 >> 16 | 0) == 60) {
       break;
      } else if ((i71 << 16 >> 16 | 0) == 0) {
       i88 = 243;
       break L110;
      }
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, i71);
      HEAP32[i79 >> 2] = 4;
      i69 = HEAPU8[i220] | 0;
      do {
       if ((i69 & 2 | 0) == 0) {
        i225 = i75 + (HEAP32[i221 + 4 >> 2] | 0) | 0;
        i73 = HEAP32[i221 >> 2] | 0;
        if ((i73 & 1 | 0) == 0) {
         i349 = i73;
        } else {
         i349 = HEAP32[(HEAP32[i225 >> 2] | 0) + (i73 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i349 & 15](i225);
       } else {
        i225 = (HEAP16[i80 >> 1] | 0) == 10 & i69;
        i73 = HEAP32[i72 >> 2] | 0;
        i74 = i73 - 1 | 0;
        HEAP32[i72 >> 2] = i74;
        i324 = (i74 | 0) == 1;
        i74 = (HEAP32[i78 >> 2] | 0) + 1 | 0;
        HEAP32[i78 >> 2] = i74;
        HEAP16[i80 >> 1] = HEAPU8[i74] | 0;
        if ((i324 & 1 | i225 | 0) == 0) {
         break;
        }
        if ((i225 | 0) != 0) {
         HEAP32[i70 >> 2] = (HEAP32[i70 >> 2] | 0) + 1;
         i225 = HEAP32[i222 >> 2] | 0;
         if ((i225 | 0) == 0) {
          i350 = 0;
         } else {
          i350 = HEAP32[i225 + 4 >> 2] | 0;
         }
         HEAP32[i218 >> 2] = (HEAP32[i224 >> 2] | 0) + (1 - i73) + i350;
        }
        if (!i324) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 261;
       break L110;
      }
      i69 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i69;
      if ((i69 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i219] = 0;
       i71 = i69;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 261;
       break L110;
      }
      i71 = HEAP16[i3 >> 1] | 0;
     }
     HEAP32[i79 >> 2] = 13;
     i71 = HEAPU8[i220] | 0;
     do {
      if ((i71 & 2 | 0) == 0) {
       i77 = i75 + (HEAP32[i221 + 4 >> 2] | 0) | 0;
       i69 = HEAP32[i221 >> 2] | 0;
       if ((i69 & 1 | 0) == 0) {
        i351 = i69;
       } else {
        i351 = HEAP32[(HEAP32[i77 >> 2] | 0) + (i69 - 1) >> 2] | 0;
       }
       FUNCTION_TABLE_vi[i351 & 15](i77);
      } else {
       i77 = (HEAP16[i80 >> 1] | 0) == 10 & i71;
       i69 = HEAP32[i72 >> 2] | 0;
       i324 = i69 - 1 | 0;
       HEAP32[i72 >> 2] = i324;
       i73 = (i324 | 0) == 1;
       i324 = (HEAP32[i78 >> 2] | 0) + 1 | 0;
       HEAP32[i78 >> 2] = i324;
       HEAP16[i80 >> 1] = HEAPU8[i324] | 0;
       if ((i73 & 1 | i77 | 0) == 0) {
        break;
       }
       if ((i77 | 0) != 0) {
        HEAP32[i70 >> 2] = (HEAP32[i70 >> 2] | 0) + 1;
        i77 = HEAP32[i222 >> 2] | 0;
        if ((i77 | 0) == 0) {
         i352 = 0;
        } else {
         i352 = HEAP32[i77 + 4 >> 2] | 0;
        }
        HEAP32[i218 >> 2] = (HEAP32[i224 >> 2] | 0) + (1 - i69) + i352;
       }
       if (!i73) {
        break;
       }
       __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
      }
     } while (0);
     if ((HEAP8[i82] & 1) != 0) {
      i88 = 242;
      break;
     }
     i224 = HEAP16[i80 >> 1] | 0;
     HEAP16[i3 >> 1] = i224;
     if ((i224 & 65535) >>> 0 > 15 >>> 0) {
      HEAP8[i219] = 0;
      i249 = i224;
      i88 = 741;
      continue;
     }
     if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
      i88 = 242;
      break;
     }
     i249 = HEAP16[i3 >> 1] | 0;
     i88 = 741;
     continue;
    } else if ((i88 | 0) == 76) {
     i88 = 0;
     i353 = i189 | 0;
     i224 = i67 | 0;
     i218 = i2 + 68 | 0;
     i222 = i2;
     i70 = i1 + 22 | 0;
     i78 = i2 + 8 | 0;
     i72 = i2 + 4 | 0;
     i71 = i2 + 32 | 0;
     i221 = i2 + 24 | 0;
     i75 = i2 + 16 | 0;
     i220 = i2 + 28 | 0;
     i73 = i188;
     L1019 : while (1) {
      do {
       if ((i73 - 65 & 65535) >>> 0 < 26 >>> 0) {
        i69 = i73 & 255;
        HEAP8[i34] = i69;
        i77 = HEAP32[i190 >> 2] | 0;
        if ((i77 | 0) == (HEAP32[i191 >> 2] | 0)) {
         i324 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i189, i77 + 1 | 0, i34) | 0;
         HEAP8[(HEAP32[i353 >> 2] | 0) + (HEAP32[i190 >> 2] | 0) | 0] = HEAP8[i324] | 0;
        } else {
         HEAP8[(HEAP32[i353 >> 2] | 0) + i77 | 0] = i69;
        }
        HEAP32[i190 >> 2] = (HEAP32[i190 >> 2] | 0) + 1;
        i69 = i73 + 32 & 255;
        HEAP8[i14] = i69;
        i77 = HEAP32[i68 >> 2] | 0;
        if ((i77 | 0) == (HEAP32[i192 >> 2] | 0)) {
         i324 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i67, i77 + 1 | 0, i14) | 0;
         HEAP8[(HEAP32[i224 >> 2] | 0) + (HEAP32[i68 >> 2] | 0) | 0] = HEAP8[i324] | 0;
        } else {
         HEAP8[(HEAP32[i224 >> 2] | 0) + i77 | 0] = i69;
        }
        HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 1;
        HEAP32[i79 >> 2] = 15;
        i69 = HEAPU8[i193] | 0;
        do {
         if ((i69 & 2 | 0) == 0) {
          i77 = i222 + (HEAP32[i218 + 4 >> 2] | 0) | 0;
          i324 = HEAP32[i218 >> 2] | 0;
          if ((i324 & 1 | 0) == 0) {
           i354 = i324;
          } else {
           i354 = HEAP32[(HEAP32[i77 >> 2] | 0) + (i324 - 1) >> 2] | 0;
          }
          FUNCTION_TABLE_vi[i354 & 15](i77);
         } else {
          i77 = (HEAP16[i80 >> 1] | 0) == 10 & i69;
          i324 = HEAP32[i78 >> 2] | 0;
          i225 = i324 - 1 | 0;
          HEAP32[i78 >> 2] = i225;
          i74 = (i225 | 0) == 1;
          i225 = (HEAP32[i72 >> 2] | 0) + 1 | 0;
          HEAP32[i72 >> 2] = i225;
          HEAP16[i80 >> 1] = HEAPU8[i225] | 0;
          if ((i74 & 1 | i77 | 0) == 0) {
           break;
          }
          if ((i77 | 0) != 0) {
           HEAP32[i71 >> 2] = (HEAP32[i71 >> 2] | 0) + 1;
           i77 = HEAP32[i75 >> 2] | 0;
           if ((i77 | 0) == 0) {
            i355 = 0;
           } else {
            i355 = HEAP32[i77 + 4 >> 2] | 0;
           }
           HEAP32[i220 >> 2] = (HEAP32[i221 >> 2] | 0) + (1 - i324) + i355;
          }
          if (!i74) {
           break;
          }
          __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
         }
        } while (0);
        if ((HEAP8[i82] & 1) != 0) {
         i88 = 842;
         break L110;
        }
        i69 = HEAP16[i80 >> 1] | 0;
        HEAP16[i3 >> 1] = i69;
        if ((i69 & 65535) >>> 0 > 15 >>> 0) {
         HEAP8[i70] = 0;
         break;
        } else {
         if (__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0) {
          break;
         } else {
          i88 = 842;
          break L110;
         }
        }
       } else {
        if ((i73 - 97 & 65535) >>> 0 >= 26 >>> 0) {
         break L1019;
        }
        i69 = i73 & 255;
        HEAP8[i35] = i69;
        i74 = HEAP32[i190 >> 2] | 0;
        if ((i74 | 0) == (HEAP32[i191 >> 2] | 0)) {
         i324 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i189, i74 + 1 | 0, i35) | 0;
         HEAP8[(HEAP32[i353 >> 2] | 0) + (HEAP32[i190 >> 2] | 0) | 0] = HEAP8[i324] | 0;
        } else {
         HEAP8[(HEAP32[i353 >> 2] | 0) + i74 | 0] = i69;
        }
        HEAP32[i190 >> 2] = (HEAP32[i190 >> 2] | 0) + 1;
        HEAP8[i13] = i69;
        i74 = HEAP32[i68 >> 2] | 0;
        if ((i74 | 0) == (HEAP32[i192 >> 2] | 0)) {
         i324 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i67, i74 + 1 | 0, i13) | 0;
         HEAP8[(HEAP32[i224 >> 2] | 0) + (HEAP32[i68 >> 2] | 0) | 0] = HEAP8[i324] | 0;
        } else {
         HEAP8[(HEAP32[i224 >> 2] | 0) + i74 | 0] = i69;
        }
        HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 1;
        HEAP32[i79 >> 2] = 15;
        i69 = HEAPU8[i193] | 0;
        do {
         if ((i69 & 2 | 0) == 0) {
          i74 = i222 + (HEAP32[i218 + 4 >> 2] | 0) | 0;
          i324 = HEAP32[i218 >> 2] | 0;
          if ((i324 & 1 | 0) == 0) {
           i356 = i324;
          } else {
           i356 = HEAP32[(HEAP32[i74 >> 2] | 0) + (i324 - 1) >> 2] | 0;
          }
          FUNCTION_TABLE_vi[i356 & 15](i74);
         } else {
          i74 = (HEAP16[i80 >> 1] | 0) == 10 & i69;
          i324 = HEAP32[i78 >> 2] | 0;
          i77 = i324 - 1 | 0;
          HEAP32[i78 >> 2] = i77;
          i225 = (i77 | 0) == 1;
          i77 = (HEAP32[i72 >> 2] | 0) + 1 | 0;
          HEAP32[i72 >> 2] = i77;
          HEAP16[i80 >> 1] = HEAPU8[i77] | 0;
          if ((i225 & 1 | i74 | 0) == 0) {
           break;
          }
          if ((i74 | 0) != 0) {
           HEAP32[i71 >> 2] = (HEAP32[i71 >> 2] | 0) + 1;
           i74 = HEAP32[i75 >> 2] | 0;
           if ((i74 | 0) == 0) {
            i357 = 0;
           } else {
            i357 = HEAP32[i74 + 4 >> 2] | 0;
           }
           HEAP32[i220 >> 2] = (HEAP32[i221 >> 2] | 0) + (1 - i324) + i357;
          }
          if (!i225) {
           break;
          }
          __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
         }
        } while (0);
        if ((HEAP8[i82] & 1) != 0) {
         i88 = 867;
         break L110;
        }
        i69 = HEAP16[i80 >> 1] | 0;
        HEAP16[i3 >> 1] = i69;
        if ((i69 & 65535) >>> 0 > 15 >>> 0) {
         HEAP8[i70] = 0;
         break;
        } else {
         if (__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0) {
          break;
         } else {
          i88 = 867;
          break L110;
         }
        }
       }
      } while (0);
      i73 = HEAP16[i3 >> 1] | 0;
     }
     L1083 : do {
      switch (i73 << 16 >> 16) {
      case 32:
      case 10:
      case 9:
      case 12:
       {
        i221 = HEAP32[i68 >> 2] | 0;
        if ((i221 | 0) != (HEAP32[i1 + 32 >> 2] | 0)) {
         break L1083;
        }
        i220 = i1 + 144 | 0;
        i75 = i1 + 24 | 0;
        i71 = 0;
        while (1) {
         if (i71 >>> 0 >= i221 >>> 0) {
          break;
         }
         if ((HEAPU8[(HEAP32[i220 >> 2] | 0) + i71 | 0] | 0) == (HEAPU16[(HEAP32[i75 >> 2] | 0) + (i71 << 1) >> 1] | 0)) {
          i71 = i71 + 1 | 0;
         } else {
          break L1083;
         }
        }
        i71 = i73 & 255;
        HEAP8[i36] = i71;
        i75 = HEAP32[i190 >> 2] | 0;
        if ((i75 | 0) == (HEAP32[i191 >> 2] | 0)) {
         i220 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i189, i75 + 1 | 0, i36) | 0;
         HEAP8[(HEAP32[i353 >> 2] | 0) + (HEAP32[i190 >> 2] | 0) | 0] = HEAP8[i220] | 0;
        } else {
         HEAP8[(HEAP32[i353 >> 2] | 0) + i75 | 0] = i71;
        }
        HEAP32[i190 >> 2] = (HEAP32[i190 >> 2] | 0) + 1;
        HEAP32[i79 >> 2] = 33;
        if (__ZN7WebCore13HTMLTokenizer19flushBufferedEndTagERNS_15SegmentedStringE(i1, i2) | 0) {
         i83 = 1;
         i88 = 4208;
         break L110;
        }
        if ((HEAP8[i82] & 1) != 0) {
         i88 = 882;
         break L110;
        }
        i71 = HEAP16[i80 >> 1] | 0;
        HEAP16[i3 >> 1] = i71;
        if ((i71 & 65535) >>> 0 > 15 >>> 0) {
         HEAP8[i70] = 0;
         i236 = i71;
         i237 = 0;
         i88 = 92;
         continue L110;
        }
        if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
         i88 = 882;
         break L110;
        }
        i236 = HEAP16[i3 >> 1] | 0;
        i237 = 0;
        i88 = 92;
        continue L110;
        break;
       }
      case 47:
       {
        i71 = HEAP32[i68 >> 2] | 0;
        if ((i71 | 0) != (HEAP32[i1 + 32 >> 2] | 0)) {
         break L1083;
        }
        i75 = i1 + 144 | 0;
        i220 = i1 + 24 | 0;
        i221 = 0;
        while (1) {
         if (i221 >>> 0 >= i71 >>> 0) {
          break;
         }
         if ((HEAPU8[(HEAP32[i75 >> 2] | 0) + i221 | 0] | 0) == (HEAPU16[(HEAP32[i220 >> 2] | 0) + (i221 << 1) >> 1] | 0)) {
          i221 = i221 + 1 | 0;
         } else {
          break L1083;
         }
        }
        HEAP8[i37] = 47;
        i221 = HEAP32[i190 >> 2] | 0;
        if ((i221 | 0) == (HEAP32[i191 >> 2] | 0)) {
         i220 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i189, i221 + 1 | 0, i37) | 0;
         HEAP8[(HEAP32[i353 >> 2] | 0) + (HEAP32[i190 >> 2] | 0) | 0] = HEAP8[i220] | 0;
        } else {
         HEAP8[(HEAP32[i353 >> 2] | 0) + i221 | 0] = 47;
        }
        HEAP32[i190 >> 2] = (HEAP32[i190 >> 2] | 0) + 1;
        HEAP32[i79 >> 2] = 42;
        if (__ZN7WebCore13HTMLTokenizer19flushBufferedEndTagERNS_15SegmentedStringE(i1, i2) | 0) {
         i83 = 1;
         i88 = 4210;
         break L110;
        }
        if ((HEAP8[i82] & 1) != 0) {
         i88 = 896;
         break L110;
        }
        i221 = HEAP16[i80 >> 1] | 0;
        HEAP16[i3 >> 1] = i221;
        if ((i221 & 65535) >>> 0 > 15 >>> 0) {
         HEAP8[i70] = 0;
         i264 = i221;
         i265 = 0;
         i88 = 2709;
         continue L110;
        }
        if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
         i88 = 896;
         break L110;
        }
        i264 = HEAP16[i3 >> 1] | 0;
        i265 = 0;
        i88 = 2709;
        continue L110;
        break;
       }
      case 62:
       {
        i221 = HEAP32[i68 >> 2] | 0;
        if ((i221 | 0) != (HEAP32[i1 + 32 >> 2] | 0)) {
         break L1083;
        }
        i220 = i1 + 144 | 0;
        i75 = i1 + 24 | 0;
        i71 = 0;
        while (1) {
         if (i71 >>> 0 >= i221 >>> 0) {
          i88 = 901;
          break L110;
         }
         if ((HEAPU8[(HEAP32[i220 >> 2] | 0) + i71 | 0] | 0) == (HEAPU16[(HEAP32[i75 >> 2] | 0) + (i71 << 1) >> 1] | 0)) {
          i71 = i71 + 1 | 0;
         } else {
          break;
         }
        }
        break;
       }
      default:
       {}
      }
     } while (0);
     __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 60);
     __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 47);
     i70 = HEAP32[i66 >> 2] | 0;
     i71 = i70 + 16 | 0;
     i75 = i1 + 100 | 0;
     i220 = HEAP32[i75 >> 2] | 0;
     i221 = HEAP32[i190 >> 2] | 0;
     i72 = i70 + 24 | 0;
     i78 = HEAP32[i72 >> 2] | 0;
     i218 = i78 + i221 | 0;
     i222 = HEAP32[i70 + 20 >> 2] | 0;
     if (i218 >>> 0 > i222 >>> 0) {
      i70 = i222 + 1 + (i222 >>> 2) | 0;
      i222 = i70 >>> 0 > 16 >>> 0 ? i70 : 16;
      __ZN3WTF6VectorItLj256ENS_15CrashOnOverflowEE15reserveCapacityEj(i71, i222 >>> 0 > i218 >>> 0 ? i222 : i218);
      i358 = HEAP32[i72 >> 2] | 0;
     } else {
      i358 = i78;
     }
     if (i218 >>> 0 < i358 >>> 0) {
      i88 = 908;
      break;
     }
     i78 = HEAP32[i71 >> 2] | 0;
     if ((i221 | 0) != 0) {
      i71 = 0;
      while (1) {
       HEAP16[i78 + (i71 + i358 << 1) >> 1] = HEAPU8[i220 + i71 | 0] | 0;
       i71 = i71 + 1 | 0;
       if (i71 >>> 0 >= i221 >>> 0) {
        break;
       }
      }
     }
     HEAP32[i72 >> 2] = i218;
     do {
      if ((HEAP32[i192 >> 2] | 0) != 0) {
       if ((HEAP32[i68 >> 2] | 0) != 0) {
        HEAP32[i68 >> 2] = 0;
       }
       i221 = HEAP32[i224 >> 2] | 0;
       i71 = i1 + 156 | 0;
       if ((i71 | 0) == (i221 | 0) | (i221 | 0) == 0) {
        i359 = i221;
       } else {
        HEAP32[i224 >> 2] = 0;
        HEAP32[i192 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i221);
        i359 = HEAP32[i224 >> 2] | 0;
       }
       if ((i359 | 0) != 0) {
        break;
       }
       HEAP32[i224 >> 2] = i71;
       HEAP32[i192 >> 2] = 32;
      }
     } while (0);
     do {
      if ((HEAP32[i191 >> 2] | 0) != 0) {
       if ((HEAP32[i190 >> 2] | 0) != 0) {
        HEAP32[i190 >> 2] = 0;
       }
       i224 = HEAP32[i75 >> 2] | 0;
       i218 = i1 + 112 | 0;
       if ((i218 | 0) == (i224 | 0) | (i224 | 0) == 0) {
        i360 = i224;
       } else {
        HEAP32[i75 >> 2] = 0;
        HEAP32[i191 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i224);
        i360 = HEAP32[i75 >> 2] | 0;
       }
       if ((i360 | 0) != 0) {
        break;
       }
       HEAP32[i75 >> 2] = i218;
       HEAP32[i191 >> 2] = 32;
      }
     } while (0);
     HEAP32[i79 >> 2] = 4;
     i230 = i73;
     i88 = 75;
     continue;
    } else if ((i88 | 0) == 77) {
     i88 = 0;
     i75 = i2 + 58 | 0;
     i218 = i2 + 68 | 0;
     i224 = i2;
     i72 = i1 + 22 | 0;
     i71 = i2 + 8 | 0;
     i221 = i2 + 4 | 0;
     i220 = i2 + 32 | 0;
     i78 = i2 + 24 | 0;
     i222 = i2 + 16 | 0;
     i70 = i2 + 28 | 0;
     i219 = i231;
     while (1) {
      if ((i219 << 16 >> 16 | 0) == 38) {
       i88 = 162;
       break;
      } else if ((i219 << 16 >> 16 | 0) == 60) {
       break;
      } else if ((i219 << 16 >> 16 | 0) == 0) {
       i88 = 197;
       break L110;
      }
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, i219);
      HEAP32[i79 >> 2] = 2;
      i69 = HEAPU8[i75] | 0;
      do {
       if ((i69 & 2 | 0) == 0) {
        i225 = i224 + (HEAP32[i218 + 4 >> 2] | 0) | 0;
        i324 = HEAP32[i218 >> 2] | 0;
        if ((i324 & 1 | 0) == 0) {
         i361 = i324;
        } else {
         i361 = HEAP32[(HEAP32[i225 >> 2] | 0) + (i324 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i361 & 15](i225);
       } else {
        i225 = (HEAP16[i80 >> 1] | 0) == 10 & i69;
        i324 = HEAP32[i71 >> 2] | 0;
        i74 = i324 - 1 | 0;
        HEAP32[i71 >> 2] = i74;
        i77 = (i74 | 0) == 1;
        i74 = (HEAP32[i221 >> 2] | 0) + 1 | 0;
        HEAP32[i221 >> 2] = i74;
        HEAP16[i80 >> 1] = HEAPU8[i74] | 0;
        if ((i77 & 1 | i225 | 0) == 0) {
         break;
        }
        if ((i225 | 0) != 0) {
         HEAP32[i220 >> 2] = (HEAP32[i220 >> 2] | 0) + 1;
         i225 = HEAP32[i222 >> 2] | 0;
         if ((i225 | 0) == 0) {
          i362 = 0;
         } else {
          i362 = HEAP32[i225 + 4 >> 2] | 0;
         }
         HEAP32[i70 >> 2] = (HEAP32[i78 >> 2] | 0) + (1 - i324) + i362;
        }
        if (!i77) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 215;
       break L110;
      }
      i69 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i69;
      if ((i69 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i72] = 0;
       i219 = i69;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 215;
       break L110;
      }
      i219 = HEAP16[i3 >> 1] | 0;
     }
     if ((i88 | 0) == 162) {
      i88 = 0;
      HEAP32[i79 >> 2] = 3;
      i219 = HEAPU8[i75] | 0;
      do {
       if ((i219 & 2 | 0) == 0) {
        i73 = i224 + (HEAP32[i218 + 4 >> 2] | 0) | 0;
        i69 = HEAP32[i218 >> 2] | 0;
        if ((i69 & 1 | 0) == 0) {
         i363 = i69;
        } else {
         i363 = HEAP32[(HEAP32[i73 >> 2] | 0) + (i69 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i363 & 15](i73);
       } else {
        i73 = (HEAP16[i80 >> 1] | 0) == 10 & i219;
        i69 = HEAP32[i71 >> 2] | 0;
        i77 = i69 - 1 | 0;
        HEAP32[i71 >> 2] = i77;
        i324 = (i77 | 0) == 1;
        i77 = (HEAP32[i221 >> 2] | 0) + 1 | 0;
        HEAP32[i221 >> 2] = i77;
        HEAP16[i80 >> 1] = HEAPU8[i77] | 0;
        if ((i324 & 1 | i73 | 0) == 0) {
         break;
        }
        if ((i73 | 0) != 0) {
         HEAP32[i220 >> 2] = (HEAP32[i220 >> 2] | 0) + 1;
         i73 = HEAP32[i222 >> 2] | 0;
         if ((i73 | 0) == 0) {
          i364 = 0;
         } else {
          i364 = HEAP32[i73 + 4 >> 2] | 0;
         }
         HEAP32[i70 >> 2] = (HEAP32[i78 >> 2] | 0) + (1 - i69) + i364;
        }
        if (!i324) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 178;
       break;
      }
      i219 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i219;
      if ((i219 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i72] = 0;
       i88 = 216;
       continue;
      } else {
       if (__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0) {
        i88 = 216;
        continue;
       } else {
        i88 = 178;
        break;
       }
      }
     }
     HEAP32[i79 >> 2] = 10;
     i219 = HEAPU8[i75] | 0;
     do {
      if ((i219 & 2 | 0) == 0) {
       i324 = i224 + (HEAP32[i218 + 4 >> 2] | 0) | 0;
       i69 = HEAP32[i218 >> 2] | 0;
       if ((i69 & 1 | 0) == 0) {
        i365 = i69;
       } else {
        i365 = HEAP32[(HEAP32[i324 >> 2] | 0) + (i69 - 1) >> 2] | 0;
       }
       FUNCTION_TABLE_vi[i365 & 15](i324);
      } else {
       i324 = (HEAP16[i80 >> 1] | 0) == 10 & i219;
       i69 = HEAP32[i71 >> 2] | 0;
       i73 = i69 - 1 | 0;
       HEAP32[i71 >> 2] = i73;
       i77 = (i73 | 0) == 1;
       i73 = (HEAP32[i221 >> 2] | 0) + 1 | 0;
       HEAP32[i221 >> 2] = i73;
       HEAP16[i80 >> 1] = HEAPU8[i73] | 0;
       if ((i77 & 1 | i324 | 0) == 0) {
        break;
       }
       if ((i324 | 0) != 0) {
        HEAP32[i220 >> 2] = (HEAP32[i220 >> 2] | 0) + 1;
        i324 = HEAP32[i222 >> 2] | 0;
        if ((i324 | 0) == 0) {
         i366 = 0;
        } else {
         i366 = HEAP32[i324 + 4 >> 2] | 0;
        }
        HEAP32[i70 >> 2] = (HEAP32[i78 >> 2] | 0) + (1 - i69) + i366;
       }
       if (!i77) {
        break;
       }
       __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
      }
     } while (0);
     if ((HEAP8[i82] & 1) != 0) {
      i88 = 196;
      break;
     }
     i78 = HEAP16[i80 >> 1] | 0;
     HEAP16[i3 >> 1] = i78;
     if ((i78 & 65535) >>> 0 > 15 >>> 0) {
      HEAP8[i72] = 0;
      i247 = i78;
      i88 = 556;
      continue;
     }
     if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
      i88 = 196;
      break;
     }
     i247 = HEAP16[i3 >> 1] | 0;
     i88 = 556;
     continue;
    } else if ((i88 | 0) == 78) {
     i88 = 0;
     i367 = i183 | 0;
     i78 = i67 | 0;
     i70 = i2 + 68 | 0;
     i222 = i2;
     i220 = i1 + 22 | 0;
     i221 = i2 + 8 | 0;
     i71 = i2 + 4 | 0;
     i219 = i2 + 32 | 0;
     i218 = i2 + 24 | 0;
     i224 = i2 + 16 | 0;
     i75 = i2 + 28 | 0;
     i77 = i182;
     L1220 : while (1) {
      do {
       if ((i77 - 65 & 65535) >>> 0 < 26 >>> 0) {
        i69 = i77 & 255;
        HEAP8[i27] = i69;
        i324 = HEAP32[i184 >> 2] | 0;
        if ((i324 | 0) == (HEAP32[i185 >> 2] | 0)) {
         i73 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i183, i324 + 1 | 0, i27) | 0;
         HEAP8[(HEAP32[i367 >> 2] | 0) + (HEAP32[i184 >> 2] | 0) | 0] = HEAP8[i73] | 0;
        } else {
         HEAP8[(HEAP32[i367 >> 2] | 0) + i324 | 0] = i69;
        }
        HEAP32[i184 >> 2] = (HEAP32[i184 >> 2] | 0) + 1;
        i69 = i77 + 32 & 255;
        HEAP8[i20] = i69;
        i324 = HEAP32[i68 >> 2] | 0;
        if ((i324 | 0) == (HEAP32[i186 >> 2] | 0)) {
         i73 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i67, i324 + 1 | 0, i20) | 0;
         HEAP8[(HEAP32[i78 >> 2] | 0) + (HEAP32[i68 >> 2] | 0) | 0] = HEAP8[i73] | 0;
        } else {
         HEAP8[(HEAP32[i78 >> 2] | 0) + i324 | 0] = i69;
        }
        HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 1;
        HEAP32[i79 >> 2] = 12;
        i69 = HEAPU8[i187] | 0;
        do {
         if ((i69 & 2 | 0) == 0) {
          i324 = i222 + (HEAP32[i70 + 4 >> 2] | 0) | 0;
          i73 = HEAP32[i70 >> 2] | 0;
          if ((i73 & 1 | 0) == 0) {
           i368 = i73;
          } else {
           i368 = HEAP32[(HEAP32[i324 >> 2] | 0) + (i73 - 1) >> 2] | 0;
          }
          FUNCTION_TABLE_vi[i368 & 15](i324);
         } else {
          i324 = (HEAP16[i80 >> 1] | 0) == 10 & i69;
          i73 = HEAP32[i221 >> 2] | 0;
          i225 = i73 - 1 | 0;
          HEAP32[i221 >> 2] = i225;
          i74 = (i225 | 0) == 1;
          i225 = (HEAP32[i71 >> 2] | 0) + 1 | 0;
          HEAP32[i71 >> 2] = i225;
          HEAP16[i80 >> 1] = HEAPU8[i225] | 0;
          if ((i74 & 1 | i324 | 0) == 0) {
           break;
          }
          if ((i324 | 0) != 0) {
           HEAP32[i219 >> 2] = (HEAP32[i219 >> 2] | 0) + 1;
           i324 = HEAP32[i224 >> 2] | 0;
           if ((i324 | 0) == 0) {
            i369 = 0;
           } else {
            i369 = HEAP32[i324 + 4 >> 2] | 0;
           }
           HEAP32[i75 >> 2] = (HEAP32[i218 >> 2] | 0) + (1 - i73) + i369;
          }
          if (!i74) {
           break;
          }
          __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
         }
        } while (0);
        if ((HEAP8[i82] & 1) != 0) {
         i88 = 657;
         break L110;
        }
        i69 = HEAP16[i80 >> 1] | 0;
        HEAP16[i3 >> 1] = i69;
        if ((i69 & 65535) >>> 0 > 15 >>> 0) {
         HEAP8[i220] = 0;
         break;
        } else {
         if (__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0) {
          break;
         } else {
          i88 = 657;
          break L110;
         }
        }
       } else {
        if ((i77 - 97 & 65535) >>> 0 >= 26 >>> 0) {
         break L1220;
        }
        i69 = i77 & 255;
        HEAP8[i28] = i69;
        i74 = HEAP32[i184 >> 2] | 0;
        if ((i74 | 0) == (HEAP32[i185 >> 2] | 0)) {
         i73 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i183, i74 + 1 | 0, i28) | 0;
         HEAP8[(HEAP32[i367 >> 2] | 0) + (HEAP32[i184 >> 2] | 0) | 0] = HEAP8[i73] | 0;
        } else {
         HEAP8[(HEAP32[i367 >> 2] | 0) + i74 | 0] = i69;
        }
        HEAP32[i184 >> 2] = (HEAP32[i184 >> 2] | 0) + 1;
        HEAP8[i19] = i69;
        i74 = HEAP32[i68 >> 2] | 0;
        if ((i74 | 0) == (HEAP32[i186 >> 2] | 0)) {
         i73 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i67, i74 + 1 | 0, i19) | 0;
         HEAP8[(HEAP32[i78 >> 2] | 0) + (HEAP32[i68 >> 2] | 0) | 0] = HEAP8[i73] | 0;
        } else {
         HEAP8[(HEAP32[i78 >> 2] | 0) + i74 | 0] = i69;
        }
        HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 1;
        HEAP32[i79 >> 2] = 12;
        i69 = HEAPU8[i187] | 0;
        do {
         if ((i69 & 2 | 0) == 0) {
          i74 = i222 + (HEAP32[i70 + 4 >> 2] | 0) | 0;
          i73 = HEAP32[i70 >> 2] | 0;
          if ((i73 & 1 | 0) == 0) {
           i370 = i73;
          } else {
           i370 = HEAP32[(HEAP32[i74 >> 2] | 0) + (i73 - 1) >> 2] | 0;
          }
          FUNCTION_TABLE_vi[i370 & 15](i74);
         } else {
          i74 = (HEAP16[i80 >> 1] | 0) == 10 & i69;
          i73 = HEAP32[i221 >> 2] | 0;
          i324 = i73 - 1 | 0;
          HEAP32[i221 >> 2] = i324;
          i225 = (i324 | 0) == 1;
          i324 = (HEAP32[i71 >> 2] | 0) + 1 | 0;
          HEAP32[i71 >> 2] = i324;
          HEAP16[i80 >> 1] = HEAPU8[i324] | 0;
          if ((i225 & 1 | i74 | 0) == 0) {
           break;
          }
          if ((i74 | 0) != 0) {
           HEAP32[i219 >> 2] = (HEAP32[i219 >> 2] | 0) + 1;
           i74 = HEAP32[i224 >> 2] | 0;
           if ((i74 | 0) == 0) {
            i371 = 0;
           } else {
            i371 = HEAP32[i74 + 4 >> 2] | 0;
           }
           HEAP32[i75 >> 2] = (HEAP32[i218 >> 2] | 0) + (1 - i73) + i371;
          }
          if (!i225) {
           break;
          }
          __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
         }
        } while (0);
        if ((HEAP8[i82] & 1) != 0) {
         i88 = 682;
         break L110;
        }
        i69 = HEAP16[i80 >> 1] | 0;
        HEAP16[i3 >> 1] = i69;
        if ((i69 & 65535) >>> 0 > 15 >>> 0) {
         HEAP8[i220] = 0;
         break;
        } else {
         if (__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0) {
          break;
         } else {
          i88 = 682;
          break L110;
         }
        }
       }
      } while (0);
      i77 = HEAP16[i3 >> 1] | 0;
     }
     L1284 : do {
      switch (i77 << 16 >> 16) {
      case 32:
      case 10:
      case 9:
      case 12:
       {
        i218 = HEAP32[i68 >> 2] | 0;
        if ((i218 | 0) != (HEAP32[i1 + 32 >> 2] | 0)) {
         break L1284;
        }
        i75 = i1 + 144 | 0;
        i224 = i1 + 24 | 0;
        i219 = 0;
        while (1) {
         if (i219 >>> 0 >= i218 >>> 0) {
          break;
         }
         if ((HEAPU8[(HEAP32[i75 >> 2] | 0) + i219 | 0] | 0) == (HEAPU16[(HEAP32[i224 >> 2] | 0) + (i219 << 1) >> 1] | 0)) {
          i219 = i219 + 1 | 0;
         } else {
          break L1284;
         }
        }
        i219 = i77 & 255;
        HEAP8[i29] = i219;
        i224 = HEAP32[i184 >> 2] | 0;
        if ((i224 | 0) == (HEAP32[i185 >> 2] | 0)) {
         i75 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i183, i224 + 1 | 0, i29) | 0;
         HEAP8[(HEAP32[i367 >> 2] | 0) + (HEAP32[i184 >> 2] | 0) | 0] = HEAP8[i75] | 0;
        } else {
         HEAP8[(HEAP32[i367 >> 2] | 0) + i224 | 0] = i219;
        }
        HEAP32[i184 >> 2] = (HEAP32[i184 >> 2] | 0) + 1;
        HEAP32[i79 >> 2] = 33;
        if (__ZN7WebCore13HTMLTokenizer19flushBufferedEndTagERNS_15SegmentedStringE(i1, i2) | 0) {
         i83 = 1;
         i88 = 4198;
         break L110;
        }
        if ((HEAP8[i82] & 1) != 0) {
         i88 = 697;
         break L110;
        }
        i219 = HEAP16[i80 >> 1] | 0;
        HEAP16[i3 >> 1] = i219;
        if ((i219 & 65535) >>> 0 > 15 >>> 0) {
         HEAP8[i220] = 0;
         i236 = i219;
         i237 = 0;
         i88 = 92;
         continue L110;
        }
        if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
         i88 = 697;
         break L110;
        }
        i236 = HEAP16[i3 >> 1] | 0;
        i237 = 0;
        i88 = 92;
        continue L110;
        break;
       }
      case 47:
       {
        i219 = HEAP32[i68 >> 2] | 0;
        if ((i219 | 0) != (HEAP32[i1 + 32 >> 2] | 0)) {
         break L1284;
        }
        i224 = i1 + 144 | 0;
        i75 = i1 + 24 | 0;
        i218 = 0;
        while (1) {
         if (i218 >>> 0 >= i219 >>> 0) {
          break;
         }
         if ((HEAPU8[(HEAP32[i224 >> 2] | 0) + i218 | 0] | 0) == (HEAPU16[(HEAP32[i75 >> 2] | 0) + (i218 << 1) >> 1] | 0)) {
          i218 = i218 + 1 | 0;
         } else {
          break L1284;
         }
        }
        HEAP8[i30] = 47;
        i218 = HEAP32[i184 >> 2] | 0;
        if ((i218 | 0) == (HEAP32[i185 >> 2] | 0)) {
         i75 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i183, i218 + 1 | 0, i30) | 0;
         HEAP8[(HEAP32[i367 >> 2] | 0) + (HEAP32[i184 >> 2] | 0) | 0] = HEAP8[i75] | 0;
        } else {
         HEAP8[(HEAP32[i367 >> 2] | 0) + i218 | 0] = 47;
        }
        HEAP32[i184 >> 2] = (HEAP32[i184 >> 2] | 0) + 1;
        HEAP32[i79 >> 2] = 42;
        if (__ZN7WebCore13HTMLTokenizer19flushBufferedEndTagERNS_15SegmentedStringE(i1, i2) | 0) {
         i83 = 1;
         i88 = 4200;
         break L110;
        }
        if ((HEAP8[i82] & 1) != 0) {
         i88 = 711;
         break L110;
        }
        i218 = HEAP16[i80 >> 1] | 0;
        HEAP16[i3 >> 1] = i218;
        if ((i218 & 65535) >>> 0 > 15 >>> 0) {
         HEAP8[i220] = 0;
         i264 = i218;
         i265 = 0;
         i88 = 2709;
         continue L110;
        }
        if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
         i88 = 711;
         break L110;
        }
        i264 = HEAP16[i3 >> 1] | 0;
        i265 = 0;
        i88 = 2709;
        continue L110;
        break;
       }
      case 62:
       {
        i218 = HEAP32[i68 >> 2] | 0;
        if ((i218 | 0) != (HEAP32[i1 + 32 >> 2] | 0)) {
         break L1284;
        }
        i75 = i1 + 144 | 0;
        i224 = i1 + 24 | 0;
        i219 = 0;
        while (1) {
         if (i219 >>> 0 >= i218 >>> 0) {
          i88 = 716;
          break L110;
         }
         if ((HEAPU8[(HEAP32[i75 >> 2] | 0) + i219 | 0] | 0) == (HEAPU16[(HEAP32[i224 >> 2] | 0) + (i219 << 1) >> 1] | 0)) {
          i219 = i219 + 1 | 0;
         } else {
          break;
         }
        }
        break;
       }
      default:
       {}
      }
     } while (0);
     __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 60);
     __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 47);
     i220 = HEAP32[i66 >> 2] | 0;
     i219 = i220 + 16 | 0;
     i224 = i1 + 100 | 0;
     i75 = HEAP32[i224 >> 2] | 0;
     i218 = HEAP32[i184 >> 2] | 0;
     i71 = i220 + 24 | 0;
     i221 = HEAP32[i71 >> 2] | 0;
     i70 = i221 + i218 | 0;
     i222 = HEAP32[i220 + 20 >> 2] | 0;
     if (i70 >>> 0 > i222 >>> 0) {
      i220 = i222 + 1 + (i222 >>> 2) | 0;
      i222 = i220 >>> 0 > 16 >>> 0 ? i220 : 16;
      __ZN3WTF6VectorItLj256ENS_15CrashOnOverflowEE15reserveCapacityEj(i219, i222 >>> 0 > i70 >>> 0 ? i222 : i70);
      i372 = HEAP32[i71 >> 2] | 0;
     } else {
      i372 = i221;
     }
     if (i70 >>> 0 < i372 >>> 0) {
      i88 = 723;
      break;
     }
     i221 = HEAP32[i219 >> 2] | 0;
     if ((i218 | 0) != 0) {
      i219 = 0;
      while (1) {
       HEAP16[i221 + (i219 + i372 << 1) >> 1] = HEAPU8[i75 + i219 | 0] | 0;
       i219 = i219 + 1 | 0;
       if (i219 >>> 0 >= i218 >>> 0) {
        break;
       }
      }
     }
     HEAP32[i71 >> 2] = i70;
     do {
      if ((HEAP32[i186 >> 2] | 0) != 0) {
       if ((HEAP32[i68 >> 2] | 0) != 0) {
        HEAP32[i68 >> 2] = 0;
       }
       i218 = HEAP32[i78 >> 2] | 0;
       i219 = i1 + 156 | 0;
       if ((i219 | 0) == (i218 | 0) | (i218 | 0) == 0) {
        i373 = i218;
       } else {
        HEAP32[i78 >> 2] = 0;
        HEAP32[i186 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i218);
        i373 = HEAP32[i78 >> 2] | 0;
       }
       if ((i373 | 0) != 0) {
        break;
       }
       HEAP32[i78 >> 2] = i219;
       HEAP32[i186 >> 2] = 32;
      }
     } while (0);
     do {
      if ((HEAP32[i185 >> 2] | 0) != 0) {
       if ((HEAP32[i184 >> 2] | 0) != 0) {
        HEAP32[i184 >> 2] = 0;
       }
       i78 = HEAP32[i224 >> 2] | 0;
       i70 = i1 + 112 | 0;
       if ((i70 | 0) == (i78 | 0) | (i78 | 0) == 0) {
        i374 = i78;
       } else {
        HEAP32[i224 >> 2] = 0;
        HEAP32[i185 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i78);
        i374 = HEAP32[i224 >> 2] | 0;
       }
       if ((i374 | 0) != 0) {
        break;
       }
       HEAP32[i224 >> 2] = i70;
       HEAP32[i185 >> 2] = 32;
      }
     } while (0);
     HEAP32[i79 >> 2] = 2;
     i231 = i77;
     i88 = 77;
     continue;
    } else if ((i88 | 0) == 79) {
     i88 = 0;
     i224 = i2 + 58 | 0;
     i70 = i2 + 68 | 0;
     i78 = i2;
     i71 = i1 + 22 | 0;
     i219 = i2 + 8 | 0;
     i218 = i2 + 4 | 0;
     i75 = i2 + 32 | 0;
     i221 = i2 + 24 | 0;
     i222 = i2 + 16 | 0;
     i220 = i2 + 28 | 0;
     i72 = i232;
     while (1) {
      if ((i72 << 16 >> 16 | 0) == 38) {
       i88 = 98;
       break;
      } else if ((i72 << 16 >> 16 | 0) == 60) {
       break;
      } else if ((i72 << 16 >> 16 | 0) == 0) {
       i88 = 134;
       break L110;
      }
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, i72);
      HEAP32[i79 >> 2] = 0;
      i69 = HEAPU8[i224] | 0;
      do {
       if ((i69 & 2 | 0) == 0) {
        i225 = i78 + (HEAP32[i70 + 4 >> 2] | 0) | 0;
        i73 = HEAP32[i70 >> 2] | 0;
        if ((i73 & 1 | 0) == 0) {
         i375 = i73;
        } else {
         i375 = HEAP32[(HEAP32[i225 >> 2] | 0) + (i73 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i375 & 15](i225);
       } else {
        i225 = (HEAP16[i80 >> 1] | 0) == 10 & i69;
        i73 = HEAP32[i219 >> 2] | 0;
        i74 = i73 - 1 | 0;
        HEAP32[i219 >> 2] = i74;
        i324 = (i74 | 0) == 1;
        i74 = (HEAP32[i218 >> 2] | 0) + 1 | 0;
        HEAP32[i218 >> 2] = i74;
        HEAP16[i80 >> 1] = HEAPU8[i74] | 0;
        if ((i324 & 1 | i225 | 0) == 0) {
         break;
        }
        if ((i225 | 0) != 0) {
         HEAP32[i75 >> 2] = (HEAP32[i75 >> 2] | 0) + 1;
         i225 = HEAP32[i222 >> 2] | 0;
         if ((i225 | 0) == 0) {
          i376 = 0;
         } else {
          i376 = HEAP32[i225 + 4 >> 2] | 0;
         }
         HEAP32[i220 >> 2] = (HEAP32[i221 >> 2] | 0) + (1 - i73) + i376;
        }
        if (!i324) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 152;
       break L110;
      }
      i69 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i69;
      if ((i69 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i71] = 0;
       i72 = i69;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 152;
       break L110;
      }
      i72 = HEAP16[i3 >> 1] | 0;
     }
     if ((i88 | 0) == 98) {
      i88 = 0;
      HEAP32[i79 >> 2] = 1;
      i72 = HEAPU8[i224] | 0;
      do {
       if ((i72 & 2 | 0) == 0) {
        i77 = i78 + (HEAP32[i70 + 4 >> 2] | 0) | 0;
        i69 = HEAP32[i70 >> 2] | 0;
        if ((i69 & 1 | 0) == 0) {
         i377 = i69;
        } else {
         i377 = HEAP32[(HEAP32[i77 >> 2] | 0) + (i69 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i377 & 15](i77);
       } else {
        i77 = (HEAP16[i80 >> 1] | 0) == 10 & i72;
        i69 = HEAP32[i219 >> 2] | 0;
        i324 = i69 - 1 | 0;
        HEAP32[i219 >> 2] = i324;
        i73 = (i324 | 0) == 1;
        i324 = (HEAP32[i218 >> 2] | 0) + 1 | 0;
        HEAP32[i218 >> 2] = i324;
        HEAP16[i80 >> 1] = HEAPU8[i324] | 0;
        if ((i73 & 1 | i77 | 0) == 0) {
         break;
        }
        if ((i77 | 0) != 0) {
         HEAP32[i75 >> 2] = (HEAP32[i75 >> 2] | 0) + 1;
         i77 = HEAP32[i222 >> 2] | 0;
         if ((i77 | 0) == 0) {
          i378 = 0;
         } else {
          i378 = HEAP32[i77 + 4 >> 2] | 0;
         }
         HEAP32[i220 >> 2] = (HEAP32[i221 >> 2] | 0) + (1 - i69) + i378;
        }
        if (!i73) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 114;
       break;
      }
      i72 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i72;
      if ((i72 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i71] = 0;
       i242 = i233;
       i88 = 153;
       continue;
      } else {
       if (__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0) {
        i242 = i233;
        i88 = 153;
        continue;
       } else {
        i88 = 114;
        break;
       }
      }
     }
     if ((HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5) {
      i83 = 1;
      i88 = 4160;
      break;
     }
     HEAP32[i79 >> 2] = 7;
     i72 = HEAPU8[i224] | 0;
     do {
      if ((i72 & 2 | 0) == 0) {
       i73 = i78 + (HEAP32[i70 + 4 >> 2] | 0) | 0;
       i69 = HEAP32[i70 >> 2] | 0;
       if ((i69 & 1 | 0) == 0) {
        i379 = i69;
       } else {
        i379 = HEAP32[(HEAP32[i73 >> 2] | 0) + (i69 - 1) >> 2] | 0;
       }
       FUNCTION_TABLE_vi[i379 & 15](i73);
      } else {
       i73 = (HEAP16[i80 >> 1] | 0) == 10 & i72;
       i69 = HEAP32[i219 >> 2] | 0;
       i77 = i69 - 1 | 0;
       HEAP32[i219 >> 2] = i77;
       i324 = (i77 | 0) == 1;
       i77 = (HEAP32[i218 >> 2] | 0) + 1 | 0;
       HEAP32[i218 >> 2] = i77;
       HEAP16[i80 >> 1] = HEAPU8[i77] | 0;
       if ((i324 & 1 | i73 | 0) == 0) {
        break;
       }
       if ((i73 | 0) != 0) {
        HEAP32[i75 >> 2] = (HEAP32[i75 >> 2] | 0) + 1;
        i73 = HEAP32[i222 >> 2] | 0;
        if ((i73 | 0) == 0) {
         i380 = 0;
        } else {
         i380 = HEAP32[i73 + 4 >> 2] | 0;
        }
        HEAP32[i220 >> 2] = (HEAP32[i221 >> 2] | 0) + (1 - i69) + i380;
       }
       if (!i324) {
        break;
       }
       __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
      }
     } while (0);
     if ((HEAP8[i82] & 1) != 0) {
      i88 = 133;
      break;
     }
     i221 = HEAP16[i80 >> 1] | 0;
     HEAP16[i3 >> 1] = i221;
     if ((i221 & 65535) >>> 0 > 15 >>> 0) {
      HEAP8[i71] = 0;
      i243 = i221;
      i244 = i233;
      i88 = 319;
      continue;
     }
     if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
      i88 = 133;
      break;
     }
     i243 = HEAP16[i3 >> 1] | 0;
     i244 = i233;
     i88 = 319;
     continue;
    } else if ((i88 | 0) == 80) {
     i88 = 0;
     i221 = i2 + 58 | 0;
     i220 = i2 + 68 | 0;
     i222 = i2;
     i75 = i1 + 22 | 0;
     i218 = i2 + 8 | 0;
     i219 = i2 + 4 | 0;
     i72 = i2 + 32 | 0;
     i70 = i2 + 24 | 0;
     i78 = i2 + 16 | 0;
     i224 = i2 + 28 | 0;
     i324 = i234;
     while (1) {
      if ((i324 << 16 >> 16 | 0) == 93) {
       break;
      } else if ((i324 << 16 >> 16 | 0) == 0) {
       i88 = 4096;
       break;
      }
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, i324);
      HEAP32[i79 >> 2] = 68;
      i69 = HEAPU8[i221] | 0;
      do {
       if ((i69 & 2 | 0) == 0) {
        i73 = i222 + (HEAP32[i220 + 4 >> 2] | 0) | 0;
        i77 = HEAP32[i220 >> 2] | 0;
        if ((i77 & 1 | 0) == 0) {
         i381 = i77;
        } else {
         i381 = HEAP32[(HEAP32[i73 >> 2] | 0) + (i77 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i381 & 15](i73);
       } else {
        i73 = (HEAP16[i80 >> 1] | 0) == 10 & i69;
        i77 = HEAP32[i218 >> 2] | 0;
        i225 = i77 - 1 | 0;
        HEAP32[i218 >> 2] = i225;
        i74 = (i225 | 0) == 1;
        i225 = (HEAP32[i219 >> 2] | 0) + 1 | 0;
        HEAP32[i219 >> 2] = i225;
        HEAP16[i80 >> 1] = HEAPU8[i225] | 0;
        if ((i74 & 1 | i73 | 0) == 0) {
         break;
        }
        if ((i73 | 0) != 0) {
         HEAP32[i72 >> 2] = (HEAP32[i72 >> 2] | 0) + 1;
         i73 = HEAP32[i78 >> 2] | 0;
         if ((i73 | 0) == 0) {
          i382 = 0;
         } else {
          i382 = HEAP32[i73 + 4 >> 2] | 0;
         }
         HEAP32[i224 >> 2] = (HEAP32[i70 >> 2] | 0) + (1 - i77) + i382;
        }
        if (!i74) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 4114;
       break L110;
      }
      i69 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i69;
      if ((i69 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i75] = 0;
       i324 = i69;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 4114;
       break L110;
      }
      i324 = HEAP16[i3 >> 1] | 0;
     }
     if ((i88 | 0) == 4096) {
      i88 = 0;
      HEAP32[i79 >> 2] = 0;
      i232 = 0;
      i233 = i235;
      i88 = 79;
      continue;
     }
     HEAP32[i79 >> 2] = 69;
     i324 = HEAPU8[i221] | 0;
     do {
      if ((i324 & 2 | 0) == 0) {
       i71 = i222 + (HEAP32[i220 + 4 >> 2] | 0) | 0;
       i69 = HEAP32[i220 >> 2] | 0;
       if ((i69 & 1 | 0) == 0) {
        i383 = i69;
       } else {
        i383 = HEAP32[(HEAP32[i71 >> 2] | 0) + (i69 - 1) >> 2] | 0;
       }
       FUNCTION_TABLE_vi[i383 & 15](i71);
      } else {
       i71 = (HEAP16[i80 >> 1] | 0) == 10 & i324;
       i69 = HEAP32[i218 >> 2] | 0;
       i74 = i69 - 1 | 0;
       HEAP32[i218 >> 2] = i74;
       i77 = (i74 | 0) == 1;
       i74 = (HEAP32[i219 >> 2] | 0) + 1 | 0;
       HEAP32[i219 >> 2] = i74;
       HEAP16[i80 >> 1] = HEAPU8[i74] | 0;
       if ((i77 & 1 | i71 | 0) == 0) {
        break;
       }
       if ((i71 | 0) != 0) {
        HEAP32[i72 >> 2] = (HEAP32[i72 >> 2] | 0) + 1;
        i71 = HEAP32[i78 >> 2] | 0;
        if ((i71 | 0) == 0) {
         i384 = 0;
        } else {
         i384 = HEAP32[i71 + 4 >> 2] | 0;
        }
        HEAP32[i224 >> 2] = (HEAP32[i70 >> 2] | 0) + (1 - i69) + i384;
       }
       if (!i77) {
        break;
       }
       __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
      }
     } while (0);
     if ((HEAP8[i82] & 1) != 0) {
      i88 = 4095;
      break;
     }
     i70 = HEAP16[i80 >> 1] | 0;
     HEAP16[i3 >> 1] = i70;
     if ((i70 & 65535) >>> 0 > 15 >>> 0) {
      HEAP8[i75] = 0;
      i279 = i70;
      i280 = i235;
      i88 = 4115;
      continue;
     }
     if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
      i88 = 4095;
      break;
     }
     i279 = HEAP16[i3 >> 1] | 0;
     i280 = i235;
     i88 = 4115;
     continue;
    } else if ((i88 | 0) == 81) {
     i88 = 0;
     i70 = i144;
     L1471 : while (1) {
      switch (i70 << 16 >> 16) {
      case 32:
      case 10:
      case 9:
      case 12:
       {
        break;
       }
      case 62:
       {
        i88 = 3231;
        break L110;
        break;
       }
      case 0:
       {
        i88 = 3232;
        break L110;
        break;
       }
      default:
       {
        break L1471;
       }
      }
      HEAP32[i79 >> 2] = 55;
      i224 = HEAPU8[i145] | 0;
      do {
       if ((i224 & 2 | 0) == 0) {
        i78 = i147 + (HEAP32[i146 + 4 >> 2] | 0) | 0;
        i72 = HEAP32[i146 >> 2] | 0;
        if ((i72 & 1 | 0) == 0) {
         i385 = i72;
        } else {
         i385 = HEAP32[(HEAP32[i78 >> 2] | 0) + (i72 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i385 & 15](i78);
       } else {
        i78 = (HEAP16[i80 >> 1] | 0) == 10 & i224;
        i72 = HEAP32[i149 >> 2] | 0;
        i219 = i72 - 1 | 0;
        HEAP32[i149 >> 2] = i219;
        i218 = (i219 | 0) == 1;
        i219 = (HEAP32[i150 >> 2] | 0) + 1 | 0;
        HEAP32[i150 >> 2] = i219;
        HEAP16[i80 >> 1] = HEAPU8[i219] | 0;
        if ((i218 & 1 | i78 | 0) == 0) {
         break;
        }
        if ((i78 | 0) != 0) {
         HEAP32[i151 >> 2] = (HEAP32[i151 >> 2] | 0) + 1;
         i78 = HEAP32[i153 >> 2] | 0;
         if ((i78 | 0) == 0) {
          i386 = 0;
         } else {
          i386 = HEAP32[i78 + 4 >> 2] | 0;
         }
         HEAP32[i154 >> 2] = (HEAP32[i152 >> 2] | 0) + (1 - i72) + i386;
        }
        if (!i218) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 3230;
       break L110;
      }
      i224 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i224;
      if ((i224 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i148] = 0;
       i70 = i224;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 3230;
       break L110;
      }
      i70 = HEAP16[i3 >> 1] | 0;
     }
     if (!(HEAP8[H_BASE + 72 | 0] | 0)) {
      i75 = __Znwj(4) | 0;
      HEAP32[i64 >> 2] = H_BASE + 16;
      __ZN3WTF6StringC1ENS_12ASCIILiteralE(i75, i64);
      HEAP32[H_BASE + 112 >> 2] = i75;
      HEAP8[H_BASE + 72 | 0] = 1;
     }
     if (!(HEAP8[H_BASE + 64 | 0] | 0)) {
      i75 = __Znwj(4) | 0;
      HEAP32[i65 >> 2] = H_BASE + 8;
      __ZN3WTF6StringC1ENS_12ASCIILiteralE(i75, i65);
      HEAP32[H_BASE + 104 >> 2] = i75;
      HEAP8[H_BASE + 64 | 0] = 1;
     }
     do {
      if ((i70 << 16 >> 16 | 0) == 80 | (i70 << 16 >> 16 | 0) == 112) {
       i75 = __ZN7WebCore15SegmentedString15lookAheadInlineERKN3WTF6StringEb(i2, HEAP32[H_BASE + 112 >> 2] | 0, 0) | 0;
       if ((i75 | 0) == 2) {
        i88 = 3256;
        break L110;
       } else if ((i75 | 0) != 1) {
        break;
       }
       i75 = i2 + 60 | 0;
       i224 = H_BASE + 16 | 0;
       while (1) {
        i224 = i224 + 1 | 0;
        do {
         if ((HEAP8[i145] & 2) == 0) {
          i218 = i147 + (HEAP32[i75 + 4 >> 2] | 0) | 0;
          i72 = HEAP32[i75 >> 2] | 0;
          if ((i72 & 1 | 0) == 0) {
           i387 = i72;
          } else {
           i387 = HEAP32[(HEAP32[i218 >> 2] | 0) + (i72 - 1) >> 2] | 0;
          }
          FUNCTION_TABLE_vi[i387 & 15](i218);
         } else {
          i218 = (HEAP32[i149 >> 2] | 0) - 1 | 0;
          HEAP32[i149 >> 2] = i218;
          i72 = (HEAP32[i150 >> 2] | 0) + 1 | 0;
          HEAP32[i150 >> 2] = i72;
          HEAP16[i80 >> 1] = HEAPU8[i72] | 0;
          if ((i218 | 0) != 1) {
           break;
          }
          __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
         }
        } while (0);
        if ((HEAP8[i224] | 0) == 0) {
         break;
        }
       }
       HEAP32[i79 >> 2] = 56;
       if ((HEAP8[i82] & 1) != 0) {
        i88 = 3255;
        break L110;
       }
       i224 = HEAP16[i80 >> 1] | 0;
       HEAP16[i3 >> 1] = i224;
       if ((i224 & 65535) >>> 0 > 15 >>> 0) {
        HEAP8[i148] = 0;
        i276 = i224;
        i88 = 3292;
        continue L110;
       }
       if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
        i88 = 3255;
        break L110;
       }
       i276 = HEAP16[i3 >> 1] | 0;
       i88 = 3292;
       continue L110;
      } else if ((i70 << 16 >> 16 | 0) == 83 | (i70 << 16 >> 16 | 0) == 115) {
       i224 = __ZN7WebCore15SegmentedString15lookAheadInlineERKN3WTF6StringEb(i2, HEAP32[H_BASE + 104 >> 2] | 0, 0) | 0;
       if ((i224 | 0) == 2) {
        i88 = 3273;
        break L110;
       } else if ((i224 | 0) != 1) {
        break;
       }
       i224 = i2 + 60 | 0;
       i75 = H_BASE + 8 | 0;
       while (1) {
        i75 = i75 + 1 | 0;
        do {
         if ((HEAP8[i145] & 2) == 0) {
          i218 = i147 + (HEAP32[i224 + 4 >> 2] | 0) | 0;
          i72 = HEAP32[i224 >> 2] | 0;
          if ((i72 & 1 | 0) == 0) {
           i388 = i72;
          } else {
           i388 = HEAP32[(HEAP32[i218 >> 2] | 0) + (i72 - 1) >> 2] | 0;
          }
          FUNCTION_TABLE_vi[i388 & 15](i218);
         } else {
          i218 = (HEAP32[i149 >> 2] | 0) - 1 | 0;
          HEAP32[i149 >> 2] = i218;
          i72 = (HEAP32[i150 >> 2] | 0) + 1 | 0;
          HEAP32[i150 >> 2] = i72;
          HEAP16[i80 >> 1] = HEAPU8[i72] | 0;
          if ((i218 | 0) != 1) {
           break;
          }
          __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
         }
        } while (0);
        if ((HEAP8[i75] | 0) == 0) {
         break;
        }
       }
       HEAP32[i79 >> 2] = 62;
       if ((HEAP8[i82] & 1) != 0) {
        i88 = 3272;
        break L110;
       }
       i75 = HEAP16[i80 >> 1] | 0;
       HEAP16[i3 >> 1] = i75;
       if ((i75 & 65535) >>> 0 > 15 >>> 0) {
        HEAP8[i148] = 0;
        i278 = i75;
        i88 = 3740;
        continue L110;
       }
       if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
        i88 = 3272;
        break L110;
       }
       i278 = HEAP16[i3 >> 1] | 0;
       i88 = 3740;
       continue L110;
      }
     } while (0);
     HEAP8[(HEAP32[(HEAP32[i66 >> 2] | 0) + 2240 >> 2] | 0) + 28 | 0] = 1;
     HEAP32[i79 >> 2] = 67;
     i70 = HEAPU8[i145] | 0;
     do {
      if ((i70 & 2 | 0) == 0) {
       i75 = i147 + (HEAP32[i146 + 4 >> 2] | 0) | 0;
       i224 = HEAP32[i146 >> 2] | 0;
       if ((i224 & 1 | 0) == 0) {
        i389 = i224;
       } else {
        i389 = HEAP32[(HEAP32[i75 >> 2] | 0) + (i224 - 1) >> 2] | 0;
       }
       FUNCTION_TABLE_vi[i389 & 15](i75);
      } else {
       i75 = (HEAP16[i80 >> 1] | 0) == 10 & i70;
       i224 = HEAP32[i149 >> 2] | 0;
       i218 = i224 - 1 | 0;
       HEAP32[i149 >> 2] = i218;
       i72 = (i218 | 0) == 1;
       i218 = (HEAP32[i150 >> 2] | 0) + 1 | 0;
       HEAP32[i150 >> 2] = i218;
       HEAP16[i80 >> 1] = HEAPU8[i218] | 0;
       if ((i72 & 1 | i75 | 0) == 0) {
        break;
       }
       if ((i75 | 0) != 0) {
        HEAP32[i151 >> 2] = (HEAP32[i151 >> 2] | 0) + 1;
        i75 = HEAP32[i153 >> 2] | 0;
        if ((i75 | 0) == 0) {
         i390 = 0;
        } else {
         i390 = HEAP32[i75 + 4 >> 2] | 0;
        }
        HEAP32[i154 >> 2] = (HEAP32[i152 >> 2] | 0) + (1 - i224) + i390;
       }
       if (!i72) {
        break;
       }
       __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
      }
     } while (0);
     if ((HEAP8[i82] & 1) != 0) {
      i88 = 3291;
      break;
     }
     i70 = HEAP16[i80 >> 1] | 0;
     HEAP16[i3 >> 1] = i70;
     if ((i70 & 65535) >>> 0 > 15 >>> 0) {
      HEAP8[i148] = 0;
      i155 = i70;
      i156 = i145;
      i88 = 4053;
      continue;
     }
     if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
      i88 = 3291;
      break;
     }
     i155 = HEAP16[i3 >> 1] | 0;
     i156 = i145;
     i88 = 4053;
     continue;
    } else if ((i88 | 0) == 82) {
     i88 = 0;
     i70 = i2 + 68 | 0;
     i72 = i2;
     i224 = i1 + 22 | 0;
     i75 = i2 + 8 | 0;
     i218 = i2 + 4 | 0;
     i78 = i2 + 32 | 0;
     i219 = i2 + 24 | 0;
     i324 = i2 + 16 | 0;
     i220 = i2 + 28 | 0;
     i222 = i180;
     L1564 : while (1) {
      switch (i222 << 16 >> 16) {
      case 32:
      case 10:
      case 9:
      case 12:
       {
        break;
       }
      case 34:
       {
        i88 = 3847;
        break L1564;
        break;
       }
      case 39:
       {
        i88 = 3870;
        break L1564;
        break;
       }
      case 62:
       {
        i88 = 3893;
        break L110;
        break;
       }
      default:
       {
        i88 = 3894;
        break L1564;
       }
      }
      HEAP32[i79 >> 2] = 63;
      i221 = HEAPU8[i181] | 0;
      do {
       if ((i221 & 2 | 0) == 0) {
        i77 = i72 + (HEAP32[i70 + 4 >> 2] | 0) | 0;
        i69 = HEAP32[i70 >> 2] | 0;
        if ((i69 & 1 | 0) == 0) {
         i391 = i69;
        } else {
         i391 = HEAP32[(HEAP32[i77 >> 2] | 0) + (i69 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i391 & 15](i77);
       } else {
        i77 = (HEAP16[i80 >> 1] | 0) == 10 & i221;
        i69 = HEAP32[i75 >> 2] | 0;
        i71 = i69 - 1 | 0;
        HEAP32[i75 >> 2] = i71;
        i74 = (i71 | 0) == 1;
        i71 = (HEAP32[i218 >> 2] | 0) + 1 | 0;
        HEAP32[i218 >> 2] = i71;
        HEAP16[i80 >> 1] = HEAPU8[i71] | 0;
        if ((i74 & 1 | i77 | 0) == 0) {
         break;
        }
        if ((i77 | 0) != 0) {
         HEAP32[i78 >> 2] = (HEAP32[i78 >> 2] | 0) + 1;
         i77 = HEAP32[i324 >> 2] | 0;
         if ((i77 | 0) == 0) {
          i392 = 0;
         } else {
          i392 = HEAP32[i77 + 4 >> 2] | 0;
         }
         HEAP32[i220 >> 2] = (HEAP32[i219 >> 2] | 0) + (1 - i69) + i392;
        }
        if (!i74) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 3846;
       break L110;
      }
      i221 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i221;
      if ((i221 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i224] = 0;
       i222 = i221;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 3846;
       break L110;
      }
      i222 = HEAP16[i3 >> 1] | 0;
     }
     if ((i88 | 0) == 3847) {
      i88 = 0;
      i221 = (HEAP32[i66 >> 2] | 0) + 2240 | 0;
      HEAP8[(HEAP32[i221 >> 2] | 0) + 1 | 0] = 1;
      i74 = HEAP32[i221 >> 2] | 0;
      i221 = i74 + 20 | 0;
      do {
       if ((HEAP32[i221 >> 2] | 0) != 0) {
        i69 = i74 + 24 | 0;
        if ((HEAP32[i69 >> 2] | 0) != 0) {
         HEAP32[i69 >> 2] = 0;
        }
        i69 = i74 + 16 | 0;
        i77 = HEAP32[i69 >> 2] | 0;
        if ((i77 | 0) == 0) {
         break;
        }
        HEAP32[i69 >> 2] = 0;
        HEAP32[i221 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i77);
       }
      } while (0);
      HEAP32[i79 >> 2] = 64;
      i221 = HEAPU8[i181] | 0;
      do {
       if ((i221 & 2 | 0) == 0) {
        i74 = i72 + (HEAP32[i70 + 4 >> 2] | 0) | 0;
        i77 = HEAP32[i70 >> 2] | 0;
        if ((i77 & 1 | 0) == 0) {
         i393 = i77;
        } else {
         i393 = HEAP32[(HEAP32[i74 >> 2] | 0) + (i77 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i393 & 15](i74);
       } else {
        i74 = (HEAP16[i80 >> 1] | 0) == 10 & i221;
        i77 = HEAP32[i75 >> 2] | 0;
        i69 = i77 - 1 | 0;
        HEAP32[i75 >> 2] = i69;
        i71 = (i69 | 0) == 1;
        i69 = (HEAP32[i218 >> 2] | 0) + 1 | 0;
        HEAP32[i218 >> 2] = i69;
        HEAP16[i80 >> 1] = HEAPU8[i69] | 0;
        if ((i71 & 1 | i74 | 0) == 0) {
         break;
        }
        if ((i74 | 0) != 0) {
         HEAP32[i78 >> 2] = (HEAP32[i78 >> 2] | 0) + 1;
         i74 = HEAP32[i324 >> 2] | 0;
         if ((i74 | 0) == 0) {
          i394 = 0;
         } else {
          i394 = HEAP32[i74 + 4 >> 2] | 0;
         }
         HEAP32[i220 >> 2] = (HEAP32[i219 >> 2] | 0) + (1 - i77) + i394;
        }
        if (!i71) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 3869;
       break;
      }
      i221 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i221;
      if ((i221 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i224] = 0;
       i163 = i221;
       i164 = i181;
       i88 = 88;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 3869;
       break;
      }
      i163 = HEAP16[i3 >> 1] | 0;
      i164 = i181;
      i88 = 88;
      continue;
     } else if ((i88 | 0) == 3870) {
      i88 = 0;
      i221 = (HEAP32[i66 >> 2] | 0) + 2240 | 0;
      HEAP8[(HEAP32[i221 >> 2] | 0) + 1 | 0] = 1;
      i71 = HEAP32[i221 >> 2] | 0;
      i221 = i71 + 20 | 0;
      do {
       if ((HEAP32[i221 >> 2] | 0) != 0) {
        i77 = i71 + 24 | 0;
        if ((HEAP32[i77 >> 2] | 0) != 0) {
         HEAP32[i77 >> 2] = 0;
        }
        i77 = i71 + 16 | 0;
        i74 = HEAP32[i77 >> 2] | 0;
        if ((i74 | 0) == 0) {
         break;
        }
        HEAP32[i77 >> 2] = 0;
        HEAP32[i221 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i74);
       }
      } while (0);
      HEAP32[i79 >> 2] = 65;
      i221 = HEAPU8[i181] | 0;
      do {
       if ((i221 & 2 | 0) == 0) {
        i71 = i72 + (HEAP32[i70 + 4 >> 2] | 0) | 0;
        i74 = HEAP32[i70 >> 2] | 0;
        if ((i74 & 1 | 0) == 0) {
         i395 = i74;
        } else {
         i395 = HEAP32[(HEAP32[i71 >> 2] | 0) + (i74 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i395 & 15](i71);
       } else {
        i71 = (HEAP16[i80 >> 1] | 0) == 10 & i221;
        i74 = HEAP32[i75 >> 2] | 0;
        i77 = i74 - 1 | 0;
        HEAP32[i75 >> 2] = i77;
        i69 = (i77 | 0) == 1;
        i77 = (HEAP32[i218 >> 2] | 0) + 1 | 0;
        HEAP32[i218 >> 2] = i77;
        HEAP16[i80 >> 1] = HEAPU8[i77] | 0;
        if ((i69 & 1 | i71 | 0) == 0) {
         break;
        }
        if ((i71 | 0) != 0) {
         HEAP32[i78 >> 2] = (HEAP32[i78 >> 2] | 0) + 1;
         i71 = HEAP32[i324 >> 2] | 0;
         if ((i71 | 0) == 0) {
          i396 = 0;
         } else {
          i396 = HEAP32[i71 + 4 >> 2] | 0;
         }
         HEAP32[i220 >> 2] = (HEAP32[i219 >> 2] | 0) + (1 - i74) + i396;
        }
        if (!i69) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 3892;
       break;
      }
      i221 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i221;
      if ((i221 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i224] = 0;
       i176 = i221;
       i177 = i181;
       i88 = 87;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 3892;
       break;
      }
      i176 = HEAP16[i3 >> 1] | 0;
      i177 = i181;
      i88 = 87;
      continue;
     } else if ((i88 | 0) == 3894) {
      i88 = 0;
      HEAP8[(HEAP32[(HEAP32[i66 >> 2] | 0) + 2240 >> 2] | 0) + 28 | 0] = 1;
      if (i222 << 16 >> 16 == 0) {
       i88 = 3895;
       break;
      }
      HEAP32[i79 >> 2] = 67;
      i221 = HEAPU8[i181] | 0;
      do {
       if ((i221 & 2 | 0) == 0) {
        i69 = i72 + (HEAP32[i70 + 4 >> 2] | 0) | 0;
        i74 = HEAP32[i70 >> 2] | 0;
        if ((i74 & 1 | 0) == 0) {
         i397 = i74;
        } else {
         i397 = HEAP32[(HEAP32[i69 >> 2] | 0) + (i74 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i397 & 15](i69);
       } else {
        i69 = (HEAP16[i80 >> 1] | 0) == 10 & i221;
        i74 = HEAP32[i75 >> 2] | 0;
        i71 = i74 - 1 | 0;
        HEAP32[i75 >> 2] = i71;
        i77 = (i71 | 0) == 1;
        i71 = (HEAP32[i218 >> 2] | 0) + 1 | 0;
        HEAP32[i218 >> 2] = i71;
        HEAP16[i80 >> 1] = HEAPU8[i71] | 0;
        if ((i77 & 1 | i69 | 0) == 0) {
         break;
        }
        if ((i69 | 0) != 0) {
         HEAP32[i78 >> 2] = (HEAP32[i78 >> 2] | 0) + 1;
         i69 = HEAP32[i324 >> 2] | 0;
         if ((i69 | 0) == 0) {
          i398 = 0;
         } else {
          i398 = HEAP32[i69 + 4 >> 2] | 0;
         }
         HEAP32[i220 >> 2] = (HEAP32[i219 >> 2] | 0) + (1 - i74) + i398;
        }
        if (!i77) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 3915;
       break;
      }
      i219 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i219;
      if ((i219 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i224] = 0;
       i155 = i219;
       i156 = i181;
       i88 = 4053;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 3915;
       break;
      }
      i155 = HEAP16[i3 >> 1] | 0;
      i156 = i181;
      i88 = 4053;
      continue;
     }
    } else if ((i88 | 0) == 83) {
     i88 = 0;
     i219 = i2 + 68 | 0;
     i220 = i2;
     i324 = i1 + 22 | 0;
     i78 = i2 + 8 | 0;
     i218 = i2 + 4 | 0;
     i75 = i2 + 32 | 0;
     i221 = i2 + 24 | 0;
     i70 = i2 + 16 | 0;
     i72 = i2 + 28 | 0;
     i222 = i157;
     L1671 : while (1) {
      switch (i222 << 16 >> 16) {
      case 32:
      case 10:
      case 9:
      case 12:
       {
        break;
       }
      case 34:
       {
        i88 = 3399;
        break L1671;
        break;
       }
      case 39:
       {
        i88 = 3422;
        break L1671;
        break;
       }
      case 62:
       {
        i88 = 3445;
        break L110;
        break;
       }
      default:
       {
        i88 = 3446;
        break L1671;
       }
      }
      HEAP32[i79 >> 2] = 57;
      i77 = HEAPU8[i158] | 0;
      do {
       if ((i77 & 2 | 0) == 0) {
        i74 = i220 + (HEAP32[i219 + 4 >> 2] | 0) | 0;
        i69 = HEAP32[i219 >> 2] | 0;
        if ((i69 & 1 | 0) == 0) {
         i399 = i69;
        } else {
         i399 = HEAP32[(HEAP32[i74 >> 2] | 0) + (i69 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i399 & 15](i74);
       } else {
        i74 = (HEAP16[i80 >> 1] | 0) == 10 & i77;
        i69 = HEAP32[i78 >> 2] | 0;
        i71 = i69 - 1 | 0;
        HEAP32[i78 >> 2] = i71;
        i73 = (i71 | 0) == 1;
        i71 = (HEAP32[i218 >> 2] | 0) + 1 | 0;
        HEAP32[i218 >> 2] = i71;
        HEAP16[i80 >> 1] = HEAPU8[i71] | 0;
        if ((i73 & 1 | i74 | 0) == 0) {
         break;
        }
        if ((i74 | 0) != 0) {
         HEAP32[i75 >> 2] = (HEAP32[i75 >> 2] | 0) + 1;
         i74 = HEAP32[i70 >> 2] | 0;
         if ((i74 | 0) == 0) {
          i400 = 0;
         } else {
          i400 = HEAP32[i74 + 4 >> 2] | 0;
         }
         HEAP32[i72 >> 2] = (HEAP32[i221 >> 2] | 0) + (1 - i69) + i400;
        }
        if (!i73) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 3398;
       break L110;
      }
      i77 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i77;
      if ((i77 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i324] = 0;
       i222 = i77;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 3398;
       break L110;
      }
      i222 = HEAP16[i3 >> 1] | 0;
     }
     if ((i88 | 0) == 3399) {
      i88 = 0;
      i224 = (HEAP32[i66 >> 2] | 0) + 2240 | 0;
      HEAP8[HEAP32[i224 >> 2] | 0] = 1;
      i77 = HEAP32[i224 >> 2] | 0;
      i224 = i77 + 8 | 0;
      do {
       if ((HEAP32[i224 >> 2] | 0) != 0) {
        i73 = i77 + 12 | 0;
        if ((HEAP32[i73 >> 2] | 0) != 0) {
         HEAP32[i73 >> 2] = 0;
        }
        i73 = i77 + 4 | 0;
        i69 = HEAP32[i73 >> 2] | 0;
        if ((i69 | 0) == 0) {
         break;
        }
        HEAP32[i73 >> 2] = 0;
        HEAP32[i224 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i69);
       }
      } while (0);
      HEAP32[i79 >> 2] = 58;
      i224 = HEAPU8[i158] | 0;
      do {
       if ((i224 & 2 | 0) == 0) {
        i77 = i220 + (HEAP32[i219 + 4 >> 2] | 0) | 0;
        i69 = HEAP32[i219 >> 2] | 0;
        if ((i69 & 1 | 0) == 0) {
         i401 = i69;
        } else {
         i401 = HEAP32[(HEAP32[i77 >> 2] | 0) + (i69 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i401 & 15](i77);
       } else {
        i77 = (HEAP16[i80 >> 1] | 0) == 10 & i224;
        i69 = HEAP32[i78 >> 2] | 0;
        i73 = i69 - 1 | 0;
        HEAP32[i78 >> 2] = i73;
        i74 = (i73 | 0) == 1;
        i73 = (HEAP32[i218 >> 2] | 0) + 1 | 0;
        HEAP32[i218 >> 2] = i73;
        HEAP16[i80 >> 1] = HEAPU8[i73] | 0;
        if ((i74 & 1 | i77 | 0) == 0) {
         break;
        }
        if ((i77 | 0) != 0) {
         HEAP32[i75 >> 2] = (HEAP32[i75 >> 2] | 0) + 1;
         i77 = HEAP32[i70 >> 2] | 0;
         if ((i77 | 0) == 0) {
          i402 = 0;
         } else {
          i402 = HEAP32[i77 + 4 >> 2] | 0;
         }
         HEAP32[i72 >> 2] = (HEAP32[i221 >> 2] | 0) + (1 - i69) + i402;
        }
        if (!i74) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 3421;
       break;
      }
      i224 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i224;
      if ((i224 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i324] = 0;
       i159 = i224;
       i160 = i158;
       i88 = 85;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 3421;
       break;
      }
      i159 = HEAP16[i3 >> 1] | 0;
      i160 = i158;
      i88 = 85;
      continue;
     } else if ((i88 | 0) == 3422) {
      i88 = 0;
      i224 = (HEAP32[i66 >> 2] | 0) + 2240 | 0;
      HEAP8[HEAP32[i224 >> 2] | 0] = 1;
      i74 = HEAP32[i224 >> 2] | 0;
      i224 = i74 + 8 | 0;
      do {
       if ((HEAP32[i224 >> 2] | 0) != 0) {
        i69 = i74 + 12 | 0;
        if ((HEAP32[i69 >> 2] | 0) != 0) {
         HEAP32[i69 >> 2] = 0;
        }
        i69 = i74 + 4 | 0;
        i77 = HEAP32[i69 >> 2] | 0;
        if ((i77 | 0) == 0) {
         break;
        }
        HEAP32[i69 >> 2] = 0;
        HEAP32[i224 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i77);
       }
      } while (0);
      HEAP32[i79 >> 2] = 59;
      i224 = HEAPU8[i158] | 0;
      do {
       if ((i224 & 2 | 0) == 0) {
        i74 = i220 + (HEAP32[i219 + 4 >> 2] | 0) | 0;
        i77 = HEAP32[i219 >> 2] | 0;
        if ((i77 & 1 | 0) == 0) {
         i403 = i77;
        } else {
         i403 = HEAP32[(HEAP32[i74 >> 2] | 0) + (i77 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i403 & 15](i74);
       } else {
        i74 = (HEAP16[i80 >> 1] | 0) == 10 & i224;
        i77 = HEAP32[i78 >> 2] | 0;
        i69 = i77 - 1 | 0;
        HEAP32[i78 >> 2] = i69;
        i73 = (i69 | 0) == 1;
        i69 = (HEAP32[i218 >> 2] | 0) + 1 | 0;
        HEAP32[i218 >> 2] = i69;
        HEAP16[i80 >> 1] = HEAPU8[i69] | 0;
        if ((i73 & 1 | i74 | 0) == 0) {
         break;
        }
        if ((i74 | 0) != 0) {
         HEAP32[i75 >> 2] = (HEAP32[i75 >> 2] | 0) + 1;
         i74 = HEAP32[i70 >> 2] | 0;
         if ((i74 | 0) == 0) {
          i404 = 0;
         } else {
          i404 = HEAP32[i74 + 4 >> 2] | 0;
         }
         HEAP32[i72 >> 2] = (HEAP32[i221 >> 2] | 0) + (1 - i77) + i404;
        }
        if (!i73) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 3444;
       break;
      }
      i224 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i224;
      if ((i224 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i324] = 0;
       i178 = i224;
       i179 = i158;
       i88 = 84;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 3444;
       break;
      }
      i178 = HEAP16[i3 >> 1] | 0;
      i179 = i158;
      i88 = 84;
      continue;
     } else if ((i88 | 0) == 3446) {
      i88 = 0;
      HEAP8[(HEAP32[(HEAP32[i66 >> 2] | 0) + 2240 >> 2] | 0) + 28 | 0] = 1;
      if (i222 << 16 >> 16 == 0) {
       i88 = 3447;
       break;
      }
      HEAP32[i79 >> 2] = 67;
      i224 = HEAPU8[i158] | 0;
      do {
       if ((i224 & 2 | 0) == 0) {
        i73 = i220 + (HEAP32[i219 + 4 >> 2] | 0) | 0;
        i77 = HEAP32[i219 >> 2] | 0;
        if ((i77 & 1 | 0) == 0) {
         i405 = i77;
        } else {
         i405 = HEAP32[(HEAP32[i73 >> 2] | 0) + (i77 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i405 & 15](i73);
       } else {
        i73 = (HEAP16[i80 >> 1] | 0) == 10 & i224;
        i77 = HEAP32[i78 >> 2] | 0;
        i74 = i77 - 1 | 0;
        HEAP32[i78 >> 2] = i74;
        i69 = (i74 | 0) == 1;
        i74 = (HEAP32[i218 >> 2] | 0) + 1 | 0;
        HEAP32[i218 >> 2] = i74;
        HEAP16[i80 >> 1] = HEAPU8[i74] | 0;
        if ((i69 & 1 | i73 | 0) == 0) {
         break;
        }
        if ((i73 | 0) != 0) {
         HEAP32[i75 >> 2] = (HEAP32[i75 >> 2] | 0) + 1;
         i73 = HEAP32[i70 >> 2] | 0;
         if ((i73 | 0) == 0) {
          i406 = 0;
         } else {
          i406 = HEAP32[i73 + 4 >> 2] | 0;
         }
         HEAP32[i72 >> 2] = (HEAP32[i221 >> 2] | 0) + (1 - i77) + i406;
        }
        if (!i69) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 3467;
       break;
      }
      i221 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i221;
      if ((i221 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i324] = 0;
       i155 = i221;
       i156 = i158;
       i88 = 4053;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 3467;
       break;
      }
      i155 = HEAP16[i3 >> 1] | 0;
      i156 = i158;
      i88 = 4053;
      continue;
     }
    } else if ((i88 | 0) == 84) {
     i88 = 0;
     i221 = i18;
     i72 = i2 + 68 | 0;
     i70 = i2;
     i75 = i1 + 22 | 0;
     i218 = i2 + 8 | 0;
     i78 = i2 + 4 | 0;
     i224 = i2 + 32 | 0;
     i219 = i2 + 24 | 0;
     i220 = i2 + 16 | 0;
     i222 = i2 + 28 | 0;
     i69 = i178;
     while (1) {
      if ((i69 << 16 >> 16 | 0) == 39) {
       break;
      } else if ((i69 << 16 >> 16 | 0) == 62) {
       i88 = 3535;
       break L110;
      } else if ((i69 << 16 >> 16 | 0) == 0) {
       i88 = 3536;
       break L110;
      }
      i77 = HEAP32[i66 >> 2] | 0;
      HEAP16[i18 >> 1] = i69;
      i73 = HEAP32[i77 + 2240 >> 2] | 0;
      i77 = i73 + 4 | 0;
      i74 = i73 + 12 | 0;
      i71 = HEAP32[i74 >> 2] | 0;
      if ((i71 | 0) == (HEAP32[i73 + 8 >> 2] | 0)) {
       i73 = i71 + 1 | 0;
       i225 = i77 | 0;
       i325 = HEAP32[i225 >> 2] | 0;
       do {
        if (i325 >>> 0 > i18 >>> 0) {
         i88 = 3543;
        } else {
         if ((i325 + (i71 << 1) | 0) >>> 0 <= i18 >>> 0) {
          i88 = 3543;
          break;
         }
         __ZN3WTF6VectorItLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i77, i73);
         i76 = HEAP32[i225 >> 2] | 0;
         i407 = i76 + (i221 - i325 >> 1 << 1) | 0;
         i408 = i76;
        }
       } while (0);
       if ((i88 | 0) == 3543) {
        i88 = 0;
        __ZN3WTF6VectorItLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i77, i73);
        i407 = i18;
        i408 = HEAP32[i225 >> 2] | 0;
       }
       HEAP16[i408 + (HEAP32[i74 >> 2] << 1) >> 1] = HEAP16[i407 >> 1] | 0;
      } else {
       HEAP16[(HEAP32[i77 >> 2] | 0) + (i71 << 1) >> 1] = i69;
      }
      HEAP32[i74 >> 2] = (HEAP32[i74 >> 2] | 0) + 1;
      HEAP32[i79 >> 2] = 59;
      i325 = HEAPU8[i179] | 0;
      do {
       if ((i325 & 2 | 0) == 0) {
        i76 = i70 + (HEAP32[i72 + 4 >> 2] | 0) | 0;
        i409 = HEAP32[i72 >> 2] | 0;
        if ((i409 & 1 | 0) == 0) {
         i410 = i409;
        } else {
         i410 = HEAP32[(HEAP32[i76 >> 2] | 0) + (i409 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i410 & 15](i76);
       } else {
        i76 = (HEAP16[i80 >> 1] | 0) == 10 & i325;
        i409 = HEAP32[i218 >> 2] | 0;
        i411 = i409 - 1 | 0;
        HEAP32[i218 >> 2] = i411;
        i412 = (i411 | 0) == 1;
        i411 = (HEAP32[i78 >> 2] | 0) + 1 | 0;
        HEAP32[i78 >> 2] = i411;
        HEAP16[i80 >> 1] = HEAPU8[i411] | 0;
        if ((i412 & 1 | i76 | 0) == 0) {
         break;
        }
        if ((i76 | 0) != 0) {
         HEAP32[i224 >> 2] = (HEAP32[i224 >> 2] | 0) + 1;
         i76 = HEAP32[i220 >> 2] | 0;
         if ((i76 | 0) == 0) {
          i413 = 0;
         } else {
          i413 = HEAP32[i76 + 4 >> 2] | 0;
         }
         HEAP32[i222 >> 2] = (HEAP32[i219 >> 2] | 0) + (1 - i409) + i413;
        }
        if (!i412) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 3563;
       break L110;
      }
      i325 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i325;
      if ((i325 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i75] = 0;
       i69 = i325;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 3563;
       break L110;
      }
      i69 = HEAP16[i3 >> 1] | 0;
     }
     HEAP32[i79 >> 2] = 60;
     i69 = HEAPU8[i179] | 0;
     do {
      if ((i69 & 2 | 0) == 0) {
       i221 = i70 + (HEAP32[i72 + 4 >> 2] | 0) | 0;
       i324 = HEAP32[i72 >> 2] | 0;
       if ((i324 & 1 | 0) == 0) {
        i414 = i324;
       } else {
        i414 = HEAP32[(HEAP32[i221 >> 2] | 0) + (i324 - 1) >> 2] | 0;
       }
       FUNCTION_TABLE_vi[i414 & 15](i221);
      } else {
       i221 = (HEAP16[i80 >> 1] | 0) == 10 & i69;
       i324 = HEAP32[i218 >> 2] | 0;
       i325 = i324 - 1 | 0;
       HEAP32[i218 >> 2] = i325;
       i74 = (i325 | 0) == 1;
       i325 = (HEAP32[i78 >> 2] | 0) + 1 | 0;
       HEAP32[i78 >> 2] = i325;
       HEAP16[i80 >> 1] = HEAPU8[i325] | 0;
       if ((i74 & 1 | i221 | 0) == 0) {
        break;
       }
       if ((i221 | 0) != 0) {
        HEAP32[i224 >> 2] = (HEAP32[i224 >> 2] | 0) + 1;
        i221 = HEAP32[i220 >> 2] | 0;
        if ((i221 | 0) == 0) {
         i415 = 0;
        } else {
         i415 = HEAP32[i221 + 4 >> 2] | 0;
        }
        HEAP32[i222 >> 2] = (HEAP32[i219 >> 2] | 0) + (1 - i324) + i415;
       }
       if (!i74) {
        break;
       }
       __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
      }
     } while (0);
     if ((HEAP8[i82] & 1) != 0) {
      i88 = 3534;
      break;
     }
     i219 = HEAP16[i80 >> 1] | 0;
     HEAP16[i3 >> 1] = i219;
     if ((i219 & 65535) >>> 0 > 15 >>> 0) {
      HEAP8[i75] = 0;
      i277 = i219;
      i88 = 3564;
      continue;
     }
     if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
      i88 = 3534;
      break;
     }
     i277 = HEAP16[i3 >> 1] | 0;
     i88 = 3564;
     continue;
    } else if ((i88 | 0) == 85) {
     i88 = 0;
     i219 = i17;
     i222 = i2 + 68 | 0;
     i220 = i2;
     i224 = i1 + 22 | 0;
     i78 = i2 + 8 | 0;
     i218 = i2 + 4 | 0;
     i69 = i2 + 32 | 0;
     i72 = i2 + 24 | 0;
     i70 = i2 + 16 | 0;
     i74 = i2 + 28 | 0;
     i324 = i159;
     while (1) {
      if ((i324 << 16 >> 16 | 0) == 34) {
       break;
      } else if ((i324 << 16 >> 16 | 0) == 62) {
       i88 = 3487;
       break L110;
      } else if ((i324 << 16 >> 16 | 0) == 0) {
       i88 = 3488;
       break L110;
      }
      i221 = HEAP32[i66 >> 2] | 0;
      HEAP16[i17 >> 1] = i324;
      i325 = HEAP32[i221 + 2240 >> 2] | 0;
      i221 = i325 + 4 | 0;
      i71 = i325 + 12 | 0;
      i77 = HEAP32[i71 >> 2] | 0;
      if ((i77 | 0) == (HEAP32[i325 + 8 >> 2] | 0)) {
       i325 = i77 + 1 | 0;
       i225 = i221 | 0;
       i73 = HEAP32[i225 >> 2] | 0;
       do {
        if (i73 >>> 0 > i17 >>> 0) {
         i88 = 3495;
        } else {
         if ((i73 + (i77 << 1) | 0) >>> 0 <= i17 >>> 0) {
          i88 = 3495;
          break;
         }
         __ZN3WTF6VectorItLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i221, i325);
         i412 = HEAP32[i225 >> 2] | 0;
         i416 = i412 + (i219 - i73 >> 1 << 1) | 0;
         i417 = i412;
        }
       } while (0);
       if ((i88 | 0) == 3495) {
        i88 = 0;
        __ZN3WTF6VectorItLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i221, i325);
        i416 = i17;
        i417 = HEAP32[i225 >> 2] | 0;
       }
       HEAP16[i417 + (HEAP32[i71 >> 2] << 1) >> 1] = HEAP16[i416 >> 1] | 0;
      } else {
       HEAP16[(HEAP32[i221 >> 2] | 0) + (i77 << 1) >> 1] = i324;
      }
      HEAP32[i71 >> 2] = (HEAP32[i71 >> 2] | 0) + 1;
      HEAP32[i79 >> 2] = 58;
      i73 = HEAPU8[i160] | 0;
      do {
       if ((i73 & 2 | 0) == 0) {
        i412 = i220 + (HEAP32[i222 + 4 >> 2] | 0) | 0;
        i409 = HEAP32[i222 >> 2] | 0;
        if ((i409 & 1 | 0) == 0) {
         i418 = i409;
        } else {
         i418 = HEAP32[(HEAP32[i412 >> 2] | 0) + (i409 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i418 & 15](i412);
       } else {
        i412 = (HEAP16[i80 >> 1] | 0) == 10 & i73;
        i409 = HEAP32[i78 >> 2] | 0;
        i76 = i409 - 1 | 0;
        HEAP32[i78 >> 2] = i76;
        i411 = (i76 | 0) == 1;
        i76 = (HEAP32[i218 >> 2] | 0) + 1 | 0;
        HEAP32[i218 >> 2] = i76;
        HEAP16[i80 >> 1] = HEAPU8[i76] | 0;
        if ((i411 & 1 | i412 | 0) == 0) {
         break;
        }
        if ((i412 | 0) != 0) {
         HEAP32[i69 >> 2] = (HEAP32[i69 >> 2] | 0) + 1;
         i412 = HEAP32[i70 >> 2] | 0;
         if ((i412 | 0) == 0) {
          i419 = 0;
         } else {
          i419 = HEAP32[i412 + 4 >> 2] | 0;
         }
         HEAP32[i74 >> 2] = (HEAP32[i72 >> 2] | 0) + (1 - i409) + i419;
        }
        if (!i411) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 3515;
       break L110;
      }
      i73 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i73;
      if ((i73 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i224] = 0;
       i324 = i73;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 3515;
       break L110;
      }
      i324 = HEAP16[i3 >> 1] | 0;
     }
     HEAP32[i79 >> 2] = 60;
     i324 = HEAPU8[i160] | 0;
     do {
      if ((i324 & 2 | 0) == 0) {
       i219 = i220 + (HEAP32[i222 + 4 >> 2] | 0) | 0;
       i75 = HEAP32[i222 >> 2] | 0;
       if ((i75 & 1 | 0) == 0) {
        i420 = i75;
       } else {
        i420 = HEAP32[(HEAP32[i219 >> 2] | 0) + (i75 - 1) >> 2] | 0;
       }
       FUNCTION_TABLE_vi[i420 & 15](i219);
      } else {
       i219 = (HEAP16[i80 >> 1] | 0) == 10 & i324;
       i75 = HEAP32[i78 >> 2] | 0;
       i73 = i75 - 1 | 0;
       HEAP32[i78 >> 2] = i73;
       i71 = (i73 | 0) == 1;
       i73 = (HEAP32[i218 >> 2] | 0) + 1 | 0;
       HEAP32[i218 >> 2] = i73;
       HEAP16[i80 >> 1] = HEAPU8[i73] | 0;
       if ((i71 & 1 | i219 | 0) == 0) {
        break;
       }
       if ((i219 | 0) != 0) {
        HEAP32[i69 >> 2] = (HEAP32[i69 >> 2] | 0) + 1;
        i219 = HEAP32[i70 >> 2] | 0;
        if ((i219 | 0) == 0) {
         i421 = 0;
        } else {
         i421 = HEAP32[i219 + 4 >> 2] | 0;
        }
        HEAP32[i74 >> 2] = (HEAP32[i72 >> 2] | 0) + (1 - i75) + i421;
       }
       if (!i71) {
        break;
       }
       __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
      }
     } while (0);
     if ((HEAP8[i82] & 1) != 0) {
      i88 = 3486;
      break;
     }
     i72 = HEAP16[i80 >> 1] | 0;
     HEAP16[i3 >> 1] = i72;
     if ((i72 & 65535) >>> 0 > 15 >>> 0) {
      HEAP8[i224] = 0;
      i277 = i72;
      i88 = 3564;
      continue;
     }
     if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
      i88 = 3486;
      break;
     }
     i277 = HEAP16[i3 >> 1] | 0;
     i88 = 3564;
     continue;
    } else if ((i88 | 0) == 86) {
     i88 = 0;
     i72 = i2 + 68 | 0;
     i74 = i2;
     i70 = i1 + 22 | 0;
     i69 = i2 + 8 | 0;
     i218 = i2 + 4 | 0;
     i78 = i2 + 32 | 0;
     i324 = i2 + 24 | 0;
     i222 = i2 + 16 | 0;
     i220 = i2 + 28 | 0;
     i71 = i161;
     L1892 : while (1) {
      switch (i71 << 16 >> 16) {
      case 32:
      case 10:
      case 9:
      case 12:
       {
        break;
       }
      case 62:
       {
        i88 = 3671;
        break L110;
        break;
       }
      case 34:
       {
        i88 = 3672;
        break L1892;
        break;
       }
      case 39:
       {
        i88 = 3695;
        break L1892;
        break;
       }
      default:
       {
        i88 = 3718;
        break L1892;
       }
      }
      HEAP32[i79 >> 2] = 61;
      i75 = HEAPU8[i162] | 0;
      do {
       if ((i75 & 2 | 0) == 0) {
        i219 = i74 + (HEAP32[i72 + 4 >> 2] | 0) | 0;
        i73 = HEAP32[i72 >> 2] | 0;
        if ((i73 & 1 | 0) == 0) {
         i422 = i73;
        } else {
         i422 = HEAP32[(HEAP32[i219 >> 2] | 0) + (i73 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i422 & 15](i219);
       } else {
        i219 = (HEAP16[i80 >> 1] | 0) == 10 & i75;
        i73 = HEAP32[i69 >> 2] | 0;
        i77 = i73 - 1 | 0;
        HEAP32[i69 >> 2] = i77;
        i221 = (i77 | 0) == 1;
        i77 = (HEAP32[i218 >> 2] | 0) + 1 | 0;
        HEAP32[i218 >> 2] = i77;
        HEAP16[i80 >> 1] = HEAPU8[i77] | 0;
        if ((i221 & 1 | i219 | 0) == 0) {
         break;
        }
        if ((i219 | 0) != 0) {
         HEAP32[i78 >> 2] = (HEAP32[i78 >> 2] | 0) + 1;
         i219 = HEAP32[i222 >> 2] | 0;
         if ((i219 | 0) == 0) {
          i423 = 0;
         } else {
          i423 = HEAP32[i219 + 4 >> 2] | 0;
         }
         HEAP32[i220 >> 2] = (HEAP32[i324 >> 2] | 0) + (1 - i73) + i423;
        }
        if (!i221) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 3670;
       break L110;
      }
      i75 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i75;
      if ((i75 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i70] = 0;
       i71 = i75;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 3670;
       break L110;
      }
      i71 = HEAP16[i3 >> 1] | 0;
     }
     if ((i88 | 0) == 3672) {
      i88 = 0;
      i224 = (HEAP32[i66 >> 2] | 0) + 2240 | 0;
      HEAP8[(HEAP32[i224 >> 2] | 0) + 1 | 0] = 1;
      i75 = HEAP32[i224 >> 2] | 0;
      i224 = i75 + 20 | 0;
      do {
       if ((HEAP32[i224 >> 2] | 0) != 0) {
        i221 = i75 + 24 | 0;
        if ((HEAP32[i221 >> 2] | 0) != 0) {
         HEAP32[i221 >> 2] = 0;
        }
        i221 = i75 + 16 | 0;
        i73 = HEAP32[i221 >> 2] | 0;
        if ((i73 | 0) == 0) {
         break;
        }
        HEAP32[i221 >> 2] = 0;
        HEAP32[i224 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i73);
       }
      } while (0);
      HEAP32[i79 >> 2] = 64;
      i224 = HEAPU8[i162] | 0;
      do {
       if ((i224 & 2 | 0) == 0) {
        i75 = i74 + (HEAP32[i72 + 4 >> 2] | 0) | 0;
        i73 = HEAP32[i72 >> 2] | 0;
        if ((i73 & 1 | 0) == 0) {
         i424 = i73;
        } else {
         i424 = HEAP32[(HEAP32[i75 >> 2] | 0) + (i73 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i424 & 15](i75);
       } else {
        i75 = (HEAP16[i80 >> 1] | 0) == 10 & i224;
        i73 = HEAP32[i69 >> 2] | 0;
        i221 = i73 - 1 | 0;
        HEAP32[i69 >> 2] = i221;
        i219 = (i221 | 0) == 1;
        i221 = (HEAP32[i218 >> 2] | 0) + 1 | 0;
        HEAP32[i218 >> 2] = i221;
        HEAP16[i80 >> 1] = HEAPU8[i221] | 0;
        if ((i219 & 1 | i75 | 0) == 0) {
         break;
        }
        if ((i75 | 0) != 0) {
         HEAP32[i78 >> 2] = (HEAP32[i78 >> 2] | 0) + 1;
         i75 = HEAP32[i222 >> 2] | 0;
         if ((i75 | 0) == 0) {
          i425 = 0;
         } else {
          i425 = HEAP32[i75 + 4 >> 2] | 0;
         }
         HEAP32[i220 >> 2] = (HEAP32[i324 >> 2] | 0) + (1 - i73) + i425;
        }
        if (!i219) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 3694;
       break;
      }
      i224 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i224;
      if ((i224 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i70] = 0;
       i163 = i224;
       i164 = i162;
       i88 = 88;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 3694;
       break;
      }
      i163 = HEAP16[i3 >> 1] | 0;
      i164 = i162;
      i88 = 88;
      continue;
     } else if ((i88 | 0) == 3695) {
      i88 = 0;
      i224 = (HEAP32[i66 >> 2] | 0) + 2240 | 0;
      HEAP8[(HEAP32[i224 >> 2] | 0) + 1 | 0] = 1;
      i219 = HEAP32[i224 >> 2] | 0;
      i224 = i219 + 20 | 0;
      do {
       if ((HEAP32[i224 >> 2] | 0) != 0) {
        i73 = i219 + 24 | 0;
        if ((HEAP32[i73 >> 2] | 0) != 0) {
         HEAP32[i73 >> 2] = 0;
        }
        i73 = i219 + 16 | 0;
        i75 = HEAP32[i73 >> 2] | 0;
        if ((i75 | 0) == 0) {
         break;
        }
        HEAP32[i73 >> 2] = 0;
        HEAP32[i224 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i75);
       }
      } while (0);
      HEAP32[i79 >> 2] = 65;
      i224 = HEAPU8[i162] | 0;
      do {
       if ((i224 & 2 | 0) == 0) {
        i219 = i74 + (HEAP32[i72 + 4 >> 2] | 0) | 0;
        i75 = HEAP32[i72 >> 2] | 0;
        if ((i75 & 1 | 0) == 0) {
         i426 = i75;
        } else {
         i426 = HEAP32[(HEAP32[i219 >> 2] | 0) + (i75 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i426 & 15](i219);
       } else {
        i219 = (HEAP16[i80 >> 1] | 0) == 10 & i224;
        i75 = HEAP32[i69 >> 2] | 0;
        i73 = i75 - 1 | 0;
        HEAP32[i69 >> 2] = i73;
        i221 = (i73 | 0) == 1;
        i73 = (HEAP32[i218 >> 2] | 0) + 1 | 0;
        HEAP32[i218 >> 2] = i73;
        HEAP16[i80 >> 1] = HEAPU8[i73] | 0;
        if ((i221 & 1 | i219 | 0) == 0) {
         break;
        }
        if ((i219 | 0) != 0) {
         HEAP32[i78 >> 2] = (HEAP32[i78 >> 2] | 0) + 1;
         i219 = HEAP32[i222 >> 2] | 0;
         if ((i219 | 0) == 0) {
          i427 = 0;
         } else {
          i427 = HEAP32[i219 + 4 >> 2] | 0;
         }
         HEAP32[i220 >> 2] = (HEAP32[i324 >> 2] | 0) + (1 - i75) + i427;
        }
        if (!i221) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 3717;
       break;
      }
      i224 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i224;
      if ((i224 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i70] = 0;
       i176 = i224;
       i177 = i162;
       i88 = 87;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 3717;
       break;
      }
      i176 = HEAP16[i3 >> 1] | 0;
      i177 = i162;
      i88 = 87;
      continue;
     } else if ((i88 | 0) == 3718) {
      i88 = 0;
      HEAP8[(HEAP32[(HEAP32[i66 >> 2] | 0) + 2240 >> 2] | 0) + 28 | 0] = 1;
      if (i71 << 16 >> 16 == 0) {
       i88 = 3719;
       break;
      }
      HEAP32[i79 >> 2] = 67;
      i224 = HEAPU8[i162] | 0;
      do {
       if ((i224 & 2 | 0) == 0) {
        i221 = i74 + (HEAP32[i72 + 4 >> 2] | 0) | 0;
        i75 = HEAP32[i72 >> 2] | 0;
        if ((i75 & 1 | 0) == 0) {
         i428 = i75;
        } else {
         i428 = HEAP32[(HEAP32[i221 >> 2] | 0) + (i75 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i428 & 15](i221);
       } else {
        i221 = (HEAP16[i80 >> 1] | 0) == 10 & i224;
        i75 = HEAP32[i69 >> 2] | 0;
        i219 = i75 - 1 | 0;
        HEAP32[i69 >> 2] = i219;
        i73 = (i219 | 0) == 1;
        i219 = (HEAP32[i218 >> 2] | 0) + 1 | 0;
        HEAP32[i218 >> 2] = i219;
        HEAP16[i80 >> 1] = HEAPU8[i219] | 0;
        if ((i73 & 1 | i221 | 0) == 0) {
         break;
        }
        if ((i221 | 0) != 0) {
         HEAP32[i78 >> 2] = (HEAP32[i78 >> 2] | 0) + 1;
         i221 = HEAP32[i222 >> 2] | 0;
         if ((i221 | 0) == 0) {
          i429 = 0;
         } else {
          i429 = HEAP32[i221 + 4 >> 2] | 0;
         }
         HEAP32[i220 >> 2] = (HEAP32[i324 >> 2] | 0) + (1 - i75) + i429;
        }
        if (!i73) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 3739;
       break;
      }
      i324 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i324;
      if ((i324 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i70] = 0;
       i155 = i324;
       i156 = i162;
       i88 = 4053;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 3739;
       break;
      }
      i155 = HEAP16[i3 >> 1] | 0;
      i156 = i162;
      i88 = 4053;
      continue;
     }
    } else if ((i88 | 0) == 87) {
     i88 = 0;
     i324 = i24;
     i220 = i2 + 68 | 0;
     i222 = i2;
     i78 = i1 + 22 | 0;
     i218 = i2 + 8 | 0;
     i69 = i2 + 4 | 0;
     i224 = i2 + 32 | 0;
     i72 = i2 + 24 | 0;
     i74 = i2 + 16 | 0;
     i71 = i2 + 28 | 0;
     i73 = i176;
     while (1) {
      if ((i73 << 16 >> 16 | 0) == 39) {
       break;
      } else if ((i73 << 16 >> 16 | 0) == 62) {
       i88 = 3983;
       break L110;
      } else if ((i73 << 16 >> 16 | 0) == 0) {
       i88 = 3984;
       break L110;
      }
      i75 = HEAP32[i66 >> 2] | 0;
      HEAP16[i24 >> 1] = i73;
      i221 = HEAP32[i75 + 2240 >> 2] | 0;
      i75 = i221 + 16 | 0;
      i219 = i221 + 24 | 0;
      i77 = HEAP32[i219 >> 2] | 0;
      if ((i77 | 0) == (HEAP32[i221 + 20 >> 2] | 0)) {
       i221 = i77 + 1 | 0;
       i225 = i75 | 0;
       i325 = HEAP32[i225 >> 2] | 0;
       do {
        if (i325 >>> 0 > i24 >>> 0) {
         i88 = 3991;
        } else {
         if ((i325 + (i77 << 1) | 0) >>> 0 <= i24 >>> 0) {
          i88 = 3991;
          break;
         }
         __ZN3WTF6VectorItLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i75, i221);
         i411 = HEAP32[i225 >> 2] | 0;
         i430 = i411 + (i324 - i325 >> 1 << 1) | 0;
         i431 = i411;
        }
       } while (0);
       if ((i88 | 0) == 3991) {
        i88 = 0;
        __ZN3WTF6VectorItLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i75, i221);
        i430 = i24;
        i431 = HEAP32[i225 >> 2] | 0;
       }
       HEAP16[i431 + (HEAP32[i219 >> 2] << 1) >> 1] = HEAP16[i430 >> 1] | 0;
      } else {
       HEAP16[(HEAP32[i75 >> 2] | 0) + (i77 << 1) >> 1] = i73;
      }
      HEAP32[i219 >> 2] = (HEAP32[i219 >> 2] | 0) + 1;
      HEAP32[i79 >> 2] = 65;
      i325 = HEAPU8[i177] | 0;
      do {
       if ((i325 & 2 | 0) == 0) {
        i411 = i222 + (HEAP32[i220 + 4 >> 2] | 0) | 0;
        i409 = HEAP32[i220 >> 2] | 0;
        if ((i409 & 1 | 0) == 0) {
         i432 = i409;
        } else {
         i432 = HEAP32[(HEAP32[i411 >> 2] | 0) + (i409 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i432 & 15](i411);
       } else {
        i411 = (HEAP16[i80 >> 1] | 0) == 10 & i325;
        i409 = HEAP32[i218 >> 2] | 0;
        i412 = i409 - 1 | 0;
        HEAP32[i218 >> 2] = i412;
        i76 = (i412 | 0) == 1;
        i412 = (HEAP32[i69 >> 2] | 0) + 1 | 0;
        HEAP32[i69 >> 2] = i412;
        HEAP16[i80 >> 1] = HEAPU8[i412] | 0;
        if ((i76 & 1 | i411 | 0) == 0) {
         break;
        }
        if ((i411 | 0) != 0) {
         HEAP32[i224 >> 2] = (HEAP32[i224 >> 2] | 0) + 1;
         i411 = HEAP32[i74 >> 2] | 0;
         if ((i411 | 0) == 0) {
          i433 = 0;
         } else {
          i433 = HEAP32[i411 + 4 >> 2] | 0;
         }
         HEAP32[i71 >> 2] = (HEAP32[i72 >> 2] | 0) + (1 - i409) + i433;
        }
        if (!i76) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 4011;
       break L110;
      }
      i325 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i325;
      if ((i325 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i78] = 0;
       i73 = i325;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 4011;
       break L110;
      }
      i73 = HEAP16[i3 >> 1] | 0;
     }
     HEAP32[i79 >> 2] = 66;
     i73 = HEAPU8[i177] | 0;
     do {
      if ((i73 & 2 | 0) == 0) {
       i324 = i222 + (HEAP32[i220 + 4 >> 2] | 0) | 0;
       i70 = HEAP32[i220 >> 2] | 0;
       if ((i70 & 1 | 0) == 0) {
        i434 = i70;
       } else {
        i434 = HEAP32[(HEAP32[i324 >> 2] | 0) + (i70 - 1) >> 2] | 0;
       }
       FUNCTION_TABLE_vi[i434 & 15](i324);
      } else {
       i324 = (HEAP16[i80 >> 1] | 0) == 10 & i73;
       i70 = HEAP32[i218 >> 2] | 0;
       i325 = i70 - 1 | 0;
       HEAP32[i218 >> 2] = i325;
       i219 = (i325 | 0) == 1;
       i325 = (HEAP32[i69 >> 2] | 0) + 1 | 0;
       HEAP32[i69 >> 2] = i325;
       HEAP16[i80 >> 1] = HEAPU8[i325] | 0;
       if ((i219 & 1 | i324 | 0) == 0) {
        break;
       }
       if ((i324 | 0) != 0) {
        HEAP32[i224 >> 2] = (HEAP32[i224 >> 2] | 0) + 1;
        i324 = HEAP32[i74 >> 2] | 0;
        if ((i324 | 0) == 0) {
         i435 = 0;
        } else {
         i435 = HEAP32[i324 + 4 >> 2] | 0;
        }
        HEAP32[i71 >> 2] = (HEAP32[i72 >> 2] | 0) + (1 - i70) + i435;
       }
       if (!i219) {
        break;
       }
       __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
      }
     } while (0);
     if ((HEAP8[i82] & 1) != 0) {
      i88 = 3982;
      break;
     }
     i73 = HEAP16[i80 >> 1] | 0;
     HEAP16[i3 >> 1] = i73;
     if ((i73 & 65535) >>> 0 > 15 >>> 0) {
      HEAP8[i78] = 0;
      i165 = i73;
      i166 = i177;
      i167 = i220;
      i168 = i222;
      i169 = i78;
      i170 = i218;
      i171 = i69;
      i172 = i224;
      i173 = i72;
      i174 = i74;
      i175 = i71;
      i88 = 89;
      continue;
     }
     if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
      i88 = 3982;
      break;
     }
     i165 = HEAP16[i3 >> 1] | 0;
     i166 = i177;
     i167 = i220;
     i168 = i222;
     i169 = i78;
     i170 = i218;
     i171 = i69;
     i172 = i224;
     i173 = i72;
     i174 = i74;
     i175 = i71;
     i88 = 89;
     continue;
    } else if ((i88 | 0) == 88) {
     i88 = 0;
     i73 = i23;
     i219 = i2 + 68 | 0;
     i70 = i2;
     i324 = i1 + 22 | 0;
     i325 = i2 + 8 | 0;
     i77 = i2 + 4 | 0;
     i75 = i2 + 32 | 0;
     i225 = i2 + 24 | 0;
     i221 = i2 + 16 | 0;
     i76 = i2 + 28 | 0;
     i409 = i163;
     while (1) {
      if ((i409 << 16 >> 16 | 0) == 34) {
       break;
      } else if ((i409 << 16 >> 16 | 0) == 62) {
       i88 = 3935;
       break L110;
      } else if ((i409 << 16 >> 16 | 0) == 0) {
       i88 = 3936;
       break L110;
      }
      i411 = HEAP32[i66 >> 2] | 0;
      HEAP16[i23 >> 1] = i409;
      i412 = HEAP32[i411 + 2240 >> 2] | 0;
      i411 = i412 + 16 | 0;
      i436 = i412 + 24 | 0;
      i437 = HEAP32[i436 >> 2] | 0;
      if ((i437 | 0) == (HEAP32[i412 + 20 >> 2] | 0)) {
       i412 = i437 + 1 | 0;
       i438 = i411 | 0;
       i439 = HEAP32[i438 >> 2] | 0;
       do {
        if (i439 >>> 0 > i23 >>> 0) {
         i88 = 3943;
        } else {
         if ((i439 + (i437 << 1) | 0) >>> 0 <= i23 >>> 0) {
          i88 = 3943;
          break;
         }
         __ZN3WTF6VectorItLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i411, i412);
         i440 = HEAP32[i438 >> 2] | 0;
         i441 = i440 + (i73 - i439 >> 1 << 1) | 0;
         i442 = i440;
        }
       } while (0);
       if ((i88 | 0) == 3943) {
        i88 = 0;
        __ZN3WTF6VectorItLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i411, i412);
        i441 = i23;
        i442 = HEAP32[i438 >> 2] | 0;
       }
       HEAP16[i442 + (HEAP32[i436 >> 2] << 1) >> 1] = HEAP16[i441 >> 1] | 0;
      } else {
       HEAP16[(HEAP32[i411 >> 2] | 0) + (i437 << 1) >> 1] = i409;
      }
      HEAP32[i436 >> 2] = (HEAP32[i436 >> 2] | 0) + 1;
      HEAP32[i79 >> 2] = 64;
      i439 = HEAPU8[i164] | 0;
      do {
       if ((i439 & 2 | 0) == 0) {
        i440 = i70 + (HEAP32[i219 + 4 >> 2] | 0) | 0;
        i443 = HEAP32[i219 >> 2] | 0;
        if ((i443 & 1 | 0) == 0) {
         i444 = i443;
        } else {
         i444 = HEAP32[(HEAP32[i440 >> 2] | 0) + (i443 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i444 & 15](i440);
       } else {
        i440 = (HEAP16[i80 >> 1] | 0) == 10 & i439;
        i443 = HEAP32[i325 >> 2] | 0;
        i445 = i443 - 1 | 0;
        HEAP32[i325 >> 2] = i445;
        i446 = (i445 | 0) == 1;
        i445 = (HEAP32[i77 >> 2] | 0) + 1 | 0;
        HEAP32[i77 >> 2] = i445;
        HEAP16[i80 >> 1] = HEAPU8[i445] | 0;
        if ((i446 & 1 | i440 | 0) == 0) {
         break;
        }
        if ((i440 | 0) != 0) {
         HEAP32[i75 >> 2] = (HEAP32[i75 >> 2] | 0) + 1;
         i440 = HEAP32[i221 >> 2] | 0;
         if ((i440 | 0) == 0) {
          i447 = 0;
         } else {
          i447 = HEAP32[i440 + 4 >> 2] | 0;
         }
         HEAP32[i76 >> 2] = (HEAP32[i225 >> 2] | 0) + (1 - i443) + i447;
        }
        if (!i446) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 3963;
       break L110;
      }
      i439 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i439;
      if ((i439 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i324] = 0;
       i409 = i439;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 3963;
       break L110;
      }
      i409 = HEAP16[i3 >> 1] | 0;
     }
     HEAP32[i79 >> 2] = 66;
     i409 = HEAPU8[i164] | 0;
     do {
      if ((i409 & 2 | 0) == 0) {
       i73 = i70 + (HEAP32[i219 + 4 >> 2] | 0) | 0;
       i71 = HEAP32[i219 >> 2] | 0;
       if ((i71 & 1 | 0) == 0) {
        i448 = i71;
       } else {
        i448 = HEAP32[(HEAP32[i73 >> 2] | 0) + (i71 - 1) >> 2] | 0;
       }
       FUNCTION_TABLE_vi[i448 & 15](i73);
      } else {
       i73 = (HEAP16[i80 >> 1] | 0) == 10 & i409;
       i71 = HEAP32[i325 >> 2] | 0;
       i74 = i71 - 1 | 0;
       HEAP32[i325 >> 2] = i74;
       i72 = (i74 | 0) == 1;
       i74 = (HEAP32[i77 >> 2] | 0) + 1 | 0;
       HEAP32[i77 >> 2] = i74;
       HEAP16[i80 >> 1] = HEAPU8[i74] | 0;
       if ((i72 & 1 | i73 | 0) == 0) {
        break;
       }
       if ((i73 | 0) != 0) {
        HEAP32[i75 >> 2] = (HEAP32[i75 >> 2] | 0) + 1;
        i73 = HEAP32[i221 >> 2] | 0;
        if ((i73 | 0) == 0) {
         i449 = 0;
        } else {
         i449 = HEAP32[i73 + 4 >> 2] | 0;
        }
        HEAP32[i76 >> 2] = (HEAP32[i225 >> 2] | 0) + (1 - i71) + i449;
       }
       if (!i72) {
        break;
       }
       __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
      }
     } while (0);
     if ((HEAP8[i82] & 1) != 0) {
      i88 = 3934;
      break;
     }
     i409 = HEAP16[i80 >> 1] | 0;
     HEAP16[i3 >> 1] = i409;
     if ((i409 & 65535) >>> 0 > 15 >>> 0) {
      HEAP8[i324] = 0;
      i165 = i409;
      i166 = i164;
      i167 = i219;
      i168 = i70;
      i169 = i324;
      i170 = i325;
      i171 = i77;
      i172 = i75;
      i173 = i225;
      i174 = i221;
      i175 = i76;
      i88 = 89;
      continue;
     }
     if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
      i88 = 3934;
      break;
     }
     i165 = HEAP16[i3 >> 1] | 0;
     i166 = i164;
     i167 = i219;
     i168 = i70;
     i169 = i324;
     i170 = i325;
     i171 = i77;
     i172 = i75;
     i173 = i225;
     i174 = i221;
     i175 = i76;
     i88 = 89;
     continue;
    } else if ((i88 | 0) == 89) {
     i88 = 0;
     i409 = i165;
     L2113 : while (1) {
      switch (i409 << 16 >> 16) {
      case 32:
      case 10:
      case 9:
      case 12:
       {
        break;
       }
      case 62:
       {
        i88 = 4031;
        break L110;
        break;
       }
      case 0:
       {
        i88 = 4032;
        break L110;
        break;
       }
      default:
       {
        break L2113;
       }
      }
      HEAP32[i79 >> 2] = 66;
      i72 = HEAPU8[i166] | 0;
      do {
       if ((i72 & 2 | 0) == 0) {
        i71 = i168 + (HEAP32[i167 + 4 >> 2] | 0) | 0;
        i73 = HEAP32[i167 >> 2] | 0;
        if ((i73 & 1 | 0) == 0) {
         i450 = i73;
        } else {
         i450 = HEAP32[(HEAP32[i71 >> 2] | 0) + (i73 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i450 & 15](i71);
       } else {
        i71 = (HEAP16[i80 >> 1] | 0) == 10 & i72;
        i73 = HEAP32[i170 >> 2] | 0;
        i74 = i73 - 1 | 0;
        HEAP32[i170 >> 2] = i74;
        i224 = (i74 | 0) == 1;
        i74 = (HEAP32[i171 >> 2] | 0) + 1 | 0;
        HEAP32[i171 >> 2] = i74;
        HEAP16[i80 >> 1] = HEAPU8[i74] | 0;
        if ((i224 & 1 | i71 | 0) == 0) {
         break;
        }
        if ((i71 | 0) != 0) {
         HEAP32[i172 >> 2] = (HEAP32[i172 >> 2] | 0) + 1;
         i71 = HEAP32[i174 >> 2] | 0;
         if ((i71 | 0) == 0) {
          i451 = 0;
         } else {
          i451 = HEAP32[i71 + 4 >> 2] | 0;
         }
         HEAP32[i175 >> 2] = (HEAP32[i173 >> 2] | 0) + (1 - i73) + i451;
        }
        if (!i224) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 4030;
       break L110;
      }
      i72 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i72;
      if ((i72 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i169] = 0;
       i409 = i72;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 4030;
       break L110;
      }
      i409 = HEAP16[i3 >> 1] | 0;
     }
     HEAP32[i79 >> 2] = 67;
     i409 = HEAPU8[i166] | 0;
     do {
      if ((i409 & 2 | 0) == 0) {
       i76 = i168 + (HEAP32[i167 + 4 >> 2] | 0) | 0;
       i221 = HEAP32[i167 >> 2] | 0;
       if ((i221 & 1 | 0) == 0) {
        i452 = i221;
       } else {
        i452 = HEAP32[(HEAP32[i76 >> 2] | 0) + (i221 - 1) >> 2] | 0;
       }
       FUNCTION_TABLE_vi[i452 & 15](i76);
      } else {
       i76 = (HEAP16[i80 >> 1] | 0) == 10 & i409;
       i221 = HEAP32[i170 >> 2] | 0;
       i225 = i221 - 1 | 0;
       HEAP32[i170 >> 2] = i225;
       i75 = (i225 | 0) == 1;
       i225 = (HEAP32[i171 >> 2] | 0) + 1 | 0;
       HEAP32[i171 >> 2] = i225;
       HEAP16[i80 >> 1] = HEAPU8[i225] | 0;
       if ((i75 & 1 | i76 | 0) == 0) {
        break;
       }
       if ((i76 | 0) != 0) {
        HEAP32[i172 >> 2] = (HEAP32[i172 >> 2] | 0) + 1;
        i76 = HEAP32[i174 >> 2] | 0;
        if ((i76 | 0) == 0) {
         i453 = 0;
        } else {
         i453 = HEAP32[i76 + 4 >> 2] | 0;
        }
        HEAP32[i175 >> 2] = (HEAP32[i173 >> 2] | 0) + (1 - i221) + i453;
       }
       if (!i75) {
        break;
       }
       __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
      }
     } while (0);
     if ((HEAP8[i82] & 1) != 0) {
      i88 = 4052;
      break;
     }
     i409 = HEAP16[i80 >> 1] | 0;
     HEAP16[i3 >> 1] = i409;
     if ((i409 & 65535) >>> 0 > 15 >>> 0) {
      HEAP8[i169] = 0;
      i155 = i409;
      i156 = i166;
      i88 = 4053;
      continue;
     }
     if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
      i88 = 4052;
      break;
     }
     i155 = HEAP16[i3 >> 1] | 0;
     i156 = i166;
     i88 = 4053;
     continue;
    } else if ((i88 | 0) == 90) {
     i88 = 0;
     i409 = i2 + 68 | 0;
     i75 = i2;
     i221 = i1 + 22 | 0;
     i76 = i2 + 8 | 0;
     i225 = i2 + 4 | 0;
     i77 = i2 + 32 | 0;
     i325 = i2 + 24 | 0;
     i324 = i2 + 16 | 0;
     i70 = i2 + 28 | 0;
     i219 = i131;
     while (1) {
      if ((i219 << 16 >> 16 | 0) == 62) {
       i88 = 2967;
       break L110;
      } else if ((i219 << 16 >> 16 | 0) == 33) {
       i88 = 2968;
       break;
      } else if ((i219 << 16 >> 16 | 0) == 0) {
       i88 = 3004;
       break L110;
      } else if ((i219 << 16 >> 16 | 0) != 45) {
       i88 = 3007;
       break;
      }
      __ZN7WebCore9HTMLToken15appendToCommentEt(HEAP32[i66 >> 2] | 0, 45);
      HEAP32[i79 >> 2] = 50;
      i72 = HEAPU8[i132] | 0;
      do {
       if ((i72 & 2 | 0) == 0) {
        i224 = i75 + (HEAP32[i409 + 4 >> 2] | 0) | 0;
        i73 = HEAP32[i409 >> 2] | 0;
        if ((i73 & 1 | 0) == 0) {
         i454 = i73;
        } else {
         i454 = HEAP32[(HEAP32[i224 >> 2] | 0) + (i73 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i454 & 15](i224);
       } else {
        i224 = (HEAP16[i80 >> 1] | 0) == 10 & i72;
        i73 = HEAP32[i76 >> 2] | 0;
        i71 = i73 - 1 | 0;
        HEAP32[i76 >> 2] = i71;
        i74 = (i71 | 0) == 1;
        i71 = (HEAP32[i225 >> 2] | 0) + 1 | 0;
        HEAP32[i225 >> 2] = i71;
        HEAP16[i80 >> 1] = HEAPU8[i71] | 0;
        if ((i74 & 1 | i224 | 0) == 0) {
         break;
        }
        if ((i224 | 0) != 0) {
         HEAP32[i77 >> 2] = (HEAP32[i77 >> 2] | 0) + 1;
         i224 = HEAP32[i324 >> 2] | 0;
         if ((i224 | 0) == 0) {
          i455 = 0;
         } else {
          i455 = HEAP32[i224 + 4 >> 2] | 0;
         }
         HEAP32[i70 >> 2] = (HEAP32[i325 >> 2] | 0) + (1 - i73) + i455;
        }
        if (!i74) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 3003;
       break L110;
      }
      i72 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i72;
      if ((i72 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i221] = 0;
       i219 = i72;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 3003;
       break L110;
      }
      i219 = HEAP16[i3 >> 1] | 0;
     }
     if ((i88 | 0) == 2968) {
      i88 = 0;
      HEAP32[i79 >> 2] = 51;
      i72 = HEAPU8[i132] | 0;
      do {
       if ((i72 & 2 | 0) == 0) {
        i74 = i75 + (HEAP32[i409 + 4 >> 2] | 0) | 0;
        i73 = HEAP32[i409 >> 2] | 0;
        if ((i73 & 1 | 0) == 0) {
         i456 = i73;
        } else {
         i456 = HEAP32[(HEAP32[i74 >> 2] | 0) + (i73 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i456 & 15](i74);
       } else {
        i74 = (HEAP16[i80 >> 1] | 0) == 10 & i72;
        i73 = HEAP32[i76 >> 2] | 0;
        i224 = i73 - 1 | 0;
        HEAP32[i76 >> 2] = i224;
        i71 = (i224 | 0) == 1;
        i224 = (HEAP32[i225 >> 2] | 0) + 1 | 0;
        HEAP32[i225 >> 2] = i224;
        HEAP16[i80 >> 1] = HEAPU8[i224] | 0;
        if ((i71 & 1 | i74 | 0) == 0) {
         break;
        }
        if ((i74 | 0) != 0) {
         HEAP32[i77 >> 2] = (HEAP32[i77 >> 2] | 0) + 1;
         i74 = HEAP32[i324 >> 2] | 0;
         if ((i74 | 0) == 0) {
          i457 = 0;
         } else {
          i457 = HEAP32[i74 + 4 >> 2] | 0;
         }
         HEAP32[i70 >> 2] = (HEAP32[i325 >> 2] | 0) + (1 - i73) + i457;
        }
        if (!i71) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 2985;
       break;
      }
      i72 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i72;
      if ((i72 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i221] = 0;
       i273 = i72;
       i88 = 3025;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 2985;
       break;
      }
      i273 = HEAP16[i3 >> 1] | 0;
      i88 = 3025;
      continue;
     } else if ((i88 | 0) == 3007) {
      i88 = 0;
      __ZN7WebCore9HTMLToken15appendToCommentEt(HEAP32[i66 >> 2] | 0, 45);
      __ZN7WebCore9HTMLToken15appendToCommentEt(HEAP32[i66 >> 2] | 0, 45);
      __ZN7WebCore9HTMLToken15appendToCommentEt(HEAP32[i66 >> 2] | 0, i219);
      HEAP32[i79 >> 2] = 48;
      i72 = HEAPU8[i132] | 0;
      do {
       if ((i72 & 2 | 0) == 0) {
        i71 = i75 + (HEAP32[i409 + 4 >> 2] | 0) | 0;
        i73 = HEAP32[i409 >> 2] | 0;
        if ((i73 & 1 | 0) == 0) {
         i458 = i73;
        } else {
         i458 = HEAP32[(HEAP32[i71 >> 2] | 0) + (i73 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i458 & 15](i71);
       } else {
        i71 = (HEAP16[i80 >> 1] | 0) == 10 & i72;
        i73 = HEAP32[i76 >> 2] | 0;
        i74 = i73 - 1 | 0;
        HEAP32[i76 >> 2] = i74;
        i224 = (i74 | 0) == 1;
        i74 = (HEAP32[i225 >> 2] | 0) + 1 | 0;
        HEAP32[i225 >> 2] = i74;
        HEAP16[i80 >> 1] = HEAPU8[i74] | 0;
        if ((i224 & 1 | i71 | 0) == 0) {
         break;
        }
        if ((i71 | 0) != 0) {
         HEAP32[i77 >> 2] = (HEAP32[i77 >> 2] | 0) + 1;
         i71 = HEAP32[i324 >> 2] | 0;
         if ((i71 | 0) == 0) {
          i459 = 0;
         } else {
          i459 = HEAP32[i71 + 4 >> 2] | 0;
         }
         HEAP32[i70 >> 2] = (HEAP32[i325 >> 2] | 0) + (1 - i73) + i459;
        }
        if (!i224) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 3024;
       break;
      }
      i325 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i325;
      if ((i325 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i221] = 0;
       i129 = i325;
       i130 = i132;
       i88 = 2885;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 3024;
       break;
      }
      i129 = HEAP16[i3 >> 1] | 0;
      i130 = i132;
      i88 = 2885;
      continue;
     }
    } else if ((i88 | 0) == 91) {
     i88 = 0;
     i325 = i1 + 190 | 0;
     i70 = i2 + 68 | 0;
     i324 = i2;
     i77 = i1 + 22 | 0;
     i225 = i2 + 8 | 0;
     i76 = i2 + 4 | 0;
     i72 = i2 + 32 | 0;
     i409 = i2 + 24 | 0;
     i75 = i2 + 16 | 0;
     i219 = i2 + 28 | 0;
     i224 = i85;
     L2230 : while (1) {
      switch (i224 << 16 >> 16) {
      case 32:
      case 10:
      case 9:
      case 12:
       {
        i88 = 477;
        break L2230;
        break;
       }
      case 47:
       {
        i88 = 495;
        break L2230;
        break;
       }
      case 62:
       {
        i88 = 513;
        break L110;
        break;
       }
      default:
       {}
      }
      if ((HEAP8[i325] & 1) != 0 & i224 << 16 >> 16 == 60) {
       i88 = 515;
       break L110;
      }
      do {
       if ((i224 - 65 & 65535) >>> 0 < 26 >>> 0) {
        __ZN7WebCore9HTMLToken12appendToNameEt(HEAP32[i66 >> 2] | 0, i224 + 32 & 65535);
        HEAP32[i79 >> 2] = 9;
        i73 = HEAPU8[i87] | 0;
        do {
         if ((i73 & 2 | 0) == 0) {
          i71 = i324 + (HEAP32[i70 + 4 >> 2] | 0) | 0;
          i74 = HEAP32[i70 >> 2] | 0;
          if ((i74 & 1 | 0) == 0) {
           i460 = i74;
          } else {
           i460 = HEAP32[(HEAP32[i71 >> 2] | 0) + (i74 - 1) >> 2] | 0;
          }
          FUNCTION_TABLE_vi[i460 & 15](i71);
         } else {
          i71 = (HEAP16[i80 >> 1] | 0) == 10 & i73;
          i74 = HEAP32[i225 >> 2] | 0;
          i69 = i74 - 1 | 0;
          HEAP32[i225 >> 2] = i69;
          i218 = (i69 | 0) == 1;
          i69 = (HEAP32[i76 >> 2] | 0) + 1 | 0;
          HEAP32[i76 >> 2] = i69;
          HEAP16[i80 >> 1] = HEAPU8[i69] | 0;
          if ((i218 & 1 | i71 | 0) == 0) {
           break;
          }
          if ((i71 | 0) != 0) {
           HEAP32[i72 >> 2] = (HEAP32[i72 >> 2] | 0) + 1;
           i71 = HEAP32[i75 >> 2] | 0;
           if ((i71 | 0) == 0) {
            i461 = 0;
           } else {
            i461 = HEAP32[i71 + 4 >> 2] | 0;
           }
           HEAP32[i219 >> 2] = (HEAP32[i409 >> 2] | 0) + (1 - i74) + i461;
          }
          if (!i218) {
           break;
          }
          __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
         }
        } while (0);
        if ((HEAP8[i82] & 1) != 0) {
         i88 = 535;
         break L110;
        }
        i73 = HEAP16[i80 >> 1] | 0;
        HEAP16[i3 >> 1] = i73;
        if ((i73 & 65535) >>> 0 > 15 >>> 0) {
         HEAP8[i77] = 0;
         break;
        } else {
         if (__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0) {
          break;
         } else {
          i88 = 535;
          break L110;
         }
        }
       } else {
        if (i224 << 16 >> 16 == 0) {
         i88 = 538;
         break L2230;
        }
        __ZN7WebCore9HTMLToken12appendToNameEt(HEAP32[i66 >> 2] | 0, i224);
        HEAP32[i79 >> 2] = 9;
        i73 = HEAPU8[i87] | 0;
        do {
         if ((i73 & 2 | 0) == 0) {
          i218 = i324 + (HEAP32[i70 + 4 >> 2] | 0) | 0;
          i74 = HEAP32[i70 >> 2] | 0;
          if ((i74 & 1 | 0) == 0) {
           i462 = i74;
          } else {
           i462 = HEAP32[(HEAP32[i218 >> 2] | 0) + (i74 - 1) >> 2] | 0;
          }
          FUNCTION_TABLE_vi[i462 & 15](i218);
         } else {
          i218 = (HEAP16[i80 >> 1] | 0) == 10 & i73;
          i74 = HEAP32[i225 >> 2] | 0;
          i71 = i74 - 1 | 0;
          HEAP32[i225 >> 2] = i71;
          i69 = (i71 | 0) == 1;
          i71 = (HEAP32[i76 >> 2] | 0) + 1 | 0;
          HEAP32[i76 >> 2] = i71;
          HEAP16[i80 >> 1] = HEAPU8[i71] | 0;
          if ((i69 & 1 | i218 | 0) == 0) {
           break;
          }
          if ((i218 | 0) != 0) {
           HEAP32[i72 >> 2] = (HEAP32[i72 >> 2] | 0) + 1;
           i218 = HEAP32[i75 >> 2] | 0;
           if ((i218 | 0) == 0) {
            i463 = 0;
           } else {
            i463 = HEAP32[i218 + 4 >> 2] | 0;
           }
           HEAP32[i219 >> 2] = (HEAP32[i409 >> 2] | 0) + (1 - i74) + i463;
          }
          if (!i69) {
           break;
          }
          __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
         }
        } while (0);
        if ((HEAP8[i82] & 1) != 0) {
         i88 = 555;
         break L110;
        }
        i73 = HEAP16[i80 >> 1] | 0;
        HEAP16[i3 >> 1] = i73;
        if ((i73 & 65535) >>> 0 > 15 >>> 0) {
         HEAP8[i77] = 0;
         break;
        } else {
         if (__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0) {
          break;
         } else {
          i88 = 555;
          break L110;
         }
        }
       }
      } while (0);
      i224 = HEAP16[i3 >> 1] | 0;
     }
     if ((i88 | 0) == 477) {
      i88 = 0;
      HEAP32[i79 >> 2] = 33;
      i224 = HEAPU8[i87] | 0;
      do {
       if ((i224 & 2 | 0) == 0) {
        i325 = i324 + (HEAP32[i70 + 4 >> 2] | 0) | 0;
        i221 = HEAP32[i70 >> 2] | 0;
        if ((i221 & 1 | 0) == 0) {
         i464 = i221;
        } else {
         i464 = HEAP32[(HEAP32[i325 >> 2] | 0) + (i221 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i464 & 15](i325);
       } else {
        i325 = (HEAP16[i80 >> 1] | 0) == 10 & i224;
        i221 = HEAP32[i225 >> 2] | 0;
        i73 = i221 - 1 | 0;
        HEAP32[i225 >> 2] = i73;
        i69 = (i73 | 0) == 1;
        i73 = (HEAP32[i76 >> 2] | 0) + 1 | 0;
        HEAP32[i76 >> 2] = i73;
        HEAP16[i80 >> 1] = HEAPU8[i73] | 0;
        if ((i69 & 1 | i325 | 0) == 0) {
         break;
        }
        if ((i325 | 0) != 0) {
         HEAP32[i72 >> 2] = (HEAP32[i72 >> 2] | 0) + 1;
         i325 = HEAP32[i75 >> 2] | 0;
         if ((i325 | 0) == 0) {
          i465 = 0;
         } else {
          i465 = HEAP32[i325 + 4 >> 2] | 0;
         }
         HEAP32[i219 >> 2] = (HEAP32[i409 >> 2] | 0) + (1 - i221) + i465;
        }
        if (!i69) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 494;
       break;
      }
      i224 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i224;
      if ((i224 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i77] = 0;
       i236 = i224;
       i237 = i86;
       i88 = 92;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 494;
       break;
      }
      i236 = HEAP16[i3 >> 1] | 0;
      i237 = i86;
      i88 = 92;
      continue;
     } else if ((i88 | 0) == 495) {
      i88 = 0;
      HEAP32[i79 >> 2] = 42;
      i224 = HEAPU8[i87] | 0;
      do {
       if ((i224 & 2 | 0) == 0) {
        i69 = i324 + (HEAP32[i70 + 4 >> 2] | 0) | 0;
        i221 = HEAP32[i70 >> 2] | 0;
        if ((i221 & 1 | 0) == 0) {
         i466 = i221;
        } else {
         i466 = HEAP32[(HEAP32[i69 >> 2] | 0) + (i221 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i466 & 15](i69);
       } else {
        i69 = (HEAP16[i80 >> 1] | 0) == 10 & i224;
        i221 = HEAP32[i225 >> 2] | 0;
        i325 = i221 - 1 | 0;
        HEAP32[i225 >> 2] = i325;
        i73 = (i325 | 0) == 1;
        i325 = (HEAP32[i76 >> 2] | 0) + 1 | 0;
        HEAP32[i76 >> 2] = i325;
        HEAP16[i80 >> 1] = HEAPU8[i325] | 0;
        if ((i73 & 1 | i69 | 0) == 0) {
         break;
        }
        if ((i69 | 0) != 0) {
         HEAP32[i72 >> 2] = (HEAP32[i72 >> 2] | 0) + 1;
         i69 = HEAP32[i75 >> 2] | 0;
         if ((i69 | 0) == 0) {
          i467 = 0;
         } else {
          i467 = HEAP32[i69 + 4 >> 2] | 0;
         }
         HEAP32[i219 >> 2] = (HEAP32[i409 >> 2] | 0) + (1 - i221) + i467;
        }
        if (!i73) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 512;
       break;
      }
      i409 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i409;
      if ((i409 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i77] = 0;
       i264 = i409;
       i265 = i86;
       i88 = 2709;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 512;
       break;
      }
      i264 = HEAP16[i3 >> 1] | 0;
      i265 = i86;
      i88 = 2709;
      continue;
     } else if ((i88 | 0) == 538) {
      i88 = 0;
      HEAP32[i79 >> 2] = 0;
      i232 = 0;
      i233 = i86;
      i88 = 79;
      continue;
     }
    } else if ((i88 | 0) == 92) {
     i88 = 0;
     i409 = i2 + 58 | 0;
     i219 = i2 + 68 | 0;
     i75 = i2;
     i72 = i1 + 22 | 0;
     i76 = i2 + 8 | 0;
     i225 = i2 + 4 | 0;
     i224 = i2 + 32 | 0;
     i70 = i2 + 24 | 0;
     i324 = i2 + 16 | 0;
     i73 = i2 + 28 | 0;
     i221 = i236;
     L2326 : while (1) {
      switch (i221 << 16 >> 16) {
      case 32:
      case 10:
      case 9:
      case 12:
       {
        break;
       }
      case 47:
       {
        i88 = 2005;
        break L2326;
        break;
       }
      case 62:
       {
        i88 = 2023;
        break L110;
        break;
       }
      default:
       {
        break L2326;
       }
      }
      HEAP32[i79 >> 2] = 33;
      i69 = HEAPU8[i409] | 0;
      do {
       if ((i69 & 2 | 0) == 0) {
        i325 = i75 + (HEAP32[i219 + 4 >> 2] | 0) | 0;
        i74 = HEAP32[i219 >> 2] | 0;
        if ((i74 & 1 | 0) == 0) {
         i468 = i74;
        } else {
         i468 = HEAP32[(HEAP32[i325 >> 2] | 0) + (i74 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i468 & 15](i325);
       } else {
        i325 = (HEAP16[i80 >> 1] | 0) == 10 & i69;
        i74 = HEAP32[i76 >> 2] | 0;
        i218 = i74 - 1 | 0;
        HEAP32[i76 >> 2] = i218;
        i71 = (i218 | 0) == 1;
        i218 = (HEAP32[i225 >> 2] | 0) + 1 | 0;
        HEAP32[i225 >> 2] = i218;
        HEAP16[i80 >> 1] = HEAPU8[i218] | 0;
        if ((i71 & 1 | i325 | 0) == 0) {
         break;
        }
        if ((i325 | 0) != 0) {
         HEAP32[i224 >> 2] = (HEAP32[i224 >> 2] | 0) + 1;
         i325 = HEAP32[i324 >> 2] | 0;
         if ((i325 | 0) == 0) {
          i469 = 0;
         } else {
          i469 = HEAP32[i325 + 4 >> 2] | 0;
         }
         HEAP32[i73 >> 2] = (HEAP32[i70 >> 2] | 0) + (1 - i74) + i469;
        }
        if (!i71) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 2004;
       break L110;
      }
      i69 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i69;
      if ((i69 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i72] = 0;
       i221 = i69;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 2004;
       break L110;
      }
      i221 = HEAP16[i3 >> 1] | 0;
     }
     if ((i88 | 0) == 2005) {
      i88 = 0;
      HEAP32[i79 >> 2] = 42;
      i77 = HEAPU8[i409] | 0;
      do {
       if ((i77 & 2 | 0) == 0) {
        i69 = i75 + (HEAP32[i219 + 4 >> 2] | 0) | 0;
        i71 = HEAP32[i219 >> 2] | 0;
        if ((i71 & 1 | 0) == 0) {
         i470 = i71;
        } else {
         i470 = HEAP32[(HEAP32[i69 >> 2] | 0) + (i71 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i470 & 15](i69);
       } else {
        i69 = (HEAP16[i80 >> 1] | 0) == 10 & i77;
        i71 = HEAP32[i76 >> 2] | 0;
        i74 = i71 - 1 | 0;
        HEAP32[i76 >> 2] = i74;
        i325 = (i74 | 0) == 1;
        i74 = (HEAP32[i225 >> 2] | 0) + 1 | 0;
        HEAP32[i225 >> 2] = i74;
        HEAP16[i80 >> 1] = HEAPU8[i74] | 0;
        if ((i325 & 1 | i69 | 0) == 0) {
         break;
        }
        if ((i69 | 0) != 0) {
         HEAP32[i224 >> 2] = (HEAP32[i224 >> 2] | 0) + 1;
         i69 = HEAP32[i324 >> 2] | 0;
         if ((i69 | 0) == 0) {
          i471 = 0;
         } else {
          i471 = HEAP32[i69 + 4 >> 2] | 0;
         }
         HEAP32[i73 >> 2] = (HEAP32[i70 >> 2] | 0) + (1 - i71) + i471;
        }
        if (!i325) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 2022;
       break;
      }
      i77 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i77;
      if ((i77 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i72] = 0;
       i264 = i77;
       i265 = i237;
       i88 = 2709;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 2022;
       break;
      }
      i264 = HEAP16[i3 >> 1] | 0;
      i265 = i237;
      i88 = 2709;
      continue;
     }
     i77 = i1 + 190 | 0;
     if ((HEAP8[i77] & 1) != 0 & i221 << 16 >> 16 == 60) {
      i88 = 2025;
      break;
     }
     if ((i221 - 65 & 65535) >>> 0 < 26 >>> 0) {
      i325 = HEAP32[i66 >> 2] | 0;
      i71 = i325 + 544 | 0;
      i69 = i325 + 552 | 0;
      i74 = (HEAP32[i69 >> 2] | 0) + 1 | 0;
      i218 = HEAP32[i325 + 548 >> 2] | 0;
      if (i218 >>> 0 < i74 >>> 0) {
       i78 = i218 + 1 + (i218 >>> 2) | 0;
       i218 = i78 >>> 0 > 16 >>> 0 ? i78 : 16;
       __ZN3WTF6VectorIN7WebCore9HTMLToken9AttributeELj10ENS_15CrashOnOverflowEE15reserveCapacityEj(i71, i218 >>> 0 > i74 >>> 0 ? i218 : i74);
      }
      i218 = i71 | 0;
      i71 = HEAP32[i218 >> 2] | 0;
      do {
       if ((i71 | 0) != 0) {
        i78 = HEAP32[i69 >> 2] | 0;
        i222 = i71 + (i74 * 168 & -1) | 0;
        if ((i78 | 0) == (i74 | 0)) {
         break;
        }
        i220 = i71 + (i78 * 168 & -1) | 0;
        while (1) {
         HEAP32[i220 + 16 >> 2] = i220 + 28;
         HEAP32[i220 + 20 >> 2] = 32;
         HEAP32[i220 + 24 >> 2] = 0;
         HEAP32[i220 + 92 >> 2] = i220 + 104;
         HEAP32[i220 + 96 >> 2] = 32;
         HEAP32[i220 + 100 >> 2] = 0;
         i220 = i220 + 168 | 0;
         if ((i220 | 0) == (i222 | 0)) {
          break;
         }
        }
       }
      } while (0);
      HEAP32[i69 >> 2] = i74;
      i71 = _llvm_uadd_with_overflow_i32(i74 | 0, -1 | 0) | 0;
      if (!tempRet0) {
       i88 = 2036;
       break;
      }
      HEAP32[i325 + 2236 >> 2] = (HEAP32[i218 >> 2] | 0) + (i71 * 168 & -1);
      i71 = HEAP32[i66 >> 2] | 0;
      if ((HEAP16[i2 >> 1] | 0) == 0) {
       i472 = 0;
      } else {
       i472 = (HEAP16[i2 + 2 >> 1] | 0) == 0 ? 1 : 2;
      }
      i222 = HEAP32[i324 >> 2] | 0;
      if ((i222 | 0) == 0) {
       i473 = 0;
      } else {
       i473 = HEAP32[i222 + 4 >> 2] | 0;
      }
      HEAP32[HEAP32[i71 + 2236 >> 2] >> 2] = (HEAP32[i70 >> 2] | 0) - i472 + i473 - (HEAP32[i76 >> 2] | 0) - (HEAP32[i71 + 12 >> 2] | 0);
      __ZN7WebCore9HTMLToken21appendToAttributeNameEt(HEAP32[i66 >> 2] | 0, i221 + 32 & 65535);
      HEAP32[i79 >> 2] = 34;
      i71 = HEAPU8[i409] | 0;
      do {
       if ((i71 & 2 | 0) == 0) {
        i222 = i75 + (HEAP32[i219 + 4 >> 2] | 0) | 0;
        i220 = HEAP32[i219 >> 2] | 0;
        if ((i220 & 1 | 0) == 0) {
         i474 = i220;
        } else {
         i474 = HEAP32[(HEAP32[i222 >> 2] | 0) + (i220 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i474 & 15](i222);
       } else {
        i222 = (HEAP16[i80 >> 1] | 0) == 10 & i71;
        i220 = HEAP32[i76 >> 2] | 0;
        i78 = i220 - 1 | 0;
        HEAP32[i76 >> 2] = i78;
        i439 = (i78 | 0) == 1;
        i78 = (HEAP32[i225 >> 2] | 0) + 1 | 0;
        HEAP32[i225 >> 2] = i78;
        HEAP16[i80 >> 1] = HEAPU8[i78] | 0;
        if ((i439 & 1 | i222 | 0) == 0) {
         break;
        }
        if ((i222 | 0) != 0) {
         HEAP32[i224 >> 2] = (HEAP32[i224 >> 2] | 0) + 1;
         i222 = HEAP32[i324 >> 2] | 0;
         if ((i222 | 0) == 0) {
          i475 = 0;
         } else {
          i475 = HEAP32[i222 + 4 >> 2] | 0;
         }
         HEAP32[i73 >> 2] = (HEAP32[i70 >> 2] | 0) + (1 - i220) + i475;
        }
        if (!i439) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 2058;
       break;
      }
      i71 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i71;
      if ((i71 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i72] = 0;
       i89 = i71;
       i90 = i237;
       i91 = i77;
       i92 = i409;
       i93 = i219;
       i94 = i75;
       i95 = i72;
       i96 = i76;
       i97 = i225;
       i98 = i224;
       i99 = i70;
       i100 = i324;
       i101 = i73;
       i88 = 2091;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 2058;
       break;
      }
      i89 = HEAP16[i3 >> 1] | 0;
      i90 = i237;
      i91 = i77;
      i92 = i409;
      i93 = i219;
      i94 = i75;
      i95 = i72;
      i96 = i76;
      i97 = i225;
      i98 = i224;
      i99 = i70;
      i100 = i324;
      i101 = i73;
      i88 = 2091;
      continue;
     }
     if (i221 << 16 >> 16 == 0) {
      HEAP32[i79 >> 2] = 0;
      i232 = 0;
      i233 = i237;
      i88 = 79;
      continue;
     }
     i71 = HEAP32[i66 >> 2] | 0;
     i218 = i71 + 544 | 0;
     i325 = i71 + 552 | 0;
     i74 = (HEAP32[i325 >> 2] | 0) + 1 | 0;
     i69 = HEAP32[i71 + 548 >> 2] | 0;
     if (i69 >>> 0 < i74 >>> 0) {
      i439 = i69 + 1 + (i69 >>> 2) | 0;
      i69 = i439 >>> 0 > 16 >>> 0 ? i439 : 16;
      __ZN3WTF6VectorIN7WebCore9HTMLToken9AttributeELj10ENS_15CrashOnOverflowEE15reserveCapacityEj(i218, i69 >>> 0 > i74 >>> 0 ? i69 : i74);
     }
     i69 = i218 | 0;
     i218 = HEAP32[i69 >> 2] | 0;
     do {
      if ((i218 | 0) != 0) {
       i439 = HEAP32[i325 >> 2] | 0;
       i220 = i218 + (i74 * 168 & -1) | 0;
       if ((i439 | 0) == (i74 | 0)) {
        break;
       }
       i222 = i218 + (i439 * 168 & -1) | 0;
       while (1) {
        HEAP32[i222 + 16 >> 2] = i222 + 28;
        HEAP32[i222 + 20 >> 2] = 32;
        HEAP32[i222 + 24 >> 2] = 0;
        HEAP32[i222 + 92 >> 2] = i222 + 104;
        HEAP32[i222 + 96 >> 2] = 32;
        HEAP32[i222 + 100 >> 2] = 0;
        i222 = i222 + 168 | 0;
        if ((i222 | 0) == (i220 | 0)) {
         break;
        }
       }
      }
     } while (0);
     HEAP32[i325 >> 2] = i74;
     i218 = _llvm_uadd_with_overflow_i32(i74 | 0, -1 | 0) | 0;
     if (!tempRet0) {
      i88 = 2068;
      break;
     }
     HEAP32[i71 + 2236 >> 2] = (HEAP32[i69 >> 2] | 0) + (i218 * 168 & -1);
     i218 = HEAP32[i66 >> 2] | 0;
     if ((HEAP16[i2 >> 1] | 0) == 0) {
      i476 = 0;
     } else {
      i476 = (HEAP16[i2 + 2 >> 1] | 0) == 0 ? 1 : 2;
     }
     i220 = HEAP32[i324 >> 2] | 0;
     if ((i220 | 0) == 0) {
      i477 = 0;
     } else {
      i477 = HEAP32[i220 + 4 >> 2] | 0;
     }
     HEAP32[HEAP32[i218 + 2236 >> 2] >> 2] = (HEAP32[i70 >> 2] | 0) - i476 + i477 - (HEAP32[i76 >> 2] | 0) - (HEAP32[i218 + 12 >> 2] | 0);
     __ZN7WebCore9HTMLToken21appendToAttributeNameEt(HEAP32[i66 >> 2] | 0, i221);
     HEAP32[i79 >> 2] = 34;
     i218 = HEAPU8[i409] | 0;
     do {
      if ((i218 & 2 | 0) == 0) {
       i220 = i75 + (HEAP32[i219 + 4 >> 2] | 0) | 0;
       i222 = HEAP32[i219 >> 2] | 0;
       if ((i222 & 1 | 0) == 0) {
        i478 = i222;
       } else {
        i478 = HEAP32[(HEAP32[i220 >> 2] | 0) + (i222 - 1) >> 2] | 0;
       }
       FUNCTION_TABLE_vi[i478 & 15](i220);
      } else {
       i220 = (HEAP16[i80 >> 1] | 0) == 10 & i218;
       i222 = HEAP32[i76 >> 2] | 0;
       i439 = i222 - 1 | 0;
       HEAP32[i76 >> 2] = i439;
       i78 = (i439 | 0) == 1;
       i439 = (HEAP32[i225 >> 2] | 0) + 1 | 0;
       HEAP32[i225 >> 2] = i439;
       HEAP16[i80 >> 1] = HEAPU8[i439] | 0;
       if ((i78 & 1 | i220 | 0) == 0) {
        break;
       }
       if ((i220 | 0) != 0) {
        HEAP32[i224 >> 2] = (HEAP32[i224 >> 2] | 0) + 1;
        i220 = HEAP32[i324 >> 2] | 0;
        if ((i220 | 0) == 0) {
         i479 = 0;
        } else {
         i479 = HEAP32[i220 + 4 >> 2] | 0;
        }
        HEAP32[i73 >> 2] = (HEAP32[i70 >> 2] | 0) + (1 - i222) + i479;
       }
       if (!i78) {
        break;
       }
       __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
      }
     } while (0);
     if ((HEAP8[i82] & 1) != 0) {
      i88 = 2090;
      break;
     }
     i218 = HEAP16[i80 >> 1] | 0;
     HEAP16[i3 >> 1] = i218;
     if ((i218 & 65535) >>> 0 > 15 >>> 0) {
      HEAP8[i72] = 0;
      i89 = i218;
      i90 = i237;
      i91 = i77;
      i92 = i409;
      i93 = i219;
      i94 = i75;
      i95 = i72;
      i96 = i76;
      i97 = i225;
      i98 = i224;
      i99 = i70;
      i100 = i324;
      i101 = i73;
      i88 = 2091;
      continue;
     }
     if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
      i88 = 2090;
      break;
     }
     i89 = HEAP16[i3 >> 1] | 0;
     i90 = i237;
     i91 = i77;
     i92 = i409;
     i93 = i219;
     i94 = i75;
     i95 = i72;
     i96 = i76;
     i97 = i225;
     i98 = i224;
     i99 = i70;
     i100 = i324;
     i101 = i73;
     i88 = 2091;
     continue;
    } else if ((i88 | 0) == 93) {
     i88 = 0;
     i218 = i102;
     L2456 : while (1) {
      switch (i218 << 16 >> 16) {
      case 32:
      case 10:
      case 9:
      case 12:
       {
        break;
       }
      case 47:
       {
        i88 = 2233;
        break L2456;
        break;
       }
      case 61:
       {
        i88 = 2251;
        break L2456;
        break;
       }
      case 62:
       {
        i88 = 2269;
        break L110;
        break;
       }
      default:
       {
        i88 = 2270;
        break L2456;
       }
      }
      HEAP32[i79 >> 2] = 35;
      i221 = HEAPU8[i104] | 0;
      do {
       if ((i221 & 2 | 0) == 0) {
        i69 = i106 + (HEAP32[i105 + 4 >> 2] | 0) | 0;
        i71 = HEAP32[i105 >> 2] | 0;
        if ((i71 & 1 | 0) == 0) {
         i480 = i71;
        } else {
         i480 = HEAP32[(HEAP32[i69 >> 2] | 0) + (i71 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i480 & 15](i69);
       } else {
        i69 = (HEAP16[i80 >> 1] | 0) == 10 & i221;
        i71 = HEAP32[i108 >> 2] | 0;
        i74 = i71 - 1 | 0;
        HEAP32[i108 >> 2] = i74;
        i325 = (i74 | 0) == 1;
        i74 = (HEAP32[i109 >> 2] | 0) + 1 | 0;
        HEAP32[i109 >> 2] = i74;
        HEAP16[i80 >> 1] = HEAPU8[i74] | 0;
        if ((i325 & 1 | i69 | 0) == 0) {
         break;
        }
        if ((i69 | 0) != 0) {
         HEAP32[i110 >> 2] = (HEAP32[i110 >> 2] | 0) + 1;
         i69 = HEAP32[i112 >> 2] | 0;
         if ((i69 | 0) == 0) {
          i481 = 0;
         } else {
          i481 = HEAP32[i69 + 4 >> 2] | 0;
         }
         HEAP32[i113 >> 2] = (HEAP32[i111 >> 2] | 0) + (1 - i71) + i481;
        }
        if (!i325) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 2232;
       break L110;
      }
      i221 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i221;
      if ((i221 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i107] = 0;
       i218 = i221;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 2232;
       break L110;
      }
      i218 = HEAP16[i3 >> 1] | 0;
     }
     if ((i88 | 0) == 2233) {
      i88 = 0;
      HEAP32[i79 >> 2] = 42;
      i73 = HEAPU8[i104] | 0;
      do {
       if ((i73 & 2 | 0) == 0) {
        i324 = i106 + (HEAP32[i105 + 4 >> 2] | 0) | 0;
        i70 = HEAP32[i105 >> 2] | 0;
        if ((i70 & 1 | 0) == 0) {
         i482 = i70;
        } else {
         i482 = HEAP32[(HEAP32[i324 >> 2] | 0) + (i70 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i482 & 15](i324);
       } else {
        i324 = (HEAP16[i80 >> 1] | 0) == 10 & i73;
        i70 = HEAP32[i108 >> 2] | 0;
        i224 = i70 - 1 | 0;
        HEAP32[i108 >> 2] = i224;
        i225 = (i224 | 0) == 1;
        i224 = (HEAP32[i109 >> 2] | 0) + 1 | 0;
        HEAP32[i109 >> 2] = i224;
        HEAP16[i80 >> 1] = HEAPU8[i224] | 0;
        if ((i225 & 1 | i324 | 0) == 0) {
         break;
        }
        if ((i324 | 0) != 0) {
         HEAP32[i110 >> 2] = (HEAP32[i110 >> 2] | 0) + 1;
         i324 = HEAP32[i112 >> 2] | 0;
         if ((i324 | 0) == 0) {
          i483 = 0;
         } else {
          i483 = HEAP32[i324 + 4 >> 2] | 0;
         }
         HEAP32[i113 >> 2] = (HEAP32[i111 >> 2] | 0) + (1 - i70) + i483;
        }
        if (!i225) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 2250;
       break;
      }
      i73 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i73;
      if ((i73 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i107] = 0;
       i264 = i73;
       i265 = i103;
       i88 = 2709;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 2250;
       break;
      }
      i264 = HEAP16[i3 >> 1] | 0;
      i265 = i103;
      i88 = 2709;
      continue;
     } else if ((i88 | 0) == 2251) {
      i88 = 0;
      HEAP32[i79 >> 2] = 36;
      i73 = HEAPU8[i104] | 0;
      do {
       if ((i73 & 2 | 0) == 0) {
        i225 = i106 + (HEAP32[i105 + 4 >> 2] | 0) | 0;
        i70 = HEAP32[i105 >> 2] | 0;
        if ((i70 & 1 | 0) == 0) {
         i484 = i70;
        } else {
         i484 = HEAP32[(HEAP32[i225 >> 2] | 0) + (i70 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i484 & 15](i225);
       } else {
        i225 = (HEAP16[i80 >> 1] | 0) == 10 & i73;
        i70 = HEAP32[i108 >> 2] | 0;
        i324 = i70 - 1 | 0;
        HEAP32[i108 >> 2] = i324;
        i224 = (i324 | 0) == 1;
        i324 = (HEAP32[i109 >> 2] | 0) + 1 | 0;
        HEAP32[i109 >> 2] = i324;
        HEAP16[i80 >> 1] = HEAPU8[i324] | 0;
        if ((i224 & 1 | i225 | 0) == 0) {
         break;
        }
        if ((i225 | 0) != 0) {
         HEAP32[i110 >> 2] = (HEAP32[i110 >> 2] | 0) + 1;
         i225 = HEAP32[i112 >> 2] | 0;
         if ((i225 | 0) == 0) {
          i485 = 0;
         } else {
          i485 = HEAP32[i225 + 4 >> 2] | 0;
         }
         HEAP32[i113 >> 2] = (HEAP32[i111 >> 2] | 0) + (1 - i70) + i485;
        }
        if (!i224) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 2268;
       break;
      }
      i73 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i73;
      if ((i73 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i107] = 0;
       i114 = i73;
       i115 = i103;
       i116 = i104;
       i117 = i105;
       i118 = i106;
       i119 = i107;
       i120 = i108;
       i121 = i109;
       i122 = i110;
       i123 = i111;
       i124 = i112;
       i125 = i113;
       i88 = 94;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 2268;
       break;
      }
      i114 = HEAP16[i3 >> 1] | 0;
      i115 = i103;
      i116 = i104;
      i117 = i105;
      i118 = i106;
      i119 = i107;
      i120 = i108;
      i121 = i109;
      i122 = i110;
      i123 = i111;
      i124 = i112;
      i125 = i113;
      i88 = 94;
      continue;
     } else if ((i88 | 0) == 2270) {
      i88 = 0;
      i73 = i1 + 190 | 0;
      if ((HEAP8[i73] & 1) != 0 & i218 << 16 >> 16 == 60) {
       i88 = 2271;
       break;
      }
      if ((i218 - 65 & 65535) >>> 0 < 26 >>> 0) {
       i224 = HEAP32[i66 >> 2] | 0;
       i70 = i224 + 544 | 0;
       i225 = i224 + 552 | 0;
       i324 = (HEAP32[i225 >> 2] | 0) + 1 | 0;
       i76 = HEAP32[i224 + 548 >> 2] | 0;
       if (i76 >>> 0 < i324 >>> 0) {
        i72 = i76 + 1 + (i76 >>> 2) | 0;
        i76 = i72 >>> 0 > 16 >>> 0 ? i72 : 16;
        __ZN3WTF6VectorIN7WebCore9HTMLToken9AttributeELj10ENS_15CrashOnOverflowEE15reserveCapacityEj(i70, i76 >>> 0 > i324 >>> 0 ? i76 : i324);
       }
       i76 = i70 | 0;
       i70 = HEAP32[i76 >> 2] | 0;
       do {
        if ((i70 | 0) != 0) {
         i72 = HEAP32[i225 >> 2] | 0;
         i75 = i70 + (i324 * 168 & -1) | 0;
         if ((i72 | 0) == (i324 | 0)) {
          break;
         }
         i219 = i70 + (i72 * 168 & -1) | 0;
         while (1) {
          HEAP32[i219 + 16 >> 2] = i219 + 28;
          HEAP32[i219 + 20 >> 2] = 32;
          HEAP32[i219 + 24 >> 2] = 0;
          HEAP32[i219 + 92 >> 2] = i219 + 104;
          HEAP32[i219 + 96 >> 2] = 32;
          HEAP32[i219 + 100 >> 2] = 0;
          i219 = i219 + 168 | 0;
          if ((i219 | 0) == (i75 | 0)) {
           break;
          }
         }
        }
       } while (0);
       HEAP32[i225 >> 2] = i324;
       i70 = _llvm_uadd_with_overflow_i32(i324 | 0, -1 | 0) | 0;
       if (!tempRet0) {
        i88 = 2282;
        break;
       }
       HEAP32[i224 + 2236 >> 2] = (HEAP32[i76 >> 2] | 0) + (i70 * 168 & -1);
       i70 = HEAP32[i66 >> 2] | 0;
       if ((HEAP16[i2 >> 1] | 0) == 0) {
        i486 = 0;
       } else {
        i486 = (HEAP16[i2 + 2 >> 1] | 0) == 0 ? 1 : 2;
       }
       i75 = HEAP32[i112 >> 2] | 0;
       if ((i75 | 0) == 0) {
        i487 = 0;
       } else {
        i487 = HEAP32[i75 + 4 >> 2] | 0;
       }
       HEAP32[HEAP32[i70 + 2236 >> 2] >> 2] = (HEAP32[i111 >> 2] | 0) - i486 + i487 - (HEAP32[i108 >> 2] | 0) - (HEAP32[i70 + 12 >> 2] | 0);
       __ZN7WebCore9HTMLToken21appendToAttributeNameEt(HEAP32[i66 >> 2] | 0, i218 + 32 & 65535);
       HEAP32[i79 >> 2] = 34;
       i70 = HEAPU8[i104] | 0;
       do {
        if ((i70 & 2 | 0) == 0) {
         i75 = i106 + (HEAP32[i105 + 4 >> 2] | 0) | 0;
         i219 = HEAP32[i105 >> 2] | 0;
         if ((i219 & 1 | 0) == 0) {
          i488 = i219;
         } else {
          i488 = HEAP32[(HEAP32[i75 >> 2] | 0) + (i219 - 1) >> 2] | 0;
         }
         FUNCTION_TABLE_vi[i488 & 15](i75);
        } else {
         i75 = (HEAP16[i80 >> 1] | 0) == 10 & i70;
         i219 = HEAP32[i108 >> 2] | 0;
         i72 = i219 - 1 | 0;
         HEAP32[i108 >> 2] = i72;
         i409 = (i72 | 0) == 1;
         i72 = (HEAP32[i109 >> 2] | 0) + 1 | 0;
         HEAP32[i109 >> 2] = i72;
         HEAP16[i80 >> 1] = HEAPU8[i72] | 0;
         if ((i409 & 1 | i75 | 0) == 0) {
          break;
         }
         if ((i75 | 0) != 0) {
          HEAP32[i110 >> 2] = (HEAP32[i110 >> 2] | 0) + 1;
          i75 = HEAP32[i112 >> 2] | 0;
          if ((i75 | 0) == 0) {
           i489 = 0;
          } else {
           i489 = HEAP32[i75 + 4 >> 2] | 0;
          }
          HEAP32[i113 >> 2] = (HEAP32[i111 >> 2] | 0) + (1 - i219) + i489;
         }
         if (!i409) {
          break;
         }
         __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
        }
       } while (0);
       if ((HEAP8[i82] & 1) != 0) {
        i88 = 2304;
        break;
       }
       i70 = HEAP16[i80 >> 1] | 0;
       HEAP16[i3 >> 1] = i70;
       if ((i70 & 65535) >>> 0 > 15 >>> 0) {
        HEAP8[i107] = 0;
        i89 = i70;
        i90 = i103;
        i91 = i73;
        i92 = i104;
        i93 = i105;
        i94 = i106;
        i95 = i107;
        i96 = i108;
        i97 = i109;
        i98 = i110;
        i99 = i111;
        i100 = i112;
        i101 = i113;
        i88 = 2091;
        continue;
       }
       if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
        i88 = 2304;
        break;
       }
       i89 = HEAP16[i3 >> 1] | 0;
       i90 = i103;
       i91 = i73;
       i92 = i104;
       i93 = i105;
       i94 = i106;
       i95 = i107;
       i96 = i108;
       i97 = i109;
       i98 = i110;
       i99 = i111;
       i100 = i112;
       i101 = i113;
       i88 = 2091;
       continue;
      }
      if (i218 << 16 >> 16 == 0) {
       HEAP32[i79 >> 2] = 0;
       i232 = 0;
       i233 = i103;
       i88 = 79;
       continue;
      }
      i70 = HEAP32[i66 >> 2] | 0;
      i76 = i70 + 544 | 0;
      i224 = i70 + 552 | 0;
      i324 = (HEAP32[i224 >> 2] | 0) + 1 | 0;
      i225 = HEAP32[i70 + 548 >> 2] | 0;
      if (i225 >>> 0 < i324 >>> 0) {
       i409 = i225 + 1 + (i225 >>> 2) | 0;
       i225 = i409 >>> 0 > 16 >>> 0 ? i409 : 16;
       __ZN3WTF6VectorIN7WebCore9HTMLToken9AttributeELj10ENS_15CrashOnOverflowEE15reserveCapacityEj(i76, i225 >>> 0 > i324 >>> 0 ? i225 : i324);
      }
      i225 = i76 | 0;
      i76 = HEAP32[i225 >> 2] | 0;
      do {
       if ((i76 | 0) != 0) {
        i409 = HEAP32[i224 >> 2] | 0;
        i219 = i76 + (i324 * 168 & -1) | 0;
        if ((i409 | 0) == (i324 | 0)) {
         break;
        }
        i75 = i76 + (i409 * 168 & -1) | 0;
        while (1) {
         HEAP32[i75 + 16 >> 2] = i75 + 28;
         HEAP32[i75 + 20 >> 2] = 32;
         HEAP32[i75 + 24 >> 2] = 0;
         HEAP32[i75 + 92 >> 2] = i75 + 104;
         HEAP32[i75 + 96 >> 2] = 32;
         HEAP32[i75 + 100 >> 2] = 0;
         i75 = i75 + 168 | 0;
         if ((i75 | 0) == (i219 | 0)) {
          break;
         }
        }
       }
      } while (0);
      HEAP32[i224 >> 2] = i324;
      i76 = _llvm_uadd_with_overflow_i32(i324 | 0, -1 | 0) | 0;
      if (!tempRet0) {
       i88 = 2314;
       break;
      }
      HEAP32[i70 + 2236 >> 2] = (HEAP32[i225 >> 2] | 0) + (i76 * 168 & -1);
      i76 = HEAP32[i66 >> 2] | 0;
      if ((HEAP16[i2 >> 1] | 0) == 0) {
       i490 = 0;
      } else {
       i490 = (HEAP16[i2 + 2 >> 1] | 0) == 0 ? 1 : 2;
      }
      i219 = HEAP32[i112 >> 2] | 0;
      if ((i219 | 0) == 0) {
       i491 = 0;
      } else {
       i491 = HEAP32[i219 + 4 >> 2] | 0;
      }
      HEAP32[HEAP32[i76 + 2236 >> 2] >> 2] = (HEAP32[i111 >> 2] | 0) - i490 + i491 - (HEAP32[i108 >> 2] | 0) - (HEAP32[i76 + 12 >> 2] | 0);
      __ZN7WebCore9HTMLToken21appendToAttributeNameEt(HEAP32[i66 >> 2] | 0, i218);
      HEAP32[i79 >> 2] = 34;
      i76 = HEAPU8[i104] | 0;
      do {
       if ((i76 & 2 | 0) == 0) {
        i219 = i106 + (HEAP32[i105 + 4 >> 2] | 0) | 0;
        i75 = HEAP32[i105 >> 2] | 0;
        if ((i75 & 1 | 0) == 0) {
         i492 = i75;
        } else {
         i492 = HEAP32[(HEAP32[i219 >> 2] | 0) + (i75 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i492 & 15](i219);
       } else {
        i219 = (HEAP16[i80 >> 1] | 0) == 10 & i76;
        i75 = HEAP32[i108 >> 2] | 0;
        i409 = i75 - 1 | 0;
        HEAP32[i108 >> 2] = i409;
        i72 = (i409 | 0) == 1;
        i409 = (HEAP32[i109 >> 2] | 0) + 1 | 0;
        HEAP32[i109 >> 2] = i409;
        HEAP16[i80 >> 1] = HEAPU8[i409] | 0;
        if ((i72 & 1 | i219 | 0) == 0) {
         break;
        }
        if ((i219 | 0) != 0) {
         HEAP32[i110 >> 2] = (HEAP32[i110 >> 2] | 0) + 1;
         i219 = HEAP32[i112 >> 2] | 0;
         if ((i219 | 0) == 0) {
          i493 = 0;
         } else {
          i493 = HEAP32[i219 + 4 >> 2] | 0;
         }
         HEAP32[i113 >> 2] = (HEAP32[i111 >> 2] | 0) + (1 - i75) + i493;
        }
        if (!i72) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 2336;
       break;
      }
      i76 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i76;
      if ((i76 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i107] = 0;
       i89 = i76;
       i90 = i103;
       i91 = i73;
       i92 = i104;
       i93 = i105;
       i94 = i106;
       i95 = i107;
       i96 = i108;
       i97 = i109;
       i98 = i110;
       i99 = i111;
       i100 = i112;
       i101 = i113;
       i88 = 2091;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 2336;
       break;
      }
      i89 = HEAP16[i3 >> 1] | 0;
      i90 = i103;
      i91 = i73;
      i92 = i104;
      i93 = i105;
      i94 = i106;
      i95 = i107;
      i96 = i108;
      i97 = i109;
      i98 = i110;
      i99 = i111;
      i100 = i112;
      i101 = i113;
      i88 = 2091;
      continue;
     }
    } else if ((i88 | 0) == 94) {
     i88 = 0;
     i76 = i114;
     L2608 : while (1) {
      switch (i76 << 16 >> 16) {
      case 32:
      case 10:
      case 9:
      case 12:
       {
        break;
       }
      case 34:
       {
        i88 = 2356;
        break L2608;
        break;
       }
      case 38:
       {
        i88 = 2378;
        break L2608;
        break;
       }
      case 39:
       {
        i88 = 2383;
        break L2608;
        break;
       }
      case 62:
       {
        i88 = 2405;
        break L110;
        break;
       }
      case 0:
       {
        i88 = 2406;
        break L2608;
        break;
       }
      default:
       {
        i88 = 2407;
        break L2608;
       }
      }
      HEAP32[i79 >> 2] = 36;
      i218 = HEAPU8[i116] | 0;
      do {
       if ((i218 & 2 | 0) == 0) {
        i225 = i118 + (HEAP32[i117 + 4 >> 2] | 0) | 0;
        i70 = HEAP32[i117 >> 2] | 0;
        if ((i70 & 1 | 0) == 0) {
         i494 = i70;
        } else {
         i494 = HEAP32[(HEAP32[i225 >> 2] | 0) + (i70 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i494 & 15](i225);
       } else {
        i225 = (HEAP16[i80 >> 1] | 0) == 10 & i218;
        i70 = HEAP32[i120 >> 2] | 0;
        i324 = i70 - 1 | 0;
        HEAP32[i120 >> 2] = i324;
        i224 = (i324 | 0) == 1;
        i324 = (HEAP32[i121 >> 2] | 0) + 1 | 0;
        HEAP32[i121 >> 2] = i324;
        HEAP16[i80 >> 1] = HEAPU8[i324] | 0;
        if ((i224 & 1 | i225 | 0) == 0) {
         break;
        }
        if ((i225 | 0) != 0) {
         HEAP32[i122 >> 2] = (HEAP32[i122 >> 2] | 0) + 1;
         i225 = HEAP32[i124 >> 2] | 0;
         if ((i225 | 0) == 0) {
          i495 = 0;
         } else {
          i495 = HEAP32[i225 + 4 >> 2] | 0;
         }
         HEAP32[i125 >> 2] = (HEAP32[i123 >> 2] | 0) + (1 - i70) + i495;
        }
        if (!i224) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 2355;
       break L110;
      }
      i218 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i218;
      if ((i218 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i119] = 0;
       i76 = i218;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 2355;
       break L110;
      }
      i76 = HEAP16[i3 >> 1] | 0;
     }
     if ((i88 | 0) == 2356) {
      i88 = 0;
      i73 = HEAP32[i66 >> 2] | 0;
      if ((HEAP16[i2 >> 1] | 0) == 0) {
       i496 = 0;
      } else {
       i496 = (HEAP16[i2 + 2 >> 1] | 0) == 0 ? 1 : 2;
      }
      i218 = HEAP32[i124 >> 2] | 0;
      if ((i218 | 0) == 0) {
       i497 = 0;
      } else {
       i497 = HEAP32[i218 + 4 >> 2] | 0;
      }
      HEAP32[(HEAP32[i73 + 2236 >> 2] | 0) + 8 >> 2] = 1 - i496 + (HEAP32[i123 >> 2] | 0) + i497 - (HEAP32[i120 >> 2] | 0) - (HEAP32[i73 + 12 >> 2] | 0);
      HEAP32[i79 >> 2] = 37;
      i73 = HEAPU8[i116] | 0;
      do {
       if ((i73 & 2 | 0) == 0) {
        i218 = i118 + (HEAP32[i117 + 4 >> 2] | 0) | 0;
        i224 = HEAP32[i117 >> 2] | 0;
        if ((i224 & 1 | 0) == 0) {
         i498 = i224;
        } else {
         i498 = HEAP32[(HEAP32[i218 >> 2] | 0) + (i224 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i498 & 15](i218);
       } else {
        i218 = (HEAP16[i80 >> 1] | 0) == 10 & i73;
        i224 = HEAP32[i120 >> 2] | 0;
        i70 = i224 - 1 | 0;
        HEAP32[i120 >> 2] = i70;
        i225 = (i70 | 0) == 1;
        i70 = (HEAP32[i121 >> 2] | 0) + 1 | 0;
        HEAP32[i121 >> 2] = i70;
        HEAP16[i80 >> 1] = HEAPU8[i70] | 0;
        if ((i225 & 1 | i218 | 0) == 0) {
         break;
        }
        if ((i218 | 0) != 0) {
         HEAP32[i122 >> 2] = (HEAP32[i122 >> 2] | 0) + 1;
         i218 = HEAP32[i124 >> 2] | 0;
         if ((i218 | 0) == 0) {
          i499 = 0;
         } else {
          i499 = HEAP32[i218 + 4 >> 2] | 0;
         }
         HEAP32[i125 >> 2] = (HEAP32[i123 >> 2] | 0) + (1 - i224) + i499;
        }
        if (!i225) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 2377;
       break;
      }
      i73 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i73;
      if ((i73 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i119] = 0;
       i240 = i73;
       i241 = i115;
       i88 = 96;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 2377;
       break;
      }
      i240 = HEAP16[i3 >> 1] | 0;
      i241 = i115;
      i88 = 96;
      continue;
     } else if ((i88 | 0) == 2378) {
      i88 = 0;
      i73 = HEAP32[i66 >> 2] | 0;
      if ((HEAP16[i2 >> 1] | 0) == 0) {
       i500 = 0;
      } else {
       i500 = (HEAP16[i2 + 2 >> 1] | 0) == 0 ? 1 : 2;
      }
      i225 = HEAP32[i124 >> 2] | 0;
      if ((i225 | 0) == 0) {
       i501 = 0;
      } else {
       i501 = HEAP32[i225 + 4 >> 2] | 0;
      }
      HEAP32[(HEAP32[i73 + 2236 >> 2] | 0) + 8 >> 2] = (HEAP32[i123 >> 2] | 0) - i500 + i501 - (HEAP32[i120 >> 2] | 0) - (HEAP32[i73 + 12 >> 2] | 0);
      HEAP32[i79 >> 2] = 39;
      i260 = 38;
      i261 = i115;
      i88 = 2663;
      continue;
     } else if ((i88 | 0) == 2383) {
      i88 = 0;
      i73 = HEAP32[i66 >> 2] | 0;
      if ((HEAP16[i2 >> 1] | 0) == 0) {
       i502 = 0;
      } else {
       i502 = (HEAP16[i2 + 2 >> 1] | 0) == 0 ? 1 : 2;
      }
      i225 = HEAP32[i124 >> 2] | 0;
      if ((i225 | 0) == 0) {
       i503 = 0;
      } else {
       i503 = HEAP32[i225 + 4 >> 2] | 0;
      }
      HEAP32[(HEAP32[i73 + 2236 >> 2] | 0) + 8 >> 2] = 1 - i502 + (HEAP32[i123 >> 2] | 0) + i503 - (HEAP32[i120 >> 2] | 0) - (HEAP32[i73 + 12 >> 2] | 0);
      HEAP32[i79 >> 2] = 38;
      i73 = HEAPU8[i116] | 0;
      do {
       if ((i73 & 2 | 0) == 0) {
        i225 = i118 + (HEAP32[i117 + 4 >> 2] | 0) | 0;
        i224 = HEAP32[i117 >> 2] | 0;
        if ((i224 & 1 | 0) == 0) {
         i504 = i224;
        } else {
         i504 = HEAP32[(HEAP32[i225 >> 2] | 0) + (i224 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i504 & 15](i225);
       } else {
        i225 = (HEAP16[i80 >> 1] | 0) == 10 & i73;
        i224 = HEAP32[i120 >> 2] | 0;
        i218 = i224 - 1 | 0;
        HEAP32[i120 >> 2] = i218;
        i70 = (i218 | 0) == 1;
        i218 = (HEAP32[i121 >> 2] | 0) + 1 | 0;
        HEAP32[i121 >> 2] = i218;
        HEAP16[i80 >> 1] = HEAPU8[i218] | 0;
        if ((i70 & 1 | i225 | 0) == 0) {
         break;
        }
        if ((i225 | 0) != 0) {
         HEAP32[i122 >> 2] = (HEAP32[i122 >> 2] | 0) + 1;
         i225 = HEAP32[i124 >> 2] | 0;
         if ((i225 | 0) == 0) {
          i505 = 0;
         } else {
          i505 = HEAP32[i225 + 4 >> 2] | 0;
         }
         HEAP32[i125 >> 2] = (HEAP32[i123 >> 2] | 0) + (1 - i224) + i505;
        }
        if (!i70) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 2404;
       break;
      }
      i73 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i73;
      if ((i73 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i119] = 0;
       i238 = i73;
       i239 = i115;
       i88 = 95;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 2404;
       break;
      }
      i238 = HEAP16[i3 >> 1] | 0;
      i239 = i115;
      i88 = 95;
      continue;
     } else if ((i88 | 0) == 2406) {
      i88 = 0;
      HEAP32[i79 >> 2] = 0;
      i232 = 0;
      i233 = i115;
      i88 = 79;
      continue;
     } else if ((i88 | 0) == 2407) {
      i88 = 0;
      i73 = HEAP32[i66 >> 2] | 0;
      if ((HEAP16[i2 >> 1] | 0) == 0) {
       i506 = 0;
      } else {
       i506 = (HEAP16[i2 + 2 >> 1] | 0) == 0 ? 1 : 2;
      }
      i70 = HEAP32[i124 >> 2] | 0;
      if ((i70 | 0) == 0) {
       i507 = 0;
      } else {
       i507 = HEAP32[i70 + 4 >> 2] | 0;
      }
      HEAP32[(HEAP32[i73 + 2236 >> 2] | 0) + 8 >> 2] = (HEAP32[i123 >> 2] | 0) - i506 + i507 - (HEAP32[i120 >> 2] | 0) - (HEAP32[i73 + 12 >> 2] | 0);
      __ZN7WebCore9HTMLToken22appendToAttributeValueEt(HEAP32[i66 >> 2] | 0, i76);
      HEAP32[i79 >> 2] = 39;
      i73 = HEAPU8[i116] | 0;
      do {
       if ((i73 & 2 | 0) == 0) {
        i70 = i118 + (HEAP32[i117 + 4 >> 2] | 0) | 0;
        i224 = HEAP32[i117 >> 2] | 0;
        if ((i224 & 1 | 0) == 0) {
         i508 = i224;
        } else {
         i508 = HEAP32[(HEAP32[i70 >> 2] | 0) + (i224 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i508 & 15](i70);
       } else {
        i70 = (HEAP16[i80 >> 1] | 0) == 10 & i73;
        i224 = HEAP32[i120 >> 2] | 0;
        i225 = i224 - 1 | 0;
        HEAP32[i120 >> 2] = i225;
        i218 = (i225 | 0) == 1;
        i225 = (HEAP32[i121 >> 2] | 0) + 1 | 0;
        HEAP32[i121 >> 2] = i225;
        HEAP16[i80 >> 1] = HEAPU8[i225] | 0;
        if ((i218 & 1 | i70 | 0) == 0) {
         break;
        }
        if ((i70 | 0) != 0) {
         HEAP32[i122 >> 2] = (HEAP32[i122 >> 2] | 0) + 1;
         i70 = HEAP32[i124 >> 2] | 0;
         if ((i70 | 0) == 0) {
          i509 = 0;
         } else {
          i509 = HEAP32[i70 + 4 >> 2] | 0;
         }
         HEAP32[i125 >> 2] = (HEAP32[i123 >> 2] | 0) + (1 - i224) + i509;
        }
        if (!i218) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 2428;
       break;
      }
      i73 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i73;
      if ((i73 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i119] = 0;
       i260 = i73;
       i261 = i115;
       i88 = 2663;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 2428;
       break;
      }
      i260 = HEAP16[i3 >> 1] | 0;
      i261 = i115;
      i88 = 2663;
      continue;
     }
    } else if ((i88 | 0) == 95) {
     i88 = 0;
     i73 = i2 + 58 | 0;
     i76 = i2 + 68 | 0;
     i218 = i2;
     i224 = i1 + 22 | 0;
     i70 = i2 + 8 | 0;
     i225 = i2 + 4 | 0;
     i324 = i2 + 32 | 0;
     i72 = i2 + 24 | 0;
     i75 = i2 + 16 | 0;
     i219 = i2 + 28 | 0;
     i409 = i238;
     while (1) {
      if ((i409 << 16 >> 16 | 0) == 39) {
       i88 = 2494;
       break;
      } else if ((i409 << 16 >> 16 | 0) == 38) {
       i88 = 2516;
       break;
      } else if ((i409 << 16 >> 16 | 0) == 0) {
       i88 = 2534;
       break;
      }
      __ZN7WebCore9HTMLToken22appendToAttributeValueEt(HEAP32[i66 >> 2] | 0, i409);
      HEAP32[i79 >> 2] = 38;
      i77 = HEAPU8[i73] | 0;
      do {
       if ((i77 & 2 | 0) == 0) {
        i221 = i218 + (HEAP32[i76 + 4 >> 2] | 0) | 0;
        i325 = HEAP32[i76 >> 2] | 0;
        if ((i325 & 1 | 0) == 0) {
         i510 = i325;
        } else {
         i510 = HEAP32[(HEAP32[i221 >> 2] | 0) + (i325 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i510 & 15](i221);
       } else {
        i221 = (HEAP16[i80 >> 1] | 0) == 10 & i77;
        i325 = HEAP32[i70 >> 2] | 0;
        i71 = i325 - 1 | 0;
        HEAP32[i70 >> 2] = i71;
        i69 = (i71 | 0) == 1;
        i71 = (HEAP32[i225 >> 2] | 0) + 1 | 0;
        HEAP32[i225 >> 2] = i71;
        HEAP16[i80 >> 1] = HEAPU8[i71] | 0;
        if ((i69 & 1 | i221 | 0) == 0) {
         break;
        }
        if ((i221 | 0) != 0) {
         HEAP32[i324 >> 2] = (HEAP32[i324 >> 2] | 0) + 1;
         i221 = HEAP32[i75 >> 2] | 0;
         if ((i221 | 0) == 0) {
          i511 = 0;
         } else {
          i511 = HEAP32[i221 + 4 >> 2] | 0;
         }
         HEAP32[i219 >> 2] = (HEAP32[i72 >> 2] | 0) + (1 - i325) + i511;
        }
        if (!i69) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 2556;
       break L110;
      }
      i77 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i77;
      if ((i77 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i224] = 0;
       i409 = i77;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 2556;
       break L110;
      }
      i409 = HEAP16[i3 >> 1] | 0;
     }
     if ((i88 | 0) == 2494) {
      i88 = 0;
      i409 = HEAP32[i66 >> 2] | 0;
      if ((HEAP16[i2 >> 1] | 0) == 0) {
       i512 = 0;
      } else {
       i512 = (HEAP16[i2 + 2 >> 1] | 0) == 0 ? 1 : 2;
      }
      i77 = HEAP32[i75 >> 2] | 0;
      if ((i77 | 0) == 0) {
       i513 = 0;
      } else {
       i513 = HEAP32[i77 + 4 >> 2] | 0;
      }
      HEAP32[(HEAP32[i409 + 2236 >> 2] | 0) + 12 >> 2] = (HEAP32[i72 >> 2] | 0) - i512 + i513 - (HEAP32[i70 >> 2] | 0) - (HEAP32[i409 + 12 >> 2] | 0);
      HEAP32[i79 >> 2] = 41;
      i409 = HEAPU8[i73] | 0;
      do {
       if ((i409 & 2 | 0) == 0) {
        i77 = i218 + (HEAP32[i76 + 4 >> 2] | 0) | 0;
        i69 = HEAP32[i76 >> 2] | 0;
        if ((i69 & 1 | 0) == 0) {
         i514 = i69;
        } else {
         i514 = HEAP32[(HEAP32[i77 >> 2] | 0) + (i69 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i514 & 15](i77);
       } else {
        i77 = (HEAP16[i80 >> 1] | 0) == 10 & i409;
        i69 = HEAP32[i70 >> 2] | 0;
        i325 = i69 - 1 | 0;
        HEAP32[i70 >> 2] = i325;
        i221 = (i325 | 0) == 1;
        i325 = (HEAP32[i225 >> 2] | 0) + 1 | 0;
        HEAP32[i225 >> 2] = i325;
        HEAP16[i80 >> 1] = HEAPU8[i325] | 0;
        if ((i221 & 1 | i77 | 0) == 0) {
         break;
        }
        if ((i77 | 0) != 0) {
         HEAP32[i324 >> 2] = (HEAP32[i324 >> 2] | 0) + 1;
         i77 = HEAP32[i75 >> 2] | 0;
         if ((i77 | 0) == 0) {
          i515 = 0;
         } else {
          i515 = HEAP32[i77 + 4 >> 2] | 0;
         }
         HEAP32[i219 >> 2] = (HEAP32[i72 >> 2] | 0) + (1 - i69) + i515;
        }
        if (!i221) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 2515;
       break;
      }
      i409 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i409;
      if ((i409 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i224] = 0;
       i262 = i409;
       i263 = i239;
       i88 = 2664;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 2515;
       break;
      }
      i262 = HEAP16[i3 >> 1] | 0;
      i263 = i239;
      i88 = 2664;
      continue;
     } else if ((i88 | 0) == 2516) {
      i88 = 0;
      i409 = i1 + 12 | 0;
      HEAP16[i409 >> 1] = 39;
      HEAP32[i79 >> 2] = 40;
      i221 = HEAPU8[i73] | 0;
      do {
       if ((i221 & 2 | 0) == 0) {
        i69 = i218 + (HEAP32[i76 + 4 >> 2] | 0) | 0;
        i77 = HEAP32[i76 >> 2] | 0;
        if ((i77 & 1 | 0) == 0) {
         i516 = i77;
        } else {
         i516 = HEAP32[(HEAP32[i69 >> 2] | 0) + (i77 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i516 & 15](i69);
       } else {
        i69 = (HEAP16[i80 >> 1] | 0) == 10 & i221;
        i77 = HEAP32[i70 >> 2] | 0;
        i325 = i77 - 1 | 0;
        HEAP32[i70 >> 2] = i325;
        i71 = (i325 | 0) == 1;
        i325 = (HEAP32[i225 >> 2] | 0) + 1 | 0;
        HEAP32[i225 >> 2] = i325;
        HEAP16[i80 >> 1] = HEAPU8[i325] | 0;
        if ((i71 & 1 | i69 | 0) == 0) {
         break;
        }
        if ((i69 | 0) != 0) {
         HEAP32[i324 >> 2] = (HEAP32[i324 >> 2] | 0) + 1;
         i69 = HEAP32[i75 >> 2] | 0;
         if ((i69 | 0) == 0) {
          i517 = 0;
         } else {
          i517 = HEAP32[i69 + 4 >> 2] | 0;
         }
         HEAP32[i219 >> 2] = (HEAP32[i72 >> 2] | 0) + (1 - i77) + i517;
        }
        if (!i71) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 2533;
       break;
      }
      i219 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i219;
      if ((i219 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i224] = 0;
       i126 = i219;
       i127 = i239;
       i128 = i409;
       i88 = 2626;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 2533;
       break;
      }
      i126 = HEAP16[i3 >> 1] | 0;
      i127 = i239;
      i128 = i409;
      i88 = 2626;
      continue;
     } else if ((i88 | 0) == 2534) {
      i88 = 0;
      i219 = HEAP32[i66 >> 2] | 0;
      if ((HEAP16[i2 >> 1] | 0) == 0) {
       i518 = 0;
      } else {
       i518 = (HEAP16[i2 + 2 >> 1] | 0) == 0 ? 1 : 2;
      }
      i324 = HEAP32[i75 >> 2] | 0;
      if ((i324 | 0) == 0) {
       i519 = 0;
      } else {
       i519 = HEAP32[i324 + 4 >> 2] | 0;
      }
      HEAP32[(HEAP32[i219 + 2236 >> 2] | 0) + 12 >> 2] = (HEAP32[i72 >> 2] | 0) - i518 + i519 - (HEAP32[i70 >> 2] | 0) - (HEAP32[i219 + 12 >> 2] | 0);
      HEAP32[i79 >> 2] = 0;
      i232 = 0;
      i233 = i239;
      i88 = 79;
      continue;
     }
    } else if ((i88 | 0) == 96) {
     i88 = 0;
     i219 = i2 + 58 | 0;
     i324 = i2 + 68 | 0;
     i225 = i2;
     i221 = i1 + 22 | 0;
     i76 = i2 + 8 | 0;
     i218 = i2 + 4 | 0;
     i73 = i2 + 32 | 0;
     i71 = i2 + 24 | 0;
     i77 = i2 + 16 | 0;
     i69 = i2 + 28 | 0;
     i325 = i240;
     while (1) {
      if ((i325 << 16 >> 16 | 0) == 34) {
       i88 = 2430;
       break;
      } else if ((i325 << 16 >> 16 | 0) == 38) {
       i88 = 2452;
       break;
      } else if ((i325 << 16 >> 16 | 0) == 0) {
       i88 = 2470;
       break;
      }
      __ZN7WebCore9HTMLToken22appendToAttributeValueEt(HEAP32[i66 >> 2] | 0, i325);
      HEAP32[i79 >> 2] = 37;
      i74 = HEAPU8[i219] | 0;
      do {
       if ((i74 & 2 | 0) == 0) {
        i78 = i225 + (HEAP32[i324 + 4 >> 2] | 0) | 0;
        i222 = HEAP32[i324 >> 2] | 0;
        if ((i222 & 1 | 0) == 0) {
         i520 = i222;
        } else {
         i520 = HEAP32[(HEAP32[i78 >> 2] | 0) + (i222 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i520 & 15](i78);
       } else {
        i78 = (HEAP16[i80 >> 1] | 0) == 10 & i74;
        i222 = HEAP32[i76 >> 2] | 0;
        i220 = i222 - 1 | 0;
        HEAP32[i76 >> 2] = i220;
        i439 = (i220 | 0) == 1;
        i220 = (HEAP32[i218 >> 2] | 0) + 1 | 0;
        HEAP32[i218 >> 2] = i220;
        HEAP16[i80 >> 1] = HEAPU8[i220] | 0;
        if ((i439 & 1 | i78 | 0) == 0) {
         break;
        }
        if ((i78 | 0) != 0) {
         HEAP32[i73 >> 2] = (HEAP32[i73 >> 2] | 0) + 1;
         i78 = HEAP32[i77 >> 2] | 0;
         if ((i78 | 0) == 0) {
          i521 = 0;
         } else {
          i521 = HEAP32[i78 + 4 >> 2] | 0;
         }
         HEAP32[i69 >> 2] = (HEAP32[i71 >> 2] | 0) + (1 - i222) + i521;
        }
        if (!i439) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 2492;
       break L110;
      }
      i74 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i74;
      if ((i74 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i221] = 0;
       i325 = i74;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 2492;
       break L110;
      }
      i325 = HEAP16[i3 >> 1] | 0;
     }
     if ((i88 | 0) == 2430) {
      i88 = 0;
      i325 = HEAP32[i66 >> 2] | 0;
      if ((HEAP16[i2 >> 1] | 0) == 0) {
       i522 = 0;
      } else {
       i522 = (HEAP16[i2 + 2 >> 1] | 0) == 0 ? 1 : 2;
      }
      i70 = HEAP32[i77 >> 2] | 0;
      if ((i70 | 0) == 0) {
       i523 = 0;
      } else {
       i523 = HEAP32[i70 + 4 >> 2] | 0;
      }
      HEAP32[(HEAP32[i325 + 2236 >> 2] | 0) + 12 >> 2] = (HEAP32[i71 >> 2] | 0) - i522 + i523 - (HEAP32[i76 >> 2] | 0) - (HEAP32[i325 + 12 >> 2] | 0);
      HEAP32[i79 >> 2] = 41;
      i325 = HEAPU8[i219] | 0;
      do {
       if ((i325 & 2 | 0) == 0) {
        i70 = i225 + (HEAP32[i324 + 4 >> 2] | 0) | 0;
        i72 = HEAP32[i324 >> 2] | 0;
        if ((i72 & 1 | 0) == 0) {
         i524 = i72;
        } else {
         i524 = HEAP32[(HEAP32[i70 >> 2] | 0) + (i72 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i524 & 15](i70);
       } else {
        i70 = (HEAP16[i80 >> 1] | 0) == 10 & i325;
        i72 = HEAP32[i76 >> 2] | 0;
        i75 = i72 - 1 | 0;
        HEAP32[i76 >> 2] = i75;
        i409 = (i75 | 0) == 1;
        i75 = (HEAP32[i218 >> 2] | 0) + 1 | 0;
        HEAP32[i218 >> 2] = i75;
        HEAP16[i80 >> 1] = HEAPU8[i75] | 0;
        if ((i409 & 1 | i70 | 0) == 0) {
         break;
        }
        if ((i70 | 0) != 0) {
         HEAP32[i73 >> 2] = (HEAP32[i73 >> 2] | 0) + 1;
         i70 = HEAP32[i77 >> 2] | 0;
         if ((i70 | 0) == 0) {
          i525 = 0;
         } else {
          i525 = HEAP32[i70 + 4 >> 2] | 0;
         }
         HEAP32[i69 >> 2] = (HEAP32[i71 >> 2] | 0) + (1 - i72) + i525;
        }
        if (!i409) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 2451;
       break;
      }
      i325 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i325;
      if ((i325 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i221] = 0;
       i262 = i325;
       i263 = i241;
       i88 = 2664;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 2451;
       break;
      }
      i262 = HEAP16[i3 >> 1] | 0;
      i263 = i241;
      i88 = 2664;
      continue;
     } else if ((i88 | 0) == 2452) {
      i88 = 0;
      i325 = i1 + 12 | 0;
      HEAP16[i325 >> 1] = 34;
      HEAP32[i79 >> 2] = 40;
      i409 = HEAPU8[i219] | 0;
      do {
       if ((i409 & 2 | 0) == 0) {
        i72 = i225 + (HEAP32[i324 + 4 >> 2] | 0) | 0;
        i70 = HEAP32[i324 >> 2] | 0;
        if ((i70 & 1 | 0) == 0) {
         i526 = i70;
        } else {
         i526 = HEAP32[(HEAP32[i72 >> 2] | 0) + (i70 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i526 & 15](i72);
       } else {
        i72 = (HEAP16[i80 >> 1] | 0) == 10 & i409;
        i70 = HEAP32[i76 >> 2] | 0;
        i75 = i70 - 1 | 0;
        HEAP32[i76 >> 2] = i75;
        i224 = (i75 | 0) == 1;
        i75 = (HEAP32[i218 >> 2] | 0) + 1 | 0;
        HEAP32[i218 >> 2] = i75;
        HEAP16[i80 >> 1] = HEAPU8[i75] | 0;
        if ((i224 & 1 | i72 | 0) == 0) {
         break;
        }
        if ((i72 | 0) != 0) {
         HEAP32[i73 >> 2] = (HEAP32[i73 >> 2] | 0) + 1;
         i72 = HEAP32[i77 >> 2] | 0;
         if ((i72 | 0) == 0) {
          i527 = 0;
         } else {
          i527 = HEAP32[i72 + 4 >> 2] | 0;
         }
         HEAP32[i69 >> 2] = (HEAP32[i71 >> 2] | 0) + (1 - i70) + i527;
        }
        if (!i224) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 2469;
       break;
      }
      i69 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i69;
      if ((i69 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i221] = 0;
       i126 = i69;
       i127 = i241;
       i128 = i325;
       i88 = 2626;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 2469;
       break;
      }
      i126 = HEAP16[i3 >> 1] | 0;
      i127 = i241;
      i128 = i325;
      i88 = 2626;
      continue;
     } else if ((i88 | 0) == 2470) {
      i88 = 0;
      i69 = HEAP32[i66 >> 2] | 0;
      if ((HEAP16[i2 >> 1] | 0) == 0) {
       i528 = 0;
      } else {
       i528 = (HEAP16[i2 + 2 >> 1] | 0) == 0 ? 1 : 2;
      }
      i73 = HEAP32[i77 >> 2] | 0;
      if ((i73 | 0) == 0) {
       i529 = 0;
      } else {
       i529 = HEAP32[i73 + 4 >> 2] | 0;
      }
      HEAP32[(HEAP32[i69 + 2236 >> 2] | 0) + 12 >> 2] = (HEAP32[i71 >> 2] | 0) - i528 + i529 - (HEAP32[i76 >> 2] | 0) - (HEAP32[i69 + 12 >> 2] | 0);
      HEAP32[i79 >> 2] = 0;
      i232 = 0;
      i233 = i241;
      i88 = 79;
      continue;
     }
    } else if ((i88 | 0) == 153) {
     i88 = 0;
     if (!(__ZN7WebCore13HTMLTokenizer13processEntityERNS_15SegmentedStringE(i1, i2) | 0)) {
      i88 = 154;
      break;
     }
     HEAP32[i79 >> 2] = 0;
     if ((HEAP8[i82] & 1) != 0) {
      i88 = 160;
      break;
     }
     i69 = HEAP16[i80 >> 1] | 0;
     HEAP16[i3 >> 1] = i69;
     if ((i69 & 65535) >>> 0 > 15 >>> 0) {
      HEAP8[i1 + 22 | 0] = 0;
      i232 = i69;
      i233 = i242;
      i88 = 79;
      continue;
     }
     if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
      i88 = 160;
      break;
     }
     i232 = HEAP16[i3 >> 1] | 0;
     i233 = i242;
     i88 = 79;
     continue;
    } else if ((i88 | 0) == 216) {
     i88 = 0;
     if (!(__ZN7WebCore13HTMLTokenizer13processEntityERNS_15SegmentedStringE(i1, i2) | 0)) {
      i88 = 217;
      break;
     }
     HEAP32[i79 >> 2] = 2;
     if ((HEAP8[i82] & 1) != 0) {
      i88 = 223;
      break;
     }
     i69 = HEAP16[i80 >> 1] | 0;
     HEAP16[i3 >> 1] = i69;
     if ((i69 & 65535) >>> 0 > 15 >>> 0) {
      HEAP8[i1 + 22 | 0] = 0;
      i231 = i69;
      i88 = 77;
      continue;
     }
     if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
      i88 = 223;
      break;
     }
     i231 = HEAP16[i3 >> 1] | 0;
     i88 = 77;
     continue;
    } else if ((i88 | 0) == 319) {
     i88 = 0;
     if ((i243 << 16 >> 16 | 0) == 33) {
      HEAP32[i79 >> 2] = 45;
      i69 = HEAPU8[i2 + 58 | 0] | 0;
      do {
       if ((i69 & 2 | 0) == 0) {
        i73 = i2 + 68 | 0;
        i218 = i2 + (HEAP32[i73 + 4 >> 2] | 0) | 0;
        i409 = HEAP32[i73 >> 2] | 0;
        if ((i409 & 1 | 0) == 0) {
         i530 = i409;
        } else {
         i530 = HEAP32[(HEAP32[i218 >> 2] | 0) + (i409 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i530 & 15](i218);
       } else {
        i218 = (HEAP16[i80 >> 1] | 0) == 10 & i69;
        i409 = i2 + 8 | 0;
        i73 = HEAP32[i409 >> 2] | 0;
        i324 = i73 - 1 | 0;
        HEAP32[i409 >> 2] = i324;
        i409 = (i324 | 0) == 1;
        i324 = i2 + 4 | 0;
        i225 = (HEAP32[i324 >> 2] | 0) + 1 | 0;
        HEAP32[i324 >> 2] = i225;
        HEAP16[i80 >> 1] = HEAPU8[i225] | 0;
        if ((i409 & 1 | i218 | 0) == 0) {
         break;
        }
        if ((i218 | 0) != 0) {
         i218 = i2 + 32 | 0;
         HEAP32[i218 >> 2] = (HEAP32[i218 >> 2] | 0) + 1;
         i218 = HEAP32[i2 + 16 >> 2] | 0;
         if ((i218 | 0) == 0) {
          i531 = 0;
         } else {
          i531 = HEAP32[i218 + 4 >> 2] | 0;
         }
         HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i73) + i531;
        }
        if (!i409) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 337;
       break;
      }
      i69 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i69;
      if ((i69 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i1 + 22 | 0] = 0;
       i268 = i69;
       i269 = i244;
       i88 = 2738;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 337;
       break;
      }
      i268 = HEAP16[i3 >> 1] | 0;
      i269 = i244;
      i88 = 2738;
      continue;
     } else if ((i243 << 16 >> 16 | 0) == 47) {
      HEAP32[i79 >> 2] = 8;
      i69 = HEAPU8[i2 + 58 | 0] | 0;
      do {
       if ((i69 & 2 | 0) == 0) {
        i76 = i2 + 68 | 0;
        i71 = i2 + (HEAP32[i76 + 4 >> 2] | 0) | 0;
        i77 = HEAP32[i76 >> 2] | 0;
        if ((i77 & 1 | 0) == 0) {
         i532 = i77;
        } else {
         i532 = HEAP32[(HEAP32[i71 >> 2] | 0) + (i77 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i532 & 15](i71);
       } else {
        i71 = (HEAP16[i80 >> 1] | 0) == 10 & i69;
        i77 = i2 + 8 | 0;
        i76 = HEAP32[i77 >> 2] | 0;
        i325 = i76 - 1 | 0;
        HEAP32[i77 >> 2] = i325;
        i77 = (i325 | 0) == 1;
        i325 = i2 + 4 | 0;
        i221 = (HEAP32[i325 >> 2] | 0) + 1 | 0;
        HEAP32[i325 >> 2] = i221;
        HEAP16[i80 >> 1] = HEAPU8[i221] | 0;
        if ((i77 & 1 | i71 | 0) == 0) {
         break;
        }
        if ((i71 | 0) != 0) {
         i71 = i2 + 32 | 0;
         HEAP32[i71 >> 2] = (HEAP32[i71 >> 2] | 0) + 1;
         i71 = HEAP32[i2 + 16 >> 2] | 0;
         if ((i71 | 0) == 0) {
          i533 = 0;
         } else {
          i533 = HEAP32[i71 + 4 >> 2] | 0;
         }
         HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i76) + i533;
        }
        if (!i77) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 355;
       break;
      }
      i69 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i69;
      if ((i69 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i1 + 22 | 0] = 0;
       i245 = i69;
       i246 = i244;
       i88 = 397;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 355;
       break;
      }
      i245 = HEAP16[i3 >> 1] | 0;
      i246 = i244;
      i88 = 397;
      continue;
     } else {
      if ((i243 - 65 & 65535) >>> 0 < 26 >>> 0) {
       __ZN7WebCore9HTMLToken13beginStartTagEt(HEAP32[i66 >> 2] | 0, i243 + 32 & 65535);
       HEAP32[i79 >> 2] = 9;
       i69 = i2 + 58 | 0;
       i77 = HEAPU8[i69] | 0;
       do {
        if ((i77 & 2 | 0) == 0) {
         i76 = i2 + 68 | 0;
         i71 = i2 + (HEAP32[i76 + 4 >> 2] | 0) | 0;
         i221 = HEAP32[i76 >> 2] | 0;
         if ((i221 & 1 | 0) == 0) {
          i534 = i221;
         } else {
          i534 = HEAP32[(HEAP32[i71 >> 2] | 0) + (i221 - 1) >> 2] | 0;
         }
         FUNCTION_TABLE_vi[i534 & 15](i71);
        } else {
         i71 = (HEAP16[i80 >> 1] | 0) == 10 & i77;
         i221 = i2 + 8 | 0;
         i76 = HEAP32[i221 >> 2] | 0;
         i325 = i76 - 1 | 0;
         HEAP32[i221 >> 2] = i325;
         i221 = (i325 | 0) == 1;
         i325 = i2 + 4 | 0;
         i409 = (HEAP32[i325 >> 2] | 0) + 1 | 0;
         HEAP32[i325 >> 2] = i409;
         HEAP16[i80 >> 1] = HEAPU8[i409] | 0;
         if ((i221 & 1 | i71 | 0) == 0) {
          break;
         }
         if ((i71 | 0) != 0) {
          i71 = i2 + 32 | 0;
          HEAP32[i71 >> 2] = (HEAP32[i71 >> 2] | 0) + 1;
          i71 = HEAP32[i2 + 16 >> 2] | 0;
          if ((i71 | 0) == 0) {
           i535 = 0;
          } else {
           i535 = HEAP32[i71 + 4 >> 2] | 0;
          }
          HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i76) + i535;
         }
         if (!i221) {
          break;
         }
         __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
        }
       } while (0);
       if ((HEAP8[i82] & 1) != 0) {
        i88 = 374;
        break;
       }
       i77 = HEAP16[i80 >> 1] | 0;
       HEAP16[i3 >> 1] = i77;
       if ((i77 & 65535) >>> 0 > 15 >>> 0) {
        HEAP8[i1 + 22 | 0] = 0;
        i85 = i77;
        i86 = i244;
        i87 = i69;
        i88 = 91;
        continue;
       }
       if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
        i88 = 374;
        break;
       }
       i85 = HEAP16[i3 >> 1] | 0;
       i86 = i244;
       i87 = i69;
       i88 = 91;
       continue;
      }
      if ((i243 - 97 & 65535) >>> 0 >= 26 >>> 0) {
       if (i243 << 16 >> 16 == 63) {
        HEAP32[i79 >> 2] = 43;
        i266 = 63;
        i88 = 2713;
        continue;
       } else {
        __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 60);
        HEAP32[i79 >> 2] = 0;
        i232 = i243;
        i233 = i244;
        i88 = 79;
        continue;
       }
      }
      __ZN7WebCore9HTMLToken13beginStartTagEt(HEAP32[i66 >> 2] | 0, i243);
      HEAP32[i79 >> 2] = 9;
      i77 = i2 + 58 | 0;
      i221 = HEAPU8[i77] | 0;
      do {
       if ((i221 & 2 | 0) == 0) {
        i76 = i2 + 68 | 0;
        i71 = i2 + (HEAP32[i76 + 4 >> 2] | 0) | 0;
        i409 = HEAP32[i76 >> 2] | 0;
        if ((i409 & 1 | 0) == 0) {
         i536 = i409;
        } else {
         i536 = HEAP32[(HEAP32[i71 >> 2] | 0) + (i409 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i536 & 15](i71);
       } else {
        i71 = (HEAP16[i80 >> 1] | 0) == 10 & i221;
        i409 = i2 + 8 | 0;
        i76 = HEAP32[i409 >> 2] | 0;
        i325 = i76 - 1 | 0;
        HEAP32[i409 >> 2] = i325;
        i409 = (i325 | 0) == 1;
        i325 = i2 + 4 | 0;
        i73 = (HEAP32[i325 >> 2] | 0) + 1 | 0;
        HEAP32[i325 >> 2] = i73;
        HEAP16[i80 >> 1] = HEAPU8[i73] | 0;
        if ((i409 & 1 | i71 | 0) == 0) {
         break;
        }
        if ((i71 | 0) != 0) {
         i71 = i2 + 32 | 0;
         HEAP32[i71 >> 2] = (HEAP32[i71 >> 2] | 0) + 1;
         i71 = HEAP32[i2 + 16 >> 2] | 0;
         if ((i71 | 0) == 0) {
          i537 = 0;
         } else {
          i537 = HEAP32[i71 + 4 >> 2] | 0;
         }
         HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i76) + i537;
        }
        if (!i409) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 393;
       break;
      }
      i221 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i221;
      if ((i221 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i1 + 22 | 0] = 0;
       i85 = i221;
       i86 = i244;
       i87 = i77;
       i88 = 91;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 393;
       break;
      }
      i85 = HEAP16[i3 >> 1] | 0;
      i86 = i244;
      i87 = i77;
      i88 = 91;
      continue;
     }
    } else if ((i88 | 0) == 397) {
     i88 = 0;
     if ((i245 - 65 & 65535) >>> 0 < 26 >>> 0) {
      i221 = HEAP32[i66 >> 2] | 0;
      i69 = i245 + 32 & 65535;
      HEAP32[i221 >> 2] = 3;
      HEAP8[i221 + 542 | 0] = 0;
      HEAP32[i221 + 2236 >> 2] = 0;
      __ZN3WTF6VectorIN7WebCore9HTMLToken9AttributeELj10ENS_15CrashOnOverflowEE5clearEv(i221 + 544 | 0);
      i409 = i221 + 16 | 0;
      i76 = i221 + 24 | 0;
      i71 = HEAP32[i76 >> 2] | 0;
      if ((i71 | 0) == (HEAP32[i221 + 20 >> 2] | 0)) {
       i221 = i71 + 1 | 0;
       i73 = i221 + (i71 >>> 2) | 0;
       i325 = i73 >>> 0 > 16 >>> 0 ? i73 : 16;
       __ZN3WTF6VectorItLj256ENS_15CrashOnOverflowEE15reserveCapacityEj(i409, i325 >>> 0 > i221 >>> 0 ? i325 : i221);
       HEAP16[(HEAP32[i409 >> 2] | 0) + (HEAP32[i76 >> 2] << 1) >> 1] = i69 & 255;
      } else {
       HEAP16[(HEAP32[i409 >> 2] | 0) + (i71 << 1) >> 1] = i69 & 255;
      }
      HEAP32[i76 >> 2] = (HEAP32[i76 >> 2] | 0) + 1;
      i76 = i1 + 28 | 0;
      do {
       if ((HEAP32[i76 >> 2] | 0) != 0) {
        i69 = i1 + 32 | 0;
        if ((HEAP32[i69 >> 2] | 0) != 0) {
         HEAP32[i69 >> 2] = 0;
        }
        i69 = i1 + 24 | 0;
        i71 = HEAP32[i69 >> 2] | 0;
        i409 = i1 + 36 | 0;
        if ((i409 | 0) == (i71 | 0) | (i71 | 0) == 0) {
         i538 = i71;
        } else {
         HEAP32[i69 >> 2] = 0;
         HEAP32[i76 >> 2] = 0;
         __ZN3WTF8fastFreeEPv(i71);
         i538 = HEAP32[i69 >> 2] | 0;
        }
        if ((i538 | 0) != 0) {
         break;
        }
        HEAP32[i69 >> 2] = i409;
        HEAP32[i76 >> 2] = 32;
       }
      } while (0);
      HEAP32[i79 >> 2] = 9;
      i76 = i2 + 58 | 0;
      i77 = HEAPU8[i76] | 0;
      do {
       if ((i77 & 2 | 0) == 0) {
        i409 = i2 + 68 | 0;
        i69 = i2 + (HEAP32[i409 + 4 >> 2] | 0) | 0;
        i71 = HEAP32[i409 >> 2] | 0;
        if ((i71 & 1 | 0) == 0) {
         i539 = i71;
        } else {
         i539 = HEAP32[(HEAP32[i69 >> 2] | 0) + (i71 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i539 & 15](i69);
       } else {
        i69 = (HEAP16[i80 >> 1] | 0) == 10 & i77;
        i71 = i2 + 8 | 0;
        i409 = HEAP32[i71 >> 2] | 0;
        i221 = i409 - 1 | 0;
        HEAP32[i71 >> 2] = i221;
        i71 = (i221 | 0) == 1;
        i221 = i2 + 4 | 0;
        i325 = (HEAP32[i221 >> 2] | 0) + 1 | 0;
        HEAP32[i221 >> 2] = i325;
        HEAP16[i80 >> 1] = HEAPU8[i325] | 0;
        if ((i71 & 1 | i69 | 0) == 0) {
         break;
        }
        if ((i69 | 0) != 0) {
         i69 = i2 + 32 | 0;
         HEAP32[i69 >> 2] = (HEAP32[i69 >> 2] | 0) + 1;
         i69 = HEAP32[i2 + 16 >> 2] | 0;
         if ((i69 | 0) == 0) {
          i540 = 0;
         } else {
          i540 = HEAP32[i69 + 4 >> 2] | 0;
         }
         HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i409) + i540;
        }
        if (!i71) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 425;
       break;
      }
      i77 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i77;
      if ((i77 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i1 + 22 | 0] = 0;
       i85 = i77;
       i86 = i246;
       i87 = i76;
       i88 = 91;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 425;
       break;
      }
      i85 = HEAP16[i3 >> 1] | 0;
      i86 = i246;
      i87 = i76;
      i88 = 91;
      continue;
     }
     if ((i245 - 97 & 65535) >>> 0 >= 26 >>> 0) {
      if ((i245 << 16 >> 16 | 0) == 62) {
       HEAP32[i79 >> 2] = 0;
       i77 = HEAPU8[i2 + 58 | 0] | 0;
       do {
        if ((i77 & 2 | 0) == 0) {
         i71 = i2 + 68 | 0;
         i409 = i2 + (HEAP32[i71 + 4 >> 2] | 0) | 0;
         i69 = HEAP32[i71 >> 2] | 0;
         if ((i69 & 1 | 0) == 0) {
          i541 = i69;
         } else {
          i541 = HEAP32[(HEAP32[i409 >> 2] | 0) + (i69 - 1) >> 2] | 0;
         }
         FUNCTION_TABLE_vi[i541 & 15](i409);
        } else {
         i409 = (HEAP16[i80 >> 1] | 0) == 10 & i77;
         i69 = i2 + 8 | 0;
         i71 = HEAP32[i69 >> 2] | 0;
         i325 = i71 - 1 | 0;
         HEAP32[i69 >> 2] = i325;
         i69 = (i325 | 0) == 1;
         i325 = i2 + 4 | 0;
         i221 = (HEAP32[i325 >> 2] | 0) + 1 | 0;
         HEAP32[i325 >> 2] = i221;
         HEAP16[i80 >> 1] = HEAPU8[i221] | 0;
         if ((i69 & 1 | i409 | 0) == 0) {
          break;
         }
         if ((i409 | 0) != 0) {
          i409 = i2 + 32 | 0;
          HEAP32[i409 >> 2] = (HEAP32[i409 >> 2] | 0) + 1;
          i409 = HEAP32[i2 + 16 >> 2] | 0;
          if ((i409 | 0) == 0) {
           i542 = 0;
          } else {
           i542 = HEAP32[i409 + 4 >> 2] | 0;
          }
          HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i71) + i542;
         }
         if (!i69) {
          break;
         }
         __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
        }
       } while (0);
       if ((HEAP8[i82] & 1) != 0) {
        i88 = 473;
        break;
       }
       i77 = HEAP16[i80 >> 1] | 0;
       HEAP16[i3 >> 1] = i77;
       if ((i77 & 65535) >>> 0 > 15 >>> 0) {
        HEAP8[i1 + 22 | 0] = 0;
        i232 = i77;
        i233 = i246;
        i88 = 79;
        continue;
       }
       if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
        i88 = 473;
        break;
       }
       i232 = HEAP16[i3 >> 1] | 0;
       i233 = i246;
       i88 = 79;
       continue;
      } else if ((i245 << 16 >> 16 | 0) == 0) {
       __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 60);
       __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 47);
       HEAP32[i79 >> 2] = 0;
       i232 = 0;
       i233 = i246;
       i88 = 79;
       continue;
      } else {
       HEAP32[i79 >> 2] = 43;
       i266 = i245;
       i88 = 2713;
       continue;
      }
     }
     i77 = HEAP32[i66 >> 2] | 0;
     HEAP32[i77 >> 2] = 3;
     HEAP8[i77 + 542 | 0] = 0;
     HEAP32[i77 + 2236 >> 2] = 0;
     __ZN3WTF6VectorIN7WebCore9HTMLToken9AttributeELj10ENS_15CrashOnOverflowEE5clearEv(i77 + 544 | 0);
     i76 = i77 + 16 | 0;
     i69 = i77 + 24 | 0;
     i71 = HEAP32[i69 >> 2] | 0;
     if ((i71 | 0) == (HEAP32[i77 + 20 >> 2] | 0)) {
      i77 = i71 + 1 | 0;
      i409 = i77 + (i71 >>> 2) | 0;
      i221 = i409 >>> 0 > 16 >>> 0 ? i409 : 16;
      __ZN3WTF6VectorItLj256ENS_15CrashOnOverflowEE15reserveCapacityEj(i76, i221 >>> 0 > i77 >>> 0 ? i221 : i77);
      HEAP16[(HEAP32[i76 >> 2] | 0) + (HEAP32[i69 >> 2] << 1) >> 1] = i245 & 255;
     } else {
      HEAP16[(HEAP32[i76 >> 2] | 0) + (i71 << 1) >> 1] = i245 & 255;
     }
     HEAP32[i69 >> 2] = (HEAP32[i69 >> 2] | 0) + 1;
     i69 = i1 + 28 | 0;
     do {
      if ((HEAP32[i69 >> 2] | 0) != 0) {
       i71 = i1 + 32 | 0;
       if ((HEAP32[i71 >> 2] | 0) != 0) {
        HEAP32[i71 >> 2] = 0;
       }
       i71 = i1 + 24 | 0;
       i76 = HEAP32[i71 >> 2] | 0;
       i77 = i1 + 36 | 0;
       if ((i77 | 0) == (i76 | 0) | (i76 | 0) == 0) {
        i543 = i76;
       } else {
        HEAP32[i71 >> 2] = 0;
        HEAP32[i69 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i76);
        i543 = HEAP32[i71 >> 2] | 0;
       }
       if ((i543 | 0) != 0) {
        break;
       }
       HEAP32[i71 >> 2] = i77;
       HEAP32[i69 >> 2] = 32;
      }
     } while (0);
     HEAP32[i79 >> 2] = 9;
     i69 = i2 + 58 | 0;
     i77 = HEAPU8[i69] | 0;
     do {
      if ((i77 & 2 | 0) == 0) {
       i71 = i2 + 68 | 0;
       i76 = i2 + (HEAP32[i71 + 4 >> 2] | 0) | 0;
       i221 = HEAP32[i71 >> 2] | 0;
       if ((i221 & 1 | 0) == 0) {
        i544 = i221;
       } else {
        i544 = HEAP32[(HEAP32[i76 >> 2] | 0) + (i221 - 1) >> 2] | 0;
       }
       FUNCTION_TABLE_vi[i544 & 15](i76);
      } else {
       i76 = (HEAP16[i80 >> 1] | 0) == 10 & i77;
       i221 = i2 + 8 | 0;
       i71 = HEAP32[i221 >> 2] | 0;
       i409 = i71 - 1 | 0;
       HEAP32[i221 >> 2] = i409;
       i221 = (i409 | 0) == 1;
       i409 = i2 + 4 | 0;
       i325 = (HEAP32[i409 >> 2] | 0) + 1 | 0;
       HEAP32[i409 >> 2] = i325;
       HEAP16[i80 >> 1] = HEAPU8[i325] | 0;
       if ((i221 & 1 | i76 | 0) == 0) {
        break;
       }
       if ((i76 | 0) != 0) {
        i76 = i2 + 32 | 0;
        HEAP32[i76 >> 2] = (HEAP32[i76 >> 2] | 0) + 1;
        i76 = HEAP32[i2 + 16 >> 2] | 0;
        if ((i76 | 0) == 0) {
         i545 = 0;
        } else {
         i545 = HEAP32[i76 + 4 >> 2] | 0;
        }
        HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i71) + i545;
       }
       if (!i221) {
        break;
       }
       __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
      }
     } while (0);
     if ((HEAP8[i82] & 1) != 0) {
      i88 = 454;
      break;
     }
     i77 = HEAP16[i80 >> 1] | 0;
     HEAP16[i3 >> 1] = i77;
     if ((i77 & 65535) >>> 0 > 15 >>> 0) {
      HEAP8[i1 + 22 | 0] = 0;
      i85 = i77;
      i86 = i246;
      i87 = i69;
      i88 = 91;
      continue;
     }
     if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
      i88 = 454;
      break;
     }
     i85 = HEAP16[i3 >> 1] | 0;
     i86 = i246;
     i87 = i69;
     i88 = 91;
     continue;
    } else if ((i88 | 0) == 556) {
     i88 = 0;
     if (i247 << 16 >> 16 != 47) {
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 60);
      HEAP32[i79 >> 2] = 2;
      i231 = i247;
      i88 = 77;
      continue;
     }
     i77 = i1 + 104 | 0;
     do {
      if ((HEAP32[i77 >> 2] | 0) != 0) {
       i221 = i1 + 108 | 0;
       if ((HEAP32[i221 >> 2] | 0) != 0) {
        HEAP32[i221 >> 2] = 0;
       }
       i221 = i1 + 100 | 0;
       i71 = HEAP32[i221 >> 2] | 0;
       i76 = i1 + 112 | 0;
       if ((i76 | 0) == (i71 | 0) | (i71 | 0) == 0) {
        i546 = i71;
       } else {
        HEAP32[i221 >> 2] = 0;
        HEAP32[i77 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i71);
        i546 = HEAP32[i221 >> 2] | 0;
       }
       if ((i546 | 0) != 0) {
        break;
       }
       HEAP32[i221 >> 2] = i76;
       HEAP32[i77 >> 2] = 32;
      }
     } while (0);
     HEAP32[i79 >> 2] = 11;
     i77 = HEAPU8[i2 + 58 | 0] | 0;
     do {
      if ((i77 & 2 | 0) == 0) {
       i69 = i2 + 68 | 0;
       i76 = i2 + (HEAP32[i69 + 4 >> 2] | 0) | 0;
       i221 = HEAP32[i69 >> 2] | 0;
       if ((i221 & 1 | 0) == 0) {
        i547 = i221;
       } else {
        i547 = HEAP32[(HEAP32[i76 >> 2] | 0) + (i221 - 1) >> 2] | 0;
       }
       FUNCTION_TABLE_vi[i547 & 15](i76);
      } else {
       i76 = (HEAP16[i80 >> 1] | 0) == 10 & i77;
       i221 = i2 + 8 | 0;
       i69 = HEAP32[i221 >> 2] | 0;
       i71 = i69 - 1 | 0;
       HEAP32[i221 >> 2] = i71;
       i221 = (i71 | 0) == 1;
       i71 = i2 + 4 | 0;
       i325 = (HEAP32[i71 >> 2] | 0) + 1 | 0;
       HEAP32[i71 >> 2] = i325;
       HEAP16[i80 >> 1] = HEAPU8[i325] | 0;
       if ((i221 & 1 | i76 | 0) == 0) {
        break;
       }
       if ((i76 | 0) != 0) {
        i76 = i2 + 32 | 0;
        HEAP32[i76 >> 2] = (HEAP32[i76 >> 2] | 0) + 1;
        i76 = HEAP32[i2 + 16 >> 2] | 0;
        if ((i76 | 0) == 0) {
         i548 = 0;
        } else {
         i548 = HEAP32[i76 + 4 >> 2] | 0;
        }
        HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i69) + i548;
       }
       if (!i221) {
        break;
       }
       __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
      }
     } while (0);
     if ((HEAP8[i82] & 1) != 0) {
      i88 = 581;
      break;
     }
     i77 = HEAP16[i80 >> 1] | 0;
     HEAP16[i3 >> 1] = i77;
     if ((i77 & 65535) >>> 0 > 15 >>> 0) {
      HEAP8[i1 + 22 | 0] = 0;
      i248 = i77;
      i88 = 583;
      continue;
     }
     if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
      i88 = 581;
      break;
     }
     i248 = HEAP16[i3 >> 1] | 0;
     i88 = 583;
     continue;
    } else if ((i88 | 0) == 583) {
     i88 = 0;
     if ((i248 - 65 & 65535) >>> 0 < 26 >>> 0) {
      i77 = i1 + 100 | 0;
      i221 = i248 & 255;
      HEAP8[i25] = i221;
      i69 = i1 + 108 | 0;
      i76 = HEAP32[i69 >> 2] | 0;
      i325 = i1 + 104 | 0;
      if ((i76 | 0) == (HEAP32[i325 >> 2] | 0)) {
       i71 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i77, i76 + 1 | 0, i25) | 0;
       HEAP8[(HEAP32[i77 >> 2] | 0) + (HEAP32[i69 >> 2] | 0) | 0] = HEAP8[i71] | 0;
      } else {
       HEAP8[(HEAP32[i77 >> 2] | 0) + i76 | 0] = i221;
      }
      HEAP32[i69 >> 2] = (HEAP32[i69 >> 2] | 0) + 1;
      i221 = i248 + 32 & 255;
      HEAP8[i22] = i221;
      i76 = HEAP32[i68 >> 2] | 0;
      i71 = i1 + 148 | 0;
      if ((i76 | 0) == (HEAP32[i71 >> 2] | 0)) {
       i409 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i67, i76 + 1 | 0, i22) | 0;
       HEAP8[(HEAP32[i67 >> 2] | 0) + (HEAP32[i68 >> 2] | 0) | 0] = HEAP8[i409] | 0;
      } else {
       HEAP8[(HEAP32[i67 >> 2] | 0) + i76 | 0] = i221;
      }
      HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 1;
      HEAP32[i79 >> 2] = 12;
      i221 = i2 + 58 | 0;
      i76 = HEAPU8[i221] | 0;
      do {
       if ((i76 & 2 | 0) == 0) {
        i409 = i2 + 68 | 0;
        i73 = i2 + (HEAP32[i409 + 4 >> 2] | 0) | 0;
        i218 = HEAP32[i409 >> 2] | 0;
        if ((i218 & 1 | 0) == 0) {
         i549 = i218;
        } else {
         i549 = HEAP32[(HEAP32[i73 >> 2] | 0) + (i218 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i549 & 15](i73);
       } else {
        i73 = (HEAP16[i80 >> 1] | 0) == 10 & i76;
        i218 = i2 + 8 | 0;
        i409 = HEAP32[i218 >> 2] | 0;
        i225 = i409 - 1 | 0;
        HEAP32[i218 >> 2] = i225;
        i218 = (i225 | 0) == 1;
        i225 = i2 + 4 | 0;
        i324 = (HEAP32[i225 >> 2] | 0) + 1 | 0;
        HEAP32[i225 >> 2] = i324;
        HEAP16[i80 >> 1] = HEAPU8[i324] | 0;
        if ((i218 & 1 | i73 | 0) == 0) {
         break;
        }
        if ((i73 | 0) != 0) {
         i73 = i2 + 32 | 0;
         HEAP32[i73 >> 2] = (HEAP32[i73 >> 2] | 0) + 1;
         i73 = HEAP32[i2 + 16 >> 2] | 0;
         if ((i73 | 0) == 0) {
          i550 = 0;
         } else {
          i550 = HEAP32[i73 + 4 >> 2] | 0;
         }
         HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i409) + i550;
        }
        if (!i218) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 607;
       break;
      }
      i76 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i76;
      if ((i76 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i1 + 22 | 0] = 0;
       i182 = i76;
       i183 = i77;
       i184 = i69;
       i185 = i325;
       i186 = i71;
       i187 = i221;
       i88 = 78;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 607;
       break;
      }
      i182 = HEAP16[i3 >> 1] | 0;
      i183 = i77;
      i184 = i69;
      i185 = i325;
      i186 = i71;
      i187 = i221;
      i88 = 78;
      continue;
     }
     if ((i248 - 97 & 65535) >>> 0 >= 26 >>> 0) {
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 60);
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 47);
      HEAP32[i79 >> 2] = 2;
      i231 = i248;
      i88 = 77;
      continue;
     }
     i76 = i1 + 100 | 0;
     i218 = i248 & 255;
     HEAP8[i26] = i218;
     i409 = i1 + 108 | 0;
     i73 = HEAP32[i409 >> 2] | 0;
     i324 = i1 + 104 | 0;
     if ((i73 | 0) == (HEAP32[i324 >> 2] | 0)) {
      i225 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i76, i73 + 1 | 0, i26) | 0;
      HEAP8[(HEAP32[i76 >> 2] | 0) + (HEAP32[i409 >> 2] | 0) | 0] = HEAP8[i225] | 0;
     } else {
      HEAP8[(HEAP32[i76 >> 2] | 0) + i73 | 0] = i218;
     }
     HEAP32[i409 >> 2] = (HEAP32[i409 >> 2] | 0) + 1;
     HEAP8[i21] = i218;
     i73 = HEAP32[i68 >> 2] | 0;
     i225 = i1 + 148 | 0;
     if ((i73 | 0) == (HEAP32[i225 >> 2] | 0)) {
      i219 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i67, i73 + 1 | 0, i21) | 0;
      HEAP8[(HEAP32[i67 >> 2] | 0) + (HEAP32[i68 >> 2] | 0) | 0] = HEAP8[i219] | 0;
     } else {
      HEAP8[(HEAP32[i67 >> 2] | 0) + i73 | 0] = i218;
     }
     HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 1;
     HEAP32[i79 >> 2] = 12;
     i218 = i2 + 58 | 0;
     i73 = HEAPU8[i218] | 0;
     do {
      if ((i73 & 2 | 0) == 0) {
       i219 = i2 + 68 | 0;
       i224 = i2 + (HEAP32[i219 + 4 >> 2] | 0) | 0;
       i70 = HEAP32[i219 >> 2] | 0;
       if ((i70 & 1 | 0) == 0) {
        i551 = i70;
       } else {
        i551 = HEAP32[(HEAP32[i224 >> 2] | 0) + (i70 - 1) >> 2] | 0;
       }
       FUNCTION_TABLE_vi[i551 & 15](i224);
      } else {
       i224 = (HEAP16[i80 >> 1] | 0) == 10 & i73;
       i70 = i2 + 8 | 0;
       i219 = HEAP32[i70 >> 2] | 0;
       i72 = i219 - 1 | 0;
       HEAP32[i70 >> 2] = i72;
       i70 = (i72 | 0) == 1;
       i72 = i2 + 4 | 0;
       i75 = (HEAP32[i72 >> 2] | 0) + 1 | 0;
       HEAP32[i72 >> 2] = i75;
       HEAP16[i80 >> 1] = HEAPU8[i75] | 0;
       if ((i70 & 1 | i224 | 0) == 0) {
        break;
       }
       if ((i224 | 0) != 0) {
        i224 = i2 + 32 | 0;
        HEAP32[i224 >> 2] = (HEAP32[i224 >> 2] | 0) + 1;
        i224 = HEAP32[i2 + 16 >> 2] | 0;
        if ((i224 | 0) == 0) {
         i552 = 0;
        } else {
         i552 = HEAP32[i224 + 4 >> 2] | 0;
        }
        HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i219) + i552;
       }
       if (!i70) {
        break;
       }
       __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
      }
     } while (0);
     if ((HEAP8[i82] & 1) != 0) {
      i88 = 632;
      break;
     }
     i73 = HEAP16[i80 >> 1] | 0;
     HEAP16[i3 >> 1] = i73;
     if ((i73 & 65535) >>> 0 > 15 >>> 0) {
      HEAP8[i1 + 22 | 0] = 0;
      i182 = i73;
      i183 = i76;
      i184 = i409;
      i185 = i324;
      i186 = i225;
      i187 = i218;
      i88 = 78;
      continue;
     }
     if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
      i88 = 632;
      break;
     }
     i182 = HEAP16[i3 >> 1] | 0;
     i183 = i76;
     i184 = i409;
     i185 = i324;
     i186 = i225;
     i187 = i218;
     i88 = 78;
     continue;
    } else if ((i88 | 0) == 741) {
     i88 = 0;
     if (i249 << 16 >> 16 != 47) {
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 60);
      HEAP32[i79 >> 2] = 4;
      i230 = i249;
      i88 = 75;
      continue;
     }
     i73 = i1 + 104 | 0;
     do {
      if ((HEAP32[i73 >> 2] | 0) != 0) {
       i221 = i1 + 108 | 0;
       if ((HEAP32[i221 >> 2] | 0) != 0) {
        HEAP32[i221 >> 2] = 0;
       }
       i221 = i1 + 100 | 0;
       i71 = HEAP32[i221 >> 2] | 0;
       i325 = i1 + 112 | 0;
       if ((i325 | 0) == (i71 | 0) | (i71 | 0) == 0) {
        i553 = i71;
       } else {
        HEAP32[i221 >> 2] = 0;
        HEAP32[i73 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i71);
        i553 = HEAP32[i221 >> 2] | 0;
       }
       if ((i553 | 0) != 0) {
        break;
       }
       HEAP32[i221 >> 2] = i325;
       HEAP32[i73 >> 2] = 32;
      }
     } while (0);
     HEAP32[i79 >> 2] = 14;
     i73 = HEAPU8[i2 + 58 | 0] | 0;
     do {
      if ((i73 & 2 | 0) == 0) {
       i218 = i2 + 68 | 0;
       i225 = i2 + (HEAP32[i218 + 4 >> 2] | 0) | 0;
       i324 = HEAP32[i218 >> 2] | 0;
       if ((i324 & 1 | 0) == 0) {
        i554 = i324;
       } else {
        i554 = HEAP32[(HEAP32[i225 >> 2] | 0) + (i324 - 1) >> 2] | 0;
       }
       FUNCTION_TABLE_vi[i554 & 15](i225);
      } else {
       i225 = (HEAP16[i80 >> 1] | 0) == 10 & i73;
       i324 = i2 + 8 | 0;
       i218 = HEAP32[i324 >> 2] | 0;
       i409 = i218 - 1 | 0;
       HEAP32[i324 >> 2] = i409;
       i324 = (i409 | 0) == 1;
       i409 = i2 + 4 | 0;
       i76 = (HEAP32[i409 >> 2] | 0) + 1 | 0;
       HEAP32[i409 >> 2] = i76;
       HEAP16[i80 >> 1] = HEAPU8[i76] | 0;
       if ((i324 & 1 | i225 | 0) == 0) {
        break;
       }
       if ((i225 | 0) != 0) {
        i225 = i2 + 32 | 0;
        HEAP32[i225 >> 2] = (HEAP32[i225 >> 2] | 0) + 1;
        i225 = HEAP32[i2 + 16 >> 2] | 0;
        if ((i225 | 0) == 0) {
         i555 = 0;
        } else {
         i555 = HEAP32[i225 + 4 >> 2] | 0;
        }
        HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i218) + i555;
       }
       if (!i324) {
        break;
       }
       __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
      }
     } while (0);
     if ((HEAP8[i82] & 1) != 0) {
      i88 = 766;
      break;
     }
     i73 = HEAP16[i80 >> 1] | 0;
     HEAP16[i3 >> 1] = i73;
     if ((i73 & 65535) >>> 0 > 15 >>> 0) {
      HEAP8[i1 + 22 | 0] = 0;
      i250 = i73;
      i88 = 768;
      continue;
     }
     if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
      i88 = 766;
      break;
     }
     i250 = HEAP16[i3 >> 1] | 0;
     i88 = 768;
     continue;
    } else if ((i88 | 0) == 768) {
     i88 = 0;
     if ((i250 - 65 & 65535) >>> 0 < 26 >>> 0) {
      i73 = i1 + 100 | 0;
      i324 = i250 & 255;
      HEAP8[i32] = i324;
      i218 = i1 + 108 | 0;
      i225 = HEAP32[i218 >> 2] | 0;
      i76 = i1 + 104 | 0;
      if ((i225 | 0) == (HEAP32[i76 >> 2] | 0)) {
       i409 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i73, i225 + 1 | 0, i32) | 0;
       HEAP8[(HEAP32[i73 >> 2] | 0) + (HEAP32[i218 >> 2] | 0) | 0] = HEAP8[i409] | 0;
      } else {
       HEAP8[(HEAP32[i73 >> 2] | 0) + i225 | 0] = i324;
      }
      HEAP32[i218 >> 2] = (HEAP32[i218 >> 2] | 0) + 1;
      i324 = i250 + 32 & 255;
      HEAP8[i16] = i324;
      i225 = HEAP32[i68 >> 2] | 0;
      i409 = i1 + 148 | 0;
      if ((i225 | 0) == (HEAP32[i409 >> 2] | 0)) {
       i325 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i67, i225 + 1 | 0, i16) | 0;
       HEAP8[(HEAP32[i67 >> 2] | 0) + (HEAP32[i68 >> 2] | 0) | 0] = HEAP8[i325] | 0;
      } else {
       HEAP8[(HEAP32[i67 >> 2] | 0) + i225 | 0] = i324;
      }
      HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 1;
      HEAP32[i79 >> 2] = 15;
      i324 = i2 + 58 | 0;
      i225 = HEAPU8[i324] | 0;
      do {
       if ((i225 & 2 | 0) == 0) {
        i325 = i2 + 68 | 0;
        i221 = i2 + (HEAP32[i325 + 4 >> 2] | 0) | 0;
        i71 = HEAP32[i325 >> 2] | 0;
        if ((i71 & 1 | 0) == 0) {
         i556 = i71;
        } else {
         i556 = HEAP32[(HEAP32[i221 >> 2] | 0) + (i71 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i556 & 15](i221);
       } else {
        i221 = (HEAP16[i80 >> 1] | 0) == 10 & i225;
        i71 = i2 + 8 | 0;
        i325 = HEAP32[i71 >> 2] | 0;
        i69 = i325 - 1 | 0;
        HEAP32[i71 >> 2] = i69;
        i71 = (i69 | 0) == 1;
        i69 = i2 + 4 | 0;
        i77 = (HEAP32[i69 >> 2] | 0) + 1 | 0;
        HEAP32[i69 >> 2] = i77;
        HEAP16[i80 >> 1] = HEAPU8[i77] | 0;
        if ((i71 & 1 | i221 | 0) == 0) {
         break;
        }
        if ((i221 | 0) != 0) {
         i221 = i2 + 32 | 0;
         HEAP32[i221 >> 2] = (HEAP32[i221 >> 2] | 0) + 1;
         i221 = HEAP32[i2 + 16 >> 2] | 0;
         if ((i221 | 0) == 0) {
          i557 = 0;
         } else {
          i557 = HEAP32[i221 + 4 >> 2] | 0;
         }
         HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i325) + i557;
        }
        if (!i71) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 792;
       break;
      }
      i225 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i225;
      if ((i225 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i1 + 22 | 0] = 0;
       i188 = i225;
       i189 = i73;
       i190 = i218;
       i191 = i76;
       i192 = i409;
       i193 = i324;
       i88 = 76;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 792;
       break;
      }
      i188 = HEAP16[i3 >> 1] | 0;
      i189 = i73;
      i190 = i218;
      i191 = i76;
      i192 = i409;
      i193 = i324;
      i88 = 76;
      continue;
     }
     if ((i250 - 97 & 65535) >>> 0 >= 26 >>> 0) {
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 60);
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 47);
      HEAP32[i79 >> 2] = 4;
      i230 = i250;
      i88 = 75;
      continue;
     }
     i225 = i1 + 100 | 0;
     i71 = i250 & 255;
     HEAP8[i33] = i71;
     i325 = i1 + 108 | 0;
     i221 = HEAP32[i325 >> 2] | 0;
     i77 = i1 + 104 | 0;
     if ((i221 | 0) == (HEAP32[i77 >> 2] | 0)) {
      i69 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i225, i221 + 1 | 0, i33) | 0;
      HEAP8[(HEAP32[i225 >> 2] | 0) + (HEAP32[i325 >> 2] | 0) | 0] = HEAP8[i69] | 0;
     } else {
      HEAP8[(HEAP32[i225 >> 2] | 0) + i221 | 0] = i71;
     }
     HEAP32[i325 >> 2] = (HEAP32[i325 >> 2] | 0) + 1;
     HEAP8[i15] = i71;
     i221 = HEAP32[i68 >> 2] | 0;
     i69 = i1 + 148 | 0;
     if ((i221 | 0) == (HEAP32[i69 >> 2] | 0)) {
      i70 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i67, i221 + 1 | 0, i15) | 0;
      HEAP8[(HEAP32[i67 >> 2] | 0) + (HEAP32[i68 >> 2] | 0) | 0] = HEAP8[i70] | 0;
     } else {
      HEAP8[(HEAP32[i67 >> 2] | 0) + i221 | 0] = i71;
     }
     HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 1;
     HEAP32[i79 >> 2] = 15;
     i71 = i2 + 58 | 0;
     i221 = HEAPU8[i71] | 0;
     do {
      if ((i221 & 2 | 0) == 0) {
       i70 = i2 + 68 | 0;
       i219 = i2 + (HEAP32[i70 + 4 >> 2] | 0) | 0;
       i224 = HEAP32[i70 >> 2] | 0;
       if ((i224 & 1 | 0) == 0) {
        i558 = i224;
       } else {
        i558 = HEAP32[(HEAP32[i219 >> 2] | 0) + (i224 - 1) >> 2] | 0;
       }
       FUNCTION_TABLE_vi[i558 & 15](i219);
      } else {
       i219 = (HEAP16[i80 >> 1] | 0) == 10 & i221;
       i224 = i2 + 8 | 0;
       i70 = HEAP32[i224 >> 2] | 0;
       i75 = i70 - 1 | 0;
       HEAP32[i224 >> 2] = i75;
       i224 = (i75 | 0) == 1;
       i75 = i2 + 4 | 0;
       i72 = (HEAP32[i75 >> 2] | 0) + 1 | 0;
       HEAP32[i75 >> 2] = i72;
       HEAP16[i80 >> 1] = HEAPU8[i72] | 0;
       if ((i224 & 1 | i219 | 0) == 0) {
        break;
       }
       if ((i219 | 0) != 0) {
        i219 = i2 + 32 | 0;
        HEAP32[i219 >> 2] = (HEAP32[i219 >> 2] | 0) + 1;
        i219 = HEAP32[i2 + 16 >> 2] | 0;
        if ((i219 | 0) == 0) {
         i559 = 0;
        } else {
         i559 = HEAP32[i219 + 4 >> 2] | 0;
        }
        HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i70) + i559;
       }
       if (!i224) {
        break;
       }
       __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
      }
     } while (0);
     if ((HEAP8[i82] & 1) != 0) {
      i88 = 817;
      break;
     }
     i221 = HEAP16[i80 >> 1] | 0;
     HEAP16[i3 >> 1] = i221;
     if ((i221 & 65535) >>> 0 > 15 >>> 0) {
      HEAP8[i1 + 22 | 0] = 0;
      i188 = i221;
      i189 = i225;
      i190 = i325;
      i191 = i77;
      i192 = i69;
      i193 = i71;
      i88 = 76;
      continue;
     }
     if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
      i88 = 817;
      break;
     }
     i188 = HEAP16[i3 >> 1] | 0;
     i189 = i225;
     i190 = i325;
     i191 = i77;
     i192 = i69;
     i193 = i71;
     i88 = 76;
     continue;
    } else if ((i88 | 0) == 926) {
     i88 = 0;
     if (i251 << 16 >> 16 != 47) {
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 60);
      if (i251 << 16 >> 16 != 33) {
       HEAP32[i79 >> 2] = 5;
       i227 = i251;
       i88 = 66;
       continue;
      }
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 33);
      HEAP32[i79 >> 2] = 19;
      i221 = HEAPU8[i2 + 58 | 0] | 0;
      do {
       if ((i221 & 2 | 0) == 0) {
        i324 = i2 + 68 | 0;
        i409 = i2 + (HEAP32[i324 + 4 >> 2] | 0) | 0;
        i76 = HEAP32[i324 >> 2] | 0;
        if ((i76 & 1 | 0) == 0) {
         i560 = i76;
        } else {
         i560 = HEAP32[(HEAP32[i409 >> 2] | 0) + (i76 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i560 & 15](i409);
       } else {
        i409 = (HEAP16[i80 >> 1] | 0) == 10 & i221;
        i76 = i2 + 8 | 0;
        i324 = HEAP32[i76 >> 2] | 0;
        i218 = i324 - 1 | 0;
        HEAP32[i76 >> 2] = i218;
        i76 = (i218 | 0) == 1;
        i218 = i2 + 4 | 0;
        i73 = (HEAP32[i218 >> 2] | 0) + 1 | 0;
        HEAP32[i218 >> 2] = i73;
        HEAP16[i80 >> 1] = HEAPU8[i73] | 0;
        if ((i76 & 1 | i409 | 0) == 0) {
         break;
        }
        if ((i409 | 0) != 0) {
         i409 = i2 + 32 | 0;
         HEAP32[i409 >> 2] = (HEAP32[i409 >> 2] | 0) + 1;
         i409 = HEAP32[i2 + 16 >> 2] | 0;
         if ((i409 | 0) == 0) {
          i561 = 0;
         } else {
          i561 = HEAP32[i409 + 4 >> 2] | 0;
         }
         HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i324) + i561;
        }
        if (!i76) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 970;
       break;
      }
      i221 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i221;
      if ((i221 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i1 + 22 | 0] = 0;
       i253 = i221;
       i88 = 1130;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 970;
       break;
      }
      i253 = HEAP16[i3 >> 1] | 0;
      i88 = 1130;
      continue;
     }
     i221 = i1 + 104 | 0;
     do {
      if ((HEAP32[i221 >> 2] | 0) != 0) {
       i71 = i1 + 108 | 0;
       if ((HEAP32[i71 >> 2] | 0) != 0) {
        HEAP32[i71 >> 2] = 0;
       }
       i71 = i1 + 100 | 0;
       i69 = HEAP32[i71 >> 2] | 0;
       i77 = i1 + 112 | 0;
       if ((i77 | 0) == (i69 | 0) | (i69 | 0) == 0) {
        i562 = i69;
       } else {
        HEAP32[i71 >> 2] = 0;
        HEAP32[i221 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i69);
        i562 = HEAP32[i71 >> 2] | 0;
       }
       if ((i562 | 0) != 0) {
        break;
       }
       HEAP32[i71 >> 2] = i77;
       HEAP32[i221 >> 2] = 32;
      }
     } while (0);
     HEAP32[i79 >> 2] = 17;
     i221 = HEAPU8[i2 + 58 | 0] | 0;
     do {
      if ((i221 & 2 | 0) == 0) {
       i77 = i2 + 68 | 0;
       i71 = i2 + (HEAP32[i77 + 4 >> 2] | 0) | 0;
       i69 = HEAP32[i77 >> 2] | 0;
       if ((i69 & 1 | 0) == 0) {
        i563 = i69;
       } else {
        i563 = HEAP32[(HEAP32[i71 >> 2] | 0) + (i69 - 1) >> 2] | 0;
       }
       FUNCTION_TABLE_vi[i563 & 15](i71);
      } else {
       i71 = (HEAP16[i80 >> 1] | 0) == 10 & i221;
       i69 = i2 + 8 | 0;
       i77 = HEAP32[i69 >> 2] | 0;
       i325 = i77 - 1 | 0;
       HEAP32[i69 >> 2] = i325;
       i69 = (i325 | 0) == 1;
       i325 = i2 + 4 | 0;
       i225 = (HEAP32[i325 >> 2] | 0) + 1 | 0;
       HEAP32[i325 >> 2] = i225;
       HEAP16[i80 >> 1] = HEAPU8[i225] | 0;
       if ((i69 & 1 | i71 | 0) == 0) {
        break;
       }
       if ((i71 | 0) != 0) {
        i71 = i2 + 32 | 0;
        HEAP32[i71 >> 2] = (HEAP32[i71 >> 2] | 0) + 1;
        i71 = HEAP32[i2 + 16 >> 2] | 0;
        if ((i71 | 0) == 0) {
         i564 = 0;
        } else {
         i564 = HEAP32[i71 + 4 >> 2] | 0;
        }
        HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i77) + i564;
       }
       if (!i69) {
        break;
       }
       __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
      }
     } while (0);
     if ((HEAP8[i82] & 1) != 0) {
      i88 = 951;
      break;
     }
     i221 = HEAP16[i80 >> 1] | 0;
     HEAP16[i3 >> 1] = i221;
     if ((i221 & 65535) >>> 0 > 15 >>> 0) {
      HEAP8[i1 + 22 | 0] = 0;
      i252 = i221;
      i88 = 972;
      continue;
     }
     if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
      i88 = 951;
      break;
     }
     i252 = HEAP16[i3 >> 1] | 0;
     i88 = 972;
     continue;
    } else if ((i88 | 0) == 972) {
     i88 = 0;
     if ((i252 - 65 & 65535) >>> 0 < 26 >>> 0) {
      i221 = i1 + 100 | 0;
      i69 = i252 & 255;
      HEAP8[i39] = i69;
      i77 = i1 + 108 | 0;
      i71 = HEAP32[i77 >> 2] | 0;
      i225 = i1 + 104 | 0;
      if ((i71 | 0) == (HEAP32[i225 >> 2] | 0)) {
       i325 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i221, i71 + 1 | 0, i39) | 0;
       HEAP8[(HEAP32[i221 >> 2] | 0) + (HEAP32[i77 >> 2] | 0) | 0] = HEAP8[i325] | 0;
      } else {
       HEAP8[(HEAP32[i221 >> 2] | 0) + i71 | 0] = i69;
      }
      HEAP32[i77 >> 2] = (HEAP32[i77 >> 2] | 0) + 1;
      i69 = i252 + 32 & 255;
      HEAP8[i12] = i69;
      i71 = HEAP32[i68 >> 2] | 0;
      i325 = i1 + 148 | 0;
      if ((i71 | 0) == (HEAP32[i325 >> 2] | 0)) {
       i76 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i67, i71 + 1 | 0, i12) | 0;
       HEAP8[(HEAP32[i67 >> 2] | 0) + (HEAP32[i68 >> 2] | 0) | 0] = HEAP8[i76] | 0;
      } else {
       HEAP8[(HEAP32[i67 >> 2] | 0) + i71 | 0] = i69;
      }
      HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 1;
      HEAP32[i79 >> 2] = 18;
      i69 = i2 + 58 | 0;
      i71 = HEAPU8[i69] | 0;
      do {
       if ((i71 & 2 | 0) == 0) {
        i76 = i2 + 68 | 0;
        i324 = i2 + (HEAP32[i76 + 4 >> 2] | 0) | 0;
        i409 = HEAP32[i76 >> 2] | 0;
        if ((i409 & 1 | 0) == 0) {
         i565 = i409;
        } else {
         i565 = HEAP32[(HEAP32[i324 >> 2] | 0) + (i409 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i565 & 15](i324);
       } else {
        i324 = (HEAP16[i80 >> 1] | 0) == 10 & i71;
        i409 = i2 + 8 | 0;
        i76 = HEAP32[i409 >> 2] | 0;
        i73 = i76 - 1 | 0;
        HEAP32[i409 >> 2] = i73;
        i409 = (i73 | 0) == 1;
        i73 = i2 + 4 | 0;
        i218 = (HEAP32[i73 >> 2] | 0) + 1 | 0;
        HEAP32[i73 >> 2] = i218;
        HEAP16[i80 >> 1] = HEAPU8[i218] | 0;
        if ((i409 & 1 | i324 | 0) == 0) {
         break;
        }
        if ((i324 | 0) != 0) {
         i324 = i2 + 32 | 0;
         HEAP32[i324 >> 2] = (HEAP32[i324 >> 2] | 0) + 1;
         i324 = HEAP32[i2 + 16 >> 2] | 0;
         if ((i324 | 0) == 0) {
          i566 = 0;
         } else {
          i566 = HEAP32[i324 + 4 >> 2] | 0;
         }
         HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i76) + i566;
        }
        if (!i409) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 996;
       break;
      }
      i71 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i71;
      if ((i71 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i1 + 22 | 0] = 0;
       i194 = i71;
       i195 = i221;
       i196 = i77;
       i197 = i225;
       i198 = i325;
       i199 = i69;
       i88 = 74;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 996;
       break;
      }
      i194 = HEAP16[i3 >> 1] | 0;
      i195 = i221;
      i196 = i77;
      i197 = i225;
      i198 = i325;
      i199 = i69;
      i88 = 74;
      continue;
     }
     if ((i252 - 97 & 65535) >>> 0 >= 26 >>> 0) {
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 60);
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 47);
      HEAP32[i79 >> 2] = 5;
      i227 = i252;
      i88 = 66;
      continue;
     }
     i71 = i1 + 100 | 0;
     i409 = i252 & 255;
     HEAP8[i40] = i409;
     i76 = i1 + 108 | 0;
     i324 = HEAP32[i76 >> 2] | 0;
     i218 = i1 + 104 | 0;
     if ((i324 | 0) == (HEAP32[i218 >> 2] | 0)) {
      i73 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i71, i324 + 1 | 0, i40) | 0;
      HEAP8[(HEAP32[i71 >> 2] | 0) + (HEAP32[i76 >> 2] | 0) | 0] = HEAP8[i73] | 0;
     } else {
      HEAP8[(HEAP32[i71 >> 2] | 0) + i324 | 0] = i409;
     }
     HEAP32[i76 >> 2] = (HEAP32[i76 >> 2] | 0) + 1;
     HEAP8[i11] = i409;
     i324 = HEAP32[i68 >> 2] | 0;
     i73 = i1 + 148 | 0;
     if ((i324 | 0) == (HEAP32[i73 >> 2] | 0)) {
      i224 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i67, i324 + 1 | 0, i11) | 0;
      HEAP8[(HEAP32[i67 >> 2] | 0) + (HEAP32[i68 >> 2] | 0) | 0] = HEAP8[i224] | 0;
     } else {
      HEAP8[(HEAP32[i67 >> 2] | 0) + i324 | 0] = i409;
     }
     HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 1;
     HEAP32[i79 >> 2] = 18;
     i409 = i2 + 58 | 0;
     i324 = HEAPU8[i409] | 0;
     do {
      if ((i324 & 2 | 0) == 0) {
       i224 = i2 + 68 | 0;
       i70 = i2 + (HEAP32[i224 + 4 >> 2] | 0) | 0;
       i219 = HEAP32[i224 >> 2] | 0;
       if ((i219 & 1 | 0) == 0) {
        i567 = i219;
       } else {
        i567 = HEAP32[(HEAP32[i70 >> 2] | 0) + (i219 - 1) >> 2] | 0;
       }
       FUNCTION_TABLE_vi[i567 & 15](i70);
      } else {
       i70 = (HEAP16[i80 >> 1] | 0) == 10 & i324;
       i219 = i2 + 8 | 0;
       i224 = HEAP32[i219 >> 2] | 0;
       i72 = i224 - 1 | 0;
       HEAP32[i219 >> 2] = i72;
       i219 = (i72 | 0) == 1;
       i72 = i2 + 4 | 0;
       i75 = (HEAP32[i72 >> 2] | 0) + 1 | 0;
       HEAP32[i72 >> 2] = i75;
       HEAP16[i80 >> 1] = HEAPU8[i75] | 0;
       if ((i219 & 1 | i70 | 0) == 0) {
        break;
       }
       if ((i70 | 0) != 0) {
        i70 = i2 + 32 | 0;
        HEAP32[i70 >> 2] = (HEAP32[i70 >> 2] | 0) + 1;
        i70 = HEAP32[i2 + 16 >> 2] | 0;
        if ((i70 | 0) == 0) {
         i568 = 0;
        } else {
         i568 = HEAP32[i70 + 4 >> 2] | 0;
        }
        HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i224) + i568;
       }
       if (!i219) {
        break;
       }
       __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
      }
     } while (0);
     if ((HEAP8[i82] & 1) != 0) {
      i88 = 1021;
      break;
     }
     i324 = HEAP16[i80 >> 1] | 0;
     HEAP16[i3 >> 1] = i324;
     if ((i324 & 65535) >>> 0 > 15 >>> 0) {
      HEAP8[i1 + 22 | 0] = 0;
      i194 = i324;
      i195 = i71;
      i196 = i76;
      i197 = i218;
      i198 = i73;
      i199 = i409;
      i88 = 74;
      continue;
     }
     if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
      i88 = 1021;
      break;
     }
     i194 = HEAP16[i3 >> 1] | 0;
     i195 = i71;
     i196 = i76;
     i197 = i218;
     i198 = i73;
     i199 = i409;
     i88 = 74;
     continue;
    } else if ((i88 | 0) == 1130) {
     i88 = 0;
     if (i253 << 16 >> 16 != 45) {
      HEAP32[i79 >> 2] = 5;
      i227 = i253;
      i88 = 66;
      continue;
     }
     __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 45);
     HEAP32[i79 >> 2] = 20;
     i324 = HEAPU8[i2 + 58 | 0] | 0;
     do {
      if ((i324 & 2 | 0) == 0) {
       i69 = i2 + 68 | 0;
       i325 = i2 + (HEAP32[i69 + 4 >> 2] | 0) | 0;
       i225 = HEAP32[i69 >> 2] | 0;
       if ((i225 & 1 | 0) == 0) {
        i569 = i225;
       } else {
        i569 = HEAP32[(HEAP32[i325 >> 2] | 0) + (i225 - 1) >> 2] | 0;
       }
       FUNCTION_TABLE_vi[i569 & 15](i325);
      } else {
       i325 = (HEAP16[i80 >> 1] | 0) == 10 & i324;
       i225 = i2 + 8 | 0;
       i69 = HEAP32[i225 >> 2] | 0;
       i77 = i69 - 1 | 0;
       HEAP32[i225 >> 2] = i77;
       i225 = (i77 | 0) == 1;
       i77 = i2 + 4 | 0;
       i221 = (HEAP32[i77 >> 2] | 0) + 1 | 0;
       HEAP32[i77 >> 2] = i221;
       HEAP16[i80 >> 1] = HEAPU8[i221] | 0;
       if ((i225 & 1 | i325 | 0) == 0) {
        break;
       }
       if ((i325 | 0) != 0) {
        i325 = i2 + 32 | 0;
        HEAP32[i325 >> 2] = (HEAP32[i325 >> 2] | 0) + 1;
        i325 = HEAP32[i2 + 16 >> 2] | 0;
        if ((i325 | 0) == 0) {
         i570 = 0;
        } else {
         i570 = HEAP32[i325 + 4 >> 2] | 0;
        }
        HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i69) + i570;
       }
       if (!i225) {
        break;
       }
       __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
      }
     } while (0);
     if ((HEAP8[i82] & 1) != 0) {
      i88 = 1148;
      break;
     }
     i324 = HEAP16[i80 >> 1] | 0;
     HEAP16[i3 >> 1] = i324;
     if ((i324 & 65535) >>> 0 > 15 >>> 0) {
      HEAP8[i1 + 22 | 0] = 0;
      i254 = i324;
      i88 = 1150;
      continue;
     }
     if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
      i88 = 1148;
      break;
     }
     i254 = HEAP16[i3 >> 1] | 0;
     i88 = 1150;
     continue;
    } else if ((i88 | 0) == 1150) {
     i88 = 0;
     if (i254 << 16 >> 16 != 45) {
      HEAP32[i79 >> 2] = 5;
      i227 = i254;
      i88 = 66;
      continue;
     }
     __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 45);
     HEAP32[i79 >> 2] = 23;
     i324 = i2 + 58 | 0;
     i409 = HEAPU8[i324] | 0;
     do {
      if ((i409 & 2 | 0) == 0) {
       i73 = i2 + 68 | 0;
       i218 = i2 + (HEAP32[i73 + 4 >> 2] | 0) | 0;
       i76 = HEAP32[i73 >> 2] | 0;
       if ((i76 & 1 | 0) == 0) {
        i571 = i76;
       } else {
        i571 = HEAP32[(HEAP32[i218 >> 2] | 0) + (i76 - 1) >> 2] | 0;
       }
       FUNCTION_TABLE_vi[i571 & 15](i218);
      } else {
       i218 = (HEAP16[i80 >> 1] | 0) == 10 & i409;
       i76 = i2 + 8 | 0;
       i73 = HEAP32[i76 >> 2] | 0;
       i71 = i73 - 1 | 0;
       HEAP32[i76 >> 2] = i71;
       i76 = (i71 | 0) == 1;
       i71 = i2 + 4 | 0;
       i225 = (HEAP32[i71 >> 2] | 0) + 1 | 0;
       HEAP32[i71 >> 2] = i225;
       HEAP16[i80 >> 1] = HEAPU8[i225] | 0;
       if ((i76 & 1 | i218 | 0) == 0) {
        break;
       }
       if ((i218 | 0) != 0) {
        i218 = i2 + 32 | 0;
        HEAP32[i218 >> 2] = (HEAP32[i218 >> 2] | 0) + 1;
        i218 = HEAP32[i2 + 16 >> 2] | 0;
        if ((i218 | 0) == 0) {
         i572 = 0;
        } else {
         i572 = HEAP32[i218 + 4 >> 2] | 0;
        }
        HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i73) + i572;
       }
       if (!i76) {
        break;
       }
       __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
      }
     } while (0);
     if ((HEAP8[i82] & 1) != 0) {
      i88 = 1168;
      break;
     }
     i409 = HEAP16[i80 >> 1] | 0;
     HEAP16[i3 >> 1] = i409;
     if ((i409 & 65535) >>> 0 > 15 >>> 0) {
      HEAP8[i1 + 22 | 0] = 0;
      i200 = i409;
      i201 = i324;
      i88 = 67;
      continue;
     }
     if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
      i88 = 1168;
      break;
     }
     i200 = HEAP16[i3 >> 1] | 0;
     i201 = i324;
     i88 = 67;
     continue;
    } else if ((i88 | 0) == 1226) {
     i88 = 0;
     if ((i255 << 16 >> 16 | 0) == 45) {
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 45);
      HEAP32[i79 >> 2] = 23;
      i409 = i2 + 58 | 0;
      i76 = HEAPU8[i409] | 0;
      do {
       if ((i76 & 2 | 0) == 0) {
        i73 = i2 + 68 | 0;
        i218 = i2 + (HEAP32[i73 + 4 >> 2] | 0) | 0;
        i225 = HEAP32[i73 >> 2] | 0;
        if ((i225 & 1 | 0) == 0) {
         i573 = i225;
        } else {
         i573 = HEAP32[(HEAP32[i218 >> 2] | 0) + (i225 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i573 & 15](i218);
       } else {
        i218 = (HEAP16[i80 >> 1] | 0) == 10 & i76;
        i225 = i2 + 8 | 0;
        i73 = HEAP32[i225 >> 2] | 0;
        i71 = i73 - 1 | 0;
        HEAP32[i225 >> 2] = i71;
        i225 = (i71 | 0) == 1;
        i71 = i2 + 4 | 0;
        i69 = (HEAP32[i71 >> 2] | 0) + 1 | 0;
        HEAP32[i71 >> 2] = i69;
        HEAP16[i80 >> 1] = HEAPU8[i69] | 0;
        if ((i225 & 1 | i218 | 0) == 0) {
         break;
        }
        if ((i218 | 0) != 0) {
         i218 = i2 + 32 | 0;
         HEAP32[i218 >> 2] = (HEAP32[i218 >> 2] | 0) + 1;
         i218 = HEAP32[i2 + 16 >> 2] | 0;
         if ((i218 | 0) == 0) {
          i574 = 0;
         } else {
          i574 = HEAP32[i218 + 4 >> 2] | 0;
         }
         HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i73) + i574;
        }
        if (!i225) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 1244;
       break;
      }
      i76 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i76;
      if ((i76 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i1 + 22 | 0] = 0;
       i200 = i76;
       i201 = i409;
       i88 = 67;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 1244;
       break;
      }
      i200 = HEAP16[i3 >> 1] | 0;
      i201 = i409;
      i88 = 67;
      continue;
     } else if ((i255 << 16 >> 16 | 0) == 60) {
      HEAP32[i79 >> 2] = 24;
      i76 = HEAPU8[i2 + 58 | 0] | 0;
      do {
       if ((i76 & 2 | 0) == 0) {
        i324 = i2 + 68 | 0;
        i225 = i2 + (HEAP32[i324 + 4 >> 2] | 0) | 0;
        i73 = HEAP32[i324 >> 2] | 0;
        if ((i73 & 1 | 0) == 0) {
         i575 = i73;
        } else {
         i575 = HEAP32[(HEAP32[i225 >> 2] | 0) + (i73 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i575 & 15](i225);
       } else {
        i225 = (HEAP16[i80 >> 1] | 0) == 10 & i76;
        i73 = i2 + 8 | 0;
        i324 = HEAP32[i73 >> 2] | 0;
        i218 = i324 - 1 | 0;
        HEAP32[i73 >> 2] = i218;
        i73 = (i218 | 0) == 1;
        i218 = i2 + 4 | 0;
        i69 = (HEAP32[i218 >> 2] | 0) + 1 | 0;
        HEAP32[i218 >> 2] = i69;
        HEAP16[i80 >> 1] = HEAPU8[i69] | 0;
        if ((i73 & 1 | i225 | 0) == 0) {
         break;
        }
        if ((i225 | 0) != 0) {
         i225 = i2 + 32 | 0;
         HEAP32[i225 >> 2] = (HEAP32[i225 >> 2] | 0) + 1;
         i225 = HEAP32[i2 + 16 >> 2] | 0;
         if ((i225 | 0) == 0) {
          i576 = 0;
         } else {
          i576 = HEAP32[i225 + 4 >> 2] | 0;
         }
         HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i324) + i576;
        }
        if (!i73) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 1262;
       break;
      }
      i76 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i76;
      if ((i76 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i1 + 22 | 0] = 0;
       i256 = i76;
       i88 = 1356;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 1262;
       break;
      }
      i256 = HEAP16[i3 >> 1] | 0;
      i88 = 1356;
      continue;
     } else if ((i255 << 16 >> 16 | 0) == 0) {
      HEAP32[i79 >> 2] = 0;
      i232 = 0;
      i233 = 0;
      i88 = 79;
      continue;
     } else {
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, i255);
      HEAP32[i79 >> 2] = 21;
      i76 = HEAPU8[i2 + 58 | 0] | 0;
      do {
       if ((i76 & 2 | 0) == 0) {
        i409 = i2 + 68 | 0;
        i73 = i2 + (HEAP32[i409 + 4 >> 2] | 0) | 0;
        i324 = HEAP32[i409 >> 2] | 0;
        if ((i324 & 1 | 0) == 0) {
         i577 = i324;
        } else {
         i577 = HEAP32[(HEAP32[i73 >> 2] | 0) + (i324 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i577 & 15](i73);
       } else {
        i73 = (HEAP16[i80 >> 1] | 0) == 10 & i76;
        i324 = i2 + 8 | 0;
        i409 = HEAP32[i324 >> 2] | 0;
        i225 = i409 - 1 | 0;
        HEAP32[i324 >> 2] = i225;
        i324 = (i225 | 0) == 1;
        i225 = i2 + 4 | 0;
        i69 = (HEAP32[i225 >> 2] | 0) + 1 | 0;
        HEAP32[i225 >> 2] = i69;
        HEAP16[i80 >> 1] = HEAPU8[i69] | 0;
        if ((i324 & 1 | i73 | 0) == 0) {
         break;
        }
        if ((i73 | 0) != 0) {
         i73 = i2 + 32 | 0;
         HEAP32[i73 >> 2] = (HEAP32[i73 >> 2] | 0) + 1;
         i73 = HEAP32[i2 + 16 >> 2] | 0;
         if ((i73 | 0) == 0) {
          i578 = 0;
         } else {
          i578 = HEAP32[i73 + 4 >> 2] | 0;
         }
         HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i409) + i578;
        }
        if (!i324) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 1281;
       break;
      }
      i76 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i76;
      if ((i76 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i1 + 22 | 0] = 0;
       i228 = i76;
       i88 = 68;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 1281;
       break;
      }
      i228 = HEAP16[i3 >> 1] | 0;
      i88 = 68;
      continue;
     }
    } else if ((i88 | 0) == 1356) {
     i88 = 0;
     if (i256 << 16 >> 16 == 47) {
      i76 = i1 + 104 | 0;
      do {
       if ((HEAP32[i76 >> 2] | 0) != 0) {
        i324 = i1 + 108 | 0;
        if ((HEAP32[i324 >> 2] | 0) != 0) {
         HEAP32[i324 >> 2] = 0;
        }
        i324 = i1 + 100 | 0;
        i409 = HEAP32[i324 >> 2] | 0;
        i73 = i1 + 112 | 0;
        if ((i73 | 0) == (i409 | 0) | (i409 | 0) == 0) {
         i579 = i409;
        } else {
         HEAP32[i324 >> 2] = 0;
         HEAP32[i76 >> 2] = 0;
         __ZN3WTF8fastFreeEPv(i409);
         i579 = HEAP32[i324 >> 2] | 0;
        }
        if ((i579 | 0) != 0) {
         break;
        }
        HEAP32[i324 >> 2] = i73;
        HEAP32[i76 >> 2] = 32;
       }
      } while (0);
      HEAP32[i79 >> 2] = 25;
      i76 = HEAPU8[i2 + 58 | 0] | 0;
      do {
       if ((i76 & 2 | 0) == 0) {
        i73 = i2 + 68 | 0;
        i324 = i2 + (HEAP32[i73 + 4 >> 2] | 0) | 0;
        i409 = HEAP32[i73 >> 2] | 0;
        if ((i409 & 1 | 0) == 0) {
         i580 = i409;
        } else {
         i580 = HEAP32[(HEAP32[i324 >> 2] | 0) + (i409 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i580 & 15](i324);
       } else {
        i324 = (HEAP16[i80 >> 1] | 0) == 10 & i76;
        i409 = i2 + 8 | 0;
        i73 = HEAP32[i409 >> 2] | 0;
        i69 = i73 - 1 | 0;
        HEAP32[i409 >> 2] = i69;
        i409 = (i69 | 0) == 1;
        i69 = i2 + 4 | 0;
        i225 = (HEAP32[i69 >> 2] | 0) + 1 | 0;
        HEAP32[i69 >> 2] = i225;
        HEAP16[i80 >> 1] = HEAPU8[i225] | 0;
        if ((i409 & 1 | i324 | 0) == 0) {
         break;
        }
        if ((i324 | 0) != 0) {
         i324 = i2 + 32 | 0;
         HEAP32[i324 >> 2] = (HEAP32[i324 >> 2] | 0) + 1;
         i324 = HEAP32[i2 + 16 >> 2] | 0;
         if ((i324 | 0) == 0) {
          i581 = 0;
         } else {
          i581 = HEAP32[i324 + 4 >> 2] | 0;
         }
         HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i73) + i581;
        }
        if (!i409) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 1381;
       break;
      }
      i76 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i76;
      if ((i76 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i1 + 22 | 0] = 0;
       i257 = i76;
       i88 = 1443;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 1381;
       break;
      }
      i257 = HEAP16[i3 >> 1] | 0;
      i88 = 1443;
      continue;
     }
     if ((i256 - 65 & 65535) >>> 0 < 26 >>> 0) {
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 60);
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, i256);
      i76 = i1 + 100 | 0;
      i409 = i1 + 104 | 0;
      i73 = i1 + 108 | 0;
      do {
       if ((HEAP32[i409 >> 2] | 0) == 0) {
        i582 = 0;
       } else {
        if ((HEAP32[i73 >> 2] | 0) != 0) {
         HEAP32[i73 >> 2] = 0;
        }
        i324 = i76 | 0;
        i225 = HEAP32[i324 >> 2] | 0;
        i69 = i1 + 112 | 0;
        if ((i69 | 0) == (i225 | 0) | (i225 | 0) == 0) {
         i583 = i225;
        } else {
         HEAP32[i324 >> 2] = 0;
         HEAP32[i409 >> 2] = 0;
         __ZN3WTF8fastFreeEPv(i225);
         i583 = HEAP32[i324 >> 2] | 0;
        }
        if ((i583 | 0) == 0) {
         HEAP32[i324 >> 2] = i69;
         HEAP32[i409 >> 2] = 32;
         i582 = 32;
         break;
        } else {
         i582 = HEAP32[i409 >> 2] | 0;
         break;
        }
       }
      } while (0);
      i69 = i256 + 32 & 65535;
      HEAP16[i46 >> 1] = i69;
      i324 = HEAP32[i73 >> 2] | 0;
      if ((i324 | 0) == (i582 | 0)) {
       __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14appendSlowCaseItEEvOT_(i76, i46);
      } else {
       HEAP8[(HEAP32[i76 >> 2] | 0) + i324 | 0] = i69;
       HEAP32[i73 >> 2] = (HEAP32[i73 >> 2] | 0) + 1;
      }
      HEAP32[i79 >> 2] = 27;
      i69 = i2 + 58 | 0;
      i324 = HEAPU8[i69] | 0;
      do {
       if ((i324 & 2 | 0) == 0) {
        i225 = i2 + 68 | 0;
        i218 = i2 + (HEAP32[i225 + 4 >> 2] | 0) | 0;
        i71 = HEAP32[i225 >> 2] | 0;
        if ((i71 & 1 | 0) == 0) {
         i584 = i71;
        } else {
         i584 = HEAP32[(HEAP32[i218 >> 2] | 0) + (i71 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i584 & 15](i218);
       } else {
        i218 = (HEAP16[i80 >> 1] | 0) == 10 & i324;
        i71 = i2 + 8 | 0;
        i225 = HEAP32[i71 >> 2] | 0;
        i325 = i225 - 1 | 0;
        HEAP32[i71 >> 2] = i325;
        i71 = (i325 | 0) == 1;
        i325 = i2 + 4 | 0;
        i221 = (HEAP32[i325 >> 2] | 0) + 1 | 0;
        HEAP32[i325 >> 2] = i221;
        HEAP16[i80 >> 1] = HEAPU8[i221] | 0;
        if ((i71 & 1 | i218 | 0) == 0) {
         break;
        }
        if ((i218 | 0) != 0) {
         i218 = i2 + 32 | 0;
         HEAP32[i218 >> 2] = (HEAP32[i218 >> 2] | 0) + 1;
         i218 = HEAP32[i2 + 16 >> 2] | 0;
         if ((i218 | 0) == 0) {
          i585 = 0;
         } else {
          i585 = HEAP32[i218 + 4 >> 2] | 0;
         }
         HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i225) + i585;
        }
        if (!i71) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 1411;
       break;
      }
      i324 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i324;
      if ((i324 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i1 + 22 | 0] = 0;
       i208 = i324;
       i209 = i76;
       i210 = i73;
       i211 = i409;
       i212 = i69;
       i88 = 69;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 1411;
       break;
      }
      i208 = HEAP16[i3 >> 1] | 0;
      i209 = i76;
      i210 = i73;
      i211 = i409;
      i212 = i69;
      i88 = 69;
      continue;
     }
     __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 60);
     if ((i256 - 97 & 65535) >>> 0 >= 26 >>> 0) {
      HEAP32[i79 >> 2] = 21;
      i228 = i256;
      i88 = 68;
      continue;
     }
     __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, i256);
     i324 = i1 + 100 | 0;
     i71 = i1 + 104 | 0;
     i225 = i1 + 108 | 0;
     do {
      if ((HEAP32[i71 >> 2] | 0) == 0) {
       i586 = 0;
      } else {
       if ((HEAP32[i225 >> 2] | 0) != 0) {
        HEAP32[i225 >> 2] = 0;
       }
       i218 = i324 | 0;
       i221 = HEAP32[i218 >> 2] | 0;
       i325 = i1 + 112 | 0;
       if ((i325 | 0) == (i221 | 0) | (i221 | 0) == 0) {
        i587 = i221;
       } else {
        HEAP32[i218 >> 2] = 0;
        HEAP32[i71 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i221);
        i587 = HEAP32[i218 >> 2] | 0;
       }
       if ((i587 | 0) == 0) {
        HEAP32[i218 >> 2] = i325;
        HEAP32[i71 >> 2] = 32;
        i586 = 32;
        break;
       } else {
        i586 = HEAP32[i71 >> 2] | 0;
        break;
       }
      }
     } while (0);
     i69 = i256 & 255;
     HEAP8[i47] = i69;
     i409 = HEAP32[i225 >> 2] | 0;
     if ((i409 | 0) == (i586 | 0)) {
      i73 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i324, i586 + 1 | 0, i47) | 0;
      HEAP8[(HEAP32[i324 >> 2] | 0) + (HEAP32[i225 >> 2] | 0) | 0] = HEAP8[i73] | 0;
     } else {
      HEAP8[(HEAP32[i324 >> 2] | 0) + i409 | 0] = i69;
     }
     HEAP32[i225 >> 2] = (HEAP32[i225 >> 2] | 0) + 1;
     HEAP32[i79 >> 2] = 27;
     i69 = i2 + 58 | 0;
     i409 = HEAPU8[i69] | 0;
     do {
      if ((i409 & 2 | 0) == 0) {
       i73 = i2 + 68 | 0;
       i76 = i2 + (HEAP32[i73 + 4 >> 2] | 0) | 0;
       i325 = HEAP32[i73 >> 2] | 0;
       if ((i325 & 1 | 0) == 0) {
        i588 = i325;
       } else {
        i588 = HEAP32[(HEAP32[i76 >> 2] | 0) + (i325 - 1) >> 2] | 0;
       }
       FUNCTION_TABLE_vi[i588 & 15](i76);
      } else {
       i76 = (HEAP16[i80 >> 1] | 0) == 10 & i409;
       i325 = i2 + 8 | 0;
       i73 = HEAP32[i325 >> 2] | 0;
       i218 = i73 - 1 | 0;
       HEAP32[i325 >> 2] = i218;
       i325 = (i218 | 0) == 1;
       i218 = i2 + 4 | 0;
       i221 = (HEAP32[i218 >> 2] | 0) + 1 | 0;
       HEAP32[i218 >> 2] = i221;
       HEAP16[i80 >> 1] = HEAPU8[i221] | 0;
       if ((i325 & 1 | i76 | 0) == 0) {
        break;
       }
       if ((i76 | 0) != 0) {
        i76 = i2 + 32 | 0;
        HEAP32[i76 >> 2] = (HEAP32[i76 >> 2] | 0) + 1;
        i76 = HEAP32[i2 + 16 >> 2] | 0;
        if ((i76 | 0) == 0) {
         i589 = 0;
        } else {
         i589 = HEAP32[i76 + 4 >> 2] | 0;
        }
        HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i73) + i589;
       }
       if (!i325) {
        break;
       }
       __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
      }
     } while (0);
     if ((HEAP8[i82] & 1) != 0) {
      i88 = 1441;
      break;
     }
     i409 = HEAP16[i80 >> 1] | 0;
     HEAP16[i3 >> 1] = i409;
     if ((i409 & 65535) >>> 0 > 15 >>> 0) {
      HEAP8[i1 + 22 | 0] = 0;
      i208 = i409;
      i209 = i324;
      i210 = i225;
      i211 = i71;
      i212 = i69;
      i88 = 69;
      continue;
     }
     if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
      i88 = 1441;
      break;
     }
     i208 = HEAP16[i3 >> 1] | 0;
     i209 = i324;
     i210 = i225;
     i211 = i71;
     i212 = i69;
     i88 = 69;
     continue;
    } else if ((i88 | 0) == 1443) {
     i88 = 0;
     if ((i257 - 65 & 65535) >>> 0 < 26 >>> 0) {
      i409 = i1 + 100 | 0;
      i325 = i257 & 255;
      HEAP8[i48] = i325;
      i73 = i1 + 108 | 0;
      i76 = HEAP32[i73 >> 2] | 0;
      i221 = i1 + 104 | 0;
      if ((i76 | 0) == (HEAP32[i221 >> 2] | 0)) {
       i218 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i409, i76 + 1 | 0, i48) | 0;
       HEAP8[(HEAP32[i409 >> 2] | 0) + (HEAP32[i73 >> 2] | 0) | 0] = HEAP8[i218] | 0;
      } else {
       HEAP8[(HEAP32[i409 >> 2] | 0) + i76 | 0] = i325;
      }
      HEAP32[i73 >> 2] = (HEAP32[i73 >> 2] | 0) + 1;
      i325 = i257 + 32 & 255;
      HEAP8[i8] = i325;
      i76 = HEAP32[i68 >> 2] | 0;
      i218 = i1 + 148 | 0;
      if ((i76 | 0) == (HEAP32[i218 >> 2] | 0)) {
       i77 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i67, i76 + 1 | 0, i8) | 0;
       HEAP8[(HEAP32[i67 >> 2] | 0) + (HEAP32[i68 >> 2] | 0) | 0] = HEAP8[i77] | 0;
      } else {
       HEAP8[(HEAP32[i67 >> 2] | 0) + i76 | 0] = i325;
      }
      HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 1;
      HEAP32[i79 >> 2] = 26;
      i325 = i2 + 58 | 0;
      i76 = HEAPU8[i325] | 0;
      do {
       if ((i76 & 2 | 0) == 0) {
        i77 = i2 + 68 | 0;
        i219 = i2 + (HEAP32[i77 + 4 >> 2] | 0) | 0;
        i224 = HEAP32[i77 >> 2] | 0;
        if ((i224 & 1 | 0) == 0) {
         i590 = i224;
        } else {
         i590 = HEAP32[(HEAP32[i219 >> 2] | 0) + (i224 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i590 & 15](i219);
       } else {
        i219 = (HEAP16[i80 >> 1] | 0) == 10 & i76;
        i224 = i2 + 8 | 0;
        i77 = HEAP32[i224 >> 2] | 0;
        i70 = i77 - 1 | 0;
        HEAP32[i224 >> 2] = i70;
        i224 = (i70 | 0) == 1;
        i70 = i2 + 4 | 0;
        i75 = (HEAP32[i70 >> 2] | 0) + 1 | 0;
        HEAP32[i70 >> 2] = i75;
        HEAP16[i80 >> 1] = HEAPU8[i75] | 0;
        if ((i224 & 1 | i219 | 0) == 0) {
         break;
        }
        if ((i219 | 0) != 0) {
         i219 = i2 + 32 | 0;
         HEAP32[i219 >> 2] = (HEAP32[i219 >> 2] | 0) + 1;
         i219 = HEAP32[i2 + 16 >> 2] | 0;
         if ((i219 | 0) == 0) {
          i591 = 0;
         } else {
          i591 = HEAP32[i219 + 4 >> 2] | 0;
         }
         HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i77) + i591;
        }
        if (!i224) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 1467;
       break;
      }
      i76 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i76;
      if ((i76 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i1 + 22 | 0] = 0;
       i202 = i76;
       i203 = i409;
       i204 = i73;
       i205 = i221;
       i206 = i218;
       i207 = i325;
       i88 = 73;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 1467;
       break;
      }
      i202 = HEAP16[i3 >> 1] | 0;
      i203 = i409;
      i204 = i73;
      i205 = i221;
      i206 = i218;
      i207 = i325;
      i88 = 73;
      continue;
     }
     if ((i257 - 97 & 65535) >>> 0 >= 26 >>> 0) {
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 60);
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 47);
      HEAP32[i79 >> 2] = 21;
      i228 = i257;
      i88 = 68;
      continue;
     }
     i76 = i1 + 100 | 0;
     i69 = i257 & 255;
     HEAP8[i49] = i69;
     i71 = i1 + 108 | 0;
     i225 = HEAP32[i71 >> 2] | 0;
     i324 = i1 + 104 | 0;
     if ((i225 | 0) == (HEAP32[i324 >> 2] | 0)) {
      i224 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i76, i225 + 1 | 0, i49) | 0;
      HEAP8[(HEAP32[i76 >> 2] | 0) + (HEAP32[i71 >> 2] | 0) | 0] = HEAP8[i224] | 0;
     } else {
      HEAP8[(HEAP32[i76 >> 2] | 0) + i225 | 0] = i69;
     }
     HEAP32[i71 >> 2] = (HEAP32[i71 >> 2] | 0) + 1;
     HEAP8[i7] = i69;
     i225 = HEAP32[i68 >> 2] | 0;
     i224 = i1 + 148 | 0;
     if ((i225 | 0) == (HEAP32[i224 >> 2] | 0)) {
      i77 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i67, i225 + 1 | 0, i7) | 0;
      HEAP8[(HEAP32[i67 >> 2] | 0) + (HEAP32[i68 >> 2] | 0) | 0] = HEAP8[i77] | 0;
     } else {
      HEAP8[(HEAP32[i67 >> 2] | 0) + i225 | 0] = i69;
     }
     HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 1;
     HEAP32[i79 >> 2] = 26;
     i69 = i2 + 58 | 0;
     i225 = HEAPU8[i69] | 0;
     do {
      if ((i225 & 2 | 0) == 0) {
       i77 = i2 + 68 | 0;
       i219 = i2 + (HEAP32[i77 + 4 >> 2] | 0) | 0;
       i75 = HEAP32[i77 >> 2] | 0;
       if ((i75 & 1 | 0) == 0) {
        i592 = i75;
       } else {
        i592 = HEAP32[(HEAP32[i219 >> 2] | 0) + (i75 - 1) >> 2] | 0;
       }
       FUNCTION_TABLE_vi[i592 & 15](i219);
      } else {
       i219 = (HEAP16[i80 >> 1] | 0) == 10 & i225;
       i75 = i2 + 8 | 0;
       i77 = HEAP32[i75 >> 2] | 0;
       i70 = i77 - 1 | 0;
       HEAP32[i75 >> 2] = i70;
       i75 = (i70 | 0) == 1;
       i70 = i2 + 4 | 0;
       i72 = (HEAP32[i70 >> 2] | 0) + 1 | 0;
       HEAP32[i70 >> 2] = i72;
       HEAP16[i80 >> 1] = HEAPU8[i72] | 0;
       if ((i75 & 1 | i219 | 0) == 0) {
        break;
       }
       if ((i219 | 0) != 0) {
        i219 = i2 + 32 | 0;
        HEAP32[i219 >> 2] = (HEAP32[i219 >> 2] | 0) + 1;
        i219 = HEAP32[i2 + 16 >> 2] | 0;
        if ((i219 | 0) == 0) {
         i593 = 0;
        } else {
         i593 = HEAP32[i219 + 4 >> 2] | 0;
        }
        HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i77) + i593;
       }
       if (!i75) {
        break;
       }
       __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
      }
     } while (0);
     if ((HEAP8[i82] & 1) != 0) {
      i88 = 1492;
      break;
     }
     i225 = HEAP16[i80 >> 1] | 0;
     HEAP16[i3 >> 1] = i225;
     if ((i225 & 65535) >>> 0 > 15 >>> 0) {
      HEAP8[i1 + 22 | 0] = 0;
      i202 = i225;
      i203 = i76;
      i204 = i71;
      i205 = i324;
      i206 = i224;
      i207 = i69;
      i88 = 73;
      continue;
     }
     if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
      i88 = 1492;
      break;
     }
     i202 = HEAP16[i3 >> 1] | 0;
     i203 = i76;
     i204 = i71;
     i205 = i324;
     i206 = i224;
     i207 = i69;
     i88 = 73;
     continue;
    } else if ((i88 | 0) == 1743) {
     i88 = 0;
     if ((i258 << 16 >> 16 | 0) == 45) {
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 45);
      HEAP32[i79 >> 2] = 30;
      i225 = i2 + 58 | 0;
      i325 = HEAPU8[i225] | 0;
      do {
       if ((i325 & 2 | 0) == 0) {
        i218 = i2 + 68 | 0;
        i221 = i2 + (HEAP32[i218 + 4 >> 2] | 0) | 0;
        i73 = HEAP32[i218 >> 2] | 0;
        if ((i73 & 1 | 0) == 0) {
         i594 = i73;
        } else {
         i594 = HEAP32[(HEAP32[i221 >> 2] | 0) + (i73 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i594 & 15](i221);
       } else {
        i221 = (HEAP16[i80 >> 1] | 0) == 10 & i325;
        i73 = i2 + 8 | 0;
        i218 = HEAP32[i73 >> 2] | 0;
        i409 = i218 - 1 | 0;
        HEAP32[i73 >> 2] = i409;
        i73 = (i409 | 0) == 1;
        i409 = i2 + 4 | 0;
        i75 = (HEAP32[i409 >> 2] | 0) + 1 | 0;
        HEAP32[i409 >> 2] = i75;
        HEAP16[i80 >> 1] = HEAPU8[i75] | 0;
        if ((i73 & 1 | i221 | 0) == 0) {
         break;
        }
        if ((i221 | 0) != 0) {
         i221 = i2 + 32 | 0;
         HEAP32[i221 >> 2] = (HEAP32[i221 >> 2] | 0) + 1;
         i221 = HEAP32[i2 + 16 >> 2] | 0;
         if ((i221 | 0) == 0) {
          i595 = 0;
         } else {
          i595 = HEAP32[i221 + 4 >> 2] | 0;
         }
         HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i218) + i595;
        }
        if (!i73) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 1761;
       break;
      }
      i325 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i325;
      if ((i325 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i1 + 22 | 0] = 0;
       i213 = i325;
       i214 = i225;
       i88 = 71;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 1761;
       break;
      }
      i213 = HEAP16[i3 >> 1] | 0;
      i214 = i225;
      i88 = 71;
      continue;
     } else if ((i258 << 16 >> 16 | 0) == 60) {
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 60);
      HEAP32[i79 >> 2] = 31;
      i325 = HEAPU8[i2 + 58 | 0] | 0;
      do {
       if ((i325 & 2 | 0) == 0) {
        i69 = i2 + 68 | 0;
        i224 = i2 + (HEAP32[i69 + 4 >> 2] | 0) | 0;
        i324 = HEAP32[i69 >> 2] | 0;
        if ((i324 & 1 | 0) == 0) {
         i596 = i324;
        } else {
         i596 = HEAP32[(HEAP32[i224 >> 2] | 0) + (i324 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i596 & 15](i224);
       } else {
        i224 = (HEAP16[i80 >> 1] | 0) == 10 & i325;
        i324 = i2 + 8 | 0;
        i69 = HEAP32[i324 >> 2] | 0;
        i71 = i69 - 1 | 0;
        HEAP32[i324 >> 2] = i71;
        i324 = (i71 | 0) == 1;
        i71 = i2 + 4 | 0;
        i76 = (HEAP32[i71 >> 2] | 0) + 1 | 0;
        HEAP32[i71 >> 2] = i76;
        HEAP16[i80 >> 1] = HEAPU8[i76] | 0;
        if ((i324 & 1 | i224 | 0) == 0) {
         break;
        }
        if ((i224 | 0) != 0) {
         i224 = i2 + 32 | 0;
         HEAP32[i224 >> 2] = (HEAP32[i224 >> 2] | 0) + 1;
         i224 = HEAP32[i2 + 16 >> 2] | 0;
         if ((i224 | 0) == 0) {
          i597 = 0;
         } else {
          i597 = HEAP32[i224 + 4 >> 2] | 0;
         }
         HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i69) + i597;
        }
        if (!i324) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 1779;
       break;
      }
      i325 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i325;
      if ((i325 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i1 + 22 | 0] = 0;
       i259 = i325;
       i88 = 1873;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 1779;
       break;
      }
      i259 = HEAP16[i3 >> 1] | 0;
      i88 = 1873;
      continue;
     } else if ((i258 << 16 >> 16 | 0) == 0) {
      HEAP32[i79 >> 2] = 0;
      i232 = 0;
      i233 = 0;
      i88 = 79;
      continue;
     } else {
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, i258);
      HEAP32[i79 >> 2] = 28;
      i325 = HEAPU8[i2 + 58 | 0] | 0;
      do {
       if ((i325 & 2 | 0) == 0) {
        i225 = i2 + 68 | 0;
        i324 = i2 + (HEAP32[i225 + 4 >> 2] | 0) | 0;
        i69 = HEAP32[i225 >> 2] | 0;
        if ((i69 & 1 | 0) == 0) {
         i598 = i69;
        } else {
         i598 = HEAP32[(HEAP32[i324 >> 2] | 0) + (i69 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i598 & 15](i324);
       } else {
        i324 = (HEAP16[i80 >> 1] | 0) == 10 & i325;
        i69 = i2 + 8 | 0;
        i225 = HEAP32[i69 >> 2] | 0;
        i224 = i225 - 1 | 0;
        HEAP32[i69 >> 2] = i224;
        i69 = (i224 | 0) == 1;
        i224 = i2 + 4 | 0;
        i76 = (HEAP32[i224 >> 2] | 0) + 1 | 0;
        HEAP32[i224 >> 2] = i76;
        HEAP16[i80 >> 1] = HEAPU8[i76] | 0;
        if ((i69 & 1 | i324 | 0) == 0) {
         break;
        }
        if ((i324 | 0) != 0) {
         i324 = i2 + 32 | 0;
         HEAP32[i324 >> 2] = (HEAP32[i324 >> 2] | 0) + 1;
         i324 = HEAP32[i2 + 16 >> 2] | 0;
         if ((i324 | 0) == 0) {
          i599 = 0;
         } else {
          i599 = HEAP32[i324 + 4 >> 2] | 0;
         }
         HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i225) + i599;
        }
        if (!i69) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 1798;
       break;
      }
      i325 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i325;
      if ((i325 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i1 + 22 | 0] = 0;
       i229 = i325;
       i88 = 70;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 1798;
       break;
      }
      i229 = HEAP16[i3 >> 1] | 0;
      i88 = 70;
      continue;
     }
    } else if ((i88 | 0) == 1873) {
     i88 = 0;
     if (i259 << 16 >> 16 != 47) {
      HEAP32[i79 >> 2] = 28;
      i229 = i259;
      i88 = 70;
      continue;
     }
     __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 47);
     i325 = i1 + 104 | 0;
     do {
      if ((HEAP32[i325 >> 2] | 0) != 0) {
       i69 = i1 + 108 | 0;
       if ((HEAP32[i69 >> 2] | 0) != 0) {
        HEAP32[i69 >> 2] = 0;
       }
       i69 = i1 + 100 | 0;
       i225 = HEAP32[i69 >> 2] | 0;
       i324 = i1 + 112 | 0;
       if ((i324 | 0) == (i225 | 0) | (i225 | 0) == 0) {
        i600 = i225;
       } else {
        HEAP32[i69 >> 2] = 0;
        HEAP32[i325 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i225);
        i600 = HEAP32[i69 >> 2] | 0;
       }
       if ((i600 | 0) != 0) {
        break;
       }
       HEAP32[i69 >> 2] = i324;
       HEAP32[i325 >> 2] = 32;
      }
     } while (0);
     HEAP32[i79 >> 2] = 32;
     i324 = i2 + 58 | 0;
     i69 = HEAPU8[i324] | 0;
     do {
      if ((i69 & 2 | 0) == 0) {
       i225 = i2 + 68 | 0;
       i76 = i2 + (HEAP32[i225 + 4 >> 2] | 0) | 0;
       i224 = HEAP32[i225 >> 2] | 0;
       if ((i224 & 1 | 0) == 0) {
        i601 = i224;
       } else {
        i601 = HEAP32[(HEAP32[i76 >> 2] | 0) + (i224 - 1) >> 2] | 0;
       }
       FUNCTION_TABLE_vi[i601 & 15](i76);
      } else {
       i76 = (HEAP16[i80 >> 1] | 0) == 10 & i69;
       i224 = i2 + 8 | 0;
       i225 = HEAP32[i224 >> 2] | 0;
       i71 = i225 - 1 | 0;
       HEAP32[i224 >> 2] = i71;
       i224 = (i71 | 0) == 1;
       i71 = i2 + 4 | 0;
       i73 = (HEAP32[i71 >> 2] | 0) + 1 | 0;
       HEAP32[i71 >> 2] = i73;
       HEAP16[i80 >> 1] = HEAPU8[i73] | 0;
       if ((i224 & 1 | i76 | 0) == 0) {
        break;
       }
       if ((i76 | 0) != 0) {
        i76 = i2 + 32 | 0;
        HEAP32[i76 >> 2] = (HEAP32[i76 >> 2] | 0) + 1;
        i76 = HEAP32[i2 + 16 >> 2] | 0;
        if ((i76 | 0) == 0) {
         i602 = 0;
        } else {
         i602 = HEAP32[i76 + 4 >> 2] | 0;
        }
        HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i225) + i602;
       }
       if (!i224) {
        break;
       }
       __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
      }
     } while (0);
     if ((HEAP8[i82] & 1) != 0) {
      i88 = 1898;
      break;
     }
     i69 = HEAP16[i80 >> 1] | 0;
     HEAP16[i3 >> 1] = i69;
     if ((i69 & 65535) >>> 0 > 15 >>> 0) {
      HEAP8[i1 + 22 | 0] = 0;
      i215 = i69;
      i216 = i325;
      i217 = i324;
      i88 = 72;
      continue;
     }
     if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
      i88 = 1898;
      break;
     }
     i215 = HEAP16[i3 >> 1] | 0;
     i216 = i325;
     i217 = i324;
     i88 = 72;
     continue;
    } else if ((i88 | 0) == 2091) {
     i88 = 0;
     i69 = i89;
     L3833 : while (1) {
      switch (i69 << 16 >> 16) {
      case 32:
      case 10:
      case 9:
      case 12:
       {
        i88 = 2093;
        break L3833;
        break;
       }
      case 47:
       {
        i88 = 2115;
        break L3833;
        break;
       }
      case 61:
       {
        i88 = 2137;
        break L3833;
        break;
       }
      case 62:
       {
        i88 = 2159;
        break L110;
        break;
       }
      default:
       {}
      }
      if ((HEAP8[i91] & 1) != 0 & i69 << 16 >> 16 == 60) {
       i88 = 2165;
       break L110;
      }
      do {
       if ((i69 - 65 & 65535) >>> 0 < 26 >>> 0) {
        __ZN7WebCore9HTMLToken21appendToAttributeNameEt(HEAP32[i66 >> 2] | 0, i69 + 32 & 65535);
        HEAP32[i79 >> 2] = 34;
        i224 = HEAPU8[i92] | 0;
        do {
         if ((i224 & 2 | 0) == 0) {
          i225 = i94 + (HEAP32[i93 + 4 >> 2] | 0) | 0;
          i76 = HEAP32[i93 >> 2] | 0;
          if ((i76 & 1 | 0) == 0) {
           i603 = i76;
          } else {
           i603 = HEAP32[(HEAP32[i225 >> 2] | 0) + (i76 - 1) >> 2] | 0;
          }
          FUNCTION_TABLE_vi[i603 & 15](i225);
         } else {
          i225 = (HEAP16[i80 >> 1] | 0) == 10 & i224;
          i76 = HEAP32[i96 >> 2] | 0;
          i73 = i76 - 1 | 0;
          HEAP32[i96 >> 2] = i73;
          i71 = (i73 | 0) == 1;
          i73 = (HEAP32[i97 >> 2] | 0) + 1 | 0;
          HEAP32[i97 >> 2] = i73;
          HEAP16[i80 >> 1] = HEAPU8[i73] | 0;
          if ((i71 & 1 | i225 | 0) == 0) {
           break;
          }
          if ((i225 | 0) != 0) {
           HEAP32[i98 >> 2] = (HEAP32[i98 >> 2] | 0) + 1;
           i225 = HEAP32[i100 >> 2] | 0;
           if ((i225 | 0) == 0) {
            i604 = 0;
           } else {
            i604 = HEAP32[i225 + 4 >> 2] | 0;
           }
           HEAP32[i101 >> 2] = (HEAP32[i99 >> 2] | 0) + (1 - i76) + i604;
          }
          if (!i71) {
           break;
          }
          __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
         }
        } while (0);
        if ((HEAP8[i82] & 1) != 0) {
         i88 = 2189;
         break L110;
        }
        i224 = HEAP16[i80 >> 1] | 0;
        HEAP16[i3 >> 1] = i224;
        if ((i224 & 65535) >>> 0 > 15 >>> 0) {
         HEAP8[i95] = 0;
         break;
        } else {
         if (__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0) {
          break;
         } else {
          i88 = 2189;
          break L110;
         }
        }
       } else {
        i605 = HEAP32[i66 >> 2] | 0;
        if (i69 << 16 >> 16 == 0) {
         i88 = 2192;
         break L3833;
        }
        __ZN7WebCore9HTMLToken21appendToAttributeNameEt(i605, i69);
        HEAP32[i79 >> 2] = 34;
        i224 = HEAPU8[i92] | 0;
        do {
         if ((i224 & 2 | 0) == 0) {
          i71 = i94 + (HEAP32[i93 + 4 >> 2] | 0) | 0;
          i76 = HEAP32[i93 >> 2] | 0;
          if ((i76 & 1 | 0) == 0) {
           i606 = i76;
          } else {
           i606 = HEAP32[(HEAP32[i71 >> 2] | 0) + (i76 - 1) >> 2] | 0;
          }
          FUNCTION_TABLE_vi[i606 & 15](i71);
         } else {
          i71 = (HEAP16[i80 >> 1] | 0) == 10 & i224;
          i76 = HEAP32[i96 >> 2] | 0;
          i225 = i76 - 1 | 0;
          HEAP32[i96 >> 2] = i225;
          i73 = (i225 | 0) == 1;
          i225 = (HEAP32[i97 >> 2] | 0) + 1 | 0;
          HEAP32[i97 >> 2] = i225;
          HEAP16[i80 >> 1] = HEAPU8[i225] | 0;
          if ((i73 & 1 | i71 | 0) == 0) {
           break;
          }
          if ((i71 | 0) != 0) {
           HEAP32[i98 >> 2] = (HEAP32[i98 >> 2] | 0) + 1;
           i71 = HEAP32[i100 >> 2] | 0;
           if ((i71 | 0) == 0) {
            i607 = 0;
           } else {
            i607 = HEAP32[i71 + 4 >> 2] | 0;
           }
           HEAP32[i101 >> 2] = (HEAP32[i99 >> 2] | 0) + (1 - i76) + i607;
          }
          if (!i73) {
           break;
          }
          __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
         }
        } while (0);
        if ((HEAP8[i82] & 1) != 0) {
         i88 = 2213;
         break L110;
        }
        i224 = HEAP16[i80 >> 1] | 0;
        HEAP16[i3 >> 1] = i224;
        if ((i224 & 65535) >>> 0 > 15 >>> 0) {
         HEAP8[i95] = 0;
         break;
        } else {
         if (__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0) {
          break;
         } else {
          i88 = 2213;
          break L110;
         }
        }
       }
      } while (0);
      i69 = HEAP16[i3 >> 1] | 0;
     }
     if ((i88 | 0) == 2093) {
      i88 = 0;
      i69 = HEAP32[i66 >> 2] | 0;
      if ((HEAP16[i2 >> 1] | 0) == 0) {
       i608 = 0;
      } else {
       i608 = (HEAP16[i2 + 2 >> 1] | 0) == 0 ? 1 : 2;
      }
      i324 = HEAP32[i100 >> 2] | 0;
      if ((i324 | 0) == 0) {
       i609 = 0;
      } else {
       i609 = HEAP32[i324 + 4 >> 2] | 0;
      }
      i324 = (HEAP32[i99 >> 2] | 0) - i608 + i609 - (HEAP32[i96 >> 2] | 0) - (HEAP32[i69 + 12 >> 2] | 0) | 0;
      i325 = i69 + 2236 | 0;
      HEAP32[(HEAP32[i325 >> 2] | 0) + 4 >> 2] = i324;
      HEAP32[(HEAP32[i325 >> 2] | 0) + 8 >> 2] = i324;
      HEAP32[(HEAP32[i325 >> 2] | 0) + 12 >> 2] = i324;
      HEAP32[i79 >> 2] = 35;
      i324 = HEAPU8[i92] | 0;
      do {
       if ((i324 & 2 | 0) == 0) {
        i325 = i94 + (HEAP32[i93 + 4 >> 2] | 0) | 0;
        i69 = HEAP32[i93 >> 2] | 0;
        if ((i69 & 1 | 0) == 0) {
         i610 = i69;
        } else {
         i610 = HEAP32[(HEAP32[i325 >> 2] | 0) + (i69 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i610 & 15](i325);
       } else {
        i325 = (HEAP16[i80 >> 1] | 0) == 10 & i324;
        i69 = HEAP32[i96 >> 2] | 0;
        i224 = i69 - 1 | 0;
        HEAP32[i96 >> 2] = i224;
        i73 = (i224 | 0) == 1;
        i224 = (HEAP32[i97 >> 2] | 0) + 1 | 0;
        HEAP32[i97 >> 2] = i224;
        HEAP16[i80 >> 1] = HEAPU8[i224] | 0;
        if ((i73 & 1 | i325 | 0) == 0) {
         break;
        }
        if ((i325 | 0) != 0) {
         HEAP32[i98 >> 2] = (HEAP32[i98 >> 2] | 0) + 1;
         i325 = HEAP32[i100 >> 2] | 0;
         if ((i325 | 0) == 0) {
          i611 = 0;
         } else {
          i611 = HEAP32[i325 + 4 >> 2] | 0;
         }
         HEAP32[i101 >> 2] = (HEAP32[i99 >> 2] | 0) + (1 - i69) + i611;
        }
        if (!i73) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 2114;
       break;
      }
      i324 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i324;
      if ((i324 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i95] = 0;
       i102 = i324;
       i103 = i90;
       i104 = i92;
       i105 = i93;
       i106 = i94;
       i107 = i95;
       i108 = i96;
       i109 = i97;
       i110 = i98;
       i111 = i99;
       i112 = i100;
       i113 = i101;
       i88 = 93;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 2114;
       break;
      }
      i102 = HEAP16[i3 >> 1] | 0;
      i103 = i90;
      i104 = i92;
      i105 = i93;
      i106 = i94;
      i107 = i95;
      i108 = i96;
      i109 = i97;
      i110 = i98;
      i111 = i99;
      i112 = i100;
      i113 = i101;
      i88 = 93;
      continue;
     } else if ((i88 | 0) == 2115) {
      i88 = 0;
      i324 = HEAP32[i66 >> 2] | 0;
      if ((HEAP16[i2 >> 1] | 0) == 0) {
       i612 = 0;
      } else {
       i612 = (HEAP16[i2 + 2 >> 1] | 0) == 0 ? 1 : 2;
      }
      i73 = HEAP32[i100 >> 2] | 0;
      if ((i73 | 0) == 0) {
       i613 = 0;
      } else {
       i613 = HEAP32[i73 + 4 >> 2] | 0;
      }
      i73 = (HEAP32[i99 >> 2] | 0) - i612 + i613 - (HEAP32[i96 >> 2] | 0) - (HEAP32[i324 + 12 >> 2] | 0) | 0;
      i69 = i324 + 2236 | 0;
      HEAP32[(HEAP32[i69 >> 2] | 0) + 4 >> 2] = i73;
      HEAP32[(HEAP32[i69 >> 2] | 0) + 8 >> 2] = i73;
      HEAP32[(HEAP32[i69 >> 2] | 0) + 12 >> 2] = i73;
      HEAP32[i79 >> 2] = 42;
      i73 = HEAPU8[i92] | 0;
      do {
       if ((i73 & 2 | 0) == 0) {
        i69 = i94 + (HEAP32[i93 + 4 >> 2] | 0) | 0;
        i324 = HEAP32[i93 >> 2] | 0;
        if ((i324 & 1 | 0) == 0) {
         i614 = i324;
        } else {
         i614 = HEAP32[(HEAP32[i69 >> 2] | 0) + (i324 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i614 & 15](i69);
       } else {
        i69 = (HEAP16[i80 >> 1] | 0) == 10 & i73;
        i324 = HEAP32[i96 >> 2] | 0;
        i325 = i324 - 1 | 0;
        HEAP32[i96 >> 2] = i325;
        i224 = (i325 | 0) == 1;
        i325 = (HEAP32[i97 >> 2] | 0) + 1 | 0;
        HEAP32[i97 >> 2] = i325;
        HEAP16[i80 >> 1] = HEAPU8[i325] | 0;
        if ((i224 & 1 | i69 | 0) == 0) {
         break;
        }
        if ((i69 | 0) != 0) {
         HEAP32[i98 >> 2] = (HEAP32[i98 >> 2] | 0) + 1;
         i69 = HEAP32[i100 >> 2] | 0;
         if ((i69 | 0) == 0) {
          i615 = 0;
         } else {
          i615 = HEAP32[i69 + 4 >> 2] | 0;
         }
         HEAP32[i101 >> 2] = (HEAP32[i99 >> 2] | 0) + (1 - i324) + i615;
        }
        if (!i224) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 2136;
       break;
      }
      i73 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i73;
      if ((i73 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i95] = 0;
       i264 = i73;
       i265 = i90;
       i88 = 2709;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 2136;
       break;
      }
      i264 = HEAP16[i3 >> 1] | 0;
      i265 = i90;
      i88 = 2709;
      continue;
     } else if ((i88 | 0) == 2137) {
      i88 = 0;
      i73 = HEAP32[i66 >> 2] | 0;
      if ((HEAP16[i2 >> 1] | 0) == 0) {
       i616 = 0;
      } else {
       i616 = (HEAP16[i2 + 2 >> 1] | 0) == 0 ? 1 : 2;
      }
      i224 = HEAP32[i100 >> 2] | 0;
      if ((i224 | 0) == 0) {
       i617 = 0;
      } else {
       i617 = HEAP32[i224 + 4 >> 2] | 0;
      }
      i224 = (HEAP32[i99 >> 2] | 0) - i616 + i617 - (HEAP32[i96 >> 2] | 0) - (HEAP32[i73 + 12 >> 2] | 0) | 0;
      i324 = i73 + 2236 | 0;
      HEAP32[(HEAP32[i324 >> 2] | 0) + 4 >> 2] = i224;
      HEAP32[(HEAP32[i324 >> 2] | 0) + 8 >> 2] = i224;
      HEAP32[(HEAP32[i324 >> 2] | 0) + 12 >> 2] = i224;
      HEAP32[i79 >> 2] = 36;
      i224 = HEAPU8[i92] | 0;
      do {
       if ((i224 & 2 | 0) == 0) {
        i324 = i94 + (HEAP32[i93 + 4 >> 2] | 0) | 0;
        i73 = HEAP32[i93 >> 2] | 0;
        if ((i73 & 1 | 0) == 0) {
         i618 = i73;
        } else {
         i618 = HEAP32[(HEAP32[i324 >> 2] | 0) + (i73 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i618 & 15](i324);
       } else {
        i324 = (HEAP16[i80 >> 1] | 0) == 10 & i224;
        i73 = HEAP32[i96 >> 2] | 0;
        i69 = i73 - 1 | 0;
        HEAP32[i96 >> 2] = i69;
        i325 = (i69 | 0) == 1;
        i69 = (HEAP32[i97 >> 2] | 0) + 1 | 0;
        HEAP32[i97 >> 2] = i69;
        HEAP16[i80 >> 1] = HEAPU8[i69] | 0;
        if ((i325 & 1 | i324 | 0) == 0) {
         break;
        }
        if ((i324 | 0) != 0) {
         HEAP32[i98 >> 2] = (HEAP32[i98 >> 2] | 0) + 1;
         i324 = HEAP32[i100 >> 2] | 0;
         if ((i324 | 0) == 0) {
          i619 = 0;
         } else {
          i619 = HEAP32[i324 + 4 >> 2] | 0;
         }
         HEAP32[i101 >> 2] = (HEAP32[i99 >> 2] | 0) + (1 - i73) + i619;
        }
        if (!i325) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 2158;
       break;
      }
      i224 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i224;
      if ((i224 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i95] = 0;
       i114 = i224;
       i115 = i90;
       i116 = i92;
       i117 = i93;
       i118 = i94;
       i119 = i95;
       i120 = i96;
       i121 = i97;
       i122 = i98;
       i123 = i99;
       i124 = i100;
       i125 = i101;
       i88 = 94;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 2158;
       break;
      }
      i114 = HEAP16[i3 >> 1] | 0;
      i115 = i90;
      i116 = i92;
      i117 = i93;
      i118 = i94;
      i119 = i95;
      i120 = i96;
      i121 = i97;
      i122 = i98;
      i123 = i99;
      i124 = i100;
      i125 = i101;
      i88 = 94;
      continue;
     } else if ((i88 | 0) == 2192) {
      i88 = 0;
      if ((HEAP16[i2 >> 1] | 0) == 0) {
       i620 = 0;
      } else {
       i620 = (HEAP16[i2 + 2 >> 1] | 0) == 0 ? 1 : 2;
      }
      i224 = HEAP32[i100 >> 2] | 0;
      if ((i224 | 0) == 0) {
       i621 = 0;
      } else {
       i621 = HEAP32[i224 + 4 >> 2] | 0;
      }
      i224 = (HEAP32[i99 >> 2] | 0) - i620 + i621 - (HEAP32[i96 >> 2] | 0) - (HEAP32[i605 + 12 >> 2] | 0) | 0;
      i325 = i605 + 2236 | 0;
      HEAP32[(HEAP32[i325 >> 2] | 0) + 4 >> 2] = i224;
      HEAP32[(HEAP32[i325 >> 2] | 0) + 8 >> 2] = i224;
      HEAP32[(HEAP32[i325 >> 2] | 0) + 12 >> 2] = i224;
      HEAP32[i79 >> 2] = 0;
      i232 = 0;
      i233 = i90;
      i88 = 79;
      continue;
     }
    } else if ((i88 | 0) == 2626) {
     i88 = 0;
     HEAP8[i59] = 0;
     i224 = i60 | 0;
     HEAP32[i224 >> 2] = 0;
     i325 = i60 + 4 | 0;
     HEAP32[i325 >> 2] = 0;
     i73 = i60 + 8 | 0;
     HEAP32[i73 >> 2] = 0;
     i324 = i60 + 12 | 0;
     HEAP8[i324] = 1;
     HEAP32[i60 + 16 >> 2] = 0;
     HEAP32[i60 + 20 >> 2] = 0;
     i69 = __ZN7WebCore17consumeHTMLEntityERNS_15SegmentedStringERN3WTF13StringBuilderERbt(i2, i60, i59, HEAP16[i128 >> 1] | 0) | 0;
     L3975 : do {
      if ((HEAP8[i59] & 1) == 0) {
       do {
        if (i69) {
         if ((HEAP32[i224 >> 2] | 0) == 0) {
          break;
         } else {
          i622 = 0;
         }
         while (1) {
          i76 = HEAP32[i325 >> 2] | 0;
          i71 = (i76 | 0) == 0 ? HEAP32[i73 >> 2] | 0 : i76;
          if ((HEAP8[i324] & 1) == 0) {
           i623 = HEAP16[(HEAP32[i71 + 8 >> 2] | 0) + (i622 << 1) >> 1] | 0;
          } else {
           i623 = HEAPU8[(HEAP32[i71 + 8 >> 2] | 0) + i622 | 0] | 0;
          }
          __ZN7WebCore9HTMLToken22appendToAttributeValueEt(HEAP32[i66 >> 2] | 0, i623);
          i622 = i622 + 1 | 0;
          if (i622 >>> 0 >= (HEAP32[i224 >> 2] | 0) >>> 0) {
           break;
          }
         }
        } else {
         __ZN7WebCore9HTMLToken22appendToAttributeValueEt(HEAP32[i66 >> 2] | 0, 38);
        }
       } while (0);
       i71 = HEAP16[i128 >> 1] | 0;
       if ((i71 << 16 >> 16 | 0) == 34) {
        HEAP32[i79 >> 2] = 37;
        do {
         if ((HEAP8[i82] & 1) == 0) {
          i76 = HEAP16[i80 >> 1] | 0;
          HEAP16[i3 >> 1] = i76;
          if ((i76 & 65535) >>> 0 > 15 >>> 0) {
           HEAP8[i1 + 22 | 0] = 0;
           i624 = 309;
           i625 = i76;
           i626 = i127;
           break L3975;
          }
          if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
           break;
          }
          i624 = 309;
          i625 = HEAP16[i3 >> 1] | 0;
          i626 = i127;
          break L3975;
         }
        } while (0);
        i624 = 1;
        i625 = i126;
        i626 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
        break;
       } else if ((i71 << 16 >> 16 | 0) == 39) {
        HEAP32[i79 >> 2] = 38;
        do {
         if ((HEAP8[i82] & 1) == 0) {
          i76 = HEAP16[i80 >> 1] | 0;
          HEAP16[i3 >> 1] = i76;
          if ((i76 & 65535) >>> 0 > 15 >>> 0) {
           HEAP8[i1 + 22 | 0] = 0;
           i624 = 315;
           i625 = i76;
           i626 = i127;
           break L3975;
          }
          if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
           break;
          }
          i624 = 315;
          i625 = HEAP16[i3 >> 1] | 0;
          i626 = i127;
          break L3975;
         }
        } while (0);
        i624 = 1;
        i625 = i126;
        i626 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
        break;
       } else if ((i71 << 16 >> 16 | 0) == 62) {
        HEAP32[i79 >> 2] = 39;
        do {
         if ((HEAP8[i82] & 1) == 0) {
          i76 = HEAP16[i80 >> 1] | 0;
          HEAP16[i3 >> 1] = i76;
          if ((i76 & 65535) >>> 0 > 15 >>> 0) {
           HEAP8[i1 + 22 | 0] = 0;
           i624 = 312;
           i625 = i76;
           i626 = i127;
           break L3975;
          }
          if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
           break;
          }
          i624 = 312;
          i625 = HEAP16[i3 >> 1] | 0;
          i626 = i127;
          break L3975;
         }
        } while (0);
        i624 = 1;
        i625 = i126;
        i626 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
        break;
       } else {
        i624 = 0;
        i625 = i126;
        i626 = i127;
        break;
       }
      } else {
       i624 = 1;
       i625 = i126;
       i626 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
      }
     } while (0);
     i224 = HEAP32[i73 >> 2] | 0;
     do {
      if ((i224 | 0) != 0) {
       i324 = i224 | 0;
       i69 = (HEAP32[i324 >> 2] | 0) - 2 | 0;
       if ((i69 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i224);
        break;
       } else {
        HEAP32[i324 >> 2] = i69;
        break;
       }
      }
     } while (0);
     i224 = HEAP32[i325 >> 2] | 0;
     do {
      if ((i224 | 0) != 0) {
       i73 = i224 | 0;
       i69 = (HEAP32[i73 >> 2] | 0) - 2 | 0;
       if ((i69 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i224);
        break;
       } else {
        HEAP32[i73 >> 2] = i69;
        break;
       }
      }
     } while (0);
     if ((i624 | 0) == 315) {
      i238 = i625;
      i239 = i626;
      i88 = 95;
      continue;
     } else if ((i624 | 0) == 309) {
      i240 = i625;
      i241 = i626;
      i88 = 96;
      continue;
     } else if ((i624 | 0) == 312) {
      i260 = i625;
      i261 = i626;
      i88 = 2663;
      continue;
     } else if ((i624 | 0) == 1) {
      i83 = i626;
      i88 = 4302;
      break;
     } else {
      i88 = 4155;
      continue;
     }
    } else if ((i88 | 0) == 2663) {
     i88 = 0;
     i224 = i2 + 58 | 0;
     i325 = i2 + 68 | 0;
     i69 = i2;
     i73 = i1 + 22 | 0;
     i627 = i2 + 8 | 0;
     i324 = i2 + 4 | 0;
     i71 = i2 + 32 | 0;
     i628 = i2 + 24 | 0;
     i629 = i2 + 16 | 0;
     i76 = i2 + 28 | 0;
     i225 = i260;
     L4027 : while (1) {
      switch (i225 << 16 >> 16) {
      case 32:
      case 10:
      case 9:
      case 12:
       {
        i88 = 2558;
        break L4027;
        break;
       }
      case 38:
       {
        i88 = 2580;
        break L4027;
        break;
       }
      case 62:
       {
        i88 = 2598;
        break L110;
        break;
       }
      case 0:
       {
        i88 = 2603;
        break L4027;
        break;
       }
      default:
       {}
      }
      __ZN7WebCore9HTMLToken22appendToAttributeValueEt(HEAP32[i66 >> 2] | 0, i225);
      HEAP32[i79 >> 2] = 39;
      i218 = HEAPU8[i224] | 0;
      do {
       if ((i218 & 2 | 0) == 0) {
        i221 = i69 + (HEAP32[i325 + 4 >> 2] | 0) | 0;
        i75 = HEAP32[i325 >> 2] | 0;
        if ((i75 & 1 | 0) == 0) {
         i630 = i75;
        } else {
         i630 = HEAP32[(HEAP32[i221 >> 2] | 0) + (i75 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i630 & 15](i221);
       } else {
        i221 = (HEAP16[i80 >> 1] | 0) == 10 & i218;
        i75 = HEAP32[i627 >> 2] | 0;
        i409 = i75 - 1 | 0;
        HEAP32[i627 >> 2] = i409;
        i77 = (i409 | 0) == 1;
        i409 = (HEAP32[i324 >> 2] | 0) + 1 | 0;
        HEAP32[i324 >> 2] = i409;
        HEAP16[i80 >> 1] = HEAPU8[i409] | 0;
        if ((i77 & 1 | i221 | 0) == 0) {
         break;
        }
        if ((i221 | 0) != 0) {
         HEAP32[i71 >> 2] = (HEAP32[i71 >> 2] | 0) + 1;
         i221 = HEAP32[i629 >> 2] | 0;
         if ((i221 | 0) == 0) {
          i631 = 0;
         } else {
          i631 = HEAP32[i221 + 4 >> 2] | 0;
         }
         HEAP32[i76 >> 2] = (HEAP32[i628 >> 2] | 0) + (1 - i75) + i631;
        }
        if (!i77) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 2625;
       break L110;
      }
      i218 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i218;
      if ((i218 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i73] = 0;
       i225 = i218;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 2625;
       break L110;
      }
      i225 = HEAP16[i3 >> 1] | 0;
     }
     if ((i88 | 0) == 2558) {
      i88 = 0;
      i225 = HEAP32[i66 >> 2] | 0;
      if ((HEAP16[i2 >> 1] | 0) == 0) {
       i632 = 0;
      } else {
       i632 = (HEAP16[i2 + 2 >> 1] | 0) == 0 ? 1 : 2;
      }
      i218 = HEAP32[i629 >> 2] | 0;
      if ((i218 | 0) == 0) {
       i633 = 0;
      } else {
       i633 = HEAP32[i218 + 4 >> 2] | 0;
      }
      HEAP32[(HEAP32[i225 + 2236 >> 2] | 0) + 12 >> 2] = (HEAP32[i628 >> 2] | 0) - i632 + i633 - (HEAP32[i627 >> 2] | 0) - (HEAP32[i225 + 12 >> 2] | 0);
      HEAP32[i79 >> 2] = 33;
      i225 = HEAPU8[i224] | 0;
      do {
       if ((i225 & 2 | 0) == 0) {
        i218 = i69 + (HEAP32[i325 + 4 >> 2] | 0) | 0;
        i77 = HEAP32[i325 >> 2] | 0;
        if ((i77 & 1 | 0) == 0) {
         i634 = i77;
        } else {
         i634 = HEAP32[(HEAP32[i218 >> 2] | 0) + (i77 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i634 & 15](i218);
       } else {
        i218 = (HEAP16[i80 >> 1] | 0) == 10 & i225;
        i77 = HEAP32[i627 >> 2] | 0;
        i75 = i77 - 1 | 0;
        HEAP32[i627 >> 2] = i75;
        i221 = (i75 | 0) == 1;
        i75 = (HEAP32[i324 >> 2] | 0) + 1 | 0;
        HEAP32[i324 >> 2] = i75;
        HEAP16[i80 >> 1] = HEAPU8[i75] | 0;
        if ((i221 & 1 | i218 | 0) == 0) {
         break;
        }
        if ((i218 | 0) != 0) {
         HEAP32[i71 >> 2] = (HEAP32[i71 >> 2] | 0) + 1;
         i218 = HEAP32[i629 >> 2] | 0;
         if ((i218 | 0) == 0) {
          i635 = 0;
         } else {
          i635 = HEAP32[i218 + 4 >> 2] | 0;
         }
         HEAP32[i76 >> 2] = (HEAP32[i628 >> 2] | 0) + (1 - i77) + i635;
        }
        if (!i221) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 2579;
       break;
      }
      i225 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i225;
      if ((i225 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i73] = 0;
       i236 = i225;
       i237 = i261;
       i88 = 92;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 2579;
       break;
      }
      i236 = HEAP16[i3 >> 1] | 0;
      i237 = i261;
      i88 = 92;
      continue;
     } else if ((i88 | 0) == 2580) {
      i88 = 0;
      i225 = i1 + 12 | 0;
      HEAP16[i225 >> 1] = 62;
      HEAP32[i79 >> 2] = 40;
      i221 = HEAPU8[i224] | 0;
      do {
       if ((i221 & 2 | 0) == 0) {
        i77 = i69 + (HEAP32[i325 + 4 >> 2] | 0) | 0;
        i218 = HEAP32[i325 >> 2] | 0;
        if ((i218 & 1 | 0) == 0) {
         i636 = i218;
        } else {
         i636 = HEAP32[(HEAP32[i77 >> 2] | 0) + (i218 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i636 & 15](i77);
       } else {
        i77 = (HEAP16[i80 >> 1] | 0) == 10 & i221;
        i218 = HEAP32[i627 >> 2] | 0;
        i75 = i218 - 1 | 0;
        HEAP32[i627 >> 2] = i75;
        i409 = (i75 | 0) == 1;
        i75 = (HEAP32[i324 >> 2] | 0) + 1 | 0;
        HEAP32[i324 >> 2] = i75;
        HEAP16[i80 >> 1] = HEAPU8[i75] | 0;
        if ((i409 & 1 | i77 | 0) == 0) {
         break;
        }
        if ((i77 | 0) != 0) {
         HEAP32[i71 >> 2] = (HEAP32[i71 >> 2] | 0) + 1;
         i77 = HEAP32[i629 >> 2] | 0;
         if ((i77 | 0) == 0) {
          i637 = 0;
         } else {
          i637 = HEAP32[i77 + 4 >> 2] | 0;
         }
         HEAP32[i76 >> 2] = (HEAP32[i628 >> 2] | 0) + (1 - i218) + i637;
        }
        if (!i409) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 2597;
       break;
      }
      i76 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i76;
      if ((i76 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i73] = 0;
       i126 = i76;
       i127 = i261;
       i128 = i225;
       i88 = 2626;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 2597;
       break;
      }
      i126 = HEAP16[i3 >> 1] | 0;
      i127 = i261;
      i128 = i225;
      i88 = 2626;
      continue;
     } else if ((i88 | 0) == 2603) {
      i88 = 0;
      i76 = HEAP32[i66 >> 2] | 0;
      if ((HEAP16[i2 >> 1] | 0) == 0) {
       i638 = 0;
      } else {
       i638 = (HEAP16[i2 + 2 >> 1] | 0) == 0 ? 1 : 2;
      }
      i71 = HEAP32[i629 >> 2] | 0;
      if ((i71 | 0) == 0) {
       i639 = 0;
      } else {
       i639 = HEAP32[i71 + 4 >> 2] | 0;
      }
      HEAP32[(HEAP32[i76 + 2236 >> 2] | 0) + 12 >> 2] = (HEAP32[i628 >> 2] | 0) - i638 + i639 - (HEAP32[i627 >> 2] | 0) - (HEAP32[i76 + 12 >> 2] | 0);
      HEAP32[i79 >> 2] = 0;
      i232 = 0;
      i233 = i261;
      i88 = 79;
      continue;
     }
    } else if ((i88 | 0) == 2664) {
     i88 = 0;
     switch (i262 << 16 >> 16) {
     case 32:
     case 10:
     case 9:
     case 12:
      {
       HEAP32[i79 >> 2] = 33;
       i76 = HEAPU8[i2 + 58 | 0] | 0;
       do {
        if ((i76 & 2 | 0) == 0) {
         i71 = i2 + 68 | 0;
         i324 = i2 + (HEAP32[i71 + 4 >> 2] | 0) | 0;
         i221 = HEAP32[i71 >> 2] | 0;
         if ((i221 & 1 | 0) == 0) {
          i640 = i221;
         } else {
          i640 = HEAP32[(HEAP32[i324 >> 2] | 0) + (i221 - 1) >> 2] | 0;
         }
         FUNCTION_TABLE_vi[i640 & 15](i324);
        } else {
         i324 = (HEAP16[i80 >> 1] | 0) == 10 & i76;
         i221 = i2 + 8 | 0;
         i71 = HEAP32[i221 >> 2] | 0;
         i325 = i71 - 1 | 0;
         HEAP32[i221 >> 2] = i325;
         i221 = (i325 | 0) == 1;
         i325 = i2 + 4 | 0;
         i69 = (HEAP32[i325 >> 2] | 0) + 1 | 0;
         HEAP32[i325 >> 2] = i69;
         HEAP16[i80 >> 1] = HEAPU8[i69] | 0;
         if ((i221 & 1 | i324 | 0) == 0) {
          break;
         }
         if ((i324 | 0) != 0) {
          i324 = i2 + 32 | 0;
          HEAP32[i324 >> 2] = (HEAP32[i324 >> 2] | 0) + 1;
          i324 = HEAP32[i2 + 16 >> 2] | 0;
          if ((i324 | 0) == 0) {
           i641 = 0;
          } else {
           i641 = HEAP32[i324 + 4 >> 2] | 0;
          }
          HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i71) + i641;
         }
         if (!i221) {
          break;
         }
         __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
        }
       } while (0);
       if ((HEAP8[i82] & 1) != 0) {
        i88 = 2682;
        break L110;
       }
       i76 = HEAP16[i80 >> 1] | 0;
       HEAP16[i3 >> 1] = i76;
       if ((i76 & 65535) >>> 0 > 15 >>> 0) {
        HEAP8[i1 + 22 | 0] = 0;
        i236 = i76;
        i237 = i263;
        i88 = 92;
        continue L110;
       }
       if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
        i88 = 2682;
        break L110;
       }
       i236 = HEAP16[i3 >> 1] | 0;
       i237 = i263;
       i88 = 92;
       continue L110;
       break;
      }
     case 47:
      {
       HEAP32[i79 >> 2] = 42;
       i76 = HEAPU8[i2 + 58 | 0] | 0;
       do {
        if ((i76 & 2 | 0) == 0) {
         i225 = i2 + 68 | 0;
         i73 = i2 + (HEAP32[i225 + 4 >> 2] | 0) | 0;
         i221 = HEAP32[i225 >> 2] | 0;
         if ((i221 & 1 | 0) == 0) {
          i642 = i221;
         } else {
          i642 = HEAP32[(HEAP32[i73 >> 2] | 0) + (i221 - 1) >> 2] | 0;
         }
         FUNCTION_TABLE_vi[i642 & 15](i73);
        } else {
         i73 = (HEAP16[i80 >> 1] | 0) == 10 & i76;
         i221 = i2 + 8 | 0;
         i225 = HEAP32[i221 >> 2] | 0;
         i71 = i225 - 1 | 0;
         HEAP32[i221 >> 2] = i71;
         i221 = (i71 | 0) == 1;
         i71 = i2 + 4 | 0;
         i324 = (HEAP32[i71 >> 2] | 0) + 1 | 0;
         HEAP32[i71 >> 2] = i324;
         HEAP16[i80 >> 1] = HEAPU8[i324] | 0;
         if ((i221 & 1 | i73 | 0) == 0) {
          break;
         }
         if ((i73 | 0) != 0) {
          i73 = i2 + 32 | 0;
          HEAP32[i73 >> 2] = (HEAP32[i73 >> 2] | 0) + 1;
          i73 = HEAP32[i2 + 16 >> 2] | 0;
          if ((i73 | 0) == 0) {
           i643 = 0;
          } else {
           i643 = HEAP32[i73 + 4 >> 2] | 0;
          }
          HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i225) + i643;
         }
         if (!i221) {
          break;
         }
         __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
        }
       } while (0);
       if ((HEAP8[i82] & 1) != 0) {
        i88 = 2700;
        break L110;
       }
       i76 = HEAP16[i80 >> 1] | 0;
       HEAP16[i3 >> 1] = i76;
       if ((i76 & 65535) >>> 0 > 15 >>> 0) {
        HEAP8[i1 + 22 | 0] = 0;
        i264 = i76;
        i265 = i263;
        i88 = 2709;
        continue L110;
       }
       if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
        i88 = 2700;
        break L110;
       }
       i264 = HEAP16[i3 >> 1] | 0;
       i265 = i263;
       i88 = 2709;
       continue L110;
       break;
      }
     case 62:
      {
       i88 = 2701;
       break L110;
       break;
      }
     default:
      {
       if ((HEAP8[i1 + 190 | 0] & 1) != 0 & i262 << 16 >> 16 == 60) {
        i88 = 2703;
        break L110;
       }
       if (i262 << 16 >> 16 == 0) {
        HEAP32[i79 >> 2] = 0;
        i232 = 0;
        i233 = i263;
        i88 = 79;
        continue L110;
       } else {
        HEAP32[i79 >> 2] = 33;
        i236 = i262;
        i237 = i263;
        i88 = 92;
        continue L110;
       }
      }
     }
    } else if ((i88 | 0) == 2709) {
     i88 = 0;
     if ((i264 << 16 >> 16 | 0) == 62) {
      i88 = 2710;
      break;
     } else if ((i264 << 16 >> 16 | 0) == 0) {
      HEAP32[i79 >> 2] = 0;
      i232 = 0;
      i233 = i265;
      i88 = 79;
      continue;
     } else {
      HEAP32[i79 >> 2] = 33;
      i236 = i264;
      i237 = i265;
      i88 = 92;
      continue;
     }
    } else if ((i88 | 0) == 2713) {
     i88 = 0;
     HEAP32[HEAP32[i66 >> 2] >> 2] = 4;
     HEAP32[i79 >> 2] = 44;
     i267 = i266;
     i88 = 2714;
     continue;
    } else if ((i88 | 0) == 2714) {
     i88 = 0;
     i644 = i2 + 58 | 0;
     i645 = i2 + 68 | 0;
     i646 = i2;
     i647 = i1 + 22 | 0;
     i648 = i2 + 8 | 0;
     i649 = i2 + 4 | 0;
     i650 = i2 + 32 | 0;
     i651 = i2 + 24 | 0;
     i652 = i2 + 16 | 0;
     i653 = i2 + 28 | 0;
     i654 = i267;
     i88 = 2715;
     break;
    } else if ((i88 | 0) == 2738) {
     i88 = 0;
     if (!(HEAP8[H_BASE + 48 | 0] | 0)) {
      i76 = __Znwj(4) | 0;
      HEAP32[i61 >> 2] = H_BASE + 40;
      __ZN3WTF6StringC1ENS_12ASCIILiteralE(i76, i61);
      HEAP32[H_BASE + 88 >> 2] = i76;
      HEAP8[H_BASE + 48 | 0] = 1;
     }
     if (!(HEAP8[H_BASE + 56 | 0] | 0)) {
      i76 = __Znwj(4) | 0;
      HEAP32[i62 >> 2] = H_BASE + 32;
      __ZN3WTF6StringC1ENS_12ASCIILiteralE(i76, i62);
      HEAP32[H_BASE + 96 >> 2] = i76;
      HEAP8[H_BASE + 56 | 0] = 1;
     }
     if (!(HEAP8[H_BASE + 80 | 0] | 0)) {
      i76 = __Znwj(4) | 0;
      HEAP32[i63 >> 2] = H_BASE + 24;
      __ZN3WTF6StringC1ENS_12ASCIILiteralE(i76, i63);
      HEAP32[H_BASE + 120 >> 2] = i76;
      HEAP8[H_BASE + 80 | 0] = 1;
     }
     do {
      if ((i268 << 16 >> 16 | 0) == 45) {
       i76 = __ZN7WebCore15SegmentedString15lookAheadInlineERKN3WTF6StringEb(i2, HEAP32[H_BASE + 88 >> 2] | 0, 1) | 0;
       if ((i76 | 0) == 2) {
        i88 = 2766;
        break L110;
       } else if ((i76 | 0) != 1) {
        break;
       }
       i76 = i2 + 58 | 0;
       do {
        if ((HEAP8[i76] & 2) == 0) {
         i221 = i2 + 60 | 0;
         i225 = i2 + (HEAP32[i221 + 4 >> 2] | 0) | 0;
         i73 = HEAP32[i221 >> 2] | 0;
         if ((i73 & 1 | 0) == 0) {
          i655 = i73;
         } else {
          i655 = HEAP32[(HEAP32[i225 >> 2] | 0) + (i73 - 1) >> 2] | 0;
         }
         FUNCTION_TABLE_vi[i655 & 15](i225);
        } else {
         i225 = i2 + 8 | 0;
         i73 = (HEAP32[i225 >> 2] | 0) - 1 | 0;
         HEAP32[i225 >> 2] = i73;
         i225 = i2 + 4 | 0;
         i221 = (HEAP32[i225 >> 2] | 0) + 1 | 0;
         HEAP32[i225 >> 2] = i221;
         HEAP16[i80 >> 1] = HEAPU8[i221] | 0;
         if ((i73 | 0) != 1) {
          break;
         }
         __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
        }
       } while (0);
       do {
        if ((HEAP8[i76] & 2) == 0) {
         i73 = i2 + 60 | 0;
         i221 = i2 + (HEAP32[i73 + 4 >> 2] | 0) | 0;
         i225 = HEAP32[i73 >> 2] | 0;
         if ((i225 & 1 | 0) == 0) {
          i656 = i225;
         } else {
          i656 = HEAP32[(HEAP32[i221 >> 2] | 0) + (i225 - 1) >> 2] | 0;
         }
         FUNCTION_TABLE_vi[i656 & 15](i221);
        } else {
         i221 = i2 + 8 | 0;
         i225 = (HEAP32[i221 >> 2] | 0) - 1 | 0;
         HEAP32[i221 >> 2] = i225;
         i221 = i2 + 4 | 0;
         i73 = (HEAP32[i221 >> 2] | 0) + 1 | 0;
         HEAP32[i221 >> 2] = i73;
         HEAP16[i80 >> 1] = HEAPU8[i73] | 0;
         if ((i225 | 0) != 1) {
          break;
         }
         __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
        }
       } while (0);
       HEAP32[HEAP32[i66 >> 2] >> 2] = 4;
       HEAP32[i79 >> 2] = 46;
       if ((HEAP8[i82] & 1) != 0) {
        i88 = 2765;
        break L110;
       }
       i76 = HEAP16[i80 >> 1] | 0;
       HEAP16[i3 >> 1] = i76;
       if ((i76 & 65535) >>> 0 > 15 >>> 0) {
        HEAP8[i1 + 22 | 0] = 0;
        i270 = i76;
        i88 = 2803;
        continue L110;
       }
       if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
        i88 = 2765;
        break L110;
       }
       i270 = HEAP16[i3 >> 1] | 0;
       i88 = 2803;
       continue L110;
      } else if ((i268 << 16 >> 16 | 0) == 68 | (i268 << 16 >> 16 | 0) == 100) {
       i76 = __ZN7WebCore15SegmentedString15lookAheadInlineERKN3WTF6StringEb(i2, HEAP32[H_BASE + 96 >> 2] | 0, 0) | 0;
       if ((i76 | 0) == 2) {
        i88 = 2783;
        break L110;
       } else if ((i76 | 0) != 1) {
        break;
       }
       i76 = i2 + 58 | 0;
       i225 = i2 + 60 | 0;
       i73 = i2;
       i221 = i2 + 8 | 0;
       i324 = i2 + 4 | 0;
       i71 = H_BASE + 32 | 0;
       while (1) {
        i71 = i71 + 1 | 0;
        do {
         if ((HEAP8[i76] & 2) == 0) {
          i69 = i73 + (HEAP32[i225 + 4 >> 2] | 0) | 0;
          i325 = HEAP32[i225 >> 2] | 0;
          if ((i325 & 1 | 0) == 0) {
           i657 = i325;
          } else {
           i657 = HEAP32[(HEAP32[i69 >> 2] | 0) + (i325 - 1) >> 2] | 0;
          }
          FUNCTION_TABLE_vi[i657 & 15](i69);
         } else {
          i69 = (HEAP32[i221 >> 2] | 0) - 1 | 0;
          HEAP32[i221 >> 2] = i69;
          i325 = (HEAP32[i324 >> 2] | 0) + 1 | 0;
          HEAP32[i324 >> 2] = i325;
          HEAP16[i80 >> 1] = HEAPU8[i325] | 0;
          if ((i69 | 0) != 1) {
           break;
          }
          __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
         }
        } while (0);
        if ((HEAP8[i71] | 0) == 0) {
         break;
        }
       }
       HEAP32[i79 >> 2] = 52;
       if ((HEAP8[i82] & 1) != 0) {
        i88 = 2782;
        break L110;
       }
       i71 = HEAP16[i80 >> 1] | 0;
       HEAP16[i3 >> 1] = i71;
       if ((i71 & 65535) >>> 0 > 15 >>> 0) {
        HEAP8[i1 + 22 | 0] = 0;
        i274 = i71;
        i88 = 3066;
        continue L110;
       }
       if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
        i88 = 2782;
        break L110;
       }
       i274 = HEAP16[i3 >> 1] | 0;
       i88 = 3066;
       continue L110;
      } else if ((i268 << 16 >> 16 | 0) == 91) {
       if ((HEAP8[i1 + 5 | 0] & 1) == 0) {
        break;
       }
       i71 = __ZN7WebCore15SegmentedString15lookAheadInlineERKN3WTF6StringEb(i2, HEAP32[H_BASE + 120 >> 2] | 0, 1) | 0;
       if ((i71 | 0) == 2) {
        i88 = 2801;
        break L110;
       } else if ((i71 | 0) != 1) {
        break;
       }
       i71 = i2 + 58 | 0;
       i324 = i2 + 60 | 0;
       i221 = i2;
       i225 = i2 + 8 | 0;
       i73 = i2 + 4 | 0;
       i76 = H_BASE + 24 | 0;
       while (1) {
        i76 = i76 + 1 | 0;
        do {
         if ((HEAP8[i71] & 2) == 0) {
          i69 = i221 + (HEAP32[i324 + 4 >> 2] | 0) | 0;
          i325 = HEAP32[i324 >> 2] | 0;
          if ((i325 & 1 | 0) == 0) {
           i658 = i325;
          } else {
           i658 = HEAP32[(HEAP32[i69 >> 2] | 0) + (i325 - 1) >> 2] | 0;
          }
          FUNCTION_TABLE_vi[i658 & 15](i69);
         } else {
          i69 = (HEAP32[i225 >> 2] | 0) - 1 | 0;
          HEAP32[i225 >> 2] = i69;
          i325 = (HEAP32[i73 >> 2] | 0) + 1 | 0;
          HEAP32[i73 >> 2] = i325;
          HEAP16[i80 >> 1] = HEAPU8[i325] | 0;
          if ((i69 | 0) != 1) {
           break;
          }
          __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
         }
        } while (0);
        if ((HEAP8[i76] | 0) == 0) {
         break;
        }
       }
       HEAP32[i79 >> 2] = 68;
       if ((HEAP8[i82] & 1) != 0) {
        i88 = 2800;
        break L110;
       }
       i76 = HEAP16[i80 >> 1] | 0;
       HEAP16[i3 >> 1] = i76;
       if ((i76 & 65535) >>> 0 > 15 >>> 0) {
        HEAP8[i1 + 22 | 0] = 0;
        i234 = i76;
        i235 = i269;
        i88 = 80;
        continue L110;
       }
       if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
        i88 = 2800;
        break L110;
       }
       i234 = HEAP16[i3 >> 1] | 0;
       i235 = i269;
       i88 = 80;
       continue L110;
      }
     } while (0);
     HEAP32[i79 >> 2] = 43;
     i266 = i268;
     i88 = 2713;
     continue;
    } else if ((i88 | 0) == 2803) {
     i88 = 0;
     if ((i270 << 16 >> 16 | 0) == 45) {
      HEAP32[i79 >> 2] = 47;
      i76 = HEAPU8[i2 + 58 | 0] | 0;
      do {
       if ((i76 & 2 | 0) == 0) {
        i73 = i2 + 68 | 0;
        i225 = i2 + (HEAP32[i73 + 4 >> 2] | 0) | 0;
        i324 = HEAP32[i73 >> 2] | 0;
        if ((i324 & 1 | 0) == 0) {
         i659 = i324;
        } else {
         i659 = HEAP32[(HEAP32[i225 >> 2] | 0) + (i324 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i659 & 15](i225);
       } else {
        i225 = (HEAP16[i80 >> 1] | 0) == 10 & i76;
        i324 = i2 + 8 | 0;
        i73 = HEAP32[i324 >> 2] | 0;
        i221 = i73 - 1 | 0;
        HEAP32[i324 >> 2] = i221;
        i324 = (i221 | 0) == 1;
        i221 = i2 + 4 | 0;
        i71 = (HEAP32[i221 >> 2] | 0) + 1 | 0;
        HEAP32[i221 >> 2] = i71;
        HEAP16[i80 >> 1] = HEAPU8[i71] | 0;
        if ((i324 & 1 | i225 | 0) == 0) {
         break;
        }
        if ((i225 | 0) != 0) {
         i225 = i2 + 32 | 0;
         HEAP32[i225 >> 2] = (HEAP32[i225 >> 2] | 0) + 1;
         i225 = HEAP32[i2 + 16 >> 2] | 0;
         if ((i225 | 0) == 0) {
          i660 = 0;
         } else {
          i660 = HEAP32[i225 + 4 >> 2] | 0;
         }
         HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i73) + i660;
        }
        if (!i324) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 2821;
       break;
      }
      i76 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i76;
      if ((i76 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i1 + 22 | 0] = 0;
       i271 = i76;
       i88 = 2844;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 2821;
       break;
      }
      i271 = HEAP16[i3 >> 1] | 0;
      i88 = 2844;
      continue;
     } else if ((i270 << 16 >> 16 | 0) == 62) {
      i88 = 2822;
      break;
     } else if ((i270 << 16 >> 16 | 0) == 0) {
      i88 = 2823;
      break;
     } else {
      __ZN7WebCore9HTMLToken15appendToCommentEt(HEAP32[i66 >> 2] | 0, i270);
      HEAP32[i79 >> 2] = 48;
      i76 = i2 + 58 | 0;
      i324 = HEAPU8[i76] | 0;
      do {
       if ((i324 & 2 | 0) == 0) {
        i73 = i2 + 68 | 0;
        i225 = i2 + (HEAP32[i73 + 4 >> 2] | 0) | 0;
        i71 = HEAP32[i73 >> 2] | 0;
        if ((i71 & 1 | 0) == 0) {
         i661 = i71;
        } else {
         i661 = HEAP32[(HEAP32[i225 >> 2] | 0) + (i71 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i661 & 15](i225);
       } else {
        i225 = (HEAP16[i80 >> 1] | 0) == 10 & i324;
        i71 = i2 + 8 | 0;
        i73 = HEAP32[i71 >> 2] | 0;
        i221 = i73 - 1 | 0;
        HEAP32[i71 >> 2] = i221;
        i71 = (i221 | 0) == 1;
        i221 = i2 + 4 | 0;
        i69 = (HEAP32[i221 >> 2] | 0) + 1 | 0;
        HEAP32[i221 >> 2] = i69;
        HEAP16[i80 >> 1] = HEAPU8[i69] | 0;
        if ((i71 & 1 | i225 | 0) == 0) {
         break;
        }
        if ((i225 | 0) != 0) {
         i225 = i2 + 32 | 0;
         HEAP32[i225 >> 2] = (HEAP32[i225 >> 2] | 0) + 1;
         i225 = HEAP32[i2 + 16 >> 2] | 0;
         if ((i225 | 0) == 0) {
          i662 = 0;
         } else {
          i662 = HEAP32[i225 + 4 >> 2] | 0;
         }
         HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i73) + i662;
        }
        if (!i71) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 2843;
       break;
      }
      i324 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i324;
      if ((i324 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i1 + 22 | 0] = 0;
       i129 = i324;
       i130 = i76;
       i88 = 2885;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 2843;
       break;
      }
      i129 = HEAP16[i3 >> 1] | 0;
      i130 = i76;
      i88 = 2885;
      continue;
     }
    } else if ((i88 | 0) == 2844) {
     i88 = 0;
     if ((i271 << 16 >> 16 | 0) == 45) {
      HEAP32[i79 >> 2] = 50;
      i324 = i2 + 58 | 0;
      i71 = HEAPU8[i324] | 0;
      do {
       if ((i71 & 2 | 0) == 0) {
        i73 = i2 + 68 | 0;
        i225 = i2 + (HEAP32[i73 + 4 >> 2] | 0) | 0;
        i69 = HEAP32[i73 >> 2] | 0;
        if ((i69 & 1 | 0) == 0) {
         i663 = i69;
        } else {
         i663 = HEAP32[(HEAP32[i225 >> 2] | 0) + (i69 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i663 & 15](i225);
       } else {
        i225 = (HEAP16[i80 >> 1] | 0) == 10 & i71;
        i69 = i2 + 8 | 0;
        i73 = HEAP32[i69 >> 2] | 0;
        i221 = i73 - 1 | 0;
        HEAP32[i69 >> 2] = i221;
        i69 = (i221 | 0) == 1;
        i221 = i2 + 4 | 0;
        i325 = (HEAP32[i221 >> 2] | 0) + 1 | 0;
        HEAP32[i221 >> 2] = i325;
        HEAP16[i80 >> 1] = HEAPU8[i325] | 0;
        if ((i69 & 1 | i225 | 0) == 0) {
         break;
        }
        if ((i225 | 0) != 0) {
         i225 = i2 + 32 | 0;
         HEAP32[i225 >> 2] = (HEAP32[i225 >> 2] | 0) + 1;
         i225 = HEAP32[i2 + 16 >> 2] | 0;
         if ((i225 | 0) == 0) {
          i664 = 0;
         } else {
          i664 = HEAP32[i225 + 4 >> 2] | 0;
         }
         HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i73) + i664;
        }
        if (!i69) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 2862;
       break;
      }
      i71 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i71;
      if ((i71 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i1 + 22 | 0] = 0;
       i131 = i71;
       i132 = i324;
       i88 = 90;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 2862;
       break;
      }
      i131 = HEAP16[i3 >> 1] | 0;
      i132 = i324;
      i88 = 90;
      continue;
     } else if ((i271 << 16 >> 16 | 0) == 62) {
      i88 = 2863;
      break;
     } else if ((i271 << 16 >> 16 | 0) == 0) {
      i88 = 2864;
      break;
     } else {
      __ZN7WebCore9HTMLToken15appendToCommentEt(HEAP32[i66 >> 2] | 0, 45);
      __ZN7WebCore9HTMLToken15appendToCommentEt(HEAP32[i66 >> 2] | 0, i271);
      HEAP32[i79 >> 2] = 48;
      i71 = i2 + 58 | 0;
      i76 = HEAPU8[i71] | 0;
      do {
       if ((i76 & 2 | 0) == 0) {
        i69 = i2 + 68 | 0;
        i73 = i2 + (HEAP32[i69 + 4 >> 2] | 0) | 0;
        i225 = HEAP32[i69 >> 2] | 0;
        if ((i225 & 1 | 0) == 0) {
         i665 = i225;
        } else {
         i665 = HEAP32[(HEAP32[i73 >> 2] | 0) + (i225 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i665 & 15](i73);
       } else {
        i73 = (HEAP16[i80 >> 1] | 0) == 10 & i76;
        i225 = i2 + 8 | 0;
        i69 = HEAP32[i225 >> 2] | 0;
        i325 = i69 - 1 | 0;
        HEAP32[i225 >> 2] = i325;
        i225 = (i325 | 0) == 1;
        i325 = i2 + 4 | 0;
        i221 = (HEAP32[i325 >> 2] | 0) + 1 | 0;
        HEAP32[i325 >> 2] = i221;
        HEAP16[i80 >> 1] = HEAPU8[i221] | 0;
        if ((i225 & 1 | i73 | 0) == 0) {
         break;
        }
        if ((i73 | 0) != 0) {
         i73 = i2 + 32 | 0;
         HEAP32[i73 >> 2] = (HEAP32[i73 >> 2] | 0) + 1;
         i73 = HEAP32[i2 + 16 >> 2] | 0;
         if ((i73 | 0) == 0) {
          i666 = 0;
         } else {
          i666 = HEAP32[i73 + 4 >> 2] | 0;
         }
         HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i69) + i666;
        }
        if (!i225) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 2884;
       break;
      }
      i76 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i76;
      if ((i76 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i1 + 22 | 0] = 0;
       i129 = i76;
       i130 = i71;
       i88 = 2885;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 2884;
       break;
      }
      i129 = HEAP16[i3 >> 1] | 0;
      i130 = i71;
      i88 = 2885;
      continue;
     }
    } else if ((i88 | 0) == 2885) {
     i88 = 0;
     i76 = i2 + 68 | 0;
     i324 = i2;
     i225 = i1 + 22 | 0;
     i69 = i2 + 8 | 0;
     i73 = i2 + 4 | 0;
     i221 = i2 + 32 | 0;
     i325 = i2 + 24 | 0;
     i224 = i2 + 16 | 0;
     i409 = i2 + 28 | 0;
     i218 = i129;
     while (1) {
      if ((i218 << 16 >> 16 | 0) == 45) {
       break;
      } else if ((i218 << 16 >> 16 | 0) == 0) {
       i88 = 2905;
       break L110;
      }
      __ZN7WebCore9HTMLToken15appendToCommentEt(HEAP32[i66 >> 2] | 0, i218);
      HEAP32[i79 >> 2] = 48;
      i77 = HEAPU8[i130] | 0;
      do {
       if ((i77 & 2 | 0) == 0) {
        i75 = i324 + (HEAP32[i76 + 4 >> 2] | 0) | 0;
        i219 = HEAP32[i76 >> 2] | 0;
        if ((i219 & 1 | 0) == 0) {
         i667 = i219;
        } else {
         i667 = HEAP32[(HEAP32[i75 >> 2] | 0) + (i219 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i667 & 15](i75);
       } else {
        i75 = (HEAP16[i80 >> 1] | 0) == 10 & i77;
        i219 = HEAP32[i69 >> 2] | 0;
        i72 = i219 - 1 | 0;
        HEAP32[i69 >> 2] = i72;
        i70 = (i72 | 0) == 1;
        i72 = (HEAP32[i73 >> 2] | 0) + 1 | 0;
        HEAP32[i73 >> 2] = i72;
        HEAP16[i80 >> 1] = HEAPU8[i72] | 0;
        if ((i70 & 1 | i75 | 0) == 0) {
         break;
        }
        if ((i75 | 0) != 0) {
         HEAP32[i221 >> 2] = (HEAP32[i221 >> 2] | 0) + 1;
         i75 = HEAP32[i224 >> 2] | 0;
         if ((i75 | 0) == 0) {
          i668 = 0;
         } else {
          i668 = HEAP32[i75 + 4 >> 2] | 0;
         }
         HEAP32[i409 >> 2] = (HEAP32[i325 >> 2] | 0) + (1 - i219) + i668;
        }
        if (!i70) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 2925;
       break L110;
      }
      i77 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i77;
      if ((i77 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i225] = 0;
       i218 = i77;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 2925;
       break L110;
      }
      i218 = HEAP16[i3 >> 1] | 0;
     }
     HEAP32[i79 >> 2] = 49;
     i218 = HEAPU8[i130] | 0;
     do {
      if ((i218 & 2 | 0) == 0) {
       i71 = i324 + (HEAP32[i76 + 4 >> 2] | 0) | 0;
       i77 = HEAP32[i76 >> 2] | 0;
       if ((i77 & 1 | 0) == 0) {
        i669 = i77;
       } else {
        i669 = HEAP32[(HEAP32[i71 >> 2] | 0) + (i77 - 1) >> 2] | 0;
       }
       FUNCTION_TABLE_vi[i669 & 15](i71);
      } else {
       i71 = (HEAP16[i80 >> 1] | 0) == 10 & i218;
       i77 = HEAP32[i69 >> 2] | 0;
       i70 = i77 - 1 | 0;
       HEAP32[i69 >> 2] = i70;
       i219 = (i70 | 0) == 1;
       i70 = (HEAP32[i73 >> 2] | 0) + 1 | 0;
       HEAP32[i73 >> 2] = i70;
       HEAP16[i80 >> 1] = HEAPU8[i70] | 0;
       if ((i219 & 1 | i71 | 0) == 0) {
        break;
       }
       if ((i71 | 0) != 0) {
        HEAP32[i221 >> 2] = (HEAP32[i221 >> 2] | 0) + 1;
        i71 = HEAP32[i224 >> 2] | 0;
        if ((i71 | 0) == 0) {
         i670 = 0;
        } else {
         i670 = HEAP32[i71 + 4 >> 2] | 0;
        }
        HEAP32[i409 >> 2] = (HEAP32[i325 >> 2] | 0) + (1 - i77) + i670;
       }
       if (!i219) {
        break;
       }
       __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
      }
     } while (0);
     if ((HEAP8[i82] & 1) != 0) {
      i88 = 2904;
      break;
     }
     i325 = HEAP16[i80 >> 1] | 0;
     HEAP16[i3 >> 1] = i325;
     if ((i325 & 65535) >>> 0 > 15 >>> 0) {
      HEAP8[i225] = 0;
      i272 = i325;
      i88 = 2926;
      continue;
     }
     if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
      i88 = 2904;
      break;
     }
     i272 = HEAP16[i3 >> 1] | 0;
     i88 = 2926;
     continue;
    } else if ((i88 | 0) == 2926) {
     i88 = 0;
     if ((i272 << 16 >> 16 | 0) == 45) {
      HEAP32[i79 >> 2] = 50;
      i325 = i2 + 58 | 0;
      i409 = HEAPU8[i325] | 0;
      do {
       if ((i409 & 2 | 0) == 0) {
        i224 = i2 + 68 | 0;
        i221 = i2 + (HEAP32[i224 + 4 >> 2] | 0) | 0;
        i73 = HEAP32[i224 >> 2] | 0;
        if ((i73 & 1 | 0) == 0) {
         i671 = i73;
        } else {
         i671 = HEAP32[(HEAP32[i221 >> 2] | 0) + (i73 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i671 & 15](i221);
       } else {
        i221 = (HEAP16[i80 >> 1] | 0) == 10 & i409;
        i73 = i2 + 8 | 0;
        i224 = HEAP32[i73 >> 2] | 0;
        i69 = i224 - 1 | 0;
        HEAP32[i73 >> 2] = i69;
        i73 = (i69 | 0) == 1;
        i69 = i2 + 4 | 0;
        i218 = (HEAP32[i69 >> 2] | 0) + 1 | 0;
        HEAP32[i69 >> 2] = i218;
        HEAP16[i80 >> 1] = HEAPU8[i218] | 0;
        if ((i73 & 1 | i221 | 0) == 0) {
         break;
        }
        if ((i221 | 0) != 0) {
         i221 = i2 + 32 | 0;
         HEAP32[i221 >> 2] = (HEAP32[i221 >> 2] | 0) + 1;
         i221 = HEAP32[i2 + 16 >> 2] | 0;
         if ((i221 | 0) == 0) {
          i672 = 0;
         } else {
          i672 = HEAP32[i221 + 4 >> 2] | 0;
         }
         HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i224) + i672;
        }
        if (!i73) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 2944;
       break;
      }
      i409 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i409;
      if ((i409 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i1 + 22 | 0] = 0;
       i131 = i409;
       i132 = i325;
       i88 = 90;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 2944;
       break;
      }
      i131 = HEAP16[i3 >> 1] | 0;
      i132 = i325;
      i88 = 90;
      continue;
     } else if ((i272 << 16 >> 16 | 0) == 0) {
      i88 = 2945;
      break;
     } else {
      __ZN7WebCore9HTMLToken15appendToCommentEt(HEAP32[i66 >> 2] | 0, 45);
      __ZN7WebCore9HTMLToken15appendToCommentEt(HEAP32[i66 >> 2] | 0, i272);
      HEAP32[i79 >> 2] = 48;
      i409 = i2 + 58 | 0;
      i225 = HEAPU8[i409] | 0;
      do {
       if ((i225 & 2 | 0) == 0) {
        i73 = i2 + 68 | 0;
        i224 = i2 + (HEAP32[i73 + 4 >> 2] | 0) | 0;
        i221 = HEAP32[i73 >> 2] | 0;
        if ((i221 & 1 | 0) == 0) {
         i673 = i221;
        } else {
         i673 = HEAP32[(HEAP32[i224 >> 2] | 0) + (i221 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i673 & 15](i224);
       } else {
        i224 = (HEAP16[i80 >> 1] | 0) == 10 & i225;
        i221 = i2 + 8 | 0;
        i73 = HEAP32[i221 >> 2] | 0;
        i218 = i73 - 1 | 0;
        HEAP32[i221 >> 2] = i218;
        i221 = (i218 | 0) == 1;
        i218 = i2 + 4 | 0;
        i69 = (HEAP32[i218 >> 2] | 0) + 1 | 0;
        HEAP32[i218 >> 2] = i69;
        HEAP16[i80 >> 1] = HEAPU8[i69] | 0;
        if ((i221 & 1 | i224 | 0) == 0) {
         break;
        }
        if ((i224 | 0) != 0) {
         i224 = i2 + 32 | 0;
         HEAP32[i224 >> 2] = (HEAP32[i224 >> 2] | 0) + 1;
         i224 = HEAP32[i2 + 16 >> 2] | 0;
         if ((i224 | 0) == 0) {
          i674 = 0;
         } else {
          i674 = HEAP32[i224 + 4 >> 2] | 0;
         }
         HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i73) + i674;
        }
        if (!i221) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 2965;
       break;
      }
      i225 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i225;
      if ((i225 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i1 + 22 | 0] = 0;
       i129 = i225;
       i130 = i409;
       i88 = 2885;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 2965;
       break;
      }
      i129 = HEAP16[i3 >> 1] | 0;
      i130 = i409;
      i88 = 2885;
      continue;
     }
    } else if ((i88 | 0) == 3025) {
     i88 = 0;
     if ((i273 << 16 >> 16 | 0) == 45) {
      __ZN7WebCore9HTMLToken15appendToCommentEt(HEAP32[i66 >> 2] | 0, 45);
      __ZN7WebCore9HTMLToken15appendToCommentEt(HEAP32[i66 >> 2] | 0, 45);
      __ZN7WebCore9HTMLToken15appendToCommentEt(HEAP32[i66 >> 2] | 0, 33);
      HEAP32[i79 >> 2] = 49;
      i225 = HEAPU8[i2 + 58 | 0] | 0;
      do {
       if ((i225 & 2 | 0) == 0) {
        i325 = i2 + 68 | 0;
        i221 = i2 + (HEAP32[i325 + 4 >> 2] | 0) | 0;
        i73 = HEAP32[i325 >> 2] | 0;
        if ((i73 & 1 | 0) == 0) {
         i675 = i73;
        } else {
         i675 = HEAP32[(HEAP32[i221 >> 2] | 0) + (i73 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i675 & 15](i221);
       } else {
        i221 = (HEAP16[i80 >> 1] | 0) == 10 & i225;
        i73 = i2 + 8 | 0;
        i325 = HEAP32[i73 >> 2] | 0;
        i224 = i325 - 1 | 0;
        HEAP32[i73 >> 2] = i224;
        i73 = (i224 | 0) == 1;
        i224 = i2 + 4 | 0;
        i69 = (HEAP32[i224 >> 2] | 0) + 1 | 0;
        HEAP32[i224 >> 2] = i69;
        HEAP16[i80 >> 1] = HEAPU8[i69] | 0;
        if ((i73 & 1 | i221 | 0) == 0) {
         break;
        }
        if ((i221 | 0) != 0) {
         i221 = i2 + 32 | 0;
         HEAP32[i221 >> 2] = (HEAP32[i221 >> 2] | 0) + 1;
         i221 = HEAP32[i2 + 16 >> 2] | 0;
         if ((i221 | 0) == 0) {
          i676 = 0;
         } else {
          i676 = HEAP32[i221 + 4 >> 2] | 0;
         }
         HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i325) + i676;
        }
        if (!i73) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 3043;
       break;
      }
      i225 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i225;
      if ((i225 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i1 + 22 | 0] = 0;
       i272 = i225;
       i88 = 2926;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 3043;
       break;
      }
      i272 = HEAP16[i3 >> 1] | 0;
      i88 = 2926;
      continue;
     } else if ((i273 << 16 >> 16 | 0) == 62) {
      i88 = 3044;
      break;
     } else if ((i273 << 16 >> 16 | 0) == 0) {
      i88 = 3045;
      break;
     } else {
      __ZN7WebCore9HTMLToken15appendToCommentEt(HEAP32[i66 >> 2] | 0, 45);
      __ZN7WebCore9HTMLToken15appendToCommentEt(HEAP32[i66 >> 2] | 0, 45);
      __ZN7WebCore9HTMLToken15appendToCommentEt(HEAP32[i66 >> 2] | 0, 33);
      __ZN7WebCore9HTMLToken15appendToCommentEt(HEAP32[i66 >> 2] | 0, i273);
      HEAP32[i79 >> 2] = 48;
      i225 = i2 + 58 | 0;
      i409 = HEAPU8[i225] | 0;
      do {
       if ((i409 & 2 | 0) == 0) {
        i73 = i2 + 68 | 0;
        i325 = i2 + (HEAP32[i73 + 4 >> 2] | 0) | 0;
        i221 = HEAP32[i73 >> 2] | 0;
        if ((i221 & 1 | 0) == 0) {
         i677 = i221;
        } else {
         i677 = HEAP32[(HEAP32[i325 >> 2] | 0) + (i221 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i677 & 15](i325);
       } else {
        i325 = (HEAP16[i80 >> 1] | 0) == 10 & i409;
        i221 = i2 + 8 | 0;
        i73 = HEAP32[i221 >> 2] | 0;
        i69 = i73 - 1 | 0;
        HEAP32[i221 >> 2] = i69;
        i221 = (i69 | 0) == 1;
        i69 = i2 + 4 | 0;
        i224 = (HEAP32[i69 >> 2] | 0) + 1 | 0;
        HEAP32[i69 >> 2] = i224;
        HEAP16[i80 >> 1] = HEAPU8[i224] | 0;
        if ((i221 & 1 | i325 | 0) == 0) {
         break;
        }
        if ((i325 | 0) != 0) {
         i325 = i2 + 32 | 0;
         HEAP32[i325 >> 2] = (HEAP32[i325 >> 2] | 0) + 1;
         i325 = HEAP32[i2 + 16 >> 2] | 0;
         if ((i325 | 0) == 0) {
          i678 = 0;
         } else {
          i678 = HEAP32[i325 + 4 >> 2] | 0;
         }
         HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i73) + i678;
        }
        if (!i221) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 3065;
       break;
      }
      i409 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i409;
      if ((i409 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i1 + 22 | 0] = 0;
       i129 = i409;
       i130 = i225;
       i88 = 2885;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 3065;
       break;
      }
      i129 = HEAP16[i3 >> 1] | 0;
      i130 = i225;
      i88 = 2885;
      continue;
     }
    } else if ((i88 | 0) == 3066) {
     i88 = 0;
     switch (i274 << 16 >> 16) {
     case 32:
     case 10:
     case 9:
     case 12:
      {
       break;
      }
     case 0:
      {
       i88 = 3085;
       break L110;
       break;
      }
     default:
      {
       HEAP32[i79 >> 2] = 53;
       i275 = i274;
       i88 = 3089;
       continue L110;
      }
     }
     HEAP32[i79 >> 2] = 53;
     i409 = HEAPU8[i2 + 58 | 0] | 0;
     do {
      if ((i409 & 2 | 0) == 0) {
       i221 = i2 + 68 | 0;
       i73 = i2 + (HEAP32[i221 + 4 >> 2] | 0) | 0;
       i325 = HEAP32[i221 >> 2] | 0;
       if ((i325 & 1 | 0) == 0) {
        i679 = i325;
       } else {
        i679 = HEAP32[(HEAP32[i73 >> 2] | 0) + (i325 - 1) >> 2] | 0;
       }
       FUNCTION_TABLE_vi[i679 & 15](i73);
      } else {
       i73 = (HEAP16[i80 >> 1] | 0) == 10 & i409;
       i325 = i2 + 8 | 0;
       i221 = HEAP32[i325 >> 2] | 0;
       i224 = i221 - 1 | 0;
       HEAP32[i325 >> 2] = i224;
       i325 = (i224 | 0) == 1;
       i224 = i2 + 4 | 0;
       i69 = (HEAP32[i224 >> 2] | 0) + 1 | 0;
       HEAP32[i224 >> 2] = i69;
       HEAP16[i80 >> 1] = HEAPU8[i69] | 0;
       if ((i325 & 1 | i73 | 0) == 0) {
        break;
       }
       if ((i73 | 0) != 0) {
        i73 = i2 + 32 | 0;
        HEAP32[i73 >> 2] = (HEAP32[i73 >> 2] | 0) + 1;
        i73 = HEAP32[i2 + 16 >> 2] | 0;
        if ((i73 | 0) == 0) {
         i680 = 0;
        } else {
         i680 = HEAP32[i73 + 4 >> 2] | 0;
        }
        HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i221) + i680;
       }
       if (!i325) {
        break;
       }
       __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
      }
     } while (0);
     if ((HEAP8[i82] & 1) != 0) {
      i88 = 3084;
      break;
     }
     i409 = HEAP16[i80 >> 1] | 0;
     HEAP16[i3 >> 1] = i409;
     if ((i409 & 65535) >>> 0 > 15 >>> 0) {
      HEAP8[i1 + 22 | 0] = 0;
      i275 = i409;
      i88 = 3089;
      continue;
     }
     if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
      i88 = 3084;
      break;
     }
     i275 = HEAP16[i3 >> 1] | 0;
     i88 = 3089;
     continue;
    } else if ((i88 | 0) == 3089) {
     i88 = 0;
     i409 = i2 + 58 | 0;
     i225 = i2 + 68 | 0;
     i325 = i2;
     i221 = i1 + 22 | 0;
     i73 = i2 + 8 | 0;
     i69 = i2 + 4 | 0;
     i224 = i2 + 32 | 0;
     i218 = i2 + 24 | 0;
     i76 = i2 + 16 | 0;
     i324 = i2 + 28 | 0;
     i219 = i275;
     while (1) {
      if (!((i219 << 16 >> 16 | 0) == 32 | (i219 << 16 >> 16 | 0) == 10 | (i219 << 16 >> 16 | 0) == 9 | (i219 << 16 >> 16 | 0) == 12)) {
       break;
      }
      HEAP32[i79 >> 2] = 53;
      i77 = HEAPU8[i409] | 0;
      do {
       if ((i77 & 2 | 0) == 0) {
        i71 = i325 + (HEAP32[i225 + 4 >> 2] | 0) | 0;
        i70 = HEAP32[i225 >> 2] | 0;
        if ((i70 & 1 | 0) == 0) {
         i681 = i70;
        } else {
         i681 = HEAP32[(HEAP32[i71 >> 2] | 0) + (i70 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i681 & 15](i71);
       } else {
        i71 = (HEAP16[i80 >> 1] | 0) == 10 & i77;
        i70 = HEAP32[i73 >> 2] | 0;
        i75 = i70 - 1 | 0;
        HEAP32[i73 >> 2] = i75;
        i72 = (i75 | 0) == 1;
        i75 = (HEAP32[i69 >> 2] | 0) + 1 | 0;
        HEAP32[i69 >> 2] = i75;
        HEAP16[i80 >> 1] = HEAPU8[i75] | 0;
        if ((i72 & 1 | i71 | 0) == 0) {
         break;
        }
        if ((i71 | 0) != 0) {
         HEAP32[i224 >> 2] = (HEAP32[i224 >> 2] | 0) + 1;
         i71 = HEAP32[i76 >> 2] | 0;
         if ((i71 | 0) == 0) {
          i682 = 0;
         } else {
          i682 = HEAP32[i71 + 4 >> 2] | 0;
         }
         HEAP32[i324 >> 2] = (HEAP32[i218 >> 2] | 0) + (1 - i70) + i682;
        }
        if (!i72) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 3108;
       break L110;
      }
      i77 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i77;
      if ((i77 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i221] = 0;
       i219 = i77;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 3108;
       break L110;
      }
      i219 = HEAP16[i3 >> 1] | 0;
     }
     if ((i219 - 65 & 65535) >>> 0 < 26 >>> 0) {
      __ZN7WebCore9HTMLToken12beginDOCTYPEEt(HEAP32[i66 >> 2] | 0, i219 + 32 & 65535);
      HEAP32[i79 >> 2] = 54;
      i77 = HEAPU8[i409] | 0;
      do {
       if ((i77 & 2 | 0) == 0) {
        i72 = i325 + (HEAP32[i225 + 4 >> 2] | 0) | 0;
        i70 = HEAP32[i225 >> 2] | 0;
        if ((i70 & 1 | 0) == 0) {
         i683 = i70;
        } else {
         i683 = HEAP32[(HEAP32[i72 >> 2] | 0) + (i70 - 1) >> 2] | 0;
        }
        FUNCTION_TABLE_vi[i683 & 15](i72);
       } else {
        i72 = (HEAP16[i80 >> 1] | 0) == 10 & i77;
        i70 = HEAP32[i73 >> 2] | 0;
        i71 = i70 - 1 | 0;
        HEAP32[i73 >> 2] = i71;
        i75 = (i71 | 0) == 1;
        i71 = (HEAP32[i69 >> 2] | 0) + 1 | 0;
        HEAP32[i69 >> 2] = i71;
        HEAP16[i80 >> 1] = HEAPU8[i71] | 0;
        if ((i75 & 1 | i72 | 0) == 0) {
         break;
        }
        if ((i72 | 0) != 0) {
         HEAP32[i224 >> 2] = (HEAP32[i224 >> 2] | 0) + 1;
         i72 = HEAP32[i76 >> 2] | 0;
         if ((i72 | 0) == 0) {
          i684 = 0;
         } else {
          i684 = HEAP32[i72 + 4 >> 2] | 0;
         }
         HEAP32[i324 >> 2] = (HEAP32[i218 >> 2] | 0) + (1 - i70) + i684;
        }
        if (!i75) {
         break;
        }
        __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
       }
      } while (0);
      if ((HEAP8[i82] & 1) != 0) {
       i88 = 3127;
       break;
      }
      i77 = HEAP16[i80 >> 1] | 0;
      HEAP16[i3 >> 1] = i77;
      if ((i77 & 65535) >>> 0 > 15 >>> 0) {
       HEAP8[i221] = 0;
       i133 = i77;
       i134 = i409;
       i135 = i225;
       i136 = i325;
       i137 = i221;
       i138 = i73;
       i139 = i69;
       i140 = i224;
       i141 = i218;
       i142 = i76;
       i143 = i324;
       i88 = 3151;
       continue;
      }
      if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
       i88 = 3127;
       break;
      }
      i133 = HEAP16[i3 >> 1] | 0;
      i134 = i409;
      i135 = i225;
      i136 = i325;
      i137 = i221;
      i138 = i73;
      i139 = i69;
      i140 = i224;
      i141 = i218;
      i142 = i76;
      i143 = i324;
      i88 = 3151;
      continue;
     }
     if ((i219 << 16 >> 16 | 0) == 62) {
      i88 = 3129;
      break;
     } else if ((i219 << 16 >> 16 | 0) == 0) {
      i88 = 3130;
      break;
     }
     __ZN7WebCore9HTMLToken12beginDOCTYPEEt(HEAP32[i66 >> 2] | 0, i219);
     HEAP32[i79 >> 2] = 54;
     i77 = HEAPU8[i409] | 0;
     do {
      if ((i77 & 2 | 0) == 0) {
       i75 = i325 + (HEAP32[i225 + 4 >> 2] | 0) | 0;
       i70 = HEAP32[i225 >> 2] | 0;
       if ((i70 & 1 | 0) == 0) {
        i685 = i70;
       } else {
        i685 = HEAP32[(HEAP32[i75 >> 2] | 0) + (i70 - 1) >> 2] | 0;
       }
       FUNCTION_TABLE_vi[i685 & 15](i75);
      } else {
       i75 = (HEAP16[i80 >> 1] | 0) == 10 & i77;
       i70 = HEAP32[i73 >> 2] | 0;
       i72 = i70 - 1 | 0;
       HEAP32[i73 >> 2] = i72;
       i71 = (i72 | 0) == 1;
       i72 = (HEAP32[i69 >> 2] | 0) + 1 | 0;
       HEAP32[i69 >> 2] = i72;
       HEAP16[i80 >> 1] = HEAPU8[i72] | 0;
       if ((i71 & 1 | i75 | 0) == 0) {
        break;
       }
       if ((i75 | 0) != 0) {
        HEAP32[i224 >> 2] = (HEAP32[i224 >> 2] | 0) + 1;
        i75 = HEAP32[i76 >> 2] | 0;
        if ((i75 | 0) == 0) {
         i686 = 0;
        } else {
         i686 = HEAP32[i75 + 4 >> 2] | 0;
        }
        HEAP32[i324 >> 2] = (HEAP32[i218 >> 2] | 0) + (1 - i70) + i686;
       }
       if (!i71) {
        break;
       }
       __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
      }
     } while (0);
     if ((HEAP8[i82] & 1) != 0) {
      i88 = 3150;
      break;
     }
     i77 = HEAP16[i80 >> 1] | 0;
     HEAP16[i3 >> 1] = i77;
     if ((i77 & 65535) >>> 0 > 15 >>> 0) {
      HEAP8[i221] = 0;
      i133 = i77;
      i134 = i409;
      i135 = i225;
      i136 = i325;
      i137 = i221;
      i138 = i73;
      i139 = i69;
      i140 = i224;
      i141 = i218;
      i142 = i76;
      i143 = i324;
      i88 = 3151;
      continue;
     }
     if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
      i88 = 3150;
      break;
     }
     i133 = HEAP16[i3 >> 1] | 0;
     i134 = i409;
     i135 = i225;
     i136 = i325;
     i137 = i221;
     i138 = i73;
     i139 = i69;
     i140 = i224;
     i141 = i218;
     i142 = i76;
     i143 = i324;
     i88 = 3151;
     continue;
    } else if ((i88 | 0) == 3151) {
     i88 = 0;
     i77 = i133;
     L4571 : while (1) {
      switch (i77 << 16 >> 16) {
      case 32:
      case 10:
      case 9:
      case 12:
       {
        break L4571;
        break;
       }
      case 62:
       {
        i88 = 3171;
        break L110;
        break;
       }
      default:
       {}
      }
      do {
       if ((i77 - 65 & 65535) >>> 0 < 26 >>> 0) {
        __ZN7WebCore9HTMLToken12appendToNameEt(HEAP32[i66 >> 2] | 0, i77 + 32 & 65535);
        HEAP32[i79 >> 2] = 54;
        i219 = HEAPU8[i134] | 0;
        do {
         if ((i219 & 2 | 0) == 0) {
          i71 = i136 + (HEAP32[i135 + 4 >> 2] | 0) | 0;
          i70 = HEAP32[i135 >> 2] | 0;
          if ((i70 & 1 | 0) == 0) {
           i687 = i70;
          } else {
           i687 = HEAP32[(HEAP32[i71 >> 2] | 0) + (i70 - 1) >> 2] | 0;
          }
          FUNCTION_TABLE_vi[i687 & 15](i71);
         } else {
          i71 = (HEAP16[i80 >> 1] | 0) == 10 & i219;
          i70 = HEAP32[i138 >> 2] | 0;
          i75 = i70 - 1 | 0;
          HEAP32[i138 >> 2] = i75;
          i72 = (i75 | 0) == 1;
          i75 = (HEAP32[i139 >> 2] | 0) + 1 | 0;
          HEAP32[i139 >> 2] = i75;
          HEAP16[i80 >> 1] = HEAPU8[i75] | 0;
          if ((i72 & 1 | i71 | 0) == 0) {
           break;
          }
          if ((i71 | 0) != 0) {
           HEAP32[i140 >> 2] = (HEAP32[i140 >> 2] | 0) + 1;
           i71 = HEAP32[i142 >> 2] | 0;
           if ((i71 | 0) == 0) {
            i688 = 0;
           } else {
            i688 = HEAP32[i71 + 4 >> 2] | 0;
           }
           HEAP32[i143 >> 2] = (HEAP32[i141 >> 2] | 0) + (1 - i70) + i688;
          }
          if (!i72) {
           break;
          }
          __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
         }
        } while (0);
        if ((HEAP8[i82] & 1) != 0) {
         i88 = 3189;
         break L110;
        }
        i219 = HEAP16[i80 >> 1] | 0;
        HEAP16[i3 >> 1] = i219;
        if ((i219 & 65535) >>> 0 > 15 >>> 0) {
         HEAP8[i137] = 0;
         break;
        } else {
         if (__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0) {
          break;
         } else {
          i88 = 3189;
          break L110;
         }
        }
       } else {
        i689 = HEAP32[i66 >> 2] | 0;
        if (i77 << 16 >> 16 == 0) {
         i88 = 3192;
         break L110;
        }
        __ZN7WebCore9HTMLToken12appendToNameEt(i689, i77);
        HEAP32[i79 >> 2] = 54;
        i219 = HEAPU8[i134] | 0;
        do {
         if ((i219 & 2 | 0) == 0) {
          i72 = i136 + (HEAP32[i135 + 4 >> 2] | 0) | 0;
          i70 = HEAP32[i135 >> 2] | 0;
          if ((i70 & 1 | 0) == 0) {
           i690 = i70;
          } else {
           i690 = HEAP32[(HEAP32[i72 >> 2] | 0) + (i70 - 1) >> 2] | 0;
          }
          FUNCTION_TABLE_vi[i690 & 15](i72);
         } else {
          i72 = (HEAP16[i80 >> 1] | 0) == 10 & i219;
          i70 = HEAP32[i138 >> 2] | 0;
          i71 = i70 - 1 | 0;
          HEAP32[i138 >> 2] = i71;
          i75 = (i71 | 0) == 1;
          i71 = (HEAP32[i139 >> 2] | 0) + 1 | 0;
          HEAP32[i139 >> 2] = i71;
          HEAP16[i80 >> 1] = HEAPU8[i71] | 0;
          if ((i75 & 1 | i72 | 0) == 0) {
           break;
          }
          if ((i72 | 0) != 0) {
           HEAP32[i140 >> 2] = (HEAP32[i140 >> 2] | 0) + 1;
           i72 = HEAP32[i142 >> 2] | 0;
           if ((i72 | 0) == 0) {
            i691 = 0;
           } else {
            i691 = HEAP32[i72 + 4 >> 2] | 0;
           }
           HEAP32[i143 >> 2] = (HEAP32[i141 >> 2] | 0) + (1 - i70) + i691;
          }
          if (!i75) {
           break;
          }
          __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
         }
        } while (0);
        if ((HEAP8[i82] & 1) != 0) {
         i88 = 3211;
         break L110;
        }
        i219 = HEAP16[i80 >> 1] | 0;
        HEAP16[i3 >> 1] = i219;
        if ((i219 & 65535) >>> 0 > 15 >>> 0) {
         HEAP8[i137] = 0;
         break;
        } else {
         if (__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0) {
          break;
         } else {
          i88 = 3211;
          break L110;
         }
        }
       }
      } while (0);
      i77 = HEAP16[i3 >> 1] | 0;
     }
     HEAP32[i79 >> 2] = 55;
     i77 = HEAPU8[i134] | 0;
     do {
      if ((i77 & 2 | 0) == 0) {
       i324 = i136 + (HEAP32[i135 + 4 >> 2] | 0) | 0;
       i76 = HEAP32[i135 >> 2] | 0;
       if ((i76 & 1 | 0) == 0) {
        i692 = i76;
       } else {
        i692 = HEAP32[(HEAP32[i324 >> 2] | 0) + (i76 - 1) >> 2] | 0;
       }
       FUNCTION_TABLE_vi[i692 & 15](i324);
      } else {
       i324 = (HEAP16[i80 >> 1] | 0) == 10 & i77;
       i76 = HEAP32[i138 >> 2] | 0;
       i218 = i76 - 1 | 0;
       HEAP32[i138 >> 2] = i218;
       i224 = (i218 | 0) == 1;
       i218 = (HEAP32[i139 >> 2] | 0) + 1 | 0;
       HEAP32[i139 >> 2] = i218;
       HEAP16[i80 >> 1] = HEAPU8[i218] | 0;
       if ((i224 & 1 | i324 | 0) == 0) {
        break;
       }
       if ((i324 | 0) != 0) {
        HEAP32[i140 >> 2] = (HEAP32[i140 >> 2] | 0) + 1;
        i324 = HEAP32[i142 >> 2] | 0;
        if ((i324 | 0) == 0) {
         i693 = 0;
        } else {
         i693 = HEAP32[i324 + 4 >> 2] | 0;
        }
        HEAP32[i143 >> 2] = (HEAP32[i141 >> 2] | 0) + (1 - i76) + i693;
       }
       if (!i224) {
        break;
       }
       __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
      }
     } while (0);
     if ((HEAP8[i82] & 1) != 0) {
      i88 = 3170;
      break;
     }
     i77 = HEAP16[i80 >> 1] | 0;
     HEAP16[i3 >> 1] = i77;
     if ((i77 & 65535) >>> 0 > 15 >>> 0) {
      HEAP8[i137] = 0;
      i144 = i77;
      i145 = i134;
      i146 = i135;
      i147 = i136;
      i148 = i137;
      i149 = i138;
      i150 = i139;
      i151 = i140;
      i152 = i141;
      i153 = i142;
      i154 = i143;
      i88 = 81;
      continue;
     }
     if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
      i88 = 3170;
      break;
     }
     i144 = HEAP16[i3 >> 1] | 0;
     i145 = i134;
     i146 = i135;
     i147 = i136;
     i148 = i137;
     i149 = i138;
     i150 = i139;
     i151 = i140;
     i152 = i141;
     i153 = i142;
     i154 = i143;
     i88 = 81;
     continue;
    } else if ((i88 | 0) == 3292) {
     i88 = 0;
     switch (i276 << 16 >> 16) {
     case 32:
     case 10:
     case 9:
     case 12:
      {
       HEAP32[i79 >> 2] = 57;
       i77 = i2 + 58 | 0;
       i224 = HEAPU8[i77] | 0;
       do {
        if ((i224 & 2 | 0) == 0) {
         i76 = i2 + 68 | 0;
         i324 = i2 + (HEAP32[i76 + 4 >> 2] | 0) | 0;
         i218 = HEAP32[i76 >> 2] | 0;
         if ((i218 & 1 | 0) == 0) {
          i694 = i218;
         } else {
          i694 = HEAP32[(HEAP32[i324 >> 2] | 0) + (i218 - 1) >> 2] | 0;
         }
         FUNCTION_TABLE_vi[i694 & 15](i324);
        } else {
         i324 = (HEAP16[i80 >> 1] | 0) == 10 & i224;
         i218 = i2 + 8 | 0;
         i76 = HEAP32[i218 >> 2] | 0;
         i69 = i76 - 1 | 0;
         HEAP32[i218 >> 2] = i69;
         i218 = (i69 | 0) == 1;
         i69 = i2 + 4 | 0;
         i73 = (HEAP32[i69 >> 2] | 0) + 1 | 0;
         HEAP32[i69 >> 2] = i73;
         HEAP16[i80 >> 1] = HEAPU8[i73] | 0;
         if ((i218 & 1 | i324 | 0) == 0) {
          break;
         }
         if ((i324 | 0) != 0) {
          i324 = i2 + 32 | 0;
          HEAP32[i324 >> 2] = (HEAP32[i324 >> 2] | 0) + 1;
          i324 = HEAP32[i2 + 16 >> 2] | 0;
          if ((i324 | 0) == 0) {
           i695 = 0;
          } else {
           i695 = HEAP32[i324 + 4 >> 2] | 0;
          }
          HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i76) + i695;
         }
         if (!i218) {
          break;
         }
         __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
        }
       } while (0);
       if ((HEAP8[i82] & 1) != 0) {
        i88 = 3310;
        break L110;
       }
       i224 = HEAP16[i80 >> 1] | 0;
       HEAP16[i3 >> 1] = i224;
       if ((i224 & 65535) >>> 0 > 15 >>> 0) {
        HEAP8[i1 + 22 | 0] = 0;
        i157 = i224;
        i158 = i77;
        i88 = 83;
        continue L110;
       }
       if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
        i88 = 3310;
        break L110;
       }
       i157 = HEAP16[i3 >> 1] | 0;
       i158 = i77;
       i88 = 83;
       continue L110;
       break;
      }
     case 34:
      {
       i224 = (HEAP32[i66 >> 2] | 0) + 2240 | 0;
       HEAP8[HEAP32[i224 >> 2] | 0] = 1;
       i218 = HEAP32[i224 >> 2] | 0;
       i224 = i218 + 8 | 0;
       do {
        if ((HEAP32[i224 >> 2] | 0) != 0) {
         i76 = i218 + 12 | 0;
         if ((HEAP32[i76 >> 2] | 0) != 0) {
          HEAP32[i76 >> 2] = 0;
         }
         i76 = i218 + 4 | 0;
         i324 = HEAP32[i76 >> 2] | 0;
         if ((i324 | 0) == 0) {
          break;
         }
         HEAP32[i76 >> 2] = 0;
         HEAP32[i224 >> 2] = 0;
         __ZN3WTF8fastFreeEPv(i324);
        }
       } while (0);
       HEAP32[i79 >> 2] = 58;
       i224 = i2 + 58 | 0;
       i218 = HEAPU8[i224] | 0;
       do {
        if ((i218 & 2 | 0) == 0) {
         i77 = i2 + 68 | 0;
         i324 = i2 + (HEAP32[i77 + 4 >> 2] | 0) | 0;
         i76 = HEAP32[i77 >> 2] | 0;
         if ((i76 & 1 | 0) == 0) {
          i696 = i76;
         } else {
          i696 = HEAP32[(HEAP32[i324 >> 2] | 0) + (i76 - 1) >> 2] | 0;
         }
         FUNCTION_TABLE_vi[i696 & 15](i324);
        } else {
         i324 = (HEAP16[i80 >> 1] | 0) == 10 & i218;
         i76 = i2 + 8 | 0;
         i77 = HEAP32[i76 >> 2] | 0;
         i73 = i77 - 1 | 0;
         HEAP32[i76 >> 2] = i73;
         i76 = (i73 | 0) == 1;
         i73 = i2 + 4 | 0;
         i69 = (HEAP32[i73 >> 2] | 0) + 1 | 0;
         HEAP32[i73 >> 2] = i69;
         HEAP16[i80 >> 1] = HEAPU8[i69] | 0;
         if ((i76 & 1 | i324 | 0) == 0) {
          break;
         }
         if ((i324 | 0) != 0) {
          i324 = i2 + 32 | 0;
          HEAP32[i324 >> 2] = (HEAP32[i324 >> 2] | 0) + 1;
          i324 = HEAP32[i2 + 16 >> 2] | 0;
          if ((i324 | 0) == 0) {
           i697 = 0;
          } else {
           i697 = HEAP32[i324 + 4 >> 2] | 0;
          }
          HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i77) + i697;
         }
         if (!i76) {
          break;
         }
         __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
        }
       } while (0);
       if ((HEAP8[i82] & 1) != 0) {
        i88 = 3333;
        break L110;
       }
       i218 = HEAP16[i80 >> 1] | 0;
       HEAP16[i3 >> 1] = i218;
       if ((i218 & 65535) >>> 0 > 15 >>> 0) {
        HEAP8[i1 + 22 | 0] = 0;
        i159 = i218;
        i160 = i224;
        i88 = 85;
        continue L110;
       }
       if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
        i88 = 3333;
        break L110;
       }
       i159 = HEAP16[i3 >> 1] | 0;
       i160 = i224;
       i88 = 85;
       continue L110;
       break;
      }
     case 39:
      {
       i218 = (HEAP32[i66 >> 2] | 0) + 2240 | 0;
       HEAP8[HEAP32[i218 >> 2] | 0] = 1;
       i76 = HEAP32[i218 >> 2] | 0;
       i218 = i76 + 8 | 0;
       do {
        if ((HEAP32[i218 >> 2] | 0) != 0) {
         i77 = i76 + 12 | 0;
         if ((HEAP32[i77 >> 2] | 0) != 0) {
          HEAP32[i77 >> 2] = 0;
         }
         i77 = i76 + 4 | 0;
         i324 = HEAP32[i77 >> 2] | 0;
         if ((i324 | 0) == 0) {
          break;
         }
         HEAP32[i77 >> 2] = 0;
         HEAP32[i218 >> 2] = 0;
         __ZN3WTF8fastFreeEPv(i324);
        }
       } while (0);
       HEAP32[i79 >> 2] = 59;
       i218 = i2 + 58 | 0;
       i76 = HEAPU8[i218] | 0;
       do {
        if ((i76 & 2 | 0) == 0) {
         i224 = i2 + 68 | 0;
         i324 = i2 + (HEAP32[i224 + 4 >> 2] | 0) | 0;
         i77 = HEAP32[i224 >> 2] | 0;
         if ((i77 & 1 | 0) == 0) {
          i698 = i77;
         } else {
          i698 = HEAP32[(HEAP32[i324 >> 2] | 0) + (i77 - 1) >> 2] | 0;
         }
         FUNCTION_TABLE_vi[i698 & 15](i324);
        } else {
         i324 = (HEAP16[i80 >> 1] | 0) == 10 & i76;
         i77 = i2 + 8 | 0;
         i224 = HEAP32[i77 >> 2] | 0;
         i69 = i224 - 1 | 0;
         HEAP32[i77 >> 2] = i69;
         i77 = (i69 | 0) == 1;
         i69 = i2 + 4 | 0;
         i73 = (HEAP32[i69 >> 2] | 0) + 1 | 0;
         HEAP32[i69 >> 2] = i73;
         HEAP16[i80 >> 1] = HEAPU8[i73] | 0;
         if ((i77 & 1 | i324 | 0) == 0) {
          break;
         }
         if ((i324 | 0) != 0) {
          i324 = i2 + 32 | 0;
          HEAP32[i324 >> 2] = (HEAP32[i324 >> 2] | 0) + 1;
          i324 = HEAP32[i2 + 16 >> 2] | 0;
          if ((i324 | 0) == 0) {
           i699 = 0;
          } else {
           i699 = HEAP32[i324 + 4 >> 2] | 0;
          }
          HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i224) + i699;
         }
         if (!i77) {
          break;
         }
         __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
        }
       } while (0);
       if ((HEAP8[i82] & 1) != 0) {
        i88 = 3356;
        break L110;
       }
       i76 = HEAP16[i80 >> 1] | 0;
       HEAP16[i3 >> 1] = i76;
       if ((i76 & 65535) >>> 0 > 15 >>> 0) {
        HEAP8[i1 + 22 | 0] = 0;
        i178 = i76;
        i179 = i218;
        i88 = 84;
        continue L110;
       }
       if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
        i88 = 3356;
        break L110;
       }
       i178 = HEAP16[i3 >> 1] | 0;
       i179 = i218;
       i88 = 84;
       continue L110;
       break;
      }
     case 62:
      {
       i88 = 3357;
       break L110;
       break;
      }
     default:
      {
       HEAP8[(HEAP32[(HEAP32[i66 >> 2] | 0) + 2240 >> 2] | 0) + 28 | 0] = 1;
       if (i276 << 16 >> 16 == 0) {
        i88 = 3359;
        break L110;
       }
       HEAP32[i79 >> 2] = 67;
       i76 = i2 + 58 | 0;
       i77 = HEAPU8[i76] | 0;
       do {
        if ((i77 & 2 | 0) == 0) {
         i224 = i2 + 68 | 0;
         i324 = i2 + (HEAP32[i224 + 4 >> 2] | 0) | 0;
         i73 = HEAP32[i224 >> 2] | 0;
         if ((i73 & 1 | 0) == 0) {
          i700 = i73;
         } else {
          i700 = HEAP32[(HEAP32[i324 >> 2] | 0) + (i73 - 1) >> 2] | 0;
         }
         FUNCTION_TABLE_vi[i700 & 15](i324);
        } else {
         i324 = (HEAP16[i80 >> 1] | 0) == 10 & i77;
         i73 = i2 + 8 | 0;
         i224 = HEAP32[i73 >> 2] | 0;
         i69 = i224 - 1 | 0;
         HEAP32[i73 >> 2] = i69;
         i73 = (i69 | 0) == 1;
         i69 = i2 + 4 | 0;
         i221 = (HEAP32[i69 >> 2] | 0) + 1 | 0;
         HEAP32[i69 >> 2] = i221;
         HEAP16[i80 >> 1] = HEAPU8[i221] | 0;
         if ((i73 & 1 | i324 | 0) == 0) {
          break;
         }
         if ((i324 | 0) != 0) {
          i324 = i2 + 32 | 0;
          HEAP32[i324 >> 2] = (HEAP32[i324 >> 2] | 0) + 1;
          i324 = HEAP32[i2 + 16 >> 2] | 0;
          if ((i324 | 0) == 0) {
           i701 = 0;
          } else {
           i701 = HEAP32[i324 + 4 >> 2] | 0;
          }
          HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i224) + i701;
         }
         if (!i73) {
          break;
         }
         __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
        }
       } while (0);
       if ((HEAP8[i82] & 1) != 0) {
        i88 = 3379;
        break L110;
       }
       i77 = HEAP16[i80 >> 1] | 0;
       HEAP16[i3 >> 1] = i77;
       if ((i77 & 65535) >>> 0 > 15 >>> 0) {
        HEAP8[i1 + 22 | 0] = 0;
        i155 = i77;
        i156 = i76;
        i88 = 4053;
        continue L110;
       }
       if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
        i88 = 3379;
        break L110;
       }
       i155 = HEAP16[i3 >> 1] | 0;
       i156 = i76;
       i88 = 4053;
       continue L110;
      }
     }
    } else if ((i88 | 0) == 3564) {
     i88 = 0;
     switch (i277 << 16 >> 16) {
     case 32:
     case 10:
     case 9:
     case 12:
      {
       HEAP32[i79 >> 2] = 61;
       i77 = i2 + 58 | 0;
       i218 = HEAPU8[i77] | 0;
       do {
        if ((i218 & 2 | 0) == 0) {
         i73 = i2 + 68 | 0;
         i224 = i2 + (HEAP32[i73 + 4 >> 2] | 0) | 0;
         i324 = HEAP32[i73 >> 2] | 0;
         if ((i324 & 1 | 0) == 0) {
          i702 = i324;
         } else {
          i702 = HEAP32[(HEAP32[i224 >> 2] | 0) + (i324 - 1) >> 2] | 0;
         }
         FUNCTION_TABLE_vi[i702 & 15](i224);
        } else {
         i224 = (HEAP16[i80 >> 1] | 0) == 10 & i218;
         i324 = i2 + 8 | 0;
         i73 = HEAP32[i324 >> 2] | 0;
         i221 = i73 - 1 | 0;
         HEAP32[i324 >> 2] = i221;
         i324 = (i221 | 0) == 1;
         i221 = i2 + 4 | 0;
         i69 = (HEAP32[i221 >> 2] | 0) + 1 | 0;
         HEAP32[i221 >> 2] = i69;
         HEAP16[i80 >> 1] = HEAPU8[i69] | 0;
         if ((i324 & 1 | i224 | 0) == 0) {
          break;
         }
         if ((i224 | 0) != 0) {
          i224 = i2 + 32 | 0;
          HEAP32[i224 >> 2] = (HEAP32[i224 >> 2] | 0) + 1;
          i224 = HEAP32[i2 + 16 >> 2] | 0;
          if ((i224 | 0) == 0) {
           i703 = 0;
          } else {
           i703 = HEAP32[i224 + 4 >> 2] | 0;
          }
          HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i73) + i703;
         }
         if (!i324) {
          break;
         }
         __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
        }
       } while (0);
       if ((HEAP8[i82] & 1) != 0) {
        i88 = 3582;
        break L110;
       }
       i218 = HEAP16[i80 >> 1] | 0;
       HEAP16[i3 >> 1] = i218;
       if ((i218 & 65535) >>> 0 > 15 >>> 0) {
        HEAP8[i1 + 22 | 0] = 0;
        i161 = i218;
        i162 = i77;
        i88 = 86;
        continue L110;
       }
       if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
        i88 = 3582;
        break L110;
       }
       i161 = HEAP16[i3 >> 1] | 0;
       i162 = i77;
       i88 = 86;
       continue L110;
       break;
      }
     case 62:
      {
       i88 = 3583;
       break L110;
       break;
      }
     case 34:
      {
       i218 = (HEAP32[i66 >> 2] | 0) + 2240 | 0;
       HEAP8[(HEAP32[i218 >> 2] | 0) + 1 | 0] = 1;
       i76 = HEAP32[i218 >> 2] | 0;
       i218 = i76 + 20 | 0;
       do {
        if ((HEAP32[i218 >> 2] | 0) != 0) {
         i324 = i76 + 24 | 0;
         if ((HEAP32[i324 >> 2] | 0) != 0) {
          HEAP32[i324 >> 2] = 0;
         }
         i324 = i76 + 16 | 0;
         i73 = HEAP32[i324 >> 2] | 0;
         if ((i73 | 0) == 0) {
          break;
         }
         HEAP32[i324 >> 2] = 0;
         HEAP32[i218 >> 2] = 0;
         __ZN3WTF8fastFreeEPv(i73);
        }
       } while (0);
       HEAP32[i79 >> 2] = 64;
       i218 = i2 + 58 | 0;
       i76 = HEAPU8[i218] | 0;
       do {
        if ((i76 & 2 | 0) == 0) {
         i77 = i2 + 68 | 0;
         i73 = i2 + (HEAP32[i77 + 4 >> 2] | 0) | 0;
         i324 = HEAP32[i77 >> 2] | 0;
         if ((i324 & 1 | 0) == 0) {
          i704 = i324;
         } else {
          i704 = HEAP32[(HEAP32[i73 >> 2] | 0) + (i324 - 1) >> 2] | 0;
         }
         FUNCTION_TABLE_vi[i704 & 15](i73);
        } else {
         i73 = (HEAP16[i80 >> 1] | 0) == 10 & i76;
         i324 = i2 + 8 | 0;
         i77 = HEAP32[i324 >> 2] | 0;
         i224 = i77 - 1 | 0;
         HEAP32[i324 >> 2] = i224;
         i324 = (i224 | 0) == 1;
         i224 = i2 + 4 | 0;
         i69 = (HEAP32[i224 >> 2] | 0) + 1 | 0;
         HEAP32[i224 >> 2] = i69;
         HEAP16[i80 >> 1] = HEAPU8[i69] | 0;
         if ((i324 & 1 | i73 | 0) == 0) {
          break;
         }
         if ((i73 | 0) != 0) {
          i73 = i2 + 32 | 0;
          HEAP32[i73 >> 2] = (HEAP32[i73 >> 2] | 0) + 1;
          i73 = HEAP32[i2 + 16 >> 2] | 0;
          if ((i73 | 0) == 0) {
           i705 = 0;
          } else {
           i705 = HEAP32[i73 + 4 >> 2] | 0;
          }
          HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i77) + i705;
         }
         if (!i324) {
          break;
         }
         __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
        }
       } while (0);
       if ((HEAP8[i82] & 1) != 0) {
        i88 = 3606;
        break L110;
       }
       i76 = HEAP16[i80 >> 1] | 0;
       HEAP16[i3 >> 1] = i76;
       if ((i76 & 65535) >>> 0 > 15 >>> 0) {
        HEAP8[i1 + 22 | 0] = 0;
        i163 = i76;
        i164 = i218;
        i88 = 88;
        continue L110;
       }
       if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
        i88 = 3606;
        break L110;
       }
       i163 = HEAP16[i3 >> 1] | 0;
       i164 = i218;
       i88 = 88;
       continue L110;
       break;
      }
     case 39:
      {
       i76 = (HEAP32[i66 >> 2] | 0) + 2240 | 0;
       HEAP8[(HEAP32[i76 >> 2] | 0) + 1 | 0] = 1;
       i324 = HEAP32[i76 >> 2] | 0;
       i76 = i324 + 20 | 0;
       do {
        if ((HEAP32[i76 >> 2] | 0) != 0) {
         i77 = i324 + 24 | 0;
         if ((HEAP32[i77 >> 2] | 0) != 0) {
          HEAP32[i77 >> 2] = 0;
         }
         i77 = i324 + 16 | 0;
         i73 = HEAP32[i77 >> 2] | 0;
         if ((i73 | 0) == 0) {
          break;
         }
         HEAP32[i77 >> 2] = 0;
         HEAP32[i76 >> 2] = 0;
         __ZN3WTF8fastFreeEPv(i73);
        }
       } while (0);
       HEAP32[i79 >> 2] = 65;
       i76 = i2 + 58 | 0;
       i324 = HEAPU8[i76] | 0;
       do {
        if ((i324 & 2 | 0) == 0) {
         i218 = i2 + 68 | 0;
         i73 = i2 + (HEAP32[i218 + 4 >> 2] | 0) | 0;
         i77 = HEAP32[i218 >> 2] | 0;
         if ((i77 & 1 | 0) == 0) {
          i706 = i77;
         } else {
          i706 = HEAP32[(HEAP32[i73 >> 2] | 0) + (i77 - 1) >> 2] | 0;
         }
         FUNCTION_TABLE_vi[i706 & 15](i73);
        } else {
         i73 = (HEAP16[i80 >> 1] | 0) == 10 & i324;
         i77 = i2 + 8 | 0;
         i218 = HEAP32[i77 >> 2] | 0;
         i69 = i218 - 1 | 0;
         HEAP32[i77 >> 2] = i69;
         i77 = (i69 | 0) == 1;
         i69 = i2 + 4 | 0;
         i224 = (HEAP32[i69 >> 2] | 0) + 1 | 0;
         HEAP32[i69 >> 2] = i224;
         HEAP16[i80 >> 1] = HEAPU8[i224] | 0;
         if ((i77 & 1 | i73 | 0) == 0) {
          break;
         }
         if ((i73 | 0) != 0) {
          i73 = i2 + 32 | 0;
          HEAP32[i73 >> 2] = (HEAP32[i73 >> 2] | 0) + 1;
          i73 = HEAP32[i2 + 16 >> 2] | 0;
          if ((i73 | 0) == 0) {
           i707 = 0;
          } else {
           i707 = HEAP32[i73 + 4 >> 2] | 0;
          }
          HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i218) + i707;
         }
         if (!i77) {
          break;
         }
         __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
        }
       } while (0);
       if ((HEAP8[i82] & 1) != 0) {
        i88 = 3629;
        break L110;
       }
       i324 = HEAP16[i80 >> 1] | 0;
       HEAP16[i3 >> 1] = i324;
       if ((i324 & 65535) >>> 0 > 15 >>> 0) {
        HEAP8[i1 + 22 | 0] = 0;
        i176 = i324;
        i177 = i76;
        i88 = 87;
        continue L110;
       }
       if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
        i88 = 3629;
        break L110;
       }
       i176 = HEAP16[i3 >> 1] | 0;
       i177 = i76;
       i88 = 87;
       continue L110;
       break;
      }
     default:
      {
       HEAP8[(HEAP32[(HEAP32[i66 >> 2] | 0) + 2240 >> 2] | 0) + 28 | 0] = 1;
       if (i277 << 16 >> 16 == 0) {
        i88 = 3631;
        break L110;
       }
       HEAP32[i79 >> 2] = 67;
       i324 = i2 + 58 | 0;
       i77 = HEAPU8[i324] | 0;
       do {
        if ((i77 & 2 | 0) == 0) {
         i218 = i2 + 68 | 0;
         i73 = i2 + (HEAP32[i218 + 4 >> 2] | 0) | 0;
         i224 = HEAP32[i218 >> 2] | 0;
         if ((i224 & 1 | 0) == 0) {
          i708 = i224;
         } else {
          i708 = HEAP32[(HEAP32[i73 >> 2] | 0) + (i224 - 1) >> 2] | 0;
         }
         FUNCTION_TABLE_vi[i708 & 15](i73);
        } else {
         i73 = (HEAP16[i80 >> 1] | 0) == 10 & i77;
         i224 = i2 + 8 | 0;
         i218 = HEAP32[i224 >> 2] | 0;
         i69 = i218 - 1 | 0;
         HEAP32[i224 >> 2] = i69;
         i224 = (i69 | 0) == 1;
         i69 = i2 + 4 | 0;
         i221 = (HEAP32[i69 >> 2] | 0) + 1 | 0;
         HEAP32[i69 >> 2] = i221;
         HEAP16[i80 >> 1] = HEAPU8[i221] | 0;
         if ((i224 & 1 | i73 | 0) == 0) {
          break;
         }
         if ((i73 | 0) != 0) {
          i73 = i2 + 32 | 0;
          HEAP32[i73 >> 2] = (HEAP32[i73 >> 2] | 0) + 1;
          i73 = HEAP32[i2 + 16 >> 2] | 0;
          if ((i73 | 0) == 0) {
           i709 = 0;
          } else {
           i709 = HEAP32[i73 + 4 >> 2] | 0;
          }
          HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i218) + i709;
         }
         if (!i224) {
          break;
         }
         __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
        }
       } while (0);
       if ((HEAP8[i82] & 1) != 0) {
        i88 = 3651;
        break L110;
       }
       i77 = HEAP16[i80 >> 1] | 0;
       HEAP16[i3 >> 1] = i77;
       if ((i77 & 65535) >>> 0 > 15 >>> 0) {
        HEAP8[i1 + 22 | 0] = 0;
        i155 = i77;
        i156 = i324;
        i88 = 4053;
        continue L110;
       }
       if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
        i88 = 3651;
        break L110;
       }
       i155 = HEAP16[i3 >> 1] | 0;
       i156 = i324;
       i88 = 4053;
       continue L110;
      }
     }
    } else if ((i88 | 0) == 3740) {
     i88 = 0;
     switch (i278 << 16 >> 16) {
     case 32:
     case 10:
     case 9:
     case 12:
      {
       HEAP32[i79 >> 2] = 63;
       i77 = i2 + 58 | 0;
       i76 = HEAPU8[i77] | 0;
       do {
        if ((i76 & 2 | 0) == 0) {
         i224 = i2 + 68 | 0;
         i218 = i2 + (HEAP32[i224 + 4 >> 2] | 0) | 0;
         i73 = HEAP32[i224 >> 2] | 0;
         if ((i73 & 1 | 0) == 0) {
          i710 = i73;
         } else {
          i710 = HEAP32[(HEAP32[i218 >> 2] | 0) + (i73 - 1) >> 2] | 0;
         }
         FUNCTION_TABLE_vi[i710 & 15](i218);
        } else {
         i218 = (HEAP16[i80 >> 1] | 0) == 10 & i76;
         i73 = i2 + 8 | 0;
         i224 = HEAP32[i73 >> 2] | 0;
         i221 = i224 - 1 | 0;
         HEAP32[i73 >> 2] = i221;
         i73 = (i221 | 0) == 1;
         i221 = i2 + 4 | 0;
         i69 = (HEAP32[i221 >> 2] | 0) + 1 | 0;
         HEAP32[i221 >> 2] = i69;
         HEAP16[i80 >> 1] = HEAPU8[i69] | 0;
         if ((i73 & 1 | i218 | 0) == 0) {
          break;
         }
         if ((i218 | 0) != 0) {
          i218 = i2 + 32 | 0;
          HEAP32[i218 >> 2] = (HEAP32[i218 >> 2] | 0) + 1;
          i218 = HEAP32[i2 + 16 >> 2] | 0;
          if ((i218 | 0) == 0) {
           i711 = 0;
          } else {
           i711 = HEAP32[i218 + 4 >> 2] | 0;
          }
          HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i224) + i711;
         }
         if (!i73) {
          break;
         }
         __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
        }
       } while (0);
       if ((HEAP8[i82] & 1) != 0) {
        i88 = 3758;
        break L110;
       }
       i76 = HEAP16[i80 >> 1] | 0;
       HEAP16[i3 >> 1] = i76;
       if ((i76 & 65535) >>> 0 > 15 >>> 0) {
        HEAP8[i1 + 22 | 0] = 0;
        i180 = i76;
        i181 = i77;
        i88 = 82;
        continue L110;
       }
       if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
        i88 = 3758;
        break L110;
       }
       i180 = HEAP16[i3 >> 1] | 0;
       i181 = i77;
       i88 = 82;
       continue L110;
       break;
      }
     case 34:
      {
       i76 = (HEAP32[i66 >> 2] | 0) + 2240 | 0;
       HEAP8[(HEAP32[i76 >> 2] | 0) + 1 | 0] = 1;
       i324 = HEAP32[i76 >> 2] | 0;
       i76 = i324 + 20 | 0;
       do {
        if ((HEAP32[i76 >> 2] | 0) != 0) {
         i73 = i324 + 24 | 0;
         if ((HEAP32[i73 >> 2] | 0) != 0) {
          HEAP32[i73 >> 2] = 0;
         }
         i73 = i324 + 16 | 0;
         i224 = HEAP32[i73 >> 2] | 0;
         if ((i224 | 0) == 0) {
          break;
         }
         HEAP32[i73 >> 2] = 0;
         HEAP32[i76 >> 2] = 0;
         __ZN3WTF8fastFreeEPv(i224);
        }
       } while (0);
       HEAP32[i79 >> 2] = 64;
       i76 = i2 + 58 | 0;
       i324 = HEAPU8[i76] | 0;
       do {
        if ((i324 & 2 | 0) == 0) {
         i77 = i2 + 68 | 0;
         i224 = i2 + (HEAP32[i77 + 4 >> 2] | 0) | 0;
         i73 = HEAP32[i77 >> 2] | 0;
         if ((i73 & 1 | 0) == 0) {
          i712 = i73;
         } else {
          i712 = HEAP32[(HEAP32[i224 >> 2] | 0) + (i73 - 1) >> 2] | 0;
         }
         FUNCTION_TABLE_vi[i712 & 15](i224);
        } else {
         i224 = (HEAP16[i80 >> 1] | 0) == 10 & i324;
         i73 = i2 + 8 | 0;
         i77 = HEAP32[i73 >> 2] | 0;
         i218 = i77 - 1 | 0;
         HEAP32[i73 >> 2] = i218;
         i73 = (i218 | 0) == 1;
         i218 = i2 + 4 | 0;
         i69 = (HEAP32[i218 >> 2] | 0) + 1 | 0;
         HEAP32[i218 >> 2] = i69;
         HEAP16[i80 >> 1] = HEAPU8[i69] | 0;
         if ((i73 & 1 | i224 | 0) == 0) {
          break;
         }
         if ((i224 | 0) != 0) {
          i224 = i2 + 32 | 0;
          HEAP32[i224 >> 2] = (HEAP32[i224 >> 2] | 0) + 1;
          i224 = HEAP32[i2 + 16 >> 2] | 0;
          if ((i224 | 0) == 0) {
           i713 = 0;
          } else {
           i713 = HEAP32[i224 + 4 >> 2] | 0;
          }
          HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i77) + i713;
         }
         if (!i73) {
          break;
         }
         __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
        }
       } while (0);
       if ((HEAP8[i82] & 1) != 0) {
        i88 = 3781;
        break L110;
       }
       i324 = HEAP16[i80 >> 1] | 0;
       HEAP16[i3 >> 1] = i324;
       if ((i324 & 65535) >>> 0 > 15 >>> 0) {
        HEAP8[i1 + 22 | 0] = 0;
        i163 = i324;
        i164 = i76;
        i88 = 88;
        continue L110;
       }
       if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
        i88 = 3781;
        break L110;
       }
       i163 = HEAP16[i3 >> 1] | 0;
       i164 = i76;
       i88 = 88;
       continue L110;
       break;
      }
     case 39:
      {
       i324 = (HEAP32[i66 >> 2] | 0) + 2240 | 0;
       HEAP8[(HEAP32[i324 >> 2] | 0) + 1 | 0] = 1;
       i73 = HEAP32[i324 >> 2] | 0;
       i324 = i73 + 20 | 0;
       do {
        if ((HEAP32[i324 >> 2] | 0) != 0) {
         i77 = i73 + 24 | 0;
         if ((HEAP32[i77 >> 2] | 0) != 0) {
          HEAP32[i77 >> 2] = 0;
         }
         i77 = i73 + 16 | 0;
         i224 = HEAP32[i77 >> 2] | 0;
         if ((i224 | 0) == 0) {
          break;
         }
         HEAP32[i77 >> 2] = 0;
         HEAP32[i324 >> 2] = 0;
         __ZN3WTF8fastFreeEPv(i224);
        }
       } while (0);
       HEAP32[i79 >> 2] = 65;
       i324 = i2 + 58 | 0;
       i73 = HEAPU8[i324] | 0;
       do {
        if ((i73 & 2 | 0) == 0) {
         i76 = i2 + 68 | 0;
         i224 = i2 + (HEAP32[i76 + 4 >> 2] | 0) | 0;
         i77 = HEAP32[i76 >> 2] | 0;
         if ((i77 & 1 | 0) == 0) {
          i714 = i77;
         } else {
          i714 = HEAP32[(HEAP32[i224 >> 2] | 0) + (i77 - 1) >> 2] | 0;
         }
         FUNCTION_TABLE_vi[i714 & 15](i224);
        } else {
         i224 = (HEAP16[i80 >> 1] | 0) == 10 & i73;
         i77 = i2 + 8 | 0;
         i76 = HEAP32[i77 >> 2] | 0;
         i69 = i76 - 1 | 0;
         HEAP32[i77 >> 2] = i69;
         i77 = (i69 | 0) == 1;
         i69 = i2 + 4 | 0;
         i218 = (HEAP32[i69 >> 2] | 0) + 1 | 0;
         HEAP32[i69 >> 2] = i218;
         HEAP16[i80 >> 1] = HEAPU8[i218] | 0;
         if ((i77 & 1 | i224 | 0) == 0) {
          break;
         }
         if ((i224 | 0) != 0) {
          i224 = i2 + 32 | 0;
          HEAP32[i224 >> 2] = (HEAP32[i224 >> 2] | 0) + 1;
          i224 = HEAP32[i2 + 16 >> 2] | 0;
          if ((i224 | 0) == 0) {
           i715 = 0;
          } else {
           i715 = HEAP32[i224 + 4 >> 2] | 0;
          }
          HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i76) + i715;
         }
         if (!i77) {
          break;
         }
         __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
        }
       } while (0);
       if ((HEAP8[i82] & 1) != 0) {
        i88 = 3804;
        break L110;
       }
       i73 = HEAP16[i80 >> 1] | 0;
       HEAP16[i3 >> 1] = i73;
       if ((i73 & 65535) >>> 0 > 15 >>> 0) {
        HEAP8[i1 + 22 | 0] = 0;
        i176 = i73;
        i177 = i324;
        i88 = 87;
        continue L110;
       }
       if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
        i88 = 3804;
        break L110;
       }
       i176 = HEAP16[i3 >> 1] | 0;
       i177 = i324;
       i88 = 87;
       continue L110;
       break;
      }
     case 62:
      {
       i88 = 3805;
       break L110;
       break;
      }
     default:
      {
       HEAP8[(HEAP32[(HEAP32[i66 >> 2] | 0) + 2240 >> 2] | 0) + 28 | 0] = 1;
       if (i278 << 16 >> 16 == 0) {
        i88 = 3807;
        break L110;
       }
       HEAP32[i79 >> 2] = 67;
       i73 = i2 + 58 | 0;
       i77 = HEAPU8[i73] | 0;
       do {
        if ((i77 & 2 | 0) == 0) {
         i76 = i2 + 68 | 0;
         i224 = i2 + (HEAP32[i76 + 4 >> 2] | 0) | 0;
         i218 = HEAP32[i76 >> 2] | 0;
         if ((i218 & 1 | 0) == 0) {
          i716 = i218;
         } else {
          i716 = HEAP32[(HEAP32[i224 >> 2] | 0) + (i218 - 1) >> 2] | 0;
         }
         FUNCTION_TABLE_vi[i716 & 15](i224);
        } else {
         i224 = (HEAP16[i80 >> 1] | 0) == 10 & i77;
         i218 = i2 + 8 | 0;
         i76 = HEAP32[i218 >> 2] | 0;
         i69 = i76 - 1 | 0;
         HEAP32[i218 >> 2] = i69;
         i218 = (i69 | 0) == 1;
         i69 = i2 + 4 | 0;
         i221 = (HEAP32[i69 >> 2] | 0) + 1 | 0;
         HEAP32[i69 >> 2] = i221;
         HEAP16[i80 >> 1] = HEAPU8[i221] | 0;
         if ((i218 & 1 | i224 | 0) == 0) {
          break;
         }
         if ((i224 | 0) != 0) {
          i224 = i2 + 32 | 0;
          HEAP32[i224 >> 2] = (HEAP32[i224 >> 2] | 0) + 1;
          i224 = HEAP32[i2 + 16 >> 2] | 0;
          if ((i224 | 0) == 0) {
           i717 = 0;
          } else {
           i717 = HEAP32[i224 + 4 >> 2] | 0;
          }
          HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i76) + i717;
         }
         if (!i218) {
          break;
         }
         __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
        }
       } while (0);
       if ((HEAP8[i82] & 1) != 0) {
        i88 = 3827;
        break L110;
       }
       i77 = HEAP16[i80 >> 1] | 0;
       HEAP16[i3 >> 1] = i77;
       if ((i77 & 65535) >>> 0 > 15 >>> 0) {
        HEAP8[i1 + 22 | 0] = 0;
        i155 = i77;
        i156 = i73;
        i88 = 4053;
        continue L110;
       }
       if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
        i88 = 3827;
        break L110;
       }
       i155 = HEAP16[i3 >> 1] | 0;
       i156 = i73;
       i88 = 4053;
       continue L110;
      }
     }
    } else if ((i88 | 0) == 4053) {
     i88 = 0;
     i718 = i2 + 68 | 0;
     i719 = i2;
     i720 = i1 + 22 | 0;
     i721 = i2 + 8 | 0;
     i722 = i2 + 4 | 0;
     i723 = i2 + 32 | 0;
     i724 = i2 + 24 | 0;
     i725 = i2 + 16 | 0;
     i726 = i2 + 28 | 0;
     i727 = i155;
     i88 = 4054;
     break;
    } else if ((i88 | 0) == 4115) {
     i88 = 0;
     if (i279 << 16 >> 16 != 93) {
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 93);
      HEAP32[i79 >> 2] = 68;
      i234 = i279;
      i235 = i280;
      i88 = 80;
      continue;
     }
     HEAP32[i79 >> 2] = 70;
     i77 = HEAPU8[i2 + 58 | 0] | 0;
     do {
      if ((i77 & 2 | 0) == 0) {
       i324 = i2 + 68 | 0;
       i218 = i2 + (HEAP32[i324 + 4 >> 2] | 0) | 0;
       i76 = HEAP32[i324 >> 2] | 0;
       if ((i76 & 1 | 0) == 0) {
        i728 = i76;
       } else {
        i728 = HEAP32[(HEAP32[i218 >> 2] | 0) + (i76 - 1) >> 2] | 0;
       }
       FUNCTION_TABLE_vi[i728 & 15](i218);
      } else {
       i218 = (HEAP16[i80 >> 1] | 0) == 10 & i77;
       i76 = i2 + 8 | 0;
       i324 = HEAP32[i76 >> 2] | 0;
       i224 = i324 - 1 | 0;
       HEAP32[i76 >> 2] = i224;
       i76 = (i224 | 0) == 1;
       i224 = i2 + 4 | 0;
       i221 = (HEAP32[i224 >> 2] | 0) + 1 | 0;
       HEAP32[i224 >> 2] = i221;
       HEAP16[i80 >> 1] = HEAPU8[i221] | 0;
       if ((i76 & 1 | i218 | 0) == 0) {
        break;
       }
       if ((i218 | 0) != 0) {
        i218 = i2 + 32 | 0;
        HEAP32[i218 >> 2] = (HEAP32[i218 >> 2] | 0) + 1;
        i218 = HEAP32[i2 + 16 >> 2] | 0;
        if ((i218 | 0) == 0) {
         i729 = 0;
        } else {
         i729 = HEAP32[i218 + 4 >> 2] | 0;
        }
        HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i324) + i729;
       }
       if (!i76) {
        break;
       }
       __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
      }
     } while (0);
     if ((HEAP8[i82] & 1) != 0) {
      i88 = 4133;
      break;
     }
     i77 = HEAP16[i80 >> 1] | 0;
     HEAP16[i3 >> 1] = i77;
     if ((i77 & 65535) >>> 0 > 15 >>> 0) {
      HEAP8[i1 + 22 | 0] = 0;
      i281 = i77;
      i282 = i280;
      i88 = 4135;
      continue;
     }
     if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
      i88 = 4133;
      break;
     }
     i281 = HEAP16[i3 >> 1] | 0;
     i282 = i280;
     i88 = 4135;
     continue;
    } else if ((i88 | 0) == 4135) {
     i88 = 0;
     if (i281 << 16 >> 16 != 62) {
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 93);
      __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 93);
      HEAP32[i79 >> 2] = 68;
      i234 = i281;
      i235 = i282;
      i88 = 80;
      continue;
     }
     HEAP32[i79 >> 2] = 0;
     i77 = HEAPU8[i2 + 58 | 0] | 0;
     do {
      if ((i77 & 2 | 0) == 0) {
       i73 = i2 + 68 | 0;
       i76 = i2 + (HEAP32[i73 + 4 >> 2] | 0) | 0;
       i324 = HEAP32[i73 >> 2] | 0;
       if ((i324 & 1 | 0) == 0) {
        i730 = i324;
       } else {
        i730 = HEAP32[(HEAP32[i76 >> 2] | 0) + (i324 - 1) >> 2] | 0;
       }
       FUNCTION_TABLE_vi[i730 & 15](i76);
      } else {
       i76 = (HEAP16[i80 >> 1] | 0) == 10 & i77;
       i324 = i2 + 8 | 0;
       i73 = HEAP32[i324 >> 2] | 0;
       i218 = i73 - 1 | 0;
       HEAP32[i324 >> 2] = i218;
       i324 = (i218 | 0) == 1;
       i218 = i2 + 4 | 0;
       i221 = (HEAP32[i218 >> 2] | 0) + 1 | 0;
       HEAP32[i218 >> 2] = i221;
       HEAP16[i80 >> 1] = HEAPU8[i221] | 0;
       if ((i324 & 1 | i76 | 0) == 0) {
        break;
       }
       if ((i76 | 0) != 0) {
        i76 = i2 + 32 | 0;
        HEAP32[i76 >> 2] = (HEAP32[i76 >> 2] | 0) + 1;
        i76 = HEAP32[i2 + 16 >> 2] | 0;
        if ((i76 | 0) == 0) {
         i731 = 0;
        } else {
         i731 = HEAP32[i76 + 4 >> 2] | 0;
        }
        HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i73) + i731;
       }
       if (!i324) {
        break;
       }
       __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
      }
     } while (0);
     if ((HEAP8[i82] & 1) != 0) {
      i88 = 4153;
      break;
     }
     i77 = HEAP16[i80 >> 1] | 0;
     HEAP16[i3 >> 1] = i77;
     if ((i77 & 65535) >>> 0 > 15 >>> 0) {
      HEAP8[i1 + 22 | 0] = 0;
      i232 = i77;
      i233 = i282;
      i88 = 79;
      continue;
     }
     if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
      i88 = 4153;
      break;
     }
     i232 = HEAP16[i3 >> 1] | 0;
     i233 = i282;
     i88 = 79;
     continue;
    } else if ((i88 | 0) == 4155) {
     i88 = 0;
     i83 = 0;
     i88 = 4423;
     break;
    }
   }
   if ((i88 | 0) == 114) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 133) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 134) {
    __ZN7WebCore13HTMLTokenizer13emitEndOfFileERNS_15SegmentedStringE(i1, i2) | 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 152) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 154) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 160) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 178) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 196) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 197) {
    __ZN7WebCore13HTMLTokenizer13emitEndOfFileERNS_15SegmentedStringE(i1, i2) | 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 215) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 217) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 223) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 242) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 243) {
    __ZN7WebCore13HTMLTokenizer13emitEndOfFileERNS_15SegmentedStringE(i1, i2) | 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 261) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 280) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 281) {
    __ZN7WebCore13HTMLTokenizer13emitEndOfFileERNS_15SegmentedStringE(i1, i2) | 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 299) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 337) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 355) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 374) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 393) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 425) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 454) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 473) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 494) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 512) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 513) {
    __ZN7WebCore13HTMLTokenizer15emitAndResumeInERNS_15SegmentedStringENS0_5StateE(i1, i2, 0) | 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 515) {
    i77 = HEAP32[i66 >> 2] | 0;
    if ((HEAP32[i77 >> 2] | 0) == 2) {
     __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEEaSILj256ES1_EERS2_RKNS0_ItXT_ET0_EE(i1 + 24 | 0, i77 + 16 | 0) | 0;
    }
    HEAP32[i79 >> 2] = 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 535) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 555) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 581) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 607) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 632) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 657) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 682) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 697) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 711) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 716) {
    HEAP8[i31] = 62;
    i77 = HEAP32[i184 >> 2] | 0;
    if ((i77 | 0) == (HEAP32[i185 >> 2] | 0)) {
     i324 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i183, i77 + 1 | 0, i31) | 0;
     HEAP8[(HEAP32[i367 >> 2] | 0) + (HEAP32[i184 >> 2] | 0) | 0] = HEAP8[i324] | 0;
    } else {
     HEAP8[(HEAP32[i367 >> 2] | 0) + i77 | 0] = 62;
    }
    HEAP32[i184 >> 2] = (HEAP32[i184 >> 2] | 0) + 1;
    HEAP32[i79 >> 2] = 0;
    __ZN7WebCore13HTMLTokenizer19flushBufferedEndTagERNS_15SegmentedStringE(i1, i2) | 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 723) {
    _WTFCrash();
    return 0;
   } else if ((i88 | 0) == 766) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 792) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 817) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 842) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 867) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 882) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 896) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 901) {
    HEAP8[i38] = 62;
    i77 = HEAP32[i190 >> 2] | 0;
    if ((i77 | 0) == (HEAP32[i191 >> 2] | 0)) {
     i324 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i189, i77 + 1 | 0, i38) | 0;
     HEAP8[(HEAP32[i353 >> 2] | 0) + (HEAP32[i190 >> 2] | 0) | 0] = HEAP8[i324] | 0;
    } else {
     HEAP8[(HEAP32[i353 >> 2] | 0) + i77 | 0] = 62;
    }
    HEAP32[i190 >> 2] = (HEAP32[i190 >> 2] | 0) + 1;
    HEAP32[i79 >> 2] = 0;
    __ZN7WebCore13HTMLTokenizer19flushBufferedEndTagERNS_15SegmentedStringE(i1, i2) | 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 908) {
    _WTFCrash();
    return 0;
   } else if ((i88 | 0) == 951) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 970) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 996) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1021) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1046) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1071) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1086) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1100) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1105) {
    HEAP8[i45] = 62;
    i77 = HEAP32[i196 >> 2] | 0;
    if ((i77 | 0) == (HEAP32[i197 >> 2] | 0)) {
     i324 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i195, i77 + 1 | 0, i45) | 0;
     HEAP8[(HEAP32[i341 >> 2] | 0) + (HEAP32[i196 >> 2] | 0) | 0] = HEAP8[i324] | 0;
    } else {
     HEAP8[(HEAP32[i341 >> 2] | 0) + i77 | 0] = 62;
    }
    HEAP32[i196 >> 2] = (HEAP32[i196 >> 2] | 0) + 1;
    HEAP32[i79 >> 2] = 0;
    __ZN7WebCore13HTMLTokenizer19flushBufferedEndTagERNS_15SegmentedStringE(i1, i2) | 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1112) {
    _WTFCrash();
    return 0;
   } else if ((i88 | 0) == 1148) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1168) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1188) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1206) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1225) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1244) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1262) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1281) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1300) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1318) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1336) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1355) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1381) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1411) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1441) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1467) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1492) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1517) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1542) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1557) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1571) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1576) {
    HEAP8[i54] = 62;
    i77 = HEAP32[i204 >> 2] | 0;
    if ((i77 | 0) == (HEAP32[i205 >> 2] | 0)) {
     i324 = __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i203, i77 + 1 | 0, i54) | 0;
     HEAP8[(HEAP32[i333 >> 2] | 0) + (HEAP32[i204 >> 2] | 0) | 0] = HEAP8[i324] | 0;
    } else {
     HEAP8[(HEAP32[i333 >> 2] | 0) + i77 | 0] = 62;
    }
    HEAP32[i204 >> 2] = (HEAP32[i204 >> 2] | 0) + 1;
    HEAP32[i79 >> 2] = 0;
    __ZN7WebCore13HTMLTokenizer19flushBufferedEndTagERNS_15SegmentedStringE(i1, i2) | 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1583) {
    _WTFCrash();
    return 0;
   } else if ((i88 | 0) == 1624) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1642) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1663) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1685) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1705) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1723) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1742) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1761) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1779) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1798) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1817) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1835) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1853) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1872) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1898) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1923) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1941) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1962) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 1984) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2004) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2022) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2023) {
    __ZN7WebCore13HTMLTokenizer15emitAndResumeInERNS_15SegmentedStringENS0_5StateE(i1, i2, 0) | 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2025) {
    i77 = HEAP32[i66 >> 2] | 0;
    if ((HEAP32[i77 >> 2] | 0) == 2) {
     __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEEaSILj256ES1_EERS2_RKNS0_ItXT_ET0_EE(i1 + 24 | 0, i77 + 16 | 0) | 0;
    }
    HEAP32[i79 >> 2] = 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2036) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else if ((i88 | 0) == 2058) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2068) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else if ((i88 | 0) == 2090) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2114) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2136) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2158) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2159) {
    i77 = HEAP32[i66 >> 2] | 0;
    if ((HEAP16[i2 >> 1] | 0) == 0) {
     i732 = 0;
    } else {
     i732 = (HEAP16[i2 + 2 >> 1] | 0) == 0 ? 1 : 2;
    }
    i324 = HEAP32[i100 >> 2] | 0;
    if ((i324 | 0) == 0) {
     i733 = 0;
    } else {
     i733 = HEAP32[i324 + 4 >> 2] | 0;
    }
    i324 = (HEAP32[i99 >> 2] | 0) - i732 + i733 - (HEAP32[i96 >> 2] | 0) - (HEAP32[i77 + 12 >> 2] | 0) | 0;
    i73 = i77 + 2236 | 0;
    HEAP32[(HEAP32[i73 >> 2] | 0) + 4 >> 2] = i324;
    HEAP32[(HEAP32[i73 >> 2] | 0) + 8 >> 2] = i324;
    HEAP32[(HEAP32[i73 >> 2] | 0) + 12 >> 2] = i324;
    __ZN7WebCore13HTMLTokenizer15emitAndResumeInERNS_15SegmentedStringENS0_5StateE(i1, i2, 0) | 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2165) {
    i324 = HEAP32[i66 >> 2] | 0;
    if ((HEAP16[i2 >> 1] | 0) == 0) {
     i734 = 0;
    } else {
     i734 = (HEAP16[i2 + 2 >> 1] | 0) == 0 ? 1 : 2;
    }
    i73 = HEAP32[i100 >> 2] | 0;
    if ((i73 | 0) == 0) {
     i735 = 0;
    } else {
     i735 = HEAP32[i73 + 4 >> 2] | 0;
    }
    i73 = (HEAP32[i99 >> 2] | 0) - i734 + i735 - (HEAP32[i96 >> 2] | 0) - (HEAP32[i324 + 12 >> 2] | 0) | 0;
    i77 = i324 + 2236 | 0;
    HEAP32[(HEAP32[i77 >> 2] | 0) + 4 >> 2] = i73;
    HEAP32[(HEAP32[i77 >> 2] | 0) + 8 >> 2] = i73;
    HEAP32[(HEAP32[i77 >> 2] | 0) + 12 >> 2] = i73;
    i73 = HEAP32[i66 >> 2] | 0;
    if ((HEAP32[i73 >> 2] | 0) == 2) {
     __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEEaSILj256ES1_EERS2_RKNS0_ItXT_ET0_EE(i1 + 24 | 0, i73 + 16 | 0) | 0;
    }
    HEAP32[i79 >> 2] = 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2189) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2213) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2232) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2250) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2268) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2269) {
    __ZN7WebCore13HTMLTokenizer15emitAndResumeInERNS_15SegmentedStringENS0_5StateE(i1, i2, 0) | 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2271) {
    i73 = HEAP32[i66 >> 2] | 0;
    if ((HEAP32[i73 >> 2] | 0) == 2) {
     __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEEaSILj256ES1_EERS2_RKNS0_ItXT_ET0_EE(i1 + 24 | 0, i73 + 16 | 0) | 0;
    }
    HEAP32[i79 >> 2] = 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2282) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else if ((i88 | 0) == 2304) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2314) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else if ((i88 | 0) == 2336) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2355) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2377) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2404) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2405) {
    __ZN7WebCore13HTMLTokenizer15emitAndResumeInERNS_15SegmentedStringENS0_5StateE(i1, i2, 0) | 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2428) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2451) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2469) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2492) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2515) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2533) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2556) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2579) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2597) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2598) {
    i73 = HEAP32[i66 >> 2] | 0;
    if ((HEAP16[i2 >> 1] | 0) == 0) {
     i736 = 0;
    } else {
     i736 = (HEAP16[i2 + 2 >> 1] | 0) == 0 ? 1 : 2;
    }
    i77 = HEAP32[i629 >> 2] | 0;
    if ((i77 | 0) == 0) {
     i737 = 0;
    } else {
     i737 = HEAP32[i77 + 4 >> 2] | 0;
    }
    HEAP32[(HEAP32[i73 + 2236 >> 2] | 0) + 12 >> 2] = (HEAP32[i628 >> 2] | 0) - i736 + i737 - (HEAP32[i627 >> 2] | 0) - (HEAP32[i73 + 12 >> 2] | 0);
    __ZN7WebCore13HTMLTokenizer15emitAndResumeInERNS_15SegmentedStringENS0_5StateE(i1, i2, 0) | 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2625) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2682) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2700) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2701) {
    __ZN7WebCore13HTMLTokenizer15emitAndResumeInERNS_15SegmentedStringENS0_5StateE(i1, i2, 0) | 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2703) {
    i73 = HEAP32[i66 >> 2] | 0;
    if ((HEAP32[i73 >> 2] | 0) == 2) {
     __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEEaSILj256ES1_EERS2_RKNS0_ItXT_ET0_EE(i1 + 24 | 0, i73 + 16 | 0) | 0;
    }
    HEAP32[i79 >> 2] = 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2710) {
    HEAP8[(HEAP32[i66 >> 2] | 0) + 542 | 0] = 1;
    __ZN7WebCore13HTMLTokenizer15emitAndResumeInERNS_15SegmentedStringENS0_5StateE(i1, i2, 0) | 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2715) {
    while (1) {
     i88 = 0;
     if ((i654 << 16 >> 16 | 0) == 62) {
      i88 = 2716;
      break;
     } else if ((i654 << 16 >> 16 | 0) == 0) {
      i88 = 2717;
      break;
     }
     __ZN7WebCore9HTMLToken15appendToCommentEt(HEAP32[i66 >> 2] | 0, i654);
     HEAP32[i79 >> 2] = 44;
     i73 = HEAPU8[i644] | 0;
     do {
      if ((i73 & 2 | 0) == 0) {
       i77 = i646 + (HEAP32[i645 + 4 >> 2] | 0) | 0;
       i324 = HEAP32[i645 >> 2] | 0;
       if ((i324 & 1 | 0) == 0) {
        i738 = i324;
       } else {
        i738 = HEAP32[(HEAP32[i77 >> 2] | 0) + (i324 - 1) >> 2] | 0;
       }
       FUNCTION_TABLE_vi[i738 & 15](i77);
      } else {
       i77 = (HEAP16[i80 >> 1] | 0) == 10 & i73;
       i324 = HEAP32[i648 >> 2] | 0;
       i76 = i324 - 1 | 0;
       HEAP32[i648 >> 2] = i76;
       i221 = (i76 | 0) == 1;
       i76 = (HEAP32[i649 >> 2] | 0) + 1 | 0;
       HEAP32[i649 >> 2] = i76;
       HEAP16[i80 >> 1] = HEAPU8[i76] | 0;
       if ((i221 & 1 | i77 | 0) == 0) {
        break;
       }
       if ((i77 | 0) != 0) {
        HEAP32[i650 >> 2] = (HEAP32[i650 >> 2] | 0) + 1;
        i77 = HEAP32[i652 >> 2] | 0;
        if ((i77 | 0) == 0) {
         i739 = 0;
        } else {
         i739 = HEAP32[i77 + 4 >> 2] | 0;
        }
        HEAP32[i653 >> 2] = (HEAP32[i651 >> 2] | 0) + (1 - i324) + i739;
       }
       if (!i221) {
        break;
       }
       __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
      }
     } while (0);
     if ((HEAP8[i82] & 1) != 0) {
      i88 = 2737;
      break;
     }
     i73 = HEAP16[i80 >> 1] | 0;
     HEAP16[i3 >> 1] = i73;
     if ((i73 & 65535) >>> 0 > 15 >>> 0) {
      HEAP8[i647] = 0;
      i654 = i73;
      i88 = 2715;
      continue;
     }
     if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
      i88 = 2737;
      break;
     }
     i654 = HEAP16[i3 >> 1] | 0;
     i88 = 2715;
    }
    if ((i88 | 0) == 2716) {
     __ZN7WebCore13HTMLTokenizer15emitAndResumeInERNS_15SegmentedStringENS0_5StateE(i1, i2, 0) | 0;
     i83 = 1;
     STACKTOP = i4;
     return i83 | 0;
    } else if ((i88 | 0) == 2717) {
     i73 = HEAP32[i66 >> 2] | 0;
     if ((HEAP32[i73 >> 2] | 0) == 2) {
      __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEEaSILj256ES1_EERS2_RKNS0_ItXT_ET0_EE(i1 + 24 | 0, i73 + 16 | 0) | 0;
     }
     HEAP32[i79 >> 2] = 0;
     i83 = 1;
     STACKTOP = i4;
     return i83 | 0;
    } else if ((i88 | 0) == 2737) {
     i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
     STACKTOP = i4;
     return i83 | 0;
    }
   } else if ((i88 | 0) == 2765) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2766) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2782) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2783) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2800) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2801) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2821) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2822) {
    __ZN7WebCore13HTMLTokenizer15emitAndResumeInERNS_15SegmentedStringENS0_5StateE(i1, i2, 0) | 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2823) {
    i73 = HEAP32[i66 >> 2] | 0;
    if ((HEAP32[i73 >> 2] | 0) == 2) {
     __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEEaSILj256ES1_EERS2_RKNS0_ItXT_ET0_EE(i1 + 24 | 0, i73 + 16 | 0) | 0;
    }
    HEAP32[i79 >> 2] = 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2843) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2862) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2863) {
    __ZN7WebCore13HTMLTokenizer15emitAndResumeInERNS_15SegmentedStringENS0_5StateE(i1, i2, 0) | 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2864) {
    i73 = HEAP32[i66 >> 2] | 0;
    if ((HEAP32[i73 >> 2] | 0) == 2) {
     __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEEaSILj256ES1_EERS2_RKNS0_ItXT_ET0_EE(i1 + 24 | 0, i73 + 16 | 0) | 0;
    }
    HEAP32[i79 >> 2] = 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2884) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2904) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2905) {
    i73 = HEAP32[i66 >> 2] | 0;
    if ((HEAP32[i73 >> 2] | 0) == 2) {
     __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEEaSILj256ES1_EERS2_RKNS0_ItXT_ET0_EE(i1 + 24 | 0, i73 + 16 | 0) | 0;
    }
    HEAP32[i79 >> 2] = 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2925) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2944) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2945) {
    i73 = HEAP32[i66 >> 2] | 0;
    if ((HEAP32[i73 >> 2] | 0) == 2) {
     __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEEaSILj256ES1_EERS2_RKNS0_ItXT_ET0_EE(i1 + 24 | 0, i73 + 16 | 0) | 0;
    }
    HEAP32[i79 >> 2] = 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2965) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2967) {
    __ZN7WebCore13HTMLTokenizer15emitAndResumeInERNS_15SegmentedStringENS0_5StateE(i1, i2, 0) | 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 2985) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3003) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3004) {
    i73 = HEAP32[i66 >> 2] | 0;
    if ((HEAP32[i73 >> 2] | 0) == 2) {
     __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEEaSILj256ES1_EERS2_RKNS0_ItXT_ET0_EE(i1 + 24 | 0, i73 + 16 | 0) | 0;
    }
    HEAP32[i79 >> 2] = 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3024) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3043) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3044) {
    __ZN7WebCore13HTMLTokenizer15emitAndResumeInERNS_15SegmentedStringENS0_5StateE(i1, i2, 0) | 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3045) {
    i73 = HEAP32[i66 >> 2] | 0;
    if ((HEAP32[i73 >> 2] | 0) == 2) {
     __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEEaSILj256ES1_EERS2_RKNS0_ItXT_ET0_EE(i1 + 24 | 0, i73 + 16 | 0) | 0;
    }
    HEAP32[i79 >> 2] = 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3065) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3084) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3085) {
    __ZN7WebCore9HTMLToken12beginDOCTYPEEv(HEAP32[i66 >> 2] | 0);
    HEAP8[(HEAP32[(HEAP32[i66 >> 2] | 0) + 2240 >> 2] | 0) + 28 | 0] = 1;
    i73 = HEAP32[i66 >> 2] | 0;
    if ((HEAP32[i73 >> 2] | 0) == 2) {
     __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEEaSILj256ES1_EERS2_RKNS0_ItXT_ET0_EE(i1 + 24 | 0, i73 + 16 | 0) | 0;
    }
    HEAP32[i79 >> 2] = 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3108) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3127) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3129) {
    __ZN7WebCore9HTMLToken12beginDOCTYPEEv(HEAP32[i66 >> 2] | 0);
    HEAP8[(HEAP32[(HEAP32[i66 >> 2] | 0) + 2240 >> 2] | 0) + 28 | 0] = 1;
    __ZN7WebCore13HTMLTokenizer15emitAndResumeInERNS_15SegmentedStringENS0_5StateE(i1, i2, 0) | 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3130) {
    __ZN7WebCore9HTMLToken12beginDOCTYPEEv(HEAP32[i66 >> 2] | 0);
    HEAP8[(HEAP32[(HEAP32[i66 >> 2] | 0) + 2240 >> 2] | 0) + 28 | 0] = 1;
    i73 = HEAP32[i66 >> 2] | 0;
    if ((HEAP32[i73 >> 2] | 0) == 2) {
     __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEEaSILj256ES1_EERS2_RKNS0_ItXT_ET0_EE(i1 + 24 | 0, i73 + 16 | 0) | 0;
    }
    HEAP32[i79 >> 2] = 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3150) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3170) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3171) {
    __ZN7WebCore13HTMLTokenizer15emitAndResumeInERNS_15SegmentedStringENS0_5StateE(i1, i2, 0) | 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3189) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3192) {
    HEAP8[(HEAP32[i689 + 2240 >> 2] | 0) + 28 | 0] = 1;
    i73 = HEAP32[i66 >> 2] | 0;
    if ((HEAP32[i73 >> 2] | 0) == 2) {
     __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEEaSILj256ES1_EERS2_RKNS0_ItXT_ET0_EE(i1 + 24 | 0, i73 + 16 | 0) | 0;
    }
    HEAP32[i79 >> 2] = 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3211) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3230) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3231) {
    __ZN7WebCore13HTMLTokenizer15emitAndResumeInERNS_15SegmentedStringENS0_5StateE(i1, i2, 0) | 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3232) {
    HEAP8[(HEAP32[(HEAP32[i66 >> 2] | 0) + 2240 >> 2] | 0) + 28 | 0] = 1;
    i73 = HEAP32[i66 >> 2] | 0;
    if ((HEAP32[i73 >> 2] | 0) == 2) {
     __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEEaSILj256ES1_EERS2_RKNS0_ItXT_ET0_EE(i1 + 24 | 0, i73 + 16 | 0) | 0;
    }
    HEAP32[i79 >> 2] = 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3255) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3256) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3272) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3273) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3291) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3310) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3333) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3356) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3357) {
    HEAP8[(HEAP32[(HEAP32[i66 >> 2] | 0) + 2240 >> 2] | 0) + 28 | 0] = 1;
    __ZN7WebCore13HTMLTokenizer15emitAndResumeInERNS_15SegmentedStringENS0_5StateE(i1, i2, 0) | 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3359) {
    i73 = HEAP32[i66 >> 2] | 0;
    if ((HEAP32[i73 >> 2] | 0) == 2) {
     __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEEaSILj256ES1_EERS2_RKNS0_ItXT_ET0_EE(i1 + 24 | 0, i73 + 16 | 0) | 0;
    }
    HEAP32[i79 >> 2] = 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3379) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3398) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3421) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3444) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3445) {
    HEAP8[(HEAP32[(HEAP32[i66 >> 2] | 0) + 2240 >> 2] | 0) + 28 | 0] = 1;
    __ZN7WebCore13HTMLTokenizer15emitAndResumeInERNS_15SegmentedStringENS0_5StateE(i1, i2, 0) | 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3447) {
    i73 = HEAP32[i66 >> 2] | 0;
    if ((HEAP32[i73 >> 2] | 0) == 2) {
     __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEEaSILj256ES1_EERS2_RKNS0_ItXT_ET0_EE(i1 + 24 | 0, i73 + 16 | 0) | 0;
    }
    HEAP32[i79 >> 2] = 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3467) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3486) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3487) {
    HEAP8[(HEAP32[(HEAP32[i66 >> 2] | 0) + 2240 >> 2] | 0) + 28 | 0] = 1;
    __ZN7WebCore13HTMLTokenizer15emitAndResumeInERNS_15SegmentedStringENS0_5StateE(i1, i2, 0) | 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3488) {
    HEAP8[(HEAP32[(HEAP32[i66 >> 2] | 0) + 2240 >> 2] | 0) + 28 | 0] = 1;
    i73 = HEAP32[i66 >> 2] | 0;
    if ((HEAP32[i73 >> 2] | 0) == 2) {
     __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEEaSILj256ES1_EERS2_RKNS0_ItXT_ET0_EE(i1 + 24 | 0, i73 + 16 | 0) | 0;
    }
    HEAP32[i79 >> 2] = 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3515) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3534) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3535) {
    HEAP8[(HEAP32[(HEAP32[i66 >> 2] | 0) + 2240 >> 2] | 0) + 28 | 0] = 1;
    __ZN7WebCore13HTMLTokenizer15emitAndResumeInERNS_15SegmentedStringENS0_5StateE(i1, i2, 0) | 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3536) {
    HEAP8[(HEAP32[(HEAP32[i66 >> 2] | 0) + 2240 >> 2] | 0) + 28 | 0] = 1;
    i73 = HEAP32[i66 >> 2] | 0;
    if ((HEAP32[i73 >> 2] | 0) == 2) {
     __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEEaSILj256ES1_EERS2_RKNS0_ItXT_ET0_EE(i1 + 24 | 0, i73 + 16 | 0) | 0;
    }
    HEAP32[i79 >> 2] = 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3563) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3582) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3583) {
    __ZN7WebCore13HTMLTokenizer15emitAndResumeInERNS_15SegmentedStringENS0_5StateE(i1, i2, 0) | 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3606) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3629) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3631) {
    i73 = HEAP32[i66 >> 2] | 0;
    if ((HEAP32[i73 >> 2] | 0) == 2) {
     __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEEaSILj256ES1_EERS2_RKNS0_ItXT_ET0_EE(i1 + 24 | 0, i73 + 16 | 0) | 0;
    }
    HEAP32[i79 >> 2] = 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3651) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3670) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3671) {
    __ZN7WebCore13HTMLTokenizer15emitAndResumeInERNS_15SegmentedStringENS0_5StateE(i1, i2, 0) | 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3694) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3717) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3719) {
    i73 = HEAP32[i66 >> 2] | 0;
    if ((HEAP32[i73 >> 2] | 0) == 2) {
     __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEEaSILj256ES1_EERS2_RKNS0_ItXT_ET0_EE(i1 + 24 | 0, i73 + 16 | 0) | 0;
    }
    HEAP32[i79 >> 2] = 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3739) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3758) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3781) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3804) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3805) {
    HEAP8[(HEAP32[(HEAP32[i66 >> 2] | 0) + 2240 >> 2] | 0) + 28 | 0] = 1;
    __ZN7WebCore13HTMLTokenizer15emitAndResumeInERNS_15SegmentedStringENS0_5StateE(i1, i2, 0) | 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3807) {
    i73 = HEAP32[i66 >> 2] | 0;
    if ((HEAP32[i73 >> 2] | 0) == 2) {
     __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEEaSILj256ES1_EERS2_RKNS0_ItXT_ET0_EE(i1 + 24 | 0, i73 + 16 | 0) | 0;
    }
    HEAP32[i79 >> 2] = 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3827) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3846) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3869) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3892) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3893) {
    HEAP8[(HEAP32[(HEAP32[i66 >> 2] | 0) + 2240 >> 2] | 0) + 28 | 0] = 1;
    __ZN7WebCore13HTMLTokenizer15emitAndResumeInERNS_15SegmentedStringENS0_5StateE(i1, i2, 0) | 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3895) {
    i73 = HEAP32[i66 >> 2] | 0;
    if ((HEAP32[i73 >> 2] | 0) == 2) {
     __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEEaSILj256ES1_EERS2_RKNS0_ItXT_ET0_EE(i1 + 24 | 0, i73 + 16 | 0) | 0;
    }
    HEAP32[i79 >> 2] = 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3915) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3934) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3935) {
    HEAP8[(HEAP32[(HEAP32[i66 >> 2] | 0) + 2240 >> 2] | 0) + 28 | 0] = 1;
    __ZN7WebCore13HTMLTokenizer15emitAndResumeInERNS_15SegmentedStringENS0_5StateE(i1, i2, 0) | 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3936) {
    HEAP8[(HEAP32[(HEAP32[i66 >> 2] | 0) + 2240 >> 2] | 0) + 28 | 0] = 1;
    i73 = HEAP32[i66 >> 2] | 0;
    if ((HEAP32[i73 >> 2] | 0) == 2) {
     __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEEaSILj256ES1_EERS2_RKNS0_ItXT_ET0_EE(i1 + 24 | 0, i73 + 16 | 0) | 0;
    }
    HEAP32[i79 >> 2] = 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3963) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3982) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3983) {
    HEAP8[(HEAP32[(HEAP32[i66 >> 2] | 0) + 2240 >> 2] | 0) + 28 | 0] = 1;
    __ZN7WebCore13HTMLTokenizer15emitAndResumeInERNS_15SegmentedStringENS0_5StateE(i1, i2, 0) | 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 3984) {
    HEAP8[(HEAP32[(HEAP32[i66 >> 2] | 0) + 2240 >> 2] | 0) + 28 | 0] = 1;
    i73 = HEAP32[i66 >> 2] | 0;
    if ((HEAP32[i73 >> 2] | 0) == 2) {
     __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEEaSILj256ES1_EERS2_RKNS0_ItXT_ET0_EE(i1 + 24 | 0, i73 + 16 | 0) | 0;
    }
    HEAP32[i79 >> 2] = 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 4011) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 4030) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 4031) {
    __ZN7WebCore13HTMLTokenizer15emitAndResumeInERNS_15SegmentedStringENS0_5StateE(i1, i2, 0) | 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 4032) {
    HEAP8[(HEAP32[(HEAP32[i66 >> 2] | 0) + 2240 >> 2] | 0) + 28 | 0] = 1;
    i73 = HEAP32[i66 >> 2] | 0;
    if ((HEAP32[i73 >> 2] | 0) == 2) {
     __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEEaSILj256ES1_EERS2_RKNS0_ItXT_ET0_EE(i1 + 24 | 0, i73 + 16 | 0) | 0;
    }
    HEAP32[i79 >> 2] = 0;
    i83 = 1;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 4052) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 4054) {
    while (1) {
     i88 = 0;
     if ((i727 << 16 >> 16 | 0) == 62) {
      i88 = 4055;
      break;
     } else if ((i727 << 16 >> 16 | 0) == 0) {
      i88 = 4056;
      break;
     }
     HEAP32[i79 >> 2] = 67;
     i73 = HEAPU8[i156] | 0;
     do {
      if ((i73 & 2 | 0) == 0) {
       i221 = i719 + (HEAP32[i718 + 4 >> 2] | 0) | 0;
       i324 = HEAP32[i718 >> 2] | 0;
       if ((i324 & 1 | 0) == 0) {
        i740 = i324;
       } else {
        i740 = HEAP32[(HEAP32[i221 >> 2] | 0) + (i324 - 1) >> 2] | 0;
       }
       FUNCTION_TABLE_vi[i740 & 15](i221);
      } else {
       i221 = (HEAP16[i80 >> 1] | 0) == 10 & i73;
       i324 = HEAP32[i721 >> 2] | 0;
       i77 = i324 - 1 | 0;
       HEAP32[i721 >> 2] = i77;
       i76 = (i77 | 0) == 1;
       i77 = (HEAP32[i722 >> 2] | 0) + 1 | 0;
       HEAP32[i722 >> 2] = i77;
       HEAP16[i80 >> 1] = HEAPU8[i77] | 0;
       if ((i76 & 1 | i221 | 0) == 0) {
        break;
       }
       if ((i221 | 0) != 0) {
        HEAP32[i723 >> 2] = (HEAP32[i723 >> 2] | 0) + 1;
        i221 = HEAP32[i725 >> 2] | 0;
        if ((i221 | 0) == 0) {
         i741 = 0;
        } else {
         i741 = HEAP32[i221 + 4 >> 2] | 0;
        }
        HEAP32[i726 >> 2] = (HEAP32[i724 >> 2] | 0) + (1 - i324) + i741;
       }
       if (!i76) {
        break;
       }
       __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
      }
     } while (0);
     if ((HEAP8[i82] & 1) != 0) {
      i88 = 4076;
      break;
     }
     i73 = HEAP16[i80 >> 1] | 0;
     HEAP16[i3 >> 1] = i73;
     if ((i73 & 65535) >>> 0 > 15 >>> 0) {
      HEAP8[i720] = 0;
      i727 = i73;
      i88 = 4054;
      continue;
     }
     if (!(__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i81, i2) | 0)) {
      i88 = 4076;
      break;
     }
     i727 = HEAP16[i3 >> 1] | 0;
     i88 = 4054;
    }
    if ((i88 | 0) == 4055) {
     __ZN7WebCore13HTMLTokenizer15emitAndResumeInERNS_15SegmentedStringENS0_5StateE(i1, i2, 0) | 0;
     i83 = 1;
     STACKTOP = i4;
     return i83 | 0;
    } else if ((i88 | 0) == 4056) {
     i3 = HEAP32[i66 >> 2] | 0;
     if ((HEAP32[i3 >> 2] | 0) == 2) {
      __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEEaSILj256ES1_EERS2_RKNS0_ItXT_ET0_EE(i1 + 24 | 0, i3 + 16 | 0) | 0;
     }
     HEAP32[i79 >> 2] = 0;
     i83 = 1;
     STACKTOP = i4;
     return i83 | 0;
    } else if ((i88 | 0) == 4076) {
     i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
     STACKTOP = i4;
     return i83 | 0;
    }
   } else if ((i88 | 0) == 4095) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 4114) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 4133) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 4153) {
    i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 4160) {
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 4198) {
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 4200) {
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 4208) {
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 4210) {
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 4219) {
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 4221) {
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 4243) {
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 4245) {
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 4302) {
    STACKTOP = i4;
    return i83 | 0;
   } else if ((i88 | 0) == 4423) {
    STACKTOP = i4;
    return i83 | 0;
   }
  }
 } while (0);
 i83 = (HEAP32[HEAP32[i66 >> 2] >> 2] | 0) == 5;
 STACKTOP = i4;
 return i83 | 0;
}
function __ZN7WebCore13HTMLTokenizer19flushBufferedEndTagERNS_15SegmentedStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = HEAPU8[i2 + 58 | 0] | 0;
 do {
  if ((i3 & 2 | 0) == 0) {
   i4 = i2 + 68 | 0;
   i5 = i2 + (HEAP32[i4 + 4 >> 2] | 0) | 0;
   i6 = HEAP32[i4 >> 2] | 0;
   if ((i6 & 1 | 0) == 0) {
    i7 = i6;
   } else {
    i7 = HEAP32[(HEAP32[i5 >> 2] | 0) + (i6 - 1) >> 2] | 0;
   }
   FUNCTION_TABLE_vi[i7 & 15](i5);
  } else {
   i5 = i2 + 20 | 0;
   i6 = (HEAP16[i5 >> 1] | 0) == 10 & i3;
   i4 = i2 + 8 | 0;
   i8 = HEAP32[i4 >> 2] | 0;
   i9 = i8 - 1 | 0;
   HEAP32[i4 >> 2] = i9;
   i4 = (i9 | 0) == 1;
   i9 = i2 + 4 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) + 1 | 0;
   HEAP32[i9 >> 2] = i10;
   HEAP16[i5 >> 1] = HEAPU8[i10] | 0;
   if ((i4 & 1 | i6 | 0) == 0) {
    break;
   }
   if ((i6 | 0) != 0) {
    i6 = i2 + 32 | 0;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
    i6 = HEAP32[i2 + 16 >> 2] | 0;
    if ((i6 | 0) == 0) {
     i11 = 0;
    } else {
     i11 = HEAP32[i6 + 4 >> 2] | 0;
    }
    HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i8) + i11;
   }
   if (!i4) {
    break;
   }
   __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 i11 = i2 | 0;
 if ((HEAP32[i11 >> 2] | 0) == 5) {
  i12 = 1;
  return i12 | 0;
 }
 HEAP32[i11 >> 2] = 3;
 HEAP8[i2 + 542 | 0] = 0;
 HEAP32[i2 + 2236 >> 2] = 0;
 __ZN3WTF6VectorIN7WebCore9HTMLToken9AttributeELj10ENS_15CrashOnOverflowEE5clearEv(i2 + 544 | 0);
 i11 = i2 + 16 | 0;
 i3 = i1 + 144 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i4 = i1 + 152 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 i6 = i2 + 24 | 0;
 i10 = HEAP32[i6 >> 2] | 0;
 i5 = i10 + i8 | 0;
 i9 = HEAP32[i2 + 20 >> 2] | 0;
 if (i5 >>> 0 > i9 >>> 0) {
  i2 = i9 + 1 + (i9 >>> 2) | 0;
  i9 = i2 >>> 0 > 16 >>> 0 ? i2 : 16;
  __ZN3WTF6VectorItLj256ENS_15CrashOnOverflowEE15reserveCapacityEj(i11, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
  i13 = HEAP32[i6 >> 2] | 0;
 } else {
  i13 = i10;
 }
 if (i5 >>> 0 < i13 >>> 0) {
  _WTFCrash();
  return 0;
 }
 i10 = HEAP32[i11 >> 2] | 0;
 if ((i8 | 0) != 0) {
  i11 = 0;
  while (1) {
   HEAP16[i10 + (i11 + i13 << 1) >> 1] = HEAPU8[i7 + i11 | 0] | 0;
   i11 = i11 + 1 | 0;
   if (i11 >>> 0 >= i8 >>> 0) {
    break;
   }
  }
 }
 HEAP32[i6 >> 2] = i5;
 i5 = i1 + 148 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) != 0) {
   if ((HEAP32[i4 >> 2] | 0) != 0) {
    HEAP32[i4 >> 2] = 0;
   }
   i6 = HEAP32[i3 >> 2] | 0;
   i8 = i1 + 156 | 0;
   if ((i8 | 0) == (i6 | 0) | (i6 | 0) == 0) {
    i14 = i6;
   } else {
    HEAP32[i3 >> 2] = 0;
    HEAP32[i5 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i6);
    i14 = HEAP32[i3 >> 2] | 0;
   }
   if ((i14 | 0) != 0) {
    break;
   }
   HEAP32[i3 >> 2] = i8;
   HEAP32[i5 >> 2] = 32;
  }
 } while (0);
 i5 = i1 + 28 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) != 0) {
   i3 = i1 + 32 | 0;
   if ((HEAP32[i3 >> 2] | 0) != 0) {
    HEAP32[i3 >> 2] = 0;
   }
   i3 = i1 + 24 | 0;
   i14 = HEAP32[i3 >> 2] | 0;
   i4 = i1 + 36 | 0;
   if ((i4 | 0) == (i14 | 0) | (i14 | 0) == 0) {
    i15 = i14;
   } else {
    HEAP32[i3 >> 2] = 0;
    HEAP32[i5 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i14);
    i15 = HEAP32[i3 >> 2] | 0;
   }
   if ((i15 | 0) != 0) {
    break;
   }
   HEAP32[i3 >> 2] = i4;
   HEAP32[i5 >> 2] = 32;
  }
 } while (0);
 i5 = i1 + 104 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  i12 = 0;
  return i12 | 0;
 }
 i15 = i1 + 108 | 0;
 if ((HEAP32[i15 >> 2] | 0) != 0) {
  HEAP32[i15 >> 2] = 0;
 }
 i15 = i1 + 100 | 0;
 i4 = HEAP32[i15 >> 2] | 0;
 i3 = i1 + 112 | 0;
 if ((i3 | 0) == (i4 | 0) | (i4 | 0) == 0) {
  i16 = i4;
 } else {
  HEAP32[i15 >> 2] = 0;
  HEAP32[i5 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
  i16 = HEAP32[i15 >> 2] | 0;
 }
 if ((i16 | 0) != 0) {
  i12 = 0;
  return i12 | 0;
 }
 HEAP32[i15 >> 2] = i3;
 HEAP32[i5 >> 2] = 32;
 i12 = 0;
 return i12 | 0;
}
function __ZNK7WebCore13HTMLTokenizer18bufferedCharactersEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i6 + 4 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i6 + 8 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i6 + 12 | 0;
 HEAP8[i10] = 1;
 HEAP32[i6 + 16 >> 2] = 0;
 i11 = i6 + 20 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i2 + 108 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 __ZN3WTF13StringBuilder15reserveCapacityEj(i6, (i13 | 0) == 0 ? 0 : i13 + 2 | 0);
 HEAP8[i5] = 60;
 i13 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i13 | 0) == 0) {
   i14 = 7;
  } else {
   i15 = HEAP32[i7 >> 2] | 0;
   if (i15 >>> 0 >= (HEAP32[i13 + 4 >> 2] | 0) >>> 0) {
    i14 = 7;
    break;
   }
   if ((HEAP32[i8 >> 2] | 0) != 0) {
    i14 = 7;
    break;
   }
   i16 = (HEAP8[i10] & 1) == 0;
   HEAP32[i7 >> 2] = i15 + 1;
   if (i16) {
    HEAP16[(HEAP32[i6 + 20 >> 2] | 0) + (i15 << 1) >> 1] = 60;
    break;
   } else {
    HEAP8[(HEAP32[i11 >> 2] | 0) + i15 | 0] = 60;
    break;
   }
  }
 } while (0);
 if ((i14 | 0) == 7) {
  __ZN3WTF13StringBuilder6appendEPKhj(i6, i5, 1);
 }
 HEAP8[i4] = 47;
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i14 = 14;
  } else {
   i13 = HEAP32[i7 >> 2] | 0;
   if (i13 >>> 0 >= (HEAP32[i5 + 4 >> 2] | 0) >>> 0) {
    i14 = 14;
    break;
   }
   if ((HEAP32[i8 >> 2] | 0) != 0) {
    i14 = 14;
    break;
   }
   i15 = (HEAP8[i10] & 1) == 0;
   HEAP32[i7 >> 2] = i13 + 1;
   if (i15) {
    HEAP16[(HEAP32[i6 + 20 >> 2] | 0) + (i13 << 1) >> 1] = 47;
    break;
   } else {
    HEAP8[(HEAP32[i11 >> 2] | 0) + i13 | 0] = 47;
    break;
   }
  }
 } while (0);
 if ((i14 | 0) == 14) {
  __ZN3WTF13StringBuilder6appendEPKhj(i6, i4, 1);
 }
 __ZN3WTF13StringBuilder6appendEPKhj(i6, HEAP32[i2 + 100 >> 2] | 0, HEAP32[i12 >> 2] | 0);
 __ZN3WTF13StringBuilder11shrinkToFitEv(i6);
 i12 = HEAP32[i8 >> 2] | 0;
 if ((i12 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i6);
  i6 = HEAP32[i8 >> 2] | 0;
  HEAP32[i1 >> 2] = i6;
  if ((i6 | 0) != 0) {
   i17 = i6;
   i14 = 18;
  }
 } else {
  HEAP32[i1 >> 2] = i12;
  i17 = i12;
  i14 = 18;
 }
 if ((i14 | 0) == 18) {
  i14 = i17 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
 }
 i14 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i9 = i14 | 0;
   i17 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i9 >> 2] = i17;
    break;
   }
  }
 } while (0);
 i14 = HEAP32[i8 >> 2] | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i14 | 0;
 i17 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i17 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i14);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i8 >> 2] = i17;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore15SegmentedStringC2ERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = i1 | 0;
 HEAP16[i3 >> 1] = 0;
 HEAP16[i1 + 2 >> 1] = 0;
 i4 = i1 + 4 | 0;
 i5 = i1 + 8 | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
 }
 HEAP32[i5 >> 2] = i7;
 i2 = i1 + 12 | 0;
 HEAP8[i2] = 1;
 i8 = i1 + 16 | 0;
 i9 = HEAP32[i6 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 if ((i9 | 0) == 0) {
  i10 = i7;
 } else {
  i7 = i9 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  i10 = HEAP32[i5 >> 2] | 0;
 }
 i5 = (i10 | 0) == 0;
 do {
  if (i5) {
   HEAP8[i1 + 13 | 0] = 0;
   i11 = 0;
  } else {
   i7 = HEAP32[i8 >> 2] | 0;
   i9 = i1 + 13 | 0;
   if ((HEAP32[i7 + 16 >> 2] & 32 | 0) == 0) {
    HEAP8[i9] = 0;
    if ((i7 | 0) == 0) {
     i12 = 0;
    } else {
     i12 = HEAP32[i7 + 8 >> 2] | 0;
    }
    HEAP32[i4 >> 2] = i12;
    i11 = 0;
    break;
   } else {
    HEAP8[i9] = 1;
    if ((i7 | 0) == 0) {
     i13 = 0;
    } else {
     i13 = HEAP32[i7 + 8 >> 2] | 0;
    }
    HEAP32[i4 >> 2] = i13;
    i11 = 1;
    break;
   }
  }
 } while (0);
 i13 = i1 + 20 | 0;
 HEAP16[i13 >> 1] = 0;
 _memset(i1 + 24 | 0, 0, 33) | 0;
 i12 = HEAP32[i6 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i14 = 1;
 } else {
  i14 = (HEAP32[i12 + 4 >> 2] | 0) == 0 | 0;
 }
 HEAP8[i1 + 57 | 0] = i14;
 i14 = i1 + 58 | 0;
 HEAP8[i14] = 0;
 do {
  if (i5) {
   i12 = i1 + 60 | 0;
   HEAP32[i12 >> 2] = F_BASE_vi + 2;
   HEAP32[i12 + 4 >> 2] = 0;
   HEAP8[i14] = 0;
   i12 = i1 + 68 | 0;
   HEAP32[i12 >> 2] = F_BASE_vi + 2;
   HEAP32[i12 + 4 >> 2] = 0;
  } else {
   i12 = i11 << 24 >> 24 == 0;
   do {
    if (i12) {
     i6 = HEAP32[i4 >> 2] | 0;
     if ((i6 | 0) == 0) {
      i15 = 0;
      break;
     }
     i15 = HEAP16[i6 >> 1] | 0;
    } else {
     i15 = HEAPU8[HEAP32[i4 >> 2] | 0] | 0;
    }
   } while (0);
   HEAP16[i13 >> 1] = i15;
   if ((i10 | 0) <= 1) {
    break;
   }
   if ((HEAP16[i3 >> 1] | 0) != 0) {
    break;
   }
   i6 = i1 + 60 | 0;
   if (i12) {
    HEAP32[i6 >> 2] = F_BASE_vi + 12;
    HEAP32[i6 + 4 >> 2] = 0;
    HEAP8[i14] = 0;
    i8 = i1 + 68 | 0;
    if ((HEAP8[i2] & 1) == 0) {
     HEAP32[i8 >> 2] = F_BASE_vi + 12;
     HEAP32[i8 + 4 >> 2] = 0;
     return;
    } else {
     HEAP32[i8 >> 2] = F_BASE_vi + 8;
     HEAP32[i8 + 4 >> 2] = 0;
     return;
    }
   } else {
    HEAP32[i6 >> 2] = F_BASE_vi + 4;
    HEAP32[i6 + 4 >> 2] = 0;
    HEAP8[i14] = 2;
    i6 = i1 + 68 | 0;
    if ((HEAP8[i2] & 1) == 0) {
     HEAP32[i6 >> 2] = F_BASE_vi + 4;
     HEAP32[i6 + 4 >> 2] = 0;
     return;
    } else {
     HEAP32[i6 >> 2] = F_BASE_vi + 10;
     HEAP32[i6 + 4 >> 2] = 0;
     HEAP8[i14] = 3;
     return;
    }
   }
  }
 } while (0);
 __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i1);
 return;
}
function __ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = i1 + 4 | 0;
 i4 = i1 + 6 | 0;
 i5 = i2 + 57 | 0;
 i6 = i2 + 20 | 0;
 i7 = i2 + 56 | 0;
 i8 = i1 | 0;
 i1 = i2 + 58 | 0;
 i9 = i2 + 60 | 0;
 i10 = i2;
 i11 = i2 + 8 | 0;
 i12 = i2 + 4 | 0;
 i13 = HEAP16[i3 >> 1] | 0;
 while (1) {
  if (i13 << 16 >> 16 == 10) {
   i14 = (HEAP8[i4] & 1) == 0;
   HEAP8[i4] = 0;
   if (i14) {
    i15 = 1;
    i16 = 24;
    break;
   }
   __ZN7WebCore15SegmentedString37advancePastNewlineAndUpdateLineNumberEv(i2);
   if ((HEAP8[i5] & 1) != 0) {
    i15 = 0;
    i16 = 25;
    break;
   }
   i14 = HEAP16[i6 >> 1] | 0;
   HEAP16[i3 >> 1] = i14;
   i17 = i14;
  } else {
   i17 = i13;
  }
  if (i17 << 16 >> 16 == 13) {
   i16 = 7;
   break;
  }
  HEAP8[i4] = 0;
  if (i17 << 16 >> 16 != 0) {
   i15 = 1;
   i16 = 27;
   break;
  }
  if ((HEAP8[i7] & 1) != 0) {
   if ((__ZNK7WebCore15SegmentedString6lengthEv(i2) | 0) == 1) {
    i15 = 1;
    i16 = 28;
    break;
   }
  }
  i14 = HEAP32[i8 >> 2] | 0;
  if ((HEAP8[i14 + 4 | 0] & 1) != 0) {
   i16 = 22;
   break;
  }
  i18 = HEAP32[i14 >> 2] | 0;
  if (!((i18 | 0) == 0 | (i18 | 0) == 2 | (i18 | 0) == 4)) {
   i16 = 22;
   break;
  }
  do {
   if ((HEAP8[i1] & 2) == 0) {
    i18 = i10 + (HEAP32[i9 + 4 >> 2] | 0) | 0;
    i14 = HEAP32[i9 >> 2] | 0;
    if ((i14 & 1 | 0) == 0) {
     i19 = i14;
    } else {
     i19 = HEAP32[(HEAP32[i18 >> 2] | 0) + (i14 - 1) >> 2] | 0;
    }
    FUNCTION_TABLE_vi[i19 & 15](i18);
   } else {
    i18 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
    HEAP32[i11 >> 2] = i18;
    i14 = (HEAP32[i12 >> 2] | 0) + 1 | 0;
    HEAP32[i12 >> 2] = i14;
    HEAP16[i6 >> 1] = HEAPU8[i14] | 0;
    if ((i18 | 0) != 1) {
     break;
    }
    __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
   }
  } while (0);
  if ((HEAP8[i5] & 1) != 0) {
   i15 = 0;
   i16 = 29;
   break;
  }
  i18 = HEAP16[i6 >> 1] | 0;
  HEAP16[i3 >> 1] = i18;
  i13 = i18;
 }
 if ((i16 | 0) == 24) {
  return i15 | 0;
 } else if ((i16 | 0) == 25) {
  return i15 | 0;
 } else if ((i16 | 0) == 27) {
  return i15 | 0;
 } else if ((i16 | 0) == 28) {
  return i15 | 0;
 } else if ((i16 | 0) == 7) {
  HEAP16[i3 >> 1] = 10;
  HEAP8[i4] = 1;
  i15 = 1;
  return i15 | 0;
 } else if ((i16 | 0) == 22) {
  HEAP16[i3 >> 1] = -3;
  i15 = 1;
  return i15 | 0;
 } else if ((i16 | 0) == 29) {
  return i15 | 0;
 }
 return 0;
}
function __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEE4swapERS2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = i1 + 8 | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i5;
 i5 = i1 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 i3 = i1 + 12 | 0;
 i6 = i2 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i2 + 12 | 0;
 i9 = (i7 | 0) == (i8 | 0);
 if ((i4 | 0) != (i3 | 0)) {
  if (!i9) {
   HEAP32[i5 >> 2] = i7;
   HEAP32[i6 >> 2] = i4;
   i10 = i1 + 4 | 0;
   i11 = i2 + 4 | 0;
   i12 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i11 >> 2] = i12;
   return;
  }
  HEAP32[i6 >> 2] = i4;
  HEAP32[i5 >> 2] = i3;
  i3 = i1 + 76 | 0;
  i4 = i2 + 12 | 0;
  i12 = i1 + 12 | 0;
  while (1) {
   i11 = i12;
   i10 = HEAP16[i11 >> 1] | 0;
   i13 = i4;
   HEAP16[i11 >> 1] = HEAP16[i13 >> 1] | 0;
   HEAP16[i13 >> 1] = i10;
   i10 = i12 + 2 | 0;
   if ((i10 | 0) == (i3 | 0)) {
    break;
   } else {
    i4 = i4 + 2 | 0;
    i12 = i10;
   }
  }
  i12 = i1 + 4 | 0;
  i4 = i2 + 4 | 0;
  i3 = HEAP32[i12 >> 2] | 0;
  HEAP32[i12 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i4 >> 2] = i3;
  return;
 }
 if (i9) {
  i9 = i1 + 76 | 0;
  i3 = i1 + 12 | 0;
  i4 = i2 + 12 | 0;
  while (1) {
   i12 = i3;
   i10 = HEAP16[i12 >> 1] | 0;
   i13 = i4;
   HEAP16[i12 >> 1] = HEAP16[i13 >> 1] | 0;
   HEAP16[i13 >> 1] = i10;
   i10 = i3 + 2 | 0;
   if ((i10 | 0) == (i9 | 0)) {
    break;
   } else {
    i3 = i10;
    i4 = i4 + 2 | 0;
   }
  }
  i4 = i1 + 4 | 0;
  i3 = i2 + 4 | 0;
  i9 = HEAP32[i4 >> 2] | 0;
  HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
  HEAP32[i3 >> 2] = i9;
  return;
 } else {
  HEAP32[i5 >> 2] = i7;
  HEAP32[i6 >> 2] = i8;
  i8 = i1 + 76 | 0;
  i6 = i2 + 12 | 0;
  i7 = i1 + 12 | 0;
  while (1) {
   i5 = i7;
   i9 = HEAP16[i5 >> 1] | 0;
   i3 = i6;
   HEAP16[i5 >> 1] = HEAP16[i3 >> 1] | 0;
   HEAP16[i3 >> 1] = i9;
   i9 = i7 + 2 | 0;
   if ((i9 | 0) == (i8 | 0)) {
    break;
   } else {
    i6 = i6 + 2 | 0;
    i7 = i9;
   }
  }
  i7 = i1 + 4 | 0;
  i1 = i2 + 4 | 0;
  i2 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = HEAP32[i1 >> 2];
  HEAP32[i1 >> 2] = i2;
  return;
 }
}
function __ZN7WebCore15SegmentedString17lookAheadSlowCaseERKN3WTF6StringEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   __ZNK7WebCore15SegmentedString6lengthEv(i1) | 0;
   i9 = 0;
  } else {
   i10 = HEAP32[i2 + 4 >> 2] | 0;
   if (i10 >>> 0 > (__ZNK7WebCore15SegmentedString6lengthEv(i1) | 0) >>> 0) {
    i11 = 2;
   } else {
    i9 = i10;
    break;
   }
   STACKTOP = i4;
   return i11 | 0;
  }
 } while (0);
 __ZN3WTF10StringImpl19createUninitializedEjRPt(i6, i9, i5);
 __ZN7WebCore15SegmentedString7advanceEjPt(i1, i9, HEAP32[i5 >> 2] | 0);
 i5 = i6 | 0;
 i9 = HEAP32[i5 >> 2] | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   if ((i2 | 0) == 0) {
    i12 = 1;
    break;
   }
   i12 = (HEAP32[i2 + 4 >> 2] | 0) == 0;
  } else {
   if (i3) {
    i12 = __ZNK3WTF10StringImpl10startsWithEPKS0_(i9, i2) | 0;
    break;
   } else {
    i12 = (__ZN3WTF10StringImpl23reverseFindIgnoringCaseEPS0_j(i9, i2, 0) | 0) == 0;
    break;
   }
  }
 } while (0);
 i2 = i12 & 1;
 __ZN7WebCore15SegmentedStringC2ERKN3WTF6StringE(i7, i6);
 __ZN7WebCore15SegmentedString7prependERKS0_(i1, i7);
 __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv(i7 + 36 | 0);
 i1 = i7 + 44 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i7 + 48 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i6);
 }
 i6 = HEAP32[i7 + 16 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i11 = i2;
  STACKTOP = i4;
  return i11 | 0;
 }
 i5 = i6 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  i11 = i2;
  STACKTOP = i4;
  return i11 | 0;
 } else {
  HEAP32[i5 >> 2] = i1;
  i11 = i2;
  STACKTOP = i4;
  return i11 | 0;
 }
 return 0;
}
function __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if (i5 >>> 0 <= i3 >>> 0) {
   i6 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i5 + i6 | 0) >>> 0 <= i3 >>> 0) {
    break;
   }
   i7 = i3 - i5 | 0;
   i8 = i1 + 4 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i11 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   i10 = i11 >>> 0 > i2 >>> 0 ? i11 : i2;
   do {
    if (i9 >>> 0 < i10 >>> 0) {
     if (i10 >>> 0 > 32 >>> 0) {
      i11 = __ZN3WTF18fastMallocGoodSizeEj(i10) | 0;
      HEAP32[i8 >> 2] = i11;
      i12 = __ZN3WTF10fastMallocEj(i11) | 0;
      HEAP32[i4 >> 2] = i12;
      i13 = i12;
      i14 = i1 + 12 | 0;
     } else {
      i12 = i1 + 12 | 0;
      HEAP32[i4 >> 2] = i12;
      HEAP32[i8 >> 2] = 32;
      i13 = i12;
      i14 = i12;
     }
     _memcpy(i13 | 0, i5 | 0, i6) | 0;
     if ((i14 | 0) == (i5 | 0) | (i5 | 0) == 0) {
      break;
     }
     if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
      HEAP32[i4 >> 2] = 0;
      HEAP32[i8 >> 2] = 0;
     }
     __ZN3WTF8fastFreeEPv(i5);
    }
   } while (0);
   i15 = (HEAP32[i4 >> 2] | 0) + i7 | 0;
   return i15 | 0;
  }
 } while (0);
 i14 = i1 + 4 | 0;
 i13 = HEAP32[i14 >> 2] | 0;
 i8 = i13 + 1 + (i13 >>> 2) | 0;
 i6 = i8 >>> 0 > 16 >>> 0 ? i8 : 16;
 i8 = i6 >>> 0 > i2 >>> 0 ? i6 : i2;
 if (i13 >>> 0 >= i8 >>> 0) {
  i15 = i3;
  return i15 | 0;
 }
 i13 = HEAP32[i1 + 8 >> 2] | 0;
 if (i8 >>> 0 > 32 >>> 0) {
  i2 = __ZN3WTF18fastMallocGoodSizeEj(i8) | 0;
  HEAP32[i14 >> 2] = i2;
  i8 = __ZN3WTF10fastMallocEj(i2) | 0;
  HEAP32[i4 >> 2] = i8;
  i16 = i8;
  i17 = i1 + 12 | 0;
 } else {
  i8 = i1 + 12 | 0;
  HEAP32[i4 >> 2] = i8;
  HEAP32[i14 >> 2] = 32;
  i16 = i8;
  i17 = i8;
 }
 _memcpy(i16 | 0, i5 | 0, i13) | 0;
 if ((i17 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  i15 = i3;
  return i15 | 0;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i14 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 i15 = i3;
 return i15 | 0;
}
function __ZN7WebCore13HTMLTokenizer13emitEndOfFileERNS_15SegmentedStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i1 + 8 | 0;
 if ((HEAP32[HEAP32[i3 >> 2] >> 2] | 0) == 5) {
  return 1;
 }
 HEAP32[i1 >> 2] = 0;
 i1 = HEAPU8[i2 + 58 | 0] | 0;
 do {
  if ((i1 & 2 | 0) == 0) {
   i4 = i2 + 68 | 0;
   i5 = i2 + (HEAP32[i4 + 4 >> 2] | 0) | 0;
   i6 = HEAP32[i4 >> 2] | 0;
   if ((i6 & 1 | 0) == 0) {
    i7 = i6;
   } else {
    i7 = HEAP32[(HEAP32[i5 >> 2] | 0) + (i6 - 1) >> 2] | 0;
   }
   FUNCTION_TABLE_vi[i7 & 15](i5);
  } else {
   i5 = i2 + 20 | 0;
   i6 = (HEAP16[i5 >> 1] | 0) == 10 & i1;
   i4 = i2 + 8 | 0;
   i8 = HEAP32[i4 >> 2] | 0;
   i9 = i8 - 1 | 0;
   HEAP32[i4 >> 2] = i9;
   i4 = (i9 | 0) == 1;
   i9 = i2 + 4 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) + 1 | 0;
   HEAP32[i9 >> 2] = i10;
   HEAP16[i5 >> 1] = HEAPU8[i10] | 0;
   if ((i4 & 1 | i6 | 0) == 0) {
    break;
   }
   if ((i6 | 0) != 0) {
    i6 = i2 + 32 | 0;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
    i6 = HEAP32[i2 + 16 >> 2] | 0;
    if ((i6 | 0) == 0) {
     i11 = 0;
    } else {
     i11 = HEAP32[i6 + 4 >> 2] | 0;
    }
    HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i8) + i11;
   }
   if (!i4) {
    break;
   }
   __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
  }
 } while (0);
 i2 = HEAP32[i3 >> 2] | 0;
 i11 = i2 + 20 | 0;
 _memset(i2 | 0, 0, 16) | 0;
 do {
  if ((HEAP32[i11 >> 2] | 0) != 0) {
   i1 = i2 + 24 | 0;
   if ((HEAP32[i1 >> 2] | 0) != 0) {
    HEAP32[i1 >> 2] = 0;
   }
   i1 = i2 + 16 | 0;
   i7 = HEAP32[i1 >> 2] | 0;
   i4 = i2 + 28 | 0;
   if ((i4 | 0) == (i7 | 0) | (i7 | 0) == 0) {
    i12 = i7;
   } else {
    HEAP32[i1 >> 2] = 0;
    HEAP32[i11 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i7);
    i12 = HEAP32[i1 >> 2] | 0;
   }
   if ((i12 | 0) != 0) {
    break;
   }
   HEAP32[i1 >> 2] = i4;
   HEAP32[i11 >> 2] = 256;
  }
 } while (0);
 HEAP16[i2 + 540 >> 1] = 0;
 HEAP32[HEAP32[i3 >> 2] >> 2] = 6;
 return 1;
}
function __ZN7WebCore13HTMLTokenizer13processEntityERNS_15SegmentedStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP8[i4] = 0;
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i5 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i5 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i5 + 12 | 0;
 HEAP8[i9] = 1;
 HEAP32[i5 + 16 >> 2] = 0;
 HEAP32[i5 + 20 >> 2] = 0;
 i10 = __ZN7WebCore17consumeHTMLEntityERNS_15SegmentedStringERN3WTF13StringBuilderERbt(i2, i5, i4, 0) | 0;
 do {
  if ((HEAP8[i4] & 1) == 0) {
   if (!i10) {
    __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, 38);
    i11 = 1;
    break;
   }
   if ((HEAP32[i6 >> 2] | 0) == 0) {
    i11 = 1;
    break;
   } else {
    i12 = 0;
   }
   while (1) {
    i5 = HEAP32[i7 >> 2] | 0;
    i2 = (i5 | 0) == 0 ? HEAP32[i8 >> 2] | 0 : i5;
    if ((HEAP8[i9] & 1) == 0) {
     i13 = HEAP16[(HEAP32[i2 + 8 >> 2] | 0) + (i12 << 1) >> 1] | 0;
    } else {
     i13 = HEAPU8[(HEAP32[i2 + 8 >> 2] | 0) + i12 | 0] | 0;
    }
    __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, i13);
    i2 = i12 + 1 | 0;
    if (i2 >>> 0 < (HEAP32[i6 >> 2] | 0) >>> 0) {
     i12 = i2;
    } else {
     i11 = 1;
     break;
    }
   }
  } else {
   i11 = 0;
  }
 } while (0);
 i12 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i8 = i12 | 0;
   i6 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i8 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i7 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i3;
  return i11 | 0;
 }
 i7 = i12 | 0;
 i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i12);
  STACKTOP = i3;
  return i11 | 0;
 } else {
  HEAP32[i7 >> 2] = i6;
  STACKTOP = i3;
  return i11 | 0;
 }
 return 0;
}
function __ZN7WebCore9HTMLToken13beginStartTagEt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP16[i4 >> 1] = i2;
 HEAP32[i1 >> 2] = 2;
 HEAP8[i1 + 542 | 0] = 0;
 HEAP32[i1 + 2236 >> 2] = 0;
 __ZN3WTF6VectorIN7WebCore9HTMLToken9AttributeELj10ENS_15CrashOnOverflowEE5clearEv(i1 + 544 | 0);
 i5 = i1 + 16 | 0;
 i6 = i1 + 24 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) != (HEAP32[i1 + 20 >> 2] | 0)) {
  HEAP16[(HEAP32[i5 >> 2] | 0) + (i7 << 1) >> 1] = i2;
  i8 = HEAP32[i6 >> 2] | 0;
  i9 = i8 + 1 | 0;
  HEAP32[i6 >> 2] = i9;
  i10 = HEAP16[i4 >> 1] | 0;
  i11 = i1 + 540 | 0;
  i12 = HEAP16[i11 >> 1] | 0;
  i13 = i12 | i10;
  HEAP16[i11 >> 1] = i13;
  STACKTOP = i3;
  return;
 }
 i2 = i7 + 1 | 0;
 i14 = i5 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 do {
  if (i15 >>> 0 > i4 >>> 0) {
   i16 = 5;
  } else {
   if ((i15 + (i7 << 1) | 0) >>> 0 <= i4 >>> 0) {
    i16 = 5;
    break;
   }
   i17 = i2 + (i7 >>> 2) | 0;
   i18 = i17 >>> 0 > 16 >>> 0 ? i17 : 16;
   __ZN3WTF6VectorItLj256ENS_15CrashOnOverflowEE15reserveCapacityEj(i5, i18 >>> 0 > i2 >>> 0 ? i18 : i2);
   i18 = HEAP32[i14 >> 2] | 0;
   i19 = i18 + (i4 - i15 >> 1 << 1) | 0;
   i20 = i18;
  }
 } while (0);
 if ((i16 | 0) == 5) {
  i16 = i2 + (i7 >>> 2) | 0;
  i7 = i16 >>> 0 > 16 >>> 0 ? i16 : 16;
  __ZN3WTF6VectorItLj256ENS_15CrashOnOverflowEE15reserveCapacityEj(i5, i7 >>> 0 > i2 >>> 0 ? i7 : i2);
  i19 = i4;
  i20 = HEAP32[i14 >> 2] | 0;
 }
 HEAP16[i20 + (HEAP32[i6 >> 2] << 1) >> 1] = HEAP16[i19 >> 1] | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 i9 = i8 + 1 | 0;
 HEAP32[i6 >> 2] = i9;
 i10 = HEAP16[i4 >> 1] | 0;
 i11 = i1 + 540 | 0;
 i12 = HEAP16[i11 >> 1] | 0;
 i13 = i12 | i10;
 HEAP16[i11 >> 1] = i13;
 STACKTOP = i3;
 return;
}
function __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i6 + (i4 << 4) | 0;
 if (i3 >>> 0 <= i4 >>> 0) {
  if ((i3 | 0) == (i4 | 0)) {
   return;
  }
  i8 = i6 + (i3 << 4) | 0;
  while (1) {
   i9 = HEAP32[i8 + 12 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i10 = i9 | 0;
     i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i10 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i8 = i8 + 16 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    break;
   }
  }
  return;
 }
 if ((i4 | 0) == 0) {
  i12 = i6;
  i13 = i3;
 } else {
  i3 = i6;
  while (1) {
   i6 = HEAP32[i3 + 12 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i4 = i6 | 0;
     i8 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i6);
      break;
     } else {
      HEAP32[i4 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i3 = i3 + 16 | 0;
   if ((i3 | 0) == (i7 | 0)) {
    break;
   }
  }
  i12 = HEAP32[i5 >> 2] | 0;
  i13 = HEAP32[i2 >> 2] | 0;
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = i12 + (i2 << 4) | 0;
 if ((i13 | 0) == (i2 | 0)) {
  return;
 }
 i2 = i12 + (i13 << 4) | 0;
 while (1) {
  i13 = HEAP32[i2 + 12 >> 2] | 0;
  do {
   if ((i13 | 0) != 0) {
    i12 = i13 | 0;
    i5 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
    if ((i5 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i13);
     break;
    } else {
     HEAP32[i12 >> 2] = i5;
     break;
    }
   }
  } while (0);
  i2 = i2 + 16 | 0;
  if ((i2 | 0) == (i1 | 0)) {
   break;
  }
 }
 return;
}
function __ZN7WebCore13HTMLTokenizer15bufferCharacterEt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 8 | 0;
 HEAP32[HEAP32[i5 >> 2] >> 2] = 5;
 i1 = HEAP32[i5 >> 2] | 0;
 HEAP16[i4 >> 1] = i2;
 i5 = i1 + 16 | 0;
 i6 = i1 + 24 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) != (HEAP32[i1 + 20 >> 2] | 0)) {
  HEAP16[(HEAP32[i5 >> 2] | 0) + (i7 << 1) >> 1] = i2;
  i8 = HEAP32[i6 >> 2] | 0;
  i9 = i8 + 1 | 0;
  HEAP32[i6 >> 2] = i9;
  i10 = HEAP16[i4 >> 1] | 0;
  i11 = i1 + 540 | 0;
  i12 = HEAP16[i11 >> 1] | 0;
  i13 = i12 | i10;
  HEAP16[i11 >> 1] = i13;
  STACKTOP = i3;
  return;
 }
 i2 = i7 + 1 | 0;
 i14 = i5 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 do {
  if (i15 >>> 0 > i4 >>> 0) {
   i16 = 5;
  } else {
   if ((i15 + (i7 << 1) | 0) >>> 0 <= i4 >>> 0) {
    i16 = 5;
    break;
   }
   i17 = i2 + (i7 >>> 2) | 0;
   i18 = i17 >>> 0 > 16 >>> 0 ? i17 : 16;
   __ZN3WTF6VectorItLj256ENS_15CrashOnOverflowEE15reserveCapacityEj(i5, i18 >>> 0 > i2 >>> 0 ? i18 : i2);
   i18 = HEAP32[i14 >> 2] | 0;
   i19 = i18 + (i4 - i15 >> 1 << 1) | 0;
   i20 = i18;
  }
 } while (0);
 if ((i16 | 0) == 5) {
  i16 = i2 + (i7 >>> 2) | 0;
  i7 = i16 >>> 0 > 16 >>> 0 ? i16 : 16;
  __ZN3WTF6VectorItLj256ENS_15CrashOnOverflowEE15reserveCapacityEj(i5, i7 >>> 0 > i2 >>> 0 ? i7 : i2);
  i19 = i4;
  i20 = HEAP32[i14 >> 2] | 0;
 }
 HEAP16[i20 + (HEAP32[i6 >> 2] << 1) >> 1] = HEAP16[i19 >> 1] | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 i9 = i8 + 1 | 0;
 HEAP32[i6 >> 2] = i9;
 i10 = HEAP16[i4 >> 1] | 0;
 i11 = i1 + 540 | 0;
 i12 = HEAP16[i11 >> 1] | 0;
 i13 = i12 | i10;
 HEAP16[i11 >> 1] = i13;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15SegmentedString15lookAheadInlineERKN3WTF6StringEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 do {
  if ((HEAP16[i1 >> 1] | 0) == 0) {
   i6 = i2 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i8 = 0;
   } else {
    if ((HEAP32[i7 + 4 >> 2] | 0) >>> 0 > (HEAP32[i1 + 8 >> 2] | 0) >>> 0) {
     break;
    }
    i8 = HEAP32[i7 + 4 >> 2] | 0;
   }
   i7 = i1 + 16 | 0;
   i9 = HEAP32[i7 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i10 = 0;
   } else {
    i10 = HEAP32[i9 + 4 >> 2] | 0;
   }
   __ZNK3WTF6String9substringEjj(i5, i7, i10 - (HEAP32[i1 + 8 >> 2] | 0) | 0, i8);
   i7 = i5 | 0;
   i9 = HEAP32[i7 >> 2] | 0;
   i11 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i9 | 0) == 0) {
     if ((i11 | 0) == 0) {
      i12 = 1;
      break;
     }
     i12 = (HEAP32[i11 + 4 >> 2] | 0) == 0;
    } else {
     if (i3) {
      i12 = __ZNK3WTF10StringImpl10startsWithEPKS0_(i9, i11) | 0;
      break;
     } else {
      i12 = (__ZN3WTF10StringImpl23reverseFindIgnoringCaseEPS0_j(i9, i11, 0) | 0) == 0;
      break;
     }
    }
   } while (0);
   i11 = i12 & 1;
   i9 = HEAP32[i7 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i13 = i11;
    STACKTOP = i4;
    return i13 | 0;
   }
   i6 = i9 | 0;
   i14 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    i13 = i11;
    STACKTOP = i4;
    return i13 | 0;
   } else {
    HEAP32[i6 >> 2] = i14;
    i13 = i11;
    STACKTOP = i4;
    return i13 | 0;
   }
  }
 } while (0);
 i13 = __ZN7WebCore15SegmentedString17lookAheadSlowCaseERKN3WTF6StringEb(i1, i2, i3) | 0;
 STACKTOP = i4;
 return i13 | 0;
}
function __ZN7WebCore9HTMLToken12beginDOCTYPEEt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP16[i4 >> 1] = i2;
 __ZN7WebCore9HTMLToken12beginDOCTYPEEv(i1);
 i5 = i1 + 16 | 0;
 i6 = i1 + 24 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) != (HEAP32[i1 + 20 >> 2] | 0)) {
  HEAP16[(HEAP32[i5 >> 2] | 0) + (i7 << 1) >> 1] = i2;
  i8 = HEAP32[i6 >> 2] | 0;
  i9 = i8 + 1 | 0;
  HEAP32[i6 >> 2] = i9;
  i10 = HEAP16[i4 >> 1] | 0;
  i11 = i1 + 540 | 0;
  i12 = HEAP16[i11 >> 1] | 0;
  i13 = i12 | i10;
  HEAP16[i11 >> 1] = i13;
  STACKTOP = i3;
  return;
 }
 i2 = i7 + 1 | 0;
 i14 = i5 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 do {
  if (i15 >>> 0 > i4 >>> 0) {
   i16 = 5;
  } else {
   if ((i15 + (i7 << 1) | 0) >>> 0 <= i4 >>> 0) {
    i16 = 5;
    break;
   }
   i17 = i2 + (i7 >>> 2) | 0;
   i18 = i17 >>> 0 > 16 >>> 0 ? i17 : 16;
   __ZN3WTF6VectorItLj256ENS_15CrashOnOverflowEE15reserveCapacityEj(i5, i18 >>> 0 > i2 >>> 0 ? i18 : i2);
   i18 = HEAP32[i14 >> 2] | 0;
   i19 = i18 + (i4 - i15 >> 1 << 1) | 0;
   i20 = i18;
  }
 } while (0);
 if ((i16 | 0) == 5) {
  i16 = i2 + (i7 >>> 2) | 0;
  i7 = i16 >>> 0 > 16 >>> 0 ? i16 : 16;
  __ZN3WTF6VectorItLj256ENS_15CrashOnOverflowEE15reserveCapacityEj(i5, i7 >>> 0 > i2 >>> 0 ? i7 : i2);
  i19 = i4;
  i20 = HEAP32[i14 >> 2] | 0;
 }
 HEAP16[i20 + (HEAP32[i6 >> 2] << 1) >> 1] = HEAP16[i19 >> 1] | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 i9 = i8 + 1 | 0;
 HEAP32[i6 >> 2] = i9;
 i10 = HEAP16[i4 >> 1] | 0;
 i11 = i1 + 540 | 0;
 i12 = HEAP16[i11 >> 1] | 0;
 i13 = i12 | i10;
 HEAP16[i11 >> 1] = i13;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9HTMLToken15appendToCommentEt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP16[i4 >> 1] = i2;
 i5 = i1 + 16 | 0;
 i6 = i1 + 24 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) != (HEAP32[i1 + 20 >> 2] | 0)) {
  HEAP16[(HEAP32[i5 >> 2] | 0) + (i7 << 1) >> 1] = i2;
  i8 = HEAP32[i6 >> 2] | 0;
  i9 = i8 + 1 | 0;
  HEAP32[i6 >> 2] = i9;
  i10 = HEAP16[i4 >> 1] | 0;
  i11 = i1 + 540 | 0;
  i12 = HEAP16[i11 >> 1] | 0;
  i13 = i12 | i10;
  HEAP16[i11 >> 1] = i13;
  STACKTOP = i3;
  return;
 }
 i2 = i7 + 1 | 0;
 i14 = i5 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 do {
  if (i15 >>> 0 > i4 >>> 0) {
   i16 = 5;
  } else {
   if ((i15 + (i7 << 1) | 0) >>> 0 <= i4 >>> 0) {
    i16 = 5;
    break;
   }
   i17 = i2 + (i7 >>> 2) | 0;
   i18 = i17 >>> 0 > 16 >>> 0 ? i17 : 16;
   __ZN3WTF6VectorItLj256ENS_15CrashOnOverflowEE15reserveCapacityEj(i5, i18 >>> 0 > i2 >>> 0 ? i18 : i2);
   i18 = HEAP32[i14 >> 2] | 0;
   i19 = i18 + (i4 - i15 >> 1 << 1) | 0;
   i20 = i18;
  }
 } while (0);
 if ((i16 | 0) == 5) {
  i16 = i2 + (i7 >>> 2) | 0;
  i7 = i16 >>> 0 > 16 >>> 0 ? i16 : 16;
  __ZN3WTF6VectorItLj256ENS_15CrashOnOverflowEE15reserveCapacityEj(i5, i7 >>> 0 > i2 >>> 0 ? i7 : i2);
  i19 = i4;
  i20 = HEAP32[i14 >> 2] | 0;
 }
 HEAP16[i20 + (HEAP32[i6 >> 2] << 1) >> 1] = HEAP16[i19 >> 1] | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 i9 = i8 + 1 | 0;
 HEAP32[i6 >> 2] = i9;
 i10 = HEAP16[i4 >> 1] | 0;
 i11 = i1 + 540 | 0;
 i12 = HEAP16[i11 >> 1] | 0;
 i13 = i12 | i10;
 HEAP16[i11 >> 1] = i13;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9HTMLToken12appendToNameEt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP16[i4 >> 1] = i2;
 i5 = i1 + 16 | 0;
 i6 = i1 + 24 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) != (HEAP32[i1 + 20 >> 2] | 0)) {
  HEAP16[(HEAP32[i5 >> 2] | 0) + (i7 << 1) >> 1] = i2;
  i8 = HEAP32[i6 >> 2] | 0;
  i9 = i8 + 1 | 0;
  HEAP32[i6 >> 2] = i9;
  i10 = HEAP16[i4 >> 1] | 0;
  i11 = i1 + 540 | 0;
  i12 = HEAP16[i11 >> 1] | 0;
  i13 = i12 | i10;
  HEAP16[i11 >> 1] = i13;
  STACKTOP = i3;
  return;
 }
 i2 = i7 + 1 | 0;
 i14 = i5 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 do {
  if (i15 >>> 0 > i4 >>> 0) {
   i16 = 5;
  } else {
   if ((i15 + (i7 << 1) | 0) >>> 0 <= i4 >>> 0) {
    i16 = 5;
    break;
   }
   i17 = i2 + (i7 >>> 2) | 0;
   i18 = i17 >>> 0 > 16 >>> 0 ? i17 : 16;
   __ZN3WTF6VectorItLj256ENS_15CrashOnOverflowEE15reserveCapacityEj(i5, i18 >>> 0 > i2 >>> 0 ? i18 : i2);
   i18 = HEAP32[i14 >> 2] | 0;
   i19 = i18 + (i4 - i15 >> 1 << 1) | 0;
   i20 = i18;
  }
 } while (0);
 if ((i16 | 0) == 5) {
  i16 = i2 + (i7 >>> 2) | 0;
  i7 = i16 >>> 0 > 16 >>> 0 ? i16 : 16;
  __ZN3WTF6VectorItLj256ENS_15CrashOnOverflowEE15reserveCapacityEj(i5, i7 >>> 0 > i2 >>> 0 ? i7 : i2);
  i19 = i4;
  i20 = HEAP32[i14 >> 2] | 0;
 }
 HEAP16[i20 + (HEAP32[i6 >> 2] << 1) >> 1] = HEAP16[i19 >> 1] | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 i9 = i8 + 1 | 0;
 HEAP32[i6 >> 2] = i9;
 i10 = HEAP16[i4 >> 1] | 0;
 i11 = i1 + 540 | 0;
 i12 = HEAP16[i11 >> 1] | 0;
 i13 = i12 | i10;
 HEAP16[i11 >> 1] = i13;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13HTMLTokenizer14updateStateForERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11textareaTagE >> 2] | 0) + 12 >> 2] | 0)) {
   if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8titleTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames12plaintextTagE >> 2] | 0) + 12 >> 2] | 0)) {
    HEAP32[i1 >> 2] = 6;
    return;
   }
   if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9scriptTagE >> 2] | 0) + 12 >> 2] | 0)) {
    HEAP32[i1 >> 2] = 5;
    return;
   }
   do {
    if ((i3 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8styleTagE >> 2] | 0) + 12 >> 2] | 0)) {
     if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9iframeTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6xmpTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10noembedTagE >> 2] | 0) + 12 >> 2] | 0)) {
      if ((HEAP8[i1 + 189 | 0] & 1) != 0) {
       break;
      }
     }
     if ((i3 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11noframesTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
     if ((i3 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11noscriptTagE >> 2] | 0) + 12 >> 2] | 0)) {
      return;
     }
     if ((HEAP8[i1 + 188 | 0] & 1) != 0) {
      break;
     }
     return;
    }
   } while (0);
   HEAP32[i1 >> 2] = 4;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 2;
 return;
}
function __ZN3WTF11VectorMoverILb0EN7WebCore9HTMLToken9AttributeEE4moveEPS3_S5_S5_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 if ((i1 | 0) == (i2 | 0)) {
  return;
 } else {
  i4 = i1;
  i5 = i3;
 }
 while (1) {
  i3 = i4;
  i1 = i5;
  i6 = HEAP32[i3 + 4 >> 2] | 0;
  HEAP32[i1 >> 2] = HEAP32[i3 >> 2];
  HEAP32[i1 + 4 >> 2] = i6;
  i6 = i4 + 8 | 0;
  i1 = i5 + 8 | 0;
  i3 = HEAP32[i6 + 4 >> 2] | 0;
  HEAP32[i1 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i1 + 4 >> 2] = i3;
  i3 = i5 + 16 | 0;
  HEAP32[i3 >> 2] = i5 + 28;
  HEAP32[i5 + 20 >> 2] = 32;
  HEAP32[i5 + 24 >> 2] = 0;
  __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEE4swapERS2_(i3, i4 + 16 | 0);
  i3 = i5 + 92 | 0;
  HEAP32[i3 >> 2] = i5 + 104;
  HEAP32[i5 + 96 >> 2] = 32;
  HEAP32[i5 + 100 >> 2] = 0;
  __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEE4swapERS2_(i3, i4 + 92 | 0);
  i3 = i4 + 100 | 0;
  if ((HEAP32[i3 >> 2] | 0) != 0) {
   HEAP32[i3 >> 2] = 0;
  }
  i3 = i4 + 92 | 0;
  i1 = HEAP32[i3 >> 2] | 0;
  if (!((i4 + 104 | 0) == (i1 | 0) | (i1 | 0) == 0)) {
   HEAP32[i3 >> 2] = 0;
   HEAP32[i4 + 96 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i1);
  }
  i1 = i4 + 24 | 0;
  if ((HEAP32[i1 >> 2] | 0) != 0) {
   HEAP32[i1 >> 2] = 0;
  }
  i1 = i4 + 16 | 0;
  i3 = HEAP32[i1 >> 2] | 0;
  if (!((i4 + 28 | 0) == (i3 | 0) | (i3 | 0) == 0)) {
   HEAP32[i1 >> 2] = 0;
   HEAP32[i4 + 20 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i3);
  }
  i3 = i4 + 168 | 0;
  if ((i3 | 0) == (i2 | 0)) {
   break;
  } else {
   i4 = i3;
   i5 = i5 + 168 | 0;
  }
 }
 return;
}
function __ZN7WebCore9HTMLToken22appendToAttributeValueEt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP16[i4 >> 1] = i2;
 i5 = HEAP32[i1 + 2236 >> 2] | 0;
 i1 = i5 + 92 | 0;
 i6 = i5 + 100 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) != (HEAP32[i5 + 96 >> 2] | 0)) {
  HEAP16[(HEAP32[i1 >> 2] | 0) + (i7 << 1) >> 1] = i2;
  i8 = HEAP32[i6 >> 2] | 0;
  i9 = i8 + 1 | 0;
  HEAP32[i6 >> 2] = i9;
  STACKTOP = i3;
  return;
 }
 i2 = i7 + 1 | 0;
 i5 = i1 | 0;
 i10 = HEAP32[i5 >> 2] | 0;
 do {
  if (i10 >>> 0 > i4 >>> 0) {
   i11 = 5;
  } else {
   if ((i10 + (i7 << 1) | 0) >>> 0 <= i4 >>> 0) {
    i11 = 5;
    break;
   }
   i12 = i2 + (i7 >>> 2) | 0;
   i13 = i12 >>> 0 > 16 >>> 0 ? i12 : 16;
   __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i13 >>> 0 > i2 >>> 0 ? i13 : i2);
   i13 = HEAP32[i5 >> 2] | 0;
   i14 = i13 + (i4 - i10 >> 1 << 1) | 0;
   i15 = i13;
  }
 } while (0);
 if ((i11 | 0) == 5) {
  i11 = i2 + (i7 >>> 2) | 0;
  i7 = i11 >>> 0 > 16 >>> 0 ? i11 : 16;
  __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i7 >>> 0 > i2 >>> 0 ? i7 : i2);
  i14 = i4;
  i15 = HEAP32[i5 >> 2] | 0;
 }
 HEAP16[i15 + (HEAP32[i6 >> 2] << 1) >> 1] = HEAP16[i14 >> 1] | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 i9 = i8 + 1 | 0;
 HEAP32[i6 >> 2] = i9;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9HTMLToken21appendToAttributeNameEt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP16[i4 >> 1] = i2;
 i5 = HEAP32[i1 + 2236 >> 2] | 0;
 i1 = i5 + 16 | 0;
 i6 = i5 + 24 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) != (HEAP32[i5 + 20 >> 2] | 0)) {
  HEAP16[(HEAP32[i1 >> 2] | 0) + (i7 << 1) >> 1] = i2;
  i8 = HEAP32[i6 >> 2] | 0;
  i9 = i8 + 1 | 0;
  HEAP32[i6 >> 2] = i9;
  STACKTOP = i3;
  return;
 }
 i2 = i7 + 1 | 0;
 i5 = i1 | 0;
 i10 = HEAP32[i5 >> 2] | 0;
 do {
  if (i10 >>> 0 > i4 >>> 0) {
   i11 = 5;
  } else {
   if ((i10 + (i7 << 1) | 0) >>> 0 <= i4 >>> 0) {
    i11 = 5;
    break;
   }
   i12 = i2 + (i7 >>> 2) | 0;
   i13 = i12 >>> 0 > 16 >>> 0 ? i12 : 16;
   __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i13 >>> 0 > i2 >>> 0 ? i13 : i2);
   i13 = HEAP32[i5 >> 2] | 0;
   i14 = i13 + (i4 - i10 >> 1 << 1) | 0;
   i15 = i13;
  }
 } while (0);
 if ((i11 | 0) == 5) {
  i11 = i2 + (i7 >>> 2) | 0;
  i7 = i11 >>> 0 > 16 >>> 0 ? i11 : 16;
  __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i7 >>> 0 > i2 >>> 0 ? i7 : i2);
  i14 = i4;
  i15 = HEAP32[i5 >> 2] | 0;
 }
 HEAP16[i15 + (HEAP32[i6 >> 2] << 1) >> 1] = HEAP16[i14 >> 1] | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 i9 = i8 + 1 | 0;
 HEAP32[i6 >> 2] = i9;
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEEaSILj256ES1_EERS2_RKNS0_ItXT_ET0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if (i4 >>> 0 > i6 >>> 0) {
   HEAP32[i3 >> 2] = i6;
   i7 = i6;
  } else {
   i8 = i1 + 4 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   if (i6 >>> 0 <= i9 >>> 0) {
    i7 = i4;
    break;
   }
   do {
    if ((i9 | 0) != 0) {
     if ((i4 | 0) != 0) {
      HEAP32[i3 >> 2] = 0;
     }
     i10 = i1 | 0;
     i11 = HEAP32[i10 >> 2] | 0;
     i12 = i1 + 12 | 0;
     if ((i12 | 0) == (i11 | 0) | (i11 | 0) == 0) {
      i13 = i11;
     } else {
      HEAP32[i10 >> 2] = 0;
      HEAP32[i8 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i11);
      i13 = HEAP32[i10 >> 2] | 0;
     }
     if ((i13 | 0) != 0) {
      break;
     }
     HEAP32[i10 >> 2] = i12;
     HEAP32[i8 >> 2] = 32;
    }
   } while (0);
   __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, HEAP32[i5 >> 2] | 0);
   i7 = HEAP32[i3 >> 2] | 0;
  }
 } while (0);
 i13 = i2 | 0;
 i2 = i1 | 0;
 _memmove(HEAP32[i2 >> 2] | 0, HEAP32[i13 >> 2] | 0, i7 << 1 | 0) | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 _memcpy((HEAP32[i2 >> 2] | 0) + (i7 << 1) | 0, (HEAP32[i13 >> 2] | 0) + (i7 << 1) | 0, (HEAP32[i5 >> 2] | 0) - i7 << 1) | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 return i1 | 0;
}
function __ZN7WebCore13HTMLTokenizer15emitAndResumeInERNS_15SegmentedStringENS0_5StateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 if ((HEAP32[i4 >> 2] | 0) == 2) {
  __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEEaSILj256ES1_EERS2_RKNS0_ItXT_ET0_EE(i1 + 24 | 0, i4 + 16 | 0) | 0;
 }
 HEAP32[i1 >> 2] = i3;
 i3 = HEAPU8[i2 + 58 | 0] | 0;
 if ((i3 & 2 | 0) == 0) {
  i1 = i2 + 68 | 0;
  i4 = i2 + (HEAP32[i1 + 4 >> 2] | 0) | 0;
  i5 = HEAP32[i1 >> 2] | 0;
  if ((i5 & 1 | 0) == 0) {
   i6 = i5;
  } else {
   i6 = HEAP32[(HEAP32[i4 >> 2] | 0) + (i5 - 1) >> 2] | 0;
  }
  FUNCTION_TABLE_vi[i6 & 15](i4);
  return 1;
 }
 i4 = i2 + 20 | 0;
 i6 = (HEAP16[i4 >> 1] | 0) == 10 & i3;
 i3 = i2 + 8 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 i1 = i5 - 1 | 0;
 HEAP32[i3 >> 2] = i1;
 i3 = (i1 | 0) == 1;
 i1 = i2 + 4 | 0;
 i7 = (HEAP32[i1 >> 2] | 0) + 1 | 0;
 HEAP32[i1 >> 2] = i7;
 HEAP16[i4 >> 1] = HEAPU8[i7] | 0;
 if ((i3 & 1 | i6 | 0) == 0) {
  return 1;
 }
 if ((i6 | 0) != 0) {
  i6 = i2 + 32 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  i6 = HEAP32[i2 + 16 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i8 = 0;
  } else {
   i8 = HEAP32[i6 + 4 >> 2] | 0;
  }
  HEAP32[i2 + 28 >> 2] = (HEAP32[i2 + 24 >> 2] | 0) + (1 - i5) + i8;
 }
 if (!i3) {
  return 1;
 }
 __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i2);
 return 1;
}
function __ZN3WTF6VectorIN7WebCore9HTMLToken9AttributeELj10ENS_15CrashOnOverflowEE5clearEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 4 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i1 | 0;
 if ((i4 | 0) != 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i7 = i6 + (i4 * 168 & -1) | 0;
  i4 = i6;
  while (1) {
   i6 = i4 + 100 | 0;
   if ((HEAP32[i6 >> 2] | 0) != 0) {
    HEAP32[i6 >> 2] = 0;
   }
   i6 = i4 + 92 | 0;
   i8 = HEAP32[i6 >> 2] | 0;
   if (!((i4 + 104 | 0) == (i8 | 0) | (i8 | 0) == 0)) {
    HEAP32[i6 >> 2] = 0;
    HEAP32[i4 + 96 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i8);
   }
   i8 = i4 + 24 | 0;
   if ((HEAP32[i8 >> 2] | 0) != 0) {
    HEAP32[i8 >> 2] = 0;
   }
   i8 = i4 + 16 | 0;
   i6 = HEAP32[i8 >> 2] | 0;
   if (!((i4 + 28 | 0) == (i6 | 0) | (i6 | 0) == 0)) {
    HEAP32[i8 >> 2] = 0;
    HEAP32[i4 + 20 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i6);
   }
   i4 = i4 + 168 | 0;
   if ((i4 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 i7 = i1 + 12 | 0;
 if ((i7 | 0) == (i3 | 0) | (i3 | 0) == 0) {
  i9 = i3;
 } else {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i2 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
  i9 = HEAP32[i5 >> 2] | 0;
 }
 if ((i9 | 0) != 0) {
  return;
 }
 HEAP32[i5 >> 2] = i7;
 HEAP32[i2 >> 2] = 10;
 return;
}
function __ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14appendSlowCaseItEEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
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
   i9 = HEAP32[i5 >> 2] | 0;
   if (i8 >>> 0 > 32 >>> 0) {
    i10 = __ZN3WTF18fastMallocGoodSizeEj(i8) | 0;
    HEAP32[i6 >> 2] = i10;
    i11 = __ZN3WTF10fastMallocEj(i10) | 0;
    HEAP32[i5 >> 2] = i11;
    i12 = i11;
    i13 = i1 + 12 | 0;
   } else {
    i11 = i1 + 12 | 0;
    HEAP32[i5 >> 2] = i11;
    HEAP32[i6 >> 2] = 32;
    i12 = i11;
    i13 = i11;
   }
   _memcpy(i12 | 0, i9 | 0, i4) | 0;
   if ((i13 | 0) == (i9 | 0) | (i9 | 0) == 0) {
    break;
   }
   if ((HEAP32[i5 >> 2] | 0) == (i9 | 0)) {
    HEAP32[i5 >> 2] = 0;
    HEAP32[i6 >> 2] = 0;
   }
   __ZN3WTF8fastFreeEPv(i9);
  }
 } while (0);
 HEAP8[(HEAP32[i5 >> 2] | 0) + (HEAP32[i3 >> 2] | 0) | 0] = HEAP16[i2 >> 1];
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore15SegmentedString37advancePastNewlineAndUpdateLineNumberEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 do {
  if ((HEAP16[i1 >> 1] | 0) == 0) {
   i2 = i1 + 4 | 0;
   i3 = i1 + 8 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   if ((i4 | 0) <= 1) {
    break;
   }
   i5 = HEAP8[i1 + 12 | 0] & 1;
   i6 = i1 + 32 | 0;
   HEAP32[i6 >> 2] = (i5 & 255) + (HEAP32[i6 >> 2] | 0);
   if (i5 << 24 >> 24 != 0) {
    i5 = HEAP32[i1 + 16 >> 2] | 0;
    if ((i5 | 0) == 0) {
     i7 = 0;
    } else {
     i7 = HEAP32[i5 + 4 >> 2] | 0;
    }
    HEAP32[i1 + 28 >> 2] = (HEAP32[i1 + 24 >> 2] | 0) + 1 + i7 - i4;
   }
   i5 = i4 - 1 | 0;
   HEAP32[i3 >> 2] = i5;
   if ((i5 | 0) == 1) {
    __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i1);
   }
   if ((HEAP8[i1 + 13 | 0] & 1) == 0) {
    i5 = (HEAP32[i2 >> 2] | 0) + 2 | 0;
    HEAP32[i2 >> 2] = i5;
    i8 = HEAP16[i5 >> 1] | 0;
   } else {
    i5 = i2 | 0;
    i2 = (HEAP32[i5 >> 2] | 0) + 1 | 0;
    HEAP32[i5 >> 2] = i2;
    i8 = HEAPU8[i2] | 0;
   }
   HEAP16[i1 + 20 >> 1] = i8;
   return;
  }
 } while (0);
 __ZN7WebCore15SegmentedString34advanceAndUpdateLineNumberSlowCaseEv(i1);
 return;
}
function __ZN3WTF6VectorIN7WebCore9HTMLToken9AttributeELj10ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i5 + ((HEAP32[i1 + 8 >> 2] | 0) * 168 & -1) | 0;
 do {
  if (i2 >>> 0 > 10 >>> 0) {
   if (i2 >>> 0 > 25565281 >>> 0) {
    _WTFCrash();
   } else {
    i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 168 & -1) | 0;
    HEAP32[i3 >> 2] = (i7 >>> 0) / 168 & -1;
    i8 = __ZN3WTF10fastMallocEj(i7) | 0;
    HEAP32[i4 >> 2] = i8;
    i9 = i8;
    i10 = i1 + 12 | 0;
    break;
   }
  } else {
   i8 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i8;
   HEAP32[i3 >> 2] = 10;
   i9 = i8;
   i10 = i8;
  }
 } while (0);
 __ZN3WTF11VectorMoverILb0EN7WebCore9HTMLToken9AttributeEE4moveEPS3_S5_S5_(i5, i6, i9);
 if ((i10 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN3WTF6VectorItLj256ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
  if (i2 >>> 0 > 256 >>> 0) {
   if ((i2 | 0) < 0) {
    _WTFCrash();
   } else {
    i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 1) | 0;
    HEAP32[i3 >> 2] = i7 >>> 1;
    i8 = __ZN3WTF10fastMallocEj(i7) | 0;
    HEAP32[i4 >> 2] = i8;
    i9 = i8;
    i10 = i1 + 12 | 0;
    break;
   }
  } else {
   i8 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i8;
   HEAP32[i3 >> 2] = 256;
   i9 = i8;
   i10 = i8;
  }
 } while (0);
 i1 = i5;
 _memcpy(i9 | 0, i1 | 0, i6 << 1) | 0;
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
function __ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
  if (i2 >>> 0 > 32 >>> 0) {
   if ((i2 | 0) < 0) {
    _WTFCrash();
   } else {
    i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 1) | 0;
    HEAP32[i3 >> 2] = i7 >>> 1;
    i8 = __ZN3WTF10fastMallocEj(i7) | 0;
    HEAP32[i4 >> 2] = i8;
    i9 = i8;
    i10 = i1 + 12 | 0;
    break;
   }
  } else {
   i8 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i8;
   HEAP32[i3 >> 2] = 32;
   i9 = i8;
   i10 = i8;
  }
 } while (0);
 i1 = i5;
 _memcpy(i9 | 0, i1 | 0, i6 << 1) | 0;
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
function __ZN7WebCore13HTMLTokenizerD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 152 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 144 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if (!((i1 + 156 | 0) == (i3 | 0) | (i3 | 0) == 0)) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 148 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 108 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 100 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if (!((i1 + 112 | 0) == (i2 | 0) | (i2 | 0) == 0)) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 104 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 32 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 24 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i1 + 36 | 0) == (i3 | 0) | (i3 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 return;
}
function __ZN7WebCore13HTMLTokenizerD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 152 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 144 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if (!((i1 + 156 | 0) == (i3 | 0) | (i3 | 0) == 0)) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 148 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 108 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 100 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if (!((i1 + 112 | 0) == (i2 | 0) | (i2 | 0) == 0)) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 104 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 32 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 24 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i1 + 36 | 0) == (i3 | 0) | (i3 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 return;
}
function __ZN3WTF6VectorItLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
 if ((i5 | 0) < 0) {
  _WTFCrash();
 }
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 1) | 0;
 HEAP32[i3 >> 2] = i1 >>> 1;
 i5 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i4 >> 2] = i5;
 i1 = i2;
 _memcpy(i5 | 0, i1 | 0, i6 << 1) | 0;
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
function __ZN7WebCore9HTMLToken12beginDOCTYPEEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = 1;
 i2 = __Znwj(32) | 0;
 HEAP8[i2] = 0;
 HEAP8[i2 + 1 | 0] = 0;
 _memset(i2 + 4 | 0, 0, 25) | 0;
 i3 = i1 + 2240 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 + 24 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 16 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 20 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 12 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 4 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 8 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZdlPv(i1 | 0);
 return;
}
function __ZNK7WebCore15AtomicHTMLToken16nameForAttributeERKNS_9HTMLToken9AttributeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i2 | 0;
 i5 = i2 + 8 | 0;
 __ZN3WTF12AtomicString3addEPKtj(i4, HEAP32[i3 + 16 >> 2] | 0, HEAP32[i3 + 24 >> 2] | 0);
 i3 = i5 | 0;
 HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i1, __ZN3WTF8nullAtomE, i5, __ZN3WTF8nullAtomE);
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i5 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i3 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore13HTMLTokenizerC2ERKNS_17HTMLParserOptionsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 HEAP32[i1 + 16 >> 2] = i1;
 HEAP16[i1 + 20 >> 1] = 0;
 HEAP8[i1 + 22 | 0] = 0;
 HEAP32[i1 + 24 >> 2] = i1 + 36;
 HEAP32[i1 + 28 >> 2] = 32;
 HEAP32[i1 + 32 >> 2] = 0;
 HEAP32[i1 + 100 >> 2] = i1 + 112;
 HEAP32[i1 + 104 >> 2] = 32;
 HEAP32[i1 + 108 >> 2] = 0;
 HEAP32[i1 + 144 >> 2] = i1 + 156;
 HEAP32[i1 + 148 >> 2] = 32;
 HEAP32[i1 + 152 >> 2] = 0;
 i3 = i2;
 i2 = i1 + 188 | 0;
 i4 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i4;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP8[i1 + 4 | 0] = 0;
 HEAP8[i1 + 5 | 0] = 0;
 HEAP16[i1 + 12 >> 1] = 0;
 return;
}
function __ZN7WebCore13HTMLTokenizerC1ERKNS_17HTMLParserOptionsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 HEAP32[i1 + 16 >> 2] = i1;
 HEAP16[i1 + 20 >> 1] = 0;
 HEAP8[i1 + 22 | 0] = 0;
 HEAP32[i1 + 24 >> 2] = i1 + 36;
 HEAP32[i1 + 28 >> 2] = 32;
 HEAP32[i1 + 32 >> 2] = 0;
 HEAP32[i1 + 100 >> 2] = i1 + 112;
 HEAP32[i1 + 104 >> 2] = 32;
 HEAP32[i1 + 108 >> 2] = 0;
 HEAP32[i1 + 144 >> 2] = i1 + 156;
 HEAP32[i1 + 148 >> 2] = 32;
 HEAP32[i1 + 152 >> 2] = 0;
 i3 = i2;
 i2 = i1 + 188 | 0;
 i4 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i4;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP8[i1 + 4 | 0] = 0;
 HEAP8[i1 + 5 | 0] = 0;
 HEAP16[i1 + 12 >> 1] = 0;
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
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore13HTMLTokenizer5resetEv(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP8[i1 + 4 | 0] = 0;
 HEAP8[i1 + 5 | 0] = 0;
 HEAP16[i1 + 12 >> 1] = 0;
 return;
}
function vi___ZN7WebCore15SegmentedString28advanceAndUpdateLineNumber16Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15SegmentedString28advanceAndUpdateLineNumber16Ev(i1 | 0);
}
function vi___ZN7WebCore15SegmentedString27advanceAndUpdateLineNumber8Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15SegmentedString27advanceAndUpdateLineNumber8Ev(i1 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function vi___ZN7WebCore15SegmentedString12advanceEmptyEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15SegmentedString12advanceEmptyEv(i1 | 0);
}
function __ZNK7WebCore15AtomicHTMLToken14usesAttributesEv(i1) {
 i1 = i1 | 0;
 return ((HEAP32[i1 >> 2] | 0) - 2 | 0) >>> 0 < 2 >>> 0 | 0;
}
function vi___ZN7WebCore15SegmentedString9advance16Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15SegmentedString9advance16Ev(i1 | 0);
}
function vi___ZN7WebCore15SegmentedString8advance8Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15SegmentedString8advance8Ev(i1 | 0);
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore15AtomicHTMLToken8usesNameEv(i1) {
 i1 = i1 | 0;
 return ((HEAP32[i1 >> 2] | 0) - 1 | 0) >>> 0 < 3 >>> 0 | 0;
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
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
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
function b3() {
 abort(3);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,vi___ZN7WebCore15SegmentedString12advanceEmptyEv__wrapper,b0,vi___ZN7WebCore15SegmentedString8advance8Ev__wrapper,b0,__ZN7WebCore13HTMLTokenizerD2Ev,b0,vi___ZN7WebCore15SegmentedString28advanceAndUpdateLineNumber16Ev__wrapper,b0,vi___ZN7WebCore15SegmentedString27advanceAndUpdateLineNumber8Ev__wrapper,b0,vi___ZN7WebCore15SegmentedString9advance16Ev__wrapper,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore13HTMLTokenizerC2ERKNS_17HTMLParserOptionsE,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames9scriptTagE": __ZN7WebCore9HTMLNames9scriptTagE, "__ZN7WebCore9HTMLNames11noscriptTagE": __ZN7WebCore9HTMLNames11noscriptTagE, "__ZN7WebCore9HTMLNames12plaintextTagE": __ZN7WebCore9HTMLNames12plaintextTagE, "__ZN7WebCore9HTMLNames9iframeTagE": __ZN7WebCore9HTMLNames9iframeTagE, "__ZN7WebCore9HTMLNames8titleTagE": __ZN7WebCore9HTMLNames8titleTagE, "__ZN7WebCore9HTMLNames11noframesTagE": __ZN7WebCore9HTMLNames11noframesTagE, "__ZN7WebCore9HTMLNames11textareaTagE": __ZN7WebCore9HTMLNames11textareaTagE, "__ZN7WebCore9HTMLNames10noembedTagE": __ZN7WebCore9HTMLNames10noembedTagE, "__ZN7WebCore9HTMLNames8styleTagE": __ZN7WebCore9HTMLNames8styleTagE, "__ZN7WebCore9HTMLNames6xmpTagE": __ZN7WebCore9HTMLNames6xmpTagE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore15AtomicHTMLToken16nameForAttributeERKNS_9HTMLToken9AttributeE","__ZN7WebCore9HTMLToken21appendToAttributeNameEt","__ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14appendSlowCaseItEEvOT_","_strlen","__ZN7WebCore9HTMLToken22appendToAttributeValueEt","__ZN3WTF6VectorItLj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore15AtomicHTMLToken14usesAttributesEv","__ZN3WTF6VectorIhLj32ENS_15CrashOnOverflowEE14expandCapacityEjPh","__ZN7WebCore13HTMLTokenizer9nextTokenERNS_15SegmentedStringERNS_9HTMLTokenE","__ZN7WebCore15SegmentedStringC2ERKN3WTF6StringE","__ZN7WebCore13HTMLTokenizerC2ERKNS_17HTMLParserOptionsE","__ZN7WebCore9HTMLToken15appendToCommentEt","__ZN7WebCore13HTMLTokenizerD2Ev","__ZNK7WebCore15AtomicHTMLToken8usesNameEv","_memset","__ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEEaSILj256ES1_EERS2_RKNS0_ItXT_ET0_EE","__ZN7WebCore15SegmentedString37advancePastNewlineAndUpdateLineNumberEv","_memcpy","__ZN7WebCore13HTMLTokenizer15bufferCharacterEt","__ZN7WebCore15SegmentedString17lookAheadSlowCaseERKN3WTF6StringEb","__ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEE4swapERS2_","__ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv","__ZN7WebCore9HTMLToken12appendToNameEt","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore9HTMLToken13beginStartTagEt","__ZN3WTF6VectorIN7WebCore9HTMLToken9AttributeELj10ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore23InputStreamPreprocessorINS_13HTMLTokenizerEE25processNextInputCharacterERNS_15SegmentedStringE","__ZN7WebCore15SegmentedString15lookAheadInlineERKN3WTF6StringEb","__ZN7WebCore9HTMLToken12beginDOCTYPEEv","__ZN7WebCore13HTMLTokenizer15emitAndResumeInERNS_15SegmentedStringENS0_5StateE","__ZN7WebCore9HTMLToken12beginDOCTYPEEt","__ZN7WebCore13HTMLTokenizer5resetEv","__ZN3WTF6VectorItLj32ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZNK7WebCore13HTMLTokenizer18bufferedCharactersEv","__ZN3WTF11VectorMoverILb0EN7WebCore9HTMLToken9AttributeEE4moveEPS3_S5_S5_","__ZN7WebCore13HTMLTokenizer14updateStateForERKN3WTF12AtomicStringE","__ZN3WTF6VectorIN7WebCore9HTMLToken9AttributeELj10ENS_15CrashOnOverflowEE5clearEv","__ZN3WTF6VectorItLj256ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore13HTMLTokenizer13processEntityERNS_15SegmentedStringE","_memmove","__ZN7WebCore13HTMLTokenizer19flushBufferedEndTagERNS_15SegmentedStringE","__ZN7WebCore13HTMLTokenizer13emitEndOfFileERNS_15SegmentedStringE"]

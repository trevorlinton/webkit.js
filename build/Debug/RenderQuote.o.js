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
H_BASE = parentModule["_malloc"](3840 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 3840;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore11RenderQuoteC1ERNS_8DocumentENS_9QuoteTypeE;
var __ZN7WebCore11RenderQuoteD1Ev;
/* memory initializer */ allocate([110,121,110,0,0,0,0,0,110,117,115,0,0,0,0,0,110,110,104,0,0,0,0,0,110,110,0,0,0,0,0,0,110,109,103,0,0,0,0,0,110,108,0,0,0,0,0,0,110,100,0,0,0,0,0,0,110,98,0,0,0,0,0,0,110,97,113,0,0,0,0,0,109,121,0,0,0,0,0,0,98,101,109,0,0,0,0,0,109,117,97,0,0,0,0,0,109,115,0,0,0,0,0,0,109,114,0,0,0,0,0,0,109,108,0,0,0,0,0,0,109,107,0,0,0,0,0,0,109,103,111,0,0,0,0,0,109,103,0,0,0,0,0,0,109,102,101,0,0,0,0,0,109,101,114,0,0,0,0,0,109,97,115,0,0,0,0,0,98,97,115,0,0,0,0,0,108,118,0,0,0,0,0,0,108,117,121,0,0,0,0,0,108,117,111,0,0,0,0,0,108,117,0,0,0,0,0,0,108,116,0,0,0,0,0,0,108,111,0,0,0,0,0,0,108,110,0,0,0,0,0,0,108,103,0,0,0,0,0,0,108,97,103,0,0,0,0,0,107,115,102,0,0,0,0,0,97,122,45,99,121,114,108,0,107,115,98,0,0,0,0,0,107,111,0,0,0,0,0,0,107,110,0,0,0,0,0,0,107,109,0,0,0,0,0,0,107,108,110,0,0,0,0,0,107,107,106,0,0,0,0,0,107,105,0,0,0,0,0,0,107,104,113,0,0,0,0,0,107,101,97,0,0,0,0,0,107,100,101,0,0,0,0,0,97,115,97,0,0,0,0,0,107,97,109,0,0,0,0,0,107,97,98,0,0,0,0,0,106,109,99,0,0,0,0,0,106,103,111,0,0,0,0,0,106,97,0,0,0,0,0,0,105,116,0,0,0,0,0,0,105,103,0,0,0,0,0,0,105,100,0,0,0,0,0,0,104,117,0,0,0,0,0,0,104,114,0,0,0,0,0,0,97,114,0,0,0,0,0,0,104,105,0,0,0,0,0,0,104,101,0,0,0,0,0,0,104,97,0,0,0,0,0,0,103,117,122,0,0,0,0,0,103,117,0,0,0,0,0,0,103,115,119,0,0,0,0,0,102,114,45,99,104,0,0,0,102,114,45,99,97,0,0,0,102,114,0,0,0,0,0,0,102,105,0,0,0,0,0,0,97,109,0,0,0,0,0,0,102,102,0,0,0,0,0,0,102,97,0,0,0,0,0,0,101,119,111,0,0,0,0,0,101,117,0,0,0,0,0,0,101,116,0,0,0,0,0,0,101,115,0,0,0,0,0,0,101,110,45,103,98,0,0,0,101,110,0,0,0,0,0,0,101,108,0,0,0,0,0,0,101,101,0,0,0,0,0,0,97,107,0,0,0,0,0,0,101,98,117,0,0,0,0,0,100,122,0,0,0,0,0,0,100,121,111,0,0,0,0,0,100,117,97,0,0,0,0,0,100,106,101,0,0,0,0,0,100,101,45,99,104,0,0,0,100,101,0,0,0,0,0,0,100,97,118,0,0,0,0,0,100,97,0,0,0,0,0,0,99,115,0,0,0,0,0,0,97,103,113,0,0,0,0,0,99,104,114,0,0,0,0,0,99,103,103,0,0,0,0,0,99,97,0,0,0,0,0,0,98,115,45,99,121,114,108,0,98,114,120,0,0,0,0,0,122,117,0,0,0,0,0,0,122,104,45,104,97,110,116,0,122,104,0,0,0,0,0,0,121,111,0,0,0,0,0,0,121,97,118,0,0,0,0,0,120,111,103,0,0,0,0,0,120,104,0,0,0,0,0,0,118,117,110,0,0,0,0,0,118,105,0,0,0,0,0,0,98,114,0,0,0,0,0,0,118,97,105,45,108,97,116,110,0,0,0,0,0,0,0,0,118,97,105,0,0,0,0,0,117,114,0,0,0,0,0,0,117,107,0,0,0,0,0,0,116,122,109,0,0,0,0,0,116,119,113,0,0,0,0,0,116,114,0,0,0,0,0,0,116,111,0,0,0,0,0,0,116,105,45,101,114,0,0,0,116,104,0,0,0,0,0,0,98,110,0,0,0,0,0,0,116,101,111,0,0,0,0,0,116,101,0,0,0,0,0,0,116,97,0,0,0,0,0,0,115,119,99,0,0,0,0,0,115,119,0,0,0,0,0,0,115,118,0,0,0,0,0,0,115,114,45,108,97,116,110,0,115,114,0,0,0,0,0,0,115,113,0,0,0,0,0,0,115,111,0,0,0,0,0,0,98,109,0,0,0,0,0,0,115,110,0,0,0,0,0,0,115,108,0,0,0,0,0,0,115,107,0,0,0,0,0,0,115,105,0,0,0,0,0,0,115,104,105,45,116,102,110,103,0,0,0,0,0,0,0,0,115,104,105,0,0,0,0,0,115,103,0,0,0,0,0,0,115,101,115,0,0,0,0,0,115,101,104,0,0,0,0,0,115,98,112,0,0,0,0,0,98,103,0,0,0,0,0,0,115,97,113,0,0,0,0,0,114,119,107,0,0,0,0,0,114,119,0,0,0,0,0,0,114,117,0,0,0,0,0,0,114,111,102,0,0,0,0,0,114,111,0,0,0,0,0,0,114,110,0,0,0,0,0,0,112,116,45,112,116,0,0,0,112,116,0,0,0,0,0,0,112,108,0,0,0,0,0,0,98,101,122,0,0,0,0,0,97,102,0,0,0,0,0,0,82,101,110,100,101,114,81,117,111,116,101,0,0,0,0,0,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,30,32,29,32,26,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,171,0,187,0,57,32,58,32,0,0,0,0,29,32,28,32,25,32,24,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,171,0,187,0,57,32,58,32,0,0,0,0,171,0,187,0,30,32,28,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,30,32,28,32,26,32,24,32,0,0,0,0,171,0,187,0,28,32,29,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,171,0,187,0,57,32,58,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,30,32,28,32,26,32,24,32,0,0,0,0,28,32,29,32,171,0,187,0,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,30,32,28,32,26,32,24,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,30,32,28,32,26,32,24,32,0,0,0,0,171,0,187,0,57,32,58,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,171,0,187,0,24,32,25,32,0,0,0,0,171,0,187,0,28,32,29,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,171,0,187,0,28,32,29,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,171,0,187,0,0,0,0,0,30,32,28,32,26,32,24,32,0,0,0,0,28,32,29,32,171,0,187,0,0,0,0,0,171,0,187,0,28,32,29,32,0,0,0,0,171,0,187,0,57,32,58,32,0,0,0,0,30,32,29,32,26,32,25,32,0,0,0,0,29,32,29,32,25,32,25,32,0,0,0,0,171,0,187,0,171,0,187,0,0,0,0,0,171,0,187,0,57,32,58,32,0,0,0,0,171,0,187,0,57,32,58,32,0,0,0,0,171,0,187,0,57,32,58,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,34,0,34,0,39,0,39,0,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,30,32,28,32,26,32,24,32,0,0,0,0,30,32,29,32,187,0,171,0,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,171,0,187,0,28,32,29,32,0,0,0,0,12,48,13,48,14,48,15,48,0,0,0,0,171,0,187,0,57,32,58,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,171,0,187,0,28,32,29,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,171,0,187,0,57,32,58,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,171,0,187,0,24,32,25,32,0,0,0,0,29,32,29,32,25,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,30,32,28,32,30,32,28,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,30,32,28,32,26,32,24,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,171,0,187,0,28,32,29,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,30,32,28,32,26,32,24,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,171,0,187,0,28,32,29,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,171,0,187,0,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,30,32,29,32,171,0,187,0,0,0,0,0,171,0,187,0,24,32,25,32,0,0,0,0,171,0,187,0,28,32,29,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,30,32,29,32,171,0,187,0,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,171,0,187,0,28,32,29,32,0,0,0,0,29,32,29,32,25,32,25,32,0,0,0,0,30,32,29,32,171,0,187,0,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,171,0,187,0,30,32,28,32,0,0,0,0,171,0,187,0,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,171,0,187,0,28,32,29,32,0,0,0,0,171,0,187,0,30,32,29,32,0,0,0,0,171,0,187,0,30,32,29,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,30,32,28,32,26,32,24,32,0,0,0,0,30,32,28,32,26,32,24,32,0,0,0,0,29,32,29,32,25,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,30,32,28,32,26,32,24,32,0,0,0,0,30,32,28,32,26,32,24,32,0,0,0,0,30,32,28,32,26,32,24,32,0,0,0,0,29,32,29,32,25,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,24,32,25,32,28,32,29,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,171,0,187,0,30,32,28,32,0,0,0,0,29,32,28,32,25,32,24,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,24,32,25,32,28,32,29,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,171,0,187,0,171,0,187,0,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,12,48,13,48,14,48,15,48,0,0,0,0,28,32,29,32,24,32,25,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_fiiiifii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    return Module["dynCall_fiiiifii"](index,a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vif(index,a1,a2) {
  try {
    Module["dynCall_vif"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_fiiifiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    return Module["dynCall_fiiifiii"](index,a1,a2,a3,a4,a5,a6,a7);
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
function invoke_iiiiii(index,a1,a2,a3,a4,a5) {
  try {
    return Module["dynCall_iiiiii"](index,a1,a2,a3,a4,a5);
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
  var __ZTVN7WebCore11RenderQuoteE=(H_BASE+3000)|0;
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
  var invoke_iiii=env.invoke_iiii;
  var invoke_fiiiifii=env.invoke_fiiiifii;
  var invoke_vif=env.invoke_vif;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_fiiifiii=env.invoke_fiiifiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiiiiii=env.invoke_iiiiiii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_iiiiii=env.invoke_iiiiii;
  var invoke_viiii=env.invoke_viiii;
  var _strncmp=env._strncmp;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _bsearch=env._bsearch;
  var _fflush=env._fflush;
  var _strcmp=env._strcmp;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function runPostSets() {
 HEAP32[H_BASE + 1224 >> 2] = H_BASE + 1200;
 HEAP32[H_BASE + 1236 >> 2] = H_BASE + 704;
 HEAP32[H_BASE + 1248 >> 2] = H_BASE + 616;
 HEAP32[H_BASE + 1260 >> 2] = H_BASE + 528;
 HEAP32[H_BASE + 1272 >> 2] = H_BASE + 440;
 HEAP32[H_BASE + 1284 >> 2] = H_BASE + 352;
 HEAP32[H_BASE + 1296 >> 2] = H_BASE + 264;
 HEAP32[H_BASE + 1308 >> 2] = H_BASE + 176;
 HEAP32[H_BASE + 1320 >> 2] = H_BASE + 88;
 HEAP32[H_BASE + 1332 >> 2] = H_BASE + 1192;
 HEAP32[H_BASE + 1344 >> 2] = H_BASE + 1104;
 HEAP32[H_BASE + 1356 >> 2] = H_BASE + 1008;
 HEAP32[H_BASE + 1368 >> 2] = H_BASE + 920;
 HEAP32[H_BASE + 1380 >> 2] = H_BASE + 824;
 HEAP32[H_BASE + 1392 >> 2] = H_BASE + 744;
 HEAP32[H_BASE + 1404 >> 2] = H_BASE + 736;
 HEAP32[H_BASE + 1416 >> 2] = H_BASE + 728;
 HEAP32[H_BASE + 1428 >> 2] = H_BASE + 720;
 HEAP32[H_BASE + 1440 >> 2] = H_BASE + 712;
 HEAP32[H_BASE + 1452 >> 2] = H_BASE + 696;
 HEAP32[H_BASE + 1464 >> 2] = H_BASE + 688;
 HEAP32[H_BASE + 1476 >> 2] = H_BASE + 680;
 HEAP32[H_BASE + 1488 >> 2] = H_BASE + 672;
 HEAP32[H_BASE + 1500 >> 2] = H_BASE + 664;
 HEAP32[H_BASE + 1512 >> 2] = H_BASE + 656;
 HEAP32[H_BASE + 1524 >> 2] = H_BASE + 648;
 HEAP32[H_BASE + 1536 >> 2] = H_BASE + 640;
 HEAP32[H_BASE + 1548 >> 2] = H_BASE + 632;
 HEAP32[H_BASE + 1560 >> 2] = H_BASE + 624;
 HEAP32[H_BASE + 1572 >> 2] = H_BASE + 608;
 HEAP32[H_BASE + 1584 >> 2] = H_BASE + 600;
 HEAP32[H_BASE + 1596 >> 2] = H_BASE + 592;
 HEAP32[H_BASE + 1608 >> 2] = H_BASE + 584;
 HEAP32[H_BASE + 1620 >> 2] = H_BASE + 576;
 HEAP32[H_BASE + 1632 >> 2] = H_BASE + 568;
 HEAP32[H_BASE + 1644 >> 2] = H_BASE + 560;
 HEAP32[H_BASE + 1656 >> 2] = H_BASE + 552;
 HEAP32[H_BASE + 1668 >> 2] = H_BASE + 544;
 HEAP32[H_BASE + 1680 >> 2] = H_BASE + 536;
 HEAP32[H_BASE + 1692 >> 2] = H_BASE + 520;
 HEAP32[H_BASE + 1704 >> 2] = H_BASE + 512;
 HEAP32[H_BASE + 1716 >> 2] = H_BASE + 504;
 HEAP32[H_BASE + 1728 >> 2] = H_BASE + 496;
 HEAP32[H_BASE + 1740 >> 2] = H_BASE + 488;
 HEAP32[H_BASE + 1752 >> 2] = H_BASE + 480;
 HEAP32[H_BASE + 1764 >> 2] = H_BASE + 472;
 HEAP32[H_BASE + 1776 >> 2] = H_BASE + 464;
 HEAP32[H_BASE + 1788 >> 2] = H_BASE + 456;
 HEAP32[H_BASE + 1800 >> 2] = H_BASE + 448;
 HEAP32[H_BASE + 1812 >> 2] = H_BASE + 432;
 HEAP32[H_BASE + 1824 >> 2] = H_BASE + 424;
 HEAP32[H_BASE + 1836 >> 2] = H_BASE + 416;
 HEAP32[H_BASE + 1848 >> 2] = H_BASE + 408;
 HEAP32[H_BASE + 1860 >> 2] = H_BASE + 400;
 HEAP32[H_BASE + 1872 >> 2] = H_BASE + 392;
 HEAP32[H_BASE + 1884 >> 2] = H_BASE + 384;
 HEAP32[H_BASE + 1896 >> 2] = H_BASE + 376;
 HEAP32[H_BASE + 1908 >> 2] = H_BASE + 368;
 HEAP32[H_BASE + 1920 >> 2] = H_BASE + 360;
 HEAP32[H_BASE + 1932 >> 2] = H_BASE + 344;
 HEAP32[H_BASE + 1944 >> 2] = H_BASE + 336;
 HEAP32[H_BASE + 1956 >> 2] = H_BASE + 328;
 HEAP32[H_BASE + 1968 >> 2] = H_BASE + 320;
 HEAP32[H_BASE + 1980 >> 2] = H_BASE + 312;
 HEAP32[H_BASE + 1992 >> 2] = H_BASE + 304;
 HEAP32[H_BASE + 2004 >> 2] = H_BASE + 296;
 HEAP32[H_BASE + 2016 >> 2] = H_BASE + 288;
 HEAP32[H_BASE + 2028 >> 2] = H_BASE + 280;
 HEAP32[H_BASE + 2040 >> 2] = H_BASE + 272;
 HEAP32[H_BASE + 2052 >> 2] = H_BASE + 256;
 HEAP32[H_BASE + 2064 >> 2] = H_BASE + 248;
 HEAP32[H_BASE + 2076 >> 2] = H_BASE + 240;
 HEAP32[H_BASE + 2088 >> 2] = H_BASE + 232;
 HEAP32[H_BASE + 2100 >> 2] = H_BASE + 224;
 HEAP32[H_BASE + 2112 >> 2] = H_BASE + 216;
 HEAP32[H_BASE + 2124 >> 2] = H_BASE + 208;
 HEAP32[H_BASE + 2136 >> 2] = H_BASE + 200;
 HEAP32[H_BASE + 2148 >> 2] = H_BASE + 192;
 HEAP32[H_BASE + 2160 >> 2] = H_BASE + 184;
 HEAP32[H_BASE + 2172 >> 2] = H_BASE + 168;
 HEAP32[H_BASE + 2184 >> 2] = H_BASE + 160;
 HEAP32[H_BASE + 2196 >> 2] = H_BASE + 152;
 HEAP32[H_BASE + 2208 >> 2] = H_BASE + 144;
 HEAP32[H_BASE + 2220 >> 2] = H_BASE + 136;
 HEAP32[H_BASE + 2232 >> 2] = H_BASE + 128;
 HEAP32[H_BASE + 2244 >> 2] = H_BASE + 120;
 HEAP32[H_BASE + 2256 >> 2] = H_BASE + 112;
 HEAP32[H_BASE + 2268 >> 2] = H_BASE + 104;
 HEAP32[H_BASE + 2280 >> 2] = H_BASE + 96;
 HEAP32[H_BASE + 2292 >> 2] = H_BASE + 80;
 HEAP32[H_BASE + 2304 >> 2] = H_BASE + 72;
 HEAP32[H_BASE + 2316 >> 2] = H_BASE + 64;
 HEAP32[H_BASE + 2328 >> 2] = H_BASE + 56;
 HEAP32[H_BASE + 2340 >> 2] = H_BASE + 48;
 HEAP32[H_BASE + 2352 >> 2] = H_BASE + 40;
 HEAP32[H_BASE + 2364 >> 2] = H_BASE + 32;
 HEAP32[H_BASE + 2376 >> 2] = H_BASE + 24;
 HEAP32[H_BASE + 2388 >> 2] = H_BASE + 16;
 HEAP32[H_BASE + 2400 >> 2] = H_BASE + 8;
 HEAP32[H_BASE + 2412 >> 2] = H_BASE + 1184;
 HEAP32[H_BASE + 2424 >> 2] = H_BASE + 1176;
 HEAP32[H_BASE + 2436 >> 2] = H_BASE + 1168;
 HEAP32[H_BASE + 2448 >> 2] = H_BASE + 1160;
 HEAP32[H_BASE + 2460 >> 2] = H_BASE + 1152;
 HEAP32[H_BASE + 2472 >> 2] = H_BASE + 1144;
 HEAP32[H_BASE + 2484 >> 2] = H_BASE + 1136;
 HEAP32[H_BASE + 2496 >> 2] = H_BASE + 1128;
 HEAP32[H_BASE + 2508 >> 2] = H_BASE + 1120;
 HEAP32[H_BASE + 2520 >> 2] = H_BASE + 1112;
 HEAP32[H_BASE + 2532 >> 2] = H_BASE + 1096;
 HEAP32[H_BASE + 2544 >> 2] = H_BASE + 1088;
 HEAP32[H_BASE + 2556 >> 2] = H_BASE + 1080;
 HEAP32[H_BASE + 2568 >> 2] = H_BASE + 1072;
 HEAP32[H_BASE + 2580 >> 2] = H_BASE + 1064;
 HEAP32[H_BASE + 2592 >> 2] = H_BASE + 1048;
 HEAP32[H_BASE + 2604 >> 2] = H_BASE + 1040;
 HEAP32[H_BASE + 2616 >> 2] = H_BASE + 1032;
 HEAP32[H_BASE + 2628 >> 2] = H_BASE + 1024;
 HEAP32[H_BASE + 2640 >> 2] = H_BASE + 1016;
 HEAP32[H_BASE + 2652 >> 2] = H_BASE + 1e3;
 HEAP32[H_BASE + 2664 >> 2] = H_BASE + 992;
 HEAP32[H_BASE + 2676 >> 2] = H_BASE + 984;
 HEAP32[H_BASE + 2688 >> 2] = H_BASE + 976;
 HEAP32[H_BASE + 2700 >> 2] = H_BASE + 968;
 HEAP32[H_BASE + 2712 >> 2] = H_BASE + 960;
 HEAP32[H_BASE + 2724 >> 2] = H_BASE + 952;
 HEAP32[H_BASE + 2736 >> 2] = H_BASE + 944;
 HEAP32[H_BASE + 2748 >> 2] = H_BASE + 936;
 HEAP32[H_BASE + 2760 >> 2] = H_BASE + 928;
 HEAP32[H_BASE + 2772 >> 2] = H_BASE + 912;
 HEAP32[H_BASE + 2784 >> 2] = H_BASE + 904;
 HEAP32[H_BASE + 2796 >> 2] = H_BASE + 896;
 HEAP32[H_BASE + 2808 >> 2] = H_BASE + 888;
 HEAP32[H_BASE + 2820 >> 2] = H_BASE + 880;
 HEAP32[H_BASE + 2832 >> 2] = H_BASE + 872;
 HEAP32[H_BASE + 2844 >> 2] = H_BASE + 864;
 HEAP32[H_BASE + 2856 >> 2] = H_BASE + 856;
 HEAP32[H_BASE + 2868 >> 2] = H_BASE + 848;
 HEAP32[H_BASE + 2880 >> 2] = H_BASE + 832;
 HEAP32[H_BASE + 2892 >> 2] = H_BASE + 816;
 HEAP32[H_BASE + 2904 >> 2] = H_BASE + 808;
 HEAP32[H_BASE + 2916 >> 2] = H_BASE + 800;
 HEAP32[H_BASE + 2928 >> 2] = H_BASE + 792;
 HEAP32[H_BASE + 2940 >> 2] = H_BASE + 784;
 HEAP32[H_BASE + 2952 >> 2] = H_BASE + 776;
 HEAP32[H_BASE + 2964 >> 2] = H_BASE + 768;
 HEAP32[H_BASE + 2976 >> 2] = H_BASE + 760;
 HEAP32[H_BASE + 2988 >> 2] = H_BASE + 752;
 HEAP32[H_BASE + 3008 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 3012 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 3016 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 3020 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 3024 >> 2] = F_BASE_ii + 190;
 HEAP32[H_BASE + 3028 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 3032 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 3036 >> 2] = F_BASE_ii + 160;
 HEAP32[H_BASE + 3040 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 3044 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 3048 >> 2] = F_BASE_ii + 216;
 HEAP32[H_BASE + 3052 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 3056 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 3060 >> 2] = F_BASE_ii + 176;
 HEAP32[H_BASE + 3064 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 3068 >> 2] = F_BASE_ii + 200;
 HEAP32[H_BASE + 3072 >> 2] = F_BASE_ii + 208;
 HEAP32[H_BASE + 3076 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 3080 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 3084 >> 2] = F_BASE_ii + 166;
 HEAP32[H_BASE + 3088 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 3092 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 3096 >> 2] = F_BASE_ii + 162;
 HEAP32[H_BASE + 3100 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 3104 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 3108 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 3112 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 3116 >> 2] = F_BASE_ii + 214;
 HEAP32[H_BASE + 3120 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 3124 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 3128 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 3132 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 3136 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 3140 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 3144 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 3148 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 3152 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 3156 >> 2] = F_BASE_ii + 186;
 HEAP32[H_BASE + 3160 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 3164 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 3168 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 3172 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 3176 >> 2] = F_BASE_ii + 180;
 HEAP32[H_BASE + 3180 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 3184 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 3188 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 3192 >> 2] = F_BASE_ii + 218;
 HEAP32[H_BASE + 3196 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 3200 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 3204 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 3208 >> 2] = F_BASE_ii + 156;
 HEAP32[H_BASE + 3212 >> 2] = F_BASE_ii + 222;
 HEAP32[H_BASE + 3216 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 3220 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 3224 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 3228 >> 2] = F_BASE_ii + 152;
 HEAP32[H_BASE + 3232 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 3236 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 3240 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 3244 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 3248 >> 2] = F_BASE_ii + 220;
 HEAP32[H_BASE + 3252 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 3256 >> 2] = F_BASE_ii + 174;
 HEAP32[H_BASE + 3260 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 3264 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 3268 >> 2] = F_BASE_ii + 170;
 HEAP32[H_BASE + 3272 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 3276 >> 2] = F_BASE_ii + 206;
 HEAP32[H_BASE + 3280 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 3284 >> 2] = F_BASE_ii + 188;
 HEAP32[H_BASE + 3288 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 3292 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 3296 >> 2] = F_BASE_ii + 196;
 HEAP32[H_BASE + 3300 >> 2] = F_BASE_ii + 184;
 HEAP32[H_BASE + 3304 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 3308 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 3312 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 3316 >> 2] = F_BASE_ii + 182;
 HEAP32[H_BASE + 3320 >> 2] = F_BASE_ii + 194;
 HEAP32[H_BASE + 3324 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 3328 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 3332 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 3336 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 3340 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 3344 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 3348 >> 2] = F_BASE_ii + 204;
 HEAP32[H_BASE + 3352 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 3356 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 3360 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 3364 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 3368 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 3372 >> 2] = F_BASE_ii + 168;
 HEAP32[H_BASE + 3376 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 3380 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 3384 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 3388 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 3392 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 3396 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 3400 >> 2] = F_BASE_ii + 210;
 HEAP32[H_BASE + 3404 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 3408 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 3412 >> 2] = F_BASE_ii + 192;
 HEAP32[H_BASE + 3416 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 3420 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 3424 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 3428 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 3432 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 3436 >> 2] = F_BASE_iiiiii + 2;
 HEAP32[H_BASE + 3440 >> 2] = F_BASE_ii + 212;
 HEAP32[H_BASE + 3444 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 3448 >> 2] = F_BASE_ii + 224;
 HEAP32[H_BASE + 3452 >> 2] = F_BASE_ii + 202;
 HEAP32[H_BASE + 3456 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 3460 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 3464 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 3468 >> 2] = F_BASE_iiiiiii + 2;
 HEAP32[H_BASE + 3472 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 3476 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 3480 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 3484 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 3488 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 3492 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 3496 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 3500 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 3504 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 3508 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 3512 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 3516 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 3520 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 3524 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 3528 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 3532 >> 2] = F_BASE_ii + 164;
 HEAP32[H_BASE + 3536 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 3540 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 3544 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 3548 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 3552 >> 2] = F_BASE_viiiii + 6;
 HEAP32[H_BASE + 3556 >> 2] = F_BASE_ii + 198;
 HEAP32[H_BASE + 3560 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 3564 >> 2] = F_BASE_ii + 158;
 HEAP32[H_BASE + 3568 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 3572 >> 2] = F_BASE_ii + 154;
 HEAP32[H_BASE + 3576 >> 2] = F_BASE_ii + 172;
 HEAP32[H_BASE + 3580 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 3584 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 3588 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 3592 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 3596 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 3600 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 3604 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 3608 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 3612 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 3616 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 3620 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 3624 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 3628 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 3632 >> 2] = F_BASE_ii + 178;
 HEAP32[H_BASE + 3636 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 3640 >> 2] = F_BASE_fiiiifii + 2;
 HEAP32[H_BASE + 3644 >> 2] = F_BASE_fiiifiii + 2;
 HEAP32[H_BASE + 3648 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 3652 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 3656 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 3660 >> 2] = F_BASE_v + 4;
 HEAP32[H_BASE + 3664 >> 2] = F_BASE_vif + 2;
 HEAP32[H_BASE + 3668 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 3672 >> 2] = F_BASE_ii + 92;
}
function __ZNK7WebCore11RenderQuote12originalTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 40 | 0;
 i8 = i3 + 48 | 0;
 i9 = i3 + 56 | 0;
 i10 = i3 + 64 | 0;
 i11 = i3 + 72 | 0;
 i12 = i2 + 60 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 if ((i13 | 0) < 0) {
  i14 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
  HEAP32[i1 >> 2] = i14;
  if ((i14 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i15 = i14 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
  STACKTOP = i3;
  return;
 }
 i15 = HEAP32[i2 + 56 >> 2] | 0;
 if ((i15 | 0) == 2 | (i15 | 0) == 3) {
  i14 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
  HEAP32[i1 >> 2] = i14;
  if ((i14 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i16 = i14 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
  STACKTOP = i3;
  return;
 } else if ((i15 | 0) == 0) {
  i17 = 1;
 } else if ((i15 | 0) == 1) {
  i17 = 0;
 } else {
  i15 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
  HEAP32[i1 >> 2] = i15;
  if ((i15 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i16 = i15 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
  STACKTOP = i3;
  return;
 }
 i16 = HEAP32[(HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0;
 i2 = HEAP32[i16 + 116 >> 2] | 0;
 if ((i2 | 0) != 0) {
  if (i17) {
   i18 = __ZNK7WebCore10QuotesData9openQuoteEj(i2, i13) | 0;
  } else {
   i18 = __ZNK7WebCore10QuotesData10closeQuoteEj(i2, i13) | 0;
  }
  i2 = HEAP32[i18 >> 2] | 0;
  HEAP32[i1 >> 2] = i2;
  if ((i2 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i18 = i2 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
  STACKTOP = i3;
  return;
 }
 i18 = HEAP32[i16 + 108 >> 2] | 0;
 i16 = i4 | 0;
 i2 = i5;
 L32 : do {
  if ((i18 | 0) == 0) {
   i19 = i13;
  } else {
   i15 = HEAP32[i18 + 4 >> 2] | 0;
   if ((i15 | 0) == 0 | i15 >>> 0 > 8 >>> 0) {
    i19 = i13;
    break;
   }
   i14 = i18 + 16 | 0;
   i20 = i18 + 8 | 0;
   i21 = i20;
   i22 = i20 | 0;
   i20 = 0;
   while (1) {
    if ((HEAP32[i14 >> 2] & 32 | 0) == 0) {
     i23 = HEAP16[(HEAP32[i21 >> 2] | 0) + (i20 << 1) >> 1] | 0;
    } else {
     i23 = HEAPU8[(HEAP32[i22 >> 2] | 0) + i20 | 0] | 0;
    }
    if ((i23 & 65535) >>> 0 > 64 >>> 0) {
     i24 = ((i23 & 65535) >>> 0 < 91 >>> 0) << 5;
    } else {
     i24 = 0;
    }
    i25 = i24 | i23;
    if (!((i25 - 97 & 65535) >>> 0 < 26 >>> 0 | i25 << 16 >> 16 == 45)) {
     i19 = i13;
     break L32;
    }
    HEAP8[i4 + i20 | 0] = i25;
    i20 = i20 + 1 | 0;
    if (i20 >>> 0 >= i15 >>> 0) {
     break;
    }
   }
   HEAP8[i4 + i15 | 0] = 0;
   HEAP32[i5 >> 2] = i16;
   i20 = i5 + 4 | 0;
   HEAP32[i20 >> 2] = 0;
   HEAP32[i20 + 4 >> 2] = 0;
   i20 = _bsearch(i2 | 0, H_BASE + 1224 | 0, 148, 12, F_BASE_iii + 4 | 0) | 0;
   i22 = HEAP32[i12 >> 2] | 0;
   if ((i20 | 0) == 0) {
    i19 = i22;
    break;
   }
   i21 = (i22 | 0) != 0;
   do {
    if (i17) {
     if (i21) {
      i26 = i20 + 8 | 0;
      break;
     } else {
      i26 = i20 + 4 | 0;
      break;
     }
    } else {
     if (i21) {
      i26 = i20 + 10 | 0;
      break;
     } else {
      i26 = i20 + 6 | 0;
      break;
     }
    }
   } while (0);
   i20 = HEAP16[i26 >> 1] | 0;
   HEAP16[i6 >> 1] = i20;
   i21 = 0;
   while (1) {
    if (i21 >>> 0 >= 16 >>> 0) {
     i27 = 38;
     break;
    }
    i28 = H_BASE + 3704 + (i21 << 3) | 0;
    i15 = HEAP16[i28 >> 1] | 0;
    if (i15 << 16 >> 16 == i20 << 16 >> 16) {
     i27 = 35;
     break;
    }
    if (i15 << 16 >> 16 == 0) {
     i27 = 37;
     break;
    } else {
     i21 = i21 + 1 | 0;
    }
   }
   if ((i27 | 0) == 35) {
    i29 = HEAP32[H_BASE + 3704 + (i21 << 3) + 4 >> 2] | 0;
   } else if ((i27 | 0) == 37) {
    HEAP16[i28 >> 1] = i20;
    __ZN3WTF10StringImpl20create8BitIfPossibleEPKtj(i7, i6, 1);
    i15 = HEAP32[i7 >> 2] | 0;
    HEAP32[H_BASE + 3704 + (i21 << 3) + 4 >> 2] = i15;
    i29 = i15;
   } else if ((i27 | 0) == 38) {
    i29 = __ZN3WTF10StringImpl5emptyEv() | 0;
   }
   HEAP32[i1 >> 2] = i29;
   if ((i29 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i15 = i29 | 0;
   HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
   STACKTOP = i3;
   return;
  }
 } while (0);
 do {
  if ((i19 | 0) == 0) {
   if (HEAP8[H_BASE + 3688 | 0] | 0) {
    i30 = HEAP32[H_BASE + 3832 >> 2] | 0;
    break;
   }
   HEAP16[i10 >> 1] = 34;
   i29 = 0;
   while (1) {
    if (i29 >>> 0 >= 16 >>> 0) {
     i27 = 60;
     break;
    }
    i31 = H_BASE + 3704 + (i29 << 3) | 0;
    i7 = HEAP16[i31 >> 1] | 0;
    if (i7 << 16 >> 16 == 34) {
     i27 = 57;
     break;
    }
    if (i7 << 16 >> 16 == 0) {
     i27 = 59;
     break;
    } else {
     i29 = i29 + 1 | 0;
    }
   }
   if ((i27 | 0) == 57) {
    i32 = HEAP32[H_BASE + 3704 + (i29 << 3) + 4 >> 2] | 0;
   } else if ((i27 | 0) == 59) {
    HEAP16[i31 >> 1] = 34;
    __ZN3WTF10StringImpl20create8BitIfPossibleEPKtj(i11, i10, 1);
    i21 = HEAP32[i11 >> 2] | 0;
    HEAP32[H_BASE + 3704 + (i29 << 3) + 4 >> 2] = i21;
    i32 = i21;
   } else if ((i27 | 0) == 60) {
    i32 = __ZN3WTF10StringImpl5emptyEv() | 0;
   }
   HEAP32[H_BASE + 3832 >> 2] = i32;
   HEAP8[H_BASE + 3688 | 0] = 1;
   i30 = i32;
  } else {
   if (HEAP8[H_BASE + 3696 | 0] | 0) {
    i30 = HEAP32[H_BASE + 3840 >> 2] | 0;
    break;
   }
   HEAP16[i8 >> 1] = 39;
   i21 = 0;
   while (1) {
    if (i21 >>> 0 >= 16 >>> 0) {
     i27 = 50;
     break;
    }
    i33 = H_BASE + 3704 + (i21 << 3) | 0;
    i20 = HEAP16[i33 >> 1] | 0;
    if (i20 << 16 >> 16 == 39) {
     i27 = 47;
     break;
    }
    if (i20 << 16 >> 16 == 0) {
     i27 = 49;
     break;
    } else {
     i21 = i21 + 1 | 0;
    }
   }
   if ((i27 | 0) == 47) {
    i34 = HEAP32[H_BASE + 3704 + (i21 << 3) + 4 >> 2] | 0;
   } else if ((i27 | 0) == 49) {
    HEAP16[i33 >> 1] = 39;
    __ZN3WTF10StringImpl20create8BitIfPossibleEPKtj(i9, i8, 1);
    i29 = HEAP32[i9 >> 2] | 0;
    HEAP32[H_BASE + 3704 + (i21 << 3) + 4 >> 2] = i29;
    i34 = i29;
   } else if ((i27 | 0) == 50) {
    i34 = __ZN3WTF10StringImpl5emptyEv() | 0;
   }
   HEAP32[H_BASE + 3840 >> 2] = i34;
   HEAP8[H_BASE + 3696 | 0] = 1;
   i30 = i34;
  }
 } while (0);
 HEAP32[i1 >> 2] = i30;
 if ((i30 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i30 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderQuote11attachQuoteEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 4 | 0;
 L1 : do {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 216 >> 2] | 0) != 0) {
   i5 = __ZNK7WebCore12RenderObject18previousInPreOrderEv(i1 | 0) | 0;
   if ((i5 | 0) == 0) {
    break;
   } else {
    i6 = i5;
   }
   while (1) {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 64 >> 2] & 255](i6) | 0) {
     if ((HEAP8[i6 + 72 | 0] & 1) != 0) {
      break;
     }
    }
    i5 = __ZNK7WebCore12RenderObject18previousInPreOrderEv(i6) | 0;
    if ((i5 | 0) == 0) {
     break L1;
    } else {
     i6 = i5;
    }
   }
   HEAP32[i1 + 68 >> 2] = i6;
   i5 = i1 + 64 | 0;
   HEAP32[i5 >> 2] = HEAP32[i6 + 64 >> 2];
   HEAP32[i6 + 64 >> 2] = i1;
   i7 = HEAP32[i5 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   HEAP32[i7 + 68 >> 2] = i1;
  }
 } while (0);
 do {
  if ((HEAP32[i1 + 68 >> 2] | 0) == 0) {
   i6 = (HEAP32[i4 >> 2] | 0) + 20 | 0;
   i7 = i1 + 64 | 0;
   HEAP32[i7 >> 2] = HEAP32[(HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 216 >> 2];
   HEAP32[(HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 216 >> 2] = i1;
   i6 = HEAP32[i7 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   HEAP32[i6 + 68 >> 2] = i1;
  }
 } while (0);
 HEAP8[i1 + 72 | 0] = 1;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i6 = i1;
 while (1) {
  i1 = HEAP32[i6 + 68 >> 2] | 0;
  do {
   if ((i1 | 0) == 0) {
    i8 = 0;
   } else {
    i7 = HEAP32[i1 + 60 >> 2] | 0;
    i5 = (i7 | 0) < 0 ? 0 : i7;
    i7 = HEAP32[i1 + 56 >> 2] | 0;
    if (!((i7 | 0) == 0 | (i7 | 0) == 2)) {
     i8 = i5;
     break;
    }
    i8 = i5 + 1 | 0;
   }
  } while (0);
  i1 = HEAP32[i6 + 56 >> 2] | 0;
  if ((i1 | 0) == 3 | (i1 | 0) == 1) {
   i9 = i8 - 1 | 0;
  } else {
   i9 = i8;
  }
  i1 = i6 + 60 | 0;
  do {
   if ((HEAP32[i1 >> 2] | 0) != (i9 | 0)) {
    HEAP32[i1 >> 2] = i9;
    __ZNK7WebCore11RenderQuote12originalTextEv(i3, i6);
    __ZN7WebCore10RenderText7setTextERKN3WTF6StringEb(i6 | 0, i3, 1);
    i5 = HEAP32[i4 >> 2] | 0;
    if ((i5 | 0) == 0) {
     break;
    }
    i7 = i5 | 0;
    i10 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i5);
     break;
    } else {
     HEAP32[i7 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i6 = HEAP32[i6 + 64 >> 2] | 0;
  if ((i6 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11RenderQuote11detachQuoteEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 72 | 0;
 if ((HEAP8[i4] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i1 + 68 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 216 >> 2] = HEAP32[i1 + 64 >> 2];
 } else {
  HEAP32[i6 + 64 >> 2] = HEAP32[i1 + 64 >> 2];
 }
 i6 = i1 + 64 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i7 + 68 >> 2] = HEAP32[i5 >> 2];
 }
 do {
  if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) == 0) {
   i7 = HEAP32[i6 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i8 = i3 | 0;
   i9 = i7;
   while (1) {
    i7 = HEAP32[i9 + 68 >> 2] | 0;
    do {
     if ((i7 | 0) == 0) {
      i10 = 0;
     } else {
      i11 = HEAP32[i7 + 60 >> 2] | 0;
      i12 = (i11 | 0) < 0 ? 0 : i11;
      i11 = HEAP32[i7 + 56 >> 2] | 0;
      if (!((i11 | 0) == 0 | (i11 | 0) == 2)) {
       i10 = i12;
       break;
      }
      i10 = i12 + 1 | 0;
     }
    } while (0);
    i7 = HEAP32[i9 + 56 >> 2] | 0;
    if ((i7 | 0) == 3 | (i7 | 0) == 1) {
     i13 = i10 - 1 | 0;
    } else {
     i13 = i10;
    }
    i7 = i9 + 60 | 0;
    do {
     if ((HEAP32[i7 >> 2] | 0) != (i13 | 0)) {
      HEAP32[i7 >> 2] = i13;
      __ZNK7WebCore11RenderQuote12originalTextEv(i3, i9);
      __ZN7WebCore10RenderText7setTextERKN3WTF6StringEb(i9 | 0, i3, 1);
      i12 = HEAP32[i8 >> 2] | 0;
      if ((i12 | 0) == 0) {
       break;
      }
      i11 = i12 | 0;
      i14 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
      if ((i14 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i12);
       break;
      } else {
       HEAP32[i11 >> 2] = i14;
       break;
      }
     }
    } while (0);
    i9 = HEAP32[i9 + 64 >> 2] | 0;
    if ((i9 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 HEAP8[i4] = 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i5 >> 2] = 0;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11RenderQuote11updateDepthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 68 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = 0;
  } else {
   i6 = HEAP32[i4 + 60 >> 2] | 0;
   i7 = (i6 | 0) < 0 ? 0 : i6;
   i6 = HEAP32[i4 + 56 >> 2] | 0;
   if (!((i6 | 0) == 0 | (i6 | 0) == 2)) {
    i5 = i7;
    break;
   }
   i5 = i7 + 1 | 0;
  }
 } while (0);
 i4 = HEAP32[i1 + 56 >> 2] | 0;
 if ((i4 | 0) == 3 | (i4 | 0) == 1) {
  i8 = i5 - 1 | 0;
 } else {
  i8 = i5;
 }
 i5 = i1 + 60 | 0;
 if ((HEAP32[i5 >> 2] | 0) == (i8 | 0)) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i5 >> 2] = i8;
 __ZNK7WebCore11RenderQuote12originalTextEv(i3, i1);
 __ZN7WebCore10RenderText7setTextERKN3WTF6StringEb(i1 | 0, i3, 1);
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i1 | 0;
 i8 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i3 >> 2] = i8;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore11RenderQuote14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 | 0;
 __ZN7WebCore10RenderText14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE(i6, i2, i3);
 __ZNK7WebCore11RenderQuote12originalTextEv(i5, i1);
 __ZN7WebCore10RenderText7setTextERKN3WTF6StringEb(i6, i5, 1);
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i6 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i4;
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
function fiiiifii___ZNK7WebCore10RenderText5widthEjjRKNS_4FontEfPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE__wrapper(i1, i2, i3, i4, d5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 return +__ZNK7WebCore10RenderText5widthEjjRKNS_4FontEfPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, +d5, i6 | 0, i7 | 0);
}
function fiiifiii___ZNK7WebCore10RenderText5widthEjjfbPN3WTF7HashSetIPKNS_14SimpleFontDataENS1_7PtrHashIS5_EENS1_10HashTraitsIS5_EEEEPNS_13GlyphOverflowE__wrapper(i1, i2, i3, d4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 return +__ZNK7WebCore10RenderText5widthEjjfbPN3WTF7HashSetIPKNS_14SimpleFontDataENS1_7PtrHashIS5_EENS1_10HashTraitsIS5_EEEEPNS_13GlyphOverflowE(i1 | 0, i2 | 0, i3 | 0, +d4, i5 | 0, i6 | 0, i7 | 0);
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
function iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return __ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZN7WebCore11RenderQuoteC2ERNS_8DocumentENS_9QuoteTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore10RenderTextC2ERNS_8DocumentERKN3WTF6StringE(i1 | 0, i2, __ZN3WTF11emptyStringEv() | 0);
 HEAP32[i1 >> 2] = H_BASE + 3008;
 HEAP32[i1 + 56 >> 2] = i3;
 HEAP32[i1 + 60 >> 2] = -1;
 HEAP32[i1 + 64 >> 2] = 0;
 HEAP32[i1 + 68 >> 2] = 0;
 HEAP8[i1 + 72 | 0] = 0;
 return;
}
function __ZN7WebCore11RenderQuoteC1ERNS_8DocumentENS_9QuoteTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore10RenderTextC2ERNS_8DocumentERKN3WTF6StringE(i1 | 0, i2, __ZN3WTF11emptyStringEv() | 0);
 HEAP32[i1 >> 2] = H_BASE + 3008;
 HEAP32[i1 + 56 >> 2] = i3;
 HEAP32[i1 + 60 >> 2] = -1;
 HEAP32[i1 + 64 >> 2] = 0;
 HEAP32[i1 + 68 >> 2] = 0;
 HEAP8[i1 + 72 | 0] = 0;
 return;
}
function viiiii___ZNK7WebCore12RenderObject19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZNK7WebCore12RenderObject19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function viiii___ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiii___ZNK7WebCore12RenderObject25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore12RenderObject25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viii___ZNK7WebCore10RenderText13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore10RenderText13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function viiii___ZNK7WebCore12RenderObject21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore12RenderObject21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function iiii___ZNK7WebCore12RenderObject22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore12RenderObject22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function vii___ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function viiiii___ZNK7WebCore12RenderObject19offsetFromContainerEPS0_RKNS_11LayoutPointEPb__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZNK7WebCore12RenderObject19offsetFromContainerEPS0_RKNS_11LayoutPointEPb(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function viiiii___ZN7WebCore10RenderText14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore10RenderText14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function viii___ZNK7WebCore10RenderText13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore10RenderText13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb(i1 | 0, i2 | 0, i3 | 0);
}
function viiii___ZN7WebCore10RenderText23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore10RenderText23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function vii___ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore12RenderObject22outlineStyleForRepaintEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
  i2 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
  return i2 | 0;
 } else {
  i2 = HEAP32[i1 + 36 >> 2] | 0;
  return i2 | 0;
 }
 return 0;
}
function viii___ZNK7WebCore10RenderText29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore10RenderText29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore12RenderObject19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12RenderObject19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore10RenderText11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return 0;
}
function dynCall_fiiiifii(i1, i2, i3, i4, i5, d6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 i7 = i7 | 0;
 i8 = i8 | 0;
 return +FUNCTION_TABLE_fiiiifii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, +d6, i7 | 0, i8 | 0);
}
function dynCall_fiiifiii(i1, i2, i3, i4, d5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 return +FUNCTION_TABLE_fiiifiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, +d5, i6 | 0, i7 | 0, i8 | 0);
}
function viii___ZNK7WebCore12RenderObject23mapAbsoluteToLocalPointEjRNS_14TransformStateE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore12RenderObject23mapAbsoluteToLocalPointEjRNS_14TransformStateE(i1 | 0, i2 | 0, i3 | 0);
}
function iiii___ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function viii___ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE(i1 | 0, i2 | 0, i3 | 0);
}
function dynCall_iiiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 return FUNCTION_TABLE_iiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0) | 0;
}
function __ZN7WebCore12RenderObject17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return;
}
function vii___ZN7WebCore10RenderText17setSelectionStateENS_12RenderObject14SelectionStateE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore10RenderText17setSelectionStateENS_12RenderObject14SelectionStateE(i1 | 0, i2 | 0);
}
function viii___ZN7WebCore10RenderText16positionForPointERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore10RenderText16positionForPointERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore12RenderObject23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function dynCall_iiiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return FUNCTION_TABLE_iiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
}
function iii___ZNK7WebCore10RenderText33previousOffsetForBackwardDeletionEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore10RenderText33previousOffsetForBackwardDeletionEi(i1 | 0, i2 | 0) | 0;
}
function iii___ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE(i1 | 0, i2 | 0) | 0;
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function viii___ZN7WebCore10RenderText7setTextERKN3WTF6StringEb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore10RenderText7setTextERKN3WTF6StringEb(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv(i1 | 0, i2 | 0);
}
function __ZN7WebCore11RenderQuote21willBeRemovedFromTreeEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12RenderObject21willBeRemovedFromTreeEv(i1 | 0);
 __ZN7WebCore11RenderQuote11detachQuoteEv(i1);
 return;
}
function vii___ZN7WebCore10RenderText15setTextInternalERKN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore10RenderText15setTextInternalERKN3WTF6StringE(i1 | 0, i2 | 0);
}
function vif___ZN7WebCore10RenderText29computePreferredLogicalWidthsEf__wrapper(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 __ZN7WebCore10RenderText29computePreferredLogicalWidthsEf(i1 | 0, +d2);
}
function __ZN7WebCore11RenderQuote15willBeDestroyedEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11RenderQuote11detachQuoteEv(i1);
 __ZN7WebCore10RenderText15willBeDestroyedEv(i1 | 0);
 return;
}
function ii___ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv(i1 | 0) | 0;
}
function ii___ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv(i1 | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function iii___ZNK7WebCore10RenderText14previousOffsetEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore10RenderText14previousOffsetEi(i1 | 0, i2 | 0) | 0;
}
function vii___ZNK7WebCore12RenderObject17strokeBoundingBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject17strokeBoundingBoxEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore12RenderObject17objectBoundingBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject17objectBoundingBoxEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore10RenderText16linesBoundingBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore10RenderText16linesBoundingBoxEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore12RenderObject15updateDragStateEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12RenderObject15updateDragStateEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore12RenderObject22localToParentTransformEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject22localToParentTransformEv(i1 | 0) | 0;
}
function iii___ZNK7WebCore10RenderText10nextOffsetEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore10RenderText10nextOffsetEi(i1 | 0, i2 | 0) | 0;
}
function __ZN7WebCoreL36quoteTableLanguageComparisonFunctionEPKvS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return _strcmp(HEAP32[i1 >> 2] | 0, HEAP32[i2 >> 2] | 0) | 0;
}
function __ZN7WebCore11RenderQuoteD0Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 3008;
 __ZN7WebCore10RenderTextD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function vi___ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv(i1 | 0);
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function b4(i1, i2, i3, d4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(4);
 return +0;
}
function b1(i1, i2, i3, i4, d5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(1);
 return +0;
}
function __ZNK7WebCore12RenderObject7isEmptyEv(i1) {
 i1 = i1 | 0;
 return (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 255](i1) | 0) == 0 | 0;
}
function __ZNK7WebCore12RenderObject16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function ii___ZNK7WebCore12RenderObject15innerLineHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject15innerLineHeightEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore10RenderText17previousCharacterEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore10RenderText17previousCharacterEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore12RenderObject14firstLineBlockEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject14firstLineBlockEv(i1 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 31](i2 | 0, i3 | 0, i4 | 0);
}
function ii___ZNK7WebCore10RenderText14isTextFragmentEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore10RenderText14isTextFragmentEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore10RenderText14caretMinOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore10RenderText14caretMinOffsetEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore10RenderText14caretMaxOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore10RenderText14caretMaxOffsetEv(i1 | 0) | 0;
}
function __ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
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
function vi___ZN7WebCore12RenderObject16insertedIntoTreeEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12RenderObject16insertedIntoTreeEv(i1 | 0);
}
function b7(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(7);
 return 0;
}
function __ZN7WebCore11RenderQuoteD2Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 3008;
 __ZN7WebCore10RenderTextD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore11RenderQuoteD1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 3008;
 __ZN7WebCore10RenderTextD2Ev(i1 | 0);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 15](i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore12RenderObject24minPreferredLogicalWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore12RenderObject24maxPreferredLogicalWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore12RenderObject12imageChangedEPKvPKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function b12(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(12);
 return 0;
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
function __ZNK7WebCore10RenderText6lengthEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(HEAP32[i1 + 44 >> 2] | 0) + 4 >> 2] | 0;
}
function v___ZNK7WebCore12RenderObject14localTransformEv__wrapper() {
 __ZNK7WebCore12RenderObject14localTransformEv();
}
function dynCall_vif(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 FUNCTION_TABLE_vif[i1 & 3](i2 | 0, +d3);
}
function b3(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(3);
}
function v___ZN7WebCore10RenderText13createTextBoxEv__wrapper() {
 __ZN7WebCore10RenderText13createTextBoxEv();
}
function __ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 255](i2 | 0) | 0;
}
function __ZN7WebCore12RenderObject36computeBackgroundIsKnownToBeObscuredEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b13(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(13);
}
function __ZNK7WebCore12RenderObject27isSVGTransformableContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject26isInlineBlockOrInlineTableEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore11RenderQuote10renderNameEv(i1) {
 i1 = i1 | 0;
 return H_BASE + 1208 | 0;
}
function __ZNK7WebCore12RenderObject24shouldPaintSelectionGapsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZNK7WebCore17CachedImageClient18resourceClientTypeEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore12RenderObject23isTextControlInnerBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject23createsAnonymousWrapperEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isSVGViewportContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isSVGResourceContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isRenderMathMLFractionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject21isRenderScrollbarPartEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject20isStretchingChildrenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject20isSVGHiddenContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject20isRenderMathMLFencedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore12RenderObject23setNeedsTransformUpdateEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore12RenderObject21needsBoundariesUpdateEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19virtualContinuationEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isSnapshottedPlugInEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isSVGResourceFilterEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isRenderMathMLBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isFileUploadControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b0(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(0);
 return 0;
}
function __ZNK7WebCore12RenderObject18isSVGForeignObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18isRenderMathMLRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18isRenderMathMLMathEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18isRenderFullScreenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18isRenderFlowThreadEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject17isSVGGradientStopEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject17isRenderMathMLRowEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject16isRenderTableColEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject16isRenderSVGBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject16isEmbeddedObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10RenderText18canBeSelectionLeafEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore12RenderObject15isSVGInlineTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject15isDetailsMarkerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isTableSectionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isTableCaptionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isSVGContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isRenderRegionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isRenderIFrameEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isRenderButtonEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14firstChildSlowEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore12RenderObject17updateFromElementEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore12RenderObject13lastChildSlowEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isTextControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isSliderThumbEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isSVGTextPathEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isRenderImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isFlexibleBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isCombineTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10RenderText15canHaveChildrenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject12isRenderGridEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject12isListMarkerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject11isTextFieldEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject11isTableCellEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject11isSVGInlineEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isTextAreaEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isTableRowEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isSVGShapeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isSVGImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isRubyTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isRubyBaseEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isProgressEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isMenuListEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isListItemEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isFrameSetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isFieldsetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isSVGTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isSVGRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isSVGPathEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isRubyRunEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isReplicaEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isListBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isCounterEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b9(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(9);
}
function __ZNK7WebCore12RenderObject8isWidgetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject8isSliderEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject8isCanvasEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isVideoEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isTableEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isMeterEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isMediaEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isFrameEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject6isRubyEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore11RenderQuote7isQuoteEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore12RenderObject5isWBREv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b11(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(11);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 7]();
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
}
function stackRestore(i1) {
 i1 = i1 | 0;
 STACKTOP = i1;
}
function b2(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(2);
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
function b8(i1) {
 i1 = i1 | 0;
 abort(8);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b5(i1) {
 i1 = i1 | 0;
 abort(5);
}
function b10() {
 abort(10);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiii = [b0,b0,iiii___ZNK7WebCore12RenderObject22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE__wrapper,b0,iiii___ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE__wrapper,b0,b0,b0];
  var FUNCTION_TABLE_fiiiifii = [b1,b1,fiiiifii___ZNK7WebCore10RenderText5widthEjjRKNS_4FontEfPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE__wrapper,b1];
  var FUNCTION_TABLE_vif = [b2,b2,vif___ZN7WebCore10RenderText29computePreferredLogicalWidthsEf__wrapper,b2];
  var FUNCTION_TABLE_viiiii = [b3,b3,viiiii___ZNK7WebCore12RenderObject19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb__wrapper,b3,viiiii___ZNK7WebCore12RenderObject19offsetFromContainerEPS0_RKNS_11LayoutPointEPb__wrapper,b3,viiiii___ZN7WebCore10RenderText14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE__wrapper,b3];
  var FUNCTION_TABLE_fiiifiii = [b4,b4,fiiifiii___ZNK7WebCore10RenderText5widthEjjfbPN3WTF7HashSetIPKNS_14SimpleFontDataENS1_7PtrHashIS5_EENS1_10HashTraitsIS5_EEEEPNS_13GlyphOverflowE__wrapper,b4];
  var FUNCTION_TABLE_vi = [b5,b5,__ZN7WebCore11RenderQuoteD0Ev,b5,vi___ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv__wrapper,b5,__ZN7WebCore12RenderObject17updateFromElementEv,b5,vi___ZN7WebCore12RenderObject16insertedIntoTreeEv__wrapper,b5,__ZN7WebCore11RenderQuoteD2Ev,b5,__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv,b5,__ZN7WebCore11RenderQuote21willBeRemovedFromTreeEv,b5,__ZN7WebCore11RenderQuote15willBeDestroyedEv,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5];
  var FUNCTION_TABLE_vii = [b6,b6,vii___ZNK7WebCore10RenderText16linesBoundingBoxEv__wrapper,b6,vii___ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE__wrapper,b6,vii___ZN7WebCore10RenderText17setSelectionStateENS_12RenderObject14SelectionStateE__wrapper,b6,vii___ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE__wrapper,b6,__ZNK7WebCore12RenderObject24minPreferredLogicalWidthEv,b6,__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE,b6,vii___ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv__wrapper,b6,vii___ZNK7WebCore12RenderObject17strokeBoundingBoxEv__wrapper,b6,vii___ZNK7WebCore12RenderObject17objectBoundingBoxEv__wrapper,b6,__ZNK7WebCore12RenderObject24maxPreferredLogicalWidthEv,b6,__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE,b6,vii___ZN7WebCore10RenderText15setTextInternalERKN3WTF6StringE__wrapper,b6,__ZNK7WebCore11RenderQuote12originalTextEv,b6,vii___ZN7WebCore12RenderObject15updateDragStateEb__wrapper
  ,b6,b6,b6];
  var FUNCTION_TABLE_iiiiiii = [b7,b7,__ZN7WebCore10RenderText11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE,b7];
  var FUNCTION_TABLE_ii = [b8,b8,__ZNK7WebCore12RenderObject19isSVGResourceFilterEv,b8,__ZNK7WebCore12RenderObject13isSVGTextPathEv,b8,__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv,b8,__ZNK7WebCore12RenderObject10isRubyTextEv,b8,__ZNK7WebCore12RenderObject6isRubyEv,b8,__ZNK7WebCore12RenderObject7isImageEv,b8,__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv,b8,__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv,b8,ii___ZNK7WebCore12RenderObject22localToParentTransformEv__wrapper,b8,__ZNK7WebCore12RenderObject8isWidgetEv,b8,__ZNK7WebCore12RenderObject11isTextFieldEv,b8,__ZNK7WebCore12RenderObject18isRenderFullScreenEv,b8,ii___ZNK7WebCore12RenderObject14firstLineBlockEv__wrapper,b8,__ZNK7WebCore12RenderObject9isSVGRootEv
  ,b8,__ZNK7WebCore12RenderObject16isEmbeddedObjectEv,b8,__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv,b8,__ZNK7WebCore12RenderObject15isSVGInlineTextEv,b8,__ZNK7WebCore12RenderObject7isMeterEv,b8,__ZNK7WebCore12RenderObject14isSVGContainerEv,b8,__ZNK7WebCore12RenderObject22isSVGResourceContainerEv,b8,__ZNK7WebCore10RenderText18canBeSelectionLeafEv,b8,__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv,b8,__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv,b8,__ZNK7WebCore12RenderObject10isListItemEv,b8,__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv,b8,__ZNK7WebCore12RenderObject10isSVGImageEv,b8,__ZNK7WebCore12RenderObject20isStretchingChildrenEv,b8,__ZNK7WebCore12RenderObject15isDetailsMarkerEv,b8,__ZNK7WebCore12RenderObject13lastChildSlowEv
  ,b8,__ZNK7WebCore12RenderObject16isRenderTableColEv,b8,__ZNK7WebCore12RenderObject7isVideoEv,b8,__ZNK7WebCore12RenderObject10isProgressEv,b8,__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv,b8,__ZNK7WebCore12RenderObject13isCombineTextEv,b8,__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv,b8,__ZNK7WebCore12RenderObject5isWBREv,b8,__ZNK7WebCore12RenderObject22isSVGViewportContainerEv,b8,__ZNK7WebCore10RenderText15canHaveChildrenEv,b8,__ZNK7WebCore12RenderObject10isTextAreaEv,b8,__ZNK7WebCore12RenderObject7isFrameEv,b8,__ZNK7WebCore12RenderObject17isRenderMathMLRowEv,b8,__ZNK7WebCore12RenderObject26isInlineBlockOrInlineTableEv,b8,__ZNK7WebCore12RenderObject16isRenderSVGBlockEv,b8,__ZNK7WebCore12RenderObject9isReplicaEv
  ,b8,__ZNK7WebCore12RenderObject19isFileUploadControlEv,b8,ii___ZNK7WebCore10RenderText17previousCharacterEv__wrapper,b8,__ZNK7WebCore12RenderObject7isMediaEv,b8,__ZNK7WebCore12RenderObject10isSVGShapeEv,b8,__ZNK7WebCore12RenderObject14isRenderButtonEv,b8,__ZNK7WebCore12RenderObject8isSliderEv,b8,__ZNK7WebCore12RenderObject10isRubyBaseEv,b8,__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv,b8,__ZNK7WebCore12RenderObject8isCanvasEv,b8,__ZNK7WebCore12RenderObject18isSVGForeignObjectEv,b8,__ZNK7WebCore12RenderObject10isMenuListEv,b8,__ZNK7WebCore12RenderObject18isRenderMathMLMathEv,b8,__ZNK7WebCore12RenderObject14isTableCaptionEv,b8,__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv,b8,__ZNK7WebCore12RenderObject13isSliderThumbEv
  ,b8,__ZNK7WebCore12RenderObject24shouldPaintSelectionGapsEv,b8,__ZNK7WebCore12RenderObject13isTextControlEv,b8,ii___ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv__wrapper,b8,__ZNK7WebCore12RenderObject9isSVGTextEv,b8,__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv,b8,__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv,b8,__ZNK7WebCore12RenderObject14isRenderIFrameEv,b8,__ZNK7WebCore12RenderObject11isTableCellEv,b8,__ZNK7WebCore12RenderObject14firstChildSlowEv,b8,__ZNK7WebCore12RenderObject12isRenderGridEv,b8,__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv,b8,__ZNK7WebCore12RenderObject9isListBoxEv,b8,__ZNK7WebCore12RenderObject9isSVGPathEv,b8,__ZNK7WebCore12RenderObject22outlineStyleForRepaintEv,b8,__ZNK7WebCore12RenderObject13isRenderImageEv
  ,b8,__ZNK7WebCore12RenderObject18isRenderMathMLRootEv,b8,__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv,b8,ii___ZNK7WebCore10RenderText14caretMinOffsetEv__wrapper,b8,__ZNK7WebCore12RenderObject10isTableRowEv,b8,__ZNK7WebCore12RenderObject13isFlexibleBoxEv,b8,__ZNK7WebCore11RenderQuote10renderNameEv,b8,__ZNK7WebCore12RenderObject10isFrameSetEv,b8,__ZNK7WebCore10RenderText6lengthEv,b8,__ZNK7WebCore12RenderObject10isFieldsetEv,b8,__ZNK7WebCore12RenderObject11isSVGInlineEv,b8,__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv,b8,ii___ZNK7WebCore10RenderText14caretMaxOffsetEv__wrapper,b8,__ZNK7WebCore12RenderObject18isRenderFlowThreadEv,b8,ii___ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv__wrapper,b8,ii___ZNK7WebCore10RenderText14isTextFragmentEv__wrapper
  ,b8,__ZNK7WebCore12RenderObject9isRubyRunEv,b8,__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv,b8,__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv,b8,__ZNK7WebCore12RenderObject14isRenderRegionEv,b8,__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv,b8,__ZNK7WebCore17CachedImageClient18resourceClientTypeEv,b8,__ZN7WebCore12RenderObject21needsBoundariesUpdateEv,b8,__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv,b8,__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv,b8,__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv,b8,__ZNK7WebCore12RenderObject9isCounterEv,b8,ii___ZNK7WebCore12RenderObject15innerLineHeightEv__wrapper,b8,__ZNK7WebCore12RenderObject17isSVGGradientStopEv,b8,__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv,b8,__ZNK7WebCore11RenderQuote7isQuoteEv
  ,b8,ii___ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv__wrapper,b8,__ZNK7WebCore12RenderObject19virtualContinuationEv,b8,__ZNK7WebCore12RenderObject12isListMarkerEv,b8,__ZNK7WebCore12RenderObject7isEmptyEv,b8,__ZNK7WebCore12RenderObject7isTableEv,b8,__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv,b8,__ZNK7WebCore12RenderObject14isTableSectionEv,b8,__ZN7WebCore12RenderObject36computeBackgroundIsKnownToBeObscuredEv,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8
  ,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8];
  var FUNCTION_TABLE_viii = [b9,b9,__ZN7WebCore12RenderObject12imageChangedEPKvPKNS_7IntRectE,b9,viii___ZN7WebCore10RenderText7setTextERKN3WTF6StringEb__wrapper,b9,viii___ZNK7WebCore10RenderText29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE__wrapper,b9,viii___ZNK7WebCore10RenderText13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE__wrapper,b9,viii___ZN7WebCore12RenderObject19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE__wrapper,b9,viii___ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE__wrapper,b9,viii___ZN7WebCore10RenderText16positionForPointERKNS_11LayoutPointE__wrapper,b9,__ZN7WebCore11RenderQuote14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE,b9,viii___ZNK7WebCore12RenderObject23mapAbsoluteToLocalPointEjRNS_14TransformStateE__wrapper,b9,viii___ZNK7WebCore10RenderText13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb__wrapper,b9,__ZNK7WebCore12RenderObject16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE,b9,__ZN7WebCore11RenderQuoteC2ERNS_8DocumentENS_9QuoteTypeE,b9,b9,b9,b9
  ,b9,b9,b9];
  var FUNCTION_TABLE_v = [b10,b10,v___ZNK7WebCore12RenderObject14localTransformEv__wrapper,b10,v___ZN7WebCore10RenderText13createTextBoxEv__wrapper,b10,b10,b10];
  var FUNCTION_TABLE_iii = [b11,b11,iii___ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE__wrapper,b11,__ZN7WebCoreL36quoteTableLanguageComparisonFunctionEPKvS1_,b11,iii___ZNK7WebCore10RenderText33previousOffsetForBackwardDeletionEi__wrapper,b11,iii___ZNK7WebCore10RenderText10nextOffsetEi__wrapper,b11,iii___ZNK7WebCore10RenderText14previousOffsetEi__wrapper,b11,b11,b11,b11,b11];
  var FUNCTION_TABLE_iiiiii = [b12,b12,iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper,b12];
  var FUNCTION_TABLE_viiii = [b13,b13,viiii___ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb__wrapper,b13,__ZN7WebCore12RenderObject17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE,b13,viiii___ZN7WebCore10RenderText23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb__wrapper,b13,__ZNK7WebCore12RenderObject23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE,b13,viiii___ZNK7WebCore12RenderObject25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE__wrapper,b13,viiii___ZNK7WebCore12RenderObject21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb__wrapper,b13,b13,b13];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiii: dynCall_iiii, dynCall_fiiiifii: dynCall_fiiiifii, dynCall_vif: dynCall_vif, dynCall_viiiii: dynCall_viiiii, dynCall_fiiifiii: dynCall_fiiifiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiiiii: dynCall_iiiiiii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiii": invoke_iiii, "invoke_fiiiifii": invoke_fiiiifii, "invoke_vif": invoke_vif, "invoke_viiiii": invoke_viiiii, "invoke_fiiifiii": invoke_fiiifiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiiiii": invoke_iiiiiii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_iiiiii": invoke_iiiiii, "invoke_viiii": invoke_viiii, "_strncmp": _strncmp, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_bsearch": _bsearch, "_fflush": _fflush, "_strcmp": _strcmp, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_fiiiifii = Module["dynCall_fiiiifii"] = asm["dynCall_fiiiifii"];
var dynCall_vif = Module["dynCall_vif"] = asm["dynCall_vif"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_fiiifiii = Module["dynCall_fiiifiii"] = asm["dynCall_fiiifiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = asm["dynCall_iiiiiii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_iiiiii = Module["dynCall_iiiiii"] = asm["dynCall_iiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore12RenderObject19isSVGResourceFilterEv","__ZNK7WebCore12RenderObject13isSVGTextPathEv","__ZN7WebCore11RenderQuoteD0Ev","__ZNK7WebCore12RenderObject10isRubyTextEv","__ZNK7WebCore12RenderObject6isRubyEv","_strlen","__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv","__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv","__ZN7WebCore12RenderObject17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE","__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE","__ZNK7WebCore12RenderObject8isWidgetEv","__ZNK7WebCore12RenderObject11isTextFieldEv","__ZNK7WebCore12RenderObject18isRenderMathMLMathEv","__ZN7WebCore12RenderObject17updateFromElementEv","__ZN7WebCore12RenderObject12imageChangedEPKvPKNS_7IntRectE","__ZNK7WebCore12RenderObject9isSVGRootEv","__ZN7WebCore11RenderQuote11updateDepthEv","__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv","__ZNK7WebCore12RenderObject15isSVGInlineTextEv","__ZNK7WebCore12RenderObject7isMeterEv","__ZNK7WebCore12RenderObject14isSVGContainerEv","__ZNK7WebCore12RenderObject22isSVGResourceContainerEv","__ZNK7WebCore12RenderObject23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE","__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv","__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv","__ZNK7WebCore12RenderObject10isListItemEv","__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv","__ZNK7WebCore12RenderObject10isSVGImageEv","__ZNK7WebCore12RenderObject20isStretchingChildrenEv","__ZNK7WebCore12RenderObject15isDetailsMarkerEv","__ZNK7WebCore12RenderObject26isInlineBlockOrInlineTableEv","__ZNK7WebCore12RenderObject13lastChildSlowEv","__ZNK7WebCore12RenderObject24minPreferredLogicalWidthEv","__ZNK7WebCore12RenderObject16isRenderTableColEv","__ZNK7WebCore12RenderObject7isVideoEv","__ZNK7WebCore12RenderObject10isProgressEv","__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv","__ZNK7WebCore11RenderQuote10renderNameEv","__ZNK7WebCore12RenderObject13isCombineTextEv","__ZN7WebCore11RenderQuote11detachQuoteEv","__ZNK7WebCore12RenderObject5isWBREv","__ZNK7WebCore12RenderObject22isSVGViewportContainerEv","__ZNK7WebCore10RenderText15canHaveChildrenEv","__ZNK7WebCore12RenderObject10isTextAreaEv","__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv","__ZNK7WebCore12RenderObject7isFrameEv","__ZNK7WebCore10RenderText18canBeSelectionLeafEv","__ZNK7WebCore12RenderObject17isRenderMathMLRowEv","__ZNK7WebCore12RenderObject16isRenderSVGBlockEv","__ZNK7WebCore12RenderObject9isReplicaEv","__ZNK7WebCore12RenderObject19isFileUploadControlEv","__ZNK7WebCore12RenderObject7isMediaEv","__ZNK7WebCore12RenderObject10isSVGShapeEv","__ZNK7WebCore12RenderObject14isRenderButtonEv","__ZNK7WebCore12RenderObject8isSliderEv","__ZNK7WebCore12RenderObject10isRubyBaseEv","__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv","__ZN7WebCoreL36quoteTableLanguageComparisonFunctionEPKvS1_","__ZNK7WebCore12RenderObject8isCanvasEv","__ZNK7WebCore12RenderObject18isRenderFullScreenEv","__ZNK7WebCore12RenderObject14isTableCaptionEv","__ZNK7WebCore12RenderObject10isMenuListEv","__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv","__ZNK7WebCore12RenderObject16isEmbeddedObjectEv","__ZNK7WebCore12RenderObject13isSliderThumbEv","__ZNK7WebCore12RenderObject24shouldPaintSelectionGapsEv","__ZNK7WebCore12RenderObject13isTextControlEv","__ZNK7WebCore12RenderObject9isSVGTextEv","__ZN7WebCore11RenderQuote14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv","__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv","__ZN7WebCore11RenderQuoteD2Ev","_memset","__ZNK7WebCore12RenderObject11isTableCellEv","__ZNK7WebCore12RenderObject14firstChildSlowEv","__ZNK7WebCore12RenderObject12isRenderGridEv","__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv","__ZNK7WebCore12RenderObject9isListBoxEv","__ZNK7WebCore12RenderObject9isSVGPathEv","__ZNK7WebCore12RenderObject22outlineStyleForRepaintEv","__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv","__ZNK7WebCore12RenderObject13isRenderImageEv","__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv","__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv","__ZNK7WebCore12RenderObject14isRenderIFrameEv","__ZNK7WebCore12RenderObject24maxPreferredLogicalWidthEv","__ZNK7WebCore12RenderObject10isTableRowEv","__ZNK7WebCore12RenderObject13isFlexibleBoxEv","__ZNK7WebCore12RenderObject16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE","__ZN7WebCore11RenderQuote11attachQuoteEv","__ZNK7WebCore12RenderObject10isFrameSetEv","__ZNK7WebCore10RenderText6lengthEv","__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE","__ZNK7WebCore12RenderObject10isFieldsetEv","__ZNK7WebCore12RenderObject11isSVGInlineEv","__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv","__ZNK7WebCore12RenderObject18isSVGForeignObjectEv","__ZNK7WebCore12RenderObject18isRenderFlowThreadEv","__ZNK7WebCore12RenderObject9isRubyRunEv","__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv","__ZN7WebCore11RenderQuoteC2ERNS_8DocumentENS_9QuoteTypeE","__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv","__ZNK7WebCore12RenderObject14isRenderRegionEv","__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv","__ZNK7WebCore17CachedImageClient18resourceClientTypeEv","__ZN7WebCore12RenderObject21needsBoundariesUpdateEv","__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv","__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv","__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv","__ZN7WebCore10RenderText11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE","__ZNK7WebCore11RenderQuote12originalTextEv","__ZNK7WebCore12RenderObject7isImageEv","__ZNK7WebCore12RenderObject9isCounterEv","__ZNK7WebCore12RenderObject17isSVGGradientStopEv","__ZN7WebCore11RenderQuote21willBeRemovedFromTreeEv","__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv","__ZNK7WebCore11RenderQuote7isQuoteEv","__ZNK7WebCore12RenderObject19virtualContinuationEv","_memcpy","__ZNK7WebCore12RenderObject12isListMarkerEv","__ZNK7WebCore12RenderObject7isEmptyEv","__ZNK7WebCore12RenderObject7isTableEv","__ZN7WebCore11RenderQuote15willBeDestroyedEv","__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv","__ZNK7WebCore12RenderObject14isTableSectionEv","__ZN7WebCore12RenderObject36computeBackgroundIsKnownToBeObscuredEv","__ZNK7WebCore12RenderObject18isRenderMathMLRootEv"]

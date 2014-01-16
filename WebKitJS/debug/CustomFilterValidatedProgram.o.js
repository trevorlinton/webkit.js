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
H_BASE = parentModule["_malloc"](3872 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 3872;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore28CustomFilterValidatedProgramC1EPNS_25CustomFilterGlobalContextERKNS_23CustomFilterProgramInfoE;
var __ZN7WebCore28CustomFilterValidatedProgramD1Ev;
/* memory initializer */ allocate([67,115,0,0,0,0,0,0,67,111,32,61,32,48,46,48,59,0,0,0,0,0,0,0,118,101,99,51,40,99,115,115,95,66,108,101,110,100,67,111,109,112,111,110,101,110,116,40,67,98,46,114,44,32,67,115,46,114,41,44,32,99,115,115,95,66,108,101,110,100,67,111,109,112,111,110,101,110,116,40,67,98,46,103,44,32,67,115,46,103,41,44,32,99,115,115,95,66,108,101,110,100,67,111,109,112,111,110,101,110,116,40,67,98,46,98,44,32,67,115,46,98,41,41,0,0,0,0,117,110,105,102,111,114,109,32,115,97,109,112,108,101,114,50,68,32,99,115,115,95,117,95,116,101,120,116,117,114,101,59,32,118,97,114,121,105,110,103,32,109,101,100,105,117,109,112,32,118,101,99,50,32,99,115,115,95,118,95,116,101,120,67,111,111,114,100,59,32,118,111,105,100,32,109,97,105,110,40,41,32,123,32,99,115,115,95,109,97,105,110,40,41,59,32,109,101,100,105,117,109,112,32,118,101,99,52,32,111,114,105,103,105,110,97,108,67,111,108,111,114,32,61,32,116,101,120,116,117,114,101,50,68,40,99,115,115,95,117,95,116,101,120,116,117,114,101,44,32,99,115,115,95,118,95,116,101,120,67,111,111,114,100,41,59,32,109,101,100,105,117,109,112,32,118,101,99,52,32,109,117,108,116,105,112,108,105,101,100,67,111,108,111,114,32,61,32,99,108,97,109,112,40,99,115,115,95,67,111,108,111,114,77,97,116,114,105,120,32,42,32,111,114,105,103,105,110,97,108,67,111,108,111,114,44,32,48,46,48,44,32,49,46,48,41,59,32,109,101,100,105,117,109,112,32,118,101,99,52,32,99,108,97,109,112,101,100,77,105,120,67,111,108,111,114,32,61,32,99,108,97,109,112,40,99,115,115,95,77,105,120,67,111,108,111,114,44,32,48,46,48,44,32,49,46,48,41,59,32,109,101,100,105,117,109,112,32,118,101,99,51,32,98,108,101,110,100,101,100,67,111,108,111,114,32,61,32,99,115,115,95,66,108,101,110,100,67,111,108,111,114,40,109,117,108,116,105,112,108,105,101,100,67,111,108,111,114,46,114,103,98,44,32,99,108,97,109,112,101,100,77,105,120,67,111,108,111,114,46,114,103,98,41,59,32,109,101,100,105,117,109,112,32,118,101,99,51,32,119,101,105,103,104,116,101,100,67,111,108,111,114,32,61,32,40,49,46,48,32,45,32,109,117,108,116,105,112,108,105,101,100,67,111,108,111,114,46,97,41,32,42,32,99,108,97,109,112,101,100,77,105,120,67,111,108,111,114,46,114,103,98,32,43,32,109,117,108,116,105,112,108,105,101,100,67,111,108,111,114,46,97,32,42,32,98,108,101,110,100,101,100,67,111,108,111,114,59,32,103,108,95,70,114,97,103,67,111,108,111,114,32,61,32,99,115,115,95,67,111,109,112,111,115,105,116,101,40,109,117,108,116,105,112,108,105,101,100,67,111,108,111,114,46,114,103,98,44,32,109,117,108,116,105,112,108,105,101,100,67,111,108,111,114,46,97,44,32,119,101,105,103,104,116,101,100,67,111,108,111,114,46,114,103,98,44,32,99,108,97,109,112,101,100,77,105,120,67,111,108,111,114,46,97,41,59,32,125,0,0,0,0,0,0,109,101,100,105,117,109,112,32,118,101,99,52,32,99,115,115,95,77,105,120,67,111,108,111,114,32,61,32,118,101,99,52,40,48,46,48,41,59,32,109,101,100,105,117,109,112,32,109,97,116,52,32,99,115,115,95,67,111,108,111,114,77,97,116,114,105,120,32,61,32,109,97,116,52,40,49,46,48,41,59,0,0,0,0,0,0,0,0,97,95,112,111,115,105,116,105,111,110,0,0,0,0,0,0,97,95,109,101,115,104,67,111,111,114,100,0,0,0,0,0,117,95,116,105,108,101,83,105,122,101,0,0,0,0,0,0,118,97,114,121,105,110,103,32,109,101,100,105,117,109,112,32,118,101,99,50,32,99,115,115,95,118,95,116,101,120,67,111,111,114,100,59,32,118,111,105,100,32,109,97,105,110,40,41,32,123,32,99,115,115,95,109,97,105,110,40,41,59,32,99,115,115,95,118,95,116,101,120,67,111,111,114,100,32,61,32,97,95,116,101,120,67,111,111,114,100,59,32,125,0,0,0,117,95,116,101,120,116,117,114,101,83,105,122,101,0,0,0,117,95,112,114,111,106,101,99,116,105,111,110,77,97,116,114,105,120,0,0,0,0,0,0,117,95,109,101,115,104,83,105,122,101,0,0,0,0,0,0,117,95,109,101,115,104,66,111,120,0,0,0,0,0,0,0,97,95,116,114,105,97,110,103,108,101,67,111,111,114,100,0,109,101,100,105,117,109,112,32,118,101,99,52,32,99,115,115,95,67,111,109,112,111,115,105,116,101,40,109,101,100,105,117,109,112,32,118,101,99,51,32,67,98,44,32,109,101,100,105,117,109,112,32,102,108,111,97,116,32,97,98,44,32,109,101,100,105,117,109,112,32,118,101,99,51,32,67,115,44,32,109,101,100,105,117,109,112,32,102,108,111,97,116,32,97,115,41,32,123,32,109,101,100,105,117,109,112,32,102,108,111,97,116,32,70,97,32,61,32,37,115,59,32,109,101,100,105,117,109,112,32,102,108,111,97,116,32,70,98,32,61,32,37,115,59,32,114,101,116,117,114,110,32,118,101,99,52,40,97,115,32,42,32,70,97,32,42,32,67,115,32,43,32,97,98,32,42,32,70,98,32,42,32,67,98,44,32,97,115,32,42,32,70,97,32,43,32,97,98,32,42,32,70,98,41,59,32,125,0,97,115,0,0,0,0,0,0,49,46,48,32,45,32,97,98,0,0,0,0,0,0,0,0,49,46,48,0,0,0,0,0,48,46,48,0,0,0,0,0,97,116,116,114,105,98,117,116,101,32,109,101,100,105,117,109,112,32,118,101,99,50,32,97,95,116,101,120,67,111,111,114,100,59,0,0,0,0,0,0,49,46,48,32,45,32,97,115,0,0,0,0,0,0,0,0,97,98,0,0,0,0,0,0,109,101,100,105,117,109,112,32,102,108,111,97,116,32,99,115,115,95,66,108,101,110,100,67,111,109,112,111,110,101,110,116,40,109,101,100,105,117,109,112,32,102,108,111,97,116,32,67,98,44,32,109,101,100,105,117,109,112,32,102,108,111,97,116,32,67,115,41,32,123,32,109,101,100,105,117,109,112,32,102,108,111,97,116,32,67,111,59,32,37,115,32,114,101,116,117,114,110,32,67,111,59,32,125,32,109,101,100,105,117,109,112,32,118,101,99,51,32,99,115,115,95,66,108,101,110,100,67,111,108,111,114,40,109,101,100,105,117,109,112,32,118,101,99,51,32,67,98,44,32,109,101,100,105,117,109,112,32,118,101,99,51,32,67,115,41,32,123,32,114,101,116,117,114,110,32,37,115,59,32,125,0,0,0,109,101,100,105,117,109,112,32,102,108,111,97,116,32,99,115,115,95,83,97,116,40,109,101,100,105,117,109,112,32,118,101,99,51,32,67,41,32,123,32,109,101,100,105,117,109,112,32,102,108,111,97,116,32,99,77,105,110,32,61,32,109,105,110,40,109,105,110,40,67,46,114,44,32,67,46,103,41,44,32,67,46,98,41,59,32,109,101,100,105,117,109,112,32,102,108,111,97,116,32,99,77,97,120,32,61,32,109,97,120,40,109,97,120,40,67,46,114,44,32,67,46,103,41,44,32,67,46,98,41,59,32,114,101,116,117,114,110,32,99,77,97,120,32,45,32,99,77,105,110,59,32,125,32,118,111,105,100,32,99,115,115,95,83,101,116,83,97,116,72,101,108,112,101,114,40,105,110,111,117,116,32,109,101,100,105,117,109,112,32,102,108,111,97,116,32,99,77,105,110,44,32,105,110,111,117,116,32,109,101,100,105,117,109,112,32,102,108,111,97,116,32,99,77,105,100,44,32,105,110,111,117,116,32,109,101,100,105,117,109,112,32,102,108,111,97,116,32,99,77,97,120,44,32,109,101,100,105,117,109,112,32,102,108,111,97,116,32,115,41,32,123,32,105,102,32,40,99,77,97,120,32,62,32,99,77,105,110,41,32,123,32,99,77,105,100,32,61,32,40,40,40,99,77,105,100,32,45,32,99,77,105,110,41,32,42,32,115,41,32,47,32,40,99,77,97,120,32,45,32,99,77,105,110,41,41,59,32,99,77,97,120,32,61,32,115,59,32,125,32,101,108,115,101,32,99,77,105,100,32,61,32,99,77,97,120,32,61,32,48,46,48,59,32,99,77,105,110,32,61,32,48,46,48,59,32,125,32,109,101,100,105,117,109,112,32,118,101,99,51,32,99,115,115,95,83,101,116,83,97,116,40,109,101,100,105,117,109,112,32,118,101,99,51,32,67,44,32,109,101,100,105,117,109,112,32,102,108,111,97,116,32,115,41,32,123,32,105,102,32,40,67,46,114,32,60,61,32,67,46,103,41,32,123,32,105,102,32,40,67,46,103,32,60,61,32,67,46,98,41,32,99,115,115,95,83,101,116,83,97,116,72,101,108,112,101,114,40,67,46,114,44,32,67,46,103,44,32,67,46,98,44,32,115,41,59,32,101,108,115,101,32,123,32,105,102,32,40,67,46,114,32,60,61,32,67,46,98,41,32,99,115,115,95,83,101,116,83,97,116,72,101,108,112,101,114,40,67,46,114,44,32,67,46,98,44,32,67,46,103,44,32,115,41,59,32,101,108,115,101,32,99,115,115,95,83,101,116,83,97,116,72,101,108,112,101,114,40,67,46,98,44,32,67,46,114,44,32,67,46,103,44,32,115,41,59,32,125,32,125,32,101,108,115,101,32,123,32,105,102,32,40,67,46,114,32,60,61,32,67,46,98,41,32,99,115,115,95,83,101,116,83,97,116,72,101,108,112,101,114,40,67,46,103,44,32,67,46,114,44,32,67,46,98,44,32,115,41,59,32,101,108,115,101,32,123,32,105,102,32,40,67,46,103,32,60,61,32,67,46,98,41,32,99,115,115,95,83,101,116,83,97,116,72,101,108,112,101,114,40,67,46,103,44,32,67,46,98,44,32,67,46,114,44,32,115,41,59,32,101,108,115,101,32,99,115,115,95,83,101,116,83,97,116,72,101,108,112,101,114,40,67,46,98,44,32,67,46,103,44,32,67,46,114,44,32,115,41,59,32,125,32,125,32,114,101,116,117,114,110,32,67,59,32,125,0,0,0,0,0,109,101,100,105,117,109,112,32,102,108,111,97,116,32,99,115,115,95,76,117,109,40,109,101,100,105,117,109,112,32,118,101,99,51,32,67,41,32,123,32,114,101,116,117,114,110,32,48,46,51,32,42,32,67,46,114,32,43,32,48,46,53,57,32,42,32,67,46,103,32,43,32,48,46,49,49,32,42,32,67,46,98,59,32,125,32,109,101,100,105,117,109,112,32,118,101,99,51,32,99,115,115,95,67,108,105,112,67,111,108,111,114,40,109,101,100,105,117,109,112,32,118,101,99,51,32,67,41,32,123,32,109,101,100,105,117,109,112,32,102,108,111,97,116,32,76,32,61,32,99,115,115,95,76,117,109,40,67,41,59,32,109,101,100,105,117,109,112,32,102,108,111,97,116,32,110,32,61,32,109,105,110,40,109,105,110,40,67,46,114,44,32,67,46,103,41,44,32,67,46,98,41,59,32,109,101,100,105,117,109,112,32,102,108,111,97,116,32,120,32,61,32,109,97,120,40,109,97,120,40,67,46,114,44,32,67,46,103,41,44,32,67,46,98,41,59,32,105,102,32,40,110,32,60,32,48,46,48,41,32,67,32,61,32,76,32,43,32,40,40,40,67,32,45,32,76,41,32,42,32,76,41,32,47,32,40,76,32,45,32,110,41,41,59,32,105,102,32,40,120,32,62,32,49,46,48,41,32,67,32,61,32,76,32,43,32,40,40,40,67,32,45,32,76,41,32,42,32,40,49,46,48,32,45,32,76,41,32,47,32,40,120,32,45,32,76,41,41,41,59,32,114,101,116,117,114,110,32,67,59,32,125,32,109,101,100,105,117,109,112,32,118,101,99,51,32,99,115,115,95,83,101,116,76,117,109,40,109,101,100,105,117,109,112,32,118,101,99,51,32,67,44,32,109,101,100,105,117,109,112,32,102,108,111,97,116,32,108,41,32,123,32,67,32,43,61,32,108,32,45,32,99,115,115,95,76,117,109,40,67,41,59,32,114,101,116,117,114,110,32,99,115,115,95,67,108,105,112,67,111,108,111,114,40,67,41,59,32,125,0,0,0,99,115,115,95,83,101,116,76,117,109,40,99,115,115,95,83,101,116,83,97,116,40,67,98,44,32,99,115,115,95,83,97,116,40,67,115,41,41,44,32,99,115,115,95,76,117,109,40,67,98,41,41,0,0,0,0,99,115,115,95,83,101,116,76,117,109,40,99,115,115,95,83,101,116,83,97,116,40,67,115,44,32,99,115,115,95,83,97,116,40,67,98,41,41,44,32,99,115,115,95,76,117,109,40,67,98,41,41,0,0,0,0,99,115,115,95,83,101,116,76,117,109,40,67,98,44,32,99,115,115,95,76,117,109,40,67,115,41,41,0,0,0,0,0,99,115,115,95,83,101,116,76,117,109,40,67,115,44,32,99,115,115,95,76,117,109,40,67,98,41,41,0,0,0,0,0,109,101,100,105,117,109,112,32,102,108,111,97,116,32,68,59,32,105,102,32,40,67,98,32,60,61,32,48,46,50,53,41,32,68,32,61,32,40,40,49,54,46,48,32,42,32,67,98,32,45,32,49,50,46,48,41,32,42,32,67,98,32,43,32,52,46,48,41,32,42,32,67,98,59,32,101,108,115,101,32,68,32,61,32,115,113,114,116,40,67,98,41,59,32,105,102,32,40,67,115,32,60,61,32,48,46,53,41,32,67,111,32,61,32,67,98,32,45,32,40,49,46,48,32,45,32,50,46,48,32,42,32,67,115,41,32,42,32,67,98,32,42,32,40,49,46,48,32,45,32,67,98,41,59,32,101,108,115,101,32,67,111,32,61,32,67,98,32,43,32,40,50,46,48,32,42,32,67,115,32,45,32,49,46,48,41,32,42,32,40,68,32,45,32,67,98,41,59,0,0,97,95,116,101,120,67,111,111,114,100,0,0,0,0,0,0,105,102,32,40,67,115,32,60,61,32,48,46,53,41,32,67,111,32,61,32,67,98,32,42,32,40,50,46,48,32,42,32,67,115,41,59,32,101,108,115,101,32,67,111,32,61,32,67,98,32,43,32,40,50,46,48,32,42,32,67,115,32,45,32,49,46,48,41,32,45,32,40,67,98,32,42,32,40,50,46,48,32,42,32,67,115,32,45,32,49,46,48,41,41,59,0,105,102,32,40,67,115,32,62,32,48,46,48,41,32,67,111,32,61,32,49,46,48,32,45,32,109,105,110,40,49,46,48,44,32,40,49,46,48,32,45,32,67,98,41,32,47,32,67,115,41,59,32,101,108,115,101,32,67,111,32,61,32,48,46,48,59,0,0,0,0,0,0,105,102,32,40,67,115,32,60,32,49,46,48,41,32,67,111,32,61,32,109,105,110,40,49,46,48,44,32,67,98,32,47,32,40,49,46,48,32,45,32,67,115,41,41,59,32,101,108,115,101,32,67,111,32,61,32,49,46,48,59,0,0,0,0,105,102,32,40,67,98,32,60,61,32,48,46,53,41,32,67,111,32,61,32,67,115,32,42,32,40,50,46,48,32,42,32,67,98,41,59,32,101,108,115,101,32,67,111,32,61,32,67,115,32,43,32,40,50,46,48,32,42,32,67,98,32,45,32,49,46,48,41,32,45,32,40,67,115,32,42,32,40,50,46,48,32,42,32,67,98,32,45,32,49,46,48,41,41,59,0,67,98,32,43,32,67,115,32,45,32,50,46,48,32,42,32,67,98,32,42,32,67,115,0,97,98,115,40,67,98,32,45,32,67,115,41,0,0,0,0,109,97,120,40,67,98,44,32,67,115,41,0,0,0,0,0,109,105,110,40,67,98,44,32,67,115,41,0,0,0,0,0,67,98,32,43,32,67,115,32,45,32,40,67,98,32,42,32,67,115,41,0,0,0,0,0,67,115,32,42,32,67,98,0,118,111,105,100,32,109,97,105,110,40,41,32,123,32,125,0,97,116,116,114,105,98,117,116,101,32,109,101,100,105,117,109,112,32,118,101,99,52,32,97,95,112,111,115,105,116,105,111,110,59,32,117,110,105,102,111,114,109,32,109,101,100,105,117,109,112,32,109,97,116,52,32,117,95,112,114,111,106,101,99,116,105,111,110,77,97,116,114,105,120,59,32,118,111,105,100,32,109,97,105,110,40,41,32,123,32,103,108,95,80,111,115,105,116,105,111,110,32,61,32,117,95,112,114,111,106,101,99,116,105,111,110,77,97,116,114,105,120,32,42,32,97,95,112,111,115,105,116,105,111,110,59,32,125,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var invoke_vi=env.invoke_vi;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore28CustomFilterValidatedProgramC2EPNS_25CustomFilterGlobalContextERKNS_23CustomFilterProgramInfoE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 384 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 i10 = i4 + 48 | 0;
 i11 = i4 + 64 | 0;
 i12 = i4 + 72 | 0;
 i13 = i4 + 80 | 0;
 i14 = i4 + 96 | 0;
 i15 = i4 + 104 | 0;
 i16 = i4 + 112 | 0;
 i17 = i4 + 128 | 0;
 i18 = i4 + 136 | 0;
 i19 = i4 + 144 | 0;
 i20 = i4 + 160 | 0;
 i21 = i4 + 168 | 0;
 i22 = i4 + 176 | 0;
 i23 = i4 + 192 | 0;
 i24 = i4 + 200 | 0;
 i25 = i4 + 208 | 0;
 i26 = i4 + 224 | 0;
 i27 = i4 + 232 | 0;
 i28 = i4 + 240 | 0;
 i29 = i4 + 256 | 0;
 i30 = i4 + 264 | 0;
 i31 = i4 + 272 | 0;
 i32 = i4 + 288 | 0;
 i33 = i4 + 296 | 0;
 i34 = i4 + 304 | 0;
 i35 = i4 + 312 | 0;
 i36 = i4 + 320 | 0;
 i37 = i4 + 328 | 0;
 i38 = i4 + 336 | 0;
 i39 = i4 + 344 | 0;
 i40 = i4 + 352 | 0;
 i41 = i4 + 368 | 0;
 i42 = i4 + 376 | 0;
 HEAP32[i1 >> 2] = 1;
 i43 = i3 | 0;
 i44 = HEAP32[i43 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i44;
 if ((i44 | 0) != 0) {
  i45 = i44 | 0;
  HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 2;
 }
 i45 = i3 + 4 | 0;
 i44 = HEAP32[i45 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i44;
 if ((i44 | 0) != 0) {
  i46 = i44 | 0;
  HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 2;
 }
 i46 = i3 + 8 | 0;
 HEAP32[i1 + 12 >> 2] = HEAP32[i46 >> 2];
 i44 = i3 + 12 | 0;
 i47 = i1 + 16 | 0;
 i48 = HEAP32[i44 + 4 >> 2] | 0;
 HEAP32[i47 >> 2] = HEAP32[i44 >> 2];
 HEAP32[i47 + 4 >> 2] = i48;
 i48 = i1 + 24 | 0;
 HEAP32[i48 >> 2] = HEAP32[i3 + 20 >> 2];
 i3 = i1 + 28 | 0;
 HEAP32[i3 >> 2] = 0;
 i47 = i1 + 32 | 0;
 HEAP32[i47 >> 2] = 0;
 HEAP32[i1 + 36 >> 2] = 0;
 i44 = i1 + 44 | 0;
 HEAP8[i44] = 0;
 __ZN7WebCore28CustomFilterValidatedProgram12platformInitEv(i1);
 i49 = i36 | 0;
 i50 = HEAP32[i43 >> 2] | 0;
 HEAP32[i49 >> 2] = i50;
 if ((i50 | 0) == 0) {
  i51 = 7;
 } else {
  i43 = i50 | 0;
  HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 2;
  if ((HEAP32[i49 >> 2] | 0) == 0) {
   i51 = 7;
  }
 }
 do {
  if ((i51 | 0) == 7) {
   if (HEAP8[H_BASE + 3840 | 0] | 0) {
    i52 = HEAP32[H_BASE + 3872 >> 2] | 0;
   } else {
    i43 = __Znwj(4) | 0;
    HEAP32[i35 >> 2] = H_BASE + 3688;
    __ZN3WTF6StringC1ENS_12ASCIILiteralE(i43, i35);
    HEAP32[H_BASE + 3872 >> 2] = i43;
    HEAP8[H_BASE + 3840 | 0] = 1;
    i52 = i43;
   }
   i43 = HEAP32[i52 >> 2] | 0;
   if ((i43 | 0) != 0) {
    i50 = i43 | 0;
    HEAP32[i50 >> 2] = (HEAP32[i50 >> 2] | 0) + 2;
   }
   i50 = HEAP32[i49 >> 2] | 0;
   HEAP32[i49 >> 2] = i43;
   if ((i50 | 0) == 0) {
    break;
   }
   i43 = i50 | 0;
   i53 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
   if ((i53 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i50);
    break;
   } else {
    HEAP32[i43 >> 2] = i53;
    break;
   }
  }
 } while (0);
 i52 = i37 | 0;
 i35 = HEAP32[i45 >> 2] | 0;
 HEAP32[i52 >> 2] = i35;
 if ((i35 | 0) == 0) {
  i51 = 18;
 } else {
  i45 = i35 | 0;
  HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 2;
  if ((HEAP32[i52 >> 2] | 0) == 0) {
   i51 = 18;
  }
 }
 do {
  if ((i51 | 0) == 18) {
   if (HEAP8[H_BASE + 3832 | 0] | 0) {
    i54 = HEAP32[H_BASE + 3864 >> 2] | 0;
   } else {
    i45 = __Znwj(4) | 0;
    HEAP32[i34 >> 2] = H_BASE + 3672;
    __ZN3WTF6StringC1ENS_12ASCIILiteralE(i45, i34);
    HEAP32[H_BASE + 3864 >> 2] = i45;
    HEAP8[H_BASE + 3832 | 0] = 1;
    i54 = i45;
   }
   i45 = HEAP32[i54 >> 2] | 0;
   if ((i45 | 0) != 0) {
    i35 = i45 | 0;
    HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 2;
   }
   i35 = HEAP32[i52 >> 2] | 0;
   HEAP32[i52 >> 2] = i45;
   if ((i35 | 0) == 0) {
    break;
   }
   i45 = i35 | 0;
   i53 = (HEAP32[i45 >> 2] | 0) - 2 | 0;
   if ((i53 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i35);
    break;
   } else {
    HEAP32[i45 >> 2] = i53;
    break;
   }
  }
 } while (0);
 i54 = (HEAP32[i46 >> 2] | 0) == 1;
 if (i54) {
  i55 = __ZN7WebCore25CustomFilterGlobalContext18mixShaderValidatorEv(i2) | 0;
 } else {
  i55 = __ZN7WebCore25CustomFilterGlobalContext20webglShaderValidatorEv(i2) | 0;
 }
 i2 = i38 | 0;
 HEAP32[i2 >> 2] = 0;
 i46 = i39 | 0;
 HEAP32[i46 >> 2] = 0;
 i34 = i40 | 0;
 HEAP32[i34 >> 2] = 0;
 i51 = i40 + 4 | 0;
 HEAP32[i51 >> 2] = 0;
 i53 = i40 + 8 | 0;
 HEAP32[i53 >> 2] = 0;
 __ZNK3WTF6String4utf8ENS_14ConversionModeE(i41, i36, 0);
 i36 = i41 | 0;
 i41 = HEAP32[i36 >> 2] | 0;
 if ((i41 | 0) == 0) {
  i56 = 0;
 } else {
  i56 = i41 + 8 | 0;
 }
 i41 = __ZN7WebCore17ANGLEWebKitBridge19compileShaderSourceEPKcNS_15ANGLEShaderTypeERN3WTF6StringES6_RNS4_6VectorINS_17ANGLEShaderSymbolELj0ENS4_15CrashOnOverflowEEEi(i55, i56, 35633, i3, i38, i40, 0) | 0;
 i38 = HEAP32[i36 >> 2] | 0;
 do {
  if ((i38 | 0) != 0) {
   i36 = i38 | 0;
   i3 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i38);
    break;
   } else {
    HEAP32[i36 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZNK3WTF6String4utf8ENS_14ConversionModeE(i42, i37, 0);
 i37 = i42 | 0;
 i42 = HEAP32[i37 >> 2] | 0;
 if ((i42 | 0) == 0) {
  i57 = 0;
 } else {
  i57 = i42 + 8 | 0;
 }
 i42 = __ZN7WebCore17ANGLEWebKitBridge19compileShaderSourceEPKcNS_15ANGLEShaderTypeERN3WTF6StringES6_RNS4_6VectorINS_17ANGLEShaderSymbolELj0ENS4_15CrashOnOverflowEEEi(i55, i57, 35632, i47, i39, i40, 0) | 0;
 i39 = HEAP32[i37 >> 2] | 0;
 do {
  if ((i39 | 0) != 0) {
   i37 = i39 | 0;
   i47 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
   if ((i47 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i39);
    break;
   } else {
    HEAP32[i37 >> 2] = i47;
    break;
   }
  }
 } while (0);
 L61 : do {
  if (i41 & i42) {
   if ((HEAP32[i53 >> 2] | 0) != 0) {
    i39 = i22 + 8 | 0;
    i47 = i22 | 0;
    i37 = i20 | 0;
    i57 = i25 + 8 | 0;
    i55 = i25 | 0;
    i38 = i23 | 0;
    i3 = i28 + 8 | 0;
    i36 = i28 | 0;
    i56 = i26 | 0;
    i45 = i31 + 8 | 0;
    i35 = i31 | 0;
    i43 = i29 | 0;
    i50 = i32 | 0;
    i58 = (HEAP32[i48 >> 2] | 0) == 0;
    i59 = i7 + 8 | 0;
    i60 = i7 | 0;
    i61 = i5 | 0;
    i62 = i10 + 8 | 0;
    i63 = i10 | 0;
    i64 = i8 | 0;
    i65 = i13 + 8 | 0;
    i66 = i13 | 0;
    i67 = i11 | 0;
    i68 = i16 + 8 | 0;
    i69 = i16 | 0;
    i70 = i14 | 0;
    i71 = i19 + 8 | 0;
    i72 = i19 | 0;
    i73 = i17 | 0;
    i74 = i33 | 0;
    i75 = 0;
    while (1) {
     i76 = HEAP32[i34 >> 2] | 0;
     i77 = HEAP32[i76 + (i75 << 5) >> 2] | 0;
     do {
      if ((i77 | 0) == 0) {
       do {
        if ((HEAP32[H_BASE + 3848 >> 2] | 0) == 0) {
         i78 = __ZN3WTF10fastMallocEj(20) | 0;
         _memset(i78 | 0, 0, 20) | 0;
         HEAP32[H_BASE + 3848 >> 2] = i78;
         __ZN3WTF6StringC1EPKc(i20, H_BASE + 864 | 0);
         HEAP32[i21 >> 2] = 35664;
         __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_10ShDataTypeEENS_24KeyValuePairKeyExtractorIS4_EENS_10StringHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_17HashMapTranslatorISD_S7_EES1_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i22, i78, i20, i21);
         if ((HEAP8[i39] & 1) == 0) {
          HEAP32[(HEAP32[i47 >> 2] | 0) + 4 >> 2] = HEAP32[i21 >> 2];
         }
         i78 = HEAP32[i37 >> 2] | 0;
         do {
          if ((i78 | 0) != 0) {
           i79 = i78 | 0;
           i80 = (HEAP32[i79 >> 2] | 0) - 2 | 0;
           if ((i80 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i78);
            break;
           } else {
            HEAP32[i79 >> 2] = i80;
            break;
           }
          }
         } while (0);
         i78 = HEAP32[H_BASE + 3848 >> 2] | 0;
         __ZN3WTF6StringC1EPKc(i23, H_BASE + 848 | 0);
         HEAP32[i24 >> 2] = 35666;
         __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_10ShDataTypeEENS_24KeyValuePairKeyExtractorIS4_EENS_10StringHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_17HashMapTranslatorISD_S7_EES1_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i25, i78 | 0, i23, i24);
         if ((HEAP8[i57] & 1) == 0) {
          HEAP32[(HEAP32[i55 >> 2] | 0) + 4 >> 2] = HEAP32[i24 >> 2];
         }
         i78 = HEAP32[i38 >> 2] | 0;
         do {
          if ((i78 | 0) != 0) {
           i80 = i78 | 0;
           i79 = (HEAP32[i80 >> 2] | 0) - 2 | 0;
           if ((i79 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i78);
            break;
           } else {
            HEAP32[i80 >> 2] = i79;
            break;
           }
          }
         } while (0);
         i78 = HEAP32[H_BASE + 3848 >> 2] | 0;
         __ZN3WTF6StringC1EPKc(i26, H_BASE + 3224 | 0);
         HEAP32[i27 >> 2] = 35664;
         __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_10ShDataTypeEENS_24KeyValuePairKeyExtractorIS4_EENS_10StringHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_17HashMapTranslatorISD_S7_EES1_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i28, i78 | 0, i26, i27);
         if ((HEAP8[i3] & 1) == 0) {
          HEAP32[(HEAP32[i36 >> 2] | 0) + 4 >> 2] = HEAP32[i27 >> 2];
         }
         i78 = HEAP32[i56 >> 2] | 0;
         do {
          if ((i78 | 0) != 0) {
           i79 = i78 | 0;
           i80 = (HEAP32[i79 >> 2] | 0) - 2 | 0;
           if ((i80 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i78);
            break;
           } else {
            HEAP32[i79 >> 2] = i80;
            break;
           }
          }
         } while (0);
         i78 = HEAP32[H_BASE + 3848 >> 2] | 0;
         __ZN3WTF6StringC1EPKc(i29, H_BASE + 1064 | 0);
         HEAP32[i30 >> 2] = 35665;
         __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_10ShDataTypeEENS_24KeyValuePairKeyExtractorIS4_EENS_10StringHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_17HashMapTranslatorISD_S7_EES1_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i31, i78 | 0, i29, i30);
         if ((HEAP8[i45] & 1) == 0) {
          HEAP32[(HEAP32[i35 >> 2] | 0) + 4 >> 2] = HEAP32[i30 >> 2];
         }
         i78 = HEAP32[i43 >> 2] | 0;
         if ((i78 | 0) == 0) {
          break;
         }
         i80 = i78 | 0;
         i79 = (HEAP32[i80 >> 2] | 0) - 2 | 0;
         if ((i79 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i78);
          break;
         } else {
          HEAP32[i80 >> 2] = i79;
          break;
         }
        }
       } while (0);
       i79 = HEAP32[H_BASE + 3848 >> 2] | 0;
       i80 = i76 + (i75 << 5) + 4 | 0;
       __ZN3WTF7HashMapINS_6StringE10ShDataTypeNS_10StringHashENS_10HashTraitsIS1_EENS4_IS2_EEE4findERKS1_(i32, i79, i80);
       i78 = HEAP32[i50 >> 2] | 0;
       if ((i78 | 0) == ((HEAP32[i79 >> 2] | 0) + (HEAP32[i79 + 4 >> 2] << 3) | 0)) {
        break L61;
       }
       if (i58) {
        if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i80 >> 2] | 0, H_BASE + 1064 | 0) | 0) {
         break L61;
        }
       }
       if ((HEAP32[i76 + (i75 << 5) + 12 >> 2] | 0) != (HEAP32[i78 + 4 >> 2] | 0)) {
        break L61;
       }
      } else if ((i77 | 0) == 1) {
       i78 = i76 + (i75 << 5) + 12 | 0;
       i80 = HEAP32[i78 >> 2] | 0;
       if ((i80 | 0) == 35678 | (i80 | 0) == 35680 | (i80 | 0) == 35683 | (i80 | 0) == 36198) {
        break L61;
       }
       do {
        if ((HEAP32[H_BASE + 3856 >> 2] | 0) == 0) {
         i80 = __ZN3WTF10fastMallocEj(20) | 0;
         _memset(i80 | 0, 0, 20) | 0;
         HEAP32[H_BASE + 3856 >> 2] = i80;
         __ZN3WTF6StringC1EPKc(i5, H_BASE + 1048 | 0);
         HEAP32[i6 >> 2] = 35666;
         __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_10ShDataTypeEENS_24KeyValuePairKeyExtractorIS4_EENS_10StringHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_17HashMapTranslatorISD_S7_EES1_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i7, i80, i5, i6);
         if ((HEAP8[i59] & 1) == 0) {
          HEAP32[(HEAP32[i60 >> 2] | 0) + 4 >> 2] = HEAP32[i6 >> 2];
         }
         i80 = HEAP32[i61 >> 2] | 0;
         do {
          if ((i80 | 0) != 0) {
           i79 = i80 | 0;
           i81 = (HEAP32[i79 >> 2] | 0) - 2 | 0;
           if ((i81 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i80);
            break;
           } else {
            HEAP32[i79 >> 2] = i81;
            break;
           }
          }
         } while (0);
         i80 = HEAP32[H_BASE + 3856 >> 2] | 0;
         __ZN3WTF6StringC1EPKc(i8, H_BASE + 1032 | 0);
         HEAP32[i9 >> 2] = 35664;
         __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_10ShDataTypeEENS_24KeyValuePairKeyExtractorIS4_EENS_10StringHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_17HashMapTranslatorISD_S7_EES1_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i10, i80 | 0, i8, i9);
         if ((HEAP8[i62] & 1) == 0) {
          HEAP32[(HEAP32[i63 >> 2] | 0) + 4 >> 2] = HEAP32[i9 >> 2];
         }
         i80 = HEAP32[i64 >> 2] | 0;
         do {
          if ((i80 | 0) != 0) {
           i81 = i80 | 0;
           i79 = (HEAP32[i81 >> 2] | 0) - 2 | 0;
           if ((i79 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i80);
            break;
           } else {
            HEAP32[i81 >> 2] = i79;
            break;
           }
          }
         } while (0);
         i80 = HEAP32[H_BASE + 3856 >> 2] | 0;
         __ZN3WTF6StringC1EPKc(i11, H_BASE + 1008 | 0);
         HEAP32[i12 >> 2] = 35676;
         __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_10ShDataTypeEENS_24KeyValuePairKeyExtractorIS4_EENS_10StringHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_17HashMapTranslatorISD_S7_EES1_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i13, i80 | 0, i11, i12);
         if ((HEAP8[i65] & 1) == 0) {
          HEAP32[(HEAP32[i66 >> 2] | 0) + 4 >> 2] = HEAP32[i12 >> 2];
         }
         i80 = HEAP32[i67 >> 2] | 0;
         do {
          if ((i80 | 0) != 0) {
           i79 = i80 | 0;
           i81 = (HEAP32[i79 >> 2] | 0) - 2 | 0;
           if ((i81 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i80);
            break;
           } else {
            HEAP32[i79 >> 2] = i81;
            break;
           }
          }
         } while (0);
         i80 = HEAP32[H_BASE + 3856 >> 2] | 0;
         __ZN3WTF6StringC1EPKc(i14, H_BASE + 992 | 0);
         HEAP32[i15 >> 2] = 35664;
         __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_10ShDataTypeEENS_24KeyValuePairKeyExtractorIS4_EENS_10StringHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_17HashMapTranslatorISD_S7_EES1_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i16, i80 | 0, i14, i15);
         if ((HEAP8[i68] & 1) == 0) {
          HEAP32[(HEAP32[i69 >> 2] | 0) + 4 >> 2] = HEAP32[i15 >> 2];
         }
         i80 = HEAP32[i70 >> 2] | 0;
         do {
          if ((i80 | 0) != 0) {
           i81 = i80 | 0;
           i79 = (HEAP32[i81 >> 2] | 0) - 2 | 0;
           if ((i79 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i80);
            break;
           } else {
            HEAP32[i81 >> 2] = i79;
            break;
           }
          }
         } while (0);
         i80 = HEAP32[H_BASE + 3856 >> 2] | 0;
         __ZN3WTF6StringC1EPKc(i17, H_BASE + 880 | 0);
         HEAP32[i18 >> 2] = 35664;
         __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_10ShDataTypeEENS_24KeyValuePairKeyExtractorIS4_EENS_10StringHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_17HashMapTranslatorISD_S7_EES1_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i19, i80 | 0, i17, i18);
         if ((HEAP8[i71] & 1) == 0) {
          HEAP32[(HEAP32[i72 >> 2] | 0) + 4 >> 2] = HEAP32[i18 >> 2];
         }
         i80 = HEAP32[i73 >> 2] | 0;
         if ((i80 | 0) == 0) {
          break;
         }
         i79 = i80 | 0;
         i81 = (HEAP32[i79 >> 2] | 0) - 2 | 0;
         if ((i81 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i80);
          break;
         } else {
          HEAP32[i79 >> 2] = i81;
          break;
         }
        }
       } while (0);
       i81 = HEAP32[H_BASE + 3856 >> 2] | 0;
       __ZN3WTF7HashMapINS_6StringE10ShDataTypeNS_10StringHashENS_10HashTraitsIS1_EENS4_IS2_EEE4findERKS1_(i33, i81, i76 + (i75 << 5) + 4 | 0);
       i79 = HEAP32[i74 >> 2] | 0;
       if ((i79 | 0) == ((HEAP32[i81 >> 2] | 0) + (HEAP32[i81 + 4 >> 2] << 3) | 0)) {
        break;
       }
       if ((HEAP8[i76 + (i75 << 5) + 20 | 0] & 1) != 0) {
        break L61;
       }
       if ((HEAP32[i78 >> 2] | 0) != (HEAP32[i79 + 4 >> 2] | 0)) {
        break L61;
       }
      }
     } while (0);
     i75 = i75 + 1 | 0;
     if (i75 >>> 0 >= (HEAP32[i53 >> 2] | 0) >>> 0) {
      break;
     }
    }
   }
   if (i54) {
    __ZN7WebCore28CustomFilterValidatedProgram22rewriteMixVertexShaderERKN3WTF6VectorINS_17ANGLEShaderSymbolELj0ENS1_15CrashOnOverflowEEE(i1, i40);
    __ZN7WebCore28CustomFilterValidatedProgram24rewriteMixFragmentShaderEv(i1);
   }
   HEAP8[i44] = 1;
  }
 } while (0);
 i44 = HEAP32[i53 >> 2] | 0;
 if ((i44 | 0) != 0) {
  i1 = HEAP32[i34 >> 2] | 0;
  i40 = i1 + (i44 << 5) | 0;
  i44 = i1;
  while (1) {
   i1 = HEAP32[i44 + 8 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i54 = i1 | 0;
     i33 = (HEAP32[i54 >> 2] | 0) - 2 | 0;
     if ((i33 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i1);
      break;
     } else {
      HEAP32[i54 >> 2] = i33;
      break;
     }
    }
   } while (0);
   i1 = HEAP32[i44 + 4 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i33 = i1 | 0;
     i54 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
     if ((i54 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i1);
      break;
     } else {
      HEAP32[i33 >> 2] = i54;
      break;
     }
    }
   } while (0);
   i44 = i44 + 32 | 0;
   if ((i44 | 0) == (i40 | 0)) {
    break;
   }
  }
  HEAP32[i53 >> 2] = 0;
 }
 i53 = HEAP32[i34 >> 2] | 0;
 if ((i53 | 0) != 0) {
  HEAP32[i34 >> 2] = 0;
  HEAP32[i51 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i53);
 }
 i53 = HEAP32[i46 >> 2] | 0;
 do {
  if ((i53 | 0) != 0) {
   i46 = i53 | 0;
   i51 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
   if ((i51 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i53);
    break;
   } else {
    HEAP32[i46 >> 2] = i51;
    break;
   }
  }
 } while (0);
 i53 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i53 | 0) != 0) {
   i2 = i53 | 0;
   i51 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i51 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i53);
    break;
   } else {
    HEAP32[i2 >> 2] = i51;
    break;
   }
  }
 } while (0);
 i53 = HEAP32[i52 >> 2] | 0;
 do {
  if ((i53 | 0) != 0) {
   i52 = i53 | 0;
   i51 = (HEAP32[i52 >> 2] | 0) - 2 | 0;
   if ((i51 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i53);
    break;
   } else {
    HEAP32[i52 >> 2] = i51;
    break;
   }
  }
 } while (0);
 i53 = HEAP32[i49 >> 2] | 0;
 if ((i53 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i49 = i53 | 0;
 i51 = (HEAP32[i49 >> 2] | 0) - 2 | 0;
 if ((i51 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i53);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i49 >> 2] = i51;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore28CustomFilterValidatedProgramC1EPNS_25CustomFilterGlobalContextERKNS_23CustomFilterProgramInfoE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 384 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 i10 = i4 + 48 | 0;
 i11 = i4 + 64 | 0;
 i12 = i4 + 72 | 0;
 i13 = i4 + 80 | 0;
 i14 = i4 + 96 | 0;
 i15 = i4 + 104 | 0;
 i16 = i4 + 112 | 0;
 i17 = i4 + 128 | 0;
 i18 = i4 + 136 | 0;
 i19 = i4 + 144 | 0;
 i20 = i4 + 160 | 0;
 i21 = i4 + 168 | 0;
 i22 = i4 + 176 | 0;
 i23 = i4 + 192 | 0;
 i24 = i4 + 200 | 0;
 i25 = i4 + 208 | 0;
 i26 = i4 + 224 | 0;
 i27 = i4 + 232 | 0;
 i28 = i4 + 240 | 0;
 i29 = i4 + 256 | 0;
 i30 = i4 + 264 | 0;
 i31 = i4 + 272 | 0;
 i32 = i4 + 288 | 0;
 i33 = i4 + 296 | 0;
 i34 = i4 + 304 | 0;
 i35 = i4 + 312 | 0;
 i36 = i4 + 320 | 0;
 i37 = i4 + 328 | 0;
 i38 = i4 + 336 | 0;
 i39 = i4 + 344 | 0;
 i40 = i4 + 352 | 0;
 i41 = i4 + 368 | 0;
 i42 = i4 + 376 | 0;
 HEAP32[i1 >> 2] = 1;
 i43 = i3 | 0;
 i44 = HEAP32[i43 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i44;
 if ((i44 | 0) != 0) {
  i45 = i44 | 0;
  HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 2;
 }
 i45 = i3 + 4 | 0;
 i44 = HEAP32[i45 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i44;
 if ((i44 | 0) != 0) {
  i46 = i44 | 0;
  HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 2;
 }
 i46 = i3 + 8 | 0;
 HEAP32[i1 + 12 >> 2] = HEAP32[i46 >> 2];
 i44 = i3 + 12 | 0;
 i47 = i1 + 16 | 0;
 i48 = HEAP32[i44 + 4 >> 2] | 0;
 HEAP32[i47 >> 2] = HEAP32[i44 >> 2];
 HEAP32[i47 + 4 >> 2] = i48;
 i48 = i1 + 24 | 0;
 HEAP32[i48 >> 2] = HEAP32[i3 + 20 >> 2];
 i3 = i1 + 28 | 0;
 HEAP32[i3 >> 2] = 0;
 i47 = i1 + 32 | 0;
 HEAP32[i47 >> 2] = 0;
 HEAP32[i1 + 36 >> 2] = 0;
 i44 = i1 + 44 | 0;
 HEAP8[i44] = 0;
 __ZN7WebCore28CustomFilterValidatedProgram12platformInitEv(i1);
 i49 = i36 | 0;
 i50 = HEAP32[i43 >> 2] | 0;
 HEAP32[i49 >> 2] = i50;
 if ((i50 | 0) == 0) {
  i51 = 7;
 } else {
  i43 = i50 | 0;
  HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 2;
  if ((HEAP32[i49 >> 2] | 0) == 0) {
   i51 = 7;
  }
 }
 do {
  if ((i51 | 0) == 7) {
   if (HEAP8[H_BASE + 3840 | 0] | 0) {
    i52 = HEAP32[H_BASE + 3872 >> 2] | 0;
   } else {
    i43 = __Znwj(4) | 0;
    HEAP32[i35 >> 2] = H_BASE + 3688;
    __ZN3WTF6StringC1ENS_12ASCIILiteralE(i43, i35);
    HEAP32[H_BASE + 3872 >> 2] = i43;
    HEAP8[H_BASE + 3840 | 0] = 1;
    i52 = i43;
   }
   i43 = HEAP32[i52 >> 2] | 0;
   if ((i43 | 0) != 0) {
    i50 = i43 | 0;
    HEAP32[i50 >> 2] = (HEAP32[i50 >> 2] | 0) + 2;
   }
   i50 = HEAP32[i49 >> 2] | 0;
   HEAP32[i49 >> 2] = i43;
   if ((i50 | 0) == 0) {
    break;
   }
   i43 = i50 | 0;
   i53 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
   if ((i53 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i50);
    break;
   } else {
    HEAP32[i43 >> 2] = i53;
    break;
   }
  }
 } while (0);
 i52 = i37 | 0;
 i35 = HEAP32[i45 >> 2] | 0;
 HEAP32[i52 >> 2] = i35;
 if ((i35 | 0) == 0) {
  i51 = 18;
 } else {
  i45 = i35 | 0;
  HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 2;
  if ((HEAP32[i52 >> 2] | 0) == 0) {
   i51 = 18;
  }
 }
 do {
  if ((i51 | 0) == 18) {
   if (HEAP8[H_BASE + 3832 | 0] | 0) {
    i54 = HEAP32[H_BASE + 3864 >> 2] | 0;
   } else {
    i45 = __Znwj(4) | 0;
    HEAP32[i34 >> 2] = H_BASE + 3672;
    __ZN3WTF6StringC1ENS_12ASCIILiteralE(i45, i34);
    HEAP32[H_BASE + 3864 >> 2] = i45;
    HEAP8[H_BASE + 3832 | 0] = 1;
    i54 = i45;
   }
   i45 = HEAP32[i54 >> 2] | 0;
   if ((i45 | 0) != 0) {
    i35 = i45 | 0;
    HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 2;
   }
   i35 = HEAP32[i52 >> 2] | 0;
   HEAP32[i52 >> 2] = i45;
   if ((i35 | 0) == 0) {
    break;
   }
   i45 = i35 | 0;
   i53 = (HEAP32[i45 >> 2] | 0) - 2 | 0;
   if ((i53 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i35);
    break;
   } else {
    HEAP32[i45 >> 2] = i53;
    break;
   }
  }
 } while (0);
 i54 = (HEAP32[i46 >> 2] | 0) == 1;
 if (i54) {
  i55 = __ZN7WebCore25CustomFilterGlobalContext18mixShaderValidatorEv(i2) | 0;
 } else {
  i55 = __ZN7WebCore25CustomFilterGlobalContext20webglShaderValidatorEv(i2) | 0;
 }
 i2 = i38 | 0;
 HEAP32[i2 >> 2] = 0;
 i46 = i39 | 0;
 HEAP32[i46 >> 2] = 0;
 i34 = i40 | 0;
 HEAP32[i34 >> 2] = 0;
 i51 = i40 + 4 | 0;
 HEAP32[i51 >> 2] = 0;
 i53 = i40 + 8 | 0;
 HEAP32[i53 >> 2] = 0;
 __ZNK3WTF6String4utf8ENS_14ConversionModeE(i41, i36, 0);
 i36 = i41 | 0;
 i41 = HEAP32[i36 >> 2] | 0;
 if ((i41 | 0) == 0) {
  i56 = 0;
 } else {
  i56 = i41 + 8 | 0;
 }
 i41 = __ZN7WebCore17ANGLEWebKitBridge19compileShaderSourceEPKcNS_15ANGLEShaderTypeERN3WTF6StringES6_RNS4_6VectorINS_17ANGLEShaderSymbolELj0ENS4_15CrashOnOverflowEEEi(i55, i56, 35633, i3, i38, i40, 0) | 0;
 i38 = HEAP32[i36 >> 2] | 0;
 do {
  if ((i38 | 0) != 0) {
   i36 = i38 | 0;
   i3 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i38);
    break;
   } else {
    HEAP32[i36 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZNK3WTF6String4utf8ENS_14ConversionModeE(i42, i37, 0);
 i37 = i42 | 0;
 i42 = HEAP32[i37 >> 2] | 0;
 if ((i42 | 0) == 0) {
  i57 = 0;
 } else {
  i57 = i42 + 8 | 0;
 }
 i42 = __ZN7WebCore17ANGLEWebKitBridge19compileShaderSourceEPKcNS_15ANGLEShaderTypeERN3WTF6StringES6_RNS4_6VectorINS_17ANGLEShaderSymbolELj0ENS4_15CrashOnOverflowEEEi(i55, i57, 35632, i47, i39, i40, 0) | 0;
 i39 = HEAP32[i37 >> 2] | 0;
 do {
  if ((i39 | 0) != 0) {
   i37 = i39 | 0;
   i47 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
   if ((i47 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i39);
    break;
   } else {
    HEAP32[i37 >> 2] = i47;
    break;
   }
  }
 } while (0);
 L61 : do {
  if (i41 & i42) {
   if ((HEAP32[i53 >> 2] | 0) != 0) {
    i39 = i22 + 8 | 0;
    i47 = i22 | 0;
    i37 = i20 | 0;
    i57 = i25 + 8 | 0;
    i55 = i25 | 0;
    i38 = i23 | 0;
    i3 = i28 + 8 | 0;
    i36 = i28 | 0;
    i56 = i26 | 0;
    i45 = i31 + 8 | 0;
    i35 = i31 | 0;
    i43 = i29 | 0;
    i50 = i32 | 0;
    i58 = (HEAP32[i48 >> 2] | 0) == 0;
    i59 = i7 + 8 | 0;
    i60 = i7 | 0;
    i61 = i5 | 0;
    i62 = i10 + 8 | 0;
    i63 = i10 | 0;
    i64 = i8 | 0;
    i65 = i13 + 8 | 0;
    i66 = i13 | 0;
    i67 = i11 | 0;
    i68 = i16 + 8 | 0;
    i69 = i16 | 0;
    i70 = i14 | 0;
    i71 = i19 + 8 | 0;
    i72 = i19 | 0;
    i73 = i17 | 0;
    i74 = i33 | 0;
    i75 = 0;
    while (1) {
     i76 = HEAP32[i34 >> 2] | 0;
     i77 = HEAP32[i76 + (i75 << 5) >> 2] | 0;
     do {
      if ((i77 | 0) == 0) {
       do {
        if ((HEAP32[H_BASE + 3848 >> 2] | 0) == 0) {
         i78 = __ZN3WTF10fastMallocEj(20) | 0;
         _memset(i78 | 0, 0, 20) | 0;
         HEAP32[H_BASE + 3848 >> 2] = i78;
         __ZN3WTF6StringC1EPKc(i20, H_BASE + 864 | 0);
         HEAP32[i21 >> 2] = 35664;
         __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_10ShDataTypeEENS_24KeyValuePairKeyExtractorIS4_EENS_10StringHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_17HashMapTranslatorISD_S7_EES1_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i22, i78, i20, i21);
         if ((HEAP8[i39] & 1) == 0) {
          HEAP32[(HEAP32[i47 >> 2] | 0) + 4 >> 2] = HEAP32[i21 >> 2];
         }
         i78 = HEAP32[i37 >> 2] | 0;
         do {
          if ((i78 | 0) != 0) {
           i79 = i78 | 0;
           i80 = (HEAP32[i79 >> 2] | 0) - 2 | 0;
           if ((i80 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i78);
            break;
           } else {
            HEAP32[i79 >> 2] = i80;
            break;
           }
          }
         } while (0);
         i78 = HEAP32[H_BASE + 3848 >> 2] | 0;
         __ZN3WTF6StringC1EPKc(i23, H_BASE + 848 | 0);
         HEAP32[i24 >> 2] = 35666;
         __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_10ShDataTypeEENS_24KeyValuePairKeyExtractorIS4_EENS_10StringHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_17HashMapTranslatorISD_S7_EES1_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i25, i78 | 0, i23, i24);
         if ((HEAP8[i57] & 1) == 0) {
          HEAP32[(HEAP32[i55 >> 2] | 0) + 4 >> 2] = HEAP32[i24 >> 2];
         }
         i78 = HEAP32[i38 >> 2] | 0;
         do {
          if ((i78 | 0) != 0) {
           i80 = i78 | 0;
           i79 = (HEAP32[i80 >> 2] | 0) - 2 | 0;
           if ((i79 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i78);
            break;
           } else {
            HEAP32[i80 >> 2] = i79;
            break;
           }
          }
         } while (0);
         i78 = HEAP32[H_BASE + 3848 >> 2] | 0;
         __ZN3WTF6StringC1EPKc(i26, H_BASE + 3224 | 0);
         HEAP32[i27 >> 2] = 35664;
         __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_10ShDataTypeEENS_24KeyValuePairKeyExtractorIS4_EENS_10StringHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_17HashMapTranslatorISD_S7_EES1_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i28, i78 | 0, i26, i27);
         if ((HEAP8[i3] & 1) == 0) {
          HEAP32[(HEAP32[i36 >> 2] | 0) + 4 >> 2] = HEAP32[i27 >> 2];
         }
         i78 = HEAP32[i56 >> 2] | 0;
         do {
          if ((i78 | 0) != 0) {
           i79 = i78 | 0;
           i80 = (HEAP32[i79 >> 2] | 0) - 2 | 0;
           if ((i80 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i78);
            break;
           } else {
            HEAP32[i79 >> 2] = i80;
            break;
           }
          }
         } while (0);
         i78 = HEAP32[H_BASE + 3848 >> 2] | 0;
         __ZN3WTF6StringC1EPKc(i29, H_BASE + 1064 | 0);
         HEAP32[i30 >> 2] = 35665;
         __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_10ShDataTypeEENS_24KeyValuePairKeyExtractorIS4_EENS_10StringHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_17HashMapTranslatorISD_S7_EES1_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i31, i78 | 0, i29, i30);
         if ((HEAP8[i45] & 1) == 0) {
          HEAP32[(HEAP32[i35 >> 2] | 0) + 4 >> 2] = HEAP32[i30 >> 2];
         }
         i78 = HEAP32[i43 >> 2] | 0;
         if ((i78 | 0) == 0) {
          break;
         }
         i80 = i78 | 0;
         i79 = (HEAP32[i80 >> 2] | 0) - 2 | 0;
         if ((i79 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i78);
          break;
         } else {
          HEAP32[i80 >> 2] = i79;
          break;
         }
        }
       } while (0);
       i79 = HEAP32[H_BASE + 3848 >> 2] | 0;
       i80 = i76 + (i75 << 5) + 4 | 0;
       __ZN3WTF7HashMapINS_6StringE10ShDataTypeNS_10StringHashENS_10HashTraitsIS1_EENS4_IS2_EEE4findERKS1_(i32, i79, i80);
       i78 = HEAP32[i50 >> 2] | 0;
       if ((i78 | 0) == ((HEAP32[i79 >> 2] | 0) + (HEAP32[i79 + 4 >> 2] << 3) | 0)) {
        break L61;
       }
       if (i58) {
        if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i80 >> 2] | 0, H_BASE + 1064 | 0) | 0) {
         break L61;
        }
       }
       if ((HEAP32[i76 + (i75 << 5) + 12 >> 2] | 0) != (HEAP32[i78 + 4 >> 2] | 0)) {
        break L61;
       }
      } else if ((i77 | 0) == 1) {
       i78 = i76 + (i75 << 5) + 12 | 0;
       i80 = HEAP32[i78 >> 2] | 0;
       if ((i80 | 0) == 35678 | (i80 | 0) == 35680 | (i80 | 0) == 35683 | (i80 | 0) == 36198) {
        break L61;
       }
       do {
        if ((HEAP32[H_BASE + 3856 >> 2] | 0) == 0) {
         i80 = __ZN3WTF10fastMallocEj(20) | 0;
         _memset(i80 | 0, 0, 20) | 0;
         HEAP32[H_BASE + 3856 >> 2] = i80;
         __ZN3WTF6StringC1EPKc(i5, H_BASE + 1048 | 0);
         HEAP32[i6 >> 2] = 35666;
         __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_10ShDataTypeEENS_24KeyValuePairKeyExtractorIS4_EENS_10StringHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_17HashMapTranslatorISD_S7_EES1_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i7, i80, i5, i6);
         if ((HEAP8[i59] & 1) == 0) {
          HEAP32[(HEAP32[i60 >> 2] | 0) + 4 >> 2] = HEAP32[i6 >> 2];
         }
         i80 = HEAP32[i61 >> 2] | 0;
         do {
          if ((i80 | 0) != 0) {
           i79 = i80 | 0;
           i81 = (HEAP32[i79 >> 2] | 0) - 2 | 0;
           if ((i81 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i80);
            break;
           } else {
            HEAP32[i79 >> 2] = i81;
            break;
           }
          }
         } while (0);
         i80 = HEAP32[H_BASE + 3856 >> 2] | 0;
         __ZN3WTF6StringC1EPKc(i8, H_BASE + 1032 | 0);
         HEAP32[i9 >> 2] = 35664;
         __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_10ShDataTypeEENS_24KeyValuePairKeyExtractorIS4_EENS_10StringHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_17HashMapTranslatorISD_S7_EES1_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i10, i80 | 0, i8, i9);
         if ((HEAP8[i62] & 1) == 0) {
          HEAP32[(HEAP32[i63 >> 2] | 0) + 4 >> 2] = HEAP32[i9 >> 2];
         }
         i80 = HEAP32[i64 >> 2] | 0;
         do {
          if ((i80 | 0) != 0) {
           i81 = i80 | 0;
           i79 = (HEAP32[i81 >> 2] | 0) - 2 | 0;
           if ((i79 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i80);
            break;
           } else {
            HEAP32[i81 >> 2] = i79;
            break;
           }
          }
         } while (0);
         i80 = HEAP32[H_BASE + 3856 >> 2] | 0;
         __ZN3WTF6StringC1EPKc(i11, H_BASE + 1008 | 0);
         HEAP32[i12 >> 2] = 35676;
         __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_10ShDataTypeEENS_24KeyValuePairKeyExtractorIS4_EENS_10StringHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_17HashMapTranslatorISD_S7_EES1_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i13, i80 | 0, i11, i12);
         if ((HEAP8[i65] & 1) == 0) {
          HEAP32[(HEAP32[i66 >> 2] | 0) + 4 >> 2] = HEAP32[i12 >> 2];
         }
         i80 = HEAP32[i67 >> 2] | 0;
         do {
          if ((i80 | 0) != 0) {
           i79 = i80 | 0;
           i81 = (HEAP32[i79 >> 2] | 0) - 2 | 0;
           if ((i81 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i80);
            break;
           } else {
            HEAP32[i79 >> 2] = i81;
            break;
           }
          }
         } while (0);
         i80 = HEAP32[H_BASE + 3856 >> 2] | 0;
         __ZN3WTF6StringC1EPKc(i14, H_BASE + 992 | 0);
         HEAP32[i15 >> 2] = 35664;
         __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_10ShDataTypeEENS_24KeyValuePairKeyExtractorIS4_EENS_10StringHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_17HashMapTranslatorISD_S7_EES1_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i16, i80 | 0, i14, i15);
         if ((HEAP8[i68] & 1) == 0) {
          HEAP32[(HEAP32[i69 >> 2] | 0) + 4 >> 2] = HEAP32[i15 >> 2];
         }
         i80 = HEAP32[i70 >> 2] | 0;
         do {
          if ((i80 | 0) != 0) {
           i81 = i80 | 0;
           i79 = (HEAP32[i81 >> 2] | 0) - 2 | 0;
           if ((i79 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i80);
            break;
           } else {
            HEAP32[i81 >> 2] = i79;
            break;
           }
          }
         } while (0);
         i80 = HEAP32[H_BASE + 3856 >> 2] | 0;
         __ZN3WTF6StringC1EPKc(i17, H_BASE + 880 | 0);
         HEAP32[i18 >> 2] = 35664;
         __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_10ShDataTypeEENS_24KeyValuePairKeyExtractorIS4_EENS_10StringHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_17HashMapTranslatorISD_S7_EES1_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i19, i80 | 0, i17, i18);
         if ((HEAP8[i71] & 1) == 0) {
          HEAP32[(HEAP32[i72 >> 2] | 0) + 4 >> 2] = HEAP32[i18 >> 2];
         }
         i80 = HEAP32[i73 >> 2] | 0;
         if ((i80 | 0) == 0) {
          break;
         }
         i79 = i80 | 0;
         i81 = (HEAP32[i79 >> 2] | 0) - 2 | 0;
         if ((i81 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i80);
          break;
         } else {
          HEAP32[i79 >> 2] = i81;
          break;
         }
        }
       } while (0);
       i81 = HEAP32[H_BASE + 3856 >> 2] | 0;
       __ZN3WTF7HashMapINS_6StringE10ShDataTypeNS_10StringHashENS_10HashTraitsIS1_EENS4_IS2_EEE4findERKS1_(i33, i81, i76 + (i75 << 5) + 4 | 0);
       i79 = HEAP32[i74 >> 2] | 0;
       if ((i79 | 0) == ((HEAP32[i81 >> 2] | 0) + (HEAP32[i81 + 4 >> 2] << 3) | 0)) {
        break;
       }
       if ((HEAP8[i76 + (i75 << 5) + 20 | 0] & 1) != 0) {
        break L61;
       }
       if ((HEAP32[i78 >> 2] | 0) != (HEAP32[i79 + 4 >> 2] | 0)) {
        break L61;
       }
      }
     } while (0);
     i75 = i75 + 1 | 0;
     if (i75 >>> 0 >= (HEAP32[i53 >> 2] | 0) >>> 0) {
      break;
     }
    }
   }
   if (i54) {
    __ZN7WebCore28CustomFilterValidatedProgram22rewriteMixVertexShaderERKN3WTF6VectorINS_17ANGLEShaderSymbolELj0ENS1_15CrashOnOverflowEEE(i1, i40);
    __ZN7WebCore28CustomFilterValidatedProgram24rewriteMixFragmentShaderEv(i1);
   }
   HEAP8[i44] = 1;
  }
 } while (0);
 i44 = HEAP32[i53 >> 2] | 0;
 if ((i44 | 0) != 0) {
  i1 = HEAP32[i34 >> 2] | 0;
  i40 = i1 + (i44 << 5) | 0;
  i44 = i1;
  while (1) {
   i1 = HEAP32[i44 + 8 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i54 = i1 | 0;
     i33 = (HEAP32[i54 >> 2] | 0) - 2 | 0;
     if ((i33 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i1);
      break;
     } else {
      HEAP32[i54 >> 2] = i33;
      break;
     }
    }
   } while (0);
   i1 = HEAP32[i44 + 4 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i33 = i1 | 0;
     i54 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
     if ((i54 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i1);
      break;
     } else {
      HEAP32[i33 >> 2] = i54;
      break;
     }
    }
   } while (0);
   i44 = i44 + 32 | 0;
   if ((i44 | 0) == (i40 | 0)) {
    break;
   }
  }
  HEAP32[i53 >> 2] = 0;
 }
 i53 = HEAP32[i34 >> 2] | 0;
 if ((i53 | 0) != 0) {
  HEAP32[i34 >> 2] = 0;
  HEAP32[i51 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i53);
 }
 i53 = HEAP32[i46 >> 2] | 0;
 do {
  if ((i53 | 0) != 0) {
   i46 = i53 | 0;
   i51 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
   if ((i51 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i53);
    break;
   } else {
    HEAP32[i46 >> 2] = i51;
    break;
   }
  }
 } while (0);
 i53 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i53 | 0) != 0) {
   i2 = i53 | 0;
   i51 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i51 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i53);
    break;
   } else {
    HEAP32[i2 >> 2] = i51;
    break;
   }
  }
 } while (0);
 i53 = HEAP32[i52 >> 2] | 0;
 do {
  if ((i53 | 0) != 0) {
   i52 = i53 | 0;
   i51 = (HEAP32[i52 >> 2] | 0) - 2 | 0;
   if ((i51 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i53);
    break;
   } else {
    HEAP32[i52 >> 2] = i51;
    break;
   }
  }
 } while (0);
 i53 = HEAP32[i49 >> 2] | 0;
 if ((i53 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i49 = i53 | 0;
 i51 = (HEAP32[i49 >> 2] | 0) - 2 | 0;
 if ((i51 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i53);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i49 >> 2] = i51;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore28CustomFilterValidatedProgram24rewriteMixFragmentShaderEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i2 | 0;
 i4 = i2 + 24 | 0;
 i5 = i2 + 32 | 0;
 HEAP32[i3 >> 2] = 0;
 i6 = i3 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i3 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP8[i3 + 12 | 0] = 1;
 HEAP32[i3 + 16 >> 2] = 0;
 HEAP32[i3 + 20 >> 2] = 0;
 __ZN3WTF13StringBuilder6appendEPKhj(i3, H_BASE + 760 | 0, 80);
 i8 = i1 + 32 | 0;
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i3, i8);
 __ZN7WebCore28CustomFilterValidatedProgram19blendFunctionStringENS_9BlendModeE(i4, HEAP32[i1 + 16 >> 2] | 0);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i3, i4);
 i9 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i4 = i9 | 0;
   i10 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i4 >> 2] = i10;
    break;
   }
  }
 } while (0);
 switch (HEAP32[i1 + 20 >> 2] | 0) {
 case 0:
  {
   i11 = H_BASE + 1320 | 0;
   i12 = H_BASE + 1320 | 0;
   i13 = 18;
   break;
  }
 case 1:
  {
   i11 = H_BASE + 1320 | 0;
   i12 = H_BASE + 1312 | 0;
   i13 = 18;
   break;
  }
 case 2:
  {
   i11 = H_BASE + 1368 | 0;
   i12 = H_BASE + 1312 | 0;
   i13 = 18;
   break;
  }
 case 3:
  {
   i11 = H_BASE + 1320 | 0;
   i12 = H_BASE + 1384 | 0;
   i13 = 18;
   break;
  }
 case 4:
  {
   i11 = H_BASE + 1320 | 0;
   i12 = H_BASE + 1296 | 0;
   i13 = 18;
   break;
  }
 case 6:
  {
   i11 = H_BASE + 1312 | 0;
   i12 = H_BASE + 1296 | 0;
   i13 = 18;
   break;
  }
 case 7:
  {
   i11 = H_BASE + 1288 | 0;
   i12 = H_BASE + 1320 | 0;
   i13 = 18;
   break;
  }
 case 8:
  {
   i11 = H_BASE + 1368 | 0;
   i12 = H_BASE + 1320 | 0;
   i13 = 18;
   break;
  }
 case 9:
  {
   i11 = H_BASE + 1288 | 0;
   i12 = H_BASE + 1296 | 0;
   i13 = 18;
   break;
  }
 case 10:
  {
   i11 = H_BASE + 1368 | 0;
   i12 = H_BASE + 1296 | 0;
   i13 = 18;
   break;
  }
 case 12:
  {
   i1 = i5 | 0;
   HEAP32[i1 >> 2] = 0;
   i14 = i1;
   break;
  }
 case 5:
  {
   i11 = H_BASE + 1368 | 0;
   i12 = H_BASE + 1384 | 0;
   i13 = 18;
   break;
  }
 default:
  {
   i1 = i5 | 0;
   HEAP32[i1 >> 2] = 0;
   i14 = i1;
  }
 }
 if ((i13 | 0) == 18) {
  __ZN3WTF6String6formatEPKcz(i5, H_BASE + 1080 | 0, (i1 = STACKTOP, STACKTOP = STACKTOP + 16 | 0, HEAP32[i1 >> 2] = i12, HEAP32[i1 + 8 >> 2] = i11, i1) | 0);
  STACKTOP = i1;
  i14 = i5 | 0;
 }
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i3, i5);
 i5 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i14 = i5 | 0;
   i1 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i14 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF13StringBuilder6appendEPKhj(i3, H_BASE + 136 | 0, 618);
 __ZN3WTF13StringBuilder11shrinkToFitEv(i3);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i3);
  i3 = HEAP32[i6 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i15 = 0;
  } else {
   i16 = i3;
   i13 = 25;
  }
 } else {
  i16 = i5;
  i13 = 25;
 }
 if ((i13 | 0) == 25) {
  i13 = i16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
  i15 = i16;
 }
 i16 = i8 | 0;
 i8 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = i15;
 do {
  if ((i8 | 0) != 0) {
   i15 = i8 | 0;
   i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i15 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i7 = i8 | 0;
   i16 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i7 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i6 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i8 | 0;
 i16 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i16 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i6 >> 2] = i16;
  STACKTOP = i2;
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_10ShDataTypeEENS_24KeyValuePairKeyExtractorIS4_EENS_10StringHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E6rehashEiPS4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 i8 = __ZN3WTF10fastMallocEj(i2 << 3) | 0;
 if ((i2 | 0) > 0) {
  i9 = 0;
  while (1) {
   HEAP32[i8 + (i9 << 3) >> 2] = 0;
   HEAP32[i8 + (i9 << 3) + 4 >> 2] = 0;
   i9 = i9 + 1 | 0;
   if ((i9 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i6 >> 2] = i8;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i10 = 0;
  i11 = i7;
  __ZN3WTF8fastFreeEPv(i11);
  return i10 | 0;
 } else {
  i12 = 0;
  i13 = 0;
 }
 while (1) {
  i8 = i7 + (i12 << 3) | 0;
  i2 = i8 | 0;
  i9 = HEAP32[i2 >> 2] | 0;
  i14 = i9;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i13;
  } else {
   i14 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = HEAP32[i9 + 16 >> 2] | 0;
   if (i17 >>> 0 > 127 >>> 0) {
    i18 = i17 >>> 7;
   } else {
    i18 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i9) | 0;
   }
   i9 = (i18 >>> 23) + ~i18 | 0;
   i17 = i9 << 12 ^ i9;
   i9 = i17 >>> 7 ^ i17;
   i17 = i9 << 2 ^ i9;
   i9 = i17 >>> 20 ^ i17 | 1;
   i17 = i18;
   i19 = 0;
   i20 = 0;
   while (1) {
    i21 = i17 & i16;
    i22 = i14 + (i21 << 3) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == (-1 | 0)) {
     i25 = i22;
    } else if ((i24 | 0) == 0) {
     i26 = 11;
     break;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i2 >> 2] | 0) | 0) {
      i27 = i22;
      break;
     } else {
      i25 = i20;
     }
    }
    i23 = (i19 | 0) == 0 ? i9 : i19;
    i17 = i23 + i21 | 0;
    i19 = i23;
    i20 = i25;
   }
   if ((i26 | 0) == 11) {
    i26 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i9 = i17 | 0;
     i14 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i9 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i19 >> 2] = i17;
   HEAP32[i27 + 4 >> 2] = HEAP32[i7 + (i12 << 3) + 4 >> 2];
   i15 = (i8 | 0) == (i3 | 0) ? i27 : i13;
  }
  i17 = i12 + 1 | 0;
  if ((i17 | 0) == (i5 | 0)) {
   break;
  } else {
   i12 = i17;
   i13 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i28 = 0;
 } else {
  i10 = i15;
  i11 = i7;
  __ZN3WTF8fastFreeEPv(i11);
  return i10 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i28 << 3) >> 2] | 0;
  i13 = i1;
  do {
   if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
    i12 = i1 | 0;
    i27 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
    if ((i27 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i12 >> 2] = i27;
     break;
    }
   }
  } while (0);
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i28 = i1;
  } else {
   i10 = i15;
   break;
  }
 }
 i11 = i7;
 __ZN3WTF8fastFreeEPv(i11);
 return i10 | 0;
}
function __ZN7WebCore28CustomFilterValidatedProgram19blendFunctionStringENS_9BlendModeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 HEAP32[i1 >> 2] = 0;
 switch (i2 | 0) {
 case 0:
  {
   i7 = H_BASE + 8 | 0;
   i8 = H_BASE + 16 | 0;
   break;
  }
 case 1:
  {
   i7 = H_BASE + 3664 | 0;
   i8 = H_BASE + 16 | 0;
   break;
  }
 case 2:
  {
   i7 = H_BASE + 3640 | 0;
   i8 = H_BASE + 16 | 0;
   break;
  }
 case 4:
  {
   i7 = H_BASE + 3624 | 0;
   i8 = H_BASE + 16 | 0;
   break;
  }
 case 5:
  {
   i7 = H_BASE + 3608 | 0;
   i8 = H_BASE + 16 | 0;
   break;
  }
 case 10:
  {
   i7 = H_BASE + 3592 | 0;
   i8 = H_BASE + 16 | 0;
   break;
  }
 case 11:
  {
   i7 = H_BASE + 3568 | 0;
   i8 = H_BASE + 16 | 0;
   break;
  }
 case 3:
  {
   i7 = H_BASE + 32 | 0;
   i8 = H_BASE + 3472 | 0;
   break;
  }
 case 6:
  {
   i7 = H_BASE + 32 | 0;
   i8 = H_BASE + 3408 | 0;
   break;
  }
 case 7:
  {
   i7 = H_BASE + 32 | 0;
   i8 = H_BASE + 3336 | 0;
   break;
  }
 case 8:
  {
   i7 = H_BASE + 32 | 0;
   i8 = H_BASE + 3240 | 0;
   break;
  }
 case 9:
  {
   i7 = H_BASE + 32 | 0;
   i8 = H_BASE + 3024 | 0;
   break;
  }
 case 15:
  {
   i9 = H_BASE + 2960 | 0;
   i10 = 0;
   i11 = 17;
   break;
  }
 case 12:
  {
   i9 = H_BASE + 2904 | 0;
   i10 = 1;
   i11 = 17;
   break;
  }
 case 13:
  {
   i9 = H_BASE + 2848 | 0;
   i10 = 1;
   i11 = 17;
   break;
  }
 case 14:
  {
   i9 = H_BASE + 2992 | 0;
   i10 = 0;
   i11 = 17;
   break;
  }
 default:
  {
   i7 = H_BASE + 32 | 0;
   i8 = H_BASE + 16 | 0;
  }
 }
 L17 : do {
  if ((i11 | 0) == 17) {
   __ZN3WTF6StringC1EPKc(i4, H_BASE + 2376 | 0);
   __ZN3WTF6String6appendERKS0_(i1, i4);
   i2 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i2 | 0) == 0) {
     if (!i10) {
      i7 = i9;
      i8 = H_BASE + 16 | 0;
      break L17;
     }
    } else {
     i12 = i2 | 0;
     i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i2);
      if (i10) {
       break;
      } else {
       i7 = i9;
       i8 = H_BASE + 16 | 0;
       break L17;
      }
     } else {
      HEAP32[i12 >> 2] = i13;
      if (i10) {
       break;
      } else {
       i7 = i9;
       i8 = H_BASE + 16 | 0;
       break L17;
      }
     }
    }
   } while (0);
   __ZN3WTF6StringC1EPKc(i5, H_BASE + 1576 | 0);
   __ZN3WTF6String6appendERKS0_(i1, i5);
   i2 = HEAP32[i5 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i7 = i9;
    i8 = H_BASE + 16 | 0;
    break;
   }
   i13 = i2 | 0;
   i12 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    i7 = i9;
    i8 = H_BASE + 16 | 0;
    break;
   } else {
    HEAP32[i13 >> 2] = i12;
    i7 = i9;
    i8 = H_BASE + 16 | 0;
    break;
   }
  }
 } while (0);
 __ZN3WTF6String6formatEPKcz(i6, H_BASE + 1392 | 0, (i9 = STACKTOP, STACKTOP = STACKTOP + 16 | 0, HEAP32[i9 >> 2] = i8, HEAP32[i9 + 8 >> 2] = i7, i9) | 0);
 STACKTOP = i9;
 __ZN3WTF6String6appendERKS0_(i1, i6);
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i1 | 0;
 i9 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i9 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i6 >> 2] = i9;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_10ShDataTypeEENS_24KeyValuePairKeyExtractorIS4_EENS_10StringHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_17HashMapTranslatorISD_S7_EES1_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
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
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_10ShDataTypeEENS_24KeyValuePairKeyExtractorIS4_EENS_10StringHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E6rehashEiPS4_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i11 = i9 >>> 7;
 } else {
  i11 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i11 >>> 23) + ~i11 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i7 = i11;
 i11 = 0;
 while (1) {
  i12 = i7 & i6;
  i13 = i10 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 11;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i11 | 0) == 0 ? i3 : i11;
  i9 = i16;
  i7 = i14 + i12 | 0;
  i11 = i14;
 }
 if ((i17 | 0) == 11) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i11 = i1;
  HEAP32[i11 >> 2] = i13;
  HEAP32[i11 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  HEAP32[i9 >> 2] = 0;
  HEAP32[i9 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = i18 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 HEAP32[i18 + 4 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i13 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i13;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i13 << 1 | 0) < (i8 | 0)) {
  i19 = i18;
  i20 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i21 = 8;
  } else {
   i9 = i8 << 1;
   i21 = (i13 * 6 & -1 | 0) < (i9 | 0) ? i8 : i9;
  }
  i9 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_10ShDataTypeEENS_24KeyValuePairKeyExtractorIS4_EENS_10StringHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E6rehashEiPS4_(i2, i21, i18) | 0;
  i19 = i9;
  i20 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF7HashMapINS_6StringE10ShDataTypeNS_10StringHashENS_10HashTraitsIS1_EENS4_IS2_EEE4findERKS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i6 = HEAP32[i2 + 4 >> 2] << 3 | 0;
   i7 = i6;
   i8 = i6;
  } else {
   i6 = HEAP32[i2 + 8 >> 2] | 0;
   i9 = i3 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   i11 = HEAP32[i10 + 16 >> 2] | 0;
   if (i11 >>> 0 > 127 >>> 0) {
    i12 = i11 >>> 7;
   } else {
    i12 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i10) | 0;
   }
   i10 = (i12 >>> 23) + ~i12 | 0;
   i11 = i10 << 12 ^ i10;
   i10 = i11 >>> 7 ^ i11;
   i11 = i10 << 2 ^ i10;
   i10 = i11 >>> 20 ^ i11 | 1;
   i11 = i12;
   i13 = 0;
   while (1) {
    i14 = i11 & i6;
    i15 = i5 + (i14 << 3) | 0;
    i16 = HEAP32[i15 >> 2] | 0;
    i17 = i16;
    if ((i17 | 0) == 0) {
     i18 = 8;
     break;
    } else if ((i17 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i16, HEAP32[i9 >> 2] | 0) | 0) {
      i18 = 11;
      break;
     }
    }
    i16 = (i13 | 0) == 0 ? i10 : i13;
    i11 = i16 + i14 | 0;
    i13 = i16;
   }
   if ((i18 | 0) == 8) {
    i13 = (HEAP32[i4 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i7 = i13;
    i8 = i13;
    break;
   } else if ((i18 | 0) == 11) {
    i13 = (HEAP32[i4 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i7 = (i15 | 0) == 0 ? i13 : i15;
    i8 = i13;
    break;
   }
  }
 } while (0);
 i15 = i1;
 HEAP32[i15 >> 2] = i7;
 HEAP32[i15 + 4 >> 2] = i8;
 return;
}
function __ZN7WebCore28CustomFilterValidatedProgram22rewriteMixVertexShaderERKN3WTF6VectorINS_17ANGLEShaderSymbolELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 + 8 | 0;
 do {
  if ((HEAP32[i6 >> 2] | 0) == 0) {
   i7 = 6;
  } else {
   i8 = i2 | 0;
   i9 = 0;
   i10 = 0;
   while (1) {
    i9 = __ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[(HEAP32[i8 >> 2] | 0) + (i10 << 5) + 4 >> 2] | 0, H_BASE + 3224 | 0) | 0 | i9;
    i10 = i10 + 1 | 0;
    if (i10 >>> 0 >= (HEAP32[i6 >> 2] | 0) >>> 0) {
     break;
    }
   }
   if (!i9) {
    i7 = 6;
    break;
   }
   i11 = i1 + 28 | 0;
  }
 } while (0);
 do {
  if ((i7 | 0) == 6) {
   i6 = i1 + 28 | 0;
   __ZN3WTF6StringC1EPKc(i4, H_BASE + 1328 | 0);
   __ZN3WTF6String6appendERKS0_(i6, i4);
   i2 = HEAP32[i4 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i11 = i6;
    break;
   }
   i10 = i2 | 0;
   i8 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    i11 = i6;
    break;
   } else {
    HEAP32[i10 >> 2] = i8;
    i11 = i6;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 896 | 0);
 __ZN3WTF6String6appendERKS0_(i11, i5);
 i11 = HEAP32[i5 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i11 | 0;
 i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i11);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore28CustomFilterValidatedProgramD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 __ZN7WebCore28CustomFilterValidatedProgram15platformDestroyEv(i1);
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore27CustomFilterCompiledProgramD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 32 >> 2] | 0;
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
 i2 = HEAP32[i1 + 28 >> 2] | 0;
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
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore28CustomFilterValidatedProgramD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 __ZN7WebCore28CustomFilterValidatedProgram15platformDestroyEv(i1);
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore27CustomFilterCompiledProgramD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 32 >> 2] | 0;
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
 i2 = HEAP32[i1 + 28 >> 2] | 0;
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
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore28CustomFilterValidatedProgram23compositeFunctionStringENS_17CompositeOperatorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 switch (i2 | 0) {
 case 0:
  {
   i4 = H_BASE + 1320 | 0;
   i5 = H_BASE + 1320 | 0;
   break;
  }
 case 1:
  {
   i4 = H_BASE + 1320 | 0;
   i5 = H_BASE + 1312 | 0;
   break;
  }
 case 2:
  {
   i4 = H_BASE + 1368 | 0;
   i5 = H_BASE + 1312 | 0;
   break;
  }
 case 3:
  {
   i4 = H_BASE + 1320 | 0;
   i5 = H_BASE + 1384 | 0;
   break;
  }
 case 4:
  {
   i4 = H_BASE + 1320 | 0;
   i5 = H_BASE + 1296 | 0;
   break;
  }
 case 6:
  {
   i4 = H_BASE + 1312 | 0;
   i5 = H_BASE + 1296 | 0;
   break;
  }
 case 7:
  {
   i4 = H_BASE + 1288 | 0;
   i5 = H_BASE + 1320 | 0;
   break;
  }
 case 8:
  {
   i4 = H_BASE + 1368 | 0;
   i5 = H_BASE + 1320 | 0;
   break;
  }
 case 9:
  {
   i4 = H_BASE + 1288 | 0;
   i5 = H_BASE + 1296 | 0;
   break;
  }
 case 10:
  {
   i4 = H_BASE + 1368 | 0;
   i5 = H_BASE + 1296 | 0;
   break;
  }
 case 12:
  {
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i3;
   return;
  }
 case 5:
  {
   i4 = H_BASE + 1368 | 0;
   i5 = H_BASE + 1384 | 0;
   break;
  }
 default:
  {
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i3;
   return;
  }
 }
 __ZN3WTF6String6formatEPKcz(i1, H_BASE + 1080 | 0, (i1 = STACKTOP, STACKTOP = STACKTOP + 16 | 0, HEAP32[i1 >> 2] = i5, HEAP32[i1 + 8 >> 2] = i4, i1) | 0);
 STACKTOP = i1;
 STACKTOP = i3;
 return;
}
function __ZN3WTF13StringBuilder6appendERKNS_6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = i1 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   i6 = i2 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   i6 = i1 + 4 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i2;
   do {
    if ((i7 | 0) != 0) {
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i8 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i7 = HEAP32[i3 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i10 = 0;
   } else {
    i10 = HEAP32[i7 + 4 >> 2] | 0;
   }
   HEAP32[i5 >> 2] = i10;
   HEAP8[i1 + 12 | 0] = (HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] | 0) >>> 5 & 1;
   return;
  }
 } while (0);
 if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
  __ZN3WTF13StringBuilder6appendEPKtj(i1, HEAP32[i2 + 8 >> 2] | 0, i4);
  return;
 } else {
  __ZN3WTF13StringBuilder6appendEPKhj(i1, HEAP32[i2 + 8 >> 2] | 0, i4);
  return;
 }
}
function __ZN7WebCore28CustomFilterValidatedProgram27defaultFragmentShaderStringEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if (HEAP8[H_BASE + 3832 | 0] | 0) {
  i4 = HEAP32[H_BASE + 3864 >> 2] | 0;
 } else {
  i5 = __Znwj(4) | 0;
  HEAP32[i3 >> 2] = H_BASE + 3672;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i5, i3);
  HEAP32[H_BASE + 3864 >> 2] = i5;
  HEAP8[H_BASE + 3832 | 0] = 1;
  i4 = i5;
 }
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 >> 2] = i5;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i5 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore28CustomFilterValidatedProgram25defaultVertexShaderStringEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if (HEAP8[H_BASE + 3840 | 0] | 0) {
  i4 = HEAP32[H_BASE + 3872 >> 2] | 0;
 } else {
  i5 = __Znwj(4) | 0;
  HEAP32[i3 >> 2] = H_BASE + 3688;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i5, i3);
  HEAP32[H_BASE + 3872 >> 2] = i5;
  HEAP8[H_BASE + 3840 | 0] = 1;
  i4 = i5;
 }
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 >> 2] = i5;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i5 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore28CustomFilterValidatedProgram18setCompiledProgramEN3WTF10PassRefPtrINS_27CustomFilterCompiledProgramEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 + 36 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore27CustomFilterCompiledProgramD1Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  return;
 } else {
  HEAP32[i2 >> 2] = i3;
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
function __ZNK7WebCore28CustomFilterValidatedProgram20validatedProgramInfoEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore23CustomFilterProgramInfoC1ERKN3WTF6StringES4_NS_23CustomFilterProgramTypeERKNS_30CustomFilterProgramMixSettingsENS_20CustomFilterMeshTypeE(i1, i2 + 28 | 0, i2 + 32 | 0, HEAP32[i2 + 12 >> 2] | 0, i2 + 16 | 0, HEAP32[i2 + 24 >> 2] | 0);
 return;
}
function __ZN7WebCore28CustomFilterValidatedProgram15compiledProgramEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 36 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore28CustomFilterValidatedProgram17needsInputTextureEv(i1) {
 i1 = i1 | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) == 1) {
  return (HEAP32[i1 + 20 >> 2] | 0) >>> 0 > 1 >>> 0 | 0;
 } else {
  return 0;
 }
 return 0;
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
 FUNCTION_TABLE_vi[i1 & 3](i2 | 0);
}
function b2(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(2);
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
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore28CustomFilterValidatedProgramD2Ev,b0];
  var FUNCTION_TABLE_ii = [b1,b1];
  var FUNCTION_TABLE_viii = [b2,b2,__ZN7WebCore28CustomFilterValidatedProgramC2EPNS_25CustomFilterGlobalContextERKNS_23CustomFilterProgramInfoE,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore28CustomFilterValidatedProgram19blendFunctionStringENS_9BlendModeE","_strlen","__ZN7WebCore28CustomFilterValidatedProgram25defaultVertexShaderStringEv","__ZN3WTF13StringBuilder6appendERKNS_6StringE","__ZNK7WebCore28CustomFilterValidatedProgram17needsInputTextureEv","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_10ShDataTypeEENS_24KeyValuePairKeyExtractorIS4_EENS_10StringHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E6rehashEiPS4_","__ZN7WebCore28CustomFilterValidatedProgramD2Ev","__ZN7WebCore28CustomFilterValidatedProgram22rewriteMixVertexShaderERKN3WTF6VectorINS_17ANGLEShaderSymbolELj0ENS1_15CrashOnOverflowEEE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_10ShDataTypeEENS_24KeyValuePairKeyExtractorIS4_EENS_10StringHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_17HashMapTranslatorISD_S7_EES1_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_","_memset","__ZN7WebCore28CustomFilterValidatedProgram23compositeFunctionStringENS_17CompositeOperatorE","_memcpy","__ZN7WebCore28CustomFilterValidatedProgram24rewriteMixFragmentShaderEv","__ZN7WebCore28CustomFilterValidatedProgram15compiledProgramEv","__ZN7WebCore28CustomFilterValidatedProgram27defaultFragmentShaderStringEv","__ZN7WebCore28CustomFilterValidatedProgramC2EPNS_25CustomFilterGlobalContextERKNS_23CustomFilterProgramInfoE","__ZN3WTF7HashMapINS_6StringE10ShDataTypeNS_10StringHashENS_10HashTraitsIS1_EENS4_IS2_EEE4findERKS1_","__ZN7WebCore28CustomFilterValidatedProgram18setCompiledProgramEN3WTF10PassRefPtrINS_27CustomFilterCompiledProgramEEE","__ZNK7WebCore28CustomFilterValidatedProgram20validatedProgramInfoEv"]

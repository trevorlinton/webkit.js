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
H_BASE = parentModule["_malloc"](3824 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 3824;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore12IconDatabaseC1Ev;
var __ZN7WebCore12IconDatabaseD1Ev;
/* memory initializer */ allocate([68,69,76,69,84,69,32,70,82,79,77,32,80,97,103,101,85,82,76,32,87,72,69,82,69,32,114,111,119,105,100,32,61,32,40,63,41,59,0,0,83,69,76,69,67,84,32,114,111,119,105,100,44,32,117,114,108,32,70,82,79,77,32,80,97,103,101,85,82,76,59,0,83,69,76,69,67,84,32,80,97,103,101,85,82,76,46,117,114,108,44,32,73,99,111,110,73,110,102,111,46,117,114,108,44,32,73,99,111,110,73,110,102,111,46,115,116,97,109,112,32,70,82,79,77,32,80,97,103,101,85,82,76,32,73,78,78,69,82,32,74,79,73,78,32,73,99,111,110,73,110,102,111,32,79,78,32,80,97,103,101,85,82,76,46,105,99,111,110,73,68,61,73,99,111,110,73,110,102,111,46,105,99,111,110,73,68,59,0,0,0,0,111,107,0,0,0,0,0,0,80,82,65,71,77,65,32,105,110,116,101,103,114,105,116,121,95,99,104,101,99,107,59,0,83,69,76,69,67,84,32,118,97,108,117,101,32,70,82,79,77,32,73,99,111,110,68,97,116,97,98,97,115,101,73,110,102,111,32,87,72,69,82,69,32,107,101,121,32,61,32,39,86,101,114,115,105,111,110,39,59,0,0,0,0,0,0,0,73,99,111,110,68,97,116,97,98,97,115,101,73,110,102,111,0,0,0,0,0,0,0,0,80,82,65,71,77,65,32,99,97,99,104,101,95,115,105,122,101,32,61,32,50,48,48,59,0,0,0,0,0,0,0,0,80,97,103,101,85,82,76,0,73,99,111,110,68,97,116,97,0,0,0,0,0,0,0,0,73,99,111,110,73,110,102,111,0,0,0,0,0,0,0,0,41,59,0,0,0,0,0,0,73,78,83,69,82,84,32,73,78,84,79,32,73,99,111,110,68,97,116,97,98,97,115,101,73,110,102,111,32,86,65,76,85,69,83,32,40,39,86,101,114,115,105,111,110,39,44,32,0,0,0,0,0,0,0,0,67,82,69,65,84,69,32,84,65,66,76,69,32,73,99,111,110,68,97,116,97,98,97,115,101,73,110,102,111,32,40,107,101,121,32,84,69,88,84,32,78,79,84,32,78,85,76,76,32,79,78,32,67,79,78,70,76,73,67,84,32,70,65,73,76,32,85,78,73,81,85,69,32,79,78,32,67,79,78,70,76,73,67,84,32,82,69,80,76,65,67,69,44,118,97,108,117,101,32,84,69,88,84,32,78,79,84,32,78,85,76,76,32,79,78,32,67,79,78,70,76,73,67,84,32,70,65,73,76,41,59,0,0,0,0,0,67,82,69,65,84,69,32,73,78,68,69,88,32,73,99,111,110,68,97,116,97,73,110,100,101,120,32,79,78,32,73,99,111,110,68,97,116,97,32,40,105,99,111,110,73,68,41,59,0,0,0,0,0,0,0,0,67,82,69,65,84,69,32,84,65,66,76,69,32,73,99,111,110,68,97,116,97,32,40,105,99,111,110,73,68,32,73,78,84,69,71,69,82,32,80,82,73,77,65,82,89,32,75,69,89,32,65,85,84,79,73,78,67,82,69,77,69,78,84,32,85,78,73,81,85,69,32,79,78,32,67,79,78,70,76,73,67,84,32,82,69,80,76,65,67,69,44,32,100,97,116,97,32,66,76,79,66,41,59,0,67,82,69,65,84,69,32,73,78,68,69,88,32,73,99,111,110,73,110,102,111,73,110,100,101,120,32,79,78,32,73,99,111,110,73,110,102,111,32,40,117,114,108,44,32,105,99,111,110,73,68,41,59,0,0,0,67,82,69,65,84,69,32,84,65,66,76,69,32,73,99,111,110,73,110,102,111,32,40,105,99,111,110,73,68,32,73,78,84,69,71,69,82,32,80,82,73,77,65,82,89,32,75,69,89,32,65,85,84,79,73,78,67,82,69,77,69,78,84,32,85,78,73,81,85,69,32,79,78,32,67,79,78,70,76,73,67,84,32,82,69,80,76,65,67,69,44,32,117,114,108,32,84,69,88,84,32,78,79,84,32,78,85,76,76,32,79,78,32,67,79,78,70,76,73,67,84,32,70,65,73,76,32,85,78,73,81,85,69,32,79,78,32,67,79,78,70,76,73,67,84,32,70,65,73,76,44,32,115,116,97,109,112,32,73,78,84,69,71,69,82,41,59,0,45,106,111,117,114,110,97,108,0,0,0,0,0,0,0,0,67,82,69,65,84,69,32,73,78,68,69,88,32,80,97,103,101,85,82,76,73,110,100,101,120,32,79,78,32,80,97,103,101,85,82,76,32,40,117,114,108,41,59,0,0,0,0,0,67,82,69,65,84,69,32,84,65,66,76,69,32,80,97,103,101,85,82,76,32,40,117,114,108,32,84,69,88,84,32,78,79,84,32,78,85,76,76,32,79,78,32,67,79,78,70,76,73,67,84,32,70,65,73,76,32,85,78,73,81,85,69,32,79,78,32,67,79,78,70,76,73,67,84,32,82,69,80,76,65,67,69,44,105,99,111,110,73,68,32,73,78,84,69,71,69,82,32,78,79,84,32,78,85,76,76,32,79,78,32,67,79,78,70,76,73,67,84,32,70,65,73,76,41,59,0,0,73,78,83,69,82,84,32,73,78,84,79,32,73,99,111,110,68,97,116,97,98,97,115,101,73,110,102,111,32,40,107,101,121,44,32,118,97,108,117,101,41,32,86,65,76,85,69,83,32,40,39,69,120,99,108,117,100,101,100,70,114,111,109,66,97,99,107,117,112,39,44,32,49,41,0,0,0,0,0,0,83,69,76,69,67,84,32,118,97,108,117,101,32,70,82,79,77,32,73,99,111,110,68,97,116,97,98,97,115,101,73,110,102,111,32,87,72,69,82,69,32,107,101,121,32,61,32,39,69,120,99,108,117,100,101,100,70,114,111,109,66,97,99,107,117,112,39,59,0,0,0,0,73,78,83,69,82,84,32,73,78,84,79,32,73,99,111,110,73,110,102,111,32,40,117,114,108,44,115,116,97,109,112,41,32,86,65,76,85,69,83,32,40,63,44,32,63,41,59,0,85,80,68,65,84,69,32,73,99,111,110,68,97,116,97,32,83,69,84,32,100,97,116,97,32,61,32,63,32,87,72,69,82,69,32,105,99,111,110,73,68,32,61,32,63,59,0,0,85,80,68,65,84,69,32,73,99,111,110,73,110,102,111,32,83,69,84,32,115,116,97,109,112,32,61,32,63,44,32,117,114,108,32,61,32,63,32,87,72,69,82,69,32,105,99,111,110,73,68,32,61,32,63,59,0,0,0,0,0,0,0,0,68,69,76,69,84,69,32,70,82,79,77,32,73,99,111,110,68,97,116,97,32,87,72,69,82,69,32,73,99,111,110,68,97,116,97,46,105,99,111,110,73,68,32,61,32,40,63,41,59,0,0,0,0,0,0,0,68,69,76,69,84,69,32,70,82,79,77,32,73,99,111,110,73,110,102,111,32,87,72,69,82,69,32,73,99,111,110,73,110,102,111,46,105,99,111,110,73,68,32,61,32,40,63,41,59,0,0,0,0,0,0,0,68,69,76,69,84,69,32,70,82,79,77,32,80,97,103,101,85,82,76,32,87,72,69,82,69,32,80,97,103,101,85,82,76,46,105,99,111,110,73,68,32,61,32,40,63,41,59,0,87,101,98,112,97,103,101,73,99,111,110,115,46,100,98,0,83,69,76,69,67,84,32,73,99,111,110,68,97,116,97,46,100,97,116,97,32,70,82,79,77,32,73,99,111,110,68,97,116,97,32,87,72,69,82,69,32,73,99,111,110,68,97,116,97,46,105,99,111,110,73,68,32,73,78,32,40,83,69,76,69,67,84,32,105,99,111,110,73,68,32,70,82,79,77,32,73,99,111,110,73,110,102,111,32,87,72,69,82,69,32,73,99,111,110,73,110,102,111,46,117,114,108,32,61,32,40,63,41,41,59,0,0,0,0,0,73,78,83,69,82,84,32,73,78,84,79,32,73,99,111,110,68,97,116,97,32,40,105,99,111,110,73,68,44,32,100,97,116,97,41,32,86,65,76,85,69,83,32,40,63,44,32,63,41,59,0,0,0,0,0,0,73,78,83,69,82,84,32,73,78,84,79,32,73,99,111,110,73,110,102,111,32,40,117,114,108,44,32,115,116,97,109,112,41,32,86,65,76,85,69,83,32,40,63,44,32,48,41,59,0,0,0,0,0,0,0,0,83,69,76,69,67,84,32,73,99,111,110,73,110,102,111,46,105,99,111,110,73,68,32,70,82,79,77,32,73,99,111,110,73,110,102,111,32,87,72,69,82,69,32,73,99,111,110,73,110,102,111,46,117,114,108,32,61,32,40,63,41,59,0,0,68,69,76,69,84,69,32,70,82,79,77,32,80,97,103,101,85,82,76,32,87,72,69,82,69,32,117,114,108,32,61,32,40,63,41,59,0,0,0,0,73,78,83,69,82,84,32,73,78,84,79,32,80,97,103,101,85,82,76,32,40,117,114,108,44,32,105,99,111,110,73,68,41,32,86,65,76,85,69,83,32,40,40,63,41,44,32,63,41,59,0,0,0,0,0,0,68,69,76,69,84,69,32,70,82,79,77,32,80,97,103,101,85,82,76,32,87,72,69,82,69,32,105,99,111,110,73,68,32,78,79,84,32,73,78,32,40,83,69,76,69,67,84,32,105,99,111,110,73,68,32,70,82,79,77,32,73,99,111,110,73,110,102,111,41,59,0,0,83,69,76,69,67,84,32,117,114,108,32,70,82,79,77,32,80,97,103,101,85,82,76,32,87,72,69,82,69,32,80,97,103,101,85,82,76,46,105,99,111,110,73,68,32,78,79,84,32,73,78,32,40,83,69,76,69,67,84,32,105,99,111,110,73,68,32,70,82,79,77,32,73,99,111,110,73,110,102,111,41,32,76,73,77,73,84,32,49,59,0,0,0,0,0,0,68,69,76,69,84,69,32,70,82,79,77,32,73,99,111,110,73,110,102,111,32,87,72,69,82,69,32,105,99,111,110,73,68,32,78,79,84,32,73,78,32,40,83,69,76,69,67,84,32,105,99,111,110,73,68,32,70,82,79,77,32,80,97,103,101,85,82,76,41,59,0,0,68,69,76,69,84,69,32,70,82,79,77,32,73,99,111,110,68,97,116,97,32,87,72,69,82,69,32,105,99,111,110,73,68,32,78,79,84,32,73,78,32,40,83,69,76,69,67,84,32,105,99,111,110,73,68,32,70,82,79,77,32,80,97,103,101,85,82,76,41,59,0,0,117,114,108,73,99,111,110,0,87,101,98,67,111,114,101,58,32,73,99,111,110,68,97,116,97,98,97,115,101,0,0,0,77,77,0,42,0,0,3,50,128,0,32,80,56,36,22,13,7,132,66,97,80,184,100,8,24,13,10,11,132,162,161,226,8,94,57,40,175,72,36,211,83,154,55,29,24,14,138,75,209,56,176,124,130,7,3,130,162,232,108,44,3,47,2,130,65,161,226,248,200,132,104,109,28,17,10,183,250,145,110,209,127,175,154,78,135,251,25,176,234,127,164,149,140,183,249,169,10,169,127,140,136,102,150,212,202,105,47,0,129,101,176,41,144,124,186,43,33,30,92,230,180,189,49,182,231,122,191,221,111,55,211,253,216,242,182,219,237,172,247,3,197,254,119,83,182,31,230,36,139,29,254,38,32,158,28,224,128,101,122,24,2,1,130,197,160,192,241,137,186,35,48,173,31,231,229,91,109,254,231,120,62,31,238,151,139,231,55,157,207,231,146,139,135,11,252,160,142,104,63,198,39,166,51,252,54,91,89,63,193,2,99,59,116,0,3,7,11,97,0,32,96,201,8,0,28,37,159,224,18,138,213,254,107,79,53,159,237,215,75,217,254,138,89,184,31,236,86,211,193,254,99,77,242,131,198,182,27,252,52,104,97,63,193,166,37,235,252,6,88,92,63,192,3,228,195,252,4,15,26,111,224,224,32,249,97,122,2,40,43,188,70,37,243,252,102,61,153,39,249,126,107,29,199,249,44,94,28,135,248,192,77,154,231,248,218,81,178,193,104,242,100,31,225,80,237,10,4,35,121,138,127,130,163,57,128,127,128,194,177,94,247,4,47,178,16,2,134,99,201,204,7,191,135,248,74,56,175,193,136,248,102,31,225,217,8,212,143,37,91,74,73,151,135,57,254,37,18,16,104,170,74,47,66,41,18,105,159,225,193,0,103,31,225,88,237,0,131,35,73,130,127,129,33,224,252,115,33,0,80,125,43,132,3,131,194,27,144,6,105,254,35,145,174,80,154,73,50,194,137,48,233,10,196,217,196,127,148,166,81,222,127,157,7,137,246,127,145,133,202,136,37,17,238,80,124,67,53,33,96,241,13,130,98,57,7,44,32,224,128,114,52,23,161,128,238,240,137,36,116,26,44,147,179,120,204,82,157,106,105,86,187,13,133,105,230,127,158,39,185,253,80,84,71,249,204,120,159,135,249,152,112,185,194,145,44,109,31,225,225,0,191,2,193,245,24,132,1,225,72,140,66,7,67,201,118,127,139,4,228,222,53,149,171,176,240,92,85,35,249,126,126,159,228,12,167,85,71,199,249,230,207,31,231,147,53,82,84,99,25,70,115,31,226,97,8,240,130,225,128,146,249,32,192,40,24,10,5,161,162,248,110,219,71,73,254,62,23,182,97,19,26,41,38,169,254,127,146,112,105,254,76,47,85,1,241,84,212,53,73,74,105,89,131,129,88,118,159,226,32,214,76,155,160,72,30,11,183,72,88,38,17,6,66,232,164,64,23,39,57,0,96,45,164,195,44,127,148,86,228,225,119,31,229,185,215,102,30,7,179,60,99,29,53,73,14,99,45,162,241,18,96,28,224,224,82,27,139,172,56,14,7,3,96,40,28,14,135,0,240,102,39,17,162,193,2,90,28,228,33,131,31,19,134,250,210,85,29,214,97,188,119,211,230,145,203,76,144,166,37,184,47,144,197,169,206,18,7,2,145,27,159,104,0,22,118,13,161,0,8,6,3,129,160,32,26,13,6,128,48,36,18,137,32,152,74,31,15,33,160,158,54,22,194,136,230,72,155,131,49,28,85,30,67,89,26,86,30,66,240,250,77,27,155,8,220,91,2,161,48,126,60,238,91,166,221,184,109,91,98,183,205,243,156,234,4,128,128,0,0,14,1,0,0,3,0,0,0,1,0,16,0,0,1,1,0,3,0,0,0,1,0,16,0,0,1,2,0,3,0,0,0,4,0,0,3,224,1,3,0,3,0,0,0,1,0,5,0,0,1,6,0,3,0,0,0,1,0,2,0,0,1,17,0,4,0,0,0,1,0,0,0,8,1,21,0,3,0,0,0,1,0,4,0,0,1,22,0,4,0,0,0,1,0,0,2,0,1,23,0,4,0,0,0,1,0,0,3,41,1,26,0,5,0,0,0,1,0,0,3,232,1,27,0,5,0,0,0,1,0,0,3,240,1,28,0,3,0,0,0,1,0,1,0,0,1,40,0,3,0,0,0,1,0,2,0,0,1,82,0,3,0,0,0,1,0,1,0,0,0,0,0,0,0,8,0,8,0,8,0,8,0,10,252,128,0,0,39,16,0,10,252,128,0,0,39,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_did(index,a1,a2) {
  try {
    return Module["dynCall_did"](index,a1,a2);
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
  var __ZN7WebCore11SQLResultOkE=env.__ZN7WebCore11SQLResultOkE|0;
  var __ZN7WebCore13SQLResultDoneE=env.__ZN7WebCore13SQLResultDoneE|0;
  var __ZN7WebCore12SQLResultRowE=env.__ZN7WebCore12SQLResultRowE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore12IconDatabaseE=(H_BASE+3632)|0;
  var __ZTVN7WebCore17FinishedURLImportE=(H_BASE+3600)|0;
  var __ZTVN7WebCore23RemovedAllIconsWorkItemE=(H_BASE+3568)|0;
  var __ZTVN7WebCore5TimerINS_12IconDatabaseEEE=(H_BASE+3424)|0;
  var __ZTVN7WebCore25DefaultIconDatabaseClientE=(H_BASE+3520)|0;
  var __ZTVN7WebCore33ImportedIconURLForPageURLWorkItemE=(H_BASE+3488)|0;
  var __ZTVN7WebCore34ImportedIconDataForPageURLWorkItemE=(H_BASE+3456)|0;
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
  var invoke_did=env.invoke_did;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore12IconDatabase16performURLImportEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 32 | 0;
 i7 = i2 + 40 | 0;
 i8 = i2 + 48 | 0;
 i9 = i2 + 64 | 0;
 i10 = i2 + 72 | 0;
 i11 = i2 + 88 | 0;
 i12 = i11;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = i13;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 __ZN3WTF6StringC1EPKc(i3, H_BASE + 80 | 0);
 __ZN7WebCore15SQLiteStatementC1ERNS_14SQLiteDatabaseERKN3WTF6StringE(i4, i1 + 492 | 0, i3);
 i20 = __ZN7WebCore15SQLiteStatement7prepareEv(i4) | 0;
 L1 : do {
  if ((i20 | 0) == (HEAP32[__ZN7WebCore11SQLResultOkE >> 2] | 0)) {
   i21 = __ZN7WebCore15SQLiteStatement4stepEv(i4) | 0;
   i22 = HEAP32[__ZN7WebCore12SQLResultRowE >> 2] | 0;
   i23 = i1 + 188 | 0;
   i24 = (i23 | 0) == 0;
   i25 = i1 + 232 | 0;
   i26 = i1 + 240 | 0;
   i27 = i25 | 0;
   i28 = i5 | 0;
   i29 = i25 | 0;
   i30 = i8 + 8 | 0;
   i31 = i8 | 0;
   i32 = i1 + 336 | 0;
   i33 = (i32 | 0) == 0;
   i34 = i1 + 360 | 0;
   i35 = i34 | 0;
   i36 = i1;
   i37 = i6 | 0;
   i38 = i1 + 368 | 0;
   i39 = i1 + 488 | 0;
   i40 = i9 | 0;
   i41 = i21;
   while (1) {
    if ((i41 | 0) != (i22 | 0)) {
     break;
    }
    __ZN7WebCore15SQLiteStatement13getColumnTextEi(i5, i4, 0);
    __ZN7WebCore15SQLiteStatement13getColumnTextEi(i6, i4, 1);
    if (!i24) {
     __ZN3WTF5Mutex4lockEv(i23);
    }
    i21 = HEAP32[i26 >> 2] | 0;
    i42 = HEAP32[i27 >> 2] | 0;
    i43 = HEAP32[i28 >> 2] | 0;
    i44 = HEAP32[i43 + 16 >> 2] | 0;
    if (i44 >>> 0 > 127 >>> 0) {
     i45 = i44 >>> 7;
    } else {
     i45 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i43) | 0;
    }
    L13 : do {
     if ((i42 | 0) == 0) {
      i46 = 0;
     } else {
      i43 = (i45 >>> 23) + ~i45 | 0;
      i44 = i43 << 12 ^ i43;
      i43 = i44 >>> 7 ^ i44;
      i44 = i43 << 2 ^ i43;
      i43 = i44 >>> 20 ^ i44 | 1;
      i44 = i45;
      i47 = 0;
      while (1) {
       i48 = i44 & i21;
       i49 = i42 + (i48 << 3) | 0;
       i50 = HEAP32[i49 >> 2] | 0;
       i51 = i50;
       if ((i51 | 0) == 0) {
        i46 = 0;
        break L13;
       } else if ((i51 | 0) != (-1 | 0)) {
        if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i50, HEAP32[i28 >> 2] | 0) | 0) {
         break;
        }
       }
       i50 = (i47 | 0) == 0 ? i43 : i47;
       i44 = i50 + i48 | 0;
       i47 = i50;
      }
      if ((i49 | 0) == 0) {
       i46 = 0;
       break;
      }
      i46 = HEAP32[i42 + (i48 << 3) + 4 >> 2] | 0;
     }
    } while (0);
    HEAP32[i7 >> 2] = i46;
    do {
     if ((i46 | 0) == 0 & (HEAP32[H_BASE + 3816 >> 2] | 0) != 0) {
      if (!(__ZN7WebCore19documentCanHaveIconERKN3WTF6StringE(i5) | 0)) {
       break;
      }
      i42 = __ZN3WTF10fastMallocEj(12) | 0;
      __ZN7WebCore13PageURLRecordC1ERKN3WTF6StringE(i42, i5);
      HEAP32[i7 >> 2] = i42;
      __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore13PageURLRecordEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS1_RS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i8, i29, i5, i7);
      i42 = HEAP32[i7 >> 2] | 0;
      if ((HEAP8[i30] & 1) != 0) {
       i52 = i42;
       i53 = 20;
       break;
      }
      HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] = i42;
      i52 = i42;
      i53 = 20;
     } else {
      i52 = i46;
      i53 = 20;
     }
    } while (0);
    do {
     if ((i53 | 0) == 20) {
      i53 = 0;
      if ((i52 | 0) == 0) {
       break;
      }
      i42 = i52 + 4 | 0;
      i21 = HEAP32[i42 >> 2] | 0;
      do {
       if ((i21 | 0) == 0) {
        i53 = 27;
       } else {
        i47 = HEAP32[i21 + 4 >> 2] | 0;
        if ((i47 | 0) == 0) {
         if (__ZN3WTF5equalEPKNS_10StringImplES2_(i47, HEAP32[i37 >> 2] | 0) | 0) {
          i54 = i21;
          break;
         } else {
          i53 = 27;
          break;
         }
        }
        i44 = i47 | 0;
        HEAP32[i44 >> 2] = (HEAP32[i44 >> 2] | 0) + 2;
        i44 = __ZN3WTF5equalEPKNS_10StringImplES2_(i47, HEAP32[i37 >> 2] | 0) | 0;
        i43 = i47 | 0;
        i50 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
        if ((i50 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i47);
         if (i44) {
          i54 = i21;
          break;
         } else {
          i53 = 27;
          break;
         }
        } else {
         HEAP32[i43 >> 2] = i50;
         if (i44) {
          i54 = i21;
          break;
         } else {
          i53 = 27;
          break;
         }
        }
       }
      } while (0);
      if ((i53 | 0) == 27) {
       i53 = 0;
       __ZN7WebCore12IconDatabase21getOrCreateIconRecordERKN3WTF6StringE(i9, i1, i6);
       __ZN7WebCore13PageURLRecord13setIconRecordEN3WTF10PassRefPtrINS_10IconRecordEEE(i52, i9);
       i21 = HEAP32[i40 >> 2] | 0;
       do {
        if ((i21 | 0) != 0) {
         i44 = i21 | 0;
         i50 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
         if ((i50 | 0) == 0) {
          __ZN7WebCore10IconRecordD1Ev(i21);
          __ZN3WTF8fastFreeEPv(i21);
          break;
         } else {
          HEAP32[i44 >> 2] = i50;
          break;
         }
        }
       } while (0);
       i54 = HEAP32[i42 >> 2] | 0;
      }
      HEAP32[i54 + 8 >> 2] = __ZN7WebCore15SQLiteStatement12getColumnIntEi(i4, 2) | 0;
     }
    } while (0);
    if (!i24) {
     __ZN3WTF5Mutex6unlockEv(i23);
    }
    if (!i33) {
     __ZN3WTF5Mutex4lockEv(i32);
    }
    i21 = HEAP32[i35 >> 2] | 0;
    L54 : do {
     if ((i21 | 0) != 0) {
      i50 = HEAP32[i38 >> 2] | 0;
      i44 = HEAP32[i28 >> 2] | 0;
      i43 = HEAP32[i44 + 16 >> 2] | 0;
      if (i43 >>> 0 > 127 >>> 0) {
       i55 = i43 >>> 7;
      } else {
       i55 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i44) | 0;
      }
      i44 = (i55 >>> 23) + ~i55 | 0;
      i43 = i44 << 12 ^ i44;
      i44 = i43 >>> 7 ^ i43;
      i43 = i44 << 2 ^ i44;
      i44 = i43 >>> 20 ^ i43 | 1;
      i43 = i55;
      i47 = 0;
      while (1) {
       i51 = i43 & i50;
       i56 = i21 + (i51 << 2) | 0;
       i57 = HEAP32[i56 >> 2] | 0;
       i58 = i57;
       if ((i58 | 0) == 0) {
        break L54;
       } else if ((i58 | 0) != (-1 | 0)) {
        if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i57, HEAP32[i28 >> 2] | 0) | 0) {
         break;
        }
       }
       i57 = (i47 | 0) == 0 ? i44 : i47;
       i43 = i57 + i51 | 0;
       i47 = i57;
      }
      if ((i56 | 0) == 0) {
       break;
      }
      i47 = __ZN3WTF10fastMallocEj(12) | 0;
      HEAP32[i47 + 4 >> 2] = HEAP32[i39 >> 2];
      HEAP32[i47 >> 2] = H_BASE + 3496;
      i43 = __Znwj(4) | 0;
      __ZNKR3WTF6String12isolatedCopyEv(i43, i5);
      HEAP32[i47 + 8 >> 2] = i43;
      __ZN3WTF16callOnMainThreadEPFvPvES0_(F_BASE_vi + 44 | 0, i47);
      __ZN3WTF7HashSetINS_6StringENS_10StringHashENS_10HashTraitsIS1_EEE6removeERKS1_(i34, i5) | 0;
     }
    } while (0);
    if (!i33) {
     __ZN3WTF5Mutex6unlockEv(i32);
    }
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i36 >> 2] | 0) + 84 >> 2] & 31](i1) | 0) {
     i59 = 1;
     i60 = i22;
    } else {
     i59 = 0;
     i60 = __ZN7WebCore15SQLiteStatement4stepEv(i4) | 0;
    }
    i21 = HEAP32[i37 >> 2] | 0;
    do {
     if ((i21 | 0) != 0) {
      i47 = i21 | 0;
      i43 = (HEAP32[i47 >> 2] | 0) - 2 | 0;
      if ((i43 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i21);
       break;
      } else {
       HEAP32[i47 >> 2] = i43;
       break;
      }
     }
    } while (0);
    i21 = HEAP32[i28 >> 2] | 0;
    do {
     if ((i21 | 0) != 0) {
      i43 = i21 | 0;
      i47 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
      if ((i47 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i21);
       break;
      } else {
       HEAP32[i43 >> 2] = i47;
       break;
      }
     }
    } while (0);
    if ((i59 | 0) == 0) {
     i41 = i60;
    } else {
     break L1;
    }
   }
   i41 = i10 | 0;
   HEAP32[i41 >> 2] = 0;
   i28 = i10 + 4 | 0;
   HEAP32[i28 >> 2] = 0;
   i37 = i10 + 8 | 0;
   HEAP32[i37 >> 2] = 0;
   if (!i33) {
    __ZN3WTF5Mutex4lockEv(i32);
   }
   i22 = HEAP32[i35 >> 2] | 0;
   i38 = i1 + 364 | 0;
   i40 = HEAP32[i38 >> 2] | 0;
   i31 = i22 + (i40 << 2) | 0;
   L90 : do {
    if ((HEAP32[i1 + 372 >> 2] | 0) == 0) {
     i61 = i31;
    } else {
     if ((i40 | 0) == 0) {
      i61 = i22;
      break;
     } else {
      i62 = i22;
     }
     while (1) {
      i30 = HEAP32[i62 >> 2] | 0;
      if (!((i30 | 0) == (-1 | 0) | (i30 | 0) == 0)) {
       i61 = i62;
       break L90;
      }
      i30 = i62 + 4 | 0;
      if ((i30 | 0) == (i31 | 0)) {
       i61 = i31;
       break;
      } else {
       i62 = i30;
      }
     }
    }
   } while (0);
   i22 = i31;
   i40 = 0;
   i30 = i22;
   HEAP32[i11 >> 2] = i61 | i40;
   HEAP32[i11 + 4 >> 2] = i30;
   HEAP32[i13 >> 2] = i40 | i22;
   HEAP32[i13 + 4 >> 2] = i30;
   __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE11appendRangeINS_29HashTableConstIteratorAdapterINS_9HashTableIS1_S1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EESA_EES1_EEEEvT_SD_(i10, i12, i14);
   i30 = HEAP32[i35 >> 2] | 0;
   if ((i30 | 0) != 0) {
    i22 = HEAP32[i38 >> 2] | 0;
    if ((i22 | 0) > 0) {
     i40 = 0;
     while (1) {
      i29 = HEAP32[i30 + (i40 << 2) >> 2] | 0;
      i21 = i29;
      do {
       if (!((i21 | 0) == (-1 | 0) | (i21 | 0) == 0)) {
        i47 = i29 | 0;
        i43 = (HEAP32[i47 >> 2] | 0) - 2 | 0;
        if ((i43 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i29);
         break;
        } else {
         HEAP32[i47 >> 2] = i43;
         break;
        }
       }
      } while (0);
      i40 = i40 + 1 | 0;
      if ((i40 | 0) >= (i22 | 0)) {
       break;
      }
     }
    }
    __ZN3WTF8fastFreeEPv(i30);
    _memset(i34 | 0, 0, 16) | 0;
   }
   HEAP8[i1 + 182 | 0] = 1;
   if (!i33) {
    __ZN3WTF5Mutex6unlockEv(i32);
   }
   if (!i24) {
    __ZN3WTF5Mutex4lockEv(i23);
   }
   __ZN7WebCore12IconDatabase40performPendingRetainAndReleaseOperationsEv(i1);
   i22 = HEAP32[i37 >> 2] | 0;
   L115 : do {
    if ((i22 | 0) == 0) {
     i63 = 0;
     i64 = 0;
     i65 = 0;
    } else {
     i40 = i1 + 252 | 0;
     i38 = i1 + 212 | 0;
     i35 = i16 | 0;
     i31 = i1 + 380 | 0;
     i29 = i1 + 400 | 0;
     i21 = i1 + 272 | 0;
     i43 = (i21 | 0) == 0;
     i47 = i1 + 316 | 0;
     i44 = i17 | 0;
     i50 = i18 + 8 | 0;
     i42 = i18 | 0;
     i57 = i1 + 260 | 0;
     i51 = 0;
     i58 = 0;
     i66 = 0;
     i67 = 0;
     i68 = i22;
     L117 : while (1) {
      i69 = HEAP32[i40 >> 2] | 0;
      L119 : do {
       if ((i69 | 0) == 0) {
        i53 = 89;
       } else {
        i70 = HEAP32[i41 >> 2] | 0;
        i71 = HEAP32[i57 >> 2] | 0;
        i72 = i70 + (i67 << 2) | 0;
        i73 = HEAP32[i72 >> 2] | 0;
        i74 = HEAP32[i73 + 16 >> 2] | 0;
        if (i74 >>> 0 > 127 >>> 0) {
         i75 = i74 >>> 7;
        } else {
         i75 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i73) | 0;
        }
        i73 = (i75 >>> 23) + ~i75 | 0;
        i74 = i73 << 12 ^ i73;
        i73 = i74 >>> 7 ^ i74;
        i74 = i73 << 2 ^ i73;
        i73 = i74 >>> 20 ^ i74 | 1;
        i74 = i75;
        i76 = 0;
        while (1) {
         i77 = i74 & i71;
         i78 = i69 + (i77 << 2) | 0;
         i79 = HEAP32[i78 >> 2] | 0;
         i80 = i79;
         if ((i80 | 0) == 0) {
          i53 = 89;
          break L119;
         } else if ((i80 | 0) != (-1 | 0)) {
          if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i79, HEAP32[i72 >> 2] | 0) | 0) {
           break;
          }
         }
         i79 = (i76 | 0) == 0 ? i73 : i76;
         i74 = i79 + i77 | 0;
         i76 = i79;
        }
        if ((i78 | 0) == 0) {
         i53 = 89;
         break;
        }
        if (i68 >>> 0 <= i67 >>> 0) {
         i53 = 132;
         break L117;
        }
        i76 = i70 + (i67 << 2) | 0;
        if ((i51 | 0) != (i58 | 0)) {
         i74 = HEAP32[i76 >> 2] | 0;
         HEAP32[i66 + (i51 << 2) >> 2] = i74;
         if ((i74 | 0) != 0) {
          i73 = i74 | 0;
          HEAP32[i73 >> 2] = (HEAP32[i73 >> 2] | 0) + 2;
         }
         i81 = i66;
         i82 = i58;
         i83 = i51 + 1 | 0;
         break;
        }
        i73 = i58 + 1 | 0;
        do {
         if (i66 >>> 0 > i76 >>> 0) {
          i53 = 139;
         } else {
          if ((i66 + (i58 << 2) | 0) >>> 0 <= i76 >>> 0) {
           i53 = 139;
           break;
          }
          i74 = i76 - i66 >> 2;
          i72 = i73 + (i58 >>> 2) | 0;
          i71 = i72 >>> 0 > 16 >>> 0 ? i72 : 16;
          i72 = i71 >>> 0 > i73 >>> 0 ? i71 : i73;
          do {
           if (i58 >>> 0 < i72 >>> 0) {
            if (i72 >>> 0 > 1073741823 >>> 0) {
             i53 = 146;
             break L117;
            }
            i71 = __ZN3WTF18fastMallocGoodSizeEj(i72 << 2) | 0;
            i79 = i71 >>> 2;
            i77 = __ZN3WTF10fastMallocEj(i71) | 0;
            i71 = i77;
            i80 = i66;
            _memcpy(i77 | 0, i80 | 0, i58 << 2) | 0;
            if ((i66 | 0) == 0) {
             i84 = i71;
             i85 = i79;
             break;
            }
            i77 = (i71 | 0) == (i66 | 0);
            __ZN3WTF8fastFreeEPv(i80);
            i84 = i77 ? 0 : i71;
            i85 = i77 ? 0 : i79;
           } else {
            i84 = i66;
            i85 = i58;
           }
          } while (0);
          i86 = i84 + (i74 << 2) | 0;
          i87 = i84;
          i88 = i85;
         }
        } while (0);
        do {
         if ((i53 | 0) == 139) {
          i53 = 0;
          i70 = i73 + (i58 >>> 2) | 0;
          i72 = i70 >>> 0 > 16 >>> 0 ? i70 : 16;
          i70 = i72 >>> 0 > i73 >>> 0 ? i72 : i73;
          if (i58 >>> 0 >= i70 >>> 0) {
           i86 = i76;
           i87 = i66;
           i88 = i58;
           break;
          }
          if (i70 >>> 0 > 1073741823 >>> 0) {
           i53 = 141;
           break L117;
          }
          i72 = __ZN3WTF18fastMallocGoodSizeEj(i70 << 2) | 0;
          i70 = i72 >>> 2;
          i79 = __ZN3WTF10fastMallocEj(i72) | 0;
          i72 = i79;
          i77 = i66;
          _memcpy(i79 | 0, i77 | 0, i58 << 2) | 0;
          if ((i66 | 0) == 0) {
           i86 = i76;
           i87 = i72;
           i88 = i70;
           break;
          }
          i79 = (i72 | 0) == (i66 | 0);
          __ZN3WTF8fastFreeEPv(i77);
          i86 = i76;
          i87 = i79 ? 0 : i72;
          i88 = i79 ? 0 : i70;
         }
        } while (0);
        i76 = HEAP32[i86 >> 2] | 0;
        HEAP32[i87 + (i58 << 2) >> 2] = i76;
        if ((i76 | 0) == 0) {
         i81 = i87;
         i82 = i88;
         i83 = i73;
         break;
        }
        i70 = i76 | 0;
        HEAP32[i70 >> 2] = (HEAP32[i70 >> 2] | 0) + 2;
        i81 = i87;
        i82 = i88;
        i83 = i73;
       }
      } while (0);
      L154 : do {
       if ((i53 | 0) == 89) {
        i53 = 0;
        if (i68 >>> 0 <= i67 >>> 0) {
         i53 = 90;
         break L117;
        }
        i69 = HEAP32[i41 >> 2] | 0;
        i70 = HEAP32[i26 >> 2] | 0;
        i76 = HEAP32[i27 >> 2] | 0;
        i79 = i69 + (i67 << 2) | 0;
        i72 = HEAP32[i79 >> 2] | 0;
        i77 = HEAP32[i72 + 16 >> 2] | 0;
        if (i77 >>> 0 > 127 >>> 0) {
         i89 = i77 >>> 7;
        } else {
         i89 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i72) | 0;
        }
        if ((i76 | 0) == 0) {
         i81 = i66;
         i82 = i58;
         i83 = i51;
         break;
        }
        i72 = (i89 >>> 23) + ~i89 | 0;
        i77 = i72 << 12 ^ i72;
        i72 = i77 >>> 7 ^ i77;
        i77 = i72 << 2 ^ i72;
        i72 = i77 >>> 20 ^ i77 | 1;
        i77 = i89;
        i71 = 0;
        while (1) {
         i90 = i77 & i70;
         i91 = i76 + (i90 << 3) | 0;
         i80 = HEAP32[i91 >> 2] | 0;
         i92 = i80;
         if ((i92 | 0) == 0) {
          i81 = i66;
          i82 = i58;
          i83 = i51;
          break L154;
         } else if ((i92 | 0) != (-1 | 0)) {
          if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i80, HEAP32[i79 >> 2] | 0) | 0) {
           break;
          }
         }
         i80 = (i71 | 0) == 0 ? i72 : i71;
         i77 = i80 + i90 | 0;
         i71 = i80;
        }
        if ((i91 | 0) == 0) {
         i81 = i66;
         i82 = i58;
         i83 = i51;
         break;
        }
        i71 = HEAP32[i76 + (i90 << 3) + 4 >> 2] | 0;
        if ((i71 | 0) == 0 | (HEAP32[H_BASE + 3816 >> 2] | 0) != 0) {
         i81 = i66;
         i82 = i58;
         i83 = i51;
         break;
        }
        i77 = i69 + (i67 << 2) | 0;
        __ZN3WTF7HashMapINS_6StringEPN7WebCore13PageURLRecordENS_10StringHashENS_10HashTraitsIS1_EENS6_IS4_EEE6removeERKS1_(i25, i77) | 0;
        i72 = HEAP32[i71 + 4 >> 2] | 0;
        HEAP32[i15 >> 2] = i72;
        do {
         if ((i72 | 0) != 0) {
          if ((HEAP32[i72 >> 2] | 0) != 1) {
           break;
          }
          i79 = HEAP32[i72 + 4 >> 2] | 0;
          HEAP32[i35 >> 2] = i79;
          if ((i79 | 0) != 0) {
           i70 = i79 | 0;
           HEAP32[i70 >> 2] = (HEAP32[i70 >> 2] | 0) + 2;
          }
          __ZN3WTF7HashMapINS_6StringEPN7WebCore10IconRecordENS_10StringHashENS_10HashTraitsIS1_EENS6_IS4_EEE6removeERKS1_(i38, i16) | 0;
          i70 = HEAP32[i35 >> 2] | 0;
          do {
           if ((i70 | 0) != 0) {
            i79 = i70 | 0;
            i73 = (HEAP32[i79 >> 2] | 0) - 2 | 0;
            if ((i73 | 0) == 0) {
             __ZN3WTF10StringImpl7destroyEPS0_(i70);
             break;
            } else {
             HEAP32[i79 >> 2] = i73;
             break;
            }
           }
          } while (0);
          if (i33) {
           __ZN3WTF7HashSetINS_6StringENS_10StringHashENS_10HashTraitsIS1_EEE6removeERKS1_(i31, i77) | 0;
           __ZN3WTF7HashSetIPN7WebCore10IconRecordENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i29, i15) | 0;
          } else {
           __ZN3WTF5Mutex4lockEv(i32);
           __ZN3WTF7HashSetINS_6StringENS_10StringHashENS_10HashTraitsIS1_EEE6removeERKS1_(i31, i77) | 0;
           __ZN3WTF7HashSetIPN7WebCore10IconRecordENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i29, i15) | 0;
           __ZN3WTF5Mutex6unlockEv(i32);
          }
          if (!i43) {
           __ZN3WTF5Mutex4lockEv(i21);
          }
          i70 = HEAP32[i15 >> 2] | 0;
          i74 = HEAP32[i70 + 4 >> 2] | 0;
          HEAP32[i44 >> 2] = i74;
          if ((i74 | 0) != 0) {
           i73 = i74 | 0;
           HEAP32[i73 >> 2] = (HEAP32[i73 >> 2] | 0) + 2;
          }
          __ZNK7WebCore10IconRecord8snapshotEb(i18, i70, 1);
          __ZN3WTF7HashMapINS_6StringEN7WebCore12IconSnapshotENS_10StringHashENS_10HashTraitsIS1_EENS5_IS3_EEE3setIS3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_NS_12KeyValuePairIS1_S3_EENS_24KeyValuePairKeyExtractorISD_EES4_NS8_18KeyValuePairTraitsES6_EEEEOS1_OT_(i19, i47, i17, i18);
          i70 = HEAP32[i50 >> 2] | 0;
          do {
           if ((i70 | 0) != 0) {
            i73 = i70 | 0;
            i74 = (HEAP32[i73 >> 2] | 0) - 1 | 0;
            if ((i74 | 0) == 0) {
             __ZN7WebCore12SharedBufferD1Ev(i70);
             __ZN3WTF8fastFreeEPv(i70);
             break;
            } else {
             HEAP32[i73 >> 2] = i74;
             break;
            }
           }
          } while (0);
          i70 = HEAP32[i42 >> 2] | 0;
          do {
           if ((i70 | 0) != 0) {
            i74 = i70 | 0;
            i73 = (HEAP32[i74 >> 2] | 0) - 2 | 0;
            if ((i73 | 0) == 0) {
             __ZN3WTF10StringImpl7destroyEPS0_(i70);
             break;
            } else {
             HEAP32[i74 >> 2] = i73;
             break;
            }
           }
          } while (0);
          i70 = HEAP32[i44 >> 2] | 0;
          do {
           if ((i70 | 0) != 0) {
            i73 = i70 | 0;
            i74 = (HEAP32[i73 >> 2] | 0) - 2 | 0;
            if ((i74 | 0) == 0) {
             __ZN3WTF10StringImpl7destroyEPS0_(i70);
             break;
            } else {
             HEAP32[i73 >> 2] = i74;
             break;
            }
           }
          } while (0);
          if (i43) {
           break;
          }
          __ZN3WTF5Mutex6unlockEv(i21);
         }
        } while (0);
        __ZN7WebCore13PageURLRecordD1Ev(i71);
        __ZN3WTF8fastFreeEPv(i71);
        i81 = i66;
        i82 = i58;
        i83 = i51;
       }
      } while (0);
      i77 = i67 + 1 | 0;
      i72 = HEAP32[i37 >> 2] | 0;
      if (i77 >>> 0 < i72 >>> 0) {
       i51 = i83;
       i58 = i82;
       i66 = i81;
       i67 = i77;
       i68 = i72;
      } else {
       i63 = i83;
       i64 = i81;
       i65 = i72;
       break L115;
      }
     }
     if ((i53 | 0) == 90) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     } else if ((i53 | 0) == 132) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     } else if ((i53 | 0) == 141) {
      _WTFCrash();
     } else if ((i53 | 0) == 146) {
      _WTFCrash();
     }
    }
   } while (0);
   if (i24) {
    i93 = 0;
   } else {
    __ZN3WTF5Mutex6unlockEv(i23);
    i93 = 0;
   }
   while (1) {
    if (i93 >>> 0 >= i63 >>> 0) {
     i53 = 157;
     break;
    }
    i32 = __ZN3WTF10fastMallocEj(12) | 0;
    HEAP32[i32 + 4 >> 2] = HEAP32[i39 >> 2];
    HEAP32[i32 >> 2] = H_BASE + 3496;
    i33 = __Znwj(4) | 0;
    __ZNKR3WTF6String12isolatedCopyEv(i33, i64 + (i93 << 2) | 0);
    HEAP32[i32 + 8 >> 2] = i33;
    __ZN3WTF16callOnMainThreadEPFvPvES0_(F_BASE_vi + 44 | 0, i32);
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i36 >> 2] | 0) + 84 >> 2] & 31](i1) | 0) {
     break;
    } else {
     i93 = i93 + 1 | 0;
    }
   }
   if ((i53 | 0) == 157) {
    i36 = __ZN3WTF10fastMallocEj(8) | 0;
    HEAP32[i36 + 4 >> 2] = HEAP32[i39 >> 2];
    HEAP32[i36 >> 2] = H_BASE + 3608;
    __ZN3WTF16callOnMainThreadEPFvPvES0_(F_BASE_vi + 44 | 0, i36);
    __ZN3WTF16callOnMainThreadEPFvPvES0_(F_BASE_vi + 28 | 0, i1);
   }
   if ((i63 | 0) != 0) {
    i36 = i64 + (i63 << 2) | 0;
    i23 = i64;
    while (1) {
     i24 = HEAP32[i23 >> 2] | 0;
     do {
      if ((i24 | 0) != 0) {
       i32 = i24 | 0;
       i33 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
       if ((i33 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i24);
        break;
       } else {
        HEAP32[i32 >> 2] = i33;
        break;
       }
      }
     } while (0);
     i23 = i23 + 4 | 0;
     if ((i23 | 0) == (i36 | 0)) {
      break;
     }
    }
   }
   if ((i64 | 0) != 0) {
    __ZN3WTF8fastFreeEPv(i64);
   }
   if ((i65 | 0) != 0) {
    i36 = HEAP32[i41 >> 2] | 0;
    i23 = i36 + (i65 << 2) | 0;
    i39 = i36;
    while (1) {
     i36 = HEAP32[i39 >> 2] | 0;
     do {
      if ((i36 | 0) != 0) {
       i24 = i36 | 0;
       i33 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
       if ((i33 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i36);
        break;
       } else {
        HEAP32[i24 >> 2] = i33;
        break;
       }
      }
     } while (0);
     i39 = i39 + 4 | 0;
     if ((i39 | 0) == (i23 | 0)) {
      break;
     }
    }
    HEAP32[i37 >> 2] = 0;
   }
   i23 = HEAP32[i41 >> 2] | 0;
   if ((i23 | 0) == 0) {
    break;
   }
   HEAP32[i41 >> 2] = 0;
   HEAP32[i28 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i23);
  }
 } while (0);
 __ZN7WebCore15SQLiteStatementD1Ev(i4);
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i4 | 0;
 i65 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i65 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i3 >> 2] = i65;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore12IconDatabase16readFromDatabaseEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i4;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 20 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i13 = i3 | 0;
 HEAP32[i13 >> 2] = 0;
 i14 = i3 + 4 | 0;
 HEAP32[i14 >> 2] = 0;
 i15 = i3 + 8 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = i1 + 336 | 0;
 i17 = (i16 | 0) == 0;
 if (!i17) {
  __ZN3WTF5Mutex4lockEv(i16);
 }
 i18 = i1 + 400 | 0;
 i19 = i18 | 0;
 i20 = HEAP32[i19 >> 2] | 0;
 i21 = HEAP32[i1 + 404 >> 2] | 0;
 i22 = i20 + (i21 << 2) | 0;
 L4 : do {
  if ((HEAP32[i1 + 412 >> 2] | 0) == 0) {
   i23 = i22;
  } else {
   if ((i21 | 0) == 0) {
    i23 = i20;
    break;
   } else {
    i24 = i20;
   }
   while (1) {
    i25 = HEAP32[i24 >> 2] | 0;
    if (!((i25 | 0) == (-1 | 0) | (i25 | 0) == 0)) {
     i23 = i24;
     break L4;
    }
    i25 = i24 + 4 | 0;
    if ((i25 | 0) == (i22 | 0)) {
     i23 = i22;
     break;
    } else {
     i24 = i25;
    }
   }
  }
 } while (0);
 i24 = i22;
 i22 = 0;
 i20 = i24;
 HEAP32[i4 >> 2] = i23 | i22;
 HEAP32[i4 + 4 >> 2] = i20;
 HEAP32[i6 >> 2] = i22 | i24;
 HEAP32[i6 + 4 >> 2] = i20;
 __ZN3WTF6VectorIPN7WebCore10IconRecordELj0ENS_15CrashOnOverflowEE11appendRangeINS_29HashTableConstIteratorAdapterINS_9HashTableIS3_S3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EESD_EES3_EEEEvT_SG_(i3, i5, i7);
 if (!i17) {
  __ZN3WTF5Mutex6unlockEv(i16);
 }
 i7 = i8;
 _memset(i7 | 0, 0, 20) | 0;
 i5 = i10 | 0;
 i3 = i9 | 0;
 i20 = i1 + 188 | 0;
 i6 = (i20 | 0) == 0;
 i24 = i1;
 i22 = i8 + 12 | 0;
 i4 = i8 | 0;
 i23 = i8 + 4 | 0;
 i21 = i1 + 488 | 0;
 i25 = i1 + 408 | 0;
 i26 = i11 | 0;
 i27 = i1 + 380 | 0;
 i28 = i1 + 392 | 0;
 i29 = i27 | 0;
 i30 = i1 + 384 | 0;
 i31 = i27;
 i32 = i8 | 0;
 i8 = 0;
 i33 = 0;
 while (1) {
  if (i8 >>> 0 >= (HEAP32[i15 >> 2] | 0) >>> 0) {
   i34 = i33;
   break;
  }
  i35 = (HEAP32[i13 >> 2] | 0) + (i8 << 2) | 0;
  i36 = HEAP32[(HEAP32[i35 >> 2] | 0) + 4 >> 2] | 0;
  HEAP32[i5 >> 2] = i36;
  if ((i36 | 0) != 0) {
   i37 = i36 | 0;
   HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 2;
  }
  __ZN7WebCore12IconDatabase37getImageDataForIconURLFromSQLDatabaseERKN3WTF6StringE(i9, i1, i10);
  i37 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  i36 = HEAP32[i5 >> 2] | 0;
  do {
   if ((i36 | 0) != 0) {
    i38 = i36 | 0;
    i39 = (HEAP32[i38 >> 2] | 0) - 2 | 0;
    if ((i39 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i36);
     break;
    } else {
     HEAP32[i38 >> 2] = i39;
     break;
    }
   }
  } while (0);
  if (!i6) {
   __ZN3WTF5Mutex4lockEv(i20);
  }
  if (!i17) {
   __ZN3WTF5Mutex4lockEv(i16);
  }
  i36 = HEAP32[i19 >> 2] | 0;
  L31 : do {
   if ((i36 | 0) == 0) {
    i40 = i37;
   } else {
    i39 = HEAP32[i25 >> 2] | 0;
    i38 = HEAP32[i35 >> 2] | 0;
    i41 = i38;
    i42 = i41 + ~(i41 << 15) | 0;
    i41 = (i42 >>> 10 ^ i42) * 9 & -1;
    i42 = i41 >>> 6 ^ i41;
    i41 = i42 + ~(i42 << 11) | 0;
    i42 = i41 >>> 16 ^ i41;
    i41 = i42 & i39;
    i43 = i36 + (i41 << 2) | 0;
    i44 = HEAP32[i43 >> 2] | 0;
    if ((i44 | 0) == (i38 | 0)) {
     i45 = i43;
    } else {
     i43 = (i42 >>> 23) + ~i42 | 0;
     i42 = i43 << 12 ^ i43;
     i43 = i42 >>> 7 ^ i42;
     i42 = i43 << 2 ^ i43;
     i43 = i42 >>> 20 ^ i42 | 1;
     i42 = 0;
     i46 = i41;
     i41 = i44;
     while (1) {
      if ((i41 | 0) == 0) {
       i40 = i37;
       break L31;
      }
      i44 = (i42 | 0) == 0 ? i43 : i42;
      i47 = i44 + i46 & i39;
      i48 = i36 + (i47 << 2) | 0;
      i49 = HEAP32[i48 >> 2] | 0;
      if ((i49 | 0) == (i38 | 0)) {
       i45 = i48;
       break;
      } else {
       i42 = i44;
       i46 = i47;
       i41 = i49;
      }
     }
    }
    if ((i45 | 0) == 0) {
     i40 = i37;
     break;
    }
    HEAP32[i26 >> 2] = i37;
    __ZN7WebCore10IconRecord12setImageDataEN3WTF10PassRefPtrINS_12SharedBufferEEE(i38, i11);
    i41 = HEAP32[i26 >> 2] | 0;
    do {
     if ((i41 | 0) != 0) {
      i46 = i41 | 0;
      i42 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
      if ((i42 | 0) == 0) {
       __ZN7WebCore12SharedBufferD1Ev(i41);
       __ZN3WTF8fastFreeEPv(i41);
       break;
      } else {
       HEAP32[i46 >> 2] = i42;
       break;
      }
     }
    } while (0);
    __ZN3WTF7HashSetIPN7WebCore10IconRecordENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i18, i35) | 0;
    i41 = HEAP32[i35 >> 2] | 0;
    i38 = i41 + 16 | 0;
    i42 = HEAP32[i28 >> 2] | 0;
    i46 = (HEAP32[i41 + 28 >> 2] | 0) > (i42 | 0);
    i41 = i46 ? i27 : i38;
    i39 = i46 ? i38 : i27;
    i38 = HEAP32[i41 >> 2] | 0;
    i46 = HEAP32[i41 + 4 >> 2] | 0;
    i43 = i38 + (i46 << 2) | 0;
    L46 : do {
     if ((HEAP32[i41 + 12 >> 2] | 0) == 0) {
      i50 = 36;
     } else {
      L48 : do {
       if ((i46 | 0) == 0) {
        i51 = i38;
       } else {
        i49 = i38;
        while (1) {
         i47 = HEAP32[i49 >> 2] | 0;
         if (!((i47 | 0) == (-1 | 0) | (i47 | 0) == 0)) {
          i51 = i49;
          break L48;
         }
         i47 = i49 + 4 | 0;
         if ((i47 | 0) == (i43 | 0)) {
          i50 = 36;
          break L46;
         } else {
          i49 = i47;
         }
        }
       }
      } while (0);
      if ((i51 | 0) == (i43 | 0)) {
       i50 = 36;
       break;
      }
      i49 = i39 | 0;
      i47 = i39 + 8 | 0;
      i44 = i51;
      while (1) {
       i48 = HEAP32[i49 >> 2] | 0;
       L56 : do {
        if ((i48 | 0) != 0) {
         i52 = HEAP32[i47 >> 2] | 0;
         i53 = i44 | 0;
         i54 = HEAP32[i53 >> 2] | 0;
         i55 = HEAP32[i54 + 16 >> 2] | 0;
         if (i55 >>> 0 > 127 >>> 0) {
          i56 = i55 >>> 7;
         } else {
          i56 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i54) | 0;
         }
         i54 = (i56 >>> 23) + ~i56 | 0;
         i55 = i54 << 12 ^ i54;
         i54 = i55 >>> 7 ^ i55;
         i55 = i54 << 2 ^ i54;
         i54 = i55 >>> 20 ^ i55 | 1;
         i55 = i56;
         i57 = 0;
         while (1) {
          i58 = i55 & i52;
          i59 = i48 + (i58 << 2) | 0;
          i60 = HEAP32[i59 >> 2] | 0;
          i61 = i60;
          if ((i61 | 0) == 0) {
           break L56;
          } else if ((i61 | 0) != (-1 | 0)) {
           if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i60, HEAP32[i53 >> 2] | 0) | 0) {
            break;
           }
          }
          i60 = (i57 | 0) == 0 ? i54 : i57;
          i55 = i60 + i58 | 0;
          i57 = i60;
         }
         if ((i59 | 0) == 0) {
          break;
         }
         __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i12, i32, i44, i44);
        }
       } while (0);
       i48 = HEAP32[i22 >> 2] | 0;
       i57 = HEAP32[i28 >> 2] | 0;
       if ((i48 | 0) == (i57 | 0)) {
        break L46;
       }
       i55 = i44 + 4 | 0;
       if ((i55 | 0) == (i43 | 0)) {
        i62 = i57;
        i63 = i48;
        i50 = 53;
        break L46;
       } else {
        i64 = i55;
       }
       while (1) {
        i55 = HEAP32[i64 >> 2] | 0;
        if (!((i55 | 0) == (-1 | 0) | (i55 | 0) == 0)) {
         break;
        }
        i55 = i64 + 4 | 0;
        if ((i55 | 0) == (i43 | 0)) {
         i62 = i57;
         i63 = i48;
         i50 = 53;
         break L46;
        } else {
         i64 = i55;
        }
       }
       if ((i64 | 0) == (i43 | 0)) {
        i62 = i57;
        i63 = i48;
        i50 = 53;
        break;
       } else {
        i44 = i64;
       }
      }
     }
    } while (0);
    if ((i50 | 0) == 36) {
     i50 = 0;
     i62 = i42;
     i63 = HEAP32[i22 >> 2] | 0;
     i50 = 53;
    }
    do {
     if ((i50 | 0) == 53) {
      i50 = 0;
      if ((i63 | 0) == (i62 | 0)) {
       break;
      }
      i43 = HEAP32[i4 >> 2] | 0;
      i39 = HEAP32[i23 >> 2] | 0;
      i38 = i43 + (i39 << 2) | 0;
      if ((i63 | 0) == 0) {
       i40 = 0;
       break L31;
      }
      L81 : do {
       if ((i39 | 0) == 0) {
        i65 = i43;
       } else {
        i46 = i43;
        while (1) {
         i41 = HEAP32[i46 >> 2] | 0;
         if (!((i41 | 0) == (-1 | 0) | (i41 | 0) == 0)) {
          i65 = i46;
          break L81;
         }
         i41 = i46 + 4 | 0;
         if ((i41 | 0) == (i38 | 0)) {
          i40 = 0;
          break L31;
         } else {
          i46 = i41;
         }
        }
       }
      } while (0);
      if ((i65 | 0) == (i38 | 0)) {
       i40 = 0;
       break L31;
      } else {
       i66 = i65;
      }
      while (1) {
       __ZN3WTF7HashSetINS_6StringENS_10StringHashENS_10HashTraitsIS1_EEE6removeERKS1_(i27, i66) | 0;
       i43 = i66 + 4 | 0;
       if ((i43 | 0) == (i38 | 0)) {
        i40 = 0;
        break L31;
       } else {
        i67 = i43;
       }
       while (1) {
        i43 = HEAP32[i67 >> 2] | 0;
        if (!((i43 | 0) == (-1 | 0) | (i43 | 0) == 0)) {
         break;
        }
        i43 = i67 + 4 | 0;
        if ((i43 | 0) == (i38 | 0)) {
         i40 = 0;
         break L31;
        } else {
         i67 = i43;
        }
       }
       if ((i67 | 0) == (i38 | 0)) {
        i40 = 0;
        break L31;
       } else {
        i66 = i67;
       }
      }
     }
    } while (0);
    i42 = HEAP32[i29 >> 2] | 0;
    if ((i42 | 0) == 0) {
     i40 = 0;
     break;
    }
    i38 = HEAP32[i30 >> 2] | 0;
    if ((i38 | 0) > 0) {
     i43 = 0;
     while (1) {
      i39 = HEAP32[i42 + (i43 << 2) >> 2] | 0;
      i46 = i39;
      do {
       if (!((i46 | 0) == (-1 | 0) | (i46 | 0) == 0)) {
        i48 = i39 | 0;
        i57 = (HEAP32[i48 >> 2] | 0) - 2 | 0;
        if ((i57 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i39);
         break;
        } else {
         HEAP32[i48 >> 2] = i57;
         break;
        }
       }
      } while (0);
      i43 = i43 + 1 | 0;
      if ((i43 | 0) >= (i38 | 0)) {
       break;
      }
     }
    }
    __ZN3WTF8fastFreeEPv(i42);
    _memset(i31 | 0, 0, 16) | 0;
    i40 = 0;
   }
  } while (0);
  if (!i17) {
   __ZN3WTF5Mutex6unlockEv(i16);
  }
  if (!i6) {
   __ZN3WTF5Mutex6unlockEv(i20);
  }
  L111 : do {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i24 >> 2] | 0) + 84 >> 2] & 31](i1) | 0) {
    i68 = 1;
   } else {
    i35 = HEAP32[i4 >> 2] | 0;
    i37 = HEAP32[i23 >> 2] | 0;
    i36 = i35 + (i37 << 2) | 0;
    L113 : do {
     if ((HEAP32[i22 >> 2] | 0) != 0) {
      L115 : do {
       if ((i37 | 0) == 0) {
        i69 = i35;
       } else {
        i38 = i35;
        while (1) {
         i43 = HEAP32[i38 >> 2] | 0;
         if (!((i43 | 0) == (-1 | 0) | (i43 | 0) == 0)) {
          i69 = i38;
          break L115;
         }
         i38 = i38 + 4 | 0;
         if ((i38 | 0) == (i36 | 0)) {
          break L113;
         }
        }
       }
      } while (0);
      if ((i69 | 0) == (i36 | 0)) {
       break;
      } else {
       i70 = i69;
      }
      while (1) {
       i38 = __ZN3WTF10fastMallocEj(12) | 0;
       HEAP32[i38 + 4 >> 2] = HEAP32[i21 >> 2];
       HEAP32[i38 >> 2] = H_BASE + 3464;
       i43 = __Znwj(4) | 0;
       __ZNKR3WTF6String12isolatedCopyEv(i43, i70);
       HEAP32[i38 + 8 >> 2] = i43;
       __ZN3WTF16callOnMainThreadEPFvPvES0_(F_BASE_vi + 44 | 0, i38);
       if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i24 >> 2] | 0) + 84 >> 2] & 31](i1) | 0) {
        i68 = 1;
        break L111;
       }
       i38 = i70 + 4 | 0;
       if ((i38 | 0) == (i36 | 0)) {
        break L113;
       } else {
        i71 = i38;
       }
       while (1) {
        i38 = HEAP32[i71 >> 2] | 0;
        if (!((i38 | 0) == (-1 | 0) | (i38 | 0) == 0)) {
         break;
        }
        i38 = i71 + 4 | 0;
        if ((i38 | 0) == (i36 | 0)) {
         break L113;
        } else {
         i71 = i38;
        }
       }
       if ((i71 | 0) == (i36 | 0)) {
        break;
       } else {
        i70 = i71;
       }
      }
     }
    } while (0);
    if ((i35 | 0) != 0) {
     if ((i37 | 0) > 0) {
      i36 = 0;
      while (1) {
       i42 = HEAP32[i35 + (i36 << 2) >> 2] | 0;
       i38 = i42;
       do {
        if (!((i38 | 0) == (-1 | 0) | (i38 | 0) == 0)) {
         i43 = i42 | 0;
         i39 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
         if ((i39 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i42);
          break;
         } else {
          HEAP32[i43 >> 2] = i39;
          break;
         }
        }
       } while (0);
       i36 = i36 + 1 | 0;
       if ((i36 | 0) >= (i37 | 0)) {
        break;
       }
      }
     }
     __ZN3WTF8fastFreeEPv(i35);
     _memset(i7 | 0, 0, 16) | 0;
    }
    i68 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i24 >> 2] | 0) + 84 >> 2] & 31](i1) | 0) & 1;
   }
  } while (0);
  do {
   if ((i40 | 0) != 0) {
    i37 = i40 | 0;
    i36 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
    if ((i36 | 0) == 0) {
     __ZN7WebCore12SharedBufferD1Ev(i40);
     __ZN3WTF8fastFreeEPv(i40);
     break;
    } else {
     HEAP32[i37 >> 2] = i36;
     break;
    }
   }
  } while (0);
  if ((i68 | 0) != 0) {
   i34 = 1;
   break;
  }
  i8 = i8 + 1 | 0;
  i33 = 1;
 }
 i33 = HEAP32[i4 >> 2] | 0;
 if ((i33 | 0) != 0) {
  i4 = HEAP32[i23 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i23 = 0;
   while (1) {
    i8 = HEAP32[i33 + (i23 << 2) >> 2] | 0;
    i68 = i8;
    do {
     if (!((i68 | 0) == (-1 | 0) | (i68 | 0) == 0)) {
      i40 = i8 | 0;
      i1 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
      if ((i1 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i8);
       break;
      } else {
       HEAP32[i40 >> 2] = i1;
       break;
      }
     }
    } while (0);
    i23 = i23 + 1 | 0;
    if ((i23 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i33);
 }
 if ((HEAP32[i15 >> 2] | 0) != 0) {
  HEAP32[i15 >> 2] = 0;
 }
 i15 = HEAP32[i13 >> 2] | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i2;
  return i34 | 0;
 }
 HEAP32[i13 >> 2] = 0;
 HEAP32[i14 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i15);
 STACKTOP = i2;
 return i34 | 0;
}
function __ZN7WebCore12IconDatabase20setIconURLForPageURLERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 56 | 0;
 i12 = i4 + 64 | 0;
 i13 = i4 + 72 | 0;
 i14 = i4 + 80 | 0;
 i15 = i4 + 88 | 0;
 i16 = i4 + 104 | 0;
 i17 = i4 + 112 | 0;
 i18 = i4 + 128 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 108 >> 2] & 31](i1) | 0)) {
  STACKTOP = i4;
  return;
 }
 if (!(__ZN7WebCore19documentCanHaveIconERKN3WTF6StringE(i3) | 0)) {
  STACKTOP = i4;
  return;
 }
 i19 = i5 | 0;
 HEAP32[i19 >> 2] = 0;
 i20 = i6 | 0;
 HEAP32[i20 >> 2] = 0;
 i21 = i1 + 188 | 0;
 i22 = (i21 | 0) == 0;
 if (!i22) {
  __ZN3WTF5Mutex4lockEv(i21);
 }
 i23 = i1 + 232 | 0;
 i24 = HEAP32[i1 + 240 >> 2] | 0;
 i25 = HEAP32[i23 >> 2] | 0;
 i26 = i3 | 0;
 i27 = HEAP32[i26 >> 2] | 0;
 i28 = HEAP32[i27 + 16 >> 2] | 0;
 if (i28 >>> 0 > 127 >>> 0) {
  i29 = i28 >>> 7;
 } else {
  i29 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i27) | 0;
 }
 L14 : do {
  if ((i25 | 0) == 0) {
   i30 = 14;
  } else {
   i27 = (i29 >>> 23) + ~i29 | 0;
   i28 = i27 << 12 ^ i27;
   i27 = i28 >>> 7 ^ i28;
   i28 = i27 << 2 ^ i27;
   i27 = i28 >>> 20 ^ i28 | 1;
   i28 = i29;
   i31 = 0;
   while (1) {
    i32 = i28 & i24;
    i33 = i25 + (i32 << 3) | 0;
    i34 = HEAP32[i33 >> 2] | 0;
    i35 = i34;
    if ((i35 | 0) == 0) {
     i30 = 14;
     break L14;
    } else if ((i35 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i34, HEAP32[i26 >> 2] | 0) | 0) {
      break;
     }
    }
    i34 = (i31 | 0) == 0 ? i27 : i31;
    i28 = i34 + i32 | 0;
    i31 = i34;
   }
   if ((i33 | 0) == 0) {
    i30 = 14;
    break;
   }
   i31 = HEAP32[i25 + (i32 << 3) + 4 >> 2] | 0;
   HEAP32[i7 >> 2] = i31;
   if ((i31 | 0) == 0) {
    i36 = 0;
    i30 = 22;
    break;
   }
   i28 = HEAP32[i31 + 4 >> 2] | 0;
   if ((i28 | 0) == 0) {
    i36 = i31;
    i30 = 22;
    break;
   }
   i27 = HEAP32[i28 + 4 >> 2] | 0;
   do {
    if ((i27 | 0) == 0) {
     if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(i27, HEAP32[i2 >> 2] | 0) | 0)) {
      i36 = i31;
      i30 = 22;
      break L14;
     }
    } else {
     i28 = i27 | 0;
     HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 2;
     i28 = __ZN3WTF5equalEPKNS_10StringImplES2_(i27, HEAP32[i2 >> 2] | 0) | 0;
     i34 = i27 | 0;
     i35 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
     if ((i35 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i27);
      if (i28) {
       break;
      } else {
       i36 = i31;
       i30 = 22;
       break L14;
      }
     } else {
      HEAP32[i34 >> 2] = i35;
      if (i28) {
       break;
      } else {
       i36 = i31;
       i30 = 22;
       break L14;
      }
     }
    }
   } while (0);
   if (i22) {
    break;
   }
   __ZN3WTF5Mutex6unlockEv(i21);
  }
 } while (0);
 if ((i30 | 0) == 14) {
  HEAP32[i7 >> 2] = 0;
  i36 = 0;
  i30 = 22;
 }
 do {
  if ((i30 | 0) == 22) {
   __ZNKR3WTF6String12isolatedCopyEv(i8, i3);
   i32 = i8 | 0;
   i25 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = 0;
   i33 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = i25;
   do {
    if ((i33 | 0) != 0) {
     i25 = i33 | 0;
     i26 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
     if ((i26 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i33);
      break;
     } else {
      HEAP32[i25 >> 2] = i26;
      break;
     }
    }
   } while (0);
   i33 = HEAP32[i32 >> 2] | 0;
   do {
    if ((i33 | 0) != 0) {
     i26 = i33 | 0;
     i25 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
     if ((i25 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i33);
      break;
     } else {
      HEAP32[i26 >> 2] = i25;
      break;
     }
    }
   } while (0);
   __ZNKR3WTF6String12isolatedCopyEv(i9, i2);
   i33 = i9 | 0;
   i32 = HEAP32[i33 >> 2] | 0;
   HEAP32[i33 >> 2] = 0;
   i25 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = i32;
   do {
    if ((i25 | 0) != 0) {
     i32 = i25 | 0;
     i26 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
     if ((i26 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i25);
      break;
     } else {
      HEAP32[i32 >> 2] = i26;
      break;
     }
    }
   } while (0);
   i25 = HEAP32[i33 >> 2] | 0;
   do {
    if ((i25 | 0) != 0) {
     i26 = i25 | 0;
     i32 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
     if ((i32 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i25);
      break;
     } else {
      HEAP32[i26 >> 2] = i32;
      break;
     }
    }
   } while (0);
   do {
    if ((i36 | 0) == 0) {
     i25 = __ZN3WTF10fastMallocEj(12) | 0;
     __ZN7WebCore13PageURLRecordC1ERKN3WTF6StringE(i25, i6);
     HEAP32[i7 >> 2] = i25;
     __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore13PageURLRecordEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS1_RS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i10, i23 | 0, i6, i7);
     i25 = HEAP32[i7 >> 2] | 0;
     if ((HEAP8[i10 + 8 | 0] & 1) != 0) {
      i37 = i25;
      break;
     }
     HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] = i25;
     i37 = i25;
    } else {
     i37 = i36;
    }
   } while (0);
   i25 = HEAP32[i37 + 4 >> 2] | 0;
   i33 = (i25 | 0) == 0;
   if (!i33) {
    i32 = i25 | 0;
    HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
   }
   __ZN7WebCore12IconDatabase21getOrCreateIconRecordERKN3WTF6StringE(i11, i1, i5);
   __ZN7WebCore13PageURLRecord13setIconRecordEN3WTF10PassRefPtrINS_10IconRecordEEE(i37, i11);
   i32 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i32 | 0) != 0) {
     i26 = i32 | 0;
     i24 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     if ((i24 | 0) == 0) {
      __ZN7WebCore10IconRecordD1Ev(i32);
      __ZN3WTF8fastFreeEPv(i32);
      break;
     } else {
      HEAP32[i26 >> 2] = i24;
      break;
     }
    }
   } while (0);
   do {
    if (!i33) {
     if ((HEAP32[i25 >> 2] | 0) != 1) {
      break;
     }
     i32 = i12 | 0;
     i24 = HEAP32[i25 + 4 >> 2] | 0;
     HEAP32[i32 >> 2] = i24;
     if ((i24 | 0) != 0) {
      i26 = i24 | 0;
      HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
     }
     __ZN3WTF7HashMapINS_6StringEPN7WebCore10IconRecordENS_10StringHashENS_10HashTraitsIS1_EENS6_IS4_EEE6removeERKS1_(i1 + 212 | 0, i12) | 0;
     i26 = HEAP32[i32 >> 2] | 0;
     do {
      if ((i26 | 0) != 0) {
       i32 = i26 | 0;
       i24 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
       if ((i24 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i26);
        break;
       } else {
        HEAP32[i32 >> 2] = i24;
        break;
       }
      }
     } while (0);
     i26 = i1 + 336 | 0;
     if ((i26 | 0) == 0) {
      HEAP32[i13 >> 2] = i25;
      __ZN3WTF7HashSetIPN7WebCore10IconRecordENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 400 | 0, i13) | 0;
      break;
     } else {
      __ZN3WTF5Mutex4lockEv(i26);
      HEAP32[i13 >> 2] = i25;
      __ZN3WTF7HashSetIPN7WebCore10IconRecordENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 400 | 0, i13) | 0;
      __ZN3WTF5Mutex6unlockEv(i26);
      break;
     }
    }
   } while (0);
   do {
    if ((HEAP8[i1 + 98 | 0] & 1) == 0) {
     i26 = i1 + 272 | 0;
     i24 = (i26 | 0) == 0;
     if (!i24) {
      __ZN3WTF5Mutex4lockEv(i26);
     }
     __ZNK7WebCore13PageURLRecord8snapshotEb(i14, i37, 0);
     __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore15PageURLSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS1_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i15, i1 + 296 | 0, i6, i14);
     do {
      if ((HEAP8[i15 + 8 | 0] & 1) == 0) {
       i32 = HEAP32[i15 >> 2] | 0;
       i29 = i14 | 0;
       i31 = HEAP32[i29 >> 2] | 0;
       HEAP32[i29 >> 2] = 0;
       i29 = i32 + 4 | 0;
       i27 = HEAP32[i29 >> 2] | 0;
       HEAP32[i29 >> 2] = i31;
       do {
        if ((i27 | 0) != 0) {
         i31 = i27 | 0;
         i29 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
         if ((i29 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i27);
          break;
         } else {
          HEAP32[i31 >> 2] = i29;
          break;
         }
        }
       } while (0);
       i27 = i14 + 4 | 0;
       i29 = HEAP32[i27 >> 2] | 0;
       HEAP32[i27 >> 2] = 0;
       i31 = i32 + 8 | 0;
       i28 = HEAP32[i31 >> 2] | 0;
       HEAP32[i31 >> 2] = i29;
       if ((i28 | 0) == 0) {
        i38 = i27;
        break;
       }
       i29 = i28 | 0;
       i31 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
       if ((i31 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i28);
        i38 = i27;
        break;
       } else {
        HEAP32[i29 >> 2] = i31;
        i38 = i27;
        break;
       }
      } else {
       i38 = i14 + 4 | 0;
      }
     } while (0);
     i27 = HEAP32[i38 >> 2] | 0;
     do {
      if ((i27 | 0) != 0) {
       i31 = i27 | 0;
       i29 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
       if ((i29 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i27);
        break;
       } else {
        HEAP32[i31 >> 2] = i29;
        break;
       }
      }
     } while (0);
     i27 = HEAP32[i14 >> 2] | 0;
     do {
      if ((i27 | 0) != 0) {
       i29 = i27 | 0;
       i31 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
       if ((i31 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i27);
        break;
       } else {
        HEAP32[i29 >> 2] = i31;
        break;
       }
      }
     } while (0);
     do {
      if (!i33) {
       if ((HEAP32[i25 >> 2] | 0) != 1) {
        break;
       }
       i27 = i16 | 0;
       i31 = HEAP32[i25 + 4 >> 2] | 0;
       HEAP32[i27 >> 2] = i31;
       if ((i31 | 0) != 0) {
        i29 = i31 | 0;
        HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 2;
       }
       __ZNK7WebCore10IconRecord8snapshotEb(i17, i25, 1);
       __ZN3WTF7HashMapINS_6StringEN7WebCore12IconSnapshotENS_10StringHashENS_10HashTraitsIS1_EENS5_IS3_EEE3setIS3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_NS_12KeyValuePairIS1_S3_EENS_24KeyValuePairKeyExtractorISD_EES4_NS8_18KeyValuePairTraitsES6_EEEEOS1_OT_(i18, i1 + 316 | 0, i16, i17);
       i29 = HEAP32[i17 + 8 >> 2] | 0;
       do {
        if ((i29 | 0) != 0) {
         i31 = i29 | 0;
         i28 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
         if ((i28 | 0) == 0) {
          __ZN7WebCore12SharedBufferD1Ev(i29);
          __ZN3WTF8fastFreeEPv(i29);
          break;
         } else {
          HEAP32[i31 >> 2] = i28;
          break;
         }
        }
       } while (0);
       i29 = HEAP32[i17 >> 2] | 0;
       do {
        if ((i29 | 0) != 0) {
         i32 = i29 | 0;
         i28 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
         if ((i28 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i29);
          break;
         } else {
          HEAP32[i32 >> 2] = i28;
          break;
         }
        }
       } while (0);
       i29 = HEAP32[i27 >> 2] | 0;
       if ((i29 | 0) == 0) {
        break;
       }
       i28 = i29 | 0;
       i32 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
       if ((i32 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i29);
        break;
       } else {
        HEAP32[i28 >> 2] = i32;
        break;
       }
      }
     } while (0);
     if (i24) {
      break;
     }
     __ZN3WTF5Mutex6unlockEv(i26);
    }
   } while (0);
   do {
    if (!i33) {
     i32 = i25 | 0;
     i28 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
     if ((i28 | 0) == 0) {
      __ZN7WebCore10IconRecordD1Ev(i25);
      __ZN3WTF8fastFreeEPv(i25);
      break;
     } else {
      HEAP32[i32 >> 2] = i28;
      break;
     }
    }
   } while (0);
   if (!i22) {
    __ZN3WTF5Mutex6unlockEv(i21);
   }
   i25 = HEAP32[i1 + 64 >> 2] | 0;
   if ((i25 | 0) == (__ZN3WTF13currentThreadEv() | 0)) {
    break;
   }
   i25 = i1 + 96 | 0;
   if ((HEAP8[i25] & 1) == 0) {
    HEAP8[i25] = 1;
    __ZN3WTF16callOnMainThreadEPFvPvES0_(F_BASE_vi + 50 | 0, i1);
   }
   i25 = HEAP32[i1 + 488 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i25 >> 2] | 0) + 16 >> 2] & 31](i25, i6);
  }
 } while (0);
 i6 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i20 = i6 | 0;
   i1 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i20 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i19 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i19 = i6 | 0;
 i1 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i19 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore12IconDatabase21setIconDataForIconURLEN3WTF10PassRefPtrINS_12SharedBufferEEERKNS1_6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 i10 = i4 + 48 | 0;
 i11 = i4 + 56 | 0;
 i12 = i11;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = i13;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 108 >> 2] & 31](i1) | 0)) {
  STACKTOP = i4;
  return;
 }
 i18 = HEAP32[i3 >> 2] | 0;
 if ((i18 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i18 + 4 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i18 = HEAP32[i2 >> 2] | 0;
 if ((i18 | 0) == 0) {
  HEAP32[i5 >> 2] = 0;
  i19 = 0;
 } else {
  __ZNK7WebCore12SharedBuffer4copyEv(i5, i18);
  i18 = i5 | 0;
  i5 = HEAP32[i18 >> 2] | 0;
  HEAP32[i18 >> 2] = 0;
  i19 = i5;
 }
 __ZNKR3WTF6String12isolatedCopyEv(i6, i3);
 i3 = i7 | 0;
 HEAP32[i3 >> 2] = 0;
 i5 = i7 + 4 | 0;
 HEAP32[i5 >> 2] = 0;
 i18 = i7 + 8 | 0;
 HEAP32[i18 >> 2] = 0;
 i2 = i1 + 188 | 0;
 i20 = (i2 | 0) == 0;
 if (!i20) {
  __ZN3WTF5Mutex4lockEv(i2);
 }
 i21 = i1 + 212 | 0;
 i22 = HEAP32[i1 + 220 >> 2] | 0;
 i23 = HEAP32[i21 >> 2] | 0;
 i24 = i6 | 0;
 i25 = HEAP32[i24 >> 2] | 0;
 i26 = HEAP32[i25 + 16 >> 2] | 0;
 if (i26 >>> 0 > 127 >>> 0) {
  i27 = i26 >>> 7;
 } else {
  i27 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i25) | 0;
 }
 L21 : do {
  if ((i23 | 0) == 0) {
   i28 = 22;
  } else {
   i25 = (i27 >>> 23) + ~i27 | 0;
   i26 = i25 << 12 ^ i25;
   i25 = i26 >>> 7 ^ i26;
   i26 = i25 << 2 ^ i25;
   i25 = i26 >>> 20 ^ i26 | 1;
   i26 = i27;
   i29 = 0;
   while (1) {
    i30 = i26 & i22;
    i31 = i23 + (i30 << 3) | 0;
    i32 = HEAP32[i31 >> 2] | 0;
    i33 = i32;
    if ((i33 | 0) == 0) {
     i28 = 22;
     break L21;
    } else if ((i33 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i32, HEAP32[i24 >> 2] | 0) | 0) {
      break;
     }
    }
    i32 = (i29 | 0) == 0 ? i25 : i29;
    i26 = i32 + i30 | 0;
    i29 = i32;
   }
   if ((i31 | 0) == 0) {
    i28 = 22;
    break;
   }
   i29 = HEAP32[i23 + (i30 << 3) + 4 >> 2] | 0;
   if ((i29 | 0) == 0) {
    i28 = 22;
    break;
   }
   i26 = i29 | 0;
   HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
   i26 = i1 + 336 | 0;
   if ((i26 | 0) == 0) {
    HEAP32[i8 >> 2] = i29;
    __ZN3WTF7HashSetIPN7WebCore10IconRecordENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 400 | 0, i8) | 0;
    i34 = i29;
    break;
   } else {
    __ZN3WTF5Mutex4lockEv(i26);
    HEAP32[i8 >> 2] = i29;
    __ZN3WTF7HashSetIPN7WebCore10IconRecordENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 400 | 0, i8) | 0;
    __ZN3WTF5Mutex6unlockEv(i26);
    i34 = i29;
    break;
   }
  }
 } while (0);
 if ((i28 | 0) == 22) {
  __ZN7WebCore12IconDatabase21getOrCreateIconRecordERKN3WTF6StringE(i9, i1, i6);
  i8 = i9 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = 0;
  i34 = i9;
 }
 i9 = i10 | 0;
 HEAP32[i9 >> 2] = i19;
 __ZN7WebCore10IconRecord12setImageDataEN3WTF10PassRefPtrINS_12SharedBufferEEE(i34, i10);
 i10 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i9 = i10 | 0;
   i19 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) == 0) {
    __ZN7WebCore12SharedBufferD1Ev(i10);
    __ZN3WTF8fastFreeEPv(i10);
    break;
   } else {
    HEAP32[i9 >> 2] = i19;
    break;
   }
  }
 } while (0);
 HEAP32[i34 + 8 >> 2] = ~~+__ZN3WTF11currentTimeEv();
 i10 = HEAP32[i34 + 16 >> 2] | 0;
 i19 = HEAP32[i34 + 20 >> 2] | 0;
 i9 = i10 + (i19 << 2) | 0;
 L43 : do {
  if ((HEAP32[i34 + 28 >> 2] | 0) == 0) {
   i35 = i9;
  } else {
   if ((i19 | 0) == 0) {
    i35 = i10;
    break;
   } else {
    i36 = i10;
   }
   while (1) {
    i8 = HEAP32[i36 >> 2] | 0;
    if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
     i35 = i36;
     break L43;
    }
    i8 = i36 + 4 | 0;
    if ((i8 | 0) == (i9 | 0)) {
     i35 = i9;
     break;
    } else {
     i36 = i8;
    }
   }
  }
 } while (0);
 i36 = i9;
 i9 = 0;
 i10 = i36;
 HEAP32[i11 >> 2] = i35 | i9;
 HEAP32[i11 + 4 >> 2] = i10;
 HEAP32[i13 >> 2] = i9 | i36;
 HEAP32[i13 + 4 >> 2] = i10;
 __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE11appendRangeINS_29HashTableConstIteratorAdapterINS_9HashTableIS1_S1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EESA_EES1_EEEEvT_SD_(i7, i12, i14);
 do {
  if ((HEAP8[i1 + 98 | 0] & 1) == 0) {
   i14 = i1 + 272 | 0;
   i12 = (i14 | 0) == 0;
   if (!i12) {
    __ZN3WTF5Mutex4lockEv(i14);
   }
   __ZNK7WebCore10IconRecord8snapshotEb(i15, i34, 0);
   __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore12IconSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS1_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i16, i1 + 316 | 0, i6, i15);
   do {
    if ((HEAP8[i16 + 8 | 0] & 1) == 0) {
     i7 = HEAP32[i16 >> 2] | 0;
     i10 = i15 | 0;
     i13 = HEAP32[i10 >> 2] | 0;
     HEAP32[i10 >> 2] = 0;
     i10 = i7 + 4 | 0;
     i36 = HEAP32[i10 >> 2] | 0;
     HEAP32[i10 >> 2] = i13;
     do {
      if ((i36 | 0) != 0) {
       i13 = i36 | 0;
       i10 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
       if ((i10 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i36);
        break;
       } else {
        HEAP32[i13 >> 2] = i10;
        break;
       }
      }
     } while (0);
     HEAP32[i7 + 8 >> 2] = HEAP32[i15 + 4 >> 2];
     i36 = i15 + 8 | 0;
     i10 = HEAP32[i36 >> 2] | 0;
     HEAP32[i36 >> 2] = 0;
     i13 = i7 + 12 | 0;
     i9 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = i10;
     if ((i9 | 0) == 0) {
      i37 = i36;
      break;
     }
     i10 = i9 | 0;
     i13 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     if ((i13 | 0) == 0) {
      __ZN7WebCore12SharedBufferD1Ev(i9);
      __ZN3WTF8fastFreeEPv(i9);
      i37 = i36;
      break;
     } else {
      HEAP32[i10 >> 2] = i13;
      i37 = i36;
      break;
     }
    } else {
     i37 = i15 + 8 | 0;
    }
   } while (0);
   i36 = HEAP32[i37 >> 2] | 0;
   do {
    if ((i36 | 0) != 0) {
     i13 = i36 | 0;
     i10 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) == 0) {
      __ZN7WebCore12SharedBufferD1Ev(i36);
      __ZN3WTF8fastFreeEPv(i36);
      break;
     } else {
      HEAP32[i13 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i36 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i36 | 0) != 0) {
     i10 = i36 | 0;
     i13 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i36);
      break;
     } else {
      HEAP32[i10 >> 2] = i13;
      break;
     }
    }
   } while (0);
   if (i12) {
    break;
   }
   __ZN3WTF5Mutex6unlockEv(i14);
  }
 } while (0);
 i15 = i34 | 0;
 do {
  if ((HEAP32[i15 >> 2] | 0) == 1) {
   i37 = i17 | 0;
   i16 = HEAP32[i34 + 4 >> 2] | 0;
   HEAP32[i37 >> 2] = i16;
   if ((i16 | 0) != 0) {
    i6 = i16 | 0;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   }
   __ZN3WTF7HashMapINS_6StringEPN7WebCore10IconRecordENS_10StringHashENS_10HashTraitsIS1_EENS6_IS4_EEE6removeERKS1_(i21, i17) | 0;
   i6 = HEAP32[i37 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i37 = i6 | 0;
   i16 = (HEAP32[i37 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i37 >> 2] = i16;
    break;
   }
  }
 } while (0);
 do {
  if ((i34 | 0) != 0) {
   i17 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) == 0) {
    __ZN7WebCore10IconRecordD1Ev(i34);
    __ZN3WTF8fastFreeEPv(i34);
    break;
   } else {
    HEAP32[i15 >> 2] = i17;
    break;
   }
  }
 } while (0);
 if (!i20) {
  __ZN3WTF5Mutex6unlockEv(i2);
 }
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i2 | 0) == (__ZN3WTF13currentThreadEv() | 0)) {
   i38 = HEAP32[i18 >> 2] | 0;
   i28 = 74;
  } else {
   i20 = i1 + 96 | 0;
   if ((HEAP8[i20] & 1) == 0) {
    HEAP8[i20] = 1;
    __ZN3WTF16callOnMainThreadEPFvPvES0_(F_BASE_vi + 50 | 0, i1);
   }
   i20 = HEAP32[i18 >> 2] | 0;
   if ((i20 | 0) == 0) {
    i28 = 75;
    break;
   }
   i15 = i1 + 488 | 0;
   i34 = HEAP32[i3 >> 2] | 0;
   i17 = 0;
   while (1) {
    i21 = HEAP32[i15 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i21 >> 2] | 0) + 16 >> 2] & 31](i21, i34 + (i17 << 2) | 0);
    i21 = i17 + 1 | 0;
    if (i21 >>> 0 < i20 >>> 0) {
     i17 = i21;
    } else {
     i38 = i20;
     i28 = 74;
     break;
    }
   }
  }
 } while (0);
 do {
  if ((i28 | 0) == 74) {
   if ((i38 | 0) == 0) {
    i28 = 75;
    break;
   }
   i1 = HEAP32[i3 >> 2] | 0;
   i2 = i1 + (i38 << 2) | 0;
   i20 = i1;
   while (1) {
    i17 = HEAP32[i20 >> 2] | 0;
    do {
     if ((i17 | 0) != 0) {
      i34 = i17 | 0;
      i15 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
      if ((i15 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i17);
       break;
      } else {
       HEAP32[i34 >> 2] = i15;
       break;
      }
     }
    } while (0);
    i20 = i20 + 4 | 0;
    if ((i20 | 0) == (i2 | 0)) {
     break;
    }
   }
   HEAP32[i18 >> 2] = 0;
   i39 = i1;
  }
 } while (0);
 if ((i28 | 0) == 75) {
  i39 = HEAP32[i3 >> 2] | 0;
 }
 if ((i39 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i5 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i39);
 }
 i39 = HEAP32[i24 >> 2] | 0;
 if ((i39 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i24 = i39 | 0;
 i5 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i39);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i24 >> 2] = i5;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore12IconDatabase20pruneUnretainedIconsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 32 | 0;
 i7 = i2 + 40 | 0;
 i8 = i2 + 48 | 0;
 i9 = i2 + 64 | 0;
 i10 = i2 + 72 | 0;
 i11 = i2 + 80 | 0;
 i12 = i2 + 88 | 0;
 i13 = i1;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 108 >> 2] & 31](i1) | 0)) {
  STACKTOP = i2;
  return;
 }
 i14 = i1 + 492 | 0;
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 48 | 0);
 __ZN7WebCore15SQLiteStatementC1ERNS_14SQLiteDatabaseERKN3WTF6StringE(i3, i14, i4);
 i15 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i4 = i15 | 0;
   i16 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i4 >> 2] = i16;
    break;
   }
  }
 } while (0);
 __ZN7WebCore15SQLiteStatement7prepareEv(i3) | 0;
 i15 = __ZN7WebCore15SQLiteStatement4stepEv(i3) | 0;
 do {
  if ((i15 | 0) == (HEAP32[__ZN7WebCore12SQLResultRowE >> 2] | 0)) {
   i16 = i1 + 188 | 0;
   i4 = (i16 | 0) == 0;
   i17 = i1 + 232 | 0;
   i18 = i5 | 0;
   i19 = i6;
   i20 = i1 + 240 | 0;
   i21 = 0;
   i22 = 0;
   i23 = 0;
   L12 : while (1) {
    if (!i4) {
     __ZN3WTF5Mutex4lockEv(i16);
    }
    __ZN7WebCore15SQLiteStatement13getColumnTextEi(i5, i3, 1);
    i24 = HEAP32[i17 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i25 = 0;
    } else {
     i26 = HEAP32[i20 >> 2] | 0;
     i27 = HEAP32[i18 >> 2] | 0;
     i28 = HEAP32[i27 + 16 >> 2] | 0;
     if (i28 >>> 0 > 127 >>> 0) {
      i29 = i28 >>> 7;
     } else {
      i29 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i27) | 0;
     }
     i27 = (i29 >>> 23) + ~i29 | 0;
     i28 = i27 << 12 ^ i27;
     i27 = i28 >>> 7 ^ i28;
     i28 = i27 << 2 ^ i27;
     i27 = i28 >>> 20 ^ i28 | 1;
     i28 = i29;
     i30 = 0;
     while (1) {
      i31 = i28 & i26;
      i32 = i24 + (i31 << 3) | 0;
      i33 = HEAP32[i32 >> 2] | 0;
      i34 = i33;
      if ((i34 | 0) == 0) {
       i35 = 0;
       break;
      } else if ((i34 | 0) != (-1 | 0)) {
       if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i33, HEAP32[i18 >> 2] | 0) | 0) {
        i35 = i32;
        break;
       }
      }
      i32 = (i30 | 0) == 0 ? i27 : i30;
      i28 = i32 + i31 | 0;
      i30 = i32;
     }
     i25 = (i35 | 0) != 0;
    }
    i30 = HEAP32[i18 >> 2] | 0;
    do {
     if ((i30 | 0) != 0) {
      i28 = i30 | 0;
      i27 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
      if ((i27 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i30);
       break;
      } else {
       HEAP32[i28 >> 2] = i27;
       break;
      }
     }
    } while (0);
    do {
     if (i25) {
      i36 = i23;
      i37 = i22;
      i38 = i21;
     } else {
      i30 = __ZN7WebCore15SQLiteStatement14getColumnInt64Ei(i3, 0) | 0;
      i27 = tempRet0;
      HEAP32[i6 >> 2] = i30;
      HEAP32[i6 + 4 >> 2] = i27;
      if ((i21 | 0) != (i22 | 0)) {
       i28 = i23 + (i21 << 3) | 0;
       HEAP32[i28 >> 2] = i30;
       HEAP32[i28 + 4 >> 2] = i27;
       i36 = i23;
       i37 = i22;
       i38 = i21 + 1 | 0;
       break;
      }
      i27 = i22 + 1 | 0;
      do {
       if (i23 >>> 0 > i6 >>> 0) {
        i39 = 29;
       } else {
        if ((i23 + (i22 << 3) | 0) >>> 0 <= i6 >>> 0) {
         i39 = 29;
         break;
        }
        i28 = i19 - i23 >> 3;
        i30 = i27 + (i22 >>> 2) | 0;
        i24 = i30 >>> 0 > 16 >>> 0 ? i30 : 16;
        i30 = i24 >>> 0 > i27 >>> 0 ? i24 : i27;
        do {
         if (i22 >>> 0 < i30 >>> 0) {
          if (i30 >>> 0 > 536870911 >>> 0) {
           i39 = 36;
           break L12;
          }
          i24 = __ZN3WTF18fastMallocGoodSizeEj(i30 << 3) | 0;
          i26 = i24 >>> 3;
          i32 = __ZN3WTF10fastMallocEj(i24) | 0;
          i24 = i32;
          i31 = i23;
          _memcpy(i32 | 0, i31 | 0, i22 << 3) | 0;
          if ((i23 | 0) == 0) {
           i40 = i24;
           i41 = i26;
           break;
          }
          i32 = (i24 | 0) == (i23 | 0);
          __ZN3WTF8fastFreeEPv(i31);
          i40 = i32 ? 0 : i24;
          i41 = i32 ? 0 : i26;
         } else {
          i40 = i23;
          i41 = i22;
         }
        } while (0);
        i42 = i40 + (i28 << 3) | 0;
        i43 = i40;
        i44 = i41;
       }
      } while (0);
      do {
       if ((i39 | 0) == 29) {
        i39 = 0;
        i30 = i27 + (i22 >>> 2) | 0;
        i26 = i30 >>> 0 > 16 >>> 0 ? i30 : 16;
        i30 = i26 >>> 0 > i27 >>> 0 ? i26 : i27;
        if (i22 >>> 0 >= i30 >>> 0) {
         i42 = i6;
         i43 = i23;
         i44 = i22;
         break;
        }
        if (i30 >>> 0 > 536870911 >>> 0) {
         i39 = 31;
         break L12;
        }
        i26 = __ZN3WTF18fastMallocGoodSizeEj(i30 << 3) | 0;
        i30 = i26 >>> 3;
        i32 = __ZN3WTF10fastMallocEj(i26) | 0;
        i26 = i32;
        i24 = i23;
        _memcpy(i32 | 0, i24 | 0, i22 << 3) | 0;
        if ((i23 | 0) == 0) {
         i42 = i6;
         i43 = i26;
         i44 = i30;
         break;
        }
        i32 = (i26 | 0) == (i23 | 0);
        __ZN3WTF8fastFreeEPv(i24);
        i42 = i6;
        i43 = i32 ? 0 : i26;
        i44 = i32 ? 0 : i30;
       }
      } while (0);
      i30 = i43 + (i22 << 3) | 0;
      i32 = HEAP32[i42 + 4 >> 2] | 0;
      HEAP32[i30 >> 2] = HEAP32[i42 >> 2];
      HEAP32[i30 + 4 >> 2] = i32;
      i36 = i43;
      i37 = i44;
      i38 = i27;
     }
    } while (0);
    if (!i4) {
     __ZN3WTF5Mutex6unlockEv(i16);
    }
    if ((__ZN7WebCore15SQLiteStatement4stepEv(i3) | 0) == (i15 | 0)) {
     i21 = i38;
     i22 = i37;
     i23 = i36;
    } else {
     i39 = 44;
     break;
    }
   }
   if ((i39 | 0) == 31) {
    _WTFCrash();
   } else if ((i39 | 0) == 36) {
    _WTFCrash();
   } else if ((i39 | 0) == 44) {
    __ZN7WebCore15SQLiteStatement8finalizeEv(i3) | 0;
    if ((i38 | 0) == 0) {
     i45 = i36;
     i39 = 54;
     break;
    }
    __ZN7WebCore17SQLiteTransactionC1ERNS_14SQLiteDatabaseEb(i7, i14, 0);
    __ZN7WebCore17SQLiteTransaction5beginEv(i7);
    __ZN3WTF6StringC1EPKc(i9, H_BASE + 8 | 0);
    __ZN7WebCore15SQLiteStatementC1ERNS_14SQLiteDatabaseERKN3WTF6StringE(i8, i14, i9);
    i23 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i23 | 0) != 0) {
      i22 = i23 | 0;
      i21 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
      if ((i21 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i23);
       break;
      } else {
       HEAP32[i22 >> 2] = i21;
       break;
      }
     }
    } while (0);
    __ZN7WebCore15SQLiteStatement7prepareEv(i8) | 0;
    i23 = 0;
    while (1) {
     if (i23 >>> 0 >= i38 >>> 0) {
      i39 = 53;
      break;
     }
     i21 = i36 + (i23 << 3) | 0;
     __ZN7WebCore15SQLiteStatement9bindInt64Eix(i8, 1, HEAP32[i21 >> 2] | 0, HEAP32[i21 + 4 >> 2] | 0) | 0;
     __ZN7WebCore15SQLiteStatement4stepEv(i8) | 0;
     __ZN7WebCore15SQLiteStatement5resetEv(i8) | 0;
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 84 >> 2] & 31](i1) | 0) {
      i39 = 52;
      break;
     } else {
      i23 = i23 + 1 | 0;
     }
    }
    if ((i39 | 0) == 52) {
     __ZN7WebCore17SQLiteTransaction6commitEv(i7);
     __ZN7WebCore15SQLiteStatementD1Ev(i8);
     __ZN7WebCore17SQLiteTransactionD1Ev(i7);
     i46 = i36;
     break;
    } else if ((i39 | 0) == 53) {
     __ZN7WebCore17SQLiteTransaction6commitEv(i7);
     __ZN7WebCore15SQLiteStatement8finalizeEv(i8) | 0;
     __ZN7WebCore15SQLiteStatementD1Ev(i8);
     __ZN7WebCore17SQLiteTransactionD1Ev(i7);
     i45 = i36;
     i39 = 54;
     break;
    }
   }
  } else {
   __ZN7WebCore15SQLiteStatement8finalizeEv(i3) | 0;
   i45 = 0;
   i39 = 54;
  }
 } while (0);
 if ((i39 | 0) == 54) {
  __ZN7WebCore17SQLiteTransactionC1ERNS_14SQLiteDatabaseEb(i10, i14, 0);
  __ZN7WebCore17SQLiteTransaction5beginEv(i10);
  __ZN3WTF6StringC1EPKc(i11, H_BASE + 2288 | 0);
  __ZN7WebCore14SQLiteDatabase14executeCommandERKN3WTF6StringE(i14, i11) | 0;
  i39 = HEAP32[i11 >> 2] | 0;
  do {
   if ((i39 | 0) != 0) {
    i11 = i39 | 0;
    i36 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
    if ((i36 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i39);
     break;
    } else {
     HEAP32[i11 >> 2] = i36;
     break;
    }
   }
  } while (0);
  __ZN3WTF6StringC1EPKc(i12, H_BASE + 2216 | 0);
  __ZN7WebCore14SQLiteDatabase14executeCommandERKN3WTF6StringE(i14, i12) | 0;
  i14 = HEAP32[i12 >> 2] | 0;
  do {
   if ((i14 | 0) != 0) {
    i12 = i14 | 0;
    i39 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
    if ((i39 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i14);
     break;
    } else {
     HEAP32[i12 >> 2] = i39;
     break;
    }
   }
  } while (0);
  __ZN7WebCore17SQLiteTransaction6commitEv(i10);
  __ZN7WebCore12IconDatabase24checkForDanglingPageURLsEb(i1, 1);
  HEAP8[i1 + 485 | 0] = 1;
  __ZN7WebCore17SQLiteTransactionD1Ev(i10);
  i46 = i45;
 }
 __ZN7WebCore15SQLiteStatementD1Ev(i3);
 if ((i46 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF8fastFreeEPv(i46);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore12IconDatabaseD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 HEAP32[i1 >> 2] = H_BASE + 3640;
 i2 = HEAP32[i1 + 652 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 648 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 644 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 640 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 636 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 632 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 628 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 624 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 620 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 616 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 612 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 608 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 604 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 600 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN7WebCore14SQLiteDatabaseD1Ev(i1 + 492 | 0);
 i2 = HEAP32[i1 + 464 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 468 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i4 << 3) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
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
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 444 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 448 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i4 << 3) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
      i8 = i5 | 0;
      i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
      if ((i7 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i5);
       break;
      } else {
       HEAP32[i8 >> 2] = i7;
       break;
      }
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN3WTF5MutexD1Ev(i1 + 420 | 0);
 i2 = HEAP32[i1 + 400 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 380 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 384 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i4 << 2) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
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
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 360 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 364 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i4 << 2) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
      i8 = i5 | 0;
      i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
      if ((i7 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i5);
       break;
      } else {
       HEAP32[i8 >> 2] = i7;
       break;
      }
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN3WTF5MutexD1Ev(i1 + 336 | 0);
 i2 = HEAP32[i1 + 316 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore12IconSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E15deallocateTableEPS5_i(i2, HEAP32[i1 + 320 >> 2] | 0);
 }
 i2 = HEAP32[i1 + 296 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore15PageURLSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E15deallocateTableEPS5_i(i2, HEAP32[i1 + 300 >> 2] | 0);
 }
 __ZN3WTF5MutexD1Ev(i1 + 272 | 0);
 i2 = HEAP32[i1 + 252 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 256 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i4 << 2) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
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
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 232 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 236 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i4 << 3) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
      i8 = i5 | 0;
      i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
      if ((i7 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i5);
       break;
      } else {
       HEAP32[i8 >> 2] = i7;
       break;
      }
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 212 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 216 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i4 << 3) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
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
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN3WTF5MutexD1Ev(i1 + 188 | 0);
 i2 = HEAP32[i1 + 176 >> 2] | 0;
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
 i2 = HEAP32[i1 + 172 >> 2] | 0;
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
 __ZN3WTF15ThreadConditionD1Ev(i1 + 124 | 0);
 __ZN3WTF5MutexD1Ev(i1 + 100 | 0);
 i2 = HEAP32[i1 + 92 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore10IconRecordD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 72 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i9 = i1 + 8 | 0;
  i10 = i9;
  __ZN7WebCore9TimerBaseD2Ev(i10);
  return;
 }
 i4 = HEAP32[i1 + 76 >> 2] | 0;
 if ((i4 | 0) > 0) {
  i3 = 0;
  while (1) {
   i5 = HEAP32[i2 + (i3 << 2) >> 2] | 0;
   i6 = i5;
   do {
    if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
     i8 = i5 + 4 | 0;
     i7 = i8 | 0;
     i11 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     if ((i11 | 0) != 0) {
      HEAP32[i7 >> 2] = i11;
      break;
     }
     i11 = i8 - 4 | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 63](i11);
    }
   } while (0);
   i3 = i3 + 1 | 0;
   if ((i3 | 0) >= (i4 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
 i9 = i1 + 8 | 0;
 i10 = i9;
 __ZN7WebCore9TimerBaseD2Ev(i10);
 return;
}
function __ZN7WebCore12IconDatabaseD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 HEAP32[i1 >> 2] = H_BASE + 3640;
 i2 = HEAP32[i1 + 652 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 648 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 644 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 640 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 636 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 632 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 628 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 624 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 620 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 616 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 612 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 608 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 604 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 600 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN7WebCore14SQLiteDatabaseD1Ev(i1 + 492 | 0);
 i2 = HEAP32[i1 + 464 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 468 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i4 << 3) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
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
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 444 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 448 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i4 << 3) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
      i8 = i5 | 0;
      i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
      if ((i7 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i5);
       break;
      } else {
       HEAP32[i8 >> 2] = i7;
       break;
      }
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN3WTF5MutexD1Ev(i1 + 420 | 0);
 i2 = HEAP32[i1 + 400 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 380 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 384 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i4 << 2) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
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
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 360 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 364 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i4 << 2) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
      i8 = i5 | 0;
      i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
      if ((i7 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i5);
       break;
      } else {
       HEAP32[i8 >> 2] = i7;
       break;
      }
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN3WTF5MutexD1Ev(i1 + 336 | 0);
 i2 = HEAP32[i1 + 316 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore12IconSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E15deallocateTableEPS5_i(i2, HEAP32[i1 + 320 >> 2] | 0);
 }
 i2 = HEAP32[i1 + 296 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore15PageURLSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E15deallocateTableEPS5_i(i2, HEAP32[i1 + 300 >> 2] | 0);
 }
 __ZN3WTF5MutexD1Ev(i1 + 272 | 0);
 i2 = HEAP32[i1 + 252 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 256 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i4 << 2) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
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
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 232 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 236 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i4 << 3) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
      i8 = i5 | 0;
      i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
      if ((i7 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i5);
       break;
      } else {
       HEAP32[i8 >> 2] = i7;
       break;
      }
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 212 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 216 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i4 << 3) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
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
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN3WTF5MutexD1Ev(i1 + 188 | 0);
 i2 = HEAP32[i1 + 176 >> 2] | 0;
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
 i2 = HEAP32[i1 + 172 >> 2] | 0;
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
 __ZN3WTF15ThreadConditionD1Ev(i1 + 124 | 0);
 __ZN3WTF5MutexD1Ev(i1 + 100 | 0);
 i2 = HEAP32[i1 + 92 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore10IconRecordD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 72 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i9 = i1 + 8 | 0;
  i10 = i9;
  __ZN7WebCore9TimerBaseD2Ev(i10);
  return;
 }
 i4 = HEAP32[i1 + 76 >> 2] | 0;
 if ((i4 | 0) > 0) {
  i3 = 0;
  while (1) {
   i5 = HEAP32[i2 + (i3 << 2) >> 2] | 0;
   i6 = i5;
   do {
    if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
     i8 = i5 + 4 | 0;
     i7 = i8 | 0;
     i11 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     if ((i11 | 0) != 0) {
      HEAP32[i7 >> 2] = i11;
      break;
     }
     i11 = i8 - 4 | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 63](i11);
    }
   } while (0);
   i3 = i3 + 1 | 0;
   if ((i3 | 0) >= (i4 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
 i9 = i1 + 8 | 0;
 i10 = i9;
 __ZN7WebCore9TimerBaseD2Ev(i10);
 return;
}
function __ZN7WebCore12IconDatabase28performReleaseIconForPageURLERKN3WTF6StringEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 48 | 0;
 i11 = i4 + 56 | 0;
 i12 = i4 + 72 | 0;
 i13 = i1 + 252 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i15 = HEAP32[i1 + 260 >> 2] | 0;
 i16 = i2 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 i18 = HEAP32[i17 + 16 >> 2] | 0;
 if (i18 >>> 0 > 127 >>> 0) {
  i19 = i18 >>> 7;
 } else {
  i19 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i17) | 0;
 }
 i17 = (i19 >>> 23) + ~i19 | 0;
 i18 = i17 << 12 ^ i17;
 i17 = i18 >>> 7 ^ i18;
 i18 = i17 << 2 ^ i17;
 i17 = i18 >>> 20 ^ i18 | 1;
 i18 = i19;
 i19 = 0;
 while (1) {
  i20 = i18 & i15;
  i21 = i14 + (i20 << 2) | 0;
  i22 = HEAP32[i21 >> 2] | 0;
  i23 = i22;
  if ((i23 | 0) == 0) {
   i24 = 86;
   break;
  } else if ((i23 | 0) != (-1 | 0)) {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i22, HEAP32[i16 >> 2] | 0) | 0) {
    break;
   }
  }
  i22 = (i19 | 0) == 0 ? i17 : i19;
  i18 = i22 + i20 | 0;
  i19 = i22;
 }
 if ((i24 | 0) == 86) {
  STACKTOP = i4;
  return;
 }
 if ((i21 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i21 = i1 + 232 | 0;
 i24 = HEAP32[i1 + 240 >> 2] | 0;
 i19 = HEAP32[i21 >> 2] | 0;
 i18 = HEAP32[i16 >> 2] | 0;
 i17 = HEAP32[i18 + 16 >> 2] | 0;
 if (i17 >>> 0 > 127 >>> 0) {
  i25 = i17 >>> 7;
 } else {
  i25 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i18) | 0;
 }
 L23 : do {
  if ((i19 | 0) == 0) {
   i26 = 0;
  } else {
   i18 = (i25 >>> 23) + ~i25 | 0;
   i17 = i18 << 12 ^ i18;
   i18 = i17 >>> 7 ^ i17;
   i17 = i18 << 2 ^ i18;
   i18 = i17 >>> 20 ^ i17 | 1;
   i17 = i25;
   i14 = 0;
   while (1) {
    i27 = i17 & i24;
    i28 = i19 + (i27 << 3) | 0;
    i15 = HEAP32[i28 >> 2] | 0;
    i22 = i15;
    if ((i22 | 0) == 0) {
     i26 = 0;
     break L23;
    } else if ((i22 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i15, HEAP32[i16 >> 2] | 0) | 0) {
      break;
     }
    }
    i15 = (i14 | 0) == 0 ? i18 : i14;
    i17 = i15 + i27 | 0;
    i14 = i15;
   }
   if ((i28 | 0) == 0) {
    i26 = 0;
    break;
   }
   i26 = HEAP32[i19 + (i27 << 3) + 4 >> 2] | 0;
  }
 } while (0);
 i27 = i26 + 8 | 0;
 i19 = (HEAP32[i27 >> 2] | 0) - i3 | 0;
 HEAP32[i27 >> 2] = i19;
 if ((i19 | 0) > 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3WTF7HashMapINS_6StringEPN7WebCore13PageURLRecordENS_10StringHashENS_10HashTraitsIS1_EENS6_IS4_EEE6removeERKS1_(i21, i2) | 0;
 __ZN3WTF7HashSetINS_6StringENS_10StringHashENS_10HashTraitsIS1_EEE6removeERKS1_(i13, i2) | 0;
 i13 = HEAP32[i26 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i13;
 i21 = i1 + 336 | 0;
 i19 = (i21 | 0) == 0;
 if (!i19) {
  __ZN3WTF5Mutex4lockEv(i21);
 }
 if ((HEAP8[i1 + 182 | 0] & 1) == 0) {
  __ZN3WTF7HashSetINS_6StringENS_10StringHashENS_10HashTraitsIS1_EEE6removeERKS1_(i1 + 360 | 0, i2) | 0;
 }
 __ZN3WTF7HashSetINS_6StringENS_10StringHashENS_10HashTraitsIS1_EEE6removeERKS1_(i1 + 380 | 0, i2) | 0;
 do {
  if ((i13 | 0) != 0) {
   if ((HEAP32[i13 >> 2] | 0) != 1) {
    break;
   }
   i27 = i6 | 0;
   i3 = HEAP32[i13 + 4 >> 2] | 0;
   HEAP32[i27 >> 2] = i3;
   if ((i3 | 0) != 0) {
    i28 = i3 | 0;
    HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 2;
   }
   __ZN3WTF7HashMapINS_6StringEPN7WebCore10IconRecordENS_10StringHashENS_10HashTraitsIS1_EENS6_IS4_EEE6removeERKS1_(i1 + 212 | 0, i6) | 0;
   i28 = HEAP32[i27 >> 2] | 0;
   do {
    if ((i28 | 0) != 0) {
     i27 = i28 | 0;
     i3 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
     if ((i3 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i28);
      break;
     } else {
      HEAP32[i27 >> 2] = i3;
      break;
     }
    }
   } while (0);
   __ZN3WTF7HashSetIPN7WebCore10IconRecordENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 400 | 0, i5) | 0;
  }
 } while (0);
 if (!i19) {
  __ZN3WTF5Mutex6unlockEv(i21);
 }
 do {
  if ((HEAP8[i1 + 98 | 0] & 1) == 0) {
   i21 = i1 + 272 | 0;
   i19 = (i21 | 0) == 0;
   if (!i19) {
    __ZN3WTF5Mutex4lockEv(i21);
   }
   __ZNKR3WTF6String12isolatedCopyEv(i7, i2);
   __ZNK7WebCore13PageURLRecord8snapshotEb(i8, i26, 1);
   __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore15PageURLSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EES1_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i9, i1 + 296 | 0, i7, i8);
   do {
    if ((HEAP8[i9 + 8 | 0] & 1) == 0) {
     i6 = HEAP32[i9 >> 2] | 0;
     i13 = i8 | 0;
     i28 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     i13 = i6 + 4 | 0;
     i3 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = i28;
     do {
      if ((i3 | 0) != 0) {
       i28 = i3 | 0;
       i13 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
       if ((i13 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i3);
        break;
       } else {
        HEAP32[i28 >> 2] = i13;
        break;
       }
      }
     } while (0);
     i3 = i8 + 4 | 0;
     i13 = HEAP32[i3 >> 2] | 0;
     HEAP32[i3 >> 2] = 0;
     i28 = i6 + 8 | 0;
     i27 = HEAP32[i28 >> 2] | 0;
     HEAP32[i28 >> 2] = i13;
     if ((i27 | 0) == 0) {
      i29 = i3;
      break;
     }
     i13 = i27 | 0;
     i28 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i28 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i27);
      i29 = i3;
      break;
     } else {
      HEAP32[i13 >> 2] = i28;
      i29 = i3;
      break;
     }
    } else {
     i29 = i8 + 4 | 0;
    }
   } while (0);
   i3 = HEAP32[i29 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i28 = i3 | 0;
     i13 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i3);
      break;
     } else {
      HEAP32[i28 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i3 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i13 = i3 | 0;
     i28 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i28 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i3);
      break;
     } else {
      HEAP32[i13 >> 2] = i28;
      break;
     }
    }
   } while (0);
   i3 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i28 = i3 | 0;
     i13 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i3);
      break;
     } else {
      HEAP32[i28 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i3 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     if ((HEAP32[i3 >> 2] | 0) != 1) {
      break;
     }
     i13 = i10 | 0;
     i28 = HEAP32[i3 + 4 >> 2] | 0;
     HEAP32[i13 >> 2] = i28;
     if ((i28 | 0) != 0) {
      i27 = i28 | 0;
      HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 2;
     }
     __ZNK7WebCore10IconRecord8snapshotEb(i11, i3, 1);
     __ZN3WTF7HashMapINS_6StringEN7WebCore12IconSnapshotENS_10StringHashENS_10HashTraitsIS1_EENS5_IS3_EEE3setIS3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_NS_12KeyValuePairIS1_S3_EENS_24KeyValuePairKeyExtractorISD_EES4_NS8_18KeyValuePairTraitsES6_EEEEOS1_OT_(i12, i1 + 316 | 0, i10, i11);
     i27 = HEAP32[i11 + 8 >> 2] | 0;
     do {
      if ((i27 | 0) != 0) {
       i28 = i27 | 0;
       i16 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
       if ((i16 | 0) == 0) {
        __ZN7WebCore12SharedBufferD1Ev(i27);
        __ZN3WTF8fastFreeEPv(i27);
        break;
       } else {
        HEAP32[i28 >> 2] = i16;
        break;
       }
      }
     } while (0);
     i27 = HEAP32[i11 >> 2] | 0;
     do {
      if ((i27 | 0) != 0) {
       i6 = i27 | 0;
       i16 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
       if ((i16 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i27);
        break;
       } else {
        HEAP32[i6 >> 2] = i16;
        break;
       }
      }
     } while (0);
     i27 = HEAP32[i13 >> 2] | 0;
     if ((i27 | 0) == 0) {
      break;
     }
     i16 = i27 | 0;
     i6 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i6 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i27);
      break;
     } else {
      HEAP32[i16 >> 2] = i6;
      break;
     }
    }
   } while (0);
   if (i19) {
    break;
   }
   __ZN3WTF5Mutex6unlockEv(i21);
  }
 } while (0);
 if ((i26 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore13PageURLRecordD1Ev(i26);
 __ZN3WTF8fastFreeEPv(i26);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12IconDatabase25performOpenInitializationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 176 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 40 | 0;
 i7 = i2 + 48 | 0;
 i8 = i2 + 64 | 0;
 i9 = i2 + 72 | 0;
 i10 = i2 + 80 | 0;
 i11 = i2 + 88 | 0;
 i12 = i2 + 96 | 0;
 i13 = i2 + 104 | 0;
 i14 = i2 + 120 | 0;
 i15 = i2 + 128 | 0;
 i16 = i2 + 136 | 0;
 i17 = i2 + 144 | 0;
 i18 = i2 + 152 | 0;
 i19 = i2 + 168 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 108 >> 2] & 31](i1) | 0)) {
  STACKTOP = i2;
  return;
 }
 do {
  if ((HEAP8[H_BASE + 3824 | 0] & 1) != 0) {
   HEAP8[H_BASE + 3824 | 0] = 0;
   if (__ZN7WebCore12IconDatabase14checkIntegrityEv(i1) | 0) {
    break;
   }
   i20 = i1 + 492 | 0;
   __ZN7WebCore14SQLiteDatabase5closeEv(i20);
   i21 = i1 + 100 | 0;
   i22 = (i21 | 0) == 0;
   if (!i22) {
    __ZN3WTF5Mutex4lockEv(i21);
   }
   i23 = i1 + 176 | 0;
   i24 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i24 | 0) == 0) {
     i25 = 0;
    } else {
     i26 = i24 | 0;
     i27 = HEAP32[i26 >> 2] | 0;
     i28 = i27 + 2 | 0;
     HEAP32[i26 >> 2] = i27 + 4;
     if ((i28 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i24);
      i25 = i24;
      break;
     } else {
      HEAP32[i26 >> 2] = i28;
      i25 = i24;
      break;
     }
    }
   } while (0);
   i24 = i16 | 0;
   HEAP32[i24 >> 2] = i25;
   i28 = (i25 | 0) == 0;
   if (!i28) {
    i26 = i25 | 0;
    HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
   }
   __ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i15, i16, H_BASE + 976 | 0);
   i26 = i15 | 0;
   i27 = HEAP32[i26 >> 2] | 0;
   HEAP32[i26 >> 2] = 0;
   i26 = HEAP32[i24 >> 2] | 0;
   do {
    if ((i26 | 0) != 0) {
     i24 = i26 | 0;
     i29 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
     if ((i29 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i26);
      break;
     } else {
      HEAP32[i24 >> 2] = i29;
      break;
     }
    }
   } while (0);
   if ((i27 | 0) == 0) {
    _WTFCrash();
   }
   i26 = i17 | 0;
   HEAP32[i26 >> 2] = i27;
   __ZN7WebCore10deleteFileERKN3WTF6StringE(i17) | 0;
   i29 = HEAP32[i26 >> 2] | 0;
   do {
    if ((i29 | 0) != 0) {
     i26 = i29 | 0;
     i24 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
     if ((i24 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i29);
      break;
     } else {
      HEAP32[i26 >> 2] = i24;
      break;
     }
    }
   } while (0);
   do {
    if (!i28) {
     i29 = i25 | 0;
     i27 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
     if ((i27 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i25);
      break;
     } else {
      HEAP32[i29 >> 2] = i27;
      break;
     }
    }
   } while (0);
   __ZN7WebCore10deleteFileERKN3WTF6StringE(i23) | 0;
   if (!i22) {
    __ZN3WTF5Mutex6unlockEv(i21);
   }
   if (__ZN7WebCore14SQLiteDatabase4openERKN3WTF6StringEb(i20, i23, 0) | 0) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 i25 = i1 + 492 | 0;
 __ZN3WTF6StringC1EPKc(i14, H_BASE + 232 | 0);
 __ZN7WebCore15SQLiteStatementC1ERNS_14SQLiteDatabaseERKN3WTF6StringE(i13, i25, i14);
 i17 = __ZN7WebCore15SQLiteStatement12getColumnIntEi(i13, 0) | 0;
 __ZN7WebCore15SQLiteStatementD1Ev(i13);
 i13 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i14 = i13 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 if ((i17 | 0) > 6) {
  __ZN7WebCore14SQLiteDatabase5closeEv(i25);
  HEAP8[i1 + 180 | 0] = 1;
  STACKTOP = i2;
  return;
 }
 __ZN3WTF6StringC1EPKc(i9, H_BASE + 376 | 0);
 do {
  if (__ZN7WebCore14SQLiteDatabase11tableExistsERKN3WTF6StringE(i25, i9) | 0) {
   __ZN3WTF6StringC1EPKc(i10, H_BASE + 360 | 0);
   do {
    if (__ZN7WebCore14SQLiteDatabase11tableExistsERKN3WTF6StringE(i25, i10) | 0) {
     __ZN3WTF6StringC1EPKc(i11, H_BASE + 352 | 0);
     do {
      if (__ZN7WebCore14SQLiteDatabase11tableExistsERKN3WTF6StringE(i25, i11) | 0) {
       __ZN3WTF6StringC1EPKc(i12, H_BASE + 296 | 0);
       i17 = (__ZN7WebCore14SQLiteDatabase11tableExistsERKN3WTF6StringE(i25, i12) | 0) ^ 1;
       i13 = HEAP32[i12 >> 2] | 0;
       if ((i13 | 0) == 0) {
        i30 = i17;
        break;
       }
       i15 = i13 | 0;
       i14 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
       if ((i14 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i13);
        i30 = i17;
        break;
       } else {
        HEAP32[i15 >> 2] = i14;
        i30 = i17;
        break;
       }
      } else {
       i30 = 1;
      }
     } while (0);
     i17 = HEAP32[i11 >> 2] | 0;
     if ((i17 | 0) == 0) {
      i31 = i30;
      break;
     }
     i14 = i17 | 0;
     i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      i31 = i30;
      break;
     } else {
      HEAP32[i14 >> 2] = i15;
      i31 = i30;
      break;
     }
    } else {
     i31 = 1;
    }
   } while (0);
   i23 = HEAP32[i10 >> 2] | 0;
   if ((i23 | 0) == 0) {
    i32 = i31;
    break;
   }
   i20 = i23 | 0;
   i21 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    i32 = i31;
    break;
   } else {
    HEAP32[i20 >> 2] = i21;
    i32 = i31;
    break;
   }
  } else {
   i32 = 1;
  }
 } while (0);
 i31 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i31 | 0) != 0) {
   i9 = i31 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i31);
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    break;
   }
  }
 } while (0);
 if (i32) {
  i33 = 60;
 } else {
  __ZN3WTF6StringC1EPKc(i8, H_BASE + 232 | 0);
  __ZN7WebCore15SQLiteStatementC1ERNS_14SQLiteDatabaseERKN3WTF6StringE(i7, i25, i8);
  i32 = __ZN7WebCore15SQLiteStatement12getColumnIntEi(i7, 0) | 0;
  __ZN7WebCore15SQLiteStatementD1Ev(i7);
  i7 = HEAP32[i8 >> 2] | 0;
  do {
   if ((i7 | 0) != 0) {
    i8 = i7 | 0;
    i31 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
    if ((i31 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i7);
     break;
    } else {
     HEAP32[i8 >> 2] = i31;
     break;
    }
   }
  } while (0);
  if ((i32 | 0) <= 5) {
   i33 = 60;
  }
 }
 if ((i33 | 0) == 60) {
  __ZN7WebCore14SQLiteDatabase14clearAllTablesEv(i25);
  __ZN7WebCoreL20createDatabaseTablesERNS_14SQLiteDatabaseE(i25);
 }
 __ZN3WTF6StringC1EPKc(i19, H_BASE + 320 | 0);
 __ZN7WebCore15SQLiteStatementC1ERNS_14SQLiteDatabaseERKN3WTF6StringE(i18, i25, i19);
 __ZN7WebCore15SQLiteStatement14executeCommandEv(i18) | 0;
 __ZN7WebCore15SQLiteStatementD1Ev(i18);
 i18 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i19 = i18 | 0;
   i33 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i33 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i19 >> 2] = i33;
    break;
   }
  }
 } while (0);
 if (!(__ZN7WebCore20canExcludeFromBackupEv() | 0)) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF6StringC1EPKc(i6, H_BASE + 1248 | 0);
 __ZN7WebCore15SQLiteStatementC1ERNS_14SQLiteDatabaseERKN3WTF6StringE(i5, i25, i6);
 i18 = (__ZN7WebCore15SQLiteStatement12getColumnIntEi(i5, 0) | 0) == 0;
 __ZN7WebCore15SQLiteStatementD1Ev(i5);
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 | 0;
   i33 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i33 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i6 >> 2] = i33;
    break;
   }
  }
 } while (0);
 if (!i18) {
  STACKTOP = i2;
  return;
 }
 if (!(__ZN7WebCore17excludeFromBackupERKN3WTF6StringE(i1 + 176 | 0) | 0)) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 1168 | 0);
 __ZN7WebCore15SQLiteStatementC1ERNS_14SQLiteDatabaseERKN3WTF6StringE(i3, i25, i4);
 __ZN7WebCore15SQLiteStatement14executeCommandEv(i3) | 0;
 __ZN7WebCore15SQLiteStatementD1Ev(i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i25 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i25 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i4 >> 2] = i25;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore12IconDatabase15writeToDatabaseEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 32 | 0;
 i6 = i5;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = i9;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i12 = i11;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = i1 + 188 | 0;
 i15 = (i14 | 0) == 0;
 if (!i15) {
  __ZN3WTF5Mutex4lockEv(i14);
 }
 i16 = i3 | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = i3 + 4 | 0;
 HEAP32[i17 >> 2] = 0;
 i18 = i3 + 8 | 0;
 HEAP32[i18 >> 2] = 0;
 i19 = i4 | 0;
 HEAP32[i19 >> 2] = 0;
 i20 = i4 + 4 | 0;
 HEAP32[i20 >> 2] = 0;
 i21 = i4 + 8 | 0;
 HEAP32[i21 >> 2] = 0;
 i22 = i1 + 272 | 0;
 i23 = (i22 | 0) == 0;
 if (!i23) {
  __ZN3WTF5Mutex4lockEv(i22);
 }
 i24 = i1 + 316 | 0;
 i25 = i24 | 0;
 i26 = HEAP32[i25 >> 2] | 0;
 i27 = i1 + 320 | 0;
 i28 = HEAP32[i27 >> 2] | 0;
 i29 = i26 + (i28 << 4) | 0;
 L7 : do {
  if ((HEAP32[i1 + 328 >> 2] | 0) == 0) {
   i30 = i29;
  } else {
   if ((i28 | 0) == 0) {
    i30 = i26;
    break;
   } else {
    i31 = i26;
   }
   while (1) {
    i32 = HEAP32[i31 >> 2] | 0;
    if (!((i32 | 0) == (-1 | 0) | (i32 | 0) == 0)) {
     i30 = i31;
     break L7;
    }
    i32 = i31 + 16 | 0;
    if ((i32 | 0) == (i29 | 0)) {
     i30 = i29;
     break;
    } else {
     i31 = i32;
    }
   }
  }
 } while (0);
 i31 = i29;
 i29 = 0;
 i26 = i31;
 HEAP32[i5 >> 2] = i30 | i29;
 HEAP32[i5 + 4 >> 2] = i26;
 HEAP32[i7 >> 2] = i29 | i31;
 HEAP32[i7 + 4 >> 2] = i26;
 __ZN3WTF6VectorIN7WebCore12IconSnapshotELj0ENS_15CrashOnOverflowEE11appendRangeINS_23HashTableValuesIteratorINS_9HashTableINS_6StringENS_12KeyValuePairIS8_S2_EENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS8_S2_SD_NS_10HashTraitsIS8_EENSF_IS2_EEE18KeyValuePairTraitsESG_EES8_S2_EEEEvT_SM_(i3, i6, i8);
 i8 = HEAP32[i25 >> 2] | 0;
 if ((i8 | 0) != 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore12IconSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E15deallocateTableEPS5_i(i8, HEAP32[i27 >> 2] | 0);
  _memset(i24 | 0, 0, 16) | 0;
 }
 i24 = i1 + 296 | 0;
 i27 = i24 | 0;
 i8 = HEAP32[i27 >> 2] | 0;
 i25 = i1 + 300 | 0;
 i6 = HEAP32[i25 >> 2] | 0;
 i3 = i8 + (i6 * 12 & -1) | 0;
 L16 : do {
  if ((HEAP32[i1 + 308 >> 2] | 0) == 0) {
   i33 = i3;
  } else {
   if ((i6 | 0) == 0) {
    i33 = i8;
    break;
   } else {
    i34 = i8;
   }
   while (1) {
    i26 = HEAP32[i34 >> 2] | 0;
    if (!((i26 | 0) == (-1 | 0) | (i26 | 0) == 0)) {
     i33 = i34;
     break L16;
    }
    i26 = i34 + 12 | 0;
    if ((i26 | 0) == (i3 | 0)) {
     i33 = i3;
     break;
    } else {
     i34 = i26;
    }
   }
  }
 } while (0);
 i34 = i3;
 i3 = 0;
 i8 = i34;
 HEAP32[i9 >> 2] = i33 | i3;
 HEAP32[i9 + 4 >> 2] = i8;
 HEAP32[i11 >> 2] = i3 | i34;
 HEAP32[i11 + 4 >> 2] = i8;
 __ZN3WTF6VectorIN7WebCore15PageURLSnapshotELj0ENS_15CrashOnOverflowEE11appendRangeINS_23HashTableValuesIteratorINS_9HashTableINS_6StringENS_12KeyValuePairIS8_S2_EENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS8_S2_SD_NS_10HashTraitsIS8_EENSF_IS2_EEE18KeyValuePairTraitsESG_EES8_S2_EEEEvT_SM_(i4, i10, i12);
 i12 = HEAP32[i27 >> 2] | 0;
 if ((i12 | 0) != 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore15PageURLSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E15deallocateTableEPS5_i(i12, HEAP32[i25 >> 2] | 0);
  _memset(i24 | 0, 0, 16) | 0;
 }
 if (!i23) {
  __ZN3WTF5Mutex6unlockEv(i22);
 }
 i22 = HEAP32[i18 >> 2] | 0;
 i23 = (i22 | 0) == 0;
 if (i23) {
  if ((HEAP32[i21 >> 2] | 0) == 0) {
   i35 = 0;
  } else {
   i36 = 21;
  }
 } else {
  i36 = 21;
 }
 if ((i36 | 0) == 21) {
  i35 = 1;
 }
 __ZN7WebCore17SQLiteTransactionC1ERNS_14SQLiteDatabaseEb(i13, i1 + 492 | 0, 0);
 __ZN7WebCore17SQLiteTransaction5beginEv(i13);
 if (i23) {
  i37 = 0;
 } else {
  i23 = HEAP32[i16 >> 2] | 0;
  i36 = 0;
  while (1) {
   __ZN7WebCore12IconDatabase30writeIconSnapshotToSQLDatabaseERKNS_12IconSnapshotE(i1, i23 + (i36 * 12 & -1) | 0);
   i24 = i36 + 1 | 0;
   if (i24 >>> 0 < i22 >>> 0) {
    i36 = i24;
   } else {
    i37 = i22;
    break;
   }
  }
 }
 i22 = HEAP32[i21 >> 2] | 0;
 L38 : do {
  if ((i22 | 0) == 0) {
   i38 = 0;
  } else {
   i36 = HEAP32[i19 >> 2] | 0;
   i23 = 0;
   while (1) {
    i24 = HEAP32[i36 + (i23 << 3) + 4 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i39 = 1;
    } else {
     i39 = (HEAP32[i24 + 4 >> 2] | 0) == 0;
    }
    if (i22 >>> 0 <= i23 >>> 0) {
     break;
    }
    i24 = i36 + (i23 << 3) | 0;
    do {
     if (i39) {
      __ZN7WebCore12IconDatabase28removePageURLFromSQLDatabaseERKN3WTF6StringE(i1, i24 | 0);
     } else {
      i25 = i36 + (i23 << 3) + 4 | 0;
      i12 = i24 | 0;
      i27 = __ZN7WebCore12IconDatabase34getIconIDForIconURLFromSQLDatabaseERKN3WTF6StringE(i1, i25) | 0;
      i10 = tempRet0;
      if ((i27 | 0) == 0 & (i10 | 0) == 0) {
       i4 = __ZN7WebCore12IconDatabase23addIconURLToSQLDatabaseERKN3WTF6StringE(i1, i25) | 0;
       i25 = tempRet0;
       if ((i4 | 0) == 0 & (i25 | 0) == 0) {
        break;
       } else {
        i40 = i25;
        i41 = i4;
       }
      } else {
       i40 = i10;
       i41 = i27;
      }
      __ZN7WebCore12IconDatabase32setIconIDForPageURLInSQLDatabaseExRKN3WTF6StringE(i1, i41, i40, i12);
     }
    } while (0);
    i24 = i23 + 1 | 0;
    if (i24 >>> 0 < i22 >>> 0) {
     i23 = i24;
    } else {
     i38 = i22;
     break L38;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
   return 0;
  }
 } while (0);
 __ZN7WebCore17SQLiteTransaction6commitEv(i13);
 __ZN7WebCore17SQLiteTransactionD1Ev(i13);
 i13 = HEAP32[i19 >> 2] | 0;
 if ((i38 | 0) != 0) {
  i22 = i13 + (i38 << 3) | 0;
  i38 = i13;
  while (1) {
   i40 = HEAP32[i38 + 4 >> 2] | 0;
   do {
    if ((i40 | 0) != 0) {
     i41 = i40 | 0;
     i39 = (HEAP32[i41 >> 2] | 0) - 2 | 0;
     if ((i39 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i40);
      break;
     } else {
      HEAP32[i41 >> 2] = i39;
      break;
     }
    }
   } while (0);
   i40 = HEAP32[i38 >> 2] | 0;
   do {
    if ((i40 | 0) != 0) {
     i39 = i40 | 0;
     i41 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
     if ((i41 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i40);
      break;
     } else {
      HEAP32[i39 >> 2] = i41;
      break;
     }
    }
   } while (0);
   i38 = i38 + 8 | 0;
   if ((i38 | 0) == (i22 | 0)) {
    break;
   }
  }
  HEAP32[i21 >> 2] = 0;
 }
 if ((i13 | 0) != 0) {
  HEAP32[i19 >> 2] = 0;
  HEAP32[i20 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i13);
 }
 i13 = HEAP32[i16 >> 2] | 0;
 if ((i37 | 0) != 0) {
  i20 = i13 + (i37 * 12 & -1) | 0;
  i37 = i13;
  while (1) {
   i19 = HEAP32[i37 + 8 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i21 = i19 | 0;
     i22 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     if ((i22 | 0) == 0) {
      __ZN7WebCore12SharedBufferD1Ev(i19);
      __ZN3WTF8fastFreeEPv(i19);
      break;
     } else {
      HEAP32[i21 >> 2] = i22;
      break;
     }
    }
   } while (0);
   i19 = HEAP32[i37 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i22 = i19 | 0;
     i21 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
     if ((i21 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i19);
      break;
     } else {
      HEAP32[i22 >> 2] = i21;
      break;
     }
    }
   } while (0);
   i37 = i37 + 12 | 0;
   if ((i37 | 0) == (i20 | 0)) {
    break;
   }
  }
  HEAP32[i18 >> 2] = 0;
 }
 if ((i13 | 0) != 0) {
  HEAP32[i16 >> 2] = 0;
  HEAP32[i17 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i13);
 }
 if (!i15) {
  __ZN3WTF5Mutex6unlockEv(i14);
 }
 if (!i35) {
  STACKTOP = i2;
  return i35 | 0;
 }
 __ZN7WebCore12IconDatabase24checkForDanglingPageURLsEb(i1, 0);
 STACKTOP = i2;
 return i35 | 0;
}
function __ZN7WebCore12IconDatabase27performRetainIconForPageURLERKN3WTF6StringEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 40 | 0;
 i10 = i4 + 48 | 0;
 i11 = i4 + 64 | 0;
 i12 = i4 + 72 | 0;
 i13 = i1 + 232 | 0;
 i14 = HEAP32[i1 + 240 >> 2] | 0;
 i15 = HEAP32[i13 >> 2] | 0;
 i16 = i2 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 i18 = HEAP32[i17 + 16 >> 2] | 0;
 if (i18 >>> 0 > 127 >>> 0) {
  i19 = i18 >>> 7;
 } else {
  i19 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i17) | 0;
 }
 L5 : do {
  if ((i15 | 0) == 0) {
   i20 = 10;
  } else {
   i17 = (i19 >>> 23) + ~i19 | 0;
   i18 = i17 << 12 ^ i17;
   i17 = i18 >>> 7 ^ i18;
   i18 = i17 << 2 ^ i17;
   i17 = i18 >>> 20 ^ i18 | 1;
   i18 = i19;
   i21 = 0;
   while (1) {
    i22 = i18 & i14;
    i23 = i15 + (i22 << 3) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    i25 = i24;
    if ((i25 | 0) == 0) {
     i20 = 10;
     break L5;
    } else if ((i25 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i24, HEAP32[i16 >> 2] | 0) | 0) {
      break;
     }
    }
    i24 = (i21 | 0) == 0 ? i17 : i21;
    i18 = i24 + i22 | 0;
    i21 = i24;
   }
   if ((i23 | 0) == 0) {
    i20 = 10;
    break;
   }
   i21 = HEAP32[i15 + (i22 << 3) + 4 >> 2] | 0;
   HEAP32[i5 >> 2] = i21;
   i18 = i6 | 0;
   HEAP32[i18 >> 2] = 0;
   if ((i21 | 0) == 0) {
    i26 = i18;
    i20 = 12;
   } else {
    i27 = i21;
    i28 = i18;
   }
  }
 } while (0);
 if ((i20 | 0) == 10) {
  HEAP32[i5 >> 2] = 0;
  i22 = i6 | 0;
  HEAP32[i22 >> 2] = 0;
  i26 = i22;
  i20 = 12;
 }
 do {
  if ((i20 | 0) == 12) {
   __ZNKR3WTF6String12isolatedCopyEv(i7, i2);
   i22 = i7 | 0;
   i15 = HEAP32[i22 >> 2] | 0;
   HEAP32[i22 >> 2] = 0;
   HEAP32[i26 >> 2] = i15;
   i15 = __ZN3WTF10fastMallocEj(12) | 0;
   __ZN7WebCore13PageURLRecordC1ERKN3WTF6StringE(i15, i6);
   HEAP32[i5 >> 2] = i15;
   __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore13PageURLRecordEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS1_RS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i8, i13 | 0, i6, i5);
   i15 = HEAP32[i5 >> 2] | 0;
   if ((HEAP8[i8 + 8 | 0] & 1) != 0) {
    i27 = i15;
    i28 = i26;
    break;
   }
   HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] = i15;
   i27 = i15;
   i28 = i26;
  }
 } while (0);
 i26 = i27 + 8 | 0;
 i8 = HEAP32[i26 >> 2] | 0;
 HEAP32[i26 >> 2] = i8 + i3;
 do {
  if ((i8 | 0) <= 0) {
   do {
    if ((HEAP32[i28 >> 2] | 0) == 0) {
     __ZNKR3WTF6String12isolatedCopyEv(i9, i2);
     i3 = i9 | 0;
     i26 = HEAP32[i3 >> 2] | 0;
     HEAP32[i3 >> 2] = 0;
     i5 = HEAP32[i28 >> 2] | 0;
     HEAP32[i28 >> 2] = i26;
     do {
      if ((i5 | 0) != 0) {
       i26 = i5 | 0;
       i13 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
       if ((i13 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i5);
        break;
       } else {
        HEAP32[i26 >> 2] = i13;
        break;
       }
      }
     } while (0);
     i5 = HEAP32[i3 >> 2] | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     i13 = i5 | 0;
     i26 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i26 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i13 >> 2] = i26;
      break;
     }
    }
   } while (0);
   __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i10, i1 + 252 | 0, i6, i6);
   if ((HEAP8[i1 + 182 | 0] & 1) == 0) {
    break;
   }
   i26 = i1 + 272 | 0;
   i13 = (i26 | 0) == 0;
   if (!i13) {
    __ZN3WTF5Mutex4lockEv(i26);
   }
   L39 : do {
    if ((HEAP8[i1 + 98 | 0] & 1) == 0) {
     i5 = i1 + 296 | 0;
     i7 = HEAP32[i5 >> 2] | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     i20 = HEAP32[i1 + 304 >> 2] | 0;
     i15 = HEAP32[i28 >> 2] | 0;
     i22 = HEAP32[i15 + 16 >> 2] | 0;
     if (i22 >>> 0 > 127 >>> 0) {
      i29 = i22 >>> 7;
     } else {
      i29 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i15) | 0;
     }
     i15 = (i29 >>> 23) + ~i29 | 0;
     i22 = i15 << 12 ^ i15;
     i15 = i22 >>> 7 ^ i22;
     i22 = i15 << 2 ^ i15;
     i15 = i22 >>> 20 ^ i22 | 1;
     i22 = i29;
     i23 = 0;
     while (1) {
      i16 = i22 & i20;
      i30 = i7 + (i16 * 12 & -1) | 0;
      i14 = HEAP32[i30 >> 2] | 0;
      i19 = i14;
      if ((i19 | 0) == 0) {
       break L39;
      } else if ((i19 | 0) != (-1 | 0)) {
       if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i28 >> 2] | 0) | 0) {
        break;
       }
      }
      i14 = (i23 | 0) == 0 ? i15 : i23;
      i22 = i14 + i16 | 0;
      i23 = i14;
     }
     if ((i30 | 0) == 0) {
      break;
     }
     __ZNK7WebCore13PageURLRecord8snapshotEb(i11, i27, 0);
     __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore15PageURLSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS1_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i12, i5 | 0, i6, i11);
     do {
      if ((HEAP8[i12 + 8 | 0] & 1) == 0) {
       i23 = HEAP32[i12 >> 2] | 0;
       i22 = i11 | 0;
       i15 = HEAP32[i22 >> 2] | 0;
       HEAP32[i22 >> 2] = 0;
       i22 = i23 + 4 | 0;
       i7 = HEAP32[i22 >> 2] | 0;
       HEAP32[i22 >> 2] = i15;
       do {
        if ((i7 | 0) != 0) {
         i15 = i7 | 0;
         i22 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
         if ((i22 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i7);
          break;
         } else {
          HEAP32[i15 >> 2] = i22;
          break;
         }
        }
       } while (0);
       i7 = i11 + 4 | 0;
       i22 = HEAP32[i7 >> 2] | 0;
       HEAP32[i7 >> 2] = 0;
       i15 = i23 + 8 | 0;
       i20 = HEAP32[i15 >> 2] | 0;
       HEAP32[i15 >> 2] = i22;
       if ((i20 | 0) == 0) {
        i31 = i7;
        break;
       }
       i22 = i20 | 0;
       i15 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
       if ((i15 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i20);
        i31 = i7;
        break;
       } else {
        HEAP32[i22 >> 2] = i15;
        i31 = i7;
        break;
       }
      } else {
       i31 = i11 + 4 | 0;
      }
     } while (0);
     i5 = HEAP32[i31 >> 2] | 0;
     do {
      if ((i5 | 0) != 0) {
       i7 = i5 | 0;
       i15 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
       if ((i15 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i5);
        break;
       } else {
        HEAP32[i7 >> 2] = i15;
        break;
       }
      }
     } while (0);
     i5 = HEAP32[i11 >> 2] | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     i15 = i5 | 0;
     i7 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i15 >> 2] = i7;
      break;
     }
    }
   } while (0);
   if (i13) {
    break;
   }
   __ZN3WTF5Mutex6unlockEv(i26);
  }
 } while (0);
 i11 = HEAP32[i28 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i28 = i11 | 0;
 i31 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
 if ((i31 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i11);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i28 >> 2] = i31;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCoreL20createDatabaseTablesERNS_14SQLiteDatabaseE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 i11 = i2 + 64 | 0;
 i12 = i2 + 80 | 0;
 i13 = i2 + 88 | 0;
 __ZN3WTF6StringC1EPKc(i3, H_BASE + 1040 | 0);
 i14 = __ZN7WebCore14SQLiteDatabase14executeCommandERKN3WTF6StringE(i1, i3) | 0;
 i15 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i3 = i15 | 0;
   i16 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i3 >> 2] = i16;
    break;
   }
  }
 } while (0);
 if (!i14) {
  __ZN7WebCore14SQLiteDatabase5closeEv(i1);
  STACKTOP = i2;
  return;
 }
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 992 | 0);
 i14 = __ZN7WebCore14SQLiteDatabase14executeCommandERKN3WTF6StringE(i1, i4) | 0;
 i15 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i4 = i15 | 0;
   i16 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i4 >> 2] = i16;
    break;
   }
  }
 } while (0);
 if (!i14) {
  __ZN7WebCore14SQLiteDatabase5closeEv(i1);
  STACKTOP = i2;
  return;
 }
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 808 | 0);
 i14 = __ZN7WebCore14SQLiteDatabase14executeCommandERKN3WTF6StringE(i1, i5) | 0;
 i15 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i5 = i15 | 0;
   i16 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i5 >> 2] = i16;
    break;
   }
  }
 } while (0);
 if (!i14) {
  __ZN7WebCore14SQLiteDatabase5closeEv(i1);
  STACKTOP = i2;
  return;
 }
 __ZN3WTF6StringC1EPKc(i6, H_BASE + 752 | 0);
 i14 = __ZN7WebCore14SQLiteDatabase14executeCommandERKN3WTF6StringE(i1, i6) | 0;
 i15 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i6 = i15 | 0;
   i16 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i6 >> 2] = i16;
    break;
   }
  }
 } while (0);
 if (!i14) {
  __ZN7WebCore14SQLiteDatabase5closeEv(i1);
  STACKTOP = i2;
  return;
 }
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 648 | 0);
 i14 = __ZN7WebCore14SQLiteDatabase14executeCommandERKN3WTF6StringE(i1, i7) | 0;
 i15 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i7 = i15 | 0;
   i16 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i7 >> 2] = i16;
    break;
   }
  }
 } while (0);
 if (!i14) {
  __ZN7WebCore14SQLiteDatabase5closeEv(i1);
  STACKTOP = i2;
  return;
 }
 __ZN3WTF6StringC1EPKc(i8, H_BASE + 592 | 0);
 i14 = __ZN7WebCore14SQLiteDatabase14executeCommandERKN3WTF6StringE(i1, i8) | 0;
 i15 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i8 = i15 | 0;
   i16 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i8 >> 2] = i16;
    break;
   }
  }
 } while (0);
 if (!i14) {
  __ZN7WebCore14SQLiteDatabase5closeEv(i1);
  STACKTOP = i2;
  return;
 }
 __ZN3WTF6StringC1EPKc(i9, H_BASE + 456 | 0);
 i14 = __ZN7WebCore14SQLiteDatabase14executeCommandERKN3WTF6StringE(i1, i9) | 0;
 i15 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i9 = i15 | 0;
   i16 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i9 >> 2] = i16;
    break;
   }
  }
 } while (0);
 if (!i14) {
  __ZN7WebCore14SQLiteDatabase5closeEv(i1);
  STACKTOP = i2;
  return;
 }
 __ZN3WTF6StringC1EPKc(i12, H_BASE + 400 | 0);
 __ZN3WTF6String6numberEi(i13, 6);
 i14 = i12 | 0;
 i12 = HEAP32[i14 >> 2] | 0;
 i15 = (i12 | 0) == 0;
 if (!i15) {
  i16 = i12 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
 }
 i16 = i13 | 0;
 i13 = HEAP32[i16 >> 2] | 0;
 i9 = (i13 | 0) == 0;
 if (!i9) {
  i8 = i13 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 if (!i15) {
  i8 = i12 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 do {
  if (!i9) {
   i8 = i13 | 0;
   i7 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i7 + 2;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i8 >> 2] = i7;
    break;
   }
  }
 } while (0);
 if (!i15) {
  i7 = i12 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
  if ((i8 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i12);
   i17 = HEAP32[i7 >> 2] | 0;
  } else {
   HEAP32[i7 >> 2] = i8;
   i17 = i8;
  }
  HEAP32[i7 >> 2] = i17 + 2;
 }
 if (!i9) {
  i17 = i13 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
 }
 i17 = i11 | 0;
 HEAP32[i17 >> 2] = i12;
 if (!i15) {
  i7 = i12 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i11 + 4 | 0;
 HEAP32[i7 >> 2] = i13;
 do {
  if (i9) {
   HEAP32[i11 + 8 >> 2] = H_BASE + 392;
  } else {
   i8 = i13 | 0;
   i6 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i6 + 2;
   HEAP32[i11 + 8 >> 2] = H_BASE + 392;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i8 >> 2] = i6;
    break;
   }
  }
 } while (0);
 do {
  if (!i15) {
   i6 = i12 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i6 >> 2] = i8;
    break;
   }
  }
 } while (0);
 __ZNK3WTF12StringAppendINS0_INS_6StringES1_EEPKcEcvS1_Ev(i10, i11);
 i11 = __ZN7WebCore14SQLiteDatabase14executeCommandERKN3WTF6StringE(i1, i10) | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i10 = i8 | 0;
   i6 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i10 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i7 = i8 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i7 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i17 = i8 | 0;
   i6 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i17 >> 2] = i6;
    break;
   }
  }
 } while (0);
 do {
  if (!i9) {
   i8 = i13 | 0;
   i6 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i8 >> 2] = i6;
    break;
   }
  }
 } while (0);
 do {
  if (!i15) {
   i13 = i12 | 0;
   i9 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i13 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i16 = i12 | 0;
   i15 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i16 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i14 = i12 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 if (i11) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore14SQLiteDatabase5closeEv(i1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore12IconDatabase25synchronousIconForPageURLERKN3WTF6StringERKNS_7IntSizeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 i10 = i4 + 48 | 0;
 i11 = i4 + 64 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 108 >> 2] & 31](i1) | 0)) {
  i12 = 0;
  STACKTOP = i4;
  return i12 | 0;
 }
 if (!(__ZN7WebCore19documentCanHaveIconERKN3WTF6StringE(i2) | 0)) {
  i12 = 0;
  STACKTOP = i4;
  return i12 | 0;
 }
 i13 = i1 + 188 | 0;
 i14 = (i13 | 0) == 0;
 if (!i14) {
  __ZN3WTF5Mutex4lockEv(i13);
 }
 __ZN7WebCore12IconDatabase40performPendingRetainAndReleaseOperationsEv(i1);
 i15 = i5 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = HEAP32[i1 + 240 >> 2] | 0;
 i17 = HEAP32[i1 + 232 >> 2] | 0;
 i18 = i2 | 0;
 i19 = HEAP32[i18 >> 2] | 0;
 i20 = HEAP32[i19 + 16 >> 2] | 0;
 if (i20 >>> 0 > 127 >>> 0) {
  i21 = i20 >>> 7;
 } else {
  i21 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i19) | 0;
 }
 L14 : do {
  if ((i17 | 0) == 0) {
   i22 = 15;
  } else {
   i19 = (i21 >>> 23) + ~i21 | 0;
   i20 = i19 << 12 ^ i19;
   i19 = i20 >>> 7 ^ i20;
   i20 = i19 << 2 ^ i19;
   i19 = i20 >>> 20 ^ i20 | 1;
   i20 = i21;
   i23 = 0;
   while (1) {
    i24 = i20 & i16;
    i25 = i17 + (i24 << 3) | 0;
    i26 = HEAP32[i25 >> 2] | 0;
    i27 = i26;
    if ((i27 | 0) == 0) {
     i22 = 15;
     break L14;
    } else if ((i27 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i26, HEAP32[i18 >> 2] | 0) | 0) {
      break;
     }
    }
    i26 = (i23 | 0) == 0 ? i19 : i23;
    i20 = i26 + i24 | 0;
    i23 = i26;
   }
   if ((i25 | 0) == 0) {
    i22 = 15;
    break;
   }
   i23 = HEAP32[i17 + (i24 << 3) + 4 >> 2] | 0;
   if ((i23 | 0) == 0) {
    i22 = 15;
   } else {
    i28 = i23;
    i22 = 30;
   }
  }
 } while (0);
 do {
  if ((i22 | 0) == 15) {
   __ZNKR3WTF6String12isolatedCopyEv(i6, i2);
   i24 = i6 | 0;
   i17 = HEAP32[i24 >> 2] | 0;
   HEAP32[i24 >> 2] = 0;
   i25 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = i17;
   do {
    if ((i25 | 0) != 0) {
     i17 = i25 | 0;
     i18 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i18 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i25);
      break;
     } else {
      HEAP32[i17 >> 2] = i18;
      break;
     }
    }
   } while (0);
   i25 = HEAP32[i24 >> 2] | 0;
   do {
    if ((i25 | 0) != 0) {
     i18 = i25 | 0;
     i17 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i25);
      break;
     } else {
      HEAP32[i18 >> 2] = i17;
      break;
     }
    }
   } while (0);
   i25 = __ZN7WebCore12IconDatabase24getOrCreatePageURLRecordERKN3WTF6StringE(i1, i5) | 0;
   if ((i25 | 0) != 0) {
    i28 = i25;
    i22 = 30;
    break;
   }
   i25 = i1 + 336 | 0;
   i24 = (i25 | 0) == 0;
   if (!i24) {
    __ZN3WTF5Mutex4lockEv(i25);
   }
   if ((HEAP8[i1 + 182 | 0] & 1) == 0) {
    __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i7, i1 + 380 | 0, i5, i5);
   }
   if (i24) {
    i29 = 0;
    break;
   }
   __ZN3WTF5Mutex6unlockEv(i25);
   i29 = 0;
  }
 } while (0);
 do {
  if ((i22 | 0) == 30) {
   i7 = HEAP32[i28 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = i7;
   if ((i7 | 0) == 0) {
    i29 = 0;
    break;
   }
   if ((__ZN7WebCore10IconRecord15imageDataStatusEv(i7) | 0) != 2) {
    if ((HEAP32[i3 >> 2] | 0) == 0) {
     if ((HEAP32[i3 + 4 >> 2] | 0) == 0) {
      i29 = 0;
      break;
     }
    }
    i29 = __ZN7WebCore10IconRecord5imageERKNS_7IntSizeE(i7, i3) | 0;
    break;
   }
   do {
    if ((HEAP32[i15 >> 2] | 0) == 0) {
     __ZNKR3WTF6String12isolatedCopyEv(i9, i2);
     i7 = i9 | 0;
     i6 = HEAP32[i7 >> 2] | 0;
     HEAP32[i7 >> 2] = 0;
     i25 = HEAP32[i15 >> 2] | 0;
     HEAP32[i15 >> 2] = i6;
     do {
      if ((i25 | 0) != 0) {
       i6 = i25 | 0;
       i24 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
       if ((i24 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i25);
        break;
       } else {
        HEAP32[i6 >> 2] = i24;
        break;
       }
      }
     } while (0);
     i25 = HEAP32[i7 >> 2] | 0;
     if ((i25 | 0) == 0) {
      break;
     }
     i24 = i25 | 0;
     i6 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
     if ((i6 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i25);
      break;
     } else {
      HEAP32[i24 >> 2] = i6;
      break;
     }
    }
   } while (0);
   i6 = i1 + 336 | 0;
   i24 = (i6 | 0) == 0;
   if (!i24) {
    __ZN3WTF5Mutex4lockEv(i6);
   }
   __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i10, i1 + 380 | 0, i5, i5);
   __ZN3WTF9HashTableIPN7WebCore10IconRecordES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i11, i1 + 400 | 0, i8, i8);
   i25 = i1 + 100 | 0;
   i17 = (i25 | 0) == 0;
   if (!i17) {
    __ZN3WTF5Mutex4lockEv(i25);
   }
   i18 = i1 + 184 | 0;
   if ((HEAP8[i18] & 1) == 0) {
    HEAP8[i18] = 1;
   }
   HEAP8[i1 + 183 | 0] = 1;
   __ZN3WTF15ThreadCondition6signalEv(i1 + 124 | 0);
   if (!i17) {
    __ZN3WTF5Mutex6unlockEv(i25);
   }
   if (i24) {
    i29 = 0;
    break;
   }
   __ZN3WTF5Mutex6unlockEv(i6);
   i29 = 0;
  }
 } while (0);
 i1 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i15 = i1 | 0;
   i8 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i15 >> 2] = i8;
    break;
   }
  }
 } while (0);
 if (i14) {
  i12 = i29;
  STACKTOP = i4;
  return i12 | 0;
 }
 __ZN3WTF5Mutex6unlockEv(i13);
 i12 = i29;
 STACKTOP = i4;
 return i12 | 0;
}
function __ZN7WebCore12IconDatabase14removeAllIconsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 108 >> 2] & 31](i1) | 0)) {
  STACKTOP = i2;
  return;
 }
 i4 = i1 + 188 | 0;
 i5 = (i4 | 0) == 0;
 if (!i5) {
  __ZN3WTF5Mutex4lockEv(i4);
 }
 i6 = HEAP32[i1 + 232 >> 2] | 0;
 i7 = HEAP32[i1 + 236 >> 2] | 0;
 i8 = i6 + (i7 << 3) | 0;
 L7 : do {
  if ((HEAP32[i1 + 244 >> 2] | 0) != 0) {
   L9 : do {
    if ((i7 | 0) == 0) {
     i9 = i6;
    } else {
     i10 = i6;
     while (1) {
      i11 = HEAP32[i10 >> 2] | 0;
      if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
       i9 = i10;
       break L9;
      }
      i10 = i10 + 8 | 0;
      if ((i10 | 0) == (i8 | 0)) {
       break L7;
      }
     }
    }
   } while (0);
   if ((i9 | 0) == (i8 | 0)) {
    break;
   }
   i10 = i3 | 0;
   i11 = i9;
   while (1) {
    i12 = HEAP32[i11 + 4 >> 2] | 0;
    HEAP32[i10 >> 2] = 0;
    __ZN7WebCore13PageURLRecord13setIconRecordEN3WTF10PassRefPtrINS_10IconRecordEEE(i12, i3);
    i12 = HEAP32[i10 >> 2] | 0;
    do {
     if ((i12 | 0) != 0) {
      i13 = i12 | 0;
      i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
      if ((i14 | 0) == 0) {
       __ZN7WebCore10IconRecordD1Ev(i12);
       __ZN3WTF8fastFreeEPv(i12);
       break;
      } else {
       HEAP32[i13 >> 2] = i14;
       break;
      }
     }
    } while (0);
    i12 = i11 + 8 | 0;
    if ((i12 | 0) == (i8 | 0)) {
     break L7;
    } else {
     i15 = i12;
    }
    while (1) {
     i12 = HEAP32[i15 >> 2] | 0;
     if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
      break;
     }
     i12 = i15 + 8 | 0;
     if ((i12 | 0) == (i8 | 0)) {
      break L7;
     } else {
      i15 = i12;
     }
    }
    if ((i15 | 0) == (i8 | 0)) {
     break;
    } else {
     i11 = i15;
    }
   }
  }
 } while (0);
 i15 = i1 + 212 | 0;
 i8 = HEAP32[i15 >> 2] | 0;
 if ((i8 | 0) != 0) {
  i3 = HEAP32[i1 + 216 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i9 = 0;
   while (1) {
    i6 = HEAP32[i8 + (i9 << 3) >> 2] | 0;
    i7 = i6;
    do {
     if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
      i11 = i6 | 0;
      i10 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
      if ((i10 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i6);
       break;
      } else {
       HEAP32[i11 >> 2] = i10;
       break;
      }
     }
    } while (0);
    i9 = i9 + 1 | 0;
    if ((i9 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i8);
  _memset(i15 | 0, 0, 16) | 0;
 }
 i15 = i1 + 272 | 0;
 i8 = (i15 | 0) == 0;
 if (!i8) {
  __ZN3WTF5Mutex4lockEv(i15);
 }
 i3 = i1 + 296 | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 if ((i9 | 0) != 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore15PageURLSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E15deallocateTableEPS5_i(i9, HEAP32[i1 + 300 >> 2] | 0);
  _memset(i3 | 0, 0, 16) | 0;
 }
 i3 = i1 + 316 | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 if ((i9 | 0) != 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore12IconSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E15deallocateTableEPS5_i(i9, HEAP32[i1 + 320 >> 2] | 0);
  _memset(i3 | 0, 0, 16) | 0;
 }
 if (!i8) {
  __ZN3WTF5Mutex6unlockEv(i15);
 }
 i15 = i1 + 336 | 0;
 i8 = (i15 | 0) == 0;
 if (!i8) {
  __ZN3WTF5Mutex4lockEv(i15);
 }
 i3 = i1 + 360 | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i6 = HEAP32[i1 + 364 >> 2] | 0;
  if ((i6 | 0) > 0) {
   i7 = 0;
   while (1) {
    i10 = HEAP32[i9 + (i7 << 2) >> 2] | 0;
    i11 = i10;
    do {
     if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
      i12 = i10 | 0;
      i14 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
      if ((i14 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i10);
       break;
      } else {
       HEAP32[i12 >> 2] = i14;
       break;
      }
     }
    } while (0);
    i7 = i7 + 1 | 0;
    if ((i7 | 0) >= (i6 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i9);
  _memset(i3 | 0, 0, 16) | 0;
 }
 i3 = i1 + 380 | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i6 = HEAP32[i1 + 384 >> 2] | 0;
  if ((i6 | 0) > 0) {
   i7 = 0;
   while (1) {
    i10 = HEAP32[i9 + (i7 << 2) >> 2] | 0;
    i11 = i10;
    do {
     if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
      i14 = i10 | 0;
      i12 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
      if ((i12 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i10);
       break;
      } else {
       HEAP32[i14 >> 2] = i12;
       break;
      }
     }
    } while (0);
    i7 = i7 + 1 | 0;
    if ((i7 | 0) >= (i6 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i9);
  _memset(i3 | 0, 0, 16) | 0;
 }
 i3 = i1 + 400 | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 if ((i9 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i9);
  _memset(i3 | 0, 0, 16) | 0;
 }
 i3 = i1 + 72 | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i6 = HEAP32[i1 + 76 >> 2] | 0;
  if ((i6 | 0) > 0) {
   i7 = 0;
   while (1) {
    i10 = HEAP32[i9 + (i7 << 2) >> 2] | 0;
    i11 = i10;
    do {
     if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
      i12 = i10 + 4 | 0;
      i14 = i12 | 0;
      i13 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
      if ((i13 | 0) != 0) {
       HEAP32[i14 >> 2] = i13;
       break;
      }
      i13 = i12 - 4 | 0;
      if ((i13 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 63](i13);
     }
    } while (0);
    i7 = i7 + 1 | 0;
    if ((i7 | 0) >= (i6 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i9);
  _memset(i3 | 0, 0, 16) | 0;
 }
 if (!i8) {
  __ZN3WTF5Mutex6unlockEv(i15);
 }
 if (!i5) {
  __ZN3WTF5Mutex6unlockEv(i4);
 }
 HEAP8[i1 + 181 | 0] = 1;
 i4 = i1 + 100 | 0;
 i5 = (i4 | 0) == 0;
 if (!i5) {
  __ZN3WTF5Mutex4lockEv(i4);
 }
 i15 = i1 + 184 | 0;
 if ((HEAP8[i15] & 1) == 0) {
  HEAP8[i15] = 1;
 }
 HEAP8[i1 + 183 | 0] = 1;
 __ZN3WTF15ThreadCondition6signalEv(i1 + 124 | 0);
 if (i5) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i4);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore12IconDatabase30writeIconSnapshotToSQLDatabaseERKNS_12IconSnapshotE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i2 | 0;
 i9 = HEAP32[i2 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i9 + 4 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i2 + 4 | 0;
 do {
  if ((HEAP32[i9 >> 2] | 0) == 0) {
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore12IconDatabase25removeIconFromSQLDatabaseERKN3WTF6StringE(i1, i8);
   STACKTOP = i3;
   return;
  }
 } while (0);
 i10 = __ZN7WebCore12IconDatabase34getIconIDForIconURLFromSQLDatabaseERKN3WTF6StringE(i1, i8) | 0;
 i11 = tempRet0;
 if ((i10 | 0) == 0 & (i11 | 0) == 0) {
  i12 = i1 + 648 | 0;
  i13 = i1 + 492 | 0;
  __ZN3WTF6StringC1EPKc(i6, H_BASE + 1320 | 0);
  __ZN7WebCore20readySQLiteStatementERN3WTF6OwnPtrINS_15SQLiteStatementEEERNS_14SQLiteDatabaseERKNS0_6StringE(i12, i13, i6);
  i14 = HEAP32[i6 >> 2] | 0;
  do {
   if ((i14 | 0) != 0) {
    i6 = i14 | 0;
    i15 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i15 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i14);
     break;
    } else {
     HEAP32[i6 >> 2] = i15;
     break;
    }
   }
  } while (0);
  i14 = i12 | 0;
  __ZN7WebCore15SQLiteStatement8bindTextEiRKN3WTF6StringE(HEAP32[i14 >> 2] | 0, 1, i8) | 0;
  i12 = HEAP32[i9 >> 2] | 0;
  __ZN7WebCore15SQLiteStatement9bindInt64Eix(HEAP32[i14 >> 2] | 0, 2, i12, (i12 | 0) < 0 | 0 ? -1 : 0) | 0;
  __ZN7WebCore15SQLiteStatement4stepEv(HEAP32[i14 >> 2] | 0) | 0;
  __ZN7WebCore15SQLiteStatement5resetEv(HEAP32[i14 >> 2] | 0) | 0;
  i14 = __ZN7WebCore14SQLiteDatabase15lastInsertRowIDEv(i13) | 0;
  i12 = tempRet0;
  i15 = i1 + 652 | 0;
  __ZN3WTF6StringC1EPKc(i7, H_BASE + 1776 | 0);
  __ZN7WebCore20readySQLiteStatementERN3WTF6OwnPtrINS_15SQLiteStatementEEERNS_14SQLiteDatabaseERKNS0_6StringE(i15, i13, i7);
  i13 = HEAP32[i7 >> 2] | 0;
  do {
   if ((i13 | 0) != 0) {
    i7 = i13 | 0;
    i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i13);
     break;
    } else {
     HEAP32[i7 >> 2] = i6;
     break;
    }
   }
  } while (0);
  i13 = i15 | 0;
  __ZN7WebCore15SQLiteStatement9bindInt64Eix(HEAP32[i13 >> 2] | 0, 1, i14, i12) | 0;
  i12 = i2 + 8 | 0;
  i14 = HEAP32[i12 >> 2] | 0;
  do {
   if ((i14 | 0) == 0) {
    i16 = 31;
   } else {
    if ((__ZNK7WebCore12SharedBuffer4sizeEv(i14) | 0) == 0) {
     i16 = 31;
     break;
    }
    i15 = HEAP32[i13 >> 2] | 0;
    i6 = __ZNK7WebCore12SharedBuffer4dataEv(HEAP32[i12 >> 2] | 0) | 0;
    __ZN7WebCore15SQLiteStatement8bindBlobEiPKvi(i15, 2, i6, __ZNK7WebCore12SharedBuffer4sizeEv(HEAP32[i12 >> 2] | 0) | 0) | 0;
   }
  } while (0);
  if ((i16 | 0) == 31) {
   __ZN7WebCore15SQLiteStatement8bindNullEi(HEAP32[i13 >> 2] | 0, 2) | 0;
  }
  __ZN7WebCore15SQLiteStatement4stepEv(HEAP32[i13 >> 2] | 0) | 0;
  __ZN7WebCore15SQLiteStatement5resetEv(HEAP32[i13 >> 2] | 0) | 0;
  STACKTOP = i3;
  return;
 } else {
  i13 = i1 + 640 | 0;
  i12 = i1 + 492 | 0;
  __ZN3WTF6StringC1EPKc(i4, H_BASE + 1416 | 0);
  __ZN7WebCore20readySQLiteStatementERN3WTF6OwnPtrINS_15SQLiteStatementEEERNS_14SQLiteDatabaseERKNS0_6StringE(i13, i12, i4);
  i14 = HEAP32[i4 >> 2] | 0;
  do {
   if ((i14 | 0) != 0) {
    i4 = i14 | 0;
    i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i14);
     break;
    } else {
     HEAP32[i4 >> 2] = i6;
     break;
    }
   }
  } while (0);
  i14 = i13 | 0;
  i13 = HEAP32[i9 >> 2] | 0;
  __ZN7WebCore15SQLiteStatement9bindInt64Eix(HEAP32[i14 >> 2] | 0, 1, i13, (i13 | 0) < 0 | 0 ? -1 : 0) | 0;
  __ZN7WebCore15SQLiteStatement8bindTextEiRKN3WTF6StringE(HEAP32[i14 >> 2] | 0, 2, i8) | 0;
  __ZN7WebCore15SQLiteStatement9bindInt64Eix(HEAP32[i14 >> 2] | 0, 3, i10, i11) | 0;
  __ZN7WebCore15SQLiteStatement4stepEv(HEAP32[i14 >> 2] | 0) | 0;
  __ZN7WebCore15SQLiteStatement5resetEv(HEAP32[i14 >> 2] | 0) | 0;
  i14 = i1 + 644 | 0;
  __ZN3WTF6StringC1EPKc(i5, H_BASE + 1368 | 0);
  __ZN7WebCore20readySQLiteStatementERN3WTF6OwnPtrINS_15SQLiteStatementEEERNS_14SQLiteDatabaseERKNS0_6StringE(i14, i12, i5);
  i12 = HEAP32[i5 >> 2] | 0;
  do {
   if ((i12 | 0) != 0) {
    i5 = i12 | 0;
    i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
    if ((i1 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i12);
     break;
    } else {
     HEAP32[i5 >> 2] = i1;
     break;
    }
   }
  } while (0);
  i12 = i14 | 0;
  __ZN7WebCore15SQLiteStatement9bindInt64Eix(HEAP32[i12 >> 2] | 0, 2, i10, i11) | 0;
  i11 = i2 + 8 | 0;
  i2 = HEAP32[i11 >> 2] | 0;
  do {
   if ((i2 | 0) == 0) {
    i16 = 18;
   } else {
    if ((__ZNK7WebCore12SharedBuffer4sizeEv(i2) | 0) == 0) {
     i16 = 18;
     break;
    }
    i10 = HEAP32[i12 >> 2] | 0;
    i14 = __ZNK7WebCore12SharedBuffer4dataEv(HEAP32[i11 >> 2] | 0) | 0;
    __ZN7WebCore15SQLiteStatement8bindBlobEiPKvi(i10, 1, i14, __ZNK7WebCore12SharedBuffer4sizeEv(HEAP32[i11 >> 2] | 0) | 0) | 0;
   }
  } while (0);
  if ((i16 | 0) == 18) {
   __ZN7WebCore15SQLiteStatement8bindNullEi(HEAP32[i12 >> 2] | 0, 1) | 0;
  }
  __ZN7WebCore15SQLiteStatement4stepEv(HEAP32[i12 >> 2] | 0) | 0;
  __ZN7WebCore15SQLiteStatement5resetEv(HEAP32[i12 >> 2] | 0) | 0;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF13tryMakeStringINS_12StringAppendINS_6StringES2_EEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i3 | 0) | 0;
 i8 = i2 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = (i9 | 0) == 0;
 if (i10) {
  i11 = 0;
 } else {
  i11 = HEAP32[i9 + 4 >> 2] | 0;
 }
 i12 = i2 + 4 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = (i13 | 0) == 0;
 if (i14) {
  i15 = 0;
 } else {
  i15 = HEAP32[i13 + 4 >> 2] | 0;
 }
 i16 = _llvm_uadd_with_overflow_i32(i15 + i11 | 0, i7 | 0) | 0;
 i11 = i16;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i10) {
  i17 = 9;
 } else {
  if ((HEAP32[i9 + 16 >> 2] & 32 | 0) != 0) {
   i17 = 9;
  }
 }
 do {
  if ((i17 | 0) == 9) {
   if (!i14) {
    if ((HEAP32[i13 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i11 | 0) == 0) {
     i9 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i9 | 0) == 0) {
      i17 = 31;
      break;
     }
     i10 = i9 | 0;
     HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
     i18 = i9;
     i19 = 0;
    } else {
     if (i11 >>> 0 > 4294967275 >>> 0) {
      i17 = 31;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i11 + 20 | 0);
     i9 = i6 | 0;
     i10 = HEAP32[i9 >> 2] | 0;
     HEAP32[i9 >> 2] = 0;
     if ((i10 | 0) == 0) {
      i17 = 31;
      break;
     }
     i9 = i10 + 20 | 0;
     HEAP32[i10 >> 2] = 2;
     HEAP32[i10 + 4 >> 2] = i11;
     HEAP32[i10 + 8 >> 2] = i9;
     HEAP32[i10 + 12 >> 2] = 0;
     HEAP32[i10 + 16 >> 2] = 32;
     i18 = i10;
     i19 = i9;
    }
   } while (0);
   if ((i17 | 0) == 31) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i9 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i9 | 0) == 0) {
     i20 = 0;
     i21 = 0;
    } else {
     i10 = HEAP32[i9 + 4 >> 2] | 0;
     i16 = HEAP32[i9 + 8 >> 2] | 0;
     if ((i10 | 0) == 0) {
      i20 = 0;
      i21 = i9;
      break;
     } else {
      i22 = 0;
     }
     while (1) {
      HEAP8[i19 + i22 | 0] = HEAP8[i16 + i22 | 0] | 0;
      i22 = i22 + 1 | 0;
      if (i22 >>> 0 >= i10 >>> 0) {
       break;
      }
     }
     i10 = HEAP32[i8 >> 2] | 0;
     if ((i10 | 0) == 0) {
      i20 = 0;
      i21 = 0;
      break;
     }
     i20 = HEAP32[i10 + 4 >> 2] | 0;
     i21 = i10;
    }
   } while (0);
   i9 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i9 | 0) == 0) {
     i23 = i21;
    } else {
     i10 = HEAP32[i9 + 4 >> 2] | 0;
     i16 = HEAP32[i9 + 8 >> 2] | 0;
     if ((i10 | 0) == 0) {
      i23 = i21;
      break;
     } else {
      i24 = 0;
     }
     while (1) {
      HEAP8[i19 + (i24 + i20) | 0] = HEAP8[i16 + i24 | 0] | 0;
      i24 = i24 + 1 | 0;
      if (i24 >>> 0 >= i10 >>> 0) {
       break;
      }
     }
     i23 = HEAP32[i8 >> 2] | 0;
    }
   } while (0);
   if ((i23 | 0) == 0) {
    i25 = 0;
   } else {
    i25 = HEAP32[i23 + 4 >> 2] | 0;
   }
   i9 = HEAP32[i12 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i26 = 0;
   } else {
    i26 = HEAP32[i9 + 4 >> 2] | 0;
   }
   _memcpy(i19 + (i26 + i25) | 0, i3 | 0, i7) | 0;
   HEAP32[i1 >> 2] = i18;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i11 | 0) == 0) {
   i18 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i18 | 0) == 0) {
    i17 = 45;
    break;
   }
   i25 = i18 | 0;
   HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 2;
   i27 = i18;
   i28 = 0;
  } else {
   if (i11 >>> 0 > 2147483637 >>> 0) {
    i17 = 45;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i11 << 1) + 20 | 0);
   i18 = i5 | 0;
   i25 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = 0;
   if ((i25 | 0) == 0) {
    i17 = 45;
    break;
   }
   i18 = i25 + 20 | 0;
   HEAP32[i25 >> 2] = 2;
   HEAP32[i25 + 4 >> 2] = i11;
   HEAP32[i25 + 8 >> 2] = i18;
   HEAP32[i25 + 12 >> 2] = 0;
   HEAP32[i25 + 16 >> 2] = 0;
   i27 = i25;
   i28 = i18;
  }
 } while (0);
 if ((i17 | 0) == 45) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 __ZN3WTF12StringAppendINS_6StringES1_E7writeToEPt(i2, i28);
 i2 = HEAP32[i8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i29 = 0;
 } else {
  i29 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i2 = HEAP32[i12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i30 = 0;
 } else {
  i30 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i2 = i30 + i29 | 0;
 if ((i7 | 0) != 0) {
  i29 = 0;
  while (1) {
   HEAP16[i28 + (i2 + i29 << 1) >> 1] = HEAPU8[i3 + i29 | 0] | 0;
   i29 = i29 + 1 | 0;
   if (i29 >>> 0 >= i7 >>> 0) {
    break;
   }
  }
 }
 HEAP32[i1 >> 2] = i27;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12IconDatabase18syncThreadMainLoopEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = i1 + 100 | 0;
 __ZN3WTF5Mutex4lockEv(i2);
 i3 = i1 + 184 | 0;
 i4 = HEAP8[i3] | 0;
 HEAP8[i3] = 0;
 i5 = i1 + 183 | 0;
 HEAP8[i5] = 0;
 i6 = i1 + 180 | 0;
 i7 = i1 + 181 | 0;
 i8 = i1 + 188 | 0;
 i9 = (i8 | 0) == 0;
 i10 = i1;
 i11 = i1 + 98 | 0;
 i12 = i1 + 492 | 0;
 i13 = i1 + 488 | 0;
 i14 = i1 + 124 | 0;
 i15 = (i4 & 1) != 0;
 L1 : while (1) {
  if (i9) {
   while (1) {
    if ((HEAP8[i6] & 1) != 0) {
     break L1;
    }
    __ZN3WTF5Mutex6unlockEv(i2);
    if ((HEAP8[i7] & 1) != 0) {
     __ZN7WebCore12IconDatabase27deleteAllPreparedStatementsEv(i1);
     __ZN7WebCore14SQLiteDatabase14clearAllTablesEv(i12);
     __ZN7WebCore14SQLiteDatabase16runVacuumCommandEv(i12) | 0;
     __ZN7WebCoreL20createDatabaseTablesERNS_14SQLiteDatabaseE(i12);
     i4 = __ZN3WTF10fastMallocEj(8) | 0;
     HEAP32[i4 + 4 >> 2] = HEAP32[i13 >> 2];
     HEAP32[i4 >> 2] = H_BASE + 3576;
     __ZN3WTF16callOnMainThreadEPFvPvES0_(F_BASE_vi + 44 | 0, i4);
     HEAP8[i7] = 0;
    }
    if ((HEAP8[i6] & 1) != 0) {
     break L1;
    }
    __ZN7WebCore12IconDatabase40performPendingRetainAndReleaseOperationsEv(i1);
    while (1) {
     i4 = __ZN7WebCore12IconDatabase15writeToDatabaseEv(i1) | 0;
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 84 >> 2] & 31](i1) | 0) {
      break;
     }
     i16 = __ZN7WebCore12IconDatabase16readFromDatabaseEv(i1) | 0;
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 84 >> 2] & 31](i1) | 0) {
      break;
     }
     do {
      if (i4) {
       if ((HEAP8[i11] & 1) != 0) {
        break;
       }
       if (HEAP8[H_BASE + 3416 | 0] | (HEAP32[H_BASE + 3816 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore12IconDatabase20pruneUnretainedIconsEv(i1);
       HEAP8[H_BASE + 3416 | 0] = 1;
      }
     } while (0);
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 84 >> 2] & 31](i1) | 0 | (i16 | i4) ^ 1) {
      break;
     }
    }
    __ZN3WTF5Mutex4lockEv(i2);
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 84 >> 2] & 31](i1) | 0)) {
     break;
    }
   }
  } else {
   while (1) {
    if ((HEAP8[i6] & 1) != 0) {
     break L1;
    }
    __ZN3WTF5Mutex6unlockEv(i2);
    if ((HEAP8[i7] & 1) != 0) {
     __ZN7WebCore12IconDatabase27deleteAllPreparedStatementsEv(i1);
     __ZN7WebCore14SQLiteDatabase14clearAllTablesEv(i12);
     __ZN7WebCore14SQLiteDatabase16runVacuumCommandEv(i12) | 0;
     __ZN7WebCoreL20createDatabaseTablesERNS_14SQLiteDatabaseE(i12);
     i17 = __ZN3WTF10fastMallocEj(8) | 0;
     HEAP32[i17 + 4 >> 2] = HEAP32[i13 >> 2];
     HEAP32[i17 >> 2] = H_BASE + 3576;
     __ZN3WTF16callOnMainThreadEPFvPvES0_(F_BASE_vi + 44 | 0, i17);
     HEAP8[i7] = 0;
    }
    if ((HEAP8[i6] & 1) != 0) {
     break L1;
    }
    __ZN3WTF5Mutex4lockEv(i8);
    __ZN7WebCore12IconDatabase40performPendingRetainAndReleaseOperationsEv(i1);
    __ZN3WTF5Mutex6unlockEv(i8);
    while (1) {
     i17 = __ZN7WebCore12IconDatabase15writeToDatabaseEv(i1) | 0;
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 84 >> 2] & 31](i1) | 0) {
      break;
     }
     i18 = __ZN7WebCore12IconDatabase16readFromDatabaseEv(i1) | 0;
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 84 >> 2] & 31](i1) | 0) {
      break;
     }
     do {
      if (i17) {
       if ((HEAP8[i11] & 1) != 0) {
        break;
       }
       if (HEAP8[H_BASE + 3416 | 0] | (HEAP32[H_BASE + 3816 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore12IconDatabase20pruneUnretainedIconsEv(i1);
       HEAP8[H_BASE + 3416 | 0] = 1;
      }
     } while (0);
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 84 >> 2] & 31](i1) | 0 | (i18 | i17) ^ 1) {
      break;
     }
    }
    __ZN3WTF5Mutex4lockEv(i2);
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 84 >> 2] & 31](i1) | 0)) {
     break;
    }
   }
  }
  if ((HEAP8[i5] & 1) == 0) {
   while (1) {
    __ZN3WTF15ThreadCondition4waitERNS_5MutexE(i14, i2);
    if ((HEAP8[i5] & 1) != 0) {
     break;
    }
   }
  }
  HEAP8[i5] = 0;
  HEAP8[i3] = 0;
  i15 = 1;
 }
 __ZN3WTF5Mutex6unlockEv(i2);
 __ZN7WebCore12IconDatabase17cleanupSyncThreadEv(i1) | 0;
 if (!i15) {
  return;
 }
 if ((i2 | 0) == 0) {
  HEAP8[i3] = 0;
  return;
 } else {
  __ZN3WTF5Mutex4lockEv(i2);
  HEAP8[i3] = 0;
  __ZN3WTF5Mutex6unlockEv(i2);
  return;
 }
}
function __ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i3 | 0) | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 i9 = (i2 | 0) == 0;
 if (i9) {
  i10 = 0;
 } else {
  i10 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i11 = _llvm_uadd_with_overflow_i32(i10 | 0, i7 | 0) | 0;
 i10 = i11;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if (!i9) {
   if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
    break;
   }
   do {
    if ((i10 | 0) == 0) {
     i11 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i11 | 0) == 0) {
      i12 = 37;
      break;
     }
     i13 = i11 | 0;
     HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
     i14 = i11;
     i15 = 0;
    } else {
     if (i10 >>> 0 > 2147483637 >>> 0) {
      i12 = 37;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i5, (i10 << 1) + 20 | 0);
     i11 = i5 | 0;
     i13 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = 0;
     if ((i13 | 0) == 0) {
      i12 = 37;
      break;
     }
     i11 = i13 + 20 | 0;
     HEAP32[i13 >> 2] = 2;
     HEAP32[i13 + 4 >> 2] = i10;
     HEAP32[i13 + 8 >> 2] = i11;
     HEAP32[i13 + 12 >> 2] = 0;
     HEAP32[i13 + 16 >> 2] = 0;
     i14 = i13;
     i15 = i11;
    }
   } while (0);
   if ((i12 | 0) == 37) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i11 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i11 | 0) == 0) {
     i16 = 0;
    } else {
     i13 = HEAP32[i11 + 4 >> 2] | 0;
     do {
      if ((HEAP32[i11 + 16 >> 2] & 32 | 0) == 0) {
       i17 = HEAP32[i11 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i18 = 0;
       }
       while (1) {
        HEAP16[i15 + (i18 << 1) >> 1] = HEAP16[i17 + (i18 << 1) >> 1] | 0;
        i18 = i18 + 1 | 0;
        if (i18 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      } else {
       i17 = HEAP32[i11 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i19 = 0;
       }
       while (1) {
        HEAP16[i15 + (i19 << 1) >> 1] = HEAPU8[i17 + i19 | 0] | 0;
        i19 = i19 + 1 | 0;
        if (i19 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      }
     } while (0);
     i13 = HEAP32[i8 >> 2] | 0;
     if ((i13 | 0) == 0) {
      i16 = 0;
      break;
     }
     i16 = HEAP32[i13 + 4 >> 2] | 0;
    }
   } while (0);
   if ((i7 | 0) != 0) {
    i11 = 0;
    while (1) {
     HEAP16[i15 + (i11 + i16 << 1) >> 1] = HEAPU8[i3 + i11 | 0] | 0;
     i11 = i11 + 1 | 0;
     if (i11 >>> 0 >= i7 >>> 0) {
      break;
     }
    }
   }
   HEAP32[i1 >> 2] = i14;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i10 | 0) == 0) {
   i14 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i14 | 0) == 0) {
    i12 = 19;
    break;
   }
   i16 = i14 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   i20 = i14;
   i21 = 0;
  } else {
   if (i10 >>> 0 > 4294967275 >>> 0) {
    i12 = 19;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i6, i10 + 20 | 0);
   i14 = i6 | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   if ((i16 | 0) == 0) {
    i12 = 19;
    break;
   }
   i14 = i16 + 20 | 0;
   HEAP32[i16 >> 2] = 2;
   HEAP32[i16 + 4 >> 2] = i10;
   HEAP32[i16 + 8 >> 2] = i14;
   HEAP32[i16 + 12 >> 2] = 0;
   HEAP32[i16 + 16 >> 2] = 32;
   i20 = i16;
   i21 = i14;
  }
 } while (0);
 if ((i12 | 0) == 19) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i12 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i22 = 0;
  } else {
   i10 = HEAP32[i12 + 4 >> 2] | 0;
   i6 = HEAP32[i12 + 8 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i23 = i12;
   } else {
    i14 = 0;
    while (1) {
     HEAP8[i21 + i14 | 0] = HEAP8[i6 + i14 | 0] | 0;
     i14 = i14 + 1 | 0;
     if (i14 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
    i10 = HEAP32[i8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i22 = 0;
     break;
    } else {
     i23 = i10;
    }
   }
   i22 = HEAP32[i23 + 4 >> 2] | 0;
  }
 } while (0);
 _memcpy(i21 + i22 | 0, i3 | 0, i7) | 0;
 HEAP32[i1 >> 2] = i20;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12IconDatabase40performPendingRetainAndReleaseOperationsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = i1 + 420 | 0;
 i3 = (i2 | 0) == 0;
 if (!i3) {
  __ZN3WTF5Mutex4lockEv(i2);
 }
 i4 = i1 + 484 | 0;
 if ((HEAP8[i4] & 1) == 0) {
  if (i3) {
   return;
  }
  __ZN3WTF5Mutex6unlockEv(i2);
  return;
 }
 i5 = i1 + 444 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = i1 + 448 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i1 + 452 >> 2] = 0;
 i5 = i1 + 456 | 0;
 i8 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i1 + 460 >> 2] = 0;
 i5 = i1 + 464 | 0;
 i9 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = i1 + 468 | 0;
 i10 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i1 + 472 >> 2] = 0;
 i5 = i1 + 476 | 0;
 i11 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i1 + 480 >> 2] = 0;
 HEAP8[i4] = 0;
 if (!i3) {
  __ZN3WTF5Mutex6unlockEv(i2);
 }
 i2 = i6 + (i7 << 3) | 0;
 L14 : do {
  if ((i8 | 0) != 0) {
   L16 : do {
    if ((i7 | 0) == 0) {
     i12 = i6;
    } else {
     i3 = i6;
     while (1) {
      i4 = HEAP32[i3 >> 2] | 0;
      if (!((i4 | 0) == (-1 | 0) | (i4 | 0) == 0)) {
       i12 = i3;
       break L16;
      }
      i3 = i3 + 8 | 0;
      if ((i3 | 0) == (i2 | 0)) {
       break L14;
      }
     }
    }
   } while (0);
   if ((i12 | 0) == (i2 | 0)) {
    break;
   } else {
    i13 = i12;
   }
   while (1) {
    __ZN7WebCore12IconDatabase27performRetainIconForPageURLERKN3WTF6StringEi(i1, i13 | 0, HEAP32[i13 + 4 >> 2] | 0);
    i3 = i13 + 8 | 0;
    if ((i3 | 0) == (i2 | 0)) {
     break L14;
    } else {
     i14 = i3;
    }
    while (1) {
     i3 = HEAP32[i14 >> 2] | 0;
     if (!((i3 | 0) == (-1 | 0) | (i3 | 0) == 0)) {
      break;
     }
     i3 = i14 + 8 | 0;
     if ((i3 | 0) == (i2 | 0)) {
      break L14;
     } else {
      i14 = i3;
     }
    }
    if ((i14 | 0) == (i2 | 0)) {
     break;
    } else {
     i13 = i14;
    }
   }
  }
 } while (0);
 i14 = i9 + (i10 << 3) | 0;
 L28 : do {
  if ((i11 | 0) != 0) {
   L30 : do {
    if ((i10 | 0) == 0) {
     i15 = i9;
    } else {
     i13 = i9;
     while (1) {
      i2 = HEAP32[i13 >> 2] | 0;
      if (!((i2 | 0) == (-1 | 0) | (i2 | 0) == 0)) {
       i15 = i13;
       break L30;
      }
      i13 = i13 + 8 | 0;
      if ((i13 | 0) == (i14 | 0)) {
       break L28;
      }
     }
    }
   } while (0);
   if ((i15 | 0) == (i14 | 0)) {
    break;
   } else {
    i16 = i15;
   }
   while (1) {
    __ZN7WebCore12IconDatabase28performReleaseIconForPageURLERKN3WTF6StringEi(i1, i16 | 0, HEAP32[i16 + 4 >> 2] | 0);
    i13 = i16 + 8 | 0;
    if ((i13 | 0) == (i14 | 0)) {
     break L28;
    } else {
     i17 = i13;
    }
    while (1) {
     i13 = HEAP32[i17 >> 2] | 0;
     if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
      break;
     }
     i13 = i17 + 8 | 0;
     if ((i13 | 0) == (i14 | 0)) {
      break L28;
     } else {
      i17 = i13;
     }
    }
    if ((i17 | 0) == (i14 | 0)) {
     break;
    } else {
     i16 = i17;
    }
   }
  }
 } while (0);
 if ((i9 | 0) != 0) {
  if ((i10 | 0) > 0) {
   i17 = 0;
   while (1) {
    i16 = HEAP32[i9 + (i17 << 3) >> 2] | 0;
    i14 = i16;
    do {
     if (!((i14 | 0) == (-1 | 0) | (i14 | 0) == 0)) {
      i1 = i16 | 0;
      i15 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
      if ((i15 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i16);
       break;
      } else {
       HEAP32[i1 >> 2] = i15;
       break;
      }
     }
    } while (0);
    i17 = i17 + 1 | 0;
    if ((i17 | 0) >= (i10 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i9);
 }
 if ((i6 | 0) == 0) {
  return;
 }
 if ((i7 | 0) > 0) {
  i9 = 0;
  while (1) {
   i10 = HEAP32[i6 + (i9 << 3) >> 2] | 0;
   i17 = i10;
   do {
    if (!((i17 | 0) == (-1 | 0) | (i17 | 0) == 0)) {
     i16 = i10 | 0;
     i14 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i16 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i9 = i9 + 1 | 0;
   if ((i9 | 0) >= (i7 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i6);
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore15PageURLSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS1_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore15PageURLSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6expandEPS5_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i10 = i9 >>> 7;
 } else {
  i10 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i10 >>> 23) + ~i10 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i11 = i10;
 i10 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i7 + (i12 * 12 & -1) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == 0) {
   break;
  } else if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 9;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i10 | 0) == 0 ? i3 : i10;
  i9 = i16;
  i11 = i14 + i12 | 0;
  i10 = i14;
 }
 if ((i17 | 0) == 9) {
  i17 = (HEAP32[i5 >> 2] | 0) + ((HEAP32[i2 + 4 >> 2] | 0) * 12 & -1) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i13;
  HEAP32[i10 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  HEAP32[i9 >> 2] = 0;
  HEAP32[i9 + 4 >> 2] = 0;
  HEAP32[i9 + 8 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
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
 i13 = i4 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i13 = i18 + 4 | 0;
 i9 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i8;
 do {
  if ((i9 | 0) != 0) {
   i8 = i9 | 0;
   i13 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i8 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i9 = i4 + 4 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = i18 + 8 | 0;
 i13 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i4;
 do {
  if ((i13 | 0) != 0) {
   i4 = i13 | 0;
   i9 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i4 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i13 = i2 + 12 | 0;
 i9 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
 HEAP32[i13 >> 2] = i9;
 i13 = i2 + 4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i9 << 1 | 0) < (i4 | 0)) {
  i19 = i18;
  i20 = i4;
 } else {
  i4 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore15PageURLSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6expandEPS5_(i2, i18) | 0;
  i19 = i4;
  i20 = HEAP32[i13 >> 2] | 0;
 }
 i13 = (HEAP32[i5 >> 2] | 0) + (i20 * 12 & -1) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i13;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore12IconSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS1_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore12IconSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6expandEPS5_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i10 = i9 >>> 7;
 } else {
  i10 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i10 >>> 23) + ~i10 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i11 = i10;
 i10 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i7 + (i12 << 4) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == 0) {
   break;
  } else if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 9;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i10 | 0) == 0 ? i3 : i10;
  i9 = i16;
  i11 = i14 + i12 | 0;
  i10 = i14;
 }
 if ((i17 | 0) == 9) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 4) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i13;
  HEAP32[i10 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  _memset(i9 | 0, 0, 16) | 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
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
 i13 = i4 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i13 = i18 + 4 | 0;
 i9 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i8;
 do {
  if ((i9 | 0) != 0) {
   i8 = i9 | 0;
   i13 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i8 >> 2] = i13;
    break;
   }
  }
 } while (0);
 HEAP32[i18 + 8 >> 2] = HEAP32[i4 + 4 >> 2];
 i9 = i4 + 8 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = i18 + 12 | 0;
 i13 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i4;
 do {
  if ((i13 | 0) != 0) {
   i4 = i13 | 0;
   i9 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) == 0) {
    __ZN7WebCore12SharedBufferD1Ev(i13);
    __ZN3WTF8fastFreeEPv(i13);
    break;
   } else {
    HEAP32[i4 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i13 = i2 + 12 | 0;
 i9 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
 HEAP32[i13 >> 2] = i9;
 i13 = i2 + 4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i9 << 1 | 0) < (i4 | 0)) {
  i19 = i18;
  i20 = i4;
 } else {
  i4 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore12IconSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6expandEPS5_(i2, i18) | 0;
  i19 = i4;
  i20 = HEAP32[i13 >> 2] | 0;
 }
 i13 = (HEAP32[i5 >> 2] | 0) + (i20 << 4) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i13;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore15PageURLSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EES1_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore15PageURLSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6expandEPS5_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i10 = i9 >>> 7;
 } else {
  i10 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i10 >>> 23) + ~i10 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i11 = i10;
 i10 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i7 + (i12 * 12 & -1) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == 0) {
   break;
  } else if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 9;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i10 | 0) == 0 ? i3 : i10;
  i9 = i16;
  i11 = i14 + i12 | 0;
  i10 = i14;
 }
 if ((i17 | 0) == 9) {
  i17 = (HEAP32[i5 >> 2] | 0) + ((HEAP32[i2 + 4 >> 2] | 0) * 12 & -1) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i13;
  HEAP32[i10 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  HEAP32[i9 >> 2] = 0;
  HEAP32[i9 + 4 >> 2] = 0;
  HEAP32[i9 + 8 >> 2] = 0;
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
 i13 = i4 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i13 = i18 + 4 | 0;
 i9 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i8;
 do {
  if ((i9 | 0) != 0) {
   i8 = i9 | 0;
   i13 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i8 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i9 = i4 + 4 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = i18 + 8 | 0;
 i13 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i4;
 do {
  if ((i13 | 0) != 0) {
   i4 = i13 | 0;
   i9 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i4 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i13 = i2 + 12 | 0;
 i9 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
 HEAP32[i13 >> 2] = i9;
 i13 = i2 + 4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i9 << 1 | 0) < (i4 | 0)) {
  i19 = i18;
  i20 = i4;
 } else {
  i4 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore15PageURLSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6expandEPS5_(i2, i18) | 0;
  i19 = i4;
  i20 = HEAP32[i13 >> 2] | 0;
 }
 i13 = (HEAP32[i5 >> 2] | 0) + (i20 * 12 & -1) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i13;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore12IconSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EES1_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore12IconSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6expandEPS5_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i10 = i9 >>> 7;
 } else {
  i10 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i10 >>> 23) + ~i10 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i11 = i10;
 i10 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i7 + (i12 << 4) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 9;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i10 | 0) == 0 ? i3 : i10;
  i9 = i16;
  i11 = i14 + i12 | 0;
  i10 = i14;
 }
 if ((i17 | 0) == 9) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 4) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i13;
  HEAP32[i10 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  _memset(i9 | 0, 0, 16) | 0;
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
 i13 = i4 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i13 = i18 + 4 | 0;
 i9 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i8;
 do {
  if ((i9 | 0) != 0) {
   i8 = i9 | 0;
   i13 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i8 >> 2] = i13;
    break;
   }
  }
 } while (0);
 HEAP32[i18 + 8 >> 2] = HEAP32[i4 + 4 >> 2];
 i9 = i4 + 8 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = i18 + 12 | 0;
 i13 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i4;
 do {
  if ((i13 | 0) != 0) {
   i4 = i13 | 0;
   i9 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) == 0) {
    __ZN7WebCore12SharedBufferD1Ev(i13);
    __ZN3WTF8fastFreeEPv(i13);
    break;
   } else {
    HEAP32[i4 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i13 = i2 + 12 | 0;
 i9 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
 HEAP32[i13 >> 2] = i9;
 i13 = i2 + 4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i9 << 1 | 0) < (i4 | 0)) {
  i19 = i18;
  i20 = i4;
 } else {
  i4 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore12IconSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6expandEPS5_(i2, i18) | 0;
  i19 = i4;
  i20 = HEAP32[i13 >> 2] | 0;
 }
 i13 = (HEAP32[i5 >> 2] | 0) + (i20 << 4) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i13;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF6VectorIN7WebCore12IconSnapshotELj0ENS_15CrashOnOverflowEE11appendRangeINS_23HashTableValuesIteratorINS_9HashTableINS_6StringENS_12KeyValuePairIS8_S2_EENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS8_S2_SD_NS_10HashTraitsIS8_EENSF_IS2_EEE18KeyValuePairTraitsESG_EES8_S2_EEEEvT_SM_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 i5 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 i5 = i2;
 i2 = HEAP32[i5 >> 2] | 0;
 i6 = HEAP32[i5 + 4 >> 2] | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == (i5 | 0)) {
  STACKTOP = i4;
  return;
 }
 i3 = i1 + 8 | 0;
 i7 = i1 + 4 | 0;
 i8 = i1 | 0;
 i9 = i2;
 i2 = HEAP32[i3 >> 2] | 0;
 while (1) {
  i10 = i9 + 4 | 0;
  do {
   if ((i2 | 0) == (HEAP32[i7 >> 2] | 0)) {
    i11 = i2 + 1 | 0;
    i12 = HEAP32[i8 >> 2] | 0;
    do {
     if (i12 >>> 0 > i10 >>> 0) {
      i13 = 10;
     } else {
      if ((i12 + (i2 * 12 & -1) | 0) >>> 0 <= i10 >>> 0) {
       i13 = 10;
       break;
      }
      i14 = i11 + (i2 >>> 2) | 0;
      i15 = i14 >>> 0 > 16 >>> 0 ? i14 : 16;
      __ZN3WTF6VectorIN7WebCore12IconSnapshotELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i15 >>> 0 > i11 >>> 0 ? i15 : i11);
      i15 = HEAP32[i8 >> 2] | 0;
      i16 = i15 + (((i10 - i12 | 0) / 12 & -1) * 12 & -1) | 0;
      i17 = i15;
     }
    } while (0);
    if ((i13 | 0) == 10) {
     i13 = 0;
     i12 = i11 + (i2 >>> 2) | 0;
     i15 = i12 >>> 0 > 16 >>> 0 ? i12 : 16;
     __ZN3WTF6VectorIN7WebCore12IconSnapshotELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i15 >>> 0 > i11 >>> 0 ? i15 : i11);
     i16 = i10;
     i17 = HEAP32[i8 >> 2] | 0;
    }
    i15 = HEAP32[i3 >> 2] | 0;
    i12 = HEAP32[i16 >> 2] | 0;
    HEAP32[i17 + (i15 * 12 & -1) >> 2] = i12;
    if ((i12 | 0) != 0) {
     i14 = i12 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
    }
    HEAP32[i17 + (i15 * 12 & -1) + 4 >> 2] = HEAP32[i16 + 4 >> 2];
    i14 = HEAP32[i16 + 8 >> 2] | 0;
    HEAP32[i17 + (i15 * 12 & -1) + 8 >> 2] = i14;
    if ((i14 | 0) == 0) {
     break;
    }
    i15 = i14 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
   } else {
    i15 = HEAP32[i8 >> 2] | 0;
    i14 = HEAP32[i10 >> 2] | 0;
    HEAP32[i15 + (i2 * 12 & -1) >> 2] = i14;
    if ((i14 | 0) != 0) {
     i12 = i14 | 0;
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
    }
    HEAP32[i15 + (i2 * 12 & -1) + 4 >> 2] = HEAP32[i9 + 8 >> 2];
    i12 = HEAP32[i9 + 12 >> 2] | 0;
    HEAP32[i15 + (i2 * 12 & -1) + 8 >> 2] = i12;
    if ((i12 | 0) == 0) {
     break;
    }
    i15 = i12 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
   }
  } while (0);
  i10 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
  HEAP32[i3 >> 2] = i10;
  i15 = i9 + 16 | 0;
  L24 : do {
   if ((i15 | 0) == (i6 | 0)) {
    i18 = i6;
   } else {
    i12 = i15;
    while (1) {
     i14 = HEAP32[i12 >> 2] | 0;
     if (!((i14 | 0) == (-1 | 0) | (i14 | 0) == 0)) {
      i18 = i12;
      break L24;
     }
     i14 = i12 + 16 | 0;
     if ((i14 | 0) == (i6 | 0)) {
      i18 = i6;
      break;
     } else {
      i12 = i14;
     }
    }
   }
  } while (0);
  if ((i18 | 0) == (i5 | 0)) {
   break;
  } else {
   i9 = i18;
   i2 = i10;
  }
 }
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14DocumentLoaderEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
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
  __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14DocumentLoaderEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
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
 i7 = i10 + (i3 << 2) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i7;
  } else {
   i13 = (i9 >>> 23) + ~i9 | 0;
   i14 = i13 << 12 ^ i13;
   i13 = i14 >>> 7 ^ i14;
   i14 = i13 << 2 ^ i13;
   i13 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i3;
   i17 = i7;
   i18 = i11;
   while (1) {
    if ((i18 | 0) == (i8 | 0)) {
     i19 = 8;
     break;
    }
    i20 = (i18 | 0) == -1 ? i17 : i15;
    i21 = (i14 | 0) == 0 ? i13 : i14;
    i22 = i21 + i16 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i19 = 10;
     break;
    } else {
     i14 = i21;
     i15 = i20;
     i16 = i22;
     i17 = i23;
     i18 = i24;
    }
   }
   if ((i19 | 0) == 8) {
    i18 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i16 = i1;
    HEAP32[i16 >> 2] = i17;
    HEAP32[i16 + 4 >> 2] = i18;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i19 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i18 = i2 + 16 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) - 1;
    i12 = i20;
    break;
   }
  }
 } while (0);
 i20 = i4 | 0;
 i4 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 i20 = i12 | 0;
 i23 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = i4;
 do {
  if ((i23 | 0) != 0) {
   i4 = i23 + 4 | 0;
   i20 = i4 | 0;
   i19 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) != 0) {
    HEAP32[i20 >> 2] = i19;
    break;
   }
   i19 = i4 - 4 | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 63](i19);
  }
 } while (0);
 i23 = i2 + 12 | 0;
 i19 = (HEAP32[i23 >> 2] | 0) + 1 | 0;
 HEAP32[i23 >> 2] = i19;
 i23 = i2 + 4 | 0;
 i4 = HEAP32[i23 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i19 << 1 | 0) < (i4 | 0)) {
  i25 = i12;
  i26 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i27 = 8;
  } else {
   i20 = i4 << 1;
   i27 = (i19 * 6 & -1 | 0) < (i20 | 0) ? i4 : i20;
  }
  i20 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14DocumentLoaderEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i2, i27, i12) | 0;
  i25 = i20;
  i26 = HEAP32[i23 >> 2] | 0;
 }
 i23 = (HEAP32[i5 >> 2] | 0) + (i26 << 2) | 0;
 i26 = i1;
 HEAP32[i26 >> 2] = i25;
 HEAP32[i26 + 4 >> 2] = i23;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore13PageURLRecordEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS1_RS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore13PageURLRecordEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i2, i8, 0) | 0;
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
  i13 = i9;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
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
  i9 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore13PageURLRecordEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i2, i21, i18) | 0;
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
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore10IconRecordEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS1_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore10IconRecordEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i2, i8, 0) | 0;
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
  if ((i15 | 0) == 0) {
   break;
  } else if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
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
  i13 = i9;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
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
  i9 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore10IconRecordEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i2, i21, i18) | 0;
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
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_jEENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_jS6_NS_10HashTraitsIS1_EENS8_IjEEE18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISC_S6_EERKS1_iEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SC_S9_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_jEENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_jS6_NS_10HashTraitsIS1_EENS8_IjEEE18KeyValuePairTraitsES9_E6rehashEiPS3_(i2, i8, 0) | 0;
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
  if ((i15 | 0) == 0) {
   break;
  } else if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
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
  i13 = i9;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
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
  i9 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_jEENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_jS6_NS_10HashTraitsIS1_EENS8_IjEEE18KeyValuePairTraitsES9_E6rehashEiPS3_(i2, i21, i18) | 0;
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
function __ZN3WTF6VectorIN7WebCore15PageURLSnapshotELj0ENS_15CrashOnOverflowEE11appendRangeINS_23HashTableValuesIteratorINS_9HashTableINS_6StringENS_12KeyValuePairIS8_S2_EENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS8_S2_SD_NS_10HashTraitsIS8_EENSF_IS2_EEE18KeyValuePairTraitsESG_EES8_S2_EEEEvT_SM_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 i5 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 i5 = i2;
 i2 = HEAP32[i5 >> 2] | 0;
 i6 = HEAP32[i5 + 4 >> 2] | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == (i5 | 0)) {
  STACKTOP = i4;
  return;
 }
 i3 = i1 + 8 | 0;
 i7 = i1 + 4 | 0;
 i8 = i1 | 0;
 i9 = i2;
 i2 = HEAP32[i3 >> 2] | 0;
 while (1) {
  i10 = i9 + 4 | 0;
  do {
   if ((i2 | 0) == (HEAP32[i7 >> 2] | 0)) {
    i11 = i2 + 1 | 0;
    i12 = HEAP32[i8 >> 2] | 0;
    do {
     if (i12 >>> 0 > i10 >>> 0) {
      i13 = 10;
     } else {
      if ((i12 + (i2 << 3) | 0) >>> 0 <= i10 >>> 0) {
       i13 = 10;
       break;
      }
      i14 = i11 + (i2 >>> 2) | 0;
      i15 = i14 >>> 0 > 16 >>> 0 ? i14 : 16;
      __ZN3WTF6VectorIN7WebCore15PageURLSnapshotELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i15 >>> 0 > i11 >>> 0 ? i15 : i11);
      i15 = HEAP32[i8 >> 2] | 0;
      i16 = i15 + (i10 - i12 >> 3 << 3) | 0;
      i17 = i15;
     }
    } while (0);
    if ((i13 | 0) == 10) {
     i13 = 0;
     i12 = i11 + (i2 >>> 2) | 0;
     i15 = i12 >>> 0 > 16 >>> 0 ? i12 : 16;
     __ZN3WTF6VectorIN7WebCore15PageURLSnapshotELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i15 >>> 0 > i11 >>> 0 ? i15 : i11);
     i16 = i10;
     i17 = HEAP32[i8 >> 2] | 0;
    }
    i15 = HEAP32[i3 >> 2] | 0;
    i12 = HEAP32[i16 >> 2] | 0;
    HEAP32[i17 + (i15 << 3) >> 2] = i12;
    if ((i12 | 0) != 0) {
     i14 = i12 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
    }
    i14 = HEAP32[i16 + 4 >> 2] | 0;
    HEAP32[i17 + (i15 << 3) + 4 >> 2] = i14;
    if ((i14 | 0) == 0) {
     break;
    }
    i15 = i14 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
   } else {
    i15 = HEAP32[i8 >> 2] | 0;
    i14 = HEAP32[i10 >> 2] | 0;
    HEAP32[i15 + (i2 << 3) >> 2] = i14;
    if ((i14 | 0) != 0) {
     i12 = i14 | 0;
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
    }
    i12 = HEAP32[i9 + 8 >> 2] | 0;
    HEAP32[i15 + (i2 << 3) + 4 >> 2] = i12;
    if ((i12 | 0) == 0) {
     break;
    }
    i15 = i12 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
   }
  } while (0);
  i10 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
  HEAP32[i3 >> 2] = i10;
  i15 = i9 + 12 | 0;
  L24 : do {
   if ((i15 | 0) == (i6 | 0)) {
    i18 = i6;
   } else {
    i12 = i15;
    while (1) {
     i14 = HEAP32[i12 >> 2] | 0;
     if (!((i14 | 0) == (-1 | 0) | (i14 | 0) == 0)) {
      i18 = i12;
      break L24;
     }
     i14 = i12 + 12 | 0;
     if ((i14 | 0) == (i6 | 0)) {
      i18 = i6;
      break;
     } else {
      i12 = i14;
     }
    }
   }
  } while (0);
  if ((i18 | 0) == (i5 | 0)) {
   break;
  } else {
   i9 = i18;
   i2 = i10;
  }
 }
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12IconDatabase28synchronousIconURLForPageURLERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 108 >> 2] & 31](i2) | 0) {
   if (!(__ZN7WebCore19documentCanHaveIconERKN3WTF6StringE(i3) | 0)) {
    break;
   }
   i7 = i2 + 188 | 0;
   i8 = (i7 | 0) == 0;
   if (!i8) {
    __ZN3WTF5Mutex4lockEv(i7);
   }
   i9 = HEAP32[i2 + 240 >> 2] | 0;
   i10 = HEAP32[i2 + 232 >> 2] | 0;
   i11 = i3 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   i13 = HEAP32[i12 + 16 >> 2] | 0;
   if (i13 >>> 0 > 127 >>> 0) {
    i14 = i13 >>> 7;
   } else {
    i14 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i12) | 0;
   }
   L11 : do {
    if ((i10 | 0) == 0) {
     i15 = 16;
    } else {
     i12 = (i14 >>> 23) + ~i14 | 0;
     i13 = i12 << 12 ^ i12;
     i12 = i13 >>> 7 ^ i13;
     i13 = i12 << 2 ^ i12;
     i12 = i13 >>> 20 ^ i13 | 1;
     i13 = i14;
     i16 = 0;
     while (1) {
      i17 = i13 & i9;
      i18 = i10 + (i17 << 3) | 0;
      i19 = HEAP32[i18 >> 2] | 0;
      i20 = i19;
      if ((i20 | 0) == 0) {
       i15 = 16;
       break L11;
      } else if ((i20 | 0) != (-1 | 0)) {
       if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i19, HEAP32[i11 >> 2] | 0) | 0) {
        break;
       }
      }
      i19 = (i16 | 0) == 0 ? i12 : i16;
      i13 = i19 + i17 | 0;
      i16 = i19;
     }
     if ((i18 | 0) == 0) {
      i15 = 16;
      break;
     }
     i16 = HEAP32[i10 + (i17 << 3) + 4 >> 2] | 0;
     if ((i16 | 0) == 0) {
      i15 = 16;
     } else {
      i21 = i16;
      i15 = 22;
     }
    }
   } while (0);
   do {
    if ((i15 | 0) == 16) {
     __ZNKR3WTF6String12isolatedCopyEv(i5, i3);
     i10 = __ZN7WebCore12IconDatabase24getOrCreatePageURLRecordERKN3WTF6StringE(i2, i5) | 0;
     i11 = HEAP32[i5 >> 2] | 0;
     do {
      if ((i11 | 0) != 0) {
       i9 = i11 | 0;
       i16 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
       if ((i16 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i11);
        break;
       } else {
        HEAP32[i9 >> 2] = i16;
        break;
       }
      }
     } while (0);
     if ((i10 | 0) != 0) {
      i21 = i10;
      i15 = 22;
      break;
     }
     HEAP32[i1 >> 2] = 0;
    }
   } while (0);
   do {
    if ((i15 | 0) == 22) {
     i11 = HEAP32[i21 + 4 >> 2] | 0;
     if ((i11 | 0) == 0) {
      HEAP32[i1 >> 2] = 0;
      break;
     }
     i16 = i6 | 0;
     i9 = HEAP32[i11 + 4 >> 2] | 0;
     HEAP32[i16 >> 2] = i9;
     if ((i9 | 0) != 0) {
      i11 = i9 | 0;
      HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
     }
     __ZNKO3WTF6String12isolatedCopyEv(i1, i6);
     i11 = HEAP32[i16 >> 2] | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     i16 = i11 | 0;
     i9 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i16 >> 2] = i9;
      break;
     }
    }
   } while (0);
   if (i8) {
    STACKTOP = i4;
    return;
   }
   __ZN3WTF5Mutex6unlockEv(i7);
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12IconDatabase33synchronousLoadDecisionForIconURLERKN3WTF6StringEPNS_14DocumentLoaderE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 108 >> 2] & 31](i1) | 0)) {
  i7 = 1;
  STACKTOP = i4;
  return i7 | 0;
 }
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = 1;
  STACKTOP = i4;
  return i7 | 0;
 }
 if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
  i7 = 1;
  STACKTOP = i4;
  return i7 | 0;
 }
 i9 = i1 + 188 | 0;
 i10 = (i9 | 0) == 0;
 if (i10) {
  i11 = i2;
 } else {
  __ZN3WTF5Mutex4lockEv(i9);
  i11 = HEAP32[i8 >> 2] | 0;
 }
 i2 = HEAP32[i1 + 220 >> 2] | 0;
 i12 = HEAP32[i1 + 212 >> 2] | 0;
 i13 = HEAP32[i11 + 16 >> 2] | 0;
 if (i13 >>> 0 > 127 >>> 0) {
  i14 = i13 >>> 7;
 } else {
  i14 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i11) | 0;
 }
 L17 : do {
  if ((i12 | 0) == 0) {
   i15 = 0;
   i16 = 0;
  } else {
   i11 = (i14 >>> 23) + ~i14 | 0;
   i13 = i11 << 12 ^ i11;
   i11 = i13 >>> 7 ^ i13;
   i13 = i11 << 2 ^ i11;
   i11 = i13 >>> 20 ^ i13 | 1;
   i13 = i14;
   i17 = 0;
   while (1) {
    i18 = i13 & i2;
    i19 = i12 + (i18 << 3) | 0;
    i20 = HEAP32[i19 >> 2] | 0;
    i21 = i20;
    if ((i21 | 0) == 0) {
     i15 = 0;
     i16 = 0;
     break L17;
    } else if ((i21 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i20, HEAP32[i8 >> 2] | 0) | 0) {
      break;
     }
    }
    i20 = (i17 | 0) == 0 ? i11 : i17;
    i13 = i20 + i18 | 0;
    i17 = i20;
   }
   if ((i19 | 0) == 0) {
    i15 = 0;
    i16 = 0;
    break;
   }
   i17 = HEAP32[i12 + (i18 << 3) + 4 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i15 = 0;
    i16 = 0;
    break;
   }
   i13 = ~~+__ZN3WTF11currentTimeEv();
   i15 = 1;
   i16 = (i13 - (HEAP32[i17 + 8 >> 2] | 0) | 0) < 345601 | 0;
  }
 } while (0);
 if (!i10) {
  __ZN3WTF5Mutex6unlockEv(i9);
 }
 if (i15) {
  i7 = i16;
  STACKTOP = i4;
  return i7 | 0;
 }
 i16 = i1 + 336 | 0;
 i15 = (i16 | 0) == 0;
 if (!i15) {
  __ZN3WTF5Mutex4lockEv(i16);
 }
 do {
  if ((HEAP8[i1 + 182 | 0] & 1) == 0) {
   if ((i3 | 0) == 0) {
    i22 = 2;
    break;
   }
   i9 = i5 | 0;
   HEAP32[i9 >> 2] = i3;
   i10 = i3 + 4 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14DocumentLoaderEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i6, i1 + 72 | 0, i5, i5);
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i22 = 2;
    break;
   }
   i9 = i10 + 4 | 0;
   i10 = i9 | 0;
   i18 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i10 >> 2] = i18;
    i22 = 2;
    break;
   }
   i18 = i9 - 4 | 0;
   if ((i18 | 0) == 0) {
    i22 = 2;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 63](i18);
   i22 = 2;
  } else {
   i22 = 0;
  }
 } while (0);
 if (i15) {
  i7 = i22;
  STACKTOP = i4;
  return i7 | 0;
 }
 __ZN3WTF5Mutex6unlockEv(i16);
 i7 = i22;
 STACKTOP = i4;
 return i7 | 0;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore13PageURLRecordEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i1, i2, i3) {
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
   if (i17 >>> 0 > 127 >>> 0) {
    i18 = i17 >>> 7;
   } else {
    i18 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i13) | 0;
   }
   i13 = (i18 >>> 23) + ~i18 | 0;
   i17 = i13 << 12 ^ i13;
   i13 = i17 >>> 7 ^ i17;
   i17 = i13 << 2 ^ i13;
   i13 = i17 >>> 20 ^ i17 | 1;
   i17 = i18;
   i19 = 0;
   i20 = 0;
   while (1) {
    i21 = i17 & i16;
    i22 = i14 + (i21 << 3) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == 0) {
     i25 = 9;
     break;
    } else if ((i24 | 0) == (-1 | 0)) {
     i26 = i22;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i12 >> 2] | 0) | 0) {
      i27 = i22;
      break;
     } else {
      i26 = i20;
     }
    }
    i23 = (i19 | 0) == 0 ? i13 : i19;
    i17 = i23 + i21 | 0;
    i19 = i23;
    i20 = i26;
   }
   if ((i25 | 0) == 9) {
    i25 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i19 >> 2] = i17;
   HEAP32[i27 + 4 >> 2] = HEAP32[i7 + (i10 << 3) + 4 >> 2];
   i15 = (i2 | 0) == (i3 | 0) ? i27 : i11;
  }
  i17 = i10 + 1 | 0;
  if ((i17 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i17;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i28 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i28 << 3) >> 2] | 0;
  i11 = i1;
  do {
   if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
    i10 = i1 | 0;
    i27 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i27 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i10 >> 2] = i27;
     break;
    }
   }
  } while (0);
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i28 = i1;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore10IconRecordEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i1, i2, i3) {
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
   if (i17 >>> 0 > 127 >>> 0) {
    i18 = i17 >>> 7;
   } else {
    i18 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i13) | 0;
   }
   i13 = (i18 >>> 23) + ~i18 | 0;
   i17 = i13 << 12 ^ i13;
   i13 = i17 >>> 7 ^ i17;
   i17 = i13 << 2 ^ i13;
   i13 = i17 >>> 20 ^ i17 | 1;
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
     i26 = 9;
     break;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i12 >> 2] | 0) | 0) {
      i27 = i22;
      break;
     } else {
      i25 = i20;
     }
    }
    i23 = (i19 | 0) == 0 ? i13 : i19;
    i17 = i23 + i21 | 0;
    i19 = i23;
    i20 = i25;
   }
   if ((i26 | 0) == 9) {
    i26 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i19 >> 2] = i17;
   HEAP32[i27 + 4 >> 2] = HEAP32[i7 + (i10 << 3) + 4 >> 2];
   i15 = (i2 | 0) == (i3 | 0) ? i27 : i11;
  }
  i17 = i10 + 1 | 0;
  if ((i17 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i17;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i28 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i28 << 3) >> 2] | 0;
  i11 = i1;
  do {
   if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
    i10 = i1 | 0;
    i27 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i27 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i10 >> 2] = i27;
     break;
    }
   }
  } while (0);
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i28 = i1;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_jEENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_jS6_NS_10HashTraitsIS1_EENS8_IjEEE18KeyValuePairTraitsES9_E6rehashEiPS3_(i1, i2, i3) {
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
   if (i17 >>> 0 > 127 >>> 0) {
    i18 = i17 >>> 7;
   } else {
    i18 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i13) | 0;
   }
   i13 = (i18 >>> 23) + ~i18 | 0;
   i17 = i13 << 12 ^ i13;
   i13 = i17 >>> 7 ^ i17;
   i17 = i13 << 2 ^ i13;
   i13 = i17 >>> 20 ^ i17 | 1;
   i17 = i18;
   i19 = 0;
   i20 = 0;
   while (1) {
    i21 = i17 & i16;
    i22 = i14 + (i21 << 3) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == 0) {
     i25 = 9;
     break;
    } else if ((i24 | 0) == (-1 | 0)) {
     i26 = i22;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i12 >> 2] | 0) | 0) {
      i27 = i22;
      break;
     } else {
      i26 = i20;
     }
    }
    i23 = (i19 | 0) == 0 ? i13 : i19;
    i17 = i23 + i21 | 0;
    i19 = i23;
    i20 = i26;
   }
   if ((i25 | 0) == 9) {
    i25 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i19 >> 2] = i17;
   HEAP32[i27 + 4 >> 2] = HEAP32[i7 + (i10 << 3) + 4 >> 2];
   i15 = (i2 | 0) == (i3 | 0) ? i27 : i11;
  }
  i17 = i10 + 1 | 0;
  if ((i17 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i17;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i28 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i28 << 3) >> 2] | 0;
  i11 = i1;
  do {
   if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
    i10 = i1 | 0;
    i27 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i27 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i10 >> 2] = i27;
     break;
    }
   }
  } while (0);
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i28 = i1;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableIPN7WebCore10IconRecordES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
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
  __ZN3WTF9HashTableIPN7WebCore10IconRecordES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
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
 i7 = i10 + (i3 << 2) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i7;
   i13 = 11;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i7;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 8;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 10;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 8) {
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i13 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 11;
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
 if ((i13 | 0) == 11) {
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
  if ((i13 | 0) == 0) {
   i29 = 8;
  } else {
   i26 = i13 << 1;
   i29 = (i12 * 6 & -1 | 0) < (i26 | 0) ? i13 : i26;
  }
  i26 = __ZN3WTF9HashTableIPN7WebCore10IconRecordES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
  i27 = i26;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i1, i2, i3) {
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
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
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
  i2 = i7 + (i10 << 2) | 0;
  i12 = i2 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i14 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = HEAP32[i13 + 16 >> 2] | 0;
   if (i17 >>> 0 > 127 >>> 0) {
    i18 = i17 >>> 7;
   } else {
    i18 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i13) | 0;
   }
   i13 = (i18 >>> 23) + ~i18 | 0;
   i17 = i13 << 12 ^ i13;
   i13 = i17 >>> 7 ^ i17;
   i17 = i13 << 2 ^ i13;
   i13 = i17 >>> 20 ^ i17 | 1;
   i17 = i18;
   i19 = 0;
   i20 = 0;
   while (1) {
    i21 = i17 & i16;
    i22 = i14 + (i21 << 2) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == 0) {
     i25 = 9;
     break;
    } else if ((i24 | 0) == (-1 | 0)) {
     i26 = i22;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i12 >> 2] | 0) | 0) {
      i27 = i22;
      break;
     } else {
      i26 = i20;
     }
    }
    i23 = (i19 | 0) == 0 ? i13 : i19;
    i17 = i23 + i21 | 0;
    i19 = i23;
    i20 = i26;
   }
   if ((i25 | 0) == 9) {
    i25 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i19 >> 2] = i17;
   i15 = (i2 | 0) == (i3 | 0) ? i27 : i11;
  }
  i17 = i10 + 1 | 0;
  if ((i17 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i17;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i28 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i28 << 2) >> 2] | 0;
  i11 = i1;
  do {
   if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
    i10 = i1 | 0;
    i27 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i27 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i10 >> 2] = i27;
     break;
    }
   }
  } while (0);
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i28 = i1;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i8, 0) | 0;
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
  i13 = i10 + (i12 << 2) | 0;
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
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 2) | 0;
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
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i4 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i4 = i9 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i18 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i4 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i13 = i2 + 12 | 0;
 i4 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
 HEAP32[i13 >> 2] = i4;
 i13 = i2 + 4 | 0;
 i9 = HEAP32[i13 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i9 | 0)) {
  i19 = i18;
  i20 = i9;
 } else {
  if ((i9 | 0) == 0) {
   i21 = 8;
  } else {
   i17 = i9 << 1;
   i21 = (i4 * 6 & -1 | 0) < (i17 | 0) ? i9 : i17;
  }
  i17 = __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i21, i18) | 0;
  i19 = i17;
  i20 = HEAP32[i13 >> 2] | 0;
 }
 i13 = (HEAP32[i5 >> 2] | 0) + (i20 << 2) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i13;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore12IconDatabase22iconDatabaseSyncThreadEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 100 | 0;
 __ZN3WTF5Mutex4lockEv(i6);
 __ZN3WTF5Mutex6unlockEv(i6);
 __ZN7WebCore18makeAllDirectoriesERKN3WTF6StringE(i1 + 172 | 0) | 0;
 i7 = i1 + 176 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = 0;
  } else {
   i10 = i8 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   i12 = i11 + 2 | 0;
   HEAP32[i10 >> 2] = i11 + 4;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    i9 = i8;
    break;
   } else {
    HEAP32[i10 >> 2] = i12;
    i9 = i8;
    break;
   }
  }
 } while (0);
 i8 = i4 | 0;
 HEAP32[i8 >> 2] = i9;
 i12 = (i9 | 0) == 0;
 if (!i12) {
  i10 = i9 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i3, i4, H_BASE + 976 | 0);
 i4 = i3 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 | 0;
   i10 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i8 >> 2] = i10;
    break;
   }
  }
 } while (0);
 if ((i3 | 0) == 0) {
  _WTFCrash();
 }
 i4 = i5 | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if (!i12) {
   i3 = i9 | 0;
   i10 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i3 >> 2] = i10;
    break;
   }
  }
 } while (0);
 if ((HEAP8[H_BASE + 3824 | 0] & 1) == 0) {
  i9 = (__ZN7WebCore10fileExistsERKN3WTF6StringE(i5) | 0) & 1;
  HEAP8[H_BASE + 3824 | 0] = i9;
 }
 if ((i6 | 0) == 0) {
  if (__ZN7WebCore14SQLiteDatabase4openERKN3WTF6StringEb(i1 + 492 | 0, i7, 0) | 0) {
   i13 = 22;
  }
 } else {
  __ZN3WTF5Mutex4lockEv(i6);
  i9 = __ZN7WebCore14SQLiteDatabase4openERKN3WTF6StringEb(i1 + 492 | 0, i7, 0) | 0;
  __ZN3WTF5Mutex6unlockEv(i6);
  if (i9) {
   i13 = 22;
  }
 }
 do {
  if ((i13 | 0) == 22) {
   i9 = i1;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 84 >> 2] & 31](i1) | 0) {
    __ZN7WebCore12IconDatabase18syncThreadMainLoopEv(i1);
    break;
   }
   __ZN7WebCore12IconDatabase25performOpenInitializationEv(i1);
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 84 >> 2] & 31](i1) | 0) {
    __ZN7WebCore12IconDatabase18syncThreadMainLoopEv(i1);
    break;
   } else {
    __ZN7WebCore12IconDatabase16performURLImportEv(i1);
    FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 84 >> 2] & 31](i1) | 0;
    __ZN7WebCore12IconDatabase18syncThreadMainLoopEv(i1);
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i1 | 0;
 i13 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i13 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i4 >> 2] = i13;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore12IconDatabase24getOrCreatePageURLRecordERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 if (!(__ZN7WebCore19documentCanHaveIconERKN3WTF6StringE(i2) | 0)) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 i8 = i1 + 232 | 0;
 i9 = HEAP32[i1 + 240 >> 2] | 0;
 i10 = HEAP32[i8 >> 2] | 0;
 i11 = i2 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = HEAP32[i12 + 16 >> 2] | 0;
 if (i13 >>> 0 > 127 >>> 0) {
  i14 = i13 >>> 7;
 } else {
  i14 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i12) | 0;
 }
 L8 : do {
  if ((i10 | 0) == 0) {
   i15 = 0;
  } else {
   i12 = (i14 >>> 23) + ~i14 | 0;
   i13 = i12 << 12 ^ i12;
   i12 = i13 >>> 7 ^ i13;
   i13 = i12 << 2 ^ i12;
   i12 = i13 >>> 20 ^ i13 | 1;
   i13 = i14;
   i16 = 0;
   while (1) {
    i17 = i13 & i9;
    i18 = i10 + (i17 << 3) | 0;
    i19 = HEAP32[i18 >> 2] | 0;
    i20 = i19;
    if ((i20 | 0) == 0) {
     i15 = 0;
     break L8;
    } else if ((i20 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i19, HEAP32[i11 >> 2] | 0) | 0) {
      break;
     }
    }
    i19 = (i16 | 0) == 0 ? i12 : i16;
    i13 = i19 + i17 | 0;
    i16 = i19;
   }
   if ((i18 | 0) == 0) {
    i15 = 0;
    break;
   }
   i15 = HEAP32[i10 + (i17 << 3) + 4 >> 2] | 0;
  }
 } while (0);
 HEAP32[i4 >> 2] = i15;
 i17 = i1 + 336 | 0;
 i10 = (i17 | 0) == 0;
 if (!i10) {
  __ZN3WTF5Mutex4lockEv(i17);
 }
 do {
  if ((HEAP8[i1 + 182 | 0] & 1) == 0) {
   do {
    if ((i15 | 0) == 0) {
     i18 = __ZN3WTF10fastMallocEj(12) | 0;
     __ZN7WebCore13PageURLRecordC1ERKN3WTF6StringE(i18, i2);
     HEAP32[i4 >> 2] = i18;
     __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore13PageURLRecordEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS1_RS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i5, i8 | 0, i2, i4);
     i18 = HEAP32[i4 >> 2] | 0;
     if ((HEAP8[i5 + 8 | 0] & 1) != 0) {
      i21 = i18;
      break;
     }
     HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] = i18;
     i21 = i18;
    } else {
     i21 = i15;
    }
   } while (0);
   if ((HEAP32[i21 + 4 >> 2] | 0) != 0) {
    i22 = i21;
    break;
   }
   __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i6, i1 + 360 | 0, i2, i2);
   i22 = 0;
  } else {
   i22 = i15;
  }
 } while (0);
 if (i10) {
  i7 = i22;
  STACKTOP = i3;
  return i7 | 0;
 }
 __ZN3WTF5Mutex6unlockEv(i17);
 i7 = i22;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore12IconDatabase25removeIconFromSQLDatabaseERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i7 + 4 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = __ZN7WebCore12IconDatabase34getIconIDForIconURLFromSQLDatabaseERKN3WTF6StringE(i1, i2) | 0;
 i2 = tempRet0;
 if ((i7 | 0) == 0 & (i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i1 + 628 | 0;
 i9 = i1 + 492 | 0;
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 1592 | 0);
 __ZN7WebCore20readySQLiteStatementERN3WTF6OwnPtrINS_15SQLiteStatementEEERNS_14SQLiteDatabaseERKNS0_6StringE(i8, i9, i4);
 i10 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i4 = i10 | 0;
   i11 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i4 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i10 = i8 | 0;
 __ZN7WebCore15SQLiteStatement9bindInt64Eix(HEAP32[i10 >> 2] | 0, 1, i7, i2) | 0;
 __ZN7WebCore15SQLiteStatement4stepEv(HEAP32[i10 >> 2] | 0) | 0;
 i8 = i1 + 632 | 0;
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 1536 | 0);
 __ZN7WebCore20readySQLiteStatementERN3WTF6OwnPtrINS_15SQLiteStatementEEERNS_14SQLiteDatabaseERKNS0_6StringE(i8, i9, i5);
 i11 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i5 = i11 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i11 = i8 | 0;
 __ZN7WebCore15SQLiteStatement9bindInt64Eix(HEAP32[i11 >> 2] | 0, 1, i7, i2) | 0;
 __ZN7WebCore15SQLiteStatement4stepEv(HEAP32[i11 >> 2] | 0) | 0;
 i8 = i1 + 636 | 0;
 __ZN3WTF6StringC1EPKc(i6, H_BASE + 1480 | 0);
 __ZN7WebCore20readySQLiteStatementERN3WTF6OwnPtrINS_15SQLiteStatementEEERNS_14SQLiteDatabaseERKNS0_6StringE(i8, i9, i6);
 i9 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i6 = i9 | 0;
   i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i6 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i9 = i8 | 0;
 __ZN7WebCore15SQLiteStatement9bindInt64Eix(HEAP32[i9 >> 2] | 0, 1, i7, i2) | 0;
 __ZN7WebCore15SQLiteStatement4stepEv(HEAP32[i9 >> 2] | 0) | 0;
 __ZN7WebCore15SQLiteStatement5resetEv(HEAP32[i10 >> 2] | 0) | 0;
 __ZN7WebCore15SQLiteStatement5resetEv(HEAP32[i11 >> 2] | 0) | 0;
 __ZN7WebCore15SQLiteStatement5resetEv(HEAP32[i9 >> 2] | 0) | 0;
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE11appendRangeINS_29HashTableConstIteratorAdapterINS_9HashTableIS1_S1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EESA_EES1_EEEEvT_SD_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 i5 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 i5 = i2;
 i2 = HEAP32[i5 >> 2] | 0;
 i6 = HEAP32[i5 + 4 >> 2] | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == (i5 | 0)) {
  STACKTOP = i4;
  return;
 }
 i3 = i1 + 8 | 0;
 i7 = i1 + 4 | 0;
 i8 = i1 | 0;
 i9 = i2;
 i2 = HEAP32[i3 >> 2] | 0;
 while (1) {
  do {
   if ((i2 | 0) == (HEAP32[i7 >> 2] | 0)) {
    i10 = i2 + 1 | 0;
    i11 = HEAP32[i8 >> 2] | 0;
    do {
     if (i11 >>> 0 > i9 >>> 0) {
      i12 = 8;
     } else {
      if ((i11 + (i2 << 2) | 0) >>> 0 <= i9 >>> 0) {
       i12 = 8;
       break;
      }
      __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i10);
      i13 = HEAP32[i8 >> 2] | 0;
      i14 = i13 + (i9 - i11 >> 2 << 2) | 0;
      i15 = i13;
     }
    } while (0);
    if ((i12 | 0) == 8) {
     i12 = 0;
     __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i10);
     i14 = i9;
     i15 = HEAP32[i8 >> 2] | 0;
    }
    i11 = HEAP32[i14 >> 2] | 0;
    HEAP32[i15 + (HEAP32[i3 >> 2] << 2) >> 2] = i11;
    if ((i11 | 0) == 0) {
     break;
    }
    i13 = i11 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
   } else {
    i13 = HEAP32[i9 >> 2] | 0;
    HEAP32[(HEAP32[i8 >> 2] | 0) + (i2 << 2) >> 2] = i13;
    if ((i13 | 0) == 0) {
     break;
    }
    i11 = i13 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
   }
  } while (0);
  i11 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
  HEAP32[i3 >> 2] = i11;
  i13 = i9 + 4 | 0;
  L18 : do {
   if ((i13 | 0) == (i6 | 0)) {
    i16 = i6;
   } else {
    i17 = i13;
    while (1) {
     i18 = HEAP32[i17 >> 2] | 0;
     if (!((i18 | 0) == (-1 | 0) | (i18 | 0) == 0)) {
      i16 = i17;
      break L18;
     }
     i18 = i17 + 4 | 0;
     if ((i18 | 0) == (i6 | 0)) {
      i16 = i6;
      break;
     } else {
      i17 = i18;
     }
    }
   }
  } while (0);
  if ((i16 | 0) == (i5 | 0)) {
   break;
  } else {
   i9 = i16;
   i2 = i11;
  }
 }
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore10IconRecordES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
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
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
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
  i2 = i7 + (i11 << 2) | 0;
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
   i19 = i16 + (i14 << 2) | 0;
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
      i34 = i16 + (i33 << 2) | 0;
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
   HEAP32[i30 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i5 | 0)) {
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
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore12IconSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E8reinsertEOS5_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 i6 = HEAP32[i5 + 16 >> 2] | 0;
 if (i6 >>> 0 > 127 >>> 0) {
  i7 = i6 >>> 7;
 } else {
  i7 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i5) | 0;
 }
 i5 = (i7 >>> 23) + ~i7 | 0;
 i6 = i5 << 12 ^ i5;
 i5 = i6 >>> 7 ^ i6;
 i6 = i5 << 2 ^ i5;
 i5 = i6 >>> 20 ^ i6 | 1;
 i6 = i7;
 i7 = 0;
 i8 = 0;
 while (1) {
  i9 = i6 & i4;
  i10 = i3 + (i9 << 4) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  i12 = i11;
  if ((i12 | 0) == 0) {
   i13 = 6;
   break;
  } else if ((i12 | 0) == (-1 | 0)) {
   i14 = i10;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i11, HEAP32[i1 >> 2] | 0) | 0) {
    i15 = i10;
    break;
   } else {
    i14 = i8;
   }
  }
  i11 = (i7 | 0) == 0 ? i5 : i7;
  i6 = i11 + i9 | 0;
  i7 = i11;
  i8 = i14;
 }
 if ((i13 | 0) == 6) {
  i15 = (i8 | 0) != 0 ? i8 : i10;
 }
 i10 = i15 + 12 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i13 = i8 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) == 0) {
    __ZN7WebCore12SharedBufferD1Ev(i8);
    __ZN3WTF8fastFreeEPv(i8);
    break;
   } else {
    HEAP32[i13 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i8 = i15 + 4 | 0;
 i14 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i13 = i14 | 0;
   i7 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i13 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i14 = i15 | 0;
 i7 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i13 = i7 | 0;
   i6 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i13 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i14 >> 2] = i7;
 i7 = i2 + 4 | 0;
 i14 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i8 >> 2] = i14;
 HEAP32[i15 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 i14 = i2 + 12 | 0;
 i2 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i10 >> 2] = i2;
 return i15 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 3432 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 3436 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 3440 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 3444 >> 2] = F_BASE_did + 2;
 HEAP32[H_BASE + 3464 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 3468 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 3472 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 3496 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 3500 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 3504 >> 2] = F_BASE_vi + 56;
 HEAP32[H_BASE + 3528 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 3532 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 3536 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 3540 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 3544 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 3548 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 3552 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 3576 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 3580 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 3584 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 3608 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 3612 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 3616 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 3640 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 3644 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 3648 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 3652 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 3656 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 3660 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 3664 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 3668 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 3672 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 3676 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 3680 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 3684 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 3688 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 3692 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 3696 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 3700 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 3704 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 3708 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 3712 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 3716 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 3720 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 3724 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 3728 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 3732 >> 2] = F_BASE_vi + 48;
 HEAP32[H_BASE + 3736 >> 2] = F_BASE_vi + 52;
 HEAP32[H_BASE + 3740 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 3744 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 3748 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 3752 >> 2] = F_BASE_vii + 10;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore15PageURLSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E8reinsertEOS5_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 i6 = HEAP32[i5 + 16 >> 2] | 0;
 if (i6 >>> 0 > 127 >>> 0) {
  i7 = i6 >>> 7;
 } else {
  i7 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i5) | 0;
 }
 i5 = (i7 >>> 23) + ~i7 | 0;
 i6 = i5 << 12 ^ i5;
 i5 = i6 >>> 7 ^ i6;
 i6 = i5 << 2 ^ i5;
 i5 = i6 >>> 20 ^ i6 | 1;
 i6 = i7;
 i7 = 0;
 i8 = 0;
 while (1) {
  i9 = i6 & i4;
  i10 = i3 + (i9 * 12 & -1) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  i12 = i11;
  if ((i12 | 0) == (-1 | 0)) {
   i13 = i10;
  } else if ((i12 | 0) == 0) {
   i14 = 6;
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i11, HEAP32[i1 >> 2] | 0) | 0) {
    i15 = i10;
    break;
   } else {
    i13 = i8;
   }
  }
  i11 = (i7 | 0) == 0 ? i5 : i7;
  i6 = i11 + i9 | 0;
  i7 = i11;
  i8 = i13;
 }
 if ((i14 | 0) == 6) {
  i15 = (i8 | 0) != 0 ? i8 : i10;
 }
 i10 = i15 + 8 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i14 = i8 | 0;
   i13 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i14 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i8 = i15 + 4 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i14 = i13 | 0;
   i7 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i14 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i13 = i15 | 0;
 i7 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i14 = i7 | 0;
   i6 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i14 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i13 >> 2] = i7;
 i7 = i2 + 4 | 0;
 i13 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i8 >> 2] = i13;
 i13 = i2 + 8 | 0;
 i2 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i10 >> 2] = i2;
 return i15 | 0;
}
function __ZN7WebCore12IconDatabase27deleteAllPreparedStatementsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 600 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 604 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 608 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 612 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 616 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 620 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 624 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 628 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 632 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 636 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 640 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 644 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 648 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore15SQLiteStatementD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 652 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore15SQLiteStatementD1Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3WTF6VectorIPN7WebCore10IconRecordELj0ENS_15CrashOnOverflowEE11appendRangeINS_29HashTableConstIteratorAdapterINS_9HashTableIS3_S3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EESD_EES3_EEEEvT_SG_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 i5 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 i5 = i2;
 i2 = HEAP32[i5 >> 2] | 0;
 i6 = HEAP32[i5 + 4 >> 2] | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == (i5 | 0)) {
  STACKTOP = i4;
  return;
 }
 i3 = i1 + 8 | 0;
 i7 = i1 + 4 | 0;
 i8 = i1 | 0;
 i9 = i2;
 i2 = HEAP32[i3 >> 2] | 0;
 while (1) {
  if ((i2 | 0) == (HEAP32[i7 >> 2] | 0)) {
   i10 = i2 + 1 | 0;
   i11 = HEAP32[i8 >> 2] | 0;
   do {
    if (i11 >>> 0 > i9 >>> 0) {
     i12 = 7;
    } else {
     if ((i11 + (i2 << 2) | 0) >>> 0 <= i9 >>> 0) {
      i12 = 7;
      break;
     }
     __ZN3WTF6VectorIPN7WebCore10IconRecordELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i10);
     i13 = HEAP32[i8 >> 2] | 0;
     i14 = i13 + (i9 - i11 >> 2 << 2) | 0;
     i15 = i13;
    }
   } while (0);
   if ((i12 | 0) == 7) {
    i12 = 0;
    __ZN3WTF6VectorIPN7WebCore10IconRecordELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i10);
    i14 = i9;
    i15 = HEAP32[i8 >> 2] | 0;
   }
   HEAP32[i15 + (HEAP32[i3 >> 2] << 2) >> 2] = HEAP32[i14 >> 2];
  } else {
   HEAP32[(HEAP32[i8 >> 2] | 0) + (i2 << 2) >> 2] = HEAP32[i9 >> 2];
  }
  i11 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
  HEAP32[i3 >> 2] = i11;
  i13 = i9 + 4 | 0;
  L16 : do {
   if ((i13 | 0) == (i6 | 0)) {
    i16 = i6;
   } else {
    i17 = i13;
    while (1) {
     i18 = HEAP32[i17 >> 2] | 0;
     if (!((i18 | 0) == (-1 | 0) | (i18 | 0) == 0)) {
      i16 = i17;
      break L16;
     }
     i18 = i17 + 4 | 0;
     if ((i18 | 0) == (i6 | 0)) {
      i16 = i6;
      break;
     } else {
      i17 = i18;
     }
    }
   }
  } while (0);
  if ((i16 | 0) == (i5 | 0)) {
   break;
  } else {
   i9 = i16;
   i2 = i11;
  }
 }
 STACKTOP = i4;
 return;
}
function __ZN3WTF7HashMapINS_6StringEPN7WebCore13PageURLRecordENS_10StringHashENS_10HashTraitsIS1_EENS6_IS4_EEE6removeERKS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = HEAP32[i1 + 4 >> 2] | 0;
  i6 = i5 << 3 | 0;
  i7 = 0;
  i8 = i5;
 } else {
  i5 = HEAP32[i1 + 8 >> 2] | 0;
  i9 = i2 | 0;
  i2 = HEAP32[i9 >> 2] | 0;
  i10 = HEAP32[i2 + 16 >> 2] | 0;
  if (i10 >>> 0 > 127 >>> 0) {
   i11 = i10 >>> 7;
  } else {
   i11 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i2) | 0;
  }
  i2 = (i11 >>> 23) + ~i11 | 0;
  i10 = i2 << 12 ^ i2;
  i2 = i10 >>> 7 ^ i10;
  i10 = i2 << 2 ^ i2;
  i2 = i10 >>> 20 ^ i10 | 1;
  i10 = i11;
  i11 = 0;
  while (1) {
   i12 = i10 & i5;
   i13 = i4 + (i12 << 3) | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   i15 = i14;
   if ((i15 | 0) == 0) {
    i16 = 0;
    break;
   } else if ((i15 | 0) != (-1 | 0)) {
    if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i9 >> 2] | 0) | 0) {
     i16 = i13;
     break;
    }
   }
   i13 = (i11 | 0) == 0 ? i2 : i11;
   i10 = i13 + i12 | 0;
   i11 = i13;
  }
  i11 = HEAP32[i3 >> 2] | 0;
  i3 = HEAP32[i1 + 4 >> 2] | 0;
  i6 = (i16 | 0) == 0 ? i11 + (i3 << 3) | 0 : i16;
  i7 = i11;
  i8 = i3;
 }
 i3 = i1 | 0;
 i11 = i1 + 4 | 0;
 if ((i6 | 0) == (i7 + (i8 << 3) | 0)) {
  i17 = 0;
  return i17 | 0;
 }
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i16 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i16;
    break;
   }
  }
 } while (0);
 HEAP32[i8 >> 2] = -1;
 i8 = i1 + 16 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 i8 = i1 + 12 | 0;
 i1 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 HEAP32[i8 >> 2] = i1;
 i8 = HEAP32[i11 >> 2] | 0;
 if (!((i1 * 6 & -1 | 0) < (i8 | 0) & (i8 | 0) > 8)) {
  i17 = 1;
  return i17 | 0;
 }
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore13PageURLRecordEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i3, (i8 | 0) / 2 & -1, 0) | 0;
 i17 = 1;
 return i17 | 0;
}
function __ZN3WTF7HashMapINS_6StringEPN7WebCore10IconRecordENS_10StringHashENS_10HashTraitsIS1_EENS6_IS4_EEE6removeERKS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = HEAP32[i1 + 4 >> 2] | 0;
  i6 = i5 << 3 | 0;
  i7 = 0;
  i8 = i5;
 } else {
  i5 = HEAP32[i1 + 8 >> 2] | 0;
  i9 = i2 | 0;
  i2 = HEAP32[i9 >> 2] | 0;
  i10 = HEAP32[i2 + 16 >> 2] | 0;
  if (i10 >>> 0 > 127 >>> 0) {
   i11 = i10 >>> 7;
  } else {
   i11 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i2) | 0;
  }
  i2 = (i11 >>> 23) + ~i11 | 0;
  i10 = i2 << 12 ^ i2;
  i2 = i10 >>> 7 ^ i10;
  i10 = i2 << 2 ^ i2;
  i2 = i10 >>> 20 ^ i10 | 1;
  i10 = i11;
  i11 = 0;
  while (1) {
   i12 = i10 & i5;
   i13 = i4 + (i12 << 3) | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   i15 = i14;
   if ((i15 | 0) == 0) {
    i16 = 0;
    break;
   } else if ((i15 | 0) != (-1 | 0)) {
    if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i9 >> 2] | 0) | 0) {
     i16 = i13;
     break;
    }
   }
   i13 = (i11 | 0) == 0 ? i2 : i11;
   i10 = i13 + i12 | 0;
   i11 = i13;
  }
  i11 = HEAP32[i3 >> 2] | 0;
  i3 = HEAP32[i1 + 4 >> 2] | 0;
  i6 = (i16 | 0) == 0 ? i11 + (i3 << 3) | 0 : i16;
  i7 = i11;
  i8 = i3;
 }
 i3 = i1 | 0;
 i11 = i1 + 4 | 0;
 if ((i6 | 0) == (i7 + (i8 << 3) | 0)) {
  i17 = 0;
  return i17 | 0;
 }
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i16 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i16;
    break;
   }
  }
 } while (0);
 HEAP32[i8 >> 2] = -1;
 i8 = i1 + 16 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 i8 = i1 + 12 | 0;
 i1 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 HEAP32[i8 >> 2] = i1;
 i8 = HEAP32[i11 >> 2] | 0;
 if (!((i1 * 6 & -1 | 0) < (i8 | 0) & (i8 | 0) > 8)) {
  i17 = 1;
  return i17 | 0;
 }
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore10IconRecordEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i3, (i8 | 0) / 2 & -1, 0) | 0;
 i17 = 1;
 return i17 | 0;
}
function __ZN7WebCore12IconDatabase26notifyPendingLoadDecisionsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 + 72 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i1 + 76 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i4 + (i6 << 2) | 0;
 L1 : do {
  if ((HEAP32[i1 + 84 >> 2] | 0) == 0) {
   i8 = i4;
  } else {
   L3 : do {
    if ((i6 | 0) == 0) {
     i9 = i4;
    } else {
     i10 = i4;
     while (1) {
      i11 = HEAP32[i10 >> 2] | 0;
      if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
       i9 = i10;
       break L3;
      }
      i11 = i10 + 4 | 0;
      if ((i11 | 0) == (i7 | 0)) {
       i8 = i4;
       break L1;
      } else {
       i10 = i11;
      }
     }
    }
   } while (0);
   if ((i9 | 0) == (i7 | 0)) {
    i8 = i4;
    break;
   } else {
    i12 = i9;
   }
   L8 : while (1) {
    i10 = HEAP32[i12 >> 2] | 0;
    if ((HEAP32[i10 + 4 >> 2] | 0) >>> 0 > 1 >>> 0) {
     __ZN7WebCore14DocumentLoader25iconLoadDecisionAvailableEv(i10);
    }
    i10 = i12 + 4 | 0;
    if ((i10 | 0) == (i7 | 0)) {
     break;
    } else {
     i13 = i10;
    }
    while (1) {
     i10 = HEAP32[i13 >> 2] | 0;
     if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
      break;
     }
     i10 = i13 + 4 | 0;
     if ((i10 | 0) == (i7 | 0)) {
      break L8;
     } else {
      i13 = i10;
     }
    }
    if ((i13 | 0) == (i7 | 0)) {
     break;
    } else {
     i12 = i13;
    }
   }
   i8 = HEAP32[i3 >> 2] | 0;
  }
 } while (0);
 if ((i8 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) > 0) {
  i5 = 0;
  while (1) {
   i13 = HEAP32[i8 + (i5 << 2) >> 2] | 0;
   i12 = i13;
   do {
    if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
     i7 = i13 + 4 | 0;
     i9 = i7 | 0;
     i4 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i4 | 0) != 0) {
      HEAP32[i9 >> 2] = i4;
      break;
     }
     i4 = i7 - 4 | 0;
     if ((i4 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
    }
   } while (0);
   i5 = i5 + 1 | 0;
   if ((i5 | 0) >= (i3 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i8);
 _memset(i2 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore12IconDatabase4openERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 if ((HEAP8[i1 + 97 | 0] & 1) == 0) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 108 >> 2] & 31](i1) | 0) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 i8 = i1 + 172 | 0;
 __ZNKR3WTF6String12isolatedCopyEv(i5, i2);
 i2 = i5 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i9 = i8 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i5;
 do {
  if ((i10 | 0) != 0) {
   i5 = i10 | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i5 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i2 = i10 | 0;
   i9 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i2 >> 2] = i9;
    break;
   }
  }
 } while (0);
 __ZN7WebCore24pathByAppendingComponentERKN3WTF6StringES3_(i6, i8, i3);
 i3 = i6 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i8 = i1 + 176 | 0;
 i10 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i6;
 do {
  if ((i10 | 0) != 0) {
   i6 = i10 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i6 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i3 = i10 | 0;
   i8 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i3 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i10 = i1 + 100 | 0;
 __ZN3WTF5Mutex4lockEv(i10);
 i8 = __ZN3WTF12createThreadEPFvPvES0_PKc(F_BASE_vi + 38 | 0, i1, H_BASE + 2368 | 0) | 0;
 i3 = i1 + 64 | 0;
 HEAP32[i3 >> 2] = i8;
 HEAP8[i1 + 68 | 0] = (i8 | 0) != 0 | 0;
 __ZN3WTF5Mutex6unlockEv(i10);
 i7 = (HEAP32[i3 >> 2] | 0) != 0;
 STACKTOP = i4;
 return i7 | 0;
}
function __ZN3WTF7HashSetINS_6StringENS_10StringHashENS_10HashTraitsIS1_EEE6removeERKS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = HEAP32[i1 + 4 >> 2] | 0;
  i6 = i5 << 2 | 0;
  i7 = 0;
  i8 = i5;
 } else {
  i5 = HEAP32[i1 + 8 >> 2] | 0;
  i9 = i2 | 0;
  i2 = HEAP32[i9 >> 2] | 0;
  i10 = HEAP32[i2 + 16 >> 2] | 0;
  if (i10 >>> 0 > 127 >>> 0) {
   i11 = i10 >>> 7;
  } else {
   i11 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i2) | 0;
  }
  i2 = (i11 >>> 23) + ~i11 | 0;
  i10 = i2 << 12 ^ i2;
  i2 = i10 >>> 7 ^ i10;
  i10 = i2 << 2 ^ i2;
  i2 = i10 >>> 20 ^ i10 | 1;
  i10 = i11;
  i11 = 0;
  while (1) {
   i12 = i10 & i5;
   i13 = i4 + (i12 << 2) | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   i15 = i14;
   if ((i15 | 0) == 0) {
    i16 = 0;
    break;
   } else if ((i15 | 0) != (-1 | 0)) {
    if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i9 >> 2] | 0) | 0) {
     i16 = i13;
     break;
    }
   }
   i13 = (i11 | 0) == 0 ? i2 : i11;
   i10 = i13 + i12 | 0;
   i11 = i13;
  }
  i11 = HEAP32[i3 >> 2] | 0;
  i3 = HEAP32[i1 + 4 >> 2] | 0;
  i6 = (i16 | 0) == 0 ? i11 + (i3 << 2) | 0 : i16;
  i7 = i11;
  i8 = i3;
 }
 i3 = i1 | 0;
 i11 = i1 + 4 | 0;
 if ((i6 | 0) == (i7 + (i8 << 2) | 0)) {
  i17 = 0;
  return i17 | 0;
 }
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i16 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i16;
    break;
   }
  }
 } while (0);
 HEAP32[i8 >> 2] = -1;
 i8 = i1 + 16 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 i8 = i1 + 12 | 0;
 i1 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 HEAP32[i8 >> 2] = i1;
 i8 = HEAP32[i11 >> 2] | 0;
 if (!((i1 * 6 & -1 | 0) < (i8 | 0) & (i8 | 0) > 8)) {
  i17 = 1;
  return i17 | 0;
 }
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i3, (i8 | 0) / 2 & -1, 0) | 0;
 i17 = 1;
 return i17 | 0;
}
function __ZN7WebCore12IconDatabase21getOrCreateIconRecordERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 + 212 | 0;
 i8 = HEAP32[i2 + 220 >> 2] | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 i9 = i3 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = HEAP32[i10 + 16 >> 2] | 0;
 if (i11 >>> 0 > 127 >>> 0) {
  i12 = i11 >>> 7;
 } else {
  i12 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i10) | 0;
 }
 L5 : do {
  if ((i2 | 0) != 0) {
   i10 = (i12 >>> 23) + ~i12 | 0;
   i11 = i10 << 12 ^ i10;
   i10 = i11 >>> 7 ^ i11;
   i11 = i10 << 2 ^ i10;
   i10 = i11 >>> 20 ^ i11 | 1;
   i11 = i12;
   i13 = 0;
   while (1) {
    i14 = i11 & i8;
    i15 = i2 + (i14 << 3) | 0;
    i16 = HEAP32[i15 >> 2] | 0;
    i17 = i16;
    if ((i17 | 0) == 0) {
     break L5;
    } else if ((i17 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i16, HEAP32[i9 >> 2] | 0) | 0) {
      break;
     }
    }
    i16 = (i13 | 0) == 0 ? i10 : i13;
    i11 = i16 + i14 | 0;
    i13 = i16;
   }
   if ((i15 | 0) == 0) {
    break;
   }
   i13 = HEAP32[i2 + (i14 << 3) + 4 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   HEAP32[i1 >> 2] = i13;
   i11 = i13 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   STACKTOP = i4;
   return;
  }
 } while (0);
 i14 = __ZN3WTF10fastMallocEj(40) | 0;
 __ZN7WebCore10IconRecordC1ERKN3WTF6StringE(i14, i3);
 HEAP32[i5 >> 2] = i14;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore10IconRecordEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS1_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i6, i7 | 0, i3, i5);
 if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
  HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] = HEAP32[i5 >> 2];
 }
 HEAP32[i1 >> 2] = i14;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12IconDatabase11defaultIconERKNS_7IntSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 92 | 0;
 do {
  if ((HEAP32[i6 >> 2] | 0) == 0) {
   __ZN3WTF6StringC1EPKc(i5, H_BASE + 2360 | 0);
   i1 = __ZN3WTF10fastMallocEj(40) | 0;
   __ZN7WebCore10IconRecordC1ERKN3WTF6StringE(i1, i5);
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i1;
   do {
    if ((i7 | 0) != 0) {
     i1 = i7 | 0;
     i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) == 0) {
      __ZN7WebCore10IconRecordD1Ev(i7);
      __ZN3WTF8fastFreeEPv(i7);
      break;
     } else {
      HEAP32[i1 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i7 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i8 = i7 | 0;
     i1 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i1 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i8 >> 2] = i1;
      break;
     }
    }
   } while (0);
   i7 = HEAP32[i6 >> 2] | 0;
   if (HEAP8[H_BASE + 3768 | 0] | 0) {
    i9 = HEAP32[H_BASE + 3792 >> 2] | 0;
   } else {
    i1 = __ZN3WTF10fastMallocEj(40) | 0;
    __ZN7WebCore12SharedBufferC1EPKhj(i1, H_BASE + 2392 | 0, 1016);
    HEAP32[H_BASE + 3792 >> 2] = i1;
    HEAP8[H_BASE + 3768 | 0] = 1;
    i9 = i1;
   }
   i1 = i4 | 0;
   HEAP32[i1 >> 2] = i9;
   if ((i9 | 0) != 0) {
    i8 = i9 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   }
   __ZN7WebCore10IconRecord12setImageDataEN3WTF10PassRefPtrINS_12SharedBufferEEE(i7, i4);
   i7 = HEAP32[i1 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i1 = i7 | 0;
   i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN7WebCore12SharedBufferD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i1 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i4 = __ZN7WebCore10IconRecord5imageERKNS_7IntSizeE(HEAP32[i6 >> 2] | 0, i2) | 0;
 STACKTOP = i3;
 return i4 | 0;
}
function __ZN3WTF7HashSetIPN7WebCore10IconRecordENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
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
  L3 : do {
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
      break L3;
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
 __ZN3WTF9HashTableIPN7WebCore10IconRecordES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore12IconDatabase23addIconURLToSQLDatabaseERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 616 | 0;
 i7 = i1 + 492 | 0;
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 1832 | 0);
 __ZN7WebCore20readySQLiteStatementERN3WTF6OwnPtrINS_15SQLiteStatementEEERNS_14SQLiteDatabaseERKNS0_6StringE(i6, i7, i4);
 i8 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i4 = i8 | 0;
   i9 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i4 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i8 = i6 | 0;
 __ZN7WebCore15SQLiteStatement8bindTextEiRKN3WTF6StringE(HEAP32[i8 >> 2] | 0, 1, i2) | 0;
 i2 = __ZN7WebCore15SQLiteStatement4stepEv(HEAP32[i8 >> 2] | 0) | 0;
 __ZN7WebCore15SQLiteStatement5resetEv(HEAP32[i8 >> 2] | 0) | 0;
 if ((i2 | 0) != (HEAP32[__ZN7WebCore13SQLResultDoneE >> 2] | 0)) {
  i10 = 0;
  i11 = 0;
  STACKTOP = i3;
  return (tempRet0 = i10, i11) | 0;
 }
 i8 = __ZN7WebCore14SQLiteDatabase15lastInsertRowIDEv(i7) | 0;
 i6 = tempRet0;
 i9 = i1 + 620 | 0;
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 1776 | 0);
 __ZN7WebCore20readySQLiteStatementERN3WTF6OwnPtrINS_15SQLiteStatementEEERNS_14SQLiteDatabaseERKNS0_6StringE(i9, i7, i5);
 i7 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i5 = i7 | 0;
   i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i5 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i7 = i9 | 0;
 __ZN7WebCore15SQLiteStatement9bindInt64Eix(HEAP32[i7 >> 2] | 0, 1, i8, i6) | 0;
 i9 = __ZN7WebCore15SQLiteStatement4stepEv(HEAP32[i7 >> 2] | 0) | 0;
 __ZN7WebCore15SQLiteStatement5resetEv(HEAP32[i7 >> 2] | 0) | 0;
 i7 = (i9 | 0) == (i2 | 0);
 i10 = i7 ? i6 : 0;
 i11 = i7 ? i8 : 0;
 STACKTOP = i3;
 return (tempRet0 = i10, i11) | 0;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14DocumentLoaderEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i5 = i2;
 i6 = i5 + ~(i5 << 15) | 0;
 i5 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i5 >>> 6 ^ i5;
 i5 = i6 + ~(i6 << 11) | 0;
 i6 = i5 >>> 16 ^ i5;
 i5 = i6 & i4;
 i7 = i3 + (i5 << 2) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L1 : do {
  if ((i8 | 0) == 0) {
   i9 = 0;
   i10 = i7;
   i11 = 3;
  } else {
   i12 = (i6 >>> 23) + ~i6 | 0;
   i13 = i12 << 12 ^ i12;
   i12 = i13 >>> 7 ^ i13;
   i13 = i12 << 2 ^ i12;
   i12 = i13 >>> 20 ^ i13 | 1;
   i13 = 0;
   i14 = 0;
   i15 = i5;
   i16 = i7;
   i17 = i8;
   while (1) {
    if ((i17 | 0) == (i2 | 0)) {
     i18 = i16;
     break L1;
    }
    i19 = (i17 | 0) == -1 ? i16 : i13;
    i20 = (i14 | 0) == 0 ? i12 : i14;
    i21 = i20 + i15 & i4;
    i22 = i3 + (i21 << 2) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    if ((i23 | 0) == 0) {
     i9 = i19;
     i10 = i22;
     i11 = 3;
     break;
    } else {
     i13 = i19;
     i14 = i20;
     i15 = i21;
     i16 = i22;
     i17 = i23;
    }
   }
  }
 } while (0);
 if ((i11 | 0) == 3) {
  i18 = (i9 | 0) != 0 ? i9 : i10;
 }
 i10 = i18 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i11 = i9 + 4 | 0;
   i3 = i11 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = i4;
    break;
   }
   i4 = i11 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
  }
 } while (0);
 i9 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i10 >> 2] = i9;
 return i18 | 0;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore15PageURLSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6expandEPS5_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
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
 HEAP32[i1 + 8 >> 2] = i5 - 1;
 i3 = __ZN3WTF10fastMallocEj(i5 * 12 & -1) | 0;
 if ((i5 | 0) > 0) {
  i8 = 0;
  while (1) {
   HEAP32[i3 + (i8 * 12 & -1) >> 2] = 0;
   HEAP32[i3 + (i8 * 12 & -1) + 4 >> 2] = 0;
   HEAP32[i3 + (i8 * 12 & -1) + 8 >> 2] = 0;
   i8 = i8 + 1 | 0;
   if ((i8 | 0) >= (i5 | 0)) {
    break;
   }
  }
 }
 HEAP32[i4 >> 2] = i3;
 if ((i6 | 0) == 0) {
  i9 = 0;
 } else {
  i3 = 0;
  i4 = 0;
  while (1) {
   i5 = i7 + (i3 * 12 & -1) | 0;
   i8 = HEAP32[i5 >> 2] | 0;
   if ((i8 | 0) == (-1 | 0) | (i8 | 0) == 0) {
    i10 = i4;
   } else {
    i8 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore15PageURLSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E8reinsertEOS5_(i1, i5) | 0;
    i10 = (i5 | 0) == (i2 | 0) ? i8 : i4;
   }
   i8 = i3 + 1 | 0;
   if ((i8 | 0) == (i6 | 0)) {
    i9 = i10;
    break;
   } else {
    i3 = i8;
    i4 = i10;
   }
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore15PageURLSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E15deallocateTableEPS5_i(i7, i6);
 return i9 | 0;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14DocumentLoaderEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
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
  i2 = i7 + (i10 << 2) | 0;
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) == (-1 | 0) | (i6 | 0) == 0) {
   i12 = i11;
  } else {
   i6 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore14DocumentLoaderEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_(i1, i2) | 0;
   i12 = (i2 | 0) == (i3 | 0) ? i6 : i11;
  }
  i6 = i10 + 1 | 0;
  if ((i6 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i6;
   i11 = i12;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i13 = 0;
 } else {
  i8 = i12;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i13 << 2) >> 2] | 0;
  i11 = i1;
  do {
   if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
    i10 = i1 + 4 | 0;
    i3 = i10 | 0;
    i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
    if ((i6 | 0) != 0) {
     HEAP32[i3 >> 2] = i6;
     break;
    }
    i6 = i10 - 4 | 0;
    if ((i6 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
   }
  } while (0);
  i1 = i13 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i13 = i1;
  } else {
   i8 = i12;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore12IconDatabase37getImageDataForIconURLFromSQLDatabaseERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 + 612 | 0;
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 1656 | 0);
 __ZN7WebCore20readySQLiteStatementERN3WTF6OwnPtrINS_15SQLiteStatementEEERNS_14SQLiteDatabaseERKNS0_6StringE(i7, i2 + 492 | 0, i5);
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i2 = i7 | 0;
 __ZN7WebCore15SQLiteStatement8bindTextEiRKN3WTF6StringE(HEAP32[i2 >> 2] | 0, 1, i3) | 0;
 i3 = __ZN7WebCore15SQLiteStatement4stepEv(HEAP32[i2 >> 2] | 0) | 0;
 do {
  if ((i3 | 0) == (HEAP32[__ZN7WebCore12SQLResultRowE >> 2] | 0)) {
   i7 = i6 | 0;
   HEAP32[i7 >> 2] = 0;
   i8 = i6 + 4 | 0;
   HEAP32[i8 >> 2] = 0;
   i5 = i6 + 8 | 0;
   HEAP32[i5 >> 2] = 0;
   __ZN7WebCore15SQLiteStatement21getColumnBlobAsVectorEiRN3WTF6VectorIcLj0ENS1_15CrashOnOverflowEEE(HEAP32[i2 >> 2] | 0, 0, i6);
   i9 = HEAP32[i7 >> 2] | 0;
   i10 = HEAP32[i5 >> 2] | 0;
   i11 = __ZN3WTF10fastMallocEj(40) | 0;
   __ZN7WebCore12SharedBufferC1EPKcj(i11, i9, i10);
   if ((HEAP32[i5 >> 2] | 0) != 0) {
    HEAP32[i5 >> 2] = 0;
   }
   i5 = HEAP32[i7 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i12 = i11;
    break;
   }
   HEAP32[i7 >> 2] = 0;
   HEAP32[i8 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i5);
   i12 = i11;
  } else {
   i12 = 0;
  }
 } while (0);
 __ZN7WebCore15SQLiteStatement5resetEv(HEAP32[i2 >> 2] | 0) | 0;
 HEAP32[i1 >> 2] = i12;
 STACKTOP = i4;
 return;
}
function __ZN3WTF6VectorIN7WebCore12IconSnapshotELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
 i1 = i5 + (i6 * 12 & -1) | 0;
 if (i2 >>> 0 > 357913941 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 12 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 12 & -1;
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
   HEAP32[i7 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
   i8 = i6 + 8 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i7 + 8 >> 2] = i9;
   i9 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i8 = i9 | 0;
     i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) == 0) {
      __ZN7WebCore12SharedBufferD1Ev(i9);
      __ZN3WTF8fastFreeEPv(i9);
      break;
     } else {
      HEAP32[i8 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i9 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i10 = i9 | 0;
     i8 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i10 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i9 = i6 + 12 | 0;
   if ((i9 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i9;
    i7 = i7 + 12 | 0;
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
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore12IconSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6expandEPS5_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
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
 HEAP32[i1 + 8 >> 2] = i5 - 1;
 i3 = __ZN3WTF10fastMallocEj(i5 << 4) | 0;
 if ((i5 | 0) > 0) {
  i8 = 0;
  while (1) {
   _memset(i3 + (i8 << 4) | 0, 0, 16) | 0;
   i8 = i8 + 1 | 0;
   if ((i8 | 0) >= (i5 | 0)) {
    break;
   }
  }
 }
 HEAP32[i4 >> 2] = i3;
 if ((i6 | 0) == 0) {
  i9 = 0;
 } else {
  i3 = 0;
  i4 = 0;
  while (1) {
   i5 = i7 + (i3 << 4) | 0;
   i8 = HEAP32[i5 >> 2] | 0;
   if ((i8 | 0) == (-1 | 0) | (i8 | 0) == 0) {
    i10 = i4;
   } else {
    i8 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore12IconSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E8reinsertEOS5_(i1, i5) | 0;
    i10 = (i5 | 0) == (i2 | 0) ? i8 : i4;
   }
   i8 = i3 + 1 | 0;
   if ((i8 | 0) == (i6 | 0)) {
    i9 = i10;
    break;
   } else {
    i3 = i8;
    i4 = i10;
   }
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore12IconSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E15deallocateTableEPS5_i(i7, i6);
 return i9 | 0;
}
function __ZN3WTF12StringAppendINS_6StringES1_E7writeToEPt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = 0;
  } else {
   i6 = HEAP32[i4 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i4 + 16 >> 2] & 32 | 0) == 0) {
     i7 = HEAP32[i4 + 8 >> 2] | 0;
     if ((i6 | 0) == 0) {
      break;
     } else {
      i8 = 0;
     }
     while (1) {
      HEAP16[i2 + (i8 << 1) >> 1] = HEAP16[i7 + (i8 << 1) >> 1] | 0;
      i8 = i8 + 1 | 0;
      if (i8 >>> 0 >= i6 >>> 0) {
       break;
      }
     }
    } else {
     i7 = HEAP32[i4 + 8 >> 2] | 0;
     if ((i6 | 0) == 0) {
      break;
     } else {
      i9 = 0;
     }
     while (1) {
      HEAP16[i2 + (i9 << 1) >> 1] = HEAPU8[i7 + i9 | 0] | 0;
      i9 = i9 + 1 | 0;
      if (i9 >>> 0 >= i6 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i6 = HEAP32[i3 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i5 = 0;
    break;
   }
   i5 = HEAP32[i6 + 4 >> 2] | 0;
  }
 } while (0);
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
  i9 = HEAP32[i3 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i10 = 0;
  }
  while (1) {
   HEAP16[i2 + (i10 + i5 << 1) >> 1] = HEAP16[i9 + (i10 << 1) >> 1] | 0;
   i10 = i10 + 1 | 0;
   if (i10 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 } else {
  i10 = HEAP32[i3 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i11 = 0;
  }
  while (1) {
   HEAP16[i2 + (i11 + i5 << 1) >> 1] = HEAPU8[i10 + i11 | 0] | 0;
   i11 = i11 + 1 | 0;
   if (i11 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore15PageURLSnapshotELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
 i1 = i5 + (i6 << 3) | 0;
 if (i2 >>> 0 > 536870911 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 3) | 0;
 HEAP32[i3 >> 2] = i7 >>> 3;
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
   i8 = i6 + 4 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i7 + 4 >> 2] = i9;
   i9 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i8 = i9 | 0;
     i10 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i8 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i9 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i10 = i9 | 0;
     i8 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i10 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i9 = i6 + 8 | 0;
   if ((i9 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i9;
    i7 = i7 + 8 | 0;
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
function __ZN7WebCore12IconDatabase14checkIntegrityEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 24 | 0;
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 208 | 0);
 __ZN7WebCore15SQLiteStatementC1ERNS_14SQLiteDatabaseERKN3WTF6StringE(i3, i1 + 492 | 0, i4);
 i1 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i1 = __ZN7WebCore15SQLiteStatement7prepareEv(i3) | 0;
 do {
  if ((i1 | 0) == (HEAP32[__ZN7WebCore11SQLResultOkE >> 2] | 0)) {
   i6 = __ZN7WebCore15SQLiteStatement4stepEv(i3) | 0;
   if ((i6 | 0) == (i1 | 0)) {
    i7 = 1;
    break;
   }
   if ((i6 | 0) != (HEAP32[__ZN7WebCore12SQLResultRowE >> 2] | 0)) {
    i7 = 0;
    break;
   }
   if ((__ZN7WebCore15SQLiteStatement11columnCountEv(i3) | 0) != 1) {
    i7 = 0;
    break;
   }
   __ZN7WebCore15SQLiteStatement13getColumnTextEi(i5, i3, 0);
   i6 = i5 | 0;
   i4 = __ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i6 >> 2] | 0, H_BASE + 200 | 0) | 0;
   i8 = HEAP32[i6 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i7 = i4;
    break;
   }
   i6 = i8 | 0;
   i9 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    i7 = i4;
    break;
   } else {
    HEAP32[i6 >> 2] = i9;
    i7 = i4;
    break;
   }
  } else {
   i7 = 0;
  }
 } while (0);
 __ZN7WebCore15SQLiteStatementD1Ev(i3);
 STACKTOP = i2;
 return i7 | 0;
}
function __ZN7WebCore12IconDatabase23iconRecordCountWithDataEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 + 188 | 0;
 i3 = (i2 | 0) == 0;
 if (!i3) {
  __ZN3WTF5Mutex4lockEv(i2);
 }
 i4 = HEAP32[i1 + 212 >> 2] | 0;
 i5 = HEAP32[i1 + 216 >> 2] | 0;
 i6 = i4 + (i5 << 3) | 0;
 L4 : do {
  if ((HEAP32[i1 + 224 >> 2] | 0) == 0) {
   i7 = 0;
  } else {
   L6 : do {
    if ((i5 | 0) == 0) {
     i8 = i4;
    } else {
     i9 = i4;
     while (1) {
      i10 = HEAP32[i9 >> 2] | 0;
      if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
       i8 = i9;
       break L6;
      }
      i10 = i9 + 8 | 0;
      if ((i10 | 0) == (i6 | 0)) {
       i7 = 0;
       break L4;
      } else {
       i9 = i10;
      }
     }
    }
   } while (0);
   if ((i8 | 0) == (i6 | 0)) {
    i7 = 0;
    break;
   } else {
    i11 = i8;
    i12 = 0;
   }
   while (1) {
    i9 = ((__ZN7WebCore10IconRecord15imageDataStatusEv(HEAP32[i11 + 4 >> 2] | 0) | 0) == 0) + i12 | 0;
    i10 = i11 + 8 | 0;
    if ((i10 | 0) == (i6 | 0)) {
     i7 = i9;
     break L4;
    } else {
     i13 = i10;
    }
    while (1) {
     i10 = HEAP32[i13 >> 2] | 0;
     if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
      break;
     }
     i10 = i13 + 8 | 0;
     if ((i10 | 0) == (i6 | 0)) {
      i7 = i9;
      break L4;
     } else {
      i13 = i10;
     }
    }
    if ((i13 | 0) == (i6 | 0)) {
     i7 = i9;
     break;
    } else {
     i11 = i13;
     i12 = i9;
    }
   }
  }
 } while (0);
 if (i3) {
  return i7 | 0;
 }
 __ZN3WTF5Mutex6unlockEv(i2);
 return i7 | 0;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore12IconSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E15deallocateTableEPS5_i(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 if ((i2 | 0) > 0) {
  i3 = 0;
 } else {
  i4 = i1;
  __ZN3WTF8fastFreeEPv(i4);
  return;
 }
 while (1) {
  i5 = i1 + (i3 << 4) | 0;
  do {
   if ((HEAP32[i5 >> 2] | 0) != -1) {
    i6 = HEAP32[i1 + (i3 << 4) + 12 >> 2] | 0;
    do {
     if ((i6 | 0) != 0) {
      i7 = i6 | 0;
      i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
      if ((i8 | 0) == 0) {
       __ZN7WebCore12SharedBufferD1Ev(i6);
       __ZN3WTF8fastFreeEPv(i6);
       break;
      } else {
       HEAP32[i7 >> 2] = i8;
       break;
      }
     }
    } while (0);
    i6 = HEAP32[i1 + (i3 << 4) + 4 >> 2] | 0;
    do {
     if ((i6 | 0) != 0) {
      i8 = i6 | 0;
      i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
      if ((i7 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i6);
       break;
      } else {
       HEAP32[i8 >> 2] = i7;
       break;
      }
     }
    } while (0);
    i6 = HEAP32[i5 >> 2] | 0;
    if ((i6 | 0) == 0) {
     break;
    }
    i7 = i6 | 0;
    i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
    if ((i8 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i6);
     break;
    } else {
     HEAP32[i7 >> 2] = i8;
     break;
    }
   }
  } while (0);
  i3 = i3 + 1 | 0;
  if ((i3 | 0) >= (i2 | 0)) {
   break;
  }
 }
 i4 = i1;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN7WebCore12IconDatabase17cleanupSyncThreadEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((HEAP8[i1 + 181 | 0] & 1) != 0) {
  __ZN7WebCore12IconDatabase27deleteAllPreparedStatementsEv(i1);
  i2 = i1 + 492 | 0;
  __ZN7WebCore14SQLiteDatabase14clearAllTablesEv(i2);
  __ZN7WebCore14SQLiteDatabase16runVacuumCommandEv(i2) | 0;
  __ZN7WebCoreL20createDatabaseTablesERNS_14SQLiteDatabaseE(i2);
  i2 = __ZN3WTF10fastMallocEj(8) | 0;
  HEAP32[i2 + 4 >> 2] = HEAP32[i1 + 488 >> 2];
  HEAP32[i2 >> 2] = H_BASE + 3576;
  __ZN3WTF16callOnMainThreadEPFvPvES0_(F_BASE_vi + 44 | 0, i2);
 }
 __ZN7WebCore12IconDatabase15writeToDatabaseEv(i1) | 0;
 i2 = i1 + 100 | 0;
 i3 = (i2 | 0) == 0;
 if (!i3) {
  __ZN3WTF5Mutex4lockEv(i2);
 }
 i4 = i1 + 172 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i5 = i1 + 176 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN7WebCore12IconDatabase27deleteAllPreparedStatementsEv(i1);
 __ZN7WebCore14SQLiteDatabase5closeEv(i1 + 492 | 0);
 HEAP8[i1 + 68 | 0] = 0;
 if (i3) {
  return 0;
 }
 __ZN3WTF5Mutex6unlockEv(i2);
 return 0;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore15PageURLSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E15deallocateTableEPS5_i(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 if ((i2 | 0) > 0) {
  i3 = 0;
 } else {
  i4 = i1;
  __ZN3WTF8fastFreeEPv(i4);
  return;
 }
 while (1) {
  i5 = i1 + (i3 * 12 & -1) | 0;
  do {
   if ((HEAP32[i5 >> 2] | 0) != -1) {
    i6 = HEAP32[i1 + (i3 * 12 & -1) + 8 >> 2] | 0;
    do {
     if ((i6 | 0) != 0) {
      i7 = i6 | 0;
      i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
      if ((i8 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i6);
       break;
      } else {
       HEAP32[i7 >> 2] = i8;
       break;
      }
     }
    } while (0);
    i6 = HEAP32[i1 + (i3 * 12 & -1) + 4 >> 2] | 0;
    do {
     if ((i6 | 0) != 0) {
      i8 = i6 | 0;
      i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
      if ((i7 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i6);
       break;
      } else {
       HEAP32[i8 >> 2] = i7;
       break;
      }
     }
    } while (0);
    i6 = HEAP32[i5 >> 2] | 0;
    if ((i6 | 0) == 0) {
     break;
    }
    i7 = i6 | 0;
    i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
    if ((i8 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i6);
     break;
    } else {
     HEAP32[i7 >> 2] = i8;
     break;
    }
   }
  } while (0);
  i3 = i3 + 1 | 0;
  if ((i3 | 0) >= (i2 | 0)) {
   break;
  }
 }
 i4 = i1;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN3WTF7HashMapINS_6StringEN7WebCore12IconSnapshotENS_10StringHashENS_10HashTraitsIS1_EENS5_IS3_EEE3setIS3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_NS_12KeyValuePairIS1_S3_EENS_24KeyValuePairKeyExtractorISD_EES4_NS8_18KeyValuePairTraitsES6_EEEEOS1_OT_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore12IconSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EES1_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i1, i2 | 0, i3, i4);
 if ((HEAP8[i1 + 8 | 0] & 1) != 0) {
  return;
 }
 i3 = HEAP32[i1 >> 2] | 0;
 i1 = i4 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i1 = i3 + 4 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i2;
 do {
  if ((i5 | 0) != 0) {
   i2 = i5 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i2 >> 2] = i1;
    break;
   }
  }
 } while (0);
 HEAP32[i3 + 8 >> 2] = HEAP32[i4 + 4 >> 2];
 i5 = i4 + 8 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = i3 + 12 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i4;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore12SharedBufferD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
  return;
 } else {
  HEAP32[i4 >> 2] = i5;
  return;
 }
}
function __ZN7WebCore12IconDatabase24checkForDanglingPageURLsEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 do {
  if (!i2) {
   if (!(HEAP8[H_BASE + 3408 | 0] | 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i7 = i1 + 492 | 0;
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 2120 | 0);
 __ZN7WebCore15SQLiteStatementC1ERNS_14SQLiteDatabaseERKN3WTF6StringE(i4, i7, i5);
 i1 = __ZN7WebCore15SQLiteStatement23returnsAtLeastOneResultEv(i4) | 0;
 __ZN7WebCore15SQLiteStatementD1Ev(i4);
 i4 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   if (i1) {
    break;
   }
   STACKTOP = i3;
   return;
  } else {
   i5 = i4 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    if (i1) {
     break;
    }
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i5 >> 2] = i8;
    if (i1) {
     break;
    }
    STACKTOP = i3;
    return;
   }
  }
 } while (0);
 HEAP8[H_BASE + 3408 | 0] = 1;
 if (!i2) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF6StringC1EPKc(i6, H_BASE + 2048 | 0);
 __ZN7WebCore14SQLiteDatabase14executeCommandERKN3WTF6StringE(i7, i6) | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i7 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i7);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i6 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore12IconDatabase21releaseIconForPageURLERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 31](i1) | 0)) {
  STACKTOP = i3;
  return;
 }
 if (!(__ZN7WebCore19documentCanHaveIconERKN3WTF6StringE(i2) | 0)) {
  STACKTOP = i3;
  return;
 }
 i7 = i1 + 420 | 0;
 i8 = (i7 | 0) == 0;
 if (!i8) {
  __ZN3WTF5Mutex4lockEv(i7);
 }
 __ZNKR3WTF6String12isolatedCopyEv(i5, i2);
 HEAP32[i4 >> 2] = 0;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_jEENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_jS6_NS_10HashTraitsIS1_EENS8_IjEEE18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISC_S6_EERKS1_iEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SC_S9_EEEEOT0_OT1_(i6, i1 + 464 | 0, i5, i4);
 i4 = (HEAP32[i6 >> 2] | 0) + 4 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i4 = HEAP32[i5 >> 2] | 0;
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
 HEAP8[i1 + 484 | 0] = 1;
 if (!i8) {
  __ZN3WTF5Mutex6unlockEv(i7);
 }
 i7 = i1 + 96 | 0;
 if ((HEAP8[i7] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 HEAP8[i7] = 1;
 __ZN3WTF16callOnMainThreadEPFvPvES0_(F_BASE_vi + 50 | 0, i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12IconDatabase20retainIconForPageURLERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 31](i1) | 0)) {
  STACKTOP = i3;
  return;
 }
 if (!(__ZN7WebCore19documentCanHaveIconERKN3WTF6StringE(i2) | 0)) {
  STACKTOP = i3;
  return;
 }
 i7 = i1 + 420 | 0;
 i8 = (i7 | 0) == 0;
 if (!i8) {
  __ZN3WTF5Mutex4lockEv(i7);
 }
 __ZNKR3WTF6String12isolatedCopyEv(i5, i2);
 HEAP32[i4 >> 2] = 0;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_jEENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_jS6_NS_10HashTraitsIS1_EENS8_IjEEE18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISC_S6_EERKS1_iEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SC_S9_EEEEOT0_OT1_(i6, i1 + 444 | 0, i5, i4);
 i4 = (HEAP32[i6 >> 2] | 0) + 4 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i4 = HEAP32[i5 >> 2] | 0;
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
 HEAP8[i1 + 484 | 0] = 1;
 if (!i8) {
  __ZN3WTF5Mutex6unlockEv(i7);
 }
 i7 = i1 + 96 | 0;
 if ((HEAP8[i7] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 HEAP8[i7] = 1;
 __ZN3WTF16callOnMainThreadEPFvPvES0_(F_BASE_vi + 50 | 0, i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12IconDatabase34synchronousIconDataKnownForIconURLERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = i1 + 188 | 0;
 i4 = (i3 | 0) == 0;
 if (!i4) {
  __ZN3WTF5Mutex4lockEv(i3);
 }
 i5 = HEAP32[i1 + 220 >> 2] | 0;
 i6 = HEAP32[i1 + 212 >> 2] | 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i7 = HEAP32[i2 + 16 >> 2] | 0;
 if (i7 >>> 0 > 127 >>> 0) {
  i8 = i7 >>> 7;
 } else {
  i8 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i2) | 0;
 }
 L8 : do {
  if ((i6 | 0) == 0) {
   i9 = 0;
  } else {
   i2 = (i8 >>> 23) + ~i8 | 0;
   i7 = i2 << 12 ^ i2;
   i2 = i7 >>> 7 ^ i7;
   i7 = i2 << 2 ^ i2;
   i2 = i7 >>> 20 ^ i7 | 1;
   i7 = i8;
   i10 = 0;
   while (1) {
    i11 = i7 & i5;
    i12 = i6 + (i11 << 3) | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    i14 = i13;
    if ((i14 | 0) == 0) {
     i9 = 0;
     break L8;
    } else if ((i14 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i13, HEAP32[i1 >> 2] | 0) | 0) {
      break;
     }
    }
    i13 = (i10 | 0) == 0 ? i2 : i10;
    i7 = i13 + i11 | 0;
    i10 = i13;
   }
   if ((i12 | 0) == 0) {
    i9 = 0;
    break;
   }
   i10 = HEAP32[i6 + (i11 << 3) + 4 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i9 = 0;
    break;
   }
   i9 = (__ZN7WebCore10IconRecord15imageDataStatusEv(i10) | 0) != 2;
  }
 } while (0);
 if (i4) {
  return i9 | 0;
 }
 __ZN3WTF5Mutex6unlockEv(i3);
 return i9 | 0;
}
function __ZN7WebCore12IconDatabaseC2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 3640;
 i2 = i1 + 8 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 3432;
 HEAP32[i1 + 52 >> 2] = i1;
 i2 = i1 + 56 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 18;
 HEAP32[i2 + 4 >> 2] = 0;
 HEAP8[i1 + 68 | 0] = 0;
 _memset(i1 + 72 | 0, 0, 27) | 0;
 __ZN3WTF5MutexC1Ev(i1 + 100 | 0);
 __ZN3WTF15ThreadConditionC1Ev(i1 + 124 | 0);
 _memset(i1 + 172 | 0, 0, 13) | 0;
 __ZN3WTF5MutexC1Ev(i1 + 188 | 0);
 _memset(i1 + 212 | 0, 0, 60) | 0;
 __ZN3WTF5MutexC1Ev(i1 + 272 | 0);
 _memset(i1 + 296 | 0, 0, 40) | 0;
 __ZN3WTF5MutexC1Ev(i1 + 336 | 0);
 _memset(i1 + 360 | 0, 0, 60) | 0;
 __ZN3WTF5MutexC1Ev(i1 + 420 | 0);
 i2 = i1 + 488 | 0;
 _memset(i1 + 444 | 0, 0, 42) | 0;
 if (HEAP8[H_BASE + 3776 | 0] | 0) {
  i3 = HEAP32[H_BASE + 3800 >> 2] | 0;
  HEAP32[i2 >> 2] = i3;
  i4 = i1 + 492 | 0;
  __ZN7WebCore14SQLiteDatabaseC1Ev(i4);
  i5 = i1 + 600 | 0;
  i6 = i5;
  _memset(i6 | 0, 0, 56) | 0;
  return;
 } else {
  i7 = __ZN3WTF10fastMallocEj(4) | 0;
  HEAP32[i7 >> 2] = H_BASE + 3528;
  i8 = i7;
  HEAP32[H_BASE + 3800 >> 2] = i8;
  HEAP8[H_BASE + 3776 | 0] = 1;
  i3 = i8;
  HEAP32[i2 >> 2] = i3;
  i4 = i1 + 492 | 0;
  __ZN7WebCore14SQLiteDatabaseC1Ev(i4);
  i5 = i1 + 600 | 0;
  i6 = i5;
  _memset(i6 | 0, 0, 56) | 0;
  return;
 }
}
function __ZN7WebCore12IconDatabaseC1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 3640;
 i2 = i1 + 8 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 3432;
 HEAP32[i1 + 52 >> 2] = i1;
 i2 = i1 + 56 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 18;
 HEAP32[i2 + 4 >> 2] = 0;
 HEAP8[i1 + 68 | 0] = 0;
 _memset(i1 + 72 | 0, 0, 27) | 0;
 __ZN3WTF5MutexC1Ev(i1 + 100 | 0);
 __ZN3WTF15ThreadConditionC1Ev(i1 + 124 | 0);
 _memset(i1 + 172 | 0, 0, 13) | 0;
 __ZN3WTF5MutexC1Ev(i1 + 188 | 0);
 _memset(i1 + 212 | 0, 0, 60) | 0;
 __ZN3WTF5MutexC1Ev(i1 + 272 | 0);
 _memset(i1 + 296 | 0, 0, 40) | 0;
 __ZN3WTF5MutexC1Ev(i1 + 336 | 0);
 _memset(i1 + 360 | 0, 0, 60) | 0;
 __ZN3WTF5MutexC1Ev(i1 + 420 | 0);
 i2 = i1 + 488 | 0;
 _memset(i1 + 444 | 0, 0, 42) | 0;
 if (HEAP8[H_BASE + 3776 | 0] | 0) {
  i3 = HEAP32[H_BASE + 3800 >> 2] | 0;
  HEAP32[i2 >> 2] = i3;
  i4 = i1 + 492 | 0;
  __ZN7WebCore14SQLiteDatabaseC1Ev(i4);
  i5 = i1 + 600 | 0;
  i6 = i5;
  _memset(i6 | 0, 0, 56) | 0;
  return;
 } else {
  i7 = __ZN3WTF10fastMallocEj(4) | 0;
  HEAP32[i7 >> 2] = H_BASE + 3528;
  i8 = i7;
  HEAP32[H_BASE + 3800 >> 2] = i8;
  HEAP8[H_BASE + 3776 | 0] = 1;
  i3 = i8;
  HEAP32[i2 >> 2] = i3;
  i4 = i1 + 492 | 0;
  __ZN7WebCore14SQLiteDatabaseC1Ev(i4);
  i5 = i1 + 600 | 0;
  i6 = i5;
  _memset(i6 | 0, 0, 56) | 0;
  return;
 }
}
function __ZNK3WTF12StringAppendINS0_INS_6StringES1_EEPKcEcvS1_Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i8 = i7 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i5 + 4 | 0;
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i9 = i7 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_12StringAppendINS_6StringES2_EEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, HEAP32[i2 + 8 >> 2] | 0);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i8 = i2 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i8 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i5;
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
function __ZN7WebCore12IconDatabase34getIconIDForIconURLFromSQLDatabaseERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 608 | 0;
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 1888 | 0);
 __ZN7WebCore20readySQLiteStatementERN3WTF6OwnPtrINS_15SQLiteStatementEEERNS_14SQLiteDatabaseERKNS0_6StringE(i5, i1 + 492 | 0, i4);
 i1 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i1 = i5 | 0;
 __ZN7WebCore15SQLiteStatement8bindTextEiRKN3WTF6StringE(HEAP32[i1 >> 2] | 0, 1, i2) | 0;
 i2 = __ZN7WebCore15SQLiteStatement4stepEv(HEAP32[i1 >> 2] | 0) | 0;
 if ((i2 | 0) != (HEAP32[__ZN7WebCore12SQLResultRowE >> 2] | 0)) {
  i7 = 0;
  i8 = 0;
  i9 = HEAP32[i1 >> 2] | 0;
  i10 = __ZN7WebCore15SQLiteStatement5resetEv(i9) | 0;
  STACKTOP = i3;
  return (tempRet0 = i7, i8) | 0;
 }
 i2 = __ZN7WebCore15SQLiteStatement14getColumnInt64Ei(HEAP32[i1 >> 2] | 0, 0) | 0;
 i7 = tempRet0;
 i8 = i2;
 i9 = HEAP32[i1 >> 2] | 0;
 i10 = __ZN7WebCore15SQLiteStatement5resetEv(i9) | 0;
 STACKTOP = i3;
 return (tempRet0 = i7, i8) | 0;
}
function __ZN7WebCore20readySQLiteStatementERN3WTF6OwnPtrINS_15SQLiteStatementEEERNS_14SQLiteDatabaseERKNS0_6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = i1 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   do {
    if ((HEAP32[i1 >> 2] | 0) == (i2 | 0)) {
     if (!(__ZN7WebCore15SQLiteStatement9isExpiredEv(i1) | 0)) {
      break;
     }
     i5 = HEAP32[i4 >> 2] | 0;
     i6 = 5;
    } else {
     i5 = i1;
     i6 = 5;
    }
   } while (0);
   if ((i6 | 0) == 5) {
    __ZN7WebCore15SQLiteStatement9isExpiredEv(i5) | 0;
    i7 = HEAP32[i4 >> 2] | 0;
    HEAP32[i4 >> 2] = 0;
    if ((i7 | 0) == 0) {
     break;
    }
    __ZN7WebCore15SQLiteStatementD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
   }
   if ((HEAP32[i4 >> 2] | 0) == 0) {
    break;
   }
   return;
  }
 } while (0);
 i5 = __ZN3WTF10fastMallocEj(12) | 0;
 __ZN7WebCore15SQLiteStatementC1ERNS_14SQLiteDatabaseERKN3WTF6StringE(i5, i2, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i3 | 0) == 0) {
  i8 = i5;
 } else {
  __ZN7WebCore15SQLiteStatementD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
  i8 = HEAP32[i4 >> 2] | 0;
 }
 __ZN7WebCore15SQLiteStatement7prepareEv(i8) | 0;
 return;
}
function __ZN7WebCore12IconDatabase32setIconIDForPageURLInSQLDatabaseExRKN3WTF6StringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i1 + 600 | 0;
 __ZN3WTF6StringC1EPKc(i6, H_BASE + 1992 | 0);
 __ZN7WebCore20readySQLiteStatementERN3WTF6OwnPtrINS_15SQLiteStatementEEERNS_14SQLiteDatabaseERKNS0_6StringE(i7, i1 + 492 | 0, i6);
 i1 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i6 = i1 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i6 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i1 = i7 | 0;
 __ZN7WebCore15SQLiteStatement8bindTextEiRKN3WTF6StringE(HEAP32[i1 >> 2] | 0, 1, i4) | 0;
 __ZN7WebCore15SQLiteStatement9bindInt64Eix(HEAP32[i1 >> 2] | 0, 2, i2, i3) | 0;
 __ZN7WebCore15SQLiteStatement4stepEv(HEAP32[i1 >> 2] | 0) | 0;
 __ZN7WebCore15SQLiteStatement5resetEv(HEAP32[i1 >> 2] | 0) | 0;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore12IconDatabase28removePageURLFromSQLDatabaseERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 604 | 0;
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 1952 | 0);
 __ZN7WebCore20readySQLiteStatementERN3WTF6OwnPtrINS_15SQLiteStatementEEERNS_14SQLiteDatabaseERKNS0_6StringE(i5, i1 + 492 | 0, i4);
 i1 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i1 = i5 | 0;
 __ZN7WebCore15SQLiteStatement8bindTextEiRKN3WTF6StringE(HEAP32[i1 >> 2] | 0, 1, i2) | 0;
 __ZN7WebCore15SQLiteStatement4stepEv(HEAP32[i1 >> 2] | 0) | 0;
 __ZN7WebCore15SQLiteStatement5resetEv(HEAP32[i1 >> 2] | 0) | 0;
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorIPN7WebCore10IconRecordELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore12IconDatabase21wasExcludedFromBackupEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 1248 | 0);
 __ZN7WebCore15SQLiteStatementC1ERNS_14SQLiteDatabaseERKN3WTF6StringE(i3, i1 + 492 | 0, i4);
 i1 = (__ZN7WebCore15SQLiteStatement12getColumnIntEi(i3, 0) | 0) != 0;
 __ZN7WebCore15SQLiteStatementD1Ev(i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return i1 | 0;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  STACKTOP = i2;
  return i1 | 0;
 } else {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return i1 | 0;
 }
 return 0;
}
function __ZN7WebCore12IconDatabase33setIconURLForPageURLInSQLDatabaseERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = __ZN7WebCore12IconDatabase34getIconIDForIconURLFromSQLDatabaseERKN3WTF6StringE(i1, i2) | 0;
 i5 = tempRet0;
 do {
  if ((i4 | 0) == 0 & (i5 | 0) == 0) {
   i6 = __ZN7WebCore12IconDatabase23addIconURLToSQLDatabaseERKN3WTF6StringE(i1, i2) | 0;
   i7 = tempRet0;
   if (!((i6 | 0) == 0 & (i7 | 0) == 0)) {
    i8 = i7;
    i9 = i6;
    break;
   }
   return;
  } else {
   i8 = i5;
   i9 = i4;
  }
 } while (0);
 __ZN7WebCore12IconDatabase32setIconIDForPageURLInSQLDatabaseExRKN3WTF6StringE(i1, i9, i8, i3);
 return;
}
function __ZN7WebCore12IconDatabase24setWasExcludedFromBackupEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 1168 | 0);
 __ZN7WebCore15SQLiteStatementC1ERNS_14SQLiteDatabaseERKN3WTF6StringE(i3, i1 + 492 | 0, i4);
 __ZN7WebCore15SQLiteStatement14executeCommandEv(i3) | 0;
 __ZN7WebCore15SQLiteStatementD1Ev(i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore12IconDatabase5closeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 68 | 0;
 i3 = i1 + 180 | 0;
 if ((HEAP8[i2] & 1) != 0) {
  HEAP8[i3] = 1;
  i4 = i1 + 100 | 0;
  i5 = (i4 | 0) == 0;
  if (!i5) {
   __ZN3WTF5Mutex4lockEv(i4);
  }
  i6 = i1 + 184 | 0;
  if ((HEAP8[i6] & 1) == 0) {
   HEAP8[i6] = 1;
  }
  HEAP8[i1 + 183 | 0] = 1;
  __ZN3WTF15ThreadCondition6signalEv(i1 + 124 | 0);
  if (!i5) {
   __ZN3WTF5Mutex6unlockEv(i4);
  }
  __ZN3WTF23waitForThreadCompletionEj(HEAP32[i1 + 64 >> 2] | 0) | 0;
 }
 HEAP8[i2] = 0;
 HEAP8[i3] = 0;
 HEAP8[i1 + 181 | 0] = 0;
 __ZN7WebCore14SQLiteDatabase5closeEv(i1 + 492 | 0);
 return;
}
function __ZN7WebCore12IconDatabase31synchronousNativeIconForPageURLERKN3WTF6StringERKNS_7IntSizeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i2 >> 2] | 0) + 40 >> 2] & 7](i2, i3, i4) | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  __ZN3WTF12refIfNotNullI14_cairo_surfaceEEvPT_(0);
  return;
 }
 i4 = i2 + 188 | 0;
 if ((i4 | 0) == 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 80 >> 2] & 31](i1, i5);
  return;
 } else {
  __ZN3WTF5Mutex4lockEv(i4);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 80 >> 2] & 31](i1, i5);
  __ZN3WTF5Mutex6unlockEv(i4);
  return;
 }
}
function __ZN7WebCore34ImportedIconDataForPageURLWorkItemD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 3464;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZN3WTF8fastFreeEPv(i3);
  return;
 }
 i4 = HEAP32[i2 >> 2] | 0;
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
 __ZdlPv(i2);
 i3 = i1;
 __ZN3WTF8fastFreeEPv(i3);
 return;
}
function __ZN7WebCore33ImportedIconURLForPageURLWorkItemD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 3496;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZN3WTF8fastFreeEPv(i3);
  return;
 }
 i4 = HEAP32[i2 >> 2] | 0;
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
 __ZdlPv(i2);
 i3 = i1;
 __ZN3WTF8fastFreeEPv(i3);
 return;
}
function __ZN7WebCore12IconDatabase22removeAllIconsOnThreadEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 __ZN7WebCore12IconDatabase27deleteAllPreparedStatementsEv(i1);
 i2 = i1 + 492 | 0;
 __ZN7WebCore14SQLiteDatabase14clearAllTablesEv(i2);
 __ZN7WebCore14SQLiteDatabase16runVacuumCommandEv(i2) | 0;
 __ZN7WebCoreL20createDatabaseTablesERNS_14SQLiteDatabaseE(i2);
 i2 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i2 + 4 >> 2] = HEAP32[i1 + 488 >> 2];
 HEAP32[i2 >> 2] = H_BASE + 3576;
 __ZN3WTF16callOnMainThreadEPFvPvES0_(F_BASE_vi + 44 | 0, i2);
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
function __ZN7WebCore12IconDatabase23defaultDatabaseFilenameEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if (HEAP8[H_BASE + 3784 | 0] | 0) {
  i4 = HEAP32[H_BASE + 3808 >> 2] | 0;
 } else {
  i5 = __Znwj(4) | 0;
  HEAP32[i3 >> 2] = H_BASE + 1640;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i5, i3);
  HEAP32[H_BASE + 3808 >> 2] = i5;
  HEAP8[H_BASE + 3784 | 0] = 1;
  i4 = i5;
 }
 __ZNKR3WTF6String12isolatedCopyEv(i1, i4);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore12IconDatabase20retainedPageURLCountEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 188 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore12IconDatabase40performPendingRetainAndReleaseOperationsEv(i1);
  i3 = HEAP32[i1 + 264 >> 2] | 0;
  return i3 | 0;
 } else {
  __ZN3WTF5Mutex4lockEv(i2);
  __ZN7WebCore12IconDatabase40performPendingRetainAndReleaseOperationsEv(i1);
  i4 = HEAP32[i1 + 264 >> 2] | 0;
  __ZN3WTF5Mutex6unlockEv(i2);
  i3 = i4;
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore34ImportedIconDataForPageURLWorkItemD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 3464;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZdlPv(i2);
 return;
}
function __ZN7WebCore33ImportedIconURLForPageURLWorkItemD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 3496;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZdlPv(i2);
 return;
}
function __ZN7WebCore5TimerINS_12IconDatabaseEE5firedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 48 | 0;
 i3 = (HEAP32[i1 + 44 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i4 = i3;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i6 = i5;
  FUNCTION_TABLE_vii[i6 & 31](i4, i1);
  return;
 } else {
  i6 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i5 - 1) >> 2] | 0;
  FUNCTION_TABLE_vii[i6 & 31](i4, i1);
  return;
 }
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
function __ZN7WebCore12IconDatabase47dispatchDidImportIconDataForPageURLOnMainThreadERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 488 >> 2];
 HEAP32[i3 >> 2] = H_BASE + 3464;
 i1 = __Znwj(4) | 0;
 __ZNKR3WTF6String12isolatedCopyEv(i1, i2);
 HEAP32[i3 + 8 >> 2] = i1;
 __ZN3WTF16callOnMainThreadEPFvPvES0_(F_BASE_vi + 44 | 0, i3);
 return;
}
function __ZN7WebCore12IconDatabase46dispatchDidImportIconURLForPageURLOnMainThreadERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 488 >> 2];
 HEAP32[i3 >> 2] = H_BASE + 3496;
 i1 = __Znwj(4) | 0;
 __ZNKR3WTF6String12isolatedCopyEv(i1, i2);
 HEAP32[i3 + 8 >> 2] = i1;
 __ZN3WTF16callOnMainThreadEPFvPvES0_(F_BASE_vi + 44 | 0, i3);
 return;
}
function __ZN7WebCore12IconDatabase14syncTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i2 = i1 + 100 | 0;
 i3 = (i2 | 0) == 0;
 if (!i3) {
  __ZN3WTF5Mutex4lockEv(i2);
 }
 i4 = i1 + 184 | 0;
 if ((HEAP8[i4] & 1) == 0) {
  HEAP8[i4] = 1;
 }
 HEAP8[i1 + 183 | 0] = 1;
 __ZN3WTF15ThreadCondition6signalEv(i1 + 124 | 0);
 if (i3) {
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i2);
 return;
}
function __ZN7WebCore12IconDatabase14wakeSyncThreadEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 100 | 0;
 i3 = (i2 | 0) == 0;
 if (!i3) {
  __ZN3WTF5Mutex4lockEv(i2);
 }
 i4 = i1 + 184 | 0;
 if ((HEAP8[i4] & 1) == 0) {
  HEAP8[i4] = 1;
 }
 HEAP8[i1 + 183 | 0] = 1;
 __ZN3WTF15ThreadCondition6signalEv(i1 + 124 | 0);
 if (i3) {
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i2);
 return;
}
function __ZNK7WebCore12IconDatabase6isOpenEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 100 | 0;
 if ((i2 | 0) == 0) {
  i3 = HEAP32[i1 + 492 >> 2] | 0;
  i4 = (i3 | 0) != 0;
  return i4 | 0;
 } else {
  __ZN3WTF5Mutex4lockEv(i2);
  i5 = HEAP32[i1 + 492 >> 2] | 0;
  __ZN3WTF5Mutex6unlockEv(i2);
  i3 = i5;
  i4 = (i3 | 0) != 0;
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore12IconDatabase26readIconForPageURLFromDiskERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[(HEAP32[i1 >> 2] | 0) + 40 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 FUNCTION_TABLE_iiii[i5 & 7](i1, i2, i4) | 0;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore12IconDatabase12databasePathEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 + 100 | 0;
 if ((i3 | 0) == 0) {
  __ZNKR3WTF6String12isolatedCopyEv(i1, i2 + 176 | 0);
  return;
 } else {
  __ZN3WTF5Mutex4lockEv(i3);
  __ZNKR3WTF6String12isolatedCopyEv(i1, i2 + 176 | 0);
  __ZN3WTF5Mutex6unlockEv(i3);
  return;
 }
}
function __ZN7WebCore12IconDatabase19pageURLMappingCountEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 188 | 0;
 if ((i2 | 0) == 0) {
  i3 = HEAP32[i1 + 244 >> 2] | 0;
  return i3 | 0;
 } else {
  __ZN3WTF5Mutex4lockEv(i2);
  i4 = HEAP32[i1 + 244 >> 2] | 0;
  __ZN3WTF5Mutex6unlockEv(i2);
  i3 = i4;
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore12IconDatabase15iconRecordCountEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 188 | 0;
 if ((i2 | 0) == 0) {
  i3 = HEAP32[i1 + 224 >> 2] | 0;
  return i3 | 0;
 } else {
  __ZN3WTF5Mutex4lockEv(i2);
  i4 = HEAP32[i1 + 224 >> 2] | 0;
  __ZN3WTF5Mutex6unlockEv(i2);
  i3 = i4;
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore12IconDatabase10setEnabledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 do {
  if (!i2) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 108 >> 2] & 31](i1) | 0)) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 92 >> 2] & 63](i1);
  }
 } while (0);
 HEAP8[i1 + 97 | 0] = i2 & 1;
 return;
}
function __ZN7WebCore12IconDatabase38dispatchDidFinishURLImportOnMainThreadEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i2 + 4 >> 2] = HEAP32[i1 + 488 >> 2];
 HEAP32[i2 >> 2] = H_BASE + 3608;
 __ZN3WTF16callOnMainThreadEPFvPvES0_(F_BASE_vi + 44 | 0, i2);
 return;
}
function __ZN7WebCore12IconDatabase37dispatchDidRemoveAllIconsOnMainThreadEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i2 + 4 >> 2] = HEAP32[i1 + 488 >> 2];
 HEAP32[i2 >> 2] = H_BASE + 3576;
 __ZN3WTF16callOnMainThreadEPFvPvES0_(F_BASE_vi + 44 | 0, i2);
 return;
}
function __ZN7WebCore34ImportedIconDataForPageURLWorkItem11performWorkEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 4 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 31](i3, HEAP32[i1 + 8 >> 2] | 0);
 HEAP32[i2 >> 2] = 0;
 return;
}
function __ZN7WebCore33ImportedIconURLForPageURLWorkItem11performWorkEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 4 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 31](i3, HEAP32[i1 + 8 >> 2] | 0);
 HEAP32[i2 >> 2] = 0;
 return;
}
function __ZN7WebCoreL15performWorkItemEPv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1;
 i3 = i1;
 FUNCTION_TABLE_vi[HEAP32[HEAP32[i3 >> 2] >> 2] & 63](i2);
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 63](i2);
 return;
}
function __ZN7WebCore12IconDatabase24scheduleOrDeferSyncTimerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 96 | 0;
 if ((HEAP8[i2] & 1) != 0) {
  return;
 }
 HEAP8[i2] = 1;
 __ZN3WTF16callOnMainThreadEPFvPvES0_(F_BASE_vi + 50 | 0, i1);
 return;
}
function __ZN7WebCore23RemovedAllIconsWorkItem11performWorkEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 4 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 63](i1);
 HEAP32[i2 >> 2] = 0;
 return;
}
function __ZN7WebCore17FinishedURLImport11performWorkEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 4 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 63](i1);
 HEAP32[i2 >> 2] = 0;
 return;
}
function __ZN7WebCore12IconDatabase9setClientEPNS_18IconDatabaseClientE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP8[i1 + 68 | 0] & 1) != 0) {
  return;
 }
 HEAP32[i1 + 488 >> 2] = i2;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore12IconDatabase24shouldStopThreadActivityEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP8[i1 + 180 | 0] & 1) != 0) {
  i2 = 1;
  return i2 | 0;
 }
 i2 = (HEAP8[i1 + 181 | 0] & 1) != 0;
 return i2 | 0;
}
function __ZN7WebCore16IconDatabaseBase22loadDecisionForIconURLERKN3WTF6StringENS1_10PassRefPtrINS_12EnumCallbackINS_16IconLoadDecisionEEEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZN7WebCore16IconDatabaseBase18iconDataForIconURLERKN3WTF6StringENS1_10PassRefPtrINS_14ObjectCallbackIPNS_12SharedBufferEEEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZN7WebCore12IconDatabase43performScheduleOrDeferSyncTimerOnMainThreadEPv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBase5startEdd(i1 + 8 | 0, +5, +0);
 HEAP8[i1 + 96 | 0] = 0;
 return;
}
function __ZN7WebCore12IconDatabase20allowDatabaseCleanupEv() {
 var i1 = 0;
 i1 = (HEAP32[H_BASE + 3816 >> 2] | 0) - 1 | 0;
 HEAP32[H_BASE + 3816 >> 2] = (i1 | 0) < 0 ? 0 : i1;
 return;
}
function __ZN7WebCore12IconDatabase31performScheduleOrDeferSyncTimerEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBase5startEdd(i1 + 8 | 0, +5, +0);
 HEAP8[i1 + 96 | 0] = 0;
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore12IconDatabase38notifyPendingLoadDecisionsOnMainThreadEPv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12IconDatabase26notifyPendingLoadDecisionsEv(i1);
 return;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore12IconDatabase27iconDatabaseSyncThreadStartEPv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12IconDatabase22iconDatabaseSyncThreadEv(i1);
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 15](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore5TimerINS_12IconDatabaseEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function __ZN7WebCore12IconDatabase25setPrivateBrowsingEnabledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 + 98 | 0] = i2 & 1;
 return;
}
function __ZN7WebCore25DefaultIconDatabaseClient27didImportIconDataForPageURLERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore12IconDatabase20delayDatabaseCleanupEv() {
 HEAP32[H_BASE + 3816 >> 2] = (HEAP32[H_BASE + 3816 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore25DefaultIconDatabaseClient26didImportIconURLForPageURLERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore25DefaultIconDatabaseClient23didChangeIconForPageURLERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 7](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore12IconDatabaseD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12IconDatabaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
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
function __ZNK7WebCore12IconDatabase24isPrivateBrowsingEnabledEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 98 | 0] & 1) != 0 | 0;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function dynCall_did(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return +FUNCTION_TABLE_did[i1 & 3](i2 | 0, +d3);
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 31](i2 | 0, i3 | 0);
}
function __ZN7WebCore5TimerINS_12IconDatabaseEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 return;
}
function __ZNK7WebCore12IconDatabase9isEnabledEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 97 | 0] & 1) != 0 | 0;
}
function __ZN7WebCore12IconDatabase27checkIntegrityBeforeOpeningEv() {
 HEAP8[H_BASE + 3824 | 0] = 1;
 return;
}
function __ZN7WebCore25DefaultIconDatabaseClientD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore23RemovedAllIconsWorkItemD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function __ZN7WebCore17FinishedURLImportD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore9TimerBase15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +d2;
}
function __ZN7WebCore25DefaultIconDatabaseClient18didFinishURLImportEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore25DefaultIconDatabaseClient17didRemoveAllIconsEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore16IconDatabaseBase24supportsAsynchronousModeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b8(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(8);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
 return 0;
}
function __ZN7WebCore25DefaultIconDatabaseClientD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore23RemovedAllIconsWorkItemD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
}
function __ZN7WebCore17FinishedURLImportD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function b7(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(7);
 return 0;
}
function b1(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(1);
 return +0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
}
function b6() {
 abort(6);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0,__ZN7WebCore12IconDatabase19pageURLMappingCountEv,b0,__ZNK7WebCore12IconDatabase6isOpenEv,b0,__ZN7WebCore12IconDatabase20retainedPageURLCountEv,b0,__ZNK7WebCore12IconDatabase9isEnabledEv,b0,__ZNK7WebCore12IconDatabase24shouldStopThreadActivityEv,b0,__ZN7WebCore12IconDatabase23iconRecordCountWithDataEv,b0,__ZN7WebCore12IconDatabase15iconRecordCountEv,b0,__ZN7WebCore16IconDatabaseBase24supportsAsynchronousModeEv,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0];
  var FUNCTION_TABLE_did = [b1,b1,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore34ImportedIconDataForPageURLWorkItemD0Ev,b2,__ZN7WebCore25DefaultIconDatabaseClientD1Ev,b2,__ZN7WebCore33ImportedIconURLForPageURLWorkItemD1Ev,b2,__ZN7WebCore25DefaultIconDatabaseClient18didFinishURLImportEv,b2,__ZN7WebCore34ImportedIconDataForPageURLWorkItemD1Ev,b2,__ZN7WebCore23RemovedAllIconsWorkItemD1Ev,b2,__ZN7WebCore5TimerINS_12IconDatabaseEED1Ev,b2,__ZN7WebCore23RemovedAllIconsWorkItemD0Ev,b2,__ZN7WebCore5TimerINS_12IconDatabaseEED0Ev,b2,__ZN7WebCore25DefaultIconDatabaseClientD0Ev,b2,__ZN7WebCore25DefaultIconDatabaseClient17didRemoveAllIconsEv,b2,__ZN7WebCore17FinishedURLImportD0Ev,b2,__ZN7WebCore34ImportedIconDataForPageURLWorkItem11performWorkEv,b2,__ZN7WebCore12IconDatabase38notifyPendingLoadDecisionsOnMainThreadEPv
  ,b2,__ZN7WebCore5TimerINS_12IconDatabaseEE5firedEv,b2,__ZN7WebCore17FinishedURLImport11performWorkEv,b2,__ZN7WebCore17FinishedURLImportD1Ev,b2,__ZN7WebCore12IconDatabaseD0Ev,b2,__ZN7WebCore12IconDatabase27iconDatabaseSyncThreadStartEPv,b2,__ZN7WebCore33ImportedIconURLForPageURLWorkItem11performWorkEv,b2,__ZN7WebCore12IconDatabaseD2Ev,b2,__ZN7WebCoreL15performWorkItemEPv,b2,__ZN7WebCore23RemovedAllIconsWorkItem11performWorkEv,b2,__ZN7WebCore12IconDatabase5closeEv,b2,__ZN7WebCore12IconDatabase43performScheduleOrDeferSyncTimerOnMainThreadEPv,b2,__ZN7WebCore12IconDatabase14removeAllIconsEv,b2,__ZN7WebCore12IconDatabaseC2Ev,b2,__ZN7WebCore33ImportedIconURLForPageURLWorkItemD0Ev,b2,b2
  ,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZN7WebCore25DefaultIconDatabaseClient23didChangeIconForPageURLERKN3WTF6StringE,b3,__ZN7WebCore25DefaultIconDatabaseClient26didImportIconURLForPageURLERKN3WTF6StringE,b3,__ZN7WebCore12IconDatabase21releaseIconForPageURLERKN3WTF6StringE,b3,__ZN7WebCore12IconDatabase25setPrivateBrowsingEnabledEb,b3,__ZNK7WebCore12IconDatabase12databasePathEv,b3,__ZN7WebCore25DefaultIconDatabaseClient27didImportIconDataForPageURLERKN3WTF6StringE,b3,__ZN7WebCore12IconDatabase20retainIconForPageURLERKN3WTF6StringE,b3,__ZN7WebCore12IconDatabase9setClientEPNS_18IconDatabaseClientE,b3,__ZN7WebCore12IconDatabase14syncTimerFiredEPNS_5TimerIS0_EE,b3,__ZN7WebCore12IconDatabase10setEnabledEb,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_iiii = [b4,b4,__ZN7WebCore12IconDatabase33synchronousLoadDecisionForIconURLERKN3WTF6StringEPNS_14DocumentLoaderE,b4,__ZN7WebCore12IconDatabase25synchronousIconForPageURLERKN3WTF6StringERKNS_7IntSizeE,b4,__ZN7WebCore12IconDatabase4openERKN3WTF6StringES4_,b4];
  var FUNCTION_TABLE_viii = [b5,b5,__ZN7WebCore12IconDatabase21setIconDataForIconURLEN3WTF10PassRefPtrINS_12SharedBufferEEERKNS1_6StringE,b5,__ZN7WebCore12IconDatabase20setIconURLForPageURLERKN3WTF6StringES4_,b5,__ZN7WebCore12IconDatabase28synchronousIconURLForPageURLERKN3WTF6StringE,b5,__ZN7WebCore16IconDatabaseBase18iconDataForIconURLERKN3WTF6StringENS1_10PassRefPtrINS_14ObjectCallbackIPNS_12SharedBufferEEEEE,b5,__ZN7WebCore16IconDatabaseBase22loadDecisionForIconURLERKN3WTF6StringENS1_10PassRefPtrINS_12EnumCallbackINS_16IconLoadDecisionEEEEE,b5,b5,b5,b5,b5];
  var FUNCTION_TABLE_v = [b6,b6];
  var FUNCTION_TABLE_iii = [b7,b7,__ZN7WebCore12IconDatabase11defaultIconERKNS_7IntSizeE,b7,__ZN7WebCore12IconDatabase34synchronousIconDataKnownForIconURLERKN3WTF6StringE,b7,b7,b7];
  var FUNCTION_TABLE_viiii = [b8,b8,__ZN7WebCore12IconDatabase31synchronousNativeIconForPageURLERKN3WTF6StringERKNS_7IntSizeE,b8];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore11SQLResultOkE": __ZN7WebCore11SQLResultOkE, "__ZN7WebCore13SQLResultDoneE": __ZN7WebCore13SQLResultDoneE, "__ZN7WebCore12SQLResultRowE": __ZN7WebCore12SQLResultRowE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore12IconDatabase18syncThreadMainLoopEv","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore12IconSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS1_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_","__ZN7WebCore12IconDatabase34getIconIDForIconURLFromSQLDatabaseERKN3WTF6StringE","__ZN7WebCore12IconDatabase21setIconDataForIconURLEN3WTF10PassRefPtrINS_12SharedBufferEEERKNS1_6StringE","__ZN7WebCore12IconDatabase20setIconURLForPageURLERKN3WTF6StringES4_","__ZN7WebCore12IconDatabase14wakeSyncThreadEv","__ZN7WebCore23RemovedAllIconsWorkItemD0Ev","__ZN7WebCore12IconDatabase23defaultDatabaseFilenameEv","__ZN7WebCore25DefaultIconDatabaseClient26didImportIconURLForPageURLERKN3WTF6StringE","__ZN7WebCore12IconDatabase46dispatchDidImportIconURLForPageURLOnMainThreadERKN3WTF6StringE","__ZN7WebCore25DefaultIconDatabaseClientD0Ev","__ZN7WebCore12IconDatabase27performRetainIconForPageURLERKN3WTF6StringEi","__ZN7WebCore12IconDatabase37getImageDataForIconURLFromSQLDatabaseERKN3WTF6StringE","__ZN7WebCore12IconDatabase11defaultIconERKNS_7IntSizeE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore15PageURLSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKS1_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_","__ZN7WebCore34ImportedIconDataForPageURLWorkItem11performWorkEv","__ZN7WebCore12IconDatabase24scheduleOrDeferSyncTimerEv","_memcpy","__ZNK7WebCore12IconDatabase24isPrivateBrowsingEnabledEv","__ZN7WebCore12IconDatabase27checkIntegrityBeforeOpeningEv","__ZN7WebCore12IconDatabase24checkForDanglingPageURLsEb","__ZNK7WebCore12IconDatabase6isOpenEv","__ZN7WebCore12IconDatabase26readIconForPageURLFromDiskERKN3WTF6StringE","__ZN7WebCore17FinishedURLImportD1Ev","__ZN7WebCore12IconDatabase20retainedPageURLCountEv","__ZN7WebCore25DefaultIconDatabaseClient27didImportIconDataForPageURLERKN3WTF6StringE","__ZNK7WebCore12IconDatabase9isEnabledEv","__ZN7WebCore12IconDatabase5closeEv","__ZN7WebCoreL20createDatabaseTablesERNS_14SQLiteDatabaseE","__ZN7WebCore12IconDatabase43performScheduleOrDeferSyncTimerOnMainThreadEPv","__ZN7WebCore12IconDatabase14removeAllIconsEv","__ZN3WTF6VectorIPN7WebCore10IconRecordELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore12IconDatabaseC2Ev","__ZN7WebCore5TimerINS_12IconDatabaseEE5firedEv","__ZN7WebCore25DefaultIconDatabaseClient18didFinishURLImportEv","__ZN7WebCore12IconDatabase25synchronousIconForPageURLERKN3WTF6StringERKNS_7IntSizeE","__ZN7WebCore33ImportedIconURLForPageURLWorkItemD0Ev","__ZN7WebCore12IconDatabase16readFromDatabaseEv","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore13PageURLRecordEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS1_RS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_","__ZN3WTF12StringAppendINS_6StringES1_E7writeToEPt","__ZN7WebCore16IconDatabaseBase22loadDecisionForIconURLERKN3WTF6StringENS1_10PassRefPtrINS_12EnumCallbackINS_16IconLoadDecisionEEEEE","__ZN7WebCore12IconDatabase28synchronousIconURLForPageURLERKN3WTF6StringE","__ZN7WebCore12IconDatabase9setClientEPNS_18IconDatabaseClientE","__ZN7WebCore5TimerINS_12IconDatabaseEED1Ev","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_","__ZN7WebCore34ImportedIconDataForPageURLWorkItemD1Ev","__ZN7WebCore12IconDatabase27iconDatabaseSyncThreadStartEPv","__ZN7WebCore12IconDatabase32setIconIDForPageURLInSQLDatabaseExRKN3WTF6StringE","__ZNK7WebCore9TimerBase15alignedFireTimeEd","__ZN7WebCore12IconDatabase38notifyPendingLoadDecisionsOnMainThreadEPv","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore14DocumentLoaderEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_","__ZN7WebCore12IconDatabase24setWasExcludedFromBackupEv","__ZN7WebCore16IconDatabaseBase24supportsAsynchronousModeEv","__ZN7WebCore12IconDatabase21wasExcludedFromBackupEv","__ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN3WTF7HashSetIPN7WebCore10IconRecordENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN7WebCore12IconDatabase14checkIntegrityEv","__ZN7WebCore17FinishedURLImport11performWorkEv","__ZN7WebCore12IconDatabase22removeAllIconsOnThreadEv","__ZN7WebCore12IconDatabase25performOpenInitializationEv","__ZN3WTF6VectorIN7WebCore12IconSnapshotELj0ENS_15CrashOnOverflowEE11appendRangeINS_23HashTableValuesIteratorINS_9HashTableINS_6StringENS_12KeyValuePairIS8_S2_EENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS8_S2_SD_NS_10HashTraitsIS8_EENSF_IS2_EEE18KeyValuePairTraitsESG_EES8_S2_EEEEvT_SM_","__ZN7WebCore12IconDatabaseD2Ev","__ZN7WebCoreL15performWorkItemEPv","__ZNK7WebCore12IconDatabase24shouldStopThreadActivityEv","__ZN7WebCore12IconDatabase24getOrCreatePageURLRecordERKN3WTF6StringE","__ZN7WebCore12IconDatabase28performReleaseIconForPageURLERKN3WTF6StringEi","__ZN3WTF6VectorIN7WebCore12IconSnapshotELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore12IconDatabase16performURLImportEv","__ZN7WebCore12IconDatabase30writeIconSnapshotToSQLDatabaseERKNS_12IconSnapshotE","__ZN7WebCore12IconDatabase23iconRecordCountWithDataEv","__ZN7WebCore33ImportedIconURLForPageURLWorkItemD1Ev","__ZN7WebCore12IconDatabase37dispatchDidRemoveAllIconsOnMainThreadEv","__ZN7WebCore34ImportedIconDataForPageURLWorkItemD0Ev","__ZN7WebCore17FinishedURLImportD0Ev","__ZN3WTF7HashMapINS_6StringEPN7WebCore10IconRecordENS_10StringHashENS_10HashTraitsIS1_EENS6_IS4_EEE6removeERKS1_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore15PageURLSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E15deallocateTableEPS5_i","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore12IconSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6expandEPS5_","__ZN3WTF9HashTableIPN7WebCore10IconRecordES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZN7WebCore25DefaultIconDatabaseClient23didChangeIconForPageURLERKN3WTF6StringE","__ZN7WebCore5TimerINS_12IconDatabaseEED0Ev","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN3WTF13tryMakeStringINS_12StringAppendINS_6StringES2_EEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore12IconDatabase22iconDatabaseSyncThreadEv","__ZN3WTF6VectorIN7WebCore15PageURLSnapshotELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore12IconDatabase21releaseIconForPageURLERKN3WTF6StringE","__ZN7WebCore12IconDatabase28removePageURLFromSQLDatabaseERKN3WTF6StringE","__ZN7WebCore12IconDatabase40performPendingRetainAndReleaseOperationsEv","__ZN7WebCore12IconDatabase19pageURLMappingCountEv","__ZN7WebCore12IconDatabase47dispatchDidImportIconDataForPageURLOnMainThreadERKN3WTF6StringE","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_","__ZN7WebCore12IconDatabase25setPrivateBrowsingEnabledEb","__ZN7WebCore12IconDatabase20pruneUnretainedIconsEv","__ZN7WebCore12IconDatabase31performScheduleOrDeferSyncTimerEv","__ZN3WTF7HashMapINS_6StringEN7WebCore12IconSnapshotENS_10StringHashENS_10HashTraitsIS1_EENS5_IS3_EEE3setIS3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_NS_12KeyValuePairIS1_S3_EENS_24KeyValuePairKeyExtractorISD_EES4_NS8_18KeyValuePairTraitsES6_EEEEOS1_OT_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore15PageURLSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E8reinsertEOS5_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore10IconRecordEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS1_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore15PageURLSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6expandEPS5_","__ZN3WTF7HashMapINS_6StringEPN7WebCore13PageURLRecordENS_10StringHashENS_10HashTraitsIS1_EENS6_IS4_EEE6removeERKS1_","__ZN7WebCore12IconDatabase23addIconURLToSQLDatabaseERKN3WTF6StringE","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore14DocumentLoaderEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_","__ZN7WebCore12IconDatabase20delayDatabaseCleanupEv","__ZN7WebCore12IconDatabase20allowDatabaseCleanupEv","__ZN7WebCore12IconDatabase10setEnabledEb","__ZN7WebCore16IconDatabaseBase18iconDataForIconURLERKN3WTF6StringENS1_10PassRefPtrINS_14ObjectCallbackIPNS_12SharedBufferEEEEE","__ZN7WebCore12IconDatabase31synchronousNativeIconForPageURLERKN3WTF6StringERKNS_7IntSizeE","__ZN7WebCore12IconDatabase15iconRecordCountEv","__ZN7WebCore12IconDatabase25removeIconFromSQLDatabaseERKN3WTF6StringE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_jEENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_jS6_NS_10HashTraitsIS1_EENS8_IjEEE18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISC_S6_EERKS1_iEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SC_S9_EEEEOT0_OT1_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore12IconSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EES1_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_","__ZN7WebCore12IconDatabase27deleteAllPreparedStatementsEv","__ZN7WebCore25DefaultIconDatabaseClientD1Ev","__ZN7WebCore12IconDatabase15writeToDatabaseEv","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore14DocumentLoaderEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_","__ZN3WTF6VectorIN7WebCore15PageURLSnapshotELj0ENS_15CrashOnOverflowEE11appendRangeINS_23HashTableValuesIteratorINS_9HashTableINS_6StringENS_12KeyValuePairIS8_S2_EENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS8_S2_SD_NS_10HashTraitsIS8_EENSF_IS2_EEE18KeyValuePairTraitsESG_EES8_S2_EEEEvT_SM_","__ZN7WebCore23RemovedAllIconsWorkItemD1Ev","__ZN7WebCore12IconDatabase33synchronousLoadDecisionForIconURLERKN3WTF6StringEPNS_14DocumentLoaderE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore12IconSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E8reinsertEOS5_","__ZN3WTF9HashTableIPN7WebCore10IconRecordES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore10IconRecordEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_PN7WebCore13PageURLRecordEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_","__ZN7WebCore25DefaultIconDatabaseClient17didRemoveAllIconsEv","__ZN7WebCore12IconDatabase21getOrCreateIconRecordERKN3WTF6StringE","__ZNK3WTF12StringAppendINS0_INS_6StringES1_EEPKcEcvS1_Ev","__ZN7WebCore12IconDatabase38dispatchDidFinishURLImportOnMainThreadEv","__ZN7WebCore12IconDatabase33setIconURLForPageURLInSQLDatabaseERKN3WTF6StringES4_","__ZN7WebCore12IconDatabaseD0Ev","__ZNK7WebCore12IconDatabase12databasePathEv","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE11appendRangeINS_29HashTableConstIteratorAdapterINS_9HashTableIS1_S1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EESA_EES1_EEEEvT_SD_","_memset","__ZN7WebCore12IconDatabase17cleanupSyncThreadEv","__ZN3WTF7HashSetINS_6StringENS_10StringHashENS_10HashTraitsIS1_EEE6removeERKS1_","__ZN7WebCore12IconDatabase26notifyPendingLoadDecisionsEv","__ZN7WebCore20readySQLiteStatementERN3WTF6OwnPtrINS_15SQLiteStatementEEERNS_14SQLiteDatabaseERKNS0_6StringE","__ZN7WebCore23RemovedAllIconsWorkItem11performWorkEv","__ZN7WebCore12IconDatabase4openERKN3WTF6StringES4_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore12IconSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E15deallocateTableEPS5_i","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_jEENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_jS6_NS_10HashTraitsIS1_EENS8_IjEEE18KeyValuePairTraitsES9_E6rehashEiPS3_","__ZN7WebCore33ImportedIconURLForPageURLWorkItem11performWorkEv","__ZN3WTF6VectorIPN7WebCore10IconRecordELj0ENS_15CrashOnOverflowEE11appendRangeINS_29HashTableConstIteratorAdapterINS_9HashTableIS3_S3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EESD_EES3_EEEEvT_SG_","__ZN7WebCore12IconDatabase34synchronousIconDataKnownForIconURLERKN3WTF6StringE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore15PageURLSnapshotEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EES1_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_","__ZN7WebCore12IconDatabase20retainIconForPageURLERKN3WTF6StringE","__ZN7WebCore12IconDatabase14syncTimerFiredEPNS_5TimerIS0_EE"]

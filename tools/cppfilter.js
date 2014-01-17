var arguments_ = [];

var ENVIRONMENT_IS_NODE = typeof process === "object";

var ENVIRONMENT_IS_WEB = typeof window === "object";

var ENVIRONMENT_IS_WORKER = typeof importScripts === "function";

var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

if (ENVIRONMENT_IS_NODE) {
  print = (function(x) {
    process["stdout"].write(x + "\n");
  });
  printErr = (function(x) {
    process["stderr"].write(x + "\n");
  });
  var nodeFS = require("fs");
  read = (function(filename) {
    var ret = nodeFS["readFileSync"](filename).toString();
    if (!ret && filename[0] != "/") {
      filename = __dirname.split("/").slice(0, -1).join("/") + "/src/" + filename;
      ret = nodeFS["readFileSync"](filename).toString();
    }
    return ret;
  });
  load = (function(f) {
    globalEval(read(f));
  });
  arguments_ = process["argv"].slice(2);
} else if (ENVIRONMENT_IS_SHELL) {
  if (!this["read"]) {
    this["read"] = (function(f) {
      snarf(f);
    });
  }
  if (typeof scriptArgs != "undefined") {
    arguments_ = scriptArgs;
  } else if (typeof arguments != "undefined") {
    arguments_ = arguments;
  }
} else if (ENVIRONMENT_IS_WEB) {
  this["print"] = printErr = (function(x) {
    console.log(x);
  });
  this["read"] = (function(url) {
    var xhr = new XMLHttpRequest;
    xhr.open("GET", url, false);
    xhr.send(null);
    return xhr.responseText;
  });
  if (this["arguments"]) {
    arguments_ = arguments;
  }
} else if (ENVIRONMENT_IS_WORKER) {
  this["load"] = importScripts;
} else {
  throw "Unknown runtime environment. Where are we?";
}

function globalEval(x) {
  eval.call(null, x);
}

if (typeof load == "undefined" && typeof read != "undefined") {
  this["load"] = (function(f) {
    globalEval(read(f));
  });
}

if (typeof printErr === "undefined") {
  this["printErr"] = (function() {});
}

if (typeof print === "undefined") {
  this["print"] = printErr;
}

try {
  this["Module"] = Module;
} catch (e) {
  this["Module"] = Module = {};
}

if (!Module.arguments) {
  Module.arguments = arguments_;
}

if (Module.print) {
  print = Module.print;
}

var Runtime = {
  stackSave: (function() {
    return STACKTOP;
  }),
  stackRestore: (function(stackTop) {
    STACKTOP = stackTop;
  }),
  forceAlign: (function(target, quantum) {
    quantum = quantum || 4;
    if (quantum == 1) return target;
    if (isNumber(target) && isNumber(quantum)) {
      return Math.ceil(target / quantum) * quantum;
    } else if (isNumber(quantum) && isPowerOfTwo(quantum)) {
      var logg = log2(quantum);
      return "((((" + target + ")+" + (quantum - 1) + ")>>" + logg + ")<<" + logg + ")";
    }
    return "Math.ceil((" + target + ")/" + quantum + ")*" + quantum;
  }),
  isNumberType: (function(type) {
    return type in Runtime.INT_TYPES || type in Runtime.FLOAT_TYPES;
  }),
  isPointerType: function isPointerType(type) {
    return type[type.length - 1] == "*";
  },
  isStructType: function isStructType(type) {
    if (isPointerType(type)) return false;
    if (/^\[\d+\ x\ (.*)\]/.test(type)) return true;
    if (/<?{ [^}]* }>?/.test(type)) return true;
    return type[0] == "%";
  },
  INT_TYPES: {
    "i1": 0,
    "i8": 0,
    "i16": 0,
    "i32": 0,
    "i64": 0
  },
  FLOAT_TYPES: {
    "float": 0,
    "double": 0
  },
  bitshift64: (function(low, high, op, bits) {
    var ander = Math.pow(2, bits) - 1;
    if (bits < 32) {
      switch (op) {
       case "shl":
        return [ low << bits, high << bits | (low & ander << 32 - bits) >>> 32 - bits ];
       case "ashr":
        return [ (low >>> bits | (high & ander) << 32 - bits) >> 0 >>> 0, high >> bits >>> 0 ];
       case "lshr":
        return [ (low >>> bits | (high & ander) << 32 - bits) >>> 0, high >>> bits ];
      }
    } else if (bits == 32) {
      switch (op) {
       case "shl":
        return [ 0, low ];
       case "ashr":
        return [ high, (high | 0) < 0 ? ander : 0 ];
       case "lshr":
        return [ high, 0 ];
      }
    } else {
      switch (op) {
       case "shl":
        return [ 0, low << bits - 32 ];
       case "ashr":
        return [ high >> bits - 32 >>> 0, (high | 0) < 0 ? ander : 0 ];
       case "lshr":
        return [ high >>> bits - 32, 0 ];
      }
    }
    abort("unknown bitshift64 op: " + [ value, op, bits ]);
  }),
  or64: (function(x, y) {
    var l = x | 0 | (y | 0);
    var h = (Math.round(x / 4294967296) | Math.round(y / 4294967296)) * 4294967296;
    return l + h;
  }),
  and64: (function(x, y) {
    var l = (x | 0) & (y | 0);
    var h = (Math.round(x / 4294967296) & Math.round(y / 4294967296)) * 4294967296;
    return l + h;
  }),
  xor64: (function(x, y) {
    var l = (x | 0) ^ (y | 0);
    var h = (Math.round(x / 4294967296) ^ Math.round(y / 4294967296)) * 4294967296;
    return l + h;
  }),
  getNativeTypeSize: (function(type, quantumSize) {
    if (Runtime.QUANTUM_SIZE == 1) return 1;
    var size = {
      "%i1": 1,
      "%i8": 1,
      "%i16": 2,
      "%i32": 4,
      "%i64": 8,
      "%float": 4,
      "%double": 8
    }["%" + type];
    if (!size) {
      if (type[type.length - 1] == "*") {
        size = Runtime.QUANTUM_SIZE;
      } else if (type[0] == "i") {
        var bits = parseInt(type.substr(1));
        assert(bits % 8 == 0);
        size = bits / 8;
      }
    }
    return size;
  }),
  getNativeFieldSize: (function(type) {
    return Math.max(Runtime.getNativeTypeSize(type), Runtime.QUANTUM_SIZE);
  }),
  dedup: function dedup(items, ident) {
    var seen = {};
    if (ident) {
      return items.filter((function(item) {
        if (seen[item[ident]]) return false;
        seen[item[ident]] = true;
        return true;
      }));
    } else {
      return items.filter((function(item) {
        if (seen[item]) return false;
        seen[item] = true;
        return true;
      }));
    }
  },
  set: function set() {
    var args = typeof arguments[0] === "object" ? arguments[0] : arguments;
    var ret = {};
    for (var i = 0; i < args.length; i++) {
      ret[args[i]] = 0;
    }
    return ret;
  },
  calculateStructAlignment: function calculateStructAlignment(type) {
    type.flatSize = 0;
    type.alignSize = 0;
    var diffs = [];
    var prev = -1;
    type.flatIndexes = type.fields.map((function(field) {
      var size, alignSize;
      if (Runtime.isNumberType(field) || Runtime.isPointerType(field)) {
        size = Runtime.getNativeTypeSize(field);
        alignSize = size;
      } else if (Runtime.isStructType(field)) {
        size = Types.types[field].flatSize;
        alignSize = Types.types[field].alignSize;
      } else {
        throw "Unclear type in struct: " + field + ", in " + type.name_ + " :: " + dump(Types.types[type.name_]);
      }
      alignSize = type.packed ? 1 : Math.min(alignSize, Runtime.QUANTUM_SIZE);
      type.alignSize = Math.max(type.alignSize, alignSize);
      var curr = Runtime.alignMemory(type.flatSize, alignSize);
      type.flatSize = curr + size;
      if (prev >= 0) {
        diffs.push(curr - prev);
      }
      prev = curr;
      return curr;
    }));
    type.flatSize = Runtime.alignMemory(type.flatSize, type.alignSize);
    if (diffs.length == 0) {
      type.flatFactor = type.flatSize;
    } else if (Runtime.dedup(diffs).length == 1) {
      type.flatFactor = diffs[0];
    }
    type.needsFlattening = type.flatFactor != 1;
    return type.flatIndexes;
  },
  generateStructInfo: (function(struct, typeName, offset) {
    var type, alignment;
    if (typeName) {
      offset = offset || 0;
      type = (typeof Types === "undefined" ? Runtime.typeInfo : Types.types)[typeName];
      if (!type) return null;
      assert(type.fields.length === struct.length, "Number of named fields must match the type for " + typeName);
      alignment = type.flatIndexes;
    } else {
      var type = {
        fields: struct.map((function(item) {
          return item[0];
        }))
      };
      alignment = Runtime.calculateStructAlignment(type);
    }
    var ret = {
      __size__: type.flatSize
    };
    if (typeName) {
      struct.forEach((function(item, i) {
        if (typeof item === "string") {
          ret[item] = alignment[i] + offset;
        } else {
          var key;
          for (var k in item) key = k;
          ret[key] = Runtime.generateStructInfo(item[key], type.fields[i], alignment[i]);
        }
      }));
    } else {
      struct.forEach((function(item, i) {
        ret[item[1]] = alignment[i];
      }));
    }
    return ret;
  }),
  stackAlloc: function stackAlloc(size) {
    var ret = STACKTOP;
    STACKTOP += size;
    STACKTOP = STACKTOP + 3 >> 2 << 2;
    return ret;
  },
  staticAlloc: function staticAlloc(size) {
    var ret = STATICTOP;
    STATICTOP += size;
    STATICTOP = STATICTOP + 3 >> 2 << 2;
    if (STATICTOP >= TOTAL_MEMORY) enlargeMemory();
    return ret;
  },
  alignMemory: function alignMemory(size, quantum) {
    var ret = size = Math.ceil(size / (quantum ? quantum : 4)) * (quantum ? quantum : 4);
    return ret;
  },
  makeBigInt: function makeBigInt(low, high, unsigned) {
    var ret = unsigned ? (low >>> 0) + (high >>> 0) * 4294967296 : (low >>> 0) + (high | 0) * 4294967296;
    return ret;
  },
  QUANTUM_SIZE: 4,
  __dummy__: 0
};

var CorrectionsMonitor = {
  MAX_ALLOWED: 0,
  corrections: 0,
  sigs: {},
  note: (function(type, succeed, sig) {
    if (!succeed) {
      this.corrections++;
      if (this.corrections >= this.MAX_ALLOWED) abort("\n\nToo many corrections!");
    }
  }),
  print: (function() {})
};

var __THREW__ = false;

var ABORT = false;

var undef = 0;

var tempValue, tempInt, tempBigInt, tempInt2, tempBigInt2, tempPair, tempBigIntI, tempBigIntR, tempBigIntS, tempBigIntP, tempBigIntD;

var tempI64, tempI64b;

function abort(text) {
  print(text + ":\n" + (new Error).stack);
  ABORT = true;
  throw "Assertion: " + text;
}

function assert(condition, text) {
  if (!condition) {
    abort("Assertion failed: " + text);
  }
}

var globalScope = this;

function ccall(ident, returnType, argTypes, args) {
  function toC(value, type) {
    if (type == "string") {
      var ret = STACKTOP;
      Runtime.stackAlloc(value.length + 1);
      writeStringToMemory(value, ret);
      return ret;
    }
    return value;
  }
  function fromC(value, type) {
    if (type == "string") {
      return Pointer_stringify(value);
    }
    return value;
  }
  try {
    var func = eval("_" + ident);
  } catch (e) {
    try {
      func = globalScope["Module"]["_" + ident];
    } catch (e) {}
  }
  assert(func, "Cannot call unknown function " + ident + " (perhaps LLVM optimizations or closure removed it?)");
  var i = 0;
  var cArgs = args ? args.map((function(arg) {
    return toC(arg, argTypes[i++]);
  })) : [];
  return fromC(func.apply(null, cArgs), returnType);
}

Module["ccall"] = ccall;

function cwrap(ident, returnType, argTypes) {
  return (function() {
    return ccall(ident, returnType, argTypes, Array.prototype.slice.call(arguments));
  });
}

function setValue(ptr, value, type, noSafe) {
  type = type || "i8";
  if (type[type.length - 1] === "*") type = "i32";
  switch (type) {
   case "i1":
    HEAP8[ptr] = value;
    break;
   case "i8":
    HEAP8[ptr] = value;
    break;
   case "i16":
    HEAP16[ptr >> 1] = value;
    break;
   case "i32":
    HEAP32[ptr >> 2] = value;
    break;
   case "i64":
    HEAP32[ptr >> 2] = value;
    break;
   case "float":
    HEAPF32[ptr >> 2] = value;
    break;
   case "double":
    tempDoubleF64[0] = value, HEAP32[ptr >> 2] = tempDoubleI32[0], HEAP32[ptr + 4 >> 2] = tempDoubleI32[1];
    break;
   default:
    abort("invalid type for setValue: " + type);
  }
}

Module["setValue"] = setValue;

function getValue(ptr, type, noSafe) {
  type = type || "i8";
  if (type[type.length - 1] === "*") type = "i32";
  switch (type) {
   case "i1":
    return HEAP8[ptr];
   case "i8":
    return HEAP8[ptr];
   case "i16":
    return HEAP16[ptr >> 1];
   case "i32":
    return HEAP32[ptr >> 2];
   case "i64":
    return HEAP32[ptr >> 2];
   case "float":
    return HEAPF32[ptr >> 2];
   case "double":
    return tempDoubleI32[0] = HEAP32[ptr >> 2], tempDoubleI32[1] = HEAP32[ptr + 4 >> 2], tempDoubleF64[0];
   default:
    abort("invalid type for setValue: " + type);
  }
  return null;
}

Module["getValue"] = getValue;

var ALLOC_NORMAL = 0;

var ALLOC_STACK = 1;

var ALLOC_STATIC = 2;

Module["ALLOC_NORMAL"] = ALLOC_NORMAL;

Module["ALLOC_STACK"] = ALLOC_STACK;

Module["ALLOC_STATIC"] = ALLOC_STATIC;

function allocate(slab, types, allocator) {
  var zeroinit, size;
  if (typeof slab === "number") {
    zeroinit = true;
    size = slab;
  } else {
    zeroinit = false;
    size = slab.length;
  }
  var singleType = typeof types === "string" ? types : null;
  var ret = [ _malloc, Runtime.stackAlloc, Runtime.staticAlloc ][allocator === undefined ? ALLOC_STATIC : allocator](Math.max(size, singleType ? 1 : types.length));
  if (zeroinit) {
    _memset(ret, 0, size);
    return ret;
  }
  var i = 0, type;
  while (i < size) {
    var curr = slab[i];
    if (typeof curr === "function") {
      curr = Runtime.getFunctionIndex(curr);
    }
    type = singleType || types[i];
    if (type === 0) {
      i++;
      continue;
    }
    if (type == "i64") type = "i32";
    setValue(ret + i, curr, type);
    i += Runtime.getNativeTypeSize(type);
  }
  return ret;
}

Module["allocate"] = allocate;

function Pointer_stringify(ptr, length) {
  var nullTerminated = typeof length == "undefined";
  var ret = "";
  var i = 0;
  var t;
  var nullByte = String.fromCharCode(0);
  while (1) {
    t = String.fromCharCode(HEAPU8[ptr + i]);
    if (nullTerminated && t == nullByte) {
      break;
    } else {}
    ret += t;
    i += 1;
    if (!nullTerminated && i == length) {
      break;
    }
  }
  return ret;
}

Module["Pointer_stringify"] = Pointer_stringify;

function Array_stringify(array) {
  var ret = "";
  for (var i = 0; i < array.length; i++) {
    ret += String.fromCharCode(array[i]);
  }
  return ret;
}

Module["Array_stringify"] = Array_stringify;

var FUNCTION_TABLE;

var PAGE_SIZE = 4096;

function alignMemoryPage(x) {
  return x + 4095 >> 12 << 12;
}

var HEAP;

var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;

var STACK_ROOT, STACKTOP, STACK_MAX;

var STATICTOP;

function enlargeMemory() {
  while (TOTAL_MEMORY <= STATICTOP) {
    TOTAL_MEMORY = alignMemoryPage(2 * TOTAL_MEMORY);
  }
  var oldHEAP8 = HEAP8;
  var buffer = new ArrayBuffer(TOTAL_MEMORY);
  HEAP8 = new Int8Array(buffer);
  HEAP16 = new Int16Array(buffer);
  HEAP32 = new Int32Array(buffer);
  HEAPU8 = new Uint8Array(buffer);
  HEAPU16 = new Uint16Array(buffer);
  HEAPU32 = new Uint32Array(buffer);
  HEAPF32 = new Float32Array(buffer);
  HEAPF64 = new Float64Array(buffer);
  HEAP8.set(oldHEAP8);
}

var TOTAL_STACK = Module["TOTAL_STACK"] || 5242880;

var TOTAL_MEMORY = Module["TOTAL_MEMORY"] || 10485760;

var FAST_MEMORY = Module["FAST_MEMORY"] || 2097152;

assert(!!Int32Array && !!Float64Array && !!(new Int32Array(1))["subarray"] && !!(new Int32Array(1))["set"], "Cannot fallback to non-typed array case: Code is too specialized");

var buffer = new ArrayBuffer(TOTAL_MEMORY);

HEAP8 = new Int8Array(buffer);

HEAP16 = new Int16Array(buffer);

HEAP32 = new Int32Array(buffer);

HEAPU8 = new Uint8Array(buffer);

HEAPU16 = new Uint16Array(buffer);

HEAPU32 = new Uint32Array(buffer);

HEAPF32 = new Float32Array(buffer);

HEAPF64 = new Float64Array(buffer);

HEAP32[0] = 255;

assert(HEAPU8[0] === 255 && HEAPU8[3] === 0, "Typed arrays 2 must be run on a little-endian system");

var base = intArrayFromString("(null)");

STATICTOP = base.length;

for (var i = 0; i < base.length; i++) {
  HEAP8[i] = base[i];
}

Module["HEAP"] = HEAP;

Module["HEAP8"] = HEAP8;

Module["HEAP16"] = HEAP16;

Module["HEAP32"] = HEAP32;

Module["HEAPU8"] = HEAPU8;

Module["HEAPU16"] = HEAPU16;

Module["HEAPU32"] = HEAPU32;

Module["HEAPF32"] = HEAPF32;

Module["HEAPF64"] = HEAPF64;

STACK_ROOT = STACKTOP = Runtime.alignMemory(STATICTOP);

STACK_MAX = STACK_ROOT + TOTAL_STACK;

var tempDoublePtr = Runtime.alignMemory(STACK_MAX, 8);

var tempDoubleI8 = HEAP8.subarray(tempDoublePtr);

var tempDoubleI32 = HEAP32.subarray(tempDoublePtr >> 2);

var tempDoubleF32 = HEAPF32.subarray(tempDoublePtr >> 2);

var tempDoubleF64 = HEAPF64.subarray(tempDoublePtr >> 3);

function copyTempFloat(ptr) {
  tempDoubleI8[0] = HEAP8[ptr];
  tempDoubleI8[1] = HEAP8[ptr + 1];
  tempDoubleI8[2] = HEAP8[ptr + 2];
  tempDoubleI8[3] = HEAP8[ptr + 3];
}

function copyTempDouble(ptr) {
  tempDoubleI8[0] = HEAP8[ptr];
  tempDoubleI8[1] = HEAP8[ptr + 1];
  tempDoubleI8[2] = HEAP8[ptr + 2];
  tempDoubleI8[3] = HEAP8[ptr + 3];
  tempDoubleI8[4] = HEAP8[ptr + 4];
  tempDoubleI8[5] = HEAP8[ptr + 5];
  tempDoubleI8[6] = HEAP8[ptr + 6];
  tempDoubleI8[7] = HEAP8[ptr + 7];
}

STACK_MAX = tempDoublePtr + 8;

STATICTOP = alignMemoryPage(STACK_MAX);

function callRuntimeCallbacks(callbacks) {
  while (callbacks.length > 0) {
    var callback = callbacks.shift();
    var func = callback.func;
    if (typeof func === "number") {
      func = FUNCTION_TABLE[func];
    }
    func(callback.arg === undefined ? null : callback.arg);
  }
}

var __ATINIT__ = [];

var __ATEXIT__ = [];

function initRuntime() {
  callRuntimeCallbacks(__ATINIT__);
}

function exitRuntime() {
  callRuntimeCallbacks(__ATEXIT__);
  CorrectionsMonitor.print();
}

function Array_copy(ptr, num) {
  return Array.prototype.slice.call(HEAP8.subarray(ptr, ptr + num));
  return HEAP.slice(ptr, ptr + num);
}

Module["Array_copy"] = Array_copy;

function TypedArray_copy(ptr, num) {
  var arr = new Uint8Array(num);
  for (var i = 0; i < num; ++i) {
    arr[i] = HEAP8[ptr + i];
  }
  return arr.buffer;
}

Module["TypedArray_copy"] = TypedArray_copy;

function String_len(ptr) {
  var i = 0;
  while (HEAP8[ptr + i]) i++;
  return i;
}

Module["String_len"] = String_len;

function String_copy(ptr, addZero) {
  var len = String_len(ptr);
  if (addZero) len++;
  var ret = Array_copy(ptr, len);
  if (addZero) ret[len - 1] = 0;
  return ret;
}

Module["String_copy"] = String_copy;

function intArrayFromString(stringy, dontAddNull) {
  var ret = [];
  var t;
  var i = 0;
  while (i < stringy.length) {
    var chr = stringy.charCodeAt(i);
    if (chr > 255) {
      chr &= 255;
    }
    ret.push(chr);
    i = i + 1;
  }
  if (!dontAddNull) {
    ret.push(0);
  }
  return ret;
}

Module["intArrayFromString"] = intArrayFromString;

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 255) {
      chr &= 255;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join("");
}

Module["intArrayToString"] = intArrayToString;

function writeStringToMemory(string, buffer, dontAddNull) {
  var i = 0;
  while (i < string.length) {
    var chr = string.charCodeAt(i);
    if (chr > 255) {
      chr &= 255;
    }
    HEAP8[buffer + i] = chr;
    i = i + 1;
  }
  if (!dontAddNull) {
    HEAP8[buffer + i] = 0;
  }
}

Module["writeStringToMemory"] = writeStringToMemory;

var STRING_TABLE = [];

function unSign(value, bits, ignore, sig) {
  if (value >= 0) {
    return value;
  }
  return bits <= 32 ? 2 * Math.abs(1 << bits - 1) + value : Math.pow(2, bits) + value;
}

function reSign(value, bits, ignore, sig) {
  if (value <= 0) {
    return value;
  }
  var half = bits <= 32 ? Math.abs(1 << bits - 1) : Math.pow(2, bits - 1);
  if (value >= half && (bits <= 32 || value > half)) {
    value = -2 * half + value;
  }
  return value;
}

var runDependencies = 0;

function addRunDependency() {
  runDependencies++;
  if (Module["monitorRunDependencies"]) {
    Module["monitorRunDependencies"](runDependencies);
  }
}

function removeRunDependency() {
  runDependencies--;
  if (Module["monitorRunDependencies"]) {
    Module["monitorRunDependencies"](runDependencies);
  }
  if (runDependencies == 0) run();
}

var preloadedImages = {};

function _cplus_demangle_fill_name($p, $s, $len) {
  if (($p | 0) == 0 | ($s | 0) == 0 | ($len | 0) == 0) {
    var $_0 = 0;
  } else {
    HEAP32[$p >> 2] = 0;
    HEAP32[$p + 4 >> 2] = $s;
    HEAP32[$p + 8 >> 2] = $len;
    var $_0 = 1;
  }
  var $_0;
  return $_0;
  return null;
}

function _cplus_demangle_fill_extended_operator($p, $args, $name) {
  if (($p | 0) == 0 | ($args | 0) < 0 | ($name | 0) == 0) {
    var $_0 = 0;
  } else {
    HEAP32[$p >> 2] = 41;
    HEAP32[$p + 4 >> 2] = $args;
    HEAP32[$p + 8 >> 2] = $name;
    var $_0 = 1;
  }
  var $_0;
  return $_0;
  return null;
}

function _cplus_demangle_fill_ctor($p, $kind, $name) {
  if (($p | 0) == 0 | ($name | 0) == 0) {
    var $_0 = 0;
  } else {
    HEAP32[$p >> 2] = 6;
    HEAP32[$p + 4 >> 2] = $kind;
    HEAP32[$p + 8 >> 2] = $name;
    var $_0 = 1;
  }
  var $_0;
  return $_0;
  return null;
}

function _cplus_demangle_fill_dtor($p, $kind, $name) {
  if (($p | 0) == 0 | ($name | 0) == 0) {
    var $_0 = 0;
  } else {
    HEAP32[$p >> 2] = 7;
    HEAP32[$p + 4 >> 2] = $kind;
    HEAP32[$p + 8 >> 2] = $name;
    var $_0 = 1;
  }
  var $_0;
  return $_0;
  return null;
}

function _d_add_substitution($di, $dc) {
  var $3$s2;
  var $1 = ($dc | 0) == 0;
  do {
    if ($1) {
      var $_0 = 0;
    } else {
      var $3$s2 = ($di + 32 | 0) >> 2;
      var $4 = HEAP32[$3$s2];
      if (($4 | 0) >= (HEAP32[$di + 36 >> 2] | 0)) {
        var $_0 = 0;
        break;
      }
      var $11 = ($4 << 2) + HEAP32[$di + 28 >> 2] | 0;
      HEAP32[$11 >> 2] = $dc;
      var $13 = HEAP32[$3$s2] + 1 | 0;
      HEAP32[$3$s2] = $13;
      var $_0 = 1;
    }
  } while (0);
  var $_0;
  return $_0;
  return null;
}

function _cplus_demangle_mangled_name($di, $top_level) {
  var $1$s2;
  var $1$s2 = ($di + 12 | 0) >> 2;
  var $2 = HEAP32[$1$s2];
  var $3 = $2 + 1 | 0;
  HEAP32[$1$s2] = $3;
  var $5 = HEAP8[$2] << 24 >> 24 == 95;
  do {
    if ($5) {
      var $7 = $2 + 2 | 0;
      HEAP32[$1$s2] = $7;
      if (HEAP8[$3] << 24 >> 24 != 90) {
        var $_0 = 0;
        break;
      }
      var $11 = _d_encoding($di, $top_level);
      var $_0 = $11;
    } else {
      var $_0 = 0;
    }
  } while (0);
  var $_0;
  return $_0;
  return null;
}

function _d_encoding($di, $top_level) {
  var $1 = $di + 12 | 0;
  var $3 = HEAP8[HEAP32[$1 >> 2]];
  $_$23 : do {
    if ($3 << 24 >> 24 == 71 || $3 << 24 >> 24 == 84) {
      var $5 = _d_special_name($di);
      var $_0 = $5;
    } else {
      var $7 = _d_name($di);
      var $or_cond = ($7 | 0) == 0 | ($top_level | 0) == 0;
      do {
        if (!$or_cond) {
          if ((HEAP32[$di + 8 >> 2] & 1 | 0) != 0) {
            break;
          }
          var $16 = HEAPU32[$7 >> 2];
          var $switch12 = ($16 - 25 | 0) >>> 0 < 3;
          $_$29 : do {
            if ($switch12) {
              var $dc_013 = $7;
              while (1) {
                var $dc_013;
                var $20 = HEAPU32[$dc_013 + 4 >> 2];
                var $22 = HEAPU32[$20 >> 2];
                if (($22 - 25 | 0) >>> 0 >= 3) {
                  var $dc_0_lcssa = $20;
                  var $_lcssa = $22;
                  break $_$29;
                }
                var $dc_013 = $20;
              }
            } else {
              var $dc_0_lcssa = $7;
              var $_lcssa = $16;
            }
          } while (0);
          var $_lcssa;
          var $dc_0_lcssa;
          if (($_lcssa | 0) != 2) {
            var $_0 = $dc_0_lcssa;
            break $_$23;
          }
          var $24 = $dc_0_lcssa + 8 | 0;
          var $dcr_07 = HEAPU32[$24 >> 2];
          var $switch69 = (HEAP32[$dcr_07 >> 2] - 25 | 0) >>> 0 < 3;
          $_$34 : do {
            if ($switch69) {
              var $dcr_010 = $dcr_07;
              while (1) {
                var $dcr_010;
                var $dcr_0 = HEAPU32[$dcr_010 + 4 >> 2];
                if ((HEAP32[$dcr_0 >> 2] - 25 | 0) >>> 0 >= 3) {
                  var $dcr_0_lcssa = $dcr_0;
                  break $_$34;
                }
                var $dcr_010 = $dcr_0;
              }
            } else {
              var $dcr_0_lcssa = $dcr_07;
            }
          } while (0);
          var $dcr_0_lcssa;
          HEAP32[$24 >> 2] = $dcr_0_lcssa;
          var $_0 = $dc_0_lcssa;
          break $_$23;
        }
      } while (0);
      var $34 = HEAP8[HEAP32[$1 >> 2]];
      if ($34 << 24 >> 24 == 0 || $34 << 24 >> 24 == 69) {
        var $_0 = $7;
        break;
      }
      var $36 = _has_return_type($7);
      var $37 = _d_bare_function_type($di, $36);
      var $38 = _d_make_comp($di, 3, $7, $37);
      var $_0 = $38;
    }
  } while (0);
  var $_0;
  return $_0;
  return null;
}

_d_encoding["X"] = 1;

function _cplus_demangle_type($di) {
  var $1$s2;
  var $ret$s2;
  var __stackBase__ = STACKTOP;
  STACKTOP += 4;
  var $ret = __stackBase__, $ret$s2 = $ret >> 2;
  var $1$s2 = ($di + 12 | 0) >> 2;
  var $2 = HEAPU32[$1$s2];
  var $3 = HEAP8[$2];
  var $4 = $3 << 24 >> 24;
  $_$42 : do {
    if ($3 << 24 >> 24 == 114 || $3 << 24 >> 24 == 86 || $3 << 24 >> 24 == 75) {
      var $6 = _d_cv_qualifiers($di, $ret, 0);
      if (($6 | 0) == 0) {
        var $_0 = 0;
        break;
      }
      var $9 = _cplus_demangle_type($di);
      HEAP32[$6 >> 2] = $9;
      var $10 = HEAP32[$ret$s2];
      var $11 = _d_add_substitution($di, $10);
      if (($11 | 0) == 0) {
        var $_0 = 0;
        break;
      }
      var $_0 = HEAP32[$ret$s2];
    } else {
      do {
        if (($4 | 0) == 97 || ($4 | 0) == 98 || ($4 | 0) == 99 || ($4 | 0) == 100 || ($4 | 0) == 101 || ($4 | 0) == 102 || ($4 | 0) == 103 || ($4 | 0) == 104 || ($4 | 0) == 105 || ($4 | 0) == 106 || ($4 | 0) == 108 || ($4 | 0) == 109 || ($4 | 0) == 110 || ($4 | 0) == 111 || ($4 | 0) == 115 || ($4 | 0) == 116 || ($4 | 0) == 118 || ($4 | 0) == 119 || ($4 | 0) == 120 || ($4 | 0) == 121 || ($4 | 0) == 122) {
          var $18 = _cplus_demangle_builtin_types + ($4 - 97) * 20 | 0;
          var $19 = _d_make_builtin_type($di, $18);
          HEAP32[$ret$s2] = $19;
          var $25 = $di + 48 | 0;
          var $27 = HEAP32[$25 >> 2] + HEAP32[HEAP32[$19 + 4 >> 2] + 4 >> 2] | 0;
          HEAP32[$25 >> 2] = $27;
          var $29 = HEAP32[$1$s2] + 1 | 0;
          HEAP32[$1$s2] = $29;
          var $_0 = $19;
          break $_$42;
        } else if (($4 | 0) == 117) {
          HEAP32[$1$s2] = $2 + 1 | 0;
          var $31 = _d_source_name($di);
          var $32 = _d_make_comp($di, 34, $31, 0);
          HEAP32[$ret$s2] = $32;
          var $85 = $32;
        } else if (($4 | 0) == 70) {
          var $33 = _d_function_type($di);
          HEAP32[$ret$s2] = $33;
          var $85 = $33;
        } else if (($4 | 0) == 48 || ($4 | 0) == 49 || ($4 | 0) == 50 || ($4 | 0) == 51 || ($4 | 0) == 52 || ($4 | 0) == 53 || ($4 | 0) == 54 || ($4 | 0) == 55 || ($4 | 0) == 56 || ($4 | 0) == 57 || ($4 | 0) == 78 || ($4 | 0) == 90) {
          var $34 = _d_class_enum_type($di);
          HEAP32[$ret$s2] = $34;
          var $85 = $34;
        } else if (($4 | 0) == 65) {
          var $35 = _d_array_type($di);
          HEAP32[$ret$s2] = $35;
          var $85 = $35;
        } else if (($4 | 0) == 77) {
          var $36 = _d_pointer_to_member_type($di);
          HEAP32[$ret$s2] = $36;
          var $85 = $36;
        } else if (($4 | 0) == 84) {
          var $38 = _d_template_param($di);
          HEAP32[$ret$s2] = $38;
          if (HEAP8[HEAP32[$1$s2]] << 24 >> 24 != 73) {
            var $85 = $38;
            break;
          }
          var $43 = _d_add_substitution($di, $38);
          if (($43 | 0) == 0) {
            var $_0 = 0;
            break $_$42;
          }
          var $45 = HEAP32[$ret$s2];
          var $46 = _d_template_args($di);
          var $47 = _d_make_comp($di, 4, $45, $46);
          HEAP32[$ret$s2] = $47;
          var $85 = $47;
        } else if (($4 | 0) == 83) {
          var $50 = HEAPU8[$2 + 1 | 0];
          if (($50 - 48 & 255 & 255) < 10 | $50 << 24 >> 24 == 95 | ($50 - 65 & 255 & 255) < 26) {
            var $55 = _d_substitution($di, 0);
            HEAP32[$ret$s2] = $55;
            if (HEAP8[HEAP32[$1$s2]] << 24 >> 24 != 73) {
              var $_0 = $55;
              break $_$42;
            }
            var $59 = _d_template_args($di);
            var $60 = _d_make_comp($di, 4, $55, $59);
            HEAP32[$ret$s2] = $60;
            var $85 = $60;
          } else {
            var $62 = _d_class_enum_type($di);
            HEAP32[$ret$s2] = $62;
            if (($62 | 0) == 0) {
              var $85 = 0;
              break;
            }
            if ((HEAP32[$62 >> 2] | 0) == 21) {
              var $_0 = $62;
              break $_$42;
            }
            var $85 = $62;
          }
        } else if (($4 | 0) == 80) {
          HEAP32[$1$s2] = $2 + 1 | 0;
          var $69 = _cplus_demangle_type($di);
          var $70 = _d_make_comp($di, 29, $69, 0);
          HEAP32[$ret$s2] = $70;
          var $85 = $70;
        } else if (($4 | 0) == 82) {
          HEAP32[$1$s2] = $2 + 1 | 0;
          var $72 = _cplus_demangle_type($di);
          var $73 = _d_make_comp($di, 30, $72, 0);
          HEAP32[$ret$s2] = $73;
          var $85 = $73;
        } else if (($4 | 0) == 67) {
          HEAP32[$1$s2] = $2 + 1 | 0;
          var $75 = _cplus_demangle_type($di);
          var $76 = _d_make_comp($di, 31, $75, 0);
          HEAP32[$ret$s2] = $76;
          var $85 = $76;
        } else if (($4 | 0) == 71) {
          HEAP32[$1$s2] = $2 + 1 | 0;
          var $78 = _cplus_demangle_type($di);
          var $79 = _d_make_comp($di, 32, $78, 0);
          HEAP32[$ret$s2] = $79;
          var $85 = $79;
        } else if (($4 | 0) == 85) {
          HEAP32[$1$s2] = $2 + 1 | 0;
          var $81 = _d_source_name($di);
          HEAP32[$ret$s2] = $81;
          var $82 = _cplus_demangle_type($di);
          var $83 = HEAP32[$ret$s2];
          var $84 = _d_make_comp($di, 28, $82, $83);
          HEAP32[$ret$s2] = $84;
          var $85 = $84;
        } else {
          var $_0 = 0;
          break $_$42;
        }
      } while (0);
      var $85;
      var $86 = _d_add_substitution($di, $85);
      if (($86 | 0) == 0) {
        var $_0 = 0;
        break;
      }
      var $_0 = HEAP32[$ret$s2];
    }
  } while (0);
  var $_0;
  STACKTOP = __stackBase__;
  return $_0;
  return null;
}

_cplus_demangle_type["X"] = 1;

function _d_cv_qualifiers($di, $pret, $member_fn) {
  var $4$s2;
  var $1 = $di + 12 | 0;
  var $2 = ($member_fn | 0) != 0;
  var $3 = $2 ? 25 : 22;
  var $4$s2 = ($di + 48 | 0) >> 2;
  var $5 = $2 ? 26 : 23;
  var $6 = $2 ? 27 : 24;
  var $_02 = $pret;
  while (1) {
    var $_02;
    var $peek_0_in = HEAP32[$1 >> 2];
    var $peek_0 = HEAP8[$peek_0_in];
    if (!($peek_0 << 24 >> 24 == 114 || $peek_0 << 24 >> 24 == 86 || $peek_0 << 24 >> 24 == 75)) {
      var $_0 = $_02;
      break;
    }
    var $8 = $peek_0_in + 1 | 0;
    HEAP32[$1 >> 2] = $8;
    if ($peek_0 << 24 >> 24 == 114) {
      var $11 = HEAP32[$4$s2] + 9 | 0;
      HEAP32[$4$s2] = $11;
      var $t_0 = $3;
    } else if ($peek_0 << 24 >> 24 == 86) {
      var $14 = HEAP32[$4$s2] + 9 | 0;
      HEAP32[$4$s2] = $14;
      var $t_0 = $5;
    } else {
      var $17 = HEAP32[$4$s2] + 6 | 0;
      HEAP32[$4$s2] = $17;
      var $t_0 = $6;
    }
    var $t_0;
    var $19 = _d_make_comp($di, $t_0, 0, 0);
    HEAP32[$_02 >> 2] = $19;
    if (($19 | 0) == 0) {
      var $_0 = 0;
      break;
    }
    var $_02 = $19 + 4 | 0;
  }
  var $_0;
  return $_0;
  return null;
}

function _d_make_builtin_type($di, $type) {
  var $1 = ($type | 0) == 0;
  do {
    if ($1) {
      var $_0 = 0;
    } else {
      var $3 = _d_make_empty($di);
      if (($3 | 0) == 0) {
        var $_0 = 0;
        break;
      }
      HEAP32[$3 >> 2] = 33;
      HEAP32[$3 + 4 >> 2] = $type;
      var $_0 = $3;
    }
  } while (0);
  var $_0;
  return $_0;
  return null;
}

function _d_make_comp($di, $type, $left, $right) {
  var $9$s2;
  var __label__;
  do {
    if (($type | 0) == 1 || ($type | 0) == 2 || ($type | 0) == 3 || ($type | 0) == 4 || ($type | 0) == 10 || ($type | 0) == 28 || ($type | 0) == 37 || ($type | 0) == 43 || ($type | 0) == 44 || ($type | 0) == 45 || ($type | 0) == 46 || ($type | 0) == 47 || ($type | 0) == 48 || ($type | 0) == 49 || ($type | 0) == 50) {
      if (($left | 0) == 0 | ($right | 0) == 0) {
        var $_0 = 0;
        __label__ = 7;
        break;
      }
      __label__ = 5;
      break;
    } else if (($type | 0) == 8 || ($type | 0) == 9 || ($type | 0) == 11 || ($type | 0) == 12 || ($type | 0) == 13 || ($type | 0) == 14 || ($type | 0) == 15 || ($type | 0) == 16 || ($type | 0) == 17 || ($type | 0) == 18 || ($type | 0) == 19 || ($type | 0) == 20 || ($type | 0) == 29 || ($type | 0) == 30 || ($type | 0) == 31 || ($type | 0) == 32 || ($type | 0) == 34 || ($type | 0) == 38 || ($type | 0) == 39 || ($type | 0) == 42) {
      if (($left | 0) == 0) {
        var $_0 = 0;
        __label__ = 7;
        break;
      }
      __label__ = 5;
      break;
    } else if (($type | 0) == 36) {
      if (($right | 0) == 0) {
        var $_0 = 0;
        __label__ = 7;
        break;
      }
      __label__ = 5;
      break;
    } else if (($type | 0) == 35 || ($type | 0) == 22 || ($type | 0) == 23 || ($type | 0) == 24 || ($type | 0) == 25 || ($type | 0) == 26 || ($type | 0) == 27) {
      __label__ = 5;
    } else {
      var $_0 = 0;
      __label__ = 7;
    }
  } while (0);
  do {
    if (__label__ == 5) {
      var $9 = _d_make_empty($di), $9$s2 = $9 >> 2;
      if (($9 | 0) == 0) {
        var $_0 = 0;
        break;
      }
      HEAP32[$9$s2] = $type;
      HEAP32[$9$s2 + 1] = $left;
      HEAP32[$9$s2 + 2] = $right;
      var $_0 = $9;
    }
  } while (0);
  var $_0;
  return $_0;
  return null;
}

function _d_source_name($di) {
  var $1 = _d_number($di);
  if (($1 | 0) < 1) {
    var $_0 = 0;
  } else {
    var $4 = _d_identifier($di, $1);
    HEAP32[$di + 44 >> 2] = $4;
    var $_0 = $4;
  }
  var $_0;
  return $_0;
  return null;
}

function _d_function_type($di) {
  var $1$s2;
  var $1$s2 = ($di + 12 | 0) >> 2;
  var $2 = HEAP32[$1$s2];
  var $3 = $2 + 1 | 0;
  HEAP32[$1$s2] = $3;
  if (HEAP8[$2] << 24 >> 24 == 70) {
    if (HEAP8[$3] << 24 >> 24 == 89) {
      var $10 = $2 + 2 | 0;
      HEAP32[$1$s2] = $10;
    }
    var $12 = _d_bare_function_type($di, 1);
    var $13 = HEAP32[$1$s2];
    var $14 = $13 + 1 | 0;
    HEAP32[$1$s2] = $14;
    var $_ = HEAP8[$13] << 24 >> 24 == 69 ? $12 : 0;
    var $_0 = $_;
  } else {
    var $_0 = 0;
  }
  var $_0;
  return $_0;
  return null;
}

function _d_class_enum_type($di) {
  var $1 = _d_name($di);
  return $1;
  return null;
}

function _d_array_type($di) {
  var $1$s2;
  var $1$s2 = ($di + 12 | 0) >> 2;
  var $2 = HEAP32[$1$s2];
  var $3 = $2 + 1 | 0;
  HEAP32[$1$s2] = $3;
  var $5 = HEAP8[$2] << 24 >> 24 == 65;
  do {
    if ($5) {
      var $7 = HEAP8[$3];
      if ($7 << 24 >> 24 == 95) {
        var $dim_0 = 0;
      } else {
        if (($7 - 48 & 255 & 255) < 10) {
          var $11 = $3;
          while (1) {
            var $11;
            var $12 = $11 + 1 | 0;
            HEAP32[$1$s2] = $12;
            if ((HEAP8[$12] - 48 & 255 & 255) >= 10) {
              break;
            }
            var $11 = $12;
          }
          var $17 = $12 - $3 | 0;
          var $18 = _d_make_name($di, $3, $17);
          if (($18 | 0) == 0) {
            var $_0 = 0;
            break;
          }
          var $dim_0 = $18;
        } else {
          var $21 = _d_expression($di);
          if (($21 | 0) == 0) {
            var $_0 = 0;
            break;
          }
          var $dim_0 = $21;
        }
      }
      var $dim_0;
      var $23 = HEAP32[$1$s2];
      var $24 = $23 + 1 | 0;
      HEAP32[$1$s2] = $24;
      if (HEAP8[$23] << 24 >> 24 != 95) {
        var $_0 = 0;
        break;
      }
      var $28 = _cplus_demangle_type($di);
      var $29 = _d_make_comp($di, 36, $dim_0, $28);
      var $_0 = $29;
    } else {
      var $_0 = 0;
    }
  } while (0);
  var $_0;
  return $_0;
  return null;
}

function _d_pointer_to_member_type($di) {
  var __stackBase__ = STACKTOP;
  STACKTOP += 4;
  var $mem = __stackBase__;
  var $1 = $di + 12 | 0;
  var $2 = HEAP32[$1 >> 2];
  var $3 = $2 + 1 | 0;
  HEAP32[$1 >> 2] = $3;
  var $5 = HEAP8[$2] << 24 >> 24 == 77;
  $_$127 : do {
    if ($5) {
      var $7 = _cplus_demangle_type($di);
      var $8 = _d_cv_qualifiers($di, $mem, 1);
      if (($8 | 0) == 0) {
        var $_0 = 0;
        break;
      }
      var $11 = _cplus_demangle_type($di);
      HEAP32[$8 >> 2] = $11;
      var $12 = ($8 | 0) == ($mem | 0);
      do {
        if (!$12) {
          if ((HEAP32[$11 >> 2] | 0) == 35) {
            break;
          }
          var $18 = HEAP32[$mem >> 2];
          var $19 = _d_add_substitution($di, $18);
          if (($19 | 0) == 0) {
            var $_0 = 0;
            break $_$127;
          }
        }
      } while (0);
      var $22 = HEAP32[$mem >> 2];
      var $23 = _d_make_comp($di, 37, $7, $22);
      var $_0 = $23;
    } else {
      var $_0 = 0;
    }
  } while (0);
  var $_0;
  STACKTOP = __stackBase__;
  return $_0;
  return null;
}

function _d_template_param($di) {
  var $1$s2;
  var $1$s2 = ($di + 12 | 0) >> 2;
  var $2 = HEAP32[$1$s2];
  var $3 = $2 + 1 | 0;
  HEAP32[$1$s2] = $3;
  var $5 = HEAP8[$2] << 24 >> 24 == 84;
  do {
    if ($5) {
      if (HEAP8[$3] << 24 >> 24 == 95) {
        var $param_0 = 0;
        var $15 = $3;
      } else {
        var $10 = _d_number($di);
        if (($10 | 0) < 0) {
          var $_0 = 0;
          break;
        }
        var $param_0 = $10 + 1 | 0;
        var $15 = HEAP32[$1$s2];
      }
      var $15;
      var $param_0;
      HEAP32[$1$s2] = $15 + 1 | 0;
      if (HEAP8[$15] << 24 >> 24 != 95) {
        var $_0 = 0;
        break;
      }
      var $20 = $di + 40 | 0;
      var $22 = HEAP32[$20 >> 2] + 1 | 0;
      HEAP32[$20 >> 2] = $22;
      var $23 = _d_make_template_param($di, $param_0);
      var $_0 = $23;
    } else {
      var $_0 = 0;
    }
  } while (0);
  var $_0;
  return $_0;
  return null;
}

function _d_template_args($di) {
  var $3$s2;
  var __stackBase__ = STACKTOP;
  STACKTOP += 4;
  var $al = __stackBase__;
  var $1 = $di + 44 | 0;
  var $2 = HEAP32[$1 >> 2];
  var $3$s2 = ($di + 12 | 0) >> 2;
  var $4 = HEAP32[$3$s2];
  var $5 = $4 + 1 | 0;
  HEAP32[$3$s2] = $5;
  var $7 = HEAP8[$4] << 24 >> 24 == 73;
  $_$145 : do {
    if ($7) {
      HEAP32[$al >> 2] = 0;
      var $pal_0 = $al;
      while (1) {
        var $pal_0;
        var $10 = _d_template_arg($di);
        if (($10 | 0) == 0) {
          var $_0 = 0;
          break $_$145;
        }
        var $13 = _d_make_comp($di, 39, $10, 0);
        HEAP32[$pal_0 >> 2] = $13;
        if (($13 | 0) == 0) {
          var $_0 = 0;
          break $_$145;
        }
        var $18 = HEAP32[$3$s2];
        if (HEAP8[$18] << 24 >> 24 == 69) {
          break;
        }
        var $pal_0 = $13 + 8 | 0;
      }
      var $22 = $18 + 1 | 0;
      HEAP32[$3$s2] = $22;
      HEAP32[$1 >> 2] = $2;
      var $_0 = HEAP32[$al >> 2];
    } else {
      var $_0 = 0;
    }
  } while (0);
  var $_0;
  STACKTOP = __stackBase__;
  return $_0;
  return null;
}

function _d_substitution($di, $prefix) {
  var $1$s2;
  var $1$s2 = ($di + 12 | 0) >> 2;
  var $2 = HEAP32[$1$s2];
  var $3 = $2 + 1 | 0;
  HEAP32[$1$s2] = $3;
  var $5 = HEAP8[$2] << 24 >> 24 == 83;
  $_$2 : do {
    if ($5) {
      var $7 = $2 + 2 | 0;
      HEAP32[$1$s2] = $7;
      var $8 = HEAPU8[$3];
      if ($8 << 24 >> 24 == 95) {
        var $id_2 = 0;
      } else {
        if (!(($8 - 48 & 255 & 255) < 10 | ($8 - 65 & 255 & 255) < 26)) {
          var $46 = HEAP32[$di + 8 >> 2] & 8;
          var $_lobit = $46 >>> 3;
          var $or_cond4 = ($46 | 0) != 0 | ($prefix | 0) == 0;
          do {
            if ($or_cond4) {
              var $verbose_0 = $_lobit;
            } else {
              if ((HEAP8[$7] - 67 & 255 & 255) >= 2) {
                var $verbose_0 = $_lobit;
                break;
              }
              var $verbose_0 = 1;
            }
          } while (0);
          var $verbose_0;
          var $p_0 = _standard_subs | 0;
          while (1) {
            var $p_0;
            if ($p_0 >>> 0 >= (_standard_subs + 196 | 0) >>> 0) {
              var $_0 = 0;
              break $_$2;
            }
            if ($8 << 24 >> 24 == HEAP8[$p_0 | 0] << 24 >> 24) {
              break;
            }
            var $p_0 = $p_0 + 28 | 0;
          }
          var $61 = HEAP32[$p_0 + 20 >> 2];
          if (($61 | 0) != 0) {
            var $65 = HEAP32[$p_0 + 24 >> 2];
            var $66 = _d_make_sub($di, $61, $65);
            HEAP32[$di + 44 >> 2] = $66;
          }
          if (($verbose_0 | 0) == 0) {
            var $len_0_in = $p_0 + 8 | 0;
            var $s_0_in = $p_0 + 4 | 0;
          } else {
            var $len_0_in = $p_0 + 16 | 0;
            var $s_0_in = $p_0 + 12 | 0;
          }
          var $s_0_in;
          var $len_0_in;
          var $len_0 = HEAP32[$len_0_in >> 2];
          var $s_0 = HEAP32[$s_0_in >> 2];
          var $77 = $di + 48 | 0;
          var $79 = HEAP32[$77 >> 2] + $len_0 | 0;
          HEAP32[$77 >> 2] = $79;
          var $80 = _d_make_sub($di, $s_0, $len_0);
          var $_0 = $80;
          break;
        }
        var $c_0 = $8;
        var $id_0 = 0;
        var $12 = $7;
        while (1) {
          var $12;
          var $id_0;
          var $c_0;
          if (($c_0 - 48 & 255 & 255) < 10) {
            var $_pn = $id_0 * 36 - 48 | 0;
          } else {
            if (($c_0 - 65 & 255 & 255) >= 26) {
              var $_0 = 0;
              break $_$2;
            }
            var $_pn = $id_0 * 36 - 55 | 0;
          }
          var $_pn;
          var $id_1 = ($c_0 << 24 >> 24) + $_pn | 0;
          if (($id_1 | 0) < 0) {
            var $_0 = 0;
            break $_$2;
          }
          var $26 = $12 + 1 | 0;
          HEAP32[$1$s2] = $26;
          var $27 = HEAPU8[$12];
          if ($27 << 24 >> 24 == 95) {
            break;
          }
          var $c_0 = $27;
          var $id_0 = $id_1;
          var $12 = $26;
        }
        var $id_2 = $id_1 + 1 | 0;
      }
      var $id_2;
      if (($id_2 | 0) >= (HEAP32[$di + 32 >> 2] | 0)) {
        var $_0 = 0;
        break;
      }
      var $36 = $di + 40 | 0;
      var $38 = HEAP32[$36 >> 2] + 1 | 0;
      HEAP32[$36 >> 2] = $38;
      var $_0 = HEAP32[HEAP32[$di + 28 >> 2] + ($id_2 << 2) >> 2];
    } else {
      var $_0 = 0;
    }
  } while (0);
  var $_0;
  return $_0;
  return null;
}

_d_substitution["X"] = 1;

function _cplus_demangle_print($options, $dc, $estimate, $palc) {
  var $8$s2;
  var $5$s2;
  var $3$s2;
  var $dpi$s2;
  var __stackBase__ = STACKTOP;
  STACKTOP += 28;
  var __label__;
  var $dpi = __stackBase__, $dpi$s2 = $dpi >> 2;
  HEAP32[$dpi$s2] = $options;
  var $2 = $estimate + 1 | 0;
  var $3$s2 = ($dpi + 12 | 0) >> 2;
  HEAP32[$3$s2] = $2;
  var $4 = _malloc($2);
  var $5$s2 = ($dpi + 4 | 0) >> 2;
  HEAP32[$5$s2] = $4;
  if (($4 | 0) == 0) {
    var $_0 = 0;
    var $storemerge1 = 1;
  } else {
    var $8$s2 = ($dpi + 8 | 0) >> 2;
    HEAP32[$8$s2] = 0;
    HEAP32[$dpi$s2 + 4] = 0;
    HEAP32[$dpi$s2 + 5] = 0;
    var $11 = $dpi + 24 | 0;
    HEAP32[$11 >> 2] = 0;
    _d_print_comp($dpi, $dc);
    var $12 = HEAPU32[$5$s2];
    var $13 = ($12 | 0) == 0;
    do {
      if (!$13) {
        var $15 = HEAPU32[$8$s2];
        if ($15 >>> 0 >= HEAPU32[$3$s2] >>> 0) {
          __label__ = 5;
          break;
        }
        HEAP32[$8$s2] = $15 + 1 | 0;
        HEAP8[$12 + $15 | 0] = 0;
        __label__ = 6;
        break;
      }
      __label__ = 5;
    } while (0);
    if (__label__ == 5) {
      _d_print_append_char($dpi, 0);
    }
    var $23 = HEAP32[$5$s2];
    var $storemerge = ($23 | 0) == 0 ? HEAP32[$11 >> 2] : HEAP32[$3$s2];
    var $_0 = $23;
    var $storemerge1 = $storemerge;
  }
  var $storemerge1;
  var $_0;
  HEAP32[$palc >> 2] = $storemerge1;
  STACKTOP = __stackBase__;
  return $_0;
  return null;
}

function _d_print_comp($dpi, $dc) {
  var $537$s2;
  var $1303$s2;
  var $1301$s2;
  var $1288$s2;
  var $1276$s2;
  var $1261$s2;
  var $1247$s2;
  var $1231$s2;
  var $1215$s2;
  var $1071$s2;
  var $1069$s2;
  var $1055$s2;
  var $992$s2;
  var $975$s2;
  var $927$s2;
  var $919$s2;
  var $867$s2;
  var $846$s2;
  var $830$s2;
  var $787$s2;
  var $776$s2;
  var $773$s2;
  var $758$s2;
  var $733$s2;
  var $700$s2;
  var $680$s2;
  var $679$s2;
  var $655$s2;
  var $619$s2;
  var $606$s2;
  var $562$s2;
  var $561$s2;
  var $558$s2;
  var $498$s2;
  var $482$s2;
  var $466$s2;
  var $450$s2;
  var $434$s2;
  var $418$s2;
  var $402$s2;
  var $386$s2;
  var $370$s2;
  var $354$s2;
  var $338$s2;
  var $305$s2;
  var $288$s2;
  var $272$s2;
  var $224$s2;
  var $198$s2;
  var $167$s2;
  var $159$s2;
  var $119$s2;
  var $118$s2;
  var $81$s2;
  var $79$s2;
  var $51$s2;
  var $16$s2;
  var $4$s2;
  var $adpm4$s2;
  var $dpt$s2;
  var $adpm$s2;
  var $dc$s2 = $dc >> 2;
  var $dpi$s2 = $dpi >> 2;
  var __stackBase__ = STACKTOP;
  STACKTOP += 184;
  var __label__;
  var $adpm = __stackBase__, $adpm$s2 = $adpm >> 2;
  var $dpt = __stackBase__ + 64, $dpt$s2 = $dpt >> 2;
  var $dpm = __stackBase__ + 72;
  var $dpm2 = __stackBase__ + 88;
  var $adpm4 = __stackBase__ + 104, $adpm4$s2 = $adpm4 >> 2;
  var $dpm7 = __stackBase__ + 168;
  var $1 = ($dc | 0) == 0;
  $_$2 : do {
    if ($1) {
      _d_print_error($dpi);
    } else {
      var $4$s2 = ($dpi + 4 | 0) >> 2;
      var $5 = HEAPU32[$4$s2];
      if (($5 | 0) == 0) {
        break;
      }
      var $8 = $dc | 0;
      var $9 = HEAPU32[$8 >> 2];
      $_$6 : do {
        if (($9 | 0) == 0) {
          if ((HEAP32[$dpi$s2] & 4 | 0) != 0) {
            var $36 = HEAP32[$dc$s2 + 1];
            var $38 = HEAP32[$dc$s2 + 2];
            _d_print_java_identifier($dpi, $36, $38);
            break $_$2;
          }
          var $16$s2 = ($dpi + 8 | 0) >> 2;
          var $17 = HEAPU32[$16$s2];
          var $18 = $dc + 8 | 0;
          var $19 = HEAPU32[$18 >> 2];
          if (($19 + $17 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
            var $33 = HEAP32[$dc$s2 + 1];
            _d_print_append_buffer($dpi, $33, $19);
            break $_$2;
          }
          var $25 = $5 + $17 | 0;
          var $27 = HEAP32[$dc$s2 + 1];
          _memcpy($25, $27, $19, 1);
          var $30 = HEAP32[$16$s2] + HEAP32[$18 >> 2] | 0;
          HEAP32[$16$s2] = $30;
          break $_$2;
        } else if (($9 | 0) == 1 || ($9 | 0) == 2) {
          var $42 = HEAP32[$dc$s2 + 1];
          _d_print_comp($dpi, $42);
          var $46 = (HEAP32[$dpi$s2] & 4 | 0) == 0;
          var $47 = HEAPU32[$4$s2];
          var $48 = ($47 | 0) != 0;
          $_$15 : do {
            if ($46) {
              do {
                if ($48) {
                  var $51$s2 = ($dpi + 8 | 0) >> 2;
                  var $52 = HEAPU32[$51$s2];
                  if (($52 + 2 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
                    break;
                  }
                  var $59 = $47 + $52 | 0;
                  tempBigInt = 14906;
                  HEAP8[$59] = tempBigInt & 255;
                  tempBigInt >>= 8;
                  HEAP8[$59 + 1] = tempBigInt & 255;
                  var $61 = HEAP32[$51$s2] + 2 | 0;
                  HEAP32[$51$s2] = $61;
                  break $_$15;
                }
              } while (0);
              _d_print_append_buffer($dpi, STRING_TABLE.__str120 | 0, 2);
            } else {
              do {
                if ($48) {
                  var $65 = $dpi + 8 | 0;
                  var $66 = HEAPU32[$65 >> 2];
                  if ($66 >>> 0 >= HEAPU32[$dpi$s2 + 3] >>> 0) {
                    break;
                  }
                  HEAP32[$65 >> 2] = $66 + 1 | 0;
                  HEAP8[$47 + $66 | 0] = 46;
                  break $_$15;
                }
              } while (0);
              _d_print_append_char($dpi, 46);
            }
          } while (0);
          var $77 = HEAP32[$dc$s2 + 2];
          _d_print_comp($dpi, $77);
          break $_$2;
        } else if (($9 | 0) == 3) {
          var $79$s2 = ($dpi + 20 | 0) >> 2;
          var $80 = HEAPU32[$79$s2];
          var $81$s2 = ($dpi + 16 | 0) >> 2;
          var $dc_pn = $dc;
          var $i_0 = 0;
          var $83 = $80;
          while (1) {
            var $83;
            var $i_0;
            var $dc_pn;
            var $typed_name_0 = HEAPU32[$dc_pn + 4 >> 2];
            if (($typed_name_0 | 0) == 0) {
              var $i_3 = $i_0;
              var $_pre_phi5760 = 0;
              __label__ = 33;
              break;
            }
            if ($i_0 >>> 0 > 3) {
              _d_print_error($dpi);
              break $_$2;
            }
            var $89 = ($i_0 << 4) + $adpm | 0;
            HEAP32[$89 >> 2] = $83;
            HEAP32[$79$s2] = $89;
            HEAP32[(($i_0 << 4) + 4 >> 2) + $adpm$s2] = $typed_name_0;
            HEAP32[(($i_0 << 4) + 8 >> 2) + $adpm$s2] = 0;
            var $93 = HEAPU32[$81$s2];
            HEAP32[(($i_0 << 4) + 12 >> 2) + $adpm$s2] = $93;
            var $95 = $i_0 + 1 | 0;
            var $96 = $typed_name_0 | 0;
            var $97 = HEAPU32[$96 >> 2];
            if (($97 - 25 | 0) >>> 0 >= 3) {
              __label__ = 25;
              break;
            }
            var $dc_pn = $typed_name_0;
            var $i_0 = $95;
            var $83 = $89;
          }
          $_$34 : do {
            if (__label__ == 25) {
              if (($97 | 0) == 4) {
                HEAP32[$dpt$s2] = $93;
                HEAP32[$81$s2] = $dpt;
                HEAP32[$dpt$s2 + 1] = $typed_name_0;
                var $104 = HEAP32[$96 >> 2];
                var $103 = $dpt;
              } else {
                var $104 = $97;
                var $103 = $93;
              }
              var $103;
              var $104;
              if (($104 | 0) != 2) {
                var $i_3 = $95;
                var $_pre_phi5760 = $96;
                break;
              }
              var $i_2 = $95;
              var $local_name_0_in = $typed_name_0 + 8 | 0;
              while (1) {
                var $local_name_0_in;
                var $i_2;
                var $local_name_0 = HEAPU32[$local_name_0_in >> 2];
                if ((HEAP32[$local_name_0 >> 2] - 25 | 0) >>> 0 >= 3) {
                  var $i_3 = $i_2;
                  var $_pre_phi5760 = $96;
                  break $_$34;
                }
                if ($i_2 >>> 0 > 3) {
                  break;
                }
                var $115 = ($i_2 << 4) + $adpm | 0;
                var $116 = $i_2 - 1 | 0;
                var $117 = ($116 << 4) + $adpm | 0;
                var $118$s2 = $115 >> 2;
                var $119$s2 = $117 >> 2;
                HEAP32[$118$s2] = HEAP32[$119$s2];
                HEAP32[$118$s2 + 1] = HEAP32[$119$s2 + 1];
                HEAP32[$118$s2 + 2] = HEAP32[$119$s2 + 2];
                HEAP32[$118$s2 + 3] = HEAP32[$119$s2 + 3];
                HEAP32[$115 >> 2] = $117;
                HEAP32[$79$s2] = $115;
                HEAP32[(($116 << 4) + 4 >> 2) + $adpm$s2] = $local_name_0;
                HEAP32[(($116 << 4) + 8 >> 2) + $adpm$s2] = 0;
                HEAP32[(($116 << 4) + 12 >> 2) + $adpm$s2] = $103;
                var $i_2 = $i_2 + 1 | 0;
                var $local_name_0_in = $local_name_0 + 4 | 0;
              }
              _d_print_error($dpi);
              break $_$2;
            }
          } while (0);
          var $_pre_phi5760;
          var $i_3;
          var $129 = HEAP32[$dc$s2 + 2];
          _d_print_comp($dpi, $129);
          if ((HEAP32[$_pre_phi5760 >> 2] | 0) == 4) {
            var $134 = HEAP32[$dpt$s2];
            HEAP32[$81$s2] = $134;
          }
          var $135 = ($i_3 | 0) == 0;
          $_$49 : do {
            if (!$135) {
              var $136 = $dpi + 8 | 0;
              var $137 = $dpi + 12 | 0;
              var $i_431 = $i_3;
              while (1) {
                var $i_431;
                var $139 = $i_431 - 1 | 0;
                if ((HEAP32[(($139 << 4) + 8 >> 2) + $adpm$s2] | 0) == 0) {
                  var $144 = HEAPU32[$4$s2];
                  var $145 = ($144 | 0) == 0;
                  do {
                    if (!$145) {
                      var $147 = HEAPU32[$136 >> 2];
                      if ($147 >>> 0 >= HEAPU32[$137 >> 2] >>> 0) {
                        __label__ = 41;
                        break;
                      }
                      HEAP32[$136 >> 2] = $147 + 1 | 0;
                      HEAP8[$144 + $147 | 0] = 32;
                      __label__ = 42;
                      break;
                    }
                    __label__ = 41;
                  } while (0);
                  if (__label__ == 41) {
                    _d_print_append_char($dpi, 32);
                  }
                  var $156 = HEAP32[(($139 << 4) + 4 >> 2) + $adpm$s2];
                  _d_print_mod($dpi, $156);
                }
                if (($139 | 0) == 0) {
                  break $_$49;
                }
                var $i_431 = $139;
              }
            }
          } while (0);
          HEAP32[$79$s2] = $80;
          break $_$2;
        } else if (($9 | 0) == 4) {
          var $159$s2 = ($dpi + 20 | 0) >> 2;
          var $160 = HEAP32[$159$s2];
          HEAP32[$159$s2] = 0;
          var $163 = HEAP32[$dc$s2 + 1];
          _d_print_comp($dpi, $163);
          var $164 = HEAPU32[$4$s2];
          var $165 = ($164 | 0) == 0;
          do {
            if (!$165) {
              var $167$s2 = ($dpi + 8 | 0) >> 2;
              var $168 = HEAPU32[$167$s2];
              var $169 = ($168 | 0) == 0;
              do {
                if (!$169) {
                  if (HEAP8[$164 + ($168 - 1) | 0] << 24 >> 24 != 60) {
                    break;
                  }
                  if ($168 >>> 0 < HEAPU32[$dpi$s2 + 3] >>> 0) {
                    HEAP32[$167$s2] = $168 + 1 | 0;
                    HEAP8[$164 + $168 | 0] = 32;
                  } else {
                    _d_print_append_char($dpi, 32);
                  }
                }
              } while (0);
              var $_pr18 = HEAPU32[$4$s2];
              if (($_pr18 | 0) == 0) {
                __label__ = 54;
                break;
              }
              var $184 = HEAPU32[$167$s2];
              if ($184 >>> 0 >= HEAPU32[$dpi$s2 + 3] >>> 0) {
                __label__ = 54;
                break;
              }
              HEAP32[$167$s2] = $184 + 1 | 0;
              HEAP8[$_pr18 + $184 | 0] = 60;
              __label__ = 55;
              break;
            }
            __label__ = 54;
          } while (0);
          if (__label__ == 54) {
            _d_print_append_char($dpi, 60);
          }
          var $194 = HEAP32[$dc$s2 + 2];
          _d_print_comp($dpi, $194);
          var $195 = HEAPU32[$4$s2];
          var $196 = ($195 | 0) == 0;
          do {
            if (!$196) {
              var $198$s2 = ($dpi + 8 | 0) >> 2;
              var $199 = HEAPU32[$198$s2];
              var $200 = ($199 | 0) == 0;
              do {
                if (!$200) {
                  if (HEAP8[$195 + ($199 - 1) | 0] << 24 >> 24 != 62) {
                    break;
                  }
                  if ($199 >>> 0 < HEAPU32[$dpi$s2 + 3] >>> 0) {
                    HEAP32[$198$s2] = $199 + 1 | 0;
                    HEAP8[$195 + $199 | 0] = 32;
                  } else {
                    _d_print_append_char($dpi, 32);
                  }
                }
              } while (0);
              var $_pr19 = HEAPU32[$4$s2];
              if (($_pr19 | 0) == 0) {
                __label__ = 64;
                break;
              }
              var $215 = HEAPU32[$198$s2];
              if ($215 >>> 0 >= HEAPU32[$dpi$s2 + 3] >>> 0) {
                __label__ = 64;
                break;
              }
              HEAP32[$198$s2] = $215 + 1 | 0;
              HEAP8[$_pr19 + $215 | 0] = 62;
              __label__ = 65;
              break;
            }
            __label__ = 64;
          } while (0);
          if (__label__ == 64) {
            _d_print_append_char($dpi, 62);
          }
          HEAP32[$159$s2] = $160;
          break $_$2;
        } else if (($9 | 0) == 5) {
          var $224$s2 = ($dpi + 16 | 0) >> 2;
          var $225 = HEAPU32[$224$s2];
          if (($225 | 0) == 0) {
            _d_print_error($dpi);
            break $_$2;
          }
          var $i1_0 = HEAP32[$dc$s2 + 1];
          var $_pn = HEAP32[$225 + 4 >> 2];
          while (1) {
            var $_pn;
            var $i1_0;
            var $a_0 = HEAP32[$_pn + 8 >> 2];
            if (($a_0 | 0) == 0) {
              break;
            }
            if ((HEAP32[$a_0 >> 2] | 0) != 39) {
              _d_print_error($dpi);
              break $_$2;
            }
            if (($i1_0 | 0) < 1) {
              if (($i1_0 | 0) != 0) {
                break;
              }
              var $249 = HEAP32[$225 >> 2];
              HEAP32[$224$s2] = $249;
              var $252 = HEAP32[$a_0 + 4 >> 2];
              _d_print_comp($dpi, $252);
              HEAP32[$224$s2] = $225;
              break $_$2;
            }
            var $i1_0 = $i1_0 - 1 | 0;
            var $_pn = $a_0;
          }
          _d_print_error($dpi);
          break $_$2;
        } else if (($9 | 0) == 6) {
          var $256 = HEAP32[$dc$s2 + 2];
          _d_print_comp($dpi, $256);
          break $_$2;
        } else if (($9 | 0) == 7) {
          var $258 = $dpi + 8 | 0;
          var $259 = HEAPU32[$258 >> 2];
          if ($259 >>> 0 < HEAPU32[$dpi$s2 + 3] >>> 0) {
            HEAP32[$258 >> 2] = $259 + 1 | 0;
            HEAP8[$5 + $259 | 0] = 126;
          } else {
            _d_print_append_char($dpi, 126);
          }
          var $270 = HEAP32[$dc$s2 + 2];
          _d_print_comp($dpi, $270);
          break $_$2;
        } else if (($9 | 0) == 8) {
          var $272$s2 = ($dpi + 8 | 0) >> 2;
          var $273 = HEAPU32[$272$s2];
          if (($273 + 11 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
            _d_print_append_buffer($dpi, STRING_TABLE.__str121 | 0, 11);
          } else {
            var $279 = $5 + $273 | 0;
            for (var $$src = STRING_TABLE.__str121 | 0, $$dest = $279, $$stop = $$src + 11; $$src < $$stop; $$src++, $$dest++) {
              HEAP8[$$dest] = HEAP8[$$src];
            }
            var $281 = HEAP32[$272$s2] + 11 | 0;
            HEAP32[$272$s2] = $281;
          }
          var $286 = HEAP32[$dc$s2 + 1];
          _d_print_comp($dpi, $286);
          break $_$2;
        } else if (($9 | 0) == 9) {
          var $288$s2 = ($dpi + 8 | 0) >> 2;
          var $289 = HEAPU32[$288$s2];
          if (($289 + 8 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
            _d_print_append_buffer($dpi, STRING_TABLE.__str122 | 0, 8);
          } else {
            var $296 = $5 + $289 | 0;
            var $st$4$0 = $296 | 0;
            tempBigInt = 542397526;
            HEAP8[$st$4$0] = tempBigInt & 255;
            tempBigInt >>= 8;
            HEAP8[$st$4$0 + 1] = tempBigInt & 255;
            tempBigInt >>= 8;
            HEAP8[$st$4$0 + 2] = tempBigInt & 255;
            tempBigInt >>= 8;
            HEAP8[$st$4$0 + 3] = tempBigInt & 255;
            var $st$4$1 = $296 + 4 | 0;
            tempBigInt = 544370534;
            HEAP8[$st$4$1] = tempBigInt & 255;
            tempBigInt >>= 8;
            HEAP8[$st$4$1 + 1] = tempBigInt & 255;
            tempBigInt >>= 8;
            HEAP8[$st$4$1 + 2] = tempBigInt & 255;
            tempBigInt >>= 8;
            HEAP8[$st$4$1 + 3] = tempBigInt & 255;
            var $298 = HEAP32[$288$s2] + 8 | 0;
            HEAP32[$288$s2] = $298;
          }
          var $303 = HEAP32[$dc$s2 + 1];
          _d_print_comp($dpi, $303);
          break $_$2;
        } else if (($9 | 0) == 10) {
          var $305$s2 = ($dpi + 8 | 0) >> 2;
          var $306 = HEAPU32[$305$s2];
          var $308 = $dpi + 12 | 0;
          if (($306 + 24 | 0) >>> 0 > HEAPU32[$308 >> 2] >>> 0) {
            _d_print_append_buffer($dpi, STRING_TABLE.__str123 | 0, 24);
          } else {
            var $312 = $5 + $306 | 0;
            _memcpy($312, STRING_TABLE.__str123 | 0, 24, 1);
            var $314 = HEAP32[$305$s2] + 24 | 0;
            HEAP32[$305$s2] = $314;
          }
          var $319 = HEAP32[$dc$s2 + 1];
          _d_print_comp($dpi, $319);
          var $320 = HEAPU32[$4$s2];
          var $321 = ($320 | 0) == 0;
          do {
            if (!$321) {
              var $323 = HEAPU32[$305$s2];
              if (($323 + 4 | 0) >>> 0 > HEAPU32[$308 >> 2] >>> 0) {
                __label__ = 96;
                break;
              }
              var $329 = $320 + $323 | 0;
              tempBigInt = 762210605;
              HEAP8[$329] = tempBigInt & 255;
              tempBigInt >>= 8;
              HEAP8[$329 + 1] = tempBigInt & 255;
              tempBigInt >>= 8;
              HEAP8[$329 + 2] = tempBigInt & 255;
              tempBigInt >>= 8;
              HEAP8[$329 + 3] = tempBigInt & 255;
              var $331 = HEAP32[$305$s2] + 4 | 0;
              HEAP32[$305$s2] = $331;
              __label__ = 97;
              break;
            }
            __label__ = 96;
          } while (0);
          if (__label__ == 96) {
            _d_print_append_buffer($dpi, STRING_TABLE.__str124 | 0, 4);
          }
          var $336 = HEAP32[$dc$s2 + 2];
          _d_print_comp($dpi, $336);
          break $_$2;
        } else if (($9 | 0) == 11) {
          var $338$s2 = ($dpi + 8 | 0) >> 2;
          var $339 = HEAPU32[$338$s2];
          if (($339 + 13 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
            _d_print_append_buffer($dpi, STRING_TABLE.__str125 | 0, 13);
          } else {
            var $345 = $5 + $339 | 0;
            for (var $$src = STRING_TABLE.__str125 | 0, $$dest = $345, $$stop = $$src + 13; $$src < $$stop; $$src++, $$dest++) {
              HEAP8[$$dest] = HEAP8[$$src];
            }
            var $347 = HEAP32[$338$s2] + 13 | 0;
            HEAP32[$338$s2] = $347;
          }
          var $352 = HEAP32[$dc$s2 + 1];
          _d_print_comp($dpi, $352);
          break $_$2;
        } else if (($9 | 0) == 12) {
          var $354$s2 = ($dpi + 8 | 0) >> 2;
          var $355 = HEAPU32[$354$s2];
          if (($355 + 18 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
            _d_print_append_buffer($dpi, STRING_TABLE.__str126 | 0, 18);
          } else {
            var $361 = $5 + $355 | 0;
            for (var $$src = STRING_TABLE.__str126 | 0, $$dest = $361, $$stop = $$src + 18; $$src < $$stop; $$src++, $$dest++) {
              HEAP8[$$dest] = HEAP8[$$src];
            }
            var $363 = HEAP32[$354$s2] + 18 | 0;
            HEAP32[$354$s2] = $363;
          }
          var $368 = HEAP32[$dc$s2 + 1];
          _d_print_comp($dpi, $368);
          break $_$2;
        } else if (($9 | 0) == 13) {
          var $370$s2 = ($dpi + 8 | 0) >> 2;
          var $371 = HEAPU32[$370$s2];
          if (($371 + 16 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
            _d_print_append_buffer($dpi, STRING_TABLE.__str127 | 0, 16);
          } else {
            var $377 = $5 + $371 | 0;
            for (var $$src = STRING_TABLE.__str127 | 0, $$dest = $377, $$stop = $$src + 16; $$src < $$stop; $$src++, $$dest++) {
              HEAP8[$$dest] = HEAP8[$$src];
            }
            var $379 = HEAP32[$370$s2] + 16 | 0;
            HEAP32[$370$s2] = $379;
          }
          var $384 = HEAP32[$dc$s2 + 1];
          _d_print_comp($dpi, $384);
          break $_$2;
        } else if (($9 | 0) == 14) {
          var $386$s2 = ($dpi + 8 | 0) >> 2;
          var $387 = HEAPU32[$386$s2];
          if (($387 + 21 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
            _d_print_append_buffer($dpi, STRING_TABLE.__str128 | 0, 21);
          } else {
            var $393 = $5 + $387 | 0;
            _memcpy($393, STRING_TABLE.__str128 | 0, 21, 1);
            var $395 = HEAP32[$386$s2] + 21 | 0;
            HEAP32[$386$s2] = $395;
          }
          var $400 = HEAP32[$dc$s2 + 1];
          _d_print_comp($dpi, $400);
          break $_$2;
        } else if (($9 | 0) == 15) {
          var $402$s2 = ($dpi + 8 | 0) >> 2;
          var $403 = HEAPU32[$402$s2];
          if (($403 + 17 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
            _d_print_append_buffer($dpi, STRING_TABLE.__str129 | 0, 17);
          } else {
            var $409 = $5 + $403 | 0;
            for (var $$src = STRING_TABLE.__str129 | 0, $$dest = $409, $$stop = $$src + 17; $$src < $$stop; $$src++, $$dest++) {
              HEAP8[$$dest] = HEAP8[$$src];
            }
            var $411 = HEAP32[$402$s2] + 17 | 0;
            HEAP32[$402$s2] = $411;
          }
          var $416 = HEAP32[$dc$s2 + 1];
          _d_print_comp($dpi, $416);
          break $_$2;
        } else if (($9 | 0) == 16) {
          var $418$s2 = ($dpi + 8 | 0) >> 2;
          var $419 = HEAPU32[$418$s2];
          if (($419 + 26 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
            _d_print_append_buffer($dpi, STRING_TABLE.__str130 | 0, 26);
          } else {
            var $425 = $5 + $419 | 0;
            _memcpy($425, STRING_TABLE.__str130 | 0, 26, 1);
            var $427 = HEAP32[$418$s2] + 26 | 0;
            HEAP32[$418$s2] = $427;
          }
          var $432 = HEAP32[$dc$s2 + 1];
          _d_print_comp($dpi, $432);
          break $_$2;
        } else if (($9 | 0) == 17) {
          var $434$s2 = ($dpi + 8 | 0) >> 2;
          var $435 = HEAPU32[$434$s2];
          if (($435 + 15 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
            _d_print_append_buffer($dpi, STRING_TABLE.__str131 | 0, 15);
          } else {
            var $441 = $5 + $435 | 0;
            for (var $$src = STRING_TABLE.__str131 | 0, $$dest = $441, $$stop = $$src + 15; $$src < $$stop; $$src++, $$dest++) {
              HEAP8[$$dest] = HEAP8[$$src];
            }
            var $443 = HEAP32[$434$s2] + 15 | 0;
            HEAP32[$434$s2] = $443;
          }
          var $448 = HEAP32[$dc$s2 + 1];
          _d_print_comp($dpi, $448);
          break $_$2;
        } else if (($9 | 0) == 18) {
          var $450$s2 = ($dpi + 8 | 0) >> 2;
          var $451 = HEAPU32[$450$s2];
          if (($451 + 19 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
            _d_print_append_buffer($dpi, STRING_TABLE.__str132 | 0, 19);
          } else {
            var $457 = $5 + $451 | 0;
            for (var $$src = STRING_TABLE.__str132 | 0, $$dest = $457, $$stop = $$src + 19; $$src < $$stop; $$src++, $$dest++) {
              HEAP8[$$dest] = HEAP8[$$src];
            }
            var $459 = HEAP32[$450$s2] + 19 | 0;
            HEAP32[$450$s2] = $459;
          }
          var $464 = HEAP32[$dc$s2 + 1];
          _d_print_comp($dpi, $464);
          break $_$2;
        } else if (($9 | 0) == 19) {
          var $466$s2 = ($dpi + 8 | 0) >> 2;
          var $467 = HEAPU32[$466$s2];
          if (($467 + 24 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
            _d_print_append_buffer($dpi, STRING_TABLE.__str133 | 0, 24);
          } else {
            var $473 = $5 + $467 | 0;
            _memcpy($473, STRING_TABLE.__str133 | 0, 24, 1);
            var $475 = HEAP32[$466$s2] + 24 | 0;
            HEAP32[$466$s2] = $475;
          }
          var $480 = HEAP32[$dc$s2 + 1];
          _d_print_comp($dpi, $480);
          break $_$2;
        } else if (($9 | 0) == 20) {
          var $482$s2 = ($dpi + 8 | 0) >> 2;
          var $483 = HEAPU32[$482$s2];
          if (($483 + 17 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
            _d_print_append_buffer($dpi, STRING_TABLE.__str134 | 0, 17);
          } else {
            var $489 = $5 + $483 | 0;
            for (var $$src = STRING_TABLE.__str134 | 0, $$dest = $489, $$stop = $$src + 17; $$src < $$stop; $$src++, $$dest++) {
              HEAP8[$$dest] = HEAP8[$$src];
            }
            var $491 = HEAP32[$482$s2] + 17 | 0;
            HEAP32[$482$s2] = $491;
          }
          var $496 = HEAP32[$dc$s2 + 1];
          _d_print_comp($dpi, $496);
          break $_$2;
        } else if (($9 | 0) == 21) {
          var $498$s2 = ($dpi + 8 | 0) >> 2;
          var $499 = HEAPU32[$498$s2];
          var $500 = $dc + 8 | 0;
          var $501 = HEAPU32[$500 >> 2];
          if (($501 + $499 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
            var $515 = HEAP32[$dc$s2 + 1];
            _d_print_append_buffer($dpi, $515, $501);
            break $_$2;
          }
          var $507 = $5 + $499 | 0;
          var $509 = HEAP32[$dc$s2 + 1];
          _memcpy($507, $509, $501, 1);
          var $512 = HEAP32[$498$s2] + HEAP32[$500 >> 2] | 0;
          HEAP32[$498$s2] = $512;
          break $_$2;
        } else if (($9 | 0) == 22 || ($9 | 0) == 23 || ($9 | 0) == 24) {
          var $pdpm_0_in = $dpi + 20 | 0;
          while (1) {
            var $pdpm_0_in;
            var $pdpm_0 = HEAPU32[$pdpm_0_in >> 2];
            if (($pdpm_0 | 0) == 0) {
              break $_$6;
            }
            if ((HEAP32[$pdpm_0 + 8 >> 2] | 0) == 0) {
              var $528 = HEAPU32[HEAP32[$pdpm_0 + 4 >> 2] >> 2];
              if (($528 - 22 | 0) >>> 0 >= 3) {
                break $_$6;
              }
              if (($528 | 0) == ($9 | 0)) {
                break;
              }
            }
            var $pdpm_0_in = $pdpm_0 | 0;
          }
          var $534 = HEAP32[$dc$s2 + 1];
          _d_print_comp($dpi, $534);
          break $_$2;
        } else if (!(($9 | 0) == 25 || ($9 | 0) == 26 || ($9 | 0) == 27 || ($9 | 0) == 28 || ($9 | 0) == 29 || ($9 | 0) == 30 || ($9 | 0) == 31 || ($9 | 0) == 32)) if (($9 | 0) == 33) {
          var $558$s2 = ($dpi + 8 | 0) >> 2;
          var $559 = HEAPU32[$558$s2];
          var $561$s2 = ($dc + 4 | 0) >> 2;
          var $562$s2 = HEAPU32[$561$s2] >> 2;
          if ((HEAP32[$dpi$s2] & 4 | 0) == 0) {
            var $565 = HEAPU32[$562$s2 + 1];
            if (($565 + $559 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
              var $581 = HEAP32[$562$s2];
              _d_print_append_buffer($dpi, $581, $565);
              break $_$2;
            }
            var $571 = $5 + $559 | 0;
            var $573 = HEAP32[$562$s2];
            _memcpy($571, $573, $565, 1);
            var $578 = HEAP32[$558$s2] + HEAP32[HEAP32[$561$s2] + 4 >> 2] | 0;
            HEAP32[$558$s2] = $578;
            break $_$2;
          } else {
            var $584 = HEAPU32[$562$s2 + 3];
            if (($584 + $559 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
              var $600 = HEAP32[$562$s2 + 2];
              _d_print_append_buffer($dpi, $600, $584);
              break $_$2;
            }
            var $590 = $5 + $559 | 0;
            var $592 = HEAP32[$562$s2 + 2];
            _memcpy($590, $592, $584, 1);
            var $597 = HEAP32[$558$s2] + HEAP32[HEAP32[$561$s2] + 12 >> 2] | 0;
            HEAP32[$558$s2] = $597;
            break $_$2;
          }
        } else if (($9 | 0) == 34) {
          var $604 = HEAP32[$dc$s2 + 1];
          _d_print_comp($dpi, $604);
          break $_$2;
        } else if (($9 | 0) == 35) {
          var $606$s2 = ($dpi | 0) >> 2;
          if ((HEAP32[$606$s2] & 32 | 0) != 0) {
            var $612 = HEAP32[$dpi$s2 + 5];
            _d_print_function_type($dpi, $dc, $612);
          }
          var $615 = $dc + 4 | 0;
          var $617 = (HEAP32[$615 >> 2] | 0) == 0;
          $_$212 : do {
            if (!$617) {
              var $619$s2 = ($dpi + 20 | 0) >> 2;
              var $620 = HEAP32[$619$s2];
              var $621 = $dpm2 | 0;
              HEAP32[$621 >> 2] = $620;
              HEAP32[$619$s2] = $dpm2;
              HEAP32[$dpm2 + 4 >> 2] = $dc;
              var $623 = $dpm2 + 8 | 0;
              HEAP32[$623 >> 2] = 0;
              var $625 = HEAP32[$dpi$s2 + 4];
              HEAP32[$dpm2 + 12 >> 2] = $625;
              var $627 = HEAP32[$615 >> 2];
              _d_print_comp($dpi, $627);
              var $628 = HEAP32[$621 >> 2];
              HEAP32[$619$s2] = $628;
              if ((HEAP32[$623 >> 2] | 0) != 0) {
                break $_$2;
              }
              if ((HEAP32[$606$s2] & 32 | 0) != 0) {
                break;
              }
              var $636 = HEAPU32[$4$s2];
              var $637 = ($636 | 0) == 0;
              do {
                if (!$637) {
                  var $639 = $dpi + 8 | 0;
                  var $640 = HEAPU32[$639 >> 2];
                  if ($640 >>> 0 >= HEAPU32[$dpi$s2 + 3] >>> 0) {
                    break;
                  }
                  HEAP32[$639 >> 2] = $640 + 1 | 0;
                  HEAP8[$636 + $640 | 0] = 32;
                  break $_$212;
                }
              } while (0);
              _d_print_append_char($dpi, 32);
            }
          } while (0);
          if ((HEAP32[$606$s2] & 32 | 0) != 0) {
            break $_$2;
          }
          var $653 = HEAP32[$dpi$s2 + 5];
          _d_print_function_type($dpi, $dc, $653);
          break $_$2;
        } else if (($9 | 0) == 36) {
          var $655$s2 = ($dpi + 20 | 0) >> 2;
          var $656 = HEAPU32[$655$s2];
          var $657 = $adpm4 | 0;
          HEAP32[$adpm4$s2] = $656;
          HEAP32[$655$s2] = $657;
          HEAP32[$adpm4$s2 + 1] = $dc;
          var $660 = $adpm4 + 8 | 0;
          HEAP32[$660 >> 2] = 0;
          var $662 = HEAP32[$dpi$s2 + 4];
          HEAP32[$adpm4$s2 + 3] = $662;
          var $pdpm6_0 = $656;
          var $i5_0 = 1;
          while (1) {
            var $i5_0;
            var $pdpm6_0;
            if (($pdpm6_0 | 0) == 0) {
              break;
            }
            if ((HEAP32[HEAP32[$pdpm6_0 + 4 >> 2] >> 2] - 22 | 0) >>> 0 >= 3) {
              break;
            }
            var $671 = $pdpm6_0 + 8 | 0;
            if ((HEAP32[$671 >> 2] | 0) == 0) {
              if ($i5_0 >>> 0 > 3) {
                _d_print_error($dpi);
                break $_$2;
              }
              var $678 = ($i5_0 << 4) + $adpm4 | 0;
              var $679$s2 = $678 >> 2;
              var $680$s2 = $pdpm6_0 >> 2;
              HEAP32[$679$s2] = HEAP32[$680$s2];
              HEAP32[$679$s2 + 1] = HEAP32[$680$s2 + 1];
              HEAP32[$679$s2 + 2] = HEAP32[$680$s2 + 2];
              HEAP32[$679$s2 + 3] = HEAP32[$680$s2 + 3];
              var $681 = HEAP32[$655$s2];
              HEAP32[$678 >> 2] = $681;
              HEAP32[$655$s2] = $678;
              HEAP32[$671 >> 2] = 1;
              var $i5_1 = $i5_0 + 1 | 0;
            } else {
              var $i5_1 = $i5_0;
            }
            var $i5_1;
            var $pdpm6_0 = HEAP32[$pdpm6_0 >> 2];
            var $i5_0 = $i5_1;
          }
          var $689 = HEAP32[$dc$s2 + 2];
          _d_print_comp($dpi, $689);
          HEAP32[$655$s2] = $656;
          if ((HEAP32[$660 >> 2] | 0) != 0) {
            break $_$2;
          }
          if ($i5_0 >>> 0 > 1) {
            var $i5_222 = $i5_0;
            while (1) {
              var $i5_222;
              var $693 = $i5_222 - 1 | 0;
              var $695 = HEAP32[(($693 << 4) + 4 >> 2) + $adpm4$s2];
              _d_print_mod($dpi, $695);
              if ($693 >>> 0 <= 1) {
                break;
              }
              var $i5_222 = $693;
            }
            var $698 = HEAP32[$655$s2];
          } else {
            var $698 = $656;
          }
          var $698;
          _d_print_array_type($dpi, $dc, $698);
          break $_$2;
        } else if (($9 | 0) == 37) {
          var $700$s2 = ($dpi + 20 | 0) >> 2;
          var $701 = HEAP32[$700$s2];
          var $702 = $dpm7 | 0;
          HEAP32[$702 >> 2] = $701;
          HEAP32[$700$s2] = $dpm7;
          HEAP32[$dpm7 + 4 >> 2] = $dc;
          var $704 = $dpm7 + 8 | 0;
          HEAP32[$704 >> 2] = 0;
          var $706 = HEAP32[$dpi$s2 + 4];
          HEAP32[$dpm7 + 12 >> 2] = $706;
          var $708 = $dc + 4 | 0;
          var $711 = HEAP32[$dc$s2 + 2];
          _d_print_comp($dpi, $711);
          var $713 = (HEAP32[$704 >> 2] | 0) == 0;
          $_$241 : do {
            if ($713) {
              var $715 = HEAPU32[$4$s2];
              var $716 = ($715 | 0) == 0;
              do {
                if (!$716) {
                  var $718 = $dpi + 8 | 0;
                  var $719 = HEAPU32[$718 >> 2];
                  if ($719 >>> 0 >= HEAPU32[$dpi$s2 + 3] >>> 0) {
                    __label__ = 187;
                    break;
                  }
                  HEAP32[$718 >> 2] = $719 + 1 | 0;
                  HEAP8[$715 + $719 | 0] = 32;
                  __label__ = 188;
                  break;
                }
                __label__ = 187;
              } while (0);
              if (__label__ == 187) {
                _d_print_append_char($dpi, 32);
              }
              var $729 = HEAP32[$708 >> 2];
              _d_print_comp($dpi, $729);
              var $730 = HEAPU32[$4$s2];
              var $731 = ($730 | 0) == 0;
              do {
                if (!$731) {
                  var $733$s2 = ($dpi + 8 | 0) >> 2;
                  var $734 = HEAPU32[$733$s2];
                  if (($734 + 3 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
                    break;
                  }
                  var $740 = $730 + $734 | 0;
                  HEAP8[$740] = HEAP8[STRING_TABLE.__str135 | 0];
                  HEAP8[$740 + 1] = HEAP8[(STRING_TABLE.__str135 | 0) + 1];
                  HEAP8[$740 + 2] = HEAP8[(STRING_TABLE.__str135 | 0) + 2];
                  var $742 = HEAP32[$733$s2] + 3 | 0;
                  HEAP32[$733$s2] = $742;
                  break $_$241;
                }
              } while (0);
              _d_print_append_buffer($dpi, STRING_TABLE.__str135 | 0, 3);
            }
          } while (0);
          var $745 = HEAP32[$702 >> 2];
          HEAP32[$700$s2] = $745;
          break $_$2;
        } else if (($9 | 0) == 38 || ($9 | 0) == 39) {
          var $749 = HEAP32[$dc$s2 + 1];
          _d_print_comp($dpi, $749);
          var $751 = $dc + 8 | 0;
          if ((HEAP32[$751 >> 2] | 0) == 0) {
            break $_$2;
          }
          var $755 = HEAPU32[$4$s2];
          var $756 = ($755 | 0) == 0;
          do {
            if (!$756) {
              var $758$s2 = ($dpi + 8 | 0) >> 2;
              var $759 = HEAPU32[$758$s2];
              if (($759 + 2 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
                __label__ = 197;
                break;
              }
              var $766 = $755 + $759 | 0;
              tempBigInt = 8236;
              HEAP8[$766] = tempBigInt & 255;
              tempBigInt >>= 8;
              HEAP8[$766 + 1] = tempBigInt & 255;
              var $768 = HEAP32[$758$s2] + 2 | 0;
              HEAP32[$758$s2] = $768;
              __label__ = 198;
              break;
            }
            __label__ = 197;
          } while (0);
          if (__label__ == 197) {
            _d_print_append_buffer($dpi, STRING_TABLE.__str136 | 0, 2);
          }
          var $771 = HEAP32[$751 >> 2];
          _d_print_comp($dpi, $771);
          break $_$2;
        } else if (($9 | 0) == 40) {
          var $773$s2 = ($dpi + 8 | 0) >> 2;
          var $774 = HEAPU32[$773$s2];
          var $776$s2 = ($dpi + 12 | 0) >> 2;
          if (($774 + 8 | 0) >>> 0 > HEAPU32[$776$s2] >>> 0) {
            _d_print_append_buffer($dpi, STRING_TABLE.__str137 | 0, 8);
          } else {
            var $781 = $5 + $774 | 0;
            var $st$4$0 = $781 | 0;
            tempBigInt = 1919250543;
            HEAP8[$st$4$0] = tempBigInt & 255;
            tempBigInt >>= 8;
            HEAP8[$st$4$0 + 1] = tempBigInt & 255;
            tempBigInt >>= 8;
            HEAP8[$st$4$0 + 2] = tempBigInt & 255;
            tempBigInt >>= 8;
            HEAP8[$st$4$0 + 3] = tempBigInt & 255;
            var $st$4$1 = $781 + 4 | 0;
            tempBigInt = 1919906913;
            HEAP8[$st$4$1] = tempBigInt & 255;
            tempBigInt >>= 8;
            HEAP8[$st$4$1 + 1] = tempBigInt & 255;
            tempBigInt >>= 8;
            HEAP8[$st$4$1 + 2] = tempBigInt & 255;
            tempBigInt >>= 8;
            HEAP8[$st$4$1 + 3] = tempBigInt & 255;
            var $783 = HEAP32[$773$s2] + 8 | 0;
            HEAP32[$773$s2] = $783;
          }
          var $787$s2 = ($dc + 4 | 0) >> 2;
          var $792 = (HEAP8[HEAP32[HEAP32[$787$s2] + 4 >> 2]] - 97 & 255 & 255) < 26;
          $_$267 : do {
            if ($792) {
              var $794 = HEAPU32[$4$s2];
              var $795 = ($794 | 0) == 0;
              do {
                if (!$795) {
                  var $797 = HEAPU32[$773$s2];
                  if ($797 >>> 0 >= HEAPU32[$776$s2] >>> 0) {
                    break;
                  }
                  HEAP32[$773$s2] = $797 + 1 | 0;
                  HEAP8[$794 + $797 | 0] = 32;
                  break $_$267;
                }
              } while (0);
              _d_print_append_char($dpi, 32);
            }
          } while (0);
          var $805 = HEAPU32[$4$s2];
          var $806 = ($805 | 0) == 0;
          do {
            if (!$806) {
              var $808 = HEAPU32[$773$s2];
              var $809 = HEAPU32[$787$s2];
              var $811 = HEAPU32[$809 + 8 >> 2];
              if (($811 + $808 | 0) >>> 0 > HEAPU32[$776$s2] >>> 0) {
                var $826 = $809;
                var $825 = $811;
                break;
              }
              var $816 = $805 + $808 | 0;
              var $818 = HEAP32[$809 + 4 >> 2];
              _memcpy($816, $818, $811, 1);
              var $823 = HEAP32[$773$s2] + HEAP32[HEAP32[$787$s2] + 8 >> 2] | 0;
              HEAP32[$773$s2] = $823;
              break $_$2;
            }
            var $_pre53 = HEAPU32[$787$s2];
            var $826 = $_pre53;
            var $825 = HEAP32[$_pre53 + 8 >> 2];
          } while (0);
          var $825;
          var $826;
          var $828 = HEAP32[$826 + 4 >> 2];
          _d_print_append_buffer($dpi, $828, $825);
          break $_$2;
        } else if (($9 | 0) == 41) {
          var $830$s2 = ($dpi + 8 | 0) >> 2;
          var $831 = HEAPU32[$830$s2];
          if (($831 + 9 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
            _d_print_append_buffer($dpi, STRING_TABLE.__str10180 | 0, 9);
          } else {
            var $837 = $5 + $831 | 0;
            for (var $$src = STRING_TABLE.__str10180 | 0, $$dest = $837, $$stop = $$src + 9; $$src < $$stop; $$src++, $$dest++) {
              HEAP8[$$dest] = HEAP8[$$src];
            }
            var $839 = HEAP32[$830$s2] + 9 | 0;
            HEAP32[$830$s2] = $839;
          }
          var $844 = HEAP32[$dc$s2 + 2];
          _d_print_comp($dpi, $844);
          break $_$2;
        } else if (($9 | 0) == 42) {
          var $846$s2 = ($dpi + 8 | 0) >> 2;
          var $847 = HEAPU32[$846$s2];
          if (($847 + 9 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
            _d_print_append_buffer($dpi, STRING_TABLE.__str10180 | 0, 9);
          } else {
            var $853 = $5 + $847 | 0;
            for (var $$src = STRING_TABLE.__str10180 | 0, $$dest = $853, $$stop = $$src + 9; $$src < $$stop; $$src++, $$dest++) {
              HEAP8[$$dest] = HEAP8[$$src];
            }
            var $855 = HEAP32[$846$s2] + 9 | 0;
            HEAP32[$846$s2] = $855;
          }
          _d_print_cast($dpi, $dc);
          break $_$2;
        } else if (($9 | 0) == 43) {
          var $860 = $dc + 4 | 0;
          var $861 = HEAP32[$860 >> 2];
          var $864 = (HEAP32[$861 >> 2] | 0) == 42;
          $_$290 : do {
            if ($864) {
              var $867$s2 = ($dpi + 8 | 0) >> 2;
              var $868 = HEAPU32[$867$s2];
              var $869 = $dpi + 12 | 0;
              if ($868 >>> 0 < HEAPU32[$869 >> 2] >>> 0) {
                HEAP32[$867$s2] = $868 + 1 | 0;
                HEAP8[$5 + $868 | 0] = 40;
              } else {
                _d_print_append_char($dpi, 40);
              }
              var $877 = HEAP32[$860 >> 2];
              _d_print_cast($dpi, $877);
              var $878 = HEAPU32[$4$s2];
              var $879 = ($878 | 0) == 0;
              do {
                if (!$879) {
                  var $881 = HEAPU32[$867$s2];
                  if ($881 >>> 0 >= HEAPU32[$869 >> 2] >>> 0) {
                    break;
                  }
                  HEAP32[$867$s2] = $881 + 1 | 0;
                  HEAP8[$878 + $881 | 0] = 41;
                  break $_$290;
                }
              } while (0);
              _d_print_append_char($dpi, 41);
            } else {
              _d_print_expr_op($dpi, $861);
            }
          } while (0);
          var $889 = HEAPU32[$4$s2];
          var $890 = ($889 | 0) == 0;
          do {
            if (!$890) {
              var $892 = $dpi + 8 | 0;
              var $893 = HEAPU32[$892 >> 2];
              if ($893 >>> 0 >= HEAPU32[$dpi$s2 + 3] >>> 0) {
                __label__ = 232;
                break;
              }
              HEAP32[$892 >> 2] = $893 + 1 | 0;
              HEAP8[$889 + $893 | 0] = 40;
              __label__ = 233;
              break;
            }
            __label__ = 232;
          } while (0);
          if (__label__ == 232) {
            _d_print_append_char($dpi, 40);
          }
          var $904 = HEAP32[$dc$s2 + 2];
          _d_print_comp($dpi, $904);
          var $905 = HEAPU32[$4$s2];
          var $906 = ($905 | 0) == 0;
          do {
            if (!$906) {
              var $908 = $dpi + 8 | 0;
              var $909 = HEAPU32[$908 >> 2];
              if ($909 >>> 0 >= HEAPU32[$dpi$s2 + 3] >>> 0) {
                break;
              }
              HEAP32[$908 >> 2] = $909 + 1 | 0;
              HEAP8[$905 + $909 | 0] = 41;
              break $_$2;
            }
          } while (0);
          _d_print_append_char($dpi, 41);
          break $_$2;
        } else if (($9 | 0) == 44) {
          var $919$s2 = ($dc + 8 | 0) >> 2;
          if ((HEAP32[HEAP32[$919$s2] >> 2] | 0) == 45) {
            var $927$s2 = ($dc + 4 | 0) >> 2;
            var $928 = HEAP32[$927$s2];
            var $931 = (HEAP32[$928 >> 2] | 0) == 40;
            do {
              if ($931) {
                var $935 = HEAP32[$928 + 4 >> 2];
                if ((HEAP32[$935 + 8 >> 2] | 0) != 1) {
                  break;
                }
                if (HEAP8[HEAP32[$935 + 4 >> 2]] << 24 >> 24 != 62) {
                  break;
                }
                var $945 = $dpi + 8 | 0;
                var $946 = HEAPU32[$945 >> 2];
                if ($946 >>> 0 < HEAPU32[$dpi$s2 + 3] >>> 0) {
                  HEAP32[$945 >> 2] = $946 + 1 | 0;
                  HEAP8[$5 + $946 | 0] = 40;
                } else {
                  _d_print_append_char($dpi, 40);
                }
              }
            } while (0);
            var $955 = HEAPU32[$4$s2];
            var $956 = ($955 | 0) == 0;
            do {
              if (!$956) {
                var $958 = $dpi + 8 | 0;
                var $959 = HEAPU32[$958 >> 2];
                if ($959 >>> 0 >= HEAPU32[$dpi$s2 + 3] >>> 0) {
                  __label__ = 248;
                  break;
                }
                HEAP32[$958 >> 2] = $959 + 1 | 0;
                HEAP8[$955 + $959 | 0] = 40;
                __label__ = 249;
                break;
              }
              __label__ = 248;
            } while (0);
            if (__label__ == 248) {
              _d_print_append_char($dpi, 40);
            }
            var $971 = HEAP32[HEAP32[$919$s2] + 4 >> 2];
            _d_print_comp($dpi, $971);
            var $972 = HEAPU32[$4$s2];
            var $973 = ($972 | 0) == 0;
            do {
              if (!$973) {
                var $975$s2 = ($dpi + 8 | 0) >> 2;
                var $976 = HEAPU32[$975$s2];
                if (($976 + 2 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
                  __label__ = 252;
                  break;
                }
                var $983 = $972 + $976 | 0;
                tempBigInt = 8233;
                HEAP8[$983] = tempBigInt & 255;
                tempBigInt >>= 8;
                HEAP8[$983 + 1] = tempBigInt & 255;
                var $985 = HEAP32[$975$s2] + 2 | 0;
                HEAP32[$975$s2] = $985;
                __label__ = 253;
                break;
              }
              __label__ = 252;
            } while (0);
            if (__label__ == 252) {
              _d_print_append_buffer($dpi, STRING_TABLE.__str139 | 0, 2);
            }
            var $988 = HEAP32[$927$s2];
            _d_print_expr_op($dpi, $988);
            var $989 = HEAPU32[$4$s2];
            var $990 = ($989 | 0) == 0;
            do {
              if (!$990) {
                var $992$s2 = ($dpi + 8 | 0) >> 2;
                var $993 = HEAPU32[$992$s2];
                if (($993 + 2 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
                  __label__ = 256;
                  break;
                }
                var $1000 = $989 + $993 | 0;
                tempBigInt = 10272;
                HEAP8[$1000] = tempBigInt & 255;
                tempBigInt >>= 8;
                HEAP8[$1000 + 1] = tempBigInt & 255;
                var $1002 = HEAP32[$992$s2] + 2 | 0;
                HEAP32[$992$s2] = $1002;
                __label__ = 257;
                break;
              }
              __label__ = 256;
            } while (0);
            if (__label__ == 256) {
              _d_print_append_buffer($dpi, STRING_TABLE.__str140 | 0, 2);
            }
            var $1008 = HEAP32[HEAP32[$919$s2] + 8 >> 2];
            _d_print_comp($dpi, $1008);
            var $1009 = HEAPU32[$4$s2];
            var $1010 = ($1009 | 0) == 0;
            do {
              if (!$1010) {
                var $1012 = $dpi + 8 | 0;
                var $1013 = HEAPU32[$1012 >> 2];
                if ($1013 >>> 0 >= HEAPU32[$dpi$s2 + 3] >>> 0) {
                  __label__ = 260;
                  break;
                }
                HEAP32[$1012 >> 2] = $1013 + 1 | 0;
                HEAP8[$1009 + $1013 | 0] = 41;
                __label__ = 261;
                break;
              }
              __label__ = 260;
            } while (0);
            if (__label__ == 260) {
              _d_print_append_char($dpi, 41);
            }
            var $1022 = HEAP32[$927$s2];
            if ((HEAP32[$1022 >> 2] | 0) != 40) {
              break $_$2;
            }
            var $1029 = HEAP32[$1022 + 4 >> 2];
            if ((HEAP32[$1029 + 8 >> 2] | 0) != 1) {
              break $_$2;
            }
            if (HEAP8[HEAP32[$1029 + 4 >> 2]] << 24 >> 24 != 62) {
              break $_$2;
            }
            var $1039 = HEAPU32[$4$s2];
            var $1040 = ($1039 | 0) == 0;
            do {
              if (!$1040) {
                var $1042 = $dpi + 8 | 0;
                var $1043 = HEAPU32[$1042 >> 2];
                if ($1043 >>> 0 >= HEAPU32[$dpi$s2 + 3] >>> 0) {
                  break;
                }
                HEAP32[$1042 >> 2] = $1043 + 1 | 0;
                HEAP8[$1039 + $1043 | 0] = 41;
                break $_$2;
              }
            } while (0);
            _d_print_append_char($dpi, 41);
            break $_$2;
          }
          _d_print_error($dpi);
          break $_$2;
        } else if (($9 | 0) == 45) {
          _d_print_error($dpi);
          break $_$2;
        } else if (($9 | 0) == 46) {
          var $1053 = $dc + 4 | 0;
          var $1055$s2 = ($dc + 8 | 0) >> 2;
          var $1056 = HEAP32[$1055$s2];
          var $1059 = (HEAP32[$1056 >> 2] | 0) == 47;
          do {
            if ($1059) {
              if ((HEAP32[HEAP32[$1056 + 8 >> 2] >> 2] | 0) != 48) {
                break;
              }
              var $1069$s2 = ($dpi + 8 | 0) >> 2;
              var $1070 = HEAPU32[$1069$s2];
              var $1071$s2 = ($dpi + 12 | 0) >> 2;
              if ($1070 >>> 0 < HEAPU32[$1071$s2] >>> 0) {
                HEAP32[$1069$s2] = $1070 + 1 | 0;
                HEAP8[$5 + $1070 | 0] = 40;
              } else {
                _d_print_append_char($dpi, 40);
              }
              var $1082 = HEAP32[HEAP32[$1055$s2] + 4 >> 2];
              _d_print_comp($dpi, $1082);
              var $1083 = HEAPU32[$4$s2];
              var $1084 = ($1083 | 0) == 0;
              do {
                if (!$1084) {
                  var $1086 = HEAPU32[$1069$s2];
                  if (($1086 + 2 | 0) >>> 0 > HEAPU32[$1071$s2] >>> 0) {
                    __label__ = 278;
                    break;
                  }
                  var $1092 = $1083 + $1086 | 0;
                  tempBigInt = 8233;
                  HEAP8[$1092] = tempBigInt & 255;
                  tempBigInt >>= 8;
                  HEAP8[$1092 + 1] = tempBigInt & 255;
                  var $1094 = HEAP32[$1069$s2] + 2 | 0;
                  HEAP32[$1069$s2] = $1094;
                  __label__ = 279;
                  break;
                }
                __label__ = 278;
              } while (0);
              if (__label__ == 278) {
                _d_print_append_buffer($dpi, STRING_TABLE.__str139 | 0, 2);
              }
              var $1098 = HEAP32[$1053 >> 2];
              _d_print_expr_op($dpi, $1098);
              var $1099 = HEAPU32[$4$s2];
              var $1100 = ($1099 | 0) == 0;
              do {
                if (!$1100) {
                  var $1102 = HEAPU32[$1069$s2];
                  if (($1102 + 2 | 0) >>> 0 > HEAPU32[$1071$s2] >>> 0) {
                    __label__ = 282;
                    break;
                  }
                  var $1108 = $1099 + $1102 | 0;
                  tempBigInt = 10272;
                  HEAP8[$1108] = tempBigInt & 255;
                  tempBigInt >>= 8;
                  HEAP8[$1108 + 1] = tempBigInt & 255;
                  var $1110 = HEAP32[$1069$s2] + 2 | 0;
                  HEAP32[$1069$s2] = $1110;
                  __label__ = 283;
                  break;
                }
                __label__ = 282;
              } while (0);
              if (__label__ == 282) {
                _d_print_append_buffer($dpi, STRING_TABLE.__str140 | 0, 2);
              }
              var $1119 = HEAP32[HEAP32[HEAP32[$1055$s2] + 8 >> 2] + 4 >> 2];
              _d_print_comp($dpi, $1119);
              var $1120 = HEAPU32[$4$s2];
              var $1121 = ($1120 | 0) == 0;
              do {
                if (!$1121) {
                  var $1123 = HEAPU32[$1069$s2];
                  if (($1123 + 5 | 0) >>> 0 > HEAPU32[$1071$s2] >>> 0) {
                    __label__ = 286;
                    break;
                  }
                  var $1128 = $1120 + $1123 | 0;
                  HEAP8[$1128] = HEAP8[STRING_TABLE.__str141 | 0];
                  HEAP8[$1128 + 1] = HEAP8[(STRING_TABLE.__str141 | 0) + 1];
                  HEAP8[$1128 + 2] = HEAP8[(STRING_TABLE.__str141 | 0) + 2];
                  HEAP8[$1128 + 3] = HEAP8[(STRING_TABLE.__str141 | 0) + 3];
                  HEAP8[$1128 + 4] = HEAP8[(STRING_TABLE.__str141 | 0) + 4];
                  var $1130 = HEAP32[$1069$s2] + 5 | 0;
                  HEAP32[$1069$s2] = $1130;
                  __label__ = 287;
                  break;
                }
                __label__ = 286;
              } while (0);
              if (__label__ == 286) {
                _d_print_append_buffer($dpi, STRING_TABLE.__str141 | 0, 5);
              }
              var $1139 = HEAP32[HEAP32[HEAP32[$1055$s2] + 8 >> 2] + 8 >> 2];
              _d_print_comp($dpi, $1139);
              var $1140 = HEAPU32[$4$s2];
              var $1141 = ($1140 | 0) == 0;
              do {
                if (!$1141) {
                  var $1143 = HEAPU32[$1069$s2];
                  if ($1143 >>> 0 >= HEAPU32[$1071$s2] >>> 0) {
                    break;
                  }
                  HEAP32[$1069$s2] = $1143 + 1 | 0;
                  HEAP8[$1140 + $1143 | 0] = 41;
                  break $_$2;
                }
              } while (0);
              _d_print_append_char($dpi, 41);
              break $_$2;
            }
          } while (0);
          _d_print_error($dpi);
          break $_$2;
        } else if (($9 | 0) == 47 || ($9 | 0) == 48) {
          _d_print_error($dpi);
          break $_$2;
        } else if (($9 | 0) == 49 || ($9 | 0) == 50) {
          var $1153 = $dc + 4 | 0;
          var $1154 = HEAP32[$1153 >> 2];
          var $1157 = (HEAP32[$1154 >> 2] | 0) == 33;
          do {
            if ($1157) {
              var $1163 = HEAPU32[HEAP32[$1154 + 4 >> 2] + 16 >> 2];
              if (($1163 | 0) == 1 || ($1163 | 0) == 2 || ($1163 | 0) == 3 || ($1163 | 0) == 4 || ($1163 | 0) == 5 || ($1163 | 0) == 6) {
                var $1166 = $dc + 8 | 0;
                if ((HEAP32[HEAP32[$1166 >> 2] >> 2] | 0) != 0) {
                  var $tp_0 = $1163;
                  break;
                }
                if (($9 | 0) == 50) {
                  var $1174 = $dpi + 8 | 0;
                  var $1175 = HEAPU32[$1174 >> 2];
                  if ($1175 >>> 0 < HEAPU32[$dpi$s2 + 3] >>> 0) {
                    HEAP32[$1174 >> 2] = $1175 + 1 | 0;
                    HEAP8[$5 + $1175 | 0] = 45;
                  } else {
                    _d_print_append_char($dpi, 45);
                  }
                }
                var $1184 = HEAP32[$1166 >> 2];
                _d_print_comp($dpi, $1184);
                if (($1163 | 0) == 2) {
                  var $1186 = HEAPU32[$4$s2];
                  var $1187 = ($1186 | 0) == 0;
                  do {
                    if (!$1187) {
                      var $1189 = $dpi + 8 | 0;
                      var $1190 = HEAPU32[$1189 >> 2];
                      if ($1190 >>> 0 >= HEAPU32[$dpi$s2 + 3] >>> 0) {
                        break;
                      }
                      HEAP32[$1189 >> 2] = $1190 + 1 | 0;
                      HEAP8[$1186 + $1190 | 0] = 117;
                      break $_$2;
                    }
                  } while (0);
                  _d_print_append_char($dpi, 117);
                  break $_$2;
                } else if (($1163 | 0) == 3) {
                  var $1199 = HEAPU32[$4$s2];
                  var $1200 = ($1199 | 0) == 0;
                  do {
                    if (!$1200) {
                      var $1202 = $dpi + 8 | 0;
                      var $1203 = HEAPU32[$1202 >> 2];
                      if ($1203 >>> 0 >= HEAPU32[$dpi$s2 + 3] >>> 0) {
                        break;
                      }
                      HEAP32[$1202 >> 2] = $1203 + 1 | 0;
                      HEAP8[$1199 + $1203 | 0] = 108;
                      break $_$2;
                    }
                  } while (0);
                  _d_print_append_char($dpi, 108);
                  break $_$2;
                } else if (($1163 | 0) == 4) {
                  var $1212 = HEAPU32[$4$s2];
                  var $1213 = ($1212 | 0) == 0;
                  do {
                    if (!$1213) {
                      var $1215$s2 = ($dpi + 8 | 0) >> 2;
                      var $1216 = HEAPU32[$1215$s2];
                      if (($1216 + 2 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
                        break;
                      }
                      var $1223 = $1212 + $1216 | 0;
                      tempBigInt = 27765;
                      HEAP8[$1223] = tempBigInt & 255;
                      tempBigInt >>= 8;
                      HEAP8[$1223 + 1] = tempBigInt & 255;
                      var $1225 = HEAP32[$1215$s2] + 2 | 0;
                      HEAP32[$1215$s2] = $1225;
                      break $_$2;
                    }
                  } while (0);
                  _d_print_append_buffer($dpi, STRING_TABLE.__str142 | 0, 2);
                  break $_$2;
                } else if (($1163 | 0) == 5) {
                  var $1228 = HEAPU32[$4$s2];
                  var $1229 = ($1228 | 0) == 0;
                  do {
                    if (!$1229) {
                      var $1231$s2 = ($dpi + 8 | 0) >> 2;
                      var $1232 = HEAPU32[$1231$s2];
                      if (($1232 + 2 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
                        break;
                      }
                      var $1239 = $1228 + $1232 | 0;
                      tempBigInt = 27756;
                      HEAP8[$1239] = tempBigInt & 255;
                      tempBigInt >>= 8;
                      HEAP8[$1239 + 1] = tempBigInt & 255;
                      var $1241 = HEAP32[$1231$s2] + 2 | 0;
                      HEAP32[$1231$s2] = $1241;
                      break $_$2;
                    }
                  } while (0);
                  _d_print_append_buffer($dpi, STRING_TABLE.__str143 | 0, 2);
                  break $_$2;
                } else if (($1163 | 0) == 6) {
                  var $1244 = HEAPU32[$4$s2];
                  var $1245 = ($1244 | 0) == 0;
                  do {
                    if (!$1245) {
                      var $1247$s2 = ($dpi + 8 | 0) >> 2;
                      var $1248 = HEAPU32[$1247$s2];
                      if (($1248 + 3 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
                        break;
                      }
                      var $1254 = $1244 + $1248 | 0;
                      HEAP8[$1254] = HEAP8[STRING_TABLE.__str144 | 0];
                      HEAP8[$1254 + 1] = HEAP8[(STRING_TABLE.__str144 | 0) + 1];
                      HEAP8[$1254 + 2] = HEAP8[(STRING_TABLE.__str144 | 0) + 2];
                      var $1256 = HEAP32[$1247$s2] + 3 | 0;
                      HEAP32[$1247$s2] = $1256;
                      break $_$2;
                    }
                  } while (0);
                  _d_print_append_buffer($dpi, STRING_TABLE.__str144 | 0, 3);
                  break $_$2;
                } else {
                  break $_$2;
                }
              } else if (($1163 | 0) == 7) {
                var $1261$s2 = HEAP32[$dc$s2 + 2] >> 2;
                if ((HEAP32[$1261$s2] | 0) != 0) {
                  var $tp_0 = 7;
                  break;
                }
                if (!((HEAP32[$1261$s2 + 2] | 0) == 1 & ($9 | 0) == 49)) {
                  var $tp_0 = $1163;
                  break;
                }
                var $1274 = HEAP8[HEAP32[$1261$s2 + 1]] << 24 >> 24;
                if (($1274 | 0) == 48) {
                  var $1276$s2 = ($dpi + 8 | 0) >> 2;
                  var $1277 = HEAPU32[$1276$s2];
                  if (($1277 + 5 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
                    _d_print_append_buffer($dpi, STRING_TABLE.__str145 | 0, 5);
                    break $_$2;
                  }
                  var $1283 = $5 + $1277 | 0;
                  HEAP8[$1283] = HEAP8[STRING_TABLE.__str145 | 0];
                  HEAP8[$1283 + 1] = HEAP8[(STRING_TABLE.__str145 | 0) + 1];
                  HEAP8[$1283 + 2] = HEAP8[(STRING_TABLE.__str145 | 0) + 2];
                  HEAP8[$1283 + 3] = HEAP8[(STRING_TABLE.__str145 | 0) + 3];
                  HEAP8[$1283 + 4] = HEAP8[(STRING_TABLE.__str145 | 0) + 4];
                  var $1285 = HEAP32[$1276$s2] + 5 | 0;
                  HEAP32[$1276$s2] = $1285;
                  break $_$2;
                } else if (($1274 | 0) == 49) {
                  var $1288$s2 = ($dpi + 8 | 0) >> 2;
                  var $1289 = HEAPU32[$1288$s2];
                  if (($1289 + 4 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
                    _d_print_append_buffer($dpi, STRING_TABLE.__str146 | 0, 4);
                    break $_$2;
                  }
                  var $1296 = $5 + $1289 | 0;
                  tempBigInt = 1702195828;
                  HEAP8[$1296] = tempBigInt & 255;
                  tempBigInt >>= 8;
                  HEAP8[$1296 + 1] = tempBigInt & 255;
                  tempBigInt >>= 8;
                  HEAP8[$1296 + 2] = tempBigInt & 255;
                  tempBigInt >>= 8;
                  HEAP8[$1296 + 3] = tempBigInt & 255;
                  var $1298 = HEAP32[$1288$s2] + 4 | 0;
                  HEAP32[$1288$s2] = $1298;
                  break $_$2;
                } else {
                  var $tp_0 = $1163;
                  break;
                }
              } else {
                var $tp_0 = $1163;
                break;
              }
            } else {
              var $tp_0 = 0;
            }
          } while (0);
          var $tp_0;
          var $1301$s2 = ($dpi + 8 | 0) >> 2;
          var $1302 = HEAPU32[$1301$s2];
          var $1303$s2 = ($dpi + 12 | 0) >> 2;
          if ($1302 >>> 0 < HEAPU32[$1303$s2] >>> 0) {
            HEAP32[$1301$s2] = $1302 + 1 | 0;
            HEAP8[$5 + $1302 | 0] = 40;
          } else {
            _d_print_append_char($dpi, 40);
          }
          var $1311 = HEAP32[$1153 >> 2];
          _d_print_comp($dpi, $1311);
          var $1312 = HEAPU32[$4$s2];
          var $1313 = ($1312 | 0) == 0;
          do {
            if (!$1313) {
              var $1315 = HEAPU32[$1301$s2];
              if ($1315 >>> 0 >= HEAPU32[$1303$s2] >>> 0) {
                __label__ = 335;
                break;
              }
              HEAP32[$1301$s2] = $1315 + 1 | 0;
              HEAP8[$1312 + $1315 | 0] = 41;
              __label__ = 336;
              break;
            }
            __label__ = 335;
          } while (0);
          if (__label__ == 335) {
            _d_print_append_char($dpi, 41);
          }
          var $1324 = (HEAP32[$8 >> 2] | 0) == 50;
          $_$449 : do {
            if ($1324) {
              var $1326 = HEAPU32[$4$s2];
              var $1327 = ($1326 | 0) == 0;
              do {
                if (!$1327) {
                  var $1329 = HEAPU32[$1301$s2];
                  if ($1329 >>> 0 >= HEAPU32[$1303$s2] >>> 0) {
                    break;
                  }
                  HEAP32[$1301$s2] = $1329 + 1 | 0;
                  HEAP8[$1326 + $1329 | 0] = 45;
                  break $_$449;
                }
              } while (0);
              _d_print_append_char($dpi, 45);
            }
          } while (0);
          if (($tp_0 | 0) == 8) {
            var $1339 = HEAPU32[$4$s2];
            var $1340 = ($1339 | 0) == 0;
            do {
              if (!$1340) {
                var $1342 = HEAPU32[$1301$s2];
                if ($1342 >>> 0 >= HEAPU32[$1303$s2] >>> 0) {
                  __label__ = 345;
                  break;
                }
                HEAP32[$1301$s2] = $1342 + 1 | 0;
                HEAP8[$1339 + $1342 | 0] = 91;
                __label__ = 346;
                break;
              }
              __label__ = 345;
            } while (0);
            if (__label__ == 345) {
              _d_print_append_char($dpi, 91);
            }
            var $1352 = HEAP32[$dc$s2 + 2];
            _d_print_comp($dpi, $1352);
            var $1353 = HEAPU32[$4$s2];
            var $1354 = ($1353 | 0) == 0;
            do {
              if (!$1354) {
                var $1356 = HEAPU32[$1301$s2];
                if ($1356 >>> 0 >= HEAPU32[$1303$s2] >>> 0) {
                  break;
                }
                HEAP32[$1301$s2] = $1356 + 1 | 0;
                HEAP8[$1353 + $1356 | 0] = 93;
                break $_$2;
              }
            } while (0);
            _d_print_append_char($dpi, 93);
            break $_$2;
          }
          var $1366 = HEAP32[$dc$s2 + 2];
          _d_print_comp($dpi, $1366);
          break $_$2;
        } else {
          _d_print_error($dpi);
          break $_$2;
        }
      } while (0);
      var $537$s2 = ($dpi + 20 | 0) >> 2;
      var $538 = HEAP32[$537$s2];
      var $539 = $dpm | 0;
      HEAP32[$539 >> 2] = $538;
      HEAP32[$537$s2] = $dpm;
      HEAP32[$dpm + 4 >> 2] = $dc;
      var $541 = $dpm + 8 | 0;
      HEAP32[$541 >> 2] = 0;
      var $543 = HEAP32[$dpi$s2 + 4];
      HEAP32[$dpm + 12 >> 2] = $543;
      var $547 = HEAP32[$dc$s2 + 1];
      _d_print_comp($dpi, $547);
      if ((HEAP32[$541 >> 2] | 0) == 0) {
        _d_print_mod($dpi, $dc);
      }
      var $552 = HEAP32[$539 >> 2];
      HEAP32[$537$s2] = $552;
    }
  } while (0);
  STACKTOP = __stackBase__;
  return;
  return;
}

_d_print_comp["X"] = 1;

function _cplus_demangle_init_info($mangled, $options, $len, $di) {
  var $di$s2 = $di >> 2;
  HEAP32[$di$s2] = $mangled;
  HEAP32[$di$s2 + 1] = $mangled + $len | 0;
  HEAP32[$di$s2 + 2] = $options;
  HEAP32[$di$s2 + 3] = $mangled;
  HEAP32[$di$s2 + 6] = $len << 1;
  HEAP32[$di$s2 + 5] = 0;
  HEAP32[$di$s2 + 9] = $len;
  HEAP32[$di$s2 + 8] = 0;
  HEAP32[$di$s2 + 10] = 0;
  HEAP32[$di$s2 + 11] = 0;
  HEAP32[$di$s2 + 12] = 0;
  return;
  return;
}

function _d_print_append_char($dpi, $c) {
  var $5$s2;
  var $1 = $dpi + 4 | 0;
  var $2 = HEAPU32[$1 >> 2];
  var $3 = ($2 | 0) == 0;
  do {
    if (!$3) {
      var $5$s2 = ($dpi + 8 | 0) >> 2;
      var $6 = HEAPU32[$5$s2];
      if ($6 >>> 0 < HEAPU32[$dpi + 12 >> 2] >>> 0) {
        var $15 = $2;
        var $14 = $6;
      } else {
        _d_print_resize($dpi, 1);
        var $11 = HEAPU32[$1 >> 2];
        if (($11 | 0) == 0) {
          break;
        }
        var $15 = $11;
        var $14 = HEAP32[$5$s2];
      }
      var $14;
      var $15;
      HEAP8[$15 + $14 | 0] = $c & 255;
      var $19 = HEAP32[$5$s2] + 1 | 0;
      HEAP32[$5$s2] = $19;
    }
  } while (0);
  return;
  return;
}

function ___cxa_demangle($mangled_name, $output_buffer, $length, $status) {
  var $alc$s2;
  var $status$s2 = $status >> 2;
  var __stackBase__ = STACKTOP;
  STACKTOP += 4;
  var $alc = __stackBase__, $alc$s2 = $alc >> 2;
  var $1 = ($mangled_name | 0) == 0;
  do {
    if ($1) {
      if (($status | 0) == 0) {
        var $_0 = 0;
        break;
      }
      HEAP32[$status$s2] = -3;
      var $_0 = 0;
    } else {
      var $7 = ($length | 0) == 0;
      if (($output_buffer | 0) != 0 & $7) {
        if (($status | 0) == 0) {
          var $_0 = 0;
          break;
        }
        HEAP32[$status$s2] = -3;
        var $_0 = 0;
      } else {
        var $12 = _d_demangle($mangled_name, $alc);
        if (($12 | 0) == 0) {
          if (($status | 0) == 0) {
            var $_0 = 0;
            break;
          }
          if ((HEAP32[$alc$s2] | 0) == 1) {
            HEAP32[$status$s2] = -1;
            var $_0 = 0;
          } else {
            HEAP32[$status$s2] = -2;
            var $_0 = 0;
          }
        } else {
          var $22 = ($output_buffer | 0) == 0;
          do {
            if ($22) {
              if ($7) {
                var $demangled_0 = $12;
                break;
              }
              var $25 = HEAP32[$alc$s2];
              HEAP32[$length >> 2] = $25;
              var $demangled_0 = $12;
            } else {
              var $27 = _strlen($12);
              if ($27 >>> 0 < HEAPU32[$length >> 2] >>> 0) {
                var $31 = _strcpy($output_buffer, $12);
                _free($12);
                var $demangled_0 = $output_buffer;
              } else {
                _free($output_buffer);
                var $33 = HEAP32[$alc$s2];
                HEAP32[$length >> 2] = $33;
                var $demangled_0 = $12;
              }
            }
          } while (0);
          var $demangled_0;
          if (($status | 0) == 0) {
            var $_0 = $demangled_0;
            break;
          }
          HEAP32[$status$s2] = 0;
          var $_0 = $demangled_0;
        }
      }
    }
  } while (0);
  var $_0;
  STACKTOP = __stackBase__;
  return $_0;
  return null;
}

___cxa_demangle["X"] = 1;

function _d_demangle($mangled, $palc) {
  var $di$s2;
  var __stackBase__ = STACKTOP;
  STACKTOP += 52;
  var __label__;
  var $di = __stackBase__, $di$s2 = $di >> 2;
  HEAP32[$palc >> 2] = 0;
  var $1 = _strlen($mangled);
  var $3 = HEAP8[$mangled] << 24 >> 24 == 95;
  do {
    if ($3) {
      if (HEAP8[$mangled + 1 | 0] << 24 >> 24 == 90) {
        var $type_0 = 0;
        __label__ = 13;
        break;
      }
      __label__ = 3;
      break;
    } else {
      __label__ = 3;
    }
  } while (0);
  do {
    if (__label__ == 3) {
      var $9 = _strncmp($mangled, STRING_TABLE.__str117 | 0, 8);
      if (($9 | 0) != 0) {
        var $type_0 = 1;
        __label__ = 13;
        break;
      }
      var $13 = HEAP8[$mangled + 8 | 0];
      if (!($13 << 24 >> 24 == 46 || $13 << 24 >> 24 == 95 || $13 << 24 >> 24 == 36)) {
        var $type_0 = 1;
        __label__ = 13;
        break;
      }
      var $15 = $mangled + 9 | 0;
      var $16 = HEAP8[$15];
      if (!($16 << 24 >> 24 == 68 || $16 << 24 >> 24 == 73)) {
        var $type_0 = 1;
        __label__ = 13;
        break;
      }
      if (HEAP8[$mangled + 10 | 0] << 24 >> 24 != 95) {
        var $type_0 = 1;
        __label__ = 13;
        break;
      }
      var $22 = $1 + 29 | 0;
      var $23 = _malloc($22);
      if (($23 | 0) == 0) {
        HEAP32[$palc >> 2] = 1;
        var $_0 = 0;
        __label__ = 19;
        break;
      }
      if (HEAP8[$15] << 24 >> 24 == 73) {
        _memcpy($23, STRING_TABLE.__str118 | 0, 30, 1);
      } else {
        _memcpy($23, STRING_TABLE.__str119 | 0, 29, 1);
      }
      var $32 = $mangled + 11 | 0;
      var $33 = _strcat($23, $32);
      var $_0 = $23;
      __label__ = 19;
      break;
    }
  } while (0);
  if (__label__ == 13) {
    var $type_0;
    _cplus_demangle_init_info($mangled, 17, $1, $di);
    var $36 = HEAP32[$di$s2 + 6];
    var $37 = _llvm_stacksave();
    var $38 = STACKTOP;
    STACKTOP += $36 * 12;
    STACKTOP = STACKTOP + 3 >> 2 << 2;
    var $41 = STACKTOP;
    STACKTOP += HEAP32[$di$s2 + 9] * 4;
    STACKTOP = STACKTOP + 3 >> 2 << 2;
    HEAP32[$di$s2 + 4] = $38;
    HEAP32[$di$s2 + 7] = $41;
    if ($type_0) {
      var $47 = _cplus_demangle_type($di);
      var $dc_0 = $47;
    } else {
      var $45 = _cplus_demangle_mangled_name($di, 1);
      var $dc_0 = $45;
    }
    var $dc_0;
    var $dc_1 = HEAP8[HEAP32[$di$s2 + 3]] << 24 >> 24 == 0 ? $dc_0 : 0;
    var $59 = HEAP32[$di$s2 + 12] + $1 + HEAP32[$di$s2 + 10] * 10 | 0;
    if (($dc_1 | 0) == 0) {
      var $ret_0 = 0;
    } else {
      var $63 = $59 / 8 + $59 | 0;
      var $64 = _cplus_demangle_print(17, $dc_1, $63, $palc);
      var $ret_0 = $64;
    }
    var $ret_0;
    _llvm_stackrestore($37);
    var $_0 = $ret_0;
  }
  var $_0;
  STACKTOP = __stackBase__;
  return $_0;
  return null;
}

_d_demangle["X"] = 1;

function _is_gnu_v3_mangled_ctor($name) {
  var __stackBase__ = STACKTOP;
  STACKTOP += 8;
  var $ctor_kind = __stackBase__;
  var $dtor_kind = __stackBase__ + 4;
  var $1 = _is_ctor_or_dtor($name, $ctor_kind, $dtor_kind);
  var $_0 = ($1 | 0) == 0 ? 0 : HEAP32[$ctor_kind >> 2];
  STACKTOP = __stackBase__;
  return $_0;
  return null;
}

function _is_ctor_or_dtor($mangled, $ctor_kind, $dtor_kind) {
  var $dc_0$s2;
  var $di$s2;
  var __stackBase__ = STACKTOP;
  STACKTOP += 52;
  var $di = __stackBase__, $di$s2 = $di >> 2;
  HEAP32[$ctor_kind >> 2] = 0;
  HEAP32[$dtor_kind >> 2] = 0;
  var $1 = _strlen($mangled);
  _cplus_demangle_init_info($mangled, 16384, $1, $di);
  var $4 = STACKTOP;
  STACKTOP += HEAP32[$di$s2 + 6] * 12;
  STACKTOP = STACKTOP + 3 >> 2 << 2;
  var $7 = STACKTOP;
  STACKTOP += HEAP32[$di$s2 + 9] * 4;
  STACKTOP = STACKTOP + 3 >> 2 << 2;
  HEAP32[$di$s2 + 4] = $4;
  HEAP32[$di$s2 + 7] = $7;
  var $10 = _cplus_demangle_mangled_name($di, 1);
  var $ret_0_ph = 0;
  var $dc_0_ph = $10;
  $_$64 : while (1) {
    var $dc_0_ph;
    var $ret_0_ph;
    var $dc_0 = $dc_0_ph, $dc_0$s2 = $dc_0 >> 2;
    while (1) {
      var $dc_0;
      if (($dc_0 | 0) == 0) {
        break $_$64;
      }
      var $14 = HEAP32[$dc_0$s2];
      if (($14 | 0) == 3 || ($14 | 0) == 4 || ($14 | 0) == 25 || ($14 | 0) == 26 || ($14 | 0) == 27) {
        var $dc_0 = HEAP32[$dc_0$s2 + 1], $dc_0$s2 = $dc_0 >> 2;
      } else if (($14 | 0) == 1 || ($14 | 0) == 2) {
        var $dc_0 = HEAP32[$dc_0$s2 + 2], $dc_0$s2 = $dc_0 >> 2;
      } else if (($14 | 0) == 6) {
        var $26 = HEAP32[$dc_0$s2 + 1];
        HEAP32[$ctor_kind >> 2] = $26;
        var $ret_0_ph = 1;
        var $dc_0_ph = 0;
        continue $_$64;
      } else if (($14 | 0) == 7) {
        var $30 = HEAP32[$dc_0$s2 + 1];
        HEAP32[$dtor_kind >> 2] = $30;
        var $ret_0_ph = 1;
        var $dc_0_ph = 0;
        continue $_$64;
      } else {
        var $dc_0 = 0, $dc_0$s2 = $dc_0 >> 2;
        continue;
      }
    }
  }
  STACKTOP = __stackBase__;
  return $ret_0_ph;
  return null;
}

function _is_gnu_v3_mangled_dtor($name) {
  var __stackBase__ = STACKTOP;
  STACKTOP += 8;
  var $ctor_kind = __stackBase__;
  var $dtor_kind = __stackBase__ + 4;
  var $1 = _is_ctor_or_dtor($name, $ctor_kind, $dtor_kind);
  var $_0 = ($1 | 0) == 0 ? 0 : HEAP32[$dtor_kind >> 2];
  STACKTOP = __stackBase__;
  return $_0;
  return null;
}

function _d_print_error($dpi) {
  var $1 = $dpi + 4 | 0;
  var $2 = HEAP32[$1 >> 2];
  _free($2);
  HEAP32[$1 >> 2] = 0;
  return;
  return;
}

function _d_print_append_buffer($dpi, $s, $l) {
  var $5$s2;
  var $1 = $dpi + 4 | 0;
  var $2 = HEAPU32[$1 >> 2];
  var $3 = ($2 | 0) == 0;
  do {
    if (!$3) {
      var $5$s2 = ($dpi + 8 | 0) >> 2;
      var $6 = HEAPU32[$5$s2];
      if (($6 + $l | 0) >>> 0 > HEAPU32[$dpi + 12 >> 2] >>> 0) {
        _d_print_resize($dpi, $l);
        var $12 = HEAPU32[$1 >> 2];
        if (($12 | 0) == 0) {
          break;
        }
        var $16 = $12;
        var $15 = HEAP32[$5$s2];
      } else {
        var $16 = $2;
        var $15 = $6;
      }
      var $15;
      var $16;
      _memcpy($16 + $15 | 0, $s, $l, 1);
      var $19 = HEAP32[$5$s2] + $l | 0;
      HEAP32[$5$s2] = $19;
    }
  } while (0);
  return;
  return;
}

function _d_print_java_identifier($dpi, $name, $len) {
  var $5$s2;
  var __label__;
  var $1 = $name + $len | 0;
  var $2 = ($len | 0) > 0;
  $_$86 : do {
    if ($2) {
      var $3 = $1;
      var $4 = $dpi + 4 | 0;
      var $5$s2 = ($dpi + 8 | 0) >> 2;
      var $6 = $dpi + 12 | 0;
      var $p_09 = $name;
      while (1) {
        var $p_09;
        var $10 = ($3 - $p_09 | 0) > 3;
        $_$90 : do {
          if ($10) {
            if (HEAP8[$p_09] << 24 >> 24 != 95) {
              __label__ = 21;
              break;
            }
            if (HEAP8[$p_09 + 1 | 0] << 24 >> 24 != 95) {
              __label__ = 21;
              break;
            }
            if (HEAP8[$p_09 + 2 | 0] << 24 >> 24 != 85) {
              __label__ = 21;
              break;
            }
            var $q_0 = $p_09 + 3 | 0;
            var $c_0 = 0;
            while (1) {
              var $c_0;
              var $q_0;
              if ($q_0 >>> 0 >= $1 >>> 0) {
                __label__ = 21;
                break $_$90;
              }
              var $27 = HEAPU8[$q_0];
              var $28 = $27 << 24 >> 24;
              if (($27 - 48 & 255 & 255) < 10) {
                var $dig_0 = $28 - 48 | 0;
              } else {
                if (($27 - 65 & 255 & 255) < 6) {
                  var $dig_0 = $28 - 55 | 0;
                } else {
                  if (($27 - 97 & 255 & 255) >= 6) {
                    break;
                  }
                  var $dig_0 = $28 - 87 | 0;
                }
              }
              var $dig_0;
              var $q_0 = $q_0 + 1 | 0;
              var $c_0 = ($c_0 << 4) + $dig_0 | 0;
            }
            if (!($27 << 24 >> 24 == 95 & $c_0 >>> 0 < 256)) {
              __label__ = 21;
              break;
            }
            var $48 = HEAPU32[$4 >> 2];
            var $49 = ($48 | 0) == 0;
            do {
              if (!$49) {
                var $51 = HEAPU32[$5$s2];
                if ($51 >>> 0 >= HEAPU32[$6 >> 2] >>> 0) {
                  break;
                }
                HEAP32[$5$s2] = $51 + 1 | 0;
                HEAP8[$48 + $51 | 0] = $c_0 & 255;
                var $p_1 = $q_0;
                __label__ = 25;
                break $_$90;
              }
            } while (0);
            _d_print_append_char($dpi, $c_0);
            var $p_1 = $q_0;
            __label__ = 25;
            break;
          }
          __label__ = 21;
        } while (0);
        $_$112 : do {
          if (__label__ == 21) {
            var $59 = HEAPU32[$4 >> 2];
            var $60 = ($59 | 0) == 0;
            do {
              if (!$60) {
                var $62 = HEAPU32[$5$s2];
                if ($62 >>> 0 >= HEAPU32[$6 >> 2] >>> 0) {
                  break;
                }
                var $66 = HEAP8[$p_09];
                HEAP32[$5$s2] = $62 + 1 | 0;
                HEAP8[$59 + $62 | 0] = $66;
                var $p_1 = $p_09;
                break $_$112;
              }
            } while (0);
            var $70 = HEAP8[$p_09] << 24 >> 24;
            _d_print_append_char($dpi, $70);
            var $p_1 = $p_09;
          }
        } while (0);
        var $p_1;
        var $72 = $p_1 + 1 | 0;
        if ($72 >>> 0 >= $1 >>> 0) {
          break $_$86;
        }
        var $p_09 = $72;
      }
    }
  } while (0);
  return;
  return;
}

_d_print_java_identifier["X"] = 1;

function _d_print_mod($dpi, $mod) {
  var $160$s2;
  var $124$s2;
  var $107$s2;
  var $40$s2;
  var $24$s2;
  var $8$s2;
  var $dpi$s2 = $dpi >> 2;
  var __label__;
  var $2 = HEAP32[$mod >> 2];
  $_$121 : do {
    if (($2 | 0) == 22 || ($2 | 0) == 25) {
      var $5 = HEAPU32[$dpi$s2 + 1];
      var $6 = ($5 | 0) == 0;
      do {
        if (!$6) {
          var $8$s2 = ($dpi + 8 | 0) >> 2;
          var $9 = HEAPU32[$8$s2];
          if (($9 + 9 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
            break;
          }
          var $15 = $5 + $9 | 0;
          for (var $$src = STRING_TABLE.__str147 | 0, $$dest = $15, $$stop = $$src + 9; $$src < $$stop; $$src++, $$dest++) {
            HEAP8[$$dest] = HEAP8[$$src];
          }
          var $17 = HEAP32[$8$s2] + 9 | 0;
          HEAP32[$8$s2] = $17;
          break $_$121;
        }
      } while (0);
      _d_print_append_buffer($dpi, STRING_TABLE.__str147 | 0, 9);
    } else if (($2 | 0) == 23 || ($2 | 0) == 26) {
      var $21 = HEAPU32[$dpi$s2 + 1];
      var $22 = ($21 | 0) == 0;
      do {
        if (!$22) {
          var $24$s2 = ($dpi + 8 | 0) >> 2;
          var $25 = HEAPU32[$24$s2];
          if (($25 + 9 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
            break;
          }
          var $31 = $21 + $25 | 0;
          for (var $$src = STRING_TABLE.__str148 | 0, $$dest = $31, $$stop = $$src + 9; $$src < $$stop; $$src++, $$dest++) {
            HEAP8[$$dest] = HEAP8[$$src];
          }
          var $33 = HEAP32[$24$s2] + 9 | 0;
          HEAP32[$24$s2] = $33;
          break $_$121;
        }
      } while (0);
      _d_print_append_buffer($dpi, STRING_TABLE.__str148 | 0, 9);
    } else if (($2 | 0) == 24 || ($2 | 0) == 27) {
      var $37 = HEAPU32[$dpi$s2 + 1];
      var $38 = ($37 | 0) == 0;
      do {
        if (!$38) {
          var $40$s2 = ($dpi + 8 | 0) >> 2;
          var $41 = HEAPU32[$40$s2];
          if (($41 + 6 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
            break;
          }
          var $47 = $37 + $41 | 0;
          HEAP8[$47] = HEAP8[STRING_TABLE.__str149 | 0];
          HEAP8[$47 + 1] = HEAP8[(STRING_TABLE.__str149 | 0) + 1];
          HEAP8[$47 + 2] = HEAP8[(STRING_TABLE.__str149 | 0) + 2];
          HEAP8[$47 + 3] = HEAP8[(STRING_TABLE.__str149 | 0) + 3];
          HEAP8[$47 + 4] = HEAP8[(STRING_TABLE.__str149 | 0) + 4];
          HEAP8[$47 + 5] = HEAP8[(STRING_TABLE.__str149 | 0) + 5];
          var $49 = HEAP32[$40$s2] + 6 | 0;
          HEAP32[$40$s2] = $49;
          break $_$121;
        }
      } while (0);
      _d_print_append_buffer($dpi, STRING_TABLE.__str149 | 0, 6);
    } else if (($2 | 0) == 28) {
      var $53 = HEAPU32[$dpi$s2 + 1];
      var $54 = ($53 | 0) == 0;
      do {
        if (!$54) {
          var $56 = $dpi + 8 | 0;
          var $57 = HEAPU32[$56 >> 2];
          if ($57 >>> 0 >= HEAPU32[$dpi$s2 + 3] >>> 0) {
            __label__ = 17;
            break;
          }
          HEAP32[$56 >> 2] = $57 + 1 | 0;
          HEAP8[$53 + $57 | 0] = 32;
          __label__ = 18;
          break;
        }
        __label__ = 17;
      } while (0);
      if (__label__ == 17) {
        _d_print_append_char($dpi, 32);
      }
      var $68 = HEAP32[$mod + 8 >> 2];
      _d_print_comp($dpi, $68);
    } else if (($2 | 0) == 29) {
      if ((HEAP32[$dpi$s2] & 4 | 0) != 0) {
        break;
      }
      var $76 = HEAPU32[$dpi$s2 + 1];
      var $77 = ($76 | 0) == 0;
      do {
        if (!$77) {
          var $79 = $dpi + 8 | 0;
          var $80 = HEAPU32[$79 >> 2];
          if ($80 >>> 0 >= HEAPU32[$dpi$s2 + 3] >>> 0) {
            break;
          }
          HEAP32[$79 >> 2] = $80 + 1 | 0;
          HEAP8[$76 + $80 | 0] = 42;
          break $_$121;
        }
      } while (0);
      _d_print_append_char($dpi, 42);
    } else if (($2 | 0) == 30) {
      var $90 = HEAPU32[$dpi$s2 + 1];
      var $91 = ($90 | 0) == 0;
      do {
        if (!$91) {
          var $93 = $dpi + 8 | 0;
          var $94 = HEAPU32[$93 >> 2];
          if ($94 >>> 0 >= HEAPU32[$dpi$s2 + 3] >>> 0) {
            break;
          }
          HEAP32[$93 >> 2] = $94 + 1 | 0;
          HEAP8[$90 + $94 | 0] = 38;
          break $_$121;
        }
      } while (0);
      _d_print_append_char($dpi, 38);
    } else if (($2 | 0) == 31) {
      var $104 = HEAPU32[$dpi$s2 + 1];
      var $105 = ($104 | 0) == 0;
      do {
        if (!$105) {
          var $107$s2 = ($dpi + 8 | 0) >> 2;
          var $108 = HEAPU32[$107$s2];
          if (($108 + 8 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
            break;
          }
          var $115 = $104 + $108 | 0;
          var $st$4$0 = $115 | 0;
          tempBigInt = 1886220131;
          HEAP8[$st$4$0] = tempBigInt & 255;
          tempBigInt >>= 8;
          HEAP8[$st$4$0 + 1] = tempBigInt & 255;
          tempBigInt >>= 8;
          HEAP8[$st$4$0 + 2] = tempBigInt & 255;
          tempBigInt >>= 8;
          HEAP8[$st$4$0 + 3] = tempBigInt & 255;
          var $st$4$1 = $115 + 4 | 0;
          tempBigInt = 544761196;
          HEAP8[$st$4$1] = tempBigInt & 255;
          tempBigInt >>= 8;
          HEAP8[$st$4$1 + 1] = tempBigInt & 255;
          tempBigInt >>= 8;
          HEAP8[$st$4$1 + 2] = tempBigInt & 255;
          tempBigInt >>= 8;
          HEAP8[$st$4$1 + 3] = tempBigInt & 255;
          var $117 = HEAP32[$107$s2] + 8 | 0;
          HEAP32[$107$s2] = $117;
          break $_$121;
        }
      } while (0);
      _d_print_append_buffer($dpi, STRING_TABLE.__str150 | 0, 8);
    } else if (($2 | 0) == 32) {
      var $121 = HEAPU32[$dpi$s2 + 1];
      var $122 = ($121 | 0) == 0;
      do {
        if (!$122) {
          var $124$s2 = ($dpi + 8 | 0) >> 2;
          var $125 = HEAPU32[$124$s2];
          if (($125 + 10 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
            break;
          }
          var $131 = $121 + $125 | 0;
          for (var $$src = STRING_TABLE.__str151 | 0, $$dest = $131, $$stop = $$src + 10; $$src < $$stop; $$src++, $$dest++) {
            HEAP8[$$dest] = HEAP8[$$src];
          }
          var $133 = HEAP32[$124$s2] + 10 | 0;
          HEAP32[$124$s2] = $133;
          break $_$121;
        }
      } while (0);
      _d_print_append_buffer($dpi, STRING_TABLE.__str151 | 0, 10);
    } else if (($2 | 0) == 37) {
      var $136 = $dpi + 4 | 0;
      var $137 = HEAPU32[$136 >> 2];
      var $138 = ($137 | 0) == 0;
      do {
        if (!$138) {
          var $140 = $dpi + 8 | 0;
          var $141 = HEAPU32[$140 >> 2];
          if (($141 | 0) != 0) {
            if (HEAP8[$137 + ($141 - 1) | 0] << 24 >> 24 == 40) {
              __label__ = 42;
              break;
            }
          }
          if ($141 >>> 0 >= HEAPU32[$dpi$s2 + 3] >>> 0) {
            __label__ = 41;
            break;
          }
          HEAP32[$140 >> 2] = $141 + 1 | 0;
          HEAP8[$137 + $141 | 0] = 32;
          __label__ = 42;
          break;
        }
        __label__ = 41;
      } while (0);
      if (__label__ == 41) {
        _d_print_append_char($dpi, 32);
      }
      var $156 = HEAP32[$mod + 4 >> 2];
      _d_print_comp($dpi, $156);
      var $157 = HEAPU32[$136 >> 2];
      var $158 = ($157 | 0) == 0;
      do {
        if (!$158) {
          var $160$s2 = ($dpi + 8 | 0) >> 2;
          var $161 = HEAPU32[$160$s2];
          if (($161 + 3 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
            break;
          }
          var $167 = $157 + $161 | 0;
          HEAP8[$167] = HEAP8[STRING_TABLE.__str135 | 0];
          HEAP8[$167 + 1] = HEAP8[(STRING_TABLE.__str135 | 0) + 1];
          HEAP8[$167 + 2] = HEAP8[(STRING_TABLE.__str135 | 0) + 2];
          var $169 = HEAP32[$160$s2] + 3 | 0;
          HEAP32[$160$s2] = $169;
          break $_$121;
        }
      } while (0);
      _d_print_append_buffer($dpi, STRING_TABLE.__str135 | 0, 3);
    } else if (($2 | 0) == 3) {
      var $174 = HEAP32[$mod + 4 >> 2];
      _d_print_comp($dpi, $174);
    } else {
      _d_print_comp($dpi, $mod);
    }
  } while (0);
  return;
  return;
}

_d_print_mod["X"] = 1;

function _d_make_empty($di) {
  var $1 = $di + 20 | 0;
  var $2 = HEAP32[$1 >> 2];
  if (($2 | 0) < (HEAP32[$di + 24 >> 2] | 0)) {
    var $9 = HEAP32[$di + 16 >> 2] + $2 * 12 | 0;
    var $10 = $2 + 1 | 0;
    HEAP32[$1 >> 2] = $10;
    var $_0 = $9;
  } else {
    var $_0 = 0;
  }
  var $_0;
  return $_0;
  return null;
}

function _d_print_function_type($dpi, $dc, $mods) {
  var $63$s2;
  var $_pre_phi3$s2;
  var $p_0$s2;
  var $dpi$s2 = $dpi >> 2;
  var __label__;
  var $p_0 = $mods, $p_0$s2 = $p_0 >> 2;
  var $saw_mod_0 = 0;
  $_$2 : while (1) {
    var $saw_mod_0;
    var $p_0;
    var $2 = ($p_0 | 0) == 0;
    do {
      if (!$2) {
        if ((HEAP32[$p_0$s2 + 2] | 0) != 0) {
          break;
        }
        var $11 = HEAP32[HEAP32[$p_0$s2 + 1] >> 2];
        if (($11 | 0) == 29 || ($11 | 0) == 30) {
          __label__ = 9;
          break $_$2;
        } else if (($11 | 0) == 22 || ($11 | 0) == 23 || ($11 | 0) == 24 || ($11 | 0) == 28 || ($11 | 0) == 31 || ($11 | 0) == 32 || ($11 | 0) == 37) {
          var $31 = HEAP32[$dpi$s2 + 1];
          __label__ = 12;
          break $_$2;
        } else {
          var $p_0 = HEAP32[$p_0$s2], $p_0$s2 = $p_0 >> 2;
          var $saw_mod_0 = 1;
          continue $_$2;
        }
      }
    } while (0);
    if ((HEAP32[$dc + 4 >> 2] | 0) != 0 & ($saw_mod_0 | 0) == 0) {
      __label__ = 9;
      break;
    }
    var $62 = 0;
    var $_pre_phi3 = $dpi + 4 | 0, $_pre_phi3$s2 = $_pre_phi3 >> 2;
    __label__ = 22;
    break;
  }
  do {
    if (__label__ == 9) {
      var $21 = HEAP32[$dpi$s2 + 1];
      if (($21 | 0) == 0) {
        __label__ = 17;
        break;
      }
      var $25 = HEAP32[$dpi$s2 + 2];
      if (($25 | 0) == 0) {
        var $33 = $21;
        __label__ = 13;
        break;
      }
      var $30 = HEAP8[$21 + ($25 - 1) | 0];
      if ($30 << 24 >> 24 == 40 || $30 << 24 >> 24 == 42) {
        __label__ = 18;
        break;
      }
      var $31 = $21;
      __label__ = 12;
      break;
    }
  } while (0);
  do {
    if (__label__ == 12) {
      var $31;
      if (($31 | 0) == 0) {
        __label__ = 17;
        break;
      }
      var $33 = $31;
      __label__ = 13;
      break;
    }
  } while (0);
  do {
    if (__label__ == 13) {
      var $33;
      var $34 = $dpi + 8 | 0;
      var $35 = HEAPU32[$34 >> 2];
      if (($35 | 0) != 0) {
        if (HEAP8[$33 + ($35 - 1) | 0] << 24 >> 24 == 32) {
          __label__ = 18;
          break;
        }
      }
      if ($35 >>> 0 >= HEAPU32[$dpi$s2 + 3] >>> 0) {
        __label__ = 17;
        break;
      }
      HEAP32[$34 >> 2] = $35 + 1 | 0;
      HEAP8[$33 + $35 | 0] = 32;
      __label__ = 18;
      break;
    }
  } while (0);
  do {
    if (__label__ == 17) {
      _d_print_append_char($dpi, 32);
      __label__ = 18;
      break;
    }
  } while (0);
  $_$26 : do {
    if (__label__ == 18) {
      var $48 = $dpi + 4 | 0;
      var $49 = HEAPU32[$48 >> 2];
      var $50 = ($49 | 0) == 0;
      do {
        if (!$50) {
          var $52 = $dpi + 8 | 0;
          var $53 = HEAPU32[$52 >> 2];
          if ($53 >>> 0 >= HEAPU32[$dpi$s2 + 3] >>> 0) {
            break;
          }
          HEAP32[$52 >> 2] = $53 + 1 | 0;
          HEAP8[$49 + $53 | 0] = 40;
          var $62 = 1;
          var $_pre_phi3 = $48, $_pre_phi3$s2 = $_pre_phi3 >> 2;
          break $_$26;
        }
      } while (0);
      _d_print_append_char($dpi, 40);
      var $62 = 1;
      var $_pre_phi3 = $48, $_pre_phi3$s2 = $_pre_phi3 >> 2;
    }
  } while (0);
  var $_pre_phi3;
  var $62;
  var $63$s2 = ($dpi + 20 | 0) >> 2;
  var $64 = HEAP32[$63$s2];
  HEAP32[$63$s2] = 0;
  _d_print_mod_list($dpi, $mods, 0);
  $_$33 : do {
    if ($62) {
      var $66 = HEAPU32[$_pre_phi3$s2];
      var $67 = ($66 | 0) == 0;
      do {
        if (!$67) {
          var $69 = $dpi + 8 | 0;
          var $70 = HEAPU32[$69 >> 2];
          if ($70 >>> 0 >= HEAPU32[$dpi$s2 + 3] >>> 0) {
            break;
          }
          HEAP32[$69 >> 2] = $70 + 1 | 0;
          HEAP8[$66 + $70 | 0] = 41;
          break $_$33;
        }
      } while (0);
      _d_print_append_char($dpi, 41);
    }
  } while (0);
  var $78 = HEAPU32[$_pre_phi3$s2];
  var $79 = ($78 | 0) == 0;
  do {
    if (!$79) {
      var $81 = $dpi + 8 | 0;
      var $82 = HEAPU32[$81 >> 2];
      if ($82 >>> 0 >= HEAPU32[$dpi$s2 + 3] >>> 0) {
        __label__ = 30;
        break;
      }
      HEAP32[$81 >> 2] = $82 + 1 | 0;
      HEAP8[$78 + $82 | 0] = 40;
      __label__ = 31;
      break;
    }
    __label__ = 30;
  } while (0);
  if (__label__ == 30) {
    _d_print_append_char($dpi, 40);
  }
  var $93 = HEAP32[$dc + 8 >> 2];
  if (($93 | 0) != 0) {
    _d_print_comp($dpi, $93);
  }
  var $97 = HEAPU32[$_pre_phi3$s2];
  var $98 = ($97 | 0) == 0;
  do {
    if (!$98) {
      var $100 = $dpi + 8 | 0;
      var $101 = HEAPU32[$100 >> 2];
      if ($101 >>> 0 >= HEAPU32[$dpi$s2 + 3] >>> 0) {
        __label__ = 36;
        break;
      }
      HEAP32[$100 >> 2] = $101 + 1 | 0;
      HEAP8[$97 + $101 | 0] = 41;
      __label__ = 37;
      break;
    }
    __label__ = 36;
  } while (0);
  if (__label__ == 36) {
    _d_print_append_char($dpi, 41);
  }
  _d_print_mod_list($dpi, $mods, 1);
  HEAP32[$63$s2] = $64;
  return;
  return;
}

_d_print_function_type["X"] = 1;

function _d_print_array_type($dpi, $dc, $mods) {
  var $22$s2;
  var $p_0$s2;
  var $dpi$s2 = $dpi >> 2;
  var __label__;
  var $1 = ($mods | 0) == 0;
  do {
    if (!$1) {
      var $p_0 = $mods, $p_0$s2 = $p_0 >> 2;
      $_$57 : while (1) {
        var $p_0;
        if (($p_0 | 0) == 0) {
          var $need_space_02 = 1;
          __label__ = 14;
          break;
        }
        if ((HEAP32[$p_0$s2 + 2] | 0) == 0) {
          var $15 = (HEAP32[HEAP32[$p_0$s2 + 1] >> 2] | 0) == 36;
          var $_ = $15 & 1 ^ 1;
          if ($15) {
            var $need_space_02 = $_;
            __label__ = 14;
            break;
          }
          var $18 = $dpi + 4 | 0;
          var $19 = HEAPU32[$18 >> 2];
          var $20 = ($19 | 0) == 0;
          do {
            if (!$20) {
              var $22$s2 = ($dpi + 8 | 0) >> 2;
              var $23 = HEAPU32[$22$s2];
              if (($23 + 2 | 0) >>> 0 > HEAPU32[$dpi$s2 + 3] >>> 0) {
                __label__ = 9;
                break;
              }
              var $29 = $19 + $23 | 0;
              tempBigInt = 10272;
              HEAP8[$29] = tempBigInt & 255;
              tempBigInt >>= 8;
              HEAP8[$29 + 1] = tempBigInt & 255;
              var $31 = HEAP32[$22$s2] + 2 | 0;
              HEAP32[$22$s2] = $31;
              _d_print_mod_list($dpi, $mods, 0);
              __label__ = 10;
              break;
            }
            __label__ = 9;
          } while (0);
          if (__label__ == 9) {
            _d_print_append_buffer($dpi, STRING_TABLE.__str140 | 0, 2);
            _d_print_mod_list($dpi, $mods, 0);
          }
          var $34 = HEAPU32[$18 >> 2];
          var $35 = ($34 | 0) == 0;
          do {
            if (!$35) {
              var $37 = $dpi + 8 | 0;
              var $38 = HEAPU32[$37 >> 2];
              if ($38 >>> 0 >= HEAPU32[$dpi$s2 + 3] >>> 0) {
                break;
              }
              HEAP32[$37 >> 2] = $38 + 1 | 0;
              HEAP8[$34 + $38 | 0] = 41;
              var $need_space_1 = $_;
              __label__ = 15;
              break $_$57;
            }
          } while (0);
          _d_print_append_char($dpi, 41);
          var $need_space_1 = $_;
          __label__ = 15;
          break;
        }
        var $p_0 = HEAP32[$p_0$s2], $p_0$s2 = $p_0 >> 2;
      }
      if (__label__ == 14) {
        var $need_space_02;
        _d_print_mod_list($dpi, $mods, 0);
        var $need_space_1 = $need_space_02;
      }
      var $need_space_1;
      if (($need_space_1 | 0) != 0) {
        __label__ = 17;
        break;
      }
      var $_pre_phi = $dpi + 4 | 0;
      __label__ = 21;
      break;
    }
    __label__ = 17;
  } while (0);
  $_$78 : do {
    if (__label__ == 17) {
      var $48 = $dpi + 4 | 0;
      var $49 = HEAPU32[$48 >> 2];
      var $50 = ($49 | 0) == 0;
      do {
        if (!$50) {
          var $52 = $dpi + 8 | 0;
          var $53 = HEAPU32[$52 >> 2];
          if ($53 >>> 0 >= HEAPU32[$dpi$s2 + 3] >>> 0) {
            break;
          }
          HEAP32[$52 >> 2] = $53 + 1 | 0;
          HEAP8[$49 + $53 | 0] = 32;
          var $_pre_phi = $48;
          break $_$78;
        }
      } while (0);
      _d_print_append_char($dpi, 32);
      var $_pre_phi = $48;
    }
  } while (0);
  var $_pre_phi;
  var $62 = HEAPU32[$_pre_phi >> 2];
  var $63 = ($62 | 0) == 0;
  do {
    if (!$63) {
      var $65 = $dpi + 8 | 0;
      var $66 = HEAPU32[$65 >> 2];
      if ($66 >>> 0 >= HEAPU32[$dpi$s2 + 3] >>> 0) {
        __label__ = 24;
        break;
      }
      HEAP32[$65 >> 2] = $66 + 1 | 0;
      HEAP8[$62 + $66 | 0] = 91;
      __label__ = 25;
      break;
    }
    __label__ = 24;
  } while (0);
  if (__label__ == 24) {
    _d_print_append_char($dpi, 91);
  }
  var $77 = HEAP32[$dc + 4 >> 2];
  if (($77 | 0) != 0) {
    _d_print_comp($dpi, $77);
  }
  var $81 = HEAPU32[$_pre_phi >> 2];
  var $82 = ($81 | 0) == 0;
  do {
    if (!$82) {
      var $84 = $dpi + 8 | 0;
      var $85 = HEAPU32[$84 >> 2];
      if ($85 >>> 0 >= HEAPU32[$dpi$s2 + 3] >>> 0) {
        __label__ = 30;
        break;
      }
      HEAP32[$84 >> 2] = $85 + 1 | 0;
      HEAP8[$81 + $85 | 0] = 93;
      __label__ = 31;
      break;
    }
    __label__ = 30;
  } while (0);
  if (__label__ == 30) {
    _d_print_append_char($dpi, 93);
  }
  return;
  return;
}

_d_print_array_type["X"] = 1;

function _d_print_cast($dpi, $dc) {
  var $56$s2;
  var $24$s2;
  var $20$s2;
  var $11$s2;
  var $9$s2;
  var $2$s2;
  var __stackBase__ = STACKTOP;
  STACKTOP += 8;
  var __label__;
  var $dpt = __stackBase__;
  var $2$s2 = ($dc + 4 | 0) >> 2;
  var $3 = HEAP32[$2$s2];
  if ((HEAP32[$3 >> 2] | 0) == 4) {
    var $9$s2 = ($dpi + 20 | 0) >> 2;
    var $10 = HEAP32[$9$s2];
    HEAP32[$9$s2] = 0;
    var $11$s2 = ($dpi + 16 | 0) >> 2;
    var $12 = HEAP32[$11$s2];
    var $13 = $dpt | 0;
    HEAP32[$13 >> 2] = $12;
    HEAP32[$11$s2] = $dpt;
    var $14 = HEAP32[$2$s2];
    HEAP32[$dpt + 4 >> 2] = $14;
    var $18 = HEAP32[$14 + 4 >> 2];
    _d_print_comp($dpi, $18);
    var $19 = HEAP32[$13 >> 2];
    HEAP32[$11$s2] = $19;
    var $20$s2 = ($dpi + 4 | 0) >> 2;
    var $21 = HEAPU32[$20$s2];
    var $22 = ($21 | 0) == 0;
    do {
      if (!$22) {
        var $24$s2 = ($dpi + 8 | 0) >> 2;
        var $25 = HEAPU32[$24$s2];
        var $26 = ($25 | 0) == 0;
        do {
          if (!$26) {
            if (HEAP8[$21 + ($25 - 1) | 0] << 24 >> 24 != 60) {
              break;
            }
            if ($25 >>> 0 < HEAPU32[$dpi + 12 >> 2] >>> 0) {
              HEAP32[$24$s2] = $25 + 1 | 0;
              HEAP8[$21 + $25 | 0] = 32;
            } else {
              _d_print_append_char($dpi, 32);
            }
          }
        } while (0);
        var $_pr = HEAPU32[$20$s2];
        if (($_pr | 0) == 0) {
          __label__ = 12;
          break;
        }
        var $41 = HEAPU32[$24$s2];
        if ($41 >>> 0 >= HEAPU32[$dpi + 12 >> 2] >>> 0) {
          __label__ = 12;
          break;
        }
        HEAP32[$24$s2] = $41 + 1 | 0;
        HEAP8[$_pr + $41 | 0] = 60;
        __label__ = 13;
        break;
      }
      __label__ = 12;
    } while (0);
    if (__label__ == 12) {
      _d_print_append_char($dpi, 60);
    }
    var $52 = HEAP32[HEAP32[$2$s2] + 8 >> 2];
    _d_print_comp($dpi, $52);
    var $53 = HEAPU32[$20$s2];
    var $54 = ($53 | 0) == 0;
    do {
      if (!$54) {
        var $56$s2 = ($dpi + 8 | 0) >> 2;
        var $57 = HEAPU32[$56$s2];
        var $58 = ($57 | 0) == 0;
        do {
          if (!$58) {
            if (HEAP8[$53 + ($57 - 1) | 0] << 24 >> 24 != 62) {
              break;
            }
            if ($57 >>> 0 < HEAPU32[$dpi + 12 >> 2] >>> 0) {
              HEAP32[$56$s2] = $57 + 1 | 0;
              HEAP8[$53 + $57 | 0] = 32;
            } else {
              _d_print_append_char($dpi, 32);
            }
          }
        } while (0);
        var $_pr5 = HEAPU32[$20$s2];
        if (($_pr5 | 0) == 0) {
          __label__ = 22;
          break;
        }
        var $73 = HEAPU32[$56$s2];
        if ($73 >>> 0 >= HEAPU32[$dpi + 12 >> 2] >>> 0) {
          __label__ = 22;
          break;
        }
        HEAP32[$56$s2] = $73 + 1 | 0;
        HEAP8[$_pr5 + $73 | 0] = 62;
        __label__ = 23;
        break;
      }
      __label__ = 22;
    } while (0);
    if (__label__ == 22) {
      _d_print_append_char($dpi, 62);
    }
    HEAP32[$9$s2] = $10;
  } else {
    _d_print_comp($dpi, $3);
  }
  STACKTOP = __stackBase__;
  return;
  return;
}

_d_print_cast["X"] = 1;

function _d_print_expr_op($dpi, $dc) {
  var $9$s2;
  var $3 = (HEAP32[$dc >> 2] | 0) == 40;
  $_$134 : do {
    if ($3) {
      var $6 = HEAPU32[$dpi + 4 >> 2];
      var $7 = ($6 | 0) == 0;
      do {
        if (!$7) {
          var $9$s2 = ($dpi + 8 | 0) >> 2;
          var $10 = HEAPU32[$9$s2];
          var $12 = $dc + 4 | 0;
          var $13 = HEAPU32[$12 >> 2];
          var $15 = HEAPU32[$13 + 8 >> 2];
          if (($15 + $10 | 0) >>> 0 > HEAPU32[$dpi + 12 >> 2] >>> 0) {
            var $31 = $13;
            var $30 = $15;
            break;
          }
          var $21 = $6 + $10 | 0;
          var $23 = HEAP32[$13 + 4 >> 2];
          _memcpy($21, $23, $15, 1);
          var $28 = HEAP32[$9$s2] + HEAP32[HEAP32[$12 >> 2] + 8 >> 2] | 0;
          HEAP32[$9$s2] = $28;
          break $_$134;
        }
        var $_pre = HEAPU32[$dc + 4 >> 2];
        var $31 = $_pre;
        var $30 = HEAP32[$_pre + 8 >> 2];
      } while (0);
      var $30;
      var $31;
      var $33 = HEAP32[$31 + 4 >> 2];
      _d_print_append_buffer($dpi, $33, $30);
    } else {
      _d_print_comp($dpi, $dc);
    }
  } while (0);
  return;
  return;
}

function _d_print_mod_list($dpi, $mods, $suffix) {
  var $59$s2;
  var $45$s2;
  var $3$s2;
  var $1$s2;
  var __label__;
  var $1$s2 = ($dpi + 4 | 0) >> 2;
  var $2 = ($suffix | 0) == 0;
  var $3$s2 = ($dpi + 16 | 0) >> 2;
  $_$144 : do {
    if ($2) {
      var $mods_tr_us = $mods;
      while (1) {
        var $mods_tr_us;
        if (($mods_tr_us | 0) == 0) {
          __label__ = 29;
          break $_$144;
        }
        if ((HEAP32[$1$s2] | 0) == 0) {
          __label__ = 29;
          break $_$144;
        }
        var $6 = $mods_tr_us + 8 | 0;
        var $8 = (HEAP32[$6 >> 2] | 0) == 0;
        do {
          if ($8) {
            var $13 = $mods_tr_us + 4 | 0;
            if ((HEAP32[HEAP32[$13 >> 2] >> 2] - 25 | 0) >>> 0 < 3) {
              break;
            }
            HEAP32[$6 >> 2] = 1;
            var $19 = HEAPU32[$3$s2];
            var $21 = HEAP32[$mods_tr_us + 12 >> 2];
            HEAP32[$3$s2] = $21;
            var $22 = HEAPU32[$13 >> 2];
            var $24 = HEAP32[$22 >> 2];
            if (($24 | 0) == 35) {
              var $mods_tr_lcssa8 = $mods_tr_us;
              var $_lcssa15 = $19;
              var $_lcssa21 = $22;
              __label__ = 14;
              break $_$144;
            } else if (($24 | 0) == 36) {
              var $mods_tr_lcssa9 = $mods_tr_us;
              var $_lcssa16 = $19;
              var $_lcssa22 = $22;
              __label__ = 15;
              break $_$144;
            } else if (($24 | 0) == 2) {
              var $_lcssa17 = $19;
              var $_lcssa20 = $13;
              __label__ = 16;
              break $_$144;
            }
            _d_print_mod($dpi, $22);
            HEAP32[$3$s2] = $19;
          }
        } while (0);
        var $mods_tr_us = HEAP32[$mods_tr_us >> 2];
      }
    } else {
      var $mods_tr = $mods;
      while (1) {
        var $mods_tr;
        if (($mods_tr | 0) == 0) {
          __label__ = 29;
          break $_$144;
        }
        if ((HEAP32[$1$s2] | 0) == 0) {
          __label__ = 29;
          break $_$144;
        }
        var $30 = $mods_tr + 8 | 0;
        if ((HEAP32[$30 >> 2] | 0) == 0) {
          HEAP32[$30 >> 2] = 1;
          var $34 = HEAPU32[$3$s2];
          var $36 = HEAP32[$mods_tr + 12 >> 2];
          HEAP32[$3$s2] = $36;
          var $37 = $mods_tr + 4 | 0;
          var $38 = HEAPU32[$37 >> 2];
          var $40 = HEAP32[$38 >> 2];
          if (($40 | 0) == 35) {
            var $mods_tr_lcssa8 = $mods_tr;
            var $_lcssa15 = $34;
            var $_lcssa21 = $38;
            __label__ = 14;
            break $_$144;
          } else if (($40 | 0) == 36) {
            var $mods_tr_lcssa9 = $mods_tr;
            var $_lcssa16 = $34;
            var $_lcssa22 = $38;
            __label__ = 15;
            break $_$144;
          } else if (($40 | 0) == 2) {
            var $_lcssa17 = $34;
            var $_lcssa20 = $37;
            __label__ = 16;
            break $_$144;
          }
          _d_print_mod($dpi, $38);
          HEAP32[$3$s2] = $34;
        }
        var $mods_tr = HEAP32[$mods_tr >> 2];
      }
    }
  } while (0);
  if (__label__ == 14) {
    var $_lcssa21;
    var $_lcssa15;
    var $mods_tr_lcssa8;
    var $42 = HEAP32[$mods_tr_lcssa8 >> 2];
    _d_print_function_type($dpi, $_lcssa21, $42);
    HEAP32[$3$s2] = $_lcssa15;
  } else if (__label__ == 15) {
    var $_lcssa22;
    var $_lcssa16;
    var $mods_tr_lcssa9;
    var $44 = HEAP32[$mods_tr_lcssa9 >> 2];
    _d_print_array_type($dpi, $_lcssa22, $44);
    HEAP32[$3$s2] = $_lcssa16;
  } else if (__label__ == 16) {
    var $_lcssa20;
    var $_lcssa17;
    var $45$s2 = ($dpi + 20 | 0) >> 2;
    var $46 = HEAP32[$45$s2];
    HEAP32[$45$s2] = 0;
    var $50 = HEAP32[HEAP32[$_lcssa20 >> 2] + 4 >> 2];
    _d_print_comp($dpi, $50);
    HEAP32[$45$s2] = $46;
    var $54 = (HEAP32[$dpi >> 2] & 4 | 0) == 0;
    var $55 = HEAPU32[$1$s2];
    var $56 = ($55 | 0) != 0;
    $_$166 : do {
      if ($54) {
        do {
          if ($56) {
            var $59$s2 = ($dpi + 8 | 0) >> 2;
            var $60 = HEAPU32[$59$s2];
            if (($60 + 2 | 0) >>> 0 > HEAPU32[$dpi + 12 >> 2] >>> 0) {
              break;
            }
            var $67 = $55 + $60 | 0;
            tempBigInt = 14906;
            HEAP8[$67] = tempBigInt & 255;
            tempBigInt >>= 8;
            HEAP8[$67 + 1] = tempBigInt & 255;
            var $69 = HEAP32[$59$s2] + 2 | 0;
            HEAP32[$59$s2] = $69;
            break $_$166;
          }
        } while (0);
        _d_print_append_buffer($dpi, STRING_TABLE.__str120 | 0, 2);
      } else {
        do {
          if ($56) {
            var $73 = $dpi + 8 | 0;
            var $74 = HEAPU32[$73 >> 2];
            if ($74 >>> 0 >= HEAPU32[$dpi + 12 >> 2] >>> 0) {
              break;
            }
            HEAP32[$73 >> 2] = $74 + 1 | 0;
            HEAP8[$55 + $74 | 0] = 46;
            break $_$166;
          }
        } while (0);
        _d_print_append_char($dpi, 46);
      }
    } while (0);
    var $dc_04 = HEAPU32[HEAP32[$_lcssa20 >> 2] + 8 >> 2];
    var $switch36 = (HEAP32[$dc_04 >> 2] - 25 | 0) >>> 0 < 3;
    $_$178 : do {
      if ($switch36) {
        var $dc_07 = $dc_04;
        while (1) {
          var $dc_07;
          var $dc_0 = HEAPU32[$dc_07 + 4 >> 2];
          if ((HEAP32[$dc_0 >> 2] - 25 | 0) >>> 0 >= 3) {
            var $dc_0_lcssa = $dc_0;
            break $_$178;
          }
          var $dc_07 = $dc_0;
        }
      } else {
        var $dc_0_lcssa = $dc_04;
      }
    } while (0);
    var $dc_0_lcssa;
    _d_print_comp($dpi, $dc_0_lcssa);
    HEAP32[$3$s2] = $_lcssa17;
  }
  return;
  return;
}

_d_print_mod_list["X"] = 1;

function _d_print_resize($dpi, $add) {
  var $1$s2;
  var $1$s2 = ($dpi + 4 | 0) >> 2;
  var $2 = HEAP32[$1$s2];
  var $3 = ($2 | 0) == 0;
  $_$184 : do {
    if (!$3) {
      var $7 = HEAP32[$dpi + 8 >> 2] + $add | 0;
      var $8 = $dpi + 12 | 0;
      var $11 = HEAP32[$8 >> 2];
      var $10 = $2;
      while (1) {
        var $10;
        var $11;
        if ($7 >>> 0 <= $11 >>> 0) {
          break $_$184;
        }
        var $14 = $11 << 1;
        var $15 = _realloc($10, $14);
        if (($15 | 0) == 0) {
          break;
        }
        HEAP32[$1$s2] = $15;
        HEAP32[$8 >> 2] = $14;
        var $11 = $14;
        var $10 = $15;
      }
      var $18 = HEAP32[$1$s2];
      _free($18);
      HEAP32[$1$s2] = 0;
      HEAP32[$dpi + 24 >> 2] = 1;
    }
  } while (0);
  return;
  return;
}

function _d_make_sub($di, $name, $len) {
  var $1$s2;
  var $1 = _d_make_empty($di), $1$s2 = $1 >> 2;
  if (($1 | 0) != 0) {
    HEAP32[$1$s2] = 21;
    HEAP32[$1$s2 + 1] = $name;
    HEAP32[$1$s2 + 2] = $len;
  }
  return $1;
  return null;
}

function _d_template_arg($di) {
  var $1$s2;
  var $1$s2 = ($di + 12 | 0) >> 2;
  var $2 = HEAP32[$1$s2];
  var $4 = HEAP8[$2] << 24 >> 24;
  if (($4 | 0) == 88) {
    var $6 = $2 + 1 | 0;
    HEAP32[$1$s2] = $6;
    var $7 = _d_expression($di);
    var $8 = HEAP32[$1$s2];
    var $9 = $8 + 1 | 0;
    HEAP32[$1$s2] = $9;
    var $_ = HEAP8[$8] << 24 >> 24 == 69 ? $7 : 0;
    var $_0 = $_;
  } else if (($4 | 0) == 76) {
    var $13 = _d_expr_primary($di);
    var $_0 = $13;
  } else {
    var $15 = _cplus_demangle_type($di);
    var $_0 = $15;
  }
  var $_0;
  return $_0;
  return null;
}

function _d_number($di) {
  var $1$s2;
  var $1$s2 = ($di + 12 | 0) >> 2;
  var $2 = HEAP32[$1$s2];
  var $3 = HEAP8[$2];
  if ($3 << 24 >> 24 == 110) {
    var $6 = $2 + 1 | 0;
    HEAP32[$1$s2] = $6;
    var $negative_0 = 1;
    var $peek_0 = HEAP8[$6];
    var $9 = $6;
  } else {
    var $negative_0 = 0;
    var $peek_0 = $3;
    var $9 = $2;
  }
  var $9;
  var $peek_0;
  var $negative_0;
  var $10 = ($peek_0 - 48 & 255 & 255) < 10;
  $_$118 : do {
    if ($10) {
      var $peek_12 = $peek_0;
      var $ret_03 = 0;
      var $13 = $9;
      while (1) {
        var $13;
        var $ret_03;
        var $peek_12;
        var $17 = ($peek_12 << 24 >> 24) - 48 + $ret_03 * 10 | 0;
        var $18 = $13 + 1 | 0;
        HEAP32[$1$s2] = $18;
        var $19 = HEAPU8[$18];
        if (($19 - 48 & 255 & 255) >= 10) {
          var $ret_0_lcssa = $17;
          break $_$118;
        }
        var $peek_12 = $19;
        var $ret_03 = $17;
        var $13 = $18;
      }
    } else {
      var $ret_0_lcssa = 0;
    }
  } while (0);
  var $ret_0_lcssa;
  var $ret_0_ = ($negative_0 | 0) == 0 ? $ret_0_lcssa : -$ret_0_lcssa | 0;
  return $ret_0_;
  return null;
}

function _d_expression($di) {
  var $1$s2;
  var __label__;
  var $1$s2 = ($di + 12 | 0) >> 2;
  var $2 = HEAP32[$1$s2];
  var $3 = HEAP8[$2];
  do {
    if ($3 << 24 >> 24 == 76) {
      var $5 = _d_expr_primary($di);
      var $_0 = $5;
      __label__ = 21;
      break;
    } else if ($3 << 24 >> 24 == 84) {
      var $7 = _d_template_param($di);
      var $_0 = $7;
      __label__ = 21;
      break;
    } else if ($3 << 24 >> 24 == 115) {
      if (HEAP8[$2 + 1 | 0] << 24 >> 24 != 114) {
        __label__ = 8;
        break;
      }
      var $13 = $2 + 2 | 0;
      HEAP32[$1$s2] = $13;
      var $14 = _cplus_demangle_type($di);
      var $15 = _d_unqualified_name($di);
      if (HEAP8[HEAP32[$1$s2]] << 24 >> 24 == 73) {
        var $22 = _d_template_args($di);
        var $23 = _d_make_comp($di, 4, $15, $22);
        var $24 = _d_make_comp($di, 1, $14, $23);
        var $_0 = $24;
        __label__ = 21;
        break;
      }
      var $20 = _d_make_comp($di, 1, $14, $15);
      var $_0 = $20;
      __label__ = 21;
      break;
    } else {
      __label__ = 8;
    }
  } while (0);
  $_$10 : do {
    if (__label__ == 8) {
      var $26 = _d_operator_name($di);
      if (($26 | 0) == 0) {
        var $_0 = 0;
        break;
      }
      var $29 = $26 | 0;
      var $30 = HEAP32[$29 >> 2];
      var $31 = ($30 | 0) == 40;
      do {
        if ($31) {
          var $34 = $26 + 4 | 0;
          var $38 = $di + 48 | 0;
          var $41 = HEAP32[HEAP32[$34 >> 2] + 8 >> 2] - 2 + HEAP32[$38 >> 2] | 0;
          HEAP32[$38 >> 2] = $41;
          var $_pr = HEAP32[$29 >> 2];
          if (($_pr | 0) != 40) {
            var $52 = $_pr;
            __label__ = 13;
            break;
          }
          var $44 = HEAP32[$34 >> 2];
          var $46 = HEAP32[$44 >> 2];
          var $47 = _strcmp($46, STRING_TABLE.__str90 | 0);
          if (($47 | 0) != 0) {
            var $53 = $44;
            __label__ = 15;
            break;
          }
          var $50 = _cplus_demangle_type($di);
          var $51 = _d_make_comp($di, 43, $26, $50);
          var $_0 = $51;
          break $_$10;
        }
        var $52 = $30;
        __label__ = 13;
      } while (0);
      do {
        if (__label__ == 13) {
          var $52;
          if (($52 | 0) == 40) {
            var $53 = HEAP32[$26 + 4 >> 2];
            __label__ = 15;
            break;
          } else if (($52 | 0) == 41) {
            var $args_0_in = $26 + 4 | 0;
            __label__ = 17;
            break;
          } else if (($52 | 0) == 42) {
            __label__ = 18;
            break;
          } else {
            var $_0 = 0;
            break $_$10;
          }
        }
      } while (0);
      do {
        if (__label__ == 15) {
          var $53;
          var $args_0_in = $53 + 12 | 0;
          __label__ = 17;
          break;
        }
      } while (0);
      do {
        if (__label__ == 17) {
          var $args_0_in;
          var $args_0 = HEAP32[$args_0_in >> 2];
          if (($args_0 | 0) == 1) {
            break;
          } else if (($args_0 | 0) == 2) {
            var $62 = _d_expression($di);
            var $63 = _d_expression($di);
            var $64 = _d_make_comp($di, 45, $62, $63);
            var $65 = _d_make_comp($di, 44, $26, $64);
            return $65;
          } else if (($args_0 | 0) == 3) {
            var $67 = _d_expression($di);
            var $68 = _d_expression($di);
            var $69 = _d_expression($di);
            var $70 = _d_make_comp($di, 48, $68, $69);
            var $71 = _d_make_comp($di, 47, $67, $70);
            var $72 = _d_make_comp($di, 46, $26, $71);
            return $72;
          } else {
            var $_0 = 0;
            break $_$10;
          }
        }
      } while (0);
      var $59 = _d_expression($di);
      var $60 = _d_make_comp($di, 43, $26, $59);
      return $60;
    }
  } while (0);
  var $_0;
  return $_0;
  return null;
}

_d_expression["X"] = 1;

function _d_expr_primary($di) {
  var $1$s2;
  var $1$s2 = ($di + 12 | 0) >> 2;
  var $2 = HEAP32[$1$s2];
  var $3 = $2 + 1 | 0;
  HEAP32[$1$s2] = $3;
  var $5 = HEAP8[$2] << 24 >> 24 == 76;
  $_$32 : do {
    if ($5) {
      if (HEAP8[$3] << 24 >> 24 == 95) {
        var $10 = _cplus_demangle_mangled_name($di, 0);
        var $ret_0 = $10;
      } else {
        var $12 = _cplus_demangle_type($di);
        if (($12 | 0) == 0) {
          var $_0 = 0;
          break;
        }
        var $17 = (HEAP32[$12 >> 2] | 0) == 33;
        do {
          if ($17) {
            var $21 = HEAP32[$12 + 4 >> 2];
            if ((HEAP32[$21 + 16 >> 2] | 0) == 0) {
              break;
            }
            var $28 = $di + 48 | 0;
            var $30 = HEAP32[$28 >> 2] - HEAP32[$21 + 4 >> 2] | 0;
            HEAP32[$28 >> 2] = $30;
          }
        } while (0);
        var $32 = HEAP32[$1$s2];
        if (HEAP8[$32] << 24 >> 24 == 110) {
          var $36 = $32 + 1 | 0;
          HEAP32[$1$s2] = $36;
          var $t_0 = 50;
          var $38 = $36;
        } else {
          var $t_0 = 49;
          var $38 = $32;
        }
        var $38;
        var $t_0;
        var $40 = $38;
        while (1) {
          var $40;
          var $41 = HEAP8[$40];
          if ($41 << 24 >> 24 == 69) {
            break;
          } else if ($41 << 24 >> 24 == 0) {
            var $_0 = 0;
            break $_$32;
          }
          var $43 = $40 + 1 | 0;
          HEAP32[$1$s2] = $43;
          var $40 = $43;
        }
        var $48 = _d_make_name($di, $38, $40 - $38 | 0);
        var $49 = _d_make_comp($di, $t_0, $12, $48);
        var $ret_0 = $49;
      }
      var $ret_0;
      var $51 = HEAP32[$1$s2];
      var $52 = $51 + 1 | 0;
      HEAP32[$1$s2] = $52;
      var $ret_0_ = HEAP8[$51] << 24 >> 24 == 69 ? $ret_0 : 0;
      var $_0 = $ret_0_;
    } else {
      var $_0 = 0;
    }
  } while (0);
  var $_0;
  return $_0;
  return null;
}

_d_expr_primary["X"] = 1;

function _d_make_name($di, $s, $len) {
  var $1 = _d_make_empty($di);
  var $2 = _cplus_demangle_fill_name($1, $s, $len);
  var $_ = ($2 | 0) == 0 ? 0 : $1;
  return $_;
  return null;
}

function _d_unqualified_name($di) {
  var $1 = $di + 12 | 0;
  var $2 = HEAPU32[$1 >> 2];
  var $3 = HEAPU8[$2];
  var $4 = ($3 - 48 & 255 & 255) < 10;
  do {
    if ($4) {
      var $6 = _d_source_name($di);
      var $_0 = $6;
    } else {
      if (($3 - 97 & 255 & 255) < 26) {
        var $10 = _d_operator_name($di);
        if (($10 | 0) == 0) {
          var $_0 = 0;
          break;
        }
        if ((HEAP32[$10 >> 2] | 0) != 40) {
          var $_0 = $10;
          break;
        }
        var $22 = $di + 48 | 0;
        var $25 = HEAP32[HEAP32[$10 + 4 >> 2] + 8 >> 2] + HEAP32[$22 >> 2] + 7 | 0;
        HEAP32[$22 >> 2] = $25;
        var $_0 = $10;
      } else {
        if ($3 << 24 >> 24 == 67 || $3 << 24 >> 24 == 68) {
          var $28 = _d_ctor_dtor_name($di);
          var $_0 = $28;
        } else if ($3 << 24 >> 24 == 76) {
          HEAP32[$1 >> 2] = $2 + 1 | 0;
          var $31 = _d_source_name($di);
          if (($31 | 0) == 0) {
            var $_0 = 0;
            break;
          }
          var $34 = _d_discriminator($di);
          var $_ = ($34 | 0) == 0 ? 0 : $31;
          var $_0 = $_;
        } else {
          var $_0 = 0;
          break;
        }
      }
    }
  } while (0);
  var $_0;
  return $_0;
  return null;
}

function _d_operator_name($di) {
  var $1$s2;
  var __label__;
  var $1$s2 = ($di + 12 | 0) >> 2;
  var $2 = HEAP32[$1$s2];
  var $3 = $2 + 1 | 0;
  HEAP32[$1$s2] = $3;
  var $4 = HEAPU8[$2];
  var $5 = $2 + 2 | 0;
  HEAP32[$1$s2] = $5;
  var $6 = HEAPU8[$3];
  do {
    if ($4 << 24 >> 24 == 118) {
      if (($6 - 48 & 255 & 255) >= 10) {
        var $high_0 = 49;
        var $low_0 = 0;
        __label__ = 6;
        break;
      }
      var $11 = ($6 << 24 >> 24) - 48 | 0;
      var $12 = _d_source_name($di);
      var $13 = _d_make_extended_operator($di, $11, $12);
      var $_0 = $13;
      __label__ = 14;
      break;
    } else if ($4 << 24 >> 24 == 99) {
      if ($6 << 24 >> 24 != 118) {
        var $high_0 = 49;
        var $low_0 = 0;
        __label__ = 6;
        break;
      }
      var $16 = _cplus_demangle_type($di);
      var $17 = _d_make_comp($di, 42, $16, 0);
      var $_0 = $17;
      __label__ = 14;
      break;
    } else {
      var $high_0 = 49;
      var $low_0 = 0;
      __label__ = 6;
    }
  } while (0);
  $_$72 : do {
    if (__label__ == 6) {
      while (1) {
        var $low_0;
        var $high_0;
        var $20 = ($high_0 - $low_0) / 2 + $low_0 | 0;
        var $21 = ($20 << 4) + _cplus_demangle_operators | 0;
        var $23 = HEAP32[$21 >> 2];
        var $24 = HEAP8[$23];
        var $25 = $4 << 24 >> 24 == $24 << 24 >> 24;
        if ($25) {
          if ($6 << 24 >> 24 == HEAP8[$23 + 1 | 0] << 24 >> 24) {
            break;
          }
        }
        var $33 = $4 << 24 >> 24 < $24 << 24 >> 24;
        do {
          if ($33) {
            var $high_1 = $20;
            var $low_1 = $low_0;
          } else {
            if ($25) {
              if ($6 << 24 >> 24 < HEAP8[$23 + 1 | 0] << 24 >> 24) {
                var $high_1 = $20;
                var $low_1 = $low_0;
                break;
              }
            }
            var $high_1 = $high_0;
            var $low_1 = $20 + 1 | 0;
          }
        } while (0);
        var $low_1;
        var $high_1;
        if (($low_1 | 0) == ($high_1 | 0)) {
          var $_0 = 0;
          break $_$72;
        }
        var $high_0 = $high_1;
        var $low_0 = $low_1;
      }
      var $31 = _d_make_operator($di, $21);
      var $_0 = $31;
    }
  } while (0);
  var $_0;
  return $_0;
  return null;
}

_d_operator_name["X"] = 1;

function _d_make_extended_operator($di, $args, $name) {
  var $1 = _d_make_empty($di);
  var $2 = _cplus_demangle_fill_extended_operator($1, $args, $name);
  var $_ = ($2 | 0) == 0 ? 0 : $1;
  return $_;
  return null;
}

function _d_make_operator($di, $op) {
  var $1 = _d_make_empty($di);
  if (($1 | 0) != 0) {
    HEAP32[$1 >> 2] = 40;
    HEAP32[$1 + 4 >> 2] = $op;
  }
  return $1;
  return null;
}

function _d_ctor_dtor_name($di) {
  var $20$s2;
  var $2$s2;
  var $2 = HEAP32[$di + 44 >> 2], $2$s2 = $2 >> 2;
  var $3 = ($2 | 0) == 0;
  do {
    if (!$3) {
      var $6 = HEAP32[$2$s2];
      if (($6 | 0) == 0) {
        var $10 = $di + 48 | 0;
        var $12 = HEAP32[$10 >> 2] + HEAP32[$2$s2 + 2] | 0;
        HEAP32[$10 >> 2] = $12;
      } else if (($6 | 0) == 21) {
        var $16 = $di + 48 | 0;
        var $18 = HEAP32[$16 >> 2] + HEAP32[$2$s2 + 2] | 0;
        HEAP32[$16 >> 2] = $18;
      } else {
        break;
      }
    }
  } while (0);
  var $20$s2 = ($di + 12 | 0) >> 2;
  var $21 = HEAP32[$20$s2];
  var $22 = $21 + 1 | 0;
  HEAP32[$20$s2] = $22;
  var $24 = HEAP8[$21] << 24 >> 24;
  do {
    if (($24 | 0) == 67) {
      var $26 = $21 + 2 | 0;
      HEAP32[$20$s2] = $26;
      var $28 = HEAP8[$22] << 24 >> 24;
      if (($28 | 0) == 49) {
        var $kind_0 = 1;
      } else if (($28 | 0) == 50) {
        var $kind_0 = 2;
      } else if (($28 | 0) == 51) {
        var $kind_0 = 3;
      } else {
        var $_0 = 0;
        break;
      }
      var $kind_0;
      var $32 = _d_make_ctor($di, $kind_0, $2);
      var $_0 = $32;
    } else if (($24 | 0) == 68) {
      var $34 = $21 + 2 | 0;
      HEAP32[$20$s2] = $34;
      var $36 = HEAP8[$22] << 24 >> 24;
      if (($36 | 0) == 48) {
        var $kind1_0 = 1;
      } else if (($36 | 0) == 49) {
        var $kind1_0 = 2;
      } else if (($36 | 0) == 50) {
        var $kind1_0 = 3;
      } else {
        var $_0 = 0;
        break;
      }
      var $kind1_0;
      var $40 = _d_make_dtor($di, $kind1_0, $2);
      var $_0 = $40;
    } else {
      var $_0 = 0;
    }
  } while (0);
  var $_0;
  return $_0;
  return null;
}

_d_ctor_dtor_name["X"] = 1;

function _d_discriminator($di) {
  var $1 = $di + 12 | 0;
  var $2 = HEAP32[$1 >> 2];
  if (HEAP8[$2] << 24 >> 24 == 95) {
    var $6 = $2 + 1 | 0;
    HEAP32[$1 >> 2] = $6;
    var $7 = _d_number($di);
    var $_0 = $7 >>> 31 ^ 1;
  } else {
    var $_0 = 1;
  }
  var $_0;
  return $_0;
  return null;
}

function _d_make_ctor($di, $kind, $name) {
  var $1 = _d_make_empty($di);
  var $2 = _cplus_demangle_fill_ctor($1, $kind, $name);
  var $_ = ($2 | 0) == 0 ? 0 : $1;
  return $_;
  return null;
}

function _d_make_dtor($di, $kind, $name) {
  var $1 = _d_make_empty($di);
  var $2 = _cplus_demangle_fill_dtor($1, $kind, $name);
  var $_ = ($2 | 0) == 0 ? 0 : $1;
  return $_;
  return null;
}

function _d_make_template_param($di, $i) {
  var $1 = _d_make_empty($di);
  if (($1 | 0) != 0) {
    HEAP32[$1 >> 2] = 5;
    HEAP32[$1 + 4 >> 2] = $i;
  }
  return $1;
  return null;
}

function _d_name($di) {
  var $1$s2;
  var $1$s2 = ($di + 12 | 0) >> 2;
  var $2 = HEAP32[$1$s2];
  var $4 = HEAP8[$2] << 24 >> 24;
  do {
    if (($4 | 0) == 78) {
      var $6 = _d_nested_name($di);
      var $_0 = $6;
    } else if (($4 | 0) == 90) {
      var $8 = _d_local_name($di);
      var $_0 = $8;
    } else if (($4 | 0) == 76) {
      var $10 = _d_unqualified_name($di);
      var $_0 = $10;
    } else if (($4 | 0) == 83) {
      if (HEAP8[$2 + 1 | 0] << 24 >> 24 == 116) {
        var $18 = $2 + 2 | 0;
        HEAP32[$1$s2] = $18;
        var $19 = _d_make_name($di, STRING_TABLE.__str152 | 0, 3);
        var $20 = _d_unqualified_name($di);
        var $21 = _d_make_comp($di, 1, $19, $20);
        var $22 = $di + 48 | 0;
        var $24 = HEAP32[$22 >> 2] + 3 | 0;
        HEAP32[$22 >> 2] = $24;
        var $subst_0 = 0;
        var $dc_0 = $21;
      } else {
        var $16 = _d_substitution($di, 0);
        var $subst_0 = 1;
        var $dc_0 = $16;
      }
      var $dc_0;
      var $subst_0;
      if (HEAP8[HEAP32[$1$s2]] << 24 >> 24 != 73) {
        var $_0 = $dc_0;
        break;
      }
      if (($subst_0 | 0) == 0) {
        var $32 = _d_add_substitution($di, $dc_0);
        if (($32 | 0) == 0) {
          var $_0 = 0;
          break;
        }
      }
      var $35 = _d_template_args($di);
      var $36 = _d_make_comp($di, 4, $dc_0, $35);
      var $_0 = $36;
    } else {
      var $38 = _d_unqualified_name($di);
      if (HEAP8[HEAP32[$1$s2]] << 24 >> 24 != 73) {
        var $_0 = $38;
        break;
      }
      var $43 = _d_add_substitution($di, $38);
      if (($43 | 0) == 0) {
        var $_0 = 0;
        break;
      }
      var $46 = _d_template_args($di);
      var $47 = _d_make_comp($di, 4, $38, $46);
      var $_0 = $47;
    }
  } while (0);
  var $_0;
  return $_0;
  return null;
}

_d_name["X"] = 1;

function _d_nested_name($di) {
  var $1$s2;
  var __stackBase__ = STACKTOP;
  STACKTOP += 4;
  var $ret = __stackBase__;
  var $1$s2 = ($di + 12 | 0) >> 2;
  var $2 = HEAP32[$1$s2];
  var $3 = $2 + 1 | 0;
  HEAP32[$1$s2] = $3;
  var $5 = HEAP8[$2] << 24 >> 24 == 78;
  do {
    if ($5) {
      var $7 = _d_cv_qualifiers($di, $ret, 1);
      if (($7 | 0) == 0) {
        var $_0 = 0;
        break;
      }
      var $10 = _d_prefix($di);
      HEAP32[$7 >> 2] = $10;
      if (($10 | 0) == 0) {
        var $_0 = 0;
        break;
      }
      var $13 = HEAP32[$1$s2];
      var $14 = $13 + 1 | 0;
      HEAP32[$1$s2] = $14;
      if (HEAP8[$13] << 24 >> 24 != 69) {
        var $_0 = 0;
        break;
      }
      var $_0 = HEAP32[$ret >> 2];
    } else {
      var $_0 = 0;
    }
  } while (0);
  var $_0;
  STACKTOP = __stackBase__;
  return $_0;
  return null;
}

function _d_local_name($di) {
  var $1$s2;
  var $1$s2 = ($di + 12 | 0) >> 2;
  var $2 = HEAP32[$1$s2];
  var $3 = $2 + 1 | 0;
  HEAP32[$1$s2] = $3;
  var $5 = HEAP8[$2] << 24 >> 24 == 90;
  do {
    if ($5) {
      var $7 = _d_encoding($di, 0);
      var $8 = HEAP32[$1$s2];
      var $9 = $8 + 1 | 0;
      HEAP32[$1$s2] = $9;
      if (HEAP8[$8] << 24 >> 24 != 69) {
        var $_0 = 0;
        break;
      }
      if (HEAP8[$9] << 24 >> 24 == 115) {
        var $16 = $8 + 2 | 0;
        HEAP32[$1$s2] = $16;
        var $17 = _d_discriminator($di);
        if (($17 | 0) == 0) {
          var $_0 = 0;
          break;
        }
        var $20 = _d_make_name($di, STRING_TABLE.__str168 | 0, 14);
        var $21 = _d_make_comp($di, 2, $7, $20);
        var $_0 = $21;
      } else {
        var $23 = _d_name($di);
        var $24 = _d_discriminator($di);
        if (($24 | 0) == 0) {
          var $_0 = 0;
          break;
        }
        var $27 = _d_make_comp($di, 2, $7, $23);
        var $_0 = $27;
      }
    } else {
      var $_0 = 0;
    }
  } while (0);
  var $_0;
  return $_0;
  return null;
}

function _d_prefix($di) {
  var __label__;
  var $1 = $di + 12 | 0;
  var $ret_0 = 0;
  $_$164 : while (1) {
    var $ret_0;
    var $3 = HEAPU8[HEAP32[$1 >> 2]];
    if ($3 << 24 >> 24 == 0) {
      var $_0 = 0;
      break;
    }
    var $or_cond = ($3 - 48 & 255 & 255) < 10 | ($3 - 97 & 255 & 255) < 26;
    do {
      if ($or_cond) {
        __label__ = 5;
      } else {
        if ($3 << 24 >> 24 == 76 || $3 << 24 >> 24 == 68 || $3 << 24 >> 24 == 67) {
          __label__ = 5;
          break;
        } else if ($3 << 24 >> 24 == 83) {
          var $11 = _d_substitution($di, 1);
          var $dc_0 = $11;
          __label__ = 10;
          break;
        } else if ($3 << 24 >> 24 == 73) {
          if (($ret_0 | 0) == 0) {
            var $_0 = 0;
            break $_$164;
          }
          var $14 = _d_template_args($di);
          var $comb_type_05 = 4;
          var $dc_06 = $14;
          __label__ = 11;
          break;
        } else if ($3 << 24 >> 24 == 84) {
          var $16 = _d_template_param($di);
          var $dc_0 = $16;
          __label__ = 10;
          break;
        } else if ($3 << 24 >> 24 == 69) {
          var $_0 = $ret_0;
          break $_$164;
        } else {
          var $_0 = 0;
          break $_$164;
        }
      }
    } while (0);
    do {
      if (__label__ == 5) {
        var $9 = _d_unqualified_name($di);
        var $dc_0 = $9;
        __label__ = 10;
        break;
      }
    } while (0);
    do {
      if (__label__ == 10) {
        var $dc_0;
        if (($ret_0 | 0) == 0) {
          var $ret_1 = $dc_0;
          __label__ = 12;
          break;
        }
        var $comb_type_05 = 1;
        var $dc_06 = $dc_0;
        __label__ = 11;
        break;
      }
    } while (0);
    if (__label__ == 11) {
      var $dc_06;
      var $comb_type_05;
      var $20 = _d_make_comp($di, $comb_type_05, $ret_0, $dc_06);
      var $ret_1 = $20;
    }
    var $ret_1;
    if ($3 << 24 >> 24 == 83) {
      var $ret_0 = $ret_1;
      continue;
    }
    if (HEAP8[HEAP32[$1 >> 2]] << 24 >> 24 == 69) {
      var $ret_0 = $ret_1;
      continue;
    }
    var $28 = _d_add_substitution($di, $ret_1);
    if (($28 | 0) == 0) {
      var $_0 = 0;
      break;
    }
    var $ret_0 = $ret_1;
  }
  var $_0;
  return $_0;
  return null;
}

function _d_bare_function_type($di, $has_return_type) {
  var $1$s2;
  var $tl$s2;
  var __stackBase__ = STACKTOP;
  STACKTOP += 4;
  var $tl = __stackBase__, $tl$s2 = $tl >> 2;
  var $1$s2 = ($di + 12 | 0) >> 2;
  var $2 = HEAP32[$1$s2];
  if (HEAP8[$2] << 24 >> 24 == 74) {
    var $6 = $2 + 1 | 0;
    HEAP32[$1$s2] = $6;
    var $_01 = 1;
  } else {
    var $_01 = $has_return_type;
  }
  var $_01;
  HEAP32[$tl$s2] = 0;
  var $_1_ph = $_01;
  var $return_type_0_ph = 0;
  var $ptl_0_ph = $tl;
  $_$189 : while (1) {
    var $ptl_0_ph;
    var $return_type_0_ph;
    var $_1_ph;
    var $_1 = $_1_ph;
    var $return_type_0 = $return_type_0_ph;
    while (1) {
      var $return_type_0;
      var $_1;
      var $9 = HEAP8[HEAP32[$1$s2]];
      if ($9 << 24 >> 24 == 0 || $9 << 24 >> 24 == 69) {
        var $21 = HEAP32[$tl$s2];
        if (($21 | 0) == 0) {
          var $_0 = 0;
          break $_$189;
        }
        var $27 = (HEAP32[$21 + 8 >> 2] | 0) == 0;
        do {
          if ($27) {
            var $31 = HEAP32[$21 + 4 >> 2];
            if ((HEAP32[$31 >> 2] | 0) != 33) {
              var $49 = $21;
              break;
            }
            var $38 = HEAP32[$31 + 4 >> 2];
            if ((HEAP32[$38 + 16 >> 2] | 0) != 9) {
              var $49 = $21;
              break;
            }
            var $45 = $di + 48 | 0;
            var $47 = HEAP32[$45 >> 2] - HEAP32[$38 + 4 >> 2] | 0;
            HEAP32[$45 >> 2] = $47;
            HEAP32[$tl$s2] = 0;
            var $49 = 0;
          } else {
            var $49 = $21;
          }
        } while (0);
        var $49;
        var $50 = _d_make_comp($di, 35, $return_type_0, $49);
        var $_0 = $50;
        break $_$189;
      }
      var $11 = _cplus_demangle_type($di);
      if (($11 | 0) == 0) {
        var $_0 = 0;
        break $_$189;
      }
      if (($_1 | 0) != 0) {
        var $_1 = 0;
        var $return_type_0 = $11;
        continue;
      }
      var $16 = _d_make_comp($di, 38, $11, 0);
      HEAP32[$ptl_0_ph >> 2] = $16;
      if (($16 | 0) == 0) {
        var $_0 = 0;
        break $_$189;
      }
      var $_1_ph = 0;
      var $return_type_0_ph = $return_type_0;
      var $ptl_0_ph = $16 + 8 | 0;
      continue $_$189;
    }
  }
  var $_0;
  STACKTOP = __stackBase__;
  return $_0;
  return null;
}

_d_bare_function_type["X"] = 1;

function _is_ctor_dtor_or_conversion($dc) {
  var $dc_tr = $dc;
  while (1) {
    var $dc_tr;
    if (($dc_tr | 0) == 0) {
      var $_0 = 0;
      break;
    }
    var $4 = HEAP32[$dc_tr >> 2];
    if (($4 | 0) == 1 || ($4 | 0) == 2) {
      var $dc_tr = HEAP32[$dc_tr + 8 >> 2];
    } else if (($4 | 0) == 6 || ($4 | 0) == 7 || ($4 | 0) == 42) {
      var $_0 = 1;
      break;
    } else {
      var $_0 = 0;
      break;
    }
  }
  var $_0;
  return $_0;
  return null;
}

function _str_array_init($a) {
  var $a$s2 = $a >> 2;
  HEAP32[$a$s2 + 3] = 0;
  HEAP32[$a$s2 + 2] = 0;
  HEAP32[$a$s2 + 1] = 0;
  HEAP32[$a$s2] = 0;
  HEAP32[$a$s2 + 4] = 0;
  return;
  return;
}

function _d_identifier($di, $len) {
  var $1$s2;
  var $1$s2 = ($di + 12 | 0) >> 2;
  var $2 = HEAP32[$1$s2];
  var $8 = (HEAP32[$di + 4 >> 2] - $2 | 0) < ($len | 0);
  $_$2 : do {
    if ($8) {
      var $_0 = 0;
    } else {
      var $10 = $2 + $len | 0;
      HEAP32[$1$s2] = $10;
      var $14 = (HEAP32[$di + 8 >> 2] & 4 | 0) == 0;
      do {
        if (!$14) {
          if (HEAP8[$10] << 24 >> 24 != 36) {
            break;
          }
          var $19 = $len + ($2 + 1) | 0;
          HEAP32[$1$s2] = $19;
        }
      } while (0);
      var $21 = ($len | 0) > 9;
      do {
        if ($21) {
          var $23 = _memcmp($2, STRING_TABLE.__str117 | 0, 8);
          if (($23 | 0) != 0) {
            break;
          }
          var $27 = HEAP8[$2 + 8 | 0];
          if (!($27 << 24 >> 24 == 46 || $27 << 24 >> 24 == 95 || $27 << 24 >> 24 == 36)) {
            break;
          }
          if (HEAP8[$2 + 9 | 0] << 24 >> 24 != 78) {
            break;
          }
          var $33 = $di + 48 | 0;
          var $35 = 22 - $len + HEAP32[$33 >> 2] | 0;
          HEAP32[$33 >> 2] = $35;
          var $36 = _d_make_name($di, STRING_TABLE.__str169 | 0, 21);
          var $_0 = $36;
          break $_$2;
        }
      } while (0);
      var $38 = _d_make_name($di, $2, $len);
      var $_0 = $38;
    }
  } while (0);
  var $_0;
  return $_0;
  return null;
}

function _d_special_name($di) {
  var $4$s2;
  var $1$s2;
  var $1$s2 = ($di + 48 | 0) >> 2;
  var $2 = HEAP32[$1$s2];
  var $3 = $2 + 20 | 0;
  HEAP32[$1$s2] = $3;
  var $4$s2 = ($di + 12 | 0) >> 2;
  var $5 = HEAP32[$4$s2];
  var $6 = $5 + 1 | 0;
  HEAP32[$4$s2] = $6;
  var $7 = HEAP8[$5];
  do {
    if ($7 << 24 >> 24 == 84) {
      var $9 = $5 + 2 | 0;
      HEAP32[$4$s2] = $9;
      var $11 = HEAP8[$6] << 24 >> 24;
      if (($11 | 0) == 86) {
        var $13 = $2 + 15 | 0;
        HEAP32[$1$s2] = $13;
        var $14 = _cplus_demangle_type($di);
        var $15 = _d_make_comp($di, 8, $14, 0);
        var $_0 = $15;
      } else if (($11 | 0) == 84) {
        var $17 = $2 + 10 | 0;
        HEAP32[$1$s2] = $17;
        var $18 = _cplus_demangle_type($di);
        var $19 = _d_make_comp($di, 9, $18, 0);
        var $_0 = $19;
      } else if (($11 | 0) == 73) {
        var $21 = _cplus_demangle_type($di);
        var $22 = _d_make_comp($di, 11, $21, 0);
        var $_0 = $22;
      } else if (($11 | 0) == 83) {
        var $24 = _cplus_demangle_type($di);
        var $25 = _d_make_comp($di, 12, $24, 0);
        var $_0 = $25;
      } else if (($11 | 0) == 104) {
        var $27 = _d_call_offset($di, 104);
        if (($27 | 0) == 0) {
          var $_0 = 0;
          break;
        }
        var $30 = _d_encoding($di, 0);
        var $31 = _d_make_comp($di, 14, $30, 0);
        var $_0 = $31;
      } else if (($11 | 0) == 118) {
        var $33 = _d_call_offset($di, 118);
        if (($33 | 0) == 0) {
          var $_0 = 0;
          break;
        }
        var $36 = _d_encoding($di, 0);
        var $37 = _d_make_comp($di, 15, $36, 0);
        var $_0 = $37;
      } else if (($11 | 0) == 99) {
        var $39 = _d_call_offset($di, 0);
        if (($39 | 0) == 0) {
          var $_0 = 0;
          break;
        }
        var $42 = _d_call_offset($di, 0);
        if (($42 | 0) == 0) {
          var $_0 = 0;
          break;
        }
        var $45 = _d_encoding($di, 0);
        var $46 = _d_make_comp($di, 16, $45, 0);
        var $_0 = $46;
      } else if (($11 | 0) == 67) {
        var $48 = _cplus_demangle_type($di);
        var $49 = _d_number($di);
        if (($49 | 0) < 0) {
          var $_0 = 0;
          break;
        }
        var $52 = HEAP32[$4$s2];
        var $53 = $52 + 1 | 0;
        HEAP32[$4$s2] = $53;
        if (HEAP8[$52] << 24 >> 24 != 95) {
          var $_0 = 0;
          break;
        }
        var $57 = _cplus_demangle_type($di);
        var $59 = HEAP32[$1$s2] + 5 | 0;
        HEAP32[$1$s2] = $59;
        var $60 = _d_make_comp($di, 10, $57, $48);
        var $_0 = $60;
      } else if (($11 | 0) == 70) {
        var $62 = _cplus_demangle_type($di);
        var $63 = _d_make_comp($di, 13, $62, 0);
        var $_0 = $63;
      } else if (($11 | 0) == 74) {
        var $65 = _cplus_demangle_type($di);
        var $66 = _d_make_comp($di, 17, $65, 0);
        var $_0 = $66;
      } else {
        var $_0 = 0;
        break;
      }
    } else if ($7 << 24 >> 24 == 71) {
      var $68 = $5 + 2 | 0;
      HEAP32[$4$s2] = $68;
      var $70 = HEAP8[$6] << 24 >> 24;
      if (($70 | 0) == 86) {
        var $72 = _d_name($di);
        var $73 = _d_make_comp($di, 18, $72, 0);
        var $_0 = $73;
      } else if (($70 | 0) == 82) {
        var $75 = _d_name($di);
        var $76 = _d_make_comp($di, 19, $75, 0);
        var $_0 = $76;
      } else if (($70 | 0) == 65) {
        var $78 = _d_encoding($di, 0);
        var $79 = _d_make_comp($di, 20, $78, 0);
        var $_0 = $79;
      } else {
        var $_0 = 0;
        break;
      }
    } else {
      var $_0 = 0;
    }
  } while (0);
  var $_0;
  return $_0;
  return null;
}

_d_special_name["X"] = 1;

function _has_return_type($dc) {
  var $dc_tr$s2;
  var $dc_tr = $dc, $dc_tr$s2 = $dc_tr >> 2;
  while (1) {
    var $dc_tr;
    if (($dc_tr | 0) == 0) {
      var $_0 = 0;
      break;
    }
    var $4 = HEAP32[$dc_tr$s2];
    if (($4 | 0) == 4) {
      var $8 = HEAP32[$dc_tr$s2 + 1];
      var $9 = _is_ctor_dtor_or_conversion($8);
      var $_0 = ($9 | 0) == 0 & 1;
      break;
    } else if (($4 | 0) == 25 || ($4 | 0) == 26 || ($4 | 0) == 27) {
      var $dc_tr = HEAP32[$dc_tr$s2 + 1], $dc_tr$s2 = $dc_tr >> 2;
    } else {
      var $_0 = 0;
      break;
    }
  }
  var $_0;
  return $_0;
  return null;
}

function _d_call_offset($di, $c) {
  var __label__;
  if (($c | 0) == 0) {
    var $3 = $di + 12 | 0;
    var $4 = HEAP32[$3 >> 2];
    var $5 = $4 + 1 | 0;
    HEAP32[$3 >> 2] = $5;
    var $_01 = HEAP8[$4] << 24 >> 24;
  } else {
    var $_01 = $c;
  }
  var $_01;
  do {
    if (($_01 | 0) == 104) {
      var $10 = _d_number($di);
      var $_pre_phi = $di + 12 | 0;
      __label__ = 7;
      break;
    } else if (($_01 | 0) == 118) {
      var $12 = _d_number($di);
      var $13 = $di + 12 | 0;
      var $14 = HEAP32[$13 >> 2];
      var $15 = $14 + 1 | 0;
      HEAP32[$13 >> 2] = $15;
      if (HEAP8[$14] << 24 >> 24 != 95) {
        var $_0 = 0;
        __label__ = 8;
        break;
      }
      var $19 = _d_number($di);
      var $_pre_phi = $13;
      __label__ = 7;
      break;
    } else {
      var $_0 = 0;
      __label__ = 8;
    }
  } while (0);
  if (__label__ == 7) {
    var $_pre_phi;
    var $21 = HEAP32[$_pre_phi >> 2];
    var $22 = $21 + 1 | 0;
    HEAP32[$_pre_phi >> 2] = $22;
    var $_0 = HEAP8[$21] << 24 >> 24 == 95 & 1;
  }
  var $_0;
  return $_0;
  return null;
}

function ___unDNameEx($buffer, $mangled, $buflen, $memget, $memfree, $unknown, $flags) {
  var $sym$s2;
  var __stackBase__ = STACKTOP;
  STACKTOP += 68;
  var $sym = __stackBase__, $sym$s2 = $sym >> 2;
  var $1 = $sym;
  for (var $$dest = $1 >> 2, $$stop = $$dest + 17; $$dest < $$stop; $$dest++) {
    HEAP32[$$dest] = 0;
  }
  var $flags_ = ($flags & 4096) << 16 >> 16 == 0 ? $flags : $flags | -32108;
  HEAP32[$sym$s2] = $flags_ & 65535;
  HEAP32[$sym$s2 + 1] = $memget;
  HEAP32[$sym$s2 + 2] = $memfree;
  HEAP32[$sym$s2 + 3] = $mangled;
  var $10 = $sym + 20 | 0;
  _str_array_init($10);
  var $11 = $sym + 40 | 0;
  _str_array_init($11);
  var $12 = _symbol_demangle($sym);
  if (($12 | 0) == 0) {
    var $18 = 0;
  } else {
    var $18 = HEAP32[$sym$s2 + 4];
  }
  var $18;
  if (($buffer | 0) == 0 | ($buflen | 0) == 0) {
    var $_0 = $18;
  } else {
    var $22 = _strncpy($buffer, $18, $buflen);
    _und_free_all($sym);
    var $_0 = $buffer;
  }
  var $_0;
  STACKTOP = __stackBase__;
  return $_0;
  return null;
}

function _symbol_demangle($sym) {
  var $16$s2;
  var $1$s2;
  var $sym$s2 = $sym >> 2;
  var __stackBase__ = STACKTOP;
  STACKTOP += 56;
  var __label__;
  var $ct = __stackBase__;
  var $ct1 = __stackBase__ + 8;
  var $pmt = __stackBase__ + 16;
  var $array_pmt = __stackBase__ + 36;
  var $1$s2 = ($sym | 0) >> 2;
  var $2 = HEAP32[$1$s2];
  var $4 = ($2 & 8192 | 0) == 0;
  $_$77 : do {
    if ($4) {
      var $16$s2 = ($sym + 12 | 0) >> 2;
      var $17 = HEAP32[$16$s2];
      if (HEAP8[$17] << 24 >> 24 != 63) {
        var $_0 = 0;
        __label__ = 111;
        break;
      }
      var $21 = $17 + 1 | 0;
      HEAP32[$16$s2] = $21;
      var $22 = HEAP8[$21];
      do {
        if ($22 << 24 >> 24 == 63) {
          if (HEAP8[$17 + 2 | 0] << 24 >> 24 == 36) {
            var $28 = $17 + 3 | 0;
            if (HEAP8[$28] << 24 >> 24 != 63) {
              var $do_after_2 = 5;
              __label__ = 90;
              break;
            }
            HEAP32[$16$s2] = $28;
            var $do_after_0 = 6;
            var $33 = $28;
          } else {
            var $do_after_0 = 0;
            var $33 = $21;
          }
          var $33;
          var $do_after_0;
          var $34 = $33 + 1 | 0;
          HEAP32[$16$s2] = $34;
          var $36 = HEAP8[$34] << 24 >> 24;
          do {
            if (($36 | 0) == 48) {
              var $do_after_1_ph = 1;
              __label__ = 81;
            } else if (($36 | 0) == 49) {
              var $do_after_1_ph = 2;
              __label__ = 81;
              break;
            } else if (($36 | 0) == 50) {
              var $function_name_0 = STRING_TABLE.__str1171 | 0;
              var $134 = $34;
              __label__ = 82;
            } else if (($36 | 0) == 51) {
              var $function_name_0 = STRING_TABLE.__str2172 | 0;
              var $134 = $34;
              __label__ = 82;
              break;
            } else if (($36 | 0) == 52) {
              var $function_name_0 = STRING_TABLE.__str3173 | 0;
              var $134 = $34;
              __label__ = 82;
              break;
            } else if (($36 | 0) == 53) {
              var $function_name_0 = STRING_TABLE.__str4174 | 0;
              var $134 = $34;
              __label__ = 82;
              break;
            } else if (($36 | 0) == 54) {
              var $function_name_0 = STRING_TABLE.__str5175 | 0;
              var $134 = $34;
              __label__ = 82;
              break;
            } else if (($36 | 0) == 55) {
              var $function_name_0 = STRING_TABLE.__str6176 | 0;
              var $134 = $34;
              __label__ = 82;
              break;
            } else if (($36 | 0) == 56) {
              var $function_name_0 = STRING_TABLE.__str7177 | 0;
              var $134 = $34;
              __label__ = 82;
              break;
            } else if (($36 | 0) == 57) {
              var $function_name_0 = STRING_TABLE.__str8178 | 0;
              var $134 = $34;
              __label__ = 82;
              break;
            } else if (($36 | 0) == 65) {
              var $function_name_0 = STRING_TABLE.__str9179 | 0;
              var $134 = $34;
              __label__ = 82;
              break;
            } else if (($36 | 0) == 66) {
              HEAP32[$16$s2] = $33 + 2 | 0;
              var $function_name_2 = STRING_TABLE.__str10180 | 0;
              var $do_after_14 = 3;
              __label__ = 88;
              break;
            } else if (($36 | 0) == 67) {
              var $function_name_0 = STRING_TABLE.__str11181 | 0;
              var $134 = $34;
              __label__ = 82;
              break;
            } else if (($36 | 0) == 68) {
              var $function_name_0 = STRING_TABLE.__str12182 | 0;
              var $134 = $34;
              __label__ = 82;
              break;
            } else if (($36 | 0) == 69) {
              var $function_name_0 = STRING_TABLE.__str13183 | 0;
              var $134 = $34;
              __label__ = 82;
              break;
            } else if (($36 | 0) == 70) {
              var $function_name_0 = STRING_TABLE.__str14184 | 0;
              var $134 = $34;
              __label__ = 82;
              break;
            } else if (($36 | 0) == 71) {
              var $function_name_0 = STRING_TABLE.__str15185 | 0;
              var $134 = $34;
              __label__ = 82;
              break;
            } else if (($36 | 0) == 72) {
              var $function_name_0 = STRING_TABLE.__str16186 | 0;
              var $134 = $34;
              __label__ = 82;
              break;
            } else if (($36 | 0) == 73) {
              var $function_name_0 = STRING_TABLE.__str17187 | 0;
              var $134 = $34;
              __label__ = 82;
              break;
            } else if (($36 | 0) == 74) {
              var $function_name_0 = STRING_TABLE.__str18188 | 0;
              var $134 = $34;
              __label__ = 82;
              break;
            } else if (($36 | 0) == 75) {
              var $function_name_0 = STRING_TABLE.__str19189 | 0;
              var $134 = $34;
              __label__ = 82;
              break;
            } else if (($36 | 0) == 76) {
              var $function_name_0 = STRING_TABLE.__str20190 | 0;
              var $134 = $34;
              __label__ = 82;
              break;
            } else if (($36 | 0) == 77) {
              var $function_name_0 = STRING_TABLE.__str21191 | 0;
              var $134 = $34;
              __label__ = 82;
              break;
            } else if (($36 | 0) == 78) {
              var $function_name_0 = STRING_TABLE.__str22192 | 0;
              var $134 = $34;
              __label__ = 82;
              break;
            } else if (($36 | 0) == 79) {
              var $function_name_0 = STRING_TABLE.__str23193 | 0;
              var $134 = $34;
              __label__ = 82;
              break;
            } else if (($36 | 0) == 80) {
              var $function_name_0 = STRING_TABLE.__str24194 | 0;
              var $134 = $34;
              __label__ = 82;
              break;
            } else if (($36 | 0) == 81) {
              var $function_name_0 = STRING_TABLE.__str25195 | 0;
              var $134 = $34;
              __label__ = 82;
              break;
            } else if (($36 | 0) == 82) {
              var $function_name_0 = STRING_TABLE.__str26196 | 0;
              var $134 = $34;
              __label__ = 82;
              break;
            } else if (($36 | 0) == 83) {
              var $function_name_0 = STRING_TABLE.__str27197 | 0;
              var $134 = $34;
              __label__ = 82;
              break;
            } else if (($36 | 0) == 84) {
              var $function_name_0 = STRING_TABLE.__str28198 | 0;
              var $134 = $34;
              __label__ = 82;
              break;
            } else if (($36 | 0) == 85) {
              var $function_name_0 = STRING_TABLE.__str29199 | 0;
              var $134 = $34;
              __label__ = 82;
              break;
            } else if (($36 | 0) == 86) {
              var $function_name_0 = STRING_TABLE.__str30200 | 0;
              var $134 = $34;
              __label__ = 82;
              break;
            } else if (($36 | 0) == 87) {
              var $function_name_0 = STRING_TABLE.__str31201 | 0;
              var $134 = $34;
              __label__ = 82;
              break;
            } else if (($36 | 0) == 88) {
              var $function_name_0 = STRING_TABLE.__str32202 | 0;
              var $134 = $34;
              __label__ = 82;
              break;
            } else if (($36 | 0) == 89) {
              var $function_name_0 = STRING_TABLE.__str33203 | 0;
              var $134 = $34;
              __label__ = 82;
              break;
            } else if (($36 | 0) == 90) {
              var $function_name_0 = STRING_TABLE.__str34204 | 0;
              var $134 = $34;
              __label__ = 82;
              break;
            } else if (($36 | 0) == 95) {
              var $72 = $33 + 2 | 0;
              HEAP32[$16$s2] = $72;
              var $74 = HEAP8[$72] << 24 >> 24;
              if (($74 | 0) == 48) {
                var $function_name_0 = STRING_TABLE.__str35205 | 0;
                var $134 = $72;
                __label__ = 82;
                break;
              } else if (($74 | 0) == 49) {
                var $function_name_0 = STRING_TABLE.__str36206 | 0;
                var $134 = $72;
                __label__ = 82;
                break;
              } else if (($74 | 0) == 50) {
                var $function_name_0 = STRING_TABLE.__str37207 | 0;
                var $134 = $72;
                __label__ = 82;
                break;
              } else if (($74 | 0) == 51) {
                var $function_name_0 = STRING_TABLE.__str38208 | 0;
                var $134 = $72;
                __label__ = 82;
                break;
              } else if (($74 | 0) == 52) {
                var $function_name_0 = STRING_TABLE.__str39209 | 0;
                var $134 = $72;
                __label__ = 82;
                break;
              } else if (($74 | 0) == 53) {
                var $function_name_0 = STRING_TABLE.__str40210 | 0;
                var $134 = $72;
                __label__ = 82;
                break;
              } else if (($74 | 0) == 54) {
                var $function_name_0 = STRING_TABLE.__str41211 | 0;
                var $134 = $72;
                __label__ = 82;
                break;
              } else if (($74 | 0) == 55) {
                var $function_name_0 = STRING_TABLE.__str42212 | 0;
                var $134 = $72;
                __label__ = 82;
                break;
              } else if (($74 | 0) == 56) {
                var $function_name_0 = STRING_TABLE.__str43213 | 0;
                var $134 = $72;
                __label__ = 82;
                break;
              } else if (($74 | 0) == 57) {
                var $function_name_0 = STRING_TABLE.__str44214 | 0;
                var $134 = $72;
                __label__ = 82;
                break;
              } else if (($74 | 0) == 65) {
                var $function_name_0 = STRING_TABLE.__str45215 | 0;
                var $134 = $72;
                __label__ = 82;
                break;
              } else if (($74 | 0) == 66) {
                var $function_name_0 = STRING_TABLE.__str46216 | 0;
                var $134 = $72;
                __label__ = 82;
                break;
              } else if (($74 | 0) == 67) {
                HEAP32[$16$s2] = $33 + 3 | 0;
                var $function_name_06 = STRING_TABLE.__str47217 | 0;
                __label__ = 84;
                break;
              } else if (($74 | 0) == 68) {
                var $function_name_0 = STRING_TABLE.__str48218 | 0;
                var $134 = $72;
                __label__ = 82;
                break;
              } else if (($74 | 0) == 69) {
                var $function_name_0 = STRING_TABLE.__str49219 | 0;
                var $134 = $72;
                __label__ = 82;
                break;
              } else if (($74 | 0) == 70) {
                var $function_name_0 = STRING_TABLE.__str50220 | 0;
                var $134 = $72;
                __label__ = 82;
                break;
              } else if (($74 | 0) == 71) {
                var $function_name_0 = STRING_TABLE.__str51221 | 0;
                var $134 = $72;
                __label__ = 82;
                break;
              } else if (($74 | 0) == 72) {
                var $function_name_0 = STRING_TABLE.__str52222 | 0;
                var $134 = $72;
                __label__ = 82;
                break;
              } else if (($74 | 0) == 73) {
                var $function_name_0 = STRING_TABLE.__str53223 | 0;
                var $134 = $72;
                __label__ = 82;
                break;
              } else if (($74 | 0) == 74) {
                var $function_name_0 = STRING_TABLE.__str54224 | 0;
                var $134 = $72;
                __label__ = 82;
                break;
              } else if (($74 | 0) == 75) {
                var $function_name_0 = STRING_TABLE.__str55225 | 0;
                var $134 = $72;
                __label__ = 82;
                break;
              } else if (($74 | 0) == 76) {
                var $function_name_0 = STRING_TABLE.__str56226 | 0;
                var $134 = $72;
                __label__ = 82;
                break;
              } else if (($74 | 0) == 77) {
                var $function_name_0 = STRING_TABLE.__str57227 | 0;
                var $134 = $72;
                __label__ = 82;
                break;
              } else if (($74 | 0) == 78) {
                var $function_name_0 = STRING_TABLE.__str58228 | 0;
                var $134 = $72;
                __label__ = 82;
                break;
              } else if (($74 | 0) == 79) {
                var $function_name_0 = STRING_TABLE.__str59229 | 0;
                var $134 = $72;
                __label__ = 82;
                break;
              } else if (($74 | 0) == 82) {
                var $100 = $2 | 4;
                HEAP32[$1$s2] = $100;
                var $101 = $33 + 3 | 0;
                HEAP32[$16$s2] = $101;
                var $103 = HEAP8[$101] << 24 >> 24;
                if (($103 | 0) == 48) {
                  HEAP32[$16$s2] = $33 + 4 | 0;
                  _str_array_init($pmt);
                  var $106 = _demangle_datatype($sym, $ct1, $pmt, 0);
                  var $108 = HEAP32[$ct1 >> 2];
                  var $110 = HEAP32[$ct1 + 4 >> 2];
                  var $111 = _str_printf($sym, STRING_TABLE.__str60230 | 0, (tempInt = STACKTOP, STACKTOP += 8, HEAP32[tempInt >> 2] = $108, HEAP32[tempInt + 4 >> 2] = $110, tempInt));
                  var $113 = HEAP32[$16$s2] - 1 | 0;
                  HEAP32[$16$s2] = $113;
                  var $function_name_0 = $111;
                  var $134 = $113;
                  __label__ = 82;
                  break;
                } else if (($103 | 0) == 49) {
                  HEAP32[$16$s2] = $33 + 4 | 0;
                  var $116 = _get_number($sym);
                  var $117 = _get_number($sym);
                  var $118 = _get_number($sym);
                  var $119 = _get_number($sym);
                  var $121 = HEAP32[$16$s2] - 1 | 0;
                  HEAP32[$16$s2] = $121;
                  var $122 = _str_printf($sym, STRING_TABLE.__str61231 | 0, (tempInt = STACKTOP, STACKTOP += 16, HEAP32[tempInt >> 2] = $116, HEAP32[tempInt + 4 >> 2] = $117, HEAP32[tempInt + 8 >> 2] = $118, HEAP32[tempInt + 12 >> 2] = $119, tempInt));
                  var $function_name_0 = $122;
                  var $134 = HEAP32[$16$s2];
                  __label__ = 82;
                  break;
                } else if (($103 | 0) == 50) {
                  var $function_name_0 = STRING_TABLE.__str62232 | 0;
                  var $134 = $101;
                  __label__ = 82;
                  break;
                } else if (($103 | 0) == 51) {
                  var $function_name_0 = STRING_TABLE.__str63233 | 0;
                  var $134 = $101;
                  __label__ = 82;
                  break;
                } else if (($103 | 0) == 52) {
                  var $function_name_0 = STRING_TABLE.__str64234 | 0;
                  var $134 = $101;
                  __label__ = 82;
                  break;
                } else {
                  var $function_name_0 = 0;
                  var $134 = $101;
                  __label__ = 82;
                  break;
                }
              } else if (($74 | 0) == 83) {
                var $function_name_0 = STRING_TABLE.__str65235 | 0;
                var $134 = $72;
                __label__ = 82;
                break;
              } else if (($74 | 0) == 84) {
                var $function_name_0 = STRING_TABLE.__str66236 | 0;
                var $134 = $72;
                __label__ = 82;
                break;
              } else if (($74 | 0) == 85) {
                var $function_name_0 = STRING_TABLE.__str67237 | 0;
                var $134 = $72;
                __label__ = 82;
                break;
              } else if (($74 | 0) == 86) {
                var $function_name_0 = STRING_TABLE.__str68238 | 0;
                var $134 = $72;
                __label__ = 82;
                break;
              } else if (($74 | 0) == 88) {
                var $function_name_0 = STRING_TABLE.__str69239 | 0;
                var $134 = $72;
                __label__ = 82;
                break;
              } else if (($74 | 0) == 89) {
                var $function_name_0 = STRING_TABLE.__str70240 | 0;
                var $134 = $72;
                __label__ = 82;
                break;
              } else {
                var $_0 = 0;
                __label__ = 111;
                break $_$77;
              }
            } else {
              var $_0 = 0;
              __label__ = 111;
              break $_$77;
            }
          } while (0);
          do {
            if (__label__ == 81) {
              var $do_after_1_ph;
              HEAP32[$16$s2] = $33 + 2 | 0;
              var $do_after_12 = $do_after_1_ph;
              __label__ = 83;
              break;
            } else if (__label__ == 82) {
              var $134;
              var $function_name_0;
              HEAP32[$16$s2] = $134 + 1 | 0;
              if (($do_after_0 | 0) == 1 || ($do_after_0 | 0) == 2) {
                var $do_after_12 = $do_after_0;
                __label__ = 83;
                break;
              } else if (($do_after_0 | 0) == 4) {
                var $function_name_06 = $function_name_0;
                __label__ = 84;
                break;
              } else if (($do_after_0 | 0) != 6) {
                var $function_name_2 = $function_name_0;
                var $do_after_14 = $do_after_0;
                __label__ = 88;
                break;
              }
              _str_array_init($array_pmt);
              var $143 = _get_args($sym, $array_pmt, 0, 60, 62);
              if (($143 | 0) == 0) {
                var $function_name_1 = $function_name_0;
              } else {
                var $146 = _str_printf($sym, STRING_TABLE.__str170 | 0, (tempInt = STACKTOP, STACKTOP += 8, HEAP32[tempInt >> 2] = $function_name_0, HEAP32[tempInt + 4 >> 2] = $143, tempInt));
                var $function_name_1 = $146;
              }
              var $function_name_1;
              HEAP32[$sym$s2 + 6] = 0;
              var $function_name_2 = $function_name_1;
              var $do_after_14 = $do_after_0;
              __label__ = 88;
              break;
            }
          } while (0);
          if (__label__ == 83) {
            var $do_after_12;
            var $137 = $sym + 40 | 0;
            var $138 = _str_array_push($sym, STRING_TABLE._symbol_demangle_dashed_null | 0, -1, $137);
            if (($138 | 0) == 0) {
              var $_0 = 0;
              __label__ = 111;
              break $_$77;
            }
            var $do_after_2 = $do_after_12;
            __label__ = 90;
            break;
          } else if (__label__ == 84) {
            var $function_name_06;
            HEAP32[$sym$s2 + 4] = $function_name_06;
            var $ret_011 = 1;
            var $208 = $function_name_06;
            __label__ = 109;
            break $_$77;
          } else if (__label__ == 88) {
            var $do_after_14;
            var $function_name_2;
            var $150 = $sym + 40 | 0;
            var $151 = _str_array_push($sym, $function_name_2, -1, $150);
            if (($151 | 0) == 0) {
              var $_0 = 0;
              __label__ = 111;
              break $_$77;
            }
            var $do_after_2 = $do_after_14;
            __label__ = 90;
            break;
          }
        } else if ($22 << 24 >> 24 == 36) {
          var $_pre3 = $17 + 2 | 0;
          HEAP32[$16$s2] = $_pre3;
          var $154 = _get_template_name($sym);
          HEAP32[$sym$s2 + 4] = $154;
          var $ret_0 = ($154 | 0) != 0 & 1;
          __label__ = 107;
          break;
        } else {
          var $do_after_2 = 0;
          __label__ = 90;
        }
      } while (0);
      if (__label__ == 90) {
        var $do_after_2;
        var $158 = HEAPU32[$16$s2];
        var $160 = HEAP8[$158] << 24 >> 24;
        if (($160 | 0) == 64) {
          HEAP32[$16$s2] = $158 + 1 | 0;
        } else if (($160 | 0) == 36) {
          __label__ = 93;
        } else {
          var $164 = _get_class($sym);
          if (($164 | 0) == 0) {
            var $_0 = -1;
            __label__ = 111;
            break;
          }
        }
        if (($do_after_2 | 0) == 5) {
          var $188 = $sym + 20 | 0;
          var $190 = HEAP32[$188 >> 2] + 1 | 0;
          HEAP32[$188 >> 2] = $190;
        } else if (($do_after_2 | 0) == 1 || ($do_after_2 | 0) == 2) {
          if (HEAPU32[$sym$s2 + 11] >>> 0 < 2) {
            var $_0 = -1;
            __label__ = 111;
            break;
          }
          var $173 = $sym + 56 | 0;
          var $174 = HEAPU32[$173 >> 2];
          var $176 = HEAP32[$174 + 4 >> 2];
          if (($do_after_2 | 0) == 1) {
            HEAP32[$174 >> 2] = $176;
          } else {
            var $179 = _str_printf($sym, STRING_TABLE.__str71241 | 0, (tempInt = STACKTOP, STACKTOP += 4, HEAP32[tempInt >> 2] = $176, tempInt));
            var $180 = HEAP32[$173 >> 2];
            HEAP32[$180 >> 2] = $179;
          }
          var $183 = HEAP32[$1$s2] | 4;
          HEAP32[$1$s2] = $183;
        } else if (($do_after_2 | 0) == 3) {
          var $186 = HEAP32[$1$s2] & -5;
          HEAP32[$1$s2] = $186;
        }
        var $192 = HEAPU8[HEAP32[$16$s2]];
        if (($192 - 48 & 255 & 255) < 10) {
          var $195 = _handle_data($sym);
          var $ret_0 = $195;
        } else {
          if (($192 - 65 & 255 & 255) < 26) {
            var $201 = _handle_method($sym, ($do_after_2 | 0) == 3 & 1);
            var $ret_0 = $201;
          } else {
            if ($192 << 24 >> 24 != 36) {
              var $_0 = -1;
              __label__ = 111;
              break;
            }
            var $205 = _handle_template($sym);
            var $ret_0 = $205;
          }
        }
      }
      var $ret_0;
      if (($ret_0 | 0) == 0) {
        var $_0 = -1;
        __label__ = 111;
        break;
      }
      var $ret_011 = $ret_0;
      var $208 = HEAP32[$sym$s2 + 4];
      __label__ = 109;
      break;
    }
    var $6 = _demangle_datatype($sym, $ct, 0, 0);
    if (($6 | 0) == 0) {
      var $_0 = -1;
      __label__ = 111;
      break;
    }
    var $10 = HEAP32[$ct >> 2];
    var $12 = HEAP32[$ct + 4 >> 2];
    var $13 = _str_printf($sym, STRING_TABLE.__str170 | 0, (tempInt = STACKTOP, STACKTOP += 8, HEAP32[tempInt >> 2] = $10, HEAP32[tempInt + 4 >> 2] = $12, tempInt));
    HEAP32[$sym$s2 + 4] = $13;
    var $ret_011 = 1;
    var $208 = $13;
    __label__ = 109;
    break;
  } while (0);
  do {
    if (__label__ == 109) {
      var $208;
      var $ret_011;
      if (($208 | 0) != 0) {
        var $_0 = $ret_011;
        break;
      }
      ___assert_func(STRING_TABLE.__str72242 | 0, 1499, STRING_TABLE.___func___symbol_demangle | 0, STRING_TABLE.__str73243 | 0);
      var $_0 = $ret_011;
    }
  } while (0);
  var $_0;
  STACKTOP = __stackBase__;
  return $_0;
  return null;
}

_symbol_demangle["X"] = 1;

function _und_free_all($sym) {
  var $1 = $sym + 60 | 0;
  var $2 = HEAP32[$1 >> 2];
  var $3 = ($2 | 0) == 0;
  $_$2 : do {
    if (!$3) {
      var $4 = $sym + 8 | 0;
      var $5 = $2;
      while (1) {
        var $5;
        var $7 = HEAP32[$5 >> 2];
        var $8 = HEAP32[$4 >> 2];
        if (($8 | 0) != 0) {
          FUNCTION_TABLE[$8]($5);
        }
        HEAP32[$1 >> 2] = $7;
        if (($7 | 0) == 0) {
          break $_$2;
        }
        var $5 = $7;
      }
    }
  } while (0);
  HEAP32[$sym + 64 >> 2] = 0;
  return;
  return;
}

function ___unDName($buffer, $mangled, $buflen, $memget, $memfree, $flags) {
  var $1 = ___unDNameEx($buffer, $mangled, $buflen, $memget, $memfree, undef, $flags);
  return $1;
  return null;
}

function __simple_undname($mangled) {
  var $1 = ___unDName(0, $mangled, 0, 2, 4, 0);
  return $1;
  return null;
}

function _demangle_datatype($sym, $ct, $pmt_ref, $in_args) {
  var $6$s2;
  var $5$s2;
  var $4$s2;
  var __stackBase__ = STACKTOP;
  STACKTOP += 24;
  var $call_conv = __stackBase__;
  var $exported = __stackBase__ + 4;
  var $sub_ct = __stackBase__ + 8;
  var $ptr5 = __stackBase__ + 16;
  var $ptr_modif = __stackBase__ + 20;
  if (($ct | 0) == 0) {
    ___assert_func(STRING_TABLE.__str72242 | 0, 829, STRING_TABLE.___func___demangle_datatype | 0, STRING_TABLE.__str121291 | 0);
  }
  var $4$s2 = ($ct + 4 | 0) >> 2;
  HEAP32[$4$s2] = 0;
  var $5$s2 = ($ct | 0) >> 2;
  HEAP32[$5$s2] = 0;
  var $6$s2 = ($sym + 12 | 0) >> 2;
  var $7 = HEAPU32[$6$s2];
  var $8 = $7 + 1 | 0;
  HEAP32[$6$s2] = $8;
  var $9 = HEAP8[$7];
  var $10 = $9 << 24 >> 24;
  do {
    if (($10 | 0) == 95) {
      HEAP32[$6$s2] = $7 + 2 | 0;
      var $13 = HEAP8[$8];
      var $14 = _get_extended_type($13);
      HEAP32[$5$s2] = $14;
    } else if (($10 | 0) == 67 || ($10 | 0) == 68 || ($10 | 0) == 69 || ($10 | 0) == 70 || ($10 | 0) == 71 || ($10 | 0) == 72 || ($10 | 0) == 73 || ($10 | 0) == 74 || ($10 | 0) == 75 || ($10 | 0) == 77 || ($10 | 0) == 78 || ($10 | 0) == 79 || ($10 | 0) == 88 || ($10 | 0) == 90) {
      var $16 = _get_simple_type($9);
      HEAP32[$5$s2] = $16;
    } else if (($10 | 0) == 84 || ($10 | 0) == 85 || ($10 | 0) == 86 || ($10 | 0) == 89) {
      var $18 = _get_class_name($sym);
      if (($18 | 0) == 0) {
        break;
      }
      var $24 = (HEAP32[$sym >> 2] & 32768 | 0) == 0;
      do {
        if ($24) {
          if (($10 | 0) == 84) {
            var $type_name_0 = STRING_TABLE.__str122292 | 0;
          } else if (($10 | 0) == 85) {
            var $type_name_0 = STRING_TABLE.__str123293 | 0;
          } else if (($10 | 0) == 86) {
            var $type_name_0 = STRING_TABLE.__str124294 | 0;
          } else if (($10 | 0) == 89) {
            var $type_name_0 = STRING_TABLE.__str125295 | 0;
          } else {
            var $type_name_0 = 0;
            break;
          }
        } else {
          var $type_name_0 = 0;
        }
      } while (0);
      var $type_name_0;
      var $31 = _str_printf($sym, STRING_TABLE.__str170 | 0, (tempInt = STACKTOP, STACKTOP += 8, HEAP32[tempInt >> 2] = $type_name_0, HEAP32[tempInt + 4 >> 2] = $18, tempInt));
      HEAP32[$5$s2] = $31;
    } else if (($10 | 0) == 63) {
      if (($in_args | 0) == 0) {
        _get_modified_type($ct, $sym, $pmt_ref, 63, 0);
      } else {
        var $35 = _get_number($sym);
        if (($35 | 0) == 0) {
          break;
        }
        var $38 = _str_printf($sym, STRING_TABLE.__str126296 | 0, (tempInt = STACKTOP, STACKTOP += 4, HEAP32[tempInt >> 2] = $35, tempInt));
        HEAP32[$5$s2] = $38;
      }
    } else if (($10 | 0) == 65 || ($10 | 0) == 66) {
      _get_modified_type($ct, $sym, $pmt_ref, $9, $in_args);
    } else if (($10 | 0) == 81 || ($10 | 0) == 82 || ($10 | 0) == 83) {
      var $43 = ($in_args | 0) == 0 ? 80 : $9;
      _get_modified_type($ct, $sym, $pmt_ref, $43, $in_args);
    } else if (($10 | 0) == 80) {
      if (((HEAP8[$8] << 24 >> 24) - 48 | 0) >>> 0 < 10) {
        var $48 = $7 + 2 | 0;
        HEAP32[$6$s2] = $48;
        if (HEAP8[$8] << 24 >> 24 != 54) {
          break;
        }
        var $52 = $sym + 44 | 0;
        var $53 = HEAP32[$52 >> 2];
        HEAP32[$6$s2] = $7 + 3 | 0;
        var $55 = HEAP8[$48];
        var $58 = HEAP32[$sym >> 2] & -17;
        var $59 = _get_calling_convention($55, $call_conv, $exported, $58);
        if (($59 | 0) == 0) {
          break;
        }
        var $62 = _demangle_datatype($sym, $sub_ct, $pmt_ref, 0);
        if (($62 | 0) == 0) {
          break;
        }
        var $65 = _get_args($sym, $pmt_ref, 1, 40, 41);
        if (($65 | 0) == 0) {
          break;
        }
        HEAP32[$52 >> 2] = $53;
        var $69 = HEAP32[$sub_ct >> 2];
        var $71 = HEAP32[$sub_ct + 4 >> 2];
        var $72 = HEAP32[$call_conv >> 2];
        var $73 = _str_printf($sym, STRING_TABLE.__str127297 | 0, (tempInt = STACKTOP, STACKTOP += 12, HEAP32[tempInt >> 2] = $69, HEAP32[tempInt + 4 >> 2] = $71, HEAP32[tempInt + 8 >> 2] = $72, tempInt));
        HEAP32[$5$s2] = $73;
        var $74 = _str_printf($sym, STRING_TABLE.__str128298 | 0, (tempInt = STACKTOP, STACKTOP += 4, HEAP32[tempInt >> 2] = $65, tempInt));
        HEAP32[$4$s2] = $74;
      } else {
        _get_modified_type($ct, $sym, $pmt_ref, 80, $in_args);
      }
    } else if (($10 | 0) == 87) {
      if (HEAP8[$8] << 24 >> 24 != 52) {
        break;
      }
      HEAP32[$6$s2] = $7 + 2 | 0;
      var $81 = _get_class_name($sym);
      if (($81 | 0) == 0) {
        break;
      }
      if ((HEAP32[$sym >> 2] & 32768 | 0) == 0) {
        var $90 = _str_printf($sym, STRING_TABLE.__str129299 | 0, (tempInt = STACKTOP, STACKTOP += 4, HEAP32[tempInt >> 2] = $81, tempInt));
        HEAP32[$5$s2] = $90;
      } else {
        HEAP32[$5$s2] = $81;
      }
    } else if (($10 | 0) == 48 || ($10 | 0) == 49 || ($10 | 0) == 50 || ($10 | 0) == 51 || ($10 | 0) == 52 || ($10 | 0) == 53 || ($10 | 0) == 54 || ($10 | 0) == 55 || ($10 | 0) == 56 || ($10 | 0) == 57) {
      var $92 = $10 << 1;
      var $93 = $92 - 96 | 0;
      var $94 = _str_array_get_ref($pmt_ref, $93);
      HEAP32[$5$s2] = $94;
      var $95 = $92 - 95 | 0;
      var $96 = _str_array_get_ref($pmt_ref, $95);
      HEAP32[$4$s2] = $96;
    } else if (($10 | 0) == 36) {
      var $98 = $7 + 2 | 0;
      HEAP32[$6$s2] = $98;
      var $100 = HEAP8[$8] << 24 >> 24;
      if (($100 | 0) == 48) {
        var $102 = _get_number($sym);
        HEAP32[$5$s2] = $102;
      } else if (($100 | 0) == 68) {
        var $104 = _get_number($sym);
        if (($104 | 0) == 0) {
          break;
        }
        var $107 = _str_printf($sym, STRING_TABLE.__str130300 | 0, (tempInt = STACKTOP, STACKTOP += 4, HEAP32[tempInt >> 2] = $104, tempInt));
        HEAP32[$5$s2] = $107;
      } else if (($100 | 0) == 70) {
        var $109 = _get_number($sym);
        if (($109 | 0) == 0) {
          break;
        }
        var $112 = _get_number($sym);
        if (($112 | 0) == 0) {
          break;
        }
        var $115 = _str_printf($sym, STRING_TABLE.__str131301 | 0, (tempInt = STACKTOP, STACKTOP += 8, HEAP32[tempInt >> 2] = $109, HEAP32[tempInt + 4 >> 2] = $112, tempInt));
        HEAP32[$5$s2] = $115;
      } else if (($100 | 0) == 71) {
        var $117 = _get_number($sym);
        if (($117 | 0) == 0) {
          break;
        }
        var $120 = _get_number($sym);
        if (($120 | 0) == 0) {
          break;
        }
        var $123 = _get_number($sym);
        if (($123 | 0) == 0) {
          break;
        }
        var $126 = _str_printf($sym, STRING_TABLE.__str132302 | 0, (tempInt = STACKTOP, STACKTOP += 12, HEAP32[tempInt >> 2] = $117, HEAP32[tempInt + 4 >> 2] = $120, HEAP32[tempInt + 8 >> 2] = $123, tempInt));
        HEAP32[$5$s2] = $126;
      } else if (($100 | 0) == 81) {
        var $128 = _get_number($sym);
        if (($128 | 0) == 0) {
          break;
        }
        var $131 = _str_printf($sym, STRING_TABLE.__str133303 | 0, (tempInt = STACKTOP, STACKTOP += 4, HEAP32[tempInt >> 2] = $128, tempInt));
        HEAP32[$5$s2] = $131;
      } else if (($100 | 0) == 36) {
        if (HEAP8[$98] << 24 >> 24 != 67) {
          break;
        }
        HEAP32[$6$s2] = $7 + 3 | 0;
        var $137 = _get_modifier($sym, $ptr5, $ptr_modif);
        if (($137 | 0) == 0) {
          break;
        }
        var $140 = _demangle_datatype($sym, $ct, $pmt_ref, $in_args);
        if (($140 | 0) == 0) {
          break;
        }
        var $143 = HEAP32[$5$s2];
        var $144 = HEAP32[$ptr5 >> 2];
        var $145 = _str_printf($sym, STRING_TABLE.__str83253 | 0, (tempInt = STACKTOP, STACKTOP += 8, HEAP32[tempInt >> 2] = $143, HEAP32[tempInt + 4 >> 2] = $144, tempInt));
        HEAP32[$5$s2] = $145;
      } else {
        break;
      }
    }
  } while (0);
  var $148 = (HEAP32[$5$s2] | 0) != 0 & 1;
  STACKTOP = __stackBase__;
  return $148;
  return null;
}

_demangle_datatype["X"] = 1;

function _str_printf($sym, $format) {
  var $args$s2;
  var __stackBase__ = STACKTOP;
  STACKTOP += 4;
  var $args = __stackBase__, $args$s2 = $args >> 2;
  var $1 = $args;
  HEAP32[$1 >> 2] = arguments[_str_printf.length];
  var $len_0 = 1;
  var $i_0 = 0;
  $_$71 : while (1) {
    var $i_0;
    var $len_0;
    var $4 = HEAP8[$format + $i_0 | 0];
    do {
      if ($4 << 24 >> 24 == 0) {
        break $_$71;
      } else if ($4 << 24 >> 24 == 37) {
        var $6 = $i_0 + 1 | 0;
        var $9 = HEAP8[$format + $6 | 0] << 24 >> 24;
        if (($9 | 0) == 115) {
          var $11 = HEAP32[$args$s2];
          var $12 = $11;
          var $13 = $11 + 4 | 0;
          HEAP32[$args$s2] = $13;
          var $14 = HEAP32[$12 >> 2];
          if (($14 | 0) == 0) {
            var $len_1 = $len_0;
            var $i_2 = $6;
            break;
          }
          var $17 = _strlen($14);
          var $len_1 = $17 + $len_0 | 0;
          var $i_2 = $6;
          break;
        } else if (($9 | 0) == 99) {
          var $21 = HEAP32[$args$s2] + 4 | 0;
          HEAP32[$args$s2] = $21;
          var $len_1 = $len_0 + 1 | 0;
          var $i_2 = $6;
          break;
        } else if (($9 | 0) == 37) {
          var $i_1 = $6;
        } else {
          var $i_1 = $i_0;
        }
        var $i_1;
        var $len_1 = $len_0 + 1 | 0;
        var $i_2 = $i_1;
      } else {
        var $len_1 = $len_0 + 1 | 0;
        var $i_2 = $i_0;
      }
    } while (0);
    var $i_2;
    var $len_1;
    var $len_0 = $len_1;
    var $i_0 = $i_2 + 1 | 0;
  }
  var $31 = _und_alloc($sym, $len_0);
  if (($31 | 0) == 0) {
    var $_0 = 0;
  } else {
    HEAP32[$1 >> 2] = arguments[_str_printf.length];
    var $p_0 = $31;
    var $i_3 = 0;
    $_$86 : while (1) {
      var $i_3;
      var $p_0;
      var $36 = HEAP8[$format + $i_3 | 0];
      do {
        if ($36 << 24 >> 24 == 0) {
          break $_$86;
        } else if ($36 << 24 >> 24 == 37) {
          var $38 = $i_3 + 1 | 0;
          var $41 = HEAP8[$format + $38 | 0] << 24 >> 24;
          if (($41 | 0) == 115) {
            var $43 = HEAP32[$args$s2];
            var $44 = $43;
            var $45 = $43 + 4 | 0;
            HEAP32[$args$s2] = $45;
            var $46 = HEAP32[$44 >> 2];
            if (($46 | 0) == 0) {
              var $p_1 = $p_0;
              var $i_5 = $38;
              break;
            }
            var $49 = _strlen($46);
            _memcpy($p_0, $46, $49, 1);
            var $p_1 = $p_0 + $49 | 0;
            var $i_5 = $38;
            break;
          } else if (($41 | 0) == 99) {
            var $52 = HEAP32[$args$s2];
            var $53 = $52;
            var $54 = $52 + 4 | 0;
            HEAP32[$args$s2] = $54;
            HEAP8[$p_0] = HEAP32[$53 >> 2] & 255;
            var $p_1 = $p_0 + 1 | 0;
            var $i_5 = $38;
            break;
          } else if (($41 | 0) == 37) {
            var $i_4 = $38;
          } else {
            var $i_4 = $i_3;
          }
          var $i_4;
          HEAP8[$p_0] = 37;
          var $p_1 = $p_0 + 1 | 0;
          var $i_5 = $i_4;
        } else {
          HEAP8[$p_0] = $36;
          var $p_1 = $p_0 + 1 | 0;
          var $i_5 = $i_3;
        }
      } while (0);
      var $i_5;
      var $p_1;
      var $p_0 = $p_1;
      var $i_3 = $i_5 + 1 | 0;
    }
    HEAP8[$p_0] = 0;
    var $_0 = $31;
  }
  var $_0;
  STACKTOP = __stackBase__;
  return $_0;
  return null;
}

_str_printf["X"] = 1;

function _get_number($sym) {
  var $1$s2;
  var $1$s2 = ($sym + 12 | 0) >> 2;
  var $2 = HEAP32[$1$s2];
  var $3 = HEAP8[$2];
  if ($3 << 24 >> 24 == 63) {
    var $6 = $2 + 1 | 0;
    HEAP32[$1$s2] = $6;
    var $sgn_0 = 1;
    var $9 = $6;
    var $8 = HEAP8[$6];
  } else {
    var $sgn_0 = 0;
    var $9 = $2;
    var $8 = $3;
  }
  var $8;
  var $9;
  var $sgn_0;
  var $10 = ($8 - 48 & 255 & 255) < 9;
  do {
    if ($10) {
      var $12 = _und_alloc($sym, 3);
      var $13 = ($sgn_0 | 0) != 0;
      if ($13) {
        HEAP8[$12] = 45;
      }
      var $18 = HEAP8[HEAP32[$1$s2]] + 1 & 255;
      HEAP8[$12 + $sgn_0 | 0] = $18;
      var $20 = $13 ? 2 : 1;
      HEAP8[$12 + $20 | 0] = 0;
      var $23 = HEAP32[$1$s2] + 1 | 0;
      HEAP32[$1$s2] = $23;
      var $_0 = $12;
    } else {
      if ($8 << 24 >> 24 == 57) {
        var $27 = _und_alloc($sym, 4);
        var $28 = ($sgn_0 | 0) != 0;
        if ($28) {
          HEAP8[$27] = 45;
        }
        HEAP8[$27 + $sgn_0 | 0] = 49;
        var $32 = $28 ? 2 : 1;
        HEAP8[$27 + $32 | 0] = 48;
        var $34 = $28 ? 3 : 2;
        HEAP8[$27 + $34 | 0] = 0;
        var $37 = HEAP32[$1$s2] + 1 | 0;
        HEAP32[$1$s2] = $37;
        var $_0 = $27;
      } else {
        if (($8 - 65 & 255 & 255) >= 16) {
          var $_0 = 0;
          break;
        }
        var $ret_06 = 0;
        var $40 = $9;
        while (1) {
          var $40;
          var $ret_06;
          var $42 = $40 + 1 | 0;
          HEAP32[$1$s2] = $42;
          var $46 = (HEAP8[$40] << 24 >> 24) + (($ret_06 << 4) - 65) | 0;
          var $47 = HEAPU8[$42];
          if (($47 - 65 & 255 & 255) >= 16) {
            break;
          }
          var $ret_06 = $46;
          var $40 = $42;
        }
        if ($47 << 24 >> 24 != 64) {
          var $_0 = 0;
          break;
        }
        var $51 = _und_alloc($sym, 17);
        var $53 = ($sgn_0 | 0) != 0 ? STRING_TABLE.__str119289 | 0 : __str120290 | 0;
        var $54 = _sprintf($51, STRING_TABLE.__str118288 | 0, (tempInt = STACKTOP, STACKTOP += 8, HEAP32[tempInt >> 2] = $53, HEAP32[tempInt + 4 >> 2] = $46, tempInt));
        var $56 = HEAP32[$1$s2] + 1 | 0;
        HEAP32[$1$s2] = $56;
        var $_0 = $51;
      }
    }
  } while (0);
  var $_0;
  return $_0;
  return null;
}

_get_number["X"] = 1;

function _str_array_push($sym, $ptr, $len, $a) {
  var $43$s2;
  var $41$s2;
  var $7$s2;
  var __label__;
  if (($ptr | 0) == 0) {
    ___assert_func(STRING_TABLE.__str72242 | 0, 212, STRING_TABLE.___func___str_array_push | 0, STRING_TABLE.__str115285 | 0);
  }
  if (($a | 0) == 0) {
    ___assert_func(STRING_TABLE.__str72242 | 0, 213, STRING_TABLE.___func___str_array_push | 0, STRING_TABLE.__str116286 | 0);
  }
  var $7$s2 = ($a + 12 | 0) >> 2;
  var $8 = HEAPU32[$7$s2];
  var $9 = ($8 | 0) == 0;
  do {
    if ($9) {
      HEAP32[$7$s2] = 32;
      var $11 = _und_alloc($sym, 128);
      if (($11 | 0) == 0) {
        var $_0 = 0;
        __label__ = 17;
        break;
      }
      HEAP32[$a + 16 >> 2] = $11;
      __label__ = 11;
      break;
    }
    if (HEAPU32[$a + 8 >> 2] >>> 0 < $8 >>> 0) {
      __label__ = 11;
      break;
    }
    var $21 = $8 << 3;
    var $22 = _und_alloc($sym, $21);
    if (($22 | 0) == 0) {
      var $_0 = 0;
      __label__ = 17;
      break;
    }
    var $25 = $22;
    var $26 = $a + 16 | 0;
    var $28 = HEAP32[$26 >> 2];
    var $30 = HEAP32[$7$s2] << 2;
    _memcpy($22, $28, $30, 1);
    var $32 = HEAP32[$7$s2] << 1;
    HEAP32[$7$s2] = $32;
    HEAP32[$26 >> 2] = $25;
    __label__ = 11;
    break;
  } while (0);
  do {
    if (__label__ == 11) {
      if (($len | 0) == -1) {
        var $36 = _strlen($ptr);
        var $_01 = $36;
      } else {
        var $_01 = $len;
      }
      var $_01;
      var $38 = _strdup($ptr);
      var $39 = $_01 + 1 | 0;
      var $40 = _und_alloc($sym, $39);
      var $41$s2 = ($a + 4 | 0) >> 2;
      var $43$s2 = ($a + 16 | 0) >> 2;
      var $45 = (HEAP32[$41$s2] << 2) + HEAP32[$43$s2] | 0;
      HEAP32[$45 >> 2] = $40;
      var $49 = HEAP32[HEAP32[$43$s2] + (HEAP32[$41$s2] << 2) >> 2];
      if (($49 | 0) == 0) {
        ___assert_func(STRING_TABLE.__str72242 | 0, 233, STRING_TABLE.___func___str_array_push | 0, STRING_TABLE.__str117287 | 0);
        var $53 = HEAP32[HEAP32[$43$s2] + (HEAP32[$41$s2] << 2) >> 2];
      } else {
        var $53 = $49;
      }
      var $53;
      _memcpy($53, $38, $_01, 1);
      _free($38);
      HEAP8[HEAP32[HEAP32[$43$s2] + (HEAP32[$41$s2] << 2) >> 2] + $39 | 0] = 0;
      var $60 = HEAP32[$41$s2] + 1 | 0;
      HEAP32[$41$s2] = $60;
      var $61 = $a + 8 | 0;
      if ($60 >>> 0 < HEAPU32[$61 >> 2] >>> 0) {
        var $_0 = 1;
        break;
      }
      HEAP32[$61 >> 2] = $60;
      var $_0 = 1;
    }
  } while (0);
  var $_0;
  return $_0;
  return null;
}

_str_array_push["X"] = 1;

function _get_args($sym, $pmt_ref, $z_term, $open_char, $close_char) {
  var $3$s2;
  var $1$s2;
  var __stackBase__ = STACKTOP;
  STACKTOP += 28;
  var __label__;
  var $ct = __stackBase__;
  var $arg_collect = __stackBase__ + 8;
  _str_array_init($arg_collect);
  var $1$s2 = ($sym + 12 | 0) >> 2;
  var $2 = ($z_term | 0) == 0;
  var $3$s2 = ($ct | 0) >> 2;
  var $4 = $ct + 4 | 0;
  $_$145 : do {
    if ($2) {
      while (1) {
        var $5 = HEAP32[$1$s2];
        var $6 = HEAP8[$5];
        if ($6 << 24 >> 24 == 0) {
          __label__ = 12;
          break $_$145;
        } else if ($6 << 24 >> 24 == 64) {
          var $_lcssa8 = $5;
          __label__ = 7;
          break $_$145;
        }
        var $18 = _demangle_datatype($sym, $ct, $pmt_ref, 1);
        if (($18 | 0) == 0) {
          var $_0 = 0;
          __label__ = 25;
          break $_$145;
        }
        var $12 = HEAP32[$3$s2];
        var $13 = HEAP32[$4 >> 2];
        var $14 = _str_printf($sym, STRING_TABLE.__str170 | 0, (tempInt = STACKTOP, STACKTOP += 8, HEAP32[tempInt >> 2] = $12, HEAP32[tempInt + 4 >> 2] = $13, tempInt));
        var $15 = _str_array_push($sym, $14, -1, $arg_collect);
        if (($15 | 0) == 0) {
          var $_0 = 0;
          __label__ = 25;
          break $_$145;
        }
        var $8 = HEAP32[$3$s2];
        var $9 = _strcmp($8, STRING_TABLE.__str110280 | 0);
        if (($9 | 0) == 0) {
          __label__ = 12;
          break $_$145;
        }
      }
    } else {
      while (1) {
        var $20 = HEAP32[$1$s2];
        var $21 = HEAP8[$20];
        if ($21 << 24 >> 24 == 0) {
          __label__ = 12;
          break $_$145;
        } else if ($21 << 24 >> 24 == 64) {
          var $_lcssa8 = $20;
          __label__ = 7;
          break $_$145;
        }
        var $24 = _demangle_datatype($sym, $ct, $pmt_ref, 1);
        if (($24 | 0) == 0) {
          var $_0 = 0;
          __label__ = 25;
          break $_$145;
        }
        var $27 = HEAP32[$3$s2];
        var $28 = _strcmp($27, STRING_TABLE.__str84254 | 0);
        if (($28 | 0) == 0) {
          __label__ = 13;
          break $_$145;
        }
        var $31 = HEAP32[$4 >> 2];
        var $32 = _str_printf($sym, STRING_TABLE.__str170 | 0, (tempInt = STACKTOP, STACKTOP += 8, HEAP32[tempInt >> 2] = $27, HEAP32[tempInt + 4 >> 2] = $31, tempInt));
        var $33 = _str_array_push($sym, $32, -1, $arg_collect);
        if (($33 | 0) == 0) {
          var $_0 = 0;
          __label__ = 25;
          break $_$145;
        }
        var $36 = HEAP32[$3$s2];
        var $37 = _strcmp($36, STRING_TABLE.__str110280 | 0);
        if (($37 | 0) == 0) {
          __label__ = 12;
          break $_$145;
        }
      }
    }
  } while (0);
  do {
    if (__label__ == 7) {
      var $_lcssa8;
      HEAP32[$1$s2] = $_lcssa8 + 1 | 0;
      __label__ = 12;
      break;
    }
  } while (0);
  do {
    if (__label__ == 12) {
      if ($2) {
        __label__ = 14;
        break;
      }
      __label__ = 13;
      break;
    }
  } while (0);
  do {
    if (__label__ == 13) {
      var $39 = HEAP32[$1$s2];
      var $40 = $39 + 1 | 0;
      HEAP32[$1$s2] = $40;
      if (HEAP8[$39] << 24 >> 24 == 90) {
        __label__ = 14;
        break;
      }
      var $_0 = 0;
      __label__ = 25;
      break;
    }
  } while (0);
  $_$163 : do {
    if (__label__ == 14) {
      var $44 = $arg_collect + 4 | 0;
      var $45 = HEAPU32[$44 >> 2];
      do {
        if (($45 | 0) == 0) {
          __label__ = 17;
        } else if (($45 | 0) == 1) {
          var $47 = $arg_collect + 16 | 0;
          var $49 = HEAP32[HEAP32[$47 >> 2] >> 2];
          var $50 = _strcmp($49, STRING_TABLE.__str84254 | 0);
          if (($50 | 0) == 0) {
            __label__ = 17;
            break;
          }
          var $_pre_phi = $47;
          __label__ = 20;
          break;
        } else {
          var $53 = $arg_collect + 16 | 0;
          if ($45 >>> 0 <= 1) {
            var $_pre_phi = $53;
            __label__ = 20;
            break;
          }
          var $args_str_01 = 0;
          var $i_02 = 1;
          while (1) {
            var $i_02;
            var $args_str_01;
            var $60 = HEAP32[HEAP32[$53 >> 2] + ($i_02 << 2) >> 2];
            var $61 = _str_printf($sym, STRING_TABLE.__str112282 | 0, (tempInt = STACKTOP, STACKTOP += 8, HEAP32[tempInt >> 2] = $args_str_01, HEAP32[tempInt + 4 >> 2] = $60, tempInt));
            var $62 = $i_02 + 1 | 0;
            if ($62 >>> 0 >= HEAPU32[$44 >> 2] >>> 0) {
              break;
            }
            var $args_str_01 = $61;
            var $i_02 = $62;
          }
          if (($61 | 0) == 0) {
            var $_pre_phi = $53;
            __label__ = 20;
            break;
          }
          var $69 = $61;
          var $args_str_0_lcssa22 = $61;
          __label__ = 21;
          break;
        }
      } while (0);
      if (__label__ == 17) {
        var $55 = $open_char << 24 >> 24;
        var $56 = $close_char << 24 >> 24;
        var $57 = _str_printf($sym, STRING_TABLE.__str111281 | 0, (tempInt = STACKTOP, STACKTOP += 8, HEAP32[tempInt >> 2] = $55, HEAP32[tempInt + 4 >> 2] = $56, tempInt));
        var $_0 = $57;
        break;
      } else if (__label__ == 20) {
        var $_pre_phi;
        var $69 = HEAP32[HEAP32[$_pre_phi >> 2] >> 2];
        var $args_str_0_lcssa22 = 0;
      }
      var $args_str_0_lcssa22;
      var $69;
      var $70 = $close_char << 24 >> 24;
      var $71 = $close_char << 24 >> 24 == 62;
      do {
        if ($71) {
          var $73 = _strlen($69);
          if (HEAP8[$69 + ($73 - 1) | 0] << 24 >> 24 != 62) {
            break;
          }
          var $79 = $open_char << 24 >> 24;
          var $82 = HEAP32[HEAP32[$arg_collect + 16 >> 2] >> 2];
          var $83 = _str_printf($sym, STRING_TABLE.__str113283 | 0, (tempInt = STACKTOP, STACKTOP += 16, HEAP32[tempInt >> 2] = $79, HEAP32[tempInt + 4 >> 2] = $82, HEAP32[tempInt + 8 >> 2] = $args_str_0_lcssa22, HEAP32[tempInt + 12 >> 2] = $70, tempInt));
          var $_0 = $83;
          break $_$163;
        }
      } while (0);
      var $84 = $open_char << 24 >> 24;
      var $87 = HEAP32[HEAP32[$arg_collect + 16 >> 2] >> 2];
      var $88 = _str_printf($sym, STRING_TABLE.__str114284 | 0, (tempInt = STACKTOP, STACKTOP += 16, HEAP32[tempInt >> 2] = $84, HEAP32[tempInt + 4 >> 2] = $87, HEAP32[tempInt + 8 >> 2] = $args_str_0_lcssa22, HEAP32[tempInt + 12 >> 2] = $70, tempInt));
      var $_0 = $88;
    }
  } while (0);
  var $_0;
  STACKTOP = __stackBase__;
  return $_0;
  return null;
}

_get_args["X"] = 1;

function _get_template_name($sym) {
  var $3$s2;
  var __stackBase__ = STACKTOP;
  STACKTOP += 20;
  var $array_pmt = __stackBase__;
  var $1 = $sym + 24 | 0;
  var $2 = HEAP32[$1 >> 2];
  var $3$s2 = ($sym + 20 | 0) >> 2;
  var $4 = HEAP32[$3$s2];
  var $5 = $sym + 44 | 0;
  var $6 = HEAP32[$5 >> 2];
  HEAP32[$3$s2] = $2;
  var $7 = _get_literal_string($sym);
  if (($7 | 0) == 0) {
    var $_0 = 0;
  } else {
    _str_array_init($array_pmt);
    var $10 = _get_args($sym, $array_pmt, 0, 60, 62);
    if (($10 | 0) == 0) {
      var $name_0 = $7;
    } else {
      var $13 = _str_printf($sym, STRING_TABLE.__str170 | 0, (tempInt = STACKTOP, STACKTOP += 8, HEAP32[tempInt >> 2] = $7, HEAP32[tempInt + 4 >> 2] = $10, tempInt));
      var $name_0 = $13;
    }
    var $name_0;
    HEAP32[$1 >> 2] = $2;
    HEAP32[$3$s2] = $4;
    HEAP32[$5 >> 2] = $6;
    var $_0 = $name_0;
  }
  var $_0;
  STACKTOP = __stackBase__;
  return $_0;
  return null;
}

function _get_calling_convention($ch, $call_conv, $exported, $flags) {
  var $call_conv$s2 = $call_conv >> 2;
  var __label__;
  HEAP32[$exported >> 2] = 0;
  HEAP32[$call_conv$s2] = 0;
  var $2 = ($flags & 18 | 0) == 0;
  do {
    if ($2) {
      var $6 = $ch << 24 >> 24;
      var $9 = (($6 - 65) % 2 | 0) == 1;
      if (($flags & 1 | 0) == 0) {
        if ($9) {
          HEAP32[$exported >> 2] = STRING_TABLE.__str95265 | 0;
        } else {
          __label__ = 14;
        }
        if (($6 | 0) == 65 || ($6 | 0) == 66) {
          HEAP32[$call_conv$s2] = STRING_TABLE.__str96266 | 0;
          __label__ = 21;
          break;
        } else if (($6 | 0) == 67 || ($6 | 0) == 68) {
          HEAP32[$call_conv$s2] = STRING_TABLE.__str97267 | 0;
          __label__ = 21;
          break;
        } else if (($6 | 0) == 69 || ($6 | 0) == 70) {
          HEAP32[$call_conv$s2] = STRING_TABLE.__str98268 | 0;
          __label__ = 21;
          break;
        } else if (($6 | 0) == 71 || ($6 | 0) == 72) {
          HEAP32[$call_conv$s2] = STRING_TABLE.__str99269 | 0;
          __label__ = 21;
          break;
        } else if (($6 | 0) == 73 || ($6 | 0) == 74) {
          HEAP32[$call_conv$s2] = STRING_TABLE.__str100270 | 0;
          __label__ = 21;
          break;
        } else if (($6 | 0) == 75 || ($6 | 0) == 76) {
          __label__ = 21;
          break;
        } else if (($6 | 0) == 77) {
          HEAP32[$call_conv$s2] = STRING_TABLE.__str101271 | 0;
          __label__ = 21;
          break;
        } else {
          var $_0 = 0;
          __label__ = 22;
          break;
        }
      } else {
        if ($9) {
          HEAP32[$exported >> 2] = STRING_TABLE.__str88258 | 0;
        } else {
          __label__ = 5;
        }
        if (($6 | 0) == 65 || ($6 | 0) == 66) {
          HEAP32[$call_conv$s2] = STRING_TABLE.__str89259 | 0;
          __label__ = 21;
          break;
        } else if (($6 | 0) == 67 || ($6 | 0) == 68) {
          HEAP32[$call_conv$s2] = STRING_TABLE.__str90260 | 0;
          __label__ = 21;
          break;
        } else if (($6 | 0) == 69 || ($6 | 0) == 70) {
          HEAP32[$call_conv$s2] = STRING_TABLE.__str91261 | 0;
          __label__ = 21;
          break;
        } else if (($6 | 0) == 71 || ($6 | 0) == 72) {
          HEAP32[$call_conv$s2] = STRING_TABLE.__str92262 | 0;
          __label__ = 21;
          break;
        } else if (($6 | 0) == 73 || ($6 | 0) == 74) {
          HEAP32[$call_conv$s2] = STRING_TABLE.__str93263 | 0;
          __label__ = 21;
          break;
        } else if (($6 | 0) == 75 || ($6 | 0) == 76) {
          __label__ = 21;
          break;
        } else if (($6 | 0) == 77) {
          HEAP32[$call_conv$s2] = STRING_TABLE.__str94264 | 0;
          __label__ = 21;
          break;
        } else {
          var $_0 = 0;
          __label__ = 22;
          break;
        }
      }
    } else {
      __label__ = 21;
    }
  } while (0);
  if (__label__ == 21) {
    var $_0 = 1;
  }
  var $_0;
  return $_0;
  return null;
}

function _get_modifier($sym, $ret, $ptr_modif) {
  var $1$s2;
  HEAP32[$ptr_modif >> 2] = 0;
  var $1$s2 = ($sym + 12 | 0) >> 2;
  var $2 = HEAP32[$1$s2];
  if (HEAP8[$2] << 24 >> 24 == 69) {
    HEAP32[$ptr_modif >> 2] = STRING_TABLE.__str102272 | 0;
    var $7 = HEAP32[$1$s2] + 1 | 0;
    HEAP32[$1$s2] = $7;
    var $9 = $7;
  } else {
    var $9 = $2;
  }
  var $9;
  HEAP32[$1$s2] = $9 + 1 | 0;
  var $12 = HEAP8[$9] << 24 >> 24;
  if (($12 | 0) == 65) {
    HEAP32[$ret >> 2] = 0;
    var $_0 = 1;
  } else if (($12 | 0) == 66) {
    HEAP32[$ret >> 2] = STRING_TABLE.__str103273 | 0;
    var $_0 = 1;
  } else if (($12 | 0) == 67) {
    HEAP32[$ret >> 2] = STRING_TABLE.__str104274 | 0;
    var $_0 = 1;
  } else if (($12 | 0) == 68) {
    HEAP32[$ret >> 2] = STRING_TABLE.__str105275 | 0;
    var $_0 = 1;
  } else {
    var $_0 = 0;
  }
  var $_0;
  return $_0;
  return null;
}

function _get_class($sym) {
  var $1$s2;
  var __label__;
  var $1$s2 = ($sym + 12 | 0) >> 2;
  var $2 = $sym + 40 | 0;
  var $3 = $sym + 20 | 0;
  var $_06 = $2 | 0;
  var $_18 = $sym + 44 | 0;
  var $_210 = $sym + 48 | 0;
  var $_312 = $sym + 52 | 0;
  var $_414 = $sym + 56 | 0;
  var $4 = $sym + 20 | 0;
  var $5 = $sym + 24 | 0;
  var $6 = $sym + 16 | 0;
  var $name_0 = 0;
  $_$2 : while (1) {
    var $name_0;
    var $8 = HEAP32[$1$s2];
    var $9 = HEAP8[$8];
    if ($9 << 24 >> 24 == 64) {
      var $51 = $8 + 1 | 0;
      HEAP32[$1$s2] = $51;
      var $_0 = 1;
      break;
    }
    var $12 = $9 << 24 >> 24;
    do {
      if (($12 | 0) == 0) {
        var $_0 = 0;
        break $_$2;
      } else if (($12 | 0) == 48 || ($12 | 0) == 49 || ($12 | 0) == 50 || ($12 | 0) == 51 || ($12 | 0) == 52 || ($12 | 0) == 53 || ($12 | 0) == 54 || ($12 | 0) == 55 || ($12 | 0) == 56 || ($12 | 0) == 57) {
        var $14 = $8 + 1 | 0;
        HEAP32[$1$s2] = $14;
        var $17 = (HEAP8[$8] << 24 >> 24) - 48 | 0;
        var $18 = _str_array_get_ref($3, $17);
        var $name_2 = $18;
        __label__ = 14;
        break;
      } else if (($12 | 0) == 63) {
        var $20 = $8 + 1 | 0;
        HEAP32[$1$s2] = $20;
        var $22 = HEAP8[$20] << 24 >> 24;
        if (($22 | 0) == 36) {
          var $24 = $8 + 2 | 0;
          HEAP32[$1$s2] = $24;
          var $25 = _get_template_name($sym);
          if (($25 | 0) == 0) {
            var $_0 = 0;
            break $_$2;
          }
          var $28 = _str_array_push($sym, $25, -1, $3);
          if (($28 | 0) == 0) {
            var $_0 = 0;
            break $_$2;
          }
          var $name_217 = $25;
          __label__ = 15;
          break;
        } else if (($22 | 0) == 63) {
          var $tmp7 = HEAP32[$_06 >> 2];
          var $tmp9 = HEAP32[$_18 >> 2];
          var $tmp11 = HEAP32[$_210 >> 2];
          var $tmp13 = HEAP32[$_312 >> 2];
          var $tmp15 = HEAP32[$_414 >> 2];
          var $31 = HEAP32[$4 >> 2];
          var $32 = HEAP32[$5 >> 2];
          _str_array_init($2);
          var $33 = _symbol_demangle($sym);
          if (($33 | 0) == 0) {
            var $name_1 = $name_0;
          } else {
            var $36 = HEAP32[$6 >> 2];
            var $37 = _str_printf($sym, STRING_TABLE.__str109279 | 0, (tempInt = STACKTOP, STACKTOP += 4, HEAP32[tempInt >> 2] = $36, tempInt));
            var $name_1 = $37;
          }
          var $name_1;
          HEAP32[$4 >> 2] = $31;
          HEAP32[$5 >> 2] = $32;
          HEAP32[$_06 >> 2] = $tmp7;
          HEAP32[$_18 >> 2] = $tmp9;
          HEAP32[$_210 >> 2] = $tmp11;
          HEAP32[$_312 >> 2] = $tmp13;
          HEAP32[$_414 >> 2] = $tmp15;
          var $name_2 = $name_1;
          __label__ = 14;
          break;
        } else {
          var $40 = _get_number($sym);
          if (($40 | 0) == 0) {
            var $_0 = 0;
            break $_$2;
          }
          var $43 = _str_printf($sym, STRING_TABLE.__str109279 | 0, (tempInt = STACKTOP, STACKTOP += 4, HEAP32[tempInt >> 2] = $40, tempInt));
          var $name_2 = $43;
          __label__ = 14;
          break;
        }
      } else {
        var $45 = _get_literal_string($sym);
        var $name_2 = $45;
        __label__ = 14;
        break;
      }
    } while (0);
    if (__label__ == 14) {
      var $name_2;
      if (($name_2 | 0) == 0) {
        var $_0 = 0;
        break;
      }
      var $name_217 = $name_2;
    }
    var $name_217;
    var $48 = _str_array_push($sym, $name_217, -1, $2);
    if (($48 | 0) == 0) {
      var $_0 = 0;
      break;
    }
    var $name_0 = $name_217;
  }
  var $_0;
  return $_0;
  return null;
}

_get_class["X"] = 1;

function _handle_data($sym) {
  var $_pre_phi$s2;
  var $ct$s2;
  var $modifier$s2;
  var __stackBase__ = STACKTOP;
  STACKTOP += 36;
  var __label__;
  var $modifier = __stackBase__, $modifier$s2 = $modifier >> 2;
  var $ptr_modif = __stackBase__ + 4;
  var $ct = __stackBase__ + 8, $ct$s2 = $ct >> 2;
  var $pmt = __stackBase__ + 16;
  HEAP32[$modifier$s2] = 0;
  var $1 = $sym | 0;
  var $2 = HEAP32[$1 >> 2];
  var $4 = ($2 & 128 | 0) == 0;
  var $5 = $sym + 12 | 0;
  do {
    if ($4) {
      var $9 = HEAP8[HEAP32[$5 >> 2]] << 24 >> 24;
      if (($9 | 0) == 48) {
        var $access_0 = STRING_TABLE.__str76246 | 0;
        var $_pre_phi = $5, $_pre_phi$s2 = $_pre_phi >> 2;
      } else if (($9 | 0) == 49) {
        var $access_0 = STRING_TABLE.__str77247 | 0;
        var $_pre_phi = $5, $_pre_phi$s2 = $_pre_phi >> 2;
      } else if (($9 | 0) == 50) {
        var $access_0 = STRING_TABLE.__str78248 | 0;
        var $_pre_phi = $5, $_pre_phi$s2 = $_pre_phi >> 2;
      } else {
        var $access_0 = 0;
        var $_pre_phi = $5, $_pre_phi$s2 = $_pre_phi >> 2;
        break;
      }
    } else {
      var $access_0 = 0;
      var $_pre_phi = $5, $_pre_phi$s2 = $_pre_phi >> 2;
    }
  } while (0);
  var $_pre_phi;
  var $access_0;
  var $14 = ($2 & 512 | 0) == 0;
  do {
    if ($14) {
      if ((HEAP8[HEAP32[$_pre_phi$s2]] - 48 & 255 & 255) >= 3) {
        var $member_type_0 = 0;
        break;
      }
      var $member_type_0 = STRING_TABLE.__str79249 | 0;
    } else {
      var $member_type_0 = 0;
    }
  } while (0);
  var $member_type_0;
  var $20 = _get_class_string($sym, 0);
  var $21 = HEAP32[$_pre_phi$s2];
  var $22 = $21 + 1 | 0;
  HEAP32[$_pre_phi$s2] = $22;
  var $24 = HEAP8[$21] << 24 >> 24;
  do {
    if (($24 | 0) == 48 || ($24 | 0) == 49 || ($24 | 0) == 50 || ($24 | 0) == 51 || ($24 | 0) == 52 || ($24 | 0) == 53) {
      var $26 = $sym + 44 | 0;
      var $27 = HEAP32[$26 >> 2];
      _str_array_init($pmt);
      var $28 = _demangle_datatype($sym, $ct, $pmt, 0);
      if (($28 | 0) == 0) {
        var $ret_0 = 0;
        __label__ = 28;
        break;
      }
      var $31 = _get_modifier($sym, $modifier, $ptr_modif);
      if (($31 | 0) == 0) {
        var $ret_0 = 0;
        __label__ = 28;
        break;
      }
      var $34 = HEAP32[$modifier$s2];
      var $35 = ($34 | 0) == 0;
      var $_pre = HEAP32[$ptr_modif >> 2];
      do {
        if ($35) {
          HEAP32[$modifier$s2] = $_pre;
        } else {
          if (($_pre | 0) == 0) {
            break;
          }
          var $39 = _str_printf($sym, STRING_TABLE.__str83253 | 0, (tempInt = STACKTOP, STACKTOP += 8, HEAP32[tempInt >> 2] = $34, HEAP32[tempInt + 4 >> 2] = $_pre, tempInt));
          HEAP32[$modifier$s2] = $39;
        }
      } while (0);
      HEAP32[$26 >> 2] = $27;
      __label__ = 22;
      break;
    } else if (($24 | 0) == 54 || ($24 | 0) == 55) {
      var $42 = $ct + 4 | 0;
      HEAP32[$42 >> 2] = 0;
      HEAP32[$ct$s2] = 0;
      var $44 = _get_modifier($sym, $modifier, $ptr_modif);
      if (($44 | 0) == 0) {
        var $ret_0 = 0;
        __label__ = 28;
        break;
      }
      if (HEAP8[HEAP32[$_pre_phi$s2]] << 24 >> 24 == 64) {
        __label__ = 22;
        break;
      }
      var $51 = _get_class_name($sym);
      if (($51 | 0) == 0) {
        var $ret_0 = 0;
        __label__ = 28;
        break;
      }
      var $54 = _str_printf($sym, STRING_TABLE.__str107277 | 0, (tempInt = STACKTOP, STACKTOP += 4, HEAP32[tempInt >> 2] = $51, tempInt));
      HEAP32[$42 >> 2] = $54;
      __label__ = 22;
      break;
    } else if (($24 | 0) == 56 || ($24 | 0) == 57) {
      HEAP32[$ct$s2 + 1] = 0;
      HEAP32[$ct$s2] = 0;
      HEAP32[$modifier$s2] = 0;
      __label__ = 22;
      break;
    } else {
      var $ret_0 = 0;
      __label__ = 28;
    }
  } while (0);
  if (__label__ == 22) {
    var $61 = (HEAP32[$1 >> 2] & 4096 | 0) == 0;
    do {
      if ($61) {
        var $_pre5 = HEAP32[$ct$s2];
        var $_pre6 = HEAP32[$modifier$s2];
        if (($_pre6 | 0) == 0) {
          var $67 = $_pre5;
          __label__ = 26;
          break;
        }
        var $phitmp = ($_pre5 | 0) != 0 ? STRING_TABLE.__str87257 | 0 : 0;
        var $72 = STRING_TABLE.__str87257 | 0;
        var $71 = $_pre6;
        var $70 = $phitmp;
        var $69 = $_pre5;
        __label__ = 27;
        break;
      }
      HEAP32[$modifier$s2] = 0;
      HEAP32[$ct$s2 + 1] = 0;
      HEAP32[$ct$s2] = 0;
      var $67 = 0;
      __label__ = 26;
      break;
    } while (0);
    if (__label__ == 26) {
      var $67;
      var $phitmp1_pre = ($67 | 0) != 0 ? STRING_TABLE.__str87257 | 0 : 0;
      var $72 = $phitmp1_pre;
      var $71 = 0;
      var $70 = 0;
      var $69 = $67;
    }
    var $69;
    var $70;
    var $71;
    var $72;
    var $74 = HEAP32[$ct$s2 + 1];
    var $75 = _str_printf($sym, STRING_TABLE.__str108278 | 0, (tempInt = STACKTOP, STACKTOP += 32, HEAP32[tempInt >> 2] = $access_0, HEAP32[tempInt + 4 >> 2] = $member_type_0, HEAP32[tempInt + 8 >> 2] = $69, HEAP32[tempInt + 12 >> 2] = $70, HEAP32[tempInt + 16 >> 2] = $71, HEAP32[tempInt + 20 >> 2] = $72, HEAP32[tempInt + 24 >> 2] = $20, HEAP32[tempInt + 28 >> 2] = $74, tempInt));
    HEAP32[$sym + 16 >> 2] = $75;
    var $ret_0 = 1;
  }
  var $ret_0;
  STACKTOP = __stackBase__;
  return $ret_0;
  return null;
}

_handle_data["X"] = 1;

function _handle_method($sym, $cast_op) {
  var $8$s2;
  var $1$s2;
  var $modifier$s2;
  var $ct_ret$s2;
  var __stackBase__ = STACKTOP;
  STACKTOP += 44;
  var __label__;
  var $ct_ret = __stackBase__, $ct_ret$s2 = $ct_ret >> 2;
  var $call_conv = __stackBase__ + 8;
  var $modifier = __stackBase__ + 12, $modifier$s2 = $modifier >> 2;
  var $exported = __stackBase__ + 16;
  var $array_pmt = __stackBase__ + 20;
  var $ptr_modif = __stackBase__ + 40;
  HEAP32[$modifier$s2] = 0;
  var $1$s2 = ($sym + 12 | 0) >> 2;
  var $2 = HEAP32[$1$s2];
  var $3 = $2 + 1 | 0;
  HEAP32[$1$s2] = $3;
  var $4 = HEAPU8[$2];
  var $5 = $4 << 24 >> 24;
  var $6 = ($4 - 65 & 255 & 255) > 25;
  $_$61 : do {
    if ($6) {
      var $ret_0 = 0;
    } else {
      var $8$s2 = ($sym | 0) >> 2;
      var $9 = HEAPU32[$8$s2];
      var $11 = ($9 & 128 | 0) == 0;
      var $12 = $5 - 65 | 0;
      do {
        if ($11) {
          var $14 = $12 / 8 | 0;
          if (($14 | 0) == 0) {
            var $access_0 = STRING_TABLE.__str76246 | 0;
            var $_pre_phi = $12;
          } else if (($14 | 0) == 1) {
            var $access_0 = STRING_TABLE.__str77247 | 0;
            var $_pre_phi = $12;
          } else if (($14 | 0) == 2) {
            var $access_0 = STRING_TABLE.__str78248 | 0;
            var $_pre_phi = $12;
          } else {
            var $access_0 = 0;
            var $_pre_phi = $12;
            break;
          }
        } else {
          var $access_0 = 0;
          var $_pre_phi = $12;
        }
      } while (0);
      var $_pre_phi;
      var $access_0;
      var $or_cond1 = ($9 & 512 | 0) == 0 & $4 << 24 >> 24 < 89;
      var $21 = ($_pre_phi | 0) % 8;
      do {
        if ($or_cond1) {
          if (($21 | 0) == 2 || ($21 | 0) == 3) {
            var $access_1 = $access_0;
            var $member_type_0 = STRING_TABLE.__str79249 | 0;
          } else if (($21 | 0) == 4 || ($21 | 0) == 5) {
            var $access_1 = $access_0;
            var $member_type_0 = STRING_TABLE.__str80250 | 0;
          } else if (($21 | 0) == 6 || ($21 | 0) == 7) {
            var $26 = _str_printf($sym, STRING_TABLE.__str81251 | 0, (tempInt = STACKTOP, STACKTOP += 4, HEAP32[tempInt >> 2] = $access_0, tempInt));
            var $access_1 = $26;
            var $member_type_0 = STRING_TABLE.__str80250 | 0;
          } else {
            var $access_1 = $access_0;
            var $member_type_0 = 0;
            break;
          }
        } else {
          var $access_1 = $access_0;
          var $member_type_0 = 0;
        }
      } while (0);
      var $member_type_0;
      var $access_1;
      var $27 = _get_class_string($sym, 0);
      var $28 = ($21 | 0) == 6;
      do {
        if ($28) {
          __label__ = 14;
        } else {
          if ((($5 - 56) % 8 | 0) == 7) {
            __label__ = 14;
            break;
          }
          var $name_0 = $27;
          __label__ = 15;
          break;
        }
      } while (0);
      if (__label__ == 14) {
        var $34 = _get_number($sym);
        var $35 = _str_printf($sym, STRING_TABLE.__str82252 | 0, (tempInt = STACKTOP, STACKTOP += 8, HEAP32[tempInt >> 2] = $27, HEAP32[tempInt + 4 >> 2] = $34, tempInt));
        var $name_0 = $35;
      }
      var $name_0;
      var $37 = $4 << 24 >> 24 > 88;
      do {
        if ($37) {
          var $48 = 0;
        } else {
          if (($21 - 2 | 0) >>> 0 < 2) {
            var $48 = 0;
            break;
          }
          var $39 = _get_modifier($sym, $modifier, $ptr_modif);
          if (($39 | 0) == 0) {
            var $ret_0 = 0;
            break $_$61;
          }
          var $42 = HEAPU32[$modifier$s2];
          var $44 = HEAP32[$ptr_modif >> 2];
          if (($42 | 0) == 0 & ($44 | 0) == 0) {
            var $48 = 0;
            break;
          }
          var $46 = _str_printf($sym, STRING_TABLE.__str83253 | 0, (tempInt = STACKTOP, STACKTOP += 8, HEAP32[tempInt >> 2] = $42, HEAP32[tempInt + 4 >> 2] = $44, tempInt));
          HEAP32[$modifier$s2] = $46;
          var $48 = $46;
        }
      } while (0);
      var $48;
      var $49 = HEAP32[$1$s2];
      var $50 = $49 + 1 | 0;
      HEAP32[$1$s2] = $50;
      var $51 = HEAP8[$49];
      var $52 = HEAP32[$8$s2];
      var $53 = _get_calling_convention($51, $call_conv, $exported, $52);
      if (($53 | 0) == 0) {
        var $ret_0 = 0;
        break;
      }
      _str_array_init($array_pmt);
      var $56 = HEAP32[$1$s2];
      if (HEAP8[$56] << 24 >> 24 == 64) {
        HEAP32[$ct_ret$s2] = STRING_TABLE.__str84254 | 0;
        HEAP32[$ct_ret$s2 + 1] = 0;
        var $62 = $56 + 1 | 0;
        HEAP32[$1$s2] = $62;
      } else {
        var $64 = _demangle_datatype($sym, $ct_ret, $array_pmt, 0);
        if (($64 | 0) == 0) {
          var $ret_0 = 0;
          break;
        }
      }
      if ((HEAP32[$8$s2] & 4 | 0) != 0) {
        HEAP32[$ct_ret$s2 + 1] = 0;
        HEAP32[$ct_ret$s2] = 0;
      }
      if (($cast_op | 0) == 0) {
        var $name_1 = $name_0;
      } else {
        var $76 = $ct_ret | 0;
        var $77 = HEAP32[$76 >> 2];
        var $78 = $ct_ret + 4 | 0;
        var $79 = HEAP32[$78 >> 2];
        var $80 = _str_printf($sym, STRING_TABLE.__str85255 | 0, (tempInt = STACKTOP, STACKTOP += 12, HEAP32[tempInt >> 2] = $name_0, HEAP32[tempInt + 4 >> 2] = $77, HEAP32[tempInt + 8 >> 2] = $79, tempInt));
        HEAP32[$78 >> 2] = 0;
        HEAP32[$76 >> 2] = 0;
        var $name_1 = $80;
      }
      var $name_1;
      var $82 = $sym + 44 | 0;
      var $83 = HEAP32[$82 >> 2];
      var $84 = _get_args($sym, $array_pmt, 1, 40, 41);
      if (($84 | 0) == 0) {
        var $ret_0 = 0;
        break;
      }
      if ((HEAP32[$8$s2] & 4096 | 0) == 0) {
        var $args_str_0 = $84;
        var $92 = $48;
      } else {
        HEAP32[$modifier$s2] = 0;
        var $args_str_0 = 0;
        var $92 = 0;
      }
      var $92;
      var $args_str_0;
      HEAP32[$82 >> 2] = $83;
      var $94 = HEAP32[$ct_ret$s2];
      var $_pre = HEAP32[$ct_ret$s2 + 1];
      if (($94 | 0) == 0) {
        var $98 = 0;
      } else {
        var $phitmp = ($_pre | 0) != 0 ? 0 : STRING_TABLE.__str87257 | 0;
        var $98 = $phitmp;
      }
      var $98;
      var $99 = HEAP32[$call_conv >> 2];
      var $101 = ($99 | 0) != 0 ? STRING_TABLE.__str87257 | 0 : 0;
      var $102 = HEAP32[$exported >> 2];
      var $103 = _str_printf($sym, STRING_TABLE.__str86256 | 0, (tempInt = STACKTOP, STACKTOP += 44, HEAP32[tempInt >> 2] = $access_1, HEAP32[tempInt + 4 >> 2] = $member_type_0, HEAP32[tempInt + 8 >> 2] = $94, HEAP32[tempInt + 12 >> 2] = $98, HEAP32[tempInt + 16 >> 2] = $99, HEAP32[tempInt + 20 >> 2] = $101, HEAP32[tempInt + 24 >> 2] = $102, HEAP32[tempInt + 28 >> 2] = $name_1, HEAP32[tempInt + 32 >> 2] = $args_str_0, HEAP32[tempInt + 36 >> 2] = $92, HEAP32[tempInt + 40 >> 2] = $_pre, tempInt));
      HEAP32[$sym + 16 >> 2] = $103;
      var $ret_0 = 1;
    }
  } while (0);
  var $ret_0;
  STACKTOP = __stackBase__;
  return $ret_0;
  return null;
}

_handle_method["X"] = 1;

function _handle_template($sym) {
  var $1$s2;
  var $1$s2 = ($sym + 12 | 0) >> 2;
  var $2 = HEAP32[$1$s2];
  if (HEAP8[$2] << 24 >> 24 == 36) {
    var $7 = $2;
  } else {
    ___assert_func(STRING_TABLE.__str72242 | 0, 1252, STRING_TABLE.___func___handle_template | 0, STRING_TABLE.__str74244 | 0);
    var $7 = HEAP32[$1$s2];
  }
  var $7;
  HEAP32[$1$s2] = $7 + 1 | 0;
  var $9 = _get_literal_string($sym);
  var $10 = ($9 | 0) == 0;
  do {
    if ($10) {
      var $_0 = 0;
    } else {
      var $12 = _get_args($sym, 0, 0, 60, 62);
      if (($12 | 0) == 0) {
        var $_0 = 0;
        break;
      }
      var $15 = _str_printf($sym, STRING_TABLE.__str170 | 0, (tempInt = STACKTOP, STACKTOP += 8, HEAP32[tempInt >> 2] = $9, HEAP32[tempInt + 4 >> 2] = $12, tempInt));
      HEAP32[$sym + 16 >> 2] = $15;
      var $_0 = 1;
    }
  } while (0);
  var $_0;
  return $_0;
  return null;
}

function _get_literal_string($sym) {
  var $1$s2;
  var $1$s2 = ($sym + 12 | 0) >> 2;
  var $2 = HEAPU32[$1$s2];
  var $5 = $2;
  var $4 = HEAP8[$2];
  while (1) {
    var $4;
    var $5;
    if (!(($4 - 65 & 255 & 255) < 26 | ($4 - 97 & 255 & 255) < 26 | ($4 - 48 & 255 & 255) < 10)) {
      if (!($4 << 24 >> 24 == 95 || $4 << 24 >> 24 == 36)) {
        var $_0 = 0;
        break;
      }
    }
    var $11 = $5 + 1 | 0;
    HEAP32[$1$s2] = $11;
    var $12 = HEAPU8[$11];
    if ($12 << 24 >> 24 != 64) {
      var $5 = $11;
      var $4 = $12;
      continue;
    }
    HEAP32[$1$s2] = $5 + 2 | 0;
    var $18 = $11 - $2 | 0;
    var $19 = $sym + 20 | 0;
    var $20 = _str_array_push($sym, $2, $18, $19);
    if (($20 | 0) == 0) {
      var $_0 = 0;
      break;
    }
    var $28 = HEAP32[$sym + 24 >> 2] - 1 - HEAP32[$19 >> 2] | 0;
    var $29 = _str_array_get_ref($19, $28);
    var $_0 = $29;
    break;
  }
  var $_0;
  return $_0;
  return null;
}

function _str_array_get_ref($cref, $idx) {
  if (($cref | 0) == 0) {
    ___assert_func(STRING_TABLE.__str72242 | 0, 263, STRING_TABLE.___func___str_array_get_ref | 0, STRING_TABLE.__str75245 | 0);
  }
  var $6 = HEAP32[$cref >> 2] + $idx | 0;
  if ($6 >>> 0 < HEAPU32[$cref + 8 >> 2] >>> 0) {
    var $_0 = HEAP32[HEAP32[$cref + 16 >> 2] + ($6 << 2) >> 2];
  } else {
    var $_0 = 0;
  }
  var $_0;
  return $_0;
  return null;
}

function _get_class_string($sym, $start) {
  var $1$s2;
  var $1$s2 = ($sym + 44 | 0) >> 2;
  var $2 = HEAPU32[$1$s2];
  if ($2 >>> 0 > $start >>> 0) {
    var $4 = $sym + 56 | 0;
    var $i_04 = $start;
    var $len_05 = 0;
    var $7 = HEAP32[$4 >> 2];
    var $6 = $2;
    while (1) {
      var $6;
      var $7;
      var $len_05;
      var $i_04;
      var $9 = HEAPU32[$7 + ($i_04 << 2) >> 2];
      if (($9 | 0) == 0) {
        ___assert_func(STRING_TABLE.__str72242 | 0, 680, STRING_TABLE.___func___get_class_string | 0, STRING_TABLE.__str106276 | 0);
        var $_pre11 = HEAP32[$4 >> 2];
        var $15 = $_pre11;
        var $14 = HEAP32[$_pre11 + ($i_04 << 2) >> 2];
        var $13 = HEAP32[$1$s2];
      } else {
        var $15 = $7;
        var $14 = $9;
        var $13 = $6;
      }
      var $13;
      var $14;
      var $15;
      var $16 = _strlen($14);
      var $18 = $16 + ($len_05 + 2) | 0;
      var $19 = $i_04 + 1 | 0;
      if ($19 >>> 0 >= $13 >>> 0) {
        break;
      }
      var $i_04 = $19;
      var $len_05 = $18;
      var $7 = $15;
      var $6 = $13;
    }
    var $len_0_lcssa = $18 - 1 | 0;
  } else {
    var $len_0_lcssa = -1;
  }
  var $len_0_lcssa;
  var $22 = _und_alloc($sym, $len_0_lcssa);
  if (($22 | 0) == 0) {
    var $_0 = 0;
  } else {
    var $i_11 = HEAP32[$1$s2] - 1 | 0;
    var $26 = ($i_11 | 0) < ($start | 0);
    $_$143 : do {
      if ($26) {
        var $len_1_lcssa = 0;
      } else {
        var $27 = $sym + 56 | 0;
        var $len_12 = 0;
        var $i_13 = $i_11;
        while (1) {
          var $i_13;
          var $len_12;
          var $31 = HEAP32[HEAP32[$27 >> 2] + ($i_13 << 2) >> 2];
          var $32 = _strlen($31);
          var $33 = $22 + $len_12 | 0;
          _memcpy($33, $31, $32, 1);
          var $34 = $32 + $len_12 | 0;
          if (($i_13 | 0) > ($start | 0)) {
            var $38 = $34 + 1 | 0;
            HEAP8[$22 + $34 | 0] = 58;
            var $40 = $34 + 2 | 0;
            HEAP8[$22 + $38 | 0] = 58;
            var $len_1_be = $40;
          } else {
            var $len_1_be = $34;
          }
          var $len_1_be;
          var $i_1 = $i_13 - 1 | 0;
          if (($i_1 | 0) < ($start | 0)) {
            var $len_1_lcssa = $len_1_be;
            break $_$143;
          }
          var $len_12 = $len_1_be;
          var $i_13 = $i_1;
        }
      }
    } while (0);
    var $len_1_lcssa;
    HEAP8[$22 + $len_1_lcssa | 0] = 0;
    var $_0 = $22;
  }
  var $_0;
  return $_0;
  return null;
}

_get_class_string["X"] = 1;

function _und_alloc($sym, $len) {
  var $15$s2;
  var $1 = $len >>> 0 > 1020;
  do {
    if ($1) {
      var $4 = HEAP32[$sym + 4 >> 2];
      var $5 = $len + 4 | 0;
      var $6 = FUNCTION_TABLE[$4]($5);
      if (($6 | 0) == 0) {
        var $_0 = 0;
        break;
      }
      var $9 = $sym + 60 | 0;
      var $10 = HEAP32[$9 >> 2];
      var $11 = $6;
      HEAP32[$11 >> 2] = $10;
      HEAP32[$9 >> 2] = $6;
      HEAP32[$sym + 64 >> 2] = 0;
      var $_0 = $6 + 4 | 0;
    } else {
      var $15$s2 = ($sym + 64 | 0) >> 2;
      var $16 = HEAPU32[$15$s2];
      if ($16 >>> 0 < $len >>> 0) {
        var $20 = HEAP32[$sym + 4 >> 2];
        var $21 = FUNCTION_TABLE[$20](1024);
        if (($21 | 0) == 0) {
          var $_0 = 0;
          break;
        }
        var $24 = $sym + 60 | 0;
        var $25 = HEAP32[$24 >> 2];
        var $26 = $21;
        HEAP32[$26 >> 2] = $25;
        HEAP32[$24 >> 2] = $21;
        HEAP32[$15$s2] = 1020;
        var $29 = 1020;
        var $28 = $21;
      } else {
        var $29 = $16;
        var $28 = HEAP32[$sym + 60 >> 2];
      }
      var $28;
      var $29;
      HEAP32[$15$s2] = $29 - $len | 0;
      var $_0 = $28 + (1024 - $29) | 0;
    }
  } while (0);
  var $_0;
  return $_0;
  return null;
}

function _get_extended_type($c) {
  var $1 = $c << 24 >> 24;
  if (($1 | 0) == 68) {
    var $type_string_0 = STRING_TABLE.__str157327 | 0;
  } else if (($1 | 0) == 69) {
    var $type_string_0 = STRING_TABLE.__str158328 | 0;
  } else if (($1 | 0) == 70) {
    var $type_string_0 = STRING_TABLE.__str159329 | 0;
  } else if (($1 | 0) == 71) {
    var $type_string_0 = STRING_TABLE.__str160330 | 0;
  } else if (($1 | 0) == 72) {
    var $type_string_0 = STRING_TABLE.__str161331 | 0;
  } else if (($1 | 0) == 73) {
    var $type_string_0 = STRING_TABLE.__str162332 | 0;
  } else if (($1 | 0) == 74) {
    var $type_string_0 = STRING_TABLE.__str163333 | 0;
  } else if (($1 | 0) == 75) {
    var $type_string_0 = STRING_TABLE.__str164334 | 0;
  } else if (($1 | 0) == 76) {
    var $type_string_0 = STRING_TABLE.__str165335 | 0;
  } else if (($1 | 0) == 77) {
    var $type_string_0 = STRING_TABLE.__str166336 | 0;
  } else if (($1 | 0) == 78) {
    var $type_string_0 = STRING_TABLE.__str167337 | 0;
  } else if (($1 | 0) == 87) {
    var $type_string_0 = STRING_TABLE.__str168338 | 0;
  } else {
    var $type_string_0 = 0;
  }
  var $type_string_0;
  return $type_string_0;
  return null;
}

function _get_simple_type($c) {
  var $1 = $c << 24 >> 24;
  if (($1 | 0) == 67) {
    var $type_string_0 = STRING_TABLE.__str145315 | 0;
  } else if (($1 | 0) == 68) {
    var $type_string_0 = STRING_TABLE.__str146316 | 0;
  } else if (($1 | 0) == 69) {
    var $type_string_0 = STRING_TABLE.__str147317 | 0;
  } else if (($1 | 0) == 70) {
    var $type_string_0 = STRING_TABLE.__str148318 | 0;
  } else if (($1 | 0) == 71) {
    var $type_string_0 = STRING_TABLE.__str149319 | 0;
  } else if (($1 | 0) == 72) {
    var $type_string_0 = STRING_TABLE.__str150320 | 0;
  } else if (($1 | 0) == 73) {
    var $type_string_0 = STRING_TABLE.__str151321 | 0;
  } else if (($1 | 0) == 74) {
    var $type_string_0 = STRING_TABLE.__str152322 | 0;
  } else if (($1 | 0) == 75) {
    var $type_string_0 = STRING_TABLE.__str153323 | 0;
  } else if (($1 | 0) == 77) {
    var $type_string_0 = STRING_TABLE.__str154324 | 0;
  } else if (($1 | 0) == 78) {
    var $type_string_0 = STRING_TABLE.__str155325 | 0;
  } else if (($1 | 0) == 79) {
    var $type_string_0 = STRING_TABLE.__str156326 | 0;
  } else if (($1 | 0) == 88) {
    var $type_string_0 = STRING_TABLE.__str84254 | 0;
  } else if (($1 | 0) == 90) {
    var $type_string_0 = STRING_TABLE.__str110280 | 0;
  } else {
    var $type_string_0 = 0;
  }
  var $type_string_0;
  return $type_string_0;
  return null;
}

function _get_class_name($sym) {
  var $1 = $sym + 44 | 0;
  var $2 = HEAP32[$1 >> 2];
  var $3 = _get_class($sym);
  if (($3 | 0) == 0) {
    var $s_0 = 0;
  } else {
    var $6 = _get_class_string($sym, $2);
    var $s_0 = $6;
  }
  var $s_0;
  HEAP32[$1 >> 2] = $2;
  return $s_0;
  return null;
}

function _get_modified_type($ct, $sym, $pmt_ref, $modif, $in_args) {
  var $1$s2;
  var $sub_ct$s2;
  var $modifier$s2;
  var __stackBase__ = STACKTOP;
  STACKTOP += 16;
  var __label__;
  var $modifier = __stackBase__, $modifier$s2 = $modifier >> 2;
  var $ptr_modif = __stackBase__ + 4;
  var $sub_ct = __stackBase__ + 8, $sub_ct$s2 = $sub_ct >> 2;
  HEAP32[$ptr_modif >> 2] = __str120290 | 0;
  var $1$s2 = ($sym + 12 | 0) >> 2;
  var $2 = HEAP32[$1$s2];
  if (HEAP8[$2] << 24 >> 24 == 69) {
    HEAP32[$ptr_modif >> 2] = STRING_TABLE.__str134304 | 0;
    var $6 = $2 + 1 | 0;
    HEAP32[$1$s2] = $6;
    var $8 = STRING_TABLE.__str134304 | 0;
  } else {
    var $8 = __str120290 | 0;
  }
  var $8;
  var $9 = $modif << 24 >> 24;
  do {
    if (($9 | 0) == 65) {
      var $11 = _str_printf($sym, STRING_TABLE.__str135305 | 0, (tempInt = STACKTOP, STACKTOP += 4, HEAP32[tempInt >> 2] = $8, tempInt));
      var $str_modif_0 = $11;
      __label__ = 10;
      break;
    } else if (($9 | 0) == 66) {
      var $13 = _str_printf($sym, STRING_TABLE.__str136306 | 0, (tempInt = STACKTOP, STACKTOP += 4, HEAP32[tempInt >> 2] = $8, tempInt));
      var $str_modif_0 = $13;
      __label__ = 10;
      break;
    } else if (($9 | 0) == 80) {
      var $15 = _str_printf($sym, STRING_TABLE.__str137307 | 0, (tempInt = STACKTOP, STACKTOP += 4, HEAP32[tempInt >> 2] = $8, tempInt));
      var $str_modif_0 = $15;
      __label__ = 10;
      break;
    } else if (($9 | 0) == 81) {
      var $17 = _str_printf($sym, STRING_TABLE.__str138308 | 0, (tempInt = STACKTOP, STACKTOP += 4, HEAP32[tempInt >> 2] = $8, tempInt));
      var $str_modif_0 = $17;
      __label__ = 10;
      break;
    } else if (($9 | 0) == 82) {
      var $19 = _str_printf($sym, STRING_TABLE.__str139309 | 0, (tempInt = STACKTOP, STACKTOP += 4, HEAP32[tempInt >> 2] = $8, tempInt));
      var $str_modif_0 = $19;
      __label__ = 10;
      break;
    } else if (($9 | 0) == 83) {
      var $21 = _str_printf($sym, STRING_TABLE.__str140310 | 0, (tempInt = STACKTOP, STACKTOP += 4, HEAP32[tempInt >> 2] = $8, tempInt));
      var $str_modif_0 = $21;
      __label__ = 10;
      break;
    } else if (($9 | 0) == 63) {
      var $str_modif_0 = __str120290 | 0;
      __label__ = 10;
    } else {
      __label__ = 31;
    }
  } while (0);
  $_$48 : do {
    if (__label__ == 10) {
      var $str_modif_0;
      var $23 = _get_modifier($sym, $modifier, $ptr_modif);
      if (($23 | 0) == 0) {
        break;
      }
      var $26 = $sym + 44 | 0;
      var $27 = HEAP32[$26 >> 2];
      var $28 = HEAP32[$1$s2];
      var $30 = HEAP8[$28] << 24 >> 24 == 89;
      $_$51 : do {
        if ($30) {
          var $32 = $28 + 1 | 0;
          HEAP32[$1$s2] = $32;
          var $33 = _get_number($sym);
          if (($33 | 0) == 0) {
            break $_$48;
          }
          var $36 = _atoi($33);
          var $38 = HEAP8[$str_modif_0] << 24 >> 24 == 32;
          var $39 = HEAP32[$modifier$s2];
          var $40 = ($39 | 0) == 0;
          do {
            if ($38) {
              if (!$40) {
                __label__ = 17;
                break;
              }
              var $str_modif_1_ph9 = $str_modif_0 + 1 | 0;
              __label__ = 18;
              break;
            }
            if ($40) {
              var $str_modif_1_ph9 = $str_modif_0;
              __label__ = 18;
              break;
            }
            __label__ = 17;
            break;
          } while (0);
          if (__label__ == 17) {
            var $44 = _str_printf($sym, STRING_TABLE.__str141311 | 0, (tempInt = STACKTOP, STACKTOP += 8, HEAP32[tempInt >> 2] = $39, HEAP32[tempInt + 4 >> 2] = $str_modif_0, tempInt));
            HEAP32[$modifier$s2] = 0;
            var $str_modif_2_ph = $44;
          } else if (__label__ == 18) {
            var $str_modif_1_ph9;
            var $46 = _str_printf($sym, STRING_TABLE.__str142312 | 0, (tempInt = STACKTOP, STACKTOP += 4, HEAP32[tempInt >> 2] = $str_modif_1_ph9, tempInt));
            var $str_modif_2_ph = $46;
          }
          var $str_modif_2_ph;
          if (($36 | 0) == 0) {
            var $str_modif_3 = $str_modif_2_ph;
            break;
          }
          var $str_modif_22 = $str_modif_2_ph;
          var $num_03 = $36;
          while (1) {
            var $num_03;
            var $str_modif_22;
            var $48 = $num_03 - 1 | 0;
            var $49 = _get_number($sym);
            var $50 = _str_printf($sym, STRING_TABLE.__str143313 | 0, (tempInt = STACKTOP, STACKTOP += 8, HEAP32[tempInt >> 2] = $str_modif_22, HEAP32[tempInt + 4 >> 2] = $49, tempInt));
            if (($48 | 0) == 0) {
              var $str_modif_3 = $50;
              break $_$51;
            }
            var $str_modif_22 = $50;
            var $num_03 = $48;
          }
        } else {
          var $str_modif_3 = $str_modif_0;
        }
      } while (0);
      var $str_modif_3;
      var $52 = _demangle_datatype($sym, $sub_ct, $pmt_ref, 0);
      if (($52 | 0) == 0) {
        break;
      }
      var $55 = HEAP32[$modifier$s2];
      if (($55 | 0) == 0) {
        var $63 = ($in_args | 0) == 0;
        do {
          if ($63) {
            if (HEAP8[$str_modif_3] << 24 >> 24 == 0) {
              var $str_modif_4 = $str_modif_3;
              break;
            }
            var $68 = $str_modif_3 + 1 | 0;
            if (HEAP8[$68] << 24 >> 24 != 42) {
              var $str_modif_4 = $str_modif_3;
              break;
            }
            var $73 = HEAP32[$sub_ct$s2];
            var $74 = _strlen($73);
            if (HEAP8[$73 + ($74 - 1) | 0] << 24 >> 24 != 42) {
              var $str_modif_4 = $str_modif_3;
              break;
            }
            var $str_modif_4 = $68;
          } else {
            var $str_modif_4 = $str_modif_3;
          }
        } while (0);
        var $str_modif_4;
        var $81 = HEAP32[$sub_ct$s2];
        var $82 = _str_printf($sym, STRING_TABLE.__str170 | 0, (tempInt = STACKTOP, STACKTOP += 8, HEAP32[tempInt >> 2] = $81, HEAP32[tempInt + 4 >> 2] = $str_modif_4, tempInt));
        HEAP32[$ct >> 2] = $82;
      } else {
        var $59 = HEAP32[$sub_ct$s2];
        var $60 = _str_printf($sym, STRING_TABLE.__str144314 | 0, (tempInt = STACKTOP, STACKTOP += 12, HEAP32[tempInt >> 2] = $59, HEAP32[tempInt + 4 >> 2] = $55, HEAP32[tempInt + 8 >> 2] = $str_modif_3, tempInt));
        HEAP32[$ct >> 2] = $60;
      }
      var $86 = HEAP32[$sub_ct$s2 + 1];
      HEAP32[$ct + 4 >> 2] = $86;
      HEAP32[$26 >> 2] = $27;
    }
  } while (0);
  STACKTOP = __stackBase__;
  return;
  return;
}

_get_modified_type["X"] = 1;

function _malloc($bytes) {
  var __label__;
  var $1 = $bytes >>> 0 < 245;
  do {
    if ($1) {
      if ($bytes >>> 0 < 11) {
        var $8 = 16;
      } else {
        var $8 = $bytes + 11 & -8;
      }
      var $8;
      var $9 = $8 >>> 3;
      var $10 = HEAPU32[__gm_ >> 2];
      var $11 = $10 >>> ($9 >>> 0);
      if (($11 & 3 | 0) != 0) {
        var $17 = ($11 & 1 ^ 1) + $9 | 0;
        var $18 = $17 << 1;
        var $20 = ($18 << 2) + __gm_ + 40 | 0;
        var $21 = ($18 + 2 << 2) + __gm_ + 40 | 0;
        var $22 = HEAPU32[$21 >> 2];
        var $23 = $22 + 8 | 0;
        var $24 = HEAPU32[$23 >> 2];
        if (($20 | 0) == ($24 | 0)) {
          HEAP32[__gm_ >> 2] = $10 & (1 << $17 ^ -1);
        } else {
          if ($24 >>> 0 < HEAPU32[__gm_ + 16 >> 2] >>> 0) {
            _abort();
            throw "Reached an unreachable!";
          } else {
            HEAP32[$21 >> 2] = $24;
            HEAP32[$24 + 12 >> 2] = $20;
          }
        }
        var $38 = $17 << 3;
        HEAP32[$22 + 4 >> 2] = $38 | 3;
        var $43 = $22 + ($38 | 4) | 0;
        var $45 = HEAP32[$43 >> 2] | 1;
        HEAP32[$43 >> 2] = $45;
        var $mem_0 = $23;
        __label__ = 38;
        break;
      }
      if ($8 >>> 0 <= HEAPU32[__gm_ + 8 >> 2] >>> 0) {
        var $nb_0 = $8;
        __label__ = 30;
        break;
      }
      if (($11 | 0) != 0) {
        var $54 = 2 << $9;
        var $57 = $11 << $9 & ($54 | -$54);
        var $60 = ($57 & -$57) - 1 | 0;
        var $62 = $60 >>> 12 & 16;
        var $63 = $60 >>> ($62 >>> 0);
        var $65 = $63 >>> 5 & 8;
        var $66 = $63 >>> ($65 >>> 0);
        var $68 = $66 >>> 2 & 4;
        var $69 = $66 >>> ($68 >>> 0);
        var $71 = $69 >>> 1 & 2;
        var $72 = $69 >>> ($71 >>> 0);
        var $74 = $72 >>> 1 & 1;
        var $80 = ($65 | $62 | $68 | $71 | $74) + ($72 >>> ($74 >>> 0)) | 0;
        var $81 = $80 << 1;
        var $83 = ($81 << 2) + __gm_ + 40 | 0;
        var $84 = ($81 + 2 << 2) + __gm_ + 40 | 0;
        var $85 = HEAPU32[$84 >> 2];
        var $86 = $85 + 8 | 0;
        var $87 = HEAPU32[$86 >> 2];
        if (($83 | 0) == ($87 | 0)) {
          HEAP32[__gm_ >> 2] = $10 & (1 << $80 ^ -1);
        } else {
          if ($87 >>> 0 < HEAPU32[__gm_ + 16 >> 2] >>> 0) {
            _abort();
            throw "Reached an unreachable!";
          } else {
            HEAP32[$84 >> 2] = $87;
            HEAP32[$87 + 12 >> 2] = $83;
          }
        }
        var $101 = $80 << 3;
        var $102 = $101 - $8 | 0;
        HEAP32[$85 + 4 >> 2] = $8 | 3;
        var $105 = $85;
        var $107 = $105 + $8 | 0;
        HEAP32[$105 + ($8 | 4) >> 2] = $102 | 1;
        HEAP32[$105 + $101 >> 2] = $102;
        var $113 = HEAPU32[__gm_ + 8 >> 2];
        if (($113 | 0) != 0) {
          var $116 = HEAP32[__gm_ + 20 >> 2];
          var $119 = $113 >>> 2 & 1073741822;
          var $121 = ($119 << 2) + __gm_ + 40 | 0;
          var $122 = HEAPU32[__gm_ >> 2];
          var $123 = 1 << ($113 >>> 3);
          var $125 = ($122 & $123 | 0) == 0;
          do {
            if ($125) {
              HEAP32[__gm_ >> 2] = $122 | $123;
              var $F4_0 = $121;
              var $_pre_phi = ($119 + 2 << 2) + __gm_ + 40 | 0;
            } else {
              var $129 = ($119 + 2 << 2) + __gm_ + 40 | 0;
              var $130 = HEAPU32[$129 >> 2];
              if ($130 >>> 0 >= HEAPU32[__gm_ + 16 >> 2] >>> 0) {
                var $F4_0 = $130;
                var $_pre_phi = $129;
                break;
              }
              _abort();
              throw "Reached an unreachable!";
            }
          } while (0);
          var $_pre_phi;
          var $F4_0;
          HEAP32[$_pre_phi >> 2] = $116;
          HEAP32[$F4_0 + 12 >> 2] = $116;
          var $137 = $116 + 8 | 0;
          HEAP32[$137 >> 2] = $F4_0;
          var $138 = $116 + 12 | 0;
          HEAP32[$138 >> 2] = $121;
        }
        HEAP32[__gm_ + 8 >> 2] = $102;
        HEAP32[__gm_ + 20 >> 2] = $107;
        var $mem_0 = $86;
        __label__ = 38;
        break;
      }
      if ((HEAP32[__gm_ + 4 >> 2] | 0) == 0) {
        var $nb_0 = $8;
        __label__ = 30;
        break;
      }
      var $145 = _tmalloc_small($8);
      if (($145 | 0) == 0) {
        var $nb_0 = $8;
        __label__ = 30;
        break;
      }
      var $mem_0 = $145;
      __label__ = 38;
      break;
    } else {
      if ($bytes >>> 0 > 4294967231) {
        var $nb_0 = -1;
        __label__ = 30;
        break;
      }
      var $151 = $bytes + 11 & -8;
      if ((HEAP32[__gm_ + 4 >> 2] | 0) == 0) {
        var $nb_0 = $151;
        __label__ = 30;
        break;
      }
      var $155 = _tmalloc_large($151);
      if (($155 | 0) == 0) {
        var $nb_0 = $151;
        __label__ = 30;
        break;
      }
      var $mem_0 = $155;
      __label__ = 38;
      break;
    }
  } while (0);
  if (__label__ == 30) {
    var $nb_0;
    var $157 = HEAPU32[__gm_ + 8 >> 2];
    if ($nb_0 >>> 0 > $157 >>> 0) {
      var $186 = HEAPU32[__gm_ + 12 >> 2];
      if ($nb_0 >>> 0 < $186 >>> 0) {
        var $189 = $186 - $nb_0 | 0;
        HEAP32[__gm_ + 12 >> 2] = $189;
        var $190 = HEAPU32[__gm_ + 24 >> 2];
        var $191 = $190;
        HEAP32[__gm_ + 24 >> 2] = $191 + $nb_0 | 0;
        HEAP32[$nb_0 + ($191 + 4) >> 2] = $189 | 1;
        HEAP32[$190 + 4 >> 2] = $nb_0 | 3;
        var $mem_0 = $190 + 8 | 0;
      } else {
        var $202 = _sys_alloc($nb_0);
        var $mem_0 = $202;
      }
    } else {
      var $160 = $157 - $nb_0 | 0;
      var $161 = HEAPU32[__gm_ + 20 >> 2];
      if ($160 >>> 0 > 15) {
        var $164 = $161;
        HEAP32[__gm_ + 20 >> 2] = $164 + $nb_0 | 0;
        HEAP32[__gm_ + 8 >> 2] = $160;
        HEAP32[$nb_0 + ($164 + 4) >> 2] = $160 | 1;
        HEAP32[$164 + $157 >> 2] = $160;
        HEAP32[$161 + 4 >> 2] = $nb_0 | 3;
      } else {
        HEAP32[__gm_ + 8 >> 2] = 0;
        HEAP32[__gm_ + 20 >> 2] = 0;
        HEAP32[$161 + 4 >> 2] = $157 | 3;
        var $179 = $157 + ($161 + 4) | 0;
        var $181 = HEAP32[$179 >> 2] | 1;
        HEAP32[$179 >> 2] = $181;
      }
      var $mem_0 = $161 + 8 | 0;
    }
  }
  var $mem_0;
  return $mem_0;
  return null;
}

Module["_malloc"] = _malloc;

_malloc["X"] = 1;

function _tmalloc_small($nb) {
  var $R_1$s2;
  var $v_0_ph$s2;
  var __label__;
  var $1 = HEAP32[__gm_ + 4 >> 2];
  var $4 = ($1 & -$1) - 1 | 0;
  var $6 = $4 >>> 12 & 16;
  var $7 = $4 >>> ($6 >>> 0);
  var $9 = $7 >>> 5 & 8;
  var $10 = $7 >>> ($9 >>> 0);
  var $12 = $10 >>> 2 & 4;
  var $13 = $10 >>> ($12 >>> 0);
  var $15 = $13 >>> 1 & 2;
  var $16 = $13 >>> ($15 >>> 0);
  var $18 = $16 >>> 1 & 1;
  var $26 = HEAPU32[__gm_ + (($9 | $6 | $12 | $15 | $18) + ($16 >>> ($18 >>> 0)) << 2) + 304 >> 2];
  var $v_0_ph = $26, $v_0_ph$s2 = $v_0_ph >> 2;
  var $rsize_0_ph = (HEAP32[$26 + 4 >> 2] & -8) - $nb | 0;
  $_$130 : while (1) {
    var $rsize_0_ph;
    var $v_0_ph;
    var $t_0 = $v_0_ph;
    while (1) {
      var $t_0;
      var $33 = HEAP32[$t_0 + 16 >> 2];
      if (($33 | 0) == 0) {
        var $37 = HEAP32[$t_0 + 20 >> 2];
        if (($37 | 0) == 0) {
          break $_$130;
        }
        var $39 = $37;
      } else {
        var $39 = $33;
      }
      var $39;
      var $43 = (HEAP32[$39 + 4 >> 2] & -8) - $nb | 0;
      if ($43 >>> 0 < $rsize_0_ph >>> 0) {
        var $v_0_ph = $39, $v_0_ph$s2 = $v_0_ph >> 2;
        var $rsize_0_ph = $43;
        continue $_$130;
      }
      var $t_0 = $39;
    }
  }
  var $46 = $v_0_ph;
  var $47 = HEAPU32[__gm_ + 16 >> 2];
  var $48 = $46 >>> 0 < $47 >>> 0;
  do {
    if (!$48) {
      var $50 = $46 + $nb | 0;
      var $51 = $50;
      if ($46 >>> 0 >= $50 >>> 0) {
        break;
      }
      var $55 = HEAPU32[$v_0_ph$s2 + 6];
      var $57 = HEAPU32[$v_0_ph$s2 + 3];
      var $58 = ($57 | 0) == ($v_0_ph | 0);
      do {
        if ($58) {
          var $69 = $v_0_ph + 20 | 0;
          var $70 = HEAP32[$69 >> 2];
          if (($70 | 0) == 0) {
            var $73 = $v_0_ph + 16 | 0;
            var $74 = HEAP32[$73 >> 2];
            if (($74 | 0) == 0) {
              var $R_1 = 0, $R_1$s2 = $R_1 >> 2;
              break;
            }
            var $RP_0 = $73;
            var $R_0 = $74;
          } else {
            var $RP_0 = $69;
            var $R_0 = $70;
            __label__ = 14;
          }
          while (1) {
            var $R_0;
            var $RP_0;
            var $76 = $R_0 + 20 | 0;
            var $77 = HEAP32[$76 >> 2];
            if (($77 | 0) != 0) {
              var $RP_0 = $76;
              var $R_0 = $77;
              continue;
            }
            var $80 = $R_0 + 16 | 0;
            var $81 = HEAPU32[$80 >> 2];
            if (($81 | 0) == 0) {
              break;
            }
            var $RP_0 = $80;
            var $R_0 = $81;
          }
          if ($RP_0 >>> 0 < $47 >>> 0) {
            _abort();
            throw "Reached an unreachable!";
          } else {
            HEAP32[$RP_0 >> 2] = 0;
            var $R_1 = $R_0, $R_1$s2 = $R_1 >> 2;
          }
        } else {
          var $61 = HEAPU32[$v_0_ph$s2 + 2];
          if ($61 >>> 0 < $47 >>> 0) {
            _abort();
            throw "Reached an unreachable!";
          } else {
            HEAP32[$61 + 12 >> 2] = $57;
            HEAP32[$57 + 8 >> 2] = $61;
            var $R_1 = $57, $R_1$s2 = $R_1 >> 2;
          }
        }
      } while (0);
      var $R_1;
      var $89 = ($55 | 0) == 0;
      $_$157 : do {
        if (!$89) {
          var $91 = $v_0_ph + 28 | 0;
          var $93 = (HEAP32[$91 >> 2] << 2) + __gm_ + 304 | 0;
          var $95 = ($v_0_ph | 0) == (HEAP32[$93 >> 2] | 0);
          do {
            if ($95) {
              HEAP32[$93 >> 2] = $R_1;
              if (($R_1 | 0) != 0) {
                break;
              }
              var $101 = HEAP32[__gm_ + 4 >> 2] & (1 << HEAP32[$91 >> 2] ^ -1);
              HEAP32[__gm_ + 4 >> 2] = $101;
              break $_$157;
            }
            if ($55 >>> 0 < HEAPU32[__gm_ + 16 >> 2] >>> 0) {
              _abort();
              throw "Reached an unreachable!";
            } else {
              var $107 = $55 + 16 | 0;
              if ((HEAP32[$107 >> 2] | 0) == ($v_0_ph | 0)) {
                HEAP32[$107 >> 2] = $R_1;
              } else {
                HEAP32[$55 + 20 >> 2] = $R_1;
              }
              if (($R_1 | 0) == 0) {
                break $_$157;
              }
            }
          } while (0);
          if ($R_1 >>> 0 < HEAPU32[__gm_ + 16 >> 2] >>> 0) {
            _abort();
            throw "Reached an unreachable!";
          } else {
            HEAP32[$R_1$s2 + 6] = $55;
            var $123 = HEAPU32[$v_0_ph$s2 + 4];
            if (($123 | 0) != 0) {
              if ($123 >>> 0 < HEAPU32[__gm_ + 16 >> 2] >>> 0) {
                _abort();
                throw "Reached an unreachable!";
              } else {
                HEAP32[$R_1$s2 + 4] = $123;
                HEAP32[$123 + 24 >> 2] = $R_1;
              }
            }
            var $135 = HEAPU32[$v_0_ph$s2 + 5];
            if (($135 | 0) == 0) {
              break;
            }
            if ($135 >>> 0 < HEAPU32[__gm_ + 16 >> 2] >>> 0) {
              _abort();
              throw "Reached an unreachable!";
            } else {
              HEAP32[$R_1$s2 + 5] = $135;
              HEAP32[$135 + 24 >> 2] = $R_1;
            }
          }
        }
      } while (0);
      if ($rsize_0_ph >>> 0 < 16) {
        var $149 = $rsize_0_ph + $nb | 0;
        HEAP32[$v_0_ph$s2 + 1] = $149 | 3;
        var $153 = $149 + ($46 + 4) | 0;
        var $155 = HEAP32[$153 >> 2] | 1;
        HEAP32[$153 >> 2] = $155;
      } else {
        HEAP32[$v_0_ph$s2 + 1] = $nb | 3;
        HEAP32[$nb + ($46 + 4) >> 2] = $rsize_0_ph | 1;
        HEAP32[$46 + $rsize_0_ph + $nb >> 2] = $rsize_0_ph;
        var $164 = HEAPU32[__gm_ + 8 >> 2];
        if (($164 | 0) != 0) {
          var $167 = HEAPU32[__gm_ + 20 >> 2];
          var $170 = $164 >>> 2 & 1073741822;
          var $172 = ($170 << 2) + __gm_ + 40 | 0;
          var $173 = HEAPU32[__gm_ >> 2];
          var $174 = 1 << ($164 >>> 3);
          var $176 = ($173 & $174 | 0) == 0;
          do {
            if ($176) {
              HEAP32[__gm_ >> 2] = $173 | $174;
              var $F1_0 = $172;
              var $_pre_phi = ($170 + 2 << 2) + __gm_ + 40 | 0;
            } else {
              var $180 = ($170 + 2 << 2) + __gm_ + 40 | 0;
              var $181 = HEAPU32[$180 >> 2];
              if ($181 >>> 0 >= HEAPU32[__gm_ + 16 >> 2] >>> 0) {
                var $F1_0 = $181;
                var $_pre_phi = $180;
                break;
              }
              _abort();
              throw "Reached an unreachable!";
            }
          } while (0);
          var $_pre_phi;
          var $F1_0;
          HEAP32[$_pre_phi >> 2] = $167;
          HEAP32[$F1_0 + 12 >> 2] = $167;
          HEAP32[$167 + 8 >> 2] = $F1_0;
          HEAP32[$167 + 12 >> 2] = $172;
        }
        HEAP32[__gm_ + 8 >> 2] = $rsize_0_ph;
        HEAP32[__gm_ + 20 >> 2] = $51;
      }
      return $v_0_ph + 8 | 0;
    }
  } while (0);
  _abort();
  throw "Reached an unreachable!";
  return null;
}

_tmalloc_small["X"] = 1;

function _sys_alloc($nb) {
  var $sp_0$s2;
  var __label__;
  if ((HEAP32[_mparams >> 2] | 0) == 0) {
    _init_mparams();
  }
  var $7 = (HEAP32[__gm_ + 440 >> 2] & 4 | 0) == 0;
  do {
    if ($7) {
      var $9 = HEAP32[__gm_ + 24 >> 2];
      var $10 = ($9 | 0) == 0;
      do {
        if ($10) {
          __label__ = 6;
        } else {
          var $12 = $9;
          var $13 = _segment_holding($12);
          if (($13 | 0) == 0) {
            __label__ = 6;
            break;
          }
          var $41 = HEAP32[_mparams + 8 >> 2];
          var $46 = $nb + 47 - HEAP32[__gm_ + 12 >> 2] + $41 & -$41;
          if ($46 >>> 0 >= 2147483647) {
            __label__ = 14;
            break;
          }
          var $49 = _sbrk($46);
          if (($49 | 0) == (HEAP32[$13 >> 2] + HEAP32[$13 + 4 >> 2] | 0)) {
            var $tbase_0 = $49;
            var $asize_1 = $46;
            var $br_0 = $49;
            __label__ = 13;
            break;
          }
          var $br_08 = $49;
          var $asize_19 = $46;
          __label__ = 15;
          break;
        }
      } while (0);
      do {
        if (__label__ == 6) {
          var $15 = _sbrk(0);
          if (($15 | 0) == -1) {
            __label__ = 14;
            break;
          }
          var $18 = HEAP32[_mparams + 8 >> 2];
          var $22 = $18 + ($nb + 47) & -$18;
          var $23 = $15;
          var $24 = HEAP32[_mparams + 4 >> 2];
          var $25 = $24 - 1 | 0;
          if (($25 & $23 | 0) == 0) {
            var $asize_0 = $22;
          } else {
            var $asize_0 = $22 - $23 + ($25 + $23 & -$24) | 0;
          }
          var $asize_0;
          if ($asize_0 >>> 0 >= 2147483647) {
            __label__ = 14;
            break;
          }
          var $37 = _sbrk($asize_0);
          if (($37 | 0) == ($15 | 0)) {
            var $tbase_0 = $15;
            var $asize_1 = $asize_0;
            var $br_0 = $37;
            __label__ = 13;
            break;
          }
          var $br_08 = $37;
          var $asize_19 = $asize_0;
          __label__ = 15;
          break;
        }
      } while (0);
      if (__label__ == 13) {
        var $br_0;
        var $asize_1;
        var $tbase_0;
        if (($tbase_0 | 0) != -1) {
          var $tsize_220 = $asize_1;
          var $tbase_221 = $tbase_0;
          __label__ = 26;
          break;
        }
        var $br_08 = $br_0;
        var $asize_19 = $asize_1;
      } else if (__label__ == 14) {
        var $59 = HEAP32[__gm_ + 440 >> 2] | 4;
        HEAP32[__gm_ + 440 >> 2] = $59;
        __label__ = 23;
        break;
      }
      var $asize_19;
      var $br_08;
      var $60 = -$asize_19 | 0;
      var $or_cond = ($br_08 | 0) != -1 & $asize_19 >>> 0 < 2147483647;
      do {
        if ($or_cond) {
          if ($asize_19 >>> 0 >= ($nb + 48 | 0) >>> 0) {
            var $asize_2 = $asize_19;
            __label__ = 21;
            break;
          }
          var $67 = HEAP32[_mparams + 8 >> 2];
          var $72 = $nb + 47 - $asize_19 + $67 & -$67;
          if ($72 >>> 0 >= 2147483647) {
            var $asize_2 = $asize_19;
            __label__ = 21;
            break;
          }
          var $75 = _sbrk($72);
          if (($75 | 0) == -1) {
            var $79 = _sbrk($60);
            __label__ = 22;
            break;
          }
          var $asize_2 = $72 + $asize_19 | 0;
          __label__ = 21;
          break;
        } else {
          var $asize_2 = $asize_19;
          __label__ = 21;
        }
      } while (0);
      if (__label__ == 21) {
        var $asize_2;
        if (($br_08 | 0) != -1) {
          var $tsize_220 = $asize_2;
          var $tbase_221 = $br_08;
          __label__ = 26;
          break;
        }
      }
      var $84 = HEAP32[__gm_ + 440 >> 2] | 4;
      HEAP32[__gm_ + 440 >> 2] = $84;
      __label__ = 23;
      break;
    }
    __label__ = 23;
  } while (0);
  do {
    if (__label__ == 23) {
      var $85 = HEAP32[_mparams + 8 >> 2];
      var $89 = $85 + ($nb + 47) & -$85;
      if ($89 >>> 0 >= 2147483647) {
        __label__ = 49;
        break;
      }
      var $92 = _sbrk($89);
      var $93 = _sbrk(0);
      if (!(($93 | 0) != -1 & ($92 | 0) != -1 & $92 >>> 0 < $93 >>> 0)) {
        __label__ = 49;
        break;
      }
      var $98 = $93 - $92 | 0;
      if ($98 >>> 0 <= ($nb + 40 | 0) >>> 0 | ($92 | 0) == -1) {
        __label__ = 49;
        break;
      }
      var $tsize_220 = $98;
      var $tbase_221 = $92;
      __label__ = 26;
      break;
    }
  } while (0);
  $_$151 : do {
    if (__label__ == 26) {
      var $tbase_221;
      var $tsize_220;
      var $103 = HEAP32[__gm_ + 432 >> 2] + $tsize_220 | 0;
      HEAP32[__gm_ + 432 >> 2] = $103;
      if ($103 >>> 0 > HEAPU32[__gm_ + 436 >> 2] >>> 0) {
        HEAP32[__gm_ + 436 >> 2] = $103;
      }
      var $108 = HEAPU32[__gm_ + 24 >> 2];
      var $109 = ($108 | 0) == 0;
      $_$156 : do {
        if ($109) {
          var $111 = HEAPU32[__gm_ + 16 >> 2];
          if (($111 | 0) == 0 | $tbase_221 >>> 0 < $111 >>> 0) {
            HEAP32[__gm_ + 16 >> 2] = $tbase_221;
          }
          HEAP32[__gm_ + 444 >> 2] = $tbase_221;
          HEAP32[__gm_ + 448 >> 2] = $tsize_220;
          HEAP32[__gm_ + 456 >> 2] = 0;
          var $116 = HEAP32[_mparams >> 2];
          HEAP32[__gm_ + 36 >> 2] = $116;
          HEAP32[__gm_ + 32 >> 2] = -1;
          _init_bins();
          _init_top($tbase_221, $tsize_220 - 40 | 0);
        } else {
          var $sp_0 = __gm_ + 444 | 0, $sp_0$s2 = $sp_0 >> 2;
          while (1) {
            var $sp_0;
            if (($sp_0 | 0) == 0) {
              break;
            }
            var $122 = HEAPU32[$sp_0$s2];
            var $123 = $sp_0 + 4 | 0;
            var $124 = HEAPU32[$123 >> 2];
            var $125 = $122 + $124 | 0;
            if (($tbase_221 | 0) == ($125 | 0)) {
              if ((HEAP32[$sp_0$s2 + 3] & 8 | 0) != 0) {
                break;
              }
              var $135 = $108;
              if (!($135 >>> 0 >= $122 >>> 0 & $135 >>> 0 < $125 >>> 0)) {
                break;
              }
              HEAP32[$123 >> 2] = $124 + $tsize_220 | 0;
              var $140 = HEAP32[__gm_ + 24 >> 2];
              var $142 = HEAP32[__gm_ + 12 >> 2] + $tsize_220 | 0;
              _init_top($140, $142);
              break $_$156;
            }
            var $sp_0 = HEAP32[$sp_0$s2 + 2], $sp_0$s2 = $sp_0 >> 2;
          }
          if ($tbase_221 >>> 0 < HEAPU32[__gm_ + 16 >> 2] >>> 0) {
            HEAP32[__gm_ + 16 >> 2] = $tbase_221;
          }
          var $146 = $tbase_221 + $tsize_220 | 0;
          var $sp_1 = __gm_ + 444 | 0;
          while (1) {
            var $sp_1;
            if (($sp_1 | 0) == 0) {
              break;
            }
            var $150 = $sp_1 | 0;
            var $151 = HEAPU32[$150 >> 2];
            if (($151 | 0) == ($146 | 0)) {
              if ((HEAP32[$sp_1 + 12 >> 2] & 8 | 0) != 0) {
                break;
              }
              HEAP32[$150 >> 2] = $tbase_221;
              var $161 = $sp_1 + 4 | 0;
              var $163 = HEAP32[$161 >> 2] + $tsize_220 | 0;
              HEAP32[$161 >> 2] = $163;
              var $164 = _prepend_alloc($tbase_221, $151, $nb);
              var $_0 = $164;
              __label__ = 50;
              break $_$151;
            }
            var $sp_1 = HEAP32[$sp_1 + 8 >> 2];
          }
          _add_segment($tbase_221, $tsize_220);
        }
      } while (0);
      var $166 = HEAPU32[__gm_ + 12 >> 2];
      if ($166 >>> 0 <= $nb >>> 0) {
        __label__ = 49;
        break;
      }
      var $169 = $166 - $nb | 0;
      HEAP32[__gm_ + 12 >> 2] = $169;
      var $170 = HEAPU32[__gm_ + 24 >> 2];
      var $171 = $170;
      HEAP32[__gm_ + 24 >> 2] = $171 + $nb | 0;
      HEAP32[$nb + ($171 + 4) >> 2] = $169 | 1;
      HEAP32[$170 + 4 >> 2] = $nb | 3;
      var $_0 = $170 + 8 | 0;
      __label__ = 50;
      break;
    }
  } while (0);
  if (__label__ == 49) {
    var $181 = ___errno();
    HEAP32[$181 >> 2] = 12;
    var $_0 = 0;
  }
  var $_0;
  return $_0;
  return null;
}

_sys_alloc["X"] = 1;

function _tmalloc_large($nb) {
  var $R_1$s2;
  var $113$s2;
  var $t_224$s2;
  var $v_3_lcssa$s2;
  var $t_0$s2;
  var $nb$s2 = $nb >> 2;
  var __label__;
  var $1 = -$nb | 0;
  var $2 = $nb >>> 8;
  var $3 = ($2 | 0) == 0;
  do {
    if ($3) {
      var $idx_0 = 0;
    } else {
      if ($nb >>> 0 > 16777215) {
        var $idx_0 = 31;
        break;
      }
      var $9 = ($2 + 1048320 | 0) >>> 16 & 8;
      var $10 = $2 << $9;
      var $13 = ($10 + 520192 | 0) >>> 16 & 4;
      var $14 = $10 << $13;
      var $17 = ($14 + 245760 | 0) >>> 16 & 2;
      var $23 = 14 - ($13 | $9 | $17) + ($14 << $17 >>> 15) | 0;
      var $idx_0 = $nb >>> (($23 + 7 | 0) >>> 0) & 1 | $23 << 1;
    }
  } while (0);
  var $idx_0;
  var $31 = HEAPU32[__gm_ + ($idx_0 << 2) + 304 >> 2];
  var $32 = ($31 | 0) == 0;
  $_$6 : do {
    if ($32) {
      var $v_2 = 0;
      var $rsize_2 = $1;
      var $t_1 = 0;
    } else {
      if (($idx_0 | 0) == 31) {
        var $39 = 0;
      } else {
        var $39 = 25 - ($idx_0 >>> 1) | 0;
      }
      var $39;
      var $v_0 = 0;
      var $rsize_0 = $1;
      var $t_0 = $31, $t_0$s2 = $t_0 >> 2;
      var $sizebits_0 = $nb << $39;
      var $rst_0 = 0;
      while (1) {
        var $rst_0;
        var $sizebits_0;
        var $t_0;
        var $rsize_0;
        var $v_0;
        var $44 = HEAP32[$t_0$s2 + 1] & -8;
        var $45 = $44 - $nb | 0;
        if ($45 >>> 0 < $rsize_0 >>> 0) {
          if (($44 | 0) == ($nb | 0)) {
            var $v_2 = $t_0;
            var $rsize_2 = $45;
            var $t_1 = $t_0;
            break $_$6;
          }
          var $v_1 = $t_0;
          var $rsize_1 = $45;
        } else {
          var $v_1 = $v_0;
          var $rsize_1 = $rsize_0;
        }
        var $rsize_1;
        var $v_1;
        var $51 = HEAPU32[$t_0$s2 + 5];
        var $54 = HEAPU32[(($sizebits_0 >>> 31 << 2) + 16 >> 2) + $t_0$s2];
        var $rst_1 = ($51 | 0) == 0 | ($51 | 0) == ($54 | 0) ? $rst_0 : $51;
        if (($54 | 0) == 0) {
          var $v_2 = $v_1;
          var $rsize_2 = $rsize_1;
          var $t_1 = $rst_1;
          break $_$6;
        }
        var $v_0 = $v_1;
        var $rsize_0 = $rsize_1;
        var $t_0 = $54, $t_0$s2 = $t_0 >> 2;
        var $sizebits_0 = $sizebits_0 << 1;
        var $rst_0 = $rst_1;
      }
    }
  } while (0);
  var $t_1;
  var $rsize_2;
  var $v_2;
  var $or_cond19 = ($t_1 | 0) == 0 & ($v_2 | 0) == 0;
  do {
    if ($or_cond19) {
      var $63 = 2 << $idx_0;
      var $67 = HEAP32[__gm_ + 4 >> 2] & ($63 | -$63);
      if (($67 | 0) == 0) {
        var $t_2_ph = $t_1;
        break;
      }
      var $72 = ($67 & -$67) - 1 | 0;
      var $74 = $72 >>> 12 & 16;
      var $75 = $72 >>> ($74 >>> 0);
      var $77 = $75 >>> 5 & 8;
      var $78 = $75 >>> ($77 >>> 0);
      var $80 = $78 >>> 2 & 4;
      var $81 = $78 >>> ($80 >>> 0);
      var $83 = $81 >>> 1 & 2;
      var $84 = $81 >>> ($83 >>> 0);
      var $86 = $84 >>> 1 & 1;
      var $t_2_ph = HEAP32[__gm_ + (($77 | $74 | $80 | $83 | $86) + ($84 >>> ($86 >>> 0)) << 2) + 304 >> 2];
    } else {
      var $t_2_ph = $t_1;
    }
  } while (0);
  var $t_2_ph;
  var $95 = ($t_2_ph | 0) == 0;
  $_$22 : do {
    if ($95) {
      var $rsize_3_lcssa = $rsize_2;
      var $v_3_lcssa = $v_2, $v_3_lcssa$s2 = $v_3_lcssa >> 2;
    } else {
      var $t_224 = $t_2_ph, $t_224$s2 = $t_224 >> 2;
      var $rsize_325 = $rsize_2;
      var $v_326 = $v_2;
      while (1) {
        var $v_326;
        var $rsize_325;
        var $t_224;
        var $99 = (HEAP32[$t_224$s2 + 1] & -8) - $nb | 0;
        var $100 = $99 >>> 0 < $rsize_325 >>> 0;
        var $rsize_4 = $100 ? $99 : $rsize_325;
        var $v_4 = $100 ? $t_224 : $v_326;
        var $102 = HEAPU32[$t_224$s2 + 4];
        if (($102 | 0) != 0) {
          var $t_224 = $102, $t_224$s2 = $t_224 >> 2;
          var $rsize_325 = $rsize_4;
          var $v_326 = $v_4;
          continue;
        }
        var $105 = HEAPU32[$t_224$s2 + 5];
        if (($105 | 0) == 0) {
          var $rsize_3_lcssa = $rsize_4;
          var $v_3_lcssa = $v_4, $v_3_lcssa$s2 = $v_3_lcssa >> 2;
          break $_$22;
        }
        var $t_224 = $105, $t_224$s2 = $t_224 >> 2;
        var $rsize_325 = $rsize_4;
        var $v_326 = $v_4;
      }
    }
  } while (0);
  var $v_3_lcssa;
  var $rsize_3_lcssa;
  var $107 = ($v_3_lcssa | 0) == 0;
  $_$27 : do {
    if ($107) {
      var $_0 = 0;
    } else {
      if ($rsize_3_lcssa >>> 0 >= (HEAP32[__gm_ + 8 >> 2] - $nb | 0) >>> 0) {
        var $_0 = 0;
        break;
      }
      var $113 = $v_3_lcssa, $113$s2 = $113 >> 2;
      var $114 = HEAPU32[__gm_ + 16 >> 2];
      var $115 = $113 >>> 0 < $114 >>> 0;
      do {
        if (!$115) {
          var $117 = $113 + $nb | 0;
          var $118 = $117;
          if ($113 >>> 0 >= $117 >>> 0) {
            break;
          }
          var $122 = HEAPU32[$v_3_lcssa$s2 + 6];
          var $124 = HEAPU32[$v_3_lcssa$s2 + 3];
          var $125 = ($124 | 0) == ($v_3_lcssa | 0);
          do {
            if ($125) {
              var $136 = $v_3_lcssa + 20 | 0;
              var $137 = HEAP32[$136 >> 2];
              if (($137 | 0) == 0) {
                var $140 = $v_3_lcssa + 16 | 0;
                var $141 = HEAP32[$140 >> 2];
                if (($141 | 0) == 0) {
                  var $R_1 = 0, $R_1$s2 = $R_1 >> 2;
                  break;
                }
                var $RP_0 = $140;
                var $R_0 = $141;
              } else {
                var $RP_0 = $136;
                var $R_0 = $137;
                __label__ = 28;
              }
              while (1) {
                var $R_0;
                var $RP_0;
                var $143 = $R_0 + 20 | 0;
                var $144 = HEAP32[$143 >> 2];
                if (($144 | 0) != 0) {
                  var $RP_0 = $143;
                  var $R_0 = $144;
                  continue;
                }
                var $147 = $R_0 + 16 | 0;
                var $148 = HEAPU32[$147 >> 2];
                if (($148 | 0) == 0) {
                  break;
                }
                var $RP_0 = $147;
                var $R_0 = $148;
              }
              if ($RP_0 >>> 0 < $114 >>> 0) {
                _abort();
                throw "Reached an unreachable!";
              } else {
                HEAP32[$RP_0 >> 2] = 0;
                var $R_1 = $R_0, $R_1$s2 = $R_1 >> 2;
              }
            } else {
              var $128 = HEAPU32[$v_3_lcssa$s2 + 2];
              if ($128 >>> 0 < $114 >>> 0) {
                _abort();
                throw "Reached an unreachable!";
              } else {
                HEAP32[$128 + 12 >> 2] = $124;
                HEAP32[$124 + 8 >> 2] = $128;
                var $R_1 = $124, $R_1$s2 = $R_1 >> 2;
              }
            }
          } while (0);
          var $R_1;
          var $156 = ($122 | 0) == 0;
          $_$49 : do {
            if (!$156) {
              var $158 = $v_3_lcssa + 28 | 0;
              var $160 = (HEAP32[$158 >> 2] << 2) + __gm_ + 304 | 0;
              var $162 = ($v_3_lcssa | 0) == (HEAP32[$160 >> 2] | 0);
              do {
                if ($162) {
                  HEAP32[$160 >> 2] = $R_1;
                  if (($R_1 | 0) != 0) {
                    break;
                  }
                  var $168 = HEAP32[__gm_ + 4 >> 2] & (1 << HEAP32[$158 >> 2] ^ -1);
                  HEAP32[__gm_ + 4 >> 2] = $168;
                  break $_$49;
                }
                if ($122 >>> 0 < HEAPU32[__gm_ + 16 >> 2] >>> 0) {
                  _abort();
                  throw "Reached an unreachable!";
                } else {
                  var $174 = $122 + 16 | 0;
                  if ((HEAP32[$174 >> 2] | 0) == ($v_3_lcssa | 0)) {
                    HEAP32[$174 >> 2] = $R_1;
                  } else {
                    HEAP32[$122 + 20 >> 2] = $R_1;
                  }
                  if (($R_1 | 0) == 0) {
                    break $_$49;
                  }
                }
              } while (0);
              if ($R_1 >>> 0 < HEAPU32[__gm_ + 16 >> 2] >>> 0) {
                _abort();
                throw "Reached an unreachable!";
              } else {
                HEAP32[$R_1$s2 + 6] = $122;
                var $190 = HEAPU32[$v_3_lcssa$s2 + 4];
                if (($190 | 0) != 0) {
                  if ($190 >>> 0 < HEAPU32[__gm_ + 16 >> 2] >>> 0) {
                    _abort();
                    throw "Reached an unreachable!";
                  } else {
                    HEAP32[$R_1$s2 + 4] = $190;
                    HEAP32[$190 + 24 >> 2] = $R_1;
                  }
                }
                var $202 = HEAPU32[$v_3_lcssa$s2 + 5];
                if (($202 | 0) == 0) {
                  break;
                }
                if ($202 >>> 0 < HEAPU32[__gm_ + 16 >> 2] >>> 0) {
                  _abort();
                  throw "Reached an unreachable!";
                } else {
                  HEAP32[$R_1$s2 + 5] = $202;
                  HEAP32[$202 + 24 >> 2] = $R_1;
                }
              }
            }
          } while (0);
          var $214 = $rsize_3_lcssa >>> 0 < 16;
          $_$77 : do {
            if ($214) {
              var $216 = $rsize_3_lcssa + $nb | 0;
              HEAP32[$v_3_lcssa$s2 + 1] = $216 | 3;
              var $220 = $216 + ($113 + 4) | 0;
              var $222 = HEAP32[$220 >> 2] | 1;
              HEAP32[$220 >> 2] = $222;
            } else {
              HEAP32[$v_3_lcssa$s2 + 1] = $nb | 3;
              HEAP32[$nb$s2 + ($113$s2 + 1)] = $rsize_3_lcssa | 1;
              HEAP32[($rsize_3_lcssa >> 2) + $113$s2 + $nb$s2] = $rsize_3_lcssa;
              if ($rsize_3_lcssa >>> 0 < 256) {
                var $235 = $rsize_3_lcssa >>> 2 & 1073741822;
                var $237 = ($235 << 2) + __gm_ + 40 | 0;
                var $238 = HEAPU32[__gm_ >> 2];
                var $239 = 1 << ($rsize_3_lcssa >>> 3);
                var $241 = ($238 & $239 | 0) == 0;
                do {
                  if ($241) {
                    HEAP32[__gm_ >> 2] = $238 | $239;
                    var $F5_0 = $237;
                    var $_pre_phi = ($235 + 2 << 2) + __gm_ + 40 | 0;
                  } else {
                    var $245 = ($235 + 2 << 2) + __gm_ + 40 | 0;
                    var $246 = HEAPU32[$245 >> 2];
                    if ($246 >>> 0 >= HEAPU32[__gm_ + 16 >> 2] >>> 0) {
                      var $F5_0 = $246;
                      var $_pre_phi = $245;
                      break;
                    }
                    _abort();
                    throw "Reached an unreachable!";
                  }
                } while (0);
                var $_pre_phi;
                var $F5_0;
                HEAP32[$_pre_phi >> 2] = $118;
                HEAP32[$F5_0 + 12 >> 2] = $118;
                HEAP32[$nb$s2 + ($113$s2 + 2)] = $F5_0;
                HEAP32[$nb$s2 + ($113$s2 + 3)] = $237;
              } else {
                var $258 = $117;
                var $259 = $rsize_3_lcssa >>> 8;
                var $260 = ($259 | 0) == 0;
                do {
                  if ($260) {
                    var $I7_0 = 0;
                  } else {
                    if ($rsize_3_lcssa >>> 0 > 16777215) {
                      var $I7_0 = 31;
                      break;
                    }
                    var $266 = ($259 + 1048320 | 0) >>> 16 & 8;
                    var $267 = $259 << $266;
                    var $270 = ($267 + 520192 | 0) >>> 16 & 4;
                    var $271 = $267 << $270;
                    var $274 = ($271 + 245760 | 0) >>> 16 & 2;
                    var $280 = 14 - ($270 | $266 | $274) + ($271 << $274 >>> 15) | 0;
                    var $I7_0 = $rsize_3_lcssa >>> (($280 + 7 | 0) >>> 0) & 1 | $280 << 1;
                  }
                } while (0);
                var $I7_0;
                var $287 = ($I7_0 << 2) + __gm_ + 304 | 0;
                HEAP32[$nb$s2 + ($113$s2 + 7)] = $I7_0;
                var $290 = $nb + ($113 + 16) | 0;
                HEAP32[$nb$s2 + ($113$s2 + 5)] = 0;
                HEAP32[$290 >> 2] = 0;
                var $294 = HEAP32[__gm_ + 4 >> 2];
                var $295 = 1 << $I7_0;
                if (($294 & $295 | 0) == 0) {
                  var $299 = $294 | $295;
                  HEAP32[__gm_ + 4 >> 2] = $299;
                  HEAP32[$287 >> 2] = $258;
                  HEAP32[$nb$s2 + ($113$s2 + 6)] = $287;
                  HEAP32[$nb$s2 + ($113$s2 + 3)] = $258;
                  HEAP32[$nb$s2 + ($113$s2 + 2)] = $258;
                } else {
                  if (($I7_0 | 0) == 31) {
                    var $314 = 0;
                  } else {
                    var $314 = 25 - ($I7_0 >>> 1) | 0;
                  }
                  var $314;
                  var $K12_0 = $rsize_3_lcssa << $314;
                  var $T_0 = HEAP32[$287 >> 2];
                  while (1) {
                    var $T_0;
                    var $K12_0;
                    if ((HEAP32[$T_0 + 4 >> 2] & -8 | 0) == ($rsize_3_lcssa | 0)) {
                      var $341 = $T_0 + 8 | 0;
                      var $342 = HEAPU32[$341 >> 2];
                      var $344 = HEAPU32[__gm_ + 16 >> 2];
                      var $345 = $T_0 >>> 0 < $344 >>> 0;
                      do {
                        if (!$345) {
                          if ($342 >>> 0 < $344 >>> 0) {
                            break;
                          }
                          HEAP32[$342 + 12 >> 2] = $258;
                          HEAP32[$341 >> 2] = $258;
                          HEAP32[$nb$s2 + ($113$s2 + 2)] = $342;
                          HEAP32[$nb$s2 + ($113$s2 + 3)] = $T_0;
                          HEAP32[$nb$s2 + ($113$s2 + 6)] = 0;
                          break $_$77;
                        }
                      } while (0);
                      _abort();
                      throw "Reached an unreachable!";
                    } else {
                      var $323 = ($K12_0 >>> 31 << 2) + $T_0 + 16 | 0;
                      var $324 = HEAPU32[$323 >> 2];
                      if (($324 | 0) == 0) {
                        if ($323 >>> 0 >= HEAPU32[__gm_ + 16 >> 2] >>> 0) {
                          HEAP32[$323 >> 2] = $258;
                          HEAP32[$nb$s2 + ($113$s2 + 6)] = $T_0;
                          HEAP32[$nb$s2 + ($113$s2 + 3)] = $258;
                          HEAP32[$nb$s2 + ($113$s2 + 2)] = $258;
                          break $_$77;
                        }
                        _abort();
                        throw "Reached an unreachable!";
                      } else {
                        var $K12_0 = $K12_0 << 1;
                        var $T_0 = $324;
                      }
                    }
                  }
                }
              }
            }
          } while (0);
          var $_0 = $v_3_lcssa + 8 | 0;
          break $_$27;
        }
      } while (0);
      _abort();
      throw "Reached an unreachable!";
    }
  } while (0);
  var $_0;
  return $_0;
  return null;
}

_tmalloc_large["X"] = 1;

function _sys_trim($pad) {
  var $31$s2;
  if ((HEAP32[_mparams >> 2] | 0) == 0) {
    _init_mparams();
  }
  var $5 = $pad >>> 0 < 4294967232;
  $_$183 : do {
    if ($5) {
      var $7 = HEAPU32[__gm_ + 24 >> 2];
      if (($7 | 0) == 0) {
        var $released_2 = 0;
        break;
      }
      var $11 = HEAPU32[__gm_ + 12 >> 2];
      var $12 = $11 >>> 0 > ($pad + 40 | 0) >>> 0;
      do {
        if ($12) {
          var $14 = HEAPU32[_mparams + 8 >> 2];
          var $17 = -40 - $pad - 1 + $11 + $14 | 0;
          var $18 = Math.floor(($17 >>> 0) / ($14 >>> 0));
          var $20 = ($18 - 1) * $14 | 0;
          var $21 = $7;
          var $22 = _segment_holding($21);
          if ((HEAP32[$22 + 12 >> 2] & 8 | 0) != 0) {
            break;
          }
          var $28 = _sbrk(0);
          var $31$s2 = ($22 + 4 | 0) >> 2;
          if (($28 | 0) != (HEAP32[$22 >> 2] + HEAP32[$31$s2] | 0)) {
            break;
          }
          var $_ = $20 >>> 0 > 2147483646 ? -2147483648 - $14 | 0 : $20;
          var $38 = -$_ | 0;
          var $39 = _sbrk($38);
          var $40 = _sbrk(0);
          if (!(($39 | 0) != -1 & $40 >>> 0 < $28 >>> 0)) {
            break;
          }
          var $46 = $28 - $40 | 0;
          if (($28 | 0) == ($40 | 0)) {
            break;
          }
          var $50 = HEAP32[$31$s2] - $46 | 0;
          HEAP32[$31$s2] = $50;
          var $52 = HEAP32[__gm_ + 432 >> 2] - $46 | 0;
          HEAP32[__gm_ + 432 >> 2] = $52;
          var $53 = HEAP32[__gm_ + 24 >> 2];
          var $55 = HEAP32[__gm_ + 12 >> 2] - $46 | 0;
          _init_top($53, $55);
          var $released_2 = ($28 | 0) != ($40 | 0);
          break $_$183;
        }
      } while (0);
      if (HEAPU32[__gm_ + 12 >> 2] >>> 0 <= HEAPU32[__gm_ + 28 >> 2] >>> 0) {
        var $released_2 = 0;
        break;
      }
      HEAP32[__gm_ + 28 >> 2] = -1;
      var $released_2 = 0;
    } else {
      var $released_2 = 0;
    }
  } while (0);
  var $released_2;
  return $released_2 & 1;
  return null;
}

_sys_trim["X"] = 1;

function _free($mem) {
  var $R7_1$s2;
  var $R_1$s2;
  var $p_0$s2;
  var $165$s2;
  var $_sum2$s2;
  var $14$s2;
  var $mem$s2 = $mem >> 2;
  var __label__;
  var $1 = ($mem | 0) == 0;
  $_$2 : do {
    if (!$1) {
      var $3 = $mem - 8 | 0;
      var $4 = $3;
      var $5 = HEAPU32[__gm_ + 16 >> 2];
      var $6 = $3 >>> 0 < $5 >>> 0;
      $_$4 : do {
        if (!$6) {
          var $10 = HEAPU32[$mem - 4 >> 2];
          var $11 = $10 & 3;
          if (($11 | 0) == 1) {
            break;
          }
          var $14 = $10 & -8, $14$s2 = $14 >> 2;
          var $15 = $mem + ($14 - 8) | 0;
          var $16 = $15;
          var $18 = ($10 & 1 | 0) == 0;
          $_$7 : do {
            if ($18) {
              var $21 = HEAPU32[$3 >> 2];
              if (($11 | 0) == 0) {
                break $_$2;
              }
              var $_sum2 = -8 - $21 | 0, $_sum2$s2 = $_sum2 >> 2;
              var $24 = $mem + $_sum2 | 0;
              var $25 = $24;
              var $26 = $21 + $14 | 0;
              if ($24 >>> 0 < $5 >>> 0) {
                break $_$4;
              }
              if (($25 | 0) == (HEAP32[__gm_ + 20 >> 2] | 0)) {
                var $165$s2 = ($mem + ($14 - 4) | 0) >> 2;
                if ((HEAP32[$165$s2] & 3 | 0) != 3) {
                  var $p_0 = $25, $p_0$s2 = $p_0 >> 2;
                  var $psize_0 = $26;
                  break;
                }
                HEAP32[__gm_ + 8 >> 2] = $26;
                var $171 = HEAP32[$165$s2] & -2;
                HEAP32[$165$s2] = $171;
                HEAP32[$_sum2$s2 + ($mem$s2 + 1)] = $26 | 1;
                HEAP32[$15 >> 2] = $26;
                break $_$2;
              }
              if ($21 >>> 0 < 256) {
                var $37 = HEAPU32[$_sum2$s2 + ($mem$s2 + 2)];
                var $40 = HEAPU32[$_sum2$s2 + ($mem$s2 + 3)];
                if (($37 | 0) == ($40 | 0)) {
                  var $46 = HEAP32[__gm_ >> 2] & (1 << ($21 >>> 3) ^ -1);
                  HEAP32[__gm_ >> 2] = $46;
                  var $p_0 = $25, $p_0$s2 = $p_0 >> 2;
                  var $psize_0 = $26;
                } else {
                  var $51 = (($21 >>> 2 & 1073741822) << 2) + __gm_ + 40 | 0;
                  var $or_cond = ($37 | 0) != ($51 | 0) & $37 >>> 0 < $5 >>> 0;
                  do {
                    if (!$or_cond) {
                      if (!(($40 | 0) == ($51 | 0) | $40 >>> 0 >= $5 >>> 0)) {
                        break;
                      }
                      HEAP32[$37 + 12 >> 2] = $40;
                      HEAP32[$40 + 8 >> 2] = $37;
                      var $p_0 = $25, $p_0$s2 = $p_0 >> 2;
                      var $psize_0 = $26;
                      break $_$7;
                    }
                  } while (0);
                  _abort();
                  throw "Reached an unreachable!";
                }
              } else {
                var $62 = $24;
                var $65 = HEAPU32[$_sum2$s2 + ($mem$s2 + 6)];
                var $68 = HEAPU32[$_sum2$s2 + ($mem$s2 + 3)];
                var $69 = ($68 | 0) == ($62 | 0);
                do {
                  if ($69) {
                    var $82 = $_sum2 + ($mem + 20) | 0;
                    var $83 = HEAP32[$82 >> 2];
                    if (($83 | 0) == 0) {
                      var $87 = $_sum2 + ($mem + 16) | 0;
                      var $88 = HEAP32[$87 >> 2];
                      if (($88 | 0) == 0) {
                        var $R_1 = 0, $R_1$s2 = $R_1 >> 2;
                        break;
                      }
                      var $RP_0 = $87;
                      var $R_0 = $88;
                    } else {
                      var $RP_0 = $82;
                      var $R_0 = $83;
                      __label__ = 21;
                    }
                    while (1) {
                      var $R_0;
                      var $RP_0;
                      var $90 = $R_0 + 20 | 0;
                      var $91 = HEAP32[$90 >> 2];
                      if (($91 | 0) != 0) {
                        var $RP_0 = $90;
                        var $R_0 = $91;
                        continue;
                      }
                      var $94 = $R_0 + 16 | 0;
                      var $95 = HEAPU32[$94 >> 2];
                      if (($95 | 0) == 0) {
                        break;
                      }
                      var $RP_0 = $94;
                      var $R_0 = $95;
                    }
                    if ($RP_0 >>> 0 < $5 >>> 0) {
                      _abort();
                      throw "Reached an unreachable!";
                    } else {
                      HEAP32[$RP_0 >> 2] = 0;
                      var $R_1 = $R_0, $R_1$s2 = $R_1 >> 2;
                    }
                  } else {
                    var $73 = HEAPU32[$_sum2$s2 + ($mem$s2 + 2)];
                    if ($73 >>> 0 < $5 >>> 0) {
                      _abort();
                      throw "Reached an unreachable!";
                    } else {
                      HEAP32[$73 + 12 >> 2] = $68;
                      HEAP32[$68 + 8 >> 2] = $73;
                      var $R_1 = $68, $R_1$s2 = $R_1 >> 2;
                    }
                  }
                } while (0);
                var $R_1;
                if (($65 | 0) == 0) {
                  var $p_0 = $25, $p_0$s2 = $p_0 >> 2;
                  var $psize_0 = $26;
                  break;
                }
                var $106 = $_sum2 + ($mem + 28) | 0;
                var $108 = (HEAP32[$106 >> 2] << 2) + __gm_ + 304 | 0;
                var $110 = ($62 | 0) == (HEAP32[$108 >> 2] | 0);
                do {
                  if ($110) {
                    HEAP32[$108 >> 2] = $R_1;
                    if (($R_1 | 0) != 0) {
                      break;
                    }
                    var $116 = HEAP32[__gm_ + 4 >> 2] & (1 << HEAP32[$106 >> 2] ^ -1);
                    HEAP32[__gm_ + 4 >> 2] = $116;
                    var $p_0 = $25, $p_0$s2 = $p_0 >> 2;
                    var $psize_0 = $26;
                    break $_$7;
                  }
                  if ($65 >>> 0 < HEAPU32[__gm_ + 16 >> 2] >>> 0) {
                    _abort();
                    throw "Reached an unreachable!";
                  } else {
                    var $122 = $65 + 16 | 0;
                    if ((HEAP32[$122 >> 2] | 0) == ($62 | 0)) {
                      HEAP32[$122 >> 2] = $R_1;
                    } else {
                      HEAP32[$65 + 20 >> 2] = $R_1;
                    }
                    if (($R_1 | 0) == 0) {
                      var $p_0 = $25, $p_0$s2 = $p_0 >> 2;
                      var $psize_0 = $26;
                      break $_$7;
                    }
                  }
                } while (0);
                if ($R_1 >>> 0 < HEAPU32[__gm_ + 16 >> 2] >>> 0) {
                  _abort();
                  throw "Reached an unreachable!";
                } else {
                  HEAP32[$R_1$s2 + 6] = $65;
                  var $139 = HEAPU32[$_sum2$s2 + ($mem$s2 + 4)];
                  if (($139 | 0) != 0) {
                    if ($139 >>> 0 < HEAPU32[__gm_ + 16 >> 2] >>> 0) {
                      _abort();
                      throw "Reached an unreachable!";
                    } else {
                      HEAP32[$R_1$s2 + 4] = $139;
                      HEAP32[$139 + 24 >> 2] = $R_1;
                    }
                  }
                  var $152 = HEAPU32[$_sum2$s2 + ($mem$s2 + 5)];
                  if (($152 | 0) == 0) {
                    var $p_0 = $25, $p_0$s2 = $p_0 >> 2;
                    var $psize_0 = $26;
                    break;
                  }
                  if ($152 >>> 0 < HEAPU32[__gm_ + 16 >> 2] >>> 0) {
                    _abort();
                    throw "Reached an unreachable!";
                  } else {
                    HEAP32[$R_1$s2 + 5] = $152;
                    HEAP32[$152 + 24 >> 2] = $R_1;
                    var $p_0 = $25, $p_0$s2 = $p_0 >> 2;
                    var $psize_0 = $26;
                  }
                }
              }
            } else {
              var $p_0 = $4, $p_0$s2 = $p_0 >> 2;
              var $psize_0 = $14;
            }
          } while (0);
          var $psize_0;
          var $p_0;
          var $177 = $p_0;
          if ($177 >>> 0 >= $15 >>> 0) {
            break;
          }
          var $181 = $mem + ($14 - 4) | 0;
          var $182 = HEAPU32[$181 >> 2];
          if (($182 & 1 | 0) == 0) {
            break;
          }
          var $187 = ($182 & 2 | 0) == 0;
          do {
            if ($187) {
              if (($16 | 0) == (HEAP32[__gm_ + 24 >> 2] | 0)) {
                var $193 = HEAP32[__gm_ + 12 >> 2] + $psize_0 | 0;
                HEAP32[__gm_ + 12 >> 2] = $193;
                HEAP32[__gm_ + 24 >> 2] = $p_0;
                var $194 = $193 | 1;
                HEAP32[$p_0$s2 + 1] = $194;
                if (($p_0 | 0) == (HEAP32[__gm_ + 20 >> 2] | 0)) {
                  HEAP32[__gm_ + 20 >> 2] = 0;
                  HEAP32[__gm_ + 8 >> 2] = 0;
                }
                if ($193 >>> 0 <= HEAPU32[__gm_ + 28 >> 2] >>> 0) {
                  break $_$2;
                }
                var $203 = _sys_trim(0);
                break $_$2;
              }
              if (($16 | 0) == (HEAP32[__gm_ + 20 >> 2] | 0)) {
                var $209 = HEAP32[__gm_ + 8 >> 2] + $psize_0 | 0;
                HEAP32[__gm_ + 8 >> 2] = $209;
                HEAP32[__gm_ + 20 >> 2] = $p_0;
                var $210 = $209 | 1;
                HEAP32[$p_0$s2 + 1] = $210;
                var $213 = $177 + $209 | 0;
                HEAP32[$213 >> 2] = $209;
                break $_$2;
              }
              var $216 = ($182 & -8) + $psize_0 | 0;
              var $217 = $182 >>> 3;
              var $218 = $182 >>> 0 < 256;
              $_$82 : do {
                if ($218) {
                  var $222 = HEAPU32[$mem$s2 + $14$s2];
                  var $225 = HEAPU32[(($14 | 4) >> 2) + $mem$s2];
                  if (($222 | 0) == ($225 | 0)) {
                    var $231 = HEAP32[__gm_ >> 2] & (1 << $217 ^ -1);
                    HEAP32[__gm_ >> 2] = $231;
                  } else {
                    var $236 = (($182 >>> 2 & 1073741822) << 2) + __gm_ + 40 | 0;
                    var $237 = ($222 | 0) == ($236 | 0);
                    do {
                      if ($237) {
                        __label__ = 63;
                      } else {
                        if ($222 >>> 0 < HEAPU32[__gm_ + 16 >> 2] >>> 0) {
                          __label__ = 66;
                          break;
                        }
                        __label__ = 63;
                        break;
                      }
                    } while (0);
                    do {
                      if (__label__ == 63) {
                        if (($225 | 0) != ($236 | 0)) {
                          if ($225 >>> 0 < HEAPU32[__gm_ + 16 >> 2] >>> 0) {
                            break;
                          }
                        }
                        HEAP32[$222 + 12 >> 2] = $225;
                        HEAP32[$225 + 8 >> 2] = $222;
                        break $_$82;
                      }
                    } while (0);
                    _abort();
                    throw "Reached an unreachable!";
                  }
                } else {
                  var $251 = $15;
                  var $254 = HEAPU32[$14$s2 + ($mem$s2 + 4)];
                  var $257 = HEAPU32[(($14 | 4) >> 2) + $mem$s2];
                  var $258 = ($257 | 0) == ($251 | 0);
                  do {
                    if ($258) {
                      var $272 = $14 + ($mem + 12) | 0;
                      var $273 = HEAP32[$272 >> 2];
                      if (($273 | 0) == 0) {
                        var $277 = $14 + ($mem + 8) | 0;
                        var $278 = HEAP32[$277 >> 2];
                        if (($278 | 0) == 0) {
                          var $R7_1 = 0, $R7_1$s2 = $R7_1 >> 2;
                          break;
                        }
                        var $RP9_0 = $277;
                        var $R7_0 = $278;
                      } else {
                        var $RP9_0 = $272;
                        var $R7_0 = $273;
                        __label__ = 73;
                      }
                      while (1) {
                        var $R7_0;
                        var $RP9_0;
                        var $280 = $R7_0 + 20 | 0;
                        var $281 = HEAP32[$280 >> 2];
                        if (($281 | 0) != 0) {
                          var $RP9_0 = $280;
                          var $R7_0 = $281;
                          continue;
                        }
                        var $284 = $R7_0 + 16 | 0;
                        var $285 = HEAPU32[$284 >> 2];
                        if (($285 | 0) == 0) {
                          break;
                        }
                        var $RP9_0 = $284;
                        var $R7_0 = $285;
                      }
                      if ($RP9_0 >>> 0 < HEAPU32[__gm_ + 16 >> 2] >>> 0) {
                        _abort();
                        throw "Reached an unreachable!";
                      } else {
                        HEAP32[$RP9_0 >> 2] = 0;
                        var $R7_1 = $R7_0, $R7_1$s2 = $R7_1 >> 2;
                      }
                    } else {
                      var $262 = HEAPU32[$mem$s2 + $14$s2];
                      if ($262 >>> 0 < HEAPU32[__gm_ + 16 >> 2] >>> 0) {
                        _abort();
                        throw "Reached an unreachable!";
                      } else {
                        HEAP32[$262 + 12 >> 2] = $257;
                        HEAP32[$257 + 8 >> 2] = $262;
                        var $R7_1 = $257, $R7_1$s2 = $R7_1 >> 2;
                      }
                    }
                  } while (0);
                  var $R7_1;
                  if (($254 | 0) == 0) {
                    break;
                  }
                  var $297 = $14 + ($mem + 20) | 0;
                  var $299 = (HEAP32[$297 >> 2] << 2) + __gm_ + 304 | 0;
                  var $301 = ($251 | 0) == (HEAP32[$299 >> 2] | 0);
                  do {
                    if ($301) {
                      HEAP32[$299 >> 2] = $R7_1;
                      if (($R7_1 | 0) != 0) {
                        break;
                      }
                      var $307 = HEAP32[__gm_ + 4 >> 2] & (1 << HEAP32[$297 >> 2] ^ -1);
                      HEAP32[__gm_ + 4 >> 2] = $307;
                      break $_$82;
                    }
                    if ($254 >>> 0 < HEAPU32[__gm_ + 16 >> 2] >>> 0) {
                      _abort();
                      throw "Reached an unreachable!";
                    } else {
                      var $313 = $254 + 16 | 0;
                      if ((HEAP32[$313 >> 2] | 0) == ($251 | 0)) {
                        HEAP32[$313 >> 2] = $R7_1;
                      } else {
                        HEAP32[$254 + 20 >> 2] = $R7_1;
                      }
                      if (($R7_1 | 0) == 0) {
                        break $_$82;
                      }
                    }
                  } while (0);
                  if ($R7_1 >>> 0 < HEAPU32[__gm_ + 16 >> 2] >>> 0) {
                    _abort();
                    throw "Reached an unreachable!";
                  } else {
                    HEAP32[$R7_1$s2 + 6] = $254;
                    var $330 = HEAPU32[$14$s2 + ($mem$s2 + 2)];
                    if (($330 | 0) != 0) {
                      if ($330 >>> 0 < HEAPU32[__gm_ + 16 >> 2] >>> 0) {
                        _abort();
                        throw "Reached an unreachable!";
                      } else {
                        HEAP32[$R7_1$s2 + 4] = $330;
                        HEAP32[$330 + 24 >> 2] = $R7_1;
                      }
                    }
                    var $343 = HEAPU32[$14$s2 + ($mem$s2 + 3)];
                    if (($343 | 0) == 0) {
                      break;
                    }
                    if ($343 >>> 0 < HEAPU32[__gm_ + 16 >> 2] >>> 0) {
                      _abort();
                      throw "Reached an unreachable!";
                    } else {
                      HEAP32[$R7_1$s2 + 5] = $343;
                      HEAP32[$343 + 24 >> 2] = $R7_1;
                    }
                  }
                }
              } while (0);
              HEAP32[$p_0$s2 + 1] = $216 | 1;
              HEAP32[$177 + $216 >> 2] = $216;
              if (($p_0 | 0) != (HEAP32[__gm_ + 20 >> 2] | 0)) {
                var $psize_1 = $216;
                break;
              }
              HEAP32[__gm_ + 8 >> 2] = $216;
              break $_$2;
            } else {
              HEAP32[$181 >> 2] = $182 & -2;
              HEAP32[$p_0$s2 + 1] = $psize_0 | 1;
              HEAP32[$177 + $psize_0 >> 2] = $psize_0;
              var $psize_1 = $psize_0;
            }
          } while (0);
          var $psize_1;
          if ($psize_1 >>> 0 < 256) {
            var $373 = $psize_1 >>> 2 & 1073741822;
            var $375 = ($373 << 2) + __gm_ + 40 | 0;
            var $376 = HEAPU32[__gm_ >> 2];
            var $377 = 1 << ($psize_1 >>> 3);
            var $379 = ($376 & $377 | 0) == 0;
            do {
              if ($379) {
                HEAP32[__gm_ >> 2] = $376 | $377;
                var $F16_0 = $375;
                var $_pre_phi = ($373 + 2 << 2) + __gm_ + 40 | 0;
              } else {
                var $383 = ($373 + 2 << 2) + __gm_ + 40 | 0;
                var $384 = HEAPU32[$383 >> 2];
                if ($384 >>> 0 >= HEAPU32[__gm_ + 16 >> 2] >>> 0) {
                  var $F16_0 = $384;
                  var $_pre_phi = $383;
                  break;
                }
                _abort();
                throw "Reached an unreachable!";
              }
            } while (0);
            var $_pre_phi;
            var $F16_0;
            HEAP32[$_pre_phi >> 2] = $p_0;
            HEAP32[$F16_0 + 12 >> 2] = $p_0;
            HEAP32[$p_0$s2 + 2] = $F16_0;
            HEAP32[$p_0$s2 + 3] = $375;
            break $_$2;
          }
          var $394 = $p_0;
          var $395 = $psize_1 >>> 8;
          var $396 = ($395 | 0) == 0;
          do {
            if ($396) {
              var $I18_0 = 0;
            } else {
              if ($psize_1 >>> 0 > 16777215) {
                var $I18_0 = 31;
                break;
              }
              var $402 = ($395 + 1048320 | 0) >>> 16 & 8;
              var $403 = $395 << $402;
              var $406 = ($403 + 520192 | 0) >>> 16 & 4;
              var $407 = $403 << $406;
              var $410 = ($407 + 245760 | 0) >>> 16 & 2;
              var $416 = 14 - ($406 | $402 | $410) + ($407 << $410 >>> 15) | 0;
              var $I18_0 = $psize_1 >>> (($416 + 7 | 0) >>> 0) & 1 | $416 << 1;
            }
          } while (0);
          var $I18_0;
          var $423 = ($I18_0 << 2) + __gm_ + 304 | 0;
          HEAP32[$p_0$s2 + 7] = $I18_0;
          HEAP32[$p_0$s2 + 5] = 0;
          HEAP32[$p_0$s2 + 4] = 0;
          var $427 = HEAP32[__gm_ + 4 >> 2];
          var $428 = 1 << $I18_0;
          var $430 = ($427 & $428 | 0) == 0;
          $_$154 : do {
            if ($430) {
              var $432 = $427 | $428;
              HEAP32[__gm_ + 4 >> 2] = $432;
              HEAP32[$423 >> 2] = $394;
              HEAP32[$p_0$s2 + 6] = $423;
              HEAP32[$p_0$s2 + 3] = $p_0;
              HEAP32[$p_0$s2 + 2] = $p_0;
            } else {
              if (($I18_0 | 0) == 31) {
                var $443 = 0;
              } else {
                var $443 = 25 - ($I18_0 >>> 1) | 0;
              }
              var $443;
              var $K19_0 = $psize_1 << $443;
              var $T_0 = HEAP32[$423 >> 2];
              while (1) {
                var $T_0;
                var $K19_0;
                if ((HEAP32[$T_0 + 4 >> 2] & -8 | 0) == ($psize_1 | 0)) {
                  var $467 = $T_0 + 8 | 0;
                  var $468 = HEAPU32[$467 >> 2];
                  var $470 = HEAPU32[__gm_ + 16 >> 2];
                  var $471 = $T_0 >>> 0 < $470 >>> 0;
                  do {
                    if (!$471) {
                      if ($468 >>> 0 < $470 >>> 0) {
                        break;
                      }
                      HEAP32[$468 + 12 >> 2] = $394;
                      HEAP32[$467 >> 2] = $394;
                      HEAP32[$p_0$s2 + 2] = $468;
                      HEAP32[$p_0$s2 + 3] = $T_0;
                      HEAP32[$p_0$s2 + 6] = 0;
                      break $_$154;
                    }
                  } while (0);
                  _abort();
                  throw "Reached an unreachable!";
                } else {
                  var $452 = ($K19_0 >>> 31 << 2) + $T_0 + 16 | 0;
                  var $453 = HEAPU32[$452 >> 2];
                  if (($453 | 0) == 0) {
                    if ($452 >>> 0 >= HEAPU32[__gm_ + 16 >> 2] >>> 0) {
                      HEAP32[$452 >> 2] = $394;
                      HEAP32[$p_0$s2 + 6] = $T_0;
                      HEAP32[$p_0$s2 + 3] = $p_0;
                      HEAP32[$p_0$s2 + 2] = $p_0;
                      break $_$154;
                    }
                    _abort();
                    throw "Reached an unreachable!";
                  } else {
                    var $K19_0 = $K19_0 << 1;
                    var $T_0 = $453;
                  }
                }
              }
            }
          } while (0);
          var $482 = HEAP32[__gm_ + 32 >> 2] - 1 | 0;
          HEAP32[__gm_ + 32 >> 2] = $482;
          if (($482 | 0) != 0) {
            break $_$2;
          }
          _release_unused_segments();
          break $_$2;
        }
      } while (0);
      _abort();
      throw "Reached an unreachable!";
    }
  } while (0);
  return;
  return;
}

Module["_free"] = _free;

_free["X"] = 1;

function _malloc_footprint() {
  return HEAP32[__gm_ + 432 >> 2];
  return null;
}

function _malloc_max_footprint() {
  return HEAP32[__gm_ + 436 >> 2];
  return null;
}

function _release_unused_segments() {
  var $sp_01 = HEAP32[__gm_ + 452 >> 2];
  var $1 = ($sp_01 | 0) == 0;
  $_$2 : do {
    if (!$1) {
      var $sp_02 = $sp_01;
      while (1) {
        var $sp_02;
        var $sp_0 = HEAP32[$sp_02 + 8 >> 2];
        if (($sp_0 | 0) == 0) {
          break $_$2;
        }
        var $sp_02 = $sp_0;
      }
    }
  } while (0);
  HEAP32[__gm_ + 32 >> 2] = -1;
  return;
  return;
}

function _calloc($n_elements, $elem_size) {
  var $1 = ($n_elements | 0) == 0;
  do {
    if ($1) {
      var $req_0 = 0;
    } else {
      var $3 = $elem_size * $n_elements | 0;
      if (($elem_size | $n_elements) >>> 0 <= 65535) {
        var $req_0 = $3;
        break;
      }
      var $7 = Math.floor(($3 >>> 0) / ($n_elements >>> 0));
      if (($7 | 0) == ($elem_size | 0)) {
        var $req_0 = $3;
        break;
      }
      var $req_0 = -1;
    }
  } while (0);
  var $req_0;
  var $11 = _malloc($req_0);
  var $12 = ($11 | 0) == 0;
  do {
    if (!$12) {
      if ((HEAP32[$11 - 4 >> 2] & 3 | 0) == 0) {
        break;
      }
      _memset($11, 0, $req_0, 1);
    }
  } while (0);
  return $11;
  return null;
}

function _realloc($oldmem, $bytes) {
  if (($oldmem | 0) == 0) {
    var $3 = _malloc($bytes);
    var $_0 = $3;
  } else {
    var $5 = _internal_realloc($oldmem, $bytes);
    var $_0 = $5;
  }
  var $_0;
  return $_0;
  return null;
}

function _memalign($alignment, $bytes) {
  var $1 = _internal_memalign($alignment, $bytes);
  return $1;
  return null;
}

function _internal_memalign($alignment, $bytes) {
  var $50$s2;
  var $1 = $alignment >>> 0 < 9;
  do {
    if ($1) {
      var $3 = _malloc($bytes);
      var $_0 = $3;
    } else {
      var $_01 = $alignment >>> 0 < 16 ? 16 : $alignment;
      var $8 = ($_01 - 1 & $_01 | 0) == 0;
      $_$56 : do {
        if ($8) {
          var $_1 = $_01;
        } else {
          if ($_01 >>> 0 <= 16) {
            var $_1 = 16;
            break;
          }
          var $a_08 = 16;
          while (1) {
            var $a_08;
            var $10 = $a_08 << 1;
            if ($10 >>> 0 >= $_01 >>> 0) {
              var $_1 = $10;
              break $_$56;
            }
            var $a_08 = $10;
          }
        }
      } while (0);
      var $_1;
      if ((-64 - $_1 | 0) >>> 0 > $bytes >>> 0) {
        if ($bytes >>> 0 < 11) {
          var $22 = 16;
        } else {
          var $22 = $bytes + 11 & -8;
        }
        var $22;
        var $25 = _malloc($22 + ($_1 + 12) | 0);
        if (($25 | 0) == 0) {
          var $_0 = 0;
          break;
        }
        var $28 = $25 - 8 | 0;
        if ((($25 >>> 0) % ($_1 >>> 0) | 0) == 0) {
          var $p_0_in = $28;
          var $leader_1 = 0;
        } else {
          var $37 = $25 + ($_1 - 1) & -$_1;
          var $38 = $37 - 8 | 0;
          var $40 = $28;
          if (($38 - $40 | 0) >>> 0 > 15) {
            var $46 = $38;
          } else {
            var $46 = $37 + ($_1 - 8) | 0;
          }
          var $46;
          var $48 = $46 - $40 | 0;
          var $50$s2 = ($25 - 4 | 0) >> 2;
          var $51 = HEAP32[$50$s2];
          var $53 = ($51 & -8) - $48 | 0;
          if (($51 & 3 | 0) == 0) {
            var $59 = HEAP32[$28 >> 2] + $48 | 0;
            HEAP32[$46 >> 2] = $59;
            HEAP32[$46 + 4 >> 2] = $53;
            var $p_0_in = $46;
            var $leader_1 = 0;
          } else {
            var $65 = $46 + 4 | 0;
            var $69 = $53 | HEAP32[$65 >> 2] & 1 | 2;
            HEAP32[$65 >> 2] = $69;
            var $71 = $53 + ($46 + 4) | 0;
            var $73 = HEAP32[$71 >> 2] | 1;
            HEAP32[$71 >> 2] = $73;
            var $77 = $48 | HEAP32[$50$s2] & 1 | 2;
            HEAP32[$50$s2] = $77;
            var $79 = $25 + ($48 - 4) | 0;
            var $81 = HEAP32[$79 >> 2] | 1;
            HEAP32[$79 >> 2] = $81;
            var $p_0_in = $46;
            var $leader_1 = $25;
          }
        }
        var $leader_1;
        var $p_0_in;
        var $83 = $p_0_in + 4 | 0;
        var $84 = HEAPU32[$83 >> 2];
        var $86 = ($84 & 3 | 0) == 0;
        do {
          if ($86) {
            var $trailer_0 = 0;
          } else {
            var $88 = $84 & -8;
            if ($88 >>> 0 <= ($22 + 16 | 0) >>> 0) {
              var $trailer_0 = 0;
              break;
            }
            var $92 = $88 - $22 | 0;
            HEAP32[$83 >> 2] = $22 | $84 & 1 | 2;
            HEAP32[$p_0_in + ($22 | 4) >> 2] = $92 | 3;
            var $100 = $p_0_in + ($88 | 4) | 0;
            var $102 = HEAP32[$100 >> 2] | 1;
            HEAP32[$100 >> 2] = $102;
            var $trailer_0 = $22 + ($p_0_in + 8) | 0;
          }
        } while (0);
        var $trailer_0;
        if (($leader_1 | 0) != 0) {
          _free($leader_1);
        }
        if (($trailer_0 | 0) != 0) {
          _free($trailer_0);
        }
        var $_0 = $p_0_in + 8 | 0;
      } else {
        var $15 = ___errno();
        HEAP32[$15 >> 2] = 12;
        var $_0 = 0;
      }
    }
  } while (0);
  var $_0;
  return $_0;
  return null;
}

_internal_memalign["X"] = 1;

function _independent_calloc($n_elements, $elem_size, $chunks) {
  var __stackBase__ = STACKTOP;
  STACKTOP += 4;
  var $sz = __stackBase__;
  HEAP32[$sz >> 2] = $elem_size;
  var $1 = _ialloc($n_elements, $sz, 3, $chunks);
  STACKTOP = __stackBase__;
  return $1;
  return null;
}

function _ialloc($n_elements, $sizes, $opts, $chunks) {
  var $marray_1$s2;
  var __label__;
  if ((HEAP32[_mparams >> 2] | 0) == 0) {
    _init_mparams();
  }
  var $5 = ($chunks | 0) == 0;
  var $6 = ($n_elements | 0) == 0;
  do {
    if ($5) {
      if ($6) {
        var $10 = _malloc(0);
        var $_0 = $10;
        __label__ = 30;
        break;
      }
      var $13 = $n_elements << 2;
      if ($13 >>> 0 < 11) {
        var $marray_0 = 0;
        var $array_size_0 = 16;
        __label__ = 9;
        break;
      }
      var $marray_0 = 0;
      var $array_size_0 = $13 + 11 & -8;
      __label__ = 9;
      break;
    } else {
      if ($6) {
        var $_0 = $chunks;
        __label__ = 30;
        break;
      }
      var $marray_0 = $chunks;
      var $array_size_0 = 0;
      __label__ = 9;
      break;
    }
  } while (0);
  do {
    if (__label__ == 9) {
      var $array_size_0;
      var $marray_0;
      var $20 = ($opts & 1 | 0) == 0;
      $_$102 : do {
        if ($20) {
          if ($6) {
            var $element_size_0 = 0;
            var $contents_size_1 = 0;
            break;
          }
          var $contents_size_07 = 0;
          var $i_08 = 0;
          while (1) {
            var $i_08;
            var $contents_size_07;
            var $31 = HEAPU32[$sizes + ($i_08 << 2) >> 2];
            if ($31 >>> 0 < 11) {
              var $37 = 16;
            } else {
              var $37 = $31 + 11 & -8;
            }
            var $37;
            var $38 = $37 + $contents_size_07 | 0;
            var $39 = $i_08 + 1 | 0;
            if (($39 | 0) == ($n_elements | 0)) {
              var $element_size_0 = 0;
              var $contents_size_1 = $38;
              break $_$102;
            }
            var $contents_size_07 = $38;
            var $i_08 = $39;
          }
        } else {
          var $22 = HEAPU32[$sizes >> 2];
          if ($22 >>> 0 < 11) {
            var $28 = 16;
          } else {
            var $28 = $22 + 11 & -8;
          }
          var $28;
          var $element_size_0 = $28;
          var $contents_size_1 = $28 * $n_elements | 0;
        }
      } while (0);
      var $contents_size_1;
      var $element_size_0;
      var $43 = _malloc($array_size_0 - 4 + $contents_size_1 | 0);
      if (($43 | 0) == 0) {
        var $_0 = 0;
        break;
      }
      var $46 = $43 - 8 | 0;
      var $50 = HEAP32[$43 - 4 >> 2] & -8;
      if (($opts & 2 | 0) != 0) {
        var $55 = -4 - $array_size_0 + $50 | 0;
        _memset($43, 0, $55, 1);
      }
      if (($marray_0 | 0) == 0) {
        var $61 = $43 + $contents_size_1 | 0;
        var $62 = $50 - $contents_size_1 | 3;
        HEAP32[$43 + ($contents_size_1 - 4) >> 2] = $62;
        var $marray_1 = $61, $marray_1$s2 = $marray_1 >> 2;
        var $remainder_size_0 = $contents_size_1;
      } else {
        var $marray_1 = $marray_0, $marray_1$s2 = $marray_1 >> 2;
        var $remainder_size_0 = $50;
      }
      var $remainder_size_0;
      var $marray_1;
      HEAP32[$marray_1$s2] = $43;
      var $66 = $n_elements - 1 | 0;
      var $67 = ($66 | 0) == 0;
      $_$121 : do {
        if ($67) {
          var $p_0_in_lcssa = $46;
          var $remainder_size_1_lcssa = $remainder_size_0;
        } else {
          if (($element_size_0 | 0) == 0) {
            var $p_0_in3_us = $46;
            var $remainder_size_14_us = $remainder_size_0;
            var $i_15_us = 0;
            while (1) {
              var $i_15_us;
              var $remainder_size_14_us;
              var $p_0_in3_us;
              var $81 = HEAPU32[$sizes + ($i_15_us << 2) >> 2];
              if ($81 >>> 0 < 11) {
                var $size_0_us = 16;
              } else {
                var $size_0_us = $81 + 11 & -8;
              }
              var $size_0_us;
              var $71 = $remainder_size_14_us - $size_0_us | 0;
              HEAP32[$p_0_in3_us + 4 >> 2] = $size_0_us | 3;
              var $75 = $p_0_in3_us + $size_0_us | 0;
              var $76 = $i_15_us + 1 | 0;
              HEAP32[($76 << 2 >> 2) + $marray_1$s2] = $size_0_us + ($p_0_in3_us + 8) | 0;
              if (($76 | 0) == ($66 | 0)) {
                var $p_0_in_lcssa = $75;
                var $remainder_size_1_lcssa = $71;
                break $_$121;
              }
              var $p_0_in3_us = $75;
              var $remainder_size_14_us = $71;
              var $i_15_us = $76;
            }
          } else {
            var $69 = $element_size_0 | 3;
            var $_sum = $element_size_0 + 8 | 0;
            var $p_0_in3 = $46;
            var $remainder_size_14 = $remainder_size_0;
            var $i_15 = 0;
            while (1) {
              var $i_15;
              var $remainder_size_14;
              var $p_0_in3;
              var $87 = $remainder_size_14 - $element_size_0 | 0;
              HEAP32[$p_0_in3 + 4 >> 2] = $69;
              var $90 = $p_0_in3 + $element_size_0 | 0;
              var $91 = $i_15 + 1 | 0;
              HEAP32[($91 << 2 >> 2) + $marray_1$s2] = $p_0_in3 + $_sum | 0;
              if (($91 | 0) == ($66 | 0)) {
                var $p_0_in_lcssa = $90;
                var $remainder_size_1_lcssa = $87;
                break $_$121;
              }
              var $p_0_in3 = $90;
              var $remainder_size_14 = $87;
              var $i_15 = $91;
            }
          }
        }
      } while (0);
      var $remainder_size_1_lcssa;
      var $p_0_in_lcssa;
      HEAP32[$p_0_in_lcssa + 4 >> 2] = $remainder_size_1_lcssa | 3;
      var $_0 = $marray_1;
    }
  } while (0);
  var $_0;
  return $_0;
  return null;
}

_ialloc["X"] = 1;

function _independent_comalloc($n_elements, $sizes, $chunks) {
  var $1 = _ialloc($n_elements, $sizes, 0, $chunks);
  return $1;
  return null;
}

function _valloc($bytes) {
  if ((HEAP32[_mparams >> 2] | 0) == 0) {
    _init_mparams();
  }
  var $5 = HEAP32[_mparams + 4 >> 2];
  var $6 = _memalign($5, $bytes);
  return $6;
  return null;
}

function _pvalloc($bytes) {
  if ((HEAP32[_mparams >> 2] | 0) == 0) {
    _init_mparams();
  }
  var $5 = HEAP32[_mparams + 4 >> 2];
  var $9 = $bytes - 1 + $5 & -$5;
  var $10 = _memalign($5, $9);
  return $10;
  return null;
}

function _malloc_trim($pad) {
  if ((HEAP32[_mparams >> 2] | 0) == 0) {
    _init_mparams();
  }
  var $5 = _sys_trim($pad);
  return $5;
  return null;
}

function _mallinfo($agg_result) {
  _internal_mallinfo($agg_result);
  return;
  return;
}

function _internal_mallinfo($agg_result) {
  var $agg_result$s2 = $agg_result >> 2;
  if ((HEAP32[_mparams >> 2] | 0) == 0) {
    _init_mparams();
  }
  var $5 = HEAPU32[__gm_ + 24 >> 2];
  if (($5 | 0) == 0) {
    var $nm_0_0 = 0;
    var $nm_1_0 = 0;
    var $nm_9_0 = 0;
    var $nm_8_0 = 0;
    var $nm_4_0 = 0;
    var $nm_5_0 = 0;
    var $nm_7_0 = 0;
  } else {
    var $8 = HEAPU32[__gm_ + 12 >> 2];
    var $9 = $8 + 40 | 0;
    var $s_02 = __gm_ + 444 | 0;
    var $sum_03 = $9;
    var $mfree_04 = $9;
    var $nfree_05 = 1;
    while (1) {
      var $nfree_05;
      var $mfree_04;
      var $sum_03;
      var $s_02;
      var $12 = HEAPU32[$s_02 >> 2];
      var $14 = $12 + 8 | 0;
      if (($14 & 7 | 0) == 0) {
        var $21 = 0;
      } else {
        var $21 = -$14 & 7;
      }
      var $21;
      var $23 = $s_02 + 4 | 0;
      var $q_0_in = $12 + $21 | 0;
      var $nfree_1 = $nfree_05;
      var $mfree_1 = $mfree_04;
      var $sum_1 = $sum_03;
      while (1) {
        var $sum_1;
        var $mfree_1;
        var $nfree_1;
        var $q_0_in;
        if ($q_0_in >>> 0 < $12 >>> 0) {
          break;
        }
        if ($q_0_in >>> 0 >= ($12 + HEAP32[$23 >> 2] | 0) >>> 0 | ($q_0_in | 0) == ($5 | 0)) {
          break;
        }
        var $34 = HEAP32[$q_0_in + 4 >> 2];
        if (($34 | 0) == 7) {
          break;
        }
        var $37 = $34 & -8;
        var $38 = $37 + $sum_1 | 0;
        if (($34 & 3 | 0) == 1) {
          var $nfree_2 = $nfree_1 + 1 | 0;
          var $mfree_2 = $37 + $mfree_1 | 0;
        } else {
          var $nfree_2 = $nfree_1;
          var $mfree_2 = $mfree_1;
        }
        var $mfree_2;
        var $nfree_2;
        var $q_0_in = $q_0_in + $37 | 0;
        var $nfree_1 = $nfree_2;
        var $mfree_1 = $mfree_2;
        var $sum_1 = $38;
      }
      var $47 = HEAPU32[$s_02 + 8 >> 2];
      if (($47 | 0) == 0) {
        break;
      }
      var $s_02 = $47;
      var $sum_03 = $sum_1;
      var $mfree_04 = $mfree_1;
      var $nfree_05 = $nfree_1;
    }
    var $50 = HEAP32[__gm_ + 432 >> 2];
    var $nm_0_0 = $sum_1;
    var $nm_1_0 = $nfree_1;
    var $nm_9_0 = $8;
    var $nm_8_0 = $mfree_1;
    var $nm_4_0 = $50 - $sum_1 | 0;
    var $nm_5_0 = HEAP32[__gm_ + 436 >> 2];
    var $nm_7_0 = $50 - $mfree_1 | 0;
  }
  var $nm_7_0;
  var $nm_5_0;
  var $nm_4_0;
  var $nm_8_0;
  var $nm_9_0;
  var $nm_1_0;
  var $nm_0_0;
  HEAP32[$agg_result$s2] = $nm_0_0;
  HEAP32[$agg_result$s2 + 1] = $nm_1_0;
  HEAP32[$agg_result$s2 + 2] = 0;
  HEAP32[$agg_result$s2 + 3] = 0;
  HEAP32[$agg_result$s2 + 4] = $nm_4_0;
  HEAP32[$agg_result$s2 + 5] = $nm_5_0;
  HEAP32[$agg_result$s2 + 6] = 0;
  HEAP32[$agg_result$s2 + 7] = $nm_7_0;
  HEAP32[$agg_result$s2 + 8] = $nm_8_0;
  HEAP32[$agg_result$s2 + 9] = $nm_9_0;
  return;
  return;
}

_internal_mallinfo["X"] = 1;

function _malloc_stats() {
  _internal_malloc_stats();
  return;
  return;
}

function _internal_malloc_stats() {
  if ((HEAP32[_mparams >> 2] | 0) == 0) {
    _init_mparams();
  }
  var $5 = HEAPU32[__gm_ + 24 >> 2];
  var $6 = ($5 | 0) == 0;
  $_$184 : do {
    if ($6) {
      var $maxfp_0 = 0;
      var $fp_0 = 0;
      var $used_3 = 0;
    } else {
      var $8 = HEAP32[__gm_ + 436 >> 2];
      var $9 = HEAPU32[__gm_ + 432 >> 2];
      var $s_03 = __gm_ + 444 | 0;
      var $used_04 = $9 - 40 - HEAP32[__gm_ + 12 >> 2] | 0;
      while (1) {
        var $used_04;
        var $s_03;
        var $14 = HEAPU32[$s_03 >> 2];
        var $16 = $14 + 8 | 0;
        if (($16 & 7 | 0) == 0) {
          var $23 = 0;
        } else {
          var $23 = -$16 & 7;
        }
        var $23;
        var $25 = $s_03 + 4 | 0;
        var $q_0_in = $14 + $23 | 0;
        var $used_1 = $used_04;
        while (1) {
          var $used_1;
          var $q_0_in;
          if ($q_0_in >>> 0 < $14 >>> 0) {
            break;
          }
          if ($q_0_in >>> 0 >= ($14 + HEAP32[$25 >> 2] | 0) >>> 0 | ($q_0_in | 0) == ($5 | 0)) {
            break;
          }
          var $36 = HEAP32[$q_0_in + 4 >> 2];
          if (($36 | 0) == 7) {
            break;
          }
          var $40 = $36 & -8;
          var $41 = ($36 & 3 | 0) == 1 ? $40 : 0;
          var $used_2 = $used_1 - $41 | 0;
          var $q_0_in = $q_0_in + $40 | 0;
          var $used_1 = $used_2;
        }
        var $44 = HEAPU32[$s_03 + 8 >> 2];
        if (($44 | 0) == 0) {
          var $maxfp_0 = $8;
          var $fp_0 = $9;
          var $used_3 = $used_1;
          break $_$184;
        }
        var $s_03 = $44;
        var $used_04 = $used_1;
      }
    }
  } while (0);
  var $used_3;
  var $fp_0;
  var $maxfp_0;
  var $48 = HEAP32[HEAP32[__impure_ptr >> 2] + 12 >> 2];
  var $49 = _fprintf($48, STRING_TABLE.__str339 | 0, (tempInt = STACKTOP, STACKTOP += 4, HEAP32[tempInt >> 2] = $maxfp_0, tempInt));
  var $52 = HEAP32[HEAP32[__impure_ptr >> 2] + 12 >> 2];
  var $53 = _fprintf($52, STRING_TABLE.__str1340 | 0, (tempInt = STACKTOP, STACKTOP += 4, HEAP32[tempInt >> 2] = $fp_0, tempInt));
  var $56 = HEAP32[HEAP32[__impure_ptr >> 2] + 12 >> 2];
  var $57 = _fprintf($56, STRING_TABLE.__str2341 | 0, (tempInt = STACKTOP, STACKTOP += 4, HEAP32[tempInt >> 2] = $used_3, tempInt));
  return;
  return;
}

_internal_malloc_stats["X"] = 1;

function _mallopt($param_number, $value) {
  var $1 = _change_mparam($param_number, $value);
  return $1;
  return null;
}

function _change_mparam($param_number, $value) {
  var __label__;
  if ((HEAP32[_mparams >> 2] | 0) == 0) {
    _init_mparams();
  } else {
    __label__ = 3;
  }
  do {
    if (($param_number | 0) == -1) {
      HEAP32[_mparams + 16 >> 2] = $value;
      var $_0 = 1;
    } else if (($param_number | 0) == -2) {
      if (HEAPU32[_mparams + 4 >> 2] >>> 0 > $value >>> 0) {
        var $_0 = 0;
        break;
      }
      if (($value - 1 & $value | 0) != 0) {
        var $_0 = 0;
        break;
      }
      HEAP32[_mparams + 8 >> 2] = $value;
      var $_0 = 1;
    } else if (($param_number | 0) == -3) {
      HEAP32[_mparams + 12 >> 2] = $value;
      var $_0 = 1;
    } else {
      var $_0 = 0;
    }
  } while (0);
  var $_0;
  return $_0;
  return null;
}

function _internal_realloc($oldmem, $bytes) {
  var $21$s2;
  var $8$s2;
  var __label__;
  var $1 = $bytes >>> 0 > 4294967231;
  $_$22 : do {
    if ($1) {
      var $3 = ___errno();
      HEAP32[$3 >> 2] = 12;
      var $_0 = 0;
    } else {
      var $5 = $oldmem - 8 | 0;
      var $6 = $5;
      var $8$s2 = ($oldmem - 4 | 0) >> 2;
      var $9 = HEAPU32[$8$s2];
      var $10 = $9 & -8;
      var $_sum = $10 - 8 | 0;
      var $12 = $oldmem + $_sum | 0;
      var $14 = $5 >>> 0 < HEAPU32[__gm_ + 16 >> 2] >>> 0;
      do {
        if (!$14) {
          var $16 = $9 & 3;
          if (!(($16 | 0) != 1 & ($_sum | 0) > -8)) {
            break;
          }
          var $21$s2 = ($oldmem + ($10 - 4) | 0) >> 2;
          if ((HEAP32[$21$s2] & 1 | 0) == 0) {
            break;
          }
          if ($bytes >>> 0 < 11) {
            var $31 = 16;
          } else {
            var $31 = $bytes + 11 & -8;
          }
          var $31;
          var $32 = ($16 | 0) == 0;
          do {
            if ($32) {
              var $34 = _mmap_resize($6, $31);
              var $extra_0 = 0;
              var $newp_0 = $34;
              __label__ = 17;
              break;
            }
            if ($10 >>> 0 < $31 >>> 0) {
              if (($12 | 0) != (HEAP32[__gm_ + 24 >> 2] | 0)) {
                __label__ = 21;
                break;
              }
              var $55 = HEAP32[__gm_ + 12 >> 2] + $10 | 0;
              if ($55 >>> 0 <= $31 >>> 0) {
                __label__ = 21;
                break;
              }
              var $58 = $55 - $31 | 0;
              var $60 = $oldmem + ($31 - 8) | 0;
              HEAP32[$8$s2] = $31 | $9 & 1 | 2;
              var $66 = $58 | 1;
              HEAP32[$oldmem + ($31 - 4) >> 2] = $66;
              HEAP32[__gm_ + 24 >> 2] = $60;
              HEAP32[__gm_ + 12 >> 2] = $58;
              var $extra_0 = 0;
              var $newp_0 = $6;
              __label__ = 17;
              break;
            }
            var $38 = $10 - $31 | 0;
            if ($38 >>> 0 <= 15) {
              var $extra_0 = 0;
              var $newp_0 = $6;
              __label__ = 17;
              break;
            }
            HEAP32[$8$s2] = $31 | $9 & 1 | 2;
            HEAP32[$oldmem + ($31 - 4) >> 2] = $38 | 3;
            var $48 = HEAP32[$21$s2] | 1;
            HEAP32[$21$s2] = $48;
            var $extra_0 = $oldmem + $31 | 0;
            var $newp_0 = $6;
            __label__ = 17;
            break;
          } while (0);
          do {
            if (__label__ == 17) {
              var $newp_0;
              var $extra_0;
              if (($newp_0 | 0) == 0) {
                break;
              }
              if (($extra_0 | 0) != 0) {
                _free($extra_0);
              }
              var $_0 = $newp_0 + 8 | 0;
              break $_$22;
            }
          } while (0);
          var $75 = _malloc($bytes);
          if (($75 | 0) == 0) {
            var $_0 = 0;
            break $_$22;
          }
          var $81 = (HEAP32[$8$s2] & 3 | 0) == 0 ? 8 : 4;
          var $82 = $10 - $81 | 0;
          var $84 = $82 >>> 0 < $bytes >>> 0 ? $82 : $bytes;
          _memcpy($75, $oldmem, $84, 1);
          _free($oldmem);
          var $_0 = $75;
          break $_$22;
        }
      } while (0);
      _abort();
      throw "Reached an unreachable!";
    }
  } while (0);
  var $_0;
  return $_0;
  return null;
}

_internal_realloc["X"] = 1;

function _init_mparams() {
  if ((HEAP32[_mparams >> 2] | 0) == 0) {
    var $4 = _sysconf(8);
    if (($4 - 1 & $4 | 0) == 0) {
      HEAP32[_mparams + 8 >> 2] = $4;
      HEAP32[_mparams + 4 >> 2] = $4;
      HEAP32[_mparams + 12 >> 2] = -1;
      HEAP32[_mparams + 16 >> 2] = 2097152;
      HEAP32[_mparams + 20 >> 2] = 0;
      HEAP32[__gm_ + 440 >> 2] = 0;
      var $10 = _time(0);
      HEAP32[_mparams >> 2] = $10 & -16 ^ 1431655768;
    } else {
      _abort();
      throw "Reached an unreachable!";
    }
  }
  return;
  return;
}

function _malloc_usable_size($mem) {
  var $1 = ($mem | 0) == 0;
  do {
    if ($1) {
      var $_0 = 0;
    } else {
      var $5 = HEAP32[$mem - 4 >> 2];
      var $6 = $5 & 3;
      if (($6 | 0) == 1) {
        var $_0 = 0;
        break;
      }
      var $11 = ($6 | 0) == 0 ? 8 : 4;
      var $_0 = ($5 & -8) - $11 | 0;
    }
  } while (0);
  var $_0;
  return $_0;
  return null;
}

function _mmap_resize($oldp, $nb) {
  var $3 = HEAP32[$oldp + 4 >> 2] & -8;
  var $4 = $nb >>> 0 < 256;
  do {
    if ($4) {
      var $_0 = 0;
    } else {
      if ($3 >>> 0 >= ($nb + 4 | 0) >>> 0) {
        if (($3 - $nb | 0) >>> 0 <= HEAP32[_mparams + 8 >> 2] << 1 >>> 0) {
          var $_0 = $oldp;
          break;
        }
      }
      var $_0 = 0;
    }
  } while (0);
  var $_0;
  return $_0;
  return null;
}

function _segment_holding($addr) {
  var $sp_0$s2;
  var $sp_0 = __gm_ + 444 | 0, $sp_0$s2 = $sp_0 >> 2;
  while (1) {
    var $sp_0;
    var $3 = HEAPU32[$sp_0$s2];
    if ($3 >>> 0 <= $addr >>> 0) {
      if (($3 + HEAP32[$sp_0$s2 + 1] | 0) >>> 0 > $addr >>> 0) {
        var $_0 = $sp_0;
        break;
      }
    }
    var $12 = HEAPU32[$sp_0$s2 + 2];
    if (($12 | 0) == 0) {
      var $_0 = 0;
      break;
    }
    var $sp_0 = $12, $sp_0$s2 = $sp_0 >> 2;
  }
  var $_0;
  return $_0;
  return null;
}

function _init_top($p, $psize) {
  var $1 = $p;
  var $3 = $p + 8 | 0;
  if (($3 & 7 | 0) == 0) {
    var $10 = 0;
  } else {
    var $10 = -$3 & 7;
  }
  var $10;
  var $13 = $psize - $10 | 0;
  HEAP32[__gm_ + 24 >> 2] = $1 + $10 | 0;
  HEAP32[__gm_ + 12 >> 2] = $13;
  HEAP32[$10 + ($1 + 4) >> 2] = $13 | 1;
  HEAP32[$psize + ($1 + 4) >> 2] = 40;
  var $19 = HEAP32[_mparams + 16 >> 2];
  HEAP32[__gm_ + 28 >> 2] = $19;
  return;
  return;
}

function _init_bins() {
  var $i_02 = 0;
  while (1) {
    var $i_02;
    var $2 = $i_02 << 1;
    var $4 = ($2 << 2) + __gm_ + 40 | 0;
    HEAP32[__gm_ + ($2 + 3 << 2) + 40 >> 2] = $4;
    HEAP32[__gm_ + ($2 + 2 << 2) + 40 >> 2] = $4;
    var $7 = $i_02 + 1 | 0;
    if (($7 | 0) == 32) {
      break;
    }
    var $i_02 = $7;
  }
  return;
  return;
}

function _prepend_alloc($newbase, $oldbase, $nb) {
  var $R_1$s2;
  var $_sum$s2;
  var $19$s2;
  var $oldbase$s2 = $oldbase >> 2;
  var $newbase$s2 = $newbase >> 2;
  var __label__;
  var $2 = $newbase + 8 | 0;
  if (($2 & 7 | 0) == 0) {
    var $9 = 0;
  } else {
    var $9 = -$2 & 7;
  }
  var $9;
  var $12 = $oldbase + 8 | 0;
  if (($12 & 7 | 0) == 0) {
    var $19 = 0, $19$s2 = $19 >> 2;
  } else {
    var $19 = -$12 & 7, $19$s2 = $19 >> 2;
  }
  var $19;
  var $20 = $oldbase + $19 | 0;
  var $21 = $20;
  var $_sum = $9 + $nb | 0, $_sum$s2 = $_sum >> 2;
  var $25 = $newbase + $_sum | 0;
  var $26 = $25;
  var $27 = $20 - ($newbase + $9) - $nb | 0;
  HEAP32[($9 + 4 >> 2) + $newbase$s2] = $nb | 3;
  var $32 = ($21 | 0) == (HEAP32[__gm_ + 24 >> 2] | 0);
  $_$35 : do {
    if ($32) {
      var $35 = HEAP32[__gm_ + 12 >> 2] + $27 | 0;
      HEAP32[__gm_ + 12 >> 2] = $35;
      HEAP32[__gm_ + 24 >> 2] = $26;
      var $36 = $35 | 1;
      HEAP32[$_sum$s2 + ($newbase$s2 + 1)] = $36;
    } else {
      if (($21 | 0) == (HEAP32[__gm_ + 20 >> 2] | 0)) {
        var $44 = HEAP32[__gm_ + 8 >> 2] + $27 | 0;
        HEAP32[__gm_ + 8 >> 2] = $44;
        HEAP32[__gm_ + 20 >> 2] = $26;
        var $45 = $44 | 1;
        HEAP32[$_sum$s2 + ($newbase$s2 + 1)] = $45;
        var $49 = $newbase + $44 + $_sum | 0;
        HEAP32[$49 >> 2] = $44;
      } else {
        var $53 = HEAPU32[$19$s2 + ($oldbase$s2 + 1)];
        if (($53 & 3 | 0) == 1) {
          var $57 = $53 & -8;
          var $58 = $53 >>> 3;
          var $59 = $53 >>> 0 < 256;
          $_$43 : do {
            if ($59) {
              var $63 = HEAPU32[(($19 | 8) >> 2) + $oldbase$s2];
              var $66 = HEAPU32[$19$s2 + ($oldbase$s2 + 3)];
              if (($63 | 0) == ($66 | 0)) {
                var $72 = HEAP32[__gm_ >> 2] & (1 << $58 ^ -1);
                HEAP32[__gm_ >> 2] = $72;
              } else {
                var $77 = (($53 >>> 2 & 1073741822) << 2) + __gm_ + 40 | 0;
                var $78 = ($63 | 0) == ($77 | 0);
                do {
                  if ($78) {
                    __label__ = 15;
                  } else {
                    if ($63 >>> 0 < HEAPU32[__gm_ + 16 >> 2] >>> 0) {
                      __label__ = 18;
                      break;
                    }
                    __label__ = 15;
                    break;
                  }
                } while (0);
                do {
                  if (__label__ == 15) {
                    if (($66 | 0) != ($77 | 0)) {
                      if ($66 >>> 0 < HEAPU32[__gm_ + 16 >> 2] >>> 0) {
                        break;
                      }
                    }
                    HEAP32[$63 + 12 >> 2] = $66;
                    HEAP32[$66 + 8 >> 2] = $63;
                    break $_$43;
                  }
                } while (0);
                _abort();
                throw "Reached an unreachable!";
              }
            } else {
              var $92 = $20;
              var $95 = HEAPU32[(($19 | 24) >> 2) + $oldbase$s2];
              var $98 = HEAPU32[$19$s2 + ($oldbase$s2 + 3)];
              var $99 = ($98 | 0) == ($92 | 0);
              do {
                if ($99) {
                  var $_sum67 = $19 | 16;
                  var $113 = $_sum67 + ($oldbase + 4) | 0;
                  var $114 = HEAP32[$113 >> 2];
                  if (($114 | 0) == 0) {
                    var $118 = $oldbase + $_sum67 | 0;
                    var $119 = HEAP32[$118 >> 2];
                    if (($119 | 0) == 0) {
                      var $R_1 = 0, $R_1$s2 = $R_1 >> 2;
                      break;
                    }
                    var $RP_0 = $118;
                    var $R_0 = $119;
                  } else {
                    var $RP_0 = $113;
                    var $R_0 = $114;
                    __label__ = 25;
                  }
                  while (1) {
                    var $R_0;
                    var $RP_0;
                    var $121 = $R_0 + 20 | 0;
                    var $122 = HEAP32[$121 >> 2];
                    if (($122 | 0) != 0) {
                      var $RP_0 = $121;
                      var $R_0 = $122;
                      continue;
                    }
                    var $125 = $R_0 + 16 | 0;
                    var $126 = HEAPU32[$125 >> 2];
                    if (($126 | 0) == 0) {
                      break;
                    }
                    var $RP_0 = $125;
                    var $R_0 = $126;
                  }
                  if ($RP_0 >>> 0 < HEAPU32[__gm_ + 16 >> 2] >>> 0) {
                    _abort();
                    throw "Reached an unreachable!";
                  } else {
                    HEAP32[$RP_0 >> 2] = 0;
                    var $R_1 = $R_0, $R_1$s2 = $R_1 >> 2;
                  }
                } else {
                  var $103 = HEAPU32[(($19 | 8) >> 2) + $oldbase$s2];
                  if ($103 >>> 0 < HEAPU32[__gm_ + 16 >> 2] >>> 0) {
                    _abort();
                    throw "Reached an unreachable!";
                  } else {
                    HEAP32[$103 + 12 >> 2] = $98;
                    HEAP32[$98 + 8 >> 2] = $103;
                    var $R_1 = $98, $R_1$s2 = $R_1 >> 2;
                  }
                }
              } while (0);
              var $R_1;
              if (($95 | 0) == 0) {
                break;
              }
              var $138 = $19 + ($oldbase + 28) | 0;
              var $140 = (HEAP32[$138 >> 2] << 2) + __gm_ + 304 | 0;
              var $142 = ($92 | 0) == (HEAP32[$140 >> 2] | 0);
              do {
                if ($142) {
                  HEAP32[$140 >> 2] = $R_1;
                  if (($R_1 | 0) != 0) {
                    break;
                  }
                  var $148 = HEAP32[__gm_ + 4 >> 2] & (1 << HEAP32[$138 >> 2] ^ -1);
                  HEAP32[__gm_ + 4 >> 2] = $148;
                  break $_$43;
                }
                if ($95 >>> 0 < HEAPU32[__gm_ + 16 >> 2] >>> 0) {
                  _abort();
                  throw "Reached an unreachable!";
                } else {
                  var $154 = $95 + 16 | 0;
                  if ((HEAP32[$154 >> 2] | 0) == ($92 | 0)) {
                    HEAP32[$154 >> 2] = $R_1;
                  } else {
                    HEAP32[$95 + 20 >> 2] = $R_1;
                  }
                  if (($R_1 | 0) == 0) {
                    break $_$43;
                  }
                }
              } while (0);
              if ($R_1 >>> 0 < HEAPU32[__gm_ + 16 >> 2] >>> 0) {
                _abort();
                throw "Reached an unreachable!";
              } else {
                HEAP32[$R_1$s2 + 6] = $95;
                var $_sum3132 = $19 | 16;
                var $171 = HEAPU32[($_sum3132 >> 2) + $oldbase$s2];
                if (($171 | 0) != 0) {
                  if ($171 >>> 0 < HEAPU32[__gm_ + 16 >> 2] >>> 0) {
                    _abort();
                    throw "Reached an unreachable!";
                  } else {
                    HEAP32[$R_1$s2 + 4] = $171;
                    HEAP32[$171 + 24 >> 2] = $R_1;
                  }
                }
                var $184 = HEAPU32[($_sum3132 + 4 >> 2) + $oldbase$s2];
                if (($184 | 0) == 0) {
                  break;
                }
                if ($184 >>> 0 < HEAPU32[__gm_ + 16 >> 2] >>> 0) {
                  _abort();
                  throw "Reached an unreachable!";
                } else {
                  HEAP32[$R_1$s2 + 5] = $184;
                  HEAP32[$184 + 24 >> 2] = $R_1;
                }
              }
            }
          } while (0);
          var $oldfirst_0 = $oldbase + ($57 | $19) | 0;
          var $qsize_0 = $57 + $27 | 0;
        } else {
          var $oldfirst_0 = $21;
          var $qsize_0 = $27;
        }
        var $qsize_0;
        var $oldfirst_0;
        var $200 = $oldfirst_0 + 4 | 0;
        var $202 = HEAP32[$200 >> 2] & -2;
        HEAP32[$200 >> 2] = $202;
        HEAP32[$_sum$s2 + ($newbase$s2 + 1)] = $qsize_0 | 1;
        HEAP32[($qsize_0 >> 2) + $newbase$s2 + $_sum$s2] = $qsize_0;
        if ($qsize_0 >>> 0 < 256) {
          var $212 = $qsize_0 >>> 2 & 1073741822;
          var $214 = ($212 << 2) + __gm_ + 40 | 0;
          var $215 = HEAPU32[__gm_ >> 2];
          var $216 = 1 << ($qsize_0 >>> 3);
          var $218 = ($215 & $216 | 0) == 0;
          do {
            if ($218) {
              HEAP32[__gm_ >> 2] = $215 | $216;
              var $F4_0 = $214;
              var $_pre_phi = ($212 + 2 << 2) + __gm_ + 40 | 0;
            } else {
              var $222 = ($212 + 2 << 2) + __gm_ + 40 | 0;
              var $223 = HEAPU32[$222 >> 2];
              if ($223 >>> 0 >= HEAPU32[__gm_ + 16 >> 2] >>> 0) {
                var $F4_0 = $223;
                var $_pre_phi = $222;
                break;
              }
              _abort();
              throw "Reached an unreachable!";
            }
          } while (0);
          var $_pre_phi;
          var $F4_0;
          HEAP32[$_pre_phi >> 2] = $26;
          HEAP32[$F4_0 + 12 >> 2] = $26;
          HEAP32[$_sum$s2 + ($newbase$s2 + 2)] = $F4_0;
          HEAP32[$_sum$s2 + ($newbase$s2 + 3)] = $214;
        } else {
          var $235 = $25;
          var $236 = $qsize_0 >>> 8;
          var $237 = ($236 | 0) == 0;
          do {
            if ($237) {
              var $I7_0 = 0;
            } else {
              if ($qsize_0 >>> 0 > 16777215) {
                var $I7_0 = 31;
                break;
              }
              var $243 = ($236 + 1048320 | 0) >>> 16 & 8;
              var $244 = $236 << $243;
              var $247 = ($244 + 520192 | 0) >>> 16 & 4;
              var $248 = $244 << $247;
              var $251 = ($248 + 245760 | 0) >>> 16 & 2;
              var $257 = 14 - ($247 | $243 | $251) + ($248 << $251 >>> 15) | 0;
              var $I7_0 = $qsize_0 >>> (($257 + 7 | 0) >>> 0) & 1 | $257 << 1;
            }
          } while (0);
          var $I7_0;
          var $264 = ($I7_0 << 2) + __gm_ + 304 | 0;
          HEAP32[$_sum$s2 + ($newbase$s2 + 7)] = $I7_0;
          var $267 = $_sum + ($newbase + 16) | 0;
          HEAP32[$_sum$s2 + ($newbase$s2 + 5)] = 0;
          HEAP32[$267 >> 2] = 0;
          var $271 = HEAP32[__gm_ + 4 >> 2];
          var $272 = 1 << $I7_0;
          if (($271 & $272 | 0) == 0) {
            var $276 = $271 | $272;
            HEAP32[__gm_ + 4 >> 2] = $276;
            HEAP32[$264 >> 2] = $235;
            HEAP32[$_sum$s2 + ($newbase$s2 + 6)] = $264;
            HEAP32[$_sum$s2 + ($newbase$s2 + 3)] = $235;
            HEAP32[$_sum$s2 + ($newbase$s2 + 2)] = $235;
          } else {
            if (($I7_0 | 0) == 31) {
              var $291 = 0;
            } else {
              var $291 = 25 - ($I7_0 >>> 1) | 0;
            }
            var $291;
            var $K8_0 = $qsize_0 << $291;
            var $T_0 = HEAP32[$264 >> 2];
            while (1) {
              var $T_0;
              var $K8_0;
              if ((HEAP32[$T_0 + 4 >> 2] & -8 | 0) == ($qsize_0 | 0)) {
                var $318 = $T_0 + 8 | 0;
                var $319 = HEAPU32[$318 >> 2];
                var $321 = HEAPU32[__gm_ + 16 >> 2];
                var $322 = $T_0 >>> 0 < $321 >>> 0;
                do {
                  if (!$322) {
                    if ($319 >>> 0 < $321 >>> 0) {
                      break;
                    }
                    HEAP32[$319 + 12 >> 2] = $235;
                    HEAP32[$318 >> 2] = $235;
                    HEAP32[$_sum$s2 + ($newbase$s2 + 2)] = $319;
                    HEAP32[$_sum$s2 + ($newbase$s2 + 3)] = $T_0;
                    HEAP32[$_sum$s2 + ($newbase$s2 + 6)] = 0;
                    break $_$35;
                  }
                } while (0);
                _abort();
                throw "Reached an unreachable!";
              } else {
                var $300 = ($K8_0 >>> 31 << 2) + $T_0 + 16 | 0;
                var $301 = HEAPU32[$300 >> 2];
                if (($301 | 0) == 0) {
                  if ($300 >>> 0 >= HEAPU32[__gm_ + 16 >> 2] >>> 0) {
                    HEAP32[$300 >> 2] = $235;
                    HEAP32[$_sum$s2 + ($newbase$s2 + 6)] = $T_0;
                    HEAP32[$_sum$s2 + ($newbase$s2 + 3)] = $235;
                    HEAP32[$_sum$s2 + ($newbase$s2 + 2)] = $235;
                    break $_$35;
                  }
                  _abort();
                  throw "Reached an unreachable!";
                } else {
                  var $K8_0 = $K8_0 << 1;
                  var $T_0 = $301;
                }
              }
            }
          }
        }
      }
    }
  } while (0);
  return $newbase + ($9 | 8) | 0;
  return null;
}

_prepend_alloc["X"] = 1;

function __ZNKSt9bad_alloc4whatEv($this) {
  return STRING_TABLE.__str3342 | 0;
  return null;
}

function __ZNKSt20bad_array_new_length4whatEv($this) {
  return STRING_TABLE.__str14343 | 0;
  return null;
}

function __ZSt15get_new_handlerv() {
  var $1 = (tempValue = HEAP32[__ZL13__new_handler >> 2], HEAP32[__ZL13__new_handler >> 2] = tempValue, tempValue);
  return $1;
  return null;
}

function __ZSt15set_new_handlerPFvvE($handler) {
  var $1 = $handler;
  var $2 = (tempValue = HEAP32[__ZL13__new_handler >> 2], HEAP32[__ZL13__new_handler >> 2] = $1, tempValue);
  return $2;
  return null;
}

function __ZNSt9bad_allocC2Ev($this) {
  HEAP32[$this >> 2] = __ZTVSt9bad_alloc + 8 | 0;
  return;
  return;
}

function __ZdlPv($ptr) {
  if (($ptr | 0) != 0) {
    _free($ptr);
  }
  return;
  return;
}

function __ZdlPvRKSt9nothrow_t($ptr, $0) {
  __ZdlPv($ptr);
  return;
  return;
}

function __ZdaPv($ptr) {
  __ZdlPv($ptr);
  return;
  return;
}

function __ZdaPvRKSt9nothrow_t($ptr, $0) {
  __ZdaPv($ptr);
  return;
  return;
}

function __ZNSt9bad_allocD0Ev($this) {
  __ZNSt9bad_allocD2Ev($this);
  var $1 = $this;
  __ZdlPv($1);
  return;
  return;
}

function __ZNSt9bad_allocD2Ev($this) {
  var $1 = $this | 0;
  __ZNSt9exceptionD2Ev($1);
  return;
  return;
}

function __ZNSt20bad_array_new_lengthC2Ev($this) {
  var $1 = $this | 0;
  __ZNSt9bad_allocC2Ev($1);
  HEAP32[$this >> 2] = __ZTVSt20bad_array_new_length + 8 | 0;
  return;
  return;
}

function __ZNSt20bad_array_new_lengthD0Ev($this) {
  var $1 = $this | 0;
  __ZNSt9bad_allocD2Ev($1);
  var $2 = $this;
  __ZdlPv($2);
  return;
  return;
}

function _add_segment($tbase, $tsize) {
  var $23$s2;
  var $1$s2;
  var $1 = HEAPU32[__gm_ + 24 >> 2], $1$s2 = $1 >> 2;
  var $2 = $1;
  var $3 = _segment_holding($2);
  var $5 = HEAP32[$3 >> 2];
  var $7 = HEAP32[$3 + 4 >> 2];
  var $8 = $5 + $7 | 0;
  var $10 = $5 + ($7 - 39) | 0;
  if (($10 & 7 | 0) == 0) {
    var $17 = 0;
  } else {
    var $17 = -$10 & 7;
  }
  var $17;
  var $18 = $5 + ($7 - 47) + $17 | 0;
  var $22 = $18 >>> 0 < ($1 + 16 | 0) >>> 0 ? $2 : $18;
  var $23 = $22 + 8 | 0, $23$s2 = $23 >> 2;
  var $24 = $23;
  var $25 = $tbase;
  var $26 = $tsize - 40 | 0;
  _init_top($25, $26);
  var $28 = $22 + 4 | 0;
  HEAP32[$28 >> 2] = 27;
  HEAP32[$23$s2] = HEAP32[__gm_ + 444 >> 2];
  HEAP32[$23$s2 + 1] = HEAP32[__gm_ + 448 >> 2];
  HEAP32[$23$s2 + 2] = HEAP32[__gm_ + 452 >> 2];
  HEAP32[$23$s2 + 3] = HEAP32[__gm_ + 456 >> 2];
  HEAP32[__gm_ + 444 >> 2] = $tbase;
  HEAP32[__gm_ + 448 >> 2] = $tsize;
  HEAP32[__gm_ + 456 >> 2] = 0;
  HEAP32[__gm_ + 452 >> 2] = $24;
  var $30 = $22 + 28 | 0;
  HEAP32[$30 >> 2] = 7;
  var $32 = ($22 + 32 | 0) >>> 0 < $8 >>> 0;
  $_$5 : do {
    if ($32) {
      var $33 = $30;
      while (1) {
        var $33;
        var $34 = $33 + 4 | 0;
        HEAP32[$34 >> 2] = 7;
        if (($33 + 8 | 0) >>> 0 >= $8 >>> 0) {
          break $_$5;
        }
        var $33 = $34;
      }
    }
  } while (0);
  var $38 = ($22 | 0) == ($2 | 0);
  $_$9 : do {
    if (!$38) {
      var $42 = $22 - $1 | 0;
      var $43 = $2 + $42 | 0;
      var $45 = $42 + ($2 + 4) | 0;
      var $47 = HEAP32[$45 >> 2] & -2;
      HEAP32[$45 >> 2] = $47;
      var $48 = $42 | 1;
      HEAP32[$1$s2 + 1] = $48;
      var $50 = $43;
      HEAP32[$50 >> 2] = $42;
      if ($42 >>> 0 < 256) {
        var $55 = $42 >>> 2 & 1073741822;
        var $57 = ($55 << 2) + __gm_ + 40 | 0;
        var $58 = HEAPU32[__gm_ >> 2];
        var $59 = 1 << ($42 >>> 3);
        var $61 = ($58 & $59 | 0) == 0;
        do {
          if ($61) {
            var $63 = $58 | $59;
            HEAP32[__gm_ >> 2] = $63;
            var $F_0 = $57;
            var $_pre_phi = ($55 + 2 << 2) + __gm_ + 40 | 0;
          } else {
            var $65 = ($55 + 2 << 2) + __gm_ + 40 | 0;
            var $66 = HEAPU32[$65 >> 2];
            if ($66 >>> 0 >= HEAPU32[__gm_ + 16 >> 2] >>> 0) {
              var $F_0 = $66;
              var $_pre_phi = $65;
              break;
            }
            _abort();
            throw "Reached an unreachable!";
          }
        } while (0);
        var $_pre_phi;
        var $F_0;
        HEAP32[$_pre_phi >> 2] = $1;
        HEAP32[$F_0 + 12 >> 2] = $1;
        HEAP32[$1$s2 + 2] = $F_0;
        HEAP32[$1$s2 + 3] = $57;
      } else {
        var $76 = $1;
        var $77 = $42 >>> 8;
        var $78 = ($77 | 0) == 0;
        do {
          if ($78) {
            var $I1_0 = 0;
          } else {
            if ($42 >>> 0 > 16777215) {
              var $I1_0 = 31;
              break;
            }
            var $84 = ($77 + 1048320 | 0) >>> 16 & 8;
            var $85 = $77 << $84;
            var $88 = ($85 + 520192 | 0) >>> 16 & 4;
            var $89 = $85 << $88;
            var $92 = ($89 + 245760 | 0) >>> 16 & 2;
            var $98 = 14 - ($88 | $84 | $92) + ($89 << $92 >>> 15) | 0;
            var $I1_0 = $42 >>> (($98 + 7 | 0) >>> 0) & 1 | $98 << 1;
          }
        } while (0);
        var $I1_0;
        var $105 = ($I1_0 << 2) + __gm_ + 304 | 0;
        HEAP32[$1$s2 + 7] = $I1_0;
        HEAP32[$1$s2 + 5] = 0;
        HEAP32[$1$s2 + 4] = 0;
        var $109 = HEAP32[__gm_ + 4 >> 2];
        var $110 = 1 << $I1_0;
        if (($109 & $110 | 0) == 0) {
          var $114 = $109 | $110;
          HEAP32[__gm_ + 4 >> 2] = $114;
          HEAP32[$105 >> 2] = $76;
          HEAP32[$1$s2 + 6] = $105;
          HEAP32[$1$s2 + 3] = $1;
          HEAP32[$1$s2 + 2] = $1;
        } else {
          if (($I1_0 | 0) == 31) {
            var $125 = 0;
          } else {
            var $125 = 25 - ($I1_0 >>> 1) | 0;
          }
          var $125;
          var $K2_0 = $42 << $125;
          var $T_0 = HEAP32[$105 >> 2];
          while (1) {
            var $T_0;
            var $K2_0;
            if ((HEAP32[$T_0 + 4 >> 2] & -8 | 0) == ($42 | 0)) {
              var $149 = $T_0 + 8 | 0;
              var $150 = HEAPU32[$149 >> 2];
              var $152 = HEAPU32[__gm_ + 16 >> 2];
              var $153 = $T_0 >>> 0 < $152 >>> 0;
              do {
                if (!$153) {
                  if ($150 >>> 0 < $152 >>> 0) {
                    break;
                  }
                  HEAP32[$150 + 12 >> 2] = $76;
                  HEAP32[$149 >> 2] = $76;
                  HEAP32[$1$s2 + 2] = $150;
                  HEAP32[$1$s2 + 3] = $T_0;
                  HEAP32[$1$s2 + 6] = 0;
                  break $_$9;
                }
              } while (0);
              _abort();
              throw "Reached an unreachable!";
            } else {
              var $134 = ($K2_0 >>> 31 << 2) + $T_0 + 16 | 0;
              var $135 = HEAPU32[$134 >> 2];
              if (($135 | 0) == 0) {
                if ($134 >>> 0 >= HEAPU32[__gm_ + 16 >> 2] >>> 0) {
                  HEAP32[$134 >> 2] = $76;
                  HEAP32[$1$s2 + 6] = $T_0;
                  HEAP32[$1$s2 + 3] = $1;
                  HEAP32[$1$s2 + 2] = $1;
                  break $_$9;
                }
                _abort();
                throw "Reached an unreachable!";
              } else {
                var $K2_0 = $K2_0 << 1;
                var $T_0 = $135;
              }
            }
          }
        }
      }
    }
  } while (0);
  return;
  return;
}

_add_segment["X"] = 1;

function __Znwj($size) {
  var $_0_ph = ($size | 0) == 0 ? 1 : $size;
  while (1) {
    var $2 = _malloc($_0_ph);
    if (($2 | 0) == 0) {
      var $5 = __ZSt15get_new_handlerv();
      if (($5 | 0) == 0) {
        var $14 = ___cxa_allocate_exception(4);
        var $15 = $14;
        __ZNSt9bad_allocC2Ev($15);
        ___cxa_throw($14, __ZTISt9bad_alloc, 6);
        throw "Reached an unreachable!";
      } else {
        FUNCTION_TABLE[$5]();
      }
    } else {
      return $2;
    }
  }
  return null;
}

function __ZnwjRKSt9nothrow_t($size, $0) {
  var $2 = __Znwj($size);
  return undefined;
  return null;
}

function __Znaj($size) {
  var $1 = __Znwj($size);
  return $1;
  return null;
}

function __ZnajRKSt9nothrow_t($size, $nothrow) {
  var $1 = __Znaj($size);
  var $p_0 = $1;
  var $p_0;
  return $p_0;
  return null;
}

function __ZSt17__throw_bad_allocv() {
  var $1 = ___cxa_allocate_exception(4);
  var $2 = $1;
  __ZNSt9bad_allocC2Ev($2);
  ___cxa_throw($1, __ZTISt9bad_alloc, 6);
  throw "Reached an unreachable!";
}

function _strlen(ptr) {
  return String_len(ptr);
}

function _strcpy(pdest, psrc) {
  var i = 0;
  do {
    HEAP8[pdest + i] = HEAP8[psrc + i];
    i++;
  } while (HEAP8[psrc + i - 1] != 0);
  return pdest;
}

function _llvm_stacksave() {
  var self = _llvm_stacksave;
  if (!self.LLVM_SAVEDSTACKS) {
    self.LLVM_SAVEDSTACKS = [];
  }
  self.LLVM_SAVEDSTACKS.push(Runtime.stackSave());
  return self.LLVM_SAVEDSTACKS.length - 1;
}

function _llvm_stackrestore(p) {
  var self = _llvm_stacksave;
  var ret = self.LLVM_SAVEDSTACKS[p];
  self.LLVM_SAVEDSTACKS.splice(p, 1);
  Runtime.stackRestore(ret);
}

function _strncmp(px, py, n) {
  var i = 0;
  while (i < n) {
    var x = HEAP8[px + i];
    var y = HEAP8[py + i];
    if (x == y && x == 0) return 0;
    if (x == 0) return -1;
    if (y == 0) return 1;
    if (x == y) {
      i++;
      continue;
    } else {
      return x > y ? 1 : -1;
    }
  }
  return 0;
}

function _strcat(pdest, psrc) {
  var len = _strlen(pdest);
  var i = 0;
  do {
    HEAP8[pdest + len + i] = HEAP8[psrc + i];
    i++;
  } while (HEAP8[psrc + i - 1] != 0);
  return pdest;
}

function _memcpy(dest, src, num, align) {
  if (num >= 20 && src % 2 == dest % 2) {
    if (src % 4 == dest % 4) {
      var stop = src + num;
      while (src % 4) {
        HEAP8[dest++] = HEAP8[src++];
      }
      var src4 = src >> 2, dest4 = dest >> 2, stop4 = stop >> 2;
      while (src4 < stop4) {
        HEAP32[dest4++] = HEAP32[src4++];
      }
      src = src4 << 2;
      dest = dest4 << 2;
      while (src < stop) {
        HEAP8[dest++] = HEAP8[src++];
      }
    } else {
      var stop = src + num;
      if (src % 2) {
        HEAP8[dest++] = HEAP8[src++];
      }
      var src2 = src >> 1, dest2 = dest >> 1, stop2 = stop >> 1;
      while (src2 < stop2) {
        HEAP16[dest2++] = HEAP16[src2++];
      }
      src = src2 << 1;
      dest = dest2 << 1;
      if (src < stop) {
        HEAP8[dest++] = HEAP8[src++];
      }
    }
  } else {
    while (num--) {
      HEAP8[dest++] = HEAP8[src++];
    }
  }
}

var _llvm_memcpy_p0i8_p0i8_i32 = _memcpy;

function _strcmp(px, py) {
  return _strncmp(px, py, TOTAL_MEMORY);
}

function _memcmp(p1, p2, num) {
  for (var i = 0; i < num; i++) {
    var v1 = HEAP8[p1 + i];
    var v2 = HEAP8[p2 + i];
    if (v1 != v2) return v1 > v2 ? 1 : -1;
  }
  return 0;
}

function _memset(ptr, value, num, align) {
  if (num >= 20) {
    var stop = ptr + num;
    while (ptr % 4) {
      HEAP8[ptr++] = value;
    }
    if (value < 0) value += 256;
    var ptr4 = ptr >> 2, stop4 = stop >> 2, value4 = value | value << 8 | value << 16 | value << 24;
    while (ptr4 < stop4) {
      HEAP32[ptr4++] = value4;
    }
    ptr = ptr4 << 2;
    while (ptr < stop) {
      HEAP8[ptr++] = value;
    }
  } else {
    while (num--) {
      HEAP8[ptr++] = value;
    }
  }
}

var _llvm_memset_p0i8_i32 = _memset;

function _strncpy(pdest, psrc, num) {
  var padding = false, curr;
  for (var i = 0; i < num; i++) {
    curr = padding ? 0 : HEAP8[psrc + i];
    HEAP8[pdest + i] = curr;
    padding = padding || HEAP8[psrc + i] == 0;
  }
  return pdest;
}

function ___assert_func(filename, line, func, condition) {
  throw "Assertion failed: " + Pointer_stringify(condition) + ", at: " + [ Pointer_stringify(filename), line, Pointer_stringify(func) ];
}

function _strdup(ptr) {
  var len = String_len(ptr);
  var newStr = _malloc(len + 1);
  _memcpy(newStr, ptr, len, 1);
  HEAP8[newStr + len] = 0;
  return newStr;
}

function __formatString(format, varargs) {
  var textIndex = format;
  var argIndex = 0;
  function getNextArg(type) {
    var ret;
    if (type === "double") {
      ret = (tempDoubleI32[0] = HEAP32[varargs + argIndex >> 2], tempDoubleI32[1] = HEAP32[varargs + argIndex + 4 >> 2], tempDoubleF64[0]);
    } else if (type == "i64") {
      ret = [ HEAP32[varargs + argIndex >> 2], HEAP32[varargs + argIndex + 4 >> 2] ];
    } else {
      type = "i32";
      ret = HEAP32[varargs + argIndex >> 2];
    }
    argIndex += Runtime.getNativeFieldSize(type);
    return ret;
  }
  var ret = [];
  var curr, next, currArg;
  while (1) {
    var startTextIndex = textIndex;
    curr = HEAP8[textIndex];
    if (curr === 0) break;
    next = HEAP8[textIndex + 1];
    if (curr == "%".charCodeAt(0)) {
      var flagAlwaysSigned = false;
      var flagLeftAlign = false;
      var flagAlternative = false;
      var flagZeroPad = false;
      flagsLoop : while (1) {
        switch (next) {
         case "+".charCodeAt(0):
          flagAlwaysSigned = true;
          break;
         case "-".charCodeAt(0):
          flagLeftAlign = true;
          break;
         case "#".charCodeAt(0):
          flagAlternative = true;
          break;
         case "0".charCodeAt(0):
          if (flagZeroPad) {
            break flagsLoop;
          } else {
            flagZeroPad = true;
            break;
          }
         default:
          break flagsLoop;
        }
        textIndex++;
        next = HEAP8[textIndex + 1];
      }
      var width = 0;
      if (next == "*".charCodeAt(0)) {
        width = getNextArg("i32");
        textIndex++;
        next = HEAP8[textIndex + 1];
      } else {
        while (next >= "0".charCodeAt(0) && next <= "9".charCodeAt(0)) {
          width = width * 10 + (next - "0".charCodeAt(0));
          textIndex++;
          next = HEAP8[textIndex + 1];
        }
      }
      var precisionSet = false;
      if (next == ".".charCodeAt(0)) {
        var precision = 0;
        precisionSet = true;
        textIndex++;
        next = HEAP8[textIndex + 1];
        if (next == "*".charCodeAt(0)) {
          precision = getNextArg("i32");
          textIndex++;
        } else {
          while (1) {
            var precisionChr = HEAP8[textIndex + 1];
            if (precisionChr < "0".charCodeAt(0) || precisionChr > "9".charCodeAt(0)) break;
            precision = precision * 10 + (precisionChr - "0".charCodeAt(0));
            textIndex++;
          }
        }
        next = HEAP8[textIndex + 1];
      } else {
        var precision = 6;
      }
      var argSize;
      switch (String.fromCharCode(next)) {
       case "h":
        var nextNext = HEAP8[textIndex + 2];
        if (nextNext == "h".charCodeAt(0)) {
          textIndex++;
          argSize = 1;
        } else {
          argSize = 2;
        }
        break;
       case "l":
        var nextNext = HEAP8[textIndex + 2];
        if (nextNext == "l".charCodeAt(0)) {
          textIndex++;
          argSize = 8;
        } else {
          argSize = 4;
        }
        break;
       case "L":
       case "q":
       case "j":
        argSize = 8;
        break;
       case "z":
       case "t":
       case "I":
        argSize = 4;
        break;
       default:
        argSize = null;
      }
      if (argSize) textIndex++;
      next = HEAP8[textIndex + 1];
      if ([ "d", "i", "u", "o", "x", "X", "p" ].indexOf(String.fromCharCode(next)) != -1) {
        var signed = next == "d".charCodeAt(0) || next == "i".charCodeAt(0);
        argSize = argSize || 4;
        var currArg = getNextArg("i" + argSize * 8);
        if (argSize == 8) {
          currArg = Runtime.makeBigInt(currArg[0], currArg[1], next == "u".charCodeAt(0));
        }
        if (argSize <= 4) {
          var limit = Math.pow(256, argSize) - 1;
          currArg = (signed ? reSign : unSign)(currArg & limit, argSize * 8);
        }
        var currAbsArg = Math.abs(currArg);
        var argText;
        var prefix = "";
        if (next == "d".charCodeAt(0) || next == "i".charCodeAt(0)) {
          argText = reSign(currArg, 8 * argSize, 1).toString(10);
        } else if (next == "u".charCodeAt(0)) {
          argText = unSign(currArg, 8 * argSize, 1).toString(10);
          currArg = Math.abs(currArg);
        } else if (next == "o".charCodeAt(0)) {
          argText = (flagAlternative ? "0" : "") + currAbsArg.toString(8);
        } else if (next == "x".charCodeAt(0) || next == "X".charCodeAt(0)) {
          prefix = flagAlternative ? "0x" : "";
          if (currArg < 0) {
            currArg = -currArg;
            argText = (currAbsArg - 1).toString(16);
            var buffer = [];
            for (var i = 0; i < argText.length; i++) {
              buffer.push((15 - parseInt(argText[i], 16)).toString(16));
            }
            argText = buffer.join("");
            while (argText.length < argSize * 2) argText = "f" + argText;
          } else {
            argText = currAbsArg.toString(16);
          }
          if (next == "X".charCodeAt(0)) {
            prefix = prefix.toUpperCase();
            argText = argText.toUpperCase();
          }
        } else if (next == "p".charCodeAt(0)) {
          if (currAbsArg === 0) {
            argText = "(nil)";
          } else {
            prefix = "0x";
            argText = currAbsArg.toString(16);
          }
        }
        if (precisionSet) {
          while (argText.length < precision) {
            argText = "0" + argText;
          }
        }
        if (flagAlwaysSigned) {
          if (currArg < 0) {
            prefix = "-" + prefix;
          } else {
            prefix = "+" + prefix;
          }
        }
        while (prefix.length + argText.length < width) {
          if (flagLeftAlign) {
            argText += " ";
          } else {
            if (flagZeroPad) {
              argText = "0" + argText;
            } else {
              prefix = " " + prefix;
            }
          }
        }
        argText = prefix + argText;
        argText.split("").forEach((function(chr) {
          ret.push(chr.charCodeAt(0));
        }));
      } else if ([ "f", "F", "e", "E", "g", "G" ].indexOf(String.fromCharCode(next)) != -1) {
        var currArg = getNextArg("double");
        var argText;
        if (isNaN(currArg)) {
          argText = "nan";
          flagZeroPad = false;
        } else if (!isFinite(currArg)) {
          argText = (currArg < 0 ? "-" : "") + "inf";
          flagZeroPad = false;
        } else {
          var isGeneral = false;
          var effectivePrecision = Math.min(precision, 20);
          if (next == "g".charCodeAt(0) || next == "G".charCodeAt(0)) {
            isGeneral = true;
            precision = precision || 1;
            var exponent = parseInt(currArg.toExponential(effectivePrecision).split("e")[1], 10);
            if (precision > exponent && exponent >= -4) {
              next = (next == "g".charCodeAt(0) ? "f" : "F").charCodeAt(0);
              precision -= exponent + 1;
            } else {
              next = (next == "g".charCodeAt(0) ? "e" : "E").charCodeAt(0);
              precision--;
            }
            effectivePrecision = Math.min(precision, 20);
          }
          if (next == "e".charCodeAt(0) || next == "E".charCodeAt(0)) {
            argText = currArg.toExponential(effectivePrecision);
            if (/[eE][-+]\d$/.test(argText)) {
              argText = argText.slice(0, -1) + "0" + argText.slice(-1);
            }
          } else if (next == "f".charCodeAt(0) || next == "F".charCodeAt(0)) {
            argText = currArg.toFixed(effectivePrecision);
          }
          var parts = argText.split("e");
          if (isGeneral && !flagAlternative) {
            while (parts[0].length > 1 && parts[0].indexOf(".") != -1 && (parts[0].slice(-1) == "0" || parts[0].slice(-1) == ".")) {
              parts[0] = parts[0].slice(0, -1);
            }
          } else {
            if (flagAlternative && argText.indexOf(".") == -1) parts[0] += ".";
            while (precision > effectivePrecision++) parts[0] += "0";
          }
          argText = parts[0] + (parts.length > 1 ? "e" + parts[1] : "");
          if (next == "E".charCodeAt(0)) argText = argText.toUpperCase();
          if (flagAlwaysSigned && currArg >= 0) {
            argText = "+" + argText;
          }
        }
        while (argText.length < width) {
          if (flagLeftAlign) {
            argText += " ";
          } else {
            if (flagZeroPad && (argText[0] == "-" || argText[0] == "+")) {
              argText = argText[0] + "0" + argText.slice(1);
            } else {
              argText = (flagZeroPad ? "0" : " ") + argText;
            }
          }
        }
        if (next < "a".charCodeAt(0)) argText = argText.toUpperCase();
        argText.split("").forEach((function(chr) {
          ret.push(chr.charCodeAt(0));
        }));
      } else if (next == "s".charCodeAt(0)) {
        var arg = getNextArg("i8*");
        var copiedString;
        if (arg) {
          copiedString = String_copy(arg);
          if (precisionSet && copiedString.length > precision) {
            copiedString = copiedString.slice(0, precision);
          }
        } else {
          copiedString = intArrayFromString("(null)", true);
        }
        if (!flagLeftAlign) {
          while (copiedString.length < width--) {
            ret.push(" ".charCodeAt(0));
          }
        }
        ret = ret.concat(copiedString);
        if (flagLeftAlign) {
          while (copiedString.length < width--) {
            ret.push(" ".charCodeAt(0));
          }
        }
      } else if (next == "c".charCodeAt(0)) {
        if (flagLeftAlign) ret.push(getNextArg("i8"));
        while (--width > 0) {
          ret.push(" ".charCodeAt(0));
        }
        if (!flagLeftAlign) ret.push(getNextArg("i8"));
      } else if (next == "n".charCodeAt(0)) {
        var ptr = getNextArg("i32*");
        HEAP32[ptr >> 2] = ret.length;
      } else if (next == "%".charCodeAt(0)) {
        ret.push(curr);
      } else {
        for (var i = startTextIndex; i < textIndex + 2; i++) {
          ret.push(HEAP8[i]);
        }
      }
      textIndex += 2;
    } else {
      ret.push(curr);
      textIndex += 1;
    }
  }
  return ret;
}

function _snprintf(s, n, format, varargs) {
  var result = __formatString(format, varargs);
  var limit = n === undefined ? result.length : Math.min(result.length, n - 1);
  for (var i = 0; i < limit; i++) {
    HEAP8[s + i] = result[i];
  }
  HEAP8[s + i] = 0;
  return result.length;
}

function _sprintf(s, format, varargs) {
  return _snprintf(s, undefined, format, varargs);
}

var _llvm_va_start;

function _llvm_va_end() {}

function _isspace(chr) {
  return chr in {
    32: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0
  };
}

function _isdigit(chr) {
  return chr >= "0".charCodeAt(0) && chr <= "9".charCodeAt(0);
}

function _atoi(s) {
  var c;
  while ((c = HEAP8[s]) && _isspace(c)) s++;
  if (!c || !_isdigit(c)) return 0;
  var e = s;
  while ((c = HEAP8[e]) && _isdigit(c)) e++;
  return Math.floor(Number(Pointer_stringify(s).substr(0, e - s)));
}

function _abort(code) {
  ABORT = true;
  throw "ABORT: " + code + ", at " + (new Error).stack;
}

var ERRNO_CODES = {
  E2BIG: 7,
  EACCES: 13,
  EADDRINUSE: 98,
  EADDRNOTAVAIL: 99,
  EAFNOSUPPORT: 97,
  EAGAIN: 11,
  EALREADY: 114,
  EBADF: 9,
  EBADMSG: 74,
  EBUSY: 16,
  ECANCELED: 125,
  ECHILD: 10,
  ECONNABORTED: 103,
  ECONNREFUSED: 111,
  ECONNRESET: 104,
  EDEADLK: 35,
  EDESTADDRREQ: 89,
  EDOM: 33,
  EDQUOT: 122,
  EEXIST: 17,
  EFAULT: 14,
  EFBIG: 27,
  EHOSTUNREACH: 113,
  EIDRM: 43,
  EILSEQ: 84,
  EINPROGRESS: 115,
  EINTR: 4,
  EINVAL: 22,
  EIO: 5,
  EISCONN: 106,
  EISDIR: 21,
  ELOOP: 40,
  EMFILE: 24,
  EMLINK: 31,
  EMSGSIZE: 90,
  EMULTIHOP: 72,
  ENAMETOOLONG: 36,
  ENETDOWN: 100,
  ENETRESET: 102,
  ENETUNREACH: 101,
  ENFILE: 23,
  ENOBUFS: 105,
  ENODATA: 61,
  ENODEV: 19,
  ENOENT: 2,
  ENOEXEC: 8,
  ENOLCK: 37,
  ENOLINK: 67,
  ENOMEM: 12,
  ENOMSG: 42,
  ENOPROTOOPT: 92,
  ENOSPC: 28,
  ENOSR: 63,
  ENOSTR: 60,
  ENOSYS: 38,
  ENOTCONN: 107,
  ENOTDIR: 20,
  ENOTEMPTY: 39,
  ENOTRECOVERABLE: 131,
  ENOTSOCK: 88,
  ENOTSUP: 95,
  ENOTTY: 25,
  ENXIO: 6,
  EOVERFLOW: 75,
  EOWNERDEAD: 130,
  EPERM: 1,
  EPIPE: 32,
  EPROTO: 71,
  EPROTONOSUPPORT: 93,
  EPROTOTYPE: 91,
  ERANGE: 34,
  EROFS: 30,
  ESPIPE: 29,
  ESRCH: 3,
  ESTALE: 116,
  ETIME: 62,
  ETIMEDOUT: 110,
  ETXTBSY: 26,
  EWOULDBLOCK: 11,
  EXDEV: 18
};

function ___setErrNo(value) {
  if (!___setErrNo.ret) ___setErrNo.ret = allocate([ 0 ], "i32", ALLOC_STATIC);
  HEAP32[___setErrNo.ret >> 2] = value;
  return value;
}

var _stdin = 0;

var _stdout = 0;

var _stderr = 0;

var __impure_ptr = 0;

var FS = {
  currentPath: "/",
  nextInode: 2,
  streams: [ null ],
  ignorePermissions: true,
  absolutePath: (function(relative, base) {
    if (typeof relative !== "string") return null;
    if (base === undefined) base = FS.currentPath;
    if (relative && relative[0] == "/") base = "";
    var full = base + "/" + relative;
    var parts = full.split("/").reverse();
    var absolute = [ "" ];
    while (parts.length) {
      var part = parts.pop();
      if (part == "" || part == ".") {} else if (part == "..") {
        if (absolute.length > 1) absolute.pop();
      } else {
        absolute.push(part);
      }
    }
    return absolute.length == 1 ? "/" : absolute.join("/");
  }),
  analyzePath: (function(path, dontResolveLastLink, linksVisited) {
    var ret = {
      isRoot: false,
      exists: false,
      error: 0,
      name: null,
      path: null,
      object: null,
      parentExists: false,
      parentPath: null,
      parentObject: null
    };
    path = FS.absolutePath(path);
    if (path == "/") {
      ret.isRoot = true;
      ret.exists = ret.parentExists = true;
      ret.name = "/";
      ret.path = ret.parentPath = "/";
      ret.object = ret.parentObject = FS.root;
    } else if (path !== null) {
      linksVisited = linksVisited || 0;
      path = path.slice(1).split("/");
      var current = FS.root;
      var traversed = [ "" ];
      while (path.length) {
        if (path.length == 1 && current.isFolder) {
          ret.parentExists = true;
          ret.parentPath = traversed.length == 1 ? "/" : traversed.join("/");
          ret.parentObject = current;
          ret.name = path[0];
        }
        var target = path.shift();
        if (!current.isFolder) {
          ret.error = ERRNO_CODES.ENOTDIR;
          break;
        } else if (!current.read) {
          ret.error = ERRNO_CODES.EACCES;
          break;
        } else if (!current.contents.hasOwnProperty(target)) {
          ret.error = ERRNO_CODES.ENOENT;
          break;
        }
        current = current.contents[target];
        if (current.link && !(dontResolveLastLink && path.length == 0)) {
          if (linksVisited > 40) {
            ret.error = ERRNO_CODES.ELOOP;
            break;
          }
          var link = FS.absolutePath(current.link, traversed.join("/"));
          return FS.analyzePath([ link ].concat(path).join("/"), dontResolveLastLink, linksVisited + 1);
        }
        traversed.push(target);
        if (path.length == 0) {
          ret.exists = true;
          ret.path = traversed.join("/");
          ret.object = current;
        }
      }
      return ret;
    }
    return ret;
  }),
  findObject: (function(path, dontResolveLastLink) {
    FS.ensureRoot();
    var ret = FS.analyzePath(path, dontResolveLastLink);
    if (ret.exists) {
      return ret.object;
    } else {
      ___setErrNo(ret.error);
      return null;
    }
  }),
  createObject: (function(parent, name, properties, canRead, canWrite) {
    if (!parent) parent = "/";
    if (typeof parent === "string") parent = FS.findObject(parent);
    if (!parent) {
      ___setErrNo(ERRNO_CODES.EACCES);
      throw new Error("Parent path must exist.");
    }
    if (!parent.isFolder) {
      ___setErrNo(ERRNO_CODES.ENOTDIR);
      throw new Error("Parent must be a folder.");
    }
    if (!parent.write && !FS.ignorePermissions) {
      ___setErrNo(ERRNO_CODES.EACCES);
      throw new Error("Parent folder must be writeable.");
    }
    if (!name || name == "." || name == "..") {
      ___setErrNo(ERRNO_CODES.ENOENT);
      throw new Error("Name must not be empty.");
    }
    if (parent.contents.hasOwnProperty(name)) {
      ___setErrNo(ERRNO_CODES.EEXIST);
      throw new Error("Can't overwrite object.");
    }
    parent.contents[name] = {
      read: canRead === undefined ? true : canRead,
      write: canWrite === undefined ? false : canWrite,
      timestamp: Date.now(),
      inodeNumber: FS.nextInode++
    };
    for (var key in properties) {
      if (properties.hasOwnProperty(key)) {
        parent.contents[name][key] = properties[key];
      }
    }
    return parent.contents[name];
  }),
  createFolder: (function(parent, name, canRead, canWrite) {
    var properties = {
      isFolder: true,
      isDevice: false,
      contents: {}
    };
    return FS.createObject(parent, name, properties, canRead, canWrite);
  }),
  createPath: (function(parent, path, canRead, canWrite) {
    var current = FS.findObject(parent);
    if (current === null) throw new Error("Invalid parent.");
    path = path.split("/").reverse();
    while (path.length) {
      var part = path.pop();
      if (!part) continue;
      if (!current.contents.hasOwnProperty(part)) {
        FS.createFolder(current, part, canRead, canWrite);
      }
      current = current.contents[part];
    }
    return current;
  }),
  createFile: (function(parent, name, properties, canRead, canWrite) {
    properties.isFolder = false;
    return FS.createObject(parent, name, properties, canRead, canWrite);
  }),
  createDataFile: (function(parent, name, data, canRead, canWrite) {
    if (typeof data === "string") {
      var dataArray = new Array(data.length);
      for (var i = 0, len = data.length; i < len; ++i) dataArray[i] = data.charCodeAt(i);
      data = dataArray;
    }
    var properties = {
      isDevice: false,
      contents: data
    };
    return FS.createFile(parent, name, properties, canRead, canWrite);
  }),
  createLazyFile: (function(parent, name, url, canRead, canWrite) {
    var properties = {
      isDevice: false,
      url: url
    };
    return FS.createFile(parent, name, properties, canRead, canWrite);
  }),
  createLink: (function(parent, name, target, canRead, canWrite) {
    var properties = {
      isDevice: false,
      link: target
    };
    return FS.createFile(parent, name, properties, canRead, canWrite);
  }),
  createDevice: (function(parent, name, input, output) {
    if (!(input || output)) {
      throw new Error("A device must have at least one callback defined.");
    }
    var ops = {
      isDevice: true,
      input: input,
      output: output
    };
    return FS.createFile(parent, name, ops, Boolean(input), Boolean(output));
  }),
  forceLoadFile: (function(obj) {
    if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
    var success = true;
    if (typeof XMLHttpRequest !== "undefined") {
      assert("Cannot do synchronous binary XHRs in modern browsers. Use --embed-file or --preload-file in emcc");
    } else if (typeof read !== "undefined") {
      try {
        obj.contents = intArrayFromString(read(obj.url), true);
      } catch (e) {
        success = false;
      }
    } else {
      throw new Error("Cannot load without read() or XMLHttpRequest.");
    }
    if (!success) ___setErrNo(ERRNO_CODES.EIO);
    return success;
  }),
  ensureRoot: (function() {
    if (FS.root) return;
    FS.root = {
      read: true,
      write: true,
      isFolder: true,
      isDevice: false,
      timestamp: Date.now(),
      inodeNumber: 1,
      contents: {}
    };
  }),
  init: (function(input, output, error) {
    assert(!FS.init.initialized, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
    FS.init.initialized = true;
    FS.ensureRoot();
    input = input || Module["stdin"];
    output = output || Module["stdout"];
    error = error || Module["stderr"];
    var stdinOverridden = true, stdoutOverridden = true, stderrOverridden = true;
    if (!input) {
      stdinOverridden = false;
      input = (function() {
        if (!input.cache || !input.cache.length) {
          var result;
          if (typeof window != "undefined" && typeof window.prompt == "function") {
            result = window.prompt("Input: ");
          } else if (typeof readline == "function") {
            result = readline();
          }
          if (!result) result = "";
          input.cache = intArrayFromString(result + "\n", true);
        }
        return input.cache.shift();
      });
    }
    function simpleOutput(val) {
      if (val === null || val === "\n".charCodeAt(0)) {
        output.printer(output.buffer.join(""));
        output.buffer = [];
      } else {
        output.buffer.push(String.fromCharCode(val));
      }
    }
    if (!output) {
      stdoutOverridden = false;
      output = simpleOutput;
    }
    if (!output.printer) output.printer = print;
    if (!output.buffer) output.buffer = [];
    if (!error) {
      stderrOverridden = false;
      error = simpleOutput;
    }
    if (!error.printer) error.printer = print;
    if (!error.buffer) error.buffer = [];
    FS.createFolder("/", "tmp", true, true);
    var devFolder = FS.createFolder("/", "dev", true, true);
    var stdin = FS.createDevice(devFolder, "stdin", input);
    var stdout = FS.createDevice(devFolder, "stdout", null, output);
    var stderr = FS.createDevice(devFolder, "stderr", null, error);
    FS.createDevice(devFolder, "tty", input, output);
    FS.streams[1] = {
      path: "/dev/stdin",
      object: stdin,
      position: 0,
      isRead: true,
      isWrite: false,
      isAppend: false,
      isTerminal: !stdinOverridden,
      error: false,
      eof: false,
      ungotten: []
    };
    FS.streams[2] = {
      path: "/dev/stdout",
      object: stdout,
      position: 0,
      isRead: false,
      isWrite: true,
      isAppend: false,
      isTerminal: !stdoutOverridden,
      error: false,
      eof: false,
      ungotten: []
    };
    FS.streams[3] = {
      path: "/dev/stderr",
      object: stderr,
      position: 0,
      isRead: false,
      isWrite: true,
      isAppend: false,
      isTerminal: !stderrOverridden,
      error: false,
      eof: false,
      ungotten: []
    };
    _stdin = allocate([ 1 ], "void*", ALLOC_STATIC);
    _stdout = allocate([ 2 ], "void*", ALLOC_STATIC);
    _stderr = allocate([ 3 ], "void*", ALLOC_STATIC);
    FS.createPath("/", "dev/shm/tmp", true, true);
    FS.streams[_stdin] = FS.streams[1];
    FS.streams[_stdout] = FS.streams[2];
    FS.streams[_stderr] = FS.streams[3];
    __impure_ptr = allocate([ allocate([ 0, 0, 0, 0, _stdin, 0, 0, 0, _stdout, 0, 0, 0, _stderr, 0, 0, 0 ], "void*", ALLOC_STATIC) ], "void*", ALLOC_STATIC);
  }),
  quit: (function() {
    if (!FS.init.initialized) return;
    if (FS.streams[2] && FS.streams[2].object.output.buffer.length > 0) FS.streams[2].object.output("\n".charCodeAt(0));
    if (FS.streams[3] && FS.streams[3].object.output.buffer.length > 0) FS.streams[3].object.output("\n".charCodeAt(0));
  })
};

function _pwrite(fildes, buf, nbyte, offset) {
  var stream = FS.streams[fildes];
  if (!stream || stream.object.isDevice) {
    ___setErrNo(ERRNO_CODES.EBADF);
    return -1;
  } else if (!stream.isWrite) {
    ___setErrNo(ERRNO_CODES.EACCES);
    return -1;
  } else if (stream.object.isFolder) {
    ___setErrNo(ERRNO_CODES.EISDIR);
    return -1;
  } else if (nbyte < 0 || offset < 0) {
    ___setErrNo(ERRNO_CODES.EINVAL);
    return -1;
  } else {
    var contents = stream.object.contents;
    while (contents.length < offset) contents.push(0);
    for (var i = 0; i < nbyte; i++) {
      contents[offset + i] = HEAPU8[buf + i];
    }
    stream.object.timestamp = Date.now();
    return i;
  }
}

function _write(fildes, buf, nbyte) {
  var stream = FS.streams[fildes];
  if (!stream) {
    ___setErrNo(ERRNO_CODES.EBADF);
    return -1;
  } else if (!stream.isWrite) {
    ___setErrNo(ERRNO_CODES.EACCES);
    return -1;
  } else if (nbyte < 0) {
    ___setErrNo(ERRNO_CODES.EINVAL);
    return -1;
  } else {
    if (stream.object.isDevice) {
      if (stream.object.output) {
        for (var i = 0; i < nbyte; i++) {
          try {
            stream.object.output(HEAP8[buf + i]);
          } catch (e) {
            ___setErrNo(ERRNO_CODES.EIO);
            return -1;
          }
        }
        stream.object.timestamp = Date.now();
        return i;
      } else {
        ___setErrNo(ERRNO_CODES.ENXIO);
        return -1;
      }
    } else {
      var bytesWritten = _pwrite(fildes, buf, nbyte, stream.position);
      if (bytesWritten != -1) stream.position += bytesWritten;
      return bytesWritten;
    }
  }
}

function _fwrite(ptr, size, nitems, stream) {
  var bytesToWrite = nitems * size;
  if (bytesToWrite == 0) return 0;
  var bytesWritten = _write(stream, ptr, bytesToWrite);
  if (bytesWritten == -1) {
    if (FS.streams[stream]) FS.streams[stream].error = true;
    return -1;
  } else {
    return Math.floor(bytesWritten / size);
  }
}

function _fprintf(stream, format, varargs) {
  var result = __formatString(format, varargs);
  var stack = Runtime.stackSave();
  var ret = _fwrite(allocate(result, "i8", ALLOC_STACK), 1, result.length, stream);
  Runtime.stackRestore(stack);
  return ret;
}

function _sysconf(name) {
  switch (name) {
   case 8:
    return PAGE_SIZE;
   case 54:
   case 56:
   case 21:
   case 61:
   case 63:
   case 22:
   case 67:
   case 23:
   case 24:
   case 25:
   case 26:
   case 27:
   case 69:
   case 28:
   case 101:
   case 70:
   case 71:
   case 29:
   case 30:
   case 199:
   case 75:
   case 76:
   case 32:
   case 43:
   case 44:
   case 80:
   case 46:
   case 47:
   case 45:
   case 48:
   case 49:
   case 42:
   case 82:
   case 33:
   case 7:
   case 108:
   case 109:
   case 107:
   case 112:
   case 119:
   case 121:
    return 200809;
   case 13:
   case 104:
   case 94:
   case 95:
   case 34:
   case 35:
   case 77:
   case 81:
   case 83:
   case 84:
   case 85:
   case 86:
   case 87:
   case 88:
   case 89:
   case 90:
   case 91:
   case 94:
   case 95:
   case 110:
   case 111:
   case 113:
   case 114:
   case 115:
   case 116:
   case 117:
   case 118:
   case 120:
   case 40:
   case 16:
   case 79:
   case 19:
    return -1;
   case 92:
   case 93:
   case 5:
   case 72:
   case 6:
   case 74:
   case 92:
   case 93:
   case 96:
   case 97:
   case 98:
   case 99:
   case 102:
   case 103:
   case 105:
    return 1;
   case 38:
   case 66:
   case 50:
   case 51:
   case 4:
    return 1024;
   case 15:
   case 64:
   case 41:
    return 32;
   case 55:
   case 37:
   case 17:
    return 2147483647;
   case 18:
   case 1:
    return 47839;
   case 59:
   case 57:
    return 99;
   case 68:
   case 58:
    return 2048;
   case 0:
    return 2097152;
   case 3:
    return 65536;
   case 14:
    return 32768;
   case 73:
    return 32767;
   case 39:
    return 16384;
   case 60:
    return 1e3;
   case 106:
    return 700;
   case 52:
    return 256;
   case 62:
    return 255;
   case 2:
    return 100;
   case 65:
    return 64;
   case 36:
    return 20;
   case 100:
    return 16;
   case 20:
    return 6;
   case 53:
    return 4;
  }
  ___setErrNo(ERRNO_CODES.EINVAL);
  return -1;
}

function _time(ptr) {
  var ret = Math.floor(Date.now() / 1e3);
  if (ptr) {
    HEAP32[ptr >> 2] = ret;
  }
  return ret;
}

function ___errno_location() {
  return ___setErrNo.ret;
}

var ___errno = ___errno_location;

function _sbrk(bytes) {
  var self = _sbrk;
  if (!self.called) {
    STATICTOP = alignMemoryPage(STATICTOP);
    self.called = true;
  }
  var ret = STATICTOP;
  if (bytes != 0) Runtime.staticAlloc(bytes);
  return ret;
}

function ___gxx_personality_v0() {}

function ___cxa_allocate_exception(size) {
  return _malloc(size);
}

function _llvm_eh_exception() {
  return HEAP32[_llvm_eh_exception.buf >> 2];
}

function __ZSt18uncaught_exceptionv() {
  return !!__ZSt18uncaught_exceptionv.uncaught_exception;
}

function ___cxa_is_number_type(type) {
  var isNumber = false;
  try {
    if (type == __ZTIi) isNumber = true;
  } catch (e) {}
  try {
    if (type == __ZTIl) isNumber = true;
  } catch (e) {}
  try {
    if (type == __ZTIx) isNumber = true;
  } catch (e) {}
  try {
    if (type == __ZTIf) isNumber = true;
  } catch (e) {}
  try {
    if (type == __ZTId) isNumber = true;
  } catch (e) {}
  return isNumber;
}

function ___cxa_does_inherit(definiteType, possibilityType, possibility) {
  if (possibility == 0) return false;
  if (possibilityType == 0 || possibilityType == definiteType) return true;
  var possibility_type_info;
  if (___cxa_is_number_type(possibilityType)) {
    possibility_type_info = possibilityType;
  } else {
    var possibility_type_infoAddr = HEAP32[possibilityType >> 2] - 8;
    possibility_type_info = HEAP32[possibility_type_infoAddr >> 2];
  }
  switch (possibility_type_info) {
   case 0:
    var definite_type_infoAddr = HEAP32[definiteType >> 2] - 8;
    var definite_type_info = HEAP32[definite_type_infoAddr >> 2];
    if (definite_type_info == 0) {
      var defPointerBaseAddr = definiteType + 8;
      var defPointerBaseType = HEAP32[defPointerBaseAddr >> 2];
      var possPointerBaseAddr = possibilityType + 8;
      var possPointerBaseType = HEAP32[possPointerBaseAddr >> 2];
      return ___cxa_does_inherit(defPointerBaseType, possPointerBaseType, possibility);
    } else return false;
   case 1:
    return false;
   case 2:
    var parentTypeAddr = possibilityType + 8;
    var parentType = HEAP32[parentTypeAddr >> 2];
    return ___cxa_does_inherit(definiteType, parentType, possibility);
   default:
    return false;
  }
}

function ___cxa_find_matching_catch(thrown, throwntype, typeArray) {
  if (throwntype != 0 && !___cxa_is_number_type(throwntype)) {
    var throwntypeInfoAddr = HEAP32[throwntype >> 2] - 8;
    var throwntypeInfo = HEAP32[throwntypeInfoAddr >> 2];
    if (throwntypeInfo == 0) thrown = HEAP32[thrown >> 2];
  }
  for (var i = 0; i < typeArray.length; i++) {
    if (___cxa_does_inherit(typeArray[i], throwntype, thrown)) return {
      "f0": thrown,
      "f1": typeArray[i]
    };
  }
  return {
    "f0": thrown,
    "f1": throwntype
  };
}

function ___cxa_throw(ptr, type, destructor) {
  if (!___cxa_throw.initialized) {
    try {
      HEAP32[__ZTVN10__cxxabiv119__pointer_type_infoE >> 2] = 0;
    } catch (e) {}
    try {
      HEAP32[__ZTVN10__cxxabiv117__class_type_infoE >> 2] = 1;
    } catch (e) {}
    try {
      HEAP32[__ZTVN10__cxxabiv120__si_class_type_infoE >> 2] = 2;
    } catch (e) {}
    ___cxa_throw.initialized = true;
  }
  print("Compiled code throwing an exception, " + [ ptr, type, destructor ] + ", at " + (new Error).stack);
  HEAP32[_llvm_eh_exception.buf >> 2] = ptr;
  HEAP32[_llvm_eh_exception.buf + 4 >> 2] = type;
  HEAP32[_llvm_eh_exception.buf + 8 >> 2] = destructor;
  if (!("uncaught_exception" in __ZSt18uncaught_exceptionv)) {
    __ZSt18uncaught_exceptionv.uncaught_exception = 1;
  } else {
    __ZSt18uncaught_exceptionv.uncaught_exception++;
  }
  throw ptr;
}

function ___cxa_call_unexpected(exception) {
  ABORT = true;
  throw exception;
}

function ___cxa_begin_catch(ptr) {
  __ZSt18uncaught_exceptionv.uncaught_exception--;
  return ptr;
}

function ___cxa_free_exception(ptr) {
  return _free(ptr);
}

function ___cxa_end_catch() {
  if (___cxa_end_catch.rethrown) {
    ___cxa_end_catch.rethrown = false;
    return;
  }
  __THREW__ = false;
  HEAP32[_llvm_eh_exception.buf + 4 >> 2] = 0;
  var ptr = HEAP32[_llvm_eh_exception.buf >> 2];
  var destructor = HEAP32[_llvm_eh_exception.buf + 8 >> 2];
  if (destructor) {
    FUNCTION_TABLE[destructor](ptr);
    HEAP32[_llvm_eh_exception.buf + 8 >> 2] = 0;
  }
  if (ptr) {
    ___cxa_free_exception(ptr);
    HEAP32[_llvm_eh_exception.buf >> 2] = 0;
  }
}

var __ZNSt9exceptionD2Ev;

__ATINIT__.unshift({
  func: (function() {
    FS.ignorePermissions = false;
    if (!FS.init.initialized) FS.init();
  })
});

__ATEXIT__.push({
  func: (function() {
    FS.quit();
  })
});

___setErrNo(0);

_llvm_eh_exception.buf = allocate(12, "void*", ALLOC_STATIC);

Module.callMain = function callMain(args) {
  var argc = args.length + 1;
  function pad() {
    for (var i = 0; i < 4 - 1; i++) {
      argv.push(0);
    }
  }
  var argv = [ allocate(intArrayFromString("/bin/this.program"), "i8", ALLOC_STATIC) ];
  pad();
  for (var i = 0; i < argc - 1; i = i + 1) {
    argv.push(allocate(intArrayFromString(args[i]), "i8", ALLOC_STATIC));
    pad();
  }
  argv.push(0);
  argv = allocate(argv, "i32", ALLOC_STATIC);
  return _main(argc, argv, 0);
};

var _cplus_demangle_operators;

var _cplus_demangle_builtin_types;

var _standard_subs;

var __str120290;

var __gm_;

var _mparams;

var __impure_ptr;

var __ZSt7nothrow;

var __ZL13__new_handler;

var __ZTVSt9bad_alloc;

var __ZTVSt20bad_array_new_length;

var __ZTVN10__cxxabiv120__si_class_type_infoE;

var __ZTISt9exception;

var __ZTISt9bad_alloc;

var __ZTISt20bad_array_new_length;

var __ZNSt9bad_allocC1Ev;

var __ZNSt9bad_allocD1Ev;

var __ZNSt20bad_array_new_lengthC1Ev;

var __ZNSt20bad_array_new_lengthD1Ev;

var __ZNSt20bad_array_new_lengthD2Ev;

STRING_TABLE.__str = allocate([ 97, 78, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str1 = allocate([ 38, 61, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str2 = allocate([ 97, 83, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str3 = allocate([ 61, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str4 = allocate([ 97, 97, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str5 = allocate([ 38, 38, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str6 = allocate([ 97, 100, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str7 = allocate([ 38, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str8 = allocate([ 97, 110, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str9 = allocate([ 99, 108, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str10 = allocate([ 40, 41, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str11 = allocate([ 99, 109, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str12 = allocate([ 44, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str13 = allocate([ 99, 111, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str14 = allocate([ 126, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str15 = allocate([ 100, 86, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str16 = allocate([ 47, 61, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str17 = allocate([ 100, 97, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str18 = allocate([ 100, 101, 108, 101, 116, 101, 91, 93, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str19 = allocate([ 100, 101, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str20 = allocate([ 42, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str21 = allocate([ 100, 108, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str22 = allocate([ 100, 101, 108, 101, 116, 101, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str23 = allocate([ 100, 118, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str24 = allocate([ 47, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str25 = allocate([ 101, 79, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str26 = allocate([ 94, 61, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str27 = allocate([ 101, 111, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str28 = allocate([ 94, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str29 = allocate([ 101, 113, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str30 = allocate([ 61, 61, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str31 = allocate([ 103, 101, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str32 = allocate([ 62, 61, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str33 = allocate([ 103, 116, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str34 = allocate([ 62, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str35 = allocate([ 105, 120, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str36 = allocate([ 91, 93, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str37 = allocate([ 108, 83, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str38 = allocate([ 60, 60, 61, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str39 = allocate([ 108, 101, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str40 = allocate([ 60, 61, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str41 = allocate([ 108, 115, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str42 = allocate([ 60, 60, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str43 = allocate([ 108, 116, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str44 = allocate([ 60, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str45 = allocate([ 109, 73, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str46 = allocate([ 45, 61, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str47 = allocate([ 109, 76, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str48 = allocate([ 42, 61, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str49 = allocate([ 109, 105, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str51 = allocate([ 109, 108, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str52 = allocate([ 109, 109, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str53 = allocate([ 45, 45, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str54 = allocate([ 110, 97, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str55 = allocate([ 110, 101, 119, 91, 93, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str56 = allocate([ 110, 101, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str57 = allocate([ 33, 61, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str58 = allocate([ 110, 103, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str59 = allocate([ 110, 116, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str60 = allocate([ 33, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str61 = allocate([ 110, 119, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str62 = allocate([ 110, 101, 119, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str63 = allocate([ 111, 82, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str64 = allocate([ 124, 61, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str65 = allocate([ 111, 111, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str66 = allocate([ 124, 124, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str67 = allocate([ 111, 114, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str68 = allocate([ 124, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str69 = allocate([ 112, 76, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str70 = allocate([ 43, 61, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str71 = allocate([ 112, 108, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str72 = allocate([ 43, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str73 = allocate([ 112, 109, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str74 = allocate([ 45, 62, 42, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str75 = allocate([ 112, 112, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str76 = allocate([ 43, 43, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str77 = allocate([ 112, 115, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str78 = allocate([ 112, 116, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str79 = allocate([ 45, 62, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str80 = allocate([ 113, 117, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str81 = allocate([ 63, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str82 = allocate([ 114, 77, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str83 = allocate([ 37, 61, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str84 = allocate([ 114, 83, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str85 = allocate([ 62, 62, 61, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str86 = allocate([ 114, 109, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str87 = allocate([ 37, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str88 = allocate([ 114, 115, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str89 = allocate([ 62, 62, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str90 = allocate([ 115, 116, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str91 = allocate([ 115, 105, 122, 101, 111, 102, 32, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str92 = allocate([ 115, 122, 0 ], "i8", ALLOC_STATIC);

_cplus_demangle_operators = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STATIC);

STRING_TABLE.__str95 = allocate([ 98, 111, 111, 108, 101, 97, 110, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str97 = allocate([ 98, 121, 116, 101, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str101 = allocate([ 95, 95, 102, 108, 111, 97, 116, 49, 50, 56, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str105 = allocate([ 117, 110, 115, 105, 103, 110, 101, 100, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str114 = allocate([ 108, 111, 110, 103, 32, 108, 111, 110, 103, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str115 = allocate([ 117, 110, 115, 105, 103, 110, 101, 100, 32, 108, 111, 110, 103, 32, 108, 111, 110, 103, 0 ], "i8", ALLOC_STATIC);

_cplus_demangle_builtin_types = allocate([ 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 18, 0, 0, 0, 0, 0, 0, 0, 18, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0 ], [ "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STATIC);

STRING_TABLE.__str117 = allocate([ 95, 71, 76, 79, 66, 65, 76, 95, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str118 = allocate([ 103, 108, 111, 98, 97, 108, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 115, 32, 107, 101, 121, 101, 100, 32, 116, 111, 32, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str119 = allocate([ 103, 108, 111, 98, 97, 108, 32, 100, 101, 115, 116, 114, 117, 99, 116, 111, 114, 115, 32, 107, 101, 121, 101, 100, 32, 116, 111, 32, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str120 = allocate([ 58, 58, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str121 = allocate([ 118, 116, 97, 98, 108, 101, 32, 102, 111, 114, 32, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str122 = allocate([ 86, 84, 84, 32, 102, 111, 114, 32, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str123 = allocate([ 99, 111, 110, 115, 116, 114, 117, 99, 116, 105, 111, 110, 32, 118, 116, 97, 98, 108, 101, 32, 102, 111, 114, 32, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str124 = allocate([ 45, 105, 110, 45, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str125 = allocate([ 116, 121, 112, 101, 105, 110, 102, 111, 32, 102, 111, 114, 32, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str126 = allocate([ 116, 121, 112, 101, 105, 110, 102, 111, 32, 110, 97, 109, 101, 32, 102, 111, 114, 32, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str127 = allocate([ 116, 121, 112, 101, 105, 110, 102, 111, 32, 102, 110, 32, 102, 111, 114, 32, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str128 = allocate([ 110, 111, 110, 45, 118, 105, 114, 116, 117, 97, 108, 32, 116, 104, 117, 110, 107, 32, 116, 111, 32, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str129 = allocate([ 118, 105, 114, 116, 117, 97, 108, 32, 116, 104, 117, 110, 107, 32, 116, 111, 32, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str130 = allocate([ 99, 111, 118, 97, 114, 105, 97, 110, 116, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 117, 110, 107, 32, 116, 111, 32, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str131 = allocate([ 106, 97, 118, 97, 32, 67, 108, 97, 115, 115, 32, 102, 111, 114, 32, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str132 = allocate([ 103, 117, 97, 114, 100, 32, 118, 97, 114, 105, 97, 98, 108, 101, 32, 102, 111, 114, 32, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str133 = allocate([ 114, 101, 102, 101, 114, 101, 110, 99, 101, 32, 116, 101, 109, 112, 111, 114, 97, 114, 121, 32, 102, 111, 114, 32, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str134 = allocate([ 104, 105, 100, 100, 101, 110, 32, 97, 108, 105, 97, 115, 32, 102, 111, 114, 32, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str135 = allocate([ 58, 58, 42, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str136 = allocate([ 44, 32, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str137 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str139 = allocate([ 41, 32, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str140 = allocate([ 32, 40, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str141 = allocate([ 41, 32, 58, 32, 40, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str142 = allocate([ 117, 108, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str143 = allocate([ 108, 108, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str144 = allocate([ 117, 108, 108, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str145 = allocate([ 102, 97, 108, 115, 101, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str146 = allocate([ 116, 114, 117, 101, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str147 = allocate([ 32, 114, 101, 115, 116, 114, 105, 99, 116, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str148 = allocate([ 32, 118, 111, 108, 97, 116, 105, 108, 101, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str149 = allocate([ 32, 99, 111, 110, 115, 116, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str150 = allocate([ 99, 111, 109, 112, 108, 101, 120, 32, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str151 = allocate([ 105, 109, 97, 103, 105, 110, 97, 114, 121, 32, 0 ], "i8", ALLOC_STATIC);

_standard_subs = allocate([ 116, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 97, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 98, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 115, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 105, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 49, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 111, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 49, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0 ], [ "i8", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i8", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STATIC);

STRING_TABLE.__str152 = allocate([ 115, 116, 100, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str153 = allocate([ 115, 116, 100, 58, 58, 97, 108, 108, 111, 99, 97, 116, 111, 114, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str154 = allocate([ 97, 108, 108, 111, 99, 97, 116, 111, 114, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str155 = allocate([ 115, 116, 100, 58, 58, 98, 97, 115, 105, 99, 95, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str156 = allocate([ 98, 97, 115, 105, 99, 95, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str157 = allocate([ 115, 116, 100, 58, 58, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str158 = allocate([ 115, 116, 100, 58, 58, 98, 97, 115, 105, 99, 95, 115, 116, 114, 105, 110, 103, 60, 99, 104, 97, 114, 44, 32, 115, 116, 100, 58, 58, 99, 104, 97, 114, 95, 116, 114, 97, 105, 116, 115, 60, 99, 104, 97, 114, 62, 44, 32, 115, 116, 100, 58, 58, 97, 108, 108, 111, 99, 97, 116, 111, 114, 60, 99, 104, 97, 114, 62, 32, 62, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str159 = allocate([ 115, 116, 100, 58, 58, 105, 115, 116, 114, 101, 97, 109, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str160 = allocate([ 115, 116, 100, 58, 58, 98, 97, 115, 105, 99, 95, 105, 115, 116, 114, 101, 97, 109, 60, 99, 104, 97, 114, 44, 32, 115, 116, 100, 58, 58, 99, 104, 97, 114, 95, 116, 114, 97, 105, 116, 115, 60, 99, 104, 97, 114, 62, 32, 62, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str161 = allocate([ 98, 97, 115, 105, 99, 95, 105, 115, 116, 114, 101, 97, 109, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str162 = allocate([ 115, 116, 100, 58, 58, 111, 115, 116, 114, 101, 97, 109, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str163 = allocate([ 115, 116, 100, 58, 58, 98, 97, 115, 105, 99, 95, 111, 115, 116, 114, 101, 97, 109, 60, 99, 104, 97, 114, 44, 32, 115, 116, 100, 58, 58, 99, 104, 97, 114, 95, 116, 114, 97, 105, 116, 115, 60, 99, 104, 97, 114, 62, 32, 62, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str164 = allocate([ 98, 97, 115, 105, 99, 95, 111, 115, 116, 114, 101, 97, 109, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str165 = allocate([ 115, 116, 100, 58, 58, 105, 111, 115, 116, 114, 101, 97, 109, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str166 = allocate([ 115, 116, 100, 58, 58, 98, 97, 115, 105, 99, 95, 105, 111, 115, 116, 114, 101, 97, 109, 60, 99, 104, 97, 114, 44, 32, 115, 116, 100, 58, 58, 99, 104, 97, 114, 95, 116, 114, 97, 105, 116, 115, 60, 99, 104, 97, 114, 62, 32, 62, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str167 = allocate([ 98, 97, 115, 105, 99, 95, 105, 111, 115, 116, 114, 101, 97, 109, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str168 = allocate([ 115, 116, 114, 105, 110, 103, 32, 108, 105, 116, 101, 114, 97, 108, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str169 = allocate([ 40, 97, 110, 111, 110, 121, 109, 111, 117, 115, 32, 110, 97, 109, 101, 115, 112, 97, 99, 101, 41, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE._symbol_demangle_dashed_null = allocate([ 45, 45, 110, 117, 108, 108, 45, 45, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str170 = allocate([ 37, 115, 37, 115, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str1171 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 32, 110, 101, 119, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str2172 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 32, 100, 101, 108, 101, 116, 101, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str3173 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 61, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str4174 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 62, 62, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str5175 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 60, 60, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str6176 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 33, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str7177 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 61, 61, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str8178 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 33, 61, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str9179 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 91, 93, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str10180 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 32, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str11181 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 45, 62, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str12182 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 42, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str13183 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 43, 43, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str14184 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 45, 45, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str15185 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 45, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str16186 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 43, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str17187 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 38, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str18188 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 45, 62, 42, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str19189 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 47, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str20190 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 37, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str21191 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 60, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str22192 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 60, 61, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str23193 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 62, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str24194 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 62, 61, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str25195 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 44, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str26196 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 40, 41, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str27197 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 126, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str28198 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 94, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str29199 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 124, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str30200 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 38, 38, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str31201 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 124, 124, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str32202 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 42, 61, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str33203 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 43, 61, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str34204 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 45, 61, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str35205 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 47, 61, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str36206 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 37, 61, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str37207 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 62, 62, 61, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str38208 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 60, 60, 61, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str39209 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 38, 61, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str40210 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 124, 61, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str41211 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 94, 61, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str42212 = allocate([ 96, 118, 102, 116, 97, 98, 108, 101, 39, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str43213 = allocate([ 96, 118, 98, 116, 97, 98, 108, 101, 39, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str44214 = allocate([ 96, 118, 99, 97, 108, 108, 39, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str45215 = allocate([ 96, 116, 121, 112, 101, 111, 102, 39, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str46216 = allocate([ 96, 108, 111, 99, 97, 108, 32, 115, 116, 97, 116, 105, 99, 32, 103, 117, 97, 114, 100, 39, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str47217 = allocate([ 96, 115, 116, 114, 105, 110, 103, 39, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str48218 = allocate([ 96, 118, 98, 97, 115, 101, 32, 100, 101, 115, 116, 114, 117, 99, 116, 111, 114, 39, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str49219 = allocate([ 96, 118, 101, 99, 116, 111, 114, 32, 100, 101, 108, 101, 116, 105, 110, 103, 32, 100, 101, 115, 116, 114, 117, 99, 116, 111, 114, 39, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str50220 = allocate([ 96, 100, 101, 102, 97, 117, 108, 116, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 32, 99, 108, 111, 115, 117, 114, 101, 39, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str51221 = allocate([ 96, 115, 99, 97, 108, 97, 114, 32, 100, 101, 108, 101, 116, 105, 110, 103, 32, 100, 101, 115, 116, 114, 117, 99, 116, 111, 114, 39, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str52222 = allocate([ 96, 118, 101, 99, 116, 111, 114, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 32, 105, 116, 101, 114, 97, 116, 111, 114, 39, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str53223 = allocate([ 96, 118, 101, 99, 116, 111, 114, 32, 100, 101, 115, 116, 114, 117, 99, 116, 111, 114, 32, 105, 116, 101, 114, 97, 116, 111, 114, 39, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str54224 = allocate([ 96, 118, 101, 99, 116, 111, 114, 32, 118, 98, 97, 115, 101, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 32, 105, 116, 101, 114, 97, 116, 111, 114, 39, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str55225 = allocate([ 96, 118, 105, 114, 116, 117, 97, 108, 32, 100, 105, 115, 112, 108, 97, 99, 101, 109, 101, 110, 116, 32, 109, 97, 112, 39, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str56226 = allocate([ 96, 101, 104, 32, 118, 101, 99, 116, 111, 114, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 32, 105, 116, 101, 114, 97, 116, 111, 114, 39, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str57227 = allocate([ 96, 101, 104, 32, 118, 101, 99, 116, 111, 114, 32, 100, 101, 115, 116, 114, 117, 99, 116, 111, 114, 32, 105, 116, 101, 114, 97, 116, 111, 114, 39, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str58228 = allocate([ 96, 101, 104, 32, 118, 101, 99, 116, 111, 114, 32, 118, 98, 97, 115, 101, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 32, 105, 116, 101, 114, 97, 116, 111, 114, 39, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str59229 = allocate([ 96, 99, 111, 112, 121, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 32, 99, 108, 111, 115, 117, 114, 101, 39, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str60230 = allocate([ 37, 115, 37, 115, 32, 96, 82, 84, 84, 73, 32, 84, 121, 112, 101, 32, 68, 101, 115, 99, 114, 105, 112, 116, 111, 114, 39, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str61231 = allocate([ 96, 82, 84, 84, 73, 32, 66, 97, 115, 101, 32, 67, 108, 97, 115, 115, 32, 68, 101, 115, 99, 114, 105, 112, 116, 111, 114, 32, 97, 116, 32, 40, 37, 115, 44, 37, 115, 44, 37, 115, 44, 37, 115, 41, 39, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str62232 = allocate([ 96, 82, 84, 84, 73, 32, 66, 97, 115, 101, 32, 67, 108, 97, 115, 115, 32, 65, 114, 114, 97, 121, 39, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str63233 = allocate([ 96, 82, 84, 84, 73, 32, 67, 108, 97, 115, 115, 32, 72, 105, 101, 114, 97, 114, 99, 104, 121, 32, 68, 101, 115, 99, 114, 105, 112, 116, 111, 114, 39, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str64234 = allocate([ 96, 82, 84, 84, 73, 32, 67, 111, 109, 112, 108, 101, 116, 101, 32, 79, 98, 106, 101, 99, 116, 32, 76, 111, 99, 97, 116, 111, 114, 39, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str65235 = allocate([ 96, 108, 111, 99, 97, 108, 32, 118, 102, 116, 97, 98, 108, 101, 39, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str66236 = allocate([ 96, 108, 111, 99, 97, 108, 32, 118, 102, 116, 97, 98, 108, 101, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 32, 99, 108, 111, 115, 117, 114, 101, 39, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str67237 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 32, 110, 101, 119, 91, 93, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str68238 = allocate([ 111, 112, 101, 114, 97, 116, 111, 114, 32, 100, 101, 108, 101, 116, 101, 91, 93, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str69239 = allocate([ 96, 112, 108, 97, 99, 101, 109, 101, 110, 116, 32, 100, 101, 108, 101, 116, 101, 32, 99, 108, 111, 115, 117, 114, 101, 39, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str70240 = allocate([ 96, 112, 108, 97, 99, 101, 109, 101, 110, 116, 32, 100, 101, 108, 101, 116, 101, 91, 93, 32, 99, 108, 111, 115, 117, 114, 101, 39, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str71241 = allocate([ 126, 37, 115, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str72242 = allocate([ 117, 110, 100, 110, 97, 109, 101, 46, 99, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.___func___symbol_demangle = allocate([ 115, 121, 109, 98, 111, 108, 95, 100, 101, 109, 97, 110, 103, 108, 101, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str73243 = allocate([ 115, 121, 109, 45, 62, 114, 101, 115, 117, 108, 116, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.___func___handle_template = allocate([ 104, 97, 110, 100, 108, 101, 95, 116, 101, 109, 112, 108, 97, 116, 101, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str74244 = allocate([ 42, 115, 121, 109, 45, 62, 99, 117, 114, 114, 101, 110, 116, 32, 61, 61, 32, 39, 36, 39, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.___func___str_array_get_ref = allocate([ 115, 116, 114, 95, 97, 114, 114, 97, 121, 95, 103, 101, 116, 95, 114, 101, 102, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str75245 = allocate([ 99, 114, 101, 102, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str76246 = allocate([ 112, 114, 105, 118, 97, 116, 101, 58, 32, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str77247 = allocate([ 112, 114, 111, 116, 101, 99, 116, 101, 100, 58, 32, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str78248 = allocate([ 112, 117, 98, 108, 105, 99, 58, 32, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str79249 = allocate([ 115, 116, 97, 116, 105, 99, 32, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str80250 = allocate([ 118, 105, 114, 116, 117, 97, 108, 32, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str81251 = allocate([ 91, 116, 104, 117, 110, 107, 93, 58, 37, 115, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str82252 = allocate([ 37, 115, 96, 97, 100, 106, 117, 115, 116, 111, 114, 123, 37, 115, 125, 39, 32, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str83253 = allocate([ 37, 115, 32, 37, 115, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str84254 = allocate([ 118, 111, 105, 100, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str85255 = allocate([ 37, 115, 37, 115, 37, 115, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str86256 = allocate([ 37, 115, 37, 115, 37, 115, 37, 115, 37, 115, 37, 115, 37, 115, 37, 115, 37, 115, 37, 115, 37, 115, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str87257 = allocate([ 32, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str88258 = allocate([ 100, 108, 108, 95, 101, 120, 112, 111, 114, 116, 32, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str89259 = allocate([ 99, 100, 101, 99, 108, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str90260 = allocate([ 112, 97, 115, 99, 97, 108, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str91261 = allocate([ 116, 104, 105, 115, 99, 97, 108, 108, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str92262 = allocate([ 115, 116, 100, 99, 97, 108, 108, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str93263 = allocate([ 102, 97, 115, 116, 99, 97, 108, 108, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str94264 = allocate([ 99, 108, 114, 99, 97, 108, 108, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str95265 = allocate([ 95, 95, 100, 108, 108, 95, 101, 120, 112, 111, 114, 116, 32, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str96266 = allocate([ 95, 95, 99, 100, 101, 99, 108, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str97267 = allocate([ 95, 95, 112, 97, 115, 99, 97, 108, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str98268 = allocate([ 95, 95, 116, 104, 105, 115, 99, 97, 108, 108, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str99269 = allocate([ 95, 95, 115, 116, 100, 99, 97, 108, 108, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str100270 = allocate([ 95, 95, 102, 97, 115, 116, 99, 97, 108, 108, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str101271 = allocate([ 95, 95, 99, 108, 114, 99, 97, 108, 108, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str102272 = allocate([ 95, 95, 112, 116, 114, 54, 52, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str103273 = allocate([ 99, 111, 110, 115, 116, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str104274 = allocate([ 118, 111, 108, 97, 116, 105, 108, 101, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str105275 = allocate([ 99, 111, 110, 115, 116, 32, 118, 111, 108, 97, 116, 105, 108, 101, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.___func___get_class_string = allocate([ 103, 101, 116, 95, 99, 108, 97, 115, 115, 95, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str106276 = allocate([ 97, 45, 62, 101, 108, 116, 115, 91, 105, 93, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str107277 = allocate([ 123, 102, 111, 114, 32, 96, 37, 115, 39, 125, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str108278 = allocate([ 37, 115, 37, 115, 37, 115, 37, 115, 37, 115, 37, 115, 37, 115, 37, 115, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str109279 = allocate([ 96, 37, 115, 39, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str110280 = allocate([ 46, 46, 46, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str111281 = allocate([ 37, 99, 118, 111, 105, 100, 37, 99, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str112282 = allocate([ 37, 115, 44, 37, 115, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str113283 = allocate([ 37, 99, 37, 115, 37, 115, 32, 37, 99, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str114284 = allocate([ 37, 99, 37, 115, 37, 115, 37, 99, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.___func___str_array_push = allocate([ 115, 116, 114, 95, 97, 114, 114, 97, 121, 95, 112, 117, 115, 104, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str115285 = allocate([ 112, 116, 114, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str116286 = allocate([ 97, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str117287 = allocate([ 97, 45, 62, 101, 108, 116, 115, 91, 97, 45, 62, 110, 117, 109, 93, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str118288 = allocate([ 37, 115, 37, 100, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str119289 = allocate([ 45, 0 ], "i8", ALLOC_STATIC);

__str120290 = allocate(1, "i8", ALLOC_STATIC);

STRING_TABLE.___func___demangle_datatype = allocate([ 100, 101, 109, 97, 110, 103, 108, 101, 95, 100, 97, 116, 97, 116, 121, 112, 101, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str121291 = allocate([ 99, 116, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str122292 = allocate([ 117, 110, 105, 111, 110, 32, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str123293 = allocate([ 115, 116, 114, 117, 99, 116, 32, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str124294 = allocate([ 99, 108, 97, 115, 115, 32, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str125295 = allocate([ 99, 111, 105, 110, 116, 101, 114, 102, 97, 99, 101, 32, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str126296 = allocate([ 96, 116, 101, 109, 112, 108, 97, 116, 101, 45, 112, 97, 114, 97, 109, 101, 116, 101, 114, 45, 37, 115, 39, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str127297 = allocate([ 37, 115, 37, 115, 32, 40, 37, 115, 42, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str128298 = allocate([ 41, 37, 115, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str129299 = allocate([ 101, 110, 117, 109, 32, 37, 115, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str130300 = allocate([ 96, 116, 101, 109, 112, 108, 97, 116, 101, 45, 112, 97, 114, 97, 109, 101, 116, 101, 114, 37, 115, 39, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str131301 = allocate([ 123, 37, 115, 44, 37, 115, 125, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str132302 = allocate([ 123, 37, 115, 44, 37, 115, 44, 37, 115, 125, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str133303 = allocate([ 96, 110, 111, 110, 45, 116, 121, 112, 101, 45, 116, 101, 109, 112, 108, 97, 116, 101, 45, 112, 97, 114, 97, 109, 101, 116, 101, 114, 37, 115, 39, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str134304 = allocate([ 32, 95, 95, 112, 116, 114, 54, 52, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str135305 = allocate([ 32, 38, 37, 115, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str136306 = allocate([ 32, 38, 37, 115, 32, 118, 111, 108, 97, 116, 105, 108, 101, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str137307 = allocate([ 32, 42, 37, 115, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str138308 = allocate([ 32, 42, 37, 115, 32, 99, 111, 110, 115, 116, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str139309 = allocate([ 32, 42, 37, 115, 32, 118, 111, 108, 97, 116, 105, 108, 101, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str140310 = allocate([ 32, 42, 37, 115, 32, 99, 111, 110, 115, 116, 32, 118, 111, 108, 97, 116, 105, 108, 101, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str141311 = allocate([ 32, 40, 37, 115, 37, 115, 41, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str142312 = allocate([ 32, 40, 37, 115, 41, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str143313 = allocate([ 37, 115, 91, 37, 115, 93, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str144314 = allocate([ 37, 115, 32, 37, 115, 37, 115, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str145315 = allocate([ 115, 105, 103, 110, 101, 100, 32, 99, 104, 97, 114, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str146316 = allocate([ 99, 104, 97, 114, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str147317 = allocate([ 117, 110, 115, 105, 103, 110, 101, 100, 32, 99, 104, 97, 114, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str148318 = allocate([ 115, 104, 111, 114, 116, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str149319 = allocate([ 117, 110, 115, 105, 103, 110, 101, 100, 32, 115, 104, 111, 114, 116, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str150320 = allocate([ 105, 110, 116, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str151321 = allocate([ 117, 110, 115, 105, 103, 110, 101, 100, 32, 105, 110, 116, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str152322 = allocate([ 108, 111, 110, 103, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str153323 = allocate([ 117, 110, 115, 105, 103, 110, 101, 100, 32, 108, 111, 110, 103, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str154324 = allocate([ 102, 108, 111, 97, 116, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str155325 = allocate([ 100, 111, 117, 98, 108, 101, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str156326 = allocate([ 108, 111, 110, 103, 32, 100, 111, 117, 98, 108, 101, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str157327 = allocate([ 95, 95, 105, 110, 116, 56, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str158328 = allocate([ 117, 110, 115, 105, 103, 110, 101, 100, 32, 95, 95, 105, 110, 116, 56, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str159329 = allocate([ 95, 95, 105, 110, 116, 49, 54, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str160330 = allocate([ 117, 110, 115, 105, 103, 110, 101, 100, 32, 95, 95, 105, 110, 116, 49, 54, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str161331 = allocate([ 95, 95, 105, 110, 116, 51, 50, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str162332 = allocate([ 117, 110, 115, 105, 103, 110, 101, 100, 32, 95, 95, 105, 110, 116, 51, 50, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str163333 = allocate([ 95, 95, 105, 110, 116, 54, 52, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str164334 = allocate([ 117, 110, 115, 105, 103, 110, 101, 100, 32, 95, 95, 105, 110, 116, 54, 52, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str165335 = allocate([ 95, 95, 105, 110, 116, 49, 50, 56, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str166336 = allocate([ 117, 110, 115, 105, 103, 110, 101, 100, 32, 95, 95, 105, 110, 116, 49, 50, 56, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str167337 = allocate([ 98, 111, 111, 108, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str168338 = allocate([ 119, 99, 104, 97, 114, 95, 116, 0 ], "i8", ALLOC_STATIC);

__gm_ = allocate(468, [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STATIC);

_mparams = allocate(24, "i32", ALLOC_STATIC);

STRING_TABLE.__str339 = allocate([ 109, 97, 120, 32, 115, 121, 115, 116, 101, 109, 32, 98, 121, 116, 101, 115, 32, 61, 32, 37, 49, 48, 108, 117, 10, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str1340 = allocate([ 115, 121, 115, 116, 101, 109, 32, 98, 121, 116, 101, 115, 32, 32, 32, 32, 32, 61, 32, 37, 49, 48, 108, 117, 10, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__str2341 = allocate([ 105, 110, 32, 117, 115, 101, 32, 98, 121, 116, 101, 115, 32, 32, 32, 32, 32, 61, 32, 37, 49, 48, 108, 117, 10, 0 ], "i8", ALLOC_STATIC);

__ZSt7nothrow = allocate([ undef ], "i8", ALLOC_STATIC);

__ZL13__new_handler = allocate(1, "void ()*", ALLOC_STATIC);

__ZTVSt9bad_alloc = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 8, 0, 0, 0, 10, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], ALLOC_STATIC);

allocate(1, "void*", ALLOC_STATIC);

STRING_TABLE.__str3342 = allocate([ 115, 116, 100, 58, 58, 98, 97, 100, 95, 97, 108, 108, 111, 99, 0 ], "i8", ALLOC_STATIC);

__ZTVSt20bad_array_new_length = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 12, 0, 0, 0, 14, 0, 0, 0 ], [ "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0 ], ALLOC_STATIC);

allocate(1, "void*", ALLOC_STATIC);

STRING_TABLE.__str14343 = allocate([ 98, 97, 100, 95, 97, 114, 114, 97, 121, 95, 110, 101, 119, 95, 108, 101, 110, 103, 116, 104, 0 ], "i8", ALLOC_STATIC);

STRING_TABLE.__ZTSSt9bad_alloc = allocate([ 83, 116, 57, 98, 97, 100, 95, 97, 108, 108, 111, 99, 0 ], "i8", ALLOC_STATIC);

__ZTISt9bad_alloc = allocate(12, "*", ALLOC_STATIC);

STRING_TABLE.__ZTSSt20bad_array_new_length = allocate([ 83, 116, 50, 48, 98, 97, 100, 95, 97, 114, 114, 97, 121, 95, 110, 101, 119, 95, 108, 101, 110, 103, 116, 104, 0 ], "i8", ALLOC_STATIC);

__ZTISt20bad_array_new_length = allocate(12, "*", ALLOC_STATIC);

HEAP32[_cplus_demangle_operators >> 2] = STRING_TABLE.__str | 0;

HEAP32[_cplus_demangle_operators + 4 >> 2] = STRING_TABLE.__str1 | 0;

HEAP32[_cplus_demangle_operators + 16 >> 2] = STRING_TABLE.__str2 | 0;

HEAP32[_cplus_demangle_operators + 20 >> 2] = STRING_TABLE.__str3 | 0;

HEAP32[_cplus_demangle_operators + 32 >> 2] = STRING_TABLE.__str4 | 0;

HEAP32[_cplus_demangle_operators + 36 >> 2] = STRING_TABLE.__str5 | 0;

HEAP32[_cplus_demangle_operators + 48 >> 2] = STRING_TABLE.__str6 | 0;

HEAP32[_cplus_demangle_operators + 52 >> 2] = STRING_TABLE.__str7 | 0;

HEAP32[_cplus_demangle_operators + 64 >> 2] = STRING_TABLE.__str8 | 0;

HEAP32[_cplus_demangle_operators + 68 >> 2] = STRING_TABLE.__str7 | 0;

HEAP32[_cplus_demangle_operators + 80 >> 2] = STRING_TABLE.__str9 | 0;

HEAP32[_cplus_demangle_operators + 84 >> 2] = STRING_TABLE.__str10 | 0;

HEAP32[_cplus_demangle_operators + 96 >> 2] = STRING_TABLE.__str11 | 0;

HEAP32[_cplus_demangle_operators + 100 >> 2] = STRING_TABLE.__str12 | 0;

HEAP32[_cplus_demangle_operators + 112 >> 2] = STRING_TABLE.__str13 | 0;

HEAP32[_cplus_demangle_operators + 116 >> 2] = STRING_TABLE.__str14 | 0;

HEAP32[_cplus_demangle_operators + 128 >> 2] = STRING_TABLE.__str15 | 0;

HEAP32[_cplus_demangle_operators + 132 >> 2] = STRING_TABLE.__str16 | 0;

HEAP32[_cplus_demangle_operators + 144 >> 2] = STRING_TABLE.__str17 | 0;

HEAP32[_cplus_demangle_operators + 148 >> 2] = STRING_TABLE.__str18 | 0;

HEAP32[_cplus_demangle_operators + 160 >> 2] = STRING_TABLE.__str19 | 0;

HEAP32[_cplus_demangle_operators + 164 >> 2] = STRING_TABLE.__str20 | 0;

HEAP32[_cplus_demangle_operators + 176 >> 2] = STRING_TABLE.__str21 | 0;

HEAP32[_cplus_demangle_operators + 180 >> 2] = STRING_TABLE.__str22 | 0;

HEAP32[_cplus_demangle_operators + 192 >> 2] = STRING_TABLE.__str23 | 0;

HEAP32[_cplus_demangle_operators + 196 >> 2] = STRING_TABLE.__str24 | 0;

HEAP32[_cplus_demangle_operators + 208 >> 2] = STRING_TABLE.__str25 | 0;

HEAP32[_cplus_demangle_operators + 212 >> 2] = STRING_TABLE.__str26 | 0;

HEAP32[_cplus_demangle_operators + 224 >> 2] = STRING_TABLE.__str27 | 0;

HEAP32[_cplus_demangle_operators + 228 >> 2] = STRING_TABLE.__str28 | 0;

HEAP32[_cplus_demangle_operators + 240 >> 2] = STRING_TABLE.__str29 | 0;

HEAP32[_cplus_demangle_operators + 244 >> 2] = STRING_TABLE.__str30 | 0;

HEAP32[_cplus_demangle_operators + 256 >> 2] = STRING_TABLE.__str31 | 0;

HEAP32[_cplus_demangle_operators + 260 >> 2] = STRING_TABLE.__str32 | 0;

HEAP32[_cplus_demangle_operators + 272 >> 2] = STRING_TABLE.__str33 | 0;

HEAP32[_cplus_demangle_operators + 276 >> 2] = STRING_TABLE.__str34 | 0;

HEAP32[_cplus_demangle_operators + 288 >> 2] = STRING_TABLE.__str35 | 0;

HEAP32[_cplus_demangle_operators + 292 >> 2] = STRING_TABLE.__str36 | 0;

HEAP32[_cplus_demangle_operators + 304 >> 2] = STRING_TABLE.__str37 | 0;

HEAP32[_cplus_demangle_operators + 308 >> 2] = STRING_TABLE.__str38 | 0;

HEAP32[_cplus_demangle_operators + 320 >> 2] = STRING_TABLE.__str39 | 0;

HEAP32[_cplus_demangle_operators + 324 >> 2] = STRING_TABLE.__str40 | 0;

HEAP32[_cplus_demangle_operators + 336 >> 2] = STRING_TABLE.__str41 | 0;

HEAP32[_cplus_demangle_operators + 340 >> 2] = STRING_TABLE.__str42 | 0;

HEAP32[_cplus_demangle_operators + 352 >> 2] = STRING_TABLE.__str43 | 0;

HEAP32[_cplus_demangle_operators + 356 >> 2] = STRING_TABLE.__str44 | 0;

HEAP32[_cplus_demangle_operators + 368 >> 2] = STRING_TABLE.__str45 | 0;

HEAP32[_cplus_demangle_operators + 372 >> 2] = STRING_TABLE.__str46 | 0;

HEAP32[_cplus_demangle_operators + 384 >> 2] = STRING_TABLE.__str47 | 0;

HEAP32[_cplus_demangle_operators + 388 >> 2] = STRING_TABLE.__str48 | 0;

HEAP32[_cplus_demangle_operators + 400 >> 2] = STRING_TABLE.__str49 | 0;

HEAP32[_cplus_demangle_operators + 404 >> 2] = STRING_TABLE.__str119289 | 0;

HEAP32[_cplus_demangle_operators + 416 >> 2] = STRING_TABLE.__str51 | 0;

HEAP32[_cplus_demangle_operators + 420 >> 2] = STRING_TABLE.__str20 | 0;

HEAP32[_cplus_demangle_operators + 432 >> 2] = STRING_TABLE.__str52 | 0;

HEAP32[_cplus_demangle_operators + 436 >> 2] = STRING_TABLE.__str53 | 0;

HEAP32[_cplus_demangle_operators + 448 >> 2] = STRING_TABLE.__str54 | 0;

HEAP32[_cplus_demangle_operators + 452 >> 2] = STRING_TABLE.__str55 | 0;

HEAP32[_cplus_demangle_operators + 464 >> 2] = STRING_TABLE.__str56 | 0;

HEAP32[_cplus_demangle_operators + 468 >> 2] = STRING_TABLE.__str57 | 0;

HEAP32[_cplus_demangle_operators + 480 >> 2] = STRING_TABLE.__str58 | 0;

HEAP32[_cplus_demangle_operators + 484 >> 2] = STRING_TABLE.__str119289 | 0;

HEAP32[_cplus_demangle_operators + 496 >> 2] = STRING_TABLE.__str59 | 0;

HEAP32[_cplus_demangle_operators + 500 >> 2] = STRING_TABLE.__str60 | 0;

HEAP32[_cplus_demangle_operators + 512 >> 2] = STRING_TABLE.__str61 | 0;

HEAP32[_cplus_demangle_operators + 516 >> 2] = STRING_TABLE.__str62 | 0;

HEAP32[_cplus_demangle_operators + 528 >> 2] = STRING_TABLE.__str63 | 0;

HEAP32[_cplus_demangle_operators + 532 >> 2] = STRING_TABLE.__str64 | 0;

HEAP32[_cplus_demangle_operators + 544 >> 2] = STRING_TABLE.__str65 | 0;

HEAP32[_cplus_demangle_operators + 548 >> 2] = STRING_TABLE.__str66 | 0;

HEAP32[_cplus_demangle_operators + 560 >> 2] = STRING_TABLE.__str67 | 0;

HEAP32[_cplus_demangle_operators + 564 >> 2] = STRING_TABLE.__str68 | 0;

HEAP32[_cplus_demangle_operators + 576 >> 2] = STRING_TABLE.__str69 | 0;

HEAP32[_cplus_demangle_operators + 580 >> 2] = STRING_TABLE.__str70 | 0;

HEAP32[_cplus_demangle_operators + 592 >> 2] = STRING_TABLE.__str71 | 0;

HEAP32[_cplus_demangle_operators + 596 >> 2] = STRING_TABLE.__str72 | 0;

HEAP32[_cplus_demangle_operators + 608 >> 2] = STRING_TABLE.__str73 | 0;

HEAP32[_cplus_demangle_operators + 612 >> 2] = STRING_TABLE.__str74 | 0;

HEAP32[_cplus_demangle_operators + 624 >> 2] = STRING_TABLE.__str75 | 0;

HEAP32[_cplus_demangle_operators + 628 >> 2] = STRING_TABLE.__str76 | 0;

HEAP32[_cplus_demangle_operators + 640 >> 2] = STRING_TABLE.__str77 | 0;

HEAP32[_cplus_demangle_operators + 644 >> 2] = STRING_TABLE.__str72 | 0;

HEAP32[_cplus_demangle_operators + 656 >> 2] = STRING_TABLE.__str78 | 0;

HEAP32[_cplus_demangle_operators + 660 >> 2] = STRING_TABLE.__str79 | 0;

HEAP32[_cplus_demangle_operators + 672 >> 2] = STRING_TABLE.__str80 | 0;

HEAP32[_cplus_demangle_operators + 676 >> 2] = STRING_TABLE.__str81 | 0;

HEAP32[_cplus_demangle_operators + 688 >> 2] = STRING_TABLE.__str82 | 0;

HEAP32[_cplus_demangle_operators + 692 >> 2] = STRING_TABLE.__str83 | 0;

HEAP32[_cplus_demangle_operators + 704 >> 2] = STRING_TABLE.__str84 | 0;

HEAP32[_cplus_demangle_operators + 708 >> 2] = STRING_TABLE.__str85 | 0;

HEAP32[_cplus_demangle_operators + 720 >> 2] = STRING_TABLE.__str86 | 0;

HEAP32[_cplus_demangle_operators + 724 >> 2] = STRING_TABLE.__str87 | 0;

HEAP32[_cplus_demangle_operators + 736 >> 2] = STRING_TABLE.__str88 | 0;

HEAP32[_cplus_demangle_operators + 740 >> 2] = STRING_TABLE.__str89 | 0;

HEAP32[_cplus_demangle_operators + 752 >> 2] = STRING_TABLE.__str90 | 0;

HEAP32[_cplus_demangle_operators + 756 >> 2] = STRING_TABLE.__str91 | 0;

HEAP32[_cplus_demangle_operators + 768 >> 2] = STRING_TABLE.__str92 | 0;

HEAP32[_cplus_demangle_operators + 772 >> 2] = STRING_TABLE.__str91 | 0;

HEAP32[_cplus_demangle_builtin_types >> 2] = STRING_TABLE.__str145315 | 0;

HEAP32[_cplus_demangle_builtin_types + 8 >> 2] = STRING_TABLE.__str145315 | 0;

HEAP32[_cplus_demangle_builtin_types + 20 >> 2] = STRING_TABLE.__str167337 | 0;

HEAP32[_cplus_demangle_builtin_types + 28 >> 2] = STRING_TABLE.__str95 | 0;

HEAP32[_cplus_demangle_builtin_types + 40 >> 2] = STRING_TABLE.__str146316 | 0;

HEAP32[_cplus_demangle_builtin_types + 48 >> 2] = STRING_TABLE.__str97 | 0;

HEAP32[_cplus_demangle_builtin_types + 60 >> 2] = STRING_TABLE.__str155325 | 0;

HEAP32[_cplus_demangle_builtin_types + 68 >> 2] = STRING_TABLE.__str155325 | 0;

HEAP32[_cplus_demangle_builtin_types + 80 >> 2] = STRING_TABLE.__str156326 | 0;

HEAP32[_cplus_demangle_builtin_types + 88 >> 2] = STRING_TABLE.__str156326 | 0;

HEAP32[_cplus_demangle_builtin_types + 100 >> 2] = STRING_TABLE.__str154324 | 0;

HEAP32[_cplus_demangle_builtin_types + 108 >> 2] = STRING_TABLE.__str154324 | 0;

HEAP32[_cplus_demangle_builtin_types + 120 >> 2] = STRING_TABLE.__str101 | 0;

HEAP32[_cplus_demangle_builtin_types + 128 >> 2] = STRING_TABLE.__str101 | 0;

HEAP32[_cplus_demangle_builtin_types + 140 >> 2] = STRING_TABLE.__str147317 | 0;

HEAP32[_cplus_demangle_builtin_types + 148 >> 2] = STRING_TABLE.__str147317 | 0;

HEAP32[_cplus_demangle_builtin_types + 160 >> 2] = STRING_TABLE.__str150320 | 0;

HEAP32[_cplus_demangle_builtin_types + 168 >> 2] = STRING_TABLE.__str150320 | 0;

HEAP32[_cplus_demangle_builtin_types + 180 >> 2] = STRING_TABLE.__str151321 | 0;

HEAP32[_cplus_demangle_builtin_types + 188 >> 2] = STRING_TABLE.__str105 | 0;

HEAP32[_cplus_demangle_builtin_types + 220 >> 2] = STRING_TABLE.__str152322 | 0;

HEAP32[_cplus_demangle_builtin_types + 228 >> 2] = STRING_TABLE.__str152322 | 0;

HEAP32[_cplus_demangle_builtin_types + 240 >> 2] = STRING_TABLE.__str153323 | 0;

HEAP32[_cplus_demangle_builtin_types + 248 >> 2] = STRING_TABLE.__str153323 | 0;

HEAP32[_cplus_demangle_builtin_types + 260 >> 2] = STRING_TABLE.__str165335 | 0;

HEAP32[_cplus_demangle_builtin_types + 268 >> 2] = STRING_TABLE.__str165335 | 0;

HEAP32[_cplus_demangle_builtin_types + 280 >> 2] = STRING_TABLE.__str166336 | 0;

HEAP32[_cplus_demangle_builtin_types + 288 >> 2] = STRING_TABLE.__str166336 | 0;

HEAP32[_cplus_demangle_builtin_types + 360 >> 2] = STRING_TABLE.__str148318 | 0;

HEAP32[_cplus_demangle_builtin_types + 368 >> 2] = STRING_TABLE.__str148318 | 0;

HEAP32[_cplus_demangle_builtin_types + 380 >> 2] = STRING_TABLE.__str149319 | 0;

HEAP32[_cplus_demangle_builtin_types + 388 >> 2] = STRING_TABLE.__str149319 | 0;

HEAP32[_cplus_demangle_builtin_types + 420 >> 2] = STRING_TABLE.__str84254 | 0;

HEAP32[_cplus_demangle_builtin_types + 428 >> 2] = STRING_TABLE.__str84254 | 0;

HEAP32[_cplus_demangle_builtin_types + 440 >> 2] = STRING_TABLE.__str168338 | 0;

HEAP32[_cplus_demangle_builtin_types + 448 >> 2] = STRING_TABLE.__str146316 | 0;

HEAP32[_cplus_demangle_builtin_types + 460 >> 2] = STRING_TABLE.__str114 | 0;

HEAP32[_cplus_demangle_builtin_types + 468 >> 2] = STRING_TABLE.__str152322 | 0;

HEAP32[_cplus_demangle_builtin_types + 480 >> 2] = STRING_TABLE.__str115 | 0;

HEAP32[_cplus_demangle_builtin_types + 488 >> 2] = STRING_TABLE.__str115 | 0;

HEAP32[_cplus_demangle_builtin_types + 500 >> 2] = STRING_TABLE.__str110280 | 0;

HEAP32[_cplus_demangle_builtin_types + 508 >> 2] = STRING_TABLE.__str110280 | 0;

HEAP32[_standard_subs + 4 >> 2] = STRING_TABLE.__str152 | 0;

HEAP32[_standard_subs + 12 >> 2] = STRING_TABLE.__str152 | 0;

HEAP32[_standard_subs + 32 >> 2] = STRING_TABLE.__str153 | 0;

HEAP32[_standard_subs + 40 >> 2] = STRING_TABLE.__str153 | 0;

HEAP32[_standard_subs + 48 >> 2] = STRING_TABLE.__str154 | 0;

HEAP32[_standard_subs + 60 >> 2] = STRING_TABLE.__str155 | 0;

HEAP32[_standard_subs + 68 >> 2] = STRING_TABLE.__str155 | 0;

HEAP32[_standard_subs + 76 >> 2] = STRING_TABLE.__str156 | 0;

HEAP32[_standard_subs + 88 >> 2] = STRING_TABLE.__str157 | 0;

HEAP32[_standard_subs + 96 >> 2] = STRING_TABLE.__str158 | 0;

HEAP32[_standard_subs + 104 >> 2] = STRING_TABLE.__str156 | 0;

HEAP32[_standard_subs + 116 >> 2] = STRING_TABLE.__str159 | 0;

HEAP32[_standard_subs + 124 >> 2] = STRING_TABLE.__str160 | 0;

HEAP32[_standard_subs + 132 >> 2] = STRING_TABLE.__str161 | 0;

HEAP32[_standard_subs + 144 >> 2] = STRING_TABLE.__str162 | 0;

HEAP32[_standard_subs + 152 >> 2] = STRING_TABLE.__str163 | 0;

HEAP32[_standard_subs + 160 >> 2] = STRING_TABLE.__str164 | 0;

HEAP32[_standard_subs + 172 >> 2] = STRING_TABLE.__str165 | 0;

HEAP32[_standard_subs + 180 >> 2] = STRING_TABLE.__str166 | 0;

HEAP32[_standard_subs + 188 >> 2] = STRING_TABLE.__str167 | 0;

HEAP32[__ZTVSt9bad_alloc + 4 >> 2] = __ZTISt9bad_alloc;

HEAP32[__ZTVSt20bad_array_new_length + 4 >> 2] = __ZTISt20bad_array_new_length;

__ZTVN10__cxxabiv120__si_class_type_infoE = allocate([ 2, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, 0 ], ALLOC_STATIC);

HEAP32[__ZTISt9bad_alloc >> 2] = __ZTVN10__cxxabiv120__si_class_type_infoE + 8 | 0;

HEAP32[__ZTISt9bad_alloc + 4 >> 2] = STRING_TABLE.__ZTSSt9bad_alloc | 0;

HEAP32[__ZTISt9bad_alloc + 8 >> 2] = __ZTISt9exception;

HEAP32[__ZTISt20bad_array_new_length >> 2] = __ZTVN10__cxxabiv120__si_class_type_infoE + 8 | 0;

HEAP32[__ZTISt20bad_array_new_length + 4 >> 2] = STRING_TABLE.__ZTSSt20bad_array_new_length | 0;

HEAP32[__ZTISt20bad_array_new_length + 8 >> 2] = __ZTISt9bad_alloc;

__ZNSt9bad_allocC1Ev = 16;

__ZNSt9bad_allocD1Ev = 6;

__ZNSt20bad_array_new_lengthC1Ev = 18;

__ZNSt20bad_array_new_lengthD1Ev = 6;

__ZNSt20bad_array_new_lengthD2Ev = 6;

FUNCTION_TABLE = [ 0, 0, _malloc, 0, _free, 0, __ZNSt9bad_allocD2Ev, 0, __ZNSt9bad_allocD0Ev, 0, __ZNKSt9bad_alloc4whatEv, 0, __ZNSt20bad_array_new_lengthD0Ev, 0, __ZNKSt20bad_array_new_length4whatEv, 0, __ZNSt9bad_allocC2Ev, 0, __ZNSt20bad_array_new_lengthC2Ev, 0 ];

Module["FUNCTION_TABLE"] = FUNCTION_TABLE;

function run(args) {
  args = args || Module["arguments"];
  initRuntime();
  var ret = null;
  if (Module["_main"]) {
    ret = Module.callMain(args);
    if (!Module["noExitRuntime"]) {
      exitRuntime();
    }
  }
  return ret;
}

Module["run"] = run;

if (Module["preRun"]) {
  Module["preRun"]();
}

if (runDependencies == 0) {
  var ret = run();
}

if (Module["postRun"]) {
  Module["postRun"]();
}
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_cplus_demangle_fill_name","_cplus_demangle_fill_extended_operator","_cplus_demangle_fill_ctor","_cplus_demangle_fill_dtor","_d_add_substitution","_cplus_demangle_mangled_name","_d_encoding","_cplus_demangle_type","_d_cv_qualifiers","_d_make_builtin_type","_d_make_comp","_d_source_name","_d_function_type","_d_class_enum_type","_d_array_type","_d_pointer_to_member_type","_d_template_param","_d_template_args","_d_substitution","_cplus_demangle_print","_d_print_comp","_cplus_demangle_init_info","_d_print_append_char","___cxa_demangle","_d_demangle","_is_gnu_v3_mangled_ctor","_is_ctor_or_dtor","_is_gnu_v3_mangled_dtor","_d_print_error","_d_print_append_buffer","_d_print_java_identifier","_d_print_mod","_d_make_empty","_d_print_function_type","_d_print_array_type","_d_print_cast","_d_print_expr_op","_d_print_mod_list","_d_print_resize","_d_make_sub","_d_template_arg","_d_number","_d_expression","_d_expr_primary","_d_make_name","_d_unqualified_name","_d_operator_name","_d_make_extended_operator","_d_make_operator","_d_ctor_dtor_name","_d_discriminator","_d_make_ctor","_d_make_dtor","_d_make_template_param","_d_name","_d_nested_name","_d_local_name","_d_prefix","_d_bare_function_type","_is_ctor_dtor_or_conversion","_str_array_init","_d_identifier","_d_special_name","_has_return_type","_d_call_offset","___unDNameEx","_symbol_demangle","_und_free_all","___unDName","__simple_undname","_demangle_datatype","_str_printf","_get_number","_str_array_push","_get_args","_get_template_name","_get_calling_convention","_get_modifier","_get_class","_handle_data","_handle_method","_handle_template","_get_literal_string","_str_array_get_ref","_get_class_string","_und_alloc","_get_extended_type","_get_simple_type","_get_class_name","_get_modified_type","_malloc","_tmalloc_small","_sys_alloc","_tmalloc_large","_sys_trim","_free","_malloc_footprint","_malloc_max_footprint","_release_unused_segments","_calloc","_realloc","_memalign","_internal_memalign","_independent_calloc","_ialloc","_independent_comalloc","_valloc","_pvalloc","_malloc_trim","_mallinfo","_internal_mallinfo","_malloc_stats","_internal_malloc_stats","_mallopt","_change_mparam","_internal_realloc","_init_mparams","_malloc_usable_size","_mmap_resize","_segment_holding","_init_top","_init_bins","_prepend_alloc","__ZNKSt9bad_alloc4whatEv","__ZNKSt20bad_array_new_length4whatEv","__ZSt15get_new_handlerv","__ZSt15set_new_handlerPFvvE","__ZNSt9bad_allocC2Ev","__ZdlPv","__ZdlPvRKSt9nothrow_t","__ZdaPv","__ZdaPvRKSt9nothrow_t","__ZNSt9bad_allocD0Ev","__ZNSt9bad_allocD2Ev","__ZNSt20bad_array_new_lengthC2Ev","__ZNSt20bad_array_new_lengthD0Ev","_add_segment","__Znwj","__ZnwjRKSt9nothrow_t","__Znaj","__ZnajRKSt9nothrow_t","__ZSt17__throw_bad_allocv"]


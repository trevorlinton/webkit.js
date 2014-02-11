#!/bin/sh
echo "import os" > ../build/emscripten.settings
echo "LLVM_ROOT='`emsdk active_path`/clang/3.2_64bit/bin'" >> ../build/emscripten.settings
echo "NODE_JS=['`emsdk active_path`/node/0.10.18_64bit/bin/node','--max-stack-size=8192']" >> ../build/emscripten.settings
echo "EMSCRIPTEN_ROOT='`emsdk active_path`/emscripten/1.8.2'" >> ../build/emscripten.settings
echo "SPIDERMONKEY_ENGINE = ''" >> ../build/emscripten.settings
echo "V8_ENGINE = ''" >> ../build/emscripten.settings
# TEMP_DIR = '/var/folders/ml/b1fyfkv96t32rl9l59h_7qyh0000gn/T'
echo "COMPILER_ENGINE = NODE_JS" >> ../build/emscripten.settings
echo "JS_ENGINES = [NODE_JS]" >> ../build/emscripten.settings
../Release/exports >> ../build/emscripten.settings

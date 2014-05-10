//
// Copyright (c) 2002-2012 The ANGLE Project Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//

#ifndef COMPILER_HASH_NAMES_H_
#define COMPILER_HASH_NAMES_H_

#include <map>

#include "compiler/intermediate.h"
#include "GLSLANG/ShaderLang.h"
#if PLATFORM(JS)
#define HASHED_NAME_PREFIX "js_webgl_"
#else
#define HASHED_NAME_PREFIX "webgl_"
#endif
typedef std::map<TPersistString, TPersistString> NameMap;

#endif  // COMPILER_HASH_NAMES_H_

/* -*- mode: c; tab-width: 4; indent-tabs-mode: nil; -*- */

/*
* This file is part of liblzg.
*
* Copyright (c) 2010 Marcus Geelnard
*
* This software is provided 'as-is', without any express or implied
* warranty. In no event will the authors be held liable for any damages
* arising from the use of this software.
*
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
*
* 1. The origin of this software must not be misrepresented; you must not
*    claim that you wrote the original software. If you use this software
*    in a product, an acknowledgment in the product documentation would
*    be appreciated but is not required.
*
* 2. Altered source versions must be plainly marked as such, and must not
*    be misrepresented as being the original software.
*
* 3. This notice may not be removed or altered from any source
*    distribution.
*/

#ifndef _LZG_INTERNAL_H_
#define _LZG_INTERNAL_H_

#include "../include/lzg.h"

/* Convenience TRUE/FALSE macros */
#ifndef TRUE
# define TRUE 1
#endif
#ifndef FALSE
# define FALSE 0
#endif

/* Supported compression methods */
#define LZG_METHOD_COPY 0
#define LZG_METHOD_LZG1 1

/* Buffer header format definitions */
#define LZG_HEADER_SIZE 16

typedef struct _lzg_header {
    lzg_uint32_t  encodedSize;
    lzg_uint32_t  decodedSize;
    lzg_uint32_t  checksum;
    unsigned char method;
} lzg_header;


/* Branch optimization macros */
#if defined(__GNUC__)
# define LIKELY(expr) __builtin_expect(!!(expr), 1)
# define UNLIKELY(expr) __builtin_expect(!!(expr), 0)
#else
# define LIKELY(expr) (expr)
# define UNLIKELY(expr) (expr)
#endif

/* Checksum calculation function (checksum.c) */
lzg_uint32_t _LZG_CalcChecksum(const unsigned char *in, lzg_uint32_t insize);


#endif // _LZG_INTERNAL_H_


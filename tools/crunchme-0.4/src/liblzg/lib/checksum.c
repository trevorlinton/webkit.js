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

#include "internal.h"

/*
* Description:
* This is a very fast 32-bit checksum algorithm. It is essentially a modified
* version of the Adler-32 algorithm, with modulo 65536 instead of modulo 65521
* (i.e. it's closer to Fletcher-32).
*
* This method was chosen over Adler-32 and regular CRC-32 since it is an order
* of magnitude faster than both of them (otherwise the checksum calculation
* takes almost the same time as the decompression routine), while still being
* as robust as Adler-32 (which is used in zlib, for instance).
*
* References:
*     http://en.wikipedia.org/wiki/Adler-32
*     http://en.wikipedia.org/wiki/Fletcher's_checksum
*/

#define CHECKSUM_OP(ptr,a,b) do { \
    a += *ptr++; \
    b += a; \
} while(0)

lzg_uint32_t _LZG_CalcChecksum(const unsigned char *data, lzg_uint32_t size)
{
    unsigned short a = 1, b = 0;
    lzg_uint32_t size8, sizediv8;
    unsigned char *ptr, *end;

    ptr = (unsigned char*)data;

    /* Loop unrolling (modulo 8) */
    sizediv8 = size / 8;
    size8 = sizediv8 * 8;
    end = (unsigned char*)ptr + size8;
    while (ptr < end)
    {
        CHECKSUM_OP(ptr, a, b); CHECKSUM_OP(ptr, a, b);
        CHECKSUM_OP(ptr, a, b); CHECKSUM_OP(ptr, a, b);
        CHECKSUM_OP(ptr, a, b); CHECKSUM_OP(ptr, a, b);
        CHECKSUM_OP(ptr, a, b); CHECKSUM_OP(ptr, a, b);
    }

    /* Finish up remaining data */
    size -= size8;
    while (size--)
    {
        CHECKSUM_OP(ptr, a, b);
    }

    return (((lzg_uint32_t)b) << 16) | a;
}

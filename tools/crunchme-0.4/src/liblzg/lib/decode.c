/* -*- mode: c; tab-width: 4; indent-tabs-mode: nil; -*- */

/*
* This file is part of liblzg.
*
* Copyright (c) 2010-2011 Marcus Geelnard
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


/*-- CONFIGURATION -----------------------------------------------------------*/

/*
* When LZG_UNSAFE is defined, no checks against data corruption will be
* performed. This will speed up the decoder by 10-20%, but may result in invalid
* memory accesses in case of corrupted data.
* DO NOT enable this unless you can trust your data 100%!
*/
/* #define LZG_UNSAFE */


/*-- PRIVATE -----------------------------------------------------------------*/

/* LUT for decoding the copy length parameter */
static const unsigned char _LZG_LENGTH_DECODE_LUT[32] = {
    2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,
    18,19,20,21,22,23,24,25,26,27,28,29,35,48,72,128
};

/* Endian and alignment independent reader for 32-bit integers */
#define _LZG_GetUINT32(in, offs) \
    ((((lzg_uint32_t)in[offs]) << 24) | \
     (((lzg_uint32_t)in[offs+1]) << 16) | \
     (((lzg_uint32_t)in[offs+2]) << 8) | \
     ((lzg_uint32_t)in[offs+3]))

/* This macro is used for out-of-bounds checks, to prevent invalid memory
   accesses. */
#ifndef LZG_UNSAFE
# define CHECK_BOUNDS(expr) if (UNLIKELY(!(expr))) return 0
#else
# define CHECK_BOUNDS(expr)
#endif


/*-- PUBLIC ------------------------------------------------------------------*/

lzg_uint32_t LZG_DecodedSize(const unsigned char *in, lzg_uint32_t insize)
{
    if (insize < 7)
        return 0;

    /* Check magic number */
    if ((in[0] != 'L') || (in[1] != 'Z') || (in[2] != 'G'))
        return 0;

    /* Get output buffer size */
    return _LZG_GetUINT32(in, 3);
}

unsigned int LZG_Decode(const unsigned char *in, lzg_uint32_t insize,
    unsigned char *out, lzg_uint32_t outsize)
{
    unsigned char *src, *inEnd, *dst, *outEnd, *copy, symbol, b, b2;
    unsigned char marker1, marker2, marker3, marker4, method;
    lzg_uint32_t  i, length, offset, encodedSize, decodedSize, checksum;
    char isMarkerSymbolLUT[256];

    /* Does the input buffer at least contain the header? */
    if (insize < LZG_HEADER_SIZE)
        return 0;

    /* Check magic number */
    if ((in[0] != 'L') || (in[1] != 'Z') || (in[2] != 'G'))
        return 0;

    /* Get & check output buffer size */
    decodedSize = _LZG_GetUINT32(in, 3);
    if (outsize < decodedSize)
        return 0;

    /* Get & check input buffer size */
    encodedSize = _LZG_GetUINT32(in, 7);
    if (encodedSize != (insize - LZG_HEADER_SIZE))
        return 0;

    /* Get & check checksum */
#ifndef LZG_UNSAFE
    checksum = _LZG_GetUINT32(in, 11);
    if (_LZG_CalcChecksum(&in[LZG_HEADER_SIZE], encodedSize) != checksum)
        return 0;
#endif

    /* Check which method is used */
    method = in[15];
    if (method > LZG_METHOD_LZG1)
        return 0;

    /* Initialize the byte streams */
    src = (unsigned char *)in;
    inEnd = ((unsigned char *)in) + insize;
    dst = out;
    outEnd = out + outsize;

    /* Skip header information */
    src += LZG_HEADER_SIZE;

    /* Plain copy? */
    if (method == LZG_METHOD_COPY)
    {
        if (decodedSize != encodedSize)
            return 0;

        /* Copy 1:1, input buffer to output buffer */
        for (i = decodedSize - 1; i > 0; --i)
            *dst++ = *src++;

        return decodedSize;
    }

    /* Get marker symbols from the input stream */
    CHECK_BOUNDS((src + 4) <= inEnd);
    marker1 = *src++;
    marker2 = *src++;
    marker3 = *src++;
    marker4 = *src++;

    /* Initialize marker symbol LUT */
    for (i = 0; i < 256; ++i)
        isMarkerSymbolLUT[i] = 0;
    isMarkerSymbolLUT[marker1] = 1;
    isMarkerSymbolLUT[marker2] = 1;
    isMarkerSymbolLUT[marker3] = 1;
    isMarkerSymbolLUT[marker4] = 1;

    /* Main decompression loop */
    while (src < inEnd)
    {
        /* Get the next symbol */
        symbol = *src++;

        /* Marker symbol? */
        if (LIKELY(!isMarkerSymbolLUT[symbol]))
        {
            /* Literal copy */
            CHECK_BOUNDS(dst < outEnd);
            *dst++ = symbol;
        }
        else
        {
            CHECK_BOUNDS(src < inEnd);
            b = *src++;
            if (LIKELY(b))
            {
                /* Decode offset / length parameters */
                if (LIKELY(symbol == marker1))
                {
                    /* Distant copy */
                    CHECK_BOUNDS((src + 2) <= inEnd);
                    length = _LZG_LENGTH_DECODE_LUT[b & 0x1f];
                    b2 = *src++;
                    offset = (((unsigned int)(b & 0xe0)) << 11) |
                              (((unsigned int)b2) << 8) |
                              (*src++);
                    offset += 2056;
                }
                else if (LIKELY(symbol == marker2))
                {
                    /* Medium copy */
                    CHECK_BOUNDS(src < inEnd);
                    length = _LZG_LENGTH_DECODE_LUT[b & 0x1f];
                    b2 = *src++;
                    offset = (((unsigned int)(b & 0xe0)) << 3) | b2;
                    offset += 8;
                }
                else if (LIKELY(symbol == marker3))
                {
                    /* Short copy */
                    length = (b >> 6) + 3;
                    offset = (b & 0x3f) + 8;
                }
                else
                {
                    /* Near copy (including RLE) */
                    length = _LZG_LENGTH_DECODE_LUT[b & 0x1f];
                    offset = (b >> 5) + 1;
                }

                /* Copy corresponding data from history window */
                copy = dst - offset;
                CHECK_BOUNDS((copy >= out) && ((dst + length) <= outEnd));

                /* Note: We use loop unrolling to improve the speed */
                switch (length)
                {
                    default:
                        for (i = 29; i < length; ++i)
                            *dst++ = *copy++;
                    case 29: *dst++ = *copy++; case 28: *dst++ = *copy++;
                    case 27: *dst++ = *copy++; case 26: *dst++ = *copy++;
                    case 25: *dst++ = *copy++; case 24: *dst++ = *copy++;
                    case 23: *dst++ = *copy++; case 22: *dst++ = *copy++;
                    case 21: *dst++ = *copy++; case 20: *dst++ = *copy++;
                    case 19: *dst++ = *copy++; case 18: *dst++ = *copy++;
                    case 17: *dst++ = *copy++; case 16: *dst++ = *copy++;
                    case 15: *dst++ = *copy++; case 14: *dst++ = *copy++;
                    case 13: *dst++ = *copy++; case 12: *dst++ = *copy++;
                    case 11: *dst++ = *copy++; case 10: *dst++ = *copy++;
                    case 9:  *dst++ = *copy++; case 8:  *dst++ = *copy++;
                    case 7:  *dst++ = *copy++; case 6:  *dst++ = *copy++;
                    case 5:  *dst++ = *copy++; case 4:  *dst++ = *copy++;
                    case 3:  *dst++ = *copy++; case 2:  *dst++ = *copy++;
                    case 1:  *dst++ = *copy++;
                }
            }
            else
            {
                /* Single occurance of a marker symbol... */
                CHECK_BOUNDS(dst < outEnd);
                *dst++ = symbol;
            }
        }
    }

    /* Did we get the right number of output bytes? */
    if ((unsigned int)(dst - out) != decodedSize)
        return 0;

    /* Return size of decompressed buffer */
    return decodedSize;
}

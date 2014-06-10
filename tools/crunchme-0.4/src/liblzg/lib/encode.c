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

#include <stdlib.h>
#include <string.h>
#include "internal.h"

/*
    Compressed data format
    ----------------------

        M1 = marker symbol 1, "Distant copy"
        M2 = marker symbol 2, "Medium copy"
        M3 = marker symbol 3, "Short copy"
        M4 = marker symbol 4, "Near copy (incl. RLE)"
        [x] = one byte
        {x} = one 32-bit unsigned word (big endian)
        %xxxxxxxx = 8 bits

    Data header:
        ["L"] ["Z"] ["G"]
        {decoded size}
        {encoded size}
        {checksum}
        [method]

    LZG1 data stream start:
        [M1] [M2] [M3] [M4]

    Single occurance of a symbol:
        [x]      => [x]     (x != M1,M2,M3, M4)
        [M1] [0] => [M1]
        [M2] [0] => [M2]
        [M3] [0] => [M3]
        [M4] [0] => [M4]

    Copy from back buffer (Length bytes, Offset bytes back):
        [M1] [%ooolllll] [%mmmmmmmm] [%nnnnnnnn]
            Length' = %000lllll + 2                       (3-33)
            Offset  = %00000ooo mmmmmmmm nnnnnnnn + 2056  (2056-526341)

        [M2] [%ooolllll] [%mmmmmmmm]
            Length' = %000lllll + 2           (3-33)
            Offset  = %00000ooo mmmmmmmm + 8  (8-2055)

        [M3] [%lloooooo]
            Length' = %000000ll + 3  (3-6)
            Offset  = %00oooooo + 8  (9-71)

        [M4] [%ooolllll]
            Length' = %000lllll + 2  (3-33)
            Offset  = %00000ooo + 1  (1-8)

    Length encoding:
        Length' = 33  =>  Length = 128
        Length' = 32  =>  Length = 72
        Length' = 31  =>  Length = 48
        Length' = 30  =>  Length = 35
        Length' < 30  =>  Length = Length'
*/


/*-- PRIVATE -----------------------------------------------------------------*/

/* Limits */
#define _LZG_MAX_RUN_LENGTH 128

/* LUT for encoding the copy length parameter */
static const unsigned char _LZG_LENGTH_ENCODE_LUT[129] = {
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,           /* 0 - 15 */
    16,17,18,19,20,21,22,23,24,25,26,27,28,29,29,29, /* 16 - 31 */
    29,29,29,30,30,30,30,30,30,30,30,30,30,30,30,30, /* 32 - 47 */
    31,31,31,31,31,31,31,31,31,31,31,31,31,31,31,31, /* 48 - 63 */
    31,31,31,31,31,31,31,31,32,32,32,32,32,32,32,32, /* 64 - 79 */
    32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32, /* 80 - 95 */
    32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32, /* 96 - 111 */
    32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32, /* 112 - 127 */
    33                                               /* 128 */
};

/* LUT for quantizing the copy length parameter */
static const unsigned char _LZG_LENGTH_QUANT_LUT[129] = {
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,           /* 0 - 15 */
    16,17,18,19,20,21,22,23,24,25,26,27,28,29,29,29, /* 16 - 31 */
    29,29,29,35,35,35,35,35,35,35,35,35,35,35,35,35, /* 32 - 47 */
    48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48, /* 48 - 63 */
    48,48,48,48,48,48,48,48,72,72,72,72,72,72,72,72, /* 64 - 79 */
    72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72, /* 80 - 95 */
    72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72, /* 96 - 111 */
    72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72, /* 112 - 127 */
    128                                              /* 128 */
};

/* Compression tuning parameters (used for specifying different compression
   levels) */
typedef struct {
    lzg_uint32_t window;        /* Size of sliding window */
    lzg_uint32_t maxMatches;    /* Maximum number of matches to try */
    lzg_uint32_t goodLength;    /* Don't try harder if we find this length */
} tune_params_t;

/* Tuning parameters as a function of compression level.
   NOTE: The window size HAS to be a power of 2.
   NOTE2: The values were chosen to make a reasonable balance. */
static const tune_params_t _LZG_TUNING_PARAMETERS[9] = {
    {2048, 30, 35},         /* level = 1 */
    {4096, 40, 48},         /* level = 2 */
    {8192, 50, 72},         /* level = 3 */
    {16384, 60, 72},        /* level = 4 */
    {32768, 70, 72},        /* level = 5 */
    {65536, 80, 72},        /* level = 6 */
    {131072, 150, 128},     /* level = 7 */
    {262144, 250, 128},     /* level = 8 */
    {524288, 524288, 128}   /* level = 9 (very slow - best possible) */
};

static void _LZG_SetHeader(unsigned char *out, lzg_header *hdr)
{
    /* Magic number */
    out[0] = 'L';
    out[1] = 'Z';
    out[2] = 'G';

    /* Decoded buffer size */
    out[3] = hdr->decodedSize >> 24;
    out[4] = hdr->decodedSize >> 16;
    out[5] = hdr->decodedSize >> 8;
    out[6] = hdr->decodedSize;

    /* Encoded buffer size */
    out[7] = hdr->encodedSize >> 24;
    out[8] = hdr->encodedSize >> 16;
    out[9] = hdr->encodedSize >> 8;
    out[10] = hdr->encodedSize;

    /* Checksum */
    hdr->checksum = _LZG_CalcChecksum(&out[LZG_HEADER_SIZE], hdr->encodedSize);
    out[11] = hdr->checksum >> 24;
    out[12] = hdr->checksum >> 16;
    out[13] = hdr->checksum >> 8;
    out[14] = hdr->checksum;

    /* Method */
    out[15] = hdr->method;
}

typedef struct _hist_rec {
    lzg_int32_t count;
    int         symbol;
    lzg_bool_t  taken;
} hist_rec;

static int hist_rec_compare(const void *p1, const void *p2)
{
    hist_rec *h1 = (hist_rec*)p1;
    hist_rec *h2 = (hist_rec*)p2;
    if (h1->count != h2->count)
      return h1->count - h2->count;
    return h1->symbol - h2->symbol;
}

static int _LZG_DetermineMarkers(const unsigned char *in, lzg_uint32_t insize,
    unsigned char *leastCommon1, unsigned char *leastCommon2,
    unsigned char *leastCommon3, unsigned char *leastCommon4)
{
    hist_rec *hist;
    unsigned int i;
    unsigned char *src;

    /* Allocate memory for histogram */
    hist = (hist_rec*) malloc(sizeof(hist_rec) * 256);
    if (!hist)
        return FALSE;

    /* Build histogram, O(n) */
    for (i = 0; i < 256; ++i)
    {
        hist[i].count = 0;
        hist[i].symbol = i;
        hist[i].taken = LZG_FALSE;
    }
    src = (unsigned char *) in;
    for (i = 0; i < insize; ++i)
        hist[*src++].count++;

    /* Sort histogram */
    qsort((void *)hist, 256, sizeof(hist_rec), hist_rec_compare);

    /* Return the least common symbols */
    *leastCommon1 = (unsigned char) hist[0].symbol;
    *leastCommon2 = (unsigned char) hist[1].symbol;
    *leastCommon3 = (unsigned char) hist[2].symbol;
    *leastCommon4 = (unsigned char) hist[3].symbol;

    /* Free memory for histogram */
    free(hist);

    return TRUE;
}

typedef struct {
    unsigned char **tab;
    unsigned char **last;
    tune_params_t params;
    lzg_uint32_t windowMask;
    lzg_uint32_t size;
    lzg_uint32_t preMatch;
    lzg_bool_t  fast;
} search_accel_t;

static search_accel_t* _LZG_SearchAccel_Create(const tune_params_t* params,
    lzg_uint32_t size, lzg_bool_t fast)
{
    search_accel_t *self;

    /* Allocate memory for the sarch tab object */
    self = malloc(sizeof(search_accel_t));
    if (!self)
        return (search_accel_t*) 0;

    /* Allocate memory for the table */
    self->tab = calloc(params->window, sizeof(unsigned char *));
    if (!self->tab)
    {
        free(self);
        return (search_accel_t*) 0;
    }

    /* Allocate memory for the "last symbol occurance" array */
    self->last = calloc(fast ? 16777216 : 65536, sizeof(unsigned char *));
    if (!self->last)
    {
        free(self->tab);
        free(self);
        return (search_accel_t*) 0;
    }

    /* Init parameters */
    self->params = *params;
    self->windowMask = params->window - 1; /* NOTE: window must be a power of 2 */
    self->size = size;
    self->preMatch = fast ? 3 : 2;
    self->fast = fast;

    return self;
}

static void _LZG_SearchAccel_Destroy(search_accel_t *self)
{
    if (!self)
        return;

    free(self->last);
    free(self->tab);
    free(self);
}

static void _LZG_UpdateLastPos(search_accel_t *sa,
    const unsigned char *first, unsigned char *pos)
{
    lzg_uint32_t lIdx;
    if (UNLIKELY(((lzg_uint32_t)(pos - first) + 2) >= sa->size)) return;
    if (LIKELY(sa->fast))
        lIdx = (((lzg_uint32_t)pos[0]) << 16) |
               (((lzg_uint32_t)pos[1]) << 8) |
               ((lzg_uint32_t)pos[2]);
    else
        lIdx = (((lzg_uint32_t)pos[0]) << 8) |
               ((lzg_uint32_t)pos[1]);
    sa->tab[(pos - first) & sa->windowMask] = sa->last[lIdx];
    sa->last[lIdx] = pos;
}

static lzg_uint32_t _LZG_FindMatch(search_accel_t *sa, const unsigned char *first,
  const unsigned char *end, const unsigned char *pos, lzg_uint32_t symbolCost,
  lzg_uint32_t *offset)
{
    lzg_uint32_t length, bestLength = 2, dist, preMatch, maxMatches;
    int win, bestWin = 0;
    unsigned char *pos2, *cmp1, *cmp2, *minPos, *endStr;

    *offset = 0;

    /* Minimum search position */
    if ((lzg_uint32_t)(pos - first) >= sa->params.window)
        minPos = (unsigned char*)(pos - sa->params.window);
    else
        minPos = (unsigned char*)first;

    /* Search string end */
    endStr = (unsigned char*)(pos + _LZG_MAX_RUN_LENGTH);
    if (UNLIKELY(endStr > end))
      endStr = (unsigned char*)end;

    /* Previous search position */
    pos2 = sa->tab[(pos - first) & sa->windowMask];

    /* Pre-matched by the acceleration structure */
    preMatch = sa->preMatch;

    /* Main search loop */
    maxMatches = sa->params.maxMatches;
    while (pos2 && (pos2 > minPos) && (maxMatches--))
    {
        /* If we don't have a match at bestLength, don't even bother... */
        if (UNLIKELY(pos[bestLength] == pos2[bestLength]))
        {
            /* Calculate maximum match length for this offset */
            cmp1 = (unsigned char*)pos + preMatch;
            cmp2 = pos2 + preMatch;
            while (cmp1 < endStr && *cmp1 == *cmp2)
            {
                ++cmp1;
                ++cmp2;
            }
            length = cmp1 - pos;

            /* Quantize length */
            length = _LZG_LENGTH_QUANT_LUT[length];

            /* Improvement in match length? */
            if (UNLIKELY(length > bestLength))
            {
                dist = (lzg_uint32_t)(pos - pos2);

                /* Get actual compression win for this match */
                if (UNLIKELY((dist <= 8) || ((length <= 6) && (dist <= 71))))
                    win = length + symbolCost - 3;
                else
                {
                    win = length + symbolCost - 4;
                    if (dist >= 2056) --win;
                }

                /* Best so far? */
                if (LIKELY(win > bestWin))
                {
                    bestWin = win;
                    *offset = dist;
                    bestLength = length;

                    /* Did we find a match that was good enough, or did we reach
                       the end of the buffer (no longer match is possible)? */
                    if (UNLIKELY((length >= sa->params.goodLength) ||
                                 (cmp1 >= endStr)))
                        break;
                }
            }
        }

        /* Previous search position */
        pos2 = sa->tab[(pos2 - first) & sa->windowMask];
    }

    /* Did we get a match that would actually compress? */
    if (bestWin > 0)
        return bestLength;
    else
        return 0;
}


/*-- PUBLIC ------------------------------------------------------------------*/

lzg_uint32_t LZG_MaxEncodedSize(lzg_uint32_t insize)
{
    return LZG_HEADER_SIZE + insize;
}

void LZG_InitEncoderConfig(lzg_encoder_config_t *config)
{
    /* Set the default values */
    config->level = LZG_LEVEL_DEFAULT;
    config->fast = LZG_TRUE;
    config->progressfun = NULL;
    config->userdata = NULL;
}

lzg_uint32_t LZG_Encode(const unsigned char *in, lzg_uint32_t insize,
    unsigned char *out, lzg_uint32_t outsize, lzg_encoder_config_t *config)
{
    unsigned char *src, *inEnd, *dst, *outEnd, symbol;
    unsigned char marker1, marker2, marker3, marker4;
    const tune_params_t *params;
    lzg_uint32_t lengthEnc, length, offset = 0, symbolCost, i;
    int level, progress, oldProgress = -1;
    char isMarkerSymbol, isMarkerSymbolLUT[255];

    search_accel_t *sa = (search_accel_t*) 0;
    lzg_encoder_config_t defaultConfig;
    lzg_header hdr;

    /* Check arguments */
    if ((!in) || (!out) || (outsize < (LZG_HEADER_SIZE + insize)))
        goto fail;

    /* Use default configuration? */
    if (!config)
    {
        LZG_InitEncoderConfig(&defaultConfig);
        config = &defaultConfig;
    }

    /* Clamp the compression level to [1, 9] */
    if (config->level < 1)
        level = 1;
    else if (config->level > 9)
        level = 9;
    else
        level = config->level;

    /* Get the compression tuning parameters (window size etc) */
    params = &_LZG_TUNING_PARAMETERS[level - 1];

    /* Calculate histogram and find optimal marker symbols */
    if (!_LZG_DetermineMarkers(in, insize, &marker1, &marker2, &marker3,
                               &marker4))
        goto fail;

    /* Initialize search accelerator */
    sa = _LZG_SearchAccel_Create(params, insize, config->fast);
    if (!sa)
        goto fail;

    /* Initialize the byte streams */
    src = (unsigned char *)in;
    inEnd = ((unsigned char *)in) + insize;
    dst = out + LZG_HEADER_SIZE;
    outEnd = out + outsize;

    /* Set marker symbols */
    if ((dst + 4) > outEnd) goto overflow;
    *dst++ = marker1;
    *dst++ = marker2;
    *dst++ = marker3;
    *dst++ = marker4;

    /* Initialize marker symbol LUT */
    for (i = 0; i < 256; ++i)
        isMarkerSymbolLUT[i] = 0;
    isMarkerSymbolLUT[marker1] = 1;
    isMarkerSymbolLUT[marker2] = 1;
    isMarkerSymbolLUT[marker3] = 1;
    isMarkerSymbolLUT[marker4] = 1;

    /* Main compression loop */
    while (src < inEnd)
    {
        /* Report progress? */
        if (UNLIKELY(config->progressfun))
        {
            progress = (100 * (src - in)) / insize;
            if (UNLIKELY(progress != oldProgress))
            {
                config->progressfun(progress, config->userdata);
                oldProgress = progress;
            }
        }

        /* Get current symbol (don't increment, yet) */
        symbol = *src;

        /* Is this a marker symbol? */
        isMarkerSymbol = isMarkerSymbolLUT[symbol];

        /* What's the cost for this symbol if we do not compress */
        symbolCost = isMarkerSymbol ? 2 : 1;

        /* Update search accelerator */
        _LZG_UpdateLastPos(sa, in, src);

        /* Find best history match for this position in the input buffer */
        length = _LZG_FindMatch(sa, in, inEnd, src, symbolCost, &offset);

        if (UNLIKELY(length > 0))
        {
            if (UNLIKELY((length <= 6) && (offset >= 9) && (offset <= 71)))
            {
                /* Short copy (emit 2 bytes) */
                if (UNLIKELY((dst + 2) > outEnd)) goto overflow;
                *dst++ = marker3;
                *dst++ = ((length - 3) << 6) | (offset - 8);
            }
            else if (UNLIKELY(offset <= 8))
            {
                /* Near copy (emit 2 bytes) */
                if (UNLIKELY((dst + 2) > outEnd)) goto overflow;
                lengthEnc = _LZG_LENGTH_ENCODE_LUT[length];
                *dst++ = marker4;
                *dst++ = ((offset - 1) << 5) | (lengthEnc - 2);
            }
            else if (LIKELY(offset >= 2056))
            {
                /* Generic copy (emit 4 bytes) */
                if (UNLIKELY((dst + 4) > outEnd)) goto overflow;
                lengthEnc = _LZG_LENGTH_ENCODE_LUT[length];
                offset -= 2056;
                *dst++ = marker1;
                *dst++ = ((offset >> 11) & 0xe0) | (lengthEnc - 2);
                *dst++ = (offset >> 8);
                *dst++ = offset;
            }
            else
            {
                /* Generic copy (emit 3 bytes) */
                if (UNLIKELY((dst + 3) > outEnd)) goto overflow;
                lengthEnc = _LZG_LENGTH_ENCODE_LUT[length];
                offset -= 8;
                *dst++ = marker2;
                *dst++ = ((offset >> 3) & 0xe0) | (lengthEnc - 2);
                *dst++ = offset;
            }

            /* Skip ahead (and update search accelerator)... */
            for (i = 1; i < length; ++i)
                _LZG_UpdateLastPos(sa, in, src + i);
            src += length;
        }
        else
        {
            /* Plain copy */
            if (UNLIKELY(dst >= outEnd)) goto overflow;
            *dst++ = symbol;
            ++src;

            /* Was this symbol equal to any of the markers? */
            if (UNLIKELY(isMarkerSymbol))
            {
                if (UNLIKELY(dst >= outEnd)) goto overflow;
                *dst++ = 0;
            }
        }
    }

    /* Report progress? (we're done now) */
    if (config->progressfun)
        config->progressfun(100, config->userdata);

    /* Set header data */
    hdr.method = LZG_METHOD_LZG1;
    hdr.encodedSize = (dst - out) - LZG_HEADER_SIZE;
    hdr.decodedSize = insize;
    _LZG_SetHeader(out, &hdr);

    /* Free resources */
    _LZG_SearchAccel_Destroy(sa);

    /* Return size of compressed buffer */
    return LZG_HEADER_SIZE + hdr.encodedSize;


overflow:
    /* Exit routine for output buffer overflow: revert to 1:1 copy */
    memcpy(out + LZG_HEADER_SIZE, in, insize);

    /* Report progress? (we're done now) */
    if (config->progressfun)
        config->progressfun(100, config->userdata);

    /* Set header data */
    hdr.method = LZG_METHOD_COPY;
    hdr.encodedSize = insize;
    hdr.decodedSize = insize;
    _LZG_SetHeader(out, &hdr);

    /* Free resources */
    _LZG_SearchAccel_Destroy(sa);

    /* Return size of compressed buffer */
    return LZG_HEADER_SIZE + hdr.encodedSize;


fail:
    /* Exit routine for failure situations */
    if (sa)
        _LZG_SearchAccel_Destroy(sa);
    return 0;
}


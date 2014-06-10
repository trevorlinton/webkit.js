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

#ifndef _LIBLZG_H_
#define _LIBLZG_H_

#ifdef __cplusplus
extern "C" {
#endif

#define LZG_VERSION "1.0.6"    /**< @brief LZG library version string */
#define LZG_VERNUM  0x01000006 /**< @brief LZG library version number (strictly
                                    incremental) */
#define LZG_VER_MAJOR    1     /**< @brief LZG library major version */
#define LZG_VER_MINOR    0     /**< @brief LZG library minor version */
#define LZG_VER_REVISION 6     /**< @brief LZG library revision */

/**
* @file
* @mainpage
*
* @section intro_sec Introduction
*
* liblzg is a minimal implementation of an LZ77 class compression library. The
* main characteristic of the library is that the decoding routine is very
* simple, fast and requires no extra memory (except for the encoded and decoded
* data buffers).
*
* @section funcs_sec Functions
*
* @li LZG_MaxEncodedSize() - Determine the maximum size of the encoded data for
*                            a given uncompressed buffer (worst case).
* @li LZG_InitEncoderConfig() - Set default encoder configuration.
* @li LZG_Encode() - Encode uncompressed data as LZG coded data.
*
* @li LZG_DecodedSize() - Determine the size of the decoded data for a given
*                         LZG coded buffer.
* @li LZG_Decode() - Decode LZG coded data.
*
* @li LZG_Version() - Get the version of the LZG library.
* @li LZG_VersionString() - Get the version of the LZG library.
*
* @section compr_sec Compression
* Here is a simple example of compressing an uncompressed data buffer (given
* as buf/bufSize).
*
* @code
*     unsigned char *encBuf;
*     lzg_uint32_t encSize, maxEncSize;
*
*     // Determine maximum size of compressed data
*     maxEncSize = LZG_MaxEncodedSize(bufSize);
*
*     // Allocate memory for the compressed data
*     encBuf = (unsigned char*) malloc(maxEncSize);
*     if (encBuf)
*     {
*         // Compress
*         encSize = LZG_Encode(buf, bufSize, encBuf, maxEncSize, NULL);
*         if (encSize)
*         {
*             // Compressed data is now in encBuf, use it...
*             // ...
*         }
*         else
*             fprintf(stderr, "Compression failed!\n");
*
*         // Free memory when we're done with the compressed data
*         free(encBuf);
*     }
*     else
*         fprintf(stderr, "Out of memory!\n");
* @endcode
*
* @section decompr_sec Decompression
* Here is a simple example of decompressing a compressed data buffer (given
* as buf/bufSize).
*
* @code
*     unsigned char *decBuf;
*     lzg_uint32_t decSize;
*
*     // Determine size of decompressed data
*     decSize = LZG_DecodedSize(buf, bufSize);
*     if (decSize)
*     {
*         // Allocate memory for the decompressed data
*         decBuf = (unsigned char*) malloc(decSize);
*         if (decBuf)
*         {
*             // Decompress
*             decSize = LZG_Decode(buf, bufSize, decBuf, decSize);
*             if (decSize)
*             {
*                 // Uncompressed data is now in decBuf, use it...
*                 // ...
*             }
*             else
*                 printf("Decompression failed (bad data)!\n");
*
*             // Free memory when we're done with the decompressed data
*             free(decBuf);
*         }
*         else
*             printf("Out of memory!\n");
*     }
*     else
*         printf("Bad input data!\n");
* @endcode
*/

/* Basic types */
typedef int          lzg_bool_t;   /**< @brief Boolean (@ref LZG_TRUE/@ref LZG_FALSE) */
typedef int          lzg_int32_t;  /**< @brief Signed 32-bit integer */
typedef unsigned int lzg_uint32_t; /**< @brief Unsigned 32-bit integer */

#define LZG_FALSE 0 /**< @brief Boolean FALSE (see @ref lzg_bool_t) */
#define LZG_TRUE  1 /**< @brief Boolean TRUE (see @ref lzg_bool_t) */

/* Compression levels */
#define LZG_LEVEL_1 1  /**< @brief Lowest/fastest compression level */
#define LZG_LEVEL_2 2  /**< @brief Compression level 2 */
#define LZG_LEVEL_3 3  /**< @brief Compression level 3 */
#define LZG_LEVEL_4 4  /**< @brief Compression level 4 */
#define LZG_LEVEL_5 5  /**< @brief Medium compression level */
#define LZG_LEVEL_6 6  /**< @brief Compression level 6 */
#define LZG_LEVEL_7 7  /**< @brief Compression level 7 */
#define LZG_LEVEL_8 8  /**< @brief Compression level 8 */
#define LZG_LEVEL_9 9  /**< @brief Best/slowest compression level */

/** @brief Default compression level */
#define LZG_LEVEL_DEFAULT LZG_LEVEL_5

/**
* Progress callback function.
* @param[in] progress The current progress (0-100).
* @param[in] userdata User supplied data pointer.
*/
typedef void (*LZGPROGRESSFUN)(lzg_int32_t progress, void *userdata);

/** @brief LZG compression configuration parameters.
*
* This structure is used for passing configuration options to the LZG_Encode()
* function. Initialize this structure to default values with
* @ref LZG_InitEncoderConfig().
*/
typedef struct {
    /** @brief Compression level (1-9).

        For convenience, you can use the predefined constants
        @ref LZG_LEVEL_1 (fast) to @ref LZG_LEVEL_9 (slow), or
        @ref LZG_LEVEL_DEFAULT.

        Default value: LZG_LEVEL_DEFAULT */
    lzg_int32_t level;

    /** @brief Use fast method (LZG_FALSE or LZG_TRUE).

        Boolean flag that specifies whether or not to use a faster encoding
        acceleration data structure, which requires more memory. When using the
        fast method, the compression ratio is usually slightly improved.

        Default value: LZG_TRUE */
    lzg_bool_t fast;

    /** @brief Encoding progress callback function.

        This function will be called during compression to report progress
        back to the caller (set this to NULL to disable progress
        callback).

        Default value: NULL */
    LZGPROGRESSFUN progressfun;

    /** @brief User data pointer for the progress callback function.

        A user defined data pointer that can point to anything that the
        progress callback function may need, such as an object reference
        (this can set to NULL if the callback function does not need it).

        Default value: NULL */
    void *userdata;
} lzg_encoder_config_t;


/**
* Determine the maximum size of the encoded data for a given uncompressed
* buffer.
* @param[in] insize Size of the uncompressed buffer (number of bytes).
* @return Worst case (maximum) size of the encoded data.
*/
lzg_uint32_t LZG_MaxEncodedSize(lzg_uint32_t insize);

/**
* Initialize an encoder configuration object.
* @param[out] config Configuration object.
*/
void LZG_InitEncoderConfig(lzg_encoder_config_t *config);

/**
* Encode uncompressed data using the LZG coder (i.e. compress the data).
* @param[in]  in Input (uncompressed) buffer.
* @param[in]  insize Size of the input buffer (number of bytes).
* @param[out] out Output (compressed) buffer.
* @param[in]  outsize Size of the output buffer (number of bytes).
* @param[in]  config Compression configuration (if set to NULL, default encoder
*             configuration parameters are used).
* @return The size of the encoded data, or zero if the function failed
*         (e.g. if the end of the output buffer was reached before the
*         entire input buffer was encoded).
* @note For the slow method (config->fast = 0), the memory requirement during
* compression is 136 KB (LZG_LEVEL_1) to 2 MB (LZG_LEVEL_9). For the fast
* method (config->fast = 1), the memory requirement is 64 MB (LZG_LEVEL_1) to
* 66 MB (LZG_LEVEL_9). Also note that these figures are doubled on 64-bit
* systems.
*/
lzg_uint32_t LZG_Encode(const unsigned char *in, lzg_uint32_t insize,
                        unsigned char *out, lzg_uint32_t outsize,
                        lzg_encoder_config_t *config);


/**
* Determine the size of the decoded data for a given LZG coded buffer.
* @param[in] in Input (compressed) buffer.
* @param[in] insize Size of the input buffer (number of bytes). This does
*            not have to be the size of the entire compressed data, but
*            it has to be at least 7 bytes (the first few bytes of the
*            header, including the decompression size).
* @return The size of the decoded data, or zero if the function failed
*         (e.g. if the magic header ID could not be found).
*/
lzg_uint32_t LZG_DecodedSize(const unsigned char *in, lzg_uint32_t insize);


/**
* Decode LZG coded data.
* @param[in]  in Input (compressed) buffer.
* @param[in]  insize Size of the input buffer (number of bytes).
* @param[out] out Output (uncompressed) buffer.
* @param[in]  outsize Size of the output buffer (number of bytes).
* @return The size of the decoded data, or zero if the function failed
*         (e.g. if the end of the output buffer was reached before the
*         entire input buffer was decoded).
*/
lzg_uint32_t LZG_Decode(const unsigned char *in, lzg_uint32_t insize,
                        unsigned char *out, lzg_uint32_t outsize);


/**
* Get the version of the LZG library.
* @return The version of the LZG library, on the same format as
*         @ref LZG_VERNUM.
*/
lzg_uint32_t LZG_Version(void);


/**
* Get the version string of the LZG library.
* @return The version of the LZG library, on the same format as
*         @ref LZG_VERSION.
*/
const char* LZG_VersionString(void);

#ifdef __cplusplus
}
#endif

#endif // _LIBLZG_H_

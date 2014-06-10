/* -*- mode: c++; tab-width: 4; indent-tabs-mode: nil; -*-
* Copyright (c) 2011 Marcus Geelnard
*
* This file is part of CrunchMe.
*
* CrunchMe is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* CrunchMe is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with CrunchMe.  If not, see <http://www.gnu.org/licenses/>.
*/

#ifndef _CRUNCHME_PNG_H_
#define _CRUNCHME_PNG_H_

class png {
    private:
        unsigned int mCRCTable[256];

        // Calculate the CRC32 for a data buffer
        unsigned int calcCRC32(const char *data, unsigned int size);

        // Append a new CHUNK to the buffer
        unsigned int appendChunk(char *in, unsigned int inSize, char *out,
                                 const char *chunkName);

        // Compress a buffer using the zlib DEFLATE method
        unsigned int deflate(const char *in, unsigned int inSize, char *out,
                             unsigned int outSize);

    public:
        // Constructor
        png();

        // Compress a data buffer as a PNG image
        unsigned int compress(const char *in, unsigned int inSize,
                              char *out, unsigned int outSize);

        // Return the maximum compressed size for a given data buffer size
        static unsigned int maxCompressedSize(unsigned int size);
};

#endif // _CRUNCHME_PNG_H_


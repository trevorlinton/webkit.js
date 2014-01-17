/*
 * Copyright (c) 2013, Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#include "config.h"
#include "core/platform/graphics/skia/SkiaSharedBufferStream.h"

#include "third_party/skia/include/core/SkStream.h"
#include "core/platform/SharedBuffer.h"
#include <algorithm>
#include <cstring>

namespace WebCore {

size_t SkiaSharedBufferStream::read(void* buffer, size_t bytesRequested)
{
    const size_t bytesLeft = m_buffer->size() - m_offset;
    const size_t bytesToConsume = std::min(bytesLeft, bytesRequested);

    if (buffer) {
        char* byteBuffer = reinterpret_cast<char*>(buffer);
        unsigned byteOffset = m_offset;
        unsigned bytesLeftToConsume = bytesToConsume;
        while (bytesLeftToConsume > 0) {
            const char* segment;
            unsigned bytesInSegment = m_buffer->getSomeData(segment, byteOffset);
            if (!bytesInSegment) {
                unsigned bytesRead = bytesToConsume - bytesLeftToConsume;
                m_offset += bytesRead;
                return bytesRead;
            }
            unsigned bytesToCopy = std::min(bytesInSegment, bytesLeftToConsume);
            std::memcpy(byteBuffer, segment, bytesToCopy);
            bytesLeftToConsume -= bytesToCopy;
            byteBuffer += bytesToCopy;
            byteOffset += bytesToCopy;
        }
    }
    m_offset += bytesToConsume;
    return bytesToConsume;
}

bool SkiaSharedBufferStream::isAtEnd() const
{
    return this->getLength() == m_offset;
}

bool SkiaSharedBufferStream::rewind()
{
    m_offset = 0;
    return true;
}

SkiaSharedBufferStream* SkiaSharedBufferStream::duplicate() const
{
    return new SkiaSharedBufferStream(m_buffer);
}

size_t SkiaSharedBufferStream::getPosition() const
{
    return m_offset;
}

bool SkiaSharedBufferStream::seek(size_t position)
{
    m_offset = std::min(position, static_cast<size_t>(m_buffer->size()));
    return true;
}

bool SkiaSharedBufferStream::move(long offset)
{
    return this->seek(m_offset + offset);
}

SkiaSharedBufferStream* SkiaSharedBufferStream::fork() const
{
    SkiaSharedBufferStream* that = this->duplicate();
    that->m_offset = this->m_offset;
    return that;
}

size_t SkiaSharedBufferStream::getLength() const
{
    return m_buffer->size();
}

const void* SkiaSharedBufferStream::getMemoryBase()
{
    const char* segment;
    unsigned bytesInSegment = m_buffer->getSomeData(segment);
    return (bytesInSegment != m_buffer->size()) ? 0 : segment;
}

}

/*
 * Copyright (c) 2006, 2007, 2008, Google Inc. All rights reserved.
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
#if PLATFORM(JS)
#include "FontPlatformData.h"
#include "DebuggerJS.h"
#include "FontCache.h"
#include "HarfBuzzFace.h"
#include "Platform.h"
#include "wtf/text/WTFString.h"
#include "FontPlatformDataSkia.h"
#else
#include "core/platform/graphics/FontPlatformData.h"
#include "core/platform/graphics/FontCache.h"
#endif
#include "SkEndian.h"
#include "SkTypeface.h"

namespace WebCore {

		FontPlatformData::FontPlatformData(WTF::HashTableDeletedValueType)
    : m_textSize(0)
    , m_syntheticBold(false)
    , m_syntheticItalic(false)
    , m_orientation(Horizontal)
    , m_isHashTableDeletedValue(true)
		{
		}

		FontPlatformData::FontPlatformData()
    : m_textSize(0)
    , m_syntheticBold(false)
    , m_syntheticItalic(false)
    , m_orientation(Horizontal)
    , m_isHashTableDeletedValue(false)
#if OS(WINDOWS)
    , m_paintTextFlags(0)
    , m_minSizeForAntiAlias(0)
#endif
		{
		}

		FontPlatformData::FontPlatformData(float textSize, bool syntheticBold, bool syntheticItalic)
    : m_textSize(textSize)
    , m_syntheticBold(syntheticBold)
    , m_syntheticItalic(syntheticItalic)
    , m_orientation(Horizontal)
    , m_isHashTableDeletedValue(false)
#if OS(WINDOWS)
    , m_paintTextFlags(0)
    , m_minSizeForAntiAlias(0)
#endif
		{
		}

		FontPlatformData::FontPlatformData(const FontPlatformData& src)
    : m_typeface(src.m_typeface)
#if !OS(WINDOWS)
    , m_family(src.m_family)
#endif
    , m_textSize(src.m_textSize)
    , m_syntheticBold(src.m_syntheticBold)
    , m_syntheticItalic(src.m_syntheticItalic)
    , m_orientation(src.m_orientation)
//    , m_style(src.m_style)
    , m_harfBuzzFace(nullptr)
    , m_isHashTableDeletedValue(false)
#if OS(WINDOWS)
    , m_paintTextFlags(0)
    , m_minSizeForAntiAlias(0)
#endif
		{
		}

		FontPlatformData::FontPlatformData(PassRefPtr<SkTypeface> tf, const char* family, float textSize, bool syntheticBold, bool syntheticItalic, FontOrientation orientation, bool subpixelTextPosition)
    : m_typeface(tf)
#if !OS(WINDOWS)
    , m_family(family)
#endif
    , m_textSize(textSize)
    , m_syntheticBold(syntheticBold)
    , m_syntheticItalic(syntheticItalic)
    , m_orientation(orientation)
    , m_isHashTableDeletedValue(false)
		{
			querySystemForRenderStyle(subpixelTextPosition);
		}

		FontPlatformData::FontPlatformData(const FontPlatformData& src, float textSize)
    : m_typeface(src.m_typeface)
#if !OS(WINDOWS)
    , m_family(src.m_family)
#endif
    , m_textSize(textSize)
    , m_syntheticBold(src.m_syntheticBold)
    , m_syntheticItalic(src.m_syntheticItalic)
    , m_orientation(src.m_orientation)
    , m_harfBuzzFace(nullptr)
    , m_isHashTableDeletedValue(false)
#if OS(WINDOWS)
    , m_paintTextFlags(0)
    , m_minSizeForAntiAlias(0)
#endif
		{
			querySystemForRenderStyle(FontDescription::subpixelPositioning());
		}

		FontPlatformData::~FontPlatformData()
		{
		}

		FontPlatformData& FontPlatformData::operator=(const FontPlatformData& src)
		{
			m_typeface = src.m_typeface;
#if !OS(WINDOWS)
			m_family = src.m_family;
#endif
			m_textSize = src.m_textSize;
			m_syntheticBold = src.m_syntheticBold;
			m_syntheticItalic = src.m_syntheticItalic;
			m_harfBuzzFace = nullptr;
			m_orientation = src.m_orientation;
			//m_style = src.m_style;
#if OS(WINDOWS)
			m_paintTextFlags = 0;
			m_minSizeForAntiAlias = src.m_minSizeForAntiAlias;
#endif

			return *this;
		}

#ifndef NDEBUG
		String FontPlatformData::description() const
		{
			return String();
		}
#endif

		SkFontID FontPlatformData::uniqueID() const
		{
			return m_typeface->uniqueID();
		}

		String FontPlatformData::fontFamilyName() const
		{
			// FIXME(crbug.com/326582): come up with a proper way of handling SVG.
			if (!this->typeface())
        return "";
			SkTypeface::LocalizedStrings* fontFamilyIterator = this->typeface()->createFamilyNameIterator();
			SkTypeface::LocalizedString localizedString;
			while (fontFamilyIterator->next(&localizedString) && !localizedString.fString.size()) { }
			fontFamilyIterator->unref();
			return String(localizedString.fString.c_str());
		}

		bool FontPlatformData::operator==(const FontPlatformData& a) const
		{
			// If either of the typeface pointers are null then we test for pointer
			// equality. Otherwise, we call SkTypeface::Equal on the valid pointers.
			bool typefacesEqual;
			if (!m_typeface || !a.m_typeface)
        typefacesEqual = m_typeface == a.m_typeface;
			else
        typefacesEqual = SkTypeface::Equal(m_typeface.get(), a.m_typeface.get());

			return typefacesEqual
			&& m_textSize == a.m_textSize
			&& m_syntheticBold == a.m_syntheticBold
			&& m_syntheticItalic == a.m_syntheticItalic
			&& m_orientation == a.m_orientation
			//&& m_style == a.m_style
			&& m_isHashTableDeletedValue == a.m_isHashTableDeletedValue;
		}

		bool FontPlatformData::isFixedPitch() const
		{
			return typeface() && typeface()->isFixedPitch();
		}

		HarfBuzzFace* FontPlatformData::harfBuzzFace() const
		{
			if (!m_harfBuzzFace)
        m_harfBuzzFace = HarfBuzzFace::create(const_cast<FontPlatformData*>(this), uniqueID());
			
			return m_harfBuzzFace.get();
		}










#if ENABLE(OPENTYPE_VERTICAL)
PassRefPtr<OpenTypeVerticalData> FontPlatformData::verticalData() const
{
    return fontCache()->getVerticalData(typeface()->uniqueID(), *this);
}

PassRefPtr<SharedBuffer> FontPlatformData::openTypeTable(uint32_t table) const
{
    RefPtr<SharedBuffer> buffer;

    SkFontTableTag tag = SkEndianSwap32(table);
    const size_t tableSize = m_typeface->getTableSize(tag);
    if (tableSize) {
        Vector<char> tableBuffer(tableSize);
        m_typeface->getTableData(tag, 0, tableSize, &tableBuffer[0]);
        buffer = SharedBuffer::adoptVector(tableBuffer);
    }
    return buffer.release();
}
#endif

} // namespace WebCore

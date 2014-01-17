/*
 * Copyright (c) 2008, Google Inc. All rights reserved.
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
#include "core/platform/graphics/skia/SkiaFontWin.h"

#include "core/platform/graphics/Gradient.h"
#include "core/platform/graphics/GraphicsContext.h"
#include "core/platform/graphics/Pattern.h"
#include "core/platform/graphics/SimpleFontData.h"
#include "core/platform/graphics/chromium/FontPlatformDataChromiumWin.h"
#include "core/platform/graphics/transforms/AffineTransform.h"
#include "third_party/skia/include/core/SkCanvas.h"
#include "third_party/skia/include/core/SkDevice.h"
#include "third_party/skia/include/core/SkPaint.h"
#include "third_party/skia/include/core/SkShader.h"
#include "third_party/skia/include/core/SkTemplates.h"
#include "wtf/RefPtr.h"

namespace WebCore {

static void skiaDrawText(GraphicsContext* context,
                         const SkPoint& point,
                         const SkRect& textRect,
                         SkPaint* paint,
                         const WORD* glyphs,
                         const int* advances,
                         const GOFFSET* offsets,
                         int numGlyphs)
{
    // Reserve space for 64 SkPoints on the stack. If numGlyphs is larger, the array
    // will dynamically allocate it space for numGlyph glyphs. This is used to store
    // the computed x,y locations. In the case where offsets==null, then we use it
    // to store (twice as many) SkScalars for x[]
    static const size_t kLocalGlyphMax = 64;

    SkScalar x = point.fX;
    SkScalar y = point.fY;
    if (offsets) {
        SkAutoSTArray<kLocalGlyphMax, SkPoint> storage(numGlyphs);
        SkPoint* pos = storage.get();
        for (int i = 0; i < numGlyphs; i++) {
            // GDI has dv go up, so we negate it
            pos[i].set(x + SkIntToScalar(offsets[i].du),
                       y + -SkIntToScalar(offsets[i].dv));
            x += SkIntToScalar(advances[i]);
        }
        context->drawPosText(glyphs, numGlyphs * sizeof(uint16_t), pos, textRect, *paint);
    } else {
        SkAutoSTArray<kLocalGlyphMax * 2, SkScalar> storage(numGlyphs);
        SkScalar* xpos = storage.get();
        for (int i = 0; i < numGlyphs; i++) {
            xpos[i] = x;
            x += SkIntToScalar(advances[i]);
        }
        context->drawPosTextH(glyphs, numGlyphs * sizeof(uint16_t),
                             xpos, y, textRect, *paint);
    }
}

static void setupPaintForFont(SkPaint* paint, GraphicsContext* context,
                              SkTypeface* face, float size, uint32_t textFlags)
{
    paint->setTextSize(SkFloatToScalar(size));
    paint->setTypeface(face);

    if (!context->couldUseLCDRenderedText()) {
        textFlags &= ~SkPaint::kLCDRenderText_Flag;
        // If we *just* clear our request for LCD, then GDI seems to
        // sometimes give us AA text, and sometimes give us BW text. Since the
        // original intent was LCD, we want to force AA (rather than BW), so we
        // add a special bit to tell Skia to do its best to avoid the BW: by
        // drawing LCD offscreen and downsampling that to AA.
        textFlags |= SkPaint::kGenA8FromLCD_Flag;
    }

    static const uint32_t textFlagsMask = SkPaint::kAntiAlias_Flag |
                                          SkPaint::kLCDRenderText_Flag |
                                          SkPaint::kGenA8FromLCD_Flag;

    // now copy in just the text flags
    SkASSERT(!(textFlags & ~textFlagsMask));
    uint32_t flags = paint->getFlags();
    flags &= ~textFlagsMask;
    flags |= textFlags;
    paint->setFlags(flags);
}

static void paintSkiaText(GraphicsContext* context, HFONT hfont,
                          SkTypeface* face, float size, uint32_t textFlags,
                          int numGlyphs,
                          const WORD* glyphs,
                          const int* advances,
                          const GOFFSET* offsets,
                          const SkPoint& origin,
                          const SkRect& textRect)
{
    TextDrawingModeFlags textMode = context->textDrawingMode();
    // Ensure font load for printing, because PDF device needs it.
    if (context->isPrintingDevice())
        FontPlatformData::ensureFontLoaded(hfont);

    // Filling (if necessary). This is the common case.
    SkPaint paint;
    context->setupPaintForFilling(&paint);
    paint.setTextEncoding(SkPaint::kGlyphID_TextEncoding);
    setupPaintForFont(&paint, context, face, size, textFlags);

    bool didFill = false;

    if ((textMode & TextModeFill) && (SkColorGetA(paint.getColor()) || paint.getLooper())) {
        skiaDrawText(context, origin, textRect, &paint, &glyphs[0], &advances[0], &offsets[0], numGlyphs);
        didFill = true;
    }

    // Stroking on top (if necessary).
    if ((textMode & TextModeStroke)
        && context->strokeStyle() != NoStroke
        && context->strokeThickness() > 0) {

        paint.reset();
        context->setupPaintForStroking(&paint);
        paint.setTextEncoding(SkPaint::kGlyphID_TextEncoding);
        setupPaintForFont(&paint, context, face, size, textFlags);

        if (didFill) {
            // If there is a shadow and we filled above, there will already be
            // a shadow. We don't want to draw it again or it will be too dark
            // and it will go on top of the fill.
            //
            // Note that this isn't strictly correct, since the stroke could be
            // very thick and the shadow wouldn't account for this. The "right"
            // thing would be to draw to a new layer and then draw that layer
            // with a shadow. But this is a lot of extra work for something
            // that isn't normally an issue.
            paint.setLooper(0);
        }

        skiaDrawText(context, origin, textRect, &paint, &glyphs[0], &advances[0], &offsets[0], numGlyphs);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////

void paintSkiaText(GraphicsContext* context,
                   const FontPlatformData& data,
                   int numGlyphs,
                   const WORD* glyphs,
                   const int* advances,
                   const GOFFSET* offsets,
                   const SkPoint& origin,
                   const SkRect& textRect)
{
    paintSkiaText(context, data.hfont(), data.typeface(), data.size(), data.paintTextFlags(),
                  numGlyphs, glyphs, advances, offsets, origin, textRect);
}

void paintSkiaText(GraphicsContext* context,
                   HFONT hfont,
                   int numGlyphs,
                   const WORD* glyphs,
                   const int* advances,
                   const GOFFSET* offsets,
                   const SkPoint& origin,
                   const SkRect& textRect)
{
    int size;
    int paintTextFlags;
    RefPtr<SkTypeface> face = CreateTypefaceFromHFont(hfont, &size, &paintTextFlags);
    paintSkiaText(context, hfont, face.get(), size, paintTextFlags, numGlyphs, glyphs, advances, offsets, origin, textRect);
}

}  // namespace WebCore

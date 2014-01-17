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
#include "core/platform/graphics/skia/NativeImageSkia.h"

#include "core/platform/PlatformInstrumentation.h"
#include "core/platform/chromium/TraceEvent.h"
#include "core/platform/graphics/FloatPoint.h"
#include "core/platform/graphics/FloatRect.h"
#include "core/platform/graphics/FloatSize.h"
#include "core/platform/graphics/GraphicsContext.h"
#include "core/platform/graphics/Image.h"
#include "core/platform/graphics/chromium/DeferredImageDecoder.h"
#include "core/platform/graphics/skia/SkiaUtils.h"
#include "skia/ext/image_operations.h"
#include "third_party/skia/include/core/SkMatrix.h"
#include "third_party/skia/include/core/SkPaint.h"
#include "third_party/skia/include/core/SkScalar.h"
#include "third_party/skia/include/core/SkShader.h"

#include <limits>
#include <math.h>

namespace WebCore {

static bool nearlyIntegral(float value)
{
    return fabs(value - floorf(value)) < std::numeric_limits<float>::epsilon();
}

ResamplingMode NativeImageSkia::computeResamplingMode(const SkMatrix& matrix, float srcWidth, float srcHeight, float destWidth, float destHeight) const
{
    // The percent change below which we will not resample. This usually means
    // an off-by-one error on the web page, and just doing nearest neighbor
    // sampling is usually good enough.
    const float kFractionalChangeThreshold = 0.025f;

    // Images smaller than this in either direction are considered "small" and
    // are not resampled ever (see below).
    const int kSmallImageSizeThreshold = 8;

    // The amount an image can be stretched in a single direction before we
    // say that it is being stretched so much that it must be a line or
    // background that doesn't need resampling.
    const float kLargeStretch = 3.0f;

    // Figure out if we should resample this image. We try to prune out some
    // common cases where resampling won't give us anything, since it is much
    // slower than drawing stretched.
    float diffWidth = fabs(destWidth - srcWidth);
    float diffHeight = fabs(destHeight - srcHeight);
    bool widthNearlyEqual = diffWidth < std::numeric_limits<float>::epsilon();
    bool heightNearlyEqual = diffHeight < std::numeric_limits<float>::epsilon();
    // We don't need to resample if the source and destination are the same.
    if (widthNearlyEqual && heightNearlyEqual)
        return NoResampling;

    if (srcWidth <= kSmallImageSizeThreshold
        || srcHeight <= kSmallImageSizeThreshold
        || destWidth <= kSmallImageSizeThreshold
        || destHeight <= kSmallImageSizeThreshold) {
        // Small image detected.

        // Resample in the case where the new size would be non-integral.
        // This can cause noticeable breaks in repeating patterns, except
        // when the source image is only one pixel wide in that dimension.
        if ((!nearlyIntegral(destWidth) && srcWidth > 1 + std::numeric_limits<float>::epsilon())
            || (!nearlyIntegral(destHeight) && srcHeight > 1 + std::numeric_limits<float>::epsilon()))
            return LinearResampling;

        // Otherwise, don't resample small images. These are often used for
        // borders and rules (think 1x1 images used to make lines).
        return NoResampling;
    }

    if (srcHeight * kLargeStretch <= destHeight || srcWidth * kLargeStretch <= destWidth) {
        // Large image detected.

        // Don't resample if it is being stretched a lot in only one direction.
        // This is trying to catch cases where somebody has created a border
        // (which might be large) and then is stretching it to fill some part
        // of the page.
        if (widthNearlyEqual || heightNearlyEqual)
            return NoResampling;

        // The image is growing a lot and in more than one direction. Resampling
        // is slow and doesn't give us very much when growing a lot.
        return LinearResampling;
    }

    if ((diffWidth / srcWidth < kFractionalChangeThreshold)
        && (diffHeight / srcHeight < kFractionalChangeThreshold)) {
        // It is disappointingly common on the web for image sizes to be off by
        // one or two pixels. We don't bother resampling if the size difference
        // is a small fraction of the original size.
        return NoResampling;
    }

    // When the image is not yet done loading, use linear. We don't cache the
    // partially resampled images, and as they come in incrementally, it causes
    // us to have to resample the whole thing every time.
    if (!isDataComplete())
        return LinearResampling;

    // Everything else gets resampled.
    // High quality interpolation only enabled for scaling and translation.
    if (!(matrix.getType() & (SkMatrix::kAffine_Mask | SkMatrix::kPerspective_Mask)))
        return AwesomeResampling;

    return LinearResampling;
}

static ResamplingMode limitResamplingMode(GraphicsContext* context, ResamplingMode resampling)
{
    switch (context->imageInterpolationQuality()) {
    case InterpolationNone:
        return NoResampling;
    case InterpolationMedium:
        // For now we treat InterpolationMedium and InterpolationLow the same.
    case InterpolationLow:
        if (resampling == AwesomeResampling)
            return LinearResampling;
        break;
    case InterpolationHigh:
    case InterpolationDefault:
        break;
    }

    return resampling;
}

// This function is used to scale an image and extract a scaled fragment.
//
// ALGORITHM
//
// Because the scaled image size has to be integers, we approximate the real
// scale with the following formula (only X direction is shown):
//
// scaledImageWidth = round(scaleX * imageRect.width())
// approximateScaleX = scaledImageWidth / imageRect.width()
//
// With this method we maintain a constant scale factor among fragments in
// the scaled image. This allows fragments to stitch together to form the
// full scaled image. The downside is there will be a small difference
// between |scaleX| and |approximateScaleX|.
//
// A scaled image fragment is identified by:
//
// - Scaled image size
// - Scaled image fragment rectangle (IntRect)
//
// Scaled image size has been determined and the next step is to compute the
// rectangle for the scaled image fragment which needs to be an IntRect.
//
// scaledSrcRect = srcRect * (approximateScaleX, approximateScaleY)
// enclosingScaledSrcRect = enclosingIntRect(scaledSrcRect)
//
// Finally we extract the scaled image fragment using
// (scaledImageSize, enclosingScaledSrcRect).
//
SkBitmap NativeImageSkia::extractScaledImageFragment(const SkRect& srcRect, float scaleX, float scaleY, SkRect* scaledSrcRect) const
{
    SkISize imageSize = SkISize::Make(bitmap().width(), bitmap().height());
    SkISize scaledImageSize = SkISize::Make(clampToInteger(roundf(imageSize.width() * scaleX)),
        clampToInteger(roundf(imageSize.height() * scaleY)));

    SkRect imageRect = SkRect::MakeWH(imageSize.width(), imageSize.height());
    SkRect scaledImageRect = SkRect::MakeWH(scaledImageSize.width(), scaledImageSize.height());

    SkMatrix scaleTransform;
    scaleTransform.setRectToRect(imageRect, scaledImageRect, SkMatrix::kFill_ScaleToFit);
    scaleTransform.mapRect(scaledSrcRect, srcRect);

    scaledSrcRect->intersect(scaledImageRect);
    SkIRect enclosingScaledSrcRect = enclosingIntRect(*scaledSrcRect);

    // |enclosingScaledSrcRect| can be larger than |scaledImageSize| because
    // of float inaccuracy so clip to get inside.
    enclosingScaledSrcRect.intersect(SkIRect::MakeSize(scaledImageSize));

    // scaledSrcRect is relative to the pixel snapped fragment we're extracting.
    scaledSrcRect->offset(-enclosingScaledSrcRect.x(), -enclosingScaledSrcRect.y());

    return resizedBitmap(scaledImageSize, enclosingScaledSrcRect);
}

// This does a lot of computation to resample only the portion of the bitmap
// that will only be drawn. This is critical for performance since when we are
// scrolling, for example, we are only drawing a small strip of the image.
// Resampling the whole image every time is very slow, so this speeds up things
// dramatically.
//
// Note: this code is only used when the canvas transformation is limited to
// scaling or translation.
void NativeImageSkia::drawResampledBitmap(GraphicsContext* context, SkPaint& paint, const SkRect& srcRect, const SkRect& destRect) const
{
    TRACE_EVENT0("skia", "drawResampledBitmap");
    // We want to scale |destRect| with transformation in the canvas to obtain
    // the final scale. The final scale is a combination of scale transform
    // in canvas and explicit scaling (srcRect and destRect).
    SkRect screenRect;
    context->getTotalMatrix().mapRect(&screenRect, destRect);
    float realScaleX = screenRect.width() / srcRect.width();
    float realScaleY = screenRect.height() / srcRect.height();

    // This part of code limits scaling only to visible portion in the
    SkRect destRectVisibleSubset;
    ClipRectToCanvas(context, destRect, &destRectVisibleSubset);

    // ClipRectToCanvas often overshoots, resulting in a larger region than our
    // original destRect. Intersecting gets us back inside.
    if (!destRectVisibleSubset.intersect(destRect))
        return; // Nothing visible in destRect.

    // Find the corresponding rect in the source image.
    SkMatrix destToSrcTransform;
    SkRect srcRectVisibleSubset;
    destToSrcTransform.setRectToRect(destRect, srcRect, SkMatrix::kFill_ScaleToFit);
    destToSrcTransform.mapRect(&srcRectVisibleSubset, destRectVisibleSubset);

    SkRect scaledSrcRect;
    SkBitmap scaledImageFragment = extractScaledImageFragment(srcRectVisibleSubset, realScaleX, realScaleY, &scaledSrcRect);

    context->drawBitmapRect(scaledImageFragment, &scaledSrcRect, destRectVisibleSubset, &paint);
}

NativeImageSkia::NativeImageSkia()
    : m_resolutionScale(1)
    , m_resizeRequests(0)
{
}

NativeImageSkia::NativeImageSkia(const SkBitmap& other, float resolutionScale)
    : m_image(other)
    , m_resolutionScale(resolutionScale)
    , m_resizeRequests(0)
{
}

NativeImageSkia::NativeImageSkia(const SkBitmap& image, float resolutionScale, const SkBitmap& resizedImage, const ImageResourceInfo& cachedImageInfo, int resizeRequests)
    : m_image(image)
    , m_resolutionScale(resolutionScale)
    , m_resizedImage(resizedImage)
    , m_cachedImageInfo(cachedImageInfo)
    , m_resizeRequests(resizeRequests)
{
}

NativeImageSkia::~NativeImageSkia()
{
}

int NativeImageSkia::decodedSize() const
{
    return m_image.getSize() + m_resizedImage.getSize();
}

bool NativeImageSkia::hasResizedBitmap(const SkISize& scaledImageSize, const SkIRect& scaledImageSubset) const
{
    bool imageScaleEqual = m_cachedImageInfo.scaledImageSize == scaledImageSize;
    bool scaledImageSubsetAvailable = m_cachedImageInfo.scaledImageSubset.contains(scaledImageSubset);
    return imageScaleEqual && scaledImageSubsetAvailable && !m_resizedImage.empty();
}

SkBitmap NativeImageSkia::resizedBitmap(const SkISize& scaledImageSize, const SkIRect& scaledImageSubset) const
{
    ASSERT(!DeferredImageDecoder::isLazyDecoded(m_image));

    if (!hasResizedBitmap(scaledImageSize, scaledImageSubset)) {
        bool shouldCache = isDataComplete()
            && shouldCacheResampling(scaledImageSize, scaledImageSubset);

        PlatformInstrumentation::willResizeImage(shouldCache);
        SkBitmap resizedImage = skia::ImageOperations::Resize(m_image, skia::ImageOperations::RESIZE_LANCZOS3, scaledImageSize.width(), scaledImageSize.height(), scaledImageSubset);
        resizedImage.setImmutable();
        PlatformInstrumentation::didResizeImage();

        if (!shouldCache)
            return resizedImage;

        m_resizedImage = resizedImage;
    }

    SkBitmap resizedSubset;
    SkIRect resizedSubsetRect = m_cachedImageInfo.rectInSubset(scaledImageSubset);
    m_resizedImage.extractSubset(&resizedSubset, resizedSubsetRect);
    return resizedSubset;
}

static bool hasNon90rotation(GraphicsContext* context)
{
    return !context->getTotalMatrix().rectStaysRect();
}

void NativeImageSkia::draw(GraphicsContext* context, const SkRect& srcRect, const SkRect& destRect, SkXfermode::Mode compOp) const
{
    TRACE_EVENT0("skia", "NativeImageSkia::draw");
    SkPaint paint;
    paint.setXfermodeMode(compOp);
    paint.setAlpha(context->getNormalizedAlpha());
    paint.setLooper(context->drawLooper());
    // only antialias if we're rotated or skewed
    paint.setAntiAlias(hasNon90rotation(context));

    ResamplingMode resampling;
    if (context->isAccelerated()) {
        resampling = LinearResampling;
    } else if (context->printing()) {
        resampling = NoResampling;
    } else {
        // Take into account scale applied to the canvas when computing sampling mode (e.g. CSS scale or page scale).
        SkRect destRectTarget = destRect;
        if (!(context->getTotalMatrix().getType() & (SkMatrix::kAffine_Mask | SkMatrix::kPerspective_Mask)))
            context->getTotalMatrix().mapRect(&destRectTarget, destRect);

        resampling = computeResamplingMode(context->getTotalMatrix(),
            SkScalarToFloat(srcRect.width()), SkScalarToFloat(srcRect.height()),
            SkScalarToFloat(destRectTarget.width()), SkScalarToFloat(destRectTarget.height()));
    }

    if (resampling == NoResampling) {
        // FIXME: This is to not break tests (it results in the filter bitmap flag
        // being set to true). We need to decide if we respect NoResampling
        // being returned from computeResamplingMode.
        resampling = LinearResampling;
    }
    resampling = limitResamplingMode(context, resampling);
    paint.setFilterBitmap(resampling == LinearResampling);

    // FIXME: Bicubic filtering in Skia is only applied to defer-decoded images
    // as an experiment. Once this filtering code path becomes stable we should
    // turn this on for all cases, including non-defer-decoded images.
    bool useBicubicFilter = resampling == AwesomeResampling
        && DeferredImageDecoder::isLazyDecoded(bitmap());
    if (useBicubicFilter)
        paint.setFilterLevel(SkPaint::kHigh_FilterLevel);

    if (resampling == AwesomeResampling && !useBicubicFilter) {
        // Resample the image and then draw the result to canvas with bilinear
        // filtering.
        drawResampledBitmap(context, paint, srcRect, destRect);
    } else {
        // We want to filter it if we decided to do interpolation above, or if
        // there is something interesting going on with the matrix (like a rotation).
        // Note: for serialization, we will want to subset the bitmap first so we
        // don't send extra pixels.
        context->drawBitmapRect(bitmap(), &srcRect, destRect, &paint);
    }
    context->didDrawRect(destRect, paint, &bitmap());
}

void NativeImageSkia::drawPattern(
    GraphicsContext* context,
    const FloatRect& floatSrcRect,
    const FloatSize& scale,
    const FloatPoint& phase,
    CompositeOperator compositeOp,
    const FloatRect& destRect,
    BlendMode blendMode) const
{
    FloatRect normSrcRect = floatSrcRect;
    normSrcRect.intersect(FloatRect(0, 0, bitmap().width(), bitmap().height()));
    if (destRect.isEmpty() || normSrcRect.isEmpty())
        return; // nothing to draw

    SkMatrix totalMatrix = context->getTotalMatrix();
    SkScalar ctmScaleX = totalMatrix.getScaleX();
    SkScalar ctmScaleY = totalMatrix.getScaleY();
    totalMatrix.preScale(scale.width(), scale.height());

    // Figure out what size the bitmap will be in the destination. The
    // destination rect is the bounds of the pattern, we need to use the
    // matrix to see how big it will be.
    SkRect destRectTarget;
    totalMatrix.mapRect(&destRectTarget, normSrcRect);

    float destBitmapWidth = SkScalarToFloat(destRectTarget.width());
    float destBitmapHeight = SkScalarToFloat(destRectTarget.height());

    // Compute the resampling mode.
    ResamplingMode resampling;
    if (context->isAccelerated() || context->printing())
        resampling = LinearResampling;
    else
        resampling = computeResamplingMode(totalMatrix, normSrcRect.width(), normSrcRect.height(), destBitmapWidth, destBitmapHeight);
    resampling = limitResamplingMode(context, resampling);

    SkMatrix shaderTransform;
    RefPtr<SkShader> shader;

    // Bicubic filter is only applied to defer-decoded images, see
    // NativeImageSkia::draw for details.
    bool useBicubicFilter = resampling == AwesomeResampling && DeferredImageDecoder::isLazyDecoded(bitmap());

    if (resampling == AwesomeResampling && !useBicubicFilter) {
        // Do nice resampling.
        float scaleX = destBitmapWidth / normSrcRect.width();
        float scaleY = destBitmapHeight / normSrcRect.height();
        SkRect scaledSrcRect;

        // The image fragment generated here is not exactly what is
        // requested. The scale factor used is approximated and image
        // fragment is slightly larger to align to integer
        // boundaries.
        SkBitmap resampled = extractScaledImageFragment(normSrcRect, scaleX, scaleY, &scaledSrcRect);
        shader = adoptRef(SkShader::CreateBitmapShader(resampled, SkShader::kRepeat_TileMode, SkShader::kRepeat_TileMode));

        // Since we just resized the bitmap, we need to remove the scale
        // applied to the pixels in the bitmap shader. This means we need
        // CTM * shaderTransform to have identity scale. Since we
        // can't modify CTM (or the rectangle will be drawn in the wrong
        // place), we must set shaderTransform's scale to the inverse of
        // CTM scale.
        shaderTransform.setScale(ctmScaleX ? 1 / ctmScaleX : 1, ctmScaleY ? 1 / ctmScaleY : 1);
    } else {
        // No need to resample before drawing.
        SkBitmap srcSubset;
        bitmap().extractSubset(&srcSubset, enclosingIntRect(normSrcRect));
        shader = adoptRef(SkShader::CreateBitmapShader(srcSubset, SkShader::kRepeat_TileMode, SkShader::kRepeat_TileMode));
        // Because no resizing occurred, the shader transform should be
        // set to the pattern's transform, which just includes scale.
        shaderTransform.setScale(scale.width(), scale.height());
    }

    // We also need to translate it such that the origin of the pattern is the
    // origin of the destination rect, which is what WebKit expects. Skia uses
    // the coordinate system origin as the base for the pattern. If WebKit wants
    // a shifted image, it will shift it from there using the shaderTransform.
    float adjustedX = phase.x() + normSrcRect.x() * scale.width();
    float adjustedY = phase.y() + normSrcRect.y() * scale.height();
    shaderTransform.postTranslate(SkFloatToScalar(adjustedX), SkFloatToScalar(adjustedY));
    shader->setLocalMatrix(shaderTransform);

    SkPaint paint;
    paint.setShader(shader.get());
    paint.setXfermodeMode(WebCoreCompositeToSkiaComposite(compositeOp, blendMode));

    paint.setFilterBitmap(resampling == LinearResampling);
    if (useBicubicFilter)
        paint.setFilterLevel(SkPaint::kHigh_FilterLevel);

    context->drawRect(destRect, paint);
}

bool NativeImageSkia::shouldCacheResampling(const SkISize& scaledImageSize, const SkIRect& scaledImageSubset) const
{
    // Check whether the requested dimensions match previous request.
    bool matchesPreviousRequest = m_cachedImageInfo.isEqual(scaledImageSize, scaledImageSubset);
    if (matchesPreviousRequest)
        ++m_resizeRequests;
    else {
        m_cachedImageInfo.set(scaledImageSize, scaledImageSubset);
        m_resizeRequests = 0;
        // Reset m_resizedImage now, because we don't distinguish
        // between the last requested resize info and m_resizedImage's
        // resize info.
        m_resizedImage.reset();
    }

    // We can not cache incomplete frames. This might be a good optimization in
    // the future, were we know how much of the frame has been decoded, so when
    // we incrementally draw more of the image, we only have to resample the
    // parts that are changed.
    if (!isDataComplete())
        return false;

    // If the destination bitmap is excessively large, we'll never allow caching.
    static const unsigned long long kLargeBitmapSize = 4096ULL * 4096ULL;
    unsigned long long fullSize = static_cast<unsigned long long>(scaledImageSize.width()) * static_cast<unsigned long long>(scaledImageSize.height());
    unsigned long long fragmentSize = static_cast<unsigned long long>(scaledImageSubset.width()) * static_cast<unsigned long long>(scaledImageSubset.height());

    if (fragmentSize > kLargeBitmapSize)
        return false;

    // If the destination bitmap is small, we'll always allow caching, since
    // there is not very much penalty for computing it and it may come in handy.
    static const unsigned kSmallBitmapSize = 4096;
    if (fragmentSize <= kSmallBitmapSize)
        return true;

    // If "too many" requests have been made for this bitmap, we assume that
    // many more will be made as well, and we'll go ahead and cache it.
    static const int kManyRequestThreshold = 4;
    if (m_resizeRequests >= kManyRequestThreshold)
        return true;

    // If more than 1/4 of the resized image is requested, it's worth caching.
    return fragmentSize > fullSize / 4;
}

NativeImageSkia::ImageResourceInfo::ImageResourceInfo()
{
    scaledImageSize.setEmpty();
    scaledImageSubset.setEmpty();
}

bool NativeImageSkia::ImageResourceInfo::isEqual(const SkISize& otherScaledImageSize, const SkIRect& otherScaledImageSubset) const
{
    return scaledImageSize == otherScaledImageSize && scaledImageSubset == otherScaledImageSubset;
}

void NativeImageSkia::ImageResourceInfo::set(const SkISize& otherScaledImageSize, const SkIRect& otherScaledImageSubset)
{
    scaledImageSize = otherScaledImageSize;
    scaledImageSubset = otherScaledImageSubset;
}

SkIRect NativeImageSkia::ImageResourceInfo::rectInSubset(const SkIRect& otherScaledImageSubset)
{
    if (!scaledImageSubset.contains(otherScaledImageSubset))
        return SkIRect::MakeEmpty();
    SkIRect subsetRect = otherScaledImageSubset;
    subsetRect.offset(-scaledImageSubset.x(), -scaledImageSubset.y());
    return subsetRect;
}

} // namespace WebCore

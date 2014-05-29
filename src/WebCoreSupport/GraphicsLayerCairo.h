
#if 0
/*
 * Copyright (C) 2009 Apple Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE INC. ``AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE COMPUTER, INC. OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef GraphicsLayerCairo_h
#define GraphicsLayerCairo_h

#if USE(ACCELERATED_COMPOSITING)

#include "Animation.h"
#include "Color.h"
#include "FloatPoint.h"
#include "FloatPoint3D.h"
#include "FloatSize.h"
#include "GraphicsLayerClient.h"
#include "IntRect.h"
#include "PlatformLayer.h"
#include "TransformOperations.h"
#include <wtf/OwnPtr.h>
#include <wtf/PassOwnPtr.h>

#if ENABLE(CSS_FILTERS)
#include "FilterOperations.h"
#endif

namespace WebCore {

	class FloatRect;
	class GraphicsContext;
	class GraphicsLayerFactory;
	class Image;
	class TextStream;
	class TiledBacking;
	class TimingFunction;
	class TransformationMatrix;

	class GraphicsLayerCairo : public GraphicsLayer {
    WTF_MAKE_NONCOPYABLE(GraphicsLayerCairo); WTF_MAKE_FAST_ALLOCATED;
	public:
    GraphicsLayerCairo(GraphicsLayerClient*);
    ~GraphicsLayerCairo();

    virtual void initialize();

    typedef uint64_t PlatformLayerID;
    virtual PlatformLayerID primaryLayerID() const;

    GraphicsLayerClient* client() const;

    // Layer name. Only used to identify layers in debug output
    const String& name() const;
    virtual void setName(const String& name);

    GraphicsLayer* parent() const;
    void setParent(GraphicsLayer*); // Internal use only.

    // Returns true if the layer has the given layer as an ancestor (excluding self).
    bool hasAncestor(GraphicsLayer*) const;

    const Vector<GraphicsLayer*>& children() const;
    // Returns true if the child list changed.
    virtual bool setChildren(const Vector<GraphicsLayer*>&);

    // Add child layers. If the child is already parented, it will be removed from its old parent.
    virtual void addChild(GraphicsLayer*);
    virtual void addChildAtIndex(GraphicsLayer*, int index);
    virtual void addChildAbove(GraphicsLayer* layer, GraphicsLayer* sibling);
    virtual void addChildBelow(GraphicsLayer* layer, GraphicsLayer* sibling);
    virtual bool replaceChild(GraphicsLayer* oldChild, GraphicsLayer* newChild);

    void removeAllChildren();
    virtual void removeFromParent();

    GraphicsLayer* maskLayer() const;
    virtual void setMaskLayer(GraphicsLayer* layer);

    // The given layer will replicate this layer and its children; the replica renders behind this layer.
    virtual void setReplicatedByLayer(GraphicsLayer*);
    // Whether this layer is being replicated by another layer.
    bool isReplicated() const;
    // The layer that replicates this layer (if any).
    GraphicsLayer* replicaLayer() const;

    const FloatPoint& replicatedLayerPosition() const;
    void setReplicatedLayerPosition(const FloatPoint& p);

    enum ShouldSetNeedsDisplay {
			DontSetNeedsDisplay,
			SetNeedsDisplay
    };

    // Offset is origin of the renderer minus origin of the graphics layer (so either zero or negative).
    IntSize offsetFromRenderer() const;
    void setOffsetFromRenderer(const IntSize&, ShouldSetNeedsDisplay = SetNeedsDisplay);

    // The position of the layer (the location of its top-left corner in its parent)
    const FloatPoint& position() const;
    virtual void setPosition(const FloatPoint& p);

    // For platforms that move underlying platform layers on a different thread for scrolling; just update the GraphicsLayer state.
    virtual void syncPosition(const FloatPoint& p);

    // Anchor point: (0, 0) is top left, (1, 1) is bottom right. The anchor point
    // affects the origin of the transforms.
    const FloatPoint3D& anchorPoint() const;
    virtual void setAnchorPoint(const FloatPoint3D& p);

    // The size of the layer.
    const FloatSize& size() const;
    virtual void setSize(const FloatSize&);

    // The boundOrigin affects the offset at which content is rendered, and sublayers are positioned.
    const FloatPoint& boundsOrigin() const;
    virtual void setBoundsOrigin(const FloatPoint& origin);

    const TransformationMatrix& transform() const;
    virtual void setTransform(const TransformationMatrix& t);

    const TransformationMatrix& childrenTransform() const;
    virtual void setChildrenTransform(const TransformationMatrix& t);

    bool preserves3D() const;
    virtual void setPreserves3D(bool b);

    bool masksToBounds() const;
    virtual void setMasksToBounds(bool b);

    bool drawsContent() const;
    virtual void setDrawsContent(bool b);

    bool contentsAreVisible() const;
    virtual void setContentsVisible(bool b);

    bool acceleratesDrawing() const;
    virtual void setAcceleratesDrawing(bool b);

    // The color used to paint the layer background. Pass an invalid color to remove it.
    // Note that this covers the entire layer. Use setContentsToSolidColor() if the color should
    // only cover the contentsRect.
    const Color& backgroundColor() const;
    virtual void setBackgroundColor(const Color&);

    // opaque means that we know the layer contents have no alpha
    bool contentsOpaque() const;
    virtual void setContentsOpaque(bool b);

    bool backfaceVisibility() const;
    virtual void setBackfaceVisibility(bool b);

    float opacity() const;
    virtual void setOpacity(float opacity);

#if ENABLE(CSS_FILTERS)
    const FilterOperations& filters() const;

    // Returns true if filter can be rendered by the compositor
    virtual bool setFilters(const FilterOperations& filters);
#endif

    // Some GraphicsLayers paint only the foreground or the background content
    GraphicsLayerPaintingPhase paintingPhase() const;
    void setPaintingPhase(GraphicsLayerPaintingPhase phase);

    virtual void setNeedsDisplay();
    // mark the given rect (in layer coords) as needing dispay. Never goes deep.
    virtual void setNeedsDisplayInRect(const FloatRect&, ShouldClipToLayer);

    virtual void setContentsNeedsDisplay();

    // The tile phase is relative to the GraphicsLayer bounds.
    virtual void setContentsTilePhase(const IntPoint& p);
    IntPoint contentsTilePhase() const;

    virtual void setContentsTileSize(const IntSize& s);
    IntSize contentsTileSize() const;
    bool hasContentsTiling() const;

    // Set that the position/size of the contents (image or video).
    IntRect contentsRect() const;
    virtual void setContentsRect(const IntRect& r);

    IntRect contentsClippingRect() const;
    virtual void setContentsClippingRect(const IntRect& r);

    // Transitions are identified by a special animation name that cannot clash with a keyframe identifier.
    static String animationNameForTransition(AnimatedPropertyID);

    // Return true if the animation is handled by the compositing system. If this returns
    // false, the animation will be run by AnimationController.
    // These methods handle both transitions and keyframe animations.
    virtual bool addAnimation(const KeyframeValueList&, const IntSize& /*boxSize*/, const Animation*, const String& /*animationName*/, double /*timeOffset*/);
    virtual void pauseAnimation(const String& /*animationName*/, double /*timeOffset*/);
    virtual void removeAnimation(const String& /*animationName*/);

    virtual void suspendAnimations(double time);
    virtual void resumeAnimations();

    // Layer contents
    virtual void setContentsToImage(Image*);
    virtual bool shouldDirectlyCompositeImage(Image*) const;
    virtual void setContentsToMedia(PlatformLayer*);
#if PLATFORM(IOS)
    virtual PlatformLayer* contentsLayerForMedia() const;
#endif
    // Pass an invalid color to remove the contents layer.
    virtual void setContentsToSolidColor(const Color&);
    virtual void setContentsToCanvas(PlatformLayer*);
    // FIXME: webkit.org/b/109658
    // Should unify setContentsToMedia and setContentsToCanvas
    virtual void setContentsToPlatformLayer(PlatformLayer* layer);
    virtual bool hasContentsLayer() const;

    // Callback from the underlying graphics system to draw layer contents.
    void paintGraphicsLayerContents(GraphicsContext&, const IntRect& clip);
    // Callback from the underlying graphics system when the layer has been displayed
    virtual void layerDidDisplay(PlatformLayer*);

    // For hosting this GraphicsLayer in a native layer hierarchy.
    virtual PlatformLayer* platformLayer() const;

    enum CompositingCoordinatesOrientation { CompositingCoordinatesTopDown, CompositingCoordinatesBottomUp };

    // Flippedness of the contents of this layer. Does not affect sublayer geometry.
    virtual void setContentsOrientation(CompositingCoordinatesOrientation orientation);
    CompositingCoordinatesOrientation contentsOrientation() const;

    void dumpLayer(TextStream&, int indent = 0, LayerTreeAsTextBehavior = LayerTreeAsTextBehaviorNormal) const;

    virtual void setShowDebugBorder(bool show);
    bool isShowingDebugBorder() const;

    virtual void setShowRepaintCounter(bool show);
    bool isShowingRepaintCounter() const;

    // FIXME: this is really a paint count.
    int repaintCount() const;
    int incrementRepaintCount();

    virtual void setDebugBackgroundColor(const Color&);
    virtual void setDebugBorder(const Color&, float /*borderWidth*/);

    enum CustomAppearance { NoCustomAppearance, ScrollingOverhang, ScrollingShadow };
    virtual void setCustomAppearance(CustomAppearance customAppearance);
    CustomAppearance customAppearance() const;

    // z-position is the z-equivalent of position(). It's only used for debugging purposes.
    virtual float zPosition() const;
    virtual void setZPosition(float);

    virtual void distributeOpacity(float);
    virtual float accumulatedOpacity() const;

    virtual void setMaintainsPixelAlignment(bool maintainsAlignment);
    virtual bool maintainsPixelAlignment() const;
#if PLATFORM(IOS)
    virtual FloatSize pixelAlignmentOffset() const;
    bool hasFlattenedPerspectiveTransform() const;
#endif

    virtual void setAppliesPageScale(bool appliesScale = true);
    virtual bool appliesPageScale() const;

    float pageScaleFactor() const;
    float deviceScaleFactor() const;

    virtual void deviceOrPageScaleFactorChanged();
    void noteDeviceOrPageScaleFactorChangedIncludingDescendants();

    // Some compositing systems may do internal batching to synchronize compositing updates
    // with updates drawn into the window. These methods flush internal batched state on this layer
    // and descendant layers, and this layer only.
    virtual void flushCompositingState(const FloatRect& /* clipRect */);
    virtual void flushCompositingStateForThisLayerOnly();

    // If the exposed rect of this layer changes, returns true if this or descendant layers need a flush,
    // for example to allocate new tiles.
    virtual bool visibleRectChangeRequiresFlush(const FloatRect& /* clipRect */) const;

    // Return a string with a human readable form of the layer tree, If debug is true
    // pointers for the layers and timing data will be included in the returned string.
    String layerTreeAsText(LayerTreeAsTextBehavior = LayerTreeAsTextBehaviorNormal) const;

    // Return an estimate of the backing store memory cost (in bytes). May be incorrect for tiled layers.
    virtual double backingStoreMemoryEstimate() const;

    bool usingTiledBacking() const;
    virtual TiledBacking* tiledBacking() const;

    void resetTrackedRepaints();
    void addRepaintRect(const FloatRect&);

    static bool supportsBackgroundColorContent();

    static bool supportsContentsTiling();

    void updateDebugIndicators();

    virtual bool canThrottleLayerFlush() const;

    virtual bool isGraphicsLayerCA() const;
    virtual bool isGraphicsLayerCARemote() const;

	protected:
    // Should be called from derived class destructors. Should call willBeDestroyed() on super.
    virtual void willBeDestroyed();

#if ENABLE(CSS_FILTERS)
    // This method is used by platform GraphicsLayer classes to clear the filters
    // when compositing is not done in hardware. It is not virtual, so the caller
    // needs to notifiy the change to the platform layer as needed.
    void clearFilters();

    // Given a KeyframeValueList containing filterOperations, return true if the operations are valid.
    static int validateFilterOperations(const KeyframeValueList&);
#endif

    // Given a list of TransformAnimationValues, see if all the operations for each keyframe match. If so
    // return the index of the KeyframeValueList entry that has that list of operations (it may not be
    // the first entry because some keyframes might have an empty transform and those match any list).
    // If the lists don't match return -1. On return, if hasBigRotation is true, functions contain
    // rotations of >= 180 degrees
    static int validateTransformOperations(const KeyframeValueList&, bool& hasBigRotation);

    virtual bool shouldRepaintOnSizeChange() const;

    virtual void setOpacityInternal(float);

    // The layer being replicated.
    GraphicsLayer* replicatedLayer() const;
    virtual void setReplicatedLayer(GraphicsLayer* layer);


    void dumpProperties(TextStream&, int indent, LayerTreeAsTextBehavior) const;
    virtual void dumpAdditionalProperties(TextStream&, int /*indent*/, LayerTreeAsTextBehavior) const;

    virtual void getDebugBorderInfo(Color&, float& width) const;

    GraphicsLayerClient* m_client;
    String m_name;

    // Offset from the owning renderer
    IntSize m_offsetFromRenderer;

    // Position is relative to the parent GraphicsLayer
    FloatPoint m_position;
    FloatPoint3D m_anchorPoint;
    FloatSize m_size;
    FloatPoint m_boundsOrigin;

    TransformationMatrix m_transform;
    TransformationMatrix m_childrenTransform;

    Color m_backgroundColor;
    float m_opacity;
    float m_zPosition;

#if ENABLE(CSS_FILTERS)
    FilterOperations m_filters;
#endif

    bool m_contentsOpaque : 1;
    bool m_preserves3D: 1;
    bool m_backfaceVisibility : 1;
    bool m_usingTiledBacking : 1;
    bool m_masksToBounds : 1;
    bool m_drawsContent : 1;
    bool m_contentsVisible : 1;
    bool m_acceleratesDrawing : 1;
    bool m_maintainsPixelAlignment : 1;
    bool m_appliesPageScale : 1; // Set for the layer which has the page scale applied to it.
    bool m_showDebugBorder : 1;
    bool m_showRepaintCounter : 1;

    GraphicsLayerPaintingPhase m_paintingPhase;
    CompositingCoordinatesOrientation m_contentsOrientation; // affects orientation of layer contents

    Vector<GraphicsLayer*> m_children;
    GraphicsLayer* m_parent;

    GraphicsLayer* m_maskLayer; // Reference to mask layer. We don't own this.

    GraphicsLayer* m_replicaLayer; // A layer that replicates this layer. We only allow one, for now.
		// The replica is not parented; this is the primary reference to it.
    GraphicsLayer* m_replicatedLayer; // For a replica layer, a reference to the original layer.
    FloatPoint m_replicatedLayerPosition; // For a replica layer, the position of the replica.

    IntRect m_contentsRect;
    IntRect m_contentsClippingRect;
    IntPoint m_contentsTilePhase;
    IntSize m_contentsTileSize;
		Vector<FloatRect> m_dirtyRects;

    int m_repaintCount;
    CustomAppearance m_customAppearance;
	};

#define GRAPHICSLAYER_TYPE_CASTS(ToValueTypeName, predicate) \
TYPE_CASTS_BASE(ToValueTypeName, WebCore::GraphicsLayer, value, value->predicate, value.predicate)

} // namespace WebCore

#ifndef NDEBUG
// Outside the WebCore namespace for ease of invocation from gdb.
void showGraphicsLayerTree(const WebCore::GraphicsLayer* layer);
#endif

#endif // USE(ACCELERATED_COMPOSITING)

#endif // GraphicsLayerCairo_h

#endif

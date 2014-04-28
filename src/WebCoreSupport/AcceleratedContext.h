/*
 * Copyright (C) 2011 Igalia, S.L.
 *
 *  This library is free software; you can redistribute it and/or
 *  modify it under the terms of the GNU Lesser General Public
 *  License as published by the Free Software Foundation; either
 *  version 2 of the License, or (at your option) any later version.
 *
 *  This library is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 *  Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public
 *  License along with this library; if not, write to the Free Software
 *  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 */

#ifndef AcceleratedContext_h
#define AcceleratedContext_h

#if USE(ACCELERATED_COMPOSITING) && USE(TEXTURE_MAPPER_GL)

#include "GraphicsLayer.h"
#include "GraphicsLayerClient.h"
#include "IntRect.h"
#include "IntSize.h"
#include "Timer.h"
#include "WebView.h"
#include <wtf/PassOwnPtr.h>
#include "GLContext.h"
#include "TextureMapperLayer.h"
#include "TextureMapperFPSCounter.h"

namespace WebCore {

	class AcceleratedContext : public WebCore::GraphicsLayerClient {
    WTF_MAKE_NONCOPYABLE(AcceleratedContext);
	public:
    static AcceleratedContext *create(WebKit::WebView* webView)
    {
			return new AcceleratedContext(webView);
    }

    virtual ~AcceleratedContext();
    void setRootCompositingLayer(WebCore::GraphicsLayer*);
    void setNonCompositedContentsNeedDisplay(const WebCore::IntRect&);
    void scheduleLayerFlush();
    void resizeRootLayer(const WebCore::IntSize&);

    bool renderLayersToWindow(cairo_t*, const WebCore::IntRect& clipRect);
    bool enabled();

    virtual void notifyAnimationStarted(const WebCore::GraphicsLayer*, double time);
    virtual void notifyFlushRequired(const WebCore::GraphicsLayer*);
    virtual void paintContents(const WebCore::GraphicsLayer*, WebCore::GraphicsContext&, WebCore::GraphicsLayerPaintingPhase, const WebCore::IntRect& rectToPaint);

    void initialize();

    enum CompositePurpose { ForResize, NotForResize };
    void compositeLayersToContext(CompositePurpose = NotForResize);

    void flushAndRenderLayers();
    bool flushPendingLayerChanges();
    void scrollNonCompositedContents(const WebCore::IntRect& scrollRect, const WebCore::IntSize& scrollOffset);

	private:
		WebKit::WebView* m_webView;
    unsigned int m_layerFlushTimerCallbackId;

#if USE(TEXTURE_MAPPER_GL)
    std::unique_ptr<WebCore::GraphicsLayer> m_rootLayer;
    std::unique_ptr<WebCore::GraphicsLayer> m_nonCompositedContentLayer;
    OwnPtr<WebCore::TextureMapper> m_textureMapper;
    double m_lastFlushTime;
    double m_redrawPendingTime;
    bool m_needsExtraFlush;
    WebCore::TextureMapperFPSCounter m_fpsCounter;

    void layerFlushTimerFired();
    void stopAnyPendingLayerFlush();
    static bool layerFlushTimerFiredCallback(AcceleratedContext*);
    WebCore::GLContext* prepareForRendering();
    void clearEverywhere();
#elif USE(TEXTURE_MAPPER)
    WebCore::TextureMapperLayer* m_rootTextureMapperLayer;
    std::unique_ptr<WebCore::GraphicsLayer> m_rootGraphicsLayer;
    OwnPtr<WebCore::TextureMapper> m_textureMapper;
#endif

    AcceleratedContext(WebKit::WebView*);
	};

}

#endif
#endif // AcceleratedContext_h

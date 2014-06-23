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


#include "GraphicsLayer.h"
#include "GraphicsLayerClient.h"
#include "IntRect.h"
#include "IntSize.h"
#include "Timer.h"
#include "WebView.h"
#include <wtf/PassOwnPtr.h>
#include "GLContext.h"
#if USE(TEXTURE_MAPPER) && USE(TEXTURE_MAPPER_GL)
#include "TextureMapperLayer.h"
#include "TextureMapperFPSCounter.h"
#endif

namespace WebCore {

class AcceleratedContext : public WebCore::GraphicsLayerClient {
		WTF_MAKE_NONCOPYABLE(AcceleratedContext);
	public:
		static PassOwnPtr<AcceleratedContext> create(WebView* webView)
		{
			return adoptPtr(new AcceleratedContext(webView));
		}

		virtual ~AcceleratedContext();
		void setRootCompositingLayer(WebCore::GraphicsLayer*);
		void setNonCompositedContentsNeedDisplay(const WebCore::IntRect&);
		void scheduleLayerFlush();
		void resizeRootLayer(const WebCore::IntSize&);
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

		// Multiplier for backing store size, related to high DPI.
		float deviceScaleFactor() const { return m_view->p()->corePage->deviceScaleFactor(); }
		// Page scale factor.
		float pageScaleFactor() const { return m_view->p()->corePage->pageScaleFactor(); }
		bool shouldUseTiledBacking(const GraphicsLayer*) const { return true; }
		void clearEverywhere();
	private:
		WebView* m_view;
		unsigned int m_layerFlushTimerCallbackId;

		std::unique_ptr<WebCore::GraphicsLayer> m_rootLayer;
		std::unique_ptr<WebCore::GraphicsLayer> m_nonCompositedContentLayer;
		double m_lastFlushTime;
		double m_redrawPendingTime;
		bool m_needsExtraFlush;

		void layerFlushTimerFired();
		void stopAnyPendingLayerFlush();
		static void layerFlushTimerFiredCallback(void *);
		WebCore::GLContext* prepareForRendering();
#if USE(TEXTURE_MAPPER_GL) || USE(TEXTURE_MAPPER)
		OwnPtr<WebCore::TextureMapper> m_textureMapper;
		WebCore::TextureMapperFPSCounter m_fpsCounter;
#endif
		AcceleratedContext(WebView*);
};

}

#endif // AcceleratedContext_h

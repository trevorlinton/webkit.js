/*
 * Copyright (C) 2012 Igalia, S.L.
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

#if 0
#include "config.h"
#include "AcceleratedContext.h"

#if USE(ACCELERATED_COMPOSITING) && USE(TEXTURE_MAPPER_GL)
#include "DebuggerJS.h"
#include "CairoUtilities.h"
#include "FrameView.h"
#include "GraphicsLayerTextureMapper.h"
#include "MainFrame.h"
#include "PlatformContextCairo.h"
#include "Settings.h"
#include "TextureMapperGL.h"
#include "TextureMapperLayer.h"
#include "WebView.h"
#include <wtf/CurrentTime.h>
#include <emscripten.h>

//#if USE(OPENGL_ES_2)
//#include <GLES2/gl2.h>
//#else
//#include <GL/gl.h>
//#endif
#include "GL/glew.h"

#include <cairo.h>


namespace WebCore {

	AcceleratedContext::AcceleratedContext(WebKit::WebView* webView)
	: m_webView(webView)
	, m_layerFlushTimerCallbackId(0)
	, m_lastFlushTime(0)
	, m_redrawPendingTime(0)
	, m_needsExtraFlush(false)
	{
		webkitTrace();
	}

	void redirectedWindowDamagedCallback(void* data)
	{
		webkitTrace();
	}

	void AcceleratedContext::initialize()
	{
		webkitTrace();
    if (m_rootLayer)
			return;

    IntSize pageSize = roundedIntSize(m_webView->positionAndSize().size());

    m_rootLayer = GraphicsLayer::create(0, this);
    m_rootLayer->setDrawsContent(false);
    m_rootLayer->setSize(FloatSize(pageSize.width(),pageSize.height()));

    // The non-composited contents are a child of the root layer.
    m_nonCompositedContentLayer = GraphicsLayer::create(0, this);
    m_nonCompositedContentLayer->setDrawsContent(true);
    m_nonCompositedContentLayer->setContentsOpaque(false);
    m_nonCompositedContentLayer->setSize(pageSize);

    if (m_webView->m_private->corePage->settings().acceleratedDrawingEnabled())
			m_nonCompositedContentLayer->setAcceleratesDrawing(true);

#ifndef NDEBUG
    m_rootLayer->setName("Root layer");
    m_nonCompositedContentLayer->setName("Non-composited content");
#endif

    m_rootLayer->addChild(m_nonCompositedContentLayer.get());
    m_nonCompositedContentLayer->setNeedsDisplay();

    // The creation of the TextureMapper needs an active OpenGL context.
    GLContext* context = m_webView->glWindowContext();
    context->makeContextCurrent();

    m_textureMapper = TextureMapperGL::create();
    static_cast<TextureMapperGL*>(m_textureMapper.get())->setEnableEdgeDistanceAntialiasing(true);
    toTextureMapperLayer(m_rootLayer.get())->setTextureMapper(m_textureMapper.get());

		flushAndRenderLayers();
	}

	AcceleratedContext::~AcceleratedContext()
	{
    stopAnyPendingLayerFlush();
	}

	void AcceleratedContext::stopAnyPendingLayerFlush()
	{
		webkitTrace();
	}

	bool AcceleratedContext::enabled()
	{
		return m_rootLayer && m_textureMapper;
	}

	bool AcceleratedContext::renderLayersToWindow(cairo_t* cr, const IntRect& clipRect)
	{
		webkitTrace();
    m_redrawPendingTime = 0;

    if (!enabled()) return false;

    const IntSize& windowSize = roundedIntSize(m_webView->positionAndSize().size());
    cairo_surface_t* windowSurface = cairo_image_surface_create(CAIRO_FORMAT_ARGB32, windowSize.width(), windowSize.height());

		if (!windowSurface) return true;

    cairo_rectangle(cr, clipRect.x(), clipRect.y(), clipRect.width(), clipRect.height());
    cairo_set_source_surface(cr, windowSurface, 0, 0);
    cairo_set_operator(cr, CAIRO_OPERATOR_SOURCE);
    cairo_fill(cr);

    if ((toTextureMapperLayer(m_rootLayer.get())->descendantsOrSelfHaveRunningAnimations() || m_needsExtraFlush)) {
			flushAndRenderLayers();
			//!m_layerFlushTimerCallbackId &&
			//m_needsExtraFlush = false;
			//double nextFlush = std::max((1 / 60) - (currentTime() - m_lastFlushTime), 0.0);
			//m_layerFlushTimerCallbackId = 1;
			//layerFlushTimerFired();
			//emscripten_async_call((void (*)(void *))(this->layerFlushTimerFiredCallback), this, 1000 * nextFlush);
		}

    return true;
	}

	GLContext* AcceleratedContext::prepareForRendering()
	{
 		webkitTrace();
		if (!enabled()) return 0;

    GLContext* context = GLContext::getCurrent();
    if (!context) return 0;

    if (!context->makeContextCurrent()) return 0;
    return context;
	}

	void AcceleratedContext::compositeLayersToContext(CompositePurpose purpose)
	{
		webkitTrace();
    GLContext* context = prepareForRendering();
    if (!context) return;

    const IntSize& windowSize = roundedIntSize(m_webView->positionAndSize().size());
    glViewport(0, 0, windowSize.width(), windowSize.height());

    if (purpose == ForResize) {
			glClearColor(1, 1, 1, 0);
			glClear(GL_COLOR_BUFFER_BIT);
    }

    m_textureMapper->beginPainting();
    toTextureMapperLayer(m_rootLayer.get())->paint();
    //m_fpsCounter.updateFPSAndDisplay(m_textureMapper.get());
    m_textureMapper->endPainting();

    context->swapBuffers();
	}

	void AcceleratedContext::clearEverywhere()
	{
		webkitTrace();
    GLContext* context = prepareForRendering();
    if (!context) return;

    const IntSize& windowSize = roundedIntSize(m_webView->positionAndSize().size());
    glViewport(0, 0, windowSize.width(), windowSize.height());
    glClearColor(1, 1, 1, 1);
    glClear(GL_COLOR_BUFFER_BIT);

    context->swapBuffers();

    // FIXME: It seems that when using double-buffering (and on some drivers single-buffering)
    // and XComposite window redirection, two swap buffers are required to force the pixmap
    // to update. This isn't a problem during animations, because swapBuffer is continuously
    // called. For non-animation situations we use this terrible hack until we can get to the
    // bottom of the issue.
    //if (!toTextureMapperLayer(m_rootLayer.get())->descendantsOrSelfHaveRunningAnimations()) {
		//	context->swapBuffers();
		//	context->swapBuffers();
    //}
	}

	void AcceleratedContext::setRootCompositingLayer(GraphicsLayer* graphicsLayer)
	{
		webkitTrace();
    // Clearing everywhere when turning on or off the layer tree prevents us from flashing
    // old content before the first flush.
    clearEverywhere();

    if (!graphicsLayer) {
			stopAnyPendingLayerFlush();

			// Shrink the offscreen window to save memory while accelerated compositing is turned off.
			//if (m_redirectedWindow)m_redirectedWindow->resize(IntSize(1, 1));
			m_rootLayer = nullptr;
			m_nonCompositedContentLayer = nullptr;
			m_textureMapper = nullptr;
			return;
    }

    // Add the accelerated layer tree hierarchy.
    initialize();

    m_nonCompositedContentLayer->removeAllChildren();
    m_nonCompositedContentLayer->addChild(graphicsLayer);

    stopAnyPendingLayerFlush();

    // FIXME: Two flushes seem necessary to get the proper rendering in some cases. It's unclear
    // if this is a bug with the RedirectedXComposite window or with this class.
    m_needsExtraFlush = true;
    flushAndRenderLayers();
	}

	void AcceleratedContext::setNonCompositedContentsNeedDisplay(const IntRect& rect)
	{
		webkitTrace();

    if (!m_rootLayer) return;
    if (rect.isEmpty()) {
			m_rootLayer->setNeedsDisplay();
			return;
    }
    m_nonCompositedContentLayer->setNeedsDisplayInRect(rect);
    flushAndRenderLayers();
	}

	void AcceleratedContext::resizeRootLayer(const IntSize& newSize)
	{
		webkitTrace();
    if (!enabled()) return;

    if (m_rootLayer->size() == newSize) return;

		m_webView->resize(newSize.width(), newSize.height());
		m_rootLayer->setSize(newSize);

    // If the newSize exposes new areas of the non-composited content a setNeedsDisplay is needed
    // for those newly exposed areas.
    FloatSize oldSize = m_nonCompositedContentLayer->size();
    m_nonCompositedContentLayer->setSize(newSize);

    if (newSize.width() > oldSize.width()) {
			float height = std::min(static_cast<float>(newSize.height()), oldSize.height());
			m_nonCompositedContentLayer->setNeedsDisplayInRect(FloatRect(oldSize.width(), 0, newSize.width() - oldSize.width(), height));
    }

    if (newSize.height() > oldSize.height())
			m_nonCompositedContentLayer->setNeedsDisplayInRect(FloatRect(0, oldSize.height(), newSize.width(), newSize.height() - oldSize.height()));

    m_nonCompositedContentLayer->setNeedsDisplayInRect(IntRect(IntPoint(), newSize));
    compositeLayersToContext(ForResize);
    flushAndRenderLayers();
	}

	void AcceleratedContext::scrollNonCompositedContents(const IntRect& scrollRect, const IntSize& scrollOffset)
	{
		webkitTrace();
    m_nonCompositedContentLayer->setNeedsDisplayInRect(scrollRect);
		flushAndRenderLayers();
	}

	bool AcceleratedContext::flushPendingLayerChanges()
	{
		webkitTrace();
    m_rootLayer->flushCompositingStateForThisLayerOnly();
    m_nonCompositedContentLayer->flushCompositingStateForThisLayerOnly();
		m_webView->p()->mainFrame->coreFrame()->view()->flushCompositingStateIncludingSubframes();
    return true;
	}

	void AcceleratedContext::flushAndRenderLayers()
	{
		webkitTrace();
    if (!enabled()) {
			return;
		}

    Frame* frame = m_webView->m_private->mainFrame->coreFrame();

		ASSERT(frame->isMainFrame());

		if (!frame->contentRenderer() || !frame->view()) {
			return;
		}
    frame->view()->updateLayoutAndStyleIfNeededRecursive();

    if (!enabled()) {
			return;
		}
    GLContext* context = GLContext::getCurrent();
    if (context && !context->makeContextCurrent()) {
			return;
		}

    if (!flushPendingLayerChanges()) {
			return;
		}

    m_lastFlushTime = currentTime();
    compositeLayersToContext();

		//renderLayersToWindow();
		if (!m_redrawPendingTime)
			m_redrawPendingTime = currentTime();
	}


	void AcceleratedContext::notifyAnimationStarted(const GraphicsLayer*, double time) {
		webkitTrace();
	}
	void AcceleratedContext::notifyFlushRequired(const GraphicsLayer*) {
		webkitTrace();
	}

	void AcceleratedContext::paintContents(const GraphicsLayer* layer, GraphicsContext& context, GraphicsLayerPaintingPhase phase, const IntRect& rectToPaint)
	{
		//Color c = Color(255,0,0,127);
		//FloatRect f = FloatRect(10,10,50,50);
		webkitTrace();
    context.save();
		//context.fillRect(f,c,ColorSpace::ColorSpaceDeviceRGB);
		//context.setFillColor(c,ColorSpace::ColorSpaceDeviceRGB);
		//context.fillEllipse(f);
		//context.clip(rectToPaint);
		ASSERT(m_webView->p()->mainFrame->coreFrame()->mainFrame().isMainFrame());
    m_webView->p()->mainFrame->coreFrame()->mainFrame().view()->paintContents(&context, rectToPaint);
    context.restore();
	}
	
}

#endif

#endif // if 0

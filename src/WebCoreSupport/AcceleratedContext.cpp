#include "config.h"
#include "AcceleratedContext.h"
#include "CairoUtilities.h"
#include "DebuggerJS.h"
#include "FrameView.h"
#include "MainFrame.h"
#include "PlatformContextCairo.h"
#include "Settings.h"
#if USE(TEXTURE_MAPPER) && USE(TEXTURE_MAPPER_GL)
#include "TextureMapperGL.h"
#include "TextureMapperLayer.h"
#include "GraphicsLayerTextureMapper.h"
#endif
#include "GraphicsLayerClient.h"
#include "WebView.h"

#include <cairo.h>
#include <emscripten.h>
#include <wtf/CurrentTime.h>
#include "GL/glew.h"

// There seems to be a delicate balance between the main loop being flooded
// with motion events (that force flushes) and starving the main loop of events
// with flush callbacks. This delay is entirely empirical.
const double framesPerSecond = 60;
const double scheduleDelay = (1.0 / framesPerSecond);

namespace WebCore {

	AcceleratedContext::AcceleratedContext(WebView* webView)
		: m_view(webView)
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
		if (m_rootLayer) return;

		IntSize pageSize = roundedIntSize(m_view->positionAndSize().size());

		clearEverywhere();
		m_rootLayer = GraphicsLayer::create(0, this);
		m_rootLayer->setDrawsContent(false);
		m_rootLayer->setMasksToBounds(false);
		m_rootLayer->setSize(FloatSize(pageSize.width(),pageSize.height()));

		// The non-composited contents are a child of the root layer.
		m_nonCompositedContentLayer = GraphicsLayer::create(0, this);
		m_nonCompositedContentLayer->setDrawsContent(true);
		m_nonCompositedContentLayer->setContentsOpaque(false);
		m_nonCompositedContentLayer->setSize(pageSize);

		if (m_view->m_private->corePage->settings().acceleratedDrawingEnabled())
			m_nonCompositedContentLayer->setAcceleratesDrawing(true);

#ifndef NDEBUG
		m_rootLayer->setName("Root layer");
		m_nonCompositedContentLayer->setName("Non-composited content");
#endif

		m_rootLayer->addChild(m_nonCompositedContentLayer.get());
		m_nonCompositedContentLayer->setNeedsDisplay();

		// The creation of the TextureMapper needs an active OpenGL context.
		GLContext* context = m_view->glWindowContext();
		context->makeContextCurrent();

#if USE(TEXTURE_MAPPER) && USE(TEXTURE_MAPPER_GL)
		m_textureMapper = TextureMapper::create(TextureMapper::OpenGLMode);
		static_cast<TextureMapperGL*>(m_textureMapper.get())->setEnableEdgeDistanceAntialiasing(true);
		toTextureMapperLayer(m_rootLayer.get())->setTextureMapper(m_textureMapper.get());
#endif
		scheduleLayerFlush();
	}

	AcceleratedContext::~AcceleratedContext()
	{
		webkitTrace();
		stopAnyPendingLayerFlush();
	}

	void AcceleratedContext::stopAnyPendingLayerFlush()
	{
		webkitTrace();
	}

	bool AcceleratedContext::enabled()
	{
		webkitTrace();
#if USE(TEXTURE_MAPPER) && USE(TEXTURE_MAPPER_GL)
		return m_rootLayer && m_textureMapper;
#else
		return m_rootLayer != nullptr;
#endif
	}

	GLContext* AcceleratedContext::prepareForRendering()
	{
		webkitTrace();

		if (!enabled())
			return NULL;

		GLContext* context = GLContext::getCurrent();

		if (!context || !context->makeContextCurrent())
			return NULL;

		return context;
	}

	void AcceleratedContext::compositeLayersToContext(CompositePurpose purpose)
	{
		webkitTrace();
		GLContext* context = prepareForRendering();

		if (!context)
			return;

		IntSize windowSize = roundedIntSize(m_view->positionAndSize().size());
		glViewport(0, 0, windowSize.width(), windowSize.height());

		if (purpose == ForResize) {
			glClearColor(1, 1, 1, 0);
			glClear(GL_COLOR_BUFFER_BIT);
		}

#if USE(TEXTURE_MAPPER) && USE(TEXTURE_MAPPER_GL)
		m_textureMapper->beginPainting();
		toTextureMapperLayer(m_rootLayer.get())->paint();
		m_textureMapper->endPainting();
#else
		// TODO: Composite layers together, without texutre mapping this is an
		// unknown.
#endif

		context->swapBuffers();

#if USE(TEXTURE_MAPPER) && USE(TEXTURE_MAPPER_GL)
		// Without this call animations will not render, check to see if we have any existing
		// (pending) animations and callback a render every 1/60th a second.
		if(toTextureMapperLayer(m_rootLayer.get())->descendantsOrSelfHaveRunningAnimations()) {
			m_layerFlushTimerCallbackId = 1;
			emscripten_async_call(&layerFlushTimerFiredCallback, this, scheduleDelay * 1000);
		}
#else
		// TODO: Determine if there's a running animation and call back for a composite.
#endif
	}

	void AcceleratedContext::clearEverywhere()
	{
		webkitTrace();
		GLContext* context = prepareForRendering();
		if (!context) return;

		IntSize windowSize = roundedIntSize(m_view->positionAndSize().size());
		glViewport(0, 0, windowSize.width(), windowSize.height());
		glClearColor(1, 1, 1, 0);
		glClear(GL_COLOR_BUFFER_BIT);

		context->swapBuffers();
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
			m_rootLayer = nullptr;
			m_nonCompositedContentLayer = nullptr;
#if USE(TEXTURE_MAPPER) && USE(TEXTURE_MAPPER_GL)
			m_textureMapper = nullptr;
#endif
			return;
		}

		// Add the accelerated layer tree hierarchy.
		initialize();

		m_nonCompositedContentLayer->removeAllChildren();
		m_nonCompositedContentLayer->addChild(graphicsLayer);

		stopAnyPendingLayerFlush();
		scheduleLayerFlush();
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
		scheduleLayerFlush();
	}

	void AcceleratedContext::resizeRootLayer(const IntSize& newSize)
	{
		webkitTrace();
		if (!enabled()) return;

		FloatSize oldSize = m_nonCompositedContentLayer->size();

		if (m_rootLayer->size() == newSize)
			return;

		// If the newSize exposes new areas of the non-composited content a setNeedsDisplay is needed
		// for those newly exposed areas.
		m_rootLayer->setSize(newSize);
		m_nonCompositedContentLayer->setSize(newSize);

		if (newSize.width() > oldSize.width()) {
			float height = std::min(static_cast<float>(newSize.height()), oldSize.height());
			m_nonCompositedContentLayer->setNeedsDisplayInRect(FloatRect(oldSize.width(), 0, newSize.width() - oldSize.width(), height));
		}

		if (newSize.height() > oldSize.height())
			m_nonCompositedContentLayer->setNeedsDisplayInRect(FloatRect(0, oldSize.height(), newSize.width(), newSize.height() - oldSize.height()));

		m_nonCompositedContentLayer->setNeedsDisplayInRect(IntRect(IntPoint(), newSize));
		compositeLayersToContext(ForResize);
		scheduleLayerFlush();
	}

	void AcceleratedContext::scrollNonCompositedContents(const IntRect& scrollRect, const IntSize& scrollOffset)
	{
		webkitTrace();
		m_nonCompositedContentLayer->setNeedsDisplayInRect(scrollRect);
		scheduleLayerFlush();
	}

	void AcceleratedContext::layerFlushTimerFiredCallback(void* context)
	{
		webkitTrace();
		AcceleratedContext *contexts = (AcceleratedContext *)context;
		contexts->layerFlushTimerFired();
	}

	void AcceleratedContext::scheduleLayerFlush()
	{
		webkitTrace();
		if (!enabled() || m_layerFlushTimerCallbackId)
			return;

		m_layerFlushTimerCallbackId = 1;
		double nextFlush = std::max(scheduleDelay - (currentTime() - m_lastFlushTime), 0.0);
		emscripten_async_call(&layerFlushTimerFiredCallback, this, nextFlush * 1000);
	}

	bool AcceleratedContext::flushPendingLayerChanges()
	{
		webkitTrace();

		if (!enabled())
			return false;

		m_rootLayer->flushCompositingStateForThisLayerOnly();
		m_nonCompositedContentLayer->flushCompositingStateForThisLayerOnly();
		return m_view->p()->mainFrame->coreFrame()->view()->flushCompositingStateIncludingSubframes();
	}

	void AcceleratedContext::flushAndRenderLayers()
	{
		webkitTrace();

		if (!enabled())
			return;

		Frame* frame = m_view->m_private->mainFrame->coreFrame();

		ASSERT(frame->isMainFrame());

		if (!frame->contentRenderer() || !frame->view())
			return;

		frame->view()->updateLayoutAndStyleIfNeededRecursive();

		if (!enabled())
			return;

		GLContext* context = GLContext::getCurrent();
	
		if (context && !context->makeContextCurrent())
			return;

		if (!flushPendingLayerChanges())
			return;

		m_lastFlushTime = currentTime();
		compositeLayersToContext();

		if (!m_redrawPendingTime)
			m_redrawPendingTime = currentTime();
	}

	void AcceleratedContext::layerFlushTimerFired()
	{
		webkitTrace();
		if(!m_layerFlushTimerCallbackId)
			return;
		m_layerFlushTimerCallbackId = 0;
		flushAndRenderLayers();
	}

	void AcceleratedContext::notifyAnimationStarted(const GraphicsLayer*, double time) {
		notImplemented();
	}

	void AcceleratedContext::notifyFlushRequired(const GraphicsLayer*) {
		webkitTrace();
		scheduleLayerFlush();
	}

	void AcceleratedContext::paintContents(const GraphicsLayer* layer, GraphicsContext& context, GraphicsLayerPaintingPhase phase, const IntRect& rectToPaint)
	{
		webkitTrace();
		Frame& frame = (m_view->m_private->mainFrame->coreFrame()->mainFrame());
		ASSERT(frame.isMainFrame());
		context.save();
		context.clip(rectToPaint);
		if(m_view->m_private->transparent)
			context.clearRect(rectToPaint);
		frame.view()->paint(&context, rectToPaint);
		context.restore();
	}
}

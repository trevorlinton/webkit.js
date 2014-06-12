/*
 * Copyright (C) 2014 True Interactions. BSD-style License
 */

#include <emscripten.h>
#include <cstdio>

#include "config.h"
#include "WebView.h"
#include "Page.h"
#include "Frame.h"
#include "MainFrame.h"
#include "ChromeClientJS.h"
#include "FrameLoaderClientJS.h"
#include "WebKitJSStrategies.h"
#include "DebuggerJS.h"
#include "Chrome.h"
#include "DocumentLoader.h"
#include "ElementIterator.h"
#include "FrameView.h"
#include "ImageBuffer.h"
#include "ImageObserver.h"
#include "IntRect.h"
#include "MainFrame.h"
#include "RenderStyle.h"
#include "Settings.h"
#include "RuntimeEnabledFeaturesJS.h"
#include "GraphicsContext.h"
#include "EmptyClients.h"

#if USE(CAIRO)
#include <platform/cairo/WidgetBackingStore.h>
#include <platform/cairo/WidgetBackingStoreCairo.h>
#include "cairo.h"
#include "cairo-gl.h"
#include "PlatformContextCairo.h"
#elif USE(SKIA)
#endif
#include <SDL.h>

using namespace WebCore;
using namespace WTF;


namespace WebKit {

	WebView::WebView(int width, int height)
	{
		// This must occur prior to anything else,
		// unless you like assertion failures.
		WebKitJSStrategies::initialize();
		m_private = new WebViewPrivate();
		m_private->transparent = false;
		Page::PageClients pageClients;
		fillWithEmptyClients(pageClients);

    if(SDL_Init(SDL_INIT_VIDEO) < 0) {
			abort();
    }

		m_private->chromeClient = WebCore::ChromeClientJS::createClient(this);
		pageClients.chromeClient = m_private->chromeClient->toChromeClient();
    m_private->mainFrame = new WebCore::WebFrameJS(this);
		pageClients.loaderClientForMainFrame = WebCore::FrameLoaderClientJS::createClient(m_private->mainFrame);
		m_private->corePage = new Page(pageClients);
    m_private->corePage->addLayoutMilestones(DidFirstVisuallyNonEmptyLayout);
    m_private->corePage->setGroupName(L"webkit.js");

		m_private->corePage->settings().setMediaEnabled(false);
		m_private->corePage->settings().setScreenFontSubstitutionEnabled(true);
		m_private->corePage->settings().setWebSecurityEnabled(false);
		m_private->corePage->settings().setJavaEnabled(false);
		m_private->corePage->settings().setMockScrollbarsEnabled(true);
    m_private->corePage->settings().setLoadsImagesAutomatically(true);
    m_private->corePage->settings().setDefaultFixedFontSize(13);
    m_private->corePage->settings().setDefaultFontSize(16);
		m_private->corePage->settings().setStandardFontFamily("Liberation");
		m_private->corePage->settings().setScreenFontSubstitutionEnabled(true);
    m_private->corePage->settings().setScriptEnabled(false);
		m_private->corePage->settings().setPluginsEnabled(false);
		m_private->corePage->settings().setMockScrollbarsEnabled(true);

#if USE(ACCELERATED_COMPOSITING)
		m_private->corePage->settings().setMinimumAccelerated2dCanvasSize(1);
		m_private->corePage->settings().setAcceleratedCompositedAnimationsEnabled(true);
		m_private->corePage->settings().setAcceleratedDrawingEnabled(true);
		m_private->corePage->settings().setAcceleratedFiltersEnabled(true);
		m_private->corePage->settings().setAcceleratedCompositingEnabled(true);
		m_private->corePage->settings().setAcceleratedDrawingEnabled(true);
		m_private->corePage->settings().setTiledBackingStoreEnabled(true);
		m_private->corePage->settings().setForceCompositingMode(true);
		m_private->corePage->settings().setApplyDeviceScaleFactorInCompositor(true);
#else
		/*m_private->corePage->settings().setAcceleratedCompositedAnimationsEnabled(false);
		m_private->corePage->settings().setAcceleratedDrawingEnabled(false);
		m_private->corePage->settings().setAcceleratedFiltersEnabled(false);
		m_private->corePage->settings().setAcceleratedCompositingEnabled(false);
		m_private->corePage->settings().setAcceleratedDrawingEnabled(false);
		m_private->corePage->settings().setTiledBackingStoreEnabled(false);*/
#endif
		m_private->mainFrame->init();
		m_private->corePage->setIsVisible(true, true);
		m_private->corePage->setIsInWindow(true);
		resize(width, height);
		EM_ASM({
			postMessage({target:'status',context:'ready'});
		});
	}

	WebView::~WebView() {
		//if (m_private->sdl_surface)
		//	SDL_FreeSurface(m_private->sdl_surface);
    if (m_private->mainFrame && m_private->mainFrame->coreFrame())
			m_private->mainFrame->coreFrame()->loader().detachFromParent();

    delete m_private->corePage;
		m_private->corePage = 0;
		delete m_private;
	}

	void WebView::setUrl(char *) {
	}
	char *WebView::url() {
		return NULL;
	}

	void WebView::setHtml(char *data, int length) {
		WebCore::MainFrame& frame = m_private->mainFrame->coreFrame()->mainFrame();
		ASSERT(frame.isMainFrame());

		WebCore::FrameLoader& loader = frame.loader();
		ASSERT(loader.activeDocumentLoader());
		loader.activeDocumentLoader()->writer().begin(URL());
		loader.activeDocumentLoader()->writer().addData(data, length);
		loader.activeDocumentLoader()->writer().end();
	}

	char *WebView::html() {
		return NULL;
	}

	WebCore::FloatRect WebView::positionAndSize() {
		return m_private->size;
	}


#if USE(ACCELERATED_COMPOSITING)
	WebCore::GLContext *WebView::glWindowContext() {
    if (m_private->glContext)
			return m_private->glContext.get();

    m_private->glContext = GLContext::createContextForWindow(1, GLContext::sharingContext());
    return m_private->glContext.get();
	}
#endif

	void WebView::resize(int width, int height)
	{
		webkitTrace();
#if USE(ACCELERATED_COMPOSITING)
		SDL_GL_SetAttribute( SDL_GL_DOUBLEBUFFER, 1 );
		SDL_GL_SetAttribute(SDL_GL_RED_SIZE,        8);
		SDL_GL_SetAttribute(SDL_GL_GREEN_SIZE,      8);
		SDL_GL_SetAttribute(SDL_GL_BLUE_SIZE,       8);
		SDL_GL_SetAttribute(SDL_GL_ALPHA_SIZE,      8);

		SDL_GL_SetAttribute(SDL_GL_DEPTH_SIZE,      16);
		SDL_GL_SetAttribute(SDL_GL_BUFFER_SIZE,        32);

		SDL_GL_SetAttribute(SDL_GL_ACCUM_RED_SIZE,    8);
		SDL_GL_SetAttribute(SDL_GL_ACCUM_GREEN_SIZE,    8);
		SDL_GL_SetAttribute(SDL_GL_ACCUM_BLUE_SIZE,    8);
		SDL_GL_SetAttribute(SDL_GL_ACCUM_ALPHA_SIZE,    8);

		SDL_GL_SetAttribute(SDL_GL_MULTISAMPLEBUFFERS,  1);
		SDL_GL_SetAttribute(SDL_GL_MULTISAMPLESAMPLES,  2);

		m_private->sdl_screen = SDL_SetVideoMode( width, height, 32, SDL_OPENGL);
		//SDL_GL_SetSwapInterval(1);

		// Unsure why, but we need to initialize both EGL adn GL contexts.
		//m_private->glContext = GLContext::createContextForWindow(1, GLContext::sharingContext());
		//ASSERT(m_private->glContext->makeContextCurrent());
		//GLContext* context = GLContext::getCurrent();
		//ASSERT(context->makeContextCurrent());

		if ( !m_private->sdl_screen ) {
			printf("Unable to set video mode: %s\n", SDL_GetError());
			SDL_Quit();
			exit(2);
		}
#else
		m_private->sdl_screen = SDL_SetVideoMode( width, height, 32, SDL_SWSURFACE);
		if (!m_private->sdl_screen) {
			fprintf(stderr, "Couldn't set video mode: %s\n", SDL_GetError());
			SDL_Quit();
			exit(2);
		}
		SDL_LockSurface(m_private->sdl_screen);
#endif
		IntSize oldSize = IntSize(m_private->size.width(), m_private->size.height());
		m_private->chromeClient->widgetSizeChanged(oldSize, IntSize(width,height));
	}

	void WebView::scrollBy(int offsetX, int offsetY)
	{
	
    Frame* coreFrame = m_private->mainFrame->coreFrame();
    if (!coreFrame->view())
			return;
    coreFrame->view()->scrollBy(IntSize(offsetX, offsetY));
	}

	void WebView::handleSDLEvent(const SDL_Event& event)
	{
		// Note: do not add a  here, this funciton executes quite
		// a few times that it will cause the browser to slow down to a crawl
		// to finish writing console messages.
    switch (event.type) {
			case SDL_VIDEORESIZE:
				fprintf(stderr, "WebKit: handleSDLEvent: Received a resize request\n");
        resize(event.resize.w, event.resize.h);
        break;
			case SDL_VIDEOEXPOSE:
        break;
			case SDL_USEREVENT:
				// We use SDL_USEREVENT to fire the shared timer.
        //fireSharedTimer();
        break;
			case SDL_MOUSEMOTION:
        //handleMotionEvent(m_private->corePage->mainFrame(), event.motion);
        break;
			case SDL_MOUSEBUTTONDOWN:
			case SDL_MOUSEBUTTONUP:
        //handleMouseEvent(m_private->corePage->mainFrame(), event.button);
        break;
			case SDL_KEYDOWN:
			case SDL_KEYUP:
        //handleKeyboardEvent(m_private->corePage, event.key);
			default:
        break;
    }

	}
	void WebView::scalefactor(float t) {
		m_private->corePage->setDeviceScaleFactor(t);
	}
	void WebView::resizeEvent(void *) {
	
	}
	void WebView::paintEvent(void *) {
	
	}
	void WebView::changeEvent(void *) {
	
	}
	void WebView::mouseMoveEvent(void *) {
	
	}
	void WebView::mousePressEvent(void *) {
	
	}
	void WebView::mouseDoubleClickEvent(void *) {
	
	}
	void WebView::mouseReleaseEvent(void *) {
	
	}
	void WebView::contextMenuEvent(void *) {
	
	}
	void WebView::wheelEvent(void *) {
	
	}
	void WebView::keyPressEvent(void *) {
	
	}
	void WebView::keyReleaseEvent(void *) {
	
	}
	void WebView::dragEnterEvent(void *) {
	
	}
	void WebView::dragLeaveEvent(void *) {
	
	}
	void WebView::dragMoveEvent(void *) {
	
	}
	void WebView::dropEvent(void *) {
	
	}
	void WebView::focusInEvent(void *) {
	
	}
	void WebView::focusOutEvent(void *) {
	
	}
	void WebView::inputMethodEvent(void *) {
	
	}
	bool WebView::focusNextPrevChild(bool next) {
	
		return false;
	}

}


